export const id = 227;
export const ids = [227];
export const modules = {
  38377: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      default: () => TV
    });
    const VB = [0, 90, 180, 270],
      yB = "plotsblueprint";
    var pB = dB(62),
      lB = dB(35595),
      JB = dB(21),
      YB = dB(1507),
      gB = dB(1596),
      oB = dB(24);
    const kB = [
        ["well", "greenhouse", "farmhouse"],
        ["tent", "cottage", "windmill"],
        ["marketStall", "gazebo", "bakery"],
        ["bridge", "lookoutTower", "lighthouse"]
      ],
      LB = kB.flat(),
      OB = {
        well: {
          displayName: {
            translationKey: "plotsGame:blueprintWell"
          },
          tier: "small"
        },
        greenhouse: {
          displayName: {
            translationKey: "plotsGame:blueprintGreenhouse"
          },
          tier: "small"
        },
        farmhouse: {
          displayName: {
            translationKey: "plotsGame:blueprintFarmhouse"
          },
          tier: "medium"
        },
        tent: {
          displayName: {
            translationKey: "plotsGame:blueprintTent"
          },
          tier: "small"
        },
        cottage: {
          displayName: {
            translationKey: "plotsGame:blueprintCottage"
          },
          tier: "small"
        },
        windmill: {
          displayName: {
            translationKey: "plotsGame:blueprintWindmill"
          },
          tier: "medium"
        },
        marketStall: {
          displayName: {
            translationKey: "plotsGame:blueprintMarketStall"
          },
          tier: "small"
        },
        gazebo: {
          displayName: {
            translationKey: "plotsGame:blueprintGazebo"
          },
          tier: "small"
        },
        bakery: {
          displayName: {
            translationKey: "plotsGame:blueprintBakery"
          },
          tier: "medium"
        },
        bridge: {
          displayName: {
            translationKey: "plotsGame:blueprintBridge"
          },
          tier: "small"
        },
        lookoutTower: {
          displayName: {
            translationKey: "plotsGame:blueprintLookoutTower"
          },
          tier: "small"
        },
        lighthouse: {
          displayName: {
            translationKey: "plotsGame:blueprintLighthouse"
          },
          tier: "medium"
        }
      };

    function DB(BB) {
      return OB[BB]
    }
    const uB = new Map(kB.flatMap((BB => BB.slice(1).map(((TB, dB) => [TB, BB[dB]])))));

    function HB(BB) {
      var TB;
      return null !== (TB = uB.get(BB)) && void 0 !== TB ? TB : null
    }
    const EB = {
      well: "plotsGame:journalNoteWell",
      tent: "plotsGame:journalNoteTent",
      lookoutTower: "plotsGame:journalNoteLookoutTower",
      farmhouse: "plotsGame:journalNoteFarmhouse",
      windmill: "plotsGame:journalNoteWindmill"
    };

    function vB(BB, TB) {
      const dB = new Set(BB),
        VB = function(BB) {
          const TB = new Set(BB);
          return new Set(LB.filter((BB => {
            const dB = HB(BB);
            return null === dB || TB.has(dB)
          })))
        }(dB);
      return LB.map((BB => {
        const yB = BB === TB;
        return dB.has(BB) ? {
          id: BB,
          active: yB,
          state: "completed",
          unlockedBy: null
        } : VB.has(BB) ? {
          id: BB,
          active: yB,
          state: "open",
          unlockedBy: null
        } : {
          id: BB,
          active: yB,
          state: "locked",
          unlockedBy: HB(BB)
        }
      }))
    }
    const mB = "plotsJournalChanged";
    class iB {
      constructor(BB, TB) {
        this.api = BB, this.placement = TB, this.pages = null, this.openRequested = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.yD("journal_opened")
        }, this.build = BB => {
          this.yD("placement_started"), this.placement.start(BB), (0, lB.g)()
        }, this.putAway = () => {
          this.api.sendCommand(`${yB} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      MD(BB) {
        let [, TB, dB] = BB;
        this.pages = vB(TB, dB), oB.h.yH(mB, this.pages, !0)
      }
      openFromServer() {
        this.openRequested = !0, this.dL()
      }
      dL() {
        this.openRequested && !JB.d.get("loadingOverlayVisible") && (this.openRequested = !1, null === this.pages || (0, YB.l)() || (0, gB.isTypingInInput)() || null !== this.placement.getView() || (0, lB.o)())
      }
      yD(BB) {
        this.reported.has(BB) || (this.reported.add(BB), this.api.sendCommand(`${yB} report ${BB}`))
      }
    }
    var NB = dB(933),
      tB = dB.n(NB),
      fB = dB(946),
      sB = dB(1324),
      MB = dB(3942),
      zB = dB(2892),
      wB = dB(1317),
      UB = dB(1826),
      FB = dB(1078),
      KB = dB(8653);
    const rB = [0, 90, 180, 270],
      IB = /^(meta\|rot\d)\|([lrud]+)$/,
      cB = "nesw",
      SB = /^meta\|([nesw]*)\|?(Stacked)?$/,
      PB = function(BB) {
        const TB = new WeakMap;
        return (dB, VB) => {
          let yB = TB.get(dB);
          return void 0 === yB && (yB = BB(dB, VB), TB.set(dB, yB)), yB
        }
      }((BB => new QB(BB)));
    class QB {
      constructor(BB) {
        this.blockMetadata = BB, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const TB = new Set(Object.keys(BB).map((TB => BB[TB].id)));
        TB.add(0), this.maxBlockId = Math.max(...TB)
      }
      static
      for (BB) {
        return PB(BB)
      }
      getBlockIdMapping(BB, TB) {
        const dB = this.getBlockIdMappingKey(BB, TB);
        let VB = this.blockIdMappings.get(dB);
        return void 0 === VB && rB.includes(BB) && (VB = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, BB, TB), this.blockIdMappings.set(dB, VB)), VB
      }
      turnBlockId(BB, TB, dB) {
        return this.mapBlockId(this.blockMetadata[BB], TB, this.getRotationMapping(TB, dB), dB)
      }
      getBlockIdMappingKey(BB, TB) {
        return `r${BB}|m${Number(TB)}`
      }
      createBlockIdMapping(BB, TB, dB, VB) {
        const yB = new Uint16Array(TB + 1),
          pB = this.getRotationMapping(dB, VB);
        for (const lB in BB) {
          const TB = BB[lB];
          yB[TB.id] = this.mapBlockId(TB, dB, pB, VB)
        }
        return yB
      }
      getRotationMapping(BB, TB) {
        const dB = Math.round(BB / 90),
          VB = new Uint8Array(4);
        for (let yB = 0; yB < 4; yB++) VB[yB] = (4 + yB - dB) % 4;
        if (TB) {
          let BB = VB[0];
          VB[0] = VB[1], VB[1] = BB, BB = VB[2], VB[2] = VB[3], VB[3] = BB
        }
        return VB
      }
      mapBlockId(BB, TB, dB, VB) {
        var yB;
        const {
          blockMetadata: pB
        } = this, lB = Math.round(TB / 90), {
          id: JB,
          meta: YB
        } = BB, {
          rot: gB,
          rootName: oB,
          metaStr: kB
        } = YB;
        let LB;
        const [, OB, DB] = null !== (yB = SB.exec(kB)) && void 0 !== yB ? yB : [];
        if (void 0 !== OB) {
          var uB, HB;
          LB = null !== (uB = null === (HB = pB[`${oB}|meta|${[cB.split("").filter(((BB,TB)=>OB.split("").some((BB=>{const dB=cB.indexOf(BB);return((VB?3-dB:dB)+lB)%4===TB})))).join(""),DB].filter(Boolean).join("|")}`]) || void 0 === HB ? void 0 : HB.id) && void 0 !== uB ? uB : JB
        } else if (null === gB) LB = JB;
        else {
          var EB, vB;
          const BB = dB[gB - 1] + 1;
          let TB = kB.replace(`rot${gB}`, `rot${BB}`);
          VB && YB.stairsCorner && (TB = TB.replace(/(Left|Right)$/, (BB => "Left" === BB ? "Right" : "Left"))), VB && "Chest" === oB && (TB = TB.replace(/\|(left|right)$/, ((BB, TB) => "left" === TB ? "|right" : "|left")));
          const yB = IB.exec(TB);
          if (VB && null !== yB) {
            const BB = "lrud".split("").filter((BB => yB[2].includes("l" === BB ? "r" : "r" === BB ? "l" : BB)));
            TB = `${yB[1]}|${BB.join("")}`
          }
          const lB = `${oB}|${TB}`;
          if (LB = null !== (EB = null === (vB = pB[lB]) || void 0 === vB ? void 0 : vB.id) && void 0 !== EB ? EB : null, null === LB) {
            const BB = pB[oB];
            LB = BB.rootMetaDesc === lB ? BB.id : JB
          }
        }
        return LB
      }
    }

    function RB(BB, TB, dB) {
      let {
        xRotationMappedOrigin: VB,
        shouldSwapXZ: yB
      } = dB;
      const pB = yB ? TB : BB;
      return null === VB ? pB : VB - pB
    }

    function aB(BB, TB, dB) {
      let {
        zRotationMappedOrigin: VB,
        shouldSwapXZ: yB
      } = dB;
      const pB = yB ? BB : TB;
      return null === VB ? pB : VB - pB
    }
    const ZB = {
        well: {
          size: [7, 8, 5],
          palette: ["Daisy", "Stone Bricks", "Cracked Stone Bricks", "Stone Bricks Slab", "Maple Log", "Bricks Stairs|meta|rot4|bot", "Light Blue Glass", "Mossy Stone Bricks", "Maple Wood Planks", "Bricks Slab", "Bricks Stairs|meta|rot2|bot", "Poppy", "Dandelion"],
          layers: [".bbbbb. abgggh. .bgggb. .cgggbl .bbbbbm", ".bbbbb. .b...b. .b...b. .b...b. .bhbbb.", ".ddddd. .d...d. .e...e. .d...d. .ddddd.", "....... ....... .e...e. ....... .......", "....... ....... .eiiie. ....... .......", "....... .f...k. .fiiik. .f...k. .......", "....... ..f.k.. ..fik.. ..f.k.. .......", "....... ...j... ...j... ...j... ......."]
        },
        greenhouse: {
          size: [5, 6, 7],
          palette: ["Stone Bricks", "White Concrete", "Glass", "Dirt", "Poppy", "Dandelion", "Maple Leaves", "Red Tulip", "Daisy", "White Concrete Stairs|meta|rot4|bot", "Workbench", "Smooth Stone Slab", "White Concrete Slab", "Pink Tulip", "Bluebell", "Orange Tulip", "White Tulip", "White Concrete Stairs|meta|rot2|bot"],
          layers: ["aaaaa adkda adlda adlda adlda adlda aa.aa", "bcccb ce.nc cf.oc bg.gb ch.pc ci.qc bc.cb", "bcccb c...c c...c b...b c...c c...c bcccb", "bcccb c...c c...c b...b c...c c...c bcccb", ".jcr. .c.c. .c.c. .j.r. .c.c. .c.c. .jcr.", "..m.. ..m.. ..m.. ..m.. ..m.. ..m.. ..m.."]
        },
        farmhouse: {
          size: [13, 9, 9],
          palette: ["Pine Trapdoor|meta|rot4|open", "Pine Stairs|meta|rot4|bot", "White Concrete", "Red Planks", "Pumpkin", "Glass", "Chest", "Carved Pumpkin", "Lantern|meta|rot1|side", "Workbench", "Pine Slab", "Yellow Wool", "Pine Stairs|meta|rot2|bot", "Pine Trapdoor|meta|rot2|open", "Maple Fence|meta|es", "Maple Fence|meta|ne", "Maple Fence|meta|s", "Maple Fence|meta|esw", "Maple Fence|meta|ew", "Maple Fence|meta|new", "Maple Fence|meta|sw", "Maple Fence|meta|ns", "Maple Fence|meta|nsw", "Maple Fence|meta|nw"],
          layers: ["............. .cdddddc..... .dgj.lld..... .d...lld.orsu .d.....d.pe.v .d.....d...ew .d.....d..e.v .cd...dc.q.ew .eh......pstx", "............. .cdddddc..... ad....ldn.... .f.....f..... .d.....d..... .f.....f..... ad.....dn.... .cd...dc..... .............", "............. .cdddddc..... ad.....dn.... .f.....f..... .d.....d..... .f.....f..... ad.....dn.... .cd...dc..... ..i...i......", "............. .cdddddc..... .d.....d..... .d.....d..... .d.....d..... .d.....d..... .d.....d..... .cdcccdc..... .............", "b.......m.... bdddddddm.... b.......m.... b.......m.... b.......m.... b.......m.... b.......m.... bdddddddm.... b.......m....", ".b.....m..... .bdddddm..... .b.....m..... .b.....m..... .b.....m..... .b.....m..... .b.....m..... .bddfddm..... .b.....m.....", "..b...m...... ..bdddm...... ..b...m...... ..b...m...... ..b...m...... ..b...m...... ..b...m...... ..bdcdm...... ..b...m......", "...b.m....... ...bdm....... ...b.m....... ...b.m....... ...b.m....... ...b.m....... ...b.m....... ...bdm....... ...b.m.......", "....k........ ....k........ ....k........ ....k........ ....k........ ....k........ ....k........ ....k........ ....k........"]
        },
        tent: {
          size: [10, 4, 7],
          palette: ["Red Chalk Stairs|meta|rot4|bot", "White Chalk Stairs|meta|rot4|bot", "Red Wool", "White Wool", "White Carpet", "Lantern", "Red Chalk Slab", "White Chalk Slab", "Light Blue Carpet", "Red Chalk Stairs|meta|rot2|bot", "White Chalk Stairs|meta|rot2|bot", "Chest", "Messy Stone Slab", "Torch"],
          layers: ["acccccj... b.efi.k... a.e.i.j... b.e.i.k.m. a.....jmnm bd...dk.m. ......l...", ".acccj.... .b...k.... .a...j.... .b...k.... .a...j.... .bd.dk.... ..........", "..acj..... ..b.k..... ..a.j..... ..b.k..... ..a.j..... ..bdk..... ..........", "...g...... ...h...... ...g...... ...h...... ...g...... ...h...... .........."]
        },
        cottage: {
          size: [7, 8, 7],
          palette: ["Maple Trapdoor|meta|rot4|open", "Red Chalk Bricks Stairs|meta|rot4|bot", "Maple Log", "Maple Wood Planks", "Glass", "Workbench", "Poppy", "Red Carpet", "Lantern|meta|rot1|side", "Red Chalk Bricks Slab", "Chest", "Dandelion", "Red Chalk Bricks Stairs|meta|rot2|bot", "Bricks", "Maple Trapdoor|meta|rot2|open"],
          layers: ["....... .cdddc. .df.kd. .d.h.d. .d...d. .cd.dc. ..g.l..", "....... .cdedc. ad...do .e...e. ad...do .ce.ec. .......", "....... .cdddc. .d...d. .d...d. .d...d. .cdddc. ...i...", "b.....m bdddddm b.....m b.....m b.....m bdddddm b.....m", ".b...m. .bdddm. .b...m. .b...m. .b...m. .bdedm. .b...m.", "..b.m.. ..bdm.. ..b.n.. ..b.m.. ..b.m.. ..bdm.. ..b.m..", "...j... ...j... ...jn.. ...j... ...j... ...j... ...j...", "....... ....... ....n.. ....... ....... ....... ......."]
        },
        windmill: {
          size: [9, 13, 6],
          palette: ["Pine Log", "White Wool", "Poppy", "Stone Bricks", "Mossy Stone Bricks", "Stone Bricks Stairs|meta|rot3|bot|outerRight", "Stone Bricks Stairs|meta|rot4|bot", "Stone Bricks Stairs|meta|rot1|bot|outerLeft", "Red Chalk Bricks Stairs|meta|rot3|bot|outerRight", "Red Chalk Bricks Stairs|meta|rot4|bot", "Red Chalk Bricks Stairs|meta|rot1|bot|outerLeft", "Chest", "Lantern|meta|rot1|side", "Pine Wood Planks", "Stone Bricks Stairs|meta|rot3|bot", "Sandstone", "Stone Bricks Stairs", "Red Chalk Bricks Stairs|meta|rot3|bot", "Red Chalk Bricks", "Red Chalk Bricks Stairs", "Red Chalk Bricks Slab", "Workbench", "Glass", "Red Chalk Bricks Stairs|meta|rot3|bot|outerLeft", "Red Chalk Bricks Stairs|meta|rot2|bot", "Red Chalk Bricks Stairs|meta|rot1|bot|outerRight", "Stone Bricks Stairs|meta|rot3|bot|outerLeft", "Stone Bricks Stairs|meta|rot2|bot", "Stone Bricks Stairs|meta|rot1|bot|outerRight", "Dandelion", "Pine Trapdoor|meta|rot2|open"],
          layers: ["..ddddd.. ..dl.vd.. ..e...d.. ..d...d.. .cdd.dd~. .........", "..ddddd.. ..d...d.. ..d...d.. ..d...e.. ..dd.dd.. .........", "..ddddd.. ..d...d\x7f. ..d...w.. ..d...d\x7f. ..ddddd.. ...m.....", "..ddddd.. ..d...d.. ..d...d.. ..d...d.. ..ddddd.. .........", "..ddddd.. ..dnnnd.. ..dnnnd.. ..dnnnd.. ..ddddd.. ..bba....", "..fooo{.. ..gppp|.. ..gppp|.. ..gppp|.. ..hqqq}.. ..bba....", "......... ...ppp... ...ppp... ...ppp... ......... ..bbabbb.", "......... ...ppp... ...ppw... ...ppp... ......... ....abbb.", "......... ...ppp... ...ppp... ...ppp... ....a.... aaaaaaaaa", "......... ...ppp... ...ppp... ...ppp... ......... bbb.a....", "..irrrx.. ..jsssy.. ..jsssy.. ..jsssy.. ..ktttz.. bbb.abb..", "......... ...irx... ...jsy... ...ktz... ......... ....abb..", "......... ......... ....u.... ......... ......... ....abb.."]
        },
        marketStall: {
          size: [6, 5, 5],
          palette: ["Maple Log", "Pumpkin", "Red Chalk Slab|meta|rot1|top", "Red Chalk Slab", "Pine Wood Planks", "Chest", "Maple Wood Planks", "White Chalk Slab|meta|rot1|top", "White Chalk Slab", "Melon", "Bread Block", "Workbench", "Lantern", "Carved Pumpkin"],
          layers: ["aeeeea .f..l. ...... agggga b....n", "aeeeea ...... ...... abjkma ......", "aeeeea ...... ...... chchch dididi", "aeeeea chchch dididi ...... ......", "dididi ...... ...... ...... ......"]
        },
        gazebo: {
          size: [7, 8, 7],
          palette: ["Red Tulip", "Green Concrete Stairs|meta|rot3|bot|outerRight", "Green Concrete Stairs|meta|rot4|bot", "Green Concrete Stairs|meta|rot1|bot|outerLeft", "Maple Wood Planks", "White Concrete", "Maple Fence|meta|ns", "Green Concrete Stairs|meta|rot3|bot", "Green Concrete Stairs", "Maple Fence|meta|ew", "Maple Fence|meta|w", "Stone Bricks Stairs", "Lantern", "Green Concrete", "Maple Fence|meta|e", "Green Concrete Stairs|meta|rot3|bot|outerLeft", "Green Concrete Stairs|meta|rot2|bot", "Green Concrete Stairs|meta|rot1|bot|outerRight", "Pink Tulip"],
          layers: ["....... .eeeee. .eeeee. .eeeee. .eeeee. aeeeees ...l...", "....... .fjjjf. .g...g. .g.m.g. .g...g. .fk.of. .......", "....... .f...f. ....... ....... ....... .f...f. .......", "....... .f...f. ....... ....... ....... .f...f. .......", "bhhhhhp ceeeeeq ce...eq ce...eq ce...eq ceeeeeq diiiiir", "....... .bhhhp. .ceeeq. .ce.eq. .ceeeq. .diiir. .......", "....... ....... ..bhp.. ..cnq.. ..dir.. ....... .......", "....... ....... ....... ...m... ....... ....... ......."]
        },
        bakery: {
          size: [9, 8, 7],
          palette: ["Bricks", "Sandstone", "Red Chalk Stairs", "Cedar Stairs|meta|rot3|bot|outerRight", "Cedar Stairs|meta|rot4|bot", "Cedar Stairs|meta|rot1|bot|outerLeft", "Workbench", "Bread Block", "Poppy", "Glass", "White Chalk Stairs", "Cedar Stairs|meta|rot3|bot", "Cedar Wood Planks", "Cedar Stairs", "Chest", "Dandelion", "Lantern|meta|rot1|side", "Furnace", "Pink Tulip", "Daisy", "Cedar Stairs|meta|rot2|bot", "Cedar Stairs|meta|rot1|bot|outerRight", "Cedar Stairs|meta|rot3|bot|outerLeft", "Cedar Trapdoor|meta|rot2|open"],
          layers: ["aaaaaaaa. ago..rra. a......a. a......a. ahh...ha. aaa.aaaa. .ip..st..", "bbbbbbbb. b......bx b......j. b......j. b......bx bjj.bjjb. .........", "bbbbbbbb. b......bx b......j. b......j. b......bx bjjbbjjb. ...q.....", "bbbbbbbb. b......b. b......b. b......b. b......b. bbbbbbbb. ckckckck.", "dllllllw. emmmmmau. emmmmmmu. emmmmmmu. emmmmmmu. fnnnnnnv. .........", "......... .dlllla.. .emmmmu.. .emmmmu.. .fnnnnv.. ......... .........", "......... ......a.. ..llll... ..nnnn... ......... ......... .........", "......... ......a.. ......... ......... ......... ......... ........."]
        },
        bridge: {
          size: [3, 6, 11],
          palette: ["Stone Bricks", "Maple Stairs|meta|rot3|bot", "Maple Stairs", "Pine Fence", "Stone Bricks Stairs|meta|rot1|top", "Stone Bricks Stairs|meta|rot3|top", "Pine Log", "Maple Wood Planks", "Lantern", "Pine Fence|meta|s", "Pine Fence|meta|ns", "Pine Fence|meta|n"],
          layers: ["aaa ... ... ... ... ... ... ... ... ... aaa", "bbb aaa aaa ... ... ... ... ... aaa aaa ccc", "d.d bbb aaa ... ... ... ... ... aaa ccc d.d", "... d.d bbb eee ... ... ... fff ccc d.d ...", "... ... g.g hhh hhh hhh hhh hhh g.g ... ...", "... ... i.i j.j k.k k.k k.k l.l i.i ... ..."]
        },
        lookoutTower: {
          size: [5, 14, 5],
          palette: ["Pine Wood Planks", "Maple Log", "Pine Fence|meta|ns", "Red Concrete Stairs|meta|rot3|bot|outerRight", "Red Concrete Stairs|meta|rot4|bot", "Red Concrete Stairs|meta|rot1|bot|outerLeft", "Maple Ladder", "Pine Fence|meta|ew", "Red Concrete Stairs|meta|rot3|bot", "Red Concrete Stairs", "Lantern", "Pine Fence|meta|e", "Red Concrete Slab", "Red Concrete Stairs|meta|rot3|bot|outerLeft", "Red Concrete Stairs|meta|rot2|bot", "Red Concrete Stairs|meta|rot1|bot|outerRight"],
          layers: ["..... .b.b. ..... .b.b. .g...", "..... .b.b. ..... .b.b. .g...", "..... .b.b. ..... .b.b. .g...", "..... .bab. .a.a. .bab. .g...", "..... .b.b. ..... .b.b. .g...", "..... .b.b. ..... .b.b. .g...", "..... .b.b. ..... .b.b. .g...", "aaaaa aaaaa aaaaa aaaaa agaaa", "bhhhb c...c c.k.c c...c b.lhb", "b...b ..... ..... ..... b...b", "b...b ..... ..... ..... b...b", "diiin eaaao ea.ao eaaao fjjjp", "..... .din. .eao. .fjp. .....", "..... ..... ..m.. ..... ....."]
        },
        lighthouse: {
          size: [7, 16, 7],
          palette: ["Stone Bricks", "Pine Fence|meta|s", "Pine Fence|meta|ns", "Pine Fence|meta|n", "White Concrete", "Red Concrete", "Pine Fence|meta|e", "Red Concrete Stairs|meta|rot3|bot|outerRight", "Red Concrete Stairs|meta|rot4|bot", "Red Concrete Stairs|meta|rot1|bot|outerLeft", "Pine Fence|meta|ew", "Yellow Glass", "Red Concrete Stairs|meta|rot3|bot", "Red Concrete Stairs", "Stone Bricks Stairs", "Lantern|meta|rot1|side", "Glass", "Lantern", "Red Concrete Slab", "Red Concrete Stairs|meta|rot3|bot|outerLeft", "Red Concrete Stairs|meta|rot2|bot", "Red Concrete Stairs|meta|rot1|bot|outerRight", "Pine Fence|meta|w"],
          layers: ["....... ..eee.. .e...e. .e...e. .e...e. ..e.e.. ...o...", "....... ..eee.. .e...e. .e...e. .e...e. ..e.e.. .......", "....... ..fff.. .f...f. .f...f. .f...f. ..fff.. ...p...", "....... ..fff.. .f...f. .f...f. .f...f. ..fff.. .......", "....... ..eee.. .e...e. .e...e. .e...e. ..eee.. .......", "....... ..eee.. .e...e. .e...q. .e...e. ..eee.. .......", "....... ..fff.. .f...f. .f...f. .f...f. ..fff.. .......", "....... ..fff.. .f...f. .f...f. .f...f. ..fqf.. .......", "....... ..eee.. .e...e. .e...e. .e...e. ..eee.. .......", "....... ..eee.. .e...e. .e...e. .e...e. ..eee.. .......", ".aaaaa. aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa .aaaaa.", ".gkkkw. b.....b c.lll.c c.lrl.c c.lll.c d.....d .gkkkw.", "....... ....... ..lll.. ..l.l.. ..lll.. ....... .......", "....... .hmmmt. .ifffu. .ifffu. .ifffu. .jnnnv. .......", "....... ....... ..hmt.. ..ifu.. ..jnv.. ....... .......", "....... ....... ....... ...s... ....... ....... ......."]
        }
      },
      XB = new Map;

    function WB(BB, TB) {
      const dB = `${BB}|${TB}`;
      let VB = XB.get(dB);
      if (void 0 === VB) {
        const {
          size: yB,
          palette: pB,
          layers: lB
        } = ZB[BB], JB = 90 === TB || 270 === TB, [YB, gB] = JB ? [yB[2], yB[0]] : [yB[0], yB[2]], oB = function(BB, TB, dB) {
          let VB = null,
            yB = null,
            pB = !1;
          switch (BB) {
            case 0:
              break;
            case 90:
              VB = TB - 1, pB = !0;
              break;
            case 180:
              VB = TB - 1, yB = dB - 1;
              break;
            case 270:
              yB = dB - 1, pB = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${BB}`)
          }
          return {
            xRotationMappedOrigin: VB,
            zRotationMappedOrigin: yB,
            shouldSwapXZ: pB
          }
        }(TB, YB, gB), kB = QB.for(KB.h), LB = pB.map((BB => (0, KB.f)(kB.turnBlockId((0, KB.j)(BB), TB, !1)))), OB = [];
        lB.forEach(((BB, TB) => {
          BB.split(" ").forEach(((BB, dB) => {
            for (let VB = 0; VB < BB.length; VB++)
              if ("." !== BB[VB]) {
                const yB = [RB(VB, dB, oB), TB, aB(VB, dB, oB)];
                OB.push({
                  offset: yB,
                  block: LB[BB.charCodeAt(VB) - "a".charCodeAt(0)]
                })
              }
          }))
        })), VB = {
          size: [YB, yB[1], gB],
          cells: OB
        }, XB.set(dB, VB)
      }
      return VB
    }
    const hB = {
      well: dB.p + "static/media/well.6059dda29952da474ade.webp",
      tent: dB.p + "static/media/tent.b33fdaeb9129e7931315.webp",
      marketStall: dB.p + "static/media/marketStall.6e04c605a5daeb43787d.webp",
      gazebo: dB.p + "static/media/gazebo.5db92096efe3e790b93c.webp",
      cottage: dB.p + "static/media/cottage.a2ba06bd20dc5625f673.webp",
      lookoutTower: dB.p + "static/media/lookoutTower.eeb0336a5e86d88661c4.webp",
      bridge: dB.p + "static/media/bridge.ee5a7ddef6d74a1c5c2d.webp",
      farmhouse: dB.p + "static/media/farmhouse.9e4425b8d81e6c8cf5d2.webp",
      bakery: dB.p + "static/media/bakery.678fc20dd5fba272965f.webp",
      greenhouse: dB.p + "static/media/greenhouse.b77eb0b4ade590f95053.webp",
      lighthouse: dB.p + "static/media/lighthouse.b8267661edfd4c5e7c77.webp",
      windmill: dB.p + "static/media/windmill.e2fd79cf51ec00d299c8.webp"
    };
    var CB = dB(980);
    const GB = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function qB(BB) {
      let {
        page: TB,
        building: dB,
        onBuild: VB,
        onPutAway: yB
      } = BB;
      const {
        t: pB
      } = (0, FB.z)(), {
        displayName: lB,
        tier: JB
      } = DB(TB.id), YB = WB(TB.id, 0).cells.length, gB = EB[TB.id], oB = "locked" === TB.state, kB = dB ? sB.d : sB.k;
      return (0, CB.jsxs)("article", {
        className: tB()("PlotsJournalPage", {
          Locked: oB
        }),
        children: [(0, CB.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: pB(lB.translationKey)
        }), (0, CB.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [pB(GB[JB]), " \xb7 ", pB("plotsGame:journalBlocks", {
            blocks: String(YB)
          })]
        }), (0, CB.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [LB.map((BB => (0, CB.jsx)("img", {
            className: tB()({
              Shown: BB === TB.id
            }),
            src: hB[BB],
            alt: "",
            draggable: !1
          }, BB))), "completed" === TB.state && (0, CB.jsx)("span", {
            className: "PlotsJournalStamp",
            children: pB("plotsGame:journalBuilt")
          }), oB && (0, CB.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, CB.jsx)(fB.e, {
              name: "lock"
            })
          })]
        }), void 0 !== gB && "completed" !== TB.state && (0, CB.jsx)("p", {
          className: "PlotsJournalNote",
          children: pB(gB)
        }), (0, CB.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === TB.state && (0, CB.jsx)("p", {
            className: "PlotsJournalHint",
            children: pB("plotsGame:journalLocked", {
              name: pB(DB(TB.unlockedBy).displayName.translationKey)
            })
          }), TB.active && (0, CB.jsxs)(CB.Fragment, {
            children: [(0, CB.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: pB("plotsGame:journalBuilding")
            }), (0, CB.jsx)(sB.g, {
              onClick: yB,
              children: pB("plotsGame:journalPutAway")
            })]
          }), !oB && !TB.active && (0, CB.jsx)(kB, {
            onClick: () => {
              VB(TB.id)
            },
            children: pB("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function xB(BB) {
      let {
        className: TB,
        page: dB,
        hidden: VB,
        building: yB,
        journal: pB
      } = BB;
      return (0, CB.jsxs)("div", {
        ref: BB => {
          null !== BB && (BB.inert = VB)
        },
        className: tB()("PlotsJournalSide", TB),
        children: [void 0 !== dB && (0, CB.jsx)(qB, {
          page: dB,
          building: yB,
          onBuild: pB.build,
          onPutAway: pB.putAway
        }), void 0 === dB && (0, CB.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var jB = dB(279),
      AB = dB(1652);

    function bB(BB) {
      return Math.cos((0, AB.j)(BB))
    }

    function nB(BB) {
      return (0, AB.x)(Math.acos(jB.e.clamp(BB, -1, 1)))
    }

    function eB(BB, TB, dB, VB, yB) {
      const pB = Math.abs(TB - BB),
        lB = (0, AB.x)(yB / (dB * Math.abs(Math.sin((0, AB.j)(BB))))),
        JB = 450 * Math.min(1, pB / VB),
        YB = lB > 0 ? 3 * pB / lB : 1 / 0;
      return Math.round(Math.max(120, Math.min(JB, YB)))
    }
    class BT {
      constructor() {
        this.samples = []
      }
      add(BB, TB) {
        for (this.samples.push({
            x: BB,
            at: TB
          }); TB - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const BB = this.samples[0],
          TB = this.samples[this.samples.length - 1];
        return TB.at > BB.at ? (TB.x - BB.x) / (TB.at - BB.at) : 0
      }
    }

    function TT(BB, TB) {
      return BB > TB && BB >= 600
    }

    function dT(BB) {
      return nB(new DOMMatrixReadOnly(getComputedStyle(BB).transform).m11)
    }

    function VT(BB, TB) {
      BB.style.transform = `rotateY(${-TB}deg)`, BB.classList.add("Turning")
    }

    function yT(BB) {
      let {
        journal: TB
      } = BB;
      const {
        t: dB
      } = (0, FB.z)(), VB = (0, wB.f)(mB, TB.getPages()), yB = (0, UB.e)(TT), [JB, YB] = (0, pB.useState)((() => function(BB) {
        const TB = BB.findIndex((BB => BB.active));
        return -1 !== TB ? TB : Math.max(0, BB.findIndex((BB => "open" === BB.state)))
      }(VB))), oB = (0, pB.useRef)(null), kB = (0, pB.useRef)(null), LB = (0, pB.useRef)({
        Forward: null,
        Back: null
      }), OB = yB ? 2 : 1, DB = yB ? 180 : 90, uB = JB - JB % OB, HB = uB > 0, EB = uB + OB < VB.length, vB = (0, pB.useCallback)((() => {
        const BB = kB.current;
        return null === BB ? uB : (kB.current = null, BB.animation.cancel(), (TB = LB.current[BB.direction]).style.transform = "", TB.classList.remove("Turning"), null === BB.next ? uB : (YB(BB.next), BB.next));
        var TB
      }), [uB]), iB = (0, pB.useCallback)(((BB, TB, dB, VB) => {
        const yB = LB.current[BB],
          pB = dT(yB),
          lB = TB === ("Forward" === BB) ? DB : 0;
        VT(yB, lB);
        const JB = yB.animate([{
          transform: `rotateY(${-pB}deg)`
        }, {
          transform: `rotateY(${-lB}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : eB(pB, lB, yB.offsetWidth, DB, lB > pB ? -dB : dB),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        kB.current = {
          direction: BB,
          animation: JB,
          next: TB ? VB + ("Forward" === BB ? OB : -OB) : null
        }, JB.onfinish = () => {
          var BB;
          (null === (BB = kB.current) || void 0 === BB ? void 0 : BB.animation) === JB && vB()
        }
      }), [OB, DB, vB]), NB = (0, pB.useCallback)((BB => {
        if (null !== oB.current) return;
        const TB = vB();
        ("Forward" === BB ? TB + OB < VB.length : TB > 0) && iB(BB, !0, 0, TB)
      }), [vB, iB, OB, VB.length]);
      (0, pB.useEffect)((() => {
        TB.onOpened()
      }), [TB]), (0, pB.useEffect)((() => () => {
        var BB;
        null === (BB = kB.current) || void 0 === BB || BB.animation.cancel()
      }), []), (0, pB.useEffect)((() => {
        const BB = BB => {
          var TB;
          BB.pointerId !== (null === (TB = oB.current) || void 0 === TB ? void 0 : TB.pointerId) || oB.current.following || (oB.current = null)
        };
        return window.addEventListener("pointerup", BB), () => {
          window.removeEventListener("pointerup", BB)
        }
      }), []), (0, zB.d)((BB => ("ArrowLeft" === BB.code || "ArrowRight" === BB.code) && !(0, gB.isTypingInInput)()), (BB => {
        BB.stopPropagation(), NB("ArrowLeft" === BB.code ? "Back" : "Forward")
      }));
      const fB = (BB, TB, dB) => {
          const VB = function(BB, TB, dB, VB) {
            return (BB < 0 ? dB : VB) ? jB.e.clampAbs(BB, TB) : Math.sign(BB) * TB * (1 - 1 / (.55 * Math.abs(BB) / TB + 1))
          }(BB.base + dB, OB * BB.width, EB, HB);
          return "Forward" === TB ? Math.min(VB, 0) : Math.max(VB, 0)
        },
        KB = (BB, TB) => {
          const dB = oB.current;
          if (oB.current = null, null === dB.direction) return;
          dB.speed.add(BB, TB);
          const VB = dB.speed.get(),
            yB = fB(dB, dB.direction, BB - dB.x);
          iB(dB.direction, null !== function(BB, TB, dB, VB, yB) {
            if (Math.abs(TB) >= .3 ? Math.sign(TB) !== Math.sign(BB) : Math.abs(BB) < .5 * dB) return null;
            const pB = BB < 0 ? "Forward" : "Back";
            return ("Forward" === pB ? VB : yB) ? pB : null
          }(yB, VB, OB * dB.width, EB, HB), VB, uB)
        },
        rB = VB.some((BB => BB.active)),
        IB = (BB, dB, yB) => (0, CB.jsx)(xB, {
          className: BB,
          page: dB >= 0 && dB < VB.length ? VB[dB] : void 0,
          hidden: yB,
          building: rB,
          journal: TB
        });
      return (0, CB.jsx)(MB.b, {
        close: lB.h,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, CB.jsxs)("section", {
          className: tB()("PlotsJournal", {
            Spread: yB
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": dB("plotsGame:journalTitle"),
          children: [(0, CB.jsx)(sB.i, {
            className: "PlotsJournalClose",
            onClick: lB.h
          }), (0, CB.jsx)(pT, {
            direction: "Back",
            disabled: !HB,
            onTurn: NB
          }), (0, CB.jsx)("div", {
            className: "PlotsJournalBookPages",
            onPointerDown: BB => {
              var TB;
              if (!BB.isPrimary || 0 !== BB.button || null !== kB.current && null !== BB.target.closest("button")) return;
              const dB = new BT;
              dB.add(BB.clientX, BB.timeStamp);
              const VB = LB.current.Forward.offsetWidth,
                yB = kB.current;
              kB.current = null;
              let pB = 0;
              if (null !== yB) {
                const TB = LB.current[yB.direction],
                  dB = dT(TB);
                yB.animation.cancel(), VT(TB, dB), pB = function(BB, TB, dB, VB) {
                  return (BB < 0 ? dB : VB) ? BB : Math.sign(BB) * TB * (1 / (1 - Math.min(Math.abs(BB) / TB, .99)) - 1) / .55
                }(function(BB, TB, dB, VB) {
                  return dB * (bB(TB) - bB("Forward" === BB ? 0 : VB))
                }(yB.direction, dB, VB, DB), OB * VB, EB, HB), BB.currentTarget.setPointerCapture(BB.pointerId)
              }
              oB.current = {
                pointerId: BB.pointerId,
                x: BB.clientX,
                y: BB.clientY,
                base: pB,
                width: VB,
                following: null !== yB,
                direction: null !== (TB = null === yB || void 0 === yB ? void 0 : yB.direction) && void 0 !== TB ? TB : null,
                speed: dB
              }
            },
            onPointerMove: BB => {
              const TB = oB.current;
              if (null === TB || BB.pointerId !== TB.pointerId) return;
              if (0 === BB.buttons) return void KB(BB.clientX, BB.timeStamp);
              const dB = BB.clientX - TB.x;
              !TB.following && function(BB, TB) {
                return Math.abs(BB) > 8 && Math.abs(BB) > Math.abs(TB)
              }(dB, BB.clientY - TB.y) && (TB.following = !0, TB.direction = dB < 0 ? "Forward" : "Back", BB.currentTarget.setPointerCapture(BB.pointerId)), null !== TB.direction && (TB.speed.add(BB.clientX, BB.timeStamp), VT(LB.current[TB.direction], function(BB, TB, dB, VB) {
                const yB = dB * bB("Forward" === BB ? 0 : VB) + TB;
                return jB.e.clamp(nB(yB / dB), 0, VB)
              }(TB.direction, fB(TB, TB.direction, dB), TB.width, DB)))
            },
            onPointerUp: BB => {
              var TB;
              BB.pointerId === (null === (TB = oB.current) || void 0 === TB ? void 0 : TB.pointerId) && KB(BB.clientX, BB.timeStamp)
            },
            onPointerCancel: BB => {
              const TB = oB.current;
              BB.pointerId === (null === TB || void 0 === TB ? void 0 : TB.pointerId) && (oB.current = null, null !== TB.direction && iB(TB.direction, !1, 0, uB))
            },
            children: (0, CB.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [yB && IB("Left", uB - 2, !0), IB("Right", uB + 2 * OB - 1, !0), (0, CB.jsxs)("div", {
                ref: BB => {
                  LB.current.Back = BB
                },
                className: "PlotsJournalLeaf Back",
                children: [IB("Recto", uB - 1, !0), yB && IB("Verso", uB, !1)]
              }), (0, CB.jsxs)("div", {
                ref: BB => {
                  LB.current.Forward = BB
                },
                className: "PlotsJournalLeaf Forward",
                children: [IB("Recto", uB + OB - 1, !1), yB && IB("Verso", uB + OB, !0)]
              })]
            })
          }), (0, CB.jsx)(pT, {
            direction: "Forward",
            disabled: !EB,
            onTurn: NB
          })]
        })
      })
    }

    function pT(BB) {
      let {
        direction: TB,
        disabled: dB,
        onTurn: VB
      } = BB;
      const {
        t: yB
      } = (0, FB.z)();
      return (0, CB.jsx)("div", {
        className: tB()("PlotsJournalArrow", TB),
        children: (0, CB.jsx)(sB.d, {
          disabled: dB,
          ariaLabel: yB("Forward" === TB ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            VB(TB)
          },
          children: (0, CB.jsx)(fB.e, {
            name: "angle-up"
          })
        })
      })
    }
    var lT = dB(35589),
      JT = dB(1666),
      YT = dB(1736);
    const gT = "plotsStepChanged",
      oT = "plotsPlotChanged";
    class kT {
      constructor() {
        this.step = ["none"], this.plot = ["none"]
      }
      getStep() {
        return this.step
      }
      receiveStep(BB) {
        this.step = BB, oB.h.yH(gT, BB, !0)
      }
      getPlot() {
        return this.plot
      }
      receivePlot(BB) {
        this.plot = BB, oB.h.yH(oT, BB, !0)
      }
    }
    const LT = "KeyJ";

    function OT(BB) {
      let {
        hud: TB,
        journal: dB
      } = BB;
      const VB = (0, wB.f)(mB, dB.getPages()),
        yB = (0, wB.f)(gT, TB.getStep()),
        {
          isTouchScreen: pB
        } = (0, JB.m)(["isTouchScreen"]),
        {
          t: oB
        } = (0, FB.z)(),
        kB = null !== VB && "none" === yB[0];
      return (0, zB.d)((BB => null !== VB && BB.code === LT && !BB.repeat && !(0, gB.isTypingInInput)()), (BB => {
        (0, YB.v)(BB, kB, lB.o)
      })), kB ? (0, CB.jsx)(lT.e, {
        placement: "topRight",
        children: (0, CB.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, CB.jsxs)("button", {
            type: "button",
            className: tB()("PlotsJournalButton SmallTextBold", {
              Touch: pB
            }),
            onClick: lB.o,
            children: [(0, CB.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, CB.jsx)(JT.c, {
                itemName: "Book",
                amount: 0
              })
            }), oB("plotsGame:journalButton"), !pB && (0, CB.jsx)(YT.d, {
              className: "PlotsJournalButtonKey",
              keyCode: LT
            })]
          })
        })
      }) : null
    }
    var DT = dB(37361),
      uT = dB(37120),
      HT = dB(35886),
      ET = dB(8690),
      vT = dB(8701),
      mT = dB(36727);
    const iT = new Map([
        ["Bluebell", [.165, .749, .992]],
        ["Bread Block", [.776, .565, .161]],
        ["Bricks", [.584, .329, .239]],
        ["Bricks Slab", [.612, .345, .263]],
        ["Bricks Stairs", [.584, .329, .239]],
        ["Carved Pumpkin", [.929, .576, .173]],
        ["Cedar Stairs", [.318, .204, .098]],
        ["Cedar Trapdoor", [.239, .145, .071]],
        ["Cedar Wood Planks", [.318, .204, .098]],
        ["Chest", [.718, .49, .176]],
        ["Cracked Stone Bricks", [.522, .545, .573]],
        ["Daisy", [.969, .969, .969]],
        ["Dandelion", [1, .925, .31]],
        ["Dirt", [.522, .384, .302]],
        ["Furnace", [.502, .522, .545]],
        ["Glass", [.702, .902, .882]],
        ["Green Concrete", [.333, .416, .137]],
        ["Green Concrete Stairs", [.333, .416, .137]],
        ["Lantern", [.451, .451, .498]],
        ["Light Blue Carpet", [.231, .761, .902]],
        ["Light Blue Glass", [.263, .769, .925]],
        ["Maple Fence", [.682, .561, .353]],
        ["Maple Ladder", [.612, .471, .29]],
        ["Maple Leaves", [.173, .443, .09]],
        ["Maple Log", [.486, .388, .255]],
        ["Maple Stairs", [.682, .561, .353]],
        ["Maple Trapdoor", [.518, .38, .239]],
        ["Maple Wood Planks", [.682, .561, .353]],
        ["Melon", [.957, .918, .337]],
        ["Messy Stone Slab", [.475, .498, .529]],
        ["Mossy Stone Bricks", [.49, .514, .541]],
        ["Orange Tulip", [.969, .655, .2]],
        ["Pine Fence", [.475, .341, .263]],
        ["Pine Log", [.286, .192, .157]],
        ["Pine Slab", [.475, .341, .263]],
        ["Pine Stairs", [.475, .341, .263]],
        ["Pine Trapdoor", [.478, .357, .204]],
        ["Pine Wood Planks", [.475, .341, .263]],
        ["Pink Tulip", [1, .616, .753]],
        ["Poppy", [.929, .188, .173]],
        ["Pumpkin", [.929, .576, .173]],
        ["Red Carpet", [.69, .173, .145]],
        ["Red Chalk Bricks", [.761, .506, .463]],
        ["Red Chalk Bricks Slab", [.753, .502, .455]],
        ["Red Chalk Bricks Stairs", [.761, .506, .463]],
        ["Red Chalk Slab", [.761, .506, .463]],
        ["Red Chalk Stairs", [.761, .506, .463]],
        ["Red Concrete", [.58, .157, .141]],
        ["Red Concrete Slab", [.58, .157, .141]],
        ["Red Concrete Stairs", [.58, .157, .141]],
        ["Red Planks", [.608, .2, .184]],
        ["Red Tulip", [.949, .216, .298]],
        ["Red Wool", [.69, .173, .145]],
        ["Sandstone", [.988, .929, .686]],
        ["Smooth Stone Slab", [.522, .545, .573]],
        ["Stone Bricks", [.522, .545, .573]],
        ["Stone Bricks Slab", [.522, .545, .573]],
        ["Stone Bricks Stairs", [.522, .545, .573]],
        ["Torch", [.647, .439, .153]],
        ["White Carpet", [.98, .98, .98]],
        ["White Chalk Slab", [.906, .902, .867]],
        ["White Chalk Stairs", [.906, .902, .867]],
        ["White Concrete", [.89, .894, .894]],
        ["White Concrete Slab", [.89, .894, .894]],
        ["White Concrete Stairs", [.89, .894, .894]],
        ["White Tulip", [1, 1, 1]],
        ["White Wool", [.98, .98, .98]],
        ["Workbench", [.647, .439, .153]],
        ["Yellow Glass", [1, .82, .263]],
        ["Yellow Wool", [1, .827, .251]]
      ]),
      NT = [...HT.e.blockRemoveActionRoots, ...uT.b, ...ET.k, "Board", "Code Block", "Custom Lobby Block"],
      tT = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let fT = null;

    function sT() {
      return fT ??= function() {
        const BB = MT(),
          TB = Math.max(...BB.map((BB => KB.h[BB].id))) + 1,
          dB = new Int32Array(TB),
          VB = new Int32Array(TB),
          yB = new Uint8Array(TB).fill(1),
          pB = new Uint8Array(TB),
          lB = new Uint8Array(TB),
          JB = new Array(TB).fill("Air"),
          YB = new Map,
          gB = BB => {
            let TB = YB.get(BB);
            return void 0 === TB && (TB = YB.size + 1, YB.set(BB, TB)), TB
          },
          oB = new Set(NT);
        for (const LB of BB) {
          var kB;
          const {
            id: BB,
            meta: TB,
            altActionable: YB,
            canBePlacedOver: OB
          } = KB.h[LB];
          dB[BB] = gB(zT(LB));
          const DB = TB.stairsCorner;
          if (null === DB) VB[BB] = dB[BB];
          else {
            const dB = DB.endsWith("Right");
            VB[BB] = gB(`${TB.rootName}|rot${dB?TB.rot%4+1:TB.rot}|${TB.halfblockPlacement}|${DB.replace("Right","Left")}`)
          }
          yB[BB] = OB ? 1 : 0, pB[BB] = YB || null !== TB.open || LB in mT.d || oB.has(TB.rootName) || void 0 !== (0, uT.d)(TB.rootName) ? 1 : 0;
          const {
            rootName: uB
          } = TB;
          lB[BB] = null !== TB.open || uT.b.includes(uB) || uB.includes("Bookshelf") || uB.includes("Mailbox") ? 1 : 0, JB[BB] = null !== (kB = (0, DT.d)(BB)) && void 0 !== kB ? kB : uB
        }
        return {
          kinds: dB,
          shapes: VB,
          empty: yB,
          inUse: pB,
          ownAltActionMessage: lB,
          placingItems: JB
        }
      }(), fT
    }

    function MT() {
      return Object.keys(KB.h).filter((BB => KB.h[BB].name === BB))
    }

    function zT(BB) {
      var TB;
      const dB = KB.h[BB],
        {
          rootName: VB,
          rot: yB
        } = dB.meta,
        [, ...pB] = (null !== (TB = dB.rootMetaDesc) && void 0 !== TB ? TB : BB).split("|"),
        lB = pB.filter((BB => !("meta" === BB || tT.test(BB) || (0, vT.A)(dB) && /^[nesw]+$/.test(BB) || ET.k.includes(VB) && /^[lrud]+$/.test(BB) || jB.J.includes(VB) && /^(left|right)$/.test(BB))));
      return [VB, ...lB].map((BB => "fenceGate" === dB.model && BB === `rot${yB}` ? "rot" + ((yB - 1) % 2 + 1) : BB)).join("|")
    }

    function wT(BB, TB) {
      const {
        kinds: dB,
        shapes: VB
      } = sT();
      return dB[BB] === dB[TB] || VB[BB] === VB[TB]
    }

    function UT(BB) {
      return 1 === sT().empty[BB]
    }

    function FT(BB) {
      return sT().placingItems[BB]
    }

    function KT(BB) {
      return iT.get(KB.h[BB].meta.rootName)
    }
    var rT = dB(8687),
      IT = dB(8698);
    const cT = [0, 0, 0, 1, 1, 1],
      ST = (0, rT.d)([
        [2, 0, 2, 6, 6, 6]
      ]),
      PT = (0, rT.d)([
        [3, 0, 3, 5, 5, 5]
      ]),
      QT = (0, rT.d)([
        [3, 3, 3, 5, 8, 5]
      ]),
      RT = [0, 1, 2, 3].map((BB => (0, rT.d)((0, rT.n)([
        [3, 2, 0, 5, 7, 3]
      ], BB))));

    function aT(BB) {
      const {
        AO: TB,
        model: dB,
        blockModel: VB,
        meta: yB
      } = KB.h[BB];
      return void 0 !== TB ? TB : "CentreCross" === dB ? ST : null !== VB && void 0 !== VB && VB.startsWith("torch") ? yB.halfblockPlacement === IT.e.side ? RT[yB.rot - 1] : yB.halfblockPlacement === IT.e.top ? QT : PT : cT
    }

    function ZT(BB, TB) {
      return null === BB || null === TB ? BB === TB : BB[0] === TB[0] && BB[1] === TB[1] && BB[2] === TB[2]
    }

    function XT(BB) {
      return [BB[0] + .5, BB[1] + .5, BB[2] + .5]
    }
    var WT = dB(184);

    function hT(BB, TB) {
      const dB = WT.c.lE / 2;
      return BB[0] < TB[0] + dB && BB[0] + 1 > TB[0] - dB && BB[1] < TB[1] + WT.c.kE && BB[1] + 1 > TB[1] && BB[2] < TB[2] + dB && BB[2] + 1 > TB[2] - dB
    }

    function CT(BB) {
      return BB + 1
    }

    function GT(BB, TB, dB, VB, yB) {
      const pB = Math.hypot(...TB.dir);
      if (!Number.isFinite(pB) || 0 === pB) return -1;
      const {
        from: lB,
        reach: JB,
        solid: YB
      } = TB, gB = [TB.dir[0] / pB, TB.dir[1] / pB, TB.dir[2] / pB], oB = null === YB ? JB : Math.min(JB, function(BB, TB, dB) {
        const VB = qT(BB, TB, dB);
        if (VB !== 1 / 0) return VB;
        return (dB[0] + .5 - BB[0]) * TB[0] + (dB[1] + .5 - BB[1]) * TB[1] + (dB[2] + .5 - BB[2]) * TB[2]
      }(lB, gB, YB) + .75);
      let kB = -1,
        LB = 1 / 0,
        OB = 1 / 0;
      for (let DB = 0; DB < BB.length; DB += 4) {
        const TB = [BB[DB], BB[DB + 1], BB[DB + 2]],
          pB = yB(DB) ? JB : oB;
        let YB = -1,
          uB = qT(lB, gB, TB);
        if (uB > pB) {
          const BB = [TB[0] + .5 - lB[0], TB[1] + .5 - lB[1], TB[2] + .5 - lB[2]];
          if (uB = BB[0] * gB[0] + BB[1] * gB[1] + BB[2] * gB[2], uB <= 0 || uB > pB) continue;
          if (YB = Math.hypot(BB[0] - uB * gB[0], BB[1] - uB * gB[1], BB[2] - uB * gB[2]), YB > .7 || !VB(DB)) continue
        }(YB < LB || YB === LB && uB < OB) && dB(DB) && (kB = DB, LB = YB, OB = uB)
      }
      return kB
    }

    function qT(BB, TB, dB) {
      let VB = 0,
        yB = 1 / 0;
      for (let pB = 0; pB < 3; pB++) {
        const lB = dB[pB] - BB[pB];
        if (0 === TB[pB]) {
          if (lB > 0 || lB + 1 < 0) return 1 / 0;
          continue
        }
        const JB = lB / TB[pB],
          YB = (lB + 1) / TB[pB];
        VB = Math.max(VB, Math.min(JB, YB)), yB = Math.min(yB, Math.max(JB, YB))
      }
      return VB <= yB ? VB : 1 / 0
    }
    var xT = dB(36946),
      jT = dB(37470);
    const AT = [1, 1, 1];
    class bT {
      constructor(BB) {
        this.api = BB, this.meshes = null, this.shown = null
      }
      show(BB) {
        if (!ZT(BB, this.shown))
          if (this.shown = null === BB ? null : [BB[0], BB[1], BB[2]], null !== this.meshes)
            for (const TB of this.meshes) this.api.setGameMesh(TB, null === BB ? {
              visible: !1
            } : {
              anchor: BB,
              visible: !0
            });
          else if (null !== BB) {
          const TB = [xT.g, xT.g, xT.g, 0, 0, 0];
          this.meshes = [this.build([TB], xT.j, BB), this.build((0, xT.d)(), xT.o, BB)]
        }
      }
      dispose() {
        for (const TB of null !== (BB = this.meshes) && void 0 !== BB ? BB : []) {
          var BB;
          this.api.disposeGameMesh(TB)
        }
        this.meshes = null, this.shown = null
      }
      build(BB, TB, dB) {
        const VB = [],
          yB = [];
        for (const [pB, lB, JB, YB, gB, oB] of BB)(0, jT.f)(VB, yB, [YB + .5, gB + .5, oB + .5], [pB, lB, JB]);
        return this.api.createGameMesh({
          positions: VB,
          indices: yB
        }, {
          rgb: AT,
          alpha: TB,
          onTop: !0
        }, dB)
      }
    }
    class nT {
      constructor(BB) {
        this.api = BB, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(BB) {
        const TB = WT.c.UD;
        this.chunks = [];
        for (let dB = 0; dB < BB.length; dB += 3) {
          const VB = Math.floor(BB[dB] / TB),
            yB = Math.floor(BB[dB + 1] / TB),
            pB = Math.floor(BB[dB + 2] / TB);
          this.watches(VB, yB, pB) || this.chunks.push(VB, yB, pB)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const BB = performance.now();
        if (BB - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = BB;
        let TB = !1;
        for (let dB = 0; dB < this.chunks.length; dB += 3) {
          const BB = this.api.getChunkVersion(this.chunks[dB], this.chunks[dB + 1], this.chunks[dB + 2]);
          this.versions[dB / 3] !== BB && (this.versions[dB / 3] = BB, TB = !0)
        }
        return TB
      }
      watches(BB, TB, dB) {
        for (let VB = 0; VB < this.chunks.length; VB += 3)
          if (this.chunks[VB] === BB && this.chunks[VB + 1] === TB && this.chunks[VB + 2] === dB) return !0;
        return !1
      }
    }
    const eT = .35,
      Bd = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      Td = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      dd = [.95, .2, .15];
    class Vd {
      constructor() {
        this.groups = []
      }
      add(BB, TB, dB, VB, yB) {
        let pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : cT;
        for (const lB of this.groups)
          if (ld(lB, VB, yB)) return lB.cells.push(BB, TB, dB), void lB.boxes.push(pB);
        this.groups.push({
          rgb: VB,
          look: yB,
          cells: [BB, TB, dB],
          boxes: [pB]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class yd {
      constructor(BB) {
        this.api = BB, this.shown = []
      }
      show(BB) {
        const TB = [];
        for (const dB of BB) {
          const BB = this.shown.findIndex((BB => {
            let {
              group: TB
            } = BB;
            return ld(TB, dB.rgb, dB.look) && Jd(TB, dB)
          })); - 1 === BB ? TB.push(this.build(dB)) : (TB.push(this.shown[BB]), this.shown.splice(BB, 1))
        }
        this.dispose(), this.shown = TB
      }
      dispose() {
        for (const {
            meshes: BB
          }
          of this.shown)
          for (const TB of BB) this.api.disposeGameMesh(TB);
        this.shown = []
      }
      build(BB) {
        const {
          rgb: TB,
          look: dB,
          boxes: VB
        } = BB, yB = [TB[0] + (1 - TB[0]) * eT, TB[1] + (1 - TB[1]) * eT, TB[2] + (1 - TB[2]) * eT], pB = [this.buildMesh(BB.cells, TB, dB.alpha, ((BB, TB, yB, pB) => {
          pd(BB, TB, yB, VB[pB], dB.size, !1)
        })), this.buildMesh(BB.cells, yB, dB.alpha, ((BB, TB, yB, pB) => {
          pd(BB, TB, yB, VB[pB], dB.size, !0)
        }))];
        return dB.crossed && pB.push(this.buildMesh(BB.cells, TB, .9, ((BB, TB, VB) => {
          (0, jT.g)(BB, TB, VB, dB.size + .01, .12)
        }))), {
          group: BB,
          meshes: pB
        }
      }
      buildMesh(BB, TB, dB, VB) {
        const yB = [BB[0], BB[1], BB[2]],
          pB = [],
          lB = [];
        for (let JB = 0; JB < BB.length; JB += 3) VB(pB, lB, [BB[JB] - yB[0] + .5, BB[JB + 1] - yB[1] + .5, BB[JB + 2] - yB[2] + .5], JB / 3);
        return this.api.createGameMesh({
          positions: pB,
          indices: lB
        }, {
          rgb: [TB[0], TB[1], TB[2]],
          alpha: dB
        }, yB)
      }
    }

    function pd(BB, TB, dB, VB, yB, pB) {
      for (let lB = 0; lB < VB.length; lB += 6) {
        const JB = [0, 0, 0],
          YB = [0, 0, 0];
        for (let BB = 0; BB < 3; BB++) JB[BB] = dB[BB] + ((VB[lB + BB] + VB[lB + BB + 3]) / 2 - .5) * yB, YB[BB] = (VB[lB + BB + 3] - VB[lB + BB]) * yB;
        (0, jT.c)(BB, TB, JB, YB, pB)
      }
    }

    function ld(BB, TB, dB) {
      return BB.rgb[0] === TB[0] && BB.rgb[1] === TB[1] && BB.rgb[2] === TB[2] && BB.look === dB
    }

    function Jd(BB, TB) {
      if (BB.cells.length !== TB.cells.length) return !1;
      for (let dB = 0; dB < BB.cells.length; dB++)
        if (BB.cells[dB] !== TB.cells[dB]) return !1;
      return BB.boxes.every(((BB, dB) => BB === TB.boxes[dB]))
    }
    class Yd {
      constructor(BB, TB, dB) {
        this.api = BB, this.localPlayerId = TB, this.pickNext = dB, this.turning = null, this.pending = null, this.tap = null, this.heading = [0, 1]
      }
      look(BB) {
        const [TB, , dB] = BB.cameraDirection, VB = Math.hypot(TB, dB);
        VB > .001 && (this.heading = [TB / VB, dB / VB])
      }
      tapped(BB, TB, dB) {
        const VB = CT(this.api.getClientOption(this.localPlayerId, "blockReach")),
          {
            origin: yB,
            direction: pB
          } = this.api.getActionRay(),
          lB = [...yB],
          JB = [
            [lB, [lB[0] + pB[0] * VB, lB[1] + pB[1] * VB, lB[2] + pB[2] * VB]]
          ];
        null !== BB && JB.push([lB, XT(BB)]), this.tap = {
          lines: JB,
          next: TB,
          ms: dB
        }
      }
      filled(BB, TB) {
        this.tap = null, this.pending = {
          from: BB,
          ms: TB
        }, this.retry(TB)
      }
      arrived(BB, TB) {
        const {
          tap: dB
        } = this;
        if (null === dB || TB - dB.ms > 1500) return null;
        const VB = XT(BB);
        return ZT(dB.next, BB) || dB.lines.some((BB => {
          let [TB, dB] = BB;
          return function(BB, TB, dB) {
            const VB = [dB[0] - TB[0], dB[1] - TB[1], dB[2] - TB[2]],
              yB = [BB[0] - TB[0], BB[1] - TB[1], BB[2] - TB[2]],
              pB = VB[0] ** 2 + VB[1] ** 2 + VB[2] ** 2,
              lB = 0 === pB ? 0 : Math.min(1, Math.max(0, (yB[0] * VB[0] + yB[1] * VB[1] + yB[2] * VB[2]) / pB));
            return Math.hypot(yB[0] - VB[0] * lB, yB[1] - VB[1] * lB, yB[2] - VB[2] * lB)
          }(VB, TB, dB) <= .9
        })) ? (this.tap = null, this.pending = {
          from: BB,
          ms: TB
        }, dB.ms) : null
      }
      retry(BB) {
        const {
          pending: TB
        } = this;
        if (null === TB) return;
        if (BB - TB.ms > 1500) return void(this.pending = null);
        const dB = this.pickNext(XT(TB.from), (BB => ZT(BB, TB.from)));
        if (null === dB) return;
        this.pending = null;
        const {
          turning: VB
        } = this;
        if (null !== VB && BB < VB.endMs && ZT(VB.to, dB)) return;
        const yB = this.api.getActionRay().origin,
          pB = [dB[0] + .5 - yB[0], dB[1] + .5 - yB[1], dB[2] + .5 - yB[2]],
          lB = Math.hypot(pB[0], pB[2]);
        if (lB < .3) {
          const BB = Math.max(lB, .001);
          pB[0] = this.heading[0] * BB, pB[2] = this.heading[1] * BB
        }
        this.api.turnCamera(pB, 250), this.turning = {
          to: dB,
          endMs: BB + 250
        }
      }
    }
    class gd {
      constructor(BB, TB, dB) {
        this.api = BB, this.localPlayerId = TB, this.juice = dB, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.nextCells = [], this.lastFilled = null, this.lastSeenFilled = null, this.playerCells = [], this.aimed = null, this.pressMs = null, this.foreseen = new Map, this.turn = void 0, this.nextCell = null, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new nT(BB), this.meshes = new yd(BB), this.outline = new bT(BB), this.turn = new Yd(BB, TB, ((BB, TB) => this.pickNext(BB, TB)))
      }
      MD(BB) {
        const TB = "active" === BB[0] ? `${BB[1]}|${BB[3]}|${BB[4]}|${BB[5]}|${BB[6]}` : "";
        if ("active" !== BB[0]) "built" === BB[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , dB, VB, yB, pB] = BB;
          TB !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = dB) : dB === this.layerY ? this.burstUnlisted(VB) : dB > this.layerY && this.finishLayer(dB), this.layerY = dB, this.layerCells.has(dB) || this.layerCells.set(dB, VB.filter(kd)), this.ghostCells = VB, this.palette = yB, this.occupiedCells = pB
        }
        TB !== this.blueprint && (this.blueprint = TB, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((BB => this.api.blockNameToBlockId(BB))), this.chunkWatch.watch([...this.ghostCells.filter(kd), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(BB) {
        this.burstUnlisted([]), BB > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = BB)
      }
      dL() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const BB = performance.now();
        let TB = !1;
        for (const [yB, pB] of this.foreseen) {
          var dB;
          if (BB - pB > 1e3) this.foreseen.delete(yB), TB = !0, (null === (dB = this.lastFilled) || void 0 === dB ? void 0 : dB.join()) === yB && (this.lastFilled = this.lastSeenFilled)
        }
        const VB = od(this.api.getPositionView(this.localPlayerId));
        (TB || VB.some(((BB, TB) => BB !== this.playerCells[TB]))) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(BB) {
        const TB = new Set;
        for (let yB = 0; yB < BB.length; yB += 4) TB.add(`${BB[yB]},${BB[yB+1]},${BB[yB+2]}`);
        const dB = [],
          {
            ghostCells: VB
          } = this;
        for (let yB = 0; yB < VB.length; yB += 4) {
          const BB = `${VB[yB]},${VB[yB+1]},${VB[yB+2]}`;
          !TB.has(BB) && this.open.delete(BB) && dB.push(this.filledCell(yB))
        }
        this.burst(dB)
      }
      refresh() {
        const {
          ghostCells: BB,
          palette: TB,
          occupiedCells: dB
        } = this, VB = new Vd, yB = new Set, pB = [], lB = [];
        for (let JB = 0; JB < BB.length; JB += 4) {
          const [dB, YB, gB, oB] = [BB[JB], BB[JB + 1], BB[JB + 2], BB[JB + 3]], kB = this.api.getBlockId(dB, YB, gB), LB = `${dB},${YB},${gB}`, OB = wT(this.blockIds[oB], kB);
          !OB && UT(kB) ? VB.add(dB, YB, gB, KT(TB[oB]), Bd, aT(TB[oB])) : OB ? this.open.has(LB) && pB.push(this.filledCell(JB)) : VB.add(dB, YB, gB, dd, Td), !OB && this.api.isBlockInLoadedChunk(dB, YB, gB) && (yB.add(LB), lB.push(dB, YB, gB, UT(kB) ? 0 : 1))
        }
        this.open = yB, this.nextCells = lB;
        for (let JB = 0; JB < dB.length; JB += 3) {
          const [BB, TB, yB] = [dB[JB], dB[JB + 1], dB[JB + 2]];
          UT(this.api.getBlockId(BB, TB, yB)) || VB.add(BB, TB, yB, dd, Td)
        }
        this.meshes.show(VB.toArray()), this.burst(pB), this.showNext(), this.turn.retry(performance.now())
      }
      burst(BB) {
        const TB = performance.now(),
          dB = [];
        for (const [VB, yB, pB] of BB) {
          const BB = [VB, yB, pB];
          this.lastSeenFilled = BB, this.foreseen.delete(BB.join()) || dB.push(BB)
        }
        for (const VB of dB) {
          this.lastFilled = VB;
          const BB = this.turn.arrived(VB, TB);
          if (null !== BB)
            for (const [TB, dB] of this.foreseen) dB <= BB && this.foreseen.delete(TB)
        }
        this.juice.filled(BB)
      }
      showNext() {
        var BB;
        const TB = this.api.getPositionView(this.localPlayerId);
        this.playerCells.splice(0, 1 / 0, ...od(TB));
        const dB = this.lastFilled;
        this.nextCell = this.pickNext(null === dB ? [TB[0], TB[1] + 1, TB[2]] : XT(dB), (() => !1)), this.outline.show(null !== (BB = this.aimed) && void 0 !== BB ? BB : this.nextCell)
      }
      pickNext(BB, TB) {
        const dB = this.api.getPositionView(this.localPlayerId),
          {
            nextCells: VB
          } = this,
          yB = function(BB, TB, dB, VB, yB) {
            let pB = -1,
              lB = !1,
              JB = 1 / 0;
            for (let YB = 0; YB < BB.length; YB += TB) {
              const TB = VB(YB);
              if (lB && !TB || yB(YB)) continue;
              const gB = (BB[YB] + .5 - dB[0]) ** 2 + (BB[YB + 1] + .5 - dB[1]) ** 2 + (BB[YB + 2] + .5 - dB[2]) ** 2;
              (TB && !lB || gB < JB) && (pB = YB, lB = TB, JB = gB)
            }
            return pB
          }(VB, 4, BB, (BB => 1 === VB[BB + 3]), (BB => {
            const yB = [VB[BB], VB[BB + 1], VB[BB + 2]];
            return hT(yB, dB) || this.foreseen.has(yB.join()) || TB(yB)
          }));
        return -1 === yB ? null : [VB[yB], VB[yB + 1], VB[yB + 2]]
      }
      afterRender(BB) {
        var TB;
        this.turn.look(BB);
        const dB = this.api.getTargetedBlock();
        this.aimed = this.findAimed(null === dB ? null : dB.position), this.outline.show(null !== (TB = this.aimed) && void 0 !== TB ? TB : this.nextCell)
      }
      attemptAltAction(BB) {
        const TB = performance.now(),
          dB = this.findAimed(BB);
        if (null === dB && null !== this.nextCell && this.turn.tapped(BB, this.nextCell, TB), null !== dB || !(null === this.pressMs || TB - this.pressMs > 500)) return null !== dB && (this.foreseen.set(dB.join(), TB), this.lastFilled = dB, this.aimed = null, this.showNext(), this.turn.filled(dB, TB)), this.pressMs = TB, "preventPlacement";
        this.pressMs = null
      }
      findAimed(BB) {
        return function(BB, TB, dB, VB, yB, pB, lB) {
          const JB = BB.gdB(TB),
            YB = null === JB || null === BB.blockNameToBlockId(JB.name, !0) ? null : JB.name,
            gB = BB.getPositionView(TB),
            {
              origin: oB,
              direction: kB
            } = BB.getActionRay(),
            LB = GT(VB, {
              from: oB,
              dir: kB,
              reach: CT(BB.getClientOption(TB, "blockReach")),
              solid: dB
            }, (TB => {
              const dB = [VB[TB], VB[TB + 1], VB[TB + 2]];
              return !wT(yB[VB[TB + 3]], BB.getBlockId(...dB)) && !lB.has(dB.join()) && BB.isBlockInLoadedChunk(...dB) && !hT(dB, gB)
            }), (BB => null === YB || YB === FT(yB[VB[BB + 3]])), (BB => null !== pB && VB[BB] === pB[0] && VB[BB + 1] === pB[1] && VB[BB + 2] === pB[2]));
          return -1 === LB ? null : [VB[LB], VB[LB + 1], VB[LB + 2]]
        }(this.api, this.localPlayerId, BB, this.ghostCells, this.blockIds, this.nextCell, this.foreseen)
      }
      endPress() {
        this.pressMs = null
      }
      filledCell(BB) {
        const {
          ghostCells: TB
        } = this, [dB, VB, yB] = KT(this.palette[TB[BB + 3]]);
        return [TB[BB], TB[BB + 1], TB[BB + 2], dB, VB, yB]
      }
    }

    function od(BB) {
      let [TB, dB, VB] = BB;
      const yB = WT.c.lE / 2;
      return [Math.floor(TB), Math.floor(dB), Math.floor(VB), Math.floor(TB - yB), Math.floor(TB + yB), Math.floor(dB + WT.c.kE), Math.floor(VB - yB), Math.floor(VB + yB)]
    }

    function kd(BB, TB) {
      return TB % 4 !== 3
    }

    function Ld(BB, TB, dB, VB, yB) {
      if (!BB.isBlockInLoadedChunk(TB, VB - 6, dB) || !BB.isBlockInLoadedChunk(TB, VB + 6 + yB, dB) || !BB.canModifyBlockAt(TB, VB, dB)) return NaN;
      let pB = VB - 1;
      if (0 !== BB.getBlockId(TB, pB, dB)) {
        for (; pB < VB + 6 && 0 !== BB.getBlockId(TB, pB + 1, dB);) pB++;
        return pB
      }
      for (; pB > VB - 6;)
        if (pB--, 0 !== BB.getBlockId(TB, pB, dB)) return pB;
      return NaN
    }

    function Od(BB, TB, dB, VB, yB) {
      let pB = 0;
      for (let lB = VB + 1; lB <= VB + yB; lB++) 0 !== BB.getBlockId(TB, lB, dB) && pB++;
      return pB
    }

    function Dd(BB) {
      const TB = new Map;
      for (const lB of BB) {
        var dB;
        if (Number.isNaN(lB)) return null;
        TB.set(lB, (null !== (dB = TB.get(lB)) && void 0 !== dB ? dB : 0) + 1)
      }
      let VB = NaN,
        yB = 0;
      for (const [lB, JB] of TB)(JB > yB || JB === yB && lB < VB) && (VB = lB, yB = JB);
      let pB = 0;
      for (const lB of BB) pB += Math.abs(lB - VB);
      return pB
    }

    function ud(BB, TB, dB, VB) {
      const {
        eye: yB,
        forward: pB,
        tanHalfFovX: lB,
        tanHalfFovY: JB
      } = BB, [YB, gB] = function(BB) {
        let [TB, dB, VB] = BB;
        const yB = Math.hypot(TB, VB),
          [pB, lB] = [VB / yB, -TB / yB];
        return [
          [pB, 0, lB],
          [dB * lB, VB * pB - TB * lB, -dB * pB]
        ]
      }(pB), [oB, kB] = [TB * lB, dB * JB], LB = pB[0] + oB * YB[0] + kB * gB[0], OB = pB[1] + kB * gB[1], DB = pB[2] + oB * YB[2] + kB * gB[2], uB = (VB - yB[1]) / OB;
      return uB > 0 && uB < 1 / 0 ? [yB[0] + uB * LB, yB[2] + uB * DB] : null
    }
    const Hd = "plotsBlueprintPlacementChanged",
      Ed = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class vd {
      constructor(BB, TB) {
        this.api = BB, this.localPlayerId = TB, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = BB => {
          var TB, dB, VB, pB;
          const lB = null !== (TB = null === (dB = this.placing) || void 0 === dB ? void 0 : dB.rotation) && void 0 !== TB ? TB : 0,
            {
              size: JB
            } = WB(BB, lB),
            YB = this.api.Dv(this.localPlayerId),
            [gB, oB] = null !== (VB = null !== (pB = function(BB, TB, dB) {
              const [VB, yB, pB] = TB, [lB, JB, YB] = [Math.floor(dB[0]), Math.floor(dB[1]), Math.floor(dB[2])], [gB, oB] = [10 + Math.ceil(VB / 2), 10 + Math.ceil(pB / 2)], [kB, LB] = [lB - gB, YB - oB], [OB, DB] = [2 * gB + 1, 2 * oB + 1], uB = new Float64Array(OB * DB), HB = new Uint16Array(OB * DB);
              for (let iB = 0; iB < OB; iB++)
                for (let TB = 0; TB < DB; TB++) {
                  const dB = Ld(BB, kB + iB, LB + TB, JB, yB);
                  uB[iB * DB + TB] = dB, Number.isNaN(dB) || (HB[iB * DB + TB] = Od(BB, kB + iB, LB + TB, dB, yB))
                }
              const EB = [];
              let vB = null,
                mB = 1 / 0;
              for (let iB = 0; iB + VB <= OB; iB++)
                for (let BB = 0; BB + pB <= DB; BB++) {
                  const [TB, yB] = [kB + iB, LB + BB], JB = Math.hypot(TB + VB / 2 - dB[0], yB + pB / 2 - dB[2]);
                  if (JB > 10 || lB >= TB - 2 && lB < TB + VB + 2 && YB >= yB - 2 && YB < yB + pB + 2) continue;
                  EB.length = 0;
                  let gB = 0;
                  for (let dB = 0; dB < VB; dB++)
                    for (let TB = 0; TB < pB; TB++) EB.push(uB[(iB + dB) * DB + BB + TB]), gB += HB[(iB + dB) * DB + BB + TB];
                  const oB = Dd(EB);
                  if (null === oB) continue;
                  const OB = JB + 3 * (oB + gB);
                  OB < mB && (mB = OB, vB = [TB, yB])
                }
              return vB
            }(this.api, JB, YB)) && void 0 !== pB ? pB : this.cornerOnTarget(JB)) && void 0 !== VB ? VB : [Math.floor(YB[0]) + 2, Math.floor(YB[2])];
          this.placing = {
            id: BB,
            rotation: lB,
            corner: [gB, this.playerLevel(), oB],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null
          }, this.update(), this.api.sendCommand(`${yB} preview`)
        }, this.rotate = () => {
          const {
            id: BB,
            rotation: TB,
            corner: dB
          } = this.placing, yB = VB[(VB.indexOf(TB) + 1) % VB.length], [pB, , lB] = WB(BB, TB).size, [JB, , YB] = WB(BB, yB).size;
          this.moveTo(dB[0] + Math.floor(pB / 2) - Math.floor(JB / 2), dB[2] + Math.floor(lB / 2) - Math.floor(YB / 2), yB)
        }, this.hoverAt = (BB, TB) => {
          this.placing.hover = [BB, TB], this.moveCentreTo(this.camera, BB, TB)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (BB, TB) => {
          const dB = this.placing,
            {
              eye: VB,
              forward: yB,
              tanHalfFovX: pB,
              tanHalfFovY: lB
            } = this.camera,
            JB = {
              eye: [VB[0], VB[1], VB[2]],
              forward: [yB[0], yB[1], yB[2]],
              tanHalfFovX: pB,
              tanHalfFovY: lB
            },
            YB = dB.corner[1],
            gB = ud(JB, BB, TB, YB);
          dB.hover = null, dB.drag = gB && {
            view: JB,
            ground: gB,
            corner: [dB.corner[0], dB.corner[2]],
            level: YB
          }
        }, this.dragTo = (BB, TB) => {
          const dB = this.placing.drag,
            VB = dB && ud(dB.view, BB, TB, dB.level);
          null !== dB && null !== VB && this.moveTo(dB.corner[0] + Math.round(VB[0] - dB.ground[0]), dB.corner[1] + Math.round(VB[1] - dB.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const BB = this.view;
          BB.waiting || (BB.blocked ? this.yH({
            ...BB,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const BB = this.placing,
            {
              id: TB,
              rotation: dB,
              corner: VB
            } = BB;
          this.api.sendCommand(`${yB} place ${TB} ${VB.join(" ")} ${dB}`), BB.sent = {
            atMs: performance.now(),
            corner: [...VB],
            rotation: dB,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${yB} preview off`))
        }, this.chunkWatch = new nT(BB), this.meshes = new yd(BB)
      }
      getView() {
        return this.view
      }
      dL() {
        const BB = this.placing;
        null !== BB && (null !== BB.sent && !BB.sent.timedOut && performance.now() - BB.sent.atMs > 3e3 ? (BB.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(BB) || this.chunkWatch.changed()) && this.update())
      }
      afterRender(BB) {
        const TB = this.placing;
        null !== TB && (! function(BB, TB) {
          for (let dB = 0; dB < 3; dB++) TB.eye[dB] = BB.cameraPosition[dB], TB.forward[dB] = BB.cameraDirection[dB];
          TB.tanHalfFovX = BB.tanHalfFovX, TB.tanHalfFovY = BB.tanHalfFovY
        }(BB, this.camera), null !== TB.hover && this.moveCentreTo(this.camera, TB.hover[0], TB.hover[1]))
      }
      MD(BB) {
        const TB = this.placing;
        if (null === TB || null === TB.sent || "active" !== BB[0]) return;
        const {
          sent: dB
        } = TB, [, VB, yB, pB, lB, JB, YB] = BB;
        yB && VB === TB.id && YB === dB.rotation && pB === dB.corner[0] && lB === dB.corner[1] && JB === dB.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(BB) {
        let [TB, , dB] = BB;
        const VB = this.api.getTargetedBlock();
        if (null === VB) return null;
        const [yB, , pB] = VB.position;
        return [yB - Math.floor(TB / 2), pB - Math.floor(dB / 2)]
      }
      playerLevel() {
        var BB;
        const [TB, dB, VB] = this.api.Dv(this.localPlayerId);
        if (null !== (BB = this.api.getLocalPlayerMovement()) && void 0 !== BB && BB.onGround) return Math.ceil(dB - .01);
        const [yB, pB, lB] = [Math.floor(TB), Math.floor(dB), Math.floor(VB)];
        for (let JB = pB; JB >= pB - 2; JB--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(yB, JB, lB))) return JB + 1;
        return pB
      }
      followPlayerLevel(BB) {
        if (md(BB)) return !1;
        const TB = this.playerLevel();
        return TB !== BB.corner[1] && (BB.corner[1] = TB, !0)
      }
      moveCentreTo(BB, TB, dB) {
        const VB = this.placing,
          yB = ud(BB, TB, dB, VB.corner[1]);
        if (null !== yB) {
          const [BB, , TB] = WB(VB.id, VB.rotation).size;
          this.moveTo(Math.round(yB[0] - BB / 2), Math.round(yB[1] - TB / 2))
        }
      }
      moveTo(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const VB = this.placing;
        if (md(VB)) return;
        const [yB, pB, lB] = VB.corner;
        if (this.centreOnPlot(yB, lB) && !this.centreOnPlot(BB, TB, dB))
          if (this.centreOnPlot(BB, lB, dB)) TB = lB;
          else {
            if (!this.centreOnPlot(yB, TB, dB)) return;
            BB = yB
          } BB === yB && TB === lB && dB === VB.rotation || (VB.rotation = dB, VB.corner = [BB, pB, TB], this.update())
      }
      centreOnPlot(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: VB,
          corner: yB
        } = this.placing, [pB, , lB] = WB(VB, dB).size;
        return this.api.canModifyBlockAt(BB + Math.floor(pB / 2), yB[1], TB + Math.floor(lB / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.yH(null)
      }
      update() {
        const {
          id: BB,
          rotation: TB,
          corner: dB,
          refusals: VB
        } = this.placing, yB = new Vd, pB = [];
        let lB = !1,
          JB = 0;
        for (const {
            offset: oB,
            block: kB
          }
          of WB(BB, TB).cells) {
          const [BB, TB, VB] = [dB[0] + oB[0], dB[1] + oB[1], dB[2] + oB[2]];
          pB.push(BB, TB, VB);
          const YB = !this.api.canModifyBlockAt(BB, TB, VB),
            gB = this.api.getBlockId(BB, TB, VB),
            LB = !UT(gB) && !wT(this.api.blockNameToBlockId(kB), gB);
          lB ||= YB, JB += LB ? 1 : 0, YB || LB ? yB.add(BB, TB, VB, dd, Td) : yB.add(BB, TB, VB, KT(kB), Ed, aT(kB))
        }
        this.chunkWatch.watch(pB), this.meshes.show(yB.toArray());
        const YB = this.view,
          gB = md(this.placing);
        (null === YB || void 0 === YB ? void 0 : YB.id) === BB && YB.blocked === lB && YB.toClear === JB && YB.waiting === gB && YB.refusals === VB || this.yH({
          id: BB,
          blocked: lB,
          toClear: JB,
          waiting: gB,
          refusals: VB
        })
      }
      yH(BB) {
        this.view = BB, oB.h.yH(Hd, BB, !0)
      }
    }

    function md(BB) {
      let {
        sent: TB
      } = BB;
      return null !== TB && !TB.timedOut
    }
    var Nd = dB(3716),
      td = dB(38087);

    function fd(BB, TB, dB) {
      const VB = [255 * BB, 255 * TB, 255 * dB],
        [yB, pB, lB] = VB.map((BB => BB + .4 * (255 - BB)));
      return {
        texture: "square_particle",
        Kk: 48,
        minLifeTime: .3 / td.e,
        maxLifeTime: .55 / td.e,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * td.e * td.e, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...VB, 1],
          maxColor: [yB, pB, lB, 1]
        }, {
          timeFraction: 1,
          minColor: [...VB, 0],
          maxColor: [yB, pB, lB, 0]
        }],
        blendMode: Nd.e.Standard
      }
    }
    const sd = {
      texture: "glint",
      mipmaps: !1,
      Kk: 96,
      minLifeTime: .5 / td.e,
      maxLifeTime: .9 / td.e,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * td.e * td.e, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: Nd.e.OneOne
    };
    class Md {
      constructor(BB, TB) {
        this.api = BB, this.localPlayerId = TB, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(BB) {
        if (this.api.particlesEnabled())
          for (const [TB, dB, VB, yB, pB, lB] of BB.slice(0, 3)) {
            const BB = `${yB},${pB},${lB}`;
            let JB = this.chips.get(BB);
            void 0 === JB && (JB = this.api.createParticles(fd(yB, pB, lB), {
              pos: [TB + .5, dB + .5, VB + .5]
            }), this.chips.set(BB, JB));
            for (let TB = 0; TB < 8; TB++) this.setPoint(TB, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            JB.emitPoints([TB + .5, dB + .5, VB + .5], this.points, 8)
          }
      }
      layerDone(BB) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const TB = BB.length / 3;
        if (0 === TB || !this.api.particlesEnabled()) return;
        const dB = Math.min(TB, 48),
          [VB, yB, pB] = [BB[0] + .5, BB[1] + 1, BB[2] + .5];
        let lB = 0;
        for (let JB = 0; JB < dB; JB++) {
          const YB = 3 * Math.floor(JB * TB / dB);
          for (let TB = 0; TB < 2; TB++) this.setPoint(lB++, BB[YB] + Math.random() - VB, BB[YB + 1] + 1 - yB, BB[YB + 2] + Math.random() - pB, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(sd, {
          pos: [VB, yB, pB]
        }), this.sparkles.emitPoints([VB, yB, pB], this.points, lB)
      }
      dispose() {
        var BB;
        for (const TB of this.chips.values()) TB.stop();
        this.chips.clear(), null === (BB = this.sparkles) || void 0 === BB || BB.stop(), this.sparkles = null
      }
      setPoint(BB, TB, dB, VB, yB) {
        const pB = 4 * BB;
        this.points[pB] = TB, this.points[pB + 1] = dB, this.points[pB + 2] = VB, this.points[pB + 3] = yB
      }
    }
    var zd = dB(1738);
    const wd = "SpecialAction1",
      Ud = "KeyY",
      Fd = "KeyX";

    function Kd(BB) {
      let {
        placement: TB
      } = BB;
      const dB = (0, wB.f)(Hd, TB.getView()),
        {
          t: VB
        } = (0, FB.z)(),
        {
          isTouchScreen: yB
        } = (0, JB.m)(["isTouchScreen"]),
        pB = null !== dB,
        lB = pB && !dB.blocked && !dB.waiting;
      if ((0, zB.d)((BB => pB && !BB.repeat && !(0, gB.isTypingInInput)() && !(0, YB.l)() && !yB), (BB => {
          const dB = function(BB, TB, dB) {
            if (BB === Fd) return TB.stop;
            if (BB === Ud) return dB ? TB.build : Id;
            return zd.r[wd].includes(BB) ? TB.rotate : null
          }(BB.code, TB, lB);
          null !== dB && (BB.stopPropagation(), dB())
        })), !pB) return null;
      let oB = yB ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return dB.blocked ? oB = "plotsGame:placementOffPlot" : dB.toClear > 0 && (oB = "plotsGame:placementClear"), (0, CB.jsx)(lT.e, {
        placement: "bottom",
        children: (0, CB.jsxs)("div", {
          className: "PlotsPlacementCard",
          children: [(0, CB.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: VB(DB(dB.id).displayName.translationKey)
          }), (0, CB.jsx)("div", {
            className: tB()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: dB.refusals > 0
            }),
            children: VB(oB)
          }, dB.refusals), (0, CB.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, CB.jsxs)(sB.d, {
              onClick: TB.rotate,
              children: [(0, CB.jsx)(rd, {
                noaAction: wd
              }), VB("plotsGame:placementRotate")]
            }), (0, CB.jsxs)(sB.K, {
              onClick: TB.stop,
              children: [(0, CB.jsx)(rd, {
                keyCode: Fd
              }), VB("general:cancel")]
            }), (0, CB.jsxs)(sB.k, {
              disabled: !lB,
              onClick: TB.build,
              children: [(0, CB.jsx)(rd, {
                keyCode: Ud
              }), VB("plotsGame:placementBuild")]
            })]
          })]
        })
      })
    }

    function rd(BB) {
      return (0, CB.jsx)(YT.d, {
        className: "PlotsPlacementKey",
        ...BB
      })
    }

    function Id() {}
    var cd = dB(3951);
    class Sd {
      constructor(BB) {
        this.placement = BB, this.press = null
      }
      down(BB) {
        if (null !== this.press) return !1;
        const {
          id: TB,
          mouse: dB,
          x: VB,
          y: yB,
          atMs: pB
        } = BB;
        return this.press = {
          id: TB,
          mouse: dB,
          x: VB,
          y: yB,
          atMs: pB,
          moved: !1
        }, dB || this.placement.beginDrag(BB.ndcX, BB.ndcY), !0
      }
      move(BB) {
        const TB = this.press;
        null !== TB && TB.id === BB.id && (TB.moved ||= Math.hypot(BB.x - TB.x, BB.y - TB.y) > 8), BB.mouse ? this.placement.hoverAt(BB.ndcX, BB.ndcY) : (null === TB || void 0 === TB ? void 0 : TB.id) === BB.id && this.placement.dragTo(BB.ndcX, BB.ndcY)
      }
      up(BB) {
        const TB = this.press;
        (null === TB || void 0 === TB ? void 0 : TB.id) === BB.id && (this.move(BB), this.end(), !TB.moved && (TB.mouse || BB.atMs - TB.atMs <= 250) && this.placement.tap())
      }
      cancel(BB) {
        var TB;
        (null === (TB = this.press) || void 0 === TB ? void 0 : TB.id) === BB && this.end()
      }
      lD(BB) {
        let {
          id: TB,
          mouse: dB
        } = BB;
        dB && this.placement.endHover(), this.cancel(TB)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }

    function Pd(BB) {
      let {
        placement: TB
      } = BB;
      return null === (0, wB.f)(Hd, TB.getView()) ? null : (0, CB.jsx)(Qd, {
        placement: TB
      })
    }

    function Qd(BB) {
      let {
        placement: TB
      } = BB;
      (0, cd.d)(!0, !0, "PlotsPlacementLayer");
      const dB = (0, pB.useMemo)((() => new Sd(TB)), [TB]);
      return (0, CB.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: BB => {
          "mouse" === BB.pointerType && 0 !== BB.button || !dB.down(Rd(BB)) || BB.currentTarget.setPointerCapture(BB.pointerId)
        },
        onPointerMove: BB => {
          dB.move(Rd(BB))
        },
        onPointerUp: BB => {
          dB.up(Rd(BB))
        },
        onPointerCancel: BB => {
          dB.cancel(BB.pointerId)
        },
        onLostPointerCapture: BB => {
          dB.cancel(BB.pointerId)
        },
        onPointerLeave: BB => {
          dB.lD(Rd(BB))
        },
        "aria-hidden": !0
      })
    }

    function Rd(BB) {
      const {
        left: TB,
        top: dB,
        width: VB,
        height: yB
      } = BB.currentTarget.getBoundingClientRect();
      return {
        id: BB.pointerId,
        mouse: "mouse" === BB.pointerType,
        x: BB.clientX,
        y: BB.clientY,
        ndcX: (BB.clientX - TB) / VB * 2 - 1,
        ndcY: 1 - (BB.clientY - dB) / yB * 2,
        atMs: BB.timeStamp
      }
    }
    var ad = dB(2085),
      Zd = dB(35700),
      Xd = dB(1727),
      Wd = dB(1139);
    const hd = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function Cd(BB) {
      let {
        hud: TB
      } = BB;
      const dB = (0, wB.f)(oT, TB.getPlot()),
        [VB, yB] = (0, pB.useState)(null),
        lB = (0, Zd.j)(VB);
      if ("none" === dB[0]) return null;
      const [, JB, YB, gB, oB, kB] = dB;
      return (0, CB.jsx)("div", {
        className: tB()("PlotsPlotBannerContainer", {
          Below: lB
        }),
        children: (0, CB.jsx)(Gd, {
          plotX: JB,
          plotZ: YB,
          ownerName: gB,
          ownerId: oB,
          relation: kB,
          plaqueRef: yB
        }, `${JB},${YB}`)
      })
    }

    function Gd(BB) {
      var TB, dB;
      let {
        plotX: VB,
        plotZ: yB,
        ownerName: pB,
        ownerId: lB,
        relation: JB,
        plaqueRef: YB
      } = BB;
      const {
        t: gB
      } = (0, FB.z)(), oB = (0, Xd.i)("hiddenPlayerNames"), kB = (0, Xd.i)("players"), LB = null === lB ? null : null !== (TB = null === (dB = kB.byId[lB]) || void 0 === dB ? void 0 : dB.cosmetics) && void 0 !== TB ? TB : null, OB = gB("plotsGame:plotBannerCoords", {
        x: VB,
        z: yB
      }), DB = "own" === JB || null !== pB;
      return (0, CB.jsxs)("div", {
        ref: YB,
        className: tB()("PlotsPlotBanner", {
          Own: "own" === JB,
          Shared: "shared" === JB
        }),
        role: "status",
        children: [(0, CB.jsxs)("span", {
          className: tB()("PlotsPlotBannerSeal", {
            Face: null !== LB
          }),
          children: [null !== LB && (0, CB.jsx)(ad.e, {
            cosmetics: LB
          }), null === LB && (0, CB.jsx)(fB.e, {
            name: hd[JB]
          })]
        }), (0, CB.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, CB.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === JB && gB("plotsGame:plotBannerYours"), "own" !== JB && null !== pB && gB("plotsGame:plotBannerOwner", {
              name: (0, Wd.g)(pB, oB)
            }), !DB && OB]
          }), DB && (0, CB.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [OB, "shared" === JB && (0, CB.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: gB("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }

    function qd(BB) {
      let {
        progress: TB,
        goal: dB
      } = BB;
      const VB = Math.min(TB, dB);
      return (0, CB.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, CB.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": dB,
          "aria-valuenow": VB,
          children: (0, CB.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${VB/dB})`
            }
          })
        }), (0, CB.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [VB, "/", dB]
        })]
      })
    }

    function xd(BB) {
      return {
        translationKey: `plotsGame:${BB}`,
        actions: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
      }
    }
    const jd = {
      house: {
        icon: "house",
        titleKey: "plotsGame:starterLotHouseTitle",
        desktop: xd("starterLotHouseHint", ["alt-fire"]),
        touch: xd("starterLotHouseHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotHousePlain"
      },
      garden: {
        icon: "sparkle",
        titleKey: "plotsGame:starterLotGarden",
        desktop: xd("starterLotGardenHint", ["alt-fire"]),
        touch: xd("starterLotGardenHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotGardenPlain"
      },
      boulder: {
        icon: "hammer",
        titleKey: "plotsGame:starterLotBoulder",
        desktop: xd("starterLotBreakHint", ["primary-fire"]),
        touch: xd("starterLotBreakHintTouch"),
        plainKey: "plotsGame:starterLotBreakPlain"
      },
      fly: {
        icon: "angles-up",
        titleKey: "plotsGame:starterLotFly",
        desktop: xd("starterLotFlyHint", ["jump"]),
        touch: xd("starterLotFlyHintTouch"),
        plainKey: "plotsGame:starterLotFlyPlain"
      },
      backpack: {
        icon: "backpack",
        titleKey: "plotsGame:starterLotBackpack",
        desktop: xd("starterLotBackpackHint", ["OpenInventory"]),
        touch: xd("starterLotBackpackHintTouch"),
        plainKey: "plotsGame:starterLotBackpackPlain"
      },
      neighbour: {
        icon: "person",
        titleKey: "plotsGame:starterLotNeighbour",
        desktop: xd("starterLotNeighbourHint", ["forward", "left", "backward", "right"]),
        touch: xd("starterLotNeighbourHintTouch"),
        plainKey: "plotsGame:starterLotNeighbourPlain"
      }
    };

    function Ad(BB, TB, dB) {
      const {
        translationKey: VB,
        actions: yB
      } = dB ? TB.touch : TB.desktop;
      if (0 === yB.length) return BB(VB);
      const pB = [];
      for (const lB of yB) {
        const VB = (0, zd.q)(lB, dB),
          yB = zd.r[lB][0];
        if (null === VB && void 0 === yB) return BB(TB.plainKey);
        pB.push(null === VB ? (0, zd.k)(yB) : BB(VB.translationKey))
      }
      return BB(VB, {
        key: pB.join("")
      })
    }

    function bd(BB) {
      let {
        hud: TB
      } = BB;
      const dB = (0, wB.f)(gT, TB.getStep()),
        {
          t: VB
        } = (0, FB.z)();
      return (0, CB.jsxs)(lT.e, {
        placement: "bottom",
        children: ["step" === dB[0] && (0, CB.jsx)(nd, {
          step: dB[1],
          progress: dB[2],
          goal: dB[3]
        }, dB[1]), "celebrate" === dB[0] && (0, CB.jsx)(ed, {
          className: tB()("Celebrate", {
            Gold: "house" === dB[1]
          }),
          icon: "star",
          title: VB("house" === dB[1] ? "plotsGame:starterLotYourPlot" : "plotsGame:starterLotBriefDone")
        }, `celebrate-${dB[1]}`)]
      })
    }

    function nd(BB) {
      let {
        step: TB,
        progress: dB,
        goal: VB
      } = BB;
      const {
        isTouchScreen: yB
      } = (0, JB.m)(["isTouchScreen"]), {
        t: pB
      } = (0, FB.z)(), lB = jd[TB];
      return (0, CB.jsxs)(ed, {
        icon: lB.icon,
        title: pB(lB.titleKey),
        children: [(0, CB.jsx)("div", {
          className: "PlotsStepCardHint SmallTextLight",
          children: Ad(pB, lB, yB)
        }), VB > 1 && (0, CB.jsx)(qd, {
          progress: dB,
          goal: VB
        }), "backpack" === TB && yB && (0, CB.jsx)(BV, {})]
      })
    }

    function ed(BB) {
      let {
        className: TB,
        icon: dB,
        title: VB,
        children: yB
      } = BB;
      return (0, CB.jsxs)("div", {
        className: tB()("PlotsStepCard", TB),
        role: "status",
        children: [(0, CB.jsx)("span", {
          className: "PlotsStepCardIcon",
          children: (0, CB.jsx)(fB.e, {
            name: dB
          })
        }), (0, CB.jsxs)("div", {
          className: "PlotsStepCardBody",
          children: [(0, CB.jsx)("div", {
            className: "PlotsStepCardTitle SmallTextBold",
            children: VB
          }), yB]
        })]
      })
    }

    function BV() {
      return (0, pB.useEffect)((() => (JB.d.set({
        backpackPointerRequested: !0
      }), () => {
        JB.d.set({
          backpackPointerRequested: !1
        })
      })), []), null
    }
    const TV = function(BB, TB, dB, VB) {
      let {
        localPlayerId: yB
      } = VB;
      const JB = new kT;
      let YB = null,
        gB = null,
        oB = null,
        kB = null,
        LB = null;
      const OB = [];
      return {
        onCreate: BB => {
          YB = new Md(BB, yB), gB = new gd(BB, yB, YB), oB = new gd(BB, yB, YB), kB = new vd(BB, yB), LB = new iB(BB, kB), OB.push((0, lB.r)((0, pB.createElement)(pB.Fragment, null, (0, pB.createElement)(Cd, {
            hud: JB
          }), (0, pB.createElement)(bd, {
            hud: JB
          }), (0, pB.createElement)(OT, {
            hud: JB,
            journal: LB
          }), (0, pB.createElement)(Pd, {
            placement: kB
          }), (0, pB.createElement)(Kd, {
            placement: kB
          })), {
            content: (0, pB.createElement)(yT, {
              journal: LB
            })
          }))
        },
        dL: () => {
          gB.dL(), oB.dL(), kB.dL(), LB.dL()
        },
        onPlayerAttemptAltAction: (BB, TB, dB, VB, yB, pB) => {
          var lB;
          if (null !== pB) return;
          const JB = void 0 === TB ? null : [TB, dB, VB];
          return null !== (lB = gB.attemptAltAction(JB)) && void 0 !== lB ? lB : oB.attemptAltAction(JB)
        },
        onPlayerClickUp: () => {
          gB.endPress(), oB.endPress()
        },
        onAfterRender: (BB, TB) => {
          kB.afterRender(TB), gB.afterRender(TB), oB.afterRender(TB)
        },
        onClose: () => {
          for (const BB of OB) BB();
          YB.dispose(), gB.dispose(), oB.dispose(), kB.dispose(), YB = null, gB = null, oB = null, kB = null, LB = null
        },
        onReceivedMessageFromServer: (BB, TB) => {
          if ("plotsStarterLot" === BB) JB.receiveStep(TB);
          else if ("plotsPlot" === BB) JB.receivePlot(TB);
          else if ("plotsStarterHouse" === BB) gB.MD(TB);
          else if ("plotsBlueprint" === BB) {
            const BB = TB;
            oB.MD(BB), kB.MD(BB)
          } else "plotsJournal" === BB ? LB.MD(TB) : "plotsJournalOpen" === BB ? LB.openFromServer() : "plotsPreviewEnd" === BB && kB.endFromServer()
        }
      }
    }
  },
  38087: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => VB,
      g: () => pB
    });
    const VB = 1 / .6,
      yB = {
        kind: "smokePuff"
      };
    class pB {
      constructor(BB, TB, dB) {
        this.style = BB, this.Kk = TB, this.half = dB, this.particles = null, this.lastFrame = -1
      }
      emit(BB, TB, dB) {
        let pB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return dB !== this.lastFrame && (this.lastFrame = dB, this.particles || (this.particles = BB.createParticles(function(BB, TB) {
          const [
            [dB, pB, lB],
            [JB, YB, gB]
          ] = BB.colours;
          return {
            texture: BB.soft ? yB : "square_particle",
            Kk: TB,
            minLifeTime: BB.life[0] / VB,
            maxLifeTime: BB.life[1] / VB,
            minEmitPower: BB.power[0] * VB,
            maxEmitPower: BB.power[1] * VB,
            minSize: BB.size[0],
            maxSize: BB.size[1],
            emitRate: 0,
            gravity: [0, BB.lift * VB * VB, 0],
            dir1: [-BB.spread, 1, -BB.spread],
            dir2: [BB.spread, 1, BB.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [dB, pB, lB, BB.alpha],
              maxColor: [JB, YB, gB, BB.alpha]
            }, {
              timeFraction: 1,
              minColor: [dB, pB, lB, 0],
              maxColor: [JB, YB, gB, 0]
            }],
            blendMode: BB.blendMode
          }
        }(this.style, this.Kk), {
          pos: TB,
          half: this.half
        })), this.particles.moveTo(TB, this.half), this.particles.emit(pB), !0)
      }
      dispose() {
        var BB;
        null === (BB = this.particles) || void 0 === BB || BB.stop(), this.particles = null
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);