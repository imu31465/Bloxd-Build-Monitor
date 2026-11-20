export const id = 222;
export const ids = [222];
export const modules = {
  37145: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Oq,
      e: () => Yq,
      h: () => lq
    });
    const Yq = 1 / 2.2,
      lq = 2.2;
    Math.sqrt(5);
    let Oq = .001
  },
  37158: (qq, Eq, gq) => {
    function Yq(qq) {
      return parseInt(qq.toString().replace(/\W/g, ""))
    }

    function lq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(qq - Eq) <= gq
    }

    function Oq(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return qq < Eq - Yq || qq > gq + Yq
    }

    function mq(qq, Eq) {
      return qq === Eq ? qq : Math.random() * (Eq - qq) + qq
    }

    function xq(qq, Eq, gq) {
      return qq + (Eq - qq) * gq
    }

    function Aq(qq, Eq, gq) {
      let Yq = dq(Eq - qq, 360);
      return Yq > 180 && (Yq -= 360), qq + Yq * Wq(gq)
    }

    function cq(qq, Eq, gq) {
      let Yq;
      return Yq = qq != Eq ? Wq((gq - qq) / (Eq - qq)) : 0, Yq
    }

    function uq(qq, Eq, gq, Yq, lq) {
      const Oq = lq * lq,
        mq = lq * Oq;
      return qq * (2 * mq - 3 * Oq + 1) + gq * (-2 * mq + 3 * Oq) + Eq * (mq - 2 * Oq + lq) + Yq * (mq - Oq)
    }

    function Bq(qq, Eq, gq, Yq, lq) {
      const Oq = lq * lq;
      return 6 * (Oq - lq) * qq + (3 * Oq - 4 * lq + 1) * Eq + 6 * (-Oq + lq) * gq + (3 * Oq - 2 * lq) * Yq
    }

    function Wq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(gq, Math.max(Eq, qq))
    }

    function Nq(qq) {
      return qq -= 2 * Math.PI * Math.floor((qq + Math.PI) / (2 * Math.PI))
    }

    function aq(qq) {
      const Eq = qq.toString(16);
      return qq <= 15 ? ("0" + Eq).toUpperCase() : Eq.toUpperCase()
    }

    function Vq(qq) {
      if (Math.log2) return Math.floor(Math.log2(qq));
      if (qq < 0) return NaN;
      if (0 === qq) return -1 / 0;
      let Eq = 0;
      if (qq < 1) {
        for (; qq < 1;) Eq++, qq *= 2;
        Eq = -Eq
      } else if (qq > 1)
        for (; qq > 1;) Eq++, qq = Math.floor(qq / 2);
      return Eq
    }

    function dq(qq, Eq) {
      return qq - Math.floor(qq / Eq) * Eq
    }

    function jq(qq, Eq, gq) {
      return (qq - Eq) / (gq - Eq)
    }

    function Hq(qq, Eq, gq) {
      return qq * (gq - Eq) + Eq
    }

    function oq(qq, Eq) {
      let gq = dq(Eq - qq, 360);
      return gq > 180 && (gq -= 360), gq
    }

    function Pq(qq, Eq) {
      const gq = dq(qq, 2 * Eq);
      return Eq - Math.abs(gq - Eq)
    }

    function Qq(qq, Eq, gq) {
      let Yq = Wq(gq);
      return Yq = -2 * Yq * Yq * Yq + 3 * Yq * Yq, Eq * Yq + qq * (1 - Yq)
    }

    function yq(qq, Eq, gq) {
      let Yq;
      return Yq = Math.abs(Eq - qq) <= gq ? Eq : qq + Math.sign(Eq - qq) * gq, Yq
    }

    function tq(qq, Eq, gq) {
      const Yq = oq(qq, Eq);
      let lq;
      return lq = -gq < Yq && Yq < gq ? Eq : yq(qq, Eq = qq + Yq, gq), lq
    }

    function rq(qq, Eq, gq) {
      return (qq - Eq) / (gq - Eq)
    }

    function vq(qq, Eq, gq) {
      return (gq - Eq) * qq + Eq
    }

    function hq(qq, Eq) {
      const gq = qq % Eq;
      return 0 === gq ? Eq : hq(Eq, gq)
    }
    gq.r(Eq), gq.d(Eq, {
      Clamp: () => Wq,
      DeltaAngle: () => oq,
      Denormalize: () => Hq,
      ExtractAsInt: () => Yq,
      Hermite: () => uq,
      Hermite1stDerivative: () => Bq,
      HighestCommonFactor: () => hq,
      ILog2: () => Vq,
      InverseLerp: () => cq,
      Lerp: () => xq,
      LerpAngle: () => Aq,
      MoveTowards: () => yq,
      MoveTowardsAngle: () => tq,
      Normalize: () => jq,
      NormalizeRadians: () => Nq,
      OutsideRange: () => Oq,
      PercentToRange: () => vq,
      PingPong: () => Pq,
      RandomRange: () => mq,
      RangeToPercent: () => rq,
      Repeat: () => dq,
      SmoothStep: () => Qq,
      ToHex: () => aq,
      WithinEpsilon: () => lq
    })
  },
  37131: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      Matrix: () => Yq.e,
      Quaternion: () => Yq.h,
      RegisterMathVector: () => Yq.l,
      TmpVectors: () => Yq.o,
      Vector2: () => Yq.p,
      Na: () => Yq.q,
      Vector4: () => Yq.r
    });
    var Yq = gq(37139);
    (0, Yq.l)()
  },
  37149: (qq, Eq, gq) => {
    function Yq(qq, Eq) {
      const gq = [];
      for (let Yq = 0; Yq < qq; ++Yq) gq.push(Eq());
      return gq
    }

    function lq(qq, Eq) {
      return Yq(qq, Eq)
    }
    gq.d(Eq, {
      e: () => Yq,
      h: () => lq,
      k: () => mq
    });
    const Oq = ["push", "splice", "pop", "shift", "unshift"];

    function mq(qq, Eq) {
      const gq = Oq.map((gq => function(qq, Eq, gq) {
        const Yq = qq[Eq];
        if ("function" !== typeof Yq) return null;
        const lq = function() {
          const Yq = qq.length,
            Oq = lq.previous.apply(qq, arguments);
          return gq(Eq, Yq), Oq
        };
        return Yq.next = lq, lq.previous = Yq, qq[Eq] = lq, () => {
          const gq = lq.previous;
          if (!gq) return;
          const Yq = lq.next;
          Yq ? (gq.next = Yq, Yq.previous = gq) : (gq.next = void 0, qq[Eq] = gq), lq.next = void 0, lq.previous = void 0
        }
      }(qq, gq, Eq)));
      return () => {
        for (const qq of gq) qq?.()
      }
    }
  },
  37171: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Oq,
      g: () => lq
    });
    const Yq = {};

    function lq(qq, Eq) {
      Yq[qq] = Eq
    }

    function Oq(qq) {
      return Yq[qq]
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);