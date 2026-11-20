export const id = 221;
export const ids = [221];
export const modules = {
  36764: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak,
      e: () => Rk,
      i: () => tk
    });
    const Rk = 1 / 2.2,
      tk = 2.2;
    Math.sqrt(5);
    let ak = .001
  },
  36790: (kk, Fk, Bk) => {
    function Rk(kk) {
      return parseInt(kk.toString().replace(/\W/g, ""))
    }

    function tk(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(kk - Fk) <= Bk
    }

    function ak(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return kk < Fk - Rk || kk > Bk + Rk
    }

    function Xk(kk, Fk) {
      return kk === Fk ? kk : Math.random() * (Fk - kk) + kk
    }

    function bk(kk, Fk, Bk) {
      return kk + (Fk - kk) * Bk
    }

    function wk(kk, Fk, Bk) {
      let Rk = fk(Fk - kk, 360);
      return Rk > 180 && (Rk -= 360), kk + Rk * Jk(Bk)
    }

    function dk(kk, Fk, Bk) {
      let Rk;
      return Rk = kk != Fk ? Jk((Bk - kk) / (Fk - kk)) : 0, Rk
    }

    function sk(kk, Fk, Bk, Rk, tk) {
      const ak = tk * tk,
        Xk = tk * ak;
      return kk * (2 * Xk - 3 * ak + 1) + Bk * (-2 * Xk + 3 * ak) + Fk * (Xk - 2 * ak + tk) + Rk * (Xk - ak)
    }

    function Vk(kk, Fk, Bk, Rk, tk) {
      const ak = tk * tk;
      return 6 * (ak - tk) * kk + (3 * ak - 4 * tk + 1) * Fk + 6 * (-ak + tk) * Bk + (3 * ak - 2 * tk) * Rk
    }

    function Jk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(Bk, Math.max(Fk, kk))
    }

    function Ak(kk) {
      return kk -= 2 * Math.PI * Math.floor((kk + Math.PI) / (2 * Math.PI))
    }

    function ek(kk) {
      const Fk = kk.toString(16);
      return kk <= 15 ? ("0" + Fk).toUpperCase() : Fk.toUpperCase()
    }

    function yk(kk) {
      if (Math.log2) return Math.floor(Math.log2(kk));
      if (kk < 0) return NaN;
      if (0 === kk) return -1 / 0;
      let Fk = 0;
      if (kk < 1) {
        for (; kk < 1;) Fk++, kk *= 2;
        Fk = -Fk
      } else if (kk > 1)
        for (; kk > 1;) Fk++, kk = Math.floor(kk / 2);
      return Fk
    }

    function fk(kk, Fk) {
      return kk - Math.floor(kk / Fk) * Fk
    }

    function mk(kk, Fk, Bk) {
      return (kk - Fk) / (Bk - Fk)
    }

    function Wk(kk, Fk, Bk) {
      return kk * (Bk - Fk) + Fk
    }

    function vk(kk, Fk) {
      let Bk = fk(Fk - kk, 360);
      return Bk > 180 && (Bk -= 360), Bk
    }

    function ik(kk, Fk) {
      const Bk = fk(kk, 2 * Fk);
      return Fk - Math.abs(Bk - Fk)
    }

    function Yk(kk, Fk, Bk) {
      let Rk = Jk(Bk);
      return Rk = -2 * Rk * Rk * Rk + 3 * Rk * Rk, Fk * Rk + kk * (1 - Rk)
    }

    function Lk(kk, Fk, Bk) {
      let Rk;
      return Rk = Math.abs(Fk - kk) <= Bk ? Fk : kk + Math.sign(Fk - kk) * Bk, Rk
    }

    function Ok(kk, Fk, Bk) {
      const Rk = vk(kk, Fk);
      let tk;
      return tk = -Bk < Rk && Rk < Bk ? Fk : Lk(kk, Fk = kk + Rk, Bk), tk
    }

    function Ek(kk, Fk, Bk) {
      return (kk - Fk) / (Bk - Fk)
    }

    function Sk(kk, Fk, Bk) {
      return (Bk - Fk) * kk + Fk
    }

    function Nk(kk, Fk) {
      const Bk = kk % Fk;
      return 0 === Bk ? Fk : Nk(Fk, Bk)
    }
    Bk.r(Fk), Bk.d(Fk, {
      Clamp: () => Jk,
      DeltaAngle: () => vk,
      Denormalize: () => Wk,
      ExtractAsInt: () => Rk,
      Hermite: () => sk,
      Hermite1stDerivative: () => Vk,
      HighestCommonFactor: () => Nk,
      ILog2: () => yk,
      InverseLerp: () => dk,
      Lerp: () => bk,
      LerpAngle: () => wk,
      MoveTowards: () => Lk,
      MoveTowardsAngle: () => Ok,
      Normalize: () => mk,
      NormalizeRadians: () => Ak,
      OutsideRange: () => ak,
      PercentToRange: () => Sk,
      PingPong: () => ik,
      RandomRange: () => Xk,
      RangeToPercent: () => Ek,
      Repeat: () => fk,
      SmoothStep: () => Yk,
      ToHex: () => ek,
      WithinEpsilon: () => tk
    })
  },
  36754: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      Matrix: () => Rk.c,
      Quaternion: () => Rk.e,
      RegisterMathVector: () => Rk.i,
      TmpVectors: () => Rk.l,
      Vector2: () => Rk.p,
      Qe: () => Rk.s,
      Vector4: () => Rk.v
    });
    var Rk = Bk(36758);
    (0, Rk.i)()
  },
  36768: (kk, Fk, Bk) => {
    function Rk(kk, Fk) {
      const Bk = [];
      for (let Rk = 0; Rk < kk; ++Rk) Bk.push(Fk());
      return Bk
    }

    function tk(kk, Fk) {
      return Rk(kk, Fk)
    }
    Bk.d(Fk, {
      c: () => Rk,
      f: () => tk,
      j: () => Xk
    });
    const ak = ["push", "splice", "pop", "shift", "unshift"];

    function Xk(kk, Fk) {
      const Bk = ak.map((Bk => function(kk, Fk, Bk) {
        const Rk = kk[Fk];
        if ("function" !== typeof Rk) return null;
        const tk = function() {
          const Rk = kk.length,
            ak = tk.previous.apply(kk, arguments);
          return Bk(Fk, Rk), ak
        };
        return Rk.next = tk, tk.previous = Rk, kk[Fk] = tk, () => {
          const Bk = tk.previous;
          if (!Bk) return;
          const Rk = tk.next;
          Rk ? (Bk.next = Rk, Rk.previous = Bk) : (Bk.next = void 0, kk[Fk] = Bk), tk.next = void 0, tk.previous = void 0
        }
      }(kk, Bk, Fk)));
      return () => {
        for (const kk of Bk) kk?.()
      }
    }
  },
  36798: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak,
      d: () => tk
    });
    const Rk = {};

    function tk(kk, Fk) {
      Rk[kk] = Fk
    }

    function ak(kk) {
      return Rk[kk]
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);