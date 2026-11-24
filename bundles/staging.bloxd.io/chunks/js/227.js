export const id = 227;
export const ids = [227];
export const modules = {
  37191: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am,
      f: () => hm,
      g: () => Am
    });
    const hm = 1 / 2.2,
      Am = 2.2;
    Math.sqrt(5);
    let am = .001
  },
  37208: (mm, Tm, fm) => {
    function hm(mm) {
      return parseInt(mm.toString().replace(/\W/g, ""))
    }

    function Am(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(mm - Tm) <= fm
    }

    function am(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return mm < Tm - hm || mm > fm + hm
    }

    function xm(mm, Tm) {
      return mm === Tm ? mm : Math.random() * (Tm - mm) + mm
    }

    function wm(mm, Tm, fm) {
      return mm + (Tm - mm) * fm
    }

    function Dm(mm, Tm, fm) {
      let hm = qm(Tm - mm, 360);
      return hm > 180 && (hm -= 360), mm + hm * Em(fm)
    }

    function im(mm, Tm, fm) {
      let hm;
      return hm = mm != Tm ? Em((fm - mm) / (Tm - mm)) : 0, hm
    }

    function Rm(mm, Tm, fm, hm, Am) {
      const am = Am * Am,
        xm = Am * am;
      return mm * (2 * xm - 3 * am + 1) + fm * (-2 * xm + 3 * am) + Tm * (xm - 2 * am + Am) + hm * (xm - am)
    }

    function pm(mm, Tm, fm, hm, Am) {
      const am = Am * Am;
      return 6 * (am - Am) * mm + (3 * am - 4 * Am + 1) * Tm + 6 * (-am + Am) * fm + (3 * am - 2 * Am) * hm
    }

    function Em(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(fm, Math.max(Tm, mm))
    }

    function om(mm) {
      return mm -= 2 * Math.PI * Math.floor((mm + Math.PI) / (2 * Math.PI))
    }

    function Om(mm) {
      const Tm = mm.toString(16);
      return mm <= 15 ? ("0" + Tm).toUpperCase() : Tm.toUpperCase()
    }

    function Ym(mm) {
      if (Math.log2) return Math.floor(Math.log2(mm));
      if (mm < 0) return NaN;
      if (0 === mm) return -1 / 0;
      let Tm = 0;
      if (mm < 1) {
        for (; mm < 1;) Tm++, mm *= 2;
        Tm = -Tm
      } else if (mm > 1)
        for (; mm > 1;) Tm++, mm = Math.floor(mm / 2);
      return Tm
    }

    function qm(mm, Tm) {
      return mm - Math.floor(mm / Tm) * Tm
    }

    function jm(mm, Tm, fm) {
      return (mm - Tm) / (fm - Tm)
    }

    function Vm(mm, Tm, fm) {
      return mm * (fm - Tm) + Tm
    }

    function Im(mm, Tm) {
      let fm = qm(Tm - mm, 360);
      return fm > 180 && (fm -= 360), fm
    }

    function Km(mm, Tm) {
      const fm = qm(mm, 2 * Tm);
      return Tm - Math.abs(fm - Tm)
    }

    function Qm(mm, Tm, fm) {
      let hm = Em(fm);
      return hm = -2 * hm * hm * hm + 3 * hm * hm, Tm * hm + mm * (1 - hm)
    }

    function nm(mm, Tm, fm) {
      let hm;
      return hm = Math.abs(Tm - mm) <= fm ? Tm : mm + Math.sign(Tm - mm) * fm, hm
    }

    function Jm(mm, Tm, fm) {
      const hm = Im(mm, Tm);
      let Am;
      return Am = -fm < hm && hm < fm ? Tm : nm(mm, Tm = mm + hm, fm), Am
    }

    function cm(mm, Tm, fm) {
      return (mm - Tm) / (fm - Tm)
    }

    function zm(mm, Tm, fm) {
      return (fm - Tm) * mm + Tm
    }

    function Zm(mm, Tm) {
      const fm = mm % Tm;
      return 0 === fm ? Tm : Zm(Tm, fm)
    }
    fm.r(Tm), fm.d(Tm, {
      Clamp: () => Em,
      DeltaAngle: () => Im,
      Denormalize: () => Vm,
      ExtractAsInt: () => hm,
      Hermite: () => Rm,
      Hermite1stDerivative: () => pm,
      HighestCommonFactor: () => Zm,
      ILog2: () => Ym,
      InverseLerp: () => im,
      Lerp: () => wm,
      LerpAngle: () => Dm,
      MoveTowards: () => nm,
      MoveTowardsAngle: () => Jm,
      Normalize: () => jm,
      NormalizeRadians: () => om,
      OutsideRange: () => am,
      PercentToRange: () => zm,
      PingPong: () => Km,
      RandomRange: () => xm,
      RangeToPercent: () => cm,
      Repeat: () => qm,
      SmoothStep: () => Qm,
      ToHex: () => Om,
      WithinEpsilon: () => Am
    })
  },
  37181: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      Matrix: () => hm.e,
      Quaternion: () => hm.h,
      RegisterMathVector: () => hm.i,
      TmpVectors: () => hm.j,
      Vector2: () => hm.l,
      WO: () => hm.p,
      Vector4: () => hm.t
    });
    var hm = fm(37185);
    (0, hm.i)()
  },
  37197: (mm, Tm, fm) => {
    function hm(mm, Tm) {
      const fm = [];
      for (let hm = 0; hm < mm; ++hm) fm.push(Tm());
      return fm
    }

    function Am(mm, Tm) {
      return hm(mm, Tm)
    }
    fm.d(Tm, {
      c: () => hm,
      d: () => Am,
      h: () => xm
    });
    const am = ["push", "splice", "pop", "shift", "unshift"];

    function xm(mm, Tm) {
      const fm = am.map((fm => function(mm, Tm, fm) {
        const hm = mm[Tm];
        if ("function" !== typeof hm) return null;
        const Am = function() {
          const hm = mm.length,
            am = Am.previous.apply(mm, arguments);
          return fm(Tm, hm), am
        };
        return hm.next = Am, Am.previous = hm, mm[Tm] = Am, () => {
          const fm = Am.previous;
          if (!fm) return;
          const hm = Am.next;
          hm ? (fm.next = hm, hm.previous = fm) : (fm.next = void 0, mm[Tm] = fm), Am.next = void 0, Am.previous = void 0
        }
      }(mm, fm, Tm)));
      return () => {
        for (const mm of fm) mm?.()
      }
    }
  },
  37224: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am,
      d: () => Am
    });
    const hm = {};

    function Am(mm, Tm) {
      hm[mm] = Tm
    }

    function am(mm) {
      return hm[mm]
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);