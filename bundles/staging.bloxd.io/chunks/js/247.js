export const id = 247;
export const ids = [247];
export const modules = {
  40652: (dd, Od, md) => {
    md.d(Od, {
      d: () => Rd,
      f: () => Xd
    });
    var Wd = md(32);
    let Fd = !1;

    function Rd() {
      return Fd
    }

    function Xd(dd) {
      Fd !== dd && (Fd = dd, Wd.j.lQ("replayViewer|videoExportChanged"))
    }
  },
  38082: (dd, Od, md) => {
    md.d(Od, {
      b: () => od,
      c: () => Qd,
      g: () => Nd,
      i: () => td
    });
    var Wd = md(405),
      Fd = md(744),
      Rd = md(749),
      Xd = md(46);
    const Kd = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      hd = "playSessionGameNameWithVariation",
      vd = "wasMatchmakePlayer";

    function Qd() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xd.o;
      (0, Rd.g)(dd, Kd)
    }

    function td() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xd.o).setItem(vd, !0)
    }

    function od() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xd.o;
      return (0, Rd.c)(dd, Kd)
    }

    function Nd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xd.o;
      const md = (0, Rd.c)(Od, Kd),
        Qd = function(dd) {
          const Od = dd.getItem(hd);
          return "string" !== typeof Od ? null : Od
        }(Od),
        td = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xd.o).getItem(vd)
        }(Od);
      let od;
      return od = null !== md && null !== Qd && (0, Rd.d)(Od, Kd) && function(dd, Od, md) {
          const Fd = (0, Wd.Gb)(dd),
            Rd = (0, Wd.Gb)(Od),
            Xd = (0, Wd.Bb)(dd),
            Kd = (0, Wd.Bb)(Od);
          return !(Fd !== Rd || !md) || Fd === Rd && Xd === Kd
        }(Qd, dd, td) ? md : (0, Fd.f)(), (0, Rd.h)(Od, Kd, od), Od.setItem(hd, dd),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xd.o).removeItem(vd)
        }(Od), od
    }
  },
  42899: (dd, Od, md) => {
    md.d(Od, {
      d: () => Qd,
      f: () => Xd,
      g: () => hd,
      h: () => Rd,
      i: () => Kd,
      k: () => vd
    });
    let Wd = null,
      Fd = null;

    function Rd(dd, Od) {
      return Wd = dd, Fd = null, Kd(Od), () => {
        Wd === dd && (Wd = null, Fd = null)
      }
    }

    function Xd() {
      return null === Fd ? null : {
        ...Fd
      }
    }

    function Kd(dd) {
      var Od;
      null !== (Od = Wd) && void 0 !== Od && Od(dd) && (Fd = {
        ...dd
      })
    }

    function hd() {
      return "undefined" === typeof location ? null : function(dd) {
        const Od = new URLSearchParams(dd).get("renderDistanceMax");
        if (null === Od || !/^\d{1,2}$/.test(Od)) return null;
        const md = Number(Od);
        return md >= 1 && md <= 64 ? md : null
      }(location.search)
    }

    function vd(dd, Od) {
      return null === Od ? dd : {
        horizontal: Math.min(dd.horizontal, Od),
        vertical: dd.vertical
      }
    }

    function Qd(dd, Od) {
      return null === Od ? dd : vd(null !== dd && void 0 !== dd ? dd : {
        horizontal: 1 / 0,
        vertical: 1 / 0
      }, Od)
    }
  },
  42910: (dd, Od, md) => {
    md.d(Od, {
      c: () => Fd,
      e: () => Rd
    });
    let Wd = null;

    function Fd(dd, Od) {
      Wd = {
        conn: dd,
        reason: Od
      }
    }

    function Rd(dd) {
      var Od;
      const md = (null === (Od = Wd) || void 0 === Od ? void 0 : Od.conn) === dd ? Wd.reason : null;
      return Wd = null, md
    }
  },
  37837: (dd, Od, md) => {
    md.d(Od, {
      c: () => Qd,
      e: () => hd,
      i: () => Kd,
      j: () => vd
    });
    var Wd = md(2100);
    let Fd = null,
      Rd = 0;
    const Xd = new Set;

    function Kd() {
      return Fd
    }

    function hd() {
      return Rd
    }

    function vd(dd) {
      Fd = dd, Rd++, (0, Wd.d)();
      for (const Od of Xd) Od()
    }

    function Qd(dd) {
      Xd.add(dd)
    }
  },
  42961: (dd, Od, md) => {
    md.d(Od, {
      d: () => Rd,
      g: () => Fd
    });
    let Wd = {
      fire: () => {},
      close: () => {}
    };

    function Fd(dd) {
      Wd = dd
    }

    function Rd() {
      return Wd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);