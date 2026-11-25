export const id = 232;
export const ids = [232];
export const modules = {
  37496: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Zu,
      e: () => su,
      i: () => Uu
    });
    const su = 1 / 2.2,
      Uu = 2.2;
    Math.sqrt(5);
    let Zu = .001
  },
  37519: (uu, Eu, ju) => {
    function su(uu) {
      return parseInt(uu.toString().replace(/\W/g, ""))
    }

    function Uu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(uu - Eu) <= ju
    }

    function Zu(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return uu < Eu - su || uu > ju + su
    }

    function Xu(uu, Eu) {
      return uu === Eu ? uu : Math.random() * (Eu - uu) + uu
    }

    function lu(uu, Eu, ju) {
      return uu + (Eu - uu) * ju
    }

    function qu(uu, Eu, ju) {
      let su = hu(Eu - uu, 360);
      return su > 180 && (su -= 360), uu + su * cu(ju)
    }

    function fu(uu, Eu, ju) {
      let su;
      return su = uu != Eu ? cu((ju - uu) / (Eu - uu)) : 0, su
    }

    function Cu(uu, Eu, ju, su, Uu) {
      const Zu = Uu * Uu,
        Xu = Uu * Zu;
      return uu * (2 * Xu - 3 * Zu + 1) + ju * (-2 * Xu + 3 * Zu) + Eu * (Xu - 2 * Zu + Uu) + su * (Xu - Zu)
    }

    function bu(uu, Eu, ju, su, Uu) {
      const Zu = Uu * Uu;
      return 6 * (Zu - Uu) * uu + (3 * Zu - 4 * Uu + 1) * Eu + 6 * (-Zu + Uu) * ju + (3 * Zu - 2 * Uu) * su
    }

    function cu(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(ju, Math.max(Eu, uu))
    }

    function Nu(uu) {
      return uu -= 2 * Math.PI * Math.floor((uu + Math.PI) / (2 * Math.PI))
    }

    function Ou(uu) {
      const Eu = uu.toString(16);
      return uu <= 15 ? ("0" + Eu).toUpperCase() : Eu.toUpperCase()
    }

    function Yu(uu) {
      if (Math.log2) return Math.floor(Math.log2(uu));
      if (uu < 0) return NaN;
      if (0 === uu) return -1 / 0;
      let Eu = 0;
      if (uu < 1) {
        for (; uu < 1;) Eu++, uu *= 2;
        Eu = -Eu
      } else if (uu > 1)
        for (; uu > 1;) Eu++, uu = Math.floor(uu / 2);
      return Eu
    }

    function hu(uu, Eu) {
      return uu - Math.floor(uu / Eu) * Eu
    }

    function Du(uu, Eu, ju) {
      return (uu - Eu) / (ju - Eu)
    }

    function gu(uu, Eu, ju) {
      return uu * (ju - Eu) + Eu
    }

    function Mu(uu, Eu) {
      let ju = hu(Eu - uu, 360);
      return ju > 180 && (ju -= 360), ju
    }

    function eu(uu, Eu) {
      const ju = hu(uu, 2 * Eu);
      return Eu - Math.abs(ju - Eu)
    }

    function Gu(uu, Eu, ju) {
      let su = cu(ju);
      return su = -2 * su * su * su + 3 * su * su, Eu * su + uu * (1 - su)
    }

    function pu(uu, Eu, ju) {
      let su;
      return su = Math.abs(Eu - uu) <= ju ? Eu : uu + Math.sign(Eu - uu) * ju, su
    }

    function wu(uu, Eu, ju) {
      const su = Mu(uu, Eu);
      let Uu;
      return Uu = -ju < su && su < ju ? Eu : pu(uu, Eu = uu + su, ju), Uu
    }

    function Ju(uu, Eu, ju) {
      return (uu - Eu) / (ju - Eu)
    }

    function du(uu, Eu, ju) {
      return (ju - Eu) * uu + Eu
    }

    function au(uu, Eu) {
      const ju = uu % Eu;
      return 0 === ju ? Eu : au(Eu, ju)
    }
    ju.r(Eu), ju.d(Eu, {
      Clamp: () => cu,
      DeltaAngle: () => Mu,
      Denormalize: () => gu,
      ExtractAsInt: () => su,
      Hermite: () => Cu,
      Hermite1stDerivative: () => bu,
      HighestCommonFactor: () => au,
      ILog2: () => Yu,
      InverseLerp: () => fu,
      Lerp: () => lu,
      LerpAngle: () => qu,
      MoveTowards: () => pu,
      MoveTowardsAngle: () => wu,
      Normalize: () => Du,
      NormalizeRadians: () => Nu,
      OutsideRange: () => Zu,
      PercentToRange: () => du,
      PingPong: () => eu,
      RandomRange: () => Xu,
      RangeToPercent: () => Ju,
      Repeat: () => hu,
      SmoothStep: () => Gu,
      ToHex: () => Ou,
      WithinEpsilon: () => Uu
    })
  },
  37488: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      Matrix: () => su.e,
      Quaternion: () => su.i,
      RegisterMathVector: () => su.l,
      TmpVectors: () => su.m,
      Vector2: () => su.p,
      dO: () => su.t,
      Vector4: () => su.u
    });
    var su = ju(37494);
    (0, su.l)()
  },
  37498: (uu, Eu, ju) => {
    function su(uu, Eu) {
      const ju = [];
      for (let su = 0; su < uu; ++su) ju.push(Eu());
      return ju
    }

    function Uu(uu, Eu) {
      return su(uu, Eu)
    }
    ju.d(Eu, {
      e: () => su,
      h: () => Uu,
      k: () => Xu
    });
    const Zu = ["push", "splice", "pop", "shift", "unshift"];

    function Xu(uu, Eu) {
      const ju = Zu.map((ju => function(uu, Eu, ju) {
        const su = uu[Eu];
        if ("function" !== typeof su) return null;
        const Uu = function() {
          const su = uu.length,
            Zu = Uu.previous.apply(uu, arguments);
          return ju(Eu, su), Zu
        };
        return su.next = Uu, Uu.previous = su, uu[Eu] = Uu, () => {
          const ju = Uu.previous;
          if (!ju) return;
          const su = Uu.next;
          su ? (ju.next = su, su.previous = ju) : (ju.next = void 0, uu[Eu] = ju), Uu.next = void 0, Uu.previous = void 0
        }
      }(uu, ju, Eu)));
      return () => {
        for (const uu of ju) uu?.()
      }
    }
  },
  37532: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu,
      f: () => Uu
    });
    const su = {};

    function Uu(uu, Eu) {
      su[uu] = Eu
    }

    function Zu(uu) {
      return su[uu]
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);