export const id = 26;
export const ids = [26];
export const modules = {
  37756: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => rV,
      e: () => kV,
      f: () => vV,
      h: () => ZV
    });
    var JV = xV(35300),
      YV = xV(37762),
      UV = xV(37771),
      yV = xV(9335),
      pV = xV(1542),
      QV = xV(62),
      nV = xV(78),
      wV = xV(1321);

    function ZV() {
      var VV;
      return (0, pV.j)(YV.e, (0, YV.p)()), (0, wV.jsx)(wV.Fragment, {
        children: null === (VV = (0, YV.p)()) || void 0 === VV ? void 0 : VV.content
      })
    }

    function vV(VV) {
      var eV;
      let {
        show: xV
      } = VV;
      (0, pV.j)(YV.e, (0, YV.p)());
      const nV = null === (eV = (0, YV.p)()) || void 0 === eV ? void 0 : eV.menu;
      return (0, QV.useEffect)((() => {
        var VV;
        xV || (null === nV || void 0 === nV || null === (VV = nV.onClose) || void 0 === VV || VV.call(nV), (0, UV.q)())
      }), [xV, nV]), (0, QV.useEffect)((() => xV ? (0, yV.g)(UV.t, UV.g) : void 0), [xV]), (0, wV.jsx)(JV.c, {
        showing: xV,
        globallyUniqueKey: "clientGameMenu",
        children: null === nV || void 0 === nV ? void 0 : nV.content
      })
    }

    function rV(VV) {
      let {
        placement: eV = "bottom"
      } = VV;
      return (0, wV.jsx)("div", {
        id: `clientGameHud-${eV}`,
        style: {
          display: "contents"
        }
      })
    }

    function kV(VV) {
      let {
        children: eV,
        placement: xV = "bottom"
      } = VV;
      const [JV, YV] = (0, QV.useState)(null);
      return (0, QV.useEffect)((() => {
        YV(document.getElementById(`clientGameHud-${xV}`))
      }), [xV]), JV ? (0, nV.createPortal)(eV, JV) : null
    }
  },
  35300: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV
    });
    var JV = xV(5015),
      YV = xV(5020);

    function UV(VV) {
      let {
        children: eV,
        showing: xV,
        globallyUniqueKey: UV,
        alwaysMountChildren: yV = !1,
        doGameplayStartStopOnShow: pV = !0,
        keepsMovement: QV = !1
      } = VV;
      return (0, YV.b)(!0, xV, UV, QV), (0, JV.c)(pV, xV), xV || yV ? eV : null
    }
  },
  37852: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV,
      f: () => yV,
      h: () => pV,
      i: () => QV
    });
    var JV = xV(62),
      YV = xV(3528);
    const UV = 8,
      yV = "InGameHeaderContainer",
      pV = "TopRightElements";

    function QV(VV) {
      const [eV] = (0, YV.e)(), [xV, QV] = (0, JV.useState)(!1);
      return (0, JV.useLayoutEffect)((() => {
        if (!VV) return;
        const eV = document.querySelector(`.${yV}`),
          xV = document.querySelector(`.${pV}`),
          JV = () => {
            const JV = VV.getBoundingClientRect(),
              YV = eV ? eV.getBoundingClientRect().right : 0,
              yV = xV ? xV.getBoundingClientRect().left : window.innerWidth,
              pV = JV.left < YV + UV,
              nV = JV.right > yV - UV;
            QV(pV || nV)
          };
        JV();
        const YV = new ResizeObserver(JV);
        return YV.observe(VV), eV && YV.observe(eV), xV && YV.observe(xV), () => {
          YV.disconnect()
        }
      }), [VV, eV]), xV
    }
  },
  9335: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV,
      g: () => YV
    });
    let JV = null;
    const YV = function(VV) {
        const eV = {
          cycle: VV,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return JV = eV, () => {
          JV === eV && (JV = null)
        }
      },
      UV = () => {
        var VV;
        return null !== (VV = JV) && void 0 !== VV && VV.canCycle() ? JV.cycle : null
      }
  },
  39669: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => yV,
      f: () => pV,
      g: () => QV
    });
    const JV = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      YV = [0, 1, 2, 0, 2, 3],
      UV = [4, 5];

    function yV(VV, eV, xV, JV, YV) {
      for (let yV = 0; yV < 6; yV++) UV.includes(yV) === YV && nV(VV, eV, xV, JV, yV)
    }

    function pV(VV, eV, xV, JV) {
      for (let YV = 0; YV < 6; YV++) nV(VV, eV, xV, JV, YV)
    }

    function QV(VV, eV, xV, UV, yV) {
      for (let pV = 0; pV < 6; pV++)
        for (const QV of [0, 1]) {
          const [nV, wV, ZV] = [QV + 2, QV + 1, (QV + 3) % 4], vV = VV.length / 3;
          for (const [eV, YV] of [
              [QV, wV],
              [nV, wV],
              [nV, ZV],
              [QV, ZV]
            ])
            for (let QV = 0; QV < 3; QV++) {
              const nV = JV[3 * (4 * pV + eV) + QV],
                wV = JV[3 * (4 * pV + YV) + QV];
              VV.push((nV + (wV - nV) * yV) * UV / 2 + xV[QV])
            }
          for (const VV of YV) eV.push(vV + VV)
        }
    }

    function nV(VV, eV, xV, UV, yV) {
      let [pV, QV, nV] = xV, [wV, ZV, vV] = UV;
      const rV = VV.length / 3;
      for (let YV = 4 * yV; YV < 4 * yV + 4; YV++) VV.push(JV[3 * YV] * wV / 2 + pV, JV[3 * YV + 1] * ZV / 2 + QV, JV[3 * YV + 2] * vV / 2 + nV);
      for (const JV of YV) eV.push(rV + JV)
    }
  },
  40729: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => XJ
    });
    const JV = [0, 90, 180, 270],
      YV = "plotsblueprint";
    var UV = xV(62),
      yV = xV(37762),
      pV = xV(27),
      QV = xV(1542),
      nV = xV(2116),
      wV = xV(1220),
      ZV = xV(1146),
      vV = xV.n(ZV),
      rV = xV(1725),
      kV = xV(35097),
      bV = xV(37756),
      EV = xV(1414),
      BV = xV(2039),
      jV = xV(2109),
      qV = xV(3853),
      tV = xV(1838);

    function FV() {}
    const TV = (0, UV.createContext)({
      hint: null,
      journalRef: FV,
      placementCardRef: FV,
      buildRef: FV
    });
    var PV = xV(32);
    const AV = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      NV = {
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
      XV = ["small", "medium", "large"].flatMap((VV => AV.flat().filter((eV => NV[eV].tier === VV))));

    function MV(VV) {
      return NV[VV]
    }
    const zV = new Map(AV.flatMap((VV => VV.slice(1).map(((eV, xV) => [eV, VV[xV]])))));

    function GV(VV) {
      var eV;
      return null !== (eV = zV.get(VV)) && void 0 !== eV ? eV : null
    }
    const WV = {
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

    function RV(VV, eV) {
      const xV = new Set(VV),
        JV = function(VV) {
          const eV = new Set(VV);
          return new Set(XV.filter((VV => {
            const xV = GV(VV);
            return null === xV || eV.has(xV)
          })))
        }(xV);
      return XV.map((VV => {
        const YV = VV === eV;
        if (xV.has(VV)) return {
          id: VV,
          active: YV,
          note: null,
          state: "completed",
          unlockedBy: null
        };
        const UV = WV[VV],
          yV = void 0 === UV || UV.firstBuild && xV.size > 0 ? null : UV.key;
        return JV.has(VV) ? {
          id: VV,
          active: YV,
          note: yV,
          state: "open",
          unlockedBy: null
        } : {
          id: VV,
          active: YV,
          note: yV,
          state: "locked",
          unlockedBy: GV(VV)
        }
      }))
    }
    const gV = "plotsJournalChanged";
    class DV {
      constructor(VV, eV) {
        this.api = VV, this.placement = eV, this.pages = null, this.openRequested = null, this.openedOffered = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.EZ(this.openedOffered ? "journal_offered" : "journal_opened"), this.openedOffered = !1
        }, this.build = VV => {
          this.placement.start(VV), (0, yV.i)()
        }, this.putAway = () => {
          this.api.sendCommand(`${YV} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      RZ(VV) {
        let [, eV, xV] = VV;
        this.pages = RV(eV, xV), PV.h.QZ(gV, this.pages, !0)
      }
      openFromServer(VV) {
        let [, eV] = VV;
        this.openRequested = eV, this.iZ()
      }
      iZ() {
        const VV = this.openRequested;
        null === VV || pV.b.get("loadingOverlayVisible") || (this.openRequested = null, null === this.pages || (0, rV.n)() || (0, tV.isTypingInInput)() || null !== this.placement.getView() || (this.openedOffered = VV, (0, yV.r)()))
      }
      EZ(VV) {
        this.reported.has(VV) || (this.reported.add(VV), this.api.sendCommand(`${YV} report ${VV}`))
      }
    }
    var iV = xV(1321);
    const CV = "KeyJ";

    function aV(VV) {
      let {
        journal: eV
      } = VV;
      const xV = (0, QV.j)(gV, eV.getPages()),
        {
          isTouchScreen: JV
        } = (0, pV.l)(["isTouchScreen"]),
        {
          t: YV
        } = (0, wV.A)(),
        nV = (0, UV.useContext)(TV),
        ZV = null !== xV;
      return (0, UV.useEffect)((() => ZV ? (0, kV.b)(CV) : void 0), [ZV]), (0, qV.d)((VV => ZV && VV.code === CV && !VV.repeat && !(0, tV.isTypingInInput)()), (VV => {
        (0, rV.x)(VV, !0, yV.r)
      })), null === xV ? null : (0, iV.jsx)(bV.e, {
        placement: "topRight",
        children: (0, iV.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, iV.jsxs)("button", {
            ref: nV.journalRef,
            type: "button",
            className: vV()("PlotsJournalButton SmallTextBold", {
              Touch: JV
            }),
            onClick: yV.r,
            children: [(0, iV.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, iV.jsx)(BV.e, {
                itemName: "Book",
                amount: 0
              })
            }), YV("plotsGame:journalButton"), !JV && (0, iV.jsx)(jV.d, {
              className: "PlotsJournalButtonKey",
              keyCode: CV
            }), "openJournal" === nV.hint && (0, iV.jsx)(EV.b, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon HandLeftAnim PlotsJournalButtonHand"
            })]
          })
        })
      })
    }
    var oV = xV(9820);
    const cV = [0, 90, 180, 270],
      hV = /^(meta\|rot\d)\|([lrud]+)$/,
      lV = "nesw",
      LV = /^meta\|([nesw]*)\|?(Stacked)?$/,
      fV = function(VV) {
        const eV = new WeakMap;
        return (xV, JV) => {
          let YV = eV.get(xV);
          return void 0 === YV && (YV = VV(xV, JV), eV.set(xV, YV)), YV
        }
      }((VV => new mV(VV)));
    class mV {
      constructor(VV) {
        this.blockMetadata = VV, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const eV = new Set(Object.keys(VV).map((eV => VV[eV].id)));
        eV.add(0), this.maxBlockId = Math.max(...eV)
      }
      static
      for (VV) {
        return fV(VV)
      }
      getBlockIdMapping(VV, eV) {
        const xV = this.getBlockIdMappingKey(VV, eV);
        let JV = this.blockIdMappings.get(xV);
        return void 0 === JV && cV.includes(VV) && (JV = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, VV, eV), this.blockIdMappings.set(xV, JV)), JV
      }
      turnBlockId(VV, eV, xV) {
        return this.mapBlockId(this.blockMetadata[VV], eV, this.getRotationMapping(eV, xV), xV)
      }
      getBlockIdMappingKey(VV, eV) {
        return `r${VV}|m${Number(eV)}`
      }
      createBlockIdMapping(VV, eV, xV, JV) {
        const YV = new Uint16Array(eV + 1),
          UV = this.getRotationMapping(xV, JV);
        for (const yV in VV) {
          const eV = VV[yV];
          YV[eV.id] = this.mapBlockId(eV, xV, UV, JV)
        }
        return YV
      }
      getRotationMapping(VV, eV) {
        const xV = Math.round(VV / 90),
          JV = new Uint8Array(4);
        for (let YV = 0; YV < 4; YV++) JV[YV] = (4 + YV - xV) % 4;
        if (eV) {
          let VV = JV[0];
          JV[0] = JV[1], JV[1] = VV, VV = JV[2], JV[2] = JV[3], JV[3] = VV
        }
        return JV
      }
      mapBlockId(VV, eV, xV, JV) {
        var YV;
        const {
          blockMetadata: UV
        } = this, yV = Math.round(eV / 90), {
          id: pV,
          meta: QV
        } = VV, {
          rot: nV,
          rootName: wV,
          metaStr: ZV
        } = QV;
        let vV;
        const [, rV, kV] = null !== (YV = LV.exec(ZV)) && void 0 !== YV ? YV : [];
        if (void 0 !== rV) {
          var bV, EV;
          vV = null !== (bV = null === (EV = UV[`${wV}|meta|${[lV.split("").filter(((VV,eV)=>rV.split("").some((VV=>{const xV=lV.indexOf(VV);return((JV?3-xV:xV)+yV)%4===eV})))).join(""),kV].filter(Boolean).join("|")}`]) || void 0 === EV ? void 0 : EV.id) && void 0 !== bV ? bV : pV
        } else if (null === nV) vV = pV;
        else {
          var BV, jV;
          const VV = xV[nV - 1] + 1;
          let eV = ZV.replace(`rot${nV}`, `rot${VV}`);
          JV && QV.stairsCorner && (eV = eV.replace(/(Left|Right)$/, (VV => "Left" === VV ? "Right" : "Left"))), JV && "Chest" === wV && (eV = eV.replace(/\|(left|right)$/, ((VV, eV) => "left" === eV ? "|right" : "|left")));
          const YV = hV.exec(eV);
          if (JV && null !== YV) {
            const VV = "lrud".split("").filter((VV => YV[2].includes("l" === VV ? "r" : "r" === VV ? "l" : VV)));
            eV = `${YV[1]}|${VV.join("")}`
          }
          const yV = `${wV}|${eV}`;
          if (vV = null !== (BV = null === (jV = UV[yV]) || void 0 === jV ? void 0 : jV.id) && void 0 !== BV ? BV : null, null === vV) {
            const VV = UV[wV];
            vV = VV.rootMetaDesc === yV ? VV.id : pV
          }
        }
        return vV
      }
    }

    function KV(VV, eV, xV) {
      let {
        xRotationMappedOrigin: JV,
        shouldSwapXZ: YV
      } = xV;
      const UV = YV ? eV : VV;
      return null === JV ? UV : JV - UV
    }

    function HV(VV, eV, xV) {
      let {
        zRotationMappedOrigin: JV,
        shouldSwapXZ: YV
      } = xV;
      const UV = YV ? VV : eV;
      return null === JV ? UV : JV - UV
    }
    const uV = {
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
      sV = new Map;

    function SV(VV, eV) {
      const xV = `${VV}|${eV}`;
      let JV = sV.get(xV);
      if (void 0 === JV) {
        const {
          size: YV,
          palette: UV,
          layers: yV
        } = uV[VV], pV = 90 === eV || 270 === eV, [QV, nV] = pV ? [YV[2], YV[0]] : [YV[0], YV[2]], wV = function(VV, eV, xV) {
          let JV = null,
            YV = null,
            UV = !1;
          switch (VV) {
            case 0:
              break;
            case 90:
              JV = eV - 1, UV = !0;
              break;
            case 180:
              JV = eV - 1, YV = xV - 1;
              break;
            case 270:
              YV = xV - 1, UV = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${VV}`)
          }
          return {
            xRotationMappedOrigin: JV,
            zRotationMappedOrigin: YV,
            shouldSwapXZ: UV
          }
        }(eV, QV, nV), ZV = mV.for(oV.k), vV = UV.map((VV => (0, oV.g)(ZV.turnBlockId((0, oV.n)(VV), eV, !1)))), rV = [];
        yV.forEach(((VV, eV) => {
          VV.split(" ").forEach(((VV, xV) => {
            for (let JV = 0; JV < VV.length; JV++)
              if ("." !== VV[JV]) {
                const YV = [KV(JV, xV, wV), eV, HV(JV, xV, wV)];
                rV.push({
                  offset: YV,
                  block: vV[VV.charCodeAt(JV) - "a".charCodeAt(0)]
                })
              }
          }))
        })), JV = {
          size: [QV, YV[1], nV],
          cells: rV
        }, sV.set(xV, JV)
      }
      return JV
    }
    const IV = "plotsBuildProgressChanged",
      dV = new Map;

    function OV(VV, eV, xV) {
      let JV = 0,
        YV = 0;
      return function(VV) {
        let eV = dV.get(VV);
        if (void 0 === eV) {
          const JV = [];
          for (const {
              offset: eV
            }
            of SV(VV, 0).cells) {
            var xV;
            JV[eV[1]] = (null !== (xV = JV[eV[1]]) && void 0 !== xV ? xV : 0) + 1
          }
          eV = JV, dV.set(VV, eV)
        }
        return eV
      }(VV).forEach(((VV, xV) => {
        JV += VV, xV > eV && (YV += VV)
      })), {
        id: VV,
        filled: JV - YV - xV,
        total: JV
      }
    }
    class Ve {
      constructor() {
        this.shown = null, this.topOpen = 0, this.progress = null
      }
      get() {
        return this.progress
      }
      show(VV) {
        this.shown = VV, this.topOpen = 0, null === VV && this.QZ(null)
      }
      update(VV, eV, xV) {
        const JV = this.shown;
        null !== JV && (VV >= eV && (this.topOpen = xV), this.QZ(OV(JV.id, eV - JV.y, VV >= eV ? xV : this.topOpen + xV)))
      }
      QZ(VV) {
        const eV = this.progress;
        (null === VV || void 0 === VV ? void 0 : VV.id) === (null === eV || void 0 === eV ? void 0 : eV.id) && (null === VV || void 0 === VV ? void 0 : VV.filled) === (null === eV || void 0 === eV ? void 0 : eV.filled) && (null === VV || void 0 === VV ? void 0 : VV.total) === (null === eV || void 0 === eV ? void 0 : eV.total) || (this.progress = VV, PV.h.QZ(IV, VV, !0))
      }
    }
    const ee = "plotsPlotChanged",
      xe = "plotsGuideChanged",
      Je = "plotsGuideDone";
    class Ye {
      constructor() {
        this.plot = ["none"], this.guide = ["none"]
      }
      getPlot() {
        return this.plot
      }
      receivePlot(VV) {
        this.plot = VV, PV.h.QZ(ee, VV, !0)
      }
      getGuide() {
        return this.guide
      }
      receiveGuide(VV) {
        this.guide = VV, PV.h.QZ(xe, VV, !0)
      }
      receiveGuideDone() {
        PV.h.QZ(Je, void 0, !0)
      }
    }
    var Ue = xV(1309),
      ye = xV(39705),
      pe = xV(38067),
      Qe = xV(1578);

    function ne(VV) {
      let {
        onSkip: eV,
        className: xV
      } = VV;
      const {
        t: JV
      } = (0, wV.A)();
      return (0, iV.jsx)("button", {
        type: "button",
        className: vV()("PlotsGuideSkipButton", xV),
        ...(0, Qe.e)(eV, "pointerup"),
        children: JV("tutorial:skip")
      })
    }

    function we(VV) {
      let {
        target: eV,
        placement: xV,
        spotlight: JV = null,
        children: YV
      } = VV;
      const {
        t: yV
      } = (0, wV.A)(), pV = (0, UV.useRef)(eV);
      return pV.current = eV, (0, Ue.s)("popup", pV, null === JV ? null : JV.onSkip, null !== JV, null, "controller:menusSkipTutorial"), (0, iV.jsxs)(pe.h, {
        target: eV,
        placement: xV,
        className: vV()("PlotsGuideBubble", {
          Passive: null === JV
        }),
        spotlight: null !== JV,
        spotlightMargin: 30,
        children: [(0, iV.jsxs)("div", {
          className: "PlotsGuideBubbleHeader",
          children: [(0, iV.jsx)("img", {
            className: "PlotsGuideBubblePortrait",
            src: ye,
            alt: "",
            draggable: !1
          }), (0, iV.jsx)("span", {
            className: "PlotsGuideBubbleSpeaker",
            children: yV("plotsGame:maverickName")
          }), null !== JV && (0, iV.jsx)(ne, {
            onSkip: JV.onSkip
          })]
        }), (0, iV.jsx)("p", {
          className: "PlotsGuideBubbleText",
          children: YV
        })]
      })
    }

    function Ze(VV) {
      let {
        className: eV,
        icon: xV,
        title: JV,
        children: YV
      } = VV;
      return (0, iV.jsxs)("div", {
        className: vV()("PlotsCard", eV),
        role: "status",
        children: [(0, iV.jsx)("span", {
          className: "PlotsCardIcon",
          children: (0, iV.jsx)(EV.b, {
            name: xV
          })
        }), (0, iV.jsxs)("div", {
          className: "PlotsCardBody",
          children: [(0, iV.jsx)("div", {
            className: "PlotsCardTitle SmallTextBold",
            children: JV
          }), YV]
        })]
      })
    }

    function ve(VV) {
      let {
        progress: eV,
        goal: xV
      } = VV;
      const JV = Math.min(eV, xV);
      return (0, iV.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, iV.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": xV,
          "aria-valuenow": JV,
          children: (0, iV.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${JV/xV})`
            }
          })
        }), (0, iV.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [JV, "/", xV]
        })]
      })
    }

    function re(VV) {
      let {
        progress: eV,
        guide: xV
      } = VV;
      const {
        t: JV
      } = (0, wV.A)(), {
        isTouchScreen: YV
      } = (0, pV.l)(["isTouchScreen"]), UV = eV.filled < 5;
      return (0, iV.jsxs)(iV.Fragment, {
        children: [(UV || eV.total - eV.filled <= 5) && (0, iV.jsx)("div", {
          className: "PlotsGuideHandLayer",
          children: (0, iV.jsx)("div", {
            ref: xV.bindHand,
            className: "PlotsGuideHand",
            children: (0, iV.jsx)(EV.b, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon"
            })
          })
        }), (0, iV.jsx)(bV.e, {
          placement: "bottom",
          children: (0, iV.jsxs)(Ze, {
            icon: "hammer",
            title: JV(MV(eV.id).displayName.translationKey),
            children: [UV && (0, iV.jsx)("div", {
              className: "PlotsCardHint SmallTextLight",
              children: YV ? JV("plotsGame:guideBuildTouch") : ke(JV)
            }), (0, iV.jsx)(ve, {
              progress: eV.filled,
              goal: eV.total
            })]
          })
        })]
      })
    }

    function ke(VV) {
      const eV = nV.t["alt-fire"][0];
      return "Mouse3" === eV ? VV("plotsGame:guideBuildRightClick") : VV("plotsGame:guideBuildKeys", {
        key: (0, nV.l)(eV)
      })
    }

    function be() {
      return (0, iV.jsx)("div", {
        className: "PlotsGuideDragHand",
        children: (0, iV.jsx)(EV.b, {
          name: "hand-back-point-up",
          className: "SmallTextBold TouchTutorialIcon"
        })
      })
    }
    var Ee = xV(1332),
      Be = xV(2880),
      je = xV(39562),
      qe = xV(39313),
      te = xV(38112),
      Fe = xV(9848),
      Te = xV(9865),
      Pe = xV(375),
      Ae = xV(38966);
    const Ne = new Map([
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
      Xe = [...te.b.blockRemoveActionRoots, ...qe.c, ...Fe.h, "Board", "Code Block", "Custom Lobby Block"],
      Me = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let ze = null;

    function Ge() {
      return ze ??= function() {
        const VV = We(),
          eV = Math.max(...VV.map((VV => oV.k[VV].id))) + 1,
          xV = new Int32Array(eV),
          JV = new Int32Array(eV),
          YV = new Uint8Array(eV).fill(1),
          UV = new Uint8Array(eV),
          yV = new Uint8Array(eV),
          pV = new Array(eV).fill("Air"),
          QV = new Map,
          nV = VV => {
            let eV = QV.get(VV);
            return void 0 === eV && (eV = QV.size + 1, QV.set(VV, eV)), eV
          },
          wV = new Set(Xe);
        for (const vV of VV) {
          var ZV;
          const {
            id: VV,
            meta: eV,
            altActionable: QV,
            canBePlacedOver: rV
          } = oV.k[vV];
          xV[VV] = nV(Re(vV));
          const kV = eV.stairsCorner;
          if (null === kV) JV[VV] = xV[VV];
          else {
            const xV = kV.endsWith("Right");
            JV[VV] = nV(`${eV.rootName}|rot${xV?eV.rot%4+1:eV.rot}|${eV.halfblockPlacement}|${kV.replace("Right","Left")}`)
          }
          YV[VV] = rV ? 1 : 0, UV[VV] = QV || null !== eV.open || vV in Ae.b || wV.has(eV.rootName) || void 0 !== (0, qe.d)(eV.rootName) ? 1 : 0;
          const {
            rootName: bV
          } = eV;
          yV[VV] = null !== eV.open || qe.c.includes(bV) || bV.includes("Bookshelf") || bV.includes("Mailbox") ? 1 : 0, pV[VV] = null !== (ZV = (0, je.f)(VV)) && void 0 !== ZV ? ZV : bV
        }
        return {
          kinds: xV,
          shapes: JV,
          empty: YV,
          inUse: UV,
          ownAltActionMessage: yV,
          placingItems: pV
        }
      }(), ze
    }

    function We() {
      return Object.keys(oV.k).filter((VV => oV.k[VV].name === VV))
    }

    function Re(VV) {
      var eV;
      const xV = oV.k[VV],
        {
          rootName: JV,
          rot: YV
        } = xV.meta,
        [, ...UV] = (null !== (eV = xV.rootMetaDesc) && void 0 !== eV ? eV : VV).split("|"),
        yV = UV.filter((VV => !("meta" === VV || Me.test(VV) || (0, Te.E)(xV) && /^[nesw]+$/.test(VV) || Fe.h.includes(JV) && /^[lrud]+$/.test(VV) || Pe.B.includes(JV) && /^(left|right)$/.test(VV))));
      return [JV, ...yV].map((VV => "fenceGate" === xV.model && VV === `rot${YV}` ? "rot" + ((YV - 1) % 2 + 1) : VV)).join("|")
    }

    function ge(VV, eV) {
      const {
        kinds: xV,
        shapes: JV
      } = Ge();
      return xV[VV] === xV[eV] || JV[VV] === JV[eV]
    }

    function De(VV) {
      return 1 === Ge().empty[VV]
    }

    function ie(VV) {
      return Ge().placingItems[VV]
    }

    function Ce(VV) {
      return Ne.get(oV.k[VV].meta.rootName)
    }
    var ae = xV(9845),
      oe = xV(9861);
    const ce = [0, 0, 0, 1, 1, 1],
      he = (0, ae.c)([
        [2, 0, 2, 6, 6, 6]
      ]),
      le = (0, ae.c)([
        [3, 0, 3, 5, 5, 5]
      ]),
      Le = (0, ae.c)([
        [3, 3, 3, 5, 8, 5]
      ]),
      fe = [0, 1, 2, 3].map((VV => (0, ae.c)((0, ae.n)([
        [3, 2, 0, 5, 7, 3]
      ], VV))));

    function me(VV) {
      const {
        PE: eV,
        model: xV,
        blockModel: JV,
        meta: YV
      } = oV.k[VV];
      return void 0 !== eV ? eV : "CentreCross" === xV ? he : null !== JV && void 0 !== JV && JV.startsWith("torch") ? YV.halfblockPlacement === oe.e.side ? fe[YV.rot - 1] : YV.halfblockPlacement === oe.e.top ? Le : le : ce
    }
    var Ke = xV(206);
    class He {
      constructor(VV) {
        this.api = VV, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(VV) {
        const eV = Ke.f.PZ;
        this.chunks = [];
        for (let xV = 0; xV < VV.length; xV += 3) {
          const JV = Math.floor(VV[xV] / eV),
            YV = Math.floor(VV[xV + 1] / eV),
            UV = Math.floor(VV[xV + 2] / eV);
          this.watches(JV, YV, UV) || this.chunks.push(JV, YV, UV)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const VV = performance.now();
        if (VV - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = VV;
        let eV = !1;
        for (let xV = 0; xV < this.chunks.length; xV += 3) {
          const VV = this.api.getChunkVersion(this.chunks[xV], this.chunks[xV + 1], this.chunks[xV + 2]);
          this.versions[xV / 3] !== VV && (this.versions[xV / 3] = VV, eV = !0)
        }
        return eV
      }
      watches(VV, eV, xV) {
        for (let JV = 0; JV < this.chunks.length; JV += 3)
          if (this.chunks[JV] === VV && this.chunks[JV + 1] === eV && this.chunks[JV + 2] === xV) return !0;
        return !1
      }
    }
    var ue = xV(39669);
    const se = .35,
      Se = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      Ie = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      de = [.95, .2, .15];
    class Oe {
      constructor() {
        this.groups = []
      }
      add(VV, eV, xV, JV, YV) {
        let UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : ce;
        for (const yV of this.groups)
          if (xx(yV, JV, YV)) return yV.cells.push(VV, eV, xV), void yV.boxes.push(UV);
        this.groups.push({
          rgb: JV,
          look: YV,
          cells: [VV, eV, xV],
          boxes: [UV]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class Vx {
      constructor(VV) {
        this.api = VV, this.shown = []
      }
      show(VV) {
        const eV = [];
        for (const xV of VV) {
          const VV = this.shown.findIndex((VV => {
            let {
              group: eV
            } = VV;
            return xx(eV, xV.rgb, xV.look) && Jx(eV, xV)
          })); - 1 === VV ? eV.push(this.build(xV)) : (eV.push(this.shown[VV]), this.shown.splice(VV, 1))
        }
        this.dispose(), this.shown = eV
      }
      dispose() {
        for (const {
            meshes: VV
          }
          of this.shown)
          for (const eV of VV) this.api.disposeGameMesh(eV);
        this.shown = []
      }
      build(VV) {
        const {
          rgb: eV,
          look: xV,
          boxes: JV
        } = VV, YV = [eV[0] + (1 - eV[0]) * se, eV[1] + (1 - eV[1]) * se, eV[2] + (1 - eV[2]) * se], UV = [this.buildMesh(VV.cells, eV, xV.alpha, ((VV, eV, YV, UV) => {
          ex(VV, eV, YV, JV[UV], xV.size, !1)
        })), this.buildMesh(VV.cells, YV, xV.alpha, ((VV, eV, YV, UV) => {
          ex(VV, eV, YV, JV[UV], xV.size, !0)
        }))];
        return xV.crossed && UV.push(this.buildMesh(VV.cells, eV, .9, ((VV, eV, JV) => {
          (0, ue.g)(VV, eV, JV, xV.size + .01, .12)
        }))), {
          group: VV,
          meshes: UV
        }
      }
      buildMesh(VV, eV, xV, JV) {
        const YV = [VV[0], VV[1], VV[2]],
          UV = [],
          yV = [];
        for (let pV = 0; pV < VV.length; pV += 3) JV(UV, yV, [VV[pV] - YV[0] + .5, VV[pV + 1] - YV[1] + .5, VV[pV + 2] - YV[2] + .5], pV / 3);
        return this.api.createGameMesh({
          positions: UV,
          indices: yV
        }, {
          rgb: [eV[0], eV[1], eV[2]],
          alpha: xV
        }, YV)
      }
    }

    function ex(VV, eV, xV, JV, YV, UV) {
      for (let yV = 0; yV < JV.length; yV += 6) {
        const pV = [0, 0, 0],
          QV = [0, 0, 0];
        for (let VV = 0; VV < 3; VV++) pV[VV] = xV[VV] + ((JV[yV + VV] + JV[yV + VV + 3]) / 2 - .5) * YV, QV[VV] = (JV[yV + VV + 3] - JV[yV + VV]) * YV;
        (0, ue.d)(VV, eV, pV, QV, UV)
      }
    }

    function xx(VV, eV, xV) {
      return VV.rgb[0] === eV[0] && VV.rgb[1] === eV[1] && VV.rgb[2] === eV[2] && VV.look === xV
    }

    function Jx(VV, eV) {
      if (VV.cells.length !== eV.cells.length) return !1;
      for (let xV = 0; xV < VV.cells.length; xV++)
        if (VV.cells[xV] !== eV.cells[xV]) return !1;
      return VV.boxes.every(((VV, xV) => VV === eV.boxes[xV]))
    }

    function Yx(VV, eV, xV, JV, YV) {
      if (!VV.isBlockInLoadedChunk(eV, JV - 6, xV) || !VV.isBlockInLoadedChunk(eV, JV + 6 + YV, xV) || !VV.canModifyBlockAt(eV, JV, xV)) return NaN;
      let UV = JV - 1;
      if (0 !== VV.getBlockId(eV, UV, xV)) {
        for (; UV < JV + 6 && 0 !== VV.getBlockId(eV, UV + 1, xV);) UV++;
        return UV
      }
      for (; UV > JV - 6;)
        if (UV--, 0 !== VV.getBlockId(eV, UV, xV)) return UV;
      return NaN
    }

    function Ux(VV, eV, xV, JV, YV) {
      let UV = 0;
      for (let yV = JV + 1; yV <= JV + YV; yV++) 0 !== VV.getBlockId(eV, yV, xV) && UV++;
      return UV
    }

    function yx(VV) {
      const eV = new Map;
      for (const yV of VV) {
        var xV;
        if (Number.isNaN(yV)) return null;
        eV.set(yV, (null !== (xV = eV.get(yV)) && void 0 !== xV ? xV : 0) + 1)
      }
      let JV = NaN,
        YV = 0;
      for (const [yV, pV] of eV)(pV > YV || pV === YV && yV < JV) && (JV = yV, YV = pV);
      let UV = 0;
      for (const yV of VV) UV += Math.abs(yV - JV);
      return UV
    }

    function px(VV, eV, xV, JV) {
      const {
        eye: YV,
        forward: UV,
        tanHalfFovX: yV,
        tanHalfFovY: pV
      } = VV, [QV, nV] = function(VV) {
        let [eV, xV, JV] = VV;
        const YV = Math.hypot(eV, JV),
          [UV, yV] = [JV / YV, -eV / YV];
        return [
          [UV, 0, yV],
          [xV * yV, JV * UV - eV * yV, -xV * UV]
        ]
      }(UV), [wV, ZV] = [eV * yV, xV * pV], vV = UV[0] + wV * QV[0] + ZV * nV[0], rV = UV[1] + ZV * nV[1], kV = UV[2] + wV * QV[2] + ZV * nV[2], bV = (JV - YV[1]) / rV;
      return bV > 0 && bV < 1 / 0 ? [YV[0] + bV * vV, YV[2] + bV * kV] : null
    }
    const Qx = "plotsBlueprintPlacementChanged",
      nx = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class wx {
      constructor(VV, eV) {
        this.api = VV, this.localPlayerId = eV, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = VV => {
          var eV, xV, JV, UV;
          const yV = null !== (eV = null === (xV = this.placing) || void 0 === xV ? void 0 : xV.rotation) && void 0 !== eV ? eV : 0,
            {
              size: pV
            } = SV(VV, yV),
            QV = this.api.YF(this.localPlayerId),
            [nV, wV] = null !== (JV = null !== (UV = function(VV, eV, xV, JV) {
              const [YV, UV, yV] = eV, [pV, QV, nV] = [Math.floor(xV[0]), Math.floor(xV[1]), Math.floor(xV[2])], wV = 6 + Math.max(YV, yV) / 2, [ZV, vV] = [Math.ceil(wV + YV / 2), Math.ceil(wV + yV / 2)], [rV, kV] = [pV - ZV, nV - vV], [bV, EV] = [2 * ZV + 1, 2 * vV + 1], BV = new Float64Array(bV * EV), jV = new Uint16Array(bV * EV);
              for (let PV = 0; PV < bV; PV++)
                for (let eV = 0; eV < EV; eV++) {
                  const xV = Yx(VV, rV + PV, kV + eV, QV, UV);
                  BV[PV * EV + eV] = xV, Number.isNaN(xV) || (jV[PV * EV + eV] = Ux(VV, rV + PV, kV + eV, xV, UV))
                }
              const qV = Math.hypot(JV[0], JV[2]),
                tV = [];
              let FV = null,
                TV = 1 / 0;
              for (let PV = 0; PV + YV <= bV; PV++)
                for (let VV = 0; VV + yV <= EV; VV++) {
                  const [eV, UV] = [rV + PV, kV + VV], [QV, ZV] = [eV + YV / 2 - xV[0], UV + yV / 2 - xV[2]], vV = Math.hypot(QV, ZV);
                  if (vV > wV || pV >= eV - 2 && pV < eV + YV + 2 && nV >= UV - 2 && nV < UV + yV + 2) continue;
                  tV.length = 0;
                  let bV = 0;
                  for (let xV = 0; xV < YV; xV++)
                    for (let eV = 0; eV < yV; eV++) tV.push(BV[(PV + xV) * EV + VV + eV]), bV += jV[(PV + xV) * EV + VV + eV];
                  const AV = yx(tV);
                  if (null === AV) continue;
                  const NV = vV + 3 * (AV + bV) + (1 - (0 === qV ? 1 : (QV * JV[0] + ZV * JV[2]) / (vV * qV))) / 2 * 6;
                  NV < TV && (TV = NV, FV = [eV, UV])
                }
              return FV
            }(this.api, pV, QV, this.camera.forward)) && void 0 !== UV ? UV : this.cornerOnTarget(pV)) && void 0 !== JV ? JV : [Math.floor(QV[0]) + 2, Math.floor(QV[2])];
          this.placing = {
            id: VV,
            rotation: yV,
            corner: [nV, this.playerLevel(), wV],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null,
            moved: !1,
            stillSinceMs: performance.now()
          }, this.update(), this.api.sendCommand(`${YV} preview`)
        }, this.rotate = () => {
          const {
            id: VV,
            rotation: eV,
            corner: xV
          } = this.placing, YV = JV[(JV.indexOf(eV) + 1) % JV.length], [UV, , yV] = SV(VV, eV).size, [pV, , QV] = SV(VV, YV).size;
          this.moveTo(xV[0] + Math.floor(UV / 2) - Math.floor(pV / 2), xV[2] + Math.floor(yV / 2) - Math.floor(QV / 2), YV)
        }, this.hoverAt = (VV, eV) => {
          this.placing.hover = [VV, eV], this.moveCentreTo(this.camera, VV, eV)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (VV, eV) => {
          const xV = this.placing,
            {
              eye: JV,
              forward: YV,
              tanHalfFovX: UV,
              tanHalfFovY: yV
            } = this.camera,
            pV = {
              eye: [JV[0], JV[1], JV[2]],
              forward: [YV[0], YV[1], YV[2]],
              tanHalfFovX: UV,
              tanHalfFovY: yV
            },
            QV = xV.corner[1],
            nV = px(pV, VV, eV, QV);
          xV.hover = null, xV.drag = nV && {
            view: pV,
            ground: nV,
            corner: [xV.corner[0], xV.corner[2]],
            level: QV
          }
        }, this.dragTo = (VV, eV) => {
          const xV = this.placing.drag,
            JV = xV && px(xV.view, VV, eV, xV.level);
          null !== xV && null !== JV && this.moveTo(xV.corner[0] + Math.round(JV[0] - xV.ground[0]), xV.corner[1] + Math.round(JV[1] - xV.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const VV = this.view;
          VV.waiting || (VV.blocked ? this.QZ({
            ...VV,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const VV = this.placing,
            {
              id: eV,
              rotation: xV,
              corner: JV
            } = VV;
          this.api.sendCommand(`${YV} place ${eV} ${JV.join(" ")} ${xV}`), VV.sent = {
            atMs: performance.now(),
            corner: [...JV],
            rotation: xV,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${YV} preview off`))
        }, this.chunkWatch = new He(VV), this.meshes = new Vx(VV)
      }
      getView() {
        return this.view
      }
      iZ() {
        const VV = this.placing;
        null !== VV && (null !== VV.sent && !VV.sent.timedOut && performance.now() - VV.sent.atMs > 3e3 ? (VV.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(VV) || this.chunkWatch.changed() || this.view.settled !== Zx(VV, this.view.blocked)) && this.update())
      }
      afterRender(VV) {
        ! function(VV, eV) {
          for (let xV = 0; xV < 3; xV++) eV.eye[xV] = VV.cameraPosition[xV], eV.forward[xV] = VV.cameraDirection[xV];
          eV.tanHalfFovX = VV.tanHalfFovX, eV.tanHalfFovY = VV.tanHalfFovY
        }(VV, this.camera);
        const eV = this.placing;
        null !== eV && null !== eV.hover && this.moveCentreTo(this.camera, eV.hover[0], eV.hover[1])
      }
      RZ(VV) {
        const eV = this.placing;
        if (null === eV || null === eV.sent || "active" !== VV[0]) return;
        const {
          sent: xV
        } = eV, [, JV, YV, UV, yV, pV, QV] = VV;
        YV && JV === eV.id && QV === xV.rotation && UV === xV.corner[0] && yV === xV.corner[1] && pV === xV.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(VV) {
        let [eV, , xV] = VV;
        const JV = this.api.getTargetedBlock();
        if (null === JV) return null;
        const [YV, , UV] = JV.position;
        return [YV - Math.floor(eV / 2), UV - Math.floor(xV / 2)]
      }
      playerLevel() {
        var VV;
        const [eV, xV, JV] = this.api.YF(this.localPlayerId);
        if (null !== (VV = this.api.getLocalPlayerMovement()) && void 0 !== VV && VV.onGround) return Math.ceil(xV - .01);
        const [YV, UV, yV] = [Math.floor(eV), Math.floor(xV), Math.floor(JV)];
        for (let pV = UV; pV >= UV - 2; pV--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(YV, pV, yV))) return pV + 1;
        return UV
      }
      followPlayerLevel(VV) {
        if (vx(VV)) return !1;
        const eV = this.playerLevel();
        return eV !== VV.corner[1] && (VV.corner[1] = eV, !0)
      }
      moveCentreTo(VV, eV, xV) {
        const JV = this.placing,
          YV = px(VV, eV, xV, JV.corner[1]);
        if (null !== YV) {
          const [VV, , eV] = SV(JV.id, JV.rotation).size;
          this.moveTo(Math.round(YV[0] - VV / 2), Math.round(YV[1] - eV / 2))
        }
      }
      moveTo(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const JV = this.placing;
        if (vx(JV)) return;
        const [YV, UV, yV] = JV.corner;
        if (this.centreOnPlot(YV, yV) && !this.centreOnPlot(VV, eV, xV))
          if (this.centreOnPlot(VV, yV, xV)) eV = yV;
          else {
            if (!this.centreOnPlot(YV, eV, xV)) return;
            VV = YV
          } VV === YV && eV === yV && xV === JV.rotation || (JV.rotation = xV, JV.corner = [VV, UV, eV], JV.moved = !0, JV.stillSinceMs = performance.now(), this.update())
      }
      centreOnPlot(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: JV,
          corner: YV
        } = this.placing, [UV, , yV] = SV(JV, xV).size;
        return this.api.canModifyBlockAt(VV + Math.floor(UV / 2), YV[1], eV + Math.floor(yV / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.QZ(null)
      }
      update() {
        const {
          id: VV,
          rotation: eV,
          corner: xV,
          refusals: JV
        } = this.placing, YV = new Oe, UV = [];
        let yV = !1,
          pV = 0;
        for (const {
            offset: ZV,
            block: vV
          }
          of SV(VV, eV).cells) {
          const [VV, eV, JV] = [xV[0] + ZV[0], xV[1] + ZV[1], xV[2] + ZV[2]];
          UV.push(VV, eV, JV);
          const QV = !this.api.canModifyBlockAt(VV, eV, JV),
            nV = this.api.getBlockId(VV, eV, JV),
            wV = !De(nV) && !ge(this.api.blockNameToBlockId(vV), nV);
          yV ||= QV, pV += wV ? 1 : 0, QV || wV ? YV.add(VV, eV, JV, de, Ie) : YV.add(VV, eV, JV, Ce(vV), nx, me(vV))
        }
        this.chunkWatch.watch(UV), this.meshes.show(YV.toArray());
        const QV = this.view,
          nV = vx(this.placing),
          wV = Zx(this.placing, yV);
        (null === QV || void 0 === QV ? void 0 : QV.id) === VV && QV.blocked === yV && QV.toClear === pV && QV.waiting === nV && QV.refusals === JV && QV.settled === wV || this.QZ({
          id: VV,
          blocked: yV,
          toClear: pV,
          waiting: nV,
          refusals: JV,
          settled: wV
        })
      }
      QZ(VV) {
        this.view = VV, PV.h.QZ(Qx, VV, !0)
      }
    }

    function Zx(VV, eV) {
      let {
        moved: xV,
        stillSinceMs: JV
      } = VV;
      return !eV && performance.now() - JV >= (xV ? 1500 : 6e3)
    }

    function vx(VV) {
      let {
        sent: eV
      } = VV;
      return null !== eV && !eV.timedOut
    }
    var rx = xV(5020);
    class kx {
      constructor(VV) {
        this.placement = VV, this.press = null
      }
      down(VV) {
        if (null !== this.press) return !1;
        const {
          id: eV,
          mouse: xV,
          x: JV,
          y: YV,
          atMs: UV
        } = VV;
        return this.press = {
          id: eV,
          mouse: xV,
          x: JV,
          y: YV,
          atMs: UV,
          moved: !1
        }, xV || this.placement.beginDrag(VV.ndcX, VV.ndcY), !0
      }
      move(VV) {
        const eV = this.press;
        null !== eV && eV.id === VV.id && (eV.moved ||= Math.hypot(VV.x - eV.x, VV.y - eV.y) > 8), VV.mouse ? this.placement.hoverAt(VV.ndcX, VV.ndcY) : (null === eV || void 0 === eV ? void 0 : eV.id) === VV.id && this.placement.dragTo(VV.ndcX, VV.ndcY)
      }
      up(VV) {
        const eV = this.press;
        (null === eV || void 0 === eV ? void 0 : eV.id) === VV.id && (this.move(VV), this.end(), !eV.moved && (eV.mouse || VV.atMs - eV.atMs <= 250) && this.placement.tap())
      }
      cancel(VV) {
        var eV;
        (null === (eV = this.press) || void 0 === eV ? void 0 : eV.id) === VV && this.end()
      }
      leave(VV) {
        let {
          id: eV,
          mouse: xV
        } = VV;
        xV && this.placement.endHover(), this.cancel(eV)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }
    const bx = "PlotsPlacementLayer";

    function Ex(VV) {
      let {
        placement: eV
      } = VV;
      return null === (0, QV.j)(Qx, eV.getView()) ? null : (0, iV.jsx)(Bx, {
        placement: eV
      })
    }

    function Bx(VV) {
      let {
        placement: eV
      } = VV;
      (0, rx.b)(!0, !0, bx);
      const xV = (0, UV.useMemo)((() => new kx(eV)), [eV]);
      return (0, iV.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: VV => {
          "mouse" === VV.pointerType && 0 !== VV.button || !xV.down(jx(VV)) || VV.currentTarget.setPointerCapture(VV.pointerId)
        },
        onPointerMove: VV => {
          xV.move(jx(VV))
        },
        onPointerUp: VV => {
          xV.up(jx(VV))
        },
        onPointerCancel: VV => {
          xV.cancel(VV.pointerId)
        },
        onLostPointerCapture: VV => {
          xV.cancel(VV.pointerId)
        },
        onPointerLeave: VV => {
          xV.leave(jx(VV))
        },
        "aria-hidden": !0
      })
    }

    function jx(VV) {
      const {
        left: eV,
        top: xV,
        width: JV,
        height: YV
      } = VV.currentTarget.getBoundingClientRect();
      return {
        id: VV.pointerId,
        mouse: "mouse" === VV.pointerType,
        x: VV.clientX,
        y: VV.clientY,
        ndcX: (VV.clientX - eV) / JV * 2 - 1,
        ndcY: 1 - (VV.clientY - xV) / YV * 2,
        atMs: VV.timeStamp
      }
    }

    function qx() {
      return (0, Ee.k)().some((VV => VV !== Ee.d && VV !== bx))
    }
    const tx = 2500;

    function Fx(VV) {
      let {
        hud: eV,
        guide: xV,
        tracker: JV,
        placement: YV,
        children: yV
      } = VV;
      const {
        t: ZV
      } = (0, wV.A)(), {
        isTouchScreen: vV
      } = (0, pV.l)(["isTouchScreen"]), rV = (0, QV.j)(xe, eV.getGuide()), kV = (0, QV.j)(ee, eV.getPlot()), bV = (0, QV.j)(IV, JV.get()), EV = function(VV) {
        const {
          openInGameMenuName: eV,
          openEverythingMenuName: xV,
          loadingOverlayVisible: JV
        } = (0, pV.l)(["openInGameMenuName", "openEverythingMenuName", "loadingOverlayVisible"]), YV = (0, Be.b)(), [yV, nV] = (0, UV.useState)(qx);
        (0, UV.useEffect)((() => {
          const VV = () => {
            nV(qx())
          };
          VV();
          const eV = (0, Ee.i)(VV),
            xV = (0, Ee.h)(VV);
          return () => {
            eV(), xV()
          }
        }), []);
        const wV = (0, QV.j)(Qx, VV.getView()),
          ZV = "clientGame" === eV;
        return {
          hudHidden: YV || JV,
          journalOpen: ZV,
          covered: yV || null !== xV || null !== eV && !ZV,
          placing: null === wV ? null : wV.settled ? "placeBuild" : "placeSpot"
        }
      }(YV), BV = function(VV, eV, xV) {
        return "none" === VV[0] || xV.hudHidden || xV.journalOpen || xV.covered ? null : null !== xV.placing ? xV.placing : null !== eV ? "build" : "choose" === VV[1] ? "openJournal" : null
      }(rV, null === bV ? null : bV.id, EV), jV = function() {
        const [VV, eV] = (0, UV.useState)(null), [xV, JV] = (0, UV.useState)(!1);
        return (0, QV.g)(Je, (() => {
          eV(performance.now())
        })), (0, UV.useEffect)((() => {
          if (null === VV) return;
          const eV = window.setTimeout((() => {
              JV(!0)
            }), tx),
            xV = window.setTimeout((() => {
              JV(!1)
            }), 7500);
          return () => {
            window.clearTimeout(eV), window.clearTimeout(xV)
          }
        }), [VV]), xV
      }() && !EV.hudHidden && !EV.covered && !EV.journalOpen && null === EV.placing, [qV, tV] = (0, UV.useState)(!1);
      (0, UV.useEffect)((() => {
        EV.journalOpen && tV(!0)
      }), [EV.journalOpen]);
      const [FV, PV] = (0, UV.useState)(null), [AV, NV] = (0, UV.useState)(null), [XV, MV] = (0, UV.useState)(null), zV = (0, UV.useMemo)((() => ({
        hint: BV,
        journalRef: PV,
        placementCardRef: NV,
        buildRef: MV
      })), [BV]), GV = "plot" === kV[0] && "own" === kV[5], WV = vV && !qV && GV ? {
        onSkip: xV.skip
      } : null;
      return (0, iV.jsxs)(TV.Provider, {
        value: zV,
        children: [yV, "openJournal" === BV && null !== FV && (0, iV.jsx)(we, {
          target: FV,
          placement: "left",
          spotlight: WV,
          children: vV ? ZV("plotsGame:guideOpenJournal") : ZV("plotsGame:guideOpenJournalKeys", {
            key: (0, nV.l)(CV)
          })
        }), "placeSpot" === BV && null !== AV && (0, iV.jsxs)(iV.Fragment, {
          children: [vV && (0, iV.jsx)(be, {}), (0, iV.jsx)(we, {
            target: AV,
            placement: "top",
            children: ZV(vV ? "plotsGame:guidePlaceSpotTouch" : "plotsGame:guidePlaceSpotMouse")
          })]
        }), "placeBuild" === BV && null !== XV && null !== AV && (0, iV.jsx)(we, {
          target: vV ? XV : AV,
          placement: "top",
          children: ZV(vV ? "plotsGame:guidePlaceBuildTouch" : "plotsGame:guidePlaceBuildMouse")
        }), "build" === BV && null !== bV && (0, iV.jsx)(re, {
          progress: bV,
          guide: xV
        }), jV && null !== FV && (0, iV.jsx)(we, {
          target: FV,
          placement: "left",
          children: ZV("plotsGame:guideMoreBuilds")
        })]
      })
    }
    var Tx = xV(39648),
      Px = xV(39651);
    class Ax {
      constructor(VV, eV, xV) {
        this.api = VV, this.localPlayerId = eV, this.nextCell = xV, this.hand = null, this.skip = () => {
          this.api.sendCommand("plotsguide skip")
        }, this.bindHand = VV => {
          this.hand = VV
        }
      }
      afterRender(VV) {
        const eV = this.hand;
        if (null === eV) return;
        const xV = this.nextCell.get();
        if (null === xV) return void(0, Tx.f)(eV, !0);
        const JV = (0, Px.d)(eV, VV, this.api.getPositionView(this.localPlayerId), xV, 1, 40);
        null !== JV && (0, Tx.b)(eV, Math.round(100 * JV.x) / 100, Math.round(100 * JV.y) / 100)
      }
    }
    var Nx = xV(1551),
      Xx = xV(5011),
      Mx = xV(1159);
    const zx = {
        farm_hut: xV.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
        farm_house: xV.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
        farm_barn: xV.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
        rusticHome_tent: xV.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
        rusticHome_cabin: xV.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
        rusticHome_house: xV.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
        market_stand: xV.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
        market_stall: xV.p + "static/media/market_stall.9a562807f9dff591618a.webp",
        market_shop: xV.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
        castle_wall: xV.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
        castle_gate: xV.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
        castle_tower: xV.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
      },
      Gx = ["plotsGame:guideEffortQuick", "plotsGame:guideEffortMedium", "plotsGame:guideEffortBigger"],
      Wx = ["market_stand", "rusticHome_tent", "farm_hut"].map((VV => ({
        id: VV,
        blocks: SV(VV, 0).cells.length
      }))).sort(((VV, eV) => VV.blocks - eV.blocks)).map(((VV, eV) => ({
        ...VV,
        effortKey: Gx[eV]
      })));

    function Rx(VV) {
      let {
        onBuild: eV
      } = VV;
      const {
        t: xV
      } = (0, wV.A)();
      return (0, iV.jsx)("div", {
        className: "PlotsJournalBookPages PlotsGuideChooserCover",
        children: (0, iV.jsxs)("div", {
          className: "PlotsGuideChooser",
          children: [(0, iV.jsx)("h3", {
            className: "PlotsGuideChooserTitle",
            children: xV("plotsGame:guidePickTitle")
          }), (0, iV.jsxs)("p", {
            className: "PlotsGuideChooserNote",
            children: [(0, iV.jsx)("img", {
              src: ye,
              alt: "",
              draggable: !1
            }), xV("plotsGame:guidePickNote")]
          }), (0, iV.jsx)("div", {
            className: "PlotsGuideChooserStarters",
            children: Wx.map((VV => {
              let {
                id: JV,
                blocks: YV,
                effortKey: UV
              } = VV;
              return (0, iV.jsxs)("article", {
                className: "PlotsGuideStarter",
                children: [(0, iV.jsx)("button", {
                  type: "button",
                  className: "PlotsGuideStarterSketch",
                  tabIndex: -1,
                  "aria-hidden": !0,
                  "data-pad-ignore": !0,
                  onClick: () => {
                    eV(JV)
                  },
                  children: (0, iV.jsx)("img", {
                    src: zx[JV],
                    alt: "",
                    draggable: !1
                  })
                }), (0, iV.jsxs)("div", {
                  className: "PlotsGuideStarterInfo",
                  children: [(0, iV.jsxs)("span", {
                    className: "PlotsGuideStarterText",
                    children: [(0, iV.jsx)("span", {
                      className: "PlotsGuideStarterName",
                      children: xV(MV(JV).displayName.translationKey)
                    }), (0, iV.jsx)("span", {
                      className: "PlotsGuideStarterEffort",
                      children: xV(UV)
                    }), (0, iV.jsx)("span", {
                      className: "PlotsGuideStarterBlocks",
                      children: xV("plotsGame:journalBlocks", {
                        blocks: String(YV)
                      })
                    })]
                  }), (0, iV.jsx)(Nx.m, {
                    onClick: () => {
                      eV(JV)
                    },
                    children: xV("plotsGame:placementBuild")
                  })]
                })]
              }, JV)
            }))
          })]
        })
      })
    }

    function gx(VV) {
      let {
        direction: eV,
        disabled: xV,
        onTurn: JV
      } = VV;
      const {
        t: YV
      } = (0, wV.A)();
      return (0, iV.jsx)("div", {
        className: vV()("PlotsJournalArrow", eV),
        children: (0, iV.jsx)(Nx.f, {
          disabled: xV,
          ariaLabel: YV("Forward" === eV ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            JV(eV)
          },
          children: (0, iV.jsx)(EV.b, {
            name: "angle-up"
          })
        })
      })
    }
    const Dx = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function ix(VV) {
      let {
        page: eV,
        building: xV,
        onBuild: JV,
        onPutAway: YV
      } = VV;
      const {
        t: UV
      } = (0, wV.A)(), {
        displayName: yV,
        tier: pV
      } = MV(eV.id), QV = SV(eV.id, 0).cells.length, nV = "locked" === eV.state, ZV = xV ? Nx.f : Nx.m;
      return (0, iV.jsxs)("article", {
        className: vV()("PlotsJournalPage", {
          Locked: nV
        }),
        children: [(0, iV.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: UV(yV.translationKey)
        }), (0, iV.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [UV(Dx[pV]), " \xb7 ", UV("plotsGame:journalBlocks", {
            blocks: String(QV)
          })]
        }), (0, iV.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [XV.map((VV => (0, iV.jsx)("img", {
            className: vV()({
              Shown: VV === eV.id
            }),
            src: zx[VV],
            alt: "",
            draggable: !1
          }, VV))), "completed" === eV.state && (0, iV.jsx)("span", {
            className: "PlotsJournalStamp",
            children: UV("plotsGame:journalBuilt")
          }), nV && (0, iV.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, iV.jsx)(EV.b, {
              name: "lock"
            })
          })]
        }), null !== eV.note && (0, iV.jsx)("p", {
          className: "PlotsJournalNote",
          children: UV(eV.note)
        }), (0, iV.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === eV.state && (0, iV.jsx)("p", {
            className: "PlotsJournalHint",
            children: UV("plotsGame:journalLocked", {
              name: UV(MV(eV.unlockedBy).displayName.translationKey)
            })
          }), eV.active && (0, iV.jsxs)(iV.Fragment, {
            children: [(0, iV.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: UV("plotsGame:journalBuilding")
            }), (0, iV.jsx)(Nx.j, {
              onClick: YV,
              children: UV("plotsGame:journalPutAway")
            })]
          }), !nV && !eV.active && (0, iV.jsx)(ZV, {
            onClick: () => {
              JV(eV.id)
            },
            children: UV("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function Cx(VV) {
      let {
        className: eV,
        page: xV,
        hidden: JV,
        building: YV,
        journal: UV
      } = VV;
      return (0, iV.jsxs)("div", {
        ref: VV => {
          null !== VV && (VV.inert = JV)
        },
        className: vV()("PlotsJournalSide", eV),
        children: [void 0 !== xV && (0, iV.jsx)(ix, {
          page: xV,
          building: YV,
          onBuild: UV.build,
          onPutAway: UV.putAway
        }), void 0 === xV && (0, iV.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var ax = xV(2014);

    function ox(VV) {
      return Math.cos((0, ax.k)(VV))
    }

    function cx(VV) {
      return (0, ax.E)(Math.acos(Pe.b.clamp(VV, -1, 1)))
    }

    function hx(VV, eV, xV, JV, YV) {
      const UV = Math.abs(eV - VV),
        yV = (0, ax.E)(YV / (xV * Math.abs(Math.sin((0, ax.k)(VV))))),
        pV = 450 * Math.min(1, UV / JV),
        QV = yV > 0 ? 3 * UV / yV : 1 / 0;
      return Math.round(Math.max(120, Math.min(pV, QV)))
    }
    class lx {
      constructor() {
        this.samples = []
      }
      add(VV, eV) {
        for (this.samples.push({
            x: VV,
            at: eV
          }); eV - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const VV = this.samples[0],
          eV = this.samples[this.samples.length - 1];
        return eV.at > VV.at ? (eV.x - VV.x) / (eV.at - VV.at) : 0
      }
    }

    function Lx(VV) {
      return cx(new DOMMatrixReadOnly(getComputedStyle(VV).transform).m11)
    }

    function fx(VV, eV) {
      VV.style.transform = `rotateY(${-eV}deg)`, VV.classList.add("Turning")
    }

    function mx(VV, eV, xV) {
      const [JV, YV] = (0, UV.useState)(xV), yV = (0, UV.useRef)(null), pV = (0, UV.useRef)(null), QV = (0, UV.useRef)({
        Forward: null,
        Back: null
      }), nV = eV ? 2 : 1, wV = eV ? 180 : 90, ZV = JV - JV % nV, vV = ZV > 0, rV = ZV + nV < VV, kV = (0, UV.useCallback)((() => {
        const VV = pV.current;
        return null === VV ? ZV : (pV.current = null, VV.animation.cancel(), (eV = QV.current[VV.direction]).style.transform = "", eV.classList.remove("Turning"), null === VV.next ? ZV : (YV(VV.next), VV.next));
        var eV
      }), [ZV]), bV = (0, UV.useCallback)(((VV, eV, xV, JV) => {
        const YV = QV.current[VV],
          UV = Lx(YV),
          yV = eV === ("Forward" === VV) ? wV : 0;
        fx(YV, yV);
        const ZV = YV.animate([{
          transform: `rotateY(${-UV}deg)`
        }, {
          transform: `rotateY(${-yV}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : hx(UV, yV, YV.offsetWidth, wV, yV > UV ? -xV : xV),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        pV.current = {
          direction: VV,
          animation: ZV,
          next: eV ? JV + ("Forward" === VV ? nV : -nV) : null
        }, ZV.onfinish = () => {
          var VV;
          (null === (VV = pV.current) || void 0 === VV ? void 0 : VV.animation) === ZV && kV()
        }
      }), [nV, wV, kV]), EV = (0, UV.useCallback)((eV => {
        if (null !== yV.current) return;
        const xV = kV();
        ("Forward" === eV ? xV + nV < VV : xV > 0) && bV(eV, !0, 0, xV)
      }), [kV, bV, nV, VV]);
      (0, UV.useEffect)((() => () => {
        var VV;
        null === (VV = pV.current) || void 0 === VV || VV.animation.cancel()
      }), []), (0, UV.useEffect)((() => {
        const VV = VV => {
          var eV;
          VV.pointerId !== (null === (eV = yV.current) || void 0 === eV ? void 0 : eV.pointerId) || yV.current.following || (yV.current = null)
        };
        return window.addEventListener("pointerup", VV), () => {
          window.removeEventListener("pointerup", VV)
        }
      }), []);
      const BV = (VV, eV, xV) => {
          const JV = function(VV, eV, xV, JV) {
            return (VV < 0 ? xV : JV) ? Pe.b.clampAbs(VV, eV) : Math.sign(VV) * eV * (1 - 1 / (.55 * Math.abs(VV) / eV + 1))
          }(VV.base + xV, nV * VV.width, rV, vV);
          return "Forward" === eV ? Math.min(JV, 0) : Math.max(JV, 0)
        },
        jV = (VV, eV) => {
          const xV = yV.current;
          if (yV.current = null, null === xV.direction) return;
          xV.speed.add(VV, eV);
          const JV = xV.speed.get(),
            YV = BV(xV, xV.direction, VV - xV.x);
          bV(xV.direction, null !== function(VV, eV, xV, JV, YV) {
            if (Math.abs(eV) >= .3 ? Math.sign(eV) !== Math.sign(VV) : Math.abs(VV) < .5 * xV) return null;
            const UV = VV < 0 ? "Forward" : "Back";
            return ("Forward" === UV ? JV : YV) ? UV : null
          }(YV, JV, nV * xV.width, rV, vV), JV, ZV)
        },
        qV = {
          onPointerDown: VV => {
            var eV;
            if (!VV.isPrimary || 0 !== VV.button || null !== pV.current && null !== VV.target.closest("button")) return;
            const xV = new lx;
            xV.add(VV.clientX, VV.timeStamp);
            const JV = QV.current.Forward.offsetWidth,
              YV = pV.current;
            pV.current = null;
            let UV = 0;
            if (null !== YV) {
              const eV = QV.current[YV.direction],
                xV = Lx(eV);
              YV.animation.cancel(), fx(eV, xV), UV = function(VV, eV, xV, JV) {
                return (VV < 0 ? xV : JV) ? VV : Math.sign(VV) * eV * (1 / (1 - Math.min(Math.abs(VV) / eV, .99)) - 1) / .55
              }(function(VV, eV, xV, JV) {
                return xV * (ox(eV) - ox("Forward" === VV ? 0 : JV))
              }(YV.direction, xV, JV, wV), nV * JV, rV, vV), VV.currentTarget.setPointerCapture(VV.pointerId)
            }
            yV.current = {
              pointerId: VV.pointerId,
              x: VV.clientX,
              y: VV.clientY,
              base: UV,
              width: JV,
              following: null !== YV,
              direction: null !== (eV = null === YV || void 0 === YV ? void 0 : YV.direction) && void 0 !== eV ? eV : null,
              speed: xV
            }
          },
          onPointerMove: VV => {
            const eV = yV.current;
            if (null === eV || VV.pointerId !== eV.pointerId) return;
            if (0 === VV.buttons) return void jV(VV.clientX, VV.timeStamp);
            const xV = VV.clientX - eV.x;
            !eV.following && function(VV, eV) {
              return Math.abs(VV) > 8 && Math.abs(VV) > Math.abs(eV)
            }(xV, VV.clientY - eV.y) && (eV.following = !0, eV.direction = xV < 0 ? "Forward" : "Back", VV.currentTarget.setPointerCapture(VV.pointerId)), null !== eV.direction && (eV.speed.add(VV.clientX, VV.timeStamp), fx(QV.current[eV.direction], function(VV, eV, xV, JV) {
              const YV = xV * ox("Forward" === VV ? 0 : JV) + eV;
              return Pe.b.clamp(cx(YV / xV), 0, JV)
            }(eV.direction, BV(eV, eV.direction, xV), eV.width, wV)))
          },
          onPointerUp: VV => {
            var eV;
            VV.pointerId === (null === (eV = yV.current) || void 0 === eV ? void 0 : eV.pointerId) && jV(VV.clientX, VV.timeStamp)
          },
          onPointerCancel: VV => {
            const eV = yV.current;
            VV.pointerId === (null === eV || void 0 === eV ? void 0 : eV.pointerId) && (yV.current = null, null !== eV.direction && bV(eV.direction, !1, 0, ZV))
          }
        };
      return {
        first: ZV,
        step: nV,
        canGoBack: vV,
        canGoForward: rV,
        turnPage: EV,
        leaves: QV,
        pagesHandlers: qV
      }
    }

    function Kx(VV, eV) {
      return VV > eV && VV >= 600
    }

    function Hx(VV) {
      let {
        journal: eV,
        hud: xV,
        guide: JV
      } = VV;
      const {
        t: YV
      } = (0, wV.A)(), pV = (0, QV.j)(gV, eV.getPages()), nV = (0, QV.j)(xe, xV.getGuide()), ZV = pV.find((VV => VV.active)), rV = (kV = nV, bV = void 0 === ZV ? null : ZV.id, "active" === kV[0] && null === bV);
      var kV, bV;
      const EV = (0, Mx.n)(Kx),
        {
          first: BV,
          step: jV,
          canGoBack: FV,
          canGoForward: TV,
          turnPage: PV,
          leaves: AV,
          pagesHandlers: NV
        } = mx(pV.length, EV, (() => function(VV) {
          const eV = VV.findIndex((VV => VV.active));
          return -1 !== eV ? eV : Math.max(0, VV.findIndex((VV => "open" === VV.state)))
        }(pV)));
      (0, UV.useEffect)((() => {
        eV.onOpened()
      }), [eV]), (0, qV.d)((VV => !rV && ("ArrowLeft" === VV.code || "ArrowRight" === VV.code) && !(0, tV.isTypingInInput)()), (VV => {
        VV.stopPropagation(), PV("ArrowLeft" === VV.code ? "Back" : "Forward")
      }));
      const XV = void 0 !== ZV,
        MV = (VV, xV, JV) => (0, iV.jsx)(Cx, {
          className: VV,
          page: xV >= 0 && xV < pV.length ? pV[xV] : void 0,
          hidden: JV,
          building: XV,
          journal: eV
        });
      return (0, iV.jsx)(Xx.e, {
        close: yV.m,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, iV.jsxs)("section", {
          className: vV()("PlotsJournal", {
            Spread: EV
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": YV("plotsGame:journalTitle"),
          children: [(0, iV.jsx)(Nx.k, {
            className: "PlotsJournalClose",
            onClick: yV.m
          }), "active" === nV[0] && (0, iV.jsx)(ne, {
            className: "PlotsJournalGuideSkip",
            onSkip: JV.skip
          }), rV && (0, iV.jsx)(Rx, {
            onBuild: eV.build
          }), !rV && (0, iV.jsx)(gx, {
            direction: "Back",
            disabled: !FV,
            onTurn: PV
          }), (0, iV.jsx)("div", {
            hidden: rV,
            className: "PlotsJournalBookPages",
            ...NV,
            children: (0, iV.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [EV && MV("Left", BV - 2, !0), MV("Right", BV + 2 * jV - 1, !0), (0, iV.jsxs)("div", {
                ref: VV => {
                  AV.current.Back = VV
                },
                className: "PlotsJournalLeaf Back",
                children: [MV("Recto", BV - 1, !0), EV && MV("Verso", BV, !1)]
              }), (0, iV.jsxs)("div", {
                ref: VV => {
                  AV.current.Forward = VV
                },
                className: "PlotsJournalLeaf Forward",
                children: [MV("Recto", BV + jV - 1, !1), EV && MV("Verso", BV + jV, !0)]
              })]
            })
          }), !rV && (0, iV.jsx)(gx, {
            direction: "Forward",
            disabled: !TV,
            onTurn: PV
          })]
        })
      })
    }

    function ux(VV, eV, xV, JV, YV) {
      const UV = Math.hypot(...eV.dir);
      if (!Number.isFinite(UV) || 0 === UV) return -1;
      const {
        from: yV,
        reach: pV,
        solid: QV
      } = eV, nV = [eV.dir[0] / UV, eV.dir[1] / UV, eV.dir[2] / UV], wV = null === QV ? pV : Math.min(pV, function(VV, eV, xV) {
        const JV = sx(VV, eV, xV);
        if (JV !== 1 / 0) return JV;
        return (xV[0] + .5 - VV[0]) * eV[0] + (xV[1] + .5 - VV[1]) * eV[1] + (xV[2] + .5 - VV[2]) * eV[2]
      }(yV, nV, QV) + .75);
      let ZV = -1,
        vV = 1 / 0,
        rV = 1 / 0;
      for (let kV = 0; kV < VV.length; kV += 4) {
        const eV = [VV[kV], VV[kV + 1], VV[kV + 2]],
          UV = YV(kV) ? pV : wV;
        let QV = -1,
          bV = sx(yV, nV, eV);
        if (bV > UV) {
          const VV = [eV[0] + .5 - yV[0], eV[1] + .5 - yV[1], eV[2] + .5 - yV[2]];
          if (bV = VV[0] * nV[0] + VV[1] * nV[1] + VV[2] * nV[2], bV <= 0 || bV > UV) continue;
          if (QV = Math.hypot(VV[0] - bV * nV[0], VV[1] - bV * nV[1], VV[2] - bV * nV[2]), QV > .7 || !JV(kV)) continue
        }(QV < vV || QV === vV && bV < rV) && xV(kV) && (ZV = kV, vV = QV, rV = bV)
      }
      return ZV
    }

    function sx(VV, eV, xV) {
      let JV = 0,
        YV = 1 / 0;
      for (let UV = 0; UV < 3; UV++) {
        const yV = xV[UV] - VV[UV];
        if (0 === eV[UV]) {
          if (yV > 0 || yV + 1 < 0) return 1 / 0;
          continue
        }
        const pV = yV / eV[UV],
          QV = (yV + 1) / eV[UV];
        JV = Math.max(JV, Math.min(pV, QV)), YV = Math.min(YV, Math.max(pV, QV))
      }
      return JV <= YV ? JV : 1 / 0
    }
    var Sx = xV(38080),
      Ix = xV(39211);
    const dx = [1, 1, 1];
    class Ox {
      constructor(VV) {
        this.api = VV, this.meshes = null, this.shown = null
      }
      show(VV) {
        if (!(0, Sx.h)(VV, this.shown))
          if (this.shown = null === VV ? null : [VV[0], VV[1], VV[2]], null !== this.meshes)
            for (const eV of this.meshes) this.api.setGameMesh(eV, null === VV ? {
              visible: !1
            } : {
              anchor: VV,
              visible: !0
            });
          else if (null !== VV) {
          const eV = [Ix.i, Ix.i, Ix.i, 0, 0, 0];
          this.meshes = [this.build([eV], Ix.m, VV), this.build((0, Ix.e)(), Ix.s, VV)]
        }
      }
      dispose() {
        for (const eV of null !== (VV = this.meshes) && void 0 !== VV ? VV : []) {
          var VV;
          this.api.disposeGameMesh(eV)
        }
        this.meshes = null, this.shown = null
      }
      build(VV, eV, xV) {
        const JV = [],
          YV = [];
        for (const [UV, yV, pV, QV, nV, wV] of VV)(0, ue.f)(JV, YV, [QV + .5, nV + .5, wV + .5], [UV, yV, pV]);
        return this.api.createGameMesh({
          positions: JV,
          indices: YV
        }, {
          rgb: dx,
          alpha: eV,
          onTop: !0
        }, xV)
      }
    }

    function VJ(VV, eV) {
      const xV = Ke.f.QB / 2;
      return VV[0] < eV[0] + xV && VV[0] + 1 > eV[0] - xV && VV[1] < eV[1] + Ke.f.nB && VV[1] + 1 > eV[1] && VV[2] < eV[2] + xV && VV[2] + 1 > eV[2] - xV
    }

    function eJ(VV, eV) {
      return VV.getClientOption(eV, "blockReach") + 1
    }
    class xJ {
      constructor(VV, eV, xV) {
        this.api = VV, this.localPlayerId = eV, this.foreseen = xV, this.cells = [], this.playerCells = [], this.next = null
      }
      get() {
        return this.next
      }
      setCells(VV) {
        this.cells = VV
      }
      playerMoved() {
        return JJ(this.api.getPositionView(this.localPlayerId)).some(((VV, eV) => VV !== this.playerCells[eV]))
      }
      Pr(VV) {
        const eV = this.api.getPositionView(this.localPlayerId);
        return this.playerCells.splice(0, 1 / 0, ...JJ(eV)), this.next = this.pickFrom(null === VV ? [eV[0], eV[1] + 1, eV[2]] : (0, Sx.d)(VV), (() => !1)), this.next
      }
      pickFrom(VV, eV) {
        const xV = this.api.getPositionView(this.localPlayerId),
          JV = [xV[0], xV[1] + Ke.f.nB * Ke.f.playerEyeToHeightRatio, xV[2]],
          YV = eJ(this.api, this.localPlayerId),
          {
            cells: UV
          } = this,
          yV = VV => [UV[VV], UV[VV + 1], UV[VV + 2]],
          pV = function(VV, eV, xV, JV, YV, UV) {
            let yV = -1,
              pV = -1,
              QV = 1 / 0;
            for (let nV = 0; nV < VV.length; nV += eV) {
              const eV = (UV(nV) ? 2 : 0) + (JV(nV) ? 1 : 0);
              if (eV < pV || YV(nV)) continue;
              const wV = (VV[nV] + .5 - xV[0]) ** 2 + (VV[nV + 1] + .5 - xV[1]) ** 2 + (VV[nV + 2] + .5 - xV[2]) ** 2;
              (eV > pV || wV < QV) && (yV = nV, pV = eV, QV = wV)
            }
            return yV
          }(UV, 4, VV, (VV => 1 === UV[VV + 3]), (VV => {
            const JV = yV(VV);
            return VJ(JV, xV) || this.foreseen.has(JV.join()) || eV(JV)
          }), (VV => function(VV, eV, xV) {
            return (eV[0] + .5 - VV[0]) ** 2 + (eV[1] + .5 - VV[1]) ** 2 + (eV[2] + .5 - VV[2]) ** 2 <= xV ** 2
          }(JV, yV(VV), YV)));
        return -1 === pV ? null : yV(pV)
      }
    }

    function JJ(VV) {
      let [eV, xV, JV] = VV;
      const YV = Ke.f.QB / 2;
      return [Math.floor(eV), Math.floor(xV), Math.floor(JV), Math.floor(eV - YV), Math.floor(eV + YV), Math.floor(xV + Ke.f.nB), Math.floor(JV - YV), Math.floor(JV + YV)]
    }
    class YJ {
      constructor(VV, eV, xV) {
        this.api = VV, this.localPlayerId = eV, this.pickNext = xV, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(VV) {
        const [eV, , xV] = VV.cameraDirection, JV = Math.hypot(eV, xV);
        JV > .001 && (this.heading = [eV / JV, xV / JV])
      }
      tapped(VV, eV, xV) {
        const JV = eJ(this.api, this.localPlayerId),
          {
            origin: YV,
            direction: UV
          } = this.api.getActionRay(),
          yV = [...YV],
          pV = [
            [yV, [yV[0] + UV[0] * JV, yV[1] + UV[1] * JV, yV[2] + UV[2] * JV]]
          ];
        null !== VV && pV.push([yV, (0, Sx.d)(VV)]), this.tap = {
          lines: pV,
          next: eV,
          ms: xV
        }
      }
      filled(VV, eV) {
        this.tap = null, this.turnFrom(VV, eV), this.retry(eV)
      }
      arrived(VV, eV) {
        const {
          tap: xV
        } = this;
        if (null === xV || eV - xV.ms > 1500) return null;
        const JV = (0, Sx.d)(VV);
        return (0, Sx.h)(xV.next, VV) || xV.lines.some((VV => {
          let [eV, xV] = VV;
          return function(VV, eV, xV) {
            const JV = [xV[0] - eV[0], xV[1] - eV[1], xV[2] - eV[2]],
              YV = [VV[0] - eV[0], VV[1] - eV[1], VV[2] - eV[2]],
              UV = JV[0] ** 2 + JV[1] ** 2 + JV[2] ** 2,
              yV = 0 === UV ? 0 : Math.min(1, Math.max(0, (YV[0] * JV[0] + YV[1] * JV[1] + YV[2] * JV[2]) / UV));
            return Math.hypot(YV[0] - JV[0] * yV, YV[1] - JV[1] * yV, YV[2] - JV[2] * yV)
          }(JV, eV, xV) <= .9
        })) ? (this.tap = null, this.turnFrom(VV, eV), xV.ms) : null
      }
      turnFrom(VV, eV) {
        this.pending = {
          from: VV,
          ms: eV,
          turnMs: Math.max(50, Math.min(250, eV - this.lastFillMs))
        }, this.lastFillMs = eV
      }
      retry(VV) {
        const {
          pending: eV
        } = this;
        if (null === eV) return;
        if (VV - eV.ms > 1500) return void(this.pending = null);
        const xV = this.pickNext((0, Sx.d)(eV.from), (VV => (0, Sx.h)(VV, eV.from)));
        if (null === xV) return;
        this.pending = null;
        const {
          turning: JV
        } = this;
        if (null !== JV && VV < JV.endMs && (0, Sx.h)(JV.to, xV)) return;
        const YV = this.api.getActionRay().origin,
          UV = [xV[0] + .5 - YV[0], xV[1] + .5 - YV[1], xV[2] + .5 - YV[2]],
          yV = Math.hypot(UV[0], UV[2]);
        if (yV < .3) {
          const VV = Math.max(yV, .001);
          UV[0] = this.heading[0] * VV, UV[2] = this.heading[1] * VV
        }
        this.api.turnCamera(UV, eV.turnMs), this.turning = {
          to: xV,
          endMs: VV + eV.turnMs
        }
      }
    }
    class UJ {
      constructor(VV, eV, xV, JV) {
        this.api = VV, this.localPlayerId = eV, this.juice = xV, this.tracker = JV, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.lastFilled = null, this.lastSeenFilled = null, this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = void 0, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new He(VV), this.meshes = new Vx(VV), this.outline = new Ox(VV), this.nextCell = new xJ(VV, eV, this.foreseen), this.turn = new YJ(VV, eV, ((VV, eV) => this.nextCell.pickFrom(VV, eV)))
      }
      RZ(VV) {
        const eV = "active" === VV[0] ? `${VV[1]}|${VV[3]}|${VV[4]}|${VV[5]}|${VV[6]}` : "";
        if ("active" !== VV[0]) "built" === VV[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , xV, JV, YV, UV] = VV;
          eV !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = xV) : xV === this.layerY ? this.burstUnlisted(JV) : xV > this.layerY && this.finishLayer(xV), this.layerY = xV, this.layerCells.has(xV) || this.layerCells.set(xV, JV.filter(yJ)), this.ghostCells = JV, this.palette = YV, this.occupiedCells = UV
        }
        eV !== this.blueprint && (this.tracker.show("active" === VV[0] && VV[2] ? {
          id: VV[1],
          y: VV[4]
        } : null), this.blueprint = eV, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((VV => this.api.blockNameToBlockId(VV))), this.chunkWatch.watch([...this.ghostCells.filter(yJ), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(VV) {
        this.burstUnlisted([]), VV > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = VV)
      }
      iZ() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const VV = performance.now();
        let eV = !1;
        for (const [JV, YV] of this.foreseen) {
          var xV;
          if (VV - YV > 1e3) this.foreseen.delete(JV), eV = !0, (null === (xV = this.lastFilled) || void 0 === xV ? void 0 : xV.join()) === JV && (this.lastFilled = this.lastSeenFilled)
        }(eV || this.nextCell.playerMoved()) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(VV) {
        const eV = new Set;
        for (let YV = 0; YV < VV.length; YV += 4) eV.add(`${VV[YV]},${VV[YV+1]},${VV[YV+2]}`);
        const xV = [],
          {
            ghostCells: JV
          } = this;
        for (let YV = 0; YV < JV.length; YV += 4) {
          const VV = `${JV[YV]},${JV[YV+1]},${JV[YV+2]}`;
          !eV.has(VV) && this.open.delete(VV) && xV.push(this.filledCell(YV))
        }
        this.burst(xV)
      }
      refresh() {
        const {
          ghostCells: VV,
          palette: eV,
          occupiedCells: xV
        } = this, JV = new Oe, YV = new Set, UV = [], yV = [];
        let pV = 0;
        for (let QV = 0; QV < VV.length; QV += 4) {
          const [xV, nV, wV, ZV] = [VV[QV], VV[QV + 1], VV[QV + 2], VV[QV + 3]], vV = this.api.getBlockId(xV, nV, wV), rV = `${xV},${nV},${wV}`, kV = ge(this.blockIds[ZV], vV);
          !kV && De(vV) ? JV.add(xV, nV, wV, Ce(eV[ZV]), Se, me(eV[ZV])) : kV ? this.open.has(rV) && UV.push(this.filledCell(QV)) : JV.add(xV, nV, wV, de, Ie), kV || pV++, !kV && this.api.isBlockInLoadedChunk(xV, nV, wV) && (YV.add(rV), yV.push(xV, nV, wV, De(vV) ? 0 : 1))
        }
        this.open = YV, this.nextCell.setCells(yV), this.tracker.update(this.layerY, this.topLayerY, pV);
        for (let QV = 0; QV < xV.length; QV += 3) {
          const [VV, eV, YV] = [xV[QV], xV[QV + 1], xV[QV + 2]];
          De(this.api.getBlockId(VV, eV, YV)) || JV.add(VV, eV, YV, de, Ie)
        }
        this.meshes.show(JV.toArray()), this.burst(UV), this.showNext(), this.turn.retry(performance.now())
      }
      burst(VV) {
        const eV = performance.now(),
          xV = [];
        for (const [YV, UV, yV] of VV) {
          const VV = [YV, UV, yV];
          this.lastSeenFilled = VV, this.foreseen.delete(VV.join()) || xV.push(VV)
        }
        const JV = this.isHolding(eV);
        for (const YV of xV) {
          if (this.lastFilled = YV, JV && this.pressFilled) {
            this.turn.filled(YV, eV);
            continue
          }
          const VV = this.turn.arrived(YV, eV);
          if (null !== VV) {
            this.pressFilled = JV;
            for (const [eV, xV] of this.foreseen) xV <= VV && this.foreseen.delete(eV)
          }
        }
        this.juice.filled(VV)
      }
      showNext() {
        var VV;
        this.outline.show(null !== (VV = this.aimed) && void 0 !== VV ? VV : this.nextCell.Pr(this.lastFilled))
      }
      afterRender(VV) {
        var eV;
        this.turn.look(VV);
        const xV = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === xV ? null : xV.position), this.outline.show(null !== (eV = this.aimed) && void 0 !== eV ? eV : this.nextCell.get())
      }
      isHolding(VV) {
        return null !== this.altMs && VV - this.altMs <= 500
      }
      attemptAltAction(VV) {
        const eV = performance.now();
        if (this.isHolding(eV) || (this.pressFilled = !1), this.altMs = eV, this.pressFilled) return "preventPlacement";
        const xV = this.findAimed(VV);
        if (null !== xV) return this.foreseen.set(xV.join(), eV), this.lastFilled = xV, this.aimed = null, this.showNext(), this.turn.filled(xV, eV), this.pressFilled = !0, "preventPlacement";
        {
          const xV = this.nextCell.get();
          null !== xV && this.turn.tapped(VV, xV, eV)
        }
      }
      holdPressOnEntity() {
        const VV = performance.now();
        this.pressFilled && this.isHolding(VV) && (this.altMs = VV)
      }
      findAimed(VV) {
        return function(VV, eV, xV, JV, YV, UV, yV) {
          const pV = VV.bJV(eV),
            QV = null === pV || null === VV.blockNameToBlockId(pV.name, !0) ? null : pV.name,
            nV = VV.getPositionView(eV),
            {
              origin: wV,
              direction: ZV
            } = VV.getActionRay(),
            vV = ux(JV, {
              from: wV,
              dir: ZV,
              reach: eJ(VV, eV),
              solid: xV
            }, (eV => {
              const xV = [JV[eV], JV[eV + 1], JV[eV + 2]];
              return !ge(YV[JV[eV + 3]], VV.getBlockId(...xV)) && !yV.has(xV.join()) && VV.isBlockInLoadedChunk(...xV) && !VJ(xV, nV)
            }), (VV => null === QV || QV === ie(YV[JV[VV + 3]])), (VV => null !== UV && JV[VV] === UV[0] && JV[VV + 1] === UV[1] && JV[VV + 2] === UV[2]));
          return -1 === vV ? null : [JV[vV], JV[vV + 1], JV[vV + 2]]
        }(this.api, this.localPlayerId, VV, this.ghostCells, this.blockIds, this.nextCell.get(), this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(VV) {
        const {
          ghostCells: eV
        } = this, [xV, JV, YV] = Ce(this.palette[eV[VV + 3]]);
        return [eV[VV], eV[VV + 1], eV[VV + 2], xV, JV, YV]
      }
    }

    function yJ(VV, eV) {
      return eV % 4 !== 3
    }
    class pJ {
      constructor(VV) {
        this.api = VV, this.sent = !1
      }
      iZ() {
        this.sent || pV.b.get("loadingOverlayVisible") || (this.sent = !0, this.api.sendCommand("plotsentered"))
      }
    }
    var QJ = xV(4642),
      nJ = xV(40370);

    function wJ(VV, eV, xV) {
      const JV = [255 * VV, 255 * eV, 255 * xV],
        [YV, UV, yV] = JV.map((VV => VV + .4 * (255 - VV)));
      return {
        texture: "square_particle",
        Jv: 48,
        minLifeTime: .3 / nJ.c,
        maxLifeTime: .55 / nJ.c,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * nJ.c * nJ.c, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...JV, 1],
          maxColor: [YV, UV, yV, 1]
        }, {
          timeFraction: 1,
          minColor: [...JV, 0],
          maxColor: [YV, UV, yV, 0]
        }],
        blendMode: QJ.g.Standard
      }
    }
    const ZJ = {
      texture: "glint",
      mipmaps: !1,
      Jv: 96,
      minLifeTime: .5 / nJ.c,
      maxLifeTime: .9 / nJ.c,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * nJ.c * nJ.c, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: QJ.g.OneOne
    };
    class vJ {
      constructor(VV, eV) {
        this.api = VV, this.localPlayerId = eV, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(VV) {
        if (this.api.particlesEnabled())
          for (const [eV, xV, JV, YV, UV, yV] of VV.slice(0, 3)) {
            const VV = `${YV},${UV},${yV}`;
            let pV = this.chips.get(VV);
            void 0 === pV && (pV = this.api.createParticles(wJ(YV, UV, yV), {
              pos: [eV + .5, xV + .5, JV + .5]
            }), this.chips.set(VV, pV));
            for (let eV = 0; eV < 8; eV++) this.setPoint(eV, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            pV.emitPoints([eV + .5, xV + .5, JV + .5], this.points, 8)
          }
      }
      layerDone(VV) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const eV = VV.length / 3;
        if (0 === eV || !this.api.particlesEnabled()) return;
        const xV = Math.min(eV, 48),
          [JV, YV, UV] = [VV[0] + .5, VV[1] + 1, VV[2] + .5];
        let yV = 0;
        for (let pV = 0; pV < xV; pV++) {
          const QV = 3 * Math.floor(pV * eV / xV);
          for (let eV = 0; eV < 2; eV++) this.setPoint(yV++, VV[QV] + Math.random() - JV, VV[QV + 1] + 1 - YV, VV[QV + 2] + Math.random() - UV, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(ZJ, {
          pos: [JV, YV, UV]
        }), this.sparkles.emitPoints([JV, YV, UV], this.points, yV)
      }
      dispose() {
        var VV;
        for (const eV of this.chips.values()) eV.stop();
        this.chips.clear(), null === (VV = this.sparkles) || void 0 === VV || VV.stop(), this.sparkles = null
      }
      setPoint(VV, eV, xV, JV, YV) {
        const UV = 4 * VV;
        this.points[UV] = eV, this.points[UV + 1] = xV, this.points[UV + 2] = JV, this.points[UV + 3] = YV
      }
    }
    const rJ = "SpecialAction1",
      kJ = "KeyY",
      bJ = "KeyX";

    function EJ(VV) {
      let {
        placement: eV
      } = VV;
      const xV = (0, QV.j)(Qx, eV.getView()),
        {
          t: JV
        } = (0, wV.A)(),
        {
          isTouchScreen: YV
        } = (0, pV.l)(["isTouchScreen"]),
        yV = (0, UV.useContext)(TV),
        ZV = null !== xV,
        kV = ZV && !xV.blocked && !xV.waiting;
      if ((0, qV.d)((VV => ZV && !VV.repeat && !(0, tV.isTypingInInput)() && !(0, rV.n)() && !YV), (VV => {
          const xV = function(VV, eV, xV) {
            if (VV === bJ) return eV.stop;
            if (VV === kJ) return xV ? eV.build : jJ;
            return nV.t[rJ].includes(VV) ? eV.rotate : null
          }(VV.code, eV, kV);
          null !== xV && (VV.stopPropagation(), xV())
        })), !ZV) return null;
      let EV = YV ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return xV.blocked ? EV = "plotsGame:placementOffPlot" : xV.toClear > 0 ? EV = "plotsGame:placementClear" : "placeSpot" !== yV.hint && "placeBuild" !== yV.hint || (EV = null), (0, iV.jsx)(bV.e, {
        placement: "bottom",
        children: (0, iV.jsxs)("div", {
          ref: yV.placementCardRef,
          className: "PlotsPlacementCard",
          children: [(0, iV.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: JV(MV(xV.id).displayName.translationKey)
          }), null !== EV && (0, iV.jsx)("div", {
            className: vV()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: xV.refusals > 0
            }),
            children: JV(EV)
          }, xV.refusals), (0, iV.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, iV.jsxs)(Nx.f, {
              onClick: eV.rotate,
              children: [(0, iV.jsx)(BJ, {
                noaAction: rJ
              }), JV("plotsGame:placementRotate")]
            }), (0, iV.jsxs)(Nx.E, {
              onClick: eV.stop,
              children: [(0, iV.jsx)(BJ, {
                keyCode: bJ
              }), JV("general:cancel")]
            }), (0, iV.jsx)("span", {
              ref: yV.buildRef,
              className: vV()("PlotsPlacementBuild", {
                Pulse: "placeBuild" === yV.hint && kV && YV
              }),
              children: (0, iV.jsxs)(Nx.m, {
                disabled: !kV,
                onClick: eV.build,
                children: [(0, iV.jsx)(BJ, {
                  keyCode: kJ
                }), JV("plotsGame:placementBuild")]
              })
            })]
          })]
        })
      })
    }

    function BJ(VV) {
      return (0, iV.jsx)(jV.d, {
        className: "PlotsPlacementKey",
        ...VV
      })
    }

    function jJ() {}
    var qJ = xV(2524),
      tJ = xV(37852),
      FJ = xV(2100),
      TJ = xV(1290);
    const PJ = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function AJ(VV) {
      let {
        hud: eV
      } = VV;
      const xV = (0, QV.j)(ee, eV.getPlot()),
        [JV, YV] = (0, UV.useState)(null),
        yV = (0, tJ.i)(JV);
      if ("none" === xV[0]) return null;
      const [, pV, nV, wV, ZV, rV] = xV;
      return (0, iV.jsx)("div", {
        className: vV()("PlotsPlotBannerContainer", {
          Below: yV
        }),
        children: (0, iV.jsx)(NJ, {
          plotX: pV,
          plotZ: nV,
          ownerName: wV,
          ownerId: ZV,
          relation: rV,
          plaqueRef: YV
        }, `${pV},${nV}`)
      })
    }

    function NJ(VV) {
      var eV, xV;
      let {
        plotX: JV,
        plotZ: YV,
        ownerName: UV,
        ownerId: yV,
        relation: pV,
        plaqueRef: QV
      } = VV;
      const {
        t: nV
      } = (0, wV.A)(), ZV = (0, FJ.h)("hiddenPlayerNames"), rV = (0, FJ.h)("players"), kV = null === yV ? null : null !== (eV = null === (xV = rV.byId[yV]) || void 0 === xV ? void 0 : xV.cosmetics) && void 0 !== eV ? eV : null, bV = nV("plotsGame:plotBannerCoords", {
        x: JV,
        z: YV
      }), BV = "own" === pV || null !== UV;
      return (0, iV.jsxs)("div", {
        ref: QV,
        className: vV()("PlotsPlotBanner", {
          Own: "own" === pV,
          Shared: "shared" === pV
        }),
        role: "status",
        children: [(0, iV.jsxs)("span", {
          className: vV()("PlotsPlotBannerSeal", {
            Face: null !== kV
          }),
          children: [null !== kV && (0, iV.jsx)(qJ.e, {
            cosmetics: kV
          }), null === kV && (0, iV.jsx)(EV.b, {
            name: PJ[pV]
          })]
        }), (0, iV.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, iV.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === pV && nV("plotsGame:plotBannerYours"), "own" !== pV && null !== UV && nV("plotsGame:plotBannerOwner", {
              name: (0, TJ.g)(UV, ZV)
            }), !BV && bV]
          }), BV && (0, iV.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [bV, "shared" === pV && (0, iV.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: nV("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }
    const XJ = function(VV, eV, xV, JV) {
      let {
        localPlayerId: YV
      } = JV;
      const pV = new Ye;
      let QV = null,
        nV = null,
        wV = null,
        ZV = null,
        vV = null,
        rV = null;
      const kV = [];
      return {
        onCreate: VV => {
          QV = new vJ(VV, YV);
          const eV = new Ve;
          nV = new UJ(VV, YV, QV, eV), wV = new wx(VV, YV), ZV = new DV(VV, wV), vV = new Ax(VV, YV, nV.nextCell), rV = new pJ(VV), kV.push((0, yV.z)((0, UV.createElement)(Fx, {
            hud: pV,
            guide: vV,
            tracker: eV,
            placement: wV
          }, (0, UV.createElement)(AJ, {
            hud: pV
          }), (0, UV.createElement)(aV, {
            journal: ZV
          }), (0, UV.createElement)(Ex, {
            placement: wV
          }), (0, UV.createElement)(EJ, {
            placement: wV
          })), {
            content: (0, UV.createElement)(Hx, {
              journal: ZV,
              hud: pV,
              guide: vV
            })
          }))
        },
        iZ: () => {
          rV.iZ(), nV.iZ(), wV.iZ(), ZV.iZ()
        },
        onPlayerAttemptAltAction: (VV, eV, xV, JV, YV, UV) => {
          if (null !== UV) return void nV.holdPressOnEntity();
          const yV = void 0 === eV ? null : [eV, xV, JV];
          return nV.attemptAltAction(yV)
        },
        onPlayerClickUp: () => {
          nV.endPress()
        },
        onAfterRender: (VV, eV) => {
          wV.afterRender(eV), nV.afterRender(eV), vV.afterRender(eV)
        },
        onClose: () => {
          for (const VV of kV) VV();
          QV.dispose(), nV.dispose(), wV.dispose(), QV = null, nV = null, wV = null, ZV = null, vV = null, rV = null
        },
        onReceivedMessageFromServer: (VV, eV) => {
          if ("plotsPlot" === VV) pV.receivePlot(eV);
          else if ("plotsBlueprint" === VV) {
            const VV = eV;
            nV.RZ(VV), wV.RZ(VV)
          } else "plotsJournal" === VV ? ZV.RZ(eV) : "plotsJournalOpen" === VV ? ZV.openFromServer(eV) : "plotsPreviewEnd" === VV ? wV.endFromServer() : "plotsGuide" === VV ? pV.receiveGuide(eV) : "plotsGuideDone" === VV && pV.receiveGuideDone()
        }
      }
    }
  },
  39651: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => pV
    });
    var JV = xV(39648);
    const YV = 5,
      UV = [0, 0, 0],
      yV = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function pV(VV, eV, xV, pV, QV, nV) {
      let [wV, ZV, vV] = pV;
      const rV = (wV + .5 - xV[0]) ** 2 + (ZV - xV[1]) ** 2 + (vV + .5 - xV[2]) ** 2;
      let kV = null;
      rV <= nV ** 2 && (UV[0] = wV + .5, UV[1] = ZV + QV, UV[2] = vV + .5, kV = eV.projectWorldPosToViewport(UV));
      const bV = null !== kV && kV.x > -YV && kV.x < 100 + YV && kV.y > -YV && kV.y < 100 + YV;
      return (0, JV.f)(VV, !bV), bV ? (yV.x = kV.x, yV.y = kV.y, yV.distSq = rV, yV) : null
    }
  },
  40370: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV,
      f: () => UV
    });
    const JV = 1 / .6,
      YV = {
        kind: "smokePuff"
      };
    class UV {
      constructor(VV, eV, xV) {
        this.style = VV, this.Jv = eV, this.half = xV, this.particles = null, this.lastFrame = -1
      }
      emit(VV, eV, xV) {
        let UV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return xV !== this.lastFrame && (this.lastFrame = xV, this.particles || (this.particles = VV.createParticles(function(VV, eV) {
          const [
            [xV, UV, yV],
            [pV, QV, nV]
          ] = VV.colours;
          return {
            texture: VV.soft ? YV : "square_particle",
            Jv: eV,
            minLifeTime: VV.life[0] / JV,
            maxLifeTime: VV.life[1] / JV,
            minEmitPower: VV.power[0] * JV,
            maxEmitPower: VV.power[1] * JV,
            minSize: VV.size[0],
            maxSize: VV.size[1],
            emitRate: 0,
            gravity: [0, VV.lift * JV * JV, 0],
            dir1: [-VV.spread, 1, -VV.spread],
            dir2: [VV.spread, 1, VV.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [xV, UV, yV, VV.alpha],
              maxColor: [pV, QV, nV, VV.alpha]
            }, {
              timeFraction: 1,
              minColor: [xV, UV, yV, 0],
              maxColor: [pV, QV, nV, 0]
            }],
            blendMode: VV.blendMode
          }
        }(this.style, this.Jv), {
          pos: eV,
          half: this.half
        })), this.particles.moveTo(eV, this.half), this.particles.emit(UV), !0)
      }
      dispose() {
        var VV;
        null === (VV = this.particles) || void 0 === VV || VV.stop(), this.particles = null
      }
    }
  },
  35097: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => yV,
      f: () => pV,
      h: () => QV
    });
    const JV = new Map,
      YV = [];

    function UV() {
      for (const VV of YV) VV()
    }

    function yV(VV) {
      var eV;
      return JV.set(VV, (null !== (eV = JV.get(VV)) && void 0 !== eV ? eV : 0) + 1), UV(), () => {
        const eV = JV.get(VV) - 1;
        0 === eV ? JV.delete(VV) : JV.set(VV, eV), UV()
      }
    }

    function pV() {
      return [...JV.keys()]
    }

    function QV(VV) {
      YV.push(VV)
    }
  },
  39648: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => yV,
      f: () => UV
    });
    const JV = new WeakMap;

    function YV(VV) {
      let eV = JV.get(VV);
      return eV || (eV = {
        hidden: VV.hidden,
        x: NaN,
        y: NaN
      }, JV.set(VV, eV)), eV
    }

    function UV(VV, eV) {
      const xV = YV(VV);
      xV.hidden !== eV && (xV.hidden = eV, VV.hidden = eV)
    }

    function yV(VV, eV, xV) {
      const JV = YV(VV);
      JV.x === eV && JV.y === xV || (JV.x = eV, JV.y = xV, VV.style.translate = `${eV}vw ${xV}vh`)
    }
  },
  38080: (VV, eV, xV) => {
    function JV(VV, eV) {
      return null === VV || null === eV ? VV === eV : VV[0] === eV[0] && VV[1] === eV[1] && VV[2] === eV[2]
    }

    function YV(VV) {
      return [VV[0] + .5, VV[1] + .5, VV[2] + .5]
    }
    xV.d(eV, {
      d: () => YV,
      h: () => JV
    })
  },
  38114: (VV, eV, xV) => {
    function JV(VV) {
      return VV.includes("Leaf Bed")
    }

    function YV(VV) {
      return / Bed(?: Head)?(?:\||$)/.test(VV) && !JV(VV)
    }

    function UV(VV) {
      return VV.includes(" Strongbed")
    }

    function yV(VV) {
      return JV(VV) || YV(VV) || UV(VV)
    }
    xV.d(eV, {
      d: () => yV,
      e: () => JV,
      f: () => UV,
      j: () => YV
    })
  },
  38112: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => nV
    });
    var JV = xV(38114),
      YV = xV(9820);
    const UV = [],
      yV = [],
      pV = [],
      QV = [];
    for (const wV of Object.keys(YV.p))(0, JV.e)(wV) ? UV.push(wV) : (0, JV.j)(wV) && yV.push(wV), (0, JV.f)(wV) && pV.push(wV), (wV.includes(" Bed Head") || wV.includes(" Strongbed Head")) && QV.push(wV);
    const nV = {
      leafBeds: UV,
      woolBeds: yV,
      strongBeds: pV,
      beds: [...UV, ...yV, ...pV],
      bedHeads: QV,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  39705: VV => {
    VV.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYUlEQVR4nGNgIBP8R8NYwX+GDVNRMQOm4v8MC9qxYwZUxf//b+T4//8A+///51khGMTeyIGp8Nz0gv8MDoFgGsbeUB2BXeHESHcUjFNhR4Dj/zp3OzAGsbEphHgIOyYNAACzzGY5JF2GbAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);