export const id = 20;
export const ids = [20];
export const modules = {
  38175: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr,
      f: () => Wr,
      h: () => ar
    });
    var Zr = Qr(72);

    function Wr(rr) {
      return Ir(rr, fr)
    }

    function ar(rr) {
      return Ir(rr, Er)
    }

    function jr(rr) {
      return `${Math.floor(rr/60)}:${String(rr%60).padStart(2,"0")}`
    }

    function Ir(rr, Sr) {
      const [, Qr] = (0, Zr.useState)(null);
      return (0, Zr.useEffect)((() => {
        if (0 === rr) return;
        const Zr = window.setInterval((() => {
          const Zr = Sr(rr);
          Qr((Sr => (null === Sr || void 0 === Sr ? void 0 : Sr.endsAt) === rr && Sr.value === Zr ? Sr : {
            endsAt: rr,
            value: Zr
          }))
        }), 250);
        return () => {
          window.clearInterval(Zr)
        }
      }), [rr, Sr]), Sr(rr)
    }

    function fr(rr) {
      return (rr - performance.now()) / 1e3
    }

    function Er(rr) {
      return Math.max(0, Math.ceil(fr(rr)))
    }
  },
  38211: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Wr
    });
    const Zr = [{
      maxDist: 30,
      timeBetweenSoftChecks: 1e3,
      softUpdateDist: 2,
      hardUpdateDist: 10
    }, {
      maxDist: 200,
      timeBetweenSoftChecks: 2e3,
      softUpdateDist: 5,
      hardUpdateDist: 20
    }, {
      maxDist: 1 / 0,
      timeBetweenSoftChecks: 5e3,
      softUpdateDist: 30,
      hardUpdateDist: 100
    }];

    function Wr(rr, Sr, Qr) {
      const Wr = Math.abs(rr - Sr),
        ar = Date.now() - Qr;
      for (const jr of Zr)
        if (rr < jr.maxDist) return Wr >= jr.hardUpdateDist || ar > jr.timeBetweenSoftChecks && Wr >= jr.softUpdateDist;
      return !1
    }
  },
  39995: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => jr,
      g: () => Ir
    });
    var Zr = Qr(379),
      Wr = Qr(35472),
      ar = Qr(4489);

    function jr(rr) {
      const Sr = (0, ar.e)(rr);
      return (0, Zr.Pb)(rr, void 0 === Sr ? void 0 : (0, Wr.displayNameOf)(Sr))
    }

    function Ir(rr, Sr) {
      return rr(jr(Sr))
    }
  },
  40004: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar,
      h: () => Ir,
      k: () => jr
    });
    var Zr = Qr(3511);
    const Wr = "(max-height: 420px), (max-width: 650px)";

    function ar() {
      return (0, Zr.e)(Wr)
    }

    function jr(rr) {
      return (0, Zr.i)(Wr, rr)
    }

    function Ir() {
      return (0, Zr.h)(Wr)
    }
  },
  40013: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => jr,
      f: () => ar
    });
    const Zr = new WeakMap;

    function Wr(rr) {
      let Sr = Zr.get(rr);
      return Sr || (Sr = {
        hidden: rr.hidden,
        x: NaN,
        y: NaN
      }, Zr.set(rr, Sr)), Sr
    }

    function ar(rr, Sr) {
      const Qr = Wr(rr);
      Qr.hidden !== Sr && (Qr.hidden = Sr, rr.hidden = Sr)
    }

    function jr(rr, Sr, Qr) {
      const Zr = Wr(rr);
      Zr.x === Sr && Zr.y === Qr || (Zr.x = Sr, Zr.y = Qr, rr.style.translate = `${Sr}vw ${Qr}vh`)
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);