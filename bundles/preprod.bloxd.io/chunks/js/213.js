export const id = 213;
export const ids = [213];
export const modules = {
  39024: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq,
      c: () => mq
    });
    var Yq = gq(31);
    let lq = !1;

    function Oq() {
      return lq
    }

    function mq(qq) {
      lq !== qq && (lq = qq, Yq.i.TV("replayViewer|videoExportChanged"))
    }
  },
  36519: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Wq,
      f: () => uq,
      g: () => Nq,
      i: () => Bq
    });
    var Yq = gq(307),
      lq = gq(616),
      Oq = gq(632),
      mq = gq(38);
    const xq = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      Aq = "playSessionGameNameWithVariation",
      cq = "wasMatchmakePlayer";

    function uq() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mq.k;
      (0, Oq.f)(qq, xq)
    }

    function Bq() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mq.k).setItem(cq, !0)
    }

    function Wq() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mq.k;
      return (0, Oq.c)(qq, xq)
    }

    function Nq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mq.k;
      const gq = (0, Oq.c)(Eq, xq),
        uq = function(qq) {
          const Eq = qq.getItem(Aq);
          return "string" !== typeof Eq ? null : Eq
        }(Eq),
        Bq = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mq.k).getItem(cq)
        }(Eq);
      let Wq;
      return Wq = null !== gq && null !== uq && (0, Oq.d)(Eq, xq) && function(qq, Eq, gq) {
          const lq = (0, Yq.Yb)(qq),
            Oq = (0, Yq.Yb)(Eq),
            mq = (0, Yq.Tb)(qq),
            xq = (0, Yq.Tb)(Eq);
          return !(lq !== Oq || !gq) || lq === Oq && mq === xq
        }(uq, qq, Bq) ? gq : (0, lq.d)(), (0, Oq.h)(Eq, xq, Wq), Eq.setItem(Aq, qq),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mq.k).removeItem(cq)
        }(Eq), Wq
    }
  },
  40454: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => mq,
      i: () => Oq,
      k: () => xq
    });
    let Yq = null,
      lq = null;

    function Oq(qq, Eq) {
      return Yq = qq, lq = null, xq(Eq), () => {
        Yq === qq && (Yq = null, lq = null)
      }
    }

    function mq() {
      return null === lq ? null : {
        ...lq
      }
    }

    function xq(qq) {
      var Eq;
      null !== (Eq = Yq) && void 0 !== Eq && Eq(qq) && (lq = {
        ...qq
      })
    }
  },
  40440: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => lq,
      g: () => Oq
    });
    let Yq = null;

    function lq(qq, Eq) {
      Yq = {
        conn: qq,
        reason: Eq
      }
    }

    function Oq(qq) {
      var Eq;
      const gq = (null === (Eq = Yq) || void 0 === Eq ? void 0 : Eq.conn) === qq ? Yq.reason : null;
      return Yq = null, gq
    }
  },
  40415: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Oq,
      h: () => lq
    });
    let Yq = {
      fire: () => {},
      close: () => {}
    };

    function lq(qq) {
      Yq = qq
    }

    function Oq() {
      return Yq
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);