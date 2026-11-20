export const id = 221;
export const ids = [221];
export const modules = {
  36833: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Qu,
      f: () => Eu,
      g: () => Ku
    });
    const Eu = 1 / 2.2,
      Ku = 2.2;
    Math.sqrt(5);
    let Qu = .001
  },
  36865: (uu, Ru, yu) => {
    function Eu(uu) {
      return parseInt(uu.toString().replace(/\W/g, ""))
    }

    function Ku(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(uu - Ru) <= yu
    }

    function Qu(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return uu < Ru - Eu || uu > yu + Eu
    }

    function mu(uu, Ru) {
      return uu === Ru ? uu : Math.random() * (Ru - uu) + uu
    }

    function Ju(uu, Ru, yu) {
      return uu + (Ru - uu) * yu
    }

    function Nu(uu, Ru, yu) {
      let Eu = Tu(Ru - uu, 360);
      return Eu > 180 && (Eu -= 360), uu + Eu * Bu(yu)
    }

    function Xu(uu, Ru, yu) {
      let Eu;
      return Eu = uu != Ru ? Bu((yu - uu) / (Ru - uu)) : 0, Eu
    }

    function Vu(uu, Ru, yu, Eu, Ku) {
      const Qu = Ku * Ku,
        mu = Ku * Qu;
      return uu * (2 * mu - 3 * Qu + 1) + yu * (-2 * mu + 3 * Qu) + Ru * (mu - 2 * Qu + Ku) + Eu * (mu - Qu)
    }

    function ru(uu, Ru, yu, Eu, Ku) {
      const Qu = Ku * Ku;
      return 6 * (Qu - Ku) * uu + (3 * Qu - 4 * Ku + 1) * Ru + 6 * (-Qu + Ku) * yu + (3 * Qu - 2 * Ku) * Eu
    }

    function Bu(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(yu, Math.max(Ru, uu))
    }

    function xu(uu) {
      return uu -= 2 * Math.PI * Math.floor((uu + Math.PI) / (2 * Math.PI))
    }

    function Su(uu) {
      const Ru = uu.toString(16);
      return uu <= 15 ? ("0" + Ru).toUpperCase() : Ru.toUpperCase()
    }

    function pu(uu) {
      if (Math.log2) return Math.floor(Math.log2(uu));
      if (uu < 0) return NaN;
      if (0 === uu) return -1 / 0;
      let Ru = 0;
      if (uu < 1) {
        for (; uu < 1;) Ru++, uu *= 2;
        Ru = -Ru
      } else if (uu > 1)
        for (; uu > 1;) Ru++, uu = Math.floor(uu / 2);
      return Ru
    }

    function Tu(uu, Ru) {
      return uu - Math.floor(uu / Ru) * Ru
    }

    function Wu(uu, Ru, yu) {
      return (uu - Ru) / (yu - Ru)
    }

    function ju(uu, Ru, yu) {
      return uu * (yu - Ru) + Ru
    }

    function Hu(uu, Ru) {
      let yu = Tu(Ru - uu, 360);
      return yu > 180 && (yu -= 360), yu
    }

    function du(uu, Ru) {
      const yu = Tu(uu, 2 * Ru);
      return Ru - Math.abs(yu - Ru)
    }

    function bu(uu, Ru, yu) {
      let Eu = Bu(yu);
      return Eu = -2 * Eu * Eu * Eu + 3 * Eu * Eu, Ru * Eu + uu * (1 - Eu)
    }

    function Cu(uu, Ru, yu) {
      let Eu;
      return Eu = Math.abs(Ru - uu) <= yu ? Ru : uu + Math.sign(Ru - uu) * yu, Eu
    }

    function ku(uu, Ru, yu) {
      const Eu = Hu(uu, Ru);
      let Ku;
      return Ku = -yu < Eu && Eu < yu ? Ru : Cu(uu, Ru = uu + Eu, yu), Ku
    }

    function eu(uu, Ru, yu) {
      return (uu - Ru) / (yu - Ru)
    }

    function Au(uu, Ru, yu) {
      return (yu - Ru) * uu + Ru
    }

    function Du(uu, Ru) {
      const yu = uu % Ru;
      return 0 === yu ? Ru : Du(Ru, yu)
    }
    yu.r(Ru), yu.d(Ru, {
      Clamp: () => Bu,
      DeltaAngle: () => Hu,
      Denormalize: () => ju,
      ExtractAsInt: () => Eu,
      Hermite: () => Vu,
      Hermite1stDerivative: () => ru,
      HighestCommonFactor: () => Du,
      ILog2: () => pu,
      InverseLerp: () => Xu,
      Lerp: () => Ju,
      LerpAngle: () => Nu,
      MoveTowards: () => Cu,
      MoveTowardsAngle: () => ku,
      Normalize: () => Wu,
      NormalizeRadians: () => xu,
      OutsideRange: () => Qu,
      PercentToRange: () => Au,
      PingPong: () => du,
      RandomRange: () => mu,
      RangeToPercent: () => eu,
      Repeat: () => Tu,
      SmoothStep: () => bu,
      ToHex: () => Su,
      WithinEpsilon: () => Ku
    })
  },
  36828: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      Matrix: () => Eu.d,
      Quaternion: () => Eu.f,
      RegisterMathVector: () => Eu.j,
      TmpVectors: () => Eu.m,
      Vector2: () => Eu.n,
      MS: () => Eu.p,
      Vector4: () => Eu.r
    });
    var Eu = yu(36830);
    (0, Eu.j)()
  },
  36842: (uu, Ru, yu) => {
    function Eu(uu, Ru) {
      const yu = [];
      for (let Eu = 0; Eu < uu; ++Eu) yu.push(Ru());
      return yu
    }

    function Ku(uu, Ru) {
      return Eu(uu, Ru)
    }
    yu.d(Ru, {
      b: () => Eu,
      c: () => Ku,
      e: () => mu
    });
    const Qu = ["push", "splice", "pop", "shift", "unshift"];

    function mu(uu, Ru) {
      const yu = Qu.map((yu => function(uu, Ru, yu) {
        const Eu = uu[Ru];
        if ("function" !== typeof Eu) return null;
        const Ku = function() {
          const Eu = uu.length,
            Qu = Ku.previous.apply(uu, arguments);
          return yu(Ru, Eu), Qu
        };
        return Eu.next = Ku, Ku.previous = Eu, uu[Ru] = Ku, () => {
          const yu = Ku.previous;
          if (!yu) return;
          const Eu = Ku.next;
          Eu ? (yu.next = Eu, Eu.previous = yu) : (yu.next = void 0, uu[Ru] = yu), Ku.next = void 0, Ku.previous = void 0
        }
      }(uu, yu, Ru)));
      return () => {
        for (const uu of yu) uu?.()
      }
    }
  },
  36871: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Qu,
      c: () => Ku
    });
    const Eu = {};

    function Ku(uu, Ru) {
      Eu[uu] = Ru
    }

    function Qu(uu) {
      return Eu[uu]
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);