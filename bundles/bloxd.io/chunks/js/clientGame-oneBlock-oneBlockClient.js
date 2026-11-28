export const id = 25;
export const ids = [25];
export const modules = {
  37956: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => gb,
      i: () => lb,
      k: () => Lb,
      o: () => Ib,
      s: () => Cb
    });
    var eb = Mb(64),
      Hb = Mb(4472),
      pb = Mb(3642),
      Vb = Mb(29);
    const gb = 8,
      lb = "InGameHeaderContainer",
      Lb = "TopRightElements";

    function Ib(bb) {
      const [wb] = (0, Hb.c)(), [Mb, pb] = (0, eb.useState)(!1);
      return (0, eb.useLayoutEffect)((() => {
        if (!bb) return;
        const wb = document.querySelector(`.${lb}`),
          Mb = document.querySelector(`.${Lb}`),
          eb = () => {
            const eb = bb.getBoundingClientRect(),
              Hb = wb ? wb.getBoundingClientRect().right : 0,
              Vb = Mb ? Mb.getBoundingClientRect().left : window.innerWidth,
              lb = eb.left < Hb + gb,
              Lb = eb.right > Vb - gb;
            pb(lb || Lb)
          };
        eb();
        const Hb = new ResizeObserver(eb);
        return Hb.observe(bb), wb && Hb.observe(wb), Mb && Hb.observe(Mb), () => {
          Hb.disconnect()
        }
      }), [bb, wb]), Mb
    }
    const Ob = `.InGameUi .${lb}`,
      Ub = [Ob, ".InGameUi .TopRightIcons", ".InGameUi .TopRightElementsRight"],
      tb = 1e3;

    function Cb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb,
        Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const [Hb, lb] = (0, eb.useState)(null);
      return (0, eb.useLayoutEffect)((() => {
        if (!bb) return;
        const eb = new ResizeObserver((() => {
          Lb()
        }));
        eb.observe(bb), wb && wb !== bb && eb.observe(wb);
        let Hb = [];

        function Lb() {
          var pb, Vb, Lb;
          const Ib = bb.getBoundingClientRect(),
            tb = function() {
              const bb = Ub.map((bb => document.querySelector(bb))).filter((bb => null !== bb));
              for (const wb of bb) Hb.includes(wb) || eb.observe(wb);
              for (const wb of Hb) bb.includes(wb) || eb.unobserve(wb);
              return Hb = bb, bb
            }(),
            Cb = tb.filter((bb => {
              const wb = bb.getBoundingClientRect();
              return wb.width > 0 && wb.height > 0 && Ib.left < wb.right + gb && Ib.right > wb.left - gb
            }));
          if (0 === Cb.length && !Mb) return void lb(null);
          const Eb = tb.find((bb => bb.matches(Ob))),
            Fb = Math.max(null !== (pb = null === Eb || void 0 === Eb ? void 0 : Eb.getBoundingClientRect().bottom) && void 0 !== pb ? pb : 0, ...Cb.map((bb => bb.getBoundingClientRect().bottom))),
            Bb = null !== (Vb = null === wb || void 0 === wb || null === (Lb = wb.offsetParent) || void 0 === Lb ? void 0 : Lb.getBoundingClientRect().top) && void 0 !== Vb ? Vb : 0;
          lb(Math.ceil(Fb + gb / 2) - Math.round(Bb))
        }
        const Ib = setInterval(Lb, tb);
        Lb(), window.addEventListener("resize", Lb);
        const Cb = (0, Vb.o)(pb.e, Lb);
        return () => {
          eb.disconnect(), clearInterval(Ib), window.removeEventListener("resize", Lb), Cb()
        }
      }), [bb, wb, Mb]), Hb
    }
  },
  39756: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Vb,
      g: () => gb,
      i: () => lb
    });
    const eb = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      Hb = [0, 1, 2, 0, 2, 3],
      pb = [4, 5];

    function Vb(bb, wb, Mb, eb, Hb) {
      for (let Vb = 0; Vb < 6; Vb++) pb.includes(Vb) === Hb && Lb(bb, wb, Mb, eb, Vb)
    }

    function gb(bb, wb, Mb, eb) {
      for (let Hb = 0; Hb < 6; Hb++) Lb(bb, wb, Mb, eb, Hb)
    }

    function lb(bb, wb, Mb, pb, Vb) {
      for (let gb = 0; gb < 6; gb++)
        for (const lb of [0, 1]) {
          const [Lb, Ib, Ob] = [lb + 2, lb + 1, (lb + 3) % 4], Ub = bb.length / 3;
          for (const [wb, Hb] of [
              [lb, Ib],
              [Lb, Ib],
              [Lb, Ob],
              [lb, Ob]
            ])
            for (let lb = 0; lb < 3; lb++) {
              const Lb = eb[3 * (4 * gb + wb) + lb],
                Ib = eb[3 * (4 * gb + Hb) + lb];
              bb.push((Lb + (Ib - Lb) * Vb) * pb / 2 + Mb[lb])
            }
          for (const bb of Hb) wb.push(Ub + bb)
        }
    }

    function Lb(bb, wb, Mb, pb, Vb) {
      let [gb, lb, Lb] = Mb, [Ib, Ob, Ub] = pb;
      const tb = bb.length / 3;
      for (let Hb = 4 * Vb; Hb < 4 * Vb + 4; Hb++) bb.push(eb[3 * Hb] * Ib / 2 + gb, eb[3 * Hb + 1] * Ob / 2 + lb, eb[3 * Hb + 2] * Ub / 2 + Lb);
      for (const eb of Hb) wb.push(tb + eb)
    }
  },
  40919: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => Wb
    });
    var eb = Mb(64),
      Hb = Mb(3531),
      pb = Mb(40928);
    const Vb = [1, .62, .05],
      gb = [.35, .45, .55, .65, .55, .45].map((bb => ({
        size: .85,
        alpha: bb,
        crossed: !1
      })));
    class lb {
      constructor(bb) {
        this.api = bb, this.cells = [], this.meshes = void 0, this.pulseMs = 0, this.shown = "", this.meshes = new pb.l(bb)
      }
      EO(bb) {
        this.cells = bb, this.shown = "", 0 === bb.length && this.meshes.dispose()
      }
      afterRender(bb) {
        if (0 === this.cells.length) return;
        this.pulseMs += bb;
        const wb = gb[Math.floor(this.pulseMs / 160) % gb.length],
          Mb = new pb.i,
          eb = [];
        for (let pb = 0; pb < this.cells.length; pb += 3) {
          const [bb, Hb, gb] = [this.cells[pb], this.cells[pb + 1], this.cells[pb + 2]];
          this.api.isBlockInLoadedChunk(bb, Hb, gb) && 0 === this.api.getBlockId(bb, Hb, gb) && (Mb.add(bb, Hb, gb, Vb, wb), eb.push(bb, Hb, gb))
        }
        const Hb = `${gb.indexOf(wb)}|${eb.join(",")}`;
        Hb !== this.shown && (this.shown = Hb, this.meshes.show(Mb.toArray()))
      }
      dispose() {
        this.meshes.dispose(), this.cells = []
      }
    }
    var Lb = Mb(29),
      Ib = Mb(39723);
    const Ob = "obQuestCardChanged",
      Ub = "obBlockPop",
      tb = "obPhaseParty";
    class Cb {
      constructor(bb) {
        this.getOneBlockPos = bb, this.card = ["none"], this.pointer = null, this.pending = null, this.holdTimeout = null
      }
      getCard() {
        return this.card
      }
      receiveCard(bb) {
        null === this.holdTimeout ? (this.card = bb, Lb.k.iI(Ob, bb, !0), "task" === bb[0] && bb[4] && (this.holdTimeout = setTimeout((() => {
          this.holdTimeout = null;
          const bb = this.pending;
          this.pending = null, null !== bb && this.receiveCard(bb)
        }), 1e3))) : this.pending = bb
      }
      dispose() {
        null !== this.holdTimeout && (clearTimeout(this.holdTimeout), this.holdTimeout = null), this.pending = null
      }
      receivePop(bb) {
        Lb.k.iI(Ub, bb, !0)
      }
      receiveParty(bb) {
        Lb.k.iI(tb, bb, !0)
      }
      setPointer(bb) {
        this.pointer = bb
      }
      afterRender(bb) {
        const wb = this.pointer;
        if (null === wb) return;
        const Mb = this.getOneBlockPos(),
          eb = null === Mb ? null : bb.projectWorldPosToViewport([Mb[0] + .5, Mb[1] + 1.9, Mb[2] + .5]),
          Hb = null !== eb && eb.x >= 0 && eb.x <= 100 && eb.y >= 0 && eb.y <= 100;
        (0, Ib.f)(wb, !Hb), Hb && (0, Ib.b)(wb, Math.round(100 * eb.x) / 100, Math.round(100 * eb.y) / 100)
      }
    }
    var Eb = Mb(2130),
      Fb = Mb(1611),
      Bb = Mb(1259),
      sb = Mb(1364);
    let mb = 1;

    function hb() {
      const [bb, wb] = (0, eb.useState)([]), [Mb, Hb] = (0, eb.useState)(null);
      return (0, Fb.e)(Ub, (() => {
        const bb = {
          id: mb++,
          driftRem: 6 * (Math.random() - .5)
        };
        wb((wb => [...wb.slice(-4), bb])), setTimeout((() => {
          wb((wb => wb.filter((wb => wb.id !== bb.id))))
        }), 900)
      })), (0, Fb.e)(tb, (bb => {
        Hb({
          id: mb++,
          wire: bb
        })
      })), (0, sb.jsxs)(sb.Fragment, {
        children: [(0, sb.jsx)("div", {
          className: "OBBlockPops",
          children: bb.map((bb => (0, sb.jsx)("div", {
            className: "OBBlockPop",
            style: {
              "--ob-pop-drift": `${bb.driftRem}rem`
            },
            children: (0, sb.jsx)("span", {
              className: "OBBlockPopPlus",
              children: "+1"
            })
          }, bb.id)))
        }), null !== Mb && (0, sb.jsx)(Xb, {
          wire: Mb.wire,
          onDone: () => {
            Hb((bb => (null === bb || void 0 === bb ? void 0 : bb.id) === Mb.id ? null : bb))
          }
        }, Mb.id)]
      })
    }
    const zb = {
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

    function Xb(bb) {
      let {
        wire: wb,
        onDone: Mb
      } = bb;
      const {
        t: Hb
      } = (0, Bb.C)(), [pb, Vb, gb, lb] = wb, Lb = Object.hasOwn(zb, pb) ? Hb(zb[pb]) : pb, Ib = (0, eb.useRef)(Mb);
      return Ib.current = Mb, (0, eb.useEffect)((() => {
        const bb = setTimeout((() => {
          Ib.current()
        }), 5200);
        return () => {
          clearTimeout(bb)
        }
      }), []), (0, sb.jsxs)("div", {
        className: "OBPhaseParty",
        role: "status",
        children: [(0, sb.jsx)("div", {
          className: "OBPhasePartyConfetti",
          children: Array.from({
            length: 26
          }, ((bb, wb) => (0, sb.jsx)("span", {
            style: {
              "--ob-confetti-x": 37 * wb % 100 + "%",
              "--ob-confetti-delay": wb % 7 * 90 + "ms",
              "--ob-confetti-spin": "" + (wb % 2 === 0 ? 1 : -1)
            }
          }, wb)))
        }), (0, sb.jsxs)("div", {
          className: "OBPhasePartyPanel",
          style: {
            "--ob-phase-colour": Vb
          },
          children: [(0, sb.jsx)("div", {
            className: "OBPhasePartyTitle",
            children: Hb("oneblockGame:obPartyUnlocked", {
              phase: Lb
            })
          }), gb.length > 0 && (0, sb.jsxs)("div", {
            className: "OBPhasePartyNew",
            children: [(0, sb.jsx)("span", {
              className: "OBPhasePartyNewLabel",
              children: Hb("oneblockGame:obPartyNewBlocks")
            }), gb.map((bb => (0, sb.jsx)("span", {
              className: "OBPhasePartyBlock",
              children: (0, sb.jsx)(Eb.c, {
                itemName: bb,
                amount: 1
              })
            }, bb)))]
          }), lb && (0, sb.jsxs)("div", {
            className: "OBPhasePartyGift",
            children: [(0, sb.jsx)("span", {
              className: "OBPhasePartyBlock",
              children: (0, sb.jsx)(Eb.c, {
                itemName: "Chest",
                amount: 1
              })
            }), Hb("oneblockGame:obPartyGift")]
          })]
        })]
      })
    }
    var xb = Mb(1159),
      jb = Mb.n(xb),
      Kb = Mb(37956);
    const rb = {
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

    function Rb(bb) {
      let {
        hud: wb
      } = bb;
      const Mb = (0, Fb.h)(Ob, wb.getCard());
      if ("none" === Mb[0] || void 0 === rb[Mb[1]]) return null;
      const [, eb, Hb, pb, Vb, gb, lb, Lb, Ib, Ub] = Mb;
      return (0, sb.jsxs)(sb.Fragment, {
        children: [(0, sb.jsx)(Db, {
          task: rb[eb],
          progress: Hb,
          goal: pb,
          completed: Vb,
          mineFirst: gb,
          pickBlockKey: Ub,
          plains: "reach_plains" === eb ? null : {
            blocksMined: lb,
            plainsAt: Lb
          },
          touch: Ib
        }, eb), "mine_1" === eb && 0 === Hb && !Vb && (0, sb.jsx)(Yb, {
          hud: wb
        })]
      })
    }

    function Db(bb) {
      let {
        task: wb,
        progress: Mb,
        goal: Hb,
        completed: pb,
        mineFirst: Vb,
        pickBlockKey: gb,
        plains: lb,
        touch: Lb
      } = bb;
      const {
        t: Ib
      } = (0, Bb.C)(), [Ob, Ub] = (0, eb.useState)(null), tb = (0, Kb.o)(Ob);
      let Cb = Ib(Lb && wb.touchKey ? wb.touchKey : wb.key);
      return null !== gb ? Cb = Ib("oneblockGame:obPickABlock", {
        key: gb
      }) : Vb > 0 && (Cb = Ib("oneblockGame:obMineFirst", {
        count: Vb
      })), (0, sb.jsx)("div", {
        className: jb()("OBQuestCardContainer", {
          Below: tb
        }),
        children: (0, sb.jsxs)("div", {
          ref: Ub,
          className: jb()("OBQuestCard", {
            Completed: pb,
            Short: Vb > 0 || null !== gb
          }),
          role: "status",
          children: [(0, sb.jsxs)("span", {
            className: "OBQuestCardIcon",
            children: [(0, sb.jsx)(Eb.c, {
              itemName: wb.icon,
              amount: 1
            }), pb && (0, sb.jsx)("span", {
              className: "OBQuestCardTick"
            })]
          }), (0, sb.jsxs)("div", {
            className: "OBQuestCardBody",
            children: [(0, sb.jsx)("div", {
              className: "OBQuestCardLine SmallTextBold",
              children: Cb
            }), Hb > 1 && (0, sb.jsx)(cb, {
              className: "OBQuestCardTaskBar",
              progress: Mb,
              goal: Hb
            }), null !== lb && lb.blocksMined < lb.plainsAt && (0, sb.jsxs)("div", {
              className: "OBQuestCardPlains",
              children: [(0, sb.jsx)("span", {
                className: "OBQuestCardPlainsLabel",
                children: Ib("oneblockGame:obCardPlainsIn", {
                  count: lb.plainsAt - lb.blocksMined
                })
              }), (0, sb.jsx)(cb, {
                className: "OBQuestCardPlainsBar",
                progress: lb.blocksMined,
                goal: lb.plainsAt,
                hideCount: !0
              })]
            })]
          }), pb && (0, sb.jsx)("span", {
            className: "OBQuestCardBurst"
          })]
        })
      })
    }

    function cb(bb) {
      let {
        className: wb,
        progress: Mb,
        goal: eb,
        hideCount: Hb = !1
      } = bb;
      const pb = Math.min(Mb, eb);
      return (0, sb.jsxs)("div", {
        className: jb()("OBQuestCardBar", wb),
        children: [(0, sb.jsx)("div", {
          className: "OBQuestCardBarTrack",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": eb,
          "aria-valuenow": pb,
          children: (0, sb.jsx)("div", {
            className: "OBQuestCardBarFill",
            style: {
              transform: `scaleX(${eb>0?pb/eb:0})`
            }
          })
        }), !Hb && (0, sb.jsxs)("span", {
          className: "OBQuestCardBarCount",
          children: [pb, "/", eb]
        })]
      })
    }

    function Yb(bb) {
      let {
        hud: wb
      } = bb;
      return (0, sb.jsx)("div", {
        ref: bb => {
          wb.setPointer(bb)
        },
        className: "OBBlockPointer",
        hidden: !0,
        children: (0, sb.jsx)("span", {
          className: "OBBlockPointerArrow"
        })
      })
    }
    const Zb = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const fb = 6400;

    function Ab(bb, wb) {
      const Mb = Math.ceil((bb - 3200) / fb);
      if (Mb !== Math.ceil((wb - 3200) / fb) || Mb <= 0) return null;
      const eb = Mb * fb + 6;
      return [eb, 10, eb]
    }
    const Wb = function(bb, wb, Mb, pb) {
      let Vb, {
          localPlayerId: gb
        } = pb,
        Lb = [],
        Ib = null,
        Ob = null;
      const Ub = new Cb((() => {
        const bb = Vb.getPositionView(gb);
        return null === bb ? null : Ab(bb[0], bb[2])
      }));
      return {
        onCreate: bb => {
          Vb = bb, Ib = new lb(Vb), Ob = (0, Hb.J)((0, eb.createElement)(eb.Fragment, null, (0, eb.createElement)(Rb, {
            hud: Ub
          }), (0, eb.createElement)(hb)))
        },
        onClose: () => {
          var bb, wb;
          null === (bb = Ob) || void 0 === bb || bb(), Ub.dispose(), null === (wb = Ib) || void 0 === wb || wb.dispose(), Ib = null
        },
        onReceivedMessageFromServer: (bb, wb) => {
          if ("oneBlockNextBlocks" === bb) Lb = wb.blocks.map((bb => Vb.blockNameToBlockId(bb)));
          else if ("obQuestCard" === bb) Ub.receiveCard(wb);
          else if ("obGhostLedge" === bb) {
            var Mb;
            null === (Mb = Ib) || void 0 === Mb || Mb.EO(wb)
          } else "obBlockPop" === bb ? Ub.receivePop(wb) : "obPhaseParty" === bb && Ub.receiveParty(wb)
        },
        onAfterRender: (bb, wb) => {
          var Mb;
          null === (Mb = Ib) || void 0 === Mb || Mb.afterRender(bb), Ub.afterRender(wb)
        },
        sO: () => {
          if (0 === Lb.length) return;
          const bb = Vb.getPositionView(gb),
            wb = Ab(bb[0], bb[2]);
          if (!wb) return;
          const [Mb, eb, Hb] = wb;
          if (Vb.isBlockInLoadedChunk(Mb, eb, Hb) && 0 === Vb.getBlockId(Mb, eb, Hb)) {
            const bb = Lb.shift();
            Vb.setBlockId(Mb, eb, Hb, bb)
          }
        },
        onPlayerAltAction: (bb, wb, Mb, eb, Hb, pb) => {
          ! function(bb, wb, Mb, eb) {
            if (!Mb || "Mesh" !== bb.getEntityType(Mb)) return !1;
            const Hb = Zb[bb.getEntityName(Mb)];
            !!Hb && bb.openShop(wb, eb, Hb)
          }(Vb, bb, pb, !1)
        }
      }
    }
  },
  40928: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => gb,
      e: () => lb,
      h: () => Vb,
      i: () => Lb,
      l: () => Ib
    });
    var eb = Mb(40931),
      Hb = Mb(39756);
    const pb = .35,
      Vb = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      gb = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      lb = [.95, .2, .15];
    class Lb {
      constructor() {
        this.groups = []
      }
      add(bb, wb, Mb, Hb, pb) {
        let Vb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : eb.c;
        for (const eb of this.groups)
          if (Ub(eb, Hb, pb)) return eb.cells.push(bb, wb, Mb), void eb.boxes.push(Vb);
        this.groups.push({
          rgb: Hb,
          look: pb,
          cells: [bb, wb, Mb],
          boxes: [Vb]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class Ib {
      constructor(bb) {
        this.api = bb, this.shown = []
      }
      show(bb) {
        const wb = [];
        for (const Mb of bb) {
          const bb = this.shown.findIndex((bb => {
            let {
              group: wb
            } = bb;
            return Ub(wb, Mb.rgb, Mb.look) && tb(wb, Mb)
          })); - 1 === bb ? wb.push(this.build(Mb)) : (wb.push(this.shown[bb]), this.shown.splice(bb, 1))
        }
        this.dispose(), this.shown = wb
      }
      dispose() {
        for (const {
            meshes: bb
          }
          of this.shown)
          for (const wb of bb) this.api.disposeGameMesh(wb);
        this.shown = []
      }
      build(bb) {
        const {
          rgb: wb,
          look: Mb,
          boxes: eb
        } = bb, Vb = [wb[0] + (1 - wb[0]) * pb, wb[1] + (1 - wb[1]) * pb, wb[2] + (1 - wb[2]) * pb], gb = [this.buildMesh(bb.cells, wb, Mb.alpha, ((bb, wb, Hb, pb) => {
          Ob(bb, wb, Hb, eb[pb], Mb.size, !1)
        })), this.buildMesh(bb.cells, Vb, Mb.alpha, ((bb, wb, Hb, pb) => {
          Ob(bb, wb, Hb, eb[pb], Mb.size, !0)
        }))];
        return Mb.crossed && gb.push(this.buildMesh(bb.cells, wb, .9, ((bb, wb, eb) => {
          (0, Hb.i)(bb, wb, eb, Mb.size + .01, .12)
        }))), {
          group: bb,
          meshes: gb
        }
      }
      buildMesh(bb, wb, Mb, eb) {
        const Hb = [bb[0], bb[1], bb[2]],
          pb = [],
          Vb = [];
        for (let gb = 0; gb < bb.length; gb += 3) eb(pb, Vb, [bb[gb] - Hb[0] + .5, bb[gb + 1] - Hb[1] + .5, bb[gb + 2] - Hb[2] + .5], gb / 3);
        return this.api.createGameMesh({
          positions: pb,
          indices: Vb
        }, {
          rgb: [wb[0], wb[1], wb[2]],
          alpha: Mb
        }, Hb)
      }
    }

    function Ob(bb, wb, Mb, eb, pb, Vb) {
      for (let gb = 0; gb < eb.length; gb += 6) {
        const lb = [0, 0, 0],
          Lb = [0, 0, 0];
        for (let bb = 0; bb < 3; bb++) lb[bb] = Mb[bb] + ((eb[gb + bb] + eb[gb + bb + 3]) / 2 - .5) * pb, Lb[bb] = (eb[gb + bb + 3] - eb[gb + bb]) * pb;
        (0, Hb.c)(bb, wb, lb, Lb, Vb)
      }
    }

    function Ub(bb, wb, Mb) {
      return bb.rgb[0] === wb[0] && bb.rgb[1] === wb[1] && bb.rgb[2] === wb[2] && bb.look === Mb
    }

    function tb(bb, wb) {
      if (bb.cells.length !== wb.cells.length) return !1;
      for (let Mb = 0; Mb < bb.cells.length; Mb++)
        if (bb.cells[Mb] !== wb.cells[Mb]) return !1;
      return bb.boxes.every(((bb, Mb) => bb === wb.boxes[Mb]))
    }
  },
  39723: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Vb,
      f: () => pb
    });
    const eb = new WeakMap;

    function Hb(bb) {
      let wb = eb.get(bb);
      return wb || (wb = {
        hidden: bb.hidden,
        x: NaN,
        y: NaN
      }, eb.set(bb, wb)), wb
    }

    function pb(bb, wb) {
      const Mb = Hb(bb);
      Mb.hidden !== wb && (Mb.hidden = wb, bb.hidden = wb)
    }

    function Vb(bb, wb, Mb) {
      const eb = Hb(bb);
      eb.x === wb && eb.y === Mb || (eb.x = wb, eb.y = Mb, bb.style.translate = `${wb}vw ${Mb}vh`)
    }
  },
  40931: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Vb,
      e: () => Ob
    });
    var eb = Mb(5868),
      Hb = Mb(5899),
      pb = Mb(5914);
    const Vb = [0, 0, 0, 1, 1, 1],
      gb = (0, Hb.d)([
        [2, 0, 2, 6, 6, 6]
      ]),
      lb = (0, Hb.d)([
        [3, 0, 3, 5, 5, 5]
      ]),
      Lb = (0, Hb.d)([
        [3, 3, 3, 5, 8, 5]
      ]),
      Ib = [0, 1, 2, 3].map((bb => (0, Hb.d)((0, Hb.m)([
        [3, 2, 0, 5, 7, 3]
      ], bb))));

    function Ob(bb) {
      const {
        lF: wb,
        model: Mb,
        blockModel: Hb,
        meta: Ob
      } = eb.g[bb];
      return void 0 !== wb ? wb : "CentreCross" === Mb ? gb : null !== Hb && void 0 !== Hb && Hb.startsWith("torch") ? Ob.halfblockPlacement === pb.c.side ? Ib[Ob.rot - 1] : Ob.halfblockPlacement === pb.c.top ? Lb : lb : Vb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);