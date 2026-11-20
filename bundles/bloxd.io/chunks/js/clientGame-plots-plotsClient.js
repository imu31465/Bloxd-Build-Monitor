export const id = 22;
export const ids = [22];
export const modules = {
  36436: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => xu,
      d: () => Su,
      g: () => Bu,
      h: () => ru
    });
    var Eu = yu(9048),
      Ku = yu(36445),
      Qu = yu(36449),
      mu = yu(8447),
      Ju = yu(1400),
      Nu = yu(64),
      Xu = yu(80),
      Vu = yu(1079);

    function ru() {
      var uu;
      return (0, Ju.h)(Ku.c, (0, Ku.o)()), (0, Vu.jsx)(Vu.Fragment, {
        children: null === (uu = (0, Ku.o)()) || void 0 === uu ? void 0 : uu.content
      })
    }

    function Bu(uu) {
      var Ru;
      let {
        show: yu
      } = uu;
      (0, Ju.h)(Ku.c, (0, Ku.o)());
      const Xu = null === (Ru = (0, Ku.o)()) || void 0 === Ru ? void 0 : Ru.menu;
      return (0, Nu.useEffect)((() => {
        var uu;
        yu || (null === Xu || void 0 === Xu || null === (uu = Xu.onClose) || void 0 === uu || uu.call(Xu), (0, Qu.p)())
      }), [yu, Xu]), (0, Nu.useEffect)((() => yu ? (0, mu.g)(Qu.v, Qu.d) : void 0), [yu]), (0, Vu.jsx)(Eu.c, {
        showing: yu,
        globallyUniqueKey: "clientGameMenu",
        children: null === Xu || void 0 === Xu ? void 0 : Xu.content
      })
    }

    function xu(uu) {
      let {
        placement: Ru = "bottom"
      } = uu;
      return (0, Vu.jsx)("div", {
        id: `clientGameHud-${Ru}`,
        style: {
          display: "contents"
        }
      })
    }

    function Su(uu) {
      let {
        children: Ru,
        placement: yu = "bottom"
      } = uu;
      const [Eu, Ku] = (0, Nu.useState)(null);
      return (0, Nu.useEffect)((() => {
        Ku(document.getElementById(`clientGameHud-${yu}`))
      }), [yu]), Eu ? (0, Xu.createPortal)(Ru, Eu) : null
    }
  },
  9048: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu
    });
    var Eu = yu(4307),
      Ku = yu(4314);

    function Qu(uu) {
      let {
        children: Ru,
        showing: yu,
        globallyUniqueKey: Qu,
        alwaysMountChildren: mu = !1,
        doGameplayStartStopOnShow: Ju = !0,
        keepsMovement: Nu = !1
      } = uu;
      return (0, Ku.c)(!0, yu, Qu, Nu), (0, Eu.e)(Ju, yu), yu || mu ? Ru : null
    }
  },
  36532: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Qu,
      c: () => mu,
      d: () => Ju,
      g: () => Nu
    });
    var Eu = yu(64),
      Ku = yu(1100);
    const Qu = 8,
      mu = "InGameHeaderContainer",
      Ju = "TopRightElements";

    function Nu(uu) {
      const [Ru] = (0, Ku.d)(), [yu, Nu] = (0, Eu.useState)(!1);
      return (0, Eu.useLayoutEffect)((() => {
        if (!uu) return;
        const Ru = document.querySelector(`.${mu}`),
          yu = document.querySelector(`.${Ju}`),
          Eu = () => {
            const Eu = uu.getBoundingClientRect(),
              Ku = Ru ? Ru.getBoundingClientRect().right : 0,
              mu = yu ? yu.getBoundingClientRect().left : window.innerWidth,
              Ju = Eu.left < Ku + Qu,
              Xu = Eu.right > mu - Qu;
            Nu(Ju || Xu)
          };
        Eu();
        const Ku = new ResizeObserver(Eu);
        return Ku.observe(uu), Ru && Ku.observe(Ru), yu && Ku.observe(yu), () => {
          Ku.disconnect()
        }
      }), [uu, Ru]), yu
    }
  },
  8447: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu,
      g: () => Ku
    });
    let Eu = null;
    const Ku = function(uu) {
        const Ru = {
          cycle: uu,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Eu = Ru, () => {
          Eu === Ru && (Eu = null)
        }
      },
      Qu = () => {
        var uu;
        return null !== (uu = Eu) && void 0 !== uu && uu.canCycle() ? Eu.cycle : null
      }
  },
  36449: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu,
      d: () => pu,
      h: () => Tu,
      k: () => Ju,
      o: () => Bu,
      p: () => Wu,
      q: () => ru,
      u: () => Hu,
      v: () => Su,
      w: () => ju
    });
    var Eu = yu(27),
      Ku = yu(34);
    const Qu = "clientGameInventoryButtonsChanged",
      mu = new Map;

    function Ju() {
      return [...mu.values()].sort(((uu, Ru) => {
        var yu, Eu;
        return (null !== (yu = uu.order) && void 0 !== yu ? yu : 0) - (null !== (Eu = Ru.order) && void 0 !== Eu ? Eu : 0)
      }))
    }
    let Nu = null;

    function Xu(uu) {
      Nu = uu
    }
    let Vu = !1;

    function ru(uu) {
      Vu = !0;
      try {
        uu.onClick()
      } finally {
        Vu = !1
      }
      uu.panel && "clientGame" === Eu.d.get("openInGameMenuName") && Xu(uu.id)
    }

    function Bu() {
      return Vu
    }

    function xu() {
      return Ju().filter((uu => uu.panel && !uu.disabled))
    }

    function Su(uu) {
      const Ru = xu(),
        yu = Ru.findIndex((uu => uu.id === Nu));
      return !(yu < 0 || Ru.length < 2) && (ru(Ru[(yu + uu + Ru.length) % Ru.length]), !0)
    }

    function pu() {
      return null !== Nu && xu().length > 1
    }

    function Tu() {
      Xu(null)
    }

    function Wu() {
      "inventory" !== Eu.d.get("openInGameMenuName") && Xu(null)
    }

    function ju() {
      const uu = Nu;
      return Xu(null), uu
    }

    function Hu(uu) {
      return mu.set(uu.id, uu), Ku.k.Op(Qu, Ju(), !0), () => {
        mu.get(uu.id) === uu && (mu.delete(uu.id), Ku.k.Op(Qu, Ju()))
      }
    }
  },
  36445: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ju,
      f: () => Tu,
      i: () => Wu,
      m: () => Bu,
      o: () => Xu,
      q: () => pu,
      u: () => xu,
      w: () => Vu
    });
    var Eu = yu(27),
      Ku = yu(34),
      Qu = yu(1250),
      mu = yu(36449);
    const Ju = "clientGameUiChanged";
    let Nu = null;

    function Xu() {
      return Nu
    }

    function Vu(uu, Ru) {
      const yu = {
        content: uu,
        menu: Ru
      };
      return Nu = yu, Ku.k.Op(Ju, Nu, !0), () => {
        Nu === yu && (Nu = null, Su = !1, Tu(), Ku.k.Op(Ju, null))
      }
    }
    let ru = null;

    function Bu() {
      return ru
    }

    function xu(uu) {
      return ru = uu, () => {
        ru === uu && (ru = null)
      }
    }
    let Su = !1;

    function pu() {
      const uu = Eu.d.get("openInGameMenuName");
      "clientGame" !== uu && (Su = "inventory" === uu), (0, mu.o)() || (0, mu.h)(), (0, Qu.o)(Qu.b), Eu.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Tu() {
      ju(!1)
    }

    function Wu() {
      ju(Su)
    }

    function ju(uu) {
      "clientGame" === Eu.d.get("openInGameMenuName") && Eu.d.set({
        openInGameMenuName: uu ? "inventory" : null
      }), uu || (0, mu.h)(), Su = !1
    }
  },
  38281: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => mu,
      i: () => Ju,
      l: () => Nu
    });
    const Eu = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      Ku = [0, 1, 2, 0, 2, 3],
      Qu = [4, 5];

    function mu(uu, Ru, yu, Eu, Ku) {
      for (let mu = 0; mu < 6; mu++) Qu.includes(mu) === Ku && Xu(uu, Ru, yu, Eu, mu)
    }

    function Ju(uu, Ru, yu, Eu) {
      for (let Ku = 0; Ku < 6; Ku++) Xu(uu, Ru, yu, Eu, Ku)
    }

    function Nu(uu, Ru, yu, Qu, mu) {
      for (let Ju = 0; Ju < 6; Ju++)
        for (const Nu of [0, 1]) {
          const [Xu, Vu, ru] = [Nu + 2, Nu + 1, (Nu + 3) % 4], Bu = uu.length / 3;
          for (const [Ru, Ku] of [
              [Nu, Vu],
              [Xu, Vu],
              [Xu, ru],
              [Nu, ru]
            ])
            for (let Nu = 0; Nu < 3; Nu++) {
              const Xu = Eu[3 * (4 * Ju + Ru) + Nu],
                Vu = Eu[3 * (4 * Ju + Ku) + Nu];
              uu.push((Xu + (Vu - Xu) * mu) * Qu / 2 + yu[Nu])
            }
          for (const uu of Ku) Ru.push(Bu + uu)
        }
    }

    function Xu(uu, Ru, yu, Qu, mu) {
      let [Ju, Nu, Xu] = yu, [Vu, ru, Bu] = Qu;
      const xu = uu.length / 3;
      for (let Ku = 4 * mu; Ku < 4 * mu + 4; Ku++) uu.push(Eu[3 * Ku] * Vu / 2 + Ju, Eu[3 * Ku + 1] * ru / 2 + Nu, Eu[3 * Ku + 2] * Bu / 2 + Xu);
      for (const Eu of Ku) Ru.push(xu + Eu)
    }
  },
  36670: (uu, Ru, yu) => {
    function Eu(uu, Ru) {
      return null === uu || null === Ru ? uu === Ru : uu[0] === Ru[0] && uu[1] === Ru[1] && uu[2] === Ru[2]
    }

    function Ku(uu) {
      return [uu[0] + .5, uu[1] + .5, uu[2] + .5]
    }
    yu.d(Ru, {
      b: () => Ku,
      f: () => Eu
    })
  },
  36707: (uu, Ru, yu) => {
    function Eu(uu) {
      return uu.includes("Leaf Bed")
    }

    function Ku(uu) {
      return / Bed(?: Head)?(?:\||$)/.test(uu) && !Eu(uu)
    }

    function Qu(uu) {
      return uu.includes(" Strongbed")
    }

    function mu(uu) {
      return Eu(uu) || Ku(uu) || Qu(uu)
    }
    yu.d(Ru, {
      b: () => mu,
      d: () => Eu,
      e: () => Qu,
      f: () => Ku
    })
  },
  36702: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Xu
    });
    var Eu = yu(36707),
      Ku = yu(9158);
    const Qu = [],
      mu = [],
      Ju = [],
      Nu = [];
    for (const Vu of Object.keys(Ku.q))(0, Eu.d)(Vu) ? Qu.push(Vu) : (0, Eu.f)(Vu) && mu.push(Vu), (0, Eu.e)(Vu) && Ju.push(Vu), (Vu.includes(" Bed Head") || Vu.includes(" Strongbed Head")) && Nu.push(Vu);
    const Xu = {
      leafBeds: Qu,
      woolBeds: mu,
      strongBeds: Ju,
      beds: [...Qu, ...mu, ...Ju],
      bedHeads: Nu,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);