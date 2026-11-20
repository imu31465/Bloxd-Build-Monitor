export const id = 222;
export const ids = [222];
export const modules = {
  36599: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => ev,
      g: () => hv,
      h: () => Sv
    });
    const hv = 1 / 2.2,
      Sv = 2.2;
    Math.sqrt(5);
    let ev = .001
  },
  36620: (vv, zv, Pv) => {
    function hv(vv) {
      return parseInt(vv.toString().replace(/\W/g, ""))
    }

    function Sv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(vv - zv) <= Pv
    }

    function ev(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return vv < zv - hv || vv > Pv + hv
    }

    function gv(vv, zv) {
      return vv === zv ? vv : Math.random() * (zv - vv) + vv
    }

    function pv(vv, zv, Pv) {
      return vv + (zv - vv) * Pv
    }

    function dv(vv, zv, Pv) {
      let hv = Cv(zv - vv, 360);
      return hv > 180 && (hv -= 360), vv + hv * Wv(Pv)
    }

    function Nv(vv, zv, Pv) {
      let hv;
      return hv = vv != zv ? Wv((Pv - vv) / (zv - vv)) : 0, hv
    }

    function lv(vv, zv, Pv, hv, Sv) {
      const ev = Sv * Sv,
        gv = Sv * ev;
      return vv * (2 * gv - 3 * ev + 1) + Pv * (-2 * gv + 3 * ev) + zv * (gv - 2 * ev + Sv) + hv * (gv - ev)
    }

    function Tv(vv, zv, Pv, hv, Sv) {
      const ev = Sv * Sv;
      return 6 * (ev - Sv) * vv + (3 * ev - 4 * Sv + 1) * zv + 6 * (-ev + Sv) * Pv + (3 * ev - 2 * Sv) * hv
    }

    function Wv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(Pv, Math.max(zv, vv))
    }

    function wv(vv) {
      return vv -= 2 * Math.PI * Math.floor((vv + Math.PI) / (2 * Math.PI))
    }

    function av(vv) {
      const zv = vv.toString(16);
      return vv <= 15 ? ("0" + zv).toUpperCase() : zv.toUpperCase()
    }

    function sv(vv) {
      if (Math.log2) return Math.floor(Math.log2(vv));
      if (vv < 0) return NaN;
      if (0 === vv) return -1 / 0;
      let zv = 0;
      if (vv < 1) {
        for (; vv < 1;) zv++, vv *= 2;
        zv = -zv
      } else if (vv > 1)
        for (; vv > 1;) zv++, vv = Math.floor(vv / 2);
      return zv
    }

    function Cv(vv, zv) {
      return vv - Math.floor(vv / zv) * zv
    }

    function iv(vv, zv, Pv) {
      return (vv - zv) / (Pv - zv)
    }

    function cv(vv, zv, Pv) {
      return vv * (Pv - zv) + zv
    }

    function Gv(vv, zv) {
      let Pv = Cv(zv - vv, 360);
      return Pv > 180 && (Pv -= 360), Pv
    }

    function mv(vv, zv) {
      const Pv = Cv(vv, 2 * zv);
      return zv - Math.abs(Pv - zv)
    }

    function jv(vv, zv, Pv) {
      let hv = Wv(Pv);
      return hv = -2 * hv * hv * hv + 3 * hv * hv, zv * hv + vv * (1 - hv)
    }

    function fv(vv, zv, Pv) {
      let hv;
      return hv = Math.abs(zv - vv) <= Pv ? zv : vv + Math.sign(zv - vv) * Pv, hv
    }

    function Fv(vv, zv, Pv) {
      const hv = Gv(vv, zv);
      let Sv;
      return Sv = -Pv < hv && hv < Pv ? zv : fv(vv, zv = vv + hv, Pv), Sv
    }

    function Yv(vv, zv, Pv) {
      return (vv - zv) / (Pv - zv)
    }

    function nv(vv, zv, Pv) {
      return (Pv - zv) * vv + zv
    }

    function Ov(vv, zv) {
      const Pv = vv % zv;
      return 0 === Pv ? zv : Ov(zv, Pv)
    }
    Pv.r(zv), Pv.d(zv, {
      Clamp: () => Wv,
      DeltaAngle: () => Gv,
      Denormalize: () => cv,
      ExtractAsInt: () => hv,
      Hermite: () => lv,
      Hermite1stDerivative: () => Tv,
      HighestCommonFactor: () => Ov,
      ILog2: () => sv,
      InverseLerp: () => Nv,
      Lerp: () => pv,
      LerpAngle: () => dv,
      MoveTowards: () => fv,
      MoveTowardsAngle: () => Fv,
      Normalize: () => iv,
      NormalizeRadians: () => wv,
      OutsideRange: () => ev,
      PercentToRange: () => nv,
      PingPong: () => mv,
      RandomRange: () => gv,
      RangeToPercent: () => Yv,
      Repeat: () => Cv,
      SmoothStep: () => jv,
      ToHex: () => av,
      WithinEpsilon: () => Sv
    })
  },
  36591: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      Matrix: () => hv.c,
      Quaternion: () => hv.d,
      RegisterMathVector: () => hv.e,
      TmpVectors: () => hv.i,
      Vector2: () => hv.j,
      fa: () => hv.l,
      Vector4: () => hv.m
    });
    var hv = Pv(36594);
    (0, hv.e)()
  },
  36602: (vv, zv, Pv) => {
    function hv(vv, zv) {
      const Pv = [];
      for (let hv = 0; hv < vv; ++hv) Pv.push(zv());
      return Pv
    }

    function Sv(vv, zv) {
      return hv(vv, zv)
    }
    Pv.d(zv, {
      e: () => hv,
      h: () => Sv,
      i: () => gv
    });
    const ev = ["push", "splice", "pop", "shift", "unshift"];

    function gv(vv, zv) {
      const Pv = ev.map((Pv => function(vv, zv, Pv) {
        const hv = vv[zv];
        if ("function" !== typeof hv) return null;
        const Sv = function() {
          const hv = vv.length,
            ev = Sv.previous.apply(vv, arguments);
          return Pv(zv, hv), ev
        };
        return hv.next = Sv, Sv.previous = hv, vv[zv] = Sv, () => {
          const Pv = Sv.previous;
          if (!Pv) return;
          const hv = Sv.next;
          hv ? (Pv.next = hv, hv.previous = Pv) : (Pv.next = void 0, vv[zv] = Pv), Sv.next = void 0, Sv.previous = void 0
        }
      }(vv, Pv, zv)));
      return () => {
        for (const vv of Pv) vv?.()
      }
    }
  },
  36631: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev,
      c: () => Sv
    });
    const hv = {};

    function Sv(vv, zv) {
      hv[vv] = zv
    }

    function ev(vv) {
      return hv[vv]
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);