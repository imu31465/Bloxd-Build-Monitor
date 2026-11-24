export const id = 218;
export const ids = [218];
export const modules = {
  39209: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => am,
      d: () => xm
    });
    var hm = fm(31);
    let Am = !1;

    function am() {
      return Am
    }

    function xm(mm) {
      Am !== mm && (Am = mm, hm.j.gp("replayViewer|videoExportChanged"))
    }
  },
  36549: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Em,
      f: () => Rm,
      i: () => om,
      l: () => pm
    });
    var hm = fm(354),
      Am = fm(685),
      am = fm(695),
      xm = fm(37);
    const wm = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      Dm = "playSessionGameNameWithVariation",
      im = "wasMatchmakePlayer";

    function Rm() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xm.k;
      (0, am.i)(mm, wm)
    }

    function pm() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xm.k).setItem(im, !0)
    }

    function Em() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xm.k;
      return (0, am.d)(mm, wm)
    }

    function om(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xm.k;
      const fm = (0, am.d)(Tm, wm),
        Rm = function(mm) {
          const Tm = mm.getItem(Dm);
          return "string" !== typeof Tm ? null : Tm
        }(Tm),
        pm = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xm.k).getItem(im)
        }(Tm);
      let Em;
      return Em = null !== fm && null !== Rm && (0, am.f)(Tm, wm) && function(mm, Tm, fm) {
          const Am = (0, hm.Pb)(mm),
            am = (0, hm.Pb)(Tm),
            xm = (0, hm.Jb)(mm),
            wm = (0, hm.Jb)(Tm);
          return !(Am !== am || !fm) || Am === am && xm === wm
        }(Rm, mm, pm) ? fm : (0, Am.b)(), (0, am.k)(Tm, wm, Em), Tm.setItem(Dm, mm),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xm.k).removeItem(im)
        }(Tm), Em
    }
  },
  40992: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => xm,
      h: () => am,
      i: () => wm
    });
    let hm = null,
      Am = null;

    function am(mm, Tm) {
      return hm = mm, Am = null, wm(Tm), () => {
        hm === mm && (hm = null, Am = null)
      }
    }

    function xm() {
      return null === Am ? null : {
        ...Am
      }
    }

    function wm(mm) {
      var Tm;
      null !== (Tm = hm) && void 0 !== Tm && Tm(mm) && (Am = {
        ...mm
      })
    }
  },
  41009: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Am,
      g: () => am
    });
    let hm = null;

    function Am(mm, Tm) {
      hm = {
        conn: mm,
        reason: Tm
      }
    }

    function am(mm) {
      var Tm;
      const fm = (null === (Tm = hm) || void 0 === Tm ? void 0 : Tm.conn) === mm ? hm.reason : null;
      return hm = null, fm
    }
  },
  41057: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => am,
      d: () => Am
    });
    let hm = {
      fire: () => {},
      close: () => {}
    };

    function Am(mm) {
      hm = mm
    }

    function am() {
      return hm
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);