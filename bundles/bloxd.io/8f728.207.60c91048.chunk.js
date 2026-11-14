export const id = 207;
export const ids = [207];
export const modules = {
  35759: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => rB,
      g: () => Vc,
      k: () => Ic
    });
    const Vc = 1 / 2.2,
      Ic = 2.2;
    Math.sqrt(5);
    let rB = .001
  },
  35785: (cB, Bc, nc) => {
    function Vc(cB) {
      return parseInt(cB.toString().replace(/\W/g, ""))
    }

    function Ic(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(cB - Bc) <= nc
    }

    function rB(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return cB < Bc - Vc || cB > nc + Vc
    }

    function uc(cB, Bc) {
      return cB === Bc ? cB : Math.random() * (Bc - cB) + cB
    }

    function sc(cB, Bc, nc) {
      return cB + (Bc - cB) * nc
    }

    function Mc(cB, Bc, nc) {
      let Vc = tB(Bc - cB, 360);
      return Vc > 180 && (Vc -= 360), cB + Vc * Tc(nc)
    }

    function Pc(cB, Bc, nc) {
      let Vc;
      return Vc = cB != Bc ? Tc((nc - cB) / (Bc - cB)) : 0, Vc
    }

    function qB(cB, Bc, nc, Vc, Ic) {
      const rB = Ic * Ic,
        uc = Ic * rB;
      return cB * (2 * uc - 3 * rB + 1) + nc * (-2 * uc + 3 * rB) + Bc * (uc - 2 * rB + Ic) + Vc * (uc - rB)
    }

    function Oc(cB, Bc, nc, Vc, Ic) {
      const rB = Ic * Ic;
      return 6 * (rB - Ic) * cB + (3 * rB - 4 * Ic + 1) * Bc + 6 * (-rB + Ic) * nc + (3 * rB - 2 * Ic) * Vc
    }

    function Tc(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(nc, Math.max(Bc, cB))
    }

    function fc(cB) {
      return cB -= 2 * Math.PI * Math.floor((cB + Math.PI) / (2 * Math.PI))
    }

    function mB(cB) {
      const Bc = cB.toString(16);
      return cB <= 15 ? ("0" + Bc).toUpperCase() : Bc.toUpperCase()
    }

    function ec(cB) {
      if (Math.log2) return Math.floor(Math.log2(cB));
      if (cB < 0) return NaN;
      if (0 === cB) return -1 / 0;
      let Bc = 0;
      if (cB < 1) {
        for (; cB < 1;) Bc++, cB *= 2;
        Bc = -Bc
      } else if (cB > 1)
        for (; cB > 1;) Bc++, cB = Math.floor(cB / 2);
      return Bc
    }

    function tB(cB, Bc) {
      return cB - Math.floor(cB / Bc) * Bc
    }

    function Sc(cB, Bc, nc) {
      return (cB - Bc) / (nc - Bc)
    }

    function yB(cB, Bc, nc) {
      return cB * (nc - Bc) + Bc
    }

    function zB(cB, Bc) {
      let nc = tB(Bc - cB, 360);
      return nc > 180 && (nc -= 360), nc
    }

    function pc(cB, Bc) {
      const nc = tB(cB, 2 * Bc);
      return Bc - Math.abs(nc - Bc)
    }

    function hc(cB, Bc, nc) {
      let Vc = Tc(nc);
      return Vc = -2 * Vc * Vc * Vc + 3 * Vc * Vc, Bc * Vc + cB * (1 - Vc)
    }

    function aB(cB, Bc, nc) {
      let Vc;
      return Vc = Math.abs(Bc - cB) <= nc ? Bc : cB + Math.sign(Bc - cB) * nc, Vc
    }

    function lc(cB, Bc, nc) {
      const Vc = zB(cB, Bc);
      let Ic;
      return Ic = -nc < Vc && Vc < nc ? Bc : aB(cB, Bc = cB + Vc, nc), Ic
    }

    function Yc(cB, Bc, nc) {
      return (cB - Bc) / (nc - Bc)
    }

    function Lc(cB, Bc, nc) {
      return (nc - Bc) * cB + Bc
    }

    function gB(cB, Bc) {
      const nc = cB % Bc;
      return 0 === nc ? Bc : gB(Bc, nc)
    }
    nc.r(Bc), nc.d(Bc, {
      Clamp: () => Tc,
      DeltaAngle: () => zB,
      Denormalize: () => yB,
      ExtractAsInt: () => Vc,
      Hermite: () => qB,
      Hermite1stDerivative: () => Oc,
      HighestCommonFactor: () => gB,
      ILog2: () => ec,
      InverseLerp: () => Pc,
      Lerp: () => sc,
      LerpAngle: () => Mc,
      MoveTowards: () => aB,
      MoveTowardsAngle: () => lc,
      Normalize: () => Sc,
      NormalizeRadians: () => fc,
      OutsideRange: () => rB,
      PercentToRange: () => Lc,
      PingPong: () => pc,
      RandomRange: () => uc,
      RangeToPercent: () => Yc,
      Repeat: () => tB,
      SmoothStep: () => hc,
      ToHex: () => mB,
      WithinEpsilon: () => Ic
    })
  },
  35753: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      Matrix: () => Vc.d,
      Quaternion: () => Vc.f,
      RegisterMathVector: () => Vc.h,
      TmpVectors: () => Vc.i,
      Vector2: () => Vc.m,
      KV: () => Vc.p,
      Vector4: () => Vc.t
    });
    var Vc = nc(35756);
    (0, Vc.h)()
  },
  35768: (cB, Bc, nc) => {
    function Vc(cB, Bc) {
      const nc = [];
      for (let Vc = 0; Vc < cB; ++Vc) nc.push(Bc());
      return nc
    }

    function Ic(cB, Bc) {
      return Vc(cB, Bc)
    }
    nc.d(Bc, {
      c: () => Vc,
      g: () => Ic,
      i: () => uc
    });
    const rB = ["push", "splice", "pop", "shift", "unshift"];

    function uc(cB, Bc) {
      const nc = rB.map((nc => function(cB, Bc, nc) {
        const Vc = cB[Bc];
        if ("function" !== typeof Vc) return null;
        const Ic = function() {
          const Vc = cB.length,
            rB = Ic.previous.apply(cB, arguments);
          return nc(Bc, Vc), rB
        };
        return Vc.next = Ic, Ic.previous = Vc, cB[Bc] = Ic, () => {
          const nc = Ic.previous;
          if (!nc) return;
          const Vc = Ic.next;
          Vc ? (nc.next = Vc, Vc.previous = nc) : (nc.next = void 0, cB[Bc] = nc), Ic.next = void 0, Ic.previous = void 0
        }
      }(cB, nc, Bc)));
      return () => {
        for (const cB of nc) cB?.()
      }
    }
  },
  35799: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => rB,
      d: () => Ic
    });
    const Vc = {};

    function Ic(cB, Bc) {
      Vc[cB] = Bc
    }

    function rB(cB) {
      return Vc[cB]
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);