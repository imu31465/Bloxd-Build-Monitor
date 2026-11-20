export const id = 238;
export const ids = [238];
export const modules = {
  38814: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      default: () => sF
    });
    const Fz = [0, 90, 180, 270],
      Wz = "plotsblueprint";
    var Xz = sz(65),
      Oz = sz(36086),
      oz = sz(30),
      vz = sz(1571),
      Uz = sz(1664),
      Kz = sz(34);
    const uz = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      Nz = {
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
      bz = ["small", "medium", "large"].flatMap((zz => uz.flat().filter((tz => Nz[tz].tier === zz))));

    function wz(zz) {
      return Nz[zz]
    }
    const Dz = new Map(uz.flatMap((zz => zz.slice(1).map(((tz, sz) => [tz, zz[sz]])))));

    function gz(zz) {
      var tz;
      return null !== (tz = Dz.get(zz)) && void 0 !== tz ? tz : null
    }
    const Hz = {
      farm_hut: "plotsGame:journalNoteFarmHut",
      rusticHome_tent: "plotsGame:journalNoteRusticHomeTent",
      castle_tower: "plotsGame:journalNoteCastleTower",
      farm_house: "plotsGame:journalNoteFarmHouse",
      farm_barn: "plotsGame:journalNoteFarmBarn"
    };

    function Bz(zz, tz) {
      const sz = new Set(zz),
        Fz = function(zz) {
          const tz = new Set(zz);
          return new Set(bz.filter((zz => {
            const sz = gz(zz);
            return null === sz || tz.has(sz)
          })))
        }(sz);
      return bz.map((zz => {
        const Wz = zz === tz;
        return sz.has(zz) ? {
          id: zz,
          active: Wz,
          state: "completed",
          unlockedBy: null
        } : Fz.has(zz) ? {
          id: zz,
          active: Wz,
          state: "open",
          unlockedBy: null
        } : {
          id: zz,
          active: Wz,
          state: "locked",
          unlockedBy: gz(zz)
        }
      }))
    }
    const Pz = "plotsJournalChanged";
    class rz {
      constructor(zz, tz) {
        this.api = zz, this.placement = tz, this.pages = null, this.openRequested = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.Iw("journal_opened")
        }, this.build = zz => {
          this.Iw("placement_started"), this.placement.start(zz), (0, Oz.h)()
        }, this.putAway = () => {
          this.api.sendCommand(`${Wz} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      Sw(zz) {
        let [, tz, sz] = zz;
        this.pages = Bz(tz, sz), Kz.o.Yg(Pz, this.pages, !0)
      }
      openFromServer() {
        this.openRequested = !0, this.wN()
      }
      wN() {
        this.openRequested && !oz.b.get("loadingOverlayVisible") && (this.openRequested = !1, null === this.pages || (0, vz.r)() || (0, Uz.isTypingInInput)() || null !== this.placement.getView() || (0, Oz.s)())
      }
      Iw(zz) {
        this.reported.has(zz) || (this.reported.add(zz), this.api.sendCommand(`${Wz} report ${zz}`))
      }
    }
    var Yz = sz(1020),
      xz = sz.n(Yz),
      mz = sz(1036),
      Jz = sz(1419),
      Iz = sz(4175),
      Cz = sz(3076),
      ez = sz(1416),
      Zz = sz(2020),
      Gz = sz(1173),
      Tz = sz(8940);
    const cz = [0, 90, 180, 270],
      jz = /^(meta\|rot\d)\|([lrud]+)$/,
      Az = "nesw",
      yz = /^meta\|([nesw]*)\|?(Stacked)?$/,
      Mz = function(zz) {
        const tz = new WeakMap;
        return (sz, Fz) => {
          let Wz = tz.get(sz);
          return void 0 === Wz && (Wz = zz(sz, Fz), tz.set(sz, Wz)), Wz
        }
      }((zz => new dz(zz)));
    class dz {
      constructor(zz) {
        this.blockMetadata = zz, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const tz = new Set(Object.keys(zz).map((tz => zz[tz].id)));
        tz.add(0), this.maxBlockId = Math.max(...tz)
      }
      static
      for (zz) {
        return Mz(zz)
      }
      getBlockIdMapping(zz, tz) {
        const sz = this.getBlockIdMappingKey(zz, tz);
        let Fz = this.blockIdMappings.get(sz);
        return void 0 === Fz && cz.includes(zz) && (Fz = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, zz, tz), this.blockIdMappings.set(sz, Fz)), Fz
      }
      turnBlockId(zz, tz, sz) {
        return this.mapBlockId(this.blockMetadata[zz], tz, this.getRotationMapping(tz, sz), sz)
      }
      getBlockIdMappingKey(zz, tz) {
        return `r${zz}|m${Number(tz)}`
      }
      createBlockIdMapping(zz, tz, sz, Fz) {
        const Wz = new Uint16Array(tz + 1),
          Xz = this.getRotationMapping(sz, Fz);
        for (const Oz in zz) {
          const tz = zz[Oz];
          Wz[tz.id] = this.mapBlockId(tz, sz, Xz, Fz)
        }
        return Wz
      }
      getRotationMapping(zz, tz) {
        const sz = Math.round(zz / 90),
          Fz = new Uint8Array(4);
        for (let Wz = 0; Wz < 4; Wz++) Fz[Wz] = (4 + Wz - sz) % 4;
        if (tz) {
          let zz = Fz[0];
          Fz[0] = Fz[1], Fz[1] = zz, zz = Fz[2], Fz[2] = Fz[3], Fz[3] = zz
        }
        return Fz
      }
      mapBlockId(zz, tz, sz, Fz) {
        var Wz;
        const {
          blockMetadata: Xz
        } = this, Oz = Math.round(tz / 90), {
          id: oz,
          meta: vz
        } = zz, {
          rot: Uz,
          rootName: Kz,
          metaStr: uz
        } = vz;
        let Nz;
        const [, bz, wz] = null !== (Wz = yz.exec(uz)) && void 0 !== Wz ? Wz : [];
        if (void 0 !== bz) {
          var Dz, gz;
          Nz = null !== (Dz = null === (gz = Xz[`${Kz}|meta|${[Az.split("").filter(((zz,tz)=>bz.split("").some((zz=>{const sz=Az.indexOf(zz);return((Fz?3-sz:sz)+Oz)%4===tz})))).join(""),wz].filter(Boolean).join("|")}`]) || void 0 === gz ? void 0 : gz.id) && void 0 !== Dz ? Dz : oz
        } else if (null === Uz) Nz = oz;
        else {
          var Hz, Bz;
          const zz = sz[Uz - 1] + 1;
          let tz = uz.replace(`rot${Uz}`, `rot${zz}`);
          Fz && vz.stairsCorner && (tz = tz.replace(/(Left|Right)$/, (zz => "Left" === zz ? "Right" : "Left"))), Fz && "Chest" === Kz && (tz = tz.replace(/\|(left|right)$/, ((zz, tz) => "left" === tz ? "|right" : "|left")));
          const Wz = jz.exec(tz);
          if (Fz && null !== Wz) {
            const zz = "lrud".split("").filter((zz => Wz[2].includes("l" === zz ? "r" : "r" === zz ? "l" : zz)));
            tz = `${Wz[1]}|${zz.join("")}`
          }
          const Oz = `${Kz}|${tz}`;
          if (Nz = null !== (Hz = null === (Bz = Xz[Oz]) || void 0 === Bz ? void 0 : Bz.id) && void 0 !== Hz ? Hz : null, null === Nz) {
            const zz = Xz[Kz];
            Nz = zz.rootMetaDesc === Oz ? zz.id : oz
          }
        }
        return Nz
      }
    }

    function hz(zz, tz, sz) {
      let {
        xRotationMappedOrigin: Fz,
        shouldSwapXZ: Wz
      } = sz;
      const Xz = Wz ? tz : zz;
      return null === Fz ? Xz : Fz - Xz
    }

    function Qz(zz, tz, sz) {
      let {
        zRotationMappedOrigin: Fz,
        shouldSwapXZ: Wz
      } = sz;
      const Xz = Wz ? zz : tz;
      return null === Fz ? Xz : Fz - Xz
    }
    const kz = {
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
      iz = new Map;

    function Lz(zz, tz) {
      const sz = `${zz}|${tz}`;
      let Fz = iz.get(sz);
      if (void 0 === Fz) {
        const {
          size: Wz,
          palette: Xz,
          layers: Oz
        } = kz[zz], oz = 90 === tz || 270 === tz, [vz, Uz] = oz ? [Wz[2], Wz[0]] : [Wz[0], Wz[2]], Kz = function(zz, tz, sz) {
          let Fz = null,
            Wz = null,
            Xz = !1;
          switch (zz) {
            case 0:
              break;
            case 90:
              Fz = tz - 1, Xz = !0;
              break;
            case 180:
              Fz = tz - 1, Wz = sz - 1;
              break;
            case 270:
              Wz = sz - 1, Xz = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${zz}`)
          }
          return {
            xRotationMappedOrigin: Fz,
            zRotationMappedOrigin: Wz,
            shouldSwapXZ: Xz
          }
        }(tz, vz, Uz), uz = dz.for(Tz.j), Nz = Xz.map((zz => (0, Tz.h)(uz.turnBlockId((0, Tz.k)(zz), tz, !1)))), bz = [];
        Oz.forEach(((zz, tz) => {
          zz.split(" ").forEach(((zz, sz) => {
            for (let Fz = 0; Fz < zz.length; Fz++)
              if ("." !== zz[Fz]) {
                const Wz = [hz(Fz, sz, Kz), tz, Qz(Fz, sz, Kz)];
                bz.push({
                  offset: Wz,
                  block: Nz[zz.charCodeAt(Fz) - "a".charCodeAt(0)]
                })
              }
          }))
        })), Fz = {
          size: [vz, Wz[1], Uz],
          cells: bz
        }, iz.set(sz, Fz)
      }
      return Fz
    }
    const lz = {
      farm_hut: sz.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
      farm_house: sz.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
      farm_barn: sz.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
      rusticHome_tent: sz.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
      rusticHome_cabin: sz.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
      rusticHome_house: sz.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
      market_stand: sz.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
      market_stall: sz.p + "static/media/market_stall.9a562807f9dff591618a.webp",
      market_shop: sz.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
      castle_wall: sz.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
      castle_gate: sz.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
      castle_tower: sz.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
    };
    var nz = sz(1087);
    const az = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function qz(zz) {
      let {
        page: tz,
        building: sz,
        onBuild: Fz,
        onPutAway: Wz
      } = zz;
      const {
        t: Xz
      } = (0, Gz.B)(), {
        displayName: Oz,
        tier: oz
      } = wz(tz.id), vz = Lz(tz.id, 0).cells.length, Uz = Hz[tz.id], Kz = "locked" === tz.state, uz = sz ? Jz.h : Jz.p;
      return (0, nz.jsxs)("article", {
        className: xz()("PlotsJournalPage", {
          Locked: Kz
        }),
        children: [(0, nz.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: Xz(Oz.translationKey)
        }), (0, nz.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [Xz(az[oz]), " \xb7 ", Xz("plotsGame:journalBlocks", {
            blocks: String(vz)
          })]
        }), (0, nz.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [bz.map((zz => (0, nz.jsx)("img", {
            className: xz()({
              Shown: zz === tz.id
            }),
            src: lz[zz],
            alt: "",
            draggable: !1
          }, zz))), "completed" === tz.state && (0, nz.jsx)("span", {
            className: "PlotsJournalStamp",
            children: Xz("plotsGame:journalBuilt")
          }), Kz && (0, nz.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, nz.jsx)(mz.c, {
              name: "lock"
            })
          })]
        }), void 0 !== Uz && "completed" !== tz.state && (0, nz.jsx)("p", {
          className: "PlotsJournalNote",
          children: Xz(Uz)
        }), (0, nz.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === tz.state && (0, nz.jsx)("p", {
            className: "PlotsJournalHint",
            children: Xz("plotsGame:journalLocked", {
              name: Xz(wz(tz.unlockedBy).displayName.translationKey)
            })
          }), tz.active && (0, nz.jsxs)(nz.Fragment, {
            children: [(0, nz.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: Xz("plotsGame:journalBuilding")
            }), (0, nz.jsx)(Jz.l, {
              onClick: Wz,
              children: Xz("plotsGame:journalPutAway")
            })]
          }), !Kz && !tz.active && (0, nz.jsx)(uz, {
            onClick: () => {
              Fz(tz.id)
            },
            children: Xz("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function Sz(zz) {
      let {
        className: tz,
        page: sz,
        hidden: Fz,
        building: Wz,
        journal: Xz
      } = zz;
      return (0, nz.jsxs)("div", {
        ref: zz => {
          null !== zz && (zz.inert = Fz)
        },
        className: xz()("PlotsJournalSide", tz),
        children: [void 0 !== sz && (0, nz.jsx)(qz, {
          page: sz,
          building: Wz,
          onBuild: Xz.build,
          onPutAway: Xz.putAway
        }), void 0 === sz && (0, nz.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var Vz = sz(321),
      Rz = sz(1824);

    function pz(zz) {
      return Math.cos((0, Rz.h)(zz))
    }

    function fz(zz) {
      return (0, Rz.u)(Math.acos(Vz.c.clamp(zz, -1, 1)))
    }

    function Ez(zz, tz, sz, Fz, Wz) {
      const Xz = Math.abs(tz - zz),
        Oz = (0, Rz.u)(Wz / (sz * Math.abs(Math.sin((0, Rz.h)(zz))))),
        oz = 450 * Math.min(1, Xz / Fz),
        vz = Oz > 0 ? 3 * Xz / Oz : 1 / 0;
      return Math.round(Math.max(120, Math.min(oz, vz)))
    }
    class zt {
      constructor() {
        this.samples = []
      }
      add(zz, tz) {
        for (this.samples.push({
            x: zz,
            at: tz
          }); tz - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const zz = this.samples[0],
          tz = this.samples[this.samples.length - 1];
        return tz.at > zz.at ? (tz.x - zz.x) / (tz.at - zz.at) : 0
      }
    }

    function tt(zz, tz) {
      return zz > tz && zz >= 600
    }

    function st(zz) {
      return fz(new DOMMatrixReadOnly(getComputedStyle(zz).transform).m11)
    }

    function Ft(zz, tz) {
      zz.style.transform = `rotateY(${-tz}deg)`, zz.classList.add("Turning")
    }

    function Wt(zz) {
      let {
        journal: tz
      } = zz;
      const {
        t: sz
      } = (0, Gz.B)(), Fz = (0, ez.h)(Pz, tz.getPages()), Wz = (0, Zz.c)(tt), [oz, vz] = (0, Xz.useState)((() => function(zz) {
        const tz = zz.findIndex((zz => zz.active));
        return -1 !== tz ? tz : Math.max(0, zz.findIndex((zz => "open" === zz.state)))
      }(Fz))), Kz = (0, Xz.useRef)(null), uz = (0, Xz.useRef)(null), Nz = (0, Xz.useRef)({
        Forward: null,
        Back: null
      }), bz = Wz ? 2 : 1, wz = Wz ? 180 : 90, Dz = oz - oz % bz, gz = Dz > 0, Hz = Dz + bz < Fz.length, Bz = (0, Xz.useCallback)((() => {
        const zz = uz.current;
        return null === zz ? Dz : (uz.current = null, zz.animation.cancel(), (tz = Nz.current[zz.direction]).style.transform = "", tz.classList.remove("Turning"), null === zz.next ? Dz : (vz(zz.next), zz.next));
        var tz
      }), [Dz]), rz = (0, Xz.useCallback)(((zz, tz, sz, Fz) => {
        const Wz = Nz.current[zz],
          Xz = st(Wz),
          Oz = tz === ("Forward" === zz) ? wz : 0;
        Ft(Wz, Oz);
        const oz = Wz.animate([{
          transform: `rotateY(${-Xz}deg)`
        }, {
          transform: `rotateY(${-Oz}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : Ez(Xz, Oz, Wz.offsetWidth, wz, Oz > Xz ? -sz : sz),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        uz.current = {
          direction: zz,
          animation: oz,
          next: tz ? Fz + ("Forward" === zz ? bz : -bz) : null
        }, oz.onfinish = () => {
          var zz;
          (null === (zz = uz.current) || void 0 === zz ? void 0 : zz.animation) === oz && Bz()
        }
      }), [bz, wz, Bz]), Yz = (0, Xz.useCallback)((zz => {
        if (null !== Kz.current) return;
        const tz = Bz();
        ("Forward" === zz ? tz + bz < Fz.length : tz > 0) && rz(zz, !0, 0, tz)
      }), [Bz, rz, bz, Fz.length]);
      (0, Xz.useEffect)((() => {
        tz.onOpened()
      }), [tz]), (0, Xz.useEffect)((() => () => {
        var zz;
        null === (zz = uz.current) || void 0 === zz || zz.animation.cancel()
      }), []), (0, Xz.useEffect)((() => {
        const zz = zz => {
          var tz;
          zz.pointerId !== (null === (tz = Kz.current) || void 0 === tz ? void 0 : tz.pointerId) || Kz.current.following || (Kz.current = null)
        };
        return window.addEventListener("pointerup", zz), () => {
          window.removeEventListener("pointerup", zz)
        }
      }), []), (0, Cz.d)((zz => ("ArrowLeft" === zz.code || "ArrowRight" === zz.code) && !(0, Uz.isTypingInInput)()), (zz => {
        zz.stopPropagation(), Yz("ArrowLeft" === zz.code ? "Back" : "Forward")
      }));
      const mz = (zz, tz, sz) => {
          const Fz = function(zz, tz, sz, Fz) {
            return (zz < 0 ? sz : Fz) ? Vz.c.clampAbs(zz, tz) : Math.sign(zz) * tz * (1 - 1 / (.55 * Math.abs(zz) / tz + 1))
          }(zz.base + sz, bz * zz.width, Hz, gz);
          return "Forward" === tz ? Math.min(Fz, 0) : Math.max(Fz, 0)
        },
        Tz = (zz, tz) => {
          const sz = Kz.current;
          if (Kz.current = null, null === sz.direction) return;
          sz.speed.add(zz, tz);
          const Fz = sz.speed.get(),
            Wz = mz(sz, sz.direction, zz - sz.x);
          rz(sz.direction, null !== function(zz, tz, sz, Fz, Wz) {
            if (Math.abs(tz) >= .3 ? Math.sign(tz) !== Math.sign(zz) : Math.abs(zz) < .5 * sz) return null;
            const Xz = zz < 0 ? "Forward" : "Back";
            return ("Forward" === Xz ? Fz : Wz) ? Xz : null
          }(Wz, Fz, bz * sz.width, Hz, gz), Fz, Dz)
        },
        cz = Fz.some((zz => zz.active)),
        jz = (zz, sz, Wz) => (0, nz.jsx)(Sz, {
          className: zz,
          page: sz >= 0 && sz < Fz.length ? Fz[sz] : void 0,
          hidden: Wz,
          building: cz,
          journal: tz
        });
      return (0, nz.jsx)(Iz.b, {
        close: Oz.j,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, nz.jsxs)("section", {
          className: xz()("PlotsJournal", {
            Spread: Wz
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": sz("plotsGame:journalTitle"),
          children: [(0, nz.jsx)(Jz.n, {
            className: "PlotsJournalClose",
            onClick: Oz.j
          }), (0, nz.jsx)(Xt, {
            direction: "Back",
            disabled: !gz,
            onTurn: Yz
          }), (0, nz.jsx)("div", {
            className: "PlotsJournalBookPages",
            onPointerDown: zz => {
              var tz;
              if (!zz.isPrimary || 0 !== zz.button || null !== uz.current && null !== zz.target.closest("button")) return;
              const sz = new zt;
              sz.add(zz.clientX, zz.timeStamp);
              const Fz = Nz.current.Forward.offsetWidth,
                Wz = uz.current;
              uz.current = null;
              let Xz = 0;
              if (null !== Wz) {
                const tz = Nz.current[Wz.direction],
                  sz = st(tz);
                Wz.animation.cancel(), Ft(tz, sz), Xz = function(zz, tz, sz, Fz) {
                  return (zz < 0 ? sz : Fz) ? zz : Math.sign(zz) * tz * (1 / (1 - Math.min(Math.abs(zz) / tz, .99)) - 1) / .55
                }(function(zz, tz, sz, Fz) {
                  return sz * (pz(tz) - pz("Forward" === zz ? 0 : Fz))
                }(Wz.direction, sz, Fz, wz), bz * Fz, Hz, gz), zz.currentTarget.setPointerCapture(zz.pointerId)
              }
              Kz.current = {
                pointerId: zz.pointerId,
                x: zz.clientX,
                y: zz.clientY,
                base: Xz,
                width: Fz,
                following: null !== Wz,
                direction: null !== (tz = null === Wz || void 0 === Wz ? void 0 : Wz.direction) && void 0 !== tz ? tz : null,
                speed: sz
              }
            },
            onPointerMove: zz => {
              const tz = Kz.current;
              if (null === tz || zz.pointerId !== tz.pointerId) return;
              if (0 === zz.buttons) return void Tz(zz.clientX, zz.timeStamp);
              const sz = zz.clientX - tz.x;
              !tz.following && function(zz, tz) {
                return Math.abs(zz) > 8 && Math.abs(zz) > Math.abs(tz)
              }(sz, zz.clientY - tz.y) && (tz.following = !0, tz.direction = sz < 0 ? "Forward" : "Back", zz.currentTarget.setPointerCapture(zz.pointerId)), null !== tz.direction && (tz.speed.add(zz.clientX, zz.timeStamp), Ft(Nz.current[tz.direction], function(zz, tz, sz, Fz) {
                const Wz = sz * pz("Forward" === zz ? 0 : Fz) + tz;
                return Vz.c.clamp(fz(Wz / sz), 0, Fz)
              }(tz.direction, mz(tz, tz.direction, sz), tz.width, wz)))
            },
            onPointerUp: zz => {
              var tz;
              zz.pointerId === (null === (tz = Kz.current) || void 0 === tz ? void 0 : tz.pointerId) && Tz(zz.clientX, zz.timeStamp)
            },
            onPointerCancel: zz => {
              const tz = Kz.current;
              zz.pointerId === (null === tz || void 0 === tz ? void 0 : tz.pointerId) && (Kz.current = null, null !== tz.direction && rz(tz.direction, !1, 0, Dz))
            },
            children: (0, nz.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [Wz && jz("Left", Dz - 2, !0), jz("Right", Dz + 2 * bz - 1, !0), (0, nz.jsxs)("div", {
                ref: zz => {
                  Nz.current.Back = zz
                },
                className: "PlotsJournalLeaf Back",
                children: [jz("Recto", Dz - 1, !0), Wz && jz("Verso", Dz, !1)]
              }), (0, nz.jsxs)("div", {
                ref: zz => {
                  Nz.current.Forward = zz
                },
                className: "PlotsJournalLeaf Forward",
                children: [jz("Recto", Dz + bz - 1, !1), Wz && jz("Verso", Dz + bz, !0)]
              })]
            })
          }), (0, nz.jsx)(Xt, {
            direction: "Forward",
            disabled: !Hz,
            onTurn: Yz
          })]
        })
      })
    }

    function Xt(zz) {
      let {
        direction: tz,
        disabled: sz,
        onTurn: Fz
      } = zz;
      const {
        t: Wz
      } = (0, Gz.B)();
      return (0, nz.jsx)("div", {
        className: xz()("PlotsJournalArrow", tz),
        children: (0, nz.jsx)(Jz.h, {
          disabled: sz,
          ariaLabel: Wz("Forward" === tz ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            Fz(tz)
          },
          children: (0, nz.jsx)(mz.c, {
            name: "angle-up"
          })
        })
      })
    }
    var Ot = sz(36078),
      ot = sz(1845),
      vt = sz(1904);
    const Ut = "plotsStepChanged",
      Kt = "plotsPlotChanged";
    class ut {
      constructor() {
        this.step = ["none"], this.plot = ["none"]
      }
      getStep() {
        return this.step
      }
      receiveStep(zz) {
        this.step = zz, Kz.o.Yg(Ut, zz, !0)
      }
      getPlot() {
        return this.plot
      }
      receivePlot(zz) {
        this.plot = zz, Kz.o.Yg(Kt, zz, !0)
      }
    }
    const Nt = "KeyJ";

    function bt(zz) {
      let {
        hud: tz,
        journal: sz
      } = zz;
      const Fz = (0, ez.h)(Pz, sz.getPages()),
        Wz = (0, ez.h)(Ut, tz.getStep()),
        {
          isTouchScreen: Xz
        } = (0, oz.h)(["isTouchScreen"]),
        {
          t: Kz
        } = (0, Gz.B)(),
        uz = null !== Fz && "none" === Wz[0];
      return (0, Cz.d)((zz => null !== Fz && zz.code === Nt && !zz.repeat && !(0, Uz.isTypingInInput)()), (zz => {
        (0, vz.z)(zz, uz, Oz.s)
      })), uz ? (0, nz.jsx)(Ot.e, {
        placement: "topRight",
        children: (0, nz.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, nz.jsxs)("button", {
            type: "button",
            className: xz()("PlotsJournalButton SmallTextBold", {
              Touch: Xz
            }),
            onClick: Oz.s,
            children: [(0, nz.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, nz.jsx)(ot.c, {
                itemName: "Book",
                amount: 0
              })
            }), Kz("plotsGame:journalButton"), !Xz && (0, nz.jsx)(vt.b, {
              className: "PlotsJournalButtonKey",
              keyCode: Nt
            })]
          })
        })
      }) : null
    }
    var wt = sz(37834),
      Dt = sz(37627),
      gt = sz(36336),
      Ht = sz(8970),
      Bt = sz(8982),
      Pt = sz(37237);
    const rt = new Map([
        ["Aspen Wood Planks", [.78, .706, .502]],
        ["Barkless Aspen Log", [.792, .718, .518]],
        ["Barkless Pine Log", [.49, .353, .275]],
        ["Blue Planks", [.247, .267, .588]],
        ["Blue Wool", [.227, .267, .651]],
        ["Glass", [.702, .902, .882]],
        ["Green Wool", [.373, .467, .125]],
        ["Maple Ladder", [.612, .471, .29]],
        ["Maple Leaves", [.173, .443, .09]],
        ["Maple Log", [.486, .388, .255]],
        ["Maple Wood Planks", [.682, .561, .353]],
        ["Messy Stone", [.557, .58, .608]],
        ["Mossy Stone Bricks", [.49, .514, .541]],
        ["Orange Planks", [.949, .549, .231]],
        ["Orange Wool", [.988, .522, .129]],
        ["Pine Wood Planks", [.475, .341, .263]],
        ["Red Concrete", [.58, .157, .141]],
        ["Red Planks", [.608, .2, .184]],
        ["Red Wool", [.69, .173, .145]],
        ["Smooth Stone", [.627, .651, .678]],
        ["Stone Bricks", [.522, .545, .573]],
        ["White Concrete", [.89, .894, .894]],
        ["White Wool", [.98, .98, .98]]
      ]),
      Yt = [...gt.c.blockRemoveActionRoots, ...Dt.c, ...Ht.g, "Board", "Code Block", "Custom Lobby Block"],
      xt = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let mt = null;

    function Jt() {
      return mt ??= function() {
        const zz = It(),
          tz = Math.max(...zz.map((zz => Tz.j[zz].id))) + 1,
          sz = new Int32Array(tz),
          Fz = new Int32Array(tz),
          Wz = new Uint8Array(tz).fill(1),
          Xz = new Uint8Array(tz),
          Oz = new Uint8Array(tz),
          oz = new Array(tz).fill("Air"),
          vz = new Map,
          Uz = zz => {
            let tz = vz.get(zz);
            return void 0 === tz && (tz = vz.size + 1, vz.set(zz, tz)), tz
          },
          Kz = new Set(Yt);
        for (const Nz of zz) {
          var uz;
          const {
            id: zz,
            meta: tz,
            altActionable: vz,
            canBePlacedOver: bz
          } = Tz.j[Nz];
          sz[zz] = Uz(Ct(Nz));
          const wz = tz.stairsCorner;
          if (null === wz) Fz[zz] = sz[zz];
          else {
            const sz = wz.endsWith("Right");
            Fz[zz] = Uz(`${tz.rootName}|rot${sz?tz.rot%4+1:tz.rot}|${tz.halfblockPlacement}|${wz.replace("Right","Left")}`)
          }
          Wz[zz] = bz ? 1 : 0, Xz[zz] = vz || null !== tz.open || Nz in Pt.b || Kz.has(tz.rootName) || void 0 !== (0, Dt.d)(tz.rootName) ? 1 : 0;
          const {
            rootName: Dz
          } = tz;
          Oz[zz] = null !== tz.open || Dt.c.includes(Dz) || Dz.includes("Bookshelf") || Dz.includes("Mailbox") ? 1 : 0, oz[zz] = null !== (uz = (0, wt.e)(zz)) && void 0 !== uz ? uz : Dz
        }
        return {
          kinds: sz,
          shapes: Fz,
          empty: Wz,
          inUse: Xz,
          ownAltActionMessage: Oz,
          placingItems: oz
        }
      }(), mt
    }

    function It() {
      return Object.keys(Tz.j).filter((zz => Tz.j[zz].name === zz))
    }

    function Ct(zz) {
      var tz;
      const sz = Tz.j[zz],
        {
          rootName: Fz,
          rot: Wz
        } = sz.meta,
        [, ...Xz] = (null !== (tz = sz.rootMetaDesc) && void 0 !== tz ? tz : zz).split("|"),
        Oz = Xz.filter((zz => !("meta" === zz || xt.test(zz) || (0, Bt.z)(sz) && /^[nesw]+$/.test(zz) || Ht.g.includes(Fz) && /^[lrud]+$/.test(zz) || Vz.J.includes(Fz) && /^(left|right)$/.test(zz))));
      return [Fz, ...Oz].map((zz => "fenceGate" === sz.model && zz === `rot${Wz}` ? "rot" + ((Wz - 1) % 2 + 1) : zz)).join("|")
    }

    function et(zz, tz) {
      const {
        kinds: sz,
        shapes: Fz
      } = Jt();
      return sz[zz] === sz[tz] || Fz[zz] === Fz[tz]
    }

    function Zt(zz) {
      return 1 === Jt().empty[zz]
    }

    function Gt(zz) {
      return Jt().placingItems[zz]
    }

    function Tt(zz) {
      return rt.get(Tz.j[zz].meta.rootName)
    }
    var ct = sz(8963),
      jt = sz(8976);
    const At = [0, 0, 0, 1, 1, 1],
      yt = (0, ct.d)([
        [2, 0, 2, 6, 6, 6]
      ]),
      Mt = (0, ct.d)([
        [3, 0, 3, 5, 5, 5]
      ]),
      dt = (0, ct.d)([
        [3, 3, 3, 5, 8, 5]
      ]),
      ht = [0, 1, 2, 3].map((zz => (0, ct.d)((0, ct.m)([
        [3, 2, 0, 5, 7, 3]
      ], zz))));

    function Qt(zz) {
      const {
        wb: tz,
        model: sz,
        blockModel: Fz,
        meta: Wz
      } = Tz.j[zz];
      return void 0 !== tz ? tz : "CentreCross" === sz ? yt : null !== Fz && void 0 !== Fz && Fz.startsWith("torch") ? Wz.halfblockPlacement === jt.c.side ? ht[Wz.rot - 1] : Wz.halfblockPlacement === jt.c.top ? dt : Mt : At
    }
    var kt = sz(36311),
      it = sz(201);

    function Lt(zz, tz) {
      const sz = it.d.ZH / 2;
      return zz[0] < tz[0] + sz && zz[0] + 1 > tz[0] - sz && zz[1] < tz[1] + it.d.jH && zz[1] + 1 > tz[1] && zz[2] < tz[2] + sz && zz[2] + 1 > tz[2] - sz
    }

    function lt(zz, tz, sz, Fz, Wz) {
      const Xz = Math.hypot(...tz.dir);
      if (!Number.isFinite(Xz) || 0 === Xz) return -1;
      const {
        from: Oz,
        reach: oz,
        solid: vz
      } = tz, Uz = [tz.dir[0] / Xz, tz.dir[1] / Xz, tz.dir[2] / Xz], Kz = null === vz ? oz : Math.min(oz, function(zz, tz, sz) {
        const Fz = nt(zz, tz, sz);
        if (Fz !== 1 / 0) return Fz;
        return (sz[0] + .5 - zz[0]) * tz[0] + (sz[1] + .5 - zz[1]) * tz[1] + (sz[2] + .5 - zz[2]) * tz[2]
      }(Oz, Uz, vz) + .75);
      let uz = -1,
        Nz = 1 / 0,
        bz = 1 / 0;
      for (let wz = 0; wz < zz.length; wz += 4) {
        const tz = [zz[wz], zz[wz + 1], zz[wz + 2]],
          Xz = Wz(wz) ? oz : Kz;
        let vz = -1,
          Dz = nt(Oz, Uz, tz);
        if (Dz > Xz) {
          const zz = [tz[0] + .5 - Oz[0], tz[1] + .5 - Oz[1], tz[2] + .5 - Oz[2]];
          if (Dz = zz[0] * Uz[0] + zz[1] * Uz[1] + zz[2] * Uz[2], Dz <= 0 || Dz > Xz) continue;
          if (vz = Math.hypot(zz[0] - Dz * Uz[0], zz[1] - Dz * Uz[1], zz[2] - Dz * Uz[2]), vz > .7 || !Fz(wz)) continue
        }(vz < Nz || vz === Nz && Dz < bz) && sz(wz) && (uz = wz, Nz = vz, bz = Dz)
      }
      return uz
    }

    function nt(zz, tz, sz) {
      let Fz = 0,
        Wz = 1 / 0;
      for (let Xz = 0; Xz < 3; Xz++) {
        const Oz = sz[Xz] - zz[Xz];
        if (0 === tz[Xz]) {
          if (Oz > 0 || Oz + 1 < 0) return 1 / 0;
          continue
        }
        const oz = Oz / tz[Xz],
          vz = (Oz + 1) / tz[Xz];
        Fz = Math.max(Fz, Math.min(oz, vz)), Wz = Math.min(Wz, Math.max(oz, vz))
      }
      return Fz <= Wz ? Fz : 1 / 0
    }
    var qt = sz(37497),
      St = sz(37942);
    const Vt = [1, 1, 1];
    class Rt {
      constructor(zz) {
        this.api = zz, this.meshes = null, this.shown = null
      }
      show(zz) {
        if (!(0, kt.e)(zz, this.shown))
          if (this.shown = null === zz ? null : [zz[0], zz[1], zz[2]], null !== this.meshes)
            for (const tz of this.meshes) this.api.setGameMesh(tz, null === zz ? {
              visible: !1
            } : {
              anchor: zz,
              visible: !0
            });
          else if (null !== zz) {
          const tz = [qt.h, qt.h, qt.h, 0, 0, 0];
          this.meshes = [this.build([tz], qt.i, zz), this.build((0, qt.d)(), qt.l, zz)]
        }
      }
      dispose() {
        for (const tz of null !== (zz = this.meshes) && void 0 !== zz ? zz : []) {
          var zz;
          this.api.disposeGameMesh(tz)
        }
        this.meshes = null, this.shown = null
      }
      build(zz, tz, sz) {
        const Fz = [],
          Wz = [];
        for (const [Xz, Oz, oz, vz, Uz, Kz] of zz)(0, St.h)(Fz, Wz, [vz + .5, Uz + .5, Kz + .5], [Xz, Oz, oz]);
        return this.api.createGameMesh({
          positions: Fz,
          indices: Wz
        }, {
          rgb: Vt,
          alpha: tz,
          onTop: !0
        }, sz)
      }
    }
    class pt {
      constructor(zz) {
        this.api = zz, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(zz) {
        const tz = it.d.pw;
        this.chunks = [];
        for (let sz = 0; sz < zz.length; sz += 3) {
          const Fz = Math.floor(zz[sz] / tz),
            Wz = Math.floor(zz[sz + 1] / tz),
            Xz = Math.floor(zz[sz + 2] / tz);
          this.watches(Fz, Wz, Xz) || this.chunks.push(Fz, Wz, Xz)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const zz = performance.now();
        if (zz - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = zz;
        let tz = !1;
        for (let sz = 0; sz < this.chunks.length; sz += 3) {
          const zz = this.api.getChunkVersion(this.chunks[sz], this.chunks[sz + 1], this.chunks[sz + 2]);
          this.versions[sz / 3] !== zz && (this.versions[sz / 3] = zz, tz = !0)
        }
        return tz
      }
      watches(zz, tz, sz) {
        for (let Fz = 0; Fz < this.chunks.length; Fz += 3)
          if (this.chunks[Fz] === zz && this.chunks[Fz + 1] === tz && this.chunks[Fz + 2] === sz) return !0;
        return !1
      }
    }
    const ft = .35,
      Et = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      zs = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      ts = [.95, .2, .15];
    class ss {
      constructor() {
        this.groups = []
      }
      add(zz, tz, sz, Fz, Wz) {
        let Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : At;
        for (const Oz of this.groups)
          if (Xs(Oz, Fz, Wz)) return Oz.cells.push(zz, tz, sz), void Oz.boxes.push(Xz);
        this.groups.push({
          rgb: Fz,
          look: Wz,
          cells: [zz, tz, sz],
          boxes: [Xz]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class Fs {
      constructor(zz) {
        this.api = zz, this.shown = []
      }
      show(zz) {
        const tz = [];
        for (const sz of zz) {
          const zz = this.shown.findIndex((zz => {
            let {
              group: tz
            } = zz;
            return Xs(tz, sz.rgb, sz.look) && Os(tz, sz)
          })); - 1 === zz ? tz.push(this.build(sz)) : (tz.push(this.shown[zz]), this.shown.splice(zz, 1))
        }
        this.dispose(), this.shown = tz
      }
      dispose() {
        for (const {
            meshes: zz
          }
          of this.shown)
          for (const tz of zz) this.api.disposeGameMesh(tz);
        this.shown = []
      }
      build(zz) {
        const {
          rgb: tz,
          look: sz,
          boxes: Fz
        } = zz, Wz = [tz[0] + (1 - tz[0]) * ft, tz[1] + (1 - tz[1]) * ft, tz[2] + (1 - tz[2]) * ft], Xz = [this.buildMesh(zz.cells, tz, sz.alpha, ((zz, tz, Wz, Xz) => {
          Ws(zz, tz, Wz, Fz[Xz], sz.size, !1)
        })), this.buildMesh(zz.cells, Wz, sz.alpha, ((zz, tz, Wz, Xz) => {
          Ws(zz, tz, Wz, Fz[Xz], sz.size, !0)
        }))];
        return sz.crossed && Xz.push(this.buildMesh(zz.cells, tz, .9, ((zz, tz, Fz) => {
          (0, St.j)(zz, tz, Fz, sz.size + .01, .12)
        }))), {
          group: zz,
          meshes: Xz
        }
      }
      buildMesh(zz, tz, sz, Fz) {
        const Wz = [zz[0], zz[1], zz[2]],
          Xz = [],
          Oz = [];
        for (let oz = 0; oz < zz.length; oz += 3) Fz(Xz, Oz, [zz[oz] - Wz[0] + .5, zz[oz + 1] - Wz[1] + .5, zz[oz + 2] - Wz[2] + .5], oz / 3);
        return this.api.createGameMesh({
          positions: Xz,
          indices: Oz
        }, {
          rgb: [tz[0], tz[1], tz[2]],
          alpha: sz
        }, Wz)
      }
    }

    function Ws(zz, tz, sz, Fz, Wz, Xz) {
      for (let Oz = 0; Oz < Fz.length; Oz += 6) {
        const oz = [0, 0, 0],
          vz = [0, 0, 0];
        for (let zz = 0; zz < 3; zz++) oz[zz] = sz[zz] + ((Fz[Oz + zz] + Fz[Oz + zz + 3]) / 2 - .5) * Wz, vz[zz] = (Fz[Oz + zz + 3] - Fz[Oz + zz]) * Wz;
        (0, St.d)(zz, tz, oz, vz, Xz)
      }
    }

    function Xs(zz, tz, sz) {
      return zz.rgb[0] === tz[0] && zz.rgb[1] === tz[1] && zz.rgb[2] === tz[2] && zz.look === sz
    }

    function Os(zz, tz) {
      if (zz.cells.length !== tz.cells.length) return !1;
      for (let sz = 0; sz < zz.cells.length; sz++)
        if (zz.cells[sz] !== tz.cells[sz]) return !1;
      return zz.boxes.every(((zz, sz) => zz === tz.boxes[sz]))
    }

    function os(zz, tz) {
      return zz.getClientOption(tz, "blockReach") + 1
    }
    class vs {
      constructor(zz, tz, sz) {
        this.api = zz, this.localPlayerId = tz, this.pickNext = sz, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(zz) {
        const [tz, , sz] = zz.cameraDirection, Fz = Math.hypot(tz, sz);
        Fz > .001 && (this.heading = [tz / Fz, sz / Fz])
      }
      tapped(zz, tz, sz) {
        const Fz = os(this.api, this.localPlayerId),
          {
            origin: Wz,
            direction: Xz
          } = this.api.getActionRay(),
          Oz = [...Wz],
          oz = [
            [Oz, [Oz[0] + Xz[0] * Fz, Oz[1] + Xz[1] * Fz, Oz[2] + Xz[2] * Fz]]
          ];
        null !== zz && oz.push([Oz, (0, kt.c)(zz)]), this.tap = {
          lines: oz,
          next: tz,
          ms: sz
        }
      }
      filled(zz, tz) {
        this.tap = null, this.turnFrom(zz, tz), this.retry(tz)
      }
      arrived(zz, tz) {
        const {
          tap: sz
        } = this;
        if (null === sz || tz - sz.ms > 1500) return null;
        const Fz = (0, kt.c)(zz);
        return (0, kt.e)(sz.next, zz) || sz.lines.some((zz => {
          let [tz, sz] = zz;
          return function(zz, tz, sz) {
            const Fz = [sz[0] - tz[0], sz[1] - tz[1], sz[2] - tz[2]],
              Wz = [zz[0] - tz[0], zz[1] - tz[1], zz[2] - tz[2]],
              Xz = Fz[0] ** 2 + Fz[1] ** 2 + Fz[2] ** 2,
              Oz = 0 === Xz ? 0 : Math.min(1, Math.max(0, (Wz[0] * Fz[0] + Wz[1] * Fz[1] + Wz[2] * Fz[2]) / Xz));
            return Math.hypot(Wz[0] - Fz[0] * Oz, Wz[1] - Fz[1] * Oz, Wz[2] - Fz[2] * Oz)
          }(Fz, tz, sz) <= .9
        })) ? (this.tap = null, this.turnFrom(zz, tz), sz.ms) : null
      }
      turnFrom(zz, tz) {
        this.pending = {
          from: zz,
          ms: tz,
          turnMs: Math.max(50, Math.min(250, tz - this.lastFillMs))
        }, this.lastFillMs = tz
      }
      retry(zz) {
        const {
          pending: tz
        } = this;
        if (null === tz) return;
        if (zz - tz.ms > 1500) return void(this.pending = null);
        const sz = this.pickNext((0, kt.c)(tz.from), (zz => (0, kt.e)(zz, tz.from)));
        if (null === sz) return;
        this.pending = null;
        const {
          turning: Fz
        } = this;
        if (null !== Fz && zz < Fz.endMs && (0, kt.e)(Fz.to, sz)) return;
        const Wz = this.api.getActionRay().origin,
          Xz = [sz[0] + .5 - Wz[0], sz[1] + .5 - Wz[1], sz[2] + .5 - Wz[2]],
          Oz = Math.hypot(Xz[0], Xz[2]);
        if (Oz < .3) {
          const zz = Math.max(Oz, .001);
          Xz[0] = this.heading[0] * zz, Xz[2] = this.heading[1] * zz
        }
        this.api.turnCamera(Xz, tz.turnMs), this.turning = {
          to: sz,
          endMs: zz + tz.turnMs
        }
      }
    }
    class Us {
      constructor(zz, tz, sz) {
        this.api = zz, this.localPlayerId = tz, this.juice = sz, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.nextCells = [], this.lastFilled = null, this.lastSeenFilled = null, this.playerCells = [], this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = null, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new pt(zz), this.meshes = new Fs(zz), this.outline = new Rt(zz), this.turn = new vs(zz, tz, ((zz, tz) => this.pickNext(zz, tz)))
      }
      Sw(zz) {
        const tz = "active" === zz[0] ? `${zz[1]}|${zz[3]}|${zz[4]}|${zz[5]}|${zz[6]}` : "";
        if ("active" !== zz[0]) "built" === zz[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , sz, Fz, Wz, Xz] = zz;
          tz !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = sz) : sz === this.layerY ? this.burstUnlisted(Fz) : sz > this.layerY && this.finishLayer(sz), this.layerY = sz, this.layerCells.has(sz) || this.layerCells.set(sz, Fz.filter(us)), this.ghostCells = Fz, this.palette = Wz, this.occupiedCells = Xz
        }
        tz !== this.blueprint && (this.blueprint = tz, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((zz => this.api.blockNameToBlockId(zz))), this.chunkWatch.watch([...this.ghostCells.filter(us), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(zz) {
        this.burstUnlisted([]), zz > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = zz)
      }
      wN() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const zz = performance.now();
        let tz = !1;
        for (const [Wz, Xz] of this.foreseen) {
          var sz;
          if (zz - Xz > 1e3) this.foreseen.delete(Wz), tz = !0, (null === (sz = this.lastFilled) || void 0 === sz ? void 0 : sz.join()) === Wz && (this.lastFilled = this.lastSeenFilled)
        }
        const Fz = Ks(this.api.getPositionView(this.localPlayerId));
        (tz || Fz.some(((zz, tz) => zz !== this.playerCells[tz]))) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(zz) {
        const tz = new Set;
        for (let Wz = 0; Wz < zz.length; Wz += 4) tz.add(`${zz[Wz]},${zz[Wz+1]},${zz[Wz+2]}`);
        const sz = [],
          {
            ghostCells: Fz
          } = this;
        for (let Wz = 0; Wz < Fz.length; Wz += 4) {
          const zz = `${Fz[Wz]},${Fz[Wz+1]},${Fz[Wz+2]}`;
          !tz.has(zz) && this.open.delete(zz) && sz.push(this.filledCell(Wz))
        }
        this.burst(sz)
      }
      refresh() {
        const {
          ghostCells: zz,
          palette: tz,
          occupiedCells: sz
        } = this, Fz = new ss, Wz = new Set, Xz = [], Oz = [];
        for (let oz = 0; oz < zz.length; oz += 4) {
          const [sz, vz, Uz, Kz] = [zz[oz], zz[oz + 1], zz[oz + 2], zz[oz + 3]], uz = this.api.getBlockId(sz, vz, Uz), Nz = `${sz},${vz},${Uz}`, bz = et(this.blockIds[Kz], uz);
          !bz && Zt(uz) ? Fz.add(sz, vz, Uz, Tt(tz[Kz]), Et, Qt(tz[Kz])) : bz ? this.open.has(Nz) && Xz.push(this.filledCell(oz)) : Fz.add(sz, vz, Uz, ts, zs), !bz && this.api.isBlockInLoadedChunk(sz, vz, Uz) && (Wz.add(Nz), Oz.push(sz, vz, Uz, Zt(uz) ? 0 : 1))
        }
        this.open = Wz, this.nextCells = Oz;
        for (let oz = 0; oz < sz.length; oz += 3) {
          const [zz, tz, Wz] = [sz[oz], sz[oz + 1], sz[oz + 2]];
          Zt(this.api.getBlockId(zz, tz, Wz)) || Fz.add(zz, tz, Wz, ts, zs)
        }
        this.meshes.show(Fz.toArray()), this.burst(Xz), this.showNext(), this.turn.retry(performance.now())
      }
      burst(zz) {
        const tz = performance.now(),
          sz = [];
        for (const [Wz, Xz, Oz] of zz) {
          const zz = [Wz, Xz, Oz];
          this.lastSeenFilled = zz, this.foreseen.delete(zz.join()) || sz.push(zz)
        }
        const Fz = this.isHolding(tz);
        for (const Wz of sz) {
          if (this.lastFilled = Wz, Fz && this.pressFilled) {
            this.turn.filled(Wz, tz);
            continue
          }
          const zz = this.turn.arrived(Wz, tz);
          if (null !== zz) {
            this.pressFilled = Fz;
            for (const [tz, sz] of this.foreseen) sz <= zz && this.foreseen.delete(tz)
          }
        }
        this.juice.filled(zz)
      }
      showNext() {
        var zz;
        const tz = this.api.getPositionView(this.localPlayerId);
        this.playerCells.splice(0, 1 / 0, ...Ks(tz));
        const sz = this.lastFilled;
        this.nextCell = this.pickNext(null === sz ? [tz[0], tz[1] + 1, tz[2]] : (0, kt.c)(sz), (() => !1)), this.outline.show(null !== (zz = this.aimed) && void 0 !== zz ? zz : this.nextCell)
      }
      pickNext(zz, tz) {
        const sz = this.api.getPositionView(this.localPlayerId),
          Fz = [sz[0], sz[1] + it.d.jH * it.d.playerEyeToHeightRatio, sz[2]],
          Wz = os(this.api, this.localPlayerId),
          {
            nextCells: Xz
          } = this,
          Oz = zz => [Xz[zz], Xz[zz + 1], Xz[zz + 2]],
          oz = function(zz, tz, sz, Fz, Wz, Xz) {
            let Oz = -1,
              oz = -1,
              vz = 1 / 0;
            for (let Uz = 0; Uz < zz.length; Uz += tz) {
              const tz = (Xz(Uz) ? 2 : 0) + (Fz(Uz) ? 1 : 0);
              if (tz < oz || Wz(Uz)) continue;
              const Kz = (zz[Uz] + .5 - sz[0]) ** 2 + (zz[Uz + 1] + .5 - sz[1]) ** 2 + (zz[Uz + 2] + .5 - sz[2]) ** 2;
              (tz > oz || Kz < vz) && (Oz = Uz, oz = tz, vz = Kz)
            }
            return Oz
          }(Xz, 4, zz, (zz => 1 === Xz[zz + 3]), (zz => {
            const Fz = Oz(zz);
            return Lt(Fz, sz) || this.foreseen.has(Fz.join()) || tz(Fz)
          }), (zz => function(zz, tz, sz) {
            return (tz[0] + .5 - zz[0]) ** 2 + (tz[1] + .5 - zz[1]) ** 2 + (tz[2] + .5 - zz[2]) ** 2 <= sz ** 2
          }(Fz, Oz(zz), Wz)));
        return -1 === oz ? null : Oz(oz)
      }
      afterRender(zz) {
        var tz;
        this.turn.look(zz);
        const sz = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === sz ? null : sz.position), this.outline.show(null !== (tz = this.aimed) && void 0 !== tz ? tz : this.nextCell)
      }
      isHolding(zz) {
        return null !== this.altMs && zz - this.altMs <= 500
      }
      attemptAltAction(zz) {
        const tz = performance.now();
        if (this.isHolding(tz) || (this.pressFilled = !1), this.altMs = tz, this.pressFilled) return "preventPlacement";
        const sz = this.findAimed(zz);
        if (null !== sz) return this.foreseen.set(sz.join(), tz), this.lastFilled = sz, this.aimed = null, this.showNext(), this.turn.filled(sz, tz), this.pressFilled = !0, "preventPlacement";
        null !== this.nextCell && this.turn.tapped(zz, this.nextCell, tz)
      }
      findAimed(zz) {
        return function(zz, tz, sz, Fz, Wz, Xz, Oz) {
          const oz = zz.rtz(tz),
            vz = null === oz || null === zz.blockNameToBlockId(oz.name, !0) ? null : oz.name,
            Uz = zz.getPositionView(tz),
            {
              origin: Kz,
              direction: uz
            } = zz.getActionRay(),
            Nz = lt(Fz, {
              from: Kz,
              dir: uz,
              reach: os(zz, tz),
              solid: sz
            }, (tz => {
              const sz = [Fz[tz], Fz[tz + 1], Fz[tz + 2]];
              return !et(Wz[Fz[tz + 3]], zz.getBlockId(...sz)) && !Oz.has(sz.join()) && zz.isBlockInLoadedChunk(...sz) && !Lt(sz, Uz)
            }), (zz => null === vz || vz === Gt(Wz[Fz[zz + 3]])), (zz => null !== Xz && Fz[zz] === Xz[0] && Fz[zz + 1] === Xz[1] && Fz[zz + 2] === Xz[2]));
          return -1 === Nz ? null : [Fz[Nz], Fz[Nz + 1], Fz[Nz + 2]]
        }(this.api, this.localPlayerId, zz, this.ghostCells, this.blockIds, this.nextCell, this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(zz) {
        const {
          ghostCells: tz
        } = this, [sz, Fz, Wz] = Tt(this.palette[tz[zz + 3]]);
        return [tz[zz], tz[zz + 1], tz[zz + 2], sz, Fz, Wz]
      }
    }

    function Ks(zz) {
      let [tz, sz, Fz] = zz;
      const Wz = it.d.ZH / 2;
      return [Math.floor(tz), Math.floor(sz), Math.floor(Fz), Math.floor(tz - Wz), Math.floor(tz + Wz), Math.floor(sz + it.d.jH), Math.floor(Fz - Wz), Math.floor(Fz + Wz)]
    }

    function us(zz, tz) {
      return tz % 4 !== 3
    }

    function Ns(zz, tz, sz, Fz, Wz) {
      if (!zz.isBlockInLoadedChunk(tz, Fz - 6, sz) || !zz.isBlockInLoadedChunk(tz, Fz + 6 + Wz, sz) || !zz.canModifyBlockAt(tz, Fz, sz)) return NaN;
      let Xz = Fz - 1;
      if (0 !== zz.getBlockId(tz, Xz, sz)) {
        for (; Xz < Fz + 6 && 0 !== zz.getBlockId(tz, Xz + 1, sz);) Xz++;
        return Xz
      }
      for (; Xz > Fz - 6;)
        if (Xz--, 0 !== zz.getBlockId(tz, Xz, sz)) return Xz;
      return NaN
    }

    function bs(zz, tz, sz, Fz, Wz) {
      let Xz = 0;
      for (let Oz = Fz + 1; Oz <= Fz + Wz; Oz++) 0 !== zz.getBlockId(tz, Oz, sz) && Xz++;
      return Xz
    }

    function ws(zz) {
      const tz = new Map;
      for (const Oz of zz) {
        var sz;
        if (Number.isNaN(Oz)) return null;
        tz.set(Oz, (null !== (sz = tz.get(Oz)) && void 0 !== sz ? sz : 0) + 1)
      }
      let Fz = NaN,
        Wz = 0;
      for (const [Oz, oz] of tz)(oz > Wz || oz === Wz && Oz < Fz) && (Fz = Oz, Wz = oz);
      let Xz = 0;
      for (const Oz of zz) Xz += Math.abs(Oz - Fz);
      return Xz
    }

    function Ds(zz, tz, sz, Fz) {
      const {
        eye: Wz,
        forward: Xz,
        tanHalfFovX: Oz,
        tanHalfFovY: oz
      } = zz, [vz, Uz] = function(zz) {
        let [tz, sz, Fz] = zz;
        const Wz = Math.hypot(tz, Fz),
          [Xz, Oz] = [Fz / Wz, -tz / Wz];
        return [
          [Xz, 0, Oz],
          [sz * Oz, Fz * Xz - tz * Oz, -sz * Xz]
        ]
      }(Xz), [Kz, uz] = [tz * Oz, sz * oz], Nz = Xz[0] + Kz * vz[0] + uz * Uz[0], bz = Xz[1] + uz * Uz[1], wz = Xz[2] + Kz * vz[2] + uz * Uz[2], Dz = (Fz - Wz[1]) / bz;
      return Dz > 0 && Dz < 1 / 0 ? [Wz[0] + Dz * Nz, Wz[2] + Dz * wz] : null
    }
    const gs = "plotsBlueprintPlacementChanged",
      Hs = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class Bs {
      constructor(zz, tz) {
        this.api = zz, this.localPlayerId = tz, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = zz => {
          var tz, sz, Fz, Xz;
          const Oz = null !== (tz = null === (sz = this.placing) || void 0 === sz ? void 0 : sz.rotation) && void 0 !== tz ? tz : 0,
            {
              size: oz
            } = Lz(zz, Oz),
            vz = this.api.yB(this.localPlayerId),
            [Uz, Kz] = null !== (Fz = null !== (Xz = function(zz, tz, sz) {
              const [Fz, Wz, Xz] = tz, [Oz, oz, vz] = [Math.floor(sz[0]), Math.floor(sz[1]), Math.floor(sz[2])], Uz = 6 + Math.max(Fz, Xz) / 2, [Kz, uz] = [Math.ceil(Uz + Fz / 2), Math.ceil(Uz + Xz / 2)], [Nz, bz] = [Oz - Kz, vz - uz], [wz, Dz] = [2 * Kz + 1, 2 * uz + 1], gz = new Float64Array(wz * Dz), Hz = new Uint16Array(wz * Dz);
              for (let Yz = 0; Yz < wz; Yz++)
                for (let tz = 0; tz < Dz; tz++) {
                  const sz = Ns(zz, Nz + Yz, bz + tz, oz, Wz);
                  gz[Yz * Dz + tz] = sz, Number.isNaN(sz) || (Hz[Yz * Dz + tz] = bs(zz, Nz + Yz, bz + tz, sz, Wz))
                }
              const Bz = [];
              let Pz = null,
                rz = 1 / 0;
              for (let Yz = 0; Yz + Fz <= wz; Yz++)
                for (let zz = 0; zz + Xz <= Dz; zz++) {
                  const [tz, Wz] = [Nz + Yz, bz + zz], oz = Math.hypot(tz + Fz / 2 - sz[0], Wz + Xz / 2 - sz[2]);
                  if (oz > Uz || Oz >= tz - 2 && Oz < tz + Fz + 2 && vz >= Wz - 2 && vz < Wz + Xz + 2) continue;
                  Bz.length = 0;
                  let Kz = 0;
                  for (let sz = 0; sz < Fz; sz++)
                    for (let tz = 0; tz < Xz; tz++) Bz.push(gz[(Yz + sz) * Dz + zz + tz]), Kz += Hz[(Yz + sz) * Dz + zz + tz];
                  const uz = ws(Bz);
                  if (null === uz) continue;
                  const wz = oz + 3 * (uz + Kz);
                  wz < rz && (rz = wz, Pz = [tz, Wz])
                }
              return Pz
            }(this.api, oz, vz)) && void 0 !== Xz ? Xz : this.cornerOnTarget(oz)) && void 0 !== Fz ? Fz : [Math.floor(vz[0]) + 2, Math.floor(vz[2])];
          this.placing = {
            id: zz,
            rotation: Oz,
            corner: [Uz, this.playerLevel(), Kz],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null
          }, this.update(), this.api.sendCommand(`${Wz} preview`)
        }, this.rotate = () => {
          const {
            id: zz,
            rotation: tz,
            corner: sz
          } = this.placing, Wz = Fz[(Fz.indexOf(tz) + 1) % Fz.length], [Xz, , Oz] = Lz(zz, tz).size, [oz, , vz] = Lz(zz, Wz).size;
          this.moveTo(sz[0] + Math.floor(Xz / 2) - Math.floor(oz / 2), sz[2] + Math.floor(Oz / 2) - Math.floor(vz / 2), Wz)
        }, this.hoverAt = (zz, tz) => {
          this.placing.hover = [zz, tz], this.moveCentreTo(this.camera, zz, tz)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (zz, tz) => {
          const sz = this.placing,
            {
              eye: Fz,
              forward: Wz,
              tanHalfFovX: Xz,
              tanHalfFovY: Oz
            } = this.camera,
            oz = {
              eye: [Fz[0], Fz[1], Fz[2]],
              forward: [Wz[0], Wz[1], Wz[2]],
              tanHalfFovX: Xz,
              tanHalfFovY: Oz
            },
            vz = sz.corner[1],
            Uz = Ds(oz, zz, tz, vz);
          sz.hover = null, sz.drag = Uz && {
            view: oz,
            ground: Uz,
            corner: [sz.corner[0], sz.corner[2]],
            level: vz
          }
        }, this.dragTo = (zz, tz) => {
          const sz = this.placing.drag,
            Fz = sz && Ds(sz.view, zz, tz, sz.level);
          null !== sz && null !== Fz && this.moveTo(sz.corner[0] + Math.round(Fz[0] - sz.ground[0]), sz.corner[1] + Math.round(Fz[1] - sz.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const zz = this.view;
          zz.waiting || (zz.blocked ? this.Yg({
            ...zz,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const zz = this.placing,
            {
              id: tz,
              rotation: sz,
              corner: Fz
            } = zz;
          this.api.sendCommand(`${Wz} place ${tz} ${Fz.join(" ")} ${sz}`), zz.sent = {
            atMs: performance.now(),
            corner: [...Fz],
            rotation: sz,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${Wz} preview off`))
        }, this.chunkWatch = new pt(zz), this.meshes = new Fs(zz)
      }
      getView() {
        return this.view
      }
      wN() {
        const zz = this.placing;
        null !== zz && (null !== zz.sent && !zz.sent.timedOut && performance.now() - zz.sent.atMs > 3e3 ? (zz.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(zz) || this.chunkWatch.changed()) && this.update())
      }
      afterRender(zz) {
        const tz = this.placing;
        null !== tz && (! function(zz, tz) {
          for (let sz = 0; sz < 3; sz++) tz.eye[sz] = zz.cameraPosition[sz], tz.forward[sz] = zz.cameraDirection[sz];
          tz.tanHalfFovX = zz.tanHalfFovX, tz.tanHalfFovY = zz.tanHalfFovY
        }(zz, this.camera), null !== tz.hover && this.moveCentreTo(this.camera, tz.hover[0], tz.hover[1]))
      }
      Sw(zz) {
        const tz = this.placing;
        if (null === tz || null === tz.sent || "active" !== zz[0]) return;
        const {
          sent: sz
        } = tz, [, Fz, Wz, Xz, Oz, oz, vz] = zz;
        Wz && Fz === tz.id && vz === sz.rotation && Xz === sz.corner[0] && Oz === sz.corner[1] && oz === sz.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(zz) {
        let [tz, , sz] = zz;
        const Fz = this.api.getTargetedBlock();
        if (null === Fz) return null;
        const [Wz, , Xz] = Fz.position;
        return [Wz - Math.floor(tz / 2), Xz - Math.floor(sz / 2)]
      }
      playerLevel() {
        var zz;
        const [tz, sz, Fz] = this.api.yB(this.localPlayerId);
        if (null !== (zz = this.api.getLocalPlayerMovement()) && void 0 !== zz && zz.onGround) return Math.ceil(sz - .01);
        const [Wz, Xz, Oz] = [Math.floor(tz), Math.floor(sz), Math.floor(Fz)];
        for (let oz = Xz; oz >= Xz - 2; oz--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(Wz, oz, Oz))) return oz + 1;
        return Xz
      }
      followPlayerLevel(zz) {
        if (Ps(zz)) return !1;
        const tz = this.playerLevel();
        return tz !== zz.corner[1] && (zz.corner[1] = tz, !0)
      }
      moveCentreTo(zz, tz, sz) {
        const Fz = this.placing,
          Wz = Ds(zz, tz, sz, Fz.corner[1]);
        if (null !== Wz) {
          const [zz, , tz] = Lz(Fz.id, Fz.rotation).size;
          this.moveTo(Math.round(Wz[0] - zz / 2), Math.round(Wz[1] - tz / 2))
        }
      }
      moveTo(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const Fz = this.placing;
        if (Ps(Fz)) return;
        const [Wz, Xz, Oz] = Fz.corner;
        if (this.centreOnPlot(Wz, Oz) && !this.centreOnPlot(zz, tz, sz))
          if (this.centreOnPlot(zz, Oz, sz)) tz = Oz;
          else {
            if (!this.centreOnPlot(Wz, tz, sz)) return;
            zz = Wz
          } zz === Wz && tz === Oz && sz === Fz.rotation || (Fz.rotation = sz, Fz.corner = [zz, Xz, tz], this.update())
      }
      centreOnPlot(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: Fz,
          corner: Wz
        } = this.placing, [Xz, , Oz] = Lz(Fz, sz).size;
        return this.api.canModifyBlockAt(zz + Math.floor(Xz / 2), Wz[1], tz + Math.floor(Oz / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.Yg(null)
      }
      update() {
        const {
          id: zz,
          rotation: tz,
          corner: sz,
          refusals: Fz
        } = this.placing, Wz = new ss, Xz = [];
        let Oz = !1,
          oz = 0;
        for (const {
            offset: Kz,
            block: uz
          }
          of Lz(zz, tz).cells) {
          const [zz, tz, Fz] = [sz[0] + Kz[0], sz[1] + Kz[1], sz[2] + Kz[2]];
          Xz.push(zz, tz, Fz);
          const vz = !this.api.canModifyBlockAt(zz, tz, Fz),
            Uz = this.api.getBlockId(zz, tz, Fz),
            Nz = !Zt(Uz) && !et(this.api.blockNameToBlockId(uz), Uz);
          Oz ||= vz, oz += Nz ? 1 : 0, vz || Nz ? Wz.add(zz, tz, Fz, ts, zs) : Wz.add(zz, tz, Fz, Tt(uz), Hs, Qt(uz))
        }
        this.chunkWatch.watch(Xz), this.meshes.show(Wz.toArray());
        const vz = this.view,
          Uz = Ps(this.placing);
        (null === vz || void 0 === vz ? void 0 : vz.id) === zz && vz.blocked === Oz && vz.toClear === oz && vz.waiting === Uz && vz.refusals === Fz || this.Yg({
          id: zz,
          blocked: Oz,
          toClear: oz,
          waiting: Uz,
          refusals: Fz
        })
      }
      Yg(zz) {
        this.view = zz, Kz.o.Yg(gs, zz, !0)
      }
    }

    function Ps(zz) {
      let {
        sent: tz
      } = zz;
      return null !== tz && !tz.timedOut
    }
    var rs = sz(3926),
      Ys = sz(38555);

    function xs(zz, tz, sz) {
      const Fz = [255 * zz, 255 * tz, 255 * sz],
        [Wz, Xz, Oz] = Fz.map((zz => zz + .4 * (255 - zz)));
      return {
        texture: "square_particle",
        au: 48,
        minLifeTime: .3 / Ys.b,
        maxLifeTime: .55 / Ys.b,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * Ys.b * Ys.b, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...Fz, 1],
          maxColor: [Wz, Xz, Oz, 1]
        }, {
          timeFraction: 1,
          minColor: [...Fz, 0],
          maxColor: [Wz, Xz, Oz, 0]
        }],
        blendMode: rs.f.Standard
      }
    }
    const ms = {
      texture: "glint",
      mipmaps: !1,
      au: 96,
      minLifeTime: .5 / Ys.b,
      maxLifeTime: .9 / Ys.b,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * Ys.b * Ys.b, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: rs.f.OneOne
    };
    class Is {
      constructor(zz, tz) {
        this.api = zz, this.localPlayerId = tz, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(zz) {
        if (this.api.particlesEnabled())
          for (const [tz, sz, Fz, Wz, Xz, Oz] of zz.slice(0, 3)) {
            const zz = `${Wz},${Xz},${Oz}`;
            let oz = this.chips.get(zz);
            void 0 === oz && (oz = this.api.createParticles(xs(Wz, Xz, Oz), {
              pos: [tz + .5, sz + .5, Fz + .5]
            }), this.chips.set(zz, oz));
            for (let tz = 0; tz < 8; tz++) this.setPoint(tz, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            oz.emitPoints([tz + .5, sz + .5, Fz + .5], this.points, 8)
          }
      }
      layerDone(zz) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const tz = zz.length / 3;
        if (0 === tz || !this.api.particlesEnabled()) return;
        const sz = Math.min(tz, 48),
          [Fz, Wz, Xz] = [zz[0] + .5, zz[1] + 1, zz[2] + .5];
        let Oz = 0;
        for (let oz = 0; oz < sz; oz++) {
          const vz = 3 * Math.floor(oz * tz / sz);
          for (let tz = 0; tz < 2; tz++) this.setPoint(Oz++, zz[vz] + Math.random() - Fz, zz[vz + 1] + 1 - Wz, zz[vz + 2] + Math.random() - Xz, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(ms, {
          pos: [Fz, Wz, Xz]
        }), this.sparkles.emitPoints([Fz, Wz, Xz], this.points, Oz)
      }
      dispose() {
        var zz;
        for (const tz of this.chips.values()) tz.stop();
        this.chips.clear(), null === (zz = this.sparkles) || void 0 === zz || zz.stop(), this.sparkles = null
      }
      setPoint(zz, tz, sz, Fz, Wz) {
        const Xz = 4 * zz;
        this.points[Xz] = tz, this.points[Xz + 1] = sz, this.points[Xz + 2] = Fz, this.points[Xz + 3] = Wz
      }
    }
    var Cs = sz(1910);
    const es = "SpecialAction1",
      Zs = "KeyY",
      Gs = "KeyX";

    function Ts(zz) {
      let {
        placement: tz
      } = zz;
      const sz = (0, ez.h)(gs, tz.getView()),
        {
          t: Fz
        } = (0, Gz.B)(),
        {
          isTouchScreen: Wz
        } = (0, oz.h)(["isTouchScreen"]),
        Xz = null !== sz,
        Oz = Xz && !sz.blocked && !sz.waiting;
      if ((0, Cz.d)((zz => Xz && !zz.repeat && !(0, Uz.isTypingInInput)() && !(0, vz.r)() && !Wz), (zz => {
          const sz = function(zz, tz, sz) {
            if (zz === Gs) return tz.stop;
            if (zz === Zs) return sz ? tz.build : As;
            return Cs.x[es].includes(zz) ? tz.rotate : null
          }(zz.code, tz, Oz);
          null !== sz && (zz.stopPropagation(), sz())
        })), !Xz) return null;
      let Kz = Wz ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return sz.blocked ? Kz = "plotsGame:placementOffPlot" : sz.toClear > 0 && (Kz = "plotsGame:placementClear"), (0, nz.jsx)(Ot.e, {
        placement: "bottom",
        children: (0, nz.jsxs)("div", {
          className: "PlotsPlacementCard",
          children: [(0, nz.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: Fz(wz(sz.id).displayName.translationKey)
          }), (0, nz.jsx)("div", {
            className: xz()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: sz.refusals > 0
            }),
            children: Fz(Kz)
          }, sz.refusals), (0, nz.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, nz.jsxs)(Jz.h, {
              onClick: tz.rotate,
              children: [(0, nz.jsx)(cs, {
                noaAction: es
              }), Fz("plotsGame:placementRotate")]
            }), (0, nz.jsxs)(Jz.H, {
              onClick: tz.stop,
              children: [(0, nz.jsx)(cs, {
                keyCode: Gs
              }), Fz("general:cancel")]
            }), (0, nz.jsxs)(Jz.p, {
              disabled: !Oz,
              onClick: tz.build,
              children: [(0, nz.jsx)(cs, {
                keyCode: Zs
              }), Fz("plotsGame:placementBuild")]
            })]
          })]
        })
      })
    }

    function cs(zz) {
      return (0, nz.jsx)(vt.b, {
        className: "PlotsPlacementKey",
        ...zz
      })
    }

    function As() {}
    var ys = sz(4180);
    class Ms {
      constructor(zz) {
        this.placement = zz, this.press = null
      }
      down(zz) {
        if (null !== this.press) return !1;
        const {
          id: tz,
          mouse: sz,
          x: Fz,
          y: Wz,
          atMs: Xz
        } = zz;
        return this.press = {
          id: tz,
          mouse: sz,
          x: Fz,
          y: Wz,
          atMs: Xz,
          moved: !1
        }, sz || this.placement.beginDrag(zz.ndcX, zz.ndcY), !0
      }
      move(zz) {
        const tz = this.press;
        null !== tz && tz.id === zz.id && (tz.moved ||= Math.hypot(zz.x - tz.x, zz.y - tz.y) > 8), zz.mouse ? this.placement.hoverAt(zz.ndcX, zz.ndcY) : (null === tz || void 0 === tz ? void 0 : tz.id) === zz.id && this.placement.dragTo(zz.ndcX, zz.ndcY)
      }
      up(zz) {
        const tz = this.press;
        (null === tz || void 0 === tz ? void 0 : tz.id) === zz.id && (this.move(zz), this.end(), !tz.moved && (tz.mouse || zz.atMs - tz.atMs <= 250) && this.placement.tap())
      }
      cancel(zz) {
        var tz;
        (null === (tz = this.press) || void 0 === tz ? void 0 : tz.id) === zz && this.end()
      }
      leave(zz) {
        let {
          id: tz,
          mouse: sz
        } = zz;
        sz && this.placement.endHover(), this.cancel(tz)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }

    function ds(zz) {
      let {
        placement: tz
      } = zz;
      return null === (0, ez.h)(gs, tz.getView()) ? null : (0, nz.jsx)(hs, {
        placement: tz
      })
    }

    function hs(zz) {
      let {
        placement: tz
      } = zz;
      (0, ys.b)(!0, !0, "PlotsPlacementLayer");
      const sz = (0, Xz.useMemo)((() => new Ms(tz)), [tz]);
      return (0, nz.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: zz => {
          "mouse" === zz.pointerType && 0 !== zz.button || !sz.down(Qs(zz)) || zz.currentTarget.setPointerCapture(zz.pointerId)
        },
        onPointerMove: zz => {
          sz.move(Qs(zz))
        },
        onPointerUp: zz => {
          sz.up(Qs(zz))
        },
        onPointerCancel: zz => {
          sz.cancel(zz.pointerId)
        },
        onLostPointerCapture: zz => {
          sz.cancel(zz.pointerId)
        },
        onPointerLeave: zz => {
          sz.leave(Qs(zz))
        },
        "aria-hidden": !0
      })
    }

    function Qs(zz) {
      const {
        left: tz,
        top: sz,
        width: Fz,
        height: Wz
      } = zz.currentTarget.getBoundingClientRect();
      return {
        id: zz.pointerId,
        mouse: "mouse" === zz.pointerType,
        x: zz.clientX,
        y: zz.clientY,
        ndcX: (zz.clientX - tz) / Fz * 2 - 1,
        ndcY: 1 - (zz.clientY - sz) / Wz * 2,
        atMs: zz.timeStamp
      }
    }
    var ks = sz(2257),
      is = sz(36169),
      Ls = sz(1901),
      ls = sz(1244);
    const ns = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function as(zz) {
      let {
        hud: tz
      } = zz;
      const sz = (0, ez.h)(Kt, tz.getPlot()),
        [Fz, Wz] = (0, Xz.useState)(null),
        Oz = (0, is.k)(Fz);
      if ("none" === sz[0]) return null;
      const [, oz, vz, Uz, Kz, uz] = sz;
      return (0, nz.jsx)("div", {
        className: xz()("PlotsPlotBannerContainer", {
          Below: Oz
        }),
        children: (0, nz.jsx)(qs, {
          plotX: oz,
          plotZ: vz,
          ownerName: Uz,
          ownerId: Kz,
          relation: uz,
          plaqueRef: Wz
        }, `${oz},${vz}`)
      })
    }

    function qs(zz) {
      var tz, sz;
      let {
        plotX: Fz,
        plotZ: Wz,
        ownerName: Xz,
        ownerId: Oz,
        relation: oz,
        plaqueRef: vz
      } = zz;
      const {
        t: Uz
      } = (0, Gz.B)(), Kz = (0, Ls.l)("hiddenPlayerNames"), uz = (0, Ls.l)("players"), Nz = null === Oz ? null : null !== (tz = null === (sz = uz.byId[Oz]) || void 0 === sz ? void 0 : sz.cosmetics) && void 0 !== tz ? tz : null, bz = Uz("plotsGame:plotBannerCoords", {
        x: Fz,
        z: Wz
      }), wz = "own" === oz || null !== Xz;
      return (0, nz.jsxs)("div", {
        ref: vz,
        className: xz()("PlotsPlotBanner", {
          Own: "own" === oz,
          Shared: "shared" === oz
        }),
        role: "status",
        children: [(0, nz.jsxs)("span", {
          className: xz()("PlotsPlotBannerSeal", {
            Face: null !== Nz
          }),
          children: [null !== Nz && (0, nz.jsx)(ks.e, {
            cosmetics: Nz
          }), null === Nz && (0, nz.jsx)(mz.c, {
            name: ns[oz]
          })]
        }), (0, nz.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, nz.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === oz && Uz("plotsGame:plotBannerYours"), "own" !== oz && null !== Xz && Uz("plotsGame:plotBannerOwner", {
              name: (0, ls.g)(Xz, Kz)
            }), !wz && bz]
          }), wz && (0, nz.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [bz, "shared" === oz && (0, nz.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: Uz("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }

    function Ss(zz) {
      let {
        progress: tz,
        goal: sz
      } = zz;
      const Fz = Math.min(tz, sz);
      return (0, nz.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, nz.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": sz,
          "aria-valuenow": Fz,
          children: (0, nz.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${Fz/sz})`
            }
          })
        }), (0, nz.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [Fz, "/", sz]
        })]
      })
    }

    function Vs(zz) {
      return {
        translationKey: `plotsGame:${zz}`,
        actions: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
      }
    }
    const Rs = {
      house: {
        icon: "house",
        titleKey: "plotsGame:starterLotHouseTitle",
        desktop: Vs("starterLotHouseHint", ["alt-fire"]),
        touch: Vs("starterLotHouseHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotHousePlain"
      },
      garden: {
        icon: "sparkle",
        titleKey: "plotsGame:starterLotGarden",
        desktop: Vs("starterLotGardenHint", ["alt-fire"]),
        touch: Vs("starterLotGardenHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotGardenPlain"
      },
      boulder: {
        icon: "hammer",
        titleKey: "plotsGame:starterLotBoulder",
        desktop: Vs("starterLotBreakHint", ["primary-fire"]),
        touch: Vs("starterLotBreakHintTouch"),
        plainKey: "plotsGame:starterLotBreakPlain"
      },
      fly: {
        icon: "angles-up",
        titleKey: "plotsGame:starterLotFly",
        desktop: Vs("starterLotFlyHint", ["jump"]),
        touch: Vs("starterLotFlyHintTouch"),
        plainKey: "plotsGame:starterLotFlyPlain"
      },
      backpack: {
        icon: "backpack",
        titleKey: "plotsGame:starterLotBackpack",
        desktop: Vs("starterLotBackpackHint", ["OpenInventory"]),
        touch: Vs("starterLotBackpackHintTouch"),
        plainKey: "plotsGame:starterLotBackpackPlain"
      },
      neighbour: {
        icon: "person",
        titleKey: "plotsGame:starterLotNeighbour",
        desktop: Vs("starterLotNeighbourHint", ["forward", "left", "backward", "right"]),
        touch: Vs("starterLotNeighbourHintTouch"),
        plainKey: "plotsGame:starterLotNeighbourPlain"
      }
    };

    function ps(zz, tz, sz) {
      const {
        translationKey: Fz,
        actions: Wz
      } = sz ? tz.touch : tz.desktop;
      if (0 === Wz.length) return zz(Fz);
      const Xz = [];
      for (const Oz of Wz) {
        const Fz = (0, Cs.v)(Oz, sz),
          Wz = Cs.x[Oz][0];
        if (null === Fz && void 0 === Wz) return zz(tz.plainKey);
        Xz.push(null === Fz ? (0, Cs.r)(Wz) : zz(Fz.translationKey))
      }
      return zz(Fz, {
        key: Xz.join("")
      })
    }

    function fs(zz) {
      let {
        hud: tz
      } = zz;
      const sz = (0, ez.h)(Ut, tz.getStep()),
        {
          t: Fz
        } = (0, Gz.B)();
      return (0, nz.jsxs)(Ot.e, {
        placement: "bottom",
        children: ["step" === sz[0] && (0, nz.jsx)(Es, {
          step: sz[1],
          progress: sz[2],
          goal: sz[3]
        }, sz[1]), "celebrate" === sz[0] && (0, nz.jsx)(zF, {
          className: xz()("Celebrate", {
            Gold: "house" === sz[1]
          }),
          icon: "star",
          title: Fz("house" === sz[1] ? "plotsGame:starterLotYourPlot" : "plotsGame:starterLotBriefDone")
        }, `celebrate-${sz[1]}`)]
      })
    }

    function Es(zz) {
      let {
        step: tz,
        progress: sz,
        goal: Fz
      } = zz;
      const {
        isTouchScreen: Wz
      } = (0, oz.h)(["isTouchScreen"]), {
        t: Xz
      } = (0, Gz.B)(), Oz = Rs[tz];
      return (0, nz.jsxs)(zF, {
        icon: Oz.icon,
        title: Xz(Oz.titleKey),
        children: [(0, nz.jsx)("div", {
          className: "PlotsStepCardHint SmallTextLight",
          children: ps(Xz, Oz, Wz)
        }), Fz > 1 && (0, nz.jsx)(Ss, {
          progress: sz,
          goal: Fz
        }), "backpack" === tz && Wz && (0, nz.jsx)(tF, {})]
      })
    }

    function zF(zz) {
      let {
        className: tz,
        icon: sz,
        title: Fz,
        children: Wz
      } = zz;
      return (0, nz.jsxs)("div", {
        className: xz()("PlotsStepCard", tz),
        role: "status",
        children: [(0, nz.jsx)("span", {
          className: "PlotsStepCardIcon",
          children: (0, nz.jsx)(mz.c, {
            name: sz
          })
        }), (0, nz.jsxs)("div", {
          className: "PlotsStepCardBody",
          children: [(0, nz.jsx)("div", {
            className: "PlotsStepCardTitle SmallTextBold",
            children: Fz
          }), Wz]
        })]
      })
    }

    function tF() {
      return (0, Xz.useEffect)((() => (oz.b.set({
        backpackPointerRequested: !0
      }), () => {
        oz.b.set({
          backpackPointerRequested: !1
        })
      })), []), null
    }
    const sF = function(zz, tz, sz, Fz) {
      let {
        localPlayerId: Wz
      } = Fz;
      const oz = new ut;
      let vz = null,
        Uz = null,
        Kz = null,
        uz = null,
        Nz = null;
      const bz = [];
      return {
        onCreate: zz => {
          vz = new Is(zz, Wz), Uz = new Us(zz, Wz, vz), Kz = new Us(zz, Wz, vz), uz = new Bs(zz, Wz), Nz = new rz(zz, uz), bz.push((0, Oz.x)((0, Xz.createElement)(Xz.Fragment, null, (0, Xz.createElement)(as, {
            hud: oz
          }), (0, Xz.createElement)(fs, {
            hud: oz
          }), (0, Xz.createElement)(bt, {
            hud: oz,
            journal: Nz
          }), (0, Xz.createElement)(ds, {
            placement: uz
          }), (0, Xz.createElement)(Ts, {
            placement: uz
          })), {
            content: (0, Xz.createElement)(Wt, {
              journal: Nz
            })
          }))
        },
        wN: () => {
          Uz.wN(), Kz.wN(), uz.wN(), Nz.wN()
        },
        onPlayerAttemptAltAction: (zz, tz, sz, Fz, Wz, Xz) => {
          var Oz;
          if (null !== Xz) return;
          const oz = void 0 === tz ? null : [tz, sz, Fz];
          return null !== (Oz = Uz.attemptAltAction(oz)) && void 0 !== Oz ? Oz : Kz.attemptAltAction(oz)
        },
        onPlayerClickUp: () => {
          Uz.endPress(), Kz.endPress()
        },
        onAfterRender: (zz, tz) => {
          uz.afterRender(tz), Uz.afterRender(tz), Kz.afterRender(tz)
        },
        onClose: () => {
          for (const zz of bz) zz();
          vz.dispose(), Uz.dispose(), Kz.dispose(), uz.dispose(), vz = null, Uz = null, Kz = null, uz = null, Nz = null
        },
        onReceivedMessageFromServer: (zz, tz) => {
          if ("plotsStarterLot" === zz) oz.receiveStep(tz);
          else if ("plotsPlot" === zz) oz.receivePlot(tz);
          else if ("plotsStarterHouse" === zz) Uz.Sw(tz);
          else if ("plotsBlueprint" === zz) {
            const zz = tz;
            Kz.Sw(zz), uz.Sw(zz)
          } else "plotsJournal" === zz ? Nz.Sw(tz) : "plotsJournalOpen" === zz ? Nz.openFromServer() : "plotsPreviewEnd" === zz && uz.endFromServer()
        }
      }
    }
  },
  38555: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Fz,
      d: () => Xz
    });
    const Fz = 1 / .6,
      Wz = {
        kind: "smokePuff"
      };
    class Xz {
      constructor(zz, tz, sz) {
        this.style = zz, this.au = tz, this.half = sz, this.particles = null, this.lastFrame = -1
      }
      emit(zz, tz, sz) {
        let Xz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return sz !== this.lastFrame && (this.lastFrame = sz, this.particles || (this.particles = zz.createParticles(function(zz, tz) {
          const [
            [sz, Xz, Oz],
            [oz, vz, Uz]
          ] = zz.colours;
          return {
            texture: zz.soft ? Wz : "square_particle",
            au: tz,
            minLifeTime: zz.life[0] / Fz,
            maxLifeTime: zz.life[1] / Fz,
            minEmitPower: zz.power[0] * Fz,
            maxEmitPower: zz.power[1] * Fz,
            minSize: zz.size[0],
            maxSize: zz.size[1],
            emitRate: 0,
            gravity: [0, zz.lift * Fz * Fz, 0],
            dir1: [-zz.spread, 1, -zz.spread],
            dir2: [zz.spread, 1, zz.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [sz, Xz, Oz, zz.alpha],
              maxColor: [oz, vz, Uz, zz.alpha]
            }, {
              timeFraction: 1,
              minColor: [sz, Xz, Oz, 0],
              maxColor: [oz, vz, Uz, 0]
            }],
            blendMode: zz.blendMode
          }
        }(this.style, this.au), {
          pos: tz,
          half: this.half
        })), this.particles.moveTo(tz, this.half), this.particles.emit(Xz), !0)
      }
      dispose() {
        var zz;
        null === (zz = this.particles) || void 0 === zz || zz.stop(), this.particles = null
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);