export const id = 20;
export const ids = [20];
export const modules = {
  37923: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Vb,
      e: () => Hb,
      i: () => pb
    });
    var eb = Mb(64);

    function Hb(bb) {
      return gb(bb, lb)
    }

    function pb(bb) {
      return gb(bb, Lb)
    }

    function Vb(bb) {
      return `${Math.floor(bb/60)}:${String(bb%60).padStart(2,"0")}`
    }

    function gb(bb, wb) {
      const [, Mb] = (0, eb.useState)(null);
      return (0, eb.useEffect)((() => {
        if (0 === bb) return;
        const eb = window.setInterval((() => {
          const eb = wb(bb);
          Mb((wb => (null === wb || void 0 === wb ? void 0 : wb.endsAt) === bb && wb.value === eb ? wb : {
            endsAt: bb,
            value: eb
          }))
        }), 250);
        return () => {
          window.clearInterval(eb)
        }
      }), [bb, wb]), wb(bb)
    }

    function lb(bb) {
      return (bb - performance.now()) / 1e3
    }

    function Lb(bb) {
      return Math.max(0, Math.ceil(lb(bb)))
    }
  },
  37952: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb
    });
    const eb = [{
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

    function Hb(bb, wb, Mb) {
      const Hb = Math.abs(bb - wb),
        pb = Date.now() - Mb;
      for (const Vb of eb)
        if (bb < Vb.maxDist) return Hb >= Vb.hardUpdateDist || pb > Vb.timeBetweenSoftChecks && Hb >= Vb.softUpdateDist;
      return !1
    }
  },
  39714: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Vb,
      f: () => gb
    });
    var eb = Mb(382),
      Hb = Mb(35334),
      pb = Mb(4659);

    function Vb(bb) {
      const wb = (0, pb.c)(bb);
      return (0, eb._b)(bb, void 0 === wb ? void 0 : (0, Hb.displayNameOf)(wb))
    }

    function gb(bb, wb) {
      return bb(Vb(wb))
    }
  },
  39721: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => pb,
      h: () => gb,
      l: () => Vb
    });
    var eb = Mb(3639);
    const Hb = "(max-height: 420px), (max-width: 650px)";

    function pb() {
      return (0, eb.c)(Hb)
    }

    function Vb(bb) {
      return (0, eb.g)(Hb, bb)
    }

    function gb() {
      return (0, eb.e)(Hb)
    }
  },
  39723: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Vb,
      f: () => pb
    });
    const eb = new WeakMap;

    function Hb(bb) {
      let wb = eb.get(bb);
      return wb || (wb = {
        hidden: bb.hidden,
        x: NaN,
        y: NaN
      }, eb.set(bb, wb)), wb
    }

    function pb(bb, wb) {
      const Mb = Hb(bb);
      Mb.hidden !== wb && (Mb.hidden = wb, bb.hidden = wb)
    }

    function Vb(bb, wb, Mb) {
      const eb = Hb(bb);
      eb.x === wb && eb.y === Mb || (eb.x = wb, eb.y = Mb, bb.style.translate = `${wb}vw ${Mb}vh`)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);