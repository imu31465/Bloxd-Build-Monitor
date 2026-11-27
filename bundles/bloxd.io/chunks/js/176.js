export const id = 176;
export const ids = [176];
export const modules = {
  9683: (ee, ie, He) => {
    He.d(ie, {
      d: () => Me,
      g: () => be
    });
    let ye = !1;

    function be() {
      ye = !0
    }

    function Me() {
      return ye
    }
  },
  9674: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      loadWasmPlay: () => ke,
      loadWasmPlayAhead: () => qe,
      loadWasmPreviews: () => fe
    });
    var ye = He(3465),
      be = He(2342),
      Me = He(2170),
      Ke = He(5046),
      Ue = He(3892),
      Fe = He(9683);
    let Je = null;

    function oe() {
      return Promise.all([He.e(86), He.e(89), He.e(103), He.e(234), He.e(233), He.e(150), He.e(216), He.e(243), He.e(155), He.e(101), He.e(244), He.e(75)]).then((() => He(41771)))
    }

    function Re() {
      Promise.all([He.e(84), He.e(87), He.e(85), He.e(86), He.e(103), He.e(100), He.e(300), He.e(207), He.e(250), He.e(274), He.e(244), He.e(54)]).then((() => He(42095))).catch((() => {}))
    }

    function ke() {
      return Ke.d.cancelDownloadForJoin(), (0, Ue.b)(), (0, be.g)(), (0, Fe.g)(), (0, Me.i)(), Re(), Promise.all([He.e(89), He.e(103), He.e(234), He.e(233), He.e(150), He.e(155), He.e(70)]).then((() => He(42125))).then((ee => {
        let {
          startJoinLoad: ie
        } = ee;
        ie()
      }), (() => {})), Je ??= oe().then((ee => (ee.startWasmPlay(), ee.followPageUiPack((ee => {
        ye.c.showGamePack(ee)
      })), ee)), (ee => {
        throw Je = null, ee
      })), Je
    }

    function qe() {
      return Re(), He.e(124).then((() => He(42130))).catch((() => {})), oe().then((() => {}))
    }

    function fe() {
      return oe().then((ee => {
        ee.startWasmPreviews(), ee.prefetchWasmPreviews()
      }))
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);