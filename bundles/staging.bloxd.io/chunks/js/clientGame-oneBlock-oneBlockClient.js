export const id = 25;
export const ids = [25];
export const modules = {
  38214: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Ir,
      d: () => fr,
      e: () => Er,
      h: () => pr,
      l: () => Ur
    });
    var Zr = Qr(72),
      Wr = Qr(4302),
      ar = Qr(3515),
      jr = Qr(34);
    const Ir = 8,
      fr = "InGameHeaderContainer",
      Er = "TopRightElements";

    function pr(rr) {
      const [Sr] = (0, Wr.e)(), [Qr, ar] = (0, Zr.useState)(!1);
      return (0, Zr.useLayoutEffect)((() => {
        if (!rr) return;
        const Sr = document.querySelector(`.${fr}`),
          Qr = document.querySelector(`.${Er}`),
          Zr = () => {
            const Zr = rr.getBoundingClientRect(),
              Wr = Sr ? Sr.getBoundingClientRect().right : 0,
              jr = Qr ? Qr.getBoundingClientRect().left : window.innerWidth,
              fr = Zr.left < Wr + Ir,
              Er = Zr.right > jr - Ir;
            ar(fr || Er)
          };
        Zr();
        const Wr = new ResizeObserver(Zr);
        return Wr.observe(rr), Sr && Wr.observe(Sr), Qr && Wr.observe(Qr), () => {
          Wr.disconnect()
        }
      }), [rr, Sr]), Qr
    }
    const xr = `.InGameUi .${fr}`,
      mr = [xr, ".InGameUi .TopRightIcons", ".InGameUi .TopRightElementsRight"],
      Nr = 1e3;

    function Ur(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rr,
        Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const [Wr, fr] = (0, Zr.useState)(null);
      return (0, Zr.useLayoutEffect)((() => {
        if (!rr) return;
        const Zr = new ResizeObserver((() => {
          Er()
        }));
        Zr.observe(rr), Sr && Sr !== rr && Zr.observe(Sr);
        let Wr = [];

        function Er() {
          var ar, jr, Er;
          const pr = rr.getBoundingClientRect(),
            Nr = function() {
              const rr = mr.map((rr => document.querySelector(rr))).filter((rr => null !== rr));
              for (const Sr of rr) Wr.includes(Sr) || Zr.observe(Sr);
              for (const Sr of Wr) rr.includes(Sr) || Zr.unobserve(Sr);
              return Wr = rr, rr
            }(),
            Ur = Nr.filter((rr => {
              const Sr = rr.getBoundingClientRect();
              return Sr.width > 0 && Sr.height > 0 && pr.left < Sr.right + Ir && pr.right > Sr.left - Ir
            }));
          if (0 === Ur.length && !Qr) return void fr(null);
          const tr = Nr.find((rr => rr.matches(xr))),
            hr = Math.max(null !== (ar = null === tr || void 0 === tr ? void 0 : tr.getBoundingClientRect().bottom) && void 0 !== ar ? ar : 0, ...Ur.map((rr => rr.getBoundingClientRect().bottom))),
            zr = null !== (jr = null === Sr || void 0 === Sr || null === (Er = Sr.offsetParent) || void 0 === Er ? void 0 : Er.getBoundingClientRect().top) && void 0 !== jr ? jr : 0;
          fr(Math.ceil(hr + Ir / 2) - Math.round(zr))
        }
        const pr = setInterval(Er, Nr);
        Er(), window.addEventListener("resize", Er);
        const Ur = (0, jr.j)(ar.g, Er);
        return () => {
          Zr.disconnect(), clearInterval(pr), window.removeEventListener("resize", Er), Ur()
        }
      }), [rr, Sr, Qr]), Wr
    }
  },
  40035: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr,
      f: () => Ir,
      i: () => fr
    });
    const Zr = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      Wr = [0, 1, 2, 0, 2, 3],
      ar = [4, 5];

    function jr(rr, Sr, Qr, Zr, Wr) {
      for (let jr = 0; jr < 6; jr++) ar.includes(jr) === Wr && Er(rr, Sr, Qr, Zr, jr)
    }

    function Ir(rr, Sr, Qr, Zr) {
      for (let Wr = 0; Wr < 6; Wr++) Er(rr, Sr, Qr, Zr, Wr)
    }

    function fr(rr, Sr, Qr, ar, jr) {
      for (let Ir = 0; Ir < 6; Ir++)
        for (const fr of [0, 1]) {
          const [Er, pr, xr] = [fr + 2, fr + 1, (fr + 3) % 4], mr = rr.length / 3;
          for (const [Sr, Wr] of [
              [fr, pr],
              [Er, pr],
              [Er, xr],
              [fr, xr]
            ])
            for (let fr = 0; fr < 3; fr++) {
              const Er = Zr[3 * (4 * Ir + Sr) + fr],
                pr = Zr[3 * (4 * Ir + Wr) + fr];
              rr.push((Er + (pr - Er) * jr) * ar / 2 + Qr[fr])
            }
          for (const rr of Wr) Sr.push(mr + rr)
        }
    }

    function Er(rr, Sr, Qr, ar, jr) {
      let [Ir, fr, Er] = Qr, [pr, xr, mr] = ar;
      const Nr = rr.length / 3;
      for (let Wr = 4 * jr; Wr < 4 * jr + 4; Wr++) rr.push(Zr[3 * Wr] * pr / 2 + Ir, Zr[3 * Wr + 1] * xr / 2 + fr, Zr[3 * Wr + 2] * mr / 2 + Er);
      for (const Zr of Wr) Sr.push(Nr + Zr)
    }
  },
  41136: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => gr
    });
    var Zr = Qr(72),
      Wr = Qr(3425),
      ar = Qr(41145);
    const jr = [1, .62, .05],
      Ir = [.35, .45, .55, .65, .55, .45].map((rr => ({
        size: .85,
        alpha: rr,
        crossed: !1
      })));
    class fr {
      constructor(rr) {
        this.api = rr, this.cells = [], this.meshes = void 0, this.pulseMs = 0, this.shown = "", this.meshes = new ar.p(rr)
      }
      vx(rr) {
        this.cells = rr, this.shown = "", 0 === rr.length && this.meshes.dispose()
      }
      afterRender(rr) {
        if (0 === this.cells.length) return;
        this.pulseMs += rr;
        const Sr = Ir[Math.floor(this.pulseMs / 160) % Ir.length],
          Qr = new ar.m,
          Zr = [];
        for (let ar = 0; ar < this.cells.length; ar += 3) {
          const [rr, Wr, Ir] = [this.cells[ar], this.cells[ar + 1], this.cells[ar + 2]];
          this.api.isBlockInLoadedChunk(rr, Wr, Ir) && 0 === this.api.getBlockId(rr, Wr, Ir) && (Qr.add(rr, Wr, Ir, jr, Sr), Zr.push(rr, Wr, Ir))
        }
        const Wr = `${Ir.indexOf(Sr)}|${Zr.join(",")}`;
        Wr !== this.shown && (this.shown = Wr, this.meshes.show(Qr.toArray()))
      }
      dispose() {
        this.meshes.dispose(), this.cells = []
      }
    }
    var Er = Qr(34),
      pr = Qr(40013);
    const xr = "obQuestCardChanged",
      mr = "obBlockPop",
      Nr = "obPhaseParty";
    class Ur {
      constructor(rr) {
        this.getOneBlockPos = rr, this.card = ["none"], this.pointer = null, this.pending = null, this.holdTimeout = null
      }
      getCard() {
        return this.card
      }
      receiveCard(rr) {
        null === this.holdTimeout ? (this.card = rr, Er.i.Jp(xr, rr, !0), "task" === rr[0] && rr[4] && (this.holdTimeout = setTimeout((() => {
          this.holdTimeout = null;
          const rr = this.pending;
          this.pending = null, null !== rr && this.receiveCard(rr)
        }), 1e3))) : this.pending = rr
      }
      dispose() {
        null !== this.holdTimeout && (clearTimeout(this.holdTimeout), this.holdTimeout = null), this.pending = null
      }
      receivePop(rr) {
        Er.i.Jp(mr, rr, !0)
      }
      receiveParty(rr) {
        Er.i.Jp(Nr, rr, !0)
      }
      setPointer(rr) {
        this.pointer = rr
      }
      afterRender(rr) {
        const Sr = this.pointer;
        if (null === Sr) return;
        const Qr = this.getOneBlockPos(),
          Zr = null === Qr ? null : rr.projectWorldPosToViewport([Qr[0] + .5, Qr[1] + 1.9, Qr[2] + .5]),
          Wr = null !== Zr && Zr.x >= 0 && Zr.x <= 100 && Zr.y >= 0 && Zr.y <= 100;
        (0, pr.f)(Sr, !Wr), Wr && (0, pr.e)(Sr, Math.round(100 * Zr.x) / 100, Math.round(100 * Zr.y) / 100)
      }
    }
    var tr = Qr(2075),
      hr = Qr(1573),
      zr = Qr(1251),
      Yr = Qr(1338);
    let nr = 1;

    function er() {
      const [rr, Sr] = (0, Zr.useState)([]), [Qr, Wr] = (0, Zr.useState)(null);
      return (0, hr.c)(mr, (() => {
        const rr = {
          id: nr++,
          driftRem: 6 * (Math.random() - .5)
        };
        Sr((Sr => [...Sr.slice(-4), rr])), setTimeout((() => {
          Sr((Sr => Sr.filter((Sr => Sr.id !== rr.id))))
        }), 900)
      })), (0, hr.c)(Nr, (rr => {
        Wr({
          id: nr++,
          wire: rr
        })
      })), (0, Yr.jsxs)(Yr.Fragment, {
        children: [(0, Yr.jsx)("div", {
          className: "OBBlockPops",
          children: rr.map((rr => (0, Yr.jsx)("div", {
            className: "OBBlockPop",
            style: {
              "--ob-pop-drift": `${rr.driftRem}rem`
            },
            children: (0, Yr.jsx)("span", {
              className: "OBBlockPopPlus",
              children: "+1"
            })
          }, rr.id)))
        }), null !== Qr && (0, Yr.jsx)(yr, {
          wire: Qr.wire,
          onDone: () => {
            Wr((rr => (null === rr || void 0 === rr ? void 0 : rr.id) === Qr.id ? null : rr))
          }
        }, Qr.id)]
      })
    }
    const Kr = {
      Forest: "oneblockGame:phaseForest",
      Plains: "oneblockGame:phasePlains",
      Hills: "oneblockGame:phaseHills",
      Village: "oneblockGame:phaseVillage",
      Ocean: "oneblockGame:phaseOcean",
      Blossom: "oneblockGame:phaseBlossom",
      Caves: "oneblockGame:phaseCaves",
      Jungle: "oneblockGame:phaseJungle",
      Desert: "oneblockGame:phaseDesert",
      Ruins: "oneblockGame:phaseRuins",
      Swamp: "oneblockGame:phaseSwamp",
      Dungeon: "oneblockGame:phaseDungeon",
      Frozen: "oneblockGame:phaseFrozen",
      Mountains: "oneblockGame:phaseMountains",
      Rainbow: "oneblockGame:phaseRainbow",
      Volcano: "oneblockGame:phaseVolcano",
      Moon: "oneblockGame:phaseMoon"
    };

    function yr(rr) {
      let {
        wire: Sr,
        onDone: Qr
      } = rr;
      const {
        t: Wr
      } = (0, zr.E)(), [ar, jr, Ir, fr] = Sr, Er = Object.hasOwn(Kr, ar) ? Wr(Kr[ar]) : ar, pr = (0, Zr.useRef)(Qr);
      return pr.current = Qr, (0, Zr.useEffect)((() => {
        const rr = setTimeout((() => {
          pr.current()
        }), 5200);
        return () => {
          clearTimeout(rr)
        }
      }), []), (0, Yr.jsxs)("div", {
        className: "OBPhaseParty",
        role: "status",
        children: [(0, Yr.jsx)("div", {
          className: "OBPhasePartyConfetti",
          children: Array.from({
            length: 26
          }, ((rr, Sr) => (0, Yr.jsx)("span", {
            style: {
              "--ob-confetti-x": 37 * Sr % 100 + "%",
              "--ob-confetti-delay": Sr % 7 * 90 + "ms",
              "--ob-confetti-spin": "" + (Sr % 2 === 0 ? 1 : -1)
            }
          }, Sr)))
        }), (0, Yr.jsxs)("div", {
          className: "OBPhasePartyPanel",
          style: {
            "--ob-phase-colour": jr
          },
          children: [(0, Yr.jsx)("div", {
            className: "OBPhasePartyTitle",
            children: Wr("oneblockGame:obPartyUnlocked", {
              phase: Er
            })
          }), Ir.length > 0 && (0, Yr.jsxs)("div", {
            className: "OBPhasePartyNew",
            children: [(0, Yr.jsx)("span", {
              className: "OBPhasePartyNewLabel",
              children: Wr("oneblockGame:obPartyNewBlocks")
            }), Ir.map((rr => (0, Yr.jsx)("span", {
              className: "OBPhasePartyBlock",
              children: (0, Yr.jsx)(tr.d, {
                itemName: rr,
                amount: 1
              })
            }, rr)))]
          }), fr && (0, Yr.jsxs)("div", {
            className: "OBPhasePartyGift",
            children: [(0, Yr.jsx)("span", {
              className: "OBPhasePartyBlock",
              children: (0, Yr.jsx)(tr.d, {
                itemName: "Chest",
                amount: 1
              })
            }), Wr("oneblockGame:obPartyGift")]
          })]
        })]
      })
    }
    var Br = Qr(1155),
      Tr = Qr.n(Br),
      vr = Qr(38214);
    const Or = {
      mine_1: {
        icon: "Wood Pickaxe",
        key: "oneblockGame:obCardMineFirst",
        touchKey: "oneblockGame:obCardMineFirstTouch"
      },
      mine_5: {
        icon: "Wood Pickaxe",
        key: "oneblockGame:obCardMine"
      },
      mine_10: {
        icon: "Wood Pickaxe",
        key: "oneblockGame:obCardMine"
      },
      collect_dirt: {
        icon: "Dirt",
        key: "oneblockGame:obCardCollect"
      },
      place_5: {
        icon: "Dirt",
        key: "oneblockGame:obPlaceHint",
        touchKey: "oneblockGame:obPlaceHintTouch"
      },
      place_3: {
        icon: "Dirt",
        key: "oneblockGame:obPlaceHint",
        touchKey: "oneblockGame:obPlaceHintTouch"
      },
      reach_plains: {
        icon: "Grass Block",
        key: "oneblockGame:obCardPlains"
      },
      collect_coins: {
        icon: "Gold Coin",
        key: "oneblockGame:obCardCoins"
      }
    };

    function Lr(rr) {
      let {
        hud: Sr
      } = rr;
      const Qr = (0, hr.g)(xr, Sr.getCard());
      if ("none" === Qr[0] || void 0 === Or[Qr[1]]) return null;
      const [, Zr, Wr, ar, jr, Ir, fr, Er, pr, mr] = Qr;
      return (0, Yr.jsxs)(Yr.Fragment, {
        children: [(0, Yr.jsx)(lr, {
          task: Or[Zr],
          progress: Wr,
          goal: ar,
          completed: jr,
          mineFirst: Ir,
          pickBlockKey: mr,
          plains: "reach_plains" === Zr ? null : {
            blocksMined: fr,
            plainsAt: Er
          },
          touch: pr
        }, Zr), "mine_1" === Zr && 0 === Wr && !jr && (0, Yr.jsx)(Pr, {
          hud: Sr
        })]
      })
    }

    function lr(rr) {
      let {
        task: Sr,
        progress: Qr,
        goal: Wr,
        completed: ar,
        mineFirst: jr,
        pickBlockKey: Ir,
        plains: fr,
        touch: Er
      } = rr;
      const {
        t: pr
      } = (0, zr.E)(), [xr, mr] = (0, Zr.useState)(null), Nr = (0, vr.h)(xr);
      let Ur = pr(Er && Sr.touchKey ? Sr.touchKey : Sr.key);
      return null !== Ir ? Ur = pr("oneblockGame:obPickABlock", {
        key: Ir
      }) : jr > 0 && (Ur = pr("oneblockGame:obMineFirst", {
        count: jr
      })), (0, Yr.jsx)("div", {
        className: Tr()("OBQuestCardContainer", {
          Below: Nr
        }),
        children: (0, Yr.jsxs)("div", {
          ref: mr,
          className: Tr()("OBQuestCard", {
            Completed: ar,
            Short: jr > 0 || null !== Ir
          }),
          role: "status",
          children: [(0, Yr.jsxs)("span", {
            className: "OBQuestCardIcon",
            children: [(0, Yr.jsx)(tr.d, {
              itemName: Sr.icon,
              amount: 1
            }), ar && (0, Yr.jsx)("span", {
              className: "OBQuestCardTick"
            })]
          }), (0, Yr.jsxs)("div", {
            className: "OBQuestCardBody",
            children: [(0, Yr.jsx)("div", {
              className: "OBQuestCardLine SmallTextBold",
              children: Ur
            }), Wr > 1 && (0, Yr.jsx)(Xr, {
              className: "OBQuestCardTaskBar",
              progress: Qr,
              goal: Wr
            }), null !== fr && fr.blocksMined < fr.plainsAt && (0, Yr.jsxs)("div", {
              className: "OBQuestCardPlains",
              children: [(0, Yr.jsx)("span", {
                className: "OBQuestCardPlainsLabel",
                children: pr("oneblockGame:obCardPlainsIn", {
                  count: fr.plainsAt - fr.blocksMined
                })
              }), (0, Yr.jsx)(Xr, {
                className: "OBQuestCardPlainsBar",
                progress: fr.blocksMined,
                goal: fr.plainsAt,
                hideCount: !0
              })]
            })]
          }), ar && (0, Yr.jsx)("span", {
            className: "OBQuestCardBurst"
          })]
        })
      })
    }

    function Xr(rr) {
      let {
        className: Sr,
        progress: Qr,
        goal: Zr,
        hideCount: Wr = !1
      } = rr;
      const ar = Math.min(Qr, Zr);
      return (0, Yr.jsxs)("div", {
        className: Tr()("OBQuestCardBar", Sr),
        children: [(0, Yr.jsx)("div", {
          className: "OBQuestCardBarTrack",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": Zr,
          "aria-valuenow": ar,
          children: (0, Yr.jsx)("div", {
            className: "OBQuestCardBarFill",
            style: {
              transform: `scaleX(${Zr>0?ar/Zr:0})`
            }
          })
        }), !Wr && (0, Yr.jsxs)("span", {
          className: "OBQuestCardBarCount",
          children: [ar, "/", Zr]
        })]
      })
    }

    function Pr(rr) {
      let {
        hud: Sr
      } = rr;
      return (0, Yr.jsx)("div", {
        ref: rr => {
          Sr.setPointer(rr)
        },
        className: "OBBlockPointer",
        hidden: !0,
        children: (0, Yr.jsx)("span", {
          className: "OBBlockPointerArrow"
        })
      })
    }
    const Hr = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const qr = 6400;

    function Rr(rr, Sr) {
      const Qr = Math.ceil((rr - 3200) / qr);
      if (Qr !== Math.ceil((Sr - 3200) / qr) || Qr <= 0) return null;
      const Zr = Qr * qr + 6;
      return [Zr, 10, Zr]
    }
    const gr = function(rr, Sr, Qr, ar) {
      let jr, {
          localPlayerId: Ir
        } = ar,
        Er = [],
        pr = null,
        xr = null;
      const mr = new Ur((() => {
        const rr = jr.getPositionView(Ir);
        return null === rr ? null : Rr(rr[0], rr[2])
      }));
      return {
        onCreate: rr => {
          jr = rr, pr = new fr(jr), xr = (0, Wr.H)((0, Zr.createElement)(Zr.Fragment, null, (0, Zr.createElement)(Lr, {
            hud: mr
          }), (0, Zr.createElement)(er)))
        },
        onClose: () => {
          var rr, Sr;
          null === (rr = xr) || void 0 === rr || rr(), mr.dispose(), null === (Sr = pr) || void 0 === Sr || Sr.dispose(), pr = null
        },
        onReceivedMessageFromServer: (rr, Sr) => {
          if ("oneBlockNextBlocks" === rr) Er = Sr.blocks.map((rr => jr.blockNameToBlockId(rr)));
          else if ("obQuestCard" === rr) mr.receiveCard(Sr);
          else if ("obGhostLedge" === rr) {
            var Qr;
            null === (Qr = pr) || void 0 === Qr || Qr.vx(Sr)
          } else "obBlockPop" === rr ? mr.receivePop(Sr) : "obPhaseParty" === rr && mr.receiveParty(Sr)
        },
        onAfterRender: (rr, Sr) => {
          var Qr;
          null === (Qr = pr) || void 0 === Qr || Qr.afterRender(rr), mr.afterRender(Sr)
        },
        lx: () => {
          if (0 === Er.length) return;
          const rr = jr.getPositionView(Ir),
            Sr = Rr(rr[0], rr[2]);
          if (!Sr) return;
          const [Qr, Zr, Wr] = Sr;
          if (jr.isBlockInLoadedChunk(Qr, Zr, Wr) && 0 === jr.getBlockId(Qr, Zr, Wr)) {
            const rr = Er.shift();
            jr.setBlockId(Qr, Zr, Wr, rr)
          }
        },
        onPlayerAltAction: (rr, Sr, Qr, Zr, Wr, ar) => {
          ! function(rr, Sr, Qr, Zr) {
            if (!Qr || "Mesh" !== rr.getEntityType(Qr)) return !1;
            const Wr = Hr[rr.getEntityName(Qr)];
            !!Wr && rr.openShop(Sr, Zr, Wr)
          }(jr, rr, ar, !1)
        }
      }
    }
  },
  41145: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Ir,
      e: () => fr,
      i: () => jr,
      m: () => Er,
      p: () => pr
    });
    var Zr = Qr(41149),
      Wr = Qr(40035);
    const ar = .35,
      jr = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      Ir = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      fr = [.95, .2, .15];
    class Er {
      constructor() {
        this.groups = []
      }
      add(rr, Sr, Qr, Wr, ar) {
        let jr = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Zr.d;
        for (const Zr of this.groups)
          if (mr(Zr, Wr, ar)) return Zr.cells.push(rr, Sr, Qr), void Zr.boxes.push(jr);
        this.groups.push({
          rgb: Wr,
          look: ar,
          cells: [rr, Sr, Qr],
          boxes: [jr]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class pr {
      constructor(rr) {
        this.api = rr, this.shown = []
      }
      show(rr) {
        const Sr = [];
        for (const Qr of rr) {
          const rr = this.shown.findIndex((rr => {
            let {
              group: Sr
            } = rr;
            return mr(Sr, Qr.rgb, Qr.look) && Nr(Sr, Qr)
          })); - 1 === rr ? Sr.push(this.build(Qr)) : (Sr.push(this.shown[rr]), this.shown.splice(rr, 1))
        }
        this.dispose(), this.shown = Sr
      }
      dispose() {
        for (const {
            meshes: rr
          }
          of this.shown)
          for (const Sr of rr) this.api.disposeGameMesh(Sr);
        this.shown = []
      }
      build(rr) {
        const {
          rgb: Sr,
          look: Qr,
          boxes: Zr
        } = rr, jr = [Sr[0] + (1 - Sr[0]) * ar, Sr[1] + (1 - Sr[1]) * ar, Sr[2] + (1 - Sr[2]) * ar], Ir = [this.buildMesh(rr.cells, Sr, Qr.alpha, ((rr, Sr, Wr, ar) => {
          xr(rr, Sr, Wr, Zr[ar], Qr.size, !1)
        })), this.buildMesh(rr.cells, jr, Qr.alpha, ((rr, Sr, Wr, ar) => {
          xr(rr, Sr, Wr, Zr[ar], Qr.size, !0)
        }))];
        return Qr.crossed && Ir.push(this.buildMesh(rr.cells, Sr, .9, ((rr, Sr, Zr) => {
          (0, Wr.i)(rr, Sr, Zr, Qr.size + .01, .12)
        }))), {
          group: rr,
          meshes: Ir
        }
      }
      buildMesh(rr, Sr, Qr, Zr) {
        const Wr = [rr[0], rr[1], rr[2]],
          ar = [],
          jr = [];
        for (let Ir = 0; Ir < rr.length; Ir += 3) Zr(ar, jr, [rr[Ir] - Wr[0] + .5, rr[Ir + 1] - Wr[1] + .5, rr[Ir + 2] - Wr[2] + .5], Ir / 3);
        return this.api.createGameMesh({
          positions: ar,
          indices: jr
        }, {
          rgb: [Sr[0], Sr[1], Sr[2]],
          alpha: Qr
        }, Wr)
      }
    }

    function xr(rr, Sr, Qr, Zr, ar, jr) {
      for (let Ir = 0; Ir < Zr.length; Ir += 6) {
        const fr = [0, 0, 0],
          Er = [0, 0, 0];
        for (let rr = 0; rr < 3; rr++) fr[rr] = Qr[rr] + ((Zr[Ir + rr] + Zr[Ir + rr + 3]) / 2 - .5) * ar, Er[rr] = (Zr[Ir + rr + 3] - Zr[Ir + rr]) * ar;
        (0, Wr.c)(rr, Sr, fr, Er, jr)
      }
    }

    function mr(rr, Sr, Qr) {
      return rr.rgb[0] === Sr[0] && rr.rgb[1] === Sr[1] && rr.rgb[2] === Sr[2] && rr.look === Qr
    }

    function Nr(rr, Sr) {
      if (rr.cells.length !== Sr.cells.length) return !1;
      for (let Qr = 0; Qr < rr.cells.length; Qr++)
        if (rr.cells[Qr] !== Sr.cells[Qr]) return !1;
      return rr.boxes.every(((rr, Qr) => rr === Sr.boxes[Qr]))
    }
  },
  40013: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => jr,
      f: () => ar
    });
    const Zr = new WeakMap;

    function Wr(rr) {
      let Sr = Zr.get(rr);
      return Sr || (Sr = {
        hidden: rr.hidden,
        x: NaN,
        y: NaN
      }, Zr.set(rr, Sr)), Sr
    }

    function ar(rr, Sr) {
      const Qr = Wr(rr);
      Qr.hidden !== Sr && (Qr.hidden = Sr, rr.hidden = Sr)
    }

    function jr(rr, Sr, Qr) {
      const Zr = Wr(rr);
      Zr.x === Sr && Zr.y === Qr || (Zr.x = Sr, Zr.y = Qr, rr.style.translate = `${Sr}vw ${Qr}vh`)
    }
  },
  41149: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => jr,
      f: () => xr
    });
    var Zr = Qr(5779),
      Wr = Qr(5811),
      ar = Qr(5830);
    const jr = [0, 0, 0, 1, 1, 1],
      Ir = (0, Wr.e)([
        [2, 0, 2, 6, 6, 6]
      ]),
      fr = (0, Wr.e)([
        [3, 0, 3, 5, 5, 5]
      ]),
      Er = (0, Wr.e)([
        [3, 3, 3, 5, 8, 5]
      ]),
      pr = [0, 1, 2, 3].map((rr => (0, Wr.e)((0, Wr.n)([
        [3, 2, 0, 5, 7, 3]
      ], rr))));

    function xr(rr) {
      const {
        Bh: Sr,
        model: Qr,
        blockModel: Wr,
        meta: xr
      } = Zr.j[rr];
      return void 0 !== Sr ? Sr : "CentreCross" === Qr ? Ir : null !== Wr && void 0 !== Wr && Wr.startsWith("torch") ? xr.halfblockPlacement === ar.b.side ? pr[xr.rot - 1] : xr.halfblockPlacement === ar.b.top ? Er : fr : jr
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);