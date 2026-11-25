export const id = 20;
export const ids = [20];
export const modules = {
  35017: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM
    });
    var OM = iM(4919),
      SM = iM(4923);

    function jM(MM) {
      let {
        children: rM,
        showing: iM,
        globallyUniqueKey: jM,
        alwaysMountChildren: aM = !1,
        doGameplayStartStopOnShow: PM = !0,
        keepsMovement: nM = !1
      } = MM;
      return (0, SM.c)(!0, iM, jM, nM), (0, OM.c)(PM, iM), iM || aM ? rM : null
    }
  },
  37624: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => SM
    });
    const OM = [{
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

    function SM(MM, rM, iM) {
      const SM = Math.abs(MM - rM),
        jM = Date.now() - iM;
      for (const aM of OM)
        if (MM < aM.maxDist) return SM >= aM.hardUpdateDist || jM > aM.timeBetweenSoftChecks && SM >= aM.softUpdateDist;
      return !1
    }
  },
  39485: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM,
      e: () => PM
    });
    var OM = iM(332),
      SM = iM(35037),
      jM = iM(3693);

    function aM(MM) {
      const rM = (0, jM.d)(MM);
      return (0, OM.Qb)(MM, void 0 === rM ? void 0 : (0, SM.displayNameOf)(rM))
    }

    function PM(MM, rM) {
      return MM(aM(rM))
    }
  },
  39491: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => aM,
      e: () => jM
    });
    const OM = new WeakMap;

    function SM(MM) {
      let rM = OM.get(MM);
      return rM || (rM = {
        hidden: MM.hidden,
        x: NaN,
        y: NaN
      }, OM.set(MM, rM)), rM
    }

    function jM(MM, rM) {
      const iM = SM(MM);
      iM.hidden !== rM && (iM.hidden = rM, MM.hidden = rM)
    }

    function aM(MM, rM, iM) {
      const OM = SM(MM);
      OM.x === rM && OM.y === iM || (OM.x = rM, OM.y = iM, MM.style.translate = `${rM}vw ${iM}vh`)
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);