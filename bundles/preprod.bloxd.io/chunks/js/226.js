export const id = 226;
export const ids = [226];
export const modules = {
  38075: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      default: () => yh
    });
    const Uy = [0, 90, 180, 270],
      hy = "plotsblueprint";
    var fy = Wy(55),
      Zy = Wy(35379),
      cb = Wy(19),
      Py = Wy(1458),
      oy = Wy(1496),
      By = Wy(23);
    const Ky = [
        ["well", "greenhouse", "farmhouse"],
        ["tent", "cottage", "windmill"],
        ["marketStall", "gazebo", "bakery"],
        ["bridge", "lookoutTower", "lighthouse"]
      ],
      ey = Ky.flat(),
      qb = {
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

    function sy(yb) {
      return qb[yb]
    }
    const Sy = new Map(Ky.flatMap((yb => yb.slice(1).map(((bb, Wy) => [bb, yb[Wy]])))));

    function Ey(yb) {
      var bb;
      return null !== (bb = Sy.get(yb)) && void 0 !== bb ? bb : null
    }
    const ly = {
      well: "plotsGame:journalNoteWell",
      tent: "plotsGame:journalNoteTent",
      lookoutTower: "plotsGame:journalNoteLookoutTower",
      farmhouse: "plotsGame:journalNoteFarmhouse",
      windmill: "plotsGame:journalNoteWindmill"
    };

    function mb(yb, bb) {
      const Wy = new Set(yb),
        Uy = function(yb) {
          const bb = new Set(yb);
          return new Set(ey.filter((yb => {
            const Wy = Ey(yb);
            return null === Wy || bb.has(Wy)
          })))
        }(Wy);
      return ey.map((yb => {
        const hy = yb === bb;
        return Wy.has(yb) ? {
          id: yb,
          active: hy,
          state: "completed",
          unlockedBy: null
        } : Uy.has(yb) ? {
          id: yb,
          active: hy,
          state: "open",
          unlockedBy: null
        } : {
          id: yb,
          active: hy,
          state: "locked",
          unlockedBy: Ey(yb)
        }
      }))
    }
    const Cy = "plotsJournalChanged";
    class Ty {
      constructor(yb, bb) {
        this.api = yb, this.placement = bb, this.pages = null, this.openRequested = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.KU("journal_opened")
        }, this.build = yb => {
          this.KU("placement_started"), this.placement.start(yb), (0, Zy.h)()
        }, this.putAway = () => {
          this.api.sendCommand(`${hy} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      pU(yb) {
        let [, bb, Wy] = yb;
        this.pages = mb(bb, Wy), By.g.EZ(Cy, this.pages, !0)
      }
      openFromServer() {
        this.openRequested = !0, this.Zb()
      }
      Zb() {
        this.openRequested && !cb.d.get("loadingOverlayVisible") && (this.openRequested = !1, null === this.pages || (0, Py.n)() || (0, oy.isTypingInInput)() || null !== this.placement.getView() || (0, Zy.t)())
      }
      KU(yb) {
        this.reported.has(yb) || (this.reported.add(yb), this.api.sendCommand(`${hy} report ${yb}`))
      }
    }
    var Vy = Wy(898),
      Jy = Wy.n(Vy),
      gb = Wy(910),
      Gy = Wy(1273),
      Oy = Wy(3732),
      Ry = Wy(2717),
      vb = Wy(1268),
      ib = Wy(1717),
      My = Wy(1042),
      Yy = Wy(8459);
    const Xy = [0, 90, 180, 270],
      ny = /^(meta\|rot\d)\|([lrud]+)$/,
      uy = "nesw",
      rb = /^meta\|([nesw]*)\|?(Stacked)?$/,
      Hy = function(yb) {
        const bb = new WeakMap;
        return (Wy, Uy) => {
          let hy = bb.get(Wy);
          return void 0 === hy && (hy = yb(Wy, Uy), bb.set(Wy, hy)), hy
        }
      }((yb => new ab(yb)));
    class ab {
      constructor(yb) {
        this.blockMetadata = yb, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const bb = new Set(Object.keys(yb).map((bb => yb[bb].id)));
        bb.add(0), this.maxBlockId = Math.max(...bb)
      }
      static
      for (yb) {
        return Hy(yb)
      }
      getBlockIdMapping(yb, bb) {
        const Wy = this.getBlockIdMappingKey(yb, bb);
        let Uy = this.blockIdMappings.get(Wy);
        return void 0 === Uy && Xy.includes(yb) && (Uy = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, yb, bb), this.blockIdMappings.set(Wy, Uy)), Uy
      }
      turnBlockId(yb, bb, Wy) {
        return this.mapBlockId(this.blockMetadata[yb], bb, this.getRotationMapping(bb, Wy), Wy)
      }
      getBlockIdMappingKey(yb, bb) {
        return `r${yb}|m${Number(bb)}`
      }
      createBlockIdMapping(yb, bb, Wy, Uy) {
        const hy = new Uint16Array(bb + 1),
          fy = this.getRotationMapping(Wy, Uy);
        for (const Zy in yb) {
          const bb = yb[Zy];
          hy[bb.id] = this.mapBlockId(bb, Wy, fy, Uy)
        }
        return hy
      }
      getRotationMapping(yb, bb) {
        const Wy = Math.round(yb / 90),
          Uy = new Uint8Array(4);
        for (let hy = 0; hy < 4; hy++) Uy[hy] = (4 + hy - Wy) % 4;
        if (bb) {
          let yb = Uy[0];
          Uy[0] = Uy[1], Uy[1] = yb, yb = Uy[2], Uy[2] = Uy[3], Uy[3] = yb
        }
        return Uy
      }
      mapBlockId(yb, bb, Wy, Uy) {
        var hy;
        const {
          blockMetadata: fy
        } = this, Zy = Math.round(bb / 90), {
          id: cb,
          meta: Py
        } = yb, {
          rot: oy,
          rootName: By,
          metaStr: Ky
        } = Py;
        let ey;
        const [, qb, sy] = null !== (hy = rb.exec(Ky)) && void 0 !== hy ? hy : [];
        if (void 0 !== qb) {
          var Sy, Ey;
          ey = null !== (Sy = null === (Ey = fy[`${By}|meta|${[uy.split("").filter(((yb,bb)=>qb.split("").some((yb=>{const Wy=uy.indexOf(yb);return((Uy?3-Wy:Wy)+Zy)%4===bb})))).join(""),sy].filter(Boolean).join("|")}`]) || void 0 === Ey ? void 0 : Ey.id) && void 0 !== Sy ? Sy : cb
        } else if (null === oy) ey = cb;
        else {
          var ly, mb;
          const yb = Wy[oy - 1] + 1;
          let bb = Ky.replace(`rot${oy}`, `rot${yb}`);
          Uy && Py.stairsCorner && (bb = bb.replace(/(Left|Right)$/, (yb => "Left" === yb ? "Right" : "Left"))), Uy && "Chest" === By && (bb = bb.replace(/\|(left|right)$/, ((yb, bb) => "left" === bb ? "|right" : "|left")));
          const hy = ny.exec(bb);
          if (Uy && null !== hy) {
            const yb = "lrud".split("").filter((yb => hy[2].includes("l" === yb ? "r" : "r" === yb ? "l" : yb)));
            bb = `${hy[1]}|${yb.join("")}`
          }
          const Zy = `${By}|${bb}`;
          if (ey = null !== (ly = null === (mb = fy[Zy]) || void 0 === mb ? void 0 : mb.id) && void 0 !== ly ? ly : null, null === ey) {
            const yb = fy[By];
            ey = yb.rootMetaDesc === Zy ? yb.id : cb
          }
        }
        return ey
      }
    }

    function Fy(yb, bb, Wy) {
      let {
        xRotationMappedOrigin: Uy,
        shouldSwapXZ: hy
      } = Wy;
      const fy = hy ? bb : yb;
      return null === Uy ? fy : Uy - fy
    }

    function py(yb, bb, Wy) {
      let {
        zRotationMappedOrigin: Uy,
        shouldSwapXZ: hy
      } = Wy;
      const fy = hy ? yb : bb;
      return null === Uy ? fy : Uy - fy
    }
    const Ly = {
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
      Qy = new Map;

    function jb(yb, bb) {
      const Wy = `${yb}|${bb}`;
      let Uy = Qy.get(Wy);
      if (void 0 === Uy) {
        const {
          size: hy,
          palette: fy,
          layers: Zy
        } = Ly[yb], cb = 90 === bb || 270 === bb, [Py, oy] = cb ? [hy[2], hy[0]] : [hy[0], hy[2]], By = function(yb, bb, Wy) {
          let Uy = null,
            hy = null,
            fy = !1;
          switch (yb) {
            case 0:
              break;
            case 90:
              Uy = bb - 1, fy = !0;
              break;
            case 180:
              Uy = bb - 1, hy = Wy - 1;
              break;
            case 270:
              hy = Wy - 1, fy = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${yb}`)
          }
          return {
            xRotationMappedOrigin: Uy,
            zRotationMappedOrigin: hy,
            shouldSwapXZ: fy
          }
        }(bb, Py, oy), Ky = ab.for(Yy.h), ey = fy.map((yb => (0, Yy.g)(Ky.turnBlockId((0, Yy.l)(yb), bb, !1)))), qb = [];
        Zy.forEach(((yb, bb) => {
          yb.split(" ").forEach(((yb, Wy) => {
            for (let Uy = 0; Uy < yb.length; Uy++)
              if ("." !== yb[Uy]) {
                const hy = [Fy(Uy, Wy, By), bb, py(Uy, Wy, By)];
                qb.push({
                  offset: hy,
                  block: ey[yb.charCodeAt(Uy) - "a".charCodeAt(0)]
                })
              }
          }))
        })), Uy = {
          size: [Py, hy[1], oy],
          cells: qb
        }, Qy.set(Wy, Uy)
      }
      return Uy
    }
    const Dy = {
      well: Wy.p + "static/media/well.6059dda29952da474ade.webp",
      tent: Wy.p + "static/media/tent.b33fdaeb9129e7931315.webp",
      marketStall: Wy.p + "static/media/marketStall.6e04c605a5daeb43787d.webp",
      gazebo: Wy.p + "static/media/gazebo.5db92096efe3e790b93c.webp",
      cottage: Wy.p + "static/media/cottage.a2ba06bd20dc5625f673.webp",
      lookoutTower: Wy.p + "static/media/lookoutTower.eeb0336a5e86d88661c4.webp",
      bridge: Wy.p + "static/media/bridge.ee5a7ddef6d74a1c5c2d.webp",
      farmhouse: Wy.p + "static/media/farmhouse.9e4425b8d81e6c8cf5d2.webp",
      bakery: Wy.p + "static/media/bakery.678fc20dd5fba272965f.webp",
      greenhouse: Wy.p + "static/media/greenhouse.b77eb0b4ade590f95053.webp",
      lighthouse: Wy.p + "static/media/lighthouse.b8267661edfd4c5e7c77.webp",
      windmill: Wy.p + "static/media/windmill.e2fd79cf51ec00d299c8.webp"
    };
    var tb = Wy(952);
    const wy = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function kb(yb) {
      let {
        page: bb,
        building: Wy,
        onBuild: Uy,
        onPutAway: hy
      } = yb;
      const {
        t: fy
      } = (0, My.D)(), {
        displayName: Zy,
        tier: cb
      } = sy(bb.id), Py = jb(bb.id, 0).cells.length, oy = ly[bb.id], By = "locked" === bb.state, Ky = Wy ? Gy.f : Gy.i;
      return (0, tb.jsxs)("article", {
        className: Jy()("PlotsJournalPage", {
          Locked: By
        }),
        children: [(0, tb.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: fy(Zy.translationKey)
        }), (0, tb.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [fy(wy[cb]), " \xb7 ", fy("plotsGame:journalBlocks", {
            blocks: String(Py)
          })]
        }), (0, tb.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [ey.map((yb => (0, tb.jsx)("img", {
            className: Jy()({
              Shown: yb === bb.id
            }),
            src: Dy[yb],
            alt: "",
            draggable: !1
          }, yb))), "completed" === bb.state && (0, tb.jsx)("span", {
            className: "PlotsJournalStamp",
            children: fy("plotsGame:journalBuilt")
          }), By && (0, tb.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, tb.jsx)(gb.e, {
              name: "lock"
            })
          })]
        }), void 0 !== oy && "completed" !== bb.state && (0, tb.jsx)("p", {
          className: "PlotsJournalNote",
          children: fy(oy)
        }), (0, tb.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === bb.state && (0, tb.jsx)("p", {
            className: "PlotsJournalHint",
            children: fy("plotsGame:journalLocked", {
              name: fy(sy(bb.unlockedBy).displayName.translationKey)
            })
          }), bb.active && (0, tb.jsxs)(tb.Fragment, {
            children: [(0, tb.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: fy("plotsGame:journalBuilding")
            }), (0, tb.jsx)(Gy.g, {
              onClick: hy,
              children: fy("plotsGame:journalPutAway")
            })]
          }), !By && !bb.active && (0, tb.jsx)(Ky, {
            onClick: () => {
              Uy(bb.id)
            },
            children: fy("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function Ny(yb) {
      let {
        className: bb,
        page: Wy,
        hidden: Uy,
        building: hy,
        journal: fy
      } = yb;
      return (0, tb.jsxs)("div", {
        ref: yb => {
          null !== yb && (yb.inert = Uy)
        },
        className: Jy()("PlotsJournalSide", bb),
        children: [void 0 !== Wy && (0, tb.jsx)(kb, {
          page: Wy,
          building: hy,
          onBuild: fy.build,
          onPutAway: fy.putAway
        }), void 0 === Wy && (0, tb.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var zb = Wy(258),
      Iy = Wy(1541);

    function xb(yb) {
      return Math.cos((0, Iy.j)(yb))
    }

    function Ay(yb) {
      return (0, Iy.A)(Math.acos(zb.c.clamp(yb, -1, 1)))
    }

    function dy(yb, bb, Wy, Uy, hy) {
      const fy = Math.abs(bb - yb),
        Zy = (0, Iy.A)(hy / (Wy * Math.abs(Math.sin((0, Iy.j)(yb))))),
        cb = 450 * Math.min(1, fy / Uy),
        Py = Zy > 0 ? 3 * fy / Zy : 1 / 0;
      return Math.round(Math.max(120, Math.min(cb, Py)))
    }
    class yW {
      constructor() {
        this.samples = []
      }
      add(yb, bb) {
        for (this.samples.push({
            x: yb,
            at: bb
          }); bb - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const yb = this.samples[0],
          bb = this.samples[this.samples.length - 1];
        return bb.at > yb.at ? (bb.x - yb.x) / (bb.at - yb.at) : 0
      }
    }

    function bW(yb, bb) {
      return yb > bb && yb >= 600
    }

    function Wb(yb) {
      return Ay(new DOMMatrixReadOnly(getComputedStyle(yb).transform).m11)
    }

    function Ub(yb, bb) {
      yb.style.transform = `rotateY(${-bb}deg)`, yb.classList.add("Turning")
    }

    function hb(yb) {
      let {
        journal: bb
      } = yb;
      const {
        t: Wy
      } = (0, My.D)(), Uy = (0, vb.m)(Cy, bb.getPages()), hy = (0, ib.d)(bW), [cb, Py] = (0, fy.useState)((() => function(yb) {
        const bb = yb.findIndex((yb => yb.active));
        return -1 !== bb ? bb : Math.max(0, yb.findIndex((yb => "open" === yb.state)))
      }(Uy))), By = (0, fy.useRef)(null), Ky = (0, fy.useRef)(null), ey = (0, fy.useRef)({
        Forward: null,
        Back: null
      }), qb = hy ? 2 : 1, sy = hy ? 180 : 90, Sy = cb - cb % qb, Ey = Sy > 0, ly = Sy + qb < Uy.length, mb = (0, fy.useCallback)((() => {
        const yb = Ky.current;
        return null === yb ? Sy : (Ky.current = null, yb.animation.cancel(), (bb = ey.current[yb.direction]).style.transform = "", bb.classList.remove("Turning"), null === yb.next ? Sy : (Py(yb.next), yb.next));
        var bb
      }), [Sy]), Ty = (0, fy.useCallback)(((yb, bb, Wy, Uy) => {
        const hy = ey.current[yb],
          fy = Wb(hy),
          Zy = bb === ("Forward" === yb) ? sy : 0;
        Ub(hy, Zy);
        const cb = hy.animate([{
          transform: `rotateY(${-fy}deg)`
        }, {
          transform: `rotateY(${-Zy}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : dy(fy, Zy, hy.offsetWidth, sy, Zy > fy ? -Wy : Wy),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        Ky.current = {
          direction: yb,
          animation: cb,
          next: bb ? Uy + ("Forward" === yb ? qb : -qb) : null
        }, cb.onfinish = () => {
          var yb;
          (null === (yb = Ky.current) || void 0 === yb ? void 0 : yb.animation) === cb && mb()
        }
      }), [qb, sy, mb]), Vy = (0, fy.useCallback)((yb => {
        if (null !== By.current) return;
        const bb = mb();
        ("Forward" === yb ? bb + qb < Uy.length : bb > 0) && Ty(yb, !0, 0, bb)
      }), [mb, Ty, qb, Uy.length]);
      (0, fy.useEffect)((() => {
        bb.onOpened()
      }), [bb]), (0, fy.useEffect)((() => () => {
        var yb;
        null === (yb = Ky.current) || void 0 === yb || yb.animation.cancel()
      }), []), (0, fy.useEffect)((() => {
        const yb = yb => {
          var bb;
          yb.pointerId !== (null === (bb = By.current) || void 0 === bb ? void 0 : bb.pointerId) || By.current.following || (By.current = null)
        };
        return window.addEventListener("pointerup", yb), () => {
          window.removeEventListener("pointerup", yb)
        }
      }), []), (0, Ry.c)((yb => ("ArrowLeft" === yb.code || "ArrowRight" === yb.code) && !(0, oy.isTypingInInput)()), (yb => {
        yb.stopPropagation(), Vy("ArrowLeft" === yb.code ? "Back" : "Forward")
      }));
      const gb = (yb, bb, Wy) => {
          const Uy = function(yb, bb, Wy, Uy) {
            return (yb < 0 ? Wy : Uy) ? zb.c.clampAbs(yb, bb) : Math.sign(yb) * bb * (1 - 1 / (.55 * Math.abs(yb) / bb + 1))
          }(yb.base + Wy, qb * yb.width, ly, Ey);
          return "Forward" === bb ? Math.min(Uy, 0) : Math.max(Uy, 0)
        },
        Yy = (yb, bb) => {
          const Wy = By.current;
          if (By.current = null, null === Wy.direction) return;
          Wy.speed.add(yb, bb);
          const Uy = Wy.speed.get(),
            hy = gb(Wy, Wy.direction, yb - Wy.x);
          Ty(Wy.direction, null !== function(yb, bb, Wy, Uy, hy) {
            if (Math.abs(bb) >= .3 ? Math.sign(bb) !== Math.sign(yb) : Math.abs(yb) < .5 * Wy) return null;
            const fy = yb < 0 ? "Forward" : "Back";
            return ("Forward" === fy ? Uy : hy) ? fy : null
          }(hy, Uy, qb * Wy.width, ly, Ey), Uy, Sy)
        },
        Xy = Uy.some((yb => yb.active)),
        ny = (yb, Wy, hy) => (0, tb.jsx)(Ny, {
          className: yb,
          page: Wy >= 0 && Wy < Uy.length ? Uy[Wy] : void 0,
          hidden: hy,
          building: Xy,
          journal: bb
        });
      return (0, tb.jsx)(Oy.c, {
        close: Zy.k,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, tb.jsxs)("section", {
          className: Jy()("PlotsJournal", {
            Spread: hy
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": Wy("plotsGame:journalTitle"),
          children: [(0, tb.jsx)(Gy.h, {
            className: "PlotsJournalClose",
            onClick: Zy.k
          }), (0, tb.jsx)(fb, {
            direction: "Back",
            disabled: !Ey,
            onTurn: Vy
          }), (0, tb.jsx)("div", {
            className: "PlotsJournalBookPages",
            onPointerDown: yb => {
              var bb;
              if (!yb.isPrimary || 0 !== yb.button || null !== Ky.current && null !== yb.target.closest("button")) return;
              const Wy = new yW;
              Wy.add(yb.clientX, yb.timeStamp);
              const Uy = ey.current.Forward.offsetWidth,
                hy = Ky.current;
              Ky.current = null;
              let fy = 0;
              if (null !== hy) {
                const bb = ey.current[hy.direction],
                  Wy = Wb(bb);
                hy.animation.cancel(), Ub(bb, Wy), fy = function(yb, bb, Wy, Uy) {
                  return (yb < 0 ? Wy : Uy) ? yb : Math.sign(yb) * bb * (1 / (1 - Math.min(Math.abs(yb) / bb, .99)) - 1) / .55
                }(function(yb, bb, Wy, Uy) {
                  return Wy * (xb(bb) - xb("Forward" === yb ? 0 : Uy))
                }(hy.direction, Wy, Uy, sy), qb * Uy, ly, Ey), yb.currentTarget.setPointerCapture(yb.pointerId)
              }
              By.current = {
                pointerId: yb.pointerId,
                x: yb.clientX,
                y: yb.clientY,
                base: fy,
                width: Uy,
                following: null !== hy,
                direction: null !== (bb = null === hy || void 0 === hy ? void 0 : hy.direction) && void 0 !== bb ? bb : null,
                speed: Wy
              }
            },
            onPointerMove: yb => {
              const bb = By.current;
              if (null === bb || yb.pointerId !== bb.pointerId) return;
              if (0 === yb.buttons) return void Yy(yb.clientX, yb.timeStamp);
              const Wy = yb.clientX - bb.x;
              !bb.following && function(yb, bb) {
                return Math.abs(yb) > 8 && Math.abs(yb) > Math.abs(bb)
              }(Wy, yb.clientY - bb.y) && (bb.following = !0, bb.direction = Wy < 0 ? "Forward" : "Back", yb.currentTarget.setPointerCapture(yb.pointerId)), null !== bb.direction && (bb.speed.add(yb.clientX, yb.timeStamp), Ub(ey.current[bb.direction], function(yb, bb, Wy, Uy) {
                const hy = Wy * xb("Forward" === yb ? 0 : Uy) + bb;
                return zb.c.clamp(Ay(hy / Wy), 0, Uy)
              }(bb.direction, gb(bb, bb.direction, Wy), bb.width, sy)))
            },
            onPointerUp: yb => {
              var bb;
              yb.pointerId === (null === (bb = By.current) || void 0 === bb ? void 0 : bb.pointerId) && Yy(yb.clientX, yb.timeStamp)
            },
            onPointerCancel: yb => {
              const bb = By.current;
              yb.pointerId === (null === bb || void 0 === bb ? void 0 : bb.pointerId) && (By.current = null, null !== bb.direction && Ty(bb.direction, !1, 0, Sy))
            },
            children: (0, tb.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [hy && ny("Left", Sy - 2, !0), ny("Right", Sy + 2 * qb - 1, !0), (0, tb.jsxs)("div", {
                ref: yb => {
                  ey.current.Back = yb
                },
                className: "PlotsJournalLeaf Back",
                children: [ny("Recto", Sy - 1, !0), hy && ny("Verso", Sy, !1)]
              }), (0, tb.jsxs)("div", {
                ref: yb => {
                  ey.current.Forward = yb
                },
                className: "PlotsJournalLeaf Forward",
                children: [ny("Recto", Sy + qb - 1, !1), hy && ny("Verso", Sy + qb, !0)]
              })]
            })
          }), (0, tb.jsx)(fb, {
            direction: "Forward",
            disabled: !ly,
            onTurn: Vy
          })]
        })
      })
    }

    function fb(yb) {
      let {
        direction: bb,
        disabled: Wy,
        onTurn: Uy
      } = yb;
      const {
        t: hy
      } = (0, My.D)();
      return (0, tb.jsx)("div", {
        className: Jy()("PlotsJournalArrow", bb),
        children: (0, tb.jsx)(Gy.f, {
          disabled: Wy,
          ariaLabel: hy("Forward" === bb ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            Uy(bb)
          },
          children: (0, tb.jsx)(gb.e, {
            name: "angle-up"
          })
        })
      })
    }
    var Zb = Wy(35370),
      cW = Wy(1556),
      Pb = Wy(1614);
    const ob = "plotsStepChanged",
      Bb = "plotsPlotChanged";
    class Kb {
      constructor() {
        this.step = ["none"], this.plot = ["none"]
      }
      getStep() {
        return this.step
      }
      receiveStep(yb) {
        this.step = yb, By.g.EZ(ob, yb, !0)
      }
      getPlot() {
        return this.plot
      }
      receivePlot(yb) {
        this.plot = yb, By.g.EZ(Bb, yb, !0)
      }
    }
    const eb = "KeyJ";

    function qW(yb) {
      let {
        hud: bb,
        journal: Wy
      } = yb;
      const Uy = (0, vb.m)(Cy, Wy.getPages()),
        hy = (0, vb.m)(ob, bb.getStep()),
        {
          isTouchScreen: fy
        } = (0, cb.h)(["isTouchScreen"]),
        {
          t: By
        } = (0, My.D)(),
        Ky = null !== Uy && "none" === hy[0];
      return (0, Ry.c)((yb => null !== Uy && yb.code === eb && !yb.repeat && !(0, oy.isTypingInInput)()), (yb => {
        (0, Py.v)(yb, Ky, Zy.t)
      })), Ky ? (0, tb.jsx)(Zb.f, {
        placement: "topRight",
        children: (0, tb.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, tb.jsxs)("button", {
            type: "button",
            className: Jy()("PlotsJournalButton SmallTextBold", {
              Touch: fy
            }),
            onClick: Zy.t,
            children: [(0, tb.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, tb.jsx)(cW.d, {
                itemName: "Book",
                amount: 0
              })
            }), By("plotsGame:journalButton"), !fy && (0, tb.jsx)(Pb.e, {
              className: "PlotsJournalButtonKey",
              keyCode: eb
            })]
          })
        })
      }) : null
    }
    var sb = Wy(37112),
      Sb = Wy(36877),
      Eb = Wy(35658),
      lb = Wy(8496),
      mW = Wy(8508),
      Cb = Wy(36463);
    const Tb = new Map([
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
      Vb = [...Eb.e.blockRemoveActionRoots, ...Sb.c, ...lb.k, "Board", "Code Block", "Custom Lobby Block"],
      Jb = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let gW = null;

    function Gb() {
      return gW ??= function() {
        const yb = Ob(),
          bb = Math.max(...yb.map((yb => Yy.h[yb].id))) + 1,
          Wy = new Int32Array(bb),
          Uy = new Int32Array(bb),
          hy = new Uint8Array(bb).fill(1),
          fy = new Uint8Array(bb),
          Zy = new Uint8Array(bb),
          cb = new Array(bb).fill("Air"),
          Py = new Map,
          oy = yb => {
            let bb = Py.get(yb);
            return void 0 === bb && (bb = Py.size + 1, Py.set(yb, bb)), bb
          },
          By = new Set(Vb);
        for (const ey of yb) {
          var Ky;
          const {
            id: yb,
            meta: bb,
            altActionable: Py,
            canBePlacedOver: qb
          } = Yy.h[ey];
          Wy[yb] = oy(Rb(ey));
          const sy = bb.stairsCorner;
          if (null === sy) Uy[yb] = Wy[yb];
          else {
            const Wy = sy.endsWith("Right");
            Uy[yb] = oy(`${bb.rootName}|rot${Wy?bb.rot%4+1:bb.rot}|${bb.halfblockPlacement}|${sy.replace("Right","Left")}`)
          }
          hy[yb] = qb ? 1 : 0, fy[yb] = Py || null !== bb.open || ey in Cb.c || By.has(bb.rootName) || void 0 !== (0, Sb.d)(bb.rootName) ? 1 : 0;
          const {
            rootName: Sy
          } = bb;
          Zy[yb] = null !== bb.open || Sb.c.includes(Sy) || Sy.includes("Bookshelf") || Sy.includes("Mailbox") ? 1 : 0, cb[yb] = null !== (Ky = (0, sb.h)(yb)) && void 0 !== Ky ? Ky : Sy
        }
        return {
          kinds: Wy,
          shapes: Uy,
          empty: hy,
          inUse: fy,
          ownAltActionMessage: Zy,
          placingItems: cb
        }
      }(), gW
    }

    function Ob() {
      return Object.keys(Yy.h).filter((yb => Yy.h[yb].name === yb))
    }

    function Rb(yb) {
      var bb;
      const Wy = Yy.h[yb],
        {
          rootName: Uy,
          rot: hy
        } = Wy.meta,
        [, ...fy] = (null !== (bb = Wy.rootMetaDesc) && void 0 !== bb ? bb : yb).split("|"),
        Zy = fy.filter((yb => !("meta" === yb || Jb.test(yb) || (0, mW.v)(Wy) && /^[nesw]+$/.test(yb) || lb.k.includes(Uy) && /^[lrud]+$/.test(yb) || zb.J.includes(Uy) && /^(left|right)$/.test(yb))));
      return [Uy, ...Zy].map((yb => "fenceGate" === Wy.model && yb === `rot${hy}` ? "rot" + ((hy - 1) % 2 + 1) : yb)).join("|")
    }

    function vW(yb, bb) {
      const {
        kinds: Wy,
        shapes: Uy
      } = Gb();
      return Wy[yb] === Wy[bb] || Uy[yb] === Uy[bb]
    }

    function iW(yb) {
      return 1 === Gb().empty[yb]
    }

    function Mb(yb) {
      return Gb().placingItems[yb]
    }

    function Yb(yb) {
      return Tb.get(Yy.h[yb].meta.rootName)
    }
    var Xb = Wy(8492),
      nb = Wy(8504);
    const ub = [0, 0, 0, 1, 1, 1],
      rW = (0, Xb.c)([
        [2, 0, 2, 6, 6, 6]
      ]),
      Hb = (0, Xb.c)([
        [3, 0, 3, 5, 5, 5]
      ]),
      aW = (0, Xb.c)([
        [3, 3, 3, 5, 8, 5]
      ]),
      Fb = [0, 1, 2, 3].map((yb => (0, Xb.c)((0, Xb.k)([
        [3, 2, 0, 5, 7, 3]
      ], yb))));

    function pb(yb) {
      const {
        GZ: bb,
        model: Wy,
        blockModel: Uy,
        meta: hy
      } = Yy.h[yb];
      return void 0 !== bb ? bb : "CentreCross" === Wy ? rW : null !== Uy && void 0 !== Uy && Uy.startsWith("torch") ? hy.halfblockPlacement === nb.d.side ? Fb[hy.rot - 1] : hy.halfblockPlacement === nb.d.top ? aW : Hb : ub
    }

    function Lb(yb, bb) {
      return null === yb || null === bb ? yb === bb : yb[0] === bb[0] && yb[1] === bb[1] && yb[2] === bb[2]
    }

    function Qb(yb) {
      return [yb[0] + .5, yb[1] + .5, yb[2] + .5]
    }
    var jW = Wy(167);

    function Db(yb, bb) {
      const Wy = jW.c.hq / 2;
      return yb[0] < bb[0] + Wy && yb[0] + 1 > bb[0] - Wy && yb[1] < bb[1] + jW.c.oq && yb[1] + 1 > bb[1] && yb[2] < bb[2] + Wy && yb[2] + 1 > bb[2] - Wy
    }

    function tW(yb) {
      return yb + 1
    }

    function wb(yb, bb, Wy, Uy, hy) {
      const fy = Math.hypot(...bb.dir);
      if (!Number.isFinite(fy) || 0 === fy) return -1;
      const {
        from: Zy,
        reach: cb,
        solid: Py
      } = bb, oy = [bb.dir[0] / fy, bb.dir[1] / fy, bb.dir[2] / fy], By = null === Py ? cb : Math.min(cb, function(yb, bb, Wy) {
        const Uy = kW(yb, bb, Wy);
        if (Uy !== 1 / 0) return Uy;
        return (Wy[0] + .5 - yb[0]) * bb[0] + (Wy[1] + .5 - yb[1]) * bb[1] + (Wy[2] + .5 - yb[2]) * bb[2]
      }(Zy, oy, Py) + .75);
      let Ky = -1,
        ey = 1 / 0,
        qb = 1 / 0;
      for (let sy = 0; sy < yb.length; sy += 4) {
        const bb = [yb[sy], yb[sy + 1], yb[sy + 2]],
          fy = hy(sy) ? cb : By;
        let Py = -1,
          Sy = kW(Zy, oy, bb);
        if (Sy > fy) {
          const yb = [bb[0] + .5 - Zy[0], bb[1] + .5 - Zy[1], bb[2] + .5 - Zy[2]];
          if (Sy = yb[0] * oy[0] + yb[1] * oy[1] + yb[2] * oy[2], Sy <= 0 || Sy > fy) continue;
          if (Py = Math.hypot(yb[0] - Sy * oy[0], yb[1] - Sy * oy[1], yb[2] - Sy * oy[2]), Py > .7 || !Uy(sy)) continue
        }(Py < ey || Py === ey && Sy < qb) && Wy(sy) && (Ky = sy, ey = Py, qb = Sy)
      }
      return Ky
    }

    function kW(yb, bb, Wy) {
      let Uy = 0,
        hy = 1 / 0;
      for (let fy = 0; fy < 3; fy++) {
        const Zy = Wy[fy] - yb[fy];
        if (0 === bb[fy]) {
          if (Zy > 0 || Zy + 1 < 0) return 1 / 0;
          continue
        }
        const cb = Zy / bb[fy],
          Py = (Zy + 1) / bb[fy];
        Uy = Math.max(Uy, Math.min(cb, Py)), hy = Math.min(hy, Math.max(cb, Py))
      }
      return Uy <= hy ? Uy : 1 / 0
    }
    var Nb = Wy(36721),
      zW = Wy(37200);
    const Ib = [1, 1, 1];
    class xW {
      constructor(yb) {
        this.api = yb, this.meshes = null, this.shown = null
      }
      show(yb) {
        if (!Lb(yb, this.shown))
          if (this.shown = null === yb ? null : [yb[0], yb[1], yb[2]], null !== this.meshes)
            for (const bb of this.meshes) this.api.setGameMesh(bb, null === yb ? {
              visible: !1
            } : {
              anchor: yb,
              visible: !0
            });
          else if (null !== yb) {
          const bb = [Nb.g, Nb.g, Nb.g, 0, 0, 0];
          this.meshes = [this.build([bb], Nb.j, yb), this.build((0, Nb.d)(), Nb.o, yb)]
        }
      }
      dispose() {
        for (const bb of null !== (yb = this.meshes) && void 0 !== yb ? yb : []) {
          var yb;
          this.api.disposeGameMesh(bb)
        }
        this.meshes = null, this.shown = null
      }
      build(yb, bb, Wy) {
        const Uy = [],
          hy = [];
        for (const [fy, Zy, cb, Py, oy, By] of yb)(0, zW.g)(Uy, hy, [Py + .5, oy + .5, By + .5], [fy, Zy, cb]);
        return this.api.createGameMesh({
          positions: Uy,
          indices: hy
        }, {
          rgb: Ib,
          alpha: bb,
          onTop: !0
        }, Wy)
      }
    }
    class Ab {
      constructor(yb) {
        this.api = yb, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(yb) {
        const bb = jW.c.DU;
        this.chunks = [];
        for (let Wy = 0; Wy < yb.length; Wy += 3) {
          const Uy = Math.floor(yb[Wy] / bb),
            hy = Math.floor(yb[Wy + 1] / bb),
            fy = Math.floor(yb[Wy + 2] / bb);
          this.watches(Uy, hy, fy) || this.chunks.push(Uy, hy, fy)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const yb = performance.now();
        if (yb - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = yb;
        let bb = !1;
        for (let Wy = 0; Wy < this.chunks.length; Wy += 3) {
          const yb = this.api.getChunkVersion(this.chunks[Wy], this.chunks[Wy + 1], this.chunks[Wy + 2]);
          this.versions[Wy / 3] !== yb && (this.versions[Wy / 3] = yb, bb = !0)
        }
        return bb
      }
      watches(yb, bb, Wy) {
        for (let Uy = 0; Uy < this.chunks.length; Uy += 3)
          if (this.chunks[Uy] === yb && this.chunks[Uy + 1] === bb && this.chunks[Uy + 2] === Wy) return !0;
        return !1
      }
    }
    const db = .35,
      yU = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      bU = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      WW = [.95, .2, .15];
    class UW {
      constructor() {
        this.groups = []
      }
      add(yb, bb, Wy, Uy, hy) {
        let fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : ub;
        for (const Zy of this.groups)
          if (ZW(Zy, Uy, hy)) return Zy.cells.push(yb, bb, Wy), void Zy.boxes.push(fy);
        this.groups.push({
          rgb: Uy,
          look: hy,
          cells: [yb, bb, Wy],
          boxes: [fy]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class hW {
      constructor(yb) {
        this.api = yb, this.shown = []
      }
      show(yb) {
        const bb = [];
        for (const Wy of yb) {
          const yb = this.shown.findIndex((yb => {
            let {
              group: bb
            } = yb;
            return ZW(bb, Wy.rgb, Wy.look) && cU(bb, Wy)
          })); - 1 === yb ? bb.push(this.build(Wy)) : (bb.push(this.shown[yb]), this.shown.splice(yb, 1))
        }
        this.dispose(), this.shown = bb
      }
      dispose() {
        for (const {
            meshes: yb
          }
          of this.shown)
          for (const bb of yb) this.api.disposeGameMesh(bb);
        this.shown = []
      }
      build(yb) {
        const {
          rgb: bb,
          look: Wy,
          boxes: Uy
        } = yb, hy = [bb[0] + (1 - bb[0]) * db, bb[1] + (1 - bb[1]) * db, bb[2] + (1 - bb[2]) * db], fy = [this.buildMesh(yb.cells, bb, Wy.alpha, ((yb, bb, hy, fy) => {
          fW(yb, bb, hy, Uy[fy], Wy.size, !1)
        })), this.buildMesh(yb.cells, hy, Wy.alpha, ((yb, bb, hy, fy) => {
          fW(yb, bb, hy, Uy[fy], Wy.size, !0)
        }))];
        return Wy.crossed && fy.push(this.buildMesh(yb.cells, bb, .9, ((yb, bb, Uy) => {
          (0, zW.i)(yb, bb, Uy, Wy.size + .01, .12)
        }))), {
          group: yb,
          meshes: fy
        }
      }
      buildMesh(yb, bb, Wy, Uy) {
        const hy = [yb[0], yb[1], yb[2]],
          fy = [],
          Zy = [];
        for (let cb = 0; cb < yb.length; cb += 3) Uy(fy, Zy, [yb[cb] - hy[0] + .5, yb[cb + 1] - hy[1] + .5, yb[cb + 2] - hy[2] + .5], cb / 3);
        return this.api.createGameMesh({
          positions: fy,
          indices: Zy
        }, {
          rgb: [bb[0], bb[1], bb[2]],
          alpha: Wy
        }, hy)
      }
    }

    function fW(yb, bb, Wy, Uy, hy, fy) {
      for (let Zy = 0; Zy < Uy.length; Zy += 6) {
        const cb = [0, 0, 0],
          Py = [0, 0, 0];
        for (let yb = 0; yb < 3; yb++) cb[yb] = Wy[yb] + ((Uy[Zy + yb] + Uy[Zy + yb + 3]) / 2 - .5) * hy, Py[yb] = (Uy[Zy + yb + 3] - Uy[Zy + yb]) * hy;
        (0, zW.d)(yb, bb, cb, Py, fy)
      }
    }

    function ZW(yb, bb, Wy) {
      return yb.rgb[0] === bb[0] && yb.rgb[1] === bb[1] && yb.rgb[2] === bb[2] && yb.look === Wy
    }

    function cU(yb, bb) {
      if (yb.cells.length !== bb.cells.length) return !1;
      for (let Wy = 0; Wy < yb.cells.length; Wy++)
        if (yb.cells[Wy] !== bb.cells[Wy]) return !1;
      return yb.boxes.every(((yb, Wy) => yb === bb.boxes[Wy]))
    }
    class PW {
      constructor(yb, bb, Wy) {
        this.api = yb, this.localPlayerId = bb, this.pickNext = Wy, this.turning = null, this.pending = null, this.tap = null, this.heading = [0, 1]
      }
      look(yb) {
        const [bb, , Wy] = yb.cameraDirection, Uy = Math.hypot(bb, Wy);
        Uy > .001 && (this.heading = [bb / Uy, Wy / Uy])
      }
      tapped(yb, bb, Wy) {
        const Uy = tW(this.api.getClientOption(this.localPlayerId, "blockReach")),
          {
            origin: hy,
            direction: fy
          } = this.api.getActionRay(),
          Zy = [...hy],
          cb = [
            [Zy, [Zy[0] + fy[0] * Uy, Zy[1] + fy[1] * Uy, Zy[2] + fy[2] * Uy]]
          ];
        null !== yb && cb.push([Zy, Qb(yb)]), this.tap = {
          lines: cb,
          next: bb,
          ms: Wy
        }
      }
      filled(yb, bb) {
        this.tap = null, this.pending = {
          from: yb,
          ms: bb
        }, this.retry(bb)
      }
      arrived(yb, bb) {
        const {
          tap: Wy
        } = this;
        if (null === Wy || bb - Wy.ms > 1500) return null;
        const Uy = Qb(yb);
        return Lb(Wy.next, yb) || Wy.lines.some((yb => {
          let [bb, Wy] = yb;
          return function(yb, bb, Wy) {
            const Uy = [Wy[0] - bb[0], Wy[1] - bb[1], Wy[2] - bb[2]],
              hy = [yb[0] - bb[0], yb[1] - bb[1], yb[2] - bb[2]],
              fy = Uy[0] ** 2 + Uy[1] ** 2 + Uy[2] ** 2,
              Zy = 0 === fy ? 0 : Math.min(1, Math.max(0, (hy[0] * Uy[0] + hy[1] * Uy[1] + hy[2] * Uy[2]) / fy));
            return Math.hypot(hy[0] - Uy[0] * Zy, hy[1] - Uy[1] * Zy, hy[2] - Uy[2] * Zy)
          }(Uy, bb, Wy) <= .9
        })) ? (this.tap = null, this.pending = {
          from: yb,
          ms: bb
        }, Wy.ms) : null
      }
      retry(yb) {
        const {
          pending: bb
        } = this;
        if (null === bb) return;
        if (yb - bb.ms > 1500) return void(this.pending = null);
        const Wy = this.pickNext(Qb(bb.from), (yb => Lb(yb, bb.from)));
        if (null === Wy) return;
        this.pending = null;
        const {
          turning: Uy
        } = this;
        if (null !== Uy && yb < Uy.endMs && Lb(Uy.to, Wy)) return;
        const hy = this.api.getActionRay().origin,
          fy = [Wy[0] + .5 - hy[0], Wy[1] + .5 - hy[1], Wy[2] + .5 - hy[2]],
          Zy = Math.hypot(fy[0], fy[2]);
        if (Zy < .3) {
          const yb = Math.max(Zy, .001);
          fy[0] = this.heading[0] * yb, fy[2] = this.heading[1] * yb
        }
        this.api.turnCamera(fy, 250), this.turning = {
          to: Wy,
          endMs: yb + 250
        }
      }
    }
    class oW {
      constructor(yb, bb, Wy) {
        this.api = yb, this.localPlayerId = bb, this.juice = Wy, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.nextCells = [], this.lastFilled = null, this.lastSeenFilled = null, this.playerCells = [], this.aimed = null, this.pressMs = null, this.foreseen = new Map, this.turn = void 0, this.nextCell = null, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new Ab(yb), this.meshes = new hW(yb), this.outline = new xW(yb), this.turn = new PW(yb, bb, ((yb, bb) => this.pickNext(yb, bb)))
      }
      pU(yb) {
        const bb = "active" === yb[0] ? `${yb[1]}|${yb[3]}|${yb[4]}|${yb[5]}|${yb[6]}` : "";
        if ("active" !== yb[0]) "built" === yb[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , Wy, Uy, hy, fy] = yb;
          bb !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = Wy) : Wy === this.layerY ? this.burstUnlisted(Uy) : Wy > this.layerY && this.finishLayer(Wy), this.layerY = Wy, this.layerCells.has(Wy) || this.layerCells.set(Wy, Uy.filter(KW)), this.ghostCells = Uy, this.palette = hy, this.occupiedCells = fy
        }
        bb !== this.blueprint && (this.blueprint = bb, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((yb => this.api.blockNameToBlockId(yb))), this.chunkWatch.watch([...this.ghostCells.filter(KW), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(yb) {
        this.burstUnlisted([]), yb > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = yb)
      }
      Zb() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const yb = performance.now();
        let bb = !1;
        for (const [hy, fy] of this.foreseen) {
          var Wy;
          if (yb - fy > 1e3) this.foreseen.delete(hy), bb = !0, (null === (Wy = this.lastFilled) || void 0 === Wy ? void 0 : Wy.join()) === hy && (this.lastFilled = this.lastSeenFilled)
        }
        const Uy = BW(this.api.getPositionView(this.localPlayerId));
        (bb || Uy.some(((yb, bb) => yb !== this.playerCells[bb]))) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(yb) {
        const bb = new Set;
        for (let hy = 0; hy < yb.length; hy += 4) bb.add(`${yb[hy]},${yb[hy+1]},${yb[hy+2]}`);
        const Wy = [],
          {
            ghostCells: Uy
          } = this;
        for (let hy = 0; hy < Uy.length; hy += 4) {
          const yb = `${Uy[hy]},${Uy[hy+1]},${Uy[hy+2]}`;
          !bb.has(yb) && this.open.delete(yb) && Wy.push(this.filledCell(hy))
        }
        this.burst(Wy)
      }
      refresh() {
        const {
          ghostCells: yb,
          palette: bb,
          occupiedCells: Wy
        } = this, Uy = new UW, hy = new Set, fy = [], Zy = [];
        for (let cb = 0; cb < yb.length; cb += 4) {
          const [Wy, Py, oy, By] = [yb[cb], yb[cb + 1], yb[cb + 2], yb[cb + 3]], Ky = this.api.getBlockId(Wy, Py, oy), ey = `${Wy},${Py},${oy}`, qb = vW(this.blockIds[By], Ky);
          !qb && iW(Ky) ? Uy.add(Wy, Py, oy, Yb(bb[By]), yU, pb(bb[By])) : qb ? this.open.has(ey) && fy.push(this.filledCell(cb)) : Uy.add(Wy, Py, oy, WW, bU), !qb && this.api.isBlockInLoadedChunk(Wy, Py, oy) && (hy.add(ey), Zy.push(Wy, Py, oy, iW(Ky) ? 0 : 1))
        }
        this.open = hy, this.nextCells = Zy;
        for (let cb = 0; cb < Wy.length; cb += 3) {
          const [yb, bb, hy] = [Wy[cb], Wy[cb + 1], Wy[cb + 2]];
          iW(this.api.getBlockId(yb, bb, hy)) || Uy.add(yb, bb, hy, WW, bU)
        }
        this.meshes.show(Uy.toArray()), this.burst(fy), this.showNext(), this.turn.retry(performance.now())
      }
      burst(yb) {
        const bb = performance.now(),
          Wy = [];
        for (const [Uy, hy, fy] of yb) {
          const yb = [Uy, hy, fy];
          this.lastSeenFilled = yb, this.foreseen.delete(yb.join()) || Wy.push(yb)
        }
        for (const Uy of Wy) {
          this.lastFilled = Uy;
          const yb = this.turn.arrived(Uy, bb);
          if (null !== yb)
            for (const [bb, Wy] of this.foreseen) Wy <= yb && this.foreseen.delete(bb)
        }
        this.juice.filled(yb)
      }
      showNext() {
        var yb;
        const bb = this.api.getPositionView(this.localPlayerId);
        this.playerCells.splice(0, 1 / 0, ...BW(bb));
        const Wy = this.lastFilled;
        this.nextCell = this.pickNext(null === Wy ? [bb[0], bb[1] + 1, bb[2]] : Qb(Wy), (() => !1)), this.outline.show(null !== (yb = this.aimed) && void 0 !== yb ? yb : this.nextCell)
      }
      pickNext(yb, bb) {
        const Wy = this.api.getPositionView(this.localPlayerId),
          {
            nextCells: Uy
          } = this,
          hy = function(yb, bb, Wy, Uy, hy) {
            let fy = -1,
              Zy = !1,
              cb = 1 / 0;
            for (let Py = 0; Py < yb.length; Py += bb) {
              const bb = Uy(Py);
              if (Zy && !bb || hy(Py)) continue;
              const oy = (yb[Py] + .5 - Wy[0]) ** 2 + (yb[Py + 1] + .5 - Wy[1]) ** 2 + (yb[Py + 2] + .5 - Wy[2]) ** 2;
              (bb && !Zy || oy < cb) && (fy = Py, Zy = bb, cb = oy)
            }
            return fy
          }(Uy, 4, yb, (yb => 1 === Uy[yb + 3]), (yb => {
            const hy = [Uy[yb], Uy[yb + 1], Uy[yb + 2]];
            return Db(hy, Wy) || this.foreseen.has(hy.join()) || bb(hy)
          }));
        return -1 === hy ? null : [Uy[hy], Uy[hy + 1], Uy[hy + 2]]
      }
      afterRender(yb) {
        var bb;
        this.turn.look(yb);
        const Wy = this.api.getTargetedBlock();
        this.aimed = this.findAimed(null === Wy ? null : Wy.position), this.outline.show(null !== (bb = this.aimed) && void 0 !== bb ? bb : this.nextCell)
      }
      attemptAltAction(yb) {
        const bb = performance.now(),
          Wy = this.findAimed(yb);
        if (null === Wy && null !== this.nextCell && this.turn.tapped(yb, this.nextCell, bb), null !== Wy || !(null === this.pressMs || bb - this.pressMs > 500)) return null !== Wy && (this.foreseen.set(Wy.join(), bb), this.lastFilled = Wy, this.aimed = null, this.showNext(), this.turn.filled(Wy, bb)), this.pressMs = bb, "preventPlacement";
        this.pressMs = null
      }
      findAimed(yb) {
        return function(yb, bb, Wy, Uy, hy, fy, Zy) {
          const cb = yb.MPy(bb),
            Py = null === cb || null === yb.blockNameToBlockId(cb.name, !0) ? null : cb.name,
            oy = yb.getPositionView(bb),
            {
              origin: By,
              direction: Ky
            } = yb.getActionRay(),
            ey = wb(Uy, {
              from: By,
              dir: Ky,
              reach: tW(yb.getClientOption(bb, "blockReach")),
              solid: Wy
            }, (bb => {
              const Wy = [Uy[bb], Uy[bb + 1], Uy[bb + 2]];
              return !vW(hy[Uy[bb + 3]], yb.getBlockId(...Wy)) && !Zy.has(Wy.join()) && yb.isBlockInLoadedChunk(...Wy) && !Db(Wy, oy)
            }), (yb => null === Py || Py === Mb(hy[Uy[yb + 3]])), (yb => null !== fy && Uy[yb] === fy[0] && Uy[yb + 1] === fy[1] && Uy[yb + 2] === fy[2]));
          return -1 === ey ? null : [Uy[ey], Uy[ey + 1], Uy[ey + 2]]
        }(this.api, this.localPlayerId, yb, this.ghostCells, this.blockIds, this.nextCell, this.foreseen)
      }
      endPress() {
        this.pressMs = null
      }
      filledCell(yb) {
        const {
          ghostCells: bb
        } = this, [Wy, Uy, hy] = Yb(this.palette[bb[yb + 3]]);
        return [bb[yb], bb[yb + 1], bb[yb + 2], Wy, Uy, hy]
      }
    }

    function BW(yb) {
      let [bb, Wy, Uy] = yb;
      const hy = jW.c.hq / 2;
      return [Math.floor(bb), Math.floor(Wy), Math.floor(Uy), Math.floor(bb - hy), Math.floor(bb + hy), Math.floor(Wy + jW.c.oq), Math.floor(Uy - hy), Math.floor(Uy + hy)]
    }

    function KW(yb, bb) {
      return bb % 4 !== 3
    }

    function eW(yb, bb, Wy, Uy, hy) {
      if (!yb.isBlockInLoadedChunk(bb, Uy - 6, Wy) || !yb.isBlockInLoadedChunk(bb, Uy + 6 + hy, Wy) || !yb.canModifyBlockAt(bb, Uy, Wy)) return NaN;
      let fy = Uy - 1;
      if (0 !== yb.getBlockId(bb, fy, Wy)) {
        for (; fy < Uy + 6 && 0 !== yb.getBlockId(bb, fy + 1, Wy);) fy++;
        return fy
      }
      for (; fy > Uy - 6;)
        if (fy--, 0 !== yb.getBlockId(bb, fy, Wy)) return fy;
      return NaN
    }

    function qU(yb, bb, Wy, Uy, hy) {
      let fy = 0;
      for (let Zy = Uy + 1; Zy <= Uy + hy; Zy++) 0 !== yb.getBlockId(bb, Zy, Wy) && fy++;
      return fy
    }

    function sW(yb) {
      const bb = new Map;
      for (const Zy of yb) {
        var Wy;
        if (Number.isNaN(Zy)) return null;
        bb.set(Zy, (null !== (Wy = bb.get(Zy)) && void 0 !== Wy ? Wy : 0) + 1)
      }
      let Uy = NaN,
        hy = 0;
      for (const [Zy, cb] of bb)(cb > hy || cb === hy && Zy < Uy) && (Uy = Zy, hy = cb);
      let fy = 0;
      for (const Zy of yb) fy += Math.abs(Zy - Uy);
      return fy
    }

    function SW(yb, bb, Wy, Uy) {
      const {
        eye: hy,
        forward: fy,
        tanHalfFovX: Zy,
        tanHalfFovY: cb
      } = yb, [Py, oy] = function(yb) {
        let [bb, Wy, Uy] = yb;
        const hy = Math.hypot(bb, Uy),
          [fy, Zy] = [Uy / hy, -bb / hy];
        return [
          [fy, 0, Zy],
          [Wy * Zy, Uy * fy - bb * Zy, -Wy * fy]
        ]
      }(fy), [By, Ky] = [bb * Zy, Wy * cb], ey = fy[0] + By * Py[0] + Ky * oy[0], qb = fy[1] + Ky * oy[1], sy = fy[2] + By * Py[2] + Ky * oy[2], Sy = (Uy - hy[1]) / qb;
      return Sy > 0 && Sy < 1 / 0 ? [hy[0] + Sy * ey, hy[2] + Sy * sy] : null
    }
    const EW = "plotsBlueprintPlacementChanged",
      lW = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class mU {
      constructor(yb, bb) {
        this.api = yb, this.localPlayerId = bb, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = yb => {
          var bb, Wy, Uy, fy;
          const Zy = null !== (bb = null === (Wy = this.placing) || void 0 === Wy ? void 0 : Wy.rotation) && void 0 !== bb ? bb : 0,
            {
              size: cb
            } = jb(yb, Zy),
            Py = this.api.Tl(this.localPlayerId),
            [oy, By] = null !== (Uy = null !== (fy = function(yb, bb, Wy) {
              const [Uy, hy, fy] = bb, [Zy, cb, Py] = [Math.floor(Wy[0]), Math.floor(Wy[1]), Math.floor(Wy[2])], [oy, By] = [10 + Math.ceil(Uy / 2), 10 + Math.ceil(fy / 2)], [Ky, ey] = [Zy - oy, Py - By], [qb, sy] = [2 * oy + 1, 2 * By + 1], Sy = new Float64Array(qb * sy), Ey = new Uint16Array(qb * sy);
              for (let Ty = 0; Ty < qb; Ty++)
                for (let bb = 0; bb < sy; bb++) {
                  const Wy = eW(yb, Ky + Ty, ey + bb, cb, hy);
                  Sy[Ty * sy + bb] = Wy, Number.isNaN(Wy) || (Ey[Ty * sy + bb] = qU(yb, Ky + Ty, ey + bb, Wy, hy))
                }
              const ly = [];
              let mb = null,
                Cy = 1 / 0;
              for (let Ty = 0; Ty + Uy <= qb; Ty++)
                for (let yb = 0; yb + fy <= sy; yb++) {
                  const [bb, hy] = [Ky + Ty, ey + yb], cb = Math.hypot(bb + Uy / 2 - Wy[0], hy + fy / 2 - Wy[2]);
                  if (cb > 10 || Zy >= bb - 2 && Zy < bb + Uy + 2 && Py >= hy - 2 && Py < hy + fy + 2) continue;
                  ly.length = 0;
                  let oy = 0;
                  for (let Wy = 0; Wy < Uy; Wy++)
                    for (let bb = 0; bb < fy; bb++) ly.push(Sy[(Ty + Wy) * sy + yb + bb]), oy += Ey[(Ty + Wy) * sy + yb + bb];
                  const By = sW(ly);
                  if (null === By) continue;
                  const qb = cb + 3 * (By + oy);
                  qb < Cy && (Cy = qb, mb = [bb, hy])
                }
              return mb
            }(this.api, cb, Py)) && void 0 !== fy ? fy : this.cornerOnTarget(cb)) && void 0 !== Uy ? Uy : [Math.floor(Py[0]) + 2, Math.floor(Py[2])];
          this.placing = {
            id: yb,
            rotation: Zy,
            corner: [oy, this.playerLevel(), By],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null
          }, this.update(), this.api.sendCommand(`${hy} preview`)
        }, this.rotate = () => {
          const {
            id: yb,
            rotation: bb,
            corner: Wy
          } = this.placing, hy = Uy[(Uy.indexOf(bb) + 1) % Uy.length], [fy, , Zy] = jb(yb, bb).size, [cb, , Py] = jb(yb, hy).size;
          this.moveTo(Wy[0] + Math.floor(fy / 2) - Math.floor(cb / 2), Wy[2] + Math.floor(Zy / 2) - Math.floor(Py / 2), hy)
        }, this.hoverAt = (yb, bb) => {
          this.placing.hover = [yb, bb], this.moveCentreTo(this.camera, yb, bb)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (yb, bb) => {
          const Wy = this.placing,
            {
              eye: Uy,
              forward: hy,
              tanHalfFovX: fy,
              tanHalfFovY: Zy
            } = this.camera,
            cb = {
              eye: [Uy[0], Uy[1], Uy[2]],
              forward: [hy[0], hy[1], hy[2]],
              tanHalfFovX: fy,
              tanHalfFovY: Zy
            },
            Py = Wy.corner[1],
            oy = SW(cb, yb, bb, Py);
          Wy.hover = null, Wy.drag = oy && {
            view: cb,
            ground: oy,
            corner: [Wy.corner[0], Wy.corner[2]],
            level: Py
          }
        }, this.dragTo = (yb, bb) => {
          const Wy = this.placing.drag,
            Uy = Wy && SW(Wy.view, yb, bb, Wy.level);
          null !== Wy && null !== Uy && this.moveTo(Wy.corner[0] + Math.round(Uy[0] - Wy.ground[0]), Wy.corner[1] + Math.round(Uy[1] - Wy.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const yb = this.view;
          yb.waiting || (yb.blocked ? this.EZ({
            ...yb,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const yb = this.placing,
            {
              id: bb,
              rotation: Wy,
              corner: Uy
            } = yb;
          this.api.sendCommand(`${hy} place ${bb} ${Uy.join(" ")} ${Wy}`), yb.sent = {
            atMs: performance.now(),
            corner: [...Uy],
            rotation: Wy,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${hy} preview off`))
        }, this.chunkWatch = new Ab(yb), this.meshes = new hW(yb)
      }
      getView() {
        return this.view
      }
      Zb() {
        const yb = this.placing;
        null !== yb && (null !== yb.sent && !yb.sent.timedOut && performance.now() - yb.sent.atMs > 3e3 ? (yb.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(yb) || this.chunkWatch.changed()) && this.update())
      }
      afterRender(yb) {
        const bb = this.placing;
        null !== bb && (! function(yb, bb) {
          for (let Wy = 0; Wy < 3; Wy++) bb.eye[Wy] = yb.cameraPosition[Wy], bb.forward[Wy] = yb.cameraDirection[Wy];
          bb.tanHalfFovX = yb.tanHalfFovX, bb.tanHalfFovY = yb.tanHalfFovY
        }(yb, this.camera), null !== bb.hover && this.moveCentreTo(this.camera, bb.hover[0], bb.hover[1]))
      }
      pU(yb) {
        const bb = this.placing;
        if (null === bb || null === bb.sent || "active" !== yb[0]) return;
        const {
          sent: Wy
        } = bb, [, Uy, hy, fy, Zy, cb, Py] = yb;
        hy && Uy === bb.id && Py === Wy.rotation && fy === Wy.corner[0] && Zy === Wy.corner[1] && cb === Wy.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(yb) {
        let [bb, , Wy] = yb;
        const Uy = this.api.getTargetedBlock();
        if (null === Uy) return null;
        const [hy, , fy] = Uy.position;
        return [hy - Math.floor(bb / 2), fy - Math.floor(Wy / 2)]
      }
      playerLevel() {
        var yb;
        const [bb, Wy, Uy] = this.api.Tl(this.localPlayerId);
        if (null !== (yb = this.api.getLocalPlayerMovement()) && void 0 !== yb && yb.onGround) return Math.ceil(Wy - .01);
        const [hy, fy, Zy] = [Math.floor(bb), Math.floor(Wy), Math.floor(Uy)];
        for (let cb = fy; cb >= fy - 2; cb--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(hy, cb, Zy))) return cb + 1;
        return fy
      }
      followPlayerLevel(yb) {
        if (CW(yb)) return !1;
        const bb = this.playerLevel();
        return bb !== yb.corner[1] && (yb.corner[1] = bb, !0)
      }
      moveCentreTo(yb, bb, Wy) {
        const Uy = this.placing,
          hy = SW(yb, bb, Wy, Uy.corner[1]);
        if (null !== hy) {
          const [yb, , bb] = jb(Uy.id, Uy.rotation).size;
          this.moveTo(Math.round(hy[0] - yb / 2), Math.round(hy[1] - bb / 2))
        }
      }
      moveTo(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const Uy = this.placing;
        if (CW(Uy)) return;
        const [hy, fy, Zy] = Uy.corner;
        if (this.centreOnPlot(hy, Zy) && !this.centreOnPlot(yb, bb, Wy))
          if (this.centreOnPlot(yb, Zy, Wy)) bb = Zy;
          else {
            if (!this.centreOnPlot(hy, bb, Wy)) return;
            yb = hy
          } yb === hy && bb === Zy && Wy === Uy.rotation || (Uy.rotation = Wy, Uy.corner = [yb, fy, bb], this.update())
      }
      centreOnPlot(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: Uy,
          corner: hy
        } = this.placing, [fy, , Zy] = jb(Uy, Wy).size;
        return this.api.canModifyBlockAt(yb + Math.floor(fy / 2), hy[1], bb + Math.floor(Zy / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.EZ(null)
      }
      update() {
        const {
          id: yb,
          rotation: bb,
          corner: Wy,
          refusals: Uy
        } = this.placing, hy = new UW, fy = [];
        let Zy = !1,
          cb = 0;
        for (const {
            offset: By,
            block: Ky
          }
          of jb(yb, bb).cells) {
          const [yb, bb, Uy] = [Wy[0] + By[0], Wy[1] + By[1], Wy[2] + By[2]];
          fy.push(yb, bb, Uy);
          const Py = !this.api.canModifyBlockAt(yb, bb, Uy),
            oy = this.api.getBlockId(yb, bb, Uy),
            ey = !iW(oy) && !vW(this.api.blockNameToBlockId(Ky), oy);
          Zy ||= Py, cb += ey ? 1 : 0, Py || ey ? hy.add(yb, bb, Uy, WW, bU) : hy.add(yb, bb, Uy, Yb(Ky), lW, pb(Ky))
        }
        this.chunkWatch.watch(fy), this.meshes.show(hy.toArray());
        const Py = this.view,
          oy = CW(this.placing);
        (null === Py || void 0 === Py ? void 0 : Py.id) === yb && Py.blocked === Zy && Py.toClear === cb && Py.waiting === oy && Py.refusals === Uy || this.EZ({
          id: yb,
          blocked: Zy,
          toClear: cb,
          waiting: oy,
          refusals: Uy
        })
      }
      EZ(yb) {
        this.view = yb, By.g.EZ(EW, yb, !0)
      }
    }

    function CW(yb) {
      let {
        sent: bb
      } = yb;
      return null !== bb && !bb.timedOut
    }
    var TW = Wy(3525),
      VW = Wy(37801);

    function JW(yb, bb, Wy) {
      const Uy = [255 * yb, 255 * bb, 255 * Wy],
        [hy, fy, Zy] = Uy.map((yb => yb + .4 * (255 - yb)));
      return {
        texture: "square_particle",
        Hy: 48,
        minLifeTime: .3 / VW.c,
        maxLifeTime: .55 / VW.c,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * VW.c * VW.c, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...Uy, 1],
          maxColor: [hy, fy, Zy, 1]
        }, {
          timeFraction: 1,
          minColor: [...Uy, 0],
          maxColor: [hy, fy, Zy, 0]
        }],
        blendMode: TW.e.Standard
      }
    }
    const gU = {
      texture: "glint",
      mipmaps: !1,
      Hy: 96,
      minLifeTime: .5 / VW.c,
      maxLifeTime: .9 / VW.c,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * VW.c * VW.c, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: TW.e.OneOne
    };
    class GW {
      constructor(yb, bb) {
        this.api = yb, this.localPlayerId = bb, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(yb) {
        if (this.api.particlesEnabled())
          for (const [bb, Wy, Uy, hy, fy, Zy] of yb.slice(0, 3)) {
            const yb = `${hy},${fy},${Zy}`;
            let cb = this.chips.get(yb);
            void 0 === cb && (cb = this.api.createParticles(JW(hy, fy, Zy), {
              pos: [bb + .5, Wy + .5, Uy + .5]
            }), this.chips.set(yb, cb));
            for (let bb = 0; bb < 8; bb++) this.setPoint(bb, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            cb.emitPoints([bb + .5, Wy + .5, Uy + .5], this.points, 8)
          }
      }
      layerDone(yb) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const bb = yb.length / 3;
        if (0 === bb || !this.api.particlesEnabled()) return;
        const Wy = Math.min(bb, 48),
          [Uy, hy, fy] = [yb[0] + .5, yb[1] + 1, yb[2] + .5];
        let Zy = 0;
        for (let cb = 0; cb < Wy; cb++) {
          const Py = 3 * Math.floor(cb * bb / Wy);
          for (let bb = 0; bb < 2; bb++) this.setPoint(Zy++, yb[Py] + Math.random() - Uy, yb[Py + 1] + 1 - hy, yb[Py + 2] + Math.random() - fy, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(gU, {
          pos: [Uy, hy, fy]
        }), this.sparkles.emitPoints([Uy, hy, fy], this.points, Zy)
      }
      dispose() {
        var yb;
        for (const bb of this.chips.values()) bb.stop();
        this.chips.clear(), null === (yb = this.sparkles) || void 0 === yb || yb.stop(), this.sparkles = null
      }
      setPoint(yb, bb, Wy, Uy, hy) {
        const fy = 4 * yb;
        this.points[fy] = bb, this.points[fy + 1] = Wy, this.points[fy + 2] = Uy, this.points[fy + 3] = hy
      }
    }
    var OW = Wy(1620);
    const RW = "SpecialAction1",
      vU = "KeyY",
      iU = "KeyX";

    function MW(yb) {
      let {
        placement: bb
      } = yb;
      const Wy = (0, vb.m)(EW, bb.getView()),
        {
          t: Uy
        } = (0, My.D)(),
        {
          isTouchScreen: hy
        } = (0, cb.h)(["isTouchScreen"]),
        fy = null !== Wy,
        Zy = fy && !Wy.blocked && !Wy.waiting;
      if ((0, Ry.c)((yb => fy && !yb.repeat && !(0, oy.isTypingInInput)() && !(0, Py.n)() && !hy), (yb => {
          const Wy = function(yb, bb, Wy) {
            if (yb === iU) return bb.stop;
            if (yb === vU) return Wy ? bb.build : XW;
            return OW.w[RW].includes(yb) ? bb.rotate : null
          }(yb.code, bb, Zy);
          null !== Wy && (yb.stopPropagation(), Wy())
        })), !fy) return null;
      let By = hy ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return Wy.blocked ? By = "plotsGame:placementOffPlot" : Wy.toClear > 0 && (By = "plotsGame:placementClear"), (0, tb.jsx)(Zb.f, {
        placement: "bottom",
        children: (0, tb.jsxs)("div", {
          className: "PlotsPlacementCard",
          children: [(0, tb.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: Uy(sy(Wy.id).displayName.translationKey)
          }), (0, tb.jsx)("div", {
            className: Jy()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: Wy.refusals > 0
            }),
            children: Uy(By)
          }, Wy.refusals), (0, tb.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, tb.jsxs)(Gy.f, {
              onClick: bb.rotate,
              children: [(0, tb.jsx)(YW, {
                noaAction: RW
              }), Uy("plotsGame:placementRotate")]
            }), (0, tb.jsxs)(Gy.C, {
              onClick: bb.stop,
              children: [(0, tb.jsx)(YW, {
                keyCode: iU
              }), Uy("general:cancel")]
            }), (0, tb.jsxs)(Gy.i, {
              disabled: !Zy,
              onClick: bb.build,
              children: [(0, tb.jsx)(YW, {
                keyCode: vU
              }), Uy("plotsGame:placementBuild")]
            })]
          })]
        })
      })
    }

    function YW(yb) {
      return (0, tb.jsx)(Pb.e, {
        className: "PlotsPlacementKey",
        ...yb
      })
    }

    function XW() {}
    var nW = Wy(3742);
    class uW {
      constructor(yb) {
        this.placement = yb, this.press = null
      }
      down(yb) {
        if (null !== this.press) return !1;
        const {
          id: bb,
          mouse: Wy,
          x: Uy,
          y: hy,
          atMs: fy
        } = yb;
        return this.press = {
          id: bb,
          mouse: Wy,
          x: Uy,
          y: hy,
          atMs: fy,
          moved: !1
        }, Wy || this.placement.beginDrag(yb.ndcX, yb.ndcY), !0
      }
      move(yb) {
        const bb = this.press;
        null !== bb && bb.id === yb.id && (bb.moved ||= Math.hypot(yb.x - bb.x, yb.y - bb.y) > 8), yb.mouse ? this.placement.hoverAt(yb.ndcX, yb.ndcY) : (null === bb || void 0 === bb ? void 0 : bb.id) === yb.id && this.placement.dragTo(yb.ndcX, yb.ndcY)
      }
      up(yb) {
        const bb = this.press;
        (null === bb || void 0 === bb ? void 0 : bb.id) === yb.id && (this.move(yb), this.end(), !bb.moved && (bb.mouse || yb.atMs - bb.atMs <= 250) && this.placement.tap())
      }
      cancel(yb) {
        var bb;
        (null === (bb = this.press) || void 0 === bb ? void 0 : bb.id) === yb && this.end()
      }
      qh(yb) {
        let {
          id: bb,
          mouse: Wy
        } = yb;
        Wy && this.placement.endHover(), this.cancel(bb)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }

    function rU(yb) {
      let {
        placement: bb
      } = yb;
      return null === (0, vb.m)(EW, bb.getView()) ? null : (0, tb.jsx)(HW, {
        placement: bb
      })
    }

    function HW(yb) {
      let {
        placement: bb
      } = yb;
      (0, nW.b)(!0, !0, "PlotsPlacementLayer");
      const Wy = (0, fy.useMemo)((() => new uW(bb)), [bb]);
      return (0, tb.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: yb => {
          "mouse" === yb.pointerType && 0 !== yb.button || !Wy.down(aU(yb)) || yb.currentTarget.setPointerCapture(yb.pointerId)
        },
        onPointerMove: yb => {
          Wy.move(aU(yb))
        },
        onPointerUp: yb => {
          Wy.up(aU(yb))
        },
        onPointerCancel: yb => {
          Wy.cancel(yb.pointerId)
        },
        onLostPointerCapture: yb => {
          Wy.cancel(yb.pointerId)
        },
        onPointerLeave: yb => {
          Wy.qh(aU(yb))
        },
        "aria-hidden": !0
      })
    }

    function aU(yb) {
      const {
        left: bb,
        top: Wy,
        width: Uy,
        height: hy
      } = yb.currentTarget.getBoundingClientRect();
      return {
        id: yb.pointerId,
        mouse: "mouse" === yb.pointerType,
        x: yb.clientX,
        y: yb.clientY,
        ndcX: (yb.clientX - bb) / Uy * 2 - 1,
        ndcY: 1 - (yb.clientY - Wy) / hy * 2,
        atMs: yb.timeStamp
      }
    }
    var FW = Wy(1951),
      pW = Wy(35490),
      LW = Wy(1612),
      QW = Wy(1122);
    const jU = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function DW(yb) {
      let {
        hud: bb
      } = yb;
      const Wy = (0, vb.m)(Bb, bb.getPlot()),
        [Uy, hy] = (0, fy.useState)(null),
        Zy = (0, pW.m)(Uy);
      if ("none" === Wy[0]) return null;
      const [, cb, Py, oy, By, Ky] = Wy;
      return (0, tb.jsx)("div", {
        className: Jy()("PlotsPlotBannerContainer", {
          Below: Zy
        }),
        children: (0, tb.jsx)(tU, {
          plotX: cb,
          plotZ: Py,
          ownerName: oy,
          ownerId: By,
          relation: Ky,
          plaqueRef: hy
        }, `${cb},${Py}`)
      })
    }

    function tU(yb) {
      var bb, Wy;
      let {
        plotX: Uy,
        plotZ: hy,
        ownerName: fy,
        ownerId: Zy,
        relation: cb,
        plaqueRef: Py
      } = yb;
      const {
        t: oy
      } = (0, My.D)(), By = (0, LW.j)("hiddenPlayerNames"), Ky = (0, LW.j)("players"), ey = null === Zy ? null : null !== (bb = null === (Wy = Ky.byId[Zy]) || void 0 === Wy ? void 0 : Wy.cosmetics) && void 0 !== bb ? bb : null, qb = oy("plotsGame:plotBannerCoords", {
        x: Uy,
        z: hy
      }), sy = "own" === cb || null !== fy;
      return (0, tb.jsxs)("div", {
        ref: Py,
        className: Jy()("PlotsPlotBanner", {
          Own: "own" === cb,
          Shared: "shared" === cb
        }),
        role: "status",
        children: [(0, tb.jsxs)("span", {
          className: Jy()("PlotsPlotBannerSeal", {
            Face: null !== ey
          }),
          children: [null !== ey && (0, tb.jsx)(FW.b, {
            cosmetics: ey
          }), null === ey && (0, tb.jsx)(gb.e, {
            name: jU[cb]
          })]
        }), (0, tb.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, tb.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === cb && oy("plotsGame:plotBannerYours"), "own" !== cb && null !== fy && oy("plotsGame:plotBannerOwner", {
              name: (0, QW.g)(fy, By)
            }), !sy && qb]
          }), sy && (0, tb.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [qb, "shared" === cb && (0, tb.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: oy("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }

    function wW(yb) {
      let {
        progress: bb,
        goal: Wy
      } = yb;
      const Uy = Math.min(bb, Wy);
      return (0, tb.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, tb.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": Wy,
          "aria-valuenow": Uy,
          children: (0, tb.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${Uy/Wy})`
            }
          })
        }), (0, tb.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [Uy, "/", Wy]
        })]
      })
    }

    function kU(yb) {
      return {
        translationKey: `plotsGame:${yb}`,
        actions: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
      }
    }
    const NW = {
      house: {
        icon: "house",
        titleKey: "plotsGame:starterLotHouseTitle",
        desktop: kU("starterLotHouseHint", ["alt-fire"]),
        touch: kU("starterLotHouseHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotHousePlain"
      },
      garden: {
        icon: "sparkle",
        titleKey: "plotsGame:starterLotGarden",
        desktop: kU("starterLotGardenHint", ["alt-fire"]),
        touch: kU("starterLotGardenHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotGardenPlain"
      },
      boulder: {
        icon: "hammer",
        titleKey: "plotsGame:starterLotBoulder",
        desktop: kU("starterLotBreakHint", ["primary-fire"]),
        touch: kU("starterLotBreakHintTouch"),
        plainKey: "plotsGame:starterLotBreakPlain"
      },
      fly: {
        icon: "angles-up",
        titleKey: "plotsGame:starterLotFly",
        desktop: kU("starterLotFlyHint", ["jump"]),
        touch: kU("starterLotFlyHintTouch"),
        plainKey: "plotsGame:starterLotFlyPlain"
      },
      backpack: {
        icon: "backpack",
        titleKey: "plotsGame:starterLotBackpack",
        desktop: kU("starterLotBackpackHint", ["OpenInventory"]),
        touch: kU("starterLotBackpackHintTouch"),
        plainKey: "plotsGame:starterLotBackpackPlain"
      },
      neighbour: {
        icon: "person",
        titleKey: "plotsGame:starterLotNeighbour",
        desktop: kU("starterLotNeighbourHint", ["forward", "left", "backward", "right"]),
        touch: kU("starterLotNeighbourHintTouch"),
        plainKey: "plotsGame:starterLotNeighbourPlain"
      }
    };

    function zU(yb, bb, Wy) {
      const {
        translationKey: Uy,
        actions: hy
      } = Wy ? bb.touch : bb.desktop;
      if (0 === hy.length) return yb(Uy);
      const fy = [];
      for (const Zy of hy) {
        const Uy = (0, OW.u)(Zy, Wy),
          hy = OW.w[Zy][0];
        if (null === Uy && void 0 === hy) return yb(bb.plainKey);
        fy.push(null === Uy ? (0, OW.o)(hy) : yb(Uy.translationKey))
      }
      return yb(Uy, {
        key: fy.join("")
      })
    }

    function IW(yb) {
      let {
        hud: bb
      } = yb;
      const Wy = (0, vb.m)(ob, bb.getStep()),
        {
          t: Uy
        } = (0, My.D)();
      return (0, tb.jsxs)(Zb.f, {
        placement: "bottom",
        children: ["step" === Wy[0] && (0, tb.jsx)(xU, {
          step: Wy[1],
          progress: Wy[2],
          goal: Wy[3]
        }, Wy[1]), "celebrate" === Wy[0] && (0, tb.jsx)(AW, {
          className: Jy()("Celebrate", {
            Gold: "house" === Wy[1]
          }),
          icon: "star",
          title: Uy("house" === Wy[1] ? "plotsGame:starterLotYourPlot" : "plotsGame:starterLotBriefDone")
        }, `celebrate-${Wy[1]}`)]
      })
    }

    function xU(yb) {
      let {
        step: bb,
        progress: Wy,
        goal: Uy
      } = yb;
      const {
        isTouchScreen: hy
      } = (0, cb.h)(["isTouchScreen"]), {
        t: fy
      } = (0, My.D)(), Zy = NW[bb];
      return (0, tb.jsxs)(AW, {
        icon: Zy.icon,
        title: fy(Zy.titleKey),
        children: [(0, tb.jsx)("div", {
          className: "PlotsStepCardHint SmallTextLight",
          children: zU(fy, Zy, hy)
        }), Uy > 1 && (0, tb.jsx)(wW, {
          progress: Wy,
          goal: Uy
        }), "backpack" === bb && hy && (0, tb.jsx)(dW, {})]
      })
    }

    function AW(yb) {
      let {
        className: bb,
        icon: Wy,
        title: Uy,
        children: hy
      } = yb;
      return (0, tb.jsxs)("div", {
        className: Jy()("PlotsStepCard", bb),
        role: "status",
        children: [(0, tb.jsx)("span", {
          className: "PlotsStepCardIcon",
          children: (0, tb.jsx)(gb.e, {
            name: Wy
          })
        }), (0, tb.jsxs)("div", {
          className: "PlotsStepCardBody",
          children: [(0, tb.jsx)("div", {
            className: "PlotsStepCardTitle SmallTextBold",
            children: Uy
          }), hy]
        })]
      })
    }

    function dW() {
      return (0, fy.useEffect)((() => (cb.d.set({
        backpackPointerRequested: !0
      }), () => {
        cb.d.set({
          backpackPointerRequested: !1
        })
      })), []), null
    }
    const yh = function(yb, bb, Wy, Uy) {
      let {
        localPlayerId: hy
      } = Uy;
      const cb = new Kb;
      let Py = null,
        oy = null,
        By = null,
        Ky = null,
        ey = null;
      const qb = [];
      return {
        onCreate: yb => {
          Py = new GW(yb, hy), oy = new oW(yb, hy, Py), By = new oW(yb, hy, Py), Ky = new mU(yb, hy), ey = new Ty(yb, Ky), qb.push((0, Zy.z)((0, fy.createElement)(fy.Fragment, null, (0, fy.createElement)(DW, {
            hud: cb
          }), (0, fy.createElement)(IW, {
            hud: cb
          }), (0, fy.createElement)(qW, {
            hud: cb,
            journal: ey
          }), (0, fy.createElement)(rU, {
            placement: Ky
          }), (0, fy.createElement)(MW, {
            placement: Ky
          })), {
            content: (0, fy.createElement)(hb, {
              journal: ey
            })
          }))
        },
        Zb: () => {
          oy.Zb(), By.Zb(), Ky.Zb(), ey.Zb()
        },
        onPlayerAttemptAltAction: (yb, bb, Wy, Uy, hy, fy) => {
          var Zy;
          if (null !== fy) return;
          const cb = void 0 === bb ? null : [bb, Wy, Uy];
          return null !== (Zy = oy.attemptAltAction(cb)) && void 0 !== Zy ? Zy : By.attemptAltAction(cb)
        },
        onPlayerClickUp: () => {
          oy.endPress(), By.endPress()
        },
        onAfterRender: (yb, bb) => {
          Ky.afterRender(bb), oy.afterRender(bb), By.afterRender(bb)
        },
        onClose: () => {
          for (const yb of qb) yb();
          Py.dispose(), oy.dispose(), By.dispose(), Ky.dispose(), Py = null, oy = null, By = null, Ky = null, ey = null
        },
        onReceivedMessageFromServer: (yb, bb) => {
          if ("plotsStarterLot" === yb) cb.receiveStep(bb);
          else if ("plotsPlot" === yb) cb.receivePlot(bb);
          else if ("plotsStarterHouse" === yb) oy.pU(bb);
          else if ("plotsBlueprint" === yb) {
            const yb = bb;
            By.pU(yb), Ky.pU(yb)
          } else "plotsJournal" === yb ? ey.pU(bb) : "plotsJournalOpen" === yb ? ey.openFromServer() : "plotsPreviewEnd" === yb && Ky.endFromServer()
        }
      }
    }
  },
  37801: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Uy,
      f: () => fy
    });
    const Uy = 1 / .6,
      hy = {
        kind: "smokePuff"
      };
    class fy {
      constructor(yb, bb, Wy) {
        this.style = yb, this.Hy = bb, this.half = Wy, this.particles = null, this.lastFrame = -1
      }
      emit(yb, bb, Wy) {
        let fy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return Wy !== this.lastFrame && (this.lastFrame = Wy, this.particles || (this.particles = yb.createParticles(function(yb, bb) {
          const [
            [Wy, fy, Zy],
            [cb, Py, oy]
          ] = yb.colours;
          return {
            texture: yb.soft ? hy : "square_particle",
            Hy: bb,
            minLifeTime: yb.life[0] / Uy,
            maxLifeTime: yb.life[1] / Uy,
            minEmitPower: yb.power[0] * Uy,
            maxEmitPower: yb.power[1] * Uy,
            minSize: yb.size[0],
            maxSize: yb.size[1],
            emitRate: 0,
            gravity: [0, yb.lift * Uy * Uy, 0],
            dir1: [-yb.spread, 1, -yb.spread],
            dir2: [yb.spread, 1, yb.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [Wy, fy, Zy, yb.alpha],
              maxColor: [cb, Py, oy, yb.alpha]
            }, {
              timeFraction: 1,
              minColor: [Wy, fy, Zy, 0],
              maxColor: [cb, Py, oy, 0]
            }],
            blendMode: yb.blendMode
          }
        }(this.style, this.Hy), {
          pos: bb,
          half: this.half
        })), this.particles.moveTo(bb, this.half), this.particles.emit(fy), !0)
      }
      dispose() {
        var yb;
        null === (yb = this.particles) || void 0 === yb || yb.stop(), this.particles = null
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);