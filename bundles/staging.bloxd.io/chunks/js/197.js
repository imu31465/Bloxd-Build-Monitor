export const id = 197;
export const ids = [197];
export const modules = {
  38028: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => pB,
      f: () => lB
    });
    var VB = dB(24);
    let yB = !1;

    function pB() {
      return yB
    }

    function lB(BB) {
      yB !== BB && (yB = BB, VB.h.yH("replayViewer|videoExportChanged"))
    }
  },
  35479: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => LB,
      d: () => oB,
      f: () => OB,
      i: () => kB
    });
    var VB = dB(279),
      yB = dB(597),
      pB = dB(974),
      lB = dB(33);
    const JB = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      YB = "playSessionGameNameWithVariation",
      gB = "wasMatchmakePlayer";

    function oB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lB.m;
      (0, pB.k)(BB, JB)
    }

    function kB() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lB.m).setItem(gB, !0)
    }

    function LB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lB.m;
      return (0, pB.d)(BB, JB)
    }

    function OB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lB.m;
      const dB = (0, pB.d)(TB, JB),
        oB = function(BB) {
          const TB = BB.getItem(YB);
          return "string" !== typeof TB ? null : TB
        }(TB),
        kB = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lB.m).getItem(gB)
        }(TB);
      let LB;
      return LB = null !== dB && null !== oB && (0, pB.h)(TB, JB) && function(BB, TB, dB) {
          const yB = (0, VB.Vb)(BB),
            pB = (0, VB.Vb)(TB),
            lB = (0, VB.Qb)(BB),
            JB = (0, VB.Qb)(TB);
          return !(yB !== pB || !dB) || yB === pB && lB === JB
        }(oB, BB, kB) ? dB : (0, yB.e)(), (0, pB.n)(TB, JB, LB), TB.setItem(YB, BB),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lB.m).removeItem(gB)
        }(TB), LB
    }
  },
  39448: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => lB,
      g: () => pB,
      h: () => JB
    });
    let VB = null,
      yB = null;

    function pB(BB, TB) {
      return VB = BB, yB = null, JB(TB), () => {
        VB === BB && (VB = null, yB = null)
      }
    }

    function lB() {
      return null === yB ? null : {
        ...yB
      }
    }

    function JB(BB) {
      var TB;
      null !== (TB = VB) && void 0 !== TB && TB(BB) && (yB = {
        ...BB
      })
    }
  },
  39440: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => yB,
      e: () => pB
    });
    let VB = null;

    function yB(BB, TB) {
      VB = {
        conn: BB,
        reason: TB
      }
    }

    function pB(BB) {
      var TB;
      const dB = (null === (TB = VB) || void 0 === TB ? void 0 : TB.conn) === BB ? VB.reason : null;
      return VB = null, dB
    }
  },
  39417: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => pB,
      e: () => yB
    });
    let VB = {
      fire: () => {},
      close: () => {}
    };

    function yB(BB) {
      VB = BB
    }

    function pB() {
      return VB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);