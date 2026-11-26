export const id = 26;
export const ids = [26];
export const modules = {
  37472: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => WH,
      e: () => MH,
      i: () => GH,
      k: () => XH
    });
    var AH = LH(34986),
      rH = LH(37474),
      SH = LH(37479),
      hH = LH(9412),
      tH = LH(1450),
      zH = LH(45),
      CH = LH(69),
      EH = LH(1225);

    function XH() {
      var HH;
      return (0, tH.e)(rH.b, (0, rH.p)()), (0, EH.jsx)(EH.Fragment, {
        children: null === (HH = (0, rH.p)()) || void 0 === HH ? void 0 : HH.content
      })
    }

    function GH(HH) {
      var BH;
      let {
        show: LH
      } = HH;
      (0, tH.e)(rH.b, (0, rH.p)());
      const CH = null === (BH = (0, rH.p)()) || void 0 === BH ? void 0 : BH.menu;
      return (0, zH.useEffect)((() => {
        var HH;
        LH || (null === CH || void 0 === CH || null === (HH = CH.onClose) || void 0 === HH || HH.call(CH), (0, SH.r)())
      }), [LH, CH]), (0, zH.useEffect)((() => LH ? (0, hH.e)(SH.A, SH.g) : void 0), [LH]), (0, EH.jsx)(AH.e, {
        showing: LH,
        globallyUniqueKey: "clientGameMenu",
        children: null === CH || void 0 === CH ? void 0 : CH.content
      })
    }
    const YH = new Map,
      uH = new Set;

    function QH(HH, BH) {
      BH ? YH.set(HH, BH) : YH.delete(HH);
      for (const LH of uH) LH()
    }

    function WH(HH) {
      let {
        placement: BH = "bottom"
      } = HH;
      const LH = (0, zH.useRef)(null);
      return (0, zH.useLayoutEffect)((() => {
        const HH = LH.current;
        return QH(BH, HH), () => {
          YH.get(BH) === HH && QH(BH, null)
        }
      }), [BH]), (0, EH.jsx)("div", {
        ref: LH,
        id: `clientGameHud-${BH}`,
        style: {
          display: "contents"
        }
      })
    }

    function MH(HH) {
      let {
        children: BH,
        placement: LH = "bottom"
      } = HH;
      const [AH, rH] = (0, zH.useState)((() => {
        var HH;
        return null !== (HH = YH.get(LH)) && void 0 !== HH ? HH : null
      }));
      return (0, zH.useEffect)((() => {
        const HH = () => {
          var HH;
          rH(null !== (HH = YH.get(LH)) && void 0 !== HH ? HH : null)
        };
        return uH.add(HH), HH(), () => {
          uH.delete(HH)
        }
      }), [LH]), AH ? (0, CH.createPortal)(BH, AH) : null
    }
  },
  34986: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH
    });
    var AH = LH(4947),
      rH = LH(4951);

    function SH(HH) {
      let {
        children: BH,
        showing: LH,
        globallyUniqueKey: SH,
        alwaysMountChildren: hH = !1,
        doGameplayStartStopOnShow: tH = !0,
        keepsMovement: zH = !1
      } = HH;
      return (0, rH.c)(!0, LH, SH, zH), (0, AH.e)(tH, LH), LH || hH ? BH : null
    }
  },
  37569: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH,
      f: () => hH,
      i: () => tH,
      k: () => zH
    });
    var AH = LH(45),
      rH = LH(3465);
    const SH = 8,
      hH = "InGameHeaderContainer",
      tH = "TopRightElements";

    function zH(HH) {
      const [BH] = (0, rH.b)(), [LH, zH] = (0, AH.useState)(!1);
      return (0, AH.useLayoutEffect)((() => {
        if (!HH) return;
        const BH = document.querySelector(`.${hH}`),
          LH = document.querySelector(`.${tH}`),
          AH = () => {
            const AH = HH.getBoundingClientRect(),
              rH = BH ? BH.getBoundingClientRect().right : 0,
              hH = LH ? LH.getBoundingClientRect().left : window.innerWidth,
              tH = AH.left < rH + SH,
              CH = AH.right > hH - SH;
            zH(tH || CH)
          };
        AH();
        const rH = new ResizeObserver(AH);
        return rH.observe(HH), BH && rH.observe(BH), LH && rH.observe(LH), () => {
          rH.disconnect()
        }
      }), [HH, BH]), LH
    }
  },
  9412: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH,
      e: () => rH
    });
    let AH = null;
    const rH = function(HH) {
        const BH = {
          cycle: HH,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return AH = BH, () => {
          AH === BH && (AH = null)
        }
      },
      SH = () => {
        var HH;
        return null !== (HH = AH) && void 0 !== HH && HH.canCycle() ? AH.cycle : null
      }
  },
  39396: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH,
      g: () => tH,
      h: () => zH
    });
    const AH = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      rH = [0, 1, 2, 0, 2, 3],
      SH = [4, 5];

    function hH(HH, BH, LH, AH, rH) {
      for (let hH = 0; hH < 6; hH++) SH.includes(hH) === rH && CH(HH, BH, LH, AH, hH)
    }

    function tH(HH, BH, LH, AH) {
      for (let rH = 0; rH < 6; rH++) CH(HH, BH, LH, AH, rH)
    }

    function zH(HH, BH, LH, SH, hH) {
      for (let tH = 0; tH < 6; tH++)
        for (const zH of [0, 1]) {
          const [CH, EH, XH] = [zH + 2, zH + 1, (zH + 3) % 4], GH = HH.length / 3;
          for (const [BH, rH] of [
              [zH, EH],
              [CH, EH],
              [CH, XH],
              [zH, XH]
            ])
            for (let zH = 0; zH < 3; zH++) {
              const CH = AH[3 * (4 * tH + BH) + zH],
                EH = AH[3 * (4 * tH + rH) + zH];
              HH.push((CH + (EH - CH) * hH) * SH / 2 + LH[zH])
            }
          for (const HH of rH) BH.push(GH + HH)
        }
    }

    function CH(HH, BH, LH, SH, hH) {
      let [tH, zH, CH] = LH, [EH, XH, GH] = SH;
      const YH = HH.length / 3;
      for (let rH = 4 * hH; rH < 4 * hH + 4; rH++) HH.push(AH[3 * rH] * EH / 2 + tH, AH[3 * rH + 1] * XH / 2 + zH, AH[3 * rH + 2] * GH / 2 + CH);
      for (const AH of rH) BH.push(YH + AH)
    }
  },
  40486: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => kA
    });
    const AH = [0, 90, 180, 270],
      rH = "plotsblueprint";
    var SH = LH(45),
      hH = LH(37474),
      tH = LH(15),
      zH = LH(1450),
      CH = LH(2064),
      EH = LH(1123),
      XH = LH(1038),
      GH = LH.n(XH),
      YH = LH(1659),
      uH = LH(40495),
      QH = LH(37472),
      WH = LH(1315),
      MH = LH(1986),
      xH = LH(2059),
      vH = LH(3779),
      PH = LH(1789);

    function TH() {}
    const UH = (0, SH.createContext)({
      hint: null,
      journalRef: TH,
      placementCardRef: TH,
      buildRef: TH
    });
    var VH = LH(18);
    const OH = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      bH = {
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
      kH = ["small", "medium", "large"].flatMap((HH => OH.flat().filter((BH => bH[BH].tier === HH))));

    function mH(HH) {
      return bH[HH]
    }
    const oH = new Map(OH.flatMap((HH => HH.slice(1).map(((BH, LH) => [BH, HH[LH]])))));

    function IH(HH) {
      var BH;
      return null !== (BH = oH.get(HH)) && void 0 !== BH ? BH : null
    }
    const fH = {
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

    function lH(HH, BH) {
      const LH = new Set(HH),
        AH = function(HH) {
          const BH = new Set(HH);
          return new Set(kH.filter((HH => {
            const LH = IH(HH);
            return null === LH || BH.has(LH)
          })))
        }(LH);
      return kH.map((HH => {
        const rH = HH === BH;
        if (LH.has(HH)) return {
          id: HH,
          active: rH,
          note: null,
          state: "completed",
          unlockedBy: null
        };
        const SH = fH[HH],
          hH = void 0 === SH || SH.firstBuild && LH.size > 0 ? null : SH.key;
        return AH.has(HH) ? {
          id: HH,
          active: rH,
          note: hH,
          state: "open",
          unlockedBy: null
        } : {
          id: HH,
          active: rH,
          note: hH,
          state: "locked",
          unlockedBy: IH(HH)
        }
      }))
    }
    const KH = "plotsJournalChanged";
    class cH {
      constructor(HH, BH) {
        this.api = HH, this.placement = BH, this.pages = null, this.openRequested = null, this.openedOffered = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.XX(this.openedOffered ? "journal_offered" : "journal_opened"), this.openedOffered = !1
        }, this.build = HH => {
          this.placement.start(HH), (0, hH.g)()
        }, this.putAway = () => {
          this.api.sendCommand(`${rH} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      kX(HH) {
        let [, BH, LH] = HH;
        this.pages = lH(BH, LH), VH.k.AX(KH, this.pages, !0)
      }
      openFromServer(HH) {
        let [, BH] = HH;
        this.openRequested = BH, this.IX()
      }
      IX() {
        const HH = this.openRequested;
        null === HH || tH.c.get("loadingOverlayVisible") || (this.openRequested = null, null === this.pages || (0, YH.t)() || (0, PH.isTypingInInput)() || null !== this.placement.getView() || (this.openedOffered = HH, (0, hH.t)()))
      }
      XX(HH) {
        this.reported.has(HH) || (this.reported.add(HH), this.api.sendCommand(`${rH} report ${HH}`))
      }
    }
    var eH = LH(1225);
    const qH = "KeyJ";

    function gH(HH) {
      let {
        journal: BH
      } = HH;
      const LH = (0, zH.e)(KH, BH.getPages()),
        {
          isTouchScreen: AH
        } = (0, tH.m)(["isTouchScreen"]),
        {
          t: rH
        } = (0, EH.B)(),
        CH = (0, SH.useContext)(UH),
        XH = null !== LH;
      return (0, SH.useEffect)((() => XH ? (0, uH.b)(qH) : void 0), [XH]), (0, vH.c)((HH => XH && HH.code === qH && !HH.repeat && !(0, PH.isTypingInInput)()), (HH => {
        (0, YH.H)(HH, !0, hH.t)
      })), null === LH ? null : (0, eH.jsx)(QH.e, {
        placement: "topRight",
        children: (0, eH.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, eH.jsxs)("button", {
            ref: CH.journalRef,
            type: "button",
            className: GH()("PlotsJournalButton SmallTextBold", {
              Touch: AH
            }),
            onClick: hH.t,
            children: [(0, eH.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, eH.jsx)(MH.e, {
                itemName: "Book",
                amount: 0
              })
            }), rH("plotsGame:journalButton"), !AH && (0, eH.jsx)(xH.b, {
              className: "PlotsJournalButtonKey",
              keyCode: qH
            }), "openJournal" === CH.hint && (0, eH.jsx)(WH.c, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon HandLeftAnim PlotsJournalButtonHand"
            })]
          })
        })
      })
    }
    var NH = LH(9940);
    const RH = [0, 90, 180, 270],
      jH = /^(meta\|rot\d)\|([lrud]+)$/,
      nH = "nesw",
      FH = /^meta\|([nesw]*)\|?(Stacked)?$/,
      DH = function(HH) {
        const BH = new WeakMap;
        return (LH, AH) => {
          let rH = BH.get(LH);
          return void 0 === rH && (rH = HH(LH, AH), BH.set(LH, rH)), rH
        }
      }((HH => new wH(HH)));
    class wH {
      constructor(HH) {
        this.blockMetadata = HH, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const BH = new Set(Object.keys(HH).map((BH => HH[BH].id)));
        BH.add(0), this.maxBlockId = Math.max(...BH)
      }
      static
      for (HH) {
        return DH(HH)
      }
      getBlockIdMapping(HH, BH) {
        const LH = this.getBlockIdMappingKey(HH, BH);
        let AH = this.blockIdMappings.get(LH);
        return void 0 === AH && RH.includes(HH) && (AH = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, HH, BH), this.blockIdMappings.set(LH, AH)), AH
      }
      turnBlockId(HH, BH, LH) {
        return this.mapBlockId(this.blockMetadata[HH], BH, this.getRotationMapping(BH, LH), LH)
      }
      getBlockIdMappingKey(HH, BH) {
        return `r${HH}|m${Number(BH)}`
      }
      createBlockIdMapping(HH, BH, LH, AH) {
        const rH = new Uint16Array(BH + 1),
          SH = this.getRotationMapping(LH, AH);
        for (const hH in HH) {
          const BH = HH[hH];
          rH[BH.id] = this.mapBlockId(BH, LH, SH, AH)
        }
        return rH
      }
      getRotationMapping(HH, BH) {
        const LH = Math.round(HH / 90),
          AH = new Uint8Array(4);
        for (let rH = 0; rH < 4; rH++) AH[rH] = (4 + rH - LH) % 4;
        if (BH) {
          let HH = AH[0];
          AH[0] = AH[1], AH[1] = HH, HH = AH[2], AH[2] = AH[3], AH[3] = HH
        }
        return AH
      }
      mapBlockId(HH, BH, LH, AH) {
        var rH;
        const {
          blockMetadata: SH
        } = this, hH = Math.round(BH / 90), {
          id: tH,
          meta: zH
        } = HH, {
          rot: CH,
          rootName: EH,
          metaStr: XH
        } = zH;
        let GH;
        const [, YH, uH] = null !== (rH = FH.exec(XH)) && void 0 !== rH ? rH : [];
        if (void 0 !== YH) {
          var QH, WH;
          GH = null !== (QH = null === (WH = SH[`${EH}|meta|${[nH.split("").filter(((HH,BH)=>YH.split("").some((HH=>{const LH=nH.indexOf(HH);return((AH?3-LH:LH)+hH)%4===BH})))).join(""),uH].filter(Boolean).join("|")}`]) || void 0 === WH ? void 0 : WH.id) && void 0 !== QH ? QH : tH
        } else if (null === CH) GH = tH;
        else {
          var MH, xH;
          const HH = LH[CH - 1] + 1;
          let BH = XH.replace(`rot${CH}`, `rot${HH}`);
          AH && zH.stairsCorner && (BH = BH.replace(/(Left|Right)$/, (HH => "Left" === HH ? "Right" : "Left"))), AH && "Chest" === EH && (BH = BH.replace(/\|(left|right)$/, ((HH, BH) => "left" === BH ? "|right" : "|left")));
          const rH = jH.exec(BH);
          if (AH && null !== rH) {
            const HH = "lrud".split("").filter((HH => rH[2].includes("l" === HH ? "r" : "r" === HH ? "l" : HH)));
            BH = `${rH[1]}|${HH.join("")}`
          }
          const hH = `${EH}|${BH}`;
          if (GH = null !== (MH = null === (xH = SH[hH]) || void 0 === xH ? void 0 : xH.id) && void 0 !== MH ? MH : null, null === GH) {
            const HH = SH[EH];
            GH = HH.rootMetaDesc === hH ? HH.id : tH
          }
        }
        return GH
      }
    }

    function ZH(HH, BH, LH) {
      let {
        xRotationMappedOrigin: AH,
        shouldSwapXZ: rH
      } = LH;
      const SH = rH ? BH : HH;
      return null === AH ? SH : AH - SH
    }

    function dH(HH, BH, LH) {
      let {
        zRotationMappedOrigin: AH,
        shouldSwapXZ: rH
      } = LH;
      const SH = rH ? HH : BH;
      return null === AH ? SH : AH - SH
    }
    const aH = {
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
      sH = new Map;

    function JH(HH, BH) {
      const LH = `${HH}|${BH}`;
      let AH = sH.get(LH);
      if (void 0 === AH) {
        const {
          size: rH,
          palette: SH,
          layers: hH
        } = aH[HH], tH = 90 === BH || 270 === BH, [zH, CH] = tH ? [rH[2], rH[0]] : [rH[0], rH[2]], EH = function(HH, BH, LH) {
          let AH = null,
            rH = null,
            SH = !1;
          switch (HH) {
            case 0:
              break;
            case 90:
              AH = BH - 1, SH = !0;
              break;
            case 180:
              AH = BH - 1, rH = LH - 1;
              break;
            case 270:
              rH = LH - 1, SH = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${HH}`)
          }
          return {
            xRotationMappedOrigin: AH,
            zRotationMappedOrigin: rH,
            shouldSwapXZ: SH
          }
        }(BH, zH, CH), XH = wH.for(NH.g), GH = SH.map((HH => (0, NH.d)(XH.turnBlockId((0, NH.h)(HH), BH, !1)))), YH = [];
        hH.forEach(((HH, BH) => {
          HH.split(" ").forEach(((HH, LH) => {
            for (let AH = 0; AH < HH.length; AH++)
              if ("." !== HH[AH]) {
                const rH = [ZH(AH, LH, EH), BH, dH(AH, LH, EH)];
                YH.push({
                  offset: rH,
                  block: GH[HH.charCodeAt(AH) - "a".charCodeAt(0)]
                })
              }
          }))
        })), AH = {
          size: [zH, rH[1], CH],
          cells: YH
        }, sH.set(LH, AH)
      }
      return AH
    }
    const iH = "plotsBuildProgressChanged",
      pH = new Map;

    function yH(HH, BH, LH) {
      let AH = 0,
        rH = 0;
      return function(HH) {
        let BH = pH.get(HH);
        if (void 0 === BH) {
          const AH = [];
          for (const {
              offset: BH
            }
            of JH(HH, 0).cells) {
            var LH;
            AH[BH[1]] = (null !== (LH = AH[BH[1]]) && void 0 !== LH ? LH : 0) + 1
          }
          BH = AH, pH.set(HH, BH)
        }
        return BH
      }(HH).forEach(((HH, LH) => {
        AH += HH, LH > BH && (rH += HH)
      })), {
        id: HH,
        filled: AH - rH - LH,
        total: AH
      }
    }
    class HB {
      constructor() {
        this.shown = null, this.topOpen = 0, this.progress = null
      }
      get() {
        return this.progress
      }
      show(HH) {
        this.shown = HH, this.topOpen = 0, null === HH && this.AX(null)
      }
      update(HH, BH, LH) {
        const AH = this.shown;
        null !== AH && (HH >= BH && (this.topOpen = LH), this.AX(yH(AH.id, BH - AH.y, HH >= BH ? LH : this.topOpen + LH)))
      }
      AX(HH) {
        const BH = this.progress;
        (null === HH || void 0 === HH ? void 0 : HH.id) === (null === BH || void 0 === BH ? void 0 : BH.id) && (null === HH || void 0 === HH ? void 0 : HH.filled) === (null === BH || void 0 === BH ? void 0 : BH.filled) && (null === HH || void 0 === HH ? void 0 : HH.total) === (null === BH || void 0 === BH ? void 0 : BH.total) || (this.progress = HH, VH.k.AX(iH, HH, !0))
      }
    }
    const BB = "plotsPlotChanged",
      LB = "plotsGuideChanged",
      AB = "plotsGuideDone";
    class rB {
      constructor() {
        this.plot = ["none"], this.guide = ["none"]
      }
      getPlot() {
        return this.plot
      }
      receivePlot(HH) {
        this.plot = HH, VH.k.AX(BB, HH, !0)
      }
      getGuide() {
        return this.guide
      }
      receiveGuide(HH) {
        this.guide = HH, VH.k.AX(LB, HH, !0)
      }
      receiveGuideDone() {
        VH.k.AX(AB, void 0, !0)
      }
    }
    var SB = LH(1214),
      hB = LH(39448),
      tB = LH(37747),
      zB = LH(1471);

    function CB(HH) {
      let {
        onSkip: BH,
        className: LH
      } = HH;
      const {
        t: AH
      } = (0, EH.B)();
      return (0, eH.jsx)("button", {
        type: "button",
        className: GH()("PlotsGuideSkipButton", LH),
        ...(0, zB.c)(BH, "pointerup"),
        children: AH("tutorial:skip")
      })
    }

    function EB(HH) {
      let {
        target: BH,
        placement: LH,
        spotlight: AH = null,
        children: rH
      } = HH;
      const {
        t: hH
      } = (0, EH.B)(), tH = (0, SH.useRef)(BH);
      return tH.current = BH, (0, SB.r)("popup", tH, null === AH ? null : AH.onSkip, null !== AH, null, "controller:menusSkipTutorial"), (0, eH.jsxs)(tB.g, {
        target: BH,
        placement: LH,
        className: GH()("PlotsGuideBubble", {
          Passive: null === AH
        }),
        spotlight: null !== AH,
        spotlightMargin: 30,
        children: [(0, eH.jsxs)("div", {
          className: "PlotsGuideBubbleHeader",
          children: [(0, eH.jsx)("img", {
            className: "PlotsGuideBubblePortrait",
            src: hB,
            alt: "",
            draggable: !1
          }), (0, eH.jsx)("span", {
            className: "PlotsGuideBubbleSpeaker",
            children: hH("plotsGame:maverickName")
          }), null !== AH && (0, eH.jsx)(CB, {
            onSkip: AH.onSkip
          })]
        }), (0, eH.jsx)("p", {
          className: "PlotsGuideBubbleText",
          children: rH
        })]
      })
    }

    function XB(HH) {
      let {
        className: BH,
        icon: LH,
        title: AH,
        children: rH
      } = HH;
      return (0, eH.jsxs)("div", {
        className: GH()("PlotsCard", BH),
        role: "status",
        children: [(0, eH.jsx)("span", {
          className: "PlotsCardIcon",
          children: (0, eH.jsx)(WH.c, {
            name: LH
          })
        }), (0, eH.jsxs)("div", {
          className: "PlotsCardBody",
          children: [(0, eH.jsx)("div", {
            className: "PlotsCardTitle SmallTextBold",
            children: AH
          }), rH]
        })]
      })
    }

    function GB(HH) {
      let {
        progress: BH,
        goal: LH
      } = HH;
      const AH = Math.min(BH, LH);
      return (0, eH.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, eH.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": LH,
          "aria-valuenow": AH,
          children: (0, eH.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${AH/LH})`
            }
          })
        }), (0, eH.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [AH, "/", LH]
        })]
      })
    }

    function YB(HH) {
      let {
        progress: BH,
        guide: LH
      } = HH;
      const {
        t: AH
      } = (0, EH.B)(), {
        isTouchScreen: rH
      } = (0, tH.m)(["isTouchScreen"]), SH = BH.filled < 5;
      return (0, eH.jsxs)(eH.Fragment, {
        children: [(SH || BH.total - BH.filled <= 5) && (0, eH.jsx)("div", {
          className: "PlotsGuideHandLayer",
          children: (0, eH.jsx)("div", {
            ref: LH.bindHand,
            className: "PlotsGuideHand",
            children: (0, eH.jsx)(WH.c, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon"
            })
          })
        }), (0, eH.jsx)(QH.e, {
          placement: "bottom",
          children: (0, eH.jsxs)(XB, {
            icon: "hammer",
            title: AH(mH(BH.id).displayName.translationKey),
            children: [SH && (0, eH.jsx)("div", {
              className: "PlotsCardHint SmallTextLight",
              children: rH ? AH("plotsGame:guideBuildTouch") : uB(AH)
            }), (0, eH.jsx)(GB, {
              progress: BH.filled,
              goal: BH.total
            })]
          })
        })]
      })
    }

    function uB(HH) {
      const BH = CH.w["alt-fire"][0];
      return "Mouse3" === BH ? HH("plotsGame:guideBuildRightClick") : HH("plotsGame:guideBuildKeys", {
        key: (0, CH.p)(BH)
      })
    }

    function QB() {
      return (0, eH.jsx)("div", {
        className: "PlotsGuideDragHand",
        children: (0, eH.jsx)(WH.c, {
          name: "hand-back-point-up",
          className: "SmallTextBold TouchTutorialIcon"
        })
      })
    }
    var WB = LH(1241),
      MB = LH(2817),
      xB = LH(39279),
      vB = LH(39058),
      PB = LH(37793),
      TB = LH(9965),
      UB = LH(9982),
      VB = LH(317),
      OB = LH(38667);
    const bB = new Map([
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
      kB = [...PB.d.blockRemoveActionRoots, ...vB.d, ...TB.j, "Board", "Code Block", "Custom Lobby Block"],
      mB = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let oB = null;

    function IB() {
      return oB ??= function() {
        const HH = fB(),
          BH = Math.max(...HH.map((HH => NH.g[HH].id))) + 1,
          LH = new Int32Array(BH),
          AH = new Int32Array(BH),
          rH = new Uint8Array(BH).fill(1),
          SH = new Uint8Array(BH),
          hH = new Uint8Array(BH),
          tH = new Array(BH).fill("Air"),
          zH = new Map,
          CH = HH => {
            let BH = zH.get(HH);
            return void 0 === BH && (BH = zH.size + 1, zH.set(HH, BH)), BH
          },
          EH = new Set(kB);
        for (const GH of HH) {
          var XH;
          const {
            id: HH,
            meta: BH,
            altActionable: zH,
            canBePlacedOver: YH
          } = NH.g[GH];
          LH[HH] = CH(lB(GH));
          const uH = BH.stairsCorner;
          if (null === uH) AH[HH] = LH[HH];
          else {
            const LH = uH.endsWith("Right");
            AH[HH] = CH(`${BH.rootName}|rot${LH?BH.rot%4+1:BH.rot}|${BH.halfblockPlacement}|${uH.replace("Right","Left")}`)
          }
          rH[HH] = YH ? 1 : 0, SH[HH] = zH || null !== BH.open || GH in OB.c || EH.has(BH.rootName) || void 0 !== (0, vB.h)(BH.rootName) ? 1 : 0;
          const {
            rootName: QH
          } = BH;
          hH[HH] = null !== BH.open || vB.d.includes(QH) || QH.includes("Bookshelf") || QH.includes("Mailbox") ? 1 : 0, tH[HH] = null !== (XH = (0, xB.e)(HH)) && void 0 !== XH ? XH : QH
        }
        return {
          kinds: LH,
          shapes: AH,
          empty: rH,
          inUse: SH,
          ownAltActionMessage: hH,
          placingItems: tH
        }
      }(), oB
    }

    function fB() {
      return Object.keys(NH.g).filter((HH => NH.g[HH].name === HH))
    }

    function lB(HH) {
      var BH;
      const LH = NH.g[HH],
        {
          rootName: AH,
          rot: rH
        } = LH.meta,
        [, ...SH] = (null !== (BH = LH.rootMetaDesc) && void 0 !== BH ? BH : HH).split("|"),
        hH = SH.filter((HH => !("meta" === HH || mB.test(HH) || (0, UB.H)(LH) && /^[nesw]+$/.test(HH) || TB.j.includes(AH) && /^[lrud]+$/.test(HH) || VB.J.includes(AH) && /^(left|right)$/.test(HH))));
      return [AH, ...hH].map((HH => "fenceGate" === LH.model && HH === `rot${rH}` ? "rot" + ((rH - 1) % 2 + 1) : HH)).join("|")
    }

    function KB(HH, BH) {
      const {
        kinds: LH,
        shapes: AH
      } = IB();
      return LH[HH] === LH[BH] || AH[HH] === AH[BH]
    }

    function cB(HH) {
      return 1 === IB().empty[HH]
    }

    function eB(HH) {
      return IB().placingItems[HH]
    }

    function qB(HH) {
      return bB.get(NH.g[HH].meta.rootName)
    }
    var gB = LH(9957),
      NB = LH(9979);
    const RB = [0, 0, 0, 1, 1, 1],
      jB = (0, gB.b)([
        [2, 0, 2, 6, 6, 6]
      ]),
      nB = (0, gB.b)([
        [3, 0, 3, 5, 5, 5]
      ]),
      FB = (0, gB.b)([
        [3, 3, 3, 5, 8, 5]
      ]),
      DB = [0, 1, 2, 3].map((HH => (0, gB.b)((0, gB.l)([
        [3, 2, 0, 5, 7, 3]
      ], HH))));

    function wB(HH) {
      const {
        hW: BH,
        model: LH,
        blockModel: AH,
        meta: rH
      } = NH.g[HH];
      return void 0 !== BH ? BH : "CentreCross" === LH ? jB : null !== AH && void 0 !== AH && AH.startsWith("torch") ? rH.halfblockPlacement === NB.c.side ? DB[rH.rot - 1] : rH.halfblockPlacement === NB.c.top ? FB : nB : RB
    }
    var ZB = LH(176);
    class dB {
      constructor(HH) {
        this.api = HH, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(HH) {
        const BH = ZB.g.xX;
        this.chunks = [];
        for (let LH = 0; LH < HH.length; LH += 3) {
          const AH = Math.floor(HH[LH] / BH),
            rH = Math.floor(HH[LH + 1] / BH),
            SH = Math.floor(HH[LH + 2] / BH);
          this.watches(AH, rH, SH) || this.chunks.push(AH, rH, SH)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const HH = performance.now();
        if (HH - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = HH;
        let BH = !1;
        for (let LH = 0; LH < this.chunks.length; LH += 3) {
          const HH = this.api.getChunkVersion(this.chunks[LH], this.chunks[LH + 1], this.chunks[LH + 2]);
          this.versions[LH / 3] !== HH && (this.versions[LH / 3] = HH, BH = !0)
        }
        return BH
      }
      watches(HH, BH, LH) {
        for (let AH = 0; AH < this.chunks.length; AH += 3)
          if (this.chunks[AH] === HH && this.chunks[AH + 1] === BH && this.chunks[AH + 2] === LH) return !0;
        return !1
      }
    }
    var aB = LH(39396);
    const sB = .35,
      JB = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      iB = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      pB = [.95, .2, .15];
    class yB {
      constructor() {
        this.groups = []
      }
      add(HH, BH, LH, AH, rH) {
        let SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : RB;
        for (const hH of this.groups)
          if (LL(hH, AH, rH)) return hH.cells.push(HH, BH, LH), void hH.boxes.push(SH);
        this.groups.push({
          rgb: AH,
          look: rH,
          cells: [HH, BH, LH],
          boxes: [SH]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class HL {
      constructor(HH) {
        this.api = HH, this.shown = []
      }
      show(HH) {
        const BH = [];
        for (const LH of HH) {
          const HH = this.shown.findIndex((HH => {
            let {
              group: BH
            } = HH;
            return LL(BH, LH.rgb, LH.look) && AL(BH, LH)
          })); - 1 === HH ? BH.push(this.build(LH)) : (BH.push(this.shown[HH]), this.shown.splice(HH, 1))
        }
        this.dispose(), this.shown = BH
      }
      dispose() {
        for (const {
            meshes: HH
          }
          of this.shown)
          for (const BH of HH) this.api.disposeGameMesh(BH);
        this.shown = []
      }
      build(HH) {
        const {
          rgb: BH,
          look: LH,
          boxes: AH
        } = HH, rH = [BH[0] + (1 - BH[0]) * sB, BH[1] + (1 - BH[1]) * sB, BH[2] + (1 - BH[2]) * sB], SH = [this.buildMesh(HH.cells, BH, LH.alpha, ((HH, BH, rH, SH) => {
          BL(HH, BH, rH, AH[SH], LH.size, !1)
        })), this.buildMesh(HH.cells, rH, LH.alpha, ((HH, BH, rH, SH) => {
          BL(HH, BH, rH, AH[SH], LH.size, !0)
        }))];
        return LH.crossed && SH.push(this.buildMesh(HH.cells, BH, .9, ((HH, BH, AH) => {
          (0, aB.h)(HH, BH, AH, LH.size + .01, .12)
        }))), {
          group: HH,
          meshes: SH
        }
      }
      buildMesh(HH, BH, LH, AH) {
        const rH = [HH[0], HH[1], HH[2]],
          SH = [],
          hH = [];
        for (let tH = 0; tH < HH.length; tH += 3) AH(SH, hH, [HH[tH] - rH[0] + .5, HH[tH + 1] - rH[1] + .5, HH[tH + 2] - rH[2] + .5], tH / 3);
        return this.api.createGameMesh({
          positions: SH,
          indices: hH
        }, {
          rgb: [BH[0], BH[1], BH[2]],
          alpha: LH
        }, rH)
      }
    }

    function BL(HH, BH, LH, AH, rH, SH) {
      for (let hH = 0; hH < AH.length; hH += 6) {
        const tH = [0, 0, 0],
          zH = [0, 0, 0];
        for (let HH = 0; HH < 3; HH++) tH[HH] = LH[HH] + ((AH[hH + HH] + AH[hH + HH + 3]) / 2 - .5) * rH, zH[HH] = (AH[hH + HH + 3] - AH[hH + HH]) * rH;
        (0, aB.d)(HH, BH, tH, zH, SH)
      }
    }

    function LL(HH, BH, LH) {
      return HH.rgb[0] === BH[0] && HH.rgb[1] === BH[1] && HH.rgb[2] === BH[2] && HH.look === LH
    }

    function AL(HH, BH) {
      if (HH.cells.length !== BH.cells.length) return !1;
      for (let LH = 0; LH < HH.cells.length; LH++)
        if (HH.cells[LH] !== BH.cells[LH]) return !1;
      return HH.boxes.every(((HH, LH) => HH === BH.boxes[LH]))
    }

    function rL(HH, BH, LH, AH, rH) {
      if (!HH.isBlockInLoadedChunk(BH, AH - 6, LH) || !HH.isBlockInLoadedChunk(BH, AH + 6 + rH, LH) || !HH.canModifyBlockAt(BH, AH, LH)) return NaN;
      let SH = AH - 1;
      if (0 !== HH.getBlockId(BH, SH, LH)) {
        for (; SH < AH + 6 && 0 !== HH.getBlockId(BH, SH + 1, LH);) SH++;
        return SH
      }
      for (; SH > AH - 6;)
        if (SH--, 0 !== HH.getBlockId(BH, SH, LH)) return SH;
      return NaN
    }

    function SL(HH, BH, LH, AH, rH) {
      let SH = 0;
      for (let hH = AH + 1; hH <= AH + rH; hH++) 0 !== HH.getBlockId(BH, hH, LH) && SH++;
      return SH
    }

    function hL(HH) {
      const BH = new Map;
      for (const hH of HH) {
        var LH;
        if (Number.isNaN(hH)) return null;
        BH.set(hH, (null !== (LH = BH.get(hH)) && void 0 !== LH ? LH : 0) + 1)
      }
      let AH = NaN,
        rH = 0;
      for (const [hH, tH] of BH)(tH > rH || tH === rH && hH < AH) && (AH = hH, rH = tH);
      let SH = 0;
      for (const hH of HH) SH += Math.abs(hH - AH);
      return SH
    }

    function tL(HH, BH, LH, AH) {
      const {
        eye: rH,
        forward: SH,
        tanHalfFovX: hH,
        tanHalfFovY: tH
      } = HH, [zH, CH] = function(HH) {
        let [BH, LH, AH] = HH;
        const rH = Math.hypot(BH, AH),
          [SH, hH] = [AH / rH, -BH / rH];
        return [
          [SH, 0, hH],
          [LH * hH, AH * SH - BH * hH, -LH * SH]
        ]
      }(SH), [EH, XH] = [BH * hH, LH * tH], GH = SH[0] + EH * zH[0] + XH * CH[0], YH = SH[1] + XH * CH[1], uH = SH[2] + EH * zH[2] + XH * CH[2], QH = (AH - rH[1]) / YH;
      return QH > 0 && QH < 1 / 0 ? [rH[0] + QH * GH, rH[2] + QH * uH] : null
    }
    const zL = "plotsBlueprintPlacementChanged",
      CL = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class EL {
      constructor(HH, BH) {
        this.api = HH, this.localPlayerId = BH, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = HH => {
          var BH, LH, AH, SH;
          const hH = null !== (BH = null === (LH = this.placing) || void 0 === LH ? void 0 : LH.rotation) && void 0 !== BH ? BH : 0,
            {
              size: tH
            } = JH(HH, hH),
            zH = this.api.hT(this.localPlayerId),
            [CH, EH] = null !== (AH = null !== (SH = function(HH, BH, LH, AH) {
              const [rH, SH, hH] = BH, [tH, zH, CH] = [Math.floor(LH[0]), Math.floor(LH[1]), Math.floor(LH[2])], EH = 6 + Math.max(rH, hH) / 2, [XH, GH] = [Math.ceil(EH + rH / 2), Math.ceil(EH + hH / 2)], [YH, uH] = [tH - XH, CH - GH], [QH, WH] = [2 * XH + 1, 2 * GH + 1], MH = new Float64Array(QH * WH), xH = new Uint16Array(QH * WH);
              for (let VH = 0; VH < QH; VH++)
                for (let BH = 0; BH < WH; BH++) {
                  const LH = rL(HH, YH + VH, uH + BH, zH, SH);
                  MH[VH * WH + BH] = LH, Number.isNaN(LH) || (xH[VH * WH + BH] = SL(HH, YH + VH, uH + BH, LH, SH))
                }
              const vH = Math.hypot(AH[0], AH[2]),
                PH = [];
              let TH = null,
                UH = 1 / 0;
              for (let VH = 0; VH + rH <= QH; VH++)
                for (let HH = 0; HH + hH <= WH; HH++) {
                  const [BH, SH] = [YH + VH, uH + HH], [zH, XH] = [BH + rH / 2 - LH[0], SH + hH / 2 - LH[2]], GH = Math.hypot(zH, XH);
                  if (GH > EH || tH >= BH - 2 && tH < BH + rH + 2 && CH >= SH - 2 && CH < SH + hH + 2) continue;
                  PH.length = 0;
                  let QH = 0;
                  for (let LH = 0; LH < rH; LH++)
                    for (let BH = 0; BH < hH; BH++) PH.push(MH[(VH + LH) * WH + HH + BH]), QH += xH[(VH + LH) * WH + HH + BH];
                  const OH = hL(PH);
                  if (null === OH) continue;
                  const bH = GH + 3 * (OH + QH) + (1 - (0 === vH ? 1 : (zH * AH[0] + XH * AH[2]) / (GH * vH))) / 2 * 6;
                  bH < UH && (UH = bH, TH = [BH, SH])
                }
              return TH
            }(this.api, tH, zH, this.camera.forward)) && void 0 !== SH ? SH : this.cornerOnTarget(tH)) && void 0 !== AH ? AH : [Math.floor(zH[0]) + 2, Math.floor(zH[2])];
          this.placing = {
            id: HH,
            rotation: hH,
            corner: [CH, this.playerLevel(), EH],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null,
            moved: !1,
            stillSinceMs: performance.now()
          }, this.update(), this.api.sendCommand(`${rH} preview`)
        }, this.rotate = () => {
          const {
            id: HH,
            rotation: BH,
            corner: LH
          } = this.placing, rH = AH[(AH.indexOf(BH) + 1) % AH.length], [SH, , hH] = JH(HH, BH).size, [tH, , zH] = JH(HH, rH).size;
          this.moveTo(LH[0] + Math.floor(SH / 2) - Math.floor(tH / 2), LH[2] + Math.floor(hH / 2) - Math.floor(zH / 2), rH)
        }, this.hoverAt = (HH, BH) => {
          this.placing.hover = [HH, BH], this.moveCentreTo(this.camera, HH, BH)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (HH, BH) => {
          const LH = this.placing,
            {
              eye: AH,
              forward: rH,
              tanHalfFovX: SH,
              tanHalfFovY: hH
            } = this.camera,
            tH = {
              eye: [AH[0], AH[1], AH[2]],
              forward: [rH[0], rH[1], rH[2]],
              tanHalfFovX: SH,
              tanHalfFovY: hH
            },
            zH = LH.corner[1],
            CH = tL(tH, HH, BH, zH);
          LH.hover = null, LH.drag = CH && {
            view: tH,
            ground: CH,
            corner: [LH.corner[0], LH.corner[2]],
            level: zH
          }
        }, this.dragTo = (HH, BH) => {
          const LH = this.placing.drag,
            AH = LH && tL(LH.view, HH, BH, LH.level);
          null !== LH && null !== AH && this.moveTo(LH.corner[0] + Math.round(AH[0] - LH.ground[0]), LH.corner[1] + Math.round(AH[1] - LH.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const HH = this.view;
          HH.waiting || (HH.blocked ? this.AX({
            ...HH,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const HH = this.placing,
            {
              id: BH,
              rotation: LH,
              corner: AH
            } = HH;
          this.api.sendCommand(`${rH} place ${BH} ${AH.join(" ")} ${LH}`), HH.sent = {
            atMs: performance.now(),
            corner: [...AH],
            rotation: LH,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${rH} preview off`))
        }, this.chunkWatch = new dB(HH), this.meshes = new HL(HH)
      }
      getView() {
        return this.view
      }
      IX() {
        const HH = this.placing;
        null !== HH && (null !== HH.sent && !HH.sent.timedOut && performance.now() - HH.sent.atMs > 3e3 ? (HH.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(HH) || this.chunkWatch.changed() || this.view.settled !== XL(HH, this.view.blocked)) && this.update())
      }
      afterRender(HH) {
        ! function(HH, BH) {
          for (let LH = 0; LH < 3; LH++) BH.eye[LH] = HH.cameraPosition[LH], BH.forward[LH] = HH.cameraDirection[LH];
          BH.tanHalfFovX = HH.tanHalfFovX, BH.tanHalfFovY = HH.tanHalfFovY
        }(HH, this.camera);
        const BH = this.placing;
        null !== BH && null !== BH.hover && this.moveCentreTo(this.camera, BH.hover[0], BH.hover[1])
      }
      kX(HH) {
        const BH = this.placing;
        if (null === BH || null === BH.sent || "active" !== HH[0]) return;
        const {
          sent: LH
        } = BH, [, AH, rH, SH, hH, tH, zH] = HH;
        rH && AH === BH.id && zH === LH.rotation && SH === LH.corner[0] && hH === LH.corner[1] && tH === LH.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(HH) {
        let [BH, , LH] = HH;
        const AH = this.api.getTargetedBlock();
        if (null === AH) return null;
        const [rH, , SH] = AH.position;
        return [rH - Math.floor(BH / 2), SH - Math.floor(LH / 2)]
      }
      playerLevel() {
        var HH;
        const [BH, LH, AH] = this.api.hT(this.localPlayerId);
        if (null !== (HH = this.api.getLocalPlayerMovement()) && void 0 !== HH && HH.onGround) return Math.ceil(LH - .01);
        const [rH, SH, hH] = [Math.floor(BH), Math.floor(LH), Math.floor(AH)];
        for (let tH = SH; tH >= SH - 2; tH--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(rH, tH, hH))) return tH + 1;
        return SH
      }
      followPlayerLevel(HH) {
        if (GL(HH)) return !1;
        const BH = this.playerLevel();
        return BH !== HH.corner[1] && (HH.corner[1] = BH, !0)
      }
      moveCentreTo(HH, BH, LH) {
        const AH = this.placing,
          rH = tL(HH, BH, LH, AH.corner[1]);
        if (null !== rH) {
          const [HH, , BH] = JH(AH.id, AH.rotation).size;
          this.moveTo(Math.round(rH[0] - HH / 2), Math.round(rH[1] - BH / 2))
        }
      }
      moveTo(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const AH = this.placing;
        if (GL(AH)) return;
        const [rH, SH, hH] = AH.corner;
        if (this.centreOnPlot(rH, hH) && !this.centreOnPlot(HH, BH, LH))
          if (this.centreOnPlot(HH, hH, LH)) BH = hH;
          else {
            if (!this.centreOnPlot(rH, BH, LH)) return;
            HH = rH
          } HH === rH && BH === hH && LH === AH.rotation || (AH.rotation = LH, AH.corner = [HH, SH, BH], AH.moved = !0, AH.stillSinceMs = performance.now(), this.update())
      }
      centreOnPlot(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: AH,
          corner: rH
        } = this.placing, [SH, , hH] = JH(AH, LH).size;
        return this.api.canModifyBlockAt(HH + Math.floor(SH / 2), rH[1], BH + Math.floor(hH / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.AX(null)
      }
      update() {
        const {
          id: HH,
          rotation: BH,
          corner: LH,
          refusals: AH
        } = this.placing, rH = new yB, SH = [];
        let hH = !1,
          tH = 0;
        for (const {
            offset: XH,
            block: GH
          }
          of JH(HH, BH).cells) {
          const [HH, BH, AH] = [LH[0] + XH[0], LH[1] + XH[1], LH[2] + XH[2]];
          SH.push(HH, BH, AH);
          const zH = !this.api.canModifyBlockAt(HH, BH, AH),
            CH = this.api.getBlockId(HH, BH, AH),
            EH = !cB(CH) && !KB(this.api.blockNameToBlockId(GH), CH);
          hH ||= zH, tH += EH ? 1 : 0, zH || EH ? rH.add(HH, BH, AH, pB, iB) : rH.add(HH, BH, AH, qB(GH), CL, wB(GH))
        }
        this.chunkWatch.watch(SH), this.meshes.show(rH.toArray());
        const zH = this.view,
          CH = GL(this.placing),
          EH = XL(this.placing, hH);
        (null === zH || void 0 === zH ? void 0 : zH.id) === HH && zH.blocked === hH && zH.toClear === tH && zH.waiting === CH && zH.refusals === AH && zH.settled === EH || this.AX({
          id: HH,
          blocked: hH,
          toClear: tH,
          waiting: CH,
          refusals: AH,
          settled: EH
        })
      }
      AX(HH) {
        this.view = HH, VH.k.AX(zL, HH, !0)
      }
    }

    function XL(HH, BH) {
      let {
        moved: LH,
        stillSinceMs: AH
      } = HH;
      return !BH && performance.now() - AH >= (LH ? 1500 : 6e3)
    }

    function GL(HH) {
      let {
        sent: BH
      } = HH;
      return null !== BH && !BH.timedOut
    }
    var YL = LH(4951);
    class uL {
      constructor(HH) {
        this.placement = HH, this.press = null
      }
      down(HH) {
        if (null !== this.press) return !1;
        const {
          id: BH,
          mouse: LH,
          x: AH,
          y: rH,
          atMs: SH
        } = HH;
        return this.press = {
          id: BH,
          mouse: LH,
          x: AH,
          y: rH,
          atMs: SH,
          moved: !1
        }, LH || this.placement.beginDrag(HH.ndcX, HH.ndcY), !0
      }
      move(HH) {
        const BH = this.press;
        null !== BH && BH.id === HH.id && (BH.moved ||= Math.hypot(HH.x - BH.x, HH.y - BH.y) > 8), HH.mouse ? this.placement.hoverAt(HH.ndcX, HH.ndcY) : (null === BH || void 0 === BH ? void 0 : BH.id) === HH.id && this.placement.dragTo(HH.ndcX, HH.ndcY)
      }
      up(HH) {
        const BH = this.press;
        (null === BH || void 0 === BH ? void 0 : BH.id) === HH.id && (this.move(HH), this.end(), !BH.moved && (BH.mouse || HH.atMs - BH.atMs <= 250) && this.placement.tap())
      }
      cancel(HH) {
        var BH;
        (null === (BH = this.press) || void 0 === BH ? void 0 : BH.id) === HH && this.end()
      }
      leave(HH) {
        let {
          id: BH,
          mouse: LH
        } = HH;
        LH && this.placement.endHover(), this.cancel(BH)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }
    const QL = "PlotsPlacementLayer";

    function WL(HH) {
      let {
        placement: BH
      } = HH;
      return null === (0, zH.e)(zL, BH.getView()) ? null : (0, eH.jsx)(ML, {
        placement: BH
      })
    }

    function ML(HH) {
      let {
        placement: BH
      } = HH;
      (0, YL.c)(!0, !0, QL);
      const LH = (0, SH.useMemo)((() => new uL(BH)), [BH]);
      return (0, eH.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: HH => {
          "mouse" === HH.pointerType && 0 !== HH.button || !LH.down(xL(HH)) || HH.currentTarget.setPointerCapture(HH.pointerId)
        },
        onPointerMove: HH => {
          LH.move(xL(HH))
        },
        onPointerUp: HH => {
          LH.up(xL(HH))
        },
        onPointerCancel: HH => {
          LH.cancel(HH.pointerId)
        },
        onLostPointerCapture: HH => {
          LH.cancel(HH.pointerId)
        },
        onPointerLeave: HH => {
          LH.leave(xL(HH))
        },
        "aria-hidden": !0
      })
    }

    function xL(HH) {
      const {
        left: BH,
        top: LH,
        width: AH,
        height: rH
      } = HH.currentTarget.getBoundingClientRect();
      return {
        id: HH.pointerId,
        mouse: "mouse" === HH.pointerType,
        x: HH.clientX,
        y: HH.clientY,
        ndcX: (HH.clientX - BH) / AH * 2 - 1,
        ndcY: 1 - (HH.clientY - LH) / rH * 2,
        atMs: HH.timeStamp
      }
    }

    function vL() {
      return (0, WB.p)().some((HH => HH !== WB.d && HH !== QL))
    }
    const PL = 2500;

    function TL(HH) {
      let {
        hud: BH,
        guide: LH,
        tracker: AH,
        placement: rH,
        children: hH
      } = HH;
      const {
        t: XH
      } = (0, EH.B)(), {
        isTouchScreen: GH
      } = (0, tH.m)(["isTouchScreen"]), YH = (0, zH.e)(LB, BH.getGuide()), uH = (0, zH.e)(BB, BH.getPlot()), QH = (0, zH.e)(iH, AH.get()), WH = function(HH) {
        const {
          openInGameMenuName: BH,
          openEverythingMenuName: LH,
          loadingOverlayVisible: AH
        } = (0, tH.m)(["openInGameMenuName", "openEverythingMenuName", "loadingOverlayVisible"]), rH = (0, MB.b)(), [hH, CH] = (0, SH.useState)(vL);
        (0, SH.useEffect)((() => {
          const HH = () => {
            CH(vL())
          };
          HH();
          const BH = (0, WB.l)(HH),
            LH = (0, WB.j)(HH);
          return () => {
            BH(), LH()
          }
        }), []);
        const EH = (0, zH.e)(zL, HH.getView()),
          XH = "clientGame" === BH;
        return {
          hudHidden: rH || AH,
          journalOpen: XH,
          covered: hH || null !== LH || null !== BH && !XH,
          placing: null === EH ? null : EH.settled ? "placeBuild" : "placeSpot"
        }
      }(rH), MH = function(HH, BH, LH) {
        return "none" === HH[0] || LH.hudHidden || LH.journalOpen || LH.covered ? null : null !== LH.placing ? LH.placing : null !== BH ? "build" : "choose" === HH[1] ? "openJournal" : null
      }(YH, null === QH ? null : QH.id, WH), xH = function() {
        const [HH, BH] = (0, SH.useState)(null), [LH, AH] = (0, SH.useState)(!1);
        return (0, zH.d)(AB, (() => {
          BH(performance.now())
        })), (0, SH.useEffect)((() => {
          if (null === HH) return;
          const BH = window.setTimeout((() => {
              AH(!0)
            }), PL),
            LH = window.setTimeout((() => {
              AH(!1)
            }), 7500);
          return () => {
            window.clearTimeout(BH), window.clearTimeout(LH)
          }
        }), [HH]), LH
      }() && !WH.hudHidden && !WH.covered && !WH.journalOpen && null === WH.placing, [vH, PH] = (0, SH.useState)(!1);
      (0, SH.useEffect)((() => {
        WH.journalOpen && PH(!0)
      }), [WH.journalOpen]);
      const [TH, VH] = (0, SH.useState)(null), [OH, bH] = (0, SH.useState)(null), [kH, mH] = (0, SH.useState)(null), oH = (0, SH.useMemo)((() => ({
        hint: MH,
        journalRef: VH,
        placementCardRef: bH,
        buildRef: mH
      })), [MH]), IH = "plot" === uH[0] && "own" === uH[5], fH = GH && !vH && IH ? {
        onSkip: LH.skip
      } : null;
      return (0, eH.jsxs)(UH.Provider, {
        value: oH,
        children: [hH, "openJournal" === MH && null !== TH && (0, eH.jsx)(EB, {
          target: TH,
          placement: "left",
          spotlight: fH,
          children: GH ? XH("plotsGame:guideOpenJournal") : XH("plotsGame:guideOpenJournalKeys", {
            key: (0, CH.p)(qH)
          })
        }), "placeSpot" === MH && null !== OH && (0, eH.jsxs)(eH.Fragment, {
          children: [GH && (0, eH.jsx)(QB, {}), (0, eH.jsx)(EB, {
            target: OH,
            placement: "top",
            children: XH(GH ? "plotsGame:guidePlaceSpotTouch" : "plotsGame:guidePlaceSpotMouse")
          })]
        }), "placeBuild" === MH && null !== kH && null !== OH && (0, eH.jsx)(EB, {
          target: GH ? kH : OH,
          placement: "top",
          children: XH(GH ? "plotsGame:guidePlaceBuildTouch" : "plotsGame:guidePlaceBuildMouse")
        }), "build" === MH && null !== QH && (0, eH.jsx)(YB, {
          progress: QH,
          guide: LH
        }), xH && null !== TH && (0, eH.jsx)(EB, {
          target: TH,
          placement: "left",
          children: XH("plotsGame:guideMoreBuilds")
        })]
      })
    }
    var UL = LH(39370),
      VL = LH(39374);
    class OL {
      constructor(HH, BH, LH) {
        this.api = HH, this.localPlayerId = BH, this.nextCell = LH, this.hand = null, this.skip = () => {
          this.api.sendCommand("plotsguide skip")
        }, this.bindHand = HH => {
          this.hand = HH
        }
      }
      afterRender(HH) {
        const BH = this.hand;
        if (null === BH) return;
        const LH = this.nextCell.get();
        if (null === LH) return void(0, UL.e)(BH, !0);
        const AH = (0, VL.e)(BH, HH, this.api.getPositionView(this.localPlayerId), LH, 1, 40);
        null !== AH && (0, UL.d)(BH, Math.round(100 * AH.x) / 100, Math.round(100 * AH.y) / 100)
      }
    }
    var bL = LH(1455),
      kL = LH(4941),
      mL = LH(1056);
    const oL = {
        farm_hut: LH.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
        farm_house: LH.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
        farm_barn: LH.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
        rusticHome_tent: LH.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
        rusticHome_cabin: LH.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
        rusticHome_house: LH.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
        market_stand: LH.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
        market_stall: LH.p + "static/media/market_stall.9a562807f9dff591618a.webp",
        market_shop: LH.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
        castle_wall: LH.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
        castle_gate: LH.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
        castle_tower: LH.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
      },
      IL = ["plotsGame:guideEffortQuick", "plotsGame:guideEffortMedium", "plotsGame:guideEffortBigger"],
      fL = ["market_stand", "rusticHome_tent", "farm_hut"].map((HH => ({
        id: HH,
        blocks: JH(HH, 0).cells.length
      }))).sort(((HH, BH) => HH.blocks - BH.blocks)).map(((HH, BH) => ({
        ...HH,
        effortKey: IL[BH]
      })));

    function lL(HH) {
      let {
        onBuild: BH
      } = HH;
      const {
        t: LH
      } = (0, EH.B)();
      return (0, eH.jsx)("div", {
        className: "PlotsJournalBookPages PlotsGuideChooserCover",
        children: (0, eH.jsxs)("div", {
          className: "PlotsGuideChooser",
          children: [(0, eH.jsx)("h3", {
            className: "PlotsGuideChooserTitle",
            children: LH("plotsGame:guidePickTitle")
          }), (0, eH.jsxs)("p", {
            className: "PlotsGuideChooserNote",
            children: [(0, eH.jsx)("img", {
              src: hB,
              alt: "",
              draggable: !1
            }), LH("plotsGame:guidePickNote")]
          }), (0, eH.jsx)("div", {
            className: "PlotsGuideChooserStarters",
            children: fL.map((HH => {
              let {
                id: AH,
                blocks: rH,
                effortKey: SH
              } = HH;
              return (0, eH.jsxs)("article", {
                className: "PlotsGuideStarter",
                children: [(0, eH.jsx)("button", {
                  type: "button",
                  className: "PlotsGuideStarterSketch",
                  tabIndex: -1,
                  "aria-hidden": !0,
                  "data-pad-ignore": !0,
                  onClick: () => {
                    BH(AH)
                  },
                  children: (0, eH.jsx)("img", {
                    src: oL[AH],
                    alt: "",
                    draggable: !1
                  })
                }), (0, eH.jsxs)("div", {
                  className: "PlotsGuideStarterInfo",
                  children: [(0, eH.jsxs)("span", {
                    className: "PlotsGuideStarterText",
                    children: [(0, eH.jsx)("span", {
                      className: "PlotsGuideStarterName",
                      children: LH(mH(AH).displayName.translationKey)
                    }), (0, eH.jsx)("span", {
                      className: "PlotsGuideStarterEffort",
                      children: LH(SH)
                    }), (0, eH.jsx)("span", {
                      className: "PlotsGuideStarterBlocks",
                      children: LH("plotsGame:journalBlocks", {
                        blocks: String(rH)
                      })
                    })]
                  }), (0, eH.jsx)(bL.u, {
                    onClick: () => {
                      BH(AH)
                    },
                    children: LH("plotsGame:placementBuild")
                  })]
                })]
              }, AH)
            }))
          })]
        })
      })
    }

    function KL(HH) {
      let {
        direction: BH,
        disabled: LH,
        onTurn: AH
      } = HH;
      const {
        t: rH
      } = (0, EH.B)();
      return (0, eH.jsx)("div", {
        className: GH()("PlotsJournalArrow", BH),
        children: (0, eH.jsx)(bL.i, {
          disabled: LH,
          ariaLabel: rH("Forward" === BH ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            AH(BH)
          },
          children: (0, eH.jsx)(WH.c, {
            name: "angle-up"
          })
        })
      })
    }
    const cL = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function eL(HH) {
      let {
        page: BH,
        building: LH,
        onBuild: AH,
        onPutAway: rH
      } = HH;
      const {
        t: SH
      } = (0, EH.B)(), {
        displayName: hH,
        tier: tH
      } = mH(BH.id), zH = JH(BH.id, 0).cells.length, CH = "locked" === BH.state, XH = LH ? bL.i : bL.u;
      return (0, eH.jsxs)("article", {
        className: GH()("PlotsJournalPage", {
          Locked: CH
        }),
        children: [(0, eH.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: SH(hH.translationKey)
        }), (0, eH.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [SH(cL[tH]), " \xb7 ", SH("plotsGame:journalBlocks", {
            blocks: String(zH)
          })]
        }), (0, eH.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [kH.map((HH => (0, eH.jsx)("img", {
            className: GH()({
              Shown: HH === BH.id
            }),
            src: oL[HH],
            alt: "",
            draggable: !1
          }, HH))), "completed" === BH.state && (0, eH.jsx)("span", {
            className: "PlotsJournalStamp",
            children: SH("plotsGame:journalBuilt")
          }), CH && (0, eH.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, eH.jsx)(WH.c, {
              name: "lock"
            })
          })]
        }), null !== BH.note && (0, eH.jsx)("p", {
          className: "PlotsJournalNote",
          children: SH(BH.note)
        }), (0, eH.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === BH.state && (0, eH.jsx)("p", {
            className: "PlotsJournalHint",
            children: SH("plotsGame:journalLocked", {
              name: SH(mH(BH.unlockedBy).displayName.translationKey)
            })
          }), BH.active && (0, eH.jsxs)(eH.Fragment, {
            children: [(0, eH.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: SH("plotsGame:journalBuilding")
            }), (0, eH.jsx)(bL.m, {
              onClick: rH,
              children: SH("plotsGame:journalPutAway")
            })]
          }), !CH && !BH.active && (0, eH.jsx)(XH, {
            onClick: () => {
              AH(BH.id)
            },
            children: SH("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function qL(HH) {
      let {
        className: BH,
        page: LH,
        hidden: AH,
        building: rH,
        journal: SH
      } = HH;
      return (0, eH.jsxs)("div", {
        ref: HH => {
          null !== HH && (HH.inert = AH)
        },
        className: GH()("PlotsJournalSide", BH),
        children: [void 0 !== LH && (0, eH.jsx)(eL, {
          page: LH,
          building: rH,
          onBuild: SH.build,
          onPutAway: SH.putAway
        }), void 0 === LH && (0, eH.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var gL = LH(1962);

    function NL(HH) {
      return Math.cos((0, gL.h)(HH))
    }

    function RL(HH) {
      return (0, gL.t)(Math.acos(VB.d.clamp(HH, -1, 1)))
    }

    function jL(HH, BH, LH, AH, rH) {
      const SH = Math.abs(BH - HH),
        hH = (0, gL.t)(rH / (LH * Math.abs(Math.sin((0, gL.h)(HH))))),
        tH = 450 * Math.min(1, SH / AH),
        zH = hH > 0 ? 3 * SH / hH : 1 / 0;
      return Math.round(Math.max(120, Math.min(tH, zH)))
    }
    class nL {
      constructor() {
        this.samples = []
      }
      add(HH, BH) {
        for (this.samples.push({
            x: HH,
            at: BH
          }); BH - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const HH = this.samples[0],
          BH = this.samples[this.samples.length - 1];
        return BH.at > HH.at ? (BH.x - HH.x) / (BH.at - HH.at) : 0
      }
    }

    function FL(HH) {
      return RL(new DOMMatrixReadOnly(getComputedStyle(HH).transform).m11)
    }

    function DL(HH, BH) {
      HH.style.transform = `rotateY(${-BH}deg)`, HH.classList.add("Turning")
    }

    function wL(HH, BH, LH) {
      const [AH, rH] = (0, SH.useState)(LH), hH = (0, SH.useRef)(null), tH = (0, SH.useRef)(null), zH = (0, SH.useRef)({
        Forward: null,
        Back: null
      }), CH = BH ? 2 : 1, EH = BH ? 180 : 90, XH = AH - AH % CH, GH = XH > 0, YH = XH + CH < HH, uH = (0, SH.useCallback)((() => {
        const HH = tH.current;
        return null === HH ? XH : (tH.current = null, HH.animation.cancel(), (BH = zH.current[HH.direction]).style.transform = "", BH.classList.remove("Turning"), null === HH.next ? XH : (rH(HH.next), HH.next));
        var BH
      }), [XH]), QH = (0, SH.useCallback)(((HH, BH, LH, AH) => {
        const rH = zH.current[HH],
          SH = FL(rH),
          hH = BH === ("Forward" === HH) ? EH : 0;
        DL(rH, hH);
        const XH = rH.animate([{
          transform: `rotateY(${-SH}deg)`
        }, {
          transform: `rotateY(${-hH}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : jL(SH, hH, rH.offsetWidth, EH, hH > SH ? -LH : LH),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        tH.current = {
          direction: HH,
          animation: XH,
          next: BH ? AH + ("Forward" === HH ? CH : -CH) : null
        }, XH.onfinish = () => {
          var HH;
          (null === (HH = tH.current) || void 0 === HH ? void 0 : HH.animation) === XH && uH()
        }
      }), [CH, EH, uH]), WH = (0, SH.useCallback)((BH => {
        if (null !== hH.current) return;
        const LH = uH();
        ("Forward" === BH ? LH + CH < HH : LH > 0) && QH(BH, !0, 0, LH)
      }), [uH, QH, CH, HH]);
      (0, SH.useEffect)((() => () => {
        var HH;
        null === (HH = tH.current) || void 0 === HH || HH.animation.cancel()
      }), []), (0, SH.useEffect)((() => {
        const HH = HH => {
          var BH;
          HH.pointerId !== (null === (BH = hH.current) || void 0 === BH ? void 0 : BH.pointerId) || hH.current.following || (hH.current = null)
        };
        return window.addEventListener("pointerup", HH), () => {
          window.removeEventListener("pointerup", HH)
        }
      }), []);
      const MH = (HH, BH, LH) => {
          const AH = function(HH, BH, LH, AH) {
            return (HH < 0 ? LH : AH) ? VB.d.clampAbs(HH, BH) : Math.sign(HH) * BH * (1 - 1 / (.55 * Math.abs(HH) / BH + 1))
          }(HH.base + LH, CH * HH.width, YH, GH);
          return "Forward" === BH ? Math.min(AH, 0) : Math.max(AH, 0)
        },
        xH = (HH, BH) => {
          const LH = hH.current;
          if (hH.current = null, null === LH.direction) return;
          LH.speed.add(HH, BH);
          const AH = LH.speed.get(),
            rH = MH(LH, LH.direction, HH - LH.x);
          QH(LH.direction, null !== function(HH, BH, LH, AH, rH) {
            if (Math.abs(BH) >= .3 ? Math.sign(BH) !== Math.sign(HH) : Math.abs(HH) < .5 * LH) return null;
            const SH = HH < 0 ? "Forward" : "Back";
            return ("Forward" === SH ? AH : rH) ? SH : null
          }(rH, AH, CH * LH.width, YH, GH), AH, XH)
        },
        vH = {
          onPointerDown: HH => {
            var BH;
            if (!HH.isPrimary || 0 !== HH.button || null !== tH.current && null !== HH.target.closest("button")) return;
            const LH = new nL;
            LH.add(HH.clientX, HH.timeStamp);
            const AH = zH.current.Forward.offsetWidth,
              rH = tH.current;
            tH.current = null;
            let SH = 0;
            if (null !== rH) {
              const BH = zH.current[rH.direction],
                LH = FL(BH);
              rH.animation.cancel(), DL(BH, LH), SH = function(HH, BH, LH, AH) {
                return (HH < 0 ? LH : AH) ? HH : Math.sign(HH) * BH * (1 / (1 - Math.min(Math.abs(HH) / BH, .99)) - 1) / .55
              }(function(HH, BH, LH, AH) {
                return LH * (NL(BH) - NL("Forward" === HH ? 0 : AH))
              }(rH.direction, LH, AH, EH), CH * AH, YH, GH), HH.currentTarget.setPointerCapture(HH.pointerId)
            }
            hH.current = {
              pointerId: HH.pointerId,
              x: HH.clientX,
              y: HH.clientY,
              base: SH,
              width: AH,
              following: null !== rH,
              direction: null !== (BH = null === rH || void 0 === rH ? void 0 : rH.direction) && void 0 !== BH ? BH : null,
              speed: LH
            }
          },
          onPointerMove: HH => {
            const BH = hH.current;
            if (null === BH || HH.pointerId !== BH.pointerId) return;
            if (0 === HH.buttons) return void xH(HH.clientX, HH.timeStamp);
            const LH = HH.clientX - BH.x;
            !BH.following && function(HH, BH) {
              return Math.abs(HH) > 8 && Math.abs(HH) > Math.abs(BH)
            }(LH, HH.clientY - BH.y) && (BH.following = !0, BH.direction = LH < 0 ? "Forward" : "Back", HH.currentTarget.setPointerCapture(HH.pointerId)), null !== BH.direction && (BH.speed.add(HH.clientX, HH.timeStamp), DL(zH.current[BH.direction], function(HH, BH, LH, AH) {
              const rH = LH * NL("Forward" === HH ? 0 : AH) + BH;
              return VB.d.clamp(RL(rH / LH), 0, AH)
            }(BH.direction, MH(BH, BH.direction, LH), BH.width, EH)))
          },
          onPointerUp: HH => {
            var BH;
            HH.pointerId === (null === (BH = hH.current) || void 0 === BH ? void 0 : BH.pointerId) && xH(HH.clientX, HH.timeStamp)
          },
          onPointerCancel: HH => {
            const BH = hH.current;
            HH.pointerId === (null === BH || void 0 === BH ? void 0 : BH.pointerId) && (hH.current = null, null !== BH.direction && QH(BH.direction, !1, 0, XH))
          }
        };
      return {
        first: XH,
        step: CH,
        canGoBack: GH,
        canGoForward: YH,
        turnPage: WH,
        leaves: zH,
        pagesHandlers: vH
      }
    }

    function ZL(HH, BH) {
      return HH > BH && HH >= 600
    }

    function dL(HH) {
      let {
        journal: BH,
        hud: LH,
        guide: AH
      } = HH;
      const {
        t: rH
      } = (0, EH.B)(), tH = (0, zH.e)(KH, BH.getPages()), CH = (0, zH.e)(LB, LH.getGuide()), XH = tH.find((HH => HH.active)), YH = (uH = CH, QH = void 0 === XH ? null : XH.id, "active" === uH[0] && null === QH);
      var uH, QH;
      const WH = (0, mL.n)(ZL),
        {
          first: MH,
          step: xH,
          canGoBack: TH,
          canGoForward: UH,
          turnPage: VH,
          leaves: OH,
          pagesHandlers: bH
        } = wL(tH.length, WH, (() => function(HH) {
          const BH = HH.findIndex((HH => HH.active));
          return -1 !== BH ? BH : Math.max(0, HH.findIndex((HH => "open" === HH.state)))
        }(tH)));
      (0, SH.useEffect)((() => {
        BH.onOpened()
      }), [BH]), (0, vH.c)((HH => !YH && ("ArrowLeft" === HH.code || "ArrowRight" === HH.code) && !(0, PH.isTypingInInput)()), (HH => {
        HH.stopPropagation(), VH("ArrowLeft" === HH.code ? "Back" : "Forward")
      }));
      const kH = void 0 !== XH,
        mH = (HH, LH, AH) => (0, eH.jsx)(qL, {
          className: HH,
          page: LH >= 0 && LH < tH.length ? tH[LH] : void 0,
          hidden: AH,
          building: kH,
          journal: BH
        });
      return (0, eH.jsx)(kL.b, {
        close: hH.j,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, eH.jsxs)("section", {
          className: GH()("PlotsJournal", {
            Spread: WH
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": rH("plotsGame:journalTitle"),
          children: [(0, eH.jsx)(bL.q, {
            className: "PlotsJournalClose",
            onClick: hH.j
          }), "active" === CH[0] && (0, eH.jsx)(CB, {
            className: "PlotsJournalGuideSkip",
            onSkip: AH.skip
          }), YH && (0, eH.jsx)(lL, {
            onBuild: BH.build
          }), !YH && (0, eH.jsx)(KL, {
            direction: "Back",
            disabled: !TH,
            onTurn: VH
          }), (0, eH.jsx)("div", {
            hidden: YH,
            className: "PlotsJournalBookPages",
            ...bH,
            children: (0, eH.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [WH && mH("Left", MH - 2, !0), mH("Right", MH + 2 * xH - 1, !0), (0, eH.jsxs)("div", {
                ref: HH => {
                  OH.current.Back = HH
                },
                className: "PlotsJournalLeaf Back",
                children: [mH("Recto", MH - 1, !0), WH && mH("Verso", MH, !1)]
              }), (0, eH.jsxs)("div", {
                ref: HH => {
                  OH.current.Forward = HH
                },
                className: "PlotsJournalLeaf Forward",
                children: [mH("Recto", MH + xH - 1, !1), WH && mH("Verso", MH + xH, !0)]
              })]
            })
          }), !YH && (0, eH.jsx)(KL, {
            direction: "Forward",
            disabled: !UH,
            onTurn: VH
          })]
        })
      })
    }

    function aL(HH, BH, LH, AH, rH) {
      const SH = Math.hypot(...BH.dir);
      if (!Number.isFinite(SH) || 0 === SH) return -1;
      const {
        from: hH,
        reach: tH,
        solid: zH
      } = BH, CH = [BH.dir[0] / SH, BH.dir[1] / SH, BH.dir[2] / SH], EH = null === zH ? tH : Math.min(tH, function(HH, BH, LH) {
        const AH = sL(HH, BH, LH);
        if (AH !== 1 / 0) return AH;
        return (LH[0] + .5 - HH[0]) * BH[0] + (LH[1] + .5 - HH[1]) * BH[1] + (LH[2] + .5 - HH[2]) * BH[2]
      }(hH, CH, zH) + .75);
      let XH = -1,
        GH = 1 / 0,
        YH = 1 / 0;
      for (let uH = 0; uH < HH.length; uH += 4) {
        const BH = [HH[uH], HH[uH + 1], HH[uH + 2]],
          SH = rH(uH) ? tH : EH;
        let zH = -1,
          QH = sL(hH, CH, BH);
        if (QH > SH) {
          const HH = [BH[0] + .5 - hH[0], BH[1] + .5 - hH[1], BH[2] + .5 - hH[2]];
          if (QH = HH[0] * CH[0] + HH[1] * CH[1] + HH[2] * CH[2], QH <= 0 || QH > SH) continue;
          if (zH = Math.hypot(HH[0] - QH * CH[0], HH[1] - QH * CH[1], HH[2] - QH * CH[2]), zH > .7 || !AH(uH)) continue
        }(zH < GH || zH === GH && QH < YH) && LH(uH) && (XH = uH, GH = zH, YH = QH)
      }
      return XH
    }

    function sL(HH, BH, LH) {
      let AH = 0,
        rH = 1 / 0;
      for (let SH = 0; SH < 3; SH++) {
        const hH = LH[SH] - HH[SH];
        if (0 === BH[SH]) {
          if (hH > 0 || hH + 1 < 0) return 1 / 0;
          continue
        }
        const tH = hH / BH[SH],
          zH = (hH + 1) / BH[SH];
        AH = Math.max(AH, Math.min(tH, zH)), rH = Math.min(rH, Math.max(tH, zH))
      }
      return AH <= rH ? AH : 1 / 0
    }
    var JL = LH(37761),
      iL = LH(38935);
    const pL = [1, 1, 1];
    class yL {
      constructor(HH) {
        this.api = HH, this.meshes = null, this.shown = null
      }
      show(HH) {
        if (!(0, JL.g)(HH, this.shown))
          if (this.shown = null === HH ? null : [HH[0], HH[1], HH[2]], null !== this.meshes)
            for (const BH of this.meshes) this.api.setGameMesh(BH, null === HH ? {
              visible: !1
            } : {
              anchor: HH,
              visible: !0
            });
          else if (null !== HH) {
          const BH = [iL.d, iL.d, iL.d, 0, 0, 0];
          this.meshes = [this.build([BH], iL.g, HH), this.build((0, iL.c)(), iL.l, HH)]
        }
      }
      dispose() {
        for (const BH of null !== (HH = this.meshes) && void 0 !== HH ? HH : []) {
          var HH;
          this.api.disposeGameMesh(BH)
        }
        this.meshes = null, this.shown = null
      }
      build(HH, BH, LH) {
        const AH = [],
          rH = [];
        for (const [SH, hH, tH, zH, CH, EH] of HH)(0, aB.g)(AH, rH, [zH + .5, CH + .5, EH + .5], [SH, hH, tH]);
        return this.api.createGameMesh({
          positions: AH,
          indices: rH
        }, {
          rgb: pL,
          alpha: BH,
          onTop: !0
        }, LH)
      }
    }

    function HA(HH, BH) {
      const LH = ZB.g.JW / 2;
      return HH[0] < BH[0] + LH && HH[0] + 1 > BH[0] - LH && HH[1] < BH[1] + ZB.g.iW && HH[1] + 1 > BH[1] && HH[2] < BH[2] + LH && HH[2] + 1 > BH[2] - LH
    }

    function BA(HH, BH) {
      return HH.getClientOption(BH, "blockReach") + 1
    }
    class LA {
      constructor(HH, BH, LH) {
        this.api = HH, this.localPlayerId = BH, this.foreseen = LH, this.cells = [], this.playerCells = [], this.next = null
      }
      get() {
        return this.next
      }
      setCells(HH) {
        this.cells = HH
      }
      playerMoved() {
        return AA(this.api.getPositionView(this.localPlayerId)).some(((HH, BH) => HH !== this.playerCells[BH]))
      }
      XY(HH) {
        const BH = this.api.getPositionView(this.localPlayerId);
        return this.playerCells.splice(0, 1 / 0, ...AA(BH)), this.next = this.pickFrom(null === HH ? [BH[0], BH[1] + 1, BH[2]] : (0, JL.e)(HH), (() => !1)), this.next
      }
      pickFrom(HH, BH) {
        const LH = this.api.getPositionView(this.localPlayerId),
          AH = [LH[0], LH[1] + ZB.g.iW * ZB.g.playerEyeToHeightRatio, LH[2]],
          rH = BA(this.api, this.localPlayerId),
          {
            cells: SH
          } = this,
          hH = HH => [SH[HH], SH[HH + 1], SH[HH + 2]],
          tH = function(HH, BH, LH, AH, rH, SH) {
            let hH = -1,
              tH = -1,
              zH = 1 / 0;
            for (let CH = 0; CH < HH.length; CH += BH) {
              const BH = (SH(CH) ? 2 : 0) + (AH(CH) ? 1 : 0);
              if (BH < tH || rH(CH)) continue;
              const EH = (HH[CH] + .5 - LH[0]) ** 2 + (HH[CH + 1] + .5 - LH[1]) ** 2 + (HH[CH + 2] + .5 - LH[2]) ** 2;
              (BH > tH || EH < zH) && (hH = CH, tH = BH, zH = EH)
            }
            return hH
          }(SH, 4, HH, (HH => 1 === SH[HH + 3]), (HH => {
            const AH = hH(HH);
            return HA(AH, LH) || this.foreseen.has(AH.join()) || BH(AH)
          }), (HH => function(HH, BH, LH) {
            return (BH[0] + .5 - HH[0]) ** 2 + (BH[1] + .5 - HH[1]) ** 2 + (BH[2] + .5 - HH[2]) ** 2 <= LH ** 2
          }(AH, hH(HH), rH)));
        return -1 === tH ? null : hH(tH)
      }
    }

    function AA(HH) {
      let [BH, LH, AH] = HH;
      const rH = ZB.g.JW / 2;
      return [Math.floor(BH), Math.floor(LH), Math.floor(AH), Math.floor(BH - rH), Math.floor(BH + rH), Math.floor(LH + ZB.g.iW), Math.floor(AH - rH), Math.floor(AH + rH)]
    }
    class rA {
      constructor(HH, BH, LH) {
        this.api = HH, this.localPlayerId = BH, this.pickNext = LH, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(HH) {
        const [BH, , LH] = HH.cameraDirection, AH = Math.hypot(BH, LH);
        AH > .001 && (this.heading = [BH / AH, LH / AH])
      }
      tapped(HH, BH, LH) {
        const AH = BA(this.api, this.localPlayerId),
          {
            origin: rH,
            direction: SH
          } = this.api.getActionRay(),
          hH = [...rH],
          tH = [
            [hH, [hH[0] + SH[0] * AH, hH[1] + SH[1] * AH, hH[2] + SH[2] * AH]]
          ];
        null !== HH && tH.push([hH, (0, JL.e)(HH)]), this.tap = {
          lines: tH,
          next: BH,
          ms: LH
        }
      }
      filled(HH, BH) {
        this.tap = null, this.turnFrom(HH, BH), this.retry(BH)
      }
      arrived(HH, BH) {
        const {
          tap: LH
        } = this;
        if (null === LH || BH - LH.ms > 1500) return null;
        const AH = (0, JL.e)(HH);
        return (0, JL.g)(LH.next, HH) || LH.lines.some((HH => {
          let [BH, LH] = HH;
          return function(HH, BH, LH) {
            const AH = [LH[0] - BH[0], LH[1] - BH[1], LH[2] - BH[2]],
              rH = [HH[0] - BH[0], HH[1] - BH[1], HH[2] - BH[2]],
              SH = AH[0] ** 2 + AH[1] ** 2 + AH[2] ** 2,
              hH = 0 === SH ? 0 : Math.min(1, Math.max(0, (rH[0] * AH[0] + rH[1] * AH[1] + rH[2] * AH[2]) / SH));
            return Math.hypot(rH[0] - AH[0] * hH, rH[1] - AH[1] * hH, rH[2] - AH[2] * hH)
          }(AH, BH, LH) <= .9
        })) ? (this.tap = null, this.turnFrom(HH, BH), LH.ms) : null
      }
      turnFrom(HH, BH) {
        this.pending = {
          from: HH,
          ms: BH,
          turnMs: Math.max(50, Math.min(250, BH - this.lastFillMs))
        }, this.lastFillMs = BH
      }
      retry(HH) {
        const {
          pending: BH
        } = this;
        if (null === BH) return;
        if (HH - BH.ms > 1500) return void(this.pending = null);
        const LH = this.pickNext((0, JL.e)(BH.from), (HH => (0, JL.g)(HH, BH.from)));
        if (null === LH) return;
        this.pending = null;
        const {
          turning: AH
        } = this;
        if (null !== AH && HH < AH.endMs && (0, JL.g)(AH.to, LH)) return;
        const rH = this.api.getActionRay().origin,
          SH = [LH[0] + .5 - rH[0], LH[1] + .5 - rH[1], LH[2] + .5 - rH[2]],
          hH = Math.hypot(SH[0], SH[2]);
        if (hH < .3) {
          const HH = Math.max(hH, .001);
          SH[0] = this.heading[0] * HH, SH[2] = this.heading[1] * HH
        }
        this.api.turnCamera(SH, BH.turnMs), this.turning = {
          to: LH,
          endMs: HH + BH.turnMs
        }
      }
    }
    class SA {
      constructor(HH, BH, LH, AH) {
        this.api = HH, this.localPlayerId = BH, this.juice = LH, this.tracker = AH, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.lastFilled = null, this.lastSeenFilled = null, this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = void 0, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new dB(HH), this.meshes = new HL(HH), this.outline = new yL(HH), this.nextCell = new LA(HH, BH, this.foreseen), this.turn = new rA(HH, BH, ((HH, BH) => this.nextCell.pickFrom(HH, BH)))
      }
      kX(HH) {
        const BH = "active" === HH[0] ? `${HH[1]}|${HH[3]}|${HH[4]}|${HH[5]}|${HH[6]}` : "";
        if ("active" !== HH[0]) "built" === HH[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , LH, AH, rH, SH] = HH;
          BH !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = LH) : LH === this.layerY ? this.burstUnlisted(AH) : LH > this.layerY && this.finishLayer(LH), this.layerY = LH, this.layerCells.has(LH) || this.layerCells.set(LH, AH.filter(hA)), this.ghostCells = AH, this.palette = rH, this.occupiedCells = SH
        }
        BH !== this.blueprint && (this.tracker.show("active" === HH[0] && HH[2] ? {
          id: HH[1],
          y: HH[4]
        } : null), this.blueprint = BH, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((HH => this.api.blockNameToBlockId(HH))), this.chunkWatch.watch([...this.ghostCells.filter(hA), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(HH) {
        this.burstUnlisted([]), HH > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = HH)
      }
      IX() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const HH = performance.now();
        let BH = !1;
        for (const [AH, rH] of this.foreseen) {
          var LH;
          if (HH - rH > 1e3) this.foreseen.delete(AH), BH = !0, (null === (LH = this.lastFilled) || void 0 === LH ? void 0 : LH.join()) === AH && (this.lastFilled = this.lastSeenFilled)
        }(BH || this.nextCell.playerMoved()) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(HH) {
        const BH = new Set;
        for (let rH = 0; rH < HH.length; rH += 4) BH.add(`${HH[rH]},${HH[rH+1]},${HH[rH+2]}`);
        const LH = [],
          {
            ghostCells: AH
          } = this;
        for (let rH = 0; rH < AH.length; rH += 4) {
          const HH = `${AH[rH]},${AH[rH+1]},${AH[rH+2]}`;
          !BH.has(HH) && this.open.delete(HH) && LH.push(this.filledCell(rH))
        }
        this.burst(LH)
      }
      refresh() {
        const {
          ghostCells: HH,
          palette: BH,
          occupiedCells: LH
        } = this, AH = new yB, rH = new Set, SH = [], hH = [];
        let tH = 0;
        for (let zH = 0; zH < HH.length; zH += 4) {
          const [LH, CH, EH, XH] = [HH[zH], HH[zH + 1], HH[zH + 2], HH[zH + 3]], GH = this.api.getBlockId(LH, CH, EH), YH = `${LH},${CH},${EH}`, uH = KB(this.blockIds[XH], GH);
          !uH && cB(GH) ? AH.add(LH, CH, EH, qB(BH[XH]), JB, wB(BH[XH])) : uH ? this.open.has(YH) && SH.push(this.filledCell(zH)) : AH.add(LH, CH, EH, pB, iB), uH || tH++, !uH && this.api.isBlockInLoadedChunk(LH, CH, EH) && (rH.add(YH), hH.push(LH, CH, EH, cB(GH) ? 0 : 1))
        }
        this.open = rH, this.nextCell.setCells(hH), this.tracker.update(this.layerY, this.topLayerY, tH);
        for (let zH = 0; zH < LH.length; zH += 3) {
          const [HH, BH, rH] = [LH[zH], LH[zH + 1], LH[zH + 2]];
          cB(this.api.getBlockId(HH, BH, rH)) || AH.add(HH, BH, rH, pB, iB)
        }
        this.meshes.show(AH.toArray()), this.burst(SH), this.showNext(), this.turn.retry(performance.now())
      }
      burst(HH) {
        const BH = performance.now(),
          LH = [];
        for (const [rH, SH, hH] of HH) {
          const HH = [rH, SH, hH];
          this.lastSeenFilled = HH, this.foreseen.delete(HH.join()) || LH.push(HH)
        }
        const AH = this.isHolding(BH);
        for (const rH of LH) {
          if (this.lastFilled = rH, AH && this.pressFilled) {
            this.turn.filled(rH, BH);
            continue
          }
          const HH = this.turn.arrived(rH, BH);
          if (null !== HH) {
            this.pressFilled = AH;
            for (const [BH, LH] of this.foreseen) LH <= HH && this.foreseen.delete(BH)
          }
        }
        this.juice.filled(HH)
      }
      showNext() {
        var HH;
        this.outline.show(null !== (HH = this.aimed) && void 0 !== HH ? HH : this.nextCell.XY(this.lastFilled))
      }
      afterRender(HH) {
        var BH;
        this.turn.look(HH);
        const LH = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === LH ? null : LH.position), this.outline.show(null !== (BH = this.aimed) && void 0 !== BH ? BH : this.nextCell.get())
      }
      isHolding(HH) {
        return null !== this.altMs && HH - this.altMs <= 500
      }
      attemptAltAction(HH) {
        const BH = performance.now();
        if (this.isHolding(BH) || (this.pressFilled = !1), this.altMs = BH, this.pressFilled) return "preventPlacement";
        const LH = this.findAimed(HH);
        if (null !== LH) return this.foreseen.set(LH.join(), BH), this.lastFilled = LH, this.aimed = null, this.showNext(), this.turn.filled(LH, BH), this.pressFilled = !0, "preventPlacement";
        {
          const LH = this.nextCell.get();
          null !== LH && this.turn.tapped(HH, LH, BH)
        }
      }
      holdPressOnEntity() {
        const HH = performance.now();
        this.pressFilled && this.isHolding(HH) && (this.altMs = HH)
      }
      findAimed(HH) {
        return function(HH, BH, LH, AH, rH, SH, hH) {
          const tH = HH.yLH(BH),
            zH = null === tH || null === HH.blockNameToBlockId(tH.name, !0) ? null : tH.name,
            CH = HH.getPositionView(BH),
            {
              origin: EH,
              direction: XH
            } = HH.getActionRay(),
            GH = aL(AH, {
              from: EH,
              dir: XH,
              reach: BA(HH, BH),
              solid: LH
            }, (BH => {
              const LH = [AH[BH], AH[BH + 1], AH[BH + 2]];
              return !KB(rH[AH[BH + 3]], HH.getBlockId(...LH)) && !hH.has(LH.join()) && HH.isBlockInLoadedChunk(...LH) && !HA(LH, CH)
            }), (HH => null === zH || zH === eB(rH[AH[HH + 3]])), (HH => null !== SH && AH[HH] === SH[0] && AH[HH + 1] === SH[1] && AH[HH + 2] === SH[2]));
          return -1 === GH ? null : [AH[GH], AH[GH + 1], AH[GH + 2]]
        }(this.api, this.localPlayerId, HH, this.ghostCells, this.blockIds, this.nextCell.get(), this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(HH) {
        const {
          ghostCells: BH
        } = this, [LH, AH, rH] = qB(this.palette[BH[HH + 3]]);
        return [BH[HH], BH[HH + 1], BH[HH + 2], LH, AH, rH]
      }
    }

    function hA(HH, BH) {
      return BH % 4 !== 3
    }
    class tA {
      constructor(HH) {
        this.api = HH, this.sent = !1
      }
      IX() {
        this.sent || tH.c.get("loadingOverlayVisible") || (this.sent = !0, this.api.sendCommand("plotsentered"))
      }
    }
    var zA = LH(4617),
      CA = LH(40100);

    function EA(HH, BH, LH) {
      const AH = [255 * HH, 255 * BH, 255 * LH],
        [rH, SH, hH] = AH.map((HH => HH + .4 * (255 - HH)));
      return {
        texture: "square_particle",
        aX: 48,
        minLifeTime: .3 / CA.b,
        maxLifeTime: .55 / CA.b,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * CA.b * CA.b, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...AH, 1],
          maxColor: [rH, SH, hH, 1]
        }, {
          timeFraction: 1,
          minColor: [...AH, 0],
          maxColor: [rH, SH, hH, 0]
        }],
        blendMode: zA.f.Standard
      }
    }
    const XA = {
      texture: "glint",
      mipmaps: !1,
      aX: 96,
      minLifeTime: .5 / CA.b,
      maxLifeTime: .9 / CA.b,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * CA.b * CA.b, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: zA.f.OneOne
    };
    class GA {
      constructor(HH, BH) {
        this.api = HH, this.localPlayerId = BH, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(HH) {
        if (this.api.particlesEnabled())
          for (const [BH, LH, AH, rH, SH, hH] of HH.slice(0, 3)) {
            const HH = `${rH},${SH},${hH}`;
            let tH = this.chips.get(HH);
            void 0 === tH && (tH = this.api.createParticles(EA(rH, SH, hH), {
              pos: [BH + .5, LH + .5, AH + .5]
            }), this.chips.set(HH, tH));
            for (let BH = 0; BH < 8; BH++) this.setPoint(BH, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            tH.emitPoints([BH + .5, LH + .5, AH + .5], this.points, 8)
          }
      }
      layerDone(HH) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const BH = HH.length / 3;
        if (0 === BH || !this.api.particlesEnabled()) return;
        const LH = Math.min(BH, 48),
          [AH, rH, SH] = [HH[0] + .5, HH[1] + 1, HH[2] + .5];
        let hH = 0;
        for (let tH = 0; tH < LH; tH++) {
          const zH = 3 * Math.floor(tH * BH / LH);
          for (let BH = 0; BH < 2; BH++) this.setPoint(hH++, HH[zH] + Math.random() - AH, HH[zH + 1] + 1 - rH, HH[zH + 2] + Math.random() - SH, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(XA, {
          pos: [AH, rH, SH]
        }), this.sparkles.emitPoints([AH, rH, SH], this.points, hH)
      }
      dispose() {
        var HH;
        for (const BH of this.chips.values()) BH.stop();
        this.chips.clear(), null === (HH = this.sparkles) || void 0 === HH || HH.stop(), this.sparkles = null
      }
      setPoint(HH, BH, LH, AH, rH) {
        const SH = 4 * HH;
        this.points[SH] = BH, this.points[SH + 1] = LH, this.points[SH + 2] = AH, this.points[SH + 3] = rH
      }
    }
    const YA = "SpecialAction1",
      uA = "KeyY",
      QA = "KeyX";

    function WA(HH) {
      let {
        placement: BH
      } = HH;
      const LH = (0, zH.e)(zL, BH.getView()),
        {
          t: AH
        } = (0, EH.B)(),
        {
          isTouchScreen: rH
        } = (0, tH.m)(["isTouchScreen"]),
        hH = (0, SH.useContext)(UH),
        XH = null !== LH,
        uH = XH && !LH.blocked && !LH.waiting;
      if ((0, vH.c)((HH => XH && !HH.repeat && !(0, PH.isTypingInInput)() && !(0, YH.t)() && !rH), (HH => {
          const LH = function(HH, BH, LH) {
            if (HH === QA) return BH.stop;
            if (HH === uA) return LH ? BH.build : xA;
            return CH.w[YA].includes(HH) ? BH.rotate : null
          }(HH.code, BH, uH);
          null !== LH && (HH.stopPropagation(), LH())
        })), !XH) return null;
      let WH = rH ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return LH.blocked ? WH = "plotsGame:placementOffPlot" : LH.toClear > 0 ? WH = "plotsGame:placementClear" : "placeSpot" !== hH.hint && "placeBuild" !== hH.hint || (WH = null), (0, eH.jsx)(QH.e, {
        placement: "bottom",
        children: (0, eH.jsxs)("div", {
          ref: hH.placementCardRef,
          className: "PlotsPlacementCard",
          children: [(0, eH.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: AH(mH(LH.id).displayName.translationKey)
          }), null !== WH && (0, eH.jsx)("div", {
            className: GH()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: LH.refusals > 0
            }),
            children: AH(WH)
          }, LH.refusals), (0, eH.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, eH.jsxs)(bL.i, {
              onClick: BH.rotate,
              children: [(0, eH.jsx)(MA, {
                noaAction: YA
              }), AH("plotsGame:placementRotate")]
            }), (0, eH.jsxs)(bL.O, {
              onClick: BH.stop,
              children: [(0, eH.jsx)(MA, {
                keyCode: QA
              }), AH("general:cancel")]
            }), (0, eH.jsx)("span", {
              ref: hH.buildRef,
              className: GH()("PlotsPlacementBuild", {
                Pulse: "placeBuild" === hH.hint && uH && rH
              }),
              children: (0, eH.jsxs)(bL.u, {
                disabled: !uH,
                onClick: BH.build,
                children: [(0, eH.jsx)(MA, {
                  keyCode: uA
                }), AH("plotsGame:placementBuild")]
              })
            })]
          })]
        })
      })
    }

    function MA(HH) {
      return (0, eH.jsx)(xH.b, {
        className: "PlotsPlacementKey",
        ...HH
      })
    }

    function xA() {}
    var vA = LH(2530),
      PA = LH(37569),
      TA = LH(2051),
      UA = LH(1204);
    const VA = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function OA(HH) {
      let {
        hud: BH
      } = HH;
      const LH = (0, zH.e)(BB, BH.getPlot()),
        [AH, rH] = (0, SH.useState)(null),
        hH = (0, PA.k)(AH);
      if ("none" === LH[0]) return null;
      const [, tH, CH, EH, XH, YH] = LH;
      return (0, eH.jsx)("div", {
        className: GH()("PlotsPlotBannerContainer", {
          Below: hH
        }),
        children: (0, eH.jsx)(bA, {
          plotX: tH,
          plotZ: CH,
          ownerName: EH,
          ownerId: XH,
          relation: YH,
          plaqueRef: rH
        }, `${tH},${CH}`)
      })
    }

    function bA(HH) {
      var BH, LH;
      let {
        plotX: AH,
        plotZ: rH,
        ownerName: SH,
        ownerId: hH,
        relation: tH,
        plaqueRef: zH
      } = HH;
      const {
        t: CH
      } = (0, EH.B)(), XH = (0, TA.e)("hiddenPlayerNames"), YH = (0, TA.e)("players"), uH = null === hH ? null : null !== (BH = null === (LH = YH.byId[hH]) || void 0 === LH ? void 0 : LH.cosmetics) && void 0 !== BH ? BH : null, QH = CH("plotsGame:plotBannerCoords", {
        x: AH,
        z: rH
      }), MH = "own" === tH || null !== SH;
      return (0, eH.jsxs)("div", {
        ref: zH,
        className: GH()("PlotsPlotBanner", {
          Own: "own" === tH,
          Shared: "shared" === tH
        }),
        role: "status",
        children: [(0, eH.jsxs)("span", {
          className: GH()("PlotsPlotBannerSeal", {
            Face: null !== uH
          }),
          children: [null !== uH && (0, eH.jsx)(vA.c, {
            cosmetics: uH
          }), null === uH && (0, eH.jsx)(WH.c, {
            name: VA[tH]
          })]
        }), (0, eH.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, eH.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === tH && CH("plotsGame:plotBannerYours"), "own" !== tH && null !== SH && CH("plotsGame:plotBannerOwner", {
              name: (0, UA.f)(SH, XH)
            }), !MH && QH]
          }), MH && (0, eH.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [QH, "shared" === tH && (0, eH.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: CH("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }
    const kA = function(HH, BH, LH, AH) {
      let {
        localPlayerId: rH
      } = AH;
      const tH = new rB;
      let zH = null,
        CH = null,
        EH = null,
        XH = null,
        GH = null,
        YH = null;
      const uH = [];
      return {
        onCreate: HH => {
          zH = new GA(HH, rH);
          const BH = new HB;
          CH = new SA(HH, rH, zH, BH), EH = new EL(HH, rH), XH = new cH(HH, EH), GH = new OL(HH, rH, CH.nextCell), YH = new tA(HH), uH.push((0, hH.v)((0, SH.createElement)(TL, {
            hud: tH,
            guide: GH,
            tracker: BH,
            placement: EH
          }, (0, SH.createElement)(OA, {
            hud: tH
          }), (0, SH.createElement)(gH, {
            journal: XH
          }), (0, SH.createElement)(WL, {
            placement: EH
          }), (0, SH.createElement)(WA, {
            placement: EH
          })), {
            content: (0, SH.createElement)(dL, {
              journal: XH,
              hud: tH,
              guide: GH
            })
          }))
        },
        IX: () => {
          YH.IX(), CH.IX(), EH.IX(), XH.IX()
        },
        onPlayerAttemptAltAction: (HH, BH, LH, AH, rH, SH) => {
          if (null !== SH) return void CH.holdPressOnEntity();
          const hH = void 0 === BH ? null : [BH, LH, AH];
          return CH.attemptAltAction(hH)
        },
        onPlayerClickUp: () => {
          CH.endPress()
        },
        onAfterRender: (HH, BH) => {
          EH.afterRender(BH), CH.afterRender(BH), GH.afterRender(BH)
        },
        onClose: () => {
          for (const HH of uH) HH();
          zH.dispose(), CH.dispose(), EH.dispose(), zH = null, CH = null, EH = null, XH = null, GH = null, YH = null
        },
        onReceivedMessageFromServer: (HH, BH) => {
          if ("plotsPlot" === HH) tH.receivePlot(BH);
          else if ("plotsBlueprint" === HH) {
            const HH = BH;
            CH.kX(HH), EH.kX(HH)
          } else "plotsJournal" === HH ? XH.kX(BH) : "plotsJournalOpen" === HH ? XH.openFromServer(BH) : "plotsPreviewEnd" === HH ? EH.endFromServer() : "plotsGuide" === HH ? tH.receiveGuide(BH) : "plotsGuideDone" === HH && tH.receiveGuideDone()
        }
      }
    }
  },
  39374: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => tH
    });
    var AH = LH(39370);
    const rH = 5,
      SH = [0, 0, 0],
      hH = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function tH(HH, BH, LH, tH, zH, CH) {
      let [EH, XH, GH] = tH;
      const YH = (EH + .5 - LH[0]) ** 2 + (XH - LH[1]) ** 2 + (GH + .5 - LH[2]) ** 2;
      let uH = null;
      YH <= CH ** 2 && (SH[0] = EH + .5, SH[1] = XH + zH, SH[2] = GH + .5, uH = BH.projectWorldPosToViewport(SH));
      const QH = null !== uH && uH.x > -rH && uH.x < 100 + rH && uH.y > -rH && uH.y < 100 + rH;
      return (0, AH.e)(HH, !QH), QH ? (hH.x = uH.x, hH.y = uH.y, hH.distSq = YH, hH) : null
    }
  },
  40100: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH,
      d: () => SH
    });
    const AH = 1 / .6,
      rH = {
        kind: "smokePuff"
      };
    class SH {
      constructor(HH, BH, LH) {
        this.style = HH, this.aX = BH, this.half = LH, this.particles = null, this.lastFrame = -1
      }
      emit(HH, BH, LH) {
        let SH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return LH !== this.lastFrame && (this.lastFrame = LH, this.particles || (this.particles = HH.createParticles(function(HH, BH) {
          const [
            [LH, SH, hH],
            [tH, zH, CH]
          ] = HH.colours;
          return {
            texture: HH.soft ? rH : "square_particle",
            aX: BH,
            minLifeTime: HH.life[0] / AH,
            maxLifeTime: HH.life[1] / AH,
            minEmitPower: HH.power[0] * AH,
            maxEmitPower: HH.power[1] * AH,
            minSize: HH.size[0],
            maxSize: HH.size[1],
            emitRate: 0,
            gravity: [0, HH.lift * AH * AH, 0],
            dir1: [-HH.spread, 1, -HH.spread],
            dir2: [HH.spread, 1, HH.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [LH, SH, hH, HH.alpha],
              maxColor: [tH, zH, CH, HH.alpha]
            }, {
              timeFraction: 1,
              minColor: [LH, SH, hH, 0],
              maxColor: [tH, zH, CH, 0]
            }],
            blendMode: HH.blendMode
          }
        }(this.style, this.aX), {
          pos: BH,
          half: this.half
        })), this.particles.moveTo(BH, this.half), this.particles.emit(SH), !0)
      }
      dispose() {
        var HH;
        null === (HH = this.particles) || void 0 === HH || HH.stop(), this.particles = null
      }
    }
  },
  40495: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => hH,
      e: () => tH,
      f: () => zH
    });
    const AH = new Map,
      rH = [];

    function SH() {
      for (const HH of rH) HH()
    }

    function hH(HH) {
      var BH;
      return AH.set(HH, (null !== (BH = AH.get(HH)) && void 0 !== BH ? BH : 0) + 1), SH(), () => {
        const BH = AH.get(HH) - 1;
        0 === BH ? AH.delete(HH) : AH.set(HH, BH), SH()
      }
    }

    function tH() {
      return [...AH.keys()]
    }

    function zH(HH) {
      rH.push(HH)
    }
  },
  39370: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH,
      e: () => SH
    });
    const AH = new WeakMap;

    function rH(HH) {
      let BH = AH.get(HH);
      return BH || (BH = {
        hidden: HH.hidden,
        x: NaN,
        y: NaN
      }, AH.set(HH, BH)), BH
    }

    function SH(HH, BH) {
      const LH = rH(HH);
      LH.hidden !== BH && (LH.hidden = BH, HH.hidden = BH)
    }

    function hH(HH, BH, LH) {
      const AH = rH(HH);
      AH.x === BH && AH.y === LH || (AH.x = BH, AH.y = LH, HH.style.translate = `${BH}vw ${LH}vh`)
    }
  },
  37761: (HH, BH, LH) => {
    function AH(HH, BH) {
      return null === HH || null === BH ? HH === BH : HH[0] === BH[0] && HH[1] === BH[1] && HH[2] === BH[2]
    }

    function rH(HH) {
      return [HH[0] + .5, HH[1] + .5, HH[2] + .5]
    }
    LH.d(BH, {
      e: () => rH,
      g: () => AH
    })
  },
  37798: (HH, BH, LH) => {
    function AH(HH) {
      return HH.includes("Leaf Bed")
    }

    function rH(HH) {
      return / Bed(?: Head)?(?:\||$)/.test(HH) && !AH(HH)
    }

    function SH(HH) {
      return HH.includes(" Strongbed")
    }

    function hH(HH) {
      return AH(HH) || rH(HH) || SH(HH)
    }
    LH.d(BH, {
      d: () => hH,
      h: () => AH,
      l: () => SH,
      m: () => rH
    })
  },
  37793: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => CH
    });
    var AH = LH(37798),
      rH = LH(9940);
    const SH = [],
      hH = [],
      tH = [],
      zH = [];
    for (const EH of Object.keys(rH.l))(0, AH.h)(EH) ? SH.push(EH) : (0, AH.m)(EH) && hH.push(EH), (0, AH.l)(EH) && tH.push(EH), (EH.includes(" Bed Head") || EH.includes(" Strongbed Head")) && zH.push(EH);
    const CH = {
      leafBeds: SH,
      woolBeds: hH,
      strongBeds: tH,
      beds: [...SH, ...hH, ...tH],
      bedHeads: zH,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  39448: HH => {
    HH.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYUlEQVR4nGNgIBP8R8NYwX+GDVNRMQOm4v8MC9qxYwZUxf//b+T4//8A+///51khGMTeyIGp8Nz0gv8MDoFgGsbeUB2BXeHESHcUjFNhR4Dj/zp3OzAGsbEphHgIOyYNAACzzGY5JF2GbAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);