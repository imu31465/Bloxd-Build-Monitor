export const id = 260;
export const ids = [260];
export const modules = {
  38294: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb,
      g: () => eb,
      h: () => Hb
    });
    const eb = 1 / 2.2,
      Hb = 2.2;
    Math.sqrt(5);
    let pb = .001
  },
  38322: (bb, wb, Mb) => {
    function eb(bb) {
      return parseInt(bb.toString().replace(/\W/g, ""))
    }

    function Hb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(bb - wb) <= Mb
    }

    function pb(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return bb < wb - eb || bb > Mb + eb
    }

    function Vb(bb, wb) {
      return bb === wb ? bb : Math.random() * (wb - bb) + bb
    }

    function gb(bb, wb, Mb) {
      return bb + (wb - bb) * Mb
    }

    function lb(bb, wb, Mb) {
      let eb = Fb(wb - bb, 360);
      return eb > 180 && (eb -= 360), bb + eb * Ub(Mb)
    }

    function Lb(bb, wb, Mb) {
      let eb;
      return eb = bb != wb ? Ub((Mb - bb) / (wb - bb)) : 0, eb
    }

    function Ib(bb, wb, Mb, eb, Hb) {
      const pb = Hb * Hb,
        Vb = Hb * pb;
      return bb * (2 * Vb - 3 * pb + 1) + Mb * (-2 * Vb + 3 * pb) + wb * (Vb - 2 * pb + Hb) + eb * (Vb - pb)
    }

    function Ob(bb, wb, Mb, eb, Hb) {
      const pb = Hb * Hb;
      return 6 * (pb - Hb) * bb + (3 * pb - 4 * Hb + 1) * wb + 6 * (-pb + Hb) * Mb + (3 * pb - 2 * Hb) * eb
    }

    function Ub(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(Mb, Math.max(wb, bb))
    }

    function tb(bb) {
      return bb -= 2 * Math.PI * Math.floor((bb + Math.PI) / (2 * Math.PI))
    }

    function Cb(bb) {
      const wb = bb.toString(16);
      return bb <= 15 ? ("0" + wb).toUpperCase() : wb.toUpperCase()
    }

    function Eb(bb) {
      if (Math.log2) return Math.floor(Math.log2(bb));
      if (bb < 0) return NaN;
      if (0 === bb) return -1 / 0;
      let wb = 0;
      if (bb < 1) {
        for (; bb < 1;) wb++, bb *= 2;
        wb = -wb
      } else if (bb > 1)
        for (; bb > 1;) wb++, bb = Math.floor(bb / 2);
      return wb
    }

    function Fb(bb, wb) {
      return bb - Math.floor(bb / wb) * wb
    }

    function Bb(bb, wb, Mb) {
      return (bb - wb) / (Mb - wb)
    }

    function sb(bb, wb, Mb) {
      return bb * (Mb - wb) + wb
    }

    function mb(bb, wb) {
      let Mb = Fb(wb - bb, 360);
      return Mb > 180 && (Mb -= 360), Mb
    }

    function hb(bb, wb) {
      const Mb = Fb(bb, 2 * wb);
      return wb - Math.abs(Mb - wb)
    }

    function zb(bb, wb, Mb) {
      let eb = Ub(Mb);
      return eb = -2 * eb * eb * eb + 3 * eb * eb, wb * eb + bb * (1 - eb)
    }

    function Xb(bb, wb, Mb) {
      let eb;
      return eb = Math.abs(wb - bb) <= Mb ? wb : bb + Math.sign(wb - bb) * Mb, eb
    }

    function xb(bb, wb, Mb) {
      const eb = mb(bb, wb);
      let Hb;
      return Hb = -Mb < eb && eb < Mb ? wb : Xb(bb, wb = bb + eb, Mb), Hb
    }

    function jb(bb, wb, Mb) {
      return (bb - wb) / (Mb - wb)
    }

    function Kb(bb, wb, Mb) {
      return (Mb - wb) * bb + wb
    }

    function rb(bb, wb) {
      const Mb = bb % wb;
      return 0 === Mb ? wb : rb(wb, Mb)
    }
    Mb.r(wb), Mb.d(wb, {
      Clamp: () => Ub,
      DeltaAngle: () => mb,
      Denormalize: () => sb,
      ExtractAsInt: () => eb,
      Hermite: () => Ib,
      Hermite1stDerivative: () => Ob,
      HighestCommonFactor: () => rb,
      ILog2: () => Eb,
      InverseLerp: () => Lb,
      Lerp: () => gb,
      LerpAngle: () => lb,
      MoveTowards: () => Xb,
      MoveTowardsAngle: () => xb,
      Normalize: () => Bb,
      NormalizeRadians: () => tb,
      OutsideRange: () => pb,
      PercentToRange: () => Kb,
      PingPong: () => hb,
      RandomRange: () => Vb,
      RangeToPercent: () => jb,
      Repeat: () => Fb,
      SmoothStep: () => zb,
      ToHex: () => Cb,
      WithinEpsilon: () => Hb
    })
  },
  38281: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      Matrix: () => eb.b,
      Quaternion: () => eb.e,
      RegisterMathVector: () => eb.g,
      TmpVectors: () => eb.j,
      Vector2: () => eb.m,
      YC: () => eb.o,
      Vector4: () => eb.q
    });
    var eb = Mb(38285);
    (0, eb.g)()
  },
  38299: (bb, wb, Mb) => {
    function eb(bb, wb) {
      const Mb = [];
      for (let eb = 0; eb < bb; ++eb) Mb.push(wb());
      return Mb
    }

    function Hb(bb, wb) {
      return eb(bb, wb)
    }
    Mb.d(wb, {
      d: () => eb,
      f: () => Hb,
      h: () => Vb
    });
    const pb = ["push", "splice", "pop", "shift", "unshift"];

    function Vb(bb, wb) {
      const Mb = pb.map((Mb => function(bb, wb, Mb) {
        const eb = bb[wb];
        if ("function" !== typeof eb) return null;
        const Hb = function() {
          const eb = bb.length,
            pb = Hb.previous.apply(bb, arguments);
          return Mb(wb, eb), pb
        };
        return eb.next = Hb, Hb.previous = eb, bb[wb] = Hb, () => {
          const Mb = Hb.previous;
          if (!Mb) return;
          const eb = Hb.next;
          eb ? (Mb.next = eb, eb.previous = Mb) : (Mb.next = void 0, bb[wb] = Mb), Hb.next = void 0, Hb.previous = void 0
        }
      }(bb, Mb, wb)));
      return () => {
        for (const bb of Mb) bb?.()
      }
    }
  },
  38333: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb,
      e: () => Hb
    });
    const eb = {};

    function Hb(bb, wb) {
      eb[bb] = wb
    }

    function pb(bb) {
      return eb[bb]
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);