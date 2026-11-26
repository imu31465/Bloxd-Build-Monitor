export const id = 20;
export const ids = [20];
export const modules = {
  34790: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => QB
    });
    var YB = GB(4949),
      DB = GB(4956);

    function QB(BB) {
      let {
        children: OB,
        showing: GB,
        globallyUniqueKey: QB,
        alwaysMountChildren: oB = !1,
        doGameplayStartStopOnShow: jB = !0,
        keepsMovement: yB = !1
      } = BB;
      return (0, DB.e)(!0, GB, QB, yB), (0, YB.c)(jB, GB), GB || oB ? OB : null
    }
  },
  37361: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB
    });
    const YB = [{
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

    function DB(BB, OB, GB) {
      const DB = Math.abs(BB - OB),
        QB = Date.now() - GB;
      for (const oB of YB)
        if (BB < oB.maxDist) return DB >= oB.hardUpdateDist || QB > oB.timeBetweenSoftChecks && DB >= oB.softUpdateDist;
      return !1
    }
  },
  39151: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB,
      g: () => jB
    });
    var YB = GB(353),
      DB = GB(34813),
      QB = GB(3708);

    function oB(BB) {
      const OB = (0, QB.c)(BB);
      return (0, YB.bc)(BB, void 0 === OB ? void 0 : (0, DB.displayNameOf)(OB))
    }

    function jB(BB, OB) {
      return BB(oB(OB))
    }
  },
  39154: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB,
      f: () => QB
    });
    const YB = new WeakMap;

    function DB(BB) {
      let OB = YB.get(BB);
      return OB || (OB = {
        hidden: BB.hidden,
        x: NaN,
        y: NaN
      }, YB.set(BB, OB)), OB
    }

    function QB(BB, OB) {
      const GB = DB(BB);
      GB.hidden !== OB && (GB.hidden = OB, BB.hidden = OB)
    }

    function oB(BB, OB, GB) {
      const YB = DB(BB);
      YB.x === OB && YB.y === GB || (YB.x = OB, YB.y = GB, BB.style.translate = `${OB}vw ${GB}vh`)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);