export const id = 226;
export const ids = [226];
export const modules = {
  36615: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Sv
    });
    var hv = Pv(36618);
    class Sv {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    Sv.Instances = [], Sv.OnEnginesDisposedObservable = new hv.c, Sv._LastCreatedScene = null, Sv.UseFallbackTexture = !0, Sv.FallbackTexture = ""
  },
  36610: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => hv
    });
    class hv {
      static SetMatrixPrecision(vv) {
        if (hv.MatrixTrackPrecisionChange = !1, vv && !hv.MatrixUse64Bits && hv.MatrixTrackedMatrices)
          for (let zv = 0; zv < hv.MatrixTrackedMatrices.length; ++zv) {
            const vv = hv.MatrixTrackedMatrices[zv],
              Pv = vv._m;
            vv._m = new Array(16);
            for (let zv = 0; zv < 16; ++zv) vv._m[zv] = Pv[zv]
          }
        hv.MatrixUse64Bits = vv, hv.MatrixCurrentType = hv.MatrixUse64Bits ? Array : Float32Array, hv.MatrixTrackedMatrices = null
      }
    }
    hv.MatrixUse64Bits = !1, hv.MatrixTrackPrecisionChange = !0, hv.MatrixCurrentType = Float32Array, hv.MatrixTrackedMatrices = []
  },
  36627: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => pv,
      h: () => Nv,
      j: () => dv,
      k: () => hv,
      o: () => ev,
      p: () => gv
    });
    class hv {}

    function Sv(vv) {
      vv.updateFlag = hv._UpdateFlagSeed++
    }

    function ev(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const Sv = vv.pPv(),
        ev = zv.pPv(),
        gv = Sv[0],
        pv = Sv[1],
        dv = Sv[2],
        Nv = Sv[3],
        lv = Sv[4],
        Tv = Sv[5],
        Wv = Sv[6],
        wv = Sv[7],
        av = Sv[8],
        sv = Sv[9],
        Cv = Sv[10],
        iv = Sv[11],
        cv = Sv[12],
        Gv = Sv[13],
        mv = Sv[14],
        jv = Sv[15],
        fv = ev[0],
        Fv = ev[1],
        Yv = ev[2],
        nv = ev[3],
        Ov = ev[4],
        Dv = ev[5],
        Kv = ev[6],
        Vv = ev[7],
        Uv = ev[8],
        Rv = ev[9],
        xv = ev[10],
        tv = ev[11],
        qv = ev[12],
        Iv = ev[13],
        Qv = ev[14],
        Zv = ev[15];
      Pv[hv] = gv * fv + pv * Ov + dv * Uv + Nv * qv, Pv[hv + 1] = gv * Fv + pv * Dv + dv * Rv + Nv * Iv, Pv[hv + 2] = gv * Yv + pv * Kv + dv * xv + Nv * Qv, Pv[hv + 3] = gv * nv + pv * Vv + dv * tv + Nv * Zv, Pv[hv + 4] = lv * fv + Tv * Ov + Wv * Uv + wv * qv, Pv[hv + 5] = lv * Fv + Tv * Dv + Wv * Rv + wv * Iv, Pv[hv + 6] = lv * Yv + Tv * Kv + Wv * xv + wv * Qv, Pv[hv + 7] = lv * nv + Tv * Vv + Wv * tv + wv * Zv, Pv[hv + 8] = av * fv + sv * Ov + Cv * Uv + iv * qv, Pv[hv + 9] = av * Fv + sv * Dv + Cv * Rv + iv * Iv, Pv[hv + 10] = av * Yv + sv * Kv + Cv * xv + iv * Qv, Pv[hv + 11] = av * nv + sv * Vv + Cv * tv + iv * Zv, Pv[hv + 12] = cv * fv + Gv * Ov + mv * Uv + jv * qv, Pv[hv + 13] = cv * Fv + Gv * Dv + mv * Rv + jv * Iv, Pv[hv + 14] = cv * Yv + Gv * Kv + mv * xv + jv * Qv, Pv[hv + 15] = cv * nv + Gv * Vv + mv * tv + jv * Zv
    }

    function gv(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      ev(vv, zv, Pv.pPv(), hv), Sv(Pv)
    }

    function pv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const hv = vv.pPv();
      zv[Pv] = hv[0], zv[Pv + 1] = hv[1], zv[Pv + 2] = hv[2], zv[Pv + 3] = hv[3], zv[Pv + 4] = hv[4], zv[Pv + 5] = hv[5], zv[Pv + 6] = hv[6], zv[Pv + 7] = hv[7], zv[Pv + 8] = hv[8], zv[Pv + 9] = hv[9], zv[Pv + 10] = hv[10], zv[Pv + 11] = hv[11], zv[Pv + 12] = hv[12], zv[Pv + 13] = hv[13], zv[Pv + 14] = hv[14], zv[Pv + 15] = hv[15]
    }

    function dv(vv, zv) {
      const Pv = Nv(vv, zv.pPv());
      return Pv && Sv(zv), Pv
    }

    function Nv(vv, zv) {
      const Pv = vv.pPv(),
        hv = Pv[0],
        Sv = Pv[1],
        ev = Pv[2],
        gv = Pv[3],
        pv = Pv[4],
        dv = Pv[5],
        Nv = Pv[6],
        lv = Pv[7],
        Tv = Pv[8],
        Wv = Pv[9],
        wv = Pv[10],
        av = Pv[11],
        sv = Pv[12],
        Cv = Pv[13],
        iv = Pv[14],
        cv = Pv[15],
        Gv = wv * cv - iv * av,
        mv = Wv * cv - Cv * av,
        jv = Wv * iv - Cv * wv,
        fv = Tv * cv - sv * av,
        Fv = Tv * iv - wv * sv,
        Yv = Tv * Cv - sv * Wv,
        nv = +(dv * Gv - Nv * mv + lv * jv),
        Ov = -(pv * Gv - Nv * fv + lv * Fv),
        Dv = +(pv * mv - dv * fv + lv * Yv),
        Kv = -(pv * jv - dv * Fv + Nv * Yv),
        Vv = hv * nv + Sv * Ov + ev * Dv + gv * Kv;
      if (0 === Vv) return !1;
      const Uv = 1 / Vv,
        Rv = Nv * cv - iv * lv,
        xv = dv * cv - Cv * lv,
        tv = dv * iv - Cv * Nv,
        qv = pv * cv - sv * lv,
        Iv = pv * iv - sv * Nv,
        Qv = pv * Cv - sv * dv,
        Zv = Nv * av - wv * lv,
        Av = dv * av - Wv * lv,
        Lv = dv * wv - Wv * Nv,
        Hv = pv * av - Tv * lv,
        Mv = pv * wv - Tv * Nv,
        yv = pv * Wv - Tv * dv,
        Bv = -(Sv * Gv - ev * mv + gv * jv),
        Jv = +(hv * Gv - ev * fv + gv * Fv),
        Ev = -(hv * mv - Sv * fv + gv * Yv),
        ov = +(hv * jv - Sv * Fv + ev * Yv),
        bv = +(Sv * Rv - ev * xv + gv * tv),
        rv = -(hv * Rv - ev * qv + gv * Iv),
        kv = +(hv * xv - Sv * qv + gv * Qv),
        Xv = -(hv * tv - Sv * Iv + ev * Qv),
        uv = -(Sv * Zv - ev * Av + gv * Lv),
        vz = +(hv * Zv - ev * Hv + gv * Mv),
        zz = -(hv * Av - Sv * Hv + gv * yv),
        Pz = +(hv * Lv - Sv * Mv + ev * yv);
      return zv[0] = nv * Uv, zv[1] = Bv * Uv, zv[2] = bv * Uv, zv[3] = uv * Uv, zv[4] = Ov * Uv, zv[5] = Jv * Uv, zv[6] = rv * Uv, zv[7] = vz * Uv, zv[8] = Dv * Uv, zv[9] = Ev * Uv, zv[10] = kv * Uv, zv[11] = zz * Uv, zv[12] = Kv * Uv, zv[13] = ov * Uv, zv[14] = Xv * Uv, zv[15] = Pz * Uv, !0
    }
    hv._UpdateFlagSeed = 0
  },
  36594: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => sv,
      d: () => av,
      e: () => mv,
      i: () => iv,
      j: () => Tv,
      l: () => Wv,
      m: () => wv
    });
    var hv = Pv(36599),
      Sv = Pv(36602),
      ev = Pv(36610),
      gv = Pv(36615),
      pv = Pv(36620),
      dv = Pv(36627),
      Nv = Pv(36631);
    const lv = vv => parseInt(vv.toString().replace(/\W/g, ""));
    class Tv {
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = vv, this.y = zv
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let vv = lv(this.x);
        return vv = 397 * vv ^ lv(this.y), vv
      }
      toArray(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return vv[zv] = this.x, vv[zv + 1] = this.y, this
      }
      Evv(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Tv.FromArrayToRef(vv, zv, this), this
      }
      pPv() {
        return [this.x, this.y]
      }
      Vzv(vv) {
        return this.x = vv.x, this.y = vv.y, this
      }
      f_(vv, zv) {
        return this.x = vv, this.y = zv, this
      }
      set(vv, zv) {
        return this.f_(vv, zv)
      }
      Dk(vv) {
        return this.f_(vv, vv)
      }
      add(vv) {
        return new Tv(this.x + vv.x, this.y + vv.y)
      }
      addToRef(vv, zv) {
        return zv.x = this.x + vv.x, zv.y = this.y + vv.y, zv
      }
      addInPlace(vv) {
        return this.x += vv.x, this.y += vv.y, this
      }
      addInPlaceFromFloats(vv, zv) {
        return this.x += vv, this.y += zv, this
      }
      addVector3(vv) {
        return new Tv(this.x + vv.x, this.y + vv.y)
      }
      subtract(vv) {
        return new Tv(this.x - vv.x, this.y - vv.y)
      }
      subtractToRef(vv, zv) {
        return zv.x = this.x - vv.x, zv.y = this.y - vv.y, zv
      }
      VPv(vv) {
        return this.x -= vv.x, this.y -= vv.y, this
      }
      multiplyInPlace(vv) {
        return this.x *= vv.x, this.y *= vv.y, this
      }
      multiply(vv) {
        return new Tv(this.x * vv.x, this.y * vv.y)
      }
      multiplyToRef(vv, zv) {
        return zv.x = this.x * vv.x, zv.y = this.y * vv.y, zv
      }
      multiplyByFloats(vv, zv) {
        return new Tv(this.x * vv, this.y * zv)
      }
      divide(vv) {
        return new Tv(this.x / vv.x, this.y / vv.y)
      }
      divideToRef(vv, zv) {
        return zv.x = this.x / vv.x, zv.y = this.y / vv.y, zv
      }
      divideInPlace(vv) {
        return this.x = this.x / vv.x, this.y = this.y / vv.y, this
      }
      minimizeInPlace(vv) {
        return this.minimizeInPlaceFromFloats(vv.x, vv.y)
      }
      maximizeInPlace(vv) {
        return this.maximizeInPlaceFromFloats(vv.x, vv.y)
      }
      minimizeInPlaceFromFloats(vv, zv) {
        return this.x = Math.min(vv, this.x), this.y = Math.min(zv, this.y), this
      }
      maximizeInPlaceFromFloats(vv, zv) {
        return this.x = Math.max(vv, this.x), this.y = Math.max(zv, this.y), this
      }
      subtractFromFloats(vv, zv) {
        return new Tv(this.x - vv, this.y - zv)
      }
      subtractFromFloatsToRef(vv, zv, Pv) {
        return Pv.x = this.x - vv, Pv.y = this.y - zv, Pv
      }
      Re() {
        return new Tv(-this.x, -this.y)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this
      }
      negateToRef(vv) {
        return vv.x = -this.x, vv.y = -this.y, vv
      }
      scaleInPlace(vv) {
        return this.x *= vv, this.y *= vv, this
      }
      scale(vv) {
        return new Tv(this.x * vv, this.y * vv)
      }
      scaleToRef(vv, zv) {
        return zv.x = this.x * vv, zv.y = this.y * vv, zv
      }
      scaleAndAddToRef(vv, zv) {
        return zv.x += this.x * vv, zv.y += this.y * vv, zv
      }
      equals(vv) {
        return vv && this.x === vv.x && this.y === vv.y
      }
      equalsWithEpsilon(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hv.e;
        return vv && (0, pv.WithinEpsilon)(this.x, vv.x, zv) && (0, pv.WithinEpsilon)(this.y, vv.y, zv)
      }
      Mev(vv, zv) {
        return this.x === vv && this.y === zv
      }
      floor() {
        return new Tv(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(vv) {
        return vv.x = Math.floor(this.x), vv.y = Math.floor(this.y), vv
      }
      fract() {
        return new Tv(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(vv) {
        return vv.x = this.x - Math.floor(this.x), vv.y = this.y - Math.floor(this.y), vv
      }
      rotate(vv) {
        return this.rotateToRef(vv, new Tv)
      }
      rotateToRef(vv, zv) {
        const Pv = Math.cos(vv),
          hv = Math.sin(vv);
        return zv.x = Pv * this.x - hv * this.y, zv.y = hv * this.x + Pv * this.y, zv
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
      normalizeFromLength(vv) {
        return 0 === vv || 1 === vv ? this : this.scaleInPlace(1 / vv)
      }
      normalizeToNew() {
        const vv = new Tv;
        return this.normalizeToRef(vv), vv
      }
      normalizeToRef(vv) {
        const zv = this.length();
        return 0 === zv || 1 === zv ? (vv.x = this.x, vv.y = this.y, vv) : this.scaleToRef(1 / zv, vv)
      }
      clone() {
        return new Tv(this.x, this.y)
      }
      dot(vv) {
        return this.x * vv.x + this.y * vv.y
      }
      static Zero() {
        return new Tv(0, 0)
      }
      static One() {
        return new Tv(1, 1)
      }
      static Random() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Tv((0, pv.RandomRange)(vv, zv), (0, pv.RandomRange)(vv, zv))
      }
      static RandomToRef() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).f_((0, pv.RandomRange)(vv, zv), (0, pv.RandomRange)(vv, zv))
      }
      static get ZeroReadOnly() {
        return Tv._ZeroReadOnly
      }
      static FromArray(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Tv(vv[zv], vv[zv + 1])
      }
      static FromArrayToRef(vv, zv, Pv) {
        return Pv.x = vv[zv], Pv.y = vv[zv + 1], Pv
      }
      static FromFloatsToRef(vv, zv, Pv) {
        return Pv.f_(vv, zv), Pv
      }
      static CatmullRom(vv, zv, Pv, hv, Sv) {
        const ev = Sv * Sv,
          gv = Sv * ev,
          pv = .5 * (2 * zv.x + (-vv.x + Pv.x) * Sv + (2 * vv.x - 5 * zv.x + 4 * Pv.x - hv.x) * ev + (-vv.x + 3 * zv.x - 3 * Pv.x + hv.x) * gv),
          dv = .5 * (2 * zv.y + (-vv.y + Pv.y) * Sv + (2 * vv.y - 5 * zv.y + 4 * Pv.y - hv.y) * ev + (-vv.y + 3 * zv.y - 3 * Pv.y + hv.y) * gv);
        return new Tv(pv, dv)
      }
      static ClampToRef(vv, zv, Pv, hv) {
        return hv.x = (0, pv.Clamp)(vv.x, zv.x, Pv.x), hv.y = (0, pv.Clamp)(vv.y, zv.y, Pv.y), hv
      }
      static Clamp(vv, zv, Pv) {
        const hv = (0, pv.Clamp)(vv.x, zv.x, Pv.x),
          Sv = (0, pv.Clamp)(vv.y, zv.y, Pv.y);
        return new Tv(hv, Sv)
      }
      static Hermite(vv, zv, Pv, hv, Sv) {
        const ev = Sv * Sv,
          gv = Sv * ev,
          pv = 2 * gv - 3 * ev + 1,
          dv = -2 * gv + 3 * ev,
          Nv = gv - 2 * ev + Sv,
          lv = gv - ev,
          Wv = vv.x * pv + Pv.x * dv + zv.x * Nv + hv.x * lv,
          wv = vv.y * pv + Pv.y * dv + zv.y * Nv + hv.y * lv;
        return new Tv(Wv, wv)
      }
      static Hermite1stDerivative(vv, zv, Pv, hv, Sv) {
        return this.Hermite1stDerivativeToRef(vv, zv, Pv, hv, Sv, new Tv)
      }
      static Hermite1stDerivativeToRef(vv, zv, Pv, hv, Sv, ev) {
        const gv = Sv * Sv;
        return ev.x = 6 * (gv - Sv) * vv.x + (3 * gv - 4 * Sv + 1) * zv.x + 6 * (-gv + Sv) * Pv.x + (3 * gv - 2 * Sv) * hv.x, ev.y = 6 * (gv - Sv) * vv.y + (3 * gv - 4 * Sv + 1) * zv.y + 6 * (-gv + Sv) * Pv.y + (3 * gv - 2 * Sv) * hv.y, ev
      }
      static Lerp(vv, zv, Pv) {
        return Tv.LerpToRef(vv, zv, Pv, new Tv)
      }
      static LerpToRef(vv, zv, Pv, hv) {
        return hv.x = vv.x + (zv.x - vv.x) * Pv, hv.y = vv.y + (zv.y - vv.y) * Pv, hv
      }
      static Dot(vv, zv) {
        return vv.x * zv.x + vv.y * zv.y
      }
      static Normalize(vv) {
        return Tv.NormalizeToRef(vv, new Tv)
      }
      static NormalizeToRef(vv, zv) {
        return vv.normalizeToRef(zv), zv
      }
      static Minimize(vv, zv) {
        const Pv = vv.x < zv.x ? vv.x : zv.x,
          hv = vv.y < zv.y ? vv.y : zv.y;
        return new Tv(Pv, hv)
      }
      static Maximize(vv, zv) {
        const Pv = vv.x > zv.x ? vv.x : zv.x,
          hv = vv.y > zv.y ? vv.y : zv.y;
        return new Tv(Pv, hv)
      }
      static Transform(vv, zv) {
        return Tv.TransformToRef(vv, zv, new Tv)
      }
      static TransformToRef(vv, zv, Pv) {
        const hv = zv.m,
          Sv = vv.x * hv[0] + vv.y * hv[4] + hv[12],
          ev = vv.x * hv[1] + vv.y * hv[5] + hv[13];
        return Pv.x = Sv, Pv.y = ev, Pv
      }
      static PointInTriangle(vv, zv, Pv, hv) {
        const Sv = .5 * (-Pv.y * hv.x + zv.y * (-Pv.x + hv.x) + zv.x * (Pv.y - hv.y) + Pv.x * hv.y),
          ev = Sv < 0 ? -1 : 1,
          gv = (zv.y * hv.x - zv.x * hv.y + (hv.y - zv.y) * vv.x + (zv.x - hv.x) * vv.y) * ev,
          pv = (zv.x * Pv.y - zv.y * Pv.x + (zv.y - Pv.y) * vv.x + (Pv.x - zv.x) * vv.y) * ev;
        return gv > 0 && pv > 0 && gv + pv < 2 * Sv * ev
      }
      static Distance(vv, zv) {
        return Math.sqrt(Tv.DistanceSquared(vv, zv))
      }
      static DistanceSquared(vv, zv) {
        const Pv = vv.x - zv.x,
          hv = vv.y - zv.y;
        return Pv * Pv + hv * hv
      }
      static Center(vv, zv) {
        return Tv.CenterToRef(vv, zv, new Tv)
      }
      static CenterToRef(vv, zv, Pv) {
        return Pv.f_((vv.x + zv.x) / 2, (vv.y + zv.y) / 2)
      }
      static DistanceOfPointFromSegment(vv, zv, Pv) {
        const hv = Tv.DistanceSquared(zv, Pv);
        if (0 === hv) return Tv.Distance(vv, zv);
        const Sv = Pv.subtract(zv),
          ev = Math.max(0, Math.min(1, Tv.Dot(vv.subtract(zv), Sv) / hv)),
          gv = zv.add(Sv.multiplyByFloats(ev, ev));
        return Tv.Distance(vv, gv)
      }
    }
    Tv._V8PerformanceHack = new Tv(.5, .5), Tv._ZeroReadOnly = Tv.Zero();
    class Wv {
      get x() {
        return this._x
      }
      set x(vv) {
        this._x = vv, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(vv) {
        this._y = vv, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(vv) {
        this._z = vv, this._isDirty = !0
      }
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = vv, this._y = zv, this._z = Pv
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "fa"
      }
      getHashCode() {
        let vv = lv(this._x);
        return vv = 397 * vv ^ lv(this._y), vv = 397 * vv ^ lv(this._z), vv
      }
      pPv() {
        return [this._x, this._y, this._z]
      }
      toArray(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return vv[zv] = this._x, vv[zv + 1] = this._y, vv[zv + 2] = this._z, this
      }
      Evv(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Wv.FromArrayToRef(vv, zv, this), this
      }
      toQuaternion() {
        return av.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(vv) {
        return this._x += vv._x, this._y += vv._y, this._z += vv._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(vv, zv, Pv) {
        return this._x += vv, this._y += zv, this._z += Pv, this._isDirty = !0, this
      }
      add(vv) {
        return new Wv(this._x + vv._x, this._y + vv._y, this._z + vv._z)
      }
      addToRef(vv, zv) {
        return zv._x = this._x + vv._x, zv._y = this._y + vv._y, zv._z = this._z + vv._z, zv._isDirty = !0, zv
      }
      VPv(vv) {
        return this._x -= vv._x, this._y -= vv._y, this._z -= vv._z, this._isDirty = !0, this
      }
      subtract(vv) {
        return new Wv(this._x - vv._x, this._y - vv._y, this._z - vv._z)
      }
      subtractToRef(vv, zv) {
        return this.subtractFromFloatsToRef(vv._x, vv._y, vv._z, zv)
      }
      subtractFromFloats(vv, zv, Pv) {
        return new Wv(this._x - vv, this._y - zv, this._z - Pv)
      }
      subtractFromFloatsToRef(vv, zv, Pv, hv) {
        return hv._x = this._x - vv, hv._y = this._y - zv, hv._z = this._z - Pv, hv._isDirty = !0, hv
      }
      Re() {
        return new Wv(-this._x, -this._y, -this._z)
      }
      negateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      negateToRef(vv) {
        return vv._x = -1 * this._x, vv._y = -1 * this._y, vv._z = -1 * this._z, vv._isDirty = !0, vv
      }
      scaleInPlace(vv) {
        return this._x *= vv, this._y *= vv, this._z *= vv, this._isDirty = !0, this
      }
      scale(vv) {
        return new Wv(this._x * vv, this._y * vv, this._z * vv)
      }
      scaleToRef(vv, zv) {
        return zv._x = this._x * vv, zv._y = this._y * vv, zv._z = this._z * vv, zv._isDirty = !0, zv
      }
      getNormalToRef(vv) {
        const zv = this.length();
        let Pv = Math.acos(this._y / zv);
        const hv = Math.atan2(this._z, this._x);
        Pv > Math.PI / 2 ? Pv -= Math.PI / 2 : Pv += Math.PI / 2;
        const Sv = zv * Math.sin(Pv) * Math.cos(hv),
          ev = zv * Math.cos(Pv),
          gv = zv * Math.sin(Pv) * Math.sin(hv);
        return vv.set(Sv, ev, gv), vv
      }
      applyRotationQuaternionToRef(vv, zv) {
        const Pv = this._x,
          hv = this._y,
          Sv = this._z,
          ev = vv._x,
          gv = vv._y,
          pv = vv._z,
          dv = vv._w,
          Nv = 2 * (gv * Sv - pv * hv),
          lv = 2 * (pv * Pv - ev * Sv),
          Tv = 2 * (ev * hv - gv * Pv);
        return zv._x = Pv + dv * Nv + gv * Tv - pv * lv, zv._y = hv + dv * lv + pv * Nv - ev * Tv, zv._z = Sv + dv * Tv + ev * lv - gv * Nv, zv._isDirty = !0, zv
      }
      applyRotationQuaternionInPlace(vv) {
        return this.applyRotationQuaternionToRef(vv, this)
      }
      applyRotationQuaternion(vv) {
        return this.applyRotationQuaternionToRef(vv, new Wv)
      }
      scaleAndAddToRef(vv, zv) {
        return zv._x += this._x * vv, zv._y += this._y * vv, zv._z += this._z * vv, zv._isDirty = !0, zv
      }
      projectOnPlane(vv, zv) {
        return this.projectOnPlaneToRef(vv, zv, new Wv)
      }
      projectOnPlaneToRef(vv, zv, Pv) {
        const hv = vv.normal,
          Sv = vv.d,
          ev = Cv.fa[0];
        this.subtractToRef(zv, ev), ev.normalize();
        const gv = Wv.Dot(ev, hv);
        if (Math.abs(gv) < 1e-10) Pv.Dk(1 / 0);
        else {
          const vv = -(Wv.Dot(zv, hv) + Sv) / gv,
            pv = ev.scaleInPlace(vv);
          zv.addToRef(pv, Pv)
        }
        return Pv
      }
      equals(vv) {
        return vv && this._x === vv._x && this._y === vv._y && this._z === vv._z
      }
      equalsWithEpsilon(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hv.e;
        return vv && (0, pv.WithinEpsilon)(this._x, vv._x, zv) && (0, pv.WithinEpsilon)(this._y, vv._y, zv) && (0, pv.WithinEpsilon)(this._z, vv._z, zv)
      }
      Mev(vv, zv, Pv) {
        return this._x === vv && this._y === zv && this._z === Pv
      }
      multiplyInPlace(vv) {
        return this._x *= vv._x, this._y *= vv._y, this._z *= vv._z, this._isDirty = !0, this
      }
      multiply(vv) {
        return this.multiplyByFloats(vv._x, vv._y, vv._z)
      }
      multiplyToRef(vv, zv) {
        return zv._x = this._x * vv._x, zv._y = this._y * vv._y, zv._z = this._z * vv._z, zv._isDirty = !0, zv
      }
      multiplyByFloats(vv, zv, Pv) {
        return new Wv(this._x * vv, this._y * zv, this._z * Pv)
      }
      divide(vv) {
        return new Wv(this._x / vv._x, this._y / vv._y, this._z / vv._z)
      }
      divideToRef(vv, zv) {
        return zv._x = this._x / vv._x, zv._y = this._y / vv._y, zv._z = this._z / vv._z, zv._isDirty = !0, zv
      }
      divideInPlace(vv) {
        return this._x = this._x / vv._x, this._y = this._y / vv._y, this._z = this._z / vv._z, this._isDirty = !0, this
      }
      minimizeInPlace(vv) {
        return this.minimizeInPlaceFromFloats(vv._x, vv._y, vv._z)
      }
      maximizeInPlace(vv) {
        return this.maximizeInPlaceFromFloats(vv._x, vv._y, vv._z)
      }
      minimizeInPlaceFromFloats(vv, zv, Pv) {
        return vv < this._x && (this.x = vv), zv < this._y && (this.y = zv), Pv < this._z && (this.z = Pv), this
      }
      maximizeInPlaceFromFloats(vv, zv, Pv) {
        return vv > this._x && (this.x = vv), zv > this._y && (this.y = zv), Pv > this._z && (this.z = Pv), this
      }
      isNonUniformWithinEpsilon(vv) {
        const zv = Math.abs(this._x),
          Pv = Math.abs(this._y);
        if (!(0, pv.WithinEpsilon)(zv, Pv, vv)) return !0;
        const hv = Math.abs(this._z);
        return !(0, pv.WithinEpsilon)(zv, hv, vv) || !(0, pv.WithinEpsilon)(Pv, hv, vv)
      }
      get isNonUniform() {
        const vv = Math.abs(this._x);
        if (vv !== Math.abs(this._y)) return !0;
        return vv !== Math.abs(this._z)
      }
      floorToRef(vv) {
        return vv._x = Math.floor(this._x), vv._y = Math.floor(this._y), vv._z = Math.floor(this._z), vv._isDirty = !0, vv
      }
      floor() {
        return new Wv(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(vv) {
        return vv._x = this._x - Math.floor(this._x), vv._y = this._y - Math.floor(this._y), vv._z = this._z - Math.floor(this._z), vv._isDirty = !0, vv
      }
      fract() {
        return new Wv(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
      reorderInPlace(vv) {
        if ("xyz" === (vv = vv.toLowerCase())) return this;
        const zv = Cv.fa[0].Vzv(this);
        return this.x = zv[vv[0]], this.y = zv[vv[1]], this.z = zv[vv[2]], this
      }
      rotateByQuaternionToRef(vv, zv) {
        return vv.toRotationMatrix(Cv.Matrix[0]), Wv.TransformCoordinatesToRef(this, Cv.Matrix[0], zv), zv
      }
      rotateByQuaternionAroundPointToRef(vv, zv, Pv) {
        return this.subtractToRef(zv, Cv.fa[0]), Cv.fa[0].rotateByQuaternionToRef(vv, Cv.fa[0]), zv.addToRef(Cv.fa[0], Pv), Pv
      }
      cross(vv) {
        return Wv.CrossToRef(this, vv, new Wv)
      }
      normalizeFromLength(vv) {
        return 0 === vv || 1 === vv ? this : this.scaleInPlace(1 / vv)
      }
      normalizeToNew() {
        return this.normalizeToRef(new Wv)
      }
      normalizeToRef(vv) {
        const zv = this.length();
        return 0 === zv || 1 === zv ? (vv._x = this._x, vv._y = this._y, vv._z = this._z, vv._isDirty = !0, vv) : this.scaleToRef(1 / zv, vv)
      }
      clone() {
        return new Wv(this._x, this._y, this._z)
      }
      Vzv(vv) {
        return this.f_(vv._x, vv._y, vv._z)
      }
      f_(vv, zv, Pv) {
        return this._x = vv, this._y = zv, this._z = Pv, this._isDirty = !0, this
      }
      set(vv, zv, Pv) {
        return this.f_(vv, zv, Pv)
      }
      Dk(vv) {
        return this._x = this._y = this._z = vv, this._isDirty = !0, this
      }
      static GetClipFactor(vv, zv, Pv, hv) {
        const Sv = Wv.Dot(vv, Pv);
        return (Sv - hv) / (Sv - Wv.Dot(zv, Pv))
      }
      static GetAngleBetweenVectors(vv, zv, Pv) {
        const hv = vv.normalizeToRef(Cv.fa[1]),
          Sv = zv.normalizeToRef(Cv.fa[2]);
        let ev = Wv.Dot(hv, Sv);
        ev = (0, pv.Clamp)(ev, -1, 1);
        const gv = Math.acos(ev),
          dv = Cv.fa[3];
        return Wv.CrossToRef(hv, Sv, dv), Wv.Dot(dv, Pv) > 0 ? isNaN(gv) ? 0 : gv : isNaN(gv) ? -Math.PI : -Math.acos(ev)
      }
      static GetAngleBetweenVectorsOnPlane(vv, zv, Pv) {
        Cv.fa[0].Vzv(vv);
        const hv = Cv.fa[0];
        Cv.fa[1].Vzv(zv);
        const Sv = Cv.fa[1];
        Cv.fa[2].Vzv(Pv);
        const ev = Cv.fa[2],
          gv = Cv.fa[3],
          dv = Cv.fa[4];
        hv.normalize(), Sv.normalize(), ev.normalize(), Wv.CrossToRef(ev, hv, gv), Wv.CrossToRef(gv, ev, dv);
        const Nv = Math.atan2(Wv.Dot(Sv, gv), Wv.Dot(Sv, dv));
        return (0, pv.NormalizeRadians)(Nv)
      }
      static PitchYawRollToMoveBetweenPointsToRef(vv, zv, Pv) {
        const hv = iv.fa[0];
        return zv.subtractToRef(vv, hv), Pv._y = Math.atan2(hv.x, hv.z) || 0, Pv._x = Math.atan2(Math.sqrt(hv.x ** 2 + hv.z ** 2), hv.y) || 0, Pv._z = 0, Pv._isDirty = !0, Pv
      }
      static PitchYawRollToMoveBetweenPoints(vv, zv) {
        const Pv = Wv.Zero();
        return Wv.PitchYawRollToMoveBetweenPointsToRef(vv, zv, Pv)
      }
      static SlerpToRef(vv, zv, Pv, Sv) {
        Pv = (0, pv.Clamp)(Pv, 0, 1);
        const ev = Cv.fa[0],
          gv = Cv.fa[1];
        ev.Vzv(vv);
        const dv = ev.length();
        ev.normalizeFromLength(dv), gv.Vzv(zv);
        const Nv = gv.length();
        gv.normalizeFromLength(Nv);
        const lv = Wv.Dot(ev, gv);
        let Tv, wv;
        if (lv < 1 - hv.e) {
          const vv = Math.acos(lv),
            zv = 1 / Math.sin(vv);
          Tv = Math.sin((1 - Pv) * vv) * zv, wv = Math.sin(Pv * vv) * zv
        } else Tv = 1 - Pv, wv = Pv;
        return ev.scaleInPlace(Tv), gv.scaleInPlace(wv), Sv.Vzv(ev).addInPlace(gv), Sv.scaleInPlace((0, pv.Lerp)(dv, Nv, Pv)), Sv
      }
      static SmoothToRef(vv, zv, Pv, hv, Sv) {
        return Wv.SlerpToRef(vv, zv, 0 === hv ? 1 : Pv / hv, Sv), Sv
      }
      static FromArray(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Wv(vv[zv], vv[zv + 1], vv[zv + 2])
      }
      static FromFloatArray(vv, zv) {
        return Wv.FromArray(vv, zv)
      }
      static FromArrayToRef(vv, zv, Pv) {
        return Pv._x = vv[zv], Pv._y = vv[zv + 1], Pv._z = vv[zv + 2], Pv._isDirty = !0, Pv
      }
      static FromFloatArrayToRef(vv, zv, Pv) {
        return Wv.FromArrayToRef(vv, zv, Pv)
      }
      static FromFloatsToRef(vv, zv, Pv, hv) {
        return hv.f_(vv, zv, Pv), hv
      }
      static Zero() {
        return new Wv(0, 0, 0)
      }
      static One() {
        return new Wv(1, 1, 1)
      }
      static Up() {
        return new Wv(0, 1, 0)
      }
      static get UpReadOnly() {
        return Wv._UpReadOnly
      }
      static get DownReadOnly() {
        return Wv._DownReadOnly
      }
      static get RightReadOnly() {
        return Wv._RightReadOnly
      }
      static get LeftReadOnly() {
        return Wv._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return Wv._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return Wv._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return Wv._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return Wv._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return Wv._ZeroReadOnly
      }
      static get OneReadOnly() {
        return Wv._OneReadOnly
      }
      static Down() {
        return new Wv(0, -1, 0)
      }
      static Forward() {
        return new Wv(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new Wv(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new Wv(1, 0, 0)
      }
      static Left() {
        return new Wv(-1, 0, 0)
      }
      static Random() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Wv((0, pv.RandomRange)(vv, zv), (0, pv.RandomRange)(vv, zv), (0, pv.RandomRange)(vv, zv))
      }
      static RandomToRef() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).f_((0, pv.RandomRange)(vv, zv), (0, pv.RandomRange)(vv, zv), (0, pv.RandomRange)(vv, zv))
      }
      static TransformCoordinates(vv, zv) {
        const Pv = Wv.Zero();
        return Wv.TransformCoordinatesToRef(vv, zv, Pv), Pv
      }
      static TransformCoordinatesToRef(vv, zv, Pv) {
        return Wv.TransformCoordinatesFromFloatsToRef(vv._x, vv._y, vv._z, zv, Pv), Pv
      }
      static TransformCoordinatesFromFloatsToRef(vv, zv, Pv, hv, Sv) {
        const ev = hv.m,
          gv = vv * ev[0] + zv * ev[4] + Pv * ev[8] + ev[12],
          pv = vv * ev[1] + zv * ev[5] + Pv * ev[9] + ev[13],
          dv = vv * ev[2] + zv * ev[6] + Pv * ev[10] + ev[14],
          Nv = 1 / (vv * ev[3] + zv * ev[7] + Pv * ev[11] + ev[15]);
        return Sv._x = gv * Nv, Sv._y = pv * Nv, Sv._z = dv * Nv, Sv._isDirty = !0, Sv
      }
      static TransformNormal(vv, zv) {
        const Pv = Wv.Zero();
        return Wv.TransformNormalToRef(vv, zv, Pv), Pv
      }
      static TransformNormalToRef(vv, zv, Pv) {
        return this.TransformNormalFromFloatsToRef(vv._x, vv._y, vv._z, zv, Pv), Pv
      }
      static TransformNormalFromFloatsToRef(vv, zv, Pv, hv, Sv) {
        const ev = hv.m;
        return Sv._x = vv * ev[0] + zv * ev[4] + Pv * ev[8], Sv._y = vv * ev[1] + zv * ev[5] + Pv * ev[9], Sv._z = vv * ev[2] + zv * ev[6] + Pv * ev[10], Sv._isDirty = !0, Sv
      }
      static CatmullRom(vv, zv, Pv, hv, Sv) {
        const ev = Sv * Sv,
          gv = Sv * ev,
          pv = .5 * (2 * zv._x + (-vv._x + Pv._x) * Sv + (2 * vv._x - 5 * zv._x + 4 * Pv._x - hv._x) * ev + (-vv._x + 3 * zv._x - 3 * Pv._x + hv._x) * gv),
          dv = .5 * (2 * zv._y + (-vv._y + Pv._y) * Sv + (2 * vv._y - 5 * zv._y + 4 * Pv._y - hv._y) * ev + (-vv._y + 3 * zv._y - 3 * Pv._y + hv._y) * gv),
          Nv = .5 * (2 * zv._z + (-vv._z + Pv._z) * Sv + (2 * vv._z - 5 * zv._z + 4 * Pv._z - hv._z) * ev + (-vv._z + 3 * zv._z - 3 * Pv._z + hv._z) * gv);
        return new Wv(pv, dv, Nv)
      }
      static Clamp(vv, zv, Pv) {
        const hv = new Wv;
        return Wv.ClampToRef(vv, zv, Pv, hv), hv
      }
      static ClampToRef(vv, zv, Pv, hv) {
        let Sv = vv._x;
        Sv = Sv > Pv._x ? Pv._x : Sv, Sv = Sv < zv._x ? zv._x : Sv;
        let ev = vv._y;
        ev = ev > Pv._y ? Pv._y : ev, ev = ev < zv._y ? zv._y : ev;
        let gv = vv._z;
        return gv = gv > Pv._z ? Pv._z : gv, gv = gv < zv._z ? zv._z : gv, hv.f_(Sv, ev, gv), hv
      }
      static CheckExtends(vv, zv, Pv) {
        zv.minimizeInPlace(vv), Pv.maximizeInPlace(vv)
      }
      static Hermite(vv, zv, Pv, hv, Sv) {
        const ev = Sv * Sv,
          gv = Sv * ev,
          pv = 2 * gv - 3 * ev + 1,
          dv = -2 * gv + 3 * ev,
          Nv = gv - 2 * ev + Sv,
          lv = gv - ev,
          Tv = vv._x * pv + Pv._x * dv + zv._x * Nv + hv._x * lv,
          wv = vv._y * pv + Pv._y * dv + zv._y * Nv + hv._y * lv,
          av = vv._z * pv + Pv._z * dv + zv._z * Nv + hv._z * lv;
        return new Wv(Tv, wv, av)
      }
      static Hermite1stDerivative(vv, zv, Pv, hv, Sv) {
        const ev = new Wv;
        return this.Hermite1stDerivativeToRef(vv, zv, Pv, hv, Sv, ev), ev
      }
      static Hermite1stDerivativeToRef(vv, zv, Pv, hv, Sv, ev) {
        const gv = Sv * Sv;
        return ev._x = 6 * (gv - Sv) * vv._x + (3 * gv - 4 * Sv + 1) * zv._x + 6 * (-gv + Sv) * Pv._x + (3 * gv - 2 * Sv) * hv._x, ev._y = 6 * (gv - Sv) * vv._y + (3 * gv - 4 * Sv + 1) * zv._y + 6 * (-gv + Sv) * Pv._y + (3 * gv - 2 * Sv) * hv._y, ev._z = 6 * (gv - Sv) * vv._z + (3 * gv - 4 * Sv + 1) * zv._z + 6 * (-gv + Sv) * Pv._z + (3 * gv - 2 * Sv) * hv._z, ev._isDirty = !0, ev
      }
      static Lerp(vv, zv, Pv) {
        const hv = new Wv(0, 0, 0);
        return Wv.LerpToRef(vv, zv, Pv, hv), hv
      }
      static LerpToRef(vv, zv, Pv, hv) {
        return hv._x = vv._x + (zv._x - vv._x) * Pv, hv._y = vv._y + (zv._y - vv._y) * Pv, hv._z = vv._z + (zv._z - vv._z) * Pv, hv._isDirty = !0, hv
      }
      static Dot(vv, zv) {
        return vv._x * zv._x + vv._y * zv._y + vv._z * zv._z
      }
      dot(vv) {
        return this._x * vv._x + this._y * vv._y + this._z * vv._z
      }
      static Cross(vv, zv) {
        const Pv = new Wv;
        return Wv.CrossToRef(vv, zv, Pv), Pv
      }
      static CrossToRef(vv, zv, Pv) {
        const hv = vv._y * zv._z - vv._z * zv._y,
          Sv = vv._z * zv._x - vv._x * zv._z,
          ev = vv._x * zv._y - vv._y * zv._x;
        return Pv.f_(hv, Sv, ev), Pv
      }
      static Normalize(vv) {
        const zv = Wv.Zero();
        return Wv.NormalizeToRef(vv, zv), zv
      }
      static NormalizeToRef(vv, zv) {
        return vv.normalizeToRef(zv), zv
      }
      static Project(vv, zv, Pv, hv) {
        const Sv = new Wv;
        return Wv.ProjectToRef(vv, zv, Pv, hv, Sv), Sv
      }
      static ProjectToRef(vv, zv, Pv, hv, Sv) {
        const ev = hv.width,
          pv = hv.height,
          dv = hv.x,
          Nv = hv.y,
          lv = Cv.Matrix[1],
          Tv = gv.e.LastCreatedEngine?.isNDCHalfZRange,
          wv = Tv ? 1 : .5,
          av = Tv ? 0 : .5;
        sv.FromValuesToRef(ev / 2, 0, 0, 0, 0, -pv / 2, 0, 0, 0, 0, wv, 0, dv + ev / 2, pv / 2 + Nv, av, 1, lv);
        const iv = Cv.Matrix[0];
        return zv.multiplyToRef(Pv, iv), iv.multiplyToRef(lv, iv), Wv.TransformCoordinatesToRef(vv, iv, Sv), Sv
      }
      static Reflect(vv, zv) {
        return this.ReflectToRef(vv, zv, new Wv)
      }
      static ReflectToRef(vv, zv, Pv) {
        const hv = iv.fa[0];
        return hv.Vzv(zv).scaleInPlace(2 * Wv.Dot(vv, zv)), Pv.Vzv(vv).VPv(hv)
      }
      static UnprojectFromTransform(vv, zv, Pv, hv, Sv) {
        return this.Unproject(vv, zv, Pv, hv, Sv, sv.IdentityReadOnly)
      }
      static Unproject(vv, zv, Pv, hv, Sv, ev) {
        const gv = new Wv;
        return Wv.UnprojectToRef(vv, zv, Pv, hv, Sv, ev, gv), gv
      }
      static UnprojectToRef(vv, zv, Pv, hv, Sv, ev, gv) {
        return Wv.UnprojectFloatsToRef(vv._x, vv._y, vv._z, zv, Pv, hv, Sv, ev, gv), gv
      }
      static UnprojectFloatsToRef(vv, zv, Pv, hv, Sv, ev, pv, dv, Nv) {
        const lv = Cv.Matrix[0];
        ev.multiplyToRef(pv, lv), lv.multiplyToRef(dv, lv), lv.invert();
        const Tv = Cv.fa[0];
        return Tv.x = vv / hv * 2 - 1, Tv.y = -(zv / Sv * 2 - 1), gv.e.LastCreatedEngine?.isNDCHalfZRange ? Tv.z = Pv : Tv.z = 2 * Pv - 1, Wv.TransformCoordinatesToRef(Tv, lv, Nv), Nv
      }
      static Minimize(vv, zv) {
        const Pv = new Wv;
        return Pv.Vzv(vv), Pv.minimizeInPlace(zv), Pv
      }
      static Maximize(vv, zv) {
        const Pv = new Wv;
        return Pv.Vzv(vv), Pv.maximizeInPlace(zv), Pv
      }
      static Distance(vv, zv) {
        return Math.sqrt(Wv.DistanceSquared(vv, zv))
      }
      static DistanceSquared(vv, zv) {
        const Pv = vv._x - zv._x,
          hv = vv._y - zv._y,
          Sv = vv._z - zv._z;
        return Pv * Pv + hv * hv + Sv * Sv
      }
      static ProjectOnTriangleToRef(vv, zv, Pv, Sv, ev) {
        const gv = Cv.fa[0],
          dv = Cv.fa[1],
          Nv = Cv.fa[2],
          lv = Cv.fa[3],
          Tv = Cv.fa[4];
        Pv.subtractToRef(zv, gv), Sv.subtractToRef(zv, dv), Sv.subtractToRef(Pv, Nv);
        const wv = gv.length(),
          av = dv.length(),
          sv = Nv.length();
        if (wv < hv.e || av < hv.e || sv < hv.e) return ev.Vzv(zv), Wv.Distance(vv, zv);
        vv.subtractToRef(zv, Tv), Wv.CrossToRef(gv, dv, lv);
        const iv = lv.length();
        if (iv < hv.e) return ev.Vzv(zv), Wv.Distance(vv, zv);
        lv.normalizeFromLength(iv);
        let cv = Tv.length();
        if (cv < hv.e) return ev.Vzv(zv), 0;
        Tv.normalizeFromLength(cv);
        const Gv = Wv.Dot(lv, Tv),
          mv = Cv.fa[5],
          jv = Cv.fa[6];
        mv.Vzv(lv).scaleInPlace(-cv * Gv), jv.Vzv(vv).addInPlace(mv);
        const fv = Cv.fa[4],
          Fv = Cv.fa[5],
          Yv = Cv.fa[7],
          nv = Cv.fa[8];
        fv.Vzv(gv).scaleInPlace(1 / wv), nv.Vzv(dv).scaleInPlace(1 / av), fv.addInPlace(nv).scaleInPlace(-1), Fv.Vzv(gv).scaleInPlace(-1 / wv), nv.Vzv(Nv).scaleInPlace(1 / sv), Fv.addInPlace(nv).scaleInPlace(-1), Yv.Vzv(Nv).scaleInPlace(-1 / sv), nv.Vzv(dv).scaleInPlace(-1 / av), Yv.addInPlace(nv).scaleInPlace(-1);
        const Ov = Cv.fa[9];
        let Dv;
        Ov.Vzv(jv).VPv(zv), Wv.CrossToRef(fv, Ov, nv), Dv = Wv.Dot(nv, lv);
        const Kv = Dv;
        Ov.Vzv(jv).VPv(Pv), Wv.CrossToRef(Fv, Ov, nv), Dv = Wv.Dot(nv, lv);
        const Vv = Dv;
        Ov.Vzv(jv).VPv(Sv), Wv.CrossToRef(Yv, Ov, nv), Dv = Wv.Dot(nv, lv);
        const Uv = Dv,
          Rv = Cv.fa[10];
        let xv, tv;
        Kv > 0 && Vv < 0 ? (Rv.Vzv(gv), xv = zv, tv = Pv) : Vv > 0 && Uv < 0 ? (Rv.Vzv(Nv), xv = Pv, tv = Sv) : (Rv.Vzv(dv).scaleInPlace(-1), xv = Sv, tv = zv);
        const qv = Cv.fa[9],
          Iv = Cv.fa[4];
        xv.subtractToRef(jv, nv), tv.subtractToRef(jv, qv), Wv.CrossToRef(nv, qv, Iv);
        if (!(Wv.Dot(Iv, lv) < 0)) return ev.Vzv(jv), Math.abs(cv * Gv);
        const Qv = Cv.fa[5];
        Wv.CrossToRef(Rv, Iv, Qv), Qv.normalize();
        const Zv = Cv.fa[9];
        Zv.Vzv(xv).VPv(jv);
        const Av = Zv.length();
        if (Av < hv.e) return ev.Vzv(xv), Wv.Distance(vv, xv);
        Zv.normalizeFromLength(Av);
        const Lv = Wv.Dot(Qv, Zv),
          Hv = Cv.fa[7];
        Hv.Vzv(jv).addInPlace(Qv.scaleInPlace(Av * Lv)), nv.Vzv(Hv).VPv(xv), cv = Rv.length(), Rv.normalizeFromLength(cv);
        let Mv = Wv.Dot(nv, Rv) / Math.max(cv, hv.e);
        return Mv = (0, pv.Clamp)(Mv, 0, 1), Hv.Vzv(xv).addInPlace(Rv.scaleInPlace(Mv * cv)), ev.Vzv(Hv), Wv.Distance(vv, Hv)
      }
      static Center(vv, zv) {
        return Wv.CenterToRef(vv, zv, Wv.Zero())
      }
      static CenterToRef(vv, zv, Pv) {
        return Pv.f_((vv._x + zv._x) / 2, (vv._y + zv._y) / 2, (vv._z + zv._z) / 2)
      }
      static RotationFromAxis(vv, zv, Pv) {
        const hv = new Wv;
        return Wv.RotationFromAxisToRef(vv, zv, Pv, hv), hv
      }
      static RotationFromAxisToRef(vv, zv, Pv, hv) {
        const Sv = Cv.Quaternion[0];
        return av.RotationQuaternionFromAxisToRef(vv, zv, Pv, Sv), Sv.toEulerAnglesToRef(hv), hv
      }
    }
    Wv._V8PerformanceHack = new Wv(.5, .5, .5), Wv._UpReadOnly = Wv.Up(), Wv._DownReadOnly = Wv.Down(), Wv._LeftHandedForwardReadOnly = Wv.Forward(!1), Wv._RightHandedForwardReadOnly = Wv.Forward(!0), Wv._LeftHandedBackwardReadOnly = Wv.Backward(!1), Wv._RightHandedBackwardReadOnly = Wv.Backward(!0), Wv._RightReadOnly = Wv.Right(), Wv._LeftReadOnly = Wv.Left(), Wv._ZeroReadOnly = Wv.Zero(), Wv._OneReadOnly = Wv.One();
    class wv {
      get x() {
        return this._x
      }
      set x(vv) {
        this._x = vv, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(vv) {
        this._y = vv, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(vv) {
        this._z = vv, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(vv) {
        this._w = vv, this._isDirty = !0
      }
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = vv, this._y = zv, this._z = Pv, this._w = hv
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let vv = lv(this._x);
        return vv = 397 * vv ^ lv(this._y), vv = 397 * vv ^ lv(this._z), vv = 397 * vv ^ lv(this._w), vv
      }
      pPv() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(vv, zv) {
        return void 0 === zv && (zv = 0), vv[zv] = this._x, vv[zv + 1] = this._y, vv[zv + 2] = this._z, vv[zv + 3] = this._w, this
      }
      Evv(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return wv.FromArrayToRef(vv, zv, this), this
      }
      addInPlace(vv) {
        return this.x += vv._x, this.y += vv._y, this.z += vv._z, this.w += vv._w, this
      }
      addInPlaceFromFloats(vv, zv, Pv, hv) {
        return this.x += vv, this.y += zv, this.z += Pv, this.w += hv, this
      }
      add(vv) {
        return new wv(this._x + vv.x, this._y + vv.y, this._z + vv.z, this._w + vv.w)
      }
      addToRef(vv, zv) {
        return zv.x = this._x + vv.x, zv.y = this._y + vv.y, zv.z = this._z + vv.z, zv.w = this._w + vv.w, zv
      }
      VPv(vv) {
        return this.x -= vv.x, this.y -= vv.y, this.z -= vv.z, this.w -= vv.w, this
      }
      subtract(vv) {
        return new wv(this._x - vv.x, this._y - vv.y, this._z - vv.z, this._w - vv.w)
      }
      subtractToRef(vv, zv) {
        return zv.x = this._x - vv.x, zv.y = this._y - vv.y, zv.z = this._z - vv.z, zv.w = this._w - vv.w, zv
      }
      subtractFromFloats(vv, zv, Pv, hv) {
        return new wv(this._x - vv, this._y - zv, this._z - Pv, this._w - hv)
      }
      subtractFromFloatsToRef(vv, zv, Pv, hv, Sv) {
        return Sv.x = this._x - vv, Sv.y = this._y - zv, Sv.z = this._z - Pv, Sv.w = this._w - hv, Sv
      }
      Re() {
        return new wv(-this._x, -this._y, -this._z, -this._w)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this.w *= -1, this
      }
      negateToRef(vv) {
        return vv.x = -this._x, vv.y = -this._y, vv.z = -this._z, vv.w = -this._w, vv
      }
      scaleInPlace(vv) {
        return this.x *= vv, this.y *= vv, this.z *= vv, this.w *= vv, this
      }
      scale(vv) {
        return new wv(this._x * vv, this._y * vv, this._z * vv, this._w * vv)
      }
      scaleToRef(vv, zv) {
        return zv.x = this._x * vv, zv.y = this._y * vv, zv.z = this._z * vv, zv.w = this._w * vv, zv
      }
      scaleAndAddToRef(vv, zv) {
        return zv.x += this._x * vv, zv.y += this._y * vv, zv.z += this._z * vv, zv.w += this._w * vv, zv
      }
      equals(vv) {
        return vv && this._x === vv.x && this._y === vv.y && this._z === vv.z && this._w === vv.w
      }
      equalsWithEpsilon(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hv.e;
        return vv && (0, pv.WithinEpsilon)(this._x, vv.x, zv) && (0, pv.WithinEpsilon)(this._y, vv.y, zv) && (0, pv.WithinEpsilon)(this._z, vv.z, zv) && (0, pv.WithinEpsilon)(this._w, vv.w, zv)
      }
      Mev(vv, zv, Pv, hv) {
        return this._x === vv && this._y === zv && this._z === Pv && this._w === hv
      }
      multiplyInPlace(vv) {
        return this.x *= vv.x, this.y *= vv.y, this.z *= vv.z, this.w *= vv.w, this
      }
      multiply(vv) {
        return new wv(this._x * vv.x, this._y * vv.y, this._z * vv.z, this._w * vv.w)
      }
      multiplyToRef(vv, zv) {
        return zv.x = this._x * vv.x, zv.y = this._y * vv.y, zv.z = this._z * vv.z, zv.w = this._w * vv.w, zv
      }
      multiplyByFloats(vv, zv, Pv, hv) {
        return new wv(this._x * vv, this._y * zv, this._z * Pv, this._w * hv)
      }
      divide(vv) {
        return new wv(this._x / vv.x, this._y / vv.y, this._z / vv.z, this._w / vv.w)
      }
      divideToRef(vv, zv) {
        return zv.x = this._x / vv.x, zv.y = this._y / vv.y, zv.z = this._z / vv.z, zv.w = this._w / vv.w, zv
      }
      divideInPlace(vv) {
        return this.divideToRef(vv, this)
      }
      minimizeInPlace(vv) {
        return vv.x < this._x && (this.x = vv.x), vv.y < this._y && (this.y = vv.y), vv.z < this._z && (this.z = vv.z), vv.w < this._w && (this.w = vv.w), this
      }
      maximizeInPlace(vv) {
        return vv.x > this._x && (this.x = vv.x), vv.y > this._y && (this.y = vv.y), vv.z > this._z && (this.z = vv.z), vv.w > this._w && (this.w = vv.w), this
      }
      minimizeInPlaceFromFloats(vv, zv, Pv, hv) {
        return this.x = Math.min(vv, this._x), this.y = Math.min(zv, this._y), this.z = Math.min(Pv, this._z), this.w = Math.min(hv, this._w), this
      }
      maximizeInPlaceFromFloats(vv, zv, Pv, hv) {
        return this.x = Math.max(vv, this._x), this.y = Math.max(zv, this._y), this.z = Math.max(Pv, this._z), this.w = Math.max(hv, this._w), this
      }
      floorToRef(vv) {
        return vv.x = Math.floor(this._x), vv.y = Math.floor(this._y), vv.z = Math.floor(this._z), vv.w = Math.floor(this._w), vv
      }
      floor() {
        return new wv(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(vv) {
        return vv.x = this._x - Math.floor(this._x), vv.y = this._y - Math.floor(this._y), vv.z = this._z - Math.floor(this._z), vv.w = this._w - Math.floor(this._w), vv
      }
      fract() {
        return new wv(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
      normalizeFromLength(vv) {
        return 0 === vv || 1 === vv ? this : this.scaleInPlace(1 / vv)
      }
      normalizeToNew() {
        return this.normalizeToRef(new wv)
      }
      normalizeToRef(vv) {
        const zv = this.length();
        return 0 === zv || 1 === zv ? (vv.x = this._x, vv.y = this._y, vv.z = this._z, vv.w = this._w, vv) : this.scaleToRef(1 / zv, vv)
      }
      toVector3() {
        return new Wv(this._x, this._y, this._z)
      }
      clone() {
        return new wv(this._x, this._y, this._z, this._w)
      }
      Vzv(vv) {
        return this.x = vv.x, this.y = vv.y, this.z = vv.z, this.w = vv.w, this
      }
      f_(vv, zv, Pv, hv) {
        return this.x = vv, this.y = zv, this.z = Pv, this.w = hv, this
      }
      set(vv, zv, Pv, hv) {
        return this.f_(vv, zv, Pv, hv)
      }
      Dk(vv) {
        return this.x = this.y = this.z = this.w = vv, this
      }
      dot(vv) {
        return this._x * vv.x + this._y * vv.y + this._z * vv.z + this._w * vv.w
      }
      static FromArray(vv, zv) {
        return zv || (zv = 0), new wv(vv[zv], vv[zv + 1], vv[zv + 2], vv[zv + 3])
      }
      static FromArrayToRef(vv, zv, Pv) {
        return Pv.x = vv[zv], Pv.y = vv[zv + 1], Pv.z = vv[zv + 2], Pv.w = vv[zv + 3], Pv
      }
      static FromFloatArrayToRef(vv, zv, Pv) {
        return wv.FromArrayToRef(vv, zv, Pv), Pv
      }
      static FromFloatsToRef(vv, zv, Pv, hv, Sv) {
        return Sv.x = vv, Sv.y = zv, Sv.z = Pv, Sv.w = hv, Sv
      }
      static Zero() {
        return new wv(0, 0, 0, 0)
      }
      static One() {
        return new wv(1, 1, 1, 1)
      }
      static Random() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new wv((0, pv.RandomRange)(vv, zv), (0, pv.RandomRange)(vv, zv), (0, pv.RandomRange)(vv, zv), (0, pv.RandomRange)(vv, zv))
      }
      static RandomToRef() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        return Pv.x = (0, pv.RandomRange)(vv, zv), Pv.y = (0, pv.RandomRange)(vv, zv), Pv.z = (0, pv.RandomRange)(vv, zv), Pv.w = (0, pv.RandomRange)(vv, zv), Pv
      }
      static Clamp(vv, zv, Pv) {
        return wv.ClampToRef(vv, zv, Pv, new wv)
      }
      static ClampToRef(vv, zv, Pv, hv) {
        return hv.x = (0, pv.Clamp)(vv.x, zv.x, Pv.x), hv.y = (0, pv.Clamp)(vv.y, zv.y, Pv.y), hv.z = (0, pv.Clamp)(vv.z, zv.z, Pv.z), hv.w = (0, pv.Clamp)(vv.w, zv.w, Pv.w), hv
      }
      static CheckExtends(vv, zv, Pv) {
        zv.minimizeInPlace(vv), Pv.maximizeInPlace(vv)
      }
      static get ZeroReadOnly() {
        return wv._ZeroReadOnly
      }
      static Normalize(vv) {
        return wv.NormalizeToRef(vv, new wv)
      }
      static NormalizeToRef(vv, zv) {
        return vv.normalizeToRef(zv), zv
      }
      static Minimize(vv, zv) {
        const Pv = new wv;
        return Pv.Vzv(vv), Pv.minimizeInPlace(zv), Pv
      }
      static Maximize(vv, zv) {
        const Pv = new wv;
        return Pv.Vzv(vv), Pv.maximizeInPlace(zv), Pv
      }
      static Distance(vv, zv) {
        return Math.sqrt(wv.DistanceSquared(vv, zv))
      }
      static DistanceSquared(vv, zv) {
        const Pv = vv.x - zv.x,
          hv = vv.y - zv.y,
          Sv = vv.z - zv.z,
          ev = vv.w - zv.w;
        return Pv * Pv + hv * hv + Sv * Sv + ev * ev
      }
      static Center(vv, zv) {
        return wv.CenterToRef(vv, zv, new wv)
      }
      static CenterToRef(vv, zv, Pv) {
        return Pv.x = (vv.x + zv.x) / 2, Pv.y = (vv.y + zv.y) / 2, Pv.z = (vv.z + zv.z) / 2, Pv.w = (vv.w + zv.w) / 2, Pv
      }
      static TransformCoordinates(vv, zv) {
        return wv.TransformCoordinatesToRef(vv, zv, new wv)
      }
      static TransformCoordinatesToRef(vv, zv, Pv) {
        return wv.TransformCoordinatesFromFloatsToRef(vv._x, vv._y, vv._z, zv, Pv), Pv
      }
      static TransformCoordinatesFromFloatsToRef(vv, zv, Pv, hv, Sv) {
        const ev = hv.m,
          gv = vv * ev[0] + zv * ev[4] + Pv * ev[8] + ev[12],
          pv = vv * ev[1] + zv * ev[5] + Pv * ev[9] + ev[13],
          dv = vv * ev[2] + zv * ev[6] + Pv * ev[10] + ev[14],
          Nv = vv * ev[3] + zv * ev[7] + Pv * ev[11] + ev[15];
        return Sv.x = gv, Sv.y = pv, Sv.z = dv, Sv.w = Nv, Sv
      }
      static TransformNormal(vv, zv) {
        return wv.TransformNormalToRef(vv, zv, new wv)
      }
      static TransformNormalToRef(vv, zv, Pv) {
        const hv = zv.m,
          Sv = vv.x * hv[0] + vv.y * hv[4] + vv.z * hv[8],
          ev = vv.x * hv[1] + vv.y * hv[5] + vv.z * hv[9],
          gv = vv.x * hv[2] + vv.y * hv[6] + vv.z * hv[10];
        return Pv.x = Sv, Pv.y = ev, Pv.z = gv, Pv.w = vv.w, Pv
      }
      static TransformNormalFromFloatsToRef(vv, zv, Pv, hv, Sv, ev) {
        const gv = Sv.m;
        return ev.x = vv * gv[0] + zv * gv[4] + Pv * gv[8], ev.y = vv * gv[1] + zv * gv[5] + Pv * gv[9], ev.z = vv * gv[2] + zv * gv[6] + Pv * gv[10], ev.w = hv, ev
      }
      static FromVector3(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new wv(vv._x, vv._y, vv._z, zv)
      }
      static Dot(vv, zv) {
        return vv.x * zv.x + vv.y * zv.y + vv.z * zv.z + vv.w * zv.w
      }
    }
    wv._V8PerformanceHack = new wv(.5, .5, .5, .5), wv._ZeroReadOnly = wv.Zero();
    class av {
      get x() {
        return this._x
      }
      set x(vv) {
        this._x = vv, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(vv) {
        this._y = vv, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(vv) {
        this._z = vv, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(vv) {
        this._w = vv, this._isDirty = !0
      }
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = vv, this._y = zv, this._z = Pv, this._w = hv
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let vv = lv(this._x);
        return vv = 397 * vv ^ lv(this._y), vv = 397 * vv ^ lv(this._z), vv = 397 * vv ^ lv(this._w), vv
      }
      pPv() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return vv[zv] = this._x, vv[zv + 1] = this._y, vv[zv + 2] = this._z, vv[zv + 3] = this._w, this
      }
      Evv(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return av.FromArrayToRef(vv, zv, this)
      }
      equals(vv) {
        return vv && this._x === vv._x && this._y === vv._y && this._z === vv._z && this._w === vv._w
      }
      equalsWithEpsilon(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hv.e;
        return vv && (0, pv.WithinEpsilon)(this._x, vv._x, zv) && (0, pv.WithinEpsilon)(this._y, vv._y, zv) && (0, pv.WithinEpsilon)(this._z, vv._z, zv) && (0, pv.WithinEpsilon)(this._w, vv._w, zv)
      }
      isApprox(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hv.e;
        return vv && ((0, pv.WithinEpsilon)(this._x, vv._x, zv) && (0, pv.WithinEpsilon)(this._y, vv._y, zv) && (0, pv.WithinEpsilon)(this._z, vv._z, zv) && (0, pv.WithinEpsilon)(this._w, vv._w, zv) || (0, pv.WithinEpsilon)(this._x, -vv._x, zv) && (0, pv.WithinEpsilon)(this._y, -vv._y, zv) && (0, pv.WithinEpsilon)(this._z, -vv._z, zv) && (0, pv.WithinEpsilon)(this._w, -vv._w, zv))
      }
      clone() {
        return new av(this._x, this._y, this._z, this._w)
      }
      Vzv(vv) {
        return this._x = vv._x, this._y = vv._y, this._z = vv._z, this._w = vv._w, this._isDirty = !0, this
      }
      f_(vv, zv, Pv, hv) {
        return this._x = vv, this._y = zv, this._z = Pv, this._w = hv, this._isDirty = !0, this
      }
      set(vv, zv, Pv, hv) {
        return this.f_(vv, zv, Pv, hv)
      }
      Dk(vv) {
        return this.f_(vv, vv, vv, vv)
      }
      add(vv) {
        return new av(this._x + vv._x, this._y + vv._y, this._z + vv._z, this._w + vv._w)
      }
      addInPlace(vv) {
        return this._x += vv._x, this._y += vv._y, this._z += vv._z, this._w += vv._w, this._isDirty = !0, this
      }
      addToRef(vv, zv) {
        return zv._x = this._x + vv._x, zv._y = this._y + vv._y, zv._z = this._z + vv._z, zv._w = this._w + vv._w, zv._isDirty = !0, zv
      }
      addInPlaceFromFloats(vv, zv, Pv, hv) {
        return this._x += vv, this._y += zv, this._z += Pv, this._w += hv, this._isDirty = !0, this
      }
      subtractToRef(vv, zv) {
        return zv._x = this._x - vv._x, zv._y = this._y - vv._y, zv._z = this._z - vv._z, zv._w = this._w - vv._w, zv._isDirty = !0, zv
      }
      subtractFromFloats(vv, zv, Pv, hv) {
        return this.subtractFromFloatsToRef(vv, zv, Pv, hv, new av)
      }
      subtractFromFloatsToRef(vv, zv, Pv, hv, Sv) {
        return Sv._x = this._x - vv, Sv._y = this._y - zv, Sv._z = this._z - Pv, Sv._w = this._w - hv, Sv._isDirty = !0, Sv
      }
      subtract(vv) {
        return new av(this._x - vv._x, this._y - vv._y, this._z - vv._z, this._w - vv._w)
      }
      VPv(vv) {
        return this._x -= vv._x, this._y -= vv._y, this._z -= vv._z, this._w -= vv._w, this._isDirty = !0, this
      }
      scale(vv) {
        return new av(this._x * vv, this._y * vv, this._z * vv, this._w * vv)
      }
      scaleToRef(vv, zv) {
        return zv._x = this._x * vv, zv._y = this._y * vv, zv._z = this._z * vv, zv._w = this._w * vv, zv._isDirty = !0, zv
      }
      scaleInPlace(vv) {
        return this._x *= vv, this._y *= vv, this._z *= vv, this._w *= vv, this._isDirty = !0, this
      }
      scaleAndAddToRef(vv, zv) {
        return zv._x += this._x * vv, zv._y += this._y * vv, zv._z += this._z * vv, zv._w += this._w * vv, zv._isDirty = !0, zv
      }
      multiply(vv) {
        const zv = new av(0, 0, 0, 1);
        return this.multiplyToRef(vv, zv), zv
      }
      multiplyToRef(vv, zv) {
        const Pv = this._x * vv._w + this._y * vv._z - this._z * vv._y + this._w * vv._x,
          hv = -this._x * vv._z + this._y * vv._w + this._z * vv._x + this._w * vv._y,
          Sv = this._x * vv._y - this._y * vv._x + this._z * vv._w + this._w * vv._z,
          ev = -this._x * vv._x - this._y * vv._y - this._z * vv._z + this._w * vv._w;
        return zv.f_(Pv, hv, Sv, ev), zv
      }
      multiplyInPlace(vv) {
        return this.multiplyToRef(vv, this)
      }
      multiplyByFloats(vv, zv, Pv, hv) {
        return this._x *= vv, this._y *= zv, this._z *= Pv, this._w *= hv, this._isDirty = !0, this
      }
      divide(vv) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(vv, zv) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideInPlace(vv) {
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
      Re() {
        return this.negateToRef(new av)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(vv) {
        return vv._x = -this._x, vv._y = -this._y, vv._z = -this._z, vv._w = -this._w, vv._isDirty = !0, vv
      }
      Mev(vv, zv, Pv, hv) {
        return this._x === vv && this._y === zv && this._z === Pv && this._w === hv
      }
      floorToRef(vv) {
        throw new ReferenceError("Can not floor a quaternion")
      }
      floor() {
        throw new ReferenceError("Can not floor a quaternion")
      }
      fractToRef(vv) {
        throw new ReferenceError("Can not fract a quaternion")
      }
      fract() {
        throw new ReferenceError("Can not fract a quaternion")
      }
      conjugateToRef(vv) {
        return vv.f_(-this._x, -this._y, -this._z, this._w), vv
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new av(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const vv = this.conjugate(),
          zv = this.lengthSquared();
        return 0 == zv || 1 == zv || vv.scaleInPlace(1 / zv), vv
      }
      invertInPlace() {
        this.conjugateInPlace();
        const vv = this.lengthSquared();
        return 0 == vv || 1 == vv || this.scaleInPlace(1 / vv), this
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
      normalizeFromLength(vv) {
        return 0 === vv || 1 === vv ? this : this.scaleInPlace(1 / vv)
      }
      normalizeToNew() {
        const vv = new av(0, 0, 0, 1);
        return this.normalizeToRef(vv), vv
      }
      normalizeToRef(vv) {
        const zv = this.length();
        return 0 === zv || 1 === zv ? vv.f_(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / zv, vv)
      }
      toEulerAngles() {
        const vv = Wv.Zero();
        return this.toEulerAnglesToRef(vv), vv
      }
      toEulerAnglesToRef(vv) {
        const zv = this._z,
          Pv = this._x,
          hv = this._y,
          Sv = this._w,
          ev = hv * zv - Pv * Sv,
          gv = .4999999;
        if (ev < -gv) vv._y = 2 * Math.atan2(hv, Sv), vv._x = Math.PI / 2, vv._z = 0, vv._isDirty = !0;
        else if (ev > gv) vv._y = 2 * Math.atan2(hv, Sv), vv._x = -Math.PI / 2, vv._z = 0, vv._isDirty = !0;
        else {
          const gv = Sv * Sv,
            pv = zv * zv,
            dv = Pv * Pv,
            Nv = hv * hv;
          vv._z = Math.atan2(2 * (Pv * hv + zv * Sv), -pv - dv + Nv + gv), vv._x = Math.asin(-2 * ev), vv._y = Math.atan2(2 * (zv * Pv + hv * Sv), pv - dv - Nv + gv), vv._isDirty = !0
        }
        return vv
      }
      toAlphaBetaGammaToRef(vv) {
        const zv = this._z,
          Pv = this._x,
          hv = this._y,
          Sv = this._w,
          ev = Math.sqrt(Pv * Pv + hv * hv),
          gv = Math.sqrt(zv * zv + Sv * Sv),
          pv = 2 * Math.atan2(ev, gv),
          dv = 2 * Math.atan2(zv, Sv),
          Nv = 2 * Math.atan2(hv, Pv),
          lv = (dv + Nv) / 2,
          Tv = (dv - Nv) / 2;
        return vv.set(Tv, pv, lv), vv
      }
      toRotationMatrix(vv) {
        return sv.FromQuaternionToRef(this, vv), vv
      }
      fromRotationMatrix(vv) {
        return av.FromRotationMatrixToRef(vv, this), this
      }
      dot(vv) {
        return this._x * vv._x + this._y * vv._y + this._z * vv._z + this._w * vv._w
      }
      toAxisAngle() {
        const vv = Wv.Zero();
        return {
          axis: vv,
          angle: this.toAxisAngleToRef(vv)
        }
      }
      toAxisAngleToRef(vv) {
        let zv;
        const Pv = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          hv = this._w;
        return Pv > 0 ? (zv = 2 * Math.atan2(Pv, hv), vv.set(this._x / Pv, this._y / Pv, this._z / Pv)) : (zv = 0, vv.set(1, 0, 0)), zv
      }
      static FromRotationMatrix(vv) {
        const zv = new av;
        return av.FromRotationMatrixToRef(vv, zv), zv
      }
      static FromRotationMatrixToRef(vv, zv) {
        const Pv = vv.m,
          hv = Pv[0],
          Sv = Pv[4],
          ev = Pv[8],
          gv = Pv[1],
          pv = Pv[5],
          dv = Pv[9],
          Nv = Pv[2],
          lv = Pv[6],
          Tv = Pv[10],
          Wv = hv + pv + Tv;
        let wv;
        return Wv > 0 ? (wv = .5 / Math.sqrt(Wv + 1), zv._w = .25 / wv, zv._x = (lv - dv) * wv, zv._y = (ev - Nv) * wv, zv._z = (gv - Sv) * wv, zv._isDirty = !0) : hv > pv && hv > Tv ? (wv = 2 * Math.sqrt(1 + hv - pv - Tv), zv._w = (lv - dv) / wv, zv._x = .25 * wv, zv._y = (Sv + gv) / wv, zv._z = (ev + Nv) / wv, zv._isDirty = !0) : pv > Tv ? (wv = 2 * Math.sqrt(1 + pv - hv - Tv), zv._w = (ev - Nv) / wv, zv._x = (Sv + gv) / wv, zv._y = .25 * wv, zv._z = (dv + lv) / wv, zv._isDirty = !0) : (wv = 2 * Math.sqrt(1 + Tv - hv - pv), zv._w = (gv - Sv) / wv, zv._x = (ev + Nv) / wv, zv._y = (dv + lv) / wv, zv._z = .25 * wv, zv._isDirty = !0), zv
      }
      static Dot(vv, zv) {
        return vv._x * zv._x + vv._y * zv._y + vv._z * zv._z + vv._w * zv._w
      }
      static AreClose(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const hv = av.Dot(vv, zv);
        return 1 - hv * hv <= Pv
      }
      static SmoothToRef(vv, zv, Pv, hv, Sv) {
        let ev = 0 === hv ? 1 : Pv / hv;
        return ev = (0, pv.Clamp)(ev, 0, 1), av.SlerpToRef(vv, zv, ev, Sv), Sv
      }
      static Zero() {
        return new av(0, 0, 0, 0)
      }
      static Inverse(vv) {
        return new av(-vv._x, -vv._y, -vv._z, vv._w)
      }
      static InverseToRef(vv, zv) {
        return zv.set(-vv._x, -vv._y, -vv._z, vv._w), zv
      }
      static Identity() {
        return new av(0, 0, 0, 1)
      }
      static IsIdentity(vv) {
        return vv && 0 === vv._x && 0 === vv._y && 0 === vv._z && 1 === vv._w
      }
      static RotationAxis(vv, zv) {
        return av.RotationAxisToRef(vv, zv, new av)
      }
      static RotationAxisToRef(vv, zv, Pv) {
        Pv._w = Math.cos(zv / 2);
        const hv = Math.sin(zv / 2) / vv.length();
        return Pv._x = vv._x * hv, Pv._y = vv._y * hv, Pv._z = vv._z * hv, Pv._isDirty = !0, Pv
      }
      static FromArray(vv, zv) {
        return zv || (zv = 0), new av(vv[zv], vv[zv + 1], vv[zv + 2], vv[zv + 3])
      }
      static FromArrayToRef(vv, zv, Pv) {
        return Pv._x = vv[zv], Pv._y = vv[zv + 1], Pv._z = vv[zv + 2], Pv._w = vv[zv + 3], Pv._isDirty = !0, Pv
      }
      static FromFloatsToRef(vv, zv, Pv, hv, Sv) {
        return Sv.f_(vv, zv, Pv, hv), Sv
      }
      static FromEulerAngles(vv, zv, Pv) {
        const hv = new av;
        return av.RotationYawPitchRollToRef(zv, vv, Pv, hv), hv
      }
      static FromEulerAnglesToRef(vv, zv, Pv, hv) {
        return av.RotationYawPitchRollToRef(zv, vv, Pv, hv), hv
      }
      static FromEulerVector(vv) {
        const zv = new av;
        return av.RotationYawPitchRollToRef(vv._y, vv._x, vv._z, zv), zv
      }
      static FromEulerVectorToRef(vv, zv) {
        return av.RotationYawPitchRollToRef(vv._y, vv._x, vv._z, zv), zv
      }
      static FromUnitVectorsToRef(vv, zv, Pv) {
        let Sv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : hv.e;
        const ev = Wv.Dot(vv, zv) + 1;
        return ev < Sv ? Math.abs(vv.x) > Math.abs(vv.z) ? Pv.set(-vv.y, vv.x, 0, 0) : Pv.set(0, -vv.z, vv.y, 0) : (Wv.CrossToRef(vv, zv, iv.fa[0]), Pv.set(iv.fa[0].x, iv.fa[0].y, iv.fa[0].z, ev)), Pv.normalize()
      }
      static RotationYawPitchRoll(vv, zv, Pv) {
        const hv = new av;
        return av.RotationYawPitchRollToRef(vv, zv, Pv, hv), hv
      }
      static RotationYawPitchRollToRef(vv, zv, Pv, hv) {
        const Sv = .5 * Pv,
          ev = .5 * zv,
          gv = .5 * vv,
          pv = Math.sin(Sv),
          dv = Math.cos(Sv),
          Nv = Math.sin(ev),
          lv = Math.cos(ev),
          Tv = Math.sin(gv),
          Wv = Math.cos(gv);
        return hv._x = Wv * Nv * dv + Tv * lv * pv, hv._y = Tv * lv * dv - Wv * Nv * pv, hv._z = Wv * lv * pv - Tv * Nv * dv, hv._w = Wv * lv * dv + Tv * Nv * pv, hv._isDirty = !0, hv
      }
      static RotationAlphaBetaGamma(vv, zv, Pv) {
        const hv = new av;
        return av.RotationAlphaBetaGammaToRef(vv, zv, Pv, hv), hv
      }
      static RotationAlphaBetaGammaToRef(vv, zv, Pv, hv) {
        const Sv = .5 * (Pv + vv),
          ev = .5 * (Pv - vv),
          gv = .5 * zv;
        return hv._x = Math.cos(ev) * Math.sin(gv), hv._y = Math.sin(ev) * Math.sin(gv), hv._z = Math.sin(Sv) * Math.cos(gv), hv._w = Math.cos(Sv) * Math.cos(gv), hv._isDirty = !0, hv
      }
      static RotationQuaternionFromAxis(vv, zv, Pv) {
        const hv = new av(0, 0, 0, 0);
        return av.RotationQuaternionFromAxisToRef(vv, zv, Pv, hv), hv
      }
      static RotationQuaternionFromAxisToRef(vv, zv, Pv, hv) {
        const Sv = Cv.Matrix[0];
        return vv = vv.normalizeToRef(Cv.fa[0]), zv = zv.normalizeToRef(Cv.fa[1]), Pv = Pv.normalizeToRef(Cv.fa[2]), sv.FromXYZAxesToRef(vv, zv, Pv, Sv), av.FromRotationMatrixToRef(Sv, hv), hv
      }
      static FromLookDirectionLH(vv, zv) {
        const Pv = new av;
        return av.FromLookDirectionLHToRef(vv, zv, Pv), Pv
      }
      static FromLookDirectionLHToRef(vv, zv, Pv) {
        const hv = Cv.Matrix[0];
        return sv.LookDirectionLHToRef(vv, zv, hv), av.FromRotationMatrixToRef(hv, Pv), Pv
      }
      static FromLookDirectionRH(vv, zv) {
        const Pv = new av;
        return av.FromLookDirectionRHToRef(vv, zv, Pv), Pv
      }
      static FromLookDirectionRHToRef(vv, zv, Pv) {
        const hv = Cv.Matrix[0];
        return sv.LookDirectionRHToRef(vv, zv, hv), av.FromRotationMatrixToRef(hv, Pv)
      }
      static Slerp(vv, zv, Pv) {
        const hv = av.Identity();
        return av.SlerpToRef(vv, zv, Pv, hv), hv
      }
      static SlerpToRef(vv, zv, Pv, hv) {
        let Sv, ev, gv = vv._x * zv._x + vv._y * zv._y + vv._z * zv._z + vv._w * zv._w,
          pv = !1;
        if (gv < 0 && (pv = !0, gv = -gv), gv > .999999) ev = 1 - Pv, Sv = pv ? -Pv : Pv;
        else {
          const vv = Math.acos(gv),
            zv = 1 / Math.sin(vv);
          ev = Math.sin((1 - Pv) * vv) * zv, Sv = pv ? -Math.sin(Pv * vv) * zv : Math.sin(Pv * vv) * zv
        }
        return hv._x = ev * vv._x + Sv * zv._x, hv._y = ev * vv._y + Sv * zv._y, hv._z = ev * vv._z + Sv * zv._z, hv._w = ev * vv._w + Sv * zv._w, hv._isDirty = !0, hv
      }
      static Hermite(vv, zv, Pv, hv, Sv) {
        const ev = Sv * Sv,
          gv = Sv * ev,
          pv = 2 * gv - 3 * ev + 1,
          dv = -2 * gv + 3 * ev,
          Nv = gv - 2 * ev + Sv,
          lv = gv - ev,
          Tv = vv._x * pv + Pv._x * dv + zv._x * Nv + hv._x * lv,
          Wv = vv._y * pv + Pv._y * dv + zv._y * Nv + hv._y * lv,
          wv = vv._z * pv + Pv._z * dv + zv._z * Nv + hv._z * lv,
          sv = vv._w * pv + Pv._w * dv + zv._w * Nv + hv._w * lv;
        return new av(Tv, Wv, wv, sv)
      }
      static Hermite1stDerivative(vv, zv, Pv, hv, Sv) {
        const ev = new av;
        return this.Hermite1stDerivativeToRef(vv, zv, Pv, hv, Sv, ev), ev
      }
      static Hermite1stDerivativeToRef(vv, zv, Pv, hv, Sv, ev) {
        const gv = Sv * Sv;
        return ev._x = 6 * (gv - Sv) * vv._x + (3 * gv - 4 * Sv + 1) * zv._x + 6 * (-gv + Sv) * Pv._x + (3 * gv - 2 * Sv) * hv._x, ev._y = 6 * (gv - Sv) * vv._y + (3 * gv - 4 * Sv + 1) * zv._y + 6 * (-gv + Sv) * Pv._y + (3 * gv - 2 * Sv) * hv._y, ev._z = 6 * (gv - Sv) * vv._z + (3 * gv - 4 * Sv + 1) * zv._z + 6 * (-gv + Sv) * Pv._z + (3 * gv - 2 * Sv) * hv._z, ev._w = 6 * (gv - Sv) * vv._w + (3 * gv - 4 * Sv + 1) * zv._w + 6 * (-gv + Sv) * Pv._w + (3 * gv - 2 * Sv) * hv._w, ev._isDirty = !0, ev
      }
      static Normalize(vv) {
        const zv = av.Zero();
        return av.NormalizeToRef(vv, zv), zv
      }
      static NormalizeToRef(vv, zv) {
        return vv.normalizeToRef(zv), zv
      }
      static Clamp(vv, zv, Pv) {
        const hv = new av;
        return av.ClampToRef(vv, zv, Pv, hv), hv
      }
      static ClampToRef(vv, zv, Pv, hv) {
        return hv.f_((0, pv.Clamp)(vv.x, zv.x, Pv.x), (0, pv.Clamp)(vv.y, zv.y, Pv.y), (0, pv.Clamp)(vv.z, zv.z, Pv.z), (0, pv.Clamp)(vv.w, zv.w, Pv.w))
      }
      static Random() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new av((0, pv.RandomRange)(vv, zv), (0, pv.RandomRange)(vv, zv), (0, pv.RandomRange)(vv, zv), (0, pv.RandomRange)(vv, zv))
      }
      static RandomToRef() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).f_((0, pv.RandomRange)(vv, zv), (0, pv.RandomRange)(vv, zv), (0, pv.RandomRange)(vv, zv), (0, pv.RandomRange)(vv, zv))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(vv, zv) {
        return Math.sqrt(av.DistanceSquared(vv, zv))
      }
      static DistanceSquared(vv, zv) {
        const Pv = vv.x - zv.x,
          hv = vv.y - zv.y,
          Sv = vv.z - zv.z,
          ev = vv.w - zv.w;
        return Pv * Pv + hv * hv + Sv * Sv + ev * ev
      }
      static Center(vv, zv) {
        return av.CenterToRef(vv, zv, av.Zero())
      }
      static CenterToRef(vv, zv, Pv) {
        return Pv.f_((vv.x + zv.x) / 2, (vv.y + zv.y) / 2, (vv.z + zv.z) / 2, (vv.w + zv.w) / 2)
      }
    }
    av._V8PerformanceHack = new av(.5, .5, .5, .5);
    class sv {
      static get Use64Bits() {
        return ev.b.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = dv.k._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hv = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = vv, this._isIdentity3x2 = vv || Pv, this._isIdentityDirty = !this._isIdentity && zv, this._isIdentity3x2Dirty = !this._isIdentity3x2 && hv
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, ev.b.MatrixTrackPrecisionChange && ev.b.MatrixTrackedMatrices.push(this), this._m = new ev.b.MatrixCurrentType(16), this.markAsUpdated()
      }
      isIdentity() {
        if (this._isIdentityDirty) {
          this._isIdentityDirty = !1;
          const vv = this._m;
          this._isIdentity = 1 === vv[0] && 0 === vv[1] && 0 === vv[2] && 0 === vv[3] && 0 === vv[4] && 1 === vv[5] && 0 === vv[6] && 0 === vv[7] && 0 === vv[8] && 0 === vv[9] && 1 === vv[10] && 0 === vv[11] && 0 === vv[12] && 0 === vv[13] && 0 === vv[14] && 1 === vv[15]
        }
        return this._isIdentity
      }
      isIdentityAs3x2() {
        return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] || 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 !== this._m[9] || 0 !== this._m[10] || 0 !== this._m[11] || 0 !== this._m[12] || 0 !== this._m[13] || 0 !== this._m[14] ? this._isIdentity3x2 = !1 : this._isIdentity3x2 = !0), this._isIdentity3x2
      }
      determinant() {
        if (!0 === this._isIdentity) return 1;
        const vv = this._m,
          zv = vv[0],
          Pv = vv[1],
          hv = vv[2],
          Sv = vv[3],
          ev = vv[4],
          gv = vv[5],
          pv = vv[6],
          dv = vv[7],
          Nv = vv[8],
          lv = vv[9],
          Tv = vv[10],
          Wv = vv[11],
          wv = vv[12],
          av = vv[13],
          sv = vv[14],
          Cv = vv[15],
          iv = Tv * Cv - sv * Wv,
          cv = lv * Cv - av * Wv,
          Gv = lv * sv - av * Tv,
          mv = Nv * Cv - wv * Wv,
          jv = Nv * sv - Tv * wv,
          fv = Nv * av - wv * lv;
        return zv * +(gv * iv - pv * cv + dv * Gv) + Pv * -(ev * iv - pv * mv + dv * jv) + hv * +(ev * cv - gv * mv + dv * fv) + Sv * -(ev * Gv - gv * jv + pv * fv)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!vv) return this._m;
        const Pv = this._m;
        for (let hv = 0; hv < 16; hv++) vv[zv + hv] = Pv[hv];
        return this
      }
      pPv() {
        return this._m
      }
      Evv(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return sv.FromArrayToRef(vv, zv, this)
      }
      f_() {
        for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
        return sv.FromArrayToRef(zv, 0, this)
      }
      set() {
        const vv = this._m;
        for (let zv = 0; zv < 16; zv++) vv[zv] = zv < 0 || arguments.length <= zv ? void 0 : arguments[zv];
        return this.markAsUpdated(), this
      }
      Dk(vv) {
        const zv = this._m;
        for (let Pv = 0; Pv < 16; Pv++) zv[Pv] = vv;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return sv.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(vv) {
        const zv = new sv;
        return this.addToRef(vv, zv), zv
      }
      addToRef(vv, zv) {
        const Pv = this._m,
          hv = zv._m,
          Sv = vv.m;
        for (let ev = 0; ev < 16; ev++) hv[ev] = Pv[ev] + Sv[ev];
        return zv.markAsUpdated(), zv
      }
      addToSelf(vv) {
        const zv = this._m,
          Pv = vv.m;
        return zv[0] += Pv[0], zv[1] += Pv[1], zv[2] += Pv[2], zv[3] += Pv[3], zv[4] += Pv[4], zv[5] += Pv[5], zv[6] += Pv[6], zv[7] += Pv[7], zv[8] += Pv[8], zv[9] += Pv[9], zv[10] += Pv[10], zv[11] += Pv[11], zv[12] += Pv[12], zv[13] += Pv[13], zv[14] += Pv[14], zv[15] += Pv[15], this.markAsUpdated(), this
      }
      addInPlace(vv) {
        const zv = this._m,
          Pv = vv.m;
        for (let hv = 0; hv < 16; hv++) zv[hv] += Pv[hv];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const vv = this._m;
        for (let zv = 0; zv < 16; zv++) vv[zv] += zv < 0 || arguments.length <= zv ? void 0 : arguments[zv];
        return this.markAsUpdated(), this
      }
      subtract(vv) {
        const zv = this._m,
          Pv = vv.m;
        for (let hv = 0; hv < 16; hv++) zv[hv] -= Pv[hv];
        return this.markAsUpdated(), this
      }
      subtractToRef(vv, zv) {
        const Pv = this._m,
          hv = vv.m,
          Sv = zv._m;
        for (let ev = 0; ev < 16; ev++) Sv[ev] = Pv[ev] - hv[ev];
        return zv.markAsUpdated(), zv
      }
      VPv(vv) {
        const zv = this._m,
          Pv = vv.m;
        for (let hv = 0; hv < 16; hv++) zv[hv] -= Pv[hv];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
        return this.subtractFromFloatsToRef(...zv, new sv)
      }
      subtractFromFloatsToRef() {
        for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
        const hv = zv.pop(),
          Sv = this._m,
          ev = hv._m,
          gv = zv;
        for (let pv = 0; pv < 16; pv++) ev[pv] = Sv[pv] - gv[pv];
        return hv.markAsUpdated(), hv
      }
      invertToRef(vv) {
        return !0 === this._isIdentity ? (sv.IdentityToRef(vv), vv) : ((0, dv.h)(this, vv.pPv()) ? vv.markAsUpdated() : vv.Vzv(this), vv)
      }
      addAtIndex(vv, zv) {
        return this._m[vv] += zv, this.markAsUpdated(), this
      }
      multiplyAtIndex(vv, zv) {
        return this._m[vv] *= zv, this.markAsUpdated(), this
      }
      setTranslationFromFloats(vv, zv, Pv) {
        return this._m[12] = vv, this._m[13] = zv, this._m[14] = Pv, this.markAsUpdated(), this
      }
      addTranslationFromFloats(vv, zv, Pv) {
        return this._m[12] += vv, this._m[13] += zv, this._m[14] += Pv, this.markAsUpdated(), this
      }
      setTranslation(vv) {
        return this.setTranslationFromFloats(vv._x, vv._y, vv._z)
      }
      getTranslation() {
        return new Wv(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(vv) {
        return vv.x = this._m[12], vv.y = this._m[13], vv.z = this._m[14], vv
      }
      removeRotationAndScaling() {
        const vv = this.m;
        return sv.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, vv[12], vv[13], vv[14], vv[15], this), this._updateIdentityStatus(0 === vv[12] && 0 === vv[13] && 0 === vv[14] && 1 === vv[15]), this
      }
      Vzv(vv) {
        vv.copyToArray(this._m);
        const zv = vv;
        return this.updateFlag = zv.updateFlag, this._updateIdentityStatus(zv._isIdentity, zv._isIdentityDirty, zv._isIdentity3x2, zv._isIdentity3x2Dirty), this
      }
      copyToArray(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, dv.d)(this, vv, zv), this
      }
      multiply(vv) {
        const zv = new sv;
        return this.multiplyToRef(vv, zv), zv
      }
      multiplyInPlace(vv) {
        const zv = this._m,
          Pv = vv.m;
        for (let hv = 0; hv < 16; hv++) zv[hv] *= Pv[hv];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const vv = this._m;
        for (let zv = 0; zv < 16; zv++) vv[zv] *= zv < 0 || arguments.length <= zv ? void 0 : arguments[zv];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
        const hv = zv.pop(),
          Sv = this._m,
          ev = hv._m,
          gv = zv;
        for (let pv = 0; pv < 16; pv++) ev[pv] = Sv[pv] * gv[pv];
        return hv.markAsUpdated(), hv
      }
      multiplyToRef(vv, zv) {
        return this._isIdentity ? (zv.Vzv(vv), zv) : vv._isIdentity ? (zv.Vzv(this), zv) : (this.multiplyToArray(vv, zv._m, 0), zv.markAsUpdated(), zv)
      }
      multiplyToArray(vv, zv, Pv) {
        return (0, dv.o)(this, vv, zv, Pv), this
      }
      divide(vv) {
        return this.divideToRef(vv, new sv)
      }
      divideToRef(vv, zv) {
        const Pv = this._m,
          hv = vv.m,
          Sv = zv._m;
        for (let ev = 0; ev < 16; ev++) Sv[ev] = Pv[ev] / hv[ev];
        return zv.markAsUpdated(), zv
      }
      divideInPlace(vv) {
        const zv = this._m,
          Pv = vv.m;
        for (let hv = 0; hv < 16; hv++) zv[hv] /= Pv[hv];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(vv) {
        const zv = this._m,
          Pv = vv.m;
        for (let hv = 0; hv < 16; hv++) zv[hv] = Math.min(zv[hv], Pv[hv]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const vv = this._m;
        for (let zv = 0; zv < 16; zv++) vv[zv] = Math.min(vv[zv], zv < 0 || arguments.length <= zv ? void 0 : arguments[zv]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(vv) {
        const zv = this._m,
          Pv = vv.m;
        for (let hv = 0; hv < 16; hv++) zv[hv] = Math.max(zv[hv], Pv[hv]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const vv = this._m;
        for (let zv = 0; zv < 16; zv++) vv[zv] = Math.max(vv[zv], zv < 0 || arguments.length <= zv ? void 0 : arguments[zv]);
        return this.markAsUpdated(), this
      }
      Re() {
        return this.negateToRef(new sv)
      }
      negateInPlace() {
        const vv = this._m;
        for (let zv = 0; zv < 16; zv++) vv[zv] = -vv[zv];
        return this.markAsUpdated(), this
      }
      negateToRef(vv) {
        const zv = this._m,
          Pv = vv._m;
        for (let hv = 0; hv < 16; hv++) Pv[hv] = -zv[hv];
        return vv.markAsUpdated(), vv
      }
      equals(vv) {
        const zv = vv;
        if (!zv) return !1;
        if ((this._isIdentity || zv._isIdentity) && !this._isIdentityDirty && !zv._isIdentityDirty) return this._isIdentity && zv._isIdentity;
        const Pv = this.m,
          hv = zv.m;
        return Pv[0] === hv[0] && Pv[1] === hv[1] && Pv[2] === hv[2] && Pv[3] === hv[3] && Pv[4] === hv[4] && Pv[5] === hv[5] && Pv[6] === hv[6] && Pv[7] === hv[7] && Pv[8] === hv[8] && Pv[9] === hv[9] && Pv[10] === hv[10] && Pv[11] === hv[11] && Pv[12] === hv[12] && Pv[13] === hv[13] && Pv[14] === hv[14] && Pv[15] === hv[15]
      }
      equalsWithEpsilon(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Pv = this._m,
          hv = vv.m;
        for (let Sv = 0; Sv < 16; Sv++)
          if (!(0, pv.WithinEpsilon)(Pv[Sv], hv[Sv], zv)) return !1;
        return !0
      }
      Mev() {
        const vv = this._m;
        for (let zv = 0; zv < 16; zv++)
          if (vv[zv] != (zv < 0 || arguments.length <= zv ? void 0 : arguments[zv])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new sv)
      }
      floorToRef(vv) {
        const zv = this._m,
          Pv = vv._m;
        for (let hv = 0; hv < 16; hv++) Pv[hv] = Math.floor(zv[hv]);
        return vv.markAsUpdated(), vv
      }
      fract() {
        return this.fractToRef(new sv)
      }
      fractToRef(vv) {
        const zv = this._m,
          Pv = vv._m;
        for (let hv = 0; hv < 16; hv++) Pv[hv] = zv[hv] - Math.floor(zv[hv]);
        return vv.markAsUpdated(), vv
      }
      clone() {
        const vv = new sv;
        return vv.Vzv(this), vv
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let vv = lv(this._m[0]);
        for (let zv = 1; zv < 16; zv++) vv = 397 * vv ^ lv(this._m[zv]);
        return vv
      }
      decomposeToTransformNode(vv) {
        return vv.rotationQuaternion = vv.rotationQuaternion || new av, this.decompose(vv.pp, vv.rotationQuaternion, vv.position)
      }
      decompose(vv, zv, Pv, hv) {
        let Sv = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return Pv && Pv.Dk(0), vv && vv.Dk(1), zv && zv.f_(0, 0, 0, 1), !0;
        const ev = this._m;
        if (Pv && Pv.f_(ev[12], ev[13], ev[14]), (vv = vv || Cv.fa[0]).x = Math.sqrt(ev[0] * ev[0] + ev[1] * ev[1] + ev[2] * ev[2]), vv.y = Math.sqrt(ev[4] * ev[4] + ev[5] * ev[5] + ev[6] * ev[6]), vv.z = Math.sqrt(ev[8] * ev[8] + ev[9] * ev[9] + ev[10] * ev[10]), hv) {
          const zv = (Sv ? hv.absoluteScaling.x : hv.pp.x) < 0 ? -1 : 1,
            Pv = (Sv ? hv.absoluteScaling.y : hv.pp.y) < 0 ? -1 : 1,
            ev = (Sv ? hv.absoluteScaling.z : hv.pp.z) < 0 ? -1 : 1;
          vv.x *= zv, vv.y *= Pv, vv.z *= ev
        } else this.determinant() <= 0 && (vv.y *= -1);
        if (0 === vv._x || 0 === vv._y || 0 === vv._z) return zv && zv.f_(0, 0, 0, 1), !1;
        if (zv) {
          const Pv = 1 / vv._x,
            hv = 1 / vv._y,
            Sv = 1 / vv._z;
          sv.FromValuesToRef(ev[0] * Pv, ev[1] * Pv, ev[2] * Pv, 0, ev[4] * hv, ev[5] * hv, ev[6] * hv, 0, ev[8] * Sv, ev[9] * Sv, ev[10] * Sv, 0, 0, 0, 0, 1, Cv.Matrix[0]), av.FromRotationMatrixToRef(Cv.Matrix[0], zv)
        }
        return !0
      }
      getRow(vv) {
        if (vv < 0 || vv > 3) return null;
        const zv = 4 * vv;
        return new wv(this._m[zv + 0], this._m[zv + 1], this._m[zv + 2], this._m[zv + 3])
      }
      getRowToRef(vv, zv) {
        if (vv >= 0 && vv <= 3) {
          const Pv = 4 * vv;
          zv.x = this._m[Pv + 0], zv.y = this._m[Pv + 1], zv.z = this._m[Pv + 2], zv.w = this._m[Pv + 3]
        }
        return zv
      }
      setRow(vv, zv) {
        return this.setRowFromFloats(vv, zv.x, zv.y, zv.z, zv.w)
      }
      transpose() {
        const vv = new sv;
        return sv.TransposeToRef(this, vv), vv
      }
      transposeToRef(vv) {
        return sv.TransposeToRef(this, vv), vv
      }
      setRowFromFloats(vv, zv, Pv, hv, Sv) {
        if (vv < 0 || vv > 3) return this;
        const ev = 4 * vv;
        return this._m[ev + 0] = zv, this._m[ev + 1] = Pv, this._m[ev + 2] = hv, this._m[ev + 3] = Sv, this.markAsUpdated(), this
      }
      scale(vv) {
        const zv = new sv;
        return this.scaleToRef(vv, zv), zv
      }
      scaleToRef(vv, zv) {
        for (let Pv = 0; Pv < 16; Pv++) zv._m[Pv] = this._m[Pv] * vv;
        return zv.markAsUpdated(), zv
      }
      scaleAndAddToRef(vv, zv) {
        for (let Pv = 0; Pv < 16; Pv++) zv._m[Pv] += this._m[Pv] * vv;
        return zv.markAsUpdated(), zv
      }
      scaleInPlace(vv) {
        const zv = this._m;
        for (let Pv = 0; Pv < 16; Pv++) zv[Pv] *= vv;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(vv) {
        const zv = Cv.Matrix[0];
        this.invertToRef(zv), zv.transposeToRef(vv);
        const Pv = vv._m;
        return sv.FromValuesToRef(Pv[0], Pv[1], Pv[2], 0, Pv[4], Pv[5], Pv[6], 0, Pv[8], Pv[9], Pv[10], 0, 0, 0, 0, 1, vv), vv
      }
      getRotationMatrix() {
        const vv = new sv;
        return this.getRotationMatrixToRef(vv), vv
      }
      getRotationMatrixToRef(vv) {
        const zv = Cv.fa[0];
        if (!this.decompose(zv)) return sv.IdentityToRef(vv), vv;
        const Pv = this._m,
          hv = 1 / zv._x,
          Sv = 1 / zv._y,
          ev = 1 / zv._z;
        return sv.FromValuesToRef(Pv[0] * hv, Pv[1] * hv, Pv[2] * hv, 0, Pv[4] * Sv, Pv[5] * Sv, Pv[6] * Sv, 0, Pv[8] * ev, Pv[9] * ev, Pv[10] * ev, 0, 0, 0, 0, 1, vv), vv
      }
      toggleModelMatrixHandInPlace() {
        const vv = this._m;
        return vv[2] *= -1, vv[6] *= -1, vv[8] *= -1, vv[9] *= -1, vv[14] *= -1, this.markAsUpdated(), this
      }
      toggleProjectionMatrixHandInPlace() {
        const vv = this._m;
        return vv[8] *= -1, vv[9] *= -1, vv[10] *= -1, vv[11] *= -1, this.markAsUpdated(), this
      }
      _convertProjectionToHalfZRangeInPlace() {
        return this.multiplyToRef(cv, this), this
      }
      static FromArray(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Pv = new sv;
        return sv.FromArrayToRef(vv, zv, Pv), Pv
      }
      static FromArrayToRef(vv, zv, Pv) {
        for (let hv = 0; hv < 16; hv++) Pv._m[hv] = vv[hv + zv];
        return Pv.markAsUpdated(), Pv
      }
      static FromFloat32ArrayToRefScaled(vv, zv, Pv, hv) {
        return hv._m[0] = vv[0 + zv] * Pv, hv._m[1] = vv[1 + zv] * Pv, hv._m[2] = vv[2 + zv] * Pv, hv._m[3] = vv[3 + zv] * Pv, hv._m[4] = vv[4 + zv] * Pv, hv._m[5] = vv[5 + zv] * Pv, hv._m[6] = vv[6 + zv] * Pv, hv._m[7] = vv[7 + zv] * Pv, hv._m[8] = vv[8 + zv] * Pv, hv._m[9] = vv[9 + zv] * Pv, hv._m[10] = vv[10 + zv] * Pv, hv._m[11] = vv[11 + zv] * Pv, hv._m[12] = vv[12 + zv] * Pv, hv._m[13] = vv[13 + zv] * Pv, hv._m[14] = vv[14 + zv] * Pv, hv._m[15] = vv[15 + zv] * Pv, hv.markAsUpdated(), hv
      }
      static get IdentityReadOnly() {
        return sv._IdentityReadOnly
      }
      static FromValuesToRef(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv, lv, Tv, Wv, wv, av, sv, Cv) {
        const iv = Cv._m;
        iv[0] = vv, iv[1] = zv, iv[2] = Pv, iv[3] = hv, iv[4] = Sv, iv[5] = ev, iv[6] = gv, iv[7] = pv, iv[8] = dv, iv[9] = Nv, iv[10] = lv, iv[11] = Tv, iv[12] = Wv, iv[13] = wv, iv[14] = av, iv[15] = sv, Cv.markAsUpdated()
      }
      static FromValues(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv, lv, Tv, Wv, wv, av, Cv) {
        const iv = new sv,
          cv = iv._m;
        return cv[0] = vv, cv[1] = zv, cv[2] = Pv, cv[3] = hv, cv[4] = Sv, cv[5] = ev, cv[6] = gv, cv[7] = pv, cv[8] = dv, cv[9] = Nv, cv[10] = lv, cv[11] = Tv, cv[12] = Wv, cv[13] = wv, cv[14] = av, cv[15] = Cv, iv.markAsUpdated(), iv
      }
      static Compose(vv, zv, Pv) {
        const hv = new sv;
        return sv.ComposeToRef(vv, zv, Pv, hv), hv
      }
      static ComposeToRef(vv, zv, Pv, hv) {
        const Sv = hv._m,
          ev = zv._x,
          gv = zv._y,
          pv = zv._z,
          dv = zv._w,
          Nv = ev + ev,
          lv = gv + gv,
          Tv = pv + pv,
          Wv = ev * Nv,
          wv = ev * lv,
          av = ev * Tv,
          sv = gv * lv,
          Cv = gv * Tv,
          iv = pv * Tv,
          cv = dv * Nv,
          Gv = dv * lv,
          mv = dv * Tv,
          jv = vv._x,
          fv = vv._y,
          Fv = vv._z;
        return Sv[0] = (1 - (sv + iv)) * jv, Sv[1] = (wv + mv) * jv, Sv[2] = (av - Gv) * jv, Sv[3] = 0, Sv[4] = (wv - mv) * fv, Sv[5] = (1 - (Wv + iv)) * fv, Sv[6] = (Cv + cv) * fv, Sv[7] = 0, Sv[8] = (av + Gv) * Fv, Sv[9] = (Cv - cv) * Fv, Sv[10] = (1 - (Wv + sv)) * Fv, Sv[11] = 0, Sv[12] = Pv._x, Sv[13] = Pv._y, Sv[14] = Pv._z, Sv[15] = 1, hv.markAsUpdated(), hv
      }
      static Identity() {
        const vv = sv.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return vv._updateIdentityStatus(!0), vv
      }
      static IdentityToRef(vv) {
        return sv.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, vv), vv._updateIdentityStatus(!0), vv
      }
      static Zero() {
        const vv = sv.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return vv._updateIdentityStatus(!1), vv
      }
      static RotationX(vv) {
        const zv = new sv;
        return sv.RotationXToRef(vv, zv), zv
      }
      static Invert(vv) {
        const zv = new sv;
        return vv.invertToRef(zv), zv
      }
      static RotationXToRef(vv, zv) {
        const Pv = Math.sin(vv),
          hv = Math.cos(vv);
        return sv.FromValuesToRef(1, 0, 0, 0, 0, hv, Pv, 0, 0, -Pv, hv, 0, 0, 0, 0, 1, zv), zv._updateIdentityStatus(1 === hv && 0 === Pv), zv
      }
      static RotationY(vv) {
        const zv = new sv;
        return sv.RotationYToRef(vv, zv), zv
      }
      static RotationYToRef(vv, zv) {
        const Pv = Math.sin(vv),
          hv = Math.cos(vv);
        return sv.FromValuesToRef(hv, 0, -Pv, 0, 0, 1, 0, 0, Pv, 0, hv, 0, 0, 0, 0, 1, zv), zv._updateIdentityStatus(1 === hv && 0 === Pv), zv
      }
      static RotationZ(vv) {
        const zv = new sv;
        return sv.RotationZToRef(vv, zv), zv
      }
      static RotationZToRef(vv, zv) {
        const Pv = Math.sin(vv),
          hv = Math.cos(vv);
        return sv.FromValuesToRef(hv, Pv, 0, 0, -Pv, hv, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, zv), zv._updateIdentityStatus(1 === hv && 0 === Pv), zv
      }
      static RotationAxis(vv, zv) {
        const Pv = new sv;
        return sv.RotationAxisToRef(vv, zv, Pv), Pv
      }
      static RotationAxisToRef(vv, zv, Pv) {
        const hv = Math.sin(-zv),
          Sv = Math.cos(-zv),
          ev = 1 - Sv;
        vv = vv.normalizeToRef(Cv.fa[0]);
        const gv = Pv._m;
        return gv[0] = vv._x * vv._x * ev + Sv, gv[1] = vv._x * vv._y * ev - vv._z * hv, gv[2] = vv._x * vv._z * ev + vv._y * hv, gv[3] = 0, gv[4] = vv._y * vv._x * ev + vv._z * hv, gv[5] = vv._y * vv._y * ev + Sv, gv[6] = vv._y * vv._z * ev - vv._x * hv, gv[7] = 0, gv[8] = vv._z * vv._x * ev - vv._y * hv, gv[9] = vv._z * vv._y * ev + vv._x * hv, gv[10] = vv._z * vv._z * ev + Sv, gv[11] = 0, gv[12] = 0, gv[13] = 0, gv[14] = 0, gv[15] = 1, Pv.markAsUpdated(), Pv
      }
      static RotationAlignToRef(vv, zv, Pv) {
        let Sv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const ev = Wv.Dot(zv, vv),
          gv = Pv._m;
        if (ev < -1 + hv.e) gv[0] = -1, gv[1] = 0, gv[2] = 0, gv[3] = 0, gv[4] = 0, gv[5] = Sv ? 1 : -1, gv[6] = 0, gv[7] = 0, gv[8] = 0, gv[9] = 0, gv[10] = Sv ? -1 : 1, gv[11] = 0;
        else {
          const Pv = Wv.Cross(zv, vv),
            hv = 1 / (1 + ev);
          gv[0] = Pv._x * Pv._x * hv + ev, gv[1] = Pv._y * Pv._x * hv - Pv._z, gv[2] = Pv._z * Pv._x * hv + Pv._y, gv[3] = 0, gv[4] = Pv._x * Pv._y * hv + Pv._z, gv[5] = Pv._y * Pv._y * hv + ev, gv[6] = Pv._z * Pv._y * hv - Pv._x, gv[7] = 0, gv[8] = Pv._x * Pv._z * hv - Pv._y, gv[9] = Pv._y * Pv._z * hv + Pv._x, gv[10] = Pv._z * Pv._z * hv + ev, gv[11] = 0
        }
        return gv[12] = 0, gv[13] = 0, gv[14] = 0, gv[15] = 1, Pv.markAsUpdated(), Pv
      }
      static RotationYawPitchRoll(vv, zv, Pv) {
        const hv = new sv;
        return sv.RotationYawPitchRollToRef(vv, zv, Pv, hv), hv
      }
      static RotationYawPitchRollToRef(vv, zv, Pv, hv) {
        return av.RotationYawPitchRollToRef(vv, zv, Pv, Cv.Quaternion[0]), Cv.Quaternion[0].toRotationMatrix(hv), hv
      }
      static Scaling(vv, zv, Pv) {
        const hv = new sv;
        return sv.ScalingToRef(vv, zv, Pv, hv), hv
      }
      static ScalingToRef(vv, zv, Pv, hv) {
        return sv.FromValuesToRef(vv, 0, 0, 0, 0, zv, 0, 0, 0, 0, Pv, 0, 0, 0, 0, 1, hv), hv._updateIdentityStatus(1 === vv && 1 === zv && 1 === Pv), hv
      }
      static Translation(vv, zv, Pv) {
        const hv = new sv;
        return sv.TranslationToRef(vv, zv, Pv, hv), hv
      }
      static TranslationToRef(vv, zv, Pv, hv) {
        return sv.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, vv, zv, Pv, 1, hv), hv._updateIdentityStatus(0 === vv && 0 === zv && 0 === Pv), hv
      }
      static Lerp(vv, zv, Pv) {
        const hv = new sv;
        return sv.LerpToRef(vv, zv, Pv, hv), hv
      }
      static LerpToRef(vv, zv, Pv, hv) {
        const Sv = hv._m,
          ev = vv.m,
          gv = zv.m;
        for (let pv = 0; pv < 16; pv++) Sv[pv] = ev[pv] * (1 - Pv) + gv[pv] * Pv;
        return hv.markAsUpdated(), hv
      }
      static DecomposeLerp(vv, zv, Pv) {
        const hv = new sv;
        return sv.DecomposeLerpToRef(vv, zv, Pv, hv), hv
      }
      static DecomposeLerpToRef(vv, zv, Pv, hv) {
        const Sv = Cv.fa[0],
          ev = Cv.Quaternion[0],
          gv = Cv.fa[1];
        vv.decompose(Sv, ev, gv);
        const pv = Cv.fa[2],
          dv = Cv.Quaternion[1],
          Nv = Cv.fa[3];
        zv.decompose(pv, dv, Nv);
        const lv = Cv.fa[4];
        Wv.LerpToRef(Sv, pv, Pv, lv);
        const Tv = Cv.Quaternion[2];
        av.SlerpToRef(ev, dv, Pv, Tv);
        const wv = Cv.fa[5];
        return Wv.LerpToRef(gv, Nv, Pv, wv), sv.ComposeToRef(lv, Tv, wv, hv), hv
      }
      static LookAtLH(vv, zv, Pv) {
        const hv = new sv;
        return sv.LookAtLHToRef(vv, zv, Pv, hv), hv
      }
      static LookAtLHToRef(vv, zv, Pv, hv) {
        const Sv = Cv.fa[0],
          ev = Cv.fa[1],
          gv = Cv.fa[2];
        zv.subtractToRef(vv, gv), gv.normalize(), Wv.CrossToRef(Pv, gv, Sv);
        const pv = Sv.lengthSquared();
        0 === pv ? Sv.x = 1 : Sv.normalizeFromLength(Math.sqrt(pv)), Wv.CrossToRef(gv, Sv, ev), ev.normalize();
        const dv = -Wv.Dot(Sv, vv),
          Nv = -Wv.Dot(ev, vv),
          lv = -Wv.Dot(gv, vv);
        return sv.FromValuesToRef(Sv._x, ev._x, gv._x, 0, Sv._y, ev._y, gv._y, 0, Sv._z, ev._z, gv._z, 0, dv, Nv, lv, 1, hv), hv
      }
      static LookAtRH(vv, zv, Pv) {
        const hv = new sv;
        return sv.LookAtRHToRef(vv, zv, Pv, hv), hv
      }
      static LookAtRHToRef(vv, zv, Pv, hv) {
        const Sv = Cv.fa[0],
          ev = Cv.fa[1],
          gv = Cv.fa[2];
        vv.subtractToRef(zv, gv), gv.normalize(), Wv.CrossToRef(Pv, gv, Sv);
        const pv = Sv.lengthSquared();
        0 === pv ? Sv.x = 1 : Sv.normalizeFromLength(Math.sqrt(pv)), Wv.CrossToRef(gv, Sv, ev), ev.normalize();
        const dv = -Wv.Dot(Sv, vv),
          Nv = -Wv.Dot(ev, vv),
          lv = -Wv.Dot(gv, vv);
        return sv.FromValuesToRef(Sv._x, ev._x, gv._x, 0, Sv._y, ev._y, gv._y, 0, Sv._z, ev._z, gv._z, 0, dv, Nv, lv, 1, hv), hv
      }
      static LookDirectionLH(vv, zv) {
        const Pv = new sv;
        return sv.LookDirectionLHToRef(vv, zv, Pv), Pv
      }
      static LookDirectionLHToRef(vv, zv, Pv) {
        const hv = Cv.fa[0];
        hv.Vzv(vv), hv.scaleInPlace(-1);
        const Sv = Cv.fa[1];
        return Wv.CrossToRef(zv, hv, Sv), sv.FromValuesToRef(Sv._x, Sv._y, Sv._z, 0, zv._x, zv._y, zv._z, 0, hv._x, hv._y, hv._z, 0, 0, 0, 0, 1, Pv), Pv
      }
      static LookDirectionRH(vv, zv) {
        const Pv = new sv;
        return sv.LookDirectionRHToRef(vv, zv, Pv), Pv
      }
      static LookDirectionRHToRef(vv, zv, Pv) {
        const hv = Cv.fa[2];
        return Wv.CrossToRef(zv, vv, hv), sv.FromValuesToRef(hv._x, hv._y, hv._z, 0, zv._x, zv._y, zv._z, 0, vv._x, vv._y, vv._z, 0, 0, 0, 0, 1, Pv), Pv
      }
      static OrthoLH(vv, zv, Pv, hv, Sv) {
        const ev = new sv;
        return sv.OrthoLHToRef(vv, zv, Pv, hv, ev, Sv), ev
      }
      static OrthoLHToRef(vv, zv, Pv, hv, Sv, ev) {
        const gv = 2 / vv,
          pv = 2 / zv,
          dv = 2 / (hv - Pv),
          Nv = -(hv + Pv) / (hv - Pv);
        return sv.FromValuesToRef(gv, 0, 0, 0, 0, pv, 0, 0, 0, 0, dv, 0, 0, 0, Nv, 1, Sv), ev && Sv.multiplyToRef(cv, Sv), Sv._updateIdentityStatus(1 === gv && 1 === pv && 1 === dv && 0 === Nv), Sv
      }
      static OrthoOffCenterLH(vv, zv, Pv, hv, Sv, ev, gv) {
        const pv = new sv;
        return sv.OrthoOffCenterLHToRef(vv, zv, Pv, hv, Sv, ev, pv, gv), pv
      }
      static OrthoOffCenterLHToRef(vv, zv, Pv, hv, Sv, ev, gv, pv) {
        const dv = 2 / (zv - vv),
          Nv = 2 / (hv - Pv),
          lv = 2 / (ev - Sv),
          Tv = -(ev + Sv) / (ev - Sv),
          Wv = (vv + zv) / (vv - zv),
          wv = (hv + Pv) / (Pv - hv);
        return sv.FromValuesToRef(dv, 0, 0, 0, 0, Nv, 0, 0, 0, 0, lv, 0, Wv, wv, Tv, 1, gv), pv && gv.multiplyToRef(cv, gv), gv.markAsUpdated(), gv
      }
      static ObliqueOffCenterLHToRef(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv, lv) {
        const Tv = -gv * Math.cos(pv),
          Wv = -gv * Math.sin(pv);
        return sv.TranslationToRef(0, 0, -dv, Cv.Matrix[1]), sv.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, Tv, Wv, 1, 0, 0, 0, 0, 1, Cv.Matrix[0]), Cv.Matrix[1].multiplyToRef(Cv.Matrix[0], Cv.Matrix[0]), sv.TranslationToRef(0, 0, dv, Cv.Matrix[1]), Cv.Matrix[0].multiplyToRef(Cv.Matrix[1], Cv.Matrix[0]), sv.OrthoOffCenterLHToRef(vv, zv, Pv, hv, Sv, ev, Nv, lv), Cv.Matrix[0].multiplyToRef(Nv, Nv), Nv
      }
      static OrthoOffCenterRH(vv, zv, Pv, hv, Sv, ev, gv) {
        const pv = new sv;
        return sv.OrthoOffCenterRHToRef(vv, zv, Pv, hv, Sv, ev, pv, gv), pv
      }
      static OrthoOffCenterRHToRef(vv, zv, Pv, hv, Sv, ev, gv, pv) {
        return sv.OrthoOffCenterLHToRef(vv, zv, Pv, hv, Sv, ev, gv, pv), gv._m[10] *= -1, gv
      }
      static ObliqueOffCenterRHToRef(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv, lv) {
        const Tv = gv * Math.cos(pv),
          Wv = gv * Math.sin(pv);
        return sv.TranslationToRef(0, 0, dv, Cv.Matrix[1]), sv.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, Tv, Wv, 1, 0, 0, 0, 0, 1, Cv.Matrix[0]), Cv.Matrix[1].multiplyToRef(Cv.Matrix[0], Cv.Matrix[0]), sv.TranslationToRef(0, 0, -dv, Cv.Matrix[1]), Cv.Matrix[0].multiplyToRef(Cv.Matrix[1], Cv.Matrix[0]), sv.OrthoOffCenterRHToRef(vv, zv, Pv, hv, Sv, ev, Nv, lv), Cv.Matrix[0].multiplyToRef(Nv, Nv), Nv
      }
      static PerspectiveLH(vv, zv, Pv, hv, Sv) {
        let ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const gv = new sv,
          pv = 2 * Pv / vv,
          dv = 2 * Pv / zv,
          Nv = (hv + Pv) / (hv - Pv),
          lv = -2 * hv * Pv / (hv - Pv),
          Tv = Math.tan(ev);
        return sv.FromValuesToRef(pv, 0, 0, 0, 0, dv, 0, Tv, 0, 0, Nv, 1, 0, 0, lv, 0, gv), Sv && gv.multiplyToRef(cv, gv), gv._updateIdentityStatus(!1), gv
      }
      static PerspectiveFovLH(vv, zv, Pv, hv, Sv) {
        let ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          gv = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const pv = new sv;
        return sv.PerspectiveFovLHToRef(vv, zv, Pv, hv, pv, !0, Sv, ev, gv), pv
      }
      static PerspectiveFovLHToRef(vv, zv, Pv, hv, Sv) {
        let ev = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          gv = arguments.length > 6 ? arguments[6] : void 0,
          pv = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          dv = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Nv = Pv,
          lv = hv,
          Tv = 1 / Math.tan(.5 * vv),
          Wv = ev ? Tv / zv : Tv,
          wv = ev ? Tv : Tv * zv,
          av = dv && 0 === Nv ? -1 : 0 !== lv ? (lv + Nv) / (lv - Nv) : 1,
          Cv = dv && 0 === Nv ? 2 * lv : 0 !== lv ? -2 * lv * Nv / (lv - Nv) : -2 * Nv,
          iv = Math.tan(pv);
        return sv.FromValuesToRef(Wv, 0, 0, 0, 0, wv, 0, iv, 0, 0, av, 1, 0, 0, Cv, 0, Sv), gv && Sv.multiplyToRef(cv, Sv), Sv._updateIdentityStatus(!1), Sv
      }
      static PerspectiveFovReverseLHToRef(vv, zv, Pv, hv, Sv) {
        let ev = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          gv = arguments.length > 6 ? arguments[6] : void 0,
          pv = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const dv = 1 / Math.tan(.5 * vv),
          Nv = ev ? dv / zv : dv,
          lv = ev ? dv : dv * zv,
          Tv = Math.tan(pv);
        return sv.FromValuesToRef(Nv, 0, 0, 0, 0, lv, 0, Tv, 0, 0, -Pv, 1, 0, 0, 1, 0, Sv), gv && Sv.multiplyToRef(cv, Sv), Sv._updateIdentityStatus(!1), Sv
      }
      static PerspectiveFovRH(vv, zv, Pv, hv, Sv) {
        let ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          gv = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const pv = new sv;
        return sv.PerspectiveFovRHToRef(vv, zv, Pv, hv, pv, !0, Sv, ev, gv), pv
      }
      static PerspectiveFovRHToRef(vv, zv, Pv, hv, Sv) {
        let ev = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          gv = arguments.length > 6 ? arguments[6] : void 0,
          pv = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          dv = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Nv = Pv,
          lv = hv,
          Tv = 1 / Math.tan(.5 * vv),
          Wv = ev ? Tv / zv : Tv,
          wv = ev ? Tv : Tv * zv,
          av = dv && 0 === Nv ? 1 : 0 !== lv ? -(lv + Nv) / (lv - Nv) : -1,
          Cv = dv && 0 === Nv ? 2 * lv : 0 !== lv ? -2 * lv * Nv / (lv - Nv) : -2 * Nv,
          iv = Math.tan(pv);
        return sv.FromValuesToRef(Wv, 0, 0, 0, 0, wv, 0, iv, 0, 0, av, -1, 0, 0, Cv, 0, Sv), gv && Sv.multiplyToRef(cv, Sv), Sv._updateIdentityStatus(!1), Sv
      }
      static PerspectiveFovReverseRHToRef(vv, zv, Pv, hv, Sv) {
        let ev = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          gv = arguments.length > 6 ? arguments[6] : void 0,
          pv = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const dv = 1 / Math.tan(.5 * vv),
          Nv = ev ? dv / zv : dv,
          lv = ev ? dv : dv * zv,
          Tv = Math.tan(pv);
        return sv.FromValuesToRef(Nv, 0, 0, 0, 0, lv, 0, Tv, 0, 0, -Pv, -1, 0, 0, -1, 0, Sv), gv && Sv.multiplyToRef(cv, Sv), Sv._updateIdentityStatus(!1), Sv
      }
      static GetFinalMatrix(vv, zv, Pv, hv, Sv, ev) {
        const gv = vv.width,
          pv = vv.height,
          dv = vv.x,
          Nv = vv.y,
          lv = sv.FromValues(gv / 2, 0, 0, 0, 0, -pv / 2, 0, 0, 0, 0, ev - Sv, 0, dv + gv / 2, pv / 2 + Nv, Sv, 1),
          Tv = new sv;
        return zv.multiplyToRef(Pv, Tv), Tv.multiplyToRef(hv, Tv), Tv.multiplyToRef(lv, Tv)
      }
      static GetAsMatrix2x2(vv) {
        const zv = vv.m,
          Pv = [zv[0], zv[1], zv[4], zv[5]];
        return ev.b.MatrixUse64Bits ? Pv : new Float32Array(Pv)
      }
      static GetAsMatrix3x3(vv) {
        const zv = vv.m,
          Pv = [zv[0], zv[1], zv[2], zv[4], zv[5], zv[6], zv[8], zv[9], zv[10]];
        return ev.b.MatrixUse64Bits ? Pv : new Float32Array(Pv)
      }
      static Transpose(vv) {
        const zv = new sv;
        return sv.TransposeToRef(vv, zv), zv
      }
      static TransposeToRef(vv, zv) {
        const Pv = vv.m,
          hv = Pv[0],
          Sv = Pv[4],
          ev = Pv[8],
          gv = Pv[12],
          pv = Pv[1],
          dv = Pv[5],
          Nv = Pv[9],
          lv = Pv[13],
          Tv = Pv[2],
          Wv = Pv[6],
          wv = Pv[10],
          av = Pv[14],
          sv = Pv[3],
          Cv = Pv[7],
          iv = Pv[11],
          cv = Pv[15],
          Gv = zv._m;
        return Gv[0] = hv, Gv[1] = Sv, Gv[2] = ev, Gv[3] = gv, Gv[4] = pv, Gv[5] = dv, Gv[6] = Nv, Gv[7] = lv, Gv[8] = Tv, Gv[9] = Wv, Gv[10] = wv, Gv[11] = av, Gv[12] = sv, Gv[13] = Cv, Gv[14] = iv, Gv[15] = cv, zv.markAsUpdated(), zv._updateIdentityStatus(vv._isIdentity, vv._isIdentityDirty), zv
      }
      static Reflection(vv) {
        const zv = new sv;
        return sv.ReflectionToRef(vv, zv), zv
      }
      static ReflectionToRef(vv, zv) {
        vv.normalize();
        const Pv = vv.normal.x,
          hv = vv.normal.y,
          Sv = vv.normal.z,
          ev = -2 * Pv,
          gv = -2 * hv,
          pv = -2 * Sv;
        return sv.FromValuesToRef(ev * Pv + 1, gv * Pv, pv * Pv, 0, ev * hv, gv * hv + 1, pv * hv, 0, ev * Sv, gv * Sv, pv * Sv + 1, 0, ev * vv.d, gv * vv.d, pv * vv.d, 1, zv), zv
      }
      static FromXYZAxesToRef(vv, zv, Pv, hv) {
        return sv.FromValuesToRef(vv._x, vv._y, vv._z, 0, zv._x, zv._y, zv._z, 0, Pv._x, Pv._y, Pv._z, 0, 0, 0, 0, 1, hv), hv
      }
      static FromQuaternionToRef(vv, zv) {
        const Pv = vv._x * vv._x,
          hv = vv._y * vv._y,
          Sv = vv._z * vv._z,
          ev = vv._x * vv._y,
          gv = vv._z * vv._w,
          pv = vv._z * vv._x,
          dv = vv._y * vv._w,
          Nv = vv._y * vv._z,
          lv = vv._x * vv._w;
        return zv._m[0] = 1 - 2 * (hv + Sv), zv._m[1] = 2 * (ev + gv), zv._m[2] = 2 * (pv - dv), zv._m[3] = 0, zv._m[4] = 2 * (ev - gv), zv._m[5] = 1 - 2 * (Sv + Pv), zv._m[6] = 2 * (Nv + lv), zv._m[7] = 0, zv._m[8] = 2 * (pv + dv), zv._m[9] = 2 * (Nv - lv), zv._m[10] = 1 - 2 * (hv + Pv), zv._m[11] = 0, zv._m[12] = 0, zv._m[13] = 0, zv._m[14] = 0, zv._m[15] = 1, zv.markAsUpdated(), zv
      }
    }
    sv._IdentityReadOnly = sv.Identity();
    class Cv {}
    Cv.fa = (0, Sv.h)(11, Wv.Zero), Cv.Matrix = (0, Sv.h)(2, sv.Identity), Cv.Quaternion = (0, Sv.h)(3, av.Zero);
    class iv {}
    iv.Vector2 = (0, Sv.h)(3, Tv.Zero), iv.fa = (0, Sv.h)(13, Wv.Zero), iv.Vector4 = (0, Sv.h)(3, wv.Zero), iv.Quaternion = (0, Sv.h)(3, av.Zero), iv.Matrix = (0, Sv.h)(8, sv.Identity);
    const cv = sv.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let Gv = !1;

    function mv() {
      Gv || (Gv = !0, Object.defineProperties(Tv.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Wv.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(wv.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(av.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(sv.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, Nv.c)("BABYLON.Vector2", Tv), (0, Nv.c)("BABYLON.Vector3", Wv), (0, Nv.c)("BABYLON.Vector4", wv), (0, Nv.c)("BABYLON.Matrix", sv))
    }
  },
  36618: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => gv
    });
    const hv = "undefined" !== typeof WeakRef;
    class Sv {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Pv = arguments.length > 2 ? arguments[2] : void 0,
          hv = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(vv, zv, Pv, hv)
      }
      initialize(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Pv = arguments.length > 2 ? arguments[2] : void 0,
          hv = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = vv, this.skipNextObservers = zv, this.target = Pv, this.currentTarget = hv, this
      }
    }
    class ev {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = vv, this.mask = zv, this.scope = Pv, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(vv)
      }
    }
    class gv {
      static FromPromise(vv, zv) {
        const Pv = new gv;
        return vv.then((vv => {
          Pv.notifyObservers(vv)
        })).catch((vv => {
          if (!zv) throw vv;
          zv.notifyObservers(vv)
        })), Pv
      }
      get observers() {
        return this._observers
      }
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = zv, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new Sv(0), vv && (this._onObserverAdded = vv)
      }
      add(vv) {
        let zv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Pv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!vv) return null;
        const Sv = new ev(vv, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        Sv.unregisterOnNextCall = Pv, zv ? this._observers.unshift(Sv) : this._observers.push(Sv), this._onObserverAdded && this._onObserverAdded(Sv), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(Sv, this._lastNotifiedValue);
        const gv = hv ? new WeakRef(this) : {
          deref: () => this
        };
        return Sv._remove = function() {
          let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const zv = gv.deref();
          zv && (vv ? zv.remove(Sv) : zv._remove(Sv))
        }, Sv
      }
      addOnce(vv) {
        return this.add(vv, void 0, void 0, void 0, !0)
      }
      remove(vv) {
        if (!vv) return !1;
        vv._remove = null;
        return -1 !== this._observers.indexOf(vv) && (this._deferUnregister(vv), !0)
      }
      removeCallback(vv, zv) {
        for (let Pv = 0; Pv < this._observers.length; Pv++) {
          const hv = this._observers[Pv];
          if (!hv._willBeUnregistered && (hv.callback === vv && (!zv || zv === hv.scope))) return this._deferUnregister(hv), !0
        }
        return !1
      }
      _deferUnregister(vv) {
        vv._willBeUnregistered || (this._numObserversMarkedAsDeleted++, vv.unregisterOnNextCall = !1, vv._willBeUnregistered = !0, setTimeout((() => {
          this._remove(vv)
        }), 0))
      }
      _remove(vv) {
        let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!vv) return !1;
        const Pv = this._observers.indexOf(vv);
        return -1 !== Pv && (zv && this._numObserversMarkedAsDeleted--, this._observers.splice(Pv, 1), !0)
      }
      makeObserverTopPriority(vv) {
        this._remove(vv, !1), this._observers.unshift(vv)
      }
      makeObserverBottomPriority(vv) {
        this._remove(vv, !1), this._observers.push(vv)
      }
      notifyObservers(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Pv = arguments.length > 2 ? arguments[2] : void 0,
          hv = arguments.length > 3 ? arguments[3] : void 0,
          Sv = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = vv), !this._observers.length) return !0;
        const ev = this._eventState;
        ev.mask = zv, ev.target = Pv, ev.currentTarget = hv, ev.skipNextObservers = !1, ev.lastReturnValue = vv, ev.userInfo = Sv;
        for (const gv of this._observers)
          if (!gv._willBeUnregistered && (gv.mask & zv && (gv.unregisterOnNextCall && this._deferUnregister(gv), gv.scope ? ev.lastReturnValue = gv.callback.apply(gv.scope, [vv, ev]) : ev.lastReturnValue = gv.callback(vv, ev)), ev.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = zv), vv._willBeUnregistered) return;
        const hv = this._eventState;
        hv.mask = Pv, hv.skipNextObservers = !1, vv.unregisterOnNextCall && this._deferUnregister(vv), vv.callback(zv, hv)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const vv = this._observers.pop();
          vv && (vv._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const vv = new gv;
        return vv._observers = this._observers.slice(0), vv
      }
      hasSpecificMask() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const zv of this._observers)
          if (zv.mask & vv || zv.mask === vv) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);