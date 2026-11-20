export const id = 212;
export const ids = [212];
export const modules = {
  38836: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Qu,
      c: () => mu
    });
    var Eu = yu(34);
    let Ku = !1;

    function Qu() {
      return Ku
    }

    function mu(uu) {
      Ku !== uu && (Ku = uu, Eu.k.Op("replayViewer|videoExportChanged"))
    }
  },
  36322: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Bu,
      h: () => Vu,
      l: () => xu,
      n: () => ru
    });
    var Eu = yu(343),
      Ku = yu(631),
      Qu = yu(642),
      mu = yu(47);
    const Ju = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      Nu = "playSessionGameNameWithVariation",
      Xu = "wasMatchmakePlayer";

    function Vu() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mu.j;
      (0, Qu.h)(uu, Ju)
    }

    function ru() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mu.j).setItem(Xu, !0)
    }

    function Bu() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mu.j;
      return (0, Qu.c)(uu, Ju)
    }

    function xu(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mu.j;
      const yu = (0, Qu.c)(Ru, Ju),
        Vu = function(uu) {
          const Ru = uu.getItem(Nu);
          return "string" !== typeof Ru ? null : Ru
        }(Ru),
        ru = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mu.j).getItem(Xu)
        }(Ru);
      let Bu;
      return Bu = null !== yu && null !== Vu && (0, Qu.e)(Ru, Ju) && function(uu, Ru, yu) {
          const Ku = (0, Eu.cc)(uu),
            Qu = (0, Eu.cc)(Ru),
            mu = (0, Eu.Wb)(uu),
            Ju = (0, Eu.Wb)(Ru);
          return !(Ku !== Qu || !yu) || Ku === Qu && mu === Ju
        }(Vu, uu, ru) ? yu : (0, Ku.d)(), (0, Qu.i)(Ru, Ju, Bu), Ru.setItem(Nu, uu),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mu.j).removeItem(Xu)
        }(Ru), Bu
    }
  },
  40302: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => mu,
      g: () => Qu,
      k: () => Ju
    });
    let Eu = null,
      Ku = null;

    function Qu(uu, Ru) {
      return Eu = uu, Ku = null, Ju(Ru), () => {
        Eu === uu && (Eu = null, Ku = null)
      }
    }

    function mu() {
      return null === Ku ? null : {
        ...Ku
      }
    }

    function Ju(uu) {
      var Ru;
      null !== (Ru = Eu) && void 0 !== Ru && Ru(uu) && (Ku = {
        ...uu
      })
    }
  },
  40292: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku,
      g: () => Qu
    });
    let Eu = null;

    function Ku(uu, Ru) {
      Eu = {
        conn: uu,
        reason: Ru
      }
    }

    function Qu(uu) {
      var Ru;
      const yu = (null === (Ru = Eu) || void 0 === Ru ? void 0 : Ru.conn) === uu ? Eu.reason : null;
      return Eu = null, yu
    }
  },
  40265: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu,
      g: () => Ku
    });
    let Eu = {
      fire: () => {},
      close: () => {}
    };

    function Ku(uu) {
      Eu = uu
    }

    function Qu() {
      return Eu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);