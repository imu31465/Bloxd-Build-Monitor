export const id = 20;
export const ids = [20];
export const modules = {
  37810: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => ZR,
      g: () => tR,
      j: () => uR
    });
    var yR = GR(66);

    function tR(RR) {
      return qR(RR, iR)
    }

    function uR(RR) {
      return qR(RR, fR)
    }

    function ZR(RR) {
      return `${Math.floor(RR/60)}:${String(RR%60).padStart(2,"0")}`
    }

    function qR(RR, JR) {
      const [, GR] = (0, yR.useState)(null);
      return (0, yR.useEffect)((() => {
        if (0 === RR) return;
        const yR = window.setInterval((() => {
          const yR = JR(RR);
          GR((JR => (null === JR || void 0 === JR ? void 0 : JR.endsAt) === RR && JR.value === yR ? JR : {
            endsAt: RR,
            value: yR
          }))
        }), 250);
        return () => {
          window.clearInterval(yR)
        }
      }), [RR, JR]), JR(RR)
    }

    function iR(RR) {
      return (RR - performance.now()) / 1e3
    }

    function fR(RR) {
      return Math.max(0, Math.ceil(iR(RR)))
    }
  },
  37847: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR
    });
    const yR = [{
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

    function tR(RR, JR, GR) {
      const tR = Math.abs(RR - JR),
        uR = Date.now() - GR;
      for (const ZR of yR)
        if (RR < ZR.maxDist) return tR >= ZR.hardUpdateDist || uR > ZR.timeBetweenSoftChecks && tR >= ZR.softUpdateDist;
      return !1
    }
  },
  39659: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => ZR,
      f: () => qR
    });
    var yR = GR(377),
      tR = GR(35162),
      uR = GR(4555);

    function ZR(RR) {
      const JR = (0, uR.b)(RR);
      return (0, yR.Vb)(RR, void 0 === JR ? void 0 : (0, tR.displayNameOf)(JR))
    }

    function qR(RR, JR) {
      return RR(ZR(JR))
    }
  },
  39664: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => uR,
      f: () => qR,
      i: () => ZR
    });
    var yR = GR(3588);
    const tR = "(max-height: 420px), (max-width: 650px)";

    function uR() {
      return (0, yR.d)(tR)
    }

    function ZR(RR) {
      return (0, yR.k)(tR, RR)
    }

    function qR() {
      return (0, yR.g)(tR)
    }
  },
  39672: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => ZR,
      h: () => uR
    });
    const yR = new WeakMap;

    function tR(RR) {
      let JR = yR.get(RR);
      return JR || (JR = {
        hidden: RR.hidden,
        x: NaN,
        y: NaN
      }, yR.set(RR, JR)), JR
    }

    function uR(RR, JR) {
      const GR = tR(RR);
      GR.hidden !== JR && (GR.hidden = JR, RR.hidden = JR)
    }

    function ZR(RR, JR, GR) {
      const yR = tR(RR);
      yR.x === JR && yR.y === GR || (yR.x = JR, yR.y = GR, RR.style.translate = `${JR}vw ${GR}vh`)
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);