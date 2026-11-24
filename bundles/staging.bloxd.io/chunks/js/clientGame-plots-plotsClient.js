export const id = 22;
export const ids = [22];
export const modules = {
  36613: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => FB,
      h: () => NB,
      l: () => zB,
      n: () => hB
    });
    var TB = ZB(34184),
      JB = ZB(36619),
      oB = ZB(36625),
      GB = ZB(8840),
      vB = ZB(1507),
      kB = ZB(63),
      cB = ZB(82),
      nB = ZB(1153);

    function hB() {
      var BB;
      return (0, vB.h)(JB.d, (0, JB.q)()), (0, nB.jsx)(nB.Fragment, {
        children: null === (BB = (0, JB.q)()) || void 0 === BB ? void 0 : BB.content
      })
    }

    function zB(BB) {
      var IB;
      let {
        show: ZB
      } = BB;
      (0, vB.h)(JB.d, (0, JB.q)());
      const cB = null === (IB = (0, JB.q)()) || void 0 === IB ? void 0 : IB.menu;
      return (0, kB.useEffect)((() => {
        var BB;
        ZB || (null === cB || void 0 === cB || null === (BB = cB.onClose) || void 0 === BB || BB.call(cB), (0, oB.p)())
      }), [ZB, cB]), (0, kB.useEffect)((() => ZB ? (0, GB.g)(oB.t, oB.c) : void 0), [ZB]), (0, nB.jsx)(TB.e, {
        showing: ZB,
        globallyUniqueKey: "clientGameMenu",
        children: null === cB || void 0 === cB ? void 0 : cB.content
      })
    }

    function FB(BB) {
      let {
        placement: IB = "bottom"
      } = BB;
      return (0, nB.jsx)("div", {
        id: `clientGameHud-${IB}`,
        style: {
          display: "contents"
        }
      })
    }

    function NB(BB) {
      let {
        children: IB,
        placement: ZB = "bottom"
      } = BB;
      const [TB, JB] = (0, kB.useState)(null);
      return (0, kB.useEffect)((() => {
        JB(document.getElementById(`clientGameHud-${ZB}`))
      }), [ZB]), TB ? (0, cB.createPortal)(IB, TB) : null
    }
  },
  34184: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB
    });
    var TB = ZB(4721),
      JB = ZB(4728);

    function oB(BB) {
      let {
        children: IB,
        showing: ZB,
        globallyUniqueKey: oB,
        alwaysMountChildren: GB = !1,
        doGameplayStartStopOnShow: vB = !0,
        keepsMovement: kB = !1
      } = BB;
      return (0, JB.e)(!0, ZB, oB, kB), (0, TB.e)(vB, ZB), ZB || GB ? IB : null
    }
  },
  36708: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => oB,
      f: () => GB,
      i: () => vB,
      k: () => kB
    });
    var TB = ZB(63),
      JB = ZB(3272);
    const oB = 8,
      GB = "InGameHeaderContainer",
      vB = "TopRightElements";

    function kB(BB) {
      const [IB] = (0, JB.b)(), [ZB, kB] = (0, TB.useState)(!1);
      return (0, TB.useLayoutEffect)((() => {
        if (!BB) return;
        const IB = document.querySelector(`.${GB}`),
          ZB = document.querySelector(`.${vB}`),
          TB = () => {
            const TB = BB.getBoundingClientRect(),
              JB = IB ? IB.getBoundingClientRect().right : 0,
              GB = ZB ? ZB.getBoundingClientRect().left : window.innerWidth,
              vB = TB.left < JB + oB,
              cB = TB.right > GB - oB;
            kB(vB || cB)
          };
        TB();
        const JB = new ResizeObserver(TB);
        return JB.observe(BB), IB && JB.observe(IB), ZB && JB.observe(ZB), () => {
          JB.disconnect()
        }
      }), [BB, IB]), ZB
    }
  },
  8840: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB,
      g: () => JB
    });
    let TB = null;
    const JB = function(BB) {
        const IB = {
          cycle: BB,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return TB = IB, () => {
          TB === IB && (TB = null)
        }
      },
      oB = () => {
        var BB;
        return null !== (BB = TB) && void 0 !== BB && BB.canCycle() ? TB.cycle : null
      }
  },
  38562: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => GB,
      f: () => vB,
      i: () => kB
    });
    const TB = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      JB = [0, 1, 2, 0, 2, 3],
      oB = [4, 5];

    function GB(BB, IB, ZB, TB, JB) {
      for (let GB = 0; GB < 6; GB++) oB.includes(GB) === JB && cB(BB, IB, ZB, TB, GB)
    }

    function vB(BB, IB, ZB, TB) {
      for (let JB = 0; JB < 6; JB++) cB(BB, IB, ZB, TB, JB)
    }

    function kB(BB, IB, ZB, oB, GB) {
      for (let vB = 0; vB < 6; vB++)
        for (const kB of [0, 1]) {
          const [cB, nB, hB] = [kB + 2, kB + 1, (kB + 3) % 4], zB = BB.length / 3;
          for (const [IB, JB] of [
              [kB, nB],
              [cB, nB],
              [cB, hB],
              [kB, hB]
            ])
            for (let kB = 0; kB < 3; kB++) {
              const cB = TB[3 * (4 * vB + IB) + kB],
                nB = TB[3 * (4 * vB + JB) + kB];
              BB.push((cB + (nB - cB) * GB) * oB / 2 + ZB[kB])
            }
          for (const BB of JB) IB.push(zB + BB)
        }
    }

    function cB(BB, IB, ZB, oB, GB) {
      let [vB, kB, cB] = ZB, [nB, hB, zB] = oB;
      const FB = BB.length / 3;
      for (let JB = 4 * GB; JB < 4 * GB + 4; JB++) BB.push(TB[3 * JB] * nB / 2 + vB, TB[3 * JB + 1] * hB / 2 + kB, TB[3 * JB + 2] * zB / 2 + cB);
      for (const TB of JB) IB.push(FB + TB)
    }
  },
  39520: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      default: () => OT
    });
    const TB = [0, 90, 180, 270],
      JB = "plotsblueprint";
    var oB = ZB(63),
      GB = ZB(36619),
      vB = ZB(20),
      kB = ZB(1507),
      cB = ZB(2066),
      nB = ZB(1248),
      hB = ZB(1091),
      zB = ZB.n(hB),
      FB = ZB(1711),
      NB = ZB(36613),
      gB = ZB(1102),
      qB = ZB(1979),
      yB = ZB(2060),
      UB = ZB(3595),
      WB = ZB(1805);

    function dB() {}
    const CB = (0, oB.createContext)({
      hint: null,
      journalRef: dB,
      placementCardRef: dB,
      buildRef: dB
    });
    var QB = ZB(24);
    const sB = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      wB = {
        farm_hut: {
          displayName: {
            translationKey: "plotsGame:blueprintFarmHut"
          },
          tier: "small"
        },
        farm_house: {
          displayName: {
            translationKey: "plotsGame:blueprintFarmHouse"
          },
          tier: "medium"
        },
        farm_barn: {
          displayName: {
            translationKey: "plotsGame:blueprintFarmBarn"
          },
          tier: "large"
        },
        rusticHome_tent: {
          displayName: {
            translationKey: "plotsGame:blueprintRusticHomeTent"
          },
          tier: "small"
        },
        rusticHome_cabin: {
          displayName: {
            translationKey: "plotsGame:blueprintRusticHomeCabin"
          },
          tier: "medium"
        },
        rusticHome_house: {
          displayName: {
            translationKey: "plotsGame:blueprintRusticHomeHouse"
          },
          tier: "large"
        },
        market_stand: {
          displayName: {
            translationKey: "plotsGame:blueprintMarketStand"
          },
          tier: "small"
        },
        market_stall: {
          displayName: {
            translationKey: "plotsGame:blueprintMarketStall"
          },
          tier: "medium"
        },
        market_shop: {
          displayName: {
            translationKey: "plotsGame:blueprintMarketShop"
          },
          tier: "large"
        },
        castle_wall: {
          displayName: {
            translationKey: "plotsGame:blueprintCastleWall"
          },
          tier: "small"
        },
        castle_gate: {
          displayName: {
            translationKey: "plotsGame:blueprintCastleGate"
          },
          tier: "large"
        },
        castle_tower: {
          displayName: {
            translationKey: "plotsGame:blueprintCastleTower"
          },
          tier: "large"
        }
      },
      OB = ["small", "medium", "large"].flatMap((BB => sB.flat().filter((IB => wB[IB].tier === BB))));

    function YB(BB) {
      return wB[BB]
    }
    const iB = new Map(sB.flatMap((BB => BB.slice(1).map(((IB, ZB) => [IB, BB[ZB]])))));

    function pB(BB) {
      var IB;
      return null !== (IB = iB.get(BB)) && void 0 !== IB ? IB : null
    }
    const aB = {
      farm_hut: {
        key: "plotsGame:journalNoteFarmHut",
        firstBuild: !0
      },
      rusticHome_tent: {
        key: "plotsGame:journalNoteRusticHomeTent",
        firstBuild: !1
      },
      castle_tower: {
        key: "plotsGame:journalNoteCastleTower",
        firstBuild: !1
      },
      farm_house: {
        key: "plotsGame:journalNoteFarmHouse",
        firstBuild: !1
      },
      farm_barn: {
        key: "plotsGame:journalNoteFarmBarn",
        firstBuild: !1
      }
    };

    function HB(BB, IB) {
      const ZB = new Set(BB),
        TB = function(BB) {
          const IB = new Set(BB);
          return new Set(OB.filter((BB => {
            const ZB = pB(BB);
            return null === ZB || IB.has(ZB)
          })))
        }(ZB);
      return OB.map((BB => {
        const JB = BB === IB;
        if (ZB.has(BB)) return {
          id: BB,
          active: JB,
          note: null,
          state: "completed",
          unlockedBy: null
        };
        const oB = aB[BB],
          GB = void 0 === oB || oB.firstBuild && ZB.size > 0 ? null : oB.key;
        return TB.has(BB) ? {
          id: BB,
          active: JB,
          note: GB,
          state: "open",
          unlockedBy: null
        } : {
          id: BB,
          active: JB,
          note: GB,
          state: "locked",
          unlockedBy: pB(BB)
        }
      }))
    }
    const MB = "plotsJournalChanged";
    class jB {
      constructor(BB, IB) {
        this.api = BB, this.placement = IB, this.pages = null, this.openRequested = null, this.openedOffered = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.JN(this.openedOffered ? "journal_offered" : "journal_opened"), this.openedOffered = !1
        }, this.build = BB => {
          this.placement.start(BB), (0, GB.f)()
        }, this.putAway = () => {
          this.api.sendCommand(`${JB} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      sN(BB) {
        let [, IB, ZB] = BB;
        this.pages = HB(IB, ZB), QB.l.Gq(MB, this.pages, !0)
      }
      openFromServer(BB) {
        let [, IB] = BB;
        this.openRequested = IB, this.Iz()
      }
      Iz() {
        const BB = this.openRequested;
        null === BB || vB.d.get("loadingOverlayVisible") || (this.openRequested = null, null === this.pages || (0, FB.n)() || (0, WB.isTypingInInput)() || null !== this.placement.getView() || (this.openedOffered = BB, (0, GB.t)()))
      }
      JN(BB) {
        this.reported.has(BB) || (this.reported.add(BB), this.api.sendCommand(`${JB} report ${BB}`))
      }
    }
    var PB = ZB(1153);
    const RB = "KeyJ";

    function rB(BB) {
      let {
        journal: IB
      } = BB;
      const ZB = (0, kB.h)(MB, IB.getPages()),
        {
          isTouchScreen: TB
        } = (0, vB.o)(["isTouchScreen"]),
        {
          t: JB
        } = (0, nB.G)(),
        cB = (0, oB.useContext)(CB);
      return (0, UB.e)((BB => null !== ZB && BB.code === RB && !BB.repeat && !(0, WB.isTypingInInput)()), (BB => {
        (0, FB.C)(BB, !0, GB.t)
      })), null === ZB ? null : (0, PB.jsx)(NB.h, {
        placement: "topRight",
        children: (0, PB.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, PB.jsxs)("button", {
            ref: cB.journalRef,
            type: "button",
            className: zB()("PlotsJournalButton SmallTextBold", {
              Touch: TB
            }),
            onClick: GB.t,
            children: [(0, PB.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, PB.jsx)(qB.e, {
                itemName: "Book",
                amount: 0
              })
            }), JB("plotsGame:journalButton"), !TB && (0, PB.jsx)(yB.d, {
              className: "PlotsJournalButtonKey",
              keyCode: RB
            }), "openJournal" === cB.hint && (0, PB.jsx)(gB.d, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon HandLeftAnim PlotsJournalButtonHand"
            })]
          })
        })
      })
    }
    var mB = ZB(9296);
    const XB = [0, 90, 180, 270],
      LB = /^(meta\|rot\d)\|([lrud]+)$/,
      eB = "nesw",
      uB = /^meta\|([nesw]*)\|?(Stacked)?$/,
      fB = function(BB) {
        const IB = new WeakMap;
        return (ZB, TB) => {
          let JB = IB.get(ZB);
          return void 0 === JB && (JB = BB(ZB, TB), IB.set(ZB, JB)), JB
        }
      }((BB => new lB(BB)));
    class lB {
      constructor(BB) {
        this.blockMetadata = BB, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const IB = new Set(Object.keys(BB).map((IB => BB[IB].id)));
        IB.add(0), this.maxBlockId = Math.max(...IB)
      }
      static
      for (BB) {
        return fB(BB)
      }
      getBlockIdMapping(BB, IB) {
        const ZB = this.getBlockIdMappingKey(BB, IB);
        let TB = this.blockIdMappings.get(ZB);
        return void 0 === TB && XB.includes(BB) && (TB = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, BB, IB), this.blockIdMappings.set(ZB, TB)), TB
      }
      turnBlockId(BB, IB, ZB) {
        return this.mapBlockId(this.blockMetadata[BB], IB, this.getRotationMapping(IB, ZB), ZB)
      }
      getBlockIdMappingKey(BB, IB) {
        return `r${BB}|m${Number(IB)}`
      }
      createBlockIdMapping(BB, IB, ZB, TB) {
        const JB = new Uint16Array(IB + 1),
          oB = this.getRotationMapping(ZB, TB);
        for (const GB in BB) {
          const IB = BB[GB];
          JB[IB.id] = this.mapBlockId(IB, ZB, oB, TB)
        }
        return JB
      }
      getRotationMapping(BB, IB) {
        const ZB = Math.round(BB / 90),
          TB = new Uint8Array(4);
        for (let JB = 0; JB < 4; JB++) TB[JB] = (4 + JB - ZB) % 4;
        if (IB) {
          let BB = TB[0];
          TB[0] = TB[1], TB[1] = BB, BB = TB[2], TB[2] = TB[3], TB[3] = BB
        }
        return TB
      }
      mapBlockId(BB, IB, ZB, TB) {
        var JB;
        const {
          blockMetadata: oB
        } = this, GB = Math.round(IB / 90), {
          id: vB,
          meta: kB
        } = BB, {
          rot: cB,
          rootName: nB,
          metaStr: hB
        } = kB;
        let zB;
        const [, FB, NB] = null !== (JB = uB.exec(hB)) && void 0 !== JB ? JB : [];
        if (void 0 !== FB) {
          var gB, qB;
          zB = null !== (gB = null === (qB = oB[`${nB}|meta|${[eB.split("").filter(((BB,IB)=>FB.split("").some((BB=>{const ZB=eB.indexOf(BB);return((TB?3-ZB:ZB)+GB)%4===IB})))).join(""),NB].filter(Boolean).join("|")}`]) || void 0 === qB ? void 0 : qB.id) && void 0 !== gB ? gB : vB
        } else if (null === cB) zB = vB;
        else {
          var yB, UB;
          const BB = ZB[cB - 1] + 1;
          let IB = hB.replace(`rot${cB}`, `rot${BB}`);
          TB && kB.stairsCorner && (IB = IB.replace(/(Left|Right)$/, (BB => "Left" === BB ? "Right" : "Left"))), TB && "Chest" === nB && (IB = IB.replace(/\|(left|right)$/, ((BB, IB) => "left" === IB ? "|right" : "|left")));
          const JB = LB.exec(IB);
          if (TB && null !== JB) {
            const BB = "lrud".split("").filter((BB => JB[2].includes("l" === BB ? "r" : "r" === BB ? "l" : BB)));
            IB = `${JB[1]}|${BB.join("")}`
          }
          const GB = `${nB}|${IB}`;
          if (zB = null !== (yB = null === (UB = oB[GB]) || void 0 === UB ? void 0 : UB.id) && void 0 !== yB ? yB : null, null === zB) {
            const BB = oB[nB];
            zB = BB.rootMetaDesc === GB ? BB.id : vB
          }
        }
        return zB
      }
    }

    function AB(BB, IB, ZB) {
      let {
        xRotationMappedOrigin: TB,
        shouldSwapXZ: JB
      } = ZB;
      const oB = JB ? IB : BB;
      return null === TB ? oB : TB - oB
    }

    function tB(BB, IB, ZB) {
      let {
        zRotationMappedOrigin: TB,
        shouldSwapXZ: JB
      } = ZB;
      const oB = JB ? BB : IB;
      return null === TB ? oB : TB - oB
    }
    const bB = {
        farm_hut: {
          size: [7, 7, 7],
          palette: ["Aspen Wood Planks", "Messy Stone", "Barkless Aspen Log", "Red Planks", "Glass", "Barkless Pine Log", "Maple Wood Planks", "Smooth Stone"],
          layers: ["....... .cbhbc. .bgggb. .bgggb. .bgggb. .cbbbc. .......", "....... .cd.dc. .d...d. .d...d. .d...d. .cdddc. .......", "....... .cd.dc. .d...d. .e...d. .d...d. .cdddc. .......", "aa...aa bfdadfb bd...db bd...db bd...db bfdddfb aa...aa", ".aa.aa. .bbdbb. .bb.bb. .bb.bb. .bb.bb. .bbdbb. .aa.aa.", "..aaa.. ..bbb.. ..bbb.. ..bbb.. ..bbb.. ..bbb.. ..aaa..", "...a... ...b... ...b... ...b... ...b... ...b... ...a..."]
        },
        rusticHome_tent: {
          size: [7, 6, 7],
          palette: ["Barkless Pine Log", "White Wool", "Pine Wood Planks"],
          layers: ["a..a..a b.....b b.....b b.....b b.....b b.....b a..a..a", "a..a..a b.....b b.....b b.....b b.....b b.....b a..a..a", "cc.a.cc b.....b b.....b b.....b b.....b b.....b cc.a.cc", ".ccacc. .b...b. .b...b. .b...b. .b...b. .b...b. .ccacc.", "..ccc.. ..b.b.. ..b.b.. ..b.b.. ..b.b.. ..b.b.. ..ccc..", "...c... ...b... ...b... ...b... ...b... ...b... ...c..."]
        },
        market_stand: {
          size: [7, 4, 4],
          palette: ["Barkless Pine Log", "Pine Wood Planks", "White Wool", "Green Wool"],
          layers: ["a.bbbba ....... ....... acdcdca", "a.....a ....... ....... acdcdca", "a.....a ....... ....... acdcdca", "bcdcdcb bcdcdcb bcdcdcb bcdcdcb"]
        },
        castle_wall: {
          size: [8, 7, 2],
          palette: ["Smooth Stone", "Stone Bricks", "Maple Wood Planks"],
          layers: ["aaaaaaaa aaaaaaaa", "bbbbbbbb bbbbbbbb", "bbbbbbbb bbbbbbbb", "bbbbbbbb bbbbbbbb", "cccccccc bbbbbbbb", "........ bbbbbbbb", "........ bb.bb.bb"]
        },
        farm_house: {
          size: [13, 10, 11],
          palette: ["Aspen Wood Planks", "Messy Stone", "Stone Bricks", "Smooth Stone", "Barkless Aspen Log", "Red Planks", "Maple Wood Planks", "Glass"],
          layers: ["............. .cbbdbbc..dcd .bgggggb....c .bgggggb....c .bgggggb....c .bgggggb....c .bgggggb....c .bgggggb....c .bgggggb....c .cbbbbbcccccd .............", "............. .dbb.bbd..... .b.....b..... .b.....b..... .b.....b..... .b.....b..... .b.....b..... .b........... .b.....b..... .dbbbbbd..... .............", "............. .eff.ffe..... .f.....f..... .f.....f..... .f.....f..... .f.....f..... .f.....f..... .f........... .f.....f..... .effhffe..... .............", "............. .effaffe..... .f.....f..... .f.....f..... .f.....f..... .f.....f..... .f.....f..... .f.....a..... .f.....f..... .effhffe..... .............", "............. .efffffe..... .f.....f..... .f.....f..... .f.....f..... .f.....f..... .f.....f..... .f.....f..... .f.....f..... .effaffe..... .............", "aa.....aa.... beaaaaaeb.... ba.....ab.... ba.....ab.... ba.....ab.... ba.....ab.... ba.....ab.... ba.....ab.... ba.....ab.... beaaaaaeb.... aa.....aa....", ".aa...aa..... .bfffffb..... .b.....b..... .b.....b..... .b.....b..... .b.....b..... .b.....b..... .b.....b..... .b.....b..... .bfffffb..... .aa...aa.....", "..aa.aa...... ..bfffb...... ..b...b...... ..b...b...... ..b...b...... ..b...b...... ..b...b...... ..b...b...... ..b...b...... ..bfffb...... ..aa.aa......", "...aaa....... ...bfb....... ...b.b....... ...b.b....... ...b.b....... ...b.b....... ...b.b....... ...b.b....... ...b.b....... ...bfb....... ...aaa.......", "....a........ ....b........ ....b........ ....b........ ....b........ ....b........ ....b........ ....b........ ....b........ ....b........ ....a........"]
        },
        rusticHome_cabin: {
          size: [11, 10, 11],
          palette: ["Pine Wood Planks", "Messy Stone", "Barkless Pine Log", "Maple Wood Planks", "Glass"],
          layers: ["........... .cbbbcbbbc. .bdddddddb. .bdddddddb. .bdddddddb. .cdddddddc. .bdddddddb. .bdddddddb. .bdddddddb. .cbbbcbbbc. ...........", "........... .cb.bcbbbc. .b.......b. .b.......b. .b.......b. .c.......c. .b.......b. .b.......b. .b.......b. .cbbbcbbbc. ...........", "........... .cd.dcdedc. .d.......d. .d.......d. .d.......d. .c.......c. .d.......d. .d.......d. .d.......d. .cdedcdedc. ...........", "........... .cdddcdddc. .d.......d. .d.......d. .d.......d. .c.......c. .d.......d. .d.......d. .d.......d. .cdddcdddc. ...........", "aa.......aa baaaaaaaaab ba.......ab ba.......ab ba.......ab aa.......aa ba.......ab ba.......ab ba.......ab baaaaaaaaab aa.......aa", ".aa.....aa. .bdddcdddb. .b.......b. .b.......b. .b.......b. .a.......a. .b.......b. .b.......b. .b.......b. .bdddcdddb. .aa.....aa.", "..aa...aa.. ..bddcddb.. ..b.....b.. ..b.....b.. ..b.....b.. ..a.....a.. ..b.....b.. ..b.....b.. ..b.....b.. ..bddcddb.. ..aa...aa..", "...aa.aa... ...bdcdb... ...b...b... ...b...b... ...b...b... ...a...a... ...b...b... ...b...b... ...b...b... ...bdcdb... ...aa.aa...", "....aaa.... ....bcb.... ....b.b.... ....b.b.... ....b.b.... ....a.a.... ....b.b.... ....b.b.... ....b.b.... ....bcb.... ....aaa....", ".....a..... .....b..... .....b..... .....b..... .....b..... .....a..... .....b..... .....b..... .....b..... .....b..... .....a....."]
        },
        market_stall: {
          size: [11, 8, 9],
          palette: ["Pine Wood Planks", "Barkless Pine Log", "Messy Stone", "Maple Wood Planks", "Orange Planks", "White Wool", "Orange Wool"],
          layers: ["..bcccccb.. ..cdddddc.. ..cdddddc.. .bcdddddcb. .cdddddddc. .cdddddddc. .cdddddddc. .bcccccccb. ...........", "..b.....b.. ........... ........... .bdddddddb. .d.......d. .d......... .d.......d. .bdddddddb. ...........", "..b.....b.. ........... ........... .bd.....db. .d.......d. .d......... .d.......d. .bdddddddb. ...........", "..b.....b.. ........... ........... .bdaaaaadb. .d.......d. .d.......a. .d.......d. .bdddddddb. ...........", "..afgfgfa.. ..afgfgfa.. aeafgfgfaea abdddddddba .ddddddddd. .ddddddddd. .ddddddddd. abdddddddba aeeeeeeeeea", "........... ........... ........... aeeeeeeeeea ad.......da .d.......d. ad.......da aeeeeeeeeea ...........", "........... ........... ........... ........... aeeeeeeeeea ad.......da aeeeeeeeeea ........... ...........", "........... ........... ........... ........... ........... aeeeeeeeeea ........... ........... ..........."]
        },
        farm_barn: {
          size: [21, 13, 17],
          palette: ["Smooth Stone", "Stone Bricks", "Aspen Wood Planks", "Messy Stone", "Barkless Aspen Log", "Red Planks", "Glass", "Maple Wood Planks", "Maple Ladder|meta|rot3"],
          layers: ["..................... aba..bbbbbabbbbb..aba b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b aba..bbbbbbbbbbb..aba .....................", "..................... .....aaaaa.aaaaa..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a....i....a..... .....aaaaaaaaaaa..... .....................", "..................... .....effef.feffe..... .....f.........f..... .....f.........f..... .....f.........f..... .....f.........f..... .....e.........e..... .....f.........f..... .....g.........g..... .....f.........f..... .....e.........e..... .....f.........f..... .....f.........f..... .....f.........f..... .....f....i....f..... .....effefffeffe..... .....................", "..................... .....effefcfeffe..... .....f.........f..... .....f.........f..... .....f.........f..... .....f.........f..... .....e.........e..... .....f.........f..... .....g.........g..... .....f.........f..... .....e.........e..... .....f.........f..... .....f.........f..... .....f.........f..... .....f....i....f..... .....effefffeffe..... .....................", "..................... .....effefffeffe..... .....f.........f..... .....f.........f..... .....f.........f..... .....f.........f..... .....e.........e..... .....f.........f..... .....c.........c..... .....f.........f..... .....e.........e..... .....f.........f..... .....f.........f..... .....f.........f..... .....f....i....f..... .....effefffeffe..... .....................", "..................... .....effefffeffe..... .....f.........f..... .....f.........f..... .....f.........f..... .....f.........f..... .....ecccccccccc..... .....f.........f..... .....f.........f..... .....f.........f..... .....eccccccccce..... .....f.........f..... .....f.........f..... .....f.........f..... .....f....i....f..... .....effefffeffe..... .....................", "....cc.........cc.... ....deccecccecced.... ....dchhhhhhhhhcd.... ....dchhhhhhhhhcd.... ....dchhhhhhhhhcd.... ....dchhhhhhhhhcd.... ....cecccccccccec.... ....dchhhhhhhhhcd.... ....dchhhhhhhhhcd.... ....dchhhhhhhhhcd.... ....cecccccccccec.... ....dchhhhhhhhhcd.... ....dchhhhhhhhhcd.... ....dchhhhhhhhhcd.... ....dchhhhihhhhcd.... ....deccecccecced.... ....cc.........cc....", ".....c.........c..... .....dffefffeffd..... .....d.........d..... .....d.........d..... .....d.........d..... .....d.........d..... .....c.........c..... .....d.........d..... .....d.........d..... .....d.........d..... .....c.........c..... .....d.........d..... .....d.........d..... .....d.........d..... .....d....i....d..... .....dffefffeffd..... .....c.........c.....", ".....c.........c..... .....dffefgfeffd..... .....d.........d..... .....d.........d..... .....d.........d..... .....d.........d..... .....c.........c..... .....d.........d..... .....d.........d..... .....d.........d..... .....c.........c..... .....d.........d..... .....d.........d..... .....d.........d..... .....d.........d..... .....dffefgfeffd..... .....c.........c.....", ".....cc.......cc..... .....dffefgfeffd..... .....d.........d..... .....d.........d..... .....d.........d..... .....d.........d..... .....c.........c..... .....d.........d..... .....d.........d..... .....d.........d..... .....c.........c..... .....d.........d..... .....d.........d..... .....d.........d..... .....d.........d..... .....dffefgfeffd..... .....cc.......cc.....", "......cc.....cc...... ......dfefcfefd...... ......d.......d...... ......d.......d...... ......d.......d...... ......d.......d...... ......c.......c...... ......d.......d...... ......d.......d...... ......d.......d...... ......c.......c...... ......d.......d...... ......d.......d...... ......d.......d...... ......d.......d...... ......dfefcfefd...... ......cc.....cc......", ".......ccc.ccc....... .......ddfffdd....... .......dd...dd....... .......dd...dd....... .......dd...dd....... .......dd...dd....... .......cc...cc....... .......dd...dd....... .......dd...dd....... .......dd...dd....... .......cc...cc....... .......dd...dd....... .......dd...dd....... .......dd...dd....... .......dd...dd....... .......ddfffdd....... .......ccc.ccc.......", ".........ccc......... .........ddd......... .........ddd......... .........ddd......... .........ddd......... .........ddd......... .........ccc......... .........ddd......... .........ddd......... .........ddd......... .........ccc......... .........ddd......... .........ddd......... .........ddd......... .........ddd......... .........ddd......... .........ccc........."]
        },
        rusticHome_house: {
          size: [17, 14, 15],
          palette: ["Pine Wood Planks", "Stone Bricks", "Smooth Stone", "Barkless Pine Log", "Maple Wood Planks", "Glass"],
          layers: ["................. .....cbbbbbc..... .....beeeeeb..... .....beeeeeb..... .cbbbbeeeeebbbbc. .beeeeeeeeeeeeeb. .beeeeeeeeeeeeeb. .beeeeeeeeeeeeeb. .beeeeeeeeeeeeeb. .beeeeeeeeeeeeeb. .cbbbeeeeeeebbbc. .....beeeeeb..... .....beeeeeb..... .....cbbbbbc..... .................", "................. .....cbb.bbc..... .....b.....b..... .....b.....b..... .cbbbd.....dbbbc. .b.............b. .b.............b. .b.............b. .b.............b. .b.............b. .cbbbdeed..dbbbc. .....b.....b..... .....b.....b..... .....cbbbbbc..... .................", "................. .....dee.eed..... .....e.....e..... .....e.....e..... .defed.....defed. .e.............e. .e.............e. .e.............e. .e.............e. .e.............e. .defed..d..defed. .....eee...e..... .....eee...e..... .....deeeeed..... .................", "................. .....deeaeed..... .....e.....e..... .....e.....e..... .defed.....defed. .e.............e. .e.............e. .e.............e. .e.............e. .e.............e. .defed..d..defed. .....e..e..e..... .....e..e..e..... .....deeeeed..... .................", "................. .....deeeeed..... .....e.....e..... .....e.....e..... .deeed.....deeed. .e.............e. .e.............e. .e.............e. .e.............e. .e.............e. .deeed..d..deeed. .....e...eee..... .....e...eee..... .....deeeeed..... .................", "................. .....aaaaaaa..... .....aeeeeea..... aa...aeeeeea...aa baaaaaaaaaaaaaaab baeeeaeeeeeaeeeab baeeeaeeeeeaeeeab baeeeaeeeeeaeeeab baeeeaeeeeeaeeeab baeeeaeeeeeaeeeab baaaaaaadaaaaaaab aa...a.....a...aa .....a.....a..... .....aaaaaaa..... .................", "................. .....deeeeed..... .....e.....e..... .aa..e.....e..aa. .beeed.....deeeb. .b...e.....e...b. .b...e.....e...b. .b...e.....e...b. .b...e.....e...b. .b...e.....e...b. .beeed..d..deeeb. .aa..e.....e..aa. .....e.....e..... .....deeeeed..... .................", "................. .....defefed..... .....e.....e..... ..aa.e.....e.aa.. ..beed.....deeb.. ..b..e.....e..b.. ..b..e.....e..b.. ..b..e.....e..b.. ..b..e.....e..b.. ..b..e.....e..b.. ..beed.....deeb.. ..aa.e.....e.aa.. .....e.....e..... .....defefed..... .................", "................. .....deeeeed..... .....e.....e..... ...aae.....eaa... ...bed.....deb... ...b.e.....e.b... ...b.e.....e.b... ...b.e.....e.b... ...b.e.....e.b... ...b.e.....e.b... ...bed.....deb... ...aae.....eaa... .....e.....e..... .....deeeeed..... .................", "....aa.....aa.... ....baaaaaaab.... ....ba.....ab.... ....aa.....aa.... ....ba.....ab.... ....ba.....ab.... ....ba.....ab.... ....ba.....ab.... ....ba.....ab.... ....ba.....ab.... ....ba.....ab.... ....aa.....aa.... ....ba.....ab.... ....baaaaaaab.... ....aa.....aa....", ".....aa...aa..... .....beeeeeb..... .....b.....b..... .....a.....a..... .....b.....b..... .....b.....b..... .....b.....b..... .....b.....b..... .....b.....b..... .....b.....b..... .....b.....b..... .....a.....a..... .....b.....b..... .....beeeeeb..... .....aa...aa.....", "......aa.aa...... ......beeeb...... ......b...b...... ......a...a...... ......b...b...... ......b...b...... ......b...b...... ......b...b...... ......b...b...... ......b...b...... ......b...b...... ......a...a...... ......b...b...... ......beeeb...... ......aa.aa......", ".......aaa....... .......beb....... .......b.b....... .......a.a....... .......b.b....... .......b.b....... .......b.b....... .......b.b....... .......b.b....... .......b.b....... .......b.b....... .......a.a....... .......b.b....... .......beb....... .......aaa.......", "........a........ ........b........ ........b........ ........a........ ........b........ ........b........ ........b........ ........b........ ........b........ ........b........ ........b........ ........a........ ........b........ ........b........ ........a........"]
        },
        market_shop: {
          size: [17, 16, 12],
          palette: ["Pine Wood Planks", "Smooth Stone", "Stone Bricks", "Barkless Pine Log", "Maple Wood Planks", "Blue Planks", "Glass", "White Wool", "Blue Wool", "Maple Ladder|meta|rot3"],
          layers: [".....bcccccb..... .....ccccccc..... .....ccccccc..... .....ccccccc..... .bcccbcccccbcccb. .ceeeeeeeeeeeeec. .ceeeeeeeeeeeeec. .ceeeeeeeeeeeeec. .ceeeeeeeeeeeeec. .ceeeeeeeeeeeeec. .ccccbcccccbcccb. .................", ".....d.....d..... ................. ................. ................. .bc.cbcccccbc.cb. .c.............c. .c.............c. .c.............c. .c.............c. .c.......j.....c. .bcccbcccccbcccb. .................", ".....d.....d..... ................. ................. ................. .de.ed.....de.ed. .e.............e. .e.............e. .e.............e. .e.............e. .e.......j.....e. .degedeeeeedeged. .................", ".....d.....d..... ................. ................. ................. .deaedaaaaadeaed. .e.............e. .e.............e. .e.............e. .e.............e. .e.......j.....e. .deaedeeeeedeaed. .................", ".....ahihiha..... .....ahihiha..... .....ahihiha..... .....ahihiha..... .deeedeeeeedeeed. .e.............e. .e.............e. .e.............e. .e.............e. .e.......j.....e. .deeedeeeeedeeed. .................", "................. ................. ................. afffffffffffffffa aaaaaaaaaaaaaaaaa .aeeeaeeeeeaeeea. .aeeeaeeeeeaeeea. .aeeeaeeeeeaeeea. .aeeeaeeeeeaeeea. .aeeeaeeejeaeeea. aaaaaaaaaaaaaaaaa affffa.....affffa", "................. ................. ................. ................. affffdeeeeedffffa ae...e.....e...ea .e...e.....e...e. .e...e.....e...e. .e...e.....e...e. ae...e...j.e...ea affffdeeeeedffffa .................", "................. ................. ................. ................. .....degeged..... affffe.....effffa ae...e.....e...ea .e...e.....e...e. ae...e.....e...ea affffe.....effffa .....degeged..... .................", "................. ................. ................. ................. .....degeged..... .....e.....e..... affffe.....effffa ae...e.....e...ea affffe.....effffa .....e.....e..... .....degeged..... .................", "................. ................. ................. ................. .....deaeaed..... .....e.....e..... .....e.....e..... affffe.....effffa .....e.....e..... .....e.....e..... .....deaeaed..... .................", "................. ................. ................. ................. .....deeeeed..... .....e.....e..... .....e.....e..... .....e.....e..... .....e.....e..... .....e.....e..... .....deeeeed..... .................", "................. ................. ................. ....aa.....aa.... ....faaaaaaaf.... ....fa.....af.... ....fa.....af.... ....fa.....af.... ....fa.....af.... ....fa.....af.... ....faaaaaaaf.... ....aa.....aa....", "................. ................. ................. .....aa...aa..... .....feeeeef..... .....f.....f..... .....f.....f..... .....f.....f..... .....f.....f..... .....f.....f..... .....feeeeef..... .....aa...aa.....", "................. ................. ................. ......aa.aa...... ......feeef...... ......f...f...... ......f...f...... ......f...f...... ......f...f...... ......f...f...... ......feeef...... ......aa.aa......", "................. ................. ................. .......aaa....... .......fef....... .......f.f....... .......f.f....... .......f.f....... .......f.f....... .......f.f....... .......fef....... .......aaa.......", "................. ................. ................. ........a........ ........f........ ........f........ ........f........ ........f........ ........f........ ........f........ ........f........ ........a........"]
        },
        castle_gate: {
          size: [17, 11, 5],
          palette: ["Smooth Stone", "Stone Bricks", "Maple Wood Planks", "Maple Ladder|meta|rot3"],
          layers: ["...aaa.....aaa... .d.a.a.....a.a.d. aaaa.a.....a.aaaa aaaa.a.....a.aaaa ...aaa.....aaa...", "...bbb.....bbb... .d.b.b.....b.b.d. bbbb.b.....b.bbbb bbbb.b.....b.bbbb ...bbb.....bbb...", "...abb.....bba... .d.b.b.....b.b.d. bbbb.b.....b.bbbb bbbb.b.....b.bbbb ...abb.....bba...", "...bbbb...bbbb... .d.b.bc...cb.b.d. bbbb.bc...cb.bbbb bbbb.bc...cb.bbbb ...bbbb...bbbb...", "...abbbbbbbbba... .d.bcccccccccb.d. ccccccccccccccccc bbbbcccccccccbbbb ...abbbbbbbbba...", "...bbabbabbabb... ...b.........b... ................. bbbb.........bbbb ...bbabbabbabb...", "...ab.bb.bb.ba... ...b.........b... ................. bb.b.........b.bb ...ab.bb.bb.ba...", "...bbabbabbabb... ...b.........b... ...a.........a... ...b.........b... ...bbabbabbabb...", "...abbbbbbbbba... ...bcccccccccb... ...bcccccccccb... ...bcccccccccb... ...abbbbbbbbba...", "...bbbbbbbbbbb... ...b.........b... ...b.........b... ...b.........b... ...bbbbbbbbbbb...", "...ab.bb.bb.ba... ...b.........b... ................. ...b.........b... ...ab.bb.bb.ba..."]
        },
        castle_tower: {
          size: [9, 20, 9],
          palette: ["Smooth Stone", "Stone Bricks", "Maple Wood Planks", "Barkless Pine Log", "Red Wool", "Maple Ladder|meta|rot3"],
          layers: ["aaaaaaaaa accccccca accccccca accccccca accccccca accccccca accccccca accccccca aaaaaaaaa", "bbbb.bbbb b.......b b.......b b.......b b.......b b.......b b.......b b.....f.b bbbbbbbbb", "abbb.bbba b.......b b.......b b.......b b.......b b.......b b.......b b.....f.b abbbbbbba", "bbbbabbbb b.......b b.......b b.......b b.......b b.......b b.......b b.....f.b bbbbbbbbb", "abbbbbbba bcccccccb bcccccccb bcccccccb bcccccccb bcccccccb bcccccccb bcccccfcb abbbbbbba", "bbbbabbbb b.......b b.......b b.......b a.......a b.......b b.......b b.....f.b bbbbabbbb", "abbb.bbba b.......b b.......b b.......b ......... b.......b b.......b b.....f.b abbb.bbba", "bbbbabbbb b.......b b.......b b.......b a.......a b.......b b.......b b.....f.b bbbbabbbb", "abbbbbbba bcccccccb bcccccccb bcccccccb bcccccccb bcccccccb bcccccccb bcccccfcb abbbbbbba", "bbbbabbbb b.......b b.......b b.......b a.......a b.......b b.......b b.....f.b bbbbabbbb", "abbb.bbba b.......b b.......b b.......b ......... b.......b b.......b b.....f.b abbb.bbba", "bbbbabbbb b.......b b.......b b.......b a.......a b.......b b.......b b.....f.b bbbbabbbb", "abbbbbbba bcccccccb bcccccccb bcccccccb bcccccccb bcccccccb bcccccccb bcccccfcb abbbbbbba", "bbbbbbbbb b.......b b.......b b.......b b...d...b b.......b b.......b b.......b bbbbbbbbb", "ab.bbb.ba b.......b ......... b.......b b...d...b b.......b ......... b.......b ab.bbb.ba", "......... ......... ......... ......... ....d.... ......... ......... ......... .........", "......... ......... ......... ......... ....d.... ......... ......... ......... .........", "......... ......... ......... ......... ....deee. ......... ......... ......... .........", "......... ......... ......... ......... ....deee. ......... ......... ......... .........", "......... ......... ......... ......... ....a.... ......... ......... ......... ........."]
        }
      },
      xB = new Map;

    function EB(BB, IB) {
      const ZB = `${BB}|${IB}`;
      let TB = xB.get(ZB);
      if (void 0 === TB) {
        const {
          size: JB,
          palette: oB,
          layers: GB
        } = bB[BB], vB = 90 === IB || 270 === IB, [kB, cB] = vB ? [JB[2], JB[0]] : [JB[0], JB[2]], nB = function(BB, IB, ZB) {
          let TB = null,
            JB = null,
            oB = !1;
          switch (BB) {
            case 0:
              break;
            case 90:
              TB = IB - 1, oB = !0;
              break;
            case 180:
              TB = IB - 1, JB = ZB - 1;
              break;
            case 270:
              JB = ZB - 1, oB = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${BB}`)
          }
          return {
            xRotationMappedOrigin: TB,
            zRotationMappedOrigin: JB,
            shouldSwapXZ: oB
          }
        }(IB, kB, cB), hB = lB.for(mB.f), zB = oB.map((BB => (0, mB.e)(hB.turnBlockId((0, mB.g)(BB), IB, !1)))), FB = [];
        GB.forEach(((BB, IB) => {
          BB.split(" ").forEach(((BB, ZB) => {
            for (let TB = 0; TB < BB.length; TB++)
              if ("." !== BB[TB]) {
                const JB = [AB(TB, ZB, nB), IB, tB(TB, ZB, nB)];
                FB.push({
                  offset: JB,
                  block: zB[BB.charCodeAt(TB) - "a".charCodeAt(0)]
                })
              }
          }))
        })), TB = {
          size: [kB, JB[1], cB],
          cells: FB
        }, xB.set(ZB, TB)
      }
      return TB
    }
    const DB = "plotsBuildProgressChanged",
      KB = new Map;

    function VB(BB, IB, ZB) {
      let TB = 0,
        JB = 0;
      return function(BB) {
        let IB = KB.get(BB);
        if (void 0 === IB) {
          const TB = [];
          for (const {
              offset: IB
            }
            of EB(BB, 0).cells) {
            var ZB;
            TB[IB[1]] = (null !== (ZB = TB[IB[1]]) && void 0 !== ZB ? ZB : 0) + 1
          }
          IB = TB, KB.set(BB, IB)
        }
        return IB
      }(BB).forEach(((BB, ZB) => {
        TB += BB, ZB > IB && (JB += BB)
      })), {
        id: BB,
        filled: TB - JB - ZB,
        total: TB
      }
    }
    class SB {
      constructor() {
        this.shown = null, this.topOpen = 0, this.progress = null
      }
      get() {
        return this.progress
      }
      show(BB) {
        this.shown = BB, this.topOpen = 0, null === BB && this.Gq(null)
      }
      update(BB, IB, ZB) {
        const TB = this.shown;
        null !== TB && (BB >= IB && (this.topOpen = ZB), this.Gq(VB(TB.id, IB - TB.y, BB >= IB ? ZB : this.topOpen + ZB)))
      }
      Gq(BB) {
        const IB = this.progress;
        (null === BB || void 0 === BB ? void 0 : BB.id) === (null === IB || void 0 === IB ? void 0 : IB.id) && (null === BB || void 0 === BB ? void 0 : BB.filled) === (null === IB || void 0 === IB ? void 0 : IB.filled) && (null === BB || void 0 === BB ? void 0 : BB.total) === (null === IB || void 0 === IB ? void 0 : IB.total) || (this.progress = BB, QB.l.Gq(DB, BB, !0))
      }
    }
    const BI = "plotsPlotChanged",
      II = "plotsGuideChanged",
      ZI = "plotsGuideDone";
    class TI {
      constructor() {
        this.plot = ["none"], this.guide = ["none"]
      }
      getPlot() {
        return this.plot
      }
      receivePlot(BB) {
        this.plot = BB, QB.l.Gq(BI, BB, !0)
      }
      getGuide() {
        return this.guide
      }
      receiveGuide(BB) {
        this.guide = BB, QB.l.Gq(II, BB, !0)
      }
      receiveGuideDone() {
        QB.l.Gq(ZI, void 0, !0)
      }
    }
    var JI = ZB(1343),
      oI = ZB(38583),
      GI = ZB(36909),
      vI = ZB(1538);

    function kI(BB) {
      let {
        onSkip: IB,
        className: ZB
      } = BB;
      const {
        t: TB
      } = (0, nB.G)();
      return (0, PB.jsx)("button", {
        type: "button",
        className: zB()("PlotsGuideSkipButton", ZB),
        ...(0, vI.h)(IB, "pointerup"),
        children: TB("tutorial:skip")
      })
    }

    function cI(BB) {
      let {
        target: IB,
        placement: ZB,
        spotlight: TB = null,
        children: JB
      } = BB;
      const {
        t: GB
      } = (0, nB.G)(), vB = (0, oB.useRef)(IB);
      return vB.current = IB, (0, JI.t)("popup", vB, null === TB ? null : TB.onSkip, null !== TB, null, "controller:menusSkipTutorial"), (0, PB.jsxs)(GI.e, {
        target: IB,
        placement: ZB,
        className: zB()("PlotsGuideBubble", {
          Passive: null === TB
        }),
        spotlight: null !== TB,
        spotlightMargin: 30,
        children: [(0, PB.jsxs)("div", {
          className: "PlotsGuideBubbleHeader",
          children: [(0, PB.jsx)("img", {
            className: "PlotsGuideBubblePortrait",
            src: oI,
            alt: "",
            draggable: !1
          }), (0, PB.jsx)("span", {
            className: "PlotsGuideBubbleSpeaker",
            children: GB("plotsGame:maverickName")
          }), null !== TB && (0, PB.jsx)(kI, {
            onSkip: TB.onSkip
          })]
        }), (0, PB.jsx)("p", {
          className: "PlotsGuideBubbleText",
          children: JB
        })]
      })
    }

    function nI(BB) {
      let {
        className: IB,
        icon: ZB,
        title: TB,
        children: JB
      } = BB;
      return (0, PB.jsxs)("div", {
        className: zB()("PlotsCard", IB),
        role: "status",
        children: [(0, PB.jsx)("span", {
          className: "PlotsCardIcon",
          children: (0, PB.jsx)(gB.d, {
            name: ZB
          })
        }), (0, PB.jsxs)("div", {
          className: "PlotsCardBody",
          children: [(0, PB.jsx)("div", {
            className: "PlotsCardTitle SmallTextBold",
            children: TB
          }), JB]
        })]
      })
    }

    function hI(BB) {
      let {
        progress: IB,
        goal: ZB
      } = BB;
      const TB = Math.min(IB, ZB);
      return (0, PB.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, PB.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": ZB,
          "aria-valuenow": TB,
          children: (0, PB.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${TB/ZB})`
            }
          })
        }), (0, PB.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [TB, "/", ZB]
        })]
      })
    }

    function zI(BB) {
      let {
        progress: IB,
        guide: ZB
      } = BB;
      const {
        t: TB
      } = (0, nB.G)(), {
        isTouchScreen: JB
      } = (0, vB.o)(["isTouchScreen"]), oB = IB.filled < 5;
      return (0, PB.jsxs)(PB.Fragment, {
        children: [(oB || IB.total - IB.filled <= 5) && (0, PB.jsx)("div", {
          className: "PlotsGuideHandLayer",
          children: (0, PB.jsx)("div", {
            ref: ZB.bindHand,
            className: "PlotsGuideHand",
            children: (0, PB.jsx)(gB.d, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon"
            })
          })
        }), (0, PB.jsx)(NB.h, {
          placement: "bottom",
          children: (0, PB.jsxs)(nI, {
            icon: "hammer",
            title: TB(YB(IB.id).displayName.translationKey),
            children: [oB && (0, PB.jsx)("div", {
              className: "PlotsCardHint SmallTextLight",
              children: JB ? TB("plotsGame:guideBuildTouch") : FI(TB)
            }), (0, PB.jsx)(hI, {
              progress: IB.filled,
              goal: IB.total
            })]
          })
        })]
      })
    }

    function FI(BB) {
      const IB = cB.u["alt-fire"][0];
      return "Mouse3" === IB ? BB("plotsGame:guideBuildRightClick") : BB("plotsGame:guideBuildKeys", {
        key: (0, cB.n)(IB)
      })
    }

    function NI() {
      return (0, PB.jsx)("div", {
        className: "PlotsGuideDragHand",
        children: (0, PB.jsx)(gB.d, {
          name: "hand-back-point-up",
          className: "SmallTextBold TouchTutorialIcon"
        })
      })
    }
    var gI = ZB(1353),
      qI = ZB(2719),
      yI = ZB(38463),
      UI = ZB(38249),
      WI = ZB(36958),
      dI = ZB(9328),
      CI = ZB(9347),
      QI = ZB(360),
      sI = ZB(37855);
    const wI = new Map([
        ["Aspen Wood Planks", [.78, .706, .502]],
        ["Barkless Aspen Log", [.792, .718, .518]],
        ["Barkless Pine Log", [.49, .353, .275]],
        ["Blue Planks", [.247, .267, .588]],
        ["Blue Wool", [.227, .267, .651]],
        ["Glass", [.702, .902, .882]],
        ["Green Wool", [.373, .467, .125]],
        ["Maple Ladder", [.612, .471, .29]],
        ["Maple Wood Planks", [.682, .561, .353]],
        ["Messy Stone", [.557, .58, .608]],
        ["Orange Planks", [.949, .549, .231]],
        ["Orange Wool", [.988, .522, .129]],
        ["Pine Wood Planks", [.475, .341, .263]],
        ["Red Planks", [.608, .2, .184]],
        ["Red Wool", [.69, .173, .145]],
        ["Smooth Stone", [.627, .651, .678]],
        ["Stone Bricks", [.522, .545, .573]],
        ["White Wool", [.98, .98, .98]]
      ]),
      OI = [...WI.c.blockRemoveActionRoots, ...UI.d, ...dI.i, "Board", "Code Block", "Custom Lobby Block"],
      YI = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let iI = null;

    function pI() {
      return iI ??= function() {
        const BB = aI(),
          IB = Math.max(...BB.map((BB => mB.f[BB].id))) + 1,
          ZB = new Int32Array(IB),
          TB = new Int32Array(IB),
          JB = new Uint8Array(IB).fill(1),
          oB = new Uint8Array(IB),
          GB = new Uint8Array(IB),
          vB = new Array(IB).fill("Air"),
          kB = new Map,
          cB = BB => {
            let IB = kB.get(BB);
            return void 0 === IB && (IB = kB.size + 1, kB.set(BB, IB)), IB
          },
          nB = new Set(OI);
        for (const zB of BB) {
          var hB;
          const {
            id: BB,
            meta: IB,
            altActionable: kB,
            canBePlacedOver: FB
          } = mB.f[zB];
          ZB[BB] = cB(HI(zB));
          const NB = IB.stairsCorner;
          if (null === NB) TB[BB] = ZB[BB];
          else {
            const ZB = NB.endsWith("Right");
            TB[BB] = cB(`${IB.rootName}|rot${ZB?IB.rot%4+1:IB.rot}|${IB.halfblockPlacement}|${NB.replace("Right","Left")}`)
          }
          JB[BB] = FB ? 1 : 0, oB[BB] = kB || null !== IB.open || zB in sI.d || nB.has(IB.rootName) || void 0 !== (0, UI.g)(IB.rootName) ? 1 : 0;
          const {
            rootName: gB
          } = IB;
          GB[BB] = null !== IB.open || UI.d.includes(gB) || gB.includes("Bookshelf") || gB.includes("Mailbox") ? 1 : 0, vB[BB] = null !== (hB = (0, yI.f)(BB)) && void 0 !== hB ? hB : gB
        }
        return {
          kinds: ZB,
          shapes: TB,
          empty: JB,
          inUse: oB,
          ownAltActionMessage: GB,
          placingItems: vB
        }
      }(), iI
    }

    function aI() {
      return Object.keys(mB.f).filter((BB => mB.f[BB].name === BB))
    }

    function HI(BB) {
      var IB;
      const ZB = mB.f[BB],
        {
          rootName: TB,
          rot: JB
        } = ZB.meta,
        [, ...oB] = (null !== (IB = ZB.rootMetaDesc) && void 0 !== IB ? IB : BB).split("|"),
        GB = oB.filter((BB => !("meta" === BB || YI.test(BB) || (0, CI.D)(ZB) && /^[nesw]+$/.test(BB) || dI.i.includes(TB) && /^[lrud]+$/.test(BB) || QI.N.includes(TB) && /^(left|right)$/.test(BB))));
      return [TB, ...GB].map((BB => "fenceGate" === ZB.model && BB === `rot${JB}` ? "rot" + ((JB - 1) % 2 + 1) : BB)).join("|")
    }

    function MI(BB, IB) {
      const {
        kinds: ZB,
        shapes: TB
      } = pI();
      return ZB[BB] === ZB[IB] || TB[BB] === TB[IB]
    }

    function jI(BB) {
      return 1 === pI().empty[BB]
    }

    function PI(BB) {
      return pI().placingItems[BB]
    }

    function RI(BB) {
      return wI.get(mB.f[BB].meta.rootName)
    }
    var rI = ZB(9325),
      mI = ZB(9340);
    const XI = [0, 0, 0, 1, 1, 1],
      LI = (0, rI.e)([
        [2, 0, 2, 6, 6, 6]
      ]),
      eI = (0, rI.e)([
        [3, 0, 3, 5, 5, 5]
      ]),
      uI = (0, rI.e)([
        [3, 3, 3, 5, 8, 5]
      ]),
      fI = [0, 1, 2, 3].map((BB => (0, rI.e)((0, rI.l)([
        [3, 2, 0, 5, 7, 3]
      ], BB))));

    function lI(BB) {
      const {
        cq: IB,
        model: ZB,
        blockModel: TB,
        meta: JB
      } = mB.f[BB];
      return void 0 !== IB ? IB : "CentreCross" === ZB ? LI : null !== TB && void 0 !== TB && TB.startsWith("torch") ? JB.halfblockPlacement === mI.e.side ? fI[JB.rot - 1] : JB.halfblockPlacement === mI.e.top ? uI : eI : XI
    }
    var AI = ZB(201);
    class tI {
      constructor(BB) {
        this.api = BB, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(BB) {
        const IB = AI.f.YN;
        this.chunks = [];
        for (let ZB = 0; ZB < BB.length; ZB += 3) {
          const TB = Math.floor(BB[ZB] / IB),
            JB = Math.floor(BB[ZB + 1] / IB),
            oB = Math.floor(BB[ZB + 2] / IB);
          this.watches(TB, JB, oB) || this.chunks.push(TB, JB, oB)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const BB = performance.now();
        if (BB - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = BB;
        let IB = !1;
        for (let ZB = 0; ZB < this.chunks.length; ZB += 3) {
          const BB = this.api.getChunkVersion(this.chunks[ZB], this.chunks[ZB + 1], this.chunks[ZB + 2]);
          this.versions[ZB / 3] !== BB && (this.versions[ZB / 3] = BB, IB = !0)
        }
        return IB
      }
      watches(BB, IB, ZB) {
        for (let TB = 0; TB < this.chunks.length; TB += 3)
          if (this.chunks[TB] === BB && this.chunks[TB + 1] === IB && this.chunks[TB + 2] === ZB) return !0;
        return !1
      }
    }
    var bI = ZB(38562);
    const xI = .35,
      EI = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      DI = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      KI = [.95, .2, .15];
    class VI {
      constructor() {
        this.groups = []
      }
      add(BB, IB, ZB, TB, JB) {
        let oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : XI;
        for (const GB of this.groups)
          if (IZ(GB, TB, JB)) return GB.cells.push(BB, IB, ZB), void GB.boxes.push(oB);
        this.groups.push({
          rgb: TB,
          look: JB,
          cells: [BB, IB, ZB],
          boxes: [oB]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class SI {
      constructor(BB) {
        this.api = BB, this.shown = []
      }
      show(BB) {
        const IB = [];
        for (const ZB of BB) {
          const BB = this.shown.findIndex((BB => {
            let {
              group: IB
            } = BB;
            return IZ(IB, ZB.rgb, ZB.look) && ZZ(IB, ZB)
          })); - 1 === BB ? IB.push(this.build(ZB)) : (IB.push(this.shown[BB]), this.shown.splice(BB, 1))
        }
        this.dispose(), this.shown = IB
      }
      dispose() {
        for (const {
            meshes: BB
          }
          of this.shown)
          for (const IB of BB) this.api.disposeGameMesh(IB);
        this.shown = []
      }
      build(BB) {
        const {
          rgb: IB,
          look: ZB,
          boxes: TB
        } = BB, JB = [IB[0] + (1 - IB[0]) * xI, IB[1] + (1 - IB[1]) * xI, IB[2] + (1 - IB[2]) * xI], oB = [this.buildMesh(BB.cells, IB, ZB.alpha, ((BB, IB, JB, oB) => {
          BZ(BB, IB, JB, TB[oB], ZB.size, !1)
        })), this.buildMesh(BB.cells, JB, ZB.alpha, ((BB, IB, JB, oB) => {
          BZ(BB, IB, JB, TB[oB], ZB.size, !0)
        }))];
        return ZB.crossed && oB.push(this.buildMesh(BB.cells, IB, .9, ((BB, IB, TB) => {
          (0, bI.i)(BB, IB, TB, ZB.size + .01, .12)
        }))), {
          group: BB,
          meshes: oB
        }
      }
      buildMesh(BB, IB, ZB, TB) {
        const JB = [BB[0], BB[1], BB[2]],
          oB = [],
          GB = [];
        for (let vB = 0; vB < BB.length; vB += 3) TB(oB, GB, [BB[vB] - JB[0] + .5, BB[vB + 1] - JB[1] + .5, BB[vB + 2] - JB[2] + .5], vB / 3);
        return this.api.createGameMesh({
          positions: oB,
          indices: GB
        }, {
          rgb: [IB[0], IB[1], IB[2]],
          alpha: ZB
        }, JB)
      }
    }

    function BZ(BB, IB, ZB, TB, JB, oB) {
      for (let GB = 0; GB < TB.length; GB += 6) {
        const vB = [0, 0, 0],
          kB = [0, 0, 0];
        for (let BB = 0; BB < 3; BB++) vB[BB] = ZB[BB] + ((TB[GB + BB] + TB[GB + BB + 3]) / 2 - .5) * JB, kB[BB] = (TB[GB + BB + 3] - TB[GB + BB]) * JB;
        (0, bI.d)(BB, IB, vB, kB, oB)
      }
    }

    function IZ(BB, IB, ZB) {
      return BB.rgb[0] === IB[0] && BB.rgb[1] === IB[1] && BB.rgb[2] === IB[2] && BB.look === ZB
    }

    function ZZ(BB, IB) {
      if (BB.cells.length !== IB.cells.length) return !1;
      for (let ZB = 0; ZB < BB.cells.length; ZB++)
        if (BB.cells[ZB] !== IB.cells[ZB]) return !1;
      return BB.boxes.every(((BB, ZB) => BB === IB.boxes[ZB]))
    }

    function TZ(BB, IB, ZB, TB, JB) {
      if (!BB.isBlockInLoadedChunk(IB, TB - 6, ZB) || !BB.isBlockInLoadedChunk(IB, TB + 6 + JB, ZB) || !BB.canModifyBlockAt(IB, TB, ZB)) return NaN;
      let oB = TB - 1;
      if (0 !== BB.getBlockId(IB, oB, ZB)) {
        for (; oB < TB + 6 && 0 !== BB.getBlockId(IB, oB + 1, ZB);) oB++;
        return oB
      }
      for (; oB > TB - 6;)
        if (oB--, 0 !== BB.getBlockId(IB, oB, ZB)) return oB;
      return NaN
    }

    function JZ(BB, IB, ZB, TB, JB) {
      let oB = 0;
      for (let GB = TB + 1; GB <= TB + JB; GB++) 0 !== BB.getBlockId(IB, GB, ZB) && oB++;
      return oB
    }

    function oZ(BB) {
      const IB = new Map;
      for (const GB of BB) {
        var ZB;
        if (Number.isNaN(GB)) return null;
        IB.set(GB, (null !== (ZB = IB.get(GB)) && void 0 !== ZB ? ZB : 0) + 1)
      }
      let TB = NaN,
        JB = 0;
      for (const [GB, vB] of IB)(vB > JB || vB === JB && GB < TB) && (TB = GB, JB = vB);
      let oB = 0;
      for (const GB of BB) oB += Math.abs(GB - TB);
      return oB
    }

    function GZ(BB, IB, ZB, TB) {
      const {
        eye: JB,
        forward: oB,
        tanHalfFovX: GB,
        tanHalfFovY: vB
      } = BB, [kB, cB] = function(BB) {
        let [IB, ZB, TB] = BB;
        const JB = Math.hypot(IB, TB),
          [oB, GB] = [TB / JB, -IB / JB];
        return [
          [oB, 0, GB],
          [ZB * GB, TB * oB - IB * GB, -ZB * oB]
        ]
      }(oB), [nB, hB] = [IB * GB, ZB * vB], zB = oB[0] + nB * kB[0] + hB * cB[0], FB = oB[1] + hB * cB[1], NB = oB[2] + nB * kB[2] + hB * cB[2], gB = (TB - JB[1]) / FB;
      return gB > 0 && gB < 1 / 0 ? [JB[0] + gB * zB, JB[2] + gB * NB] : null
    }
    const vZ = "plotsBlueprintPlacementChanged",
      kZ = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class cZ {
      constructor(BB, IB) {
        this.api = BB, this.localPlayerId = IB, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = BB => {
          var IB, ZB, TB, oB;
          const GB = null !== (IB = null === (ZB = this.placing) || void 0 === ZB ? void 0 : ZB.rotation) && void 0 !== IB ? IB : 0,
            {
              size: vB
            } = EB(BB, GB),
            kB = this.api.aU(this.localPlayerId),
            [cB, nB] = null !== (TB = null !== (oB = function(BB, IB, ZB, TB) {
              const [JB, oB, GB] = IB, [vB, kB, cB] = [Math.floor(ZB[0]), Math.floor(ZB[1]), Math.floor(ZB[2])], nB = 6 + Math.max(JB, GB) / 2, [hB, zB] = [Math.ceil(nB + JB / 2), Math.ceil(nB + GB / 2)], [FB, NB] = [vB - hB, cB - zB], [gB, qB] = [2 * hB + 1, 2 * zB + 1], yB = new Float64Array(gB * qB), UB = new Uint16Array(gB * qB);
              for (let sB = 0; sB < gB; sB++)
                for (let IB = 0; IB < qB; IB++) {
                  const ZB = TZ(BB, FB + sB, NB + IB, kB, oB);
                  yB[sB * qB + IB] = ZB, Number.isNaN(ZB) || (UB[sB * qB + IB] = JZ(BB, FB + sB, NB + IB, ZB, oB))
                }
              const WB = Math.hypot(TB[0], TB[2]),
                dB = [];
              let CB = null,
                QB = 1 / 0;
              for (let sB = 0; sB + JB <= gB; sB++)
                for (let BB = 0; BB + GB <= qB; BB++) {
                  const [IB, oB] = [FB + sB, NB + BB], [kB, hB] = [IB + JB / 2 - ZB[0], oB + GB / 2 - ZB[2]], zB = Math.hypot(kB, hB);
                  if (zB > nB || vB >= IB - 2 && vB < IB + JB + 2 && cB >= oB - 2 && cB < oB + GB + 2) continue;
                  dB.length = 0;
                  let gB = 0;
                  for (let ZB = 0; ZB < JB; ZB++)
                    for (let IB = 0; IB < GB; IB++) dB.push(yB[(sB + ZB) * qB + BB + IB]), gB += UB[(sB + ZB) * qB + BB + IB];
                  const wB = oZ(dB);
                  if (null === wB) continue;
                  const OB = zB + 3 * (wB + gB) + (1 - (0 === WB ? 1 : (kB * TB[0] + hB * TB[2]) / (zB * WB))) / 2 * 6;
                  OB < QB && (QB = OB, CB = [IB, oB])
                }
              return CB
            }(this.api, vB, kB, this.camera.forward)) && void 0 !== oB ? oB : this.cornerOnTarget(vB)) && void 0 !== TB ? TB : [Math.floor(kB[0]) + 2, Math.floor(kB[2])];
          this.placing = {
            id: BB,
            rotation: GB,
            corner: [cB, this.playerLevel(), nB],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null,
            moved: !1,
            stillSinceMs: performance.now()
          }, this.update(), this.api.sendCommand(`${JB} preview`)
        }, this.rotate = () => {
          const {
            id: BB,
            rotation: IB,
            corner: ZB
          } = this.placing, JB = TB[(TB.indexOf(IB) + 1) % TB.length], [oB, , GB] = EB(BB, IB).size, [vB, , kB] = EB(BB, JB).size;
          this.moveTo(ZB[0] + Math.floor(oB / 2) - Math.floor(vB / 2), ZB[2] + Math.floor(GB / 2) - Math.floor(kB / 2), JB)
        }, this.hoverAt = (BB, IB) => {
          this.placing.hover = [BB, IB], this.moveCentreTo(this.camera, BB, IB)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (BB, IB) => {
          const ZB = this.placing,
            {
              eye: TB,
              forward: JB,
              tanHalfFovX: oB,
              tanHalfFovY: GB
            } = this.camera,
            vB = {
              eye: [TB[0], TB[1], TB[2]],
              forward: [JB[0], JB[1], JB[2]],
              tanHalfFovX: oB,
              tanHalfFovY: GB
            },
            kB = ZB.corner[1],
            cB = GZ(vB, BB, IB, kB);
          ZB.hover = null, ZB.drag = cB && {
            view: vB,
            ground: cB,
            corner: [ZB.corner[0], ZB.corner[2]],
            level: kB
          }
        }, this.dragTo = (BB, IB) => {
          const ZB = this.placing.drag,
            TB = ZB && GZ(ZB.view, BB, IB, ZB.level);
          null !== ZB && null !== TB && this.moveTo(ZB.corner[0] + Math.round(TB[0] - ZB.ground[0]), ZB.corner[1] + Math.round(TB[1] - ZB.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const BB = this.view;
          BB.waiting || (BB.blocked ? this.Gq({
            ...BB,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const BB = this.placing,
            {
              id: IB,
              rotation: ZB,
              corner: TB
            } = BB;
          this.api.sendCommand(`${JB} place ${IB} ${TB.join(" ")} ${ZB}`), BB.sent = {
            atMs: performance.now(),
            corner: [...TB],
            rotation: ZB,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${JB} preview off`))
        }, this.chunkWatch = new tI(BB), this.meshes = new SI(BB)
      }
      getView() {
        return this.view
      }
      Iz() {
        const BB = this.placing;
        null !== BB && (null !== BB.sent && !BB.sent.timedOut && performance.now() - BB.sent.atMs > 3e3 ? (BB.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(BB) || this.chunkWatch.changed() || this.view.settled !== nZ(BB, this.view.blocked)) && this.update())
      }
      afterRender(BB) {
        ! function(BB, IB) {
          for (let ZB = 0; ZB < 3; ZB++) IB.eye[ZB] = BB.cameraPosition[ZB], IB.forward[ZB] = BB.cameraDirection[ZB];
          IB.tanHalfFovX = BB.tanHalfFovX, IB.tanHalfFovY = BB.tanHalfFovY
        }(BB, this.camera);
        const IB = this.placing;
        null !== IB && null !== IB.hover && this.moveCentreTo(this.camera, IB.hover[0], IB.hover[1])
      }
      sN(BB) {
        const IB = this.placing;
        if (null === IB || null === IB.sent || "active" !== BB[0]) return;
        const {
          sent: ZB
        } = IB, [, TB, JB, oB, GB, vB, kB] = BB;
        JB && TB === IB.id && kB === ZB.rotation && oB === ZB.corner[0] && GB === ZB.corner[1] && vB === ZB.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(BB) {
        let [IB, , ZB] = BB;
        const TB = this.api.getTargetedBlock();
        if (null === TB) return null;
        const [JB, , oB] = TB.position;
        return [JB - Math.floor(IB / 2), oB - Math.floor(ZB / 2)]
      }
      playerLevel() {
        var BB;
        const [IB, ZB, TB] = this.api.aU(this.localPlayerId);
        if (null !== (BB = this.api.getLocalPlayerMovement()) && void 0 !== BB && BB.onGround) return Math.ceil(ZB - .01);
        const [JB, oB, GB] = [Math.floor(IB), Math.floor(ZB), Math.floor(TB)];
        for (let vB = oB; vB >= oB - 2; vB--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(JB, vB, GB))) return vB + 1;
        return oB
      }
      followPlayerLevel(BB) {
        if (hZ(BB)) return !1;
        const IB = this.playerLevel();
        return IB !== BB.corner[1] && (BB.corner[1] = IB, !0)
      }
      moveCentreTo(BB, IB, ZB) {
        const TB = this.placing,
          JB = GZ(BB, IB, ZB, TB.corner[1]);
        if (null !== JB) {
          const [BB, , IB] = EB(TB.id, TB.rotation).size;
          this.moveTo(Math.round(JB[0] - BB / 2), Math.round(JB[1] - IB / 2))
        }
      }
      moveTo(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const TB = this.placing;
        if (hZ(TB)) return;
        const [JB, oB, GB] = TB.corner;
        if (this.centreOnPlot(JB, GB) && !this.centreOnPlot(BB, IB, ZB))
          if (this.centreOnPlot(BB, GB, ZB)) IB = GB;
          else {
            if (!this.centreOnPlot(JB, IB, ZB)) return;
            BB = JB
          } BB === JB && IB === GB && ZB === TB.rotation || (TB.rotation = ZB, TB.corner = [BB, oB, IB], TB.moved = !0, TB.stillSinceMs = performance.now(), this.update())
      }
      centreOnPlot(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: TB,
          corner: JB
        } = this.placing, [oB, , GB] = EB(TB, ZB).size;
        return this.api.canModifyBlockAt(BB + Math.floor(oB / 2), JB[1], IB + Math.floor(GB / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.Gq(null)
      }
      update() {
        const {
          id: BB,
          rotation: IB,
          corner: ZB,
          refusals: TB
        } = this.placing, JB = new VI, oB = [];
        let GB = !1,
          vB = 0;
        for (const {
            offset: hB,
            block: zB
          }
          of EB(BB, IB).cells) {
          const [BB, IB, TB] = [ZB[0] + hB[0], ZB[1] + hB[1], ZB[2] + hB[2]];
          oB.push(BB, IB, TB);
          const kB = !this.api.canModifyBlockAt(BB, IB, TB),
            cB = this.api.getBlockId(BB, IB, TB),
            nB = !jI(cB) && !MI(this.api.blockNameToBlockId(zB), cB);
          GB ||= kB, vB += nB ? 1 : 0, kB || nB ? JB.add(BB, IB, TB, KI, DI) : JB.add(BB, IB, TB, RI(zB), kZ, lI(zB))
        }
        this.chunkWatch.watch(oB), this.meshes.show(JB.toArray());
        const kB = this.view,
          cB = hZ(this.placing),
          nB = nZ(this.placing, GB);
        (null === kB || void 0 === kB ? void 0 : kB.id) === BB && kB.blocked === GB && kB.toClear === vB && kB.waiting === cB && kB.refusals === TB && kB.settled === nB || this.Gq({
          id: BB,
          blocked: GB,
          toClear: vB,
          waiting: cB,
          refusals: TB,
          settled: nB
        })
      }
      Gq(BB) {
        this.view = BB, QB.l.Gq(vZ, BB, !0)
      }
    }

    function nZ(BB, IB) {
      let {
        moved: ZB,
        stillSinceMs: TB
      } = BB;
      return !IB && performance.now() - TB >= (ZB ? 1500 : 6e3)
    }

    function hZ(BB) {
      let {
        sent: IB
      } = BB;
      return null !== IB && !IB.timedOut
    }
    var zZ = ZB(4728);
    class FZ {
      constructor(BB) {
        this.placement = BB, this.press = null
      }
      down(BB) {
        if (null !== this.press) return !1;
        const {
          id: IB,
          mouse: ZB,
          x: TB,
          y: JB,
          atMs: oB
        } = BB;
        return this.press = {
          id: IB,
          mouse: ZB,
          x: TB,
          y: JB,
          atMs: oB,
          moved: !1
        }, ZB || this.placement.beginDrag(BB.ndcX, BB.ndcY), !0
      }
      move(BB) {
        const IB = this.press;
        null !== IB && IB.id === BB.id && (IB.moved ||= Math.hypot(BB.x - IB.x, BB.y - IB.y) > 8), BB.mouse ? this.placement.hoverAt(BB.ndcX, BB.ndcY) : (null === IB || void 0 === IB ? void 0 : IB.id) === BB.id && this.placement.dragTo(BB.ndcX, BB.ndcY)
      }
      up(BB) {
        const IB = this.press;
        (null === IB || void 0 === IB ? void 0 : IB.id) === BB.id && (this.move(BB), this.end(), !IB.moved && (IB.mouse || BB.atMs - IB.atMs <= 250) && this.placement.tap())
      }
      cancel(BB) {
        var IB;
        (null === (IB = this.press) || void 0 === IB ? void 0 : IB.id) === BB && this.end()
      }
      leave(BB) {
        let {
          id: IB,
          mouse: ZB
        } = BB;
        ZB && this.placement.endHover(), this.cancel(IB)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }
    const NZ = "PlotsPlacementLayer";

    function gZ(BB) {
      let {
        placement: IB
      } = BB;
      return null === (0, kB.h)(vZ, IB.getView()) ? null : (0, PB.jsx)(qZ, {
        placement: IB
      })
    }

    function qZ(BB) {
      let {
        placement: IB
      } = BB;
      (0, zZ.e)(!0, !0, NZ);
      const ZB = (0, oB.useMemo)((() => new FZ(IB)), [IB]);
      return (0, PB.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: BB => {
          "mouse" === BB.pointerType && 0 !== BB.button || !ZB.down(yZ(BB)) || BB.currentTarget.setPointerCapture(BB.pointerId)
        },
        onPointerMove: BB => {
          ZB.move(yZ(BB))
        },
        onPointerUp: BB => {
          ZB.up(yZ(BB))
        },
        onPointerCancel: BB => {
          ZB.cancel(BB.pointerId)
        },
        onLostPointerCapture: BB => {
          ZB.cancel(BB.pointerId)
        },
        onPointerLeave: BB => {
          ZB.leave(yZ(BB))
        },
        "aria-hidden": !0
      })
    }

    function yZ(BB) {
      const {
        left: IB,
        top: ZB,
        width: TB,
        height: JB
      } = BB.currentTarget.getBoundingClientRect();
      return {
        id: BB.pointerId,
        mouse: "mouse" === BB.pointerType,
        x: BB.clientX,
        y: BB.clientY,
        ndcX: (BB.clientX - IB) / TB * 2 - 1,
        ndcY: 1 - (BB.clientY - ZB) / JB * 2,
        atMs: BB.timeStamp
      }
    }

    function UZ() {
      return (0, gI.l)().some((BB => BB !== gI.e && BB !== NZ))
    }
    const WZ = 2500;

    function dZ(BB) {
      let {
        hud: IB,
        guide: ZB,
        tracker: TB,
        placement: JB,
        children: GB
      } = BB;
      const {
        t: hB
      } = (0, nB.G)(), {
        isTouchScreen: zB
      } = (0, vB.o)(["isTouchScreen"]), FB = (0, kB.h)(II, IB.getGuide()), NB = (0, kB.h)(BI, IB.getPlot()), gB = (0, kB.h)(DB, TB.get()), qB = function(BB) {
        const {
          openInGameMenuName: IB,
          openEverythingMenuName: ZB,
          loadingOverlayVisible: TB
        } = (0, vB.o)(["openInGameMenuName", "openEverythingMenuName", "loadingOverlayVisible"]), JB = (0, qI.b)(), [GB, cB] = (0, oB.useState)(UZ);
        (0, oB.useEffect)((() => {
          const BB = () => {
            cB(UZ())
          };
          BB();
          const IB = (0, gI.k)(BB),
            ZB = (0, gI.j)(BB);
          return () => {
            IB(), ZB()
          }
        }), []);
        const nB = (0, kB.h)(vZ, BB.getView()),
          hB = "clientGame" === IB;
        return {
          hudHidden: JB || TB,
          journalOpen: hB,
          covered: GB || null !== ZB || null !== IB && !hB,
          placing: null === nB ? null : nB.settled ? "placeBuild" : "placeSpot"
        }
      }(JB), yB = function(BB, IB, ZB) {
        return "none" === BB[0] || ZB.hudHidden || ZB.journalOpen || ZB.covered ? null : null !== ZB.placing ? ZB.placing : null !== IB ? "build" : "choose" === BB[1] ? "openJournal" : null
      }(FB, null === gB ? null : gB.id, qB), UB = function() {
        const [BB, IB] = (0, oB.useState)(null), [ZB, TB] = (0, oB.useState)(!1);
        return (0, kB.d)(ZI, (() => {
          IB(performance.now())
        })), (0, oB.useEffect)((() => {
          if (null === BB) return;
          const IB = window.setTimeout((() => {
              TB(!0)
            }), WZ),
            ZB = window.setTimeout((() => {
              TB(!1)
            }), 7500);
          return () => {
            window.clearTimeout(IB), window.clearTimeout(ZB)
          }
        }), [BB]), ZB
      }() && !qB.hudHidden && !qB.covered && !qB.journalOpen && null === qB.placing, [WB, dB] = (0, oB.useState)(!1);
      (0, oB.useEffect)((() => {
        qB.journalOpen && dB(!0)
      }), [qB.journalOpen]);
      const [QB, sB] = (0, oB.useState)(null), [wB, OB] = (0, oB.useState)(null), [YB, iB] = (0, oB.useState)(null), pB = (0, oB.useMemo)((() => ({
        hint: yB,
        journalRef: sB,
        placementCardRef: OB,
        buildRef: iB
      })), [yB]), aB = "plot" === NB[0] && "own" === NB[5], HB = zB && !WB && aB ? {
        onSkip: ZB.skip
      } : null;
      return (0, PB.jsxs)(CB.Provider, {
        value: pB,
        children: [GB, "openJournal" === yB && null !== QB && (0, PB.jsx)(cI, {
          target: QB,
          placement: "left",
          spotlight: HB,
          children: zB ? hB("plotsGame:guideOpenJournal") : hB("plotsGame:guideOpenJournalKeys", {
            key: (0, cB.n)(RB)
          })
        }), "placeSpot" === yB && null !== wB && (0, PB.jsxs)(PB.Fragment, {
          children: [zB && (0, PB.jsx)(NI, {}), (0, PB.jsx)(cI, {
            target: wB,
            placement: "top",
            children: hB(zB ? "plotsGame:guidePlaceSpotTouch" : "plotsGame:guidePlaceSpotMouse")
          })]
        }), "placeBuild" === yB && null !== YB && null !== wB && (0, PB.jsx)(cI, {
          target: zB ? YB : wB,
          placement: "top",
          children: hB(zB ? "plotsGame:guidePlaceBuildTouch" : "plotsGame:guidePlaceBuildMouse")
        }), "build" === yB && null !== gB && (0, PB.jsx)(zI, {
          progress: gB,
          guide: ZB
        }), UB && null !== QB && (0, PB.jsx)(cI, {
          target: QB,
          placement: "left",
          children: hB("plotsGame:guideMoreBuilds")
        })]
      })
    }
    var CZ = ZB(38532),
      QZ = ZB(38539);
    class sZ {
      constructor(BB, IB, ZB) {
        this.api = BB, this.localPlayerId = IB, this.nextCell = ZB, this.hand = null, this.skip = () => {
          this.api.sendCommand("plotsguide skip")
        }, this.bindHand = BB => {
          this.hand = BB
        }
      }
      afterRender(BB) {
        const IB = this.hand;
        if (null === IB) return;
        const ZB = this.nextCell.get();
        if (null === ZB) return void(0, CZ.f)(IB, !0);
        const TB = (0, QZ.b)(IB, BB, this.api.getPositionView(this.localPlayerId), ZB, 1, 40);
        null !== TB && (0, CZ.d)(IB, Math.round(100 * TB.x) / 100, Math.round(100 * TB.y) / 100)
      }
    }
    var wZ = ZB(1516),
      OZ = ZB(4714),
      YZ = ZB(1170);
    const iZ = {
        farm_hut: ZB.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
        farm_house: ZB.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
        farm_barn: ZB.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
        rusticHome_tent: ZB.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
        rusticHome_cabin: ZB.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
        rusticHome_house: ZB.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
        market_stand: ZB.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
        market_stall: ZB.p + "static/media/market_stall.9a562807f9dff591618a.webp",
        market_shop: ZB.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
        castle_wall: ZB.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
        castle_gate: ZB.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
        castle_tower: ZB.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
      },
      pZ = ["plotsGame:guideEffortQuick", "plotsGame:guideEffortMedium", "plotsGame:guideEffortBigger"],
      aZ = ["market_stand", "rusticHome_tent", "farm_hut"].map((BB => ({
        id: BB,
        blocks: EB(BB, 0).cells.length
      }))).sort(((BB, IB) => BB.blocks - IB.blocks)).map(((BB, IB) => ({
        ...BB,
        effortKey: pZ[IB]
      })));

    function HZ(BB) {
      let {
        onBuild: IB
      } = BB;
      const {
        t: ZB
      } = (0, nB.G)();
      return (0, PB.jsx)("div", {
        className: "PlotsJournalBookPages PlotsGuideChooserCover",
        children: (0, PB.jsxs)("div", {
          className: "PlotsGuideChooser",
          children: [(0, PB.jsx)("h3", {
            className: "PlotsGuideChooserTitle",
            children: ZB("plotsGame:guidePickTitle")
          }), (0, PB.jsxs)("p", {
            className: "PlotsGuideChooserNote",
            children: [(0, PB.jsx)("img", {
              src: oI,
              alt: "",
              draggable: !1
            }), ZB("plotsGame:guidePickNote")]
          }), (0, PB.jsx)("div", {
            className: "PlotsGuideChooserStarters",
            children: aZ.map((BB => {
              let {
                id: TB,
                blocks: JB,
                effortKey: oB
              } = BB;
              return (0, PB.jsxs)("article", {
                className: "PlotsGuideStarter",
                children: [(0, PB.jsx)("button", {
                  type: "button",
                  className: "PlotsGuideStarterSketch",
                  tabIndex: -1,
                  "aria-hidden": !0,
                  "data-pad-ignore": !0,
                  onClick: () => {
                    IB(TB)
                  },
                  children: (0, PB.jsx)("img", {
                    src: iZ[TB],
                    alt: "",
                    draggable: !1
                  })
                }), (0, PB.jsxs)("div", {
                  className: "PlotsGuideStarterInfo",
                  children: [(0, PB.jsxs)("span", {
                    className: "PlotsGuideStarterText",
                    children: [(0, PB.jsx)("span", {
                      className: "PlotsGuideStarterName",
                      children: ZB(YB(TB).displayName.translationKey)
                    }), (0, PB.jsx)("span", {
                      className: "PlotsGuideStarterEffort",
                      children: ZB(oB)
                    }), (0, PB.jsx)("span", {
                      className: "PlotsGuideStarterBlocks",
                      children: ZB("plotsGame:journalBlocks", {
                        blocks: String(JB)
                      })
                    })]
                  }), (0, PB.jsx)(wZ.p, {
                    onClick: () => {
                      IB(TB)
                    },
                    children: ZB("plotsGame:placementBuild")
                  })]
                })]
              }, TB)
            }))
          })]
        })
      })
    }

    function MZ(BB) {
      let {
        direction: IB,
        disabled: ZB,
        onTurn: TB
      } = BB;
      const {
        t: JB
      } = (0, nB.G)();
      return (0, PB.jsx)("div", {
        className: zB()("PlotsJournalArrow", IB),
        children: (0, PB.jsx)(wZ.g, {
          disabled: ZB,
          ariaLabel: JB("Forward" === IB ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            TB(IB)
          },
          children: (0, PB.jsx)(gB.d, {
            name: "angle-up"
          })
        })
      })
    }
    const jZ = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function PZ(BB) {
      let {
        page: IB,
        building: ZB,
        onBuild: TB,
        onPutAway: JB
      } = BB;
      const {
        t: oB
      } = (0, nB.G)(), {
        displayName: GB,
        tier: vB
      } = YB(IB.id), kB = EB(IB.id, 0).cells.length, cB = "locked" === IB.state, hB = ZB ? wZ.g : wZ.p;
      return (0, PB.jsxs)("article", {
        className: zB()("PlotsJournalPage", {
          Locked: cB
        }),
        children: [(0, PB.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: oB(GB.translationKey)
        }), (0, PB.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [oB(jZ[vB]), " \xb7 ", oB("plotsGame:journalBlocks", {
            blocks: String(kB)
          })]
        }), (0, PB.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [OB.map((BB => (0, PB.jsx)("img", {
            className: zB()({
              Shown: BB === IB.id
            }),
            src: iZ[BB],
            alt: "",
            draggable: !1
          }, BB))), "completed" === IB.state && (0, PB.jsx)("span", {
            className: "PlotsJournalStamp",
            children: oB("plotsGame:journalBuilt")
          }), cB && (0, PB.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, PB.jsx)(gB.d, {
              name: "lock"
            })
          })]
        }), null !== IB.note && (0, PB.jsx)("p", {
          className: "PlotsJournalNote",
          children: oB(IB.note)
        }), (0, PB.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === IB.state && (0, PB.jsx)("p", {
            className: "PlotsJournalHint",
            children: oB("plotsGame:journalLocked", {
              name: oB(YB(IB.unlockedBy).displayName.translationKey)
            })
          }), IB.active && (0, PB.jsxs)(PB.Fragment, {
            children: [(0, PB.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: oB("plotsGame:journalBuilding")
            }), (0, PB.jsx)(wZ.k, {
              onClick: JB,
              children: oB("plotsGame:journalPutAway")
            })]
          }), !cB && !IB.active && (0, PB.jsx)(hB, {
            onClick: () => {
              TB(IB.id)
            },
            children: oB("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function RZ(BB) {
      let {
        className: IB,
        page: ZB,
        hidden: TB,
        building: JB,
        journal: oB
      } = BB;
      return (0, PB.jsxs)("div", {
        ref: BB => {
          null !== BB && (BB.inert = TB)
        },
        className: zB()("PlotsJournalSide", IB),
        children: [void 0 !== ZB && (0, PB.jsx)(PZ, {
          page: ZB,
          building: JB,
          onBuild: oB.build,
          onPutAway: oB.putAway
        }), void 0 === ZB && (0, PB.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var rZ = ZB(1956);

    function mZ(BB) {
      return Math.cos((0, rZ.l)(BB))
    }

    function XZ(BB) {
      return (0, rZ.K)(Math.acos(QI.e.clamp(BB, -1, 1)))
    }

    function LZ(BB, IB, ZB, TB, JB) {
      const oB = Math.abs(IB - BB),
        GB = (0, rZ.K)(JB / (ZB * Math.abs(Math.sin((0, rZ.l)(BB))))),
        vB = 450 * Math.min(1, oB / TB),
        kB = GB > 0 ? 3 * oB / GB : 1 / 0;
      return Math.round(Math.max(120, Math.min(vB, kB)))
    }
    class eZ {
      constructor() {
        this.samples = []
      }
      add(BB, IB) {
        for (this.samples.push({
            x: BB,
            at: IB
          }); IB - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const BB = this.samples[0],
          IB = this.samples[this.samples.length - 1];
        return IB.at > BB.at ? (IB.x - BB.x) / (IB.at - BB.at) : 0
      }
    }

    function uZ(BB) {
      return XZ(new DOMMatrixReadOnly(getComputedStyle(BB).transform).m11)
    }

    function fZ(BB, IB) {
      BB.style.transform = `rotateY(${-IB}deg)`, BB.classList.add("Turning")
    }

    function lZ(BB, IB, ZB) {
      const [TB, JB] = (0, oB.useState)(ZB), GB = (0, oB.useRef)(null), vB = (0, oB.useRef)(null), kB = (0, oB.useRef)({
        Forward: null,
        Back: null
      }), cB = IB ? 2 : 1, nB = IB ? 180 : 90, hB = TB - TB % cB, zB = hB > 0, FB = hB + cB < BB, NB = (0, oB.useCallback)((() => {
        const BB = vB.current;
        return null === BB ? hB : (vB.current = null, BB.animation.cancel(), (IB = kB.current[BB.direction]).style.transform = "", IB.classList.remove("Turning"), null === BB.next ? hB : (JB(BB.next), BB.next));
        var IB
      }), [hB]), gB = (0, oB.useCallback)(((BB, IB, ZB, TB) => {
        const JB = kB.current[BB],
          oB = uZ(JB),
          GB = IB === ("Forward" === BB) ? nB : 0;
        fZ(JB, GB);
        const hB = JB.animate([{
          transform: `rotateY(${-oB}deg)`
        }, {
          transform: `rotateY(${-GB}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : LZ(oB, GB, JB.offsetWidth, nB, GB > oB ? -ZB : ZB),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        vB.current = {
          direction: BB,
          animation: hB,
          next: IB ? TB + ("Forward" === BB ? cB : -cB) : null
        }, hB.onfinish = () => {
          var BB;
          (null === (BB = vB.current) || void 0 === BB ? void 0 : BB.animation) === hB && NB()
        }
      }), [cB, nB, NB]), qB = (0, oB.useCallback)((IB => {
        if (null !== GB.current) return;
        const ZB = NB();
        ("Forward" === IB ? ZB + cB < BB : ZB > 0) && gB(IB, !0, 0, ZB)
      }), [NB, gB, cB, BB]);
      (0, oB.useEffect)((() => () => {
        var BB;
        null === (BB = vB.current) || void 0 === BB || BB.animation.cancel()
      }), []), (0, oB.useEffect)((() => {
        const BB = BB => {
          var IB;
          BB.pointerId !== (null === (IB = GB.current) || void 0 === IB ? void 0 : IB.pointerId) || GB.current.following || (GB.current = null)
        };
        return window.addEventListener("pointerup", BB), () => {
          window.removeEventListener("pointerup", BB)
        }
      }), []);
      const yB = (BB, IB, ZB) => {
          const TB = function(BB, IB, ZB, TB) {
            return (BB < 0 ? ZB : TB) ? QI.e.clampAbs(BB, IB) : Math.sign(BB) * IB * (1 - 1 / (.55 * Math.abs(BB) / IB + 1))
          }(BB.base + ZB, cB * BB.width, FB, zB);
          return "Forward" === IB ? Math.min(TB, 0) : Math.max(TB, 0)
        },
        UB = (BB, IB) => {
          const ZB = GB.current;
          if (GB.current = null, null === ZB.direction) return;
          ZB.speed.add(BB, IB);
          const TB = ZB.speed.get(),
            JB = yB(ZB, ZB.direction, BB - ZB.x);
          gB(ZB.direction, null !== function(BB, IB, ZB, TB, JB) {
            if (Math.abs(IB) >= .3 ? Math.sign(IB) !== Math.sign(BB) : Math.abs(BB) < .5 * ZB) return null;
            const oB = BB < 0 ? "Forward" : "Back";
            return ("Forward" === oB ? TB : JB) ? oB : null
          }(JB, TB, cB * ZB.width, FB, zB), TB, hB)
        },
        WB = {
          onPointerDown: BB => {
            var IB;
            if (!BB.isPrimary || 0 !== BB.button || null !== vB.current && null !== BB.target.closest("button")) return;
            const ZB = new eZ;
            ZB.add(BB.clientX, BB.timeStamp);
            const TB = kB.current.Forward.offsetWidth,
              JB = vB.current;
            vB.current = null;
            let oB = 0;
            if (null !== JB) {
              const IB = kB.current[JB.direction],
                ZB = uZ(IB);
              JB.animation.cancel(), fZ(IB, ZB), oB = function(BB, IB, ZB, TB) {
                return (BB < 0 ? ZB : TB) ? BB : Math.sign(BB) * IB * (1 / (1 - Math.min(Math.abs(BB) / IB, .99)) - 1) / .55
              }(function(BB, IB, ZB, TB) {
                return ZB * (mZ(IB) - mZ("Forward" === BB ? 0 : TB))
              }(JB.direction, ZB, TB, nB), cB * TB, FB, zB), BB.currentTarget.setPointerCapture(BB.pointerId)
            }
            GB.current = {
              pointerId: BB.pointerId,
              x: BB.clientX,
              y: BB.clientY,
              base: oB,
              width: TB,
              following: null !== JB,
              direction: null !== (IB = null === JB || void 0 === JB ? void 0 : JB.direction) && void 0 !== IB ? IB : null,
              speed: ZB
            }
          },
          onPointerMove: BB => {
            const IB = GB.current;
            if (null === IB || BB.pointerId !== IB.pointerId) return;
            if (0 === BB.buttons) return void UB(BB.clientX, BB.timeStamp);
            const ZB = BB.clientX - IB.x;
            !IB.following && function(BB, IB) {
              return Math.abs(BB) > 8 && Math.abs(BB) > Math.abs(IB)
            }(ZB, BB.clientY - IB.y) && (IB.following = !0, IB.direction = ZB < 0 ? "Forward" : "Back", BB.currentTarget.setPointerCapture(BB.pointerId)), null !== IB.direction && (IB.speed.add(BB.clientX, BB.timeStamp), fZ(kB.current[IB.direction], function(BB, IB, ZB, TB) {
              const JB = ZB * mZ("Forward" === BB ? 0 : TB) + IB;
              return QI.e.clamp(XZ(JB / ZB), 0, TB)
            }(IB.direction, yB(IB, IB.direction, ZB), IB.width, nB)))
          },
          onPointerUp: BB => {
            var IB;
            BB.pointerId === (null === (IB = GB.current) || void 0 === IB ? void 0 : IB.pointerId) && UB(BB.clientX, BB.timeStamp)
          },
          onPointerCancel: BB => {
            const IB = GB.current;
            BB.pointerId === (null === IB || void 0 === IB ? void 0 : IB.pointerId) && (GB.current = null, null !== IB.direction && gB(IB.direction, !1, 0, hB))
          }
        };
      return {
        first: hB,
        step: cB,
        canGoBack: zB,
        canGoForward: FB,
        turnPage: qB,
        leaves: kB,
        pagesHandlers: WB
      }
    }

    function AZ(BB, IB) {
      return BB > IB && BB >= 600
    }

    function tZ(BB) {
      let {
        journal: IB,
        hud: ZB,
        guide: TB
      } = BB;
      const {
        t: JB
      } = (0, nB.G)(), vB = (0, kB.h)(MB, IB.getPages()), cB = (0, kB.h)(II, ZB.getGuide()), hB = vB.find((BB => BB.active)), FB = (NB = cB, gB = void 0 === hB ? null : hB.id, "active" === NB[0] && null === gB);
      var NB, gB;
      const qB = (0, YZ.m)(AZ),
        {
          first: yB,
          step: dB,
          canGoBack: CB,
          canGoForward: QB,
          turnPage: sB,
          leaves: wB,
          pagesHandlers: OB
        } = lZ(vB.length, qB, (() => function(BB) {
          const IB = BB.findIndex((BB => BB.active));
          return -1 !== IB ? IB : Math.max(0, BB.findIndex((BB => "open" === BB.state)))
        }(vB)));
      (0, oB.useEffect)((() => {
        IB.onOpened()
      }), [IB]), (0, UB.e)((BB => !FB && ("ArrowLeft" === BB.code || "ArrowRight" === BB.code) && !(0, WB.isTypingInInput)()), (BB => {
        BB.stopPropagation(), sB("ArrowLeft" === BB.code ? "Back" : "Forward")
      }));
      const YB = void 0 !== hB,
        iB = (BB, ZB, TB) => (0, PB.jsx)(RZ, {
          className: BB,
          page: ZB >= 0 && ZB < vB.length ? vB[ZB] : void 0,
          hidden: TB,
          building: YB,
          journal: IB
        });
      return (0, PB.jsx)(OZ.c, {
        close: GB.i,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, PB.jsxs)("section", {
          className: zB()("PlotsJournal", {
            Spread: qB
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": JB("plotsGame:journalTitle"),
          children: [(0, PB.jsx)(wZ.l, {
            className: "PlotsJournalClose",
            onClick: GB.i
          }), "active" === cB[0] && (0, PB.jsx)(kI, {
            className: "PlotsJournalGuideSkip",
            onSkip: TB.skip
          }), FB && (0, PB.jsx)(HZ, {
            onBuild: IB.build
          }), !FB && (0, PB.jsx)(MZ, {
            direction: "Back",
            disabled: !CB,
            onTurn: sB
          }), (0, PB.jsx)("div", {
            hidden: FB,
            className: "PlotsJournalBookPages",
            ...OB,
            children: (0, PB.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [qB && iB("Left", yB - 2, !0), iB("Right", yB + 2 * dB - 1, !0), (0, PB.jsxs)("div", {
                ref: BB => {
                  wB.current.Back = BB
                },
                className: "PlotsJournalLeaf Back",
                children: [iB("Recto", yB - 1, !0), qB && iB("Verso", yB, !1)]
              }), (0, PB.jsxs)("div", {
                ref: BB => {
                  wB.current.Forward = BB
                },
                className: "PlotsJournalLeaf Forward",
                children: [iB("Recto", yB + dB - 1, !1), qB && iB("Verso", yB + dB, !0)]
              })]
            })
          }), !FB && (0, PB.jsx)(MZ, {
            direction: "Forward",
            disabled: !QB,
            onTurn: sB
          })]
        })
      })
    }

    function bZ(BB, IB, ZB, TB, JB) {
      const oB = Math.hypot(...IB.dir);
      if (!Number.isFinite(oB) || 0 === oB) return -1;
      const {
        from: GB,
        reach: vB,
        solid: kB
      } = IB, cB = [IB.dir[0] / oB, IB.dir[1] / oB, IB.dir[2] / oB], nB = null === kB ? vB : Math.min(vB, function(BB, IB, ZB) {
        const TB = xZ(BB, IB, ZB);
        if (TB !== 1 / 0) return TB;
        return (ZB[0] + .5 - BB[0]) * IB[0] + (ZB[1] + .5 - BB[1]) * IB[1] + (ZB[2] + .5 - BB[2]) * IB[2]
      }(GB, cB, kB) + .75);
      let hB = -1,
        zB = 1 / 0,
        FB = 1 / 0;
      for (let NB = 0; NB < BB.length; NB += 4) {
        const IB = [BB[NB], BB[NB + 1], BB[NB + 2]],
          oB = JB(NB) ? vB : nB;
        let kB = -1,
          gB = xZ(GB, cB, IB);
        if (gB > oB) {
          const BB = [IB[0] + .5 - GB[0], IB[1] + .5 - GB[1], IB[2] + .5 - GB[2]];
          if (gB = BB[0] * cB[0] + BB[1] * cB[1] + BB[2] * cB[2], gB <= 0 || gB > oB) continue;
          if (kB = Math.hypot(BB[0] - gB * cB[0], BB[1] - gB * cB[1], BB[2] - gB * cB[2]), kB > .7 || !TB(NB)) continue
        }(kB < zB || kB === zB && gB < FB) && ZB(NB) && (hB = NB, zB = kB, FB = gB)
      }
      return hB
    }

    function xZ(BB, IB, ZB) {
      let TB = 0,
        JB = 1 / 0;
      for (let oB = 0; oB < 3; oB++) {
        const GB = ZB[oB] - BB[oB];
        if (0 === IB[oB]) {
          if (GB > 0 || GB + 1 < 0) return 1 / 0;
          continue
        }
        const vB = GB / IB[oB],
          kB = (GB + 1) / IB[oB];
        TB = Math.max(TB, Math.min(vB, kB)), JB = Math.min(JB, Math.max(vB, kB))
      }
      return TB <= JB ? TB : 1 / 0
    }
    var EZ = ZB(36926),
      DZ = ZB(38123);
    const KZ = [1, 1, 1];
    class VZ {
      constructor(BB) {
        this.api = BB, this.meshes = null, this.shown = null
      }
      show(BB) {
        if (!(0, EZ.h)(BB, this.shown))
          if (this.shown = null === BB ? null : [BB[0], BB[1], BB[2]], null !== this.meshes)
            for (const IB of this.meshes) this.api.setGameMesh(IB, null === BB ? {
              visible: !1
            } : {
              anchor: BB,
              visible: !0
            });
          else if (null !== BB) {
          const IB = [DZ.c, DZ.c, DZ.c, 0, 0, 0];
          this.meshes = [this.build([IB], DZ.e, BB), this.build((0, DZ.b)(), DZ.k, BB)]
        }
      }
      dispose() {
        for (const IB of null !== (BB = this.meshes) && void 0 !== BB ? BB : []) {
          var BB;
          this.api.disposeGameMesh(IB)
        }
        this.meshes = null, this.shown = null
      }
      build(BB, IB, ZB) {
        const TB = [],
          JB = [];
        for (const [oB, GB, vB, kB, cB, nB] of BB)(0, bI.f)(TB, JB, [kB + .5, cB + .5, nB + .5], [oB, GB, vB]);
        return this.api.createGameMesh({
          positions: TB,
          indices: JB
        }, {
          rgb: KZ,
          alpha: IB,
          onTop: !0
        }, ZB)
      }
    }

    function SZ(BB, IB) {
      const ZB = AI.f.uq / 2;
      return BB[0] < IB[0] + ZB && BB[0] + 1 > IB[0] - ZB && BB[1] < IB[1] + AI.f.fq && BB[1] + 1 > IB[1] && BB[2] < IB[2] + ZB && BB[2] + 1 > IB[2] - ZB
    }

    function BT(BB, IB) {
      return BB.getClientOption(IB, "blockReach") + 1
    }
    class IT {
      constructor(BB, IB, ZB) {
        this.api = BB, this.localPlayerId = IB, this.foreseen = ZB, this.cells = [], this.playerCells = [], this.next = null
      }
      get() {
        return this.next
      }
      setCells(BB) {
        this.cells = BB
      }
      playerMoved() {
        return ZT(this.api.getPositionView(this.localPlayerId)).some(((BB, IB) => BB !== this.playerCells[IB]))
      }
      TF(BB) {
        const IB = this.api.getPositionView(this.localPlayerId);
        return this.playerCells.splice(0, 1 / 0, ...ZT(IB)), this.next = this.pickFrom(null === BB ? [IB[0], IB[1] + 1, IB[2]] : (0, EZ.e)(BB), (() => !1)), this.next
      }
      pickFrom(BB, IB) {
        const ZB = this.api.getPositionView(this.localPlayerId),
          TB = [ZB[0], ZB[1] + AI.f.fq * AI.f.playerEyeToHeightRatio, ZB[2]],
          JB = BT(this.api, this.localPlayerId),
          {
            cells: oB
          } = this,
          GB = BB => [oB[BB], oB[BB + 1], oB[BB + 2]],
          vB = function(BB, IB, ZB, TB, JB, oB) {
            let GB = -1,
              vB = -1,
              kB = 1 / 0;
            for (let cB = 0; cB < BB.length; cB += IB) {
              const IB = (oB(cB) ? 2 : 0) + (TB(cB) ? 1 : 0);
              if (IB < vB || JB(cB)) continue;
              const nB = (BB[cB] + .5 - ZB[0]) ** 2 + (BB[cB + 1] + .5 - ZB[1]) ** 2 + (BB[cB + 2] + .5 - ZB[2]) ** 2;
              (IB > vB || nB < kB) && (GB = cB, vB = IB, kB = nB)
            }
            return GB
          }(oB, 4, BB, (BB => 1 === oB[BB + 3]), (BB => {
            const TB = GB(BB);
            return SZ(TB, ZB) || this.foreseen.has(TB.join()) || IB(TB)
          }), (BB => function(BB, IB, ZB) {
            return (IB[0] + .5 - BB[0]) ** 2 + (IB[1] + .5 - BB[1]) ** 2 + (IB[2] + .5 - BB[2]) ** 2 <= ZB ** 2
          }(TB, GB(BB), JB)));
        return -1 === vB ? null : GB(vB)
      }
    }

    function ZT(BB) {
      let [IB, ZB, TB] = BB;
      const JB = AI.f.uq / 2;
      return [Math.floor(IB), Math.floor(ZB), Math.floor(TB), Math.floor(IB - JB), Math.floor(IB + JB), Math.floor(ZB + AI.f.fq), Math.floor(TB - JB), Math.floor(TB + JB)]
    }
    class TT {
      constructor(BB, IB, ZB) {
        this.api = BB, this.localPlayerId = IB, this.pickNext = ZB, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(BB) {
        const [IB, , ZB] = BB.cameraDirection, TB = Math.hypot(IB, ZB);
        TB > .001 && (this.heading = [IB / TB, ZB / TB])
      }
      tapped(BB, IB, ZB) {
        const TB = BT(this.api, this.localPlayerId),
          {
            origin: JB,
            direction: oB
          } = this.api.getActionRay(),
          GB = [...JB],
          vB = [
            [GB, [GB[0] + oB[0] * TB, GB[1] + oB[1] * TB, GB[2] + oB[2] * TB]]
          ];
        null !== BB && vB.push([GB, (0, EZ.e)(BB)]), this.tap = {
          lines: vB,
          next: IB,
          ms: ZB
        }
      }
      filled(BB, IB) {
        this.tap = null, this.turnFrom(BB, IB), this.retry(IB)
      }
      arrived(BB, IB) {
        const {
          tap: ZB
        } = this;
        if (null === ZB || IB - ZB.ms > 1500) return null;
        const TB = (0, EZ.e)(BB);
        return (0, EZ.h)(ZB.next, BB) || ZB.lines.some((BB => {
          let [IB, ZB] = BB;
          return function(BB, IB, ZB) {
            const TB = [ZB[0] - IB[0], ZB[1] - IB[1], ZB[2] - IB[2]],
              JB = [BB[0] - IB[0], BB[1] - IB[1], BB[2] - IB[2]],
              oB = TB[0] ** 2 + TB[1] ** 2 + TB[2] ** 2,
              GB = 0 === oB ? 0 : Math.min(1, Math.max(0, (JB[0] * TB[0] + JB[1] * TB[1] + JB[2] * TB[2]) / oB));
            return Math.hypot(JB[0] - TB[0] * GB, JB[1] - TB[1] * GB, JB[2] - TB[2] * GB)
          }(TB, IB, ZB) <= .9
        })) ? (this.tap = null, this.turnFrom(BB, IB), ZB.ms) : null
      }
      turnFrom(BB, IB) {
        this.pending = {
          from: BB,
          ms: IB,
          turnMs: Math.max(50, Math.min(250, IB - this.lastFillMs))
        }, this.lastFillMs = IB
      }
      retry(BB) {
        const {
          pending: IB
        } = this;
        if (null === IB) return;
        if (BB - IB.ms > 1500) return void(this.pending = null);
        const ZB = this.pickNext((0, EZ.e)(IB.from), (BB => (0, EZ.h)(BB, IB.from)));
        if (null === ZB) return;
        this.pending = null;
        const {
          turning: TB
        } = this;
        if (null !== TB && BB < TB.endMs && (0, EZ.h)(TB.to, ZB)) return;
        const JB = this.api.getActionRay().origin,
          oB = [ZB[0] + .5 - JB[0], ZB[1] + .5 - JB[1], ZB[2] + .5 - JB[2]],
          GB = Math.hypot(oB[0], oB[2]);
        if (GB < .3) {
          const BB = Math.max(GB, .001);
          oB[0] = this.heading[0] * BB, oB[2] = this.heading[1] * BB
        }
        this.api.turnCamera(oB, IB.turnMs), this.turning = {
          to: ZB,
          endMs: BB + IB.turnMs
        }
      }
    }
    class JT {
      constructor(BB, IB, ZB, TB) {
        this.api = BB, this.localPlayerId = IB, this.juice = ZB, this.tracker = TB, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.lastFilled = null, this.lastSeenFilled = null, this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = void 0, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new tI(BB), this.meshes = new SI(BB), this.outline = new VZ(BB), this.nextCell = new IT(BB, IB, this.foreseen), this.turn = new TT(BB, IB, ((BB, IB) => this.nextCell.pickFrom(BB, IB)))
      }
      sN(BB) {
        const IB = "active" === BB[0] ? `${BB[1]}|${BB[3]}|${BB[4]}|${BB[5]}|${BB[6]}` : "";
        if ("active" !== BB[0]) "built" === BB[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , ZB, TB, JB, oB] = BB;
          IB !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = ZB) : ZB === this.layerY ? this.burstUnlisted(TB) : ZB > this.layerY && this.finishLayer(ZB), this.layerY = ZB, this.layerCells.has(ZB) || this.layerCells.set(ZB, TB.filter(oT)), this.ghostCells = TB, this.palette = JB, this.occupiedCells = oB
        }
        IB !== this.blueprint && (this.tracker.show("active" === BB[0] && BB[2] ? {
          id: BB[1],
          y: BB[4]
        } : null), this.blueprint = IB, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((BB => this.api.blockNameToBlockId(BB))), this.chunkWatch.watch([...this.ghostCells.filter(oT), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(BB) {
        this.burstUnlisted([]), BB > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = BB)
      }
      Iz() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const BB = performance.now();
        let IB = !1;
        for (const [TB, JB] of this.foreseen) {
          var ZB;
          if (BB - JB > 1e3) this.foreseen.delete(TB), IB = !0, (null === (ZB = this.lastFilled) || void 0 === ZB ? void 0 : ZB.join()) === TB && (this.lastFilled = this.lastSeenFilled)
        }(IB || this.nextCell.playerMoved()) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(BB) {
        const IB = new Set;
        for (let JB = 0; JB < BB.length; JB += 4) IB.add(`${BB[JB]},${BB[JB+1]},${BB[JB+2]}`);
        const ZB = [],
          {
            ghostCells: TB
          } = this;
        for (let JB = 0; JB < TB.length; JB += 4) {
          const BB = `${TB[JB]},${TB[JB+1]},${TB[JB+2]}`;
          !IB.has(BB) && this.open.delete(BB) && ZB.push(this.filledCell(JB))
        }
        this.burst(ZB)
      }
      refresh() {
        const {
          ghostCells: BB,
          palette: IB,
          occupiedCells: ZB
        } = this, TB = new VI, JB = new Set, oB = [], GB = [];
        let vB = 0;
        for (let kB = 0; kB < BB.length; kB += 4) {
          const [ZB, cB, nB, hB] = [BB[kB], BB[kB + 1], BB[kB + 2], BB[kB + 3]], zB = this.api.getBlockId(ZB, cB, nB), FB = `${ZB},${cB},${nB}`, NB = MI(this.blockIds[hB], zB);
          !NB && jI(zB) ? TB.add(ZB, cB, nB, RI(IB[hB]), EI, lI(IB[hB])) : NB ? this.open.has(FB) && oB.push(this.filledCell(kB)) : TB.add(ZB, cB, nB, KI, DI), NB || vB++, !NB && this.api.isBlockInLoadedChunk(ZB, cB, nB) && (JB.add(FB), GB.push(ZB, cB, nB, jI(zB) ? 0 : 1))
        }
        this.open = JB, this.nextCell.setCells(GB), this.tracker.update(this.layerY, this.topLayerY, vB);
        for (let kB = 0; kB < ZB.length; kB += 3) {
          const [BB, IB, JB] = [ZB[kB], ZB[kB + 1], ZB[kB + 2]];
          jI(this.api.getBlockId(BB, IB, JB)) || TB.add(BB, IB, JB, KI, DI)
        }
        this.meshes.show(TB.toArray()), this.burst(oB), this.showNext(), this.turn.retry(performance.now())
      }
      burst(BB) {
        const IB = performance.now(),
          ZB = [];
        for (const [JB, oB, GB] of BB) {
          const BB = [JB, oB, GB];
          this.lastSeenFilled = BB, this.foreseen.delete(BB.join()) || ZB.push(BB)
        }
        const TB = this.isHolding(IB);
        for (const JB of ZB) {
          if (this.lastFilled = JB, TB && this.pressFilled) {
            this.turn.filled(JB, IB);
            continue
          }
          const BB = this.turn.arrived(JB, IB);
          if (null !== BB) {
            this.pressFilled = TB;
            for (const [IB, ZB] of this.foreseen) ZB <= BB && this.foreseen.delete(IB)
          }
        }
        this.juice.filled(BB)
      }
      showNext() {
        var BB;
        this.outline.show(null !== (BB = this.aimed) && void 0 !== BB ? BB : this.nextCell.TF(this.lastFilled))
      }
      afterRender(BB) {
        var IB;
        this.turn.look(BB);
        const ZB = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === ZB ? null : ZB.position), this.outline.show(null !== (IB = this.aimed) && void 0 !== IB ? IB : this.nextCell.get())
      }
      isHolding(BB) {
        return null !== this.altMs && BB - this.altMs <= 500
      }
      attemptAltAction(BB) {
        const IB = performance.now();
        if (this.isHolding(IB) || (this.pressFilled = !1), this.altMs = IB, this.pressFilled) return "preventPlacement";
        const ZB = this.findAimed(BB);
        if (null !== ZB) return this.foreseen.set(ZB.join(), IB), this.lastFilled = ZB, this.aimed = null, this.showNext(), this.turn.filled(ZB, IB), this.pressFilled = !0, "preventPlacement";
        {
          const ZB = this.nextCell.get();
          null !== ZB && this.turn.tapped(BB, ZB, IB)
        }
      }
      holdPressOnEntity() {
        const BB = performance.now();
        this.pressFilled && this.isHolding(BB) && (this.altMs = BB)
      }
      findAimed(BB) {
        return function(BB, IB, ZB, TB, JB, oB, GB) {
          const vB = BB.FZB(IB),
            kB = null === vB || null === BB.blockNameToBlockId(vB.name, !0) ? null : vB.name,
            cB = BB.getPositionView(IB),
            {
              origin: nB,
              direction: hB
            } = BB.getActionRay(),
            zB = bZ(TB, {
              from: nB,
              dir: hB,
              reach: BT(BB, IB),
              solid: ZB
            }, (IB => {
              const ZB = [TB[IB], TB[IB + 1], TB[IB + 2]];
              return !MI(JB[TB[IB + 3]], BB.getBlockId(...ZB)) && !GB.has(ZB.join()) && BB.isBlockInLoadedChunk(...ZB) && !SZ(ZB, cB)
            }), (BB => null === kB || kB === PI(JB[TB[BB + 3]])), (BB => null !== oB && TB[BB] === oB[0] && TB[BB + 1] === oB[1] && TB[BB + 2] === oB[2]));
          return -1 === zB ? null : [TB[zB], TB[zB + 1], TB[zB + 2]]
        }(this.api, this.localPlayerId, BB, this.ghostCells, this.blockIds, this.nextCell.get(), this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(BB) {
        const {
          ghostCells: IB
        } = this, [ZB, TB, JB] = RI(this.palette[IB[BB + 3]]);
        return [IB[BB], IB[BB + 1], IB[BB + 2], ZB, TB, JB]
      }
    }

    function oT(BB, IB) {
      return IB % 4 !== 3
    }
    class GT {
      constructor(BB) {
        this.api = BB, this.sent = !1
      }
      Iz() {
        this.sent || vB.d.get("loadingOverlayVisible") || (this.sent = !0, this.api.sendCommand("plotsentered"))
      }
    }
    var vT = ZB(4416),
      kT = ZB(39216);

    function cT(BB, IB, ZB) {
      const TB = [255 * BB, 255 * IB, 255 * ZB],
        [JB, oB, GB] = TB.map((BB => BB + .4 * (255 - BB)));
      return {
        texture: "square_particle",
        ah: 48,
        minLifeTime: .3 / kT.b,
        maxLifeTime: .55 / kT.b,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * kT.b * kT.b, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...TB, 1],
          maxColor: [JB, oB, GB, 1]
        }, {
          timeFraction: 1,
          minColor: [...TB, 0],
          maxColor: [JB, oB, GB, 0]
        }],
        blendMode: vT.g.Standard
      }
    }
    const nT = {
      texture: "glint",
      mipmaps: !1,
      ah: 96,
      minLifeTime: .5 / kT.b,
      maxLifeTime: .9 / kT.b,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * kT.b * kT.b, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: vT.g.OneOne
    };
    class hT {
      constructor(BB, IB) {
        this.api = BB, this.localPlayerId = IB, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(BB) {
        if (this.api.particlesEnabled())
          for (const [IB, ZB, TB, JB, oB, GB] of BB.slice(0, 3)) {
            const BB = `${JB},${oB},${GB}`;
            let vB = this.chips.get(BB);
            void 0 === vB && (vB = this.api.createParticles(cT(JB, oB, GB), {
              pos: [IB + .5, ZB + .5, TB + .5]
            }), this.chips.set(BB, vB));
            for (let IB = 0; IB < 8; IB++) this.setPoint(IB, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            vB.emitPoints([IB + .5, ZB + .5, TB + .5], this.points, 8)
          }
      }
      layerDone(BB) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const IB = BB.length / 3;
        if (0 === IB || !this.api.particlesEnabled()) return;
        const ZB = Math.min(IB, 48),
          [TB, JB, oB] = [BB[0] + .5, BB[1] + 1, BB[2] + .5];
        let GB = 0;
        for (let vB = 0; vB < ZB; vB++) {
          const kB = 3 * Math.floor(vB * IB / ZB);
          for (let IB = 0; IB < 2; IB++) this.setPoint(GB++, BB[kB] + Math.random() - TB, BB[kB + 1] + 1 - JB, BB[kB + 2] + Math.random() - oB, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(nT, {
          pos: [TB, JB, oB]
        }), this.sparkles.emitPoints([TB, JB, oB], this.points, GB)
      }
      dispose() {
        var BB;
        for (const IB of this.chips.values()) IB.stop();
        this.chips.clear(), null === (BB = this.sparkles) || void 0 === BB || BB.stop(), this.sparkles = null
      }
      setPoint(BB, IB, ZB, TB, JB) {
        const oB = 4 * BB;
        this.points[oB] = IB, this.points[oB + 1] = ZB, this.points[oB + 2] = TB, this.points[oB + 3] = JB
      }
    }
    const zT = "SpecialAction1",
      FT = "KeyY",
      NT = "KeyX";

    function gT(BB) {
      let {
        placement: IB
      } = BB;
      const ZB = (0, kB.h)(vZ, IB.getView()),
        {
          t: TB
        } = (0, nB.G)(),
        {
          isTouchScreen: JB
        } = (0, vB.o)(["isTouchScreen"]),
        GB = (0, oB.useContext)(CB),
        hB = null !== ZB,
        gB = hB && !ZB.blocked && !ZB.waiting;
      if ((0, UB.e)((BB => hB && !BB.repeat && !(0, WB.isTypingInInput)() && !(0, FB.n)() && !JB), (BB => {
          const ZB = function(BB, IB, ZB) {
            if (BB === NT) return IB.stop;
            if (BB === FT) return ZB ? IB.build : yT;
            return cB.u[zT].includes(BB) ? IB.rotate : null
          }(BB.code, IB, gB);
          null !== ZB && (BB.stopPropagation(), ZB())
        })), !hB) return null;
      let qB = JB ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return ZB.blocked ? qB = "plotsGame:placementOffPlot" : ZB.toClear > 0 ? qB = "plotsGame:placementClear" : "placeSpot" !== GB.hint && "placeBuild" !== GB.hint || (qB = null), (0, PB.jsx)(NB.h, {
        placement: "bottom",
        children: (0, PB.jsxs)("div", {
          ref: GB.placementCardRef,
          className: "PlotsPlacementCard",
          children: [(0, PB.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: TB(YB(ZB.id).displayName.translationKey)
          }), null !== qB && (0, PB.jsx)("div", {
            className: zB()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: ZB.refusals > 0
            }),
            children: TB(qB)
          }, ZB.refusals), (0, PB.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, PB.jsxs)(wZ.g, {
              onClick: IB.rotate,
              children: [(0, PB.jsx)(qT, {
                noaAction: zT
              }), TB("plotsGame:placementRotate")]
            }), (0, PB.jsxs)(wZ.M, {
              onClick: IB.stop,
              children: [(0, PB.jsx)(qT, {
                keyCode: NT
              }), TB("general:cancel")]
            }), (0, PB.jsx)("span", {
              ref: GB.buildRef,
              className: zB()("PlotsPlacementBuild", {
                Pulse: "placeBuild" === GB.hint && gB && JB
              }),
              children: (0, PB.jsxs)(wZ.p, {
                disabled: !gB,
                onClick: IB.build,
                children: [(0, PB.jsx)(qT, {
                  keyCode: FT
                }), TB("plotsGame:placementBuild")]
              })
            })]
          })]
        })
      })
    }

    function qT(BB) {
      return (0, PB.jsx)(yB.d, {
        className: "PlotsPlacementKey",
        ...BB
      })
    }

    function yT() {}
    var UT = ZB(2460),
      WT = ZB(36708),
      dT = ZB(2054),
      CT = ZB(1325);
    const QT = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function sT(BB) {
      let {
        hud: IB
      } = BB;
      const ZB = (0, kB.h)(BI, IB.getPlot()),
        [TB, JB] = (0, oB.useState)(null),
        GB = (0, WT.k)(TB);
      if ("none" === ZB[0]) return null;
      const [, vB, cB, nB, hB, FB] = ZB;
      return (0, PB.jsx)("div", {
        className: zB()("PlotsPlotBannerContainer", {
          Below: GB
        }),
        children: (0, PB.jsx)(wT, {
          plotX: vB,
          plotZ: cB,
          ownerName: nB,
          ownerId: hB,
          relation: FB,
          plaqueRef: JB
        }, `${vB},${cB}`)
      })
    }

    function wT(BB) {
      var IB, ZB;
      let {
        plotX: TB,
        plotZ: JB,
        ownerName: oB,
        ownerId: GB,
        relation: vB,
        plaqueRef: kB
      } = BB;
      const {
        t: cB
      } = (0, nB.G)(), hB = (0, dT.j)("hiddenPlayerNames"), FB = (0, dT.j)("players"), NB = null === GB ? null : null !== (IB = null === (ZB = FB.byId[GB]) || void 0 === ZB ? void 0 : ZB.cosmetics) && void 0 !== IB ? IB : null, qB = cB("plotsGame:plotBannerCoords", {
        x: TB,
        z: JB
      }), yB = "own" === vB || null !== oB;
      return (0, PB.jsxs)("div", {
        ref: kB,
        className: zB()("PlotsPlotBanner", {
          Own: "own" === vB,
          Shared: "shared" === vB
        }),
        role: "status",
        children: [(0, PB.jsxs)("span", {
          className: zB()("PlotsPlotBannerSeal", {
            Face: null !== NB
          }),
          children: [null !== NB && (0, PB.jsx)(UT.b, {
            cosmetics: NB
          }), null === NB && (0, PB.jsx)(gB.d, {
            name: QT[vB]
          })]
        }), (0, PB.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, PB.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === vB && cB("plotsGame:plotBannerYours"), "own" !== vB && null !== oB && cB("plotsGame:plotBannerOwner", {
              name: (0, CT.e)(oB, hB)
            }), !yB && qB]
          }), yB && (0, PB.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [qB, "shared" === vB && (0, PB.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: cB("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }
    const OT = function(BB, IB, ZB, TB) {
      let {
        localPlayerId: JB
      } = TB;
      const vB = new TI;
      let kB = null,
        cB = null,
        nB = null,
        hB = null,
        zB = null,
        FB = null;
      const NB = [];
      return {
        onCreate: BB => {
          kB = new hT(BB, JB);
          const IB = new SB;
          cB = new JT(BB, JB, kB, IB), nB = new cZ(BB, JB), hB = new jB(BB, nB), zB = new sZ(BB, JB, cB.nextCell), FB = new GT(BB), NB.push((0, GB.x)((0, oB.createElement)(dZ, {
            hud: vB,
            guide: zB,
            tracker: IB,
            placement: nB
          }, (0, oB.createElement)(sT, {
            hud: vB
          }), (0, oB.createElement)(rB, {
            journal: hB
          }), (0, oB.createElement)(gZ, {
            placement: nB
          }), (0, oB.createElement)(gT, {
            placement: nB
          })), {
            content: (0, oB.createElement)(tZ, {
              journal: hB,
              hud: vB,
              guide: zB
            })
          }))
        },
        Iz: () => {
          FB.Iz(), cB.Iz(), nB.Iz(), hB.Iz()
        },
        onPlayerAttemptAltAction: (BB, IB, ZB, TB, JB, oB) => {
          if (null !== oB) return void cB.holdPressOnEntity();
          const GB = void 0 === IB ? null : [IB, ZB, TB];
          return cB.attemptAltAction(GB)
        },
        onPlayerClickUp: () => {
          cB.endPress()
        },
        onAfterRender: (BB, IB) => {
          nB.afterRender(IB), cB.afterRender(IB), zB.afterRender(IB)
        },
        onClose: () => {
          for (const BB of NB) BB();
          kB.dispose(), cB.dispose(), nB.dispose(), kB = null, cB = null, nB = null, hB = null, zB = null, FB = null
        },
        onReceivedMessageFromServer: (BB, IB) => {
          if ("plotsPlot" === BB) vB.receivePlot(IB);
          else if ("plotsBlueprint" === BB) {
            const BB = IB;
            cB.sN(BB), nB.sN(BB)
          } else "plotsJournal" === BB ? hB.sN(IB) : "plotsJournalOpen" === BB ? hB.openFromServer(IB) : "plotsPreviewEnd" === BB ? nB.endFromServer() : "plotsGuide" === BB ? vB.receiveGuide(IB) : "plotsGuideDone" === BB && vB.receiveGuideDone()
        }
      }
    }
  },
  38539: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => vB
    });
    var TB = ZB(38532);
    const JB = 5,
      oB = [0, 0, 0],
      GB = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function vB(BB, IB, ZB, vB, kB, cB) {
      let [nB, hB, zB] = vB;
      const FB = (nB + .5 - ZB[0]) ** 2 + (hB - ZB[1]) ** 2 + (zB + .5 - ZB[2]) ** 2;
      let NB = null;
      FB <= cB ** 2 && (oB[0] = nB + .5, oB[1] = hB + kB, oB[2] = zB + .5, NB = IB.projectWorldPosToViewport(oB));
      const gB = null !== NB && NB.x > -JB && NB.x < 100 + JB && NB.y > -JB && NB.y < 100 + JB;
      return (0, TB.f)(BB, !gB), gB ? (GB.x = NB.x, GB.y = NB.y, GB.distSq = FB, GB) : null
    }
  },
  39216: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB,
      d: () => oB
    });
    const TB = 1 / .6,
      JB = {
        kind: "smokePuff"
      };
    class oB {
      constructor(BB, IB, ZB) {
        this.style = BB, this.ah = IB, this.half = ZB, this.particles = null, this.lastFrame = -1
      }
      emit(BB, IB, ZB) {
        let oB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return ZB !== this.lastFrame && (this.lastFrame = ZB, this.particles || (this.particles = BB.createParticles(function(BB, IB) {
          const [
            [ZB, oB, GB],
            [vB, kB, cB]
          ] = BB.colours;
          return {
            texture: BB.soft ? JB : "square_particle",
            ah: IB,
            minLifeTime: BB.life[0] / TB,
            maxLifeTime: BB.life[1] / TB,
            minEmitPower: BB.power[0] * TB,
            maxEmitPower: BB.power[1] * TB,
            minSize: BB.size[0],
            maxSize: BB.size[1],
            emitRate: 0,
            gravity: [0, BB.lift * TB * TB, 0],
            dir1: [-BB.spread, 1, -BB.spread],
            dir2: [BB.spread, 1, BB.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [ZB, oB, GB, BB.alpha],
              maxColor: [vB, kB, cB, BB.alpha]
            }, {
              timeFraction: 1,
              minColor: [ZB, oB, GB, 0],
              maxColor: [vB, kB, cB, 0]
            }],
            blendMode: BB.blendMode
          }
        }(this.style, this.ah), {
          pos: IB,
          half: this.half
        })), this.particles.moveTo(IB, this.half), this.particles.emit(oB), !0)
      }
      dispose() {
        var BB;
        null === (BB = this.particles) || void 0 === BB || BB.stop(), this.particles = null
      }
    }
  },
  38532: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => GB,
      f: () => oB
    });
    const TB = new WeakMap;

    function JB(BB) {
      let IB = TB.get(BB);
      return IB || (IB = {
        hidden: BB.hidden,
        x: NaN,
        y: NaN
      }, TB.set(BB, IB)), IB
    }

    function oB(BB, IB) {
      const ZB = JB(BB);
      ZB.hidden !== IB && (ZB.hidden = IB, BB.hidden = IB)
    }

    function GB(BB, IB, ZB) {
      const TB = JB(BB);
      TB.x === IB && TB.y === ZB || (TB.x = IB, TB.y = ZB, BB.style.translate = `${IB}vw ${ZB}vh`)
    }
  },
  36926: (BB, IB, ZB) => {
    function TB(BB, IB) {
      return null === BB || null === IB ? BB === IB : BB[0] === IB[0] && BB[1] === IB[1] && BB[2] === IB[2]
    }

    function JB(BB) {
      return [BB[0] + .5, BB[1] + .5, BB[2] + .5]
    }
    ZB.d(IB, {
      e: () => JB,
      h: () => TB
    })
  },
  36964: (BB, IB, ZB) => {
    function TB(BB) {
      return BB.includes("Leaf Bed")
    }

    function JB(BB) {
      return / Bed(?: Head)?(?:\||$)/.test(BB) && !TB(BB)
    }

    function oB(BB) {
      return BB.includes(" Strongbed")
    }

    function GB(BB) {
      return TB(BB) || JB(BB) || oB(BB)
    }
    ZB.d(IB, {
      d: () => GB,
      h: () => TB,
      i: () => oB,
      k: () => JB
    })
  },
  36958: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => cB
    });
    var TB = ZB(36964),
      JB = ZB(9296);
    const oB = [],
      GB = [],
      vB = [],
      kB = [];
    for (const nB of Object.keys(JB.h))(0, TB.h)(nB) ? oB.push(nB) : (0, TB.k)(nB) && GB.push(nB), (0, TB.i)(nB) && vB.push(nB), (nB.includes(" Bed Head") || nB.includes(" Strongbed Head")) && kB.push(nB);
    const cB = {
      leafBeds: oB,
      woolBeds: GB,
      strongBeds: vB,
      beds: [...oB, ...GB, ...vB],
      bedHeads: kB,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  38583: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYUlEQVR4nGNgIBP8R8NYwX+GDVNRMQOm4v8MC9qxYwZUxf//b+T4//8A+///51khGMTeyIGp8Nz0gv8MDoFgGsbeUB2BXeHESHcUjFNhR4Dj/zp3OzAGsbEphHgIOyYNAACzzGY5JF2GbAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);