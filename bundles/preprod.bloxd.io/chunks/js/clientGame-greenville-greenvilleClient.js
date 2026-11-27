export const id = 20;
export const ids = [20];
export const modules = {
  37888: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => PW,
      e: () => EW,
      f: () => NW
    });
    var mW = OW(62);

    function EW(WW) {
      return LW(WW, cW)
    }

    function NW(WW) {
      return LW(WW, wW)
    }

    function PW(WW) {
      return `${Math.floor(WW/60)}:${String(WW%60).padStart(2,"0")}`
    }

    function LW(WW, iW) {
      const [, OW] = (0, mW.useState)(null);
      return (0, mW.useEffect)((() => {
        if (0 === WW) return;
        const mW = window.setInterval((() => {
          const mW = iW(WW);
          OW((iW => (null === iW || void 0 === iW ? void 0 : iW.endsAt) === WW && iW.value === mW ? iW : {
            endsAt: WW,
            value: mW
          }))
        }), 250);
        return () => {
          window.clearInterval(mW)
        }
      }), [WW, iW]), iW(WW)
    }

    function cW(WW) {
      return (WW - performance.now()) / 1e3
    }

    function wW(WW) {
      return Math.max(0, Math.ceil(cW(WW)))
    }
  },
  37917: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW
    });
    const mW = [{
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

    function EW(WW, iW, OW) {
      const EW = Math.abs(WW - iW),
        NW = Date.now() - OW;
      for (const PW of mW)
        if (WW < PW.maxDist) return EW >= PW.hardUpdateDist || NW > PW.timeBetweenSoftChecks && EW >= PW.softUpdateDist;
      return !1
    }
  },
  39672: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW,
      g: () => LW
    });
    var mW = OW(344),
      EW = OW(35231),
      NW = OW(4454);

    function PW(WW) {
      const iW = (0, NW.b)(WW);
      return (0, mW.Wb)(WW, void 0 === iW ? void 0 : (0, EW.displayNameOf)(iW))
    }

    function LW(WW, iW) {
      return WW(PW(iW))
    }
  },
  39677: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => NW,
      e: () => LW,
      g: () => PW
    });
    var mW = OW(3451);
    const EW = "(max-height: 420px), (max-width: 650px)";

    function NW() {
      return (0, mW.b)(EW)
    }

    function PW(WW) {
      return (0, mW.e)(EW, WW)
    }

    function LW() {
      return (0, mW.c)(EW)
    }
  },
  39679: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => PW,
      h: () => NW
    });
    const mW = new WeakMap;

    function EW(WW) {
      let iW = mW.get(WW);
      return iW || (iW = {
        hidden: WW.hidden,
        x: NaN,
        y: NaN
      }, mW.set(WW, iW)), iW
    }

    function NW(WW, iW) {
      const OW = EW(WW);
      OW.hidden !== iW && (OW.hidden = iW, WW.hidden = iW)
    }

    function PW(WW, iW, OW) {
      const mW = EW(WW);
      mW.x === iW && mW.y === OW || (mW.x = iW, mW.y = OW, WW.style.translate = `${iW}vw ${OW}vh`)
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);