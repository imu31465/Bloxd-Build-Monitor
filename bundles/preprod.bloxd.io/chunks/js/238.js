export const id = 238;
export const ids = [238];
export const modules = {
  38822: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      default: () => kb
    });
    const Ez = [0, 90, 180, 270],
      nz = "plotsblueprint";
    var iz = bz(56),
      lz = bz(36071),
      Mz = bz(20),
      tz = bz(1595),
      Hz = bz(1673),
      Oz = bz(22);
    const pz = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      dz = {
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
      Fz = ["small", "medium", "large"].flatMap((zz => pz.flat().filter((uz => dz[uz].tier === zz))));

    function Zz(zz) {
      return dz[zz]
    }
    const Rz = new Map(pz.flatMap((zz => zz.slice(1).map(((uz, bz) => [uz, zz[bz]])))));

    function Kz(zz) {
      var uz;
      return null !== (uz = Rz.get(zz)) && void 0 !== uz ? uz : null
    }
    const wz = {
      farm_hut: "plotsGame:journalNoteFarmHut",
      rusticHome_tent: "plotsGame:journalNoteRusticHomeTent",
      castle_tower: "plotsGame:journalNoteCastleTower",
      farm_house: "plotsGame:journalNoteFarmHouse",
      farm_barn: "plotsGame:journalNoteFarmBarn"
    };

    function Xz(zz, uz) {
      const bz = new Set(zz),
        Ez = function(zz) {
          const uz = new Set(zz);
          return new Set(Fz.filter((zz => {
            const bz = Kz(zz);
            return null === bz || uz.has(bz)
          })))
        }(bz);
      return Fz.map((zz => {
        const nz = zz === uz;
        return bz.has(zz) ? {
          id: zz,
          active: nz,
          state: "completed",
          unlockedBy: null
        } : Ez.has(zz) ? {
          id: zz,
          active: nz,
          state: "open",
          unlockedBy: null
        } : {
          id: zz,
          active: nz,
          state: "locked",
          unlockedBy: Kz(zz)
        }
      }))
    }
    const fz = "plotsJournalChanged";
    class sz {
      constructor(zz, uz) {
        this.api = zz, this.placement = uz, this.pages = null, this.openRequested = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.xZ("journal_opened")
        }, this.build = zz => {
          this.xZ("placement_started"), this.placement.start(zz), (0, lz.i)()
        }, this.putAway = () => {
          this.api.sendCommand(`${nz} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      WZ(zz) {
        let [, uz, bz] = zz;
        this.pages = Xz(uz, bz), Oz.k.sK(fz, this.pages, !0)
      }
      openFromServer() {
        this.openRequested = !0, this.sd()
      }
      sd() {
        this.openRequested && !Mz.e.get("loadingOverlayVisible") && (this.openRequested = !1, null === this.pages || (0, tz.l)() || (0, Hz.isTypingInInput)() || null !== this.placement.getView() || (0, lz.p)())
      }
      xZ(zz) {
        this.reported.has(zz) || (this.reported.add(zz), this.api.sendCommand(`${nz} report ${zz}`))
      }
    }
    var rz = bz(1038),
      oz = bz.n(rz),
      Nz = bz(1047),
      vz = bz(1419),
      xz = bz(4292),
      Jz = bz(3167),
      Az = bz(1417),
      Tz = bz(2014),
      Lz = bz(1181),
      Pz = bz(9078);
    const Gz = [0, 90, 180, 270],
      az = /^(meta\|rot\d)\|([lrud]+)$/,
      Vz = "nesw",
      mz = /^meta\|([nesw]*)\|?(Stacked)?$/,
      qz = function(zz) {
        const uz = new WeakMap;
        return (bz, Ez) => {
          let nz = uz.get(bz);
          return void 0 === nz && (nz = zz(bz, Ez), uz.set(bz, nz)), nz
        }
      }((zz => new hz(zz)));
    class hz {
      constructor(zz) {
        this.blockMetadata = zz, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const uz = new Set(Object.keys(zz).map((uz => zz[uz].id)));
        uz.add(0), this.maxBlockId = Math.max(...uz)
      }
      static
      for (zz) {
        return qz(zz)
      }
      getBlockIdMapping(zz, uz) {
        const bz = this.getBlockIdMappingKey(zz, uz);
        let Ez = this.blockIdMappings.get(bz);
        return void 0 === Ez && Gz.includes(zz) && (Ez = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, zz, uz), this.blockIdMappings.set(bz, Ez)), Ez
      }
      turnBlockId(zz, uz, bz) {
        return this.mapBlockId(this.blockMetadata[zz], uz, this.getRotationMapping(uz, bz), bz)
      }
      getBlockIdMappingKey(zz, uz) {
        return `r${zz}|m${Number(uz)}`
      }
      createBlockIdMapping(zz, uz, bz, Ez) {
        const nz = new Uint16Array(uz + 1),
          iz = this.getRotationMapping(bz, Ez);
        for (const lz in zz) {
          const uz = zz[lz];
          nz[uz.id] = this.mapBlockId(uz, bz, iz, Ez)
        }
        return nz
      }
      getRotationMapping(zz, uz) {
        const bz = Math.round(zz / 90),
          Ez = new Uint8Array(4);
        for (let nz = 0; nz < 4; nz++) Ez[nz] = (4 + nz - bz) % 4;
        if (uz) {
          let zz = Ez[0];
          Ez[0] = Ez[1], Ez[1] = zz, zz = Ez[2], Ez[2] = Ez[3], Ez[3] = zz
        }
        return Ez
      }
      mapBlockId(zz, uz, bz, Ez) {
        var nz;
        const {
          blockMetadata: iz
        } = this, lz = Math.round(uz / 90), {
          id: Mz,
          meta: tz
        } = zz, {
          rot: Hz,
          rootName: Oz,
          metaStr: pz
        } = tz;
        let dz;
        const [, Fz, Zz] = null !== (nz = mz.exec(pz)) && void 0 !== nz ? nz : [];
        if (void 0 !== Fz) {
          var Rz, Kz;
          dz = null !== (Rz = null === (Kz = iz[`${Oz}|meta|${[Vz.split("").filter(((zz,uz)=>Fz.split("").some((zz=>{const bz=Vz.indexOf(zz);return((Ez?3-bz:bz)+lz)%4===uz})))).join(""),Zz].filter(Boolean).join("|")}`]) || void 0 === Kz ? void 0 : Kz.id) && void 0 !== Rz ? Rz : Mz
        } else if (null === Hz) dz = Mz;
        else {
          var wz, Xz;
          const zz = bz[Hz - 1] + 1;
          let uz = pz.replace(`rot${Hz}`, `rot${zz}`);
          Ez && tz.stairsCorner && (uz = uz.replace(/(Left|Right)$/, (zz => "Left" === zz ? "Right" : "Left"))), Ez && "Chest" === Oz && (uz = uz.replace(/\|(left|right)$/, ((zz, uz) => "left" === uz ? "|right" : "|left")));
          const nz = az.exec(uz);
          if (Ez && null !== nz) {
            const zz = "lrud".split("").filter((zz => nz[2].includes("l" === zz ? "r" : "r" === zz ? "l" : zz)));
            uz = `${nz[1]}|${zz.join("")}`
          }
          const lz = `${Oz}|${uz}`;
          if (dz = null !== (wz = null === (Xz = iz[lz]) || void 0 === Xz ? void 0 : Xz.id) && void 0 !== wz ? wz : null, null === dz) {
            const zz = iz[Oz];
            dz = zz.rootMetaDesc === lz ? zz.id : Mz
          }
        }
        return dz
      }
    }

    function Uz(zz, uz, bz) {
      let {
        xRotationMappedOrigin: Ez,
        shouldSwapXZ: nz
      } = bz;
      const iz = nz ? uz : zz;
      return null === Ez ? iz : Ez - iz
    }

    function cz(zz, uz, bz) {
      let {
        zRotationMappedOrigin: Ez,
        shouldSwapXZ: nz
      } = bz;
      const iz = nz ? zz : uz;
      return null === Ez ? iz : Ez - iz
    }
    const gz = {
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
      Sz = new Map;

    function yz(zz, uz) {
      const bz = `${zz}|${uz}`;
      let Ez = Sz.get(bz);
      if (void 0 === Ez) {
        const {
          size: nz,
          palette: iz,
          layers: lz
        } = gz[zz], Mz = 90 === uz || 270 === uz, [tz, Hz] = Mz ? [nz[2], nz[0]] : [nz[0], nz[2]], Oz = function(zz, uz, bz) {
          let Ez = null,
            nz = null,
            iz = !1;
          switch (zz) {
            case 0:
              break;
            case 90:
              Ez = uz - 1, iz = !0;
              break;
            case 180:
              Ez = uz - 1, nz = bz - 1;
              break;
            case 270:
              nz = bz - 1, iz = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${zz}`)
          }
          return {
            xRotationMappedOrigin: Ez,
            zRotationMappedOrigin: nz,
            shouldSwapXZ: iz
          }
        }(uz, tz, Hz), pz = hz.for(Pz.k), dz = iz.map((zz => (0, Pz.g)(pz.turnBlockId((0, Pz.l)(zz), uz, !1)))), Fz = [];
        lz.forEach(((zz, uz) => {
          zz.split(" ").forEach(((zz, bz) => {
            for (let Ez = 0; Ez < zz.length; Ez++)
              if ("." !== zz[Ez]) {
                const nz = [Uz(Ez, bz, Oz), uz, cz(Ez, bz, Oz)];
                Fz.push({
                  offset: nz,
                  block: dz[zz.charCodeAt(Ez) - "a".charCodeAt(0)]
                })
              }
          }))
        })), Ez = {
          size: [tz, nz[1], Hz],
          cells: Fz
        }, Sz.set(bz, Ez)
      }
      return Ez
    }
    const Dz = {
      farm_hut: bz.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
      farm_house: bz.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
      farm_barn: bz.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
      rusticHome_tent: bz.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
      rusticHome_cabin: bz.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
      rusticHome_house: bz.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
      market_stand: bz.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
      market_stall: bz.p + "static/media/market_stall.9a562807f9dff591618a.webp",
      market_shop: bz.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
      castle_wall: bz.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
      castle_gate: bz.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
      castle_tower: bz.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
    };
    var Qz = bz(1089);
    const Wz = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function ez(zz) {
      let {
        page: uz,
        building: bz,
        onBuild: Ez,
        onPutAway: nz
      } = zz;
      const {
        t: iz
      } = (0, Lz.F)(), {
        displayName: lz,
        tier: Mz
      } = Zz(uz.id), tz = yz(uz.id, 0).cells.length, Hz = wz[uz.id], Oz = "locked" === uz.state, pz = bz ? vz.f : vz.q;
      return (0, Qz.jsxs)("article", {
        className: oz()("PlotsJournalPage", {
          Locked: Oz
        }),
        children: [(0, Qz.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: iz(lz.translationKey)
        }), (0, Qz.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [iz(Wz[Mz]), " \xb7 ", iz("plotsGame:journalBlocks", {
            blocks: String(tz)
          })]
        }), (0, Qz.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [Fz.map((zz => (0, Qz.jsx)("img", {
            className: oz()({
              Shown: zz === uz.id
            }),
            src: Dz[zz],
            alt: "",
            draggable: !1
          }, zz))), "completed" === uz.state && (0, Qz.jsx)("span", {
            className: "PlotsJournalStamp",
            children: iz("plotsGame:journalBuilt")
          }), Oz && (0, Qz.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, Qz.jsx)(Nz.c, {
              name: "lock"
            })
          })]
        }), void 0 !== Hz && "completed" !== uz.state && (0, Qz.jsx)("p", {
          className: "PlotsJournalNote",
          children: iz(Hz)
        }), (0, Qz.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === uz.state && (0, Qz.jsx)("p", {
            className: "PlotsJournalHint",
            children: iz("plotsGame:journalLocked", {
              name: iz(Zz(uz.unlockedBy).displayName.translationKey)
            })
          }), uz.active && (0, Qz.jsxs)(Qz.Fragment, {
            children: [(0, Qz.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: iz("plotsGame:journalBuilding")
            }), (0, Qz.jsx)(vz.j, {
              onClick: nz,
              children: iz("plotsGame:journalPutAway")
            })]
          }), !Oz && !uz.active && (0, Qz.jsx)(pz, {
            onClick: () => {
              Ez(uz.id)
            },
            children: iz("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function jz(zz) {
      let {
        className: uz,
        page: bz,
        hidden: Ez,
        building: nz,
        journal: iz
      } = zz;
      return (0, Qz.jsxs)("div", {
        ref: zz => {
          null !== zz && (zz.inert = Ez)
        },
        className: oz()("PlotsJournalSide", uz),
        children: [void 0 !== bz && (0, Qz.jsx)(ez, {
          page: bz,
          building: nz,
          onBuild: iz.build,
          onPutAway: iz.putAway
        }), void 0 === bz && (0, Qz.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var Iz = bz(328),
      Bz = bz(1840);

    function Cz(zz) {
      return Math.cos((0, Bz.j)(zz))
    }

    function Yz(zz) {
      return (0, Bz.B)(Math.acos(Iz.d.clamp(zz, -1, 1)))
    }

    function kz(zz, uz, bz, Ez, nz) {
      const iz = Math.abs(uz - zz),
        lz = (0, Bz.B)(nz / (bz * Math.abs(Math.sin((0, Bz.j)(zz))))),
        Mz = 450 * Math.min(1, iz / Ez),
        tz = lz > 0 ? 3 * iz / lz : 1 / 0;
      return Math.round(Math.max(120, Math.min(Mz, tz)))
    }
    class zu {
      constructor() {
        this.samples = []
      }
      add(zz, uz) {
        for (this.samples.push({
            x: zz,
            at: uz
          }); uz - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const zz = this.samples[0],
          uz = this.samples[this.samples.length - 1];
        return uz.at > zz.at ? (uz.x - zz.x) / (uz.at - zz.at) : 0
      }
    }

    function uu(zz, uz) {
      return zz > uz && zz >= 600
    }

    function bu(zz) {
      return Yz(new DOMMatrixReadOnly(getComputedStyle(zz).transform).m11)
    }

    function Eu(zz, uz) {
      zz.style.transform = `rotateY(${-uz}deg)`, zz.classList.add("Turning")
    }

    function nu(zz) {
      let {
        journal: uz
      } = zz;
      const {
        t: bz
      } = (0, Lz.F)(), Ez = (0, Az.h)(fz, uz.getPages()), nz = (0, Tz.b)(uu), [Mz, tz] = (0, iz.useState)((() => function(zz) {
        const uz = zz.findIndex((zz => zz.active));
        return -1 !== uz ? uz : Math.max(0, zz.findIndex((zz => "open" === zz.state)))
      }(Ez))), Oz = (0, iz.useRef)(null), pz = (0, iz.useRef)(null), dz = (0, iz.useRef)({
        Forward: null,
        Back: null
      }), Fz = nz ? 2 : 1, Zz = nz ? 180 : 90, Rz = Mz - Mz % Fz, Kz = Rz > 0, wz = Rz + Fz < Ez.length, Xz = (0, iz.useCallback)((() => {
        const zz = pz.current;
        return null === zz ? Rz : (pz.current = null, zz.animation.cancel(), (uz = dz.current[zz.direction]).style.transform = "", uz.classList.remove("Turning"), null === zz.next ? Rz : (tz(zz.next), zz.next));
        var uz
      }), [Rz]), sz = (0, iz.useCallback)(((zz, uz, bz, Ez) => {
        const nz = dz.current[zz],
          iz = bu(nz),
          lz = uz === ("Forward" === zz) ? Zz : 0;
        Eu(nz, lz);
        const Mz = nz.animate([{
          transform: `rotateY(${-iz}deg)`
        }, {
          transform: `rotateY(${-lz}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : kz(iz, lz, nz.offsetWidth, Zz, lz > iz ? -bz : bz),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        pz.current = {
          direction: zz,
          animation: Mz,
          next: uz ? Ez + ("Forward" === zz ? Fz : -Fz) : null
        }, Mz.onfinish = () => {
          var zz;
          (null === (zz = pz.current) || void 0 === zz ? void 0 : zz.animation) === Mz && Xz()
        }
      }), [Fz, Zz, Xz]), rz = (0, iz.useCallback)((zz => {
        if (null !== Oz.current) return;
        const uz = Xz();
        ("Forward" === zz ? uz + Fz < Ez.length : uz > 0) && sz(zz, !0, 0, uz)
      }), [Xz, sz, Fz, Ez.length]);
      (0, iz.useEffect)((() => {
        uz.onOpened()
      }), [uz]), (0, iz.useEffect)((() => () => {
        var zz;
        null === (zz = pz.current) || void 0 === zz || zz.animation.cancel()
      }), []), (0, iz.useEffect)((() => {
        const zz = zz => {
          var uz;
          zz.pointerId !== (null === (uz = Oz.current) || void 0 === uz ? void 0 : uz.pointerId) || Oz.current.following || (Oz.current = null)
        };
        return window.addEventListener("pointerup", zz), () => {
          window.removeEventListener("pointerup", zz)
        }
      }), []), (0, Jz.e)((zz => ("ArrowLeft" === zz.code || "ArrowRight" === zz.code) && !(0, Hz.isTypingInInput)()), (zz => {
        zz.stopPropagation(), rz("ArrowLeft" === zz.code ? "Back" : "Forward")
      }));
      const Nz = (zz, uz, bz) => {
          const Ez = function(zz, uz, bz, Ez) {
            return (zz < 0 ? bz : Ez) ? Iz.d.clampAbs(zz, uz) : Math.sign(zz) * uz * (1 - 1 / (.55 * Math.abs(zz) / uz + 1))
          }(zz.base + bz, Fz * zz.width, wz, Kz);
          return "Forward" === uz ? Math.min(Ez, 0) : Math.max(Ez, 0)
        },
        Pz = (zz, uz) => {
          const bz = Oz.current;
          if (Oz.current = null, null === bz.direction) return;
          bz.speed.add(zz, uz);
          const Ez = bz.speed.get(),
            nz = Nz(bz, bz.direction, zz - bz.x);
          sz(bz.direction, null !== function(zz, uz, bz, Ez, nz) {
            if (Math.abs(uz) >= .3 ? Math.sign(uz) !== Math.sign(zz) : Math.abs(zz) < .5 * bz) return null;
            const iz = zz < 0 ? "Forward" : "Back";
            return ("Forward" === iz ? Ez : nz) ? iz : null
          }(nz, Ez, Fz * bz.width, wz, Kz), Ez, Rz)
        },
        Gz = Ez.some((zz => zz.active)),
        az = (zz, bz, nz) => (0, Qz.jsx)(jz, {
          className: zz,
          page: bz >= 0 && bz < Ez.length ? Ez[bz] : void 0,
          hidden: nz,
          building: Gz,
          journal: uz
        });
      return (0, Qz.jsx)(xz.d, {
        close: lz.l,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, Qz.jsxs)("section", {
          className: oz()("PlotsJournal", {
            Spread: nz
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": bz("plotsGame:journalTitle"),
          children: [(0, Qz.jsx)(vz.m, {
            className: "PlotsJournalClose",
            onClick: lz.l
          }), (0, Qz.jsx)(iu, {
            direction: "Back",
            disabled: !Kz,
            onTurn: rz
          }), (0, Qz.jsx)("div", {
            className: "PlotsJournalBookPages",
            onPointerDown: zz => {
              var uz;
              if (!zz.isPrimary || 0 !== zz.button || null !== pz.current && null !== zz.target.closest("button")) return;
              const bz = new zu;
              bz.add(zz.clientX, zz.timeStamp);
              const Ez = dz.current.Forward.offsetWidth,
                nz = pz.current;
              pz.current = null;
              let iz = 0;
              if (null !== nz) {
                const uz = dz.current[nz.direction],
                  bz = bu(uz);
                nz.animation.cancel(), Eu(uz, bz), iz = function(zz, uz, bz, Ez) {
                  return (zz < 0 ? bz : Ez) ? zz : Math.sign(zz) * uz * (1 / (1 - Math.min(Math.abs(zz) / uz, .99)) - 1) / .55
                }(function(zz, uz, bz, Ez) {
                  return bz * (Cz(uz) - Cz("Forward" === zz ? 0 : Ez))
                }(nz.direction, bz, Ez, Zz), Fz * Ez, wz, Kz), zz.currentTarget.setPointerCapture(zz.pointerId)
              }
              Oz.current = {
                pointerId: zz.pointerId,
                x: zz.clientX,
                y: zz.clientY,
                base: iz,
                width: Ez,
                following: null !== nz,
                direction: null !== (uz = null === nz || void 0 === nz ? void 0 : nz.direction) && void 0 !== uz ? uz : null,
                speed: bz
              }
            },
            onPointerMove: zz => {
              const uz = Oz.current;
              if (null === uz || zz.pointerId !== uz.pointerId) return;
              if (0 === zz.buttons) return void Pz(zz.clientX, zz.timeStamp);
              const bz = zz.clientX - uz.x;
              !uz.following && function(zz, uz) {
                return Math.abs(zz) > 8 && Math.abs(zz) > Math.abs(uz)
              }(bz, zz.clientY - uz.y) && (uz.following = !0, uz.direction = bz < 0 ? "Forward" : "Back", zz.currentTarget.setPointerCapture(zz.pointerId)), null !== uz.direction && (uz.speed.add(zz.clientX, zz.timeStamp), Eu(dz.current[uz.direction], function(zz, uz, bz, Ez) {
                const nz = bz * Cz("Forward" === zz ? 0 : Ez) + uz;
                return Iz.d.clamp(Yz(nz / bz), 0, Ez)
              }(uz.direction, Nz(uz, uz.direction, bz), uz.width, Zz)))
            },
            onPointerUp: zz => {
              var uz;
              zz.pointerId === (null === (uz = Oz.current) || void 0 === uz ? void 0 : uz.pointerId) && Pz(zz.clientX, zz.timeStamp)
            },
            onPointerCancel: zz => {
              const uz = Oz.current;
              zz.pointerId === (null === uz || void 0 === uz ? void 0 : uz.pointerId) && (Oz.current = null, null !== uz.direction && sz(uz.direction, !1, 0, Rz))
            },
            children: (0, Qz.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [nz && az("Left", Rz - 2, !0), az("Right", Rz + 2 * Fz - 1, !0), (0, Qz.jsxs)("div", {
                ref: zz => {
                  dz.current.Back = zz
                },
                className: "PlotsJournalLeaf Back",
                children: [az("Recto", Rz - 1, !0), nz && az("Verso", Rz, !1)]
              }), (0, Qz.jsxs)("div", {
                ref: zz => {
                  dz.current.Forward = zz
                },
                className: "PlotsJournalLeaf Forward",
                children: [az("Recto", Rz + Fz - 1, !1), nz && az("Verso", Rz + Fz, !0)]
              })]
            })
          }), (0, Qz.jsx)(iu, {
            direction: "Forward",
            disabled: !wz,
            onTurn: rz
          })]
        })
      })
    }

    function iu(zz) {
      let {
        direction: uz,
        disabled: bz,
        onTurn: Ez
      } = zz;
      const {
        t: nz
      } = (0, Lz.F)();
      return (0, Qz.jsx)("div", {
        className: oz()("PlotsJournalArrow", uz),
        children: (0, Qz.jsx)(vz.f, {
          disabled: bz,
          ariaLabel: nz("Forward" === uz ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            Ez(uz)
          },
          children: (0, Qz.jsx)(Nz.c, {
            name: "angle-up"
          })
        })
      })
    }
    var lu = bz(36066),
      Mu = bz(1856),
      tu = bz(1920);
    const Hu = "plotsStepChanged",
      Ou = "plotsPlotChanged";
    class pu {
      constructor() {
        this.step = ["none"], this.plot = ["none"]
      }
      getStep() {
        return this.step
      }
      receiveStep(zz) {
        this.step = zz, Oz.k.sK(Hu, zz, !0)
      }
      getPlot() {
        return this.plot
      }
      receivePlot(zz) {
        this.plot = zz, Oz.k.sK(Ou, zz, !0)
      }
    }
    const du = "KeyJ";

    function Fu(zz) {
      let {
        hud: uz,
        journal: bz
      } = zz;
      const Ez = (0, Az.h)(fz, bz.getPages()),
        nz = (0, Az.h)(Hu, uz.getStep()),
        {
          isTouchScreen: iz
        } = (0, Mz.m)(["isTouchScreen"]),
        {
          t: Oz
        } = (0, Lz.F)(),
        pz = null !== Ez && "none" === nz[0];
      return (0, Jz.e)((zz => null !== Ez && zz.code === du && !zz.repeat && !(0, Hz.isTypingInInput)()), (zz => {
        (0, tz.A)(zz, pz, lz.p)
      })), pz ? (0, Qz.jsx)(lu.d, {
        placement: "topRight",
        children: (0, Qz.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, Qz.jsxs)("button", {
            type: "button",
            className: oz()("PlotsJournalButton SmallTextBold", {
              Touch: iz
            }),
            onClick: lz.p,
            children: [(0, Qz.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, Qz.jsx)(Mu.c, {
                itemName: "Book",
                amount: 0
              })
            }), Oz("plotsGame:journalButton"), !iz && (0, Qz.jsx)(tu.e, {
              className: "PlotsJournalButtonKey",
              keyCode: du
            })]
          })
        })
      }) : null
    }
    var Zu = bz(37814),
      Ru = bz(37593),
      Ku = bz(36363),
      wu = bz(9114),
      Xu = bz(9130),
      fu = bz(37271);
    const su = new Map([
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
      ru = [...Ku.e.blockRemoveActionRoots, ...Ru.d, ...wu.g, "Board", "Code Block", "Custom Lobby Block"],
      ou = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let Nu = null;

    function vu() {
      return Nu ??= function() {
        const zz = xu(),
          uz = Math.max(...zz.map((zz => Pz.k[zz].id))) + 1,
          bz = new Int32Array(uz),
          Ez = new Int32Array(uz),
          nz = new Uint8Array(uz).fill(1),
          iz = new Uint8Array(uz),
          lz = new Uint8Array(uz),
          Mz = new Array(uz).fill("Air"),
          tz = new Map,
          Hz = zz => {
            let uz = tz.get(zz);
            return void 0 === uz && (uz = tz.size + 1, tz.set(zz, uz)), uz
          },
          Oz = new Set(ru);
        for (const dz of zz) {
          var pz;
          const {
            id: zz,
            meta: uz,
            altActionable: tz,
            canBePlacedOver: Fz
          } = Pz.k[dz];
          bz[zz] = Hz(Ju(dz));
          const Zz = uz.stairsCorner;
          if (null === Zz) Ez[zz] = bz[zz];
          else {
            const bz = Zz.endsWith("Right");
            Ez[zz] = Hz(`${uz.rootName}|rot${bz?uz.rot%4+1:uz.rot}|${uz.halfblockPlacement}|${Zz.replace("Right","Left")}`)
          }
          nz[zz] = Fz ? 1 : 0, iz[zz] = tz || null !== uz.open || dz in fu.b || Oz.has(uz.rootName) || void 0 !== (0, Ru.g)(uz.rootName) ? 1 : 0;
          const {
            rootName: Rz
          } = uz;
          lz[zz] = null !== uz.open || Ru.d.includes(Rz) || Rz.includes("Bookshelf") || Rz.includes("Mailbox") ? 1 : 0, Mz[zz] = null !== (pz = (0, Zu.e)(zz)) && void 0 !== pz ? pz : Rz
        }
        return {
          kinds: bz,
          shapes: Ez,
          empty: nz,
          inUse: iz,
          ownAltActionMessage: lz,
          placingItems: Mz
        }
      }(), Nu
    }

    function xu() {
      return Object.keys(Pz.k).filter((zz => Pz.k[zz].name === zz))
    }

    function Ju(zz) {
      var uz;
      const bz = Pz.k[zz],
        {
          rootName: Ez,
          rot: nz
        } = bz.meta,
        [, ...iz] = (null !== (uz = bz.rootMetaDesc) && void 0 !== uz ? uz : zz).split("|"),
        lz = iz.filter((zz => !("meta" === zz || ou.test(zz) || (0, Xu.w)(bz) && /^[nesw]+$/.test(zz) || wu.g.includes(Ez) && /^[lrud]+$/.test(zz) || Iz.M.includes(Ez) && /^(left|right)$/.test(zz))));
      return [Ez, ...lz].map((zz => "fenceGate" === bz.model && zz === `rot${nz}` ? "rot" + ((nz - 1) % 2 + 1) : zz)).join("|")
    }

    function Au(zz, uz) {
      const {
        kinds: bz,
        shapes: Ez
      } = vu();
      return bz[zz] === bz[uz] || Ez[zz] === Ez[uz]
    }

    function Tu(zz) {
      return 1 === vu().empty[zz]
    }

    function Lu(zz) {
      return vu().placingItems[zz]
    }

    function Pu(zz) {
      return su.get(Pz.k[zz].meta.rootName)
    }
    var Gu = bz(9106),
      au = bz(9125);
    const Vu = [0, 0, 0, 1, 1, 1],
      mu = (0, Gu.d)([
        [2, 0, 2, 6, 6, 6]
      ]),
      qu = (0, Gu.d)([
        [3, 0, 3, 5, 5, 5]
      ]),
      hu = (0, Gu.d)([
        [3, 3, 3, 5, 8, 5]
      ]),
      Uu = [0, 1, 2, 3].map((zz => (0, Gu.d)((0, Gu.p)([
        [3, 2, 0, 5, 7, 3]
      ], zz))));

    function cu(zz) {
      const {
        bt: uz,
        model: bz,
        blockModel: Ez,
        meta: nz
      } = Pz.k[zz];
      return void 0 !== uz ? uz : "CentreCross" === bz ? mu : null !== Ez && void 0 !== Ez && Ez.startsWith("torch") ? nz.halfblockPlacement === au.b.side ? Uu[nz.rot - 1] : nz.halfblockPlacement === au.b.top ? hu : qu : Vu
    }
    var gu = bz(36328),
      Su = bz(195);

    function yu(zz, uz) {
      const bz = Su.e.Gw / 2;
      return zz[0] < uz[0] + bz && zz[0] + 1 > uz[0] - bz && zz[1] < uz[1] + Su.e.mw && zz[1] + 1 > uz[1] && zz[2] < uz[2] + bz && zz[2] + 1 > uz[2] - bz
    }

    function Du(zz, uz, bz, Ez, nz) {
      const iz = Math.hypot(...uz.dir);
      if (!Number.isFinite(iz) || 0 === iz) return -1;
      const {
        from: lz,
        reach: Mz,
        solid: tz
      } = uz, Hz = [uz.dir[0] / iz, uz.dir[1] / iz, uz.dir[2] / iz], Oz = null === tz ? Mz : Math.min(Mz, function(zz, uz, bz) {
        const Ez = Qu(zz, uz, bz);
        if (Ez !== 1 / 0) return Ez;
        return (bz[0] + .5 - zz[0]) * uz[0] + (bz[1] + .5 - zz[1]) * uz[1] + (bz[2] + .5 - zz[2]) * uz[2]
      }(lz, Hz, tz) + .75);
      let pz = -1,
        dz = 1 / 0,
        Fz = 1 / 0;
      for (let Zz = 0; Zz < zz.length; Zz += 4) {
        const uz = [zz[Zz], zz[Zz + 1], zz[Zz + 2]],
          iz = nz(Zz) ? Mz : Oz;
        let tz = -1,
          Rz = Qu(lz, Hz, uz);
        if (Rz > iz) {
          const zz = [uz[0] + .5 - lz[0], uz[1] + .5 - lz[1], uz[2] + .5 - lz[2]];
          if (Rz = zz[0] * Hz[0] + zz[1] * Hz[1] + zz[2] * Hz[2], Rz <= 0 || Rz > iz) continue;
          if (tz = Math.hypot(zz[0] - Rz * Hz[0], zz[1] - Rz * Hz[1], zz[2] - Rz * Hz[2]), tz > .7 || !Ez(Zz)) continue
        }(tz < dz || tz === dz && Rz < Fz) && bz(Zz) && (pz = Zz, dz = tz, Fz = Rz)
      }
      return pz
    }

    function Qu(zz, uz, bz) {
      let Ez = 0,
        nz = 1 / 0;
      for (let iz = 0; iz < 3; iz++) {
        const lz = bz[iz] - zz[iz];
        if (0 === uz[iz]) {
          if (lz > 0 || lz + 1 < 0) return 1 / 0;
          continue
        }
        const Mz = lz / uz[iz],
          tz = (lz + 1) / uz[iz];
        Ez = Math.max(Ez, Math.min(Mz, tz)), nz = Math.min(nz, Math.max(Mz, tz))
      }
      return Ez <= nz ? Ez : 1 / 0
    }
    var Wu = bz(37480),
      eu = bz(37901);
    const ju = [1, 1, 1];
    class Iu {
      constructor(zz) {
        this.api = zz, this.meshes = null, this.shown = null
      }
      show(zz) {
        if (!(0, gu.e)(zz, this.shown))
          if (this.shown = null === zz ? null : [zz[0], zz[1], zz[2]], null !== this.meshes)
            for (const uz of this.meshes) this.api.setGameMesh(uz, null === zz ? {
              visible: !1
            } : {
              anchor: zz,
              visible: !0
            });
          else if (null !== zz) {
          const uz = [Wu.i, Wu.i, Wu.i, 0, 0, 0];
          this.meshes = [this.build([uz], Wu.j, zz), this.build((0, Wu.e)(), Wu.n, zz)]
        }
      }
      dispose() {
        for (const uz of null !== (zz = this.meshes) && void 0 !== zz ? zz : []) {
          var zz;
          this.api.disposeGameMesh(uz)
        }
        this.meshes = null, this.shown = null
      }
      build(zz, uz, bz) {
        const Ez = [],
          nz = [];
        for (const [iz, lz, Mz, tz, Hz, Oz] of zz)(0, eu.e)(Ez, nz, [tz + .5, Hz + .5, Oz + .5], [iz, lz, Mz]);
        return this.api.createGameMesh({
          positions: Ez,
          indices: nz
        }, {
          rgb: ju,
          alpha: uz,
          onTop: !0
        }, bz)
      }
    }
    class Bu {
      constructor(zz) {
        this.api = zz, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(zz) {
        const uz = Su.e.IZ;
        this.chunks = [];
        for (let bz = 0; bz < zz.length; bz += 3) {
          const Ez = Math.floor(zz[bz] / uz),
            nz = Math.floor(zz[bz + 1] / uz),
            iz = Math.floor(zz[bz + 2] / uz);
          this.watches(Ez, nz, iz) || this.chunks.push(Ez, nz, iz)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const zz = performance.now();
        if (zz - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = zz;
        let uz = !1;
        for (let bz = 0; bz < this.chunks.length; bz += 3) {
          const zz = this.api.getChunkVersion(this.chunks[bz], this.chunks[bz + 1], this.chunks[bz + 2]);
          this.versions[bz / 3] !== zz && (this.versions[bz / 3] = zz, uz = !0)
        }
        return uz
      }
      watches(zz, uz, bz) {
        for (let Ez = 0; Ez < this.chunks.length; Ez += 3)
          if (this.chunks[Ez] === zz && this.chunks[Ez + 1] === uz && this.chunks[Ez + 2] === bz) return !0;
        return !1
      }
    }
    const Cu = .35,
      Yu = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      ku = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      zb = [.95, .2, .15];
    class ub {
      constructor() {
        this.groups = []
      }
      add(zz, uz, bz, Ez, nz) {
        let iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Vu;
        for (const lz of this.groups)
          if (nb(lz, Ez, nz)) return lz.cells.push(zz, uz, bz), void lz.boxes.push(iz);
        this.groups.push({
          rgb: Ez,
          look: nz,
          cells: [zz, uz, bz],
          boxes: [iz]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class bb {
      constructor(zz) {
        this.api = zz, this.shown = []
      }
      show(zz) {
        const uz = [];
        for (const bz of zz) {
          const zz = this.shown.findIndex((zz => {
            let {
              group: uz
            } = zz;
            return nb(uz, bz.rgb, bz.look) && ib(uz, bz)
          })); - 1 === zz ? uz.push(this.build(bz)) : (uz.push(this.shown[zz]), this.shown.splice(zz, 1))
        }
        this.dispose(), this.shown = uz
      }
      dispose() {
        for (const {
            meshes: zz
          }
          of this.shown)
          for (const uz of zz) this.api.disposeGameMesh(uz);
        this.shown = []
      }
      build(zz) {
        const {
          rgb: uz,
          look: bz,
          boxes: Ez
        } = zz, nz = [uz[0] + (1 - uz[0]) * Cu, uz[1] + (1 - uz[1]) * Cu, uz[2] + (1 - uz[2]) * Cu], iz = [this.buildMesh(zz.cells, uz, bz.alpha, ((zz, uz, nz, iz) => {
          Eb(zz, uz, nz, Ez[iz], bz.size, !1)
        })), this.buildMesh(zz.cells, nz, bz.alpha, ((zz, uz, nz, iz) => {
          Eb(zz, uz, nz, Ez[iz], bz.size, !0)
        }))];
        return bz.crossed && iz.push(this.buildMesh(zz.cells, uz, .9, ((zz, uz, Ez) => {
          (0, eu.h)(zz, uz, Ez, bz.size + .01, .12)
        }))), {
          group: zz,
          meshes: iz
        }
      }
      buildMesh(zz, uz, bz, Ez) {
        const nz = [zz[0], zz[1], zz[2]],
          iz = [],
          lz = [];
        for (let Mz = 0; Mz < zz.length; Mz += 3) Ez(iz, lz, [zz[Mz] - nz[0] + .5, zz[Mz + 1] - nz[1] + .5, zz[Mz + 2] - nz[2] + .5], Mz / 3);
        return this.api.createGameMesh({
          positions: iz,
          indices: lz
        }, {
          rgb: [uz[0], uz[1], uz[2]],
          alpha: bz
        }, nz)
      }
    }

    function Eb(zz, uz, bz, Ez, nz, iz) {
      for (let lz = 0; lz < Ez.length; lz += 6) {
        const Mz = [0, 0, 0],
          tz = [0, 0, 0];
        for (let zz = 0; zz < 3; zz++) Mz[zz] = bz[zz] + ((Ez[lz + zz] + Ez[lz + zz + 3]) / 2 - .5) * nz, tz[zz] = (Ez[lz + zz + 3] - Ez[lz + zz]) * nz;
        (0, eu.c)(zz, uz, Mz, tz, iz)
      }
    }

    function nb(zz, uz, bz) {
      return zz.rgb[0] === uz[0] && zz.rgb[1] === uz[1] && zz.rgb[2] === uz[2] && zz.look === bz
    }

    function ib(zz, uz) {
      if (zz.cells.length !== uz.cells.length) return !1;
      for (let bz = 0; bz < zz.cells.length; bz++)
        if (zz.cells[bz] !== uz.cells[bz]) return !1;
      return zz.boxes.every(((zz, bz) => zz === uz.boxes[bz]))
    }

    function lb(zz, uz) {
      return zz.getClientOption(uz, "blockReach") + 1
    }
    class Mb {
      constructor(zz, uz, bz) {
        this.api = zz, this.localPlayerId = uz, this.pickNext = bz, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(zz) {
        const [uz, , bz] = zz.cameraDirection, Ez = Math.hypot(uz, bz);
        Ez > .001 && (this.heading = [uz / Ez, bz / Ez])
      }
      tapped(zz, uz, bz) {
        const Ez = lb(this.api, this.localPlayerId),
          {
            origin: nz,
            direction: iz
          } = this.api.getActionRay(),
          lz = [...nz],
          Mz = [
            [lz, [lz[0] + iz[0] * Ez, lz[1] + iz[1] * Ez, lz[2] + iz[2] * Ez]]
          ];
        null !== zz && Mz.push([lz, (0, gu.d)(zz)]), this.tap = {
          lines: Mz,
          next: uz,
          ms: bz
        }
      }
      filled(zz, uz) {
        this.tap = null, this.turnFrom(zz, uz), this.retry(uz)
      }
      arrived(zz, uz) {
        const {
          tap: bz
        } = this;
        if (null === bz || uz - bz.ms > 1500) return null;
        const Ez = (0, gu.d)(zz);
        return (0, gu.e)(bz.next, zz) || bz.lines.some((zz => {
          let [uz, bz] = zz;
          return function(zz, uz, bz) {
            const Ez = [bz[0] - uz[0], bz[1] - uz[1], bz[2] - uz[2]],
              nz = [zz[0] - uz[0], zz[1] - uz[1], zz[2] - uz[2]],
              iz = Ez[0] ** 2 + Ez[1] ** 2 + Ez[2] ** 2,
              lz = 0 === iz ? 0 : Math.min(1, Math.max(0, (nz[0] * Ez[0] + nz[1] * Ez[1] + nz[2] * Ez[2]) / iz));
            return Math.hypot(nz[0] - Ez[0] * lz, nz[1] - Ez[1] * lz, nz[2] - Ez[2] * lz)
          }(Ez, uz, bz) <= .9
        })) ? (this.tap = null, this.turnFrom(zz, uz), bz.ms) : null
      }
      turnFrom(zz, uz) {
        this.pending = {
          from: zz,
          ms: uz,
          turnMs: Math.max(50, Math.min(250, uz - this.lastFillMs))
        }, this.lastFillMs = uz
      }
      retry(zz) {
        const {
          pending: uz
        } = this;
        if (null === uz) return;
        if (zz - uz.ms > 1500) return void(this.pending = null);
        const bz = this.pickNext((0, gu.d)(uz.from), (zz => (0, gu.e)(zz, uz.from)));
        if (null === bz) return;
        this.pending = null;
        const {
          turning: Ez
        } = this;
        if (null !== Ez && zz < Ez.endMs && (0, gu.e)(Ez.to, bz)) return;
        const nz = this.api.getActionRay().origin,
          iz = [bz[0] + .5 - nz[0], bz[1] + .5 - nz[1], bz[2] + .5 - nz[2]],
          lz = Math.hypot(iz[0], iz[2]);
        if (lz < .3) {
          const zz = Math.max(lz, .001);
          iz[0] = this.heading[0] * zz, iz[2] = this.heading[1] * zz
        }
        this.api.turnCamera(iz, uz.turnMs), this.turning = {
          to: bz,
          endMs: zz + uz.turnMs
        }
      }
    }
    class tb {
      constructor(zz, uz, bz) {
        this.api = zz, this.localPlayerId = uz, this.juice = bz, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.nextCells = [], this.lastFilled = null, this.lastSeenFilled = null, this.playerCells = [], this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = null, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new Bu(zz), this.meshes = new bb(zz), this.outline = new Iu(zz), this.turn = new Mb(zz, uz, ((zz, uz) => this.pickNext(zz, uz)))
      }
      WZ(zz) {
        const uz = "active" === zz[0] ? `${zz[1]}|${zz[3]}|${zz[4]}|${zz[5]}|${zz[6]}` : "";
        if ("active" !== zz[0]) "built" === zz[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , bz, Ez, nz, iz] = zz;
          uz !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = bz) : bz === this.layerY ? this.burstUnlisted(Ez) : bz > this.layerY && this.finishLayer(bz), this.layerY = bz, this.layerCells.has(bz) || this.layerCells.set(bz, Ez.filter(Ob)), this.ghostCells = Ez, this.palette = nz, this.occupiedCells = iz
        }
        uz !== this.blueprint && (this.blueprint = uz, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((zz => this.api.blockNameToBlockId(zz))), this.chunkWatch.watch([...this.ghostCells.filter(Ob), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(zz) {
        this.burstUnlisted([]), zz > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = zz)
      }
      sd() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const zz = performance.now();
        let uz = !1;
        for (const [nz, iz] of this.foreseen) {
          var bz;
          if (zz - iz > 1e3) this.foreseen.delete(nz), uz = !0, (null === (bz = this.lastFilled) || void 0 === bz ? void 0 : bz.join()) === nz && (this.lastFilled = this.lastSeenFilled)
        }
        const Ez = Hb(this.api.getPositionView(this.localPlayerId));
        (uz || Ez.some(((zz, uz) => zz !== this.playerCells[uz]))) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(zz) {
        const uz = new Set;
        for (let nz = 0; nz < zz.length; nz += 4) uz.add(`${zz[nz]},${zz[nz+1]},${zz[nz+2]}`);
        const bz = [],
          {
            ghostCells: Ez
          } = this;
        for (let nz = 0; nz < Ez.length; nz += 4) {
          const zz = `${Ez[nz]},${Ez[nz+1]},${Ez[nz+2]}`;
          !uz.has(zz) && this.open.delete(zz) && bz.push(this.filledCell(nz))
        }
        this.burst(bz)
      }
      refresh() {
        const {
          ghostCells: zz,
          palette: uz,
          occupiedCells: bz
        } = this, Ez = new ub, nz = new Set, iz = [], lz = [];
        for (let Mz = 0; Mz < zz.length; Mz += 4) {
          const [bz, tz, Hz, Oz] = [zz[Mz], zz[Mz + 1], zz[Mz + 2], zz[Mz + 3]], pz = this.api.getBlockId(bz, tz, Hz), dz = `${bz},${tz},${Hz}`, Fz = Au(this.blockIds[Oz], pz);
          !Fz && Tu(pz) ? Ez.add(bz, tz, Hz, Pu(uz[Oz]), Yu, cu(uz[Oz])) : Fz ? this.open.has(dz) && iz.push(this.filledCell(Mz)) : Ez.add(bz, tz, Hz, zb, ku), !Fz && this.api.isBlockInLoadedChunk(bz, tz, Hz) && (nz.add(dz), lz.push(bz, tz, Hz, Tu(pz) ? 0 : 1))
        }
        this.open = nz, this.nextCells = lz;
        for (let Mz = 0; Mz < bz.length; Mz += 3) {
          const [zz, uz, nz] = [bz[Mz], bz[Mz + 1], bz[Mz + 2]];
          Tu(this.api.getBlockId(zz, uz, nz)) || Ez.add(zz, uz, nz, zb, ku)
        }
        this.meshes.show(Ez.toArray()), this.burst(iz), this.showNext(), this.turn.retry(performance.now())
      }
      burst(zz) {
        const uz = performance.now(),
          bz = [];
        for (const [nz, iz, lz] of zz) {
          const zz = [nz, iz, lz];
          this.lastSeenFilled = zz, this.foreseen.delete(zz.join()) || bz.push(zz)
        }
        const Ez = this.isHolding(uz);
        for (const nz of bz) {
          if (this.lastFilled = nz, Ez && this.pressFilled) {
            this.turn.filled(nz, uz);
            continue
          }
          const zz = this.turn.arrived(nz, uz);
          if (null !== zz) {
            this.pressFilled = Ez;
            for (const [uz, bz] of this.foreseen) bz <= zz && this.foreseen.delete(uz)
          }
        }
        this.juice.filled(zz)
      }
      showNext() {
        var zz;
        const uz = this.api.getPositionView(this.localPlayerId);
        this.playerCells.splice(0, 1 / 0, ...Hb(uz));
        const bz = this.lastFilled;
        this.nextCell = this.pickNext(null === bz ? [uz[0], uz[1] + 1, uz[2]] : (0, gu.d)(bz), (() => !1)), this.outline.show(null !== (zz = this.aimed) && void 0 !== zz ? zz : this.nextCell)
      }
      pickNext(zz, uz) {
        const bz = this.api.getPositionView(this.localPlayerId),
          Ez = [bz[0], bz[1] + Su.e.mw * Su.e.playerEyeToHeightRatio, bz[2]],
          nz = lb(this.api, this.localPlayerId),
          {
            nextCells: iz
          } = this,
          lz = zz => [iz[zz], iz[zz + 1], iz[zz + 2]],
          Mz = function(zz, uz, bz, Ez, nz, iz) {
            let lz = -1,
              Mz = -1,
              tz = 1 / 0;
            for (let Hz = 0; Hz < zz.length; Hz += uz) {
              const uz = (iz(Hz) ? 2 : 0) + (Ez(Hz) ? 1 : 0);
              if (uz < Mz || nz(Hz)) continue;
              const Oz = (zz[Hz] + .5 - bz[0]) ** 2 + (zz[Hz + 1] + .5 - bz[1]) ** 2 + (zz[Hz + 2] + .5 - bz[2]) ** 2;
              (uz > Mz || Oz < tz) && (lz = Hz, Mz = uz, tz = Oz)
            }
            return lz
          }(iz, 4, zz, (zz => 1 === iz[zz + 3]), (zz => {
            const Ez = lz(zz);
            return yu(Ez, bz) || this.foreseen.has(Ez.join()) || uz(Ez)
          }), (zz => function(zz, uz, bz) {
            return (uz[0] + .5 - zz[0]) ** 2 + (uz[1] + .5 - zz[1]) ** 2 + (uz[2] + .5 - zz[2]) ** 2 <= bz ** 2
          }(Ez, lz(zz), nz)));
        return -1 === Mz ? null : lz(Mz)
      }
      afterRender(zz) {
        var uz;
        this.turn.look(zz);
        const bz = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === bz ? null : bz.position), this.outline.show(null !== (uz = this.aimed) && void 0 !== uz ? uz : this.nextCell)
      }
      isHolding(zz) {
        return null !== this.altMs && zz - this.altMs <= 500
      }
      attemptAltAction(zz) {
        const uz = performance.now();
        if (this.isHolding(uz) || (this.pressFilled = !1), this.altMs = uz, this.pressFilled) return "preventPlacement";
        const bz = this.findAimed(zz);
        if (null !== bz) return this.foreseen.set(bz.join(), uz), this.lastFilled = bz, this.aimed = null, this.showNext(), this.turn.filled(bz, uz), this.pressFilled = !0, "preventPlacement";
        null !== this.nextCell && this.turn.tapped(zz, this.nextCell, uz)
      }
      findAimed(zz) {
        return function(zz, uz, bz, Ez, nz, iz, lz) {
          const Mz = zz.luz(uz),
            tz = null === Mz || null === zz.blockNameToBlockId(Mz.name, !0) ? null : Mz.name,
            Hz = zz.getPositionView(uz),
            {
              origin: Oz,
              direction: pz
            } = zz.getActionRay(),
            dz = Du(Ez, {
              from: Oz,
              dir: pz,
              reach: lb(zz, uz),
              solid: bz
            }, (uz => {
              const bz = [Ez[uz], Ez[uz + 1], Ez[uz + 2]];
              return !Au(nz[Ez[uz + 3]], zz.getBlockId(...bz)) && !lz.has(bz.join()) && zz.isBlockInLoadedChunk(...bz) && !yu(bz, Hz)
            }), (zz => null === tz || tz === Lu(nz[Ez[zz + 3]])), (zz => null !== iz && Ez[zz] === iz[0] && Ez[zz + 1] === iz[1] && Ez[zz + 2] === iz[2]));
          return -1 === dz ? null : [Ez[dz], Ez[dz + 1], Ez[dz + 2]]
        }(this.api, this.localPlayerId, zz, this.ghostCells, this.blockIds, this.nextCell, this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(zz) {
        const {
          ghostCells: uz
        } = this, [bz, Ez, nz] = Pu(this.palette[uz[zz + 3]]);
        return [uz[zz], uz[zz + 1], uz[zz + 2], bz, Ez, nz]
      }
    }

    function Hb(zz) {
      let [uz, bz, Ez] = zz;
      const nz = Su.e.Gw / 2;
      return [Math.floor(uz), Math.floor(bz), Math.floor(Ez), Math.floor(uz - nz), Math.floor(uz + nz), Math.floor(bz + Su.e.mw), Math.floor(Ez - nz), Math.floor(Ez + nz)]
    }

    function Ob(zz, uz) {
      return uz % 4 !== 3
    }

    function pb(zz, uz, bz, Ez, nz) {
      if (!zz.isBlockInLoadedChunk(uz, Ez - 6, bz) || !zz.isBlockInLoadedChunk(uz, Ez + 6 + nz, bz) || !zz.canModifyBlockAt(uz, Ez, bz)) return NaN;
      let iz = Ez - 1;
      if (0 !== zz.getBlockId(uz, iz, bz)) {
        for (; iz < Ez + 6 && 0 !== zz.getBlockId(uz, iz + 1, bz);) iz++;
        return iz
      }
      for (; iz > Ez - 6;)
        if (iz--, 0 !== zz.getBlockId(uz, iz, bz)) return iz;
      return NaN
    }

    function db(zz, uz, bz, Ez, nz) {
      let iz = 0;
      for (let lz = Ez + 1; lz <= Ez + nz; lz++) 0 !== zz.getBlockId(uz, lz, bz) && iz++;
      return iz
    }

    function Fb(zz) {
      const uz = new Map;
      for (const lz of zz) {
        var bz;
        if (Number.isNaN(lz)) return null;
        uz.set(lz, (null !== (bz = uz.get(lz)) && void 0 !== bz ? bz : 0) + 1)
      }
      let Ez = NaN,
        nz = 0;
      for (const [lz, Mz] of uz)(Mz > nz || Mz === nz && lz < Ez) && (Ez = lz, nz = Mz);
      let iz = 0;
      for (const lz of zz) iz += Math.abs(lz - Ez);
      return iz
    }

    function Zb(zz, uz, bz, Ez) {
      const {
        eye: nz,
        forward: iz,
        tanHalfFovX: lz,
        tanHalfFovY: Mz
      } = zz, [tz, Hz] = function(zz) {
        let [uz, bz, Ez] = zz;
        const nz = Math.hypot(uz, Ez),
          [iz, lz] = [Ez / nz, -uz / nz];
        return [
          [iz, 0, lz],
          [bz * lz, Ez * iz - uz * lz, -bz * iz]
        ]
      }(iz), [Oz, pz] = [uz * lz, bz * Mz], dz = iz[0] + Oz * tz[0] + pz * Hz[0], Fz = iz[1] + pz * Hz[1], Zz = iz[2] + Oz * tz[2] + pz * Hz[2], Rz = (Ez - nz[1]) / Fz;
      return Rz > 0 && Rz < 1 / 0 ? [nz[0] + Rz * dz, nz[2] + Rz * Zz] : null
    }
    const Rb = "plotsBlueprintPlacementChanged",
      Kb = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class wb {
      constructor(zz, uz) {
        this.api = zz, this.localPlayerId = uz, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = zz => {
          var uz, bz, Ez, iz;
          const lz = null !== (uz = null === (bz = this.placing) || void 0 === bz ? void 0 : bz.rotation) && void 0 !== uz ? uz : 0,
            {
              size: Mz
            } = yz(zz, lz),
            tz = this.api.Gs(this.localPlayerId),
            [Hz, Oz] = null !== (Ez = null !== (iz = function(zz, uz, bz) {
              const [Ez, nz, iz] = uz, [lz, Mz, tz] = [Math.floor(bz[0]), Math.floor(bz[1]), Math.floor(bz[2])], Hz = 6 + Math.max(Ez, iz) / 2, [Oz, pz] = [Math.ceil(Hz + Ez / 2), Math.ceil(Hz + iz / 2)], [dz, Fz] = [lz - Oz, tz - pz], [Zz, Rz] = [2 * Oz + 1, 2 * pz + 1], Kz = new Float64Array(Zz * Rz), wz = new Uint16Array(Zz * Rz);
              for (let rz = 0; rz < Zz; rz++)
                for (let uz = 0; uz < Rz; uz++) {
                  const bz = pb(zz, dz + rz, Fz + uz, Mz, nz);
                  Kz[rz * Rz + uz] = bz, Number.isNaN(bz) || (wz[rz * Rz + uz] = db(zz, dz + rz, Fz + uz, bz, nz))
                }
              const Xz = [];
              let fz = null,
                sz = 1 / 0;
              for (let rz = 0; rz + Ez <= Zz; rz++)
                for (let zz = 0; zz + iz <= Rz; zz++) {
                  const [uz, nz] = [dz + rz, Fz + zz], Mz = Math.hypot(uz + Ez / 2 - bz[0], nz + iz / 2 - bz[2]);
                  if (Mz > Hz || lz >= uz - 2 && lz < uz + Ez + 2 && tz >= nz - 2 && tz < nz + iz + 2) continue;
                  Xz.length = 0;
                  let Oz = 0;
                  for (let bz = 0; bz < Ez; bz++)
                    for (let uz = 0; uz < iz; uz++) Xz.push(Kz[(rz + bz) * Rz + zz + uz]), Oz += wz[(rz + bz) * Rz + zz + uz];
                  const pz = Fb(Xz);
                  if (null === pz) continue;
                  const Zz = Mz + 3 * (pz + Oz);
                  Zz < sz && (sz = Zz, fz = [uz, nz])
                }
              return fz
            }(this.api, Mz, tz)) && void 0 !== iz ? iz : this.cornerOnTarget(Mz)) && void 0 !== Ez ? Ez : [Math.floor(tz[0]) + 2, Math.floor(tz[2])];
          this.placing = {
            id: zz,
            rotation: lz,
            corner: [Hz, this.playerLevel(), Oz],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null
          }, this.update(), this.api.sendCommand(`${nz} preview`)
        }, this.rotate = () => {
          const {
            id: zz,
            rotation: uz,
            corner: bz
          } = this.placing, nz = Ez[(Ez.indexOf(uz) + 1) % Ez.length], [iz, , lz] = yz(zz, uz).size, [Mz, , tz] = yz(zz, nz).size;
          this.moveTo(bz[0] + Math.floor(iz / 2) - Math.floor(Mz / 2), bz[2] + Math.floor(lz / 2) - Math.floor(tz / 2), nz)
        }, this.hoverAt = (zz, uz) => {
          this.placing.hover = [zz, uz], this.moveCentreTo(this.camera, zz, uz)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (zz, uz) => {
          const bz = this.placing,
            {
              eye: Ez,
              forward: nz,
              tanHalfFovX: iz,
              tanHalfFovY: lz
            } = this.camera,
            Mz = {
              eye: [Ez[0], Ez[1], Ez[2]],
              forward: [nz[0], nz[1], nz[2]],
              tanHalfFovX: iz,
              tanHalfFovY: lz
            },
            tz = bz.corner[1],
            Hz = Zb(Mz, zz, uz, tz);
          bz.hover = null, bz.drag = Hz && {
            view: Mz,
            ground: Hz,
            corner: [bz.corner[0], bz.corner[2]],
            level: tz
          }
        }, this.dragTo = (zz, uz) => {
          const bz = this.placing.drag,
            Ez = bz && Zb(bz.view, zz, uz, bz.level);
          null !== bz && null !== Ez && this.moveTo(bz.corner[0] + Math.round(Ez[0] - bz.ground[0]), bz.corner[1] + Math.round(Ez[1] - bz.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const zz = this.view;
          zz.waiting || (zz.blocked ? this.sK({
            ...zz,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const zz = this.placing,
            {
              id: uz,
              rotation: bz,
              corner: Ez
            } = zz;
          this.api.sendCommand(`${nz} place ${uz} ${Ez.join(" ")} ${bz}`), zz.sent = {
            atMs: performance.now(),
            corner: [...Ez],
            rotation: bz,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${nz} preview off`))
        }, this.chunkWatch = new Bu(zz), this.meshes = new bb(zz)
      }
      getView() {
        return this.view
      }
      sd() {
        const zz = this.placing;
        null !== zz && (null !== zz.sent && !zz.sent.timedOut && performance.now() - zz.sent.atMs > 3e3 ? (zz.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(zz) || this.chunkWatch.changed()) && this.update())
      }
      afterRender(zz) {
        const uz = this.placing;
        null !== uz && (! function(zz, uz) {
          for (let bz = 0; bz < 3; bz++) uz.eye[bz] = zz.cameraPosition[bz], uz.forward[bz] = zz.cameraDirection[bz];
          uz.tanHalfFovX = zz.tanHalfFovX, uz.tanHalfFovY = zz.tanHalfFovY
        }(zz, this.camera), null !== uz.hover && this.moveCentreTo(this.camera, uz.hover[0], uz.hover[1]))
      }
      WZ(zz) {
        const uz = this.placing;
        if (null === uz || null === uz.sent || "active" !== zz[0]) return;
        const {
          sent: bz
        } = uz, [, Ez, nz, iz, lz, Mz, tz] = zz;
        nz && Ez === uz.id && tz === bz.rotation && iz === bz.corner[0] && lz === bz.corner[1] && Mz === bz.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(zz) {
        let [uz, , bz] = zz;
        const Ez = this.api.getTargetedBlock();
        if (null === Ez) return null;
        const [nz, , iz] = Ez.position;
        return [nz - Math.floor(uz / 2), iz - Math.floor(bz / 2)]
      }
      playerLevel() {
        var zz;
        const [uz, bz, Ez] = this.api.Gs(this.localPlayerId);
        if (null !== (zz = this.api.getLocalPlayerMovement()) && void 0 !== zz && zz.onGround) return Math.ceil(bz - .01);
        const [nz, iz, lz] = [Math.floor(uz), Math.floor(bz), Math.floor(Ez)];
        for (let Mz = iz; Mz >= iz - 2; Mz--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(nz, Mz, lz))) return Mz + 1;
        return iz
      }
      followPlayerLevel(zz) {
        if (Xb(zz)) return !1;
        const uz = this.playerLevel();
        return uz !== zz.corner[1] && (zz.corner[1] = uz, !0)
      }
      moveCentreTo(zz, uz, bz) {
        const Ez = this.placing,
          nz = Zb(zz, uz, bz, Ez.corner[1]);
        if (null !== nz) {
          const [zz, , uz] = yz(Ez.id, Ez.rotation).size;
          this.moveTo(Math.round(nz[0] - zz / 2), Math.round(nz[1] - uz / 2))
        }
      }
      moveTo(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const Ez = this.placing;
        if (Xb(Ez)) return;
        const [nz, iz, lz] = Ez.corner;
        if (this.centreOnPlot(nz, lz) && !this.centreOnPlot(zz, uz, bz))
          if (this.centreOnPlot(zz, lz, bz)) uz = lz;
          else {
            if (!this.centreOnPlot(nz, uz, bz)) return;
            zz = nz
          } zz === nz && uz === lz && bz === Ez.rotation || (Ez.rotation = bz, Ez.corner = [zz, iz, uz], this.update())
      }
      centreOnPlot(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: Ez,
          corner: nz
        } = this.placing, [iz, , lz] = yz(Ez, bz).size;
        return this.api.canModifyBlockAt(zz + Math.floor(iz / 2), nz[1], uz + Math.floor(lz / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.sK(null)
      }
      update() {
        const {
          id: zz,
          rotation: uz,
          corner: bz,
          refusals: Ez
        } = this.placing, nz = new ub, iz = [];
        let lz = !1,
          Mz = 0;
        for (const {
            offset: Oz,
            block: pz
          }
          of yz(zz, uz).cells) {
          const [zz, uz, Ez] = [bz[0] + Oz[0], bz[1] + Oz[1], bz[2] + Oz[2]];
          iz.push(zz, uz, Ez);
          const tz = !this.api.canModifyBlockAt(zz, uz, Ez),
            Hz = this.api.getBlockId(zz, uz, Ez),
            dz = !Tu(Hz) && !Au(this.api.blockNameToBlockId(pz), Hz);
          lz ||= tz, Mz += dz ? 1 : 0, tz || dz ? nz.add(zz, uz, Ez, zb, ku) : nz.add(zz, uz, Ez, Pu(pz), Kb, cu(pz))
        }
        this.chunkWatch.watch(iz), this.meshes.show(nz.toArray());
        const tz = this.view,
          Hz = Xb(this.placing);
        (null === tz || void 0 === tz ? void 0 : tz.id) === zz && tz.blocked === lz && tz.toClear === Mz && tz.waiting === Hz && tz.refusals === Ez || this.sK({
          id: zz,
          blocked: lz,
          toClear: Mz,
          waiting: Hz,
          refusals: Ez
        })
      }
      sK(zz) {
        this.view = zz, Oz.k.sK(Rb, zz, !0)
      }
    }

    function Xb(zz) {
      let {
        sent: uz
      } = zz;
      return null !== uz && !uz.timedOut
    }
    var fb = bz(4035),
      sb = bz(38496);

    function rb(zz, uz, bz) {
      const Ez = [255 * zz, 255 * uz, 255 * bz],
        [nz, iz, lz] = Ez.map((zz => zz + .4 * (255 - zz)));
      return {
        texture: "square_particle",
        Bp: 48,
        minLifeTime: .3 / sb.c,
        maxLifeTime: .55 / sb.c,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * sb.c * sb.c, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...Ez, 1],
          maxColor: [nz, iz, lz, 1]
        }, {
          timeFraction: 1,
          minColor: [...Ez, 0],
          maxColor: [nz, iz, lz, 0]
        }],
        blendMode: fb.d.Standard
      }
    }
    const ob = {
      texture: "glint",
      mipmaps: !1,
      Bp: 96,
      minLifeTime: .5 / sb.c,
      maxLifeTime: .9 / sb.c,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * sb.c * sb.c, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: fb.d.OneOne
    };
    class Nb {
      constructor(zz, uz) {
        this.api = zz, this.localPlayerId = uz, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(zz) {
        if (this.api.particlesEnabled())
          for (const [uz, bz, Ez, nz, iz, lz] of zz.slice(0, 3)) {
            const zz = `${nz},${iz},${lz}`;
            let Mz = this.chips.get(zz);
            void 0 === Mz && (Mz = this.api.createParticles(rb(nz, iz, lz), {
              pos: [uz + .5, bz + .5, Ez + .5]
            }), this.chips.set(zz, Mz));
            for (let uz = 0; uz < 8; uz++) this.setPoint(uz, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            Mz.emitPoints([uz + .5, bz + .5, Ez + .5], this.points, 8)
          }
      }
      layerDone(zz) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const uz = zz.length / 3;
        if (0 === uz || !this.api.particlesEnabled()) return;
        const bz = Math.min(uz, 48),
          [Ez, nz, iz] = [zz[0] + .5, zz[1] + 1, zz[2] + .5];
        let lz = 0;
        for (let Mz = 0; Mz < bz; Mz++) {
          const tz = 3 * Math.floor(Mz * uz / bz);
          for (let uz = 0; uz < 2; uz++) this.setPoint(lz++, zz[tz] + Math.random() - Ez, zz[tz + 1] + 1 - nz, zz[tz + 2] + Math.random() - iz, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(ob, {
          pos: [Ez, nz, iz]
        }), this.sparkles.emitPoints([Ez, nz, iz], this.points, lz)
      }
      dispose() {
        var zz;
        for (const uz of this.chips.values()) uz.stop();
        this.chips.clear(), null === (zz = this.sparkles) || void 0 === zz || zz.stop(), this.sparkles = null
      }
      setPoint(zz, uz, bz, Ez, nz) {
        const iz = 4 * zz;
        this.points[iz] = uz, this.points[iz + 1] = bz, this.points[iz + 2] = Ez, this.points[iz + 3] = nz
      }
    }
    var vb = bz(1923);
    const xb = "SpecialAction1",
      Jb = "KeyY",
      Ab = "KeyX";

    function Tb(zz) {
      let {
        placement: uz
      } = zz;
      const bz = (0, Az.h)(Rb, uz.getView()),
        {
          t: Ez
        } = (0, Lz.F)(),
        {
          isTouchScreen: nz
        } = (0, Mz.m)(["isTouchScreen"]),
        iz = null !== bz,
        lz = iz && !bz.blocked && !bz.waiting;
      if ((0, Jz.e)((zz => iz && !zz.repeat && !(0, Hz.isTypingInInput)() && !(0, tz.l)() && !nz), (zz => {
          const bz = function(zz, uz, bz) {
            if (zz === Ab) return uz.stop;
            if (zz === Jb) return bz ? uz.build : Pb;
            return vb.s[xb].includes(zz) ? uz.rotate : null
          }(zz.code, uz, lz);
          null !== bz && (zz.stopPropagation(), bz())
        })), !iz) return null;
      let Oz = nz ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return bz.blocked ? Oz = "plotsGame:placementOffPlot" : bz.toClear > 0 && (Oz = "plotsGame:placementClear"), (0, Qz.jsx)(lu.d, {
        placement: "bottom",
        children: (0, Qz.jsxs)("div", {
          className: "PlotsPlacementCard",
          children: [(0, Qz.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: Ez(Zz(bz.id).displayName.translationKey)
          }), (0, Qz.jsx)("div", {
            className: oz()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: bz.refusals > 0
            }),
            children: Ez(Oz)
          }, bz.refusals), (0, Qz.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, Qz.jsxs)(vz.f, {
              onClick: uz.rotate,
              children: [(0, Qz.jsx)(Lb, {
                noaAction: xb
              }), Ez("plotsGame:placementRotate")]
            }), (0, Qz.jsxs)(vz.K, {
              onClick: uz.stop,
              children: [(0, Qz.jsx)(Lb, {
                keyCode: Ab
              }), Ez("general:cancel")]
            }), (0, Qz.jsxs)(vz.q, {
              disabled: !lz,
              onClick: uz.build,
              children: [(0, Qz.jsx)(Lb, {
                keyCode: Jb
              }), Ez("plotsGame:placementBuild")]
            })]
          })]
        })
      })
    }

    function Lb(zz) {
      return (0, Qz.jsx)(tu.e, {
        className: "PlotsPlacementKey",
        ...zz
      })
    }

    function Pb() {}
    var Gb = bz(4300);
    class ab {
      constructor(zz) {
        this.placement = zz, this.press = null
      }
      down(zz) {
        if (null !== this.press) return !1;
        const {
          id: uz,
          mouse: bz,
          x: Ez,
          y: nz,
          atMs: iz
        } = zz;
        return this.press = {
          id: uz,
          mouse: bz,
          x: Ez,
          y: nz,
          atMs: iz,
          moved: !1
        }, bz || this.placement.beginDrag(zz.ndcX, zz.ndcY), !0
      }
      move(zz) {
        const uz = this.press;
        null !== uz && uz.id === zz.id && (uz.moved ||= Math.hypot(zz.x - uz.x, zz.y - uz.y) > 8), zz.mouse ? this.placement.hoverAt(zz.ndcX, zz.ndcY) : (null === uz || void 0 === uz ? void 0 : uz.id) === zz.id && this.placement.dragTo(zz.ndcX, zz.ndcY)
      }
      up(zz) {
        const uz = this.press;
        (null === uz || void 0 === uz ? void 0 : uz.id) === zz.id && (this.move(zz), this.end(), !uz.moved && (uz.mouse || zz.atMs - uz.atMs <= 250) && this.placement.tap())
      }
      cancel(zz) {
        var uz;
        (null === (uz = this.press) || void 0 === uz ? void 0 : uz.id) === zz && this.end()
      }
      leave(zz) {
        let {
          id: uz,
          mouse: bz
        } = zz;
        bz && this.placement.endHover(), this.cancel(uz)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }

    function Vb(zz) {
      let {
        placement: uz
      } = zz;
      return null === (0, Az.h)(Rb, uz.getView()) ? null : (0, Qz.jsx)(mb, {
        placement: uz
      })
    }

    function mb(zz) {
      let {
        placement: uz
      } = zz;
      (0, Gb.e)(!0, !0, "PlotsPlacementLayer");
      const bz = (0, iz.useMemo)((() => new ab(uz)), [uz]);
      return (0, Qz.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: zz => {
          "mouse" === zz.pointerType && 0 !== zz.button || !bz.down(qb(zz)) || zz.currentTarget.setPointerCapture(zz.pointerId)
        },
        onPointerMove: zz => {
          bz.move(qb(zz))
        },
        onPointerUp: zz => {
          bz.up(qb(zz))
        },
        onPointerCancel: zz => {
          bz.cancel(zz.pointerId)
        },
        onLostPointerCapture: zz => {
          bz.cancel(zz.pointerId)
        },
        onPointerLeave: zz => {
          bz.leave(qb(zz))
        },
        "aria-hidden": !0
      })
    }

    function qb(zz) {
      const {
        left: uz,
        top: bz,
        width: Ez,
        height: nz
      } = zz.currentTarget.getBoundingClientRect();
      return {
        id: zz.pointerId,
        mouse: "mouse" === zz.pointerType,
        x: zz.clientX,
        y: zz.clientY,
        ndcX: (zz.clientX - uz) / Ez * 2 - 1,
        ndcY: 1 - (zz.clientY - bz) / nz * 2,
        atMs: zz.timeStamp
      }
    }
    var hb = bz(2261),
      Ub = bz(36162),
      cb = bz(1912),
      gb = bz(1249);
    const Sb = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function yb(zz) {
      let {
        hud: uz
      } = zz;
      const bz = (0, Az.h)(Ou, uz.getPlot()),
        [Ez, nz] = (0, iz.useState)(null),
        lz = (0, Ub.j)(Ez);
      if ("none" === bz[0]) return null;
      const [, Mz, tz, Hz, Oz, pz] = bz;
      return (0, Qz.jsx)("div", {
        className: oz()("PlotsPlotBannerContainer", {
          Below: lz
        }),
        children: (0, Qz.jsx)(Db, {
          plotX: Mz,
          plotZ: tz,
          ownerName: Hz,
          ownerId: Oz,
          relation: pz,
          plaqueRef: nz
        }, `${Mz},${tz}`)
      })
    }

    function Db(zz) {
      var uz, bz;
      let {
        plotX: Ez,
        plotZ: nz,
        ownerName: iz,
        ownerId: lz,
        relation: Mz,
        plaqueRef: tz
      } = zz;
      const {
        t: Hz
      } = (0, Lz.F)(), Oz = (0, cb.h)("hiddenPlayerNames"), pz = (0, cb.h)("players"), dz = null === lz ? null : null !== (uz = null === (bz = pz.byId[lz]) || void 0 === bz ? void 0 : bz.cosmetics) && void 0 !== uz ? uz : null, Fz = Hz("plotsGame:plotBannerCoords", {
        x: Ez,
        z: nz
      }), Zz = "own" === Mz || null !== iz;
      return (0, Qz.jsxs)("div", {
        ref: tz,
        className: oz()("PlotsPlotBanner", {
          Own: "own" === Mz,
          Shared: "shared" === Mz
        }),
        role: "status",
        children: [(0, Qz.jsxs)("span", {
          className: oz()("PlotsPlotBannerSeal", {
            Face: null !== dz
          }),
          children: [null !== dz && (0, Qz.jsx)(hb.e, {
            cosmetics: dz
          }), null === dz && (0, Qz.jsx)(Nz.c, {
            name: Sb[Mz]
          })]
        }), (0, Qz.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, Qz.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === Mz && Hz("plotsGame:plotBannerYours"), "own" !== Mz && null !== iz && Hz("plotsGame:plotBannerOwner", {
              name: (0, gb.c)(iz, Oz)
            }), !Zz && Fz]
          }), Zz && (0, Qz.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [Fz, "shared" === Mz && (0, Qz.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: Hz("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }

    function Qb(zz) {
      let {
        progress: uz,
        goal: bz
      } = zz;
      const Ez = Math.min(uz, bz);
      return (0, Qz.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, Qz.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": bz,
          "aria-valuenow": Ez,
          children: (0, Qz.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${Ez/bz})`
            }
          })
        }), (0, Qz.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [Ez, "/", bz]
        })]
      })
    }

    function Wb(zz) {
      return {
        translationKey: `plotsGame:${zz}`,
        actions: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
      }
    }
    const eb = {
      house: {
        icon: "house",
        titleKey: "plotsGame:starterLotHouseTitle",
        desktop: Wb("starterLotHouseHint", ["alt-fire"]),
        touch: Wb("starterLotHouseHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotHousePlain"
      },
      garden: {
        icon: "sparkle",
        titleKey: "plotsGame:starterLotGarden",
        desktop: Wb("starterLotGardenHint", ["alt-fire"]),
        touch: Wb("starterLotGardenHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotGardenPlain"
      },
      boulder: {
        icon: "hammer",
        titleKey: "plotsGame:starterLotBoulder",
        desktop: Wb("starterLotBreakHint", ["primary-fire"]),
        touch: Wb("starterLotBreakHintTouch"),
        plainKey: "plotsGame:starterLotBreakPlain"
      },
      fly: {
        icon: "angles-up",
        titleKey: "plotsGame:starterLotFly",
        desktop: Wb("starterLotFlyHint", ["jump"]),
        touch: Wb("starterLotFlyHintTouch"),
        plainKey: "plotsGame:starterLotFlyPlain"
      },
      backpack: {
        icon: "backpack",
        titleKey: "plotsGame:starterLotBackpack",
        desktop: Wb("starterLotBackpackHint", ["OpenInventory"]),
        touch: Wb("starterLotBackpackHintTouch"),
        plainKey: "plotsGame:starterLotBackpackPlain"
      },
      neighbour: {
        icon: "person",
        titleKey: "plotsGame:starterLotNeighbour",
        desktop: Wb("starterLotNeighbourHint", ["forward", "left", "backward", "right"]),
        touch: Wb("starterLotNeighbourHintTouch"),
        plainKey: "plotsGame:starterLotNeighbourPlain"
      }
    };

    function jb(zz, uz, bz) {
      const {
        translationKey: Ez,
        actions: nz
      } = bz ? uz.touch : uz.desktop;
      if (0 === nz.length) return zz(Ez);
      const iz = [];
      for (const lz of nz) {
        const Ez = (0, vb.p)(lz, bz),
          nz = vb.s[lz][0];
        if (null === Ez && void 0 === nz) return zz(uz.plainKey);
        iz.push(null === Ez ? (0, vb.l)(nz) : zz(Ez.translationKey))
      }
      return zz(Ez, {
        key: iz.join("")
      })
    }

    function Ib(zz) {
      let {
        hud: uz
      } = zz;
      const bz = (0, Az.h)(Hu, uz.getStep()),
        {
          t: Ez
        } = (0, Lz.F)();
      return (0, Qz.jsxs)(lu.d, {
        placement: "bottom",
        children: ["step" === bz[0] && (0, Qz.jsx)(Bb, {
          step: bz[1],
          progress: bz[2],
          goal: bz[3]
        }, bz[1]), "celebrate" === bz[0] && (0, Qz.jsx)(Cb, {
          className: oz()("Celebrate", {
            Gold: "house" === bz[1]
          }),
          icon: "star",
          title: Ez("house" === bz[1] ? "plotsGame:starterLotYourPlot" : "plotsGame:starterLotBriefDone")
        }, `celebrate-${bz[1]}`)]
      })
    }

    function Bb(zz) {
      let {
        step: uz,
        progress: bz,
        goal: Ez
      } = zz;
      const {
        isTouchScreen: nz
      } = (0, Mz.m)(["isTouchScreen"]), {
        t: iz
      } = (0, Lz.F)(), lz = eb[uz];
      return (0, Qz.jsxs)(Cb, {
        icon: lz.icon,
        title: iz(lz.titleKey),
        children: [(0, Qz.jsx)("div", {
          className: "PlotsStepCardHint SmallTextLight",
          children: jb(iz, lz, nz)
        }), Ez > 1 && (0, Qz.jsx)(Qb, {
          progress: bz,
          goal: Ez
        }), "backpack" === uz && nz && (0, Qz.jsx)(Yb, {})]
      })
    }

    function Cb(zz) {
      let {
        className: uz,
        icon: bz,
        title: Ez,
        children: nz
      } = zz;
      return (0, Qz.jsxs)("div", {
        className: oz()("PlotsStepCard", uz),
        role: "status",
        children: [(0, Qz.jsx)("span", {
          className: "PlotsStepCardIcon",
          children: (0, Qz.jsx)(Nz.c, {
            name: bz
          })
        }), (0, Qz.jsxs)("div", {
          className: "PlotsStepCardBody",
          children: [(0, Qz.jsx)("div", {
            className: "PlotsStepCardTitle SmallTextBold",
            children: Ez
          }), nz]
        })]
      })
    }

    function Yb() {
      return (0, iz.useEffect)((() => (Mz.e.set({
        backpackPointerRequested: !0
      }), () => {
        Mz.e.set({
          backpackPointerRequested: !1
        })
      })), []), null
    }
    const kb = function(zz, uz, bz, Ez) {
      let {
        localPlayerId: nz
      } = Ez;
      const Mz = new pu;
      let tz = null,
        Hz = null,
        Oz = null,
        pz = null,
        dz = null;
      const Fz = [];
      return {
        onCreate: zz => {
          tz = new Nb(zz, nz), Hz = new tb(zz, nz, tz), Oz = new tb(zz, nz, tz), pz = new wb(zz, nz), dz = new sz(zz, pz), Fz.push((0, lz.x)((0, iz.createElement)(iz.Fragment, null, (0, iz.createElement)(yb, {
            hud: Mz
          }), (0, iz.createElement)(Ib, {
            hud: Mz
          }), (0, iz.createElement)(Fu, {
            hud: Mz,
            journal: dz
          }), (0, iz.createElement)(Vb, {
            placement: pz
          }), (0, iz.createElement)(Tb, {
            placement: pz
          })), {
            content: (0, iz.createElement)(nu, {
              journal: dz
            })
          }))
        },
        sd: () => {
          Hz.sd(), Oz.sd(), pz.sd(), dz.sd()
        },
        onPlayerAttemptAltAction: (zz, uz, bz, Ez, nz, iz) => {
          var lz;
          if (null !== iz) return;
          const Mz = void 0 === uz ? null : [uz, bz, Ez];
          return null !== (lz = Hz.attemptAltAction(Mz)) && void 0 !== lz ? lz : Oz.attemptAltAction(Mz)
        },
        onPlayerClickUp: () => {
          Hz.endPress(), Oz.endPress()
        },
        onAfterRender: (zz, uz) => {
          pz.afterRender(uz), Hz.afterRender(uz), Oz.afterRender(uz)
        },
        onClose: () => {
          for (const zz of Fz) zz();
          tz.dispose(), Hz.dispose(), Oz.dispose(), pz.dispose(), tz = null, Hz = null, Oz = null, pz = null, dz = null
        },
        onReceivedMessageFromServer: (zz, uz) => {
          if ("plotsStarterLot" === zz) Mz.receiveStep(uz);
          else if ("plotsPlot" === zz) Mz.receivePlot(uz);
          else if ("plotsStarterHouse" === zz) Hz.WZ(uz);
          else if ("plotsBlueprint" === zz) {
            const zz = uz;
            Oz.WZ(zz), pz.WZ(zz)
          } else "plotsJournal" === zz ? dz.WZ(uz) : "plotsJournalOpen" === zz ? dz.openFromServer() : "plotsPreviewEnd" === zz && pz.endFromServer()
        }
      }
    }
  },
  38496: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Ez,
      f: () => iz
    });
    const Ez = 1 / .6,
      nz = {
        kind: "smokePuff"
      };
    class iz {
      constructor(zz, uz, bz) {
        this.style = zz, this.Bp = uz, this.half = bz, this.particles = null, this.lastFrame = -1
      }
      emit(zz, uz, bz) {
        let iz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return bz !== this.lastFrame && (this.lastFrame = bz, this.particles || (this.particles = zz.createParticles(function(zz, uz) {
          const [
            [bz, iz, lz],
            [Mz, tz, Hz]
          ] = zz.colours;
          return {
            texture: zz.soft ? nz : "square_particle",
            Bp: uz,
            minLifeTime: zz.life[0] / Ez,
            maxLifeTime: zz.life[1] / Ez,
            minEmitPower: zz.power[0] * Ez,
            maxEmitPower: zz.power[1] * Ez,
            minSize: zz.size[0],
            maxSize: zz.size[1],
            emitRate: 0,
            gravity: [0, zz.lift * Ez * Ez, 0],
            dir1: [-zz.spread, 1, -zz.spread],
            dir2: [zz.spread, 1, zz.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [bz, iz, lz, zz.alpha],
              maxColor: [Mz, tz, Hz, zz.alpha]
            }, {
              timeFraction: 1,
              minColor: [bz, iz, lz, 0],
              maxColor: [Mz, tz, Hz, 0]
            }],
            blendMode: zz.blendMode
          }
        }(this.style, this.Bp), {
          pos: uz,
          half: this.half
        })), this.particles.moveTo(uz, this.half), this.particles.emit(iz), !0)
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