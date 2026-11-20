export const id = 212;
export const ids = [212];
export const modules = {
  38613: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => ev,
      e: () => gv
    });
    var hv = Pv(26);
    let Sv = !1;

    function ev() {
      return Sv
    }

    function gv(vv) {
      Sv !== vv && (Sv = vv, hv.j.zC("replayViewer|videoExportChanged"))
    }
  },
  36010: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Wv,
      g: () => lv,
      k: () => wv,
      m: () => Tv
    });
    var hv = Pv(312),
      Sv = Pv(646),
      ev = Pv(656),
      gv = Pv(39);
    const pv = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      dv = "playSessionGameNameWithVariation",
      Nv = "wasMatchmakePlayer";

    function lv() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gv.l;
      (0, ev.i)(vv, pv)
    }

    function Tv() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gv.l).setItem(Nv, !0)
    }

    function Wv() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gv.l;
      return (0, ev.d)(vv, pv)
    }

    function wv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gv.l;
      const Pv = (0, ev.d)(zv, pv),
        lv = function(vv) {
          const zv = vv.getItem(dv);
          return "string" !== typeof zv ? null : zv
        }(zv),
        Tv = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gv.l).getItem(Nv)
        }(zv);
      let Wv;
      return Wv = null !== Pv && null !== lv && (0, ev.g)(zv, pv) && function(vv, zv, Pv) {
          const Sv = (0, hv.Pb)(vv),
            ev = (0, hv.Pb)(zv),
            gv = (0, hv.Kb)(vv),
            pv = (0, hv.Kb)(zv);
          return !(Sv !== ev || !Pv) || Sv === ev && gv === pv
        }(lv, vv, Tv) ? Pv : (0, Sv.d)(), (0, ev.j)(zv, pv, Wv), zv.setItem(dv, vv),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gv.l).removeItem(Nv)
        }(zv), Wv
    }
  },
  40029: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => gv,
      f: () => ev,
      g: () => pv
    });
    let hv = null,
      Sv = null;

    function ev(vv, zv) {
      return hv = vv, Sv = null, pv(zv), () => {
        hv === vv && (hv = null, Sv = null)
      }
    }

    function gv() {
      return null === Sv ? null : {
        ...Sv
      }
    }

    function pv(vv) {
      var zv;
      null !== (zv = hv) && void 0 !== zv && zv(vv) && (Sv = {
        ...vv
      })
    }
  },
  40021: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Sv,
      f: () => ev
    });
    let hv = null;

    function Sv(vv, zv) {
      hv = {
        conn: vv,
        reason: zv
      }
    }

    function ev(vv) {
      var zv;
      const Pv = (null === (zv = hv) || void 0 === zv ? void 0 : zv.conn) === vv ? hv.reason : null;
      return hv = null, Pv
    }
  },
  39996: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => ev,
      i: () => Sv
    });
    let hv = {
      fire: () => {},
      close: () => {}
    };

    function Sv(vv) {
      hv = vv
    }

    function ev() {
      return hv
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);