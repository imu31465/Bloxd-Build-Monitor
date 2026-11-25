export const id = 26;
export const ids = [26];
export const modules = {
  37538: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => HM,
      i: () => hM,
      m: () => mM,
      p: () => LM
    });
    var OM = iM(35017),
      SM = iM(37542),
      jM = iM(37544),
      aM = iM(9328),
      PM = iM(1516),
      nM = iM(44),
      QM = iM(65),
      zM = iM(1303);

    function LM() {
      var MM;
      return (0, PM.e)(SM.e, (0, SM.t)()), (0, zM.jsx)(zM.Fragment, {
        children: null === (MM = (0, SM.t)()) || void 0 === MM ? void 0 : MM.content
      })
    }

    function mM(MM) {
      var rM;
      let {
        show: iM
      } = MM;
      (0, PM.e)(SM.e, (0, SM.t)());
      const QM = null === (rM = (0, SM.t)()) || void 0 === rM ? void 0 : rM.menu;
      return (0, nM.useEffect)((() => {
        var MM;
        iM || (null === QM || void 0 === QM || null === (MM = QM.onClose) || void 0 === MM || MM.call(QM), (0, jM.q)())
      }), [iM, QM]), (0, nM.useEffect)((() => iM ? (0, aM.e)(jM.y, jM.f) : void 0), [iM]), (0, zM.jsx)(OM.e, {
        showing: iM,
        globallyUniqueKey: "clientGameMenu",
        children: null === QM || void 0 === QM ? void 0 : QM.content
      })
    }

    function HM(MM) {
      let {
        placement: rM = "bottom"
      } = MM;
      return (0, zM.jsx)("div", {
        id: `clientGameHud-${rM}`,
        style: {
          display: "contents"
        }
      })
    }

    function hM(MM) {
      let {
        children: rM,
        placement: iM = "bottom"
      } = MM;
      const [OM, SM] = (0, nM.useState)(null);
      return (0, nM.useEffect)((() => {
        SM(document.getElementById(`clientGameHud-${iM}`))
      }), [iM]), OM ? (0, QM.createPortal)(rM, OM) : null
    }
  },
  35017: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM
    });
    var OM = iM(4919),
      SM = iM(4923);

    function jM(MM) {
      let {
        children: rM,
        showing: iM,
        globallyUniqueKey: jM,
        alwaysMountChildren: aM = !1,
        doGameplayStartStopOnShow: PM = !0,
        keepsMovement: nM = !1
      } = MM;
      return (0, SM.c)(!0, iM, jM, nM), (0, OM.c)(PM, iM), iM || aM ? rM : null
    }
  },
  37629: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => jM,
      e: () => aM,
      g: () => PM,
      h: () => nM
    });
    var OM = iM(44),
      SM = iM(3508);
    const jM = 8,
      aM = "InGameHeaderContainer",
      PM = "TopRightElements";

    function nM(MM) {
      const [rM] = (0, SM.d)(), [iM, nM] = (0, OM.useState)(!1);
      return (0, OM.useLayoutEffect)((() => {
        if (!MM) return;
        const rM = document.querySelector(`.${aM}`),
          iM = document.querySelector(`.${PM}`),
          OM = () => {
            const OM = MM.getBoundingClientRect(),
              SM = rM ? rM.getBoundingClientRect().right : 0,
              aM = iM ? iM.getBoundingClientRect().left : window.innerWidth,
              PM = OM.left < SM + jM,
              QM = OM.right > aM - jM;
            nM(PM || QM)
          };
        OM();
        const SM = new ResizeObserver(OM);
        return SM.observe(MM), rM && SM.observe(rM), iM && SM.observe(iM), () => {
          SM.disconnect()
        }
      }), [MM, rM]), iM
    }
  },
  9328: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => jM,
      e: () => SM
    });
    let OM = null;
    const SM = function(MM) {
        const rM = {
          cycle: MM,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return OM = rM, () => {
          OM === rM && (OM = null)
        }
      },
      jM = () => {
        var MM;
        return null !== (MM = OM) && void 0 !== MM && MM.canCycle() ? OM.cycle : null
      }
  },
  39511: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => aM,
      d: () => PM,
      h: () => nM
    });
    const OM = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      SM = [0, 1, 2, 0, 2, 3],
      jM = [4, 5];

    function aM(MM, rM, iM, OM, SM) {
      for (let aM = 0; aM < 6; aM++) jM.includes(aM) === SM && QM(MM, rM, iM, OM, aM)
    }

    function PM(MM, rM, iM, OM) {
      for (let SM = 0; SM < 6; SM++) QM(MM, rM, iM, OM, SM)
    }

    function nM(MM, rM, iM, jM, aM) {
      for (let PM = 0; PM < 6; PM++)
        for (const nM of [0, 1]) {
          const [QM, zM, LM] = [nM + 2, nM + 1, (nM + 3) % 4], mM = MM.length / 3;
          for (const [rM, SM] of [
              [nM, zM],
              [QM, zM],
              [QM, LM],
              [nM, LM]
            ])
            for (let nM = 0; nM < 3; nM++) {
              const QM = OM[3 * (4 * PM + rM) + nM],
                zM = OM[3 * (4 * PM + SM) + nM];
              MM.push((QM + (zM - QM) * aM) * jM / 2 + iM[nM])
            }
          for (const MM of SM) rM.push(mM + MM)
        }
    }

    function QM(MM, rM, iM, jM, aM) {
      let [PM, nM, QM] = iM, [zM, LM, mM] = jM;
      const HM = MM.length / 3;
      for (let SM = 4 * aM; SM < 4 * aM + 4; SM++) MM.push(OM[3 * SM] * zM / 2 + PM, OM[3 * SM + 1] * LM / 2 + nM, OM[3 * SM + 2] * mM / 2 + QM);
      for (const OM of SM) rM.push(HM + OM)
    }
  },
  40588: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => uO
    });
    const OM = [0, 90, 180, 270],
      SM = "plotsblueprint";
    var jM = iM(44),
      aM = iM(37542),
      PM = iM(19),
      nM = iM(1516),
      QM = iM(2093),
      zM = iM(1188),
      LM = iM(1116),
      mM = iM.n(LM),
      HM = iM(1717),
      hM = iM(34831),
      JM = iM(37538),
      dM = iM(1398),
      yM = iM(2026),
      lM = iM(2088),
      EM = iM(3821),
      UM = iM(1830);

    function GM() {}
    const CM = (0, jM.createContext)({
      hint: null,
      journalRef: GM,
      placementCardRef: GM,
      buildRef: GM
    });
    var eM = iM(22);
    const bM = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      wM = {
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
      tM = ["small", "medium", "large"].flatMap((MM => bM.flat().filter((rM => wM[rM].tier === MM))));

    function gM(MM) {
      return wM[MM]
    }
    const uM = new Map(bM.flatMap((MM => MM.slice(1).map(((rM, iM) => [rM, MM[iM]])))));

    function RM(MM) {
      var rM;
      return null !== (rM = uM.get(MM)) && void 0 !== rM ? rM : null
    }
    const pM = {
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

    function WM(MM, rM) {
      const iM = new Set(MM),
        OM = function(MM) {
          const rM = new Set(MM);
          return new Set(tM.filter((MM => {
            const iM = RM(MM);
            return null === iM || rM.has(iM)
          })))
        }(iM);
      return tM.map((MM => {
        const SM = MM === rM;
        if (iM.has(MM)) return {
          id: MM,
          active: SM,
          note: null,
          state: "completed",
          unlockedBy: null
        };
        const jM = pM[MM],
          aM = void 0 === jM || jM.firstBuild && iM.size > 0 ? null : jM.key;
        return OM.has(MM) ? {
          id: MM,
          active: SM,
          note: aM,
          state: "open",
          unlockedBy: null
        } : {
          id: MM,
          active: SM,
          note: aM,
          state: "locked",
          unlockedBy: RM(MM)
        }
      }))
    }
    const sM = "plotsJournalChanged";
    class DM {
      constructor(MM, rM) {
        this.api = MM, this.placement = rM, this.pages = null, this.openRequested = null, this.openedOffered = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.aL(this.openedOffered ? "journal_offered" : "journal_opened"), this.openedOffered = !1
        }, this.build = MM => {
          this.placement.start(MM), (0, aM.k)()
        }, this.putAway = () => {
          this.api.sendCommand(`${SM} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      GL(MM) {
        let [, rM, iM] = MM;
        this.pages = WM(rM, iM), eM.i.Tz(sM, this.pages, !0)
      }
      openFromServer(MM) {
        let [, rM] = MM;
        this.openRequested = rM, this.bL()
      }
      bL() {
        const MM = this.openRequested;
        null === MM || PM.d.get("loadingOverlayVisible") || (this.openRequested = null, null === this.pages || (0, HM.r)() || (0, UM.isTypingInInput)() || null !== this.placement.getView() || (this.openedOffered = MM, (0, aM.w)()))
      }
      aL(MM) {
        this.reported.has(MM) || (this.reported.add(MM), this.api.sendCommand(`${SM} report ${MM}`))
      }
    }
    var kM = iM(1303);
    const ZM = "KeyJ";

    function oM(MM) {
      let {
        journal: rM
      } = MM;
      const iM = (0, nM.e)(sM, rM.getPages()),
        {
          isTouchScreen: OM
        } = (0, PM.m)(["isTouchScreen"]),
        {
          t: SM
        } = (0, zM.A)(),
        QM = (0, jM.useContext)(CM),
        LM = null !== iM;
      return (0, jM.useEffect)((() => LM ? (0, hM.c)(ZM) : void 0), [LM]), (0, EM.d)((MM => LM && MM.code === ZM && !MM.repeat && !(0, UM.isTypingInInput)()), (MM => {
        (0, HM.E)(MM, !0, aM.w)
      })), null === iM ? null : (0, kM.jsx)(JM.i, {
        placement: "topRight",
        children: (0, kM.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, kM.jsxs)("button", {
            ref: QM.journalRef,
            type: "button",
            className: mM()("PlotsJournalButton SmallTextBold", {
              Touch: OM
            }),
            onClick: aM.w,
            children: [(0, kM.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, kM.jsx)(yM.b, {
                itemName: "Book",
                amount: 0
              })
            }), SM("plotsGame:journalButton"), !OM && (0, kM.jsx)(lM.d, {
              className: "PlotsJournalButtonKey",
              keyCode: ZM
            }), "openJournal" === QM.hint && (0, kM.jsx)(dM.b, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon HandLeftAnim PlotsJournalButtonHand"
            })]
          })
        })
      })
    }
    var fM = iM(9816);
    const YM = [0, 90, 180, 270],
      NM = /^(meta\|rot\d)\|([lrud]+)$/,
      AM = "nesw",
      xM = /^meta\|([nesw]*)\|?(Stacked)?$/,
      vM = function(MM) {
        const rM = new WeakMap;
        return (iM, OM) => {
          let SM = rM.get(iM);
          return void 0 === SM && (SM = MM(iM, OM), rM.set(iM, SM)), SM
        }
      }((MM => new FM(MM)));
    class FM {
      constructor(MM) {
        this.blockMetadata = MM, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const rM = new Set(Object.keys(MM).map((rM => MM[rM].id)));
        rM.add(0), this.maxBlockId = Math.max(...rM)
      }
      static
      for (MM) {
        return vM(MM)
      }
      getBlockIdMapping(MM, rM) {
        const iM = this.getBlockIdMappingKey(MM, rM);
        let OM = this.blockIdMappings.get(iM);
        return void 0 === OM && YM.includes(MM) && (OM = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, MM, rM), this.blockIdMappings.set(iM, OM)), OM
      }
      turnBlockId(MM, rM, iM) {
        return this.mapBlockId(this.blockMetadata[MM], rM, this.getRotationMapping(rM, iM), iM)
      }
      getBlockIdMappingKey(MM, rM) {
        return `r${MM}|m${Number(rM)}`
      }
      createBlockIdMapping(MM, rM, iM, OM) {
        const SM = new Uint16Array(rM + 1),
          jM = this.getRotationMapping(iM, OM);
        for (const aM in MM) {
          const rM = MM[aM];
          SM[rM.id] = this.mapBlockId(rM, iM, jM, OM)
        }
        return SM
      }
      getRotationMapping(MM, rM) {
        const iM = Math.round(MM / 90),
          OM = new Uint8Array(4);
        for (let SM = 0; SM < 4; SM++) OM[SM] = (4 + SM - iM) % 4;
        if (rM) {
          let MM = OM[0];
          OM[0] = OM[1], OM[1] = MM, MM = OM[2], OM[2] = OM[3], OM[3] = MM
        }
        return OM
      }
      mapBlockId(MM, rM, iM, OM) {
        var SM;
        const {
          blockMetadata: jM
        } = this, aM = Math.round(rM / 90), {
          id: PM,
          meta: nM
        } = MM, {
          rot: QM,
          rootName: zM,
          metaStr: LM
        } = nM;
        let mM;
        const [, HM, hM] = null !== (SM = xM.exec(LM)) && void 0 !== SM ? SM : [];
        if (void 0 !== HM) {
          var JM, dM;
          mM = null !== (JM = null === (dM = jM[`${zM}|meta|${[AM.split("").filter(((MM,rM)=>HM.split("").some((MM=>{const iM=AM.indexOf(MM);return((OM?3-iM:iM)+aM)%4===rM})))).join(""),hM].filter(Boolean).join("|")}`]) || void 0 === dM ? void 0 : dM.id) && void 0 !== JM ? JM : PM
        } else if (null === QM) mM = PM;
        else {
          var yM, lM;
          const MM = iM[QM - 1] + 1;
          let rM = LM.replace(`rot${QM}`, `rot${MM}`);
          OM && nM.stairsCorner && (rM = rM.replace(/(Left|Right)$/, (MM => "Left" === MM ? "Right" : "Left"))), OM && "Chest" === zM && (rM = rM.replace(/\|(left|right)$/, ((MM, rM) => "left" === rM ? "|right" : "|left")));
          const SM = NM.exec(rM);
          if (OM && null !== SM) {
            const MM = "lrud".split("").filter((MM => SM[2].includes("l" === MM ? "r" : "r" === MM ? "l" : MM)));
            rM = `${SM[1]}|${MM.join("")}`
          }
          const aM = `${zM}|${rM}`;
          if (mM = null !== (yM = null === (lM = jM[aM]) || void 0 === lM ? void 0 : lM.id) && void 0 !== yM ? yM : null, null === mM) {
            const MM = jM[zM];
            mM = MM.rootMetaDesc === aM ? MM.id : PM
          }
        }
        return mM
      }
    }

    function BM(MM, rM, iM) {
      let {
        xRotationMappedOrigin: OM,
        shouldSwapXZ: SM
      } = iM;
      const jM = SM ? rM : MM;
      return null === OM ? jM : OM - jM
    }

    function XM(MM, rM, iM) {
      let {
        zRotationMappedOrigin: OM,
        shouldSwapXZ: SM
      } = iM;
      const jM = SM ? MM : rM;
      return null === OM ? jM : OM - jM
    }
    const IM = {
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
      KM = new Map;

    function qM(MM, rM) {
      const iM = `${MM}|${rM}`;
      let OM = KM.get(iM);
      if (void 0 === OM) {
        const {
          size: SM,
          palette: jM,
          layers: aM
        } = IM[MM], PM = 90 === rM || 270 === rM, [nM, QM] = PM ? [SM[2], SM[0]] : [SM[0], SM[2]], zM = function(MM, rM, iM) {
          let OM = null,
            SM = null,
            jM = !1;
          switch (MM) {
            case 0:
              break;
            case 90:
              OM = rM - 1, jM = !0;
              break;
            case 180:
              OM = rM - 1, SM = iM - 1;
              break;
            case 270:
              SM = iM - 1, jM = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${MM}`)
          }
          return {
            xRotationMappedOrigin: OM,
            zRotationMappedOrigin: SM,
            shouldSwapXZ: jM
          }
        }(rM, nM, QM), LM = FM.for(fM.k), mM = jM.map((MM => (0, fM.g)(LM.turnBlockId((0, fM.l)(MM), rM, !1)))), HM = [];
        aM.forEach(((MM, rM) => {
          MM.split(" ").forEach(((MM, iM) => {
            for (let OM = 0; OM < MM.length; OM++)
              if ("." !== MM[OM]) {
                const SM = [BM(OM, iM, zM), rM, XM(OM, iM, zM)];
                HM.push({
                  offset: SM,
                  block: mM[MM.charCodeAt(OM) - "a".charCodeAt(0)]
                })
              }
          }))
        })), OM = {
          size: [nM, SM[1], QM],
          cells: HM
        }, KM.set(iM, OM)
      }
      return OM
    }
    const TM = "plotsBuildProgressChanged",
      VM = new Map;

    function cM(MM, rM, iM) {
      let OM = 0,
        SM = 0;
      return function(MM) {
        let rM = VM.get(MM);
        if (void 0 === rM) {
          const OM = [];
          for (const {
              offset: rM
            }
            of qM(MM, 0).cells) {
            var iM;
            OM[rM[1]] = (null !== (iM = OM[rM[1]]) && void 0 !== iM ? iM : 0) + 1
          }
          rM = OM, VM.set(MM, rM)
        }
        return rM
      }(MM).forEach(((MM, iM) => {
        OM += MM, iM > rM && (SM += MM)
      })), {
        id: MM,
        filled: OM - SM - iM,
        total: OM
      }
    }
    class Mr {
      constructor() {
        this.shown = null, this.topOpen = 0, this.progress = null
      }
      get() {
        return this.progress
      }
      show(MM) {
        this.shown = MM, this.topOpen = 0, null === MM && this.Tz(null)
      }
      update(MM, rM, iM) {
        const OM = this.shown;
        null !== OM && (MM >= rM && (this.topOpen = iM), this.Tz(cM(OM.id, rM - OM.y, MM >= rM ? iM : this.topOpen + iM)))
      }
      Tz(MM) {
        const rM = this.progress;
        (null === MM || void 0 === MM ? void 0 : MM.id) === (null === rM || void 0 === rM ? void 0 : rM.id) && (null === MM || void 0 === MM ? void 0 : MM.filled) === (null === rM || void 0 === rM ? void 0 : rM.filled) && (null === MM || void 0 === MM ? void 0 : MM.total) === (null === rM || void 0 === rM ? void 0 : rM.total) || (this.progress = MM, eM.i.Tz(TM, MM, !0))
      }
    }
    const rr = "plotsPlotChanged",
      ir = "plotsGuideChanged",
      Or = "plotsGuideDone";
    class Sr {
      constructor() {
        this.plot = ["none"], this.guide = ["none"]
      }
      getPlot() {
        return this.plot
      }
      receivePlot(MM) {
        this.plot = MM, eM.i.Tz(rr, MM, !0)
      }
      getGuide() {
        return this.guide
      }
      receiveGuide(MM) {
        this.guide = MM, eM.i.Tz(ir, MM, !0)
      }
      receiveGuideDone() {
        eM.i.Tz(Or, void 0, !0)
      }
    }
    var jr = iM(1287),
      ar = iM(39558),
      Pr = iM(37821),
      nr = iM(1541);

    function Qr(MM) {
      let {
        onSkip: rM,
        className: iM
      } = MM;
      const {
        t: OM
      } = (0, zM.A)();
      return (0, kM.jsx)("button", {
        type: "button",
        className: mM()("PlotsGuideSkipButton", iM),
        ...(0, nr.g)(rM, "pointerup"),
        children: OM("tutorial:skip")
      })
    }

    function zr(MM) {
      let {
        target: rM,
        placement: iM,
        spotlight: OM = null,
        children: SM
      } = MM;
      const {
        t: aM
      } = (0, zM.A)(), PM = (0, jM.useRef)(rM);
      return PM.current = rM, (0, jr.v)("popup", PM, null === OM ? null : OM.onSkip, null !== OM, null, "controller:menusSkipTutorial"), (0, kM.jsxs)(Pr.e, {
        target: rM,
        placement: iM,
        className: mM()("PlotsGuideBubble", {
          Passive: null === OM
        }),
        spotlight: null !== OM,
        spotlightMargin: 30,
        children: [(0, kM.jsxs)("div", {
          className: "PlotsGuideBubbleHeader",
          children: [(0, kM.jsx)("img", {
            className: "PlotsGuideBubblePortrait",
            src: ar,
            alt: "",
            draggable: !1
          }), (0, kM.jsx)("span", {
            className: "PlotsGuideBubbleSpeaker",
            children: aM("plotsGame:maverickName")
          }), null !== OM && (0, kM.jsx)(Qr, {
            onSkip: OM.onSkip
          })]
        }), (0, kM.jsx)("p", {
          className: "PlotsGuideBubbleText",
          children: SM
        })]
      })
    }

    function Lr(MM) {
      let {
        className: rM,
        icon: iM,
        title: OM,
        children: SM
      } = MM;
      return (0, kM.jsxs)("div", {
        className: mM()("PlotsCard", rM),
        role: "status",
        children: [(0, kM.jsx)("span", {
          className: "PlotsCardIcon",
          children: (0, kM.jsx)(dM.b, {
            name: iM
          })
        }), (0, kM.jsxs)("div", {
          className: "PlotsCardBody",
          children: [(0, kM.jsx)("div", {
            className: "PlotsCardTitle SmallTextBold",
            children: OM
          }), SM]
        })]
      })
    }

    function mr(MM) {
      let {
        progress: rM,
        goal: iM
      } = MM;
      const OM = Math.min(rM, iM);
      return (0, kM.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, kM.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": iM,
          "aria-valuenow": OM,
          children: (0, kM.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${OM/iM})`
            }
          })
        }), (0, kM.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [OM, "/", iM]
        })]
      })
    }

    function Hr(MM) {
      let {
        progress: rM,
        guide: iM
      } = MM;
      const {
        t: OM
      } = (0, zM.A)(), {
        isTouchScreen: SM
      } = (0, PM.m)(["isTouchScreen"]), jM = rM.filled < 5;
      return (0, kM.jsxs)(kM.Fragment, {
        children: [(jM || rM.total - rM.filled <= 5) && (0, kM.jsx)("div", {
          className: "PlotsGuideHandLayer",
          children: (0, kM.jsx)("div", {
            ref: iM.bindHand,
            className: "PlotsGuideHand",
            children: (0, kM.jsx)(dM.b, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon"
            })
          })
        }), (0, kM.jsx)(JM.i, {
          placement: "bottom",
          children: (0, kM.jsxs)(Lr, {
            icon: "hammer",
            title: OM(gM(rM.id).displayName.translationKey),
            children: [jM && (0, kM.jsx)("div", {
              className: "PlotsCardHint SmallTextLight",
              children: SM ? OM("plotsGame:guideBuildTouch") : hr(OM)
            }), (0, kM.jsx)(mr, {
              progress: rM.filled,
              goal: rM.total
            })]
          })
        })]
      })
    }

    function hr(MM) {
      const rM = QM.v["alt-fire"][0];
      return "Mouse3" === rM ? MM("plotsGame:guideBuildRightClick") : MM("plotsGame:guideBuildKeys", {
        key: (0, QM.m)(rM)
      })
    }

    function Jr() {
      return (0, kM.jsx)("div", {
        className: "PlotsGuideDragHand",
        children: (0, kM.jsx)(dM.b, {
          name: "hand-back-point-up",
          className: "SmallTextBold TouchTutorialIcon"
        })
      })
    }
    var dr = iM(1313),
      yr = iM(2811),
      lr = iM(39414),
      Er = iM(39168),
      Ur = iM(37855),
      Gr = iM(9852),
      Cr = iM(9866),
      er = iM(332),
      br = iM(38784);
    const wr = new Map([
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
      tr = [...Ur.c.blockRemoveActionRoots, ...Er.c, ...Gr.h, "Board", "Code Block", "Custom Lobby Block"],
      gr = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let ur = null;

    function Rr() {
      return ur ??= function() {
        const MM = pr(),
          rM = Math.max(...MM.map((MM => fM.k[MM].id))) + 1,
          iM = new Int32Array(rM),
          OM = new Int32Array(rM),
          SM = new Uint8Array(rM).fill(1),
          jM = new Uint8Array(rM),
          aM = new Uint8Array(rM),
          PM = new Array(rM).fill("Air"),
          nM = new Map,
          QM = MM => {
            let rM = nM.get(MM);
            return void 0 === rM && (rM = nM.size + 1, nM.set(MM, rM)), rM
          },
          zM = new Set(tr);
        for (const mM of MM) {
          var LM;
          const {
            id: MM,
            meta: rM,
            altActionable: nM,
            canBePlacedOver: HM
          } = fM.k[mM];
          iM[MM] = QM(Wr(mM));
          const hM = rM.stairsCorner;
          if (null === hM) OM[MM] = iM[MM];
          else {
            const iM = hM.endsWith("Right");
            OM[MM] = QM(`${rM.rootName}|rot${iM?rM.rot%4+1:rM.rot}|${rM.halfblockPlacement}|${hM.replace("Right","Left")}`)
          }
          SM[MM] = HM ? 1 : 0, jM[MM] = nM || null !== rM.open || mM in br.e || zM.has(rM.rootName) || void 0 !== (0, Er.f)(rM.rootName) ? 1 : 0;
          const {
            rootName: JM
          } = rM;
          aM[MM] = null !== rM.open || Er.c.includes(JM) || JM.includes("Bookshelf") || JM.includes("Mailbox") ? 1 : 0, PM[MM] = null !== (LM = (0, lr.h)(MM)) && void 0 !== LM ? LM : JM
        }
        return {
          kinds: iM,
          shapes: OM,
          empty: SM,
          inUse: jM,
          ownAltActionMessage: aM,
          placingItems: PM
        }
      }(), ur
    }

    function pr() {
      return Object.keys(fM.k).filter((MM => fM.k[MM].name === MM))
    }

    function Wr(MM) {
      var rM;
      const iM = fM.k[MM],
        {
          rootName: OM,
          rot: SM
        } = iM.meta,
        [, ...jM] = (null !== (rM = iM.rootMetaDesc) && void 0 !== rM ? rM : MM).split("|"),
        aM = jM.filter((MM => !("meta" === MM || gr.test(MM) || (0, Cr.B)(iM) && /^[nesw]+$/.test(MM) || Gr.h.includes(OM) && /^[lrud]+$/.test(MM) || er.H.includes(OM) && /^(left|right)$/.test(MM))));
      return [OM, ...aM].map((MM => "fenceGate" === iM.model && MM === `rot${SM}` ? "rot" + ((SM - 1) % 2 + 1) : MM)).join("|")
    }

    function sr(MM, rM) {
      const {
        kinds: iM,
        shapes: OM
      } = Rr();
      return iM[MM] === iM[rM] || OM[MM] === OM[rM]
    }

    function Dr(MM) {
      return 1 === Rr().empty[MM]
    }

    function kr(MM) {
      return Rr().placingItems[MM]
    }

    function Zr(MM) {
      return wr.get(fM.k[MM].meta.rootName)
    }
    var or = iM(9845),
      fr = iM(9863);
    const Yr = [0, 0, 0, 1, 1, 1],
      Nr = (0, or.c)([
        [2, 0, 2, 6, 6, 6]
      ]),
      Ar = (0, or.c)([
        [3, 0, 3, 5, 5, 5]
      ]),
      xr = (0, or.c)([
        [3, 3, 3, 5, 8, 5]
      ]),
      vr = [0, 1, 2, 3].map((MM => (0, or.c)((0, or.k)([
        [3, 2, 0, 5, 7, 3]
      ], MM))));

    function Fr(MM) {
      const {
        Hd: rM,
        model: iM,
        blockModel: OM,
        meta: SM
      } = fM.k[MM];
      return void 0 !== rM ? rM : "CentreCross" === iM ? Nr : null !== OM && void 0 !== OM && OM.startsWith("torch") ? SM.halfblockPlacement === fr.b.side ? vr[SM.rot - 1] : SM.halfblockPlacement === fr.b.top ? xr : Ar : Yr
    }
    var Br = iM(181);
    class Xr {
      constructor(MM) {
        this.api = MM, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(MM) {
        const rM = Br.f.HL;
        this.chunks = [];
        for (let iM = 0; iM < MM.length; iM += 3) {
          const OM = Math.floor(MM[iM] / rM),
            SM = Math.floor(MM[iM + 1] / rM),
            jM = Math.floor(MM[iM + 2] / rM);
          this.watches(OM, SM, jM) || this.chunks.push(OM, SM, jM)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const MM = performance.now();
        if (MM - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = MM;
        let rM = !1;
        for (let iM = 0; iM < this.chunks.length; iM += 3) {
          const MM = this.api.getChunkVersion(this.chunks[iM], this.chunks[iM + 1], this.chunks[iM + 2]);
          this.versions[iM / 3] !== MM && (this.versions[iM / 3] = MM, rM = !0)
        }
        return rM
      }
      watches(MM, rM, iM) {
        for (let OM = 0; OM < this.chunks.length; OM += 3)
          if (this.chunks[OM] === MM && this.chunks[OM + 1] === rM && this.chunks[OM + 2] === iM) return !0;
        return !1
      }
    }
    var Ir = iM(39511);
    const Kr = .35,
      qr = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      Tr = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      Vr = [.95, .2, .15];
    class cr {
      constructor() {
        this.groups = []
      }
      add(MM, rM, iM, OM, SM) {
        let jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Yr;
        for (const aM of this.groups)
          if (ii(aM, OM, SM)) return aM.cells.push(MM, rM, iM), void aM.boxes.push(jM);
        this.groups.push({
          rgb: OM,
          look: SM,
          cells: [MM, rM, iM],
          boxes: [jM]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class Mi {
      constructor(MM) {
        this.api = MM, this.shown = []
      }
      show(MM) {
        const rM = [];
        for (const iM of MM) {
          const MM = this.shown.findIndex((MM => {
            let {
              group: rM
            } = MM;
            return ii(rM, iM.rgb, iM.look) && Oi(rM, iM)
          })); - 1 === MM ? rM.push(this.build(iM)) : (rM.push(this.shown[MM]), this.shown.splice(MM, 1))
        }
        this.dispose(), this.shown = rM
      }
      dispose() {
        for (const {
            meshes: MM
          }
          of this.shown)
          for (const rM of MM) this.api.disposeGameMesh(rM);
        this.shown = []
      }
      build(MM) {
        const {
          rgb: rM,
          look: iM,
          boxes: OM
        } = MM, SM = [rM[0] + (1 - rM[0]) * Kr, rM[1] + (1 - rM[1]) * Kr, rM[2] + (1 - rM[2]) * Kr], jM = [this.buildMesh(MM.cells, rM, iM.alpha, ((MM, rM, SM, jM) => {
          ri(MM, rM, SM, OM[jM], iM.size, !1)
        })), this.buildMesh(MM.cells, SM, iM.alpha, ((MM, rM, SM, jM) => {
          ri(MM, rM, SM, OM[jM], iM.size, !0)
        }))];
        return iM.crossed && jM.push(this.buildMesh(MM.cells, rM, .9, ((MM, rM, OM) => {
          (0, Ir.h)(MM, rM, OM, iM.size + .01, .12)
        }))), {
          group: MM,
          meshes: jM
        }
      }
      buildMesh(MM, rM, iM, OM) {
        const SM = [MM[0], MM[1], MM[2]],
          jM = [],
          aM = [];
        for (let PM = 0; PM < MM.length; PM += 3) OM(jM, aM, [MM[PM] - SM[0] + .5, MM[PM + 1] - SM[1] + .5, MM[PM + 2] - SM[2] + .5], PM / 3);
        return this.api.createGameMesh({
          positions: jM,
          indices: aM
        }, {
          rgb: [rM[0], rM[1], rM[2]],
          alpha: iM
        }, SM)
      }
    }

    function ri(MM, rM, iM, OM, SM, jM) {
      for (let aM = 0; aM < OM.length; aM += 6) {
        const PM = [0, 0, 0],
          nM = [0, 0, 0];
        for (let MM = 0; MM < 3; MM++) PM[MM] = iM[MM] + ((OM[aM + MM] + OM[aM + MM + 3]) / 2 - .5) * SM, nM[MM] = (OM[aM + MM + 3] - OM[aM + MM]) * SM;
        (0, Ir.c)(MM, rM, PM, nM, jM)
      }
    }

    function ii(MM, rM, iM) {
      return MM.rgb[0] === rM[0] && MM.rgb[1] === rM[1] && MM.rgb[2] === rM[2] && MM.look === iM
    }

    function Oi(MM, rM) {
      if (MM.cells.length !== rM.cells.length) return !1;
      for (let iM = 0; iM < MM.cells.length; iM++)
        if (MM.cells[iM] !== rM.cells[iM]) return !1;
      return MM.boxes.every(((MM, iM) => MM === rM.boxes[iM]))
    }

    function Si(MM, rM, iM, OM, SM) {
      if (!MM.isBlockInLoadedChunk(rM, OM - 6, iM) || !MM.isBlockInLoadedChunk(rM, OM + 6 + SM, iM) || !MM.canModifyBlockAt(rM, OM, iM)) return NaN;
      let jM = OM - 1;
      if (0 !== MM.getBlockId(rM, jM, iM)) {
        for (; jM < OM + 6 && 0 !== MM.getBlockId(rM, jM + 1, iM);) jM++;
        return jM
      }
      for (; jM > OM - 6;)
        if (jM--, 0 !== MM.getBlockId(rM, jM, iM)) return jM;
      return NaN
    }

    function ji(MM, rM, iM, OM, SM) {
      let jM = 0;
      for (let aM = OM + 1; aM <= OM + SM; aM++) 0 !== MM.getBlockId(rM, aM, iM) && jM++;
      return jM
    }

    function ai(MM) {
      const rM = new Map;
      for (const aM of MM) {
        var iM;
        if (Number.isNaN(aM)) return null;
        rM.set(aM, (null !== (iM = rM.get(aM)) && void 0 !== iM ? iM : 0) + 1)
      }
      let OM = NaN,
        SM = 0;
      for (const [aM, PM] of rM)(PM > SM || PM === SM && aM < OM) && (OM = aM, SM = PM);
      let jM = 0;
      for (const aM of MM) jM += Math.abs(aM - OM);
      return jM
    }

    function Pi(MM, rM, iM, OM) {
      const {
        eye: SM,
        forward: jM,
        tanHalfFovX: aM,
        tanHalfFovY: PM
      } = MM, [nM, QM] = function(MM) {
        let [rM, iM, OM] = MM;
        const SM = Math.hypot(rM, OM),
          [jM, aM] = [OM / SM, -rM / SM];
        return [
          [jM, 0, aM],
          [iM * aM, OM * jM - rM * aM, -iM * jM]
        ]
      }(jM), [zM, LM] = [rM * aM, iM * PM], mM = jM[0] + zM * nM[0] + LM * QM[0], HM = jM[1] + LM * QM[1], hM = jM[2] + zM * nM[2] + LM * QM[2], JM = (OM - SM[1]) / HM;
      return JM > 0 && JM < 1 / 0 ? [SM[0] + JM * mM, SM[2] + JM * hM] : null
    }
    const ni = "plotsBlueprintPlacementChanged",
      Qi = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class zi {
      constructor(MM, rM) {
        this.api = MM, this.localPlayerId = rM, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = MM => {
          var rM, iM, OM, jM;
          const aM = null !== (rM = null === (iM = this.placing) || void 0 === iM ? void 0 : iM.rotation) && void 0 !== rM ? rM : 0,
            {
              size: PM
            } = qM(MM, aM),
            nM = this.api.XE(this.localPlayerId),
            [QM, zM] = null !== (OM = null !== (jM = function(MM, rM, iM, OM) {
              const [SM, jM, aM] = rM, [PM, nM, QM] = [Math.floor(iM[0]), Math.floor(iM[1]), Math.floor(iM[2])], zM = 6 + Math.max(SM, aM) / 2, [LM, mM] = [Math.ceil(zM + SM / 2), Math.ceil(zM + aM / 2)], [HM, hM] = [PM - LM, QM - mM], [JM, dM] = [2 * LM + 1, 2 * mM + 1], yM = new Float64Array(JM * dM), lM = new Uint16Array(JM * dM);
              for (let eM = 0; eM < JM; eM++)
                for (let rM = 0; rM < dM; rM++) {
                  const iM = Si(MM, HM + eM, hM + rM, nM, jM);
                  yM[eM * dM + rM] = iM, Number.isNaN(iM) || (lM[eM * dM + rM] = ji(MM, HM + eM, hM + rM, iM, jM))
                }
              const EM = Math.hypot(OM[0], OM[2]),
                UM = [];
              let GM = null,
                CM = 1 / 0;
              for (let eM = 0; eM + SM <= JM; eM++)
                for (let MM = 0; MM + aM <= dM; MM++) {
                  const [rM, jM] = [HM + eM, hM + MM], [nM, LM] = [rM + SM / 2 - iM[0], jM + aM / 2 - iM[2]], mM = Math.hypot(nM, LM);
                  if (mM > zM || PM >= rM - 2 && PM < rM + SM + 2 && QM >= jM - 2 && QM < jM + aM + 2) continue;
                  UM.length = 0;
                  let JM = 0;
                  for (let iM = 0; iM < SM; iM++)
                    for (let rM = 0; rM < aM; rM++) UM.push(yM[(eM + iM) * dM + MM + rM]), JM += lM[(eM + iM) * dM + MM + rM];
                  const bM = ai(UM);
                  if (null === bM) continue;
                  const wM = mM + 3 * (bM + JM) + (1 - (0 === EM ? 1 : (nM * OM[0] + LM * OM[2]) / (mM * EM))) / 2 * 6;
                  wM < CM && (CM = wM, GM = [rM, jM])
                }
              return GM
            }(this.api, PM, nM, this.camera.forward)) && void 0 !== jM ? jM : this.cornerOnTarget(PM)) && void 0 !== OM ? OM : [Math.floor(nM[0]) + 2, Math.floor(nM[2])];
          this.placing = {
            id: MM,
            rotation: aM,
            corner: [QM, this.playerLevel(), zM],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null,
            moved: !1,
            stillSinceMs: performance.now()
          }, this.update(), this.api.sendCommand(`${SM} preview`)
        }, this.rotate = () => {
          const {
            id: MM,
            rotation: rM,
            corner: iM
          } = this.placing, SM = OM[(OM.indexOf(rM) + 1) % OM.length], [jM, , aM] = qM(MM, rM).size, [PM, , nM] = qM(MM, SM).size;
          this.moveTo(iM[0] + Math.floor(jM / 2) - Math.floor(PM / 2), iM[2] + Math.floor(aM / 2) - Math.floor(nM / 2), SM)
        }, this.hoverAt = (MM, rM) => {
          this.placing.hover = [MM, rM], this.moveCentreTo(this.camera, MM, rM)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (MM, rM) => {
          const iM = this.placing,
            {
              eye: OM,
              forward: SM,
              tanHalfFovX: jM,
              tanHalfFovY: aM
            } = this.camera,
            PM = {
              eye: [OM[0], OM[1], OM[2]],
              forward: [SM[0], SM[1], SM[2]],
              tanHalfFovX: jM,
              tanHalfFovY: aM
            },
            nM = iM.corner[1],
            QM = Pi(PM, MM, rM, nM);
          iM.hover = null, iM.drag = QM && {
            view: PM,
            ground: QM,
            corner: [iM.corner[0], iM.corner[2]],
            level: nM
          }
        }, this.dragTo = (MM, rM) => {
          const iM = this.placing.drag,
            OM = iM && Pi(iM.view, MM, rM, iM.level);
          null !== iM && null !== OM && this.moveTo(iM.corner[0] + Math.round(OM[0] - iM.ground[0]), iM.corner[1] + Math.round(OM[1] - iM.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const MM = this.view;
          MM.waiting || (MM.blocked ? this.Tz({
            ...MM,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const MM = this.placing,
            {
              id: rM,
              rotation: iM,
              corner: OM
            } = MM;
          this.api.sendCommand(`${SM} place ${rM} ${OM.join(" ")} ${iM}`), MM.sent = {
            atMs: performance.now(),
            corner: [...OM],
            rotation: iM,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${SM} preview off`))
        }, this.chunkWatch = new Xr(MM), this.meshes = new Mi(MM)
      }
      getView() {
        return this.view
      }
      bL() {
        const MM = this.placing;
        null !== MM && (null !== MM.sent && !MM.sent.timedOut && performance.now() - MM.sent.atMs > 3e3 ? (MM.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(MM) || this.chunkWatch.changed() || this.view.settled !== Li(MM, this.view.blocked)) && this.update())
      }
      afterRender(MM) {
        ! function(MM, rM) {
          for (let iM = 0; iM < 3; iM++) rM.eye[iM] = MM.cameraPosition[iM], rM.forward[iM] = MM.cameraDirection[iM];
          rM.tanHalfFovX = MM.tanHalfFovX, rM.tanHalfFovY = MM.tanHalfFovY
        }(MM, this.camera);
        const rM = this.placing;
        null !== rM && null !== rM.hover && this.moveCentreTo(this.camera, rM.hover[0], rM.hover[1])
      }
      GL(MM) {
        const rM = this.placing;
        if (null === rM || null === rM.sent || "active" !== MM[0]) return;
        const {
          sent: iM
        } = rM, [, OM, SM, jM, aM, PM, nM] = MM;
        SM && OM === rM.id && nM === iM.rotation && jM === iM.corner[0] && aM === iM.corner[1] && PM === iM.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(MM) {
        let [rM, , iM] = MM;
        const OM = this.api.getTargetedBlock();
        if (null === OM) return null;
        const [SM, , jM] = OM.position;
        return [SM - Math.floor(rM / 2), jM - Math.floor(iM / 2)]
      }
      playerLevel() {
        var MM;
        const [rM, iM, OM] = this.api.XE(this.localPlayerId);
        if (null !== (MM = this.api.getLocalPlayerMovement()) && void 0 !== MM && MM.onGround) return Math.ceil(iM - .01);
        const [SM, jM, aM] = [Math.floor(rM), Math.floor(iM), Math.floor(OM)];
        for (let PM = jM; PM >= jM - 2; PM--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(SM, PM, aM))) return PM + 1;
        return jM
      }
      followPlayerLevel(MM) {
        if (mi(MM)) return !1;
        const rM = this.playerLevel();
        return rM !== MM.corner[1] && (MM.corner[1] = rM, !0)
      }
      moveCentreTo(MM, rM, iM) {
        const OM = this.placing,
          SM = Pi(MM, rM, iM, OM.corner[1]);
        if (null !== SM) {
          const [MM, , rM] = qM(OM.id, OM.rotation).size;
          this.moveTo(Math.round(SM[0] - MM / 2), Math.round(SM[1] - rM / 2))
        }
      }
      moveTo(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const OM = this.placing;
        if (mi(OM)) return;
        const [SM, jM, aM] = OM.corner;
        if (this.centreOnPlot(SM, aM) && !this.centreOnPlot(MM, rM, iM))
          if (this.centreOnPlot(MM, aM, iM)) rM = aM;
          else {
            if (!this.centreOnPlot(SM, rM, iM)) return;
            MM = SM
          } MM === SM && rM === aM && iM === OM.rotation || (OM.rotation = iM, OM.corner = [MM, jM, rM], OM.moved = !0, OM.stillSinceMs = performance.now(), this.update())
      }
      centreOnPlot(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: OM,
          corner: SM
        } = this.placing, [jM, , aM] = qM(OM, iM).size;
        return this.api.canModifyBlockAt(MM + Math.floor(jM / 2), SM[1], rM + Math.floor(aM / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.Tz(null)
      }
      update() {
        const {
          id: MM,
          rotation: rM,
          corner: iM,
          refusals: OM
        } = this.placing, SM = new cr, jM = [];
        let aM = !1,
          PM = 0;
        for (const {
            offset: LM,
            block: mM
          }
          of qM(MM, rM).cells) {
          const [MM, rM, OM] = [iM[0] + LM[0], iM[1] + LM[1], iM[2] + LM[2]];
          jM.push(MM, rM, OM);
          const nM = !this.api.canModifyBlockAt(MM, rM, OM),
            QM = this.api.getBlockId(MM, rM, OM),
            zM = !Dr(QM) && !sr(this.api.blockNameToBlockId(mM), QM);
          aM ||= nM, PM += zM ? 1 : 0, nM || zM ? SM.add(MM, rM, OM, Vr, Tr) : SM.add(MM, rM, OM, Zr(mM), Qi, Fr(mM))
        }
        this.chunkWatch.watch(jM), this.meshes.show(SM.toArray());
        const nM = this.view,
          QM = mi(this.placing),
          zM = Li(this.placing, aM);
        (null === nM || void 0 === nM ? void 0 : nM.id) === MM && nM.blocked === aM && nM.toClear === PM && nM.waiting === QM && nM.refusals === OM && nM.settled === zM || this.Tz({
          id: MM,
          blocked: aM,
          toClear: PM,
          waiting: QM,
          refusals: OM,
          settled: zM
        })
      }
      Tz(MM) {
        this.view = MM, eM.i.Tz(ni, MM, !0)
      }
    }

    function Li(MM, rM) {
      let {
        moved: iM,
        stillSinceMs: OM
      } = MM;
      return !rM && performance.now() - OM >= (iM ? 1500 : 6e3)
    }

    function mi(MM) {
      let {
        sent: rM
      } = MM;
      return null !== rM && !rM.timedOut
    }
    var Hi = iM(4923);
    class Ji {
      constructor(MM) {
        this.placement = MM, this.press = null
      }
      down(MM) {
        if (null !== this.press) return !1;
        const {
          id: rM,
          mouse: iM,
          x: OM,
          y: SM,
          atMs: jM
        } = MM;
        return this.press = {
          id: rM,
          mouse: iM,
          x: OM,
          y: SM,
          atMs: jM,
          moved: !1
        }, iM || this.placement.beginDrag(MM.ndcX, MM.ndcY), !0
      }
      move(MM) {
        const rM = this.press;
        null !== rM && rM.id === MM.id && (rM.moved ||= Math.hypot(MM.x - rM.x, MM.y - rM.y) > 8), MM.mouse ? this.placement.hoverAt(MM.ndcX, MM.ndcY) : (null === rM || void 0 === rM ? void 0 : rM.id) === MM.id && this.placement.dragTo(MM.ndcX, MM.ndcY)
      }
      up(MM) {
        const rM = this.press;
        (null === rM || void 0 === rM ? void 0 : rM.id) === MM.id && (this.move(MM), this.end(), !rM.moved && (rM.mouse || MM.atMs - rM.atMs <= 250) && this.placement.tap())
      }
      cancel(MM) {
        var rM;
        (null === (rM = this.press) || void 0 === rM ? void 0 : rM.id) === MM && this.end()
      }
      leave(MM) {
        let {
          id: rM,
          mouse: iM
        } = MM;
        iM && this.placement.endHover(), this.cancel(rM)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }
    const di = "PlotsPlacementLayer";

    function yi(MM) {
      let {
        placement: rM
      } = MM;
      return null === (0, nM.e)(ni, rM.getView()) ? null : (0, kM.jsx)(li, {
        placement: rM
      })
    }

    function li(MM) {
      let {
        placement: rM
      } = MM;
      (0, Hi.c)(!0, !0, di);
      const iM = (0, jM.useMemo)((() => new Ji(rM)), [rM]);
      return (0, kM.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: MM => {
          "mouse" === MM.pointerType && 0 !== MM.button || !iM.down(Ei(MM)) || MM.currentTarget.setPointerCapture(MM.pointerId)
        },
        onPointerMove: MM => {
          iM.move(Ei(MM))
        },
        onPointerUp: MM => {
          iM.up(Ei(MM))
        },
        onPointerCancel: MM => {
          iM.cancel(MM.pointerId)
        },
        onLostPointerCapture: MM => {
          iM.cancel(MM.pointerId)
        },
        onPointerLeave: MM => {
          iM.leave(Ei(MM))
        },
        "aria-hidden": !0
      })
    }

    function Ei(MM) {
      const {
        left: rM,
        top: iM,
        width: OM,
        height: SM
      } = MM.currentTarget.getBoundingClientRect();
      return {
        id: MM.pointerId,
        mouse: "mouse" === MM.pointerType,
        x: MM.clientX,
        y: MM.clientY,
        ndcX: (MM.clientX - rM) / OM * 2 - 1,
        ndcY: 1 - (MM.clientY - iM) / SM * 2,
        atMs: MM.timeStamp
      }
    }

    function Ui() {
      return (0, dr.u)().some((MM => MM !== dr.e && MM !== di))
    }
    const Gi = 2500;

    function Ci(MM) {
      let {
        hud: rM,
        guide: iM,
        tracker: OM,
        placement: SM,
        children: aM
      } = MM;
      const {
        t: LM
      } = (0, zM.A)(), {
        isTouchScreen: mM
      } = (0, PM.m)(["isTouchScreen"]), HM = (0, nM.e)(ir, rM.getGuide()), hM = (0, nM.e)(rr, rM.getPlot()), JM = (0, nM.e)(TM, OM.get()), dM = function(MM) {
        const {
          openInGameMenuName: rM,
          openEverythingMenuName: iM,
          loadingOverlayVisible: OM
        } = (0, PM.m)(["openInGameMenuName", "openEverythingMenuName", "loadingOverlayVisible"]), SM = (0, yr.b)(), [aM, QM] = (0, jM.useState)(Ui);
        (0, jM.useEffect)((() => {
          const MM = () => {
            QM(Ui())
          };
          MM();
          const rM = (0, dr.r)(MM),
            iM = (0, dr.o)(MM);
          return () => {
            rM(), iM()
          }
        }), []);
        const zM = (0, nM.e)(ni, MM.getView()),
          LM = "clientGame" === rM;
        return {
          hudHidden: SM || OM,
          journalOpen: LM,
          covered: aM || null !== iM || null !== rM && !LM,
          placing: null === zM ? null : zM.settled ? "placeBuild" : "placeSpot"
        }
      }(SM), yM = function(MM, rM, iM) {
        return "none" === MM[0] || iM.hudHidden || iM.journalOpen || iM.covered ? null : null !== iM.placing ? iM.placing : null !== rM ? "build" : "choose" === MM[1] ? "openJournal" : null
      }(HM, null === JM ? null : JM.id, dM), lM = function() {
        const [MM, rM] = (0, jM.useState)(null), [iM, OM] = (0, jM.useState)(!1);
        return (0, nM.d)(Or, (() => {
          rM(performance.now())
        })), (0, jM.useEffect)((() => {
          if (null === MM) return;
          const rM = window.setTimeout((() => {
              OM(!0)
            }), Gi),
            iM = window.setTimeout((() => {
              OM(!1)
            }), 7500);
          return () => {
            window.clearTimeout(rM), window.clearTimeout(iM)
          }
        }), [MM]), iM
      }() && !dM.hudHidden && !dM.covered && !dM.journalOpen && null === dM.placing, [EM, UM] = (0, jM.useState)(!1);
      (0, jM.useEffect)((() => {
        dM.journalOpen && UM(!0)
      }), [dM.journalOpen]);
      const [GM, eM] = (0, jM.useState)(null), [bM, wM] = (0, jM.useState)(null), [tM, gM] = (0, jM.useState)(null), uM = (0, jM.useMemo)((() => ({
        hint: yM,
        journalRef: eM,
        placementCardRef: wM,
        buildRef: gM
      })), [yM]), RM = "plot" === hM[0] && "own" === hM[5], pM = mM && !EM && RM ? {
        onSkip: iM.skip
      } : null;
      return (0, kM.jsxs)(CM.Provider, {
        value: uM,
        children: [aM, "openJournal" === yM && null !== GM && (0, kM.jsx)(zr, {
          target: GM,
          placement: "left",
          spotlight: pM,
          children: mM ? LM("plotsGame:guideOpenJournal") : LM("plotsGame:guideOpenJournalKeys", {
            key: (0, QM.m)(ZM)
          })
        }), "placeSpot" === yM && null !== bM && (0, kM.jsxs)(kM.Fragment, {
          children: [mM && (0, kM.jsx)(Jr, {}), (0, kM.jsx)(zr, {
            target: bM,
            placement: "top",
            children: LM(mM ? "plotsGame:guidePlaceSpotTouch" : "plotsGame:guidePlaceSpotMouse")
          })]
        }), "placeBuild" === yM && null !== tM && null !== bM && (0, kM.jsx)(zr, {
          target: mM ? tM : bM,
          placement: "top",
          children: LM(mM ? "plotsGame:guidePlaceBuildTouch" : "plotsGame:guidePlaceBuildMouse")
        }), "build" === yM && null !== JM && (0, kM.jsx)(Hr, {
          progress: JM,
          guide: iM
        }), lM && null !== GM && (0, kM.jsx)(zr, {
          target: GM,
          placement: "left",
          children: LM("plotsGame:guideMoreBuilds")
        })]
      })
    }
    var ei = iM(39491),
      bi = iM(39499);
    class wi {
      constructor(MM, rM, iM) {
        this.api = MM, this.localPlayerId = rM, this.nextCell = iM, this.hand = null, this.skip = () => {
          this.api.sendCommand("plotsguide skip")
        }, this.bindHand = MM => {
          this.hand = MM
        }
      }
      afterRender(MM) {
        const rM = this.hand;
        if (null === rM) return;
        const iM = this.nextCell.get();
        if (null === iM) return void(0, ei.e)(rM, !0);
        const OM = (0, bi.e)(rM, MM, this.api.getPositionView(this.localPlayerId), iM, 1, 40);
        null !== OM && (0, ei.b)(rM, Math.round(100 * OM.x) / 100, Math.round(100 * OM.y) / 100)
      }
    }
    var ti = iM(1520),
      gi = iM(4917),
      ui = iM(1135);
    const Ri = {
        farm_hut: iM.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
        farm_house: iM.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
        farm_barn: iM.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
        rusticHome_tent: iM.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
        rusticHome_cabin: iM.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
        rusticHome_house: iM.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
        market_stand: iM.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
        market_stall: iM.p + "static/media/market_stall.9a562807f9dff591618a.webp",
        market_shop: iM.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
        castle_wall: iM.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
        castle_gate: iM.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
        castle_tower: iM.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
      },
      Wi = ["plotsGame:guideEffortQuick", "plotsGame:guideEffortMedium", "plotsGame:guideEffortBigger"],
      si = ["market_stand", "rusticHome_tent", "farm_hut"].map((MM => ({
        id: MM,
        blocks: qM(MM, 0).cells.length
      }))).sort(((MM, rM) => MM.blocks - rM.blocks)).map(((MM, rM) => ({
        ...MM,
        effortKey: Wi[rM]
      })));

    function Di(MM) {
      let {
        onBuild: rM
      } = MM;
      const {
        t: iM
      } = (0, zM.A)();
      return (0, kM.jsx)("div", {
        className: "PlotsJournalBookPages PlotsGuideChooserCover",
        children: (0, kM.jsxs)("div", {
          className: "PlotsGuideChooser",
          children: [(0, kM.jsx)("h3", {
            className: "PlotsGuideChooserTitle",
            children: iM("plotsGame:guidePickTitle")
          }), (0, kM.jsxs)("p", {
            className: "PlotsGuideChooserNote",
            children: [(0, kM.jsx)("img", {
              src: ar,
              alt: "",
              draggable: !1
            }), iM("plotsGame:guidePickNote")]
          }), (0, kM.jsx)("div", {
            className: "PlotsGuideChooserStarters",
            children: si.map((MM => {
              let {
                id: OM,
                blocks: SM,
                effortKey: jM
              } = MM;
              return (0, kM.jsxs)("article", {
                className: "PlotsGuideStarter",
                children: [(0, kM.jsx)("button", {
                  type: "button",
                  className: "PlotsGuideStarterSketch",
                  tabIndex: -1,
                  "aria-hidden": !0,
                  "data-pad-ignore": !0,
                  onClick: () => {
                    rM(OM)
                  },
                  children: (0, kM.jsx)("img", {
                    src: Ri[OM],
                    alt: "",
                    draggable: !1
                  })
                }), (0, kM.jsxs)("div", {
                  className: "PlotsGuideStarterInfo",
                  children: [(0, kM.jsxs)("span", {
                    className: "PlotsGuideStarterText",
                    children: [(0, kM.jsx)("span", {
                      className: "PlotsGuideStarterName",
                      children: iM(gM(OM).displayName.translationKey)
                    }), (0, kM.jsx)("span", {
                      className: "PlotsGuideStarterEffort",
                      children: iM(jM)
                    }), (0, kM.jsx)("span", {
                      className: "PlotsGuideStarterBlocks",
                      children: iM("plotsGame:journalBlocks", {
                        blocks: String(SM)
                      })
                    })]
                  }), (0, kM.jsx)(ti.p, {
                    onClick: () => {
                      rM(OM)
                    },
                    children: iM("plotsGame:placementBuild")
                  })]
                })]
              }, OM)
            }))
          })]
        })
      })
    }

    function ki(MM) {
      let {
        direction: rM,
        disabled: iM,
        onTurn: OM
      } = MM;
      const {
        t: SM
      } = (0, zM.A)();
      return (0, kM.jsx)("div", {
        className: mM()("PlotsJournalArrow", rM),
        children: (0, kM.jsx)(ti.e, {
          disabled: iM,
          ariaLabel: SM("Forward" === rM ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            OM(rM)
          },
          children: (0, kM.jsx)(dM.b, {
            name: "angle-up"
          })
        })
      })
    }
    const Zi = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function oi(MM) {
      let {
        page: rM,
        building: iM,
        onBuild: OM,
        onPutAway: SM
      } = MM;
      const {
        t: jM
      } = (0, zM.A)(), {
        displayName: aM,
        tier: PM
      } = gM(rM.id), nM = qM(rM.id, 0).cells.length, QM = "locked" === rM.state, LM = iM ? ti.e : ti.p;
      return (0, kM.jsxs)("article", {
        className: mM()("PlotsJournalPage", {
          Locked: QM
        }),
        children: [(0, kM.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: jM(aM.translationKey)
        }), (0, kM.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [jM(Zi[PM]), " \xb7 ", jM("plotsGame:journalBlocks", {
            blocks: String(nM)
          })]
        }), (0, kM.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [tM.map((MM => (0, kM.jsx)("img", {
            className: mM()({
              Shown: MM === rM.id
            }),
            src: Ri[MM],
            alt: "",
            draggable: !1
          }, MM))), "completed" === rM.state && (0, kM.jsx)("span", {
            className: "PlotsJournalStamp",
            children: jM("plotsGame:journalBuilt")
          }), QM && (0, kM.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, kM.jsx)(dM.b, {
              name: "lock"
            })
          })]
        }), null !== rM.note && (0, kM.jsx)("p", {
          className: "PlotsJournalNote",
          children: jM(rM.note)
        }), (0, kM.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === rM.state && (0, kM.jsx)("p", {
            className: "PlotsJournalHint",
            children: jM("plotsGame:journalLocked", {
              name: jM(gM(rM.unlockedBy).displayName.translationKey)
            })
          }), rM.active && (0, kM.jsxs)(kM.Fragment, {
            children: [(0, kM.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: jM("plotsGame:journalBuilding")
            }), (0, kM.jsx)(ti.i, {
              onClick: SM,
              children: jM("plotsGame:journalPutAway")
            })]
          }), !QM && !rM.active && (0, kM.jsx)(LM, {
            onClick: () => {
              OM(rM.id)
            },
            children: jM("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function fi(MM) {
      let {
        className: rM,
        page: iM,
        hidden: OM,
        building: SM,
        journal: jM
      } = MM;
      return (0, kM.jsxs)("div", {
        ref: MM => {
          null !== MM && (MM.inert = OM)
        },
        className: mM()("PlotsJournalSide", rM),
        children: [void 0 !== iM && (0, kM.jsx)(oi, {
          page: iM,
          building: SM,
          onBuild: jM.build,
          onPutAway: jM.putAway
        }), void 0 === iM && (0, kM.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var Yi = iM(2e3);

    function Ni(MM) {
      return Math.cos((0, Yi.l)(MM))
    }

    function Ai(MM) {
      return (0, Yi.J)(Math.acos(er.d.clamp(MM, -1, 1)))
    }

    function xi(MM, rM, iM, OM, SM) {
      const jM = Math.abs(rM - MM),
        aM = (0, Yi.J)(SM / (iM * Math.abs(Math.sin((0, Yi.l)(MM))))),
        PM = 450 * Math.min(1, jM / OM),
        nM = aM > 0 ? 3 * jM / aM : 1 / 0;
      return Math.round(Math.max(120, Math.min(PM, nM)))
    }
    class vi {
      constructor() {
        this.samples = []
      }
      add(MM, rM) {
        for (this.samples.push({
            x: MM,
            at: rM
          }); rM - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const MM = this.samples[0],
          rM = this.samples[this.samples.length - 1];
        return rM.at > MM.at ? (rM.x - MM.x) / (rM.at - MM.at) : 0
      }
    }

    function Fi(MM) {
      return Ai(new DOMMatrixReadOnly(getComputedStyle(MM).transform).m11)
    }

    function Bi(MM, rM) {
      MM.style.transform = `rotateY(${-rM}deg)`, MM.classList.add("Turning")
    }

    function Xi(MM, rM, iM) {
      const [OM, SM] = (0, jM.useState)(iM), aM = (0, jM.useRef)(null), PM = (0, jM.useRef)(null), nM = (0, jM.useRef)({
        Forward: null,
        Back: null
      }), QM = rM ? 2 : 1, zM = rM ? 180 : 90, LM = OM - OM % QM, mM = LM > 0, HM = LM + QM < MM, hM = (0, jM.useCallback)((() => {
        const MM = PM.current;
        return null === MM ? LM : (PM.current = null, MM.animation.cancel(), (rM = nM.current[MM.direction]).style.transform = "", rM.classList.remove("Turning"), null === MM.next ? LM : (SM(MM.next), MM.next));
        var rM
      }), [LM]), JM = (0, jM.useCallback)(((MM, rM, iM, OM) => {
        const SM = nM.current[MM],
          jM = Fi(SM),
          aM = rM === ("Forward" === MM) ? zM : 0;
        Bi(SM, aM);
        const LM = SM.animate([{
          transform: `rotateY(${-jM}deg)`
        }, {
          transform: `rotateY(${-aM}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : xi(jM, aM, SM.offsetWidth, zM, aM > jM ? -iM : iM),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        PM.current = {
          direction: MM,
          animation: LM,
          next: rM ? OM + ("Forward" === MM ? QM : -QM) : null
        }, LM.onfinish = () => {
          var MM;
          (null === (MM = PM.current) || void 0 === MM ? void 0 : MM.animation) === LM && hM()
        }
      }), [QM, zM, hM]), dM = (0, jM.useCallback)((rM => {
        if (null !== aM.current) return;
        const iM = hM();
        ("Forward" === rM ? iM + QM < MM : iM > 0) && JM(rM, !0, 0, iM)
      }), [hM, JM, QM, MM]);
      (0, jM.useEffect)((() => () => {
        var MM;
        null === (MM = PM.current) || void 0 === MM || MM.animation.cancel()
      }), []), (0, jM.useEffect)((() => {
        const MM = MM => {
          var rM;
          MM.pointerId !== (null === (rM = aM.current) || void 0 === rM ? void 0 : rM.pointerId) || aM.current.following || (aM.current = null)
        };
        return window.addEventListener("pointerup", MM), () => {
          window.removeEventListener("pointerup", MM)
        }
      }), []);
      const yM = (MM, rM, iM) => {
          const OM = function(MM, rM, iM, OM) {
            return (MM < 0 ? iM : OM) ? er.d.clampAbs(MM, rM) : Math.sign(MM) * rM * (1 - 1 / (.55 * Math.abs(MM) / rM + 1))
          }(MM.base + iM, QM * MM.width, HM, mM);
          return "Forward" === rM ? Math.min(OM, 0) : Math.max(OM, 0)
        },
        lM = (MM, rM) => {
          const iM = aM.current;
          if (aM.current = null, null === iM.direction) return;
          iM.speed.add(MM, rM);
          const OM = iM.speed.get(),
            SM = yM(iM, iM.direction, MM - iM.x);
          JM(iM.direction, null !== function(MM, rM, iM, OM, SM) {
            if (Math.abs(rM) >= .3 ? Math.sign(rM) !== Math.sign(MM) : Math.abs(MM) < .5 * iM) return null;
            const jM = MM < 0 ? "Forward" : "Back";
            return ("Forward" === jM ? OM : SM) ? jM : null
          }(SM, OM, QM * iM.width, HM, mM), OM, LM)
        },
        EM = {
          onPointerDown: MM => {
            var rM;
            if (!MM.isPrimary || 0 !== MM.button || null !== PM.current && null !== MM.target.closest("button")) return;
            const iM = new vi;
            iM.add(MM.clientX, MM.timeStamp);
            const OM = nM.current.Forward.offsetWidth,
              SM = PM.current;
            PM.current = null;
            let jM = 0;
            if (null !== SM) {
              const rM = nM.current[SM.direction],
                iM = Fi(rM);
              SM.animation.cancel(), Bi(rM, iM), jM = function(MM, rM, iM, OM) {
                return (MM < 0 ? iM : OM) ? MM : Math.sign(MM) * rM * (1 / (1 - Math.min(Math.abs(MM) / rM, .99)) - 1) / .55
              }(function(MM, rM, iM, OM) {
                return iM * (Ni(rM) - Ni("Forward" === MM ? 0 : OM))
              }(SM.direction, iM, OM, zM), QM * OM, HM, mM), MM.currentTarget.setPointerCapture(MM.pointerId)
            }
            aM.current = {
              pointerId: MM.pointerId,
              x: MM.clientX,
              y: MM.clientY,
              base: jM,
              width: OM,
              following: null !== SM,
              direction: null !== (rM = null === SM || void 0 === SM ? void 0 : SM.direction) && void 0 !== rM ? rM : null,
              speed: iM
            }
          },
          onPointerMove: MM => {
            const rM = aM.current;
            if (null === rM || MM.pointerId !== rM.pointerId) return;
            if (0 === MM.buttons) return void lM(MM.clientX, MM.timeStamp);
            const iM = MM.clientX - rM.x;
            !rM.following && function(MM, rM) {
              return Math.abs(MM) > 8 && Math.abs(MM) > Math.abs(rM)
            }(iM, MM.clientY - rM.y) && (rM.following = !0, rM.direction = iM < 0 ? "Forward" : "Back", MM.currentTarget.setPointerCapture(MM.pointerId)), null !== rM.direction && (rM.speed.add(MM.clientX, MM.timeStamp), Bi(nM.current[rM.direction], function(MM, rM, iM, OM) {
              const SM = iM * Ni("Forward" === MM ? 0 : OM) + rM;
              return er.d.clamp(Ai(SM / iM), 0, OM)
            }(rM.direction, yM(rM, rM.direction, iM), rM.width, zM)))
          },
          onPointerUp: MM => {
            var rM;
            MM.pointerId === (null === (rM = aM.current) || void 0 === rM ? void 0 : rM.pointerId) && lM(MM.clientX, MM.timeStamp)
          },
          onPointerCancel: MM => {
            const rM = aM.current;
            MM.pointerId === (null === rM || void 0 === rM ? void 0 : rM.pointerId) && (aM.current = null, null !== rM.direction && JM(rM.direction, !1, 0, LM))
          }
        };
      return {
        first: LM,
        step: QM,
        canGoBack: mM,
        canGoForward: HM,
        turnPage: dM,
        leaves: nM,
        pagesHandlers: EM
      }
    }

    function Ii(MM, rM) {
      return MM > rM && MM >= 600
    }

    function Ki(MM) {
      let {
        journal: rM,
        hud: iM,
        guide: OM
      } = MM;
      const {
        t: SM
      } = (0, zM.A)(), PM = (0, nM.e)(sM, rM.getPages()), QM = (0, nM.e)(ir, iM.getGuide()), LM = PM.find((MM => MM.active)), HM = (hM = QM, JM = void 0 === LM ? null : LM.id, "active" === hM[0] && null === JM);
      var hM, JM;
      const dM = (0, ui.k)(Ii),
        {
          first: yM,
          step: lM,
          canGoBack: GM,
          canGoForward: CM,
          turnPage: eM,
          leaves: bM,
          pagesHandlers: wM
        } = Xi(PM.length, dM, (() => function(MM) {
          const rM = MM.findIndex((MM => MM.active));
          return -1 !== rM ? rM : Math.max(0, MM.findIndex((MM => "open" === MM.state)))
        }(PM)));
      (0, jM.useEffect)((() => {
        rM.onOpened()
      }), [rM]), (0, EM.d)((MM => !HM && ("ArrowLeft" === MM.code || "ArrowRight" === MM.code) && !(0, UM.isTypingInInput)()), (MM => {
        MM.stopPropagation(), eM("ArrowLeft" === MM.code ? "Back" : "Forward")
      }));
      const tM = void 0 !== LM,
        gM = (MM, iM, OM) => (0, kM.jsx)(fi, {
          className: MM,
          page: iM >= 0 && iM < PM.length ? PM[iM] : void 0,
          hidden: OM,
          building: tM,
          journal: rM
        });
      return (0, kM.jsx)(gi.e, {
        close: aM.n,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, kM.jsxs)("section", {
          className: mM()("PlotsJournal", {
            Spread: dM
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": SM("plotsGame:journalTitle"),
          children: [(0, kM.jsx)(ti.l, {
            className: "PlotsJournalClose",
            onClick: aM.n
          }), "active" === QM[0] && (0, kM.jsx)(Qr, {
            className: "PlotsJournalGuideSkip",
            onSkip: OM.skip
          }), HM && (0, kM.jsx)(Di, {
            onBuild: rM.build
          }), !HM && (0, kM.jsx)(ki, {
            direction: "Back",
            disabled: !GM,
            onTurn: eM
          }), (0, kM.jsx)("div", {
            hidden: HM,
            className: "PlotsJournalBookPages",
            ...wM,
            children: (0, kM.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [dM && gM("Left", yM - 2, !0), gM("Right", yM + 2 * lM - 1, !0), (0, kM.jsxs)("div", {
                ref: MM => {
                  bM.current.Back = MM
                },
                className: "PlotsJournalLeaf Back",
                children: [gM("Recto", yM - 1, !0), dM && gM("Verso", yM, !1)]
              }), (0, kM.jsxs)("div", {
                ref: MM => {
                  bM.current.Forward = MM
                },
                className: "PlotsJournalLeaf Forward",
                children: [gM("Recto", yM + lM - 1, !1), dM && gM("Verso", yM + lM, !0)]
              })]
            })
          }), !HM && (0, kM.jsx)(ki, {
            direction: "Forward",
            disabled: !CM,
            onTurn: eM
          })]
        })
      })
    }

    function qi(MM, rM, iM, OM, SM) {
      const jM = Math.hypot(...rM.dir);
      if (!Number.isFinite(jM) || 0 === jM) return -1;
      const {
        from: aM,
        reach: PM,
        solid: nM
      } = rM, QM = [rM.dir[0] / jM, rM.dir[1] / jM, rM.dir[2] / jM], zM = null === nM ? PM : Math.min(PM, function(MM, rM, iM) {
        const OM = Ti(MM, rM, iM);
        if (OM !== 1 / 0) return OM;
        return (iM[0] + .5 - MM[0]) * rM[0] + (iM[1] + .5 - MM[1]) * rM[1] + (iM[2] + .5 - MM[2]) * rM[2]
      }(aM, QM, nM) + .75);
      let LM = -1,
        mM = 1 / 0,
        HM = 1 / 0;
      for (let hM = 0; hM < MM.length; hM += 4) {
        const rM = [MM[hM], MM[hM + 1], MM[hM + 2]],
          jM = SM(hM) ? PM : zM;
        let nM = -1,
          JM = Ti(aM, QM, rM);
        if (JM > jM) {
          const MM = [rM[0] + .5 - aM[0], rM[1] + .5 - aM[1], rM[2] + .5 - aM[2]];
          if (JM = MM[0] * QM[0] + MM[1] * QM[1] + MM[2] * QM[2], JM <= 0 || JM > jM) continue;
          if (nM = Math.hypot(MM[0] - JM * QM[0], MM[1] - JM * QM[1], MM[2] - JM * QM[2]), nM > .7 || !OM(hM)) continue
        }(nM < mM || nM === mM && JM < HM) && iM(hM) && (LM = hM, mM = nM, HM = JM)
      }
      return LM
    }

    function Ti(MM, rM, iM) {
      let OM = 0,
        SM = 1 / 0;
      for (let jM = 0; jM < 3; jM++) {
        const aM = iM[jM] - MM[jM];
        if (0 === rM[jM]) {
          if (aM > 0 || aM + 1 < 0) return 1 / 0;
          continue
        }
        const PM = aM / rM[jM],
          nM = (aM + 1) / rM[jM];
        OM = Math.max(OM, Math.min(PM, nM)), SM = Math.min(SM, Math.max(PM, nM))
      }
      return OM <= SM ? OM : 1 / 0
    }
    var Vi = iM(37833),
      ci = iM(39040);
    const MO = [1, 1, 1];
    class rO {
      constructor(MM) {
        this.api = MM, this.meshes = null, this.shown = null
      }
      show(MM) {
        if (!(0, Vi.d)(MM, this.shown))
          if (this.shown = null === MM ? null : [MM[0], MM[1], MM[2]], null !== this.meshes)
            for (const rM of this.meshes) this.api.setGameMesh(rM, null === MM ? {
              visible: !1
            } : {
              anchor: MM,
              visible: !0
            });
          else if (null !== MM) {
          const rM = [ci.g, ci.g, ci.g, 0, 0, 0];
          this.meshes = [this.build([rM], ci.i, MM), this.build((0, ci.d)(), ci.l, MM)]
        }
      }
      dispose() {
        for (const rM of null !== (MM = this.meshes) && void 0 !== MM ? MM : []) {
          var MM;
          this.api.disposeGameMesh(rM)
        }
        this.meshes = null, this.shown = null
      }
      build(MM, rM, iM) {
        const OM = [],
          SM = [];
        for (const [jM, aM, PM, nM, QM, zM] of MM)(0, Ir.d)(OM, SM, [nM + .5, QM + .5, zM + .5], [jM, aM, PM]);
        return this.api.createGameMesh({
          positions: OM,
          indices: SM
        }, {
          rgb: MO,
          alpha: rM,
          onTop: !0
        }, iM)
      }
    }

    function iO(MM, rM) {
      const iM = Br.f.Sy / 2;
      return MM[0] < rM[0] + iM && MM[0] + 1 > rM[0] - iM && MM[1] < rM[1] + Br.f.jy && MM[1] + 1 > rM[1] && MM[2] < rM[2] + iM && MM[2] + 1 > rM[2] - iM
    }

    function OO(MM, rM) {
      return MM.getClientOption(rM, "blockReach") + 1
    }
    class SO {
      constructor(MM, rM, iM) {
        this.api = MM, this.localPlayerId = rM, this.foreseen = iM, this.cells = [], this.playerCells = [], this.next = null
      }
      get() {
        return this.next
      }
      setCells(MM) {
        this.cells = MM
      }
      playerMoved() {
        return jO(this.api.getPositionView(this.localPlayerId)).some(((MM, rM) => MM !== this.playerCells[rM]))
      }
      LH(MM) {
        const rM = this.api.getPositionView(this.localPlayerId);
        return this.playerCells.splice(0, 1 / 0, ...jO(rM)), this.next = this.pickFrom(null === MM ? [rM[0], rM[1] + 1, rM[2]] : (0, Vi.c)(MM), (() => !1)), this.next
      }
      pickFrom(MM, rM) {
        const iM = this.api.getPositionView(this.localPlayerId),
          OM = [iM[0], iM[1] + Br.f.jy * Br.f.playerEyeToHeightRatio, iM[2]],
          SM = OO(this.api, this.localPlayerId),
          {
            cells: jM
          } = this,
          aM = MM => [jM[MM], jM[MM + 1], jM[MM + 2]],
          PM = function(MM, rM, iM, OM, SM, jM) {
            let aM = -1,
              PM = -1,
              nM = 1 / 0;
            for (let QM = 0; QM < MM.length; QM += rM) {
              const rM = (jM(QM) ? 2 : 0) + (OM(QM) ? 1 : 0);
              if (rM < PM || SM(QM)) continue;
              const zM = (MM[QM] + .5 - iM[0]) ** 2 + (MM[QM + 1] + .5 - iM[1]) ** 2 + (MM[QM + 2] + .5 - iM[2]) ** 2;
              (rM > PM || zM < nM) && (aM = QM, PM = rM, nM = zM)
            }
            return aM
          }(jM, 4, MM, (MM => 1 === jM[MM + 3]), (MM => {
            const OM = aM(MM);
            return iO(OM, iM) || this.foreseen.has(OM.join()) || rM(OM)
          }), (MM => function(MM, rM, iM) {
            return (rM[0] + .5 - MM[0]) ** 2 + (rM[1] + .5 - MM[1]) ** 2 + (rM[2] + .5 - MM[2]) ** 2 <= iM ** 2
          }(OM, aM(MM), SM)));
        return -1 === PM ? null : aM(PM)
      }
    }

    function jO(MM) {
      let [rM, iM, OM] = MM;
      const SM = Br.f.Sy / 2;
      return [Math.floor(rM), Math.floor(iM), Math.floor(OM), Math.floor(rM - SM), Math.floor(rM + SM), Math.floor(iM + Br.f.jy), Math.floor(OM - SM), Math.floor(OM + SM)]
    }
    class aO {
      constructor(MM, rM, iM) {
        this.api = MM, this.localPlayerId = rM, this.pickNext = iM, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(MM) {
        const [rM, , iM] = MM.cameraDirection, OM = Math.hypot(rM, iM);
        OM > .001 && (this.heading = [rM / OM, iM / OM])
      }
      tapped(MM, rM, iM) {
        const OM = OO(this.api, this.localPlayerId),
          {
            origin: SM,
            direction: jM
          } = this.api.getActionRay(),
          aM = [...SM],
          PM = [
            [aM, [aM[0] + jM[0] * OM, aM[1] + jM[1] * OM, aM[2] + jM[2] * OM]]
          ];
        null !== MM && PM.push([aM, (0, Vi.c)(MM)]), this.tap = {
          lines: PM,
          next: rM,
          ms: iM
        }
      }
      filled(MM, rM) {
        this.tap = null, this.turnFrom(MM, rM), this.retry(rM)
      }
      arrived(MM, rM) {
        const {
          tap: iM
        } = this;
        if (null === iM || rM - iM.ms > 1500) return null;
        const OM = (0, Vi.c)(MM);
        return (0, Vi.d)(iM.next, MM) || iM.lines.some((MM => {
          let [rM, iM] = MM;
          return function(MM, rM, iM) {
            const OM = [iM[0] - rM[0], iM[1] - rM[1], iM[2] - rM[2]],
              SM = [MM[0] - rM[0], MM[1] - rM[1], MM[2] - rM[2]],
              jM = OM[0] ** 2 + OM[1] ** 2 + OM[2] ** 2,
              aM = 0 === jM ? 0 : Math.min(1, Math.max(0, (SM[0] * OM[0] + SM[1] * OM[1] + SM[2] * OM[2]) / jM));
            return Math.hypot(SM[0] - OM[0] * aM, SM[1] - OM[1] * aM, SM[2] - OM[2] * aM)
          }(OM, rM, iM) <= .9
        })) ? (this.tap = null, this.turnFrom(MM, rM), iM.ms) : null
      }
      turnFrom(MM, rM) {
        this.pending = {
          from: MM,
          ms: rM,
          turnMs: Math.max(50, Math.min(250, rM - this.lastFillMs))
        }, this.lastFillMs = rM
      }
      retry(MM) {
        const {
          pending: rM
        } = this;
        if (null === rM) return;
        if (MM - rM.ms > 1500) return void(this.pending = null);
        const iM = this.pickNext((0, Vi.c)(rM.from), (MM => (0, Vi.d)(MM, rM.from)));
        if (null === iM) return;
        this.pending = null;
        const {
          turning: OM
        } = this;
        if (null !== OM && MM < OM.endMs && (0, Vi.d)(OM.to, iM)) return;
        const SM = this.api.getActionRay().origin,
          jM = [iM[0] + .5 - SM[0], iM[1] + .5 - SM[1], iM[2] + .5 - SM[2]],
          aM = Math.hypot(jM[0], jM[2]);
        if (aM < .3) {
          const MM = Math.max(aM, .001);
          jM[0] = this.heading[0] * MM, jM[2] = this.heading[1] * MM
        }
        this.api.turnCamera(jM, rM.turnMs), this.turning = {
          to: iM,
          endMs: MM + rM.turnMs
        }
      }
    }
    class PO {
      constructor(MM, rM, iM, OM) {
        this.api = MM, this.localPlayerId = rM, this.juice = iM, this.tracker = OM, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.lastFilled = null, this.lastSeenFilled = null, this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = void 0, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new Xr(MM), this.meshes = new Mi(MM), this.outline = new rO(MM), this.nextCell = new SO(MM, rM, this.foreseen), this.turn = new aO(MM, rM, ((MM, rM) => this.nextCell.pickFrom(MM, rM)))
      }
      GL(MM) {
        const rM = "active" === MM[0] ? `${MM[1]}|${MM[3]}|${MM[4]}|${MM[5]}|${MM[6]}` : "";
        if ("active" !== MM[0]) "built" === MM[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , iM, OM, SM, jM] = MM;
          rM !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = iM) : iM === this.layerY ? this.burstUnlisted(OM) : iM > this.layerY && this.finishLayer(iM), this.layerY = iM, this.layerCells.has(iM) || this.layerCells.set(iM, OM.filter(nO)), this.ghostCells = OM, this.palette = SM, this.occupiedCells = jM
        }
        rM !== this.blueprint && (this.tracker.show("active" === MM[0] && MM[2] ? {
          id: MM[1],
          y: MM[4]
        } : null), this.blueprint = rM, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((MM => this.api.blockNameToBlockId(MM))), this.chunkWatch.watch([...this.ghostCells.filter(nO), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(MM) {
        this.burstUnlisted([]), MM > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = MM)
      }
      bL() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const MM = performance.now();
        let rM = !1;
        for (const [OM, SM] of this.foreseen) {
          var iM;
          if (MM - SM > 1e3) this.foreseen.delete(OM), rM = !0, (null === (iM = this.lastFilled) || void 0 === iM ? void 0 : iM.join()) === OM && (this.lastFilled = this.lastSeenFilled)
        }(rM || this.nextCell.playerMoved()) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(MM) {
        const rM = new Set;
        for (let SM = 0; SM < MM.length; SM += 4) rM.add(`${MM[SM]},${MM[SM+1]},${MM[SM+2]}`);
        const iM = [],
          {
            ghostCells: OM
          } = this;
        for (let SM = 0; SM < OM.length; SM += 4) {
          const MM = `${OM[SM]},${OM[SM+1]},${OM[SM+2]}`;
          !rM.has(MM) && this.open.delete(MM) && iM.push(this.filledCell(SM))
        }
        this.burst(iM)
      }
      refresh() {
        const {
          ghostCells: MM,
          palette: rM,
          occupiedCells: iM
        } = this, OM = new cr, SM = new Set, jM = [], aM = [];
        let PM = 0;
        for (let nM = 0; nM < MM.length; nM += 4) {
          const [iM, QM, zM, LM] = [MM[nM], MM[nM + 1], MM[nM + 2], MM[nM + 3]], mM = this.api.getBlockId(iM, QM, zM), HM = `${iM},${QM},${zM}`, hM = sr(this.blockIds[LM], mM);
          !hM && Dr(mM) ? OM.add(iM, QM, zM, Zr(rM[LM]), qr, Fr(rM[LM])) : hM ? this.open.has(HM) && jM.push(this.filledCell(nM)) : OM.add(iM, QM, zM, Vr, Tr), hM || PM++, !hM && this.api.isBlockInLoadedChunk(iM, QM, zM) && (SM.add(HM), aM.push(iM, QM, zM, Dr(mM) ? 0 : 1))
        }
        this.open = SM, this.nextCell.setCells(aM), this.tracker.update(this.layerY, this.topLayerY, PM);
        for (let nM = 0; nM < iM.length; nM += 3) {
          const [MM, rM, SM] = [iM[nM], iM[nM + 1], iM[nM + 2]];
          Dr(this.api.getBlockId(MM, rM, SM)) || OM.add(MM, rM, SM, Vr, Tr)
        }
        this.meshes.show(OM.toArray()), this.burst(jM), this.showNext(), this.turn.retry(performance.now())
      }
      burst(MM) {
        const rM = performance.now(),
          iM = [];
        for (const [SM, jM, aM] of MM) {
          const MM = [SM, jM, aM];
          this.lastSeenFilled = MM, this.foreseen.delete(MM.join()) || iM.push(MM)
        }
        const OM = this.isHolding(rM);
        for (const SM of iM) {
          if (this.lastFilled = SM, OM && this.pressFilled) {
            this.turn.filled(SM, rM);
            continue
          }
          const MM = this.turn.arrived(SM, rM);
          if (null !== MM) {
            this.pressFilled = OM;
            for (const [rM, iM] of this.foreseen) iM <= MM && this.foreseen.delete(rM)
          }
        }
        this.juice.filled(MM)
      }
      showNext() {
        var MM;
        this.outline.show(null !== (MM = this.aimed) && void 0 !== MM ? MM : this.nextCell.LH(this.lastFilled))
      }
      afterRender(MM) {
        var rM;
        this.turn.look(MM);
        const iM = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === iM ? null : iM.position), this.outline.show(null !== (rM = this.aimed) && void 0 !== rM ? rM : this.nextCell.get())
      }
      isHolding(MM) {
        return null !== this.altMs && MM - this.altMs <= 500
      }
      attemptAltAction(MM) {
        const rM = performance.now();
        if (this.isHolding(rM) || (this.pressFilled = !1), this.altMs = rM, this.pressFilled) return "preventPlacement";
        const iM = this.findAimed(MM);
        if (null !== iM) return this.foreseen.set(iM.join(), rM), this.lastFilled = iM, this.aimed = null, this.showNext(), this.turn.filled(iM, rM), this.pressFilled = !0, "preventPlacement";
        {
          const iM = this.nextCell.get();
          null !== iM && this.turn.tapped(MM, iM, rM)
        }
      }
      holdPressOnEntity() {
        const MM = performance.now();
        this.pressFilled && this.isHolding(MM) && (this.altMs = MM)
      }
      findAimed(MM) {
        return function(MM, rM, iM, OM, SM, jM, aM) {
          const PM = MM.TrM(rM),
            nM = null === PM || null === MM.blockNameToBlockId(PM.name, !0) ? null : PM.name,
            QM = MM.getPositionView(rM),
            {
              origin: zM,
              direction: LM
            } = MM.getActionRay(),
            mM = qi(OM, {
              from: zM,
              dir: LM,
              reach: OO(MM, rM),
              solid: iM
            }, (rM => {
              const iM = [OM[rM], OM[rM + 1], OM[rM + 2]];
              return !sr(SM[OM[rM + 3]], MM.getBlockId(...iM)) && !aM.has(iM.join()) && MM.isBlockInLoadedChunk(...iM) && !iO(iM, QM)
            }), (MM => null === nM || nM === kr(SM[OM[MM + 3]])), (MM => null !== jM && OM[MM] === jM[0] && OM[MM + 1] === jM[1] && OM[MM + 2] === jM[2]));
          return -1 === mM ? null : [OM[mM], OM[mM + 1], OM[mM + 2]]
        }(this.api, this.localPlayerId, MM, this.ghostCells, this.blockIds, this.nextCell.get(), this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(MM) {
        const {
          ghostCells: rM
        } = this, [iM, OM, SM] = Zr(this.palette[rM[MM + 3]]);
        return [rM[MM], rM[MM + 1], rM[MM + 2], iM, OM, SM]
      }
    }

    function nO(MM, rM) {
      return rM % 4 !== 3
    }
    class QO {
      constructor(MM) {
        this.api = MM, this.sent = !1
      }
      bL() {
        this.sent || PM.d.get("loadingOverlayVisible") || (this.sent = !0, this.api.sendCommand("plotsentered"))
      }
    }
    var zO = iM(4577),
      LO = iM(40215);

    function mO(MM, rM, iM) {
      const OM = [255 * MM, 255 * rM, 255 * iM],
        [SM, jM, aM] = OM.map((MM => MM + .4 * (255 - MM)));
      return {
        texture: "square_particle",
        vL: 48,
        minLifeTime: .3 / LO.e,
        maxLifeTime: .55 / LO.e,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * LO.e * LO.e, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...OM, 1],
          maxColor: [SM, jM, aM, 1]
        }, {
          timeFraction: 1,
          minColor: [...OM, 0],
          maxColor: [SM, jM, aM, 0]
        }],
        blendMode: zO.d.Standard
      }
    }
    const HO = {
      texture: "glint",
      mipmaps: !1,
      vL: 96,
      minLifeTime: .5 / LO.e,
      maxLifeTime: .9 / LO.e,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * LO.e * LO.e, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: zO.d.OneOne
    };
    class hO {
      constructor(MM, rM) {
        this.api = MM, this.localPlayerId = rM, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(MM) {
        if (this.api.particlesEnabled())
          for (const [rM, iM, OM, SM, jM, aM] of MM.slice(0, 3)) {
            const MM = `${SM},${jM},${aM}`;
            let PM = this.chips.get(MM);
            void 0 === PM && (PM = this.api.createParticles(mO(SM, jM, aM), {
              pos: [rM + .5, iM + .5, OM + .5]
            }), this.chips.set(MM, PM));
            for (let rM = 0; rM < 8; rM++) this.setPoint(rM, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            PM.emitPoints([rM + .5, iM + .5, OM + .5], this.points, 8)
          }
      }
      layerDone(MM) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const rM = MM.length / 3;
        if (0 === rM || !this.api.particlesEnabled()) return;
        const iM = Math.min(rM, 48),
          [OM, SM, jM] = [MM[0] + .5, MM[1] + 1, MM[2] + .5];
        let aM = 0;
        for (let PM = 0; PM < iM; PM++) {
          const nM = 3 * Math.floor(PM * rM / iM);
          for (let rM = 0; rM < 2; rM++) this.setPoint(aM++, MM[nM] + Math.random() - OM, MM[nM + 1] + 1 - SM, MM[nM + 2] + Math.random() - jM, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(HO, {
          pos: [OM, SM, jM]
        }), this.sparkles.emitPoints([OM, SM, jM], this.points, aM)
      }
      dispose() {
        var MM;
        for (const rM of this.chips.values()) rM.stop();
        this.chips.clear(), null === (MM = this.sparkles) || void 0 === MM || MM.stop(), this.sparkles = null
      }
      setPoint(MM, rM, iM, OM, SM) {
        const jM = 4 * MM;
        this.points[jM] = rM, this.points[jM + 1] = iM, this.points[jM + 2] = OM, this.points[jM + 3] = SM
      }
    }
    const JO = "SpecialAction1",
      dO = "KeyY",
      yO = "KeyX";

    function lO(MM) {
      let {
        placement: rM
      } = MM;
      const iM = (0, nM.e)(ni, rM.getView()),
        {
          t: OM
        } = (0, zM.A)(),
        {
          isTouchScreen: SM
        } = (0, PM.m)(["isTouchScreen"]),
        aM = (0, jM.useContext)(CM),
        LM = null !== iM,
        hM = LM && !iM.blocked && !iM.waiting;
      if ((0, EM.d)((MM => LM && !MM.repeat && !(0, UM.isTypingInInput)() && !(0, HM.r)() && !SM), (MM => {
          const iM = function(MM, rM, iM) {
            if (MM === yO) return rM.stop;
            if (MM === dO) return iM ? rM.build : UO;
            return QM.v[JO].includes(MM) ? rM.rotate : null
          }(MM.code, rM, hM);
          null !== iM && (MM.stopPropagation(), iM())
        })), !LM) return null;
      let dM = SM ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return iM.blocked ? dM = "plotsGame:placementOffPlot" : iM.toClear > 0 ? dM = "plotsGame:placementClear" : "placeSpot" !== aM.hint && "placeBuild" !== aM.hint || (dM = null), (0, kM.jsx)(JM.i, {
        placement: "bottom",
        children: (0, kM.jsxs)("div", {
          ref: aM.placementCardRef,
          className: "PlotsPlacementCard",
          children: [(0, kM.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: OM(gM(iM.id).displayName.translationKey)
          }), null !== dM && (0, kM.jsx)("div", {
            className: mM()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: iM.refusals > 0
            }),
            children: OM(dM)
          }, iM.refusals), (0, kM.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, kM.jsxs)(ti.e, {
              onClick: rM.rotate,
              children: [(0, kM.jsx)(EO, {
                noaAction: JO
              }), OM("plotsGame:placementRotate")]
            }), (0, kM.jsxs)(ti.J, {
              onClick: rM.stop,
              children: [(0, kM.jsx)(EO, {
                keyCode: yO
              }), OM("general:cancel")]
            }), (0, kM.jsx)("span", {
              ref: aM.buildRef,
              className: mM()("PlotsPlacementBuild", {
                Pulse: "placeBuild" === aM.hint && hM && SM
              }),
              children: (0, kM.jsxs)(ti.p, {
                disabled: !hM,
                onClick: rM.build,
                children: [(0, kM.jsx)(EO, {
                  keyCode: dO
                }), OM("plotsGame:placementBuild")]
              })
            })]
          })]
        })
      })
    }

    function EO(MM) {
      return (0, kM.jsx)(lM.d, {
        className: "PlotsPlacementKey",
        ...MM
      })
    }

    function UO() {}
    var GO = iM(2488),
      CO = iM(37629),
      eO = iM(2084),
      bO = iM(1270);
    const wO = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function tO(MM) {
      let {
        hud: rM
      } = MM;
      const iM = (0, nM.e)(rr, rM.getPlot()),
        [OM, SM] = (0, jM.useState)(null),
        aM = (0, CO.h)(OM);
      if ("none" === iM[0]) return null;
      const [, PM, QM, zM, LM, HM] = iM;
      return (0, kM.jsx)("div", {
        className: mM()("PlotsPlotBannerContainer", {
          Below: aM
        }),
        children: (0, kM.jsx)(gO, {
          plotX: PM,
          plotZ: QM,
          ownerName: zM,
          ownerId: LM,
          relation: HM,
          plaqueRef: SM
        }, `${PM},${QM}`)
      })
    }

    function gO(MM) {
      var rM, iM;
      let {
        plotX: OM,
        plotZ: SM,
        ownerName: jM,
        ownerId: aM,
        relation: PM,
        plaqueRef: nM
      } = MM;
      const {
        t: QM
      } = (0, zM.A)(), LM = (0, eO.j)("hiddenPlayerNames"), HM = (0, eO.j)("players"), hM = null === aM ? null : null !== (rM = null === (iM = HM.byId[aM]) || void 0 === iM ? void 0 : iM.cosmetics) && void 0 !== rM ? rM : null, JM = QM("plotsGame:plotBannerCoords", {
        x: OM,
        z: SM
      }), yM = "own" === PM || null !== jM;
      return (0, kM.jsxs)("div", {
        ref: nM,
        className: mM()("PlotsPlotBanner", {
          Own: "own" === PM,
          Shared: "shared" === PM
        }),
        role: "status",
        children: [(0, kM.jsxs)("span", {
          className: mM()("PlotsPlotBannerSeal", {
            Face: null !== hM
          }),
          children: [null !== hM && (0, kM.jsx)(GO.c, {
            cosmetics: hM
          }), null === hM && (0, kM.jsx)(dM.b, {
            name: wO[PM]
          })]
        }), (0, kM.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, kM.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === PM && QM("plotsGame:plotBannerYours"), "own" !== PM && null !== jM && QM("plotsGame:plotBannerOwner", {
              name: (0, bO.d)(jM, LM)
            }), !yM && JM]
          }), yM && (0, kM.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [JM, "shared" === PM && (0, kM.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: QM("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }
    const uO = function(MM, rM, iM, OM) {
      let {
        localPlayerId: SM
      } = OM;
      const PM = new Sr;
      let nM = null,
        QM = null,
        zM = null,
        LM = null,
        mM = null,
        HM = null;
      const hM = [];
      return {
        onCreate: MM => {
          nM = new hO(MM, SM);
          const rM = new Mr;
          QM = new PO(MM, SM, nM, rM), zM = new zi(MM, SM), LM = new DM(MM, zM), mM = new wi(MM, SM, QM.nextCell), HM = new QO(MM), hM.push((0, aM.C)((0, jM.createElement)(Ci, {
            hud: PM,
            guide: mM,
            tracker: rM,
            placement: zM
          }, (0, jM.createElement)(tO, {
            hud: PM
          }), (0, jM.createElement)(oM, {
            journal: LM
          }), (0, jM.createElement)(yi, {
            placement: zM
          }), (0, jM.createElement)(lO, {
            placement: zM
          })), {
            content: (0, jM.createElement)(Ki, {
              journal: LM,
              hud: PM,
              guide: mM
            })
          }))
        },
        bL: () => {
          HM.bL(), QM.bL(), zM.bL(), LM.bL()
        },
        onPlayerAttemptAltAction: (MM, rM, iM, OM, SM, jM) => {
          if (null !== jM) return void QM.holdPressOnEntity();
          const aM = void 0 === rM ? null : [rM, iM, OM];
          return QM.attemptAltAction(aM)
        },
        onPlayerClickUp: () => {
          QM.endPress()
        },
        onAfterRender: (MM, rM) => {
          zM.afterRender(rM), QM.afterRender(rM), mM.afterRender(rM)
        },
        onClose: () => {
          for (const MM of hM) MM();
          nM.dispose(), QM.dispose(), zM.dispose(), nM = null, QM = null, zM = null, LM = null, mM = null, HM = null
        },
        onReceivedMessageFromServer: (MM, rM) => {
          if ("plotsPlot" === MM) PM.receivePlot(rM);
          else if ("plotsBlueprint" === MM) {
            const MM = rM;
            QM.GL(MM), zM.GL(MM)
          } else "plotsJournal" === MM ? LM.GL(rM) : "plotsJournalOpen" === MM ? LM.openFromServer(rM) : "plotsPreviewEnd" === MM ? zM.endFromServer() : "plotsGuide" === MM ? PM.receiveGuide(rM) : "plotsGuideDone" === MM && PM.receiveGuideDone()
        }
      }
    }
  },
  39499: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => PM
    });
    var OM = iM(39491);
    const SM = 5,
      jM = [0, 0, 0],
      aM = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function PM(MM, rM, iM, PM, nM, QM) {
      let [zM, LM, mM] = PM;
      const HM = (zM + .5 - iM[0]) ** 2 + (LM - iM[1]) ** 2 + (mM + .5 - iM[2]) ** 2;
      let hM = null;
      HM <= QM ** 2 && (jM[0] = zM + .5, jM[1] = LM + nM, jM[2] = mM + .5, hM = rM.projectWorldPosToViewport(jM));
      const JM = null !== hM && hM.x > -SM && hM.x < 100 + SM && hM.y > -SM && hM.y < 100 + SM;
      return (0, OM.e)(MM, !JM), JM ? (aM.x = hM.x, aM.y = hM.y, aM.distSq = HM, aM) : null
    }
  },
  40215: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM,
      i: () => jM
    });
    const OM = 1 / .6,
      SM = {
        kind: "smokePuff"
      };
    class jM {
      constructor(MM, rM, iM) {
        this.style = MM, this.vL = rM, this.half = iM, this.particles = null, this.lastFrame = -1
      }
      emit(MM, rM, iM) {
        let jM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return iM !== this.lastFrame && (this.lastFrame = iM, this.particles || (this.particles = MM.createParticles(function(MM, rM) {
          const [
            [iM, jM, aM],
            [PM, nM, QM]
          ] = MM.colours;
          return {
            texture: MM.soft ? SM : "square_particle",
            vL: rM,
            minLifeTime: MM.life[0] / OM,
            maxLifeTime: MM.life[1] / OM,
            minEmitPower: MM.power[0] * OM,
            maxEmitPower: MM.power[1] * OM,
            minSize: MM.size[0],
            maxSize: MM.size[1],
            emitRate: 0,
            gravity: [0, MM.lift * OM * OM, 0],
            dir1: [-MM.spread, 1, -MM.spread],
            dir2: [MM.spread, 1, MM.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [iM, jM, aM, MM.alpha],
              maxColor: [PM, nM, QM, MM.alpha]
            }, {
              timeFraction: 1,
              minColor: [iM, jM, aM, 0],
              maxColor: [PM, nM, QM, 0]
            }],
            blendMode: MM.blendMode
          }
        }(this.style, this.vL), {
          pos: rM,
          half: this.half
        })), this.particles.moveTo(rM, this.half), this.particles.emit(jM), !0)
      }
      dispose() {
        var MM;
        null === (MM = this.particles) || void 0 === MM || MM.stop(), this.particles = null
      }
    }
  },
  34831: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => aM,
      e: () => PM,
      f: () => nM
    });
    const OM = new Map,
      SM = [];

    function jM() {
      for (const MM of SM) MM()
    }

    function aM(MM) {
      var rM;
      return OM.set(MM, (null !== (rM = OM.get(MM)) && void 0 !== rM ? rM : 0) + 1), jM(), () => {
        const rM = OM.get(MM) - 1;
        0 === rM ? OM.delete(MM) : OM.set(MM, rM), jM()
      }
    }

    function PM() {
      return [...OM.keys()]
    }

    function nM(MM) {
      SM.push(MM)
    }
  },
  39491: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => aM,
      e: () => jM
    });
    const OM = new WeakMap;

    function SM(MM) {
      let rM = OM.get(MM);
      return rM || (rM = {
        hidden: MM.hidden,
        x: NaN,
        y: NaN
      }, OM.set(MM, rM)), rM
    }

    function jM(MM, rM) {
      const iM = SM(MM);
      iM.hidden !== rM && (iM.hidden = rM, MM.hidden = rM)
    }

    function aM(MM, rM, iM) {
      const OM = SM(MM);
      OM.x === rM && OM.y === iM || (OM.x = rM, OM.y = iM, MM.style.translate = `${rM}vw ${iM}vh`)
    }
  },
  37833: (MM, rM, iM) => {
    function OM(MM, rM) {
      return null === MM || null === rM ? MM === rM : MM[0] === rM[0] && MM[1] === rM[1] && MM[2] === rM[2]
    }

    function SM(MM) {
      return [MM[0] + .5, MM[1] + .5, MM[2] + .5]
    }
    iM.d(rM, {
      c: () => SM,
      d: () => OM
    })
  },
  37858: (MM, rM, iM) => {
    function OM(MM) {
      return MM.includes("Leaf Bed")
    }

    function SM(MM) {
      return / Bed(?: Head)?(?:\||$)/.test(MM) && !OM(MM)
    }

    function jM(MM) {
      return MM.includes(" Strongbed")
    }

    function aM(MM) {
      return OM(MM) || SM(MM) || jM(MM)
    }
    iM.d(rM, {
      e: () => aM,
      g: () => OM,
      h: () => jM,
      l: () => SM
    })
  },
  37855: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => QM
    });
    var OM = iM(37858),
      SM = iM(9816);
    const jM = [],
      aM = [],
      PM = [],
      nM = [];
    for (const zM of Object.keys(SM.p))(0, OM.g)(zM) ? jM.push(zM) : (0, OM.l)(zM) && aM.push(zM), (0, OM.h)(zM) && PM.push(zM), (zM.includes(" Bed Head") || zM.includes(" Strongbed Head")) && nM.push(zM);
    const QM = {
      leafBeds: jM,
      woolBeds: aM,
      strongBeds: PM,
      beds: [...jM, ...aM, ...PM],
      bedHeads: nM,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  39558: MM => {
    MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYUlEQVR4nGNgIBP8R8NYwX+GDVNRMQOm4v8MC9qxYwZUxf//b+T4//8A+///51khGMTeyIGp8Nz0gv8MDoFgGsbeUB2BXeHESHcUjFNhR4Dj/zp3OzAGsbEphHgIOyYNAACzzGY5JF2GbAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);