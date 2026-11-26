export const id = 20;
export const ids = [20];
export const modules = {
  35300: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV
    });
    var JV = xV(5015),
      YV = xV(5020);

    function UV(VV) {
      let {
        children: eV,
        showing: xV,
        globallyUniqueKey: UV,
        alwaysMountChildren: yV = !1,
        doGameplayStartStopOnShow: pV = !0,
        keepsMovement: QV = !1
      } = VV;
      return (0, YV.b)(!0, xV, UV, QV), (0, JV.c)(pV, xV), xV || yV ? eV : null
    }
  },
  37849: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => YV
    });
    const JV = [{
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

    function YV(VV, eV, xV) {
      const YV = Math.abs(VV - eV),
        UV = Date.now() - xV;
      for (const yV of JV)
        if (VV < yV.maxDist) return YV >= yV.hardUpdateDist || UV > yV.timeBetweenSoftChecks && YV >= yV.softUpdateDist;
      return !1
    }
  },
  39645: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV,
      e: () => pV
    });
    var JV = xV(375),
      YV = xV(35319),
      UV = xV(3719);

    function yV(VV) {
      const eV = (0, UV.d)(VV);
      return (0, JV.Sb)(VV, void 0 === eV ? void 0 : (0, YV.displayNameOf)(eV))
    }

    function pV(VV, eV) {
      return VV(yV(eV))
    }
  },
  39648: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => yV,
      f: () => UV
    });
    const JV = new WeakMap;

    function YV(VV) {
      let eV = JV.get(VV);
      return eV || (eV = {
        hidden: VV.hidden,
        x: NaN,
        y: NaN
      }, JV.set(VV, eV)), eV
    }

    function UV(VV, eV) {
      const xV = YV(VV);
      xV.hidden !== eV && (xV.hidden = eV, VV.hidden = eV)
    }

    function yV(VV, eV, xV) {
      const JV = YV(VV);
      JV.x === eV && JV.y === xV || (JV.x = eV, JV.y = xV, VV.style.translate = `${eV}vw ${xV}vh`)
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);