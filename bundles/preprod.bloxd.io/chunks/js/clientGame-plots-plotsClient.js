export const id = 26;
export const ids = [26];
export const modules = {
  37263: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => ZB,
      e: () => NB,
      h: () => zB,
      l: () => PB
    });
    var YB = GB(34790),
      DB = GB(37267),
      QB = GB(37270),
      oB = GB(9391),
      jB = GB(1480),
      yB = GB(56),
      JB = GB(70),
      MB = GB(1282);

    function PB() {
      var BB;
      return (0, jB.i)(DB.d, (0, DB.n)()), (0, MB.jsx)(MB.Fragment, {
        children: null === (BB = (0, DB.n)()) || void 0 === BB ? void 0 : BB.content
      })
    }

    function zB(BB) {
      var OB;
      let {
        show: GB
      } = BB;
      (0, jB.i)(DB.d, (0, DB.n)());
      const JB = null === (OB = (0, DB.n)()) || void 0 === OB ? void 0 : OB.menu;
      return (0, yB.useEffect)((() => {
        var BB;
        GB || (null === JB || void 0 === JB || null === (BB = JB.onClose) || void 0 === BB || BB.call(JB), (0, QB.u)())
      }), [GB, JB]), (0, yB.useEffect)((() => GB ? (0, oB.d)(QB.D, QB.i) : void 0), [GB]), (0, MB.jsx)(YB.d, {
        showing: GB,
        globallyUniqueKey: "clientGameMenu",
        children: null === JB || void 0 === JB ? void 0 : JB.content
      })
    }
    const lB = new Map,
      pB = new Set;

    function qB(BB, OB) {
      OB ? lB.set(BB, OB) : lB.delete(BB);
      for (const GB of pB) GB()
    }

    function ZB(BB) {
      let {
        placement: OB = "bottom"
      } = BB;
      const GB = (0, yB.useRef)(null);
      return (0, yB.useLayoutEffect)((() => {
        const BB = GB.current;
        return qB(OB, BB), () => {
          lB.get(OB) === BB && qB(OB, null)
        }
      }), [OB]), (0, MB.jsx)("div", {
        ref: GB,
        id: `clientGameHud-${OB}`,
        style: {
          display: "contents"
        }
      })
    }

    function NB(BB) {
      let {
        children: OB,
        placement: GB = "bottom"
      } = BB;
      const [YB, DB] = (0, yB.useState)((() => {
        var BB;
        return null !== (BB = lB.get(GB)) && void 0 !== BB ? BB : null
      }));
      return (0, yB.useEffect)((() => {
        const BB = () => {
          var BB;
          DB(null !== (BB = lB.get(GB)) && void 0 !== BB ? BB : null)
        };
        return pB.add(BB), BB(), () => {
          pB.delete(BB)
        }
      }), [GB]), YB ? (0, JB.createPortal)(OB, YB) : null
    }
  },
  34790: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => QB
    });
    var YB = GB(4949),
      DB = GB(4956);

    function QB(BB) {
      let {
        children: OB,
        showing: GB,
        globallyUniqueKey: QB,
        alwaysMountChildren: oB = !1,
        doGameplayStartStopOnShow: jB = !0,
        keepsMovement: yB = !1
      } = BB;
      return (0, DB.e)(!0, GB, QB, yB), (0, YB.c)(jB, GB), GB || oB ? OB : null
    }
  },
  37367: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => QB,
      i: () => oB,
      k: () => jB,
      n: () => yB
    });
    var YB = GB(56),
      DB = GB(3528);
    const QB = 8,
      oB = "InGameHeaderContainer",
      jB = "TopRightElements";

    function yB(BB) {
      const [OB] = (0, DB.e)(), [GB, yB] = (0, YB.useState)(!1);
      return (0, YB.useLayoutEffect)((() => {
        if (!BB) return;
        const OB = document.querySelector(`.${oB}`),
          GB = document.querySelector(`.${jB}`),
          YB = () => {
            const YB = BB.getBoundingClientRect(),
              DB = OB ? OB.getBoundingClientRect().right : 0,
              oB = GB ? GB.getBoundingClientRect().left : window.innerWidth,
              jB = YB.left < DB + QB,
              JB = YB.right > oB - QB;
            yB(jB || JB)
          };
        YB();
        const DB = new ResizeObserver(YB);
        return DB.observe(BB), OB && DB.observe(OB), GB && DB.observe(GB), () => {
          DB.disconnect()
        }
      }), [BB, OB]), GB
    }
  },
  9391: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB,
      d: () => DB
    });
    let YB = null;
    const DB = function(BB) {
        const OB = {
          cycle: BB,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return YB = OB, () => {
          YB === OB && (YB = null)
        }
      },
      QB = () => {
        var BB;
        return null !== (BB = YB) && void 0 !== BB && BB.canCycle() ? YB.cycle : null
      }
  },
  39176: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => oB,
      c: () => jB,
      f: () => yB
    });
    const YB = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      DB = [0, 1, 2, 0, 2, 3],
      QB = [4, 5];

    function oB(BB, OB, GB, YB, DB) {
      for (let oB = 0; oB < 6; oB++) QB.includes(oB) === DB && JB(BB, OB, GB, YB, oB)
    }

    function jB(BB, OB, GB, YB) {
      for (let DB = 0; DB < 6; DB++) JB(BB, OB, GB, YB, DB)
    }

    function yB(BB, OB, GB, QB, oB) {
      for (let jB = 0; jB < 6; jB++)
        for (const yB of [0, 1]) {
          const [JB, MB, PB] = [yB + 2, yB + 1, (yB + 3) % 4], zB = BB.length / 3;
          for (const [OB, DB] of [
              [yB, MB],
              [JB, MB],
              [JB, PB],
              [yB, PB]
            ])
            for (let yB = 0; yB < 3; yB++) {
              const JB = YB[3 * (4 * jB + OB) + yB],
                MB = YB[3 * (4 * jB + DB) + yB];
              BB.push((JB + (MB - JB) * oB) * QB / 2 + GB[yB])
            }
          for (const BB of DB) OB.push(zB + BB)
        }
    }

    function JB(BB, OB, GB, QB, oB) {
      let [jB, yB, JB] = GB, [MB, PB, zB] = QB;
      const lB = BB.length / 3;
      for (let DB = 4 * oB; DB < 4 * oB + 4; DB++) BB.push(YB[3 * DB] * MB / 2 + jB, YB[3 * DB + 1] * PB / 2 + yB, YB[3 * DB + 2] * zB / 2 + JB);
      for (const YB of DB) OB.push(lB + YB)
    }
  },
  40237: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => kY
    });
    const YB = [0, 90, 180, 270],
      DB = "plotsblueprint";
    var QB = GB(56),
      oB = GB(37267),
      jB = GB(16),
      yB = GB(1480),
      JB = GB(2085),
      MB = GB(1175),
      PB = GB(1090),
      zB = GB.n(PB),
      lB = GB(1699),
      pB = GB(40244),
      qB = GB(37263),
      ZB = GB(1383),
      NB = GB(2012),
      RB = GB(2076),
      WB = GB(3839),
      AB = GB(1822);

    function VB() {}
    const SB = (0, QB.createContext)({
      hint: null,
      journalRef: VB,
      placementCardRef: VB,
      buildRef: VB
    });
    var nB = GB(25);
    const UB = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      fB = {
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
      kB = ["small", "medium", "large"].flatMap((BB => UB.flat().filter((OB => fB[OB].tier === BB))));

    function dB(BB) {
      return fB[BB]
    }
    const KB = new Map(UB.flatMap((BB => BB.slice(1).map(((OB, GB) => [OB, BB[GB]])))));

    function uB(BB) {
      var OB;
      return null !== (OB = KB.get(BB)) && void 0 !== OB ? OB : null
    }
    const mB = {
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

    function IB(BB, OB) {
      const GB = new Set(BB),
        YB = function(BB) {
          const OB = new Set(BB);
          return new Set(kB.filter((BB => {
            const GB = uB(BB);
            return null === GB || OB.has(GB)
          })))
        }(GB);
      return kB.map((BB => {
        const DB = BB === OB;
        if (GB.has(BB)) return {
          id: BB,
          active: DB,
          note: null,
          state: "completed",
          unlockedBy: null
        };
        const QB = mB[BB],
          oB = void 0 === QB || QB.firstBuild && GB.size > 0 ? null : QB.key;
        return YB.has(BB) ? {
          id: BB,
          active: DB,
          note: oB,
          state: "open",
          unlockedBy: null
        } : {
          id: BB,
          active: DB,
          note: oB,
          state: "locked",
          unlockedBy: uB(BB)
        }
      }))
    }
    const FB = "plotsJournalChanged";
    class iB {
      constructor(BB, OB) {
        this.api = BB, this.placement = OB, this.pages = null, this.openRequested = null, this.openedOffered = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.jP(this.openedOffered ? "journal_offered" : "journal_opened"), this.openedOffered = !1
        }, this.build = BB => {
          this.placement.start(BB), (0, oB.g)()
        }, this.putAway = () => {
          this.api.sendCommand(`${DB} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      nP(BB) {
        let [, OB, GB] = BB;
        this.pages = IB(OB, GB), nB.o.tM(FB, this.pages, !0)
      }
      openFromServer(BB) {
        let [, OB] = BB;
        this.openRequested = OB, this.kP()
      }
      kP() {
        const BB = this.openRequested;
        null === BB || jB.c.get("loadingOverlayVisible") || (this.openRequested = null, null === this.pages || (0, lB.r)() || (0, AB.isTypingInInput)() || null !== this.placement.getView() || (this.openedOffered = BB, (0, oB.o)()))
      }
      jP(BB) {
        this.reported.has(BB) || (this.reported.add(BB), this.api.sendCommand(`${DB} report ${BB}`))
      }
    }
    var LB = GB(1282);
    const gB = "KeyJ";

    function rB(BB) {
      let {
        journal: OB
      } = BB;
      const GB = (0, yB.i)(FB, OB.getPages()),
        {
          isTouchScreen: YB
        } = (0, jB.o)(["isTouchScreen"]),
        {
          t: DB
        } = (0, MB.H)(),
        JB = (0, QB.useContext)(SB),
        PB = null !== GB;
      return (0, QB.useEffect)((() => PB ? (0, pB.d)(gB) : void 0), [PB]), (0, WB.b)((BB => PB && BB.code === gB && !BB.repeat && !(0, AB.isTypingInInput)()), (BB => {
        (0, lB.E)(BB, !0, oB.o)
      })), null === GB ? null : (0, LB.jsx)(qB.e, {
        placement: "topRight",
        children: (0, LB.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, LB.jsxs)("button", {
            ref: JB.journalRef,
            type: "button",
            className: zB()("PlotsJournalButton SmallTextBold", {
              Touch: YB
            }),
            onClick: oB.o,
            children: [(0, LB.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, LB.jsx)(NB.c, {
                itemName: "Book",
                amount: 0
              })
            }), DB("plotsGame:journalButton"), !YB && (0, LB.jsx)(RB.c, {
              className: "PlotsJournalButtonKey",
              keyCode: gB
            }), "openJournal" === JB.hint && (0, LB.jsx)(ZB.b, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon HandLeftAnim PlotsJournalButtonHand"
            })]
          })
        })
      })
    }
    var XB = GB(9927);
    const wB = [0, 90, 180, 270],
      EB = /^(meta\|rot\d)\|([lrud]+)$/,
      cB = "nesw",
      hB = /^meta\|([nesw]*)\|?(Stacked)?$/,
      aB = function(BB) {
        const OB = new WeakMap;
        return (GB, YB) => {
          let DB = OB.get(GB);
          return void 0 === DB && (DB = BB(GB, YB), OB.set(GB, DB)), DB
        }
      }((BB => new eB(BB)));
    class eB {
      constructor(BB) {
        this.blockMetadata = BB, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const OB = new Set(Object.keys(BB).map((OB => BB[OB].id)));
        OB.add(0), this.maxBlockId = Math.max(...OB)
      }
      static
      for (BB) {
        return aB(BB)
      }
      getBlockIdMapping(BB, OB) {
        const GB = this.getBlockIdMappingKey(BB, OB);
        let YB = this.blockIdMappings.get(GB);
        return void 0 === YB && wB.includes(BB) && (YB = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, BB, OB), this.blockIdMappings.set(GB, YB)), YB
      }
      turnBlockId(BB, OB, GB) {
        return this.mapBlockId(this.blockMetadata[BB], OB, this.getRotationMapping(OB, GB), GB)
      }
      getBlockIdMappingKey(BB, OB) {
        return `r${BB}|m${Number(OB)}`
      }
      createBlockIdMapping(BB, OB, GB, YB) {
        const DB = new Uint16Array(OB + 1),
          QB = this.getRotationMapping(GB, YB);
        for (const oB in BB) {
          const OB = BB[oB];
          DB[OB.id] = this.mapBlockId(OB, GB, QB, YB)
        }
        return DB
      }
      getRotationMapping(BB, OB) {
        const GB = Math.round(BB / 90),
          YB = new Uint8Array(4);
        for (let DB = 0; DB < 4; DB++) YB[DB] = (4 + DB - GB) % 4;
        if (OB) {
          let BB = YB[0];
          YB[0] = YB[1], YB[1] = BB, BB = YB[2], YB[2] = YB[3], YB[3] = BB
        }
        return YB
      }
      mapBlockId(BB, OB, GB, YB) {
        var DB;
        const {
          blockMetadata: QB
        } = this, oB = Math.round(OB / 90), {
          id: jB,
          meta: yB
        } = BB, {
          rot: JB,
          rootName: MB,
          metaStr: PB
        } = yB;
        let zB;
        const [, lB, pB] = null !== (DB = hB.exec(PB)) && void 0 !== DB ? DB : [];
        if (void 0 !== lB) {
          var qB, ZB;
          zB = null !== (qB = null === (ZB = QB[`${MB}|meta|${[cB.split("").filter(((BB,OB)=>lB.split("").some((BB=>{const GB=cB.indexOf(BB);return((YB?3-GB:GB)+oB)%4===OB})))).join(""),pB].filter(Boolean).join("|")}`]) || void 0 === ZB ? void 0 : ZB.id) && void 0 !== qB ? qB : jB
        } else if (null === JB) zB = jB;
        else {
          var NB, RB;
          const BB = GB[JB - 1] + 1;
          let OB = PB.replace(`rot${JB}`, `rot${BB}`);
          YB && yB.stairsCorner && (OB = OB.replace(/(Left|Right)$/, (BB => "Left" === BB ? "Right" : "Left"))), YB && "Chest" === MB && (OB = OB.replace(/\|(left|right)$/, ((BB, OB) => "left" === OB ? "|right" : "|left")));
          const DB = EB.exec(OB);
          if (YB && null !== DB) {
            const BB = "lrud".split("").filter((BB => DB[2].includes("l" === BB ? "r" : "r" === BB ? "l" : BB)));
            OB = `${DB[1]}|${BB.join("")}`
          }
          const oB = `${MB}|${OB}`;
          if (zB = null !== (NB = null === (RB = QB[oB]) || void 0 === RB ? void 0 : RB.id) && void 0 !== NB ? NB : null, null === zB) {
            const BB = QB[MB];
            zB = BB.rootMetaDesc === oB ? BB.id : jB
          }
        }
        return zB
      }
    }

    function TB(BB, OB, GB) {
      let {
        xRotationMappedOrigin: YB,
        shouldSwapXZ: DB
      } = GB;
      const QB = DB ? OB : BB;
      return null === YB ? QB : YB - QB
    }

    function bB(BB, OB, GB) {
      let {
        zRotationMappedOrigin: YB,
        shouldSwapXZ: DB
      } = GB;
      const QB = DB ? BB : OB;
      return null === YB ? QB : YB - QB
    }
    const CB = {
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
      HB = new Map;

    function vB(BB, OB) {
      const GB = `${BB}|${OB}`;
      let YB = HB.get(GB);
      if (void 0 === YB) {
        const {
          size: DB,
          palette: QB,
          layers: oB
        } = CB[BB], jB = 90 === OB || 270 === OB, [yB, JB] = jB ? [DB[2], DB[0]] : [DB[0], DB[2]], MB = function(BB, OB, GB) {
          let YB = null,
            DB = null,
            QB = !1;
          switch (BB) {
            case 0:
              break;
            case 90:
              YB = OB - 1, QB = !0;
              break;
            case 180:
              YB = OB - 1, DB = GB - 1;
              break;
            case 270:
              DB = GB - 1, QB = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${BB}`)
          }
          return {
            xRotationMappedOrigin: YB,
            zRotationMappedOrigin: DB,
            shouldSwapXZ: QB
          }
        }(OB, yB, JB), PB = eB.for(XB.h), zB = QB.map((BB => (0, XB.d)(PB.turnBlockId((0, XB.j)(BB), OB, !1)))), lB = [];
        oB.forEach(((BB, OB) => {
          BB.split(" ").forEach(((BB, GB) => {
            for (let YB = 0; YB < BB.length; YB++)
              if ("." !== BB[YB]) {
                const DB = [TB(YB, GB, MB), OB, bB(YB, GB, MB)];
                lB.push({
                  offset: DB,
                  block: zB[BB.charCodeAt(YB) - "a".charCodeAt(0)]
                })
              }
          }))
        })), YB = {
          size: [yB, DB[1], JB],
          cells: lB
        }, HB.set(GB, YB)
      }
      return YB
    }
    const sB = "plotsBuildProgressChanged",
      xB = new Map;

    function tB(BB, OB, GB) {
      let YB = 0,
        DB = 0;
      return function(BB) {
        let OB = xB.get(BB);
        if (void 0 === OB) {
          const YB = [];
          for (const {
              offset: OB
            }
            of vB(BB, 0).cells) {
            var GB;
            YB[OB[1]] = (null !== (GB = YB[OB[1]]) && void 0 !== GB ? GB : 0) + 1
          }
          OB = YB, xB.set(BB, OB)
        }
        return OB
      }(BB).forEach(((BB, GB) => {
        YB += BB, GB > OB && (DB += BB)
      })), {
        id: BB,
        filled: YB - DB - GB,
        total: YB
      }
    }
    class BO {
      constructor() {
        this.shown = null, this.topOpen = 0, this.progress = null
      }
      get() {
        return this.progress
      }
      show(BB) {
        this.shown = BB, this.topOpen = 0, null === BB && this.tM(null)
      }
      update(BB, OB, GB) {
        const YB = this.shown;
        null !== YB && (BB >= OB && (this.topOpen = GB), this.tM(tB(YB.id, OB - YB.y, BB >= OB ? GB : this.topOpen + GB)))
      }
      tM(BB) {
        const OB = this.progress;
        (null === BB || void 0 === BB ? void 0 : BB.id) === (null === OB || void 0 === OB ? void 0 : OB.id) && (null === BB || void 0 === BB ? void 0 : BB.filled) === (null === OB || void 0 === OB ? void 0 : OB.filled) && (null === BB || void 0 === BB ? void 0 : BB.total) === (null === OB || void 0 === OB ? void 0 : OB.total) || (this.progress = BB, nB.o.tM(sB, BB, !0))
      }
    }
    const OO = "plotsPlotChanged",
      GO = "plotsGuideChanged",
      YO = "plotsGuideDone";
    class DO {
      constructor() {
        this.plot = ["none"], this.guide = ["none"]
      }
      getPlot() {
        return this.plot
      }
      receivePlot(BB) {
        this.plot = BB, nB.o.tM(OO, BB, !0)
      }
      getGuide() {
        return this.guide
      }
      receiveGuide(BB) {
        this.guide = BB, nB.o.tM(GO, BB, !0)
      }
      receiveGuideDone() {
        nB.o.tM(YO, void 0, !0)
      }
    }
    var QO = GB(1268),
      oO = GB(39215),
      jO = GB(37572),
      yO = GB(1510);

    function JO(BB) {
      let {
        onSkip: OB,
        className: GB
      } = BB;
      const {
        t: YB
      } = (0, MB.H)();
      return (0, LB.jsx)("button", {
        type: "button",
        className: zB()("PlotsGuideSkipButton", GB),
        ...(0, yO.g)(OB, "pointerup"),
        children: YB("tutorial:skip")
      })
    }

    function MO(BB) {
      let {
        target: OB,
        placement: GB,
        spotlight: YB = null,
        children: DB
      } = BB;
      const {
        t: oB
      } = (0, MB.H)(), jB = (0, QB.useRef)(OB);
      return jB.current = OB, (0, QO.v)("popup", jB, null === YB ? null : YB.onSkip, null !== YB, null, "controller:menusSkipTutorial"), (0, LB.jsxs)(jO.f, {
        target: OB,
        placement: GB,
        className: zB()("PlotsGuideBubble", {
          Passive: null === YB
        }),
        spotlight: null !== YB,
        spotlightMargin: 30,
        children: [(0, LB.jsxs)("div", {
          className: "PlotsGuideBubbleHeader",
          children: [(0, LB.jsx)("img", {
            className: "PlotsGuideBubblePortrait",
            src: oO,
            alt: "",
            draggable: !1
          }), (0, LB.jsx)("span", {
            className: "PlotsGuideBubbleSpeaker",
            children: oB("plotsGame:maverickName")
          }), null !== YB && (0, LB.jsx)(JO, {
            onSkip: YB.onSkip
          })]
        }), (0, LB.jsx)("p", {
          className: "PlotsGuideBubbleText",
          children: DB
        })]
      })
    }

    function PO(BB) {
      let {
        className: OB,
        icon: GB,
        title: YB,
        children: DB
      } = BB;
      return (0, LB.jsxs)("div", {
        className: zB()("PlotsCard", OB),
        role: "status",
        children: [(0, LB.jsx)("span", {
          className: "PlotsCardIcon",
          children: (0, LB.jsx)(ZB.b, {
            name: GB
          })
        }), (0, LB.jsxs)("div", {
          className: "PlotsCardBody",
          children: [(0, LB.jsx)("div", {
            className: "PlotsCardTitle SmallTextBold",
            children: YB
          }), DB]
        })]
      })
    }

    function zO(BB) {
      let {
        progress: OB,
        goal: GB
      } = BB;
      const YB = Math.min(OB, GB);
      return (0, LB.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, LB.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": GB,
          "aria-valuenow": YB,
          children: (0, LB.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${YB/GB})`
            }
          })
        }), (0, LB.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [YB, "/", GB]
        })]
      })
    }

    function lO(BB) {
      let {
        progress: OB,
        guide: GB
      } = BB;
      const {
        t: YB
      } = (0, MB.H)(), {
        isTouchScreen: DB
      } = (0, jB.o)(["isTouchScreen"]), QB = OB.filled < 5;
      return (0, LB.jsxs)(LB.Fragment, {
        children: [(QB || OB.total - OB.filled <= 5) && (0, LB.jsx)("div", {
          className: "PlotsGuideHandLayer",
          children: (0, LB.jsx)("div", {
            ref: GB.bindHand,
            className: "PlotsGuideHand",
            children: (0, LB.jsx)(ZB.b, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon"
            })
          })
        }), (0, LB.jsx)(qB.e, {
          placement: "bottom",
          children: (0, LB.jsxs)(PO, {
            icon: "hammer",
            title: YB(dB(OB.id).displayName.translationKey),
            children: [QB && (0, LB.jsx)("div", {
              className: "PlotsCardHint SmallTextLight",
              children: DB ? YB("plotsGame:guideBuildTouch") : pO(YB)
            }), (0, LB.jsx)(zO, {
              progress: OB.filled,
              goal: OB.total
            })]
          })
        })]
      })
    }

    function pO(BB) {
      const OB = JB.t["alt-fire"][0];
      return "Mouse3" === OB ? BB("plotsGame:guideBuildRightClick") : BB("plotsGame:guideBuildKeys", {
        key: (0, JB.l)(OB)
      })
    }

    function qO() {
      return (0, LB.jsx)("div", {
        className: "PlotsGuideDragHand",
        children: (0, LB.jsx)(ZB.b, {
          name: "hand-back-point-up",
          className: "SmallTextBold TouchTutorialIcon"
        })
      })
    }
    var ZO = GB(1293),
      NO = GB(2854),
      RO = GB(39074),
      WO = GB(38836),
      AO = GB(37627),
      VO = GB(9965),
      SO = GB(9983),
      nO = GB(353),
      UO = GB(38488);
    const fO = new Map([
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
      kO = [...AO.d.blockRemoveActionRoots, ...WO.d, ...VO.i, "Board", "Code Block", "Custom Lobby Block"],
      dO = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let KO = null;

    function uO() {
      return KO ??= function() {
        const BB = mO(),
          OB = Math.max(...BB.map((BB => XB.h[BB].id))) + 1,
          GB = new Int32Array(OB),
          YB = new Int32Array(OB),
          DB = new Uint8Array(OB).fill(1),
          QB = new Uint8Array(OB),
          oB = new Uint8Array(OB),
          jB = new Array(OB).fill("Air"),
          yB = new Map,
          JB = BB => {
            let OB = yB.get(BB);
            return void 0 === OB && (OB = yB.size + 1, yB.set(BB, OB)), OB
          },
          MB = new Set(kO);
        for (const zB of BB) {
          var PB;
          const {
            id: BB,
            meta: OB,
            altActionable: yB,
            canBePlacedOver: lB
          } = XB.h[zB];
          GB[BB] = JB(IO(zB));
          const pB = OB.stairsCorner;
          if (null === pB) YB[BB] = GB[BB];
          else {
            const GB = pB.endsWith("Right");
            YB[BB] = JB(`${OB.rootName}|rot${GB?OB.rot%4+1:OB.rot}|${OB.halfblockPlacement}|${pB.replace("Right","Left")}`)
          }
          DB[BB] = lB ? 1 : 0, QB[BB] = yB || null !== OB.open || zB in UO.c || MB.has(OB.rootName) || void 0 !== (0, WO.h)(OB.rootName) ? 1 : 0;
          const {
            rootName: qB
          } = OB;
          oB[BB] = null !== OB.open || WO.d.includes(qB) || qB.includes("Bookshelf") || qB.includes("Mailbox") ? 1 : 0, jB[BB] = null !== (PB = (0, RO.d)(BB)) && void 0 !== PB ? PB : qB
        }
        return {
          kinds: GB,
          shapes: YB,
          empty: DB,
          inUse: QB,
          ownAltActionMessage: oB,
          placingItems: jB
        }
      }(), KO
    }

    function mO() {
      return Object.keys(XB.h).filter((BB => XB.h[BB].name === BB))
    }

    function IO(BB) {
      var OB;
      const GB = XB.h[BB],
        {
          rootName: YB,
          rot: DB
        } = GB.meta,
        [, ...QB] = (null !== (OB = GB.rootMetaDesc) && void 0 !== OB ? OB : BB).split("|"),
        oB = QB.filter((BB => !("meta" === BB || dO.test(BB) || (0, SO.A)(GB) && /^[nesw]+$/.test(BB) || VO.i.includes(YB) && /^[lrud]+$/.test(BB) || nO.H.includes(YB) && /^(left|right)$/.test(BB))));
      return [YB, ...oB].map((BB => "fenceGate" === GB.model && BB === `rot${DB}` ? "rot" + ((DB - 1) % 2 + 1) : BB)).join("|")
    }

    function FO(BB, OB) {
      const {
        kinds: GB,
        shapes: YB
      } = uO();
      return GB[BB] === GB[OB] || YB[BB] === YB[OB]
    }

    function iO(BB) {
      return 1 === uO().empty[BB]
    }

    function LO(BB) {
      return uO().placingItems[BB]
    }

    function gO(BB) {
      return fO.get(XB.h[BB].meta.rootName)
    }
    var rO = GB(9962),
      XO = GB(9974);
    const wO = [0, 0, 0, 1, 1, 1],
      EO = (0, rO.d)([
        [2, 0, 2, 6, 6, 6]
      ]),
      cO = (0, rO.d)([
        [3, 0, 3, 5, 5, 5]
      ]),
      hO = (0, rO.d)([
        [3, 3, 3, 5, 8, 5]
      ]),
      aO = [0, 1, 2, 3].map((BB => (0, rO.d)((0, rO.m)([
        [3, 2, 0, 5, 7, 3]
      ], BB))));

    function eO(BB) {
      const {
        MZ: OB,
        model: GB,
        blockModel: YB,
        meta: DB
      } = XB.h[BB];
      return void 0 !== OB ? OB : "CentreCross" === GB ? EO : null !== YB && void 0 !== YB && YB.startsWith("torch") ? DB.halfblockPlacement === XO.d.side ? aO[DB.rot - 1] : DB.halfblockPlacement === XO.d.top ? hO : cO : wO
    }
    var TO = GB(192);
    class bO {
      constructor(BB) {
        this.api = BB, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(BB) {
        const OB = TO.f.pP;
        this.chunks = [];
        for (let GB = 0; GB < BB.length; GB += 3) {
          const YB = Math.floor(BB[GB] / OB),
            DB = Math.floor(BB[GB + 1] / OB),
            QB = Math.floor(BB[GB + 2] / OB);
          this.watches(YB, DB, QB) || this.chunks.push(YB, DB, QB)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const BB = performance.now();
        if (BB - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = BB;
        let OB = !1;
        for (let GB = 0; GB < this.chunks.length; GB += 3) {
          const BB = this.api.getChunkVersion(this.chunks[GB], this.chunks[GB + 1], this.chunks[GB + 2]);
          this.versions[GB / 3] !== BB && (this.versions[GB / 3] = BB, OB = !0)
        }
        return OB
      }
      watches(BB, OB, GB) {
        for (let YB = 0; YB < this.chunks.length; YB += 3)
          if (this.chunks[YB] === BB && this.chunks[YB + 1] === OB && this.chunks[YB + 2] === GB) return !0;
        return !1
      }
    }
    var CO = GB(39176);
    const HO = .35,
      vO = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      sO = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      xO = [.95, .2, .15];
    class tO {
      constructor() {
        this.groups = []
      }
      add(BB, OB, GB, YB, DB) {
        let QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : wO;
        for (const oB of this.groups)
          if (GG(oB, YB, DB)) return oB.cells.push(BB, OB, GB), void oB.boxes.push(QB);
        this.groups.push({
          rgb: YB,
          look: DB,
          cells: [BB, OB, GB],
          boxes: [QB]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class BG {
      constructor(BB) {
        this.api = BB, this.shown = []
      }
      show(BB) {
        const OB = [];
        for (const GB of BB) {
          const BB = this.shown.findIndex((BB => {
            let {
              group: OB
            } = BB;
            return GG(OB, GB.rgb, GB.look) && YG(OB, GB)
          })); - 1 === BB ? OB.push(this.build(GB)) : (OB.push(this.shown[BB]), this.shown.splice(BB, 1))
        }
        this.dispose(), this.shown = OB
      }
      dispose() {
        for (const {
            meshes: BB
          }
          of this.shown)
          for (const OB of BB) this.api.disposeGameMesh(OB);
        this.shown = []
      }
      build(BB) {
        const {
          rgb: OB,
          look: GB,
          boxes: YB
        } = BB, DB = [OB[0] + (1 - OB[0]) * HO, OB[1] + (1 - OB[1]) * HO, OB[2] + (1 - OB[2]) * HO], QB = [this.buildMesh(BB.cells, OB, GB.alpha, ((BB, OB, DB, QB) => {
          OG(BB, OB, DB, YB[QB], GB.size, !1)
        })), this.buildMesh(BB.cells, DB, GB.alpha, ((BB, OB, DB, QB) => {
          OG(BB, OB, DB, YB[QB], GB.size, !0)
        }))];
        return GB.crossed && QB.push(this.buildMesh(BB.cells, OB, .9, ((BB, OB, YB) => {
          (0, CO.f)(BB, OB, YB, GB.size + .01, .12)
        }))), {
          group: BB,
          meshes: QB
        }
      }
      buildMesh(BB, OB, GB, YB) {
        const DB = [BB[0], BB[1], BB[2]],
          QB = [],
          oB = [];
        for (let jB = 0; jB < BB.length; jB += 3) YB(QB, oB, [BB[jB] - DB[0] + .5, BB[jB + 1] - DB[1] + .5, BB[jB + 2] - DB[2] + .5], jB / 3);
        return this.api.createGameMesh({
          positions: QB,
          indices: oB
        }, {
          rgb: [OB[0], OB[1], OB[2]],
          alpha: GB
        }, DB)
      }
    }

    function OG(BB, OB, GB, YB, DB, QB) {
      for (let oB = 0; oB < YB.length; oB += 6) {
        const jB = [0, 0, 0],
          yB = [0, 0, 0];
        for (let BB = 0; BB < 3; BB++) jB[BB] = GB[BB] + ((YB[oB + BB] + YB[oB + BB + 3]) / 2 - .5) * DB, yB[BB] = (YB[oB + BB + 3] - YB[oB + BB]) * DB;
        (0, CO.b)(BB, OB, jB, yB, QB)
      }
    }

    function GG(BB, OB, GB) {
      return BB.rgb[0] === OB[0] && BB.rgb[1] === OB[1] && BB.rgb[2] === OB[2] && BB.look === GB
    }

    function YG(BB, OB) {
      if (BB.cells.length !== OB.cells.length) return !1;
      for (let GB = 0; GB < BB.cells.length; GB++)
        if (BB.cells[GB] !== OB.cells[GB]) return !1;
      return BB.boxes.every(((BB, GB) => BB === OB.boxes[GB]))
    }

    function DG(BB, OB, GB, YB, DB) {
      if (!BB.isBlockInLoadedChunk(OB, YB - 6, GB) || !BB.isBlockInLoadedChunk(OB, YB + 6 + DB, GB) || !BB.canModifyBlockAt(OB, YB, GB)) return NaN;
      let QB = YB - 1;
      if (0 !== BB.getBlockId(OB, QB, GB)) {
        for (; QB < YB + 6 && 0 !== BB.getBlockId(OB, QB + 1, GB);) QB++;
        return QB
      }
      for (; QB > YB - 6;)
        if (QB--, 0 !== BB.getBlockId(OB, QB, GB)) return QB;
      return NaN
    }

    function QG(BB, OB, GB, YB, DB) {
      let QB = 0;
      for (let oB = YB + 1; oB <= YB + DB; oB++) 0 !== BB.getBlockId(OB, oB, GB) && QB++;
      return QB
    }

    function oG(BB) {
      const OB = new Map;
      for (const oB of BB) {
        var GB;
        if (Number.isNaN(oB)) return null;
        OB.set(oB, (null !== (GB = OB.get(oB)) && void 0 !== GB ? GB : 0) + 1)
      }
      let YB = NaN,
        DB = 0;
      for (const [oB, jB] of OB)(jB > DB || jB === DB && oB < YB) && (YB = oB, DB = jB);
      let QB = 0;
      for (const oB of BB) QB += Math.abs(oB - YB);
      return QB
    }

    function jG(BB, OB, GB, YB) {
      const {
        eye: DB,
        forward: QB,
        tanHalfFovX: oB,
        tanHalfFovY: jB
      } = BB, [yB, JB] = function(BB) {
        let [OB, GB, YB] = BB;
        const DB = Math.hypot(OB, YB),
          [QB, oB] = [YB / DB, -OB / DB];
        return [
          [QB, 0, oB],
          [GB * oB, YB * QB - OB * oB, -GB * QB]
        ]
      }(QB), [MB, PB] = [OB * oB, GB * jB], zB = QB[0] + MB * yB[0] + PB * JB[0], lB = QB[1] + PB * JB[1], pB = QB[2] + MB * yB[2] + PB * JB[2], qB = (YB - DB[1]) / lB;
      return qB > 0 && qB < 1 / 0 ? [DB[0] + qB * zB, DB[2] + qB * pB] : null
    }
    const yG = "plotsBlueprintPlacementChanged",
      JG = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class MG {
      constructor(BB, OB) {
        this.api = BB, this.localPlayerId = OB, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = BB => {
          var OB, GB, YB, QB;
          const oB = null !== (OB = null === (GB = this.placing) || void 0 === GB ? void 0 : GB.rotation) && void 0 !== OB ? OB : 0,
            {
              size: jB
            } = vB(BB, oB),
            yB = this.api.pR(this.localPlayerId),
            [JB, MB] = null !== (YB = null !== (QB = function(BB, OB, GB, YB) {
              const [DB, QB, oB] = OB, [jB, yB, JB] = [Math.floor(GB[0]), Math.floor(GB[1]), Math.floor(GB[2])], MB = 6 + Math.max(DB, oB) / 2, [PB, zB] = [Math.ceil(MB + DB / 2), Math.ceil(MB + oB / 2)], [lB, pB] = [jB - PB, JB - zB], [qB, ZB] = [2 * PB + 1, 2 * zB + 1], NB = new Float64Array(qB * ZB), RB = new Uint16Array(qB * ZB);
              for (let nB = 0; nB < qB; nB++)
                for (let OB = 0; OB < ZB; OB++) {
                  const GB = DG(BB, lB + nB, pB + OB, yB, QB);
                  NB[nB * ZB + OB] = GB, Number.isNaN(GB) || (RB[nB * ZB + OB] = QG(BB, lB + nB, pB + OB, GB, QB))
                }
              const WB = Math.hypot(YB[0], YB[2]),
                AB = [];
              let VB = null,
                SB = 1 / 0;
              for (let nB = 0; nB + DB <= qB; nB++)
                for (let BB = 0; BB + oB <= ZB; BB++) {
                  const [OB, QB] = [lB + nB, pB + BB], [yB, PB] = [OB + DB / 2 - GB[0], QB + oB / 2 - GB[2]], zB = Math.hypot(yB, PB);
                  if (zB > MB || jB >= OB - 2 && jB < OB + DB + 2 && JB >= QB - 2 && JB < QB + oB + 2) continue;
                  AB.length = 0;
                  let qB = 0;
                  for (let GB = 0; GB < DB; GB++)
                    for (let OB = 0; OB < oB; OB++) AB.push(NB[(nB + GB) * ZB + BB + OB]), qB += RB[(nB + GB) * ZB + BB + OB];
                  const UB = oG(AB);
                  if (null === UB) continue;
                  const fB = zB + 3 * (UB + qB) + (1 - (0 === WB ? 1 : (yB * YB[0] + PB * YB[2]) / (zB * WB))) / 2 * 6;
                  fB < SB && (SB = fB, VB = [OB, QB])
                }
              return VB
            }(this.api, jB, yB, this.camera.forward)) && void 0 !== QB ? QB : this.cornerOnTarget(jB)) && void 0 !== YB ? YB : [Math.floor(yB[0]) + 2, Math.floor(yB[2])];
          this.placing = {
            id: BB,
            rotation: oB,
            corner: [JB, this.playerLevel(), MB],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null,
            moved: !1,
            stillSinceMs: performance.now()
          }, this.update(), this.api.sendCommand(`${DB} preview`)
        }, this.rotate = () => {
          const {
            id: BB,
            rotation: OB,
            corner: GB
          } = this.placing, DB = YB[(YB.indexOf(OB) + 1) % YB.length], [QB, , oB] = vB(BB, OB).size, [jB, , yB] = vB(BB, DB).size;
          this.moveTo(GB[0] + Math.floor(QB / 2) - Math.floor(jB / 2), GB[2] + Math.floor(oB / 2) - Math.floor(yB / 2), DB)
        }, this.hoverAt = (BB, OB) => {
          this.placing.hover = [BB, OB], this.moveCentreTo(this.camera, BB, OB)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (BB, OB) => {
          const GB = this.placing,
            {
              eye: YB,
              forward: DB,
              tanHalfFovX: QB,
              tanHalfFovY: oB
            } = this.camera,
            jB = {
              eye: [YB[0], YB[1], YB[2]],
              forward: [DB[0], DB[1], DB[2]],
              tanHalfFovX: QB,
              tanHalfFovY: oB
            },
            yB = GB.corner[1],
            JB = jG(jB, BB, OB, yB);
          GB.hover = null, GB.drag = JB && {
            view: jB,
            ground: JB,
            corner: [GB.corner[0], GB.corner[2]],
            level: yB
          }
        }, this.dragTo = (BB, OB) => {
          const GB = this.placing.drag,
            YB = GB && jG(GB.view, BB, OB, GB.level);
          null !== GB && null !== YB && this.moveTo(GB.corner[0] + Math.round(YB[0] - GB.ground[0]), GB.corner[1] + Math.round(YB[1] - GB.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const BB = this.view;
          BB.waiting || (BB.blocked ? this.tM({
            ...BB,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const BB = this.placing,
            {
              id: OB,
              rotation: GB,
              corner: YB
            } = BB;
          this.api.sendCommand(`${DB} place ${OB} ${YB.join(" ")} ${GB}`), BB.sent = {
            atMs: performance.now(),
            corner: [...YB],
            rotation: GB,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${DB} preview off`))
        }, this.chunkWatch = new bO(BB), this.meshes = new BG(BB)
      }
      getView() {
        return this.view
      }
      kP() {
        const BB = this.placing;
        null !== BB && (null !== BB.sent && !BB.sent.timedOut && performance.now() - BB.sent.atMs > 3e3 ? (BB.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(BB) || this.chunkWatch.changed() || this.view.settled !== PG(BB, this.view.blocked)) && this.update())
      }
      afterRender(BB) {
        ! function(BB, OB) {
          for (let GB = 0; GB < 3; GB++) OB.eye[GB] = BB.cameraPosition[GB], OB.forward[GB] = BB.cameraDirection[GB];
          OB.tanHalfFovX = BB.tanHalfFovX, OB.tanHalfFovY = BB.tanHalfFovY
        }(BB, this.camera);
        const OB = this.placing;
        null !== OB && null !== OB.hover && this.moveCentreTo(this.camera, OB.hover[0], OB.hover[1])
      }
      nP(BB) {
        const OB = this.placing;
        if (null === OB || null === OB.sent || "active" !== BB[0]) return;
        const {
          sent: GB
        } = OB, [, YB, DB, QB, oB, jB, yB] = BB;
        DB && YB === OB.id && yB === GB.rotation && QB === GB.corner[0] && oB === GB.corner[1] && jB === GB.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(BB) {
        let [OB, , GB] = BB;
        const YB = this.api.getTargetedBlock();
        if (null === YB) return null;
        const [DB, , QB] = YB.position;
        return [DB - Math.floor(OB / 2), QB - Math.floor(GB / 2)]
      }
      playerLevel() {
        var BB;
        const [OB, GB, YB] = this.api.pR(this.localPlayerId);
        if (null !== (BB = this.api.getLocalPlayerMovement()) && void 0 !== BB && BB.onGround) return Math.ceil(GB - .01);
        const [DB, QB, oB] = [Math.floor(OB), Math.floor(GB), Math.floor(YB)];
        for (let jB = QB; jB >= QB - 2; jB--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(DB, jB, oB))) return jB + 1;
        return QB
      }
      followPlayerLevel(BB) {
        if (zG(BB)) return !1;
        const OB = this.playerLevel();
        return OB !== BB.corner[1] && (BB.corner[1] = OB, !0)
      }
      moveCentreTo(BB, OB, GB) {
        const YB = this.placing,
          DB = jG(BB, OB, GB, YB.corner[1]);
        if (null !== DB) {
          const [BB, , OB] = vB(YB.id, YB.rotation).size;
          this.moveTo(Math.round(DB[0] - BB / 2), Math.round(DB[1] - OB / 2))
        }
      }
      moveTo(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const YB = this.placing;
        if (zG(YB)) return;
        const [DB, QB, oB] = YB.corner;
        if (this.centreOnPlot(DB, oB) && !this.centreOnPlot(BB, OB, GB))
          if (this.centreOnPlot(BB, oB, GB)) OB = oB;
          else {
            if (!this.centreOnPlot(DB, OB, GB)) return;
            BB = DB
          } BB === DB && OB === oB && GB === YB.rotation || (YB.rotation = GB, YB.corner = [BB, QB, OB], YB.moved = !0, YB.stillSinceMs = performance.now(), this.update())
      }
      centreOnPlot(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: YB,
          corner: DB
        } = this.placing, [QB, , oB] = vB(YB, GB).size;
        return this.api.canModifyBlockAt(BB + Math.floor(QB / 2), DB[1], OB + Math.floor(oB / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.tM(null)
      }
      update() {
        const {
          id: BB,
          rotation: OB,
          corner: GB,
          refusals: YB
        } = this.placing, DB = new tO, QB = [];
        let oB = !1,
          jB = 0;
        for (const {
            offset: PB,
            block: zB
          }
          of vB(BB, OB).cells) {
          const [BB, OB, YB] = [GB[0] + PB[0], GB[1] + PB[1], GB[2] + PB[2]];
          QB.push(BB, OB, YB);
          const yB = !this.api.canModifyBlockAt(BB, OB, YB),
            JB = this.api.getBlockId(BB, OB, YB),
            MB = !iO(JB) && !FO(this.api.blockNameToBlockId(zB), JB);
          oB ||= yB, jB += MB ? 1 : 0, yB || MB ? DB.add(BB, OB, YB, xO, sO) : DB.add(BB, OB, YB, gO(zB), JG, eO(zB))
        }
        this.chunkWatch.watch(QB), this.meshes.show(DB.toArray());
        const yB = this.view,
          JB = zG(this.placing),
          MB = PG(this.placing, oB);
        (null === yB || void 0 === yB ? void 0 : yB.id) === BB && yB.blocked === oB && yB.toClear === jB && yB.waiting === JB && yB.refusals === YB && yB.settled === MB || this.tM({
          id: BB,
          blocked: oB,
          toClear: jB,
          waiting: JB,
          refusals: YB,
          settled: MB
        })
      }
      tM(BB) {
        this.view = BB, nB.o.tM(yG, BB, !0)
      }
    }

    function PG(BB, OB) {
      let {
        moved: GB,
        stillSinceMs: YB
      } = BB;
      return !OB && performance.now() - YB >= (GB ? 1500 : 6e3)
    }

    function zG(BB) {
      let {
        sent: OB
      } = BB;
      return null !== OB && !OB.timedOut
    }
    var lG = GB(4956);
    class pG {
      constructor(BB) {
        this.placement = BB, this.press = null
      }
      down(BB) {
        if (null !== this.press) return !1;
        const {
          id: OB,
          mouse: GB,
          x: YB,
          y: DB,
          atMs: QB
        } = BB;
        return this.press = {
          id: OB,
          mouse: GB,
          x: YB,
          y: DB,
          atMs: QB,
          moved: !1
        }, GB || this.placement.beginDrag(BB.ndcX, BB.ndcY), !0
      }
      move(BB) {
        const OB = this.press;
        null !== OB && OB.id === BB.id && (OB.moved ||= Math.hypot(BB.x - OB.x, BB.y - OB.y) > 8), BB.mouse ? this.placement.hoverAt(BB.ndcX, BB.ndcY) : (null === OB || void 0 === OB ? void 0 : OB.id) === BB.id && this.placement.dragTo(BB.ndcX, BB.ndcY)
      }
      up(BB) {
        const OB = this.press;
        (null === OB || void 0 === OB ? void 0 : OB.id) === BB.id && (this.move(BB), this.end(), !OB.moved && (OB.mouse || BB.atMs - OB.atMs <= 250) && this.placement.tap())
      }
      cancel(BB) {
        var OB;
        (null === (OB = this.press) || void 0 === OB ? void 0 : OB.id) === BB && this.end()
      }
      leave(BB) {
        let {
          id: OB,
          mouse: GB
        } = BB;
        GB && this.placement.endHover(), this.cancel(OB)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }
    const qG = "PlotsPlacementLayer";

    function ZG(BB) {
      let {
        placement: OB
      } = BB;
      return null === (0, yB.i)(yG, OB.getView()) ? null : (0, LB.jsx)(NG, {
        placement: OB
      })
    }

    function NG(BB) {
      let {
        placement: OB
      } = BB;
      (0, lG.e)(!0, !0, qG);
      const GB = (0, QB.useMemo)((() => new pG(OB)), [OB]);
      return (0, LB.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: BB => {
          "mouse" === BB.pointerType && 0 !== BB.button || !GB.down(RG(BB)) || BB.currentTarget.setPointerCapture(BB.pointerId)
        },
        onPointerMove: BB => {
          GB.move(RG(BB))
        },
        onPointerUp: BB => {
          GB.up(RG(BB))
        },
        onPointerCancel: BB => {
          GB.cancel(BB.pointerId)
        },
        onLostPointerCapture: BB => {
          GB.cancel(BB.pointerId)
        },
        onPointerLeave: BB => {
          GB.leave(RG(BB))
        },
        "aria-hidden": !0
      })
    }

    function RG(BB) {
      const {
        left: OB,
        top: GB,
        width: YB,
        height: DB
      } = BB.currentTarget.getBoundingClientRect();
      return {
        id: BB.pointerId,
        mouse: "mouse" === BB.pointerType,
        x: BB.clientX,
        y: BB.clientY,
        ndcX: (BB.clientX - OB) / YB * 2 - 1,
        ndcY: 1 - (BB.clientY - GB) / DB * 2,
        atMs: BB.timeStamp
      }
    }

    function WG() {
      return (0, ZO.n)().some((BB => BB !== ZO.b && BB !== qG))
    }
    const AG = 2500;

    function VG(BB) {
      let {
        hud: OB,
        guide: GB,
        tracker: YB,
        placement: DB,
        children: oB
      } = BB;
      const {
        t: PB
      } = (0, MB.H)(), {
        isTouchScreen: zB
      } = (0, jB.o)(["isTouchScreen"]), lB = (0, yB.i)(GO, OB.getGuide()), pB = (0, yB.i)(OO, OB.getPlot()), qB = (0, yB.i)(sB, YB.get()), ZB = function(BB) {
        const {
          openInGameMenuName: OB,
          openEverythingMenuName: GB,
          loadingOverlayVisible: YB
        } = (0, jB.o)(["openInGameMenuName", "openEverythingMenuName", "loadingOverlayVisible"]), DB = (0, NO.d)(), [oB, JB] = (0, QB.useState)(WG);
        (0, QB.useEffect)((() => {
          const BB = () => {
            JB(WG())
          };
          BB();
          const OB = (0, ZO.k)(BB),
            GB = (0, ZO.j)(BB);
          return () => {
            OB(), GB()
          }
        }), []);
        const MB = (0, yB.i)(yG, BB.getView()),
          PB = "clientGame" === OB;
        return {
          hudHidden: DB || YB,
          journalOpen: PB,
          covered: oB || null !== GB || null !== OB && !PB,
          placing: null === MB ? null : MB.settled ? "placeBuild" : "placeSpot"
        }
      }(DB), NB = function(BB, OB, GB) {
        return "none" === BB[0] || GB.hudHidden || GB.journalOpen || GB.covered ? null : null !== GB.placing ? GB.placing : null !== OB ? "build" : "choose" === BB[1] ? "openJournal" : null
      }(lB, null === qB ? null : qB.id, ZB), RB = function() {
        const [BB, OB] = (0, QB.useState)(null), [GB, YB] = (0, QB.useState)(!1);
        return (0, yB.f)(YO, (() => {
          OB(performance.now())
        })), (0, QB.useEffect)((() => {
          if (null === BB) return;
          const OB = window.setTimeout((() => {
              YB(!0)
            }), AG),
            GB = window.setTimeout((() => {
              YB(!1)
            }), 7500);
          return () => {
            window.clearTimeout(OB), window.clearTimeout(GB)
          }
        }), [BB]), GB
      }() && !ZB.hudHidden && !ZB.covered && !ZB.journalOpen && null === ZB.placing, [WB, AB] = (0, QB.useState)(!1);
      (0, QB.useEffect)((() => {
        ZB.journalOpen && AB(!0)
      }), [ZB.journalOpen]);
      const [VB, nB] = (0, QB.useState)(null), [UB, fB] = (0, QB.useState)(null), [kB, dB] = (0, QB.useState)(null), KB = (0, QB.useMemo)((() => ({
        hint: NB,
        journalRef: nB,
        placementCardRef: fB,
        buildRef: dB
      })), [NB]), uB = "plot" === pB[0] && "own" === pB[5], mB = zB && !WB && uB ? {
        onSkip: GB.skip
      } : null;
      return (0, LB.jsxs)(SB.Provider, {
        value: KB,
        children: [oB, "openJournal" === NB && null !== VB && (0, LB.jsx)(MO, {
          target: VB,
          placement: "left",
          spotlight: mB,
          children: zB ? PB("plotsGame:guideOpenJournal") : PB("plotsGame:guideOpenJournalKeys", {
            key: (0, JB.l)(gB)
          })
        }), "placeSpot" === NB && null !== UB && (0, LB.jsxs)(LB.Fragment, {
          children: [zB && (0, LB.jsx)(qO, {}), (0, LB.jsx)(MO, {
            target: UB,
            placement: "top",
            children: PB(zB ? "plotsGame:guidePlaceSpotTouch" : "plotsGame:guidePlaceSpotMouse")
          })]
        }), "placeBuild" === NB && null !== kB && null !== UB && (0, LB.jsx)(MO, {
          target: zB ? kB : UB,
          placement: "top",
          children: PB(zB ? "plotsGame:guidePlaceBuildTouch" : "plotsGame:guidePlaceBuildMouse")
        }), "build" === NB && null !== qB && (0, LB.jsx)(lO, {
          progress: qB,
          guide: GB
        }), RB && null !== VB && (0, LB.jsx)(MO, {
          target: VB,
          placement: "left",
          children: PB("plotsGame:guideMoreBuilds")
        })]
      })
    }
    var SG = GB(39154),
      nG = GB(39157);
    class UG {
      constructor(BB, OB, GB) {
        this.api = BB, this.localPlayerId = OB, this.nextCell = GB, this.hand = null, this.skip = () => {
          this.api.sendCommand("plotsguide skip")
        }, this.bindHand = BB => {
          this.hand = BB
        }
      }
      afterRender(BB) {
        const OB = this.hand;
        if (null === OB) return;
        const GB = this.nextCell.get();
        if (null === GB) return void(0, SG.f)(OB, !0);
        const YB = (0, nG.b)(OB, BB, this.api.getPositionView(this.localPlayerId), GB, 1, 40);
        null !== YB && (0, SG.d)(OB, Math.round(100 * YB.x) / 100, Math.round(100 * YB.y) / 100)
      }
    }
    var fG = GB(1485),
      kG = GB(4946),
      dG = GB(1108);
    const KG = {
        farm_hut: GB.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
        farm_house: GB.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
        farm_barn: GB.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
        rusticHome_tent: GB.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
        rusticHome_cabin: GB.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
        rusticHome_house: GB.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
        market_stand: GB.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
        market_stall: GB.p + "static/media/market_stall.9a562807f9dff591618a.webp",
        market_shop: GB.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
        castle_wall: GB.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
        castle_gate: GB.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
        castle_tower: GB.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
      },
      uG = ["plotsGame:guideEffortQuick", "plotsGame:guideEffortMedium", "plotsGame:guideEffortBigger"],
      mG = ["market_stand", "rusticHome_tent", "farm_hut"].map((BB => ({
        id: BB,
        blocks: vB(BB, 0).cells.length
      }))).sort(((BB, OB) => BB.blocks - OB.blocks)).map(((BB, OB) => ({
        ...BB,
        effortKey: uG[OB]
      })));

    function IG(BB) {
      let {
        onBuild: OB
      } = BB;
      const {
        t: GB
      } = (0, MB.H)();
      return (0, LB.jsx)("div", {
        className: "PlotsJournalBookPages PlotsGuideChooserCover",
        children: (0, LB.jsxs)("div", {
          className: "PlotsGuideChooser",
          children: [(0, LB.jsx)("h3", {
            className: "PlotsGuideChooserTitle",
            children: GB("plotsGame:guidePickTitle")
          }), (0, LB.jsxs)("p", {
            className: "PlotsGuideChooserNote",
            children: [(0, LB.jsx)("img", {
              src: oO,
              alt: "",
              draggable: !1
            }), GB("plotsGame:guidePickNote")]
          }), (0, LB.jsx)("div", {
            className: "PlotsGuideChooserStarters",
            children: mG.map((BB => {
              let {
                id: YB,
                blocks: DB,
                effortKey: QB
              } = BB;
              return (0, LB.jsxs)("article", {
                className: "PlotsGuideStarter",
                children: [(0, LB.jsx)("button", {
                  type: "button",
                  className: "PlotsGuideStarterSketch",
                  tabIndex: -1,
                  "aria-hidden": !0,
                  "data-pad-ignore": !0,
                  onClick: () => {
                    OB(YB)
                  },
                  children: (0, LB.jsx)("img", {
                    src: KG[YB],
                    alt: "",
                    draggable: !1
                  })
                }), (0, LB.jsxs)("div", {
                  className: "PlotsGuideStarterInfo",
                  children: [(0, LB.jsxs)("span", {
                    className: "PlotsGuideStarterText",
                    children: [(0, LB.jsx)("span", {
                      className: "PlotsGuideStarterName",
                      children: GB(dB(YB).displayName.translationKey)
                    }), (0, LB.jsx)("span", {
                      className: "PlotsGuideStarterEffort",
                      children: GB(QB)
                    }), (0, LB.jsx)("span", {
                      className: "PlotsGuideStarterBlocks",
                      children: GB("plotsGame:journalBlocks", {
                        blocks: String(DB)
                      })
                    })]
                  }), (0, LB.jsx)(fG.q, {
                    onClick: () => {
                      OB(YB)
                    },
                    children: GB("plotsGame:placementBuild")
                  })]
                })]
              }, YB)
            }))
          })]
        })
      })
    }

    function FG(BB) {
      let {
        direction: OB,
        disabled: GB,
        onTurn: YB
      } = BB;
      const {
        t: DB
      } = (0, MB.H)();
      return (0, LB.jsx)("div", {
        className: zB()("PlotsJournalArrow", OB),
        children: (0, LB.jsx)(fG.f, {
          disabled: GB,
          ariaLabel: DB("Forward" === OB ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            YB(OB)
          },
          children: (0, LB.jsx)(ZB.b, {
            name: "angle-up"
          })
        })
      })
    }
    const iG = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function LG(BB) {
      let {
        page: OB,
        building: GB,
        onBuild: YB,
        onPutAway: DB
      } = BB;
      const {
        t: QB
      } = (0, MB.H)(), {
        displayName: oB,
        tier: jB
      } = dB(OB.id), yB = vB(OB.id, 0).cells.length, JB = "locked" === OB.state, PB = GB ? fG.f : fG.q;
      return (0, LB.jsxs)("article", {
        className: zB()("PlotsJournalPage", {
          Locked: JB
        }),
        children: [(0, LB.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: QB(oB.translationKey)
        }), (0, LB.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [QB(iG[jB]), " \xb7 ", QB("plotsGame:journalBlocks", {
            blocks: String(yB)
          })]
        }), (0, LB.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [kB.map((BB => (0, LB.jsx)("img", {
            className: zB()({
              Shown: BB === OB.id
            }),
            src: KG[BB],
            alt: "",
            draggable: !1
          }, BB))), "completed" === OB.state && (0, LB.jsx)("span", {
            className: "PlotsJournalStamp",
            children: QB("plotsGame:journalBuilt")
          }), JB && (0, LB.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, LB.jsx)(ZB.b, {
              name: "lock"
            })
          })]
        }), null !== OB.note && (0, LB.jsx)("p", {
          className: "PlotsJournalNote",
          children: QB(OB.note)
        }), (0, LB.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === OB.state && (0, LB.jsx)("p", {
            className: "PlotsJournalHint",
            children: QB("plotsGame:journalLocked", {
              name: QB(dB(OB.unlockedBy).displayName.translationKey)
            })
          }), OB.active && (0, LB.jsxs)(LB.Fragment, {
            children: [(0, LB.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: QB("plotsGame:journalBuilding")
            }), (0, LB.jsx)(fG.j, {
              onClick: DB,
              children: QB("plotsGame:journalPutAway")
            })]
          }), !JB && !OB.active && (0, LB.jsx)(PB, {
            onClick: () => {
              YB(OB.id)
            },
            children: QB("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function gG(BB) {
      let {
        className: OB,
        page: GB,
        hidden: YB,
        building: DB,
        journal: QB
      } = BB;
      return (0, LB.jsxs)("div", {
        ref: BB => {
          null !== BB && (BB.inert = YB)
        },
        className: zB()("PlotsJournalSide", OB),
        children: [void 0 !== GB && (0, LB.jsx)(LG, {
          page: GB,
          building: DB,
          onBuild: QB.build,
          onPutAway: QB.putAway
        }), void 0 === GB && (0, LB.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var rG = GB(1998);

    function XG(BB) {
      return Math.cos((0, rG.h)(BB))
    }

    function wG(BB) {
      return (0, rG.B)(Math.acos(nO.b.clamp(BB, -1, 1)))
    }

    function EG(BB, OB, GB, YB, DB) {
      const QB = Math.abs(OB - BB),
        oB = (0, rG.B)(DB / (GB * Math.abs(Math.sin((0, rG.h)(BB))))),
        jB = 450 * Math.min(1, QB / YB),
        yB = oB > 0 ? 3 * QB / oB : 1 / 0;
      return Math.round(Math.max(120, Math.min(jB, yB)))
    }
    class cG {
      constructor() {
        this.samples = []
      }
      add(BB, OB) {
        for (this.samples.push({
            x: BB,
            at: OB
          }); OB - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const BB = this.samples[0],
          OB = this.samples[this.samples.length - 1];
        return OB.at > BB.at ? (OB.x - BB.x) / (OB.at - BB.at) : 0
      }
    }

    function hG(BB) {
      return wG(new DOMMatrixReadOnly(getComputedStyle(BB).transform).m11)
    }

    function aG(BB, OB) {
      BB.style.transform = `rotateY(${-OB}deg)`, BB.classList.add("Turning")
    }

    function eG(BB, OB, GB) {
      const [YB, DB] = (0, QB.useState)(GB), oB = (0, QB.useRef)(null), jB = (0, QB.useRef)(null), yB = (0, QB.useRef)({
        Forward: null,
        Back: null
      }), JB = OB ? 2 : 1, MB = OB ? 180 : 90, PB = YB - YB % JB, zB = PB > 0, lB = PB + JB < BB, pB = (0, QB.useCallback)((() => {
        const BB = jB.current;
        return null === BB ? PB : (jB.current = null, BB.animation.cancel(), (OB = yB.current[BB.direction]).style.transform = "", OB.classList.remove("Turning"), null === BB.next ? PB : (DB(BB.next), BB.next));
        var OB
      }), [PB]), qB = (0, QB.useCallback)(((BB, OB, GB, YB) => {
        const DB = yB.current[BB],
          QB = hG(DB),
          oB = OB === ("Forward" === BB) ? MB : 0;
        aG(DB, oB);
        const PB = DB.animate([{
          transform: `rotateY(${-QB}deg)`
        }, {
          transform: `rotateY(${-oB}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : EG(QB, oB, DB.offsetWidth, MB, oB > QB ? -GB : GB),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        jB.current = {
          direction: BB,
          animation: PB,
          next: OB ? YB + ("Forward" === BB ? JB : -JB) : null
        }, PB.onfinish = () => {
          var BB;
          (null === (BB = jB.current) || void 0 === BB ? void 0 : BB.animation) === PB && pB()
        }
      }), [JB, MB, pB]), ZB = (0, QB.useCallback)((OB => {
        if (null !== oB.current) return;
        const GB = pB();
        ("Forward" === OB ? GB + JB < BB : GB > 0) && qB(OB, !0, 0, GB)
      }), [pB, qB, JB, BB]);
      (0, QB.useEffect)((() => () => {
        var BB;
        null === (BB = jB.current) || void 0 === BB || BB.animation.cancel()
      }), []), (0, QB.useEffect)((() => {
        const BB = BB => {
          var OB;
          BB.pointerId !== (null === (OB = oB.current) || void 0 === OB ? void 0 : OB.pointerId) || oB.current.following || (oB.current = null)
        };
        return window.addEventListener("pointerup", BB), () => {
          window.removeEventListener("pointerup", BB)
        }
      }), []);
      const NB = (BB, OB, GB) => {
          const YB = function(BB, OB, GB, YB) {
            return (BB < 0 ? GB : YB) ? nO.b.clampAbs(BB, OB) : Math.sign(BB) * OB * (1 - 1 / (.55 * Math.abs(BB) / OB + 1))
          }(BB.base + GB, JB * BB.width, lB, zB);
          return "Forward" === OB ? Math.min(YB, 0) : Math.max(YB, 0)
        },
        RB = (BB, OB) => {
          const GB = oB.current;
          if (oB.current = null, null === GB.direction) return;
          GB.speed.add(BB, OB);
          const YB = GB.speed.get(),
            DB = NB(GB, GB.direction, BB - GB.x);
          qB(GB.direction, null !== function(BB, OB, GB, YB, DB) {
            if (Math.abs(OB) >= .3 ? Math.sign(OB) !== Math.sign(BB) : Math.abs(BB) < .5 * GB) return null;
            const QB = BB < 0 ? "Forward" : "Back";
            return ("Forward" === QB ? YB : DB) ? QB : null
          }(DB, YB, JB * GB.width, lB, zB), YB, PB)
        },
        WB = {
          onPointerDown: BB => {
            var OB;
            if (!BB.isPrimary || 0 !== BB.button || null !== jB.current && null !== BB.target.closest("button")) return;
            const GB = new cG;
            GB.add(BB.clientX, BB.timeStamp);
            const YB = yB.current.Forward.offsetWidth,
              DB = jB.current;
            jB.current = null;
            let QB = 0;
            if (null !== DB) {
              const OB = yB.current[DB.direction],
                GB = hG(OB);
              DB.animation.cancel(), aG(OB, GB), QB = function(BB, OB, GB, YB) {
                return (BB < 0 ? GB : YB) ? BB : Math.sign(BB) * OB * (1 / (1 - Math.min(Math.abs(BB) / OB, .99)) - 1) / .55
              }(function(BB, OB, GB, YB) {
                return GB * (XG(OB) - XG("Forward" === BB ? 0 : YB))
              }(DB.direction, GB, YB, MB), JB * YB, lB, zB), BB.currentTarget.setPointerCapture(BB.pointerId)
            }
            oB.current = {
              pointerId: BB.pointerId,
              x: BB.clientX,
              y: BB.clientY,
              base: QB,
              width: YB,
              following: null !== DB,
              direction: null !== (OB = null === DB || void 0 === DB ? void 0 : DB.direction) && void 0 !== OB ? OB : null,
              speed: GB
            }
          },
          onPointerMove: BB => {
            const OB = oB.current;
            if (null === OB || BB.pointerId !== OB.pointerId) return;
            if (0 === BB.buttons) return void RB(BB.clientX, BB.timeStamp);
            const GB = BB.clientX - OB.x;
            !OB.following && function(BB, OB) {
              return Math.abs(BB) > 8 && Math.abs(BB) > Math.abs(OB)
            }(GB, BB.clientY - OB.y) && (OB.following = !0, OB.direction = GB < 0 ? "Forward" : "Back", BB.currentTarget.setPointerCapture(BB.pointerId)), null !== OB.direction && (OB.speed.add(BB.clientX, BB.timeStamp), aG(yB.current[OB.direction], function(BB, OB, GB, YB) {
              const DB = GB * XG("Forward" === BB ? 0 : YB) + OB;
              return nO.b.clamp(wG(DB / GB), 0, YB)
            }(OB.direction, NB(OB, OB.direction, GB), OB.width, MB)))
          },
          onPointerUp: BB => {
            var OB;
            BB.pointerId === (null === (OB = oB.current) || void 0 === OB ? void 0 : OB.pointerId) && RB(BB.clientX, BB.timeStamp)
          },
          onPointerCancel: BB => {
            const OB = oB.current;
            BB.pointerId === (null === OB || void 0 === OB ? void 0 : OB.pointerId) && (oB.current = null, null !== OB.direction && qB(OB.direction, !1, 0, PB))
          }
        };
      return {
        first: PB,
        step: JB,
        canGoBack: zB,
        canGoForward: lB,
        turnPage: ZB,
        leaves: yB,
        pagesHandlers: WB
      }
    }

    function TG(BB, OB) {
      return BB > OB && BB >= 600
    }

    function bG(BB) {
      let {
        journal: OB,
        hud: GB,
        guide: YB
      } = BB;
      const {
        t: DB
      } = (0, MB.H)(), jB = (0, yB.i)(FB, OB.getPages()), JB = (0, yB.i)(GO, GB.getGuide()), PB = jB.find((BB => BB.active)), lB = (pB = JB, qB = void 0 === PB ? null : PB.id, "active" === pB[0] && null === qB);
      var pB, qB;
      const ZB = (0, dG.h)(TG),
        {
          first: NB,
          step: RB,
          canGoBack: VB,
          canGoForward: SB,
          turnPage: nB,
          leaves: UB,
          pagesHandlers: fB
        } = eG(jB.length, ZB, (() => function(BB) {
          const OB = BB.findIndex((BB => BB.active));
          return -1 !== OB ? OB : Math.max(0, BB.findIndex((BB => "open" === BB.state)))
        }(jB)));
      (0, QB.useEffect)((() => {
        OB.onOpened()
      }), [OB]), (0, WB.b)((BB => !lB && ("ArrowLeft" === BB.code || "ArrowRight" === BB.code) && !(0, AB.isTypingInInput)()), (BB => {
        BB.stopPropagation(), nB("ArrowLeft" === BB.code ? "Back" : "Forward")
      }));
      const kB = void 0 !== PB,
        dB = (BB, GB, YB) => (0, LB.jsx)(gG, {
          className: BB,
          page: GB >= 0 && GB < jB.length ? jB[GB] : void 0,
          hidden: YB,
          building: kB,
          journal: OB
        });
      return (0, LB.jsx)(kG.d, {
        close: oB.i,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, LB.jsxs)("section", {
          className: zB()("PlotsJournal", {
            Spread: ZB
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": DB("plotsGame:journalTitle"),
          children: [(0, LB.jsx)(fG.m, {
            className: "PlotsJournalClose",
            onClick: oB.i
          }), "active" === JB[0] && (0, LB.jsx)(JO, {
            className: "PlotsJournalGuideSkip",
            onSkip: YB.skip
          }), lB && (0, LB.jsx)(IG, {
            onBuild: OB.build
          }), !lB && (0, LB.jsx)(FG, {
            direction: "Back",
            disabled: !VB,
            onTurn: nB
          }), (0, LB.jsx)("div", {
            hidden: lB,
            className: "PlotsJournalBookPages",
            ...fB,
            children: (0, LB.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [ZB && dB("Left", NB - 2, !0), dB("Right", NB + 2 * RB - 1, !0), (0, LB.jsxs)("div", {
                ref: BB => {
                  UB.current.Back = BB
                },
                className: "PlotsJournalLeaf Back",
                children: [dB("Recto", NB - 1, !0), ZB && dB("Verso", NB, !1)]
              }), (0, LB.jsxs)("div", {
                ref: BB => {
                  UB.current.Forward = BB
                },
                className: "PlotsJournalLeaf Forward",
                children: [dB("Recto", NB + RB - 1, !1), ZB && dB("Verso", NB + RB, !0)]
              })]
            })
          }), !lB && (0, LB.jsx)(FG, {
            direction: "Forward",
            disabled: !SB,
            onTurn: nB
          })]
        })
      })
    }

    function CG(BB, OB, GB, YB, DB) {
      const QB = Math.hypot(...OB.dir);
      if (!Number.isFinite(QB) || 0 === QB) return -1;
      const {
        from: oB,
        reach: jB,
        solid: yB
      } = OB, JB = [OB.dir[0] / QB, OB.dir[1] / QB, OB.dir[2] / QB], MB = null === yB ? jB : Math.min(jB, function(BB, OB, GB) {
        const YB = HG(BB, OB, GB);
        if (YB !== 1 / 0) return YB;
        return (GB[0] + .5 - BB[0]) * OB[0] + (GB[1] + .5 - BB[1]) * OB[1] + (GB[2] + .5 - BB[2]) * OB[2]
      }(oB, JB, yB) + .75);
      let PB = -1,
        zB = 1 / 0,
        lB = 1 / 0;
      for (let pB = 0; pB < BB.length; pB += 4) {
        const OB = [BB[pB], BB[pB + 1], BB[pB + 2]],
          QB = DB(pB) ? jB : MB;
        let yB = -1,
          qB = HG(oB, JB, OB);
        if (qB > QB) {
          const BB = [OB[0] + .5 - oB[0], OB[1] + .5 - oB[1], OB[2] + .5 - oB[2]];
          if (qB = BB[0] * JB[0] + BB[1] * JB[1] + BB[2] * JB[2], qB <= 0 || qB > QB) continue;
          if (yB = Math.hypot(BB[0] - qB * JB[0], BB[1] - qB * JB[1], BB[2] - qB * JB[2]), yB > .7 || !YB(pB)) continue
        }(yB < zB || yB === zB && qB < lB) && GB(pB) && (PB = pB, zB = yB, lB = qB)
      }
      return PB
    }

    function HG(BB, OB, GB) {
      let YB = 0,
        DB = 1 / 0;
      for (let QB = 0; QB < 3; QB++) {
        const oB = GB[QB] - BB[QB];
        if (0 === OB[QB]) {
          if (oB > 0 || oB + 1 < 0) return 1 / 0;
          continue
        }
        const jB = oB / OB[QB],
          yB = (oB + 1) / OB[QB];
        YB = Math.max(YB, Math.min(jB, yB)), DB = Math.min(DB, Math.max(jB, yB))
      }
      return YB <= DB ? YB : 1 / 0
    }
    var vG = GB(37584),
      sG = GB(38739);
    const xG = [1, 1, 1];
    class tG {
      constructor(BB) {
        this.api = BB, this.meshes = null, this.shown = null
      }
      show(BB) {
        if (!(0, vG.d)(BB, this.shown))
          if (this.shown = null === BB ? null : [BB[0], BB[1], BB[2]], null !== this.meshes)
            for (const OB of this.meshes) this.api.setGameMesh(OB, null === BB ? {
              visible: !1
            } : {
              anchor: BB,
              visible: !0
            });
          else if (null !== BB) {
          const OB = [sG.f, sG.f, sG.f, 0, 0, 0];
          this.meshes = [this.build([OB], sG.j, BB), this.build((0, sG.d)(), sG.o, BB)]
        }
      }
      dispose() {
        for (const OB of null !== (BB = this.meshes) && void 0 !== BB ? BB : []) {
          var BB;
          this.api.disposeGameMesh(OB)
        }
        this.meshes = null, this.shown = null
      }
      build(BB, OB, GB) {
        const YB = [],
          DB = [];
        for (const [QB, oB, jB, yB, JB, MB] of BB)(0, CO.c)(YB, DB, [yB + .5, JB + .5, MB + .5], [QB, oB, jB]);
        return this.api.createGameMesh({
          positions: YB,
          indices: DB
        }, {
          rgb: xG,
          alpha: OB,
          onTop: !0
        }, GB)
      }
    }

    function BY(BB, OB) {
      const GB = TO.f.sZ / 2;
      return BB[0] < OB[0] + GB && BB[0] + 1 > OB[0] - GB && BB[1] < OB[1] + TO.f.xZ && BB[1] + 1 > OB[1] && BB[2] < OB[2] + GB && BB[2] + 1 > OB[2] - GB
    }

    function OY(BB, OB) {
      return BB.getClientOption(OB, "blockReach") + 1
    }
    class GY {
      constructor(BB, OB, GB) {
        this.api = BB, this.localPlayerId = OB, this.foreseen = GB, this.cells = [], this.playerCells = [], this.next = null
      }
      get() {
        return this.next
      }
      setCells(BB) {
        this.cells = BB
      }
      playerMoved() {
        return YY(this.api.getPositionView(this.localPlayerId)).some(((BB, OB) => BB !== this.playerCells[OB]))
      }
      pl(BB) {
        const OB = this.api.getPositionView(this.localPlayerId);
        return this.playerCells.splice(0, 1 / 0, ...YY(OB)), this.next = this.pickFrom(null === BB ? [OB[0], OB[1] + 1, OB[2]] : (0, vG.c)(BB), (() => !1)), this.next
      }
      pickFrom(BB, OB) {
        const GB = this.api.getPositionView(this.localPlayerId),
          YB = [GB[0], GB[1] + TO.f.xZ * TO.f.playerEyeToHeightRatio, GB[2]],
          DB = OY(this.api, this.localPlayerId),
          {
            cells: QB
          } = this,
          oB = BB => [QB[BB], QB[BB + 1], QB[BB + 2]],
          jB = function(BB, OB, GB, YB, DB, QB) {
            let oB = -1,
              jB = -1,
              yB = 1 / 0;
            for (let JB = 0; JB < BB.length; JB += OB) {
              const OB = (QB(JB) ? 2 : 0) + (YB(JB) ? 1 : 0);
              if (OB < jB || DB(JB)) continue;
              const MB = (BB[JB] + .5 - GB[0]) ** 2 + (BB[JB + 1] + .5 - GB[1]) ** 2 + (BB[JB + 2] + .5 - GB[2]) ** 2;
              (OB > jB || MB < yB) && (oB = JB, jB = OB, yB = MB)
            }
            return oB
          }(QB, 4, BB, (BB => 1 === QB[BB + 3]), (BB => {
            const YB = oB(BB);
            return BY(YB, GB) || this.foreseen.has(YB.join()) || OB(YB)
          }), (BB => function(BB, OB, GB) {
            return (OB[0] + .5 - BB[0]) ** 2 + (OB[1] + .5 - BB[1]) ** 2 + (OB[2] + .5 - BB[2]) ** 2 <= GB ** 2
          }(YB, oB(BB), DB)));
        return -1 === jB ? null : oB(jB)
      }
    }

    function YY(BB) {
      let [OB, GB, YB] = BB;
      const DB = TO.f.sZ / 2;
      return [Math.floor(OB), Math.floor(GB), Math.floor(YB), Math.floor(OB - DB), Math.floor(OB + DB), Math.floor(GB + TO.f.xZ), Math.floor(YB - DB), Math.floor(YB + DB)]
    }
    class DY {
      constructor(BB, OB, GB) {
        this.api = BB, this.localPlayerId = OB, this.pickNext = GB, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(BB) {
        const [OB, , GB] = BB.cameraDirection, YB = Math.hypot(OB, GB);
        YB > .001 && (this.heading = [OB / YB, GB / YB])
      }
      tapped(BB, OB, GB) {
        const YB = OY(this.api, this.localPlayerId),
          {
            origin: DB,
            direction: QB
          } = this.api.getActionRay(),
          oB = [...DB],
          jB = [
            [oB, [oB[0] + QB[0] * YB, oB[1] + QB[1] * YB, oB[2] + QB[2] * YB]]
          ];
        null !== BB && jB.push([oB, (0, vG.c)(BB)]), this.tap = {
          lines: jB,
          next: OB,
          ms: GB
        }
      }
      filled(BB, OB) {
        this.tap = null, this.turnFrom(BB, OB), this.retry(OB)
      }
      arrived(BB, OB) {
        const {
          tap: GB
        } = this;
        if (null === GB || OB - GB.ms > 1500) return null;
        const YB = (0, vG.c)(BB);
        return (0, vG.d)(GB.next, BB) || GB.lines.some((BB => {
          let [OB, GB] = BB;
          return function(BB, OB, GB) {
            const YB = [GB[0] - OB[0], GB[1] - OB[1], GB[2] - OB[2]],
              DB = [BB[0] - OB[0], BB[1] - OB[1], BB[2] - OB[2]],
              QB = YB[0] ** 2 + YB[1] ** 2 + YB[2] ** 2,
              oB = 0 === QB ? 0 : Math.min(1, Math.max(0, (DB[0] * YB[0] + DB[1] * YB[1] + DB[2] * YB[2]) / QB));
            return Math.hypot(DB[0] - YB[0] * oB, DB[1] - YB[1] * oB, DB[2] - YB[2] * oB)
          }(YB, OB, GB) <= .9
        })) ? (this.tap = null, this.turnFrom(BB, OB), GB.ms) : null
      }
      turnFrom(BB, OB) {
        this.pending = {
          from: BB,
          ms: OB,
          turnMs: Math.max(50, Math.min(250, OB - this.lastFillMs))
        }, this.lastFillMs = OB
      }
      retry(BB) {
        const {
          pending: OB
        } = this;
        if (null === OB) return;
        if (BB - OB.ms > 1500) return void(this.pending = null);
        const GB = this.pickNext((0, vG.c)(OB.from), (BB => (0, vG.d)(BB, OB.from)));
        if (null === GB) return;
        this.pending = null;
        const {
          turning: YB
        } = this;
        if (null !== YB && BB < YB.endMs && (0, vG.d)(YB.to, GB)) return;
        const DB = this.api.getActionRay().origin,
          QB = [GB[0] + .5 - DB[0], GB[1] + .5 - DB[1], GB[2] + .5 - DB[2]],
          oB = Math.hypot(QB[0], QB[2]);
        if (oB < .3) {
          const BB = Math.max(oB, .001);
          QB[0] = this.heading[0] * BB, QB[2] = this.heading[1] * BB
        }
        this.api.turnCamera(QB, OB.turnMs), this.turning = {
          to: GB,
          endMs: BB + OB.turnMs
        }
      }
    }
    class QY {
      constructor(BB, OB, GB, YB) {
        this.api = BB, this.localPlayerId = OB, this.juice = GB, this.tracker = YB, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.lastFilled = null, this.lastSeenFilled = null, this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = void 0, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new bO(BB), this.meshes = new BG(BB), this.outline = new tG(BB), this.nextCell = new GY(BB, OB, this.foreseen), this.turn = new DY(BB, OB, ((BB, OB) => this.nextCell.pickFrom(BB, OB)))
      }
      nP(BB) {
        const OB = "active" === BB[0] ? `${BB[1]}|${BB[3]}|${BB[4]}|${BB[5]}|${BB[6]}` : "";
        if ("active" !== BB[0]) "built" === BB[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , GB, YB, DB, QB] = BB;
          OB !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = GB) : GB === this.layerY ? this.burstUnlisted(YB) : GB > this.layerY && this.finishLayer(GB), this.layerY = GB, this.layerCells.has(GB) || this.layerCells.set(GB, YB.filter(oY)), this.ghostCells = YB, this.palette = DB, this.occupiedCells = QB
        }
        OB !== this.blueprint && (this.tracker.show("active" === BB[0] && BB[2] ? {
          id: BB[1],
          y: BB[4]
        } : null), this.blueprint = OB, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((BB => this.api.blockNameToBlockId(BB))), this.chunkWatch.watch([...this.ghostCells.filter(oY), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(BB) {
        this.burstUnlisted([]), BB > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = BB)
      }
      kP() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const BB = performance.now();
        let OB = !1;
        for (const [YB, DB] of this.foreseen) {
          var GB;
          if (BB - DB > 1e3) this.foreseen.delete(YB), OB = !0, (null === (GB = this.lastFilled) || void 0 === GB ? void 0 : GB.join()) === YB && (this.lastFilled = this.lastSeenFilled)
        }(OB || this.nextCell.playerMoved()) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(BB) {
        const OB = new Set;
        for (let DB = 0; DB < BB.length; DB += 4) OB.add(`${BB[DB]},${BB[DB+1]},${BB[DB+2]}`);
        const GB = [],
          {
            ghostCells: YB
          } = this;
        for (let DB = 0; DB < YB.length; DB += 4) {
          const BB = `${YB[DB]},${YB[DB+1]},${YB[DB+2]}`;
          !OB.has(BB) && this.open.delete(BB) && GB.push(this.filledCell(DB))
        }
        this.burst(GB)
      }
      refresh() {
        const {
          ghostCells: BB,
          palette: OB,
          occupiedCells: GB
        } = this, YB = new tO, DB = new Set, QB = [], oB = [];
        let jB = 0;
        for (let yB = 0; yB < BB.length; yB += 4) {
          const [GB, JB, MB, PB] = [BB[yB], BB[yB + 1], BB[yB + 2], BB[yB + 3]], zB = this.api.getBlockId(GB, JB, MB), lB = `${GB},${JB},${MB}`, pB = FO(this.blockIds[PB], zB);
          !pB && iO(zB) ? YB.add(GB, JB, MB, gO(OB[PB]), vO, eO(OB[PB])) : pB ? this.open.has(lB) && QB.push(this.filledCell(yB)) : YB.add(GB, JB, MB, xO, sO), pB || jB++, !pB && this.api.isBlockInLoadedChunk(GB, JB, MB) && (DB.add(lB), oB.push(GB, JB, MB, iO(zB) ? 0 : 1))
        }
        this.open = DB, this.nextCell.setCells(oB), this.tracker.update(this.layerY, this.topLayerY, jB);
        for (let yB = 0; yB < GB.length; yB += 3) {
          const [BB, OB, DB] = [GB[yB], GB[yB + 1], GB[yB + 2]];
          iO(this.api.getBlockId(BB, OB, DB)) || YB.add(BB, OB, DB, xO, sO)
        }
        this.meshes.show(YB.toArray()), this.burst(QB), this.showNext(), this.turn.retry(performance.now())
      }
      burst(BB) {
        const OB = performance.now(),
          GB = [];
        for (const [DB, QB, oB] of BB) {
          const BB = [DB, QB, oB];
          this.lastSeenFilled = BB, this.foreseen.delete(BB.join()) || GB.push(BB)
        }
        const YB = this.isHolding(OB);
        for (const DB of GB) {
          if (this.lastFilled = DB, YB && this.pressFilled) {
            this.turn.filled(DB, OB);
            continue
          }
          const BB = this.turn.arrived(DB, OB);
          if (null !== BB) {
            this.pressFilled = YB;
            for (const [OB, GB] of this.foreseen) GB <= BB && this.foreseen.delete(OB)
          }
        }
        this.juice.filled(BB)
      }
      showNext() {
        var BB;
        this.outline.show(null !== (BB = this.aimed) && void 0 !== BB ? BB : this.nextCell.pl(this.lastFilled))
      }
      afterRender(BB) {
        var OB;
        this.turn.look(BB);
        const GB = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === GB ? null : GB.position), this.outline.show(null !== (OB = this.aimed) && void 0 !== OB ? OB : this.nextCell.get())
      }
      isHolding(BB) {
        return null !== this.altMs && BB - this.altMs <= 500
      }
      attemptAltAction(BB) {
        const OB = performance.now();
        if (this.isHolding(OB) || (this.pressFilled = !1), this.altMs = OB, this.pressFilled) return "preventPlacement";
        const GB = this.findAimed(BB);
        if (null !== GB) return this.foreseen.set(GB.join(), OB), this.lastFilled = GB, this.aimed = null, this.showNext(), this.turn.filled(GB, OB), this.pressFilled = !0, "preventPlacement";
        {
          const GB = this.nextCell.get();
          null !== GB && this.turn.tapped(BB, GB, OB)
        }
      }
      holdPressOnEntity() {
        const BB = performance.now();
        this.pressFilled && this.isHolding(BB) && (this.altMs = BB)
      }
      findAimed(BB) {
        return function(BB, OB, GB, YB, DB, QB, oB) {
          const jB = BB.MYB(OB),
            yB = null === jB || null === BB.blockNameToBlockId(jB.name, !0) ? null : jB.name,
            JB = BB.getPositionView(OB),
            {
              origin: MB,
              direction: PB
            } = BB.getActionRay(),
            zB = CG(YB, {
              from: MB,
              dir: PB,
              reach: OY(BB, OB),
              solid: GB
            }, (OB => {
              const GB = [YB[OB], YB[OB + 1], YB[OB + 2]];
              return !FO(DB[YB[OB + 3]], BB.getBlockId(...GB)) && !oB.has(GB.join()) && BB.isBlockInLoadedChunk(...GB) && !BY(GB, JB)
            }), (BB => null === yB || yB === LO(DB[YB[BB + 3]])), (BB => null !== QB && YB[BB] === QB[0] && YB[BB + 1] === QB[1] && YB[BB + 2] === QB[2]));
          return -1 === zB ? null : [YB[zB], YB[zB + 1], YB[zB + 2]]
        }(this.api, this.localPlayerId, BB, this.ghostCells, this.blockIds, this.nextCell.get(), this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(BB) {
        const {
          ghostCells: OB
        } = this, [GB, YB, DB] = gO(this.palette[OB[BB + 3]]);
        return [OB[BB], OB[BB + 1], OB[BB + 2], GB, YB, DB]
      }
    }

    function oY(BB, OB) {
      return OB % 4 !== 3
    }
    class jY {
      constructor(BB) {
        this.api = BB, this.sent = !1
      }
      kP() {
        this.sent || jB.c.get("loadingOverlayVisible") || (this.sent = !0, this.api.sendCommand("plotsentered"))
      }
    }
    var yY = GB(4642),
      JY = GB(39858);

    function MY(BB, OB, GB) {
      const YB = [255 * BB, 255 * OB, 255 * GB],
        [DB, QB, oB] = YB.map((BB => BB + .4 * (255 - BB)));
      return {
        texture: "square_particle",
        CP: 48,
        minLifeTime: .3 / JY.c,
        maxLifeTime: .55 / JY.c,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * JY.c * JY.c, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...YB, 1],
          maxColor: [DB, QB, oB, 1]
        }, {
          timeFraction: 1,
          minColor: [...YB, 0],
          maxColor: [DB, QB, oB, 0]
        }],
        blendMode: yY.f.Standard
      }
    }
    const PY = {
      texture: "glint",
      mipmaps: !1,
      CP: 96,
      minLifeTime: .5 / JY.c,
      maxLifeTime: .9 / JY.c,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * JY.c * JY.c, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: yY.f.OneOne
    };
    class zY {
      constructor(BB, OB) {
        this.api = BB, this.localPlayerId = OB, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(BB) {
        if (this.api.particlesEnabled())
          for (const [OB, GB, YB, DB, QB, oB] of BB.slice(0, 3)) {
            const BB = `${DB},${QB},${oB}`;
            let jB = this.chips.get(BB);
            void 0 === jB && (jB = this.api.createParticles(MY(DB, QB, oB), {
              pos: [OB + .5, GB + .5, YB + .5]
            }), this.chips.set(BB, jB));
            for (let OB = 0; OB < 8; OB++) this.setPoint(OB, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            jB.emitPoints([OB + .5, GB + .5, YB + .5], this.points, 8)
          }
      }
      layerDone(BB) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const OB = BB.length / 3;
        if (0 === OB || !this.api.particlesEnabled()) return;
        const GB = Math.min(OB, 48),
          [YB, DB, QB] = [BB[0] + .5, BB[1] + 1, BB[2] + .5];
        let oB = 0;
        for (let jB = 0; jB < GB; jB++) {
          const yB = 3 * Math.floor(jB * OB / GB);
          for (let OB = 0; OB < 2; OB++) this.setPoint(oB++, BB[yB] + Math.random() - YB, BB[yB + 1] + 1 - DB, BB[yB + 2] + Math.random() - QB, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(PY, {
          pos: [YB, DB, QB]
        }), this.sparkles.emitPoints([YB, DB, QB], this.points, oB)
      }
      dispose() {
        var BB;
        for (const OB of this.chips.values()) OB.stop();
        this.chips.clear(), null === (BB = this.sparkles) || void 0 === BB || BB.stop(), this.sparkles = null
      }
      setPoint(BB, OB, GB, YB, DB) {
        const QB = 4 * BB;
        this.points[QB] = OB, this.points[QB + 1] = GB, this.points[QB + 2] = YB, this.points[QB + 3] = DB
      }
    }
    const lY = "SpecialAction1",
      pY = "KeyY",
      qY = "KeyX";

    function ZY(BB) {
      let {
        placement: OB
      } = BB;
      const GB = (0, yB.i)(yG, OB.getView()),
        {
          t: YB
        } = (0, MB.H)(),
        {
          isTouchScreen: DB
        } = (0, jB.o)(["isTouchScreen"]),
        oB = (0, QB.useContext)(SB),
        PB = null !== GB,
        pB = PB && !GB.blocked && !GB.waiting;
      if ((0, WB.b)((BB => PB && !BB.repeat && !(0, AB.isTypingInInput)() && !(0, lB.r)() && !DB), (BB => {
          const GB = function(BB, OB, GB) {
            if (BB === qY) return OB.stop;
            if (BB === pY) return GB ? OB.build : RY;
            return JB.t[lY].includes(BB) ? OB.rotate : null
          }(BB.code, OB, pB);
          null !== GB && (BB.stopPropagation(), GB())
        })), !PB) return null;
      let ZB = DB ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return GB.blocked ? ZB = "plotsGame:placementOffPlot" : GB.toClear > 0 ? ZB = "plotsGame:placementClear" : "placeSpot" !== oB.hint && "placeBuild" !== oB.hint || (ZB = null), (0, LB.jsx)(qB.e, {
        placement: "bottom",
        children: (0, LB.jsxs)("div", {
          ref: oB.placementCardRef,
          className: "PlotsPlacementCard",
          children: [(0, LB.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: YB(dB(GB.id).displayName.translationKey)
          }), null !== ZB && (0, LB.jsx)("div", {
            className: zB()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: GB.refusals > 0
            }),
            children: YB(ZB)
          }, GB.refusals), (0, LB.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, LB.jsxs)(fG.f, {
              onClick: OB.rotate,
              children: [(0, LB.jsx)(NY, {
                noaAction: lY
              }), YB("plotsGame:placementRotate")]
            }), (0, LB.jsxs)(fG.Q, {
              onClick: OB.stop,
              children: [(0, LB.jsx)(NY, {
                keyCode: qY
              }), YB("general:cancel")]
            }), (0, LB.jsx)("span", {
              ref: oB.buildRef,
              className: zB()("PlotsPlacementBuild", {
                Pulse: "placeBuild" === oB.hint && pB && DB
              }),
              children: (0, LB.jsxs)(fG.q, {
                disabled: !pB,
                onClick: OB.build,
                children: [(0, LB.jsx)(NY, {
                  keyCode: pY
                }), YB("plotsGame:placementBuild")]
              })
            })]
          })]
        })
      })
    }

    function NY(BB) {
      return (0, LB.jsx)(RB.c, {
        className: "PlotsPlacementKey",
        ...BB
      })
    }

    function RY() {}
    var WY = GB(2554),
      AY = GB(37367),
      VY = GB(2063),
      SY = GB(1260);
    const nY = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function UY(BB) {
      let {
        hud: OB
      } = BB;
      const GB = (0, yB.i)(OO, OB.getPlot()),
        [YB, DB] = (0, QB.useState)(null),
        oB = (0, AY.n)(YB);
      if ("none" === GB[0]) return null;
      const [, jB, JB, MB, PB, lB] = GB;
      return (0, LB.jsx)("div", {
        className: zB()("PlotsPlotBannerContainer", {
          Below: oB
        }),
        children: (0, LB.jsx)(fY, {
          plotX: jB,
          plotZ: JB,
          ownerName: MB,
          ownerId: PB,
          relation: lB,
          plaqueRef: DB
        }, `${jB},${JB}`)
      })
    }

    function fY(BB) {
      var OB, GB;
      let {
        plotX: YB,
        plotZ: DB,
        ownerName: QB,
        ownerId: oB,
        relation: jB,
        plaqueRef: yB
      } = BB;
      const {
        t: JB
      } = (0, MB.H)(), PB = (0, VY.g)("hiddenPlayerNames"), lB = (0, VY.g)("players"), pB = null === oB ? null : null !== (OB = null === (GB = lB.byId[oB]) || void 0 === GB ? void 0 : GB.cosmetics) && void 0 !== OB ? OB : null, qB = JB("plotsGame:plotBannerCoords", {
        x: YB,
        z: DB
      }), NB = "own" === jB || null !== QB;
      return (0, LB.jsxs)("div", {
        ref: yB,
        className: zB()("PlotsPlotBanner", {
          Own: "own" === jB,
          Shared: "shared" === jB
        }),
        role: "status",
        children: [(0, LB.jsxs)("span", {
          className: zB()("PlotsPlotBannerSeal", {
            Face: null !== pB
          }),
          children: [null !== pB && (0, LB.jsx)(WY.b, {
            cosmetics: pB
          }), null === pB && (0, LB.jsx)(ZB.b, {
            name: nY[jB]
          })]
        }), (0, LB.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, LB.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === jB && JB("plotsGame:plotBannerYours"), "own" !== jB && null !== QB && JB("plotsGame:plotBannerOwner", {
              name: (0, SY.g)(QB, PB)
            }), !NB && qB]
          }), NB && (0, LB.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [qB, "shared" === jB && (0, LB.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: JB("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }
    const kY = function(BB, OB, GB, YB) {
      let {
        localPlayerId: DB
      } = YB;
      const jB = new DO;
      let yB = null,
        JB = null,
        MB = null,
        PB = null,
        zB = null,
        lB = null;
      const pB = [];
      return {
        onCreate: BB => {
          yB = new zY(BB, DB);
          const OB = new BO;
          JB = new QY(BB, DB, yB, OB), MB = new MG(BB, DB), PB = new iB(BB, MB), zB = new UG(BB, DB, JB.nextCell), lB = new jY(BB), pB.push((0, oB.s)((0, QB.createElement)(VG, {
            hud: jB,
            guide: zB,
            tracker: OB,
            placement: MB
          }, (0, QB.createElement)(UY, {
            hud: jB
          }), (0, QB.createElement)(rB, {
            journal: PB
          }), (0, QB.createElement)(ZG, {
            placement: MB
          }), (0, QB.createElement)(ZY, {
            placement: MB
          })), {
            content: (0, QB.createElement)(bG, {
              journal: PB,
              hud: jB,
              guide: zB
            })
          }))
        },
        kP: () => {
          lB.kP(), JB.kP(), MB.kP(), PB.kP()
        },
        onPlayerAttemptAltAction: (BB, OB, GB, YB, DB, QB) => {
          if (null !== QB) return void JB.holdPressOnEntity();
          const oB = void 0 === OB ? null : [OB, GB, YB];
          return JB.attemptAltAction(oB)
        },
        onPlayerClickUp: () => {
          JB.endPress()
        },
        onAfterRender: (BB, OB) => {
          MB.afterRender(OB), JB.afterRender(OB), zB.afterRender(OB)
        },
        onClose: () => {
          for (const BB of pB) BB();
          yB.dispose(), JB.dispose(), MB.dispose(), yB = null, JB = null, MB = null, PB = null, zB = null, lB = null
        },
        onReceivedMessageFromServer: (BB, OB) => {
          if ("plotsPlot" === BB) jB.receivePlot(OB);
          else if ("plotsBlueprint" === BB) {
            const BB = OB;
            JB.nP(BB), MB.nP(BB)
          } else "plotsJournal" === BB ? PB.nP(OB) : "plotsJournalOpen" === BB ? PB.openFromServer(OB) : "plotsPreviewEnd" === BB ? MB.endFromServer() : "plotsGuide" === BB ? jB.receiveGuide(OB) : "plotsGuideDone" === BB && jB.receiveGuideDone()
        }
      }
    }
  },
  39157: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => jB
    });
    var YB = GB(39154);
    const DB = 5,
      QB = [0, 0, 0],
      oB = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function jB(BB, OB, GB, jB, yB, JB) {
      let [MB, PB, zB] = jB;
      const lB = (MB + .5 - GB[0]) ** 2 + (PB - GB[1]) ** 2 + (zB + .5 - GB[2]) ** 2;
      let pB = null;
      lB <= JB ** 2 && (QB[0] = MB + .5, QB[1] = PB + yB, QB[2] = zB + .5, pB = OB.projectWorldPosToViewport(QB));
      const qB = null !== pB && pB.x > -DB && pB.x < 100 + DB && pB.y > -DB && pB.y < 100 + DB;
      return (0, YB.f)(BB, !qB), qB ? (oB.x = pB.x, oB.y = pB.y, oB.distSq = lB, oB) : null
    }
  },
  39858: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB,
      g: () => QB
    });
    const YB = 1 / .6,
      DB = {
        kind: "smokePuff"
      };
    class QB {
      constructor(BB, OB, GB) {
        this.style = BB, this.CP = OB, this.half = GB, this.particles = null, this.lastFrame = -1
      }
      emit(BB, OB, GB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return GB !== this.lastFrame && (this.lastFrame = GB, this.particles || (this.particles = BB.createParticles(function(BB, OB) {
          const [
            [GB, QB, oB],
            [jB, yB, JB]
          ] = BB.colours;
          return {
            texture: BB.soft ? DB : "square_particle",
            CP: OB,
            minLifeTime: BB.life[0] / YB,
            maxLifeTime: BB.life[1] / YB,
            minEmitPower: BB.power[0] * YB,
            maxEmitPower: BB.power[1] * YB,
            minSize: BB.size[0],
            maxSize: BB.size[1],
            emitRate: 0,
            gravity: [0, BB.lift * YB * YB, 0],
            dir1: [-BB.spread, 1, -BB.spread],
            dir2: [BB.spread, 1, BB.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [GB, QB, oB, BB.alpha],
              maxColor: [jB, yB, JB, BB.alpha]
            }, {
              timeFraction: 1,
              minColor: [GB, QB, oB, 0],
              maxColor: [jB, yB, JB, 0]
            }],
            blendMode: BB.blendMode
          }
        }(this.style, this.CP), {
          pos: OB,
          half: this.half
        })), this.particles.moveTo(OB, this.half), this.particles.emit(QB), !0)
      }
      dispose() {
        var BB;
        null === (BB = this.particles) || void 0 === BB || BB.stop(), this.particles = null
      }
    }
  },
  40244: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB,
      e: () => jB,
      i: () => yB
    });
    const YB = new Map,
      DB = [];

    function QB() {
      for (const BB of DB) BB()
    }

    function oB(BB) {
      var OB;
      return YB.set(BB, (null !== (OB = YB.get(BB)) && void 0 !== OB ? OB : 0) + 1), QB(), () => {
        const OB = YB.get(BB) - 1;
        0 === OB ? YB.delete(BB) : YB.set(BB, OB), QB()
      }
    }

    function jB() {
      return [...YB.keys()]
    }

    function yB(BB) {
      DB.push(BB)
    }
  },
  39154: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB,
      f: () => QB
    });
    const YB = new WeakMap;

    function DB(BB) {
      let OB = YB.get(BB);
      return OB || (OB = {
        hidden: BB.hidden,
        x: NaN,
        y: NaN
      }, YB.set(BB, OB)), OB
    }

    function QB(BB, OB) {
      const GB = DB(BB);
      GB.hidden !== OB && (GB.hidden = OB, BB.hidden = OB)
    }

    function oB(BB, OB, GB) {
      const YB = DB(BB);
      YB.x === OB && YB.y === GB || (YB.x = OB, YB.y = GB, BB.style.translate = `${OB}vw ${GB}vh`)
    }
  },
  37584: (BB, OB, GB) => {
    function YB(BB, OB) {
      return null === BB || null === OB ? BB === OB : BB[0] === OB[0] && BB[1] === OB[1] && BB[2] === OB[2]
    }

    function DB(BB) {
      return [BB[0] + .5, BB[1] + .5, BB[2] + .5]
    }
    GB.d(OB, {
      c: () => DB,
      d: () => YB
    })
  },
  37633: (BB, OB, GB) => {
    function YB(BB) {
      return BB.includes("Leaf Bed")
    }

    function DB(BB) {
      return / Bed(?: Head)?(?:\||$)/.test(BB) && !YB(BB)
    }

    function QB(BB) {
      return BB.includes(" Strongbed")
    }

    function oB(BB) {
      return YB(BB) || DB(BB) || QB(BB)
    }
    GB.d(OB, {
      b: () => oB,
      d: () => YB,
      f: () => QB,
      i: () => DB
    })
  },
  37627: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => JB
    });
    var YB = GB(37633),
      DB = GB(9927);
    const QB = [],
      oB = [],
      jB = [],
      yB = [];
    for (const MB of Object.keys(DB.n))(0, YB.d)(MB) ? QB.push(MB) : (0, YB.i)(MB) && oB.push(MB), (0, YB.f)(MB) && jB.push(MB), (MB.includes(" Bed Head") || MB.includes(" Strongbed Head")) && yB.push(MB);
    const JB = {
      leafBeds: QB,
      woolBeds: oB,
      strongBeds: jB,
      beds: [...QB, ...oB, ...jB],
      bedHeads: yB,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  39215: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYUlEQVR4nGNgIBP8R8NYwX+GDVNRMQOm4v8MC9qxYwZUxf//b+T4//8A+///51khGMTeyIGp8Nz0gv8MDoFgGsbeUB2BXeHESHcUjFNhR4Dj/zp3OzAGsbEphHgIOyYNAACzzGY5JF2GbAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);