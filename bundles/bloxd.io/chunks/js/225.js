export const id = 225;
export const ids = [225];
export const modules = {
  36851: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Ku
    });
    var Eu = yu(36858);
    class Ku {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    Ku.Instances = [], Ku.OnEnginesDisposedObservable = new Eu.b, Ku._LastCreatedScene = null, Ku.UseFallbackTexture = !0, Ku.FallbackTexture = ""
  },
  36849: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Eu
    });
    class Eu {
      static SetMatrixPrecision(uu) {
        if (Eu.MatrixTrackPrecisionChange = !1, uu && !Eu.MatrixUse64Bits && Eu.MatrixTrackedMatrices)
          for (let Ru = 0; Ru < Eu.MatrixTrackedMatrices.length; ++Ru) {
            const uu = Eu.MatrixTrackedMatrices[Ru],
              yu = uu._m;
            uu._m = new Array(16);
            for (let Ru = 0; Ru < 16; ++Ru) uu._m[Ru] = yu[Ru]
          }
        Eu.MatrixUse64Bits = uu, Eu.MatrixCurrentType = Eu.MatrixUse64Bits ? Array : Float32Array, Eu.MatrixTrackedMatrices = null
      }
    }
    Eu.MatrixUse64Bits = !1, Eu.MatrixTrackPrecisionChange = !0, Eu.MatrixCurrentType = Float32Array, Eu.MatrixTrackedMatrices = []
  },
  36869: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ju,
      i: () => Xu,
      k: () => Nu,
      o: () => Eu,
      p: () => Qu,
      r: () => mu
    });
    class Eu {}

    function Ku(uu) {
      uu.updateFlag = Eu._UpdateFlagSeed++
    }

    function Qu(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const Ku = uu.AEu(),
        Qu = Ru.AEu(),
        mu = Ku[0],
        Ju = Ku[1],
        Nu = Ku[2],
        Xu = Ku[3],
        Vu = Ku[4],
        ru = Ku[5],
        Bu = Ku[6],
        xu = Ku[7],
        Su = Ku[8],
        pu = Ku[9],
        Tu = Ku[10],
        Wu = Ku[11],
        ju = Ku[12],
        Hu = Ku[13],
        du = Ku[14],
        bu = Ku[15],
        Cu = Qu[0],
        ku = Qu[1],
        eu = Qu[2],
        Au = Qu[3],
        Du = Qu[4],
        Mu = Qu[5],
        Iu = Qu[6],
        Gu = Qu[7],
        Uu = Qu[8],
        nu = Qu[9],
        su = Qu[10],
        tu = Qu[11],
        lu = Qu[12],
        gu = Qu[13],
        cu = Qu[14],
        Lu = Qu[15];
      yu[Eu] = mu * Cu + Ju * Du + Nu * Uu + Xu * lu, yu[Eu + 1] = mu * ku + Ju * Mu + Nu * nu + Xu * gu, yu[Eu + 2] = mu * eu + Ju * Iu + Nu * su + Xu * cu, yu[Eu + 3] = mu * Au + Ju * Gu + Nu * tu + Xu * Lu, yu[Eu + 4] = Vu * Cu + ru * Du + Bu * Uu + xu * lu, yu[Eu + 5] = Vu * ku + ru * Mu + Bu * nu + xu * gu, yu[Eu + 6] = Vu * eu + ru * Iu + Bu * su + xu * cu, yu[Eu + 7] = Vu * Au + ru * Gu + Bu * tu + xu * Lu, yu[Eu + 8] = Su * Cu + pu * Du + Tu * Uu + Wu * lu, yu[Eu + 9] = Su * ku + pu * Mu + Tu * nu + Wu * gu, yu[Eu + 10] = Su * eu + pu * Iu + Tu * su + Wu * cu, yu[Eu + 11] = Su * Au + pu * Gu + Tu * tu + Wu * Lu, yu[Eu + 12] = ju * Cu + Hu * Du + du * Uu + bu * lu, yu[Eu + 13] = ju * ku + Hu * Mu + du * nu + bu * gu, yu[Eu + 14] = ju * eu + Hu * Iu + du * su + bu * cu, yu[Eu + 15] = ju * Au + Hu * Gu + du * tu + bu * Lu
    }

    function mu(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      Qu(uu, Ru, yu.AEu(), Eu), Ku(yu)
    }

    function Ju(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Eu = uu.AEu();
      Ru[yu] = Eu[0], Ru[yu + 1] = Eu[1], Ru[yu + 2] = Eu[2], Ru[yu + 3] = Eu[3], Ru[yu + 4] = Eu[4], Ru[yu + 5] = Eu[5], Ru[yu + 6] = Eu[6], Ru[yu + 7] = Eu[7], Ru[yu + 8] = Eu[8], Ru[yu + 9] = Eu[9], Ru[yu + 10] = Eu[10], Ru[yu + 11] = Eu[11], Ru[yu + 12] = Eu[12], Ru[yu + 13] = Eu[13], Ru[yu + 14] = Eu[14], Ru[yu + 15] = Eu[15]
    }

    function Nu(uu, Ru) {
      const yu = Xu(uu, Ru.AEu());
      return yu && Ku(Ru), yu
    }

    function Xu(uu, Ru) {
      const yu = uu.AEu(),
        Eu = yu[0],
        Ku = yu[1],
        Qu = yu[2],
        mu = yu[3],
        Ju = yu[4],
        Nu = yu[5],
        Xu = yu[6],
        Vu = yu[7],
        ru = yu[8],
        Bu = yu[9],
        xu = yu[10],
        Su = yu[11],
        pu = yu[12],
        Tu = yu[13],
        Wu = yu[14],
        ju = yu[15],
        Hu = xu * ju - Wu * Su,
        du = Bu * ju - Tu * Su,
        bu = Bu * Wu - Tu * xu,
        Cu = ru * ju - pu * Su,
        ku = ru * Wu - xu * pu,
        eu = ru * Tu - pu * Bu,
        Au = +(Nu * Hu - Xu * du + Vu * bu),
        Du = -(Ju * Hu - Xu * Cu + Vu * ku),
        Mu = +(Ju * du - Nu * Cu + Vu * eu),
        Iu = -(Ju * bu - Nu * ku + Xu * eu),
        Gu = Eu * Au + Ku * Du + Qu * Mu + mu * Iu;
      if (0 === Gu) return !1;
      const Uu = 1 / Gu,
        nu = Xu * ju - Wu * Vu,
        su = Nu * ju - Tu * Vu,
        tu = Nu * Wu - Tu * Xu,
        lu = Ju * ju - pu * Vu,
        gu = Ju * Wu - pu * Xu,
        cu = Ju * Tu - pu * Nu,
        Lu = Xu * Su - xu * Vu,
        zu = Nu * Su - Bu * Vu,
        Fu = Nu * xu - Bu * Xu,
        wu = Ju * Su - ru * Vu,
        Zu = Ju * xu - ru * Xu,
        hu = Ju * Bu - ru * Nu,
        Pu = -(Ku * Hu - Qu * du + mu * bu),
        iu = +(Eu * Hu - Qu * Cu + mu * ku),
        Yu = -(Eu * du - Ku * Cu + mu * eu),
        ou = +(Eu * bu - Ku * ku + Qu * eu),
        qu = +(Ku * nu - Qu * su + mu * tu),
        Ou = -(Eu * nu - Qu * lu + mu * gu),
        vu = +(Eu * su - Ku * lu + mu * cu),
        au = -(Eu * tu - Ku * gu + Qu * cu),
        fu = -(Ku * Lu - Qu * zu + mu * Fu),
        uR = +(Eu * Lu - Qu * wu + mu * Zu),
        RR = -(Eu * zu - Ku * wu + mu * hu),
        yR = +(Eu * Fu - Ku * Zu + Qu * hu);
      return Ru[0] = Au * Uu, Ru[1] = Pu * Uu, Ru[2] = qu * Uu, Ru[3] = fu * Uu, Ru[4] = Du * Uu, Ru[5] = iu * Uu, Ru[6] = Ou * Uu, Ru[7] = uR * Uu, Ru[8] = Mu * Uu, Ru[9] = Yu * Uu, Ru[10] = vu * Uu, Ru[11] = RR * Uu, Ru[12] = Iu * Uu, Ru[13] = ou * Uu, Ru[14] = au * Uu, Ru[15] = yR * Uu, !0
    }
    Eu._UpdateFlagSeed = 0
  },
  36830: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => pu,
      f: () => Su,
      j: () => du,
      m: () => Wu,
      n: () => ru,
      p: () => Bu,
      r: () => xu
    });
    var Eu = yu(36833),
      Ku = yu(36842),
      Qu = yu(36849),
      mu = yu(36851),
      Ju = yu(36865),
      Nu = yu(36869),
      Xu = yu(36871);
    const Vu = uu => parseInt(uu.toString().replace(/\W/g, ""));
    class ru {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = uu, this.y = Ru
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let uu = Vu(this.x);
        return uu = 397 * uu ^ Vu(this.y), uu
      }
      toArray(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return uu[Ru] = this.x, uu[Ru + 1] = this.y, this
      }
      Tyu(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return ru.FromArrayToRef(uu, Ru, this), this
      }
      AEu() {
        return [this.x, this.y]
      }
      Oyu(uu) {
        return this.x = uu.x, this.y = uu.y, this
      }
      muu(uu, Ru) {
        return this.x = uu, this.y = Ru, this
      }
      set(uu, Ru) {
        return this.muu(uu, Ru)
      }
      e_(uu) {
        return this.muu(uu, uu)
      }
      add(uu) {
        return new ru(this.x + uu.x, this.y + uu.y)
      }
      addToRef(uu, Ru) {
        return Ru.x = this.x + uu.x, Ru.y = this.y + uu.y, Ru
      }
      addInPlace(uu) {
        return this.x += uu.x, this.y += uu.y, this
      }
      addInPlaceFromFloats(uu, Ru) {
        return this.x += uu, this.y += Ru, this
      }
      addVector3(uu) {
        return new ru(this.x + uu.x, this.y + uu.y)
      }
      subtract(uu) {
        return new ru(this.x - uu.x, this.y - uu.y)
      }
      subtractToRef(uu, Ru) {
        return Ru.x = this.x - uu.x, Ru.y = this.y - uu.y, Ru
      }
      oEu(uu) {
        return this.x -= uu.x, this.y -= uu.y, this
      }
      multiplyInPlace(uu) {
        return this.x *= uu.x, this.y *= uu.y, this
      }
      multiply(uu) {
        return new ru(this.x * uu.x, this.y * uu.y)
      }
      multiplyToRef(uu, Ru) {
        return Ru.x = this.x * uu.x, Ru.y = this.y * uu.y, Ru
      }
      multiplyByFloats(uu, Ru) {
        return new ru(this.x * uu, this.y * Ru)
      }
      divide(uu) {
        return new ru(this.x / uu.x, this.y / uu.y)
      }
      divideToRef(uu, Ru) {
        return Ru.x = this.x / uu.x, Ru.y = this.y / uu.y, Ru
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
      minimizeInPlaceFromFloats(uu, Ru) {
        return this.x = Math.min(uu, this.x), this.y = Math.min(Ru, this.y), this
      }
      maximizeInPlaceFromFloats(uu, Ru) {
        return this.x = Math.max(uu, this.x), this.y = Math.max(Ru, this.y), this
      }
      subtractFromFloats(uu, Ru) {
        return new ru(this.x - uu, this.y - Ru)
      }
      subtractFromFloatsToRef(uu, Ru, yu) {
        return yu.x = this.x - uu, yu.y = this.y - Ru, yu
      }
      tm() {
        return new ru(-this.x, -this.y)
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
        return new ru(this.x * uu, this.y * uu)
      }
      scaleToRef(uu, Ru) {
        return Ru.x = this.x * uu, Ru.y = this.y * uu, Ru
      }
      scaleAndAddToRef(uu, Ru) {
        return Ru.x += this.x * uu, Ru.y += this.y * uu, Ru
      }
      equals(uu) {
        return uu && this.x === uu.x && this.y === uu.y
      }
      equalsWithEpsilon(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Eu.d;
        return uu && (0, Ju.WithinEpsilon)(this.x, uu.x, Ru) && (0, Ju.WithinEpsilon)(this.y, uu.y, Ru)
      }
      amu(uu, Ru) {
        return this.x === uu && this.y === Ru
      }
      floor() {
        return new ru(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(uu) {
        return uu.x = Math.floor(this.x), uu.y = Math.floor(this.y), uu
      }
      fract() {
        return new ru(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(uu) {
        return uu.x = this.x - Math.floor(this.x), uu.y = this.y - Math.floor(this.y), uu
      }
      rotate(uu) {
        return this.rotateToRef(uu, new ru)
      }
      rotateToRef(uu, Ru) {
        const yu = Math.cos(uu),
          Eu = Math.sin(uu);
        return Ru.x = yu * this.x - Eu * this.y, Ru.y = Eu * this.x + yu * this.y, Ru
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
        const uu = new ru;
        return this.normalizeToRef(uu), uu
      }
      normalizeToRef(uu) {
        const Ru = this.length();
        return 0 === Ru || 1 === Ru ? (uu.x = this.x, uu.y = this.y, uu) : this.scaleToRef(1 / Ru, uu)
      }
      clone() {
        return new ru(this.x, this.y)
      }
      dot(uu) {
        return this.x * uu.x + this.y * uu.y
      }
      static Zero() {
        return new ru(0, 0)
      }
      static One() {
        return new ru(1, 1)
      }
      static Random() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new ru((0, Ju.RandomRange)(uu, Ru), (0, Ju.RandomRange)(uu, Ru))
      }
      static RandomToRef() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).muu((0, Ju.RandomRange)(uu, Ru), (0, Ju.RandomRange)(uu, Ru))
      }
      static get ZeroReadOnly() {
        return ru._ZeroReadOnly
      }
      static FromArray(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new ru(uu[Ru], uu[Ru + 1])
      }
      static FromArrayToRef(uu, Ru, yu) {
        return yu.x = uu[Ru], yu.y = uu[Ru + 1], yu
      }
      static FromFloatsToRef(uu, Ru, yu) {
        return yu.muu(uu, Ru), yu
      }
      static CatmullRom(uu, Ru, yu, Eu, Ku) {
        const Qu = Ku * Ku,
          mu = Ku * Qu,
          Ju = .5 * (2 * Ru.x + (-uu.x + yu.x) * Ku + (2 * uu.x - 5 * Ru.x + 4 * yu.x - Eu.x) * Qu + (-uu.x + 3 * Ru.x - 3 * yu.x + Eu.x) * mu),
          Nu = .5 * (2 * Ru.y + (-uu.y + yu.y) * Ku + (2 * uu.y - 5 * Ru.y + 4 * yu.y - Eu.y) * Qu + (-uu.y + 3 * Ru.y - 3 * yu.y + Eu.y) * mu);
        return new ru(Ju, Nu)
      }
      static ClampToRef(uu, Ru, yu, Eu) {
        return Eu.x = (0, Ju.Clamp)(uu.x, Ru.x, yu.x), Eu.y = (0, Ju.Clamp)(uu.y, Ru.y, yu.y), Eu
      }
      static Clamp(uu, Ru, yu) {
        const Eu = (0, Ju.Clamp)(uu.x, Ru.x, yu.x),
          Ku = (0, Ju.Clamp)(uu.y, Ru.y, yu.y);
        return new ru(Eu, Ku)
      }
      static Hermite(uu, Ru, yu, Eu, Ku) {
        const Qu = Ku * Ku,
          mu = Ku * Qu,
          Ju = 2 * mu - 3 * Qu + 1,
          Nu = -2 * mu + 3 * Qu,
          Xu = mu - 2 * Qu + Ku,
          Vu = mu - Qu,
          Bu = uu.x * Ju + yu.x * Nu + Ru.x * Xu + Eu.x * Vu,
          xu = uu.y * Ju + yu.y * Nu + Ru.y * Xu + Eu.y * Vu;
        return new ru(Bu, xu)
      }
      static Hermite1stDerivative(uu, Ru, yu, Eu, Ku) {
        return this.Hermite1stDerivativeToRef(uu, Ru, yu, Eu, Ku, new ru)
      }
      static Hermite1stDerivativeToRef(uu, Ru, yu, Eu, Ku, Qu) {
        const mu = Ku * Ku;
        return Qu.x = 6 * (mu - Ku) * uu.x + (3 * mu - 4 * Ku + 1) * Ru.x + 6 * (-mu + Ku) * yu.x + (3 * mu - 2 * Ku) * Eu.x, Qu.y = 6 * (mu - Ku) * uu.y + (3 * mu - 4 * Ku + 1) * Ru.y + 6 * (-mu + Ku) * yu.y + (3 * mu - 2 * Ku) * Eu.y, Qu
      }
      static Lerp(uu, Ru, yu) {
        return ru.LerpToRef(uu, Ru, yu, new ru)
      }
      static LerpToRef(uu, Ru, yu, Eu) {
        return Eu.x = uu.x + (Ru.x - uu.x) * yu, Eu.y = uu.y + (Ru.y - uu.y) * yu, Eu
      }
      static Dot(uu, Ru) {
        return uu.x * Ru.x + uu.y * Ru.y
      }
      static Normalize(uu) {
        return ru.NormalizeToRef(uu, new ru)
      }
      static NormalizeToRef(uu, Ru) {
        return uu.normalizeToRef(Ru), Ru
      }
      static Minimize(uu, Ru) {
        const yu = uu.x < Ru.x ? uu.x : Ru.x,
          Eu = uu.y < Ru.y ? uu.y : Ru.y;
        return new ru(yu, Eu)
      }
      static Maximize(uu, Ru) {
        const yu = uu.x > Ru.x ? uu.x : Ru.x,
          Eu = uu.y > Ru.y ? uu.y : Ru.y;
        return new ru(yu, Eu)
      }
      static Transform(uu, Ru) {
        return ru.TransformToRef(uu, Ru, new ru)
      }
      static TransformToRef(uu, Ru, yu) {
        const Eu = Ru.m,
          Ku = uu.x * Eu[0] + uu.y * Eu[4] + Eu[12],
          Qu = uu.x * Eu[1] + uu.y * Eu[5] + Eu[13];
        return yu.x = Ku, yu.y = Qu, yu
      }
      static PointInTriangle(uu, Ru, yu, Eu) {
        const Ku = .5 * (-yu.y * Eu.x + Ru.y * (-yu.x + Eu.x) + Ru.x * (yu.y - Eu.y) + yu.x * Eu.y),
          Qu = Ku < 0 ? -1 : 1,
          mu = (Ru.y * Eu.x - Ru.x * Eu.y + (Eu.y - Ru.y) * uu.x + (Ru.x - Eu.x) * uu.y) * Qu,
          Ju = (Ru.x * yu.y - Ru.y * yu.x + (Ru.y - yu.y) * uu.x + (yu.x - Ru.x) * uu.y) * Qu;
        return mu > 0 && Ju > 0 && mu + Ju < 2 * Ku * Qu
      }
      static Distance(uu, Ru) {
        return Math.sqrt(ru.DistanceSquared(uu, Ru))
      }
      static DistanceSquared(uu, Ru) {
        const yu = uu.x - Ru.x,
          Eu = uu.y - Ru.y;
        return yu * yu + Eu * Eu
      }
      static Center(uu, Ru) {
        return ru.CenterToRef(uu, Ru, new ru)
      }
      static CenterToRef(uu, Ru, yu) {
        return yu.muu((uu.x + Ru.x) / 2, (uu.y + Ru.y) / 2)
      }
      static DistanceOfPointFromSegment(uu, Ru, yu) {
        const Eu = ru.DistanceSquared(Ru, yu);
        if (0 === Eu) return ru.Distance(uu, Ru);
        const Ku = yu.subtract(Ru),
          Qu = Math.max(0, Math.min(1, ru.Dot(uu.subtract(Ru), Ku) / Eu)),
          mu = Ru.add(Ku.multiplyByFloats(Qu, Qu));
        return ru.Distance(uu, mu)
      }
    }
    ru._V8PerformanceHack = new ru(.5, .5), ru._ZeroReadOnly = ru.Zero();
    class Bu {
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
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = uu, this._y = Ru, this._z = yu
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "MS"
      }
      getHashCode() {
        let uu = Vu(this._x);
        return uu = 397 * uu ^ Vu(this._y), uu = 397 * uu ^ Vu(this._z), uu
      }
      AEu() {
        return [this._x, this._y, this._z]
      }
      toArray(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return uu[Ru] = this._x, uu[Ru + 1] = this._y, uu[Ru + 2] = this._z, this
      }
      Tyu(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Bu.FromArrayToRef(uu, Ru, this), this
      }
      toQuaternion() {
        return Su.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(uu) {
        return this._x += uu._x, this._y += uu._y, this._z += uu._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(uu, Ru, yu) {
        return this._x += uu, this._y += Ru, this._z += yu, this._isDirty = !0, this
      }
      add(uu) {
        return new Bu(this._x + uu._x, this._y + uu._y, this._z + uu._z)
      }
      addToRef(uu, Ru) {
        return Ru._x = this._x + uu._x, Ru._y = this._y + uu._y, Ru._z = this._z + uu._z, Ru._isDirty = !0, Ru
      }
      oEu(uu) {
        return this._x -= uu._x, this._y -= uu._y, this._z -= uu._z, this._isDirty = !0, this
      }
      subtract(uu) {
        return new Bu(this._x - uu._x, this._y - uu._y, this._z - uu._z)
      }
      subtractToRef(uu, Ru) {
        return this.subtractFromFloatsToRef(uu._x, uu._y, uu._z, Ru)
      }
      subtractFromFloats(uu, Ru, yu) {
        return new Bu(this._x - uu, this._y - Ru, this._z - yu)
      }
      subtractFromFloatsToRef(uu, Ru, yu, Eu) {
        return Eu._x = this._x - uu, Eu._y = this._y - Ru, Eu._z = this._z - yu, Eu._isDirty = !0, Eu
      }
      tm() {
        return new Bu(-this._x, -this._y, -this._z)
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
        return new Bu(this._x * uu, this._y * uu, this._z * uu)
      }
      scaleToRef(uu, Ru) {
        return Ru._x = this._x * uu, Ru._y = this._y * uu, Ru._z = this._z * uu, Ru._isDirty = !0, Ru
      }
      getNormalToRef(uu) {
        const Ru = this.length();
        let yu = Math.acos(this._y / Ru);
        const Eu = Math.atan2(this._z, this._x);
        yu > Math.PI / 2 ? yu -= Math.PI / 2 : yu += Math.PI / 2;
        const Ku = Ru * Math.sin(yu) * Math.cos(Eu),
          Qu = Ru * Math.cos(yu),
          mu = Ru * Math.sin(yu) * Math.sin(Eu);
        return uu.set(Ku, Qu, mu), uu
      }
      applyRotationQuaternionToRef(uu, Ru) {
        const yu = this._x,
          Eu = this._y,
          Ku = this._z,
          Qu = uu._x,
          mu = uu._y,
          Ju = uu._z,
          Nu = uu._w,
          Xu = 2 * (mu * Ku - Ju * Eu),
          Vu = 2 * (Ju * yu - Qu * Ku),
          ru = 2 * (Qu * Eu - mu * yu);
        return Ru._x = yu + Nu * Xu + mu * ru - Ju * Vu, Ru._y = Eu + Nu * Vu + Ju * Xu - Qu * ru, Ru._z = Ku + Nu * ru + Qu * Vu - mu * Xu, Ru._isDirty = !0, Ru
      }
      applyRotationQuaternionInPlace(uu) {
        return this.applyRotationQuaternionToRef(uu, this)
      }
      applyRotationQuaternion(uu) {
        return this.applyRotationQuaternionToRef(uu, new Bu)
      }
      scaleAndAddToRef(uu, Ru) {
        return Ru._x += this._x * uu, Ru._y += this._y * uu, Ru._z += this._z * uu, Ru._isDirty = !0, Ru
      }
      projectOnPlane(uu, Ru) {
        return this.projectOnPlaneToRef(uu, Ru, new Bu)
      }
      projectOnPlaneToRef(uu, Ru, yu) {
        const Eu = uu.normal,
          Ku = uu.d,
          Qu = Tu.MS[0];
        this.subtractToRef(Ru, Qu), Qu.normalize();
        const mu = Bu.Dot(Qu, Eu);
        if (Math.abs(mu) < 1e-10) yu.e_(1 / 0);
        else {
          const uu = -(Bu.Dot(Ru, Eu) + Ku) / mu,
            Ju = Qu.scaleInPlace(uu);
          Ru.addToRef(Ju, yu)
        }
        return yu
      }
      equals(uu) {
        return uu && this._x === uu._x && this._y === uu._y && this._z === uu._z
      }
      equalsWithEpsilon(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Eu.d;
        return uu && (0, Ju.WithinEpsilon)(this._x, uu._x, Ru) && (0, Ju.WithinEpsilon)(this._y, uu._y, Ru) && (0, Ju.WithinEpsilon)(this._z, uu._z, Ru)
      }
      amu(uu, Ru, yu) {
        return this._x === uu && this._y === Ru && this._z === yu
      }
      multiplyInPlace(uu) {
        return this._x *= uu._x, this._y *= uu._y, this._z *= uu._z, this._isDirty = !0, this
      }
      multiply(uu) {
        return this.multiplyByFloats(uu._x, uu._y, uu._z)
      }
      multiplyToRef(uu, Ru) {
        return Ru._x = this._x * uu._x, Ru._y = this._y * uu._y, Ru._z = this._z * uu._z, Ru._isDirty = !0, Ru
      }
      multiplyByFloats(uu, Ru, yu) {
        return new Bu(this._x * uu, this._y * Ru, this._z * yu)
      }
      divide(uu) {
        return new Bu(this._x / uu._x, this._y / uu._y, this._z / uu._z)
      }
      divideToRef(uu, Ru) {
        return Ru._x = this._x / uu._x, Ru._y = this._y / uu._y, Ru._z = this._z / uu._z, Ru._isDirty = !0, Ru
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
      minimizeInPlaceFromFloats(uu, Ru, yu) {
        return uu < this._x && (this.x = uu), Ru < this._y && (this.y = Ru), yu < this._z && (this.z = yu), this
      }
      maximizeInPlaceFromFloats(uu, Ru, yu) {
        return uu > this._x && (this.x = uu), Ru > this._y && (this.y = Ru), yu > this._z && (this.z = yu), this
      }
      isNonUniformWithinEpsilon(uu) {
        const Ru = Math.abs(this._x),
          yu = Math.abs(this._y);
        if (!(0, Ju.WithinEpsilon)(Ru, yu, uu)) return !0;
        const Eu = Math.abs(this._z);
        return !(0, Ju.WithinEpsilon)(Ru, Eu, uu) || !(0, Ju.WithinEpsilon)(yu, Eu, uu)
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
        return new Bu(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(uu) {
        return uu._x = this._x - Math.floor(this._x), uu._y = this._y - Math.floor(this._y), uu._z = this._z - Math.floor(this._z), uu._isDirty = !0, uu
      }
      fract() {
        return new Bu(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
        const Ru = Tu.MS[0].Oyu(this);
        return this.x = Ru[uu[0]], this.y = Ru[uu[1]], this.z = Ru[uu[2]], this
      }
      rotateByQuaternionToRef(uu, Ru) {
        return uu.toRotationMatrix(Tu.Matrix[0]), Bu.TransformCoordinatesToRef(this, Tu.Matrix[0], Ru), Ru
      }
      rotateByQuaternionAroundPointToRef(uu, Ru, yu) {
        return this.subtractToRef(Ru, Tu.MS[0]), Tu.MS[0].rotateByQuaternionToRef(uu, Tu.MS[0]), Ru.addToRef(Tu.MS[0], yu), yu
      }
      cross(uu) {
        return Bu.CrossToRef(this, uu, new Bu)
      }
      normalizeFromLength(uu) {
        return 0 === uu || 1 === uu ? this : this.scaleInPlace(1 / uu)
      }
      normalizeToNew() {
        return this.normalizeToRef(new Bu)
      }
      normalizeToRef(uu) {
        const Ru = this.length();
        return 0 === Ru || 1 === Ru ? (uu._x = this._x, uu._y = this._y, uu._z = this._z, uu._isDirty = !0, uu) : this.scaleToRef(1 / Ru, uu)
      }
      clone() {
        return new Bu(this._x, this._y, this._z)
      }
      Oyu(uu) {
        return this.muu(uu._x, uu._y, uu._z)
      }
      muu(uu, Ru, yu) {
        return this._x = uu, this._y = Ru, this._z = yu, this._isDirty = !0, this
      }
      set(uu, Ru, yu) {
        return this.muu(uu, Ru, yu)
      }
      e_(uu) {
        return this._x = this._y = this._z = uu, this._isDirty = !0, this
      }
      static GetClipFactor(uu, Ru, yu, Eu) {
        const Ku = Bu.Dot(uu, yu);
        return (Ku - Eu) / (Ku - Bu.Dot(Ru, yu))
      }
      static GetAngleBetweenVectors(uu, Ru, yu) {
        const Eu = uu.normalizeToRef(Tu.MS[1]),
          Ku = Ru.normalizeToRef(Tu.MS[2]);
        let Qu = Bu.Dot(Eu, Ku);
        Qu = (0, Ju.Clamp)(Qu, -1, 1);
        const mu = Math.acos(Qu),
          Nu = Tu.MS[3];
        return Bu.CrossToRef(Eu, Ku, Nu), Bu.Dot(Nu, yu) > 0 ? isNaN(mu) ? 0 : mu : isNaN(mu) ? -Math.PI : -Math.acos(Qu)
      }
      static GetAngleBetweenVectorsOnPlane(uu, Ru, yu) {
        Tu.MS[0].Oyu(uu);
        const Eu = Tu.MS[0];
        Tu.MS[1].Oyu(Ru);
        const Ku = Tu.MS[1];
        Tu.MS[2].Oyu(yu);
        const Qu = Tu.MS[2],
          mu = Tu.MS[3],
          Nu = Tu.MS[4];
        Eu.normalize(), Ku.normalize(), Qu.normalize(), Bu.CrossToRef(Qu, Eu, mu), Bu.CrossToRef(mu, Qu, Nu);
        const Xu = Math.atan2(Bu.Dot(Ku, mu), Bu.Dot(Ku, Nu));
        return (0, Ju.NormalizeRadians)(Xu)
      }
      static PitchYawRollToMoveBetweenPointsToRef(uu, Ru, yu) {
        const Eu = Wu.MS[0];
        return Ru.subtractToRef(uu, Eu), yu._y = Math.atan2(Eu.x, Eu.z) || 0, yu._x = Math.atan2(Math.sqrt(Eu.x ** 2 + Eu.z ** 2), Eu.y) || 0, yu._z = 0, yu._isDirty = !0, yu
      }
      static PitchYawRollToMoveBetweenPoints(uu, Ru) {
        const yu = Bu.Zero();
        return Bu.PitchYawRollToMoveBetweenPointsToRef(uu, Ru, yu)
      }
      static SlerpToRef(uu, Ru, yu, Ku) {
        yu = (0, Ju.Clamp)(yu, 0, 1);
        const Qu = Tu.MS[0],
          mu = Tu.MS[1];
        Qu.Oyu(uu);
        const Nu = Qu.length();
        Qu.normalizeFromLength(Nu), mu.Oyu(Ru);
        const Xu = mu.length();
        mu.normalizeFromLength(Xu);
        const Vu = Bu.Dot(Qu, mu);
        let ru, xu;
        if (Vu < 1 - Eu.d) {
          const uu = Math.acos(Vu),
            Ru = 1 / Math.sin(uu);
          ru = Math.sin((1 - yu) * uu) * Ru, xu = Math.sin(yu * uu) * Ru
        } else ru = 1 - yu, xu = yu;
        return Qu.scaleInPlace(ru), mu.scaleInPlace(xu), Ku.Oyu(Qu).addInPlace(mu), Ku.scaleInPlace((0, Ju.Lerp)(Nu, Xu, yu)), Ku
      }
      static SmoothToRef(uu, Ru, yu, Eu, Ku) {
        return Bu.SlerpToRef(uu, Ru, 0 === Eu ? 1 : yu / Eu, Ku), Ku
      }
      static FromArray(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Bu(uu[Ru], uu[Ru + 1], uu[Ru + 2])
      }
      static FromFloatArray(uu, Ru) {
        return Bu.FromArray(uu, Ru)
      }
      static FromArrayToRef(uu, Ru, yu) {
        return yu._x = uu[Ru], yu._y = uu[Ru + 1], yu._z = uu[Ru + 2], yu._isDirty = !0, yu
      }
      static FromFloatArrayToRef(uu, Ru, yu) {
        return Bu.FromArrayToRef(uu, Ru, yu)
      }
      static FromFloatsToRef(uu, Ru, yu, Eu) {
        return Eu.muu(uu, Ru, yu), Eu
      }
      static Zero() {
        return new Bu(0, 0, 0)
      }
      static One() {
        return new Bu(1, 1, 1)
      }
      static Up() {
        return new Bu(0, 1, 0)
      }
      static get UpReadOnly() {
        return Bu._UpReadOnly
      }
      static get DownReadOnly() {
        return Bu._DownReadOnly
      }
      static get RightReadOnly() {
        return Bu._RightReadOnly
      }
      static get LeftReadOnly() {
        return Bu._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return Bu._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return Bu._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return Bu._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return Bu._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return Bu._ZeroReadOnly
      }
      static get OneReadOnly() {
        return Bu._OneReadOnly
      }
      static Down() {
        return new Bu(0, -1, 0)
      }
      static Forward() {
        return new Bu(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new Bu(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new Bu(1, 0, 0)
      }
      static Left() {
        return new Bu(-1, 0, 0)
      }
      static Random() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Bu((0, Ju.RandomRange)(uu, Ru), (0, Ju.RandomRange)(uu, Ru), (0, Ju.RandomRange)(uu, Ru))
      }
      static RandomToRef() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).muu((0, Ju.RandomRange)(uu, Ru), (0, Ju.RandomRange)(uu, Ru), (0, Ju.RandomRange)(uu, Ru))
      }
      static TransformCoordinates(uu, Ru) {
        const yu = Bu.Zero();
        return Bu.TransformCoordinatesToRef(uu, Ru, yu), yu
      }
      static TransformCoordinatesToRef(uu, Ru, yu) {
        return Bu.TransformCoordinatesFromFloatsToRef(uu._x, uu._y, uu._z, Ru, yu), yu
      }
      static TransformCoordinatesFromFloatsToRef(uu, Ru, yu, Eu, Ku) {
        const Qu = Eu.m,
          mu = uu * Qu[0] + Ru * Qu[4] + yu * Qu[8] + Qu[12],
          Ju = uu * Qu[1] + Ru * Qu[5] + yu * Qu[9] + Qu[13],
          Nu = uu * Qu[2] + Ru * Qu[6] + yu * Qu[10] + Qu[14],
          Xu = 1 / (uu * Qu[3] + Ru * Qu[7] + yu * Qu[11] + Qu[15]);
        return Ku._x = mu * Xu, Ku._y = Ju * Xu, Ku._z = Nu * Xu, Ku._isDirty = !0, Ku
      }
      static TransformNormal(uu, Ru) {
        const yu = Bu.Zero();
        return Bu.TransformNormalToRef(uu, Ru, yu), yu
      }
      static TransformNormalToRef(uu, Ru, yu) {
        return this.TransformNormalFromFloatsToRef(uu._x, uu._y, uu._z, Ru, yu), yu
      }
      static TransformNormalFromFloatsToRef(uu, Ru, yu, Eu, Ku) {
        const Qu = Eu.m;
        return Ku._x = uu * Qu[0] + Ru * Qu[4] + yu * Qu[8], Ku._y = uu * Qu[1] + Ru * Qu[5] + yu * Qu[9], Ku._z = uu * Qu[2] + Ru * Qu[6] + yu * Qu[10], Ku._isDirty = !0, Ku
      }
      static CatmullRom(uu, Ru, yu, Eu, Ku) {
        const Qu = Ku * Ku,
          mu = Ku * Qu,
          Ju = .5 * (2 * Ru._x + (-uu._x + yu._x) * Ku + (2 * uu._x - 5 * Ru._x + 4 * yu._x - Eu._x) * Qu + (-uu._x + 3 * Ru._x - 3 * yu._x + Eu._x) * mu),
          Nu = .5 * (2 * Ru._y + (-uu._y + yu._y) * Ku + (2 * uu._y - 5 * Ru._y + 4 * yu._y - Eu._y) * Qu + (-uu._y + 3 * Ru._y - 3 * yu._y + Eu._y) * mu),
          Xu = .5 * (2 * Ru._z + (-uu._z + yu._z) * Ku + (2 * uu._z - 5 * Ru._z + 4 * yu._z - Eu._z) * Qu + (-uu._z + 3 * Ru._z - 3 * yu._z + Eu._z) * mu);
        return new Bu(Ju, Nu, Xu)
      }
      static Clamp(uu, Ru, yu) {
        const Eu = new Bu;
        return Bu.ClampToRef(uu, Ru, yu, Eu), Eu
      }
      static ClampToRef(uu, Ru, yu, Eu) {
        let Ku = uu._x;
        Ku = Ku > yu._x ? yu._x : Ku, Ku = Ku < Ru._x ? Ru._x : Ku;
        let Qu = uu._y;
        Qu = Qu > yu._y ? yu._y : Qu, Qu = Qu < Ru._y ? Ru._y : Qu;
        let mu = uu._z;
        return mu = mu > yu._z ? yu._z : mu, mu = mu < Ru._z ? Ru._z : mu, Eu.muu(Ku, Qu, mu), Eu
      }
      static CheckExtends(uu, Ru, yu) {
        Ru.minimizeInPlace(uu), yu.maximizeInPlace(uu)
      }
      static Hermite(uu, Ru, yu, Eu, Ku) {
        const Qu = Ku * Ku,
          mu = Ku * Qu,
          Ju = 2 * mu - 3 * Qu + 1,
          Nu = -2 * mu + 3 * Qu,
          Xu = mu - 2 * Qu + Ku,
          Vu = mu - Qu,
          ru = uu._x * Ju + yu._x * Nu + Ru._x * Xu + Eu._x * Vu,
          xu = uu._y * Ju + yu._y * Nu + Ru._y * Xu + Eu._y * Vu,
          Su = uu._z * Ju + yu._z * Nu + Ru._z * Xu + Eu._z * Vu;
        return new Bu(ru, xu, Su)
      }
      static Hermite1stDerivative(uu, Ru, yu, Eu, Ku) {
        const Qu = new Bu;
        return this.Hermite1stDerivativeToRef(uu, Ru, yu, Eu, Ku, Qu), Qu
      }
      static Hermite1stDerivativeToRef(uu, Ru, yu, Eu, Ku, Qu) {
        const mu = Ku * Ku;
        return Qu._x = 6 * (mu - Ku) * uu._x + (3 * mu - 4 * Ku + 1) * Ru._x + 6 * (-mu + Ku) * yu._x + (3 * mu - 2 * Ku) * Eu._x, Qu._y = 6 * (mu - Ku) * uu._y + (3 * mu - 4 * Ku + 1) * Ru._y + 6 * (-mu + Ku) * yu._y + (3 * mu - 2 * Ku) * Eu._y, Qu._z = 6 * (mu - Ku) * uu._z + (3 * mu - 4 * Ku + 1) * Ru._z + 6 * (-mu + Ku) * yu._z + (3 * mu - 2 * Ku) * Eu._z, Qu._isDirty = !0, Qu
      }
      static Lerp(uu, Ru, yu) {
        const Eu = new Bu(0, 0, 0);
        return Bu.LerpToRef(uu, Ru, yu, Eu), Eu
      }
      static LerpToRef(uu, Ru, yu, Eu) {
        return Eu._x = uu._x + (Ru._x - uu._x) * yu, Eu._y = uu._y + (Ru._y - uu._y) * yu, Eu._z = uu._z + (Ru._z - uu._z) * yu, Eu._isDirty = !0, Eu
      }
      static Dot(uu, Ru) {
        return uu._x * Ru._x + uu._y * Ru._y + uu._z * Ru._z
      }
      dot(uu) {
        return this._x * uu._x + this._y * uu._y + this._z * uu._z
      }
      static Cross(uu, Ru) {
        const yu = new Bu;
        return Bu.CrossToRef(uu, Ru, yu), yu
      }
      static CrossToRef(uu, Ru, yu) {
        const Eu = uu._y * Ru._z - uu._z * Ru._y,
          Ku = uu._z * Ru._x - uu._x * Ru._z,
          Qu = uu._x * Ru._y - uu._y * Ru._x;
        return yu.muu(Eu, Ku, Qu), yu
      }
      static Normalize(uu) {
        const Ru = Bu.Zero();
        return Bu.NormalizeToRef(uu, Ru), Ru
      }
      static NormalizeToRef(uu, Ru) {
        return uu.normalizeToRef(Ru), Ru
      }
      static Project(uu, Ru, yu, Eu) {
        const Ku = new Bu;
        return Bu.ProjectToRef(uu, Ru, yu, Eu, Ku), Ku
      }
      static ProjectToRef(uu, Ru, yu, Eu, Ku) {
        const Qu = Eu.width,
          Ju = Eu.height,
          Nu = Eu.x,
          Xu = Eu.y,
          Vu = Tu.Matrix[1],
          ru = mu.b.LastCreatedEngine?.isNDCHalfZRange,
          xu = ru ? 1 : .5,
          Su = ru ? 0 : .5;
        pu.FromValuesToRef(Qu / 2, 0, 0, 0, 0, -Ju / 2, 0, 0, 0, 0, xu, 0, Nu + Qu / 2, Ju / 2 + Xu, Su, 1, Vu);
        const Wu = Tu.Matrix[0];
        return Ru.multiplyToRef(yu, Wu), Wu.multiplyToRef(Vu, Wu), Bu.TransformCoordinatesToRef(uu, Wu, Ku), Ku
      }
      static Reflect(uu, Ru) {
        return this.ReflectToRef(uu, Ru, new Bu)
      }
      static ReflectToRef(uu, Ru, yu) {
        const Eu = Wu.MS[0];
        return Eu.Oyu(Ru).scaleInPlace(2 * Bu.Dot(uu, Ru)), yu.Oyu(uu).oEu(Eu)
      }
      static UnprojectFromTransform(uu, Ru, yu, Eu, Ku) {
        return this.Unproject(uu, Ru, yu, Eu, Ku, pu.IdentityReadOnly)
      }
      static Unproject(uu, Ru, yu, Eu, Ku, Qu) {
        const mu = new Bu;
        return Bu.UnprojectToRef(uu, Ru, yu, Eu, Ku, Qu, mu), mu
      }
      static UnprojectToRef(uu, Ru, yu, Eu, Ku, Qu, mu) {
        return Bu.UnprojectFloatsToRef(uu._x, uu._y, uu._z, Ru, yu, Eu, Ku, Qu, mu), mu
      }
      static UnprojectFloatsToRef(uu, Ru, yu, Eu, Ku, Qu, Ju, Nu, Xu) {
        const Vu = Tu.Matrix[0];
        Qu.multiplyToRef(Ju, Vu), Vu.multiplyToRef(Nu, Vu), Vu.invert();
        const ru = Tu.MS[0];
        return ru.x = uu / Eu * 2 - 1, ru.y = -(Ru / Ku * 2 - 1), mu.b.LastCreatedEngine?.isNDCHalfZRange ? ru.z = yu : ru.z = 2 * yu - 1, Bu.TransformCoordinatesToRef(ru, Vu, Xu), Xu
      }
      static Minimize(uu, Ru) {
        const yu = new Bu;
        return yu.Oyu(uu), yu.minimizeInPlace(Ru), yu
      }
      static Maximize(uu, Ru) {
        const yu = new Bu;
        return yu.Oyu(uu), yu.maximizeInPlace(Ru), yu
      }
      static Distance(uu, Ru) {
        return Math.sqrt(Bu.DistanceSquared(uu, Ru))
      }
      static DistanceSquared(uu, Ru) {
        const yu = uu._x - Ru._x,
          Eu = uu._y - Ru._y,
          Ku = uu._z - Ru._z;
        return yu * yu + Eu * Eu + Ku * Ku
      }
      static ProjectOnTriangleToRef(uu, Ru, yu, Ku, Qu) {
        const mu = Tu.MS[0],
          Nu = Tu.MS[1],
          Xu = Tu.MS[2],
          Vu = Tu.MS[3],
          ru = Tu.MS[4];
        yu.subtractToRef(Ru, mu), Ku.subtractToRef(Ru, Nu), Ku.subtractToRef(yu, Xu);
        const xu = mu.length(),
          Su = Nu.length(),
          pu = Xu.length();
        if (xu < Eu.d || Su < Eu.d || pu < Eu.d) return Qu.Oyu(Ru), Bu.Distance(uu, Ru);
        uu.subtractToRef(Ru, ru), Bu.CrossToRef(mu, Nu, Vu);
        const Wu = Vu.length();
        if (Wu < Eu.d) return Qu.Oyu(Ru), Bu.Distance(uu, Ru);
        Vu.normalizeFromLength(Wu);
        let ju = ru.length();
        if (ju < Eu.d) return Qu.Oyu(Ru), 0;
        ru.normalizeFromLength(ju);
        const Hu = Bu.Dot(Vu, ru),
          du = Tu.MS[5],
          bu = Tu.MS[6];
        du.Oyu(Vu).scaleInPlace(-ju * Hu), bu.Oyu(uu).addInPlace(du);
        const Cu = Tu.MS[4],
          ku = Tu.MS[5],
          eu = Tu.MS[7],
          Au = Tu.MS[8];
        Cu.Oyu(mu).scaleInPlace(1 / xu), Au.Oyu(Nu).scaleInPlace(1 / Su), Cu.addInPlace(Au).scaleInPlace(-1), ku.Oyu(mu).scaleInPlace(-1 / xu), Au.Oyu(Xu).scaleInPlace(1 / pu), ku.addInPlace(Au).scaleInPlace(-1), eu.Oyu(Xu).scaleInPlace(-1 / pu), Au.Oyu(Nu).scaleInPlace(-1 / Su), eu.addInPlace(Au).scaleInPlace(-1);
        const Du = Tu.MS[9];
        let Mu;
        Du.Oyu(bu).oEu(Ru), Bu.CrossToRef(Cu, Du, Au), Mu = Bu.Dot(Au, Vu);
        const Iu = Mu;
        Du.Oyu(bu).oEu(yu), Bu.CrossToRef(ku, Du, Au), Mu = Bu.Dot(Au, Vu);
        const Gu = Mu;
        Du.Oyu(bu).oEu(Ku), Bu.CrossToRef(eu, Du, Au), Mu = Bu.Dot(Au, Vu);
        const Uu = Mu,
          nu = Tu.MS[10];
        let su, tu;
        Iu > 0 && Gu < 0 ? (nu.Oyu(mu), su = Ru, tu = yu) : Gu > 0 && Uu < 0 ? (nu.Oyu(Xu), su = yu, tu = Ku) : (nu.Oyu(Nu).scaleInPlace(-1), su = Ku, tu = Ru);
        const lu = Tu.MS[9],
          gu = Tu.MS[4];
        su.subtractToRef(bu, Au), tu.subtractToRef(bu, lu), Bu.CrossToRef(Au, lu, gu);
        if (!(Bu.Dot(gu, Vu) < 0)) return Qu.Oyu(bu), Math.abs(ju * Hu);
        const cu = Tu.MS[5];
        Bu.CrossToRef(nu, gu, cu), cu.normalize();
        const Lu = Tu.MS[9];
        Lu.Oyu(su).oEu(bu);
        const zu = Lu.length();
        if (zu < Eu.d) return Qu.Oyu(su), Bu.Distance(uu, su);
        Lu.normalizeFromLength(zu);
        const Fu = Bu.Dot(cu, Lu),
          wu = Tu.MS[7];
        wu.Oyu(bu).addInPlace(cu.scaleInPlace(zu * Fu)), Au.Oyu(wu).oEu(su), ju = nu.length(), nu.normalizeFromLength(ju);
        let Zu = Bu.Dot(Au, nu) / Math.max(ju, Eu.d);
        return Zu = (0, Ju.Clamp)(Zu, 0, 1), wu.Oyu(su).addInPlace(nu.scaleInPlace(Zu * ju)), Qu.Oyu(wu), Bu.Distance(uu, wu)
      }
      static Center(uu, Ru) {
        return Bu.CenterToRef(uu, Ru, Bu.Zero())
      }
      static CenterToRef(uu, Ru, yu) {
        return yu.muu((uu._x + Ru._x) / 2, (uu._y + Ru._y) / 2, (uu._z + Ru._z) / 2)
      }
      static RotationFromAxis(uu, Ru, yu) {
        const Eu = new Bu;
        return Bu.RotationFromAxisToRef(uu, Ru, yu, Eu), Eu
      }
      static RotationFromAxisToRef(uu, Ru, yu, Eu) {
        const Ku = Tu.Quaternion[0];
        return Su.RotationQuaternionFromAxisToRef(uu, Ru, yu, Ku), Ku.toEulerAnglesToRef(Eu), Eu
      }
    }
    Bu._V8PerformanceHack = new Bu(.5, .5, .5), Bu._UpReadOnly = Bu.Up(), Bu._DownReadOnly = Bu.Down(), Bu._LeftHandedForwardReadOnly = Bu.Forward(!1), Bu._RightHandedForwardReadOnly = Bu.Forward(!0), Bu._LeftHandedBackwardReadOnly = Bu.Backward(!1), Bu._RightHandedBackwardReadOnly = Bu.Backward(!0), Bu._RightReadOnly = Bu.Right(), Bu._LeftReadOnly = Bu.Left(), Bu._ZeroReadOnly = Bu.Zero(), Bu._OneReadOnly = Bu.One();
    class xu {
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
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = uu, this._y = Ru, this._z = yu, this._w = Eu
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let uu = Vu(this._x);
        return uu = 397 * uu ^ Vu(this._y), uu = 397 * uu ^ Vu(this._z), uu = 397 * uu ^ Vu(this._w), uu
      }
      AEu() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(uu, Ru) {
        return void 0 === Ru && (Ru = 0), uu[Ru] = this._x, uu[Ru + 1] = this._y, uu[Ru + 2] = this._z, uu[Ru + 3] = this._w, this
      }
      Tyu(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return xu.FromArrayToRef(uu, Ru, this), this
      }
      addInPlace(uu) {
        return this.x += uu._x, this.y += uu._y, this.z += uu._z, this.w += uu._w, this
      }
      addInPlaceFromFloats(uu, Ru, yu, Eu) {
        return this.x += uu, this.y += Ru, this.z += yu, this.w += Eu, this
      }
      add(uu) {
        return new xu(this._x + uu.x, this._y + uu.y, this._z + uu.z, this._w + uu.w)
      }
      addToRef(uu, Ru) {
        return Ru.x = this._x + uu.x, Ru.y = this._y + uu.y, Ru.z = this._z + uu.z, Ru.w = this._w + uu.w, Ru
      }
      oEu(uu) {
        return this.x -= uu.x, this.y -= uu.y, this.z -= uu.z, this.w -= uu.w, this
      }
      subtract(uu) {
        return new xu(this._x - uu.x, this._y - uu.y, this._z - uu.z, this._w - uu.w)
      }
      subtractToRef(uu, Ru) {
        return Ru.x = this._x - uu.x, Ru.y = this._y - uu.y, Ru.z = this._z - uu.z, Ru.w = this._w - uu.w, Ru
      }
      subtractFromFloats(uu, Ru, yu, Eu) {
        return new xu(this._x - uu, this._y - Ru, this._z - yu, this._w - Eu)
      }
      subtractFromFloatsToRef(uu, Ru, yu, Eu, Ku) {
        return Ku.x = this._x - uu, Ku.y = this._y - Ru, Ku.z = this._z - yu, Ku.w = this._w - Eu, Ku
      }
      tm() {
        return new xu(-this._x, -this._y, -this._z, -this._w)
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
        return new xu(this._x * uu, this._y * uu, this._z * uu, this._w * uu)
      }
      scaleToRef(uu, Ru) {
        return Ru.x = this._x * uu, Ru.y = this._y * uu, Ru.z = this._z * uu, Ru.w = this._w * uu, Ru
      }
      scaleAndAddToRef(uu, Ru) {
        return Ru.x += this._x * uu, Ru.y += this._y * uu, Ru.z += this._z * uu, Ru.w += this._w * uu, Ru
      }
      equals(uu) {
        return uu && this._x === uu.x && this._y === uu.y && this._z === uu.z && this._w === uu.w
      }
      equalsWithEpsilon(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Eu.d;
        return uu && (0, Ju.WithinEpsilon)(this._x, uu.x, Ru) && (0, Ju.WithinEpsilon)(this._y, uu.y, Ru) && (0, Ju.WithinEpsilon)(this._z, uu.z, Ru) && (0, Ju.WithinEpsilon)(this._w, uu.w, Ru)
      }
      amu(uu, Ru, yu, Eu) {
        return this._x === uu && this._y === Ru && this._z === yu && this._w === Eu
      }
      multiplyInPlace(uu) {
        return this.x *= uu.x, this.y *= uu.y, this.z *= uu.z, this.w *= uu.w, this
      }
      multiply(uu) {
        return new xu(this._x * uu.x, this._y * uu.y, this._z * uu.z, this._w * uu.w)
      }
      multiplyToRef(uu, Ru) {
        return Ru.x = this._x * uu.x, Ru.y = this._y * uu.y, Ru.z = this._z * uu.z, Ru.w = this._w * uu.w, Ru
      }
      multiplyByFloats(uu, Ru, yu, Eu) {
        return new xu(this._x * uu, this._y * Ru, this._z * yu, this._w * Eu)
      }
      divide(uu) {
        return new xu(this._x / uu.x, this._y / uu.y, this._z / uu.z, this._w / uu.w)
      }
      divideToRef(uu, Ru) {
        return Ru.x = this._x / uu.x, Ru.y = this._y / uu.y, Ru.z = this._z / uu.z, Ru.w = this._w / uu.w, Ru
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
      minimizeInPlaceFromFloats(uu, Ru, yu, Eu) {
        return this.x = Math.min(uu, this._x), this.y = Math.min(Ru, this._y), this.z = Math.min(yu, this._z), this.w = Math.min(Eu, this._w), this
      }
      maximizeInPlaceFromFloats(uu, Ru, yu, Eu) {
        return this.x = Math.max(uu, this._x), this.y = Math.max(Ru, this._y), this.z = Math.max(yu, this._z), this.w = Math.max(Eu, this._w), this
      }
      floorToRef(uu) {
        return uu.x = Math.floor(this._x), uu.y = Math.floor(this._y), uu.z = Math.floor(this._z), uu.w = Math.floor(this._w), uu
      }
      floor() {
        return new xu(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(uu) {
        return uu.x = this._x - Math.floor(this._x), uu.y = this._y - Math.floor(this._y), uu.z = this._z - Math.floor(this._z), uu.w = this._w - Math.floor(this._w), uu
      }
      fract() {
        return new xu(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
        return this.normalizeToRef(new xu)
      }
      normalizeToRef(uu) {
        const Ru = this.length();
        return 0 === Ru || 1 === Ru ? (uu.x = this._x, uu.y = this._y, uu.z = this._z, uu.w = this._w, uu) : this.scaleToRef(1 / Ru, uu)
      }
      toVector3() {
        return new Bu(this._x, this._y, this._z)
      }
      clone() {
        return new xu(this._x, this._y, this._z, this._w)
      }
      Oyu(uu) {
        return this.x = uu.x, this.y = uu.y, this.z = uu.z, this.w = uu.w, this
      }
      muu(uu, Ru, yu, Eu) {
        return this.x = uu, this.y = Ru, this.z = yu, this.w = Eu, this
      }
      set(uu, Ru, yu, Eu) {
        return this.muu(uu, Ru, yu, Eu)
      }
      e_(uu) {
        return this.x = this.y = this.z = this.w = uu, this
      }
      dot(uu) {
        return this._x * uu.x + this._y * uu.y + this._z * uu.z + this._w * uu.w
      }
      static FromArray(uu, Ru) {
        return Ru || (Ru = 0), new xu(uu[Ru], uu[Ru + 1], uu[Ru + 2], uu[Ru + 3])
      }
      static FromArrayToRef(uu, Ru, yu) {
        return yu.x = uu[Ru], yu.y = uu[Ru + 1], yu.z = uu[Ru + 2], yu.w = uu[Ru + 3], yu
      }
      static FromFloatArrayToRef(uu, Ru, yu) {
        return xu.FromArrayToRef(uu, Ru, yu), yu
      }
      static FromFloatsToRef(uu, Ru, yu, Eu, Ku) {
        return Ku.x = uu, Ku.y = Ru, Ku.z = yu, Ku.w = Eu, Ku
      }
      static Zero() {
        return new xu(0, 0, 0, 0)
      }
      static One() {
        return new xu(1, 1, 1, 1)
      }
      static Random() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new xu((0, Ju.RandomRange)(uu, Ru), (0, Ju.RandomRange)(uu, Ru), (0, Ju.RandomRange)(uu, Ru), (0, Ju.RandomRange)(uu, Ru))
      }
      static RandomToRef() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          yu = arguments.length > 2 ? arguments[2] : void 0;
        return yu.x = (0, Ju.RandomRange)(uu, Ru), yu.y = (0, Ju.RandomRange)(uu, Ru), yu.z = (0, Ju.RandomRange)(uu, Ru), yu.w = (0, Ju.RandomRange)(uu, Ru), yu
      }
      static Clamp(uu, Ru, yu) {
        return xu.ClampToRef(uu, Ru, yu, new xu)
      }
      static ClampToRef(uu, Ru, yu, Eu) {
        return Eu.x = (0, Ju.Clamp)(uu.x, Ru.x, yu.x), Eu.y = (0, Ju.Clamp)(uu.y, Ru.y, yu.y), Eu.z = (0, Ju.Clamp)(uu.z, Ru.z, yu.z), Eu.w = (0, Ju.Clamp)(uu.w, Ru.w, yu.w), Eu
      }
      static CheckExtends(uu, Ru, yu) {
        Ru.minimizeInPlace(uu), yu.maximizeInPlace(uu)
      }
      static get ZeroReadOnly() {
        return xu._ZeroReadOnly
      }
      static Normalize(uu) {
        return xu.NormalizeToRef(uu, new xu)
      }
      static NormalizeToRef(uu, Ru) {
        return uu.normalizeToRef(Ru), Ru
      }
      static Minimize(uu, Ru) {
        const yu = new xu;
        return yu.Oyu(uu), yu.minimizeInPlace(Ru), yu
      }
      static Maximize(uu, Ru) {
        const yu = new xu;
        return yu.Oyu(uu), yu.maximizeInPlace(Ru), yu
      }
      static Distance(uu, Ru) {
        return Math.sqrt(xu.DistanceSquared(uu, Ru))
      }
      static DistanceSquared(uu, Ru) {
        const yu = uu.x - Ru.x,
          Eu = uu.y - Ru.y,
          Ku = uu.z - Ru.z,
          Qu = uu.w - Ru.w;
        return yu * yu + Eu * Eu + Ku * Ku + Qu * Qu
      }
      static Center(uu, Ru) {
        return xu.CenterToRef(uu, Ru, new xu)
      }
      static CenterToRef(uu, Ru, yu) {
        return yu.x = (uu.x + Ru.x) / 2, yu.y = (uu.y + Ru.y) / 2, yu.z = (uu.z + Ru.z) / 2, yu.w = (uu.w + Ru.w) / 2, yu
      }
      static TransformCoordinates(uu, Ru) {
        return xu.TransformCoordinatesToRef(uu, Ru, new xu)
      }
      static TransformCoordinatesToRef(uu, Ru, yu) {
        return xu.TransformCoordinatesFromFloatsToRef(uu._x, uu._y, uu._z, Ru, yu), yu
      }
      static TransformCoordinatesFromFloatsToRef(uu, Ru, yu, Eu, Ku) {
        const Qu = Eu.m,
          mu = uu * Qu[0] + Ru * Qu[4] + yu * Qu[8] + Qu[12],
          Ju = uu * Qu[1] + Ru * Qu[5] + yu * Qu[9] + Qu[13],
          Nu = uu * Qu[2] + Ru * Qu[6] + yu * Qu[10] + Qu[14],
          Xu = uu * Qu[3] + Ru * Qu[7] + yu * Qu[11] + Qu[15];
        return Ku.x = mu, Ku.y = Ju, Ku.z = Nu, Ku.w = Xu, Ku
      }
      static TransformNormal(uu, Ru) {
        return xu.TransformNormalToRef(uu, Ru, new xu)
      }
      static TransformNormalToRef(uu, Ru, yu) {
        const Eu = Ru.m,
          Ku = uu.x * Eu[0] + uu.y * Eu[4] + uu.z * Eu[8],
          Qu = uu.x * Eu[1] + uu.y * Eu[5] + uu.z * Eu[9],
          mu = uu.x * Eu[2] + uu.y * Eu[6] + uu.z * Eu[10];
        return yu.x = Ku, yu.y = Qu, yu.z = mu, yu.w = uu.w, yu
      }
      static TransformNormalFromFloatsToRef(uu, Ru, yu, Eu, Ku, Qu) {
        const mu = Ku.m;
        return Qu.x = uu * mu[0] + Ru * mu[4] + yu * mu[8], Qu.y = uu * mu[1] + Ru * mu[5] + yu * mu[9], Qu.z = uu * mu[2] + Ru * mu[6] + yu * mu[10], Qu.w = Eu, Qu
      }
      static FromVector3(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new xu(uu._x, uu._y, uu._z, Ru)
      }
      static Dot(uu, Ru) {
        return uu.x * Ru.x + uu.y * Ru.y + uu.z * Ru.z + uu.w * Ru.w
      }
    }
    xu._V8PerformanceHack = new xu(.5, .5, .5, .5), xu._ZeroReadOnly = xu.Zero();
    class Su {
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
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = uu, this._y = Ru, this._z = yu, this._w = Eu
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let uu = Vu(this._x);
        return uu = 397 * uu ^ Vu(this._y), uu = 397 * uu ^ Vu(this._z), uu = 397 * uu ^ Vu(this._w), uu
      }
      AEu() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return uu[Ru] = this._x, uu[Ru + 1] = this._y, uu[Ru + 2] = this._z, uu[Ru + 3] = this._w, this
      }
      Tyu(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Su.FromArrayToRef(uu, Ru, this)
      }
      equals(uu) {
        return uu && this._x === uu._x && this._y === uu._y && this._z === uu._z && this._w === uu._w
      }
      equalsWithEpsilon(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Eu.d;
        return uu && (0, Ju.WithinEpsilon)(this._x, uu._x, Ru) && (0, Ju.WithinEpsilon)(this._y, uu._y, Ru) && (0, Ju.WithinEpsilon)(this._z, uu._z, Ru) && (0, Ju.WithinEpsilon)(this._w, uu._w, Ru)
      }
      isApprox(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Eu.d;
        return uu && ((0, Ju.WithinEpsilon)(this._x, uu._x, Ru) && (0, Ju.WithinEpsilon)(this._y, uu._y, Ru) && (0, Ju.WithinEpsilon)(this._z, uu._z, Ru) && (0, Ju.WithinEpsilon)(this._w, uu._w, Ru) || (0, Ju.WithinEpsilon)(this._x, -uu._x, Ru) && (0, Ju.WithinEpsilon)(this._y, -uu._y, Ru) && (0, Ju.WithinEpsilon)(this._z, -uu._z, Ru) && (0, Ju.WithinEpsilon)(this._w, -uu._w, Ru))
      }
      clone() {
        return new Su(this._x, this._y, this._z, this._w)
      }
      Oyu(uu) {
        return this._x = uu._x, this._y = uu._y, this._z = uu._z, this._w = uu._w, this._isDirty = !0, this
      }
      muu(uu, Ru, yu, Eu) {
        return this._x = uu, this._y = Ru, this._z = yu, this._w = Eu, this._isDirty = !0, this
      }
      set(uu, Ru, yu, Eu) {
        return this.muu(uu, Ru, yu, Eu)
      }
      e_(uu) {
        return this.muu(uu, uu, uu, uu)
      }
      add(uu) {
        return new Su(this._x + uu._x, this._y + uu._y, this._z + uu._z, this._w + uu._w)
      }
      addInPlace(uu) {
        return this._x += uu._x, this._y += uu._y, this._z += uu._z, this._w += uu._w, this._isDirty = !0, this
      }
      addToRef(uu, Ru) {
        return Ru._x = this._x + uu._x, Ru._y = this._y + uu._y, Ru._z = this._z + uu._z, Ru._w = this._w + uu._w, Ru._isDirty = !0, Ru
      }
      addInPlaceFromFloats(uu, Ru, yu, Eu) {
        return this._x += uu, this._y += Ru, this._z += yu, this._w += Eu, this._isDirty = !0, this
      }
      subtractToRef(uu, Ru) {
        return Ru._x = this._x - uu._x, Ru._y = this._y - uu._y, Ru._z = this._z - uu._z, Ru._w = this._w - uu._w, Ru._isDirty = !0, Ru
      }
      subtractFromFloats(uu, Ru, yu, Eu) {
        return this.subtractFromFloatsToRef(uu, Ru, yu, Eu, new Su)
      }
      subtractFromFloatsToRef(uu, Ru, yu, Eu, Ku) {
        return Ku._x = this._x - uu, Ku._y = this._y - Ru, Ku._z = this._z - yu, Ku._w = this._w - Eu, Ku._isDirty = !0, Ku
      }
      subtract(uu) {
        return new Su(this._x - uu._x, this._y - uu._y, this._z - uu._z, this._w - uu._w)
      }
      oEu(uu) {
        return this._x -= uu._x, this._y -= uu._y, this._z -= uu._z, this._w -= uu._w, this._isDirty = !0, this
      }
      scale(uu) {
        return new Su(this._x * uu, this._y * uu, this._z * uu, this._w * uu)
      }
      scaleToRef(uu, Ru) {
        return Ru._x = this._x * uu, Ru._y = this._y * uu, Ru._z = this._z * uu, Ru._w = this._w * uu, Ru._isDirty = !0, Ru
      }
      scaleInPlace(uu) {
        return this._x *= uu, this._y *= uu, this._z *= uu, this._w *= uu, this._isDirty = !0, this
      }
      scaleAndAddToRef(uu, Ru) {
        return Ru._x += this._x * uu, Ru._y += this._y * uu, Ru._z += this._z * uu, Ru._w += this._w * uu, Ru._isDirty = !0, Ru
      }
      multiply(uu) {
        const Ru = new Su(0, 0, 0, 1);
        return this.multiplyToRef(uu, Ru), Ru
      }
      multiplyToRef(uu, Ru) {
        const yu = this._x * uu._w + this._y * uu._z - this._z * uu._y + this._w * uu._x,
          Eu = -this._x * uu._z + this._y * uu._w + this._z * uu._x + this._w * uu._y,
          Ku = this._x * uu._y - this._y * uu._x + this._z * uu._w + this._w * uu._z,
          Qu = -this._x * uu._x - this._y * uu._y - this._z * uu._z + this._w * uu._w;
        return Ru.muu(yu, Eu, Ku, Qu), Ru
      }
      multiplyInPlace(uu) {
        return this.multiplyToRef(uu, this)
      }
      multiplyByFloats(uu, Ru, yu, Eu) {
        return this._x *= uu, this._y *= Ru, this._z *= yu, this._w *= Eu, this._isDirty = !0, this
      }
      divide(uu) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(uu, Ru) {
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
      tm() {
        return this.negateToRef(new Su)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(uu) {
        return uu._x = -this._x, uu._y = -this._y, uu._z = -this._z, uu._w = -this._w, uu._isDirty = !0, uu
      }
      amu(uu, Ru, yu, Eu) {
        return this._x === uu && this._y === Ru && this._z === yu && this._w === Eu
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
        return uu.muu(-this._x, -this._y, -this._z, this._w), uu
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new Su(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const uu = this.conjugate(),
          Ru = this.lengthSquared();
        return 0 == Ru || 1 == Ru || uu.scaleInPlace(1 / Ru), uu
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
        const uu = new Su(0, 0, 0, 1);
        return this.normalizeToRef(uu), uu
      }
      normalizeToRef(uu) {
        const Ru = this.length();
        return 0 === Ru || 1 === Ru ? uu.muu(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / Ru, uu)
      }
      toEulerAngles() {
        const uu = Bu.Zero();
        return this.toEulerAnglesToRef(uu), uu
      }
      toEulerAnglesToRef(uu) {
        const Ru = this._z,
          yu = this._x,
          Eu = this._y,
          Ku = this._w,
          Qu = Eu * Ru - yu * Ku,
          mu = .4999999;
        if (Qu < -mu) uu._y = 2 * Math.atan2(Eu, Ku), uu._x = Math.PI / 2, uu._z = 0, uu._isDirty = !0;
        else if (Qu > mu) uu._y = 2 * Math.atan2(Eu, Ku), uu._x = -Math.PI / 2, uu._z = 0, uu._isDirty = !0;
        else {
          const mu = Ku * Ku,
            Ju = Ru * Ru,
            Nu = yu * yu,
            Xu = Eu * Eu;
          uu._z = Math.atan2(2 * (yu * Eu + Ru * Ku), -Ju - Nu + Xu + mu), uu._x = Math.asin(-2 * Qu), uu._y = Math.atan2(2 * (Ru * yu + Eu * Ku), Ju - Nu - Xu + mu), uu._isDirty = !0
        }
        return uu
      }
      toAlphaBetaGammaToRef(uu) {
        const Ru = this._z,
          yu = this._x,
          Eu = this._y,
          Ku = this._w,
          Qu = Math.sqrt(yu * yu + Eu * Eu),
          mu = Math.sqrt(Ru * Ru + Ku * Ku),
          Ju = 2 * Math.atan2(Qu, mu),
          Nu = 2 * Math.atan2(Ru, Ku),
          Xu = 2 * Math.atan2(Eu, yu),
          Vu = (Nu + Xu) / 2,
          ru = (Nu - Xu) / 2;
        return uu.set(ru, Ju, Vu), uu
      }
      toRotationMatrix(uu) {
        return pu.FromQuaternionToRef(this, uu), uu
      }
      fromRotationMatrix(uu) {
        return Su.FromRotationMatrixToRef(uu, this), this
      }
      dot(uu) {
        return this._x * uu._x + this._y * uu._y + this._z * uu._z + this._w * uu._w
      }
      toAxisAngle() {
        const uu = Bu.Zero();
        return {
          axis: uu,
          angle: this.toAxisAngleToRef(uu)
        }
      }
      toAxisAngleToRef(uu) {
        let Ru;
        const yu = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          Eu = this._w;
        return yu > 0 ? (Ru = 2 * Math.atan2(yu, Eu), uu.set(this._x / yu, this._y / yu, this._z / yu)) : (Ru = 0, uu.set(1, 0, 0)), Ru
      }
      static FromRotationMatrix(uu) {
        const Ru = new Su;
        return Su.FromRotationMatrixToRef(uu, Ru), Ru
      }
      static FromRotationMatrixToRef(uu, Ru) {
        const yu = uu.m,
          Eu = yu[0],
          Ku = yu[4],
          Qu = yu[8],
          mu = yu[1],
          Ju = yu[5],
          Nu = yu[9],
          Xu = yu[2],
          Vu = yu[6],
          ru = yu[10],
          Bu = Eu + Ju + ru;
        let xu;
        return Bu > 0 ? (xu = .5 / Math.sqrt(Bu + 1), Ru._w = .25 / xu, Ru._x = (Vu - Nu) * xu, Ru._y = (Qu - Xu) * xu, Ru._z = (mu - Ku) * xu, Ru._isDirty = !0) : Eu > Ju && Eu > ru ? (xu = 2 * Math.sqrt(1 + Eu - Ju - ru), Ru._w = (Vu - Nu) / xu, Ru._x = .25 * xu, Ru._y = (Ku + mu) / xu, Ru._z = (Qu + Xu) / xu, Ru._isDirty = !0) : Ju > ru ? (xu = 2 * Math.sqrt(1 + Ju - Eu - ru), Ru._w = (Qu - Xu) / xu, Ru._x = (Ku + mu) / xu, Ru._y = .25 * xu, Ru._z = (Nu + Vu) / xu, Ru._isDirty = !0) : (xu = 2 * Math.sqrt(1 + ru - Eu - Ju), Ru._w = (mu - Ku) / xu, Ru._x = (Qu + Xu) / xu, Ru._y = (Nu + Vu) / xu, Ru._z = .25 * xu, Ru._isDirty = !0), Ru
      }
      static Dot(uu, Ru) {
        return uu._x * Ru._x + uu._y * Ru._y + uu._z * Ru._z + uu._w * Ru._w
      }
      static AreClose(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const Eu = Su.Dot(uu, Ru);
        return 1 - Eu * Eu <= yu
      }
      static SmoothToRef(uu, Ru, yu, Eu, Ku) {
        let Qu = 0 === Eu ? 1 : yu / Eu;
        return Qu = (0, Ju.Clamp)(Qu, 0, 1), Su.SlerpToRef(uu, Ru, Qu, Ku), Ku
      }
      static Zero() {
        return new Su(0, 0, 0, 0)
      }
      static Inverse(uu) {
        return new Su(-uu._x, -uu._y, -uu._z, uu._w)
      }
      static InverseToRef(uu, Ru) {
        return Ru.set(-uu._x, -uu._y, -uu._z, uu._w), Ru
      }
      static Identity() {
        return new Su(0, 0, 0, 1)
      }
      static IsIdentity(uu) {
        return uu && 0 === uu._x && 0 === uu._y && 0 === uu._z && 1 === uu._w
      }
      static RotationAxis(uu, Ru) {
        return Su.RotationAxisToRef(uu, Ru, new Su)
      }
      static RotationAxisToRef(uu, Ru, yu) {
        yu._w = Math.cos(Ru / 2);
        const Eu = Math.sin(Ru / 2) / uu.length();
        return yu._x = uu._x * Eu, yu._y = uu._y * Eu, yu._z = uu._z * Eu, yu._isDirty = !0, yu
      }
      static FromArray(uu, Ru) {
        return Ru || (Ru = 0), new Su(uu[Ru], uu[Ru + 1], uu[Ru + 2], uu[Ru + 3])
      }
      static FromArrayToRef(uu, Ru, yu) {
        return yu._x = uu[Ru], yu._y = uu[Ru + 1], yu._z = uu[Ru + 2], yu._w = uu[Ru + 3], yu._isDirty = !0, yu
      }
      static FromFloatsToRef(uu, Ru, yu, Eu, Ku) {
        return Ku.muu(uu, Ru, yu, Eu), Ku
      }
      static FromEulerAngles(uu, Ru, yu) {
        const Eu = new Su;
        return Su.RotationYawPitchRollToRef(Ru, uu, yu, Eu), Eu
      }
      static FromEulerAnglesToRef(uu, Ru, yu, Eu) {
        return Su.RotationYawPitchRollToRef(Ru, uu, yu, Eu), Eu
      }
      static FromEulerVector(uu) {
        const Ru = new Su;
        return Su.RotationYawPitchRollToRef(uu._y, uu._x, uu._z, Ru), Ru
      }
      static FromEulerVectorToRef(uu, Ru) {
        return Su.RotationYawPitchRollToRef(uu._y, uu._x, uu._z, Ru), Ru
      }
      static FromUnitVectorsToRef(uu, Ru, yu) {
        let Ku = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Eu.d;
        const Qu = Bu.Dot(uu, Ru) + 1;
        return Qu < Ku ? Math.abs(uu.x) > Math.abs(uu.z) ? yu.set(-uu.y, uu.x, 0, 0) : yu.set(0, -uu.z, uu.y, 0) : (Bu.CrossToRef(uu, Ru, Wu.MS[0]), yu.set(Wu.MS[0].x, Wu.MS[0].y, Wu.MS[0].z, Qu)), yu.normalize()
      }
      static RotationYawPitchRoll(uu, Ru, yu) {
        const Eu = new Su;
        return Su.RotationYawPitchRollToRef(uu, Ru, yu, Eu), Eu
      }
      static RotationYawPitchRollToRef(uu, Ru, yu, Eu) {
        const Ku = .5 * yu,
          Qu = .5 * Ru,
          mu = .5 * uu,
          Ju = Math.sin(Ku),
          Nu = Math.cos(Ku),
          Xu = Math.sin(Qu),
          Vu = Math.cos(Qu),
          ru = Math.sin(mu),
          Bu = Math.cos(mu);
        return Eu._x = Bu * Xu * Nu + ru * Vu * Ju, Eu._y = ru * Vu * Nu - Bu * Xu * Ju, Eu._z = Bu * Vu * Ju - ru * Xu * Nu, Eu._w = Bu * Vu * Nu + ru * Xu * Ju, Eu._isDirty = !0, Eu
      }
      static RotationAlphaBetaGamma(uu, Ru, yu) {
        const Eu = new Su;
        return Su.RotationAlphaBetaGammaToRef(uu, Ru, yu, Eu), Eu
      }
      static RotationAlphaBetaGammaToRef(uu, Ru, yu, Eu) {
        const Ku = .5 * (yu + uu),
          Qu = .5 * (yu - uu),
          mu = .5 * Ru;
        return Eu._x = Math.cos(Qu) * Math.sin(mu), Eu._y = Math.sin(Qu) * Math.sin(mu), Eu._z = Math.sin(Ku) * Math.cos(mu), Eu._w = Math.cos(Ku) * Math.cos(mu), Eu._isDirty = !0, Eu
      }
      static RotationQuaternionFromAxis(uu, Ru, yu) {
        const Eu = new Su(0, 0, 0, 0);
        return Su.RotationQuaternionFromAxisToRef(uu, Ru, yu, Eu), Eu
      }
      static RotationQuaternionFromAxisToRef(uu, Ru, yu, Eu) {
        const Ku = Tu.Matrix[0];
        return uu = uu.normalizeToRef(Tu.MS[0]), Ru = Ru.normalizeToRef(Tu.MS[1]), yu = yu.normalizeToRef(Tu.MS[2]), pu.FromXYZAxesToRef(uu, Ru, yu, Ku), Su.FromRotationMatrixToRef(Ku, Eu), Eu
      }
      static FromLookDirectionLH(uu, Ru) {
        const yu = new Su;
        return Su.FromLookDirectionLHToRef(uu, Ru, yu), yu
      }
      static FromLookDirectionLHToRef(uu, Ru, yu) {
        const Eu = Tu.Matrix[0];
        return pu.LookDirectionLHToRef(uu, Ru, Eu), Su.FromRotationMatrixToRef(Eu, yu), yu
      }
      static FromLookDirectionRH(uu, Ru) {
        const yu = new Su;
        return Su.FromLookDirectionRHToRef(uu, Ru, yu), yu
      }
      static FromLookDirectionRHToRef(uu, Ru, yu) {
        const Eu = Tu.Matrix[0];
        return pu.LookDirectionRHToRef(uu, Ru, Eu), Su.FromRotationMatrixToRef(Eu, yu)
      }
      static Slerp(uu, Ru, yu) {
        const Eu = Su.Identity();
        return Su.SlerpToRef(uu, Ru, yu, Eu), Eu
      }
      static SlerpToRef(uu, Ru, yu, Eu) {
        let Ku, Qu, mu = uu._x * Ru._x + uu._y * Ru._y + uu._z * Ru._z + uu._w * Ru._w,
          Ju = !1;
        if (mu < 0 && (Ju = !0, mu = -mu), mu > .999999) Qu = 1 - yu, Ku = Ju ? -yu : yu;
        else {
          const uu = Math.acos(mu),
            Ru = 1 / Math.sin(uu);
          Qu = Math.sin((1 - yu) * uu) * Ru, Ku = Ju ? -Math.sin(yu * uu) * Ru : Math.sin(yu * uu) * Ru
        }
        return Eu._x = Qu * uu._x + Ku * Ru._x, Eu._y = Qu * uu._y + Ku * Ru._y, Eu._z = Qu * uu._z + Ku * Ru._z, Eu._w = Qu * uu._w + Ku * Ru._w, Eu._isDirty = !0, Eu
      }
      static Hermite(uu, Ru, yu, Eu, Ku) {
        const Qu = Ku * Ku,
          mu = Ku * Qu,
          Ju = 2 * mu - 3 * Qu + 1,
          Nu = -2 * mu + 3 * Qu,
          Xu = mu - 2 * Qu + Ku,
          Vu = mu - Qu,
          ru = uu._x * Ju + yu._x * Nu + Ru._x * Xu + Eu._x * Vu,
          Bu = uu._y * Ju + yu._y * Nu + Ru._y * Xu + Eu._y * Vu,
          xu = uu._z * Ju + yu._z * Nu + Ru._z * Xu + Eu._z * Vu,
          pu = uu._w * Ju + yu._w * Nu + Ru._w * Xu + Eu._w * Vu;
        return new Su(ru, Bu, xu, pu)
      }
      static Hermite1stDerivative(uu, Ru, yu, Eu, Ku) {
        const Qu = new Su;
        return this.Hermite1stDerivativeToRef(uu, Ru, yu, Eu, Ku, Qu), Qu
      }
      static Hermite1stDerivativeToRef(uu, Ru, yu, Eu, Ku, Qu) {
        const mu = Ku * Ku;
        return Qu._x = 6 * (mu - Ku) * uu._x + (3 * mu - 4 * Ku + 1) * Ru._x + 6 * (-mu + Ku) * yu._x + (3 * mu - 2 * Ku) * Eu._x, Qu._y = 6 * (mu - Ku) * uu._y + (3 * mu - 4 * Ku + 1) * Ru._y + 6 * (-mu + Ku) * yu._y + (3 * mu - 2 * Ku) * Eu._y, Qu._z = 6 * (mu - Ku) * uu._z + (3 * mu - 4 * Ku + 1) * Ru._z + 6 * (-mu + Ku) * yu._z + (3 * mu - 2 * Ku) * Eu._z, Qu._w = 6 * (mu - Ku) * uu._w + (3 * mu - 4 * Ku + 1) * Ru._w + 6 * (-mu + Ku) * yu._w + (3 * mu - 2 * Ku) * Eu._w, Qu._isDirty = !0, Qu
      }
      static Normalize(uu) {
        const Ru = Su.Zero();
        return Su.NormalizeToRef(uu, Ru), Ru
      }
      static NormalizeToRef(uu, Ru) {
        return uu.normalizeToRef(Ru), Ru
      }
      static Clamp(uu, Ru, yu) {
        const Eu = new Su;
        return Su.ClampToRef(uu, Ru, yu, Eu), Eu
      }
      static ClampToRef(uu, Ru, yu, Eu) {
        return Eu.muu((0, Ju.Clamp)(uu.x, Ru.x, yu.x), (0, Ju.Clamp)(uu.y, Ru.y, yu.y), (0, Ju.Clamp)(uu.z, Ru.z, yu.z), (0, Ju.Clamp)(uu.w, Ru.w, yu.w))
      }
      static Random() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Su((0, Ju.RandomRange)(uu, Ru), (0, Ju.RandomRange)(uu, Ru), (0, Ju.RandomRange)(uu, Ru), (0, Ju.RandomRange)(uu, Ru))
      }
      static RandomToRef() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).muu((0, Ju.RandomRange)(uu, Ru), (0, Ju.RandomRange)(uu, Ru), (0, Ju.RandomRange)(uu, Ru), (0, Ju.RandomRange)(uu, Ru))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(uu, Ru) {
        return Math.sqrt(Su.DistanceSquared(uu, Ru))
      }
      static DistanceSquared(uu, Ru) {
        const yu = uu.x - Ru.x,
          Eu = uu.y - Ru.y,
          Ku = uu.z - Ru.z,
          Qu = uu.w - Ru.w;
        return yu * yu + Eu * Eu + Ku * Ku + Qu * Qu
      }
      static Center(uu, Ru) {
        return Su.CenterToRef(uu, Ru, Su.Zero())
      }
      static CenterToRef(uu, Ru, yu) {
        return yu.muu((uu.x + Ru.x) / 2, (uu.y + Ru.y) / 2, (uu.z + Ru.z) / 2, (uu.w + Ru.w) / 2)
      }
    }
    Su._V8PerformanceHack = new Su(.5, .5, .5, .5);
    class pu {
      static get Use64Bits() {
        return Qu.c.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = Nu.o._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Eu = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = uu, this._isIdentity3x2 = uu || yu, this._isIdentityDirty = !this._isIdentity && Ru, this._isIdentity3x2Dirty = !this._isIdentity3x2 && Eu
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, Qu.c.MatrixTrackPrecisionChange && Qu.c.MatrixTrackedMatrices.push(this), this._m = new Qu.c.MatrixCurrentType(16), this.markAsUpdated()
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
          Ru = uu[0],
          yu = uu[1],
          Eu = uu[2],
          Ku = uu[3],
          Qu = uu[4],
          mu = uu[5],
          Ju = uu[6],
          Nu = uu[7],
          Xu = uu[8],
          Vu = uu[9],
          ru = uu[10],
          Bu = uu[11],
          xu = uu[12],
          Su = uu[13],
          pu = uu[14],
          Tu = uu[15],
          Wu = ru * Tu - pu * Bu,
          ju = Vu * Tu - Su * Bu,
          Hu = Vu * pu - Su * ru,
          du = Xu * Tu - xu * Bu,
          bu = Xu * pu - ru * xu,
          Cu = Xu * Su - xu * Vu;
        return Ru * +(mu * Wu - Ju * ju + Nu * Hu) + yu * -(Qu * Wu - Ju * du + Nu * bu) + Eu * +(Qu * ju - mu * du + Nu * Cu) + Ku * -(Qu * Hu - mu * bu + Ju * Cu)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!uu) return this._m;
        const yu = this._m;
        for (let Eu = 0; Eu < 16; Eu++) uu[Ru + Eu] = yu[Eu];
        return this
      }
      AEu() {
        return this._m
      }
      Tyu(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return pu.FromArrayToRef(uu, Ru, this)
      }
      muu() {
        for (var uu = arguments.length, Ru = new Array(uu), yu = 0; yu < uu; yu++) Ru[yu] = arguments[yu];
        return pu.FromArrayToRef(Ru, 0, this)
      }
      set() {
        const uu = this._m;
        for (let Ru = 0; Ru < 16; Ru++) uu[Ru] = Ru < 0 || arguments.length <= Ru ? void 0 : arguments[Ru];
        return this.markAsUpdated(), this
      }
      e_(uu) {
        const Ru = this._m;
        for (let yu = 0; yu < 16; yu++) Ru[yu] = uu;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return pu.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(uu) {
        const Ru = new pu;
        return this.addToRef(uu, Ru), Ru
      }
      addToRef(uu, Ru) {
        const yu = this._m,
          Eu = Ru._m,
          Ku = uu.m;
        for (let Qu = 0; Qu < 16; Qu++) Eu[Qu] = yu[Qu] + Ku[Qu];
        return Ru.markAsUpdated(), Ru
      }
      addToSelf(uu) {
        const Ru = this._m,
          yu = uu.m;
        return Ru[0] += yu[0], Ru[1] += yu[1], Ru[2] += yu[2], Ru[3] += yu[3], Ru[4] += yu[4], Ru[5] += yu[5], Ru[6] += yu[6], Ru[7] += yu[7], Ru[8] += yu[8], Ru[9] += yu[9], Ru[10] += yu[10], Ru[11] += yu[11], Ru[12] += yu[12], Ru[13] += yu[13], Ru[14] += yu[14], Ru[15] += yu[15], this.markAsUpdated(), this
      }
      addInPlace(uu) {
        const Ru = this._m,
          yu = uu.m;
        for (let Eu = 0; Eu < 16; Eu++) Ru[Eu] += yu[Eu];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const uu = this._m;
        for (let Ru = 0; Ru < 16; Ru++) uu[Ru] += Ru < 0 || arguments.length <= Ru ? void 0 : arguments[Ru];
        return this.markAsUpdated(), this
      }
      subtract(uu) {
        const Ru = this._m,
          yu = uu.m;
        for (let Eu = 0; Eu < 16; Eu++) Ru[Eu] -= yu[Eu];
        return this.markAsUpdated(), this
      }
      subtractToRef(uu, Ru) {
        const yu = this._m,
          Eu = uu.m,
          Ku = Ru._m;
        for (let Qu = 0; Qu < 16; Qu++) Ku[Qu] = yu[Qu] - Eu[Qu];
        return Ru.markAsUpdated(), Ru
      }
      oEu(uu) {
        const Ru = this._m,
          yu = uu.m;
        for (let Eu = 0; Eu < 16; Eu++) Ru[Eu] -= yu[Eu];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var uu = arguments.length, Ru = new Array(uu), yu = 0; yu < uu; yu++) Ru[yu] = arguments[yu];
        return this.subtractFromFloatsToRef(...Ru, new pu)
      }
      subtractFromFloatsToRef() {
        for (var uu = arguments.length, Ru = new Array(uu), yu = 0; yu < uu; yu++) Ru[yu] = arguments[yu];
        const Eu = Ru.pop(),
          Ku = this._m,
          Qu = Eu._m,
          mu = Ru;
        for (let Ju = 0; Ju < 16; Ju++) Qu[Ju] = Ku[Ju] - mu[Ju];
        return Eu.markAsUpdated(), Eu
      }
      invertToRef(uu) {
        return !0 === this._isIdentity ? (pu.IdentityToRef(uu), uu) : ((0, Nu.i)(this, uu.AEu()) ? uu.markAsUpdated() : uu.Oyu(this), uu)
      }
      addAtIndex(uu, Ru) {
        return this._m[uu] += Ru, this.markAsUpdated(), this
      }
      multiplyAtIndex(uu, Ru) {
        return this._m[uu] *= Ru, this.markAsUpdated(), this
      }
      setTranslationFromFloats(uu, Ru, yu) {
        return this._m[12] = uu, this._m[13] = Ru, this._m[14] = yu, this.markAsUpdated(), this
      }
      addTranslationFromFloats(uu, Ru, yu) {
        return this._m[12] += uu, this._m[13] += Ru, this._m[14] += yu, this.markAsUpdated(), this
      }
      setTranslation(uu) {
        return this.setTranslationFromFloats(uu._x, uu._y, uu._z)
      }
      getTranslation() {
        return new Bu(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(uu) {
        return uu.x = this._m[12], uu.y = this._m[13], uu.z = this._m[14], uu
      }
      removeRotationAndScaling() {
        const uu = this.m;
        return pu.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, uu[12], uu[13], uu[14], uu[15], this), this._updateIdentityStatus(0 === uu[12] && 0 === uu[13] && 0 === uu[14] && 1 === uu[15]), this
      }
      Oyu(uu) {
        uu.copyToArray(this._m);
        const Ru = uu;
        return this.updateFlag = Ru.updateFlag, this._updateIdentityStatus(Ru._isIdentity, Ru._isIdentityDirty, Ru._isIdentity3x2, Ru._isIdentity3x2Dirty), this
      }
      copyToArray(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, Nu.e)(this, uu, Ru), this
      }
      multiply(uu) {
        const Ru = new pu;
        return this.multiplyToRef(uu, Ru), Ru
      }
      multiplyInPlace(uu) {
        const Ru = this._m,
          yu = uu.m;
        for (let Eu = 0; Eu < 16; Eu++) Ru[Eu] *= yu[Eu];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const uu = this._m;
        for (let Ru = 0; Ru < 16; Ru++) uu[Ru] *= Ru < 0 || arguments.length <= Ru ? void 0 : arguments[Ru];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var uu = arguments.length, Ru = new Array(uu), yu = 0; yu < uu; yu++) Ru[yu] = arguments[yu];
        const Eu = Ru.pop(),
          Ku = this._m,
          Qu = Eu._m,
          mu = Ru;
        for (let Ju = 0; Ju < 16; Ju++) Qu[Ju] = Ku[Ju] * mu[Ju];
        return Eu.markAsUpdated(), Eu
      }
      multiplyToRef(uu, Ru) {
        return this._isIdentity ? (Ru.Oyu(uu), Ru) : uu._isIdentity ? (Ru.Oyu(this), Ru) : (this.multiplyToArray(uu, Ru._m, 0), Ru.markAsUpdated(), Ru)
      }
      multiplyToArray(uu, Ru, yu) {
        return (0, Nu.p)(this, uu, Ru, yu), this
      }
      divide(uu) {
        return this.divideToRef(uu, new pu)
      }
      divideToRef(uu, Ru) {
        const yu = this._m,
          Eu = uu.m,
          Ku = Ru._m;
        for (let Qu = 0; Qu < 16; Qu++) Ku[Qu] = yu[Qu] / Eu[Qu];
        return Ru.markAsUpdated(), Ru
      }
      divideInPlace(uu) {
        const Ru = this._m,
          yu = uu.m;
        for (let Eu = 0; Eu < 16; Eu++) Ru[Eu] /= yu[Eu];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(uu) {
        const Ru = this._m,
          yu = uu.m;
        for (let Eu = 0; Eu < 16; Eu++) Ru[Eu] = Math.min(Ru[Eu], yu[Eu]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const uu = this._m;
        for (let Ru = 0; Ru < 16; Ru++) uu[Ru] = Math.min(uu[Ru], Ru < 0 || arguments.length <= Ru ? void 0 : arguments[Ru]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(uu) {
        const Ru = this._m,
          yu = uu.m;
        for (let Eu = 0; Eu < 16; Eu++) Ru[Eu] = Math.max(Ru[Eu], yu[Eu]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const uu = this._m;
        for (let Ru = 0; Ru < 16; Ru++) uu[Ru] = Math.max(uu[Ru], Ru < 0 || arguments.length <= Ru ? void 0 : arguments[Ru]);
        return this.markAsUpdated(), this
      }
      tm() {
        return this.negateToRef(new pu)
      }
      negateInPlace() {
        const uu = this._m;
        for (let Ru = 0; Ru < 16; Ru++) uu[Ru] = -uu[Ru];
        return this.markAsUpdated(), this
      }
      negateToRef(uu) {
        const Ru = this._m,
          yu = uu._m;
        for (let Eu = 0; Eu < 16; Eu++) yu[Eu] = -Ru[Eu];
        return uu.markAsUpdated(), uu
      }
      equals(uu) {
        const Ru = uu;
        if (!Ru) return !1;
        if ((this._isIdentity || Ru._isIdentity) && !this._isIdentityDirty && !Ru._isIdentityDirty) return this._isIdentity && Ru._isIdentity;
        const yu = this.m,
          Eu = Ru.m;
        return yu[0] === Eu[0] && yu[1] === Eu[1] && yu[2] === Eu[2] && yu[3] === Eu[3] && yu[4] === Eu[4] && yu[5] === Eu[5] && yu[6] === Eu[6] && yu[7] === Eu[7] && yu[8] === Eu[8] && yu[9] === Eu[9] && yu[10] === Eu[10] && yu[11] === Eu[11] && yu[12] === Eu[12] && yu[13] === Eu[13] && yu[14] === Eu[14] && yu[15] === Eu[15]
      }
      equalsWithEpsilon(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const yu = this._m,
          Eu = uu.m;
        for (let Ku = 0; Ku < 16; Ku++)
          if (!(0, Ju.WithinEpsilon)(yu[Ku], Eu[Ku], Ru)) return !1;
        return !0
      }
      amu() {
        const uu = this._m;
        for (let Ru = 0; Ru < 16; Ru++)
          if (uu[Ru] != (Ru < 0 || arguments.length <= Ru ? void 0 : arguments[Ru])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new pu)
      }
      floorToRef(uu) {
        const Ru = this._m,
          yu = uu._m;
        for (let Eu = 0; Eu < 16; Eu++) yu[Eu] = Math.floor(Ru[Eu]);
        return uu.markAsUpdated(), uu
      }
      fract() {
        return this.fractToRef(new pu)
      }
      fractToRef(uu) {
        const Ru = this._m,
          yu = uu._m;
        for (let Eu = 0; Eu < 16; Eu++) yu[Eu] = Ru[Eu] - Math.floor(Ru[Eu]);
        return uu.markAsUpdated(), uu
      }
      clone() {
        const uu = new pu;
        return uu.Oyu(this), uu
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let uu = Vu(this._m[0]);
        for (let Ru = 1; Ru < 16; Ru++) uu = 397 * uu ^ Vu(this._m[Ru]);
        return uu
      }
      decomposeToTransformNode(uu) {
        return uu.rotationQuaternion = uu.rotationQuaternion || new Su, this.decompose(uu.pp, uu.rotationQuaternion, uu.position)
      }
      decompose(uu, Ru, yu, Eu) {
        let Ku = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return yu && yu.e_(0), uu && uu.e_(1), Ru && Ru.muu(0, 0, 0, 1), !0;
        const Qu = this._m;
        if (yu && yu.muu(Qu[12], Qu[13], Qu[14]), (uu = uu || Tu.MS[0]).x = Math.sqrt(Qu[0] * Qu[0] + Qu[1] * Qu[1] + Qu[2] * Qu[2]), uu.y = Math.sqrt(Qu[4] * Qu[4] + Qu[5] * Qu[5] + Qu[6] * Qu[6]), uu.z = Math.sqrt(Qu[8] * Qu[8] + Qu[9] * Qu[9] + Qu[10] * Qu[10]), Eu) {
          const Ru = (Ku ? Eu.absoluteScaling.x : Eu.pp.x) < 0 ? -1 : 1,
            yu = (Ku ? Eu.absoluteScaling.y : Eu.pp.y) < 0 ? -1 : 1,
            Qu = (Ku ? Eu.absoluteScaling.z : Eu.pp.z) < 0 ? -1 : 1;
          uu.x *= Ru, uu.y *= yu, uu.z *= Qu
        } else this.determinant() <= 0 && (uu.y *= -1);
        if (0 === uu._x || 0 === uu._y || 0 === uu._z) return Ru && Ru.muu(0, 0, 0, 1), !1;
        if (Ru) {
          const yu = 1 / uu._x,
            Eu = 1 / uu._y,
            Ku = 1 / uu._z;
          pu.FromValuesToRef(Qu[0] * yu, Qu[1] * yu, Qu[2] * yu, 0, Qu[4] * Eu, Qu[5] * Eu, Qu[6] * Eu, 0, Qu[8] * Ku, Qu[9] * Ku, Qu[10] * Ku, 0, 0, 0, 0, 1, Tu.Matrix[0]), Su.FromRotationMatrixToRef(Tu.Matrix[0], Ru)
        }
        return !0
      }
      getRow(uu) {
        if (uu < 0 || uu > 3) return null;
        const Ru = 4 * uu;
        return new xu(this._m[Ru + 0], this._m[Ru + 1], this._m[Ru + 2], this._m[Ru + 3])
      }
      getRowToRef(uu, Ru) {
        if (uu >= 0 && uu <= 3) {
          const yu = 4 * uu;
          Ru.x = this._m[yu + 0], Ru.y = this._m[yu + 1], Ru.z = this._m[yu + 2], Ru.w = this._m[yu + 3]
        }
        return Ru
      }
      setRow(uu, Ru) {
        return this.setRowFromFloats(uu, Ru.x, Ru.y, Ru.z, Ru.w)
      }
      transpose() {
        const uu = new pu;
        return pu.TransposeToRef(this, uu), uu
      }
      transposeToRef(uu) {
        return pu.TransposeToRef(this, uu), uu
      }
      setRowFromFloats(uu, Ru, yu, Eu, Ku) {
        if (uu < 0 || uu > 3) return this;
        const Qu = 4 * uu;
        return this._m[Qu + 0] = Ru, this._m[Qu + 1] = yu, this._m[Qu + 2] = Eu, this._m[Qu + 3] = Ku, this.markAsUpdated(), this
      }
      scale(uu) {
        const Ru = new pu;
        return this.scaleToRef(uu, Ru), Ru
      }
      scaleToRef(uu, Ru) {
        for (let yu = 0; yu < 16; yu++) Ru._m[yu] = this._m[yu] * uu;
        return Ru.markAsUpdated(), Ru
      }
      scaleAndAddToRef(uu, Ru) {
        for (let yu = 0; yu < 16; yu++) Ru._m[yu] += this._m[yu] * uu;
        return Ru.markAsUpdated(), Ru
      }
      scaleInPlace(uu) {
        const Ru = this._m;
        for (let yu = 0; yu < 16; yu++) Ru[yu] *= uu;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(uu) {
        const Ru = Tu.Matrix[0];
        this.invertToRef(Ru), Ru.transposeToRef(uu);
        const yu = uu._m;
        return pu.FromValuesToRef(yu[0], yu[1], yu[2], 0, yu[4], yu[5], yu[6], 0, yu[8], yu[9], yu[10], 0, 0, 0, 0, 1, uu), uu
      }
      getRotationMatrix() {
        const uu = new pu;
        return this.getRotationMatrixToRef(uu), uu
      }
      getRotationMatrixToRef(uu) {
        const Ru = Tu.MS[0];
        if (!this.decompose(Ru)) return pu.IdentityToRef(uu), uu;
        const yu = this._m,
          Eu = 1 / Ru._x,
          Ku = 1 / Ru._y,
          Qu = 1 / Ru._z;
        return pu.FromValuesToRef(yu[0] * Eu, yu[1] * Eu, yu[2] * Eu, 0, yu[4] * Ku, yu[5] * Ku, yu[6] * Ku, 0, yu[8] * Qu, yu[9] * Qu, yu[10] * Qu, 0, 0, 0, 0, 1, uu), uu
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
        return this.multiplyToRef(ju, this), this
      }
      static FromArray(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const yu = new pu;
        return pu.FromArrayToRef(uu, Ru, yu), yu
      }
      static FromArrayToRef(uu, Ru, yu) {
        for (let Eu = 0; Eu < 16; Eu++) yu._m[Eu] = uu[Eu + Ru];
        return yu.markAsUpdated(), yu
      }
      static FromFloat32ArrayToRefScaled(uu, Ru, yu, Eu) {
        return Eu._m[0] = uu[0 + Ru] * yu, Eu._m[1] = uu[1 + Ru] * yu, Eu._m[2] = uu[2 + Ru] * yu, Eu._m[3] = uu[3 + Ru] * yu, Eu._m[4] = uu[4 + Ru] * yu, Eu._m[5] = uu[5 + Ru] * yu, Eu._m[6] = uu[6 + Ru] * yu, Eu._m[7] = uu[7 + Ru] * yu, Eu._m[8] = uu[8 + Ru] * yu, Eu._m[9] = uu[9 + Ru] * yu, Eu._m[10] = uu[10 + Ru] * yu, Eu._m[11] = uu[11 + Ru] * yu, Eu._m[12] = uu[12 + Ru] * yu, Eu._m[13] = uu[13 + Ru] * yu, Eu._m[14] = uu[14 + Ru] * yu, Eu._m[15] = uu[15 + Ru] * yu, Eu.markAsUpdated(), Eu
      }
      static get IdentityReadOnly() {
        return pu._IdentityReadOnly
      }
      static FromValuesToRef(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu, ru, Bu, xu, Su, pu, Tu) {
        const Wu = Tu._m;
        Wu[0] = uu, Wu[1] = Ru, Wu[2] = yu, Wu[3] = Eu, Wu[4] = Ku, Wu[5] = Qu, Wu[6] = mu, Wu[7] = Ju, Wu[8] = Nu, Wu[9] = Xu, Wu[10] = Vu, Wu[11] = ru, Wu[12] = Bu, Wu[13] = xu, Wu[14] = Su, Wu[15] = pu, Tu.markAsUpdated()
      }
      static FromValues(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu, ru, Bu, xu, Su, Tu) {
        const Wu = new pu,
          ju = Wu._m;
        return ju[0] = uu, ju[1] = Ru, ju[2] = yu, ju[3] = Eu, ju[4] = Ku, ju[5] = Qu, ju[6] = mu, ju[7] = Ju, ju[8] = Nu, ju[9] = Xu, ju[10] = Vu, ju[11] = ru, ju[12] = Bu, ju[13] = xu, ju[14] = Su, ju[15] = Tu, Wu.markAsUpdated(), Wu
      }
      static Compose(uu, Ru, yu) {
        const Eu = new pu;
        return pu.ComposeToRef(uu, Ru, yu, Eu), Eu
      }
      static ComposeToRef(uu, Ru, yu, Eu) {
        const Ku = Eu._m,
          Qu = Ru._x,
          mu = Ru._y,
          Ju = Ru._z,
          Nu = Ru._w,
          Xu = Qu + Qu,
          Vu = mu + mu,
          ru = Ju + Ju,
          Bu = Qu * Xu,
          xu = Qu * Vu,
          Su = Qu * ru,
          pu = mu * Vu,
          Tu = mu * ru,
          Wu = Ju * ru,
          ju = Nu * Xu,
          Hu = Nu * Vu,
          du = Nu * ru,
          bu = uu._x,
          Cu = uu._y,
          ku = uu._z;
        return Ku[0] = (1 - (pu + Wu)) * bu, Ku[1] = (xu + du) * bu, Ku[2] = (Su - Hu) * bu, Ku[3] = 0, Ku[4] = (xu - du) * Cu, Ku[5] = (1 - (Bu + Wu)) * Cu, Ku[6] = (Tu + ju) * Cu, Ku[7] = 0, Ku[8] = (Su + Hu) * ku, Ku[9] = (Tu - ju) * ku, Ku[10] = (1 - (Bu + pu)) * ku, Ku[11] = 0, Ku[12] = yu._x, Ku[13] = yu._y, Ku[14] = yu._z, Ku[15] = 1, Eu.markAsUpdated(), Eu
      }
      static Identity() {
        const uu = pu.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return uu._updateIdentityStatus(!0), uu
      }
      static IdentityToRef(uu) {
        return pu.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, uu), uu._updateIdentityStatus(!0), uu
      }
      static Zero() {
        const uu = pu.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return uu._updateIdentityStatus(!1), uu
      }
      static RotationX(uu) {
        const Ru = new pu;
        return pu.RotationXToRef(uu, Ru), Ru
      }
      static Invert(uu) {
        const Ru = new pu;
        return uu.invertToRef(Ru), Ru
      }
      static RotationXToRef(uu, Ru) {
        const yu = Math.sin(uu),
          Eu = Math.cos(uu);
        return pu.FromValuesToRef(1, 0, 0, 0, 0, Eu, yu, 0, 0, -yu, Eu, 0, 0, 0, 0, 1, Ru), Ru._updateIdentityStatus(1 === Eu && 0 === yu), Ru
      }
      static RotationY(uu) {
        const Ru = new pu;
        return pu.RotationYToRef(uu, Ru), Ru
      }
      static RotationYToRef(uu, Ru) {
        const yu = Math.sin(uu),
          Eu = Math.cos(uu);
        return pu.FromValuesToRef(Eu, 0, -yu, 0, 0, 1, 0, 0, yu, 0, Eu, 0, 0, 0, 0, 1, Ru), Ru._updateIdentityStatus(1 === Eu && 0 === yu), Ru
      }
      static RotationZ(uu) {
        const Ru = new pu;
        return pu.RotationZToRef(uu, Ru), Ru
      }
      static RotationZToRef(uu, Ru) {
        const yu = Math.sin(uu),
          Eu = Math.cos(uu);
        return pu.FromValuesToRef(Eu, yu, 0, 0, -yu, Eu, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, Ru), Ru._updateIdentityStatus(1 === Eu && 0 === yu), Ru
      }
      static RotationAxis(uu, Ru) {
        const yu = new pu;
        return pu.RotationAxisToRef(uu, Ru, yu), yu
      }
      static RotationAxisToRef(uu, Ru, yu) {
        const Eu = Math.sin(-Ru),
          Ku = Math.cos(-Ru),
          Qu = 1 - Ku;
        uu = uu.normalizeToRef(Tu.MS[0]);
        const mu = yu._m;
        return mu[0] = uu._x * uu._x * Qu + Ku, mu[1] = uu._x * uu._y * Qu - uu._z * Eu, mu[2] = uu._x * uu._z * Qu + uu._y * Eu, mu[3] = 0, mu[4] = uu._y * uu._x * Qu + uu._z * Eu, mu[5] = uu._y * uu._y * Qu + Ku, mu[6] = uu._y * uu._z * Qu - uu._x * Eu, mu[7] = 0, mu[8] = uu._z * uu._x * Qu - uu._y * Eu, mu[9] = uu._z * uu._y * Qu + uu._x * Eu, mu[10] = uu._z * uu._z * Qu + Ku, mu[11] = 0, mu[12] = 0, mu[13] = 0, mu[14] = 0, mu[15] = 1, yu.markAsUpdated(), yu
      }
      static RotationAlignToRef(uu, Ru, yu) {
        let Ku = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Qu = Bu.Dot(Ru, uu),
          mu = yu._m;
        if (Qu < -1 + Eu.d) mu[0] = -1, mu[1] = 0, mu[2] = 0, mu[3] = 0, mu[4] = 0, mu[5] = Ku ? 1 : -1, mu[6] = 0, mu[7] = 0, mu[8] = 0, mu[9] = 0, mu[10] = Ku ? -1 : 1, mu[11] = 0;
        else {
          const yu = Bu.Cross(Ru, uu),
            Eu = 1 / (1 + Qu);
          mu[0] = yu._x * yu._x * Eu + Qu, mu[1] = yu._y * yu._x * Eu - yu._z, mu[2] = yu._z * yu._x * Eu + yu._y, mu[3] = 0, mu[4] = yu._x * yu._y * Eu + yu._z, mu[5] = yu._y * yu._y * Eu + Qu, mu[6] = yu._z * yu._y * Eu - yu._x, mu[7] = 0, mu[8] = yu._x * yu._z * Eu - yu._y, mu[9] = yu._y * yu._z * Eu + yu._x, mu[10] = yu._z * yu._z * Eu + Qu, mu[11] = 0
        }
        return mu[12] = 0, mu[13] = 0, mu[14] = 0, mu[15] = 1, yu.markAsUpdated(), yu
      }
      static RotationYawPitchRoll(uu, Ru, yu) {
        const Eu = new pu;
        return pu.RotationYawPitchRollToRef(uu, Ru, yu, Eu), Eu
      }
      static RotationYawPitchRollToRef(uu, Ru, yu, Eu) {
        return Su.RotationYawPitchRollToRef(uu, Ru, yu, Tu.Quaternion[0]), Tu.Quaternion[0].toRotationMatrix(Eu), Eu
      }
      static Scaling(uu, Ru, yu) {
        const Eu = new pu;
        return pu.ScalingToRef(uu, Ru, yu, Eu), Eu
      }
      static ScalingToRef(uu, Ru, yu, Eu) {
        return pu.FromValuesToRef(uu, 0, 0, 0, 0, Ru, 0, 0, 0, 0, yu, 0, 0, 0, 0, 1, Eu), Eu._updateIdentityStatus(1 === uu && 1 === Ru && 1 === yu), Eu
      }
      static Translation(uu, Ru, yu) {
        const Eu = new pu;
        return pu.TranslationToRef(uu, Ru, yu, Eu), Eu
      }
      static TranslationToRef(uu, Ru, yu, Eu) {
        return pu.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, uu, Ru, yu, 1, Eu), Eu._updateIdentityStatus(0 === uu && 0 === Ru && 0 === yu), Eu
      }
      static Lerp(uu, Ru, yu) {
        const Eu = new pu;
        return pu.LerpToRef(uu, Ru, yu, Eu), Eu
      }
      static LerpToRef(uu, Ru, yu, Eu) {
        const Ku = Eu._m,
          Qu = uu.m,
          mu = Ru.m;
        for (let Ju = 0; Ju < 16; Ju++) Ku[Ju] = Qu[Ju] * (1 - yu) + mu[Ju] * yu;
        return Eu.markAsUpdated(), Eu
      }
      static DecomposeLerp(uu, Ru, yu) {
        const Eu = new pu;
        return pu.DecomposeLerpToRef(uu, Ru, yu, Eu), Eu
      }
      static DecomposeLerpToRef(uu, Ru, yu, Eu) {
        const Ku = Tu.MS[0],
          Qu = Tu.Quaternion[0],
          mu = Tu.MS[1];
        uu.decompose(Ku, Qu, mu);
        const Ju = Tu.MS[2],
          Nu = Tu.Quaternion[1],
          Xu = Tu.MS[3];
        Ru.decompose(Ju, Nu, Xu);
        const Vu = Tu.MS[4];
        Bu.LerpToRef(Ku, Ju, yu, Vu);
        const ru = Tu.Quaternion[2];
        Su.SlerpToRef(Qu, Nu, yu, ru);
        const xu = Tu.MS[5];
        return Bu.LerpToRef(mu, Xu, yu, xu), pu.ComposeToRef(Vu, ru, xu, Eu), Eu
      }
      static LookAtLH(uu, Ru, yu) {
        const Eu = new pu;
        return pu.LookAtLHToRef(uu, Ru, yu, Eu), Eu
      }
      static LookAtLHToRef(uu, Ru, yu, Eu) {
        const Ku = Tu.MS[0],
          Qu = Tu.MS[1],
          mu = Tu.MS[2];
        Ru.subtractToRef(uu, mu), mu.normalize(), Bu.CrossToRef(yu, mu, Ku);
        const Ju = Ku.lengthSquared();
        0 === Ju ? Ku.x = 1 : Ku.normalizeFromLength(Math.sqrt(Ju)), Bu.CrossToRef(mu, Ku, Qu), Qu.normalize();
        const Nu = -Bu.Dot(Ku, uu),
          Xu = -Bu.Dot(Qu, uu),
          Vu = -Bu.Dot(mu, uu);
        return pu.FromValuesToRef(Ku._x, Qu._x, mu._x, 0, Ku._y, Qu._y, mu._y, 0, Ku._z, Qu._z, mu._z, 0, Nu, Xu, Vu, 1, Eu), Eu
      }
      static LookAtRH(uu, Ru, yu) {
        const Eu = new pu;
        return pu.LookAtRHToRef(uu, Ru, yu, Eu), Eu
      }
      static LookAtRHToRef(uu, Ru, yu, Eu) {
        const Ku = Tu.MS[0],
          Qu = Tu.MS[1],
          mu = Tu.MS[2];
        uu.subtractToRef(Ru, mu), mu.normalize(), Bu.CrossToRef(yu, mu, Ku);
        const Ju = Ku.lengthSquared();
        0 === Ju ? Ku.x = 1 : Ku.normalizeFromLength(Math.sqrt(Ju)), Bu.CrossToRef(mu, Ku, Qu), Qu.normalize();
        const Nu = -Bu.Dot(Ku, uu),
          Xu = -Bu.Dot(Qu, uu),
          Vu = -Bu.Dot(mu, uu);
        return pu.FromValuesToRef(Ku._x, Qu._x, mu._x, 0, Ku._y, Qu._y, mu._y, 0, Ku._z, Qu._z, mu._z, 0, Nu, Xu, Vu, 1, Eu), Eu
      }
      static LookDirectionLH(uu, Ru) {
        const yu = new pu;
        return pu.LookDirectionLHToRef(uu, Ru, yu), yu
      }
      static LookDirectionLHToRef(uu, Ru, yu) {
        const Eu = Tu.MS[0];
        Eu.Oyu(uu), Eu.scaleInPlace(-1);
        const Ku = Tu.MS[1];
        return Bu.CrossToRef(Ru, Eu, Ku), pu.FromValuesToRef(Ku._x, Ku._y, Ku._z, 0, Ru._x, Ru._y, Ru._z, 0, Eu._x, Eu._y, Eu._z, 0, 0, 0, 0, 1, yu), yu
      }
      static LookDirectionRH(uu, Ru) {
        const yu = new pu;
        return pu.LookDirectionRHToRef(uu, Ru, yu), yu
      }
      static LookDirectionRHToRef(uu, Ru, yu) {
        const Eu = Tu.MS[2];
        return Bu.CrossToRef(Ru, uu, Eu), pu.FromValuesToRef(Eu._x, Eu._y, Eu._z, 0, Ru._x, Ru._y, Ru._z, 0, uu._x, uu._y, uu._z, 0, 0, 0, 0, 1, yu), yu
      }
      static OrthoLH(uu, Ru, yu, Eu, Ku) {
        const Qu = new pu;
        return pu.OrthoLHToRef(uu, Ru, yu, Eu, Qu, Ku), Qu
      }
      static OrthoLHToRef(uu, Ru, yu, Eu, Ku, Qu) {
        const mu = 2 / uu,
          Ju = 2 / Ru,
          Nu = 2 / (Eu - yu),
          Xu = -(Eu + yu) / (Eu - yu);
        return pu.FromValuesToRef(mu, 0, 0, 0, 0, Ju, 0, 0, 0, 0, Nu, 0, 0, 0, Xu, 1, Ku), Qu && Ku.multiplyToRef(ju, Ku), Ku._updateIdentityStatus(1 === mu && 1 === Ju && 1 === Nu && 0 === Xu), Ku
      }
      static OrthoOffCenterLH(uu, Ru, yu, Eu, Ku, Qu, mu) {
        const Ju = new pu;
        return pu.OrthoOffCenterLHToRef(uu, Ru, yu, Eu, Ku, Qu, Ju, mu), Ju
      }
      static OrthoOffCenterLHToRef(uu, Ru, yu, Eu, Ku, Qu, mu, Ju) {
        const Nu = 2 / (Ru - uu),
          Xu = 2 / (Eu - yu),
          Vu = 2 / (Qu - Ku),
          ru = -(Qu + Ku) / (Qu - Ku),
          Bu = (uu + Ru) / (uu - Ru),
          xu = (Eu + yu) / (yu - Eu);
        return pu.FromValuesToRef(Nu, 0, 0, 0, 0, Xu, 0, 0, 0, 0, Vu, 0, Bu, xu, ru, 1, mu), Ju && mu.multiplyToRef(ju, mu), mu.markAsUpdated(), mu
      }
      static ObliqueOffCenterLHToRef(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu) {
        const ru = -mu * Math.cos(Ju),
          Bu = -mu * Math.sin(Ju);
        return pu.TranslationToRef(0, 0, -Nu, Tu.Matrix[1]), pu.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, ru, Bu, 1, 0, 0, 0, 0, 1, Tu.Matrix[0]), Tu.Matrix[1].multiplyToRef(Tu.Matrix[0], Tu.Matrix[0]), pu.TranslationToRef(0, 0, Nu, Tu.Matrix[1]), Tu.Matrix[0].multiplyToRef(Tu.Matrix[1], Tu.Matrix[0]), pu.OrthoOffCenterLHToRef(uu, Ru, yu, Eu, Ku, Qu, Xu, Vu), Tu.Matrix[0].multiplyToRef(Xu, Xu), Xu
      }
      static OrthoOffCenterRH(uu, Ru, yu, Eu, Ku, Qu, mu) {
        const Ju = new pu;
        return pu.OrthoOffCenterRHToRef(uu, Ru, yu, Eu, Ku, Qu, Ju, mu), Ju
      }
      static OrthoOffCenterRHToRef(uu, Ru, yu, Eu, Ku, Qu, mu, Ju) {
        return pu.OrthoOffCenterLHToRef(uu, Ru, yu, Eu, Ku, Qu, mu, Ju), mu._m[10] *= -1, mu
      }
      static ObliqueOffCenterRHToRef(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu) {
        const ru = mu * Math.cos(Ju),
          Bu = mu * Math.sin(Ju);
        return pu.TranslationToRef(0, 0, Nu, Tu.Matrix[1]), pu.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, ru, Bu, 1, 0, 0, 0, 0, 1, Tu.Matrix[0]), Tu.Matrix[1].multiplyToRef(Tu.Matrix[0], Tu.Matrix[0]), pu.TranslationToRef(0, 0, -Nu, Tu.Matrix[1]), Tu.Matrix[0].multiplyToRef(Tu.Matrix[1], Tu.Matrix[0]), pu.OrthoOffCenterRHToRef(uu, Ru, yu, Eu, Ku, Qu, Xu, Vu), Tu.Matrix[0].multiplyToRef(Xu, Xu), Xu
      }
      static PerspectiveLH(uu, Ru, yu, Eu, Ku) {
        let Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const mu = new pu,
          Ju = 2 * yu / uu,
          Nu = 2 * yu / Ru,
          Xu = (Eu + yu) / (Eu - yu),
          Vu = -2 * Eu * yu / (Eu - yu),
          ru = Math.tan(Qu);
        return pu.FromValuesToRef(Ju, 0, 0, 0, 0, Nu, 0, ru, 0, 0, Xu, 1, 0, 0, Vu, 0, mu), Ku && mu.multiplyToRef(ju, mu), mu._updateIdentityStatus(!1), mu
      }
      static PerspectiveFovLH(uu, Ru, yu, Eu, Ku) {
        let Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          mu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const Ju = new pu;
        return pu.PerspectiveFovLHToRef(uu, Ru, yu, Eu, Ju, !0, Ku, Qu, mu), Ju
      }
      static PerspectiveFovLHToRef(uu, Ru, yu, Eu, Ku) {
        let Qu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          mu = arguments.length > 6 ? arguments[6] : void 0,
          Ju = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          Nu = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Xu = yu,
          Vu = Eu,
          ru = 1 / Math.tan(.5 * uu),
          Bu = Qu ? ru / Ru : ru,
          xu = Qu ? ru : ru * Ru,
          Su = Nu && 0 === Xu ? -1 : 0 !== Vu ? (Vu + Xu) / (Vu - Xu) : 1,
          Tu = Nu && 0 === Xu ? 2 * Vu : 0 !== Vu ? -2 * Vu * Xu / (Vu - Xu) : -2 * Xu,
          Wu = Math.tan(Ju);
        return pu.FromValuesToRef(Bu, 0, 0, 0, 0, xu, 0, Wu, 0, 0, Su, 1, 0, 0, Tu, 0, Ku), mu && Ku.multiplyToRef(ju, Ku), Ku._updateIdentityStatus(!1), Ku
      }
      static PerspectiveFovReverseLHToRef(uu, Ru, yu, Eu, Ku) {
        let Qu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          mu = arguments.length > 6 ? arguments[6] : void 0,
          Ju = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const Nu = 1 / Math.tan(.5 * uu),
          Xu = Qu ? Nu / Ru : Nu,
          Vu = Qu ? Nu : Nu * Ru,
          ru = Math.tan(Ju);
        return pu.FromValuesToRef(Xu, 0, 0, 0, 0, Vu, 0, ru, 0, 0, -yu, 1, 0, 0, 1, 0, Ku), mu && Ku.multiplyToRef(ju, Ku), Ku._updateIdentityStatus(!1), Ku
      }
      static PerspectiveFovRH(uu, Ru, yu, Eu, Ku) {
        let Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          mu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const Ju = new pu;
        return pu.PerspectiveFovRHToRef(uu, Ru, yu, Eu, Ju, !0, Ku, Qu, mu), Ju
      }
      static PerspectiveFovRHToRef(uu, Ru, yu, Eu, Ku) {
        let Qu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          mu = arguments.length > 6 ? arguments[6] : void 0,
          Ju = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          Nu = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Xu = yu,
          Vu = Eu,
          ru = 1 / Math.tan(.5 * uu),
          Bu = Qu ? ru / Ru : ru,
          xu = Qu ? ru : ru * Ru,
          Su = Nu && 0 === Xu ? 1 : 0 !== Vu ? -(Vu + Xu) / (Vu - Xu) : -1,
          Tu = Nu && 0 === Xu ? 2 * Vu : 0 !== Vu ? -2 * Vu * Xu / (Vu - Xu) : -2 * Xu,
          Wu = Math.tan(Ju);
        return pu.FromValuesToRef(Bu, 0, 0, 0, 0, xu, 0, Wu, 0, 0, Su, -1, 0, 0, Tu, 0, Ku), mu && Ku.multiplyToRef(ju, Ku), Ku._updateIdentityStatus(!1), Ku
      }
      static PerspectiveFovReverseRHToRef(uu, Ru, yu, Eu, Ku) {
        let Qu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          mu = arguments.length > 6 ? arguments[6] : void 0,
          Ju = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const Nu = 1 / Math.tan(.5 * uu),
          Xu = Qu ? Nu / Ru : Nu,
          Vu = Qu ? Nu : Nu * Ru,
          ru = Math.tan(Ju);
        return pu.FromValuesToRef(Xu, 0, 0, 0, 0, Vu, 0, ru, 0, 0, -yu, -1, 0, 0, -1, 0, Ku), mu && Ku.multiplyToRef(ju, Ku), Ku._updateIdentityStatus(!1), Ku
      }
      static GetFinalMatrix(uu, Ru, yu, Eu, Ku, Qu) {
        const mu = uu.width,
          Ju = uu.height,
          Nu = uu.x,
          Xu = uu.y,
          Vu = pu.FromValues(mu / 2, 0, 0, 0, 0, -Ju / 2, 0, 0, 0, 0, Qu - Ku, 0, Nu + mu / 2, Ju / 2 + Xu, Ku, 1),
          ru = new pu;
        return Ru.multiplyToRef(yu, ru), ru.multiplyToRef(Eu, ru), ru.multiplyToRef(Vu, ru)
      }
      static GetAsMatrix2x2(uu) {
        const Ru = uu.m,
          yu = [Ru[0], Ru[1], Ru[4], Ru[5]];
        return Qu.c.MatrixUse64Bits ? yu : new Float32Array(yu)
      }
      static GetAsMatrix3x3(uu) {
        const Ru = uu.m,
          yu = [Ru[0], Ru[1], Ru[2], Ru[4], Ru[5], Ru[6], Ru[8], Ru[9], Ru[10]];
        return Qu.c.MatrixUse64Bits ? yu : new Float32Array(yu)
      }
      static Transpose(uu) {
        const Ru = new pu;
        return pu.TransposeToRef(uu, Ru), Ru
      }
      static TransposeToRef(uu, Ru) {
        const yu = uu.m,
          Eu = yu[0],
          Ku = yu[4],
          Qu = yu[8],
          mu = yu[12],
          Ju = yu[1],
          Nu = yu[5],
          Xu = yu[9],
          Vu = yu[13],
          ru = yu[2],
          Bu = yu[6],
          xu = yu[10],
          Su = yu[14],
          pu = yu[3],
          Tu = yu[7],
          Wu = yu[11],
          ju = yu[15],
          Hu = Ru._m;
        return Hu[0] = Eu, Hu[1] = Ku, Hu[2] = Qu, Hu[3] = mu, Hu[4] = Ju, Hu[5] = Nu, Hu[6] = Xu, Hu[7] = Vu, Hu[8] = ru, Hu[9] = Bu, Hu[10] = xu, Hu[11] = Su, Hu[12] = pu, Hu[13] = Tu, Hu[14] = Wu, Hu[15] = ju, Ru.markAsUpdated(), Ru._updateIdentityStatus(uu._isIdentity, uu._isIdentityDirty), Ru
      }
      static Reflection(uu) {
        const Ru = new pu;
        return pu.ReflectionToRef(uu, Ru), Ru
      }
      static ReflectionToRef(uu, Ru) {
        uu.normalize();
        const yu = uu.normal.x,
          Eu = uu.normal.y,
          Ku = uu.normal.z,
          Qu = -2 * yu,
          mu = -2 * Eu,
          Ju = -2 * Ku;
        return pu.FromValuesToRef(Qu * yu + 1, mu * yu, Ju * yu, 0, Qu * Eu, mu * Eu + 1, Ju * Eu, 0, Qu * Ku, mu * Ku, Ju * Ku + 1, 0, Qu * uu.d, mu * uu.d, Ju * uu.d, 1, Ru), Ru
      }
      static FromXYZAxesToRef(uu, Ru, yu, Eu) {
        return pu.FromValuesToRef(uu._x, uu._y, uu._z, 0, Ru._x, Ru._y, Ru._z, 0, yu._x, yu._y, yu._z, 0, 0, 0, 0, 1, Eu), Eu
      }
      static FromQuaternionToRef(uu, Ru) {
        const yu = uu._x * uu._x,
          Eu = uu._y * uu._y,
          Ku = uu._z * uu._z,
          Qu = uu._x * uu._y,
          mu = uu._z * uu._w,
          Ju = uu._z * uu._x,
          Nu = uu._y * uu._w,
          Xu = uu._y * uu._z,
          Vu = uu._x * uu._w;
        return Ru._m[0] = 1 - 2 * (Eu + Ku), Ru._m[1] = 2 * (Qu + mu), Ru._m[2] = 2 * (Ju - Nu), Ru._m[3] = 0, Ru._m[4] = 2 * (Qu - mu), Ru._m[5] = 1 - 2 * (Ku + yu), Ru._m[6] = 2 * (Xu + Vu), Ru._m[7] = 0, Ru._m[8] = 2 * (Ju + Nu), Ru._m[9] = 2 * (Xu - Vu), Ru._m[10] = 1 - 2 * (Eu + yu), Ru._m[11] = 0, Ru._m[12] = 0, Ru._m[13] = 0, Ru._m[14] = 0, Ru._m[15] = 1, Ru.markAsUpdated(), Ru
      }
    }
    pu._IdentityReadOnly = pu.Identity();
    class Tu {}
    Tu.MS = (0, Ku.c)(11, Bu.Zero), Tu.Matrix = (0, Ku.c)(2, pu.Identity), Tu.Quaternion = (0, Ku.c)(3, Su.Zero);
    class Wu {}
    Wu.Vector2 = (0, Ku.c)(3, ru.Zero), Wu.MS = (0, Ku.c)(13, Bu.Zero), Wu.Vector4 = (0, Ku.c)(3, xu.Zero), Wu.Quaternion = (0, Ku.c)(3, Su.Zero), Wu.Matrix = (0, Ku.c)(8, pu.Identity);
    const ju = pu.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let Hu = !1;

    function du() {
      Hu || (Hu = !0, Object.defineProperties(ru.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Bu.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(xu.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Su.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(pu.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, Xu.c)("BABYLON.Vector2", ru), (0, Xu.c)("BABYLON.Vector3", Bu), (0, Xu.c)("BABYLON.Vector4", xu), (0, Xu.c)("BABYLON.Matrix", pu))
    }
  },
  36858: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu
    });
    const Eu = "undefined" !== typeof WeakRef;
    class Ku {
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          yu = arguments.length > 2 ? arguments[2] : void 0,
          Eu = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(uu, Ru, yu, Eu)
      }
      initialize(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          yu = arguments.length > 2 ? arguments[2] : void 0,
          Eu = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = uu, this.skipNextObservers = Ru, this.target = yu, this.currentTarget = Eu, this
      }
    }
    class Qu {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = uu, this.mask = Ru, this.scope = yu, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(uu)
      }
    }
    class mu {
      static FromPromise(uu, Ru) {
        const yu = new mu;
        return uu.then((uu => {
          yu.notifyObservers(uu)
        })).catch((uu => {
          if (!Ru) throw uu;
          Ru.notifyObservers(uu)
        })), yu
      }
      get observers() {
        return this._observers
      }
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = Ru, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new Ku(0), uu && (this._onObserverAdded = uu)
      }
      add(uu) {
        let Ru = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          yu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!uu) return null;
        const Ku = new Qu(uu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        Ku.unregisterOnNextCall = yu, Ru ? this._observers.unshift(Ku) : this._observers.push(Ku), this._onObserverAdded && this._onObserverAdded(Ku), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(Ku, this._lastNotifiedValue);
        const mu = Eu ? new WeakRef(this) : {
          deref: () => this
        };
        return Ku._remove = function() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const Ru = mu.deref();
          Ru && (uu ? Ru.remove(Ku) : Ru._remove(Ku))
        }, Ku
      }
      addOnce(uu) {
        return this.add(uu, void 0, void 0, void 0, !0)
      }
      remove(uu) {
        if (!uu) return !1;
        uu._remove = null;
        return -1 !== this._observers.indexOf(uu) && (this._deferUnregister(uu), !0)
      }
      removeCallback(uu, Ru) {
        for (let yu = 0; yu < this._observers.length; yu++) {
          const Eu = this._observers[yu];
          if (!Eu._willBeUnregistered && (Eu.callback === uu && (!Ru || Ru === Eu.scope))) return this._deferUnregister(Eu), !0
        }
        return !1
      }
      _deferUnregister(uu) {
        uu._willBeUnregistered || (this._numObserversMarkedAsDeleted++, uu.unregisterOnNextCall = !1, uu._willBeUnregistered = !0, setTimeout((() => {
          this._remove(uu)
        }), 0))
      }
      _remove(uu) {
        let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!uu) return !1;
        const yu = this._observers.indexOf(uu);
        return -1 !== yu && (Ru && this._numObserversMarkedAsDeleted--, this._observers.splice(yu, 1), !0)
      }
      makeObserverTopPriority(uu) {
        this._remove(uu, !1), this._observers.unshift(uu)
      }
      makeObserverBottomPriority(uu) {
        this._remove(uu, !1), this._observers.push(uu)
      }
      notifyObservers(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          yu = arguments.length > 2 ? arguments[2] : void 0,
          Eu = arguments.length > 3 ? arguments[3] : void 0,
          Ku = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = uu), !this._observers.length) return !0;
        const Qu = this._eventState;
        Qu.mask = Ru, Qu.target = yu, Qu.currentTarget = Eu, Qu.skipNextObservers = !1, Qu.lastReturnValue = uu, Qu.userInfo = Ku;
        for (const mu of this._observers)
          if (!mu._willBeUnregistered && (mu.mask & Ru && (mu.unregisterOnNextCall && this._deferUnregister(mu), mu.scope ? Qu.lastReturnValue = mu.callback.apply(mu.scope, [uu, Qu]) : Qu.lastReturnValue = mu.callback(uu, Qu)), Qu.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = Ru), uu._willBeUnregistered) return;
        const Eu = this._eventState;
        Eu.mask = yu, Eu.skipNextObservers = !1, uu.unregisterOnNextCall && this._deferUnregister(uu), uu.callback(Ru, Eu)
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
        const uu = new mu;
        return uu._observers = this._observers.slice(0), uu
      }
      hasSpecificMask() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const Ru of this._observers)
          if (Ru.mask & uu || Ru.mask === uu) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);