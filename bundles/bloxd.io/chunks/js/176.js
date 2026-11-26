export const id = 176;
export const ids = [176];
export const modules = {
  9634: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH,
      f: () => rH
    });
    let AH = !1;

    function rH() {
      AH = !0
    }

    function SH() {
      return AH
    }
  },
  9631: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      loadWasmPlay: () => GH,
      loadWasmPlayAhead: () => YH,
      loadWasmPreviews: () => uH
    });
    var AH = LH(3503),
      rH = LH(2413),
      SH = LH(2215),
      hH = LH(5062),
      tH = LH(3892),
      zH = LH(9634);
    let CH = null;

    function EH() {
      return Promise.all([LH.e(86), LH.e(89), LH.e(103), LH.e(234), LH.e(233), LH.e(150), LH.e(216), LH.e(243), LH.e(155), LH.e(101), LH.e(244), LH.e(75)]).then((() => LH(42e3)))
    }

    function XH() {
      Promise.all([LH.e(84), LH.e(87), LH.e(85), LH.e(86), LH.e(103), LH.e(100), LH.e(300), LH.e(207), LH.e(250), LH.e(274), LH.e(244), LH.e(54)]).then((() => LH(42318))).catch((() => {}))
    }

    function GH() {
      return hH.b.cancelDownloadForJoin(), (0, tH.e)(), (0, rH.f)(), (0, zH.f)(), (0, SH.g)(), XH(), Promise.all([LH.e(89), LH.e(103), LH.e(234), LH.e(233), LH.e(150), LH.e(155), LH.e(70)]).then((() => LH(42355))).then((HH => {
        let {
          startJoinLoad: BH
        } = HH;
        BH()
      }), (() => {})), CH ??= EH().then((HH => (HH.startWasmPlay(), HH.followPageUiPack((HH => {
        AH.b.showGamePack(HH)
      })), HH)), (HH => {
        throw CH = null, HH
      })), CH
    }

    function YH() {
      return XH(), LH.e(124).then((() => LH(42361))).catch((() => {})), EH().then((() => {}))
    }

    function uH() {
      return EH().then((HH => {
        HH.startWasmPreviews(), HH.prefetchWasmPreviews()
      }))
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);