export const id = 226;
export const ids = [226];
export const modules = {
  37277: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Nd
    });
    var pd = kd(37280);
    class Nd {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    Nd.Instances = [], Nd.OnEnginesDisposedObservable = new pd.e, Nd._LastCreatedScene = null, Nd.UseFallbackTexture = !0, Nd.FallbackTexture = ""
  },
  37271: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => pd
    });
    class pd {
      static SetMatrixPrecision(dd) {
        if (pd.MatrixTrackPrecisionChange = !1, dd && !pd.MatrixUse64Bits && pd.MatrixTrackedMatrices)
          for (let Jd = 0; Jd < pd.MatrixTrackedMatrices.length; ++Jd) {
            const dd = pd.MatrixTrackedMatrices[Jd],
              kd = dd._m;
            dd._m = new Array(16);
            for (let Jd = 0; Jd < 16; ++Jd) dd._m[Jd] = kd[Jd]
          }
        pd.MatrixUse64Bits = dd, pd.MatrixCurrentType = pd.MatrixUse64Bits ? Array : Float32Array, pd.MatrixTrackedMatrices = null
      }
    }
    pd.MatrixUse64Bits = !1, pd.MatrixTrackPrecisionChange = !0, pd.MatrixCurrentType = Float32Array, pd.MatrixTrackedMatrices = []
  },
  37296: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Zd,
      g: () => Cd,
      k: () => gd,
      o: () => pd,
      q: () => Wd,
      r: () => Pd
    });
    class pd {}

    function Nd(dd) {
      dd.updateFlag = pd._UpdateFlagSeed++
    }

    function Wd(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const Nd = dd.spd(),
        Wd = Jd.spd(),
        Pd = Nd[0],
        Zd = Nd[1],
        gd = Nd[2],
        Cd = Nd[3],
        Kd = Nd[4],
        od = Nd[5],
        ld = Nd[6],
        Qd = Nd[7],
        Ld = Nd[8],
        Od = Nd[9],
        ed = Nd[10],
        Rd = Nd[11],
        Id = Nd[12],
        Gd = Nd[13],
        vd = Nd[14],
        xd = Nd[15],
        qd = Wd[0],
        Bd = Wd[1],
        sd = Wd[2],
        ad = Wd[3],
        Md = Wd[4],
        Fd = Wd[5],
        Yd = Wd[6],
        md = Wd[7],
        bd = Wd[8],
        Sd = Wd[9],
        jd = Wd[10],
        Xd = Wd[11],
        fd = Wd[12],
        nd = Wd[13],
        Ud = Wd[14],
        yd = Wd[15];
      kd[pd] = Pd * qd + Zd * Md + gd * bd + Cd * fd, kd[pd + 1] = Pd * Bd + Zd * Fd + gd * Sd + Cd * nd, kd[pd + 2] = Pd * sd + Zd * Yd + gd * jd + Cd * Ud, kd[pd + 3] = Pd * ad + Zd * md + gd * Xd + Cd * yd, kd[pd + 4] = Kd * qd + od * Md + ld * bd + Qd * fd, kd[pd + 5] = Kd * Bd + od * Fd + ld * Sd + Qd * nd, kd[pd + 6] = Kd * sd + od * Yd + ld * jd + Qd * Ud, kd[pd + 7] = Kd * ad + od * md + ld * Xd + Qd * yd, kd[pd + 8] = Ld * qd + Od * Md + ed * bd + Rd * fd, kd[pd + 9] = Ld * Bd + Od * Fd + ed * Sd + Rd * nd, kd[pd + 10] = Ld * sd + Od * Yd + ed * jd + Rd * Ud, kd[pd + 11] = Ld * ad + Od * md + ed * Xd + Rd * yd, kd[pd + 12] = Id * qd + Gd * Md + vd * bd + xd * fd, kd[pd + 13] = Id * Bd + Gd * Fd + vd * Sd + xd * nd, kd[pd + 14] = Id * sd + Gd * Yd + vd * jd + xd * Ud, kd[pd + 15] = Id * ad + Gd * md + vd * Xd + xd * yd
    }

    function Pd(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      Wd(dd, Jd, kd.spd(), pd), Nd(kd)
    }

    function Zd(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const pd = dd.spd();
      Jd[kd] = pd[0], Jd[kd + 1] = pd[1], Jd[kd + 2] = pd[2], Jd[kd + 3] = pd[3], Jd[kd + 4] = pd[4], Jd[kd + 5] = pd[5], Jd[kd + 6] = pd[6], Jd[kd + 7] = pd[7], Jd[kd + 8] = pd[8], Jd[kd + 9] = pd[9], Jd[kd + 10] = pd[10], Jd[kd + 11] = pd[11], Jd[kd + 12] = pd[12], Jd[kd + 13] = pd[13], Jd[kd + 14] = pd[14], Jd[kd + 15] = pd[15]
    }

    function gd(dd, Jd) {
      const kd = Cd(dd, Jd.spd());
      return kd && Nd(Jd), kd
    }

    function Cd(dd, Jd) {
      const kd = dd.spd(),
        pd = kd[0],
        Nd = kd[1],
        Wd = kd[2],
        Pd = kd[3],
        Zd = kd[4],
        gd = kd[5],
        Cd = kd[6],
        Kd = kd[7],
        od = kd[8],
        ld = kd[9],
        Qd = kd[10],
        Ld = kd[11],
        Od = kd[12],
        ed = kd[13],
        Rd = kd[14],
        Id = kd[15],
        Gd = Qd * Id - Rd * Ld,
        vd = ld * Id - ed * Ld,
        xd = ld * Rd - ed * Qd,
        qd = od * Id - Od * Ld,
        Bd = od * Rd - Qd * Od,
        sd = od * ed - Od * ld,
        ad = +(gd * Gd - Cd * vd + Kd * xd),
        Md = -(Zd * Gd - Cd * qd + Kd * Bd),
        Fd = +(Zd * vd - gd * qd + Kd * sd),
        Yd = -(Zd * xd - gd * Bd + Cd * sd),
        md = pd * ad + Nd * Md + Wd * Fd + Pd * Yd;
      if (0 === md) return !1;
      const bd = 1 / md,
        Sd = Cd * Id - Rd * Kd,
        jd = gd * Id - ed * Kd,
        Xd = gd * Rd - ed * Cd,
        fd = Zd * Id - Od * Kd,
        nd = Zd * Rd - Od * Cd,
        Ud = Zd * ed - Od * gd,
        yd = Cd * Ld - Qd * Kd,
        Dd = gd * Ld - ld * Kd,
        Td = gd * Qd - ld * Cd,
        Ed = Zd * Ld - od * Kd,
        cd = Zd * Qd - od * Cd,
        hd = Zd * ld - od * gd,
        rd = -(Nd * Gd - Wd * vd + Pd * xd),
        ud = +(pd * Gd - Wd * qd + Pd * Bd),
        td = -(pd * vd - Nd * qd + Pd * sd),
        Vd = +(pd * xd - Nd * Bd + Wd * sd),
        zd = +(Nd * Sd - Wd * jd + Pd * Xd),
        Hd = -(pd * Sd - Wd * fd + Pd * nd),
        wd = +(pd * jd - Nd * fd + Pd * Ud),
        Ad = -(pd * Xd - Nd * nd + Wd * Ud),
        dJ = -(Nd * yd - Wd * Dd + Pd * Td),
        JJ = +(pd * yd - Wd * Ed + Pd * cd),
        kJ = -(pd * Dd - Nd * Ed + Pd * hd),
        pJ = +(pd * Td - Nd * cd + Wd * hd);
      return Jd[0] = ad * bd, Jd[1] = rd * bd, Jd[2] = zd * bd, Jd[3] = dJ * bd, Jd[4] = Md * bd, Jd[5] = ud * bd, Jd[6] = Hd * bd, Jd[7] = JJ * bd, Jd[8] = Fd * bd, Jd[9] = td * bd, Jd[10] = wd * bd, Jd[11] = kJ * bd, Jd[12] = Yd * bd, Jd[13] = Vd * bd, Jd[14] = Ad * bd, Jd[15] = pJ * bd, !0
    }
    pd._UpdateFlagSeed = 0
  },
  37251: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Od,
      d: () => Ld,
      f: () => vd,
      h: () => Rd,
      k: () => od,
      n: () => ld,
      o: () => Qd
    });
    var pd = kd(37259),
      Nd = kd(37267),
      Wd = kd(37271),
      Pd = kd(37277),
      Zd = kd(37289),
      gd = kd(37296),
      Cd = kd(37303);
    const Kd = dd => parseInt(dd.toString().replace(/\W/g, ""));
    class od {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = dd, this.y = Jd
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let dd = Kd(this.x);
        return dd = 397 * dd ^ Kd(this.y), dd
      }
      toArray(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return dd[Jd] = this.x, dd[Jd + 1] = this.y, this
      }
      lkd(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return od.FromArrayToRef(dd, Jd, this), this
      }
      spd() {
        return [this.x, this.y]
      }
      Fs(dd) {
        return this.x = dd.x, this.y = dd.y, this
      }
      kdd(dd, Jd) {
        return this.x = dd, this.y = Jd, this
      }
      set(dd, Jd) {
        return this.kdd(dd, Jd)
      }
      o5(dd) {
        return this.kdd(dd, dd)
      }
      add(dd) {
        return new od(this.x + dd.x, this.y + dd.y)
      }
      addToRef(dd, Jd) {
        return Jd.x = this.x + dd.x, Jd.y = this.y + dd.y, Jd
      }
      addInPlace(dd) {
        return this.x += dd.x, this.y += dd.y, this
      }
      addInPlaceFromFloats(dd, Jd) {
        return this.x += dd, this.y += Jd, this
      }
      addVector3(dd) {
        return new od(this.x + dd.x, this.y + dd.y)
      }
      subtract(dd) {
        return new od(this.x - dd.x, this.y - dd.y)
      }
      subtractToRef(dd, Jd) {
        return Jd.x = this.x - dd.x, Jd.y = this.y - dd.y, Jd
      }
      hpd(dd) {
        return this.x -= dd.x, this.y -= dd.y, this
      }
      multiplyInPlace(dd) {
        return this.x *= dd.x, this.y *= dd.y, this
      }
      multiply(dd) {
        return new od(this.x * dd.x, this.y * dd.y)
      }
      multiplyToRef(dd, Jd) {
        return Jd.x = this.x * dd.x, Jd.y = this.y * dd.y, Jd
      }
      multiplyByFloats(dd, Jd) {
        return new od(this.x * dd, this.y * Jd)
      }
      divide(dd) {
        return new od(this.x / dd.x, this.y / dd.y)
      }
      divideToRef(dd, Jd) {
        return Jd.x = this.x / dd.x, Jd.y = this.y / dd.y, Jd
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
      minimizeInPlaceFromFloats(dd, Jd) {
        return this.x = Math.min(dd, this.x), this.y = Math.min(Jd, this.y), this
      }
      maximizeInPlaceFromFloats(dd, Jd) {
        return this.x = Math.max(dd, this.x), this.y = Math.max(Jd, this.y), this
      }
      subtractFromFloats(dd, Jd) {
        return new od(this.x - dd, this.y - Jd)
      }
      subtractFromFloatsToRef(dd, Jd, kd) {
        return kd.x = this.x - dd, kd.y = this.y - Jd, kd
      }
      ck() {
        return new od(-this.x, -this.y)
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
        return new od(this.x * dd, this.y * dd)
      }
      scaleToRef(dd, Jd) {
        return Jd.x = this.x * dd, Jd.y = this.y * dd, Jd
      }
      scaleAndAddToRef(dd, Jd) {
        return Jd.x += this.x * dd, Jd.y += this.y * dd, Jd
      }
      equals(dd) {
        return dd && this.x === dd.x && this.y === dd.y
      }
      equalsWithEpsilon(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pd.e;
        return dd && (0, Zd.WithinEpsilon)(this.x, dd.x, Jd) && (0, Zd.WithinEpsilon)(this.y, dd.y, Jd)
      }
      zPd(dd, Jd) {
        return this.x === dd && this.y === Jd
      }
      floor() {
        return new od(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(dd) {
        return dd.x = Math.floor(this.x), dd.y = Math.floor(this.y), dd
      }
      fract() {
        return new od(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(dd) {
        return dd.x = this.x - Math.floor(this.x), dd.y = this.y - Math.floor(this.y), dd
      }
      rotate(dd) {
        return this.rotateToRef(dd, new od)
      }
      rotateToRef(dd, Jd) {
        const kd = Math.cos(dd),
          pd = Math.sin(dd);
        return Jd.x = kd * this.x - pd * this.y, Jd.y = pd * this.x + kd * this.y, Jd
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
        const dd = new od;
        return this.normalizeToRef(dd), dd
      }
      normalizeToRef(dd) {
        const Jd = this.length();
        return 0 === Jd || 1 === Jd ? (dd.x = this.x, dd.y = this.y, dd) : this.scaleToRef(1 / Jd, dd)
      }
      clone() {
        return new od(this.x, this.y)
      }
      dot(dd) {
        return this.x * dd.x + this.y * dd.y
      }
      static Zero() {
        return new od(0, 0)
      }
      static One() {
        return new od(1, 1)
      }
      static Random() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new od((0, Zd.RandomRange)(dd, Jd), (0, Zd.RandomRange)(dd, Jd))
      }
      static RandomToRef() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).kdd((0, Zd.RandomRange)(dd, Jd), (0, Zd.RandomRange)(dd, Jd))
      }
      static get ZeroReadOnly() {
        return od._ZeroReadOnly
      }
      static FromArray(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new od(dd[Jd], dd[Jd + 1])
      }
      static FromArrayToRef(dd, Jd, kd) {
        return kd.x = dd[Jd], kd.y = dd[Jd + 1], kd
      }
      static FromFloatsToRef(dd, Jd, kd) {
        return kd.kdd(dd, Jd), kd
      }
      static CatmullRom(dd, Jd, kd, pd, Nd) {
        const Wd = Nd * Nd,
          Pd = Nd * Wd,
          Zd = .5 * (2 * Jd.x + (-dd.x + kd.x) * Nd + (2 * dd.x - 5 * Jd.x + 4 * kd.x - pd.x) * Wd + (-dd.x + 3 * Jd.x - 3 * kd.x + pd.x) * Pd),
          gd = .5 * (2 * Jd.y + (-dd.y + kd.y) * Nd + (2 * dd.y - 5 * Jd.y + 4 * kd.y - pd.y) * Wd + (-dd.y + 3 * Jd.y - 3 * kd.y + pd.y) * Pd);
        return new od(Zd, gd)
      }
      static ClampToRef(dd, Jd, kd, pd) {
        return pd.x = (0, Zd.Clamp)(dd.x, Jd.x, kd.x), pd.y = (0, Zd.Clamp)(dd.y, Jd.y, kd.y), pd
      }
      static Clamp(dd, Jd, kd) {
        const pd = (0, Zd.Clamp)(dd.x, Jd.x, kd.x),
          Nd = (0, Zd.Clamp)(dd.y, Jd.y, kd.y);
        return new od(pd, Nd)
      }
      static Hermite(dd, Jd, kd, pd, Nd) {
        const Wd = Nd * Nd,
          Pd = Nd * Wd,
          Zd = 2 * Pd - 3 * Wd + 1,
          gd = -2 * Pd + 3 * Wd,
          Cd = Pd - 2 * Wd + Nd,
          Kd = Pd - Wd,
          ld = dd.x * Zd + kd.x * gd + Jd.x * Cd + pd.x * Kd,
          Qd = dd.y * Zd + kd.y * gd + Jd.y * Cd + pd.y * Kd;
        return new od(ld, Qd)
      }
      static Hermite1stDerivative(dd, Jd, kd, pd, Nd) {
        return this.Hermite1stDerivativeToRef(dd, Jd, kd, pd, Nd, new od)
      }
      static Hermite1stDerivativeToRef(dd, Jd, kd, pd, Nd, Wd) {
        const Pd = Nd * Nd;
        return Wd.x = 6 * (Pd - Nd) * dd.x + (3 * Pd - 4 * Nd + 1) * Jd.x + 6 * (-Pd + Nd) * kd.x + (3 * Pd - 2 * Nd) * pd.x, Wd.y = 6 * (Pd - Nd) * dd.y + (3 * Pd - 4 * Nd + 1) * Jd.y + 6 * (-Pd + Nd) * kd.y + (3 * Pd - 2 * Nd) * pd.y, Wd
      }
      static Lerp(dd, Jd, kd) {
        return od.LerpToRef(dd, Jd, kd, new od)
      }
      static LerpToRef(dd, Jd, kd, pd) {
        return pd.x = dd.x + (Jd.x - dd.x) * kd, pd.y = dd.y + (Jd.y - dd.y) * kd, pd
      }
      static Dot(dd, Jd) {
        return dd.x * Jd.x + dd.y * Jd.y
      }
      static Normalize(dd) {
        return od.NormalizeToRef(dd, new od)
      }
      static NormalizeToRef(dd, Jd) {
        return dd.normalizeToRef(Jd), Jd
      }
      static Minimize(dd, Jd) {
        const kd = dd.x < Jd.x ? dd.x : Jd.x,
          pd = dd.y < Jd.y ? dd.y : Jd.y;
        return new od(kd, pd)
      }
      static Maximize(dd, Jd) {
        const kd = dd.x > Jd.x ? dd.x : Jd.x,
          pd = dd.y > Jd.y ? dd.y : Jd.y;
        return new od(kd, pd)
      }
      static Transform(dd, Jd) {
        return od.TransformToRef(dd, Jd, new od)
      }
      static TransformToRef(dd, Jd, kd) {
        const pd = Jd.m,
          Nd = dd.x * pd[0] + dd.y * pd[4] + pd[12],
          Wd = dd.x * pd[1] + dd.y * pd[5] + pd[13];
        return kd.x = Nd, kd.y = Wd, kd
      }
      static PointInTriangle(dd, Jd, kd, pd) {
        const Nd = .5 * (-kd.y * pd.x + Jd.y * (-kd.x + pd.x) + Jd.x * (kd.y - pd.y) + kd.x * pd.y),
          Wd = Nd < 0 ? -1 : 1,
          Pd = (Jd.y * pd.x - Jd.x * pd.y + (pd.y - Jd.y) * dd.x + (Jd.x - pd.x) * dd.y) * Wd,
          Zd = (Jd.x * kd.y - Jd.y * kd.x + (Jd.y - kd.y) * dd.x + (kd.x - Jd.x) * dd.y) * Wd;
        return Pd > 0 && Zd > 0 && Pd + Zd < 2 * Nd * Wd
      }
      static Distance(dd, Jd) {
        return Math.sqrt(od.DistanceSquared(dd, Jd))
      }
      static DistanceSquared(dd, Jd) {
        const kd = dd.x - Jd.x,
          pd = dd.y - Jd.y;
        return kd * kd + pd * pd
      }
      static Center(dd, Jd) {
        return od.CenterToRef(dd, Jd, new od)
      }
      static CenterToRef(dd, Jd, kd) {
        return kd.kdd((dd.x + Jd.x) / 2, (dd.y + Jd.y) / 2)
      }
      static DistanceOfPointFromSegment(dd, Jd, kd) {
        const pd = od.DistanceSquared(Jd, kd);
        if (0 === pd) return od.Distance(dd, Jd);
        const Nd = kd.subtract(Jd),
          Wd = Math.max(0, Math.min(1, od.Dot(dd.subtract(Jd), Nd) / pd)),
          Pd = Jd.add(Nd.multiplyByFloats(Wd, Wd));
        return od.Distance(dd, Pd)
      }
    }
    od._V8PerformanceHack = new od(.5, .5), od._ZeroReadOnly = od.Zero();
    class ld {
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
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = dd, this._y = Jd, this._z = kd
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "IL"
      }
      getHashCode() {
        let dd = Kd(this._x);
        return dd = 397 * dd ^ Kd(this._y), dd = 397 * dd ^ Kd(this._z), dd
      }
      spd() {
        return [this._x, this._y, this._z]
      }
      toArray(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return dd[Jd] = this._x, dd[Jd + 1] = this._y, dd[Jd + 2] = this._z, this
      }
      lkd(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return ld.FromArrayToRef(dd, Jd, this), this
      }
      toQuaternion() {
        return Ld.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(dd) {
        return this._x += dd._x, this._y += dd._y, this._z += dd._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(dd, Jd, kd) {
        return this._x += dd, this._y += Jd, this._z += kd, this._isDirty = !0, this
      }
      add(dd) {
        return new ld(this._x + dd._x, this._y + dd._y, this._z + dd._z)
      }
      addToRef(dd, Jd) {
        return Jd._x = this._x + dd._x, Jd._y = this._y + dd._y, Jd._z = this._z + dd._z, Jd._isDirty = !0, Jd
      }
      hpd(dd) {
        return this._x -= dd._x, this._y -= dd._y, this._z -= dd._z, this._isDirty = !0, this
      }
      subtract(dd) {
        return new ld(this._x - dd._x, this._y - dd._y, this._z - dd._z)
      }
      subtractToRef(dd, Jd) {
        return this.subtractFromFloatsToRef(dd._x, dd._y, dd._z, Jd)
      }
      subtractFromFloats(dd, Jd, kd) {
        return new ld(this._x - dd, this._y - Jd, this._z - kd)
      }
      subtractFromFloatsToRef(dd, Jd, kd, pd) {
        return pd._x = this._x - dd, pd._y = this._y - Jd, pd._z = this._z - kd, pd._isDirty = !0, pd
      }
      ck() {
        return new ld(-this._x, -this._y, -this._z)
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
        return new ld(this._x * dd, this._y * dd, this._z * dd)
      }
      scaleToRef(dd, Jd) {
        return Jd._x = this._x * dd, Jd._y = this._y * dd, Jd._z = this._z * dd, Jd._isDirty = !0, Jd
      }
      getNormalToRef(dd) {
        const Jd = this.length();
        let kd = Math.acos(this._y / Jd);
        const pd = Math.atan2(this._z, this._x);
        kd > Math.PI / 2 ? kd -= Math.PI / 2 : kd += Math.PI / 2;
        const Nd = Jd * Math.sin(kd) * Math.cos(pd),
          Wd = Jd * Math.cos(kd),
          Pd = Jd * Math.sin(kd) * Math.sin(pd);
        return dd.set(Nd, Wd, Pd), dd
      }
      applyRotationQuaternionToRef(dd, Jd) {
        const kd = this._x,
          pd = this._y,
          Nd = this._z,
          Wd = dd._x,
          Pd = dd._y,
          Zd = dd._z,
          gd = dd._w,
          Cd = 2 * (Pd * Nd - Zd * pd),
          Kd = 2 * (Zd * kd - Wd * Nd),
          od = 2 * (Wd * pd - Pd * kd);
        return Jd._x = kd + gd * Cd + Pd * od - Zd * Kd, Jd._y = pd + gd * Kd + Zd * Cd - Wd * od, Jd._z = Nd + gd * od + Wd * Kd - Pd * Cd, Jd._isDirty = !0, Jd
      }
      applyRotationQuaternionInPlace(dd) {
        return this.applyRotationQuaternionToRef(dd, this)
      }
      applyRotationQuaternion(dd) {
        return this.applyRotationQuaternionToRef(dd, new ld)
      }
      scaleAndAddToRef(dd, Jd) {
        return Jd._x += this._x * dd, Jd._y += this._y * dd, Jd._z += this._z * dd, Jd._isDirty = !0, Jd
      }
      projectOnPlane(dd, Jd) {
        return this.projectOnPlaneToRef(dd, Jd, new ld)
      }
      projectOnPlaneToRef(dd, Jd, kd) {
        const pd = dd.normal,
          Nd = dd.d,
          Wd = ed.IL[0];
        this.subtractToRef(Jd, Wd), Wd.normalize();
        const Pd = ld.Dot(Wd, pd);
        if (Math.abs(Pd) < 1e-10) kd.o5(1 / 0);
        else {
          const dd = -(ld.Dot(Jd, pd) + Nd) / Pd,
            Zd = Wd.scaleInPlace(dd);
          Jd.addToRef(Zd, kd)
        }
        return kd
      }
      equals(dd) {
        return dd && this._x === dd._x && this._y === dd._y && this._z === dd._z
      }
      equalsWithEpsilon(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pd.e;
        return dd && (0, Zd.WithinEpsilon)(this._x, dd._x, Jd) && (0, Zd.WithinEpsilon)(this._y, dd._y, Jd) && (0, Zd.WithinEpsilon)(this._z, dd._z, Jd)
      }
      zPd(dd, Jd, kd) {
        return this._x === dd && this._y === Jd && this._z === kd
      }
      multiplyInPlace(dd) {
        return this._x *= dd._x, this._y *= dd._y, this._z *= dd._z, this._isDirty = !0, this
      }
      multiply(dd) {
        return this.multiplyByFloats(dd._x, dd._y, dd._z)
      }
      multiplyToRef(dd, Jd) {
        return Jd._x = this._x * dd._x, Jd._y = this._y * dd._y, Jd._z = this._z * dd._z, Jd._isDirty = !0, Jd
      }
      multiplyByFloats(dd, Jd, kd) {
        return new ld(this._x * dd, this._y * Jd, this._z * kd)
      }
      divide(dd) {
        return new ld(this._x / dd._x, this._y / dd._y, this._z / dd._z)
      }
      divideToRef(dd, Jd) {
        return Jd._x = this._x / dd._x, Jd._y = this._y / dd._y, Jd._z = this._z / dd._z, Jd._isDirty = !0, Jd
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
      minimizeInPlaceFromFloats(dd, Jd, kd) {
        return dd < this._x && (this.x = dd), Jd < this._y && (this.y = Jd), kd < this._z && (this.z = kd), this
      }
      maximizeInPlaceFromFloats(dd, Jd, kd) {
        return dd > this._x && (this.x = dd), Jd > this._y && (this.y = Jd), kd > this._z && (this.z = kd), this
      }
      isNonUniformWithinEpsilon(dd) {
        const Jd = Math.abs(this._x),
          kd = Math.abs(this._y);
        if (!(0, Zd.WithinEpsilon)(Jd, kd, dd)) return !0;
        const pd = Math.abs(this._z);
        return !(0, Zd.WithinEpsilon)(Jd, pd, dd) || !(0, Zd.WithinEpsilon)(kd, pd, dd)
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
        return new ld(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(dd) {
        return dd._x = this._x - Math.floor(this._x), dd._y = this._y - Math.floor(this._y), dd._z = this._z - Math.floor(this._z), dd._isDirty = !0, dd
      }
      fract() {
        return new ld(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
        const Jd = ed.IL[0].Fs(this);
        return this.x = Jd[dd[0]], this.y = Jd[dd[1]], this.z = Jd[dd[2]], this
      }
      rotateByQuaternionToRef(dd, Jd) {
        return dd.toRotationMatrix(ed.Matrix[0]), ld.TransformCoordinatesToRef(this, ed.Matrix[0], Jd), Jd
      }
      rotateByQuaternionAroundPointToRef(dd, Jd, kd) {
        return this.subtractToRef(Jd, ed.IL[0]), ed.IL[0].rotateByQuaternionToRef(dd, ed.IL[0]), Jd.addToRef(ed.IL[0], kd), kd
      }
      cross(dd) {
        return ld.CrossToRef(this, dd, new ld)
      }
      normalizeFromLength(dd) {
        return 0 === dd || 1 === dd ? this : this.scaleInPlace(1 / dd)
      }
      normalizeToNew() {
        return this.normalizeToRef(new ld)
      }
      normalizeToRef(dd) {
        const Jd = this.length();
        return 0 === Jd || 1 === Jd ? (dd._x = this._x, dd._y = this._y, dd._z = this._z, dd._isDirty = !0, dd) : this.scaleToRef(1 / Jd, dd)
      }
      clone() {
        return new ld(this._x, this._y, this._z)
      }
      Fs(dd) {
        return this.kdd(dd._x, dd._y, dd._z)
      }
      kdd(dd, Jd, kd) {
        return this._x = dd, this._y = Jd, this._z = kd, this._isDirty = !0, this
      }
      set(dd, Jd, kd) {
        return this.kdd(dd, Jd, kd)
      }
      o5(dd) {
        return this._x = this._y = this._z = dd, this._isDirty = !0, this
      }
      static GetClipFactor(dd, Jd, kd, pd) {
        const Nd = ld.Dot(dd, kd);
        return (Nd - pd) / (Nd - ld.Dot(Jd, kd))
      }
      static GetAngleBetweenVectors(dd, Jd, kd) {
        const pd = dd.normalizeToRef(ed.IL[1]),
          Nd = Jd.normalizeToRef(ed.IL[2]);
        let Wd = ld.Dot(pd, Nd);
        Wd = (0, Zd.Clamp)(Wd, -1, 1);
        const Pd = Math.acos(Wd),
          gd = ed.IL[3];
        return ld.CrossToRef(pd, Nd, gd), ld.Dot(gd, kd) > 0 ? isNaN(Pd) ? 0 : Pd : isNaN(Pd) ? -Math.PI : -Math.acos(Wd)
      }
      static GetAngleBetweenVectorsOnPlane(dd, Jd, kd) {
        ed.IL[0].Fs(dd);
        const pd = ed.IL[0];
        ed.IL[1].Fs(Jd);
        const Nd = ed.IL[1];
        ed.IL[2].Fs(kd);
        const Wd = ed.IL[2],
          Pd = ed.IL[3],
          gd = ed.IL[4];
        pd.normalize(), Nd.normalize(), Wd.normalize(), ld.CrossToRef(Wd, pd, Pd), ld.CrossToRef(Pd, Wd, gd);
        const Cd = Math.atan2(ld.Dot(Nd, Pd), ld.Dot(Nd, gd));
        return (0, Zd.NormalizeRadians)(Cd)
      }
      static PitchYawRollToMoveBetweenPointsToRef(dd, Jd, kd) {
        const pd = Rd.IL[0];
        return Jd.subtractToRef(dd, pd), kd._y = Math.atan2(pd.x, pd.z) || 0, kd._x = Math.atan2(Math.sqrt(pd.x ** 2 + pd.z ** 2), pd.y) || 0, kd._z = 0, kd._isDirty = !0, kd
      }
      static PitchYawRollToMoveBetweenPoints(dd, Jd) {
        const kd = ld.Zero();
        return ld.PitchYawRollToMoveBetweenPointsToRef(dd, Jd, kd)
      }
      static SlerpToRef(dd, Jd, kd, Nd) {
        kd = (0, Zd.Clamp)(kd, 0, 1);
        const Wd = ed.IL[0],
          Pd = ed.IL[1];
        Wd.Fs(dd);
        const gd = Wd.length();
        Wd.normalizeFromLength(gd), Pd.Fs(Jd);
        const Cd = Pd.length();
        Pd.normalizeFromLength(Cd);
        const Kd = ld.Dot(Wd, Pd);
        let od, Qd;
        if (Kd < 1 - pd.e) {
          const dd = Math.acos(Kd),
            Jd = 1 / Math.sin(dd);
          od = Math.sin((1 - kd) * dd) * Jd, Qd = Math.sin(kd * dd) * Jd
        } else od = 1 - kd, Qd = kd;
        return Wd.scaleInPlace(od), Pd.scaleInPlace(Qd), Nd.Fs(Wd).addInPlace(Pd), Nd.scaleInPlace((0, Zd.Lerp)(gd, Cd, kd)), Nd
      }
      static SmoothToRef(dd, Jd, kd, pd, Nd) {
        return ld.SlerpToRef(dd, Jd, 0 === pd ? 1 : kd / pd, Nd), Nd
      }
      static FromArray(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new ld(dd[Jd], dd[Jd + 1], dd[Jd + 2])
      }
      static FromFloatArray(dd, Jd) {
        return ld.FromArray(dd, Jd)
      }
      static FromArrayToRef(dd, Jd, kd) {
        return kd._x = dd[Jd], kd._y = dd[Jd + 1], kd._z = dd[Jd + 2], kd._isDirty = !0, kd
      }
      static FromFloatArrayToRef(dd, Jd, kd) {
        return ld.FromArrayToRef(dd, Jd, kd)
      }
      static FromFloatsToRef(dd, Jd, kd, pd) {
        return pd.kdd(dd, Jd, kd), pd
      }
      static Zero() {
        return new ld(0, 0, 0)
      }
      static One() {
        return new ld(1, 1, 1)
      }
      static Up() {
        return new ld(0, 1, 0)
      }
      static get UpReadOnly() {
        return ld._UpReadOnly
      }
      static get DownReadOnly() {
        return ld._DownReadOnly
      }
      static get RightReadOnly() {
        return ld._RightReadOnly
      }
      static get LeftReadOnly() {
        return ld._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return ld._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return ld._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return ld._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return ld._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return ld._ZeroReadOnly
      }
      static get OneReadOnly() {
        return ld._OneReadOnly
      }
      static Down() {
        return new ld(0, -1, 0)
      }
      static Forward() {
        return new ld(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new ld(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new ld(1, 0, 0)
      }
      static Left() {
        return new ld(-1, 0, 0)
      }
      static Random() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new ld((0, Zd.RandomRange)(dd, Jd), (0, Zd.RandomRange)(dd, Jd), (0, Zd.RandomRange)(dd, Jd))
      }
      static RandomToRef() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).kdd((0, Zd.RandomRange)(dd, Jd), (0, Zd.RandomRange)(dd, Jd), (0, Zd.RandomRange)(dd, Jd))
      }
      static TransformCoordinates(dd, Jd) {
        const kd = ld.Zero();
        return ld.TransformCoordinatesToRef(dd, Jd, kd), kd
      }
      static TransformCoordinatesToRef(dd, Jd, kd) {
        return ld.TransformCoordinatesFromFloatsToRef(dd._x, dd._y, dd._z, Jd, kd), kd
      }
      static TransformCoordinatesFromFloatsToRef(dd, Jd, kd, pd, Nd) {
        const Wd = pd.m,
          Pd = dd * Wd[0] + Jd * Wd[4] + kd * Wd[8] + Wd[12],
          Zd = dd * Wd[1] + Jd * Wd[5] + kd * Wd[9] + Wd[13],
          gd = dd * Wd[2] + Jd * Wd[6] + kd * Wd[10] + Wd[14],
          Cd = 1 / (dd * Wd[3] + Jd * Wd[7] + kd * Wd[11] + Wd[15]);
        return Nd._x = Pd * Cd, Nd._y = Zd * Cd, Nd._z = gd * Cd, Nd._isDirty = !0, Nd
      }
      static TransformNormal(dd, Jd) {
        const kd = ld.Zero();
        return ld.TransformNormalToRef(dd, Jd, kd), kd
      }
      static TransformNormalToRef(dd, Jd, kd) {
        return this.TransformNormalFromFloatsToRef(dd._x, dd._y, dd._z, Jd, kd), kd
      }
      static TransformNormalFromFloatsToRef(dd, Jd, kd, pd, Nd) {
        const Wd = pd.m;
        return Nd._x = dd * Wd[0] + Jd * Wd[4] + kd * Wd[8], Nd._y = dd * Wd[1] + Jd * Wd[5] + kd * Wd[9], Nd._z = dd * Wd[2] + Jd * Wd[6] + kd * Wd[10], Nd._isDirty = !0, Nd
      }
      static CatmullRom(dd, Jd, kd, pd, Nd) {
        const Wd = Nd * Nd,
          Pd = Nd * Wd,
          Zd = .5 * (2 * Jd._x + (-dd._x + kd._x) * Nd + (2 * dd._x - 5 * Jd._x + 4 * kd._x - pd._x) * Wd + (-dd._x + 3 * Jd._x - 3 * kd._x + pd._x) * Pd),
          gd = .5 * (2 * Jd._y + (-dd._y + kd._y) * Nd + (2 * dd._y - 5 * Jd._y + 4 * kd._y - pd._y) * Wd + (-dd._y + 3 * Jd._y - 3 * kd._y + pd._y) * Pd),
          Cd = .5 * (2 * Jd._z + (-dd._z + kd._z) * Nd + (2 * dd._z - 5 * Jd._z + 4 * kd._z - pd._z) * Wd + (-dd._z + 3 * Jd._z - 3 * kd._z + pd._z) * Pd);
        return new ld(Zd, gd, Cd)
      }
      static Clamp(dd, Jd, kd) {
        const pd = new ld;
        return ld.ClampToRef(dd, Jd, kd, pd), pd
      }
      static ClampToRef(dd, Jd, kd, pd) {
        let Nd = dd._x;
        Nd = Nd > kd._x ? kd._x : Nd, Nd = Nd < Jd._x ? Jd._x : Nd;
        let Wd = dd._y;
        Wd = Wd > kd._y ? kd._y : Wd, Wd = Wd < Jd._y ? Jd._y : Wd;
        let Pd = dd._z;
        return Pd = Pd > kd._z ? kd._z : Pd, Pd = Pd < Jd._z ? Jd._z : Pd, pd.kdd(Nd, Wd, Pd), pd
      }
      static CheckExtends(dd, Jd, kd) {
        Jd.minimizeInPlace(dd), kd.maximizeInPlace(dd)
      }
      static Hermite(dd, Jd, kd, pd, Nd) {
        const Wd = Nd * Nd,
          Pd = Nd * Wd,
          Zd = 2 * Pd - 3 * Wd + 1,
          gd = -2 * Pd + 3 * Wd,
          Cd = Pd - 2 * Wd + Nd,
          Kd = Pd - Wd,
          od = dd._x * Zd + kd._x * gd + Jd._x * Cd + pd._x * Kd,
          Qd = dd._y * Zd + kd._y * gd + Jd._y * Cd + pd._y * Kd,
          Ld = dd._z * Zd + kd._z * gd + Jd._z * Cd + pd._z * Kd;
        return new ld(od, Qd, Ld)
      }
      static Hermite1stDerivative(dd, Jd, kd, pd, Nd) {
        const Wd = new ld;
        return this.Hermite1stDerivativeToRef(dd, Jd, kd, pd, Nd, Wd), Wd
      }
      static Hermite1stDerivativeToRef(dd, Jd, kd, pd, Nd, Wd) {
        const Pd = Nd * Nd;
        return Wd._x = 6 * (Pd - Nd) * dd._x + (3 * Pd - 4 * Nd + 1) * Jd._x + 6 * (-Pd + Nd) * kd._x + (3 * Pd - 2 * Nd) * pd._x, Wd._y = 6 * (Pd - Nd) * dd._y + (3 * Pd - 4 * Nd + 1) * Jd._y + 6 * (-Pd + Nd) * kd._y + (3 * Pd - 2 * Nd) * pd._y, Wd._z = 6 * (Pd - Nd) * dd._z + (3 * Pd - 4 * Nd + 1) * Jd._z + 6 * (-Pd + Nd) * kd._z + (3 * Pd - 2 * Nd) * pd._z, Wd._isDirty = !0, Wd
      }
      static Lerp(dd, Jd, kd) {
        const pd = new ld(0, 0, 0);
        return ld.LerpToRef(dd, Jd, kd, pd), pd
      }
      static LerpToRef(dd, Jd, kd, pd) {
        return pd._x = dd._x + (Jd._x - dd._x) * kd, pd._y = dd._y + (Jd._y - dd._y) * kd, pd._z = dd._z + (Jd._z - dd._z) * kd, pd._isDirty = !0, pd
      }
      static Dot(dd, Jd) {
        return dd._x * Jd._x + dd._y * Jd._y + dd._z * Jd._z
      }
      dot(dd) {
        return this._x * dd._x + this._y * dd._y + this._z * dd._z
      }
      static Cross(dd, Jd) {
        const kd = new ld;
        return ld.CrossToRef(dd, Jd, kd), kd
      }
      static CrossToRef(dd, Jd, kd) {
        const pd = dd._y * Jd._z - dd._z * Jd._y,
          Nd = dd._z * Jd._x - dd._x * Jd._z,
          Wd = dd._x * Jd._y - dd._y * Jd._x;
        return kd.kdd(pd, Nd, Wd), kd
      }
      static Normalize(dd) {
        const Jd = ld.Zero();
        return ld.NormalizeToRef(dd, Jd), Jd
      }
      static NormalizeToRef(dd, Jd) {
        return dd.normalizeToRef(Jd), Jd
      }
      static Project(dd, Jd, kd, pd) {
        const Nd = new ld;
        return ld.ProjectToRef(dd, Jd, kd, pd, Nd), Nd
      }
      static ProjectToRef(dd, Jd, kd, pd, Nd) {
        const Wd = pd.width,
          Zd = pd.height,
          gd = pd.x,
          Cd = pd.y,
          Kd = ed.Matrix[1],
          od = Pd.d.LastCreatedEngine?.isNDCHalfZRange,
          Qd = od ? 1 : .5,
          Ld = od ? 0 : .5;
        Od.FromValuesToRef(Wd / 2, 0, 0, 0, 0, -Zd / 2, 0, 0, 0, 0, Qd, 0, gd + Wd / 2, Zd / 2 + Cd, Ld, 1, Kd);
        const Rd = ed.Matrix[0];
        return Jd.multiplyToRef(kd, Rd), Rd.multiplyToRef(Kd, Rd), ld.TransformCoordinatesToRef(dd, Rd, Nd), Nd
      }
      static Reflect(dd, Jd) {
        return this.ReflectToRef(dd, Jd, new ld)
      }
      static ReflectToRef(dd, Jd, kd) {
        const pd = Rd.IL[0];
        return pd.Fs(Jd).scaleInPlace(2 * ld.Dot(dd, Jd)), kd.Fs(dd).hpd(pd)
      }
      static UnprojectFromTransform(dd, Jd, kd, pd, Nd) {
        return this.Unproject(dd, Jd, kd, pd, Nd, Od.IdentityReadOnly)
      }
      static Unproject(dd, Jd, kd, pd, Nd, Wd) {
        const Pd = new ld;
        return ld.UnprojectToRef(dd, Jd, kd, pd, Nd, Wd, Pd), Pd
      }
      static UnprojectToRef(dd, Jd, kd, pd, Nd, Wd, Pd) {
        return ld.UnprojectFloatsToRef(dd._x, dd._y, dd._z, Jd, kd, pd, Nd, Wd, Pd), Pd
      }
      static UnprojectFloatsToRef(dd, Jd, kd, pd, Nd, Wd, Zd, gd, Cd) {
        const Kd = ed.Matrix[0];
        Wd.multiplyToRef(Zd, Kd), Kd.multiplyToRef(gd, Kd), Kd.invert();
        const od = ed.IL[0];
        return od.x = dd / pd * 2 - 1, od.y = -(Jd / Nd * 2 - 1), Pd.d.LastCreatedEngine?.isNDCHalfZRange ? od.z = kd : od.z = 2 * kd - 1, ld.TransformCoordinatesToRef(od, Kd, Cd), Cd
      }
      static Minimize(dd, Jd) {
        const kd = new ld;
        return kd.Fs(dd), kd.minimizeInPlace(Jd), kd
      }
      static Maximize(dd, Jd) {
        const kd = new ld;
        return kd.Fs(dd), kd.maximizeInPlace(Jd), kd
      }
      static Distance(dd, Jd) {
        return Math.sqrt(ld.DistanceSquared(dd, Jd))
      }
      static DistanceSquared(dd, Jd) {
        const kd = dd._x - Jd._x,
          pd = dd._y - Jd._y,
          Nd = dd._z - Jd._z;
        return kd * kd + pd * pd + Nd * Nd
      }
      static ProjectOnTriangleToRef(dd, Jd, kd, Nd, Wd) {
        const Pd = ed.IL[0],
          gd = ed.IL[1],
          Cd = ed.IL[2],
          Kd = ed.IL[3],
          od = ed.IL[4];
        kd.subtractToRef(Jd, Pd), Nd.subtractToRef(Jd, gd), Nd.subtractToRef(kd, Cd);
        const Qd = Pd.length(),
          Ld = gd.length(),
          Od = Cd.length();
        if (Qd < pd.e || Ld < pd.e || Od < pd.e) return Wd.Fs(Jd), ld.Distance(dd, Jd);
        dd.subtractToRef(Jd, od), ld.CrossToRef(Pd, gd, Kd);
        const Rd = Kd.length();
        if (Rd < pd.e) return Wd.Fs(Jd), ld.Distance(dd, Jd);
        Kd.normalizeFromLength(Rd);
        let Id = od.length();
        if (Id < pd.e) return Wd.Fs(Jd), 0;
        od.normalizeFromLength(Id);
        const Gd = ld.Dot(Kd, od),
          vd = ed.IL[5],
          xd = ed.IL[6];
        vd.Fs(Kd).scaleInPlace(-Id * Gd), xd.Fs(dd).addInPlace(vd);
        const qd = ed.IL[4],
          Bd = ed.IL[5],
          sd = ed.IL[7],
          ad = ed.IL[8];
        qd.Fs(Pd).scaleInPlace(1 / Qd), ad.Fs(gd).scaleInPlace(1 / Ld), qd.addInPlace(ad).scaleInPlace(-1), Bd.Fs(Pd).scaleInPlace(-1 / Qd), ad.Fs(Cd).scaleInPlace(1 / Od), Bd.addInPlace(ad).scaleInPlace(-1), sd.Fs(Cd).scaleInPlace(-1 / Od), ad.Fs(gd).scaleInPlace(-1 / Ld), sd.addInPlace(ad).scaleInPlace(-1);
        const Md = ed.IL[9];
        let Fd;
        Md.Fs(xd).hpd(Jd), ld.CrossToRef(qd, Md, ad), Fd = ld.Dot(ad, Kd);
        const Yd = Fd;
        Md.Fs(xd).hpd(kd), ld.CrossToRef(Bd, Md, ad), Fd = ld.Dot(ad, Kd);
        const md = Fd;
        Md.Fs(xd).hpd(Nd), ld.CrossToRef(sd, Md, ad), Fd = ld.Dot(ad, Kd);
        const bd = Fd,
          Sd = ed.IL[10];
        let jd, Xd;
        Yd > 0 && md < 0 ? (Sd.Fs(Pd), jd = Jd, Xd = kd) : md > 0 && bd < 0 ? (Sd.Fs(Cd), jd = kd, Xd = Nd) : (Sd.Fs(gd).scaleInPlace(-1), jd = Nd, Xd = Jd);
        const fd = ed.IL[9],
          nd = ed.IL[4];
        jd.subtractToRef(xd, ad), Xd.subtractToRef(xd, fd), ld.CrossToRef(ad, fd, nd);
        if (!(ld.Dot(nd, Kd) < 0)) return Wd.Fs(xd), Math.abs(Id * Gd);
        const Ud = ed.IL[5];
        ld.CrossToRef(Sd, nd, Ud), Ud.normalize();
        const yd = ed.IL[9];
        yd.Fs(jd).hpd(xd);
        const Dd = yd.length();
        if (Dd < pd.e) return Wd.Fs(jd), ld.Distance(dd, jd);
        yd.normalizeFromLength(Dd);
        const Td = ld.Dot(Ud, yd),
          Ed = ed.IL[7];
        Ed.Fs(xd).addInPlace(Ud.scaleInPlace(Dd * Td)), ad.Fs(Ed).hpd(jd), Id = Sd.length(), Sd.normalizeFromLength(Id);
        let cd = ld.Dot(ad, Sd) / Math.max(Id, pd.e);
        return cd = (0, Zd.Clamp)(cd, 0, 1), Ed.Fs(jd).addInPlace(Sd.scaleInPlace(cd * Id)), Wd.Fs(Ed), ld.Distance(dd, Ed)
      }
      static Center(dd, Jd) {
        return ld.CenterToRef(dd, Jd, ld.Zero())
      }
      static CenterToRef(dd, Jd, kd) {
        return kd.kdd((dd._x + Jd._x) / 2, (dd._y + Jd._y) / 2, (dd._z + Jd._z) / 2)
      }
      static RotationFromAxis(dd, Jd, kd) {
        const pd = new ld;
        return ld.RotationFromAxisToRef(dd, Jd, kd, pd), pd
      }
      static RotationFromAxisToRef(dd, Jd, kd, pd) {
        const Nd = ed.Quaternion[0];
        return Ld.RotationQuaternionFromAxisToRef(dd, Jd, kd, Nd), Nd.toEulerAnglesToRef(pd), pd
      }
    }
    ld._V8PerformanceHack = new ld(.5, .5, .5), ld._UpReadOnly = ld.Up(), ld._DownReadOnly = ld.Down(), ld._LeftHandedForwardReadOnly = ld.Forward(!1), ld._RightHandedForwardReadOnly = ld.Forward(!0), ld._LeftHandedBackwardReadOnly = ld.Backward(!1), ld._RightHandedBackwardReadOnly = ld.Backward(!0), ld._RightReadOnly = ld.Right(), ld._LeftReadOnly = ld.Left(), ld._ZeroReadOnly = ld.Zero(), ld._OneReadOnly = ld.One();
    class Qd {
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
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = dd, this._y = Jd, this._z = kd, this._w = pd
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let dd = Kd(this._x);
        return dd = 397 * dd ^ Kd(this._y), dd = 397 * dd ^ Kd(this._z), dd = 397 * dd ^ Kd(this._w), dd
      }
      spd() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(dd, Jd) {
        return void 0 === Jd && (Jd = 0), dd[Jd] = this._x, dd[Jd + 1] = this._y, dd[Jd + 2] = this._z, dd[Jd + 3] = this._w, this
      }
      lkd(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Qd.FromArrayToRef(dd, Jd, this), this
      }
      addInPlace(dd) {
        return this.x += dd._x, this.y += dd._y, this.z += dd._z, this.w += dd._w, this
      }
      addInPlaceFromFloats(dd, Jd, kd, pd) {
        return this.x += dd, this.y += Jd, this.z += kd, this.w += pd, this
      }
      add(dd) {
        return new Qd(this._x + dd.x, this._y + dd.y, this._z + dd.z, this._w + dd.w)
      }
      addToRef(dd, Jd) {
        return Jd.x = this._x + dd.x, Jd.y = this._y + dd.y, Jd.z = this._z + dd.z, Jd.w = this._w + dd.w, Jd
      }
      hpd(dd) {
        return this.x -= dd.x, this.y -= dd.y, this.z -= dd.z, this.w -= dd.w, this
      }
      subtract(dd) {
        return new Qd(this._x - dd.x, this._y - dd.y, this._z - dd.z, this._w - dd.w)
      }
      subtractToRef(dd, Jd) {
        return Jd.x = this._x - dd.x, Jd.y = this._y - dd.y, Jd.z = this._z - dd.z, Jd.w = this._w - dd.w, Jd
      }
      subtractFromFloats(dd, Jd, kd, pd) {
        return new Qd(this._x - dd, this._y - Jd, this._z - kd, this._w - pd)
      }
      subtractFromFloatsToRef(dd, Jd, kd, pd, Nd) {
        return Nd.x = this._x - dd, Nd.y = this._y - Jd, Nd.z = this._z - kd, Nd.w = this._w - pd, Nd
      }
      ck() {
        return new Qd(-this._x, -this._y, -this._z, -this._w)
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
        return new Qd(this._x * dd, this._y * dd, this._z * dd, this._w * dd)
      }
      scaleToRef(dd, Jd) {
        return Jd.x = this._x * dd, Jd.y = this._y * dd, Jd.z = this._z * dd, Jd.w = this._w * dd, Jd
      }
      scaleAndAddToRef(dd, Jd) {
        return Jd.x += this._x * dd, Jd.y += this._y * dd, Jd.z += this._z * dd, Jd.w += this._w * dd, Jd
      }
      equals(dd) {
        return dd && this._x === dd.x && this._y === dd.y && this._z === dd.z && this._w === dd.w
      }
      equalsWithEpsilon(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pd.e;
        return dd && (0, Zd.WithinEpsilon)(this._x, dd.x, Jd) && (0, Zd.WithinEpsilon)(this._y, dd.y, Jd) && (0, Zd.WithinEpsilon)(this._z, dd.z, Jd) && (0, Zd.WithinEpsilon)(this._w, dd.w, Jd)
      }
      zPd(dd, Jd, kd, pd) {
        return this._x === dd && this._y === Jd && this._z === kd && this._w === pd
      }
      multiplyInPlace(dd) {
        return this.x *= dd.x, this.y *= dd.y, this.z *= dd.z, this.w *= dd.w, this
      }
      multiply(dd) {
        return new Qd(this._x * dd.x, this._y * dd.y, this._z * dd.z, this._w * dd.w)
      }
      multiplyToRef(dd, Jd) {
        return Jd.x = this._x * dd.x, Jd.y = this._y * dd.y, Jd.z = this._z * dd.z, Jd.w = this._w * dd.w, Jd
      }
      multiplyByFloats(dd, Jd, kd, pd) {
        return new Qd(this._x * dd, this._y * Jd, this._z * kd, this._w * pd)
      }
      divide(dd) {
        return new Qd(this._x / dd.x, this._y / dd.y, this._z / dd.z, this._w / dd.w)
      }
      divideToRef(dd, Jd) {
        return Jd.x = this._x / dd.x, Jd.y = this._y / dd.y, Jd.z = this._z / dd.z, Jd.w = this._w / dd.w, Jd
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
      minimizeInPlaceFromFloats(dd, Jd, kd, pd) {
        return this.x = Math.min(dd, this._x), this.y = Math.min(Jd, this._y), this.z = Math.min(kd, this._z), this.w = Math.min(pd, this._w), this
      }
      maximizeInPlaceFromFloats(dd, Jd, kd, pd) {
        return this.x = Math.max(dd, this._x), this.y = Math.max(Jd, this._y), this.z = Math.max(kd, this._z), this.w = Math.max(pd, this._w), this
      }
      floorToRef(dd) {
        return dd.x = Math.floor(this._x), dd.y = Math.floor(this._y), dd.z = Math.floor(this._z), dd.w = Math.floor(this._w), dd
      }
      floor() {
        return new Qd(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(dd) {
        return dd.x = this._x - Math.floor(this._x), dd.y = this._y - Math.floor(this._y), dd.z = this._z - Math.floor(this._z), dd.w = this._w - Math.floor(this._w), dd
      }
      fract() {
        return new Qd(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
        return this.normalizeToRef(new Qd)
      }
      normalizeToRef(dd) {
        const Jd = this.length();
        return 0 === Jd || 1 === Jd ? (dd.x = this._x, dd.y = this._y, dd.z = this._z, dd.w = this._w, dd) : this.scaleToRef(1 / Jd, dd)
      }
      toVector3() {
        return new ld(this._x, this._y, this._z)
      }
      clone() {
        return new Qd(this._x, this._y, this._z, this._w)
      }
      Fs(dd) {
        return this.x = dd.x, this.y = dd.y, this.z = dd.z, this.w = dd.w, this
      }
      kdd(dd, Jd, kd, pd) {
        return this.x = dd, this.y = Jd, this.z = kd, this.w = pd, this
      }
      set(dd, Jd, kd, pd) {
        return this.kdd(dd, Jd, kd, pd)
      }
      o5(dd) {
        return this.x = this.y = this.z = this.w = dd, this
      }
      dot(dd) {
        return this._x * dd.x + this._y * dd.y + this._z * dd.z + this._w * dd.w
      }
      static FromArray(dd, Jd) {
        return Jd || (Jd = 0), new Qd(dd[Jd], dd[Jd + 1], dd[Jd + 2], dd[Jd + 3])
      }
      static FromArrayToRef(dd, Jd, kd) {
        return kd.x = dd[Jd], kd.y = dd[Jd + 1], kd.z = dd[Jd + 2], kd.w = dd[Jd + 3], kd
      }
      static FromFloatArrayToRef(dd, Jd, kd) {
        return Qd.FromArrayToRef(dd, Jd, kd), kd
      }
      static FromFloatsToRef(dd, Jd, kd, pd, Nd) {
        return Nd.x = dd, Nd.y = Jd, Nd.z = kd, Nd.w = pd, Nd
      }
      static Zero() {
        return new Qd(0, 0, 0, 0)
      }
      static One() {
        return new Qd(1, 1, 1, 1)
      }
      static Random() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Qd((0, Zd.RandomRange)(dd, Jd), (0, Zd.RandomRange)(dd, Jd), (0, Zd.RandomRange)(dd, Jd), (0, Zd.RandomRange)(dd, Jd))
      }
      static RandomToRef() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          kd = arguments.length > 2 ? arguments[2] : void 0;
        return kd.x = (0, Zd.RandomRange)(dd, Jd), kd.y = (0, Zd.RandomRange)(dd, Jd), kd.z = (0, Zd.RandomRange)(dd, Jd), kd.w = (0, Zd.RandomRange)(dd, Jd), kd
      }
      static Clamp(dd, Jd, kd) {
        return Qd.ClampToRef(dd, Jd, kd, new Qd)
      }
      static ClampToRef(dd, Jd, kd, pd) {
        return pd.x = (0, Zd.Clamp)(dd.x, Jd.x, kd.x), pd.y = (0, Zd.Clamp)(dd.y, Jd.y, kd.y), pd.z = (0, Zd.Clamp)(dd.z, Jd.z, kd.z), pd.w = (0, Zd.Clamp)(dd.w, Jd.w, kd.w), pd
      }
      static CheckExtends(dd, Jd, kd) {
        Jd.minimizeInPlace(dd), kd.maximizeInPlace(dd)
      }
      static get ZeroReadOnly() {
        return Qd._ZeroReadOnly
      }
      static Normalize(dd) {
        return Qd.NormalizeToRef(dd, new Qd)
      }
      static NormalizeToRef(dd, Jd) {
        return dd.normalizeToRef(Jd), Jd
      }
      static Minimize(dd, Jd) {
        const kd = new Qd;
        return kd.Fs(dd), kd.minimizeInPlace(Jd), kd
      }
      static Maximize(dd, Jd) {
        const kd = new Qd;
        return kd.Fs(dd), kd.maximizeInPlace(Jd), kd
      }
      static Distance(dd, Jd) {
        return Math.sqrt(Qd.DistanceSquared(dd, Jd))
      }
      static DistanceSquared(dd, Jd) {
        const kd = dd.x - Jd.x,
          pd = dd.y - Jd.y,
          Nd = dd.z - Jd.z,
          Wd = dd.w - Jd.w;
        return kd * kd + pd * pd + Nd * Nd + Wd * Wd
      }
      static Center(dd, Jd) {
        return Qd.CenterToRef(dd, Jd, new Qd)
      }
      static CenterToRef(dd, Jd, kd) {
        return kd.x = (dd.x + Jd.x) / 2, kd.y = (dd.y + Jd.y) / 2, kd.z = (dd.z + Jd.z) / 2, kd.w = (dd.w + Jd.w) / 2, kd
      }
      static TransformCoordinates(dd, Jd) {
        return Qd.TransformCoordinatesToRef(dd, Jd, new Qd)
      }
      static TransformCoordinatesToRef(dd, Jd, kd) {
        return Qd.TransformCoordinatesFromFloatsToRef(dd._x, dd._y, dd._z, Jd, kd), kd
      }
      static TransformCoordinatesFromFloatsToRef(dd, Jd, kd, pd, Nd) {
        const Wd = pd.m,
          Pd = dd * Wd[0] + Jd * Wd[4] + kd * Wd[8] + Wd[12],
          Zd = dd * Wd[1] + Jd * Wd[5] + kd * Wd[9] + Wd[13],
          gd = dd * Wd[2] + Jd * Wd[6] + kd * Wd[10] + Wd[14],
          Cd = dd * Wd[3] + Jd * Wd[7] + kd * Wd[11] + Wd[15];
        return Nd.x = Pd, Nd.y = Zd, Nd.z = gd, Nd.w = Cd, Nd
      }
      static TransformNormal(dd, Jd) {
        return Qd.TransformNormalToRef(dd, Jd, new Qd)
      }
      static TransformNormalToRef(dd, Jd, kd) {
        const pd = Jd.m,
          Nd = dd.x * pd[0] + dd.y * pd[4] + dd.z * pd[8],
          Wd = dd.x * pd[1] + dd.y * pd[5] + dd.z * pd[9],
          Pd = dd.x * pd[2] + dd.y * pd[6] + dd.z * pd[10];
        return kd.x = Nd, kd.y = Wd, kd.z = Pd, kd.w = dd.w, kd
      }
      static TransformNormalFromFloatsToRef(dd, Jd, kd, pd, Nd, Wd) {
        const Pd = Nd.m;
        return Wd.x = dd * Pd[0] + Jd * Pd[4] + kd * Pd[8], Wd.y = dd * Pd[1] + Jd * Pd[5] + kd * Pd[9], Wd.z = dd * Pd[2] + Jd * Pd[6] + kd * Pd[10], Wd.w = pd, Wd
      }
      static FromVector3(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Qd(dd._x, dd._y, dd._z, Jd)
      }
      static Dot(dd, Jd) {
        return dd.x * Jd.x + dd.y * Jd.y + dd.z * Jd.z + dd.w * Jd.w
      }
    }
    Qd._V8PerformanceHack = new Qd(.5, .5, .5, .5), Qd._ZeroReadOnly = Qd.Zero();
    class Ld {
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
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = dd, this._y = Jd, this._z = kd, this._w = pd
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let dd = Kd(this._x);
        return dd = 397 * dd ^ Kd(this._y), dd = 397 * dd ^ Kd(this._z), dd = 397 * dd ^ Kd(this._w), dd
      }
      spd() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return dd[Jd] = this._x, dd[Jd + 1] = this._y, dd[Jd + 2] = this._z, dd[Jd + 3] = this._w, this
      }
      lkd(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Ld.FromArrayToRef(dd, Jd, this)
      }
      equals(dd) {
        return dd && this._x === dd._x && this._y === dd._y && this._z === dd._z && this._w === dd._w
      }
      equalsWithEpsilon(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pd.e;
        return dd && (0, Zd.WithinEpsilon)(this._x, dd._x, Jd) && (0, Zd.WithinEpsilon)(this._y, dd._y, Jd) && (0, Zd.WithinEpsilon)(this._z, dd._z, Jd) && (0, Zd.WithinEpsilon)(this._w, dd._w, Jd)
      }
      isApprox(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pd.e;
        return dd && ((0, Zd.WithinEpsilon)(this._x, dd._x, Jd) && (0, Zd.WithinEpsilon)(this._y, dd._y, Jd) && (0, Zd.WithinEpsilon)(this._z, dd._z, Jd) && (0, Zd.WithinEpsilon)(this._w, dd._w, Jd) || (0, Zd.WithinEpsilon)(this._x, -dd._x, Jd) && (0, Zd.WithinEpsilon)(this._y, -dd._y, Jd) && (0, Zd.WithinEpsilon)(this._z, -dd._z, Jd) && (0, Zd.WithinEpsilon)(this._w, -dd._w, Jd))
      }
      clone() {
        return new Ld(this._x, this._y, this._z, this._w)
      }
      Fs(dd) {
        return this._x = dd._x, this._y = dd._y, this._z = dd._z, this._w = dd._w, this._isDirty = !0, this
      }
      kdd(dd, Jd, kd, pd) {
        return this._x = dd, this._y = Jd, this._z = kd, this._w = pd, this._isDirty = !0, this
      }
      set(dd, Jd, kd, pd) {
        return this.kdd(dd, Jd, kd, pd)
      }
      o5(dd) {
        return this.kdd(dd, dd, dd, dd)
      }
      add(dd) {
        return new Ld(this._x + dd._x, this._y + dd._y, this._z + dd._z, this._w + dd._w)
      }
      addInPlace(dd) {
        return this._x += dd._x, this._y += dd._y, this._z += dd._z, this._w += dd._w, this._isDirty = !0, this
      }
      addToRef(dd, Jd) {
        return Jd._x = this._x + dd._x, Jd._y = this._y + dd._y, Jd._z = this._z + dd._z, Jd._w = this._w + dd._w, Jd._isDirty = !0, Jd
      }
      addInPlaceFromFloats(dd, Jd, kd, pd) {
        return this._x += dd, this._y += Jd, this._z += kd, this._w += pd, this._isDirty = !0, this
      }
      subtractToRef(dd, Jd) {
        return Jd._x = this._x - dd._x, Jd._y = this._y - dd._y, Jd._z = this._z - dd._z, Jd._w = this._w - dd._w, Jd._isDirty = !0, Jd
      }
      subtractFromFloats(dd, Jd, kd, pd) {
        return this.subtractFromFloatsToRef(dd, Jd, kd, pd, new Ld)
      }
      subtractFromFloatsToRef(dd, Jd, kd, pd, Nd) {
        return Nd._x = this._x - dd, Nd._y = this._y - Jd, Nd._z = this._z - kd, Nd._w = this._w - pd, Nd._isDirty = !0, Nd
      }
      subtract(dd) {
        return new Ld(this._x - dd._x, this._y - dd._y, this._z - dd._z, this._w - dd._w)
      }
      hpd(dd) {
        return this._x -= dd._x, this._y -= dd._y, this._z -= dd._z, this._w -= dd._w, this._isDirty = !0, this
      }
      scale(dd) {
        return new Ld(this._x * dd, this._y * dd, this._z * dd, this._w * dd)
      }
      scaleToRef(dd, Jd) {
        return Jd._x = this._x * dd, Jd._y = this._y * dd, Jd._z = this._z * dd, Jd._w = this._w * dd, Jd._isDirty = !0, Jd
      }
      scaleInPlace(dd) {
        return this._x *= dd, this._y *= dd, this._z *= dd, this._w *= dd, this._isDirty = !0, this
      }
      scaleAndAddToRef(dd, Jd) {
        return Jd._x += this._x * dd, Jd._y += this._y * dd, Jd._z += this._z * dd, Jd._w += this._w * dd, Jd._isDirty = !0, Jd
      }
      multiply(dd) {
        const Jd = new Ld(0, 0, 0, 1);
        return this.multiplyToRef(dd, Jd), Jd
      }
      multiplyToRef(dd, Jd) {
        const kd = this._x * dd._w + this._y * dd._z - this._z * dd._y + this._w * dd._x,
          pd = -this._x * dd._z + this._y * dd._w + this._z * dd._x + this._w * dd._y,
          Nd = this._x * dd._y - this._y * dd._x + this._z * dd._w + this._w * dd._z,
          Wd = -this._x * dd._x - this._y * dd._y - this._z * dd._z + this._w * dd._w;
        return Jd.kdd(kd, pd, Nd, Wd), Jd
      }
      multiplyInPlace(dd) {
        return this.multiplyToRef(dd, this)
      }
      multiplyByFloats(dd, Jd, kd, pd) {
        return this._x *= dd, this._y *= Jd, this._z *= kd, this._w *= pd, this._isDirty = !0, this
      }
      divide(dd) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(dd, Jd) {
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
      ck() {
        return this.negateToRef(new Ld)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(dd) {
        return dd._x = -this._x, dd._y = -this._y, dd._z = -this._z, dd._w = -this._w, dd._isDirty = !0, dd
      }
      zPd(dd, Jd, kd, pd) {
        return this._x === dd && this._y === Jd && this._z === kd && this._w === pd
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
        return dd.kdd(-this._x, -this._y, -this._z, this._w), dd
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new Ld(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const dd = this.conjugate(),
          Jd = this.lengthSquared();
        return 0 == Jd || 1 == Jd || dd.scaleInPlace(1 / Jd), dd
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
        const dd = new Ld(0, 0, 0, 1);
        return this.normalizeToRef(dd), dd
      }
      normalizeToRef(dd) {
        const Jd = this.length();
        return 0 === Jd || 1 === Jd ? dd.kdd(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / Jd, dd)
      }
      toEulerAngles() {
        const dd = ld.Zero();
        return this.toEulerAnglesToRef(dd), dd
      }
      toEulerAnglesToRef(dd) {
        const Jd = this._z,
          kd = this._x,
          pd = this._y,
          Nd = this._w,
          Wd = pd * Jd - kd * Nd,
          Pd = .4999999;
        if (Wd < -Pd) dd._y = 2 * Math.atan2(pd, Nd), dd._x = Math.PI / 2, dd._z = 0, dd._isDirty = !0;
        else if (Wd > Pd) dd._y = 2 * Math.atan2(pd, Nd), dd._x = -Math.PI / 2, dd._z = 0, dd._isDirty = !0;
        else {
          const Pd = Nd * Nd,
            Zd = Jd * Jd,
            gd = kd * kd,
            Cd = pd * pd;
          dd._z = Math.atan2(2 * (kd * pd + Jd * Nd), -Zd - gd + Cd + Pd), dd._x = Math.asin(-2 * Wd), dd._y = Math.atan2(2 * (Jd * kd + pd * Nd), Zd - gd - Cd + Pd), dd._isDirty = !0
        }
        return dd
      }
      toAlphaBetaGammaToRef(dd) {
        const Jd = this._z,
          kd = this._x,
          pd = this._y,
          Nd = this._w,
          Wd = Math.sqrt(kd * kd + pd * pd),
          Pd = Math.sqrt(Jd * Jd + Nd * Nd),
          Zd = 2 * Math.atan2(Wd, Pd),
          gd = 2 * Math.atan2(Jd, Nd),
          Cd = 2 * Math.atan2(pd, kd),
          Kd = (gd + Cd) / 2,
          od = (gd - Cd) / 2;
        return dd.set(od, Zd, Kd), dd
      }
      toRotationMatrix(dd) {
        return Od.FromQuaternionToRef(this, dd), dd
      }
      fromRotationMatrix(dd) {
        return Ld.FromRotationMatrixToRef(dd, this), this
      }
      dot(dd) {
        return this._x * dd._x + this._y * dd._y + this._z * dd._z + this._w * dd._w
      }
      toAxisAngle() {
        const dd = ld.Zero();
        return {
          axis: dd,
          angle: this.toAxisAngleToRef(dd)
        }
      }
      toAxisAngleToRef(dd) {
        let Jd;
        const kd = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          pd = this._w;
        return kd > 0 ? (Jd = 2 * Math.atan2(kd, pd), dd.set(this._x / kd, this._y / kd, this._z / kd)) : (Jd = 0, dd.set(1, 0, 0)), Jd
      }
      static FromRotationMatrix(dd) {
        const Jd = new Ld;
        return Ld.FromRotationMatrixToRef(dd, Jd), Jd
      }
      static FromRotationMatrixToRef(dd, Jd) {
        const kd = dd.m,
          pd = kd[0],
          Nd = kd[4],
          Wd = kd[8],
          Pd = kd[1],
          Zd = kd[5],
          gd = kd[9],
          Cd = kd[2],
          Kd = kd[6],
          od = kd[10],
          ld = pd + Zd + od;
        let Qd;
        return ld > 0 ? (Qd = .5 / Math.sqrt(ld + 1), Jd._w = .25 / Qd, Jd._x = (Kd - gd) * Qd, Jd._y = (Wd - Cd) * Qd, Jd._z = (Pd - Nd) * Qd, Jd._isDirty = !0) : pd > Zd && pd > od ? (Qd = 2 * Math.sqrt(1 + pd - Zd - od), Jd._w = (Kd - gd) / Qd, Jd._x = .25 * Qd, Jd._y = (Nd + Pd) / Qd, Jd._z = (Wd + Cd) / Qd, Jd._isDirty = !0) : Zd > od ? (Qd = 2 * Math.sqrt(1 + Zd - pd - od), Jd._w = (Wd - Cd) / Qd, Jd._x = (Nd + Pd) / Qd, Jd._y = .25 * Qd, Jd._z = (gd + Kd) / Qd, Jd._isDirty = !0) : (Qd = 2 * Math.sqrt(1 + od - pd - Zd), Jd._w = (Pd - Nd) / Qd, Jd._x = (Wd + Cd) / Qd, Jd._y = (gd + Kd) / Qd, Jd._z = .25 * Qd, Jd._isDirty = !0), Jd
      }
      static Dot(dd, Jd) {
        return dd._x * Jd._x + dd._y * Jd._y + dd._z * Jd._z + dd._w * Jd._w
      }
      static AreClose(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const pd = Ld.Dot(dd, Jd);
        return 1 - pd * pd <= kd
      }
      static SmoothToRef(dd, Jd, kd, pd, Nd) {
        let Wd = 0 === pd ? 1 : kd / pd;
        return Wd = (0, Zd.Clamp)(Wd, 0, 1), Ld.SlerpToRef(dd, Jd, Wd, Nd), Nd
      }
      static Zero() {
        return new Ld(0, 0, 0, 0)
      }
      static Inverse(dd) {
        return new Ld(-dd._x, -dd._y, -dd._z, dd._w)
      }
      static InverseToRef(dd, Jd) {
        return Jd.set(-dd._x, -dd._y, -dd._z, dd._w), Jd
      }
      static Identity() {
        return new Ld(0, 0, 0, 1)
      }
      static IsIdentity(dd) {
        return dd && 0 === dd._x && 0 === dd._y && 0 === dd._z && 1 === dd._w
      }
      static RotationAxis(dd, Jd) {
        return Ld.RotationAxisToRef(dd, Jd, new Ld)
      }
      static RotationAxisToRef(dd, Jd, kd) {
        kd._w = Math.cos(Jd / 2);
        const pd = Math.sin(Jd / 2) / dd.length();
        return kd._x = dd._x * pd, kd._y = dd._y * pd, kd._z = dd._z * pd, kd._isDirty = !0, kd
      }
      static FromArray(dd, Jd) {
        return Jd || (Jd = 0), new Ld(dd[Jd], dd[Jd + 1], dd[Jd + 2], dd[Jd + 3])
      }
      static FromArrayToRef(dd, Jd, kd) {
        return kd._x = dd[Jd], kd._y = dd[Jd + 1], kd._z = dd[Jd + 2], kd._w = dd[Jd + 3], kd._isDirty = !0, kd
      }
      static FromFloatsToRef(dd, Jd, kd, pd, Nd) {
        return Nd.kdd(dd, Jd, kd, pd), Nd
      }
      static FromEulerAngles(dd, Jd, kd) {
        const pd = new Ld;
        return Ld.RotationYawPitchRollToRef(Jd, dd, kd, pd), pd
      }
      static FromEulerAnglesToRef(dd, Jd, kd, pd) {
        return Ld.RotationYawPitchRollToRef(Jd, dd, kd, pd), pd
      }
      static FromEulerVector(dd) {
        const Jd = new Ld;
        return Ld.RotationYawPitchRollToRef(dd._y, dd._x, dd._z, Jd), Jd
      }
      static FromEulerVectorToRef(dd, Jd) {
        return Ld.RotationYawPitchRollToRef(dd._y, dd._x, dd._z, Jd), Jd
      }
      static FromUnitVectorsToRef(dd, Jd, kd) {
        let Nd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pd.e;
        const Wd = ld.Dot(dd, Jd) + 1;
        return Wd < Nd ? Math.abs(dd.x) > Math.abs(dd.z) ? kd.set(-dd.y, dd.x, 0, 0) : kd.set(0, -dd.z, dd.y, 0) : (ld.CrossToRef(dd, Jd, Rd.IL[0]), kd.set(Rd.IL[0].x, Rd.IL[0].y, Rd.IL[0].z, Wd)), kd.normalize()
      }
      static RotationYawPitchRoll(dd, Jd, kd) {
        const pd = new Ld;
        return Ld.RotationYawPitchRollToRef(dd, Jd, kd, pd), pd
      }
      static RotationYawPitchRollToRef(dd, Jd, kd, pd) {
        const Nd = .5 * kd,
          Wd = .5 * Jd,
          Pd = .5 * dd,
          Zd = Math.sin(Nd),
          gd = Math.cos(Nd),
          Cd = Math.sin(Wd),
          Kd = Math.cos(Wd),
          od = Math.sin(Pd),
          ld = Math.cos(Pd);
        return pd._x = ld * Cd * gd + od * Kd * Zd, pd._y = od * Kd * gd - ld * Cd * Zd, pd._z = ld * Kd * Zd - od * Cd * gd, pd._w = ld * Kd * gd + od * Cd * Zd, pd._isDirty = !0, pd
      }
      static RotationAlphaBetaGamma(dd, Jd, kd) {
        const pd = new Ld;
        return Ld.RotationAlphaBetaGammaToRef(dd, Jd, kd, pd), pd
      }
      static RotationAlphaBetaGammaToRef(dd, Jd, kd, pd) {
        const Nd = .5 * (kd + dd),
          Wd = .5 * (kd - dd),
          Pd = .5 * Jd;
        return pd._x = Math.cos(Wd) * Math.sin(Pd), pd._y = Math.sin(Wd) * Math.sin(Pd), pd._z = Math.sin(Nd) * Math.cos(Pd), pd._w = Math.cos(Nd) * Math.cos(Pd), pd._isDirty = !0, pd
      }
      static RotationQuaternionFromAxis(dd, Jd, kd) {
        const pd = new Ld(0, 0, 0, 0);
        return Ld.RotationQuaternionFromAxisToRef(dd, Jd, kd, pd), pd
      }
      static RotationQuaternionFromAxisToRef(dd, Jd, kd, pd) {
        const Nd = ed.Matrix[0];
        return dd = dd.normalizeToRef(ed.IL[0]), Jd = Jd.normalizeToRef(ed.IL[1]), kd = kd.normalizeToRef(ed.IL[2]), Od.FromXYZAxesToRef(dd, Jd, kd, Nd), Ld.FromRotationMatrixToRef(Nd, pd), pd
      }
      static FromLookDirectionLH(dd, Jd) {
        const kd = new Ld;
        return Ld.FromLookDirectionLHToRef(dd, Jd, kd), kd
      }
      static FromLookDirectionLHToRef(dd, Jd, kd) {
        const pd = ed.Matrix[0];
        return Od.LookDirectionLHToRef(dd, Jd, pd), Ld.FromRotationMatrixToRef(pd, kd), kd
      }
      static FromLookDirectionRH(dd, Jd) {
        const kd = new Ld;
        return Ld.FromLookDirectionRHToRef(dd, Jd, kd), kd
      }
      static FromLookDirectionRHToRef(dd, Jd, kd) {
        const pd = ed.Matrix[0];
        return Od.LookDirectionRHToRef(dd, Jd, pd), Ld.FromRotationMatrixToRef(pd, kd)
      }
      static Slerp(dd, Jd, kd) {
        const pd = Ld.Identity();
        return Ld.SlerpToRef(dd, Jd, kd, pd), pd
      }
      static SlerpToRef(dd, Jd, kd, pd) {
        let Nd, Wd, Pd = dd._x * Jd._x + dd._y * Jd._y + dd._z * Jd._z + dd._w * Jd._w,
          Zd = !1;
        if (Pd < 0 && (Zd = !0, Pd = -Pd), Pd > .999999) Wd = 1 - kd, Nd = Zd ? -kd : kd;
        else {
          const dd = Math.acos(Pd),
            Jd = 1 / Math.sin(dd);
          Wd = Math.sin((1 - kd) * dd) * Jd, Nd = Zd ? -Math.sin(kd * dd) * Jd : Math.sin(kd * dd) * Jd
        }
        return pd._x = Wd * dd._x + Nd * Jd._x, pd._y = Wd * dd._y + Nd * Jd._y, pd._z = Wd * dd._z + Nd * Jd._z, pd._w = Wd * dd._w + Nd * Jd._w, pd._isDirty = !0, pd
      }
      static Hermite(dd, Jd, kd, pd, Nd) {
        const Wd = Nd * Nd,
          Pd = Nd * Wd,
          Zd = 2 * Pd - 3 * Wd + 1,
          gd = -2 * Pd + 3 * Wd,
          Cd = Pd - 2 * Wd + Nd,
          Kd = Pd - Wd,
          od = dd._x * Zd + kd._x * gd + Jd._x * Cd + pd._x * Kd,
          ld = dd._y * Zd + kd._y * gd + Jd._y * Cd + pd._y * Kd,
          Qd = dd._z * Zd + kd._z * gd + Jd._z * Cd + pd._z * Kd,
          Od = dd._w * Zd + kd._w * gd + Jd._w * Cd + pd._w * Kd;
        return new Ld(od, ld, Qd, Od)
      }
      static Hermite1stDerivative(dd, Jd, kd, pd, Nd) {
        const Wd = new Ld;
        return this.Hermite1stDerivativeToRef(dd, Jd, kd, pd, Nd, Wd), Wd
      }
      static Hermite1stDerivativeToRef(dd, Jd, kd, pd, Nd, Wd) {
        const Pd = Nd * Nd;
        return Wd._x = 6 * (Pd - Nd) * dd._x + (3 * Pd - 4 * Nd + 1) * Jd._x + 6 * (-Pd + Nd) * kd._x + (3 * Pd - 2 * Nd) * pd._x, Wd._y = 6 * (Pd - Nd) * dd._y + (3 * Pd - 4 * Nd + 1) * Jd._y + 6 * (-Pd + Nd) * kd._y + (3 * Pd - 2 * Nd) * pd._y, Wd._z = 6 * (Pd - Nd) * dd._z + (3 * Pd - 4 * Nd + 1) * Jd._z + 6 * (-Pd + Nd) * kd._z + (3 * Pd - 2 * Nd) * pd._z, Wd._w = 6 * (Pd - Nd) * dd._w + (3 * Pd - 4 * Nd + 1) * Jd._w + 6 * (-Pd + Nd) * kd._w + (3 * Pd - 2 * Nd) * pd._w, Wd._isDirty = !0, Wd
      }
      static Normalize(dd) {
        const Jd = Ld.Zero();
        return Ld.NormalizeToRef(dd, Jd), Jd
      }
      static NormalizeToRef(dd, Jd) {
        return dd.normalizeToRef(Jd), Jd
      }
      static Clamp(dd, Jd, kd) {
        const pd = new Ld;
        return Ld.ClampToRef(dd, Jd, kd, pd), pd
      }
      static ClampToRef(dd, Jd, kd, pd) {
        return pd.kdd((0, Zd.Clamp)(dd.x, Jd.x, kd.x), (0, Zd.Clamp)(dd.y, Jd.y, kd.y), (0, Zd.Clamp)(dd.z, Jd.z, kd.z), (0, Zd.Clamp)(dd.w, Jd.w, kd.w))
      }
      static Random() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Ld((0, Zd.RandomRange)(dd, Jd), (0, Zd.RandomRange)(dd, Jd), (0, Zd.RandomRange)(dd, Jd), (0, Zd.RandomRange)(dd, Jd))
      }
      static RandomToRef() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).kdd((0, Zd.RandomRange)(dd, Jd), (0, Zd.RandomRange)(dd, Jd), (0, Zd.RandomRange)(dd, Jd), (0, Zd.RandomRange)(dd, Jd))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(dd, Jd) {
        return Math.sqrt(Ld.DistanceSquared(dd, Jd))
      }
      static DistanceSquared(dd, Jd) {
        const kd = dd.x - Jd.x,
          pd = dd.y - Jd.y,
          Nd = dd.z - Jd.z,
          Wd = dd.w - Jd.w;
        return kd * kd + pd * pd + Nd * Nd + Wd * Wd
      }
      static Center(dd, Jd) {
        return Ld.CenterToRef(dd, Jd, Ld.Zero())
      }
      static CenterToRef(dd, Jd, kd) {
        return kd.kdd((dd.x + Jd.x) / 2, (dd.y + Jd.y) / 2, (dd.z + Jd.z) / 2, (dd.w + Jd.w) / 2)
      }
    }
    Ld._V8PerformanceHack = new Ld(.5, .5, .5, .5);
    class Od {
      static get Use64Bits() {
        return Wd.d.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = gd.o._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = dd, this._isIdentity3x2 = dd || kd, this._isIdentityDirty = !this._isIdentity && Jd, this._isIdentity3x2Dirty = !this._isIdentity3x2 && pd
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, Wd.d.MatrixTrackPrecisionChange && Wd.d.MatrixTrackedMatrices.push(this), this._m = new Wd.d.MatrixCurrentType(16), this.markAsUpdated()
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
          Jd = dd[0],
          kd = dd[1],
          pd = dd[2],
          Nd = dd[3],
          Wd = dd[4],
          Pd = dd[5],
          Zd = dd[6],
          gd = dd[7],
          Cd = dd[8],
          Kd = dd[9],
          od = dd[10],
          ld = dd[11],
          Qd = dd[12],
          Ld = dd[13],
          Od = dd[14],
          ed = dd[15],
          Rd = od * ed - Od * ld,
          Id = Kd * ed - Ld * ld,
          Gd = Kd * Od - Ld * od,
          vd = Cd * ed - Qd * ld,
          xd = Cd * Od - od * Qd,
          qd = Cd * Ld - Qd * Kd;
        return Jd * +(Pd * Rd - Zd * Id + gd * Gd) + kd * -(Wd * Rd - Zd * vd + gd * xd) + pd * +(Wd * Id - Pd * vd + gd * qd) + Nd * -(Wd * Gd - Pd * xd + Zd * qd)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!dd) return this._m;
        const kd = this._m;
        for (let pd = 0; pd < 16; pd++) dd[Jd + pd] = kd[pd];
        return this
      }
      spd() {
        return this._m
      }
      lkd(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Od.FromArrayToRef(dd, Jd, this)
      }
      kdd() {
        for (var dd = arguments.length, Jd = new Array(dd), kd = 0; kd < dd; kd++) Jd[kd] = arguments[kd];
        return Od.FromArrayToRef(Jd, 0, this)
      }
      set() {
        const dd = this._m;
        for (let Jd = 0; Jd < 16; Jd++) dd[Jd] = Jd < 0 || arguments.length <= Jd ? void 0 : arguments[Jd];
        return this.markAsUpdated(), this
      }
      o5(dd) {
        const Jd = this._m;
        for (let kd = 0; kd < 16; kd++) Jd[kd] = dd;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return Od.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(dd) {
        const Jd = new Od;
        return this.addToRef(dd, Jd), Jd
      }
      addToRef(dd, Jd) {
        const kd = this._m,
          pd = Jd._m,
          Nd = dd.m;
        for (let Wd = 0; Wd < 16; Wd++) pd[Wd] = kd[Wd] + Nd[Wd];
        return Jd.markAsUpdated(), Jd
      }
      addToSelf(dd) {
        const Jd = this._m,
          kd = dd.m;
        return Jd[0] += kd[0], Jd[1] += kd[1], Jd[2] += kd[2], Jd[3] += kd[3], Jd[4] += kd[4], Jd[5] += kd[5], Jd[6] += kd[6], Jd[7] += kd[7], Jd[8] += kd[8], Jd[9] += kd[9], Jd[10] += kd[10], Jd[11] += kd[11], Jd[12] += kd[12], Jd[13] += kd[13], Jd[14] += kd[14], Jd[15] += kd[15], this.markAsUpdated(), this
      }
      addInPlace(dd) {
        const Jd = this._m,
          kd = dd.m;
        for (let pd = 0; pd < 16; pd++) Jd[pd] += kd[pd];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const dd = this._m;
        for (let Jd = 0; Jd < 16; Jd++) dd[Jd] += Jd < 0 || arguments.length <= Jd ? void 0 : arguments[Jd];
        return this.markAsUpdated(), this
      }
      subtract(dd) {
        const Jd = this._m,
          kd = dd.m;
        for (let pd = 0; pd < 16; pd++) Jd[pd] -= kd[pd];
        return this.markAsUpdated(), this
      }
      subtractToRef(dd, Jd) {
        const kd = this._m,
          pd = dd.m,
          Nd = Jd._m;
        for (let Wd = 0; Wd < 16; Wd++) Nd[Wd] = kd[Wd] - pd[Wd];
        return Jd.markAsUpdated(), Jd
      }
      hpd(dd) {
        const Jd = this._m,
          kd = dd.m;
        for (let pd = 0; pd < 16; pd++) Jd[pd] -= kd[pd];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var dd = arguments.length, Jd = new Array(dd), kd = 0; kd < dd; kd++) Jd[kd] = arguments[kd];
        return this.subtractFromFloatsToRef(...Jd, new Od)
      }
      subtractFromFloatsToRef() {
        for (var dd = arguments.length, Jd = new Array(dd), kd = 0; kd < dd; kd++) Jd[kd] = arguments[kd];
        const pd = Jd.pop(),
          Nd = this._m,
          Wd = pd._m,
          Pd = Jd;
        for (let Zd = 0; Zd < 16; Zd++) Wd[Zd] = Nd[Zd] - Pd[Zd];
        return pd.markAsUpdated(), pd
      }
      invertToRef(dd) {
        return !0 === this._isIdentity ? (Od.IdentityToRef(dd), dd) : ((0, gd.g)(this, dd.spd()) ? dd.markAsUpdated() : dd.Fs(this), dd)
      }
      addAtIndex(dd, Jd) {
        return this._m[dd] += Jd, this.markAsUpdated(), this
      }
      multiplyAtIndex(dd, Jd) {
        return this._m[dd] *= Jd, this.markAsUpdated(), this
      }
      setTranslationFromFloats(dd, Jd, kd) {
        return this._m[12] = dd, this._m[13] = Jd, this._m[14] = kd, this.markAsUpdated(), this
      }
      addTranslationFromFloats(dd, Jd, kd) {
        return this._m[12] += dd, this._m[13] += Jd, this._m[14] += kd, this.markAsUpdated(), this
      }
      setTranslation(dd) {
        return this.setTranslationFromFloats(dd._x, dd._y, dd._z)
      }
      getTranslation() {
        return new ld(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(dd) {
        return dd.x = this._m[12], dd.y = this._m[13], dd.z = this._m[14], dd
      }
      removeRotationAndScaling() {
        const dd = this.m;
        return Od.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, dd[12], dd[13], dd[14], dd[15], this), this._updateIdentityStatus(0 === dd[12] && 0 === dd[13] && 0 === dd[14] && 1 === dd[15]), this
      }
      Fs(dd) {
        dd.copyToArray(this._m);
        const Jd = dd;
        return this.updateFlag = Jd.updateFlag, this._updateIdentityStatus(Jd._isIdentity, Jd._isIdentityDirty, Jd._isIdentity3x2, Jd._isIdentity3x2Dirty), this
      }
      copyToArray(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, gd.d)(this, dd, Jd), this
      }
      multiply(dd) {
        const Jd = new Od;
        return this.multiplyToRef(dd, Jd), Jd
      }
      multiplyInPlace(dd) {
        const Jd = this._m,
          kd = dd.m;
        for (let pd = 0; pd < 16; pd++) Jd[pd] *= kd[pd];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const dd = this._m;
        for (let Jd = 0; Jd < 16; Jd++) dd[Jd] *= Jd < 0 || arguments.length <= Jd ? void 0 : arguments[Jd];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var dd = arguments.length, Jd = new Array(dd), kd = 0; kd < dd; kd++) Jd[kd] = arguments[kd];
        const pd = Jd.pop(),
          Nd = this._m,
          Wd = pd._m,
          Pd = Jd;
        for (let Zd = 0; Zd < 16; Zd++) Wd[Zd] = Nd[Zd] * Pd[Zd];
        return pd.markAsUpdated(), pd
      }
      multiplyToRef(dd, Jd) {
        return this._isIdentity ? (Jd.Fs(dd), Jd) : dd._isIdentity ? (Jd.Fs(this), Jd) : (this.multiplyToArray(dd, Jd._m, 0), Jd.markAsUpdated(), Jd)
      }
      multiplyToArray(dd, Jd, kd) {
        return (0, gd.q)(this, dd, Jd, kd), this
      }
      divide(dd) {
        return this.divideToRef(dd, new Od)
      }
      divideToRef(dd, Jd) {
        const kd = this._m,
          pd = dd.m,
          Nd = Jd._m;
        for (let Wd = 0; Wd < 16; Wd++) Nd[Wd] = kd[Wd] / pd[Wd];
        return Jd.markAsUpdated(), Jd
      }
      divideInPlace(dd) {
        const Jd = this._m,
          kd = dd.m;
        for (let pd = 0; pd < 16; pd++) Jd[pd] /= kd[pd];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(dd) {
        const Jd = this._m,
          kd = dd.m;
        for (let pd = 0; pd < 16; pd++) Jd[pd] = Math.min(Jd[pd], kd[pd]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const dd = this._m;
        for (let Jd = 0; Jd < 16; Jd++) dd[Jd] = Math.min(dd[Jd], Jd < 0 || arguments.length <= Jd ? void 0 : arguments[Jd]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(dd) {
        const Jd = this._m,
          kd = dd.m;
        for (let pd = 0; pd < 16; pd++) Jd[pd] = Math.max(Jd[pd], kd[pd]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const dd = this._m;
        for (let Jd = 0; Jd < 16; Jd++) dd[Jd] = Math.max(dd[Jd], Jd < 0 || arguments.length <= Jd ? void 0 : arguments[Jd]);
        return this.markAsUpdated(), this
      }
      ck() {
        return this.negateToRef(new Od)
      }
      negateInPlace() {
        const dd = this._m;
        for (let Jd = 0; Jd < 16; Jd++) dd[Jd] = -dd[Jd];
        return this.markAsUpdated(), this
      }
      negateToRef(dd) {
        const Jd = this._m,
          kd = dd._m;
        for (let pd = 0; pd < 16; pd++) kd[pd] = -Jd[pd];
        return dd.markAsUpdated(), dd
      }
      equals(dd) {
        const Jd = dd;
        if (!Jd) return !1;
        if ((this._isIdentity || Jd._isIdentity) && !this._isIdentityDirty && !Jd._isIdentityDirty) return this._isIdentity && Jd._isIdentity;
        const kd = this.m,
          pd = Jd.m;
        return kd[0] === pd[0] && kd[1] === pd[1] && kd[2] === pd[2] && kd[3] === pd[3] && kd[4] === pd[4] && kd[5] === pd[5] && kd[6] === pd[6] && kd[7] === pd[7] && kd[8] === pd[8] && kd[9] === pd[9] && kd[10] === pd[10] && kd[11] === pd[11] && kd[12] === pd[12] && kd[13] === pd[13] && kd[14] === pd[14] && kd[15] === pd[15]
      }
      equalsWithEpsilon(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const kd = this._m,
          pd = dd.m;
        for (let Nd = 0; Nd < 16; Nd++)
          if (!(0, Zd.WithinEpsilon)(kd[Nd], pd[Nd], Jd)) return !1;
        return !0
      }
      zPd() {
        const dd = this._m;
        for (let Jd = 0; Jd < 16; Jd++)
          if (dd[Jd] != (Jd < 0 || arguments.length <= Jd ? void 0 : arguments[Jd])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new Od)
      }
      floorToRef(dd) {
        const Jd = this._m,
          kd = dd._m;
        for (let pd = 0; pd < 16; pd++) kd[pd] = Math.floor(Jd[pd]);
        return dd.markAsUpdated(), dd
      }
      fract() {
        return this.fractToRef(new Od)
      }
      fractToRef(dd) {
        const Jd = this._m,
          kd = dd._m;
        for (let pd = 0; pd < 16; pd++) kd[pd] = Jd[pd] - Math.floor(Jd[pd]);
        return dd.markAsUpdated(), dd
      }
      clone() {
        const dd = new Od;
        return dd.Fs(this), dd
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let dd = Kd(this._m[0]);
        for (let Jd = 1; Jd < 16; Jd++) dd = 397 * dd ^ Kd(this._m[Jd]);
        return dd
      }
      decomposeToTransformNode(dd) {
        return dd.rotationQuaternion = dd.rotationQuaternion || new Ld, this.decompose(dd.fp, dd.rotationQuaternion, dd.position)
      }
      decompose(dd, Jd, kd, pd) {
        let Nd = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return kd && kd.o5(0), dd && dd.o5(1), Jd && Jd.kdd(0, 0, 0, 1), !0;
        const Wd = this._m;
        if (kd && kd.kdd(Wd[12], Wd[13], Wd[14]), (dd = dd || ed.IL[0]).x = Math.sqrt(Wd[0] * Wd[0] + Wd[1] * Wd[1] + Wd[2] * Wd[2]), dd.y = Math.sqrt(Wd[4] * Wd[4] + Wd[5] * Wd[5] + Wd[6] * Wd[6]), dd.z = Math.sqrt(Wd[8] * Wd[8] + Wd[9] * Wd[9] + Wd[10] * Wd[10]), pd) {
          const Jd = (Nd ? pd.absoluteScaling.x : pd.fp.x) < 0 ? -1 : 1,
            kd = (Nd ? pd.absoluteScaling.y : pd.fp.y) < 0 ? -1 : 1,
            Wd = (Nd ? pd.absoluteScaling.z : pd.fp.z) < 0 ? -1 : 1;
          dd.x *= Jd, dd.y *= kd, dd.z *= Wd
        } else this.determinant() <= 0 && (dd.y *= -1);
        if (0 === dd._x || 0 === dd._y || 0 === dd._z) return Jd && Jd.kdd(0, 0, 0, 1), !1;
        if (Jd) {
          const kd = 1 / dd._x,
            pd = 1 / dd._y,
            Nd = 1 / dd._z;
          Od.FromValuesToRef(Wd[0] * kd, Wd[1] * kd, Wd[2] * kd, 0, Wd[4] * pd, Wd[5] * pd, Wd[6] * pd, 0, Wd[8] * Nd, Wd[9] * Nd, Wd[10] * Nd, 0, 0, 0, 0, 1, ed.Matrix[0]), Ld.FromRotationMatrixToRef(ed.Matrix[0], Jd)
        }
        return !0
      }
      getRow(dd) {
        if (dd < 0 || dd > 3) return null;
        const Jd = 4 * dd;
        return new Qd(this._m[Jd + 0], this._m[Jd + 1], this._m[Jd + 2], this._m[Jd + 3])
      }
      getRowToRef(dd, Jd) {
        if (dd >= 0 && dd <= 3) {
          const kd = 4 * dd;
          Jd.x = this._m[kd + 0], Jd.y = this._m[kd + 1], Jd.z = this._m[kd + 2], Jd.w = this._m[kd + 3]
        }
        return Jd
      }
      setRow(dd, Jd) {
        return this.setRowFromFloats(dd, Jd.x, Jd.y, Jd.z, Jd.w)
      }
      transpose() {
        const dd = new Od;
        return Od.TransposeToRef(this, dd), dd
      }
      transposeToRef(dd) {
        return Od.TransposeToRef(this, dd), dd
      }
      setRowFromFloats(dd, Jd, kd, pd, Nd) {
        if (dd < 0 || dd > 3) return this;
        const Wd = 4 * dd;
        return this._m[Wd + 0] = Jd, this._m[Wd + 1] = kd, this._m[Wd + 2] = pd, this._m[Wd + 3] = Nd, this.markAsUpdated(), this
      }
      scale(dd) {
        const Jd = new Od;
        return this.scaleToRef(dd, Jd), Jd
      }
      scaleToRef(dd, Jd) {
        for (let kd = 0; kd < 16; kd++) Jd._m[kd] = this._m[kd] * dd;
        return Jd.markAsUpdated(), Jd
      }
      scaleAndAddToRef(dd, Jd) {
        for (let kd = 0; kd < 16; kd++) Jd._m[kd] += this._m[kd] * dd;
        return Jd.markAsUpdated(), Jd
      }
      scaleInPlace(dd) {
        const Jd = this._m;
        for (let kd = 0; kd < 16; kd++) Jd[kd] *= dd;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(dd) {
        const Jd = ed.Matrix[0];
        this.invertToRef(Jd), Jd.transposeToRef(dd);
        const kd = dd._m;
        return Od.FromValuesToRef(kd[0], kd[1], kd[2], 0, kd[4], kd[5], kd[6], 0, kd[8], kd[9], kd[10], 0, 0, 0, 0, 1, dd), dd
      }
      getRotationMatrix() {
        const dd = new Od;
        return this.getRotationMatrixToRef(dd), dd
      }
      getRotationMatrixToRef(dd) {
        const Jd = ed.IL[0];
        if (!this.decompose(Jd)) return Od.IdentityToRef(dd), dd;
        const kd = this._m,
          pd = 1 / Jd._x,
          Nd = 1 / Jd._y,
          Wd = 1 / Jd._z;
        return Od.FromValuesToRef(kd[0] * pd, kd[1] * pd, kd[2] * pd, 0, kd[4] * Nd, kd[5] * Nd, kd[6] * Nd, 0, kd[8] * Wd, kd[9] * Wd, kd[10] * Wd, 0, 0, 0, 0, 1, dd), dd
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
        return this.multiplyToRef(Id, this), this
      }
      static FromArray(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const kd = new Od;
        return Od.FromArrayToRef(dd, Jd, kd), kd
      }
      static FromArrayToRef(dd, Jd, kd) {
        for (let pd = 0; pd < 16; pd++) kd._m[pd] = dd[pd + Jd];
        return kd.markAsUpdated(), kd
      }
      static FromFloat32ArrayToRefScaled(dd, Jd, kd, pd) {
        return pd._m[0] = dd[0 + Jd] * kd, pd._m[1] = dd[1 + Jd] * kd, pd._m[2] = dd[2 + Jd] * kd, pd._m[3] = dd[3 + Jd] * kd, pd._m[4] = dd[4 + Jd] * kd, pd._m[5] = dd[5 + Jd] * kd, pd._m[6] = dd[6 + Jd] * kd, pd._m[7] = dd[7 + Jd] * kd, pd._m[8] = dd[8 + Jd] * kd, pd._m[9] = dd[9 + Jd] * kd, pd._m[10] = dd[10 + Jd] * kd, pd._m[11] = dd[11 + Jd] * kd, pd._m[12] = dd[12 + Jd] * kd, pd._m[13] = dd[13 + Jd] * kd, pd._m[14] = dd[14 + Jd] * kd, pd._m[15] = dd[15 + Jd] * kd, pd.markAsUpdated(), pd
      }
      static get IdentityReadOnly() {
        return Od._IdentityReadOnly
      }
      static FromValuesToRef(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd, od, ld, Qd, Ld, Od, ed) {
        const Rd = ed._m;
        Rd[0] = dd, Rd[1] = Jd, Rd[2] = kd, Rd[3] = pd, Rd[4] = Nd, Rd[5] = Wd, Rd[6] = Pd, Rd[7] = Zd, Rd[8] = gd, Rd[9] = Cd, Rd[10] = Kd, Rd[11] = od, Rd[12] = ld, Rd[13] = Qd, Rd[14] = Ld, Rd[15] = Od, ed.markAsUpdated()
      }
      static FromValues(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd, od, ld, Qd, Ld, ed) {
        const Rd = new Od,
          Id = Rd._m;
        return Id[0] = dd, Id[1] = Jd, Id[2] = kd, Id[3] = pd, Id[4] = Nd, Id[5] = Wd, Id[6] = Pd, Id[7] = Zd, Id[8] = gd, Id[9] = Cd, Id[10] = Kd, Id[11] = od, Id[12] = ld, Id[13] = Qd, Id[14] = Ld, Id[15] = ed, Rd.markAsUpdated(), Rd
      }
      static Compose(dd, Jd, kd) {
        const pd = new Od;
        return Od.ComposeToRef(dd, Jd, kd, pd), pd
      }
      static ComposeToRef(dd, Jd, kd, pd) {
        const Nd = pd._m,
          Wd = Jd._x,
          Pd = Jd._y,
          Zd = Jd._z,
          gd = Jd._w,
          Cd = Wd + Wd,
          Kd = Pd + Pd,
          od = Zd + Zd,
          ld = Wd * Cd,
          Qd = Wd * Kd,
          Ld = Wd * od,
          Od = Pd * Kd,
          ed = Pd * od,
          Rd = Zd * od,
          Id = gd * Cd,
          Gd = gd * Kd,
          vd = gd * od,
          xd = dd._x,
          qd = dd._y,
          Bd = dd._z;
        return Nd[0] = (1 - (Od + Rd)) * xd, Nd[1] = (Qd + vd) * xd, Nd[2] = (Ld - Gd) * xd, Nd[3] = 0, Nd[4] = (Qd - vd) * qd, Nd[5] = (1 - (ld + Rd)) * qd, Nd[6] = (ed + Id) * qd, Nd[7] = 0, Nd[8] = (Ld + Gd) * Bd, Nd[9] = (ed - Id) * Bd, Nd[10] = (1 - (ld + Od)) * Bd, Nd[11] = 0, Nd[12] = kd._x, Nd[13] = kd._y, Nd[14] = kd._z, Nd[15] = 1, pd.markAsUpdated(), pd
      }
      static Identity() {
        const dd = Od.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return dd._updateIdentityStatus(!0), dd
      }
      static IdentityToRef(dd) {
        return Od.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, dd), dd._updateIdentityStatus(!0), dd
      }
      static Zero() {
        const dd = Od.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return dd._updateIdentityStatus(!1), dd
      }
      static RotationX(dd) {
        const Jd = new Od;
        return Od.RotationXToRef(dd, Jd), Jd
      }
      static Invert(dd) {
        const Jd = new Od;
        return dd.invertToRef(Jd), Jd
      }
      static RotationXToRef(dd, Jd) {
        const kd = Math.sin(dd),
          pd = Math.cos(dd);
        return Od.FromValuesToRef(1, 0, 0, 0, 0, pd, kd, 0, 0, -kd, pd, 0, 0, 0, 0, 1, Jd), Jd._updateIdentityStatus(1 === pd && 0 === kd), Jd
      }
      static RotationY(dd) {
        const Jd = new Od;
        return Od.RotationYToRef(dd, Jd), Jd
      }
      static RotationYToRef(dd, Jd) {
        const kd = Math.sin(dd),
          pd = Math.cos(dd);
        return Od.FromValuesToRef(pd, 0, -kd, 0, 0, 1, 0, 0, kd, 0, pd, 0, 0, 0, 0, 1, Jd), Jd._updateIdentityStatus(1 === pd && 0 === kd), Jd
      }
      static RotationZ(dd) {
        const Jd = new Od;
        return Od.RotationZToRef(dd, Jd), Jd
      }
      static RotationZToRef(dd, Jd) {
        const kd = Math.sin(dd),
          pd = Math.cos(dd);
        return Od.FromValuesToRef(pd, kd, 0, 0, -kd, pd, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, Jd), Jd._updateIdentityStatus(1 === pd && 0 === kd), Jd
      }
      static RotationAxis(dd, Jd) {
        const kd = new Od;
        return Od.RotationAxisToRef(dd, Jd, kd), kd
      }
      static RotationAxisToRef(dd, Jd, kd) {
        const pd = Math.sin(-Jd),
          Nd = Math.cos(-Jd),
          Wd = 1 - Nd;
        dd = dd.normalizeToRef(ed.IL[0]);
        const Pd = kd._m;
        return Pd[0] = dd._x * dd._x * Wd + Nd, Pd[1] = dd._x * dd._y * Wd - dd._z * pd, Pd[2] = dd._x * dd._z * Wd + dd._y * pd, Pd[3] = 0, Pd[4] = dd._y * dd._x * Wd + dd._z * pd, Pd[5] = dd._y * dd._y * Wd + Nd, Pd[6] = dd._y * dd._z * Wd - dd._x * pd, Pd[7] = 0, Pd[8] = dd._z * dd._x * Wd - dd._y * pd, Pd[9] = dd._z * dd._y * Wd + dd._x * pd, Pd[10] = dd._z * dd._z * Wd + Nd, Pd[11] = 0, Pd[12] = 0, Pd[13] = 0, Pd[14] = 0, Pd[15] = 1, kd.markAsUpdated(), kd
      }
      static RotationAlignToRef(dd, Jd, kd) {
        let Nd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Wd = ld.Dot(Jd, dd),
          Pd = kd._m;
        if (Wd < -1 + pd.e) Pd[0] = -1, Pd[1] = 0, Pd[2] = 0, Pd[3] = 0, Pd[4] = 0, Pd[5] = Nd ? 1 : -1, Pd[6] = 0, Pd[7] = 0, Pd[8] = 0, Pd[9] = 0, Pd[10] = Nd ? -1 : 1, Pd[11] = 0;
        else {
          const kd = ld.Cross(Jd, dd),
            pd = 1 / (1 + Wd);
          Pd[0] = kd._x * kd._x * pd + Wd, Pd[1] = kd._y * kd._x * pd - kd._z, Pd[2] = kd._z * kd._x * pd + kd._y, Pd[3] = 0, Pd[4] = kd._x * kd._y * pd + kd._z, Pd[5] = kd._y * kd._y * pd + Wd, Pd[6] = kd._z * kd._y * pd - kd._x, Pd[7] = 0, Pd[8] = kd._x * kd._z * pd - kd._y, Pd[9] = kd._y * kd._z * pd + kd._x, Pd[10] = kd._z * kd._z * pd + Wd, Pd[11] = 0
        }
        return Pd[12] = 0, Pd[13] = 0, Pd[14] = 0, Pd[15] = 1, kd.markAsUpdated(), kd
      }
      static RotationYawPitchRoll(dd, Jd, kd) {
        const pd = new Od;
        return Od.RotationYawPitchRollToRef(dd, Jd, kd, pd), pd
      }
      static RotationYawPitchRollToRef(dd, Jd, kd, pd) {
        return Ld.RotationYawPitchRollToRef(dd, Jd, kd, ed.Quaternion[0]), ed.Quaternion[0].toRotationMatrix(pd), pd
      }
      static Scaling(dd, Jd, kd) {
        const pd = new Od;
        return Od.ScalingToRef(dd, Jd, kd, pd), pd
      }
      static ScalingToRef(dd, Jd, kd, pd) {
        return Od.FromValuesToRef(dd, 0, 0, 0, 0, Jd, 0, 0, 0, 0, kd, 0, 0, 0, 0, 1, pd), pd._updateIdentityStatus(1 === dd && 1 === Jd && 1 === kd), pd
      }
      static Translation(dd, Jd, kd) {
        const pd = new Od;
        return Od.TranslationToRef(dd, Jd, kd, pd), pd
      }
      static TranslationToRef(dd, Jd, kd, pd) {
        return Od.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, dd, Jd, kd, 1, pd), pd._updateIdentityStatus(0 === dd && 0 === Jd && 0 === kd), pd
      }
      static Lerp(dd, Jd, kd) {
        const pd = new Od;
        return Od.LerpToRef(dd, Jd, kd, pd), pd
      }
      static LerpToRef(dd, Jd, kd, pd) {
        const Nd = pd._m,
          Wd = dd.m,
          Pd = Jd.m;
        for (let Zd = 0; Zd < 16; Zd++) Nd[Zd] = Wd[Zd] * (1 - kd) + Pd[Zd] * kd;
        return pd.markAsUpdated(), pd
      }
      static DecomposeLerp(dd, Jd, kd) {
        const pd = new Od;
        return Od.DecomposeLerpToRef(dd, Jd, kd, pd), pd
      }
      static DecomposeLerpToRef(dd, Jd, kd, pd) {
        const Nd = ed.IL[0],
          Wd = ed.Quaternion[0],
          Pd = ed.IL[1];
        dd.decompose(Nd, Wd, Pd);
        const Zd = ed.IL[2],
          gd = ed.Quaternion[1],
          Cd = ed.IL[3];
        Jd.decompose(Zd, gd, Cd);
        const Kd = ed.IL[4];
        ld.LerpToRef(Nd, Zd, kd, Kd);
        const od = ed.Quaternion[2];
        Ld.SlerpToRef(Wd, gd, kd, od);
        const Qd = ed.IL[5];
        return ld.LerpToRef(Pd, Cd, kd, Qd), Od.ComposeToRef(Kd, od, Qd, pd), pd
      }
      static LookAtLH(dd, Jd, kd) {
        const pd = new Od;
        return Od.LookAtLHToRef(dd, Jd, kd, pd), pd
      }
      static LookAtLHToRef(dd, Jd, kd, pd) {
        const Nd = ed.IL[0],
          Wd = ed.IL[1],
          Pd = ed.IL[2];
        Jd.subtractToRef(dd, Pd), Pd.normalize(), ld.CrossToRef(kd, Pd, Nd);
        const Zd = Nd.lengthSquared();
        0 === Zd ? Nd.x = 1 : Nd.normalizeFromLength(Math.sqrt(Zd)), ld.CrossToRef(Pd, Nd, Wd), Wd.normalize();
        const gd = -ld.Dot(Nd, dd),
          Cd = -ld.Dot(Wd, dd),
          Kd = -ld.Dot(Pd, dd);
        return Od.FromValuesToRef(Nd._x, Wd._x, Pd._x, 0, Nd._y, Wd._y, Pd._y, 0, Nd._z, Wd._z, Pd._z, 0, gd, Cd, Kd, 1, pd), pd
      }
      static LookAtRH(dd, Jd, kd) {
        const pd = new Od;
        return Od.LookAtRHToRef(dd, Jd, kd, pd), pd
      }
      static LookAtRHToRef(dd, Jd, kd, pd) {
        const Nd = ed.IL[0],
          Wd = ed.IL[1],
          Pd = ed.IL[2];
        dd.subtractToRef(Jd, Pd), Pd.normalize(), ld.CrossToRef(kd, Pd, Nd);
        const Zd = Nd.lengthSquared();
        0 === Zd ? Nd.x = 1 : Nd.normalizeFromLength(Math.sqrt(Zd)), ld.CrossToRef(Pd, Nd, Wd), Wd.normalize();
        const gd = -ld.Dot(Nd, dd),
          Cd = -ld.Dot(Wd, dd),
          Kd = -ld.Dot(Pd, dd);
        return Od.FromValuesToRef(Nd._x, Wd._x, Pd._x, 0, Nd._y, Wd._y, Pd._y, 0, Nd._z, Wd._z, Pd._z, 0, gd, Cd, Kd, 1, pd), pd
      }
      static LookDirectionLH(dd, Jd) {
        const kd = new Od;
        return Od.LookDirectionLHToRef(dd, Jd, kd), kd
      }
      static LookDirectionLHToRef(dd, Jd, kd) {
        const pd = ed.IL[0];
        pd.Fs(dd), pd.scaleInPlace(-1);
        const Nd = ed.IL[1];
        return ld.CrossToRef(Jd, pd, Nd), Od.FromValuesToRef(Nd._x, Nd._y, Nd._z, 0, Jd._x, Jd._y, Jd._z, 0, pd._x, pd._y, pd._z, 0, 0, 0, 0, 1, kd), kd
      }
      static LookDirectionRH(dd, Jd) {
        const kd = new Od;
        return Od.LookDirectionRHToRef(dd, Jd, kd), kd
      }
      static LookDirectionRHToRef(dd, Jd, kd) {
        const pd = ed.IL[2];
        return ld.CrossToRef(Jd, dd, pd), Od.FromValuesToRef(pd._x, pd._y, pd._z, 0, Jd._x, Jd._y, Jd._z, 0, dd._x, dd._y, dd._z, 0, 0, 0, 0, 1, kd), kd
      }
      static OrthoLH(dd, Jd, kd, pd, Nd) {
        const Wd = new Od;
        return Od.OrthoLHToRef(dd, Jd, kd, pd, Wd, Nd), Wd
      }
      static OrthoLHToRef(dd, Jd, kd, pd, Nd, Wd) {
        const Pd = 2 / dd,
          Zd = 2 / Jd,
          gd = 2 / (pd - kd),
          Cd = -(pd + kd) / (pd - kd);
        return Od.FromValuesToRef(Pd, 0, 0, 0, 0, Zd, 0, 0, 0, 0, gd, 0, 0, 0, Cd, 1, Nd), Wd && Nd.multiplyToRef(Id, Nd), Nd._updateIdentityStatus(1 === Pd && 1 === Zd && 1 === gd && 0 === Cd), Nd
      }
      static OrthoOffCenterLH(dd, Jd, kd, pd, Nd, Wd, Pd) {
        const Zd = new Od;
        return Od.OrthoOffCenterLHToRef(dd, Jd, kd, pd, Nd, Wd, Zd, Pd), Zd
      }
      static OrthoOffCenterLHToRef(dd, Jd, kd, pd, Nd, Wd, Pd, Zd) {
        const gd = 2 / (Jd - dd),
          Cd = 2 / (pd - kd),
          Kd = 2 / (Wd - Nd),
          od = -(Wd + Nd) / (Wd - Nd),
          ld = (dd + Jd) / (dd - Jd),
          Qd = (pd + kd) / (kd - pd);
        return Od.FromValuesToRef(gd, 0, 0, 0, 0, Cd, 0, 0, 0, 0, Kd, 0, ld, Qd, od, 1, Pd), Zd && Pd.multiplyToRef(Id, Pd), Pd.markAsUpdated(), Pd
      }
      static ObliqueOffCenterLHToRef(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd) {
        const od = -Pd * Math.cos(Zd),
          ld = -Pd * Math.sin(Zd);
        return Od.TranslationToRef(0, 0, -gd, ed.Matrix[1]), Od.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, od, ld, 1, 0, 0, 0, 0, 1, ed.Matrix[0]), ed.Matrix[1].multiplyToRef(ed.Matrix[0], ed.Matrix[0]), Od.TranslationToRef(0, 0, gd, ed.Matrix[1]), ed.Matrix[0].multiplyToRef(ed.Matrix[1], ed.Matrix[0]), Od.OrthoOffCenterLHToRef(dd, Jd, kd, pd, Nd, Wd, Cd, Kd), ed.Matrix[0].multiplyToRef(Cd, Cd), Cd
      }
      static OrthoOffCenterRH(dd, Jd, kd, pd, Nd, Wd, Pd) {
        const Zd = new Od;
        return Od.OrthoOffCenterRHToRef(dd, Jd, kd, pd, Nd, Wd, Zd, Pd), Zd
      }
      static OrthoOffCenterRHToRef(dd, Jd, kd, pd, Nd, Wd, Pd, Zd) {
        return Od.OrthoOffCenterLHToRef(dd, Jd, kd, pd, Nd, Wd, Pd, Zd), Pd._m[10] *= -1, Pd
      }
      static ObliqueOffCenterRHToRef(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd) {
        const od = Pd * Math.cos(Zd),
          ld = Pd * Math.sin(Zd);
        return Od.TranslationToRef(0, 0, gd, ed.Matrix[1]), Od.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, od, ld, 1, 0, 0, 0, 0, 1, ed.Matrix[0]), ed.Matrix[1].multiplyToRef(ed.Matrix[0], ed.Matrix[0]), Od.TranslationToRef(0, 0, -gd, ed.Matrix[1]), ed.Matrix[0].multiplyToRef(ed.Matrix[1], ed.Matrix[0]), Od.OrthoOffCenterRHToRef(dd, Jd, kd, pd, Nd, Wd, Cd, Kd), ed.Matrix[0].multiplyToRef(Cd, Cd), Cd
      }
      static PerspectiveLH(dd, Jd, kd, pd, Nd) {
        let Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const Pd = new Od,
          Zd = 2 * kd / dd,
          gd = 2 * kd / Jd,
          Cd = (pd + kd) / (pd - kd),
          Kd = -2 * pd * kd / (pd - kd),
          od = Math.tan(Wd);
        return Od.FromValuesToRef(Zd, 0, 0, 0, 0, gd, 0, od, 0, 0, Cd, 1, 0, 0, Kd, 0, Pd), Nd && Pd.multiplyToRef(Id, Pd), Pd._updateIdentityStatus(!1), Pd
      }
      static PerspectiveFovLH(dd, Jd, kd, pd, Nd) {
        let Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Pd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const Zd = new Od;
        return Od.PerspectiveFovLHToRef(dd, Jd, kd, pd, Zd, !0, Nd, Wd, Pd), Zd
      }
      static PerspectiveFovLHToRef(dd, Jd, kd, pd, Nd) {
        let Wd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Pd = arguments.length > 6 ? arguments[6] : void 0,
          Zd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          gd = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Cd = kd,
          Kd = pd,
          od = 1 / Math.tan(.5 * dd),
          ld = Wd ? od / Jd : od,
          Qd = Wd ? od : od * Jd,
          Ld = gd && 0 === Cd ? -1 : 0 !== Kd ? (Kd + Cd) / (Kd - Cd) : 1,
          ed = gd && 0 === Cd ? 2 * Kd : 0 !== Kd ? -2 * Kd * Cd / (Kd - Cd) : -2 * Cd,
          Rd = Math.tan(Zd);
        return Od.FromValuesToRef(ld, 0, 0, 0, 0, Qd, 0, Rd, 0, 0, Ld, 1, 0, 0, ed, 0, Nd), Pd && Nd.multiplyToRef(Id, Nd), Nd._updateIdentityStatus(!1), Nd
      }
      static PerspectiveFovReverseLHToRef(dd, Jd, kd, pd, Nd) {
        let Wd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Pd = arguments.length > 6 ? arguments[6] : void 0,
          Zd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const gd = 1 / Math.tan(.5 * dd),
          Cd = Wd ? gd / Jd : gd,
          Kd = Wd ? gd : gd * Jd,
          od = Math.tan(Zd);
        return Od.FromValuesToRef(Cd, 0, 0, 0, 0, Kd, 0, od, 0, 0, -kd, 1, 0, 0, 1, 0, Nd), Pd && Nd.multiplyToRef(Id, Nd), Nd._updateIdentityStatus(!1), Nd
      }
      static PerspectiveFovRH(dd, Jd, kd, pd, Nd) {
        let Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Pd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const Zd = new Od;
        return Od.PerspectiveFovRHToRef(dd, Jd, kd, pd, Zd, !0, Nd, Wd, Pd), Zd
      }
      static PerspectiveFovRHToRef(dd, Jd, kd, pd, Nd) {
        let Wd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Pd = arguments.length > 6 ? arguments[6] : void 0,
          Zd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          gd = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Cd = kd,
          Kd = pd,
          od = 1 / Math.tan(.5 * dd),
          ld = Wd ? od / Jd : od,
          Qd = Wd ? od : od * Jd,
          Ld = gd && 0 === Cd ? 1 : 0 !== Kd ? -(Kd + Cd) / (Kd - Cd) : -1,
          ed = gd && 0 === Cd ? 2 * Kd : 0 !== Kd ? -2 * Kd * Cd / (Kd - Cd) : -2 * Cd,
          Rd = Math.tan(Zd);
        return Od.FromValuesToRef(ld, 0, 0, 0, 0, Qd, 0, Rd, 0, 0, Ld, -1, 0, 0, ed, 0, Nd), Pd && Nd.multiplyToRef(Id, Nd), Nd._updateIdentityStatus(!1), Nd
      }
      static PerspectiveFovReverseRHToRef(dd, Jd, kd, pd, Nd) {
        let Wd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Pd = arguments.length > 6 ? arguments[6] : void 0,
          Zd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const gd = 1 / Math.tan(.5 * dd),
          Cd = Wd ? gd / Jd : gd,
          Kd = Wd ? gd : gd * Jd,
          od = Math.tan(Zd);
        return Od.FromValuesToRef(Cd, 0, 0, 0, 0, Kd, 0, od, 0, 0, -kd, -1, 0, 0, -1, 0, Nd), Pd && Nd.multiplyToRef(Id, Nd), Nd._updateIdentityStatus(!1), Nd
      }
      static GetFinalMatrix(dd, Jd, kd, pd, Nd, Wd) {
        const Pd = dd.width,
          Zd = dd.height,
          gd = dd.x,
          Cd = dd.y,
          Kd = Od.FromValues(Pd / 2, 0, 0, 0, 0, -Zd / 2, 0, 0, 0, 0, Wd - Nd, 0, gd + Pd / 2, Zd / 2 + Cd, Nd, 1),
          od = new Od;
        return Jd.multiplyToRef(kd, od), od.multiplyToRef(pd, od), od.multiplyToRef(Kd, od)
      }
      static GetAsMatrix2x2(dd) {
        const Jd = dd.m,
          kd = [Jd[0], Jd[1], Jd[4], Jd[5]];
        return Wd.d.MatrixUse64Bits ? kd : new Float32Array(kd)
      }
      static GetAsMatrix3x3(dd) {
        const Jd = dd.m,
          kd = [Jd[0], Jd[1], Jd[2], Jd[4], Jd[5], Jd[6], Jd[8], Jd[9], Jd[10]];
        return Wd.d.MatrixUse64Bits ? kd : new Float32Array(kd)
      }
      static Transpose(dd) {
        const Jd = new Od;
        return Od.TransposeToRef(dd, Jd), Jd
      }
      static TransposeToRef(dd, Jd) {
        const kd = dd.m,
          pd = kd[0],
          Nd = kd[4],
          Wd = kd[8],
          Pd = kd[12],
          Zd = kd[1],
          gd = kd[5],
          Cd = kd[9],
          Kd = kd[13],
          od = kd[2],
          ld = kd[6],
          Qd = kd[10],
          Ld = kd[14],
          Od = kd[3],
          ed = kd[7],
          Rd = kd[11],
          Id = kd[15],
          Gd = Jd._m;
        return Gd[0] = pd, Gd[1] = Nd, Gd[2] = Wd, Gd[3] = Pd, Gd[4] = Zd, Gd[5] = gd, Gd[6] = Cd, Gd[7] = Kd, Gd[8] = od, Gd[9] = ld, Gd[10] = Qd, Gd[11] = Ld, Gd[12] = Od, Gd[13] = ed, Gd[14] = Rd, Gd[15] = Id, Jd.markAsUpdated(), Jd._updateIdentityStatus(dd._isIdentity, dd._isIdentityDirty), Jd
      }
      static Reflection(dd) {
        const Jd = new Od;
        return Od.ReflectionToRef(dd, Jd), Jd
      }
      static ReflectionToRef(dd, Jd) {
        dd.normalize();
        const kd = dd.normal.x,
          pd = dd.normal.y,
          Nd = dd.normal.z,
          Wd = -2 * kd,
          Pd = -2 * pd,
          Zd = -2 * Nd;
        return Od.FromValuesToRef(Wd * kd + 1, Pd * kd, Zd * kd, 0, Wd * pd, Pd * pd + 1, Zd * pd, 0, Wd * Nd, Pd * Nd, Zd * Nd + 1, 0, Wd * dd.d, Pd * dd.d, Zd * dd.d, 1, Jd), Jd
      }
      static FromXYZAxesToRef(dd, Jd, kd, pd) {
        return Od.FromValuesToRef(dd._x, dd._y, dd._z, 0, Jd._x, Jd._y, Jd._z, 0, kd._x, kd._y, kd._z, 0, 0, 0, 0, 1, pd), pd
      }
      static FromQuaternionToRef(dd, Jd) {
        const kd = dd._x * dd._x,
          pd = dd._y * dd._y,
          Nd = dd._z * dd._z,
          Wd = dd._x * dd._y,
          Pd = dd._z * dd._w,
          Zd = dd._z * dd._x,
          gd = dd._y * dd._w,
          Cd = dd._y * dd._z,
          Kd = dd._x * dd._w;
        return Jd._m[0] = 1 - 2 * (pd + Nd), Jd._m[1] = 2 * (Wd + Pd), Jd._m[2] = 2 * (Zd - gd), Jd._m[3] = 0, Jd._m[4] = 2 * (Wd - Pd), Jd._m[5] = 1 - 2 * (Nd + kd), Jd._m[6] = 2 * (Cd + Kd), Jd._m[7] = 0, Jd._m[8] = 2 * (Zd + gd), Jd._m[9] = 2 * (Cd - Kd), Jd._m[10] = 1 - 2 * (pd + kd), Jd._m[11] = 0, Jd._m[12] = 0, Jd._m[13] = 0, Jd._m[14] = 0, Jd._m[15] = 1, Jd.markAsUpdated(), Jd
      }
    }
    Od._IdentityReadOnly = Od.Identity();
    class ed {}
    ed.IL = (0, Nd.f)(11, ld.Zero), ed.Matrix = (0, Nd.f)(2, Od.Identity), ed.Quaternion = (0, Nd.f)(3, Ld.Zero);
    class Rd {}
    Rd.Vector2 = (0, Nd.f)(3, od.Zero), Rd.IL = (0, Nd.f)(13, ld.Zero), Rd.Vector4 = (0, Nd.f)(3, Qd.Zero), Rd.Quaternion = (0, Nd.f)(3, Ld.Zero), Rd.Matrix = (0, Nd.f)(8, Od.Identity);
    const Id = Od.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let Gd = !1;

    function vd() {
      Gd || (Gd = !0, Object.defineProperties(od.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(ld.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Qd.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Ld.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Od.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, Cd.h)("BABYLON.Vector2", od), (0, Cd.h)("BABYLON.Vector3", ld), (0, Cd.h)("BABYLON.Vector4", Qd), (0, Cd.h)("BABYLON.Matrix", Od))
    }
  },
  37280: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Pd
    });
    const pd = "undefined" !== typeof WeakRef;
    class Nd {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          kd = arguments.length > 2 ? arguments[2] : void 0,
          pd = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(dd, Jd, kd, pd)
      }
      initialize(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          kd = arguments.length > 2 ? arguments[2] : void 0,
          pd = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = dd, this.skipNextObservers = Jd, this.target = kd, this.currentTarget = pd, this
      }
    }
    class Wd {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = dd, this.mask = Jd, this.scope = kd, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(dd)
      }
    }
    class Pd {
      static FromPromise(dd, Jd) {
        const kd = new Pd;
        return dd.then((dd => {
          kd.notifyObservers(dd)
        })).catch((dd => {
          if (!Jd) throw dd;
          Jd.notifyObservers(dd)
        })), kd
      }
      get observers() {
        return this._observers
      }
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = Jd, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new Nd(0), dd && (this._onObserverAdded = dd)
      }
      add(dd) {
        let Jd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          kd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!dd) return null;
        const Nd = new Wd(dd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        Nd.unregisterOnNextCall = kd, Jd ? this._observers.unshift(Nd) : this._observers.push(Nd), this._onObserverAdded && this._onObserverAdded(Nd), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(Nd, this._lastNotifiedValue);
        const Pd = pd ? new WeakRef(this) : {
          deref: () => this
        };
        return Nd._remove = function() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const Jd = Pd.deref();
          Jd && (dd ? Jd.remove(Nd) : Jd._remove(Nd))
        }, Nd
      }
      addOnce(dd) {
        return this.add(dd, void 0, void 0, void 0, !0)
      }
      remove(dd) {
        if (!dd) return !1;
        dd._remove = null;
        return -1 !== this._observers.indexOf(dd) && (this._deferUnregister(dd), !0)
      }
      removeCallback(dd, Jd) {
        for (let kd = 0; kd < this._observers.length; kd++) {
          const pd = this._observers[kd];
          if (!pd._willBeUnregistered && (pd.callback === dd && (!Jd || Jd === pd.scope))) return this._deferUnregister(pd), !0
        }
        return !1
      }
      _deferUnregister(dd) {
        dd._willBeUnregistered || (this._numObserversMarkedAsDeleted++, dd.unregisterOnNextCall = !1, dd._willBeUnregistered = !0, setTimeout((() => {
          this._remove(dd)
        }), 0))
      }
      _remove(dd) {
        let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!dd) return !1;
        const kd = this._observers.indexOf(dd);
        return -1 !== kd && (Jd && this._numObserversMarkedAsDeleted--, this._observers.splice(kd, 1), !0)
      }
      makeObserverTopPriority(dd) {
        this._remove(dd, !1), this._observers.unshift(dd)
      }
      makeObserverBottomPriority(dd) {
        this._remove(dd, !1), this._observers.push(dd)
      }
      notifyObservers(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          kd = arguments.length > 2 ? arguments[2] : void 0,
          pd = arguments.length > 3 ? arguments[3] : void 0,
          Nd = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = dd), !this._observers.length) return !0;
        const Wd = this._eventState;
        Wd.mask = Jd, Wd.target = kd, Wd.currentTarget = pd, Wd.skipNextObservers = !1, Wd.lastReturnValue = dd, Wd.userInfo = Nd;
        for (const Pd of this._observers)
          if (!Pd._willBeUnregistered && (Pd.mask & Jd && (Pd.unregisterOnNextCall && this._deferUnregister(Pd), Pd.scope ? Wd.lastReturnValue = Pd.callback.apply(Pd.scope, [dd, Wd]) : Wd.lastReturnValue = Pd.callback(dd, Wd)), Wd.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = Jd), dd._willBeUnregistered) return;
        const pd = this._eventState;
        pd.mask = kd, pd.skipNextObservers = !1, dd.unregisterOnNextCall && this._deferUnregister(dd), dd.callback(Jd, pd)
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
        const dd = new Pd;
        return dd._observers = this._observers.slice(0), dd
      }
      hasSpecificMask() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const Jd of this._observers)
          if (Jd.mask & dd || Jd.mask === dd) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);