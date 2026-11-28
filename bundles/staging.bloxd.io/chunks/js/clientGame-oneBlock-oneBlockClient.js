export const id = 25;
export const ids = [25];
export const modules = {
  38302: (dd, Od, md) => {
    md.d(Od, {
      d: () => Kd,
      e: () => hd,
      h: () => vd,
      j: () => Qd,
      l: () => qd
    });
    var Wd = md(66),
      Fd = md(4308),
      Rd = md(3510),
      Xd = md(32);
    const Kd = 8,
      hd = "InGameHeaderContainer",
      vd = "TopRightElements";

    function Qd(dd) {
      const [Od] = (0, Fd.b)(), [md, Rd] = (0, Wd.useState)(!1);
      return (0, Wd.useLayoutEffect)((() => {
        if (!dd) return;
        const Od = document.querySelector(`.${hd}`),
          md = document.querySelector(`.${vd}`),
          Wd = () => {
            const Wd = dd.getBoundingClientRect(),
              Fd = Od ? Od.getBoundingClientRect().right : 0,
              Xd = md ? md.getBoundingClientRect().left : window.innerWidth,
              hd = Wd.left < Fd + Kd,
              vd = Wd.right > Xd - Kd;
            Rd(hd || vd)
          };
        Wd();
        const Fd = new ResizeObserver(Wd);
        return Fd.observe(dd), Od && Fd.observe(Od), md && Fd.observe(md), () => {
          Fd.disconnect()
        }
      }), [dd, Od]), md
    }
    const td = `.InGameUi .${hd}`,
      od = [td, ".InGameUi .TopRightIcons", ".InGameUi .TopRightElementsRight"],
      Nd = 1e3;

    function qd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd,
        md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const [Fd, hd] = (0, Wd.useState)(null);
      return (0, Wd.useLayoutEffect)((() => {
        if (!dd) return;
        const Wd = new ResizeObserver((() => {
          vd()
        }));
        Wd.observe(dd), Od && Od !== dd && Wd.observe(Od);
        let Fd = [];

        function vd() {
          var Rd, Xd, vd;
          const Qd = dd.getBoundingClientRect(),
            Nd = function() {
              const dd = od.map((dd => document.querySelector(dd))).filter((dd => null !== dd));
              for (const Od of dd) Fd.includes(Od) || Wd.observe(Od);
              for (const Od of Fd) dd.includes(Od) || Wd.unobserve(Od);
              return Fd = dd, dd
            }(),
            qd = Nd.filter((dd => {
              const Od = dd.getBoundingClientRect();
              return Od.width > 0 && Od.height > 0 && Qd.left < Od.right + Kd && Qd.right > Od.left - Kd
            }));
          if (0 === qd.length && !md) return void hd(null);
          const Hd = Nd.find((dd => dd.matches(td))),
            yd = Math.max(null !== (Rd = null === Hd || void 0 === Hd ? void 0 : Hd.getBoundingClientRect().bottom) && void 0 !== Rd ? Rd : 0, ...qd.map((dd => dd.getBoundingClientRect().bottom))),
            bd = null !== (Xd = null === Od || void 0 === Od || null === (vd = Od.offsetParent) || void 0 === vd ? void 0 : vd.getBoundingClientRect().top) && void 0 !== Xd ? Xd : 0;
          hd(Math.ceil(yd + Kd / 2) - Math.round(bd))
        }
        const Qd = setInterval(vd, Nd);
        vd(), window.addEventListener("resize", vd);
        const qd = (0, Xd.l)(Rd.c, vd);
        return () => {
          Wd.disconnect(), clearInterval(Qd), window.removeEventListener("resize", vd), qd()
        }
      }), [dd, Od, md]), Fd
    }
  },
  40062: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd,
      g: () => Kd,
      h: () => hd
    });
    const Wd = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      Fd = [0, 1, 2, 0, 2, 3],
      Rd = [4, 5];

    function Xd(dd, Od, md, Wd, Fd) {
      for (let Xd = 0; Xd < 6; Xd++) Rd.includes(Xd) === Fd && vd(dd, Od, md, Wd, Xd)
    }

    function Kd(dd, Od, md, Wd) {
      for (let Fd = 0; Fd < 6; Fd++) vd(dd, Od, md, Wd, Fd)
    }

    function hd(dd, Od, md, Rd, Xd) {
      for (let Kd = 0; Kd < 6; Kd++)
        for (const hd of [0, 1]) {
          const [vd, Qd, td] = [hd + 2, hd + 1, (hd + 3) % 4], od = dd.length / 3;
          for (const [Od, Fd] of [
              [hd, Qd],
              [vd, Qd],
              [vd, td],
              [hd, td]
            ])
            for (let hd = 0; hd < 3; hd++) {
              const vd = Wd[3 * (4 * Kd + Od) + hd],
                Qd = Wd[3 * (4 * Kd + Fd) + hd];
              dd.push((vd + (Qd - vd) * Xd) * Rd / 2 + md[hd])
            }
          for (const dd of Fd) Od.push(od + dd)
        }
    }

    function vd(dd, Od, md, Rd, Xd) {
      let [Kd, hd, vd] = md, [Qd, td, od] = Rd;
      const Nd = dd.length / 3;
      for (let Fd = 4 * Xd; Fd < 4 * Xd + 4; Fd++) dd.push(Wd[3 * Fd] * Qd / 2 + Kd, Wd[3 * Fd + 1] * td / 2 + hd, Wd[3 * Fd + 2] * od / 2 + vd);
      for (const Wd of Fd) Od.push(Nd + Wd)
    }
  },
  41127: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => Gd
    });
    var Wd = md(66),
      Fd = md(3428),
      Rd = md(41135);
    const Xd = [1, .62, .05],
      Kd = [.35, .45, .55, .65, .55, .45].map((dd => ({
        size: .85,
        alpha: dd,
        crossed: !1
      })));
    class hd {
      constructor(dd) {
        this.api = dd, this.cells = [], this.meshes = void 0, this.pulseMs = 0, this.shown = "", this.meshes = new Rd.n(dd)
      }
      Yt(dd) {
        this.cells = dd, this.shown = "", 0 === dd.length && this.meshes.dispose()
      }
      afterRender(dd) {
        if (0 === this.cells.length) return;
        this.pulseMs += dd;
        const Od = Kd[Math.floor(this.pulseMs / 160) % Kd.length],
          md = new Rd.k,
          Wd = [];
        for (let Rd = 0; Rd < this.cells.length; Rd += 3) {
          const [dd, Fd, Kd] = [this.cells[Rd], this.cells[Rd + 1], this.cells[Rd + 2]];
          this.api.isBlockInLoadedChunk(dd, Fd, Kd) && 0 === this.api.getBlockId(dd, Fd, Kd) && (md.add(dd, Fd, Kd, Xd, Od), Wd.push(dd, Fd, Kd))
        }
        const Fd = `${Kd.indexOf(Od)}|${Wd.join(",")}`;
        Fd !== this.shown && (this.shown = Fd, this.meshes.show(md.toArray()))
      }
      dispose() {
        this.meshes.dispose(), this.cells = []
      }
    }
    var vd = md(32),
      Qd = md(40028);
    const td = "obQuestCardChanged",
      od = "obBlockPop",
      Nd = "obPhaseParty";
    class qd {
      constructor(dd) {
        this.getOneBlockPos = dd, this.card = ["none"], this.pointer = null, this.pending = null, this.holdTimeout = null
      }
      getCard() {
        return this.card
      }
      receiveCard(dd) {
        null === this.holdTimeout ? (this.card = dd, vd.j.lQ(td, dd, !0), "task" === dd[0] && dd[4] && (this.holdTimeout = setTimeout((() => {
          this.holdTimeout = null;
          const dd = this.pending;
          this.pending = null, null !== dd && this.receiveCard(dd)
        }), 1e3))) : this.pending = dd
      }
      dispose() {
        null !== this.holdTimeout && (clearTimeout(this.holdTimeout), this.holdTimeout = null), this.pending = null
      }
      receivePop(dd) {
        vd.j.lQ(od, dd, !0)
      }
      receiveParty(dd) {
        vd.j.lQ(Nd, dd, !0)
      }
      setPointer(dd) {
        this.pointer = dd
      }
      afterRender(dd) {
        const Od = this.pointer;
        if (null === Od) return;
        const md = this.getOneBlockPos(),
          Wd = null === md ? null : dd.projectWorldPosToViewport([md[0] + .5, md[1] + 1.9, md[2] + .5]),
          Fd = null !== Wd && Wd.x >= 0 && Wd.x <= 100 && Wd.y >= 0 && Wd.y <= 100;
        (0, Qd.h)(Od, !Fd), Fd && (0, Qd.e)(Od, Math.round(100 * Wd.x) / 100, Math.round(100 * Wd.y) / 100)
      }
    }
    var Hd = md(2079),
      yd = md(1566),
      bd = md(1238),
      Td = md(1341);
    let pd = 1;

    function Yd() {
      const [dd, Od] = (0, Wd.useState)([]), [md, Fd] = (0, Wd.useState)(null);
      return (0, yd.f)(od, (() => {
        const dd = {
          id: pd++,
          driftRem: 6 * (Math.random() - .5)
        };
        Od((Od => [...Od.slice(-4), dd])), setTimeout((() => {
          Od((Od => Od.filter((Od => Od.id !== dd.id))))
        }), 900)
      })), (0, yd.f)(Nd, (dd => {
        Fd({
          id: pd++,
          wire: dd
        })
      })), (0, Td.jsxs)(Td.Fragment, {
        children: [(0, Td.jsx)("div", {
          className: "OBBlockPops",
          children: dd.map((dd => (0, Td.jsx)("div", {
            className: "OBBlockPop",
            style: {
              "--ob-pop-drift": `${dd.driftRem}rem`
            },
            children: (0, Td.jsx)("span", {
              className: "OBBlockPopPlus",
              children: "+1"
            })
          }, dd.id)))
        }), null !== md && (0, Td.jsx)(wd, {
          wire: md.wire,
          onDone: () => {
            Fd((dd => (null === dd || void 0 === dd ? void 0 : dd.id) === md.id ? null : dd))
          }
        }, md.id)]
      })
    }
    const gd = {
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

    function wd(dd) {
      let {
        wire: Od,
        onDone: md
      } = dd;
      const {
        t: Fd
      } = (0, bd.G)(), [Rd, Xd, Kd, hd] = Od, vd = Object.hasOwn(gd, Rd) ? Fd(gd[Rd]) : Rd, Qd = (0, Wd.useRef)(md);
      return Qd.current = md, (0, Wd.useEffect)((() => {
        const dd = setTimeout((() => {
          Qd.current()
        }), 5200);
        return () => {
          clearTimeout(dd)
        }
      }), []), (0, Td.jsxs)("div", {
        className: "OBPhaseParty",
        role: "status",
        children: [(0, Td.jsx)("div", {
          className: "OBPhasePartyConfetti",
          children: Array.from({
            length: 26
          }, ((dd, Od) => (0, Td.jsx)("span", {
            style: {
              "--ob-confetti-x": 37 * Od % 100 + "%",
              "--ob-confetti-delay": Od % 7 * 90 + "ms",
              "--ob-confetti-spin": "" + (Od % 2 === 0 ? 1 : -1)
            }
          }, Od)))
        }), (0, Td.jsxs)("div", {
          className: "OBPhasePartyPanel",
          style: {
            "--ob-phase-colour": Xd
          },
          children: [(0, Td.jsx)("div", {
            className: "OBPhasePartyTitle",
            children: Fd("oneblockGame:obPartyUnlocked", {
              phase: vd
            })
          }), Kd.length > 0 && (0, Td.jsxs)("div", {
            className: "OBPhasePartyNew",
            children: [(0, Td.jsx)("span", {
              className: "OBPhasePartyNewLabel",
              children: Fd("oneblockGame:obPartyNewBlocks")
            }), Kd.map((dd => (0, Td.jsx)("span", {
              className: "OBPhasePartyBlock",
              children: (0, Td.jsx)(Hd.c, {
                itemName: dd,
                amount: 1
              })
            }, dd)))]
          }), hd && (0, Td.jsxs)("div", {
            className: "OBPhasePartyGift",
            children: [(0, Td.jsx)("span", {
              className: "OBPhasePartyBlock",
              children: (0, Td.jsx)(Hd.c, {
                itemName: "Chest",
                amount: 1
              })
            }), Fd("oneblockGame:obPartyGift")]
          })]
        })]
      })
    }
    var Ed = md(1155),
      Jd = md.n(Ed),
      Ud = md(38302);
    const xd = {
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

    function Bd(dd) {
      let {
        hud: Od
      } = dd;
      const md = (0, yd.i)(td, Od.getCard());
      if ("none" === md[0] || void 0 === xd[md[1]]) return null;
      const [, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd, od] = md;
      return (0, Td.jsxs)(Td.Fragment, {
        children: [(0, Td.jsx)(Sd, {
          task: xd[Wd],
          progress: Fd,
          goal: Rd,
          completed: Xd,
          mineFirst: Kd,
          pickBlockKey: od,
          plains: "reach_plains" === Wd ? null : {
            blocksMined: hd,
            plainsAt: vd
          },
          touch: Qd
        }, Wd), "mine_1" === Wd && 0 === Fd && !Xd && (0, Td.jsx)(ud, {
          hud: Od
        })]
      })
    }

    function Sd(dd) {
      let {
        task: Od,
        progress: md,
        goal: Fd,
        completed: Rd,
        mineFirst: Xd,
        pickBlockKey: Kd,
        plains: hd,
        touch: vd
      } = dd;
      const {
        t: Qd
      } = (0, bd.G)(), [td, od] = (0, Wd.useState)(null), Nd = (0, Ud.j)(td);
      let qd = Qd(vd && Od.touchKey ? Od.touchKey : Od.key);
      return null !== Kd ? qd = Qd("oneblockGame:obPickABlock", {
        key: Kd
      }) : Xd > 0 && (qd = Qd("oneblockGame:obMineFirst", {
        count: Xd
      })), (0, Td.jsx)("div", {
        className: Jd()("OBQuestCardContainer", {
          Below: Nd
        }),
        children: (0, Td.jsxs)("div", {
          ref: od,
          className: Jd()("OBQuestCard", {
            Completed: Rd,
            Short: Xd > 0 || null !== Kd
          }),
          role: "status",
          children: [(0, Td.jsxs)("span", {
            className: "OBQuestCardIcon",
            children: [(0, Td.jsx)(Hd.c, {
              itemName: Od.icon,
              amount: 1
            }), Rd && (0, Td.jsx)("span", {
              className: "OBQuestCardTick"
            })]
          }), (0, Td.jsxs)("div", {
            className: "OBQuestCardBody",
            children: [(0, Td.jsx)("div", {
              className: "OBQuestCardLine SmallTextBold",
              children: qd
            }), Fd > 1 && (0, Td.jsx)(sd, {
              className: "OBQuestCardTaskBar",
              progress: md,
              goal: Fd
            }), null !== hd && hd.blocksMined < hd.plainsAt && (0, Td.jsxs)("div", {
              className: "OBQuestCardPlains",
              children: [(0, Td.jsx)("span", {
                className: "OBQuestCardPlainsLabel",
                children: Qd("oneblockGame:obCardPlainsIn", {
                  count: hd.plainsAt - hd.blocksMined
                })
              }), (0, Td.jsx)(sd, {
                className: "OBQuestCardPlainsBar",
                progress: hd.blocksMined,
                goal: hd.plainsAt,
                hideCount: !0
              })]
            })]
          }), Rd && (0, Td.jsx)("span", {
            className: "OBQuestCardBurst"
          })]
        })
      })
    }

    function sd(dd) {
      let {
        className: Od,
        progress: md,
        goal: Wd,
        hideCount: Fd = !1
      } = dd;
      const Rd = Math.min(md, Wd);
      return (0, Td.jsxs)("div", {
        className: Jd()("OBQuestCardBar", Od),
        children: [(0, Td.jsx)("div", {
          className: "OBQuestCardBarTrack",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": Wd,
          "aria-valuenow": Rd,
          children: (0, Td.jsx)("div", {
            className: "OBQuestCardBarFill",
            style: {
              transform: `scaleX(${Wd>0?Rd/Wd:0})`
            }
          })
        }), !Fd && (0, Td.jsxs)("span", {
          className: "OBQuestCardBarCount",
          children: [Rd, "/", Wd]
        })]
      })
    }

    function ud(dd) {
      let {
        hud: Od
      } = dd;
      return (0, Td.jsx)("div", {
        ref: dd => {
          Od.setPointer(dd)
        },
        className: "OBBlockPointer",
        hidden: !0,
        children: (0, Td.jsx)("span", {
          className: "OBBlockPointerArrow"
        })
      })
    }
    const Vd = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const Ad = 6400;

    function rd(dd, Od) {
      const md = Math.ceil((dd - 3200) / Ad);
      if (md !== Math.ceil((Od - 3200) / Ad) || md <= 0) return null;
      const Wd = md * Ad + 6;
      return [Wd, 10, Wd]
    }
    const Gd = function(dd, Od, md, Rd) {
      let Xd, {
          localPlayerId: Kd
        } = Rd,
        vd = [],
        Qd = null,
        td = null;
      const od = new qd((() => {
        const dd = Xd.getPositionView(Kd);
        return null === dd ? null : rd(dd[0], dd[2])
      }));
      return {
        onCreate: dd => {
          Xd = dd, Qd = new hd(Xd), td = (0, Fd.F)((0, Wd.createElement)(Wd.Fragment, null, (0, Wd.createElement)(Bd, {
            hud: od
          }), (0, Wd.createElement)(Yd)))
        },
        onClose: () => {
          var dd, Od;
          null === (dd = td) || void 0 === dd || dd(), od.dispose(), null === (Od = Qd) || void 0 === Od || Od.dispose(), Qd = null
        },
        onReceivedMessageFromServer: (dd, Od) => {
          if ("oneBlockNextBlocks" === dd) vd = Od.blocks.map((dd => Xd.blockNameToBlockId(dd)));
          else if ("obQuestCard" === dd) od.receiveCard(Od);
          else if ("obGhostLedge" === dd) {
            var md;
            null === (md = Qd) || void 0 === md || md.Yt(Od)
          } else "obBlockPop" === dd ? od.receivePop(Od) : "obPhaseParty" === dd && od.receiveParty(Od)
        },
        onAfterRender: (dd, Od) => {
          var md;
          null === (md = Qd) || void 0 === md || md.afterRender(dd), od.afterRender(Od)
        },
        Et: () => {
          if (0 === vd.length) return;
          const dd = Xd.getPositionView(Kd),
            Od = rd(dd[0], dd[2]);
          if (!Od) return;
          const [md, Wd, Fd] = Od;
          if (Xd.isBlockInLoadedChunk(md, Wd, Fd) && 0 === Xd.getBlockId(md, Wd, Fd)) {
            const dd = vd.shift();
            Xd.setBlockId(md, Wd, Fd, dd)
          }
        },
        onPlayerAltAction: (dd, Od, md, Wd, Fd, Rd) => {
          ! function(dd, Od, md, Wd) {
            if (!md || "Mesh" !== dd.getEntityType(md)) return !1;
            const Fd = Vd[dd.getEntityName(md)];
            !!Fd && dd.openShop(Od, Wd, Fd)
          }(Xd, dd, Rd, !1)
        }
      }
    }
  },
  41135: (dd, Od, md) => {
    md.d(Od, {
      e: () => Kd,
      h: () => hd,
      i: () => Xd,
      k: () => vd,
      n: () => Qd
    });
    var Wd = md(41143),
      Fd = md(40062);
    const Rd = .35,
      Xd = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      Kd = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      hd = [.95, .2, .15];
    class vd {
      constructor() {
        this.groups = []
      }
      add(dd, Od, md, Fd, Rd) {
        let Xd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Wd.c;
        for (const Wd of this.groups)
          if (od(Wd, Fd, Rd)) return Wd.cells.push(dd, Od, md), void Wd.boxes.push(Xd);
        this.groups.push({
          rgb: Fd,
          look: Rd,
          cells: [dd, Od, md],
          boxes: [Xd]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class Qd {
      constructor(dd) {
        this.api = dd, this.shown = []
      }
      show(dd) {
        const Od = [];
        for (const md of dd) {
          const dd = this.shown.findIndex((dd => {
            let {
              group: Od
            } = dd;
            return od(Od, md.rgb, md.look) && Nd(Od, md)
          })); - 1 === dd ? Od.push(this.build(md)) : (Od.push(this.shown[dd]), this.shown.splice(dd, 1))
        }
        this.dispose(), this.shown = Od
      }
      dispose() {
        for (const {
            meshes: dd
          }
          of this.shown)
          for (const Od of dd) this.api.disposeGameMesh(Od);
        this.shown = []
      }
      build(dd) {
        const {
          rgb: Od,
          look: md,
          boxes: Wd
        } = dd, Xd = [Od[0] + (1 - Od[0]) * Rd, Od[1] + (1 - Od[1]) * Rd, Od[2] + (1 - Od[2]) * Rd], Kd = [this.buildMesh(dd.cells, Od, md.alpha, ((dd, Od, Fd, Rd) => {
          td(dd, Od, Fd, Wd[Rd], md.size, !1)
        })), this.buildMesh(dd.cells, Xd, md.alpha, ((dd, Od, Fd, Rd) => {
          td(dd, Od, Fd, Wd[Rd], md.size, !0)
        }))];
        return md.crossed && Kd.push(this.buildMesh(dd.cells, Od, .9, ((dd, Od, Wd) => {
          (0, Fd.h)(dd, Od, Wd, md.size + .01, .12)
        }))), {
          group: dd,
          meshes: Kd
        }
      }
      buildMesh(dd, Od, md, Wd) {
        const Fd = [dd[0], dd[1], dd[2]],
          Rd = [],
          Xd = [];
        for (let Kd = 0; Kd < dd.length; Kd += 3) Wd(Rd, Xd, [dd[Kd] - Fd[0] + .5, dd[Kd + 1] - Fd[1] + .5, dd[Kd + 2] - Fd[2] + .5], Kd / 3);
        return this.api.createGameMesh({
          positions: Rd,
          indices: Xd
        }, {
          rgb: [Od[0], Od[1], Od[2]],
          alpha: md
        }, Fd)
      }
    }

    function td(dd, Od, md, Wd, Rd, Xd) {
      for (let Kd = 0; Kd < Wd.length; Kd += 6) {
        const hd = [0, 0, 0],
          vd = [0, 0, 0];
        for (let dd = 0; dd < 3; dd++) hd[dd] = md[dd] + ((Wd[Kd + dd] + Wd[Kd + dd + 3]) / 2 - .5) * Rd, vd[dd] = (Wd[Kd + dd + 3] - Wd[Kd + dd]) * Rd;
        (0, Fd.c)(dd, Od, hd, vd, Xd)
      }
    }

    function od(dd, Od, md) {
      return dd.rgb[0] === Od[0] && dd.rgb[1] === Od[1] && dd.rgb[2] === Od[2] && dd.look === md
    }

    function Nd(dd, Od) {
      if (dd.cells.length !== Od.cells.length) return !1;
      for (let md = 0; md < dd.cells.length; md++)
        if (dd.cells[md] !== Od.cells[md]) return !1;
      return dd.boxes.every(((dd, md) => dd === Od.boxes[md]))
    }
  },
  40028: (dd, Od, md) => {
    md.d(Od, {
      e: () => Xd,
      h: () => Rd
    });
    const Wd = new WeakMap;

    function Fd(dd) {
      let Od = Wd.get(dd);
      return Od || (Od = {
        hidden: dd.hidden,
        x: NaN,
        y: NaN
      }, Wd.set(dd, Od)), Od
    }

    function Rd(dd, Od) {
      const md = Fd(dd);
      md.hidden !== Od && (md.hidden = Od, dd.hidden = Od)
    }

    function Xd(dd, Od, md) {
      const Wd = Fd(dd);
      Wd.x === Od && Wd.y === md || (Wd.x = Od, Wd.y = md, dd.style.translate = `${Od}vw ${md}vh`)
    }
  },
  41143: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd,
      g: () => td
    });
    var Wd = md(5733),
      Fd = md(5756),
      Rd = md(5769);
    const Xd = [0, 0, 0, 1, 1, 1],
      Kd = (0, Fd.d)([
        [2, 0, 2, 6, 6, 6]
      ]),
      hd = (0, Fd.d)([
        [3, 0, 3, 5, 5, 5]
      ]),
      vd = (0, Fd.d)([
        [3, 3, 3, 5, 8, 5]
      ]),
      Qd = [0, 1, 2, 3].map((dd => (0, Fd.d)((0, Fd.n)([
        [3, 2, 0, 5, 7, 3]
      ], dd))));

    function td(dd) {
      const {
        Sy: Od,
        model: md,
        blockModel: Fd,
        meta: td
      } = Wd.i[dd];
      return void 0 !== Od ? Od : "CentreCross" === md ? Kd : null !== Fd && void 0 !== Fd && Fd.startsWith("torch") ? td.halfblockPlacement === Rd.c.side ? Qd[td.rot - 1] : td.halfblockPlacement === Rd.c.top ? vd : hd : Xd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);