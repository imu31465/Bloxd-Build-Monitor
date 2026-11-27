export const id = 25;
export const ids = [25];
export const modules = {
  37919: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => LW,
      e: () => cW,
      h: () => wW,
      i: () => tW,
      j: () => AW
    });
    var mW = OW(62),
      EW = OW(4275),
      NW = OW(3457),
      PW = OW(27);
    const LW = 8,
      cW = "InGameHeaderContainer",
      wW = "TopRightElements";

    function tW(WW) {
      const [iW] = (0, EW.d)(), [OW, NW] = (0, mW.useState)(!1);
      return (0, mW.useLayoutEffect)((() => {
        if (!WW) return;
        const iW = document.querySelector(`.${cW}`),
          OW = document.querySelector(`.${wW}`),
          mW = () => {
            const mW = WW.getBoundingClientRect(),
              EW = iW ? iW.getBoundingClientRect().right : 0,
              PW = OW ? OW.getBoundingClientRect().left : window.innerWidth,
              cW = mW.left < EW + LW,
              wW = mW.right > PW - LW;
            NW(cW || wW)
          };
        mW();
        const EW = new ResizeObserver(mW);
        return EW.observe(WW), iW && EW.observe(iW), OW && EW.observe(OW), () => {
          EW.disconnect()
        }
      }), [WW, iW]), OW
    }
    const ZW = `.InGameUi .${cW}`,
      xW = [ZW, ".InGameUi .TopRightIcons", ".InGameUi .TopRightElementsRight"],
      lW = 1e3;

    function AW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW,
        OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const [EW, cW] = (0, mW.useState)(null);
      return (0, mW.useLayoutEffect)((() => {
        if (!WW) return;
        const mW = new ResizeObserver((() => {
          wW()
        }));
        mW.observe(WW), iW && iW !== WW && mW.observe(iW);
        let EW = [];

        function wW() {
          var NW, PW, wW;
          const tW = WW.getBoundingClientRect(),
            lW = function() {
              const WW = xW.map((WW => document.querySelector(WW))).filter((WW => null !== WW));
              for (const iW of WW) EW.includes(iW) || mW.observe(iW);
              for (const iW of EW) WW.includes(iW) || mW.unobserve(iW);
              return EW = WW, WW
            }(),
            AW = lW.filter((WW => {
              const iW = WW.getBoundingClientRect();
              return iW.width > 0 && iW.height > 0 && tW.left < iW.right + LW && tW.right > iW.left - LW
            }));
          if (0 === AW.length && !OW) return void cW(null);
          const bW = lW.find((WW => WW.matches(ZW))),
            jW = Math.max(null !== (NW = null === bW || void 0 === bW ? void 0 : bW.getBoundingClientRect().bottom) && void 0 !== NW ? NW : 0, ...AW.map((WW => WW.getBoundingClientRect().bottom))),
            UW = null !== (PW = null === iW || void 0 === iW || null === (wW = iW.offsetParent) || void 0 === wW ? void 0 : wW.getBoundingClientRect().top) && void 0 !== PW ? PW : 0;
          cW(Math.ceil(jW + LW / 2) - Math.round(UW))
        }
        const tW = setInterval(wW, lW);
        wW(), window.addEventListener("resize", wW);
        const AW = (0, PW.n)(NW.d, wW);
        return () => {
          mW.disconnect(), clearInterval(tW), window.removeEventListener("resize", wW), AW()
        }
      }), [WW, iW, OW]), EW
    }
  },
  39708: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => PW,
      h: () => LW,
      k: () => cW
    });
    const mW = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      EW = [0, 1, 2, 0, 2, 3],
      NW = [4, 5];

    function PW(WW, iW, OW, mW, EW) {
      for (let PW = 0; PW < 6; PW++) NW.includes(PW) === EW && wW(WW, iW, OW, mW, PW)
    }

    function LW(WW, iW, OW, mW) {
      for (let EW = 0; EW < 6; EW++) wW(WW, iW, OW, mW, EW)
    }

    function cW(WW, iW, OW, NW, PW) {
      for (let LW = 0; LW < 6; LW++)
        for (const cW of [0, 1]) {
          const [wW, tW, ZW] = [cW + 2, cW + 1, (cW + 3) % 4], xW = WW.length / 3;
          for (const [iW, EW] of [
              [cW, tW],
              [wW, tW],
              [wW, ZW],
              [cW, ZW]
            ])
            for (let cW = 0; cW < 3; cW++) {
              const wW = mW[3 * (4 * LW + iW) + cW],
                tW = mW[3 * (4 * LW + EW) + cW];
              WW.push((wW + (tW - wW) * PW) * NW / 2 + OW[cW])
            }
          for (const WW of EW) iW.push(xW + WW)
        }
    }

    function wW(WW, iW, OW, NW, PW) {
      let [LW, cW, wW] = OW, [tW, ZW, xW] = NW;
      const lW = WW.length / 3;
      for (let EW = 4 * PW; EW < 4 * PW + 4; EW++) WW.push(mW[3 * EW] * tW / 2 + LW, mW[3 * EW + 1] * ZW / 2 + cW, mW[3 * EW + 2] * xW / 2 + wW);
      for (const mW of EW) iW.push(lW + mW)
    }
  },
  40794: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => vW
    });
    var mW = OW(62),
      EW = OW(3361),
      NW = OW(40798);
    const PW = [1, .62, .05],
      LW = [.35, .45, .55, .65, .55, .45].map((WW => ({
        size: .85,
        alpha: WW,
        crossed: !1
      })));
    class cW {
      constructor(WW) {
        this.api = WW, this.cells = [], this.meshes = void 0, this.pulseMs = 0, this.shown = "", this.meshes = new NW.n(WW)
      }
      yZ(WW) {
        this.cells = WW, this.shown = "", 0 === WW.length && this.meshes.dispose()
      }
      afterRender(WW) {
        if (0 === this.cells.length) return;
        this.pulseMs += WW;
        const iW = LW[Math.floor(this.pulseMs / 160) % LW.length],
          OW = new NW.j,
          mW = [];
        for (let NW = 0; NW < this.cells.length; NW += 3) {
          const [WW, EW, LW] = [this.cells[NW], this.cells[NW + 1], this.cells[NW + 2]];
          this.api.isBlockInLoadedChunk(WW, EW, LW) && 0 === this.api.getBlockId(WW, EW, LW) && (OW.add(WW, EW, LW, PW, iW), mW.push(WW, EW, LW))
        }
        const EW = `${LW.indexOf(iW)}|${mW.join(",")}`;
        EW !== this.shown && (this.shown = EW, this.meshes.show(OW.toArray()))
      }
      dispose() {
        this.meshes.dispose(), this.cells = []
      }
    }
    var wW = OW(27),
      tW = OW(39679);
    const ZW = "obQuestCardChanged",
      xW = "obBlockPop",
      lW = "obPhaseParty";
    class AW {
      constructor(WW) {
        this.getOneBlockPos = WW, this.card = ["none"], this.pointer = null, this.pending = null, this.holdTimeout = null
      }
      getCard() {
        return this.card
      }
      receiveCard(WW) {
        null === this.holdTimeout ? (this.card = WW, wW.l.iZ(ZW, WW, !0), "task" === WW[0] && WW[4] && (this.holdTimeout = setTimeout((() => {
          this.holdTimeout = null;
          const WW = this.pending;
          this.pending = null, null !== WW && this.receiveCard(WW)
        }), 1e3))) : this.pending = WW
      }
      dispose() {
        null !== this.holdTimeout && (clearTimeout(this.holdTimeout), this.holdTimeout = null), this.pending = null
      }
      receivePop(WW) {
        wW.l.iZ(xW, WW, !0)
      }
      receiveParty(WW) {
        wW.l.iZ(lW, WW, !0)
      }
      setPointer(WW) {
        this.pointer = WW
      }
      afterRender(WW) {
        const iW = this.pointer;
        if (null === iW) return;
        const OW = this.getOneBlockPos(),
          mW = null === OW ? null : WW.projectWorldPosToViewport([OW[0] + .5, OW[1] + 1.9, OW[2] + .5]),
          EW = null !== mW && mW.x >= 0 && mW.x <= 100 && mW.y >= 0 && mW.y <= 100;
        (0, tW.h)(iW, !EW), EW && (0, tW.e)(iW, Math.round(100 * mW.x) / 100, Math.round(100 * mW.y) / 100)
      }
    }
    var bW = OW(2032),
      jW = OW(1526),
      UW = OW(1172),
      kW = OW(1283);
    let sW = 1;

    function MW() {
      const [WW, iW] = (0, mW.useState)([]), [OW, EW] = (0, mW.useState)(null);
      return (0, jW.e)(xW, (() => {
        const WW = {
          id: sW++,
          driftRem: 6 * (Math.random() - .5)
        };
        iW((iW => [...iW.slice(-4), WW])), setTimeout((() => {
          iW((iW => iW.filter((iW => iW.id !== WW.id))))
        }), 900)
      })), (0, jW.e)(lW, (WW => {
        EW({
          id: sW++,
          wire: WW
        })
      })), (0, kW.jsxs)(kW.Fragment, {
        children: [(0, kW.jsx)("div", {
          className: "OBBlockPops",
          children: WW.map((WW => (0, kW.jsx)("div", {
            className: "OBBlockPop",
            style: {
              "--ob-pop-drift": `${WW.driftRem}rem`
            },
            children: (0, kW.jsx)("span", {
              className: "OBBlockPopPlus",
              children: "+1"
            })
          }, WW.id)))
        }), null !== OW && (0, kW.jsx)(SW, {
          wire: OW.wire,
          onDone: () => {
            EW((WW => (null === WW || void 0 === WW ? void 0 : WW.id) === OW.id ? null : WW))
          }
        }, OW.id)]
      })
    }
    const KW = {
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

    function SW(WW) {
      let {
        wire: iW,
        onDone: OW
      } = WW;
      const {
        t: EW
      } = (0, UW.B)(), [NW, PW, LW, cW] = iW, wW = Object.hasOwn(KW, NW) ? EW(KW[NW]) : NW, tW = (0, mW.useRef)(OW);
      return tW.current = OW, (0, mW.useEffect)((() => {
        const WW = setTimeout((() => {
          tW.current()
        }), 5200);
        return () => {
          clearTimeout(WW)
        }
      }), []), (0, kW.jsxs)("div", {
        className: "OBPhaseParty",
        role: "status",
        children: [(0, kW.jsx)("div", {
          className: "OBPhasePartyConfetti",
          children: Array.from({
            length: 26
          }, ((WW, iW) => (0, kW.jsx)("span", {
            style: {
              "--ob-confetti-x": 37 * iW % 100 + "%",
              "--ob-confetti-delay": iW % 7 * 90 + "ms",
              "--ob-confetti-spin": "" + (iW % 2 === 0 ? 1 : -1)
            }
          }, iW)))
        }), (0, kW.jsxs)("div", {
          className: "OBPhasePartyPanel",
          style: {
            "--ob-phase-colour": PW
          },
          children: [(0, kW.jsx)("div", {
            className: "OBPhasePartyTitle",
            children: EW("oneblockGame:obPartyUnlocked", {
              phase: wW
            })
          }), LW.length > 0 && (0, kW.jsxs)("div", {
            className: "OBPhasePartyNew",
            children: [(0, kW.jsx)("span", {
              className: "OBPhasePartyNewLabel",
              children: EW("oneblockGame:obPartyNewBlocks")
            }), LW.map((WW => (0, kW.jsx)("span", {
              className: "OBPhasePartyBlock",
              children: (0, kW.jsx)(bW.b, {
                itemName: WW,
                amount: 1
              })
            }, WW)))]
          }), cW && (0, kW.jsxs)("div", {
            className: "OBPhasePartyGift",
            children: [(0, kW.jsx)("span", {
              className: "OBPhasePartyBlock",
              children: (0, kW.jsx)(bW.b, {
                itemName: "Chest",
                amount: 1
              })
            }), EW("oneblockGame:obPartyGift")]
          })]
        })]
      })
    }
    var YW = OW(1089),
      yW = OW.n(YW),
      TW = OW(37919);
    const JW = {
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

    function hW(WW) {
      let {
        hud: iW
      } = WW;
      const OW = (0, jW.g)(ZW, iW.getCard());
      if ("none" === OW[0] || void 0 === JW[OW[1]]) return null;
      const [, mW, EW, NW, PW, LW, cW, wW, tW, xW] = OW;
      return (0, kW.jsxs)(kW.Fragment, {
        children: [(0, kW.jsx)(HW, {
          task: JW[mW],
          progress: EW,
          goal: NW,
          completed: PW,
          mineFirst: LW,
          pickBlockKey: xW,
          plains: "reach_plains" === mW ? null : {
            blocksMined: cW,
            plainsAt: wW
          },
          touch: tW
        }, mW), "mine_1" === mW && 0 === EW && !PW && (0, kW.jsx)(uW, {
          hud: iW
        })]
      })
    }

    function HW(WW) {
      let {
        task: iW,
        progress: OW,
        goal: EW,
        completed: NW,
        mineFirst: PW,
        pickBlockKey: LW,
        plains: cW,
        touch: wW
      } = WW;
      const {
        t: tW
      } = (0, UW.B)(), [ZW, xW] = (0, mW.useState)(null), lW = (0, TW.i)(ZW);
      let AW = tW(wW && iW.touchKey ? iW.touchKey : iW.key);
      return null !== LW ? AW = tW("oneblockGame:obPickABlock", {
        key: LW
      }) : PW > 0 && (AW = tW("oneblockGame:obMineFirst", {
        count: PW
      })), (0, kW.jsx)("div", {
        className: yW()("OBQuestCardContainer", {
          Below: lW
        }),
        children: (0, kW.jsxs)("div", {
          ref: xW,
          className: yW()("OBQuestCard", {
            Completed: NW,
            Short: PW > 0 || null !== LW
          }),
          role: "status",
          children: [(0, kW.jsxs)("span", {
            className: "OBQuestCardIcon",
            children: [(0, kW.jsx)(bW.b, {
              itemName: iW.icon,
              amount: 1
            }), NW && (0, kW.jsx)("span", {
              className: "OBQuestCardTick"
            })]
          }), (0, kW.jsxs)("div", {
            className: "OBQuestCardBody",
            children: [(0, kW.jsx)("div", {
              className: "OBQuestCardLine SmallTextBold",
              children: AW
            }), EW > 1 && (0, kW.jsx)(nW, {
              className: "OBQuestCardTaskBar",
              progress: OW,
              goal: EW
            }), null !== cW && cW.blocksMined < cW.plainsAt && (0, kW.jsxs)("div", {
              className: "OBQuestCardPlains",
              children: [(0, kW.jsx)("span", {
                className: "OBQuestCardPlainsLabel",
                children: tW("oneblockGame:obCardPlainsIn", {
                  count: cW.plainsAt - cW.blocksMined
                })
              }), (0, kW.jsx)(nW, {
                className: "OBQuestCardPlainsBar",
                progress: cW.blocksMined,
                goal: cW.plainsAt,
                hideCount: !0
              })]
            })]
          }), NW && (0, kW.jsx)("span", {
            className: "OBQuestCardBurst"
          })]
        })
      })
    }

    function nW(WW) {
      let {
        className: iW,
        progress: OW,
        goal: mW,
        hideCount: EW = !1
      } = WW;
      const NW = Math.min(OW, mW);
      return (0, kW.jsxs)("div", {
        className: yW()("OBQuestCardBar", iW),
        children: [(0, kW.jsx)("div", {
          className: "OBQuestCardBarTrack",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": mW,
          "aria-valuenow": NW,
          children: (0, kW.jsx)("div", {
            className: "OBQuestCardBarFill",
            style: {
              transform: `scaleX(${mW>0?NW/mW:0})`
            }
          })
        }), !EW && (0, kW.jsxs)("span", {
          className: "OBQuestCardBarCount",
          children: [NW, "/", mW]
        })]
      })
    }

    function uW(WW) {
      let {
        hud: iW
      } = WW;
      return (0, kW.jsx)("div", {
        ref: WW => {
          iW.setPointer(WW)
        },
        className: "OBBlockPointer",
        hidden: !0,
        children: (0, kW.jsx)("span", {
          className: "OBBlockPointerArrow"
        })
      })
    }
    const oW = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const dW = 6400;

    function eW(WW, iW) {
      const OW = Math.ceil((WW - 3200) / dW);
      if (OW !== Math.ceil((iW - 3200) / dW) || OW <= 0) return null;
      const mW = OW * dW + 6;
      return [mW, 10, mW]
    }
    const vW = function(WW, iW, OW, NW) {
      let PW, {
          localPlayerId: LW
        } = NW,
        wW = [],
        tW = null,
        ZW = null;
      const xW = new AW((() => {
        const WW = PW.getPositionView(LW);
        return null === WW ? null : eW(WW[0], WW[2])
      }));
      return {
        onCreate: WW => {
          PW = WW, tW = new cW(PW), ZW = (0, EW.O)((0, mW.createElement)(mW.Fragment, null, (0, mW.createElement)(hW, {
            hud: xW
          }), (0, mW.createElement)(MW)))
        },
        onClose: () => {
          var WW, iW;
          null === (WW = ZW) || void 0 === WW || WW(), xW.dispose(), null === (iW = tW) || void 0 === iW || iW.dispose(), tW = null
        },
        onReceivedMessageFromServer: (WW, iW) => {
          if ("oneBlockNextBlocks" === WW) wW = iW.blocks.map((WW => PW.blockNameToBlockId(WW)));
          else if ("obQuestCard" === WW) xW.receiveCard(iW);
          else if ("obGhostLedge" === WW) {
            var OW;
            null === (OW = tW) || void 0 === OW || OW.yZ(iW)
          } else "obBlockPop" === WW ? xW.receivePop(iW) : "obPhaseParty" === WW && xW.receiveParty(iW)
        },
        onAfterRender: (WW, iW) => {
          var OW;
          null === (OW = tW) || void 0 === OW || OW.afterRender(WW), xW.afterRender(iW)
        },
        hZ: () => {
          if (0 === wW.length) return;
          const WW = PW.getPositionView(LW),
            iW = eW(WW[0], WW[2]);
          if (!iW) return;
          const [OW, mW, EW] = iW;
          if (PW.isBlockInLoadedChunk(OW, mW, EW) && 0 === PW.getBlockId(OW, mW, EW)) {
            const WW = wW.shift();
            PW.setBlockId(OW, mW, EW, WW)
          }
        },
        onPlayerAltAction: (WW, iW, OW, mW, EW, NW) => {
          ! function(WW, iW, OW, mW) {
            if (!OW || "Mesh" !== WW.getEntityType(OW)) return !1;
            const EW = oW[WW.getEntityName(OW)];
            !!EW && WW.openShop(iW, mW, EW)
          }(PW, WW, NW, !1)
        }
      }
    }
  },
  40798: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => LW,
      e: () => cW,
      h: () => PW,
      j: () => wW,
      n: () => tW
    });
    var mW = OW(40804),
      EW = OW(39708);
    const NW = .35,
      PW = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      LW = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      cW = [.95, .2, .15];
    class wW {
      constructor() {
        this.groups = []
      }
      add(WW, iW, OW, EW, NW) {
        let PW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : mW.d;
        for (const mW of this.groups)
          if (xW(mW, EW, NW)) return mW.cells.push(WW, iW, OW), void mW.boxes.push(PW);
        this.groups.push({
          rgb: EW,
          look: NW,
          cells: [WW, iW, OW],
          boxes: [PW]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class tW {
      constructor(WW) {
        this.api = WW, this.shown = []
      }
      show(WW) {
        const iW = [];
        for (const OW of WW) {
          const WW = this.shown.findIndex((WW => {
            let {
              group: iW
            } = WW;
            return xW(iW, OW.rgb, OW.look) && lW(iW, OW)
          })); - 1 === WW ? iW.push(this.build(OW)) : (iW.push(this.shown[WW]), this.shown.splice(WW, 1))
        }
        this.dispose(), this.shown = iW
      }
      dispose() {
        for (const {
            meshes: WW
          }
          of this.shown)
          for (const iW of WW) this.api.disposeGameMesh(iW);
        this.shown = []
      }
      build(WW) {
        const {
          rgb: iW,
          look: OW,
          boxes: mW
        } = WW, PW = [iW[0] + (1 - iW[0]) * NW, iW[1] + (1 - iW[1]) * NW, iW[2] + (1 - iW[2]) * NW], LW = [this.buildMesh(WW.cells, iW, OW.alpha, ((WW, iW, EW, NW) => {
          ZW(WW, iW, EW, mW[NW], OW.size, !1)
        })), this.buildMesh(WW.cells, PW, OW.alpha, ((WW, iW, EW, NW) => {
          ZW(WW, iW, EW, mW[NW], OW.size, !0)
        }))];
        return OW.crossed && LW.push(this.buildMesh(WW.cells, iW, .9, ((WW, iW, mW) => {
          (0, EW.k)(WW, iW, mW, OW.size + .01, .12)
        }))), {
          group: WW,
          meshes: LW
        }
      }
      buildMesh(WW, iW, OW, mW) {
        const EW = [WW[0], WW[1], WW[2]],
          NW = [],
          PW = [];
        for (let LW = 0; LW < WW.length; LW += 3) mW(NW, PW, [WW[LW] - EW[0] + .5, WW[LW + 1] - EW[1] + .5, WW[LW + 2] - EW[2] + .5], LW / 3);
        return this.api.createGameMesh({
          positions: NW,
          indices: PW
        }, {
          rgb: [iW[0], iW[1], iW[2]],
          alpha: OW
        }, EW)
      }
    }

    function ZW(WW, iW, OW, mW, NW, PW) {
      for (let LW = 0; LW < mW.length; LW += 6) {
        const cW = [0, 0, 0],
          wW = [0, 0, 0];
        for (let WW = 0; WW < 3; WW++) cW[WW] = OW[WW] + ((mW[LW + WW] + mW[LW + WW + 3]) / 2 - .5) * NW, wW[WW] = (mW[LW + WW + 3] - mW[LW + WW]) * NW;
        (0, EW.d)(WW, iW, cW, wW, PW)
      }
    }

    function xW(WW, iW, OW) {
      return WW.rgb[0] === iW[0] && WW.rgb[1] === iW[1] && WW.rgb[2] === iW[2] && WW.look === OW
    }

    function lW(WW, iW) {
      if (WW.cells.length !== iW.cells.length) return !1;
      for (let OW = 0; OW < WW.cells.length; OW++)
        if (WW.cells[OW] !== iW.cells[OW]) return !1;
      return WW.boxes.every(((WW, OW) => WW === iW.boxes[OW]))
    }
  },
  39679: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => PW,
      h: () => NW
    });
    const mW = new WeakMap;

    function EW(WW) {
      let iW = mW.get(WW);
      return iW || (iW = {
        hidden: WW.hidden,
        x: NaN,
        y: NaN
      }, mW.set(WW, iW)), iW
    }

    function NW(WW, iW) {
      const OW = EW(WW);
      OW.hidden !== iW && (OW.hidden = iW, WW.hidden = iW)
    }

    function PW(WW, iW, OW) {
      const mW = EW(WW);
      mW.x === iW && mW.y === OW || (mW.x = iW, mW.y = OW, WW.style.translate = `${iW}vw ${OW}vh`)
    }
  },
  40804: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => PW,
      e: () => ZW
    });
    var mW = OW(5725),
      EW = OW(5747),
      NW = OW(5766);
    const PW = [0, 0, 0, 1, 1, 1],
      LW = (0, EW.c)([
        [2, 0, 2, 6, 6, 6]
      ]),
      cW = (0, EW.c)([
        [3, 0, 3, 5, 5, 5]
      ]),
      wW = (0, EW.c)([
        [3, 3, 3, 5, 8, 5]
      ]),
      tW = [0, 1, 2, 3].map((WW => (0, EW.c)((0, EW.q)([
        [3, 2, 0, 5, 7, 3]
      ], WW))));

    function ZW(WW) {
      const {
        sj: iW,
        model: OW,
        blockModel: EW,
        meta: ZW
      } = mW.j[WW];
      return void 0 !== iW ? iW : "CentreCross" === OW ? LW : null !== EW && void 0 !== EW && EW.startsWith("torch") ? ZW.halfblockPlacement === NW.d.side ? tW[ZW.rot - 1] : ZW.halfblockPlacement === NW.d.top ? wW : cW : PW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);