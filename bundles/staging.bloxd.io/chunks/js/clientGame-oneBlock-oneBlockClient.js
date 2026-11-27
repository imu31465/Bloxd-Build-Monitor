export const id = 25;
export const ids = [25];
export const modules = {
  37849: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => qR,
      e: () => iR,
      i: () => fR,
      k: () => VR,
      l: () => eR
    });
    var yR = GR(66),
      tR = GR(4352),
      uR = GR(3593),
      ZR = GR(32);
    const qR = 8,
      iR = "InGameHeaderContainer",
      fR = "TopRightElements";

    function VR(RR) {
      const [JR] = (0, tR.e)(), [GR, uR] = (0, yR.useState)(!1);
      return (0, yR.useLayoutEffect)((() => {
        if (!RR) return;
        const JR = document.querySelector(`.${iR}`),
          GR = document.querySelector(`.${fR}`),
          yR = () => {
            const yR = RR.getBoundingClientRect(),
              tR = JR ? JR.getBoundingClientRect().right : 0,
              ZR = GR ? GR.getBoundingClientRect().left : window.innerWidth,
              iR = yR.left < tR + qR,
              fR = yR.right > ZR - qR;
            uR(iR || fR)
          };
        yR();
        const tR = new ResizeObserver(yR);
        return tR.observe(RR), JR && tR.observe(JR), GR && tR.observe(GR), () => {
          tR.disconnect()
        }
      }), [RR, JR]), GR
    }
    const KR = `.InGameUi .${iR}`,
      wR = [KR, ".InGameUi .TopRightIcons", ".InGameUi .TopRightElementsRight"],
      rR = 1e3;

    function eR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RR,
        GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const [tR, iR] = (0, yR.useState)(null);
      return (0, yR.useLayoutEffect)((() => {
        if (!RR) return;
        const yR = new ResizeObserver((() => {
          fR()
        }));
        yR.observe(RR), JR && JR !== RR && yR.observe(JR);
        let tR = [];

        function fR() {
          var uR, ZR, fR;
          const VR = RR.getBoundingClientRect(),
            rR = function() {
              const RR = wR.map((RR => document.querySelector(RR))).filter((RR => null !== RR));
              for (const JR of RR) tR.includes(JR) || yR.observe(JR);
              for (const JR of tR) RR.includes(JR) || yR.unobserve(JR);
              return tR = RR, RR
            }(),
            eR = rR.filter((RR => {
              const JR = RR.getBoundingClientRect();
              return JR.width > 0 && JR.height > 0 && VR.left < JR.right + qR && VR.right > JR.left - qR
            }));
          if (0 === eR.length && !GR) return void iR(null);
          const aR = rR.find((RR => RR.matches(KR))),
            LR = Math.max(null !== (uR = null === aR || void 0 === aR ? void 0 : aR.getBoundingClientRect().bottom) && void 0 !== uR ? uR : 0, ...eR.map((RR => RR.getBoundingClientRect().bottom))),
            nR = null !== (ZR = null === JR || void 0 === JR || null === (fR = JR.offsetParent) || void 0 === fR ? void 0 : fR.getBoundingClientRect().top) && void 0 !== ZR ? ZR : 0;
          iR(Math.ceil(LR + qR / 2) - Math.round(nR))
        }
        const VR = setInterval(fR, rR);
        fR(), window.addEventListener("resize", fR);
        const eR = (0, ZR.q)(uR.h, fR);
        return () => {
          yR.disconnect(), clearInterval(VR), window.removeEventListener("resize", fR), eR()
        }
      }), [RR, JR, GR]), tR
    }
  },
  39700: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => ZR,
      g: () => qR,
      i: () => iR
    });
    const yR = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      tR = [0, 1, 2, 0, 2, 3],
      uR = [4, 5];

    function ZR(RR, JR, GR, yR, tR) {
      for (let ZR = 0; ZR < 6; ZR++) uR.includes(ZR) === tR && fR(RR, JR, GR, yR, ZR)
    }

    function qR(RR, JR, GR, yR) {
      for (let tR = 0; tR < 6; tR++) fR(RR, JR, GR, yR, tR)
    }

    function iR(RR, JR, GR, uR, ZR) {
      for (let qR = 0; qR < 6; qR++)
        for (const iR of [0, 1]) {
          const [fR, VR, KR] = [iR + 2, iR + 1, (iR + 3) % 4], wR = RR.length / 3;
          for (const [JR, tR] of [
              [iR, VR],
              [fR, VR],
              [fR, KR],
              [iR, KR]
            ])
            for (let iR = 0; iR < 3; iR++) {
              const fR = yR[3 * (4 * qR + JR) + iR],
                VR = yR[3 * (4 * qR + tR) + iR];
              RR.push((fR + (VR - fR) * ZR) * uR / 2 + GR[iR])
            }
          for (const RR of tR) JR.push(wR + RR)
        }
    }

    function fR(RR, JR, GR, uR, ZR) {
      let [qR, iR, fR] = GR, [VR, KR, wR] = uR;
      const rR = RR.length / 3;
      for (let tR = 4 * ZR; tR < 4 * ZR + 4; tR++) RR.push(yR[3 * tR] * VR / 2 + qR, yR[3 * tR + 1] * KR / 2 + iR, yR[3 * tR + 2] * wR / 2 + fR);
      for (const yR of tR) JR.push(rR + yR)
    }
  },
  40786: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => HR
    });
    var yR = GR(66),
      tR = GR(3494),
      uR = GR(40788);
    const ZR = [1, .62, .05],
      qR = [.35, .45, .55, .65, .55, .45].map((RR => ({
        size: .85,
        alpha: RR,
        crossed: !1
      })));
    class iR {
      constructor(RR) {
        this.api = RR, this.cells = [], this.meshes = void 0, this.pulseMs = 0, this.shown = "", this.meshes = new uR.i(RR)
      }
      BK(RR) {
        this.cells = RR, this.shown = "", 0 === RR.length && this.meshes.dispose()
      }
      afterRender(RR) {
        if (0 === this.cells.length) return;
        this.pulseMs += RR;
        const JR = qR[Math.floor(this.pulseMs / 160) % qR.length],
          GR = new uR.g,
          yR = [];
        for (let uR = 0; uR < this.cells.length; uR += 3) {
          const [RR, tR, qR] = [this.cells[uR], this.cells[uR + 1], this.cells[uR + 2]];
          this.api.isBlockInLoadedChunk(RR, tR, qR) && 0 === this.api.getBlockId(RR, tR, qR) && (GR.add(RR, tR, qR, ZR, JR), yR.push(RR, tR, qR))
        }
        const tR = `${qR.indexOf(JR)}|${yR.join(",")}`;
        tR !== this.shown && (this.shown = tR, this.meshes.show(GR.toArray()))
      }
      dispose() {
        this.meshes.dispose(), this.cells = []
      }
    }
    var fR = GR(32),
      VR = GR(39672);
    const KR = "obQuestCardChanged",
      wR = "obBlockPop",
      rR = "obPhaseParty";
    class eR {
      constructor(RR) {
        this.getOneBlockPos = RR, this.card = ["none"], this.pointer = null, this.pending = null, this.holdTimeout = null
      }
      getCard() {
        return this.card
      }
      receiveCard(RR) {
        null === this.holdTimeout ? (this.card = RR, fR.n.JK(KR, RR, !0), "task" === RR[0] && RR[4] && (this.holdTimeout = setTimeout((() => {
          this.holdTimeout = null;
          const RR = this.pending;
          this.pending = null, null !== RR && this.receiveCard(RR)
        }), 1e3))) : this.pending = RR
      }
      dispose() {
        null !== this.holdTimeout && (clearTimeout(this.holdTimeout), this.holdTimeout = null), this.pending = null
      }
      receivePop(RR) {
        fR.n.JK(wR, RR, !0)
      }
      receiveParty(RR) {
        fR.n.JK(rR, RR, !0)
      }
      setPointer(RR) {
        this.pointer = RR
      }
      afterRender(RR) {
        const JR = this.pointer;
        if (null === JR) return;
        const GR = this.getOneBlockPos(),
          yR = null === GR ? null : RR.projectWorldPosToViewport([GR[0] + .5, GR[1] + 1.9, GR[2] + .5]),
          tR = null !== yR && yR.x >= 0 && yR.x <= 100 && yR.y >= 0 && yR.y <= 100;
        (0, VR.h)(JR, !tR), tR && (0, VR.d)(JR, Math.round(100 * yR.x) / 100, Math.round(100 * yR.y) / 100)
      }
    }
    var aR = GR(2123),
      LR = GR(1581),
      nR = GR(1270),
      UR = GR(1378);
    let WR = 1;

    function AR() {
      const [RR, JR] = (0, yR.useState)([]), [GR, tR] = (0, yR.useState)(null);
      return (0, LR.f)(wR, (() => {
        const RR = {
          id: WR++,
          driftRem: 6 * (Math.random() - .5)
        };
        JR((JR => [...JR.slice(-4), RR])), setTimeout((() => {
          JR((JR => JR.filter((JR => JR.id !== RR.id))))
        }), 900)
      })), (0, LR.f)(rR, (RR => {
        tR({
          id: WR++,
          wire: RR
        })
      })), (0, UR.jsxs)(UR.Fragment, {
        children: [(0, UR.jsx)("div", {
          className: "OBBlockPops",
          children: RR.map((RR => (0, UR.jsx)("div", {
            className: "OBBlockPop",
            style: {
              "--ob-pop-drift": `${RR.driftRem}rem`
            },
            children: (0, UR.jsx)("span", {
              className: "OBBlockPopPlus",
              children: "+1"
            })
          }, RR.id)))
        }), null !== GR && (0, UR.jsx)(XR, {
          wire: GR.wire,
          onDone: () => {
            tR((RR => (null === RR || void 0 === RR ? void 0 : RR.id) === GR.id ? null : RR))
          }
        }, GR.id)]
      })
    }
    const CR = {
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

    function XR(RR) {
      let {
        wire: JR,
        onDone: GR
      } = RR;
      const {
        t: tR
      } = (0, nR.A)(), [uR, ZR, qR, iR] = JR, fR = Object.hasOwn(CR, uR) ? tR(CR[uR]) : uR, VR = (0, yR.useRef)(GR);
      return VR.current = GR, (0, yR.useEffect)((() => {
        const RR = setTimeout((() => {
          VR.current()
        }), 5200);
        return () => {
          clearTimeout(RR)
        }
      }), []), (0, UR.jsxs)("div", {
        className: "OBPhaseParty",
        role: "status",
        children: [(0, UR.jsx)("div", {
          className: "OBPhasePartyConfetti",
          children: Array.from({
            length: 26
          }, ((RR, JR) => (0, UR.jsx)("span", {
            style: {
              "--ob-confetti-x": 37 * JR % 100 + "%",
              "--ob-confetti-delay": JR % 7 * 90 + "ms",
              "--ob-confetti-spin": "" + (JR % 2 === 0 ? 1 : -1)
            }
          }, JR)))
        }), (0, UR.jsxs)("div", {
          className: "OBPhasePartyPanel",
          style: {
            "--ob-phase-colour": ZR
          },
          children: [(0, UR.jsx)("div", {
            className: "OBPhasePartyTitle",
            children: tR("oneblockGame:obPartyUnlocked", {
              phase: fR
            })
          }), qR.length > 0 && (0, UR.jsxs)("div", {
            className: "OBPhasePartyNew",
            children: [(0, UR.jsx)("span", {
              className: "OBPhasePartyNewLabel",
              children: tR("oneblockGame:obPartyNewBlocks")
            }), qR.map((RR => (0, UR.jsx)("span", {
              className: "OBPhasePartyBlock",
              children: (0, UR.jsx)(aR.b, {
                itemName: RR,
                amount: 1
              })
            }, RR)))]
          }), iR && (0, UR.jsxs)("div", {
            className: "OBPhasePartyGift",
            children: [(0, UR.jsx)("span", {
              className: "OBPhasePartyBlock",
              children: (0, UR.jsx)(aR.b, {
                itemName: "Chest",
                amount: 1
              })
            }), tR("oneblockGame:obPartyGift")]
          })]
        })]
      })
    }
    var MR = GR(1163),
      BR = GR.n(MR),
      lR = GR(37849);
    const pR = {
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

    function gR(RR) {
      let {
        hud: JR
      } = RR;
      const GR = (0, LR.h)(KR, JR.getCard());
      if ("none" === GR[0] || void 0 === pR[GR[1]]) return null;
      const [, yR, tR, uR, ZR, qR, iR, fR, VR, wR] = GR;
      return (0, UR.jsxs)(UR.Fragment, {
        children: [(0, UR.jsx)(bR, {
          task: pR[yR],
          progress: tR,
          goal: uR,
          completed: ZR,
          mineFirst: qR,
          pickBlockKey: wR,
          plains: "reach_plains" === yR ? null : {
            blocksMined: iR,
            plainsAt: fR
          },
          touch: VR
        }, yR), "mine_1" === yR && 0 === tR && !ZR && (0, UR.jsx)(OR, {
          hud: JR
        })]
      })
    }

    function bR(RR) {
      let {
        task: JR,
        progress: GR,
        goal: tR,
        completed: uR,
        mineFirst: ZR,
        pickBlockKey: qR,
        plains: iR,
        touch: fR
      } = RR;
      const {
        t: VR
      } = (0, nR.A)(), [KR, wR] = (0, yR.useState)(null), rR = (0, lR.k)(KR);
      let eR = VR(fR && JR.touchKey ? JR.touchKey : JR.key);
      return null !== qR ? eR = VR("oneblockGame:obPickABlock", {
        key: qR
      }) : ZR > 0 && (eR = VR("oneblockGame:obMineFirst", {
        count: ZR
      })), (0, UR.jsx)("div", {
        className: BR()("OBQuestCardContainer", {
          Below: rR
        }),
        children: (0, UR.jsxs)("div", {
          ref: wR,
          className: BR()("OBQuestCard", {
            Completed: uR,
            Short: ZR > 0 || null !== qR
          }),
          role: "status",
          children: [(0, UR.jsxs)("span", {
            className: "OBQuestCardIcon",
            children: [(0, UR.jsx)(aR.b, {
              itemName: JR.icon,
              amount: 1
            }), uR && (0, UR.jsx)("span", {
              className: "OBQuestCardTick"
            })]
          }), (0, UR.jsxs)("div", {
            className: "OBQuestCardBody",
            children: [(0, UR.jsx)("div", {
              className: "OBQuestCardLine SmallTextBold",
              children: eR
            }), tR > 1 && (0, UR.jsx)(vR, {
              className: "OBQuestCardTaskBar",
              progress: GR,
              goal: tR
            }), null !== iR && iR.blocksMined < iR.plainsAt && (0, UR.jsxs)("div", {
              className: "OBQuestCardPlains",
              children: [(0, UR.jsx)("span", {
                className: "OBQuestCardPlainsLabel",
                children: VR("oneblockGame:obCardPlainsIn", {
                  count: iR.plainsAt - iR.blocksMined
                })
              }), (0, UR.jsx)(vR, {
                className: "OBQuestCardPlainsBar",
                progress: iR.blocksMined,
                goal: iR.plainsAt,
                hideCount: !0
              })]
            })]
          }), uR && (0, UR.jsx)("span", {
            className: "OBQuestCardBurst"
          })]
        })
      })
    }

    function vR(RR) {
      let {
        className: JR,
        progress: GR,
        goal: yR,
        hideCount: tR = !1
      } = RR;
      const uR = Math.min(GR, yR);
      return (0, UR.jsxs)("div", {
        className: BR()("OBQuestCardBar", JR),
        children: [(0, UR.jsx)("div", {
          className: "OBQuestCardBarTrack",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": yR,
          "aria-valuenow": uR,
          children: (0, UR.jsx)("div", {
            className: "OBQuestCardBarFill",
            style: {
              transform: `scaleX(${yR>0?uR/yR:0})`
            }
          })
        }), !tR && (0, UR.jsxs)("span", {
          className: "OBQuestCardBarCount",
          children: [uR, "/", yR]
        })]
      })
    }

    function OR(RR) {
      let {
        hud: JR
      } = RR;
      return (0, UR.jsx)("div", {
        ref: RR => {
          JR.setPointer(RR)
        },
        className: "OBBlockPointer",
        hidden: !0,
        children: (0, UR.jsx)("span", {
          className: "OBBlockPointerArrow"
        })
      })
    }
    const xR = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const NR = 6400;

    function DR(RR, JR) {
      const GR = Math.ceil((RR - 3200) / NR);
      if (GR !== Math.ceil((JR - 3200) / NR) || GR <= 0) return null;
      const yR = GR * NR + 6;
      return [yR, 10, yR]
    }
    const HR = function(RR, JR, GR, uR) {
      let ZR, {
          localPlayerId: qR
        } = uR,
        fR = [],
        VR = null,
        KR = null;
      const wR = new eR((() => {
        const RR = ZR.getPositionView(qR);
        return null === RR ? null : DR(RR[0], RR[2])
      }));
      return {
        onCreate: RR => {
          ZR = RR, VR = new iR(ZR), KR = (0, tR.G)((0, yR.createElement)(yR.Fragment, null, (0, yR.createElement)(gR, {
            hud: wR
          }), (0, yR.createElement)(AR)))
        },
        onClose: () => {
          var RR, JR;
          null === (RR = KR) || void 0 === RR || RR(), wR.dispose(), null === (JR = VR) || void 0 === JR || JR.dispose(), VR = null
        },
        onReceivedMessageFromServer: (RR, JR) => {
          if ("oneBlockNextBlocks" === RR) fR = JR.blocks.map((RR => ZR.blockNameToBlockId(RR)));
          else if ("obQuestCard" === RR) wR.receiveCard(JR);
          else if ("obGhostLedge" === RR) {
            var GR;
            null === (GR = VR) || void 0 === GR || GR.BK(JR)
          } else "obBlockPop" === RR ? wR.receivePop(JR) : "obPhaseParty" === RR && wR.receiveParty(JR)
        },
        onAfterRender: (RR, JR) => {
          var GR;
          null === (GR = VR) || void 0 === GR || GR.afterRender(RR), wR.afterRender(JR)
        },
        gK: () => {
          if (0 === fR.length) return;
          const RR = ZR.getPositionView(qR),
            JR = DR(RR[0], RR[2]);
          if (!JR) return;
          const [GR, yR, tR] = JR;
          if (ZR.isBlockInLoadedChunk(GR, yR, tR) && 0 === ZR.getBlockId(GR, yR, tR)) {
            const RR = fR.shift();
            ZR.setBlockId(GR, yR, tR, RR)
          }
        },
        onPlayerAltAction: (RR, JR, GR, yR, tR, uR) => {
          ! function(RR, JR, GR, yR) {
            if (!GR || "Mesh" !== RR.getEntityType(GR)) return !1;
            const tR = xR[RR.getEntityName(GR)];
            !!tR && RR.openShop(JR, yR, tR)
          }(ZR, RR, uR, !1)
        }
      }
    }
  },
  40788: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => qR,
      d: () => iR,
      e: () => ZR,
      g: () => fR,
      i: () => VR
    });
    var yR = GR(40792),
      tR = GR(39700);
    const uR = .35,
      ZR = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      qR = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      iR = [.95, .2, .15];
    class fR {
      constructor() {
        this.groups = []
      }
      add(RR, JR, GR, tR, uR) {
        let ZR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : yR.b;
        for (const yR of this.groups)
          if (wR(yR, tR, uR)) return yR.cells.push(RR, JR, GR), void yR.boxes.push(ZR);
        this.groups.push({
          rgb: tR,
          look: uR,
          cells: [RR, JR, GR],
          boxes: [ZR]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class VR {
      constructor(RR) {
        this.api = RR, this.shown = []
      }
      show(RR) {
        const JR = [];
        for (const GR of RR) {
          const RR = this.shown.findIndex((RR => {
            let {
              group: JR
            } = RR;
            return wR(JR, GR.rgb, GR.look) && rR(JR, GR)
          })); - 1 === RR ? JR.push(this.build(GR)) : (JR.push(this.shown[RR]), this.shown.splice(RR, 1))
        }
        this.dispose(), this.shown = JR
      }
      dispose() {
        for (const {
            meshes: RR
          }
          of this.shown)
          for (const JR of RR) this.api.disposeGameMesh(JR);
        this.shown = []
      }
      build(RR) {
        const {
          rgb: JR,
          look: GR,
          boxes: yR
        } = RR, ZR = [JR[0] + (1 - JR[0]) * uR, JR[1] + (1 - JR[1]) * uR, JR[2] + (1 - JR[2]) * uR], qR = [this.buildMesh(RR.cells, JR, GR.alpha, ((RR, JR, tR, uR) => {
          KR(RR, JR, tR, yR[uR], GR.size, !1)
        })), this.buildMesh(RR.cells, ZR, GR.alpha, ((RR, JR, tR, uR) => {
          KR(RR, JR, tR, yR[uR], GR.size, !0)
        }))];
        return GR.crossed && qR.push(this.buildMesh(RR.cells, JR, .9, ((RR, JR, yR) => {
          (0, tR.i)(RR, JR, yR, GR.size + .01, .12)
        }))), {
          group: RR,
          meshes: qR
        }
      }
      buildMesh(RR, JR, GR, yR) {
        const tR = [RR[0], RR[1], RR[2]],
          uR = [],
          ZR = [];
        for (let qR = 0; qR < RR.length; qR += 3) yR(uR, ZR, [RR[qR] - tR[0] + .5, RR[qR + 1] - tR[1] + .5, RR[qR + 2] - tR[2] + .5], qR / 3);
        return this.api.createGameMesh({
          positions: uR,
          indices: ZR
        }, {
          rgb: [JR[0], JR[1], JR[2]],
          alpha: GR
        }, tR)
      }
    }

    function KR(RR, JR, GR, yR, uR, ZR) {
      for (let qR = 0; qR < yR.length; qR += 6) {
        const iR = [0, 0, 0],
          fR = [0, 0, 0];
        for (let RR = 0; RR < 3; RR++) iR[RR] = GR[RR] + ((yR[qR + RR] + yR[qR + RR + 3]) / 2 - .5) * uR, fR[RR] = (yR[qR + RR + 3] - yR[qR + RR]) * uR;
        (0, tR.c)(RR, JR, iR, fR, ZR)
      }
    }

    function wR(RR, JR, GR) {
      return RR.rgb[0] === JR[0] && RR.rgb[1] === JR[1] && RR.rgb[2] === JR[2] && RR.look === GR
    }

    function rR(RR, JR) {
      if (RR.cells.length !== JR.cells.length) return !1;
      for (let GR = 0; GR < RR.cells.length; GR++)
        if (RR.cells[GR] !== JR.cells[GR]) return !1;
      return RR.boxes.every(((RR, GR) => RR === JR.boxes[GR]))
    }
  },
  39672: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => ZR,
      h: () => uR
    });
    const yR = new WeakMap;

    function tR(RR) {
      let JR = yR.get(RR);
      return JR || (JR = {
        hidden: RR.hidden,
        x: NaN,
        y: NaN
      }, yR.set(RR, JR)), JR
    }

    function uR(RR, JR) {
      const GR = tR(RR);
      GR.hidden !== JR && (GR.hidden = JR, RR.hidden = JR)
    }

    function ZR(RR, JR, GR) {
      const yR = tR(RR);
      yR.x === JR && yR.y === GR || (yR.x = JR, yR.y = GR, RR.style.translate = `${JR}vw ${GR}vh`)
    }
  },
  40792: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR,
      c: () => KR
    });
    var yR = GR(5844),
      tR = GR(5879),
      uR = GR(5898);
    const ZR = [0, 0, 0, 1, 1, 1],
      qR = (0, tR.d)([
        [2, 0, 2, 6, 6, 6]
      ]),
      iR = (0, tR.d)([
        [3, 0, 3, 5, 5, 5]
      ]),
      fR = (0, tR.d)([
        [3, 3, 3, 5, 8, 5]
      ]),
      VR = [0, 1, 2, 3].map((RR => (0, tR.d)((0, tR.m)([
        [3, 2, 0, 5, 7, 3]
      ], RR))));

    function KR(RR) {
      const {
        AL: JR,
        model: GR,
        blockModel: tR,
        meta: KR
      } = yR.l[RR];
      return void 0 !== JR ? JR : "CentreCross" === GR ? qR : null !== tR && void 0 !== tR && tR.startsWith("torch") ? KR.halfblockPlacement === uR.d.side ? VR[KR.rot - 1] : KR.halfblockPlacement === uR.d.top ? fR : iR : ZR
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);