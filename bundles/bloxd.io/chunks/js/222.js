export const id = 222;
export const ids = [222];
export const modules = {
  36734: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb,
      e: () => Bb,
      h: () => Ob
    });
    const Bb = 1 / 2.2,
      Ob = 2.2;
    Math.sqrt(5);
    let Gb = .001
  },
  36757: (bb, ub, hb) => {
    function Bb(bb) {
      return parseInt(bb.toString().replace(/\W/g, ""))
    }

    function Ob(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(bb - ub) <= hb
    }

    function Gb(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return bb < ub - Bb || bb > hb + Bb
    }

    function Ub(bb, ub) {
      return bb === ub ? bb : Math.random() * (ub - bb) + bb
    }

    function Lb(bb, ub, hb) {
      return bb + (ub - bb) * hb
    }

    function Yb(bb, ub, hb) {
      let Bb = ob(ub - bb, 360);
      return Bb > 180 && (Bb -= 360), bb + Bb * wb(hb)
    }

    function Sb(bb, ub, hb) {
      let Bb;
      return Bb = bb != ub ? wb((hb - bb) / (ub - bb)) : 0, Bb
    }

    function ab(bb, ub, hb, Bb, Ob) {
      const Gb = Ob * Ob,
        Ub = Ob * Gb;
      return bb * (2 * Ub - 3 * Gb + 1) + hb * (-2 * Ub + 3 * Gb) + ub * (Ub - 2 * Gb + Ob) + Bb * (Ub - Gb)
    }

    function Hb(bb, ub, hb, Bb, Ob) {
      const Gb = Ob * Ob;
      return 6 * (Gb - Ob) * bb + (3 * Gb - 4 * Ob + 1) * ub + 6 * (-Gb + Ob) * hb + (3 * Gb - 2 * Ob) * Bb
    }

    function wb(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(hb, Math.max(ub, bb))
    }

    function Zb(bb) {
      return bb -= 2 * Math.PI * Math.floor((bb + Math.PI) / (2 * Math.PI))
    }

    function Xb(bb) {
      const ub = bb.toString(16);
      return bb <= 15 ? ("0" + ub).toUpperCase() : ub.toUpperCase()
    }

    function pb(bb) {
      if (Math.log2) return Math.floor(Math.log2(bb));
      if (bb < 0) return NaN;
      if (0 === bb) return -1 / 0;
      let ub = 0;
      if (bb < 1) {
        for (; bb < 1;) ub++, bb *= 2;
        ub = -ub
      } else if (bb > 1)
        for (; bb > 1;) ub++, bb = Math.floor(bb / 2);
      return ub
    }

    function ob(bb, ub) {
      return bb - Math.floor(bb / ub) * ub
    }

    function Ab(bb, ub, hb) {
      return (bb - ub) / (hb - ub)
    }

    function lb(bb, ub, hb) {
      return bb * (hb - ub) + ub
    }

    function Kb(bb, ub) {
      let hb = ob(ub - bb, 360);
      return hb > 180 && (hb -= 360), hb
    }

    function Wb(bb, ub) {
      const hb = ob(bb, 2 * ub);
      return ub - Math.abs(hb - ub)
    }

    function Cb(bb, ub, hb) {
      let Bb = wb(hb);
      return Bb = -2 * Bb * Bb * Bb + 3 * Bb * Bb, ub * Bb + bb * (1 - Bb)
    }

    function db(bb, ub, hb) {
      let Bb;
      return Bb = Math.abs(ub - bb) <= hb ? ub : bb + Math.sign(ub - bb) * hb, Bb
    }

    function rb(bb, ub, hb) {
      const Bb = Kb(bb, ub);
      let Ob;
      return Ob = -hb < Bb && Bb < hb ? ub : db(bb, ub = bb + Bb, hb), Ob
    }

    function jb(bb, ub, hb) {
      return (bb - ub) / (hb - ub)
    }

    function nb(bb, ub, hb) {
      return (hb - ub) * bb + ub
    }

    function Db(bb, ub) {
      const hb = bb % ub;
      return 0 === hb ? ub : Db(ub, hb)
    }
    hb.r(ub), hb.d(ub, {
      Clamp: () => wb,
      DeltaAngle: () => Kb,
      Denormalize: () => lb,
      ExtractAsInt: () => Bb,
      Hermite: () => ab,
      Hermite1stDerivative: () => Hb,
      HighestCommonFactor: () => Db,
      ILog2: () => pb,
      InverseLerp: () => Sb,
      Lerp: () => Lb,
      LerpAngle: () => Yb,
      MoveTowards: () => db,
      MoveTowardsAngle: () => rb,
      Normalize: () => Ab,
      NormalizeRadians: () => Zb,
      OutsideRange: () => Gb,
      PercentToRange: () => nb,
      PingPong: () => Wb,
      RandomRange: () => Ub,
      RangeToPercent: () => jb,
      Repeat: () => ob,
      SmoothStep: () => Cb,
      ToHex: () => Xb,
      WithinEpsilon: () => Ob
    })
  },
  36720: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      Matrix: () => Bb.d,
      Quaternion: () => Bb.f,
      RegisterMathVector: () => Bb.h,
      TmpVectors: () => Bb.i,
      Vector2: () => Bb.m,
      YX: () => Bb.q,
      Vector4: () => Bb.r
    });
    var Bb = hb(36727);
    (0, Bb.h)()
  },
  36736: (bb, ub, hb) => {
    function Bb(bb, ub) {
      const hb = [];
      for (let Bb = 0; Bb < bb; ++Bb) hb.push(ub());
      return hb
    }

    function Ob(bb, ub) {
      return Bb(bb, ub)
    }
    hb.d(ub, {
      e: () => Bb,
      i: () => Ob,
      k: () => Ub
    });
    const Gb = ["push", "splice", "pop", "shift", "unshift"];

    function Ub(bb, ub) {
      const hb = Gb.map((hb => function(bb, ub, hb) {
        const Bb = bb[ub];
        if ("function" !== typeof Bb) return null;
        const Ob = function() {
          const Bb = bb.length,
            Gb = Ob.previous.apply(bb, arguments);
          return hb(ub, Bb), Gb
        };
        return Bb.next = Ob, Ob.previous = Bb, bb[ub] = Ob, () => {
          const hb = Ob.previous;
          if (!hb) return;
          const Bb = Ob.next;
          Bb ? (hb.next = Bb, Bb.previous = hb) : (hb.next = void 0, bb[ub] = hb), Ob.next = void 0, Ob.previous = void 0
        }
      }(bb, hb, ub)));
      return () => {
        for (const bb of hb) bb?.()
      }
    }
  },
  36762: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb,
      f: () => Ob
    });
    const Bb = {};

    function Ob(bb, ub) {
      Bb[bb] = ub
    }

    function Gb(bb) {
      return Bb[bb]
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);