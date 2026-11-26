export const id = 244;
export const ids = [244];
export const modules = {
  39782: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => QB,
      e: () => oB
    });
    var YB = GB(25);
    let DB = !1;

    function QB() {
      return DB
    }

    function oB(BB) {
      DB !== BB && (DB = BB, YB.o.tM("replayViewer|videoExportChanged"))
    }
  },
  37139: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => zB,
      d: () => MB,
      g: () => lB,
      h: () => PB
    });
    var YB = GB(353),
      DB = GB(675),
      QB = GB(679),
      oB = GB(31);
    const jB = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      yB = "playSessionGameNameWithVariation",
      JB = "wasMatchmakePlayer";

    function MB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oB.i;
      (0, QB.h)(BB, jB)
    }

    function PB() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oB.i).setItem(JB, !0)
    }

    function zB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oB.i;
      return (0, QB.e)(BB, jB)
    }

    function lB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oB.i;
      const GB = (0, QB.e)(OB, jB),
        MB = function(BB) {
          const OB = BB.getItem(yB);
          return "string" !== typeof OB ? null : OB
        }(OB),
        PB = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oB.i).getItem(JB)
        }(OB);
      let zB;
      return zB = null !== GB && null !== MB && (0, QB.f)(OB, jB) && function(BB, OB, GB) {
          const DB = (0, YB.ac)(BB),
            QB = (0, YB.ac)(OB),
            oB = (0, YB.Xb)(BB),
            jB = (0, YB.Xb)(OB);
          return !(DB !== QB || !GB) || DB === QB && oB === jB
        }(MB, BB, PB) ? GB : (0, DB.d)(), (0, QB.k)(OB, jB, zB), OB.setItem(yB, BB),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oB.i).removeItem(JB)
        }(OB), zB
    }
  },
  41924: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => MB,
      h: () => oB,
      i: () => yB,
      m: () => QB,
      o: () => jB,
      p: () => JB
    });
    let YB = null,
      DB = null;

    function QB(BB, OB) {
      return YB = BB, DB = null, jB(OB), () => {
        YB === BB && (YB = null, DB = null)
      }
    }

    function oB() {
      return null === DB ? null : {
        ...DB
      }
    }

    function jB(BB) {
      var OB;
      null !== (OB = YB) && void 0 !== OB && OB(BB) && (DB = {
        ...BB
      })
    }

    function yB() {
      return "undefined" === typeof location ? null : function(BB) {
        const OB = new URLSearchParams(BB).get("renderDistanceMax");
        if (null === OB || !/^\d{1,2}$/.test(OB)) return null;
        const GB = Number(OB);
        return GB >= 1 && GB <= 64 ? GB : null
      }(location.search)
    }

    function JB(BB, OB) {
      return null === OB ? BB : {
        horizontal: Math.min(BB.horizontal, OB),
        vertical: BB.vertical
      }
    }

    function MB(BB, OB) {
      return null === OB ? BB : JB(null !== BB && void 0 !== BB ? BB : {
        horizontal: 1 / 0,
        vertical: 1 / 0
      }, OB)
    }
  },
  41935: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => DB,
      h: () => QB
    });
    let YB = null;

    function DB(BB, OB) {
      YB = {
        conn: BB,
        reason: OB
      }
    }

    function QB(BB) {
      var OB;
      const GB = (null === (OB = YB) || void 0 === OB ? void 0 : OB.conn) === BB ? YB.reason : null;
      return YB = null, GB
    }
  },
  42004: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB,
      f: () => DB
    });
    let YB = {
      fire: () => {},
      close: () => {}
    };

    function DB(BB) {
      YB = BB
    }

    function QB() {
      return YB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);