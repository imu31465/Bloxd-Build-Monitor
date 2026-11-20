export const id = 221;
export const ids = [221];
export const modules = {
  36661: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => ab,
      g: () => kb,
      h: () => Wb
    });
    const kb = 1 / 2.2,
      Wb = 2.2;
    Math.sqrt(5);
    let ab = .001
  },
  36688: (bb, cb, sb) => {
    function kb(bb) {
      return parseInt(bb.toString().replace(/\W/g, ""))
    }

    function Wb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(bb - cb) <= sb
    }

    function ab(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return bb < cb - kb || bb > sb + kb
    }

    function Tb(bb, cb) {
      return bb === cb ? bb : Math.random() * (cb - bb) + bb
    }

    function Ub(bb, cb, sb) {
      return bb + (cb - bb) * sb
    }

    function Ib(bb, cb, sb) {
      let kb = Qb(cb - bb, 360);
      return kb > 180 && (kb -= 360), bb + kb * Xb(sb)
    }

    function Hb(bb, cb, sb) {
      let kb;
      return kb = bb != cb ? Xb((sb - bb) / (cb - bb)) : 0, kb
    }

    function fb(bb, cb, sb, kb, Wb) {
      const ab = Wb * Wb,
        Tb = Wb * ab;
      return bb * (2 * Tb - 3 * ab + 1) + sb * (-2 * Tb + 3 * ab) + cb * (Tb - 2 * ab + Wb) + kb * (Tb - ab)
    }

    function Mb(bb, cb, sb, kb, Wb) {
      const ab = Wb * Wb;
      return 6 * (ab - Wb) * bb + (3 * ab - 4 * Wb + 1) * cb + 6 * (-ab + Wb) * sb + (3 * ab - 2 * Wb) * kb
    }

    function Xb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(sb, Math.max(cb, bb))
    }

    function nb(bb) {
      return bb -= 2 * Math.PI * Math.floor((bb + Math.PI) / (2 * Math.PI))
    }

    function mb(bb) {
      const cb = bb.toString(16);
      return bb <= 15 ? ("0" + cb).toUpperCase() : cb.toUpperCase()
    }

    function lb(bb) {
      if (Math.log2) return Math.floor(Math.log2(bb));
      if (bb < 0) return NaN;
      if (0 === bb) return -1 / 0;
      let cb = 0;
      if (bb < 1) {
        for (; bb < 1;) cb++, bb *= 2;
        cb = -cb
      } else if (bb > 1)
        for (; bb > 1;) cb++, bb = Math.floor(bb / 2);
      return cb
    }

    function Qb(bb, cb) {
      return bb - Math.floor(bb / cb) * cb
    }

    function eb(bb, cb, sb) {
      return (bb - cb) / (sb - cb)
    }

    function Cb(bb, cb, sb) {
      return bb * (sb - cb) + cb
    }

    function Nb(bb, cb) {
      let sb = Qb(cb - bb, 360);
      return sb > 180 && (sb -= 360), sb
    }

    function Vb(bb, cb) {
      const sb = Qb(bb, 2 * cb);
      return cb - Math.abs(sb - cb)
    }

    function Lb(bb, cb, sb) {
      let kb = Xb(sb);
      return kb = -2 * kb * kb * kb + 3 * kb * kb, cb * kb + bb * (1 - kb)
    }

    function ub(bb, cb, sb) {
      let kb;
      return kb = Math.abs(cb - bb) <= sb ? cb : bb + Math.sign(cb - bb) * sb, kb
    }

    function Yb(bb, cb, sb) {
      const kb = Nb(bb, cb);
      let Wb;
      return Wb = -sb < kb && kb < sb ? cb : ub(bb, cb = bb + kb, sb), Wb
    }

    function hb(bb, cb, sb) {
      return (bb - cb) / (sb - cb)
    }

    function Jb(bb, cb, sb) {
      return (sb - cb) * bb + cb
    }

    function gb(bb, cb) {
      const sb = bb % cb;
      return 0 === sb ? cb : gb(cb, sb)
    }
    sb.r(cb), sb.d(cb, {
      Clamp: () => Xb,
      DeltaAngle: () => Nb,
      Denormalize: () => Cb,
      ExtractAsInt: () => kb,
      Hermite: () => fb,
      Hermite1stDerivative: () => Mb,
      HighestCommonFactor: () => gb,
      ILog2: () => lb,
      InverseLerp: () => Hb,
      Lerp: () => Ub,
      LerpAngle: () => Ib,
      MoveTowards: () => ub,
      MoveTowardsAngle: () => Yb,
      Normalize: () => eb,
      NormalizeRadians: () => nb,
      OutsideRange: () => ab,
      PercentToRange: () => Jb,
      PingPong: () => Vb,
      RandomRange: () => Tb,
      RangeToPercent: () => hb,
      Repeat: () => Qb,
      SmoothStep: () => Lb,
      ToHex: () => mb,
      WithinEpsilon: () => Wb
    })
  },
  36654: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      Matrix: () => kb.e,
      Quaternion: () => kb.f,
      RegisterMathVector: () => kb.j,
      TmpVectors: () => kb.m,
      Vector2: () => kb.n,
      Fm: () => kb.p,
      Vector4: () => kb.t
    });
    var kb = sb(36656);
    (0, kb.j)()
  },
  36666: (bb, cb, sb) => {
    function kb(bb, cb) {
      const sb = [];
      for (let kb = 0; kb < bb; ++kb) sb.push(cb());
      return sb
    }

    function Wb(bb, cb) {
      return kb(bb, cb)
    }
    sb.d(cb, {
      b: () => kb,
      f: () => Wb,
      h: () => Tb
    });
    const ab = ["push", "splice", "pop", "shift", "unshift"];

    function Tb(bb, cb) {
      const sb = ab.map((sb => function(bb, cb, sb) {
        const kb = bb[cb];
        if ("function" !== typeof kb) return null;
        const Wb = function() {
          const kb = bb.length,
            ab = Wb.previous.apply(bb, arguments);
          return sb(cb, kb), ab
        };
        return kb.next = Wb, Wb.previous = kb, bb[cb] = Wb, () => {
          const sb = Wb.previous;
          if (!sb) return;
          const kb = Wb.next;
          kb ? (sb.next = kb, kb.previous = sb) : (sb.next = void 0, bb[cb] = sb), Wb.next = void 0, Wb.previous = void 0
        }
      }(bb, sb, cb)));
      return () => {
        for (const bb of sb) bb?.()
      }
    }
  },
  36698: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ab,
      h: () => Wb
    });
    const kb = {};

    function Wb(bb, cb) {
      kb[bb] = cb
    }

    function ab(bb) {
      return kb[bb]
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);