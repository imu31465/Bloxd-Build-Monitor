export const id = 23;
export const ids = [23];
export const modules = {
  36891: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => IQ,
      g: () => jQ,
      k: () => rQ,
      o: () => JQ
    });
    var wQ = XQ(34500),
      qQ = XQ(36900),
      TQ = XQ(36906),
      zQ = XQ(9099),
      sQ = XQ(1498),
      FQ = XQ(61),
      PQ = XQ(78),
      gQ = XQ(1145);

    function JQ() {
      var QQ;
      return (0, sQ.j)(qQ.c, (0, qQ.s)()), (0, gQ.jsx)(gQ.Fragment, {
        children: null === (QQ = (0, qQ.s)()) || void 0 === QQ ? void 0 : QQ.content
      })
    }

    function rQ(QQ) {
      var WQ;
      let {
        show: XQ
      } = QQ;
      (0, sQ.j)(qQ.c, (0, qQ.s)());
      const PQ = null === (WQ = (0, qQ.s)()) || void 0 === WQ ? void 0 : WQ.menu;
      return (0, FQ.useEffect)((() => {
        var QQ;
        XQ || (null === PQ || void 0 === PQ || null === (QQ = PQ.onClose) || void 0 === QQ || QQ.call(PQ), (0, TQ.r)())
      }), [XQ, PQ]), (0, FQ.useEffect)((() => XQ ? (0, zQ.e)(TQ.y, TQ.f) : void 0), [XQ]), (0, gQ.jsx)(wQ.c, {
        showing: XQ,
        globallyUniqueKey: "clientGameMenu",
        children: null === PQ || void 0 === PQ ? void 0 : PQ.content
      })
    }

    function IQ(QQ) {
      let {
        placement: WQ = "bottom"
      } = QQ;
      return (0, gQ.jsx)("div", {
        id: `clientGameHud-${WQ}`,
        style: {
          display: "contents"
        }
      })
    }

    function jQ(QQ) {
      let {
        children: WQ,
        placement: XQ = "bottom"
      } = QQ;
      const [wQ, qQ] = (0, FQ.useState)(null);
      return (0, FQ.useEffect)((() => {
        qQ(document.getElementById(`clientGameHud-${XQ}`))
      }), [XQ]), wQ ? (0, PQ.createPortal)(WQ, wQ) : null
    }
  },
  34500: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => TQ
    });
    var wQ = XQ(4859),
      qQ = XQ(4863);

    function TQ(QQ) {
      let {
        children: WQ,
        showing: XQ,
        globallyUniqueKey: TQ,
        alwaysMountChildren: zQ = !1,
        doGameplayStartStopOnShow: sQ = !0,
        keepsMovement: FQ = !1
      } = QQ;
      return (0, qQ.c)(!0, XQ, TQ, FQ), (0, wQ.c)(sQ, XQ), XQ || zQ ? WQ : null
    }
  },
  36987: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => TQ,
      h: () => zQ,
      i: () => sQ,
      k: () => FQ
    });
    var wQ = XQ(61),
      qQ = XQ(3379);
    const TQ = 8,
      zQ = "InGameHeaderContainer",
      sQ = "TopRightElements";

    function FQ(QQ) {
      const [WQ] = (0, qQ.d)(), [XQ, FQ] = (0, wQ.useState)(!1);
      return (0, wQ.useLayoutEffect)((() => {
        if (!QQ) return;
        const WQ = document.querySelector(`.${zQ}`),
          XQ = document.querySelector(`.${sQ}`),
          wQ = () => {
            const wQ = QQ.getBoundingClientRect(),
              qQ = WQ ? WQ.getBoundingClientRect().right : 0,
              zQ = XQ ? XQ.getBoundingClientRect().left : window.innerWidth,
              sQ = wQ.left < qQ + TQ,
              PQ = wQ.right > zQ - TQ;
            FQ(sQ || PQ)
          };
        wQ();
        const qQ = new ResizeObserver(wQ);
        return qQ.observe(QQ), WQ && qQ.observe(WQ), XQ && qQ.observe(XQ), () => {
          qQ.disconnect()
        }
      }), [QQ, WQ]), XQ
    }
  },
  9099: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ,
      e: () => qQ
    });
    let wQ = null;
    const qQ = function(QQ) {
        const WQ = {
          cycle: QQ,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return wQ = WQ, () => {
          wQ === WQ && (wQ = null)
        }
      },
      TQ = () => {
        var QQ;
        return null !== (QQ = wQ) && void 0 !== QQ && QQ.canCycle() ? wQ.cycle : null
      }
  },
  38801: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => zQ,
      f: () => sQ,
      i: () => FQ
    });
    const wQ = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      qQ = [0, 1, 2, 0, 2, 3],
      TQ = [4, 5];

    function zQ(QQ, WQ, XQ, wQ, qQ) {
      for (let zQ = 0; zQ < 6; zQ++) TQ.includes(zQ) === qQ && PQ(QQ, WQ, XQ, wQ, zQ)
    }

    function sQ(QQ, WQ, XQ, wQ) {
      for (let qQ = 0; qQ < 6; qQ++) PQ(QQ, WQ, XQ, wQ, qQ)
    }

    function FQ(QQ, WQ, XQ, TQ, zQ) {
      for (let sQ = 0; sQ < 6; sQ++)
        for (const FQ of [0, 1]) {
          const [PQ, gQ, JQ] = [FQ + 2, FQ + 1, (FQ + 3) % 4], rQ = QQ.length / 3;
          for (const [WQ, qQ] of [
              [FQ, gQ],
              [PQ, gQ],
              [PQ, JQ],
              [FQ, JQ]
            ])
            for (let FQ = 0; FQ < 3; FQ++) {
              const PQ = wQ[3 * (4 * sQ + WQ) + FQ],
                gQ = wQ[3 * (4 * sQ + qQ) + FQ];
              QQ.push((PQ + (gQ - PQ) * zQ) * TQ / 2 + XQ[FQ])
            }
          for (const QQ of qQ) WQ.push(rQ + QQ)
        }
    }

    function PQ(QQ, WQ, XQ, TQ, zQ) {
      let [sQ, FQ, PQ] = XQ, [gQ, JQ, rQ] = TQ;
      const IQ = QQ.length / 3;
      for (let qQ = 4 * zQ; qQ < 4 * zQ + 4; qQ++) QQ.push(wQ[3 * qQ] * gQ / 2 + sQ, wQ[3 * qQ + 1] * JQ / 2 + FQ, wQ[3 * qQ + 2] * rQ / 2 + PQ);
      for (const wQ of qQ) WQ.push(IQ + wQ)
    }
  },
  39738: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      default: () => Hw
    });
    const wQ = [0, 90, 180, 270],
      qQ = "plotsblueprint";
    var TQ = XQ(61),
      zQ = XQ(36900),
      sQ = XQ(26),
      FQ = XQ(1498),
      PQ = XQ(2061),
      gQ = XQ(1226),
      JQ = XQ(1081),
      rQ = XQ.n(JQ),
      IQ = XQ(1698),
      jQ = XQ(36891),
      BQ = XQ(1094),
      yQ = XQ(1988),
      VQ = XQ(2058),
      DQ = XQ(3681),
      pQ = XQ(1802);

    function GQ() {}
    const UQ = (0, TQ.createContext)({
      hint: null,
      journalRef: GQ,
      placementCardRef: GQ,
      buildRef: GQ
    });
    var bQ = XQ(31);
    const vQ = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      dQ = {
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
      HQ = ["small", "medium", "large"].flatMap((QQ => vQ.flat().filter((WQ => dQ[WQ].tier === QQ))));

    function aQ(QQ) {
      return dQ[QQ]
    }
    const lQ = new Map(vQ.flatMap((QQ => QQ.slice(1).map(((WQ, XQ) => [WQ, QQ[XQ]])))));

    function hQ(QQ) {
      var WQ;
      return null !== (WQ = lQ.get(QQ)) && void 0 !== WQ ? WQ : null
    }
    const iQ = {
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

    function cQ(QQ, WQ) {
      const XQ = new Set(QQ),
        wQ = function(QQ) {
          const WQ = new Set(QQ);
          return new Set(HQ.filter((QQ => {
            const XQ = hQ(QQ);
            return null === XQ || WQ.has(XQ)
          })))
        }(XQ);
      return HQ.map((QQ => {
        const qQ = QQ === WQ;
        if (XQ.has(QQ)) return {
          id: QQ,
          active: qQ,
          note: null,
          state: "completed",
          unlockedBy: null
        };
        const TQ = iQ[QQ],
          zQ = void 0 === TQ || TQ.firstBuild && XQ.size > 0 ? null : TQ.key;
        return wQ.has(QQ) ? {
          id: QQ,
          active: qQ,
          note: zQ,
          state: "open",
          unlockedBy: null
        } : {
          id: QQ,
          active: qQ,
          note: zQ,
          state: "locked",
          unlockedBy: hQ(QQ)
        }
      }))
    }
    const AQ = "plotsJournalChanged";
    class RQ {
      constructor(QQ, WQ) {
        this.api = QQ, this.placement = WQ, this.pages = null, this.openRequested = null, this.openedOffered = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.nI(this.openedOffered ? "journal_offered" : "journal_opened"), this.openedOffered = !1
        }, this.build = QQ => {
          this.placement.start(QQ), (0, zQ.j)()
        }, this.putAway = () => {
          this.api.sendCommand(`${qQ} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      gj(QQ) {
        let [, WQ, XQ] = QQ;
        this.pages = cQ(WQ, XQ), bQ.k.mB(AQ, this.pages, !0)
      }
      openFromServer(QQ) {
        let [, WQ] = QQ;
        this.openRequested = WQ, this.fJ()
      }
      fJ() {
        const QQ = this.openRequested;
        null === QQ || sQ.b.get("loadingOverlayVisible") || (this.openRequested = null, null === this.pages || (0, IQ.r)() || (0, pQ.isTypingInInput)() || null !== this.placement.getView() || (this.openedOffered = QQ, (0, zQ.u)()))
      }
      nI(QQ) {
        this.reported.has(QQ) || (this.reported.add(QQ), this.api.sendCommand(`${qQ} report ${QQ}`))
      }
    }
    var EQ = XQ(1145);
    const CQ = "KeyJ";

    function uQ(QQ) {
      let {
        journal: WQ
      } = QQ;
      const XQ = (0, FQ.j)(AQ, WQ.getPages()),
        {
          isTouchScreen: wQ
        } = (0, sQ.n)(["isTouchScreen"]),
        {
          t: qQ
        } = (0, gQ.C)(),
        PQ = (0, TQ.useContext)(UQ);
      return (0, DQ.c)((QQ => null !== XQ && QQ.code === CQ && !QQ.repeat && !(0, pQ.isTypingInInput)()), (QQ => {
        (0, IQ.C)(QQ, !0, zQ.u)
      })), null === XQ ? null : (0, EQ.jsx)(jQ.g, {
        placement: "topRight",
        children: (0, EQ.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, EQ.jsxs)("button", {
            ref: PQ.journalRef,
            type: "button",
            className: rQ()("PlotsJournalButton SmallTextBold", {
              Touch: wQ
            }),
            onClick: zQ.u,
            children: [(0, EQ.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, EQ.jsx)(yQ.d, {
                itemName: "Book",
                amount: 0
              })
            }), qQ("plotsGame:journalButton"), !wQ && (0, EQ.jsx)(VQ.b, {
              className: "PlotsJournalButtonKey",
              keyCode: CQ
            }), "openJournal" === PQ.hint && (0, EQ.jsx)(BQ.d, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon HandLeftAnim PlotsJournalButtonHand"
            })]
          })
        })
      })
    }
    var LQ = XQ(9580);
    const kQ = [0, 90, 180, 270],
      fQ = /^(meta\|rot\d)\|([lrud]+)$/,
      SQ = "nesw",
      tQ = /^meta\|([nesw]*)\|?(Stacked)?$/,
      oQ = function(QQ) {
        const WQ = new WeakMap;
        return (XQ, wQ) => {
          let qQ = WQ.get(XQ);
          return void 0 === qQ && (qQ = QQ(XQ, wQ), WQ.set(XQ, qQ)), qQ
        }
      }((QQ => new eQ(QQ)));
    class eQ {
      constructor(QQ) {
        this.blockMetadata = QQ, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const WQ = new Set(Object.keys(QQ).map((WQ => QQ[WQ].id)));
        WQ.add(0), this.maxBlockId = Math.max(...WQ)
      }
      static
      for (QQ) {
        return oQ(QQ)
      }
      getBlockIdMapping(QQ, WQ) {
        const XQ = this.getBlockIdMappingKey(QQ, WQ);
        let wQ = this.blockIdMappings.get(XQ);
        return void 0 === wQ && kQ.includes(QQ) && (wQ = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, QQ, WQ), this.blockIdMappings.set(XQ, wQ)), wQ
      }
      turnBlockId(QQ, WQ, XQ) {
        return this.mapBlockId(this.blockMetadata[QQ], WQ, this.getRotationMapping(WQ, XQ), XQ)
      }
      getBlockIdMappingKey(QQ, WQ) {
        return `r${QQ}|m${Number(WQ)}`
      }
      createBlockIdMapping(QQ, WQ, XQ, wQ) {
        const qQ = new Uint16Array(WQ + 1),
          TQ = this.getRotationMapping(XQ, wQ);
        for (const zQ in QQ) {
          const WQ = QQ[zQ];
          qQ[WQ.id] = this.mapBlockId(WQ, XQ, TQ, wQ)
        }
        return qQ
      }
      getRotationMapping(QQ, WQ) {
        const XQ = Math.round(QQ / 90),
          wQ = new Uint8Array(4);
        for (let qQ = 0; qQ < 4; qQ++) wQ[qQ] = (4 + qQ - XQ) % 4;
        if (WQ) {
          let QQ = wQ[0];
          wQ[0] = wQ[1], wQ[1] = QQ, QQ = wQ[2], wQ[2] = wQ[3], wQ[3] = QQ
        }
        return wQ
      }
      mapBlockId(QQ, WQ, XQ, wQ) {
        var qQ;
        const {
          blockMetadata: TQ
        } = this, zQ = Math.round(WQ / 90), {
          id: sQ,
          meta: FQ
        } = QQ, {
          rot: PQ,
          rootName: gQ,
          metaStr: JQ
        } = FQ;
        let rQ;
        const [, IQ, jQ] = null !== (qQ = tQ.exec(JQ)) && void 0 !== qQ ? qQ : [];
        if (void 0 !== IQ) {
          var BQ, yQ;
          rQ = null !== (BQ = null === (yQ = TQ[`${gQ}|meta|${[SQ.split("").filter(((QQ,WQ)=>IQ.split("").some((QQ=>{const XQ=SQ.indexOf(QQ);return((wQ?3-XQ:XQ)+zQ)%4===WQ})))).join(""),jQ].filter(Boolean).join("|")}`]) || void 0 === yQ ? void 0 : yQ.id) && void 0 !== BQ ? BQ : sQ
        } else if (null === PQ) rQ = sQ;
        else {
          var VQ, DQ;
          const QQ = XQ[PQ - 1] + 1;
          let WQ = JQ.replace(`rot${PQ}`, `rot${QQ}`);
          wQ && FQ.stairsCorner && (WQ = WQ.replace(/(Left|Right)$/, (QQ => "Left" === QQ ? "Right" : "Left"))), wQ && "Chest" === gQ && (WQ = WQ.replace(/\|(left|right)$/, ((QQ, WQ) => "left" === WQ ? "|right" : "|left")));
          const qQ = fQ.exec(WQ);
          if (wQ && null !== qQ) {
            const QQ = "lrud".split("").filter((QQ => qQ[2].includes("l" === QQ ? "r" : "r" === QQ ? "l" : QQ)));
            WQ = `${qQ[1]}|${QQ.join("")}`
          }
          const zQ = `${gQ}|${WQ}`;
          if (rQ = null !== (VQ = null === (DQ = TQ[zQ]) || void 0 === DQ ? void 0 : DQ.id) && void 0 !== VQ ? VQ : null, null === rQ) {
            const QQ = TQ[gQ];
            rQ = QQ.rootMetaDesc === zQ ? QQ.id : sQ
          }
        }
        return rQ
      }
    }

    function nQ(QQ, WQ, XQ) {
      let {
        xRotationMappedOrigin: wQ,
        shouldSwapXZ: qQ
      } = XQ;
      const TQ = qQ ? WQ : QQ;
      return null === wQ ? TQ : wQ - TQ
    }

    function xQ(QQ, WQ, XQ) {
      let {
        zRotationMappedOrigin: wQ,
        shouldSwapXZ: qQ
      } = XQ;
      const TQ = qQ ? QQ : WQ;
      return null === wQ ? TQ : wQ - TQ
    }
    const YQ = {
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
      NQ = new Map;

    function ZQ(QQ, WQ) {
      const XQ = `${QQ}|${WQ}`;
      let wQ = NQ.get(XQ);
      if (void 0 === wQ) {
        const {
          size: qQ,
          palette: TQ,
          layers: zQ
        } = YQ[QQ], sQ = 90 === WQ || 270 === WQ, [FQ, PQ] = sQ ? [qQ[2], qQ[0]] : [qQ[0], qQ[2]], gQ = function(QQ, WQ, XQ) {
          let wQ = null,
            qQ = null,
            TQ = !1;
          switch (QQ) {
            case 0:
              break;
            case 90:
              wQ = WQ - 1, TQ = !0;
              break;
            case 180:
              wQ = WQ - 1, qQ = XQ - 1;
              break;
            case 270:
              qQ = XQ - 1, TQ = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${QQ}`)
          }
          return {
            xRotationMappedOrigin: wQ,
            zRotationMappedOrigin: qQ,
            shouldSwapXZ: TQ
          }
        }(WQ, FQ, PQ), JQ = eQ.for(LQ.h), rQ = TQ.map((QQ => (0, LQ.f)(JQ.turnBlockId((0, LQ.k)(QQ), WQ, !1)))), IQ = [];
        zQ.forEach(((QQ, WQ) => {
          QQ.split(" ").forEach(((QQ, XQ) => {
            for (let wQ = 0; wQ < QQ.length; wQ++)
              if ("." !== QQ[wQ]) {
                const qQ = [nQ(wQ, XQ, gQ), WQ, xQ(wQ, XQ, gQ)];
                IQ.push({
                  offset: qQ,
                  block: rQ[QQ.charCodeAt(wQ) - "a".charCodeAt(0)]
                })
              }
          }))
        })), wQ = {
          size: [FQ, qQ[1], PQ],
          cells: IQ
        }, NQ.set(XQ, wQ)
      }
      return wQ
    }
    const OQ = "plotsBuildProgressChanged",
      KQ = new Map;

    function mQ(QQ, WQ, XQ) {
      let wQ = 0,
        qQ = 0;
      return function(QQ) {
        let WQ = KQ.get(QQ);
        if (void 0 === WQ) {
          const wQ = [];
          for (const {
              offset: WQ
            }
            of ZQ(QQ, 0).cells) {
            var XQ;
            wQ[WQ[1]] = (null !== (XQ = wQ[WQ[1]]) && void 0 !== XQ ? XQ : 0) + 1
          }
          WQ = wQ, KQ.set(QQ, WQ)
        }
        return WQ
      }(QQ).forEach(((QQ, XQ) => {
        wQ += QQ, XQ > WQ && (qQ += QQ)
      })), {
        id: QQ,
        filled: wQ - qQ - XQ,
        total: wQ
      }
    }
    class MQ {
      constructor() {
        this.shown = null, this.topOpen = 0, this.progress = null
      }
      get() {
        return this.progress
      }
      show(QQ) {
        this.shown = QQ, this.topOpen = 0, null === QQ && this.mB(null)
      }
      update(QQ, WQ, XQ) {
        const wQ = this.shown;
        null !== wQ && (QQ >= WQ && (this.topOpen = XQ), this.mB(mQ(wQ.id, WQ - wQ.y, QQ >= WQ ? XQ : this.topOpen + XQ)))
      }
      mB(QQ) {
        const WQ = this.progress;
        (null === QQ || void 0 === QQ ? void 0 : QQ.id) === (null === WQ || void 0 === WQ ? void 0 : WQ.id) && (null === QQ || void 0 === QQ ? void 0 : QQ.filled) === (null === WQ || void 0 === WQ ? void 0 : WQ.filled) && (null === QQ || void 0 === QQ ? void 0 : QQ.total) === (null === WQ || void 0 === WQ ? void 0 : WQ.total) || (this.progress = QQ, bQ.k.mB(OQ, QQ, !0))
      }
    }
    const QW = "plotsPlotChanged",
      WW = "plotsGuideChanged",
      XW = "plotsGuideDone";
    class wW {
      constructor() {
        this.plot = ["none"], this.guide = ["none"]
      }
      getPlot() {
        return this.plot
      }
      receivePlot(QQ) {
        this.plot = QQ, bQ.k.mB(QW, QQ, !0)
      }
      getGuide() {
        return this.guide
      }
      receiveGuide(QQ) {
        this.guide = QQ, bQ.k.mB(WW, QQ, !0)
      }
      receiveGuideDone() {
        bQ.k.mB(XW, void 0, !0)
      }
    }
    var qW = XQ(1318),
      TW = XQ(38821),
      zW = XQ(37169),
      sW = XQ(1527);

    function FW(QQ) {
      let {
        onSkip: WQ,
        className: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, gQ.C)();
      return (0, EQ.jsx)("button", {
        type: "button",
        className: rQ()("PlotsGuideSkipButton", XQ),
        ...(0, sW.g)(WQ, "pointerup"),
        children: wQ("tutorial:skip")
      })
    }

    function PW(QQ) {
      let {
        target: WQ,
        placement: XQ,
        spotlight: wQ = null,
        children: qQ
      } = QQ;
      const {
        t: zQ
      } = (0, gQ.C)(), sQ = (0, TQ.useRef)(WQ);
      return sQ.current = WQ, (0, qW.k)("popup", sQ, null === wQ ? null : wQ.onSkip, null !== wQ, null, "controller:menusSkipTutorial"), (0, EQ.jsxs)(zW.g, {
        target: WQ,
        placement: XQ,
        className: rQ()("PlotsGuideBubble", {
          Passive: null === wQ
        }),
        spotlight: null !== wQ,
        spotlightMargin: 30,
        children: [(0, EQ.jsxs)("div", {
          className: "PlotsGuideBubbleHeader",
          children: [(0, EQ.jsx)("img", {
            className: "PlotsGuideBubblePortrait",
            src: TW,
            alt: "",
            draggable: !1
          }), (0, EQ.jsx)("span", {
            className: "PlotsGuideBubbleSpeaker",
            children: zQ("plotsGame:maverickName")
          }), null !== wQ && (0, EQ.jsx)(FW, {
            onSkip: wQ.onSkip
          })]
        }), (0, EQ.jsx)("p", {
          className: "PlotsGuideBubbleText",
          children: qQ
        })]
      })
    }

    function gW(QQ) {
      let {
        className: WQ,
        icon: XQ,
        title: wQ,
        children: qQ
      } = QQ;
      return (0, EQ.jsxs)("div", {
        className: rQ()("PlotsCard", WQ),
        role: "status",
        children: [(0, EQ.jsx)("span", {
          className: "PlotsCardIcon",
          children: (0, EQ.jsx)(BQ.d, {
            name: XQ
          })
        }), (0, EQ.jsxs)("div", {
          className: "PlotsCardBody",
          children: [(0, EQ.jsx)("div", {
            className: "PlotsCardTitle SmallTextBold",
            children: wQ
          }), qQ]
        })]
      })
    }

    function JW(QQ) {
      let {
        progress: WQ,
        goal: XQ
      } = QQ;
      const wQ = Math.min(WQ, XQ);
      return (0, EQ.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, EQ.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": XQ,
          "aria-valuenow": wQ,
          children: (0, EQ.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${wQ/XQ})`
            }
          })
        }), (0, EQ.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [wQ, "/", XQ]
        })]
      })
    }

    function rW(QQ) {
      let {
        progress: WQ,
        guide: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, gQ.C)(), {
        isTouchScreen: qQ
      } = (0, sQ.n)(["isTouchScreen"]), TQ = WQ.filled < 5;
      return (0, EQ.jsxs)(EQ.Fragment, {
        children: [(TQ || WQ.total - WQ.filled <= 5) && (0, EQ.jsx)("div", {
          className: "PlotsGuideHandLayer",
          children: (0, EQ.jsx)("div", {
            ref: XQ.bindHand,
            className: "PlotsGuideHand",
            children: (0, EQ.jsx)(BQ.d, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon"
            })
          })
        }), (0, EQ.jsx)(jQ.g, {
          placement: "bottom",
          children: (0, EQ.jsxs)(gW, {
            icon: "hammer",
            title: wQ(aQ(WQ.id).displayName.translationKey),
            children: [TQ && (0, EQ.jsx)("div", {
              className: "PlotsCardHint SmallTextLight",
              children: qQ ? wQ("plotsGame:guideBuildTouch") : IW(wQ)
            }), (0, EQ.jsx)(JW, {
              progress: WQ.filled,
              goal: WQ.total
            })]
          })
        })]
      })
    }

    function IW(QQ) {
      const WQ = PQ.s["alt-fire"][0];
      return "Mouse3" === WQ ? QQ("plotsGame:guideBuildRightClick") : QQ("plotsGame:guideBuildKeys", {
        key: (0, PQ.n)(WQ)
      })
    }

    function jW() {
      return (0, EQ.jsx)("div", {
        className: "PlotsGuideDragHand",
        children: (0, EQ.jsx)(BQ.d, {
          name: "hand-back-point-up",
          className: "SmallTextBold TouchTutorialIcon"
        })
      })
    }
    var BW = XQ(1335),
      yW = XQ(2737),
      VW = XQ(38698),
      DW = XQ(38473),
      pW = XQ(37212),
      GW = XQ(9616),
      UW = XQ(9637),
      bW = XQ(402),
      vW = XQ(38084);
    const dW = new Map([
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
      HW = [...pW.e.blockRemoveActionRoots, ...DW.d, ...GW.f, "Board", "Code Block", "Custom Lobby Block"],
      aW = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let lW = null;

    function hW() {
      return lW ??= function() {
        const QQ = iW(),
          WQ = Math.max(...QQ.map((QQ => LQ.h[QQ].id))) + 1,
          XQ = new Int32Array(WQ),
          wQ = new Int32Array(WQ),
          qQ = new Uint8Array(WQ).fill(1),
          TQ = new Uint8Array(WQ),
          zQ = new Uint8Array(WQ),
          sQ = new Array(WQ).fill("Air"),
          FQ = new Map,
          PQ = QQ => {
            let WQ = FQ.get(QQ);
            return void 0 === WQ && (WQ = FQ.size + 1, FQ.set(QQ, WQ)), WQ
          },
          gQ = new Set(HW);
        for (const rQ of QQ) {
          var JQ;
          const {
            id: QQ,
            meta: WQ,
            altActionable: FQ,
            canBePlacedOver: IQ
          } = LQ.h[rQ];
          XQ[QQ] = PQ(cW(rQ));
          const jQ = WQ.stairsCorner;
          if (null === jQ) wQ[QQ] = XQ[QQ];
          else {
            const XQ = jQ.endsWith("Right");
            wQ[QQ] = PQ(`${WQ.rootName}|rot${XQ?WQ.rot%4+1:WQ.rot}|${WQ.halfblockPlacement}|${jQ.replace("Right","Left")}`)
          }
          qQ[QQ] = IQ ? 1 : 0, TQ[QQ] = FQ || null !== WQ.open || rQ in vW.d || gQ.has(WQ.rootName) || void 0 !== (0, DW.h)(WQ.rootName) ? 1 : 0;
          const {
            rootName: BQ
          } = WQ;
          zQ[QQ] = null !== WQ.open || DW.d.includes(BQ) || BQ.includes("Bookshelf") || BQ.includes("Mailbox") ? 1 : 0, sQ[QQ] = null !== (JQ = (0, VW.d)(QQ)) && void 0 !== JQ ? JQ : BQ
        }
        return {
          kinds: XQ,
          shapes: wQ,
          empty: qQ,
          inUse: TQ,
          ownAltActionMessage: zQ,
          placingItems: sQ
        }
      }(), lW
    }

    function iW() {
      return Object.keys(LQ.h).filter((QQ => LQ.h[QQ].name === QQ))
    }

    function cW(QQ) {
      var WQ;
      const XQ = LQ.h[QQ],
        {
          rootName: wQ,
          rot: qQ
        } = XQ.meta,
        [, ...TQ] = (null !== (WQ = XQ.rootMetaDesc) && void 0 !== WQ ? WQ : QQ).split("|"),
        zQ = TQ.filter((QQ => !("meta" === QQ || aW.test(QQ) || (0, UW.G)(XQ) && /^[nesw]+$/.test(QQ) || GW.f.includes(wQ) && /^[lrud]+$/.test(QQ) || bW.J.includes(wQ) && /^(left|right)$/.test(QQ))));
      return [wQ, ...zQ].map((QQ => "fenceGate" === XQ.model && QQ === `rot${qQ}` ? "rot" + ((qQ - 1) % 2 + 1) : QQ)).join("|")
    }

    function AW(QQ, WQ) {
      const {
        kinds: XQ,
        shapes: wQ
      } = hW();
      return XQ[QQ] === XQ[WQ] || wQ[QQ] === wQ[WQ]
    }

    function RW(QQ) {
      return 1 === hW().empty[QQ]
    }

    function EW(QQ) {
      return hW().placingItems[QQ]
    }

    function CW(QQ) {
      return dW.get(LQ.h[QQ].meta.rootName)
    }
    var uW = XQ(9613),
      LW = XQ(9634);
    const kW = [0, 0, 0, 1, 1, 1],
      fW = (0, uW.c)([
        [2, 0, 2, 6, 6, 6]
      ]),
      SW = (0, uW.c)([
        [3, 0, 3, 5, 5, 5]
      ]),
      tW = (0, uW.c)([
        [3, 3, 3, 5, 8, 5]
      ]),
      oW = [0, 1, 2, 3].map((QQ => (0, uW.c)((0, uW.h)([
        [3, 2, 0, 5, 7, 3]
      ], QQ))));

    function eW(QQ) {
      const {
        Xy: WQ,
        model: XQ,
        blockModel: wQ,
        meta: qQ
      } = LQ.h[QQ];
      return void 0 !== WQ ? WQ : "CentreCross" === XQ ? fW : null !== wQ && void 0 !== wQ && wQ.startsWith("torch") ? qQ.halfblockPlacement === LW.b.side ? oW[qQ.rot - 1] : qQ.halfblockPlacement === LW.b.top ? tW : SW : kW
    }
    var nW = XQ(231);
    class xW {
      constructor(QQ) {
        this.api = QQ, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(QQ) {
        const WQ = nW.h.Ij;
        this.chunks = [];
        for (let XQ = 0; XQ < QQ.length; XQ += 3) {
          const wQ = Math.floor(QQ[XQ] / WQ),
            qQ = Math.floor(QQ[XQ + 1] / WQ),
            TQ = Math.floor(QQ[XQ + 2] / WQ);
          this.watches(wQ, qQ, TQ) || this.chunks.push(wQ, qQ, TQ)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const QQ = performance.now();
        if (QQ - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = QQ;
        let WQ = !1;
        for (let XQ = 0; XQ < this.chunks.length; XQ += 3) {
          const QQ = this.api.getChunkVersion(this.chunks[XQ], this.chunks[XQ + 1], this.chunks[XQ + 2]);
          this.versions[XQ / 3] !== QQ && (this.versions[XQ / 3] = QQ, WQ = !0)
        }
        return WQ
      }
      watches(QQ, WQ, XQ) {
        for (let wQ = 0; wQ < this.chunks.length; wQ += 3)
          if (this.chunks[wQ] === QQ && this.chunks[wQ + 1] === WQ && this.chunks[wQ + 2] === XQ) return !0;
        return !1
      }
    }
    var YW = XQ(38801);
    const NW = .35,
      ZW = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      OW = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      KW = [.95, .2, .15];
    class mW {
      constructor() {
        this.groups = []
      }
      add(QQ, WQ, XQ, wQ, qQ) {
        let TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : kW;
        for (const zQ of this.groups)
          if (WX(zQ, wQ, qQ)) return zQ.cells.push(QQ, WQ, XQ), void zQ.boxes.push(TQ);
        this.groups.push({
          rgb: wQ,
          look: qQ,
          cells: [QQ, WQ, XQ],
          boxes: [TQ]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class MW {
      constructor(QQ) {
        this.api = QQ, this.shown = []
      }
      show(QQ) {
        const WQ = [];
        for (const XQ of QQ) {
          const QQ = this.shown.findIndex((QQ => {
            let {
              group: WQ
            } = QQ;
            return WX(WQ, XQ.rgb, XQ.look) && XX(WQ, XQ)
          })); - 1 === QQ ? WQ.push(this.build(XQ)) : (WQ.push(this.shown[QQ]), this.shown.splice(QQ, 1))
        }
        this.dispose(), this.shown = WQ
      }
      dispose() {
        for (const {
            meshes: QQ
          }
          of this.shown)
          for (const WQ of QQ) this.api.disposeGameMesh(WQ);
        this.shown = []
      }
      build(QQ) {
        const {
          rgb: WQ,
          look: XQ,
          boxes: wQ
        } = QQ, qQ = [WQ[0] + (1 - WQ[0]) * NW, WQ[1] + (1 - WQ[1]) * NW, WQ[2] + (1 - WQ[2]) * NW], TQ = [this.buildMesh(QQ.cells, WQ, XQ.alpha, ((QQ, WQ, qQ, TQ) => {
          QX(QQ, WQ, qQ, wQ[TQ], XQ.size, !1)
        })), this.buildMesh(QQ.cells, qQ, XQ.alpha, ((QQ, WQ, qQ, TQ) => {
          QX(QQ, WQ, qQ, wQ[TQ], XQ.size, !0)
        }))];
        return XQ.crossed && TQ.push(this.buildMesh(QQ.cells, WQ, .9, ((QQ, WQ, wQ) => {
          (0, YW.i)(QQ, WQ, wQ, XQ.size + .01, .12)
        }))), {
          group: QQ,
          meshes: TQ
        }
      }
      buildMesh(QQ, WQ, XQ, wQ) {
        const qQ = [QQ[0], QQ[1], QQ[2]],
          TQ = [],
          zQ = [];
        for (let sQ = 0; sQ < QQ.length; sQ += 3) wQ(TQ, zQ, [QQ[sQ] - qQ[0] + .5, QQ[sQ + 1] - qQ[1] + .5, QQ[sQ + 2] - qQ[2] + .5], sQ / 3);
        return this.api.createGameMesh({
          positions: TQ,
          indices: zQ
        }, {
          rgb: [WQ[0], WQ[1], WQ[2]],
          alpha: XQ
        }, qQ)
      }
    }

    function QX(QQ, WQ, XQ, wQ, qQ, TQ) {
      for (let zQ = 0; zQ < wQ.length; zQ += 6) {
        const sQ = [0, 0, 0],
          FQ = [0, 0, 0];
        for (let QQ = 0; QQ < 3; QQ++) sQ[QQ] = XQ[QQ] + ((wQ[zQ + QQ] + wQ[zQ + QQ + 3]) / 2 - .5) * qQ, FQ[QQ] = (wQ[zQ + QQ + 3] - wQ[zQ + QQ]) * qQ;
        (0, YW.e)(QQ, WQ, sQ, FQ, TQ)
      }
    }

    function WX(QQ, WQ, XQ) {
      return QQ.rgb[0] === WQ[0] && QQ.rgb[1] === WQ[1] && QQ.rgb[2] === WQ[2] && QQ.look === XQ
    }

    function XX(QQ, WQ) {
      if (QQ.cells.length !== WQ.cells.length) return !1;
      for (let XQ = 0; XQ < QQ.cells.length; XQ++)
        if (QQ.cells[XQ] !== WQ.cells[XQ]) return !1;
      return QQ.boxes.every(((QQ, XQ) => QQ === WQ.boxes[XQ]))
    }

    function wX(QQ, WQ, XQ, wQ, qQ) {
      if (!QQ.isBlockInLoadedChunk(WQ, wQ - 6, XQ) || !QQ.isBlockInLoadedChunk(WQ, wQ + 6 + qQ, XQ) || !QQ.canModifyBlockAt(WQ, wQ, XQ)) return NaN;
      let TQ = wQ - 1;
      if (0 !== QQ.getBlockId(WQ, TQ, XQ)) {
        for (; TQ < wQ + 6 && 0 !== QQ.getBlockId(WQ, TQ + 1, XQ);) TQ++;
        return TQ
      }
      for (; TQ > wQ - 6;)
        if (TQ--, 0 !== QQ.getBlockId(WQ, TQ, XQ)) return TQ;
      return NaN
    }

    function qX(QQ, WQ, XQ, wQ, qQ) {
      let TQ = 0;
      for (let zQ = wQ + 1; zQ <= wQ + qQ; zQ++) 0 !== QQ.getBlockId(WQ, zQ, XQ) && TQ++;
      return TQ
    }

    function TX(QQ) {
      const WQ = new Map;
      for (const zQ of QQ) {
        var XQ;
        if (Number.isNaN(zQ)) return null;
        WQ.set(zQ, (null !== (XQ = WQ.get(zQ)) && void 0 !== XQ ? XQ : 0) + 1)
      }
      let wQ = NaN,
        qQ = 0;
      for (const [zQ, sQ] of WQ)(sQ > qQ || sQ === qQ && zQ < wQ) && (wQ = zQ, qQ = sQ);
      let TQ = 0;
      for (const zQ of QQ) TQ += Math.abs(zQ - wQ);
      return TQ
    }

    function zX(QQ, WQ, XQ, wQ) {
      const {
        eye: qQ,
        forward: TQ,
        tanHalfFovX: zQ,
        tanHalfFovY: sQ
      } = QQ, [FQ, PQ] = function(QQ) {
        let [WQ, XQ, wQ] = QQ;
        const qQ = Math.hypot(WQ, wQ),
          [TQ, zQ] = [wQ / qQ, -WQ / qQ];
        return [
          [TQ, 0, zQ],
          [XQ * zQ, wQ * TQ - WQ * zQ, -XQ * TQ]
        ]
      }(TQ), [gQ, JQ] = [WQ * zQ, XQ * sQ], rQ = TQ[0] + gQ * FQ[0] + JQ * PQ[0], IQ = TQ[1] + JQ * PQ[1], jQ = TQ[2] + gQ * FQ[2] + JQ * PQ[2], BQ = (wQ - qQ[1]) / IQ;
      return BQ > 0 && BQ < 1 / 0 ? [qQ[0] + BQ * rQ, qQ[2] + BQ * jQ] : null
    }
    const sX = "plotsBlueprintPlacementChanged",
      FX = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class PX {
      constructor(QQ, WQ) {
        this.api = QQ, this.localPlayerId = WQ, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = QQ => {
          var WQ, XQ, wQ, TQ;
          const zQ = null !== (WQ = null === (XQ = this.placing) || void 0 === XQ ? void 0 : XQ.rotation) && void 0 !== WQ ? WQ : 0,
            {
              size: sQ
            } = ZQ(QQ, zQ),
            FQ = this.api.xV(this.localPlayerId),
            [PQ, gQ] = null !== (wQ = null !== (TQ = function(QQ, WQ, XQ, wQ) {
              const [qQ, TQ, zQ] = WQ, [sQ, FQ, PQ] = [Math.floor(XQ[0]), Math.floor(XQ[1]), Math.floor(XQ[2])], gQ = 6 + Math.max(qQ, zQ) / 2, [JQ, rQ] = [Math.ceil(gQ + qQ / 2), Math.ceil(gQ + zQ / 2)], [IQ, jQ] = [sQ - JQ, PQ - rQ], [BQ, yQ] = [2 * JQ + 1, 2 * rQ + 1], VQ = new Float64Array(BQ * yQ), DQ = new Uint16Array(BQ * yQ);
              for (let vQ = 0; vQ < BQ; vQ++)
                for (let WQ = 0; WQ < yQ; WQ++) {
                  const XQ = wX(QQ, IQ + vQ, jQ + WQ, FQ, TQ);
                  VQ[vQ * yQ + WQ] = XQ, Number.isNaN(XQ) || (DQ[vQ * yQ + WQ] = qX(QQ, IQ + vQ, jQ + WQ, XQ, TQ))
                }
              const pQ = Math.hypot(wQ[0], wQ[2]),
                GQ = [];
              let UQ = null,
                bQ = 1 / 0;
              for (let vQ = 0; vQ + qQ <= BQ; vQ++)
                for (let QQ = 0; QQ + zQ <= yQ; QQ++) {
                  const [WQ, TQ] = [IQ + vQ, jQ + QQ], [FQ, JQ] = [WQ + qQ / 2 - XQ[0], TQ + zQ / 2 - XQ[2]], rQ = Math.hypot(FQ, JQ);
                  if (rQ > gQ || sQ >= WQ - 2 && sQ < WQ + qQ + 2 && PQ >= TQ - 2 && PQ < TQ + zQ + 2) continue;
                  GQ.length = 0;
                  let BQ = 0;
                  for (let XQ = 0; XQ < qQ; XQ++)
                    for (let WQ = 0; WQ < zQ; WQ++) GQ.push(VQ[(vQ + XQ) * yQ + QQ + WQ]), BQ += DQ[(vQ + XQ) * yQ + QQ + WQ];
                  const dQ = TX(GQ);
                  if (null === dQ) continue;
                  const HQ = rQ + 3 * (dQ + BQ) + (1 - (0 === pQ ? 1 : (FQ * wQ[0] + JQ * wQ[2]) / (rQ * pQ))) / 2 * 6;
                  HQ < bQ && (bQ = HQ, UQ = [WQ, TQ])
                }
              return UQ
            }(this.api, sQ, FQ, this.camera.forward)) && void 0 !== TQ ? TQ : this.cornerOnTarget(sQ)) && void 0 !== wQ ? wQ : [Math.floor(FQ[0]) + 2, Math.floor(FQ[2])];
          this.placing = {
            id: QQ,
            rotation: zQ,
            corner: [PQ, this.playerLevel(), gQ],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null,
            moved: !1,
            stillSinceMs: performance.now()
          }, this.update(), this.api.sendCommand(`${qQ} preview`)
        }, this.rotate = () => {
          const {
            id: QQ,
            rotation: WQ,
            corner: XQ
          } = this.placing, qQ = wQ[(wQ.indexOf(WQ) + 1) % wQ.length], [TQ, , zQ] = ZQ(QQ, WQ).size, [sQ, , FQ] = ZQ(QQ, qQ).size;
          this.moveTo(XQ[0] + Math.floor(TQ / 2) - Math.floor(sQ / 2), XQ[2] + Math.floor(zQ / 2) - Math.floor(FQ / 2), qQ)
        }, this.hoverAt = (QQ, WQ) => {
          this.placing.hover = [QQ, WQ], this.moveCentreTo(this.camera, QQ, WQ)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (QQ, WQ) => {
          const XQ = this.placing,
            {
              eye: wQ,
              forward: qQ,
              tanHalfFovX: TQ,
              tanHalfFovY: zQ
            } = this.camera,
            sQ = {
              eye: [wQ[0], wQ[1], wQ[2]],
              forward: [qQ[0], qQ[1], qQ[2]],
              tanHalfFovX: TQ,
              tanHalfFovY: zQ
            },
            FQ = XQ.corner[1],
            PQ = zX(sQ, QQ, WQ, FQ);
          XQ.hover = null, XQ.drag = PQ && {
            view: sQ,
            ground: PQ,
            corner: [XQ.corner[0], XQ.corner[2]],
            level: FQ
          }
        }, this.dragTo = (QQ, WQ) => {
          const XQ = this.placing.drag,
            wQ = XQ && zX(XQ.view, QQ, WQ, XQ.level);
          null !== XQ && null !== wQ && this.moveTo(XQ.corner[0] + Math.round(wQ[0] - XQ.ground[0]), XQ.corner[1] + Math.round(wQ[1] - XQ.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const QQ = this.view;
          QQ.waiting || (QQ.blocked ? this.mB({
            ...QQ,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const QQ = this.placing,
            {
              id: WQ,
              rotation: XQ,
              corner: wQ
            } = QQ;
          this.api.sendCommand(`${qQ} place ${WQ} ${wQ.join(" ")} ${XQ}`), QQ.sent = {
            atMs: performance.now(),
            corner: [...wQ],
            rotation: XQ,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${qQ} preview off`))
        }, this.chunkWatch = new xW(QQ), this.meshes = new MW(QQ)
      }
      getView() {
        return this.view
      }
      fJ() {
        const QQ = this.placing;
        null !== QQ && (null !== QQ.sent && !QQ.sent.timedOut && performance.now() - QQ.sent.atMs > 3e3 ? (QQ.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(QQ) || this.chunkWatch.changed() || this.view.settled !== gX(QQ, this.view.blocked)) && this.update())
      }
      afterRender(QQ) {
        ! function(QQ, WQ) {
          for (let XQ = 0; XQ < 3; XQ++) WQ.eye[XQ] = QQ.cameraPosition[XQ], WQ.forward[XQ] = QQ.cameraDirection[XQ];
          WQ.tanHalfFovX = QQ.tanHalfFovX, WQ.tanHalfFovY = QQ.tanHalfFovY
        }(QQ, this.camera);
        const WQ = this.placing;
        null !== WQ && null !== WQ.hover && this.moveCentreTo(this.camera, WQ.hover[0], WQ.hover[1])
      }
      gj(QQ) {
        const WQ = this.placing;
        if (null === WQ || null === WQ.sent || "active" !== QQ[0]) return;
        const {
          sent: XQ
        } = WQ, [, wQ, qQ, TQ, zQ, sQ, FQ] = QQ;
        qQ && wQ === WQ.id && FQ === XQ.rotation && TQ === XQ.corner[0] && zQ === XQ.corner[1] && sQ === XQ.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(QQ) {
        let [WQ, , XQ] = QQ;
        const wQ = this.api.getTargetedBlock();
        if (null === wQ) return null;
        const [qQ, , TQ] = wQ.position;
        return [qQ - Math.floor(WQ / 2), TQ - Math.floor(XQ / 2)]
      }
      playerLevel() {
        var QQ;
        const [WQ, XQ, wQ] = this.api.xV(this.localPlayerId);
        if (null !== (QQ = this.api.getLocalPlayerMovement()) && void 0 !== QQ && QQ.onGround) return Math.ceil(XQ - .01);
        const [qQ, TQ, zQ] = [Math.floor(WQ), Math.floor(XQ), Math.floor(wQ)];
        for (let sQ = TQ; sQ >= TQ - 2; sQ--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(qQ, sQ, zQ))) return sQ + 1;
        return TQ
      }
      followPlayerLevel(QQ) {
        if (JX(QQ)) return !1;
        const WQ = this.playerLevel();
        return WQ !== QQ.corner[1] && (QQ.corner[1] = WQ, !0)
      }
      moveCentreTo(QQ, WQ, XQ) {
        const wQ = this.placing,
          qQ = zX(QQ, WQ, XQ, wQ.corner[1]);
        if (null !== qQ) {
          const [QQ, , WQ] = ZQ(wQ.id, wQ.rotation).size;
          this.moveTo(Math.round(qQ[0] - QQ / 2), Math.round(qQ[1] - WQ / 2))
        }
      }
      moveTo(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const wQ = this.placing;
        if (JX(wQ)) return;
        const [qQ, TQ, zQ] = wQ.corner;
        if (this.centreOnPlot(qQ, zQ) && !this.centreOnPlot(QQ, WQ, XQ))
          if (this.centreOnPlot(QQ, zQ, XQ)) WQ = zQ;
          else {
            if (!this.centreOnPlot(qQ, WQ, XQ)) return;
            QQ = qQ
          } QQ === qQ && WQ === zQ && XQ === wQ.rotation || (wQ.rotation = XQ, wQ.corner = [QQ, TQ, WQ], wQ.moved = !0, wQ.stillSinceMs = performance.now(), this.update())
      }
      centreOnPlot(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: wQ,
          corner: qQ
        } = this.placing, [TQ, , zQ] = ZQ(wQ, XQ).size;
        return this.api.canModifyBlockAt(QQ + Math.floor(TQ / 2), qQ[1], WQ + Math.floor(zQ / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.mB(null)
      }
      update() {
        const {
          id: QQ,
          rotation: WQ,
          corner: XQ,
          refusals: wQ
        } = this.placing, qQ = new mW, TQ = [];
        let zQ = !1,
          sQ = 0;
        for (const {
            offset: JQ,
            block: rQ
          }
          of ZQ(QQ, WQ).cells) {
          const [QQ, WQ, wQ] = [XQ[0] + JQ[0], XQ[1] + JQ[1], XQ[2] + JQ[2]];
          TQ.push(QQ, WQ, wQ);
          const FQ = !this.api.canModifyBlockAt(QQ, WQ, wQ),
            PQ = this.api.getBlockId(QQ, WQ, wQ),
            gQ = !RW(PQ) && !AW(this.api.blockNameToBlockId(rQ), PQ);
          zQ ||= FQ, sQ += gQ ? 1 : 0, FQ || gQ ? qQ.add(QQ, WQ, wQ, KW, OW) : qQ.add(QQ, WQ, wQ, CW(rQ), FX, eW(rQ))
        }
        this.chunkWatch.watch(TQ), this.meshes.show(qQ.toArray());
        const FQ = this.view,
          PQ = JX(this.placing),
          gQ = gX(this.placing, zQ);
        (null === FQ || void 0 === FQ ? void 0 : FQ.id) === QQ && FQ.blocked === zQ && FQ.toClear === sQ && FQ.waiting === PQ && FQ.refusals === wQ && FQ.settled === gQ || this.mB({
          id: QQ,
          blocked: zQ,
          toClear: sQ,
          waiting: PQ,
          refusals: wQ,
          settled: gQ
        })
      }
      mB(QQ) {
        this.view = QQ, bQ.k.mB(sX, QQ, !0)
      }
    }

    function gX(QQ, WQ) {
      let {
        moved: XQ,
        stillSinceMs: wQ
      } = QQ;
      return !WQ && performance.now() - wQ >= (XQ ? 1500 : 6e3)
    }

    function JX(QQ) {
      let {
        sent: WQ
      } = QQ;
      return null !== WQ && !WQ.timedOut
    }
    var rX = XQ(4863);
    class IX {
      constructor(QQ) {
        this.placement = QQ, this.press = null
      }
      down(QQ) {
        if (null !== this.press) return !1;
        const {
          id: WQ,
          mouse: XQ,
          x: wQ,
          y: qQ,
          atMs: TQ
        } = QQ;
        return this.press = {
          id: WQ,
          mouse: XQ,
          x: wQ,
          y: qQ,
          atMs: TQ,
          moved: !1
        }, XQ || this.placement.beginDrag(QQ.ndcX, QQ.ndcY), !0
      }
      move(QQ) {
        const WQ = this.press;
        null !== WQ && WQ.id === QQ.id && (WQ.moved ||= Math.hypot(QQ.x - WQ.x, QQ.y - WQ.y) > 8), QQ.mouse ? this.placement.hoverAt(QQ.ndcX, QQ.ndcY) : (null === WQ || void 0 === WQ ? void 0 : WQ.id) === QQ.id && this.placement.dragTo(QQ.ndcX, QQ.ndcY)
      }
      up(QQ) {
        const WQ = this.press;
        (null === WQ || void 0 === WQ ? void 0 : WQ.id) === QQ.id && (this.move(QQ), this.end(), !WQ.moved && (WQ.mouse || QQ.atMs - WQ.atMs <= 250) && this.placement.tap())
      }
      cancel(QQ) {
        var WQ;
        (null === (WQ = this.press) || void 0 === WQ ? void 0 : WQ.id) === QQ && this.end()
      }
      leave(QQ) {
        let {
          id: WQ,
          mouse: XQ
        } = QQ;
        XQ && this.placement.endHover(), this.cancel(WQ)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }
    const jX = "PlotsPlacementLayer";

    function BX(QQ) {
      let {
        placement: WQ
      } = QQ;
      return null === (0, FQ.j)(sX, WQ.getView()) ? null : (0, EQ.jsx)(yX, {
        placement: WQ
      })
    }

    function yX(QQ) {
      let {
        placement: WQ
      } = QQ;
      (0, rX.c)(!0, !0, jX);
      const XQ = (0, TQ.useMemo)((() => new IX(WQ)), [WQ]);
      return (0, EQ.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: QQ => {
          "mouse" === QQ.pointerType && 0 !== QQ.button || !XQ.down(VX(QQ)) || QQ.currentTarget.setPointerCapture(QQ.pointerId)
        },
        onPointerMove: QQ => {
          XQ.move(VX(QQ))
        },
        onPointerUp: QQ => {
          XQ.up(VX(QQ))
        },
        onPointerCancel: QQ => {
          XQ.cancel(QQ.pointerId)
        },
        onLostPointerCapture: QQ => {
          XQ.cancel(QQ.pointerId)
        },
        onPointerLeave: QQ => {
          XQ.leave(VX(QQ))
        },
        "aria-hidden": !0
      })
    }

    function VX(QQ) {
      const {
        left: WQ,
        top: XQ,
        width: wQ,
        height: qQ
      } = QQ.currentTarget.getBoundingClientRect();
      return {
        id: QQ.pointerId,
        mouse: "mouse" === QQ.pointerType,
        x: QQ.clientX,
        y: QQ.clientY,
        ndcX: (QQ.clientX - WQ) / wQ * 2 - 1,
        ndcY: 1 - (QQ.clientY - XQ) / qQ * 2,
        atMs: QQ.timeStamp
      }
    }

    function DX() {
      return (0, BW.u)().some((QQ => QQ !== BW.e && QQ !== jX))
    }
    const pX = 2500;

    function GX(QQ) {
      let {
        hud: WQ,
        guide: XQ,
        tracker: wQ,
        placement: qQ,
        children: zQ
      } = QQ;
      const {
        t: JQ
      } = (0, gQ.C)(), {
        isTouchScreen: rQ
      } = (0, sQ.n)(["isTouchScreen"]), IQ = (0, FQ.j)(WW, WQ.getGuide()), jQ = (0, FQ.j)(QW, WQ.getPlot()), BQ = (0, FQ.j)(OQ, wQ.get()), yQ = function(QQ) {
        const {
          openInGameMenuName: WQ,
          openEverythingMenuName: XQ,
          loadingOverlayVisible: wQ
        } = (0, sQ.n)(["openInGameMenuName", "openEverythingMenuName", "loadingOverlayVisible"]), qQ = (0, yW.e)(), [zQ, PQ] = (0, TQ.useState)(DX);
        (0, TQ.useEffect)((() => {
          const QQ = () => {
            PQ(DX())
          };
          QQ();
          const WQ = (0, BW.s)(QQ),
            XQ = (0, BW.o)(QQ);
          return () => {
            WQ(), XQ()
          }
        }), []);
        const gQ = (0, FQ.j)(sX, QQ.getView()),
          JQ = "clientGame" === WQ;
        return {
          hudHidden: qQ || wQ,
          journalOpen: JQ,
          covered: zQ || null !== XQ || null !== WQ && !JQ,
          placing: null === gQ ? null : gQ.settled ? "placeBuild" : "placeSpot"
        }
      }(qQ), VQ = function(QQ, WQ, XQ) {
        return "none" === QQ[0] || XQ.hudHidden || XQ.journalOpen || XQ.covered ? null : null !== XQ.placing ? XQ.placing : null !== WQ ? "build" : "choose" === QQ[1] ? "openJournal" : null
      }(IQ, null === BQ ? null : BQ.id, yQ), DQ = function() {
        const [QQ, WQ] = (0, TQ.useState)(null), [XQ, wQ] = (0, TQ.useState)(!1);
        return (0, FQ.f)(XW, (() => {
          WQ(performance.now())
        })), (0, TQ.useEffect)((() => {
          if (null === QQ) return;
          const WQ = window.setTimeout((() => {
              wQ(!0)
            }), pX),
            XQ = window.setTimeout((() => {
              wQ(!1)
            }), 7500);
          return () => {
            window.clearTimeout(WQ), window.clearTimeout(XQ)
          }
        }), [QQ]), XQ
      }() && !yQ.hudHidden && !yQ.covered && !yQ.journalOpen && null === yQ.placing, [pQ, GQ] = (0, TQ.useState)(!1);
      (0, TQ.useEffect)((() => {
        yQ.journalOpen && GQ(!0)
      }), [yQ.journalOpen]);
      const [bQ, vQ] = (0, TQ.useState)(null), [dQ, HQ] = (0, TQ.useState)(null), [aQ, lQ] = (0, TQ.useState)(null), hQ = (0, TQ.useMemo)((() => ({
        hint: VQ,
        journalRef: vQ,
        placementCardRef: HQ,
        buildRef: lQ
      })), [VQ]), iQ = "plot" === jQ[0] && "own" === jQ[5], cQ = rQ && !pQ && iQ ? {
        onSkip: XQ.skip
      } : null;
      return (0, EQ.jsxs)(UQ.Provider, {
        value: hQ,
        children: [zQ, "openJournal" === VQ && null !== bQ && (0, EQ.jsx)(PW, {
          target: bQ,
          placement: "left",
          spotlight: cQ,
          children: rQ ? JQ("plotsGame:guideOpenJournal") : JQ("plotsGame:guideOpenJournalKeys", {
            key: (0, PQ.n)(CQ)
          })
        }), "placeSpot" === VQ && null !== dQ && (0, EQ.jsxs)(EQ.Fragment, {
          children: [rQ && (0, EQ.jsx)(jW, {}), (0, EQ.jsx)(PW, {
            target: dQ,
            placement: "top",
            children: JQ(rQ ? "plotsGame:guidePlaceSpotTouch" : "plotsGame:guidePlaceSpotMouse")
          })]
        }), "placeBuild" === VQ && null !== aQ && null !== dQ && (0, EQ.jsx)(PW, {
          target: rQ ? aQ : dQ,
          placement: "top",
          children: JQ(rQ ? "plotsGame:guidePlaceBuildTouch" : "plotsGame:guidePlaceBuildMouse")
        }), "build" === VQ && null !== BQ && (0, EQ.jsx)(rW, {
          progress: BQ,
          guide: XQ
        }), DQ && null !== bQ && (0, EQ.jsx)(PW, {
          target: bQ,
          placement: "left",
          children: JQ("plotsGame:guideMoreBuilds")
        })]
      })
    }
    var UX = XQ(38777),
      bX = XQ(38782);
    class vX {
      constructor(QQ, WQ, XQ) {
        this.api = QQ, this.localPlayerId = WQ, this.nextCell = XQ, this.hand = null, this.skip = () => {
          this.api.sendCommand("plotsguide skip")
        }, this.bindHand = QQ => {
          this.hand = QQ
        }
      }
      afterRender(QQ) {
        const WQ = this.hand;
        if (null === WQ) return;
        const XQ = this.nextCell.get();
        if (null === XQ) return void(0, UX.h)(WQ, !0);
        const wQ = (0, bX.b)(WQ, QQ, this.api.getPositionView(this.localPlayerId), XQ, 1, 40);
        null !== wQ && (0, UX.d)(WQ, Math.round(100 * wQ.x) / 100, Math.round(100 * wQ.y) / 100)
      }
    }
    var dX = XQ(1507),
      HX = XQ(4851),
      aX = XQ(1157);
    const lX = {
        farm_hut: XQ.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
        farm_house: XQ.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
        farm_barn: XQ.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
        rusticHome_tent: XQ.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
        rusticHome_cabin: XQ.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
        rusticHome_house: XQ.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
        market_stand: XQ.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
        market_stall: XQ.p + "static/media/market_stall.9a562807f9dff591618a.webp",
        market_shop: XQ.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
        castle_wall: XQ.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
        castle_gate: XQ.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
        castle_tower: XQ.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
      },
      hX = ["plotsGame:guideEffortQuick", "plotsGame:guideEffortMedium", "plotsGame:guideEffortBigger"],
      iX = ["market_stand", "rusticHome_tent", "farm_hut"].map((QQ => ({
        id: QQ,
        blocks: ZQ(QQ, 0).cells.length
      }))).sort(((QQ, WQ) => QQ.blocks - WQ.blocks)).map(((QQ, WQ) => ({
        ...QQ,
        effortKey: hX[WQ]
      })));

    function cX(QQ) {
      let {
        onBuild: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, gQ.C)();
      return (0, EQ.jsx)("div", {
        className: "PlotsJournalBookPages PlotsGuideChooserCover",
        children: (0, EQ.jsxs)("div", {
          className: "PlotsGuideChooser",
          children: [(0, EQ.jsx)("h3", {
            className: "PlotsGuideChooserTitle",
            children: XQ("plotsGame:guidePickTitle")
          }), (0, EQ.jsxs)("p", {
            className: "PlotsGuideChooserNote",
            children: [(0, EQ.jsx)("img", {
              src: TW,
              alt: "",
              draggable: !1
            }), XQ("plotsGame:guidePickNote")]
          }), (0, EQ.jsx)("div", {
            className: "PlotsGuideChooserStarters",
            children: iX.map((QQ => {
              let {
                id: wQ,
                blocks: qQ,
                effortKey: TQ
              } = QQ;
              return (0, EQ.jsxs)("article", {
                className: "PlotsGuideStarter",
                children: [(0, EQ.jsx)("button", {
                  type: "button",
                  className: "PlotsGuideStarterSketch",
                  tabIndex: -1,
                  "aria-hidden": !0,
                  "data-pad-ignore": !0,
                  onClick: () => {
                    WQ(wQ)
                  },
                  children: (0, EQ.jsx)("img", {
                    src: lX[wQ],
                    alt: "",
                    draggable: !1
                  })
                }), (0, EQ.jsxs)("div", {
                  className: "PlotsGuideStarterInfo",
                  children: [(0, EQ.jsxs)("span", {
                    className: "PlotsGuideStarterText",
                    children: [(0, EQ.jsx)("span", {
                      className: "PlotsGuideStarterName",
                      children: XQ(aQ(wQ).displayName.translationKey)
                    }), (0, EQ.jsx)("span", {
                      className: "PlotsGuideStarterEffort",
                      children: XQ(TQ)
                    }), (0, EQ.jsx)("span", {
                      className: "PlotsGuideStarterBlocks",
                      children: XQ("plotsGame:journalBlocks", {
                        blocks: String(qQ)
                      })
                    })]
                  }), (0, EQ.jsx)(dX.s, {
                    onClick: () => {
                      WQ(wQ)
                    },
                    children: XQ("plotsGame:placementBuild")
                  })]
                })]
              }, wQ)
            }))
          })]
        })
      })
    }

    function AX(QQ) {
      let {
        direction: WQ,
        disabled: XQ,
        onTurn: wQ
      } = QQ;
      const {
        t: qQ
      } = (0, gQ.C)();
      return (0, EQ.jsx)("div", {
        className: rQ()("PlotsJournalArrow", WQ),
        children: (0, EQ.jsx)(dX.h, {
          disabled: XQ,
          ariaLabel: qQ("Forward" === WQ ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            wQ(WQ)
          },
          children: (0, EQ.jsx)(BQ.d, {
            name: "angle-up"
          })
        })
      })
    }
    const RX = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function EX(QQ) {
      let {
        page: WQ,
        building: XQ,
        onBuild: wQ,
        onPutAway: qQ
      } = QQ;
      const {
        t: TQ
      } = (0, gQ.C)(), {
        displayName: zQ,
        tier: sQ
      } = aQ(WQ.id), FQ = ZQ(WQ.id, 0).cells.length, PQ = "locked" === WQ.state, JQ = XQ ? dX.h : dX.s;
      return (0, EQ.jsxs)("article", {
        className: rQ()("PlotsJournalPage", {
          Locked: PQ
        }),
        children: [(0, EQ.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: TQ(zQ.translationKey)
        }), (0, EQ.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [TQ(RX[sQ]), " \xb7 ", TQ("plotsGame:journalBlocks", {
            blocks: String(FQ)
          })]
        }), (0, EQ.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [HQ.map((QQ => (0, EQ.jsx)("img", {
            className: rQ()({
              Shown: QQ === WQ.id
            }),
            src: lX[QQ],
            alt: "",
            draggable: !1
          }, QQ))), "completed" === WQ.state && (0, EQ.jsx)("span", {
            className: "PlotsJournalStamp",
            children: TQ("plotsGame:journalBuilt")
          }), PQ && (0, EQ.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, EQ.jsx)(BQ.d, {
              name: "lock"
            })
          })]
        }), null !== WQ.note && (0, EQ.jsx)("p", {
          className: "PlotsJournalNote",
          children: TQ(WQ.note)
        }), (0, EQ.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === WQ.state && (0, EQ.jsx)("p", {
            className: "PlotsJournalHint",
            children: TQ("plotsGame:journalLocked", {
              name: TQ(aQ(WQ.unlockedBy).displayName.translationKey)
            })
          }), WQ.active && (0, EQ.jsxs)(EQ.Fragment, {
            children: [(0, EQ.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: TQ("plotsGame:journalBuilding")
            }), (0, EQ.jsx)(dX.l, {
              onClick: qQ,
              children: TQ("plotsGame:journalPutAway")
            })]
          }), !PQ && !WQ.active && (0, EQ.jsx)(JQ, {
            onClick: () => {
              wQ(WQ.id)
            },
            children: TQ("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function CX(QQ) {
      let {
        className: WQ,
        page: XQ,
        hidden: wQ,
        building: qQ,
        journal: TQ
      } = QQ;
      return (0, EQ.jsxs)("div", {
        ref: QQ => {
          null !== QQ && (QQ.inert = wQ)
        },
        className: rQ()("PlotsJournalSide", WQ),
        children: [void 0 !== XQ && (0, EQ.jsx)(EX, {
          page: XQ,
          building: qQ,
          onBuild: TQ.build,
          onPutAway: TQ.putAway
        }), void 0 === XQ && (0, EQ.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var uX = XQ(1972);

    function LX(QQ) {
      return Math.cos((0, uX.j)(QQ))
    }

    function kX(QQ) {
      return (0, uX.y)(Math.acos(bW.b.clamp(QQ, -1, 1)))
    }

    function fX(QQ, WQ, XQ, wQ, qQ) {
      const TQ = Math.abs(WQ - QQ),
        zQ = (0, uX.y)(qQ / (XQ * Math.abs(Math.sin((0, uX.j)(QQ))))),
        sQ = 450 * Math.min(1, TQ / wQ),
        FQ = zQ > 0 ? 3 * TQ / zQ : 1 / 0;
      return Math.round(Math.max(120, Math.min(sQ, FQ)))
    }
    class SX {
      constructor() {
        this.samples = []
      }
      add(QQ, WQ) {
        for (this.samples.push({
            x: QQ,
            at: WQ
          }); WQ - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const QQ = this.samples[0],
          WQ = this.samples[this.samples.length - 1];
        return WQ.at > QQ.at ? (WQ.x - QQ.x) / (WQ.at - QQ.at) : 0
      }
    }

    function tX(QQ) {
      return kX(new DOMMatrixReadOnly(getComputedStyle(QQ).transform).m11)
    }

    function oX(QQ, WQ) {
      QQ.style.transform = `rotateY(${-WQ}deg)`, QQ.classList.add("Turning")
    }

    function eX(QQ, WQ, XQ) {
      const [wQ, qQ] = (0, TQ.useState)(XQ), zQ = (0, TQ.useRef)(null), sQ = (0, TQ.useRef)(null), FQ = (0, TQ.useRef)({
        Forward: null,
        Back: null
      }), PQ = WQ ? 2 : 1, gQ = WQ ? 180 : 90, JQ = wQ - wQ % PQ, rQ = JQ > 0, IQ = JQ + PQ < QQ, jQ = (0, TQ.useCallback)((() => {
        const QQ = sQ.current;
        return null === QQ ? JQ : (sQ.current = null, QQ.animation.cancel(), (WQ = FQ.current[QQ.direction]).style.transform = "", WQ.classList.remove("Turning"), null === QQ.next ? JQ : (qQ(QQ.next), QQ.next));
        var WQ
      }), [JQ]), BQ = (0, TQ.useCallback)(((QQ, WQ, XQ, wQ) => {
        const qQ = FQ.current[QQ],
          TQ = tX(qQ),
          zQ = WQ === ("Forward" === QQ) ? gQ : 0;
        oX(qQ, zQ);
        const JQ = qQ.animate([{
          transform: `rotateY(${-TQ}deg)`
        }, {
          transform: `rotateY(${-zQ}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : fX(TQ, zQ, qQ.offsetWidth, gQ, zQ > TQ ? -XQ : XQ),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        sQ.current = {
          direction: QQ,
          animation: JQ,
          next: WQ ? wQ + ("Forward" === QQ ? PQ : -PQ) : null
        }, JQ.onfinish = () => {
          var QQ;
          (null === (QQ = sQ.current) || void 0 === QQ ? void 0 : QQ.animation) === JQ && jQ()
        }
      }), [PQ, gQ, jQ]), yQ = (0, TQ.useCallback)((WQ => {
        if (null !== zQ.current) return;
        const XQ = jQ();
        ("Forward" === WQ ? XQ + PQ < QQ : XQ > 0) && BQ(WQ, !0, 0, XQ)
      }), [jQ, BQ, PQ, QQ]);
      (0, TQ.useEffect)((() => () => {
        var QQ;
        null === (QQ = sQ.current) || void 0 === QQ || QQ.animation.cancel()
      }), []), (0, TQ.useEffect)((() => {
        const QQ = QQ => {
          var WQ;
          QQ.pointerId !== (null === (WQ = zQ.current) || void 0 === WQ ? void 0 : WQ.pointerId) || zQ.current.following || (zQ.current = null)
        };
        return window.addEventListener("pointerup", QQ), () => {
          window.removeEventListener("pointerup", QQ)
        }
      }), []);
      const VQ = (QQ, WQ, XQ) => {
          const wQ = function(QQ, WQ, XQ, wQ) {
            return (QQ < 0 ? XQ : wQ) ? bW.b.clampAbs(QQ, WQ) : Math.sign(QQ) * WQ * (1 - 1 / (.55 * Math.abs(QQ) / WQ + 1))
          }(QQ.base + XQ, PQ * QQ.width, IQ, rQ);
          return "Forward" === WQ ? Math.min(wQ, 0) : Math.max(wQ, 0)
        },
        DQ = (QQ, WQ) => {
          const XQ = zQ.current;
          if (zQ.current = null, null === XQ.direction) return;
          XQ.speed.add(QQ, WQ);
          const wQ = XQ.speed.get(),
            qQ = VQ(XQ, XQ.direction, QQ - XQ.x);
          BQ(XQ.direction, null !== function(QQ, WQ, XQ, wQ, qQ) {
            if (Math.abs(WQ) >= .3 ? Math.sign(WQ) !== Math.sign(QQ) : Math.abs(QQ) < .5 * XQ) return null;
            const TQ = QQ < 0 ? "Forward" : "Back";
            return ("Forward" === TQ ? wQ : qQ) ? TQ : null
          }(qQ, wQ, PQ * XQ.width, IQ, rQ), wQ, JQ)
        },
        pQ = {
          onPointerDown: QQ => {
            var WQ;
            if (!QQ.isPrimary || 0 !== QQ.button || null !== sQ.current && null !== QQ.target.closest("button")) return;
            const XQ = new SX;
            XQ.add(QQ.clientX, QQ.timeStamp);
            const wQ = FQ.current.Forward.offsetWidth,
              qQ = sQ.current;
            sQ.current = null;
            let TQ = 0;
            if (null !== qQ) {
              const WQ = FQ.current[qQ.direction],
                XQ = tX(WQ);
              qQ.animation.cancel(), oX(WQ, XQ), TQ = function(QQ, WQ, XQ, wQ) {
                return (QQ < 0 ? XQ : wQ) ? QQ : Math.sign(QQ) * WQ * (1 / (1 - Math.min(Math.abs(QQ) / WQ, .99)) - 1) / .55
              }(function(QQ, WQ, XQ, wQ) {
                return XQ * (LX(WQ) - LX("Forward" === QQ ? 0 : wQ))
              }(qQ.direction, XQ, wQ, gQ), PQ * wQ, IQ, rQ), QQ.currentTarget.setPointerCapture(QQ.pointerId)
            }
            zQ.current = {
              pointerId: QQ.pointerId,
              x: QQ.clientX,
              y: QQ.clientY,
              base: TQ,
              width: wQ,
              following: null !== qQ,
              direction: null !== (WQ = null === qQ || void 0 === qQ ? void 0 : qQ.direction) && void 0 !== WQ ? WQ : null,
              speed: XQ
            }
          },
          onPointerMove: QQ => {
            const WQ = zQ.current;
            if (null === WQ || QQ.pointerId !== WQ.pointerId) return;
            if (0 === QQ.buttons) return void DQ(QQ.clientX, QQ.timeStamp);
            const XQ = QQ.clientX - WQ.x;
            !WQ.following && function(QQ, WQ) {
              return Math.abs(QQ) > 8 && Math.abs(QQ) > Math.abs(WQ)
            }(XQ, QQ.clientY - WQ.y) && (WQ.following = !0, WQ.direction = XQ < 0 ? "Forward" : "Back", QQ.currentTarget.setPointerCapture(QQ.pointerId)), null !== WQ.direction && (WQ.speed.add(QQ.clientX, QQ.timeStamp), oX(FQ.current[WQ.direction], function(QQ, WQ, XQ, wQ) {
              const qQ = XQ * LX("Forward" === QQ ? 0 : wQ) + WQ;
              return bW.b.clamp(kX(qQ / XQ), 0, wQ)
            }(WQ.direction, VQ(WQ, WQ.direction, XQ), WQ.width, gQ)))
          },
          onPointerUp: QQ => {
            var WQ;
            QQ.pointerId === (null === (WQ = zQ.current) || void 0 === WQ ? void 0 : WQ.pointerId) && DQ(QQ.clientX, QQ.timeStamp)
          },
          onPointerCancel: QQ => {
            const WQ = zQ.current;
            QQ.pointerId === (null === WQ || void 0 === WQ ? void 0 : WQ.pointerId) && (zQ.current = null, null !== WQ.direction && BQ(WQ.direction, !1, 0, JQ))
          }
        };
      return {
        first: JQ,
        step: PQ,
        canGoBack: rQ,
        canGoForward: IQ,
        turnPage: yQ,
        leaves: FQ,
        pagesHandlers: pQ
      }
    }

    function nX(QQ, WQ) {
      return QQ > WQ && QQ >= 600
    }

    function xX(QQ) {
      let {
        journal: WQ,
        hud: XQ,
        guide: wQ
      } = QQ;
      const {
        t: qQ
      } = (0, gQ.C)(), sQ = (0, FQ.j)(AQ, WQ.getPages()), PQ = (0, FQ.j)(WW, XQ.getGuide()), JQ = sQ.find((QQ => QQ.active)), IQ = (jQ = PQ, BQ = void 0 === JQ ? null : JQ.id, "active" === jQ[0] && null === BQ);
      var jQ, BQ;
      const yQ = (0, aX.p)(nX),
        {
          first: VQ,
          step: GQ,
          canGoBack: UQ,
          canGoForward: bQ,
          turnPage: vQ,
          leaves: dQ,
          pagesHandlers: HQ
        } = eX(sQ.length, yQ, (() => function(QQ) {
          const WQ = QQ.findIndex((QQ => QQ.active));
          return -1 !== WQ ? WQ : Math.max(0, QQ.findIndex((QQ => "open" === QQ.state)))
        }(sQ)));
      (0, TQ.useEffect)((() => {
        WQ.onOpened()
      }), [WQ]), (0, DQ.c)((QQ => !IQ && ("ArrowLeft" === QQ.code || "ArrowRight" === QQ.code) && !(0, pQ.isTypingInInput)()), (QQ => {
        QQ.stopPropagation(), vQ("ArrowLeft" === QQ.code ? "Back" : "Forward")
      }));
      const aQ = void 0 !== JQ,
        lQ = (QQ, XQ, wQ) => (0, EQ.jsx)(CX, {
          className: QQ,
          page: XQ >= 0 && XQ < sQ.length ? sQ[XQ] : void 0,
          hidden: wQ,
          building: aQ,
          journal: WQ
        });
      return (0, EQ.jsx)(HX.b, {
        close: zQ.n,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, EQ.jsxs)("section", {
          className: rQ()("PlotsJournal", {
            Spread: yQ
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": qQ("plotsGame:journalTitle"),
          children: [(0, EQ.jsx)(dX.o, {
            className: "PlotsJournalClose",
            onClick: zQ.n
          }), "active" === PQ[0] && (0, EQ.jsx)(FW, {
            className: "PlotsJournalGuideSkip",
            onSkip: wQ.skip
          }), IQ && (0, EQ.jsx)(cX, {
            onBuild: WQ.build
          }), !IQ && (0, EQ.jsx)(AX, {
            direction: "Back",
            disabled: !UQ,
            onTurn: vQ
          }), (0, EQ.jsx)("div", {
            hidden: IQ,
            className: "PlotsJournalBookPages",
            ...HQ,
            children: (0, EQ.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [yQ && lQ("Left", VQ - 2, !0), lQ("Right", VQ + 2 * GQ - 1, !0), (0, EQ.jsxs)("div", {
                ref: QQ => {
                  dQ.current.Back = QQ
                },
                className: "PlotsJournalLeaf Back",
                children: [lQ("Recto", VQ - 1, !0), yQ && lQ("Verso", VQ, !1)]
              }), (0, EQ.jsxs)("div", {
                ref: QQ => {
                  dQ.current.Forward = QQ
                },
                className: "PlotsJournalLeaf Forward",
                children: [lQ("Recto", VQ + GQ - 1, !1), yQ && lQ("Verso", VQ + GQ, !0)]
              })]
            })
          }), !IQ && (0, EQ.jsx)(AX, {
            direction: "Forward",
            disabled: !bQ,
            onTurn: vQ
          })]
        })
      })
    }

    function YX(QQ, WQ, XQ, wQ, qQ) {
      const TQ = Math.hypot(...WQ.dir);
      if (!Number.isFinite(TQ) || 0 === TQ) return -1;
      const {
        from: zQ,
        reach: sQ,
        solid: FQ
      } = WQ, PQ = [WQ.dir[0] / TQ, WQ.dir[1] / TQ, WQ.dir[2] / TQ], gQ = null === FQ ? sQ : Math.min(sQ, function(QQ, WQ, XQ) {
        const wQ = NX(QQ, WQ, XQ);
        if (wQ !== 1 / 0) return wQ;
        return (XQ[0] + .5 - QQ[0]) * WQ[0] + (XQ[1] + .5 - QQ[1]) * WQ[1] + (XQ[2] + .5 - QQ[2]) * WQ[2]
      }(zQ, PQ, FQ) + .75);
      let JQ = -1,
        rQ = 1 / 0,
        IQ = 1 / 0;
      for (let jQ = 0; jQ < QQ.length; jQ += 4) {
        const WQ = [QQ[jQ], QQ[jQ + 1], QQ[jQ + 2]],
          TQ = qQ(jQ) ? sQ : gQ;
        let FQ = -1,
          BQ = NX(zQ, PQ, WQ);
        if (BQ > TQ) {
          const QQ = [WQ[0] + .5 - zQ[0], WQ[1] + .5 - zQ[1], WQ[2] + .5 - zQ[2]];
          if (BQ = QQ[0] * PQ[0] + QQ[1] * PQ[1] + QQ[2] * PQ[2], BQ <= 0 || BQ > TQ) continue;
          if (FQ = Math.hypot(QQ[0] - BQ * PQ[0], QQ[1] - BQ * PQ[1], QQ[2] - BQ * PQ[2]), FQ > .7 || !wQ(jQ)) continue
        }(FQ < rQ || FQ === rQ && BQ < IQ) && XQ(jQ) && (JQ = jQ, rQ = FQ, IQ = BQ)
      }
      return JQ
    }

    function NX(QQ, WQ, XQ) {
      let wQ = 0,
        qQ = 1 / 0;
      for (let TQ = 0; TQ < 3; TQ++) {
        const zQ = XQ[TQ] - QQ[TQ];
        if (0 === WQ[TQ]) {
          if (zQ > 0 || zQ + 1 < 0) return 1 / 0;
          continue
        }
        const sQ = zQ / WQ[TQ],
          FQ = (zQ + 1) / WQ[TQ];
        wQ = Math.max(wQ, Math.min(sQ, FQ)), qQ = Math.min(qQ, Math.max(sQ, FQ))
      }
      return wQ <= qQ ? wQ : 1 / 0
    }
    var ZX = XQ(37183),
      OX = XQ(38344);
    const KX = [1, 1, 1];
    class mX {
      constructor(QQ) {
        this.api = QQ, this.meshes = null, this.shown = null
      }
      show(QQ) {
        if (!(0, ZX.e)(QQ, this.shown))
          if (this.shown = null === QQ ? null : [QQ[0], QQ[1], QQ[2]], null !== this.meshes)
            for (const WQ of this.meshes) this.api.setGameMesh(WQ, null === QQ ? {
              visible: !1
            } : {
              anchor: QQ,
              visible: !0
            });
          else if (null !== QQ) {
          const WQ = [OX.h, OX.h, OX.h, 0, 0, 0];
          this.meshes = [this.build([WQ], OX.i, QQ), this.build((0, OX.d)(), OX.q, QQ)]
        }
      }
      dispose() {
        for (const WQ of null !== (QQ = this.meshes) && void 0 !== QQ ? QQ : []) {
          var QQ;
          this.api.disposeGameMesh(WQ)
        }
        this.meshes = null, this.shown = null
      }
      build(QQ, WQ, XQ) {
        const wQ = [],
          qQ = [];
        for (const [TQ, zQ, sQ, FQ, PQ, gQ] of QQ)(0, YW.f)(wQ, qQ, [FQ + .5, PQ + .5, gQ + .5], [TQ, zQ, sQ]);
        return this.api.createGameMesh({
          positions: wQ,
          indices: qQ
        }, {
          rgb: KX,
          alpha: WQ,
          onTop: !0
        }, XQ)
      }
    }

    function MX(QQ, WQ) {
      const XQ = nW.h.ny / 2;
      return QQ[0] < WQ[0] + XQ && QQ[0] + 1 > WQ[0] - XQ && QQ[1] < WQ[1] + nW.h.xy && QQ[1] + 1 > WQ[1] && QQ[2] < WQ[2] + XQ && QQ[2] + 1 > WQ[2] - XQ
    }

    function Qw(QQ, WQ) {
      return QQ.getClientOption(WQ, "blockReach") + 1
    }
    class Ww {
      constructor(QQ, WQ, XQ) {
        this.api = QQ, this.localPlayerId = WQ, this.foreseen = XQ, this.cells = [], this.playerCells = [], this.next = null
      }
      get() {
        return this.next
      }
      setCells(QQ) {
        this.cells = QQ
      }
      playerMoved() {
        return Xw(this.api.getPositionView(this.localPlayerId)).some(((QQ, WQ) => QQ !== this.playerCells[WQ]))
      }
      tr(QQ) {
        const WQ = this.api.getPositionView(this.localPlayerId);
        return this.playerCells.splice(0, 1 / 0, ...Xw(WQ)), this.next = this.pickFrom(null === QQ ? [WQ[0], WQ[1] + 1, WQ[2]] : (0, ZX.c)(QQ), (() => !1)), this.next
      }
      pickFrom(QQ, WQ) {
        const XQ = this.api.getPositionView(this.localPlayerId),
          wQ = [XQ[0], XQ[1] + nW.h.xy * nW.h.playerEyeToHeightRatio, XQ[2]],
          qQ = Qw(this.api, this.localPlayerId),
          {
            cells: TQ
          } = this,
          zQ = QQ => [TQ[QQ], TQ[QQ + 1], TQ[QQ + 2]],
          sQ = function(QQ, WQ, XQ, wQ, qQ, TQ) {
            let zQ = -1,
              sQ = -1,
              FQ = 1 / 0;
            for (let PQ = 0; PQ < QQ.length; PQ += WQ) {
              const WQ = (TQ(PQ) ? 2 : 0) + (wQ(PQ) ? 1 : 0);
              if (WQ < sQ || qQ(PQ)) continue;
              const gQ = (QQ[PQ] + .5 - XQ[0]) ** 2 + (QQ[PQ + 1] + .5 - XQ[1]) ** 2 + (QQ[PQ + 2] + .5 - XQ[2]) ** 2;
              (WQ > sQ || gQ < FQ) && (zQ = PQ, sQ = WQ, FQ = gQ)
            }
            return zQ
          }(TQ, 4, QQ, (QQ => 1 === TQ[QQ + 3]), (QQ => {
            const wQ = zQ(QQ);
            return MX(wQ, XQ) || this.foreseen.has(wQ.join()) || WQ(wQ)
          }), (QQ => function(QQ, WQ, XQ) {
            return (WQ[0] + .5 - QQ[0]) ** 2 + (WQ[1] + .5 - QQ[1]) ** 2 + (WQ[2] + .5 - QQ[2]) ** 2 <= XQ ** 2
          }(wQ, zQ(QQ), qQ)));
        return -1 === sQ ? null : zQ(sQ)
      }
    }

    function Xw(QQ) {
      let [WQ, XQ, wQ] = QQ;
      const qQ = nW.h.ny / 2;
      return [Math.floor(WQ), Math.floor(XQ), Math.floor(wQ), Math.floor(WQ - qQ), Math.floor(WQ + qQ), Math.floor(XQ + nW.h.xy), Math.floor(wQ - qQ), Math.floor(wQ + qQ)]
    }
    class ww {
      constructor(QQ, WQ, XQ) {
        this.api = QQ, this.localPlayerId = WQ, this.pickNext = XQ, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(QQ) {
        const [WQ, , XQ] = QQ.cameraDirection, wQ = Math.hypot(WQ, XQ);
        wQ > .001 && (this.heading = [WQ / wQ, XQ / wQ])
      }
      tapped(QQ, WQ, XQ) {
        const wQ = Qw(this.api, this.localPlayerId),
          {
            origin: qQ,
            direction: TQ
          } = this.api.getActionRay(),
          zQ = [...qQ],
          sQ = [
            [zQ, [zQ[0] + TQ[0] * wQ, zQ[1] + TQ[1] * wQ, zQ[2] + TQ[2] * wQ]]
          ];
        null !== QQ && sQ.push([zQ, (0, ZX.c)(QQ)]), this.tap = {
          lines: sQ,
          next: WQ,
          ms: XQ
        }
      }
      filled(QQ, WQ) {
        this.tap = null, this.turnFrom(QQ, WQ), this.retry(WQ)
      }
      arrived(QQ, WQ) {
        const {
          tap: XQ
        } = this;
        if (null === XQ || WQ - XQ.ms > 1500) return null;
        const wQ = (0, ZX.c)(QQ);
        return (0, ZX.e)(XQ.next, QQ) || XQ.lines.some((QQ => {
          let [WQ, XQ] = QQ;
          return function(QQ, WQ, XQ) {
            const wQ = [XQ[0] - WQ[0], XQ[1] - WQ[1], XQ[2] - WQ[2]],
              qQ = [QQ[0] - WQ[0], QQ[1] - WQ[1], QQ[2] - WQ[2]],
              TQ = wQ[0] ** 2 + wQ[1] ** 2 + wQ[2] ** 2,
              zQ = 0 === TQ ? 0 : Math.min(1, Math.max(0, (qQ[0] * wQ[0] + qQ[1] * wQ[1] + qQ[2] * wQ[2]) / TQ));
            return Math.hypot(qQ[0] - wQ[0] * zQ, qQ[1] - wQ[1] * zQ, qQ[2] - wQ[2] * zQ)
          }(wQ, WQ, XQ) <= .9
        })) ? (this.tap = null, this.turnFrom(QQ, WQ), XQ.ms) : null
      }
      turnFrom(QQ, WQ) {
        this.pending = {
          from: QQ,
          ms: WQ,
          turnMs: Math.max(50, Math.min(250, WQ - this.lastFillMs))
        }, this.lastFillMs = WQ
      }
      retry(QQ) {
        const {
          pending: WQ
        } = this;
        if (null === WQ) return;
        if (QQ - WQ.ms > 1500) return void(this.pending = null);
        const XQ = this.pickNext((0, ZX.c)(WQ.from), (QQ => (0, ZX.e)(QQ, WQ.from)));
        if (null === XQ) return;
        this.pending = null;
        const {
          turning: wQ
        } = this;
        if (null !== wQ && QQ < wQ.endMs && (0, ZX.e)(wQ.to, XQ)) return;
        const qQ = this.api.getActionRay().origin,
          TQ = [XQ[0] + .5 - qQ[0], XQ[1] + .5 - qQ[1], XQ[2] + .5 - qQ[2]],
          zQ = Math.hypot(TQ[0], TQ[2]);
        if (zQ < .3) {
          const QQ = Math.max(zQ, .001);
          TQ[0] = this.heading[0] * QQ, TQ[2] = this.heading[1] * QQ
        }
        this.api.turnCamera(TQ, WQ.turnMs), this.turning = {
          to: XQ,
          endMs: QQ + WQ.turnMs
        }
      }
    }
    class qw {
      constructor(QQ, WQ, XQ, wQ) {
        this.api = QQ, this.localPlayerId = WQ, this.juice = XQ, this.tracker = wQ, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.lastFilled = null, this.lastSeenFilled = null, this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = void 0, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new xW(QQ), this.meshes = new MW(QQ), this.outline = new mX(QQ), this.nextCell = new Ww(QQ, WQ, this.foreseen), this.turn = new ww(QQ, WQ, ((QQ, WQ) => this.nextCell.pickFrom(QQ, WQ)))
      }
      gj(QQ) {
        const WQ = "active" === QQ[0] ? `${QQ[1]}|${QQ[3]}|${QQ[4]}|${QQ[5]}|${QQ[6]}` : "";
        if ("active" !== QQ[0]) "built" === QQ[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , XQ, wQ, qQ, TQ] = QQ;
          WQ !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = XQ) : XQ === this.layerY ? this.burstUnlisted(wQ) : XQ > this.layerY && this.finishLayer(XQ), this.layerY = XQ, this.layerCells.has(XQ) || this.layerCells.set(XQ, wQ.filter(Tw)), this.ghostCells = wQ, this.palette = qQ, this.occupiedCells = TQ
        }
        WQ !== this.blueprint && (this.tracker.show("active" === QQ[0] && QQ[2] ? {
          id: QQ[1],
          y: QQ[4]
        } : null), this.blueprint = WQ, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((QQ => this.api.blockNameToBlockId(QQ))), this.chunkWatch.watch([...this.ghostCells.filter(Tw), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(QQ) {
        this.burstUnlisted([]), QQ > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = QQ)
      }
      fJ() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const QQ = performance.now();
        let WQ = !1;
        for (const [wQ, qQ] of this.foreseen) {
          var XQ;
          if (QQ - qQ > 1e3) this.foreseen.delete(wQ), WQ = !0, (null === (XQ = this.lastFilled) || void 0 === XQ ? void 0 : XQ.join()) === wQ && (this.lastFilled = this.lastSeenFilled)
        }(WQ || this.nextCell.playerMoved()) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(QQ) {
        const WQ = new Set;
        for (let qQ = 0; qQ < QQ.length; qQ += 4) WQ.add(`${QQ[qQ]},${QQ[qQ+1]},${QQ[qQ+2]}`);
        const XQ = [],
          {
            ghostCells: wQ
          } = this;
        for (let qQ = 0; qQ < wQ.length; qQ += 4) {
          const QQ = `${wQ[qQ]},${wQ[qQ+1]},${wQ[qQ+2]}`;
          !WQ.has(QQ) && this.open.delete(QQ) && XQ.push(this.filledCell(qQ))
        }
        this.burst(XQ)
      }
      refresh() {
        const {
          ghostCells: QQ,
          palette: WQ,
          occupiedCells: XQ
        } = this, wQ = new mW, qQ = new Set, TQ = [], zQ = [];
        let sQ = 0;
        for (let FQ = 0; FQ < QQ.length; FQ += 4) {
          const [XQ, PQ, gQ, JQ] = [QQ[FQ], QQ[FQ + 1], QQ[FQ + 2], QQ[FQ + 3]], rQ = this.api.getBlockId(XQ, PQ, gQ), IQ = `${XQ},${PQ},${gQ}`, jQ = AW(this.blockIds[JQ], rQ);
          !jQ && RW(rQ) ? wQ.add(XQ, PQ, gQ, CW(WQ[JQ]), ZW, eW(WQ[JQ])) : jQ ? this.open.has(IQ) && TQ.push(this.filledCell(FQ)) : wQ.add(XQ, PQ, gQ, KW, OW), jQ || sQ++, !jQ && this.api.isBlockInLoadedChunk(XQ, PQ, gQ) && (qQ.add(IQ), zQ.push(XQ, PQ, gQ, RW(rQ) ? 0 : 1))
        }
        this.open = qQ, this.nextCell.setCells(zQ), this.tracker.update(this.layerY, this.topLayerY, sQ);
        for (let FQ = 0; FQ < XQ.length; FQ += 3) {
          const [QQ, WQ, qQ] = [XQ[FQ], XQ[FQ + 1], XQ[FQ + 2]];
          RW(this.api.getBlockId(QQ, WQ, qQ)) || wQ.add(QQ, WQ, qQ, KW, OW)
        }
        this.meshes.show(wQ.toArray()), this.burst(TQ), this.showNext(), this.turn.retry(performance.now())
      }
      burst(QQ) {
        const WQ = performance.now(),
          XQ = [];
        for (const [qQ, TQ, zQ] of QQ) {
          const QQ = [qQ, TQ, zQ];
          this.lastSeenFilled = QQ, this.foreseen.delete(QQ.join()) || XQ.push(QQ)
        }
        const wQ = this.isHolding(WQ);
        for (const qQ of XQ) {
          if (this.lastFilled = qQ, wQ && this.pressFilled) {
            this.turn.filled(qQ, WQ);
            continue
          }
          const QQ = this.turn.arrived(qQ, WQ);
          if (null !== QQ) {
            this.pressFilled = wQ;
            for (const [WQ, XQ] of this.foreseen) XQ <= QQ && this.foreseen.delete(WQ)
          }
        }
        this.juice.filled(QQ)
      }
      showNext() {
        var QQ;
        this.outline.show(null !== (QQ = this.aimed) && void 0 !== QQ ? QQ : this.nextCell.tr(this.lastFilled))
      }
      afterRender(QQ) {
        var WQ;
        this.turn.look(QQ);
        const XQ = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === XQ ? null : XQ.position), this.outline.show(null !== (WQ = this.aimed) && void 0 !== WQ ? WQ : this.nextCell.get())
      }
      isHolding(QQ) {
        return null !== this.altMs && QQ - this.altMs <= 500
      }
      attemptAltAction(QQ) {
        const WQ = performance.now();
        if (this.isHolding(WQ) || (this.pressFilled = !1), this.altMs = WQ, this.pressFilled) return "preventPlacement";
        const XQ = this.findAimed(QQ);
        if (null !== XQ) return this.foreseen.set(XQ.join(), WQ), this.lastFilled = XQ, this.aimed = null, this.showNext(), this.turn.filled(XQ, WQ), this.pressFilled = !0, "preventPlacement";
        {
          const XQ = this.nextCell.get();
          null !== XQ && this.turn.tapped(QQ, XQ, WQ)
        }
      }
      holdPressOnEntity() {
        const QQ = performance.now();
        this.pressFilled && this.isHolding(QQ) && (this.altMs = QQ)
      }
      findAimed(QQ) {
        return function(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
          const sQ = QQ.wXQ(WQ),
            FQ = null === sQ || null === QQ.blockNameToBlockId(sQ.name, !0) ? null : sQ.name,
            PQ = QQ.getPositionView(WQ),
            {
              origin: gQ,
              direction: JQ
            } = QQ.getActionRay(),
            rQ = YX(wQ, {
              from: gQ,
              dir: JQ,
              reach: Qw(QQ, WQ),
              solid: XQ
            }, (WQ => {
              const XQ = [wQ[WQ], wQ[WQ + 1], wQ[WQ + 2]];
              return !AW(qQ[wQ[WQ + 3]], QQ.getBlockId(...XQ)) && !zQ.has(XQ.join()) && QQ.isBlockInLoadedChunk(...XQ) && !MX(XQ, PQ)
            }), (QQ => null === FQ || FQ === EW(qQ[wQ[QQ + 3]])), (QQ => null !== TQ && wQ[QQ] === TQ[0] && wQ[QQ + 1] === TQ[1] && wQ[QQ + 2] === TQ[2]));
          return -1 === rQ ? null : [wQ[rQ], wQ[rQ + 1], wQ[rQ + 2]]
        }(this.api, this.localPlayerId, QQ, this.ghostCells, this.blockIds, this.nextCell.get(), this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(QQ) {
        const {
          ghostCells: WQ
        } = this, [XQ, wQ, qQ] = CW(this.palette[WQ[QQ + 3]]);
        return [WQ[QQ], WQ[QQ + 1], WQ[QQ + 2], XQ, wQ, qQ]
      }
    }

    function Tw(QQ, WQ) {
      return WQ % 4 !== 3
    }
    class zw {
      constructor(QQ) {
        this.api = QQ, this.sent = !1
      }
      fJ() {
        this.sent || sQ.b.get("loadingOverlayVisible") || (this.sent = !0, this.api.sendCommand("plotsentered"))
      }
    }
    var sw = XQ(4534),
      Fw = XQ(39427);

    function Pw(QQ, WQ, XQ) {
      const wQ = [255 * QQ, 255 * WQ, 255 * XQ],
        [qQ, TQ, zQ] = wQ.map((QQ => QQ + .4 * (255 - QQ)));
      return {
        texture: "square_particle",
        yJ: 48,
        minLifeTime: .3 / Fw.b,
        maxLifeTime: .55 / Fw.b,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * Fw.b * Fw.b, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...wQ, 1],
          maxColor: [qQ, TQ, zQ, 1]
        }, {
          timeFraction: 1,
          minColor: [...wQ, 0],
          maxColor: [qQ, TQ, zQ, 0]
        }],
        blendMode: sw.c.Standard
      }
    }
    const gw = {
      texture: "glint",
      mipmaps: !1,
      yJ: 96,
      minLifeTime: .5 / Fw.b,
      maxLifeTime: .9 / Fw.b,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * Fw.b * Fw.b, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: sw.c.OneOne
    };
    class Jw {
      constructor(QQ, WQ) {
        this.api = QQ, this.localPlayerId = WQ, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(QQ) {
        if (this.api.particlesEnabled())
          for (const [WQ, XQ, wQ, qQ, TQ, zQ] of QQ.slice(0, 3)) {
            const QQ = `${qQ},${TQ},${zQ}`;
            let sQ = this.chips.get(QQ);
            void 0 === sQ && (sQ = this.api.createParticles(Pw(qQ, TQ, zQ), {
              pos: [WQ + .5, XQ + .5, wQ + .5]
            }), this.chips.set(QQ, sQ));
            for (let WQ = 0; WQ < 8; WQ++) this.setPoint(WQ, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            sQ.emitPoints([WQ + .5, XQ + .5, wQ + .5], this.points, 8)
          }
      }
      layerDone(QQ) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const WQ = QQ.length / 3;
        if (0 === WQ || !this.api.particlesEnabled()) return;
        const XQ = Math.min(WQ, 48),
          [wQ, qQ, TQ] = [QQ[0] + .5, QQ[1] + 1, QQ[2] + .5];
        let zQ = 0;
        for (let sQ = 0; sQ < XQ; sQ++) {
          const FQ = 3 * Math.floor(sQ * WQ / XQ);
          for (let WQ = 0; WQ < 2; WQ++) this.setPoint(zQ++, QQ[FQ] + Math.random() - wQ, QQ[FQ + 1] + 1 - qQ, QQ[FQ + 2] + Math.random() - TQ, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(gw, {
          pos: [wQ, qQ, TQ]
        }), this.sparkles.emitPoints([wQ, qQ, TQ], this.points, zQ)
      }
      dispose() {
        var QQ;
        for (const WQ of this.chips.values()) WQ.stop();
        this.chips.clear(), null === (QQ = this.sparkles) || void 0 === QQ || QQ.stop(), this.sparkles = null
      }
      setPoint(QQ, WQ, XQ, wQ, qQ) {
        const TQ = 4 * QQ;
        this.points[TQ] = WQ, this.points[TQ + 1] = XQ, this.points[TQ + 2] = wQ, this.points[TQ + 3] = qQ
      }
    }
    const rw = "SpecialAction1",
      Iw = "KeyY",
      jw = "KeyX";

    function Bw(QQ) {
      let {
        placement: WQ
      } = QQ;
      const XQ = (0, FQ.j)(sX, WQ.getView()),
        {
          t: wQ
        } = (0, gQ.C)(),
        {
          isTouchScreen: qQ
        } = (0, sQ.n)(["isTouchScreen"]),
        zQ = (0, TQ.useContext)(UQ),
        JQ = null !== XQ,
        BQ = JQ && !XQ.blocked && !XQ.waiting;
      if ((0, DQ.c)((QQ => JQ && !QQ.repeat && !(0, pQ.isTypingInInput)() && !(0, IQ.r)() && !qQ), (QQ => {
          const XQ = function(QQ, WQ, XQ) {
            if (QQ === jw) return WQ.stop;
            if (QQ === Iw) return XQ ? WQ.build : Vw;
            return PQ.s[rw].includes(QQ) ? WQ.rotate : null
          }(QQ.code, WQ, BQ);
          null !== XQ && (QQ.stopPropagation(), XQ())
        })), !JQ) return null;
      let yQ = qQ ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return XQ.blocked ? yQ = "plotsGame:placementOffPlot" : XQ.toClear > 0 ? yQ = "plotsGame:placementClear" : "placeSpot" !== zQ.hint && "placeBuild" !== zQ.hint || (yQ = null), (0, EQ.jsx)(jQ.g, {
        placement: "bottom",
        children: (0, EQ.jsxs)("div", {
          ref: zQ.placementCardRef,
          className: "PlotsPlacementCard",
          children: [(0, EQ.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: wQ(aQ(XQ.id).displayName.translationKey)
          }), null !== yQ && (0, EQ.jsx)("div", {
            className: rQ()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: XQ.refusals > 0
            }),
            children: wQ(yQ)
          }, XQ.refusals), (0, EQ.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, EQ.jsxs)(dX.h, {
              onClick: WQ.rotate,
              children: [(0, EQ.jsx)(yw, {
                noaAction: rw
              }), wQ("plotsGame:placementRotate")]
            }), (0, EQ.jsxs)(dX.P, {
              onClick: WQ.stop,
              children: [(0, EQ.jsx)(yw, {
                keyCode: jw
              }), wQ("general:cancel")]
            }), (0, EQ.jsx)("span", {
              ref: zQ.buildRef,
              className: rQ()("PlotsPlacementBuild", {
                Pulse: "placeBuild" === zQ.hint && BQ && qQ
              }),
              children: (0, EQ.jsxs)(dX.s, {
                disabled: !BQ,
                onClick: WQ.build,
                children: [(0, EQ.jsx)(yw, {
                  keyCode: Iw
                }), wQ("plotsGame:placementBuild")]
              })
            })]
          })]
        })
      })
    }

    function yw(QQ) {
      return (0, EQ.jsx)(VQ.b, {
        className: "PlotsPlacementKey",
        ...QQ
      })
    }

    function Vw() {}
    var Dw = XQ(2451),
      pw = XQ(36987),
      Gw = XQ(2052),
      Uw = XQ(1296);
    const bw = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function vw(QQ) {
      let {
        hud: WQ
      } = QQ;
      const XQ = (0, FQ.j)(QW, WQ.getPlot()),
        [wQ, qQ] = (0, TQ.useState)(null),
        zQ = (0, pw.k)(wQ);
      if ("none" === XQ[0]) return null;
      const [, sQ, PQ, gQ, JQ, IQ] = XQ;
      return (0, EQ.jsx)("div", {
        className: rQ()("PlotsPlotBannerContainer", {
          Below: zQ
        }),
        children: (0, EQ.jsx)(dw, {
          plotX: sQ,
          plotZ: PQ,
          ownerName: gQ,
          ownerId: JQ,
          relation: IQ,
          plaqueRef: qQ
        }, `${sQ},${PQ}`)
      })
    }

    function dw(QQ) {
      var WQ, XQ;
      let {
        plotX: wQ,
        plotZ: qQ,
        ownerName: TQ,
        ownerId: zQ,
        relation: sQ,
        plaqueRef: FQ
      } = QQ;
      const {
        t: PQ
      } = (0, gQ.C)(), JQ = (0, Gw.e)("hiddenPlayerNames"), IQ = (0, Gw.e)("players"), jQ = null === zQ ? null : null !== (WQ = null === (XQ = IQ.byId[zQ]) || void 0 === XQ ? void 0 : XQ.cosmetics) && void 0 !== WQ ? WQ : null, yQ = PQ("plotsGame:plotBannerCoords", {
        x: wQ,
        z: qQ
      }), VQ = "own" === sQ || null !== TQ;
      return (0, EQ.jsxs)("div", {
        ref: FQ,
        className: rQ()("PlotsPlotBanner", {
          Own: "own" === sQ,
          Shared: "shared" === sQ
        }),
        role: "status",
        children: [(0, EQ.jsxs)("span", {
          className: rQ()("PlotsPlotBannerSeal", {
            Face: null !== jQ
          }),
          children: [null !== jQ && (0, EQ.jsx)(Dw.d, {
            cosmetics: jQ
          }), null === jQ && (0, EQ.jsx)(BQ.d, {
            name: bw[sQ]
          })]
        }), (0, EQ.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, EQ.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === sQ && PQ("plotsGame:plotBannerYours"), "own" !== sQ && null !== TQ && PQ("plotsGame:plotBannerOwner", {
              name: (0, Uw.f)(TQ, JQ)
            }), !VQ && yQ]
          }), VQ && (0, EQ.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [yQ, "shared" === sQ && (0, EQ.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: PQ("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }
    const Hw = function(QQ, WQ, XQ, wQ) {
      let {
        localPlayerId: qQ
      } = wQ;
      const sQ = new wW;
      let FQ = null,
        PQ = null,
        gQ = null,
        JQ = null,
        rQ = null,
        IQ = null;
      const jQ = [];
      return {
        onCreate: QQ => {
          FQ = new Jw(QQ, qQ);
          const WQ = new MQ;
          PQ = new qw(QQ, qQ, FQ, WQ), gQ = new PX(QQ, qQ), JQ = new RQ(QQ, gQ), rQ = new vX(QQ, qQ, PQ.nextCell), IQ = new zw(QQ), jQ.push((0, zQ.A)((0, TQ.createElement)(GX, {
            hud: sQ,
            guide: rQ,
            tracker: WQ,
            placement: gQ
          }, (0, TQ.createElement)(vw, {
            hud: sQ
          }), (0, TQ.createElement)(uQ, {
            journal: JQ
          }), (0, TQ.createElement)(BX, {
            placement: gQ
          }), (0, TQ.createElement)(Bw, {
            placement: gQ
          })), {
            content: (0, TQ.createElement)(xX, {
              journal: JQ,
              hud: sQ,
              guide: rQ
            })
          }))
        },
        fJ: () => {
          IQ.fJ(), PQ.fJ(), gQ.fJ(), JQ.fJ()
        },
        onPlayerAttemptAltAction: (QQ, WQ, XQ, wQ, qQ, TQ) => {
          if (null !== TQ) return void PQ.holdPressOnEntity();
          const zQ = void 0 === WQ ? null : [WQ, XQ, wQ];
          return PQ.attemptAltAction(zQ)
        },
        onPlayerClickUp: () => {
          PQ.endPress()
        },
        onAfterRender: (QQ, WQ) => {
          gQ.afterRender(WQ), PQ.afterRender(WQ), rQ.afterRender(WQ)
        },
        onClose: () => {
          for (const QQ of jQ) QQ();
          FQ.dispose(), PQ.dispose(), gQ.dispose(), FQ = null, PQ = null, gQ = null, JQ = null, rQ = null, IQ = null
        },
        onReceivedMessageFromServer: (QQ, WQ) => {
          if ("plotsPlot" === QQ) sQ.receivePlot(WQ);
          else if ("plotsBlueprint" === QQ) {
            const QQ = WQ;
            PQ.gj(QQ), gQ.gj(QQ)
          } else "plotsJournal" === QQ ? JQ.gj(WQ) : "plotsJournalOpen" === QQ ? JQ.openFromServer(WQ) : "plotsPreviewEnd" === QQ ? gQ.endFromServer() : "plotsGuide" === QQ ? sQ.receiveGuide(WQ) : "plotsGuideDone" === QQ && sQ.receiveGuideDone()
        }
      }
    }
  },
  38782: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => sQ
    });
    var wQ = XQ(38777);
    const qQ = 5,
      TQ = [0, 0, 0],
      zQ = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function sQ(QQ, WQ, XQ, sQ, FQ, PQ) {
      let [gQ, JQ, rQ] = sQ;
      const IQ = (gQ + .5 - XQ[0]) ** 2 + (JQ - XQ[1]) ** 2 + (rQ + .5 - XQ[2]) ** 2;
      let jQ = null;
      IQ <= PQ ** 2 && (TQ[0] = gQ + .5, TQ[1] = JQ + FQ, TQ[2] = rQ + .5, jQ = WQ.projectWorldPosToViewport(TQ));
      const BQ = null !== jQ && jQ.x > -qQ && jQ.x < 100 + qQ && jQ.y > -qQ && jQ.y < 100 + qQ;
      return (0, wQ.h)(QQ, !BQ), BQ ? (zQ.x = jQ.x, zQ.y = jQ.y, zQ.distSq = IQ, zQ) : null
    }
  },
  39427: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ,
      e: () => TQ
    });
    const wQ = 1 / .6,
      qQ = {
        kind: "smokePuff"
      };
    class TQ {
      constructor(QQ, WQ, XQ) {
        this.style = QQ, this.yJ = WQ, this.half = XQ, this.particles = null, this.lastFrame = -1
      }
      emit(QQ, WQ, XQ) {
        let TQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return XQ !== this.lastFrame && (this.lastFrame = XQ, this.particles || (this.particles = QQ.createParticles(function(QQ, WQ) {
          const [
            [XQ, TQ, zQ],
            [sQ, FQ, PQ]
          ] = QQ.colours;
          return {
            texture: QQ.soft ? qQ : "square_particle",
            yJ: WQ,
            minLifeTime: QQ.life[0] / wQ,
            maxLifeTime: QQ.life[1] / wQ,
            minEmitPower: QQ.power[0] * wQ,
            maxEmitPower: QQ.power[1] * wQ,
            minSize: QQ.size[0],
            maxSize: QQ.size[1],
            emitRate: 0,
            gravity: [0, QQ.lift * wQ * wQ, 0],
            dir1: [-QQ.spread, 1, -QQ.spread],
            dir2: [QQ.spread, 1, QQ.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [XQ, TQ, zQ, QQ.alpha],
              maxColor: [sQ, FQ, PQ, QQ.alpha]
            }, {
              timeFraction: 1,
              minColor: [XQ, TQ, zQ, 0],
              maxColor: [sQ, FQ, PQ, 0]
            }],
            blendMode: QQ.blendMode
          }
        }(this.style, this.yJ), {
          pos: WQ,
          half: this.half
        })), this.particles.moveTo(WQ, this.half), this.particles.emit(TQ), !0)
      }
      dispose() {
        var QQ;
        null === (QQ = this.particles) || void 0 === QQ || QQ.stop(), this.particles = null
      }
    }
  },
  38777: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => zQ,
      h: () => TQ
    });
    const wQ = new WeakMap;

    function qQ(QQ) {
      let WQ = wQ.get(QQ);
      return WQ || (WQ = {
        hidden: QQ.hidden,
        x: NaN,
        y: NaN
      }, wQ.set(QQ, WQ)), WQ
    }

    function TQ(QQ, WQ) {
      const XQ = qQ(QQ);
      XQ.hidden !== WQ && (XQ.hidden = WQ, QQ.hidden = WQ)
    }

    function zQ(QQ, WQ, XQ) {
      const wQ = qQ(QQ);
      wQ.x === WQ && wQ.y === XQ || (wQ.x = WQ, wQ.y = XQ, QQ.style.translate = `${WQ}vw ${XQ}vh`)
    }
  },
  37183: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ) {
      return null === QQ || null === WQ ? QQ === WQ : QQ[0] === WQ[0] && QQ[1] === WQ[1] && QQ[2] === WQ[2]
    }

    function qQ(QQ) {
      return [QQ[0] + .5, QQ[1] + .5, QQ[2] + .5]
    }
    XQ.d(WQ, {
      c: () => qQ,
      e: () => wQ
    })
  },
  37217: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      return QQ.includes("Leaf Bed")
    }

    function qQ(QQ) {
      return / Bed(?: Head)?(?:\||$)/.test(QQ) && !wQ(QQ)
    }

    function TQ(QQ) {
      return QQ.includes(" Strongbed")
    }

    function zQ(QQ) {
      return wQ(QQ) || qQ(QQ) || TQ(QQ)
    }
    XQ.d(WQ, {
      e: () => zQ,
      f: () => wQ,
      h: () => TQ,
      l: () => qQ
    })
  },
  37212: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => PQ
    });
    var wQ = XQ(37217),
      qQ = XQ(9580);
    const TQ = [],
      zQ = [],
      sQ = [],
      FQ = [];
    for (const gQ of Object.keys(qQ.o))(0, wQ.f)(gQ) ? TQ.push(gQ) : (0, wQ.l)(gQ) && zQ.push(gQ), (0, wQ.h)(gQ) && sQ.push(gQ), (gQ.includes(" Bed Head") || gQ.includes(" Strongbed Head")) && FQ.push(gQ);
    const PQ = {
      leafBeds: TQ,
      woolBeds: zQ,
      strongBeds: sQ,
      beds: [...TQ, ...zQ, ...sQ],
      bedHeads: FQ,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  38821: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYUlEQVR4nGNgIBP8R8NYwX+GDVNRMQOm4v8MC9qxYwZUxf//b+T4//8A+///51khGMTeyIGp8Nz0gv8MDoFgGsbeUB2BXeHESHcUjFNhR4Dj/zp3OzAGsbEphHgIOyYNAACzzGY5JF2GbAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);