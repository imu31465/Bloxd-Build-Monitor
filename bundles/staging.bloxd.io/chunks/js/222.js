export const id = 222;
export const ids = [222];
export const modules = {
  37259: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Wd,
      f: () => pd,
      h: () => Nd
    });
    const pd = 1 / 2.2,
      Nd = 2.2;
    Math.sqrt(5);
    let Wd = .001
  },
  37289: (dd, Jd, kd) => {
    function pd(dd) {
      return parseInt(dd.toString().replace(/\W/g, ""))
    }

    function Nd(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(dd - Jd) <= kd
    }

    function Wd(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return dd < Jd - pd || dd > kd + pd
    }

    function Pd(dd, Jd) {
      return dd === Jd ? dd : Math.random() * (Jd - dd) + dd
    }

    function Zd(dd, Jd, kd) {
      return dd + (Jd - dd) * kd
    }

    function gd(dd, Jd, kd) {
      let pd = ed(Jd - dd, 360);
      return pd > 180 && (pd -= 360), dd + pd * ld(kd)
    }

    function Cd(dd, Jd, kd) {
      let pd;
      return pd = dd != Jd ? ld((kd - dd) / (Jd - dd)) : 0, pd
    }

    function Kd(dd, Jd, kd, pd, Nd) {
      const Wd = Nd * Nd,
        Pd = Nd * Wd;
      return dd * (2 * Pd - 3 * Wd + 1) + kd * (-2 * Pd + 3 * Wd) + Jd * (Pd - 2 * Wd + Nd) + pd * (Pd - Wd)
    }

    function od(dd, Jd, kd, pd, Nd) {
      const Wd = Nd * Nd;
      return 6 * (Wd - Nd) * dd + (3 * Wd - 4 * Nd + 1) * Jd + 6 * (-Wd + Nd) * kd + (3 * Wd - 2 * Nd) * pd
    }

    function ld(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(kd, Math.max(Jd, dd))
    }

    function Qd(dd) {
      return dd -= 2 * Math.PI * Math.floor((dd + Math.PI) / (2 * Math.PI))
    }

    function Ld(dd) {
      const Jd = dd.toString(16);
      return dd <= 15 ? ("0" + Jd).toUpperCase() : Jd.toUpperCase()
    }

    function Od(dd) {
      if (Math.log2) return Math.floor(Math.log2(dd));
      if (dd < 0) return NaN;
      if (0 === dd) return -1 / 0;
      let Jd = 0;
      if (dd < 1) {
        for (; dd < 1;) Jd++, dd *= 2;
        Jd = -Jd
      } else if (dd > 1)
        for (; dd > 1;) Jd++, dd = Math.floor(dd / 2);
      return Jd
    }

    function ed(dd, Jd) {
      return dd - Math.floor(dd / Jd) * Jd
    }

    function Rd(dd, Jd, kd) {
      return (dd - Jd) / (kd - Jd)
    }

    function Id(dd, Jd, kd) {
      return dd * (kd - Jd) + Jd
    }

    function Gd(dd, Jd) {
      let kd = ed(Jd - dd, 360);
      return kd > 180 && (kd -= 360), kd
    }

    function vd(dd, Jd) {
      const kd = ed(dd, 2 * Jd);
      return Jd - Math.abs(kd - Jd)
    }

    function xd(dd, Jd, kd) {
      let pd = ld(kd);
      return pd = -2 * pd * pd * pd + 3 * pd * pd, Jd * pd + dd * (1 - pd)
    }

    function qd(dd, Jd, kd) {
      let pd;
      return pd = Math.abs(Jd - dd) <= kd ? Jd : dd + Math.sign(Jd - dd) * kd, pd
    }

    function Bd(dd, Jd, kd) {
      const pd = Gd(dd, Jd);
      let Nd;
      return Nd = -kd < pd && pd < kd ? Jd : qd(dd, Jd = dd + pd, kd), Nd
    }

    function sd(dd, Jd, kd) {
      return (dd - Jd) / (kd - Jd)
    }

    function ad(dd, Jd, kd) {
      return (kd - Jd) * dd + Jd
    }

    function Md(dd, Jd) {
      const kd = dd % Jd;
      return 0 === kd ? Jd : Md(Jd, kd)
    }
    kd.r(Jd), kd.d(Jd, {
      Clamp: () => ld,
      DeltaAngle: () => Gd,
      Denormalize: () => Id,
      ExtractAsInt: () => pd,
      Hermite: () => Kd,
      Hermite1stDerivative: () => od,
      HighestCommonFactor: () => Md,
      ILog2: () => Od,
      InverseLerp: () => Cd,
      Lerp: () => Zd,
      LerpAngle: () => gd,
      MoveTowards: () => qd,
      MoveTowardsAngle: () => Bd,
      Normalize: () => Rd,
      NormalizeRadians: () => Qd,
      OutsideRange: () => Wd,
      PercentToRange: () => ad,
      PingPong: () => vd,
      RandomRange: () => Pd,
      RangeToPercent: () => sd,
      Repeat: () => ed,
      SmoothStep: () => xd,
      ToHex: () => Ld,
      WithinEpsilon: () => Nd
    })
  },
  37245: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      Matrix: () => pd.b,
      Quaternion: () => pd.d,
      RegisterMathVector: () => pd.f,
      TmpVectors: () => pd.h,
      Vector2: () => pd.k,
      IL: () => pd.n,
      Vector4: () => pd.o
    });
    var pd = kd(37251);
    (0, pd.f)()
  },
  37267: (dd, Jd, kd) => {
    function pd(dd, Jd) {
      const kd = [];
      for (let pd = 0; pd < dd; ++pd) kd.push(Jd());
      return kd
    }

    function Nd(dd, Jd) {
      return pd(dd, Jd)
    }
    kd.d(Jd, {
      b: () => pd,
      f: () => Nd,
      h: () => Pd
    });
    const Wd = ["push", "splice", "pop", "shift", "unshift"];

    function Pd(dd, Jd) {
      const kd = Wd.map((kd => function(dd, Jd, kd) {
        const pd = dd[Jd];
        if ("function" !== typeof pd) return null;
        const Nd = function() {
          const pd = dd.length,
            Wd = Nd.previous.apply(dd, arguments);
          return kd(Jd, pd), Wd
        };
        return pd.next = Nd, Nd.previous = pd, dd[Jd] = Nd, () => {
          const kd = Nd.previous;
          if (!kd) return;
          const pd = Nd.next;
          pd ? (kd.next = pd, pd.previous = kd) : (kd.next = void 0, dd[Jd] = kd), Nd.next = void 0, Nd.previous = void 0
        }
      }(dd, kd, Jd)));
      return () => {
        for (const dd of kd) dd?.()
      }
    }
  },
  37303: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Wd,
      h: () => Nd
    });
    const pd = {};

    function Nd(dd, Jd) {
      pd[dd] = Jd
    }

    function Wd(dd) {
      return pd[dd]
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);