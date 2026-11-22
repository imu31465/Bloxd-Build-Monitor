export const id = 11;
export const ids = [11];
export const modules = {
  36140: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => nk,
      h: () => Uk,
      l: () => xk,
      p: () => Kk
    });
    var Dk = ik(33763),
      fk = ik(36143),
      Sk = ik(36151),
      bk = ik(8560),
      rk = ik(1406),
      Pk = ik(60),
      mk = ik(75),
      Mk = ik(1066);

    function Kk() {
      var kk;
      return (0, rk.e)(fk.c, (0, fk.n)()), (0, Mk.jsx)(Mk.Fragment, {
        children: null === (kk = (0, fk.n)()) || void 0 === kk ? void 0 : kk.content
      })
    }

    function xk(kk) {
      var ek;
      let {
        show: ik
      } = kk;
      (0, rk.e)(fk.c, (0, fk.n)());
      const mk = null === (ek = (0, fk.n)()) || void 0 === ek ? void 0 : ek.menu;
      return (0, Pk.useEffect)((() => {
        var kk;
        ik || (null === mk || void 0 === mk || null === (kk = mk.onClose) || void 0 === kk || kk.call(mk), (0, Sk.t)())
      }), [ik, mk]), (0, Pk.useEffect)((() => ik ? (0, bk.f)(Sk.w, Sk.g) : void 0), [ik]), (0, Mk.jsx)(Dk.d, {
        showing: ik,
        globallyUniqueKey: "clientGameMenu",
        children: null === mk || void 0 === mk ? void 0 : mk.content
      })
    }

    function nk(kk) {
      let {
        placement: ek = "bottom"
      } = kk;
      return (0, Mk.jsx)("div", {
        id: `clientGameHud-${ek}`,
        style: {
          display: "contents"
        }
      })
    }

    function Uk(kk) {
      let {
        children: ek,
        placement: ik = "bottom"
      } = kk;
      const [Dk, fk] = (0, Pk.useState)(null);
      return (0, Pk.useEffect)((() => {
        fk(document.getElementById(`clientGameHud-${ik}`))
      }), [ik]), Dk ? (0, mk.createPortal)(ek, Dk) : null
    }
  },
  33763: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Sk
    });
    var Dk = ik(4479),
      fk = ik(4482);

    function Sk(kk) {
      let {
        children: ek,
        showing: ik,
        globallyUniqueKey: Sk,
        alwaysMountChildren: bk = !1,
        doGameplayStartStopOnShow: rk = !0,
        keepsMovement: Pk = !1
      } = kk;
      return (0, fk.c)(!0, ik, Sk, Pk), (0, Dk.c)(rk, ik), ik || bk ? ek : null
    }
  },
  4946: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => bk
    });
    var Dk = ik(1021),
      fk = ik.n(Dk),
      Sk = ik(1066);

    function bk(kk) {
      let {
        options: ek,
        value: ik,
        onChange: Dk,
        ariaLabel: bk,
        className: rk,
        reselectable: Pk = !1,
        keepsFocus: mk = !1,
        padTabs: Mk
      } = kk;
      const Kk = void 0 !== Mk;
      return (0, Sk.jsx)("div", {
        className: fk()("SegmentedToggle", rk),
        role: "group",
        "aria-label": bk,
        "data-pad-tabs": Mk,
        children: ek.map((kk => {
          const ek = kk.value === ik;
          return (0, Sk.jsx)("button", {
            type: "button",
            "aria-pressed": ek,
            "data-pad-tab": Kk || void 0,
            "data-pad-selected": Kk && ek ? "true" : void 0,
            "data-pad-default-focus": Kk && ek || void 0,
            "aria-label": kk.ariaLabel,
            title: kk.ariaLabel,
            className: fk()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: ek
            }),
            onMouseDown: mk ? kk => {
              kk.preventDefault()
            } : void 0,
            onClick: () => {
              ek && !Pk || Dk(kk.value)
            },
            children: kk.label
          }, kk.value)
        }))
      })
    }
  },
  8560: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk,
      f: () => fk
    });
    let Dk = null;
    const fk = function(kk) {
        const ek = {
          cycle: kk,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Dk = ek, () => {
          Dk === ek && (Dk = null)
        }
      },
      Sk = () => {
        var kk;
        return null !== (kk = Dk) && void 0 !== kk && kk.canCycle() ? Dk.cycle : null
      }
  },
  36420: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => fk,
      f: () => Sk
    });
    const Dk = new Map;

    function fk(kk) {
      var ek;
      return null === kk ? null : null !== (ek = Dk.get(kk)) && void 0 !== ek ? ek : null
    }

    function Sk(kk, ek) {
      return Dk.set(kk, ek), () => {
        Dk.get(kk) === ek && Dk.delete(kk)
      }
    }
  },
  36151: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk,
      g: () => Hk,
      i: () => wk,
      m: () => rk,
      p: () => xk,
      t: () => lk,
      u: () => Kk,
      v: () => yk,
      w: () => Uk,
      x: () => pk
    });
    var Dk = ik(22),
      fk = ik(26);
    const Sk = "clientGameInventoryButtonsChanged",
      bk = new Map;

    function rk() {
      return [...bk.values()].sort(((kk, ek) => {
        var ik, Dk;
        return (null !== (ik = kk.order) && void 0 !== ik ? ik : 0) - (null !== (Dk = ek.order) && void 0 !== Dk ? Dk : 0)
      }))
    }
    let Pk = null;

    function mk(kk) {
      Pk = kk
    }
    let Mk = !1;

    function Kk(kk) {
      Mk = !0;
      try {
        kk.onClick()
      } finally {
        Mk = !1
      }
      kk.panel && "clientGame" === Dk.b.get("openInGameMenuName") && mk(kk.id)
    }

    function xk() {
      return Mk
    }

    function nk() {
      return rk().filter((kk => kk.panel && !kk.disabled))
    }

    function Uk(kk) {
      const ek = nk(),
        ik = ek.findIndex((kk => kk.id === Pk));
      return !(ik < 0 || ek.length < 2) && (Kk(ek[(ik + kk + ek.length) % ek.length]), !0)
    }

    function Hk() {
      return null !== Pk && nk().length > 1
    }

    function wk() {
      mk(null)
    }

    function lk() {
      "inventory" !== Dk.b.get("openInGameMenuName") && mk(null)
    }

    function pk() {
      const kk = Pk;
      return mk(null), kk
    }

    function yk(kk) {
      return bk.set(kk.id, kk), fk.j.tm(Sk, rk(), !0), () => {
        bk.get(kk.id) === kk && (bk.delete(kk.id), fk.j.tm(Sk, rk()))
      }
    }
  },
  36143: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => rk,
      d: () => wk,
      h: () => lk,
      j: () => xk,
      n: () => mk,
      r: () => Hk,
      v: () => nk,
      z: () => Mk
    });
    var Dk = ik(22),
      fk = ik(26),
      Sk = ik(1273),
      bk = ik(36151);
    const rk = "clientGameUiChanged";
    let Pk = null;

    function mk() {
      return Pk
    }

    function Mk(kk, ek) {
      const ik = {
        content: kk,
        menu: ek
      };
      return Pk = ik, fk.j.tm(rk, Pk, !0), () => {
        Pk === ik && (Pk = null, Uk = !1, wk(), fk.j.tm(rk, null))
      }
    }
    let Kk = null;

    function xk() {
      return Kk
    }

    function nk(kk) {
      return Kk = kk, () => {
        Kk === kk && (Kk = null)
      }
    }
    let Uk = !1;

    function Hk() {
      const kk = Dk.b.get("openInGameMenuName");
      "clientGame" !== kk && (Uk = "inventory" === kk), (0, bk.p)() || (0, bk.i)(), (0, Sk.s)(Sk.c), Dk.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function wk() {
      pk(!1)
    }

    function lk() {
      pk(Uk)
    }

    function pk(kk) {
      "clientGame" === Dk.b.get("openInGameMenuName") && Dk.b.set({
        openInGameMenuName: kk ? "inventory" : null
      }), kk || (0, bk.i)(), Uk = !1
    }
  },
  38017: (kk, ek, ik) => {
    ik.d(ek, {
      B: () => Hk,
      E: () => lk,
      G: () => fk,
      c: () => Mk,
      e: () => Pk,
      h: () => yk,
      j: () => mk,
      k: () => rk,
      m: () => bk,
      n: () => Sk,
      o: () => Ak,
      p: () => nk,
      q: () => Ck,
      r: () => jk,
      t: () => Lk,
      v: () => Yk,
      x: () => xk
    });
    var Dk = ik(9097);

    function fk(kk) {
      return Math.floor(kk).toLocaleString("en-US")
    }
    const Sk = 2e3,
      bk = .005,
      rk = .001,
      Pk = 2,
      mk = "Fluid Tank",
      Mk = "Coolant Mixer",
      Kk = 144;

    function xk(kk) {
      const ek = kk.split("|")[0];
      return (0, Dk.m)(ek) ? ek === Dk.e ? "cryo" : "water" : null
    }
    const nk = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      Uk = 63;

    function Hk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const ik = ek ? function(kk, ek, ik) {
        const Dk = nk.findIndex((Dk => {
          let [fk, Sk, bk] = Dk;
          return fk === kk && Sk === ek && bk === ik
        }));
        return Dk < 0 ? 0 : 1 << Dk
      }(ek[0], ek[1], ek[2]) : 0;
      return "maker" === kk ? {
        kind: kk,
        faces: ik
      } : "user" === kk ? {
        kind: kk,
        faces: Uk & ~ik
      } : {
        kind: kk,
        faces: Uk
      }
    }

    function wk(kk) {
      return "pipe" === kk || "tank" === kk || "maker" === kk
    }

    function lk(kk, ek, ik) {
      return 0 !== (kk.faces & 1 << ik) && 0 !== (ek.faces & 1 << (1 ^ ik)) && (wk(kk.kind) || wk(ek.kind))
    }
    const pk = (kk, ek, ik, Dk) => ({
        input: kk,
        inputAmount: Dk,
        output: ek,
        outputAmount: ik
      }),
      yk = {
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
          recipes: [pk("Uranium Grit", "Uranium Pellet", 1, 12), pk("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [pk("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: Kk,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function Yk(kk, ek) {
      return 1e3 * (null !== ek && void 0 !== ek ? ek : 0) / kk.opMs
    }

    function Lk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const ik = Yk(yk["Coolant Mixer"], Kk) * ek;
      return kk <= 0 ? 0 : Math.ceil(kk / ik - 1e-9)
    }
    const Ck = "baf2Water",
      Ak = "baf2waterclose",
      jk = "baf2wateropen"
  },
  38010: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => sk,
      f: () => Yk,
      i: () => yk
    });
    var Dk = ik(9020),
      fk = ik(9044),
      Sk = ik(9097),
      bk = ik(38017),
      rk = ik(9092);
    const Pk = (0, bk.B)("pipe"),
      mk = (0, bk.B)("tank"),
      Mk = (0, bk.B)("port"),
      Kk = "Reactor Port";

    function xk(kk, ek, ik) {
      const Dk = new Set([Sk.f, Sk.e, Kk, ...ek, ...ik, ...kk ? [bk.j] : []]);
      return {
        makers: new Set(ek),
        roots: Dk
      }
    }
    const nk = {
        water: xk(!0, ["Condenser"], ["Centrifuge", "Synthesizer", bk.c]),
        cryo: xk(!1, [bk.c], [])
      },
      Uk = new Set([...nk.water.roots, ...nk.cryo.roots]),
      Hk = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      wk = fk.e.map((kk => Hk[kk])),
      lk = wk.map((kk => {
        let [ek, ik, Dk] = kk;
        return bk.p.findIndex((kk => {
          let [fk, Sk, bk] = kk;
          return fk === ek && Sk === ik && bk === Dk
        }))
      }));

    function pk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const ik = Dk.g[kk],
        fk = null === ik || void 0 === ik ? void 0 : ik.meta.rootName,
        xk = nk[ek];
      if (!fk || !xk.roots.has(fk)) return null;
      if ((0, Sk.m)(fk)) return (0, bk.x)(ik.name) === ek ? Pk : null;
      if (fk === bk.j) return mk;
      if (fk === Kk) return ik.name.endsWith("|Water") ? Mk : null;
      const [Uk, Hk] = rk.e[(ik.meta.rot || 1) - 1];
      return (0, bk.B)(xk.makers.has(fk) ? "maker" : "user", [-Uk, 0, -Hk])
    }

    function yk(kk, ek, ik, fk) {
      let Sk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: rk
      } = nk[Sk];
      return wk.some(((mk, Mk) => {
        var Kk, xk;
        let [nk, Uk, Hk] = mk;
        const wk = kk(ek + nk, ik + Uk, fk + Hk),
          yk = pk(wk, Sk);
        return null !== yk && rk.has(null !== (Kk = null === (xk = Dk.g[wk]) || void 0 === xk ? void 0 : xk.meta.rootName) && void 0 !== Kk ? Kk : "") && !(0, bk.E)(Pk, yk, lk[Mk])
      }))
    }

    function Yk(kk) {
      const ek = Dk.g[kk];
      return ek ? (0, bk.x)(ek.name) : null
    }
    let Lk = null;

    function Ck(kk) {
      if (!Lk) {
        Lk = new Map;
        for (const kk of ["water", "cryo"])
          for (let ek = 0; ek < 64; ek++)
            for (const ik of [!1, !0]) Lk.set((0, Sk.o)(kk, ek, ik), {
              qn: kk,
              mask: ek,
              full: ik
            })
      }
      return Lk.get(kk)
    }
    const Ak = new Map(Array.from({
      length: Sk.i + 1
    }, ((kk, ek) => [(0, Sk.p)(ek), ek])));

    function jk(kk, ek, ik, fk, Sk, bk) {
      return wk.some(((rk, Pk) => {
        var mk, Mk, Kk;
        let [xk, nk, Uk] = rk;
        if (0 === (bk >> Pk & 1)) return !1;
        const Hk = null !== (mk = null === (Mk = Dk.g[kk(ek + xk, ik + nk, fk + Uk)]) || void 0 === Mk ? void 0 : Mk.name) && void 0 !== mk ? mk : "",
          wk = Ck(Hk);
        return wk ? wk.qn === Sk && wk.full : (null !== (Kk = function(kk) {
          var ek;
          return null !== (ek = Ak.get(kk)) && void 0 !== ek ? ek : null
        }(Hk)) && void 0 !== Kk ? Kk : 0) > 0
      }))
    }
    class sk {
      constructor() {
        this.reshapeOffsets = wk
      }
      handles(kk) {
        return null !== Yk(kk)
      }
      affects(kk) {
        var ek, ik;
        return Uk.has(null !== (ek = null === (ik = Dk.g[kk]) || void 0 === ik ? void 0 : ik.meta.rootName) && void 0 !== ek ? ek : "")
      }
      placedBy(kk) {
        var ek;
        return (null === (ek = Dk.g[kk]) || void 0 === ek ? void 0 : ek.meta.rootName) === Sk.e ? Sk.f : null
      }
      shape(kk, ek, ik, fk, rk, mk) {
        var Mk, Kk, xk;
        const nk = null !== (Mk = null === (Kk = Dk.g[rk]) || void 0 === Kk ? void 0 : Kk.name) && void 0 !== Mk ? Mk : "",
          Uk = mk || nk !== Sk.f ? null !== (xk = (0, bk.x)(nk)) && void 0 !== xk ? xk : "water" : function(kk, ek, ik, Dk) {
            return wk.some(((fk, Sk) => {
              let [rk, mk, Mk] = fk;
              const Kk = pk(kk(ek + rk, ik + mk, Dk + Mk), "cryo");
              return null !== Kk && "port" !== Kk.kind && (0, bk.E)(Pk, Kk, lk[Sk])
            })) ? "cryo" : "water"
          }(kk, ek, ik, fk),
          Hk = function(kk, ek, ik, Dk) {
            let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              Sk = 0;
            return wk.forEach(((rk, mk) => {
              let [Mk, Kk, xk] = rk;
              const nk = pk(kk(ek + Mk, ik + Kk, Dk + xk), fk);
              nk && (0, bk.E)(Pk, nk, lk[mk]) && (Sk |= 1 << mk)
            })), Sk
          }(kk, ek, ik, fk, Uk),
          yk = mk ? function(kk) {
            var ek;
            return !0 === (null === (ek = Ck(kk)) || void 0 === ek ? void 0 : ek.full)
          }(nk) : jk(kk, ek, ik, fk, Uk, Hk);
        return (0, Dk.h)((0, Sk.o)(Uk, Hk, yk))
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);