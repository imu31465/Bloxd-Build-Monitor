export const id = 221;
export const ids = [221];
export const modules = {
  36405: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Tb,
      g: () => Ab,
      j: () => Mb
    });
    const Ab = 1 / 2.2,
      Mb = 2.2;
    Math.sqrt(5);
    let Tb = .001
  },
  36436: (bb, ab, Ub) => {
    function Ab(bb) {
      return parseInt(bb.toString().replace(/\W/g, ""))
    }

    function Mb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(bb - ab) <= Ub
    }

    function Tb(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return bb < ab - Ab || bb > Ub + Ab
    }

    function Eb(bb, ab) {
      return bb === ab ? bb : Math.random() * (ab - bb) + bb
    }

    function Yb(bb, ab, Ub) {
      return bb + (ab - bb) * Ub
    }

    function Bb(bb, ab, Ub) {
      let Ab = kb(ab - bb, 360);
      return Ab > 180 && (Ab -= 360), bb + Ab * Pb(Ub)
    }

    function eb(bb, ab, Ub) {
      let Ab;
      return Ab = bb != ab ? Pb((Ub - bb) / (ab - bb)) : 0, Ab
    }

    function vb(bb, ab, Ub, Ab, Mb) {
      const Tb = Mb * Mb,
        Eb = Mb * Tb;
      return bb * (2 * Eb - 3 * Tb + 1) + Ub * (-2 * Eb + 3 * Tb) + ab * (Eb - 2 * Tb + Mb) + Ab * (Eb - Tb)
    }

    function Lb(bb, ab, Ub, Ab, Mb) {
      const Tb = Mb * Mb;
      return 6 * (Tb - Mb) * bb + (3 * Tb - 4 * Mb + 1) * ab + 6 * (-Tb + Mb) * Ub + (3 * Tb - 2 * Mb) * Ab
    }

    function Pb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(Ub, Math.max(ab, bb))
    }

    function Xb(bb) {
      return bb -= 2 * Math.PI * Math.floor((bb + Math.PI) / (2 * Math.PI))
    }

    function jb(bb) {
      const ab = bb.toString(16);
      return bb <= 15 ? ("0" + ab).toUpperCase() : ab.toUpperCase()
    }

    function Rb(bb) {
      if (Math.log2) return Math.floor(Math.log2(bb));
      if (bb < 0) return NaN;
      if (0 === bb) return -1 / 0;
      let ab = 0;
      if (bb < 1) {
        for (; bb < 1;) ab++, bb *= 2;
        ab = -ab
      } else if (bb > 1)
        for (; bb > 1;) ab++, bb = Math.floor(bb / 2);
      return ab
    }

    function kb(bb, ab) {
      return bb - Math.floor(bb / ab) * ab
    }

    function yb(bb, ab, Ub) {
      return (bb - ab) / (Ub - ab)
    }

    function Zb(bb, ab, Ub) {
      return bb * (Ub - ab) + ab
    }

    function Db(bb, ab) {
      let Ub = kb(ab - bb, 360);
      return Ub > 180 && (Ub -= 360), Ub
    }

    function zb(bb, ab) {
      const Ub = kb(bb, 2 * ab);
      return ab - Math.abs(Ub - ab)
    }

    function xb(bb, ab, Ub) {
      let Ab = Pb(Ub);
      return Ab = -2 * Ab * Ab * Ab + 3 * Ab * Ab, ab * Ab + bb * (1 - Ab)
    }

    function ib(bb, ab, Ub) {
      let Ab;
      return Ab = Math.abs(ab - bb) <= Ub ? ab : bb + Math.sign(ab - bb) * Ub, Ab
    }

    function fb(bb, ab, Ub) {
      const Ab = Db(bb, ab);
      let Mb;
      return Mb = -Ub < Ab && Ab < Ub ? ab : ib(bb, ab = bb + Ab, Ub), Mb
    }

    function mb(bb, ab, Ub) {
      return (bb - ab) / (Ub - ab)
    }

    function pb(bb, ab, Ub) {
      return (Ub - ab) * bb + ab
    }

    function Nb(bb, ab) {
      const Ub = bb % ab;
      return 0 === Ub ? ab : Nb(ab, Ub)
    }
    Ub.r(ab), Ub.d(ab, {
      Clamp: () => Pb,
      DeltaAngle: () => Db,
      Denormalize: () => Zb,
      ExtractAsInt: () => Ab,
      Hermite: () => vb,
      Hermite1stDerivative: () => Lb,
      HighestCommonFactor: () => Nb,
      ILog2: () => Rb,
      InverseLerp: () => eb,
      Lerp: () => Yb,
      LerpAngle: () => Bb,
      MoveTowards: () => ib,
      MoveTowardsAngle: () => fb,
      Normalize: () => yb,
      NormalizeRadians: () => Xb,
      OutsideRange: () => Tb,
      PercentToRange: () => pb,
      PingPong: () => zb,
      RandomRange: () => Eb,
      RangeToPercent: () => mb,
      Repeat: () => kb,
      SmoothStep: () => xb,
      ToHex: () => jb,
      WithinEpsilon: () => Mb
    })
  },
  36392: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      Matrix: () => Ab.b,
      Quaternion: () => Ab.e,
      RegisterMathVector: () => Ab.i,
      TmpVectors: () => Ab.j,
      Vector2: () => Ab.l,
      Pj: () => Ab.m,
      Vector4: () => Ab.o
    });
    var Ab = Ub(36401);
    (0, Ab.i)()
  },
  36410: (bb, ab, Ub) => {
    function Ab(bb, ab) {
      const Ub = [];
      for (let Ab = 0; Ab < bb; ++Ab) Ub.push(ab());
      return Ub
    }

    function Mb(bb, ab) {
      return Ab(bb, ab)
    }
    Ub.d(ab, {
      b: () => Ab,
      e: () => Mb,
      i: () => Eb
    });
    const Tb = ["push", "splice", "pop", "shift", "unshift"];

    function Eb(bb, ab) {
      const Ub = Tb.map((Ub => function(bb, ab, Ub) {
        const Ab = bb[ab];
        if ("function" !== typeof Ab) return null;
        const Mb = function() {
          const Ab = bb.length,
            Tb = Mb.previous.apply(bb, arguments);
          return Ub(ab, Ab), Tb
        };
        return Ab.next = Mb, Mb.previous = Ab, bb[ab] = Mb, () => {
          const Ub = Mb.previous;
          if (!Ub) return;
          const Ab = Mb.next;
          Ab ? (Ub.next = Ab, Ab.previous = Ub) : (Ub.next = void 0, bb[ab] = Ub), Mb.next = void 0, Mb.previous = void 0
        }
      }(bb, Ub, ab)));
      return () => {
        for (const bb of Ub) bb?.()
      }
    }
  },
  36447: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb,
      f: () => Mb
    });
    const Ab = {};

    function Mb(bb, ab) {
      Ab[bb] = ab
    }

    function Tb(bb) {
      return Ab[bb]
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);