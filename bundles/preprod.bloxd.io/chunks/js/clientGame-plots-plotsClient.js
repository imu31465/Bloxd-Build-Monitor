export const id = 26;
export const ids = [26];
export const modules = {
  37318: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => tU,
      e: () => gU,
      f: () => NU,
      h: () => YU
    });
    var cU = zU(34859),
      yU = zU(37325),
      QU = zU(37334),
      AU = zU(9282),
      FU = zU(1492),
      oU = zU(61),
      DU = zU(73),
      EU = zU(1305);

    function YU() {
      var UU;
      return (0, FU.j)(yU.d, (0, yU.o)()), (0, EU.jsx)(EU.Fragment, {
        children: null === (UU = (0, yU.o)()) || void 0 === UU ? void 0 : UU.content
      })
    }

    function NU(UU) {
      var XU;
      let {
        show: zU
      } = UU;
      (0, FU.j)(yU.d, (0, yU.o)());
      const DU = null === (XU = (0, yU.o)()) || void 0 === XU ? void 0 : XU.menu;
      return (0, oU.useEffect)((() => {
        var UU;
        zU || (null === DU || void 0 === DU || null === (UU = DU.onClose) || void 0 === UU || UU.call(DU), (0, QU.t)())
      }), [zU, DU]), (0, oU.useEffect)((() => zU ? (0, AU.d)(QU.x, QU.i) : void 0), [zU]), (0, EU.jsx)(cU.e, {
        showing: zU,
        globallyUniqueKey: "clientGameMenu",
        children: null === DU || void 0 === DU ? void 0 : DU.content
      })
    }
    const IU = new Map,
      pU = new Set;

    function aU(UU, XU) {
      XU ? IU.set(UU, XU) : IU.delete(UU);
      for (const zU of pU) zU()
    }

    function tU(UU) {
      let {
        placement: XU = "bottom"
      } = UU;
      const zU = (0, oU.useRef)(null);
      return (0, oU.useLayoutEffect)((() => {
        const UU = zU.current;
        return aU(XU, UU), () => {
          IU.get(XU) === UU && aU(XU, null)
        }
      }), [XU]), (0, EU.jsx)("div", {
        ref: zU,
        id: `clientGameHud-${XU}`,
        style: {
          display: "contents"
        }
      })
    }

    function gU(UU) {
      let {
        children: XU,
        placement: zU = "bottom"
      } = UU;
      const [cU, yU] = (0, oU.useState)((() => {
        var UU;
        return null !== (UU = IU.get(zU)) && void 0 !== UU ? UU : null
      }));
      return (0, oU.useEffect)((() => {
        const UU = () => {
          var UU;
          yU(null !== (UU = IU.get(zU)) && void 0 !== UU ? UU : null)
        };
        return pU.add(UU), UU(), () => {
          pU.delete(UU)
        }
      }), [zU]), cU ? (0, DU.createPortal)(XU, cU) : null
    }
  },
  34859: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU
    });
    var cU = zU(4977),
      yU = zU(4982);

    function QU(UU) {
      let {
        children: XU,
        showing: zU,
        globallyUniqueKey: QU,
        alwaysMountChildren: AU = !1,
        doGameplayStartStopOnShow: FU = !0,
        keepsMovement: oU = !1
      } = UU;
      return (0, yU.c)(!0, zU, QU, oU), (0, cU.d)(FU, zU), zU || AU ? XU : null
    }
  },
  37418: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => QU,
      f: () => AU,
      h: () => FU,
      j: () => oU
    });
    var cU = zU(61),
      yU = zU(3478);
    const QU = 8,
      AU = "InGameHeaderContainer",
      FU = "TopRightElements";

    function oU(UU) {
      const [XU] = (0, yU.e)(), [zU, oU] = (0, cU.useState)(!1);
      return (0, cU.useLayoutEffect)((() => {
        if (!UU) return;
        const XU = document.querySelector(`.${AU}`),
          zU = document.querySelector(`.${FU}`),
          cU = () => {
            const cU = UU.getBoundingClientRect(),
              yU = XU ? XU.getBoundingClientRect().right : 0,
              AU = zU ? zU.getBoundingClientRect().left : window.innerWidth,
              FU = cU.left < yU + QU,
              DU = cU.right > AU - QU;
            oU(FU || DU)
          };
        cU();
        const yU = new ResizeObserver(cU);
        return yU.observe(UU), XU && yU.observe(XU), zU && yU.observe(zU), () => {
          yU.disconnect()
        }
      }), [UU, XU]), zU
    }
  },
  9282: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => QU,
      d: () => yU
    });
    let cU = null;
    const yU = function(UU) {
        const XU = {
          cycle: UU,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return cU = XU, () => {
          cU === XU && (cU = null)
        }
      },
      QU = () => {
        var UU;
        return null !== (UU = cU) && void 0 !== UU && UU.canCycle() ? cU.cycle : null
      }
  },
  39299: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => AU,
      d: () => FU,
      g: () => oU
    });
    const cU = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      yU = [0, 1, 2, 0, 2, 3],
      QU = [4, 5];

    function AU(UU, XU, zU, cU, yU) {
      for (let AU = 0; AU < 6; AU++) QU.includes(AU) === yU && DU(UU, XU, zU, cU, AU)
    }

    function FU(UU, XU, zU, cU) {
      for (let yU = 0; yU < 6; yU++) DU(UU, XU, zU, cU, yU)
    }

    function oU(UU, XU, zU, QU, AU) {
      for (let FU = 0; FU < 6; FU++)
        for (const oU of [0, 1]) {
          const [DU, EU, YU] = [oU + 2, oU + 1, (oU + 3) % 4], NU = UU.length / 3;
          for (const [XU, yU] of [
              [oU, EU],
              [DU, EU],
              [DU, YU],
              [oU, YU]
            ])
            for (let oU = 0; oU < 3; oU++) {
              const DU = cU[3 * (4 * FU + XU) + oU],
                EU = cU[3 * (4 * FU + yU) + oU];
              UU.push((DU + (EU - DU) * AU) * QU / 2 + zU[oU])
            }
          for (const UU of yU) XU.push(NU + UU)
        }
    }

    function DU(UU, XU, zU, QU, AU) {
      let [FU, oU, DU] = zU, [EU, YU, NU] = QU;
      const IU = UU.length / 3;
      for (let yU = 4 * AU; yU < 4 * AU + 4; yU++) UU.push(cU[3 * yU] * EU / 2 + FU, cU[3 * yU + 1] * YU / 2 + oU, cU[3 * yU + 2] * NU / 2 + DU);
      for (const cU of yU) XU.push(IU + cU)
    }
  },
  40349: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => Lc
    });
    const cU = [0, 90, 180, 270],
      yU = "plotsblueprint";
    var QU = zU(61),
      AU = zU(37325),
      FU = zU(27),
      oU = zU(1492),
      DU = zU(2058),
      EU = zU(1193),
      YU = zU(1106),
      NU = zU.n(YU),
      IU = zU(1680),
      pU = zU(40357),
      aU = zU(37318),
      tU = zU(1390),
      gU = zU(1993),
      kU = zU(2053),
      GU = zU(3805),
      BU = zU(1800);

    function ZU() {}
    const RU = (0, QU.createContext)({
      hint: null,
      journalRef: ZU,
      placementCardRef: ZU,
      buildRef: ZU
    });
    var PU = zU(31);
    const WU = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      dU = {
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
      LU = ["small", "medium", "large"].flatMap((UU => WU.flat().filter((XU => dU[XU].tier === UU))));

    function eU(UU) {
      return dU[UU]
    }
    const CU = new Map(WU.flatMap((UU => UU.slice(1).map(((XU, zU) => [XU, UU[zU]])))));

    function wU(UU) {
      var XU;
      return null !== (XU = CU.get(UU)) && void 0 !== XU ? XU : null
    }
    const qU = {
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

    function OU(UU, XU) {
      const zU = new Set(UU),
        cU = function(UU) {
          const XU = new Set(UU);
          return new Set(LU.filter((UU => {
            const zU = wU(UU);
            return null === zU || XU.has(zU)
          })))
        }(zU);
      return LU.map((UU => {
        const yU = UU === XU;
        if (zU.has(UU)) return {
          id: UU,
          active: yU,
          note: null,
          state: "completed",
          unlockedBy: null
        };
        const QU = qU[UU],
          AU = void 0 === QU || QU.firstBuild && zU.size > 0 ? null : QU.key;
        return cU.has(UU) ? {
          id: UU,
          active: yU,
          note: AU,
          state: "open",
          unlockedBy: null
        } : {
          id: UU,
          active: yU,
          note: AU,
          state: "locked",
          unlockedBy: wU(UU)
        }
      }))
    }
    const SU = "plotsJournalChanged";
    class rU {
      constructor(UU, XU) {
        this.api = UU, this.placement = XU, this.pages = null, this.openRequested = null, this.openedOffered = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.oY(this.openedOffered ? "journal_offered" : "journal_opened"), this.openedOffered = !1
        }, this.build = UU => {
          this.placement.start(UU), (0, AU.j)()
        }, this.putAway = () => {
          this.api.sendCommand(`${yU} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      PY(UU) {
        let [, XU, zU] = UU;
        this.pages = OU(XU, zU), PU.k.UY(SU, this.pages, !0)
      }
      openFromServer(UU) {
        let [, XU] = UU;
        this.openRequested = XU, this.LY()
      }
      LY() {
        const UU = this.openRequested;
        null === UU || FU.e.get("loadingOverlayVisible") || (this.openRequested = null, null === this.pages || (0, IU.p)() || (0, BU.isTypingInInput)() || null !== this.placement.getView() || (this.openedOffered = UU, (0, AU.r)()))
      }
      oY(UU) {
        this.reported.has(UU) || (this.reported.add(UU), this.api.sendCommand(`${yU} report ${UU}`))
      }
    }
    var uU = zU(1305);
    const fU = "KeyJ";

    function iU(UU) {
      let {
        journal: XU
      } = UU;
      const zU = (0, oU.j)(SU, XU.getPages()),
        {
          isTouchScreen: cU
        } = (0, FU.q)(["isTouchScreen"]),
        {
          t: yU
        } = (0, EU.I)(),
        DU = (0, QU.useContext)(RU),
        YU = null !== zU;
      return (0, QU.useEffect)((() => YU ? (0, pU.d)(fU) : void 0), [YU]), (0, GU.d)((UU => YU && UU.code === fU && !UU.repeat && !(0, BU.isTypingInInput)()), (UU => {
        (0, IU.C)(UU, !0, AU.r)
      })), null === zU ? null : (0, uU.jsx)(aU.e, {
        placement: "topRight",
        children: (0, uU.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, uU.jsxs)("button", {
            ref: DU.journalRef,
            type: "button",
            className: NU()("PlotsJournalButton SmallTextBold", {
              Touch: cU
            }),
            onClick: AU.r,
            children: [(0, uU.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, uU.jsx)(gU.c, {
                itemName: "Book",
                amount: 0
              })
            }), yU("plotsGame:journalButton"), !cU && (0, uU.jsx)(kU.c, {
              className: "PlotsJournalButtonKey",
              keyCode: fU
            }), "openJournal" === DU.hint && (0, uU.jsx)(tU.d, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon HandLeftAnim PlotsJournalButtonHand"
            })]
          })
        })
      })
    }
    var HU = zU(9782);
    const MU = [0, 90, 180, 270],
      vU = /^(meta\|rot\d)\|([lrud]+)$/,
      VU = "nesw",
      sU = /^meta\|([nesw]*)\|?(Stacked)?$/,
      nU = function(UU) {
        const XU = new WeakMap;
        return (zU, cU) => {
          let yU = XU.get(zU);
          return void 0 === yU && (yU = UU(zU, cU), XU.set(zU, yU)), yU
        }
      }((UU => new mU(UU)));
    class mU {
      constructor(UU) {
        this.blockMetadata = UU, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const XU = new Set(Object.keys(UU).map((XU => UU[XU].id)));
        XU.add(0), this.maxBlockId = Math.max(...XU)
      }
      static
      for (UU) {
        return nU(UU)
      }
      getBlockIdMapping(UU, XU) {
        const zU = this.getBlockIdMappingKey(UU, XU);
        let cU = this.blockIdMappings.get(zU);
        return void 0 === cU && MU.includes(UU) && (cU = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, UU, XU), this.blockIdMappings.set(zU, cU)), cU
      }
      turnBlockId(UU, XU, zU) {
        return this.mapBlockId(this.blockMetadata[UU], XU, this.getRotationMapping(XU, zU), zU)
      }
      getBlockIdMappingKey(UU, XU) {
        return `r${UU}|m${Number(XU)}`
      }
      createBlockIdMapping(UU, XU, zU, cU) {
        const yU = new Uint16Array(XU + 1),
          QU = this.getRotationMapping(zU, cU);
        for (const AU in UU) {
          const XU = UU[AU];
          yU[XU.id] = this.mapBlockId(XU, zU, QU, cU)
        }
        return yU
      }
      getRotationMapping(UU, XU) {
        const zU = Math.round(UU / 90),
          cU = new Uint8Array(4);
        for (let yU = 0; yU < 4; yU++) cU[yU] = (4 + yU - zU) % 4;
        if (XU) {
          let UU = cU[0];
          cU[0] = cU[1], cU[1] = UU, UU = cU[2], cU[2] = cU[3], cU[3] = UU
        }
        return cU
      }
      mapBlockId(UU, XU, zU, cU) {
        var yU;
        const {
          blockMetadata: QU
        } = this, AU = Math.round(XU / 90), {
          id: FU,
          meta: oU
        } = UU, {
          rot: DU,
          rootName: EU,
          metaStr: YU
        } = oU;
        let NU;
        const [, IU, pU] = null !== (yU = sU.exec(YU)) && void 0 !== yU ? yU : [];
        if (void 0 !== IU) {
          var aU, tU;
          NU = null !== (aU = null === (tU = QU[`${EU}|meta|${[VU.split("").filter(((UU,XU)=>IU.split("").some((UU=>{const zU=VU.indexOf(UU);return((cU?3-zU:zU)+AU)%4===XU})))).join(""),pU].filter(Boolean).join("|")}`]) || void 0 === tU ? void 0 : tU.id) && void 0 !== aU ? aU : FU
        } else if (null === DU) NU = FU;
        else {
          var gU, kU;
          const UU = zU[DU - 1] + 1;
          let XU = YU.replace(`rot${DU}`, `rot${UU}`);
          cU && oU.stairsCorner && (XU = XU.replace(/(Left|Right)$/, (UU => "Left" === UU ? "Right" : "Left"))), cU && "Chest" === EU && (XU = XU.replace(/\|(left|right)$/, ((UU, XU) => "left" === XU ? "|right" : "|left")));
          const yU = vU.exec(XU);
          if (cU && null !== yU) {
            const UU = "lrud".split("").filter((UU => yU[2].includes("l" === UU ? "r" : "r" === UU ? "l" : UU)));
            XU = `${yU[1]}|${UU.join("")}`
          }
          const AU = `${EU}|${XU}`;
          if (NU = null !== (gU = null === (kU = QU[AU]) || void 0 === kU ? void 0 : kU.id) && void 0 !== gU ? gU : null, null === NU) {
            const UU = QU[EU];
            NU = UU.rootMetaDesc === AU ? UU.id : FU
          }
        }
        return NU
      }
    }

    function lU(UU, XU, zU) {
      let {
        xRotationMappedOrigin: cU,
        shouldSwapXZ: yU
      } = zU;
      const QU = yU ? XU : UU;
      return null === cU ? QU : cU - QU
    }

    function xU(UU, XU, zU) {
      let {
        zRotationMappedOrigin: cU,
        shouldSwapXZ: yU
      } = zU;
      const QU = yU ? UU : XU;
      return null === cU ? QU : cU - QU
    }
    const JU = {
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
      jU = new Map;

    function KU(UU, XU) {
      const zU = `${UU}|${XU}`;
      let cU = jU.get(zU);
      if (void 0 === cU) {
        const {
          size: yU,
          palette: QU,
          layers: AU
        } = JU[UU], FU = 90 === XU || 270 === XU, [oU, DU] = FU ? [yU[2], yU[0]] : [yU[0], yU[2]], EU = function(UU, XU, zU) {
          let cU = null,
            yU = null,
            QU = !1;
          switch (UU) {
            case 0:
              break;
            case 90:
              cU = XU - 1, QU = !0;
              break;
            case 180:
              cU = XU - 1, yU = zU - 1;
              break;
            case 270:
              yU = zU - 1, QU = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${UU}`)
          }
          return {
            xRotationMappedOrigin: cU,
            zRotationMappedOrigin: yU,
            shouldSwapXZ: QU
          }
        }(XU, oU, DU), YU = mU.for(HU.h), NU = QU.map((UU => (0, HU.f)(YU.turnBlockId((0, HU.j)(UU), XU, !1)))), IU = [];
        AU.forEach(((UU, XU) => {
          UU.split(" ").forEach(((UU, zU) => {
            for (let cU = 0; cU < UU.length; cU++)
              if ("." !== UU[cU]) {
                const yU = [lU(cU, zU, EU), XU, xU(cU, zU, EU)];
                IU.push({
                  offset: yU,
                  block: NU[UU.charCodeAt(cU) - "a".charCodeAt(0)]
                })
              }
          }))
        })), cU = {
          size: [oU, yU[1], DU],
          cells: IU
        }, jU.set(zU, cU)
      }
      return cU
    }
    const bU = "plotsBuildProgressChanged",
      TU = new Map;

    function hU(UU, XU, zU) {
      let cU = 0,
        yU = 0;
      return function(UU) {
        let XU = TU.get(UU);
        if (void 0 === XU) {
          const cU = [];
          for (const {
              offset: XU
            }
            of KU(UU, 0).cells) {
            var zU;
            cU[XU[1]] = (null !== (zU = cU[XU[1]]) && void 0 !== zU ? zU : 0) + 1
          }
          XU = cU, TU.set(UU, XU)
        }
        return XU
      }(UU).forEach(((UU, zU) => {
        cU += UU, zU > XU && (yU += UU)
      })), {
        id: UU,
        filled: cU - yU - zU,
        total: cU
      }
    }
    class UX {
      constructor() {
        this.shown = null, this.topOpen = 0, this.progress = null
      }
      get() {
        return this.progress
      }
      show(UU) {
        this.shown = UU, this.topOpen = 0, null === UU && this.UY(null)
      }
      update(UU, XU, zU) {
        const cU = this.shown;
        null !== cU && (UU >= XU && (this.topOpen = zU), this.UY(hU(cU.id, XU - cU.y, UU >= XU ? zU : this.topOpen + zU)))
      }
      UY(UU) {
        const XU = this.progress;
        (null === UU || void 0 === UU ? void 0 : UU.id) === (null === XU || void 0 === XU ? void 0 : XU.id) && (null === UU || void 0 === UU ? void 0 : UU.filled) === (null === XU || void 0 === XU ? void 0 : XU.filled) && (null === UU || void 0 === UU ? void 0 : UU.total) === (null === XU || void 0 === XU ? void 0 : XU.total) || (this.progress = UU, PU.k.UY(bU, UU, !0))
      }
    }
    const XX = "plotsPlotChanged",
      zX = "plotsGuideChanged",
      cX = "plotsGuideDone";
    class yX {
      constructor() {
        this.plot = ["none"], this.guide = ["none"]
      }
      getPlot() {
        return this.plot
      }
      receivePlot(UU) {
        this.plot = UU, PU.k.UY(XX, UU, !0)
      }
      getGuide() {
        return this.guide
      }
      receiveGuide(UU) {
        this.guide = UU, PU.k.UY(zX, UU, !0)
      }
      receiveGuideDone() {
        PU.k.UY(cX, void 0, !0)
      }
    }
    var QX = zU(1294),
      AX = zU(39348),
      FX = zU(37604),
      oX = zU(1515);

    function DX(UU) {
      let {
        onSkip: XU,
        className: zU
      } = UU;
      const {
        t: cU
      } = (0, EU.I)();
      return (0, uU.jsx)("button", {
        type: "button",
        className: NU()("PlotsGuideSkipButton", zU),
        ...(0, oX.f)(XU, "pointerup"),
        children: cU("tutorial:skip")
      })
    }

    function EX(UU) {
      let {
        target: XU,
        placement: zU,
        spotlight: cU = null,
        children: yU
      } = UU;
      const {
        t: AU
      } = (0, EU.I)(), FU = (0, QU.useRef)(XU);
      return FU.current = XU, (0, QX.t)("popup", FU, null === cU ? null : cU.onSkip, null !== cU, null, "controller:menusSkipTutorial"), (0, uU.jsxs)(FX.d, {
        target: XU,
        placement: zU,
        className: NU()("PlotsGuideBubble", {
          Passive: null === cU
        }),
        spotlight: null !== cU,
        spotlightMargin: 30,
        children: [(0, uU.jsxs)("div", {
          className: "PlotsGuideBubbleHeader",
          children: [(0, uU.jsx)("img", {
            className: "PlotsGuideBubblePortrait",
            src: AX,
            alt: "",
            draggable: !1
          }), (0, uU.jsx)("span", {
            className: "PlotsGuideBubbleSpeaker",
            children: AU("plotsGame:maverickName")
          }), null !== cU && (0, uU.jsx)(DX, {
            onSkip: cU.onSkip
          })]
        }), (0, uU.jsx)("p", {
          className: "PlotsGuideBubbleText",
          children: yU
        })]
      })
    }

    function YX(UU) {
      let {
        className: XU,
        icon: zU,
        title: cU,
        children: yU
      } = UU;
      return (0, uU.jsxs)("div", {
        className: NU()("PlotsCard", XU),
        role: "status",
        children: [(0, uU.jsx)("span", {
          className: "PlotsCardIcon",
          children: (0, uU.jsx)(tU.d, {
            name: zU
          })
        }), (0, uU.jsxs)("div", {
          className: "PlotsCardBody",
          children: [(0, uU.jsx)("div", {
            className: "PlotsCardTitle SmallTextBold",
            children: cU
          }), yU]
        })]
      })
    }

    function NX(UU) {
      let {
        progress: XU,
        goal: zU
      } = UU;
      const cU = Math.min(XU, zU);
      return (0, uU.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, uU.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": zU,
          "aria-valuenow": cU,
          children: (0, uU.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${cU/zU})`
            }
          })
        }), (0, uU.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [cU, "/", zU]
        })]
      })
    }

    function IX(UU) {
      let {
        progress: XU,
        guide: zU
      } = UU;
      const {
        t: cU
      } = (0, EU.I)(), {
        isTouchScreen: yU
      } = (0, FU.q)(["isTouchScreen"]), QU = XU.filled < 5;
      return (0, uU.jsxs)(uU.Fragment, {
        children: [(QU || XU.total - XU.filled <= 5) && (0, uU.jsx)("div", {
          className: "PlotsGuideHandLayer",
          children: (0, uU.jsx)("div", {
            ref: zU.bindHand,
            className: "PlotsGuideHand",
            children: (0, uU.jsx)(tU.d, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon"
            })
          })
        }), (0, uU.jsx)(aU.e, {
          placement: "bottom",
          children: (0, uU.jsxs)(YX, {
            icon: "hammer",
            title: cU(eU(XU.id).displayName.translationKey),
            children: [QU && (0, uU.jsx)("div", {
              className: "PlotsCardHint SmallTextLight",
              children: yU ? cU("plotsGame:guideBuildTouch") : pX(cU)
            }), (0, uU.jsx)(NX, {
              progress: XU.filled,
              goal: XU.total
            })]
          })
        })]
      })
    }

    function pX(UU) {
      const XU = DU.w["alt-fire"][0];
      return "Mouse3" === XU ? UU("plotsGame:guideBuildRightClick") : UU("plotsGame:guideBuildKeys", {
        key: (0, DU.p)(XU)
      })
    }

    function aX() {
      return (0, uU.jsx)("div", {
        className: "PlotsGuideDragHand",
        children: (0, uU.jsx)(tU.d, {
          name: "hand-back-point-up",
          className: "SmallTextBold TouchTutorialIcon"
        })
      })
    }
    var tX = zU(1310),
      gX = zU(2827),
      kX = zU(39196),
      GX = zU(38938),
      BX = zU(37659),
      ZX = zU(9821),
      RX = zU(9836),
      PX = zU(344),
      WX = zU(38557);
    const dX = new Map([
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
      LX = [...BX.b.blockRemoveActionRoots, ...GX.e, ...ZX.e, "Board", "Code Block", "Custom Lobby Block"],
      eX = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let CX = null;

    function wX() {
      return CX ??= function() {
        const UU = qX(),
          XU = Math.max(...UU.map((UU => HU.h[UU].id))) + 1,
          zU = new Int32Array(XU),
          cU = new Int32Array(XU),
          yU = new Uint8Array(XU).fill(1),
          QU = new Uint8Array(XU),
          AU = new Uint8Array(XU),
          FU = new Array(XU).fill("Air"),
          oU = new Map,
          DU = UU => {
            let XU = oU.get(UU);
            return void 0 === XU && (XU = oU.size + 1, oU.set(UU, XU)), XU
          },
          EU = new Set(LX);
        for (const NU of UU) {
          var YU;
          const {
            id: UU,
            meta: XU,
            altActionable: oU,
            canBePlacedOver: IU
          } = HU.h[NU];
          zU[UU] = DU(OX(NU));
          const pU = XU.stairsCorner;
          if (null === pU) cU[UU] = zU[UU];
          else {
            const zU = pU.endsWith("Right");
            cU[UU] = DU(`${XU.rootName}|rot${zU?XU.rot%4+1:XU.rot}|${XU.halfblockPlacement}|${pU.replace("Right","Left")}`)
          }
          yU[UU] = IU ? 1 : 0, QU[UU] = oU || null !== XU.open || NU in WX.c || EU.has(XU.rootName) || void 0 !== (0, GX.g)(XU.rootName) ? 1 : 0;
          const {
            rootName: aU
          } = XU;
          AU[UU] = null !== XU.open || GX.e.includes(aU) || aU.includes("Bookshelf") || aU.includes("Mailbox") ? 1 : 0, FU[UU] = null !== (YU = (0, kX.i)(UU)) && void 0 !== YU ? YU : aU
        }
        return {
          kinds: zU,
          shapes: cU,
          empty: yU,
          inUse: QU,
          ownAltActionMessage: AU,
          placingItems: FU
        }
      }(), CX
    }

    function qX() {
      return Object.keys(HU.h).filter((UU => HU.h[UU].name === UU))
    }

    function OX(UU) {
      var XU;
      const zU = HU.h[UU],
        {
          rootName: cU,
          rot: yU
        } = zU.meta,
        [, ...QU] = (null !== (XU = zU.rootMetaDesc) && void 0 !== XU ? XU : UU).split("|"),
        AU = QU.filter((UU => !("meta" === UU || eX.test(UU) || (0, RX.A)(zU) && /^[nesw]+$/.test(UU) || ZX.e.includes(cU) && /^[lrud]+$/.test(UU) || PX.E.includes(cU) && /^(left|right)$/.test(UU))));
      return [cU, ...AU].map((UU => "fenceGate" === zU.model && UU === `rot${yU}` ? "rot" + ((yU - 1) % 2 + 1) : UU)).join("|")
    }

    function SX(UU, XU) {
      const {
        kinds: zU,
        shapes: cU
      } = wX();
      return zU[UU] === zU[XU] || cU[UU] === cU[XU]
    }

    function rX(UU) {
      return 1 === wX().empty[UU]
    }

    function uX(UU) {
      return wX().placingItems[UU]
    }

    function fX(UU) {
      return dX.get(HU.h[UU].meta.rootName)
    }
    var iX = zU(9814),
      HX = zU(9834);
    const MX = [0, 0, 0, 1, 1, 1],
      vX = (0, iX.b)([
        [2, 0, 2, 6, 6, 6]
      ]),
      VX = (0, iX.b)([
        [3, 0, 3, 5, 5, 5]
      ]),
      sX = (0, iX.b)([
        [3, 3, 3, 5, 8, 5]
      ]),
      nX = [0, 1, 2, 3].map((UU => (0, iX.b)((0, iX.n)([
        [3, 2, 0, 5, 7, 3]
      ], UU))));

    function mX(UU) {
      const {
        Ft: XU,
        model: zU,
        blockModel: cU,
        meta: yU
      } = HU.h[UU];
      return void 0 !== XU ? XU : "CentreCross" === zU ? vX : null !== cU && void 0 !== cU && cU.startsWith("torch") ? yU.halfblockPlacement === HX.e.side ? nX[yU.rot - 1] : yU.halfblockPlacement === HX.e.top ? sX : VX : MX
    }
    var lX = zU(212);
    class xX {
      constructor(UU) {
        this.api = UU, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(UU) {
        const XU = lX.f.aY;
        this.chunks = [];
        for (let zU = 0; zU < UU.length; zU += 3) {
          const cU = Math.floor(UU[zU] / XU),
            yU = Math.floor(UU[zU + 1] / XU),
            QU = Math.floor(UU[zU + 2] / XU);
          this.watches(cU, yU, QU) || this.chunks.push(cU, yU, QU)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const UU = performance.now();
        if (UU - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = UU;
        let XU = !1;
        for (let zU = 0; zU < this.chunks.length; zU += 3) {
          const UU = this.api.getChunkVersion(this.chunks[zU], this.chunks[zU + 1], this.chunks[zU + 2]);
          this.versions[zU / 3] !== UU && (this.versions[zU / 3] = UU, XU = !0)
        }
        return XU
      }
      watches(UU, XU, zU) {
        for (let cU = 0; cU < this.chunks.length; cU += 3)
          if (this.chunks[cU] === UU && this.chunks[cU + 1] === XU && this.chunks[cU + 2] === zU) return !0;
        return !1
      }
    }
    var JX = zU(39299);
    const jX = .35,
      KX = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      bX = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      TX = [.95, .2, .15];
    class hX {
      constructor() {
        this.groups = []
      }
      add(UU, XU, zU, cU, yU) {
        let QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : MX;
        for (const AU of this.groups)
          if (zz(AU, cU, yU)) return AU.cells.push(UU, XU, zU), void AU.boxes.push(QU);
        this.groups.push({
          rgb: cU,
          look: yU,
          cells: [UU, XU, zU],
          boxes: [QU]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class Uz {
      constructor(UU) {
        this.api = UU, this.shown = []
      }
      show(UU) {
        const XU = [];
        for (const zU of UU) {
          const UU = this.shown.findIndex((UU => {
            let {
              group: XU
            } = UU;
            return zz(XU, zU.rgb, zU.look) && cz(XU, zU)
          })); - 1 === UU ? XU.push(this.build(zU)) : (XU.push(this.shown[UU]), this.shown.splice(UU, 1))
        }
        this.dispose(), this.shown = XU
      }
      dispose() {
        for (const {
            meshes: UU
          }
          of this.shown)
          for (const XU of UU) this.api.disposeGameMesh(XU);
        this.shown = []
      }
      build(UU) {
        const {
          rgb: XU,
          look: zU,
          boxes: cU
        } = UU, yU = [XU[0] + (1 - XU[0]) * jX, XU[1] + (1 - XU[1]) * jX, XU[2] + (1 - XU[2]) * jX], QU = [this.buildMesh(UU.cells, XU, zU.alpha, ((UU, XU, yU, QU) => {
          Xz(UU, XU, yU, cU[QU], zU.size, !1)
        })), this.buildMesh(UU.cells, yU, zU.alpha, ((UU, XU, yU, QU) => {
          Xz(UU, XU, yU, cU[QU], zU.size, !0)
        }))];
        return zU.crossed && QU.push(this.buildMesh(UU.cells, XU, .9, ((UU, XU, cU) => {
          (0, JX.g)(UU, XU, cU, zU.size + .01, .12)
        }))), {
          group: UU,
          meshes: QU
        }
      }
      buildMesh(UU, XU, zU, cU) {
        const yU = [UU[0], UU[1], UU[2]],
          QU = [],
          AU = [];
        for (let FU = 0; FU < UU.length; FU += 3) cU(QU, AU, [UU[FU] - yU[0] + .5, UU[FU + 1] - yU[1] + .5, UU[FU + 2] - yU[2] + .5], FU / 3);
        return this.api.createGameMesh({
          positions: QU,
          indices: AU
        }, {
          rgb: [XU[0], XU[1], XU[2]],
          alpha: zU
        }, yU)
      }
    }

    function Xz(UU, XU, zU, cU, yU, QU) {
      for (let AU = 0; AU < cU.length; AU += 6) {
        const FU = [0, 0, 0],
          oU = [0, 0, 0];
        for (let UU = 0; UU < 3; UU++) FU[UU] = zU[UU] + ((cU[AU + UU] + cU[AU + UU + 3]) / 2 - .5) * yU, oU[UU] = (cU[AU + UU + 3] - cU[AU + UU]) * yU;
        (0, JX.c)(UU, XU, FU, oU, QU)
      }
    }

    function zz(UU, XU, zU) {
      return UU.rgb[0] === XU[0] && UU.rgb[1] === XU[1] && UU.rgb[2] === XU[2] && UU.look === zU
    }

    function cz(UU, XU) {
      if (UU.cells.length !== XU.cells.length) return !1;
      for (let zU = 0; zU < UU.cells.length; zU++)
        if (UU.cells[zU] !== XU.cells[zU]) return !1;
      return UU.boxes.every(((UU, zU) => UU === XU.boxes[zU]))
    }

    function yz(UU, XU, zU, cU, yU) {
      if (!UU.isBlockInLoadedChunk(XU, cU - 6, zU) || !UU.isBlockInLoadedChunk(XU, cU + 6 + yU, zU) || !UU.canModifyBlockAt(XU, cU, zU)) return NaN;
      let QU = cU - 1;
      if (0 !== UU.getBlockId(XU, QU, zU)) {
        for (; QU < cU + 6 && 0 !== UU.getBlockId(XU, QU + 1, zU);) QU++;
        return QU
      }
      for (; QU > cU - 6;)
        if (QU--, 0 !== UU.getBlockId(XU, QU, zU)) return QU;
      return NaN
    }

    function Qz(UU, XU, zU, cU, yU) {
      let QU = 0;
      for (let AU = cU + 1; AU <= cU + yU; AU++) 0 !== UU.getBlockId(XU, AU, zU) && QU++;
      return QU
    }

    function Az(UU) {
      const XU = new Map;
      for (const AU of UU) {
        var zU;
        if (Number.isNaN(AU)) return null;
        XU.set(AU, (null !== (zU = XU.get(AU)) && void 0 !== zU ? zU : 0) + 1)
      }
      let cU = NaN,
        yU = 0;
      for (const [AU, FU] of XU)(FU > yU || FU === yU && AU < cU) && (cU = AU, yU = FU);
      let QU = 0;
      for (const AU of UU) QU += Math.abs(AU - cU);
      return QU
    }

    function Fz(UU, XU, zU, cU) {
      const {
        eye: yU,
        forward: QU,
        tanHalfFovX: AU,
        tanHalfFovY: FU
      } = UU, [oU, DU] = function(UU) {
        let [XU, zU, cU] = UU;
        const yU = Math.hypot(XU, cU),
          [QU, AU] = [cU / yU, -XU / yU];
        return [
          [QU, 0, AU],
          [zU * AU, cU * QU - XU * AU, -zU * QU]
        ]
      }(QU), [EU, YU] = [XU * AU, zU * FU], NU = QU[0] + EU * oU[0] + YU * DU[0], IU = QU[1] + YU * DU[1], pU = QU[2] + EU * oU[2] + YU * DU[2], aU = (cU - yU[1]) / IU;
      return aU > 0 && aU < 1 / 0 ? [yU[0] + aU * NU, yU[2] + aU * pU] : null
    }
    const oz = "plotsBlueprintPlacementChanged",
      Dz = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class Ez {
      constructor(UU, XU) {
        this.api = UU, this.localPlayerId = XU, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = UU => {
          var XU, zU, cU, QU;
          const AU = null !== (XU = null === (zU = this.placing) || void 0 === zU ? void 0 : zU.rotation) && void 0 !== XU ? XU : 0,
            {
              size: FU
            } = KU(UU, AU),
            oU = this.api.wG(this.localPlayerId),
            [DU, EU] = null !== (cU = null !== (QU = function(UU, XU, zU, cU) {
              const [yU, QU, AU] = XU, [FU, oU, DU] = [Math.floor(zU[0]), Math.floor(zU[1]), Math.floor(zU[2])], EU = 6 + Math.max(yU, AU) / 2, [YU, NU] = [Math.ceil(EU + yU / 2), Math.ceil(EU + AU / 2)], [IU, pU] = [FU - YU, DU - NU], [aU, tU] = [2 * YU + 1, 2 * NU + 1], gU = new Float64Array(aU * tU), kU = new Uint16Array(aU * tU);
              for (let PU = 0; PU < aU; PU++)
                for (let XU = 0; XU < tU; XU++) {
                  const zU = yz(UU, IU + PU, pU + XU, oU, QU);
                  gU[PU * tU + XU] = zU, Number.isNaN(zU) || (kU[PU * tU + XU] = Qz(UU, IU + PU, pU + XU, zU, QU))
                }
              const GU = Math.hypot(cU[0], cU[2]),
                BU = [];
              let ZU = null,
                RU = 1 / 0;
              for (let PU = 0; PU + yU <= aU; PU++)
                for (let UU = 0; UU + AU <= tU; UU++) {
                  const [XU, QU] = [IU + PU, pU + UU], [oU, YU] = [XU + yU / 2 - zU[0], QU + AU / 2 - zU[2]], NU = Math.hypot(oU, YU);
                  if (NU > EU || FU >= XU - 2 && FU < XU + yU + 2 && DU >= QU - 2 && DU < QU + AU + 2) continue;
                  BU.length = 0;
                  let aU = 0;
                  for (let zU = 0; zU < yU; zU++)
                    for (let XU = 0; XU < AU; XU++) BU.push(gU[(PU + zU) * tU + UU + XU]), aU += kU[(PU + zU) * tU + UU + XU];
                  const WU = Az(BU);
                  if (null === WU) continue;
                  const dU = NU + 3 * (WU + aU) + (1 - (0 === GU ? 1 : (oU * cU[0] + YU * cU[2]) / (NU * GU))) / 2 * 6;
                  dU < RU && (RU = dU, ZU = [XU, QU])
                }
              return ZU
            }(this.api, FU, oU, this.camera.forward)) && void 0 !== QU ? QU : this.cornerOnTarget(FU)) && void 0 !== cU ? cU : [Math.floor(oU[0]) + 2, Math.floor(oU[2])];
          this.placing = {
            id: UU,
            rotation: AU,
            corner: [DU, this.playerLevel(), EU],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null,
            moved: !1,
            stillSinceMs: performance.now()
          }, this.update(), this.api.sendCommand(`${yU} preview`)
        }, this.rotate = () => {
          const {
            id: UU,
            rotation: XU,
            corner: zU
          } = this.placing, yU = cU[(cU.indexOf(XU) + 1) % cU.length], [QU, , AU] = KU(UU, XU).size, [FU, , oU] = KU(UU, yU).size;
          this.moveTo(zU[0] + Math.floor(QU / 2) - Math.floor(FU / 2), zU[2] + Math.floor(AU / 2) - Math.floor(oU / 2), yU)
        }, this.hoverAt = (UU, XU) => {
          this.placing.hover = [UU, XU], this.moveCentreTo(this.camera, UU, XU)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (UU, XU) => {
          const zU = this.placing,
            {
              eye: cU,
              forward: yU,
              tanHalfFovX: QU,
              tanHalfFovY: AU
            } = this.camera,
            FU = {
              eye: [cU[0], cU[1], cU[2]],
              forward: [yU[0], yU[1], yU[2]],
              tanHalfFovX: QU,
              tanHalfFovY: AU
            },
            oU = zU.corner[1],
            DU = Fz(FU, UU, XU, oU);
          zU.hover = null, zU.drag = DU && {
            view: FU,
            ground: DU,
            corner: [zU.corner[0], zU.corner[2]],
            level: oU
          }
        }, this.dragTo = (UU, XU) => {
          const zU = this.placing.drag,
            cU = zU && Fz(zU.view, UU, XU, zU.level);
          null !== zU && null !== cU && this.moveTo(zU.corner[0] + Math.round(cU[0] - zU.ground[0]), zU.corner[1] + Math.round(cU[1] - zU.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const UU = this.view;
          UU.waiting || (UU.blocked ? this.UY({
            ...UU,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const UU = this.placing,
            {
              id: XU,
              rotation: zU,
              corner: cU
            } = UU;
          this.api.sendCommand(`${yU} place ${XU} ${cU.join(" ")} ${zU}`), UU.sent = {
            atMs: performance.now(),
            corner: [...cU],
            rotation: zU,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${yU} preview off`))
        }, this.chunkWatch = new xX(UU), this.meshes = new Uz(UU)
      }
      getView() {
        return this.view
      }
      LY() {
        const UU = this.placing;
        null !== UU && (null !== UU.sent && !UU.sent.timedOut && performance.now() - UU.sent.atMs > 3e3 ? (UU.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(UU) || this.chunkWatch.changed() || this.view.settled !== Yz(UU, this.view.blocked)) && this.update())
      }
      afterRender(UU) {
        ! function(UU, XU) {
          for (let zU = 0; zU < 3; zU++) XU.eye[zU] = UU.cameraPosition[zU], XU.forward[zU] = UU.cameraDirection[zU];
          XU.tanHalfFovX = UU.tanHalfFovX, XU.tanHalfFovY = UU.tanHalfFovY
        }(UU, this.camera);
        const XU = this.placing;
        null !== XU && null !== XU.hover && this.moveCentreTo(this.camera, XU.hover[0], XU.hover[1])
      }
      PY(UU) {
        const XU = this.placing;
        if (null === XU || null === XU.sent || "active" !== UU[0]) return;
        const {
          sent: zU
        } = XU, [, cU, yU, QU, AU, FU, oU] = UU;
        yU && cU === XU.id && oU === zU.rotation && QU === zU.corner[0] && AU === zU.corner[1] && FU === zU.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(UU) {
        let [XU, , zU] = UU;
        const cU = this.api.getTargetedBlock();
        if (null === cU) return null;
        const [yU, , QU] = cU.position;
        return [yU - Math.floor(XU / 2), QU - Math.floor(zU / 2)]
      }
      playerLevel() {
        var UU;
        const [XU, zU, cU] = this.api.wG(this.localPlayerId);
        if (null !== (UU = this.api.getLocalPlayerMovement()) && void 0 !== UU && UU.onGround) return Math.ceil(zU - .01);
        const [yU, QU, AU] = [Math.floor(XU), Math.floor(zU), Math.floor(cU)];
        for (let FU = QU; FU >= QU - 2; FU--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(yU, FU, AU))) return FU + 1;
        return QU
      }
      followPlayerLevel(UU) {
        if (Nz(UU)) return !1;
        const XU = this.playerLevel();
        return XU !== UU.corner[1] && (UU.corner[1] = XU, !0)
      }
      moveCentreTo(UU, XU, zU) {
        const cU = this.placing,
          yU = Fz(UU, XU, zU, cU.corner[1]);
        if (null !== yU) {
          const [UU, , XU] = KU(cU.id, cU.rotation).size;
          this.moveTo(Math.round(yU[0] - UU / 2), Math.round(yU[1] - XU / 2))
        }
      }
      moveTo(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const cU = this.placing;
        if (Nz(cU)) return;
        const [yU, QU, AU] = cU.corner;
        if (this.centreOnPlot(yU, AU) && !this.centreOnPlot(UU, XU, zU))
          if (this.centreOnPlot(UU, AU, zU)) XU = AU;
          else {
            if (!this.centreOnPlot(yU, XU, zU)) return;
            UU = yU
          } UU === yU && XU === AU && zU === cU.rotation || (cU.rotation = zU, cU.corner = [UU, QU, XU], cU.moved = !0, cU.stillSinceMs = performance.now(), this.update())
      }
      centreOnPlot(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: cU,
          corner: yU
        } = this.placing, [QU, , AU] = KU(cU, zU).size;
        return this.api.canModifyBlockAt(UU + Math.floor(QU / 2), yU[1], XU + Math.floor(AU / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.UY(null)
      }
      update() {
        const {
          id: UU,
          rotation: XU,
          corner: zU,
          refusals: cU
        } = this.placing, yU = new hX, QU = [];
        let AU = !1,
          FU = 0;
        for (const {
            offset: YU,
            block: NU
          }
          of KU(UU, XU).cells) {
          const [UU, XU, cU] = [zU[0] + YU[0], zU[1] + YU[1], zU[2] + YU[2]];
          QU.push(UU, XU, cU);
          const oU = !this.api.canModifyBlockAt(UU, XU, cU),
            DU = this.api.getBlockId(UU, XU, cU),
            EU = !rX(DU) && !SX(this.api.blockNameToBlockId(NU), DU);
          AU ||= oU, FU += EU ? 1 : 0, oU || EU ? yU.add(UU, XU, cU, TX, bX) : yU.add(UU, XU, cU, fX(NU), Dz, mX(NU))
        }
        this.chunkWatch.watch(QU), this.meshes.show(yU.toArray());
        const oU = this.view,
          DU = Nz(this.placing),
          EU = Yz(this.placing, AU);
        (null === oU || void 0 === oU ? void 0 : oU.id) === UU && oU.blocked === AU && oU.toClear === FU && oU.waiting === DU && oU.refusals === cU && oU.settled === EU || this.UY({
          id: UU,
          blocked: AU,
          toClear: FU,
          waiting: DU,
          refusals: cU,
          settled: EU
        })
      }
      UY(UU) {
        this.view = UU, PU.k.UY(oz, UU, !0)
      }
    }

    function Yz(UU, XU) {
      let {
        moved: zU,
        stillSinceMs: cU
      } = UU;
      return !XU && performance.now() - cU >= (zU ? 1500 : 6e3)
    }

    function Nz(UU) {
      let {
        sent: XU
      } = UU;
      return null !== XU && !XU.timedOut
    }
    var Iz = zU(4982);
    class pz {
      constructor(UU) {
        this.placement = UU, this.press = null
      }
      down(UU) {
        if (null !== this.press) return !1;
        const {
          id: XU,
          mouse: zU,
          x: cU,
          y: yU,
          atMs: QU
        } = UU;
        return this.press = {
          id: XU,
          mouse: zU,
          x: cU,
          y: yU,
          atMs: QU,
          moved: !1
        }, zU || this.placement.beginDrag(UU.ndcX, UU.ndcY), !0
      }
      move(UU) {
        const XU = this.press;
        null !== XU && XU.id === UU.id && (XU.moved ||= Math.hypot(UU.x - XU.x, UU.y - XU.y) > 8), UU.mouse ? this.placement.hoverAt(UU.ndcX, UU.ndcY) : (null === XU || void 0 === XU ? void 0 : XU.id) === UU.id && this.placement.dragTo(UU.ndcX, UU.ndcY)
      }
      up(UU) {
        const XU = this.press;
        (null === XU || void 0 === XU ? void 0 : XU.id) === UU.id && (this.move(UU), this.end(), !XU.moved && (XU.mouse || UU.atMs - XU.atMs <= 250) && this.placement.tap())
      }
      cancel(UU) {
        var XU;
        (null === (XU = this.press) || void 0 === XU ? void 0 : XU.id) === UU && this.end()
      }
      leave(UU) {
        let {
          id: XU,
          mouse: zU
        } = UU;
        zU && this.placement.endHover(), this.cancel(XU)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }
    const az = "PlotsPlacementLayer";

    function tz(UU) {
      let {
        placement: XU
      } = UU;
      return null === (0, oU.j)(oz, XU.getView()) ? null : (0, uU.jsx)(gz, {
        placement: XU
      })
    }

    function gz(UU) {
      let {
        placement: XU
      } = UU;
      (0, Iz.c)(!0, !0, az);
      const zU = (0, QU.useMemo)((() => new pz(XU)), [XU]);
      return (0, uU.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: UU => {
          "mouse" === UU.pointerType && 0 !== UU.button || !zU.down(kz(UU)) || UU.currentTarget.setPointerCapture(UU.pointerId)
        },
        onPointerMove: UU => {
          zU.move(kz(UU))
        },
        onPointerUp: UU => {
          zU.up(kz(UU))
        },
        onPointerCancel: UU => {
          zU.cancel(UU.pointerId)
        },
        onLostPointerCapture: UU => {
          zU.cancel(UU.pointerId)
        },
        onPointerLeave: UU => {
          zU.leave(kz(UU))
        },
        "aria-hidden": !0
      })
    }

    function kz(UU) {
      const {
        left: XU,
        top: zU,
        width: cU,
        height: yU
      } = UU.currentTarget.getBoundingClientRect();
      return {
        id: UU.pointerId,
        mouse: "mouse" === UU.pointerType,
        x: UU.clientX,
        y: UU.clientY,
        ndcX: (UU.clientX - XU) / cU * 2 - 1,
        ndcY: 1 - (UU.clientY - zU) / yU * 2,
        atMs: UU.timeStamp
      }
    }

    function Gz() {
      return (0, tX.p)().some((UU => UU !== tX.c && UU !== az))
    }
    const Bz = 2500;

    function Zz(UU) {
      let {
        hud: XU,
        guide: zU,
        tracker: cU,
        placement: yU,
        children: AU
      } = UU;
      const {
        t: YU
      } = (0, EU.I)(), {
        isTouchScreen: NU
      } = (0, FU.q)(["isTouchScreen"]), IU = (0, oU.j)(zX, XU.getGuide()), pU = (0, oU.j)(XX, XU.getPlot()), aU = (0, oU.j)(bU, cU.get()), tU = function(UU) {
        const {
          openInGameMenuName: XU,
          openEverythingMenuName: zU,
          loadingOverlayVisible: cU
        } = (0, FU.q)(["openInGameMenuName", "openEverythingMenuName", "loadingOverlayVisible"]), yU = (0, gX.e)(), [AU, DU] = (0, QU.useState)(Gz);
        (0, QU.useEffect)((() => {
          const UU = () => {
            DU(Gz())
          };
          UU();
          const XU = (0, tX.m)(UU),
            zU = (0, tX.j)(UU);
          return () => {
            XU(), zU()
          }
        }), []);
        const EU = (0, oU.j)(oz, UU.getView()),
          YU = "clientGame" === XU;
        return {
          hudHidden: yU || cU,
          journalOpen: YU,
          covered: AU || null !== zU || null !== XU && !YU,
          placing: null === EU ? null : EU.settled ? "placeBuild" : "placeSpot"
        }
      }(yU), gU = function(UU, XU, zU) {
        return "none" === UU[0] || zU.hudHidden || zU.journalOpen || zU.covered ? null : null !== zU.placing ? zU.placing : null !== XU ? "build" : "choose" === UU[1] ? "openJournal" : null
      }(IU, null === aU ? null : aU.id, tU), kU = function() {
        const [UU, XU] = (0, QU.useState)(null), [zU, cU] = (0, QU.useState)(!1);
        return (0, oU.f)(cX, (() => {
          XU(performance.now())
        })), (0, QU.useEffect)((() => {
          if (null === UU) return;
          const XU = window.setTimeout((() => {
              cU(!0)
            }), Bz),
            zU = window.setTimeout((() => {
              cU(!1)
            }), 7500);
          return () => {
            window.clearTimeout(XU), window.clearTimeout(zU)
          }
        }), [UU]), zU
      }() && !tU.hudHidden && !tU.covered && !tU.journalOpen && null === tU.placing, [GU, BU] = (0, QU.useState)(!1);
      (0, QU.useEffect)((() => {
        tU.journalOpen && BU(!0)
      }), [tU.journalOpen]);
      const [ZU, PU] = (0, QU.useState)(null), [WU, dU] = (0, QU.useState)(null), [LU, eU] = (0, QU.useState)(null), CU = (0, QU.useMemo)((() => ({
        hint: gU,
        journalRef: PU,
        placementCardRef: dU,
        buildRef: eU
      })), [gU]), wU = "plot" === pU[0] && "own" === pU[5], qU = NU && !GU && wU ? {
        onSkip: zU.skip
      } : null;
      return (0, uU.jsxs)(RU.Provider, {
        value: CU,
        children: [AU, "openJournal" === gU && null !== ZU && (0, uU.jsx)(EX, {
          target: ZU,
          placement: "left",
          spotlight: qU,
          children: NU ? YU("plotsGame:guideOpenJournal") : YU("plotsGame:guideOpenJournalKeys", {
            key: (0, DU.p)(fU)
          })
        }), "placeSpot" === gU && null !== WU && (0, uU.jsxs)(uU.Fragment, {
          children: [NU && (0, uU.jsx)(aX, {}), (0, uU.jsx)(EX, {
            target: WU,
            placement: "top",
            children: YU(NU ? "plotsGame:guidePlaceSpotTouch" : "plotsGame:guidePlaceSpotMouse")
          })]
        }), "placeBuild" === gU && null !== LU && null !== WU && (0, uU.jsx)(EX, {
          target: NU ? LU : WU,
          placement: "top",
          children: YU(NU ? "plotsGame:guidePlaceBuildTouch" : "plotsGame:guidePlaceBuildMouse")
        }), "build" === gU && null !== aU && (0, uU.jsx)(IX, {
          progress: aU,
          guide: zU
        }), kU && null !== ZU && (0, uU.jsx)(EX, {
          target: ZU,
          placement: "left",
          children: YU("plotsGame:guideMoreBuilds")
        })]
      })
    }
    var Rz = zU(39278),
      Pz = zU(39283);
    class Wz {
      constructor(UU, XU, zU) {
        this.api = UU, this.localPlayerId = XU, this.nextCell = zU, this.hand = null, this.skip = () => {
          this.api.sendCommand("plotsguide skip")
        }, this.bindHand = UU => {
          this.hand = UU
        }
      }
      afterRender(UU) {
        const XU = this.hand;
        if (null === XU) return;
        const zU = this.nextCell.get();
        if (null === zU) return void(0, Rz.g)(XU, !0);
        const cU = (0, Pz.b)(XU, UU, this.api.getPositionView(this.localPlayerId), zU, 1, 40);
        null !== cU && (0, Rz.d)(XU, Math.round(100 * cU.x) / 100, Math.round(100 * cU.y) / 100)
      }
    }
    var dz = zU(1494),
      Lz = zU(4968),
      ez = zU(1124);
    const Cz = {
        farm_hut: zU.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
        farm_house: zU.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
        farm_barn: zU.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
        rusticHome_tent: zU.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
        rusticHome_cabin: zU.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
        rusticHome_house: zU.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
        market_stand: zU.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
        market_stall: zU.p + "static/media/market_stall.9a562807f9dff591618a.webp",
        market_shop: zU.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
        castle_wall: zU.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
        castle_gate: zU.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
        castle_tower: zU.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
      },
      wz = ["plotsGame:guideEffortQuick", "plotsGame:guideEffortMedium", "plotsGame:guideEffortBigger"],
      qz = ["market_stand", "rusticHome_tent", "farm_hut"].map((UU => ({
        id: UU,
        blocks: KU(UU, 0).cells.length
      }))).sort(((UU, XU) => UU.blocks - XU.blocks)).map(((UU, XU) => ({
        ...UU,
        effortKey: wz[XU]
      })));

    function Oz(UU) {
      let {
        onBuild: XU
      } = UU;
      const {
        t: zU
      } = (0, EU.I)();
      return (0, uU.jsx)("div", {
        className: "PlotsJournalBookPages PlotsGuideChooserCover",
        children: (0, uU.jsxs)("div", {
          className: "PlotsGuideChooser",
          children: [(0, uU.jsx)("h3", {
            className: "PlotsGuideChooserTitle",
            children: zU("plotsGame:guidePickTitle")
          }), (0, uU.jsxs)("p", {
            className: "PlotsGuideChooserNote",
            children: [(0, uU.jsx)("img", {
              src: AX,
              alt: "",
              draggable: !1
            }), zU("plotsGame:guidePickNote")]
          }), (0, uU.jsx)("div", {
            className: "PlotsGuideChooserStarters",
            children: qz.map((UU => {
              let {
                id: cU,
                blocks: yU,
                effortKey: QU
              } = UU;
              return (0, uU.jsxs)("article", {
                className: "PlotsGuideStarter",
                children: [(0, uU.jsx)("button", {
                  type: "button",
                  className: "PlotsGuideStarterSketch",
                  tabIndex: -1,
                  "aria-hidden": !0,
                  "data-pad-ignore": !0,
                  onClick: () => {
                    XU(cU)
                  },
                  children: (0, uU.jsx)("img", {
                    src: Cz[cU],
                    alt: "",
                    draggable: !1
                  })
                }), (0, uU.jsxs)("div", {
                  className: "PlotsGuideStarterInfo",
                  children: [(0, uU.jsxs)("span", {
                    className: "PlotsGuideStarterText",
                    children: [(0, uU.jsx)("span", {
                      className: "PlotsGuideStarterName",
                      children: zU(eU(cU).displayName.translationKey)
                    }), (0, uU.jsx)("span", {
                      className: "PlotsGuideStarterEffort",
                      children: zU(QU)
                    }), (0, uU.jsx)("span", {
                      className: "PlotsGuideStarterBlocks",
                      children: zU("plotsGame:journalBlocks", {
                        blocks: String(yU)
                      })
                    })]
                  }), (0, uU.jsx)(dz.l, {
                    onClick: () => {
                      XU(cU)
                    },
                    children: zU("plotsGame:placementBuild")
                  })]
                })]
              }, cU)
            }))
          })]
        })
      })
    }

    function Sz(UU) {
      let {
        direction: XU,
        disabled: zU,
        onTurn: cU
      } = UU;
      const {
        t: yU
      } = (0, EU.I)();
      return (0, uU.jsx)("div", {
        className: NU()("PlotsJournalArrow", XU),
        children: (0, uU.jsx)(dz.f, {
          disabled: zU,
          ariaLabel: yU("Forward" === XU ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            cU(XU)
          },
          children: (0, uU.jsx)(tU.d, {
            name: "angle-up"
          })
        })
      })
    }
    const rz = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function uz(UU) {
      let {
        page: XU,
        building: zU,
        onBuild: cU,
        onPutAway: yU
      } = UU;
      const {
        t: QU
      } = (0, EU.I)(), {
        displayName: AU,
        tier: FU
      } = eU(XU.id), oU = KU(XU.id, 0).cells.length, DU = "locked" === XU.state, YU = zU ? dz.f : dz.l;
      return (0, uU.jsxs)("article", {
        className: NU()("PlotsJournalPage", {
          Locked: DU
        }),
        children: [(0, uU.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: QU(AU.translationKey)
        }), (0, uU.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [QU(rz[FU]), " \xb7 ", QU("plotsGame:journalBlocks", {
            blocks: String(oU)
          })]
        }), (0, uU.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [LU.map((UU => (0, uU.jsx)("img", {
            className: NU()({
              Shown: UU === XU.id
            }),
            src: Cz[UU],
            alt: "",
            draggable: !1
          }, UU))), "completed" === XU.state && (0, uU.jsx)("span", {
            className: "PlotsJournalStamp",
            children: QU("plotsGame:journalBuilt")
          }), DU && (0, uU.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, uU.jsx)(tU.d, {
              name: "lock"
            })
          })]
        }), null !== XU.note && (0, uU.jsx)("p", {
          className: "PlotsJournalNote",
          children: QU(XU.note)
        }), (0, uU.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === XU.state && (0, uU.jsx)("p", {
            className: "PlotsJournalHint",
            children: QU("plotsGame:journalLocked", {
              name: QU(eU(XU.unlockedBy).displayName.translationKey)
            })
          }), XU.active && (0, uU.jsxs)(uU.Fragment, {
            children: [(0, uU.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: QU("plotsGame:journalBuilding")
            }), (0, uU.jsx)(dz.j, {
              onClick: yU,
              children: QU("plotsGame:journalPutAway")
            })]
          }), !DU && !XU.active && (0, uU.jsx)(YU, {
            onClick: () => {
              cU(XU.id)
            },
            children: QU("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function fz(UU) {
      let {
        className: XU,
        page: zU,
        hidden: cU,
        building: yU,
        journal: QU
      } = UU;
      return (0, uU.jsxs)("div", {
        ref: UU => {
          null !== UU && (UU.inert = cU)
        },
        className: NU()("PlotsJournalSide", XU),
        children: [void 0 !== zU && (0, uU.jsx)(uz, {
          page: zU,
          building: yU,
          onBuild: QU.build,
          onPutAway: QU.putAway
        }), void 0 === zU && (0, uU.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var iz = zU(1974);

    function Hz(UU) {
      return Math.cos((0, iz.l)(UU))
    }

    function Mz(UU) {
      return (0, iz.D)(Math.acos(PX.d.clamp(UU, -1, 1)))
    }

    function vz(UU, XU, zU, cU, yU) {
      const QU = Math.abs(XU - UU),
        AU = (0, iz.D)(yU / (zU * Math.abs(Math.sin((0, iz.l)(UU))))),
        FU = 450 * Math.min(1, QU / cU),
        oU = AU > 0 ? 3 * QU / AU : 1 / 0;
      return Math.round(Math.max(120, Math.min(FU, oU)))
    }
    class Vz {
      constructor() {
        this.samples = []
      }
      add(UU, XU) {
        for (this.samples.push({
            x: UU,
            at: XU
          }); XU - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const UU = this.samples[0],
          XU = this.samples[this.samples.length - 1];
        return XU.at > UU.at ? (XU.x - UU.x) / (XU.at - UU.at) : 0
      }
    }

    function sz(UU) {
      return Mz(new DOMMatrixReadOnly(getComputedStyle(UU).transform).m11)
    }

    function nz(UU, XU) {
      UU.style.transform = `rotateY(${-XU}deg)`, UU.classList.add("Turning")
    }

    function mz(UU, XU, zU) {
      const [cU, yU] = (0, QU.useState)(zU), AU = (0, QU.useRef)(null), FU = (0, QU.useRef)(null), oU = (0, QU.useRef)({
        Forward: null,
        Back: null
      }), DU = XU ? 2 : 1, EU = XU ? 180 : 90, YU = cU - cU % DU, NU = YU > 0, IU = YU + DU < UU, pU = (0, QU.useCallback)((() => {
        const UU = FU.current;
        return null === UU ? YU : (FU.current = null, UU.animation.cancel(), (XU = oU.current[UU.direction]).style.transform = "", XU.classList.remove("Turning"), null === UU.next ? YU : (yU(UU.next), UU.next));
        var XU
      }), [YU]), aU = (0, QU.useCallback)(((UU, XU, zU, cU) => {
        const yU = oU.current[UU],
          QU = sz(yU),
          AU = XU === ("Forward" === UU) ? EU : 0;
        nz(yU, AU);
        const YU = yU.animate([{
          transform: `rotateY(${-QU}deg)`
        }, {
          transform: `rotateY(${-AU}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : vz(QU, AU, yU.offsetWidth, EU, AU > QU ? -zU : zU),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        FU.current = {
          direction: UU,
          animation: YU,
          next: XU ? cU + ("Forward" === UU ? DU : -DU) : null
        }, YU.onfinish = () => {
          var UU;
          (null === (UU = FU.current) || void 0 === UU ? void 0 : UU.animation) === YU && pU()
        }
      }), [DU, EU, pU]), tU = (0, QU.useCallback)((XU => {
        if (null !== AU.current) return;
        const zU = pU();
        ("Forward" === XU ? zU + DU < UU : zU > 0) && aU(XU, !0, 0, zU)
      }), [pU, aU, DU, UU]);
      (0, QU.useEffect)((() => () => {
        var UU;
        null === (UU = FU.current) || void 0 === UU || UU.animation.cancel()
      }), []), (0, QU.useEffect)((() => {
        const UU = UU => {
          var XU;
          UU.pointerId !== (null === (XU = AU.current) || void 0 === XU ? void 0 : XU.pointerId) || AU.current.following || (AU.current = null)
        };
        return window.addEventListener("pointerup", UU), () => {
          window.removeEventListener("pointerup", UU)
        }
      }), []);
      const gU = (UU, XU, zU) => {
          const cU = function(UU, XU, zU, cU) {
            return (UU < 0 ? zU : cU) ? PX.d.clampAbs(UU, XU) : Math.sign(UU) * XU * (1 - 1 / (.55 * Math.abs(UU) / XU + 1))
          }(UU.base + zU, DU * UU.width, IU, NU);
          return "Forward" === XU ? Math.min(cU, 0) : Math.max(cU, 0)
        },
        kU = (UU, XU) => {
          const zU = AU.current;
          if (AU.current = null, null === zU.direction) return;
          zU.speed.add(UU, XU);
          const cU = zU.speed.get(),
            yU = gU(zU, zU.direction, UU - zU.x);
          aU(zU.direction, null !== function(UU, XU, zU, cU, yU) {
            if (Math.abs(XU) >= .3 ? Math.sign(XU) !== Math.sign(UU) : Math.abs(UU) < .5 * zU) return null;
            const QU = UU < 0 ? "Forward" : "Back";
            return ("Forward" === QU ? cU : yU) ? QU : null
          }(yU, cU, DU * zU.width, IU, NU), cU, YU)
        },
        GU = {
          onPointerDown: UU => {
            var XU;
            if (!UU.isPrimary || 0 !== UU.button || null !== FU.current && null !== UU.target.closest("button")) return;
            const zU = new Vz;
            zU.add(UU.clientX, UU.timeStamp);
            const cU = oU.current.Forward.offsetWidth,
              yU = FU.current;
            FU.current = null;
            let QU = 0;
            if (null !== yU) {
              const XU = oU.current[yU.direction],
                zU = sz(XU);
              yU.animation.cancel(), nz(XU, zU), QU = function(UU, XU, zU, cU) {
                return (UU < 0 ? zU : cU) ? UU : Math.sign(UU) * XU * (1 / (1 - Math.min(Math.abs(UU) / XU, .99)) - 1) / .55
              }(function(UU, XU, zU, cU) {
                return zU * (Hz(XU) - Hz("Forward" === UU ? 0 : cU))
              }(yU.direction, zU, cU, EU), DU * cU, IU, NU), UU.currentTarget.setPointerCapture(UU.pointerId)
            }
            AU.current = {
              pointerId: UU.pointerId,
              x: UU.clientX,
              y: UU.clientY,
              base: QU,
              width: cU,
              following: null !== yU,
              direction: null !== (XU = null === yU || void 0 === yU ? void 0 : yU.direction) && void 0 !== XU ? XU : null,
              speed: zU
            }
          },
          onPointerMove: UU => {
            const XU = AU.current;
            if (null === XU || UU.pointerId !== XU.pointerId) return;
            if (0 === UU.buttons) return void kU(UU.clientX, UU.timeStamp);
            const zU = UU.clientX - XU.x;
            !XU.following && function(UU, XU) {
              return Math.abs(UU) > 8 && Math.abs(UU) > Math.abs(XU)
            }(zU, UU.clientY - XU.y) && (XU.following = !0, XU.direction = zU < 0 ? "Forward" : "Back", UU.currentTarget.setPointerCapture(UU.pointerId)), null !== XU.direction && (XU.speed.add(UU.clientX, UU.timeStamp), nz(oU.current[XU.direction], function(UU, XU, zU, cU) {
              const yU = zU * Hz("Forward" === UU ? 0 : cU) + XU;
              return PX.d.clamp(Mz(yU / zU), 0, cU)
            }(XU.direction, gU(XU, XU.direction, zU), XU.width, EU)))
          },
          onPointerUp: UU => {
            var XU;
            UU.pointerId === (null === (XU = AU.current) || void 0 === XU ? void 0 : XU.pointerId) && kU(UU.clientX, UU.timeStamp)
          },
          onPointerCancel: UU => {
            const XU = AU.current;
            UU.pointerId === (null === XU || void 0 === XU ? void 0 : XU.pointerId) && (AU.current = null, null !== XU.direction && aU(XU.direction, !1, 0, YU))
          }
        };
      return {
        first: YU,
        step: DU,
        canGoBack: NU,
        canGoForward: IU,
        turnPage: tU,
        leaves: oU,
        pagesHandlers: GU
      }
    }

    function lz(UU, XU) {
      return UU > XU && UU >= 600
    }

    function xz(UU) {
      let {
        journal: XU,
        hud: zU,
        guide: cU
      } = UU;
      const {
        t: yU
      } = (0, EU.I)(), FU = (0, oU.j)(SU, XU.getPages()), DU = (0, oU.j)(zX, zU.getGuide()), YU = FU.find((UU => UU.active)), IU = (pU = DU, aU = void 0 === YU ? null : YU.id, "active" === pU[0] && null === aU);
      var pU, aU;
      const tU = (0, ez.l)(lz),
        {
          first: gU,
          step: kU,
          canGoBack: ZU,
          canGoForward: RU,
          turnPage: PU,
          leaves: WU,
          pagesHandlers: dU
        } = mz(FU.length, tU, (() => function(UU) {
          const XU = UU.findIndex((UU => UU.active));
          return -1 !== XU ? XU : Math.max(0, UU.findIndex((UU => "open" === UU.state)))
        }(FU)));
      (0, QU.useEffect)((() => {
        XU.onOpened()
      }), [XU]), (0, GU.d)((UU => !IU && ("ArrowLeft" === UU.code || "ArrowRight" === UU.code) && !(0, BU.isTypingInInput)()), (UU => {
        UU.stopPropagation(), PU("ArrowLeft" === UU.code ? "Back" : "Forward")
      }));
      const LU = void 0 !== YU,
        eU = (UU, zU, cU) => (0, uU.jsx)(fz, {
          className: UU,
          page: zU >= 0 && zU < FU.length ? FU[zU] : void 0,
          hidden: cU,
          building: LU,
          journal: XU
        });
      return (0, uU.jsx)(Lz.c, {
        close: AU.l,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, uU.jsxs)("section", {
          className: NU()("PlotsJournal", {
            Spread: tU
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": yU("plotsGame:journalTitle"),
          children: [(0, uU.jsx)(dz.k, {
            className: "PlotsJournalClose",
            onClick: AU.l
          }), "active" === DU[0] && (0, uU.jsx)(DX, {
            className: "PlotsJournalGuideSkip",
            onSkip: cU.skip
          }), IU && (0, uU.jsx)(Oz, {
            onBuild: XU.build
          }), !IU && (0, uU.jsx)(Sz, {
            direction: "Back",
            disabled: !ZU,
            onTurn: PU
          }), (0, uU.jsx)("div", {
            hidden: IU,
            className: "PlotsJournalBookPages",
            ...dU,
            children: (0, uU.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [tU && eU("Left", gU - 2, !0), eU("Right", gU + 2 * kU - 1, !0), (0, uU.jsxs)("div", {
                ref: UU => {
                  WU.current.Back = UU
                },
                className: "PlotsJournalLeaf Back",
                children: [eU("Recto", gU - 1, !0), tU && eU("Verso", gU, !1)]
              }), (0, uU.jsxs)("div", {
                ref: UU => {
                  WU.current.Forward = UU
                },
                className: "PlotsJournalLeaf Forward",
                children: [eU("Recto", gU + kU - 1, !1), tU && eU("Verso", gU + kU, !0)]
              })]
            })
          }), !IU && (0, uU.jsx)(Sz, {
            direction: "Forward",
            disabled: !RU,
            onTurn: PU
          })]
        })
      })
    }

    function Jz(UU, XU, zU, cU, yU) {
      const QU = Math.hypot(...XU.dir);
      if (!Number.isFinite(QU) || 0 === QU) return -1;
      const {
        from: AU,
        reach: FU,
        solid: oU
      } = XU, DU = [XU.dir[0] / QU, XU.dir[1] / QU, XU.dir[2] / QU], EU = null === oU ? FU : Math.min(FU, function(UU, XU, zU) {
        const cU = jz(UU, XU, zU);
        if (cU !== 1 / 0) return cU;
        return (zU[0] + .5 - UU[0]) * XU[0] + (zU[1] + .5 - UU[1]) * XU[1] + (zU[2] + .5 - UU[2]) * XU[2]
      }(AU, DU, oU) + .75);
      let YU = -1,
        NU = 1 / 0,
        IU = 1 / 0;
      for (let pU = 0; pU < UU.length; pU += 4) {
        const XU = [UU[pU], UU[pU + 1], UU[pU + 2]],
          QU = yU(pU) ? FU : EU;
        let oU = -1,
          aU = jz(AU, DU, XU);
        if (aU > QU) {
          const UU = [XU[0] + .5 - AU[0], XU[1] + .5 - AU[1], XU[2] + .5 - AU[2]];
          if (aU = UU[0] * DU[0] + UU[1] * DU[1] + UU[2] * DU[2], aU <= 0 || aU > QU) continue;
          if (oU = Math.hypot(UU[0] - aU * DU[0], UU[1] - aU * DU[1], UU[2] - aU * DU[2]), oU > .7 || !cU(pU)) continue
        }(oU < NU || oU === NU && aU < IU) && zU(pU) && (YU = pU, NU = oU, IU = aU)
      }
      return YU
    }

    function jz(UU, XU, zU) {
      let cU = 0,
        yU = 1 / 0;
      for (let QU = 0; QU < 3; QU++) {
        const AU = zU[QU] - UU[QU];
        if (0 === XU[QU]) {
          if (AU > 0 || AU + 1 < 0) return 1 / 0;
          continue
        }
        const FU = AU / XU[QU],
          oU = (AU + 1) / XU[QU];
        cU = Math.max(cU, Math.min(FU, oU)), yU = Math.min(yU, Math.max(FU, oU))
      }
      return cU <= yU ? cU : 1 / 0
    }
    var Kz = zU(37624),
      bz = zU(38809);
    const Tz = [1, 1, 1];
    class hz {
      constructor(UU) {
        this.api = UU, this.meshes = null, this.shown = null
      }
      show(UU) {
        if (!(0, Kz.h)(UU, this.shown))
          if (this.shown = null === UU ? null : [UU[0], UU[1], UU[2]], null !== this.meshes)
            for (const XU of this.meshes) this.api.setGameMesh(XU, null === UU ? {
              visible: !1
            } : {
              anchor: UU,
              visible: !0
            });
          else if (null !== UU) {
          const XU = [bz.f, bz.f, bz.f, 0, 0, 0];
          this.meshes = [this.build([XU], bz.j, UU), this.build((0, bz.c)(), bz.o, UU)]
        }
      }
      dispose() {
        for (const XU of null !== (UU = this.meshes) && void 0 !== UU ? UU : []) {
          var UU;
          this.api.disposeGameMesh(XU)
        }
        this.meshes = null, this.shown = null
      }
      build(UU, XU, zU) {
        const cU = [],
          yU = [];
        for (const [QU, AU, FU, oU, DU, EU] of UU)(0, JX.d)(cU, yU, [oU + .5, DU + .5, EU + .5], [QU, AU, FU]);
        return this.api.createGameMesh({
          positions: cU,
          indices: yU
        }, {
          rgb: Tz,
          alpha: XU,
          onTop: !0
        }, zU)
      }
    }

    function Uc(UU, XU) {
      const zU = lX.f.zg / 2;
      return UU[0] < XU[0] + zU && UU[0] + 1 > XU[0] - zU && UU[1] < XU[1] + lX.f.cg && UU[1] + 1 > XU[1] && UU[2] < XU[2] + zU && UU[2] + 1 > XU[2] - zU
    }

    function Xc(UU, XU) {
      return UU.getClientOption(XU, "blockReach") + 1
    }
    class zc {
      constructor(UU, XU, zU) {
        this.api = UU, this.localPlayerId = XU, this.foreseen = zU, this.cells = [], this.playerCells = [], this.next = null
      }
      get() {
        return this.next
      }
      setCells(UU) {
        this.cells = UU
      }
      playerMoved() {
        return cc(this.api.getPositionView(this.localPlayerId)).some(((UU, XU) => UU !== this.playerCells[XU]))
      }
      DI(UU) {
        const XU = this.api.getPositionView(this.localPlayerId);
        return this.playerCells.splice(0, 1 / 0, ...cc(XU)), this.next = this.pickFrom(null === UU ? [XU[0], XU[1] + 1, XU[2]] : (0, Kz.e)(UU), (() => !1)), this.next
      }
      pickFrom(UU, XU) {
        const zU = this.api.getPositionView(this.localPlayerId),
          cU = [zU[0], zU[1] + lX.f.cg * lX.f.playerEyeToHeightRatio, zU[2]],
          yU = Xc(this.api, this.localPlayerId),
          {
            cells: QU
          } = this,
          AU = UU => [QU[UU], QU[UU + 1], QU[UU + 2]],
          FU = function(UU, XU, zU, cU, yU, QU) {
            let AU = -1,
              FU = -1,
              oU = 1 / 0;
            for (let DU = 0; DU < UU.length; DU += XU) {
              const XU = (QU(DU) ? 2 : 0) + (cU(DU) ? 1 : 0);
              if (XU < FU || yU(DU)) continue;
              const EU = (UU[DU] + .5 - zU[0]) ** 2 + (UU[DU + 1] + .5 - zU[1]) ** 2 + (UU[DU + 2] + .5 - zU[2]) ** 2;
              (XU > FU || EU < oU) && (AU = DU, FU = XU, oU = EU)
            }
            return AU
          }(QU, 4, UU, (UU => 1 === QU[UU + 3]), (UU => {
            const cU = AU(UU);
            return Uc(cU, zU) || this.foreseen.has(cU.join()) || XU(cU)
          }), (UU => function(UU, XU, zU) {
            return (XU[0] + .5 - UU[0]) ** 2 + (XU[1] + .5 - UU[1]) ** 2 + (XU[2] + .5 - UU[2]) ** 2 <= zU ** 2
          }(cU, AU(UU), yU)));
        return -1 === FU ? null : AU(FU)
      }
    }

    function cc(UU) {
      let [XU, zU, cU] = UU;
      const yU = lX.f.zg / 2;
      return [Math.floor(XU), Math.floor(zU), Math.floor(cU), Math.floor(XU - yU), Math.floor(XU + yU), Math.floor(zU + lX.f.cg), Math.floor(cU - yU), Math.floor(cU + yU)]
    }
    class yc {
      constructor(UU, XU, zU) {
        this.api = UU, this.localPlayerId = XU, this.pickNext = zU, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(UU) {
        const [XU, , zU] = UU.cameraDirection, cU = Math.hypot(XU, zU);
        cU > .001 && (this.heading = [XU / cU, zU / cU])
      }
      tapped(UU, XU, zU) {
        const cU = Xc(this.api, this.localPlayerId),
          {
            origin: yU,
            direction: QU
          } = this.api.getActionRay(),
          AU = [...yU],
          FU = [
            [AU, [AU[0] + QU[0] * cU, AU[1] + QU[1] * cU, AU[2] + QU[2] * cU]]
          ];
        null !== UU && FU.push([AU, (0, Kz.e)(UU)]), this.tap = {
          lines: FU,
          next: XU,
          ms: zU
        }
      }
      filled(UU, XU) {
        this.tap = null, this.turnFrom(UU, XU), this.retry(XU)
      }
      arrived(UU, XU) {
        const {
          tap: zU
        } = this;
        if (null === zU || XU - zU.ms > 1500) return null;
        const cU = (0, Kz.e)(UU);
        return (0, Kz.h)(zU.next, UU) || zU.lines.some((UU => {
          let [XU, zU] = UU;
          return function(UU, XU, zU) {
            const cU = [zU[0] - XU[0], zU[1] - XU[1], zU[2] - XU[2]],
              yU = [UU[0] - XU[0], UU[1] - XU[1], UU[2] - XU[2]],
              QU = cU[0] ** 2 + cU[1] ** 2 + cU[2] ** 2,
              AU = 0 === QU ? 0 : Math.min(1, Math.max(0, (yU[0] * cU[0] + yU[1] * cU[1] + yU[2] * cU[2]) / QU));
            return Math.hypot(yU[0] - cU[0] * AU, yU[1] - cU[1] * AU, yU[2] - cU[2] * AU)
          }(cU, XU, zU) <= .9
        })) ? (this.tap = null, this.turnFrom(UU, XU), zU.ms) : null
      }
      turnFrom(UU, XU) {
        this.pending = {
          from: UU,
          ms: XU,
          turnMs: Math.max(50, Math.min(250, XU - this.lastFillMs))
        }, this.lastFillMs = XU
      }
      retry(UU) {
        const {
          pending: XU
        } = this;
        if (null === XU) return;
        if (UU - XU.ms > 1500) return void(this.pending = null);
        const zU = this.pickNext((0, Kz.e)(XU.from), (UU => (0, Kz.h)(UU, XU.from)));
        if (null === zU) return;
        this.pending = null;
        const {
          turning: cU
        } = this;
        if (null !== cU && UU < cU.endMs && (0, Kz.h)(cU.to, zU)) return;
        const yU = this.api.getActionRay().origin,
          QU = [zU[0] + .5 - yU[0], zU[1] + .5 - yU[1], zU[2] + .5 - yU[2]],
          AU = Math.hypot(QU[0], QU[2]);
        if (AU < .3) {
          const UU = Math.max(AU, .001);
          QU[0] = this.heading[0] * UU, QU[2] = this.heading[1] * UU
        }
        this.api.turnCamera(QU, XU.turnMs), this.turning = {
          to: zU,
          endMs: UU + XU.turnMs
        }
      }
    }
    class Qc {
      constructor(UU, XU, zU, cU) {
        this.api = UU, this.localPlayerId = XU, this.juice = zU, this.tracker = cU, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.lastFilled = null, this.lastSeenFilled = null, this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = void 0, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new xX(UU), this.meshes = new Uz(UU), this.outline = new hz(UU), this.nextCell = new zc(UU, XU, this.foreseen), this.turn = new yc(UU, XU, ((UU, XU) => this.nextCell.pickFrom(UU, XU)))
      }
      PY(UU) {
        const XU = "active" === UU[0] ? `${UU[1]}|${UU[3]}|${UU[4]}|${UU[5]}|${UU[6]}` : "";
        if ("active" !== UU[0]) "built" === UU[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , zU, cU, yU, QU] = UU;
          XU !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = zU) : zU === this.layerY ? this.burstUnlisted(cU) : zU > this.layerY && this.finishLayer(zU), this.layerY = zU, this.layerCells.has(zU) || this.layerCells.set(zU, cU.filter(Ac)), this.ghostCells = cU, this.palette = yU, this.occupiedCells = QU
        }
        XU !== this.blueprint && (this.tracker.show("active" === UU[0] && UU[2] ? {
          id: UU[1],
          y: UU[4]
        } : null), this.blueprint = XU, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((UU => this.api.blockNameToBlockId(UU))), this.chunkWatch.watch([...this.ghostCells.filter(Ac), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(UU) {
        this.burstUnlisted([]), UU > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = UU)
      }
      LY() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const UU = performance.now();
        let XU = !1;
        for (const [cU, yU] of this.foreseen) {
          var zU;
          if (UU - yU > 1e3) this.foreseen.delete(cU), XU = !0, (null === (zU = this.lastFilled) || void 0 === zU ? void 0 : zU.join()) === cU && (this.lastFilled = this.lastSeenFilled)
        }(XU || this.nextCell.playerMoved()) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(UU) {
        const XU = new Set;
        for (let yU = 0; yU < UU.length; yU += 4) XU.add(`${UU[yU]},${UU[yU+1]},${UU[yU+2]}`);
        const zU = [],
          {
            ghostCells: cU
          } = this;
        for (let yU = 0; yU < cU.length; yU += 4) {
          const UU = `${cU[yU]},${cU[yU+1]},${cU[yU+2]}`;
          !XU.has(UU) && this.open.delete(UU) && zU.push(this.filledCell(yU))
        }
        this.burst(zU)
      }
      refresh() {
        const {
          ghostCells: UU,
          palette: XU,
          occupiedCells: zU
        } = this, cU = new hX, yU = new Set, QU = [], AU = [];
        let FU = 0;
        for (let oU = 0; oU < UU.length; oU += 4) {
          const [zU, DU, EU, YU] = [UU[oU], UU[oU + 1], UU[oU + 2], UU[oU + 3]], NU = this.api.getBlockId(zU, DU, EU), IU = `${zU},${DU},${EU}`, pU = SX(this.blockIds[YU], NU);
          !pU && rX(NU) ? cU.add(zU, DU, EU, fX(XU[YU]), KX, mX(XU[YU])) : pU ? this.open.has(IU) && QU.push(this.filledCell(oU)) : cU.add(zU, DU, EU, TX, bX), pU || FU++, !pU && this.api.isBlockInLoadedChunk(zU, DU, EU) && (yU.add(IU), AU.push(zU, DU, EU, rX(NU) ? 0 : 1))
        }
        this.open = yU, this.nextCell.setCells(AU), this.tracker.update(this.layerY, this.topLayerY, FU);
        for (let oU = 0; oU < zU.length; oU += 3) {
          const [UU, XU, yU] = [zU[oU], zU[oU + 1], zU[oU + 2]];
          rX(this.api.getBlockId(UU, XU, yU)) || cU.add(UU, XU, yU, TX, bX)
        }
        this.meshes.show(cU.toArray()), this.burst(QU), this.showNext(), this.turn.retry(performance.now())
      }
      burst(UU) {
        const XU = performance.now(),
          zU = [];
        for (const [yU, QU, AU] of UU) {
          const UU = [yU, QU, AU];
          this.lastSeenFilled = UU, this.foreseen.delete(UU.join()) || zU.push(UU)
        }
        const cU = this.isHolding(XU);
        for (const yU of zU) {
          if (this.lastFilled = yU, cU && this.pressFilled) {
            this.turn.filled(yU, XU);
            continue
          }
          const UU = this.turn.arrived(yU, XU);
          if (null !== UU) {
            this.pressFilled = cU;
            for (const [XU, zU] of this.foreseen) zU <= UU && this.foreseen.delete(XU)
          }
        }
        this.juice.filled(UU)
      }
      showNext() {
        var UU;
        this.outline.show(null !== (UU = this.aimed) && void 0 !== UU ? UU : this.nextCell.DI(this.lastFilled))
      }
      afterRender(UU) {
        var XU;
        this.turn.look(UU);
        const zU = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === zU ? null : zU.position), this.outline.show(null !== (XU = this.aimed) && void 0 !== XU ? XU : this.nextCell.get())
      }
      isHolding(UU) {
        return null !== this.altMs && UU - this.altMs <= 500
      }
      attemptAltAction(UU) {
        const XU = performance.now();
        if (this.isHolding(XU) || (this.pressFilled = !1), this.altMs = XU, this.pressFilled) return "preventPlacement";
        const zU = this.findAimed(UU);
        if (null !== zU) return this.foreseen.set(zU.join(), XU), this.lastFilled = zU, this.aimed = null, this.showNext(), this.turn.filled(zU, XU), this.pressFilled = !0, "preventPlacement";
        {
          const zU = this.nextCell.get();
          null !== zU && this.turn.tapped(UU, zU, XU)
        }
      }
      holdPressOnEntity() {
        const UU = performance.now();
        this.pressFilled && this.isHolding(UU) && (this.altMs = UU)
      }
      findAimed(UU) {
        return function(UU, XU, zU, cU, yU, QU, AU) {
          const FU = UU.HzU(XU),
            oU = null === FU || null === UU.blockNameToBlockId(FU.name, !0) ? null : FU.name,
            DU = UU.getPositionView(XU),
            {
              origin: EU,
              direction: YU
            } = UU.getActionRay(),
            NU = Jz(cU, {
              from: EU,
              dir: YU,
              reach: Xc(UU, XU),
              solid: zU
            }, (XU => {
              const zU = [cU[XU], cU[XU + 1], cU[XU + 2]];
              return !SX(yU[cU[XU + 3]], UU.getBlockId(...zU)) && !AU.has(zU.join()) && UU.isBlockInLoadedChunk(...zU) && !Uc(zU, DU)
            }), (UU => null === oU || oU === uX(yU[cU[UU + 3]])), (UU => null !== QU && cU[UU] === QU[0] && cU[UU + 1] === QU[1] && cU[UU + 2] === QU[2]));
          return -1 === NU ? null : [cU[NU], cU[NU + 1], cU[NU + 2]]
        }(this.api, this.localPlayerId, UU, this.ghostCells, this.blockIds, this.nextCell.get(), this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(UU) {
        const {
          ghostCells: XU
        } = this, [zU, cU, yU] = fX(this.palette[XU[UU + 3]]);
        return [XU[UU], XU[UU + 1], XU[UU + 2], zU, cU, yU]
      }
    }

    function Ac(UU, XU) {
      return XU % 4 !== 3
    }
    class Fc {
      constructor(UU) {
        this.api = UU, this.sent = !1
      }
      LY() {
        this.sent || FU.e.get("loadingOverlayVisible") || (this.sent = !0, this.api.sendCommand("plotsentered"))
      }
    }
    var oc = zU(4608),
      Dc = zU(39988);

    function Ec(UU, XU, zU) {
      const cU = [255 * UU, 255 * XU, 255 * zU],
        [yU, QU, AU] = cU.map((UU => UU + .4 * (255 - UU)));
      return {
        texture: "square_particle",
        xY: 48,
        minLifeTime: .3 / Dc.d,
        maxLifeTime: .55 / Dc.d,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * Dc.d * Dc.d, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...cU, 1],
          maxColor: [yU, QU, AU, 1]
        }, {
          timeFraction: 1,
          minColor: [...cU, 0],
          maxColor: [yU, QU, AU, 0]
        }],
        blendMode: oc.f.Standard
      }
    }
    const Yc = {
      texture: "glint",
      mipmaps: !1,
      xY: 96,
      minLifeTime: .5 / Dc.d,
      maxLifeTime: .9 / Dc.d,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * Dc.d * Dc.d, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: oc.f.OneOne
    };
    class Nc {
      constructor(UU, XU) {
        this.api = UU, this.localPlayerId = XU, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(UU) {
        if (this.api.particlesEnabled())
          for (const [XU, zU, cU, yU, QU, AU] of UU.slice(0, 3)) {
            const UU = `${yU},${QU},${AU}`;
            let FU = this.chips.get(UU);
            void 0 === FU && (FU = this.api.createParticles(Ec(yU, QU, AU), {
              pos: [XU + .5, zU + .5, cU + .5]
            }), this.chips.set(UU, FU));
            for (let XU = 0; XU < 8; XU++) this.setPoint(XU, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            FU.emitPoints([XU + .5, zU + .5, cU + .5], this.points, 8)
          }
      }
      layerDone(UU) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const XU = UU.length / 3;
        if (0 === XU || !this.api.particlesEnabled()) return;
        const zU = Math.min(XU, 48),
          [cU, yU, QU] = [UU[0] + .5, UU[1] + 1, UU[2] + .5];
        let AU = 0;
        for (let FU = 0; FU < zU; FU++) {
          const oU = 3 * Math.floor(FU * XU / zU);
          for (let XU = 0; XU < 2; XU++) this.setPoint(AU++, UU[oU] + Math.random() - cU, UU[oU + 1] + 1 - yU, UU[oU + 2] + Math.random() - QU, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(Yc, {
          pos: [cU, yU, QU]
        }), this.sparkles.emitPoints([cU, yU, QU], this.points, AU)
      }
      dispose() {
        var UU;
        for (const XU of this.chips.values()) XU.stop();
        this.chips.clear(), null === (UU = this.sparkles) || void 0 === UU || UU.stop(), this.sparkles = null
      }
      setPoint(UU, XU, zU, cU, yU) {
        const QU = 4 * UU;
        this.points[QU] = XU, this.points[QU + 1] = zU, this.points[QU + 2] = cU, this.points[QU + 3] = yU
      }
    }
    const Ic = "SpecialAction1",
      pc = "KeyY",
      ac = "KeyX";

    function tc(UU) {
      let {
        placement: XU
      } = UU;
      const zU = (0, oU.j)(oz, XU.getView()),
        {
          t: cU
        } = (0, EU.I)(),
        {
          isTouchScreen: yU
        } = (0, FU.q)(["isTouchScreen"]),
        AU = (0, QU.useContext)(RU),
        YU = null !== zU,
        pU = YU && !zU.blocked && !zU.waiting;
      if ((0, GU.d)((UU => YU && !UU.repeat && !(0, BU.isTypingInInput)() && !(0, IU.p)() && !yU), (UU => {
          const zU = function(UU, XU, zU) {
            if (UU === ac) return XU.stop;
            if (UU === pc) return zU ? XU.build : kc;
            return DU.w[Ic].includes(UU) ? XU.rotate : null
          }(UU.code, XU, pU);
          null !== zU && (UU.stopPropagation(), zU())
        })), !YU) return null;
      let tU = yU ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return zU.blocked ? tU = "plotsGame:placementOffPlot" : zU.toClear > 0 ? tU = "plotsGame:placementClear" : "placeSpot" !== AU.hint && "placeBuild" !== AU.hint || (tU = null), (0, uU.jsx)(aU.e, {
        placement: "bottom",
        children: (0, uU.jsxs)("div", {
          ref: AU.placementCardRef,
          className: "PlotsPlacementCard",
          children: [(0, uU.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: cU(eU(zU.id).displayName.translationKey)
          }), null !== tU && (0, uU.jsx)("div", {
            className: NU()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: zU.refusals > 0
            }),
            children: cU(tU)
          }, zU.refusals), (0, uU.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, uU.jsxs)(dz.f, {
              onClick: XU.rotate,
              children: [(0, uU.jsx)(gc, {
                noaAction: Ic
              }), cU("plotsGame:placementRotate")]
            }), (0, uU.jsxs)(dz.G, {
              onClick: XU.stop,
              children: [(0, uU.jsx)(gc, {
                keyCode: ac
              }), cU("general:cancel")]
            }), (0, uU.jsx)("span", {
              ref: AU.buildRef,
              className: NU()("PlotsPlacementBuild", {
                Pulse: "placeBuild" === AU.hint && pU && yU
              }),
              children: (0, uU.jsxs)(dz.l, {
                disabled: !pU,
                onClick: XU.build,
                children: [(0, uU.jsx)(gc, {
                  keyCode: pc
                }), cU("plotsGame:placementBuild")]
              })
            })]
          })]
        })
      })
    }

    function gc(UU) {
      return (0, uU.jsx)(kU.c, {
        className: "PlotsPlacementKey",
        ...UU
      })
    }

    function kc() {}
    var Gc = zU(2500),
      Bc = zU(37418),
      Zc = zU(2047),
      Rc = zU(1274);
    const Pc = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function Wc(UU) {
      let {
        hud: XU
      } = UU;
      const zU = (0, oU.j)(XX, XU.getPlot()),
        [cU, yU] = (0, QU.useState)(null),
        AU = (0, Bc.j)(cU);
      if ("none" === zU[0]) return null;
      const [, FU, DU, EU, YU, IU] = zU;
      return (0, uU.jsx)("div", {
        className: NU()("PlotsPlotBannerContainer", {
          Below: AU
        }),
        children: (0, uU.jsx)(dc, {
          plotX: FU,
          plotZ: DU,
          ownerName: EU,
          ownerId: YU,
          relation: IU,
          plaqueRef: yU
        }, `${FU},${DU}`)
      })
    }

    function dc(UU) {
      var XU, zU;
      let {
        plotX: cU,
        plotZ: yU,
        ownerName: QU,
        ownerId: AU,
        relation: FU,
        plaqueRef: oU
      } = UU;
      const {
        t: DU
      } = (0, EU.I)(), YU = (0, Zc.i)("hiddenPlayerNames"), IU = (0, Zc.i)("players"), pU = null === AU ? null : null !== (XU = null === (zU = IU.byId[AU]) || void 0 === zU ? void 0 : zU.cosmetics) && void 0 !== XU ? XU : null, aU = DU("plotsGame:plotBannerCoords", {
        x: cU,
        z: yU
      }), gU = "own" === FU || null !== QU;
      return (0, uU.jsxs)("div", {
        ref: oU,
        className: NU()("PlotsPlotBanner", {
          Own: "own" === FU,
          Shared: "shared" === FU
        }),
        role: "status",
        children: [(0, uU.jsxs)("span", {
          className: NU()("PlotsPlotBannerSeal", {
            Face: null !== pU
          }),
          children: [null !== pU && (0, uU.jsx)(Gc.b, {
            cosmetics: pU
          }), null === pU && (0, uU.jsx)(tU.d, {
            name: Pc[FU]
          })]
        }), (0, uU.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, uU.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === FU && DU("plotsGame:plotBannerYours"), "own" !== FU && null !== QU && DU("plotsGame:plotBannerOwner", {
              name: (0, Rc.c)(QU, YU)
            }), !gU && aU]
          }), gU && (0, uU.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [aU, "shared" === FU && (0, uU.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: DU("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }
    const Lc = function(UU, XU, zU, cU) {
      let {
        localPlayerId: yU
      } = cU;
      const FU = new yX;
      let oU = null,
        DU = null,
        EU = null,
        YU = null,
        NU = null,
        IU = null;
      const pU = [];
      return {
        onCreate: UU => {
          oU = new Nc(UU, yU);
          const XU = new UX;
          DU = new Qc(UU, yU, oU, XU), EU = new Ez(UU, yU), YU = new rU(UU, EU), NU = new Wz(UU, yU, DU.nextCell), IU = new Fc(UU), pU.push((0, AU.u)((0, QU.createElement)(Zz, {
            hud: FU,
            guide: NU,
            tracker: XU,
            placement: EU
          }, (0, QU.createElement)(Wc, {
            hud: FU
          }), (0, QU.createElement)(iU, {
            journal: YU
          }), (0, QU.createElement)(tz, {
            placement: EU
          }), (0, QU.createElement)(tc, {
            placement: EU
          })), {
            content: (0, QU.createElement)(xz, {
              journal: YU,
              hud: FU,
              guide: NU
            })
          }))
        },
        LY: () => {
          IU.LY(), DU.LY(), EU.LY(), YU.LY()
        },
        onPlayerAttemptAltAction: (UU, XU, zU, cU, yU, QU) => {
          if (null !== QU) return void DU.holdPressOnEntity();
          const AU = void 0 === XU ? null : [XU, zU, cU];
          return DU.attemptAltAction(AU)
        },
        onPlayerClickUp: () => {
          DU.endPress()
        },
        onAfterRender: (UU, XU) => {
          EU.afterRender(XU), DU.afterRender(XU), NU.afterRender(XU)
        },
        onClose: () => {
          for (const UU of pU) UU();
          oU.dispose(), DU.dispose(), EU.dispose(), oU = null, DU = null, EU = null, YU = null, NU = null, IU = null
        },
        onReceivedMessageFromServer: (UU, XU) => {
          if ("plotsPlot" === UU) FU.receivePlot(XU);
          else if ("plotsBlueprint" === UU) {
            const UU = XU;
            DU.PY(UU), EU.PY(UU)
          } else "plotsJournal" === UU ? YU.PY(XU) : "plotsJournalOpen" === UU ? YU.openFromServer(XU) : "plotsPreviewEnd" === UU ? EU.endFromServer() : "plotsGuide" === UU ? FU.receiveGuide(XU) : "plotsGuideDone" === UU && FU.receiveGuideDone()
        }
      }
    }
  },
  39283: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => FU
    });
    var cU = zU(39278);
    const yU = 5,
      QU = [0, 0, 0],
      AU = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function FU(UU, XU, zU, FU, oU, DU) {
      let [EU, YU, NU] = FU;
      const IU = (EU + .5 - zU[0]) ** 2 + (YU - zU[1]) ** 2 + (NU + .5 - zU[2]) ** 2;
      let pU = null;
      IU <= DU ** 2 && (QU[0] = EU + .5, QU[1] = YU + oU, QU[2] = NU + .5, pU = XU.projectWorldPosToViewport(QU));
      const aU = null !== pU && pU.x > -yU && pU.x < 100 + yU && pU.y > -yU && pU.y < 100 + yU;
      return (0, cU.g)(UU, !aU), aU ? (AU.x = pU.x, AU.y = pU.y, AU.distSq = IU, AU) : null
    }
  },
  39988: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU,
      f: () => QU
    });
    const cU = 1 / .6,
      yU = {
        kind: "smokePuff"
      };
    class QU {
      constructor(UU, XU, zU) {
        this.style = UU, this.xY = XU, this.half = zU, this.particles = null, this.lastFrame = -1
      }
      emit(UU, XU, zU) {
        let QU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return zU !== this.lastFrame && (this.lastFrame = zU, this.particles || (this.particles = UU.createParticles(function(UU, XU) {
          const [
            [zU, QU, AU],
            [FU, oU, DU]
          ] = UU.colours;
          return {
            texture: UU.soft ? yU : "square_particle",
            xY: XU,
            minLifeTime: UU.life[0] / cU,
            maxLifeTime: UU.life[1] / cU,
            minEmitPower: UU.power[0] * cU,
            maxEmitPower: UU.power[1] * cU,
            minSize: UU.size[0],
            maxSize: UU.size[1],
            emitRate: 0,
            gravity: [0, UU.lift * cU * cU, 0],
            dir1: [-UU.spread, 1, -UU.spread],
            dir2: [UU.spread, 1, UU.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [zU, QU, AU, UU.alpha],
              maxColor: [FU, oU, DU, UU.alpha]
            }, {
              timeFraction: 1,
              minColor: [zU, QU, AU, 0],
              maxColor: [FU, oU, DU, 0]
            }],
            blendMode: UU.blendMode
          }
        }(this.style, this.xY), {
          pos: XU,
          half: this.half
        })), this.particles.moveTo(XU, this.half), this.particles.emit(QU), !0)
      }
      dispose() {
        var UU;
        null === (UU = this.particles) || void 0 === UU || UU.stop(), this.particles = null
      }
    }
  },
  40357: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU,
      e: () => FU,
      i: () => oU
    });
    const cU = new Map,
      yU = [];

    function QU() {
      for (const UU of yU) UU()
    }

    function AU(UU) {
      var XU;
      return cU.set(UU, (null !== (XU = cU.get(UU)) && void 0 !== XU ? XU : 0) + 1), QU(), () => {
        const XU = cU.get(UU) - 1;
        0 === XU ? cU.delete(UU) : cU.set(UU, XU), QU()
      }
    }

    function FU() {
      return [...cU.keys()]
    }

    function oU(UU) {
      yU.push(UU)
    }
  },
  39278: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU,
      g: () => QU
    });
    const cU = new WeakMap;

    function yU(UU) {
      let XU = cU.get(UU);
      return XU || (XU = {
        hidden: UU.hidden,
        x: NaN,
        y: NaN
      }, cU.set(UU, XU)), XU
    }

    function QU(UU, XU) {
      const zU = yU(UU);
      zU.hidden !== XU && (zU.hidden = XU, UU.hidden = XU)
    }

    function AU(UU, XU, zU) {
      const cU = yU(UU);
      cU.x === XU && cU.y === zU || (cU.x = XU, cU.y = zU, UU.style.translate = `${XU}vw ${zU}vh`)
    }
  },
  37624: (UU, XU, zU) => {
    function cU(UU, XU) {
      return null === UU || null === XU ? UU === XU : UU[0] === XU[0] && UU[1] === XU[1] && UU[2] === XU[2]
    }

    function yU(UU) {
      return [UU[0] + .5, UU[1] + .5, UU[2] + .5]
    }
    zU.d(XU, {
      e: () => yU,
      h: () => cU
    })
  },
  37662: (UU, XU, zU) => {
    function cU(UU) {
      return UU.includes("Leaf Bed")
    }

    function yU(UU) {
      return / Bed(?: Head)?(?:\||$)/.test(UU) && !cU(UU)
    }

    function QU(UU) {
      return UU.includes(" Strongbed")
    }

    function AU(UU) {
      return cU(UU) || yU(UU) || QU(UU)
    }
    zU.d(XU, {
      b: () => AU,
      c: () => cU,
      g: () => QU,
      j: () => yU
    })
  },
  37659: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => DU
    });
    var cU = zU(37662),
      yU = zU(9782);
    const QU = [],
      AU = [],
      FU = [],
      oU = [];
    for (const EU of Object.keys(yU.l))(0, cU.c)(EU) ? QU.push(EU) : (0, cU.j)(EU) && AU.push(EU), (0, cU.g)(EU) && FU.push(EU), (EU.includes(" Bed Head") || EU.includes(" Strongbed Head")) && oU.push(EU);
    const DU = {
      leafBeds: QU,
      woolBeds: AU,
      strongBeds: FU,
      beds: [...QU, ...AU, ...FU],
      bedHeads: oU,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  39348: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYUlEQVR4nGNgIBP8R8NYwX+GDVNRMQOm4v8MC9qxYwZUxf//b+T4//8A+///51khGMTeyIGp8Nz0gv8MDoFgGsbeUB2BXeHESHcUjFNhR4Dj/zp3OzAGsbEphHgIOyYNAACzzGY5JF2GbAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);