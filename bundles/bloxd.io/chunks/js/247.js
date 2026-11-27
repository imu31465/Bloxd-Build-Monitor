export const id = 247;
export const ids = [247];
export const modules = {
  40646: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar,
      f: () => jr
    });
    var Zr = Qr(34);
    let Wr = !1;

    function ar() {
      return Wr
    }

    function jr(rr) {
      Wr !== rr && (Wr = rr, Zr.i.Jp("replayViewer|videoExportChanged"))
    }
  },
  38001: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => mr,
      h: () => pr,
      l: () => Nr,
      o: () => xr
    });
    var Zr = Qr(379),
      Wr = Qr(723),
      ar = Qr(731),
      jr = Qr(43);
    const Ir = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      fr = "playSessionGameNameWithVariation",
      Er = "wasMatchmakePlayer";

    function pr() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jr.n;
      (0, ar.h)(rr, Ir)
    }

    function xr() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jr.n).setItem(Er, !0)
    }

    function mr() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jr.n;
      return (0, ar.d)(rr, Ir)
    }

    function Nr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jr.n;
      const Qr = (0, ar.d)(Sr, Ir),
        pr = function(rr) {
          const Sr = rr.getItem(fr);
          return "string" !== typeof Sr ? null : Sr
        }(Sr),
        xr = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jr.n).getItem(Er)
        }(Sr);
      let mr;
      return mr = null !== Qr && null !== pr && (0, ar.e)(Sr, Ir) && function(rr, Sr, Qr) {
          const Wr = (0, Zr.Mb)(rr),
            ar = (0, Zr.Mb)(Sr),
            jr = (0, Zr.Hb)(rr),
            Ir = (0, Zr.Hb)(Sr);
          return !(Wr !== ar || !Qr) || Wr === ar && jr === Ir
        }(pr, rr, xr) ? Qr : (0, Wr.f)(), (0, ar.l)(Sr, Ir, mr), Sr.setItem(fr, rr),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jr.n).removeItem(Er)
        }(Sr), mr
    }
  },
  42776: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => pr,
      d: () => jr,
      f: () => fr,
      h: () => ar,
      l: () => Ir,
      p: () => Er
    });
    let Zr = null,
      Wr = null;

    function ar(rr, Sr) {
      return Zr = rr, Wr = null, Ir(Sr), () => {
        Zr === rr && (Zr = null, Wr = null)
      }
    }

    function jr() {
      return null === Wr ? null : {
        ...Wr
      }
    }

    function Ir(rr) {
      var Sr;
      null !== (Sr = Zr) && void 0 !== Sr && Sr(rr) && (Wr = {
        ...rr
      })
    }

    function fr() {
      return "undefined" === typeof location ? null : function(rr) {
        const Sr = new URLSearchParams(rr).get("renderDistanceMax");
        if (null === Sr || !/^\d{1,2}$/.test(Sr)) return null;
        const Qr = Number(Sr);
        return Qr >= 1 && Qr <= 64 ? Qr : null
      }(location.search)
    }

    function Er(rr, Sr) {
      return null === Sr ? rr : {
        horizontal: Math.min(rr.horizontal, Sr),
        vertical: rr.vertical
      }
    }

    function pr(rr, Sr) {
      return null === Sr ? rr : Er(null !== rr && void 0 !== rr ? rr : {
        horizontal: 1 / 0,
        vertical: 1 / 0
      }, Sr)
    }
  },
  42787: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Wr,
      g: () => ar
    });
    let Zr = null;

    function Wr(rr, Sr) {
      Zr = {
        conn: rr,
        reason: Sr
      }
    }

    function ar(rr) {
      var Sr;
      const Qr = (null === (Sr = Zr) || void 0 === Sr ? void 0 : Sr.conn) === rr ? Zr.reason : null;
      return Zr = null, Qr
    }
  },
  37726: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => pr,
      g: () => fr,
      j: () => Ir,
      k: () => Er
    });
    var Zr = Qr(2098);
    let Wr = null,
      ar = 0;
    const jr = new Set;

    function Ir() {
      return Wr
    }

    function fr() {
      return ar
    }

    function Er(rr) {
      Wr = rr, ar++, (0, Zr.b)();
      for (const Sr of jr) Sr()
    }

    function pr(rr) {
      jr.add(rr)
    }
  },
  42845: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar,
      e: () => Wr
    });
    let Zr = {
      fire: () => {},
      close: () => {}
    };

    function Wr(rr) {
      Zr = rr
    }

    function ar() {
      return Zr
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);