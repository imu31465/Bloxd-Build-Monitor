export const id = 227;
export const ids = [227];
export const modules = {
  38416: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      default: () => JF
    });
    const FJ = [0, 90, 180, 270],
      UJ = "plotsblueprint";
    var eJ = ZJ(47),
      XJ = ZJ(35661),
      AJ = ZJ(13),
      qJ = ZJ(1528),
      jJ = ZJ(1599),
      YJ = ZJ(17);
    const hJ = [
        ["well", "greenhouse", "farmhouse"],
        ["tent", "cottage", "windmill"],
        ["marketStall", "gazebo", "bakery"],
        ["bridge", "lookoutTower", "lighthouse"]
      ],
      DJ = hJ.flat(),
      sJ = {
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

    function nJ(JJ) {
      return sJ[JJ]
    }
    const GJ = new Map(hJ.flatMap((JJ => JJ.slice(1).map(((cJ, ZJ) => [cJ, JJ[ZJ]])))));

    function fJ(JJ) {
      var cJ;
      return null !== (cJ = GJ.get(JJ)) && void 0 !== cJ ? cJ : null
    }
    const xJ = {
      well: "plotsGame:journalNoteWell",
      tent: "plotsGame:journalNoteTent",
      lookoutTower: "plotsGame:journalNoteLookoutTower",
      farmhouse: "plotsGame:journalNoteFarmhouse",
      windmill: "plotsGame:journalNoteWindmill"
    };

    function rJ(JJ, cJ) {
      const ZJ = new Set(JJ),
        FJ = function(JJ) {
          const cJ = new Set(JJ);
          return new Set(DJ.filter((JJ => {
            const ZJ = fJ(JJ);
            return null === ZJ || cJ.has(ZJ)
          })))
        }(ZJ);
      return DJ.map((JJ => {
        const UJ = JJ === cJ;
        return ZJ.has(JJ) ? {
          id: JJ,
          active: UJ,
          state: "completed",
          unlockedBy: null
        } : FJ.has(JJ) ? {
          id: JJ,
          active: UJ,
          state: "open",
          unlockedBy: null
        } : {
          id: JJ,
          active: UJ,
          state: "locked",
          unlockedBy: fJ(JJ)
        }
      }))
    }
    const vJ = "plotsJournalChanged";
    class mJ {
      constructor(JJ, cJ) {
        this.api = JJ, this.placement = cJ, this.pages = null, this.openRequested = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.ls("journal_opened")
        }, this.build = JJ => {
          this.ls("placement_started"), this.placement.start(JJ), (0, XJ.f)()
        }, this.putAway = () => {
          this.api.sendCommand(`${UJ} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      Qn(JJ) {
        let [, cJ, ZJ] = JJ;
        this.pages = rJ(cJ, ZJ), YJ.i.Uf(vJ, this.pages, !0)
      }
      openFromServer() {
        this.openRequested = !0, this.Hh()
      }
      Hh() {
        this.openRequested && !AJ.d.get("loadingOverlayVisible") && (this.openRequested = !1, null === this.pages || (0, qJ.l)() || (0, jJ.isTypingInInput)() || null !== this.placement.getView() || (0, XJ.n)())
      }
      ls(JJ) {
        this.reported.has(JJ) || (this.reported.add(JJ), this.api.sendCommand(`${UJ} report ${JJ}`))
      }
    }
    var QJ = ZJ(926),
      EJ = ZJ.n(QJ),
      VJ = ZJ(942),
      KJ = ZJ(1329),
      yJ = ZJ(3950),
      SJ = ZJ(2906),
      IJ = ZJ(1326),
      MJ = ZJ(1861),
      bJ = ZJ(1086),
      wJ = ZJ(8636);
    const WJ = [0, 90, 180, 270],
      gJ = /^(meta\|rot\d)\|([lrud]+)$/,
      HJ = "nesw",
      PJ = /^meta\|([nesw]*)\|?(Stacked)?$/,
      kJ = function(JJ) {
        const cJ = new WeakMap;
        return (ZJ, FJ) => {
          let UJ = cJ.get(ZJ);
          return void 0 === UJ && (UJ = JJ(ZJ, FJ), cJ.set(ZJ, UJ)), UJ
        }
      }((JJ => new pJ(JJ)));
    class pJ {
      constructor(JJ) {
        this.blockMetadata = JJ, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const cJ = new Set(Object.keys(JJ).map((cJ => JJ[cJ].id)));
        cJ.add(0), this.maxBlockId = Math.max(...cJ)
      }
      static
      for (JJ) {
        return kJ(JJ)
      }
      getBlockIdMapping(JJ, cJ) {
        const ZJ = this.getBlockIdMappingKey(JJ, cJ);
        let FJ = this.blockIdMappings.get(ZJ);
        return void 0 === FJ && WJ.includes(JJ) && (FJ = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, JJ, cJ), this.blockIdMappings.set(ZJ, FJ)), FJ
      }
      turnBlockId(JJ, cJ, ZJ) {
        return this.mapBlockId(this.blockMetadata[JJ], cJ, this.getRotationMapping(cJ, ZJ), ZJ)
      }
      getBlockIdMappingKey(JJ, cJ) {
        return `r${JJ}|m${Number(cJ)}`
      }
      createBlockIdMapping(JJ, cJ, ZJ, FJ) {
        const UJ = new Uint16Array(cJ + 1),
          eJ = this.getRotationMapping(ZJ, FJ);
        for (const XJ in JJ) {
          const cJ = JJ[XJ];
          UJ[cJ.id] = this.mapBlockId(cJ, ZJ, eJ, FJ)
        }
        return UJ
      }
      getRotationMapping(JJ, cJ) {
        const ZJ = Math.round(JJ / 90),
          FJ = new Uint8Array(4);
        for (let UJ = 0; UJ < 4; UJ++) FJ[UJ] = (4 + UJ - ZJ) % 4;
        if (cJ) {
          let JJ = FJ[0];
          FJ[0] = FJ[1], FJ[1] = JJ, JJ = FJ[2], FJ[2] = FJ[3], FJ[3] = JJ
        }
        return FJ
      }
      mapBlockId(JJ, cJ, ZJ, FJ) {
        var UJ;
        const {
          blockMetadata: eJ
        } = this, XJ = Math.round(cJ / 90), {
          id: AJ,
          meta: qJ
        } = JJ, {
          rot: jJ,
          rootName: YJ,
          metaStr: hJ
        } = qJ;
        let DJ;
        const [, sJ, nJ] = null !== (UJ = PJ.exec(hJ)) && void 0 !== UJ ? UJ : [];
        if (void 0 !== sJ) {
          var GJ, fJ;
          DJ = null !== (GJ = null === (fJ = eJ[`${YJ}|meta|${[HJ.split("").filter(((JJ,cJ)=>sJ.split("").some((JJ=>{const ZJ=HJ.indexOf(JJ);return((FJ?3-ZJ:ZJ)+XJ)%4===cJ})))).join(""),nJ].filter(Boolean).join("|")}`]) || void 0 === fJ ? void 0 : fJ.id) && void 0 !== GJ ? GJ : AJ
        } else if (null === jJ) DJ = AJ;
        else {
          var xJ, rJ;
          const JJ = ZJ[jJ - 1] + 1;
          let cJ = hJ.replace(`rot${jJ}`, `rot${JJ}`);
          FJ && qJ.stairsCorner && (cJ = cJ.replace(/(Left|Right)$/, (JJ => "Left" === JJ ? "Right" : "Left"))), FJ && "Chest" === YJ && (cJ = cJ.replace(/\|(left|right)$/, ((JJ, cJ) => "left" === cJ ? "|right" : "|left")));
          const UJ = gJ.exec(cJ);
          if (FJ && null !== UJ) {
            const JJ = "lrud".split("").filter((JJ => UJ[2].includes("l" === JJ ? "r" : "r" === JJ ? "l" : JJ)));
            cJ = `${UJ[1]}|${JJ.join("")}`
          }
          const XJ = `${YJ}|${cJ}`;
          if (DJ = null !== (xJ = null === (rJ = eJ[XJ]) || void 0 === rJ ? void 0 : rJ.id) && void 0 !== xJ ? xJ : null, null === DJ) {
            const JJ = eJ[YJ];
            DJ = JJ.rootMetaDesc === XJ ? JJ.id : AJ
          }
        }
        return DJ
      }
    }

    function dJ(JJ, cJ, ZJ) {
      let {
        xRotationMappedOrigin: FJ,
        shouldSwapXZ: UJ
      } = ZJ;
      const eJ = UJ ? cJ : JJ;
      return null === FJ ? eJ : FJ - eJ
    }

    function zJ(JJ, cJ, ZJ) {
      let {
        zRotationMappedOrigin: FJ,
        shouldSwapXZ: UJ
      } = ZJ;
      const eJ = UJ ? JJ : cJ;
      return null === FJ ? eJ : FJ - eJ
    }
    const NJ = {
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
      OJ = new Map;

    function TJ(JJ, cJ) {
      const ZJ = `${JJ}|${cJ}`;
      let FJ = OJ.get(ZJ);
      if (void 0 === FJ) {
        const {
          size: UJ,
          palette: eJ,
          layers: XJ
        } = NJ[JJ], AJ = 90 === cJ || 270 === cJ, [qJ, jJ] = AJ ? [UJ[2], UJ[0]] : [UJ[0], UJ[2]], YJ = function(JJ, cJ, ZJ) {
          let FJ = null,
            UJ = null,
            eJ = !1;
          switch (JJ) {
            case 0:
              break;
            case 90:
              FJ = cJ - 1, eJ = !0;
              break;
            case 180:
              FJ = cJ - 1, UJ = ZJ - 1;
              break;
            case 270:
              UJ = ZJ - 1, eJ = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${JJ}`)
          }
          return {
            xRotationMappedOrigin: FJ,
            zRotationMappedOrigin: UJ,
            shouldSwapXZ: eJ
          }
        }(cJ, qJ, jJ), hJ = pJ.for(wJ.m), DJ = eJ.map((JJ => (0, wJ.i)(hJ.turnBlockId((0, wJ.n)(JJ), cJ, !1)))), sJ = [];
        XJ.forEach(((JJ, cJ) => {
          JJ.split(" ").forEach(((JJ, ZJ) => {
            for (let FJ = 0; FJ < JJ.length; FJ++)
              if ("." !== JJ[FJ]) {
                const UJ = [dJ(FJ, ZJ, YJ), cJ, zJ(FJ, ZJ, YJ)];
                sJ.push({
                  offset: UJ,
                  block: DJ[JJ.charCodeAt(FJ) - "a".charCodeAt(0)]
                })
              }
          }))
        })), FJ = {
          size: [qJ, UJ[1], jJ],
          cells: sJ
        }, OJ.set(ZJ, FJ)
      }
      return FJ
    }
    const CJ = {
      well: ZJ.p + "static/media/well.6059dda29952da474ade.webp",
      tent: ZJ.p + "static/media/tent.b33fdaeb9129e7931315.webp",
      marketStall: ZJ.p + "static/media/marketStall.6e04c605a5daeb43787d.webp",
      gazebo: ZJ.p + "static/media/gazebo.5db92096efe3e790b93c.webp",
      cottage: ZJ.p + "static/media/cottage.a2ba06bd20dc5625f673.webp",
      lookoutTower: ZJ.p + "static/media/lookoutTower.eeb0336a5e86d88661c4.webp",
      bridge: ZJ.p + "static/media/bridge.ee5a7ddef6d74a1c5c2d.webp",
      farmhouse: ZJ.p + "static/media/farmhouse.9e4425b8d81e6c8cf5d2.webp",
      bakery: ZJ.p + "static/media/bakery.678fc20dd5fba272965f.webp",
      greenhouse: ZJ.p + "static/media/greenhouse.b77eb0b4ade590f95053.webp",
      lighthouse: ZJ.p + "static/media/lighthouse.b8267661edfd4c5e7c77.webp",
      windmill: ZJ.p + "static/media/windmill.e2fd79cf51ec00d299c8.webp"
    };
    var uJ = ZJ(990);
    const iJ = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function RJ(JJ) {
      let {
        page: cJ,
        building: ZJ,
        onBuild: FJ,
        onPutAway: UJ
      } = JJ;
      const {
        t: eJ
      } = (0, bJ.F)(), {
        displayName: XJ,
        tier: AJ
      } = nJ(cJ.id), qJ = TJ(cJ.id, 0).cells.length, jJ = xJ[cJ.id], YJ = "locked" === cJ.state, hJ = ZJ ? KJ.d : KJ.m;
      return (0, uJ.jsxs)("article", {
        className: EJ()("PlotsJournalPage", {
          Locked: YJ
        }),
        children: [(0, uJ.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: eJ(XJ.translationKey)
        }), (0, uJ.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [eJ(iJ[AJ]), " \xb7 ", eJ("plotsGame:journalBlocks", {
            blocks: String(qJ)
          })]
        }), (0, uJ.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [DJ.map((JJ => (0, uJ.jsx)("img", {
            className: EJ()({
              Shown: JJ === cJ.id
            }),
            src: CJ[JJ],
            alt: "",
            draggable: !1
          }, JJ))), "completed" === cJ.state && (0, uJ.jsx)("span", {
            className: "PlotsJournalStamp",
            children: eJ("plotsGame:journalBuilt")
          }), YJ && (0, uJ.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, uJ.jsx)(VJ.c, {
              name: "lock"
            })
          })]
        }), void 0 !== jJ && "completed" !== cJ.state && (0, uJ.jsx)("p", {
          className: "PlotsJournalNote",
          children: eJ(jJ)
        }), (0, uJ.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === cJ.state && (0, uJ.jsx)("p", {
            className: "PlotsJournalHint",
            children: eJ("plotsGame:journalLocked", {
              name: eJ(nJ(cJ.unlockedBy).displayName.translationKey)
            })
          }), cJ.active && (0, uJ.jsxs)(uJ.Fragment, {
            children: [(0, uJ.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: eJ("plotsGame:journalBuilding")
            }), (0, uJ.jsx)(KJ.g, {
              onClick: UJ,
              children: eJ("plotsGame:journalPutAway")
            })]
          }), !YJ && !cJ.active && (0, uJ.jsx)(hJ, {
            onClick: () => {
              FJ(cJ.id)
            },
            children: eJ("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function LJ(JJ) {
      let {
        className: cJ,
        page: ZJ,
        hidden: FJ,
        building: UJ,
        journal: eJ
      } = JJ;
      return (0, uJ.jsxs)("div", {
        ref: JJ => {
          null !== JJ && (JJ.inert = FJ)
        },
        className: EJ()("PlotsJournalSide", cJ),
        children: [void 0 !== ZJ && (0, uJ.jsx)(RJ, {
          page: ZJ,
          building: UJ,
          onBuild: eJ.build,
          onPutAway: eJ.putAway
        }), void 0 === ZJ && (0, uJ.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var aJ = ZJ(235),
      BJ = ZJ(1671);

    function tJ(JJ) {
      return Math.cos((0, BJ.k)(JJ))
    }

    function oJ(JJ) {
      return (0, BJ.z)(Math.acos(aJ.c.clamp(JJ, -1, 1)))
    }

    function lJ(JJ, cJ, ZJ, FJ, UJ) {
      const eJ = Math.abs(cJ - JJ),
        XJ = (0, BJ.z)(UJ / (ZJ * Math.abs(Math.sin((0, BJ.k)(JJ))))),
        AJ = 450 * Math.min(1, eJ / FJ),
        qJ = XJ > 0 ? 3 * eJ / XJ : 1 / 0;
      return Math.round(Math.max(120, Math.min(AJ, qJ)))
    }
    class Jc {
      constructor() {
        this.samples = []
      }
      add(JJ, cJ) {
        for (this.samples.push({
            x: JJ,
            at: cJ
          }); cJ - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const JJ = this.samples[0],
          cJ = this.samples[this.samples.length - 1];
        return cJ.at > JJ.at ? (cJ.x - JJ.x) / (cJ.at - JJ.at) : 0
      }
    }

    function cc(JJ, cJ) {
      return JJ > cJ && JJ >= 600
    }

    function Zc(JJ) {
      return oJ(new DOMMatrixReadOnly(getComputedStyle(JJ).transform).m11)
    }

    function Fc(JJ, cJ) {
      JJ.style.transform = `rotateY(${-cJ}deg)`, JJ.classList.add("Turning")
    }

    function Uc(JJ) {
      let {
        journal: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, bJ.F)(), FJ = (0, IJ.m)(vJ, cJ.getPages()), UJ = (0, MJ.c)(cc), [AJ, qJ] = (0, eJ.useState)((() => function(JJ) {
        const cJ = JJ.findIndex((JJ => JJ.active));
        return -1 !== cJ ? cJ : Math.max(0, JJ.findIndex((JJ => "open" === JJ.state)))
      }(FJ))), YJ = (0, eJ.useRef)(null), hJ = (0, eJ.useRef)(null), DJ = (0, eJ.useRef)({
        Forward: null,
        Back: null
      }), sJ = UJ ? 2 : 1, nJ = UJ ? 180 : 90, GJ = AJ - AJ % sJ, fJ = GJ > 0, xJ = GJ + sJ < FJ.length, rJ = (0, eJ.useCallback)((() => {
        const JJ = hJ.current;
        return null === JJ ? GJ : (hJ.current = null, JJ.animation.cancel(), (cJ = DJ.current[JJ.direction]).style.transform = "", cJ.classList.remove("Turning"), null === JJ.next ? GJ : (qJ(JJ.next), JJ.next));
        var cJ
      }), [GJ]), mJ = (0, eJ.useCallback)(((JJ, cJ, ZJ, FJ) => {
        const UJ = DJ.current[JJ],
          eJ = Zc(UJ),
          XJ = cJ === ("Forward" === JJ) ? nJ : 0;
        Fc(UJ, XJ);
        const AJ = UJ.animate([{
          transform: `rotateY(${-eJ}deg)`
        }, {
          transform: `rotateY(${-XJ}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : lJ(eJ, XJ, UJ.offsetWidth, nJ, XJ > eJ ? -ZJ : ZJ),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        hJ.current = {
          direction: JJ,
          animation: AJ,
          next: cJ ? FJ + ("Forward" === JJ ? sJ : -sJ) : null
        }, AJ.onfinish = () => {
          var JJ;
          (null === (JJ = hJ.current) || void 0 === JJ ? void 0 : JJ.animation) === AJ && rJ()
        }
      }), [sJ, nJ, rJ]), QJ = (0, eJ.useCallback)((JJ => {
        if (null !== YJ.current) return;
        const cJ = rJ();
        ("Forward" === JJ ? cJ + sJ < FJ.length : cJ > 0) && mJ(JJ, !0, 0, cJ)
      }), [rJ, mJ, sJ, FJ.length]);
      (0, eJ.useEffect)((() => {
        cJ.onOpened()
      }), [cJ]), (0, eJ.useEffect)((() => () => {
        var JJ;
        null === (JJ = hJ.current) || void 0 === JJ || JJ.animation.cancel()
      }), []), (0, eJ.useEffect)((() => {
        const JJ = JJ => {
          var cJ;
          JJ.pointerId !== (null === (cJ = YJ.current) || void 0 === cJ ? void 0 : cJ.pointerId) || YJ.current.following || (YJ.current = null)
        };
        return window.addEventListener("pointerup", JJ), () => {
          window.removeEventListener("pointerup", JJ)
        }
      }), []), (0, SJ.b)((JJ => ("ArrowLeft" === JJ.code || "ArrowRight" === JJ.code) && !(0, jJ.isTypingInInput)()), (JJ => {
        JJ.stopPropagation(), QJ("ArrowLeft" === JJ.code ? "Back" : "Forward")
      }));
      const VJ = (JJ, cJ, ZJ) => {
          const FJ = function(JJ, cJ, ZJ, FJ) {
            return (JJ < 0 ? ZJ : FJ) ? aJ.c.clampAbs(JJ, cJ) : Math.sign(JJ) * cJ * (1 - 1 / (.55 * Math.abs(JJ) / cJ + 1))
          }(JJ.base + ZJ, sJ * JJ.width, xJ, fJ);
          return "Forward" === cJ ? Math.min(FJ, 0) : Math.max(FJ, 0)
        },
        wJ = (JJ, cJ) => {
          const ZJ = YJ.current;
          if (YJ.current = null, null === ZJ.direction) return;
          ZJ.speed.add(JJ, cJ);
          const FJ = ZJ.speed.get(),
            UJ = VJ(ZJ, ZJ.direction, JJ - ZJ.x);
          mJ(ZJ.direction, null !== function(JJ, cJ, ZJ, FJ, UJ) {
            if (Math.abs(cJ) >= .3 ? Math.sign(cJ) !== Math.sign(JJ) : Math.abs(JJ) < .5 * ZJ) return null;
            const eJ = JJ < 0 ? "Forward" : "Back";
            return ("Forward" === eJ ? FJ : UJ) ? eJ : null
          }(UJ, FJ, sJ * ZJ.width, xJ, fJ), FJ, GJ)
        },
        WJ = FJ.some((JJ => JJ.active)),
        gJ = (JJ, ZJ, UJ) => (0, uJ.jsx)(LJ, {
          className: JJ,
          page: ZJ >= 0 && ZJ < FJ.length ? FJ[ZJ] : void 0,
          hidden: UJ,
          building: WJ,
          journal: cJ
        });
      return (0, uJ.jsx)(yJ.c, {
        close: XJ.j,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, uJ.jsxs)("section", {
          className: EJ()("PlotsJournal", {
            Spread: UJ
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": ZJ("plotsGame:journalTitle"),
          children: [(0, uJ.jsx)(KJ.j, {
            className: "PlotsJournalClose",
            onClick: XJ.j
          }), (0, uJ.jsx)(ec, {
            direction: "Back",
            disabled: !fJ,
            onTurn: QJ
          }), (0, uJ.jsx)("div", {
            className: "PlotsJournalBookPages",
            onPointerDown: JJ => {
              var cJ;
              if (!JJ.isPrimary || 0 !== JJ.button || null !== hJ.current && null !== JJ.target.closest("button")) return;
              const ZJ = new Jc;
              ZJ.add(JJ.clientX, JJ.timeStamp);
              const FJ = DJ.current.Forward.offsetWidth,
                UJ = hJ.current;
              hJ.current = null;
              let eJ = 0;
              if (null !== UJ) {
                const cJ = DJ.current[UJ.direction],
                  ZJ = Zc(cJ);
                UJ.animation.cancel(), Fc(cJ, ZJ), eJ = function(JJ, cJ, ZJ, FJ) {
                  return (JJ < 0 ? ZJ : FJ) ? JJ : Math.sign(JJ) * cJ * (1 / (1 - Math.min(Math.abs(JJ) / cJ, .99)) - 1) / .55
                }(function(JJ, cJ, ZJ, FJ) {
                  return ZJ * (tJ(cJ) - tJ("Forward" === JJ ? 0 : FJ))
                }(UJ.direction, ZJ, FJ, nJ), sJ * FJ, xJ, fJ), JJ.currentTarget.setPointerCapture(JJ.pointerId)
              }
              YJ.current = {
                pointerId: JJ.pointerId,
                x: JJ.clientX,
                y: JJ.clientY,
                base: eJ,
                width: FJ,
                following: null !== UJ,
                direction: null !== (cJ = null === UJ || void 0 === UJ ? void 0 : UJ.direction) && void 0 !== cJ ? cJ : null,
                speed: ZJ
              }
            },
            onPointerMove: JJ => {
              const cJ = YJ.current;
              if (null === cJ || JJ.pointerId !== cJ.pointerId) return;
              if (0 === JJ.buttons) return void wJ(JJ.clientX, JJ.timeStamp);
              const ZJ = JJ.clientX - cJ.x;
              !cJ.following && function(JJ, cJ) {
                return Math.abs(JJ) > 8 && Math.abs(JJ) > Math.abs(cJ)
              }(ZJ, JJ.clientY - cJ.y) && (cJ.following = !0, cJ.direction = ZJ < 0 ? "Forward" : "Back", JJ.currentTarget.setPointerCapture(JJ.pointerId)), null !== cJ.direction && (cJ.speed.add(JJ.clientX, JJ.timeStamp), Fc(DJ.current[cJ.direction], function(JJ, cJ, ZJ, FJ) {
                const UJ = ZJ * tJ("Forward" === JJ ? 0 : FJ) + cJ;
                return aJ.c.clamp(oJ(UJ / ZJ), 0, FJ)
              }(cJ.direction, VJ(cJ, cJ.direction, ZJ), cJ.width, nJ)))
            },
            onPointerUp: JJ => {
              var cJ;
              JJ.pointerId === (null === (cJ = YJ.current) || void 0 === cJ ? void 0 : cJ.pointerId) && wJ(JJ.clientX, JJ.timeStamp)
            },
            onPointerCancel: JJ => {
              const cJ = YJ.current;
              JJ.pointerId === (null === cJ || void 0 === cJ ? void 0 : cJ.pointerId) && (YJ.current = null, null !== cJ.direction && mJ(cJ.direction, !1, 0, GJ))
            },
            children: (0, uJ.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [UJ && gJ("Left", GJ - 2, !0), gJ("Right", GJ + 2 * sJ - 1, !0), (0, uJ.jsxs)("div", {
                ref: JJ => {
                  DJ.current.Back = JJ
                },
                className: "PlotsJournalLeaf Back",
                children: [gJ("Recto", GJ - 1, !0), UJ && gJ("Verso", GJ, !1)]
              }), (0, uJ.jsxs)("div", {
                ref: JJ => {
                  DJ.current.Forward = JJ
                },
                className: "PlotsJournalLeaf Forward",
                children: [gJ("Recto", GJ + sJ - 1, !1), UJ && gJ("Verso", GJ + sJ, !0)]
              })]
            })
          }), (0, uJ.jsx)(ec, {
            direction: "Forward",
            disabled: !xJ,
            onTurn: QJ
          })]
        })
      })
    }

    function ec(JJ) {
      let {
        direction: cJ,
        disabled: ZJ,
        onTurn: FJ
      } = JJ;
      const {
        t: UJ
      } = (0, bJ.F)();
      return (0, uJ.jsx)("div", {
        className: EJ()("PlotsJournalArrow", cJ),
        children: (0, uJ.jsx)(KJ.d, {
          disabled: ZJ,
          ariaLabel: UJ("Forward" === cJ ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            FJ(cJ)
          },
          children: (0, uJ.jsx)(VJ.c, {
            name: "angle-up"
          })
        })
      })
    }
    var Xc = ZJ(35658),
      Ac = ZJ(1688),
      qc = ZJ(1747);
    const jc = "plotsStepChanged",
      Yc = "plotsPlotChanged";
    class hc {
      constructor() {
        this.step = ["none"], this.plot = ["none"]
      }
      getStep() {
        return this.step
      }
      receiveStep(JJ) {
        this.step = JJ, YJ.i.Uf(jc, JJ, !0)
      }
      getPlot() {
        return this.plot
      }
      receivePlot(JJ) {
        this.plot = JJ, YJ.i.Uf(Yc, JJ, !0)
      }
    }
    const Dc = "KeyJ";

    function sc(JJ) {
      let {
        hud: cJ,
        journal: ZJ
      } = JJ;
      const FJ = (0, IJ.m)(vJ, ZJ.getPages()),
        UJ = (0, IJ.m)(jc, cJ.getStep()),
        {
          isTouchScreen: eJ
        } = (0, AJ.j)(["isTouchScreen"]),
        {
          t: YJ
        } = (0, bJ.F)(),
        hJ = null !== FJ && "none" === UJ[0];
      return (0, SJ.b)((JJ => null !== FJ && JJ.code === Dc && !JJ.repeat && !(0, jJ.isTypingInInput)()), (JJ => {
        (0, qJ.v)(JJ, hJ, XJ.n)
      })), hJ ? (0, uJ.jsx)(Xc.f, {
        placement: "topRight",
        children: (0, uJ.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, uJ.jsxs)("button", {
            type: "button",
            className: EJ()("PlotsJournalButton SmallTextBold", {
              Touch: eJ
            }),
            onClick: XJ.n,
            children: [(0, uJ.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, uJ.jsx)(Ac.d, {
                itemName: "Book",
                amount: 0
              })
            }), YJ("plotsGame:journalButton"), !eJ && (0, uJ.jsx)(qc.e, {
              className: "PlotsJournalButtonKey",
              keyCode: Dc
            })]
          })
        })
      }) : null
    }
    var nc = ZJ(37403),
      Gc = ZJ(37170),
      fc = ZJ(35944),
      xc = ZJ(8677),
      rc = ZJ(8692),
      vc = ZJ(36775);
    const mc = new Map([
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
      Qc = [...fc.c.blockRemoveActionRoots, ...Gc.b, ...xc.h, "Board", "Code Block", "Custom Lobby Block"],
      Ec = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let Vc = null;

    function Kc() {
      return Vc ??= function() {
        const JJ = yc(),
          cJ = Math.max(...JJ.map((JJ => wJ.m[JJ].id))) + 1,
          ZJ = new Int32Array(cJ),
          FJ = new Int32Array(cJ),
          UJ = new Uint8Array(cJ).fill(1),
          eJ = new Uint8Array(cJ),
          XJ = new Uint8Array(cJ),
          AJ = new Array(cJ).fill("Air"),
          qJ = new Map,
          jJ = JJ => {
            let cJ = qJ.get(JJ);
            return void 0 === cJ && (cJ = qJ.size + 1, qJ.set(JJ, cJ)), cJ
          },
          YJ = new Set(Qc);
        for (const DJ of JJ) {
          var hJ;
          const {
            id: JJ,
            meta: cJ,
            altActionable: qJ,
            canBePlacedOver: sJ
          } = wJ.m[DJ];
          ZJ[JJ] = jJ(Sc(DJ));
          const nJ = cJ.stairsCorner;
          if (null === nJ) FJ[JJ] = ZJ[JJ];
          else {
            const ZJ = nJ.endsWith("Right");
            FJ[JJ] = jJ(`${cJ.rootName}|rot${ZJ?cJ.rot%4+1:cJ.rot}|${cJ.halfblockPlacement}|${nJ.replace("Right","Left")}`)
          }
          UJ[JJ] = sJ ? 1 : 0, eJ[JJ] = qJ || null !== cJ.open || DJ in vc.d || YJ.has(cJ.rootName) || void 0 !== (0, Gc.d)(cJ.rootName) ? 1 : 0;
          const {
            rootName: GJ
          } = cJ;
          XJ[JJ] = null !== cJ.open || Gc.b.includes(GJ) || GJ.includes("Bookshelf") || GJ.includes("Mailbox") ? 1 : 0, AJ[JJ] = null !== (hJ = (0, nc.f)(JJ)) && void 0 !== hJ ? hJ : GJ
        }
        return {
          kinds: ZJ,
          shapes: FJ,
          empty: UJ,
          inUse: eJ,
          ownAltActionMessage: XJ,
          placingItems: AJ
        }
      }(), Vc
    }

    function yc() {
      return Object.keys(wJ.m).filter((JJ => wJ.m[JJ].name === JJ))
    }

    function Sc(JJ) {
      var cJ;
      const ZJ = wJ.m[JJ],
        {
          rootName: FJ,
          rot: UJ
        } = ZJ.meta,
        [, ...eJ] = (null !== (cJ = ZJ.rootMetaDesc) && void 0 !== cJ ? cJ : JJ).split("|"),
        XJ = eJ.filter((JJ => !("meta" === JJ || Ec.test(JJ) || (0, rc.B)(ZJ) && /^[nesw]+$/.test(JJ) || xc.h.includes(FJ) && /^[lrud]+$/.test(JJ) || aJ.C.includes(FJ) && /^(left|right)$/.test(JJ))));
      return [FJ, ...XJ].map((JJ => "fenceGate" === ZJ.model && JJ === `rot${UJ}` ? "rot" + ((UJ - 1) % 2 + 1) : JJ)).join("|")
    }

    function Ic(JJ, cJ) {
      const {
        kinds: ZJ,
        shapes: FJ
      } = Kc();
      return ZJ[JJ] === ZJ[cJ] || FJ[JJ] === FJ[cJ]
    }

    function Mc(JJ) {
      return 1 === Kc().empty[JJ]
    }

    function bc(JJ) {
      return Kc().placingItems[JJ]
    }

    function wc(JJ) {
      return mc.get(wJ.m[JJ].meta.rootName)
    }
    var Wc = ZJ(8670),
      gc = ZJ(8687);
    const Hc = [0, 0, 0, 1, 1, 1],
      Pc = (0, Wc.c)([
        [2, 0, 2, 6, 6, 6]
      ]),
      kc = (0, Wc.c)([
        [3, 0, 3, 5, 5, 5]
      ]),
      pc = (0, Wc.c)([
        [3, 3, 3, 5, 8, 5]
      ]),
      dc = [0, 1, 2, 3].map((JJ => (0, Wc.c)((0, Wc.n)([
        [3, 2, 0, 5, 7, 3]
      ], JJ))));

    function zc(JJ) {
      const {
        Xf: cJ,
        model: ZJ,
        blockModel: FJ,
        meta: UJ
      } = wJ.m[JJ];
      return void 0 !== cJ ? cJ : "CentreCross" === ZJ ? Pc : null !== FJ && void 0 !== FJ && FJ.startsWith("torch") ? UJ.halfblockPlacement === gc.d.side ? dc[UJ.rot - 1] : UJ.halfblockPlacement === gc.d.top ? pc : kc : Hc
    }

    function Nc(JJ, cJ) {
      return null === JJ || null === cJ ? JJ === cJ : JJ[0] === cJ[0] && JJ[1] === cJ[1] && JJ[2] === cJ[2]
    }

    function Oc(JJ) {
      return [JJ[0] + .5, JJ[1] + .5, JJ[2] + .5]
    }
    var Tc = ZJ(157);

    function Cc(JJ, cJ) {
      const ZJ = Tc.c.Av / 2;
      return JJ[0] < cJ[0] + ZJ && JJ[0] + 1 > cJ[0] - ZJ && JJ[1] < cJ[1] + Tc.c.Dv && JJ[1] + 1 > cJ[1] && JJ[2] < cJ[2] + ZJ && JJ[2] + 1 > cJ[2] - ZJ
    }

    function uc(JJ) {
      return JJ + 1
    }

    function ic(JJ, cJ, ZJ, FJ, UJ) {
      const eJ = Math.hypot(...cJ.dir);
      if (!Number.isFinite(eJ) || 0 === eJ) return -1;
      const {
        from: XJ,
        reach: AJ,
        solid: qJ
      } = cJ, jJ = [cJ.dir[0] / eJ, cJ.dir[1] / eJ, cJ.dir[2] / eJ], YJ = null === qJ ? AJ : Math.min(AJ, function(JJ, cJ, ZJ) {
        const FJ = Rc(JJ, cJ, ZJ);
        if (FJ !== 1 / 0) return FJ;
        return (ZJ[0] + .5 - JJ[0]) * cJ[0] + (ZJ[1] + .5 - JJ[1]) * cJ[1] + (ZJ[2] + .5 - JJ[2]) * cJ[2]
      }(XJ, jJ, qJ) + .75);
      let hJ = -1,
        DJ = 1 / 0,
        sJ = 1 / 0;
      for (let nJ = 0; nJ < JJ.length; nJ += 4) {
        const cJ = [JJ[nJ], JJ[nJ + 1], JJ[nJ + 2]],
          eJ = UJ(nJ) ? AJ : YJ;
        let qJ = -1,
          GJ = Rc(XJ, jJ, cJ);
        if (GJ > eJ) {
          const JJ = [cJ[0] + .5 - XJ[0], cJ[1] + .5 - XJ[1], cJ[2] + .5 - XJ[2]];
          if (GJ = JJ[0] * jJ[0] + JJ[1] * jJ[1] + JJ[2] * jJ[2], GJ <= 0 || GJ > eJ) continue;
          if (qJ = Math.hypot(JJ[0] - GJ * jJ[0], JJ[1] - GJ * jJ[1], JJ[2] - GJ * jJ[2]), qJ > .7 || !FJ(nJ)) continue
        }(qJ < DJ || qJ === DJ && GJ < sJ) && ZJ(nJ) && (hJ = nJ, DJ = qJ, sJ = GJ)
      }
      return hJ
    }

    function Rc(JJ, cJ, ZJ) {
      let FJ = 0,
        UJ = 1 / 0;
      for (let eJ = 0; eJ < 3; eJ++) {
        const XJ = ZJ[eJ] - JJ[eJ];
        if (0 === cJ[eJ]) {
          if (XJ > 0 || XJ + 1 < 0) return 1 / 0;
          continue
        }
        const AJ = XJ / cJ[eJ],
          qJ = (XJ + 1) / cJ[eJ];
        FJ = Math.max(FJ, Math.min(AJ, qJ)), UJ = Math.min(UJ, Math.max(AJ, qJ))
      }
      return FJ <= UJ ? FJ : 1 / 0
    }
    var Lc = ZJ(37025),
      ac = ZJ(37505);
    const Bc = [1, 1, 1];
    class tc {
      constructor(JJ) {
        this.api = JJ, this.meshes = null, this.shown = null
      }
      show(JJ) {
        if (!Nc(JJ, this.shown))
          if (this.shown = null === JJ ? null : [JJ[0], JJ[1], JJ[2]], null !== this.meshes)
            for (const cJ of this.meshes) this.api.setGameMesh(cJ, null === JJ ? {
              visible: !1
            } : {
              anchor: JJ,
              visible: !0
            });
          else if (null !== JJ) {
          const cJ = [Lc.g, Lc.g, Lc.g, 0, 0, 0];
          this.meshes = [this.build([cJ], Lc.h, JJ), this.build((0, Lc.c)(), Lc.l, JJ)]
        }
      }
      dispose() {
        for (const cJ of null !== (JJ = this.meshes) && void 0 !== JJ ? JJ : []) {
          var JJ;
          this.api.disposeGameMesh(cJ)
        }
        this.meshes = null, this.shown = null
      }
      build(JJ, cJ, ZJ) {
        const FJ = [],
          UJ = [];
        for (const [eJ, XJ, AJ, qJ, jJ, YJ] of JJ)(0, ac.i)(FJ, UJ, [qJ + .5, jJ + .5, YJ + .5], [eJ, XJ, AJ]);
        return this.api.createGameMesh({
          positions: FJ,
          indices: UJ
        }, {
          rgb: Bc,
          alpha: cJ,
          onTop: !0
        }, ZJ)
      }
    }
    class oc {
      constructor(JJ) {
        this.api = JJ, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(JJ) {
        const cJ = Tc.c.Kn;
        this.chunks = [];
        for (let ZJ = 0; ZJ < JJ.length; ZJ += 3) {
          const FJ = Math.floor(JJ[ZJ] / cJ),
            UJ = Math.floor(JJ[ZJ + 1] / cJ),
            eJ = Math.floor(JJ[ZJ + 2] / cJ);
          this.watches(FJ, UJ, eJ) || this.chunks.push(FJ, UJ, eJ)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const JJ = performance.now();
        if (JJ - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = JJ;
        let cJ = !1;
        for (let ZJ = 0; ZJ < this.chunks.length; ZJ += 3) {
          const JJ = this.api.getChunkVersion(this.chunks[ZJ], this.chunks[ZJ + 1], this.chunks[ZJ + 2]);
          this.versions[ZJ / 3] !== JJ && (this.versions[ZJ / 3] = JJ, cJ = !0)
        }
        return cJ
      }
      watches(JJ, cJ, ZJ) {
        for (let FJ = 0; FJ < this.chunks.length; FJ += 3)
          if (this.chunks[FJ] === JJ && this.chunks[FJ + 1] === cJ && this.chunks[FJ + 2] === ZJ) return !0;
        return !1
      }
    }
    const lc = .35,
      JZ = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      cZ = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      ZZ = [.95, .2, .15];
    class FZ {
      constructor() {
        this.groups = []
      }
      add(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Hc;
        for (const XJ of this.groups)
          if (XZ(XJ, FJ, UJ)) return XJ.cells.push(JJ, cJ, ZJ), void XJ.boxes.push(eJ);
        this.groups.push({
          rgb: FJ,
          look: UJ,
          cells: [JJ, cJ, ZJ],
          boxes: [eJ]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class UZ {
      constructor(JJ) {
        this.api = JJ, this.shown = []
      }
      show(JJ) {
        const cJ = [];
        for (const ZJ of JJ) {
          const JJ = this.shown.findIndex((JJ => {
            let {
              group: cJ
            } = JJ;
            return XZ(cJ, ZJ.rgb, ZJ.look) && AZ(cJ, ZJ)
          })); - 1 === JJ ? cJ.push(this.build(ZJ)) : (cJ.push(this.shown[JJ]), this.shown.splice(JJ, 1))
        }
        this.dispose(), this.shown = cJ
      }
      dispose() {
        for (const {
            meshes: JJ
          }
          of this.shown)
          for (const cJ of JJ) this.api.disposeGameMesh(cJ);
        this.shown = []
      }
      build(JJ) {
        const {
          rgb: cJ,
          look: ZJ,
          boxes: FJ
        } = JJ, UJ = [cJ[0] + (1 - cJ[0]) * lc, cJ[1] + (1 - cJ[1]) * lc, cJ[2] + (1 - cJ[2]) * lc], eJ = [this.buildMesh(JJ.cells, cJ, ZJ.alpha, ((JJ, cJ, UJ, eJ) => {
          eZ(JJ, cJ, UJ, FJ[eJ], ZJ.size, !1)
        })), this.buildMesh(JJ.cells, UJ, ZJ.alpha, ((JJ, cJ, UJ, eJ) => {
          eZ(JJ, cJ, UJ, FJ[eJ], ZJ.size, !0)
        }))];
        return ZJ.crossed && eJ.push(this.buildMesh(JJ.cells, cJ, .9, ((JJ, cJ, FJ) => {
          (0, ac.k)(JJ, cJ, FJ, ZJ.size + .01, .12)
        }))), {
          group: JJ,
          meshes: eJ
        }
      }
      buildMesh(JJ, cJ, ZJ, FJ) {
        const UJ = [JJ[0], JJ[1], JJ[2]],
          eJ = [],
          XJ = [];
        for (let AJ = 0; AJ < JJ.length; AJ += 3) FJ(eJ, XJ, [JJ[AJ] - UJ[0] + .5, JJ[AJ + 1] - UJ[1] + .5, JJ[AJ + 2] - UJ[2] + .5], AJ / 3);
        return this.api.createGameMesh({
          positions: eJ,
          indices: XJ
        }, {
          rgb: [cJ[0], cJ[1], cJ[2]],
          alpha: ZJ
        }, UJ)
      }
    }

    function eZ(JJ, cJ, ZJ, FJ, UJ, eJ) {
      for (let XJ = 0; XJ < FJ.length; XJ += 6) {
        const AJ = [0, 0, 0],
          qJ = [0, 0, 0];
        for (let JJ = 0; JJ < 3; JJ++) AJ[JJ] = ZJ[JJ] + ((FJ[XJ + JJ] + FJ[XJ + JJ + 3]) / 2 - .5) * UJ, qJ[JJ] = (FJ[XJ + JJ + 3] - FJ[XJ + JJ]) * UJ;
        (0, ac.e)(JJ, cJ, AJ, qJ, eJ)
      }
    }

    function XZ(JJ, cJ, ZJ) {
      return JJ.rgb[0] === cJ[0] && JJ.rgb[1] === cJ[1] && JJ.rgb[2] === cJ[2] && JJ.look === ZJ
    }

    function AZ(JJ, cJ) {
      if (JJ.cells.length !== cJ.cells.length) return !1;
      for (let ZJ = 0; ZJ < JJ.cells.length; ZJ++)
        if (JJ.cells[ZJ] !== cJ.cells[ZJ]) return !1;
      return JJ.boxes.every(((JJ, ZJ) => JJ === cJ.boxes[ZJ]))
    }
    class qZ {
      constructor(JJ, cJ, ZJ) {
        this.api = JJ, this.localPlayerId = cJ, this.pickNext = ZJ, this.turning = null, this.pending = null, this.tap = null, this.heading = [0, 1]
      }
      look(JJ) {
        const [cJ, , ZJ] = JJ.cameraDirection, FJ = Math.hypot(cJ, ZJ);
        FJ > .001 && (this.heading = [cJ / FJ, ZJ / FJ])
      }
      tapped(JJ, cJ, ZJ) {
        const FJ = uc(this.api.getClientOption(this.localPlayerId, "blockReach")),
          {
            origin: UJ,
            direction: eJ
          } = this.api.getActionRay(),
          XJ = [...UJ],
          AJ = [
            [XJ, [XJ[0] + eJ[0] * FJ, XJ[1] + eJ[1] * FJ, XJ[2] + eJ[2] * FJ]]
          ];
        null !== JJ && AJ.push([XJ, Oc(JJ)]), this.tap = {
          lines: AJ,
          next: cJ,
          ms: ZJ
        }
      }
      filled(JJ, cJ) {
        this.tap = null, this.pending = {
          from: JJ,
          ms: cJ
        }, this.retry(cJ)
      }
      arrived(JJ, cJ) {
        const {
          tap: ZJ
        } = this;
        if (null === ZJ || cJ - ZJ.ms > 1500) return null;
        const FJ = Oc(JJ);
        return Nc(ZJ.next, JJ) || ZJ.lines.some((JJ => {
          let [cJ, ZJ] = JJ;
          return function(JJ, cJ, ZJ) {
            const FJ = [ZJ[0] - cJ[0], ZJ[1] - cJ[1], ZJ[2] - cJ[2]],
              UJ = [JJ[0] - cJ[0], JJ[1] - cJ[1], JJ[2] - cJ[2]],
              eJ = FJ[0] ** 2 + FJ[1] ** 2 + FJ[2] ** 2,
              XJ = 0 === eJ ? 0 : Math.min(1, Math.max(0, (UJ[0] * FJ[0] + UJ[1] * FJ[1] + UJ[2] * FJ[2]) / eJ));
            return Math.hypot(UJ[0] - FJ[0] * XJ, UJ[1] - FJ[1] * XJ, UJ[2] - FJ[2] * XJ)
          }(FJ, cJ, ZJ) <= .9
        })) ? (this.tap = null, this.pending = {
          from: JJ,
          ms: cJ
        }, ZJ.ms) : null
      }
      retry(JJ) {
        const {
          pending: cJ
        } = this;
        if (null === cJ) return;
        if (JJ - cJ.ms > 1500) return void(this.pending = null);
        const ZJ = this.pickNext(Oc(cJ.from), (JJ => Nc(JJ, cJ.from)));
        if (null === ZJ) return;
        this.pending = null;
        const {
          turning: FJ
        } = this;
        if (null !== FJ && JJ < FJ.endMs && Nc(FJ.to, ZJ)) return;
        const UJ = this.api.getActionRay().origin,
          eJ = [ZJ[0] + .5 - UJ[0], ZJ[1] + .5 - UJ[1], ZJ[2] + .5 - UJ[2]],
          XJ = Math.hypot(eJ[0], eJ[2]);
        if (XJ < .3) {
          const JJ = Math.max(XJ, .001);
          eJ[0] = this.heading[0] * JJ, eJ[2] = this.heading[1] * JJ
        }
        this.api.turnCamera(eJ, 250), this.turning = {
          to: ZJ,
          endMs: JJ + 250
        }
      }
    }
    class jZ {
      constructor(JJ, cJ, ZJ) {
        this.api = JJ, this.localPlayerId = cJ, this.juice = ZJ, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.nextCells = [], this.lastFilled = null, this.lastSeenFilled = null, this.playerCells = [], this.aimed = null, this.pressMs = null, this.foreseen = new Map, this.turn = void 0, this.nextCell = null, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new oc(JJ), this.meshes = new UZ(JJ), this.outline = new tc(JJ), this.turn = new qZ(JJ, cJ, ((JJ, cJ) => this.pickNext(JJ, cJ)))
      }
      Qn(JJ) {
        const cJ = "active" === JJ[0] ? `${JJ[1]}|${JJ[3]}|${JJ[4]}|${JJ[5]}|${JJ[6]}` : "";
        if ("active" !== JJ[0]) "built" === JJ[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , ZJ, FJ, UJ, eJ] = JJ;
          cJ !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = ZJ) : ZJ === this.layerY ? this.burstUnlisted(FJ) : ZJ > this.layerY && this.finishLayer(ZJ), this.layerY = ZJ, this.layerCells.has(ZJ) || this.layerCells.set(ZJ, FJ.filter(hZ)), this.ghostCells = FJ, this.palette = UJ, this.occupiedCells = eJ
        }
        cJ !== this.blueprint && (this.blueprint = cJ, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((JJ => this.api.blockNameToBlockId(JJ))), this.chunkWatch.watch([...this.ghostCells.filter(hZ), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(JJ) {
        this.burstUnlisted([]), JJ > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = JJ)
      }
      Hh() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const JJ = performance.now();
        let cJ = !1;
        for (const [UJ, eJ] of this.foreseen) {
          var ZJ;
          if (JJ - eJ > 1e3) this.foreseen.delete(UJ), cJ = !0, (null === (ZJ = this.lastFilled) || void 0 === ZJ ? void 0 : ZJ.join()) === UJ && (this.lastFilled = this.lastSeenFilled)
        }
        const FJ = YZ(this.api.getPositionView(this.localPlayerId));
        (cJ || FJ.some(((JJ, cJ) => JJ !== this.playerCells[cJ]))) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(JJ) {
        const cJ = new Set;
        for (let UJ = 0; UJ < JJ.length; UJ += 4) cJ.add(`${JJ[UJ]},${JJ[UJ+1]},${JJ[UJ+2]}`);
        const ZJ = [],
          {
            ghostCells: FJ
          } = this;
        for (let UJ = 0; UJ < FJ.length; UJ += 4) {
          const JJ = `${FJ[UJ]},${FJ[UJ+1]},${FJ[UJ+2]}`;
          !cJ.has(JJ) && this.open.delete(JJ) && ZJ.push(this.filledCell(UJ))
        }
        this.burst(ZJ)
      }
      refresh() {
        const {
          ghostCells: JJ,
          palette: cJ,
          occupiedCells: ZJ
        } = this, FJ = new FZ, UJ = new Set, eJ = [], XJ = [];
        for (let AJ = 0; AJ < JJ.length; AJ += 4) {
          const [ZJ, qJ, jJ, YJ] = [JJ[AJ], JJ[AJ + 1], JJ[AJ + 2], JJ[AJ + 3]], hJ = this.api.getBlockId(ZJ, qJ, jJ), DJ = `${ZJ},${qJ},${jJ}`, sJ = Ic(this.blockIds[YJ], hJ);
          !sJ && Mc(hJ) ? FJ.add(ZJ, qJ, jJ, wc(cJ[YJ]), JZ, zc(cJ[YJ])) : sJ ? this.open.has(DJ) && eJ.push(this.filledCell(AJ)) : FJ.add(ZJ, qJ, jJ, ZZ, cZ), !sJ && this.api.isBlockInLoadedChunk(ZJ, qJ, jJ) && (UJ.add(DJ), XJ.push(ZJ, qJ, jJ, Mc(hJ) ? 0 : 1))
        }
        this.open = UJ, this.nextCells = XJ;
        for (let AJ = 0; AJ < ZJ.length; AJ += 3) {
          const [JJ, cJ, UJ] = [ZJ[AJ], ZJ[AJ + 1], ZJ[AJ + 2]];
          Mc(this.api.getBlockId(JJ, cJ, UJ)) || FJ.add(JJ, cJ, UJ, ZZ, cZ)
        }
        this.meshes.show(FJ.toArray()), this.burst(eJ), this.showNext(), this.turn.retry(performance.now())
      }
      burst(JJ) {
        const cJ = performance.now(),
          ZJ = [];
        for (const [FJ, UJ, eJ] of JJ) {
          const JJ = [FJ, UJ, eJ];
          this.lastSeenFilled = JJ, this.foreseen.delete(JJ.join()) || ZJ.push(JJ)
        }
        for (const FJ of ZJ) {
          this.lastFilled = FJ;
          const JJ = this.turn.arrived(FJ, cJ);
          if (null !== JJ)
            for (const [cJ, ZJ] of this.foreseen) ZJ <= JJ && this.foreseen.delete(cJ)
        }
        this.juice.filled(JJ)
      }
      showNext() {
        var JJ;
        const cJ = this.api.getPositionView(this.localPlayerId);
        this.playerCells.splice(0, 1 / 0, ...YZ(cJ));
        const ZJ = this.lastFilled;
        this.nextCell = this.pickNext(null === ZJ ? [cJ[0], cJ[1] + 1, cJ[2]] : Oc(ZJ), (() => !1)), this.outline.show(null !== (JJ = this.aimed) && void 0 !== JJ ? JJ : this.nextCell)
      }
      pickNext(JJ, cJ) {
        const ZJ = this.api.getPositionView(this.localPlayerId),
          {
            nextCells: FJ
          } = this,
          UJ = function(JJ, cJ, ZJ, FJ, UJ) {
            let eJ = -1,
              XJ = !1,
              AJ = 1 / 0;
            for (let qJ = 0; qJ < JJ.length; qJ += cJ) {
              const cJ = FJ(qJ);
              if (XJ && !cJ || UJ(qJ)) continue;
              const jJ = (JJ[qJ] + .5 - ZJ[0]) ** 2 + (JJ[qJ + 1] + .5 - ZJ[1]) ** 2 + (JJ[qJ + 2] + .5 - ZJ[2]) ** 2;
              (cJ && !XJ || jJ < AJ) && (eJ = qJ, XJ = cJ, AJ = jJ)
            }
            return eJ
          }(FJ, 4, JJ, (JJ => 1 === FJ[JJ + 3]), (JJ => {
            const UJ = [FJ[JJ], FJ[JJ + 1], FJ[JJ + 2]];
            return Cc(UJ, ZJ) || this.foreseen.has(UJ.join()) || cJ(UJ)
          }));
        return -1 === UJ ? null : [FJ[UJ], FJ[UJ + 1], FJ[UJ + 2]]
      }
      afterRender(JJ) {
        var cJ;
        this.turn.look(JJ);
        const ZJ = this.api.getTargetedBlock();
        this.aimed = this.findAimed(null === ZJ ? null : ZJ.position), this.outline.show(null !== (cJ = this.aimed) && void 0 !== cJ ? cJ : this.nextCell)
      }
      attemptAltAction(JJ) {
        const cJ = performance.now(),
          ZJ = this.findAimed(JJ);
        if (null === ZJ && null !== this.nextCell && this.turn.tapped(JJ, this.nextCell, cJ), null !== ZJ || !(null === this.pressMs || cJ - this.pressMs > 500)) return null !== ZJ && (this.foreseen.set(ZJ.join(), cJ), this.lastFilled = ZJ, this.aimed = null, this.showNext(), this.turn.filled(ZJ, cJ)), this.pressMs = cJ, "preventPlacement";
        this.pressMs = null
      }
      findAimed(JJ) {
        return function(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
          const AJ = JJ.WcJ(cJ),
            qJ = null === AJ || null === JJ.blockNameToBlockId(AJ.name, !0) ? null : AJ.name,
            jJ = JJ.getPositionView(cJ),
            {
              origin: YJ,
              direction: hJ
            } = JJ.getActionRay(),
            DJ = ic(FJ, {
              from: YJ,
              dir: hJ,
              reach: uc(JJ.getClientOption(cJ, "blockReach")),
              solid: ZJ
            }, (cJ => {
              const ZJ = [FJ[cJ], FJ[cJ + 1], FJ[cJ + 2]];
              return !Ic(UJ[FJ[cJ + 3]], JJ.getBlockId(...ZJ)) && !XJ.has(ZJ.join()) && JJ.isBlockInLoadedChunk(...ZJ) && !Cc(ZJ, jJ)
            }), (JJ => null === qJ || qJ === bc(UJ[FJ[JJ + 3]])), (JJ => null !== eJ && FJ[JJ] === eJ[0] && FJ[JJ + 1] === eJ[1] && FJ[JJ + 2] === eJ[2]));
          return -1 === DJ ? null : [FJ[DJ], FJ[DJ + 1], FJ[DJ + 2]]
        }(this.api, this.localPlayerId, JJ, this.ghostCells, this.blockIds, this.nextCell, this.foreseen)
      }
      endPress() {
        this.pressMs = null
      }
      filledCell(JJ) {
        const {
          ghostCells: cJ
        } = this, [ZJ, FJ, UJ] = wc(this.palette[cJ[JJ + 3]]);
        return [cJ[JJ], cJ[JJ + 1], cJ[JJ + 2], ZJ, FJ, UJ]
      }
    }

    function YZ(JJ) {
      let [cJ, ZJ, FJ] = JJ;
      const UJ = Tc.c.Av / 2;
      return [Math.floor(cJ), Math.floor(ZJ), Math.floor(FJ), Math.floor(cJ - UJ), Math.floor(cJ + UJ), Math.floor(ZJ + Tc.c.Dv), Math.floor(FJ - UJ), Math.floor(FJ + UJ)]
    }

    function hZ(JJ, cJ) {
      return cJ % 4 !== 3
    }

    function DZ(JJ, cJ, ZJ, FJ, UJ) {
      if (!JJ.isBlockInLoadedChunk(cJ, FJ - 6, ZJ) || !JJ.isBlockInLoadedChunk(cJ, FJ + 6 + UJ, ZJ) || !JJ.canModifyBlockAt(cJ, FJ, ZJ)) return NaN;
      let eJ = FJ - 1;
      if (0 !== JJ.getBlockId(cJ, eJ, ZJ)) {
        for (; eJ < FJ + 6 && 0 !== JJ.getBlockId(cJ, eJ + 1, ZJ);) eJ++;
        return eJ
      }
      for (; eJ > FJ - 6;)
        if (eJ--, 0 !== JJ.getBlockId(cJ, eJ, ZJ)) return eJ;
      return NaN
    }

    function sZ(JJ, cJ, ZJ, FJ, UJ) {
      let eJ = 0;
      for (let XJ = FJ + 1; XJ <= FJ + UJ; XJ++) 0 !== JJ.getBlockId(cJ, XJ, ZJ) && eJ++;
      return eJ
    }

    function nZ(JJ) {
      const cJ = new Map;
      for (const XJ of JJ) {
        var ZJ;
        if (Number.isNaN(XJ)) return null;
        cJ.set(XJ, (null !== (ZJ = cJ.get(XJ)) && void 0 !== ZJ ? ZJ : 0) + 1)
      }
      let FJ = NaN,
        UJ = 0;
      for (const [XJ, AJ] of cJ)(AJ > UJ || AJ === UJ && XJ < FJ) && (FJ = XJ, UJ = AJ);
      let eJ = 0;
      for (const XJ of JJ) eJ += Math.abs(XJ - FJ);
      return eJ
    }

    function GZ(JJ, cJ, ZJ, FJ) {
      const {
        eye: UJ,
        forward: eJ,
        tanHalfFovX: XJ,
        tanHalfFovY: AJ
      } = JJ, [qJ, jJ] = function(JJ) {
        let [cJ, ZJ, FJ] = JJ;
        const UJ = Math.hypot(cJ, FJ),
          [eJ, XJ] = [FJ / UJ, -cJ / UJ];
        return [
          [eJ, 0, XJ],
          [ZJ * XJ, FJ * eJ - cJ * XJ, -ZJ * eJ]
        ]
      }(eJ), [YJ, hJ] = [cJ * XJ, ZJ * AJ], DJ = eJ[0] + YJ * qJ[0] + hJ * jJ[0], sJ = eJ[1] + hJ * jJ[1], nJ = eJ[2] + YJ * qJ[2] + hJ * jJ[2], GJ = (FJ - UJ[1]) / sJ;
      return GJ > 0 && GJ < 1 / 0 ? [UJ[0] + GJ * DJ, UJ[2] + GJ * nJ] : null
    }
    const fZ = "plotsBlueprintPlacementChanged",
      xZ = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class rZ {
      constructor(JJ, cJ) {
        this.api = JJ, this.localPlayerId = cJ, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = JJ => {
          var cJ, ZJ, FJ, eJ;
          const XJ = null !== (cJ = null === (ZJ = this.placing) || void 0 === ZJ ? void 0 : ZJ.rotation) && void 0 !== cJ ? cJ : 0,
            {
              size: AJ
            } = TJ(JJ, XJ),
            qJ = this.api.Om(this.localPlayerId),
            [jJ, YJ] = null !== (FJ = null !== (eJ = function(JJ, cJ, ZJ) {
              const [FJ, UJ, eJ] = cJ, [XJ, AJ, qJ] = [Math.floor(ZJ[0]), Math.floor(ZJ[1]), Math.floor(ZJ[2])], [jJ, YJ] = [10 + Math.ceil(FJ / 2), 10 + Math.ceil(eJ / 2)], [hJ, DJ] = [XJ - jJ, qJ - YJ], [sJ, nJ] = [2 * jJ + 1, 2 * YJ + 1], GJ = new Float64Array(sJ * nJ), fJ = new Uint16Array(sJ * nJ);
              for (let mJ = 0; mJ < sJ; mJ++)
                for (let cJ = 0; cJ < nJ; cJ++) {
                  const ZJ = DZ(JJ, hJ + mJ, DJ + cJ, AJ, UJ);
                  GJ[mJ * nJ + cJ] = ZJ, Number.isNaN(ZJ) || (fJ[mJ * nJ + cJ] = sZ(JJ, hJ + mJ, DJ + cJ, ZJ, UJ))
                }
              const xJ = [];
              let rJ = null,
                vJ = 1 / 0;
              for (let mJ = 0; mJ + FJ <= sJ; mJ++)
                for (let JJ = 0; JJ + eJ <= nJ; JJ++) {
                  const [cJ, UJ] = [hJ + mJ, DJ + JJ], AJ = Math.hypot(cJ + FJ / 2 - ZJ[0], UJ + eJ / 2 - ZJ[2]);
                  if (AJ > 10 || XJ >= cJ - 2 && XJ < cJ + FJ + 2 && qJ >= UJ - 2 && qJ < UJ + eJ + 2) continue;
                  xJ.length = 0;
                  let jJ = 0;
                  for (let ZJ = 0; ZJ < FJ; ZJ++)
                    for (let cJ = 0; cJ < eJ; cJ++) xJ.push(GJ[(mJ + ZJ) * nJ + JJ + cJ]), jJ += fJ[(mJ + ZJ) * nJ + JJ + cJ];
                  const YJ = nZ(xJ);
                  if (null === YJ) continue;
                  const sJ = AJ + 3 * (YJ + jJ);
                  sJ < vJ && (vJ = sJ, rJ = [cJ, UJ])
                }
              return rJ
            }(this.api, AJ, qJ)) && void 0 !== eJ ? eJ : this.cornerOnTarget(AJ)) && void 0 !== FJ ? FJ : [Math.floor(qJ[0]) + 2, Math.floor(qJ[2])];
          this.placing = {
            id: JJ,
            rotation: XJ,
            corner: [jJ, this.playerLevel(), YJ],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null
          }, this.update(), this.api.sendCommand(`${UJ} preview`)
        }, this.rotate = () => {
          const {
            id: JJ,
            rotation: cJ,
            corner: ZJ
          } = this.placing, UJ = FJ[(FJ.indexOf(cJ) + 1) % FJ.length], [eJ, , XJ] = TJ(JJ, cJ).size, [AJ, , qJ] = TJ(JJ, UJ).size;
          this.moveTo(ZJ[0] + Math.floor(eJ / 2) - Math.floor(AJ / 2), ZJ[2] + Math.floor(XJ / 2) - Math.floor(qJ / 2), UJ)
        }, this.hoverAt = (JJ, cJ) => {
          this.placing.hover = [JJ, cJ], this.moveCentreTo(this.camera, JJ, cJ)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (JJ, cJ) => {
          const ZJ = this.placing,
            {
              eye: FJ,
              forward: UJ,
              tanHalfFovX: eJ,
              tanHalfFovY: XJ
            } = this.camera,
            AJ = {
              eye: [FJ[0], FJ[1], FJ[2]],
              forward: [UJ[0], UJ[1], UJ[2]],
              tanHalfFovX: eJ,
              tanHalfFovY: XJ
            },
            qJ = ZJ.corner[1],
            jJ = GZ(AJ, JJ, cJ, qJ);
          ZJ.hover = null, ZJ.drag = jJ && {
            view: AJ,
            ground: jJ,
            corner: [ZJ.corner[0], ZJ.corner[2]],
            level: qJ
          }
        }, this.dragTo = (JJ, cJ) => {
          const ZJ = this.placing.drag,
            FJ = ZJ && GZ(ZJ.view, JJ, cJ, ZJ.level);
          null !== ZJ && null !== FJ && this.moveTo(ZJ.corner[0] + Math.round(FJ[0] - ZJ.ground[0]), ZJ.corner[1] + Math.round(FJ[1] - ZJ.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const JJ = this.view;
          JJ.waiting || (JJ.blocked ? this.Uf({
            ...JJ,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const JJ = this.placing,
            {
              id: cJ,
              rotation: ZJ,
              corner: FJ
            } = JJ;
          this.api.sendCommand(`${UJ} place ${cJ} ${FJ.join(" ")} ${ZJ}`), JJ.sent = {
            atMs: performance.now(),
            corner: [...FJ],
            rotation: ZJ,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${UJ} preview off`))
        }, this.chunkWatch = new oc(JJ), this.meshes = new UZ(JJ)
      }
      getView() {
        return this.view
      }
      Hh() {
        const JJ = this.placing;
        null !== JJ && (null !== JJ.sent && !JJ.sent.timedOut && performance.now() - JJ.sent.atMs > 3e3 ? (JJ.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(JJ) || this.chunkWatch.changed()) && this.update())
      }
      afterRender(JJ) {
        const cJ = this.placing;
        null !== cJ && (! function(JJ, cJ) {
          for (let ZJ = 0; ZJ < 3; ZJ++) cJ.eye[ZJ] = JJ.cameraPosition[ZJ], cJ.forward[ZJ] = JJ.cameraDirection[ZJ];
          cJ.tanHalfFovX = JJ.tanHalfFovX, cJ.tanHalfFovY = JJ.tanHalfFovY
        }(JJ, this.camera), null !== cJ.hover && this.moveCentreTo(this.camera, cJ.hover[0], cJ.hover[1]))
      }
      Qn(JJ) {
        const cJ = this.placing;
        if (null === cJ || null === cJ.sent || "active" !== JJ[0]) return;
        const {
          sent: ZJ
        } = cJ, [, FJ, UJ, eJ, XJ, AJ, qJ] = JJ;
        UJ && FJ === cJ.id && qJ === ZJ.rotation && eJ === ZJ.corner[0] && XJ === ZJ.corner[1] && AJ === ZJ.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(JJ) {
        let [cJ, , ZJ] = JJ;
        const FJ = this.api.getTargetedBlock();
        if (null === FJ) return null;
        const [UJ, , eJ] = FJ.position;
        return [UJ - Math.floor(cJ / 2), eJ - Math.floor(ZJ / 2)]
      }
      playerLevel() {
        var JJ;
        const [cJ, ZJ, FJ] = this.api.Om(this.localPlayerId);
        if (null !== (JJ = this.api.getLocalPlayerMovement()) && void 0 !== JJ && JJ.onGround) return Math.ceil(ZJ - .01);
        const [UJ, eJ, XJ] = [Math.floor(cJ), Math.floor(ZJ), Math.floor(FJ)];
        for (let AJ = eJ; AJ >= eJ - 2; AJ--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(UJ, AJ, XJ))) return AJ + 1;
        return eJ
      }
      followPlayerLevel(JJ) {
        if (vZ(JJ)) return !1;
        const cJ = this.playerLevel();
        return cJ !== JJ.corner[1] && (JJ.corner[1] = cJ, !0)
      }
      moveCentreTo(JJ, cJ, ZJ) {
        const FJ = this.placing,
          UJ = GZ(JJ, cJ, ZJ, FJ.corner[1]);
        if (null !== UJ) {
          const [JJ, , cJ] = TJ(FJ.id, FJ.rotation).size;
          this.moveTo(Math.round(UJ[0] - JJ / 2), Math.round(UJ[1] - cJ / 2))
        }
      }
      moveTo(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const FJ = this.placing;
        if (vZ(FJ)) return;
        const [UJ, eJ, XJ] = FJ.corner;
        if (this.centreOnPlot(UJ, XJ) && !this.centreOnPlot(JJ, cJ, ZJ))
          if (this.centreOnPlot(JJ, XJ, ZJ)) cJ = XJ;
          else {
            if (!this.centreOnPlot(UJ, cJ, ZJ)) return;
            JJ = UJ
          } JJ === UJ && cJ === XJ && ZJ === FJ.rotation || (FJ.rotation = ZJ, FJ.corner = [JJ, eJ, cJ], this.update())
      }
      centreOnPlot(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: FJ,
          corner: UJ
        } = this.placing, [eJ, , XJ] = TJ(FJ, ZJ).size;
        return this.api.canModifyBlockAt(JJ + Math.floor(eJ / 2), UJ[1], cJ + Math.floor(XJ / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.Uf(null)
      }
      update() {
        const {
          id: JJ,
          rotation: cJ,
          corner: ZJ,
          refusals: FJ
        } = this.placing, UJ = new FZ, eJ = [];
        let XJ = !1,
          AJ = 0;
        for (const {
            offset: YJ,
            block: hJ
          }
          of TJ(JJ, cJ).cells) {
          const [JJ, cJ, FJ] = [ZJ[0] + YJ[0], ZJ[1] + YJ[1], ZJ[2] + YJ[2]];
          eJ.push(JJ, cJ, FJ);
          const qJ = !this.api.canModifyBlockAt(JJ, cJ, FJ),
            jJ = this.api.getBlockId(JJ, cJ, FJ),
            DJ = !Mc(jJ) && !Ic(this.api.blockNameToBlockId(hJ), jJ);
          XJ ||= qJ, AJ += DJ ? 1 : 0, qJ || DJ ? UJ.add(JJ, cJ, FJ, ZZ, cZ) : UJ.add(JJ, cJ, FJ, wc(hJ), xZ, zc(hJ))
        }
        this.chunkWatch.watch(eJ), this.meshes.show(UJ.toArray());
        const qJ = this.view,
          jJ = vZ(this.placing);
        (null === qJ || void 0 === qJ ? void 0 : qJ.id) === JJ && qJ.blocked === XJ && qJ.toClear === AJ && qJ.waiting === jJ && qJ.refusals === FJ || this.Uf({
          id: JJ,
          blocked: XJ,
          toClear: AJ,
          waiting: jJ,
          refusals: FJ
        })
      }
      Uf(JJ) {
        this.view = JJ, YJ.i.Uf(fZ, JJ, !0)
      }
    }

    function vZ(JJ) {
      let {
        sent: cJ
      } = JJ;
      return null !== cJ && !cJ.timedOut
    }
    var mZ = ZJ(3726),
      QZ = ZJ(38095);

    function EZ(JJ, cJ, ZJ) {
      const FJ = [255 * JJ, 255 * cJ, 255 * ZJ],
        [UJ, eJ, XJ] = FJ.map((JJ => JJ + .4 * (255 - JJ)));
      return {
        texture: "square_particle",
        qh: 48,
        minLifeTime: .3 / QZ.c,
        maxLifeTime: .55 / QZ.c,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * QZ.c * QZ.c, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...FJ, 1],
          maxColor: [UJ, eJ, XJ, 1]
        }, {
          timeFraction: 1,
          minColor: [...FJ, 0],
          maxColor: [UJ, eJ, XJ, 0]
        }],
        blendMode: mZ.g.Standard
      }
    }
    const VZ = {
      texture: "glint",
      mipmaps: !1,
      qh: 96,
      minLifeTime: .5 / QZ.c,
      maxLifeTime: .9 / QZ.c,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * QZ.c * QZ.c, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: mZ.g.OneOne
    };
    class KZ {
      constructor(JJ, cJ) {
        this.api = JJ, this.localPlayerId = cJ, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(JJ) {
        if (this.api.particlesEnabled())
          for (const [cJ, ZJ, FJ, UJ, eJ, XJ] of JJ.slice(0, 3)) {
            const JJ = `${UJ},${eJ},${XJ}`;
            let AJ = this.chips.get(JJ);
            void 0 === AJ && (AJ = this.api.createParticles(EZ(UJ, eJ, XJ), {
              pos: [cJ + .5, ZJ + .5, FJ + .5]
            }), this.chips.set(JJ, AJ));
            for (let cJ = 0; cJ < 8; cJ++) this.setPoint(cJ, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            AJ.emitPoints([cJ + .5, ZJ + .5, FJ + .5], this.points, 8)
          }
      }
      layerDone(JJ) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const cJ = JJ.length / 3;
        if (0 === cJ || !this.api.particlesEnabled()) return;
        const ZJ = Math.min(cJ, 48),
          [FJ, UJ, eJ] = [JJ[0] + .5, JJ[1] + 1, JJ[2] + .5];
        let XJ = 0;
        for (let AJ = 0; AJ < ZJ; AJ++) {
          const qJ = 3 * Math.floor(AJ * cJ / ZJ);
          for (let cJ = 0; cJ < 2; cJ++) this.setPoint(XJ++, JJ[qJ] + Math.random() - FJ, JJ[qJ + 1] + 1 - UJ, JJ[qJ + 2] + Math.random() - eJ, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(VZ, {
          pos: [FJ, UJ, eJ]
        }), this.sparkles.emitPoints([FJ, UJ, eJ], this.points, XJ)
      }
      dispose() {
        var JJ;
        for (const cJ of this.chips.values()) cJ.stop();
        this.chips.clear(), null === (JJ = this.sparkles) || void 0 === JJ || JJ.stop(), this.sparkles = null
      }
      setPoint(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = 4 * JJ;
        this.points[eJ] = cJ, this.points[eJ + 1] = ZJ, this.points[eJ + 2] = FJ, this.points[eJ + 3] = UJ
      }
    }
    var yZ = ZJ(1756);
    const SZ = "SpecialAction1",
      IZ = "KeyY",
      MZ = "KeyX";

    function bZ(JJ) {
      let {
        placement: cJ
      } = JJ;
      const ZJ = (0, IJ.m)(fZ, cJ.getView()),
        {
          t: FJ
        } = (0, bJ.F)(),
        {
          isTouchScreen: UJ
        } = (0, AJ.j)(["isTouchScreen"]),
        eJ = null !== ZJ,
        XJ = eJ && !ZJ.blocked && !ZJ.waiting;
      if ((0, SJ.b)((JJ => eJ && !JJ.repeat && !(0, jJ.isTypingInInput)() && !(0, qJ.l)() && !UJ), (JJ => {
          const ZJ = function(JJ, cJ, ZJ) {
            if (JJ === MZ) return cJ.stop;
            if (JJ === IZ) return ZJ ? cJ.build : WZ;
            return yZ.z[SZ].includes(JJ) ? cJ.rotate : null
          }(JJ.code, cJ, XJ);
          null !== ZJ && (JJ.stopPropagation(), ZJ())
        })), !eJ) return null;
      let YJ = UJ ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return ZJ.blocked ? YJ = "plotsGame:placementOffPlot" : ZJ.toClear > 0 && (YJ = "plotsGame:placementClear"), (0, uJ.jsx)(Xc.f, {
        placement: "bottom",
        children: (0, uJ.jsxs)("div", {
          className: "PlotsPlacementCard",
          children: [(0, uJ.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: FJ(nJ(ZJ.id).displayName.translationKey)
          }), (0, uJ.jsx)("div", {
            className: EJ()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: ZJ.refusals > 0
            }),
            children: FJ(YJ)
          }, ZJ.refusals), (0, uJ.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, uJ.jsxs)(KJ.d, {
              onClick: cJ.rotate,
              children: [(0, uJ.jsx)(wZ, {
                noaAction: SZ
              }), FJ("plotsGame:placementRotate")]
            }), (0, uJ.jsxs)(KJ.I, {
              onClick: cJ.stop,
              children: [(0, uJ.jsx)(wZ, {
                keyCode: MZ
              }), FJ("general:cancel")]
            }), (0, uJ.jsxs)(KJ.m, {
              disabled: !XJ,
              onClick: cJ.build,
              children: [(0, uJ.jsx)(wZ, {
                keyCode: IZ
              }), FJ("plotsGame:placementBuild")]
            })]
          })]
        })
      })
    }

    function wZ(JJ) {
      return (0, uJ.jsx)(qc.e, {
        className: "PlotsPlacementKey",
        ...JJ
      })
    }

    function WZ() {}
    var gZ = ZJ(3966);
    class HZ {
      constructor(JJ) {
        this.placement = JJ, this.press = null
      }
      down(JJ) {
        if (null !== this.press) return !1;
        const {
          id: cJ,
          mouse: ZJ,
          x: FJ,
          y: UJ,
          atMs: eJ
        } = JJ;
        return this.press = {
          id: cJ,
          mouse: ZJ,
          x: FJ,
          y: UJ,
          atMs: eJ,
          moved: !1
        }, ZJ || this.placement.beginDrag(JJ.ndcX, JJ.ndcY), !0
      }
      move(JJ) {
        const cJ = this.press;
        null !== cJ && cJ.id === JJ.id && (cJ.moved ||= Math.hypot(JJ.x - cJ.x, JJ.y - cJ.y) > 8), JJ.mouse ? this.placement.hoverAt(JJ.ndcX, JJ.ndcY) : (null === cJ || void 0 === cJ ? void 0 : cJ.id) === JJ.id && this.placement.dragTo(JJ.ndcX, JJ.ndcY)
      }
      up(JJ) {
        const cJ = this.press;
        (null === cJ || void 0 === cJ ? void 0 : cJ.id) === JJ.id && (this.move(JJ), this.end(), !cJ.moved && (cJ.mouse || JJ.atMs - cJ.atMs <= 250) && this.placement.tap())
      }
      cancel(JJ) {
        var cJ;
        (null === (cJ = this.press) || void 0 === cJ ? void 0 : cJ.id) === JJ && this.end()
      }
      cn(JJ) {
        let {
          id: cJ,
          mouse: ZJ
        } = JJ;
        ZJ && this.placement.endHover(), this.cancel(cJ)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }

    function PZ(JJ) {
      let {
        placement: cJ
      } = JJ;
      return null === (0, IJ.m)(fZ, cJ.getView()) ? null : (0, uJ.jsx)(kZ, {
        placement: cJ
      })
    }

    function kZ(JJ) {
      let {
        placement: cJ
      } = JJ;
      (0, gZ.c)(!0, !0, "PlotsPlacementLayer");
      const ZJ = (0, eJ.useMemo)((() => new HZ(cJ)), [cJ]);
      return (0, uJ.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: JJ => {
          "mouse" === JJ.pointerType && 0 !== JJ.button || !ZJ.down(pZ(JJ)) || JJ.currentTarget.setPointerCapture(JJ.pointerId)
        },
        onPointerMove: JJ => {
          ZJ.move(pZ(JJ))
        },
        onPointerUp: JJ => {
          ZJ.up(pZ(JJ))
        },
        onPointerCancel: JJ => {
          ZJ.cancel(JJ.pointerId)
        },
        onLostPointerCapture: JJ => {
          ZJ.cancel(JJ.pointerId)
        },
        onPointerLeave: JJ => {
          ZJ.cn(pZ(JJ))
        },
        "aria-hidden": !0
      })
    }

    function pZ(JJ) {
      const {
        left: cJ,
        top: ZJ,
        width: FJ,
        height: UJ
      } = JJ.currentTarget.getBoundingClientRect();
      return {
        id: JJ.pointerId,
        mouse: "mouse" === JJ.pointerType,
        x: JJ.clientX,
        y: JJ.clientY,
        ndcX: (JJ.clientX - cJ) / FJ * 2 - 1,
        ndcY: 1 - (JJ.clientY - ZJ) / UJ * 2,
        atMs: JJ.timeStamp
      }
    }
    var dZ = ZJ(2112),
      zZ = ZJ(35765),
      NZ = ZJ(1743),
      OZ = ZJ(1162);
    const TZ = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function CZ(JJ) {
      let {
        hud: cJ
      } = JJ;
      const ZJ = (0, IJ.m)(Yc, cJ.getPlot()),
        [FJ, UJ] = (0, eJ.useState)(null),
        XJ = (0, zZ.h)(FJ);
      if ("none" === ZJ[0]) return null;
      const [, AJ, qJ, jJ, YJ, hJ] = ZJ;
      return (0, uJ.jsx)("div", {
        className: EJ()("PlotsPlotBannerContainer", {
          Below: XJ
        }),
        children: (0, uJ.jsx)(uZ, {
          plotX: AJ,
          plotZ: qJ,
          ownerName: jJ,
          ownerId: YJ,
          relation: hJ,
          plaqueRef: UJ
        }, `${AJ},${qJ}`)
      })
    }

    function uZ(JJ) {
      var cJ, ZJ;
      let {
        plotX: FJ,
        plotZ: UJ,
        ownerName: eJ,
        ownerId: XJ,
        relation: AJ,
        plaqueRef: qJ
      } = JJ;
      const {
        t: jJ
      } = (0, bJ.F)(), YJ = (0, NZ.f)("hiddenPlayerNames"), hJ = (0, NZ.f)("players"), DJ = null === XJ ? null : null !== (cJ = null === (ZJ = hJ.byId[XJ]) || void 0 === ZJ ? void 0 : ZJ.cosmetics) && void 0 !== cJ ? cJ : null, sJ = jJ("plotsGame:plotBannerCoords", {
        x: FJ,
        z: UJ
      }), nJ = "own" === AJ || null !== eJ;
      return (0, uJ.jsxs)("div", {
        ref: qJ,
        className: EJ()("PlotsPlotBanner", {
          Own: "own" === AJ,
          Shared: "shared" === AJ
        }),
        role: "status",
        children: [(0, uJ.jsxs)("span", {
          className: EJ()("PlotsPlotBannerSeal", {
            Face: null !== DJ
          }),
          children: [null !== DJ && (0, uJ.jsx)(dZ.e, {
            cosmetics: DJ
          }), null === DJ && (0, uJ.jsx)(VJ.c, {
            name: TZ[AJ]
          })]
        }), (0, uJ.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, uJ.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === AJ && jJ("plotsGame:plotBannerYours"), "own" !== AJ && null !== eJ && jJ("plotsGame:plotBannerOwner", {
              name: (0, OZ.g)(eJ, YJ)
            }), !nJ && sJ]
          }), nJ && (0, uJ.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [sJ, "shared" === AJ && (0, uJ.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: jJ("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }

    function iZ(JJ) {
      let {
        progress: cJ,
        goal: ZJ
      } = JJ;
      const FJ = Math.min(cJ, ZJ);
      return (0, uJ.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, uJ.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": ZJ,
          "aria-valuenow": FJ,
          children: (0, uJ.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${FJ/ZJ})`
            }
          })
        }), (0, uJ.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [FJ, "/", ZJ]
        })]
      })
    }

    function RZ(JJ) {
      return {
        translationKey: `plotsGame:${JJ}`,
        actions: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
      }
    }
    const LZ = {
      house: {
        icon: "house",
        titleKey: "plotsGame:starterLotHouseTitle",
        desktop: RZ("starterLotHouseHint", ["alt-fire"]),
        touch: RZ("starterLotHouseHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotHousePlain"
      },
      garden: {
        icon: "sparkle",
        titleKey: "plotsGame:starterLotGarden",
        desktop: RZ("starterLotGardenHint", ["alt-fire"]),
        touch: RZ("starterLotGardenHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotGardenPlain"
      },
      boulder: {
        icon: "hammer",
        titleKey: "plotsGame:starterLotBoulder",
        desktop: RZ("starterLotBreakHint", ["primary-fire"]),
        touch: RZ("starterLotBreakHintTouch"),
        plainKey: "plotsGame:starterLotBreakPlain"
      },
      fly: {
        icon: "angles-up",
        titleKey: "plotsGame:starterLotFly",
        desktop: RZ("starterLotFlyHint", ["jump"]),
        touch: RZ("starterLotFlyHintTouch"),
        plainKey: "plotsGame:starterLotFlyPlain"
      },
      backpack: {
        icon: "backpack",
        titleKey: "plotsGame:starterLotBackpack",
        desktop: RZ("starterLotBackpackHint", ["OpenInventory"]),
        touch: RZ("starterLotBackpackHintTouch"),
        plainKey: "plotsGame:starterLotBackpackPlain"
      },
      neighbour: {
        icon: "person",
        titleKey: "plotsGame:starterLotNeighbour",
        desktop: RZ("starterLotNeighbourHint", ["forward", "left", "backward", "right"]),
        touch: RZ("starterLotNeighbourHintTouch"),
        plainKey: "plotsGame:starterLotNeighbourPlain"
      }
    };

    function aZ(JJ, cJ, ZJ) {
      const {
        translationKey: FJ,
        actions: UJ
      } = ZJ ? cJ.touch : cJ.desktop;
      if (0 === UJ.length) return JJ(FJ);
      const eJ = [];
      for (const XJ of UJ) {
        const FJ = (0, yZ.y)(XJ, ZJ),
          UJ = yZ.z[XJ][0];
        if (null === FJ && void 0 === UJ) return JJ(cJ.plainKey);
        eJ.push(null === FJ ? (0, yZ.r)(UJ) : JJ(FJ.translationKey))
      }
      return JJ(FJ, {
        key: eJ.join("")
      })
    }

    function BZ(JJ) {
      let {
        hud: cJ
      } = JJ;
      const ZJ = (0, IJ.m)(jc, cJ.getStep()),
        {
          t: FJ
        } = (0, bJ.F)();
      return (0, uJ.jsxs)(Xc.f, {
        placement: "bottom",
        children: ["step" === ZJ[0] && (0, uJ.jsx)(tZ, {
          step: ZJ[1],
          progress: ZJ[2],
          goal: ZJ[3]
        }, ZJ[1]), "celebrate" === ZJ[0] && (0, uJ.jsx)(oZ, {
          className: EJ()("Celebrate", {
            Gold: "house" === ZJ[1]
          }),
          icon: "star",
          title: FJ("house" === ZJ[1] ? "plotsGame:starterLotYourPlot" : "plotsGame:starterLotBriefDone")
        }, `celebrate-${ZJ[1]}`)]
      })
    }

    function tZ(JJ) {
      let {
        step: cJ,
        progress: ZJ,
        goal: FJ
      } = JJ;
      const {
        isTouchScreen: UJ
      } = (0, AJ.j)(["isTouchScreen"]), {
        t: eJ
      } = (0, bJ.F)(), XJ = LZ[cJ];
      return (0, uJ.jsxs)(oZ, {
        icon: XJ.icon,
        title: eJ(XJ.titleKey),
        children: [(0, uJ.jsx)("div", {
          className: "PlotsStepCardHint SmallTextLight",
          children: aZ(eJ, XJ, UJ)
        }), FJ > 1 && (0, uJ.jsx)(iZ, {
          progress: ZJ,
          goal: FJ
        }), "backpack" === cJ && UJ && (0, uJ.jsx)(lZ, {})]
      })
    }

    function oZ(JJ) {
      let {
        className: cJ,
        icon: ZJ,
        title: FJ,
        children: UJ
      } = JJ;
      return (0, uJ.jsxs)("div", {
        className: EJ()("PlotsStepCard", cJ),
        role: "status",
        children: [(0, uJ.jsx)("span", {
          className: "PlotsStepCardIcon",
          children: (0, uJ.jsx)(VJ.c, {
            name: ZJ
          })
        }), (0, uJ.jsxs)("div", {
          className: "PlotsStepCardBody",
          children: [(0, uJ.jsx)("div", {
            className: "PlotsStepCardTitle SmallTextBold",
            children: FJ
          }), UJ]
        })]
      })
    }

    function lZ() {
      return (0, eJ.useEffect)((() => (AJ.d.set({
        backpackPointerRequested: !0
      }), () => {
        AJ.d.set({
          backpackPointerRequested: !1
        })
      })), []), null
    }
    const JF = function(JJ, cJ, ZJ, FJ) {
      let {
        localPlayerId: UJ
      } = FJ;
      const AJ = new hc;
      let qJ = null,
        jJ = null,
        YJ = null,
        hJ = null,
        DJ = null;
      const sJ = [];
      return {
        onCreate: JJ => {
          qJ = new KZ(JJ, UJ), jJ = new jZ(JJ, UJ, qJ), YJ = new jZ(JJ, UJ, qJ), hJ = new rZ(JJ, UJ), DJ = new mJ(JJ, hJ), sJ.push((0, XJ.u)((0, eJ.createElement)(eJ.Fragment, null, (0, eJ.createElement)(CZ, {
            hud: AJ
          }), (0, eJ.createElement)(BZ, {
            hud: AJ
          }), (0, eJ.createElement)(sc, {
            hud: AJ,
            journal: DJ
          }), (0, eJ.createElement)(PZ, {
            placement: hJ
          }), (0, eJ.createElement)(bZ, {
            placement: hJ
          })), {
            content: (0, eJ.createElement)(Uc, {
              journal: DJ
            })
          }))
        },
        Hh: () => {
          jJ.Hh(), YJ.Hh(), hJ.Hh(), DJ.Hh()
        },
        onPlayerAttemptAltAction: (JJ, cJ, ZJ, FJ, UJ, eJ) => {
          var XJ;
          if (null !== eJ) return;
          const AJ = void 0 === cJ ? null : [cJ, ZJ, FJ];
          return null !== (XJ = jJ.attemptAltAction(AJ)) && void 0 !== XJ ? XJ : YJ.attemptAltAction(AJ)
        },
        onPlayerClickUp: () => {
          jJ.endPress(), YJ.endPress()
        },
        onAfterRender: (JJ, cJ) => {
          hJ.afterRender(cJ), jJ.afterRender(cJ), YJ.afterRender(cJ)
        },
        onClose: () => {
          for (const JJ of sJ) JJ();
          qJ.dispose(), jJ.dispose(), YJ.dispose(), hJ.dispose(), qJ = null, jJ = null, YJ = null, hJ = null, DJ = null
        },
        onReceivedMessageFromServer: (JJ, cJ) => {
          if ("plotsStarterLot" === JJ) AJ.receiveStep(cJ);
          else if ("plotsPlot" === JJ) AJ.receivePlot(cJ);
          else if ("plotsStarterHouse" === JJ) jJ.Qn(cJ);
          else if ("plotsBlueprint" === JJ) {
            const JJ = cJ;
            YJ.Qn(JJ), hJ.Qn(JJ)
          } else "plotsJournal" === JJ ? DJ.Qn(cJ) : "plotsJournalOpen" === JJ ? DJ.openFromServer() : "plotsPreviewEnd" === JJ && hJ.endFromServer()
        }
      }
    }
  },
  38095: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => FJ,
      g: () => eJ
    });
    const FJ = 1 / .6,
      UJ = {
        kind: "smokePuff"
      };
    class eJ {
      constructor(JJ, cJ, ZJ) {
        this.style = JJ, this.qh = cJ, this.half = ZJ, this.particles = null, this.lastFrame = -1
      }
      emit(JJ, cJ, ZJ) {
        let eJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return ZJ !== this.lastFrame && (this.lastFrame = ZJ, this.particles || (this.particles = JJ.createParticles(function(JJ, cJ) {
          const [
            [ZJ, eJ, XJ],
            [AJ, qJ, jJ]
          ] = JJ.colours;
          return {
            texture: JJ.soft ? UJ : "square_particle",
            qh: cJ,
            minLifeTime: JJ.life[0] / FJ,
            maxLifeTime: JJ.life[1] / FJ,
            minEmitPower: JJ.power[0] * FJ,
            maxEmitPower: JJ.power[1] * FJ,
            minSize: JJ.size[0],
            maxSize: JJ.size[1],
            emitRate: 0,
            gravity: [0, JJ.lift * FJ * FJ, 0],
            dir1: [-JJ.spread, 1, -JJ.spread],
            dir2: [JJ.spread, 1, JJ.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [ZJ, eJ, XJ, JJ.alpha],
              maxColor: [AJ, qJ, jJ, JJ.alpha]
            }, {
              timeFraction: 1,
              minColor: [ZJ, eJ, XJ, 0],
              maxColor: [AJ, qJ, jJ, 0]
            }],
            blendMode: JJ.blendMode
          }
        }(this.style, this.qh), {
          pos: cJ,
          half: this.half
        })), this.particles.moveTo(cJ, this.half), this.particles.emit(eJ), !0)
      }
      dispose() {
        var JJ;
        null === (JJ = this.particles) || void 0 === JJ || JJ.stop(), this.particles = null
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);