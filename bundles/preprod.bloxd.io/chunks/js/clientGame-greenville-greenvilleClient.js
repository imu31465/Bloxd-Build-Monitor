export const id = 20;
export const ids = [20];
export const modules = {
  34859: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU
    });
    var cU = zU(4977),
      yU = zU(4982);

    function QU(UU) {
      let {
        children: XU,
        showing: zU,
        globallyUniqueKey: QU,
        alwaysMountChildren: AU = !1,
        doGameplayStartStopOnShow: FU = !0,
        keepsMovement: oU = !1
      } = UU;
      return (0, yU.c)(!0, zU, QU, oU), (0, cU.d)(FU, zU), zU || AU ? XU : null
    }
  },
  37414: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => yU
    });
    const cU = [{
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

    function yU(UU, XU, zU) {
      const yU = Math.abs(UU - XU),
        QU = Date.now() - zU;
      for (const AU of cU)
        if (UU < AU.maxDist) return yU >= AU.hardUpdateDist || QU > AU.timeBetweenSoftChecks && yU >= AU.softUpdateDist;
      return !1
    }
  },
  39271: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => AU,
      h: () => FU
    });
    var cU = zU(344),
      yU = zU(34884),
      QU = zU(3660);

    function AU(UU) {
      const XU = (0, QU.c)(UU);
      return (0, cU.Wb)(UU, void 0 === XU ? void 0 : (0, yU.displayNameOf)(XU))
    }

    function FU(UU, XU) {
      return UU(AU(XU))
    }
  },
  39278: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU,
      g: () => QU
    });
    const cU = new WeakMap;

    function yU(UU) {
      let XU = cU.get(UU);
      return XU || (XU = {
        hidden: UU.hidden,
        x: NaN,
        y: NaN
      }, cU.set(UU, XU)), XU
    }

    function QU(UU, XU) {
      const zU = yU(UU);
      zU.hidden !== XU && (zU.hidden = XU, UU.hidden = XU)
    }

    function AU(UU, XU, zU) {
      const cU = yU(UU);
      cU.x === XU && cU.y === zU || (cU.x = XU, cU.y = zU, UU.style.translate = `${XU}vw ${zU}vh`)
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);