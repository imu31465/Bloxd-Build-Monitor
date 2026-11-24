export const id = 22;
export const ids = [22];
export const modules = {
  36677: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => sB,
      e: () => JB,
      g: () => rB,
      h: () => pB
    });
    var QB = zB(34242),
      nB = zB(36682),
      dB = zB(36687),
      IB = zB(8722),
      NB = zB(1471),
      uB = zB(62),
      UB = zB(83),
      aB = zB(1148);

    function pB() {
      var BB;
      return (0, NB.h)(nB.c, (0, nB.n)()), (0, aB.jsx)(aB.Fragment, {
        children: null === (BB = (0, nB.n)()) || void 0 === BB ? void 0 : BB.content
      })
    }

    function rB(BB) {
      var jB;
      let {
        show: zB
      } = BB;
      (0, NB.h)(nB.c, (0, nB.n)());
      const UB = null === (jB = (0, nB.n)()) || void 0 === jB ? void 0 : jB.menu;
      return (0, uB.useEffect)((() => {
        var BB;
        zB || (null === UB || void 0 === UB || null === (BB = UB.onClose) || void 0 === BB || BB.call(UB), (0, dB.n)())
      }), [zB, UB]), (0, uB.useEffect)((() => zB ? (0, IB.f)(dB.w, dB.f) : void 0), [zB]), (0, aB.jsx)(QB.b, {
        showing: zB,
        globallyUniqueKey: "clientGameMenu",
        children: null === UB || void 0 === UB ? void 0 : UB.content
      })
    }

    function sB(BB) {
      let {
        placement: jB = "bottom"
      } = BB;
      return (0, aB.jsx)("div", {
        id: `clientGameHud-${jB}`,
        style: {
          display: "contents"
        }
      })
    }

    function JB(BB) {
      let {
        children: jB,
        placement: zB = "bottom"
      } = BB;
      const [QB, nB] = (0, uB.useState)(null);
      return (0, uB.useEffect)((() => {
        nB(document.getElementById(`clientGameHud-${zB}`))
      }), [zB]), QB ? (0, UB.createPortal)(jB, QB) : null
    }
  },
  34242: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => dB
    });
    var QB = zB(4657),
      nB = zB(4664);

    function dB(BB) {
      let {
        children: jB,
        showing: zB,
        globallyUniqueKey: dB,
        alwaysMountChildren: IB = !1,
        doGameplayStartStopOnShow: NB = !0,
        keepsMovement: uB = !1
      } = BB;
      return (0, nB.c)(!0, zB, dB, uB), (0, QB.d)(NB, zB), zB || IB ? jB : null
    }
  },
  36762: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => dB,
      h: () => IB,
      l: () => NB,
      o: () => uB
    });
    var QB = zB(62),
      nB = zB(3219);
    const dB = 8,
      IB = "InGameHeaderContainer",
      NB = "TopRightElements";

    function uB(BB) {
      const [jB] = (0, nB.d)(), [zB, uB] = (0, QB.useState)(!1);
      return (0, QB.useLayoutEffect)((() => {
        if (!BB) return;
        const jB = document.querySelector(`.${IB}`),
          zB = document.querySelector(`.${NB}`),
          QB = () => {
            const QB = BB.getBoundingClientRect(),
              nB = jB ? jB.getBoundingClientRect().right : 0,
              IB = zB ? zB.getBoundingClientRect().left : window.innerWidth,
              NB = QB.left < nB + dB,
              UB = QB.right > IB - dB;
            uB(NB || UB)
          };
        QB();
        const nB = new ResizeObserver(QB);
        return nB.observe(BB), jB && nB.observe(jB), zB && nB.observe(zB), () => {
          nB.disconnect()
        }
      }), [BB, jB]), zB
    }
  },
  8722: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB,
      f: () => nB
    });
    let QB = null;
    const nB = function(BB) {
        const jB = {
          cycle: BB,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return QB = jB, () => {
          QB === jB && (QB = null)
        }
      },
      dB = () => {
        var BB;
        return null !== (BB = QB) && void 0 !== BB && BB.canCycle() ? QB.cycle : null
      }
  },
  38605: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => IB,
      g: () => NB,
      j: () => uB
    });
    const QB = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      nB = [0, 1, 2, 0, 2, 3],
      dB = [4, 5];

    function IB(BB, jB, zB, QB, nB) {
      for (let IB = 0; IB < 6; IB++) dB.includes(IB) === nB && UB(BB, jB, zB, QB, IB)
    }

    function NB(BB, jB, zB, QB) {
      for (let nB = 0; nB < 6; nB++) UB(BB, jB, zB, QB, nB)
    }

    function uB(BB, jB, zB, dB, IB) {
      for (let NB = 0; NB < 6; NB++)
        for (const uB of [0, 1]) {
          const [UB, aB, pB] = [uB + 2, uB + 1, (uB + 3) % 4], rB = BB.length / 3;
          for (const [jB, nB] of [
              [uB, aB],
              [UB, aB],
              [UB, pB],
              [uB, pB]
            ])
            for (let uB = 0; uB < 3; uB++) {
              const UB = QB[3 * (4 * NB + jB) + uB],
                aB = QB[3 * (4 * NB + nB) + uB];
              BB.push((UB + (aB - UB) * IB) * dB / 2 + zB[uB])
            }
          for (const BB of nB) jB.push(rB + BB)
        }
    }

    function UB(BB, jB, zB, dB, IB) {
      let [NB, uB, UB] = zB, [aB, pB, rB] = dB;
      const sB = BB.length / 3;
      for (let nB = 4 * IB; nB < 4 * IB + 4; nB++) BB.push(QB[3 * nB] * aB / 2 + NB, QB[3 * nB + 1] * pB / 2 + uB, QB[3 * nB + 2] * rB / 2 + UB);
      for (const QB of nB) jB.push(sB + QB)
    }
  },
  39545: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      default: () => iQ
    });
    const QB = [0, 90, 180, 270],
      nB = "plotsblueprint";
    var dB = zB(62),
      IB = zB(36682),
      NB = zB(28),
      uB = zB(1471),
      UB = zB(2033),
      aB = zB(1240),
      pB = zB(1091),
      rB = zB.n(pB),
      sB = zB(1664),
      JB = zB(36677),
      mB = zB(1108),
      yB = zB(1971),
      kB = zB(2027),
      GB = zB(3525),
      LB = zB(1778);

    function gB() {}
    const tB = (0, dB.createContext)({
      hint: null,
      journalRef: gB,
      placementCardRef: gB,
      buildRef: gB
    });
    var SB = zB(31);
    const MB = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      EB = {
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
      iB = ["small", "medium", "large"].flatMap((BB => MB.flat().filter((jB => EB[jB].tier === BB))));

    function qB(BB) {
      return EB[BB]
    }
    const fB = new Map(MB.flatMap((BB => BB.slice(1).map(((jB, zB) => [jB, BB[zB]])))));

    function oB(BB) {
      var jB;
      return null !== (jB = fB.get(BB)) && void 0 !== jB ? jB : null
    }
    const HB = {
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

    function DB(BB, jB) {
      const zB = new Set(BB),
        QB = function(BB) {
          const jB = new Set(BB);
          return new Set(iB.filter((BB => {
            const zB = oB(BB);
            return null === zB || jB.has(zB)
          })))
        }(zB);
      return iB.map((BB => {
        const nB = BB === jB;
        if (zB.has(BB)) return {
          id: BB,
          active: nB,
          note: null,
          state: "completed",
          unlockedBy: null
        };
        const dB = HB[BB],
          IB = void 0 === dB || dB.firstBuild && zB.size > 0 ? null : dB.key;
        return QB.has(BB) ? {
          id: BB,
          active: nB,
          note: IB,
          state: "open",
          unlockedBy: null
        } : {
          id: BB,
          active: nB,
          note: IB,
          state: "locked",
          unlockedBy: oB(BB)
        }
      }))
    }
    const FB = "plotsJournalChanged";
    class YB {
      constructor(BB, jB) {
        this.api = BB, this.placement = jB, this.pages = null, this.openRequested = null, this.openedOffered = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.JJ(this.openedOffered ? "journal_offered" : "journal_opened"), this.openedOffered = !1
        }, this.build = BB => {
          this.placement.start(BB), (0, IB.d)()
        }, this.putAway = () => {
          this.api.sendCommand(`${nB} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      VJ(BB) {
        let [, jB, zB] = BB;
        this.pages = DB(jB, zB), SB.n.Ly(FB, this.pages, !0)
      }
      openFromServer(BB) {
        let [, jB] = BB;
        this.openRequested = jB, this.vp()
      }
      vp() {
        const BB = this.openRequested;
        null === BB || NB.c.get("loadingOverlayVisible") || (this.openRequested = null, null === this.pages || (0, sB.m)() || (0, LB.isTypingInInput)() || null !== this.placement.getView() || (this.openedOffered = BB, (0, IB.o)()))
      }
      JJ(BB) {
        this.reported.has(BB) || (this.reported.add(BB), this.api.sendCommand(`${nB} report ${BB}`))
      }
    }
    var VB = zB(1148);
    const hB = "KeyJ";

    function XB(BB) {
      let {
        journal: jB
      } = BB;
      const zB = (0, uB.h)(FB, jB.getPages()),
        {
          isTouchScreen: QB
        } = (0, NB.m)(["isTouchScreen"]),
        {
          t: nB
        } = (0, aB.D)(),
        UB = (0, dB.useContext)(tB);
      return (0, GB.c)((BB => null !== zB && BB.code === hB && !BB.repeat && !(0, LB.isTypingInInput)()), (BB => {
        (0, sB.v)(BB, !0, IB.o)
      })), null === zB ? null : (0, VB.jsx)(JB.e, {
        placement: "topRight",
        children: (0, VB.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, VB.jsxs)("button", {
            ref: UB.journalRef,
            type: "button",
            className: rB()("PlotsJournalButton SmallTextBold", {
              Touch: QB
            }),
            onClick: IB.o,
            children: [(0, VB.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, VB.jsx)(yB.c, {
                itemName: "Book",
                amount: 0
              })
            }), nB("plotsGame:journalButton"), !QB && (0, VB.jsx)(kB.b, {
              className: "PlotsJournalButtonKey",
              keyCode: hB
            }), "openJournal" === UB.hint && (0, VB.jsx)(mB.c, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon HandLeftAnim PlotsJournalButtonHand"
            })]
          })
        })
      })
    }
    var ZB = zB(9266);
    const AB = [0, 90, 180, 270],
      TB = /^(meta\|rot\d)\|([lrud]+)$/,
      PB = "nesw",
      WB = /^meta\|([nesw]*)\|?(Stacked)?$/,
      eB = function(BB) {
        const jB = new WeakMap;
        return (zB, QB) => {
          let nB = jB.get(zB);
          return void 0 === nB && (nB = BB(zB, QB), jB.set(zB, nB)), nB
        }
      }((BB => new lB(BB)));
    class lB {
      constructor(BB) {
        this.blockMetadata = BB, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const jB = new Set(Object.keys(BB).map((jB => BB[jB].id)));
        jB.add(0), this.maxBlockId = Math.max(...jB)
      }
      static
      for (BB) {
        return eB(BB)
      }
      getBlockIdMapping(BB, jB) {
        const zB = this.getBlockIdMappingKey(BB, jB);
        let QB = this.blockIdMappings.get(zB);
        return void 0 === QB && AB.includes(BB) && (QB = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, BB, jB), this.blockIdMappings.set(zB, QB)), QB
      }
      turnBlockId(BB, jB, zB) {
        return this.mapBlockId(this.blockMetadata[BB], jB, this.getRotationMapping(jB, zB), zB)
      }
      getBlockIdMappingKey(BB, jB) {
        return `r${BB}|m${Number(jB)}`
      }
      createBlockIdMapping(BB, jB, zB, QB) {
        const nB = new Uint16Array(jB + 1),
          dB = this.getRotationMapping(zB, QB);
        for (const IB in BB) {
          const jB = BB[IB];
          nB[jB.id] = this.mapBlockId(jB, zB, dB, QB)
        }
        return nB
      }
      getRotationMapping(BB, jB) {
        const zB = Math.round(BB / 90),
          QB = new Uint8Array(4);
        for (let nB = 0; nB < 4; nB++) QB[nB] = (4 + nB - zB) % 4;
        if (jB) {
          let BB = QB[0];
          QB[0] = QB[1], QB[1] = BB, BB = QB[2], QB[2] = QB[3], QB[3] = BB
        }
        return QB
      }
      mapBlockId(BB, jB, zB, QB) {
        var nB;
        const {
          blockMetadata: dB
        } = this, IB = Math.round(jB / 90), {
          id: NB,
          meta: uB
        } = BB, {
          rot: UB,
          rootName: aB,
          metaStr: pB
        } = uB;
        let rB;
        const [, sB, JB] = null !== (nB = WB.exec(pB)) && void 0 !== nB ? nB : [];
        if (void 0 !== sB) {
          var mB, yB;
          rB = null !== (mB = null === (yB = dB[`${aB}|meta|${[PB.split("").filter(((BB,jB)=>sB.split("").some((BB=>{const zB=PB.indexOf(BB);return((QB?3-zB:zB)+IB)%4===jB})))).join(""),JB].filter(Boolean).join("|")}`]) || void 0 === yB ? void 0 : yB.id) && void 0 !== mB ? mB : NB
        } else if (null === UB) rB = NB;
        else {
          var kB, GB;
          const BB = zB[UB - 1] + 1;
          let jB = pB.replace(`rot${UB}`, `rot${BB}`);
          QB && uB.stairsCorner && (jB = jB.replace(/(Left|Right)$/, (BB => "Left" === BB ? "Right" : "Left"))), QB && "Chest" === aB && (jB = jB.replace(/\|(left|right)$/, ((BB, jB) => "left" === jB ? "|right" : "|left")));
          const nB = TB.exec(jB);
          if (QB && null !== nB) {
            const BB = "lrud".split("").filter((BB => nB[2].includes("l" === BB ? "r" : "r" === BB ? "l" : BB)));
            jB = `${nB[1]}|${BB.join("")}`
          }
          const IB = `${aB}|${jB}`;
          if (rB = null !== (kB = null === (GB = dB[IB]) || void 0 === GB ? void 0 : GB.id) && void 0 !== kB ? kB : null, null === rB) {
            const BB = dB[aB];
            rB = BB.rootMetaDesc === IB ? BB.id : NB
          }
        }
        return rB
      }
    }

    function wB(BB, jB, zB) {
      let {
        xRotationMappedOrigin: QB,
        shouldSwapXZ: nB
      } = zB;
      const dB = nB ? jB : BB;
      return null === QB ? dB : QB - dB
    }

    function xB(BB, jB, zB) {
      let {
        zRotationMappedOrigin: QB,
        shouldSwapXZ: nB
      } = zB;
      const dB = nB ? BB : jB;
      return null === QB ? dB : QB - dB
    }
    const KB = {
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
      CB = new Map;

    function cB(BB, jB) {
      const zB = `${BB}|${jB}`;
      let QB = CB.get(zB);
      if (void 0 === QB) {
        const {
          size: nB,
          palette: dB,
          layers: IB
        } = KB[BB], NB = 90 === jB || 270 === jB, [uB, UB] = NB ? [nB[2], nB[0]] : [nB[0], nB[2]], aB = function(BB, jB, zB) {
          let QB = null,
            nB = null,
            dB = !1;
          switch (BB) {
            case 0:
              break;
            case 90:
              QB = jB - 1, dB = !0;
              break;
            case 180:
              QB = jB - 1, nB = zB - 1;
              break;
            case 270:
              nB = zB - 1, dB = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${BB}`)
          }
          return {
            xRotationMappedOrigin: QB,
            zRotationMappedOrigin: nB,
            shouldSwapXZ: dB
          }
        }(jB, uB, UB), pB = lB.for(ZB.i), rB = dB.map((BB => (0, ZB.g)(pB.turnBlockId((0, ZB.k)(BB), jB, !1)))), sB = [];
        IB.forEach(((BB, jB) => {
          BB.split(" ").forEach(((BB, zB) => {
            for (let QB = 0; QB < BB.length; QB++)
              if ("." !== BB[QB]) {
                const nB = [wB(QB, zB, aB), jB, xB(QB, zB, aB)];
                sB.push({
                  offset: nB,
                  block: rB[BB.charCodeAt(QB) - "a".charCodeAt(0)]
                })
              }
          }))
        })), QB = {
          size: [uB, nB[1], UB],
          cells: sB
        }, CB.set(zB, QB)
      }
      return QB
    }
    const bB = "plotsBuildProgressChanged",
      vB = new Map;

    function RB(BB, jB, zB) {
      let QB = 0,
        nB = 0;
      return function(BB) {
        let jB = vB.get(BB);
        if (void 0 === jB) {
          const QB = [];
          for (const {
              offset: jB
            }
            of cB(BB, 0).cells) {
            var zB;
            QB[jB[1]] = (null !== (zB = QB[jB[1]]) && void 0 !== zB ? zB : 0) + 1
          }
          jB = QB, vB.set(BB, jB)
        }
        return jB
      }(BB).forEach(((BB, zB) => {
        QB += BB, zB > jB && (nB += BB)
      })), {
        id: BB,
        filled: QB - nB - zB,
        total: QB
      }
    }
    class OB {
      constructor() {
        this.shown = null, this.topOpen = 0, this.progress = null
      }
      get() {
        return this.progress
      }
      show(BB) {
        this.shown = BB, this.topOpen = 0, null === BB && this.Ly(null)
      }
      update(BB, jB, zB) {
        const QB = this.shown;
        null !== QB && (BB >= jB && (this.topOpen = zB), this.Ly(RB(QB.id, jB - QB.y, BB >= jB ? zB : this.topOpen + zB)))
      }
      Ly(BB) {
        const jB = this.progress;
        (null === BB || void 0 === BB ? void 0 : BB.id) === (null === jB || void 0 === jB ? void 0 : jB.id) && (null === BB || void 0 === BB ? void 0 : BB.filled) === (null === jB || void 0 === jB ? void 0 : jB.filled) && (null === BB || void 0 === BB ? void 0 : BB.total) === (null === jB || void 0 === jB ? void 0 : jB.total) || (this.progress = BB, SB.n.Ly(bB, BB, !0))
      }
    }
    const Bj = "plotsPlotChanged",
      jj = "plotsGuideChanged",
      zj = "plotsGuideDone";
    class Qj {
      constructor() {
        this.plot = ["none"], this.guide = ["none"]
      }
      getPlot() {
        return this.plot
      }
      receivePlot(BB) {
        this.plot = BB, SB.n.Ly(Bj, BB, !0)
      }
      getGuide() {
        return this.guide
      }
      receiveGuide(BB) {
        this.guide = BB, SB.n.Ly(jj, BB, !0)
      }
      receiveGuideDone() {
        SB.n.Ly(zj, void 0, !0)
      }
    }
    var nj = zB(1306),
      dj = zB(38635),
      Ij = zB(36946),
      Nj = zB(1507);

    function uj(BB) {
      let {
        onSkip: jB,
        className: zB
      } = BB;
      const {
        t: QB
      } = (0, aB.D)();
      return (0, VB.jsx)("button", {
        type: "button",
        className: rB()("PlotsGuideSkipButton", zB),
        ...(0, Nj.f)(jB, "pointerup"),
        children: QB("tutorial:skip")
      })
    }

    function Uj(BB) {
      let {
        target: jB,
        placement: zB,
        spotlight: QB = null,
        children: nB
      } = BB;
      const {
        t: IB
      } = (0, aB.D)(), NB = (0, dB.useRef)(jB);
      return NB.current = jB, (0, nj.v)("popup", NB, null === QB ? null : QB.onSkip, null !== QB, null, "controller:menusSkipTutorial"), (0, VB.jsxs)(Ij.f, {
        target: jB,
        placement: zB,
        className: rB()("PlotsGuideBubble", {
          Passive: null === QB
        }),
        spotlight: null !== QB,
        spotlightMargin: 30,
        children: [(0, VB.jsxs)("div", {
          className: "PlotsGuideBubbleHeader",
          children: [(0, VB.jsx)("img", {
            className: "PlotsGuideBubblePortrait",
            src: dj,
            alt: "",
            draggable: !1
          }), (0, VB.jsx)("span", {
            className: "PlotsGuideBubbleSpeaker",
            children: IB("plotsGame:maverickName")
          }), null !== QB && (0, VB.jsx)(uj, {
            onSkip: QB.onSkip
          })]
        }), (0, VB.jsx)("p", {
          className: "PlotsGuideBubbleText",
          children: nB
        })]
      })
    }

    function aj(BB) {
      let {
        className: jB,
        icon: zB,
        title: QB,
        children: nB
      } = BB;
      return (0, VB.jsxs)("div", {
        className: rB()("PlotsCard", jB),
        role: "status",
        children: [(0, VB.jsx)("span", {
          className: "PlotsCardIcon",
          children: (0, VB.jsx)(mB.c, {
            name: zB
          })
        }), (0, VB.jsxs)("div", {
          className: "PlotsCardBody",
          children: [(0, VB.jsx)("div", {
            className: "PlotsCardTitle SmallTextBold",
            children: QB
          }), nB]
        })]
      })
    }

    function pj(BB) {
      let {
        progress: jB,
        goal: zB
      } = BB;
      const QB = Math.min(jB, zB);
      return (0, VB.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, VB.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": zB,
          "aria-valuenow": QB,
          children: (0, VB.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${QB/zB})`
            }
          })
        }), (0, VB.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [QB, "/", zB]
        })]
      })
    }

    function rj(BB) {
      let {
        progress: jB,
        guide: zB
      } = BB;
      const {
        t: QB
      } = (0, aB.D)(), {
        isTouchScreen: nB
      } = (0, NB.m)(["isTouchScreen"]), dB = jB.filled < 5;
      return (0, VB.jsxs)(VB.Fragment, {
        children: [(dB || jB.total - jB.filled <= 5) && (0, VB.jsx)("div", {
          className: "PlotsGuideHandLayer",
          children: (0, VB.jsx)("div", {
            ref: zB.bindHand,
            className: "PlotsGuideHand",
            children: (0, VB.jsx)(mB.c, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon"
            })
          })
        }), (0, VB.jsx)(JB.e, {
          placement: "bottom",
          children: (0, VB.jsxs)(aj, {
            icon: "hammer",
            title: QB(qB(jB.id).displayName.translationKey),
            children: [dB && (0, VB.jsx)("div", {
              className: "PlotsCardHint SmallTextLight",
              children: nB ? QB("plotsGame:guideBuildTouch") : sj(QB)
            }), (0, VB.jsx)(pj, {
              progress: jB.filled,
              goal: jB.total
            })]
          })
        })]
      })
    }

    function sj(BB) {
      const jB = UB.w["alt-fire"][0];
      return "Mouse3" === jB ? BB("plotsGame:guideBuildRightClick") : BB("plotsGame:guideBuildKeys", {
        key: (0, UB.m)(jB)
      })
    }

    function Jj() {
      return (0, VB.jsx)("div", {
        className: "PlotsGuideDragHand",
        children: (0, VB.jsx)(mB.c, {
          name: "hand-back-point-up",
          className: "SmallTextBold TouchTutorialIcon"
        })
      })
    }
    var mj = zB(1316),
      yj = zB(2690),
      kj = zB(38507),
      Gj = zB(38264),
      Lj = zB(36998),
      gj = zB(9297),
      tj = zB(9319),
      Sj = zB(376),
      Mj = zB(37902);
    const Ej = new Map([
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
      ij = [...Lj.e.blockRemoveActionRoots, ...Gj.c, ...gj.g, "Board", "Code Block", "Custom Lobby Block"],
      qj = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let fj = null;

    function oj() {
      return fj ??= function() {
        const BB = Hj(),
          jB = Math.max(...BB.map((BB => ZB.i[BB].id))) + 1,
          zB = new Int32Array(jB),
          QB = new Int32Array(jB),
          nB = new Uint8Array(jB).fill(1),
          dB = new Uint8Array(jB),
          IB = new Uint8Array(jB),
          NB = new Array(jB).fill("Air"),
          uB = new Map,
          UB = BB => {
            let jB = uB.get(BB);
            return void 0 === jB && (jB = uB.size + 1, uB.set(BB, jB)), jB
          },
          aB = new Set(ij);
        for (const rB of BB) {
          var pB;
          const {
            id: BB,
            meta: jB,
            altActionable: uB,
            canBePlacedOver: sB
          } = ZB.i[rB];
          zB[BB] = UB(Dj(rB));
          const JB = jB.stairsCorner;
          if (null === JB) QB[BB] = zB[BB];
          else {
            const zB = JB.endsWith("Right");
            QB[BB] = UB(`${jB.rootName}|rot${zB?jB.rot%4+1:jB.rot}|${jB.halfblockPlacement}|${JB.replace("Right","Left")}`)
          }
          nB[BB] = sB ? 1 : 0, dB[BB] = uB || null !== jB.open || rB in Mj.b || aB.has(jB.rootName) || void 0 !== (0, Gj.f)(jB.rootName) ? 1 : 0;
          const {
            rootName: mB
          } = jB;
          IB[BB] = null !== jB.open || Gj.c.includes(mB) || mB.includes("Bookshelf") || mB.includes("Mailbox") ? 1 : 0, NB[BB] = null !== (pB = (0, kj.h)(BB)) && void 0 !== pB ? pB : mB
        }
        return {
          kinds: zB,
          shapes: QB,
          empty: nB,
          inUse: dB,
          ownAltActionMessage: IB,
          placingItems: NB
        }
      }(), fj
    }

    function Hj() {
      return Object.keys(ZB.i).filter((BB => ZB.i[BB].name === BB))
    }

    function Dj(BB) {
      var jB;
      const zB = ZB.i[BB],
        {
          rootName: QB,
          rot: nB
        } = zB.meta,
        [, ...dB] = (null !== (jB = zB.rootMetaDesc) && void 0 !== jB ? jB : BB).split("|"),
        IB = dB.filter((BB => !("meta" === BB || qj.test(BB) || (0, tj.C)(zB) && /^[nesw]+$/.test(BB) || gj.g.includes(QB) && /^[lrud]+$/.test(BB) || Sj.B.includes(QB) && /^(left|right)$/.test(BB))));
      return [QB, ...IB].map((BB => "fenceGate" === zB.model && BB === `rot${nB}` ? "rot" + ((nB - 1) % 2 + 1) : BB)).join("|")
    }

    function Fj(BB, jB) {
      const {
        kinds: zB,
        shapes: QB
      } = oj();
      return zB[BB] === zB[jB] || QB[BB] === QB[jB]
    }

    function Yj(BB) {
      return 1 === oj().empty[BB]
    }

    function Vj(BB) {
      return oj().placingItems[BB]
    }

    function hj(BB) {
      return Ej.get(ZB.i[BB].meta.rootName)
    }
    var Xj = zB(9292),
      Zj = zB(9311);
    const Aj = [0, 0, 0, 1, 1, 1],
      Tj = (0, Xj.c)([
        [2, 0, 2, 6, 6, 6]
      ]),
      Pj = (0, Xj.c)([
        [3, 0, 3, 5, 5, 5]
      ]),
      Wj = (0, Xj.c)([
        [3, 3, 3, 5, 8, 5]
      ]),
      ej = [0, 1, 2, 3].map((BB => (0, Xj.c)((0, Xj.j)([
        [3, 2, 0, 5, 7, 3]
      ], BB))));

    function lj(BB) {
      const {
        Sy: jB,
        model: zB,
        blockModel: QB,
        meta: nB
      } = ZB.i[BB];
      return void 0 !== jB ? jB : "CentreCross" === zB ? Tj : null !== QB && void 0 !== QB && QB.startsWith("torch") ? nB.halfblockPlacement === Zj.d.side ? ej[nB.rot - 1] : nB.halfblockPlacement === Zj.d.top ? Wj : Pj : Aj
    }
    var wj = zB(214);
    class xj {
      constructor(BB) {
        this.api = BB, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(BB) {
        const jB = wj.e.ZJ;
        this.chunks = [];
        for (let zB = 0; zB < BB.length; zB += 3) {
          const QB = Math.floor(BB[zB] / jB),
            nB = Math.floor(BB[zB + 1] / jB),
            dB = Math.floor(BB[zB + 2] / jB);
          this.watches(QB, nB, dB) || this.chunks.push(QB, nB, dB)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const BB = performance.now();
        if (BB - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = BB;
        let jB = !1;
        for (let zB = 0; zB < this.chunks.length; zB += 3) {
          const BB = this.api.getChunkVersion(this.chunks[zB], this.chunks[zB + 1], this.chunks[zB + 2]);
          this.versions[zB / 3] !== BB && (this.versions[zB / 3] = BB, jB = !0)
        }
        return jB
      }
      watches(BB, jB, zB) {
        for (let QB = 0; QB < this.chunks.length; QB += 3)
          if (this.chunks[QB] === BB && this.chunks[QB + 1] === jB && this.chunks[QB + 2] === zB) return !0;
        return !1
      }
    }
    var Kj = zB(38605);
    const Cj = .35,
      cj = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      bj = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      vj = [.95, .2, .15];
    class Rj {
      constructor() {
        this.groups = []
      }
      add(BB, jB, zB, QB, nB) {
        let dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Aj;
        for (const IB of this.groups)
          if (jz(IB, QB, nB)) return IB.cells.push(BB, jB, zB), void IB.boxes.push(dB);
        this.groups.push({
          rgb: QB,
          look: nB,
          cells: [BB, jB, zB],
          boxes: [dB]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class Oj {
      constructor(BB) {
        this.api = BB, this.shown = []
      }
      show(BB) {
        const jB = [];
        for (const zB of BB) {
          const BB = this.shown.findIndex((BB => {
            let {
              group: jB
            } = BB;
            return jz(jB, zB.rgb, zB.look) && zz(jB, zB)
          })); - 1 === BB ? jB.push(this.build(zB)) : (jB.push(this.shown[BB]), this.shown.splice(BB, 1))
        }
        this.dispose(), this.shown = jB
      }
      dispose() {
        for (const {
            meshes: BB
          }
          of this.shown)
          for (const jB of BB) this.api.disposeGameMesh(jB);
        this.shown = []
      }
      build(BB) {
        const {
          rgb: jB,
          look: zB,
          boxes: QB
        } = BB, nB = [jB[0] + (1 - jB[0]) * Cj, jB[1] + (1 - jB[1]) * Cj, jB[2] + (1 - jB[2]) * Cj], dB = [this.buildMesh(BB.cells, jB, zB.alpha, ((BB, jB, nB, dB) => {
          Bz(BB, jB, nB, QB[dB], zB.size, !1)
        })), this.buildMesh(BB.cells, nB, zB.alpha, ((BB, jB, nB, dB) => {
          Bz(BB, jB, nB, QB[dB], zB.size, !0)
        }))];
        return zB.crossed && dB.push(this.buildMesh(BB.cells, jB, .9, ((BB, jB, QB) => {
          (0, Kj.j)(BB, jB, QB, zB.size + .01, .12)
        }))), {
          group: BB,
          meshes: dB
        }
      }
      buildMesh(BB, jB, zB, QB) {
        const nB = [BB[0], BB[1], BB[2]],
          dB = [],
          IB = [];
        for (let NB = 0; NB < BB.length; NB += 3) QB(dB, IB, [BB[NB] - nB[0] + .5, BB[NB + 1] - nB[1] + .5, BB[NB + 2] - nB[2] + .5], NB / 3);
        return this.api.createGameMesh({
          positions: dB,
          indices: IB
        }, {
          rgb: [jB[0], jB[1], jB[2]],
          alpha: zB
        }, nB)
      }
    }

    function Bz(BB, jB, zB, QB, nB, dB) {
      for (let IB = 0; IB < QB.length; IB += 6) {
        const NB = [0, 0, 0],
          uB = [0, 0, 0];
        for (let BB = 0; BB < 3; BB++) NB[BB] = zB[BB] + ((QB[IB + BB] + QB[IB + BB + 3]) / 2 - .5) * nB, uB[BB] = (QB[IB + BB + 3] - QB[IB + BB]) * nB;
        (0, Kj.d)(BB, jB, NB, uB, dB)
      }
    }

    function jz(BB, jB, zB) {
      return BB.rgb[0] === jB[0] && BB.rgb[1] === jB[1] && BB.rgb[2] === jB[2] && BB.look === zB
    }

    function zz(BB, jB) {
      if (BB.cells.length !== jB.cells.length) return !1;
      for (let zB = 0; zB < BB.cells.length; zB++)
        if (BB.cells[zB] !== jB.cells[zB]) return !1;
      return BB.boxes.every(((BB, zB) => BB === jB.boxes[zB]))
    }

    function Qz(BB, jB, zB, QB, nB) {
      if (!BB.isBlockInLoadedChunk(jB, QB - 6, zB) || !BB.isBlockInLoadedChunk(jB, QB + 6 + nB, zB) || !BB.canModifyBlockAt(jB, QB, zB)) return NaN;
      let dB = QB - 1;
      if (0 !== BB.getBlockId(jB, dB, zB)) {
        for (; dB < QB + 6 && 0 !== BB.getBlockId(jB, dB + 1, zB);) dB++;
        return dB
      }
      for (; dB > QB - 6;)
        if (dB--, 0 !== BB.getBlockId(jB, dB, zB)) return dB;
      return NaN
    }

    function nz(BB, jB, zB, QB, nB) {
      let dB = 0;
      for (let IB = QB + 1; IB <= QB + nB; IB++) 0 !== BB.getBlockId(jB, IB, zB) && dB++;
      return dB
    }

    function dz(BB) {
      const jB = new Map;
      for (const IB of BB) {
        var zB;
        if (Number.isNaN(IB)) return null;
        jB.set(IB, (null !== (zB = jB.get(IB)) && void 0 !== zB ? zB : 0) + 1)
      }
      let QB = NaN,
        nB = 0;
      for (const [IB, NB] of jB)(NB > nB || NB === nB && IB < QB) && (QB = IB, nB = NB);
      let dB = 0;
      for (const IB of BB) dB += Math.abs(IB - QB);
      return dB
    }

    function Iz(BB, jB, zB, QB) {
      const {
        eye: nB,
        forward: dB,
        tanHalfFovX: IB,
        tanHalfFovY: NB
      } = BB, [uB, UB] = function(BB) {
        let [jB, zB, QB] = BB;
        const nB = Math.hypot(jB, QB),
          [dB, IB] = [QB / nB, -jB / nB];
        return [
          [dB, 0, IB],
          [zB * IB, QB * dB - jB * IB, -zB * dB]
        ]
      }(dB), [aB, pB] = [jB * IB, zB * NB], rB = dB[0] + aB * uB[0] + pB * UB[0], sB = dB[1] + pB * UB[1], JB = dB[2] + aB * uB[2] + pB * UB[2], mB = (QB - nB[1]) / sB;
      return mB > 0 && mB < 1 / 0 ? [nB[0] + mB * rB, nB[2] + mB * JB] : null
    }
    const Nz = "plotsBlueprintPlacementChanged",
      uz = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class Uz {
      constructor(BB, jB) {
        this.api = BB, this.localPlayerId = jB, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = BB => {
          var jB, zB, QB, dB;
          const IB = null !== (jB = null === (zB = this.placing) || void 0 === zB ? void 0 : zB.rotation) && void 0 !== jB ? jB : 0,
            {
              size: NB
            } = cB(BB, IB),
            uB = this.api.iG(this.localPlayerId),
            [UB, aB] = null !== (QB = null !== (dB = function(BB, jB, zB, QB) {
              const [nB, dB, IB] = jB, [NB, uB, UB] = [Math.floor(zB[0]), Math.floor(zB[1]), Math.floor(zB[2])], aB = 6 + Math.max(nB, IB) / 2, [pB, rB] = [Math.ceil(aB + nB / 2), Math.ceil(aB + IB / 2)], [sB, JB] = [NB - pB, UB - rB], [mB, yB] = [2 * pB + 1, 2 * rB + 1], kB = new Float64Array(mB * yB), GB = new Uint16Array(mB * yB);
              for (let MB = 0; MB < mB; MB++)
                for (let jB = 0; jB < yB; jB++) {
                  const zB = Qz(BB, sB + MB, JB + jB, uB, dB);
                  kB[MB * yB + jB] = zB, Number.isNaN(zB) || (GB[MB * yB + jB] = nz(BB, sB + MB, JB + jB, zB, dB))
                }
              const LB = Math.hypot(QB[0], QB[2]),
                gB = [];
              let tB = null,
                SB = 1 / 0;
              for (let MB = 0; MB + nB <= mB; MB++)
                for (let BB = 0; BB + IB <= yB; BB++) {
                  const [jB, dB] = [sB + MB, JB + BB], [uB, pB] = [jB + nB / 2 - zB[0], dB + IB / 2 - zB[2]], rB = Math.hypot(uB, pB);
                  if (rB > aB || NB >= jB - 2 && NB < jB + nB + 2 && UB >= dB - 2 && UB < dB + IB + 2) continue;
                  gB.length = 0;
                  let mB = 0;
                  for (let zB = 0; zB < nB; zB++)
                    for (let jB = 0; jB < IB; jB++) gB.push(kB[(MB + zB) * yB + BB + jB]), mB += GB[(MB + zB) * yB + BB + jB];
                  const EB = dz(gB);
                  if (null === EB) continue;
                  const iB = rB + 3 * (EB + mB) + (1 - (0 === LB ? 1 : (uB * QB[0] + pB * QB[2]) / (rB * LB))) / 2 * 6;
                  iB < SB && (SB = iB, tB = [jB, dB])
                }
              return tB
            }(this.api, NB, uB, this.camera.forward)) && void 0 !== dB ? dB : this.cornerOnTarget(NB)) && void 0 !== QB ? QB : [Math.floor(uB[0]) + 2, Math.floor(uB[2])];
          this.placing = {
            id: BB,
            rotation: IB,
            corner: [UB, this.playerLevel(), aB],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null,
            moved: !1,
            stillSinceMs: performance.now()
          }, this.update(), this.api.sendCommand(`${nB} preview`)
        }, this.rotate = () => {
          const {
            id: BB,
            rotation: jB,
            corner: zB
          } = this.placing, nB = QB[(QB.indexOf(jB) + 1) % QB.length], [dB, , IB] = cB(BB, jB).size, [NB, , uB] = cB(BB, nB).size;
          this.moveTo(zB[0] + Math.floor(dB / 2) - Math.floor(NB / 2), zB[2] + Math.floor(IB / 2) - Math.floor(uB / 2), nB)
        }, this.hoverAt = (BB, jB) => {
          this.placing.hover = [BB, jB], this.moveCentreTo(this.camera, BB, jB)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (BB, jB) => {
          const zB = this.placing,
            {
              eye: QB,
              forward: nB,
              tanHalfFovX: dB,
              tanHalfFovY: IB
            } = this.camera,
            NB = {
              eye: [QB[0], QB[1], QB[2]],
              forward: [nB[0], nB[1], nB[2]],
              tanHalfFovX: dB,
              tanHalfFovY: IB
            },
            uB = zB.corner[1],
            UB = Iz(NB, BB, jB, uB);
          zB.hover = null, zB.drag = UB && {
            view: NB,
            ground: UB,
            corner: [zB.corner[0], zB.corner[2]],
            level: uB
          }
        }, this.dragTo = (BB, jB) => {
          const zB = this.placing.drag,
            QB = zB && Iz(zB.view, BB, jB, zB.level);
          null !== zB && null !== QB && this.moveTo(zB.corner[0] + Math.round(QB[0] - zB.ground[0]), zB.corner[1] + Math.round(QB[1] - zB.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const BB = this.view;
          BB.waiting || (BB.blocked ? this.Ly({
            ...BB,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const BB = this.placing,
            {
              id: jB,
              rotation: zB,
              corner: QB
            } = BB;
          this.api.sendCommand(`${nB} place ${jB} ${QB.join(" ")} ${zB}`), BB.sent = {
            atMs: performance.now(),
            corner: [...QB],
            rotation: zB,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${nB} preview off`))
        }, this.chunkWatch = new xj(BB), this.meshes = new Oj(BB)
      }
      getView() {
        return this.view
      }
      vp() {
        const BB = this.placing;
        null !== BB && (null !== BB.sent && !BB.sent.timedOut && performance.now() - BB.sent.atMs > 3e3 ? (BB.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(BB) || this.chunkWatch.changed() || this.view.settled !== az(BB, this.view.blocked)) && this.update())
      }
      afterRender(BB) {
        ! function(BB, jB) {
          for (let zB = 0; zB < 3; zB++) jB.eye[zB] = BB.cameraPosition[zB], jB.forward[zB] = BB.cameraDirection[zB];
          jB.tanHalfFovX = BB.tanHalfFovX, jB.tanHalfFovY = BB.tanHalfFovY
        }(BB, this.camera);
        const jB = this.placing;
        null !== jB && null !== jB.hover && this.moveCentreTo(this.camera, jB.hover[0], jB.hover[1])
      }
      VJ(BB) {
        const jB = this.placing;
        if (null === jB || null === jB.sent || "active" !== BB[0]) return;
        const {
          sent: zB
        } = jB, [, QB, nB, dB, IB, NB, uB] = BB;
        nB && QB === jB.id && uB === zB.rotation && dB === zB.corner[0] && IB === zB.corner[1] && NB === zB.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(BB) {
        let [jB, , zB] = BB;
        const QB = this.api.getTargetedBlock();
        if (null === QB) return null;
        const [nB, , dB] = QB.position;
        return [nB - Math.floor(jB / 2), dB - Math.floor(zB / 2)]
      }
      playerLevel() {
        var BB;
        const [jB, zB, QB] = this.api.iG(this.localPlayerId);
        if (null !== (BB = this.api.getLocalPlayerMovement()) && void 0 !== BB && BB.onGround) return Math.ceil(zB - .01);
        const [nB, dB, IB] = [Math.floor(jB), Math.floor(zB), Math.floor(QB)];
        for (let NB = dB; NB >= dB - 2; NB--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(nB, NB, IB))) return NB + 1;
        return dB
      }
      followPlayerLevel(BB) {
        if (pz(BB)) return !1;
        const jB = this.playerLevel();
        return jB !== BB.corner[1] && (BB.corner[1] = jB, !0)
      }
      moveCentreTo(BB, jB, zB) {
        const QB = this.placing,
          nB = Iz(BB, jB, zB, QB.corner[1]);
        if (null !== nB) {
          const [BB, , jB] = cB(QB.id, QB.rotation).size;
          this.moveTo(Math.round(nB[0] - BB / 2), Math.round(nB[1] - jB / 2))
        }
      }
      moveTo(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const QB = this.placing;
        if (pz(QB)) return;
        const [nB, dB, IB] = QB.corner;
        if (this.centreOnPlot(nB, IB) && !this.centreOnPlot(BB, jB, zB))
          if (this.centreOnPlot(BB, IB, zB)) jB = IB;
          else {
            if (!this.centreOnPlot(nB, jB, zB)) return;
            BB = nB
          } BB === nB && jB === IB && zB === QB.rotation || (QB.rotation = zB, QB.corner = [BB, dB, jB], QB.moved = !0, QB.stillSinceMs = performance.now(), this.update())
      }
      centreOnPlot(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: QB,
          corner: nB
        } = this.placing, [dB, , IB] = cB(QB, zB).size;
        return this.api.canModifyBlockAt(BB + Math.floor(dB / 2), nB[1], jB + Math.floor(IB / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.Ly(null)
      }
      update() {
        const {
          id: BB,
          rotation: jB,
          corner: zB,
          refusals: QB
        } = this.placing, nB = new Rj, dB = [];
        let IB = !1,
          NB = 0;
        for (const {
            offset: pB,
            block: rB
          }
          of cB(BB, jB).cells) {
          const [BB, jB, QB] = [zB[0] + pB[0], zB[1] + pB[1], zB[2] + pB[2]];
          dB.push(BB, jB, QB);
          const uB = !this.api.canModifyBlockAt(BB, jB, QB),
            UB = this.api.getBlockId(BB, jB, QB),
            aB = !Yj(UB) && !Fj(this.api.blockNameToBlockId(rB), UB);
          IB ||= uB, NB += aB ? 1 : 0, uB || aB ? nB.add(BB, jB, QB, vj, bj) : nB.add(BB, jB, QB, hj(rB), uz, lj(rB))
        }
        this.chunkWatch.watch(dB), this.meshes.show(nB.toArray());
        const uB = this.view,
          UB = pz(this.placing),
          aB = az(this.placing, IB);
        (null === uB || void 0 === uB ? void 0 : uB.id) === BB && uB.blocked === IB && uB.toClear === NB && uB.waiting === UB && uB.refusals === QB && uB.settled === aB || this.Ly({
          id: BB,
          blocked: IB,
          toClear: NB,
          waiting: UB,
          refusals: QB,
          settled: aB
        })
      }
      Ly(BB) {
        this.view = BB, SB.n.Ly(Nz, BB, !0)
      }
    }

    function az(BB, jB) {
      let {
        moved: zB,
        stillSinceMs: QB
      } = BB;
      return !jB && performance.now() - QB >= (zB ? 1500 : 6e3)
    }

    function pz(BB) {
      let {
        sent: jB
      } = BB;
      return null !== jB && !jB.timedOut
    }
    var rz = zB(4664);
    class sz {
      constructor(BB) {
        this.placement = BB, this.press = null
      }
      down(BB) {
        if (null !== this.press) return !1;
        const {
          id: jB,
          mouse: zB,
          x: QB,
          y: nB,
          atMs: dB
        } = BB;
        return this.press = {
          id: jB,
          mouse: zB,
          x: QB,
          y: nB,
          atMs: dB,
          moved: !1
        }, zB || this.placement.beginDrag(BB.ndcX, BB.ndcY), !0
      }
      move(BB) {
        const jB = this.press;
        null !== jB && jB.id === BB.id && (jB.moved ||= Math.hypot(BB.x - jB.x, BB.y - jB.y) > 8), BB.mouse ? this.placement.hoverAt(BB.ndcX, BB.ndcY) : (null === jB || void 0 === jB ? void 0 : jB.id) === BB.id && this.placement.dragTo(BB.ndcX, BB.ndcY)
      }
      up(BB) {
        const jB = this.press;
        (null === jB || void 0 === jB ? void 0 : jB.id) === BB.id && (this.move(BB), this.end(), !jB.moved && (jB.mouse || BB.atMs - jB.atMs <= 250) && this.placement.tap())
      }
      cancel(BB) {
        var jB;
        (null === (jB = this.press) || void 0 === jB ? void 0 : jB.id) === BB && this.end()
      }
      leave(BB) {
        let {
          id: jB,
          mouse: zB
        } = BB;
        zB && this.placement.endHover(), this.cancel(jB)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }
    const Jz = "PlotsPlacementLayer";

    function mz(BB) {
      let {
        placement: jB
      } = BB;
      return null === (0, uB.h)(Nz, jB.getView()) ? null : (0, VB.jsx)(yz, {
        placement: jB
      })
    }

    function yz(BB) {
      let {
        placement: jB
      } = BB;
      (0, rz.c)(!0, !0, Jz);
      const zB = (0, dB.useMemo)((() => new sz(jB)), [jB]);
      return (0, VB.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: BB => {
          "mouse" === BB.pointerType && 0 !== BB.button || !zB.down(kz(BB)) || BB.currentTarget.setPointerCapture(BB.pointerId)
        },
        onPointerMove: BB => {
          zB.move(kz(BB))
        },
        onPointerUp: BB => {
          zB.up(kz(BB))
        },
        onPointerCancel: BB => {
          zB.cancel(BB.pointerId)
        },
        onLostPointerCapture: BB => {
          zB.cancel(BB.pointerId)
        },
        onPointerLeave: BB => {
          zB.leave(kz(BB))
        },
        "aria-hidden": !0
      })
    }

    function kz(BB) {
      const {
        left: jB,
        top: zB,
        width: QB,
        height: nB
      } = BB.currentTarget.getBoundingClientRect();
      return {
        id: BB.pointerId,
        mouse: "mouse" === BB.pointerType,
        x: BB.clientX,
        y: BB.clientY,
        ndcX: (BB.clientX - jB) / QB * 2 - 1,
        ndcY: 1 - (BB.clientY - zB) / nB * 2,
        atMs: BB.timeStamp
      }
    }

    function Gz() {
      return (0, mj.o)().some((BB => BB !== mj.e && BB !== Jz))
    }
    const Lz = 2500;

    function gz(BB) {
      let {
        hud: jB,
        guide: zB,
        tracker: QB,
        placement: nB,
        children: IB
      } = BB;
      const {
        t: pB
      } = (0, aB.D)(), {
        isTouchScreen: rB
      } = (0, NB.m)(["isTouchScreen"]), sB = (0, uB.h)(jj, jB.getGuide()), JB = (0, uB.h)(Bj, jB.getPlot()), mB = (0, uB.h)(bB, QB.get()), yB = function(BB) {
        const {
          openInGameMenuName: jB,
          openEverythingMenuName: zB,
          loadingOverlayVisible: QB
        } = (0, NB.m)(["openInGameMenuName", "openEverythingMenuName", "loadingOverlayVisible"]), nB = (0, yj.c)(), [IB, UB] = (0, dB.useState)(Gz);
        (0, dB.useEffect)((() => {
          const BB = () => {
            UB(Gz())
          };
          BB();
          const jB = (0, mj.l)(BB),
            zB = (0, mj.j)(BB);
          return () => {
            jB(), zB()
          }
        }), []);
        const aB = (0, uB.h)(Nz, BB.getView()),
          pB = "clientGame" === jB;
        return {
          hudHidden: nB || QB,
          journalOpen: pB,
          covered: IB || null !== zB || null !== jB && !pB,
          placing: null === aB ? null : aB.settled ? "placeBuild" : "placeSpot"
        }
      }(nB), kB = function(BB, jB, zB) {
        return "none" === BB[0] || zB.hudHidden || zB.journalOpen || zB.covered ? null : null !== zB.placing ? zB.placing : null !== jB ? "build" : "choose" === BB[1] ? "openJournal" : null
      }(sB, null === mB ? null : mB.id, yB), GB = function() {
        const [BB, jB] = (0, dB.useState)(null), [zB, QB] = (0, dB.useState)(!1);
        return (0, uB.f)(zj, (() => {
          jB(performance.now())
        })), (0, dB.useEffect)((() => {
          if (null === BB) return;
          const jB = window.setTimeout((() => {
              QB(!0)
            }), Lz),
            zB = window.setTimeout((() => {
              QB(!1)
            }), 7500);
          return () => {
            window.clearTimeout(jB), window.clearTimeout(zB)
          }
        }), [BB]), zB
      }() && !yB.hudHidden && !yB.covered && !yB.journalOpen && null === yB.placing, [LB, gB] = (0, dB.useState)(!1);
      (0, dB.useEffect)((() => {
        yB.journalOpen && gB(!0)
      }), [yB.journalOpen]);
      const [SB, MB] = (0, dB.useState)(null), [EB, iB] = (0, dB.useState)(null), [qB, fB] = (0, dB.useState)(null), oB = (0, dB.useMemo)((() => ({
        hint: kB,
        journalRef: MB,
        placementCardRef: iB,
        buildRef: fB
      })), [kB]), HB = "plot" === JB[0] && "own" === JB[5], DB = rB && !LB && HB ? {
        onSkip: zB.skip
      } : null;
      return (0, VB.jsxs)(tB.Provider, {
        value: oB,
        children: [IB, "openJournal" === kB && null !== SB && (0, VB.jsx)(Uj, {
          target: SB,
          placement: "left",
          spotlight: DB,
          children: rB ? pB("plotsGame:guideOpenJournal") : pB("plotsGame:guideOpenJournalKeys", {
            key: (0, UB.m)(hB)
          })
        }), "placeSpot" === kB && null !== EB && (0, VB.jsxs)(VB.Fragment, {
          children: [rB && (0, VB.jsx)(Jj, {}), (0, VB.jsx)(Uj, {
            target: EB,
            placement: "top",
            children: pB(rB ? "plotsGame:guidePlaceSpotTouch" : "plotsGame:guidePlaceSpotMouse")
          })]
        }), "placeBuild" === kB && null !== qB && null !== EB && (0, VB.jsx)(Uj, {
          target: rB ? qB : EB,
          placement: "top",
          children: pB(rB ? "plotsGame:guidePlaceBuildTouch" : "plotsGame:guidePlaceBuildMouse")
        }), "build" === kB && null !== mB && (0, VB.jsx)(rj, {
          progress: mB,
          guide: zB
        }), GB && null !== SB && (0, VB.jsx)(Uj, {
          target: SB,
          placement: "left",
          children: pB("plotsGame:guideMoreBuilds")
        })]
      })
    }
    var tz = zB(38581),
      Sz = zB(38585);
    class Mz {
      constructor(BB, jB, zB) {
        this.api = BB, this.localPlayerId = jB, this.nextCell = zB, this.hand = null, this.skip = () => {
          this.api.sendCommand("plotsguide skip")
        }, this.bindHand = BB => {
          this.hand = BB
        }
      }
      afterRender(BB) {
        const jB = this.hand;
        if (null === jB) return;
        const zB = this.nextCell.get();
        if (null === zB) return void(0, tz.g)(jB, !0);
        const QB = (0, Sz.c)(jB, BB, this.api.getPositionView(this.localPlayerId), zB, 1, 40);
        null !== QB && (0, tz.d)(jB, Math.round(100 * QB.x) / 100, Math.round(100 * QB.y) / 100)
      }
    }
    var Ez = zB(1478),
      iz = zB(4653),
      qz = zB(1167);
    const fz = {
        farm_hut: zB.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
        farm_house: zB.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
        farm_barn: zB.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
        rusticHome_tent: zB.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
        rusticHome_cabin: zB.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
        rusticHome_house: zB.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
        market_stand: zB.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
        market_stall: zB.p + "static/media/market_stall.9a562807f9dff591618a.webp",
        market_shop: zB.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
        castle_wall: zB.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
        castle_gate: zB.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
        castle_tower: zB.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
      },
      oz = ["plotsGame:guideEffortQuick", "plotsGame:guideEffortMedium", "plotsGame:guideEffortBigger"],
      Hz = ["market_stand", "rusticHome_tent", "farm_hut"].map((BB => ({
        id: BB,
        blocks: cB(BB, 0).cells.length
      }))).sort(((BB, jB) => BB.blocks - jB.blocks)).map(((BB, jB) => ({
        ...BB,
        effortKey: oz[jB]
      })));

    function Dz(BB) {
      let {
        onBuild: jB
      } = BB;
      const {
        t: zB
      } = (0, aB.D)();
      return (0, VB.jsx)("div", {
        className: "PlotsJournalBookPages PlotsGuideChooserCover",
        children: (0, VB.jsxs)("div", {
          className: "PlotsGuideChooser",
          children: [(0, VB.jsx)("h3", {
            className: "PlotsGuideChooserTitle",
            children: zB("plotsGame:guidePickTitle")
          }), (0, VB.jsxs)("p", {
            className: "PlotsGuideChooserNote",
            children: [(0, VB.jsx)("img", {
              src: dj,
              alt: "",
              draggable: !1
            }), zB("plotsGame:guidePickNote")]
          }), (0, VB.jsx)("div", {
            className: "PlotsGuideChooserStarters",
            children: Hz.map((BB => {
              let {
                id: QB,
                blocks: nB,
                effortKey: dB
              } = BB;
              return (0, VB.jsxs)("article", {
                className: "PlotsGuideStarter",
                children: [(0, VB.jsx)("button", {
                  type: "button",
                  className: "PlotsGuideStarterSketch",
                  tabIndex: -1,
                  "aria-hidden": !0,
                  "data-pad-ignore": !0,
                  onClick: () => {
                    jB(QB)
                  },
                  children: (0, VB.jsx)("img", {
                    src: fz[QB],
                    alt: "",
                    draggable: !1
                  })
                }), (0, VB.jsxs)("div", {
                  className: "PlotsGuideStarterInfo",
                  children: [(0, VB.jsxs)("span", {
                    className: "PlotsGuideStarterText",
                    children: [(0, VB.jsx)("span", {
                      className: "PlotsGuideStarterName",
                      children: zB(qB(QB).displayName.translationKey)
                    }), (0, VB.jsx)("span", {
                      className: "PlotsGuideStarterEffort",
                      children: zB(dB)
                    }), (0, VB.jsx)("span", {
                      className: "PlotsGuideStarterBlocks",
                      children: zB("plotsGame:journalBlocks", {
                        blocks: String(nB)
                      })
                    })]
                  }), (0, VB.jsx)(Ez.m, {
                    onClick: () => {
                      jB(QB)
                    },
                    children: zB("plotsGame:placementBuild")
                  })]
                })]
              }, QB)
            }))
          })]
        })
      })
    }

    function Fz(BB) {
      let {
        direction: jB,
        disabled: zB,
        onTurn: QB
      } = BB;
      const {
        t: nB
      } = (0, aB.D)();
      return (0, VB.jsx)("div", {
        className: rB()("PlotsJournalArrow", jB),
        children: (0, VB.jsx)(Ez.f, {
          disabled: zB,
          ariaLabel: nB("Forward" === jB ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            QB(jB)
          },
          children: (0, VB.jsx)(mB.c, {
            name: "angle-up"
          })
        })
      })
    }
    const Yz = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function Vz(BB) {
      let {
        page: jB,
        building: zB,
        onBuild: QB,
        onPutAway: nB
      } = BB;
      const {
        t: dB
      } = (0, aB.D)(), {
        displayName: IB,
        tier: NB
      } = qB(jB.id), uB = cB(jB.id, 0).cells.length, UB = "locked" === jB.state, pB = zB ? Ez.f : Ez.m;
      return (0, VB.jsxs)("article", {
        className: rB()("PlotsJournalPage", {
          Locked: UB
        }),
        children: [(0, VB.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: dB(IB.translationKey)
        }), (0, VB.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [dB(Yz[NB]), " \xb7 ", dB("plotsGame:journalBlocks", {
            blocks: String(uB)
          })]
        }), (0, VB.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [iB.map((BB => (0, VB.jsx)("img", {
            className: rB()({
              Shown: BB === jB.id
            }),
            src: fz[BB],
            alt: "",
            draggable: !1
          }, BB))), "completed" === jB.state && (0, VB.jsx)("span", {
            className: "PlotsJournalStamp",
            children: dB("plotsGame:journalBuilt")
          }), UB && (0, VB.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, VB.jsx)(mB.c, {
              name: "lock"
            })
          })]
        }), null !== jB.note && (0, VB.jsx)("p", {
          className: "PlotsJournalNote",
          children: dB(jB.note)
        }), (0, VB.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === jB.state && (0, VB.jsx)("p", {
            className: "PlotsJournalHint",
            children: dB("plotsGame:journalLocked", {
              name: dB(qB(jB.unlockedBy).displayName.translationKey)
            })
          }), jB.active && (0, VB.jsxs)(VB.Fragment, {
            children: [(0, VB.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: dB("plotsGame:journalBuilding")
            }), (0, VB.jsx)(Ez.h, {
              onClick: nB,
              children: dB("plotsGame:journalPutAway")
            })]
          }), !UB && !jB.active && (0, VB.jsx)(pB, {
            onClick: () => {
              QB(jB.id)
            },
            children: dB("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function hz(BB) {
      let {
        className: jB,
        page: zB,
        hidden: QB,
        building: nB,
        journal: dB
      } = BB;
      return (0, VB.jsxs)("div", {
        ref: BB => {
          null !== BB && (BB.inert = QB)
        },
        className: rB()("PlotsJournalSide", jB),
        children: [void 0 !== zB && (0, VB.jsx)(Vz, {
          page: zB,
          building: nB,
          onBuild: dB.build,
          onPutAway: dB.putAway
        }), void 0 === zB && (0, VB.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var Xz = zB(1948);

    function Zz(BB) {
      return Math.cos((0, Xz.p)(BB))
    }

    function Az(BB) {
      return (0, Xz.G)(Math.acos(Sj.b.clamp(BB, -1, 1)))
    }

    function Tz(BB, jB, zB, QB, nB) {
      const dB = Math.abs(jB - BB),
        IB = (0, Xz.G)(nB / (zB * Math.abs(Math.sin((0, Xz.p)(BB))))),
        NB = 450 * Math.min(1, dB / QB),
        uB = IB > 0 ? 3 * dB / IB : 1 / 0;
      return Math.round(Math.max(120, Math.min(NB, uB)))
    }
    class Pz {
      constructor() {
        this.samples = []
      }
      add(BB, jB) {
        for (this.samples.push({
            x: BB,
            at: jB
          }); jB - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const BB = this.samples[0],
          jB = this.samples[this.samples.length - 1];
        return jB.at > BB.at ? (jB.x - BB.x) / (jB.at - BB.at) : 0
      }
    }

    function Wz(BB) {
      return Az(new DOMMatrixReadOnly(getComputedStyle(BB).transform).m11)
    }

    function ez(BB, jB) {
      BB.style.transform = `rotateY(${-jB}deg)`, BB.classList.add("Turning")
    }

    function lz(BB, jB, zB) {
      const [QB, nB] = (0, dB.useState)(zB), IB = (0, dB.useRef)(null), NB = (0, dB.useRef)(null), uB = (0, dB.useRef)({
        Forward: null,
        Back: null
      }), UB = jB ? 2 : 1, aB = jB ? 180 : 90, pB = QB - QB % UB, rB = pB > 0, sB = pB + UB < BB, JB = (0, dB.useCallback)((() => {
        const BB = NB.current;
        return null === BB ? pB : (NB.current = null, BB.animation.cancel(), (jB = uB.current[BB.direction]).style.transform = "", jB.classList.remove("Turning"), null === BB.next ? pB : (nB(BB.next), BB.next));
        var jB
      }), [pB]), mB = (0, dB.useCallback)(((BB, jB, zB, QB) => {
        const nB = uB.current[BB],
          dB = Wz(nB),
          IB = jB === ("Forward" === BB) ? aB : 0;
        ez(nB, IB);
        const pB = nB.animate([{
          transform: `rotateY(${-dB}deg)`
        }, {
          transform: `rotateY(${-IB}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : Tz(dB, IB, nB.offsetWidth, aB, IB > dB ? -zB : zB),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        NB.current = {
          direction: BB,
          animation: pB,
          next: jB ? QB + ("Forward" === BB ? UB : -UB) : null
        }, pB.onfinish = () => {
          var BB;
          (null === (BB = NB.current) || void 0 === BB ? void 0 : BB.animation) === pB && JB()
        }
      }), [UB, aB, JB]), yB = (0, dB.useCallback)((jB => {
        if (null !== IB.current) return;
        const zB = JB();
        ("Forward" === jB ? zB + UB < BB : zB > 0) && mB(jB, !0, 0, zB)
      }), [JB, mB, UB, BB]);
      (0, dB.useEffect)((() => () => {
        var BB;
        null === (BB = NB.current) || void 0 === BB || BB.animation.cancel()
      }), []), (0, dB.useEffect)((() => {
        const BB = BB => {
          var jB;
          BB.pointerId !== (null === (jB = IB.current) || void 0 === jB ? void 0 : jB.pointerId) || IB.current.following || (IB.current = null)
        };
        return window.addEventListener("pointerup", BB), () => {
          window.removeEventListener("pointerup", BB)
        }
      }), []);
      const kB = (BB, jB, zB) => {
          const QB = function(BB, jB, zB, QB) {
            return (BB < 0 ? zB : QB) ? Sj.b.clampAbs(BB, jB) : Math.sign(BB) * jB * (1 - 1 / (.55 * Math.abs(BB) / jB + 1))
          }(BB.base + zB, UB * BB.width, sB, rB);
          return "Forward" === jB ? Math.min(QB, 0) : Math.max(QB, 0)
        },
        GB = (BB, jB) => {
          const zB = IB.current;
          if (IB.current = null, null === zB.direction) return;
          zB.speed.add(BB, jB);
          const QB = zB.speed.get(),
            nB = kB(zB, zB.direction, BB - zB.x);
          mB(zB.direction, null !== function(BB, jB, zB, QB, nB) {
            if (Math.abs(jB) >= .3 ? Math.sign(jB) !== Math.sign(BB) : Math.abs(BB) < .5 * zB) return null;
            const dB = BB < 0 ? "Forward" : "Back";
            return ("Forward" === dB ? QB : nB) ? dB : null
          }(nB, QB, UB * zB.width, sB, rB), QB, pB)
        },
        LB = {
          onPointerDown: BB => {
            var jB;
            if (!BB.isPrimary || 0 !== BB.button || null !== NB.current && null !== BB.target.closest("button")) return;
            const zB = new Pz;
            zB.add(BB.clientX, BB.timeStamp);
            const QB = uB.current.Forward.offsetWidth,
              nB = NB.current;
            NB.current = null;
            let dB = 0;
            if (null !== nB) {
              const jB = uB.current[nB.direction],
                zB = Wz(jB);
              nB.animation.cancel(), ez(jB, zB), dB = function(BB, jB, zB, QB) {
                return (BB < 0 ? zB : QB) ? BB : Math.sign(BB) * jB * (1 / (1 - Math.min(Math.abs(BB) / jB, .99)) - 1) / .55
              }(function(BB, jB, zB, QB) {
                return zB * (Zz(jB) - Zz("Forward" === BB ? 0 : QB))
              }(nB.direction, zB, QB, aB), UB * QB, sB, rB), BB.currentTarget.setPointerCapture(BB.pointerId)
            }
            IB.current = {
              pointerId: BB.pointerId,
              x: BB.clientX,
              y: BB.clientY,
              base: dB,
              width: QB,
              following: null !== nB,
              direction: null !== (jB = null === nB || void 0 === nB ? void 0 : nB.direction) && void 0 !== jB ? jB : null,
              speed: zB
            }
          },
          onPointerMove: BB => {
            const jB = IB.current;
            if (null === jB || BB.pointerId !== jB.pointerId) return;
            if (0 === BB.buttons) return void GB(BB.clientX, BB.timeStamp);
            const zB = BB.clientX - jB.x;
            !jB.following && function(BB, jB) {
              return Math.abs(BB) > 8 && Math.abs(BB) > Math.abs(jB)
            }(zB, BB.clientY - jB.y) && (jB.following = !0, jB.direction = zB < 0 ? "Forward" : "Back", BB.currentTarget.setPointerCapture(BB.pointerId)), null !== jB.direction && (jB.speed.add(BB.clientX, BB.timeStamp), ez(uB.current[jB.direction], function(BB, jB, zB, QB) {
              const nB = zB * Zz("Forward" === BB ? 0 : QB) + jB;
              return Sj.b.clamp(Az(nB / zB), 0, QB)
            }(jB.direction, kB(jB, jB.direction, zB), jB.width, aB)))
          },
          onPointerUp: BB => {
            var jB;
            BB.pointerId === (null === (jB = IB.current) || void 0 === jB ? void 0 : jB.pointerId) && GB(BB.clientX, BB.timeStamp)
          },
          onPointerCancel: BB => {
            const jB = IB.current;
            BB.pointerId === (null === jB || void 0 === jB ? void 0 : jB.pointerId) && (IB.current = null, null !== jB.direction && mB(jB.direction, !1, 0, pB))
          }
        };
      return {
        first: pB,
        step: UB,
        canGoBack: rB,
        canGoForward: sB,
        turnPage: yB,
        leaves: uB,
        pagesHandlers: LB
      }
    }

    function wz(BB, jB) {
      return BB > jB && BB >= 600
    }

    function xz(BB) {
      let {
        journal: jB,
        hud: zB,
        guide: QB
      } = BB;
      const {
        t: nB
      } = (0, aB.D)(), NB = (0, uB.h)(FB, jB.getPages()), UB = (0, uB.h)(jj, zB.getGuide()), pB = NB.find((BB => BB.active)), sB = (JB = UB, mB = void 0 === pB ? null : pB.id, "active" === JB[0] && null === mB);
      var JB, mB;
      const yB = (0, qz.l)(wz),
        {
          first: kB,
          step: gB,
          canGoBack: tB,
          canGoForward: SB,
          turnPage: MB,
          leaves: EB,
          pagesHandlers: iB
        } = lz(NB.length, yB, (() => function(BB) {
          const jB = BB.findIndex((BB => BB.active));
          return -1 !== jB ? jB : Math.max(0, BB.findIndex((BB => "open" === BB.state)))
        }(NB)));
      (0, dB.useEffect)((() => {
        jB.onOpened()
      }), [jB]), (0, GB.c)((BB => !sB && ("ArrowLeft" === BB.code || "ArrowRight" === BB.code) && !(0, LB.isTypingInInput)()), (BB => {
        BB.stopPropagation(), MB("ArrowLeft" === BB.code ? "Back" : "Forward")
      }));
      const qB = void 0 !== pB,
        fB = (BB, zB, QB) => (0, VB.jsx)(hz, {
          className: BB,
          page: zB >= 0 && zB < NB.length ? NB[zB] : void 0,
          hidden: QB,
          building: qB,
          journal: jB
        });
      return (0, VB.jsx)(iz.d, {
        close: IB.f,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, VB.jsxs)("section", {
          className: rB()("PlotsJournal", {
            Spread: yB
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": nB("plotsGame:journalTitle"),
          children: [(0, VB.jsx)(Ez.j, {
            className: "PlotsJournalClose",
            onClick: IB.f
          }), "active" === UB[0] && (0, VB.jsx)(uj, {
            className: "PlotsJournalGuideSkip",
            onSkip: QB.skip
          }), sB && (0, VB.jsx)(Dz, {
            onBuild: jB.build
          }), !sB && (0, VB.jsx)(Fz, {
            direction: "Back",
            disabled: !tB,
            onTurn: MB
          }), (0, VB.jsx)("div", {
            hidden: sB,
            className: "PlotsJournalBookPages",
            ...iB,
            children: (0, VB.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [yB && fB("Left", kB - 2, !0), fB("Right", kB + 2 * gB - 1, !0), (0, VB.jsxs)("div", {
                ref: BB => {
                  EB.current.Back = BB
                },
                className: "PlotsJournalLeaf Back",
                children: [fB("Recto", kB - 1, !0), yB && fB("Verso", kB, !1)]
              }), (0, VB.jsxs)("div", {
                ref: BB => {
                  EB.current.Forward = BB
                },
                className: "PlotsJournalLeaf Forward",
                children: [fB("Recto", kB + gB - 1, !1), yB && fB("Verso", kB + gB, !0)]
              })]
            })
          }), !sB && (0, VB.jsx)(Fz, {
            direction: "Forward",
            disabled: !SB,
            onTurn: MB
          })]
        })
      })
    }

    function Kz(BB, jB, zB, QB, nB) {
      const dB = Math.hypot(...jB.dir);
      if (!Number.isFinite(dB) || 0 === dB) return -1;
      const {
        from: IB,
        reach: NB,
        solid: uB
      } = jB, UB = [jB.dir[0] / dB, jB.dir[1] / dB, jB.dir[2] / dB], aB = null === uB ? NB : Math.min(NB, function(BB, jB, zB) {
        const QB = Cz(BB, jB, zB);
        if (QB !== 1 / 0) return QB;
        return (zB[0] + .5 - BB[0]) * jB[0] + (zB[1] + .5 - BB[1]) * jB[1] + (zB[2] + .5 - BB[2]) * jB[2]
      }(IB, UB, uB) + .75);
      let pB = -1,
        rB = 1 / 0,
        sB = 1 / 0;
      for (let JB = 0; JB < BB.length; JB += 4) {
        const jB = [BB[JB], BB[JB + 1], BB[JB + 2]],
          dB = nB(JB) ? NB : aB;
        let uB = -1,
          mB = Cz(IB, UB, jB);
        if (mB > dB) {
          const BB = [jB[0] + .5 - IB[0], jB[1] + .5 - IB[1], jB[2] + .5 - IB[2]];
          if (mB = BB[0] * UB[0] + BB[1] * UB[1] + BB[2] * UB[2], mB <= 0 || mB > dB) continue;
          if (uB = Math.hypot(BB[0] - mB * UB[0], BB[1] - mB * UB[1], BB[2] - mB * UB[2]), uB > .7 || !QB(JB)) continue
        }(uB < rB || uB === rB && mB < sB) && zB(JB) && (pB = JB, rB = uB, sB = mB)
      }
      return pB
    }

    function Cz(BB, jB, zB) {
      let QB = 0,
        nB = 1 / 0;
      for (let dB = 0; dB < 3; dB++) {
        const IB = zB[dB] - BB[dB];
        if (0 === jB[dB]) {
          if (IB > 0 || IB + 1 < 0) return 1 / 0;
          continue
        }
        const NB = IB / jB[dB],
          uB = (IB + 1) / jB[dB];
        QB = Math.max(QB, Math.min(NB, uB)), nB = Math.min(nB, Math.max(NB, uB))
      }
      return QB <= nB ? QB : 1 / 0
    }
    var cz = zB(36964),
      bz = zB(38142);
    const vz = [1, 1, 1];
    class Rz {
      constructor(BB) {
        this.api = BB, this.meshes = null, this.shown = null
      }
      show(BB) {
        if (!(0, cz.e)(BB, this.shown))
          if (this.shown = null === BB ? null : [BB[0], BB[1], BB[2]], null !== this.meshes)
            for (const jB of this.meshes) this.api.setGameMesh(jB, null === BB ? {
              visible: !1
            } : {
              anchor: BB,
              visible: !0
            });
          else if (null !== BB) {
          const jB = [bz.f, bz.f, bz.f, 0, 0, 0];
          this.meshes = [this.build([jB], bz.g, BB), this.build((0, bz.e)(), bz.m, BB)]
        }
      }
      dispose() {
        for (const jB of null !== (BB = this.meshes) && void 0 !== BB ? BB : []) {
          var BB;
          this.api.disposeGameMesh(jB)
        }
        this.meshes = null, this.shown = null
      }
      build(BB, jB, zB) {
        const QB = [],
          nB = [];
        for (const [dB, IB, NB, uB, UB, aB] of BB)(0, Kj.g)(QB, nB, [uB + .5, UB + .5, aB + .5], [dB, IB, NB]);
        return this.api.createGameMesh({
          positions: QB,
          indices: nB
        }, {
          rgb: vz,
          alpha: jB,
          onTop: !0
        }, zB)
      }
    }

    function Oz(BB, jB) {
      const zB = wj.e.Oy / 2;
      return BB[0] < jB[0] + zB && BB[0] + 1 > jB[0] - zB && BB[1] < jB[1] + wj.e.Bk && BB[1] + 1 > jB[1] && BB[2] < jB[2] + zB && BB[2] + 1 > jB[2] - zB
    }

    function BQ(BB, jB) {
      return BB.getClientOption(jB, "blockReach") + 1
    }
    class jQ {
      constructor(BB, jB, zB) {
        this.api = BB, this.localPlayerId = jB, this.foreseen = zB, this.cells = [], this.playerCells = [], this.next = null
      }
      get() {
        return this.next
      }
      setCells(BB) {
        this.cells = BB
      }
      playerMoved() {
        return zQ(this.api.getPositionView(this.localPlayerId)).some(((BB, jB) => BB !== this.playerCells[jB]))
      }
      zs(BB) {
        const jB = this.api.getPositionView(this.localPlayerId);
        return this.playerCells.splice(0, 1 / 0, ...zQ(jB)), this.next = this.pickFrom(null === BB ? [jB[0], jB[1] + 1, jB[2]] : (0, cz.c)(BB), (() => !1)), this.next
      }
      pickFrom(BB, jB) {
        const zB = this.api.getPositionView(this.localPlayerId),
          QB = [zB[0], zB[1] + wj.e.Bk * wj.e.playerEyeToHeightRatio, zB[2]],
          nB = BQ(this.api, this.localPlayerId),
          {
            cells: dB
          } = this,
          IB = BB => [dB[BB], dB[BB + 1], dB[BB + 2]],
          NB = function(BB, jB, zB, QB, nB, dB) {
            let IB = -1,
              NB = -1,
              uB = 1 / 0;
            for (let UB = 0; UB < BB.length; UB += jB) {
              const jB = (dB(UB) ? 2 : 0) + (QB(UB) ? 1 : 0);
              if (jB < NB || nB(UB)) continue;
              const aB = (BB[UB] + .5 - zB[0]) ** 2 + (BB[UB + 1] + .5 - zB[1]) ** 2 + (BB[UB + 2] + .5 - zB[2]) ** 2;
              (jB > NB || aB < uB) && (IB = UB, NB = jB, uB = aB)
            }
            return IB
          }(dB, 4, BB, (BB => 1 === dB[BB + 3]), (BB => {
            const QB = IB(BB);
            return Oz(QB, zB) || this.foreseen.has(QB.join()) || jB(QB)
          }), (BB => function(BB, jB, zB) {
            return (jB[0] + .5 - BB[0]) ** 2 + (jB[1] + .5 - BB[1]) ** 2 + (jB[2] + .5 - BB[2]) ** 2 <= zB ** 2
          }(QB, IB(BB), nB)));
        return -1 === NB ? null : IB(NB)
      }
    }

    function zQ(BB) {
      let [jB, zB, QB] = BB;
      const nB = wj.e.Oy / 2;
      return [Math.floor(jB), Math.floor(zB), Math.floor(QB), Math.floor(jB - nB), Math.floor(jB + nB), Math.floor(zB + wj.e.Bk), Math.floor(QB - nB), Math.floor(QB + nB)]
    }
    class QQ {
      constructor(BB, jB, zB) {
        this.api = BB, this.localPlayerId = jB, this.pickNext = zB, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(BB) {
        const [jB, , zB] = BB.cameraDirection, QB = Math.hypot(jB, zB);
        QB > .001 && (this.heading = [jB / QB, zB / QB])
      }
      tapped(BB, jB, zB) {
        const QB = BQ(this.api, this.localPlayerId),
          {
            origin: nB,
            direction: dB
          } = this.api.getActionRay(),
          IB = [...nB],
          NB = [
            [IB, [IB[0] + dB[0] * QB, IB[1] + dB[1] * QB, IB[2] + dB[2] * QB]]
          ];
        null !== BB && NB.push([IB, (0, cz.c)(BB)]), this.tap = {
          lines: NB,
          next: jB,
          ms: zB
        }
      }
      filled(BB, jB) {
        this.tap = null, this.turnFrom(BB, jB), this.retry(jB)
      }
      arrived(BB, jB) {
        const {
          tap: zB
        } = this;
        if (null === zB || jB - zB.ms > 1500) return null;
        const QB = (0, cz.c)(BB);
        return (0, cz.e)(zB.next, BB) || zB.lines.some((BB => {
          let [jB, zB] = BB;
          return function(BB, jB, zB) {
            const QB = [zB[0] - jB[0], zB[1] - jB[1], zB[2] - jB[2]],
              nB = [BB[0] - jB[0], BB[1] - jB[1], BB[2] - jB[2]],
              dB = QB[0] ** 2 + QB[1] ** 2 + QB[2] ** 2,
              IB = 0 === dB ? 0 : Math.min(1, Math.max(0, (nB[0] * QB[0] + nB[1] * QB[1] + nB[2] * QB[2]) / dB));
            return Math.hypot(nB[0] - QB[0] * IB, nB[1] - QB[1] * IB, nB[2] - QB[2] * IB)
          }(QB, jB, zB) <= .9
        })) ? (this.tap = null, this.turnFrom(BB, jB), zB.ms) : null
      }
      turnFrom(BB, jB) {
        this.pending = {
          from: BB,
          ms: jB,
          turnMs: Math.max(50, Math.min(250, jB - this.lastFillMs))
        }, this.lastFillMs = jB
      }
      retry(BB) {
        const {
          pending: jB
        } = this;
        if (null === jB) return;
        if (BB - jB.ms > 1500) return void(this.pending = null);
        const zB = this.pickNext((0, cz.c)(jB.from), (BB => (0, cz.e)(BB, jB.from)));
        if (null === zB) return;
        this.pending = null;
        const {
          turning: QB
        } = this;
        if (null !== QB && BB < QB.endMs && (0, cz.e)(QB.to, zB)) return;
        const nB = this.api.getActionRay().origin,
          dB = [zB[0] + .5 - nB[0], zB[1] + .5 - nB[1], zB[2] + .5 - nB[2]],
          IB = Math.hypot(dB[0], dB[2]);
        if (IB < .3) {
          const BB = Math.max(IB, .001);
          dB[0] = this.heading[0] * BB, dB[2] = this.heading[1] * BB
        }
        this.api.turnCamera(dB, jB.turnMs), this.turning = {
          to: zB,
          endMs: BB + jB.turnMs
        }
      }
    }
    class nQ {
      constructor(BB, jB, zB, QB) {
        this.api = BB, this.localPlayerId = jB, this.juice = zB, this.tracker = QB, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.lastFilled = null, this.lastSeenFilled = null, this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = void 0, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new xj(BB), this.meshes = new Oj(BB), this.outline = new Rz(BB), this.nextCell = new jQ(BB, jB, this.foreseen), this.turn = new QQ(BB, jB, ((BB, jB) => this.nextCell.pickFrom(BB, jB)))
      }
      VJ(BB) {
        const jB = "active" === BB[0] ? `${BB[1]}|${BB[3]}|${BB[4]}|${BB[5]}|${BB[6]}` : "";
        if ("active" !== BB[0]) "built" === BB[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , zB, QB, nB, dB] = BB;
          jB !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = zB) : zB === this.layerY ? this.burstUnlisted(QB) : zB > this.layerY && this.finishLayer(zB), this.layerY = zB, this.layerCells.has(zB) || this.layerCells.set(zB, QB.filter(dQ)), this.ghostCells = QB, this.palette = nB, this.occupiedCells = dB
        }
        jB !== this.blueprint && (this.tracker.show("active" === BB[0] && BB[2] ? {
          id: BB[1],
          y: BB[4]
        } : null), this.blueprint = jB, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((BB => this.api.blockNameToBlockId(BB))), this.chunkWatch.watch([...this.ghostCells.filter(dQ), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(BB) {
        this.burstUnlisted([]), BB > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = BB)
      }
      vp() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const BB = performance.now();
        let jB = !1;
        for (const [QB, nB] of this.foreseen) {
          var zB;
          if (BB - nB > 1e3) this.foreseen.delete(QB), jB = !0, (null === (zB = this.lastFilled) || void 0 === zB ? void 0 : zB.join()) === QB && (this.lastFilled = this.lastSeenFilled)
        }(jB || this.nextCell.playerMoved()) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(BB) {
        const jB = new Set;
        for (let nB = 0; nB < BB.length; nB += 4) jB.add(`${BB[nB]},${BB[nB+1]},${BB[nB+2]}`);
        const zB = [],
          {
            ghostCells: QB
          } = this;
        for (let nB = 0; nB < QB.length; nB += 4) {
          const BB = `${QB[nB]},${QB[nB+1]},${QB[nB+2]}`;
          !jB.has(BB) && this.open.delete(BB) && zB.push(this.filledCell(nB))
        }
        this.burst(zB)
      }
      refresh() {
        const {
          ghostCells: BB,
          palette: jB,
          occupiedCells: zB
        } = this, QB = new Rj, nB = new Set, dB = [], IB = [];
        let NB = 0;
        for (let uB = 0; uB < BB.length; uB += 4) {
          const [zB, UB, aB, pB] = [BB[uB], BB[uB + 1], BB[uB + 2], BB[uB + 3]], rB = this.api.getBlockId(zB, UB, aB), sB = `${zB},${UB},${aB}`, JB = Fj(this.blockIds[pB], rB);
          !JB && Yj(rB) ? QB.add(zB, UB, aB, hj(jB[pB]), cj, lj(jB[pB])) : JB ? this.open.has(sB) && dB.push(this.filledCell(uB)) : QB.add(zB, UB, aB, vj, bj), JB || NB++, !JB && this.api.isBlockInLoadedChunk(zB, UB, aB) && (nB.add(sB), IB.push(zB, UB, aB, Yj(rB) ? 0 : 1))
        }
        this.open = nB, this.nextCell.setCells(IB), this.tracker.update(this.layerY, this.topLayerY, NB);
        for (let uB = 0; uB < zB.length; uB += 3) {
          const [BB, jB, nB] = [zB[uB], zB[uB + 1], zB[uB + 2]];
          Yj(this.api.getBlockId(BB, jB, nB)) || QB.add(BB, jB, nB, vj, bj)
        }
        this.meshes.show(QB.toArray()), this.burst(dB), this.showNext(), this.turn.retry(performance.now())
      }
      burst(BB) {
        const jB = performance.now(),
          zB = [];
        for (const [nB, dB, IB] of BB) {
          const BB = [nB, dB, IB];
          this.lastSeenFilled = BB, this.foreseen.delete(BB.join()) || zB.push(BB)
        }
        const QB = this.isHolding(jB);
        for (const nB of zB) {
          if (this.lastFilled = nB, QB && this.pressFilled) {
            this.turn.filled(nB, jB);
            continue
          }
          const BB = this.turn.arrived(nB, jB);
          if (null !== BB) {
            this.pressFilled = QB;
            for (const [jB, zB] of this.foreseen) zB <= BB && this.foreseen.delete(jB)
          }
        }
        this.juice.filled(BB)
      }
      showNext() {
        var BB;
        this.outline.show(null !== (BB = this.aimed) && void 0 !== BB ? BB : this.nextCell.zs(this.lastFilled))
      }
      afterRender(BB) {
        var jB;
        this.turn.look(BB);
        const zB = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === zB ? null : zB.position), this.outline.show(null !== (jB = this.aimed) && void 0 !== jB ? jB : this.nextCell.get())
      }
      isHolding(BB) {
        return null !== this.altMs && BB - this.altMs <= 500
      }
      attemptAltAction(BB) {
        const jB = performance.now();
        if (this.isHolding(jB) || (this.pressFilled = !1), this.altMs = jB, this.pressFilled) return "preventPlacement";
        const zB = this.findAimed(BB);
        if (null !== zB) return this.foreseen.set(zB.join(), jB), this.lastFilled = zB, this.aimed = null, this.showNext(), this.turn.filled(zB, jB), this.pressFilled = !0, "preventPlacement";
        {
          const zB = this.nextCell.get();
          null !== zB && this.turn.tapped(BB, zB, jB)
        }
      }
      holdPressOnEntity() {
        const BB = performance.now();
        this.pressFilled && this.isHolding(BB) && (this.altMs = BB)
      }
      findAimed(BB) {
        return function(BB, jB, zB, QB, nB, dB, IB) {
          const NB = BB.ZjB(jB),
            uB = null === NB || null === BB.blockNameToBlockId(NB.name, !0) ? null : NB.name,
            UB = BB.getPositionView(jB),
            {
              origin: aB,
              direction: pB
            } = BB.getActionRay(),
            rB = Kz(QB, {
              from: aB,
              dir: pB,
              reach: BQ(BB, jB),
              solid: zB
            }, (jB => {
              const zB = [QB[jB], QB[jB + 1], QB[jB + 2]];
              return !Fj(nB[QB[jB + 3]], BB.getBlockId(...zB)) && !IB.has(zB.join()) && BB.isBlockInLoadedChunk(...zB) && !Oz(zB, UB)
            }), (BB => null === uB || uB === Vj(nB[QB[BB + 3]])), (BB => null !== dB && QB[BB] === dB[0] && QB[BB + 1] === dB[1] && QB[BB + 2] === dB[2]));
          return -1 === rB ? null : [QB[rB], QB[rB + 1], QB[rB + 2]]
        }(this.api, this.localPlayerId, BB, this.ghostCells, this.blockIds, this.nextCell.get(), this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(BB) {
        const {
          ghostCells: jB
        } = this, [zB, QB, nB] = hj(this.palette[jB[BB + 3]]);
        return [jB[BB], jB[BB + 1], jB[BB + 2], zB, QB, nB]
      }
    }

    function dQ(BB, jB) {
      return jB % 4 !== 3
    }
    class IQ {
      constructor(BB) {
        this.api = BB, this.sent = !1
      }
      vp() {
        this.sent || NB.c.get("loadingOverlayVisible") || (this.sent = !0, this.api.sendCommand("plotsentered"))
      }
    }
    var NQ = zB(4334),
      uQ = zB(39245);

    function UQ(BB, jB, zB) {
      const QB = [255 * BB, 255 * jB, 255 * zB],
        [nB, dB, IB] = QB.map((BB => BB + .4 * (255 - BB)));
      return {
        texture: "square_particle",
        Ep: 48,
        minLifeTime: .3 / uQ.e,
        maxLifeTime: .55 / uQ.e,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * uQ.e * uQ.e, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...QB, 1],
          maxColor: [nB, dB, IB, 1]
        }, {
          timeFraction: 1,
          minColor: [...QB, 0],
          maxColor: [nB, dB, IB, 0]
        }],
        blendMode: NQ.d.Standard
      }
    }
    const aQ = {
      texture: "glint",
      mipmaps: !1,
      Ep: 96,
      minLifeTime: .5 / uQ.e,
      maxLifeTime: .9 / uQ.e,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * uQ.e * uQ.e, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: NQ.d.OneOne
    };
    class pQ {
      constructor(BB, jB) {
        this.api = BB, this.localPlayerId = jB, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(BB) {
        if (this.api.particlesEnabled())
          for (const [jB, zB, QB, nB, dB, IB] of BB.slice(0, 3)) {
            const BB = `${nB},${dB},${IB}`;
            let NB = this.chips.get(BB);
            void 0 === NB && (NB = this.api.createParticles(UQ(nB, dB, IB), {
              pos: [jB + .5, zB + .5, QB + .5]
            }), this.chips.set(BB, NB));
            for (let jB = 0; jB < 8; jB++) this.setPoint(jB, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            NB.emitPoints([jB + .5, zB + .5, QB + .5], this.points, 8)
          }
      }
      layerDone(BB) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const jB = BB.length / 3;
        if (0 === jB || !this.api.particlesEnabled()) return;
        const zB = Math.min(jB, 48),
          [QB, nB, dB] = [BB[0] + .5, BB[1] + 1, BB[2] + .5];
        let IB = 0;
        for (let NB = 0; NB < zB; NB++) {
          const uB = 3 * Math.floor(NB * jB / zB);
          for (let jB = 0; jB < 2; jB++) this.setPoint(IB++, BB[uB] + Math.random() - QB, BB[uB + 1] + 1 - nB, BB[uB + 2] + Math.random() - dB, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(aQ, {
          pos: [QB, nB, dB]
        }), this.sparkles.emitPoints([QB, nB, dB], this.points, IB)
      }
      dispose() {
        var BB;
        for (const jB of this.chips.values()) jB.stop();
        this.chips.clear(), null === (BB = this.sparkles) || void 0 === BB || BB.stop(), this.sparkles = null
      }
      setPoint(BB, jB, zB, QB, nB) {
        const dB = 4 * BB;
        this.points[dB] = jB, this.points[dB + 1] = zB, this.points[dB + 2] = QB, this.points[dB + 3] = nB
      }
    }
    const rQ = "SpecialAction1",
      sQ = "KeyY",
      JQ = "KeyX";

    function mQ(BB) {
      let {
        placement: jB
      } = BB;
      const zB = (0, uB.h)(Nz, jB.getView()),
        {
          t: QB
        } = (0, aB.D)(),
        {
          isTouchScreen: nB
        } = (0, NB.m)(["isTouchScreen"]),
        IB = (0, dB.useContext)(tB),
        pB = null !== zB,
        mB = pB && !zB.blocked && !zB.waiting;
      if ((0, GB.c)((BB => pB && !BB.repeat && !(0, LB.isTypingInInput)() && !(0, sB.m)() && !nB), (BB => {
          const zB = function(BB, jB, zB) {
            if (BB === JQ) return jB.stop;
            if (BB === sQ) return zB ? jB.build : kQ;
            return UB.w[rQ].includes(BB) ? jB.rotate : null
          }(BB.code, jB, mB);
          null !== zB && (BB.stopPropagation(), zB())
        })), !pB) return null;
      let yB = nB ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return zB.blocked ? yB = "plotsGame:placementOffPlot" : zB.toClear > 0 ? yB = "plotsGame:placementClear" : "placeSpot" !== IB.hint && "placeBuild" !== IB.hint || (yB = null), (0, VB.jsx)(JB.e, {
        placement: "bottom",
        children: (0, VB.jsxs)("div", {
          ref: IB.placementCardRef,
          className: "PlotsPlacementCard",
          children: [(0, VB.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: QB(qB(zB.id).displayName.translationKey)
          }), null !== yB && (0, VB.jsx)("div", {
            className: rB()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: zB.refusals > 0
            }),
            children: QB(yB)
          }, zB.refusals), (0, VB.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, VB.jsxs)(Ez.f, {
              onClick: jB.rotate,
              children: [(0, VB.jsx)(yQ, {
                noaAction: rQ
              }), QB("plotsGame:placementRotate")]
            }), (0, VB.jsxs)(Ez.G, {
              onClick: jB.stop,
              children: [(0, VB.jsx)(yQ, {
                keyCode: JQ
              }), QB("general:cancel")]
            }), (0, VB.jsx)("span", {
              ref: IB.buildRef,
              className: rB()("PlotsPlacementBuild", {
                Pulse: "placeBuild" === IB.hint && mB && nB
              }),
              children: (0, VB.jsxs)(Ez.m, {
                disabled: !mB,
                onClick: jB.build,
                children: [(0, VB.jsx)(yQ, {
                  keyCode: sQ
                }), QB("plotsGame:placementBuild")]
              })
            })]
          })]
        })
      })
    }

    function yQ(BB) {
      return (0, VB.jsx)(kB.b, {
        className: "PlotsPlacementKey",
        ...BB
      })
    }

    function kQ() {}
    var GQ = zB(2458),
      LQ = zB(36762),
      gQ = zB(2025),
      tQ = zB(1292);
    const SQ = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function MQ(BB) {
      let {
        hud: jB
      } = BB;
      const zB = (0, uB.h)(Bj, jB.getPlot()),
        [QB, nB] = (0, dB.useState)(null),
        IB = (0, LQ.o)(QB);
      if ("none" === zB[0]) return null;
      const [, NB, UB, aB, pB, sB] = zB;
      return (0, VB.jsx)("div", {
        className: rB()("PlotsPlotBannerContainer", {
          Below: IB
        }),
        children: (0, VB.jsx)(EQ, {
          plotX: NB,
          plotZ: UB,
          ownerName: aB,
          ownerId: pB,
          relation: sB,
          plaqueRef: nB
        }, `${NB},${UB}`)
      })
    }

    function EQ(BB) {
      var jB, zB;
      let {
        plotX: QB,
        plotZ: nB,
        ownerName: dB,
        ownerId: IB,
        relation: NB,
        plaqueRef: uB
      } = BB;
      const {
        t: UB
      } = (0, aB.D)(), pB = (0, gQ.k)("hiddenPlayerNames"), sB = (0, gQ.k)("players"), JB = null === IB ? null : null !== (jB = null === (zB = sB.byId[IB]) || void 0 === zB ? void 0 : zB.cosmetics) && void 0 !== jB ? jB : null, yB = UB("plotsGame:plotBannerCoords", {
        x: QB,
        z: nB
      }), kB = "own" === NB || null !== dB;
      return (0, VB.jsxs)("div", {
        ref: uB,
        className: rB()("PlotsPlotBanner", {
          Own: "own" === NB,
          Shared: "shared" === NB
        }),
        role: "status",
        children: [(0, VB.jsxs)("span", {
          className: rB()("PlotsPlotBannerSeal", {
            Face: null !== JB
          }),
          children: [null !== JB && (0, VB.jsx)(GQ.c, {
            cosmetics: JB
          }), null === JB && (0, VB.jsx)(mB.c, {
            name: SQ[NB]
          })]
        }), (0, VB.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, VB.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === NB && UB("plotsGame:plotBannerYours"), "own" !== NB && null !== dB && UB("plotsGame:plotBannerOwner", {
              name: (0, tQ.h)(dB, pB)
            }), !kB && yB]
          }), kB && (0, VB.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [yB, "shared" === NB && (0, VB.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: UB("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }
    const iQ = function(BB, jB, zB, QB) {
      let {
        localPlayerId: nB
      } = QB;
      const NB = new Qj;
      let uB = null,
        UB = null,
        aB = null,
        pB = null,
        rB = null,
        sB = null;
      const JB = [];
      return {
        onCreate: BB => {
          uB = new pQ(BB, nB);
          const jB = new OB;
          UB = new nQ(BB, nB, uB, jB), aB = new Uz(BB, nB), pB = new YB(BB, aB), rB = new Mz(BB, nB, UB.nextCell), sB = new IQ(BB), JB.push((0, IB.t)((0, dB.createElement)(gz, {
            hud: NB,
            guide: rB,
            tracker: jB,
            placement: aB
          }, (0, dB.createElement)(MQ, {
            hud: NB
          }), (0, dB.createElement)(XB, {
            journal: pB
          }), (0, dB.createElement)(mz, {
            placement: aB
          }), (0, dB.createElement)(mQ, {
            placement: aB
          })), {
            content: (0, dB.createElement)(xz, {
              journal: pB,
              hud: NB,
              guide: rB
            })
          }))
        },
        vp: () => {
          sB.vp(), UB.vp(), aB.vp(), pB.vp()
        },
        onPlayerAttemptAltAction: (BB, jB, zB, QB, nB, dB) => {
          if (null !== dB) return void UB.holdPressOnEntity();
          const IB = void 0 === jB ? null : [jB, zB, QB];
          return UB.attemptAltAction(IB)
        },
        onPlayerClickUp: () => {
          UB.endPress()
        },
        onAfterRender: (BB, jB) => {
          aB.afterRender(jB), UB.afterRender(jB), rB.afterRender(jB)
        },
        onClose: () => {
          for (const BB of JB) BB();
          uB.dispose(), UB.dispose(), aB.dispose(), uB = null, UB = null, aB = null, pB = null, rB = null, sB = null
        },
        onReceivedMessageFromServer: (BB, jB) => {
          if ("plotsPlot" === BB) NB.receivePlot(jB);
          else if ("plotsBlueprint" === BB) {
            const BB = jB;
            UB.VJ(BB), aB.VJ(BB)
          } else "plotsJournal" === BB ? pB.VJ(jB) : "plotsJournalOpen" === BB ? pB.openFromServer(jB) : "plotsPreviewEnd" === BB ? aB.endFromServer() : "plotsGuide" === BB ? NB.receiveGuide(jB) : "plotsGuideDone" === BB && NB.receiveGuideDone()
        }
      }
    }
  },
  38585: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => NB
    });
    var QB = zB(38581);
    const nB = 5,
      dB = [0, 0, 0],
      IB = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function NB(BB, jB, zB, NB, uB, UB) {
      let [aB, pB, rB] = NB;
      const sB = (aB + .5 - zB[0]) ** 2 + (pB - zB[1]) ** 2 + (rB + .5 - zB[2]) ** 2;
      let JB = null;
      sB <= UB ** 2 && (dB[0] = aB + .5, dB[1] = pB + uB, dB[2] = rB + .5, JB = jB.projectWorldPosToViewport(dB));
      const mB = null !== JB && JB.x > -nB && JB.x < 100 + nB && JB.y > -nB && JB.y < 100 + nB;
      return (0, QB.g)(BB, !mB), mB ? (IB.x = JB.x, IB.y = JB.y, IB.distSq = sB, IB) : null
    }
  },
  39245: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => QB,
      g: () => dB
    });
    const QB = 1 / .6,
      nB = {
        kind: "smokePuff"
      };
    class dB {
      constructor(BB, jB, zB) {
        this.style = BB, this.Ep = jB, this.half = zB, this.particles = null, this.lastFrame = -1
      }
      emit(BB, jB, zB) {
        let dB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return zB !== this.lastFrame && (this.lastFrame = zB, this.particles || (this.particles = BB.createParticles(function(BB, jB) {
          const [
            [zB, dB, IB],
            [NB, uB, UB]
          ] = BB.colours;
          return {
            texture: BB.soft ? nB : "square_particle",
            Ep: jB,
            minLifeTime: BB.life[0] / QB,
            maxLifeTime: BB.life[1] / QB,
            minEmitPower: BB.power[0] * QB,
            maxEmitPower: BB.power[1] * QB,
            minSize: BB.size[0],
            maxSize: BB.size[1],
            emitRate: 0,
            gravity: [0, BB.lift * QB * QB, 0],
            dir1: [-BB.spread, 1, -BB.spread],
            dir2: [BB.spread, 1, BB.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [zB, dB, IB, BB.alpha],
              maxColor: [NB, uB, UB, BB.alpha]
            }, {
              timeFraction: 1,
              minColor: [zB, dB, IB, 0],
              maxColor: [NB, uB, UB, 0]
            }],
            blendMode: BB.blendMode
          }
        }(this.style, this.Ep), {
          pos: jB,
          half: this.half
        })), this.particles.moveTo(jB, this.half), this.particles.emit(dB), !0)
      }
      dispose() {
        var BB;
        null === (BB = this.particles) || void 0 === BB || BB.stop(), this.particles = null
      }
    }
  },
  38581: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => IB,
      g: () => dB
    });
    const QB = new WeakMap;

    function nB(BB) {
      let jB = QB.get(BB);
      return jB || (jB = {
        hidden: BB.hidden,
        x: NaN,
        y: NaN
      }, QB.set(BB, jB)), jB
    }

    function dB(BB, jB) {
      const zB = nB(BB);
      zB.hidden !== jB && (zB.hidden = jB, BB.hidden = jB)
    }

    function IB(BB, jB, zB) {
      const QB = nB(BB);
      QB.x === jB && QB.y === zB || (QB.x = jB, QB.y = zB, BB.style.translate = `${jB}vw ${zB}vh`)
    }
  },
  36964: (BB, jB, zB) => {
    function QB(BB, jB) {
      return null === BB || null === jB ? BB === jB : BB[0] === jB[0] && BB[1] === jB[1] && BB[2] === jB[2]
    }

    function nB(BB) {
      return [BB[0] + .5, BB[1] + .5, BB[2] + .5]
    }
    zB.d(jB, {
      c: () => nB,
      e: () => QB
    })
  },
  37002: (BB, jB, zB) => {
    function QB(BB) {
      return BB.includes("Leaf Bed")
    }

    function nB(BB) {
      return / Bed(?: Head)?(?:\||$)/.test(BB) && !QB(BB)
    }

    function dB(BB) {
      return BB.includes(" Strongbed")
    }

    function IB(BB) {
      return QB(BB) || nB(BB) || dB(BB)
    }
    zB.d(jB, {
      b: () => IB,
      f: () => QB,
      h: () => dB,
      i: () => nB
    })
  },
  36998: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => UB
    });
    var QB = zB(37002),
      nB = zB(9266);
    const dB = [],
      IB = [],
      NB = [],
      uB = [];
    for (const aB of Object.keys(nB.l))(0, QB.f)(aB) ? dB.push(aB) : (0, QB.i)(aB) && IB.push(aB), (0, QB.h)(aB) && NB.push(aB), (aB.includes(" Bed Head") || aB.includes(" Strongbed Head")) && uB.push(aB);
    const UB = {
      leafBeds: dB,
      woolBeds: IB,
      strongBeds: NB,
      beds: [...dB, ...IB, ...NB],
      bedHeads: uB,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  38635: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYUlEQVR4nGNgIBP8R8NYwX+GDVNRMQOm4v8MC9qxYwZUxf//b+T4//8A+///51khGMTeyIGp8Nz0gv8MDoFgGsbeUB2BXeHESHcUjFNhR4Dj/zp3OzAGsbEphHgIOyYNAACzzGY5JF2GbAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);