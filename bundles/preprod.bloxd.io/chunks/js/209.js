export const id = 209;
export const ids = [209];
export const modules = {
  35864: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => fy,
      h: () => Uy,
      j: () => hy
    });
    const Uy = 1 / 2.2,
      hy = 2.2;
    Math.sqrt(5);
    let fy = .001
  },
  35902: (yb, bb, Wy) => {
    function Uy(yb) {
      return parseInt(yb.toString().replace(/\W/g, ""))
    }

    function hy(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(yb - bb) <= Wy
    }

    function fy(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return yb < bb - Uy || yb > Wy + Uy
    }

    function Zy(yb, bb) {
      return yb === bb ? yb : Math.random() * (bb - yb) + yb
    }

    function cb(yb, bb, Wy) {
      return yb + (bb - yb) * Wy
    }

    function Py(yb, bb, Wy) {
      let Uy = Ey(bb - yb, 360);
      return Uy > 180 && (Uy -= 360), yb + Uy * ey(Wy)
    }

    function oy(yb, bb, Wy) {
      let Uy;
      return Uy = yb != bb ? ey((Wy - yb) / (bb - yb)) : 0, Uy
    }

    function By(yb, bb, Wy, Uy, hy) {
      const fy = hy * hy,
        Zy = hy * fy;
      return yb * (2 * Zy - 3 * fy + 1) + Wy * (-2 * Zy + 3 * fy) + bb * (Zy - 2 * fy + hy) + Uy * (Zy - fy)
    }

    function Ky(yb, bb, Wy, Uy, hy) {
      const fy = hy * hy;
      return 6 * (fy - hy) * yb + (3 * fy - 4 * hy + 1) * bb + 6 * (-fy + hy) * Wy + (3 * fy - 2 * hy) * Uy
    }

    function ey(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(Wy, Math.max(bb, yb))
    }

    function qb(yb) {
      return yb -= 2 * Math.PI * Math.floor((yb + Math.PI) / (2 * Math.PI))
    }

    function sy(yb) {
      const bb = yb.toString(16);
      return yb <= 15 ? ("0" + bb).toUpperCase() : bb.toUpperCase()
    }

    function Sy(yb) {
      if (Math.log2) return Math.floor(Math.log2(yb));
      if (yb < 0) return NaN;
      if (0 === yb) return -1 / 0;
      let bb = 0;
      if (yb < 1) {
        for (; yb < 1;) bb++, yb *= 2;
        bb = -bb
      } else if (yb > 1)
        for (; yb > 1;) bb++, yb = Math.floor(yb / 2);
      return bb
    }

    function Ey(yb, bb) {
      return yb - Math.floor(yb / bb) * bb
    }

    function ly(yb, bb, Wy) {
      return (yb - bb) / (Wy - bb)
    }

    function mb(yb, bb, Wy) {
      return yb * (Wy - bb) + bb
    }

    function Cy(yb, bb) {
      let Wy = Ey(bb - yb, 360);
      return Wy > 180 && (Wy -= 360), Wy
    }

    function Ty(yb, bb) {
      const Wy = Ey(yb, 2 * bb);
      return bb - Math.abs(Wy - bb)
    }

    function Vy(yb, bb, Wy) {
      let Uy = ey(Wy);
      return Uy = -2 * Uy * Uy * Uy + 3 * Uy * Uy, bb * Uy + yb * (1 - Uy)
    }

    function Jy(yb, bb, Wy) {
      let Uy;
      return Uy = Math.abs(bb - yb) <= Wy ? bb : yb + Math.sign(bb - yb) * Wy, Uy
    }

    function gb(yb, bb, Wy) {
      const Uy = Cy(yb, bb);
      let hy;
      return hy = -Wy < Uy && Uy < Wy ? bb : Jy(yb, bb = yb + Uy, Wy), hy
    }

    function Gy(yb, bb, Wy) {
      return (yb - bb) / (Wy - bb)
    }

    function Oy(yb, bb, Wy) {
      return (Wy - bb) * yb + bb
    }

    function Ry(yb, bb) {
      const Wy = yb % bb;
      return 0 === Wy ? bb : Ry(bb, Wy)
    }
    Wy.r(bb), Wy.d(bb, {
      Clamp: () => ey,
      DeltaAngle: () => Cy,
      Denormalize: () => mb,
      ExtractAsInt: () => Uy,
      Hermite: () => By,
      Hermite1stDerivative: () => Ky,
      HighestCommonFactor: () => Ry,
      ILog2: () => Sy,
      InverseLerp: () => oy,
      Lerp: () => cb,
      LerpAngle: () => Py,
      MoveTowards: () => Jy,
      MoveTowardsAngle: () => gb,
      Normalize: () => ly,
      NormalizeRadians: () => qb,
      OutsideRange: () => fy,
      PercentToRange: () => Oy,
      PingPong: () => Ty,
      RandomRange: () => Zy,
      RangeToPercent: () => Gy,
      Repeat: () => Ey,
      SmoothStep: () => Vy,
      ToHex: () => sy,
      WithinEpsilon: () => hy
    })
  },
  35856: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      Matrix: () => Uy.c,
      Quaternion: () => Uy.e,
      RegisterMathVector: () => Uy.i,
      TmpVectors: () => Uy.j,
      Vector2: () => Uy.m,
      dU: () => Uy.n,
      Vector4: () => Uy.p
    });
    var Uy = Wy(35861);
    (0, Uy.i)()
  },
  35869: (yb, bb, Wy) => {
    function Uy(yb, bb) {
      const Wy = [];
      for (let Uy = 0; Uy < yb; ++Uy) Wy.push(bb());
      return Wy
    }

    function hy(yb, bb) {
      return Uy(yb, bb)
    }
    Wy.d(bb, {
      c: () => Uy,
      e: () => hy,
      h: () => Zy
    });
    const fy = ["push", "splice", "pop", "shift", "unshift"];

    function Zy(yb, bb) {
      const Wy = fy.map((Wy => function(yb, bb, Wy) {
        const Uy = yb[bb];
        if ("function" !== typeof Uy) return null;
        const hy = function() {
          const Uy = yb.length,
            fy = hy.previous.apply(yb, arguments);
          return Wy(bb, Uy), fy
        };
        return Uy.next = hy, hy.previous = Uy, yb[bb] = hy, () => {
          const Wy = hy.previous;
          if (!Wy) return;
          const Uy = hy.next;
          Uy ? (Wy.next = Uy, Uy.previous = Wy) : (Wy.next = void 0, yb[bb] = Wy), hy.next = void 0, hy.previous = void 0
        }
      }(yb, Wy, bb)));
      return () => {
        for (const yb of Wy) yb?.()
      }
    }
  },
  35909: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => fy,
      e: () => hy
    });
    const Uy = {};

    function hy(yb, bb) {
      Uy[yb] = bb
    }

    function fy(yb) {
      return Uy[yb]
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);