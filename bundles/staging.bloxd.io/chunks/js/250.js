export const id = 250;
export const ids = [250];
export const modules = {
  38272: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => UV,
      c: () => JV,
      f: () => YV
    });
    const JV = 1 / 2.2,
      YV = 2.2;
    Math.sqrt(5);
    let UV = .001
  },
  38303: (VV, eV, xV) => {
    function JV(VV) {
      return parseInt(VV.toString().replace(/\W/g, ""))
    }

    function YV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(VV - eV) <= xV
    }

    function UV(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return VV < eV - JV || VV > xV + JV
    }

    function yV(VV, eV) {
      return VV === eV ? VV : Math.random() * (eV - VV) + VV
    }

    function pV(VV, eV, xV) {
      return VV + (eV - VV) * xV
    }

    function QV(VV, eV, xV) {
      let JV = EV(eV - VV, 360);
      return JV > 180 && (JV -= 360), VV + JV * vV(xV)
    }

    function nV(VV, eV, xV) {
      let JV;
      return JV = VV != eV ? vV((xV - VV) / (eV - VV)) : 0, JV
    }

    function wV(VV, eV, xV, JV, YV) {
      const UV = YV * YV,
        yV = YV * UV;
      return VV * (2 * yV - 3 * UV + 1) + xV * (-2 * yV + 3 * UV) + eV * (yV - 2 * UV + YV) + JV * (yV - UV)
    }

    function ZV(VV, eV, xV, JV, YV) {
      const UV = YV * YV;
      return 6 * (UV - YV) * VV + (3 * UV - 4 * YV + 1) * eV + 6 * (-UV + YV) * xV + (3 * UV - 2 * YV) * JV
    }

    function vV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(xV, Math.max(eV, VV))
    }

    function rV(VV) {
      return VV -= 2 * Math.PI * Math.floor((VV + Math.PI) / (2 * Math.PI))
    }

    function kV(VV) {
      const eV = VV.toString(16);
      return VV <= 15 ? ("0" + eV).toUpperCase() : eV.toUpperCase()
    }

    function bV(VV) {
      if (Math.log2) return Math.floor(Math.log2(VV));
      if (VV < 0) return NaN;
      if (0 === VV) return -1 / 0;
      let eV = 0;
      if (VV < 1) {
        for (; VV < 1;) eV++, VV *= 2;
        eV = -eV
      } else if (VV > 1)
        for (; VV > 1;) eV++, VV = Math.floor(VV / 2);
      return eV
    }

    function EV(VV, eV) {
      return VV - Math.floor(VV / eV) * eV
    }

    function BV(VV, eV, xV) {
      return (VV - eV) / (xV - eV)
    }

    function jV(VV, eV, xV) {
      return VV * (xV - eV) + eV
    }

    function qV(VV, eV) {
      let xV = EV(eV - VV, 360);
      return xV > 180 && (xV -= 360), xV
    }

    function tV(VV, eV) {
      const xV = EV(VV, 2 * eV);
      return eV - Math.abs(xV - eV)
    }

    function FV(VV, eV, xV) {
      let JV = vV(xV);
      return JV = -2 * JV * JV * JV + 3 * JV * JV, eV * JV + VV * (1 - JV)
    }

    function TV(VV, eV, xV) {
      let JV;
      return JV = Math.abs(eV - VV) <= xV ? eV : VV + Math.sign(eV - VV) * xV, JV
    }

    function PV(VV, eV, xV) {
      const JV = qV(VV, eV);
      let YV;
      return YV = -xV < JV && JV < xV ? eV : TV(VV, eV = VV + JV, xV), YV
    }

    function AV(VV, eV, xV) {
      return (VV - eV) / (xV - eV)
    }

    function NV(VV, eV, xV) {
      return (xV - eV) * VV + eV
    }

    function XV(VV, eV) {
      const xV = VV % eV;
      return 0 === xV ? eV : XV(eV, xV)
    }
    xV.r(eV), xV.d(eV, {
      Clamp: () => vV,
      DeltaAngle: () => qV,
      Denormalize: () => jV,
      ExtractAsInt: () => JV,
      Hermite: () => wV,
      Hermite1stDerivative: () => ZV,
      HighestCommonFactor: () => XV,
      ILog2: () => bV,
      InverseLerp: () => nV,
      Lerp: () => pV,
      LerpAngle: () => QV,
      MoveTowards: () => TV,
      MoveTowardsAngle: () => PV,
      Normalize: () => BV,
      NormalizeRadians: () => rV,
      OutsideRange: () => UV,
      PercentToRange: () => NV,
      PingPong: () => tV,
      RandomRange: () => yV,
      RangeToPercent: () => AV,
      Repeat: () => EV,
      SmoothStep: () => FV,
      ToHex: () => kV,
      WithinEpsilon: () => YV
    })
  },
  38263: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      Matrix: () => JV.d,
      Quaternion: () => JV.h,
      RegisterMathVector: () => JV.j,
      TmpVectors: () => JV.l,
      Vector2: () => JV.n,
      Ik: () => JV.o,
      Vector4: () => JV.q
    });
    var JV = xV(38269);
    (0, JV.j)()
  },
  38278: (VV, eV, xV) => {
    function JV(VV, eV) {
      const xV = [];
      for (let JV = 0; JV < VV; ++JV) xV.push(eV());
      return xV
    }

    function YV(VV, eV) {
      return JV(VV, eV)
    }
    xV.d(eV, {
      e: () => JV,
      h: () => YV,
      i: () => yV
    });
    const UV = ["push", "splice", "pop", "shift", "unshift"];

    function yV(VV, eV) {
      const xV = UV.map((xV => function(VV, eV, xV) {
        const JV = VV[eV];
        if ("function" !== typeof JV) return null;
        const YV = function() {
          const JV = VV.length,
            UV = YV.previous.apply(VV, arguments);
          return xV(eV, JV), UV
        };
        return JV.next = YV, YV.previous = JV, VV[eV] = YV, () => {
          const xV = YV.previous;
          if (!xV) return;
          const JV = YV.next;
          JV ? (xV.next = JV, JV.previous = xV) : (xV.next = void 0, VV[eV] = xV), YV.next = void 0, YV.previous = void 0
        }
      }(VV, xV, eV)));
      return () => {
        for (const VV of xV) VV?.()
      }
    }
  },
  38318: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV,
      d: () => YV
    });
    const JV = {};

    function YV(VV, eV) {
      JV[VV] = eV
    }

    function UV(VV) {
      return JV[VV]
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);