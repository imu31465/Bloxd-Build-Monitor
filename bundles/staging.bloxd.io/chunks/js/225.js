export const id = 225;
export const ids = [225];
export const modules = {
  36703: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Sk,
      e: () => Dk,
      i: () => fk
    });
    const Dk = 1 / 2.2,
      fk = 2.2;
    Math.sqrt(5);
    let Sk = .001
  },
  36729: (kk, ek, ik) => {
    function Dk(kk) {
      return parseInt(kk.toString().replace(/\W/g, ""))
    }

    function fk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(kk - ek) <= ik
    }

    function Sk(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return kk < ek - Dk || kk > ik + Dk
    }

    function bk(kk, ek) {
      return kk === ek ? kk : Math.random() * (ek - kk) + kk
    }

    function rk(kk, ek, ik) {
      return kk + (ek - kk) * ik
    }

    function Pk(kk, ek, ik) {
      let Dk = wk(ek - kk, 360);
      return Dk > 180 && (Dk -= 360), kk + Dk * xk(ik)
    }

    function mk(kk, ek, ik) {
      let Dk;
      return Dk = kk != ek ? xk((ik - kk) / (ek - kk)) : 0, Dk
    }

    function Mk(kk, ek, ik, Dk, fk) {
      const Sk = fk * fk,
        bk = fk * Sk;
      return kk * (2 * bk - 3 * Sk + 1) + ik * (-2 * bk + 3 * Sk) + ek * (bk - 2 * Sk + fk) + Dk * (bk - Sk)
    }

    function Kk(kk, ek, ik, Dk, fk) {
      const Sk = fk * fk;
      return 6 * (Sk - fk) * kk + (3 * Sk - 4 * fk + 1) * ek + 6 * (-Sk + fk) * ik + (3 * Sk - 2 * fk) * Dk
    }

    function xk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(ik, Math.max(ek, kk))
    }

    function nk(kk) {
      return kk -= 2 * Math.PI * Math.floor((kk + Math.PI) / (2 * Math.PI))
    }

    function Uk(kk) {
      const ek = kk.toString(16);
      return kk <= 15 ? ("0" + ek).toUpperCase() : ek.toUpperCase()
    }

    function Hk(kk) {
      if (Math.log2) return Math.floor(Math.log2(kk));
      if (kk < 0) return NaN;
      if (0 === kk) return -1 / 0;
      let ek = 0;
      if (kk < 1) {
        for (; kk < 1;) ek++, kk *= 2;
        ek = -ek
      } else if (kk > 1)
        for (; kk > 1;) ek++, kk = Math.floor(kk / 2);
      return ek
    }

    function wk(kk, ek) {
      return kk - Math.floor(kk / ek) * ek
    }

    function lk(kk, ek, ik) {
      return (kk - ek) / (ik - ek)
    }

    function pk(kk, ek, ik) {
      return kk * (ik - ek) + ek
    }

    function yk(kk, ek) {
      let ik = wk(ek - kk, 360);
      return ik > 180 && (ik -= 360), ik
    }

    function Yk(kk, ek) {
      const ik = wk(kk, 2 * ek);
      return ek - Math.abs(ik - ek)
    }

    function Lk(kk, ek, ik) {
      let Dk = xk(ik);
      return Dk = -2 * Dk * Dk * Dk + 3 * Dk * Dk, ek * Dk + kk * (1 - Dk)
    }

    function Ck(kk, ek, ik) {
      let Dk;
      return Dk = Math.abs(ek - kk) <= ik ? ek : kk + Math.sign(ek - kk) * ik, Dk
    }

    function Ak(kk, ek, ik) {
      const Dk = yk(kk, ek);
      let fk;
      return fk = -ik < Dk && Dk < ik ? ek : Ck(kk, ek = kk + Dk, ik), fk
    }

    function jk(kk, ek, ik) {
      return (kk - ek) / (ik - ek)
    }

    function sk(kk, ek, ik) {
      return (ik - ek) * kk + ek
    }

    function dk(kk, ek) {
      const ik = kk % ek;
      return 0 === ik ? ek : dk(ek, ik)
    }
    ik.r(ek), ik.d(ek, {
      Clamp: () => xk,
      DeltaAngle: () => yk,
      Denormalize: () => pk,
      ExtractAsInt: () => Dk,
      Hermite: () => Mk,
      Hermite1stDerivative: () => Kk,
      HighestCommonFactor: () => dk,
      ILog2: () => Hk,
      InverseLerp: () => mk,
      Lerp: () => rk,
      LerpAngle: () => Pk,
      MoveTowards: () => Ck,
      MoveTowardsAngle: () => Ak,
      Normalize: () => lk,
      NormalizeRadians: () => nk,
      OutsideRange: () => Sk,
      PercentToRange: () => sk,
      PingPong: () => Yk,
      RandomRange: () => bk,
      RangeToPercent: () => jk,
      Repeat: () => wk,
      SmoothStep: () => Lk,
      ToHex: () => Uk,
      WithinEpsilon: () => fk
    })
  },
  36690: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      Matrix: () => Dk.b,
      Quaternion: () => Dk.c,
      RegisterMathVector: () => Dk.g,
      TmpVectors: () => Dk.j,
      Vector2: () => Dk.l,
      eH: () => Dk.o,
      Vector4: () => Dk.p
    });
    var Dk = ik(36698);
    (0, Dk.g)()
  },
  36707: (kk, ek, ik) => {
    function Dk(kk, ek) {
      const ik = [];
      for (let Dk = 0; Dk < kk; ++Dk) ik.push(ek());
      return ik
    }

    function fk(kk, ek) {
      return Dk(kk, ek)
    }
    ik.d(ek, {
      c: () => Dk,
      e: () => fk,
      h: () => bk
    });
    const Sk = ["push", "splice", "pop", "shift", "unshift"];

    function bk(kk, ek) {
      const ik = Sk.map((ik => function(kk, ek, ik) {
        const Dk = kk[ek];
        if ("function" !== typeof Dk) return null;
        const fk = function() {
          const Dk = kk.length,
            Sk = fk.previous.apply(kk, arguments);
          return ik(ek, Dk), Sk
        };
        return Dk.next = fk, fk.previous = Dk, kk[ek] = fk, () => {
          const ik = fk.previous;
          if (!ik) return;
          const Dk = fk.next;
          Dk ? (ik.next = Dk, Dk.previous = ik) : (ik.next = void 0, kk[ek] = ik), fk.next = void 0, fk.previous = void 0
        }
      }(kk, ik, ek)));
      return () => {
        for (const kk of ik) kk?.()
      }
    }
  },
  36734: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Sk,
      h: () => fk
    });
    const Dk = {};

    function fk(kk, ek) {
      Dk[kk] = ek
    }

    function Sk(kk) {
      return Dk[kk]
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);