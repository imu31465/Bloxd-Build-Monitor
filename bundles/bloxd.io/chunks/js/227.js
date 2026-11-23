export const id = 227;
export const ids = [227];
export const modules = {
  37158: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => ik,
      d: () => Xk,
      g: () => Tk
    });
    const Xk = 1 / 2.2,
      Tk = 2.2;
    Math.sqrt(5);
    let ik = .001
  },
  37189: (kk, Fk, Ik) => {
    function Xk(kk) {
      return parseInt(kk.toString().replace(/\W/g, ""))
    }

    function Tk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(kk - Fk) <= Ik
    }

    function ik(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return kk < Fk - Xk || kk > Ik + Xk
    }

    function yk(kk, Fk) {
      return kk === Fk ? kk : Math.random() * (Fk - kk) + kk
    }

    function lk(kk, Fk, Ik) {
      return kk + (Fk - kk) * Ik
    }

    function ak(kk, Fk, Ik) {
      let Xk = Hk(Fk - kk, 360);
      return Xk > 180 && (Xk -= 360), kk + Xk * Zk(Ik)
    }

    function qk(kk, Fk, Ik) {
      let Xk;
      return Xk = kk != Fk ? Zk((Ik - kk) / (Fk - kk)) : 0, Xk
    }

    function Lk(kk, Fk, Ik, Xk, Tk) {
      const ik = Tk * Tk,
        yk = Tk * ik;
      return kk * (2 * yk - 3 * ik + 1) + Ik * (-2 * yk + 3 * ik) + Fk * (yk - 2 * ik + Tk) + Xk * (yk - ik)
    }

    function tk(kk, Fk, Ik, Xk, Tk) {
      const ik = Tk * Tk;
      return 6 * (ik - Tk) * kk + (3 * ik - 4 * Tk + 1) * Fk + 6 * (-ik + Tk) * Ik + (3 * ik - 2 * Tk) * Xk
    }

    function Zk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(Ik, Math.max(Fk, kk))
    }

    function jk(kk) {
      return kk -= 2 * Math.PI * Math.floor((kk + Math.PI) / (2 * Math.PI))
    }

    function ek(kk) {
      const Fk = kk.toString(16);
      return kk <= 15 ? ("0" + Fk).toUpperCase() : Fk.toUpperCase()
    }

    function wk(kk) {
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

    function Hk(kk, Fk) {
      return kk - Math.floor(kk / Fk) * Fk
    }

    function Jk(kk, Fk, Ik) {
      return (kk - Fk) / (Ik - Fk)
    }

    function xk(kk, Fk, Ik) {
      return kk * (Ik - Fk) + Fk
    }

    function Pk(kk, Fk) {
      let Ik = Hk(Fk - kk, 360);
      return Ik > 180 && (Ik -= 360), Ik
    }

    function Kk(kk, Fk) {
      const Ik = Hk(kk, 2 * Fk);
      return Fk - Math.abs(Ik - Fk)
    }

    function Qk(kk, Fk, Ik) {
      let Xk = Zk(Ik);
      return Xk = -2 * Xk * Xk * Xk + 3 * Xk * Xk, Fk * Xk + kk * (1 - Xk)
    }

    function sk(kk, Fk, Ik) {
      let Xk;
      return Xk = Math.abs(Fk - kk) <= Ik ? Fk : kk + Math.sign(Fk - kk) * Ik, Xk
    }

    function Vk(kk, Fk, Ik) {
      const Xk = Pk(kk, Fk);
      let Tk;
      return Tk = -Ik < Xk && Xk < Ik ? Fk : sk(kk, Fk = kk + Xk, Ik), Tk
    }

    function zk(kk, Fk, Ik) {
      return (kk - Fk) / (Ik - Fk)
    }

    function Sk(kk, Fk, Ik) {
      return (Ik - Fk) * kk + Fk
    }

    function vk(kk, Fk) {
      const Ik = kk % Fk;
      return 0 === Ik ? Fk : vk(Fk, Ik)
    }
    Ik.r(Fk), Ik.d(Fk, {
      Clamp: () => Zk,
      DeltaAngle: () => Pk,
      Denormalize: () => xk,
      ExtractAsInt: () => Xk,
      Hermite: () => Lk,
      Hermite1stDerivative: () => tk,
      HighestCommonFactor: () => vk,
      ILog2: () => wk,
      InverseLerp: () => qk,
      Lerp: () => lk,
      LerpAngle: () => ak,
      MoveTowards: () => sk,
      MoveTowardsAngle: () => Vk,
      Normalize: () => Jk,
      NormalizeRadians: () => jk,
      OutsideRange: () => ik,
      PercentToRange: () => Sk,
      PingPong: () => Kk,
      RandomRange: () => yk,
      RangeToPercent: () => zk,
      Repeat: () => Hk,
      SmoothStep: () => Qk,
      ToHex: () => ek,
      WithinEpsilon: () => Tk
    })
  },
  37144: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      Matrix: () => Xk.c,
      Quaternion: () => Xk.f,
      RegisterMathVector: () => Xk.h,
      TmpVectors: () => Xk.l,
      Vector2: () => Xk.p,
      Ge: () => Xk.t,
      Vector4: () => Xk.u
    });
    var Xk = Ik(37153);
    (0, Xk.h)()
  },
  37166: (kk, Fk, Ik) => {
    function Xk(kk, Fk) {
      const Ik = [];
      for (let Xk = 0; Xk < kk; ++Xk) Ik.push(Fk());
      return Ik
    }

    function Tk(kk, Fk) {
      return Xk(kk, Fk)
    }
    Ik.d(Fk, {
      b: () => Xk,
      c: () => Tk,
      f: () => yk
    });
    const ik = ["push", "splice", "pop", "shift", "unshift"];

    function yk(kk, Fk) {
      const Ik = ik.map((Ik => function(kk, Fk, Ik) {
        const Xk = kk[Fk];
        if ("function" !== typeof Xk) return null;
        const Tk = function() {
          const Xk = kk.length,
            ik = Tk.previous.apply(kk, arguments);
          return Ik(Fk, Xk), ik
        };
        return Xk.next = Tk, Tk.previous = Xk, kk[Fk] = Tk, () => {
          const Ik = Tk.previous;
          if (!Ik) return;
          const Xk = Tk.next;
          Xk ? (Ik.next = Xk, Xk.previous = Ik) : (Ik.next = void 0, kk[Fk] = Ik), Tk.next = void 0, Tk.previous = void 0
        }
      }(kk, Ik, Fk)));
      return () => {
        for (const kk of Ik) kk?.()
      }
    }
  },
  37201: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => ik,
      f: () => Tk
    });
    const Xk = {};

    function Tk(kk, Fk) {
      Xk[kk] = Fk
    }

    function ik(kk) {
      return Xk[kk]
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);