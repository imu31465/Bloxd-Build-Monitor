export const id = 176;
export const ids = [176];
export const modules = {
  9614: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB,
      d: () => DB
    });
    let YB = !1;

    function DB() {
      YB = !0
    }

    function QB() {
      return YB
    }
  },
  9608: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      loadWasmPlay: () => zB,
      loadWasmPlayAhead: () => lB,
      loadWasmPreviews: () => pB
    });
    var YB = GB(3573),
      DB = GB(2457),
      QB = GB(2250),
      oB = GB(5065),
      jB = GB(3944),
      yB = GB(9614);
    let JB = null;

    function MB() {
      return Promise.all([GB.e(86), GB.e(89), GB.e(103), GB.e(234), GB.e(233), GB.e(150), GB.e(216), GB.e(243), GB.e(155), GB.e(101), GB.e(244), GB.e(75)]).then((() => GB(41683)))
    }

    function PB() {
      Promise.all([GB.e(84), GB.e(87), GB.e(85), GB.e(86), GB.e(103), GB.e(100), GB.e(300), GB.e(207), GB.e(250), GB.e(274), GB.e(244), GB.e(54)]).then((() => GB(42017))).catch((() => {}))
    }

    function zB() {
      return oB.b.cancelDownloadForJoin(), (0, jB.d)(), (0, DB.h)(), (0, yB.d)(), (0, QB.j)(), PB(), Promise.all([GB.e(89), GB.e(103), GB.e(234), GB.e(233), GB.e(150), GB.e(155), GB.e(70)]).then((() => GB(42053))).then((BB => {
        let {
          startJoinLoad: OB
        } = BB;
        OB()
      }), (() => {})), JB ??= MB().then((BB => (BB.startWasmPlay(), BB.followPageUiPack((BB => {
        YB.c.showGamePack(BB)
      })), BB)), (BB => {
        throw JB = null, BB
      })), JB
    }

    function lB() {
      return PB(), GB.e(124).then((() => GB(42056))).catch((() => {})), MB().then((() => {}))
    }

    function pB() {
      return MB().then((BB => {
        BB.startWasmPreviews(), BB.prefetchWasmPreviews()
      }))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);