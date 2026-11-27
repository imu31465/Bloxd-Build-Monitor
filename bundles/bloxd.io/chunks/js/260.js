export const id = 260;
export const ids = [260];
export const modules = {
  38569: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar,
      f: () => Zr,
      h: () => Wr
    });
    const Zr = 1 / 2.2,
      Wr = 2.2;
    Math.sqrt(5);
    let ar = .001
  },
  38599: (rr, Sr, Qr) => {
    function Zr(rr) {
      return parseInt(rr.toString().replace(/\W/g, ""))
    }

    function Wr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(rr - Sr) <= Qr
    }

    function ar(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return rr < Sr - Zr || rr > Qr + Zr
    }

    function jr(rr, Sr) {
      return rr === Sr ? rr : Math.random() * (Sr - rr) + rr
    }

    function Ir(rr, Sr, Qr) {
      return rr + (Sr - rr) * Qr
    }

    function fr(rr, Sr, Qr) {
      let Zr = hr(Sr - rr, 360);
      return Zr > 180 && (Zr -= 360), rr + Zr * mr(Qr)
    }

    function Er(rr, Sr, Qr) {
      let Zr;
      return Zr = rr != Sr ? mr((Qr - rr) / (Sr - rr)) : 0, Zr
    }

    function pr(rr, Sr, Qr, Zr, Wr) {
      const ar = Wr * Wr,
        jr = Wr * ar;
      return rr * (2 * jr - 3 * ar + 1) + Qr * (-2 * jr + 3 * ar) + Sr * (jr - 2 * ar + Wr) + Zr * (jr - ar)
    }

    function xr(rr, Sr, Qr, Zr, Wr) {
      const ar = Wr * Wr;
      return 6 * (ar - Wr) * rr + (3 * ar - 4 * Wr + 1) * Sr + 6 * (-ar + Wr) * Qr + (3 * ar - 2 * Wr) * Zr
    }

    function mr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(Qr, Math.max(Sr, rr))
    }

    function Nr(rr) {
      return rr -= 2 * Math.PI * Math.floor((rr + Math.PI) / (2 * Math.PI))
    }

    function Ur(rr) {
      const Sr = rr.toString(16);
      return rr <= 15 ? ("0" + Sr).toUpperCase() : Sr.toUpperCase()
    }

    function tr(rr) {
      if (Math.log2) return Math.floor(Math.log2(rr));
      if (rr < 0) return NaN;
      if (0 === rr) return -1 / 0;
      let Sr = 0;
      if (rr < 1) {
        for (; rr < 1;) Sr++, rr *= 2;
        Sr = -Sr
      } else if (rr > 1)
        for (; rr > 1;) Sr++, rr = Math.floor(rr / 2);
      return Sr
    }

    function hr(rr, Sr) {
      return rr - Math.floor(rr / Sr) * Sr
    }

    function zr(rr, Sr, Qr) {
      return (rr - Sr) / (Qr - Sr)
    }

    function Yr(rr, Sr, Qr) {
      return rr * (Qr - Sr) + Sr
    }

    function nr(rr, Sr) {
      let Qr = hr(Sr - rr, 360);
      return Qr > 180 && (Qr -= 360), Qr
    }

    function er(rr, Sr) {
      const Qr = hr(rr, 2 * Sr);
      return Sr - Math.abs(Qr - Sr)
    }

    function Kr(rr, Sr, Qr) {
      let Zr = mr(Qr);
      return Zr = -2 * Zr * Zr * Zr + 3 * Zr * Zr, Sr * Zr + rr * (1 - Zr)
    }

    function yr(rr, Sr, Qr) {
      let Zr;
      return Zr = Math.abs(Sr - rr) <= Qr ? Sr : rr + Math.sign(Sr - rr) * Qr, Zr
    }

    function Br(rr, Sr, Qr) {
      const Zr = nr(rr, Sr);
      let Wr;
      return Wr = -Qr < Zr && Zr < Qr ? Sr : yr(rr, Sr = rr + Zr, Qr), Wr
    }

    function Tr(rr, Sr, Qr) {
      return (rr - Sr) / (Qr - Sr)
    }

    function vr(rr, Sr, Qr) {
      return (Qr - Sr) * rr + Sr
    }

    function Or(rr, Sr) {
      const Qr = rr % Sr;
      return 0 === Qr ? Sr : Or(Sr, Qr)
    }
    Qr.r(Sr), Qr.d(Sr, {
      Clamp: () => mr,
      DeltaAngle: () => nr,
      Denormalize: () => Yr,
      ExtractAsInt: () => Zr,
      Hermite: () => pr,
      Hermite1stDerivative: () => xr,
      HighestCommonFactor: () => Or,
      ILog2: () => tr,
      InverseLerp: () => Er,
      Lerp: () => Ir,
      LerpAngle: () => fr,
      MoveTowards: () => yr,
      MoveTowardsAngle: () => Br,
      Normalize: () => zr,
      NormalizeRadians: () => Nr,
      OutsideRange: () => ar,
      PercentToRange: () => vr,
      PingPong: () => er,
      RandomRange: () => jr,
      RangeToPercent: () => Tr,
      Repeat: () => hr,
      SmoothStep: () => Kr,
      ToHex: () => Ur,
      WithinEpsilon: () => Wr
    })
  },
  38555: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      Matrix: () => Zr.d,
      Quaternion: () => Zr.h,
      RegisterMathVector: () => Zr.k,
      TmpVectors: () => Zr.n,
      Vector2: () => Zr.q,
      kU: () => Zr.u,
      Vector4: () => Zr.x
    });
    var Zr = Qr(38560);
    (0, Zr.k)()
  },
  38576: (rr, Sr, Qr) => {
    function Zr(rr, Sr) {
      const Qr = [];
      for (let Zr = 0; Zr < rr; ++Zr) Qr.push(Sr());
      return Qr
    }

    function Wr(rr, Sr) {
      return Zr(rr, Sr)
    }
    Qr.d(Sr, {
      e: () => Zr,
      f: () => Wr,
      h: () => jr
    });
    const ar = ["push", "splice", "pop", "shift", "unshift"];

    function jr(rr, Sr) {
      const Qr = ar.map((Qr => function(rr, Sr, Qr) {
        const Zr = rr[Sr];
        if ("function" !== typeof Zr) return null;
        const Wr = function() {
          const Zr = rr.length,
            ar = Wr.previous.apply(rr, arguments);
          return Qr(Sr, Zr), ar
        };
        return Zr.next = Wr, Wr.previous = Zr, rr[Sr] = Wr, () => {
          const Qr = Wr.previous;
          if (!Qr) return;
          const Zr = Wr.next;
          Zr ? (Qr.next = Zr, Zr.previous = Qr) : (Qr.next = void 0, rr[Sr] = Qr), Wr.next = void 0, Wr.previous = void 0
        }
      }(rr, Qr, Sr)));
      return () => {
        for (const rr of Qr) rr?.()
      }
    }
  },
  38609: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar,
      e: () => Wr
    });
    const Zr = {};

    function Wr(rr, Sr) {
      Zr[rr] = Sr
    }

    function ar(rr) {
      return Zr[rr]
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);