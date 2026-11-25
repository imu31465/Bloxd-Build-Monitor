export const id = 22;
export const ids = [22];
export const modules = {
  36946: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => QG,
      d: () => KG,
      g: () => fG,
      j: () => pG
    });
    var wG = ZG(34472),
      SG = ZG(36951),
      LG = ZG(36955),
      yG = ZG(8759),
      kG = ZG(1389),
      UG = ZG(51),
      YG = ZG(59),
      VG = ZG(1067);

    function pG() {
      var GG;
      return (0, kG.j)(SG.c, (0, SG.l)()), (0, VG.jsx)(VG.Fragment, {
        children: null === (GG = (0, SG.l)()) || void 0 === GG ? void 0 : GG.content
      })
    }

    function fG(GG) {
      var bG;
      let {
        show: ZG
      } = GG;
      (0, kG.j)(SG.c, (0, SG.l)());
      const YG = null === (bG = (0, SG.l)()) || void 0 === bG ? void 0 : bG.menu;
      return (0, UG.useEffect)((() => {
        var GG;
        ZG || (null === YG || void 0 === YG || null === (GG = YG.onClose) || void 0 === GG || GG.call(YG), (0, LG.m)())
      }), [ZG, YG]), (0, UG.useEffect)((() => ZG ? (0, yG.g)(LG.t, LG.f) : void 0), [ZG]), (0, VG.jsx)(wG.b, {
        showing: ZG,
        globallyUniqueKey: "clientGameMenu",
        children: null === YG || void 0 === YG ? void 0 : YG.content
      })
    }

    function QG(GG) {
      let {
        placement: bG = "bottom"
      } = GG;
      return (0, VG.jsx)("div", {
        id: `clientGameHud-${bG}`,
        style: {
          display: "contents"
        }
      })
    }

    function KG(GG) {
      let {
        children: bG,
        placement: ZG = "bottom"
      } = GG;
      const [wG, SG] = (0, UG.useState)(null);
      return (0, UG.useEffect)((() => {
        SG(document.getElementById(`clientGameHud-${ZG}`))
      }), [ZG]), wG ? (0, YG.createPortal)(bG, wG) : null
    }
  },
  34472: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => LG
    });
    var wG = ZG(4558),
      SG = ZG(4561);

    function LG(GG) {
      let {
        children: bG,
        showing: ZG,
        globallyUniqueKey: LG,
        alwaysMountChildren: yG = !1,
        doGameplayStartStopOnShow: kG = !0,
        keepsMovement: UG = !1
      } = GG;
      return (0, SG.e)(!0, ZG, LG, UG), (0, wG.d)(kG, ZG), ZG || yG ? bG : null
    }
  },
  37039: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => LG,
      e: () => yG,
      f: () => kG,
      i: () => UG
    });
    var wG = ZG(51),
      SG = ZG(3100);
    const LG = 8,
      yG = "InGameHeaderContainer",
      kG = "TopRightElements";

    function UG(GG) {
      const [bG] = (0, SG.b)(), [ZG, UG] = (0, wG.useState)(!1);
      return (0, wG.useLayoutEffect)((() => {
        if (!GG) return;
        const bG = document.querySelector(`.${yG}`),
          ZG = document.querySelector(`.${kG}`),
          wG = () => {
            const wG = GG.getBoundingClientRect(),
              SG = bG ? bG.getBoundingClientRect().right : 0,
              yG = ZG ? ZG.getBoundingClientRect().left : window.innerWidth,
              kG = wG.left < SG + LG,
              YG = wG.right > yG - LG;
            UG(kG || YG)
          };
        wG();
        const SG = new ResizeObserver(wG);
        return SG.observe(GG), bG && SG.observe(bG), ZG && SG.observe(ZG), () => {
          SG.disconnect()
        }
      }), [GG, bG]), ZG
    }
  },
  8759: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => LG,
      g: () => SG
    });
    let wG = null;
    const SG = function(GG) {
        const bG = {
          cycle: GG,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return wG = bG, () => {
          wG === bG && (wG = null)
        }
      },
      LG = () => {
        var GG;
        return null !== (GG = wG) && void 0 !== GG && GG.canCycle() ? wG.cycle : null
      }
  },
  38933: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG,
      g: () => kG,
      i: () => UG
    });
    const wG = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      SG = [0, 1, 2, 0, 2, 3],
      LG = [4, 5];

    function yG(GG, bG, ZG, wG, SG) {
      for (let yG = 0; yG < 6; yG++) LG.includes(yG) === SG && YG(GG, bG, ZG, wG, yG)
    }

    function kG(GG, bG, ZG, wG) {
      for (let SG = 0; SG < 6; SG++) YG(GG, bG, ZG, wG, SG)
    }

    function UG(GG, bG, ZG, LG, yG) {
      for (let kG = 0; kG < 6; kG++)
        for (const UG of [0, 1]) {
          const [YG, VG, pG] = [UG + 2, UG + 1, (UG + 3) % 4], fG = GG.length / 3;
          for (const [bG, SG] of [
              [UG, VG],
              [YG, VG],
              [YG, pG],
              [UG, pG]
            ])
            for (let UG = 0; UG < 3; UG++) {
              const YG = wG[3 * (4 * kG + bG) + UG],
                VG = wG[3 * (4 * kG + SG) + UG];
              GG.push((YG + (VG - YG) * yG) * LG / 2 + ZG[UG])
            }
          for (const GG of SG) bG.push(fG + GG)
        }
    }

    function YG(GG, bG, ZG, LG, yG) {
      let [kG, UG, YG] = ZG, [VG, pG, fG] = LG;
      const QG = GG.length / 3;
      for (let SG = 4 * yG; SG < 4 * yG + 4; SG++) GG.push(wG[3 * SG] * VG / 2 + kG, wG[3 * SG + 1] * pG / 2 + UG, wG[3 * SG + 2] * fG / 2 + YG);
      for (const wG of SG) bG.push(QG + wG)
    }
  },
  39868: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      default: () => Cw
    });
    const wG = [0, 90, 180, 270],
      SG = "plotsblueprint";
    var LG = ZG(51),
      yG = ZG(36951),
      kG = ZG(17),
      UG = ZG(1389),
      YG = ZG(1956),
      VG = ZG(1151),
      pG = ZG(1006),
      fG = ZG.n(pG),
      QG = ZG(1579),
      KG = ZG(36946),
      hG = ZG(1016),
      dG = ZG(1889),
      JG = ZG(1953),
      rG = ZG(3400),
      zG = ZG(1702);

    function EG() {}
    const oG = (0, LG.createContext)({
      hint: null,
      journalRef: EG,
      placementCardRef: EG,
      buildRef: EG
    });
    var XG = ZG(19);
    const uG = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      iG = {
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
      CG = ["small", "medium", "large"].flatMap((GG => uG.flat().filter((bG => iG[bG].tier === GG))));

    function WG(GG) {
      return iG[GG]
    }
    const mG = new Map(uG.flatMap((GG => GG.slice(1).map(((bG, ZG) => [bG, GG[ZG]])))));

    function IG(GG) {
      var bG;
      return null !== (bG = mG.get(GG)) && void 0 !== bG ? bG : null
    }
    const FG = {
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

    function vG(GG, bG) {
      const ZG = new Set(GG),
        wG = function(GG) {
          const bG = new Set(GG);
          return new Set(CG.filter((GG => {
            const ZG = IG(GG);
            return null === ZG || bG.has(ZG)
          })))
        }(ZG);
      return CG.map((GG => {
        const SG = GG === bG;
        if (ZG.has(GG)) return {
          id: GG,
          active: SG,
          note: null,
          state: "completed",
          unlockedBy: null
        };
        const LG = FG[GG],
          yG = void 0 === LG || LG.firstBuild && ZG.size > 0 ? null : LG.key;
        return wG.has(GG) ? {
          id: GG,
          active: SG,
          note: yG,
          state: "open",
          unlockedBy: null
        } : {
          id: GG,
          active: SG,
          note: yG,
          state: "locked",
          unlockedBy: IG(GG)
        }
      }))
    }
    const aG = "plotsJournalChanged";
    class cG {
      constructor(GG, bG) {
        this.api = GG, this.placement = bG, this.pages = null, this.openRequested = null, this.openedOffered = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.NQ(this.openedOffered ? "journal_offered" : "journal_opened"), this.openedOffered = !1
        }, this.build = GG => {
          this.placement.start(GG), (0, yG.f)()
        }, this.putAway = () => {
          this.api.sendCommand(`${SG} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      hK(GG) {
        let [, bG, ZG] = GG;
        this.pages = vG(bG, ZG), XG.l.xh(aG, this.pages, !0)
      }
      openFromServer(GG) {
        let [, bG] = GG;
        this.openRequested = bG, this.Tp()
      }
      Tp() {
        const GG = this.openRequested;
        null === GG || kG.e.get("loadingOverlayVisible") || (this.openRequested = null, null === this.pages || (0, QG.t)() || (0, zG.isTypingInInput)() || null !== this.placement.getView() || (this.openedOffered = GG, (0, yG.m)()))
      }
      NQ(GG) {
        this.reported.has(GG) || (this.reported.add(GG), this.api.sendCommand(`${SG} report ${GG}`))
      }
    }
    var lG = ZG(1067);
    const jG = "KeyJ";

    function PG(GG) {
      let {
        journal: bG
      } = GG;
      const ZG = (0, UG.j)(aG, bG.getPages()),
        {
          isTouchScreen: wG
        } = (0, kG.o)(["isTouchScreen"]),
        {
          t: SG
        } = (0, VG.w)(),
        YG = (0, LG.useContext)(oG);
      return (0, rG.c)((GG => null !== ZG && GG.code === jG && !GG.repeat && !(0, zG.isTypingInInput)()), (GG => {
        (0, QG.C)(GG, !0, yG.m)
      })), null === ZG ? null : (0, lG.jsx)(KG.d, {
        placement: "topRight",
        children: (0, lG.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, lG.jsxs)("button", {
            ref: YG.journalRef,
            type: "button",
            className: fG()("PlotsJournalButton SmallTextBold", {
              Touch: wG
            }),
            onClick: yG.m,
            children: [(0, lG.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, lG.jsx)(dG.b, {
                itemName: "Book",
                amount: 0
              })
            }), SG("plotsGame:journalButton"), !wG && (0, lG.jsx)(JG.e, {
              className: "PlotsJournalButtonKey",
              keyCode: jG
            }), "openJournal" === YG.hint && (0, lG.jsx)(hG.c, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon HandLeftAnim PlotsJournalButtonHand"
            })]
          })
        })
      })
    }
    var MG = ZG(9249);
    const AG = [0, 90, 180, 270],
      sG = /^(meta\|rot\d)\|([lrud]+)$/,
      qG = "nesw",
      nG = /^meta\|([nesw]*)\|?(Stacked)?$/,
      gG = function(GG) {
        const bG = new WeakMap;
        return (ZG, wG) => {
          let SG = bG.get(ZG);
          return void 0 === SG && (SG = GG(ZG, wG), bG.set(ZG, SG)), SG
        }
      }((GG => new eG(GG)));
    class eG {
      constructor(GG) {
        this.blockMetadata = GG, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const bG = new Set(Object.keys(GG).map((bG => GG[bG].id)));
        bG.add(0), this.maxBlockId = Math.max(...bG)
      }
      static
      for (GG) {
        return gG(GG)
      }
      getBlockIdMapping(GG, bG) {
        const ZG = this.getBlockIdMappingKey(GG, bG);
        let wG = this.blockIdMappings.get(ZG);
        return void 0 === wG && AG.includes(GG) && (wG = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, GG, bG), this.blockIdMappings.set(ZG, wG)), wG
      }
      turnBlockId(GG, bG, ZG) {
        return this.mapBlockId(this.blockMetadata[GG], bG, this.getRotationMapping(bG, ZG), ZG)
      }
      getBlockIdMappingKey(GG, bG) {
        return `r${GG}|m${Number(bG)}`
      }
      createBlockIdMapping(GG, bG, ZG, wG) {
        const SG = new Uint16Array(bG + 1),
          LG = this.getRotationMapping(ZG, wG);
        for (const yG in GG) {
          const bG = GG[yG];
          SG[bG.id] = this.mapBlockId(bG, ZG, LG, wG)
        }
        return SG
      }
      getRotationMapping(GG, bG) {
        const ZG = Math.round(GG / 90),
          wG = new Uint8Array(4);
        for (let SG = 0; SG < 4; SG++) wG[SG] = (4 + SG - ZG) % 4;
        if (bG) {
          let GG = wG[0];
          wG[0] = wG[1], wG[1] = GG, GG = wG[2], wG[2] = wG[3], wG[3] = GG
        }
        return wG
      }
      mapBlockId(GG, bG, ZG, wG) {
        var SG;
        const {
          blockMetadata: LG
        } = this, yG = Math.round(bG / 90), {
          id: kG,
          meta: UG
        } = GG, {
          rot: YG,
          rootName: VG,
          metaStr: pG
        } = UG;
        let fG;
        const [, QG, KG] = null !== (SG = nG.exec(pG)) && void 0 !== SG ? SG : [];
        if (void 0 !== QG) {
          var hG, dG;
          fG = null !== (hG = null === (dG = LG[`${VG}|meta|${[qG.split("").filter(((GG,bG)=>QG.split("").some((GG=>{const ZG=qG.indexOf(GG);return((wG?3-ZG:ZG)+yG)%4===bG})))).join(""),KG].filter(Boolean).join("|")}`]) || void 0 === dG ? void 0 : dG.id) && void 0 !== hG ? hG : kG
        } else if (null === YG) fG = kG;
        else {
          var JG, rG;
          const GG = ZG[YG - 1] + 1;
          let bG = pG.replace(`rot${YG}`, `rot${GG}`);
          wG && UG.stairsCorner && (bG = bG.replace(/(Left|Right)$/, (GG => "Left" === GG ? "Right" : "Left"))), wG && "Chest" === VG && (bG = bG.replace(/\|(left|right)$/, ((GG, bG) => "left" === bG ? "|right" : "|left")));
          const SG = sG.exec(bG);
          if (wG && null !== SG) {
            const GG = "lrud".split("").filter((GG => SG[2].includes("l" === GG ? "r" : "r" === GG ? "l" : GG)));
            bG = `${SG[1]}|${GG.join("")}`
          }
          const yG = `${VG}|${bG}`;
          if (fG = null !== (JG = null === (rG = LG[yG]) || void 0 === rG ? void 0 : rG.id) && void 0 !== JG ? JG : null, null === fG) {
            const GG = LG[VG];
            fG = GG.rootMetaDesc === yG ? GG.id : kG
          }
        }
        return fG
      }
    }

    function RG(GG, bG, ZG) {
      let {
        xRotationMappedOrigin: wG,
        shouldSwapXZ: SG
      } = ZG;
      const LG = SG ? bG : GG;
      return null === wG ? LG : wG - LG
    }

    function TG(GG, bG, ZG) {
      let {
        zRotationMappedOrigin: wG,
        shouldSwapXZ: SG
      } = ZG;
      const LG = SG ? GG : bG;
      return null === wG ? LG : wG - LG
    }
    const HG = {
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
      tG = new Map;

    function DG(GG, bG) {
      const ZG = `${GG}|${bG}`;
      let wG = tG.get(ZG);
      if (void 0 === wG) {
        const {
          size: SG,
          palette: LG,
          layers: yG
        } = HG[GG], kG = 90 === bG || 270 === bG, [UG, YG] = kG ? [SG[2], SG[0]] : [SG[0], SG[2]], VG = function(GG, bG, ZG) {
          let wG = null,
            SG = null,
            LG = !1;
          switch (GG) {
            case 0:
              break;
            case 90:
              wG = bG - 1, LG = !0;
              break;
            case 180:
              wG = bG - 1, SG = ZG - 1;
              break;
            case 270:
              SG = ZG - 1, LG = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${GG}`)
          }
          return {
            xRotationMappedOrigin: wG,
            zRotationMappedOrigin: SG,
            shouldSwapXZ: LG
          }
        }(bG, UG, YG), pG = eG.for(MG.l), fG = LG.map((GG => (0, MG.i)(pG.turnBlockId((0, MG.p)(GG), bG, !1)))), QG = [];
        yG.forEach(((GG, bG) => {
          GG.split(" ").forEach(((GG, ZG) => {
            for (let wG = 0; wG < GG.length; wG++)
              if ("." !== GG[wG]) {
                const SG = [RG(wG, ZG, VG), bG, TG(wG, ZG, VG)];
                QG.push({
                  offset: SG,
                  block: fG[GG.charCodeAt(wG) - "a".charCodeAt(0)]
                })
              }
          }))
        })), wG = {
          size: [UG, SG[1], YG],
          cells: QG
        }, tG.set(ZG, wG)
      }
      return wG
    }
    const NG = "plotsBuildProgressChanged",
      OG = new Map;

    function xG(GG, bG, ZG) {
      let wG = 0,
        SG = 0;
      return function(GG) {
        let bG = OG.get(GG);
        if (void 0 === bG) {
          const wG = [];
          for (const {
              offset: bG
            }
            of DG(GG, 0).cells) {
            var ZG;
            wG[bG[1]] = (null !== (ZG = wG[bG[1]]) && void 0 !== ZG ? ZG : 0) + 1
          }
          bG = wG, OG.set(GG, bG)
        }
        return bG
      }(GG).forEach(((GG, ZG) => {
        wG += GG, ZG > bG && (SG += GG)
      })), {
        id: GG,
        filled: wG - SG - ZG,
        total: wG
      }
    }
    class BG {
      constructor() {
        this.shown = null, this.topOpen = 0, this.progress = null
      }
      get() {
        return this.progress
      }
      show(GG) {
        this.shown = GG, this.topOpen = 0, null === GG && this.xh(null)
      }
      update(GG, bG, ZG) {
        const wG = this.shown;
        null !== wG && (GG >= bG && (this.topOpen = ZG), this.xh(xG(wG.id, bG - wG.y, GG >= bG ? ZG : this.topOpen + ZG)))
      }
      xh(GG) {
        const bG = this.progress;
        (null === GG || void 0 === GG ? void 0 : GG.id) === (null === bG || void 0 === bG ? void 0 : bG.id) && (null === GG || void 0 === GG ? void 0 : GG.filled) === (null === bG || void 0 === bG ? void 0 : bG.filled) && (null === GG || void 0 === GG ? void 0 : GG.total) === (null === bG || void 0 === bG ? void 0 : bG.total) || (this.progress = GG, XG.l.xh(NG, GG, !0))
      }
    }
    const Gb = "plotsPlotChanged",
      bb = "plotsGuideChanged",
      Zb = "plotsGuideDone";
    class wb {
      constructor() {
        this.plot = ["none"], this.guide = ["none"]
      }
      getPlot() {
        return this.plot
      }
      receivePlot(GG) {
        this.plot = GG, XG.l.xh(Gb, GG, !0)
      }
      getGuide() {
        return this.guide
      }
      receiveGuide(GG) {
        this.guide = GG, XG.l.xh(bb, GG, !0)
      }
      receiveGuideDone() {
        XG.l.xh(Zb, void 0, !0)
      }
    }
    var Sb = ZG(1239),
      Lb = ZG(38966),
      yb = ZG(37224),
      kb = ZG(1409);

    function Ub(GG) {
      let {
        onSkip: bG,
        className: ZG
      } = GG;
      const {
        t: wG
      } = (0, VG.w)();
      return (0, lG.jsx)("button", {
        type: "button",
        className: fG()("PlotsGuideSkipButton", ZG),
        ...(0, kb.h)(bG, "pointerup"),
        children: wG("tutorial:skip")
      })
    }

    function Yb(GG) {
      let {
        target: bG,
        placement: ZG,
        spotlight: wG = null,
        children: SG
      } = GG;
      const {
        t: yG
      } = (0, VG.w)(), kG = (0, LG.useRef)(bG);
      return kG.current = bG, (0, Sb.w)("popup", kG, null === wG ? null : wG.onSkip, null !== wG, null, "controller:menusSkipTutorial"), (0, lG.jsxs)(yb.e, {
        target: bG,
        placement: ZG,
        className: fG()("PlotsGuideBubble", {
          Passive: null === wG
        }),
        spotlight: null !== wG,
        spotlightMargin: 30,
        children: [(0, lG.jsxs)("div", {
          className: "PlotsGuideBubbleHeader",
          children: [(0, lG.jsx)("img", {
            className: "PlotsGuideBubblePortrait",
            src: Lb,
            alt: "",
            draggable: !1
          }), (0, lG.jsx)("span", {
            className: "PlotsGuideBubbleSpeaker",
            children: yG("plotsGame:maverickName")
          }), null !== wG && (0, lG.jsx)(Ub, {
            onSkip: wG.onSkip
          })]
        }), (0, lG.jsx)("p", {
          className: "PlotsGuideBubbleText",
          children: SG
        })]
      })
    }

    function Vb(GG) {
      let {
        className: bG,
        icon: ZG,
        title: wG,
        children: SG
      } = GG;
      return (0, lG.jsxs)("div", {
        className: fG()("PlotsCard", bG),
        role: "status",
        children: [(0, lG.jsx)("span", {
          className: "PlotsCardIcon",
          children: (0, lG.jsx)(hG.c, {
            name: ZG
          })
        }), (0, lG.jsxs)("div", {
          className: "PlotsCardBody",
          children: [(0, lG.jsx)("div", {
            className: "PlotsCardTitle SmallTextBold",
            children: wG
          }), SG]
        })]
      })
    }

    function pb(GG) {
      let {
        progress: bG,
        goal: ZG
      } = GG;
      const wG = Math.min(bG, ZG);
      return (0, lG.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, lG.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": ZG,
          "aria-valuenow": wG,
          children: (0, lG.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${wG/ZG})`
            }
          })
        }), (0, lG.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [wG, "/", ZG]
        })]
      })
    }

    function fb(GG) {
      let {
        progress: bG,
        guide: ZG
      } = GG;
      const {
        t: wG
      } = (0, VG.w)(), {
        isTouchScreen: SG
      } = (0, kG.o)(["isTouchScreen"]), LG = bG.filled < 5;
      return (0, lG.jsxs)(lG.Fragment, {
        children: [(LG || bG.total - bG.filled <= 5) && (0, lG.jsx)("div", {
          className: "PlotsGuideHandLayer",
          children: (0, lG.jsx)("div", {
            ref: ZG.bindHand,
            className: "PlotsGuideHand",
            children: (0, lG.jsx)(hG.c, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon"
            })
          })
        }), (0, lG.jsx)(KG.d, {
          placement: "bottom",
          children: (0, lG.jsxs)(Vb, {
            icon: "hammer",
            title: wG(WG(bG.id).displayName.translationKey),
            children: [LG && (0, lG.jsx)("div", {
              className: "PlotsCardHint SmallTextLight",
              children: SG ? wG("plotsGame:guideBuildTouch") : Qb(wG)
            }), (0, lG.jsx)(pb, {
              progress: bG.filled,
              goal: bG.total
            })]
          })
        })]
      })
    }

    function Qb(GG) {
      const bG = YG.B["alt-fire"][0];
      return "Mouse3" === bG ? GG("plotsGame:guideBuildRightClick") : GG("plotsGame:guideBuildKeys", {
        key: (0, YG.t)(bG)
      })
    }

    function Kb() {
      return (0, lG.jsx)("div", {
        className: "PlotsGuideDragHand",
        children: (0, lG.jsx)(hG.c, {
          name: "hand-back-point-up",
          className: "SmallTextBold TouchTutorialIcon"
        })
      })
    }
    var hb = ZG(1251),
      db = ZG(2549),
      Jb = ZG(38822),
      rb = ZG(38602),
      zb = ZG(37283),
      Eb = ZG(9292),
      ob = ZG(9309),
      Xb = ZG(352),
      ub = ZG(38207);
    const ib = new Map([
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
      Cb = [...zb.c.blockRemoveActionRoots, ...rb.c, ...Eb.g, "Board", "Code Block", "Custom Lobby Block"],
      Wb = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let mb = null;

    function Ib() {
      return mb ??= function() {
        const GG = Fb(),
          bG = Math.max(...GG.map((GG => MG.l[GG].id))) + 1,
          ZG = new Int32Array(bG),
          wG = new Int32Array(bG),
          SG = new Uint8Array(bG).fill(1),
          LG = new Uint8Array(bG),
          yG = new Uint8Array(bG),
          kG = new Array(bG).fill("Air"),
          UG = new Map,
          YG = GG => {
            let bG = UG.get(GG);
            return void 0 === bG && (bG = UG.size + 1, UG.set(GG, bG)), bG
          },
          VG = new Set(Cb);
        for (const fG of GG) {
          var pG;
          const {
            id: GG,
            meta: bG,
            altActionable: UG,
            canBePlacedOver: QG
          } = MG.l[fG];
          ZG[GG] = YG(vb(fG));
          const KG = bG.stairsCorner;
          if (null === KG) wG[GG] = ZG[GG];
          else {
            const ZG = KG.endsWith("Right");
            wG[GG] = YG(`${bG.rootName}|rot${ZG?bG.rot%4+1:bG.rot}|${bG.halfblockPlacement}|${KG.replace("Right","Left")}`)
          }
          SG[GG] = QG ? 1 : 0, LG[GG] = UG || null !== bG.open || fG in ub.e || VG.has(bG.rootName) || void 0 !== (0, rb.f)(bG.rootName) ? 1 : 0;
          const {
            rootName: hG
          } = bG;
          yG[GG] = null !== bG.open || rb.c.includes(hG) || hG.includes("Bookshelf") || hG.includes("Mailbox") ? 1 : 0, kG[GG] = null !== (pG = (0, Jb.f)(GG)) && void 0 !== pG ? pG : hG
        }
        return {
          kinds: ZG,
          shapes: wG,
          empty: SG,
          inUse: LG,
          ownAltActionMessage: yG,
          placingItems: kG
        }
      }(), mb
    }

    function Fb() {
      return Object.keys(MG.l).filter((GG => MG.l[GG].name === GG))
    }

    function vb(GG) {
      var bG;
      const ZG = MG.l[GG],
        {
          rootName: wG,
          rot: SG
        } = ZG.meta,
        [, ...LG] = (null !== (bG = ZG.rootMetaDesc) && void 0 !== bG ? bG : GG).split("|"),
        yG = LG.filter((GG => !("meta" === GG || Wb.test(GG) || (0, ob.C)(ZG) && /^[nesw]+$/.test(GG) || Eb.g.includes(wG) && /^[lrud]+$/.test(GG) || Xb.M.includes(wG) && /^(left|right)$/.test(GG))));
      return [wG, ...yG].map((GG => "fenceGate" === ZG.model && GG === `rot${SG}` ? "rot" + ((SG - 1) % 2 + 1) : GG)).join("|")
    }

    function ab(GG, bG) {
      const {
        kinds: ZG,
        shapes: wG
      } = Ib();
      return ZG[GG] === ZG[bG] || wG[GG] === wG[bG]
    }

    function cb(GG) {
      return 1 === Ib().empty[GG]
    }

    function lb(GG) {
      return Ib().placingItems[GG]
    }

    function jb(GG) {
      return ib.get(MG.l[GG].meta.rootName)
    }
    var Pb = ZG(9284),
      Mb = ZG(9303);
    const Ab = [0, 0, 0, 1, 1, 1],
      sb = (0, Pb.c)([
        [2, 0, 2, 6, 6, 6]
      ]),
      qb = (0, Pb.c)([
        [3, 0, 3, 5, 5, 5]
      ]),
      nb = (0, Pb.c)([
        [3, 3, 3, 5, 8, 5]
      ]),
      gb = [0, 1, 2, 3].map((GG => (0, Pb.c)((0, Pb.o)([
        [3, 2, 0, 5, 7, 3]
      ], GG))));

    function eb(GG) {
      const {
        bd: bG,
        model: ZG,
        blockModel: wG,
        meta: SG
      } = MG.l[GG];
      return void 0 !== bG ? bG : "CentreCross" === ZG ? sb : null !== wG && void 0 !== wG && wG.startsWith("torch") ? SG.halfblockPlacement === Mb.d.side ? gb[SG.rot - 1] : SG.halfblockPlacement === Mb.d.top ? nb : qb : Ab
    }
    var Rb = ZG(188);
    class Tb {
      constructor(GG) {
        this.api = GG, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(GG) {
        const bG = Rb.d.rK;
        this.chunks = [];
        for (let ZG = 0; ZG < GG.length; ZG += 3) {
          const wG = Math.floor(GG[ZG] / bG),
            SG = Math.floor(GG[ZG + 1] / bG),
            LG = Math.floor(GG[ZG + 2] / bG);
          this.watches(wG, SG, LG) || this.chunks.push(wG, SG, LG)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const GG = performance.now();
        if (GG - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = GG;
        let bG = !1;
        for (let ZG = 0; ZG < this.chunks.length; ZG += 3) {
          const GG = this.api.getChunkVersion(this.chunks[ZG], this.chunks[ZG + 1], this.chunks[ZG + 2]);
          this.versions[ZG / 3] !== GG && (this.versions[ZG / 3] = GG, bG = !0)
        }
        return bG
      }
      watches(GG, bG, ZG) {
        for (let wG = 0; wG < this.chunks.length; wG += 3)
          if (this.chunks[wG] === GG && this.chunks[wG + 1] === bG && this.chunks[wG + 2] === ZG) return !0;
        return !1
      }
    }
    var Hb = ZG(38933);
    const tb = .35,
      Db = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      Nb = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      Ob = [.95, .2, .15];
    class xb {
      constructor() {
        this.groups = []
      }
      add(GG, bG, ZG, wG, SG) {
        let LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Ab;
        for (const yG of this.groups)
          if (bZ(yG, wG, SG)) return yG.cells.push(GG, bG, ZG), void yG.boxes.push(LG);
        this.groups.push({
          rgb: wG,
          look: SG,
          cells: [GG, bG, ZG],
          boxes: [LG]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class Bb {
      constructor(GG) {
        this.api = GG, this.shown = []
      }
      show(GG) {
        const bG = [];
        for (const ZG of GG) {
          const GG = this.shown.findIndex((GG => {
            let {
              group: bG
            } = GG;
            return bZ(bG, ZG.rgb, ZG.look) && ZZ(bG, ZG)
          })); - 1 === GG ? bG.push(this.build(ZG)) : (bG.push(this.shown[GG]), this.shown.splice(GG, 1))
        }
        this.dispose(), this.shown = bG
      }
      dispose() {
        for (const {
            meshes: GG
          }
          of this.shown)
          for (const bG of GG) this.api.disposeGameMesh(bG);
        this.shown = []
      }
      build(GG) {
        const {
          rgb: bG,
          look: ZG,
          boxes: wG
        } = GG, SG = [bG[0] + (1 - bG[0]) * tb, bG[1] + (1 - bG[1]) * tb, bG[2] + (1 - bG[2]) * tb], LG = [this.buildMesh(GG.cells, bG, ZG.alpha, ((GG, bG, SG, LG) => {
          GZ(GG, bG, SG, wG[LG], ZG.size, !1)
        })), this.buildMesh(GG.cells, SG, ZG.alpha, ((GG, bG, SG, LG) => {
          GZ(GG, bG, SG, wG[LG], ZG.size, !0)
        }))];
        return ZG.crossed && LG.push(this.buildMesh(GG.cells, bG, .9, ((GG, bG, wG) => {
          (0, Hb.i)(GG, bG, wG, ZG.size + .01, .12)
        }))), {
          group: GG,
          meshes: LG
        }
      }
      buildMesh(GG, bG, ZG, wG) {
        const SG = [GG[0], GG[1], GG[2]],
          LG = [],
          yG = [];
        for (let kG = 0; kG < GG.length; kG += 3) wG(LG, yG, [GG[kG] - SG[0] + .5, GG[kG + 1] - SG[1] + .5, GG[kG + 2] - SG[2] + .5], kG / 3);
        return this.api.createGameMesh({
          positions: LG,
          indices: yG
        }, {
          rgb: [bG[0], bG[1], bG[2]],
          alpha: ZG
        }, SG)
      }
    }

    function GZ(GG, bG, ZG, wG, SG, LG) {
      for (let yG = 0; yG < wG.length; yG += 6) {
        const kG = [0, 0, 0],
          UG = [0, 0, 0];
        for (let GG = 0; GG < 3; GG++) kG[GG] = ZG[GG] + ((wG[yG + GG] + wG[yG + GG + 3]) / 2 - .5) * SG, UG[GG] = (wG[yG + GG + 3] - wG[yG + GG]) * SG;
        (0, Hb.d)(GG, bG, kG, UG, LG)
      }
    }

    function bZ(GG, bG, ZG) {
      return GG.rgb[0] === bG[0] && GG.rgb[1] === bG[1] && GG.rgb[2] === bG[2] && GG.look === ZG
    }

    function ZZ(GG, bG) {
      if (GG.cells.length !== bG.cells.length) return !1;
      for (let ZG = 0; ZG < GG.cells.length; ZG++)
        if (GG.cells[ZG] !== bG.cells[ZG]) return !1;
      return GG.boxes.every(((GG, ZG) => GG === bG.boxes[ZG]))
    }

    function wZ(GG, bG, ZG, wG, SG) {
      if (!GG.isBlockInLoadedChunk(bG, wG - 6, ZG) || !GG.isBlockInLoadedChunk(bG, wG + 6 + SG, ZG) || !GG.canModifyBlockAt(bG, wG, ZG)) return NaN;
      let LG = wG - 1;
      if (0 !== GG.getBlockId(bG, LG, ZG)) {
        for (; LG < wG + 6 && 0 !== GG.getBlockId(bG, LG + 1, ZG);) LG++;
        return LG
      }
      for (; LG > wG - 6;)
        if (LG--, 0 !== GG.getBlockId(bG, LG, ZG)) return LG;
      return NaN
    }

    function SZ(GG, bG, ZG, wG, SG) {
      let LG = 0;
      for (let yG = wG + 1; yG <= wG + SG; yG++) 0 !== GG.getBlockId(bG, yG, ZG) && LG++;
      return LG
    }

    function LZ(GG) {
      const bG = new Map;
      for (const yG of GG) {
        var ZG;
        if (Number.isNaN(yG)) return null;
        bG.set(yG, (null !== (ZG = bG.get(yG)) && void 0 !== ZG ? ZG : 0) + 1)
      }
      let wG = NaN,
        SG = 0;
      for (const [yG, kG] of bG)(kG > SG || kG === SG && yG < wG) && (wG = yG, SG = kG);
      let LG = 0;
      for (const yG of GG) LG += Math.abs(yG - wG);
      return LG
    }

    function yZ(GG, bG, ZG, wG) {
      const {
        eye: SG,
        forward: LG,
        tanHalfFovX: yG,
        tanHalfFovY: kG
      } = GG, [UG, YG] = function(GG) {
        let [bG, ZG, wG] = GG;
        const SG = Math.hypot(bG, wG),
          [LG, yG] = [wG / SG, -bG / SG];
        return [
          [LG, 0, yG],
          [ZG * yG, wG * LG - bG * yG, -ZG * LG]
        ]
      }(LG), [VG, pG] = [bG * yG, ZG * kG], fG = LG[0] + VG * UG[0] + pG * YG[0], QG = LG[1] + pG * YG[1], KG = LG[2] + VG * UG[2] + pG * YG[2], hG = (wG - SG[1]) / QG;
      return hG > 0 && hG < 1 / 0 ? [SG[0] + hG * fG, SG[2] + hG * KG] : null
    }
    const kZ = "plotsBlueprintPlacementChanged",
      UZ = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class YZ {
      constructor(GG, bG) {
        this.api = GG, this.localPlayerId = bG, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = GG => {
          var bG, ZG, wG, LG;
          const yG = null !== (bG = null === (ZG = this.placing) || void 0 === ZG ? void 0 : ZG.rotation) && void 0 !== bG ? bG : 0,
            {
              size: kG
            } = DG(GG, yG),
            UG = this.api.HJ(this.localPlayerId),
            [YG, VG] = null !== (wG = null !== (LG = function(GG, bG, ZG, wG) {
              const [SG, LG, yG] = bG, [kG, UG, YG] = [Math.floor(ZG[0]), Math.floor(ZG[1]), Math.floor(ZG[2])], VG = 6 + Math.max(SG, yG) / 2, [pG, fG] = [Math.ceil(VG + SG / 2), Math.ceil(VG + yG / 2)], [QG, KG] = [kG - pG, YG - fG], [hG, dG] = [2 * pG + 1, 2 * fG + 1], JG = new Float64Array(hG * dG), rG = new Uint16Array(hG * dG);
              for (let uG = 0; uG < hG; uG++)
                for (let bG = 0; bG < dG; bG++) {
                  const ZG = wZ(GG, QG + uG, KG + bG, UG, LG);
                  JG[uG * dG + bG] = ZG, Number.isNaN(ZG) || (rG[uG * dG + bG] = SZ(GG, QG + uG, KG + bG, ZG, LG))
                }
              const zG = Math.hypot(wG[0], wG[2]),
                EG = [];
              let oG = null,
                XG = 1 / 0;
              for (let uG = 0; uG + SG <= hG; uG++)
                for (let GG = 0; GG + yG <= dG; GG++) {
                  const [bG, LG] = [QG + uG, KG + GG], [UG, pG] = [bG + SG / 2 - ZG[0], LG + yG / 2 - ZG[2]], fG = Math.hypot(UG, pG);
                  if (fG > VG || kG >= bG - 2 && kG < bG + SG + 2 && YG >= LG - 2 && YG < LG + yG + 2) continue;
                  EG.length = 0;
                  let hG = 0;
                  for (let ZG = 0; ZG < SG; ZG++)
                    for (let bG = 0; bG < yG; bG++) EG.push(JG[(uG + ZG) * dG + GG + bG]), hG += rG[(uG + ZG) * dG + GG + bG];
                  const iG = LZ(EG);
                  if (null === iG) continue;
                  const CG = fG + 3 * (iG + hG) + (1 - (0 === zG ? 1 : (UG * wG[0] + pG * wG[2]) / (fG * zG))) / 2 * 6;
                  CG < XG && (XG = CG, oG = [bG, LG])
                }
              return oG
            }(this.api, kG, UG, this.camera.forward)) && void 0 !== LG ? LG : this.cornerOnTarget(kG)) && void 0 !== wG ? wG : [Math.floor(UG[0]) + 2, Math.floor(UG[2])];
          this.placing = {
            id: GG,
            rotation: yG,
            corner: [YG, this.playerLevel(), VG],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null,
            moved: !1,
            stillSinceMs: performance.now()
          }, this.update(), this.api.sendCommand(`${SG} preview`)
        }, this.rotate = () => {
          const {
            id: GG,
            rotation: bG,
            corner: ZG
          } = this.placing, SG = wG[(wG.indexOf(bG) + 1) % wG.length], [LG, , yG] = DG(GG, bG).size, [kG, , UG] = DG(GG, SG).size;
          this.moveTo(ZG[0] + Math.floor(LG / 2) - Math.floor(kG / 2), ZG[2] + Math.floor(yG / 2) - Math.floor(UG / 2), SG)
        }, this.hoverAt = (GG, bG) => {
          this.placing.hover = [GG, bG], this.moveCentreTo(this.camera, GG, bG)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (GG, bG) => {
          const ZG = this.placing,
            {
              eye: wG,
              forward: SG,
              tanHalfFovX: LG,
              tanHalfFovY: yG
            } = this.camera,
            kG = {
              eye: [wG[0], wG[1], wG[2]],
              forward: [SG[0], SG[1], SG[2]],
              tanHalfFovX: LG,
              tanHalfFovY: yG
            },
            UG = ZG.corner[1],
            YG = yZ(kG, GG, bG, UG);
          ZG.hover = null, ZG.drag = YG && {
            view: kG,
            ground: YG,
            corner: [ZG.corner[0], ZG.corner[2]],
            level: UG
          }
        }, this.dragTo = (GG, bG) => {
          const ZG = this.placing.drag,
            wG = ZG && yZ(ZG.view, GG, bG, ZG.level);
          null !== ZG && null !== wG && this.moveTo(ZG.corner[0] + Math.round(wG[0] - ZG.ground[0]), ZG.corner[1] + Math.round(wG[1] - ZG.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const GG = this.view;
          GG.waiting || (GG.blocked ? this.xh({
            ...GG,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const GG = this.placing,
            {
              id: bG,
              rotation: ZG,
              corner: wG
            } = GG;
          this.api.sendCommand(`${SG} place ${bG} ${wG.join(" ")} ${ZG}`), GG.sent = {
            atMs: performance.now(),
            corner: [...wG],
            rotation: ZG,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${SG} preview off`))
        }, this.chunkWatch = new Tb(GG), this.meshes = new Bb(GG)
      }
      getView() {
        return this.view
      }
      Tp() {
        const GG = this.placing;
        null !== GG && (null !== GG.sent && !GG.sent.timedOut && performance.now() - GG.sent.atMs > 3e3 ? (GG.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(GG) || this.chunkWatch.changed() || this.view.settled !== VZ(GG, this.view.blocked)) && this.update())
      }
      afterRender(GG) {
        ! function(GG, bG) {
          for (let ZG = 0; ZG < 3; ZG++) bG.eye[ZG] = GG.cameraPosition[ZG], bG.forward[ZG] = GG.cameraDirection[ZG];
          bG.tanHalfFovX = GG.tanHalfFovX, bG.tanHalfFovY = GG.tanHalfFovY
        }(GG, this.camera);
        const bG = this.placing;
        null !== bG && null !== bG.hover && this.moveCentreTo(this.camera, bG.hover[0], bG.hover[1])
      }
      hK(GG) {
        const bG = this.placing;
        if (null === bG || null === bG.sent || "active" !== GG[0]) return;
        const {
          sent: ZG
        } = bG, [, wG, SG, LG, yG, kG, UG] = GG;
        SG && wG === bG.id && UG === ZG.rotation && LG === ZG.corner[0] && yG === ZG.corner[1] && kG === ZG.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(GG) {
        let [bG, , ZG] = GG;
        const wG = this.api.getTargetedBlock();
        if (null === wG) return null;
        const [SG, , LG] = wG.position;
        return [SG - Math.floor(bG / 2), LG - Math.floor(ZG / 2)]
      }
      playerLevel() {
        var GG;
        const [bG, ZG, wG] = this.api.HJ(this.localPlayerId);
        if (null !== (GG = this.api.getLocalPlayerMovement()) && void 0 !== GG && GG.onGround) return Math.ceil(ZG - .01);
        const [SG, LG, yG] = [Math.floor(bG), Math.floor(ZG), Math.floor(wG)];
        for (let kG = LG; kG >= LG - 2; kG--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(SG, kG, yG))) return kG + 1;
        return LG
      }
      followPlayerLevel(GG) {
        if (pZ(GG)) return !1;
        const bG = this.playerLevel();
        return bG !== GG.corner[1] && (GG.corner[1] = bG, !0)
      }
      moveCentreTo(GG, bG, ZG) {
        const wG = this.placing,
          SG = yZ(GG, bG, ZG, wG.corner[1]);
        if (null !== SG) {
          const [GG, , bG] = DG(wG.id, wG.rotation).size;
          this.moveTo(Math.round(SG[0] - GG / 2), Math.round(SG[1] - bG / 2))
        }
      }
      moveTo(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const wG = this.placing;
        if (pZ(wG)) return;
        const [SG, LG, yG] = wG.corner;
        if (this.centreOnPlot(SG, yG) && !this.centreOnPlot(GG, bG, ZG))
          if (this.centreOnPlot(GG, yG, ZG)) bG = yG;
          else {
            if (!this.centreOnPlot(SG, bG, ZG)) return;
            GG = SG
          } GG === SG && bG === yG && ZG === wG.rotation || (wG.rotation = ZG, wG.corner = [GG, LG, bG], wG.moved = !0, wG.stillSinceMs = performance.now(), this.update())
      }
      centreOnPlot(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: wG,
          corner: SG
        } = this.placing, [LG, , yG] = DG(wG, ZG).size;
        return this.api.canModifyBlockAt(GG + Math.floor(LG / 2), SG[1], bG + Math.floor(yG / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.xh(null)
      }
      update() {
        const {
          id: GG,
          rotation: bG,
          corner: ZG,
          refusals: wG
        } = this.placing, SG = new xb, LG = [];
        let yG = !1,
          kG = 0;
        for (const {
            offset: pG,
            block: fG
          }
          of DG(GG, bG).cells) {
          const [GG, bG, wG] = [ZG[0] + pG[0], ZG[1] + pG[1], ZG[2] + pG[2]];
          LG.push(GG, bG, wG);
          const UG = !this.api.canModifyBlockAt(GG, bG, wG),
            YG = this.api.getBlockId(GG, bG, wG),
            VG = !cb(YG) && !ab(this.api.blockNameToBlockId(fG), YG);
          yG ||= UG, kG += VG ? 1 : 0, UG || VG ? SG.add(GG, bG, wG, Ob, Nb) : SG.add(GG, bG, wG, jb(fG), UZ, eb(fG))
        }
        this.chunkWatch.watch(LG), this.meshes.show(SG.toArray());
        const UG = this.view,
          YG = pZ(this.placing),
          VG = VZ(this.placing, yG);
        (null === UG || void 0 === UG ? void 0 : UG.id) === GG && UG.blocked === yG && UG.toClear === kG && UG.waiting === YG && UG.refusals === wG && UG.settled === VG || this.xh({
          id: GG,
          blocked: yG,
          toClear: kG,
          waiting: YG,
          refusals: wG,
          settled: VG
        })
      }
      xh(GG) {
        this.view = GG, XG.l.xh(kZ, GG, !0)
      }
    }

    function VZ(GG, bG) {
      let {
        moved: ZG,
        stillSinceMs: wG
      } = GG;
      return !bG && performance.now() - wG >= (ZG ? 1500 : 6e3)
    }

    function pZ(GG) {
      let {
        sent: bG
      } = GG;
      return null !== bG && !bG.timedOut
    }
    var fZ = ZG(4561);
    class QZ {
      constructor(GG) {
        this.placement = GG, this.press = null
      }
      down(GG) {
        if (null !== this.press) return !1;
        const {
          id: bG,
          mouse: ZG,
          x: wG,
          y: SG,
          atMs: LG
        } = GG;
        return this.press = {
          id: bG,
          mouse: ZG,
          x: wG,
          y: SG,
          atMs: LG,
          moved: !1
        }, ZG || this.placement.beginDrag(GG.ndcX, GG.ndcY), !0
      }
      move(GG) {
        const bG = this.press;
        null !== bG && bG.id === GG.id && (bG.moved ||= Math.hypot(GG.x - bG.x, GG.y - bG.y) > 8), GG.mouse ? this.placement.hoverAt(GG.ndcX, GG.ndcY) : (null === bG || void 0 === bG ? void 0 : bG.id) === GG.id && this.placement.dragTo(GG.ndcX, GG.ndcY)
      }
      up(GG) {
        const bG = this.press;
        (null === bG || void 0 === bG ? void 0 : bG.id) === GG.id && (this.move(GG), this.end(), !bG.moved && (bG.mouse || GG.atMs - bG.atMs <= 250) && this.placement.tap())
      }
      cancel(GG) {
        var bG;
        (null === (bG = this.press) || void 0 === bG ? void 0 : bG.id) === GG && this.end()
      }
      leave(GG) {
        let {
          id: bG,
          mouse: ZG
        } = GG;
        ZG && this.placement.endHover(), this.cancel(bG)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }
    const KZ = "PlotsPlacementLayer";

    function hZ(GG) {
      let {
        placement: bG
      } = GG;
      return null === (0, UG.j)(kZ, bG.getView()) ? null : (0, lG.jsx)(dZ, {
        placement: bG
      })
    }

    function dZ(GG) {
      let {
        placement: bG
      } = GG;
      (0, fZ.e)(!0, !0, KZ);
      const ZG = (0, LG.useMemo)((() => new QZ(bG)), [bG]);
      return (0, lG.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: GG => {
          "mouse" === GG.pointerType && 0 !== GG.button || !ZG.down(JZ(GG)) || GG.currentTarget.setPointerCapture(GG.pointerId)
        },
        onPointerMove: GG => {
          ZG.move(JZ(GG))
        },
        onPointerUp: GG => {
          ZG.up(JZ(GG))
        },
        onPointerCancel: GG => {
          ZG.cancel(GG.pointerId)
        },
        onLostPointerCapture: GG => {
          ZG.cancel(GG.pointerId)
        },
        onPointerLeave: GG => {
          ZG.leave(JZ(GG))
        },
        "aria-hidden": !0
      })
    }

    function JZ(GG) {
      const {
        left: bG,
        top: ZG,
        width: wG,
        height: SG
      } = GG.currentTarget.getBoundingClientRect();
      return {
        id: GG.pointerId,
        mouse: "mouse" === GG.pointerType,
        x: GG.clientX,
        y: GG.clientY,
        ndcX: (GG.clientX - bG) / wG * 2 - 1,
        ndcY: 1 - (GG.clientY - ZG) / SG * 2,
        atMs: GG.timeStamp
      }
    }

    function rZ() {
      return (0, hb.t)().some((GG => GG !== hb.e && GG !== KZ))
    }
    const zZ = 2500;

    function EZ(GG) {
      let {
        hud: bG,
        guide: ZG,
        tracker: wG,
        placement: SG,
        children: yG
      } = GG;
      const {
        t: pG
      } = (0, VG.w)(), {
        isTouchScreen: fG
      } = (0, kG.o)(["isTouchScreen"]), QG = (0, UG.j)(bb, bG.getGuide()), KG = (0, UG.j)(Gb, bG.getPlot()), hG = (0, UG.j)(NG, wG.get()), dG = function(GG) {
        const {
          openInGameMenuName: bG,
          openEverythingMenuName: ZG,
          loadingOverlayVisible: wG
        } = (0, kG.o)(["openInGameMenuName", "openEverythingMenuName", "loadingOverlayVisible"]), SG = (0, db.e)(), [yG, YG] = (0, LG.useState)(rZ);
        (0, LG.useEffect)((() => {
          const GG = () => {
            YG(rZ())
          };
          GG();
          const bG = (0, hb.p)(GG),
            ZG = (0, hb.m)(GG);
          return () => {
            bG(), ZG()
          }
        }), []);
        const VG = (0, UG.j)(kZ, GG.getView()),
          pG = "clientGame" === bG;
        return {
          hudHidden: SG || wG,
          journalOpen: pG,
          covered: yG || null !== ZG || null !== bG && !pG,
          placing: null === VG ? null : VG.settled ? "placeBuild" : "placeSpot"
        }
      }(SG), JG = function(GG, bG, ZG) {
        return "none" === GG[0] || ZG.hudHidden || ZG.journalOpen || ZG.covered ? null : null !== ZG.placing ? ZG.placing : null !== bG ? "build" : "choose" === GG[1] ? "openJournal" : null
      }(QG, null === hG ? null : hG.id, dG), rG = function() {
        const [GG, bG] = (0, LG.useState)(null), [ZG, wG] = (0, LG.useState)(!1);
        return (0, UG.g)(Zb, (() => {
          bG(performance.now())
        })), (0, LG.useEffect)((() => {
          if (null === GG) return;
          const bG = window.setTimeout((() => {
              wG(!0)
            }), zZ),
            ZG = window.setTimeout((() => {
              wG(!1)
            }), 7500);
          return () => {
            window.clearTimeout(bG), window.clearTimeout(ZG)
          }
        }), [GG]), ZG
      }() && !dG.hudHidden && !dG.covered && !dG.journalOpen && null === dG.placing, [zG, EG] = (0, LG.useState)(!1);
      (0, LG.useEffect)((() => {
        dG.journalOpen && EG(!0)
      }), [dG.journalOpen]);
      const [XG, uG] = (0, LG.useState)(null), [iG, CG] = (0, LG.useState)(null), [WG, mG] = (0, LG.useState)(null), IG = (0, LG.useMemo)((() => ({
        hint: JG,
        journalRef: uG,
        placementCardRef: CG,
        buildRef: mG
      })), [JG]), FG = "plot" === KG[0] && "own" === KG[5], vG = fG && !zG && FG ? {
        onSkip: ZG.skip
      } : null;
      return (0, lG.jsxs)(oG.Provider, {
        value: IG,
        children: [yG, "openJournal" === JG && null !== XG && (0, lG.jsx)(Yb, {
          target: XG,
          placement: "left",
          spotlight: vG,
          children: fG ? pG("plotsGame:guideOpenJournal") : pG("plotsGame:guideOpenJournalKeys", {
            key: (0, YG.t)(jG)
          })
        }), "placeSpot" === JG && null !== iG && (0, lG.jsxs)(lG.Fragment, {
          children: [fG && (0, lG.jsx)(Kb, {}), (0, lG.jsx)(Yb, {
            target: iG,
            placement: "top",
            children: pG(fG ? "plotsGame:guidePlaceSpotTouch" : "plotsGame:guidePlaceSpotMouse")
          })]
        }), "placeBuild" === JG && null !== WG && null !== iG && (0, lG.jsx)(Yb, {
          target: fG ? WG : iG,
          placement: "top",
          children: pG(fG ? "plotsGame:guidePlaceBuildTouch" : "plotsGame:guidePlaceBuildMouse")
        }), "build" === JG && null !== hG && (0, lG.jsx)(fb, {
          progress: hG,
          guide: ZG
        }), rG && null !== XG && (0, lG.jsx)(Yb, {
          target: XG,
          placement: "left",
          children: pG("plotsGame:guideMoreBuilds")
        })]
      })
    }
    var oZ = ZG(38901),
      XZ = ZG(38909);
    class uZ {
      constructor(GG, bG, ZG) {
        this.api = GG, this.localPlayerId = bG, this.nextCell = ZG, this.hand = null, this.skip = () => {
          this.api.sendCommand("plotsguide skip")
        }, this.bindHand = GG => {
          this.hand = GG
        }
      }
      afterRender(GG) {
        const bG = this.hand;
        if (null === bG) return;
        const ZG = this.nextCell.get();
        if (null === ZG) return void(0, oZ.g)(bG, !0);
        const wG = (0, XZ.e)(bG, GG, this.api.getPositionView(this.localPlayerId), ZG, 1, 40);
        null !== wG && (0, oZ.d)(bG, Math.round(100 * wG.x) / 100, Math.round(100 * wG.y) / 100)
      }
    }
    var iZ = ZG(1393),
      CZ = ZG(4549),
      WZ = ZG(1088);
    const mZ = {
        farm_hut: ZG.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
        farm_house: ZG.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
        farm_barn: ZG.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
        rusticHome_tent: ZG.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
        rusticHome_cabin: ZG.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
        rusticHome_house: ZG.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
        market_stand: ZG.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
        market_stall: ZG.p + "static/media/market_stall.9a562807f9dff591618a.webp",
        market_shop: ZG.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
        castle_wall: ZG.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
        castle_gate: ZG.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
        castle_tower: ZG.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
      },
      IZ = ["plotsGame:guideEffortQuick", "plotsGame:guideEffortMedium", "plotsGame:guideEffortBigger"],
      FZ = ["market_stand", "rusticHome_tent", "farm_hut"].map((GG => ({
        id: GG,
        blocks: DG(GG, 0).cells.length
      }))).sort(((GG, bG) => GG.blocks - bG.blocks)).map(((GG, bG) => ({
        ...GG,
        effortKey: IZ[bG]
      })));

    function vZ(GG) {
      let {
        onBuild: bG
      } = GG;
      const {
        t: ZG
      } = (0, VG.w)();
      return (0, lG.jsx)("div", {
        className: "PlotsJournalBookPages PlotsGuideChooserCover",
        children: (0, lG.jsxs)("div", {
          className: "PlotsGuideChooser",
          children: [(0, lG.jsx)("h3", {
            className: "PlotsGuideChooserTitle",
            children: ZG("plotsGame:guidePickTitle")
          }), (0, lG.jsxs)("p", {
            className: "PlotsGuideChooserNote",
            children: [(0, lG.jsx)("img", {
              src: Lb,
              alt: "",
              draggable: !1
            }), ZG("plotsGame:guidePickNote")]
          }), (0, lG.jsx)("div", {
            className: "PlotsGuideChooserStarters",
            children: FZ.map((GG => {
              let {
                id: wG,
                blocks: SG,
                effortKey: LG
              } = GG;
              return (0, lG.jsxs)("article", {
                className: "PlotsGuideStarter",
                children: [(0, lG.jsx)("button", {
                  type: "button",
                  className: "PlotsGuideStarterSketch",
                  tabIndex: -1,
                  "aria-hidden": !0,
                  "data-pad-ignore": !0,
                  onClick: () => {
                    bG(wG)
                  },
                  children: (0, lG.jsx)("img", {
                    src: mZ[wG],
                    alt: "",
                    draggable: !1
                  })
                }), (0, lG.jsxs)("div", {
                  className: "PlotsGuideStarterInfo",
                  children: [(0, lG.jsxs)("span", {
                    className: "PlotsGuideStarterText",
                    children: [(0, lG.jsx)("span", {
                      className: "PlotsGuideStarterName",
                      children: ZG(WG(wG).displayName.translationKey)
                    }), (0, lG.jsx)("span", {
                      className: "PlotsGuideStarterEffort",
                      children: ZG(LG)
                    }), (0, lG.jsx)("span", {
                      className: "PlotsGuideStarterBlocks",
                      children: ZG("plotsGame:journalBlocks", {
                        blocks: String(SG)
                      })
                    })]
                  }), (0, lG.jsx)(iZ.k, {
                    onClick: () => {
                      bG(wG)
                    },
                    children: ZG("plotsGame:placementBuild")
                  })]
                })]
              }, wG)
            }))
          })]
        })
      })
    }

    function aZ(GG) {
      let {
        direction: bG,
        disabled: ZG,
        onTurn: wG
      } = GG;
      const {
        t: SG
      } = (0, VG.w)();
      return (0, lG.jsx)("div", {
        className: fG()("PlotsJournalArrow", bG),
        children: (0, lG.jsx)(iZ.d, {
          disabled: ZG,
          ariaLabel: SG("Forward" === bG ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            wG(bG)
          },
          children: (0, lG.jsx)(hG.c, {
            name: "angle-up"
          })
        })
      })
    }
    const cZ = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function lZ(GG) {
      let {
        page: bG,
        building: ZG,
        onBuild: wG,
        onPutAway: SG
      } = GG;
      const {
        t: LG
      } = (0, VG.w)(), {
        displayName: yG,
        tier: kG
      } = WG(bG.id), UG = DG(bG.id, 0).cells.length, YG = "locked" === bG.state, pG = ZG ? iZ.d : iZ.k;
      return (0, lG.jsxs)("article", {
        className: fG()("PlotsJournalPage", {
          Locked: YG
        }),
        children: [(0, lG.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: LG(yG.translationKey)
        }), (0, lG.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [LG(cZ[kG]), " \xb7 ", LG("plotsGame:journalBlocks", {
            blocks: String(UG)
          })]
        }), (0, lG.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [CG.map((GG => (0, lG.jsx)("img", {
            className: fG()({
              Shown: GG === bG.id
            }),
            src: mZ[GG],
            alt: "",
            draggable: !1
          }, GG))), "completed" === bG.state && (0, lG.jsx)("span", {
            className: "PlotsJournalStamp",
            children: LG("plotsGame:journalBuilt")
          }), YG && (0, lG.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, lG.jsx)(hG.c, {
              name: "lock"
            })
          })]
        }), null !== bG.note && (0, lG.jsx)("p", {
          className: "PlotsJournalNote",
          children: LG(bG.note)
        }), (0, lG.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === bG.state && (0, lG.jsx)("p", {
            className: "PlotsJournalHint",
            children: LG("plotsGame:journalLocked", {
              name: LG(WG(bG.unlockedBy).displayName.translationKey)
            })
          }), bG.active && (0, lG.jsxs)(lG.Fragment, {
            children: [(0, lG.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: LG("plotsGame:journalBuilding")
            }), (0, lG.jsx)(iZ.h, {
              onClick: SG,
              children: LG("plotsGame:journalPutAway")
            })]
          }), !YG && !bG.active && (0, lG.jsx)(pG, {
            onClick: () => {
              wG(bG.id)
            },
            children: LG("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function jZ(GG) {
      let {
        className: bG,
        page: ZG,
        hidden: wG,
        building: SG,
        journal: LG
      } = GG;
      return (0, lG.jsxs)("div", {
        ref: GG => {
          null !== GG && (GG.inert = wG)
        },
        className: fG()("PlotsJournalSide", bG),
        children: [void 0 !== ZG && (0, lG.jsx)(lZ, {
          page: ZG,
          building: SG,
          onBuild: LG.build,
          onPutAway: LG.putAway
        }), void 0 === ZG && (0, lG.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var PZ = ZG(1873);

    function MZ(GG) {
      return Math.cos((0, PZ.j)(GG))
    }

    function AZ(GG) {
      return (0, PZ.C)(Math.acos(Xb.c.clamp(GG, -1, 1)))
    }

    function sZ(GG, bG, ZG, wG, SG) {
      const LG = Math.abs(bG - GG),
        yG = (0, PZ.C)(SG / (ZG * Math.abs(Math.sin((0, PZ.j)(GG))))),
        kG = 450 * Math.min(1, LG / wG),
        UG = yG > 0 ? 3 * LG / yG : 1 / 0;
      return Math.round(Math.max(120, Math.min(kG, UG)))
    }
    class qZ {
      constructor() {
        this.samples = []
      }
      add(GG, bG) {
        for (this.samples.push({
            x: GG,
            at: bG
          }); bG - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const GG = this.samples[0],
          bG = this.samples[this.samples.length - 1];
        return bG.at > GG.at ? (bG.x - GG.x) / (bG.at - GG.at) : 0
      }
    }

    function nZ(GG) {
      return AZ(new DOMMatrixReadOnly(getComputedStyle(GG).transform).m11)
    }

    function gZ(GG, bG) {
      GG.style.transform = `rotateY(${-bG}deg)`, GG.classList.add("Turning")
    }

    function eZ(GG, bG, ZG) {
      const [wG, SG] = (0, LG.useState)(ZG), yG = (0, LG.useRef)(null), kG = (0, LG.useRef)(null), UG = (0, LG.useRef)({
        Forward: null,
        Back: null
      }), YG = bG ? 2 : 1, VG = bG ? 180 : 90, pG = wG - wG % YG, fG = pG > 0, QG = pG + YG < GG, KG = (0, LG.useCallback)((() => {
        const GG = kG.current;
        return null === GG ? pG : (kG.current = null, GG.animation.cancel(), (bG = UG.current[GG.direction]).style.transform = "", bG.classList.remove("Turning"), null === GG.next ? pG : (SG(GG.next), GG.next));
        var bG
      }), [pG]), hG = (0, LG.useCallback)(((GG, bG, ZG, wG) => {
        const SG = UG.current[GG],
          LG = nZ(SG),
          yG = bG === ("Forward" === GG) ? VG : 0;
        gZ(SG, yG);
        const pG = SG.animate([{
          transform: `rotateY(${-LG}deg)`
        }, {
          transform: `rotateY(${-yG}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : sZ(LG, yG, SG.offsetWidth, VG, yG > LG ? -ZG : ZG),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        kG.current = {
          direction: GG,
          animation: pG,
          next: bG ? wG + ("Forward" === GG ? YG : -YG) : null
        }, pG.onfinish = () => {
          var GG;
          (null === (GG = kG.current) || void 0 === GG ? void 0 : GG.animation) === pG && KG()
        }
      }), [YG, VG, KG]), dG = (0, LG.useCallback)((bG => {
        if (null !== yG.current) return;
        const ZG = KG();
        ("Forward" === bG ? ZG + YG < GG : ZG > 0) && hG(bG, !0, 0, ZG)
      }), [KG, hG, YG, GG]);
      (0, LG.useEffect)((() => () => {
        var GG;
        null === (GG = kG.current) || void 0 === GG || GG.animation.cancel()
      }), []), (0, LG.useEffect)((() => {
        const GG = GG => {
          var bG;
          GG.pointerId !== (null === (bG = yG.current) || void 0 === bG ? void 0 : bG.pointerId) || yG.current.following || (yG.current = null)
        };
        return window.addEventListener("pointerup", GG), () => {
          window.removeEventListener("pointerup", GG)
        }
      }), []);
      const JG = (GG, bG, ZG) => {
          const wG = function(GG, bG, ZG, wG) {
            return (GG < 0 ? ZG : wG) ? Xb.c.clampAbs(GG, bG) : Math.sign(GG) * bG * (1 - 1 / (.55 * Math.abs(GG) / bG + 1))
          }(GG.base + ZG, YG * GG.width, QG, fG);
          return "Forward" === bG ? Math.min(wG, 0) : Math.max(wG, 0)
        },
        rG = (GG, bG) => {
          const ZG = yG.current;
          if (yG.current = null, null === ZG.direction) return;
          ZG.speed.add(GG, bG);
          const wG = ZG.speed.get(),
            SG = JG(ZG, ZG.direction, GG - ZG.x);
          hG(ZG.direction, null !== function(GG, bG, ZG, wG, SG) {
            if (Math.abs(bG) >= .3 ? Math.sign(bG) !== Math.sign(GG) : Math.abs(GG) < .5 * ZG) return null;
            const LG = GG < 0 ? "Forward" : "Back";
            return ("Forward" === LG ? wG : SG) ? LG : null
          }(SG, wG, YG * ZG.width, QG, fG), wG, pG)
        },
        zG = {
          onPointerDown: GG => {
            var bG;
            if (!GG.isPrimary || 0 !== GG.button || null !== kG.current && null !== GG.target.closest("button")) return;
            const ZG = new qZ;
            ZG.add(GG.clientX, GG.timeStamp);
            const wG = UG.current.Forward.offsetWidth,
              SG = kG.current;
            kG.current = null;
            let LG = 0;
            if (null !== SG) {
              const bG = UG.current[SG.direction],
                ZG = nZ(bG);
              SG.animation.cancel(), gZ(bG, ZG), LG = function(GG, bG, ZG, wG) {
                return (GG < 0 ? ZG : wG) ? GG : Math.sign(GG) * bG * (1 / (1 - Math.min(Math.abs(GG) / bG, .99)) - 1) / .55
              }(function(GG, bG, ZG, wG) {
                return ZG * (MZ(bG) - MZ("Forward" === GG ? 0 : wG))
              }(SG.direction, ZG, wG, VG), YG * wG, QG, fG), GG.currentTarget.setPointerCapture(GG.pointerId)
            }
            yG.current = {
              pointerId: GG.pointerId,
              x: GG.clientX,
              y: GG.clientY,
              base: LG,
              width: wG,
              following: null !== SG,
              direction: null !== (bG = null === SG || void 0 === SG ? void 0 : SG.direction) && void 0 !== bG ? bG : null,
              speed: ZG
            }
          },
          onPointerMove: GG => {
            const bG = yG.current;
            if (null === bG || GG.pointerId !== bG.pointerId) return;
            if (0 === GG.buttons) return void rG(GG.clientX, GG.timeStamp);
            const ZG = GG.clientX - bG.x;
            !bG.following && function(GG, bG) {
              return Math.abs(GG) > 8 && Math.abs(GG) > Math.abs(bG)
            }(ZG, GG.clientY - bG.y) && (bG.following = !0, bG.direction = ZG < 0 ? "Forward" : "Back", GG.currentTarget.setPointerCapture(GG.pointerId)), null !== bG.direction && (bG.speed.add(GG.clientX, GG.timeStamp), gZ(UG.current[bG.direction], function(GG, bG, ZG, wG) {
              const SG = ZG * MZ("Forward" === GG ? 0 : wG) + bG;
              return Xb.c.clamp(AZ(SG / ZG), 0, wG)
            }(bG.direction, JG(bG, bG.direction, ZG), bG.width, VG)))
          },
          onPointerUp: GG => {
            var bG;
            GG.pointerId === (null === (bG = yG.current) || void 0 === bG ? void 0 : bG.pointerId) && rG(GG.clientX, GG.timeStamp)
          },
          onPointerCancel: GG => {
            const bG = yG.current;
            GG.pointerId === (null === bG || void 0 === bG ? void 0 : bG.pointerId) && (yG.current = null, null !== bG.direction && hG(bG.direction, !1, 0, pG))
          }
        };
      return {
        first: pG,
        step: YG,
        canGoBack: fG,
        canGoForward: QG,
        turnPage: dG,
        leaves: UG,
        pagesHandlers: zG
      }
    }

    function RZ(GG, bG) {
      return GG > bG && GG >= 600
    }

    function TZ(GG) {
      let {
        journal: bG,
        hud: ZG,
        guide: wG
      } = GG;
      const {
        t: SG
      } = (0, VG.w)(), kG = (0, UG.j)(aG, bG.getPages()), YG = (0, UG.j)(bb, ZG.getGuide()), pG = kG.find((GG => GG.active)), QG = (KG = YG, hG = void 0 === pG ? null : pG.id, "active" === KG[0] && null === hG);
      var KG, hG;
      const dG = (0, WZ.k)(RZ),
        {
          first: JG,
          step: EG,
          canGoBack: oG,
          canGoForward: XG,
          turnPage: uG,
          leaves: iG,
          pagesHandlers: CG
        } = eZ(kG.length, dG, (() => function(GG) {
          const bG = GG.findIndex((GG => GG.active));
          return -1 !== bG ? bG : Math.max(0, GG.findIndex((GG => "open" === GG.state)))
        }(kG)));
      (0, LG.useEffect)((() => {
        bG.onOpened()
      }), [bG]), (0, rG.c)((GG => !QG && ("ArrowLeft" === GG.code || "ArrowRight" === GG.code) && !(0, zG.isTypingInInput)()), (GG => {
        GG.stopPropagation(), uG("ArrowLeft" === GG.code ? "Back" : "Forward")
      }));
      const WG = void 0 !== pG,
        mG = (GG, ZG, wG) => (0, lG.jsx)(jZ, {
          className: GG,
          page: ZG >= 0 && ZG < kG.length ? kG[ZG] : void 0,
          hidden: wG,
          building: WG,
          journal: bG
        });
      return (0, lG.jsx)(CZ.b, {
        close: yG.i,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, lG.jsxs)("section", {
          className: fG()("PlotsJournal", {
            Spread: dG
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": SG("plotsGame:journalTitle"),
          children: [(0, lG.jsx)(iZ.j, {
            className: "PlotsJournalClose",
            onClick: yG.i
          }), "active" === YG[0] && (0, lG.jsx)(Ub, {
            className: "PlotsJournalGuideSkip",
            onSkip: wG.skip
          }), QG && (0, lG.jsx)(vZ, {
            onBuild: bG.build
          }), !QG && (0, lG.jsx)(aZ, {
            direction: "Back",
            disabled: !oG,
            onTurn: uG
          }), (0, lG.jsx)("div", {
            hidden: QG,
            className: "PlotsJournalBookPages",
            ...CG,
            children: (0, lG.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [dG && mG("Left", JG - 2, !0), mG("Right", JG + 2 * EG - 1, !0), (0, lG.jsxs)("div", {
                ref: GG => {
                  iG.current.Back = GG
                },
                className: "PlotsJournalLeaf Back",
                children: [mG("Recto", JG - 1, !0), dG && mG("Verso", JG, !1)]
              }), (0, lG.jsxs)("div", {
                ref: GG => {
                  iG.current.Forward = GG
                },
                className: "PlotsJournalLeaf Forward",
                children: [mG("Recto", JG + EG - 1, !1), dG && mG("Verso", JG + EG, !0)]
              })]
            })
          }), !QG && (0, lG.jsx)(aZ, {
            direction: "Forward",
            disabled: !XG,
            onTurn: uG
          })]
        })
      })
    }

    function HZ(GG, bG, ZG, wG, SG) {
      const LG = Math.hypot(...bG.dir);
      if (!Number.isFinite(LG) || 0 === LG) return -1;
      const {
        from: yG,
        reach: kG,
        solid: UG
      } = bG, YG = [bG.dir[0] / LG, bG.dir[1] / LG, bG.dir[2] / LG], VG = null === UG ? kG : Math.min(kG, function(GG, bG, ZG) {
        const wG = tZ(GG, bG, ZG);
        if (wG !== 1 / 0) return wG;
        return (ZG[0] + .5 - GG[0]) * bG[0] + (ZG[1] + .5 - GG[1]) * bG[1] + (ZG[2] + .5 - GG[2]) * bG[2]
      }(yG, YG, UG) + .75);
      let pG = -1,
        fG = 1 / 0,
        QG = 1 / 0;
      for (let KG = 0; KG < GG.length; KG += 4) {
        const bG = [GG[KG], GG[KG + 1], GG[KG + 2]],
          LG = SG(KG) ? kG : VG;
        let UG = -1,
          hG = tZ(yG, YG, bG);
        if (hG > LG) {
          const GG = [bG[0] + .5 - yG[0], bG[1] + .5 - yG[1], bG[2] + .5 - yG[2]];
          if (hG = GG[0] * YG[0] + GG[1] * YG[1] + GG[2] * YG[2], hG <= 0 || hG > LG) continue;
          if (UG = Math.hypot(GG[0] - hG * YG[0], GG[1] - hG * YG[1], GG[2] - hG * YG[2]), UG > .7 || !wG(KG)) continue
        }(UG < fG || UG === fG && hG < QG) && ZG(KG) && (pG = KG, fG = UG, QG = hG)
      }
      return pG
    }

    function tZ(GG, bG, ZG) {
      let wG = 0,
        SG = 1 / 0;
      for (let LG = 0; LG < 3; LG++) {
        const yG = ZG[LG] - GG[LG];
        if (0 === bG[LG]) {
          if (yG > 0 || yG + 1 < 0) return 1 / 0;
          continue
        }
        const kG = yG / bG[LG],
          UG = (yG + 1) / bG[LG];
        wG = Math.max(wG, Math.min(kG, UG)), SG = Math.min(SG, Math.max(kG, UG))
      }
      return wG <= SG ? wG : 1 / 0
    }
    var DZ = ZG(37245),
      NZ = ZG(38468);
    const OZ = [1, 1, 1];
    class xZ {
      constructor(GG) {
        this.api = GG, this.meshes = null, this.shown = null
      }
      show(GG) {
        if (!(0, DZ.f)(GG, this.shown))
          if (this.shown = null === GG ? null : [GG[0], GG[1], GG[2]], null !== this.meshes)
            for (const bG of this.meshes) this.api.setGameMesh(bG, null === GG ? {
              visible: !1
            } : {
              anchor: GG,
              visible: !0
            });
          else if (null !== GG) {
          const bG = [NZ.f, NZ.f, NZ.f, 0, 0, 0];
          this.meshes = [this.build([bG], NZ.j, GG), this.build((0, NZ.d)(), NZ.r, GG)]
        }
      }
      dispose() {
        for (const bG of null !== (GG = this.meshes) && void 0 !== GG ? GG : []) {
          var GG;
          this.api.disposeGameMesh(bG)
        }
        this.meshes = null, this.shown = null
      }
      build(GG, bG, ZG) {
        const wG = [],
          SG = [];
        for (const [LG, yG, kG, UG, YG, VG] of GG)(0, Hb.g)(wG, SG, [UG + .5, YG + .5, VG + .5], [LG, yG, kG]);
        return this.api.createGameMesh({
          positions: wG,
          indices: SG
        }, {
          rgb: OZ,
          alpha: bG,
          onTop: !0
        }, ZG)
      }
    }

    function BZ(GG, bG) {
      const ZG = Rb.d.Hd / 2;
      return GG[0] < bG[0] + ZG && GG[0] + 1 > bG[0] - ZG && GG[1] < bG[1] + Rb.d.td && GG[1] + 1 > bG[1] && GG[2] < bG[2] + ZG && GG[2] + 1 > bG[2] - ZG
    }

    function Gw(GG, bG) {
      return GG.getClientOption(bG, "blockReach") + 1
    }
    class bw {
      constructor(GG, bG, ZG) {
        this.api = GG, this.localPlayerId = bG, this.foreseen = ZG, this.cells = [], this.playerCells = [], this.next = null
      }
      get() {
        return this.next
      }
      setCells(GG) {
        this.cells = GG
      }
      playerMoved() {
        return Zw(this.api.getPositionView(this.localPlayerId)).some(((GG, bG) => GG !== this.playerCells[bG]))
      }
      Df(GG) {
        const bG = this.api.getPositionView(this.localPlayerId);
        return this.playerCells.splice(0, 1 / 0, ...Zw(bG)), this.next = this.pickFrom(null === GG ? [bG[0], bG[1] + 1, bG[2]] : (0, DZ.b)(GG), (() => !1)), this.next
      }
      pickFrom(GG, bG) {
        const ZG = this.api.getPositionView(this.localPlayerId),
          wG = [ZG[0], ZG[1] + Rb.d.td * Rb.d.playerEyeToHeightRatio, ZG[2]],
          SG = Gw(this.api, this.localPlayerId),
          {
            cells: LG
          } = this,
          yG = GG => [LG[GG], LG[GG + 1], LG[GG + 2]],
          kG = function(GG, bG, ZG, wG, SG, LG) {
            let yG = -1,
              kG = -1,
              UG = 1 / 0;
            for (let YG = 0; YG < GG.length; YG += bG) {
              const bG = (LG(YG) ? 2 : 0) + (wG(YG) ? 1 : 0);
              if (bG < kG || SG(YG)) continue;
              const VG = (GG[YG] + .5 - ZG[0]) ** 2 + (GG[YG + 1] + .5 - ZG[1]) ** 2 + (GG[YG + 2] + .5 - ZG[2]) ** 2;
              (bG > kG || VG < UG) && (yG = YG, kG = bG, UG = VG)
            }
            return yG
          }(LG, 4, GG, (GG => 1 === LG[GG + 3]), (GG => {
            const wG = yG(GG);
            return BZ(wG, ZG) || this.foreseen.has(wG.join()) || bG(wG)
          }), (GG => function(GG, bG, ZG) {
            return (bG[0] + .5 - GG[0]) ** 2 + (bG[1] + .5 - GG[1]) ** 2 + (bG[2] + .5 - GG[2]) ** 2 <= ZG ** 2
          }(wG, yG(GG), SG)));
        return -1 === kG ? null : yG(kG)
      }
    }

    function Zw(GG) {
      let [bG, ZG, wG] = GG;
      const SG = Rb.d.Hd / 2;
      return [Math.floor(bG), Math.floor(ZG), Math.floor(wG), Math.floor(bG - SG), Math.floor(bG + SG), Math.floor(ZG + Rb.d.td), Math.floor(wG - SG), Math.floor(wG + SG)]
    }
    class ww {
      constructor(GG, bG, ZG) {
        this.api = GG, this.localPlayerId = bG, this.pickNext = ZG, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(GG) {
        const [bG, , ZG] = GG.cameraDirection, wG = Math.hypot(bG, ZG);
        wG > .001 && (this.heading = [bG / wG, ZG / wG])
      }
      tapped(GG, bG, ZG) {
        const wG = Gw(this.api, this.localPlayerId),
          {
            origin: SG,
            direction: LG
          } = this.api.getActionRay(),
          yG = [...SG],
          kG = [
            [yG, [yG[0] + LG[0] * wG, yG[1] + LG[1] * wG, yG[2] + LG[2] * wG]]
          ];
        null !== GG && kG.push([yG, (0, DZ.b)(GG)]), this.tap = {
          lines: kG,
          next: bG,
          ms: ZG
        }
      }
      filled(GG, bG) {
        this.tap = null, this.turnFrom(GG, bG), this.retry(bG)
      }
      arrived(GG, bG) {
        const {
          tap: ZG
        } = this;
        if (null === ZG || bG - ZG.ms > 1500) return null;
        const wG = (0, DZ.b)(GG);
        return (0, DZ.f)(ZG.next, GG) || ZG.lines.some((GG => {
          let [bG, ZG] = GG;
          return function(GG, bG, ZG) {
            const wG = [ZG[0] - bG[0], ZG[1] - bG[1], ZG[2] - bG[2]],
              SG = [GG[0] - bG[0], GG[1] - bG[1], GG[2] - bG[2]],
              LG = wG[0] ** 2 + wG[1] ** 2 + wG[2] ** 2,
              yG = 0 === LG ? 0 : Math.min(1, Math.max(0, (SG[0] * wG[0] + SG[1] * wG[1] + SG[2] * wG[2]) / LG));
            return Math.hypot(SG[0] - wG[0] * yG, SG[1] - wG[1] * yG, SG[2] - wG[2] * yG)
          }(wG, bG, ZG) <= .9
        })) ? (this.tap = null, this.turnFrom(GG, bG), ZG.ms) : null
      }
      turnFrom(GG, bG) {
        this.pending = {
          from: GG,
          ms: bG,
          turnMs: Math.max(50, Math.min(250, bG - this.lastFillMs))
        }, this.lastFillMs = bG
      }
      retry(GG) {
        const {
          pending: bG
        } = this;
        if (null === bG) return;
        if (GG - bG.ms > 1500) return void(this.pending = null);
        const ZG = this.pickNext((0, DZ.b)(bG.from), (GG => (0, DZ.f)(GG, bG.from)));
        if (null === ZG) return;
        this.pending = null;
        const {
          turning: wG
        } = this;
        if (null !== wG && GG < wG.endMs && (0, DZ.f)(wG.to, ZG)) return;
        const SG = this.api.getActionRay().origin,
          LG = [ZG[0] + .5 - SG[0], ZG[1] + .5 - SG[1], ZG[2] + .5 - SG[2]],
          yG = Math.hypot(LG[0], LG[2]);
        if (yG < .3) {
          const GG = Math.max(yG, .001);
          LG[0] = this.heading[0] * GG, LG[2] = this.heading[1] * GG
        }
        this.api.turnCamera(LG, bG.turnMs), this.turning = {
          to: ZG,
          endMs: GG + bG.turnMs
        }
      }
    }
    class Sw {
      constructor(GG, bG, ZG, wG) {
        this.api = GG, this.localPlayerId = bG, this.juice = ZG, this.tracker = wG, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.lastFilled = null, this.lastSeenFilled = null, this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = void 0, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new Tb(GG), this.meshes = new Bb(GG), this.outline = new xZ(GG), this.nextCell = new bw(GG, bG, this.foreseen), this.turn = new ww(GG, bG, ((GG, bG) => this.nextCell.pickFrom(GG, bG)))
      }
      hK(GG) {
        const bG = "active" === GG[0] ? `${GG[1]}|${GG[3]}|${GG[4]}|${GG[5]}|${GG[6]}` : "";
        if ("active" !== GG[0]) "built" === GG[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , ZG, wG, SG, LG] = GG;
          bG !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = ZG) : ZG === this.layerY ? this.burstUnlisted(wG) : ZG > this.layerY && this.finishLayer(ZG), this.layerY = ZG, this.layerCells.has(ZG) || this.layerCells.set(ZG, wG.filter(Lw)), this.ghostCells = wG, this.palette = SG, this.occupiedCells = LG
        }
        bG !== this.blueprint && (this.tracker.show("active" === GG[0] && GG[2] ? {
          id: GG[1],
          y: GG[4]
        } : null), this.blueprint = bG, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((GG => this.api.blockNameToBlockId(GG))), this.chunkWatch.watch([...this.ghostCells.filter(Lw), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(GG) {
        this.burstUnlisted([]), GG > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = GG)
      }
      Tp() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const GG = performance.now();
        let bG = !1;
        for (const [wG, SG] of this.foreseen) {
          var ZG;
          if (GG - SG > 1e3) this.foreseen.delete(wG), bG = !0, (null === (ZG = this.lastFilled) || void 0 === ZG ? void 0 : ZG.join()) === wG && (this.lastFilled = this.lastSeenFilled)
        }(bG || this.nextCell.playerMoved()) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(GG) {
        const bG = new Set;
        for (let SG = 0; SG < GG.length; SG += 4) bG.add(`${GG[SG]},${GG[SG+1]},${GG[SG+2]}`);
        const ZG = [],
          {
            ghostCells: wG
          } = this;
        for (let SG = 0; SG < wG.length; SG += 4) {
          const GG = `${wG[SG]},${wG[SG+1]},${wG[SG+2]}`;
          !bG.has(GG) && this.open.delete(GG) && ZG.push(this.filledCell(SG))
        }
        this.burst(ZG)
      }
      refresh() {
        const {
          ghostCells: GG,
          palette: bG,
          occupiedCells: ZG
        } = this, wG = new xb, SG = new Set, LG = [], yG = [];
        let kG = 0;
        for (let UG = 0; UG < GG.length; UG += 4) {
          const [ZG, YG, VG, pG] = [GG[UG], GG[UG + 1], GG[UG + 2], GG[UG + 3]], fG = this.api.getBlockId(ZG, YG, VG), QG = `${ZG},${YG},${VG}`, KG = ab(this.blockIds[pG], fG);
          !KG && cb(fG) ? wG.add(ZG, YG, VG, jb(bG[pG]), Db, eb(bG[pG])) : KG ? this.open.has(QG) && LG.push(this.filledCell(UG)) : wG.add(ZG, YG, VG, Ob, Nb), KG || kG++, !KG && this.api.isBlockInLoadedChunk(ZG, YG, VG) && (SG.add(QG), yG.push(ZG, YG, VG, cb(fG) ? 0 : 1))
        }
        this.open = SG, this.nextCell.setCells(yG), this.tracker.update(this.layerY, this.topLayerY, kG);
        for (let UG = 0; UG < ZG.length; UG += 3) {
          const [GG, bG, SG] = [ZG[UG], ZG[UG + 1], ZG[UG + 2]];
          cb(this.api.getBlockId(GG, bG, SG)) || wG.add(GG, bG, SG, Ob, Nb)
        }
        this.meshes.show(wG.toArray()), this.burst(LG), this.showNext(), this.turn.retry(performance.now())
      }
      burst(GG) {
        const bG = performance.now(),
          ZG = [];
        for (const [SG, LG, yG] of GG) {
          const GG = [SG, LG, yG];
          this.lastSeenFilled = GG, this.foreseen.delete(GG.join()) || ZG.push(GG)
        }
        const wG = this.isHolding(bG);
        for (const SG of ZG) {
          if (this.lastFilled = SG, wG && this.pressFilled) {
            this.turn.filled(SG, bG);
            continue
          }
          const GG = this.turn.arrived(SG, bG);
          if (null !== GG) {
            this.pressFilled = wG;
            for (const [bG, ZG] of this.foreseen) ZG <= GG && this.foreseen.delete(bG)
          }
        }
        this.juice.filled(GG)
      }
      showNext() {
        var GG;
        this.outline.show(null !== (GG = this.aimed) && void 0 !== GG ? GG : this.nextCell.Df(this.lastFilled))
      }
      afterRender(GG) {
        var bG;
        this.turn.look(GG);
        const ZG = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === ZG ? null : ZG.position), this.outline.show(null !== (bG = this.aimed) && void 0 !== bG ? bG : this.nextCell.get())
      }
      isHolding(GG) {
        return null !== this.altMs && GG - this.altMs <= 500
      }
      attemptAltAction(GG) {
        const bG = performance.now();
        if (this.isHolding(bG) || (this.pressFilled = !1), this.altMs = bG, this.pressFilled) return "preventPlacement";
        const ZG = this.findAimed(GG);
        if (null !== ZG) return this.foreseen.set(ZG.join(), bG), this.lastFilled = ZG, this.aimed = null, this.showNext(), this.turn.filled(ZG, bG), this.pressFilled = !0, "preventPlacement";
        {
          const ZG = this.nextCell.get();
          null !== ZG && this.turn.tapped(GG, ZG, bG)
        }
      }
      holdPressOnEntity() {
        const GG = performance.now();
        this.pressFilled && this.isHolding(GG) && (this.altMs = GG)
      }
      findAimed(GG) {
        return function(GG, bG, ZG, wG, SG, LG, yG) {
          const kG = GG.YZG(bG),
            UG = null === kG || null === GG.blockNameToBlockId(kG.name, !0) ? null : kG.name,
            YG = GG.getPositionView(bG),
            {
              origin: VG,
              direction: pG
            } = GG.getActionRay(),
            fG = HZ(wG, {
              from: VG,
              dir: pG,
              reach: Gw(GG, bG),
              solid: ZG
            }, (bG => {
              const ZG = [wG[bG], wG[bG + 1], wG[bG + 2]];
              return !ab(SG[wG[bG + 3]], GG.getBlockId(...ZG)) && !yG.has(ZG.join()) && GG.isBlockInLoadedChunk(...ZG) && !BZ(ZG, YG)
            }), (GG => null === UG || UG === lb(SG[wG[GG + 3]])), (GG => null !== LG && wG[GG] === LG[0] && wG[GG + 1] === LG[1] && wG[GG + 2] === LG[2]));
          return -1 === fG ? null : [wG[fG], wG[fG + 1], wG[fG + 2]]
        }(this.api, this.localPlayerId, GG, this.ghostCells, this.blockIds, this.nextCell.get(), this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(GG) {
        const {
          ghostCells: bG
        } = this, [ZG, wG, SG] = jb(this.palette[bG[GG + 3]]);
        return [bG[GG], bG[GG + 1], bG[GG + 2], ZG, wG, SG]
      }
    }

    function Lw(GG, bG) {
      return bG % 4 !== 3
    }
    class yw {
      constructor(GG) {
        this.api = GG, this.sent = !1
      }
      Tp() {
        this.sent || kG.e.get("loadingOverlayVisible") || (this.sent = !0, this.api.sendCommand("plotsentered"))
      }
    }
    var kw = ZG(4255),
      Uw = ZG(39565);

    function Yw(GG, bG, ZG) {
      const wG = [255 * GG, 255 * bG, 255 * ZG],
        [SG, LG, yG] = wG.map((GG => GG + .4 * (255 - GG)));
      return {
        texture: "square_particle",
        rp: 48,
        minLifeTime: .3 / Uw.d,
        maxLifeTime: .55 / Uw.d,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * Uw.d * Uw.d, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...wG, 1],
          maxColor: [SG, LG, yG, 1]
        }, {
          timeFraction: 1,
          minColor: [...wG, 0],
          maxColor: [SG, LG, yG, 0]
        }],
        blendMode: kw.c.Standard
      }
    }
    const Vw = {
      texture: "glint",
      mipmaps: !1,
      rp: 96,
      minLifeTime: .5 / Uw.d,
      maxLifeTime: .9 / Uw.d,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * Uw.d * Uw.d, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: kw.c.OneOne
    };
    class pw {
      constructor(GG, bG) {
        this.api = GG, this.localPlayerId = bG, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(GG) {
        if (this.api.particlesEnabled())
          for (const [bG, ZG, wG, SG, LG, yG] of GG.slice(0, 3)) {
            const GG = `${SG},${LG},${yG}`;
            let kG = this.chips.get(GG);
            void 0 === kG && (kG = this.api.createParticles(Yw(SG, LG, yG), {
              pos: [bG + .5, ZG + .5, wG + .5]
            }), this.chips.set(GG, kG));
            for (let bG = 0; bG < 8; bG++) this.setPoint(bG, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            kG.emitPoints([bG + .5, ZG + .5, wG + .5], this.points, 8)
          }
      }
      layerDone(GG) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const bG = GG.length / 3;
        if (0 === bG || !this.api.particlesEnabled()) return;
        const ZG = Math.min(bG, 48),
          [wG, SG, LG] = [GG[0] + .5, GG[1] + 1, GG[2] + .5];
        let yG = 0;
        for (let kG = 0; kG < ZG; kG++) {
          const UG = 3 * Math.floor(kG * bG / ZG);
          for (let bG = 0; bG < 2; bG++) this.setPoint(yG++, GG[UG] + Math.random() - wG, GG[UG + 1] + 1 - SG, GG[UG + 2] + Math.random() - LG, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(Vw, {
          pos: [wG, SG, LG]
        }), this.sparkles.emitPoints([wG, SG, LG], this.points, yG)
      }
      dispose() {
        var GG;
        for (const bG of this.chips.values()) bG.stop();
        this.chips.clear(), null === (GG = this.sparkles) || void 0 === GG || GG.stop(), this.sparkles = null
      }
      setPoint(GG, bG, ZG, wG, SG) {
        const LG = 4 * GG;
        this.points[LG] = bG, this.points[LG + 1] = ZG, this.points[LG + 2] = wG, this.points[LG + 3] = SG
      }
    }
    const fw = "SpecialAction1",
      Qw = "KeyY",
      Kw = "KeyX";

    function hw(GG) {
      let {
        placement: bG
      } = GG;
      const ZG = (0, UG.j)(kZ, bG.getView()),
        {
          t: wG
        } = (0, VG.w)(),
        {
          isTouchScreen: SG
        } = (0, kG.o)(["isTouchScreen"]),
        yG = (0, LG.useContext)(oG),
        pG = null !== ZG,
        hG = pG && !ZG.blocked && !ZG.waiting;
      if ((0, rG.c)((GG => pG && !GG.repeat && !(0, zG.isTypingInInput)() && !(0, QG.t)() && !SG), (GG => {
          const ZG = function(GG, bG, ZG) {
            if (GG === Kw) return bG.stop;
            if (GG === Qw) return ZG ? bG.build : Jw;
            return YG.B[fw].includes(GG) ? bG.rotate : null
          }(GG.code, bG, hG);
          null !== ZG && (GG.stopPropagation(), ZG())
        })), !pG) return null;
      let dG = SG ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return ZG.blocked ? dG = "plotsGame:placementOffPlot" : ZG.toClear > 0 ? dG = "plotsGame:placementClear" : "placeSpot" !== yG.hint && "placeBuild" !== yG.hint || (dG = null), (0, lG.jsx)(KG.d, {
        placement: "bottom",
        children: (0, lG.jsxs)("div", {
          ref: yG.placementCardRef,
          className: "PlotsPlacementCard",
          children: [(0, lG.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: wG(WG(ZG.id).displayName.translationKey)
          }), null !== dG && (0, lG.jsx)("div", {
            className: fG()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: ZG.refusals > 0
            }),
            children: wG(dG)
          }, ZG.refusals), (0, lG.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, lG.jsxs)(iZ.d, {
              onClick: bG.rotate,
              children: [(0, lG.jsx)(dw, {
                noaAction: fw
              }), wG("plotsGame:placementRotate")]
            }), (0, lG.jsxs)(iZ.C, {
              onClick: bG.stop,
              children: [(0, lG.jsx)(dw, {
                keyCode: Kw
              }), wG("general:cancel")]
            }), (0, lG.jsx)("span", {
              ref: yG.buildRef,
              className: fG()("PlotsPlacementBuild", {
                Pulse: "placeBuild" === yG.hint && hG && SG
              }),
              children: (0, lG.jsxs)(iZ.k, {
                disabled: !hG,
                onClick: bG.build,
                children: [(0, lG.jsx)(dw, {
                  keyCode: Qw
                }), wG("plotsGame:placementBuild")]
              })
            })]
          })]
        })
      })
    }

    function dw(GG) {
      return (0, lG.jsx)(JG.e, {
        className: "PlotsPlacementKey",
        ...GG
      })
    }

    function Jw() {}
    var rw = ZG(2359),
      zw = ZG(37039),
      Ew = ZG(1945),
      ow = ZG(1222);
    const Xw = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function uw(GG) {
      let {
        hud: bG
      } = GG;
      const ZG = (0, UG.j)(Gb, bG.getPlot()),
        [wG, SG] = (0, LG.useState)(null),
        yG = (0, zw.i)(wG);
      if ("none" === ZG[0]) return null;
      const [, kG, YG, VG, pG, QG] = ZG;
      return (0, lG.jsx)("div", {
        className: fG()("PlotsPlotBannerContainer", {
          Below: yG
        }),
        children: (0, lG.jsx)(iw, {
          plotX: kG,
          plotZ: YG,
          ownerName: VG,
          ownerId: pG,
          relation: QG,
          plaqueRef: SG
        }, `${kG},${YG}`)
      })
    }

    function iw(GG) {
      var bG, ZG;
      let {
        plotX: wG,
        plotZ: SG,
        ownerName: LG,
        ownerId: yG,
        relation: kG,
        plaqueRef: UG
      } = GG;
      const {
        t: YG
      } = (0, VG.w)(), pG = (0, Ew.f)("hiddenPlayerNames"), QG = (0, Ew.f)("players"), KG = null === yG ? null : null !== (bG = null === (ZG = QG.byId[yG]) || void 0 === ZG ? void 0 : ZG.cosmetics) && void 0 !== bG ? bG : null, dG = YG("plotsGame:plotBannerCoords", {
        x: wG,
        z: SG
      }), JG = "own" === kG || null !== LG;
      return (0, lG.jsxs)("div", {
        ref: UG,
        className: fG()("PlotsPlotBanner", {
          Own: "own" === kG,
          Shared: "shared" === kG
        }),
        role: "status",
        children: [(0, lG.jsxs)("span", {
          className: fG()("PlotsPlotBannerSeal", {
            Face: null !== KG
          }),
          children: [null !== KG && (0, lG.jsx)(rw.c, {
            cosmetics: KG
          }), null === KG && (0, lG.jsx)(hG.c, {
            name: Xw[kG]
          })]
        }), (0, lG.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, lG.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === kG && YG("plotsGame:plotBannerYours"), "own" !== kG && null !== LG && YG("plotsGame:plotBannerOwner", {
              name: (0, ow.g)(LG, pG)
            }), !JG && dG]
          }), JG && (0, lG.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [dG, "shared" === kG && (0, lG.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: YG("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }
    const Cw = function(GG, bG, ZG, wG) {
      let {
        localPlayerId: SG
      } = wG;
      const kG = new wb;
      let UG = null,
        YG = null,
        VG = null,
        pG = null,
        fG = null,
        QG = null;
      const KG = [];
      return {
        onCreate: GG => {
          UG = new pw(GG, SG);
          const bG = new BG;
          YG = new Sw(GG, SG, UG, bG), VG = new YZ(GG, SG), pG = new cG(GG, VG), fG = new uZ(GG, SG, YG.nextCell), QG = new yw(GG), KG.push((0, yG.q)((0, LG.createElement)(EZ, {
            hud: kG,
            guide: fG,
            tracker: bG,
            placement: VG
          }, (0, LG.createElement)(uw, {
            hud: kG
          }), (0, LG.createElement)(PG, {
            journal: pG
          }), (0, LG.createElement)(hZ, {
            placement: VG
          }), (0, LG.createElement)(hw, {
            placement: VG
          })), {
            content: (0, LG.createElement)(TZ, {
              journal: pG,
              hud: kG,
              guide: fG
            })
          }))
        },
        Tp: () => {
          QG.Tp(), YG.Tp(), VG.Tp(), pG.Tp()
        },
        onPlayerAttemptAltAction: (GG, bG, ZG, wG, SG, LG) => {
          if (null !== LG) return void YG.holdPressOnEntity();
          const yG = void 0 === bG ? null : [bG, ZG, wG];
          return YG.attemptAltAction(yG)
        },
        onPlayerClickUp: () => {
          YG.endPress()
        },
        onAfterRender: (GG, bG) => {
          VG.afterRender(bG), YG.afterRender(bG), fG.afterRender(bG)
        },
        onClose: () => {
          for (const GG of KG) GG();
          UG.dispose(), YG.dispose(), VG.dispose(), UG = null, YG = null, VG = null, pG = null, fG = null, QG = null
        },
        onReceivedMessageFromServer: (GG, bG) => {
          if ("plotsPlot" === GG) kG.receivePlot(bG);
          else if ("plotsBlueprint" === GG) {
            const GG = bG;
            YG.hK(GG), VG.hK(GG)
          } else "plotsJournal" === GG ? pG.hK(bG) : "plotsJournalOpen" === GG ? pG.openFromServer(bG) : "plotsPreviewEnd" === GG ? VG.endFromServer() : "plotsGuide" === GG ? kG.receiveGuide(bG) : "plotsGuideDone" === GG && kG.receiveGuideDone()
        }
      }
    }
  },
  38909: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => kG
    });
    var wG = ZG(38901);
    const SG = 5,
      LG = [0, 0, 0],
      yG = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function kG(GG, bG, ZG, kG, UG, YG) {
      let [VG, pG, fG] = kG;
      const QG = (VG + .5 - ZG[0]) ** 2 + (pG - ZG[1]) ** 2 + (fG + .5 - ZG[2]) ** 2;
      let KG = null;
      QG <= YG ** 2 && (LG[0] = VG + .5, LG[1] = pG + UG, LG[2] = fG + .5, KG = bG.projectWorldPosToViewport(LG));
      const hG = null !== KG && KG.x > -SG && KG.x < 100 + SG && KG.y > -SG && KG.y < 100 + SG;
      return (0, wG.g)(GG, !hG), hG ? (yG.x = KG.x, yG.y = KG.y, yG.distSq = QG, yG) : null
    }
  },
  39565: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => wG,
      f: () => LG
    });
    const wG = 1 / .6,
      SG = {
        kind: "smokePuff"
      };
    class LG {
      constructor(GG, bG, ZG) {
        this.style = GG, this.rp = bG, this.half = ZG, this.particles = null, this.lastFrame = -1
      }
      emit(GG, bG, ZG) {
        let LG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return ZG !== this.lastFrame && (this.lastFrame = ZG, this.particles || (this.particles = GG.createParticles(function(GG, bG) {
          const [
            [ZG, LG, yG],
            [kG, UG, YG]
          ] = GG.colours;
          return {
            texture: GG.soft ? SG : "square_particle",
            rp: bG,
            minLifeTime: GG.life[0] / wG,
            maxLifeTime: GG.life[1] / wG,
            minEmitPower: GG.power[0] * wG,
            maxEmitPower: GG.power[1] * wG,
            minSize: GG.size[0],
            maxSize: GG.size[1],
            emitRate: 0,
            gravity: [0, GG.lift * wG * wG, 0],
            dir1: [-GG.spread, 1, -GG.spread],
            dir2: [GG.spread, 1, GG.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [ZG, LG, yG, GG.alpha],
              maxColor: [kG, UG, YG, GG.alpha]
            }, {
              timeFraction: 1,
              minColor: [ZG, LG, yG, 0],
              maxColor: [kG, UG, YG, 0]
            }],
            blendMode: GG.blendMode
          }
        }(this.style, this.rp), {
          pos: bG,
          half: this.half
        })), this.particles.moveTo(bG, this.half), this.particles.emit(LG), !0)
      }
      dispose() {
        var GG;
        null === (GG = this.particles) || void 0 === GG || GG.stop(), this.particles = null
      }
    }
  },
  38901: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG,
      g: () => LG
    });
    const wG = new WeakMap;

    function SG(GG) {
      let bG = wG.get(GG);
      return bG || (bG = {
        hidden: GG.hidden,
        x: NaN,
        y: NaN
      }, wG.set(GG, bG)), bG
    }

    function LG(GG, bG) {
      const ZG = SG(GG);
      ZG.hidden !== bG && (ZG.hidden = bG, GG.hidden = bG)
    }

    function yG(GG, bG, ZG) {
      const wG = SG(GG);
      wG.x === bG && wG.y === ZG || (wG.x = bG, wG.y = ZG, GG.style.translate = `${bG}vw ${ZG}vh`)
    }
  },
  37245: (GG, bG, ZG) => {
    function wG(GG, bG) {
      return null === GG || null === bG ? GG === bG : GG[0] === bG[0] && GG[1] === bG[1] && GG[2] === bG[2]
    }

    function SG(GG) {
      return [GG[0] + .5, GG[1] + .5, GG[2] + .5]
    }
    ZG.d(bG, {
      b: () => SG,
      f: () => wG
    })
  },
  37287: (GG, bG, ZG) => {
    function wG(GG) {
      return GG.includes("Leaf Bed")
    }

    function SG(GG) {
      return / Bed(?: Head)?(?:\||$)/.test(GG) && !wG(GG)
    }

    function LG(GG) {
      return GG.includes(" Strongbed")
    }

    function yG(GG) {
      return wG(GG) || SG(GG) || LG(GG)
    }
    ZG.d(bG, {
      d: () => yG,
      f: () => wG,
      j: () => LG,
      n: () => SG
    })
  },
  37283: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => YG
    });
    var wG = ZG(37287),
      SG = ZG(9249);
    const LG = [],
      yG = [],
      kG = [],
      UG = [];
    for (const VG of Object.keys(SG.t))(0, wG.f)(VG) ? LG.push(VG) : (0, wG.n)(VG) && yG.push(VG), (0, wG.j)(VG) && kG.push(VG), (VG.includes(" Bed Head") || VG.includes(" Strongbed Head")) && UG.push(VG);
    const YG = {
      leafBeds: LG,
      woolBeds: yG,
      strongBeds: kG,
      beds: [...LG, ...yG, ...kG],
      bedHeads: UG,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  38966: GG => {
    GG.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYUlEQVR4nGNgIBP8R8NYwX+GDVNRMQOm4v8MC9qxYwZUxf//b+T4//8A+///51khGMTeyIGp8Nz0gv8MDoFgGsbeUB2BXeHESHcUjFNhR4Dj/zp3OzAGsbEphHgIOyYNAACzzGY5JF2GbAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);