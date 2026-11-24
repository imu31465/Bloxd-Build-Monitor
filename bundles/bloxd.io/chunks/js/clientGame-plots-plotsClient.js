export const id = 22;
export const ids = [22];
export const modules = {
  36687: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => pT,
      d: () => BT,
      h: () => LT,
      i: () => lT
    });
    var WT = mT(34270),
      zT = mT(36693),
      MT = mT(36698),
      gT = mT(8852),
      nT = mT(1567),
      HT = mT(63),
      kT = mT(85),
      jT = mT(1188);

    function lT() {
      var TT;
      return (0, nT.j)(zT.b, (0, zT.j)()), (0, jT.jsx)(jT.Fragment, {
        children: null === (TT = (0, zT.j)()) || void 0 === TT ? void 0 : TT.content
      })
    }

    function LT(TT) {
      var UT;
      let {
        show: mT
      } = TT;
      (0, nT.j)(zT.b, (0, zT.j)());
      const kT = null === (UT = (0, zT.j)()) || void 0 === UT ? void 0 : UT.menu;
      return (0, HT.useEffect)((() => {
        var TT;
        mT || (null === kT || void 0 === kT || null === (TT = kT.onClose) || void 0 === TT || TT.call(kT), (0, MT.n)())
      }), [mT, kT]), (0, HT.useEffect)((() => mT ? (0, gT.f)(MT.s, MT.d) : void 0), [mT]), (0, jT.jsx)(WT.e, {
        showing: mT,
        globallyUniqueKey: "clientGameMenu",
        children: null === kT || void 0 === kT ? void 0 : kT.content
      })
    }

    function pT(TT) {
      let {
        placement: UT = "bottom"
      } = TT;
      return (0, jT.jsx)("div", {
        id: `clientGameHud-${UT}`,
        style: {
          display: "contents"
        }
      })
    }

    function BT(TT) {
      let {
        children: UT,
        placement: mT = "bottom"
      } = TT;
      const [WT, zT] = (0, HT.useState)(null);
      return (0, HT.useEffect)((() => {
        zT(document.getElementById(`clientGameHud-${mT}`))
      }), [mT]), WT ? (0, kT.createPortal)(UT, WT) : null
    }
  },
  34270: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => MT
    });
    var WT = mT(4641),
      zT = mT(4650);

    function MT(TT) {
      let {
        children: UT,
        showing: mT,
        globallyUniqueKey: MT,
        alwaysMountChildren: gT = !1,
        doGameplayStartStopOnShow: nT = !0,
        keepsMovement: HT = !1
      } = TT;
      return (0, zT.d)(!0, mT, MT, HT), (0, WT.c)(nT, mT), mT || gT ? UT : null
    }
  },
  36776: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT,
      e: () => gT,
      h: () => nT,
      j: () => HT
    });
    var WT = mT(63),
      zT = mT(3239);
    const MT = 8,
      gT = "InGameHeaderContainer",
      nT = "TopRightElements";

    function HT(TT) {
      const [UT] = (0, zT.e)(), [mT, HT] = (0, WT.useState)(!1);
      return (0, WT.useLayoutEffect)((() => {
        if (!TT) return;
        const UT = document.querySelector(`.${gT}`),
          mT = document.querySelector(`.${nT}`),
          WT = () => {
            const WT = TT.getBoundingClientRect(),
              zT = UT ? UT.getBoundingClientRect().right : 0,
              gT = mT ? mT.getBoundingClientRect().left : window.innerWidth,
              nT = WT.left < zT + MT,
              kT = WT.right > gT - MT;
            HT(nT || kT)
          };
        WT();
        const zT = new ResizeObserver(WT);
        return zT.observe(TT), UT && zT.observe(UT), mT && zT.observe(mT), () => {
          zT.disconnect()
        }
      }), [TT, UT]), mT
    }
  },
  8852: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => MT,
      f: () => zT
    });
    let WT = null;
    const zT = function(TT) {
        const UT = {
          cycle: TT,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return WT = UT, () => {
          WT === UT && (WT = null)
        }
      },
      MT = () => {
        var TT;
        return null !== (TT = WT) && void 0 !== TT && TT.canCycle() ? WT.cycle : null
      }
  },
  38658: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => gT,
      e: () => nT,
      h: () => HT
    });
    const WT = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      zT = [0, 1, 2, 0, 2, 3],
      MT = [4, 5];

    function gT(TT, UT, mT, WT, zT) {
      for (let gT = 0; gT < 6; gT++) MT.includes(gT) === zT && kT(TT, UT, mT, WT, gT)
    }

    function nT(TT, UT, mT, WT) {
      for (let zT = 0; zT < 6; zT++) kT(TT, UT, mT, WT, zT)
    }

    function HT(TT, UT, mT, MT, gT) {
      for (let nT = 0; nT < 6; nT++)
        for (const HT of [0, 1]) {
          const [kT, jT, lT] = [HT + 2, HT + 1, (HT + 3) % 4], LT = TT.length / 3;
          for (const [UT, zT] of [
              [HT, jT],
              [kT, jT],
              [kT, lT],
              [HT, lT]
            ])
            for (let HT = 0; HT < 3; HT++) {
              const kT = WT[3 * (4 * nT + UT) + HT],
                jT = WT[3 * (4 * nT + zT) + HT];
              TT.push((kT + (jT - kT) * gT) * MT / 2 + mT[HT])
            }
          for (const TT of zT) UT.push(LT + TT)
        }
    }

    function kT(TT, UT, mT, MT, gT) {
      let [nT, HT, kT] = mT, [jT, lT, LT] = MT;
      const pT = TT.length / 3;
      for (let zT = 4 * gT; zT < 4 * gT + 4; zT++) TT.push(WT[3 * zT] * jT / 2 + nT, WT[3 * zT + 1] * lT / 2 + HT, WT[3 * zT + 2] * LT / 2 + kT);
      for (const WT of zT) UT.push(pT + WT)
    }
  },
  39589: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      default: () => xW
    });
    const WT = [0, 90, 180, 270],
      zT = "plotsblueprint";
    var MT = mT(63),
      gT = mT(36693),
      nT = mT(25),
      HT = mT(1567),
      kT = mT(2104),
      jT = mT(1288),
      lT = mT(1126),
      LT = mT.n(lT),
      pT = mT(1752),
      BT = mT(36687),
      ZT = mT(1135),
      cT = mT(2034),
      vT = mT(2095),
      fT = mT(3518),
      qT = mT(1863);

    function iT() {}
    const bT = (0, MT.createContext)({
      hint: null,
      journalRef: iT,
      placementCardRef: iT,
      buildRef: iT
    });
    var OT = mT(31);
    const eT = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      YT = {
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
      JT = ["small", "medium", "large"].flatMap((TT => eT.flat().filter((UT => YT[UT].tier === TT))));

    function xT(TT) {
      return YT[TT]
    }
    const dT = new Map(eT.flatMap((TT => TT.slice(1).map(((UT, mT) => [UT, TT[mT]])))));

    function wT(TT) {
      var UT;
      return null !== (UT = dT.get(TT)) && void 0 !== UT ? UT : null
    }
    const tT = {
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

    function aT(TT, UT) {
      const mT = new Set(TT),
        WT = function(TT) {
          const UT = new Set(TT);
          return new Set(JT.filter((TT => {
            const mT = wT(TT);
            return null === mT || UT.has(mT)
          })))
        }(mT);
      return JT.map((TT => {
        const zT = TT === UT;
        if (mT.has(TT)) return {
          id: TT,
          active: zT,
          note: null,
          state: "completed",
          unlockedBy: null
        };
        const MT = tT[TT],
          gT = void 0 === MT || MT.firstBuild && mT.size > 0 ? null : MT.key;
        return WT.has(TT) ? {
          id: TT,
          active: zT,
          note: gT,
          state: "open",
          unlockedBy: null
        } : {
          id: TT,
          active: zT,
          note: gT,
          state: "locked",
          unlockedBy: wT(TT)
        }
      }))
    }
    const yT = "plotsJournalChanged";
    class XT {
      constructor(TT, UT) {
        this.api = TT, this.placement = UT, this.pages = null, this.openRequested = null, this.openedOffered = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.Gp(this.openedOffered ? "journal_offered" : "journal_opened"), this.openedOffered = !1
        }, this.build = TT => {
          this.placement.start(TT), (0, gT.d)()
        }, this.putAway = () => {
          this.api.sendCommand(`${zT} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      pB(TT) {
        let [, UT, mT] = TT;
        this.pages = aT(UT, mT), OT.j.EZ(yT, this.pages, !0)
      }
      openFromServer(TT) {
        let [, UT] = TT;
        this.openRequested = UT, this.Cl()
      }
      Cl() {
        const TT = this.openRequested;
        null === TT || nT.b.get("loadingOverlayVisible") || (this.openRequested = null, null === this.pages || (0, pT.l)() || (0, qT.isTypingInInput)() || null !== this.placement.getView() || (this.openedOffered = TT, (0, gT.l)()))
      }
      Gp(TT) {
        this.reported.has(TT) || (this.reported.add(TT), this.api.sendCommand(`${zT} report ${TT}`))
      }
    }
    var IT = mT(1188);
    const QT = "KeyJ";

    function sT(TT) {
      let {
        journal: UT
      } = TT;
      const mT = (0, HT.j)(yT, UT.getPages()),
        {
          isTouchScreen: WT
        } = (0, nT.h)(["isTouchScreen"]),
        {
          t: zT
        } = (0, jT.z)(),
        kT = (0, MT.useContext)(bT);
      return (0, fT.c)((TT => null !== mT && TT.code === QT && !TT.repeat && !(0, qT.isTypingInInput)()), (TT => {
        (0, pT.y)(TT, !0, gT.l)
      })), null === mT ? null : (0, IT.jsx)(BT.d, {
        placement: "topRight",
        children: (0, IT.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, IT.jsxs)("button", {
            ref: kT.journalRef,
            type: "button",
            className: LT()("PlotsJournalButton SmallTextBold", {
              Touch: WT
            }),
            onClick: gT.l,
            children: [(0, IT.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, IT.jsx)(cT.b, {
                itemName: "Book",
                amount: 0
              })
            }), zT("plotsGame:journalButton"), !WT && (0, IT.jsx)(vT.c, {
              className: "PlotsJournalButtonKey",
              keyCode: QT
            }), "openJournal" === kT.hint && (0, IT.jsx)(ZT.c, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon HandLeftAnim PlotsJournalButtonHand"
            })]
          })
        })
      })
    }
    var FT = mT(9330);
    const PT = [0, 90, 180, 270],
      VT = /^(meta\|rot\d)\|([lrud]+)$/,
      uT = "nesw",
      CT = /^meta\|([nesw]*)\|?(Stacked)?$/,
      rT = function(TT) {
        const UT = new WeakMap;
        return (mT, WT) => {
          let zT = UT.get(mT);
          return void 0 === zT && (zT = TT(mT, WT), UT.set(mT, zT)), zT
        }
      }((TT => new KT(TT)));
    class KT {
      constructor(TT) {
        this.blockMetadata = TT, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const UT = new Set(Object.keys(TT).map((UT => TT[UT].id)));
        UT.add(0), this.maxBlockId = Math.max(...UT)
      }
      static
      for (TT) {
        return rT(TT)
      }
      getBlockIdMapping(TT, UT) {
        const mT = this.getBlockIdMappingKey(TT, UT);
        let WT = this.blockIdMappings.get(mT);
        return void 0 === WT && PT.includes(TT) && (WT = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, TT, UT), this.blockIdMappings.set(mT, WT)), WT
      }
      turnBlockId(TT, UT, mT) {
        return this.mapBlockId(this.blockMetadata[TT], UT, this.getRotationMapping(UT, mT), mT)
      }
      getBlockIdMappingKey(TT, UT) {
        return `r${TT}|m${Number(UT)}`
      }
      createBlockIdMapping(TT, UT, mT, WT) {
        const zT = new Uint16Array(UT + 1),
          MT = this.getRotationMapping(mT, WT);
        for (const gT in TT) {
          const UT = TT[gT];
          zT[UT.id] = this.mapBlockId(UT, mT, MT, WT)
        }
        return zT
      }
      getRotationMapping(TT, UT) {
        const mT = Math.round(TT / 90),
          WT = new Uint8Array(4);
        for (let zT = 0; zT < 4; zT++) WT[zT] = (4 + zT - mT) % 4;
        if (UT) {
          let TT = WT[0];
          WT[0] = WT[1], WT[1] = TT, TT = WT[2], WT[2] = WT[3], WT[3] = TT
        }
        return WT
      }
      mapBlockId(TT, UT, mT, WT) {
        var zT;
        const {
          blockMetadata: MT
        } = this, gT = Math.round(UT / 90), {
          id: nT,
          meta: HT
        } = TT, {
          rot: kT,
          rootName: jT,
          metaStr: lT
        } = HT;
        let LT;
        const [, pT, BT] = null !== (zT = CT.exec(lT)) && void 0 !== zT ? zT : [];
        if (void 0 !== pT) {
          var ZT, cT;
          LT = null !== (ZT = null === (cT = MT[`${jT}|meta|${[uT.split("").filter(((TT,UT)=>pT.split("").some((TT=>{const mT=uT.indexOf(TT);return((WT?3-mT:mT)+gT)%4===UT})))).join(""),BT].filter(Boolean).join("|")}`]) || void 0 === cT ? void 0 : cT.id) && void 0 !== ZT ? ZT : nT
        } else if (null === kT) LT = nT;
        else {
          var vT, fT;
          const TT = mT[kT - 1] + 1;
          let UT = lT.replace(`rot${kT}`, `rot${TT}`);
          WT && HT.stairsCorner && (UT = UT.replace(/(Left|Right)$/, (TT => "Left" === TT ? "Right" : "Left"))), WT && "Chest" === jT && (UT = UT.replace(/\|(left|right)$/, ((TT, UT) => "left" === UT ? "|right" : "|left")));
          const zT = VT.exec(UT);
          if (WT && null !== zT) {
            const TT = "lrud".split("").filter((TT => zT[2].includes("l" === TT ? "r" : "r" === TT ? "l" : TT)));
            UT = `${zT[1]}|${TT.join("")}`
          }
          const gT = `${jT}|${UT}`;
          if (LT = null !== (vT = null === (fT = MT[gT]) || void 0 === fT ? void 0 : fT.id) && void 0 !== vT ? vT : null, null === LT) {
            const TT = MT[jT];
            LT = TT.rootMetaDesc === gT ? TT.id : nT
          }
        }
        return LT
      }
    }

    function ST(TT, UT, mT) {
      let {
        xRotationMappedOrigin: WT,
        shouldSwapXZ: zT
      } = mT;
      const MT = zT ? UT : TT;
      return null === WT ? MT : WT - MT
    }

    function GT(TT, UT, mT) {
      let {
        zRotationMappedOrigin: WT,
        shouldSwapXZ: zT
      } = mT;
      const MT = zT ? TT : UT;
      return null === WT ? MT : WT - MT
    }
    const NT = {
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
      ET = new Map;

    function hT(TT, UT) {
      const mT = `${TT}|${UT}`;
      let WT = ET.get(mT);
      if (void 0 === WT) {
        const {
          size: zT,
          palette: MT,
          layers: gT
        } = NT[TT], nT = 90 === UT || 270 === UT, [HT, kT] = nT ? [zT[2], zT[0]] : [zT[0], zT[2]], jT = function(TT, UT, mT) {
          let WT = null,
            zT = null,
            MT = !1;
          switch (TT) {
            case 0:
              break;
            case 90:
              WT = UT - 1, MT = !0;
              break;
            case 180:
              WT = UT - 1, zT = mT - 1;
              break;
            case 270:
              zT = mT - 1, MT = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${TT}`)
          }
          return {
            xRotationMappedOrigin: WT,
            zRotationMappedOrigin: zT,
            shouldSwapXZ: MT
          }
        }(UT, HT, kT), lT = KT.for(FT.g), LT = MT.map((TT => (0, FT.e)(lT.turnBlockId((0, FT.j)(TT), UT, !1)))), pT = [];
        gT.forEach(((TT, UT) => {
          TT.split(" ").forEach(((TT, mT) => {
            for (let WT = 0; WT < TT.length; WT++)
              if ("." !== TT[WT]) {
                const zT = [ST(WT, mT, jT), UT, GT(WT, mT, jT)];
                pT.push({
                  offset: zT,
                  block: LT[TT.charCodeAt(WT) - "a".charCodeAt(0)]
                })
              }
          }))
        })), WT = {
          size: [HT, zT[1], kT],
          cells: pT
        }, ET.set(mT, WT)
      }
      return WT
    }
    const DT = "plotsBuildProgressChanged",
      oT = new Map;

    function AT(TT, UT, mT) {
      let WT = 0,
        zT = 0;
      return function(TT) {
        let UT = oT.get(TT);
        if (void 0 === UT) {
          const WT = [];
          for (const {
              offset: UT
            }
            of hT(TT, 0).cells) {
            var mT;
            WT[UT[1]] = (null !== (mT = WT[UT[1]]) && void 0 !== mT ? mT : 0) + 1
          }
          UT = WT, oT.set(TT, UT)
        }
        return UT
      }(TT).forEach(((TT, mT) => {
        WT += TT, mT > UT && (zT += TT)
      })), {
        id: TT,
        filled: WT - zT - mT,
        total: WT
      }
    }
    class RT {
      constructor() {
        this.shown = null, this.topOpen = 0, this.progress = null
      }
      get() {
        return this.progress
      }
      show(TT) {
        this.shown = TT, this.topOpen = 0, null === TT && this.EZ(null)
      }
      update(TT, UT, mT) {
        const WT = this.shown;
        null !== WT && (TT >= UT && (this.topOpen = mT), this.EZ(AT(WT.id, UT - WT.y, TT >= UT ? mT : this.topOpen + mT)))
      }
      EZ(TT) {
        const UT = this.progress;
        (null === TT || void 0 === TT ? void 0 : TT.id) === (null === UT || void 0 === UT ? void 0 : UT.id) && (null === TT || void 0 === TT ? void 0 : TT.filled) === (null === UT || void 0 === UT ? void 0 : UT.filled) && (null === TT || void 0 === TT ? void 0 : TT.total) === (null === UT || void 0 === UT ? void 0 : UT.total) || (this.progress = TT, OT.j.EZ(DT, TT, !0))
      }
    }
    const TU = "plotsPlotChanged",
      UU = "plotsGuideChanged",
      mU = "plotsGuideDone";
    class WU {
      constructor() {
        this.plot = ["none"], this.guide = ["none"]
      }
      getPlot() {
        return this.plot
      }
      receivePlot(TT) {
        this.plot = TT, OT.j.EZ(TU, TT, !0)
      }
      getGuide() {
        return this.guide
      }
      receiveGuide(TT) {
        this.guide = TT, OT.j.EZ(UU, TT, !0)
      }
      receiveGuideDone() {
        OT.j.EZ(mU, void 0, !0)
      }
    }
    var zU = mT(1376),
      MU = mT(38676),
      gU = mT(36974),
      nU = mT(1591);

    function HU(TT) {
      let {
        onSkip: UT,
        className: mT
      } = TT;
      const {
        t: WT
      } = (0, jT.z)();
      return (0, IT.jsx)("button", {
        type: "button",
        className: LT()("PlotsGuideSkipButton", mT),
        ...(0, nU.g)(UT, "pointerup"),
        children: WT("tutorial:skip")
      })
    }

    function kU(TT) {
      let {
        target: UT,
        placement: mT,
        spotlight: WT = null,
        children: zT
      } = TT;
      const {
        t: gT
      } = (0, jT.z)(), nT = (0, MT.useRef)(UT);
      return nT.current = UT, (0, zU.p)("popup", nT, null === WT ? null : WT.onSkip, null !== WT, null, "controller:menusSkipTutorial"), (0, IT.jsxs)(gU.d, {
        target: UT,
        placement: mT,
        className: LT()("PlotsGuideBubble", {
          Passive: null === WT
        }),
        spotlight: null !== WT,
        spotlightMargin: 30,
        children: [(0, IT.jsxs)("div", {
          className: "PlotsGuideBubbleHeader",
          children: [(0, IT.jsx)("img", {
            className: "PlotsGuideBubblePortrait",
            src: MU,
            alt: "",
            draggable: !1
          }), (0, IT.jsx)("span", {
            className: "PlotsGuideBubbleSpeaker",
            children: gT("plotsGame:maverickName")
          }), null !== WT && (0, IT.jsx)(HU, {
            onSkip: WT.onSkip
          })]
        }), (0, IT.jsx)("p", {
          className: "PlotsGuideBubbleText",
          children: zT
        })]
      })
    }

    function jU(TT) {
      let {
        className: UT,
        icon: mT,
        title: WT,
        children: zT
      } = TT;
      return (0, IT.jsxs)("div", {
        className: LT()("PlotsCard", UT),
        role: "status",
        children: [(0, IT.jsx)("span", {
          className: "PlotsCardIcon",
          children: (0, IT.jsx)(ZT.c, {
            name: mT
          })
        }), (0, IT.jsxs)("div", {
          className: "PlotsCardBody",
          children: [(0, IT.jsx)("div", {
            className: "PlotsCardTitle SmallTextBold",
            children: WT
          }), zT]
        })]
      })
    }

    function lU(TT) {
      let {
        progress: UT,
        goal: mT
      } = TT;
      const WT = Math.min(UT, mT);
      return (0, IT.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, IT.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": mT,
          "aria-valuenow": WT,
          children: (0, IT.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${WT/mT})`
            }
          })
        }), (0, IT.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [WT, "/", mT]
        })]
      })
    }

    function LU(TT) {
      let {
        progress: UT,
        guide: mT
      } = TT;
      const {
        t: WT
      } = (0, jT.z)(), {
        isTouchScreen: zT
      } = (0, nT.h)(["isTouchScreen"]), MT = UT.filled < 5;
      return (0, IT.jsxs)(IT.Fragment, {
        children: [(MT || UT.total - UT.filled <= 5) && (0, IT.jsx)("div", {
          className: "PlotsGuideHandLayer",
          children: (0, IT.jsx)("div", {
            ref: mT.bindHand,
            className: "PlotsGuideHand",
            children: (0, IT.jsx)(ZT.c, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon"
            })
          })
        }), (0, IT.jsx)(BT.d, {
          placement: "bottom",
          children: (0, IT.jsxs)(jU, {
            icon: "hammer",
            title: WT(xT(UT.id).displayName.translationKey),
            children: [MT && (0, IT.jsx)("div", {
              className: "PlotsCardHint SmallTextLight",
              children: zT ? WT("plotsGame:guideBuildTouch") : pU(WT)
            }), (0, IT.jsx)(lU, {
              progress: UT.filled,
              goal: UT.total
            })]
          })
        })]
      })
    }

    function pU(TT) {
      const UT = kT.v["alt-fire"][0];
      return "Mouse3" === UT ? TT("plotsGame:guideBuildRightClick") : TT("plotsGame:guideBuildKeys", {
        key: (0, kT.n)(UT)
      })
    }

    function BU() {
      return (0, IT.jsx)("div", {
        className: "PlotsGuideDragHand",
        children: (0, IT.jsx)(ZT.c, {
          name: "hand-back-point-up",
          className: "SmallTextBold TouchTutorialIcon"
        })
      })
    }
    var ZU = mT(1388),
      cU = mT(2698),
      vU = mT(38545),
      fU = mT(38316),
      qU = mT(37030),
      iU = mT(9360),
      bU = mT(9376),
      OU = mT(366),
      eU = mT(37936);
    const YU = new Map([
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
      JU = [...qU.e.blockRemoveActionRoots, ...fU.b, ...iU.j, "Board", "Code Block", "Custom Lobby Block"],
      xU = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let dU = null;

    function wU() {
      return dU ??= function() {
        const TT = tU(),
          UT = Math.max(...TT.map((TT => FT.g[TT].id))) + 1,
          mT = new Int32Array(UT),
          WT = new Int32Array(UT),
          zT = new Uint8Array(UT).fill(1),
          MT = new Uint8Array(UT),
          gT = new Uint8Array(UT),
          nT = new Array(UT).fill("Air"),
          HT = new Map,
          kT = TT => {
            let UT = HT.get(TT);
            return void 0 === UT && (UT = HT.size + 1, HT.set(TT, UT)), UT
          },
          jT = new Set(JU);
        for (const LT of TT) {
          var lT;
          const {
            id: TT,
            meta: UT,
            altActionable: HT,
            canBePlacedOver: pT
          } = FT.g[LT];
          mT[TT] = kT(aU(LT));
          const BT = UT.stairsCorner;
          if (null === BT) WT[TT] = mT[TT];
          else {
            const mT = BT.endsWith("Right");
            WT[TT] = kT(`${UT.rootName}|rot${mT?UT.rot%4+1:UT.rot}|${UT.halfblockPlacement}|${BT.replace("Right","Left")}`)
          }
          zT[TT] = pT ? 1 : 0, MT[TT] = HT || null !== UT.open || LT in eU.e || jT.has(UT.rootName) || void 0 !== (0, fU.e)(UT.rootName) ? 1 : 0;
          const {
            rootName: ZT
          } = UT;
          gT[TT] = null !== UT.open || fU.b.includes(ZT) || ZT.includes("Bookshelf") || ZT.includes("Mailbox") ? 1 : 0, nT[TT] = null !== (lT = (0, vU.g)(TT)) && void 0 !== lT ? lT : ZT
        }
        return {
          kinds: mT,
          shapes: WT,
          empty: zT,
          inUse: MT,
          ownAltActionMessage: gT,
          placingItems: nT
        }
      }(), dU
    }

    function tU() {
      return Object.keys(FT.g).filter((TT => FT.g[TT].name === TT))
    }

    function aU(TT) {
      var UT;
      const mT = FT.g[TT],
        {
          rootName: WT,
          rot: zT
        } = mT.meta,
        [, ...MT] = (null !== (UT = mT.rootMetaDesc) && void 0 !== UT ? UT : TT).split("|"),
        gT = MT.filter((TT => !("meta" === TT || xU.test(TT) || (0, bU.C)(mT) && /^[nesw]+$/.test(TT) || iU.j.includes(WT) && /^[lrud]+$/.test(TT) || OU.N.includes(WT) && /^(left|right)$/.test(TT))));
      return [WT, ...gT].map((TT => "fenceGate" === mT.model && TT === `rot${zT}` ? "rot" + ((zT - 1) % 2 + 1) : TT)).join("|")
    }

    function yU(TT, UT) {
      const {
        kinds: mT,
        shapes: WT
      } = wU();
      return mT[TT] === mT[UT] || WT[TT] === WT[UT]
    }

    function XU(TT) {
      return 1 === wU().empty[TT]
    }

    function IU(TT) {
      return wU().placingItems[TT]
    }

    function QU(TT) {
      return YU.get(FT.g[TT].meta.rootName)
    }
    var sU = mT(9355),
      FU = mT(9369);
    const PU = [0, 0, 0, 1, 1, 1],
      VU = (0, sU.d)([
        [2, 0, 2, 6, 6, 6]
      ]),
      uU = (0, sU.d)([
        [3, 0, 3, 5, 5, 5]
      ]),
      CU = (0, sU.d)([
        [3, 3, 3, 5, 8, 5]
      ]),
      rU = [0, 1, 2, 3].map((TT => (0, sU.d)((0, sU.j)([
        [3, 2, 0, 5, 7, 3]
      ], TT))));

    function KU(TT) {
      const {
        oZ: UT,
        model: mT,
        blockModel: WT,
        meta: zT
      } = FT.g[TT];
      return void 0 !== UT ? UT : "CentreCross" === mT ? VU : null !== WT && void 0 !== WT && WT.startsWith("torch") ? zT.halfblockPlacement === FU.d.side ? rU[zT.rot - 1] : zT.halfblockPlacement === FU.d.top ? CU : uU : PU
    }
    var SU = mT(208);
    class GU {
      constructor(TT) {
        this.api = TT, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(TT) {
        const UT = SU.f.cB;
        this.chunks = [];
        for (let mT = 0; mT < TT.length; mT += 3) {
          const WT = Math.floor(TT[mT] / UT),
            zT = Math.floor(TT[mT + 1] / UT),
            MT = Math.floor(TT[mT + 2] / UT);
          this.watches(WT, zT, MT) || this.chunks.push(WT, zT, MT)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const TT = performance.now();
        if (TT - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = TT;
        let UT = !1;
        for (let mT = 0; mT < this.chunks.length; mT += 3) {
          const TT = this.api.getChunkVersion(this.chunks[mT], this.chunks[mT + 1], this.chunks[mT + 2]);
          this.versions[mT / 3] !== TT && (this.versions[mT / 3] = TT, UT = !0)
        }
        return UT
      }
      watches(TT, UT, mT) {
        for (let WT = 0; WT < this.chunks.length; WT += 3)
          if (this.chunks[WT] === TT && this.chunks[WT + 1] === UT && this.chunks[WT + 2] === mT) return !0;
        return !1
      }
    }
    var NU = mT(38658);
    const EU = .35,
      hU = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      DU = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      oU = [.95, .2, .15];
    class AU {
      constructor() {
        this.groups = []
      }
      add(TT, UT, mT, WT, zT) {
        let MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : PU;
        for (const gT of this.groups)
          if (Um(gT, WT, zT)) return gT.cells.push(TT, UT, mT), void gT.boxes.push(MT);
        this.groups.push({
          rgb: WT,
          look: zT,
          cells: [TT, UT, mT],
          boxes: [MT]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class RU {
      constructor(TT) {
        this.api = TT, this.shown = []
      }
      show(TT) {
        const UT = [];
        for (const mT of TT) {
          const TT = this.shown.findIndex((TT => {
            let {
              group: UT
            } = TT;
            return Um(UT, mT.rgb, mT.look) && mm(UT, mT)
          })); - 1 === TT ? UT.push(this.build(mT)) : (UT.push(this.shown[TT]), this.shown.splice(TT, 1))
        }
        this.dispose(), this.shown = UT
      }
      dispose() {
        for (const {
            meshes: TT
          }
          of this.shown)
          for (const UT of TT) this.api.disposeGameMesh(UT);
        this.shown = []
      }
      build(TT) {
        const {
          rgb: UT,
          look: mT,
          boxes: WT
        } = TT, zT = [UT[0] + (1 - UT[0]) * EU, UT[1] + (1 - UT[1]) * EU, UT[2] + (1 - UT[2]) * EU], MT = [this.buildMesh(TT.cells, UT, mT.alpha, ((TT, UT, zT, MT) => {
          Tm(TT, UT, zT, WT[MT], mT.size, !1)
        })), this.buildMesh(TT.cells, zT, mT.alpha, ((TT, UT, zT, MT) => {
          Tm(TT, UT, zT, WT[MT], mT.size, !0)
        }))];
        return mT.crossed && MT.push(this.buildMesh(TT.cells, UT, .9, ((TT, UT, WT) => {
          (0, NU.h)(TT, UT, WT, mT.size + .01, .12)
        }))), {
          group: TT,
          meshes: MT
        }
      }
      buildMesh(TT, UT, mT, WT) {
        const zT = [TT[0], TT[1], TT[2]],
          MT = [],
          gT = [];
        for (let nT = 0; nT < TT.length; nT += 3) WT(MT, gT, [TT[nT] - zT[0] + .5, TT[nT + 1] - zT[1] + .5, TT[nT + 2] - zT[2] + .5], nT / 3);
        return this.api.createGameMesh({
          positions: MT,
          indices: gT
        }, {
          rgb: [UT[0], UT[1], UT[2]],
          alpha: mT
        }, zT)
      }
    }

    function Tm(TT, UT, mT, WT, zT, MT) {
      for (let gT = 0; gT < WT.length; gT += 6) {
        const nT = [0, 0, 0],
          HT = [0, 0, 0];
        for (let TT = 0; TT < 3; TT++) nT[TT] = mT[TT] + ((WT[gT + TT] + WT[gT + TT + 3]) / 2 - .5) * zT, HT[TT] = (WT[gT + TT + 3] - WT[gT + TT]) * zT;
        (0, NU.c)(TT, UT, nT, HT, MT)
      }
    }

    function Um(TT, UT, mT) {
      return TT.rgb[0] === UT[0] && TT.rgb[1] === UT[1] && TT.rgb[2] === UT[2] && TT.look === mT
    }

    function mm(TT, UT) {
      if (TT.cells.length !== UT.cells.length) return !1;
      for (let mT = 0; mT < TT.cells.length; mT++)
        if (TT.cells[mT] !== UT.cells[mT]) return !1;
      return TT.boxes.every(((TT, mT) => TT === UT.boxes[mT]))
    }

    function Wm(TT, UT, mT, WT, zT) {
      if (!TT.isBlockInLoadedChunk(UT, WT - 6, mT) || !TT.isBlockInLoadedChunk(UT, WT + 6 + zT, mT) || !TT.canModifyBlockAt(UT, WT, mT)) return NaN;
      let MT = WT - 1;
      if (0 !== TT.getBlockId(UT, MT, mT)) {
        for (; MT < WT + 6 && 0 !== TT.getBlockId(UT, MT + 1, mT);) MT++;
        return MT
      }
      for (; MT > WT - 6;)
        if (MT--, 0 !== TT.getBlockId(UT, MT, mT)) return MT;
      return NaN
    }

    function zm(TT, UT, mT, WT, zT) {
      let MT = 0;
      for (let gT = WT + 1; gT <= WT + zT; gT++) 0 !== TT.getBlockId(UT, gT, mT) && MT++;
      return MT
    }

    function Mm(TT) {
      const UT = new Map;
      for (const gT of TT) {
        var mT;
        if (Number.isNaN(gT)) return null;
        UT.set(gT, (null !== (mT = UT.get(gT)) && void 0 !== mT ? mT : 0) + 1)
      }
      let WT = NaN,
        zT = 0;
      for (const [gT, nT] of UT)(nT > zT || nT === zT && gT < WT) && (WT = gT, zT = nT);
      let MT = 0;
      for (const gT of TT) MT += Math.abs(gT - WT);
      return MT
    }

    function gm(TT, UT, mT, WT) {
      const {
        eye: zT,
        forward: MT,
        tanHalfFovX: gT,
        tanHalfFovY: nT
      } = TT, [HT, kT] = function(TT) {
        let [UT, mT, WT] = TT;
        const zT = Math.hypot(UT, WT),
          [MT, gT] = [WT / zT, -UT / zT];
        return [
          [MT, 0, gT],
          [mT * gT, WT * MT - UT * gT, -mT * MT]
        ]
      }(MT), [jT, lT] = [UT * gT, mT * nT], LT = MT[0] + jT * HT[0] + lT * kT[0], pT = MT[1] + lT * kT[1], BT = MT[2] + jT * HT[2] + lT * kT[2], ZT = (WT - zT[1]) / pT;
      return ZT > 0 && ZT < 1 / 0 ? [zT[0] + ZT * LT, zT[2] + ZT * BT] : null
    }
    const nm = "plotsBlueprintPlacementChanged",
      Hm = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class km {
      constructor(TT, UT) {
        this.api = TT, this.localPlayerId = UT, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = TT => {
          var UT, mT, WT, MT;
          const gT = null !== (UT = null === (mT = this.placing) || void 0 === mT ? void 0 : mT.rotation) && void 0 !== UT ? UT : 0,
            {
              size: nT
            } = hT(TT, gT),
            HT = this.api.Aq(this.localPlayerId),
            [kT, jT] = null !== (WT = null !== (MT = function(TT, UT, mT, WT) {
              const [zT, MT, gT] = UT, [nT, HT, kT] = [Math.floor(mT[0]), Math.floor(mT[1]), Math.floor(mT[2])], jT = 6 + Math.max(zT, gT) / 2, [lT, LT] = [Math.ceil(jT + zT / 2), Math.ceil(jT + gT / 2)], [pT, BT] = [nT - lT, kT - LT], [ZT, cT] = [2 * lT + 1, 2 * LT + 1], vT = new Float64Array(ZT * cT), fT = new Uint16Array(ZT * cT);
              for (let eT = 0; eT < ZT; eT++)
                for (let UT = 0; UT < cT; UT++) {
                  const mT = Wm(TT, pT + eT, BT + UT, HT, MT);
                  vT[eT * cT + UT] = mT, Number.isNaN(mT) || (fT[eT * cT + UT] = zm(TT, pT + eT, BT + UT, mT, MT))
                }
              const qT = Math.hypot(WT[0], WT[2]),
                iT = [];
              let bT = null,
                OT = 1 / 0;
              for (let eT = 0; eT + zT <= ZT; eT++)
                for (let TT = 0; TT + gT <= cT; TT++) {
                  const [UT, MT] = [pT + eT, BT + TT], [HT, lT] = [UT + zT / 2 - mT[0], MT + gT / 2 - mT[2]], LT = Math.hypot(HT, lT);
                  if (LT > jT || nT >= UT - 2 && nT < UT + zT + 2 && kT >= MT - 2 && kT < MT + gT + 2) continue;
                  iT.length = 0;
                  let ZT = 0;
                  for (let mT = 0; mT < zT; mT++)
                    for (let UT = 0; UT < gT; UT++) iT.push(vT[(eT + mT) * cT + TT + UT]), ZT += fT[(eT + mT) * cT + TT + UT];
                  const YT = Mm(iT);
                  if (null === YT) continue;
                  const JT = LT + 3 * (YT + ZT) + (1 - (0 === qT ? 1 : (HT * WT[0] + lT * WT[2]) / (LT * qT))) / 2 * 6;
                  JT < OT && (OT = JT, bT = [UT, MT])
                }
              return bT
            }(this.api, nT, HT, this.camera.forward)) && void 0 !== MT ? MT : this.cornerOnTarget(nT)) && void 0 !== WT ? WT : [Math.floor(HT[0]) + 2, Math.floor(HT[2])];
          this.placing = {
            id: TT,
            rotation: gT,
            corner: [kT, this.playerLevel(), jT],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null,
            moved: !1,
            stillSinceMs: performance.now()
          }, this.update(), this.api.sendCommand(`${zT} preview`)
        }, this.rotate = () => {
          const {
            id: TT,
            rotation: UT,
            corner: mT
          } = this.placing, zT = WT[(WT.indexOf(UT) + 1) % WT.length], [MT, , gT] = hT(TT, UT).size, [nT, , HT] = hT(TT, zT).size;
          this.moveTo(mT[0] + Math.floor(MT / 2) - Math.floor(nT / 2), mT[2] + Math.floor(gT / 2) - Math.floor(HT / 2), zT)
        }, this.hoverAt = (TT, UT) => {
          this.placing.hover = [TT, UT], this.moveCentreTo(this.camera, TT, UT)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (TT, UT) => {
          const mT = this.placing,
            {
              eye: WT,
              forward: zT,
              tanHalfFovX: MT,
              tanHalfFovY: gT
            } = this.camera,
            nT = {
              eye: [WT[0], WT[1], WT[2]],
              forward: [zT[0], zT[1], zT[2]],
              tanHalfFovX: MT,
              tanHalfFovY: gT
            },
            HT = mT.corner[1],
            kT = gm(nT, TT, UT, HT);
          mT.hover = null, mT.drag = kT && {
            view: nT,
            ground: kT,
            corner: [mT.corner[0], mT.corner[2]],
            level: HT
          }
        }, this.dragTo = (TT, UT) => {
          const mT = this.placing.drag,
            WT = mT && gm(mT.view, TT, UT, mT.level);
          null !== mT && null !== WT && this.moveTo(mT.corner[0] + Math.round(WT[0] - mT.ground[0]), mT.corner[1] + Math.round(WT[1] - mT.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const TT = this.view;
          TT.waiting || (TT.blocked ? this.EZ({
            ...TT,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const TT = this.placing,
            {
              id: UT,
              rotation: mT,
              corner: WT
            } = TT;
          this.api.sendCommand(`${zT} place ${UT} ${WT.join(" ")} ${mT}`), TT.sent = {
            atMs: performance.now(),
            corner: [...WT],
            rotation: mT,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${zT} preview off`))
        }, this.chunkWatch = new GU(TT), this.meshes = new RU(TT)
      }
      getView() {
        return this.view
      }
      Cl() {
        const TT = this.placing;
        null !== TT && (null !== TT.sent && !TT.sent.timedOut && performance.now() - TT.sent.atMs > 3e3 ? (TT.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(TT) || this.chunkWatch.changed() || this.view.settled !== jm(TT, this.view.blocked)) && this.update())
      }
      afterRender(TT) {
        ! function(TT, UT) {
          for (let mT = 0; mT < 3; mT++) UT.eye[mT] = TT.cameraPosition[mT], UT.forward[mT] = TT.cameraDirection[mT];
          UT.tanHalfFovX = TT.tanHalfFovX, UT.tanHalfFovY = TT.tanHalfFovY
        }(TT, this.camera);
        const UT = this.placing;
        null !== UT && null !== UT.hover && this.moveCentreTo(this.camera, UT.hover[0], UT.hover[1])
      }
      pB(TT) {
        const UT = this.placing;
        if (null === UT || null === UT.sent || "active" !== TT[0]) return;
        const {
          sent: mT
        } = UT, [, WT, zT, MT, gT, nT, HT] = TT;
        zT && WT === UT.id && HT === mT.rotation && MT === mT.corner[0] && gT === mT.corner[1] && nT === mT.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(TT) {
        let [UT, , mT] = TT;
        const WT = this.api.getTargetedBlock();
        if (null === WT) return null;
        const [zT, , MT] = WT.position;
        return [zT - Math.floor(UT / 2), MT - Math.floor(mT / 2)]
      }
      playerLevel() {
        var TT;
        const [UT, mT, WT] = this.api.Aq(this.localPlayerId);
        if (null !== (TT = this.api.getLocalPlayerMovement()) && void 0 !== TT && TT.onGround) return Math.ceil(mT - .01);
        const [zT, MT, gT] = [Math.floor(UT), Math.floor(mT), Math.floor(WT)];
        for (let nT = MT; nT >= MT - 2; nT--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(zT, nT, gT))) return nT + 1;
        return MT
      }
      followPlayerLevel(TT) {
        if (lm(TT)) return !1;
        const UT = this.playerLevel();
        return UT !== TT.corner[1] && (TT.corner[1] = UT, !0)
      }
      moveCentreTo(TT, UT, mT) {
        const WT = this.placing,
          zT = gm(TT, UT, mT, WT.corner[1]);
        if (null !== zT) {
          const [TT, , UT] = hT(WT.id, WT.rotation).size;
          this.moveTo(Math.round(zT[0] - TT / 2), Math.round(zT[1] - UT / 2))
        }
      }
      moveTo(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const WT = this.placing;
        if (lm(WT)) return;
        const [zT, MT, gT] = WT.corner;
        if (this.centreOnPlot(zT, gT) && !this.centreOnPlot(TT, UT, mT))
          if (this.centreOnPlot(TT, gT, mT)) UT = gT;
          else {
            if (!this.centreOnPlot(zT, UT, mT)) return;
            TT = zT
          } TT === zT && UT === gT && mT === WT.rotation || (WT.rotation = mT, WT.corner = [TT, MT, UT], WT.moved = !0, WT.stillSinceMs = performance.now(), this.update())
      }
      centreOnPlot(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: WT,
          corner: zT
        } = this.placing, [MT, , gT] = hT(WT, mT).size;
        return this.api.canModifyBlockAt(TT + Math.floor(MT / 2), zT[1], UT + Math.floor(gT / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.EZ(null)
      }
      update() {
        const {
          id: TT,
          rotation: UT,
          corner: mT,
          refusals: WT
        } = this.placing, zT = new AU, MT = [];
        let gT = !1,
          nT = 0;
        for (const {
            offset: lT,
            block: LT
          }
          of hT(TT, UT).cells) {
          const [TT, UT, WT] = [mT[0] + lT[0], mT[1] + lT[1], mT[2] + lT[2]];
          MT.push(TT, UT, WT);
          const HT = !this.api.canModifyBlockAt(TT, UT, WT),
            kT = this.api.getBlockId(TT, UT, WT),
            jT = !XU(kT) && !yU(this.api.blockNameToBlockId(LT), kT);
          gT ||= HT, nT += jT ? 1 : 0, HT || jT ? zT.add(TT, UT, WT, oU, DU) : zT.add(TT, UT, WT, QU(LT), Hm, KU(LT))
        }
        this.chunkWatch.watch(MT), this.meshes.show(zT.toArray());
        const HT = this.view,
          kT = lm(this.placing),
          jT = jm(this.placing, gT);
        (null === HT || void 0 === HT ? void 0 : HT.id) === TT && HT.blocked === gT && HT.toClear === nT && HT.waiting === kT && HT.refusals === WT && HT.settled === jT || this.EZ({
          id: TT,
          blocked: gT,
          toClear: nT,
          waiting: kT,
          refusals: WT,
          settled: jT
        })
      }
      EZ(TT) {
        this.view = TT, OT.j.EZ(nm, TT, !0)
      }
    }

    function jm(TT, UT) {
      let {
        moved: mT,
        stillSinceMs: WT
      } = TT;
      return !UT && performance.now() - WT >= (mT ? 1500 : 6e3)
    }

    function lm(TT) {
      let {
        sent: UT
      } = TT;
      return null !== UT && !UT.timedOut
    }
    var Lm = mT(4650);
    class pm {
      constructor(TT) {
        this.placement = TT, this.press = null
      }
      down(TT) {
        if (null !== this.press) return !1;
        const {
          id: UT,
          mouse: mT,
          x: WT,
          y: zT,
          atMs: MT
        } = TT;
        return this.press = {
          id: UT,
          mouse: mT,
          x: WT,
          y: zT,
          atMs: MT,
          moved: !1
        }, mT || this.placement.beginDrag(TT.ndcX, TT.ndcY), !0
      }
      move(TT) {
        const UT = this.press;
        null !== UT && UT.id === TT.id && (UT.moved ||= Math.hypot(TT.x - UT.x, TT.y - UT.y) > 8), TT.mouse ? this.placement.hoverAt(TT.ndcX, TT.ndcY) : (null === UT || void 0 === UT ? void 0 : UT.id) === TT.id && this.placement.dragTo(TT.ndcX, TT.ndcY)
      }
      up(TT) {
        const UT = this.press;
        (null === UT || void 0 === UT ? void 0 : UT.id) === TT.id && (this.move(TT), this.end(), !UT.moved && (UT.mouse || TT.atMs - UT.atMs <= 250) && this.placement.tap())
      }
      cancel(TT) {
        var UT;
        (null === (UT = this.press) || void 0 === UT ? void 0 : UT.id) === TT && this.end()
      }
      leave(TT) {
        let {
          id: UT,
          mouse: mT
        } = TT;
        mT && this.placement.endHover(), this.cancel(UT)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }
    const Bm = "PlotsPlacementLayer";

    function Zm(TT) {
      let {
        placement: UT
      } = TT;
      return null === (0, HT.j)(nm, UT.getView()) ? null : (0, IT.jsx)(cm, {
        placement: UT
      })
    }

    function cm(TT) {
      let {
        placement: UT
      } = TT;
      (0, Lm.d)(!0, !0, Bm);
      const mT = (0, MT.useMemo)((() => new pm(UT)), [UT]);
      return (0, IT.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: TT => {
          "mouse" === TT.pointerType && 0 !== TT.button || !mT.down(fm(TT)) || TT.currentTarget.setPointerCapture(TT.pointerId)
        },
        onPointerMove: TT => {
          mT.move(fm(TT))
        },
        onPointerUp: TT => {
          mT.up(fm(TT))
        },
        onPointerCancel: TT => {
          mT.cancel(TT.pointerId)
        },
        onLostPointerCapture: TT => {
          mT.cancel(TT.pointerId)
        },
        onPointerLeave: TT => {
          mT.leave(fm(TT))
        },
        "aria-hidden": !0
      })
    }

    function fm(TT) {
      const {
        left: UT,
        top: mT,
        width: WT,
        height: zT
      } = TT.currentTarget.getBoundingClientRect();
      return {
        id: TT.pointerId,
        mouse: "mouse" === TT.pointerType,
        x: TT.clientX,
        y: TT.clientY,
        ndcX: (TT.clientX - UT) / WT * 2 - 1,
        ndcY: 1 - (TT.clientY - mT) / zT * 2,
        atMs: TT.timeStamp
      }
    }

    function qm() {
      return (0, ZU.n)().some((TT => TT !== ZU.d && TT !== Bm))
    }
    const im = 2500;

    function bm(TT) {
      let {
        hud: UT,
        guide: mT,
        tracker: WT,
        placement: zT,
        children: gT
      } = TT;
      const {
        t: lT
      } = (0, jT.z)(), {
        isTouchScreen: LT
      } = (0, nT.h)(["isTouchScreen"]), pT = (0, HT.j)(UU, UT.getGuide()), BT = (0, HT.j)(TU, UT.getPlot()), ZT = (0, HT.j)(DT, WT.get()), cT = function(TT) {
        const {
          openInGameMenuName: UT,
          openEverythingMenuName: mT,
          loadingOverlayVisible: WT
        } = (0, nT.h)(["openInGameMenuName", "openEverythingMenuName", "loadingOverlayVisible"]), zT = (0, cU.b)(), [gT, kT] = (0, MT.useState)(qm);
        (0, MT.useEffect)((() => {
          const TT = () => {
            kT(qm())
          };
          TT();
          const UT = (0, ZU.m)(TT),
            mT = (0, ZU.l)(TT);
          return () => {
            UT(), mT()
          }
        }), []);
        const jT = (0, HT.j)(nm, TT.getView()),
          lT = "clientGame" === UT;
        return {
          hudHidden: zT || WT,
          journalOpen: lT,
          covered: gT || null !== mT || null !== UT && !lT,
          placing: null === jT ? null : jT.settled ? "placeBuild" : "placeSpot"
        }
      }(zT), vT = function(TT, UT, mT) {
        return "none" === TT[0] || mT.hudHidden || mT.journalOpen || mT.covered ? null : null !== mT.placing ? mT.placing : null !== UT ? "build" : "choose" === TT[1] ? "openJournal" : null
      }(pT, null === ZT ? null : ZT.id, cT), fT = function() {
        const [TT, UT] = (0, MT.useState)(null), [mT, WT] = (0, MT.useState)(!1);
        return (0, HT.g)(mU, (() => {
          UT(performance.now())
        })), (0, MT.useEffect)((() => {
          if (null === TT) return;
          const UT = window.setTimeout((() => {
              WT(!0)
            }), im),
            mT = window.setTimeout((() => {
              WT(!1)
            }), 7500);
          return () => {
            window.clearTimeout(UT), window.clearTimeout(mT)
          }
        }), [TT]), mT
      }() && !cT.hudHidden && !cT.covered && !cT.journalOpen && null === cT.placing, [qT, iT] = (0, MT.useState)(!1);
      (0, MT.useEffect)((() => {
        cT.journalOpen && iT(!0)
      }), [cT.journalOpen]);
      const [OT, eT] = (0, MT.useState)(null), [YT, JT] = (0, MT.useState)(null), [xT, dT] = (0, MT.useState)(null), wT = (0, MT.useMemo)((() => ({
        hint: vT,
        journalRef: eT,
        placementCardRef: JT,
        buildRef: dT
      })), [vT]), tT = "plot" === BT[0] && "own" === BT[5], aT = LT && !qT && tT ? {
        onSkip: mT.skip
      } : null;
      return (0, IT.jsxs)(bT.Provider, {
        value: wT,
        children: [gT, "openJournal" === vT && null !== OT && (0, IT.jsx)(kU, {
          target: OT,
          placement: "left",
          spotlight: aT,
          children: LT ? lT("plotsGame:guideOpenJournal") : lT("plotsGame:guideOpenJournalKeys", {
            key: (0, kT.n)(QT)
          })
        }), "placeSpot" === vT && null !== YT && (0, IT.jsxs)(IT.Fragment, {
          children: [LT && (0, IT.jsx)(BU, {}), (0, IT.jsx)(kU, {
            target: YT,
            placement: "top",
            children: lT(LT ? "plotsGame:guidePlaceSpotTouch" : "plotsGame:guidePlaceSpotMouse")
          })]
        }), "placeBuild" === vT && null !== xT && null !== YT && (0, IT.jsx)(kU, {
          target: LT ? xT : YT,
          placement: "top",
          children: lT(LT ? "plotsGame:guidePlaceBuildTouch" : "plotsGame:guidePlaceBuildMouse")
        }), "build" === vT && null !== ZT && (0, IT.jsx)(LU, {
          progress: ZT,
          guide: mT
        }), fT && null !== OT && (0, IT.jsx)(kU, {
          target: OT,
          placement: "left",
          children: lT("plotsGame:guideMoreBuilds")
        })]
      })
    }
    var Om = mT(38622),
      em = mT(38624);
    class Ym {
      constructor(TT, UT, mT) {
        this.api = TT, this.localPlayerId = UT, this.nextCell = mT, this.hand = null, this.skip = () => {
          this.api.sendCommand("plotsguide skip")
        }, this.bindHand = TT => {
          this.hand = TT
        }
      }
      afterRender(TT) {
        const UT = this.hand;
        if (null === UT) return;
        const mT = this.nextCell.get();
        if (null === mT) return void(0, Om.h)(UT, !0);
        const WT = (0, em.c)(UT, TT, this.api.getPositionView(this.localPlayerId), mT, 1, 40);
        null !== WT && (0, Om.d)(UT, Math.round(100 * WT.x) / 100, Math.round(100 * WT.y) / 100)
      }
    }
    var Jm = mT(1569),
      xm = mT(4639),
      dm = mT(1217);
    const wm = {
        farm_hut: mT.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
        farm_house: mT.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
        farm_barn: mT.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
        rusticHome_tent: mT.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
        rusticHome_cabin: mT.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
        rusticHome_house: mT.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
        market_stand: mT.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
        market_stall: mT.p + "static/media/market_stall.9a562807f9dff591618a.webp",
        market_shop: mT.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
        castle_wall: mT.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
        castle_gate: mT.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
        castle_tower: mT.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
      },
      tm = ["plotsGame:guideEffortQuick", "plotsGame:guideEffortMedium", "plotsGame:guideEffortBigger"],
      am = ["market_stand", "rusticHome_tent", "farm_hut"].map((TT => ({
        id: TT,
        blocks: hT(TT, 0).cells.length
      }))).sort(((TT, UT) => TT.blocks - UT.blocks)).map(((TT, UT) => ({
        ...TT,
        effortKey: tm[UT]
      })));

    function ym(TT) {
      let {
        onBuild: UT
      } = TT;
      const {
        t: mT
      } = (0, jT.z)();
      return (0, IT.jsx)("div", {
        className: "PlotsJournalBookPages PlotsGuideChooserCover",
        children: (0, IT.jsxs)("div", {
          className: "PlotsGuideChooser",
          children: [(0, IT.jsx)("h3", {
            className: "PlotsGuideChooserTitle",
            children: mT("plotsGame:guidePickTitle")
          }), (0, IT.jsxs)("p", {
            className: "PlotsGuideChooserNote",
            children: [(0, IT.jsx)("img", {
              src: MU,
              alt: "",
              draggable: !1
            }), mT("plotsGame:guidePickNote")]
          }), (0, IT.jsx)("div", {
            className: "PlotsGuideChooserStarters",
            children: am.map((TT => {
              let {
                id: WT,
                blocks: zT,
                effortKey: MT
              } = TT;
              return (0, IT.jsxs)("article", {
                className: "PlotsGuideStarter",
                children: [(0, IT.jsx)("button", {
                  type: "button",
                  className: "PlotsGuideStarterSketch",
                  tabIndex: -1,
                  "aria-hidden": !0,
                  "data-pad-ignore": !0,
                  onClick: () => {
                    UT(WT)
                  },
                  children: (0, IT.jsx)("img", {
                    src: wm[WT],
                    alt: "",
                    draggable: !1
                  })
                }), (0, IT.jsxs)("div", {
                  className: "PlotsGuideStarterInfo",
                  children: [(0, IT.jsxs)("span", {
                    className: "PlotsGuideStarterText",
                    children: [(0, IT.jsx)("span", {
                      className: "PlotsGuideStarterName",
                      children: mT(xT(WT).displayName.translationKey)
                    }), (0, IT.jsx)("span", {
                      className: "PlotsGuideStarterEffort",
                      children: mT(MT)
                    }), (0, IT.jsx)("span", {
                      className: "PlotsGuideStarterBlocks",
                      children: mT("plotsGame:journalBlocks", {
                        blocks: String(zT)
                      })
                    })]
                  }), (0, IT.jsx)(Jm.l, {
                    onClick: () => {
                      UT(WT)
                    },
                    children: mT("plotsGame:placementBuild")
                  })]
                })]
              }, WT)
            }))
          })]
        })
      })
    }

    function Xm(TT) {
      let {
        direction: UT,
        disabled: mT,
        onTurn: WT
      } = TT;
      const {
        t: zT
      } = (0, jT.z)();
      return (0, IT.jsx)("div", {
        className: LT()("PlotsJournalArrow", UT),
        children: (0, IT.jsx)(Jm.e, {
          disabled: mT,
          ariaLabel: zT("Forward" === UT ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            WT(UT)
          },
          children: (0, IT.jsx)(ZT.c, {
            name: "angle-up"
          })
        })
      })
    }
    const Im = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function Qm(TT) {
      let {
        page: UT,
        building: mT,
        onBuild: WT,
        onPutAway: zT
      } = TT;
      const {
        t: MT
      } = (0, jT.z)(), {
        displayName: gT,
        tier: nT
      } = xT(UT.id), HT = hT(UT.id, 0).cells.length, kT = "locked" === UT.state, lT = mT ? Jm.e : Jm.l;
      return (0, IT.jsxs)("article", {
        className: LT()("PlotsJournalPage", {
          Locked: kT
        }),
        children: [(0, IT.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: MT(gT.translationKey)
        }), (0, IT.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [MT(Im[nT]), " \xb7 ", MT("plotsGame:journalBlocks", {
            blocks: String(HT)
          })]
        }), (0, IT.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [JT.map((TT => (0, IT.jsx)("img", {
            className: LT()({
              Shown: TT === UT.id
            }),
            src: wm[TT],
            alt: "",
            draggable: !1
          }, TT))), "completed" === UT.state && (0, IT.jsx)("span", {
            className: "PlotsJournalStamp",
            children: MT("plotsGame:journalBuilt")
          }), kT && (0, IT.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, IT.jsx)(ZT.c, {
              name: "lock"
            })
          })]
        }), null !== UT.note && (0, IT.jsx)("p", {
          className: "PlotsJournalNote",
          children: MT(UT.note)
        }), (0, IT.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === UT.state && (0, IT.jsx)("p", {
            className: "PlotsJournalHint",
            children: MT("plotsGame:journalLocked", {
              name: MT(xT(UT.unlockedBy).displayName.translationKey)
            })
          }), UT.active && (0, IT.jsxs)(IT.Fragment, {
            children: [(0, IT.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: MT("plotsGame:journalBuilding")
            }), (0, IT.jsx)(Jm.g, {
              onClick: zT,
              children: MT("plotsGame:journalPutAway")
            })]
          }), !kT && !UT.active && (0, IT.jsx)(lT, {
            onClick: () => {
              WT(UT.id)
            },
            children: MT("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function sm(TT) {
      let {
        className: UT,
        page: mT,
        hidden: WT,
        building: zT,
        journal: MT
      } = TT;
      return (0, IT.jsxs)("div", {
        ref: TT => {
          null !== TT && (TT.inert = WT)
        },
        className: LT()("PlotsJournalSide", UT),
        children: [void 0 !== mT && (0, IT.jsx)(Qm, {
          page: mT,
          building: zT,
          onBuild: MT.build,
          onPutAway: MT.putAway
        }), void 0 === mT && (0, IT.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var Fm = mT(2014);

    function Pm(TT) {
      return Math.cos((0, Fm.m)(TT))
    }

    function Vm(TT) {
      return (0, Fm.D)(Math.acos(OU.e.clamp(TT, -1, 1)))
    }

    function um(TT, UT, mT, WT, zT) {
      const MT = Math.abs(UT - TT),
        gT = (0, Fm.D)(zT / (mT * Math.abs(Math.sin((0, Fm.m)(TT))))),
        nT = 450 * Math.min(1, MT / WT),
        HT = gT > 0 ? 3 * MT / gT : 1 / 0;
      return Math.round(Math.max(120, Math.min(nT, HT)))
    }
    class Cm {
      constructor() {
        this.samples = []
      }
      add(TT, UT) {
        for (this.samples.push({
            x: TT,
            at: UT
          }); UT - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const TT = this.samples[0],
          UT = this.samples[this.samples.length - 1];
        return UT.at > TT.at ? (UT.x - TT.x) / (UT.at - TT.at) : 0
      }
    }

    function rm(TT) {
      return Vm(new DOMMatrixReadOnly(getComputedStyle(TT).transform).m11)
    }

    function Km(TT, UT) {
      TT.style.transform = `rotateY(${-UT}deg)`, TT.classList.add("Turning")
    }

    function Sm(TT, UT, mT) {
      const [WT, zT] = (0, MT.useState)(mT), gT = (0, MT.useRef)(null), nT = (0, MT.useRef)(null), HT = (0, MT.useRef)({
        Forward: null,
        Back: null
      }), kT = UT ? 2 : 1, jT = UT ? 180 : 90, lT = WT - WT % kT, LT = lT > 0, pT = lT + kT < TT, BT = (0, MT.useCallback)((() => {
        const TT = nT.current;
        return null === TT ? lT : (nT.current = null, TT.animation.cancel(), (UT = HT.current[TT.direction]).style.transform = "", UT.classList.remove("Turning"), null === TT.next ? lT : (zT(TT.next), TT.next));
        var UT
      }), [lT]), ZT = (0, MT.useCallback)(((TT, UT, mT, WT) => {
        const zT = HT.current[TT],
          MT = rm(zT),
          gT = UT === ("Forward" === TT) ? jT : 0;
        Km(zT, gT);
        const lT = zT.animate([{
          transform: `rotateY(${-MT}deg)`
        }, {
          transform: `rotateY(${-gT}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : um(MT, gT, zT.offsetWidth, jT, gT > MT ? -mT : mT),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        nT.current = {
          direction: TT,
          animation: lT,
          next: UT ? WT + ("Forward" === TT ? kT : -kT) : null
        }, lT.onfinish = () => {
          var TT;
          (null === (TT = nT.current) || void 0 === TT ? void 0 : TT.animation) === lT && BT()
        }
      }), [kT, jT, BT]), cT = (0, MT.useCallback)((UT => {
        if (null !== gT.current) return;
        const mT = BT();
        ("Forward" === UT ? mT + kT < TT : mT > 0) && ZT(UT, !0, 0, mT)
      }), [BT, ZT, kT, TT]);
      (0, MT.useEffect)((() => () => {
        var TT;
        null === (TT = nT.current) || void 0 === TT || TT.animation.cancel()
      }), []), (0, MT.useEffect)((() => {
        const TT = TT => {
          var UT;
          TT.pointerId !== (null === (UT = gT.current) || void 0 === UT ? void 0 : UT.pointerId) || gT.current.following || (gT.current = null)
        };
        return window.addEventListener("pointerup", TT), () => {
          window.removeEventListener("pointerup", TT)
        }
      }), []);
      const vT = (TT, UT, mT) => {
          const WT = function(TT, UT, mT, WT) {
            return (TT < 0 ? mT : WT) ? OU.e.clampAbs(TT, UT) : Math.sign(TT) * UT * (1 - 1 / (.55 * Math.abs(TT) / UT + 1))
          }(TT.base + mT, kT * TT.width, pT, LT);
          return "Forward" === UT ? Math.min(WT, 0) : Math.max(WT, 0)
        },
        fT = (TT, UT) => {
          const mT = gT.current;
          if (gT.current = null, null === mT.direction) return;
          mT.speed.add(TT, UT);
          const WT = mT.speed.get(),
            zT = vT(mT, mT.direction, TT - mT.x);
          ZT(mT.direction, null !== function(TT, UT, mT, WT, zT) {
            if (Math.abs(UT) >= .3 ? Math.sign(UT) !== Math.sign(TT) : Math.abs(TT) < .5 * mT) return null;
            const MT = TT < 0 ? "Forward" : "Back";
            return ("Forward" === MT ? WT : zT) ? MT : null
          }(zT, WT, kT * mT.width, pT, LT), WT, lT)
        },
        qT = {
          onPointerDown: TT => {
            var UT;
            if (!TT.isPrimary || 0 !== TT.button || null !== nT.current && null !== TT.target.closest("button")) return;
            const mT = new Cm;
            mT.add(TT.clientX, TT.timeStamp);
            const WT = HT.current.Forward.offsetWidth,
              zT = nT.current;
            nT.current = null;
            let MT = 0;
            if (null !== zT) {
              const UT = HT.current[zT.direction],
                mT = rm(UT);
              zT.animation.cancel(), Km(UT, mT), MT = function(TT, UT, mT, WT) {
                return (TT < 0 ? mT : WT) ? TT : Math.sign(TT) * UT * (1 / (1 - Math.min(Math.abs(TT) / UT, .99)) - 1) / .55
              }(function(TT, UT, mT, WT) {
                return mT * (Pm(UT) - Pm("Forward" === TT ? 0 : WT))
              }(zT.direction, mT, WT, jT), kT * WT, pT, LT), TT.currentTarget.setPointerCapture(TT.pointerId)
            }
            gT.current = {
              pointerId: TT.pointerId,
              x: TT.clientX,
              y: TT.clientY,
              base: MT,
              width: WT,
              following: null !== zT,
              direction: null !== (UT = null === zT || void 0 === zT ? void 0 : zT.direction) && void 0 !== UT ? UT : null,
              speed: mT
            }
          },
          onPointerMove: TT => {
            const UT = gT.current;
            if (null === UT || TT.pointerId !== UT.pointerId) return;
            if (0 === TT.buttons) return void fT(TT.clientX, TT.timeStamp);
            const mT = TT.clientX - UT.x;
            !UT.following && function(TT, UT) {
              return Math.abs(TT) > 8 && Math.abs(TT) > Math.abs(UT)
            }(mT, TT.clientY - UT.y) && (UT.following = !0, UT.direction = mT < 0 ? "Forward" : "Back", TT.currentTarget.setPointerCapture(TT.pointerId)), null !== UT.direction && (UT.speed.add(TT.clientX, TT.timeStamp), Km(HT.current[UT.direction], function(TT, UT, mT, WT) {
              const zT = mT * Pm("Forward" === TT ? 0 : WT) + UT;
              return OU.e.clamp(Vm(zT / mT), 0, WT)
            }(UT.direction, vT(UT, UT.direction, mT), UT.width, jT)))
          },
          onPointerUp: TT => {
            var UT;
            TT.pointerId === (null === (UT = gT.current) || void 0 === UT ? void 0 : UT.pointerId) && fT(TT.clientX, TT.timeStamp)
          },
          onPointerCancel: TT => {
            const UT = gT.current;
            TT.pointerId === (null === UT || void 0 === UT ? void 0 : UT.pointerId) && (gT.current = null, null !== UT.direction && ZT(UT.direction, !1, 0, lT))
          }
        };
      return {
        first: lT,
        step: kT,
        canGoBack: LT,
        canGoForward: pT,
        turnPage: cT,
        leaves: HT,
        pagesHandlers: qT
      }
    }

    function Gm(TT, UT) {
      return TT > UT && TT >= 600
    }

    function Nm(TT) {
      let {
        journal: UT,
        hud: mT,
        guide: WT
      } = TT;
      const {
        t: zT
      } = (0, jT.z)(), nT = (0, HT.j)(yT, UT.getPages()), kT = (0, HT.j)(UU, mT.getGuide()), lT = nT.find((TT => TT.active)), pT = (BT = kT, ZT = void 0 === lT ? null : lT.id, "active" === BT[0] && null === ZT);
      var BT, ZT;
      const cT = (0, dm.m)(Gm),
        {
          first: vT,
          step: iT,
          canGoBack: bT,
          canGoForward: OT,
          turnPage: eT,
          leaves: YT,
          pagesHandlers: JT
        } = Sm(nT.length, cT, (() => function(TT) {
          const UT = TT.findIndex((TT => TT.active));
          return -1 !== UT ? UT : Math.max(0, TT.findIndex((TT => "open" === TT.state)))
        }(nT)));
      (0, MT.useEffect)((() => {
        UT.onOpened()
      }), [UT]), (0, fT.c)((TT => !pT && ("ArrowLeft" === TT.code || "ArrowRight" === TT.code) && !(0, qT.isTypingInInput)()), (TT => {
        TT.stopPropagation(), eT("ArrowLeft" === TT.code ? "Back" : "Forward")
      }));
      const xT = void 0 !== lT,
        dT = (TT, mT, WT) => (0, IT.jsx)(sm, {
          className: TT,
          page: mT >= 0 && mT < nT.length ? nT[mT] : void 0,
          hidden: WT,
          building: xT,
          journal: UT
        });
      return (0, IT.jsx)(xm.e, {
        close: gT.f,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, IT.jsxs)("section", {
          className: LT()("PlotsJournal", {
            Spread: cT
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": zT("plotsGame:journalTitle"),
          children: [(0, IT.jsx)(Jm.k, {
            className: "PlotsJournalClose",
            onClick: gT.f
          }), "active" === kT[0] && (0, IT.jsx)(HU, {
            className: "PlotsJournalGuideSkip",
            onSkip: WT.skip
          }), pT && (0, IT.jsx)(ym, {
            onBuild: UT.build
          }), !pT && (0, IT.jsx)(Xm, {
            direction: "Back",
            disabled: !bT,
            onTurn: eT
          }), (0, IT.jsx)("div", {
            hidden: pT,
            className: "PlotsJournalBookPages",
            ...JT,
            children: (0, IT.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [cT && dT("Left", vT - 2, !0), dT("Right", vT + 2 * iT - 1, !0), (0, IT.jsxs)("div", {
                ref: TT => {
                  YT.current.Back = TT
                },
                className: "PlotsJournalLeaf Back",
                children: [dT("Recto", vT - 1, !0), cT && dT("Verso", vT, !1)]
              }), (0, IT.jsxs)("div", {
                ref: TT => {
                  YT.current.Forward = TT
                },
                className: "PlotsJournalLeaf Forward",
                children: [dT("Recto", vT + iT - 1, !1), cT && dT("Verso", vT + iT, !0)]
              })]
            })
          }), !pT && (0, IT.jsx)(Xm, {
            direction: "Forward",
            disabled: !OT,
            onTurn: eT
          })]
        })
      })
    }

    function Em(TT, UT, mT, WT, zT) {
      const MT = Math.hypot(...UT.dir);
      if (!Number.isFinite(MT) || 0 === MT) return -1;
      const {
        from: gT,
        reach: nT,
        solid: HT
      } = UT, kT = [UT.dir[0] / MT, UT.dir[1] / MT, UT.dir[2] / MT], jT = null === HT ? nT : Math.min(nT, function(TT, UT, mT) {
        const WT = hm(TT, UT, mT);
        if (WT !== 1 / 0) return WT;
        return (mT[0] + .5 - TT[0]) * UT[0] + (mT[1] + .5 - TT[1]) * UT[1] + (mT[2] + .5 - TT[2]) * UT[2]
      }(gT, kT, HT) + .75);
      let lT = -1,
        LT = 1 / 0,
        pT = 1 / 0;
      for (let BT = 0; BT < TT.length; BT += 4) {
        const UT = [TT[BT], TT[BT + 1], TT[BT + 2]],
          MT = zT(BT) ? nT : jT;
        let HT = -1,
          ZT = hm(gT, kT, UT);
        if (ZT > MT) {
          const TT = [UT[0] + .5 - gT[0], UT[1] + .5 - gT[1], UT[2] + .5 - gT[2]];
          if (ZT = TT[0] * kT[0] + TT[1] * kT[1] + TT[2] * kT[2], ZT <= 0 || ZT > MT) continue;
          if (HT = Math.hypot(TT[0] - ZT * kT[0], TT[1] - ZT * kT[1], TT[2] - ZT * kT[2]), HT > .7 || !WT(BT)) continue
        }(HT < LT || HT === LT && ZT < pT) && mT(BT) && (lT = BT, LT = HT, pT = ZT)
      }
      return lT
    }

    function hm(TT, UT, mT) {
      let WT = 0,
        zT = 1 / 0;
      for (let MT = 0; MT < 3; MT++) {
        const gT = mT[MT] - TT[MT];
        if (0 === UT[MT]) {
          if (gT > 0 || gT + 1 < 0) return 1 / 0;
          continue
        }
        const nT = gT / UT[MT],
          HT = (gT + 1) / UT[MT];
        WT = Math.max(WT, Math.min(nT, HT)), zT = Math.min(zT, Math.max(nT, HT))
      }
      return WT <= zT ? WT : 1 / 0
    }
    var Dm = mT(36991),
      om = mT(38198);
    const Am = [1, 1, 1];
    class Rm {
      constructor(TT) {
        this.api = TT, this.meshes = null, this.shown = null
      }
      show(TT) {
        if (!(0, Dm.h)(TT, this.shown))
          if (this.shown = null === TT ? null : [TT[0], TT[1], TT[2]], null !== this.meshes)
            for (const UT of this.meshes) this.api.setGameMesh(UT, null === TT ? {
              visible: !1
            } : {
              anchor: TT,
              visible: !0
            });
          else if (null !== TT) {
          const UT = [om.f, om.f, om.f, 0, 0, 0];
          this.meshes = [this.build([UT], om.h, TT), this.build((0, om.e)(), om.m, TT)]
        }
      }
      dispose() {
        for (const UT of null !== (TT = this.meshes) && void 0 !== TT ? TT : []) {
          var TT;
          this.api.disposeGameMesh(UT)
        }
        this.meshes = null, this.shown = null
      }
      build(TT, UT, mT) {
        const WT = [],
          zT = [];
        for (const [MT, gT, nT, HT, kT, jT] of TT)(0, NU.e)(WT, zT, [HT + .5, kT + .5, jT + .5], [MT, gT, nT]);
        return this.api.createGameMesh({
          positions: WT,
          indices: zT
        }, {
          rgb: Am,
          alpha: UT,
          onTop: !0
        }, mT)
      }
    }

    function TW(TT, UT) {
      const mT = SU.f.sc / 2;
      return TT[0] < UT[0] + mT && TT[0] + 1 > UT[0] - mT && TT[1] < UT[1] + SU.f.Fc && TT[1] + 1 > UT[1] && TT[2] < UT[2] + mT && TT[2] + 1 > UT[2] - mT
    }

    function UW(TT, UT) {
      return TT.getClientOption(UT, "blockReach") + 1
    }
    class mW {
      constructor(TT, UT, mT) {
        this.api = TT, this.localPlayerId = UT, this.foreseen = mT, this.cells = [], this.playerCells = [], this.next = null
      }
      get() {
        return this.next
      }
      setCells(TT) {
        this.cells = TT
      }
      playerMoved() {
        return WW(this.api.getPositionView(this.localPlayerId)).some(((TT, UT) => TT !== this.playerCells[UT]))
      }
      VL(TT) {
        const UT = this.api.getPositionView(this.localPlayerId);
        return this.playerCells.splice(0, 1 / 0, ...WW(UT)), this.next = this.pickFrom(null === TT ? [UT[0], UT[1] + 1, UT[2]] : (0, Dm.e)(TT), (() => !1)), this.next
      }
      pickFrom(TT, UT) {
        const mT = this.api.getPositionView(this.localPlayerId),
          WT = [mT[0], mT[1] + SU.f.Fc * SU.f.playerEyeToHeightRatio, mT[2]],
          zT = UW(this.api, this.localPlayerId),
          {
            cells: MT
          } = this,
          gT = TT => [MT[TT], MT[TT + 1], MT[TT + 2]],
          nT = function(TT, UT, mT, WT, zT, MT) {
            let gT = -1,
              nT = -1,
              HT = 1 / 0;
            for (let kT = 0; kT < TT.length; kT += UT) {
              const UT = (MT(kT) ? 2 : 0) + (WT(kT) ? 1 : 0);
              if (UT < nT || zT(kT)) continue;
              const jT = (TT[kT] + .5 - mT[0]) ** 2 + (TT[kT + 1] + .5 - mT[1]) ** 2 + (TT[kT + 2] + .5 - mT[2]) ** 2;
              (UT > nT || jT < HT) && (gT = kT, nT = UT, HT = jT)
            }
            return gT
          }(MT, 4, TT, (TT => 1 === MT[TT + 3]), (TT => {
            const WT = gT(TT);
            return TW(WT, mT) || this.foreseen.has(WT.join()) || UT(WT)
          }), (TT => function(TT, UT, mT) {
            return (UT[0] + .5 - TT[0]) ** 2 + (UT[1] + .5 - TT[1]) ** 2 + (UT[2] + .5 - TT[2]) ** 2 <= mT ** 2
          }(WT, gT(TT), zT)));
        return -1 === nT ? null : gT(nT)
      }
    }

    function WW(TT) {
      let [UT, mT, WT] = TT;
      const zT = SU.f.sc / 2;
      return [Math.floor(UT), Math.floor(mT), Math.floor(WT), Math.floor(UT - zT), Math.floor(UT + zT), Math.floor(mT + SU.f.Fc), Math.floor(WT - zT), Math.floor(WT + zT)]
    }
    class zW {
      constructor(TT, UT, mT) {
        this.api = TT, this.localPlayerId = UT, this.pickNext = mT, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(TT) {
        const [UT, , mT] = TT.cameraDirection, WT = Math.hypot(UT, mT);
        WT > .001 && (this.heading = [UT / WT, mT / WT])
      }
      tapped(TT, UT, mT) {
        const WT = UW(this.api, this.localPlayerId),
          {
            origin: zT,
            direction: MT
          } = this.api.getActionRay(),
          gT = [...zT],
          nT = [
            [gT, [gT[0] + MT[0] * WT, gT[1] + MT[1] * WT, gT[2] + MT[2] * WT]]
          ];
        null !== TT && nT.push([gT, (0, Dm.e)(TT)]), this.tap = {
          lines: nT,
          next: UT,
          ms: mT
        }
      }
      filled(TT, UT) {
        this.tap = null, this.turnFrom(TT, UT), this.retry(UT)
      }
      arrived(TT, UT) {
        const {
          tap: mT
        } = this;
        if (null === mT || UT - mT.ms > 1500) return null;
        const WT = (0, Dm.e)(TT);
        return (0, Dm.h)(mT.next, TT) || mT.lines.some((TT => {
          let [UT, mT] = TT;
          return function(TT, UT, mT) {
            const WT = [mT[0] - UT[0], mT[1] - UT[1], mT[2] - UT[2]],
              zT = [TT[0] - UT[0], TT[1] - UT[1], TT[2] - UT[2]],
              MT = WT[0] ** 2 + WT[1] ** 2 + WT[2] ** 2,
              gT = 0 === MT ? 0 : Math.min(1, Math.max(0, (zT[0] * WT[0] + zT[1] * WT[1] + zT[2] * WT[2]) / MT));
            return Math.hypot(zT[0] - WT[0] * gT, zT[1] - WT[1] * gT, zT[2] - WT[2] * gT)
          }(WT, UT, mT) <= .9
        })) ? (this.tap = null, this.turnFrom(TT, UT), mT.ms) : null
      }
      turnFrom(TT, UT) {
        this.pending = {
          from: TT,
          ms: UT,
          turnMs: Math.max(50, Math.min(250, UT - this.lastFillMs))
        }, this.lastFillMs = UT
      }
      retry(TT) {
        const {
          pending: UT
        } = this;
        if (null === UT) return;
        if (TT - UT.ms > 1500) return void(this.pending = null);
        const mT = this.pickNext((0, Dm.e)(UT.from), (TT => (0, Dm.h)(TT, UT.from)));
        if (null === mT) return;
        this.pending = null;
        const {
          turning: WT
        } = this;
        if (null !== WT && TT < WT.endMs && (0, Dm.h)(WT.to, mT)) return;
        const zT = this.api.getActionRay().origin,
          MT = [mT[0] + .5 - zT[0], mT[1] + .5 - zT[1], mT[2] + .5 - zT[2]],
          gT = Math.hypot(MT[0], MT[2]);
        if (gT < .3) {
          const TT = Math.max(gT, .001);
          MT[0] = this.heading[0] * TT, MT[2] = this.heading[1] * TT
        }
        this.api.turnCamera(MT, UT.turnMs), this.turning = {
          to: mT,
          endMs: TT + UT.turnMs
        }
      }
    }
    class MW {
      constructor(TT, UT, mT, WT) {
        this.api = TT, this.localPlayerId = UT, this.juice = mT, this.tracker = WT, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.lastFilled = null, this.lastSeenFilled = null, this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = void 0, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new GU(TT), this.meshes = new RU(TT), this.outline = new Rm(TT), this.nextCell = new mW(TT, UT, this.foreseen), this.turn = new zW(TT, UT, ((TT, UT) => this.nextCell.pickFrom(TT, UT)))
      }
      pB(TT) {
        const UT = "active" === TT[0] ? `${TT[1]}|${TT[3]}|${TT[4]}|${TT[5]}|${TT[6]}` : "";
        if ("active" !== TT[0]) "built" === TT[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , mT, WT, zT, MT] = TT;
          UT !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = mT) : mT === this.layerY ? this.burstUnlisted(WT) : mT > this.layerY && this.finishLayer(mT), this.layerY = mT, this.layerCells.has(mT) || this.layerCells.set(mT, WT.filter(gW)), this.ghostCells = WT, this.palette = zT, this.occupiedCells = MT
        }
        UT !== this.blueprint && (this.tracker.show("active" === TT[0] && TT[2] ? {
          id: TT[1],
          y: TT[4]
        } : null), this.blueprint = UT, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((TT => this.api.blockNameToBlockId(TT))), this.chunkWatch.watch([...this.ghostCells.filter(gW), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(TT) {
        this.burstUnlisted([]), TT > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = TT)
      }
      Cl() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const TT = performance.now();
        let UT = !1;
        for (const [WT, zT] of this.foreseen) {
          var mT;
          if (TT - zT > 1e3) this.foreseen.delete(WT), UT = !0, (null === (mT = this.lastFilled) || void 0 === mT ? void 0 : mT.join()) === WT && (this.lastFilled = this.lastSeenFilled)
        }(UT || this.nextCell.playerMoved()) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(TT) {
        const UT = new Set;
        for (let zT = 0; zT < TT.length; zT += 4) UT.add(`${TT[zT]},${TT[zT+1]},${TT[zT+2]}`);
        const mT = [],
          {
            ghostCells: WT
          } = this;
        for (let zT = 0; zT < WT.length; zT += 4) {
          const TT = `${WT[zT]},${WT[zT+1]},${WT[zT+2]}`;
          !UT.has(TT) && this.open.delete(TT) && mT.push(this.filledCell(zT))
        }
        this.burst(mT)
      }
      refresh() {
        const {
          ghostCells: TT,
          palette: UT,
          occupiedCells: mT
        } = this, WT = new AU, zT = new Set, MT = [], gT = [];
        let nT = 0;
        for (let HT = 0; HT < TT.length; HT += 4) {
          const [mT, kT, jT, lT] = [TT[HT], TT[HT + 1], TT[HT + 2], TT[HT + 3]], LT = this.api.getBlockId(mT, kT, jT), pT = `${mT},${kT},${jT}`, BT = yU(this.blockIds[lT], LT);
          !BT && XU(LT) ? WT.add(mT, kT, jT, QU(UT[lT]), hU, KU(UT[lT])) : BT ? this.open.has(pT) && MT.push(this.filledCell(HT)) : WT.add(mT, kT, jT, oU, DU), BT || nT++, !BT && this.api.isBlockInLoadedChunk(mT, kT, jT) && (zT.add(pT), gT.push(mT, kT, jT, XU(LT) ? 0 : 1))
        }
        this.open = zT, this.nextCell.setCells(gT), this.tracker.update(this.layerY, this.topLayerY, nT);
        for (let HT = 0; HT < mT.length; HT += 3) {
          const [TT, UT, zT] = [mT[HT], mT[HT + 1], mT[HT + 2]];
          XU(this.api.getBlockId(TT, UT, zT)) || WT.add(TT, UT, zT, oU, DU)
        }
        this.meshes.show(WT.toArray()), this.burst(MT), this.showNext(), this.turn.retry(performance.now())
      }
      burst(TT) {
        const UT = performance.now(),
          mT = [];
        for (const [zT, MT, gT] of TT) {
          const TT = [zT, MT, gT];
          this.lastSeenFilled = TT, this.foreseen.delete(TT.join()) || mT.push(TT)
        }
        const WT = this.isHolding(UT);
        for (const zT of mT) {
          if (this.lastFilled = zT, WT && this.pressFilled) {
            this.turn.filled(zT, UT);
            continue
          }
          const TT = this.turn.arrived(zT, UT);
          if (null !== TT) {
            this.pressFilled = WT;
            for (const [UT, mT] of this.foreseen) mT <= TT && this.foreseen.delete(UT)
          }
        }
        this.juice.filled(TT)
      }
      showNext() {
        var TT;
        this.outline.show(null !== (TT = this.aimed) && void 0 !== TT ? TT : this.nextCell.VL(this.lastFilled))
      }
      afterRender(TT) {
        var UT;
        this.turn.look(TT);
        const mT = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === mT ? null : mT.position), this.outline.show(null !== (UT = this.aimed) && void 0 !== UT ? UT : this.nextCell.get())
      }
      isHolding(TT) {
        return null !== this.altMs && TT - this.altMs <= 500
      }
      attemptAltAction(TT) {
        const UT = performance.now();
        if (this.isHolding(UT) || (this.pressFilled = !1), this.altMs = UT, this.pressFilled) return "preventPlacement";
        const mT = this.findAimed(TT);
        if (null !== mT) return this.foreseen.set(mT.join(), UT), this.lastFilled = mT, this.aimed = null, this.showNext(), this.turn.filled(mT, UT), this.pressFilled = !0, "preventPlacement";
        {
          const mT = this.nextCell.get();
          null !== mT && this.turn.tapped(TT, mT, UT)
        }
      }
      holdPressOnEntity() {
        const TT = performance.now();
        this.pressFilled && this.isHolding(TT) && (this.altMs = TT)
      }
      findAimed(TT) {
        return function(TT, UT, mT, WT, zT, MT, gT) {
          const nT = TT.RUT(UT),
            HT = null === nT || null === TT.blockNameToBlockId(nT.name, !0) ? null : nT.name,
            kT = TT.getPositionView(UT),
            {
              origin: jT,
              direction: lT
            } = TT.getActionRay(),
            LT = Em(WT, {
              from: jT,
              dir: lT,
              reach: UW(TT, UT),
              solid: mT
            }, (UT => {
              const mT = [WT[UT], WT[UT + 1], WT[UT + 2]];
              return !yU(zT[WT[UT + 3]], TT.getBlockId(...mT)) && !gT.has(mT.join()) && TT.isBlockInLoadedChunk(...mT) && !TW(mT, kT)
            }), (TT => null === HT || HT === IU(zT[WT[TT + 3]])), (TT => null !== MT && WT[TT] === MT[0] && WT[TT + 1] === MT[1] && WT[TT + 2] === MT[2]));
          return -1 === LT ? null : [WT[LT], WT[LT + 1], WT[LT + 2]]
        }(this.api, this.localPlayerId, TT, this.ghostCells, this.blockIds, this.nextCell.get(), this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(TT) {
        const {
          ghostCells: UT
        } = this, [mT, WT, zT] = QU(this.palette[UT[TT + 3]]);
        return [UT[TT], UT[TT + 1], UT[TT + 2], mT, WT, zT]
      }
    }

    function gW(TT, UT) {
      return UT % 4 !== 3
    }
    class nW {
      constructor(TT) {
        this.api = TT, this.sent = !1
      }
      Cl() {
        this.sent || nT.b.get("loadingOverlayVisible") || (this.sent = !0, this.api.sendCommand("plotsentered"))
      }
    }
    var HW = mT(4328),
      kW = mT(39281);

    function jW(TT, UT, mT) {
      const WT = [255 * TT, 255 * UT, 255 * mT],
        [zT, MT, gT] = WT.map((TT => TT + .4 * (255 - TT)));
      return {
        texture: "square_particle",
        fl: 48,
        minLifeTime: .3 / kW.b,
        maxLifeTime: .55 / kW.b,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * kW.b * kW.b, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...WT, 1],
          maxColor: [zT, MT, gT, 1]
        }, {
          timeFraction: 1,
          minColor: [...WT, 0],
          maxColor: [zT, MT, gT, 0]
        }],
        blendMode: HW.e.Standard
      }
    }
    const lW = {
      texture: "glint",
      mipmaps: !1,
      fl: 96,
      minLifeTime: .5 / kW.b,
      maxLifeTime: .9 / kW.b,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * kW.b * kW.b, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: HW.e.OneOne
    };
    class LW {
      constructor(TT, UT) {
        this.api = TT, this.localPlayerId = UT, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(TT) {
        if (this.api.particlesEnabled())
          for (const [UT, mT, WT, zT, MT, gT] of TT.slice(0, 3)) {
            const TT = `${zT},${MT},${gT}`;
            let nT = this.chips.get(TT);
            void 0 === nT && (nT = this.api.createParticles(jW(zT, MT, gT), {
              pos: [UT + .5, mT + .5, WT + .5]
            }), this.chips.set(TT, nT));
            for (let UT = 0; UT < 8; UT++) this.setPoint(UT, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            nT.emitPoints([UT + .5, mT + .5, WT + .5], this.points, 8)
          }
      }
      layerDone(TT) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const UT = TT.length / 3;
        if (0 === UT || !this.api.particlesEnabled()) return;
        const mT = Math.min(UT, 48),
          [WT, zT, MT] = [TT[0] + .5, TT[1] + 1, TT[2] + .5];
        let gT = 0;
        for (let nT = 0; nT < mT; nT++) {
          const HT = 3 * Math.floor(nT * UT / mT);
          for (let UT = 0; UT < 2; UT++) this.setPoint(gT++, TT[HT] + Math.random() - WT, TT[HT + 1] + 1 - zT, TT[HT + 2] + Math.random() - MT, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(lW, {
          pos: [WT, zT, MT]
        }), this.sparkles.emitPoints([WT, zT, MT], this.points, gT)
      }
      dispose() {
        var TT;
        for (const UT of this.chips.values()) UT.stop();
        this.chips.clear(), null === (TT = this.sparkles) || void 0 === TT || TT.stop(), this.sparkles = null
      }
      setPoint(TT, UT, mT, WT, zT) {
        const MT = 4 * TT;
        this.points[MT] = UT, this.points[MT + 1] = mT, this.points[MT + 2] = WT, this.points[MT + 3] = zT
      }
    }
    const pW = "SpecialAction1",
      BW = "KeyY",
      ZW = "KeyX";

    function cW(TT) {
      let {
        placement: UT
      } = TT;
      const mT = (0, HT.j)(nm, UT.getView()),
        {
          t: WT
        } = (0, jT.z)(),
        {
          isTouchScreen: zT
        } = (0, nT.h)(["isTouchScreen"]),
        gT = (0, MT.useContext)(bT),
        lT = null !== mT,
        ZT = lT && !mT.blocked && !mT.waiting;
      if ((0, fT.c)((TT => lT && !TT.repeat && !(0, qT.isTypingInInput)() && !(0, pT.l)() && !zT), (TT => {
          const mT = function(TT, UT, mT) {
            if (TT === ZW) return UT.stop;
            if (TT === BW) return mT ? UT.build : fW;
            return kT.v[pW].includes(TT) ? UT.rotate : null
          }(TT.code, UT, ZT);
          null !== mT && (TT.stopPropagation(), mT())
        })), !lT) return null;
      let cT = zT ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return mT.blocked ? cT = "plotsGame:placementOffPlot" : mT.toClear > 0 ? cT = "plotsGame:placementClear" : "placeSpot" !== gT.hint && "placeBuild" !== gT.hint || (cT = null), (0, IT.jsx)(BT.d, {
        placement: "bottom",
        children: (0, IT.jsxs)("div", {
          ref: gT.placementCardRef,
          className: "PlotsPlacementCard",
          children: [(0, IT.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: WT(xT(mT.id).displayName.translationKey)
          }), null !== cT && (0, IT.jsx)("div", {
            className: LT()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: mT.refusals > 0
            }),
            children: WT(cT)
          }, mT.refusals), (0, IT.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, IT.jsxs)(Jm.e, {
              onClick: UT.rotate,
              children: [(0, IT.jsx)(vW, {
                noaAction: pW
              }), WT("plotsGame:placementRotate")]
            }), (0, IT.jsxs)(Jm.I, {
              onClick: UT.stop,
              children: [(0, IT.jsx)(vW, {
                keyCode: ZW
              }), WT("general:cancel")]
            }), (0, IT.jsx)("span", {
              ref: gT.buildRef,
              className: LT()("PlotsPlacementBuild", {
                Pulse: "placeBuild" === gT.hint && ZT && zT
              }),
              children: (0, IT.jsxs)(Jm.l, {
                disabled: !ZT,
                onClick: UT.build,
                children: [(0, IT.jsx)(vW, {
                  keyCode: BW
                }), WT("plotsGame:placementBuild")]
              })
            })]
          })]
        })
      })
    }

    function vW(TT) {
      return (0, IT.jsx)(vT.c, {
        className: "PlotsPlacementKey",
        ...TT
      })
    }

    function fW() {}
    var qW = mT(2493),
      iW = mT(36776),
      bW = mT(2089),
      OW = mT(1360);
    const eW = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function YW(TT) {
      let {
        hud: UT
      } = TT;
      const mT = (0, HT.j)(TU, UT.getPlot()),
        [WT, zT] = (0, MT.useState)(null),
        gT = (0, iW.j)(WT);
      if ("none" === mT[0]) return null;
      const [, nT, kT, jT, lT, pT] = mT;
      return (0, IT.jsx)("div", {
        className: LT()("PlotsPlotBannerContainer", {
          Below: gT
        }),
        children: (0, IT.jsx)(JW, {
          plotX: nT,
          plotZ: kT,
          ownerName: jT,
          ownerId: lT,
          relation: pT,
          plaqueRef: zT
        }, `${nT},${kT}`)
      })
    }

    function JW(TT) {
      var UT, mT;
      let {
        plotX: WT,
        plotZ: zT,
        ownerName: MT,
        ownerId: gT,
        relation: nT,
        plaqueRef: HT
      } = TT;
      const {
        t: kT
      } = (0, jT.z)(), lT = (0, bW.i)("hiddenPlayerNames"), pT = (0, bW.i)("players"), BT = null === gT ? null : null !== (UT = null === (mT = pT.byId[gT]) || void 0 === mT ? void 0 : mT.cosmetics) && void 0 !== UT ? UT : null, cT = kT("plotsGame:plotBannerCoords", {
        x: WT,
        z: zT
      }), vT = "own" === nT || null !== MT;
      return (0, IT.jsxs)("div", {
        ref: HT,
        className: LT()("PlotsPlotBanner", {
          Own: "own" === nT,
          Shared: "shared" === nT
        }),
        role: "status",
        children: [(0, IT.jsxs)("span", {
          className: LT()("PlotsPlotBannerSeal", {
            Face: null !== BT
          }),
          children: [null !== BT && (0, IT.jsx)(qW.e, {
            cosmetics: BT
          }), null === BT && (0, IT.jsx)(ZT.c, {
            name: eW[nT]
          })]
        }), (0, IT.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, IT.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === nT && kT("plotsGame:plotBannerYours"), "own" !== nT && null !== MT && kT("plotsGame:plotBannerOwner", {
              name: (0, OW.f)(MT, lT)
            }), !vT && cT]
          }), vT && (0, IT.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [cT, "shared" === nT && (0, IT.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: kT("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }
    const xW = function(TT, UT, mT, WT) {
      let {
        localPlayerId: zT
      } = WT;
      const nT = new WU;
      let HT = null,
        kT = null,
        jT = null,
        lT = null,
        LT = null,
        pT = null;
      const BT = [];
      return {
        onCreate: TT => {
          HT = new LW(TT, zT);
          const UT = new RT;
          kT = new MW(TT, zT, HT, UT), jT = new km(TT, zT), lT = new XT(TT, jT), LT = new Ym(TT, zT, kT.nextCell), pT = new nW(TT), BT.push((0, gT.q)((0, MT.createElement)(bm, {
            hud: nT,
            guide: LT,
            tracker: UT,
            placement: jT
          }, (0, MT.createElement)(YW, {
            hud: nT
          }), (0, MT.createElement)(sT, {
            journal: lT
          }), (0, MT.createElement)(Zm, {
            placement: jT
          }), (0, MT.createElement)(cW, {
            placement: jT
          })), {
            content: (0, MT.createElement)(Nm, {
              journal: lT,
              hud: nT,
              guide: LT
            })
          }))
        },
        Cl: () => {
          pT.Cl(), kT.Cl(), jT.Cl(), lT.Cl()
        },
        onPlayerAttemptAltAction: (TT, UT, mT, WT, zT, MT) => {
          if (null !== MT) return void kT.holdPressOnEntity();
          const gT = void 0 === UT ? null : [UT, mT, WT];
          return kT.attemptAltAction(gT)
        },
        onPlayerClickUp: () => {
          kT.endPress()
        },
        onAfterRender: (TT, UT) => {
          jT.afterRender(UT), kT.afterRender(UT), LT.afterRender(UT)
        },
        onClose: () => {
          for (const TT of BT) TT();
          HT.dispose(), kT.dispose(), jT.dispose(), HT = null, kT = null, jT = null, lT = null, LT = null, pT = null
        },
        onReceivedMessageFromServer: (TT, UT) => {
          if ("plotsPlot" === TT) nT.receivePlot(UT);
          else if ("plotsBlueprint" === TT) {
            const TT = UT;
            kT.pB(TT), jT.pB(TT)
          } else "plotsJournal" === TT ? lT.pB(UT) : "plotsJournalOpen" === TT ? lT.openFromServer(UT) : "plotsPreviewEnd" === TT ? jT.endFromServer() : "plotsGuide" === TT ? nT.receiveGuide(UT) : "plotsGuideDone" === TT && nT.receiveGuideDone()
        }
      }
    }
  },
  38624: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => nT
    });
    var WT = mT(38622);
    const zT = 5,
      MT = [0, 0, 0],
      gT = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function nT(TT, UT, mT, nT, HT, kT) {
      let [jT, lT, LT] = nT;
      const pT = (jT + .5 - mT[0]) ** 2 + (lT - mT[1]) ** 2 + (LT + .5 - mT[2]) ** 2;
      let BT = null;
      pT <= kT ** 2 && (MT[0] = jT + .5, MT[1] = lT + HT, MT[2] = LT + .5, BT = UT.projectWorldPosToViewport(MT));
      const ZT = null !== BT && BT.x > -zT && BT.x < 100 + zT && BT.y > -zT && BT.y < 100 + zT;
      return (0, WT.h)(TT, !ZT), ZT ? (gT.x = BT.x, gT.y = BT.y, gT.distSq = pT, gT) : null
    }
  },
  39281: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT,
      e: () => MT
    });
    const WT = 1 / .6,
      zT = {
        kind: "smokePuff"
      };
    class MT {
      constructor(TT, UT, mT) {
        this.style = TT, this.fl = UT, this.half = mT, this.particles = null, this.lastFrame = -1
      }
      emit(TT, UT, mT) {
        let MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return mT !== this.lastFrame && (this.lastFrame = mT, this.particles || (this.particles = TT.createParticles(function(TT, UT) {
          const [
            [mT, MT, gT],
            [nT, HT, kT]
          ] = TT.colours;
          return {
            texture: TT.soft ? zT : "square_particle",
            fl: UT,
            minLifeTime: TT.life[0] / WT,
            maxLifeTime: TT.life[1] / WT,
            minEmitPower: TT.power[0] * WT,
            maxEmitPower: TT.power[1] * WT,
            minSize: TT.size[0],
            maxSize: TT.size[1],
            emitRate: 0,
            gravity: [0, TT.lift * WT * WT, 0],
            dir1: [-TT.spread, 1, -TT.spread],
            dir2: [TT.spread, 1, TT.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [mT, MT, gT, TT.alpha],
              maxColor: [nT, HT, kT, TT.alpha]
            }, {
              timeFraction: 1,
              minColor: [mT, MT, gT, 0],
              maxColor: [nT, HT, kT, 0]
            }],
            blendMode: TT.blendMode
          }
        }(this.style, this.fl), {
          pos: UT,
          half: this.half
        })), this.particles.moveTo(UT, this.half), this.particles.emit(MT), !0)
      }
      dispose() {
        var TT;
        null === (TT = this.particles) || void 0 === TT || TT.stop(), this.particles = null
      }
    }
  },
  38622: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT,
      h: () => MT
    });
    const WT = new WeakMap;

    function zT(TT) {
      let UT = WT.get(TT);
      return UT || (UT = {
        hidden: TT.hidden,
        x: NaN,
        y: NaN
      }, WT.set(TT, UT)), UT
    }

    function MT(TT, UT) {
      const mT = zT(TT);
      mT.hidden !== UT && (mT.hidden = UT, TT.hidden = UT)
    }

    function gT(TT, UT, mT) {
      const WT = zT(TT);
      WT.x === UT && WT.y === mT || (WT.x = UT, WT.y = mT, TT.style.translate = `${UT}vw ${mT}vh`)
    }
  },
  36991: (TT, UT, mT) => {
    function WT(TT, UT) {
      return null === TT || null === UT ? TT === UT : TT[0] === UT[0] && TT[1] === UT[1] && TT[2] === UT[2]
    }

    function zT(TT) {
      return [TT[0] + .5, TT[1] + .5, TT[2] + .5]
    }
    mT.d(UT, {
      e: () => zT,
      h: () => WT
    })
  },
  37032: (TT, UT, mT) => {
    function WT(TT) {
      return TT.includes("Leaf Bed")
    }

    function zT(TT) {
      return / Bed(?: Head)?(?:\||$)/.test(TT) && !WT(TT)
    }

    function MT(TT) {
      return TT.includes(" Strongbed")
    }

    function gT(TT) {
      return WT(TT) || zT(TT) || MT(TT)
    }
    mT.d(UT, {
      c: () => gT,
      g: () => WT,
      j: () => MT,
      l: () => zT
    })
  },
  37030: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => kT
    });
    var WT = mT(37032),
      zT = mT(9330);
    const MT = [],
      gT = [],
      nT = [],
      HT = [];
    for (const jT of Object.keys(zT.k))(0, WT.g)(jT) ? MT.push(jT) : (0, WT.l)(jT) && gT.push(jT), (0, WT.j)(jT) && nT.push(jT), (jT.includes(" Bed Head") || jT.includes(" Strongbed Head")) && HT.push(jT);
    const kT = {
      leafBeds: MT,
      woolBeds: gT,
      strongBeds: nT,
      beds: [...MT, ...gT, ...nT],
      bedHeads: HT,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  38676: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYUlEQVR4nGNgIBP8R8NYwX+GDVNRMQOm4v8MC9qxYwZUxf//b+T4//8A+///51khGMTeyIGp8Nz0gv8MDoFgGsbeUB2BXeHESHcUjFNhR4Dj/zp3OzAGsbEphHgIOyYNAACzzGY5JF2GbAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);