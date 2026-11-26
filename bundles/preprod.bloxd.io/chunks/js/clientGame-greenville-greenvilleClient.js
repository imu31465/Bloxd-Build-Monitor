export const id = 20;
export const ids = [20];
export const modules = {
  34986: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH
    });
    var AH = LH(4947),
      rH = LH(4951);

    function SH(HH) {
      let {
        children: BH,
        showing: LH,
        globallyUniqueKey: SH,
        alwaysMountChildren: hH = !1,
        doGameplayStartStopOnShow: tH = !0,
        keepsMovement: zH = !1
      } = HH;
      return (0, rH.c)(!0, LH, SH, zH), (0, AH.e)(tH, LH), LH || hH ? BH : null
    }
  },
  37565: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => rH
    });
    const AH = [{
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

    function rH(HH, BH, LH) {
      const rH = Math.abs(HH - BH),
        SH = Date.now() - LH;
      for (const hH of AH)
        if (HH < hH.maxDist) return rH >= hH.hardUpdateDist || SH > hH.timeBetweenSoftChecks && rH >= hH.softUpdateDist;
      return !1
    }
  },
  39361: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH,
      h: () => tH
    });
    var AH = LH(317),
      rH = LH(35006),
      SH = LH(3639);

    function hH(HH) {
      const BH = (0, SH.e)(HH);
      return (0, AH.Yb)(HH, void 0 === BH ? void 0 : (0, rH.displayNameOf)(BH))
    }

    function tH(HH, BH) {
      return HH(hH(BH))
    }
  },
  39370: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH,
      e: () => SH
    });
    const AH = new WeakMap;

    function rH(HH) {
      let BH = AH.get(HH);
      return BH || (BH = {
        hidden: HH.hidden,
        x: NaN,
        y: NaN
      }, AH.set(HH, BH)), BH
    }

    function SH(HH, BH) {
      const LH = rH(HH);
      LH.hidden !== BH && (LH.hidden = BH, HH.hidden = BH)
    }

    function hH(HH, BH, LH) {
      const AH = rH(HH);
      AH.x === BH && AH.y === LH || (AH.x = BH, AH.y = LH, HH.style.translate = `${BH}vw ${LH}vh`)
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);