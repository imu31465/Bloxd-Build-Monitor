export const id = 232;
export const ids = [232];
export const modules = {
  37342: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Dt,
      h: () => Ot,
      i: () => qt
    });
    const Ot = 1 / 2.2,
      qt = 2.2;
    Math.sqrt(5);
    let Dt = .001
  },
  37372: (tt, et, Vt) => {
    function Ot(tt) {
      return parseInt(tt.toString().replace(/\W/g, ""))
    }

    function qt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(tt - et) <= Vt
    }

    function Dt(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return tt < et - Ot || tt > Vt + Ot
    }

    function mt(tt, et) {
      return tt === et ? tt : Math.random() * (et - tt) + tt
    }

    function dt(tt, et, Vt) {
      return tt + (et - tt) * Vt
    }

    function jt(tt, et, Vt) {
      let Ot = yt(et - tt, 360);
      return Ot > 180 && (Ot -= 360), tt + Ot * lt(Vt)
    }

    function Ht(tt, et, Vt) {
      let Ot;
      return Ot = tt != et ? lt((Vt - tt) / (et - tt)) : 0, Ot
    }

    function Xt(tt, et, Vt, Ot, qt) {
      const Dt = qt * qt,
        mt = qt * Dt;
      return tt * (2 * mt - 3 * Dt + 1) + Vt * (-2 * mt + 3 * Dt) + et * (mt - 2 * Dt + qt) + Ot * (mt - Dt)
    }

    function Qt(tt, et, Vt, Ot, qt) {
      const Dt = qt * qt;
      return 6 * (Dt - qt) * tt + (3 * Dt - 4 * qt + 1) * et + 6 * (-Dt + qt) * Vt + (3 * Dt - 2 * qt) * Ot
    }

    function lt(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(Vt, Math.max(et, tt))
    }

    function Et(tt) {
      return tt -= 2 * Math.PI * Math.floor((tt + Math.PI) / (2 * Math.PI))
    }

    function ft(tt) {
      const et = tt.toString(16);
      return tt <= 15 ? ("0" + et).toUpperCase() : et.toUpperCase()
    }

    function wt(tt) {
      if (Math.log2) return Math.floor(Math.log2(tt));
      if (tt < 0) return NaN;
      if (0 === tt) return -1 / 0;
      let et = 0;
      if (tt < 1) {
        for (; tt < 1;) et++, tt *= 2;
        et = -et
      } else if (tt > 1)
        for (; tt > 1;) et++, tt = Math.floor(tt / 2);
      return et
    }

    function yt(tt, et) {
      return tt - Math.floor(tt / et) * et
    }

    function Nt(tt, et, Vt) {
      return (tt - et) / (Vt - et)
    }

    function Mt(tt, et, Vt) {
      return tt * (Vt - et) + et
    }

    function bt(tt, et) {
      let Vt = yt(et - tt, 360);
      return Vt > 180 && (Vt -= 360), Vt
    }

    function Jt(tt, et) {
      const Vt = yt(tt, 2 * et);
      return et - Math.abs(Vt - et)
    }

    function Ct(tt, et, Vt) {
      let Ot = lt(Vt);
      return Ot = -2 * Ot * Ot * Ot + 3 * Ot * Ot, et * Ot + tt * (1 - Ot)
    }

    function ut(tt, et, Vt) {
      let Ot;
      return Ot = Math.abs(et - tt) <= Vt ? et : tt + Math.sign(et - tt) * Vt, Ot
    }

    function Kt(tt, et, Vt) {
      const Ot = bt(tt, et);
      let qt;
      return qt = -Vt < Ot && Ot < Vt ? et : ut(tt, et = tt + Ot, Vt), qt
    }

    function ht(tt, et, Vt) {
      return (tt - et) / (Vt - et)
    }

    function vt(tt, et, Vt) {
      return (Vt - et) * tt + et
    }

    function Wt(tt, et) {
      const Vt = tt % et;
      return 0 === Vt ? et : Wt(et, Vt)
    }
    Vt.r(et), Vt.d(et, {
      Clamp: () => lt,
      DeltaAngle: () => bt,
      Denormalize: () => Mt,
      ExtractAsInt: () => Ot,
      Hermite: () => Xt,
      Hermite1stDerivative: () => Qt,
      HighestCommonFactor: () => Wt,
      ILog2: () => wt,
      InverseLerp: () => Ht,
      Lerp: () => dt,
      LerpAngle: () => jt,
      MoveTowards: () => ut,
      MoveTowardsAngle: () => Kt,
      Normalize: () => Nt,
      NormalizeRadians: () => Et,
      OutsideRange: () => Dt,
      PercentToRange: () => vt,
      PingPong: () => Jt,
      RandomRange: () => mt,
      RangeToPercent: () => ht,
      Repeat: () => yt,
      SmoothStep: () => Ct,
      ToHex: () => ft,
      WithinEpsilon: () => qt
    })
  },
  37331: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      Matrix: () => Ot.c,
      Quaternion: () => Ot.e,
      RegisterMathVector: () => Ot.h,
      TmpVectors: () => Ot.k,
      Vector2: () => Ot.m,
      uf: () => Ot.n,
      Vector4: () => Ot.r
    });
    var Ot = Vt(37336);
    (0, Ot.h)()
  },
  37350: (tt, et, Vt) => {
    function Ot(tt, et) {
      const Vt = [];
      for (let Ot = 0; Ot < tt; ++Ot) Vt.push(et());
      return Vt
    }

    function qt(tt, et) {
      return Ot(tt, et)
    }
    Vt.d(et, {
      c: () => Ot,
      d: () => qt,
      e: () => mt
    });
    const Dt = ["push", "splice", "pop", "shift", "unshift"];

    function mt(tt, et) {
      const Vt = Dt.map((Vt => function(tt, et, Vt) {
        const Ot = tt[et];
        if ("function" !== typeof Ot) return null;
        const qt = function() {
          const Ot = tt.length,
            Dt = qt.previous.apply(tt, arguments);
          return Vt(et, Ot), Dt
        };
        return Ot.next = qt, qt.previous = Ot, tt[et] = qt, () => {
          const Vt = qt.previous;
          if (!Vt) return;
          const Ot = qt.next;
          Ot ? (Vt.next = Ot, Ot.previous = Vt) : (Vt.next = void 0, tt[et] = Vt), qt.next = void 0, qt.previous = void 0
        }
      }(tt, Vt, et)));
      return () => {
        for (const tt of Vt) tt?.()
      }
    }
  },
  37390: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Dt,
      i: () => qt
    });
    const Ot = {};

    function qt(tt, et) {
      Ot[tt] = et
    }

    function Dt(tt) {
      return Ot[tt]
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);