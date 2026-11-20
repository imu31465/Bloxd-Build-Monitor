export const id = 11;
export const ids = [11];
export const modules = {
  36648: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Nq,
      g: () => aq,
      h: () => Wq,
      j: () => Bq
    });
    var Yq = gq(9277),
      lq = gq(36657),
      Oq = gq(36662),
      mq = gq(8669),
      xq = gq(1416),
      Aq = gq(57),
      cq = gq(71),
      uq = gq(1070);

    function Bq() {
      var qq;
      return (0, xq.h)(lq.c, (0, lq.l)()), (0, uq.jsx)(uq.Fragment, {
        children: null === (qq = (0, lq.l)()) || void 0 === qq ? void 0 : qq.content
      })
    }

    function Wq(qq) {
      var Eq;
      let {
        show: gq
      } = qq;
      (0, xq.h)(lq.c, (0, lq.l)());
      const cq = null === (Eq = (0, lq.l)()) || void 0 === Eq ? void 0 : Eq.menu;
      return (0, Aq.useEffect)((() => {
        var qq;
        gq || (null === cq || void 0 === cq || null === (qq = cq.onClose) || void 0 === qq || qq.call(cq), (0, Oq.m)())
      }), [gq, cq]), (0, Aq.useEffect)((() => gq ? (0, mq.i)(Oq.r, Oq.d) : void 0), [gq]), (0, uq.jsx)(Yq.b, {
        showing: gq,
        globallyUniqueKey: "clientGameMenu",
        children: null === cq || void 0 === cq ? void 0 : cq.content
      })
    }

    function Nq(qq) {
      let {
        placement: Eq = "bottom"
      } = qq;
      return (0, uq.jsx)("div", {
        id: `clientGameHud-${Eq}`,
        style: {
          display: "contents"
        }
      })
    }

    function aq(qq) {
      let {
        children: Eq,
        placement: gq = "bottom"
      } = qq;
      const [Yq, lq] = (0, Aq.useState)(null);
      return (0, Aq.useEffect)((() => {
        lq(document.getElementById(`clientGameHud-${gq}`))
      }), [gq]), Yq ? (0, cq.createPortal)(Eq, Yq) : null
    }
  },
  9277: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq
    });
    var Yq = gq(4364),
      lq = gq(4367);

    function Oq(qq) {
      let {
        children: Eq,
        showing: gq,
        globallyUniqueKey: Oq,
        alwaysMountChildren: mq = !1,
        doGameplayStartStopOnShow: xq = !0,
        keepsMovement: Aq = !1
      } = qq;
      return (0, lq.e)(!0, gq, Oq, Aq), (0, Yq.d)(xq, gq), gq || mq ? Eq : null
    }
  },
  4858: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => mq
    });
    var Yq = gq(1018),
      lq = gq.n(Yq),
      Oq = gq(1070);

    function mq(qq) {
      let {
        options: Eq,
        value: gq,
        onChange: Yq,
        ariaLabel: mq,
        className: xq,
        reselectable: Aq = !1,
        keepsFocus: cq = !1,
        padTabs: uq
      } = qq;
      const Bq = void 0 !== uq;
      return (0, Oq.jsx)("div", {
        className: lq()("SegmentedToggle", xq),
        role: "group",
        "aria-label": mq,
        "data-pad-tabs": uq,
        children: Eq.map((qq => {
          const Eq = qq.value === gq;
          return (0, Oq.jsx)("button", {
            type: "button",
            "aria-pressed": Eq,
            "data-pad-tab": Bq || void 0,
            "data-pad-selected": Bq && Eq ? "true" : void 0,
            "data-pad-default-focus": Bq && Eq || void 0,
            "aria-label": qq.ariaLabel,
            title: qq.ariaLabel,
            className: lq()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: Eq
            }),
            onMouseDown: cq ? qq => {
              qq.preventDefault()
            } : void 0,
            onClick: () => {
              Eq && !Aq || Yq(qq.value)
            },
            children: qq.label
          }, qq.value)
        }))
      })
    }
  },
  8669: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Oq,
      i: () => lq
    });
    let Yq = null;
    const lq = function(qq) {
        const Eq = {
          cycle: qq,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Yq = Eq, () => {
          Yq === Eq && (Yq = null)
        }
      },
      Oq = () => {
        var qq;
        return null !== (qq = Yq) && void 0 !== qq && qq.canCycle() ? Yq.cycle : null
      }
  },
  36880: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => lq,
      h: () => Oq
    });
    const Yq = new Map;

    function lq(qq) {
      var Eq;
      return null === qq ? null : null !== (Eq = Yq.get(qq)) && void 0 !== Eq ? Eq : null
    }

    function Oq(qq, Eq) {
      return Yq.set(qq, Eq), () => {
        Yq.get(qq) === Eq && Yq.delete(qq)
      }
    }
  },
  36662: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Oq,
      d: () => Vq,
      g: () => dq,
      h: () => xq,
      l: () => Wq,
      m: () => jq,
      o: () => Bq,
      p: () => oq,
      r: () => aq,
      v: () => Hq
    });
    var Yq = gq(24),
      lq = gq(31);
    const Oq = "clientGameInventoryButtonsChanged",
      mq = new Map;

    function xq() {
      return [...mq.values()].sort(((qq, Eq) => {
        var gq, Yq;
        return (null !== (gq = qq.order) && void 0 !== gq ? gq : 0) - (null !== (Yq = Eq.order) && void 0 !== Yq ? Yq : 0)
      }))
    }
    let Aq = null;

    function cq(qq) {
      Aq = qq
    }
    let uq = !1;

    function Bq(qq) {
      uq = !0;
      try {
        qq.onClick()
      } finally {
        uq = !1
      }
      qq.panel && "clientGame" === Yq.b.get("openInGameMenuName") && cq(qq.id)
    }

    function Wq() {
      return uq
    }

    function Nq() {
      return xq().filter((qq => qq.panel && !qq.disabled))
    }

    function aq(qq) {
      const Eq = Nq(),
        gq = Eq.findIndex((qq => qq.id === Aq));
      return !(gq < 0 || Eq.length < 2) && (Bq(Eq[(gq + qq + Eq.length) % Eq.length]), !0)
    }

    function Vq() {
      return null !== Aq && Nq().length > 1
    }

    function dq() {
      cq(null)
    }

    function jq() {
      "inventory" !== Yq.b.get("openInGameMenuName") && cq(null)
    }

    function Hq() {
      const qq = Aq;
      return cq(null), qq
    }

    function oq(qq) {
      return mq.set(qq.id, qq), lq.i.TV(Oq, xq(), !0), () => {
        mq.get(qq.id) === qq && (mq.delete(qq.id), lq.i.TV(Oq, xq()))
      }
    }
  },
  36657: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => xq,
      e: () => dq,
      h: () => jq,
      j: () => Wq,
      l: () => cq,
      m: () => Vq,
      n: () => Nq,
      r: () => uq
    });
    var Yq = gq(24),
      lq = gq(31),
      Oq = gq(1274),
      mq = gq(36662);
    const xq = "clientGameUiChanged";
    let Aq = null;

    function cq() {
      return Aq
    }

    function uq(qq, Eq) {
      const gq = {
        content: qq,
        menu: Eq
      };
      return Aq = gq, lq.i.TV(xq, Aq, !0), () => {
        Aq === gq && (Aq = null, aq = !1, dq(), lq.i.TV(xq, null))
      }
    }
    let Bq = null;

    function Wq() {
      return Bq
    }

    function Nq(qq) {
      return Bq = qq, () => {
        Bq === qq && (Bq = null)
      }
    }
    let aq = !1;

    function Vq() {
      const qq = Yq.b.get("openInGameMenuName");
      "clientGame" !== qq && (aq = "inventory" === qq), (0, mq.l)() || (0, mq.g)(), (0, Oq.m)(Oq.d), Yq.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function dq() {
      Hq(!1)
    }

    function jq() {
      Hq(aq)
    }

    function Hq(qq) {
      "clientGame" === Yq.b.get("openInGameMenuName") && Yq.b.set({
        openInGameMenuName: qq ? "inventory" : null
      }), qq || (0, mq.g)(), aq = !1
    }
  },
  38412: (qq, Eq, gq) => {
    gq.d(Eq, {
      C: () => yq,
      E: () => rq,
      G: () => Qq,
      H: () => Pq,
      I: () => Wq,
      K: () => Vq,
      M: () => jq,
      P: () => lq,
      d: () => uq,
      h: () => Aq,
      j: () => oq,
      m: () => cq,
      q: () => xq,
      r: () => mq,
      t: () => Oq,
      x: () => tq,
      y: () => Nq
    });
    var Yq = gq(9460);

    function lq(qq) {
      return Math.floor(qq).toLocaleString("en-US")
    }
    const Oq = 2e3,
      mq = .005,
      xq = .001,
      Aq = 2,
      cq = "Fluid Tank",
      uq = "Coolant Mixer",
      Bq = 144;

    function Wq(qq) {
      const Eq = qq.split("|")[0];
      return (0, Yq.g)(Eq) ? Eq === Yq.b ? "cryo" : "water" : null
    }
    const Nq = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      aq = 63;

    function Vq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const gq = Eq ? function(qq, Eq, gq) {
        const Yq = Nq.findIndex((Yq => {
          let [lq, Oq, mq] = Yq;
          return lq === qq && Oq === Eq && mq === gq
        }));
        return Yq < 0 ? 0 : 1 << Yq
      }(Eq[0], Eq[1], Eq[2]) : 0;
      return "maker" === qq ? {
        kind: qq,
        faces: gq
      } : "user" === qq ? {
        kind: qq,
        faces: aq & ~gq
      } : {
        kind: qq,
        faces: aq
      }
    }

    function dq(qq) {
      return "pipe" === qq || "tank" === qq || "maker" === qq
    }

    function jq(qq, Eq, gq) {
      return 0 !== (qq.faces & 1 << gq) && 0 !== (Eq.faces & 1 << (1 ^ gq)) && (dq(qq.kind) || dq(Eq.kind))
    }
    const Hq = (qq, Eq, gq, Yq) => ({
        input: qq,
        inputAmount: Yq,
        output: Eq,
        outputAmount: gq
      }),
      oq = {
        Condenser: {
          kind: "Condenser",
          opMs: 2e3,
          inputSlot: null,
          fuelSlot: null,
          outputSlots: [],
          recipes: [],
          powerPerOp: 60,
          fluidMade: 12,
          couplable: !0,
          couplerSlot: 0
        },
        Centrifuge: {
          kind: "Centrifuge",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [Hq("Uranium Grit", "Uranium Pellet", 1, 12), Hq("Spent Pellet", "Plutonium Pellet", 1, 4)],
          powerPerOp: 600,
          waterPerOp: 24
        },
        Synthesizer: {
          kind: "Synthesizer",
          opMs: 6e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [],
          powerPerOp: 120,
          waterPerOp: 12,
          synth: !0
        },
        "Coolant Mixer": {
          kind: "Coolant Mixer",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [],
          recipes: [Hq("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: Bq,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function Pq(qq, Eq) {
      return 1e3 * (null !== Eq && void 0 !== Eq ? Eq : 0) / qq.opMs
    }

    function Qq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const gq = Pq(oq["Coolant Mixer"], Bq) * Eq;
      return qq <= 0 ? 0 : Math.ceil(qq / gq - 1e-9)
    }
    const yq = "baf2Water",
      tq = "baf2waterclose",
      rq = "baf2wateropen"
  },
  38408: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => vq,
      d: () => Pq,
      e: () => oq
    });
    var Yq = gq(9379),
      lq = gq(9406),
      Oq = gq(9460),
      mq = gq(38412),
      xq = gq(9457);
    const Aq = (0, mq.K)("pipe"),
      cq = (0, mq.K)("tank"),
      uq = (0, mq.K)("port"),
      Bq = "Reactor Port";

    function Wq(qq, Eq, gq) {
      const Yq = new Set([Oq.d, Oq.b, Bq, ...Eq, ...gq, ...qq ? [mq.m] : []]);
      return {
        makers: new Set(Eq),
        roots: Yq
      }
    }
    const Nq = {
        water: Wq(!0, ["Condenser"], ["Centrifuge", "Synthesizer", mq.d]),
        cryo: Wq(!1, [mq.d], [])
      },
      aq = new Set([...Nq.water.roots, ...Nq.cryo.roots]),
      Vq = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      dq = lq.i.map((qq => Vq[qq])),
      jq = dq.map((qq => {
        let [Eq, gq, Yq] = qq;
        return mq.y.findIndex((qq => {
          let [lq, Oq, mq] = qq;
          return lq === Eq && Oq === gq && mq === Yq
        }))
      }));

    function Hq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const gq = Yq.i[qq],
        lq = null === gq || void 0 === gq ? void 0 : gq.meta.rootName,
        Wq = Nq[Eq];
      if (!lq || !Wq.roots.has(lq)) return null;
      if ((0, Oq.g)(lq)) return (0, mq.I)(gq.name) === Eq ? Aq : null;
      if (lq === mq.m) return cq;
      if (lq === Bq) return gq.name.endsWith("|Water") ? uq : null;
      const [aq, Vq] = xq.f[(gq.meta.rot || 1) - 1];
      return (0, mq.K)(Wq.makers.has(lq) ? "maker" : "user", [-aq, 0, -Vq])
    }

    function oq(qq, Eq, gq, lq) {
      let Oq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: xq
      } = Nq[Oq];
      return dq.some(((cq, uq) => {
        var Bq, Wq;
        let [Nq, aq, Vq] = cq;
        const dq = qq(Eq + Nq, gq + aq, lq + Vq),
          oq = Hq(dq, Oq);
        return null !== oq && xq.has(null !== (Bq = null === (Wq = Yq.i[dq]) || void 0 === Wq ? void 0 : Wq.meta.rootName) && void 0 !== Bq ? Bq : "") && !(0, mq.M)(Aq, oq, jq[uq])
      }))
    }

    function Pq(qq) {
      const Eq = Yq.i[qq];
      return Eq ? (0, mq.I)(Eq.name) : null
    }
    let Qq = null;

    function yq(qq) {
      if (!Qq) {
        Qq = new Map;
        for (const qq of ["water", "cryo"])
          for (let Eq = 0; Eq < 64; Eq++)
            for (const gq of [!1, !0]) Qq.set((0, Oq.h)(qq, Eq, gq), {
              wW: qq,
              mask: Eq,
              full: gq
            })
      }
      return Qq.get(qq)
    }
    const tq = new Map(Array.from({
      length: Oq.f + 1
    }, ((qq, Eq) => [(0, Oq.j)(Eq), Eq])));

    function rq(qq, Eq, gq, lq, Oq, mq) {
      return dq.some(((xq, Aq) => {
        var cq, uq, Bq;
        let [Wq, Nq, aq] = xq;
        if (0 === (mq >> Aq & 1)) return !1;
        const Vq = null !== (cq = null === (uq = Yq.i[qq(Eq + Wq, gq + Nq, lq + aq)]) || void 0 === uq ? void 0 : uq.name) && void 0 !== cq ? cq : "",
          dq = yq(Vq);
        return dq ? dq.wW === Oq && dq.full : (null !== (Bq = function(qq) {
          var Eq;
          return null !== (Eq = tq.get(qq)) && void 0 !== Eq ? Eq : null
        }(Vq)) && void 0 !== Bq ? Bq : 0) > 0
      }))
    }
    class vq {
      constructor() {
        this.reshapeOffsets = dq
      }
      handles(qq) {
        return null !== Pq(qq)
      }
      affects(qq) {
        var Eq, gq;
        return aq.has(null !== (Eq = null === (gq = Yq.i[qq]) || void 0 === gq ? void 0 : gq.meta.rootName) && void 0 !== Eq ? Eq : "")
      }
      placedBy(qq) {
        var Eq;
        return (null === (Eq = Yq.i[qq]) || void 0 === Eq ? void 0 : Eq.meta.rootName) === Oq.b ? Oq.d : null
      }
      shape(qq, Eq, gq, lq, xq, cq) {
        var uq, Bq, Wq;
        const Nq = null !== (uq = null === (Bq = Yq.i[xq]) || void 0 === Bq ? void 0 : Bq.name) && void 0 !== uq ? uq : "",
          aq = cq || Nq !== Oq.d ? null !== (Wq = (0, mq.I)(Nq)) && void 0 !== Wq ? Wq : "water" : function(qq, Eq, gq, Yq) {
            return dq.some(((lq, Oq) => {
              let [xq, cq, uq] = lq;
              const Bq = Hq(qq(Eq + xq, gq + cq, Yq + uq), "cryo");
              return null !== Bq && "port" !== Bq.kind && (0, mq.M)(Aq, Bq, jq[Oq])
            })) ? "cryo" : "water"
          }(qq, Eq, gq, lq),
          Vq = function(qq, Eq, gq, Yq) {
            let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              Oq = 0;
            return dq.forEach(((xq, cq) => {
              let [uq, Bq, Wq] = xq;
              const Nq = Hq(qq(Eq + uq, gq + Bq, Yq + Wq), lq);
              Nq && (0, mq.M)(Aq, Nq, jq[cq]) && (Oq |= 1 << cq)
            })), Oq
          }(qq, Eq, gq, lq, aq),
          oq = cq ? function(qq) {
            var Eq;
            return !0 === (null === (Eq = yq(qq)) || void 0 === Eq ? void 0 : Eq.full)
          }(Nq) : rq(qq, Eq, gq, lq, aq, Vq);
        return (0, Yq.k)((0, Oq.h)(aq, Vq, oq))
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);