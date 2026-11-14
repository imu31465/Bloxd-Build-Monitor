export const id = 211;
export const ids = [211];
export const modules = {
  35780: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Ic
    });
    var Vc = nc(35783);
    class Ic {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    Ic.Instances = [], Ic.OnEnginesDisposedObservable = new Vc.c, Ic._LastCreatedScene = null, Ic.UseFallbackTexture = !0, Ic.FallbackTexture = ""
  },
  35774: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Vc
    });
    class Vc {
      static SetMatrixPrecision(cB) {
        if (Vc.MatrixTrackPrecisionChange = !1, cB && !Vc.MatrixUse64Bits && Vc.MatrixTrackedMatrices)
          for (let Bc = 0; Bc < Vc.MatrixTrackedMatrices.length; ++Bc) {
            const cB = Vc.MatrixTrackedMatrices[Bc],
              nc = cB._m;
            cB._m = new Array(16);
            for (let Bc = 0; Bc < 16; ++Bc) cB._m[Bc] = nc[Bc]
          }
        Vc.MatrixUse64Bits = cB, Vc.MatrixCurrentType = Vc.MatrixUse64Bits ? Array : Float32Array, Vc.MatrixTrackedMatrices = null
      }
    }
    Vc.MatrixUse64Bits = !1, Vc.MatrixTrackPrecisionChange = !0, Vc.MatrixCurrentType = Float32Array, Vc.MatrixTrackedMatrices = []
  },
  35792: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => sc,
      f: () => Pc,
      h: () => Mc,
      k: () => Vc,
      o: () => rB,
      r: () => uc
    });
    class Vc {}

    function Ic(cB) {
      cB.updateFlag = Vc._UpdateFlagSeed++
    }

    function rB(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const Ic = cB.KPc(),
        rB = Bc.KPc(),
        uc = Ic[0],
        sc = Ic[1],
        Mc = Ic[2],
        Pc = Ic[3],
        qB = Ic[4],
        Oc = Ic[5],
        Tc = Ic[6],
        fc = Ic[7],
        mB = Ic[8],
        ec = Ic[9],
        tB = Ic[10],
        Sc = Ic[11],
        yB = Ic[12],
        zB = Ic[13],
        pc = Ic[14],
        hc = Ic[15],
        aB = rB[0],
        lc = rB[1],
        Yc = rB[2],
        Lc = rB[3],
        gB = rB[4],
        Uc = rB[5],
        bB = rB[6],
        Zc = rB[7],
        Qc = rB[8],
        Cc = rB[9],
        vB = rB[10],
        Dc = rB[11],
        Nc = rB[12],
        Ec = rB[13],
        oc = rB[14],
        Wc = rB[15];
      nc[Vc] = uc * aB + sc * gB + Mc * Qc + Pc * Nc, nc[Vc + 1] = uc * lc + sc * Uc + Mc * Cc + Pc * Ec, nc[Vc + 2] = uc * Yc + sc * bB + Mc * vB + Pc * oc, nc[Vc + 3] = uc * Lc + sc * Zc + Mc * Dc + Pc * Wc, nc[Vc + 4] = qB * aB + Oc * gB + Tc * Qc + fc * Nc, nc[Vc + 5] = qB * lc + Oc * Uc + Tc * Cc + fc * Ec, nc[Vc + 6] = qB * Yc + Oc * bB + Tc * vB + fc * oc, nc[Vc + 7] = qB * Lc + Oc * Zc + Tc * Dc + fc * Wc, nc[Vc + 8] = mB * aB + ec * gB + tB * Qc + Sc * Nc, nc[Vc + 9] = mB * lc + ec * Uc + tB * Cc + Sc * Ec, nc[Vc + 10] = mB * Yc + ec * bB + tB * vB + Sc * oc, nc[Vc + 11] = mB * Lc + ec * Zc + tB * Dc + Sc * Wc, nc[Vc + 12] = yB * aB + zB * gB + pc * Qc + hc * Nc, nc[Vc + 13] = yB * lc + zB * Uc + pc * Cc + hc * Ec, nc[Vc + 14] = yB * Yc + zB * bB + pc * vB + hc * oc, nc[Vc + 15] = yB * Lc + zB * Zc + pc * Dc + hc * Wc
    }

    function uc(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      rB(cB, Bc, nc.KPc(), Vc), Ic(nc)
    }

    function sc(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Vc = cB.KPc();
      Bc[nc] = Vc[0], Bc[nc + 1] = Vc[1], Bc[nc + 2] = Vc[2], Bc[nc + 3] = Vc[3], Bc[nc + 4] = Vc[4], Bc[nc + 5] = Vc[5], Bc[nc + 6] = Vc[6], Bc[nc + 7] = Vc[7], Bc[nc + 8] = Vc[8], Bc[nc + 9] = Vc[9], Bc[nc + 10] = Vc[10], Bc[nc + 11] = Vc[11], Bc[nc + 12] = Vc[12], Bc[nc + 13] = Vc[13], Bc[nc + 14] = Vc[14], Bc[nc + 15] = Vc[15]
    }

    function Mc(cB, Bc) {
      const nc = Pc(cB, Bc.KPc());
      return nc && Ic(Bc), nc
    }

    function Pc(cB, Bc) {
      const nc = cB.KPc(),
        Vc = nc[0],
        Ic = nc[1],
        rB = nc[2],
        uc = nc[3],
        sc = nc[4],
        Mc = nc[5],
        Pc = nc[6],
        qB = nc[7],
        Oc = nc[8],
        Tc = nc[9],
        fc = nc[10],
        mB = nc[11],
        ec = nc[12],
        tB = nc[13],
        Sc = nc[14],
        yB = nc[15],
        zB = fc * yB - Sc * mB,
        pc = Tc * yB - tB * mB,
        hc = Tc * Sc - tB * fc,
        aB = Oc * yB - ec * mB,
        lc = Oc * Sc - fc * ec,
        Yc = Oc * tB - ec * Tc,
        Lc = +(Mc * zB - Pc * pc + qB * hc),
        gB = -(sc * zB - Pc * aB + qB * lc),
        Uc = +(sc * pc - Mc * aB + qB * Yc),
        bB = -(sc * hc - Mc * lc + Pc * Yc),
        Zc = Vc * Lc + Ic * gB + rB * Uc + uc * bB;
      if (0 === Zc) return !1;
      const Qc = 1 / Zc,
        Cc = Pc * yB - Sc * qB,
        vB = Mc * yB - tB * qB,
        Dc = Mc * Sc - tB * Pc,
        Nc = sc * yB - ec * qB,
        Ec = sc * Sc - ec * Pc,
        oc = sc * tB - ec * Mc,
        Wc = Pc * mB - fc * qB,
        wc = Mc * mB - Tc * qB,
        kB = Mc * fc - Tc * Pc,
        Xc = sc * mB - Oc * qB,
        Hc = sc * fc - Oc * Pc,
        Fc = sc * Tc - Oc * Mc,
        Jc = -(Ic * zB - rB * pc + uc * hc),
        jB = +(Vc * zB - rB * aB + uc * lc),
        Rc = -(Vc * pc - Ic * aB + uc * Yc),
        iB = +(Vc * hc - Ic * lc + rB * Yc),
        Kc = +(Ic * Cc - rB * vB + uc * Dc),
        xB = -(Vc * Cc - rB * Nc + uc * Ec),
        dc = +(Vc * vB - Ic * Nc + uc * oc),
        Ac = -(Vc * Dc - Ic * Ec + rB * oc),
        Gc = -(Ic * Wc - rB * wc + uc * kB),
        cn = +(Vc * Wc - rB * Xc + uc * Hc),
        BB = -(Vc * wc - Ic * Xc + uc * Fc),
        nB = +(Vc * kB - Ic * Hc + rB * Fc);
      return Bc[0] = Lc * Qc, Bc[1] = Jc * Qc, Bc[2] = Kc * Qc, Bc[3] = Gc * Qc, Bc[4] = gB * Qc, Bc[5] = jB * Qc, Bc[6] = xB * Qc, Bc[7] = cn * Qc, Bc[8] = Uc * Qc, Bc[9] = Rc * Qc, Bc[10] = dc * Qc, Bc[11] = BB * Qc, Bc[12] = bB * Qc, Bc[13] = iB * Qc, Bc[14] = Ac * Qc, Bc[15] = nB * Qc, !0
    }
    Vc._UpdateFlagSeed = 0
  },
  35756: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => ec,
      f: () => mB,
      h: () => pc,
      i: () => Sc,
      m: () => Oc,
      p: () => Tc,
      t: () => fc
    });
    var Vc = nc(35759),
      Ic = nc(35768),
      rB = nc(35774),
      uc = nc(35780),
      sc = nc(35785),
      Mc = nc(35792),
      Pc = nc(35799);
    const qB = cB => parseInt(cB.toString().replace(/\W/g, ""));
    class Oc {
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = cB, this.y = Bc
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let cB = qB(this.x);
        return cB = 397 * cB ^ qB(this.y), cB
      }
      toArray(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return cB[Bc] = this.x, cB[Bc + 1] = this.y, this
      }
      QMc(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Oc.FromArrayToRef(cB, Bc, this), this
      }
      KPc() {
        return [this.x, this.y]
      }
      qqc(cB) {
        return this.x = cB.x, this.y = cB.y, this
      }
      puc(cB, Bc) {
        return this.x = cB, this.y = Bc, this
      }
      set(cB, Bc) {
        return this.puc(cB, Bc)
      }
      orc(cB) {
        return this.puc(cB, cB)
      }
      add(cB) {
        return new Oc(this.x + cB.x, this.y + cB.y)
      }
      addToRef(cB, Bc) {
        return Bc.x = this.x + cB.x, Bc.y = this.y + cB.y, Bc
      }
      addInPlace(cB) {
        return this.x += cB.x, this.y += cB.y, this
      }
      addInPlaceFromFloats(cB, Bc) {
        return this.x += cB, this.y += Bc, this
      }
      addVector3(cB) {
        return new Oc(this.x + cB.x, this.y + cB.y)
      }
      subtract(cB) {
        return new Oc(this.x - cB.x, this.y - cB.y)
      }
      subtractToRef(cB, Bc) {
        return Bc.x = this.x - cB.x, Bc.y = this.y - cB.y, Bc
      }
      Tqc(cB) {
        return this.x -= cB.x, this.y -= cB.y, this
      }
      multiplyInPlace(cB) {
        return this.x *= cB.x, this.y *= cB.y, this
      }
      multiply(cB) {
        return new Oc(this.x * cB.x, this.y * cB.y)
      }
      multiplyToRef(cB, Bc) {
        return Bc.x = this.x * cB.x, Bc.y = this.y * cB.y, Bc
      }
      multiplyByFloats(cB, Bc) {
        return new Oc(this.x * cB, this.y * Bc)
      }
      divide(cB) {
        return new Oc(this.x / cB.x, this.y / cB.y)
      }
      divideToRef(cB, Bc) {
        return Bc.x = this.x / cB.x, Bc.y = this.y / cB.y, Bc
      }
      divideInPlace(cB) {
        return this.x = this.x / cB.x, this.y = this.y / cB.y, this
      }
      minimizeInPlace(cB) {
        return this.minimizeInPlaceFromFloats(cB.x, cB.y)
      }
      maximizeInPlace(cB) {
        return this.maximizeInPlaceFromFloats(cB.x, cB.y)
      }
      minimizeInPlaceFromFloats(cB, Bc) {
        return this.x = Math.min(cB, this.x), this.y = Math.min(Bc, this.y), this
      }
      maximizeInPlaceFromFloats(cB, Bc) {
        return this.x = Math.max(cB, this.x), this.y = Math.max(Bc, this.y), this
      }
      subtractFromFloats(cB, Bc) {
        return new Oc(this.x - cB, this.y - Bc)
      }
      subtractFromFloatsToRef(cB, Bc, nc) {
        return nc.x = this.x - cB, nc.y = this.y - Bc, nc
      }
      Ou() {
        return new Oc(-this.x, -this.y)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this
      }
      negateToRef(cB) {
        return cB.x = -this.x, cB.y = -this.y, cB
      }
      scaleInPlace(cB) {
        return this.x *= cB, this.y *= cB, this
      }
      scale(cB) {
        return new Oc(this.x * cB, this.y * cB)
      }
      scaleToRef(cB, Bc) {
        return Bc.x = this.x * cB, Bc.y = this.y * cB, Bc
      }
      scaleAndAddToRef(cB, Bc) {
        return Bc.x += this.x * cB, Bc.y += this.y * cB, Bc
      }
      equals(cB) {
        return cB && this.x === cB.x && this.y === cB.y
      }
      equalsWithEpsilon(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Vc.c;
        return cB && (0, sc.WithinEpsilon)(this.x, cB.x, Bc) && (0, sc.WithinEpsilon)(this.y, cB.y, Bc)
      }
      efc(cB, Bc) {
        return this.x === cB && this.y === Bc
      }
      floor() {
        return new Oc(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(cB) {
        return cB.x = Math.floor(this.x), cB.y = Math.floor(this.y), cB
      }
      fract() {
        return new Oc(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(cB) {
        return cB.x = this.x - Math.floor(this.x), cB.y = this.y - Math.floor(this.y), cB
      }
      rotate(cB) {
        return this.rotateToRef(cB, new Oc)
      }
      rotateToRef(cB, Bc) {
        const nc = Math.cos(cB),
          Vc = Math.sin(cB);
        return Bc.x = nc * this.x - Vc * this.y, Bc.y = Vc * this.x + nc * this.y, Bc
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
      normalizeFromLength(cB) {
        return 0 === cB || 1 === cB ? this : this.scaleInPlace(1 / cB)
      }
      normalizeToNew() {
        const cB = new Oc;
        return this.normalizeToRef(cB), cB
      }
      normalizeToRef(cB) {
        const Bc = this.length();
        return 0 === Bc || 1 === Bc ? (cB.x = this.x, cB.y = this.y, cB) : this.scaleToRef(1 / Bc, cB)
      }
      clone() {
        return new Oc(this.x, this.y)
      }
      dot(cB) {
        return this.x * cB.x + this.y * cB.y
      }
      static Zero() {
        return new Oc(0, 0)
      }
      static One() {
        return new Oc(1, 1)
      }
      static Random() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Oc((0, sc.RandomRange)(cB, Bc), (0, sc.RandomRange)(cB, Bc))
      }
      static RandomToRef() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).puc((0, sc.RandomRange)(cB, Bc), (0, sc.RandomRange)(cB, Bc))
      }
      static get ZeroReadOnly() {
        return Oc._ZeroReadOnly
      }
      static FromArray(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Oc(cB[Bc], cB[Bc + 1])
      }
      static FromArrayToRef(cB, Bc, nc) {
        return nc.x = cB[Bc], nc.y = cB[Bc + 1], nc
      }
      static FromFloatsToRef(cB, Bc, nc) {
        return nc.puc(cB, Bc), nc
      }
      static CatmullRom(cB, Bc, nc, Vc, Ic) {
        const rB = Ic * Ic,
          uc = Ic * rB,
          sc = .5 * (2 * Bc.x + (-cB.x + nc.x) * Ic + (2 * cB.x - 5 * Bc.x + 4 * nc.x - Vc.x) * rB + (-cB.x + 3 * Bc.x - 3 * nc.x + Vc.x) * uc),
          Mc = .5 * (2 * Bc.y + (-cB.y + nc.y) * Ic + (2 * cB.y - 5 * Bc.y + 4 * nc.y - Vc.y) * rB + (-cB.y + 3 * Bc.y - 3 * nc.y + Vc.y) * uc);
        return new Oc(sc, Mc)
      }
      static ClampToRef(cB, Bc, nc, Vc) {
        return Vc.x = (0, sc.Clamp)(cB.x, Bc.x, nc.x), Vc.y = (0, sc.Clamp)(cB.y, Bc.y, nc.y), Vc
      }
      static Clamp(cB, Bc, nc) {
        const Vc = (0, sc.Clamp)(cB.x, Bc.x, nc.x),
          Ic = (0, sc.Clamp)(cB.y, Bc.y, nc.y);
        return new Oc(Vc, Ic)
      }
      static Hermite(cB, Bc, nc, Vc, Ic) {
        const rB = Ic * Ic,
          uc = Ic * rB,
          sc = 2 * uc - 3 * rB + 1,
          Mc = -2 * uc + 3 * rB,
          Pc = uc - 2 * rB + Ic,
          qB = uc - rB,
          Tc = cB.x * sc + nc.x * Mc + Bc.x * Pc + Vc.x * qB,
          fc = cB.y * sc + nc.y * Mc + Bc.y * Pc + Vc.y * qB;
        return new Oc(Tc, fc)
      }
      static Hermite1stDerivative(cB, Bc, nc, Vc, Ic) {
        return this.Hermite1stDerivativeToRef(cB, Bc, nc, Vc, Ic, new Oc)
      }
      static Hermite1stDerivativeToRef(cB, Bc, nc, Vc, Ic, rB) {
        const uc = Ic * Ic;
        return rB.x = 6 * (uc - Ic) * cB.x + (3 * uc - 4 * Ic + 1) * Bc.x + 6 * (-uc + Ic) * nc.x + (3 * uc - 2 * Ic) * Vc.x, rB.y = 6 * (uc - Ic) * cB.y + (3 * uc - 4 * Ic + 1) * Bc.y + 6 * (-uc + Ic) * nc.y + (3 * uc - 2 * Ic) * Vc.y, rB
      }
      static Lerp(cB, Bc, nc) {
        return Oc.LerpToRef(cB, Bc, nc, new Oc)
      }
      static LerpToRef(cB, Bc, nc, Vc) {
        return Vc.x = cB.x + (Bc.x - cB.x) * nc, Vc.y = cB.y + (Bc.y - cB.y) * nc, Vc
      }
      static Dot(cB, Bc) {
        return cB.x * Bc.x + cB.y * Bc.y
      }
      static Normalize(cB) {
        return Oc.NormalizeToRef(cB, new Oc)
      }
      static NormalizeToRef(cB, Bc) {
        return cB.normalizeToRef(Bc), Bc
      }
      static Minimize(cB, Bc) {
        const nc = cB.x < Bc.x ? cB.x : Bc.x,
          Vc = cB.y < Bc.y ? cB.y : Bc.y;
        return new Oc(nc, Vc)
      }
      static Maximize(cB, Bc) {
        const nc = cB.x > Bc.x ? cB.x : Bc.x,
          Vc = cB.y > Bc.y ? cB.y : Bc.y;
        return new Oc(nc, Vc)
      }
      static Transform(cB, Bc) {
        return Oc.TransformToRef(cB, Bc, new Oc)
      }
      static TransformToRef(cB, Bc, nc) {
        const Vc = Bc.m,
          Ic = cB.x * Vc[0] + cB.y * Vc[4] + Vc[12],
          rB = cB.x * Vc[1] + cB.y * Vc[5] + Vc[13];
        return nc.x = Ic, nc.y = rB, nc
      }
      static PointInTriangle(cB, Bc, nc, Vc) {
        const Ic = .5 * (-nc.y * Vc.x + Bc.y * (-nc.x + Vc.x) + Bc.x * (nc.y - Vc.y) + nc.x * Vc.y),
          rB = Ic < 0 ? -1 : 1,
          uc = (Bc.y * Vc.x - Bc.x * Vc.y + (Vc.y - Bc.y) * cB.x + (Bc.x - Vc.x) * cB.y) * rB,
          sc = (Bc.x * nc.y - Bc.y * nc.x + (Bc.y - nc.y) * cB.x + (nc.x - Bc.x) * cB.y) * rB;
        return uc > 0 && sc > 0 && uc + sc < 2 * Ic * rB
      }
      static Distance(cB, Bc) {
        return Math.sqrt(Oc.DistanceSquared(cB, Bc))
      }
      static DistanceSquared(cB, Bc) {
        const nc = cB.x - Bc.x,
          Vc = cB.y - Bc.y;
        return nc * nc + Vc * Vc
      }
      static Center(cB, Bc) {
        return Oc.CenterToRef(cB, Bc, new Oc)
      }
      static CenterToRef(cB, Bc, nc) {
        return nc.puc((cB.x + Bc.x) / 2, (cB.y + Bc.y) / 2)
      }
      static DistanceOfPointFromSegment(cB, Bc, nc) {
        const Vc = Oc.DistanceSquared(Bc, nc);
        if (0 === Vc) return Oc.Distance(cB, Bc);
        const Ic = nc.subtract(Bc),
          rB = Math.max(0, Math.min(1, Oc.Dot(cB.subtract(Bc), Ic) / Vc)),
          uc = Bc.add(Ic.multiplyByFloats(rB, rB));
        return Oc.Distance(cB, uc)
      }
    }
    Oc._V8PerformanceHack = new Oc(.5, .5), Oc._ZeroReadOnly = Oc.Zero();
    class Tc {
      get x() {
        return this._x
      }
      set x(cB) {
        this._x = cB, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(cB) {
        this._y = cB, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(cB) {
        this._z = cB, this._isDirty = !0
      }
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = cB, this._y = Bc, this._z = nc
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "KV"
      }
      getHashCode() {
        let cB = qB(this._x);
        return cB = 397 * cB ^ qB(this._y), cB = 397 * cB ^ qB(this._z), cB
      }
      KPc() {
        return [this._x, this._y, this._z]
      }
      toArray(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return cB[Bc] = this._x, cB[Bc + 1] = this._y, cB[Bc + 2] = this._z, this
      }
      QMc(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Tc.FromArrayToRef(cB, Bc, this), this
      }
      toQuaternion() {
        return mB.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(cB) {
        return this._x += cB._x, this._y += cB._y, this._z += cB._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(cB, Bc, nc) {
        return this._x += cB, this._y += Bc, this._z += nc, this._isDirty = !0, this
      }
      add(cB) {
        return new Tc(this._x + cB._x, this._y + cB._y, this._z + cB._z)
      }
      addToRef(cB, Bc) {
        return Bc._x = this._x + cB._x, Bc._y = this._y + cB._y, Bc._z = this._z + cB._z, Bc._isDirty = !0, Bc
      }
      Tqc(cB) {
        return this._x -= cB._x, this._y -= cB._y, this._z -= cB._z, this._isDirty = !0, this
      }
      subtract(cB) {
        return new Tc(this._x - cB._x, this._y - cB._y, this._z - cB._z)
      }
      subtractToRef(cB, Bc) {
        return this.subtractFromFloatsToRef(cB._x, cB._y, cB._z, Bc)
      }
      subtractFromFloats(cB, Bc, nc) {
        return new Tc(this._x - cB, this._y - Bc, this._z - nc)
      }
      subtractFromFloatsToRef(cB, Bc, nc, Vc) {
        return Vc._x = this._x - cB, Vc._y = this._y - Bc, Vc._z = this._z - nc, Vc._isDirty = !0, Vc
      }
      Ou() {
        return new Tc(-this._x, -this._y, -this._z)
      }
      negateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      negateToRef(cB) {
        return cB._x = -1 * this._x, cB._y = -1 * this._y, cB._z = -1 * this._z, cB._isDirty = !0, cB
      }
      scaleInPlace(cB) {
        return this._x *= cB, this._y *= cB, this._z *= cB, this._isDirty = !0, this
      }
      scale(cB) {
        return new Tc(this._x * cB, this._y * cB, this._z * cB)
      }
      scaleToRef(cB, Bc) {
        return Bc._x = this._x * cB, Bc._y = this._y * cB, Bc._z = this._z * cB, Bc._isDirty = !0, Bc
      }
      getNormalToRef(cB) {
        const Bc = this.length();
        let nc = Math.acos(this._y / Bc);
        const Vc = Math.atan2(this._z, this._x);
        nc > Math.PI / 2 ? nc -= Math.PI / 2 : nc += Math.PI / 2;
        const Ic = Bc * Math.sin(nc) * Math.cos(Vc),
          rB = Bc * Math.cos(nc),
          uc = Bc * Math.sin(nc) * Math.sin(Vc);
        return cB.set(Ic, rB, uc), cB
      }
      applyRotationQuaternionToRef(cB, Bc) {
        const nc = this._x,
          Vc = this._y,
          Ic = this._z,
          rB = cB._x,
          uc = cB._y,
          sc = cB._z,
          Mc = cB._w,
          Pc = 2 * (uc * Ic - sc * Vc),
          qB = 2 * (sc * nc - rB * Ic),
          Oc = 2 * (rB * Vc - uc * nc);
        return Bc._x = nc + Mc * Pc + uc * Oc - sc * qB, Bc._y = Vc + Mc * qB + sc * Pc - rB * Oc, Bc._z = Ic + Mc * Oc + rB * qB - uc * Pc, Bc._isDirty = !0, Bc
      }
      applyRotationQuaternionInPlace(cB) {
        return this.applyRotationQuaternionToRef(cB, this)
      }
      applyRotationQuaternion(cB) {
        return this.applyRotationQuaternionToRef(cB, new Tc)
      }
      scaleAndAddToRef(cB, Bc) {
        return Bc._x += this._x * cB, Bc._y += this._y * cB, Bc._z += this._z * cB, Bc._isDirty = !0, Bc
      }
      projectOnPlane(cB, Bc) {
        return this.projectOnPlaneToRef(cB, Bc, new Tc)
      }
      projectOnPlaneToRef(cB, Bc, nc) {
        const Vc = cB.normal,
          Ic = cB.d,
          rB = tB.KV[0];
        this.subtractToRef(Bc, rB), rB.normalize();
        const uc = Tc.Dot(rB, Vc);
        if (Math.abs(uc) < 1e-10) nc.orc(1 / 0);
        else {
          const cB = -(Tc.Dot(Bc, Vc) + Ic) / uc,
            sc = rB.scaleInPlace(cB);
          Bc.addToRef(sc, nc)
        }
        return nc
      }
      equals(cB) {
        return cB && this._x === cB._x && this._y === cB._y && this._z === cB._z
      }
      equalsWithEpsilon(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Vc.c;
        return cB && (0, sc.WithinEpsilon)(this._x, cB._x, Bc) && (0, sc.WithinEpsilon)(this._y, cB._y, Bc) && (0, sc.WithinEpsilon)(this._z, cB._z, Bc)
      }
      efc(cB, Bc, nc) {
        return this._x === cB && this._y === Bc && this._z === nc
      }
      multiplyInPlace(cB) {
        return this._x *= cB._x, this._y *= cB._y, this._z *= cB._z, this._isDirty = !0, this
      }
      multiply(cB) {
        return this.multiplyByFloats(cB._x, cB._y, cB._z)
      }
      multiplyToRef(cB, Bc) {
        return Bc._x = this._x * cB._x, Bc._y = this._y * cB._y, Bc._z = this._z * cB._z, Bc._isDirty = !0, Bc
      }
      multiplyByFloats(cB, Bc, nc) {
        return new Tc(this._x * cB, this._y * Bc, this._z * nc)
      }
      divide(cB) {
        return new Tc(this._x / cB._x, this._y / cB._y, this._z / cB._z)
      }
      divideToRef(cB, Bc) {
        return Bc._x = this._x / cB._x, Bc._y = this._y / cB._y, Bc._z = this._z / cB._z, Bc._isDirty = !0, Bc
      }
      divideInPlace(cB) {
        return this._x = this._x / cB._x, this._y = this._y / cB._y, this._z = this._z / cB._z, this._isDirty = !0, this
      }
      minimizeInPlace(cB) {
        return this.minimizeInPlaceFromFloats(cB._x, cB._y, cB._z)
      }
      maximizeInPlace(cB) {
        return this.maximizeInPlaceFromFloats(cB._x, cB._y, cB._z)
      }
      minimizeInPlaceFromFloats(cB, Bc, nc) {
        return cB < this._x && (this.x = cB), Bc < this._y && (this.y = Bc), nc < this._z && (this.z = nc), this
      }
      maximizeInPlaceFromFloats(cB, Bc, nc) {
        return cB > this._x && (this.x = cB), Bc > this._y && (this.y = Bc), nc > this._z && (this.z = nc), this
      }
      isNonUniformWithinEpsilon(cB) {
        const Bc = Math.abs(this._x),
          nc = Math.abs(this._y);
        if (!(0, sc.WithinEpsilon)(Bc, nc, cB)) return !0;
        const Vc = Math.abs(this._z);
        return !(0, sc.WithinEpsilon)(Bc, Vc, cB) || !(0, sc.WithinEpsilon)(nc, Vc, cB)
      }
      get isNonUniform() {
        const cB = Math.abs(this._x);
        if (cB !== Math.abs(this._y)) return !0;
        return cB !== Math.abs(this._z)
      }
      floorToRef(cB) {
        return cB._x = Math.floor(this._x), cB._y = Math.floor(this._y), cB._z = Math.floor(this._z), cB._isDirty = !0, cB
      }
      floor() {
        return new Tc(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(cB) {
        return cB._x = this._x - Math.floor(this._x), cB._y = this._y - Math.floor(this._y), cB._z = this._z - Math.floor(this._z), cB._isDirty = !0, cB
      }
      fract() {
        return new Tc(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
      reorderInPlace(cB) {
        if ("xyz" === (cB = cB.toLowerCase())) return this;
        const Bc = tB.KV[0].qqc(this);
        return this.x = Bc[cB[0]], this.y = Bc[cB[1]], this.z = Bc[cB[2]], this
      }
      rotateByQuaternionToRef(cB, Bc) {
        return cB.toRotationMatrix(tB.Matrix[0]), Tc.TransformCoordinatesToRef(this, tB.Matrix[0], Bc), Bc
      }
      rotateByQuaternionAroundPointToRef(cB, Bc, nc) {
        return this.subtractToRef(Bc, tB.KV[0]), tB.KV[0].rotateByQuaternionToRef(cB, tB.KV[0]), Bc.addToRef(tB.KV[0], nc), nc
      }
      cross(cB) {
        return Tc.CrossToRef(this, cB, new Tc)
      }
      normalizeFromLength(cB) {
        return 0 === cB || 1 === cB ? this : this.scaleInPlace(1 / cB)
      }
      normalizeToNew() {
        return this.normalizeToRef(new Tc)
      }
      normalizeToRef(cB) {
        const Bc = this.length();
        return 0 === Bc || 1 === Bc ? (cB._x = this._x, cB._y = this._y, cB._z = this._z, cB._isDirty = !0, cB) : this.scaleToRef(1 / Bc, cB)
      }
      clone() {
        return new Tc(this._x, this._y, this._z)
      }
      qqc(cB) {
        return this.puc(cB._x, cB._y, cB._z)
      }
      puc(cB, Bc, nc) {
        return this._x = cB, this._y = Bc, this._z = nc, this._isDirty = !0, this
      }
      set(cB, Bc, nc) {
        return this.puc(cB, Bc, nc)
      }
      orc(cB) {
        return this._x = this._y = this._z = cB, this._isDirty = !0, this
      }
      static GetClipFactor(cB, Bc, nc, Vc) {
        const Ic = Tc.Dot(cB, nc);
        return (Ic - Vc) / (Ic - Tc.Dot(Bc, nc))
      }
      static GetAngleBetweenVectors(cB, Bc, nc) {
        const Vc = cB.normalizeToRef(tB.KV[1]),
          Ic = Bc.normalizeToRef(tB.KV[2]);
        let rB = Tc.Dot(Vc, Ic);
        rB = (0, sc.Clamp)(rB, -1, 1);
        const uc = Math.acos(rB),
          Mc = tB.KV[3];
        return Tc.CrossToRef(Vc, Ic, Mc), Tc.Dot(Mc, nc) > 0 ? isNaN(uc) ? 0 : uc : isNaN(uc) ? -Math.PI : -Math.acos(rB)
      }
      static GetAngleBetweenVectorsOnPlane(cB, Bc, nc) {
        tB.KV[0].qqc(cB);
        const Vc = tB.KV[0];
        tB.KV[1].qqc(Bc);
        const Ic = tB.KV[1];
        tB.KV[2].qqc(nc);
        const rB = tB.KV[2],
          uc = tB.KV[3],
          Mc = tB.KV[4];
        Vc.normalize(), Ic.normalize(), rB.normalize(), Tc.CrossToRef(rB, Vc, uc), Tc.CrossToRef(uc, rB, Mc);
        const Pc = Math.atan2(Tc.Dot(Ic, uc), Tc.Dot(Ic, Mc));
        return (0, sc.NormalizeRadians)(Pc)
      }
      static PitchYawRollToMoveBetweenPointsToRef(cB, Bc, nc) {
        const Vc = Sc.KV[0];
        return Bc.subtractToRef(cB, Vc), nc._y = Math.atan2(Vc.x, Vc.z) || 0, nc._x = Math.atan2(Math.sqrt(Vc.x ** 2 + Vc.z ** 2), Vc.y) || 0, nc._z = 0, nc._isDirty = !0, nc
      }
      static PitchYawRollToMoveBetweenPoints(cB, Bc) {
        const nc = Tc.Zero();
        return Tc.PitchYawRollToMoveBetweenPointsToRef(cB, Bc, nc)
      }
      static SlerpToRef(cB, Bc, nc, Ic) {
        nc = (0, sc.Clamp)(nc, 0, 1);
        const rB = tB.KV[0],
          uc = tB.KV[1];
        rB.qqc(cB);
        const Mc = rB.length();
        rB.normalizeFromLength(Mc), uc.qqc(Bc);
        const Pc = uc.length();
        uc.normalizeFromLength(Pc);
        const qB = Tc.Dot(rB, uc);
        let Oc, fc;
        if (qB < 1 - Vc.c) {
          const cB = Math.acos(qB),
            Bc = 1 / Math.sin(cB);
          Oc = Math.sin((1 - nc) * cB) * Bc, fc = Math.sin(nc * cB) * Bc
        } else Oc = 1 - nc, fc = nc;
        return rB.scaleInPlace(Oc), uc.scaleInPlace(fc), Ic.qqc(rB).addInPlace(uc), Ic.scaleInPlace((0, sc.Lerp)(Mc, Pc, nc)), Ic
      }
      static SmoothToRef(cB, Bc, nc, Vc, Ic) {
        return Tc.SlerpToRef(cB, Bc, 0 === Vc ? 1 : nc / Vc, Ic), Ic
      }
      static FromArray(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Tc(cB[Bc], cB[Bc + 1], cB[Bc + 2])
      }
      static FromFloatArray(cB, Bc) {
        return Tc.FromArray(cB, Bc)
      }
      static FromArrayToRef(cB, Bc, nc) {
        return nc._x = cB[Bc], nc._y = cB[Bc + 1], nc._z = cB[Bc + 2], nc._isDirty = !0, nc
      }
      static FromFloatArrayToRef(cB, Bc, nc) {
        return Tc.FromArrayToRef(cB, Bc, nc)
      }
      static FromFloatsToRef(cB, Bc, nc, Vc) {
        return Vc.puc(cB, Bc, nc), Vc
      }
      static Zero() {
        return new Tc(0, 0, 0)
      }
      static One() {
        return new Tc(1, 1, 1)
      }
      static Up() {
        return new Tc(0, 1, 0)
      }
      static get UpReadOnly() {
        return Tc._UpReadOnly
      }
      static get DownReadOnly() {
        return Tc._DownReadOnly
      }
      static get RightReadOnly() {
        return Tc._RightReadOnly
      }
      static get LeftReadOnly() {
        return Tc._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return Tc._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return Tc._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return Tc._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return Tc._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return Tc._ZeroReadOnly
      }
      static get OneReadOnly() {
        return Tc._OneReadOnly
      }
      static Down() {
        return new Tc(0, -1, 0)
      }
      static Forward() {
        return new Tc(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new Tc(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new Tc(1, 0, 0)
      }
      static Left() {
        return new Tc(-1, 0, 0)
      }
      static Random() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Tc((0, sc.RandomRange)(cB, Bc), (0, sc.RandomRange)(cB, Bc), (0, sc.RandomRange)(cB, Bc))
      }
      static RandomToRef() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).puc((0, sc.RandomRange)(cB, Bc), (0, sc.RandomRange)(cB, Bc), (0, sc.RandomRange)(cB, Bc))
      }
      static TransformCoordinates(cB, Bc) {
        const nc = Tc.Zero();
        return Tc.TransformCoordinatesToRef(cB, Bc, nc), nc
      }
      static TransformCoordinatesToRef(cB, Bc, nc) {
        return Tc.TransformCoordinatesFromFloatsToRef(cB._x, cB._y, cB._z, Bc, nc), nc
      }
      static TransformCoordinatesFromFloatsToRef(cB, Bc, nc, Vc, Ic) {
        const rB = Vc.m,
          uc = cB * rB[0] + Bc * rB[4] + nc * rB[8] + rB[12],
          sc = cB * rB[1] + Bc * rB[5] + nc * rB[9] + rB[13],
          Mc = cB * rB[2] + Bc * rB[6] + nc * rB[10] + rB[14],
          Pc = 1 / (cB * rB[3] + Bc * rB[7] + nc * rB[11] + rB[15]);
        return Ic._x = uc * Pc, Ic._y = sc * Pc, Ic._z = Mc * Pc, Ic._isDirty = !0, Ic
      }
      static TransformNormal(cB, Bc) {
        const nc = Tc.Zero();
        return Tc.TransformNormalToRef(cB, Bc, nc), nc
      }
      static TransformNormalToRef(cB, Bc, nc) {
        return this.TransformNormalFromFloatsToRef(cB._x, cB._y, cB._z, Bc, nc), nc
      }
      static TransformNormalFromFloatsToRef(cB, Bc, nc, Vc, Ic) {
        const rB = Vc.m;
        return Ic._x = cB * rB[0] + Bc * rB[4] + nc * rB[8], Ic._y = cB * rB[1] + Bc * rB[5] + nc * rB[9], Ic._z = cB * rB[2] + Bc * rB[6] + nc * rB[10], Ic._isDirty = !0, Ic
      }
      static CatmullRom(cB, Bc, nc, Vc, Ic) {
        const rB = Ic * Ic,
          uc = Ic * rB,
          sc = .5 * (2 * Bc._x + (-cB._x + nc._x) * Ic + (2 * cB._x - 5 * Bc._x + 4 * nc._x - Vc._x) * rB + (-cB._x + 3 * Bc._x - 3 * nc._x + Vc._x) * uc),
          Mc = .5 * (2 * Bc._y + (-cB._y + nc._y) * Ic + (2 * cB._y - 5 * Bc._y + 4 * nc._y - Vc._y) * rB + (-cB._y + 3 * Bc._y - 3 * nc._y + Vc._y) * uc),
          Pc = .5 * (2 * Bc._z + (-cB._z + nc._z) * Ic + (2 * cB._z - 5 * Bc._z + 4 * nc._z - Vc._z) * rB + (-cB._z + 3 * Bc._z - 3 * nc._z + Vc._z) * uc);
        return new Tc(sc, Mc, Pc)
      }
      static Clamp(cB, Bc, nc) {
        const Vc = new Tc;
        return Tc.ClampToRef(cB, Bc, nc, Vc), Vc
      }
      static ClampToRef(cB, Bc, nc, Vc) {
        let Ic = cB._x;
        Ic = Ic > nc._x ? nc._x : Ic, Ic = Ic < Bc._x ? Bc._x : Ic;
        let rB = cB._y;
        rB = rB > nc._y ? nc._y : rB, rB = rB < Bc._y ? Bc._y : rB;
        let uc = cB._z;
        return uc = uc > nc._z ? nc._z : uc, uc = uc < Bc._z ? Bc._z : uc, Vc.puc(Ic, rB, uc), Vc
      }
      static CheckExtends(cB, Bc, nc) {
        Bc.minimizeInPlace(cB), nc.maximizeInPlace(cB)
      }
      static Hermite(cB, Bc, nc, Vc, Ic) {
        const rB = Ic * Ic,
          uc = Ic * rB,
          sc = 2 * uc - 3 * rB + 1,
          Mc = -2 * uc + 3 * rB,
          Pc = uc - 2 * rB + Ic,
          qB = uc - rB,
          Oc = cB._x * sc + nc._x * Mc + Bc._x * Pc + Vc._x * qB,
          fc = cB._y * sc + nc._y * Mc + Bc._y * Pc + Vc._y * qB,
          mB = cB._z * sc + nc._z * Mc + Bc._z * Pc + Vc._z * qB;
        return new Tc(Oc, fc, mB)
      }
      static Hermite1stDerivative(cB, Bc, nc, Vc, Ic) {
        const rB = new Tc;
        return this.Hermite1stDerivativeToRef(cB, Bc, nc, Vc, Ic, rB), rB
      }
      static Hermite1stDerivativeToRef(cB, Bc, nc, Vc, Ic, rB) {
        const uc = Ic * Ic;
        return rB._x = 6 * (uc - Ic) * cB._x + (3 * uc - 4 * Ic + 1) * Bc._x + 6 * (-uc + Ic) * nc._x + (3 * uc - 2 * Ic) * Vc._x, rB._y = 6 * (uc - Ic) * cB._y + (3 * uc - 4 * Ic + 1) * Bc._y + 6 * (-uc + Ic) * nc._y + (3 * uc - 2 * Ic) * Vc._y, rB._z = 6 * (uc - Ic) * cB._z + (3 * uc - 4 * Ic + 1) * Bc._z + 6 * (-uc + Ic) * nc._z + (3 * uc - 2 * Ic) * Vc._z, rB._isDirty = !0, rB
      }
      static Lerp(cB, Bc, nc) {
        const Vc = new Tc(0, 0, 0);
        return Tc.LerpToRef(cB, Bc, nc, Vc), Vc
      }
      static LerpToRef(cB, Bc, nc, Vc) {
        return Vc._x = cB._x + (Bc._x - cB._x) * nc, Vc._y = cB._y + (Bc._y - cB._y) * nc, Vc._z = cB._z + (Bc._z - cB._z) * nc, Vc._isDirty = !0, Vc
      }
      static Dot(cB, Bc) {
        return cB._x * Bc._x + cB._y * Bc._y + cB._z * Bc._z
      }
      dot(cB) {
        return this._x * cB._x + this._y * cB._y + this._z * cB._z
      }
      static Cross(cB, Bc) {
        const nc = new Tc;
        return Tc.CrossToRef(cB, Bc, nc), nc
      }
      static CrossToRef(cB, Bc, nc) {
        const Vc = cB._y * Bc._z - cB._z * Bc._y,
          Ic = cB._z * Bc._x - cB._x * Bc._z,
          rB = cB._x * Bc._y - cB._y * Bc._x;
        return nc.puc(Vc, Ic, rB), nc
      }
      static Normalize(cB) {
        const Bc = Tc.Zero();
        return Tc.NormalizeToRef(cB, Bc), Bc
      }
      static NormalizeToRef(cB, Bc) {
        return cB.normalizeToRef(Bc), Bc
      }
      static Project(cB, Bc, nc, Vc) {
        const Ic = new Tc;
        return Tc.ProjectToRef(cB, Bc, nc, Vc, Ic), Ic
      }
      static ProjectToRef(cB, Bc, nc, Vc, Ic) {
        const rB = Vc.width,
          sc = Vc.height,
          Mc = Vc.x,
          Pc = Vc.y,
          qB = tB.Matrix[1],
          Oc = uc.d.LastCreatedEngine?.isNDCHalfZRange,
          fc = Oc ? 1 : .5,
          mB = Oc ? 0 : .5;
        ec.FromValuesToRef(rB / 2, 0, 0, 0, 0, -sc / 2, 0, 0, 0, 0, fc, 0, Mc + rB / 2, sc / 2 + Pc, mB, 1, qB);
        const Sc = tB.Matrix[0];
        return Bc.multiplyToRef(nc, Sc), Sc.multiplyToRef(qB, Sc), Tc.TransformCoordinatesToRef(cB, Sc, Ic), Ic
      }
      static Reflect(cB, Bc) {
        return this.ReflectToRef(cB, Bc, new Tc)
      }
      static ReflectToRef(cB, Bc, nc) {
        const Vc = Sc.KV[0];
        return Vc.qqc(Bc).scaleInPlace(2 * Tc.Dot(cB, Bc)), nc.qqc(cB).Tqc(Vc)
      }
      static UnprojectFromTransform(cB, Bc, nc, Vc, Ic) {
        return this.Unproject(cB, Bc, nc, Vc, Ic, ec.IdentityReadOnly)
      }
      static Unproject(cB, Bc, nc, Vc, Ic, rB) {
        const uc = new Tc;
        return Tc.UnprojectToRef(cB, Bc, nc, Vc, Ic, rB, uc), uc
      }
      static UnprojectToRef(cB, Bc, nc, Vc, Ic, rB, uc) {
        return Tc.UnprojectFloatsToRef(cB._x, cB._y, cB._z, Bc, nc, Vc, Ic, rB, uc), uc
      }
      static UnprojectFloatsToRef(cB, Bc, nc, Vc, Ic, rB, sc, Mc, Pc) {
        const qB = tB.Matrix[0];
        rB.multiplyToRef(sc, qB), qB.multiplyToRef(Mc, qB), qB.invert();
        const Oc = tB.KV[0];
        return Oc.x = cB / Vc * 2 - 1, Oc.y = -(Bc / Ic * 2 - 1), uc.d.LastCreatedEngine?.isNDCHalfZRange ? Oc.z = nc : Oc.z = 2 * nc - 1, Tc.TransformCoordinatesToRef(Oc, qB, Pc), Pc
      }
      static Minimize(cB, Bc) {
        const nc = new Tc;
        return nc.qqc(cB), nc.minimizeInPlace(Bc), nc
      }
      static Maximize(cB, Bc) {
        const nc = new Tc;
        return nc.qqc(cB), nc.maximizeInPlace(Bc), nc
      }
      static Distance(cB, Bc) {
        return Math.sqrt(Tc.DistanceSquared(cB, Bc))
      }
      static DistanceSquared(cB, Bc) {
        const nc = cB._x - Bc._x,
          Vc = cB._y - Bc._y,
          Ic = cB._z - Bc._z;
        return nc * nc + Vc * Vc + Ic * Ic
      }
      static ProjectOnTriangleToRef(cB, Bc, nc, Ic, rB) {
        const uc = tB.KV[0],
          Mc = tB.KV[1],
          Pc = tB.KV[2],
          qB = tB.KV[3],
          Oc = tB.KV[4];
        nc.subtractToRef(Bc, uc), Ic.subtractToRef(Bc, Mc), Ic.subtractToRef(nc, Pc);
        const fc = uc.length(),
          mB = Mc.length(),
          ec = Pc.length();
        if (fc < Vc.c || mB < Vc.c || ec < Vc.c) return rB.qqc(Bc), Tc.Distance(cB, Bc);
        cB.subtractToRef(Bc, Oc), Tc.CrossToRef(uc, Mc, qB);
        const Sc = qB.length();
        if (Sc < Vc.c) return rB.qqc(Bc), Tc.Distance(cB, Bc);
        qB.normalizeFromLength(Sc);
        let yB = Oc.length();
        if (yB < Vc.c) return rB.qqc(Bc), 0;
        Oc.normalizeFromLength(yB);
        const zB = Tc.Dot(qB, Oc),
          pc = tB.KV[5],
          hc = tB.KV[6];
        pc.qqc(qB).scaleInPlace(-yB * zB), hc.qqc(cB).addInPlace(pc);
        const aB = tB.KV[4],
          lc = tB.KV[5],
          Yc = tB.KV[7],
          Lc = tB.KV[8];
        aB.qqc(uc).scaleInPlace(1 / fc), Lc.qqc(Mc).scaleInPlace(1 / mB), aB.addInPlace(Lc).scaleInPlace(-1), lc.qqc(uc).scaleInPlace(-1 / fc), Lc.qqc(Pc).scaleInPlace(1 / ec), lc.addInPlace(Lc).scaleInPlace(-1), Yc.qqc(Pc).scaleInPlace(-1 / ec), Lc.qqc(Mc).scaleInPlace(-1 / mB), Yc.addInPlace(Lc).scaleInPlace(-1);
        const gB = tB.KV[9];
        let Uc;
        gB.qqc(hc).Tqc(Bc), Tc.CrossToRef(aB, gB, Lc), Uc = Tc.Dot(Lc, qB);
        const bB = Uc;
        gB.qqc(hc).Tqc(nc), Tc.CrossToRef(lc, gB, Lc), Uc = Tc.Dot(Lc, qB);
        const Zc = Uc;
        gB.qqc(hc).Tqc(Ic), Tc.CrossToRef(Yc, gB, Lc), Uc = Tc.Dot(Lc, qB);
        const Qc = Uc,
          Cc = tB.KV[10];
        let vB, Dc;
        bB > 0 && Zc < 0 ? (Cc.qqc(uc), vB = Bc, Dc = nc) : Zc > 0 && Qc < 0 ? (Cc.qqc(Pc), vB = nc, Dc = Ic) : (Cc.qqc(Mc).scaleInPlace(-1), vB = Ic, Dc = Bc);
        const Nc = tB.KV[9],
          Ec = tB.KV[4];
        vB.subtractToRef(hc, Lc), Dc.subtractToRef(hc, Nc), Tc.CrossToRef(Lc, Nc, Ec);
        if (!(Tc.Dot(Ec, qB) < 0)) return rB.qqc(hc), Math.abs(yB * zB);
        const oc = tB.KV[5];
        Tc.CrossToRef(Cc, Ec, oc), oc.normalize();
        const Wc = tB.KV[9];
        Wc.qqc(vB).Tqc(hc);
        const wc = Wc.length();
        if (wc < Vc.c) return rB.qqc(vB), Tc.Distance(cB, vB);
        Wc.normalizeFromLength(wc);
        const kB = Tc.Dot(oc, Wc),
          Xc = tB.KV[7];
        Xc.qqc(hc).addInPlace(oc.scaleInPlace(wc * kB)), Lc.qqc(Xc).Tqc(vB), yB = Cc.length(), Cc.normalizeFromLength(yB);
        let Hc = Tc.Dot(Lc, Cc) / Math.max(yB, Vc.c);
        return Hc = (0, sc.Clamp)(Hc, 0, 1), Xc.qqc(vB).addInPlace(Cc.scaleInPlace(Hc * yB)), rB.qqc(Xc), Tc.Distance(cB, Xc)
      }
      static Center(cB, Bc) {
        return Tc.CenterToRef(cB, Bc, Tc.Zero())
      }
      static CenterToRef(cB, Bc, nc) {
        return nc.puc((cB._x + Bc._x) / 2, (cB._y + Bc._y) / 2, (cB._z + Bc._z) / 2)
      }
      static RotationFromAxis(cB, Bc, nc) {
        const Vc = new Tc;
        return Tc.RotationFromAxisToRef(cB, Bc, nc, Vc), Vc
      }
      static RotationFromAxisToRef(cB, Bc, nc, Vc) {
        const Ic = tB.Quaternion[0];
        return mB.RotationQuaternionFromAxisToRef(cB, Bc, nc, Ic), Ic.toEulerAnglesToRef(Vc), Vc
      }
    }
    Tc._V8PerformanceHack = new Tc(.5, .5, .5), Tc._UpReadOnly = Tc.Up(), Tc._DownReadOnly = Tc.Down(), Tc._LeftHandedForwardReadOnly = Tc.Forward(!1), Tc._RightHandedForwardReadOnly = Tc.Forward(!0), Tc._LeftHandedBackwardReadOnly = Tc.Backward(!1), Tc._RightHandedBackwardReadOnly = Tc.Backward(!0), Tc._RightReadOnly = Tc.Right(), Tc._LeftReadOnly = Tc.Left(), Tc._ZeroReadOnly = Tc.Zero(), Tc._OneReadOnly = Tc.One();
    class fc {
      get x() {
        return this._x
      }
      set x(cB) {
        this._x = cB, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(cB) {
        this._y = cB, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(cB) {
        this._z = cB, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(cB) {
        this._w = cB, this._isDirty = !0
      }
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = cB, this._y = Bc, this._z = nc, this._w = Vc
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let cB = qB(this._x);
        return cB = 397 * cB ^ qB(this._y), cB = 397 * cB ^ qB(this._z), cB = 397 * cB ^ qB(this._w), cB
      }
      KPc() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(cB, Bc) {
        return void 0 === Bc && (Bc = 0), cB[Bc] = this._x, cB[Bc + 1] = this._y, cB[Bc + 2] = this._z, cB[Bc + 3] = this._w, this
      }
      QMc(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return fc.FromArrayToRef(cB, Bc, this), this
      }
      addInPlace(cB) {
        return this.x += cB._x, this.y += cB._y, this.z += cB._z, this.w += cB._w, this
      }
      addInPlaceFromFloats(cB, Bc, nc, Vc) {
        return this.x += cB, this.y += Bc, this.z += nc, this.w += Vc, this
      }
      add(cB) {
        return new fc(this._x + cB.x, this._y + cB.y, this._z + cB.z, this._w + cB.w)
      }
      addToRef(cB, Bc) {
        return Bc.x = this._x + cB.x, Bc.y = this._y + cB.y, Bc.z = this._z + cB.z, Bc.w = this._w + cB.w, Bc
      }
      Tqc(cB) {
        return this.x -= cB.x, this.y -= cB.y, this.z -= cB.z, this.w -= cB.w, this
      }
      subtract(cB) {
        return new fc(this._x - cB.x, this._y - cB.y, this._z - cB.z, this._w - cB.w)
      }
      subtractToRef(cB, Bc) {
        return Bc.x = this._x - cB.x, Bc.y = this._y - cB.y, Bc.z = this._z - cB.z, Bc.w = this._w - cB.w, Bc
      }
      subtractFromFloats(cB, Bc, nc, Vc) {
        return new fc(this._x - cB, this._y - Bc, this._z - nc, this._w - Vc)
      }
      subtractFromFloatsToRef(cB, Bc, nc, Vc, Ic) {
        return Ic.x = this._x - cB, Ic.y = this._y - Bc, Ic.z = this._z - nc, Ic.w = this._w - Vc, Ic
      }
      Ou() {
        return new fc(-this._x, -this._y, -this._z, -this._w)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this.w *= -1, this
      }
      negateToRef(cB) {
        return cB.x = -this._x, cB.y = -this._y, cB.z = -this._z, cB.w = -this._w, cB
      }
      scaleInPlace(cB) {
        return this.x *= cB, this.y *= cB, this.z *= cB, this.w *= cB, this
      }
      scale(cB) {
        return new fc(this._x * cB, this._y * cB, this._z * cB, this._w * cB)
      }
      scaleToRef(cB, Bc) {
        return Bc.x = this._x * cB, Bc.y = this._y * cB, Bc.z = this._z * cB, Bc.w = this._w * cB, Bc
      }
      scaleAndAddToRef(cB, Bc) {
        return Bc.x += this._x * cB, Bc.y += this._y * cB, Bc.z += this._z * cB, Bc.w += this._w * cB, Bc
      }
      equals(cB) {
        return cB && this._x === cB.x && this._y === cB.y && this._z === cB.z && this._w === cB.w
      }
      equalsWithEpsilon(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Vc.c;
        return cB && (0, sc.WithinEpsilon)(this._x, cB.x, Bc) && (0, sc.WithinEpsilon)(this._y, cB.y, Bc) && (0, sc.WithinEpsilon)(this._z, cB.z, Bc) && (0, sc.WithinEpsilon)(this._w, cB.w, Bc)
      }
      efc(cB, Bc, nc, Vc) {
        return this._x === cB && this._y === Bc && this._z === nc && this._w === Vc
      }
      multiplyInPlace(cB) {
        return this.x *= cB.x, this.y *= cB.y, this.z *= cB.z, this.w *= cB.w, this
      }
      multiply(cB) {
        return new fc(this._x * cB.x, this._y * cB.y, this._z * cB.z, this._w * cB.w)
      }
      multiplyToRef(cB, Bc) {
        return Bc.x = this._x * cB.x, Bc.y = this._y * cB.y, Bc.z = this._z * cB.z, Bc.w = this._w * cB.w, Bc
      }
      multiplyByFloats(cB, Bc, nc, Vc) {
        return new fc(this._x * cB, this._y * Bc, this._z * nc, this._w * Vc)
      }
      divide(cB) {
        return new fc(this._x / cB.x, this._y / cB.y, this._z / cB.z, this._w / cB.w)
      }
      divideToRef(cB, Bc) {
        return Bc.x = this._x / cB.x, Bc.y = this._y / cB.y, Bc.z = this._z / cB.z, Bc.w = this._w / cB.w, Bc
      }
      divideInPlace(cB) {
        return this.divideToRef(cB, this)
      }
      minimizeInPlace(cB) {
        return cB.x < this._x && (this.x = cB.x), cB.y < this._y && (this.y = cB.y), cB.z < this._z && (this.z = cB.z), cB.w < this._w && (this.w = cB.w), this
      }
      maximizeInPlace(cB) {
        return cB.x > this._x && (this.x = cB.x), cB.y > this._y && (this.y = cB.y), cB.z > this._z && (this.z = cB.z), cB.w > this._w && (this.w = cB.w), this
      }
      minimizeInPlaceFromFloats(cB, Bc, nc, Vc) {
        return this.x = Math.min(cB, this._x), this.y = Math.min(Bc, this._y), this.z = Math.min(nc, this._z), this.w = Math.min(Vc, this._w), this
      }
      maximizeInPlaceFromFloats(cB, Bc, nc, Vc) {
        return this.x = Math.max(cB, this._x), this.y = Math.max(Bc, this._y), this.z = Math.max(nc, this._z), this.w = Math.max(Vc, this._w), this
      }
      floorToRef(cB) {
        return cB.x = Math.floor(this._x), cB.y = Math.floor(this._y), cB.z = Math.floor(this._z), cB.w = Math.floor(this._w), cB
      }
      floor() {
        return new fc(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(cB) {
        return cB.x = this._x - Math.floor(this._x), cB.y = this._y - Math.floor(this._y), cB.z = this._z - Math.floor(this._z), cB.w = this._w - Math.floor(this._w), cB
      }
      fract() {
        return new fc(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
      normalizeFromLength(cB) {
        return 0 === cB || 1 === cB ? this : this.scaleInPlace(1 / cB)
      }
      normalizeToNew() {
        return this.normalizeToRef(new fc)
      }
      normalizeToRef(cB) {
        const Bc = this.length();
        return 0 === Bc || 1 === Bc ? (cB.x = this._x, cB.y = this._y, cB.z = this._z, cB.w = this._w, cB) : this.scaleToRef(1 / Bc, cB)
      }
      toVector3() {
        return new Tc(this._x, this._y, this._z)
      }
      clone() {
        return new fc(this._x, this._y, this._z, this._w)
      }
      qqc(cB) {
        return this.x = cB.x, this.y = cB.y, this.z = cB.z, this.w = cB.w, this
      }
      puc(cB, Bc, nc, Vc) {
        return this.x = cB, this.y = Bc, this.z = nc, this.w = Vc, this
      }
      set(cB, Bc, nc, Vc) {
        return this.puc(cB, Bc, nc, Vc)
      }
      orc(cB) {
        return this.x = this.y = this.z = this.w = cB, this
      }
      dot(cB) {
        return this._x * cB.x + this._y * cB.y + this._z * cB.z + this._w * cB.w
      }
      static FromArray(cB, Bc) {
        return Bc || (Bc = 0), new fc(cB[Bc], cB[Bc + 1], cB[Bc + 2], cB[Bc + 3])
      }
      static FromArrayToRef(cB, Bc, nc) {
        return nc.x = cB[Bc], nc.y = cB[Bc + 1], nc.z = cB[Bc + 2], nc.w = cB[Bc + 3], nc
      }
      static FromFloatArrayToRef(cB, Bc, nc) {
        return fc.FromArrayToRef(cB, Bc, nc), nc
      }
      static FromFloatsToRef(cB, Bc, nc, Vc, Ic) {
        return Ic.x = cB, Ic.y = Bc, Ic.z = nc, Ic.w = Vc, Ic
      }
      static Zero() {
        return new fc(0, 0, 0, 0)
      }
      static One() {
        return new fc(1, 1, 1, 1)
      }
      static Random() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new fc((0, sc.RandomRange)(cB, Bc), (0, sc.RandomRange)(cB, Bc), (0, sc.RandomRange)(cB, Bc), (0, sc.RandomRange)(cB, Bc))
      }
      static RandomToRef() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          nc = arguments.length > 2 ? arguments[2] : void 0;
        return nc.x = (0, sc.RandomRange)(cB, Bc), nc.y = (0, sc.RandomRange)(cB, Bc), nc.z = (0, sc.RandomRange)(cB, Bc), nc.w = (0, sc.RandomRange)(cB, Bc), nc
      }
      static Clamp(cB, Bc, nc) {
        return fc.ClampToRef(cB, Bc, nc, new fc)
      }
      static ClampToRef(cB, Bc, nc, Vc) {
        return Vc.x = (0, sc.Clamp)(cB.x, Bc.x, nc.x), Vc.y = (0, sc.Clamp)(cB.y, Bc.y, nc.y), Vc.z = (0, sc.Clamp)(cB.z, Bc.z, nc.z), Vc.w = (0, sc.Clamp)(cB.w, Bc.w, nc.w), Vc
      }
      static CheckExtends(cB, Bc, nc) {
        Bc.minimizeInPlace(cB), nc.maximizeInPlace(cB)
      }
      static get ZeroReadOnly() {
        return fc._ZeroReadOnly
      }
      static Normalize(cB) {
        return fc.NormalizeToRef(cB, new fc)
      }
      static NormalizeToRef(cB, Bc) {
        return cB.normalizeToRef(Bc), Bc
      }
      static Minimize(cB, Bc) {
        const nc = new fc;
        return nc.qqc(cB), nc.minimizeInPlace(Bc), nc
      }
      static Maximize(cB, Bc) {
        const nc = new fc;
        return nc.qqc(cB), nc.maximizeInPlace(Bc), nc
      }
      static Distance(cB, Bc) {
        return Math.sqrt(fc.DistanceSquared(cB, Bc))
      }
      static DistanceSquared(cB, Bc) {
        const nc = cB.x - Bc.x,
          Vc = cB.y - Bc.y,
          Ic = cB.z - Bc.z,
          rB = cB.w - Bc.w;
        return nc * nc + Vc * Vc + Ic * Ic + rB * rB
      }
      static Center(cB, Bc) {
        return fc.CenterToRef(cB, Bc, new fc)
      }
      static CenterToRef(cB, Bc, nc) {
        return nc.x = (cB.x + Bc.x) / 2, nc.y = (cB.y + Bc.y) / 2, nc.z = (cB.z + Bc.z) / 2, nc.w = (cB.w + Bc.w) / 2, nc
      }
      static TransformCoordinates(cB, Bc) {
        return fc.TransformCoordinatesToRef(cB, Bc, new fc)
      }
      static TransformCoordinatesToRef(cB, Bc, nc) {
        return fc.TransformCoordinatesFromFloatsToRef(cB._x, cB._y, cB._z, Bc, nc), nc
      }
      static TransformCoordinatesFromFloatsToRef(cB, Bc, nc, Vc, Ic) {
        const rB = Vc.m,
          uc = cB * rB[0] + Bc * rB[4] + nc * rB[8] + rB[12],
          sc = cB * rB[1] + Bc * rB[5] + nc * rB[9] + rB[13],
          Mc = cB * rB[2] + Bc * rB[6] + nc * rB[10] + rB[14],
          Pc = cB * rB[3] + Bc * rB[7] + nc * rB[11] + rB[15];
        return Ic.x = uc, Ic.y = sc, Ic.z = Mc, Ic.w = Pc, Ic
      }
      static TransformNormal(cB, Bc) {
        return fc.TransformNormalToRef(cB, Bc, new fc)
      }
      static TransformNormalToRef(cB, Bc, nc) {
        const Vc = Bc.m,
          Ic = cB.x * Vc[0] + cB.y * Vc[4] + cB.z * Vc[8],
          rB = cB.x * Vc[1] + cB.y * Vc[5] + cB.z * Vc[9],
          uc = cB.x * Vc[2] + cB.y * Vc[6] + cB.z * Vc[10];
        return nc.x = Ic, nc.y = rB, nc.z = uc, nc.w = cB.w, nc
      }
      static TransformNormalFromFloatsToRef(cB, Bc, nc, Vc, Ic, rB) {
        const uc = Ic.m;
        return rB.x = cB * uc[0] + Bc * uc[4] + nc * uc[8], rB.y = cB * uc[1] + Bc * uc[5] + nc * uc[9], rB.z = cB * uc[2] + Bc * uc[6] + nc * uc[10], rB.w = Vc, rB
      }
      static FromVector3(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new fc(cB._x, cB._y, cB._z, Bc)
      }
      static Dot(cB, Bc) {
        return cB.x * Bc.x + cB.y * Bc.y + cB.z * Bc.z + cB.w * Bc.w
      }
    }
    fc._V8PerformanceHack = new fc(.5, .5, .5, .5), fc._ZeroReadOnly = fc.Zero();
    class mB {
      get x() {
        return this._x
      }
      set x(cB) {
        this._x = cB, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(cB) {
        this._y = cB, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(cB) {
        this._z = cB, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(cB) {
        this._w = cB, this._isDirty = !0
      }
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = cB, this._y = Bc, this._z = nc, this._w = Vc
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let cB = qB(this._x);
        return cB = 397 * cB ^ qB(this._y), cB = 397 * cB ^ qB(this._z), cB = 397 * cB ^ qB(this._w), cB
      }
      KPc() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return cB[Bc] = this._x, cB[Bc + 1] = this._y, cB[Bc + 2] = this._z, cB[Bc + 3] = this._w, this
      }
      QMc(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return mB.FromArrayToRef(cB, Bc, this)
      }
      equals(cB) {
        return cB && this._x === cB._x && this._y === cB._y && this._z === cB._z && this._w === cB._w
      }
      equalsWithEpsilon(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Vc.c;
        return cB && (0, sc.WithinEpsilon)(this._x, cB._x, Bc) && (0, sc.WithinEpsilon)(this._y, cB._y, Bc) && (0, sc.WithinEpsilon)(this._z, cB._z, Bc) && (0, sc.WithinEpsilon)(this._w, cB._w, Bc)
      }
      isApprox(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Vc.c;
        return cB && ((0, sc.WithinEpsilon)(this._x, cB._x, Bc) && (0, sc.WithinEpsilon)(this._y, cB._y, Bc) && (0, sc.WithinEpsilon)(this._z, cB._z, Bc) && (0, sc.WithinEpsilon)(this._w, cB._w, Bc) || (0, sc.WithinEpsilon)(this._x, -cB._x, Bc) && (0, sc.WithinEpsilon)(this._y, -cB._y, Bc) && (0, sc.WithinEpsilon)(this._z, -cB._z, Bc) && (0, sc.WithinEpsilon)(this._w, -cB._w, Bc))
      }
      clone() {
        return new mB(this._x, this._y, this._z, this._w)
      }
      qqc(cB) {
        return this._x = cB._x, this._y = cB._y, this._z = cB._z, this._w = cB._w, this._isDirty = !0, this
      }
      puc(cB, Bc, nc, Vc) {
        return this._x = cB, this._y = Bc, this._z = nc, this._w = Vc, this._isDirty = !0, this
      }
      set(cB, Bc, nc, Vc) {
        return this.puc(cB, Bc, nc, Vc)
      }
      orc(cB) {
        return this.puc(cB, cB, cB, cB)
      }
      add(cB) {
        return new mB(this._x + cB._x, this._y + cB._y, this._z + cB._z, this._w + cB._w)
      }
      addInPlace(cB) {
        return this._x += cB._x, this._y += cB._y, this._z += cB._z, this._w += cB._w, this._isDirty = !0, this
      }
      addToRef(cB, Bc) {
        return Bc._x = this._x + cB._x, Bc._y = this._y + cB._y, Bc._z = this._z + cB._z, Bc._w = this._w + cB._w, Bc._isDirty = !0, Bc
      }
      addInPlaceFromFloats(cB, Bc, nc, Vc) {
        return this._x += cB, this._y += Bc, this._z += nc, this._w += Vc, this._isDirty = !0, this
      }
      subtractToRef(cB, Bc) {
        return Bc._x = this._x - cB._x, Bc._y = this._y - cB._y, Bc._z = this._z - cB._z, Bc._w = this._w - cB._w, Bc._isDirty = !0, Bc
      }
      subtractFromFloats(cB, Bc, nc, Vc) {
        return this.subtractFromFloatsToRef(cB, Bc, nc, Vc, new mB)
      }
      subtractFromFloatsToRef(cB, Bc, nc, Vc, Ic) {
        return Ic._x = this._x - cB, Ic._y = this._y - Bc, Ic._z = this._z - nc, Ic._w = this._w - Vc, Ic._isDirty = !0, Ic
      }
      subtract(cB) {
        return new mB(this._x - cB._x, this._y - cB._y, this._z - cB._z, this._w - cB._w)
      }
      Tqc(cB) {
        return this._x -= cB._x, this._y -= cB._y, this._z -= cB._z, this._w -= cB._w, this._isDirty = !0, this
      }
      scale(cB) {
        return new mB(this._x * cB, this._y * cB, this._z * cB, this._w * cB)
      }
      scaleToRef(cB, Bc) {
        return Bc._x = this._x * cB, Bc._y = this._y * cB, Bc._z = this._z * cB, Bc._w = this._w * cB, Bc._isDirty = !0, Bc
      }
      scaleInPlace(cB) {
        return this._x *= cB, this._y *= cB, this._z *= cB, this._w *= cB, this._isDirty = !0, this
      }
      scaleAndAddToRef(cB, Bc) {
        return Bc._x += this._x * cB, Bc._y += this._y * cB, Bc._z += this._z * cB, Bc._w += this._w * cB, Bc._isDirty = !0, Bc
      }
      multiply(cB) {
        const Bc = new mB(0, 0, 0, 1);
        return this.multiplyToRef(cB, Bc), Bc
      }
      multiplyToRef(cB, Bc) {
        const nc = this._x * cB._w + this._y * cB._z - this._z * cB._y + this._w * cB._x,
          Vc = -this._x * cB._z + this._y * cB._w + this._z * cB._x + this._w * cB._y,
          Ic = this._x * cB._y - this._y * cB._x + this._z * cB._w + this._w * cB._z,
          rB = -this._x * cB._x - this._y * cB._y - this._z * cB._z + this._w * cB._w;
        return Bc.puc(nc, Vc, Ic, rB), Bc
      }
      multiplyInPlace(cB) {
        return this.multiplyToRef(cB, this)
      }
      multiplyByFloats(cB, Bc, nc, Vc) {
        return this._x *= cB, this._y *= Bc, this._z *= nc, this._w *= Vc, this._isDirty = !0, this
      }
      divide(cB) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(cB, Bc) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideInPlace(cB) {
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
      Ou() {
        return this.negateToRef(new mB)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(cB) {
        return cB._x = -this._x, cB._y = -this._y, cB._z = -this._z, cB._w = -this._w, cB._isDirty = !0, cB
      }
      efc(cB, Bc, nc, Vc) {
        return this._x === cB && this._y === Bc && this._z === nc && this._w === Vc
      }
      floorToRef(cB) {
        throw new ReferenceError("Can not floor a quaternion")
      }
      floor() {
        throw new ReferenceError("Can not floor a quaternion")
      }
      fractToRef(cB) {
        throw new ReferenceError("Can not fract a quaternion")
      }
      fract() {
        throw new ReferenceError("Can not fract a quaternion")
      }
      conjugateToRef(cB) {
        return cB.puc(-this._x, -this._y, -this._z, this._w), cB
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new mB(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const cB = this.conjugate(),
          Bc = this.lengthSquared();
        return 0 == Bc || 1 == Bc || cB.scaleInPlace(1 / Bc), cB
      }
      invertInPlace() {
        this.conjugateInPlace();
        const cB = this.lengthSquared();
        return 0 == cB || 1 == cB || this.scaleInPlace(1 / cB), this
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
      normalizeFromLength(cB) {
        return 0 === cB || 1 === cB ? this : this.scaleInPlace(1 / cB)
      }
      normalizeToNew() {
        const cB = new mB(0, 0, 0, 1);
        return this.normalizeToRef(cB), cB
      }
      normalizeToRef(cB) {
        const Bc = this.length();
        return 0 === Bc || 1 === Bc ? cB.puc(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / Bc, cB)
      }
      toEulerAngles() {
        const cB = Tc.Zero();
        return this.toEulerAnglesToRef(cB), cB
      }
      toEulerAnglesToRef(cB) {
        const Bc = this._z,
          nc = this._x,
          Vc = this._y,
          Ic = this._w,
          rB = Vc * Bc - nc * Ic,
          uc = .4999999;
        if (rB < -uc) cB._y = 2 * Math.atan2(Vc, Ic), cB._x = Math.PI / 2, cB._z = 0, cB._isDirty = !0;
        else if (rB > uc) cB._y = 2 * Math.atan2(Vc, Ic), cB._x = -Math.PI / 2, cB._z = 0, cB._isDirty = !0;
        else {
          const uc = Ic * Ic,
            sc = Bc * Bc,
            Mc = nc * nc,
            Pc = Vc * Vc;
          cB._z = Math.atan2(2 * (nc * Vc + Bc * Ic), -sc - Mc + Pc + uc), cB._x = Math.asin(-2 * rB), cB._y = Math.atan2(2 * (Bc * nc + Vc * Ic), sc - Mc - Pc + uc), cB._isDirty = !0
        }
        return cB
      }
      toAlphaBetaGammaToRef(cB) {
        const Bc = this._z,
          nc = this._x,
          Vc = this._y,
          Ic = this._w,
          rB = Math.sqrt(nc * nc + Vc * Vc),
          uc = Math.sqrt(Bc * Bc + Ic * Ic),
          sc = 2 * Math.atan2(rB, uc),
          Mc = 2 * Math.atan2(Bc, Ic),
          Pc = 2 * Math.atan2(Vc, nc),
          qB = (Mc + Pc) / 2,
          Oc = (Mc - Pc) / 2;
        return cB.set(Oc, sc, qB), cB
      }
      toRotationMatrix(cB) {
        return ec.FromQuaternionToRef(this, cB), cB
      }
      fromRotationMatrix(cB) {
        return mB.FromRotationMatrixToRef(cB, this), this
      }
      dot(cB) {
        return this._x * cB._x + this._y * cB._y + this._z * cB._z + this._w * cB._w
      }
      toAxisAngle() {
        const cB = Tc.Zero();
        return {
          axis: cB,
          angle: this.toAxisAngleToRef(cB)
        }
      }
      toAxisAngleToRef(cB) {
        let Bc;
        const nc = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          Vc = this._w;
        return nc > 0 ? (Bc = 2 * Math.atan2(nc, Vc), cB.set(this._x / nc, this._y / nc, this._z / nc)) : (Bc = 0, cB.set(1, 0, 0)), Bc
      }
      static FromRotationMatrix(cB) {
        const Bc = new mB;
        return mB.FromRotationMatrixToRef(cB, Bc), Bc
      }
      static FromRotationMatrixToRef(cB, Bc) {
        const nc = cB.m,
          Vc = nc[0],
          Ic = nc[4],
          rB = nc[8],
          uc = nc[1],
          sc = nc[5],
          Mc = nc[9],
          Pc = nc[2],
          qB = nc[6],
          Oc = nc[10],
          Tc = Vc + sc + Oc;
        let fc;
        return Tc > 0 ? (fc = .5 / Math.sqrt(Tc + 1), Bc._w = .25 / fc, Bc._x = (qB - Mc) * fc, Bc._y = (rB - Pc) * fc, Bc._z = (uc - Ic) * fc, Bc._isDirty = !0) : Vc > sc && Vc > Oc ? (fc = 2 * Math.sqrt(1 + Vc - sc - Oc), Bc._w = (qB - Mc) / fc, Bc._x = .25 * fc, Bc._y = (Ic + uc) / fc, Bc._z = (rB + Pc) / fc, Bc._isDirty = !0) : sc > Oc ? (fc = 2 * Math.sqrt(1 + sc - Vc - Oc), Bc._w = (rB - Pc) / fc, Bc._x = (Ic + uc) / fc, Bc._y = .25 * fc, Bc._z = (Mc + qB) / fc, Bc._isDirty = !0) : (fc = 2 * Math.sqrt(1 + Oc - Vc - sc), Bc._w = (uc - Ic) / fc, Bc._x = (rB + Pc) / fc, Bc._y = (Mc + qB) / fc, Bc._z = .25 * fc, Bc._isDirty = !0), Bc
      }
      static Dot(cB, Bc) {
        return cB._x * Bc._x + cB._y * Bc._y + cB._z * Bc._z + cB._w * Bc._w
      }
      static AreClose(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const Vc = mB.Dot(cB, Bc);
        return 1 - Vc * Vc <= nc
      }
      static SmoothToRef(cB, Bc, nc, Vc, Ic) {
        let rB = 0 === Vc ? 1 : nc / Vc;
        return rB = (0, sc.Clamp)(rB, 0, 1), mB.SlerpToRef(cB, Bc, rB, Ic), Ic
      }
      static Zero() {
        return new mB(0, 0, 0, 0)
      }
      static Inverse(cB) {
        return new mB(-cB._x, -cB._y, -cB._z, cB._w)
      }
      static InverseToRef(cB, Bc) {
        return Bc.set(-cB._x, -cB._y, -cB._z, cB._w), Bc
      }
      static Identity() {
        return new mB(0, 0, 0, 1)
      }
      static IsIdentity(cB) {
        return cB && 0 === cB._x && 0 === cB._y && 0 === cB._z && 1 === cB._w
      }
      static RotationAxis(cB, Bc) {
        return mB.RotationAxisToRef(cB, Bc, new mB)
      }
      static RotationAxisToRef(cB, Bc, nc) {
        nc._w = Math.cos(Bc / 2);
        const Vc = Math.sin(Bc / 2) / cB.length();
        return nc._x = cB._x * Vc, nc._y = cB._y * Vc, nc._z = cB._z * Vc, nc._isDirty = !0, nc
      }
      static FromArray(cB, Bc) {
        return Bc || (Bc = 0), new mB(cB[Bc], cB[Bc + 1], cB[Bc + 2], cB[Bc + 3])
      }
      static FromArrayToRef(cB, Bc, nc) {
        return nc._x = cB[Bc], nc._y = cB[Bc + 1], nc._z = cB[Bc + 2], nc._w = cB[Bc + 3], nc._isDirty = !0, nc
      }
      static FromFloatsToRef(cB, Bc, nc, Vc, Ic) {
        return Ic.puc(cB, Bc, nc, Vc), Ic
      }
      static FromEulerAngles(cB, Bc, nc) {
        const Vc = new mB;
        return mB.RotationYawPitchRollToRef(Bc, cB, nc, Vc), Vc
      }
      static FromEulerAnglesToRef(cB, Bc, nc, Vc) {
        return mB.RotationYawPitchRollToRef(Bc, cB, nc, Vc), Vc
      }
      static FromEulerVector(cB) {
        const Bc = new mB;
        return mB.RotationYawPitchRollToRef(cB._y, cB._x, cB._z, Bc), Bc
      }
      static FromEulerVectorToRef(cB, Bc) {
        return mB.RotationYawPitchRollToRef(cB._y, cB._x, cB._z, Bc), Bc
      }
      static FromUnitVectorsToRef(cB, Bc, nc) {
        let Ic = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Vc.c;
        const rB = Tc.Dot(cB, Bc) + 1;
        return rB < Ic ? Math.abs(cB.x) > Math.abs(cB.z) ? nc.set(-cB.y, cB.x, 0, 0) : nc.set(0, -cB.z, cB.y, 0) : (Tc.CrossToRef(cB, Bc, Sc.KV[0]), nc.set(Sc.KV[0].x, Sc.KV[0].y, Sc.KV[0].z, rB)), nc.normalize()
      }
      static RotationYawPitchRoll(cB, Bc, nc) {
        const Vc = new mB;
        return mB.RotationYawPitchRollToRef(cB, Bc, nc, Vc), Vc
      }
      static RotationYawPitchRollToRef(cB, Bc, nc, Vc) {
        const Ic = .5 * nc,
          rB = .5 * Bc,
          uc = .5 * cB,
          sc = Math.sin(Ic),
          Mc = Math.cos(Ic),
          Pc = Math.sin(rB),
          qB = Math.cos(rB),
          Oc = Math.sin(uc),
          Tc = Math.cos(uc);
        return Vc._x = Tc * Pc * Mc + Oc * qB * sc, Vc._y = Oc * qB * Mc - Tc * Pc * sc, Vc._z = Tc * qB * sc - Oc * Pc * Mc, Vc._w = Tc * qB * Mc + Oc * Pc * sc, Vc._isDirty = !0, Vc
      }
      static RotationAlphaBetaGamma(cB, Bc, nc) {
        const Vc = new mB;
        return mB.RotationAlphaBetaGammaToRef(cB, Bc, nc, Vc), Vc
      }
      static RotationAlphaBetaGammaToRef(cB, Bc, nc, Vc) {
        const Ic = .5 * (nc + cB),
          rB = .5 * (nc - cB),
          uc = .5 * Bc;
        return Vc._x = Math.cos(rB) * Math.sin(uc), Vc._y = Math.sin(rB) * Math.sin(uc), Vc._z = Math.sin(Ic) * Math.cos(uc), Vc._w = Math.cos(Ic) * Math.cos(uc), Vc._isDirty = !0, Vc
      }
      static RotationQuaternionFromAxis(cB, Bc, nc) {
        const Vc = new mB(0, 0, 0, 0);
        return mB.RotationQuaternionFromAxisToRef(cB, Bc, nc, Vc), Vc
      }
      static RotationQuaternionFromAxisToRef(cB, Bc, nc, Vc) {
        const Ic = tB.Matrix[0];
        return cB = cB.normalizeToRef(tB.KV[0]), Bc = Bc.normalizeToRef(tB.KV[1]), nc = nc.normalizeToRef(tB.KV[2]), ec.FromXYZAxesToRef(cB, Bc, nc, Ic), mB.FromRotationMatrixToRef(Ic, Vc), Vc
      }
      static FromLookDirectionLH(cB, Bc) {
        const nc = new mB;
        return mB.FromLookDirectionLHToRef(cB, Bc, nc), nc
      }
      static FromLookDirectionLHToRef(cB, Bc, nc) {
        const Vc = tB.Matrix[0];
        return ec.LookDirectionLHToRef(cB, Bc, Vc), mB.FromRotationMatrixToRef(Vc, nc), nc
      }
      static FromLookDirectionRH(cB, Bc) {
        const nc = new mB;
        return mB.FromLookDirectionRHToRef(cB, Bc, nc), nc
      }
      static FromLookDirectionRHToRef(cB, Bc, nc) {
        const Vc = tB.Matrix[0];
        return ec.LookDirectionRHToRef(cB, Bc, Vc), mB.FromRotationMatrixToRef(Vc, nc)
      }
      static Slerp(cB, Bc, nc) {
        const Vc = mB.Identity();
        return mB.SlerpToRef(cB, Bc, nc, Vc), Vc
      }
      static SlerpToRef(cB, Bc, nc, Vc) {
        let Ic, rB, uc = cB._x * Bc._x + cB._y * Bc._y + cB._z * Bc._z + cB._w * Bc._w,
          sc = !1;
        if (uc < 0 && (sc = !0, uc = -uc), uc > .999999) rB = 1 - nc, Ic = sc ? -nc : nc;
        else {
          const cB = Math.acos(uc),
            Bc = 1 / Math.sin(cB);
          rB = Math.sin((1 - nc) * cB) * Bc, Ic = sc ? -Math.sin(nc * cB) * Bc : Math.sin(nc * cB) * Bc
        }
        return Vc._x = rB * cB._x + Ic * Bc._x, Vc._y = rB * cB._y + Ic * Bc._y, Vc._z = rB * cB._z + Ic * Bc._z, Vc._w = rB * cB._w + Ic * Bc._w, Vc._isDirty = !0, Vc
      }
      static Hermite(cB, Bc, nc, Vc, Ic) {
        const rB = Ic * Ic,
          uc = Ic * rB,
          sc = 2 * uc - 3 * rB + 1,
          Mc = -2 * uc + 3 * rB,
          Pc = uc - 2 * rB + Ic,
          qB = uc - rB,
          Oc = cB._x * sc + nc._x * Mc + Bc._x * Pc + Vc._x * qB,
          Tc = cB._y * sc + nc._y * Mc + Bc._y * Pc + Vc._y * qB,
          fc = cB._z * sc + nc._z * Mc + Bc._z * Pc + Vc._z * qB,
          ec = cB._w * sc + nc._w * Mc + Bc._w * Pc + Vc._w * qB;
        return new mB(Oc, Tc, fc, ec)
      }
      static Hermite1stDerivative(cB, Bc, nc, Vc, Ic) {
        const rB = new mB;
        return this.Hermite1stDerivativeToRef(cB, Bc, nc, Vc, Ic, rB), rB
      }
      static Hermite1stDerivativeToRef(cB, Bc, nc, Vc, Ic, rB) {
        const uc = Ic * Ic;
        return rB._x = 6 * (uc - Ic) * cB._x + (3 * uc - 4 * Ic + 1) * Bc._x + 6 * (-uc + Ic) * nc._x + (3 * uc - 2 * Ic) * Vc._x, rB._y = 6 * (uc - Ic) * cB._y + (3 * uc - 4 * Ic + 1) * Bc._y + 6 * (-uc + Ic) * nc._y + (3 * uc - 2 * Ic) * Vc._y, rB._z = 6 * (uc - Ic) * cB._z + (3 * uc - 4 * Ic + 1) * Bc._z + 6 * (-uc + Ic) * nc._z + (3 * uc - 2 * Ic) * Vc._z, rB._w = 6 * (uc - Ic) * cB._w + (3 * uc - 4 * Ic + 1) * Bc._w + 6 * (-uc + Ic) * nc._w + (3 * uc - 2 * Ic) * Vc._w, rB._isDirty = !0, rB
      }
      static Normalize(cB) {
        const Bc = mB.Zero();
        return mB.NormalizeToRef(cB, Bc), Bc
      }
      static NormalizeToRef(cB, Bc) {
        return cB.normalizeToRef(Bc), Bc
      }
      static Clamp(cB, Bc, nc) {
        const Vc = new mB;
        return mB.ClampToRef(cB, Bc, nc, Vc), Vc
      }
      static ClampToRef(cB, Bc, nc, Vc) {
        return Vc.puc((0, sc.Clamp)(cB.x, Bc.x, nc.x), (0, sc.Clamp)(cB.y, Bc.y, nc.y), (0, sc.Clamp)(cB.z, Bc.z, nc.z), (0, sc.Clamp)(cB.w, Bc.w, nc.w))
      }
      static Random() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new mB((0, sc.RandomRange)(cB, Bc), (0, sc.RandomRange)(cB, Bc), (0, sc.RandomRange)(cB, Bc), (0, sc.RandomRange)(cB, Bc))
      }
      static RandomToRef() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).puc((0, sc.RandomRange)(cB, Bc), (0, sc.RandomRange)(cB, Bc), (0, sc.RandomRange)(cB, Bc), (0, sc.RandomRange)(cB, Bc))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(cB, Bc) {
        return Math.sqrt(mB.DistanceSquared(cB, Bc))
      }
      static DistanceSquared(cB, Bc) {
        const nc = cB.x - Bc.x,
          Vc = cB.y - Bc.y,
          Ic = cB.z - Bc.z,
          rB = cB.w - Bc.w;
        return nc * nc + Vc * Vc + Ic * Ic + rB * rB
      }
      static Center(cB, Bc) {
        return mB.CenterToRef(cB, Bc, mB.Zero())
      }
      static CenterToRef(cB, Bc, nc) {
        return nc.puc((cB.x + Bc.x) / 2, (cB.y + Bc.y) / 2, (cB.z + Bc.z) / 2, (cB.w + Bc.w) / 2)
      }
    }
    mB._V8PerformanceHack = new mB(.5, .5, .5, .5);
    class ec {
      static get Use64Bits() {
        return rB.d.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = Mc.k._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Vc = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = cB, this._isIdentity3x2 = cB || nc, this._isIdentityDirty = !this._isIdentity && Bc, this._isIdentity3x2Dirty = !this._isIdentity3x2 && Vc
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, rB.d.MatrixTrackPrecisionChange && rB.d.MatrixTrackedMatrices.push(this), this._m = new rB.d.MatrixCurrentType(16), this.markAsUpdated()
      }
      isIdentity() {
        if (this._isIdentityDirty) {
          this._isIdentityDirty = !1;
          const cB = this._m;
          this._isIdentity = 1 === cB[0] && 0 === cB[1] && 0 === cB[2] && 0 === cB[3] && 0 === cB[4] && 1 === cB[5] && 0 === cB[6] && 0 === cB[7] && 0 === cB[8] && 0 === cB[9] && 1 === cB[10] && 0 === cB[11] && 0 === cB[12] && 0 === cB[13] && 0 === cB[14] && 1 === cB[15]
        }
        return this._isIdentity
      }
      isIdentityAs3x2() {
        return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] || 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 !== this._m[9] || 0 !== this._m[10] || 0 !== this._m[11] || 0 !== this._m[12] || 0 !== this._m[13] || 0 !== this._m[14] ? this._isIdentity3x2 = !1 : this._isIdentity3x2 = !0), this._isIdentity3x2
      }
      determinant() {
        if (!0 === this._isIdentity) return 1;
        const cB = this._m,
          Bc = cB[0],
          nc = cB[1],
          Vc = cB[2],
          Ic = cB[3],
          rB = cB[4],
          uc = cB[5],
          sc = cB[6],
          Mc = cB[7],
          Pc = cB[8],
          qB = cB[9],
          Oc = cB[10],
          Tc = cB[11],
          fc = cB[12],
          mB = cB[13],
          ec = cB[14],
          tB = cB[15],
          Sc = Oc * tB - ec * Tc,
          yB = qB * tB - mB * Tc,
          zB = qB * ec - mB * Oc,
          pc = Pc * tB - fc * Tc,
          hc = Pc * ec - Oc * fc,
          aB = Pc * mB - fc * qB;
        return Bc * +(uc * Sc - sc * yB + Mc * zB) + nc * -(rB * Sc - sc * pc + Mc * hc) + Vc * +(rB * yB - uc * pc + Mc * aB) + Ic * -(rB * zB - uc * hc + sc * aB)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!cB) return this._m;
        const nc = this._m;
        for (let Vc = 0; Vc < 16; Vc++) cB[Bc + Vc] = nc[Vc];
        return this
      }
      KPc() {
        return this._m
      }
      QMc(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return ec.FromArrayToRef(cB, Bc, this)
      }
      puc() {
        for (var cB = arguments.length, Bc = new Array(cB), nc = 0; nc < cB; nc++) Bc[nc] = arguments[nc];
        return ec.FromArrayToRef(Bc, 0, this)
      }
      set() {
        const cB = this._m;
        for (let Bc = 0; Bc < 16; Bc++) cB[Bc] = Bc < 0 || arguments.length <= Bc ? void 0 : arguments[Bc];
        return this.markAsUpdated(), this
      }
      orc(cB) {
        const Bc = this._m;
        for (let nc = 0; nc < 16; nc++) Bc[nc] = cB;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return ec.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(cB) {
        const Bc = new ec;
        return this.addToRef(cB, Bc), Bc
      }
      addToRef(cB, Bc) {
        const nc = this._m,
          Vc = Bc._m,
          Ic = cB.m;
        for (let rB = 0; rB < 16; rB++) Vc[rB] = nc[rB] + Ic[rB];
        return Bc.markAsUpdated(), Bc
      }
      addToSelf(cB) {
        const Bc = this._m,
          nc = cB.m;
        return Bc[0] += nc[0], Bc[1] += nc[1], Bc[2] += nc[2], Bc[3] += nc[3], Bc[4] += nc[4], Bc[5] += nc[5], Bc[6] += nc[6], Bc[7] += nc[7], Bc[8] += nc[8], Bc[9] += nc[9], Bc[10] += nc[10], Bc[11] += nc[11], Bc[12] += nc[12], Bc[13] += nc[13], Bc[14] += nc[14], Bc[15] += nc[15], this.markAsUpdated(), this
      }
      addInPlace(cB) {
        const Bc = this._m,
          nc = cB.m;
        for (let Vc = 0; Vc < 16; Vc++) Bc[Vc] += nc[Vc];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const cB = this._m;
        for (let Bc = 0; Bc < 16; Bc++) cB[Bc] += Bc < 0 || arguments.length <= Bc ? void 0 : arguments[Bc];
        return this.markAsUpdated(), this
      }
      subtract(cB) {
        const Bc = this._m,
          nc = cB.m;
        for (let Vc = 0; Vc < 16; Vc++) Bc[Vc] -= nc[Vc];
        return this.markAsUpdated(), this
      }
      subtractToRef(cB, Bc) {
        const nc = this._m,
          Vc = cB.m,
          Ic = Bc._m;
        for (let rB = 0; rB < 16; rB++) Ic[rB] = nc[rB] - Vc[rB];
        return Bc.markAsUpdated(), Bc
      }
      Tqc(cB) {
        const Bc = this._m,
          nc = cB.m;
        for (let Vc = 0; Vc < 16; Vc++) Bc[Vc] -= nc[Vc];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var cB = arguments.length, Bc = new Array(cB), nc = 0; nc < cB; nc++) Bc[nc] = arguments[nc];
        return this.subtractFromFloatsToRef(...Bc, new ec)
      }
      subtractFromFloatsToRef() {
        for (var cB = arguments.length, Bc = new Array(cB), nc = 0; nc < cB; nc++) Bc[nc] = arguments[nc];
        const Vc = Bc.pop(),
          Ic = this._m,
          rB = Vc._m,
          uc = Bc;
        for (let sc = 0; sc < 16; sc++) rB[sc] = Ic[sc] - uc[sc];
        return Vc.markAsUpdated(), Vc
      }
      invertToRef(cB) {
        return !0 === this._isIdentity ? (ec.IdentityToRef(cB), cB) : ((0, Mc.f)(this, cB.KPc()) ? cB.markAsUpdated() : cB.qqc(this), cB)
      }
      addAtIndex(cB, Bc) {
        return this._m[cB] += Bc, this.markAsUpdated(), this
      }
      multiplyAtIndex(cB, Bc) {
        return this._m[cB] *= Bc, this.markAsUpdated(), this
      }
      setTranslationFromFloats(cB, Bc, nc) {
        return this._m[12] = cB, this._m[13] = Bc, this._m[14] = nc, this.markAsUpdated(), this
      }
      addTranslationFromFloats(cB, Bc, nc) {
        return this._m[12] += cB, this._m[13] += Bc, this._m[14] += nc, this.markAsUpdated(), this
      }
      setTranslation(cB) {
        return this.setTranslationFromFloats(cB._x, cB._y, cB._z)
      }
      getTranslation() {
        return new Tc(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(cB) {
        return cB.x = this._m[12], cB.y = this._m[13], cB.z = this._m[14], cB
      }
      removeRotationAndScaling() {
        const cB = this.m;
        return ec.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, cB[12], cB[13], cB[14], cB[15], this), this._updateIdentityStatus(0 === cB[12] && 0 === cB[13] && 0 === cB[14] && 1 === cB[15]), this
      }
      qqc(cB) {
        cB.copyToArray(this._m);
        const Bc = cB;
        return this.updateFlag = Bc.updateFlag, this._updateIdentityStatus(Bc._isIdentity, Bc._isIdentityDirty, Bc._isIdentity3x2, Bc._isIdentity3x2Dirty), this
      }
      copyToArray(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, Mc.c)(this, cB, Bc), this
      }
      multiply(cB) {
        const Bc = new ec;
        return this.multiplyToRef(cB, Bc), Bc
      }
      multiplyInPlace(cB) {
        const Bc = this._m,
          nc = cB.m;
        for (let Vc = 0; Vc < 16; Vc++) Bc[Vc] *= nc[Vc];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const cB = this._m;
        for (let Bc = 0; Bc < 16; Bc++) cB[Bc] *= Bc < 0 || arguments.length <= Bc ? void 0 : arguments[Bc];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var cB = arguments.length, Bc = new Array(cB), nc = 0; nc < cB; nc++) Bc[nc] = arguments[nc];
        const Vc = Bc.pop(),
          Ic = this._m,
          rB = Vc._m,
          uc = Bc;
        for (let sc = 0; sc < 16; sc++) rB[sc] = Ic[sc] * uc[sc];
        return Vc.markAsUpdated(), Vc
      }
      multiplyToRef(cB, Bc) {
        return this._isIdentity ? (Bc.qqc(cB), Bc) : cB._isIdentity ? (Bc.qqc(this), Bc) : (this.multiplyToArray(cB, Bc._m, 0), Bc.markAsUpdated(), Bc)
      }
      multiplyToArray(cB, Bc, nc) {
        return (0, Mc.o)(this, cB, Bc, nc), this
      }
      divide(cB) {
        return this.divideToRef(cB, new ec)
      }
      divideToRef(cB, Bc) {
        const nc = this._m,
          Vc = cB.m,
          Ic = Bc._m;
        for (let rB = 0; rB < 16; rB++) Ic[rB] = nc[rB] / Vc[rB];
        return Bc.markAsUpdated(), Bc
      }
      divideInPlace(cB) {
        const Bc = this._m,
          nc = cB.m;
        for (let Vc = 0; Vc < 16; Vc++) Bc[Vc] /= nc[Vc];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(cB) {
        const Bc = this._m,
          nc = cB.m;
        for (let Vc = 0; Vc < 16; Vc++) Bc[Vc] = Math.min(Bc[Vc], nc[Vc]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const cB = this._m;
        for (let Bc = 0; Bc < 16; Bc++) cB[Bc] = Math.min(cB[Bc], Bc < 0 || arguments.length <= Bc ? void 0 : arguments[Bc]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(cB) {
        const Bc = this._m,
          nc = cB.m;
        for (let Vc = 0; Vc < 16; Vc++) Bc[Vc] = Math.max(Bc[Vc], nc[Vc]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const cB = this._m;
        for (let Bc = 0; Bc < 16; Bc++) cB[Bc] = Math.max(cB[Bc], Bc < 0 || arguments.length <= Bc ? void 0 : arguments[Bc]);
        return this.markAsUpdated(), this
      }
      Ou() {
        return this.negateToRef(new ec)
      }
      negateInPlace() {
        const cB = this._m;
        for (let Bc = 0; Bc < 16; Bc++) cB[Bc] = -cB[Bc];
        return this.markAsUpdated(), this
      }
      negateToRef(cB) {
        const Bc = this._m,
          nc = cB._m;
        for (let Vc = 0; Vc < 16; Vc++) nc[Vc] = -Bc[Vc];
        return cB.markAsUpdated(), cB
      }
      equals(cB) {
        const Bc = cB;
        if (!Bc) return !1;
        if ((this._isIdentity || Bc._isIdentity) && !this._isIdentityDirty && !Bc._isIdentityDirty) return this._isIdentity && Bc._isIdentity;
        const nc = this.m,
          Vc = Bc.m;
        return nc[0] === Vc[0] && nc[1] === Vc[1] && nc[2] === Vc[2] && nc[3] === Vc[3] && nc[4] === Vc[4] && nc[5] === Vc[5] && nc[6] === Vc[6] && nc[7] === Vc[7] && nc[8] === Vc[8] && nc[9] === Vc[9] && nc[10] === Vc[10] && nc[11] === Vc[11] && nc[12] === Vc[12] && nc[13] === Vc[13] && nc[14] === Vc[14] && nc[15] === Vc[15]
      }
      equalsWithEpsilon(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const nc = this._m,
          Vc = cB.m;
        for (let Ic = 0; Ic < 16; Ic++)
          if (!(0, sc.WithinEpsilon)(nc[Ic], Vc[Ic], Bc)) return !1;
        return !0
      }
      efc() {
        const cB = this._m;
        for (let Bc = 0; Bc < 16; Bc++)
          if (cB[Bc] != (Bc < 0 || arguments.length <= Bc ? void 0 : arguments[Bc])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new ec)
      }
      floorToRef(cB) {
        const Bc = this._m,
          nc = cB._m;
        for (let Vc = 0; Vc < 16; Vc++) nc[Vc] = Math.floor(Bc[Vc]);
        return cB.markAsUpdated(), cB
      }
      fract() {
        return this.fractToRef(new ec)
      }
      fractToRef(cB) {
        const Bc = this._m,
          nc = cB._m;
        for (let Vc = 0; Vc < 16; Vc++) nc[Vc] = Bc[Vc] - Math.floor(Bc[Vc]);
        return cB.markAsUpdated(), cB
      }
      clone() {
        const cB = new ec;
        return cB.qqc(this), cB
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let cB = qB(this._m[0]);
        for (let Bc = 1; Bc < 16; Bc++) cB = 397 * cB ^ qB(this._m[Bc]);
        return cB
      }
      decomposeToTransformNode(cB) {
        return cB.rotationQuaternion = cB.rotationQuaternion || new mB, this.decompose(cB.Su, cB.rotationQuaternion, cB.position)
      }
      decompose(cB, Bc, nc, Vc) {
        let Ic = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return nc && nc.orc(0), cB && cB.orc(1), Bc && Bc.puc(0, 0, 0, 1), !0;
        const rB = this._m;
        if (nc && nc.puc(rB[12], rB[13], rB[14]), (cB = cB || tB.KV[0]).x = Math.sqrt(rB[0] * rB[0] + rB[1] * rB[1] + rB[2] * rB[2]), cB.y = Math.sqrt(rB[4] * rB[4] + rB[5] * rB[5] + rB[6] * rB[6]), cB.z = Math.sqrt(rB[8] * rB[8] + rB[9] * rB[9] + rB[10] * rB[10]), Vc) {
          const Bc = (Ic ? Vc.absoluteScaling.x : Vc.Su.x) < 0 ? -1 : 1,
            nc = (Ic ? Vc.absoluteScaling.y : Vc.Su.y) < 0 ? -1 : 1,
            rB = (Ic ? Vc.absoluteScaling.z : Vc.Su.z) < 0 ? -1 : 1;
          cB.x *= Bc, cB.y *= nc, cB.z *= rB
        } else this.determinant() <= 0 && (cB.y *= -1);
        if (0 === cB._x || 0 === cB._y || 0 === cB._z) return Bc && Bc.puc(0, 0, 0, 1), !1;
        if (Bc) {
          const nc = 1 / cB._x,
            Vc = 1 / cB._y,
            Ic = 1 / cB._z;
          ec.FromValuesToRef(rB[0] * nc, rB[1] * nc, rB[2] * nc, 0, rB[4] * Vc, rB[5] * Vc, rB[6] * Vc, 0, rB[8] * Ic, rB[9] * Ic, rB[10] * Ic, 0, 0, 0, 0, 1, tB.Matrix[0]), mB.FromRotationMatrixToRef(tB.Matrix[0], Bc)
        }
        return !0
      }
      getRow(cB) {
        if (cB < 0 || cB > 3) return null;
        const Bc = 4 * cB;
        return new fc(this._m[Bc + 0], this._m[Bc + 1], this._m[Bc + 2], this._m[Bc + 3])
      }
      getRowToRef(cB, Bc) {
        if (cB >= 0 && cB <= 3) {
          const nc = 4 * cB;
          Bc.x = this._m[nc + 0], Bc.y = this._m[nc + 1], Bc.z = this._m[nc + 2], Bc.w = this._m[nc + 3]
        }
        return Bc
      }
      setRow(cB, Bc) {
        return this.setRowFromFloats(cB, Bc.x, Bc.y, Bc.z, Bc.w)
      }
      transpose() {
        const cB = new ec;
        return ec.TransposeToRef(this, cB), cB
      }
      transposeToRef(cB) {
        return ec.TransposeToRef(this, cB), cB
      }
      setRowFromFloats(cB, Bc, nc, Vc, Ic) {
        if (cB < 0 || cB > 3) return this;
        const rB = 4 * cB;
        return this._m[rB + 0] = Bc, this._m[rB + 1] = nc, this._m[rB + 2] = Vc, this._m[rB + 3] = Ic, this.markAsUpdated(), this
      }
      scale(cB) {
        const Bc = new ec;
        return this.scaleToRef(cB, Bc), Bc
      }
      scaleToRef(cB, Bc) {
        for (let nc = 0; nc < 16; nc++) Bc._m[nc] = this._m[nc] * cB;
        return Bc.markAsUpdated(), Bc
      }
      scaleAndAddToRef(cB, Bc) {
        for (let nc = 0; nc < 16; nc++) Bc._m[nc] += this._m[nc] * cB;
        return Bc.markAsUpdated(), Bc
      }
      scaleInPlace(cB) {
        const Bc = this._m;
        for (let nc = 0; nc < 16; nc++) Bc[nc] *= cB;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(cB) {
        const Bc = tB.Matrix[0];
        this.invertToRef(Bc), Bc.transposeToRef(cB);
        const nc = cB._m;
        return ec.FromValuesToRef(nc[0], nc[1], nc[2], 0, nc[4], nc[5], nc[6], 0, nc[8], nc[9], nc[10], 0, 0, 0, 0, 1, cB), cB
      }
      getRotationMatrix() {
        const cB = new ec;
        return this.getRotationMatrixToRef(cB), cB
      }
      getRotationMatrixToRef(cB) {
        const Bc = tB.KV[0];
        if (!this.decompose(Bc)) return ec.IdentityToRef(cB), cB;
        const nc = this._m,
          Vc = 1 / Bc._x,
          Ic = 1 / Bc._y,
          rB = 1 / Bc._z;
        return ec.FromValuesToRef(nc[0] * Vc, nc[1] * Vc, nc[2] * Vc, 0, nc[4] * Ic, nc[5] * Ic, nc[6] * Ic, 0, nc[8] * rB, nc[9] * rB, nc[10] * rB, 0, 0, 0, 0, 1, cB), cB
      }
      toggleModelMatrixHandInPlace() {
        const cB = this._m;
        return cB[2] *= -1, cB[6] *= -1, cB[8] *= -1, cB[9] *= -1, cB[14] *= -1, this.markAsUpdated(), this
      }
      toggleProjectionMatrixHandInPlace() {
        const cB = this._m;
        return cB[8] *= -1, cB[9] *= -1, cB[10] *= -1, cB[11] *= -1, this.markAsUpdated(), this
      }
      _convertProjectionToHalfZRangeInPlace() {
        return this.multiplyToRef(yB, this), this
      }
      static FromArray(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const nc = new ec;
        return ec.FromArrayToRef(cB, Bc, nc), nc
      }
      static FromArrayToRef(cB, Bc, nc) {
        for (let Vc = 0; Vc < 16; Vc++) nc._m[Vc] = cB[Vc + Bc];
        return nc.markAsUpdated(), nc
      }
      static FromFloat32ArrayToRefScaled(cB, Bc, nc, Vc) {
        return Vc._m[0] = cB[0 + Bc] * nc, Vc._m[1] = cB[1 + Bc] * nc, Vc._m[2] = cB[2 + Bc] * nc, Vc._m[3] = cB[3 + Bc] * nc, Vc._m[4] = cB[4 + Bc] * nc, Vc._m[5] = cB[5 + Bc] * nc, Vc._m[6] = cB[6 + Bc] * nc, Vc._m[7] = cB[7 + Bc] * nc, Vc._m[8] = cB[8 + Bc] * nc, Vc._m[9] = cB[9 + Bc] * nc, Vc._m[10] = cB[10 + Bc] * nc, Vc._m[11] = cB[11 + Bc] * nc, Vc._m[12] = cB[12 + Bc] * nc, Vc._m[13] = cB[13 + Bc] * nc, Vc._m[14] = cB[14 + Bc] * nc, Vc._m[15] = cB[15 + Bc] * nc, Vc.markAsUpdated(), Vc
      }
      static get IdentityReadOnly() {
        return ec._IdentityReadOnly
      }
      static FromValuesToRef(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc, qB, Oc, Tc, fc, mB, ec, tB) {
        const Sc = tB._m;
        Sc[0] = cB, Sc[1] = Bc, Sc[2] = nc, Sc[3] = Vc, Sc[4] = Ic, Sc[5] = rB, Sc[6] = uc, Sc[7] = sc, Sc[8] = Mc, Sc[9] = Pc, Sc[10] = qB, Sc[11] = Oc, Sc[12] = Tc, Sc[13] = fc, Sc[14] = mB, Sc[15] = ec, tB.markAsUpdated()
      }
      static FromValues(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc, qB, Oc, Tc, fc, mB, tB) {
        const Sc = new ec,
          yB = Sc._m;
        return yB[0] = cB, yB[1] = Bc, yB[2] = nc, yB[3] = Vc, yB[4] = Ic, yB[5] = rB, yB[6] = uc, yB[7] = sc, yB[8] = Mc, yB[9] = Pc, yB[10] = qB, yB[11] = Oc, yB[12] = Tc, yB[13] = fc, yB[14] = mB, yB[15] = tB, Sc.markAsUpdated(), Sc
      }
      static Compose(cB, Bc, nc) {
        const Vc = new ec;
        return ec.ComposeToRef(cB, Bc, nc, Vc), Vc
      }
      static ComposeToRef(cB, Bc, nc, Vc) {
        const Ic = Vc._m,
          rB = Bc._x,
          uc = Bc._y,
          sc = Bc._z,
          Mc = Bc._w,
          Pc = rB + rB,
          qB = uc + uc,
          Oc = sc + sc,
          Tc = rB * Pc,
          fc = rB * qB,
          mB = rB * Oc,
          ec = uc * qB,
          tB = uc * Oc,
          Sc = sc * Oc,
          yB = Mc * Pc,
          zB = Mc * qB,
          pc = Mc * Oc,
          hc = cB._x,
          aB = cB._y,
          lc = cB._z;
        return Ic[0] = (1 - (ec + Sc)) * hc, Ic[1] = (fc + pc) * hc, Ic[2] = (mB - zB) * hc, Ic[3] = 0, Ic[4] = (fc - pc) * aB, Ic[5] = (1 - (Tc + Sc)) * aB, Ic[6] = (tB + yB) * aB, Ic[7] = 0, Ic[8] = (mB + zB) * lc, Ic[9] = (tB - yB) * lc, Ic[10] = (1 - (Tc + ec)) * lc, Ic[11] = 0, Ic[12] = nc._x, Ic[13] = nc._y, Ic[14] = nc._z, Ic[15] = 1, Vc.markAsUpdated(), Vc
      }
      static Identity() {
        const cB = ec.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return cB._updateIdentityStatus(!0), cB
      }
      static IdentityToRef(cB) {
        return ec.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, cB), cB._updateIdentityStatus(!0), cB
      }
      static Zero() {
        const cB = ec.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return cB._updateIdentityStatus(!1), cB
      }
      static RotationX(cB) {
        const Bc = new ec;
        return ec.RotationXToRef(cB, Bc), Bc
      }
      static Invert(cB) {
        const Bc = new ec;
        return cB.invertToRef(Bc), Bc
      }
      static RotationXToRef(cB, Bc) {
        const nc = Math.sin(cB),
          Vc = Math.cos(cB);
        return ec.FromValuesToRef(1, 0, 0, 0, 0, Vc, nc, 0, 0, -nc, Vc, 0, 0, 0, 0, 1, Bc), Bc._updateIdentityStatus(1 === Vc && 0 === nc), Bc
      }
      static RotationY(cB) {
        const Bc = new ec;
        return ec.RotationYToRef(cB, Bc), Bc
      }
      static RotationYToRef(cB, Bc) {
        const nc = Math.sin(cB),
          Vc = Math.cos(cB);
        return ec.FromValuesToRef(Vc, 0, -nc, 0, 0, 1, 0, 0, nc, 0, Vc, 0, 0, 0, 0, 1, Bc), Bc._updateIdentityStatus(1 === Vc && 0 === nc), Bc
      }
      static RotationZ(cB) {
        const Bc = new ec;
        return ec.RotationZToRef(cB, Bc), Bc
      }
      static RotationZToRef(cB, Bc) {
        const nc = Math.sin(cB),
          Vc = Math.cos(cB);
        return ec.FromValuesToRef(Vc, nc, 0, 0, -nc, Vc, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, Bc), Bc._updateIdentityStatus(1 === Vc && 0 === nc), Bc
      }
      static RotationAxis(cB, Bc) {
        const nc = new ec;
        return ec.RotationAxisToRef(cB, Bc, nc), nc
      }
      static RotationAxisToRef(cB, Bc, nc) {
        const Vc = Math.sin(-Bc),
          Ic = Math.cos(-Bc),
          rB = 1 - Ic;
        cB = cB.normalizeToRef(tB.KV[0]);
        const uc = nc._m;
        return uc[0] = cB._x * cB._x * rB + Ic, uc[1] = cB._x * cB._y * rB - cB._z * Vc, uc[2] = cB._x * cB._z * rB + cB._y * Vc, uc[3] = 0, uc[4] = cB._y * cB._x * rB + cB._z * Vc, uc[5] = cB._y * cB._y * rB + Ic, uc[6] = cB._y * cB._z * rB - cB._x * Vc, uc[7] = 0, uc[8] = cB._z * cB._x * rB - cB._y * Vc, uc[9] = cB._z * cB._y * rB + cB._x * Vc, uc[10] = cB._z * cB._z * rB + Ic, uc[11] = 0, uc[12] = 0, uc[13] = 0, uc[14] = 0, uc[15] = 1, nc.markAsUpdated(), nc
      }
      static RotationAlignToRef(cB, Bc, nc) {
        let Ic = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const rB = Tc.Dot(Bc, cB),
          uc = nc._m;
        if (rB < -1 + Vc.c) uc[0] = -1, uc[1] = 0, uc[2] = 0, uc[3] = 0, uc[4] = 0, uc[5] = Ic ? 1 : -1, uc[6] = 0, uc[7] = 0, uc[8] = 0, uc[9] = 0, uc[10] = Ic ? -1 : 1, uc[11] = 0;
        else {
          const nc = Tc.Cross(Bc, cB),
            Vc = 1 / (1 + rB);
          uc[0] = nc._x * nc._x * Vc + rB, uc[1] = nc._y * nc._x * Vc - nc._z, uc[2] = nc._z * nc._x * Vc + nc._y, uc[3] = 0, uc[4] = nc._x * nc._y * Vc + nc._z, uc[5] = nc._y * nc._y * Vc + rB, uc[6] = nc._z * nc._y * Vc - nc._x, uc[7] = 0, uc[8] = nc._x * nc._z * Vc - nc._y, uc[9] = nc._y * nc._z * Vc + nc._x, uc[10] = nc._z * nc._z * Vc + rB, uc[11] = 0
        }
        return uc[12] = 0, uc[13] = 0, uc[14] = 0, uc[15] = 1, nc.markAsUpdated(), nc
      }
      static RotationYawPitchRoll(cB, Bc, nc) {
        const Vc = new ec;
        return ec.RotationYawPitchRollToRef(cB, Bc, nc, Vc), Vc
      }
      static RotationYawPitchRollToRef(cB, Bc, nc, Vc) {
        return mB.RotationYawPitchRollToRef(cB, Bc, nc, tB.Quaternion[0]), tB.Quaternion[0].toRotationMatrix(Vc), Vc
      }
      static Scaling(cB, Bc, nc) {
        const Vc = new ec;
        return ec.ScalingToRef(cB, Bc, nc, Vc), Vc
      }
      static ScalingToRef(cB, Bc, nc, Vc) {
        return ec.FromValuesToRef(cB, 0, 0, 0, 0, Bc, 0, 0, 0, 0, nc, 0, 0, 0, 0, 1, Vc), Vc._updateIdentityStatus(1 === cB && 1 === Bc && 1 === nc), Vc
      }
      static Translation(cB, Bc, nc) {
        const Vc = new ec;
        return ec.TranslationToRef(cB, Bc, nc, Vc), Vc
      }
      static TranslationToRef(cB, Bc, nc, Vc) {
        return ec.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, cB, Bc, nc, 1, Vc), Vc._updateIdentityStatus(0 === cB && 0 === Bc && 0 === nc), Vc
      }
      static Lerp(cB, Bc, nc) {
        const Vc = new ec;
        return ec.LerpToRef(cB, Bc, nc, Vc), Vc
      }
      static LerpToRef(cB, Bc, nc, Vc) {
        const Ic = Vc._m,
          rB = cB.m,
          uc = Bc.m;
        for (let sc = 0; sc < 16; sc++) Ic[sc] = rB[sc] * (1 - nc) + uc[sc] * nc;
        return Vc.markAsUpdated(), Vc
      }
      static DecomposeLerp(cB, Bc, nc) {
        const Vc = new ec;
        return ec.DecomposeLerpToRef(cB, Bc, nc, Vc), Vc
      }
      static DecomposeLerpToRef(cB, Bc, nc, Vc) {
        const Ic = tB.KV[0],
          rB = tB.Quaternion[0],
          uc = tB.KV[1];
        cB.decompose(Ic, rB, uc);
        const sc = tB.KV[2],
          Mc = tB.Quaternion[1],
          Pc = tB.KV[3];
        Bc.decompose(sc, Mc, Pc);
        const qB = tB.KV[4];
        Tc.LerpToRef(Ic, sc, nc, qB);
        const Oc = tB.Quaternion[2];
        mB.SlerpToRef(rB, Mc, nc, Oc);
        const fc = tB.KV[5];
        return Tc.LerpToRef(uc, Pc, nc, fc), ec.ComposeToRef(qB, Oc, fc, Vc), Vc
      }
      static LookAtLH(cB, Bc, nc) {
        const Vc = new ec;
        return ec.LookAtLHToRef(cB, Bc, nc, Vc), Vc
      }
      static LookAtLHToRef(cB, Bc, nc, Vc) {
        const Ic = tB.KV[0],
          rB = tB.KV[1],
          uc = tB.KV[2];
        Bc.subtractToRef(cB, uc), uc.normalize(), Tc.CrossToRef(nc, uc, Ic);
        const sc = Ic.lengthSquared();
        0 === sc ? Ic.x = 1 : Ic.normalizeFromLength(Math.sqrt(sc)), Tc.CrossToRef(uc, Ic, rB), rB.normalize();
        const Mc = -Tc.Dot(Ic, cB),
          Pc = -Tc.Dot(rB, cB),
          qB = -Tc.Dot(uc, cB);
        return ec.FromValuesToRef(Ic._x, rB._x, uc._x, 0, Ic._y, rB._y, uc._y, 0, Ic._z, rB._z, uc._z, 0, Mc, Pc, qB, 1, Vc), Vc
      }
      static LookAtRH(cB, Bc, nc) {
        const Vc = new ec;
        return ec.LookAtRHToRef(cB, Bc, nc, Vc), Vc
      }
      static LookAtRHToRef(cB, Bc, nc, Vc) {
        const Ic = tB.KV[0],
          rB = tB.KV[1],
          uc = tB.KV[2];
        cB.subtractToRef(Bc, uc), uc.normalize(), Tc.CrossToRef(nc, uc, Ic);
        const sc = Ic.lengthSquared();
        0 === sc ? Ic.x = 1 : Ic.normalizeFromLength(Math.sqrt(sc)), Tc.CrossToRef(uc, Ic, rB), rB.normalize();
        const Mc = -Tc.Dot(Ic, cB),
          Pc = -Tc.Dot(rB, cB),
          qB = -Tc.Dot(uc, cB);
        return ec.FromValuesToRef(Ic._x, rB._x, uc._x, 0, Ic._y, rB._y, uc._y, 0, Ic._z, rB._z, uc._z, 0, Mc, Pc, qB, 1, Vc), Vc
      }
      static LookDirectionLH(cB, Bc) {
        const nc = new ec;
        return ec.LookDirectionLHToRef(cB, Bc, nc), nc
      }
      static LookDirectionLHToRef(cB, Bc, nc) {
        const Vc = tB.KV[0];
        Vc.qqc(cB), Vc.scaleInPlace(-1);
        const Ic = tB.KV[1];
        return Tc.CrossToRef(Bc, Vc, Ic), ec.FromValuesToRef(Ic._x, Ic._y, Ic._z, 0, Bc._x, Bc._y, Bc._z, 0, Vc._x, Vc._y, Vc._z, 0, 0, 0, 0, 1, nc), nc
      }
      static LookDirectionRH(cB, Bc) {
        const nc = new ec;
        return ec.LookDirectionRHToRef(cB, Bc, nc), nc
      }
      static LookDirectionRHToRef(cB, Bc, nc) {
        const Vc = tB.KV[2];
        return Tc.CrossToRef(Bc, cB, Vc), ec.FromValuesToRef(Vc._x, Vc._y, Vc._z, 0, Bc._x, Bc._y, Bc._z, 0, cB._x, cB._y, cB._z, 0, 0, 0, 0, 1, nc), nc
      }
      static OrthoLH(cB, Bc, nc, Vc, Ic) {
        const rB = new ec;
        return ec.OrthoLHToRef(cB, Bc, nc, Vc, rB, Ic), rB
      }
      static OrthoLHToRef(cB, Bc, nc, Vc, Ic, rB) {
        const uc = 2 / cB,
          sc = 2 / Bc,
          Mc = 2 / (Vc - nc),
          Pc = -(Vc + nc) / (Vc - nc);
        return ec.FromValuesToRef(uc, 0, 0, 0, 0, sc, 0, 0, 0, 0, Mc, 0, 0, 0, Pc, 1, Ic), rB && Ic.multiplyToRef(yB, Ic), Ic._updateIdentityStatus(1 === uc && 1 === sc && 1 === Mc && 0 === Pc), Ic
      }
      static OrthoOffCenterLH(cB, Bc, nc, Vc, Ic, rB, uc) {
        const sc = new ec;
        return ec.OrthoOffCenterLHToRef(cB, Bc, nc, Vc, Ic, rB, sc, uc), sc
      }
      static OrthoOffCenterLHToRef(cB, Bc, nc, Vc, Ic, rB, uc, sc) {
        const Mc = 2 / (Bc - cB),
          Pc = 2 / (Vc - nc),
          qB = 2 / (rB - Ic),
          Oc = -(rB + Ic) / (rB - Ic),
          Tc = (cB + Bc) / (cB - Bc),
          fc = (Vc + nc) / (nc - Vc);
        return ec.FromValuesToRef(Mc, 0, 0, 0, 0, Pc, 0, 0, 0, 0, qB, 0, Tc, fc, Oc, 1, uc), sc && uc.multiplyToRef(yB, uc), uc.markAsUpdated(), uc
      }
      static ObliqueOffCenterLHToRef(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc, qB) {
        const Oc = -uc * Math.cos(sc),
          Tc = -uc * Math.sin(sc);
        return ec.TranslationToRef(0, 0, -Mc, tB.Matrix[1]), ec.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, Oc, Tc, 1, 0, 0, 0, 0, 1, tB.Matrix[0]), tB.Matrix[1].multiplyToRef(tB.Matrix[0], tB.Matrix[0]), ec.TranslationToRef(0, 0, Mc, tB.Matrix[1]), tB.Matrix[0].multiplyToRef(tB.Matrix[1], tB.Matrix[0]), ec.OrthoOffCenterLHToRef(cB, Bc, nc, Vc, Ic, rB, Pc, qB), tB.Matrix[0].multiplyToRef(Pc, Pc), Pc
      }
      static OrthoOffCenterRH(cB, Bc, nc, Vc, Ic, rB, uc) {
        const sc = new ec;
        return ec.OrthoOffCenterRHToRef(cB, Bc, nc, Vc, Ic, rB, sc, uc), sc
      }
      static OrthoOffCenterRHToRef(cB, Bc, nc, Vc, Ic, rB, uc, sc) {
        return ec.OrthoOffCenterLHToRef(cB, Bc, nc, Vc, Ic, rB, uc, sc), uc._m[10] *= -1, uc
      }
      static ObliqueOffCenterRHToRef(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc, qB) {
        const Oc = uc * Math.cos(sc),
          Tc = uc * Math.sin(sc);
        return ec.TranslationToRef(0, 0, Mc, tB.Matrix[1]), ec.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, Oc, Tc, 1, 0, 0, 0, 0, 1, tB.Matrix[0]), tB.Matrix[1].multiplyToRef(tB.Matrix[0], tB.Matrix[0]), ec.TranslationToRef(0, 0, -Mc, tB.Matrix[1]), tB.Matrix[0].multiplyToRef(tB.Matrix[1], tB.Matrix[0]), ec.OrthoOffCenterRHToRef(cB, Bc, nc, Vc, Ic, rB, Pc, qB), tB.Matrix[0].multiplyToRef(Pc, Pc), Pc
      }
      static PerspectiveLH(cB, Bc, nc, Vc, Ic) {
        let rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const uc = new ec,
          sc = 2 * nc / cB,
          Mc = 2 * nc / Bc,
          Pc = (Vc + nc) / (Vc - nc),
          qB = -2 * Vc * nc / (Vc - nc),
          Oc = Math.tan(rB);
        return ec.FromValuesToRef(sc, 0, 0, 0, 0, Mc, 0, Oc, 0, 0, Pc, 1, 0, 0, qB, 0, uc), Ic && uc.multiplyToRef(yB, uc), uc._updateIdentityStatus(!1), uc
      }
      static PerspectiveFovLH(cB, Bc, nc, Vc, Ic) {
        let rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          uc = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const sc = new ec;
        return ec.PerspectiveFovLHToRef(cB, Bc, nc, Vc, sc, !0, Ic, rB, uc), sc
      }
      static PerspectiveFovLHToRef(cB, Bc, nc, Vc, Ic) {
        let rB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          uc = arguments.length > 6 ? arguments[6] : void 0,
          sc = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          Mc = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Pc = nc,
          qB = Vc,
          Oc = 1 / Math.tan(.5 * cB),
          Tc = rB ? Oc / Bc : Oc,
          fc = rB ? Oc : Oc * Bc,
          mB = Mc && 0 === Pc ? -1 : 0 !== qB ? (qB + Pc) / (qB - Pc) : 1,
          tB = Mc && 0 === Pc ? 2 * qB : 0 !== qB ? -2 * qB * Pc / (qB - Pc) : -2 * Pc,
          Sc = Math.tan(sc);
        return ec.FromValuesToRef(Tc, 0, 0, 0, 0, fc, 0, Sc, 0, 0, mB, 1, 0, 0, tB, 0, Ic), uc && Ic.multiplyToRef(yB, Ic), Ic._updateIdentityStatus(!1), Ic
      }
      static PerspectiveFovReverseLHToRef(cB, Bc, nc, Vc, Ic) {
        let rB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          uc = arguments.length > 6 ? arguments[6] : void 0,
          sc = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const Mc = 1 / Math.tan(.5 * cB),
          Pc = rB ? Mc / Bc : Mc,
          qB = rB ? Mc : Mc * Bc,
          Oc = Math.tan(sc);
        return ec.FromValuesToRef(Pc, 0, 0, 0, 0, qB, 0, Oc, 0, 0, -nc, 1, 0, 0, 1, 0, Ic), uc && Ic.multiplyToRef(yB, Ic), Ic._updateIdentityStatus(!1), Ic
      }
      static PerspectiveFovRH(cB, Bc, nc, Vc, Ic) {
        let rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          uc = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const sc = new ec;
        return ec.PerspectiveFovRHToRef(cB, Bc, nc, Vc, sc, !0, Ic, rB, uc), sc
      }
      static PerspectiveFovRHToRef(cB, Bc, nc, Vc, Ic) {
        let rB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          uc = arguments.length > 6 ? arguments[6] : void 0,
          sc = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          Mc = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Pc = nc,
          qB = Vc,
          Oc = 1 / Math.tan(.5 * cB),
          Tc = rB ? Oc / Bc : Oc,
          fc = rB ? Oc : Oc * Bc,
          mB = Mc && 0 === Pc ? 1 : 0 !== qB ? -(qB + Pc) / (qB - Pc) : -1,
          tB = Mc && 0 === Pc ? 2 * qB : 0 !== qB ? -2 * qB * Pc / (qB - Pc) : -2 * Pc,
          Sc = Math.tan(sc);
        return ec.FromValuesToRef(Tc, 0, 0, 0, 0, fc, 0, Sc, 0, 0, mB, -1, 0, 0, tB, 0, Ic), uc && Ic.multiplyToRef(yB, Ic), Ic._updateIdentityStatus(!1), Ic
      }
      static PerspectiveFovReverseRHToRef(cB, Bc, nc, Vc, Ic) {
        let rB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          uc = arguments.length > 6 ? arguments[6] : void 0,
          sc = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const Mc = 1 / Math.tan(.5 * cB),
          Pc = rB ? Mc / Bc : Mc,
          qB = rB ? Mc : Mc * Bc,
          Oc = Math.tan(sc);
        return ec.FromValuesToRef(Pc, 0, 0, 0, 0, qB, 0, Oc, 0, 0, -nc, -1, 0, 0, -1, 0, Ic), uc && Ic.multiplyToRef(yB, Ic), Ic._updateIdentityStatus(!1), Ic
      }
      static GetFinalMatrix(cB, Bc, nc, Vc, Ic, rB) {
        const uc = cB.width,
          sc = cB.height,
          Mc = cB.x,
          Pc = cB.y,
          qB = ec.FromValues(uc / 2, 0, 0, 0, 0, -sc / 2, 0, 0, 0, 0, rB - Ic, 0, Mc + uc / 2, sc / 2 + Pc, Ic, 1),
          Oc = new ec;
        return Bc.multiplyToRef(nc, Oc), Oc.multiplyToRef(Vc, Oc), Oc.multiplyToRef(qB, Oc)
      }
      static GetAsMatrix2x2(cB) {
        const Bc = cB.m,
          nc = [Bc[0], Bc[1], Bc[4], Bc[5]];
        return rB.d.MatrixUse64Bits ? nc : new Float32Array(nc)
      }
      static GetAsMatrix3x3(cB) {
        const Bc = cB.m,
          nc = [Bc[0], Bc[1], Bc[2], Bc[4], Bc[5], Bc[6], Bc[8], Bc[9], Bc[10]];
        return rB.d.MatrixUse64Bits ? nc : new Float32Array(nc)
      }
      static Transpose(cB) {
        const Bc = new ec;
        return ec.TransposeToRef(cB, Bc), Bc
      }
      static TransposeToRef(cB, Bc) {
        const nc = cB.m,
          Vc = nc[0],
          Ic = nc[4],
          rB = nc[8],
          uc = nc[12],
          sc = nc[1],
          Mc = nc[5],
          Pc = nc[9],
          qB = nc[13],
          Oc = nc[2],
          Tc = nc[6],
          fc = nc[10],
          mB = nc[14],
          ec = nc[3],
          tB = nc[7],
          Sc = nc[11],
          yB = nc[15],
          zB = Bc._m;
        return zB[0] = Vc, zB[1] = Ic, zB[2] = rB, zB[3] = uc, zB[4] = sc, zB[5] = Mc, zB[6] = Pc, zB[7] = qB, zB[8] = Oc, zB[9] = Tc, zB[10] = fc, zB[11] = mB, zB[12] = ec, zB[13] = tB, zB[14] = Sc, zB[15] = yB, Bc.markAsUpdated(), Bc._updateIdentityStatus(cB._isIdentity, cB._isIdentityDirty), Bc
      }
      static Reflection(cB) {
        const Bc = new ec;
        return ec.ReflectionToRef(cB, Bc), Bc
      }
      static ReflectionToRef(cB, Bc) {
        cB.normalize();
        const nc = cB.normal.x,
          Vc = cB.normal.y,
          Ic = cB.normal.z,
          rB = -2 * nc,
          uc = -2 * Vc,
          sc = -2 * Ic;
        return ec.FromValuesToRef(rB * nc + 1, uc * nc, sc * nc, 0, rB * Vc, uc * Vc + 1, sc * Vc, 0, rB * Ic, uc * Ic, sc * Ic + 1, 0, rB * cB.d, uc * cB.d, sc * cB.d, 1, Bc), Bc
      }
      static FromXYZAxesToRef(cB, Bc, nc, Vc) {
        return ec.FromValuesToRef(cB._x, cB._y, cB._z, 0, Bc._x, Bc._y, Bc._z, 0, nc._x, nc._y, nc._z, 0, 0, 0, 0, 1, Vc), Vc
      }
      static FromQuaternionToRef(cB, Bc) {
        const nc = cB._x * cB._x,
          Vc = cB._y * cB._y,
          Ic = cB._z * cB._z,
          rB = cB._x * cB._y,
          uc = cB._z * cB._w,
          sc = cB._z * cB._x,
          Mc = cB._y * cB._w,
          Pc = cB._y * cB._z,
          qB = cB._x * cB._w;
        return Bc._m[0] = 1 - 2 * (Vc + Ic), Bc._m[1] = 2 * (rB + uc), Bc._m[2] = 2 * (sc - Mc), Bc._m[3] = 0, Bc._m[4] = 2 * (rB - uc), Bc._m[5] = 1 - 2 * (Ic + nc), Bc._m[6] = 2 * (Pc + qB), Bc._m[7] = 0, Bc._m[8] = 2 * (sc + Mc), Bc._m[9] = 2 * (Pc - qB), Bc._m[10] = 1 - 2 * (Vc + nc), Bc._m[11] = 0, Bc._m[12] = 0, Bc._m[13] = 0, Bc._m[14] = 0, Bc._m[15] = 1, Bc.markAsUpdated(), Bc
      }
    }
    ec._IdentityReadOnly = ec.Identity();
    class tB {}
    tB.KV = (0, Ic.g)(11, Tc.Zero), tB.Matrix = (0, Ic.g)(2, ec.Identity), tB.Quaternion = (0, Ic.g)(3, mB.Zero);
    class Sc {}
    Sc.Vector2 = (0, Ic.g)(3, Oc.Zero), Sc.KV = (0, Ic.g)(13, Tc.Zero), Sc.Vector4 = (0, Ic.g)(3, fc.Zero), Sc.Quaternion = (0, Ic.g)(3, mB.Zero), Sc.Matrix = (0, Ic.g)(8, ec.Identity);
    const yB = ec.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let zB = !1;

    function pc() {
      zB || (zB = !0, Object.defineProperties(Oc.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Tc.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(fc.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(mB.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(ec.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, Pc.d)("BABYLON.Vector2", Oc), (0, Pc.d)("BABYLON.Vector3", Tc), (0, Pc.d)("BABYLON.Vector4", fc), (0, Pc.d)("BABYLON.Matrix", ec))
    }
  },
  35783: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => uc
    });
    const Vc = "undefined" !== typeof WeakRef;
    class Ic {
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          nc = arguments.length > 2 ? arguments[2] : void 0,
          Vc = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(cB, Bc, nc, Vc)
      }
      initialize(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          nc = arguments.length > 2 ? arguments[2] : void 0,
          Vc = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = cB, this.skipNextObservers = Bc, this.target = nc, this.currentTarget = Vc, this
      }
    }
    class rB {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = cB, this.mask = Bc, this.scope = nc, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(cB)
      }
    }
    class uc {
      static FromPromise(cB, Bc) {
        const nc = new uc;
        return cB.then((cB => {
          nc.notifyObservers(cB)
        })).catch((cB => {
          if (!Bc) throw cB;
          Bc.notifyObservers(cB)
        })), nc
      }
      get observers() {
        return this._observers
      }
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = Bc, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new Ic(0), cB && (this._onObserverAdded = cB)
      }
      add(cB) {
        let Bc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          nc = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!cB) return null;
        const Ic = new rB(cB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        Ic.unregisterOnNextCall = nc, Bc ? this._observers.unshift(Ic) : this._observers.push(Ic), this._onObserverAdded && this._onObserverAdded(Ic), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(Ic, this._lastNotifiedValue);
        const uc = Vc ? new WeakRef(this) : {
          deref: () => this
        };
        return Ic._remove = function() {
          let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const Bc = uc.deref();
          Bc && (cB ? Bc.remove(Ic) : Bc._remove(Ic))
        }, Ic
      }
      addOnce(cB) {
        return this.add(cB, void 0, void 0, void 0, !0)
      }
      remove(cB) {
        if (!cB) return !1;
        cB._remove = null;
        return -1 !== this._observers.indexOf(cB) && (this._deferUnregister(cB), !0)
      }
      removeCallback(cB, Bc) {
        for (let nc = 0; nc < this._observers.length; nc++) {
          const Vc = this._observers[nc];
          if (!Vc._willBeUnregistered && (Vc.callback === cB && (!Bc || Bc === Vc.scope))) return this._deferUnregister(Vc), !0
        }
        return !1
      }
      _deferUnregister(cB) {
        cB._willBeUnregistered || (this._numObserversMarkedAsDeleted++, cB.unregisterOnNextCall = !1, cB._willBeUnregistered = !0, setTimeout((() => {
          this._remove(cB)
        }), 0))
      }
      _remove(cB) {
        let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!cB) return !1;
        const nc = this._observers.indexOf(cB);
        return -1 !== nc && (Bc && this._numObserversMarkedAsDeleted--, this._observers.splice(nc, 1), !0)
      }
      makeObserverTopPriority(cB) {
        this._remove(cB, !1), this._observers.unshift(cB)
      }
      makeObserverBottomPriority(cB) {
        this._remove(cB, !1), this._observers.push(cB)
      }
      notifyObservers(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          nc = arguments.length > 2 ? arguments[2] : void 0,
          Vc = arguments.length > 3 ? arguments[3] : void 0,
          Ic = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = cB), !this._observers.length) return !0;
        const rB = this._eventState;
        rB.mask = Bc, rB.target = nc, rB.currentTarget = Vc, rB.skipNextObservers = !1, rB.lastReturnValue = cB, rB.userInfo = Ic;
        for (const uc of this._observers)
          if (!uc._willBeUnregistered && (uc.mask & Bc && (uc.unregisterOnNextCall && this._deferUnregister(uc), uc.scope ? rB.lastReturnValue = uc.callback.apply(uc.scope, [cB, rB]) : rB.lastReturnValue = uc.callback(cB, rB)), rB.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = Bc), cB._willBeUnregistered) return;
        const Vc = this._eventState;
        Vc.mask = nc, Vc.skipNextObservers = !1, cB.unregisterOnNextCall && this._deferUnregister(cB), cB.callback(Bc, Vc)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const cB = this._observers.pop();
          cB && (cB._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const cB = new uc;
        return cB._observers = this._observers.slice(0), cB
      }
      hasSpecificMask() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const Bc of this._observers)
          if (Bc.mask & cB || Bc.mask === cB) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);