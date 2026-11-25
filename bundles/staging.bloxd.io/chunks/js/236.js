export const id = 236;
export const ids = [236];
export const modules = {
  37506: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Uu
    });
    var su = ju(37514);
    class Uu {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    Uu.Instances = [], Uu.OnEnginesDisposedObservable = new su.d, Uu._LastCreatedScene = null, Uu.UseFallbackTexture = !0, Uu.FallbackTexture = ""
  },
  37504: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => su
    });
    class su {
      static SetMatrixPrecision(uu) {
        if (su.MatrixTrackPrecisionChange = !1, uu && !su.MatrixUse64Bits && su.MatrixTrackedMatrices)
          for (let Eu = 0; Eu < su.MatrixTrackedMatrices.length; ++Eu) {
            const uu = su.MatrixTrackedMatrices[Eu],
              ju = uu._m;
            uu._m = new Array(16);
            for (let Eu = 0; Eu < 16; ++Eu) uu._m[Eu] = ju[Eu]
          }
        su.MatrixUse64Bits = uu, su.MatrixCurrentType = su.MatrixUse64Bits ? Array : Float32Array, su.MatrixTrackedMatrices = null
      }
    }
    su.MatrixUse64Bits = !1, su.MatrixTrackPrecisionChange = !0, su.MatrixCurrentType = Float32Array, su.MatrixTrackedMatrices = []
  },
  37525: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => lu,
      e: () => fu,
      i: () => qu,
      k: () => su,
      o: () => Zu,
      q: () => Xu
    });
    class su {}

    function Uu(uu) {
      uu.updateFlag = su._UpdateFlagSeed++
    }

    function Zu(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const Uu = uu.Osu(),
        Zu = Eu.Osu(),
        Xu = Uu[0],
        lu = Uu[1],
        qu = Uu[2],
        fu = Uu[3],
        Cu = Uu[4],
        bu = Uu[5],
        cu = Uu[6],
        Nu = Uu[7],
        Ou = Uu[8],
        Yu = Uu[9],
        hu = Uu[10],
        Du = Uu[11],
        gu = Uu[12],
        Mu = Uu[13],
        eu = Uu[14],
        Gu = Uu[15],
        pu = Zu[0],
        wu = Zu[1],
        Ju = Zu[2],
        du = Zu[3],
        au = Zu[4],
        Pu = Zu[5],
        ou = Zu[6],
        ku = Zu[7],
        mu = Zu[8],
        vu = Zu[9],
        Ku = Zu[10],
        Vu = Zu[11],
        ru = Zu[12],
        Qu = Zu[13],
        iu = Zu[14],
        Wu = Zu[15];
      ju[su] = Xu * pu + lu * au + qu * mu + fu * ru, ju[su + 1] = Xu * wu + lu * Pu + qu * vu + fu * Qu, ju[su + 2] = Xu * Ju + lu * ou + qu * Ku + fu * iu, ju[su + 3] = Xu * du + lu * ku + qu * Vu + fu * Wu, ju[su + 4] = Cu * pu + bu * au + cu * mu + Nu * ru, ju[su + 5] = Cu * wu + bu * Pu + cu * vu + Nu * Qu, ju[su + 6] = Cu * Ju + bu * ou + cu * Ku + Nu * iu, ju[su + 7] = Cu * du + bu * ku + cu * Vu + Nu * Wu, ju[su + 8] = Ou * pu + Yu * au + hu * mu + Du * ru, ju[su + 9] = Ou * wu + Yu * Pu + hu * vu + Du * Qu, ju[su + 10] = Ou * Ju + Yu * ou + hu * Ku + Du * iu, ju[su + 11] = Ou * du + Yu * ku + hu * Vu + Du * Wu, ju[su + 12] = gu * pu + Mu * au + eu * mu + Gu * ru, ju[su + 13] = gu * wu + Mu * Pu + eu * vu + Gu * Qu, ju[su + 14] = gu * Ju + Mu * ou + eu * Ku + Gu * iu, ju[su + 15] = gu * du + Mu * ku + eu * Vu + Gu * Wu
    }

    function Xu(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      Zu(uu, Eu, ju.Osu(), su), Uu(ju)
    }

    function lu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const su = uu.Osu();
      Eu[ju] = su[0], Eu[ju + 1] = su[1], Eu[ju + 2] = su[2], Eu[ju + 3] = su[3], Eu[ju + 4] = su[4], Eu[ju + 5] = su[5], Eu[ju + 6] = su[6], Eu[ju + 7] = su[7], Eu[ju + 8] = su[8], Eu[ju + 9] = su[9], Eu[ju + 10] = su[10], Eu[ju + 11] = su[11], Eu[ju + 12] = su[12], Eu[ju + 13] = su[13], Eu[ju + 14] = su[14], Eu[ju + 15] = su[15]
    }

    function qu(uu, Eu) {
      const ju = fu(uu, Eu.Osu());
      return ju && Uu(Eu), ju
    }

    function fu(uu, Eu) {
      const ju = uu.Osu(),
        su = ju[0],
        Uu = ju[1],
        Zu = ju[2],
        Xu = ju[3],
        lu = ju[4],
        qu = ju[5],
        fu = ju[6],
        Cu = ju[7],
        bu = ju[8],
        cu = ju[9],
        Nu = ju[10],
        Ou = ju[11],
        Yu = ju[12],
        hu = ju[13],
        Du = ju[14],
        gu = ju[15],
        Mu = Nu * gu - Du * Ou,
        eu = cu * gu - hu * Ou,
        Gu = cu * Du - hu * Nu,
        pu = bu * gu - Yu * Ou,
        wu = bu * Du - Nu * Yu,
        Ju = bu * hu - Yu * cu,
        du = +(qu * Mu - fu * eu + Cu * Gu),
        au = -(lu * Mu - fu * pu + Cu * wu),
        Pu = +(lu * eu - qu * pu + Cu * Ju),
        ou = -(lu * Gu - qu * wu + fu * Ju),
        ku = su * du + Uu * au + Zu * Pu + Xu * ou;
      if (0 === ku) return !1;
      const mu = 1 / ku,
        vu = fu * gu - Du * Cu,
        Ku = qu * gu - hu * Cu,
        Vu = qu * Du - hu * fu,
        ru = lu * gu - Yu * Cu,
        Qu = lu * Du - Yu * fu,
        iu = lu * hu - Yu * qu,
        Wu = fu * Ou - Nu * Cu,
        Su = qu * Ou - cu * Cu,
        Iu = qu * Nu - cu * fu,
        Fu = lu * Ou - bu * Cu,
        Bu = lu * Nu - bu * fu,
        Lu = lu * cu - bu * qu,
        tu = -(Uu * Mu - Zu * eu + Xu * Gu),
        xu = +(su * Mu - Zu * pu + Xu * wu),
        Tu = -(su * eu - Uu * pu + Xu * Ju),
        Hu = +(su * Gu - Uu * wu + Zu * Ju),
        Au = +(Uu * vu - Zu * Ku + Xu * Vu),
        nu = -(su * vu - Zu * ru + Xu * Qu),
        yu = +(su * Ku - Uu * ru + Xu * iu),
        zu = -(su * Vu - Uu * Qu + Zu * iu),
        Ru = -(Uu * Wu - Zu * Su + Xu * Iu),
        uE = +(su * Wu - Zu * Fu + Xu * Bu),
        EE = -(su * Su - Uu * Fu + Xu * Lu),
        jE = +(su * Iu - Uu * Bu + Zu * Lu);
      return Eu[0] = du * mu, Eu[1] = tu * mu, Eu[2] = Au * mu, Eu[3] = Ru * mu, Eu[4] = au * mu, Eu[5] = xu * mu, Eu[6] = nu * mu, Eu[7] = uE * mu, Eu[8] = Pu * mu, Eu[9] = Tu * mu, Eu[10] = yu * mu, Eu[11] = EE * mu, Eu[12] = ou * mu, Eu[13] = Hu * mu, Eu[14] = zu * mu, Eu[15] = jE * mu, !0
    }
    su._UpdateFlagSeed = 0
  },
  37494: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Yu,
      i: () => Ou,
      l: () => eu,
      m: () => Du,
      p: () => bu,
      t: () => cu,
      u: () => Nu
    });
    var su = ju(37496),
      Uu = ju(37498),
      Zu = ju(37504),
      Xu = ju(37506),
      lu = ju(37519),
      qu = ju(37525),
      fu = ju(37532);
    const Cu = uu => parseInt(uu.toString().replace(/\W/g, ""));
    class bu {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = uu, this.y = Eu
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let uu = Cu(this.x);
        return uu = 397 * uu ^ Cu(this.y), uu
      }
      toArray(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return uu[Eu] = this.x, uu[Eu + 1] = this.y, this
      }
      sju(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return bu.FromArrayToRef(uu, Eu, this), this
      }
      Osu() {
        return [this.x, this.y]
      }
      yJ(uu) {
        return this.x = uu.x, this.y = uu.y, this
      }
      T6(uu, Eu) {
        return this.x = uu, this.y = Eu, this
      }
      set(uu, Eu) {
        return this.T6(uu, Eu)
      }
      k_(uu) {
        return this.T6(uu, uu)
      }
      add(uu) {
        return new bu(this.x + uu.x, this.y + uu.y)
      }
      addToRef(uu, Eu) {
        return Eu.x = this.x + uu.x, Eu.y = this.y + uu.y, Eu
      }
      addInPlace(uu) {
        return this.x += uu.x, this.y += uu.y, this
      }
      addInPlaceFromFloats(uu, Eu) {
        return this.x += uu, this.y += Eu, this
      }
      addVector3(uu) {
        return new bu(this.x + uu.x, this.y + uu.y)
      }
      subtract(uu) {
        return new bu(this.x - uu.x, this.y - uu.y)
      }
      subtractToRef(uu, Eu) {
        return Eu.x = this.x - uu.x, Eu.y = this.y - uu.y, Eu
      }
      Qsu(uu) {
        return this.x -= uu.x, this.y -= uu.y, this
      }
      multiplyInPlace(uu) {
        return this.x *= uu.x, this.y *= uu.y, this
      }
      multiply(uu) {
        return new bu(this.x * uu.x, this.y * uu.y)
      }
      multiplyToRef(uu, Eu) {
        return Eu.x = this.x * uu.x, Eu.y = this.y * uu.y, Eu
      }
      multiplyByFloats(uu, Eu) {
        return new bu(this.x * uu, this.y * Eu)
      }
      divide(uu) {
        return new bu(this.x / uu.x, this.y / uu.y)
      }
      divideToRef(uu, Eu) {
        return Eu.x = this.x / uu.x, Eu.y = this.y / uu.y, Eu
      }
      divideInPlace(uu) {
        return this.x = this.x / uu.x, this.y = this.y / uu.y, this
      }
      minimizeInPlace(uu) {
        return this.minimizeInPlaceFromFloats(uu.x, uu.y)
      }
      maximizeInPlace(uu) {
        return this.maximizeInPlaceFromFloats(uu.x, uu.y)
      }
      minimizeInPlaceFromFloats(uu, Eu) {
        return this.x = Math.min(uu, this.x), this.y = Math.min(Eu, this.y), this
      }
      maximizeInPlaceFromFloats(uu, Eu) {
        return this.x = Math.max(uu, this.x), this.y = Math.max(Eu, this.y), this
      }
      subtractFromFloats(uu, Eu) {
        return new bu(this.x - uu, this.y - Eu)
      }
      subtractFromFloatsToRef(uu, Eu, ju) {
        return ju.x = this.x - uu, ju.y = this.y - Eu, ju
      }
      nZ() {
        return new bu(-this.x, -this.y)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this
      }
      negateToRef(uu) {
        return uu.x = -this.x, uu.y = -this.y, uu
      }
      scaleInPlace(uu) {
        return this.x *= uu, this.y *= uu, this
      }
      scale(uu) {
        return new bu(this.x * uu, this.y * uu)
      }
      scaleToRef(uu, Eu) {
        return Eu.x = this.x * uu, Eu.y = this.y * uu, Eu
      }
      scaleAndAddToRef(uu, Eu) {
        return Eu.x += this.x * uu, Eu.y += this.y * uu, Eu
      }
      equals(uu) {
        return uu && this.x === uu.x && this.y === uu.y
      }
      equalsWithEpsilon(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : su.c;
        return uu && (0, lu.WithinEpsilon)(this.x, uu.x, Eu) && (0, lu.WithinEpsilon)(this.y, uu.y, Eu)
      }
      BXu(uu, Eu) {
        return this.x === uu && this.y === Eu
      }
      floor() {
        return new bu(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(uu) {
        return uu.x = Math.floor(this.x), uu.y = Math.floor(this.y), uu
      }
      fract() {
        return new bu(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(uu) {
        return uu.x = this.x - Math.floor(this.x), uu.y = this.y - Math.floor(this.y), uu
      }
      rotate(uu) {
        return this.rotateToRef(uu, new bu)
      }
      rotateToRef(uu, Eu) {
        const ju = Math.cos(uu),
          su = Math.sin(uu);
        return Eu.x = ju * this.x - su * this.y, Eu.y = su * this.x + ju * this.y, Eu
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
      normalizeFromLength(uu) {
        return 0 === uu || 1 === uu ? this : this.scaleInPlace(1 / uu)
      }
      normalizeToNew() {
        const uu = new bu;
        return this.normalizeToRef(uu), uu
      }
      normalizeToRef(uu) {
        const Eu = this.length();
        return 0 === Eu || 1 === Eu ? (uu.x = this.x, uu.y = this.y, uu) : this.scaleToRef(1 / Eu, uu)
      }
      clone() {
        return new bu(this.x, this.y)
      }
      dot(uu) {
        return this.x * uu.x + this.y * uu.y
      }
      static Zero() {
        return new bu(0, 0)
      }
      static One() {
        return new bu(1, 1)
      }
      static Random() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new bu((0, lu.RandomRange)(uu, Eu), (0, lu.RandomRange)(uu, Eu))
      }
      static RandomToRef() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).T6((0, lu.RandomRange)(uu, Eu), (0, lu.RandomRange)(uu, Eu))
      }
      static get ZeroReadOnly() {
        return bu._ZeroReadOnly
      }
      static FromArray(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new bu(uu[Eu], uu[Eu + 1])
      }
      static FromArrayToRef(uu, Eu, ju) {
        return ju.x = uu[Eu], ju.y = uu[Eu + 1], ju
      }
      static FromFloatsToRef(uu, Eu, ju) {
        return ju.T6(uu, Eu), ju
      }
      static CatmullRom(uu, Eu, ju, su, Uu) {
        const Zu = Uu * Uu,
          Xu = Uu * Zu,
          lu = .5 * (2 * Eu.x + (-uu.x + ju.x) * Uu + (2 * uu.x - 5 * Eu.x + 4 * ju.x - su.x) * Zu + (-uu.x + 3 * Eu.x - 3 * ju.x + su.x) * Xu),
          qu = .5 * (2 * Eu.y + (-uu.y + ju.y) * Uu + (2 * uu.y - 5 * Eu.y + 4 * ju.y - su.y) * Zu + (-uu.y + 3 * Eu.y - 3 * ju.y + su.y) * Xu);
        return new bu(lu, qu)
      }
      static ClampToRef(uu, Eu, ju, su) {
        return su.x = (0, lu.Clamp)(uu.x, Eu.x, ju.x), su.y = (0, lu.Clamp)(uu.y, Eu.y, ju.y), su
      }
      static Clamp(uu, Eu, ju) {
        const su = (0, lu.Clamp)(uu.x, Eu.x, ju.x),
          Uu = (0, lu.Clamp)(uu.y, Eu.y, ju.y);
        return new bu(su, Uu)
      }
      static Hermite(uu, Eu, ju, su, Uu) {
        const Zu = Uu * Uu,
          Xu = Uu * Zu,
          lu = 2 * Xu - 3 * Zu + 1,
          qu = -2 * Xu + 3 * Zu,
          fu = Xu - 2 * Zu + Uu,
          Cu = Xu - Zu,
          cu = uu.x * lu + ju.x * qu + Eu.x * fu + su.x * Cu,
          Nu = uu.y * lu + ju.y * qu + Eu.y * fu + su.y * Cu;
        return new bu(cu, Nu)
      }
      static Hermite1stDerivative(uu, Eu, ju, su, Uu) {
        return this.Hermite1stDerivativeToRef(uu, Eu, ju, su, Uu, new bu)
      }
      static Hermite1stDerivativeToRef(uu, Eu, ju, su, Uu, Zu) {
        const Xu = Uu * Uu;
        return Zu.x = 6 * (Xu - Uu) * uu.x + (3 * Xu - 4 * Uu + 1) * Eu.x + 6 * (-Xu + Uu) * ju.x + (3 * Xu - 2 * Uu) * su.x, Zu.y = 6 * (Xu - Uu) * uu.y + (3 * Xu - 4 * Uu + 1) * Eu.y + 6 * (-Xu + Uu) * ju.y + (3 * Xu - 2 * Uu) * su.y, Zu
      }
      static Lerp(uu, Eu, ju) {
        return bu.LerpToRef(uu, Eu, ju, new bu)
      }
      static LerpToRef(uu, Eu, ju, su) {
        return su.x = uu.x + (Eu.x - uu.x) * ju, su.y = uu.y + (Eu.y - uu.y) * ju, su
      }
      static Dot(uu, Eu) {
        return uu.x * Eu.x + uu.y * Eu.y
      }
      static Normalize(uu) {
        return bu.NormalizeToRef(uu, new bu)
      }
      static NormalizeToRef(uu, Eu) {
        return uu.normalizeToRef(Eu), Eu
      }
      static Minimize(uu, Eu) {
        const ju = uu.x < Eu.x ? uu.x : Eu.x,
          su = uu.y < Eu.y ? uu.y : Eu.y;
        return new bu(ju, su)
      }
      static Maximize(uu, Eu) {
        const ju = uu.x > Eu.x ? uu.x : Eu.x,
          su = uu.y > Eu.y ? uu.y : Eu.y;
        return new bu(ju, su)
      }
      static Transform(uu, Eu) {
        return bu.TransformToRef(uu, Eu, new bu)
      }
      static TransformToRef(uu, Eu, ju) {
        const su = Eu.m,
          Uu = uu.x * su[0] + uu.y * su[4] + su[12],
          Zu = uu.x * su[1] + uu.y * su[5] + su[13];
        return ju.x = Uu, ju.y = Zu, ju
      }
      static PointInTriangle(uu, Eu, ju, su) {
        const Uu = .5 * (-ju.y * su.x + Eu.y * (-ju.x + su.x) + Eu.x * (ju.y - su.y) + ju.x * su.y),
          Zu = Uu < 0 ? -1 : 1,
          Xu = (Eu.y * su.x - Eu.x * su.y + (su.y - Eu.y) * uu.x + (Eu.x - su.x) * uu.y) * Zu,
          lu = (Eu.x * ju.y - Eu.y * ju.x + (Eu.y - ju.y) * uu.x + (ju.x - Eu.x) * uu.y) * Zu;
        return Xu > 0 && lu > 0 && Xu + lu < 2 * Uu * Zu
      }
      static Distance(uu, Eu) {
        return Math.sqrt(bu.DistanceSquared(uu, Eu))
      }
      static DistanceSquared(uu, Eu) {
        const ju = uu.x - Eu.x,
          su = uu.y - Eu.y;
        return ju * ju + su * su
      }
      static Center(uu, Eu) {
        return bu.CenterToRef(uu, Eu, new bu)
      }
      static CenterToRef(uu, Eu, ju) {
        return ju.T6((uu.x + Eu.x) / 2, (uu.y + Eu.y) / 2)
      }
      static DistanceOfPointFromSegment(uu, Eu, ju) {
        const su = bu.DistanceSquared(Eu, ju);
        if (0 === su) return bu.Distance(uu, Eu);
        const Uu = ju.subtract(Eu),
          Zu = Math.max(0, Math.min(1, bu.Dot(uu.subtract(Eu), Uu) / su)),
          Xu = Eu.add(Uu.multiplyByFloats(Zu, Zu));
        return bu.Distance(uu, Xu)
      }
    }
    bu._V8PerformanceHack = new bu(.5, .5), bu._ZeroReadOnly = bu.Zero();
    class cu {
      get x() {
        return this._x
      }
      set x(uu) {
        this._x = uu, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(uu) {
        this._y = uu, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(uu) {
        this._z = uu, this._isDirty = !0
      }
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = uu, this._y = Eu, this._z = ju
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "dO"
      }
      getHashCode() {
        let uu = Cu(this._x);
        return uu = 397 * uu ^ Cu(this._y), uu = 397 * uu ^ Cu(this._z), uu
      }
      Osu() {
        return [this._x, this._y, this._z]
      }
      toArray(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return uu[Eu] = this._x, uu[Eu + 1] = this._y, uu[Eu + 2] = this._z, this
      }
      sju(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return cu.FromArrayToRef(uu, Eu, this), this
      }
      toQuaternion() {
        return Ou.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(uu) {
        return this._x += uu._x, this._y += uu._y, this._z += uu._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(uu, Eu, ju) {
        return this._x += uu, this._y += Eu, this._z += ju, this._isDirty = !0, this
      }
      add(uu) {
        return new cu(this._x + uu._x, this._y + uu._y, this._z + uu._z)
      }
      addToRef(uu, Eu) {
        return Eu._x = this._x + uu._x, Eu._y = this._y + uu._y, Eu._z = this._z + uu._z, Eu._isDirty = !0, Eu
      }
      Qsu(uu) {
        return this._x -= uu._x, this._y -= uu._y, this._z -= uu._z, this._isDirty = !0, this
      }
      subtract(uu) {
        return new cu(this._x - uu._x, this._y - uu._y, this._z - uu._z)
      }
      subtractToRef(uu, Eu) {
        return this.subtractFromFloatsToRef(uu._x, uu._y, uu._z, Eu)
      }
      subtractFromFloats(uu, Eu, ju) {
        return new cu(this._x - uu, this._y - Eu, this._z - ju)
      }
      subtractFromFloatsToRef(uu, Eu, ju, su) {
        return su._x = this._x - uu, su._y = this._y - Eu, su._z = this._z - ju, su._isDirty = !0, su
      }
      nZ() {
        return new cu(-this._x, -this._y, -this._z)
      }
      negateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      negateToRef(uu) {
        return uu._x = -1 * this._x, uu._y = -1 * this._y, uu._z = -1 * this._z, uu._isDirty = !0, uu
      }
      scaleInPlace(uu) {
        return this._x *= uu, this._y *= uu, this._z *= uu, this._isDirty = !0, this
      }
      scale(uu) {
        return new cu(this._x * uu, this._y * uu, this._z * uu)
      }
      scaleToRef(uu, Eu) {
        return Eu._x = this._x * uu, Eu._y = this._y * uu, Eu._z = this._z * uu, Eu._isDirty = !0, Eu
      }
      getNormalToRef(uu) {
        const Eu = this.length();
        let ju = Math.acos(this._y / Eu);
        const su = Math.atan2(this._z, this._x);
        ju > Math.PI / 2 ? ju -= Math.PI / 2 : ju += Math.PI / 2;
        const Uu = Eu * Math.sin(ju) * Math.cos(su),
          Zu = Eu * Math.cos(ju),
          Xu = Eu * Math.sin(ju) * Math.sin(su);
        return uu.set(Uu, Zu, Xu), uu
      }
      applyRotationQuaternionToRef(uu, Eu) {
        const ju = this._x,
          su = this._y,
          Uu = this._z,
          Zu = uu._x,
          Xu = uu._y,
          lu = uu._z,
          qu = uu._w,
          fu = 2 * (Xu * Uu - lu * su),
          Cu = 2 * (lu * ju - Zu * Uu),
          bu = 2 * (Zu * su - Xu * ju);
        return Eu._x = ju + qu * fu + Xu * bu - lu * Cu, Eu._y = su + qu * Cu + lu * fu - Zu * bu, Eu._z = Uu + qu * bu + Zu * Cu - Xu * fu, Eu._isDirty = !0, Eu
      }
      applyRotationQuaternionInPlace(uu) {
        return this.applyRotationQuaternionToRef(uu, this)
      }
      applyRotationQuaternion(uu) {
        return this.applyRotationQuaternionToRef(uu, new cu)
      }
      scaleAndAddToRef(uu, Eu) {
        return Eu._x += this._x * uu, Eu._y += this._y * uu, Eu._z += this._z * uu, Eu._isDirty = !0, Eu
      }
      projectOnPlane(uu, Eu) {
        return this.projectOnPlaneToRef(uu, Eu, new cu)
      }
      projectOnPlaneToRef(uu, Eu, ju) {
        const su = uu.normal,
          Uu = uu.d,
          Zu = hu.dO[0];
        this.subtractToRef(Eu, Zu), Zu.normalize();
        const Xu = cu.Dot(Zu, su);
        if (Math.abs(Xu) < 1e-10) ju.k_(1 / 0);
        else {
          const uu = -(cu.Dot(Eu, su) + Uu) / Xu,
            lu = Zu.scaleInPlace(uu);
          Eu.addToRef(lu, ju)
        }
        return ju
      }
      equals(uu) {
        return uu && this._x === uu._x && this._y === uu._y && this._z === uu._z
      }
      equalsWithEpsilon(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : su.c;
        return uu && (0, lu.WithinEpsilon)(this._x, uu._x, Eu) && (0, lu.WithinEpsilon)(this._y, uu._y, Eu) && (0, lu.WithinEpsilon)(this._z, uu._z, Eu)
      }
      BXu(uu, Eu, ju) {
        return this._x === uu && this._y === Eu && this._z === ju
      }
      multiplyInPlace(uu) {
        return this._x *= uu._x, this._y *= uu._y, this._z *= uu._z, this._isDirty = !0, this
      }
      multiply(uu) {
        return this.multiplyByFloats(uu._x, uu._y, uu._z)
      }
      multiplyToRef(uu, Eu) {
        return Eu._x = this._x * uu._x, Eu._y = this._y * uu._y, Eu._z = this._z * uu._z, Eu._isDirty = !0, Eu
      }
      multiplyByFloats(uu, Eu, ju) {
        return new cu(this._x * uu, this._y * Eu, this._z * ju)
      }
      divide(uu) {
        return new cu(this._x / uu._x, this._y / uu._y, this._z / uu._z)
      }
      divideToRef(uu, Eu) {
        return Eu._x = this._x / uu._x, Eu._y = this._y / uu._y, Eu._z = this._z / uu._z, Eu._isDirty = !0, Eu
      }
      divideInPlace(uu) {
        return this._x = this._x / uu._x, this._y = this._y / uu._y, this._z = this._z / uu._z, this._isDirty = !0, this
      }
      minimizeInPlace(uu) {
        return this.minimizeInPlaceFromFloats(uu._x, uu._y, uu._z)
      }
      maximizeInPlace(uu) {
        return this.maximizeInPlaceFromFloats(uu._x, uu._y, uu._z)
      }
      minimizeInPlaceFromFloats(uu, Eu, ju) {
        return uu < this._x && (this.x = uu), Eu < this._y && (this.y = Eu), ju < this._z && (this.z = ju), this
      }
      maximizeInPlaceFromFloats(uu, Eu, ju) {
        return uu > this._x && (this.x = uu), Eu > this._y && (this.y = Eu), ju > this._z && (this.z = ju), this
      }
      isNonUniformWithinEpsilon(uu) {
        const Eu = Math.abs(this._x),
          ju = Math.abs(this._y);
        if (!(0, lu.WithinEpsilon)(Eu, ju, uu)) return !0;
        const su = Math.abs(this._z);
        return !(0, lu.WithinEpsilon)(Eu, su, uu) || !(0, lu.WithinEpsilon)(ju, su, uu)
      }
      get isNonUniform() {
        const uu = Math.abs(this._x);
        if (uu !== Math.abs(this._y)) return !0;
        return uu !== Math.abs(this._z)
      }
      floorToRef(uu) {
        return uu._x = Math.floor(this._x), uu._y = Math.floor(this._y), uu._z = Math.floor(this._z), uu._isDirty = !0, uu
      }
      floor() {
        return new cu(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(uu) {
        return uu._x = this._x - Math.floor(this._x), uu._y = this._y - Math.floor(this._y), uu._z = this._z - Math.floor(this._z), uu._isDirty = !0, uu
      }
      fract() {
        return new cu(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
      reorderInPlace(uu) {
        if ("xyz" === (uu = uu.toLowerCase())) return this;
        const Eu = hu.dO[0].yJ(this);
        return this.x = Eu[uu[0]], this.y = Eu[uu[1]], this.z = Eu[uu[2]], this
      }
      rotateByQuaternionToRef(uu, Eu) {
        return uu.toRotationMatrix(hu.Matrix[0]), cu.TransformCoordinatesToRef(this, hu.Matrix[0], Eu), Eu
      }
      rotateByQuaternionAroundPointToRef(uu, Eu, ju) {
        return this.subtractToRef(Eu, hu.dO[0]), hu.dO[0].rotateByQuaternionToRef(uu, hu.dO[0]), Eu.addToRef(hu.dO[0], ju), ju
      }
      cross(uu) {
        return cu.CrossToRef(this, uu, new cu)
      }
      normalizeFromLength(uu) {
        return 0 === uu || 1 === uu ? this : this.scaleInPlace(1 / uu)
      }
      normalizeToNew() {
        return this.normalizeToRef(new cu)
      }
      normalizeToRef(uu) {
        const Eu = this.length();
        return 0 === Eu || 1 === Eu ? (uu._x = this._x, uu._y = this._y, uu._z = this._z, uu._isDirty = !0, uu) : this.scaleToRef(1 / Eu, uu)
      }
      clone() {
        return new cu(this._x, this._y, this._z)
      }
      yJ(uu) {
        return this.T6(uu._x, uu._y, uu._z)
      }
      T6(uu, Eu, ju) {
        return this._x = uu, this._y = Eu, this._z = ju, this._isDirty = !0, this
      }
      set(uu, Eu, ju) {
        return this.T6(uu, Eu, ju)
      }
      k_(uu) {
        return this._x = this._y = this._z = uu, this._isDirty = !0, this
      }
      static GetClipFactor(uu, Eu, ju, su) {
        const Uu = cu.Dot(uu, ju);
        return (Uu - su) / (Uu - cu.Dot(Eu, ju))
      }
      static GetAngleBetweenVectors(uu, Eu, ju) {
        const su = uu.normalizeToRef(hu.dO[1]),
          Uu = Eu.normalizeToRef(hu.dO[2]);
        let Zu = cu.Dot(su, Uu);
        Zu = (0, lu.Clamp)(Zu, -1, 1);
        const Xu = Math.acos(Zu),
          qu = hu.dO[3];
        return cu.CrossToRef(su, Uu, qu), cu.Dot(qu, ju) > 0 ? isNaN(Xu) ? 0 : Xu : isNaN(Xu) ? -Math.PI : -Math.acos(Zu)
      }
      static GetAngleBetweenVectorsOnPlane(uu, Eu, ju) {
        hu.dO[0].yJ(uu);
        const su = hu.dO[0];
        hu.dO[1].yJ(Eu);
        const Uu = hu.dO[1];
        hu.dO[2].yJ(ju);
        const Zu = hu.dO[2],
          Xu = hu.dO[3],
          qu = hu.dO[4];
        su.normalize(), Uu.normalize(), Zu.normalize(), cu.CrossToRef(Zu, su, Xu), cu.CrossToRef(Xu, Zu, qu);
        const fu = Math.atan2(cu.Dot(Uu, Xu), cu.Dot(Uu, qu));
        return (0, lu.NormalizeRadians)(fu)
      }
      static PitchYawRollToMoveBetweenPointsToRef(uu, Eu, ju) {
        const su = Du.dO[0];
        return Eu.subtractToRef(uu, su), ju._y = Math.atan2(su.x, su.z) || 0, ju._x = Math.atan2(Math.sqrt(su.x ** 2 + su.z ** 2), su.y) || 0, ju._z = 0, ju._isDirty = !0, ju
      }
      static PitchYawRollToMoveBetweenPoints(uu, Eu) {
        const ju = cu.Zero();
        return cu.PitchYawRollToMoveBetweenPointsToRef(uu, Eu, ju)
      }
      static SlerpToRef(uu, Eu, ju, Uu) {
        ju = (0, lu.Clamp)(ju, 0, 1);
        const Zu = hu.dO[0],
          Xu = hu.dO[1];
        Zu.yJ(uu);
        const qu = Zu.length();
        Zu.normalizeFromLength(qu), Xu.yJ(Eu);
        const fu = Xu.length();
        Xu.normalizeFromLength(fu);
        const Cu = cu.Dot(Zu, Xu);
        let bu, Nu;
        if (Cu < 1 - su.c) {
          const uu = Math.acos(Cu),
            Eu = 1 / Math.sin(uu);
          bu = Math.sin((1 - ju) * uu) * Eu, Nu = Math.sin(ju * uu) * Eu
        } else bu = 1 - ju, Nu = ju;
        return Zu.scaleInPlace(bu), Xu.scaleInPlace(Nu), Uu.yJ(Zu).addInPlace(Xu), Uu.scaleInPlace((0, lu.Lerp)(qu, fu, ju)), Uu
      }
      static SmoothToRef(uu, Eu, ju, su, Uu) {
        return cu.SlerpToRef(uu, Eu, 0 === su ? 1 : ju / su, Uu), Uu
      }
      static FromArray(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new cu(uu[Eu], uu[Eu + 1], uu[Eu + 2])
      }
      static FromFloatArray(uu, Eu) {
        return cu.FromArray(uu, Eu)
      }
      static FromArrayToRef(uu, Eu, ju) {
        return ju._x = uu[Eu], ju._y = uu[Eu + 1], ju._z = uu[Eu + 2], ju._isDirty = !0, ju
      }
      static FromFloatArrayToRef(uu, Eu, ju) {
        return cu.FromArrayToRef(uu, Eu, ju)
      }
      static FromFloatsToRef(uu, Eu, ju, su) {
        return su.T6(uu, Eu, ju), su
      }
      static Zero() {
        return new cu(0, 0, 0)
      }
      static One() {
        return new cu(1, 1, 1)
      }
      static Up() {
        return new cu(0, 1, 0)
      }
      static get UpReadOnly() {
        return cu._UpReadOnly
      }
      static get DownReadOnly() {
        return cu._DownReadOnly
      }
      static get RightReadOnly() {
        return cu._RightReadOnly
      }
      static get LeftReadOnly() {
        return cu._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return cu._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return cu._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return cu._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return cu._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return cu._ZeroReadOnly
      }
      static get OneReadOnly() {
        return cu._OneReadOnly
      }
      static Down() {
        return new cu(0, -1, 0)
      }
      static Forward() {
        return new cu(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new cu(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new cu(1, 0, 0)
      }
      static Left() {
        return new cu(-1, 0, 0)
      }
      static Random() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new cu((0, lu.RandomRange)(uu, Eu), (0, lu.RandomRange)(uu, Eu), (0, lu.RandomRange)(uu, Eu))
      }
      static RandomToRef() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).T6((0, lu.RandomRange)(uu, Eu), (0, lu.RandomRange)(uu, Eu), (0, lu.RandomRange)(uu, Eu))
      }
      static TransformCoordinates(uu, Eu) {
        const ju = cu.Zero();
        return cu.TransformCoordinatesToRef(uu, Eu, ju), ju
      }
      static TransformCoordinatesToRef(uu, Eu, ju) {
        return cu.TransformCoordinatesFromFloatsToRef(uu._x, uu._y, uu._z, Eu, ju), ju
      }
      static TransformCoordinatesFromFloatsToRef(uu, Eu, ju, su, Uu) {
        const Zu = su.m,
          Xu = uu * Zu[0] + Eu * Zu[4] + ju * Zu[8] + Zu[12],
          lu = uu * Zu[1] + Eu * Zu[5] + ju * Zu[9] + Zu[13],
          qu = uu * Zu[2] + Eu * Zu[6] + ju * Zu[10] + Zu[14],
          fu = 1 / (uu * Zu[3] + Eu * Zu[7] + ju * Zu[11] + Zu[15]);
        return Uu._x = Xu * fu, Uu._y = lu * fu, Uu._z = qu * fu, Uu._isDirty = !0, Uu
      }
      static TransformNormal(uu, Eu) {
        const ju = cu.Zero();
        return cu.TransformNormalToRef(uu, Eu, ju), ju
      }
      static TransformNormalToRef(uu, Eu, ju) {
        return this.TransformNormalFromFloatsToRef(uu._x, uu._y, uu._z, Eu, ju), ju
      }
      static TransformNormalFromFloatsToRef(uu, Eu, ju, su, Uu) {
        const Zu = su.m;
        return Uu._x = uu * Zu[0] + Eu * Zu[4] + ju * Zu[8], Uu._y = uu * Zu[1] + Eu * Zu[5] + ju * Zu[9], Uu._z = uu * Zu[2] + Eu * Zu[6] + ju * Zu[10], Uu._isDirty = !0, Uu
      }
      static CatmullRom(uu, Eu, ju, su, Uu) {
        const Zu = Uu * Uu,
          Xu = Uu * Zu,
          lu = .5 * (2 * Eu._x + (-uu._x + ju._x) * Uu + (2 * uu._x - 5 * Eu._x + 4 * ju._x - su._x) * Zu + (-uu._x + 3 * Eu._x - 3 * ju._x + su._x) * Xu),
          qu = .5 * (2 * Eu._y + (-uu._y + ju._y) * Uu + (2 * uu._y - 5 * Eu._y + 4 * ju._y - su._y) * Zu + (-uu._y + 3 * Eu._y - 3 * ju._y + su._y) * Xu),
          fu = .5 * (2 * Eu._z + (-uu._z + ju._z) * Uu + (2 * uu._z - 5 * Eu._z + 4 * ju._z - su._z) * Zu + (-uu._z + 3 * Eu._z - 3 * ju._z + su._z) * Xu);
        return new cu(lu, qu, fu)
      }
      static Clamp(uu, Eu, ju) {
        const su = new cu;
        return cu.ClampToRef(uu, Eu, ju, su), su
      }
      static ClampToRef(uu, Eu, ju, su) {
        let Uu = uu._x;
        Uu = Uu > ju._x ? ju._x : Uu, Uu = Uu < Eu._x ? Eu._x : Uu;
        let Zu = uu._y;
        Zu = Zu > ju._y ? ju._y : Zu, Zu = Zu < Eu._y ? Eu._y : Zu;
        let Xu = uu._z;
        return Xu = Xu > ju._z ? ju._z : Xu, Xu = Xu < Eu._z ? Eu._z : Xu, su.T6(Uu, Zu, Xu), su
      }
      static CheckExtends(uu, Eu, ju) {
        Eu.minimizeInPlace(uu), ju.maximizeInPlace(uu)
      }
      static Hermite(uu, Eu, ju, su, Uu) {
        const Zu = Uu * Uu,
          Xu = Uu * Zu,
          lu = 2 * Xu - 3 * Zu + 1,
          qu = -2 * Xu + 3 * Zu,
          fu = Xu - 2 * Zu + Uu,
          Cu = Xu - Zu,
          bu = uu._x * lu + ju._x * qu + Eu._x * fu + su._x * Cu,
          Nu = uu._y * lu + ju._y * qu + Eu._y * fu + su._y * Cu,
          Ou = uu._z * lu + ju._z * qu + Eu._z * fu + su._z * Cu;
        return new cu(bu, Nu, Ou)
      }
      static Hermite1stDerivative(uu, Eu, ju, su, Uu) {
        const Zu = new cu;
        return this.Hermite1stDerivativeToRef(uu, Eu, ju, su, Uu, Zu), Zu
      }
      static Hermite1stDerivativeToRef(uu, Eu, ju, su, Uu, Zu) {
        const Xu = Uu * Uu;
        return Zu._x = 6 * (Xu - Uu) * uu._x + (3 * Xu - 4 * Uu + 1) * Eu._x + 6 * (-Xu + Uu) * ju._x + (3 * Xu - 2 * Uu) * su._x, Zu._y = 6 * (Xu - Uu) * uu._y + (3 * Xu - 4 * Uu + 1) * Eu._y + 6 * (-Xu + Uu) * ju._y + (3 * Xu - 2 * Uu) * su._y, Zu._z = 6 * (Xu - Uu) * uu._z + (3 * Xu - 4 * Uu + 1) * Eu._z + 6 * (-Xu + Uu) * ju._z + (3 * Xu - 2 * Uu) * su._z, Zu._isDirty = !0, Zu
      }
      static Lerp(uu, Eu, ju) {
        const su = new cu(0, 0, 0);
        return cu.LerpToRef(uu, Eu, ju, su), su
      }
      static LerpToRef(uu, Eu, ju, su) {
        return su._x = uu._x + (Eu._x - uu._x) * ju, su._y = uu._y + (Eu._y - uu._y) * ju, su._z = uu._z + (Eu._z - uu._z) * ju, su._isDirty = !0, su
      }
      static Dot(uu, Eu) {
        return uu._x * Eu._x + uu._y * Eu._y + uu._z * Eu._z
      }
      dot(uu) {
        return this._x * uu._x + this._y * uu._y + this._z * uu._z
      }
      static Cross(uu, Eu) {
        const ju = new cu;
        return cu.CrossToRef(uu, Eu, ju), ju
      }
      static CrossToRef(uu, Eu, ju) {
        const su = uu._y * Eu._z - uu._z * Eu._y,
          Uu = uu._z * Eu._x - uu._x * Eu._z,
          Zu = uu._x * Eu._y - uu._y * Eu._x;
        return ju.T6(su, Uu, Zu), ju
      }
      static Normalize(uu) {
        const Eu = cu.Zero();
        return cu.NormalizeToRef(uu, Eu), Eu
      }
      static NormalizeToRef(uu, Eu) {
        return uu.normalizeToRef(Eu), Eu
      }
      static Project(uu, Eu, ju, su) {
        const Uu = new cu;
        return cu.ProjectToRef(uu, Eu, ju, su, Uu), Uu
      }
      static ProjectToRef(uu, Eu, ju, su, Uu) {
        const Zu = su.width,
          lu = su.height,
          qu = su.x,
          fu = su.y,
          Cu = hu.Matrix[1],
          bu = Xu.b.LastCreatedEngine?.isNDCHalfZRange,
          Nu = bu ? 1 : .5,
          Ou = bu ? 0 : .5;
        Yu.FromValuesToRef(Zu / 2, 0, 0, 0, 0, -lu / 2, 0, 0, 0, 0, Nu, 0, qu + Zu / 2, lu / 2 + fu, Ou, 1, Cu);
        const Du = hu.Matrix[0];
        return Eu.multiplyToRef(ju, Du), Du.multiplyToRef(Cu, Du), cu.TransformCoordinatesToRef(uu, Du, Uu), Uu
      }
      static Reflect(uu, Eu) {
        return this.ReflectToRef(uu, Eu, new cu)
      }
      static ReflectToRef(uu, Eu, ju) {
        const su = Du.dO[0];
        return su.yJ(Eu).scaleInPlace(2 * cu.Dot(uu, Eu)), ju.yJ(uu).Qsu(su)
      }
      static UnprojectFromTransform(uu, Eu, ju, su, Uu) {
        return this.Unproject(uu, Eu, ju, su, Uu, Yu.IdentityReadOnly)
      }
      static Unproject(uu, Eu, ju, su, Uu, Zu) {
        const Xu = new cu;
        return cu.UnprojectToRef(uu, Eu, ju, su, Uu, Zu, Xu), Xu
      }
      static UnprojectToRef(uu, Eu, ju, su, Uu, Zu, Xu) {
        return cu.UnprojectFloatsToRef(uu._x, uu._y, uu._z, Eu, ju, su, Uu, Zu, Xu), Xu
      }
      static UnprojectFloatsToRef(uu, Eu, ju, su, Uu, Zu, lu, qu, fu) {
        const Cu = hu.Matrix[0];
        Zu.multiplyToRef(lu, Cu), Cu.multiplyToRef(qu, Cu), Cu.invert();
        const bu = hu.dO[0];
        return bu.x = uu / su * 2 - 1, bu.y = -(Eu / Uu * 2 - 1), Xu.b.LastCreatedEngine?.isNDCHalfZRange ? bu.z = ju : bu.z = 2 * ju - 1, cu.TransformCoordinatesToRef(bu, Cu, fu), fu
      }
      static Minimize(uu, Eu) {
        const ju = new cu;
        return ju.yJ(uu), ju.minimizeInPlace(Eu), ju
      }
      static Maximize(uu, Eu) {
        const ju = new cu;
        return ju.yJ(uu), ju.maximizeInPlace(Eu), ju
      }
      static Distance(uu, Eu) {
        return Math.sqrt(cu.DistanceSquared(uu, Eu))
      }
      static DistanceSquared(uu, Eu) {
        const ju = uu._x - Eu._x,
          su = uu._y - Eu._y,
          Uu = uu._z - Eu._z;
        return ju * ju + su * su + Uu * Uu
      }
      static ProjectOnTriangleToRef(uu, Eu, ju, Uu, Zu) {
        const Xu = hu.dO[0],
          qu = hu.dO[1],
          fu = hu.dO[2],
          Cu = hu.dO[3],
          bu = hu.dO[4];
        ju.subtractToRef(Eu, Xu), Uu.subtractToRef(Eu, qu), Uu.subtractToRef(ju, fu);
        const Nu = Xu.length(),
          Ou = qu.length(),
          Yu = fu.length();
        if (Nu < su.c || Ou < su.c || Yu < su.c) return Zu.yJ(Eu), cu.Distance(uu, Eu);
        uu.subtractToRef(Eu, bu), cu.CrossToRef(Xu, qu, Cu);
        const Du = Cu.length();
        if (Du < su.c) return Zu.yJ(Eu), cu.Distance(uu, Eu);
        Cu.normalizeFromLength(Du);
        let gu = bu.length();
        if (gu < su.c) return Zu.yJ(Eu), 0;
        bu.normalizeFromLength(gu);
        const Mu = cu.Dot(Cu, bu),
          eu = hu.dO[5],
          Gu = hu.dO[6];
        eu.yJ(Cu).scaleInPlace(-gu * Mu), Gu.yJ(uu).addInPlace(eu);
        const pu = hu.dO[4],
          wu = hu.dO[5],
          Ju = hu.dO[7],
          du = hu.dO[8];
        pu.yJ(Xu).scaleInPlace(1 / Nu), du.yJ(qu).scaleInPlace(1 / Ou), pu.addInPlace(du).scaleInPlace(-1), wu.yJ(Xu).scaleInPlace(-1 / Nu), du.yJ(fu).scaleInPlace(1 / Yu), wu.addInPlace(du).scaleInPlace(-1), Ju.yJ(fu).scaleInPlace(-1 / Yu), du.yJ(qu).scaleInPlace(-1 / Ou), Ju.addInPlace(du).scaleInPlace(-1);
        const au = hu.dO[9];
        let Pu;
        au.yJ(Gu).Qsu(Eu), cu.CrossToRef(pu, au, du), Pu = cu.Dot(du, Cu);
        const ou = Pu;
        au.yJ(Gu).Qsu(ju), cu.CrossToRef(wu, au, du), Pu = cu.Dot(du, Cu);
        const ku = Pu;
        au.yJ(Gu).Qsu(Uu), cu.CrossToRef(Ju, au, du), Pu = cu.Dot(du, Cu);
        const mu = Pu,
          vu = hu.dO[10];
        let Ku, Vu;
        ou > 0 && ku < 0 ? (vu.yJ(Xu), Ku = Eu, Vu = ju) : ku > 0 && mu < 0 ? (vu.yJ(fu), Ku = ju, Vu = Uu) : (vu.yJ(qu).scaleInPlace(-1), Ku = Uu, Vu = Eu);
        const ru = hu.dO[9],
          Qu = hu.dO[4];
        Ku.subtractToRef(Gu, du), Vu.subtractToRef(Gu, ru), cu.CrossToRef(du, ru, Qu);
        if (!(cu.Dot(Qu, Cu) < 0)) return Zu.yJ(Gu), Math.abs(gu * Mu);
        const iu = hu.dO[5];
        cu.CrossToRef(vu, Qu, iu), iu.normalize();
        const Wu = hu.dO[9];
        Wu.yJ(Ku).Qsu(Gu);
        const Su = Wu.length();
        if (Su < su.c) return Zu.yJ(Ku), cu.Distance(uu, Ku);
        Wu.normalizeFromLength(Su);
        const Iu = cu.Dot(iu, Wu),
          Fu = hu.dO[7];
        Fu.yJ(Gu).addInPlace(iu.scaleInPlace(Su * Iu)), du.yJ(Fu).Qsu(Ku), gu = vu.length(), vu.normalizeFromLength(gu);
        let Bu = cu.Dot(du, vu) / Math.max(gu, su.c);
        return Bu = (0, lu.Clamp)(Bu, 0, 1), Fu.yJ(Ku).addInPlace(vu.scaleInPlace(Bu * gu)), Zu.yJ(Fu), cu.Distance(uu, Fu)
      }
      static Center(uu, Eu) {
        return cu.CenterToRef(uu, Eu, cu.Zero())
      }
      static CenterToRef(uu, Eu, ju) {
        return ju.T6((uu._x + Eu._x) / 2, (uu._y + Eu._y) / 2, (uu._z + Eu._z) / 2)
      }
      static RotationFromAxis(uu, Eu, ju) {
        const su = new cu;
        return cu.RotationFromAxisToRef(uu, Eu, ju, su), su
      }
      static RotationFromAxisToRef(uu, Eu, ju, su) {
        const Uu = hu.Quaternion[0];
        return Ou.RotationQuaternionFromAxisToRef(uu, Eu, ju, Uu), Uu.toEulerAnglesToRef(su), su
      }
    }
    cu._V8PerformanceHack = new cu(.5, .5, .5), cu._UpReadOnly = cu.Up(), cu._DownReadOnly = cu.Down(), cu._LeftHandedForwardReadOnly = cu.Forward(!1), cu._RightHandedForwardReadOnly = cu.Forward(!0), cu._LeftHandedBackwardReadOnly = cu.Backward(!1), cu._RightHandedBackwardReadOnly = cu.Backward(!0), cu._RightReadOnly = cu.Right(), cu._LeftReadOnly = cu.Left(), cu._ZeroReadOnly = cu.Zero(), cu._OneReadOnly = cu.One();
    class Nu {
      get x() {
        return this._x
      }
      set x(uu) {
        this._x = uu, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(uu) {
        this._y = uu, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(uu) {
        this._z = uu, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(uu) {
        this._w = uu, this._isDirty = !0
      }
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = uu, this._y = Eu, this._z = ju, this._w = su
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let uu = Cu(this._x);
        return uu = 397 * uu ^ Cu(this._y), uu = 397 * uu ^ Cu(this._z), uu = 397 * uu ^ Cu(this._w), uu
      }
      Osu() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(uu, Eu) {
        return void 0 === Eu && (Eu = 0), uu[Eu] = this._x, uu[Eu + 1] = this._y, uu[Eu + 2] = this._z, uu[Eu + 3] = this._w, this
      }
      sju(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Nu.FromArrayToRef(uu, Eu, this), this
      }
      addInPlace(uu) {
        return this.x += uu._x, this.y += uu._y, this.z += uu._z, this.w += uu._w, this
      }
      addInPlaceFromFloats(uu, Eu, ju, su) {
        return this.x += uu, this.y += Eu, this.z += ju, this.w += su, this
      }
      add(uu) {
        return new Nu(this._x + uu.x, this._y + uu.y, this._z + uu.z, this._w + uu.w)
      }
      addToRef(uu, Eu) {
        return Eu.x = this._x + uu.x, Eu.y = this._y + uu.y, Eu.z = this._z + uu.z, Eu.w = this._w + uu.w, Eu
      }
      Qsu(uu) {
        return this.x -= uu.x, this.y -= uu.y, this.z -= uu.z, this.w -= uu.w, this
      }
      subtract(uu) {
        return new Nu(this._x - uu.x, this._y - uu.y, this._z - uu.z, this._w - uu.w)
      }
      subtractToRef(uu, Eu) {
        return Eu.x = this._x - uu.x, Eu.y = this._y - uu.y, Eu.z = this._z - uu.z, Eu.w = this._w - uu.w, Eu
      }
      subtractFromFloats(uu, Eu, ju, su) {
        return new Nu(this._x - uu, this._y - Eu, this._z - ju, this._w - su)
      }
      subtractFromFloatsToRef(uu, Eu, ju, su, Uu) {
        return Uu.x = this._x - uu, Uu.y = this._y - Eu, Uu.z = this._z - ju, Uu.w = this._w - su, Uu
      }
      nZ() {
        return new Nu(-this._x, -this._y, -this._z, -this._w)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this.w *= -1, this
      }
      negateToRef(uu) {
        return uu.x = -this._x, uu.y = -this._y, uu.z = -this._z, uu.w = -this._w, uu
      }
      scaleInPlace(uu) {
        return this.x *= uu, this.y *= uu, this.z *= uu, this.w *= uu, this
      }
      scale(uu) {
        return new Nu(this._x * uu, this._y * uu, this._z * uu, this._w * uu)
      }
      scaleToRef(uu, Eu) {
        return Eu.x = this._x * uu, Eu.y = this._y * uu, Eu.z = this._z * uu, Eu.w = this._w * uu, Eu
      }
      scaleAndAddToRef(uu, Eu) {
        return Eu.x += this._x * uu, Eu.y += this._y * uu, Eu.z += this._z * uu, Eu.w += this._w * uu, Eu
      }
      equals(uu) {
        return uu && this._x === uu.x && this._y === uu.y && this._z === uu.z && this._w === uu.w
      }
      equalsWithEpsilon(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : su.c;
        return uu && (0, lu.WithinEpsilon)(this._x, uu.x, Eu) && (0, lu.WithinEpsilon)(this._y, uu.y, Eu) && (0, lu.WithinEpsilon)(this._z, uu.z, Eu) && (0, lu.WithinEpsilon)(this._w, uu.w, Eu)
      }
      BXu(uu, Eu, ju, su) {
        return this._x === uu && this._y === Eu && this._z === ju && this._w === su
      }
      multiplyInPlace(uu) {
        return this.x *= uu.x, this.y *= uu.y, this.z *= uu.z, this.w *= uu.w, this
      }
      multiply(uu) {
        return new Nu(this._x * uu.x, this._y * uu.y, this._z * uu.z, this._w * uu.w)
      }
      multiplyToRef(uu, Eu) {
        return Eu.x = this._x * uu.x, Eu.y = this._y * uu.y, Eu.z = this._z * uu.z, Eu.w = this._w * uu.w, Eu
      }
      multiplyByFloats(uu, Eu, ju, su) {
        return new Nu(this._x * uu, this._y * Eu, this._z * ju, this._w * su)
      }
      divide(uu) {
        return new Nu(this._x / uu.x, this._y / uu.y, this._z / uu.z, this._w / uu.w)
      }
      divideToRef(uu, Eu) {
        return Eu.x = this._x / uu.x, Eu.y = this._y / uu.y, Eu.z = this._z / uu.z, Eu.w = this._w / uu.w, Eu
      }
      divideInPlace(uu) {
        return this.divideToRef(uu, this)
      }
      minimizeInPlace(uu) {
        return uu.x < this._x && (this.x = uu.x), uu.y < this._y && (this.y = uu.y), uu.z < this._z && (this.z = uu.z), uu.w < this._w && (this.w = uu.w), this
      }
      maximizeInPlace(uu) {
        return uu.x > this._x && (this.x = uu.x), uu.y > this._y && (this.y = uu.y), uu.z > this._z && (this.z = uu.z), uu.w > this._w && (this.w = uu.w), this
      }
      minimizeInPlaceFromFloats(uu, Eu, ju, su) {
        return this.x = Math.min(uu, this._x), this.y = Math.min(Eu, this._y), this.z = Math.min(ju, this._z), this.w = Math.min(su, this._w), this
      }
      maximizeInPlaceFromFloats(uu, Eu, ju, su) {
        return this.x = Math.max(uu, this._x), this.y = Math.max(Eu, this._y), this.z = Math.max(ju, this._z), this.w = Math.max(su, this._w), this
      }
      floorToRef(uu) {
        return uu.x = Math.floor(this._x), uu.y = Math.floor(this._y), uu.z = Math.floor(this._z), uu.w = Math.floor(this._w), uu
      }
      floor() {
        return new Nu(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(uu) {
        return uu.x = this._x - Math.floor(this._x), uu.y = this._y - Math.floor(this._y), uu.z = this._z - Math.floor(this._z), uu.w = this._w - Math.floor(this._w), uu
      }
      fract() {
        return new Nu(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
      normalizeFromLength(uu) {
        return 0 === uu || 1 === uu ? this : this.scaleInPlace(1 / uu)
      }
      normalizeToNew() {
        return this.normalizeToRef(new Nu)
      }
      normalizeToRef(uu) {
        const Eu = this.length();
        return 0 === Eu || 1 === Eu ? (uu.x = this._x, uu.y = this._y, uu.z = this._z, uu.w = this._w, uu) : this.scaleToRef(1 / Eu, uu)
      }
      toVector3() {
        return new cu(this._x, this._y, this._z)
      }
      clone() {
        return new Nu(this._x, this._y, this._z, this._w)
      }
      yJ(uu) {
        return this.x = uu.x, this.y = uu.y, this.z = uu.z, this.w = uu.w, this
      }
      T6(uu, Eu, ju, su) {
        return this.x = uu, this.y = Eu, this.z = ju, this.w = su, this
      }
      set(uu, Eu, ju, su) {
        return this.T6(uu, Eu, ju, su)
      }
      k_(uu) {
        return this.x = this.y = this.z = this.w = uu, this
      }
      dot(uu) {
        return this._x * uu.x + this._y * uu.y + this._z * uu.z + this._w * uu.w
      }
      static FromArray(uu, Eu) {
        return Eu || (Eu = 0), new Nu(uu[Eu], uu[Eu + 1], uu[Eu + 2], uu[Eu + 3])
      }
      static FromArrayToRef(uu, Eu, ju) {
        return ju.x = uu[Eu], ju.y = uu[Eu + 1], ju.z = uu[Eu + 2], ju.w = uu[Eu + 3], ju
      }
      static FromFloatArrayToRef(uu, Eu, ju) {
        return Nu.FromArrayToRef(uu, Eu, ju), ju
      }
      static FromFloatsToRef(uu, Eu, ju, su, Uu) {
        return Uu.x = uu, Uu.y = Eu, Uu.z = ju, Uu.w = su, Uu
      }
      static Zero() {
        return new Nu(0, 0, 0, 0)
      }
      static One() {
        return new Nu(1, 1, 1, 1)
      }
      static Random() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Nu((0, lu.RandomRange)(uu, Eu), (0, lu.RandomRange)(uu, Eu), (0, lu.RandomRange)(uu, Eu), (0, lu.RandomRange)(uu, Eu))
      }
      static RandomToRef() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ju = arguments.length > 2 ? arguments[2] : void 0;
        return ju.x = (0, lu.RandomRange)(uu, Eu), ju.y = (0, lu.RandomRange)(uu, Eu), ju.z = (0, lu.RandomRange)(uu, Eu), ju.w = (0, lu.RandomRange)(uu, Eu), ju
      }
      static Clamp(uu, Eu, ju) {
        return Nu.ClampToRef(uu, Eu, ju, new Nu)
      }
      static ClampToRef(uu, Eu, ju, su) {
        return su.x = (0, lu.Clamp)(uu.x, Eu.x, ju.x), su.y = (0, lu.Clamp)(uu.y, Eu.y, ju.y), su.z = (0, lu.Clamp)(uu.z, Eu.z, ju.z), su.w = (0, lu.Clamp)(uu.w, Eu.w, ju.w), su
      }
      static CheckExtends(uu, Eu, ju) {
        Eu.minimizeInPlace(uu), ju.maximizeInPlace(uu)
      }
      static get ZeroReadOnly() {
        return Nu._ZeroReadOnly
      }
      static Normalize(uu) {
        return Nu.NormalizeToRef(uu, new Nu)
      }
      static NormalizeToRef(uu, Eu) {
        return uu.normalizeToRef(Eu), Eu
      }
      static Minimize(uu, Eu) {
        const ju = new Nu;
        return ju.yJ(uu), ju.minimizeInPlace(Eu), ju
      }
      static Maximize(uu, Eu) {
        const ju = new Nu;
        return ju.yJ(uu), ju.maximizeInPlace(Eu), ju
      }
      static Distance(uu, Eu) {
        return Math.sqrt(Nu.DistanceSquared(uu, Eu))
      }
      static DistanceSquared(uu, Eu) {
        const ju = uu.x - Eu.x,
          su = uu.y - Eu.y,
          Uu = uu.z - Eu.z,
          Zu = uu.w - Eu.w;
        return ju * ju + su * su + Uu * Uu + Zu * Zu
      }
      static Center(uu, Eu) {
        return Nu.CenterToRef(uu, Eu, new Nu)
      }
      static CenterToRef(uu, Eu, ju) {
        return ju.x = (uu.x + Eu.x) / 2, ju.y = (uu.y + Eu.y) / 2, ju.z = (uu.z + Eu.z) / 2, ju.w = (uu.w + Eu.w) / 2, ju
      }
      static TransformCoordinates(uu, Eu) {
        return Nu.TransformCoordinatesToRef(uu, Eu, new Nu)
      }
      static TransformCoordinatesToRef(uu, Eu, ju) {
        return Nu.TransformCoordinatesFromFloatsToRef(uu._x, uu._y, uu._z, Eu, ju), ju
      }
      static TransformCoordinatesFromFloatsToRef(uu, Eu, ju, su, Uu) {
        const Zu = su.m,
          Xu = uu * Zu[0] + Eu * Zu[4] + ju * Zu[8] + Zu[12],
          lu = uu * Zu[1] + Eu * Zu[5] + ju * Zu[9] + Zu[13],
          qu = uu * Zu[2] + Eu * Zu[6] + ju * Zu[10] + Zu[14],
          fu = uu * Zu[3] + Eu * Zu[7] + ju * Zu[11] + Zu[15];
        return Uu.x = Xu, Uu.y = lu, Uu.z = qu, Uu.w = fu, Uu
      }
      static TransformNormal(uu, Eu) {
        return Nu.TransformNormalToRef(uu, Eu, new Nu)
      }
      static TransformNormalToRef(uu, Eu, ju) {
        const su = Eu.m,
          Uu = uu.x * su[0] + uu.y * su[4] + uu.z * su[8],
          Zu = uu.x * su[1] + uu.y * su[5] + uu.z * su[9],
          Xu = uu.x * su[2] + uu.y * su[6] + uu.z * su[10];
        return ju.x = Uu, ju.y = Zu, ju.z = Xu, ju.w = uu.w, ju
      }
      static TransformNormalFromFloatsToRef(uu, Eu, ju, su, Uu, Zu) {
        const Xu = Uu.m;
        return Zu.x = uu * Xu[0] + Eu * Xu[4] + ju * Xu[8], Zu.y = uu * Xu[1] + Eu * Xu[5] + ju * Xu[9], Zu.z = uu * Xu[2] + Eu * Xu[6] + ju * Xu[10], Zu.w = su, Zu
      }
      static FromVector3(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Nu(uu._x, uu._y, uu._z, Eu)
      }
      static Dot(uu, Eu) {
        return uu.x * Eu.x + uu.y * Eu.y + uu.z * Eu.z + uu.w * Eu.w
      }
    }
    Nu._V8PerformanceHack = new Nu(.5, .5, .5, .5), Nu._ZeroReadOnly = Nu.Zero();
    class Ou {
      get x() {
        return this._x
      }
      set x(uu) {
        this._x = uu, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(uu) {
        this._y = uu, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(uu) {
        this._z = uu, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(uu) {
        this._w = uu, this._isDirty = !0
      }
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = uu, this._y = Eu, this._z = ju, this._w = su
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let uu = Cu(this._x);
        return uu = 397 * uu ^ Cu(this._y), uu = 397 * uu ^ Cu(this._z), uu = 397 * uu ^ Cu(this._w), uu
      }
      Osu() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return uu[Eu] = this._x, uu[Eu + 1] = this._y, uu[Eu + 2] = this._z, uu[Eu + 3] = this._w, this
      }
      sju(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Ou.FromArrayToRef(uu, Eu, this)
      }
      equals(uu) {
        return uu && this._x === uu._x && this._y === uu._y && this._z === uu._z && this._w === uu._w
      }
      equalsWithEpsilon(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : su.c;
        return uu && (0, lu.WithinEpsilon)(this._x, uu._x, Eu) && (0, lu.WithinEpsilon)(this._y, uu._y, Eu) && (0, lu.WithinEpsilon)(this._z, uu._z, Eu) && (0, lu.WithinEpsilon)(this._w, uu._w, Eu)
      }
      isApprox(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : su.c;
        return uu && ((0, lu.WithinEpsilon)(this._x, uu._x, Eu) && (0, lu.WithinEpsilon)(this._y, uu._y, Eu) && (0, lu.WithinEpsilon)(this._z, uu._z, Eu) && (0, lu.WithinEpsilon)(this._w, uu._w, Eu) || (0, lu.WithinEpsilon)(this._x, -uu._x, Eu) && (0, lu.WithinEpsilon)(this._y, -uu._y, Eu) && (0, lu.WithinEpsilon)(this._z, -uu._z, Eu) && (0, lu.WithinEpsilon)(this._w, -uu._w, Eu))
      }
      clone() {
        return new Ou(this._x, this._y, this._z, this._w)
      }
      yJ(uu) {
        return this._x = uu._x, this._y = uu._y, this._z = uu._z, this._w = uu._w, this._isDirty = !0, this
      }
      T6(uu, Eu, ju, su) {
        return this._x = uu, this._y = Eu, this._z = ju, this._w = su, this._isDirty = !0, this
      }
      set(uu, Eu, ju, su) {
        return this.T6(uu, Eu, ju, su)
      }
      k_(uu) {
        return this.T6(uu, uu, uu, uu)
      }
      add(uu) {
        return new Ou(this._x + uu._x, this._y + uu._y, this._z + uu._z, this._w + uu._w)
      }
      addInPlace(uu) {
        return this._x += uu._x, this._y += uu._y, this._z += uu._z, this._w += uu._w, this._isDirty = !0, this
      }
      addToRef(uu, Eu) {
        return Eu._x = this._x + uu._x, Eu._y = this._y + uu._y, Eu._z = this._z + uu._z, Eu._w = this._w + uu._w, Eu._isDirty = !0, Eu
      }
      addInPlaceFromFloats(uu, Eu, ju, su) {
        return this._x += uu, this._y += Eu, this._z += ju, this._w += su, this._isDirty = !0, this
      }
      subtractToRef(uu, Eu) {
        return Eu._x = this._x - uu._x, Eu._y = this._y - uu._y, Eu._z = this._z - uu._z, Eu._w = this._w - uu._w, Eu._isDirty = !0, Eu
      }
      subtractFromFloats(uu, Eu, ju, su) {
        return this.subtractFromFloatsToRef(uu, Eu, ju, su, new Ou)
      }
      subtractFromFloatsToRef(uu, Eu, ju, su, Uu) {
        return Uu._x = this._x - uu, Uu._y = this._y - Eu, Uu._z = this._z - ju, Uu._w = this._w - su, Uu._isDirty = !0, Uu
      }
      subtract(uu) {
        return new Ou(this._x - uu._x, this._y - uu._y, this._z - uu._z, this._w - uu._w)
      }
      Qsu(uu) {
        return this._x -= uu._x, this._y -= uu._y, this._z -= uu._z, this._w -= uu._w, this._isDirty = !0, this
      }
      scale(uu) {
        return new Ou(this._x * uu, this._y * uu, this._z * uu, this._w * uu)
      }
      scaleToRef(uu, Eu) {
        return Eu._x = this._x * uu, Eu._y = this._y * uu, Eu._z = this._z * uu, Eu._w = this._w * uu, Eu._isDirty = !0, Eu
      }
      scaleInPlace(uu) {
        return this._x *= uu, this._y *= uu, this._z *= uu, this._w *= uu, this._isDirty = !0, this
      }
      scaleAndAddToRef(uu, Eu) {
        return Eu._x += this._x * uu, Eu._y += this._y * uu, Eu._z += this._z * uu, Eu._w += this._w * uu, Eu._isDirty = !0, Eu
      }
      multiply(uu) {
        const Eu = new Ou(0, 0, 0, 1);
        return this.multiplyToRef(uu, Eu), Eu
      }
      multiplyToRef(uu, Eu) {
        const ju = this._x * uu._w + this._y * uu._z - this._z * uu._y + this._w * uu._x,
          su = -this._x * uu._z + this._y * uu._w + this._z * uu._x + this._w * uu._y,
          Uu = this._x * uu._y - this._y * uu._x + this._z * uu._w + this._w * uu._z,
          Zu = -this._x * uu._x - this._y * uu._y - this._z * uu._z + this._w * uu._w;
        return Eu.T6(ju, su, Uu, Zu), Eu
      }
      multiplyInPlace(uu) {
        return this.multiplyToRef(uu, this)
      }
      multiplyByFloats(uu, Eu, ju, su) {
        return this._x *= uu, this._y *= Eu, this._z *= ju, this._w *= su, this._isDirty = !0, this
      }
      divide(uu) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(uu, Eu) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideInPlace(uu) {
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
      nZ() {
        return this.negateToRef(new Ou)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(uu) {
        return uu._x = -this._x, uu._y = -this._y, uu._z = -this._z, uu._w = -this._w, uu._isDirty = !0, uu
      }
      BXu(uu, Eu, ju, su) {
        return this._x === uu && this._y === Eu && this._z === ju && this._w === su
      }
      floorToRef(uu) {
        throw new ReferenceError("Can not floor a quaternion")
      }
      floor() {
        throw new ReferenceError("Can not floor a quaternion")
      }
      fractToRef(uu) {
        throw new ReferenceError("Can not fract a quaternion")
      }
      fract() {
        throw new ReferenceError("Can not fract a quaternion")
      }
      conjugateToRef(uu) {
        return uu.T6(-this._x, -this._y, -this._z, this._w), uu
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new Ou(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const uu = this.conjugate(),
          Eu = this.lengthSquared();
        return 0 == Eu || 1 == Eu || uu.scaleInPlace(1 / Eu), uu
      }
      invertInPlace() {
        this.conjugateInPlace();
        const uu = this.lengthSquared();
        return 0 == uu || 1 == uu || this.scaleInPlace(1 / uu), this
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
      normalizeFromLength(uu) {
        return 0 === uu || 1 === uu ? this : this.scaleInPlace(1 / uu)
      }
      normalizeToNew() {
        const uu = new Ou(0, 0, 0, 1);
        return this.normalizeToRef(uu), uu
      }
      normalizeToRef(uu) {
        const Eu = this.length();
        return 0 === Eu || 1 === Eu ? uu.T6(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / Eu, uu)
      }
      toEulerAngles() {
        const uu = cu.Zero();
        return this.toEulerAnglesToRef(uu), uu
      }
      toEulerAnglesToRef(uu) {
        const Eu = this._z,
          ju = this._x,
          su = this._y,
          Uu = this._w,
          Zu = su * Eu - ju * Uu,
          Xu = .4999999;
        if (Zu < -Xu) uu._y = 2 * Math.atan2(su, Uu), uu._x = Math.PI / 2, uu._z = 0, uu._isDirty = !0;
        else if (Zu > Xu) uu._y = 2 * Math.atan2(su, Uu), uu._x = -Math.PI / 2, uu._z = 0, uu._isDirty = !0;
        else {
          const Xu = Uu * Uu,
            lu = Eu * Eu,
            qu = ju * ju,
            fu = su * su;
          uu._z = Math.atan2(2 * (ju * su + Eu * Uu), -lu - qu + fu + Xu), uu._x = Math.asin(-2 * Zu), uu._y = Math.atan2(2 * (Eu * ju + su * Uu), lu - qu - fu + Xu), uu._isDirty = !0
        }
        return uu
      }
      toAlphaBetaGammaToRef(uu) {
        const Eu = this._z,
          ju = this._x,
          su = this._y,
          Uu = this._w,
          Zu = Math.sqrt(ju * ju + su * su),
          Xu = Math.sqrt(Eu * Eu + Uu * Uu),
          lu = 2 * Math.atan2(Zu, Xu),
          qu = 2 * Math.atan2(Eu, Uu),
          fu = 2 * Math.atan2(su, ju),
          Cu = (qu + fu) / 2,
          bu = (qu - fu) / 2;
        return uu.set(bu, lu, Cu), uu
      }
      toRotationMatrix(uu) {
        return Yu.FromQuaternionToRef(this, uu), uu
      }
      fromRotationMatrix(uu) {
        return Ou.FromRotationMatrixToRef(uu, this), this
      }
      dot(uu) {
        return this._x * uu._x + this._y * uu._y + this._z * uu._z + this._w * uu._w
      }
      toAxisAngle() {
        const uu = cu.Zero();
        return {
          axis: uu,
          angle: this.toAxisAngleToRef(uu)
        }
      }
      toAxisAngleToRef(uu) {
        let Eu;
        const ju = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          su = this._w;
        return ju > 0 ? (Eu = 2 * Math.atan2(ju, su), uu.set(this._x / ju, this._y / ju, this._z / ju)) : (Eu = 0, uu.set(1, 0, 0)), Eu
      }
      static FromRotationMatrix(uu) {
        const Eu = new Ou;
        return Ou.FromRotationMatrixToRef(uu, Eu), Eu
      }
      static FromRotationMatrixToRef(uu, Eu) {
        const ju = uu.m,
          su = ju[0],
          Uu = ju[4],
          Zu = ju[8],
          Xu = ju[1],
          lu = ju[5],
          qu = ju[9],
          fu = ju[2],
          Cu = ju[6],
          bu = ju[10],
          cu = su + lu + bu;
        let Nu;
        return cu > 0 ? (Nu = .5 / Math.sqrt(cu + 1), Eu._w = .25 / Nu, Eu._x = (Cu - qu) * Nu, Eu._y = (Zu - fu) * Nu, Eu._z = (Xu - Uu) * Nu, Eu._isDirty = !0) : su > lu && su > bu ? (Nu = 2 * Math.sqrt(1 + su - lu - bu), Eu._w = (Cu - qu) / Nu, Eu._x = .25 * Nu, Eu._y = (Uu + Xu) / Nu, Eu._z = (Zu + fu) / Nu, Eu._isDirty = !0) : lu > bu ? (Nu = 2 * Math.sqrt(1 + lu - su - bu), Eu._w = (Zu - fu) / Nu, Eu._x = (Uu + Xu) / Nu, Eu._y = .25 * Nu, Eu._z = (qu + Cu) / Nu, Eu._isDirty = !0) : (Nu = 2 * Math.sqrt(1 + bu - su - lu), Eu._w = (Xu - Uu) / Nu, Eu._x = (Zu + fu) / Nu, Eu._y = (qu + Cu) / Nu, Eu._z = .25 * Nu, Eu._isDirty = !0), Eu
      }
      static Dot(uu, Eu) {
        return uu._x * Eu._x + uu._y * Eu._y + uu._z * Eu._z + uu._w * Eu._w
      }
      static AreClose(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const su = Ou.Dot(uu, Eu);
        return 1 - su * su <= ju
      }
      static SmoothToRef(uu, Eu, ju, su, Uu) {
        let Zu = 0 === su ? 1 : ju / su;
        return Zu = (0, lu.Clamp)(Zu, 0, 1), Ou.SlerpToRef(uu, Eu, Zu, Uu), Uu
      }
      static Zero() {
        return new Ou(0, 0, 0, 0)
      }
      static Inverse(uu) {
        return new Ou(-uu._x, -uu._y, -uu._z, uu._w)
      }
      static InverseToRef(uu, Eu) {
        return Eu.set(-uu._x, -uu._y, -uu._z, uu._w), Eu
      }
      static Identity() {
        return new Ou(0, 0, 0, 1)
      }
      static IsIdentity(uu) {
        return uu && 0 === uu._x && 0 === uu._y && 0 === uu._z && 1 === uu._w
      }
      static RotationAxis(uu, Eu) {
        return Ou.RotationAxisToRef(uu, Eu, new Ou)
      }
      static RotationAxisToRef(uu, Eu, ju) {
        ju._w = Math.cos(Eu / 2);
        const su = Math.sin(Eu / 2) / uu.length();
        return ju._x = uu._x * su, ju._y = uu._y * su, ju._z = uu._z * su, ju._isDirty = !0, ju
      }
      static FromArray(uu, Eu) {
        return Eu || (Eu = 0), new Ou(uu[Eu], uu[Eu + 1], uu[Eu + 2], uu[Eu + 3])
      }
      static FromArrayToRef(uu, Eu, ju) {
        return ju._x = uu[Eu], ju._y = uu[Eu + 1], ju._z = uu[Eu + 2], ju._w = uu[Eu + 3], ju._isDirty = !0, ju
      }
      static FromFloatsToRef(uu, Eu, ju, su, Uu) {
        return Uu.T6(uu, Eu, ju, su), Uu
      }
      static FromEulerAngles(uu, Eu, ju) {
        const su = new Ou;
        return Ou.RotationYawPitchRollToRef(Eu, uu, ju, su), su
      }
      static FromEulerAnglesToRef(uu, Eu, ju, su) {
        return Ou.RotationYawPitchRollToRef(Eu, uu, ju, su), su
      }
      static FromEulerVector(uu) {
        const Eu = new Ou;
        return Ou.RotationYawPitchRollToRef(uu._y, uu._x, uu._z, Eu), Eu
      }
      static FromEulerVectorToRef(uu, Eu) {
        return Ou.RotationYawPitchRollToRef(uu._y, uu._x, uu._z, Eu), Eu
      }
      static FromUnitVectorsToRef(uu, Eu, ju) {
        let Uu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : su.c;
        const Zu = cu.Dot(uu, Eu) + 1;
        return Zu < Uu ? Math.abs(uu.x) > Math.abs(uu.z) ? ju.set(-uu.y, uu.x, 0, 0) : ju.set(0, -uu.z, uu.y, 0) : (cu.CrossToRef(uu, Eu, Du.dO[0]), ju.set(Du.dO[0].x, Du.dO[0].y, Du.dO[0].z, Zu)), ju.normalize()
      }
      static RotationYawPitchRoll(uu, Eu, ju) {
        const su = new Ou;
        return Ou.RotationYawPitchRollToRef(uu, Eu, ju, su), su
      }
      static RotationYawPitchRollToRef(uu, Eu, ju, su) {
        const Uu = .5 * ju,
          Zu = .5 * Eu,
          Xu = .5 * uu,
          lu = Math.sin(Uu),
          qu = Math.cos(Uu),
          fu = Math.sin(Zu),
          Cu = Math.cos(Zu),
          bu = Math.sin(Xu),
          cu = Math.cos(Xu);
        return su._x = cu * fu * qu + bu * Cu * lu, su._y = bu * Cu * qu - cu * fu * lu, su._z = cu * Cu * lu - bu * fu * qu, su._w = cu * Cu * qu + bu * fu * lu, su._isDirty = !0, su
      }
      static RotationAlphaBetaGamma(uu, Eu, ju) {
        const su = new Ou;
        return Ou.RotationAlphaBetaGammaToRef(uu, Eu, ju, su), su
      }
      static RotationAlphaBetaGammaToRef(uu, Eu, ju, su) {
        const Uu = .5 * (ju + uu),
          Zu = .5 * (ju - uu),
          Xu = .5 * Eu;
        return su._x = Math.cos(Zu) * Math.sin(Xu), su._y = Math.sin(Zu) * Math.sin(Xu), su._z = Math.sin(Uu) * Math.cos(Xu), su._w = Math.cos(Uu) * Math.cos(Xu), su._isDirty = !0, su
      }
      static RotationQuaternionFromAxis(uu, Eu, ju) {
        const su = new Ou(0, 0, 0, 0);
        return Ou.RotationQuaternionFromAxisToRef(uu, Eu, ju, su), su
      }
      static RotationQuaternionFromAxisToRef(uu, Eu, ju, su) {
        const Uu = hu.Matrix[0];
        return uu = uu.normalizeToRef(hu.dO[0]), Eu = Eu.normalizeToRef(hu.dO[1]), ju = ju.normalizeToRef(hu.dO[2]), Yu.FromXYZAxesToRef(uu, Eu, ju, Uu), Ou.FromRotationMatrixToRef(Uu, su), su
      }
      static FromLookDirectionLH(uu, Eu) {
        const ju = new Ou;
        return Ou.FromLookDirectionLHToRef(uu, Eu, ju), ju
      }
      static FromLookDirectionLHToRef(uu, Eu, ju) {
        const su = hu.Matrix[0];
        return Yu.LookDirectionLHToRef(uu, Eu, su), Ou.FromRotationMatrixToRef(su, ju), ju
      }
      static FromLookDirectionRH(uu, Eu) {
        const ju = new Ou;
        return Ou.FromLookDirectionRHToRef(uu, Eu, ju), ju
      }
      static FromLookDirectionRHToRef(uu, Eu, ju) {
        const su = hu.Matrix[0];
        return Yu.LookDirectionRHToRef(uu, Eu, su), Ou.FromRotationMatrixToRef(su, ju)
      }
      static Slerp(uu, Eu, ju) {
        const su = Ou.Identity();
        return Ou.SlerpToRef(uu, Eu, ju, su), su
      }
      static SlerpToRef(uu, Eu, ju, su) {
        let Uu, Zu, Xu = uu._x * Eu._x + uu._y * Eu._y + uu._z * Eu._z + uu._w * Eu._w,
          lu = !1;
        if (Xu < 0 && (lu = !0, Xu = -Xu), Xu > .999999) Zu = 1 - ju, Uu = lu ? -ju : ju;
        else {
          const uu = Math.acos(Xu),
            Eu = 1 / Math.sin(uu);
          Zu = Math.sin((1 - ju) * uu) * Eu, Uu = lu ? -Math.sin(ju * uu) * Eu : Math.sin(ju * uu) * Eu
        }
        return su._x = Zu * uu._x + Uu * Eu._x, su._y = Zu * uu._y + Uu * Eu._y, su._z = Zu * uu._z + Uu * Eu._z, su._w = Zu * uu._w + Uu * Eu._w, su._isDirty = !0, su
      }
      static Hermite(uu, Eu, ju, su, Uu) {
        const Zu = Uu * Uu,
          Xu = Uu * Zu,
          lu = 2 * Xu - 3 * Zu + 1,
          qu = -2 * Xu + 3 * Zu,
          fu = Xu - 2 * Zu + Uu,
          Cu = Xu - Zu,
          bu = uu._x * lu + ju._x * qu + Eu._x * fu + su._x * Cu,
          cu = uu._y * lu + ju._y * qu + Eu._y * fu + su._y * Cu,
          Nu = uu._z * lu + ju._z * qu + Eu._z * fu + su._z * Cu,
          Yu = uu._w * lu + ju._w * qu + Eu._w * fu + su._w * Cu;
        return new Ou(bu, cu, Nu, Yu)
      }
      static Hermite1stDerivative(uu, Eu, ju, su, Uu) {
        const Zu = new Ou;
        return this.Hermite1stDerivativeToRef(uu, Eu, ju, su, Uu, Zu), Zu
      }
      static Hermite1stDerivativeToRef(uu, Eu, ju, su, Uu, Zu) {
        const Xu = Uu * Uu;
        return Zu._x = 6 * (Xu - Uu) * uu._x + (3 * Xu - 4 * Uu + 1) * Eu._x + 6 * (-Xu + Uu) * ju._x + (3 * Xu - 2 * Uu) * su._x, Zu._y = 6 * (Xu - Uu) * uu._y + (3 * Xu - 4 * Uu + 1) * Eu._y + 6 * (-Xu + Uu) * ju._y + (3 * Xu - 2 * Uu) * su._y, Zu._z = 6 * (Xu - Uu) * uu._z + (3 * Xu - 4 * Uu + 1) * Eu._z + 6 * (-Xu + Uu) * ju._z + (3 * Xu - 2 * Uu) * su._z, Zu._w = 6 * (Xu - Uu) * uu._w + (3 * Xu - 4 * Uu + 1) * Eu._w + 6 * (-Xu + Uu) * ju._w + (3 * Xu - 2 * Uu) * su._w, Zu._isDirty = !0, Zu
      }
      static Normalize(uu) {
        const Eu = Ou.Zero();
        return Ou.NormalizeToRef(uu, Eu), Eu
      }
      static NormalizeToRef(uu, Eu) {
        return uu.normalizeToRef(Eu), Eu
      }
      static Clamp(uu, Eu, ju) {
        const su = new Ou;
        return Ou.ClampToRef(uu, Eu, ju, su), su
      }
      static ClampToRef(uu, Eu, ju, su) {
        return su.T6((0, lu.Clamp)(uu.x, Eu.x, ju.x), (0, lu.Clamp)(uu.y, Eu.y, ju.y), (0, lu.Clamp)(uu.z, Eu.z, ju.z), (0, lu.Clamp)(uu.w, Eu.w, ju.w))
      }
      static Random() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Ou((0, lu.RandomRange)(uu, Eu), (0, lu.RandomRange)(uu, Eu), (0, lu.RandomRange)(uu, Eu), (0, lu.RandomRange)(uu, Eu))
      }
      static RandomToRef() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).T6((0, lu.RandomRange)(uu, Eu), (0, lu.RandomRange)(uu, Eu), (0, lu.RandomRange)(uu, Eu), (0, lu.RandomRange)(uu, Eu))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(uu, Eu) {
        return Math.sqrt(Ou.DistanceSquared(uu, Eu))
      }
      static DistanceSquared(uu, Eu) {
        const ju = uu.x - Eu.x,
          su = uu.y - Eu.y,
          Uu = uu.z - Eu.z,
          Zu = uu.w - Eu.w;
        return ju * ju + su * su + Uu * Uu + Zu * Zu
      }
      static Center(uu, Eu) {
        return Ou.CenterToRef(uu, Eu, Ou.Zero())
      }
      static CenterToRef(uu, Eu, ju) {
        return ju.T6((uu.x + Eu.x) / 2, (uu.y + Eu.y) / 2, (uu.z + Eu.z) / 2, (uu.w + Eu.w) / 2)
      }
    }
    Ou._V8PerformanceHack = new Ou(.5, .5, .5, .5);
    class Yu {
      static get Use64Bits() {
        return Zu.c.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = qu.k._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          su = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = uu, this._isIdentity3x2 = uu || ju, this._isIdentityDirty = !this._isIdentity && Eu, this._isIdentity3x2Dirty = !this._isIdentity3x2 && su
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, Zu.c.MatrixTrackPrecisionChange && Zu.c.MatrixTrackedMatrices.push(this), this._m = new Zu.c.MatrixCurrentType(16), this.markAsUpdated()
      }
      isIdentity() {
        if (this._isIdentityDirty) {
          this._isIdentityDirty = !1;
          const uu = this._m;
          this._isIdentity = 1 === uu[0] && 0 === uu[1] && 0 === uu[2] && 0 === uu[3] && 0 === uu[4] && 1 === uu[5] && 0 === uu[6] && 0 === uu[7] && 0 === uu[8] && 0 === uu[9] && 1 === uu[10] && 0 === uu[11] && 0 === uu[12] && 0 === uu[13] && 0 === uu[14] && 1 === uu[15]
        }
        return this._isIdentity
      }
      isIdentityAs3x2() {
        return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] || 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 !== this._m[9] || 0 !== this._m[10] || 0 !== this._m[11] || 0 !== this._m[12] || 0 !== this._m[13] || 0 !== this._m[14] ? this._isIdentity3x2 = !1 : this._isIdentity3x2 = !0), this._isIdentity3x2
      }
      determinant() {
        if (!0 === this._isIdentity) return 1;
        const uu = this._m,
          Eu = uu[0],
          ju = uu[1],
          su = uu[2],
          Uu = uu[3],
          Zu = uu[4],
          Xu = uu[5],
          lu = uu[6],
          qu = uu[7],
          fu = uu[8],
          Cu = uu[9],
          bu = uu[10],
          cu = uu[11],
          Nu = uu[12],
          Ou = uu[13],
          Yu = uu[14],
          hu = uu[15],
          Du = bu * hu - Yu * cu,
          gu = Cu * hu - Ou * cu,
          Mu = Cu * Yu - Ou * bu,
          eu = fu * hu - Nu * cu,
          Gu = fu * Yu - bu * Nu,
          pu = fu * Ou - Nu * Cu;
        return Eu * +(Xu * Du - lu * gu + qu * Mu) + ju * -(Zu * Du - lu * eu + qu * Gu) + su * +(Zu * gu - Xu * eu + qu * pu) + Uu * -(Zu * Mu - Xu * Gu + lu * pu)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!uu) return this._m;
        const ju = this._m;
        for (let su = 0; su < 16; su++) uu[Eu + su] = ju[su];
        return this
      }
      Osu() {
        return this._m
      }
      sju(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Yu.FromArrayToRef(uu, Eu, this)
      }
      T6() {
        for (var uu = arguments.length, Eu = new Array(uu), ju = 0; ju < uu; ju++) Eu[ju] = arguments[ju];
        return Yu.FromArrayToRef(Eu, 0, this)
      }
      set() {
        const uu = this._m;
        for (let Eu = 0; Eu < 16; Eu++) uu[Eu] = Eu < 0 || arguments.length <= Eu ? void 0 : arguments[Eu];
        return this.markAsUpdated(), this
      }
      k_(uu) {
        const Eu = this._m;
        for (let ju = 0; ju < 16; ju++) Eu[ju] = uu;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return Yu.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(uu) {
        const Eu = new Yu;
        return this.addToRef(uu, Eu), Eu
      }
      addToRef(uu, Eu) {
        const ju = this._m,
          su = Eu._m,
          Uu = uu.m;
        for (let Zu = 0; Zu < 16; Zu++) su[Zu] = ju[Zu] + Uu[Zu];
        return Eu.markAsUpdated(), Eu
      }
      addToSelf(uu) {
        const Eu = this._m,
          ju = uu.m;
        return Eu[0] += ju[0], Eu[1] += ju[1], Eu[2] += ju[2], Eu[3] += ju[3], Eu[4] += ju[4], Eu[5] += ju[5], Eu[6] += ju[6], Eu[7] += ju[7], Eu[8] += ju[8], Eu[9] += ju[9], Eu[10] += ju[10], Eu[11] += ju[11], Eu[12] += ju[12], Eu[13] += ju[13], Eu[14] += ju[14], Eu[15] += ju[15], this.markAsUpdated(), this
      }
      addInPlace(uu) {
        const Eu = this._m,
          ju = uu.m;
        for (let su = 0; su < 16; su++) Eu[su] += ju[su];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const uu = this._m;
        for (let Eu = 0; Eu < 16; Eu++) uu[Eu] += Eu < 0 || arguments.length <= Eu ? void 0 : arguments[Eu];
        return this.markAsUpdated(), this
      }
      subtract(uu) {
        const Eu = this._m,
          ju = uu.m;
        for (let su = 0; su < 16; su++) Eu[su] -= ju[su];
        return this.markAsUpdated(), this
      }
      subtractToRef(uu, Eu) {
        const ju = this._m,
          su = uu.m,
          Uu = Eu._m;
        for (let Zu = 0; Zu < 16; Zu++) Uu[Zu] = ju[Zu] - su[Zu];
        return Eu.markAsUpdated(), Eu
      }
      Qsu(uu) {
        const Eu = this._m,
          ju = uu.m;
        for (let su = 0; su < 16; su++) Eu[su] -= ju[su];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var uu = arguments.length, Eu = new Array(uu), ju = 0; ju < uu; ju++) Eu[ju] = arguments[ju];
        return this.subtractFromFloatsToRef(...Eu, new Yu)
      }
      subtractFromFloatsToRef() {
        for (var uu = arguments.length, Eu = new Array(uu), ju = 0; ju < uu; ju++) Eu[ju] = arguments[ju];
        const su = Eu.pop(),
          Uu = this._m,
          Zu = su._m,
          Xu = Eu;
        for (let lu = 0; lu < 16; lu++) Zu[lu] = Uu[lu] - Xu[lu];
        return su.markAsUpdated(), su
      }
      invertToRef(uu) {
        return !0 === this._isIdentity ? (Yu.IdentityToRef(uu), uu) : ((0, qu.e)(this, uu.Osu()) ? uu.markAsUpdated() : uu.yJ(this), uu)
      }
      addAtIndex(uu, Eu) {
        return this._m[uu] += Eu, this.markAsUpdated(), this
      }
      multiplyAtIndex(uu, Eu) {
        return this._m[uu] *= Eu, this.markAsUpdated(), this
      }
      setTranslationFromFloats(uu, Eu, ju) {
        return this._m[12] = uu, this._m[13] = Eu, this._m[14] = ju, this.markAsUpdated(), this
      }
      addTranslationFromFloats(uu, Eu, ju) {
        return this._m[12] += uu, this._m[13] += Eu, this._m[14] += ju, this.markAsUpdated(), this
      }
      setTranslation(uu) {
        return this.setTranslationFromFloats(uu._x, uu._y, uu._z)
      }
      getTranslation() {
        return new cu(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(uu) {
        return uu.x = this._m[12], uu.y = this._m[13], uu.z = this._m[14], uu
      }
      removeRotationAndScaling() {
        const uu = this.m;
        return Yu.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, uu[12], uu[13], uu[14], uu[15], this), this._updateIdentityStatus(0 === uu[12] && 0 === uu[13] && 0 === uu[14] && 1 === uu[15]), this
      }
      yJ(uu) {
        uu.copyToArray(this._m);
        const Eu = uu;
        return this.updateFlag = Eu.updateFlag, this._updateIdentityStatus(Eu._isIdentity, Eu._isIdentityDirty, Eu._isIdentity3x2, Eu._isIdentity3x2Dirty), this
      }
      copyToArray(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, qu.b)(this, uu, Eu), this
      }
      multiply(uu) {
        const Eu = new Yu;
        return this.multiplyToRef(uu, Eu), Eu
      }
      multiplyInPlace(uu) {
        const Eu = this._m,
          ju = uu.m;
        for (let su = 0; su < 16; su++) Eu[su] *= ju[su];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const uu = this._m;
        for (let Eu = 0; Eu < 16; Eu++) uu[Eu] *= Eu < 0 || arguments.length <= Eu ? void 0 : arguments[Eu];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var uu = arguments.length, Eu = new Array(uu), ju = 0; ju < uu; ju++) Eu[ju] = arguments[ju];
        const su = Eu.pop(),
          Uu = this._m,
          Zu = su._m,
          Xu = Eu;
        for (let lu = 0; lu < 16; lu++) Zu[lu] = Uu[lu] * Xu[lu];
        return su.markAsUpdated(), su
      }
      multiplyToRef(uu, Eu) {
        return this._isIdentity ? (Eu.yJ(uu), Eu) : uu._isIdentity ? (Eu.yJ(this), Eu) : (this.multiplyToArray(uu, Eu._m, 0), Eu.markAsUpdated(), Eu)
      }
      multiplyToArray(uu, Eu, ju) {
        return (0, qu.o)(this, uu, Eu, ju), this
      }
      divide(uu) {
        return this.divideToRef(uu, new Yu)
      }
      divideToRef(uu, Eu) {
        const ju = this._m,
          su = uu.m,
          Uu = Eu._m;
        for (let Zu = 0; Zu < 16; Zu++) Uu[Zu] = ju[Zu] / su[Zu];
        return Eu.markAsUpdated(), Eu
      }
      divideInPlace(uu) {
        const Eu = this._m,
          ju = uu.m;
        for (let su = 0; su < 16; su++) Eu[su] /= ju[su];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(uu) {
        const Eu = this._m,
          ju = uu.m;
        for (let su = 0; su < 16; su++) Eu[su] = Math.min(Eu[su], ju[su]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const uu = this._m;
        for (let Eu = 0; Eu < 16; Eu++) uu[Eu] = Math.min(uu[Eu], Eu < 0 || arguments.length <= Eu ? void 0 : arguments[Eu]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(uu) {
        const Eu = this._m,
          ju = uu.m;
        for (let su = 0; su < 16; su++) Eu[su] = Math.max(Eu[su], ju[su]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const uu = this._m;
        for (let Eu = 0; Eu < 16; Eu++) uu[Eu] = Math.max(uu[Eu], Eu < 0 || arguments.length <= Eu ? void 0 : arguments[Eu]);
        return this.markAsUpdated(), this
      }
      nZ() {
        return this.negateToRef(new Yu)
      }
      negateInPlace() {
        const uu = this._m;
        for (let Eu = 0; Eu < 16; Eu++) uu[Eu] = -uu[Eu];
        return this.markAsUpdated(), this
      }
      negateToRef(uu) {
        const Eu = this._m,
          ju = uu._m;
        for (let su = 0; su < 16; su++) ju[su] = -Eu[su];
        return uu.markAsUpdated(), uu
      }
      equals(uu) {
        const Eu = uu;
        if (!Eu) return !1;
        if ((this._isIdentity || Eu._isIdentity) && !this._isIdentityDirty && !Eu._isIdentityDirty) return this._isIdentity && Eu._isIdentity;
        const ju = this.m,
          su = Eu.m;
        return ju[0] === su[0] && ju[1] === su[1] && ju[2] === su[2] && ju[3] === su[3] && ju[4] === su[4] && ju[5] === su[5] && ju[6] === su[6] && ju[7] === su[7] && ju[8] === su[8] && ju[9] === su[9] && ju[10] === su[10] && ju[11] === su[11] && ju[12] === su[12] && ju[13] === su[13] && ju[14] === su[14] && ju[15] === su[15]
      }
      equalsWithEpsilon(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ju = this._m,
          su = uu.m;
        for (let Uu = 0; Uu < 16; Uu++)
          if (!(0, lu.WithinEpsilon)(ju[Uu], su[Uu], Eu)) return !1;
        return !0
      }
      BXu() {
        const uu = this._m;
        for (let Eu = 0; Eu < 16; Eu++)
          if (uu[Eu] != (Eu < 0 || arguments.length <= Eu ? void 0 : arguments[Eu])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new Yu)
      }
      floorToRef(uu) {
        const Eu = this._m,
          ju = uu._m;
        for (let su = 0; su < 16; su++) ju[su] = Math.floor(Eu[su]);
        return uu.markAsUpdated(), uu
      }
      fract() {
        return this.fractToRef(new Yu)
      }
      fractToRef(uu) {
        const Eu = this._m,
          ju = uu._m;
        for (let su = 0; su < 16; su++) ju[su] = Eu[su] - Math.floor(Eu[su]);
        return uu.markAsUpdated(), uu
      }
      clone() {
        const uu = new Yu;
        return uu.yJ(this), uu
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let uu = Cu(this._m[0]);
        for (let Eu = 1; Eu < 16; Eu++) uu = 397 * uu ^ Cu(this._m[Eu]);
        return uu
      }
      decomposeToTransformNode(uu) {
        return uu.rotationQuaternion = uu.rotationQuaternion || new Ou, this.decompose(uu.Of, uu.rotationQuaternion, uu.position)
      }
      decompose(uu, Eu, ju, su) {
        let Uu = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return ju && ju.k_(0), uu && uu.k_(1), Eu && Eu.T6(0, 0, 0, 1), !0;
        const Zu = this._m;
        if (ju && ju.T6(Zu[12], Zu[13], Zu[14]), (uu = uu || hu.dO[0]).x = Math.sqrt(Zu[0] * Zu[0] + Zu[1] * Zu[1] + Zu[2] * Zu[2]), uu.y = Math.sqrt(Zu[4] * Zu[4] + Zu[5] * Zu[5] + Zu[6] * Zu[6]), uu.z = Math.sqrt(Zu[8] * Zu[8] + Zu[9] * Zu[9] + Zu[10] * Zu[10]), su) {
          const Eu = (Uu ? su.absoluteScaling.x : su.Of.x) < 0 ? -1 : 1,
            ju = (Uu ? su.absoluteScaling.y : su.Of.y) < 0 ? -1 : 1,
            Zu = (Uu ? su.absoluteScaling.z : su.Of.z) < 0 ? -1 : 1;
          uu.x *= Eu, uu.y *= ju, uu.z *= Zu
        } else this.determinant() <= 0 && (uu.y *= -1);
        if (0 === uu._x || 0 === uu._y || 0 === uu._z) return Eu && Eu.T6(0, 0, 0, 1), !1;
        if (Eu) {
          const ju = 1 / uu._x,
            su = 1 / uu._y,
            Uu = 1 / uu._z;
          Yu.FromValuesToRef(Zu[0] * ju, Zu[1] * ju, Zu[2] * ju, 0, Zu[4] * su, Zu[5] * su, Zu[6] * su, 0, Zu[8] * Uu, Zu[9] * Uu, Zu[10] * Uu, 0, 0, 0, 0, 1, hu.Matrix[0]), Ou.FromRotationMatrixToRef(hu.Matrix[0], Eu)
        }
        return !0
      }
      getRow(uu) {
        if (uu < 0 || uu > 3) return null;
        const Eu = 4 * uu;
        return new Nu(this._m[Eu + 0], this._m[Eu + 1], this._m[Eu + 2], this._m[Eu + 3])
      }
      getRowToRef(uu, Eu) {
        if (uu >= 0 && uu <= 3) {
          const ju = 4 * uu;
          Eu.x = this._m[ju + 0], Eu.y = this._m[ju + 1], Eu.z = this._m[ju + 2], Eu.w = this._m[ju + 3]
        }
        return Eu
      }
      setRow(uu, Eu) {
        return this.setRowFromFloats(uu, Eu.x, Eu.y, Eu.z, Eu.w)
      }
      transpose() {
        const uu = new Yu;
        return Yu.TransposeToRef(this, uu), uu
      }
      transposeToRef(uu) {
        return Yu.TransposeToRef(this, uu), uu
      }
      setRowFromFloats(uu, Eu, ju, su, Uu) {
        if (uu < 0 || uu > 3) return this;
        const Zu = 4 * uu;
        return this._m[Zu + 0] = Eu, this._m[Zu + 1] = ju, this._m[Zu + 2] = su, this._m[Zu + 3] = Uu, this.markAsUpdated(), this
      }
      scale(uu) {
        const Eu = new Yu;
        return this.scaleToRef(uu, Eu), Eu
      }
      scaleToRef(uu, Eu) {
        for (let ju = 0; ju < 16; ju++) Eu._m[ju] = this._m[ju] * uu;
        return Eu.markAsUpdated(), Eu
      }
      scaleAndAddToRef(uu, Eu) {
        for (let ju = 0; ju < 16; ju++) Eu._m[ju] += this._m[ju] * uu;
        return Eu.markAsUpdated(), Eu
      }
      scaleInPlace(uu) {
        const Eu = this._m;
        for (let ju = 0; ju < 16; ju++) Eu[ju] *= uu;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(uu) {
        const Eu = hu.Matrix[0];
        this.invertToRef(Eu), Eu.transposeToRef(uu);
        const ju = uu._m;
        return Yu.FromValuesToRef(ju[0], ju[1], ju[2], 0, ju[4], ju[5], ju[6], 0, ju[8], ju[9], ju[10], 0, 0, 0, 0, 1, uu), uu
      }
      getRotationMatrix() {
        const uu = new Yu;
        return this.getRotationMatrixToRef(uu), uu
      }
      getRotationMatrixToRef(uu) {
        const Eu = hu.dO[0];
        if (!this.decompose(Eu)) return Yu.IdentityToRef(uu), uu;
        const ju = this._m,
          su = 1 / Eu._x,
          Uu = 1 / Eu._y,
          Zu = 1 / Eu._z;
        return Yu.FromValuesToRef(ju[0] * su, ju[1] * su, ju[2] * su, 0, ju[4] * Uu, ju[5] * Uu, ju[6] * Uu, 0, ju[8] * Zu, ju[9] * Zu, ju[10] * Zu, 0, 0, 0, 0, 1, uu), uu
      }
      toggleModelMatrixHandInPlace() {
        const uu = this._m;
        return uu[2] *= -1, uu[6] *= -1, uu[8] *= -1, uu[9] *= -1, uu[14] *= -1, this.markAsUpdated(), this
      }
      toggleProjectionMatrixHandInPlace() {
        const uu = this._m;
        return uu[8] *= -1, uu[9] *= -1, uu[10] *= -1, uu[11] *= -1, this.markAsUpdated(), this
      }
      _convertProjectionToHalfZRangeInPlace() {
        return this.multiplyToRef(gu, this), this
      }
      static FromArray(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ju = new Yu;
        return Yu.FromArrayToRef(uu, Eu, ju), ju
      }
      static FromArrayToRef(uu, Eu, ju) {
        for (let su = 0; su < 16; su++) ju._m[su] = uu[su + Eu];
        return ju.markAsUpdated(), ju
      }
      static FromFloat32ArrayToRefScaled(uu, Eu, ju, su) {
        return su._m[0] = uu[0 + Eu] * ju, su._m[1] = uu[1 + Eu] * ju, su._m[2] = uu[2 + Eu] * ju, su._m[3] = uu[3 + Eu] * ju, su._m[4] = uu[4 + Eu] * ju, su._m[5] = uu[5 + Eu] * ju, su._m[6] = uu[6 + Eu] * ju, su._m[7] = uu[7 + Eu] * ju, su._m[8] = uu[8 + Eu] * ju, su._m[9] = uu[9 + Eu] * ju, su._m[10] = uu[10 + Eu] * ju, su._m[11] = uu[11 + Eu] * ju, su._m[12] = uu[12 + Eu] * ju, su._m[13] = uu[13 + Eu] * ju, su._m[14] = uu[14 + Eu] * ju, su._m[15] = uu[15 + Eu] * ju, su.markAsUpdated(), su
      }
      static get IdentityReadOnly() {
        return Yu._IdentityReadOnly
      }
      static FromValuesToRef(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu, Cu, bu, cu, Nu, Ou, Yu, hu) {
        const Du = hu._m;
        Du[0] = uu, Du[1] = Eu, Du[2] = ju, Du[3] = su, Du[4] = Uu, Du[5] = Zu, Du[6] = Xu, Du[7] = lu, Du[8] = qu, Du[9] = fu, Du[10] = Cu, Du[11] = bu, Du[12] = cu, Du[13] = Nu, Du[14] = Ou, Du[15] = Yu, hu.markAsUpdated()
      }
      static FromValues(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu, Cu, bu, cu, Nu, Ou, hu) {
        const Du = new Yu,
          gu = Du._m;
        return gu[0] = uu, gu[1] = Eu, gu[2] = ju, gu[3] = su, gu[4] = Uu, gu[5] = Zu, gu[6] = Xu, gu[7] = lu, gu[8] = qu, gu[9] = fu, gu[10] = Cu, gu[11] = bu, gu[12] = cu, gu[13] = Nu, gu[14] = Ou, gu[15] = hu, Du.markAsUpdated(), Du
      }
      static Compose(uu, Eu, ju) {
        const su = new Yu;
        return Yu.ComposeToRef(uu, Eu, ju, su), su
      }
      static ComposeToRef(uu, Eu, ju, su) {
        const Uu = su._m,
          Zu = Eu._x,
          Xu = Eu._y,
          lu = Eu._z,
          qu = Eu._w,
          fu = Zu + Zu,
          Cu = Xu + Xu,
          bu = lu + lu,
          cu = Zu * fu,
          Nu = Zu * Cu,
          Ou = Zu * bu,
          Yu = Xu * Cu,
          hu = Xu * bu,
          Du = lu * bu,
          gu = qu * fu,
          Mu = qu * Cu,
          eu = qu * bu,
          Gu = uu._x,
          pu = uu._y,
          wu = uu._z;
        return Uu[0] = (1 - (Yu + Du)) * Gu, Uu[1] = (Nu + eu) * Gu, Uu[2] = (Ou - Mu) * Gu, Uu[3] = 0, Uu[4] = (Nu - eu) * pu, Uu[5] = (1 - (cu + Du)) * pu, Uu[6] = (hu + gu) * pu, Uu[7] = 0, Uu[8] = (Ou + Mu) * wu, Uu[9] = (hu - gu) * wu, Uu[10] = (1 - (cu + Yu)) * wu, Uu[11] = 0, Uu[12] = ju._x, Uu[13] = ju._y, Uu[14] = ju._z, Uu[15] = 1, su.markAsUpdated(), su
      }
      static Identity() {
        const uu = Yu.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return uu._updateIdentityStatus(!0), uu
      }
      static IdentityToRef(uu) {
        return Yu.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, uu), uu._updateIdentityStatus(!0), uu
      }
      static Zero() {
        const uu = Yu.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return uu._updateIdentityStatus(!1), uu
      }
      static RotationX(uu) {
        const Eu = new Yu;
        return Yu.RotationXToRef(uu, Eu), Eu
      }
      static Invert(uu) {
        const Eu = new Yu;
        return uu.invertToRef(Eu), Eu
      }
      static RotationXToRef(uu, Eu) {
        const ju = Math.sin(uu),
          su = Math.cos(uu);
        return Yu.FromValuesToRef(1, 0, 0, 0, 0, su, ju, 0, 0, -ju, su, 0, 0, 0, 0, 1, Eu), Eu._updateIdentityStatus(1 === su && 0 === ju), Eu
      }
      static RotationY(uu) {
        const Eu = new Yu;
        return Yu.RotationYToRef(uu, Eu), Eu
      }
      static RotationYToRef(uu, Eu) {
        const ju = Math.sin(uu),
          su = Math.cos(uu);
        return Yu.FromValuesToRef(su, 0, -ju, 0, 0, 1, 0, 0, ju, 0, su, 0, 0, 0, 0, 1, Eu), Eu._updateIdentityStatus(1 === su && 0 === ju), Eu
      }
      static RotationZ(uu) {
        const Eu = new Yu;
        return Yu.RotationZToRef(uu, Eu), Eu
      }
      static RotationZToRef(uu, Eu) {
        const ju = Math.sin(uu),
          su = Math.cos(uu);
        return Yu.FromValuesToRef(su, ju, 0, 0, -ju, su, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, Eu), Eu._updateIdentityStatus(1 === su && 0 === ju), Eu
      }
      static RotationAxis(uu, Eu) {
        const ju = new Yu;
        return Yu.RotationAxisToRef(uu, Eu, ju), ju
      }
      static RotationAxisToRef(uu, Eu, ju) {
        const su = Math.sin(-Eu),
          Uu = Math.cos(-Eu),
          Zu = 1 - Uu;
        uu = uu.normalizeToRef(hu.dO[0]);
        const Xu = ju._m;
        return Xu[0] = uu._x * uu._x * Zu + Uu, Xu[1] = uu._x * uu._y * Zu - uu._z * su, Xu[2] = uu._x * uu._z * Zu + uu._y * su, Xu[3] = 0, Xu[4] = uu._y * uu._x * Zu + uu._z * su, Xu[5] = uu._y * uu._y * Zu + Uu, Xu[6] = uu._y * uu._z * Zu - uu._x * su, Xu[7] = 0, Xu[8] = uu._z * uu._x * Zu - uu._y * su, Xu[9] = uu._z * uu._y * Zu + uu._x * su, Xu[10] = uu._z * uu._z * Zu + Uu, Xu[11] = 0, Xu[12] = 0, Xu[13] = 0, Xu[14] = 0, Xu[15] = 1, ju.markAsUpdated(), ju
      }
      static RotationAlignToRef(uu, Eu, ju) {
        let Uu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Zu = cu.Dot(Eu, uu),
          Xu = ju._m;
        if (Zu < -1 + su.c) Xu[0] = -1, Xu[1] = 0, Xu[2] = 0, Xu[3] = 0, Xu[4] = 0, Xu[5] = Uu ? 1 : -1, Xu[6] = 0, Xu[7] = 0, Xu[8] = 0, Xu[9] = 0, Xu[10] = Uu ? -1 : 1, Xu[11] = 0;
        else {
          const ju = cu.Cross(Eu, uu),
            su = 1 / (1 + Zu);
          Xu[0] = ju._x * ju._x * su + Zu, Xu[1] = ju._y * ju._x * su - ju._z, Xu[2] = ju._z * ju._x * su + ju._y, Xu[3] = 0, Xu[4] = ju._x * ju._y * su + ju._z, Xu[5] = ju._y * ju._y * su + Zu, Xu[6] = ju._z * ju._y * su - ju._x, Xu[7] = 0, Xu[8] = ju._x * ju._z * su - ju._y, Xu[9] = ju._y * ju._z * su + ju._x, Xu[10] = ju._z * ju._z * su + Zu, Xu[11] = 0
        }
        return Xu[12] = 0, Xu[13] = 0, Xu[14] = 0, Xu[15] = 1, ju.markAsUpdated(), ju
      }
      static RotationYawPitchRoll(uu, Eu, ju) {
        const su = new Yu;
        return Yu.RotationYawPitchRollToRef(uu, Eu, ju, su), su
      }
      static RotationYawPitchRollToRef(uu, Eu, ju, su) {
        return Ou.RotationYawPitchRollToRef(uu, Eu, ju, hu.Quaternion[0]), hu.Quaternion[0].toRotationMatrix(su), su
      }
      static Scaling(uu, Eu, ju) {
        const su = new Yu;
        return Yu.ScalingToRef(uu, Eu, ju, su), su
      }
      static ScalingToRef(uu, Eu, ju, su) {
        return Yu.FromValuesToRef(uu, 0, 0, 0, 0, Eu, 0, 0, 0, 0, ju, 0, 0, 0, 0, 1, su), su._updateIdentityStatus(1 === uu && 1 === Eu && 1 === ju), su
      }
      static Translation(uu, Eu, ju) {
        const su = new Yu;
        return Yu.TranslationToRef(uu, Eu, ju, su), su
      }
      static TranslationToRef(uu, Eu, ju, su) {
        return Yu.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, uu, Eu, ju, 1, su), su._updateIdentityStatus(0 === uu && 0 === Eu && 0 === ju), su
      }
      static Lerp(uu, Eu, ju) {
        const su = new Yu;
        return Yu.LerpToRef(uu, Eu, ju, su), su
      }
      static LerpToRef(uu, Eu, ju, su) {
        const Uu = su._m,
          Zu = uu.m,
          Xu = Eu.m;
        for (let lu = 0; lu < 16; lu++) Uu[lu] = Zu[lu] * (1 - ju) + Xu[lu] * ju;
        return su.markAsUpdated(), su
      }
      static DecomposeLerp(uu, Eu, ju) {
        const su = new Yu;
        return Yu.DecomposeLerpToRef(uu, Eu, ju, su), su
      }
      static DecomposeLerpToRef(uu, Eu, ju, su) {
        const Uu = hu.dO[0],
          Zu = hu.Quaternion[0],
          Xu = hu.dO[1];
        uu.decompose(Uu, Zu, Xu);
        const lu = hu.dO[2],
          qu = hu.Quaternion[1],
          fu = hu.dO[3];
        Eu.decompose(lu, qu, fu);
        const Cu = hu.dO[4];
        cu.LerpToRef(Uu, lu, ju, Cu);
        const bu = hu.Quaternion[2];
        Ou.SlerpToRef(Zu, qu, ju, bu);
        const Nu = hu.dO[5];
        return cu.LerpToRef(Xu, fu, ju, Nu), Yu.ComposeToRef(Cu, bu, Nu, su), su
      }
      static LookAtLH(uu, Eu, ju) {
        const su = new Yu;
        return Yu.LookAtLHToRef(uu, Eu, ju, su), su
      }
      static LookAtLHToRef(uu, Eu, ju, su) {
        const Uu = hu.dO[0],
          Zu = hu.dO[1],
          Xu = hu.dO[2];
        Eu.subtractToRef(uu, Xu), Xu.normalize(), cu.CrossToRef(ju, Xu, Uu);
        const lu = Uu.lengthSquared();
        0 === lu ? Uu.x = 1 : Uu.normalizeFromLength(Math.sqrt(lu)), cu.CrossToRef(Xu, Uu, Zu), Zu.normalize();
        const qu = -cu.Dot(Uu, uu),
          fu = -cu.Dot(Zu, uu),
          Cu = -cu.Dot(Xu, uu);
        return Yu.FromValuesToRef(Uu._x, Zu._x, Xu._x, 0, Uu._y, Zu._y, Xu._y, 0, Uu._z, Zu._z, Xu._z, 0, qu, fu, Cu, 1, su), su
      }
      static LookAtRH(uu, Eu, ju) {
        const su = new Yu;
        return Yu.LookAtRHToRef(uu, Eu, ju, su), su
      }
      static LookAtRHToRef(uu, Eu, ju, su) {
        const Uu = hu.dO[0],
          Zu = hu.dO[1],
          Xu = hu.dO[2];
        uu.subtractToRef(Eu, Xu), Xu.normalize(), cu.CrossToRef(ju, Xu, Uu);
        const lu = Uu.lengthSquared();
        0 === lu ? Uu.x = 1 : Uu.normalizeFromLength(Math.sqrt(lu)), cu.CrossToRef(Xu, Uu, Zu), Zu.normalize();
        const qu = -cu.Dot(Uu, uu),
          fu = -cu.Dot(Zu, uu),
          Cu = -cu.Dot(Xu, uu);
        return Yu.FromValuesToRef(Uu._x, Zu._x, Xu._x, 0, Uu._y, Zu._y, Xu._y, 0, Uu._z, Zu._z, Xu._z, 0, qu, fu, Cu, 1, su), su
      }
      static LookDirectionLH(uu, Eu) {
        const ju = new Yu;
        return Yu.LookDirectionLHToRef(uu, Eu, ju), ju
      }
      static LookDirectionLHToRef(uu, Eu, ju) {
        const su = hu.dO[0];
        su.yJ(uu), su.scaleInPlace(-1);
        const Uu = hu.dO[1];
        return cu.CrossToRef(Eu, su, Uu), Yu.FromValuesToRef(Uu._x, Uu._y, Uu._z, 0, Eu._x, Eu._y, Eu._z, 0, su._x, su._y, su._z, 0, 0, 0, 0, 1, ju), ju
      }
      static LookDirectionRH(uu, Eu) {
        const ju = new Yu;
        return Yu.LookDirectionRHToRef(uu, Eu, ju), ju
      }
      static LookDirectionRHToRef(uu, Eu, ju) {
        const su = hu.dO[2];
        return cu.CrossToRef(Eu, uu, su), Yu.FromValuesToRef(su._x, su._y, su._z, 0, Eu._x, Eu._y, Eu._z, 0, uu._x, uu._y, uu._z, 0, 0, 0, 0, 1, ju), ju
      }
      static OrthoLH(uu, Eu, ju, su, Uu) {
        const Zu = new Yu;
        return Yu.OrthoLHToRef(uu, Eu, ju, su, Zu, Uu), Zu
      }
      static OrthoLHToRef(uu, Eu, ju, su, Uu, Zu) {
        const Xu = 2 / uu,
          lu = 2 / Eu,
          qu = 2 / (su - ju),
          fu = -(su + ju) / (su - ju);
        return Yu.FromValuesToRef(Xu, 0, 0, 0, 0, lu, 0, 0, 0, 0, qu, 0, 0, 0, fu, 1, Uu), Zu && Uu.multiplyToRef(gu, Uu), Uu._updateIdentityStatus(1 === Xu && 1 === lu && 1 === qu && 0 === fu), Uu
      }
      static OrthoOffCenterLH(uu, Eu, ju, su, Uu, Zu, Xu) {
        const lu = new Yu;
        return Yu.OrthoOffCenterLHToRef(uu, Eu, ju, su, Uu, Zu, lu, Xu), lu
      }
      static OrthoOffCenterLHToRef(uu, Eu, ju, su, Uu, Zu, Xu, lu) {
        const qu = 2 / (Eu - uu),
          fu = 2 / (su - ju),
          Cu = 2 / (Zu - Uu),
          bu = -(Zu + Uu) / (Zu - Uu),
          cu = (uu + Eu) / (uu - Eu),
          Nu = (su + ju) / (ju - su);
        return Yu.FromValuesToRef(qu, 0, 0, 0, 0, fu, 0, 0, 0, 0, Cu, 0, cu, Nu, bu, 1, Xu), lu && Xu.multiplyToRef(gu, Xu), Xu.markAsUpdated(), Xu
      }
      static ObliqueOffCenterLHToRef(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu, Cu) {
        const bu = -Xu * Math.cos(lu),
          cu = -Xu * Math.sin(lu);
        return Yu.TranslationToRef(0, 0, -qu, hu.Matrix[1]), Yu.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, bu, cu, 1, 0, 0, 0, 0, 1, hu.Matrix[0]), hu.Matrix[1].multiplyToRef(hu.Matrix[0], hu.Matrix[0]), Yu.TranslationToRef(0, 0, qu, hu.Matrix[1]), hu.Matrix[0].multiplyToRef(hu.Matrix[1], hu.Matrix[0]), Yu.OrthoOffCenterLHToRef(uu, Eu, ju, su, Uu, Zu, fu, Cu), hu.Matrix[0].multiplyToRef(fu, fu), fu
      }
      static OrthoOffCenterRH(uu, Eu, ju, su, Uu, Zu, Xu) {
        const lu = new Yu;
        return Yu.OrthoOffCenterRHToRef(uu, Eu, ju, su, Uu, Zu, lu, Xu), lu
      }
      static OrthoOffCenterRHToRef(uu, Eu, ju, su, Uu, Zu, Xu, lu) {
        return Yu.OrthoOffCenterLHToRef(uu, Eu, ju, su, Uu, Zu, Xu, lu), Xu._m[10] *= -1, Xu
      }
      static ObliqueOffCenterRHToRef(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu, Cu) {
        const bu = Xu * Math.cos(lu),
          cu = Xu * Math.sin(lu);
        return Yu.TranslationToRef(0, 0, qu, hu.Matrix[1]), Yu.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, bu, cu, 1, 0, 0, 0, 0, 1, hu.Matrix[0]), hu.Matrix[1].multiplyToRef(hu.Matrix[0], hu.Matrix[0]), Yu.TranslationToRef(0, 0, -qu, hu.Matrix[1]), hu.Matrix[0].multiplyToRef(hu.Matrix[1], hu.Matrix[0]), Yu.OrthoOffCenterRHToRef(uu, Eu, ju, su, Uu, Zu, fu, Cu), hu.Matrix[0].multiplyToRef(fu, fu), fu
      }
      static PerspectiveLH(uu, Eu, ju, su, Uu) {
        let Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const Xu = new Yu,
          lu = 2 * ju / uu,
          qu = 2 * ju / Eu,
          fu = (su + ju) / (su - ju),
          Cu = -2 * su * ju / (su - ju),
          bu = Math.tan(Zu);
        return Yu.FromValuesToRef(lu, 0, 0, 0, 0, qu, 0, bu, 0, 0, fu, 1, 0, 0, Cu, 0, Xu), Uu && Xu.multiplyToRef(gu, Xu), Xu._updateIdentityStatus(!1), Xu
      }
      static PerspectiveFovLH(uu, Eu, ju, su, Uu) {
        let Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Xu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const lu = new Yu;
        return Yu.PerspectiveFovLHToRef(uu, Eu, ju, su, lu, !0, Uu, Zu, Xu), lu
      }
      static PerspectiveFovLHToRef(uu, Eu, ju, su, Uu) {
        let Zu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Xu = arguments.length > 6 ? arguments[6] : void 0,
          lu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          qu = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const fu = ju,
          Cu = su,
          bu = 1 / Math.tan(.5 * uu),
          cu = Zu ? bu / Eu : bu,
          Nu = Zu ? bu : bu * Eu,
          Ou = qu && 0 === fu ? -1 : 0 !== Cu ? (Cu + fu) / (Cu - fu) : 1,
          hu = qu && 0 === fu ? 2 * Cu : 0 !== Cu ? -2 * Cu * fu / (Cu - fu) : -2 * fu,
          Du = Math.tan(lu);
        return Yu.FromValuesToRef(cu, 0, 0, 0, 0, Nu, 0, Du, 0, 0, Ou, 1, 0, 0, hu, 0, Uu), Xu && Uu.multiplyToRef(gu, Uu), Uu._updateIdentityStatus(!1), Uu
      }
      static PerspectiveFovReverseLHToRef(uu, Eu, ju, su, Uu) {
        let Zu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Xu = arguments.length > 6 ? arguments[6] : void 0,
          lu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const qu = 1 / Math.tan(.5 * uu),
          fu = Zu ? qu / Eu : qu,
          Cu = Zu ? qu : qu * Eu,
          bu = Math.tan(lu);
        return Yu.FromValuesToRef(fu, 0, 0, 0, 0, Cu, 0, bu, 0, 0, -ju, 1, 0, 0, 1, 0, Uu), Xu && Uu.multiplyToRef(gu, Uu), Uu._updateIdentityStatus(!1), Uu
      }
      static PerspectiveFovRH(uu, Eu, ju, su, Uu) {
        let Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Xu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const lu = new Yu;
        return Yu.PerspectiveFovRHToRef(uu, Eu, ju, su, lu, !0, Uu, Zu, Xu), lu
      }
      static PerspectiveFovRHToRef(uu, Eu, ju, su, Uu) {
        let Zu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Xu = arguments.length > 6 ? arguments[6] : void 0,
          lu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          qu = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const fu = ju,
          Cu = su,
          bu = 1 / Math.tan(.5 * uu),
          cu = Zu ? bu / Eu : bu,
          Nu = Zu ? bu : bu * Eu,
          Ou = qu && 0 === fu ? 1 : 0 !== Cu ? -(Cu + fu) / (Cu - fu) : -1,
          hu = qu && 0 === fu ? 2 * Cu : 0 !== Cu ? -2 * Cu * fu / (Cu - fu) : -2 * fu,
          Du = Math.tan(lu);
        return Yu.FromValuesToRef(cu, 0, 0, 0, 0, Nu, 0, Du, 0, 0, Ou, -1, 0, 0, hu, 0, Uu), Xu && Uu.multiplyToRef(gu, Uu), Uu._updateIdentityStatus(!1), Uu
      }
      static PerspectiveFovReverseRHToRef(uu, Eu, ju, su, Uu) {
        let Zu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Xu = arguments.length > 6 ? arguments[6] : void 0,
          lu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const qu = 1 / Math.tan(.5 * uu),
          fu = Zu ? qu / Eu : qu,
          Cu = Zu ? qu : qu * Eu,
          bu = Math.tan(lu);
        return Yu.FromValuesToRef(fu, 0, 0, 0, 0, Cu, 0, bu, 0, 0, -ju, -1, 0, 0, -1, 0, Uu), Xu && Uu.multiplyToRef(gu, Uu), Uu._updateIdentityStatus(!1), Uu
      }
      static GetFinalMatrix(uu, Eu, ju, su, Uu, Zu) {
        const Xu = uu.width,
          lu = uu.height,
          qu = uu.x,
          fu = uu.y,
          Cu = Yu.FromValues(Xu / 2, 0, 0, 0, 0, -lu / 2, 0, 0, 0, 0, Zu - Uu, 0, qu + Xu / 2, lu / 2 + fu, Uu, 1),
          bu = new Yu;
        return Eu.multiplyToRef(ju, bu), bu.multiplyToRef(su, bu), bu.multiplyToRef(Cu, bu)
      }
      static GetAsMatrix2x2(uu) {
        const Eu = uu.m,
          ju = [Eu[0], Eu[1], Eu[4], Eu[5]];
        return Zu.c.MatrixUse64Bits ? ju : new Float32Array(ju)
      }
      static GetAsMatrix3x3(uu) {
        const Eu = uu.m,
          ju = [Eu[0], Eu[1], Eu[2], Eu[4], Eu[5], Eu[6], Eu[8], Eu[9], Eu[10]];
        return Zu.c.MatrixUse64Bits ? ju : new Float32Array(ju)
      }
      static Transpose(uu) {
        const Eu = new Yu;
        return Yu.TransposeToRef(uu, Eu), Eu
      }
      static TransposeToRef(uu, Eu) {
        const ju = uu.m,
          su = ju[0],
          Uu = ju[4],
          Zu = ju[8],
          Xu = ju[12],
          lu = ju[1],
          qu = ju[5],
          fu = ju[9],
          Cu = ju[13],
          bu = ju[2],
          cu = ju[6],
          Nu = ju[10],
          Ou = ju[14],
          Yu = ju[3],
          hu = ju[7],
          Du = ju[11],
          gu = ju[15],
          Mu = Eu._m;
        return Mu[0] = su, Mu[1] = Uu, Mu[2] = Zu, Mu[3] = Xu, Mu[4] = lu, Mu[5] = qu, Mu[6] = fu, Mu[7] = Cu, Mu[8] = bu, Mu[9] = cu, Mu[10] = Nu, Mu[11] = Ou, Mu[12] = Yu, Mu[13] = hu, Mu[14] = Du, Mu[15] = gu, Eu.markAsUpdated(), Eu._updateIdentityStatus(uu._isIdentity, uu._isIdentityDirty), Eu
      }
      static Reflection(uu) {
        const Eu = new Yu;
        return Yu.ReflectionToRef(uu, Eu), Eu
      }
      static ReflectionToRef(uu, Eu) {
        uu.normalize();
        const ju = uu.normal.x,
          su = uu.normal.y,
          Uu = uu.normal.z,
          Zu = -2 * ju,
          Xu = -2 * su,
          lu = -2 * Uu;
        return Yu.FromValuesToRef(Zu * ju + 1, Xu * ju, lu * ju, 0, Zu * su, Xu * su + 1, lu * su, 0, Zu * Uu, Xu * Uu, lu * Uu + 1, 0, Zu * uu.d, Xu * uu.d, lu * uu.d, 1, Eu), Eu
      }
      static FromXYZAxesToRef(uu, Eu, ju, su) {
        return Yu.FromValuesToRef(uu._x, uu._y, uu._z, 0, Eu._x, Eu._y, Eu._z, 0, ju._x, ju._y, ju._z, 0, 0, 0, 0, 1, su), su
      }
      static FromQuaternionToRef(uu, Eu) {
        const ju = uu._x * uu._x,
          su = uu._y * uu._y,
          Uu = uu._z * uu._z,
          Zu = uu._x * uu._y,
          Xu = uu._z * uu._w,
          lu = uu._z * uu._x,
          qu = uu._y * uu._w,
          fu = uu._y * uu._z,
          Cu = uu._x * uu._w;
        return Eu._m[0] = 1 - 2 * (su + Uu), Eu._m[1] = 2 * (Zu + Xu), Eu._m[2] = 2 * (lu - qu), Eu._m[3] = 0, Eu._m[4] = 2 * (Zu - Xu), Eu._m[5] = 1 - 2 * (Uu + ju), Eu._m[6] = 2 * (fu + Cu), Eu._m[7] = 0, Eu._m[8] = 2 * (lu + qu), Eu._m[9] = 2 * (fu - Cu), Eu._m[10] = 1 - 2 * (su + ju), Eu._m[11] = 0, Eu._m[12] = 0, Eu._m[13] = 0, Eu._m[14] = 0, Eu._m[15] = 1, Eu.markAsUpdated(), Eu
      }
    }
    Yu._IdentityReadOnly = Yu.Identity();
    class hu {}
    hu.dO = (0, Uu.h)(11, cu.Zero), hu.Matrix = (0, Uu.h)(2, Yu.Identity), hu.Quaternion = (0, Uu.h)(3, Ou.Zero);
    class Du {}
    Du.Vector2 = (0, Uu.h)(3, bu.Zero), Du.dO = (0, Uu.h)(13, cu.Zero), Du.Vector4 = (0, Uu.h)(3, Nu.Zero), Du.Quaternion = (0, Uu.h)(3, Ou.Zero), Du.Matrix = (0, Uu.h)(8, Yu.Identity);
    const gu = Yu.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let Mu = !1;

    function eu() {
      Mu || (Mu = !0, Object.defineProperties(bu.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(cu.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Nu.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Ou.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Yu.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, fu.f)("BABYLON.Vector2", bu), (0, fu.f)("BABYLON.Vector3", cu), (0, fu.f)("BABYLON.Vector4", Nu), (0, fu.f)("BABYLON.Matrix", Yu))
    }
  },
  37514: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Xu
    });
    const su = "undefined" !== typeof WeakRef;
    class Uu {
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ju = arguments.length > 2 ? arguments[2] : void 0,
          su = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(uu, Eu, ju, su)
      }
      initialize(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ju = arguments.length > 2 ? arguments[2] : void 0,
          su = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = uu, this.skipNextObservers = Eu, this.target = ju, this.currentTarget = su, this
      }
    }
    class Zu {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = uu, this.mask = Eu, this.scope = ju, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(uu)
      }
    }
    class Xu {
      static FromPromise(uu, Eu) {
        const ju = new Xu;
        return uu.then((uu => {
          ju.notifyObservers(uu)
        })).catch((uu => {
          if (!Eu) throw uu;
          Eu.notifyObservers(uu)
        })), ju
      }
      get observers() {
        return this._observers
      }
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = Eu, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new Uu(0), uu && (this._onObserverAdded = uu)
      }
      add(uu) {
        let Eu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ju = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!uu) return null;
        const Uu = new Zu(uu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        Uu.unregisterOnNextCall = ju, Eu ? this._observers.unshift(Uu) : this._observers.push(Uu), this._onObserverAdded && this._onObserverAdded(Uu), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(Uu, this._lastNotifiedValue);
        const Xu = su ? new WeakRef(this) : {
          deref: () => this
        };
        return Uu._remove = function() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const Eu = Xu.deref();
          Eu && (uu ? Eu.remove(Uu) : Eu._remove(Uu))
        }, Uu
      }
      addOnce(uu) {
        return this.add(uu, void 0, void 0, void 0, !0)
      }
      remove(uu) {
        if (!uu) return !1;
        uu._remove = null;
        return -1 !== this._observers.indexOf(uu) && (this._deferUnregister(uu), !0)
      }
      removeCallback(uu, Eu) {
        for (let ju = 0; ju < this._observers.length; ju++) {
          const su = this._observers[ju];
          if (!su._willBeUnregistered && (su.callback === uu && (!Eu || Eu === su.scope))) return this._deferUnregister(su), !0
        }
        return !1
      }
      _deferUnregister(uu) {
        uu._willBeUnregistered || (this._numObserversMarkedAsDeleted++, uu.unregisterOnNextCall = !1, uu._willBeUnregistered = !0, setTimeout((() => {
          this._remove(uu)
        }), 0))
      }
      _remove(uu) {
        let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!uu) return !1;
        const ju = this._observers.indexOf(uu);
        return -1 !== ju && (Eu && this._numObserversMarkedAsDeleted--, this._observers.splice(ju, 1), !0)
      }
      makeObserverTopPriority(uu) {
        this._remove(uu, !1), this._observers.unshift(uu)
      }
      makeObserverBottomPriority(uu) {
        this._remove(uu, !1), this._observers.push(uu)
      }
      notifyObservers(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          ju = arguments.length > 2 ? arguments[2] : void 0,
          su = arguments.length > 3 ? arguments[3] : void 0,
          Uu = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = uu), !this._observers.length) return !0;
        const Zu = this._eventState;
        Zu.mask = Eu, Zu.target = ju, Zu.currentTarget = su, Zu.skipNextObservers = !1, Zu.lastReturnValue = uu, Zu.userInfo = Uu;
        for (const Xu of this._observers)
          if (!Xu._willBeUnregistered && (Xu.mask & Eu && (Xu.unregisterOnNextCall && this._deferUnregister(Xu), Xu.scope ? Zu.lastReturnValue = Xu.callback.apply(Xu.scope, [uu, Zu]) : Zu.lastReturnValue = Xu.callback(uu, Zu)), Zu.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = Eu), uu._willBeUnregistered) return;
        const su = this._eventState;
        su.mask = ju, su.skipNextObservers = !1, uu.unregisterOnNextCall && this._deferUnregister(uu), uu.callback(Eu, su)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const uu = this._observers.pop();
          uu && (uu._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const uu = new Xu;
        return uu._observers = this._observers.slice(0), uu
      }
      hasSpecificMask() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const Eu of this._observers)
          if (Eu.mask & uu || Eu.mask === uu) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);