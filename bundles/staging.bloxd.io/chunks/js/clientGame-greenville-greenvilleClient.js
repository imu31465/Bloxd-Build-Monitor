export const id = 20;
export const ids = [20];
export const modules = {
  34867: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me
    });
    var ye = He(4931),
      be = He(4937);

    function Me(ee) {
      let {
        children: ie,
        showing: He,
        globallyUniqueKey: Me,
        alwaysMountChildren: Ke = !1,
        doGameplayStartStopOnShow: Ue = !0,
        keepsMovement: Fe = !1
      } = ee;
      return (0, be.e)(!0, He, Me, Fe), (0, ye.c)(Ue, He), He || Ke ? ie : null
    }
  },
  37509: (ee, ie, He) => {
    He.d(ie, {
      e: () => be
    });
    const ye = [{
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

    function be(ee, ie, He) {
      const be = Math.abs(ee - ie),
        Me = Date.now() - He;
      for (const Ke of ye)
        if (ee < Ke.maxDist) return be >= Ke.hardUpdateDist || Me > Ke.timeBetweenSoftChecks && be >= Ke.softUpdateDist;
      return !1
    }
  },
  39289: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ke,
      f: () => Ue
    });
    var ye = He(347),
      be = He(34897),
      Me = He(3608);

    function Ke(ee) {
      const ie = (0, Me.c)(ee);
      return (0, ye.Yb)(ee, void 0 === ie ? void 0 : (0, be.displayNameOf)(ie))
    }

    function Ue(ee, ie) {
      return ee(Ke(ie))
    }
  },
  39291: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      g: () => Me
    });
    const ye = new WeakMap;

    function be(ee) {
      let ie = ye.get(ee);
      return ie || (ie = {
        hidden: ee.hidden,
        x: NaN,
        y: NaN
      }, ye.set(ee, ie)), ie
    }

    function Me(ee, ie) {
      const He = be(ee);
      He.hidden !== ie && (He.hidden = ie, ee.hidden = ie)
    }

    function Ke(ee, ie, He) {
      const ye = be(ee);
      ye.x === ie && ye.y === He || (ye.x = ie, ye.y = He, ee.style.translate = `${ie}vw ${He}vh`)
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);