export const id = 85;
export const ids = [85];
export const modules = {
  5737: (dd, Od) => {
    Od.c = 8, Od.f = function(dd, Od, md, Wd) {
      if (!Array.isArray(dd)) return !!dd;
      Od -= Math.floor(Od), md -= Math.floor(md), Wd -= Math.floor(Wd);
      for (var Fd = 0; Fd < dd.length; Fd += 6)
        if (Od >= dd[Fd] && Od < dd[Fd + 3] && md >= dd[Fd + 1] && md < dd[Fd + 4] && Wd >= dd[Fd + 2] && Wd < dd[Fd + 5]) return !0;
      return !1
    }, Od.e = function(dd) {
      for (var Od = [], md = 0; md < dd.length; md++) {
        var Wd = dd[md];
        if (2 !== Wd.length || 3 !== Wd[0].length || 3 !== Wd[1].length) throw new Error("Subvoxel boxes must contain two three-dimensional bounds");
        for (var Fd = 0; Fd < 3; Fd++) {
          var Rd = Wd[0][Fd],
            Xd = Wd[1][Fd];
          if (!Number.isInteger(Rd) || !Number.isInteger(Xd) || Rd < 0 || Xd > 8 || Rd >= Xd) throw new Error("Subvoxel bounds must be integers satisfying 0 <= start < end <= 8");
          Od[6 * md + Fd] = Rd / 8, Od[6 * md + Fd + 3] = Xd / 8
        }
      }
      return Od
    }
  },
  5796: (dd, Od, md) => {
    md.d(Od, {
      C: () => Nd,
      G: () => Hd,
      K: () => qd,
      O: () => vd,
      S: () => od,
      e: () => Wd,
      i: () => Fd,
      k: () => yd,
      m: () => hd,
      q: () => bd,
      r: () => Kd,
      v: () => Xd,
      z: () => Rd
    });
    const Wd = 47 == md.j ? ["Conveyor Belt", "Splitter", "Sorting Gate", "Belt Loader", "Fast Belt", "Belt Lift", "Belt Drop", "Belt Tunnel", "Express Belt", "Fast Loader"] : null,
      Fd = .002,
      Rd = 2,
      Xd = 3,
      Kd = .5,
      hd = 200;

    function vd(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Fd;
      return Math.max(0, Math.min((md - dd) * Wd, Od))
    }

    function Qd(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Fd;
      const Rd = [];
      let Xd = Od;
      for (const Fd of dd) {
        const dd = vd(Fd.at, Xd, md, Wd);
        Rd.push(dd), Xd = dd - Kd
      }
      return Rd
    }

    function td(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Fd;
      return 0 === dd.length ? 1 / 0 : dd[0].at + Od / md
    }

    function od(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Fd,
        Rd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const Xd = Qd(dd, Od, md, Wd),
        [Kd] = dd.splice(Rd, 1);
      return Xd.splice(Rd, 1), dd.forEach(((dd, Od) => {
        dd.at = md - Xd[Od] / Wd
      })), Kd
    }

    function Nd(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Fd;
      for (let Fd = td(dd, Od, Wd); Fd <= md; Fd = td(dd, Od, Wd)) {
        const md = od(dd, Od, Fd, Wd);
        md.at = Fd, dd.push(md)
      }
    }

    function qd(dd, Od, md) {
      return {
        name: dd,
        at: md - Od / (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Fd)
      }
    }

    function Hd(dd, Od, md, Wd, Rd) {
      let Xd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Fd;
      const Kd = Qd(dd, Od, Rd, Xd);
      let hd = 0;
      dd.forEach(((dd, Od) => {
        dd.at = Rd - Kd[Od] / Xd, Kd[Od] > Wd && (hd = Od + 1)
      })), md.at = Rd - Wd / Xd, dd.splice(hd, 0, md)
    }
    const yd = "baf2BeltLines",
      bd = "baf2BeltMoves"
  },
  5804: (dd, Od, md) => {
    md.d(Od, {
      $: () => yd,
      B: () => od,
      F: () => td,
      J: () => Nd,
      L: () => Xd,
      N: () => Yd,
      P: () => wd,
      T: () => pd,
      X: () => Td,
      Z: () => vd,
      d: () => Fd,
      db: () => bd,
      fb: () => hd,
      g: () => Qd,
      i: () => Rd,
      l: () => gd,
      m: () => Hd,
      p: () => Ud,
      t: () => xd,
      x: () => Ed,
      y: () => Jd
    });
    var Wd = md(701);
    const Fd = {
        "Belt Lift": 1,
        "Belt Drop": -1
      },
      Rd = "Belt Tunnel",
      Xd = 5,
      Kd = "|exit";

    function hd(dd, Od) {
      return Od ? `${Rd}|meta|rot${dd}${Kd}` : 1 === dd ? Rd : `${Rd}|meta|rot${dd}`
    }

    function vd(dd) {
      return dd.endsWith(Kd) && dd.startsWith(`${Rd}|`)
    }
    const Qd = [
        [0, -1],
        [-1, 0],
        [0, 1],
        [1, 0]
      ],
      td = "Splitter",
      od = "Sorting Gate",
      Nd = {
        leftRight: "",
        leftFront: "|leftFront",
        frontRight: "|frontRight"
      },
      qd = {
        leftRight: ["right", "left"],
        leftFront: ["left", "front"],
        frontRight: ["front", "right"]
      },
      Hd = "|right";

    function yd(dd) {
      return dd.split("|")[0] !== td ? null : dd.endsWith(Nd.leftFront) ? "leftFront" : dd.endsWith(Nd.frontRight) ? "frontRight" : "leftRight"
    }

    function bd(dd, Od, md) {
      return function(dd) {
        const Od = yd(dd);
        return null === Od ? [] : qd[Od]
      }(dd).map((dd => "right" === dd ? [md, -Od] : "left" === dd ? [-md, Od] : [Od, md]))
    }

    function Td(dd) {
      return dd.split("|")[0] === od && dd.endsWith(Hd)
    }

    function pd(dd, Od, md) {
      return Td(dd) ? [md, -Od] : [-md, Od]
    }
    const Yd = 47 == md.j ? ["Conveyor Belt", "Fast Belt", "Express Belt"] : null,
      gd = ["turnLeft", "turnRight"];

    function wd(dd, Od, md) {
      return null !== md ? `${dd}|meta|rot${Od}|${md}` : 1 === Od ? dd : `${dd}|meta|rot${Od}`
    }
    const Ed = 47 == md.j ? ["Burner Drill", "Crusher", "Smelter", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Centrifuge", "Synthesizer", "Mob Farm"] : null,
      Jd = 192,
      Ud = 7 * Wd.E,
      xd = 4 * Wd.E
  },
  5766: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd
    });
    const Wd = {
      1: [1, 0],
      2: [0, -1],
      3: [-1, 0],
      4: [0, 1]
    }
  },
  5733: (dd, Od, md) => {
    md.d(Od, {
      d: () => Cd,
      g: () => Id,
      i: () => Pd,
      j: () => ed,
      k: () => cd,
      o: () => ld,
      s: () => jd,
      v: () => Ad,
      z: () => Vd
    });
    var Wd = md(5737);
    if (47 == md.j) var Fd = md(231);
    var Rd = md(5746),
      Xd = md(5813),
      Kd = md(5816),
      hd = md(5729),
      vd = md(5756),
      Qd = md(4406),
      td = md(405),
      od = md(5128),
      Nd = md(5769),
      qd = md(699),
      Hd = md(2982),
      yd = md(5752),
      bd = md(5781);
    if (47 == md.j) var Td = md(5819);
    var pd = md(5827),
      Yd = md(5836);
    const gd = {
      ttb: 200,
      harvestType: "cuttable",
      soundType: {
        break: "cloth",
        place: "cloth"
      },
      itemTexture: "slime_trail",
      solid: !1,
      model: "rotatable",
      modelScale: 8,
      customModelInfo: {
        yOffset: -.5,
        unlit: !0,
        yRotOffset: -Math.PI / 2
      },
      blockModel: "slime_trail",
      heldItemGlb: "Slime Trail",
      unlitStandaloneMesh: !0,
      Pq: [14, 8, 11],
      drops: null,
      specialToolDrop: {
        tool: [...td.ne],
        drops: "Slime Trail"
      }
    };

    function wd(dd, Od) {
      let {
        textureAnimation: md,
        rotatable: Wd = !0
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return {
        model: Wd ? "rotatable" : "CustomModel",
        modelScale: 8,
        blockModel: dd,
        blockModelItem: !0,
        heldItemScale: 4,
        itemTexture: Od,
        customModelInfo: {
          yOffset: -.5,
          yRotOffset: Wd ? Math.PI : void 0,
          textureAnimation: md
        }
      }
    }
    const Ed = (0, Wd.e)([
        [
          [0, 0, 0],
          [8, 1, 8]
        ]
      ]),
      Jd = [(0, yd.gc)("Maple Stairs", {
        displayName: {
          translationKey: "item:mapleStairs"
        },
        ttb: 1800,
        textureInfo: "planks_maple",
        harvestType: "wood"
      }), (0, yd.gc)("Pine Stairs", {
        displayName: {
          translationKey: "item:pineStairs"
        },
        ttb: 1800,
        textureInfo: "planks_pine",
        harvestType: "wood"
      }), (0, yd.gc)("Plum Stairs", {
        displayName: {
          translationKey: "item:plumStairs"
        },
        ttb: 1800,
        textureInfo: "planks_plum",
        harvestType: "wood"
      }), (0, yd.gc)("Cedar Stairs", {
        displayName: {
          translationKey: "item:cedarStairs"
        },
        ttb: 1800,
        textureInfo: "planks_cedar",
        harvestType: "wood"
      }), (0, yd.gc)("Aspen Stairs", {
        displayName: {
          translationKey: "item:aspenStairs"
        },
        ttb: 1800,
        textureInfo: "planks_aspen",
        harvestType: "wood"
      }), (0, yd.gc)("Jungle Stairs", {
        displayName: {
          translationKey: "item:jungleStairs"
        },
        ttb: 1800,
        textureInfo: "planks_jungle",
        harvestType: "wood"
      }), (0, yd.gc)("Palm Stairs", {
        displayName: {
          translationKey: "item:palmStairs"
        },
        ttb: 1800,
        textureInfo: "planks_palm",
        harvestType: "wood"
      }), (0, yd.gc)("Pear Stairs", {
        displayName: {
          translationKey: "item:pearStairs"
        },
        ttb: 1800,
        textureInfo: "planks_pear",
        harvestType: "wood"
      }), (0, yd.gc)("Cherry Stairs", {
        displayName: {
          translationKey: "item:cherryStairs"
        },
        ttb: 1800,
        textureInfo: "planks_cherry",
        harvestType: "wood"
      }), (0, yd.gc)("Spectral Stairs", {
        displayName: {
          translationKey: "item:spectralStairs"
        },
        ttb: 1800,
        textureInfo: "planks_spectral",
        harvestType: "wood"
      }), (0, yd.gc)("Mango Stairs", {
        displayName: {
          translationKey: "item:mangoStairs"
        },
        ttb: 1800,
        textureInfo: "planks_mango",
        harvestType: "wood"
      }), (0, yd.gc)("Messy Stone Stairs", {
        displayName: {
          translationKey: "item:messyStoneStairs"
        },
        ttb: 1800,
        textureInfo: "messy_stone",
        harvestType: "rock"
      }), (0, yd.gc)("Stone Stairs", {
        displayName: {
          translationKey: "item:stoneStairs"
        },
        ttb: 1800,
        textureInfo: "stone",
        harvestType: "rock"
      }), (0, yd.gc)("Smooth Stone Stairs", {
        displayName: {
          translationKey: "item:smoothStoneStairs"
        },
        ttb: 1800,
        textureInfo: "smooth_stone",
        harvestType: "rock"
      }), (0, yd.gc)("Engraved Stone Stairs", {
        displayName: {
          translationKey: "item:engravedStoneStairs"
        },
        ttb: 1800,
        textureInfo: "stonebrick_carved",
        harvestType: "rock"
      }), (0, yd.gc)("Stone Bricks Stairs", {
        displayName: {
          translationKey: "item:stoneBricksStairs"
        },
        ttb: 1800,
        textureInfo: "stonebrick",
        harvestType: "rock"
      }), (0, yd.gc)("Mossy Stone Stairs", {
        displayName: {
          translationKey: "item:mossyStoneStairs"
        },
        ttb: 1800,
        textureInfo: "mossy_cobblestone",
        harvestType: "rock"
      }), (0, yd.gc)("Mossy Stone Bricks Stairs", {
        displayName: {
          translationKey: "item:mossyStoneBricksStairs"
        },
        ttb: 1800,
        textureInfo: "stonebrick_mossy",
        harvestType: "rock"
      }), (0, yd.gc)("Andesite Stairs", {
        displayName: {
          translationKey: "item:andesiteStairs"
        },
        ttb: 1800,
        textureInfo: "stone_andesite",
        harvestType: "rock"
      }), (0, yd.gc)("Smooth Andesite Stairs", {
        displayName: {
          translationKey: "item:smoothAndesiteStairs"
        },
        ttb: 1800,
        textureInfo: "stone_andesite_smooth",
        harvestType: "rock"
      }), (0, yd.gc)("Engraved Andesite Stairs", {
        displayName: {
          translationKey: "item:engravedAndesiteStairs"
        },
        ttb: 1800,
        textureInfo: "engraved_andesite",
        harvestType: "rock"
      }), (0, yd.gc)("Andesite Bricks Stairs", {
        displayName: {
          translationKey: "item:andesiteBricksStairs"
        },
        ttb: 1800,
        textureInfo: "andesite_brick",
        harvestType: "rock"
      }), (0, yd.gc)("Diorite Stairs", {
        displayName: {
          translationKey: "item:dioriteStairs"
        },
        ttb: 1800,
        textureInfo: "stone_diorite",
        harvestType: "rock"
      }), (0, yd.gc)("Smooth Diorite Stairs", {
        displayName: {
          translationKey: "item:smoothDioriteStairs"
        },
        ttb: 1800,
        textureInfo: "stone_diorite_smooth",
        harvestType: "rock"
      }), (0, yd.gc)("Engraved Diorite Stairs", {
        displayName: {
          translationKey: "item:engravedDioriteStairs"
        },
        ttb: 1800,
        textureInfo: "engraved_diorite",
        harvestType: "rock"
      }), (0, yd.gc)("Diorite Bricks Stairs", {
        displayName: {
          translationKey: "item:dioriteBricksStairs"
        },
        ttb: 1800,
        textureInfo: "diorite_brick",
        harvestType: "rock"
      }), (0, yd.gc)("Granite Stairs", {
        displayName: {
          translationKey: "item:graniteStairs"
        },
        ttb: 1800,
        textureInfo: "stone_granite",
        harvestType: "rock"
      }), (0, yd.gc)("Smooth Granite Stairs", {
        displayName: {
          translationKey: "item:smoothGraniteStairs"
        },
        ttb: 1800,
        textureInfo: "stone_granite_smooth",
        harvestType: "rock"
      }), (0, yd.gc)("Engraved Granite Stairs", {
        displayName: {
          translationKey: "item:engravedGraniteStairs"
        },
        ttb: 1800,
        textureInfo: "engraved_granite",
        harvestType: "rock"
      }), (0, yd.gc)("Granite Bricks Stairs", {
        displayName: {
          translationKey: "item:graniteBricksStairs"
        },
        ttb: 1800,
        textureInfo: "granite_brick",
        harvestType: "rock"
      }), (0, yd.gc)("Sandstone Stairs", {
        displayName: {
          translationKey: "item:sandstoneStairs"
        },
        ttb: 960,
        textureInfo: "sandstone_normal",
        harvestType: "rock"
      }), (0, yd.gc)("Smooth Sandstone Stairs", {
        displayName: {
          translationKey: "item:smoothSandstoneStairs"
        },
        ttb: 960,
        textureInfo: "sandstone_top",
        harvestType: "rock"
      }), (0, yd.gc)("Engraved Sandstone Stairs", {
        displayName: {
          translationKey: "item:engravedSandstoneStairs"
        },
        ttb: 960,
        textureInfo: "chiseled_sandstone",
        harvestType: "rock"
      }), (0, yd.gc)("Marked Sandstone Stairs", {
        displayName: {
          translationKey: "item:markedSandstoneStairs"
        },
        ttb: 960,
        textureInfo: "cut_sandstone",
        harvestType: "rock"
      }), (0, yd.gc)("Sandstone Bricks Stairs", {
        displayName: {
          translationKey: "item:sandstoneBricksStairs"
        },
        ttb: 960,
        textureInfo: "sandstone_brick",
        harvestType: "rock"
      }), (0, yd.gc)("Red Sandstone Stairs", {
        displayName: {
          translationKey: "item:redSandstoneStairs"
        },
        ttb: 960,
        textureInfo: "red_sandstone",
        harvestType: "rock"
      }), (0, yd.gc)("Smooth Red Sandstone Stairs", {
        displayName: {
          translationKey: "item:smoothRedSandstoneStairs"
        },
        ttb: 960,
        textureInfo: "red_sandstone_top",
        harvestType: "rock"
      }), (0, yd.gc)("Engraved Red Sandstone Stairs", {
        displayName: {
          translationKey: "item:engravedRedSandstoneStairs"
        },
        ttb: 960,
        textureInfo: "chiseled_red_sandstone",
        harvestType: "rock"
      }), (0, yd.gc)("Marked Red Sandstone Stairs", {
        displayName: {
          translationKey: "item:markedRedSandstoneStairs"
        },
        ttb: 960,
        textureInfo: "cut_red_sandstone",
        harvestType: "rock"
      }), (0, yd.gc)("Red Sandstone Bricks Stairs", {
        displayName: {
          translationKey: "item:redSandstoneBricksStairs"
        },
        ttb: 960,
        textureInfo: "red_sandstone_brick",
        harvestType: "rock"
      }), (0, yd.gc)("Bricks Stairs", {
        displayName: {
          translationKey: "item:bricksStairs"
        },
        ttb: 2400,
        textureInfo: "brick",
        harvestType: "rock"
      }), (0, yd.gc)("Ice Bricks Stairs", {
        displayName: {
          translationKey: "item:iceBricksStairs"
        },
        ttb: 1800,
        textureInfo: "ice_brick",
        harvestType: "rock",
        harvestLevel: 0,
        stoodOnSpeedMultiplier: 1.4
      }), ...(0, yd.q)("Concrete", (dd => ({
        displayName: {
          translationKey: `item:${(0,td.te)(dd)}ConcreteStairs`
        },
        ttb: 2160,
        textureInfo: `${(0,td.xe)(dd)}_concrete`,
        harvestType: "rock"
      }))), ...(0, yd.q)("Chalk", (dd => {
        const Od = {
          colour: `$t(colour:${(0,td.xe)(dd)})`
        };
        return {
          displayName: {
            translationKey: "item:colouredChalkStairs",
            params: Od
          },
          description: {
            translationKey: "item:colouredChalkStairsDescription",
            params: Od
          },
          ttb: 850,
          textureInfo: `chalk_${(0,td.xe)(dd)}`,
          harvestType: "rock"
        }
      })), ...(0, yd.q)("Chalk Bricks", (dd => {
        const Od = {
          colour: `$t(colour:${(0,td.xe)(dd)})`
        };
        return {
          displayName: {
            translationKey: "item:colouredChalkBricksStairs",
            params: Od
          },
          description: {
            translationKey: "item:colouredChalkBricksStairsDescription",
            params: Od
          },
          ttb: 850,
          textureInfo: `chalk_bricks_${(0,td.xe)(dd)}`,
          harvestType: "rock"
        }
      }))],
      Ud = {
        displayName: {
          translationKey: "item:chest"
        },
        ttb: 3e3,
        harvestType: "wood"
      },
      xd = {
        Unloaded: {
          ttb: 100,
          textureInfo: "unloaded",
          harvestType: "granule"
        },
        Dirt: {
          displayName: {
            translationKey: "item:dirt"
          },
          ttb: 600,
          textureInfo: "dirt",
          harvestType: "granule"
        },
        "Messy Dirt": {
          displayName: {
            translationKey: "item:messyDirt"
          },
          ttb: 600,
          textureInfo: "coarse_dirt",
          harvestType: "granule"
        },
        "Grass Block": {
          displayName: {
            translationKey: "item:grassBlock"
          },
          ttb: 720,
          textureInfo: ["grass_block_side", "grass_top", "dirt"],
          texturePerSide: [0, 0, 1, 2, 0, 0],
          harvestType: "granule",
          soundType: {
            break: "grass",
            place: "grass"
          }
        },
        Sand: {
          displayName: {
            translationKey: "item:sand"
          },
          ttb: 600,
          textureInfo: "sand",
          harvestType: "granule",
          soundType: {
            break: "sand",
            place: "sand"
          }
        },
        Clay: {
          displayName: {
            translationKey: "item:clay"
          },
          ttb: 720,
          textureInfo: "clay",
          harvestType: "granule"
        },
        Gravel: {
          displayName: {
            translationKey: "item:gravel"
          },
          ttb: 720,
          textureInfo: "gravel",
          harvestType: "granule"
        },
        Snow: {
          displayName: {
            translationKey: "item:snow"
          },
          ttb: 600,
          textureInfo: "snow",
          harvestType: "granule",
          soundType: {
            break: "snow",
            place: "snow"
          }
        },
        "Maple Log": {
          displayName: {
            translationKey: "item:mapleLog"
          },
          ttb: 2400,
          textureInfo: "log_maple",
          harvestType: "wood"
        },
        "Pine Log": {
          displayName: {
            translationKey: "item:pineLog"
          },
          ttb: 2400,
          textureInfo: "log_pine",
          harvestType: "wood"
        },
        "Plum Log": {
          displayName: {
            translationKey: "item:plumLog"
          },
          ttb: 2400,
          textureInfo: "log_plum",
          harvestType: "wood"
        },
        "Cedar Log": {
          displayName: {
            translationKey: "item:cedarLog"
          },
          ttb: 2400,
          textureInfo: "log_cedar",
          harvestType: "wood"
        },
        "Aspen Log": {
          displayName: {
            translationKey: "item:aspenLog"
          },
          ttb: 2400,
          textureInfo: "log_aspen",
          harvestType: "wood"
        },
        "Jungle Log": {
          displayName: {
            translationKey: "item:jungleLog"
          },
          ttb: 2400,
          textureInfo: "log_jungle",
          harvestType: "wood"
        },
        "Maple Wood Planks": {
          displayName: {
            translationKey: "item:mapleWoodPlanks"
          },
          ttb: 1800,
          textureInfo: "planks_maple",
          harvestType: "wood"
        },
        "Aspen Wood Planks": {
          displayName: {
            translationKey: "item:aspenWoodPlanks"
          },
          ttb: 1800,
          textureInfo: "planks_aspen",
          harvestType: "wood"
        },
        "Plum Wood Planks": {
          displayName: {
            translationKey: "item:plumWoodPlanks"
          },
          ttb: 1800,
          textureInfo: "planks_plum",
          harvestType: "wood"
        },
        "Jungle Wood Planks": {
          displayName: {
            translationKey: "item:jungleWoodPlanks"
          },
          ttb: 1800,
          textureInfo: "planks_jungle",
          harvestType: "wood"
        },
        "Pine Wood Planks": {
          displayName: {
            translationKey: "item:pineWoodPlanks"
          },
          ttb: 1800,
          textureInfo: "planks_pine",
          harvestType: "wood"
        },
        "Cedar Wood Planks": {
          displayName: {
            translationKey: "item:cedarWoodPlanks"
          },
          ttb: 1800,
          textureInfo: "planks_cedar",
          harvestType: "wood"
        },
        "Barkless Maple Log": {
          displayName: {
            translationKey: "item:barklessMapleLog"
          },
          ttb: 2e3,
          textureInfo: "stripped_maple_log",
          harvestType: "wood"
        },
        "Barkless Aspen Log": {
          displayName: {
            translationKey: "item:barklessAspenLog"
          },
          ttb: 2e3,
          textureInfo: "stripped_aspen_log",
          harvestType: "wood"
        },
        "Barkless Plum Log": {
          displayName: {
            translationKey: "item:barklessPlumLog"
          },
          ttb: 2e3,
          textureInfo: "stripped_plum_log",
          harvestType: "wood"
        },
        "Barkless Jungle Log": {
          displayName: {
            translationKey: "item:barklessJungleLog"
          },
          ttb: 2e3,
          textureInfo: "stripped_jungle_log",
          harvestType: "wood"
        },
        "Barkless Pine Log": {
          displayName: {
            translationKey: "item:barklessPineLog"
          },
          ttb: 2e3,
          textureInfo: "stripped_pine_log",
          harvestType: "wood"
        },
        "Barkless Cedar Log": {
          displayName: {
            translationKey: "item:barklessCedarLog"
          },
          ttb: 2e3,
          textureInfo: "stripped_cedar_log",
          harvestType: "wood"
        },
        free_placeholder2: {
          ttb: 1800,
          textureInfo: "messy_stone",
          harvestType: "rock"
        },
        Stone: {
          displayName: {
            translationKey: "item:stone"
          },
          ttb: 1800,
          textureInfo: "stone",
          harvestType: "rock",
          drops: "Messy Stone",
          specialToolDrop: {
            tool: "Moonstone Pickaxe",
            drops: "Stone"
          }
        },
        "Messy Stone": {
          displayName: {
            translationKey: "item:messyStone"
          },
          ttb: 1800,
          textureInfo: "messy_stone",
          harvestType: "rock"
        },
        free_placeholder: {
          ttb: 1800,
          textureInfo: "messy_stone",
          harvestType: "rock"
        },
        "Smooth Stone": {
          displayName: {
            translationKey: "item:smoothStone"
          },
          ttb: 1800,
          textureInfo: "smooth_stone",
          harvestType: "rock"
        },
        Diorite: {
          displayName: {
            translationKey: "item:diorite"
          },
          ttb: 1800,
          textureInfo: "stone_diorite",
          harvestType: "rock"
        },
        "Smooth Diorite": {
          displayName: {
            translationKey: "item:smoothDiorite"
          },
          ttb: 1800,
          textureInfo: "stone_diorite_smooth",
          harvestType: "rock"
        },
        Andesite: {
          displayName: {
            translationKey: "item:andesite"
          },
          ttb: 1800,
          textureInfo: "stone_andesite",
          harvestType: "rock"
        },
        "Smooth Andesite": {
          displayName: {
            translationKey: "item:smoothAndesite"
          },
          ttb: 1800,
          textureInfo: "stone_andesite_smooth",
          harvestType: "rock"
        },
        Granite: {
          displayName: {
            translationKey: "item:granite"
          },
          ttb: 1800,
          textureInfo: "stone_granite",
          harvestType: "rock"
        },
        "Smooth Granite": {
          displayName: {
            translationKey: "item:smoothGranite"
          },
          ttb: 1800,
          textureInfo: "stone_granite_smooth",
          harvestType: "rock"
        },
        Sandstone: {
          displayName: {
            translationKey: "item:sandstone"
          },
          ttb: 960,
          textureInfo: "sandstone_normal",
          harvestType: "rock"
        },
        Yellowstone: {
          displayName: {
            translationKey: "item:yellowstone"
          },
          ttb: 3600,
          textureInfo: "end_stone",
          harvestType: "rock"
        },
        "Coal Ore": {
          displayName: {
            translationKey: "item:coalOre"
          },
          ttb: 3e3,
          textureInfo: "coal_ore",
          harvestType: "rock",
          drops: "Coal",
          specialToolDrop: {
            tool: "Moonstone Pickaxe",
            drops: "Coal Ore"
          },
          specialToolBonusDrops: {
            "Golem Pickaxe": od.o
          },
          description: {
            translationKey: "item:coalOreDescription"
          },
          onMinedAura: 5
        },
        "Iron Ore": {
          displayName: {
            translationKey: "item:ironOre"
          },
          ttb: 3600,
          textureInfo: "iron_ore",
          harvestType: "rock",
          drops: "Raw Iron",
          specialToolDrop: {
            tool: "Moonstone Pickaxe",
            drops: "Iron Ore"
          },
          specialToolBonusDrops: {
            "Golem Pickaxe": od.o
          },
          harvestLevel: 2,
          onMinedAura: 15
        },
        "Gold Ore": {
          displayName: {
            translationKey: "item:goldOre"
          },
          ttb: 4200,
          textureInfo: "gold_ore",
          harvestType: "rock",
          drops: "Raw Gold",
          specialToolDrop: {
            tool: "Moonstone Pickaxe",
            drops: "Gold Ore"
          },
          specialToolBonusDrops: {
            "Golem Pickaxe": od.o
          },
          harvestLevel: 3,
          onMinedAura: 30,
          Pq: [4, 4, 0]
        },
        "Lapis Lazuli Ore": {
          displayName: {
            translationKey: "item:lapisLazuliOre"
          },
          ttb: 4200,
          textureInfo: "lapis_ore",
          harvestType: "rock",
          harvestLevel: 3,
          Pq: [0, 0, 2]
        },
        "Emerald Ore": {
          displayName: {
            translationKey: "item:emeraldOre"
          },
          ttb: 4500,
          textureInfo: "emerald_ore",
          harvestType: "rock",
          harvestLevel: 3,
          Pq: [1, 3, 1]
        },
        "Diamond Ore": {
          displayName: {
            translationKey: "item:diamondOre"
          },
          ttb: 5e3,
          textureInfo: "diamond_ore",
          harvestType: "rock",
          harvestLevel: 3,
          drops: "Diamond",
          specialToolDrop: {
            tool: "Moonstone Pickaxe",
            drops: "Diamond Ore"
          },
          specialToolBonusDrops: {
            "Golem Pickaxe": od.o
          },
          description: {
            translationKey: "item:diamondOreDescription"
          },
          onMinedAura: 40,
          Pq: [2, 5, 5]
        },
        "Block of Coal": {
          displayName: {
            translationKey: "item:blockOfCoal"
          },
          ttb: 4500,
          textureInfo: "coal_block",
          harvestType: "rock"
        },
        "Block of Iron": {
          displayName: {
            translationKey: "item:blockOfIron"
          },
          ttb: 5400,
          textureInfo: "iron_block",
          harvestType: "rock"
        },
        "Block of Gold": {
          displayName: {
            translationKey: "item:blockOfGold"
          },
          ttb: 6300,
          textureInfo: "gold_block",
          harvestType: "rock"
        },
        "Block of Lapis Lazuli": {
          displayName: {
            translationKey: "item:blockOfLapisLazuli"
          },
          ttb: 6300,
          textureInfo: "lapis_block",
          harvestType: "rock"
        },
        "Block of Emerald": {
          displayName: {
            translationKey: "item:blockOfEmerald"
          },
          ttb: 6750,
          textureInfo: "emerald_block",
          harvestType: "rock"
        },
        "White Wool": {
          displayName: {
            translationKey: "item:whiteWool"
          },
          ttb: 960,
          textureInfo: "wool_colored_white",
          harvestType: "cuttable",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        },
        "Orange Wool": {
          displayName: {
            translationKey: "item:orangeWool"
          },
          ttb: 960,
          textureInfo: "wool_colored_orange",
          harvestType: "cuttable",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        },
        "Magenta Wool": {
          displayName: {
            translationKey: "item:magentaWool"
          },
          ttb: 960,
          textureInfo: "wool_colored_magenta",
          harvestType: "cuttable",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        },
        "Light Blue Wool": {
          displayName: {
            translationKey: "item:lightBlueWool"
          },
          ttb: 960,
          textureInfo: "wool_colored_light_blue",
          harvestType: "cuttable",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        },
        "Yellow Wool": {
          displayName: {
            translationKey: "item:yellowWool"
          },
          ttb: 960,
          textureInfo: "wool_colored_yellow",
          harvestType: "cuttable",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        },
        "Lime Wool": {
          displayName: {
            translationKey: "item:limeWool"
          },
          ttb: 960,
          textureInfo: "wool_colored_lime",
          harvestType: "cuttable",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        },
        "Pink Wool": {
          displayName: {
            translationKey: "item:pinkWool"
          },
          ttb: 960,
          textureInfo: "wool_colored_pink",
          harvestType: "cuttable",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        },
        "Gray Wool": {
          displayName: {
            translationKey: "item:grayWool"
          },
          ttb: 960,
          textureInfo: "wool_colored_gray",
          harvestType: "cuttable",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        },
        "Light Gray Wool": {
          displayName: {
            translationKey: "item:lightGrayWool"
          },
          ttb: 960,
          textureInfo: "wool_colored_light_grey",
          harvestType: "cuttable",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        },
        "Cyan Wool": {
          displayName: {
            translationKey: "item:cyanWool"
          },
          ttb: 960,
          textureInfo: "wool_colored_cyan",
          harvestType: "cuttable",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        },
        "Purple Wool": {
          displayName: {
            translationKey: "item:purpleWool"
          },
          ttb: 960,
          textureInfo: "wool_colored_purple",
          harvestType: "cuttable",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        },
        "Blue Wool": {
          displayName: {
            translationKey: "item:blueWool"
          },
          ttb: 960,
          textureInfo: "wool_colored_blue",
          harvestType: "cuttable",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        },
        "Brown Wool": {
          displayName: {
            translationKey: "item:brownWool"
          },
          ttb: 960,
          textureInfo: "wool_colored_brown",
          harvestType: "cuttable",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        },
        "Green Wool": {
          displayName: {
            translationKey: "item:greenWool"
          },
          ttb: 960,
          textureInfo: "wool_colored_green",
          harvestType: "cuttable",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        },
        "Red Wool": {
          displayName: {
            translationKey: "item:redWool"
          },
          ttb: 960,
          textureInfo: "wool_colored_red",
          harvestType: "cuttable",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        },
        "Black Wool": {
          displayName: {
            translationKey: "item:blackWool"
          },
          ttb: 960,
          textureInfo: "wool_colored_black",
          harvestType: "cuttable",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        },
        "Baked Clay": {
          displayName: {
            translationKey: "item:bakedClay"
          },
          ttb: 1500,
          textureInfo: "hardened_clay",
          harvestType: "rock"
        },
        "White Baked Clay": {
          displayName: {
            translationKey: "item:whiteBakedClay"
          },
          ttb: 1500,
          textureInfo: "hardened_clay_stained_white",
          harvestType: "rock"
        },
        "Orange Baked Clay": {
          displayName: {
            translationKey: "item:orangeBakedClay"
          },
          ttb: 1500,
          textureInfo: "hardened_clay_stained_orange",
          harvestType: "rock"
        },
        "Magenta Baked Clay": {
          displayName: {
            translationKey: "item:magentaBakedClay"
          },
          ttb: 1500,
          textureInfo: "hardened_clay_stained_magenta",
          harvestType: "rock"
        },
        "Light Blue Baked Clay": {
          displayName: {
            translationKey: "item:lightBlueBakedClay"
          },
          ttb: 1500,
          textureInfo: "hardened_clay_stained_light_blue",
          harvestType: "rock"
        },
        "Yellow Baked Clay": {
          displayName: {
            translationKey: "item:yellowBakedClay"
          },
          ttb: 1500,
          textureInfo: "hardened_clay_stained_yellow",
          harvestType: "rock"
        },
        "Lime Baked Clay": {
          displayName: {
            translationKey: "item:limeBakedClay"
          },
          ttb: 1500,
          textureInfo: "hardened_clay_stained_lime",
          harvestType: "rock"
        },
        "Pink Baked Clay": {
          displayName: {
            translationKey: "item:pinkBakedClay"
          },
          ttb: 1500,
          textureInfo: "hardened_clay_stained_pink",
          harvestType: "rock"
        },
        "Gray Baked Clay": {
          displayName: {
            translationKey: "item:grayBakedClay"
          },
          ttb: 1500,
          textureInfo: "hardened_clay_stained_gray",
          harvestType: "rock"
        },
        "Light Gray Baked Clay": {
          displayName: {
            translationKey: "item:lightGrayBakedClay"
          },
          ttb: 1500,
          textureInfo: "hardened_clay_stained_silver",
          harvestType: "rock"
        },
        "Cyan Baked Clay": {
          displayName: {
            translationKey: "item:cyanBakedClay"
          },
          ttb: 1500,
          textureInfo: "hardened_clay_stained_cyan",
          harvestType: "rock"
        },
        "Purple Baked Clay": {
          displayName: {
            translationKey: "item:purpleBakedClay"
          },
          ttb: 1500,
          textureInfo: "hardened_clay_stained_purple",
          harvestType: "rock"
        },
        "Blue Baked Clay": {
          displayName: {
            translationKey: "item:blueBakedClay"
          },
          ttb: 1500,
          textureInfo: "hardened_clay_stained_blue",
          harvestType: "rock"
        },
        "Brown Baked Clay": {
          displayName: {
            translationKey: "item:brownBakedClay"
          },
          ttb: 1500,
          textureInfo: "hardened_clay_stained_brown",
          harvestType: "rock"
        },
        "Green Baked Clay": {
          displayName: {
            translationKey: "item:greenBakedClay"
          },
          ttb: 1500,
          textureInfo: "hardened_clay_stained_green",
          harvestType: "rock"
        },
        "Red Baked Clay": {
          displayName: {
            translationKey: "item:redBakedClay"
          },
          ttb: 1500,
          textureInfo: "hardened_clay_stained_red",
          harvestType: "rock"
        },
        "Black Baked Clay": {
          displayName: {
            translationKey: "item:blackBakedClay"
          },
          ttb: 1500,
          textureInfo: "hardened_clay_stained_black",
          harvestType: "rock"
        },
        "Gray Concrete": {
          displayName: {
            translationKey: "item:grayConcrete"
          },
          ttb: 2160,
          textureInfo: "gray_concrete",
          harvestType: "rock"
        },
        "Light Gray Concrete": {
          displayName: {
            translationKey: "item:lightGrayConcrete"
          },
          ttb: 2160,
          textureInfo: "light_gray_concrete",
          harvestType: "rock"
        },
        "Black Concrete": {
          displayName: {
            translationKey: "item:blackConcrete"
          },
          ttb: 2160,
          textureInfo: "black_concrete",
          harvestType: "rock"
        },
        "Blue Concrete": {
          displayName: {
            translationKey: "item:blueConcrete"
          },
          ttb: 2160,
          textureInfo: "blue_concrete",
          harvestType: "rock"
        },
        "Brown Concrete": {
          displayName: {
            translationKey: "item:brownConcrete"
          },
          ttb: 2160,
          textureInfo: "brown_concrete",
          harvestType: "rock"
        },
        "Cyan Concrete": {
          displayName: {
            translationKey: "item:cyanConcrete"
          },
          ttb: 2160,
          textureInfo: "cyan_concrete",
          harvestType: "rock"
        },
        "Light Blue Concrete": {
          displayName: {
            translationKey: "item:lightBlueConcrete"
          },
          ttb: 2160,
          textureInfo: "light_blue_concrete",
          harvestType: "rock"
        },
        "Lime Concrete": {
          displayName: {
            translationKey: "item:limeConcrete"
          },
          ttb: 2160,
          textureInfo: "lime_concrete",
          harvestType: "rock"
        },
        "Magenta Concrete": {
          displayName: {
            translationKey: "item:magentaConcrete"
          },
          ttb: 2160,
          textureInfo: "magenta_concrete",
          harvestType: "rock"
        },
        "Orange Concrete": {
          displayName: {
            translationKey: "item:orangeConcrete"
          },
          ttb: 2160,
          textureInfo: "orange_concrete",
          harvestType: "rock"
        },
        "Pink Concrete": {
          displayName: {
            translationKey: "item:pinkConcrete"
          },
          ttb: 2160,
          textureInfo: "pink_concrete",
          harvestType: "rock"
        },
        "Purple Concrete": {
          displayName: {
            translationKey: "item:purpleConcrete"
          },
          ttb: 2160,
          textureInfo: "purple_concrete",
          harvestType: "rock"
        },
        "Red Concrete": {
          displayName: {
            translationKey: "item:redConcrete"
          },
          ttb: 2160,
          textureInfo: "red_concrete",
          harvestType: "rock"
        },
        "White Concrete": {
          displayName: {
            translationKey: "item:whiteConcrete"
          },
          ttb: 2160,
          textureInfo: "white_concrete",
          harvestType: "rock"
        },
        "Green Concrete": {
          displayName: {
            translationKey: "item:greenConcrete"
          },
          ttb: 2160,
          textureInfo: "green_concrete",
          harvestType: "rock"
        },
        "Yellow Concrete": {
          displayName: {
            translationKey: "item:yellowConcrete"
          },
          ttb: 2160,
          textureInfo: "yellow_concrete",
          harvestType: "rock"
        },
        "Pine Leaves": {
          displayName: {
            translationKey: "item:pineLeaves"
          },
          ttb: 350,
          textureInfo: "leaves_pine",
          harvestType: "cuttable"
        },
        "Aspen Leaves": {
          displayName: {
            translationKey: "item:aspenLeaves"
          },
          ttb: 350,
          textureInfo: "leaves_aspen",
          harvestType: "cuttable"
        },
        "Maple Leaves": {
          displayName: {
            translationKey: "item:mapleLeaves"
          },
          ttb: 350,
          textureInfo: "leaves_maple",
          harvestType: "cuttable"
        },
        "Jungle Leaves": {
          displayName: {
            translationKey: "item:jungleLeaves"
          },
          ttb: 350,
          textureInfo: "leaves_jungle",
          harvestType: "cuttable"
        },
        Pumpkin_placeholder: {
          ttb: 1200,
          textureInfo: "pumpkin_face_on",
          harvestType: "wood",
          Pq: [14, 10, 4]
        },
        Watermelon: {
          displayName: {
            translationKey: "item:watermelon"
          },
          ttb: 1200,
          textureInfo: ["watermelon_side", "watermelon_top"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          harvestType: "wood"
        },
        Glass: {
          displayName: {
            translationKey: "item:glass"
          },
          ttb: 450,
          textureInfo: "glass",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        "Black Glass": {
          displayName: {
            translationKey: "item:blackGlass"
          },
          ttb: 450,
          textureInfo: "glass_black",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        "Blue Glass": {
          displayName: {
            translationKey: "item:blueGlass"
          },
          ttb: 450,
          textureInfo: "glass_blue",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        "Brown Glass": {
          displayName: {
            translationKey: "item:brownGlass"
          },
          ttb: 450,
          textureInfo: "glass_brown",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        "Cyan Glass": {
          displayName: {
            translationKey: "item:cyanGlass"
          },
          ttb: 450,
          textureInfo: "glass_cyan",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        "Gray Glass": {
          displayName: {
            translationKey: "item:grayGlass"
          },
          ttb: 450,
          textureInfo: "glass_gray",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        "Light Gray Glass": {
          displayName: {
            translationKey: "item:lightGrayGlass"
          },
          ttb: 450,
          textureInfo: "glass_light_gray",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        "Green Glass": {
          displayName: {
            translationKey: "item:greenGlass"
          },
          ttb: 450,
          textureInfo: "glass_green",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        "Light Blue Glass": {
          displayName: {
            translationKey: "item:lightBlueGlass"
          },
          ttb: 450,
          textureInfo: "glass_light_blue",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        "Lime Glass": {
          displayName: {
            translationKey: "item:limeGlass"
          },
          ttb: 450,
          textureInfo: "glass_lime",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        "Magenta Glass": {
          displayName: {
            translationKey: "item:magentaGlass"
          },
          ttb: 450,
          textureInfo: "glass_magenta",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        "Orange Glass": {
          displayName: {
            translationKey: "item:orangeGlass"
          },
          ttb: 450,
          textureInfo: "glass_orange",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        "Pink Glass": {
          displayName: {
            translationKey: "item:pinkGlass"
          },
          ttb: 450,
          textureInfo: "glass_pink",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        "Purple Glass": {
          displayName: {
            translationKey: "item:purpleGlass"
          },
          ttb: 450,
          textureInfo: "glass_purple",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        "Red Glass": {
          displayName: {
            translationKey: "item:redGlass"
          },
          ttb: 450,
          textureInfo: "glass_red",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        "White Glass": {
          displayName: {
            translationKey: "item:whiteGlass"
          },
          ttb: 450,
          textureInfo: "glass_white",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        "Yellow Glass": {
          displayName: {
            translationKey: "item:yellowGlass"
          },
          ttb: 450,
          textureInfo: "glass_yellow",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        "UNUSED BLOCK TYPE": {
          ttb: 450,
          textureInfo: "glass_silver",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        "Dim Lamp On": {
          ttb: 450,
          textureInfo: "redstone_lamp_on",
          harvestType: "rock",
          Pq: [14, 14, 14]
        },
        "Dim Lamp Off": {
          ttb: 450,
          textureInfo: "redstone_lamp_off",
          harvestType: "rock"
        },
        Water: {
          displayName: {
            translationKey: "item:water"
          },
          textureInfo: [.5, .5, .8, .9],
          LN: !0,
          drops: null,
          harvestType: "rock"
        },
        "Invisible Solid": {
          ttb: 3e3,
          textureInfo: "invisible_solid",
          transTex: !0,
          harvestType: "rock"
        },
        Bricks: {
          displayName: {
            translationKey: "item:bricks"
          },
          ttb: 2400,
          textureInfo: "brick",
          harvestType: "rock"
        },
        "Stone Bricks": {
          displayName: {
            translationKey: "item:stoneBricks"
          },
          ttb: 1800,
          textureInfo: "stonebrick",
          harvestType: "rock"
        },
        "Dark Red Brick": {
          displayName: {
            translationKey: "item:darkRedBrick"
          },
          ttb: 2400,
          textureInfo: "nether_brick",
          harvestType: "rock"
        },
        "Dark Red Stone": {
          displayName: {
            translationKey: "item:darkRedStone"
          },
          ttb: 1200,
          textureInfo: "netherrack",
          harvestType: "rock"
        },
        "Block of Quartz": {
          displayName: {
            translationKey: "item:blockOfQuartz"
          },
          ttb: 960,
          textureInfo: "quartz_block_side",
          harvestType: "rock"
        },
        "Chiseled Block of Quartz": {
          displayName: {
            translationKey: "item:chiseledBlockOfQuartz"
          },
          ttb: 960,
          textureInfo: "quartz_block_chiseled",
          harvestType: "rock"
        },
        "Engraved Stone": {
          displayName: {
            translationKey: "item:engravedStone"
          },
          ttb: 1800,
          textureInfo: "stonebrick_carved",
          harvestType: "rock"
        },
        "Mossy Stone Bricks": {
          displayName: {
            translationKey: "item:mossyStoneBricks"
          },
          ttb: 1800,
          textureInfo: "stonebrick_mossy",
          harvestType: "rock"
        },
        "Cracked Stone Bricks": {
          displayName: {
            translationKey: "item:crackedStoneBricks"
          },
          ttb: 1800,
          textureInfo: "stonebrick_cracked",
          harvestType: "rock"
        },
        "Smooth Sandstone": {
          displayName: {
            translationKey: "item:smoothSandstone"
          },
          ttb: 960,
          textureInfo: "sandstone_top",
          harvestType: "rock"
        },
        "Engraved Sandstone": {
          displayName: {
            translationKey: "item:engravedSandstone"
          },
          ttb: 960,
          textureInfo: "chiseled_sandstone",
          harvestType: "rock"
        },
        Ice: {
          displayName: {
            translationKey: "item:ice"
          },
          ttb: 1200,
          textureInfo: "ice",
          harvestType: "rock",
          harvestLevel: 0,
          stoodOnSpeedMultiplier: 1.4
        },
        Obsidian: {
          displayName: {
            translationKey: "item:obsidian"
          },
          ttb: 4e4,
          textureInfo: "obsidian",
          harvestType: "rock",
          harvestLevel: 5
        },
        "Hay Bale": {
          displayName: {
            translationKey: "item:hayBale"
          },
          ttb: 600,
          textureInfo: "hay_block_side",
          harvestType: "cuttable"
        },
        Sponge: {
          displayName: {
            translationKey: "item:sponge"
          },
          ttb: 720,
          textureInfo: "sponge",
          harvestType: "granule"
        },
        Beacon: {
          displayName: {
            translationKey: "item:beacon"
          },
          ttb: 3600,
          textureInfo: "beacon",
          harvestType: "rock",
          Pq: [5, 14, 14]
        },
        temp: {
          ttb: 1e3,
          harvestType: "rock"
        },
        "Golden Decoration": {
          displayName: {
            translationKey: "item:goldenDecoration"
          },
          ttb: 1e3,
          textureInfo: "glowstone",
          harvestType: "rock",
          Pq: [15, 15, 13]
        },
        "Moonstone Explosive": {
          displayName: {
            translationKey: "item:moonstoneExplosive"
          },
          ttb: 50,
          textureInfo: ["moonstone_explosive_side", "moonstone_explosive_top"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          harvestType: "cuttable",
          description: {
            translationKey: "item:moonstoneExplosiveDescription"
          }
        },
        Bedrock: {
          displayName: {
            translationKey: "item:bedrock"
          },
          ttb: 5e11,
          textureInfo: "bedrock",
          soundType: {
            break: "stone",
            place: "stone"
          }
        },
        "Smooth Double Stone Slab": {
          displayName: {
            translationKey: "item:smoothDoubleStoneSlab"
          },
          ttb: 2400,
          textureInfo: "smooth_stone",
          harvestType: "rock"
        },
        Cactus: {
          displayName: {
            translationKey: "item:cactus"
          },
          ttb: 300,
          textureInfo: "small_cactus",
          model: "CentreCross",
          heldItemScale: .5,
          solid: !1,
          harvestType: "cuttable"
        },
        Grass: {
          displayName: {
            translationKey: "item:grass"
          },
          ttb: 1,
          textureInfo: "tallgrass",
          model: "CentreCross",
          heldItemScale: .5,
          solid: !1,
          drops: null,
          harvestType: "cuttable",
          specialToolDrop: {
            tool: "Shears",
            drops: "Grass"
          },
          canBePlacedOver: !0
        },
        Dandelion: {
          displayName: {
            translationKey: "item:dandelion"
          },
          ttb: 300,
          textureInfo: "dandelion",
          model: "CentreCross",
          heldItemScale: .5,
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "dandelion"
        },
        Poppy: {
          displayName: {
            translationKey: "item:poppy"
          },
          ttb: 300,
          textureInfo: "poppy",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "poppy"
        },
        "Red Tulip": {
          displayName: {
            translationKey: "item:redTulip"
          },
          ttb: 300,
          textureInfo: "red_tulip",
          model: "CentreCross",
          heldItemScale: .5,
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "red_tulip"
        },
        "Pink Tulip": {
          displayName: {
            translationKey: "item:pinkTulip"
          },
          ttb: 300,
          textureInfo: "pink_tulip",
          model: "CentreCross",
          heldItemScale: .5,
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "pink_tulip"
        },
        "White Tulip": {
          displayName: {
            translationKey: "item:whiteTulip"
          },
          ttb: 300,
          textureInfo: "white_tulip",
          model: "CentreCross",
          heldItemScale: .5,
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "white_tulip"
        },
        "Orange Tulip": {
          displayName: {
            translationKey: "item:orangeTulip"
          },
          ttb: 300,
          textureInfo: "orange_tulip",
          model: "CentreCross",
          heldItemScale: .5,
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "orange_tulip"
        },
        Daisy: {
          displayName: {
            translationKey: "item:daisy"
          },
          ttb: 300,
          textureInfo: "oxeye_daisy",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "oxeye_daisy"
        },
        Bluebell: {
          displayName: {
            translationKey: "item:bluebell"
          },
          ttb: 300,
          textureInfo: "blue_orchid",
          model: "CentreCross",
          heldItemScale: .5,
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "blue_orchid"
        },
        "Forget-me-not": {
          displayName: {
            translationKey: "item:forget-Me-Not"
          },
          ttb: 300,
          textureInfo: "cornflower",
          model: "CentreCross",
          heldItemScale: .5,
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "cornflower"
        },
        Allium: {
          displayName: {
            translationKey: "item:allium"
          },
          ttb: 300,
          textureInfo: "allium",
          model: "CentreCross",
          heldItemScale: .5,
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "allium"
        },
        "Azure Bluet": {
          displayName: {
            translationKey: "item:azureBluet"
          },
          ttb: 300,
          textureInfo: "azure_bluet",
          model: "CentreCross",
          heldItemScale: .5,
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "azure_bluet"
        },
        "Lily of the Valley": {
          displayName: {
            translationKey: "item:lilyOfTheValley"
          },
          ttb: 300,
          textureInfo: "lily_of_the_valley",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "lily_of_the_valley"
        },
        "Shadow Rose": {
          displayName: {
            translationKey: "item:shadowRose"
          },
          ttb: 300,
          textureInfo: "shadow_rose",
          model: "CentreCross",
          heldItemScale: .5,
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "shadow_rose"
        },
        ...(0, yd.Fb)("Furnace", {
          displayName: {
            translationKey: "item:furnace"
          },
          ttb: 4200,
          harvestType: "rock",
          rootMetaDesc: "Furnace|meta|rot1",
          description: {
            translationKey: "item:furnaceDescription"
          },
          Pq: [8, 5, 2],
          ...wd("Furnace", "furnace")
        }),
        ...(0, yd.Fb)("Workbench", {
          displayName: {
            translationKey: "item:workbench"
          },
          ttb: 3e3,
          harvestType: "wood",
          rootMetaDesc: "Workbench|meta|rot1",
          description: {
            translationKey: "item:workbenchDescription"
          },
          ...wd("Workbench", "workbench")
        }),
        "Block of Diamond": {
          displayName: {
            translationKey: "item:blockOfDiamond"
          },
          ttb: 6750,
          textureInfo: "diamond_block",
          harvestType: "rock"
        },
        "Maple Door": {
          displayName: {
            translationKey: "item:mapleDoor"
          },
          ttb: 3600,
          itemTexture: "maple_door",
          model: "door",
          harvestType: "wood",
          rootMetaDesc: "Maple Door|meta|rot1|closed",
          particlesIgnoreBlack: !0,
          blockModel: "Maple Door"
        },
        "Maple Door|meta|rot1|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Maple Door|meta|rot2|closed": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Maple Door|meta|rot2|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Maple Door|meta|rot3|closed": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Maple Door|meta|rot3|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Maple Door|meta|rot4|closed": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Maple Door|meta|rot4|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "_Maple Door Top": {
          ttb: 3600,
          itemTexture: "maple_door",
          harvestType: "wood",
          model: "door",
          drops: "Maple Door",
          rootMetaDesc: "_Maple Door Top|meta|rot1|closed",
          particlesIgnoreBlack: !0,
          blockModel: "_Maple Door Top"
        },
        "_Maple Door Top|meta|rot1|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Maple Door"
        },
        "_Maple Door Top|meta|rot2|closed": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Maple Door"
        },
        "_Maple Door Top|meta|rot2|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Maple Door"
        },
        "_Maple Door Top|meta|rot3|closed": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Maple Door"
        },
        "_Maple Door Top|meta|rot3|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Maple Door"
        },
        "_Maple Door Top|meta|rot4|closed": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Maple Door"
        },
        "_Maple Door Top|meta|rot4|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Maple Door"
        },
        "Maple Trapdoor": {
          displayName: {
            translationKey: "item:mapleTrapdoor"
          },
          ttb: 2800,
          itemTexture: "maple_trapdoor",
          model: "trapdoor",
          harvestType: "wood",
          rootMetaDesc: "Maple Trapdoor|meta|rot1|closed",
          blockModel: "Maple Trapdoor",
          heldItemScale: .5,
          blockModelItem: !0
        },
        "Maple Trapdoor|meta|rot1|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Maple Trapdoor|meta|rot2|closed": {
          ttb: 2800,
          harvestType: "wood"
        },
        "Maple Trapdoor|meta|rot2|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Maple Trapdoor|meta|rot3|closed": {
          ttb: 2800,
          harvestType: "wood"
        },
        "Maple Trapdoor|meta|rot3|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Maple Trapdoor|meta|rot4|closed": {
          ttb: 2800,
          harvestType: "wood"
        },
        "Maple Trapdoor|meta|rot4|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Aspen Sapling": {
          displayName: {
            translationKey: "item:aspenSapling"
          },
          ttb: 1,
          textureInfo: "aspen_sapling",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "aspen_sapling"
        },
        "Maple Sapling": {
          displayName: {
            translationKey: "item:mapleSapling"
          },
          ttb: 1,
          textureInfo: "maple_sapling",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "maple_sapling"
        },
        "Jungle Sapling": {
          displayName: {
            translationKey: "item:jungleSapling"
          },
          ttb: 1,
          textureInfo: "jungle_sapling",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "jungle_sapling"
        },
        "Plum Sapling": {
          displayName: {
            translationKey: "item:plumSapling"
          },
          ttb: 1,
          textureInfo: "plum_sapling",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "plum_sapling"
        },
        "Pine Sapling": {
          displayName: {
            translationKey: "item:pineSapling"
          },
          ttb: 1,
          textureInfo: "pine_sapling",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "pine_sapling"
        },
        "Cedar Sapling": {
          displayName: {
            translationKey: "item:cedarSapling"
          },
          ttb: 1,
          textureInfo: "cedar_sapling",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "cedar_sapling"
        },
        "Maple Log|TreeBase|Maple": {
          ttb: 2400,
          textureInfo: "log_maple",
          harvestType: "wood",
          drops: "Maple Log"
        },
        ...(0, yd.Hb)("Chest", {
          ...Ud,
          textureInfo: ["chest_front", "chest_side", "chest_top[rot[1", "chest_top[rot[2", "chest_top[rot[3", "chest_top[rot[4", "chest_back"],
          rootMetaDesc: "Chest|meta|rot1"
        }, [
          [1, 1, 2, 2, 0, 6],
          [0, 6, 3, 3, 1, 1],
          [1, 1, 4, 4, 6, 0],
          [6, 0, 5, 5, 1, 1]
        ]),
        "Pine Leaves|TreeCanopy": {
          ttb: 350,
          textureInfo: "leaves_pine",
          harvestType: "cuttable",
          drops: "Pine Leaves"
        },
        "Aspen Leaves|TreeCanopy": {
          ttb: 350,
          textureInfo: "leaves_aspen",
          harvestType: "cuttable",
          drops: "Aspen Leaves"
        },
        "Maple Leaves|TreeCanopy": {
          ttb: 350,
          textureInfo: "leaves_maple",
          harvestType: "cuttable",
          drops: "Maple Leaves"
        },
        "Jungle Leaves|TreeCanopy": {
          ttb: 350,
          textureInfo: "leaves_jungle",
          harvestType: "cuttable",
          drops: "Jungle Leaves"
        },
        Protector: {
          displayName: {
            translationKey: "item:protector"
          },
          ttb: 5e3,
          textureInfo: "protector",
          harvestType: "rock",
          description: {
            translationKey: "item:protectorDescription"
          },
          altActionable: !0
        },
        "Fat Cactus": {
          displayName: {
            translationKey: "item:fatCactus"
          },
          ttb: 400,
          textureInfo: "cactus_top",
          harvestType: "cuttable",
          damage: 22
        },
        "Dry Fat Cactus": {
          displayName: {
            translationKey: "item:dryFatCactus"
          },
          ttb: 400,
          textureInfo: "cactus_dry",
          harvestType: "cuttable",
          damage: 27
        },
        ...(0, yd.Fb)("Maple Ladder", {
          displayName: {
            translationKey: "item:ladder"
          },
          ttb: 1e3,
          itemTexture: "ladder_maple",
          model: "rotatableOffset",
          harvestType: "wood",
          rootMetaDesc: "Maple Ladder|meta|rot1",
          solid: !1,
          blockModel: "Maple Ladder",
          blockModelItem: !0
        }),
        ...(0, yd.Fb)("Vines", {
          displayName: {
            translationKey: "item:vines"
          },
          ttb: 225,
          itemTexture: "vine_coloured",
          harvestType: "cuttable",
          model: "rotatableOffset",
          solid: !1,
          rootMetaDesc: "Vines|meta|rot1",
          blockModel: "Vines",
          modelScale: 10,
          heldItemScale: 10,
          blockModelItem: !0,
          particlesIgnoreBlack: !0
        }),
        "Dirt|GrassRoots": {
          ttb: 600,
          textureInfo: "dirt",
          harvestType: "granule"
        },
        ...(0, yd.Fb)("Iron Ladder", {
          displayName: {
            translationKey: "item:ironLadder"
          },
          ttb: 1800,
          itemTexture: "iron_ladder",
          model: "rotatableOffset",
          harvestType: "rock",
          rootMetaDesc: "Iron Ladder|meta|rot1",
          solid: !1,
          blockModel: "Iron Ladder",
          blockModelItem: !0,
          particlesIgnoreBlack: !0
        }),
        "White Planks": {
          displayName: {
            translationKey: "item:whitePlanks"
          },
          ttb: 1800,
          textureInfo: "white_planks",
          harvestType: "wood"
        },
        "Orange Planks": {
          displayName: {
            translationKey: "item:orangePlanks"
          },
          ttb: 1800,
          textureInfo: "orange_planks",
          harvestType: "wood"
        },
        "Magenta Planks": {
          displayName: {
            translationKey: "item:magentaPlanks"
          },
          ttb: 1800,
          textureInfo: "magenta_planks",
          harvestType: "wood"
        },
        "Light Blue Planks": {
          displayName: {
            translationKey: "item:lightBluePlanks"
          },
          ttb: 1800,
          textureInfo: "light_blue_planks",
          harvestType: "wood"
        },
        "Yellow Planks": {
          displayName: {
            translationKey: "item:yellowPlanks"
          },
          ttb: 1800,
          textureInfo: "yellow_planks",
          harvestType: "wood"
        },
        "Lime Planks": {
          displayName: {
            translationKey: "item:limePlanks"
          },
          ttb: 1800,
          textureInfo: "lime_planks",
          harvestType: "wood"
        },
        "Pink Planks": {
          displayName: {
            translationKey: "item:pinkPlanks"
          },
          ttb: 1800,
          textureInfo: "pink_planks",
          harvestType: "wood"
        },
        "Gray Planks": {
          displayName: {
            translationKey: "item:grayPlanks"
          },
          ttb: 1800,
          textureInfo: "gray_planks",
          harvestType: "wood"
        },
        "Light Gray Planks": {
          displayName: {
            translationKey: "item:lightGrayPlanks"
          },
          ttb: 1800,
          textureInfo: "light_gray_planks",
          harvestType: "wood"
        },
        "Cyan Planks": {
          displayName: {
            translationKey: "item:cyanPlanks"
          },
          ttb: 1800,
          textureInfo: "cyan_planks",
          harvestType: "wood"
        },
        "Purple Planks": {
          displayName: {
            translationKey: "item:purplePlanks"
          },
          ttb: 1800,
          textureInfo: "purple_planks",
          harvestType: "wood"
        },
        "Blue Planks": {
          displayName: {
            translationKey: "item:bluePlanks"
          },
          ttb: 1800,
          textureInfo: "blue_planks",
          harvestType: "wood"
        },
        "Brown Planks": {
          displayName: {
            translationKey: "item:brownPlanks"
          },
          ttb: 1800,
          textureInfo: "brown_planks",
          harvestType: "wood"
        },
        "Green Planks": {
          displayName: {
            translationKey: "item:greenPlanks"
          },
          ttb: 1800,
          textureInfo: "green_planks",
          harvestType: "wood"
        },
        "Red Planks": {
          displayName: {
            translationKey: "item:redPlanks"
          },
          ttb: 1800,
          textureInfo: "red_planks",
          harvestType: "wood"
        },
        "Black Planks": {
          displayName: {
            translationKey: "item:blackPlanks"
          },
          ttb: 1800,
          textureInfo: "black_planks",
          harvestType: "wood"
        },
        "Artisan Bench": {
          displayName: {
            translationKey: "item:artisanBench"
          },
          ttb: 3e3,
          harvestType: "wood",
          description: {
            translationKey: "item:artisanBenchDescription"
          },
          ...wd("Artisan Bench", "artisan_bench", {
            rotatable: !1
          })
        },
        "White Ceramic": {
          displayName: {
            translationKey: "item:whiteCeramic"
          },
          ttb: 1500,
          textureInfo: ["white_glazed_terracotta[rot[1", "white_glazed_terracotta[rot[2", "white_glazed_terracotta[rot[3", "white_glazed_terracotta[rot[4"],
          texturePerSide: [0, 2, 2, 2, 3, 1],
          harvestType: "rock",
          rootMetaDesc: "White Ceramic|meta|rot1"
        },
        "White Ceramic|meta|rot2": {
          ttb: 1500,
          textureInfo: ["white_glazed_terracotta[rot[1", "white_glazed_terracotta[rot[2", "white_glazed_terracotta[rot[3", "white_glazed_terracotta[rot[4"],
          texturePerSide: [3, 1, 3, 3, 2, 0],
          harvestType: "rock"
        },
        "White Ceramic|meta|rot3": {
          ttb: 1500,
          textureInfo: ["white_glazed_terracotta[rot[1", "white_glazed_terracotta[rot[2", "white_glazed_terracotta[rot[3", "white_glazed_terracotta[rot[4"],
          texturePerSide: [2, 0, 0, 0, 1, 3],
          harvestType: "rock"
        },
        "White Ceramic|meta|rot4": {
          ttb: 1500,
          textureInfo: ["white_glazed_terracotta[rot[1", "white_glazed_terracotta[rot[2", "white_glazed_terracotta[rot[3", "white_glazed_terracotta[rot[4"],
          texturePerSide: [1, 3, 1, 1, 0, 2],
          harvestType: "rock"
        },
        "Orange Ceramic": {
          displayName: {
            translationKey: "item:orangeCeramic"
          },
          ttb: 1500,
          textureInfo: ["orange_glazed_terracotta[rot[1", "orange_glazed_terracotta[rot[2", "orange_glazed_terracotta[rot[3", "orange_glazed_terracotta[rot[4"],
          texturePerSide: [0, 2, 2, 2, 3, 1],
          harvestType: "rock",
          rootMetaDesc: "Orange Ceramic|meta|rot1"
        },
        "Orange Ceramic|meta|rot2": {
          ttb: 1500,
          textureInfo: ["orange_glazed_terracotta[rot[1", "orange_glazed_terracotta[rot[2", "orange_glazed_terracotta[rot[3", "orange_glazed_terracotta[rot[4"],
          texturePerSide: [3, 1, 3, 3, 2, 0],
          harvestType: "rock"
        },
        "Orange Ceramic|meta|rot3": {
          ttb: 1500,
          textureInfo: ["orange_glazed_terracotta[rot[1", "orange_glazed_terracotta[rot[2", "orange_glazed_terracotta[rot[3", "orange_glazed_terracotta[rot[4"],
          texturePerSide: [2, 0, 0, 0, 1, 3],
          harvestType: "rock"
        },
        "Orange Ceramic|meta|rot4": {
          ttb: 1500,
          textureInfo: ["orange_glazed_terracotta[rot[1", "orange_glazed_terracotta[rot[2", "orange_glazed_terracotta[rot[3", "orange_glazed_terracotta[rot[4"],
          texturePerSide: [1, 3, 1, 1, 0, 2],
          harvestType: "rock"
        },
        "Magenta Ceramic": {
          displayName: {
            translationKey: "item:magentaCeramic"
          },
          ttb: 1500,
          textureInfo: ["magenta_glazed_terracotta[rot[1", "magenta_glazed_terracotta[rot[2", "magenta_glazed_terracotta[rot[3", "magenta_glazed_terracotta[rot[4"],
          texturePerSide: [0, 2, 2, 2, 3, 1],
          harvestType: "rock",
          rootMetaDesc: "Magenta Ceramic|meta|rot1"
        },
        "Magenta Ceramic|meta|rot2": {
          ttb: 1500,
          textureInfo: ["magenta_glazed_terracotta[rot[1", "magenta_glazed_terracotta[rot[2", "magenta_glazed_terracotta[rot[3", "magenta_glazed_terracotta[rot[4"],
          texturePerSide: [3, 1, 3, 3, 2, 0],
          harvestType: "rock"
        },
        "Magenta Ceramic|meta|rot3": {
          ttb: 1500,
          textureInfo: ["magenta_glazed_terracotta[rot[1", "magenta_glazed_terracotta[rot[2", "magenta_glazed_terracotta[rot[3", "magenta_glazed_terracotta[rot[4"],
          texturePerSide: [2, 0, 0, 0, 1, 3],
          harvestType: "rock"
        },
        "Magenta Ceramic|meta|rot4": {
          ttb: 1500,
          textureInfo: ["magenta_glazed_terracotta[rot[1", "magenta_glazed_terracotta[rot[2", "magenta_glazed_terracotta[rot[3", "magenta_glazed_terracotta[rot[4"],
          texturePerSide: [1, 3, 1, 1, 0, 2],
          harvestType: "rock"
        },
        "Light Blue Ceramic": {
          displayName: {
            translationKey: "item:lightBlueCeramic"
          },
          ttb: 1500,
          textureInfo: ["light_blue_glazed_terracotta[rot[1", "light_blue_glazed_terracotta[rot[2", "light_blue_glazed_terracotta[rot[3", "light_blue_glazed_terracotta[rot[4"],
          texturePerSide: [0, 2, 2, 2, 3, 1],
          harvestType: "rock",
          rootMetaDesc: "Light Blue Ceramic|meta|rot1"
        },
        "Light Blue Ceramic|meta|rot2": {
          ttb: 1500,
          textureInfo: ["light_blue_glazed_terracotta[rot[1", "light_blue_glazed_terracotta[rot[2", "light_blue_glazed_terracotta[rot[3", "light_blue_glazed_terracotta[rot[4"],
          texturePerSide: [3, 1, 3, 3, 2, 0],
          harvestType: "rock"
        },
        "Light Blue Ceramic|meta|rot3": {
          ttb: 1500,
          textureInfo: ["light_blue_glazed_terracotta[rot[1", "light_blue_glazed_terracotta[rot[2", "light_blue_glazed_terracotta[rot[3", "light_blue_glazed_terracotta[rot[4"],
          texturePerSide: [2, 0, 0, 0, 1, 3],
          harvestType: "rock"
        },
        "Light Blue Ceramic|meta|rot4": {
          ttb: 1500,
          textureInfo: ["light_blue_glazed_terracotta[rot[1", "light_blue_glazed_terracotta[rot[2", "light_blue_glazed_terracotta[rot[3", "light_blue_glazed_terracotta[rot[4"],
          texturePerSide: [1, 3, 1, 1, 0, 2],
          harvestType: "rock"
        },
        "Yellow Ceramic": {
          displayName: {
            translationKey: "item:yellowCeramic"
          },
          ttb: 1500,
          textureInfo: ["yellow_glazed_terracotta[rot[1", "yellow_glazed_terracotta[rot[2", "yellow_glazed_terracotta[rot[3", "yellow_glazed_terracotta[rot[4"],
          texturePerSide: [0, 2, 2, 2, 3, 1],
          harvestType: "rock",
          rootMetaDesc: "Yellow Ceramic|meta|rot1"
        },
        "Yellow Ceramic|meta|rot2": {
          ttb: 1500,
          textureInfo: ["yellow_glazed_terracotta[rot[1", "yellow_glazed_terracotta[rot[2", "yellow_glazed_terracotta[rot[3", "yellow_glazed_terracotta[rot[4"],
          texturePerSide: [3, 1, 3, 3, 2, 0],
          harvestType: "rock"
        },
        "Yellow Ceramic|meta|rot3": {
          ttb: 1500,
          textureInfo: ["yellow_glazed_terracotta[rot[1", "yellow_glazed_terracotta[rot[2", "yellow_glazed_terracotta[rot[3", "yellow_glazed_terracotta[rot[4"],
          texturePerSide: [2, 0, 0, 0, 1, 3],
          harvestType: "rock"
        },
        "Yellow Ceramic|meta|rot4": {
          ttb: 1500,
          textureInfo: ["yellow_glazed_terracotta[rot[1", "yellow_glazed_terracotta[rot[2", "yellow_glazed_terracotta[rot[3", "yellow_glazed_terracotta[rot[4"],
          texturePerSide: [1, 3, 1, 1, 0, 2],
          harvestType: "rock"
        },
        "Lime Ceramic": {
          displayName: {
            translationKey: "item:limeCeramic"
          },
          ttb: 1500,
          textureInfo: ["lime_glazed_terracotta[rot[1", "lime_glazed_terracotta[rot[2", "lime_glazed_terracotta[rot[3", "lime_glazed_terracotta[rot[4"],
          texturePerSide: [0, 2, 2, 2, 3, 1],
          harvestType: "rock",
          rootMetaDesc: "Lime Ceramic|meta|rot1"
        },
        "Lime Ceramic|meta|rot2": {
          ttb: 1500,
          textureInfo: ["lime_glazed_terracotta[rot[1", "lime_glazed_terracotta[rot[2", "lime_glazed_terracotta[rot[3", "lime_glazed_terracotta[rot[4"],
          texturePerSide: [3, 1, 3, 3, 2, 0],
          harvestType: "rock"
        },
        "Lime Ceramic|meta|rot3": {
          ttb: 1500,
          textureInfo: ["lime_glazed_terracotta[rot[1", "lime_glazed_terracotta[rot[2", "lime_glazed_terracotta[rot[3", "lime_glazed_terracotta[rot[4"],
          texturePerSide: [2, 0, 0, 0, 1, 3],
          harvestType: "rock"
        },
        "Lime Ceramic|meta|rot4": {
          ttb: 1500,
          textureInfo: ["lime_glazed_terracotta[rot[1", "lime_glazed_terracotta[rot[2", "lime_glazed_terracotta[rot[3", "lime_glazed_terracotta[rot[4"],
          texturePerSide: [1, 3, 1, 1, 0, 2],
          harvestType: "rock"
        },
        "Pink Ceramic": {
          displayName: {
            translationKey: "item:pinkCeramic"
          },
          ttb: 1500,
          textureInfo: ["pink_glazed_terracotta[rot[1", "pink_glazed_terracotta[rot[2", "pink_glazed_terracotta[rot[3", "pink_glazed_terracotta[rot[4"],
          texturePerSide: [0, 2, 2, 2, 3, 1],
          harvestType: "rock",
          rootMetaDesc: "Pink Ceramic|meta|rot1"
        },
        "Pink Ceramic|meta|rot2": {
          ttb: 1500,
          textureInfo: ["pink_glazed_terracotta[rot[1", "pink_glazed_terracotta[rot[2", "pink_glazed_terracotta[rot[3", "pink_glazed_terracotta[rot[4"],
          texturePerSide: [3, 1, 3, 3, 2, 0],
          harvestType: "rock"
        },
        "Pink Ceramic|meta|rot3": {
          ttb: 1500,
          textureInfo: ["pink_glazed_terracotta[rot[1", "pink_glazed_terracotta[rot[2", "pink_glazed_terracotta[rot[3", "pink_glazed_terracotta[rot[4"],
          texturePerSide: [2, 0, 0, 0, 1, 3],
          harvestType: "rock"
        },
        "Pink Ceramic|meta|rot4": {
          ttb: 1500,
          textureInfo: ["pink_glazed_terracotta[rot[1", "pink_glazed_terracotta[rot[2", "pink_glazed_terracotta[rot[3", "pink_glazed_terracotta[rot[4"],
          texturePerSide: [1, 3, 1, 1, 0, 2],
          harvestType: "rock"
        },
        "Gray Ceramic": {
          displayName: {
            translationKey: "item:grayCeramic"
          },
          ttb: 1500,
          textureInfo: ["gray_glazed_terracotta[rot[1", "gray_glazed_terracotta[rot[2", "gray_glazed_terracotta[rot[3", "gray_glazed_terracotta[rot[4"],
          texturePerSide: [0, 2, 2, 2, 3, 1],
          harvestType: "rock",
          rootMetaDesc: "Gray Ceramic|meta|rot1"
        },
        "Gray Ceramic|meta|rot2": {
          ttb: 1500,
          textureInfo: ["gray_glazed_terracotta[rot[1", "gray_glazed_terracotta[rot[2", "gray_glazed_terracotta[rot[3", "gray_glazed_terracotta[rot[4"],
          texturePerSide: [3, 1, 3, 3, 2, 0],
          harvestType: "rock"
        },
        "Gray Ceramic|meta|rot3": {
          ttb: 1500,
          textureInfo: ["gray_glazed_terracotta[rot[1", "gray_glazed_terracotta[rot[2", "gray_glazed_terracotta[rot[3", "gray_glazed_terracotta[rot[4"],
          texturePerSide: [2, 0, 0, 0, 1, 3],
          harvestType: "rock"
        },
        "Gray Ceramic|meta|rot4": {
          ttb: 1500,
          textureInfo: ["gray_glazed_terracotta[rot[1", "gray_glazed_terracotta[rot[2", "gray_glazed_terracotta[rot[3", "gray_glazed_terracotta[rot[4"],
          texturePerSide: [1, 3, 1, 1, 0, 2],
          harvestType: "rock"
        },
        "Light Gray Ceramic": {
          displayName: {
            translationKey: "item:lightGrayCeramic"
          },
          ttb: 1500,
          textureInfo: ["light_gray_glazed_terracotta[rot[1", "light_gray_glazed_terracotta[rot[2", "light_gray_glazed_terracotta[rot[3", "light_gray_glazed_terracotta[rot[4"],
          texturePerSide: [0, 2, 2, 2, 3, 1],
          harvestType: "rock",
          rootMetaDesc: "Light Gray Ceramic|meta|rot1"
        },
        "Light Gray Ceramic|meta|rot2": {
          ttb: 1500,
          textureInfo: ["light_gray_glazed_terracotta[rot[1", "light_gray_glazed_terracotta[rot[2", "light_gray_glazed_terracotta[rot[3", "light_gray_glazed_terracotta[rot[4"],
          texturePerSide: [3, 1, 3, 3, 2, 0],
          harvestType: "rock"
        },
        "Light Gray Ceramic|meta|rot3": {
          ttb: 1500,
          textureInfo: ["light_gray_glazed_terracotta[rot[1", "light_gray_glazed_terracotta[rot[2", "light_gray_glazed_terracotta[rot[3", "light_gray_glazed_terracotta[rot[4"],
          texturePerSide: [2, 0, 0, 0, 1, 3],
          harvestType: "rock"
        },
        "Light Gray Ceramic|meta|rot4": {
          ttb: 1500,
          textureInfo: ["light_gray_glazed_terracotta[rot[1", "light_gray_glazed_terracotta[rot[2", "light_gray_glazed_terracotta[rot[3", "light_gray_glazed_terracotta[rot[4"],
          texturePerSide: [1, 3, 1, 1, 0, 2],
          harvestType: "rock"
        },
        "Cyan Ceramic": {
          displayName: {
            translationKey: "item:cyanCeramic"
          },
          ttb: 1500,
          textureInfo: ["cyan_glazed_terracotta[rot[1", "cyan_glazed_terracotta[rot[2", "cyan_glazed_terracotta[rot[3", "cyan_glazed_terracotta[rot[4"],
          texturePerSide: [0, 2, 2, 2, 3, 1],
          harvestType: "rock",
          rootMetaDesc: "Cyan Ceramic|meta|rot1"
        },
        "Cyan Ceramic|meta|rot2": {
          ttb: 1500,
          textureInfo: ["cyan_glazed_terracotta[rot[1", "cyan_glazed_terracotta[rot[2", "cyan_glazed_terracotta[rot[3", "cyan_glazed_terracotta[rot[4"],
          texturePerSide: [3, 1, 3, 3, 2, 0],
          harvestType: "rock"
        },
        "Cyan Ceramic|meta|rot3": {
          ttb: 1500,
          textureInfo: ["cyan_glazed_terracotta[rot[1", "cyan_glazed_terracotta[rot[2", "cyan_glazed_terracotta[rot[3", "cyan_glazed_terracotta[rot[4"],
          texturePerSide: [2, 0, 0, 0, 1, 3],
          harvestType: "rock"
        },
        "Cyan Ceramic|meta|rot4": {
          ttb: 1500,
          textureInfo: ["cyan_glazed_terracotta[rot[1", "cyan_glazed_terracotta[rot[2", "cyan_glazed_terracotta[rot[3", "cyan_glazed_terracotta[rot[4"],
          texturePerSide: [1, 3, 1, 1, 0, 2],
          harvestType: "rock"
        },
        "Purple Ceramic": {
          displayName: {
            translationKey: "item:purpleCeramic"
          },
          ttb: 1500,
          textureInfo: ["purple_glazed_terracotta[rot[1", "purple_glazed_terracotta[rot[2", "purple_glazed_terracotta[rot[3", "purple_glazed_terracotta[rot[4"],
          texturePerSide: [0, 2, 2, 2, 3, 1],
          harvestType: "rock",
          rootMetaDesc: "Purple Ceramic|meta|rot1"
        },
        "Purple Ceramic|meta|rot2": {
          ttb: 1500,
          textureInfo: ["purple_glazed_terracotta[rot[1", "purple_glazed_terracotta[rot[2", "purple_glazed_terracotta[rot[3", "purple_glazed_terracotta[rot[4"],
          texturePerSide: [3, 1, 3, 3, 2, 0],
          harvestType: "rock"
        },
        "Purple Ceramic|meta|rot3": {
          ttb: 1500,
          textureInfo: ["purple_glazed_terracotta[rot[1", "purple_glazed_terracotta[rot[2", "purple_glazed_terracotta[rot[3", "purple_glazed_terracotta[rot[4"],
          texturePerSide: [2, 0, 0, 0, 1, 3],
          harvestType: "rock"
        },
        "Purple Ceramic|meta|rot4": {
          ttb: 1500,
          textureInfo: ["purple_glazed_terracotta[rot[1", "purple_glazed_terracotta[rot[2", "purple_glazed_terracotta[rot[3", "purple_glazed_terracotta[rot[4"],
          texturePerSide: [1, 3, 1, 1, 0, 2],
          harvestType: "rock"
        },
        "Blue Ceramic": {
          displayName: {
            translationKey: "item:blueCeramic"
          },
          ttb: 1500,
          textureInfo: ["blue_glazed_terracotta[rot[1", "blue_glazed_terracotta[rot[2", "blue_glazed_terracotta[rot[3", "blue_glazed_terracotta[rot[4"],
          texturePerSide: [0, 2, 2, 2, 3, 1],
          harvestType: "rock",
          rootMetaDesc: "Blue Ceramic|meta|rot1"
        },
        "Blue Ceramic|meta|rot2": {
          ttb: 1500,
          textureInfo: ["blue_glazed_terracotta[rot[1", "blue_glazed_terracotta[rot[2", "blue_glazed_terracotta[rot[3", "blue_glazed_terracotta[rot[4"],
          texturePerSide: [3, 1, 3, 3, 2, 0],
          harvestType: "rock"
        },
        "Blue Ceramic|meta|rot3": {
          ttb: 1500,
          textureInfo: ["blue_glazed_terracotta[rot[1", "blue_glazed_terracotta[rot[2", "blue_glazed_terracotta[rot[3", "blue_glazed_terracotta[rot[4"],
          texturePerSide: [2, 0, 0, 0, 1, 3],
          harvestType: "rock"
        },
        "Blue Ceramic|meta|rot4": {
          ttb: 1500,
          textureInfo: ["blue_glazed_terracotta[rot[1", "blue_glazed_terracotta[rot[2", "blue_glazed_terracotta[rot[3", "blue_glazed_terracotta[rot[4"],
          texturePerSide: [1, 3, 1, 1, 0, 2],
          harvestType: "rock"
        },
        "Brown Ceramic": {
          displayName: {
            translationKey: "item:brownCeramic"
          },
          ttb: 1500,
          textureInfo: ["brown_glazed_terracotta[rot[1", "brown_glazed_terracotta[rot[2", "brown_glazed_terracotta[rot[3", "brown_glazed_terracotta[rot[4"],
          texturePerSide: [0, 2, 2, 2, 3, 1],
          harvestType: "rock",
          rootMetaDesc: "Brown Ceramic|meta|rot1"
        },
        "Brown Ceramic|meta|rot2": {
          ttb: 1500,
          textureInfo: ["brown_glazed_terracotta[rot[1", "brown_glazed_terracotta[rot[2", "brown_glazed_terracotta[rot[3", "brown_glazed_terracotta[rot[4"],
          texturePerSide: [3, 1, 3, 3, 2, 0],
          harvestType: "rock"
        },
        "Brown Ceramic|meta|rot3": {
          ttb: 1500,
          textureInfo: ["brown_glazed_terracotta[rot[1", "brown_glazed_terracotta[rot[2", "brown_glazed_terracotta[rot[3", "brown_glazed_terracotta[rot[4"],
          texturePerSide: [2, 0, 0, 0, 1, 3],
          harvestType: "rock"
        },
        "Brown Ceramic|meta|rot4": {
          ttb: 1500,
          textureInfo: ["brown_glazed_terracotta[rot[1", "brown_glazed_terracotta[rot[2", "brown_glazed_terracotta[rot[3", "brown_glazed_terracotta[rot[4"],
          texturePerSide: [1, 3, 1, 1, 0, 2],
          harvestType: "rock"
        },
        "Green Ceramic": {
          displayName: {
            translationKey: "item:greenCeramic"
          },
          ttb: 1500,
          textureInfo: ["green_glazed_terracotta[rot[1", "green_glazed_terracotta[rot[2", "green_glazed_terracotta[rot[3", "green_glazed_terracotta[rot[4"],
          texturePerSide: [0, 2, 2, 2, 3, 1],
          harvestType: "rock",
          rootMetaDesc: "Green Ceramic|meta|rot1"
        },
        "Green Ceramic|meta|rot2": {
          ttb: 1500,
          textureInfo: ["green_glazed_terracotta[rot[1", "green_glazed_terracotta[rot[2", "green_glazed_terracotta[rot[3", "green_glazed_terracotta[rot[4"],
          texturePerSide: [3, 1, 3, 3, 2, 0],
          harvestType: "rock"
        },
        "Green Ceramic|meta|rot3": {
          ttb: 1500,
          textureInfo: ["green_glazed_terracotta[rot[1", "green_glazed_terracotta[rot[2", "green_glazed_terracotta[rot[3", "green_glazed_terracotta[rot[4"],
          texturePerSide: [2, 0, 0, 0, 1, 3],
          harvestType: "rock"
        },
        "Green Ceramic|meta|rot4": {
          ttb: 1500,
          textureInfo: ["green_glazed_terracotta[rot[1", "green_glazed_terracotta[rot[2", "green_glazed_terracotta[rot[3", "green_glazed_terracotta[rot[4"],
          texturePerSide: [1, 3, 1, 1, 0, 2],
          harvestType: "rock"
        },
        "Red Ceramic": {
          displayName: {
            translationKey: "item:redCeramic"
          },
          ttb: 1500,
          textureInfo: ["red_glazed_terracotta[rot[1", "red_glazed_terracotta[rot[2", "red_glazed_terracotta[rot[3", "red_glazed_terracotta[rot[4"],
          texturePerSide: [0, 2, 2, 2, 3, 1],
          harvestType: "rock",
          rootMetaDesc: "Red Ceramic|meta|rot1"
        },
        "Red Ceramic|meta|rot2": {
          ttb: 1500,
          textureInfo: ["red_glazed_terracotta[rot[1", "red_glazed_terracotta[rot[2", "red_glazed_terracotta[rot[3", "red_glazed_terracotta[rot[4"],
          texturePerSide: [3, 1, 3, 3, 2, 0],
          harvestType: "rock"
        },
        "Red Ceramic|meta|rot3": {
          ttb: 1500,
          textureInfo: ["red_glazed_terracotta[rot[1", "red_glazed_terracotta[rot[2", "red_glazed_terracotta[rot[3", "red_glazed_terracotta[rot[4"],
          texturePerSide: [2, 0, 0, 0, 1, 3],
          harvestType: "rock"
        },
        "Red Ceramic|meta|rot4": {
          ttb: 1500,
          textureInfo: ["red_glazed_terracotta[rot[1", "red_glazed_terracotta[rot[2", "red_glazed_terracotta[rot[3", "red_glazed_terracotta[rot[4"],
          texturePerSide: [1, 3, 1, 1, 0, 2],
          harvestType: "rock"
        },
        "Black Ceramic": {
          displayName: {
            translationKey: "item:blackCeramic"
          },
          ttb: 1500,
          textureInfo: ["black_glazed_terracotta[rot[1", "black_glazed_terracotta[rot[2", "black_glazed_terracotta[rot[3", "black_glazed_terracotta[rot[4"],
          texturePerSide: [0, 2, 2, 2, 3, 1],
          harvestType: "rock",
          rootMetaDesc: "Black Ceramic|meta|rot1"
        },
        "Black Ceramic|meta|rot2": {
          ttb: 1500,
          textureInfo: ["black_glazed_terracotta[rot[1", "black_glazed_terracotta[rot[2", "black_glazed_terracotta[rot[3", "black_glazed_terracotta[rot[4"],
          texturePerSide: [3, 1, 3, 3, 2, 0],
          harvestType: "rock"
        },
        "Black Ceramic|meta|rot3": {
          ttb: 1500,
          textureInfo: ["black_glazed_terracotta[rot[1", "black_glazed_terracotta[rot[2", "black_glazed_terracotta[rot[3", "black_glazed_terracotta[rot[4"],
          texturePerSide: [2, 0, 0, 0, 1, 3],
          harvestType: "rock"
        },
        "Black Ceramic|meta|rot4": {
          ttb: 1500,
          textureInfo: ["black_glazed_terracotta[rot[1", "black_glazed_terracotta[rot[2", "black_glazed_terracotta[rot[3", "black_glazed_terracotta[rot[4"],
          texturePerSide: [1, 3, 1, 1, 0, 2],
          harvestType: "rock"
        },
        "Wheat Seeds": {
          displayName: {
            translationKey: "item:wheatSeeds"
          },
          ttb: 400,
          textureInfo: "wheat_stage0",
          model: "SquareSided",
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "wheat_seeds",
          description: {
            translationKey: "item:wheatSeedsDescription"
          }
        },
        ...(0, yd.tb)("Wheat", {
          displayName: {
            translationKey: "item:wheat"
          },
          ttb: 400,
          model: "SquareSided",
          solid: !1,
          harvestType: "cuttable",
          drops: "Wheat Seeds"
        }, ["wheat_stage2", "wheat_stage3", "wheat_stage4", "wheat_stage5", "wheat_stage6"]),
        Wheat: {
          displayName: {
            translationKey: "item:wheat"
          },
          ttb: 400,
          textureInfo: "wheat_stage7",
          model: "SquareSided",
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "wheat"
        },
        "Wheat|FreshlyGrown": {
          ttb: 400,
          textureInfo: "wheat_stage7",
          model: "SquareSided",
          solid: !1,
          harvestType: "cuttable",
          onMinedAura: 5
        },
        "Tilled Soil": {
          displayName: {
            translationKey: "item:tilledSoil"
          },
          ttb: 600,
          textureInfo: "farmland",
          harvestType: "granule"
        },
        "Bread Block": {
          displayName: {
            translationKey: "item:breadBlock"
          },
          ttb: 600,
          textureInfo: ["bread_block_front", "bread_block_back", "bread_block_side", "bread_block_top"],
          texturePerSide: [2, 2, 3, 3, 0, 1],
          harvestType: "cuttable"
        },
        "ReservedBread BlockRotation1": {
          ttb: 600,
          textureInfo: ["bread_block_front", "bread_block_back", "bread_block_side", "bread_block_top"],
          texturePerSide: [2, 2, 3, 3, 0, 1],
          harvestType: "cuttable"
        },
        "ReservedBread BlockRotation2": {
          ttb: 600,
          textureInfo: ["bread_block_front", "bread_block_back", "bread_block_side", "bread_block_top"],
          texturePerSide: [2, 2, 3, 3, 0, 1],
          harvestType: "cuttable"
        },
        "ReservedBread BlockRotation3": {
          ttb: 600,
          textureInfo: ["bread_block_front", "bread_block_back", "bread_block_side", "bread_block_top"],
          texturePerSide: [2, 2, 3, 3, 0, 1],
          harvestType: "cuttable"
        },
        "Mossy Messy Stone": {
          displayName: {
            translationKey: "item:mossyMessyStone"
          },
          ttb: 1800,
          textureInfo: "mossy_cobblestone",
          harvestType: "rock"
        },
        "Dandelion|Roots": {
          ttb: 300,
          textureInfo: "dandelion",
          model: "CentreCross",
          heldItemScale: .5,
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "dandelion"
        },
        "Poppy|Roots": {
          ttb: 300,
          textureInfo: "poppy",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "poppy"
        },
        "Red Tulip|Roots": {
          ttb: 300,
          textureInfo: "red_tulip",
          model: "CentreCross",
          heldItemScale: .5,
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "red_tulip"
        },
        "Pink Tulip|Roots": {
          ttb: 300,
          textureInfo: "pink_tulip",
          model: "CentreCross",
          heldItemScale: .5,
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "pink_tulip"
        },
        "White Tulip|Roots": {
          ttb: 300,
          textureInfo: "white_tulip",
          model: "CentreCross",
          heldItemScale: .5,
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "white_tulip"
        },
        "Orange Tulip|Roots": {
          ttb: 300,
          textureInfo: "orange_tulip",
          model: "CentreCross",
          heldItemScale: .5,
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "orange_tulip"
        },
        "Daisy|Roots": {
          ttb: 300,
          textureInfo: "oxeye_daisy",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "oxeye_daisy"
        },
        "Bluebell|Roots": {
          ttb: 300,
          textureInfo: "blue_orchid",
          model: "CentreCross",
          heldItemScale: .5,
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "blue_orchid"
        },
        "Forget-me-not|Roots": {
          ttb: 300,
          textureInfo: "cornflower",
          model: "CentreCross",
          heldItemScale: .5,
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "cornflower"
        },
        "Allium|Roots": {
          ttb: 300,
          textureInfo: "allium",
          model: "CentreCross",
          heldItemScale: .5,
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "allium"
        },
        "Azure Bluet|Roots": {
          ttb: 300,
          textureInfo: "azure_bluet",
          model: "CentreCross",
          heldItemScale: .5,
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "azure_bluet"
        },
        "Lily of the Valley|Roots": {
          ttb: 300,
          textureInfo: "lily_of_the_valley",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "lily_of_the_valley"
        },
        "Shadow Rose|Roots": {
          ttb: 300,
          textureInfo: "shadow_rose",
          model: "CentreCross",
          heldItemScale: .5,
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "shadow_rose"
        },
        ...(0, yd.Fb)("White Bed", {
          displayName: {
            translationKey: "item:whiteBed"
          },
          ttb: 240,
          itemTexture: "white_bed",
          model: "rotatable",
          harvestType: "wood",
          rootMetaDesc: "White Bed|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "White Bed"
        }),
        ...(0, yd.Fb)("_White Bed Head", {
          ttb: 240,
          itemTexture: "white_bed",
          model: "rotatable",
          harvestType: "wood",
          drops: "White Bed",
          rootMetaDesc: "_White Bed Head|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "_White Bed Head"
        }),
        ...(0, yd.Fb)("Orange Bed", {
          displayName: {
            translationKey: "item:orangeBed"
          },
          ttb: 240,
          itemTexture: "orange_bed",
          model: "rotatable",
          harvestType: "wood",
          rootMetaDesc: "Orange Bed|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "Orange Bed"
        }),
        ...(0, yd.Fb)("_Orange Bed Head", {
          ttb: 240,
          itemTexture: "orange_bed",
          model: "rotatable",
          harvestType: "wood",
          drops: "Orange Bed",
          rootMetaDesc: "_Orange Bed Head|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "_Orange Bed Head"
        }),
        ...(0, yd.Fb)("Magenta Bed", {
          displayName: {
            translationKey: "item:magentaBed"
          },
          ttb: 240,
          itemTexture: "magenta_bed",
          model: "rotatable",
          harvestType: "wood",
          rootMetaDesc: "Magenta Bed|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "Magenta Bed"
        }),
        ...(0, yd.Fb)("_Magenta Bed Head", {
          ttb: 240,
          itemTexture: "magenta_bed",
          model: "rotatable",
          harvestType: "wood",
          drops: "Magenta Bed",
          rootMetaDesc: "_Magenta Bed Head|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "_Magenta Bed Head"
        }),
        ...(0, yd.Fb)("Light Blue Bed", {
          displayName: {
            translationKey: "item:lightBlueBed"
          },
          ttb: 240,
          itemTexture: "light_blue_bed",
          model: "rotatable",
          harvestType: "wood",
          rootMetaDesc: "Light Blue Bed|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "Light Blue Bed"
        }),
        ...(0, yd.Fb)("_Light Blue Bed Head", {
          ttb: 240,
          itemTexture: "light_blue_bed",
          model: "rotatable",
          harvestType: "wood",
          drops: "Light Blue Bed",
          rootMetaDesc: "_Light Blue Bed Head|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "_Light Blue Bed Head"
        }),
        ...(0, yd.Fb)("Yellow Bed", {
          displayName: {
            translationKey: "item:yellowBed"
          },
          ttb: 240,
          itemTexture: "yellow_bed",
          model: "rotatable",
          harvestType: "wood",
          rootMetaDesc: "Yellow Bed|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "Yellow Bed"
        }),
        ...(0, yd.Fb)("_Yellow Bed Head", {
          ttb: 240,
          itemTexture: "yellow_bed",
          model: "rotatable",
          harvestType: "wood",
          drops: "Yellow Bed",
          rootMetaDesc: "_Yellow Bed Head|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "_Yellow Bed Head"
        }),
        ...(0, yd.Fb)("Lime Bed", {
          displayName: {
            translationKey: "item:limeBed"
          },
          ttb: 240,
          itemTexture: "lime_bed",
          model: "rotatable",
          harvestType: "wood",
          rootMetaDesc: "Lime Bed|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "Lime Bed"
        }),
        ...(0, yd.Fb)("_Lime Bed Head", {
          ttb: 240,
          itemTexture: "lime_bed",
          model: "rotatable",
          harvestType: "wood",
          drops: "Lime Bed",
          rootMetaDesc: "_Lime Bed Head|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "_Lime Bed Head"
        }),
        ...(0, yd.Fb)("Pink Bed", {
          displayName: {
            translationKey: "item:pinkBed"
          },
          ttb: 240,
          itemTexture: "pink_bed",
          model: "rotatable",
          harvestType: "wood",
          rootMetaDesc: "Pink Bed|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "Pink Bed"
        }),
        ...(0, yd.Fb)("_Pink Bed Head", {
          ttb: 240,
          itemTexture: "pink_bed",
          model: "rotatable",
          harvestType: "wood",
          drops: "Pink Bed",
          rootMetaDesc: "_Pink Bed Head|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "_Pink Bed Head"
        }),
        ...(0, yd.Fb)("Gray Bed", {
          displayName: {
            translationKey: "item:grayBed"
          },
          ttb: 240,
          itemTexture: "gray_bed",
          model: "rotatable",
          harvestType: "wood",
          rootMetaDesc: "Gray Bed|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "Gray Bed"
        }),
        ...(0, yd.Fb)("_Gray Bed Head", {
          ttb: 240,
          itemTexture: "gray_bed",
          model: "rotatable",
          harvestType: "wood",
          drops: "Gray Bed",
          rootMetaDesc: "_Gray Bed Head|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "_Gray Bed Head"
        }),
        ...(0, yd.Fb)("Light Gray Bed", {
          displayName: {
            translationKey: "item:lightGrayBed"
          },
          ttb: 240,
          itemTexture: "light_gray_bed",
          model: "rotatable",
          harvestType: "wood",
          rootMetaDesc: "Light Gray Bed|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "Light Gray Bed"
        }),
        ...(0, yd.Fb)("_Light Gray Bed Head", {
          ttb: 240,
          itemTexture: "light_gray_bed",
          model: "rotatable",
          harvestType: "wood",
          drops: "Light Gray Bed",
          rootMetaDesc: "_Light Gray Bed Head|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "_Light Gray Bed Head"
        }),
        ...(0, yd.Fb)("Cyan Bed", {
          displayName: {
            translationKey: "item:cyanBed"
          },
          ttb: 240,
          itemTexture: "cyan_bed",
          model: "rotatable",
          harvestType: "wood",
          rootMetaDesc: "Cyan Bed|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "Cyan Bed"
        }),
        ...(0, yd.Fb)("_Cyan Bed Head", {
          ttb: 240,
          itemTexture: "cyan_bed",
          model: "rotatable",
          harvestType: "wood",
          drops: "Cyan Bed",
          rootMetaDesc: "_Cyan Bed Head|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "_Cyan Bed Head"
        }),
        ...(0, yd.Fb)("Purple Bed", {
          displayName: {
            translationKey: "item:purpleBed"
          },
          ttb: 240,
          itemTexture: "purple_bed",
          model: "rotatable",
          harvestType: "wood",
          rootMetaDesc: "Purple Bed|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "Purple Bed"
        }),
        ...(0, yd.Fb)("_Purple Bed Head", {
          ttb: 240,
          itemTexture: "purple_bed",
          model: "rotatable",
          harvestType: "wood",
          drops: "Purple Bed",
          rootMetaDesc: "_Purple Bed Head|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "_Purple Bed Head"
        }),
        ...(0, yd.Fb)("Blue Bed", {
          displayName: {
            translationKey: "item:blueBed"
          },
          ttb: 240,
          itemTexture: "blue_bed",
          model: "rotatable",
          harvestType: "wood",
          rootMetaDesc: "Blue Bed|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "Blue Bed"
        }),
        ...(0, yd.Fb)("_Blue Bed Head", {
          ttb: 240,
          itemTexture: "blue_bed",
          model: "rotatable",
          harvestType: "wood",
          drops: "Blue Bed",
          rootMetaDesc: "_Blue Bed Head|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "_Blue Bed Head"
        }),
        ...(0, yd.Fb)("Brown Bed", {
          displayName: {
            translationKey: "item:brownBed"
          },
          ttb: 240,
          itemTexture: "brown_bed",
          model: "rotatable",
          harvestType: "wood",
          rootMetaDesc: "Brown Bed|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "Brown Bed"
        }),
        ...(0, yd.Fb)("_Brown Bed Head", {
          ttb: 240,
          itemTexture: "brown_bed",
          model: "rotatable",
          harvestType: "wood",
          drops: "Brown Bed",
          rootMetaDesc: "_Brown Bed Head|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "_Brown Bed Head"
        }),
        ...(0, yd.Fb)("Green Bed", {
          displayName: {
            translationKey: "item:greenBed"
          },
          ttb: 240,
          itemTexture: "green_bed",
          model: "rotatable",
          harvestType: "wood",
          rootMetaDesc: "Green Bed|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "Green Bed"
        }),
        ...(0, yd.Fb)("_Green Bed Head", {
          ttb: 240,
          itemTexture: "green_bed",
          model: "rotatable",
          harvestType: "wood",
          drops: "Green Bed",
          rootMetaDesc: "_Green Bed Head|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "_Green Bed Head"
        }),
        ...(0, yd.Fb)("Red Bed", {
          displayName: {
            translationKey: "item:redBed"
          },
          ttb: 240,
          itemTexture: "red_bed",
          model: "rotatable",
          harvestType: "wood",
          rootMetaDesc: "Red Bed|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "Red Bed"
        }),
        ...(0, yd.Fb)("_Red Bed Head", {
          ttb: 240,
          itemTexture: "red_bed",
          model: "rotatable",
          harvestType: "wood",
          drops: "Red Bed",
          rootMetaDesc: "_Red Bed Head|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "_Red Bed Head"
        }),
        ...(0, yd.Fb)("Black Bed", {
          displayName: {
            translationKey: "item:blackBed"
          },
          ttb: 240,
          itemTexture: "black_bed",
          model: "rotatable",
          harvestType: "wood",
          rootMetaDesc: "Black Bed|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "Black Bed"
        }),
        ...(0, yd.Fb)("_Black Bed Head", {
          ttb: 240,
          itemTexture: "black_bed",
          model: "rotatable",
          harvestType: "wood",
          drops: "Black Bed",
          rootMetaDesc: "_Black Bed Head|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "_Black Bed Head"
        }),
        "Apple Block": {
          displayName: {
            translationKey: "item:appleBlock"
          },
          ttb: 600,
          textureInfo: ["apple_block_side", "apple_block_top", "apple_block_bottom"],
          texturePerSide: [0, 0, 1, 2, 0, 0],
          harvestType: "wood"
        },
        "Moonstone Ore": {
          displayName: {
            translationKey: "item:moonstoneOre"
          },
          ttb: 5e3,
          textureInfo: "moonstone_ore",
          harvestType: "rock",
          harvestLevel: 3,
          drops: "Moonstone",
          specialToolDrop: {
            tool: "Moonstone Pickaxe",
            drops: "Moonstone Ore"
          },
          specialToolBonusDrops: {
            "Golem Pickaxe": od.o
          },
          description: {
            translationKey: "item:moonstoneOreDescription"
          },
          onMinedAura: 50,
          Pq: [6, 6, 6]
        },
        ...(0, yd.Hb)("Moonstone Chest", {
          displayName: {
            translationKey: "item:moonstoneChest"
          },
          ttb: 3e3,
          textureInfo: ["moonstone_chest_front", "moonstone_chest_side", "moonstone_chest_top[rot[1", "moonstone_chest_top[rot[2", "moonstone_chest_top[rot[3", "moonstone_chest_top[rot[4", "moonstone_chest_back"],
          harvestType: "rock",
          rootMetaDesc: "Moonstone Chest|meta|rot1",
          description: {
            translationKey: "item:moonstoneChestDescription"
          }
        }, [
          [1, 1, 2, 2, 0, 6],
          [0, 6, 3, 3, 1, 1],
          [1, 1, 4, 4, 6, 0],
          [6, 0, 5, 5, 1, 1]
        ]),
        "Block of Moonstone": {
          displayName: {
            translationKey: "item:blockOfMoonstone"
          },
          ttb: 6750,
          textureInfo: "moonstone_block",
          harvestType: "rock"
        },
        Magma: {
          displayName: {
            translationKey: "item:magma"
          },
          ttb: 600,
          textureInfo: "magma",
          harvestType: "rock",
          Pq: [9, 3, 1]
        },
        "Useless Soil": {
          displayName: {
            translationKey: "item:uselessSoil"
          },
          ttb: 600,
          textureInfo: "podzol_top",
          harvestType: "granule"
        },
        "Marked Sandstone": {
          displayName: {
            translationKey: "item:markedSandstone"
          },
          ttb: 960,
          textureInfo: "cut_sandstone",
          harvestType: "rock"
        },
        "Red Sandstone": {
          displayName: {
            translationKey: "item:redSandstone"
          },
          ttb: 960,
          textureInfo: "red_sandstone",
          harvestType: "rock"
        },
        "Smooth Red Sandstone": {
          displayName: {
            translationKey: "item:smoothRedSandstone"
          },
          ttb: 960,
          textureInfo: "red_sandstone_top",
          harvestType: "rock"
        },
        "Engraved Red Sandstone": {
          displayName: {
            translationKey: "item:engravedRedSandstone"
          },
          ttb: 960,
          textureInfo: "chiseled_red_sandstone",
          harvestType: "rock"
        },
        "Marked Red Sandstone": {
          displayName: {
            translationKey: "item:markedRedSandstone"
          },
          ttb: 960,
          textureInfo: "cut_red_sandstone",
          harvestType: "rock"
        },
        "Green Stone": {
          displayName: {
            translationKey: "item:greenStone"
          },
          ttb: 1800,
          textureInfo: "green_stone",
          harvestType: "rock"
        },
        "Green Bricks": {
          displayName: {
            translationKey: "item:greenBricks"
          },
          ttb: 1800,
          textureInfo: "green_bricks",
          harvestType: "rock"
        },
        "Dark Green Bricks": {
          displayName: {
            translationKey: "item:darkGreenBricks"
          },
          ttb: 1800,
          textureInfo: "dark_green_bricks",
          harvestType: "rock"
        },
        "Sandstone Bricks": {
          displayName: {
            translationKey: "item:sandstoneBricks"
          },
          ttb: 960,
          textureInfo: "sandstone_brick",
          harvestType: "rock"
        },
        "Engraved Diorite": {
          displayName: {
            translationKey: "item:engravedDiorite"
          },
          ttb: 1800,
          textureInfo: "engraved_diorite",
          harvestType: "rock"
        },
        "Diorite Bricks": {
          displayName: {
            translationKey: "item:dioriteBricks"
          },
          ttb: 1800,
          textureInfo: "diorite_brick",
          harvestType: "rock"
        },
        "Engraved Andesite": {
          displayName: {
            translationKey: "item:engravedAndesite"
          },
          ttb: 1800,
          textureInfo: "engraved_andesite",
          harvestType: "rock"
        },
        "Andesite Bricks": {
          displayName: {
            translationKey: "item:andesiteBricks"
          },
          ttb: 1800,
          textureInfo: "andesite_brick",
          harvestType: "rock"
        },
        "Engraved Granite": {
          displayName: {
            translationKey: "item:engravedGranite"
          },
          ttb: 1800,
          textureInfo: "engraved_granite",
          harvestType: "rock"
        },
        "Granite Bricks": {
          displayName: {
            translationKey: "item:graniteBricks"
          },
          ttb: 1800,
          textureInfo: "granite_brick",
          harvestType: "rock"
        },
        "Ice Bricks": {
          displayName: {
            translationKey: "item:iceBricks"
          },
          ttb: 1800,
          textureInfo: "ice_brick",
          harvestType: "rock",
          harvestLevel: 0,
          stoodOnSpeedMultiplier: 1.4
        },
        "Placeholder Packed Ice": {
          ttb: 1800,
          textureInfo: "ice_brick",
          harvestType: "rock",
          harvestLevel: 0,
          stoodOnSpeedMultiplier: 1.4
        },
        "Placeholder Blue Ice": {
          ttb: 1800,
          textureInfo: "ice_brick",
          harvestType: "rock",
          harvestLevel: 0,
          stoodOnSpeedMultiplier: 1.4
        },
        "Plum Leaves": {
          displayName: {
            translationKey: "item:plumLeaves"
          },
          ttb: 350,
          textureInfo: "leaves_plum",
          harvestType: "cuttable"
        },
        "Cedar Leaves": {
          displayName: {
            translationKey: "item:cedarLeaves"
          },
          ttb: 350,
          textureInfo: "leaves_cedar",
          harvestType: "cuttable"
        },
        "Palm Leaves": {
          displayName: {
            translationKey: "item:palmLeaves"
          },
          ttb: 350,
          textureInfo: "leaves_palm",
          harvestType: "cuttable"
        },
        "Plum Leaves|TreeCanopy": {
          ttb: 350,
          textureInfo: "leaves_plum",
          harvestType: "cuttable",
          drops: "Plum Leaves"
        },
        "Cedar Leaves|TreeCanopy": {
          ttb: 350,
          textureInfo: "leaves_cedar",
          harvestType: "cuttable",
          drops: "Cedar Leaves"
        },
        "Palm Leaves|TreeCanopy": {
          ttb: 350,
          textureInfo: "leaves_palm",
          harvestType: "cuttable",
          drops: "Palm Leaves"
        },
        "Pine Log|TreeBase|Pine": {
          ttb: 2400,
          textureInfo: "log_pine",
          harvestType: "wood",
          drops: "Pine Log"
        },
        "Plum Log|TreeBase|Plum": {
          ttb: 2400,
          textureInfo: "log_plum",
          harvestType: "wood",
          drops: "Plum Log"
        },
        "Cedar Log|TreeBase|Cedar": {
          ttb: 2400,
          textureInfo: "log_cedar",
          harvestType: "wood",
          drops: "Cedar Log"
        },
        "Aspen Log|TreeBase|Aspen": {
          ttb: 2400,
          textureInfo: "log_aspen",
          harvestType: "wood",
          drops: "Aspen Log"
        },
        "Jungle Log|TreeBase|Jungle": {
          ttb: 2400,
          textureInfo: "log_jungle",
          harvestType: "wood",
          drops: "Jungle Log"
        },
        "Palm Log": {
          displayName: {
            translationKey: "item:palmLog"
          },
          ttb: 2400,
          textureInfo: "log_palm",
          harvestType: "wood"
        },
        "Palm Log|TreeBase|Palm": {
          ttb: 2400,
          textureInfo: "log_palm",
          harvestType: "wood",
          drops: "Palm Log"
        },
        "Palm Wood Planks": {
          displayName: {
            translationKey: "item:palmWoodPlanks"
          },
          ttb: 1800,
          textureInfo: "planks_palm",
          harvestType: "wood"
        },
        "Palm Sapling": {
          displayName: {
            translationKey: "item:palmSapling"
          },
          ttb: 1,
          textureInfo: "palm_sapling",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "palm_sapling"
        },
        "Pine Door": {
          displayName: {
            translationKey: "item:pineDoor"
          },
          ttb: 3600,
          itemTexture: "pine_door",
          model: "door",
          harvestType: "wood",
          rootMetaDesc: "Pine Door|meta|rot1|closed",
          particlesIgnoreBlack: !0,
          blockModel: "Pine Door"
        },
        "Pine Door|meta|rot1|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Pine Door|meta|rot2|closed": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Pine Door|meta|rot2|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Pine Door|meta|rot3|closed": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Pine Door|meta|rot3|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Pine Door|meta|rot4|closed": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Pine Door|meta|rot4|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "_Pine Door Top": {
          ttb: 3600,
          itemTexture: "pine_door",
          harvestType: "wood",
          model: "door",
          drops: "Pine Door",
          rootMetaDesc: "_Pine Door Top|meta|rot1|closed",
          particlesIgnoreBlack: !0,
          blockModel: "_Pine Door Top"
        },
        "_Pine Door Top|meta|rot1|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Pine Door"
        },
        "_Pine Door Top|meta|rot2|closed": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Pine Door"
        },
        "_Pine Door Top|meta|rot2|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Pine Door"
        },
        "_Pine Door Top|meta|rot3|closed": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Pine Door"
        },
        "_Pine Door Top|meta|rot3|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Pine Door"
        },
        "_Pine Door Top|meta|rot4|closed": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Pine Door"
        },
        "_Pine Door Top|meta|rot4|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Pine Door"
        },
        "Plum Door": {
          displayName: {
            translationKey: "item:plumDoor"
          },
          ttb: 3600,
          itemTexture: "plum_door",
          model: "door",
          harvestType: "wood",
          rootMetaDesc: "Plum Door|meta|rot1|closed",
          particlesIgnoreBlack: !0,
          blockModel: "Plum Door"
        },
        "Plum Door|meta|rot1|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Plum Door|meta|rot2|closed": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Plum Door|meta|rot2|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Plum Door|meta|rot3|closed": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Plum Door|meta|rot3|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Plum Door|meta|rot4|closed": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Plum Door|meta|rot4|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "_Plum Door Top": {
          ttb: 3600,
          itemTexture: "plum_door",
          harvestType: "wood",
          model: "door",
          drops: "Plum Door",
          rootMetaDesc: "_Plum Door Top|meta|rot1|closed",
          particlesIgnoreBlack: !0,
          blockModel: "_Plum Door Top"
        },
        "_Plum Door Top|meta|rot1|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Plum Door"
        },
        "_Plum Door Top|meta|rot2|closed": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Plum Door"
        },
        "_Plum Door Top|meta|rot2|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Plum Door"
        },
        "_Plum Door Top|meta|rot3|closed": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Plum Door"
        },
        "_Plum Door Top|meta|rot3|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Plum Door"
        },
        "_Plum Door Top|meta|rot4|closed": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Plum Door"
        },
        "_Plum Door Top|meta|rot4|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Plum Door"
        },
        "Cedar Door": {
          displayName: {
            translationKey: "item:cedarDoor"
          },
          ttb: 3600,
          itemTexture: "cedar_door",
          model: "door",
          harvestType: "wood",
          rootMetaDesc: "Cedar Door|meta|rot1|closed",
          particlesIgnoreBlack: !0,
          blockModel: "Cedar Door"
        },
        "Cedar Door|meta|rot1|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Cedar Door|meta|rot2|closed": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Cedar Door|meta|rot2|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Cedar Door|meta|rot3|closed": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Cedar Door|meta|rot3|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Cedar Door|meta|rot4|closed": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Cedar Door|meta|rot4|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "_Cedar Door Top": {
          ttb: 3600,
          itemTexture: "cedar_door",
          harvestType: "wood",
          model: "door",
          drops: "Cedar Door",
          rootMetaDesc: "_Cedar Door Top|meta|rot1|closed",
          particlesIgnoreBlack: !0,
          blockModel: "_Cedar Door Top"
        },
        "_Cedar Door Top|meta|rot1|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Cedar Door"
        },
        "_Cedar Door Top|meta|rot2|closed": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Cedar Door"
        },
        "_Cedar Door Top|meta|rot2|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Cedar Door"
        },
        "_Cedar Door Top|meta|rot3|closed": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Cedar Door"
        },
        "_Cedar Door Top|meta|rot3|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Cedar Door"
        },
        "_Cedar Door Top|meta|rot4|closed": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Cedar Door"
        },
        "_Cedar Door Top|meta|rot4|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Cedar Door"
        },
        "Aspen Door": {
          displayName: {
            translationKey: "item:aspenDoor"
          },
          ttb: 3600,
          itemTexture: "aspen_door",
          model: "door",
          harvestType: "wood",
          rootMetaDesc: "Aspen Door|meta|rot1|closed",
          particlesIgnoreBlack: !0,
          blockModel: "Aspen Door"
        },
        "Aspen Door|meta|rot1|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Aspen Door|meta|rot2|closed": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Aspen Door|meta|rot2|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Aspen Door|meta|rot3|closed": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Aspen Door|meta|rot3|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Aspen Door|meta|rot4|closed": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Aspen Door|meta|rot4|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "_Aspen Door Top": {
          ttb: 3600,
          itemTexture: "aspen_door",
          harvestType: "wood",
          model: "door",
          drops: "Aspen Door",
          rootMetaDesc: "_Aspen Door Top|meta|rot1|closed",
          particlesIgnoreBlack: !0,
          blockModel: "_Aspen Door Top"
        },
        "_Aspen Door Top|meta|rot1|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Aspen Door"
        },
        "_Aspen Door Top|meta|rot2|closed": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Aspen Door"
        },
        "_Aspen Door Top|meta|rot2|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Aspen Door"
        },
        "_Aspen Door Top|meta|rot3|closed": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Aspen Door"
        },
        "_Aspen Door Top|meta|rot3|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Aspen Door"
        },
        "_Aspen Door Top|meta|rot4|closed": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Aspen Door"
        },
        "_Aspen Door Top|meta|rot4|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Aspen Door"
        },
        "Jungle Door": {
          displayName: {
            translationKey: "item:jungleDoor"
          },
          ttb: 3600,
          itemTexture: "jungle_door",
          model: "door",
          harvestType: "wood",
          rootMetaDesc: "Jungle Door|meta|rot1|closed",
          particlesIgnoreBlack: !0,
          blockModel: "Jungle Door"
        },
        "Jungle Door|meta|rot1|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Jungle Door|meta|rot2|closed": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Jungle Door|meta|rot2|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Jungle Door|meta|rot3|closed": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Jungle Door|meta|rot3|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Jungle Door|meta|rot4|closed": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Jungle Door|meta|rot4|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "_Jungle Door Top": {
          ttb: 3600,
          itemTexture: "jungle_door",
          harvestType: "wood",
          model: "door",
          drops: "Jungle Door",
          rootMetaDesc: "_Jungle Door Top|meta|rot1|closed",
          particlesIgnoreBlack: !0,
          blockModel: "_Jungle Door Top"
        },
        "_Jungle Door Top|meta|rot1|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Jungle Door"
        },
        "_Jungle Door Top|meta|rot2|closed": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Jungle Door"
        },
        "_Jungle Door Top|meta|rot2|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Jungle Door"
        },
        "_Jungle Door Top|meta|rot3|closed": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Jungle Door"
        },
        "_Jungle Door Top|meta|rot3|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Jungle Door"
        },
        "_Jungle Door Top|meta|rot4|closed": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Jungle Door"
        },
        "_Jungle Door Top|meta|rot4|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Jungle Door"
        },
        "Palm Door": {
          displayName: {
            translationKey: "item:palmDoor"
          },
          ttb: 3600,
          itemTexture: "palm_door",
          model: "door",
          harvestType: "wood",
          rootMetaDesc: "Palm Door|meta|rot1|closed",
          particlesIgnoreBlack: !0,
          blockModel: "Palm Door"
        },
        "Palm Door|meta|rot1|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Palm Door|meta|rot2|closed": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Palm Door|meta|rot2|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Palm Door|meta|rot3|closed": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Palm Door|meta|rot3|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Palm Door|meta|rot4|closed": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Palm Door|meta|rot4|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "_Palm Door Top": {
          ttb: 3600,
          itemTexture: "palm_door",
          harvestType: "wood",
          model: "door",
          drops: "Palm Door",
          rootMetaDesc: "_Palm Door Top|meta|rot1|closed",
          particlesIgnoreBlack: !0,
          blockModel: "_Palm Door Top"
        },
        "_Palm Door Top|meta|rot1|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Palm Door"
        },
        "_Palm Door Top|meta|rot2|closed": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Palm Door"
        },
        "_Palm Door Top|meta|rot2|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Palm Door"
        },
        "_Palm Door Top|meta|rot3|closed": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Palm Door"
        },
        "_Palm Door Top|meta|rot3|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Palm Door"
        },
        "_Palm Door Top|meta|rot4|closed": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Palm Door"
        },
        "_Palm Door Top|meta|rot4|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Palm Door"
        },
        "Pine Trapdoor": {
          displayName: {
            translationKey: "item:pineTrapdoor"
          },
          ttb: 2800,
          itemTexture: "pine_trapdoor",
          model: "trapdoor",
          harvestType: "wood",
          rootMetaDesc: "Pine Trapdoor|meta|rot1|closed",
          blockModel: "Pine Trapdoor",
          heldItemScale: .5,
          blockModelItem: !0
        },
        "Pine Trapdoor|meta|rot1|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Pine Trapdoor|meta|rot2|closed": {
          ttb: 2800,
          harvestType: "wood"
        },
        "Pine Trapdoor|meta|rot2|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Pine Trapdoor|meta|rot3|closed": {
          ttb: 2800,
          harvestType: "wood"
        },
        "Pine Trapdoor|meta|rot3|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Pine Trapdoor|meta|rot4|closed": {
          ttb: 2800,
          harvestType: "wood"
        },
        "Pine Trapdoor|meta|rot4|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Plum Trapdoor": {
          displayName: {
            translationKey: "item:plumTrapdoor"
          },
          ttb: 2800,
          itemTexture: "plum_trapdoor",
          model: "trapdoor",
          harvestType: "wood",
          rootMetaDesc: "Plum Trapdoor|meta|rot1|closed",
          blockModel: "Plum Trapdoor",
          heldItemScale: .5,
          blockModelItem: !0
        },
        "Plum Trapdoor|meta|rot1|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Plum Trapdoor|meta|rot2|closed": {
          ttb: 2800,
          harvestType: "wood"
        },
        "Plum Trapdoor|meta|rot2|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Plum Trapdoor|meta|rot3|closed": {
          ttb: 2800,
          harvestType: "wood"
        },
        "Plum Trapdoor|meta|rot3|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Plum Trapdoor|meta|rot4|closed": {
          ttb: 2800,
          harvestType: "wood"
        },
        "Plum Trapdoor|meta|rot4|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Cedar Trapdoor": {
          displayName: {
            translationKey: "item:cedarTrapdoor"
          },
          ttb: 2800,
          itemTexture: "cedar_trapdoor",
          model: "trapdoor",
          harvestType: "wood",
          rootMetaDesc: "Cedar Trapdoor|meta|rot1|closed",
          blockModel: "Cedar Trapdoor",
          heldItemScale: .5,
          blockModelItem: !0
        },
        "Cedar Trapdoor|meta|rot1|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Cedar Trapdoor|meta|rot2|closed": {
          ttb: 2800,
          harvestType: "wood"
        },
        "Cedar Trapdoor|meta|rot2|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Cedar Trapdoor|meta|rot3|closed": {
          ttb: 2800,
          harvestType: "wood"
        },
        "Cedar Trapdoor|meta|rot3|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Cedar Trapdoor|meta|rot4|closed": {
          ttb: 2800,
          harvestType: "wood"
        },
        "Cedar Trapdoor|meta|rot4|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Aspen Trapdoor": {
          displayName: {
            translationKey: "item:aspenTrapdoor"
          },
          ttb: 2800,
          itemTexture: "aspen_trapdoor",
          model: "trapdoor",
          harvestType: "wood",
          rootMetaDesc: "Aspen Trapdoor|meta|rot1|closed",
          blockModel: "Aspen Trapdoor",
          heldItemScale: .5,
          blockModelItem: !0
        },
        "Aspen Trapdoor|meta|rot1|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Aspen Trapdoor|meta|rot2|closed": {
          ttb: 2800,
          harvestType: "wood"
        },
        "Aspen Trapdoor|meta|rot2|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Aspen Trapdoor|meta|rot3|closed": {
          ttb: 2800,
          harvestType: "wood"
        },
        "Aspen Trapdoor|meta|rot3|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Aspen Trapdoor|meta|rot4|closed": {
          ttb: 2800,
          harvestType: "wood"
        },
        "Aspen Trapdoor|meta|rot4|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Jungle Trapdoor": {
          displayName: {
            translationKey: "item:jungleTrapdoor"
          },
          ttb: 2800,
          itemTexture: "jungle_trapdoor",
          model: "trapdoor",
          harvestType: "wood",
          rootMetaDesc: "Jungle Trapdoor|meta|rot1|closed",
          blockModel: "Jungle Trapdoor",
          heldItemScale: .5,
          blockModelItem: !0
        },
        "Jungle Trapdoor|meta|rot1|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Jungle Trapdoor|meta|rot2|closed": {
          ttb: 2800,
          harvestType: "wood"
        },
        "Jungle Trapdoor|meta|rot2|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Jungle Trapdoor|meta|rot3|closed": {
          ttb: 2800,
          harvestType: "wood"
        },
        "Jungle Trapdoor|meta|rot3|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Jungle Trapdoor|meta|rot4|closed": {
          ttb: 2800,
          harvestType: "wood"
        },
        "Jungle Trapdoor|meta|rot4|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Palm Trapdoor": {
          displayName: {
            translationKey: "item:palmTrapdoor"
          },
          ttb: 2800,
          itemTexture: "palm_trapdoor",
          model: "trapdoor",
          harvestType: "wood",
          rootMetaDesc: "Palm Trapdoor|meta|rot1|closed",
          blockModel: "Palm Trapdoor",
          heldItemScale: .5,
          blockModelItem: !0
        },
        "Palm Trapdoor|meta|rot1|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Palm Trapdoor|meta|rot2|closed": {
          ttb: 2800,
          harvestType: "wood"
        },
        "Palm Trapdoor|meta|rot2|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Palm Trapdoor|meta|rot3|closed": {
          ttb: 2800,
          harvestType: "wood"
        },
        "Palm Trapdoor|meta|rot3|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Palm Trapdoor|meta|rot4|closed": {
          ttb: 2800,
          harvestType: "wood"
        },
        "Palm Trapdoor|meta|rot4|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Red Sand": {
          displayName: {
            translationKey: "item:redSand"
          },
          ttb: 600,
          textureInfo: "red_sand",
          harvestType: "granule",
          soundType: {
            break: "sand",
            place: "sand"
          }
        },
        "Red Sandstone Bricks": {
          displayName: {
            translationKey: "item:redSandstoneBricks"
          },
          ttb: 960,
          textureInfo: "red_sandstone_brick",
          harvestType: "rock"
        },
        "Rocky Dirt": {
          displayName: {
            translationKey: "item:rockyDirt"
          },
          ttb: 600,
          textureInfo: "rocky_dirt",
          harvestType: "granule"
        },
        "Autumn Maple Leaves": {
          displayName: {
            translationKey: "item:autumnMapleLeaves"
          },
          ttb: 350,
          textureInfo: "leaves_maple_autumn",
          harvestType: "cuttable"
        },
        "Autumn Maple Leaves|TreeCanopy": {
          ttb: 350,
          textureInfo: "leaves_maple_autumn",
          harvestType: "cuttable",
          drops: "Autumn Maple Leaves"
        },
        ...(0, yd.Kb)("Fallen Maple Leaves", {
          displayName: {
            translationKey: "item:fallenMapleLeaves"
          },
          ttb: 350,
          textureInfo: ["fallen_maple_leaves_side", "leaves_maple_autumn"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          solid: !1,
          harvestType: "cuttable",
          rootMetaDesc: "Fallen Maple Leaves|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Maple Slab", {
          displayName: {
            translationKey: "item:mapleSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_maple_side", "planks_maple"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "wood",
          slabFullBlock: "Maple Wood Planks",
          rootMetaDesc: "Maple Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Pine Slab", {
          displayName: {
            translationKey: "item:pineSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_pine_side", "planks_pine"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "wood",
          slabFullBlock: "Pine Wood Planks",
          rootMetaDesc: "Pine Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Plum Slab", {
          displayName: {
            translationKey: "item:plumSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_plum_side", "planks_plum"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "wood",
          slabFullBlock: "Plum Wood Planks",
          rootMetaDesc: "Plum Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Cedar Slab", {
          displayName: {
            translationKey: "item:cedarSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_cedar_side", "planks_cedar"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "wood",
          slabFullBlock: "Cedar Wood Planks",
          rootMetaDesc: "Cedar Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Aspen Slab", {
          displayName: {
            translationKey: "item:aspenSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_aspen_side", "planks_aspen"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "wood",
          slabFullBlock: "Aspen Wood Planks",
          rootMetaDesc: "Aspen Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Jungle Slab", {
          displayName: {
            translationKey: "item:jungleSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_jungle_side", "planks_jungle"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "wood",
          slabFullBlock: "Jungle Wood Planks",
          rootMetaDesc: "Jungle Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Palm Slab", {
          displayName: {
            translationKey: "item:palmSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_palm_side", "planks_palm"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "wood",
          slabFullBlock: "Palm Wood Planks",
          rootMetaDesc: "Palm Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Dirt Slab", {
          displayName: {
            translationKey: "item:dirtSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_dirt_side", "dirt"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "granule",
          slabFullBlock: "Dirt",
          rootMetaDesc: "Dirt Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Grass Slab", {
          displayName: {
            translationKey: "item:grassSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_grass_top_side", "grass_top"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "granule",
          slabFullBlock: "Grass Block",
          rootMetaDesc: "Grass Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Messy Stone Slab", {
          displayName: {
            translationKey: "item:messyStoneSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_cobblestone_side", "messy_stone"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "rock",
          slabFullBlock: "Messy Stone",
          rootMetaDesc: "Messy Stone Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Stone Slab", {
          displayName: {
            translationKey: "item:stoneSlab"
          },
          ttb: 800,
          textureInfo: ["slab_stone_side", "stone"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "rock",
          slabFullBlock: "Stone",
          rootMetaDesc: "Stone Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Smooth Stone Slab", {
          displayName: {
            translationKey: "item:smoothStoneSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_smooth_stone_side", "smooth_stone"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "rock",
          slabFullBlock: "Smooth Stone",
          rootMetaDesc: "Smooth Stone Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Engraved Stone Slab", {
          displayName: {
            translationKey: "item:engravedStoneSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_stonebrick_carved_side", "stonebrick_carved"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "rock",
          slabFullBlock: "Engraved Stone",
          rootMetaDesc: "Engraved Stone Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Stone Bricks Slab", {
          displayName: {
            translationKey: "item:stoneBricksSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_stonebrick_side", "stonebrick"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "rock",
          slabFullBlock: "Stone Bricks",
          rootMetaDesc: "Stone Bricks Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Mossy Stone Slab", {
          displayName: {
            translationKey: "item:mossyStoneSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_mossy_cobblestone_side", "mossy_cobblestone"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "rock",
          slabFullBlock: "Mossy Messy Stone",
          rootMetaDesc: "Mossy Stone Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Mossy Stone Bricks Slab", {
          displayName: {
            translationKey: "item:mossyStoneBricksSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_stonebrick_mossy_side", "stonebrick_mossy"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "rock",
          slabFullBlock: "Mossy Stone Bricks",
          rootMetaDesc: "Mossy Stone Bricks Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Andesite Slab", {
          displayName: {
            translationKey: "item:andesiteSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_stone_andesite_side", "stone_andesite"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "rock",
          slabFullBlock: "Andesite",
          rootMetaDesc: "Andesite Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Smooth Andesite Slab", {
          displayName: {
            translationKey: "item:smoothAndesiteSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_stone_andesite_smooth_side", "stone_andesite_smooth"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "rock",
          slabFullBlock: "Smooth Andesite",
          rootMetaDesc: "Smooth Andesite Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Engraved Andesite Slab", {
          displayName: {
            translationKey: "item:engravedAndesiteSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_engraved_andesite_side", "engraved_andesite"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "rock",
          slabFullBlock: "Engraved Andesite",
          rootMetaDesc: "Engraved Andesite Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Andesite Bricks Slab", {
          displayName: {
            translationKey: "item:andesiteBricksSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_andesite_brick_side", "andesite_brick"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "rock",
          slabFullBlock: "Andesite Bricks",
          rootMetaDesc: "Andesite Bricks Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Diorite Slab", {
          displayName: {
            translationKey: "item:dioriteSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_stone_diorite_side", "stone_diorite"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "rock",
          slabFullBlock: "Diorite",
          rootMetaDesc: "Diorite Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Smooth Diorite Slab", {
          displayName: {
            translationKey: "item:smoothDioriteSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_stone_diorite_smooth_side", "stone_diorite_smooth"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "rock",
          slabFullBlock: "Smooth Diorite",
          rootMetaDesc: "Smooth Diorite Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Engraved Diorite Slab", {
          displayName: {
            translationKey: "item:engravedDioriteSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_engraved_diorite_side", "engraved_diorite"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "rock",
          slabFullBlock: "Engraved Diorite",
          rootMetaDesc: "Engraved Diorite Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Diorite Bricks Slab", {
          displayName: {
            translationKey: "item:dioriteBricksSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_diorite_brick_side", "diorite_brick"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "rock",
          slabFullBlock: "Diorite Bricks",
          rootMetaDesc: "Diorite Bricks Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Granite Slab", {
          displayName: {
            translationKey: "item:graniteSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_stone_granite_side", "stone_granite"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "rock",
          slabFullBlock: "Granite",
          rootMetaDesc: "Granite Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Smooth Granite Slab", {
          displayName: {
            translationKey: "item:smoothGraniteSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_stone_granite_smooth_side", "stone_granite_smooth"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "rock",
          slabFullBlock: "Smooth Granite",
          rootMetaDesc: "Smooth Granite Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Engraved Granite Slab", {
          displayName: {
            translationKey: "item:engravedGraniteSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_engraved_granite_side", "engraved_granite"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "rock",
          slabFullBlock: "Engraved Granite",
          rootMetaDesc: "Engraved Granite Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Granite Bricks Slab", {
          displayName: {
            translationKey: "item:graniteBricksSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_granite_brick_side", "granite_brick"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "rock",
          slabFullBlock: "Granite Bricks",
          rootMetaDesc: "Granite Bricks Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Sandstone Slab", {
          displayName: {
            translationKey: "item:sandstoneSlab"
          },
          ttb: 640,
          textureInfo: ["slab_sandstone_normal_side", "sandstone_normal"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "rock",
          slabFullBlock: "Sandstone",
          rootMetaDesc: "Sandstone Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Smooth Sandstone Slab", {
          displayName: {
            translationKey: "item:smoothSandstoneSlab"
          },
          ttb: 640,
          textureInfo: "sandstone_top",
          model: "Slab",
          harvestType: "rock",
          slabFullBlock: "Smooth Sandstone",
          rootMetaDesc: "Smooth Sandstone Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Engraved Sandstone Slab", {
          displayName: {
            translationKey: "item:engravedSandstoneSlab"
          },
          ttb: 640,
          textureInfo: ["slab_chiseled_sandstone_side", "chiseled_sandstone"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "rock",
          slabFullBlock: "Engraved Sandstone",
          rootMetaDesc: "Engraved Sandstone Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Marked Sandstone Slab", {
          displayName: {
            translationKey: "item:markedSandstoneSlab"
          },
          ttb: 640,
          textureInfo: ["slab_cut_sandstone_side", "cut_sandstone"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "rock",
          slabFullBlock: "Marked Sandstone",
          rootMetaDesc: "Marked Sandstone Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Sandstone Bricks Slab", {
          displayName: {
            translationKey: "item:sandstoneBricksSlab"
          },
          ttb: 640,
          textureInfo: ["slab_sandstone_brick_side", "sandstone_brick"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "rock",
          slabFullBlock: "Sandstone Bricks",
          rootMetaDesc: "Sandstone Bricks Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Red Sandstone Slab", {
          displayName: {
            translationKey: "item:redSandstoneSlab"
          },
          ttb: 640,
          textureInfo: ["slab_red_sandstone_side", "red_sandstone"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "rock",
          slabFullBlock: "Red Sandstone",
          rootMetaDesc: "Red Sandstone Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Smooth Red Sandstone Slab", {
          displayName: {
            translationKey: "item:smoothRedSandstoneSlab"
          },
          ttb: 640,
          textureInfo: "red_sandstone_top",
          model: "Slab",
          harvestType: "rock",
          slabFullBlock: "Smooth Red Sandstone",
          rootMetaDesc: "Smooth Red Sandstone Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Engraved Red Sandstone Slab", {
          displayName: {
            translationKey: "item:engravedRedSandstoneSlab"
          },
          ttb: 640,
          textureInfo: ["slab_chiseled_red_sandstone_side", "chiseled_red_sandstone"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "rock",
          slabFullBlock: "Engraved Red Sandstone",
          rootMetaDesc: "Engraved Red Sandstone Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Marked Red Sandstone Slab", {
          displayName: {
            translationKey: "item:markedRedSandstoneSlab"
          },
          ttb: 640,
          textureInfo: ["slab_cut_red_sandstone_side", "cut_red_sandstone"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "rock",
          slabFullBlock: "Marked Red Sandstone",
          rootMetaDesc: "Marked Red Sandstone Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Red Sandstone Bricks Slab", {
          displayName: {
            translationKey: "item:redSandstoneBricksSlab"
          },
          ttb: 640,
          textureInfo: ["slab_red_sandstone_brick_side", "red_sandstone_brick"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "rock",
          slabFullBlock: "Red Sandstone Bricks",
          rootMetaDesc: "Red Sandstone Bricks Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Bricks Slab", {
          displayName: {
            translationKey: "item:bricksSlab"
          },
          ttb: 1600,
          textureInfo: ["slab_brick_side", "brick"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "rock",
          slabFullBlock: "Bricks",
          rootMetaDesc: "Bricks Slab|meta|rot1|bot"
        }),
        ...(0, yd.Kb)("Ice Bricks Slab", {
          displayName: {
            translationKey: "item:iceBricksSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_ice_brick_side", "ice_brick"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "rock",
          slabFullBlock: "Ice Bricks",
          rootMetaDesc: "Ice Bricks Slab|meta|rot1|bot",
          harvestLevel: 0,
          stoodOnSpeedMultiplier: 1.4
        }),
        "Vines|meta|rot1|Growing": {
          ttb: 225,
          itemTexture: "vine_coloured",
          harvestType: "cuttable",
          model: "rotatableOffset",
          solid: !1,
          rootMetaDesc: "Vines|meta|rot1|Growing",
          blockModel: "Vines",
          modelScale: 10,
          heldItemScale: 10,
          blockModelItem: !0
        },
        "Vines|meta|rot2|Growing": {
          ttb: 225,
          itemTexture: "vine_coloured",
          harvestType: "cuttable",
          model: "rotatableOffset",
          solid: !1,
          modelScale: 10,
          heldItemScale: 10
        },
        "Vines|meta|rot3|Growing": {
          ttb: 225,
          itemTexture: "vine_coloured",
          harvestType: "cuttable",
          model: "rotatableOffset",
          solid: !1,
          modelScale: 10,
          heldItemScale: 10
        },
        "Vines|meta|rot4|Growing": {
          ttb: 225,
          itemTexture: "vine_coloured",
          harvestType: "cuttable",
          model: "rotatableOffset",
          solid: !1,
          modelScale: 10,
          heldItemScale: 10
        },
        "Cactus|Growing": {
          ttb: 300,
          textureInfo: "small_cactus",
          model: "CentreCross",
          heldItemScale: .5,
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "small_cactus"
        },
        "Fat Cactus|Growing": {
          ttb: 400,
          textureInfo: "cactus_top",
          harvestType: "cuttable",
          damage: 22
        },
        "Plum Block": {
          displayName: {
            translationKey: "item:plumBlock"
          },
          ttb: 600,
          textureInfo: ["plum_block_side", "plum_block_top", "plum_block_bottom"],
          texturePerSide: [0, 0, 1, 2, 0, 0],
          harvestType: "wood"
        },
        "Coconut Block": {
          displayName: {
            translationKey: "item:coconutBlock"
          },
          ttb: 600,
          textureInfo: ["coconut_block_side", "coconut_block_top", "coconut_block_bottom"],
          texturePerSide: [0, 0, 1, 2, 0, 0],
          harvestType: "wood"
        },
        "Pear Log": {
          displayName: {
            translationKey: "item:pearLog"
          },
          ttb: 2400,
          textureInfo: "log_pear",
          harvestType: "wood"
        },
        "Pear Wood Planks": {
          displayName: {
            translationKey: "item:pearWoodPlanks"
          },
          ttb: 1800,
          textureInfo: "planks_pear",
          harvestType: "wood"
        },
        "Pear Leaves": {
          displayName: {
            translationKey: "item:pearLeaves"
          },
          ttb: 350,
          textureInfo: "leaves_pear",
          harvestType: "cuttable"
        },
        "Pear Door": {
          displayName: {
            translationKey: "item:pearDoor"
          },
          ttb: 3600,
          itemTexture: "pear_door",
          model: "door",
          harvestType: "wood",
          rootMetaDesc: "Pear Door|meta|rot1|closed",
          particlesIgnoreBlack: !0,
          blockModel: "Pear Door"
        },
        "Pear Door|meta|rot1|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Pear Door|meta|rot2|closed": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Pear Door|meta|rot2|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Pear Door|meta|rot3|closed": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Pear Door|meta|rot3|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Pear Door|meta|rot4|closed": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Pear Door|meta|rot4|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "_Pear Door Top": {
          ttb: 3600,
          itemTexture: "pear_door",
          harvestType: "wood",
          model: "door",
          drops: "Pear Door",
          rootMetaDesc: "_Pear Door Top|meta|rot1|closed",
          particlesIgnoreBlack: !0,
          blockModel: "_Pear Door Top"
        },
        "_Pear Door Top|meta|rot1|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Pear Door"
        },
        "_Pear Door Top|meta|rot2|closed": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Pear Door"
        },
        "_Pear Door Top|meta|rot2|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Pear Door"
        },
        "_Pear Door Top|meta|rot3|closed": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Pear Door"
        },
        "_Pear Door Top|meta|rot3|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Pear Door"
        },
        "_Pear Door Top|meta|rot4|closed": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Pear Door"
        },
        "_Pear Door Top|meta|rot4|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Pear Door"
        },
        "Pear Trapdoor": {
          displayName: {
            translationKey: "item:pearTrapdoor"
          },
          ttb: 2800,
          itemTexture: "pear_trapdoor",
          model: "trapdoor",
          harvestType: "wood",
          rootMetaDesc: "Pear Trapdoor|meta|rot1|closed",
          blockModel: "Pear Trapdoor",
          heldItemScale: .5,
          blockModelItem: !0
        },
        "Pear Trapdoor|meta|rot1|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Pear Trapdoor|meta|rot2|closed": {
          ttb: 2800,
          harvestType: "wood"
        },
        "Pear Trapdoor|meta|rot2|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Pear Trapdoor|meta|rot3|closed": {
          ttb: 2800,
          harvestType: "wood"
        },
        "Pear Trapdoor|meta|rot3|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Pear Trapdoor|meta|rot4|closed": {
          ttb: 2800,
          harvestType: "wood"
        },
        "Pear Trapdoor|meta|rot4|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Pear Sapling": {
          displayName: {
            translationKey: "item:pearSapling"
          },
          ttb: 1,
          textureInfo: "pear_sapling",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "pear_sapling"
        },
        "Pear Log|TreeBase|Pear": {
          ttb: 2400,
          textureInfo: "log_pear",
          harvestType: "wood",
          drops: "Pear Log"
        },
        "Pear Leaves|TreeCanopy": {
          ttb: 350,
          textureInfo: "leaves_pear",
          harvestType: "cuttable",
          drops: "Pear Leaves"
        },
        ...(0, yd.Kb)("Pear Slab", {
          displayName: {
            translationKey: "item:pearSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_pear_side", "planks_pear"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "wood",
          slabFullBlock: "Pear Wood Planks",
          rootMetaDesc: "Pear Slab|meta|rot1|bot"
        }),
        "Pear Block": {
          displayName: {
            translationKey: "item:pearBlock"
          },
          ttb: 600,
          textureInfo: ["pear_block_side", "pear_block_top", "pear_block_bottom"],
          texturePerSide: [0, 0, 1, 2, 0, 0],
          harvestType: "wood"
        },
        "Compressed Messy Stone": {
          displayName: {
            translationKey: "item:compressedMessyStone"
          },
          ttb: 12e3,
          textureInfo: "compressed_messy_stone",
          harvestType: "rock"
        },
        "Extra Compressed Messy Stone": {
          displayName: {
            translationKey: "item:extraCompressedMessyStone"
          },
          ttb: 24e3,
          textureInfo: "extra_compressed_messy_stone",
          harvestType: "rock"
        },
        "Super Compressed Messy Stone": {
          displayName: {
            translationKey: "item:superCompressedMessyStone"
          },
          ttb: 36e3,
          textureInfo: "super_compressed_messy_stone",
          harvestType: "rock"
        },
        "Hyper Compressed Messy Stone": {
          displayName: {
            translationKey: "item:hyperCompressedMessyStone"
          },
          ttb: 48e3,
          textureInfo: "hyper_compressed_messy_stone",
          harvestType: "rock"
        },
        "Ultra Compressed Messy Stone": {
          displayName: {
            translationKey: "item:ultraCompressedMessyStone"
          },
          ttb: 6e4,
          textureInfo: "ultra_compressed_messy_stone",
          harvestType: "rock"
        },
        "Mega Compressed Messy Stone": {
          displayName: {
            translationKey: "item:megaCompressedMessyStone"
          },
          ttb: 72e3,
          textureInfo: "mega_compressed_messy_stone",
          harvestType: "rock"
        },
        ...(0, yd.Fb)("Board", {
          displayName: {
            translationKey: "item:board"
          },
          ttb: 1200,
          itemTexture: "board",
          model: "rotatableOffset",
          harvestType: "wood",
          solid: !1,
          rootMetaDesc: "Board|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: .8,
          blockModel: "Board"
        }),
        Net: {
          displayName: {
            translationKey: "item:net"
          },
          ttb: 400,
          textureInfo: "net",
          model: "CentreCross",
          heldItemScale: 1,
          solid: !1,
          harvestType: "wood",
          description: {
            translationKey: "item:netDescription"
          },
          itemTexture: "net"
        },
        Cobweb: {
          displayName: {
            translationKey: "item:cobweb"
          },
          ttb: 300,
          textureInfo: "cobweb",
          model: "CentreCross",
          heldItemScale: 1,
          solid: !1,
          harvestType: "cuttable",
          description: {
            translationKey: "item:cobwebDescription"
          },
          itemTexture: "cobweb"
        },
        "Brown Mushroom Block": {
          displayName: {
            translationKey: "item:brownMushroomBlock"
          },
          ttb: 1200,
          textureInfo: "brown_mushroom_block",
          harvestType: "cuttable"
        },
        "Red Mushroom Block": {
          displayName: {
            translationKey: "item:redMushroomBlock"
          },
          ttb: 1200,
          textureInfo: "red_mushroom_block",
          harvestType: "cuttable"
        },
        "Mushroom Stem": {
          displayName: {
            translationKey: "item:mushroomStem"
          },
          ttb: 1200,
          textureInfo: "mushroom_stem",
          harvestType: "cuttable"
        },
        "Fireball Block": {
          displayName: {
            translationKey: "item:fireballBlock"
          },
          ttb: 1,
          textureInfo: "fireball_block",
          harvestType: "rock",
          unlitStandaloneMesh: !0
        },
        "Iceball Block": {
          displayName: {
            translationKey: "item:iceballBlock"
          },
          ttb: 1,
          textureInfo: "iceball_block",
          harvestType: "rock",
          unlitStandaloneMesh: !0
        },
        "Watermelon Seeds": {
          displayName: {
            translationKey: "item:watermelonSeeds"
          },
          ttb: 400,
          textureInfo: "melon_stem",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "watermelon_seeds",
          description: {
            translationKey: "item:watermelonSeedsDescription"
          }
        },
        "Watermelon Seeds|Growing": {
          ttb: 400,
          textureInfo: "melon_stem",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          drops: "Watermelon Seeds"
        },
        ...(0, yd.Fb)("Attached Watermelon Stem", {
          displayName: {
            translationKey: "item:attachedWatermelonStem"
          },
          ttb: 400,
          textureInfo: ["attached_melon_stem_wrapper", "attached_melon_stem"],
          model: "CustomPlanes|rotatable",
          solid: !1,
          harvestType: "cuttable",
          drops: "Watermelon Seeds",
          rootMetaDesc: "Attached Watermelon Stem|meta|rot1",
          customPlanesInfo: [{
            textureIdx: 0,
            yRot: Math.PI / 4
          }, {
            textureIdx: 0,
            yRot: 3 * Math.PI / 4
          }, {
            textureIdx: 1,
            yRot: 3 * Math.PI / 2
          }]
        }),
        "Pumpkin Seeds": {
          displayName: {
            translationKey: "item:pumpkinSeeds"
          },
          ttb: 400,
          textureInfo: "melon_stem",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "pumpkin_seeds",
          description: {
            translationKey: "item:pumpkinSeedsDescription"
          }
        },
        "Pumpkin Seeds|Growing": {
          ttb: 400,
          textureInfo: "melon_stem",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          drops: "Pumpkin Seeds"
        },
        ...(0, yd.Fb)("Attached Pumpkin Stem", {
          displayName: {
            translationKey: "item:attachedPumpkinStem"
          },
          ttb: 400,
          textureInfo: ["attached_melon_stem_wrapper", "attached_melon_stem"],
          model: "CustomPlanes|rotatable",
          solid: !1,
          harvestType: "cuttable",
          drops: "Pumpkin Seeds",
          rootMetaDesc: "Attached Pumpkin Stem|meta|rot1",
          customPlanesInfo: [{
            textureIdx: 0,
            yRot: Math.PI / 4
          }, {
            textureIdx: 0,
            yRot: 3 * Math.PI / 4
          }, {
            textureIdx: 1,
            yRot: 3 * Math.PI / 2
          }]
        }),
        Pumpkin: {
          displayName: {
            translationKey: "item:pumpkin"
          },
          ttb: 1200,
          textureInfo: ["pumpkin_side", "pumpkin_top"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          harvestType: "wood"
        },
        ...(0, yd.Hb)("Carved Pumpkin", {
          displayName: {
            translationKey: "item:carvedPumpkin"
          },
          ttb: 1200,
          textureInfo: ["carved_pumpkin", "pumpkin_side", "pumpkin_top"],
          harvestType: "wood",
          rootMetaDesc: "Carved Pumpkin|meta|rot1"
        }),
        ...(0, yd.Hb)("Jack o'Lantern", {
          displayName: {
            translationKey: "item:jackO'Lantern"
          },
          ttb: 1200,
          textureInfo: ["pumpkin_face_on", "pumpkin_side", "pumpkin_top"],
          harvestType: "wood",
          rootMetaDesc: "Jack o'Lantern|meta|rot1",
          Pq: [14, 10, 4]
        }),
        "Melon Seeds": {
          displayName: {
            translationKey: "item:melonSeeds"
          },
          ttb: 400,
          textureInfo: "melon_stem",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "melon_seeds",
          description: {
            translationKey: "item:melonSeedsDescription"
          }
        },
        "Melon Seeds|Growing": {
          ttb: 400,
          textureInfo: "melon_stem",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          drops: "Melon Seeds"
        },
        ...(0, yd.Fb)("Attached Melon Stem", {
          displayName: {
            translationKey: "item:attachedMelonStem"
          },
          ttb: 400,
          textureInfo: ["attached_melon_stem_wrapper", "attached_melon_stem"],
          model: "CustomPlanes|rotatable",
          solid: !1,
          harvestType: "cuttable",
          drops: "Melon Seeds",
          rootMetaDesc: "Attached Melon Stem|meta|rot1",
          customPlanesInfo: [{
            textureIdx: 0,
            yRot: Math.PI / 4
          }, {
            textureIdx: 0,
            yRot: 3 * Math.PI / 4
          }, {
            textureIdx: 1,
            yRot: 3 * Math.PI / 2
          }]
        }),
        Melon: {
          displayName: {
            translationKey: "item:melon"
          },
          ttb: 1200,
          textureInfo: ["melon_side", "melon_top"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          harvestType: "wood"
        },
        "Iron Watermelon": {
          displayName: {
            translationKey: "item:ironWatermelon"
          },
          ttb: 1200,
          textureInfo: ["iron_watermelon_side", "iron_watermelon_top"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          harvestType: "rock"
        },
        "Patterned Black Glass": {
          displayName: {
            translationKey: "item:patternedBlackGlass"
          },
          ttb: 450,
          textureInfo: "patterned_glass_black",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        "Patterned Blue Glass": {
          displayName: {
            translationKey: "item:patternedBlueGlass"
          },
          ttb: 450,
          textureInfo: "patterned_glass_blue",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        "Patterned Brown Glass": {
          displayName: {
            translationKey: "item:patternedBrownGlass"
          },
          ttb: 450,
          textureInfo: "patterned_glass_brown",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        "Patterned Cyan Glass": {
          displayName: {
            translationKey: "item:patternedCyanGlass"
          },
          ttb: 450,
          textureInfo: "patterned_glass_cyan",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        "Patterned Gray Glass": {
          displayName: {
            translationKey: "item:patternedGrayGlass"
          },
          ttb: 450,
          textureInfo: "patterned_glass_gray",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        "Patterned Light Gray Glass": {
          displayName: {
            translationKey: "item:patternedLightGrayGlass"
          },
          ttb: 450,
          textureInfo: "patterned_glass_light_gray",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        "Patterned Green Glass": {
          displayName: {
            translationKey: "item:patternedGreenGlass"
          },
          ttb: 450,
          textureInfo: "patterned_glass_green",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        "Patterned Light Blue Glass": {
          displayName: {
            translationKey: "item:patternedLightBlueGlass"
          },
          ttb: 450,
          textureInfo: "patterned_glass_light_blue",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        "Patterned Lime Glass": {
          displayName: {
            translationKey: "item:patternedLimeGlass"
          },
          ttb: 450,
          textureInfo: "patterned_glass_lime",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        "Patterned Magenta Glass": {
          displayName: {
            translationKey: "item:patternedMagentaGlass"
          },
          ttb: 450,
          textureInfo: "patterned_glass_magenta",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        "Patterned Orange Glass": {
          displayName: {
            translationKey: "item:patternedOrangeGlass"
          },
          ttb: 450,
          textureInfo: "patterned_glass_orange",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        "Patterned Pink Glass": {
          displayName: {
            translationKey: "item:patternedPinkGlass"
          },
          ttb: 450,
          textureInfo: "patterned_glass_pink",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        "Patterned Purple Glass": {
          displayName: {
            translationKey: "item:patternedPurpleGlass"
          },
          ttb: 450,
          textureInfo: "patterned_glass_purple",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        "Patterned Red Glass": {
          displayName: {
            translationKey: "item:patternedRedGlass"
          },
          ttb: 450,
          textureInfo: "patterned_glass_red",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        "Patterned White Glass": {
          displayName: {
            translationKey: "item:patternedWhiteGlass"
          },
          ttb: 450,
          textureInfo: "patterned_glass_white",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        "Patterned Yellow Glass": {
          displayName: {
            translationKey: "item:patternedYellowGlass"
          },
          ttb: 450,
          textureInfo: "patterned_glass_yellow",
          transTex: !0,
          harvestType: "wood",
          soundType: {
            break: "glass",
            place: "stone"
          }
        },
        ...(0, yd.Fb)("Potion Table", {
          displayName: {
            translationKey: "item:potionTable"
          },
          ttb: 1200,
          harvestType: "wood",
          rootMetaDesc: "Potion Table|meta|rot1",
          description: {
            translationKey: "item:potionTableDescription"
          },
          ...wd("Potion Table", "potion_table", {
            textureAnimation: {
              frames: 4,
              animationInterval: 200
            }
          })
        }),
        ...(0, yd.Fb)("Pine Ladder", {
          displayName: {
            translationKey: "item:pineLadder"
          },
          ttb: 1e3,
          itemTexture: "ladder_pine",
          model: "rotatableOffset",
          harvestType: "wood",
          rootMetaDesc: "Pine Ladder|meta|rot1",
          modelScale: 10,
          solid: !1,
          blockModel: "Pine Ladder",
          heldItemScale: 10,
          blockModelItem: !0,
          rotatableOffsetAmt: .375
        }),
        ...(0, yd.Fb)("Plum Ladder", {
          displayName: {
            translationKey: "item:plumLadder"
          },
          ttb: 1e3,
          itemTexture: "ladder_plum",
          model: "rotatableOffset",
          harvestType: "wood",
          rootMetaDesc: "Plum Ladder|meta|rot1",
          modelScale: 10,
          solid: !1,
          blockModel: "Plum Ladder",
          heldItemScale: 10,
          blockModelItem: !0,
          rotatableOffsetAmt: .375
        }),
        ...(0, yd.Fb)("Cedar Ladder", {
          displayName: {
            translationKey: "item:cedarLadder"
          },
          ttb: 1e3,
          itemTexture: "ladder_cedar",
          model: "rotatableOffset",
          harvestType: "wood",
          rootMetaDesc: "Cedar Ladder|meta|rot1",
          modelScale: 10,
          solid: !1,
          blockModel: "Cedar Ladder",
          heldItemScale: 10,
          blockModelItem: !0
        }),
        ...(0, yd.Fb)("Aspen Ladder", {
          displayName: {
            translationKey: "item:aspenLadder"
          },
          ttb: 1e3,
          itemTexture: "ladder_aspen",
          model: "rotatableOffset",
          harvestType: "wood",
          rootMetaDesc: "Aspen Ladder|meta|rot1",
          modelScale: 10,
          solid: !1,
          blockModel: "Aspen Ladder",
          heldItemScale: 10,
          blockModelItem: !0
        }),
        ...(0, yd.Fb)("Jungle Ladder", {
          displayName: {
            translationKey: "item:jungleLadder"
          },
          ttb: 1e3,
          itemTexture: "ladder_jungle",
          model: "rotatableOffset",
          harvestType: "wood",
          rootMetaDesc: "Jungle Ladder|meta|rot1",
          modelScale: 10,
          solid: !1,
          blockModel: "Jungle Ladder",
          heldItemScale: 10,
          blockModelItem: !0,
          rotatableOffsetAmt: .375
        }),
        ...(0, yd.Fb)("Palm Ladder", {
          displayName: {
            translationKey: "item:palmLadder"
          },
          ttb: 1e3,
          itemTexture: "ladder_palm",
          model: "rotatableOffset",
          harvestType: "wood",
          rootMetaDesc: "Palm Ladder|meta|rot1",
          modelScale: 10,
          solid: !1,
          blockModel: "Palm Ladder",
          heldItemScale: 10,
          blockModelItem: !0
        }),
        ...(0, yd.Fb)("Pear Ladder", {
          displayName: {
            translationKey: "item:pearLadder"
          },
          ttb: 1e3,
          itemTexture: "ladder_pear",
          model: "rotatableOffset",
          harvestType: "wood",
          rootMetaDesc: "Pear Ladder|meta|rot1",
          modelScale: 10,
          solid: !1,
          blockModel: "Pear Ladder",
          heldItemScale: 10,
          blockModelItem: !0
        }),
        "Black Carpet": {
          displayName: {
            translationKey: "item:blackCarpet"
          },
          ttb: 300,
          itemTexture: "carpet_black_icon",
          model: "CustomModel",
          harvestType: "cuttable",
          solid: !1,
          Sy: Ed,
          blockModel: "carpet_black_model",
          modelScale: 10,
          customModelInfo: {
            yOffset: -.4375
          },
          particlesIgnoreBlack: !0
        },
        "Blue Carpet": {
          displayName: {
            translationKey: "item:blueCarpet"
          },
          ttb: 300,
          itemTexture: "carpet_blue_icon",
          model: "CustomModel",
          harvestType: "cuttable",
          solid: !1,
          Sy: Ed,
          blockModel: "carpet_blue_model",
          modelScale: 10,
          customModelInfo: {
            yOffset: -.4375
          },
          particlesIgnoreBlack: !0
        },
        "Brown Carpet": {
          displayName: {
            translationKey: "item:brownCarpet"
          },
          ttb: 300,
          itemTexture: "carpet_brown_icon",
          model: "CustomModel",
          harvestType: "cuttable",
          solid: !1,
          Sy: Ed,
          blockModel: "carpet_brown_model",
          modelScale: 10,
          customModelInfo: {
            yOffset: -.4375
          },
          particlesIgnoreBlack: !0
        },
        "Cyan Carpet": {
          displayName: {
            translationKey: "item:cyanCarpet"
          },
          ttb: 300,
          itemTexture: "carpet_cyan_icon",
          model: "CustomModel",
          harvestType: "cuttable",
          solid: !1,
          Sy: Ed,
          blockModel: "carpet_cyan_model",
          modelScale: 10,
          customModelInfo: {
            yOffset: -.4375
          },
          particlesIgnoreBlack: !0
        },
        "Gray Carpet": {
          displayName: {
            translationKey: "item:grayCarpet"
          },
          ttb: 300,
          itemTexture: "carpet_gray_icon",
          model: "CustomModel",
          harvestType: "cuttable",
          solid: !1,
          Sy: Ed,
          blockModel: "carpet_gray_model",
          modelScale: 10,
          customModelInfo: {
            yOffset: -.4375
          },
          particlesIgnoreBlack: !0
        },
        "Light Gray Carpet": {
          displayName: {
            translationKey: "item:lightGrayCarpet"
          },
          ttb: 300,
          itemTexture: "carpet_light_gray_icon",
          model: "CustomModel",
          harvestType: "cuttable",
          solid: !1,
          Sy: Ed,
          blockModel: "carpet_light_gray_model",
          modelScale: 10,
          customModelInfo: {
            yOffset: -.4375
          },
          particlesIgnoreBlack: !0
        },
        "Green Carpet": {
          displayName: {
            translationKey: "item:greenCarpet"
          },
          ttb: 300,
          itemTexture: "carpet_green_icon",
          model: "CustomModel",
          harvestType: "cuttable",
          solid: !1,
          Sy: Ed,
          blockModel: "carpet_green_model",
          modelScale: 10,
          customModelInfo: {
            yOffset: -.4375
          },
          particlesIgnoreBlack: !0
        },
        "Light Blue Carpet": {
          displayName: {
            translationKey: "item:lightBlueCarpet"
          },
          ttb: 300,
          itemTexture: "carpet_light_blue_icon",
          model: "CustomModel",
          harvestType: "cuttable",
          solid: !1,
          Sy: Ed,
          blockModel: "carpet_light_blue_model",
          modelScale: 10,
          customModelInfo: {
            yOffset: -.4375
          },
          particlesIgnoreBlack: !0
        },
        "Lime Carpet": {
          displayName: {
            translationKey: "item:limeCarpet"
          },
          ttb: 300,
          itemTexture: "carpet_lime_icon",
          model: "CustomModel",
          harvestType: "cuttable",
          solid: !1,
          Sy: Ed,
          blockModel: "carpet_lime_model",
          modelScale: 10,
          customModelInfo: {
            yOffset: -.4375
          },
          particlesIgnoreBlack: !0
        },
        "Magenta Carpet": {
          displayName: {
            translationKey: "item:magentaCarpet"
          },
          ttb: 300,
          itemTexture: "carpet_magenta_icon",
          model: "CustomModel",
          harvestType: "cuttable",
          solid: !1,
          Sy: Ed,
          blockModel: "carpet_magenta_model",
          modelScale: 10,
          customModelInfo: {
            yOffset: -.4375
          },
          particlesIgnoreBlack: !0
        },
        "Orange Carpet": {
          displayName: {
            translationKey: "item:orangeCarpet"
          },
          ttb: 300,
          itemTexture: "carpet_orange_icon",
          model: "CustomModel",
          harvestType: "cuttable",
          solid: !1,
          Sy: Ed,
          blockModel: "carpet_orange_model",
          modelScale: 10,
          customModelInfo: {
            yOffset: -.4375
          },
          particlesIgnoreBlack: !0
        },
        "Pink Carpet": {
          displayName: {
            translationKey: "item:pinkCarpet"
          },
          ttb: 300,
          itemTexture: "carpet_pink_icon",
          model: "CustomModel",
          harvestType: "cuttable",
          solid: !1,
          Sy: Ed,
          blockModel: "carpet_pink_model",
          modelScale: 10,
          customModelInfo: {
            yOffset: -.4375
          },
          particlesIgnoreBlack: !0
        },
        "Purple Carpet": {
          displayName: {
            translationKey: "item:purpleCarpet"
          },
          ttb: 300,
          itemTexture: "carpet_purple_icon",
          model: "CustomModel",
          harvestType: "cuttable",
          solid: !1,
          Sy: Ed,
          blockModel: "carpet_purple_model",
          modelScale: 10,
          customModelInfo: {
            yOffset: -.4375
          },
          particlesIgnoreBlack: !0
        },
        "Red Carpet": {
          displayName: {
            translationKey: "item:redCarpet"
          },
          ttb: 300,
          itemTexture: "carpet_red_icon",
          model: "CustomModel",
          harvestType: "cuttable",
          solid: !1,
          Sy: Ed,
          blockModel: "carpet_red_model",
          modelScale: 10,
          customModelInfo: {
            yOffset: -.4375
          },
          particlesIgnoreBlack: !0
        },
        "White Carpet": {
          displayName: {
            translationKey: "item:whiteCarpet"
          },
          ttb: 300,
          itemTexture: "carpet_white_icon",
          model: "CustomModel",
          harvestType: "cuttable",
          solid: !1,
          Sy: Ed,
          blockModel: "carpet_white_model",
          modelScale: 10,
          customModelInfo: {
            yOffset: -.4375
          },
          particlesIgnoreBlack: !0
        },
        "Yellow Carpet": {
          displayName: {
            translationKey: "item:yellowCarpet"
          },
          ttb: 300,
          itemTexture: "carpet_yellow_icon",
          model: "CustomModel",
          harvestType: "cuttable",
          solid: !1,
          Sy: Ed,
          blockModel: "carpet_yellow_model",
          modelScale: 10,
          customModelInfo: {
            yOffset: -.4375
          },
          particlesIgnoreBlack: !0
        },
        ...(0, yd.B)("Bookshelf", {
          displayName: {
            translationKey: "item:bookshelf"
          },
          ttb: 1800,
          textureInfo: ["bookshelf", "planks_maple"],
          texturePerSide: [1, 1, 1, 1, 0, 0],
          harvestType: "wood",
          drops: null,
          rootMetaDesc: "Bookshelf|meta|rot1|books6"
        }),
        ...(0, yd.bb)("Mailbox", {
          displayName: {
            translationKey: "item:mailbox"
          },
          ttb: 4200,
          textureInfo: ["mailbox_front", "mailbox_side"],
          texturePerSide: [1, 1, 1, 1, 0, 1],
          harvestType: "wood",
          rootMetaDesc: "Mailbox|meta|rot1|empty",
          description: {
            translationKey: "item:mailboxDescription"
          }
        }),
        Rice: {
          displayName: {
            translationKey: "item:rice"
          },
          ttb: 400,
          textureInfo: "rice_stage0",
          model: "SquareSided",
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "rice",
          description: {
            translationKey: "item:riceDescription"
          }
        },
        ...(0, yd.tb)("Rice", {
          displayName: {
            translationKey: "item:rice"
          },
          ttb: 400,
          model: "SquareSided",
          solid: !1,
          harvestType: "cuttable",
          drops: "Rice"
        }, ["rice_stage2", "rice_stage3", "rice_stage4", "rice_stage5", "rice_stage6"]),
        "Rice|FreshlyGrown": {
          ttb: 400,
          textureInfo: "rice_stage7",
          model: "SquareSided",
          solid: !1,
          harvestType: "cuttable",
          onMinedAura: 5
        },
        Cranberries: {
          displayName: {
            translationKey: "item:cranberries"
          },
          ttb: 400,
          textureInfo: "berry_bush_stage0",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "cranberries",
          description: {
            translationKey: "item:cranberriesDescription"
          }
        },
        ...(0, yd.tb)("Cranberries", {
          ttb: 400,
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          drops: "Cranberries"
        }, ["berry_bush_stage1", "berry_bush_stage2"], {
          2: {
            onMinedAura: 5
          }
        }),
        "Red Mushroom": {
          displayName: {
            translationKey: "item:redMushroom"
          },
          ttb: 400,
          textureInfo: "red_mushroom",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "red_mushroom"
        },
        "Brown Mushroom": {
          displayName: {
            translationKey: "item:brownMushroom"
          },
          ttb: 400,
          textureInfo: "brown_mushroom",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "brown_mushroom"
        },
        "Cotton Seeds": {
          displayName: {
            translationKey: "item:cottonSeeds"
          },
          ttb: 400,
          textureInfo: "cotton_plant_stage0",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "cotton_seeds",
          description: {
            translationKey: "item:cottonSeedsDescription"
          }
        },
        ...(0, yd.tb)("Cotton", {
          displayName: {
            translationKey: "item:cotton"
          },
          ttb: 400,
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          drops: "Cotton Seeds"
        }, ["cotton_plant_stage1", "cotton_plant_stage2", "cotton_plant_stage3"], {
          3: {
            onMinedAura: 5
          }
        }),
        "Tribe Protector": {
          displayName: {
            translationKey: "item:tribeProtector"
          },
          ttb: 5e3,
          textureInfo: "protector_tribe",
          harvestType: "rock",
          description: {
            translationKey: "item:tribeProtectorDescription"
          }
        },
        "Tall Grass": {
          displayName: {
            translationKey: "item:tallGrass"
          },
          ttb: 1,
          textureInfo: "tall_grass_bottom",
          model: "CentreCross",
          heldItemScale: .5,
          solid: !1,
          harvestType: "cuttable",
          drops: null,
          specialToolDrop: {
            tool: "Shears",
            drops: "Tall Grass"
          },
          itemTexture: "tall_grass_bottom",
          canBePlacedOver: !0
        },
        "Tall Grass|Top": {
          ttb: 1,
          textureInfo: "tall_grass_top",
          model: "CentreCross",
          heldItemScale: .5,
          solid: !1,
          harvestType: "cuttable",
          drops: null,
          specialToolDrop: {
            tool: "Shears",
            drops: "Tall Grass"
          },
          itemTexture: "tall_grass_top",
          canBePlacedOver: !0
        },
        "Faction Protector": {
          ttb: 5e3,
          textureInfo: "protector_faction",
          harvestType: "rock",
          description: "Prevents other factions from changing blocks and\nopening chests in the placed chunk"
        },
        "Barkless Palm Log": {
          displayName: {
            translationKey: "item:barklessPalmLog"
          },
          ttb: 2e3,
          textureInfo: "stripped_palm_log",
          harvestType: "wood"
        },
        "Barkless Pear Log": {
          displayName: {
            translationKey: "item:barklessPearLog"
          },
          ttb: 2e3,
          textureInfo: "stripped_pear_log",
          harvestType: "wood"
        },
        "Barkless Maple Log|TreeBase|Maple": {
          ttb: 2e3,
          textureInfo: "stripped_maple_log",
          harvestType: "wood",
          drops: "Barkless Maple Log"
        },
        "Barkless Plum Log|TreeBase|Plum": {
          ttb: 2e3,
          textureInfo: "stripped_plum_log",
          harvestType: "wood",
          drops: "Barkless Plum Log"
        },
        "Barkless Cedar Log|TreeBase|Cedar": {
          ttb: 2e3,
          textureInfo: "stripped_cedar_log",
          harvestType: "wood",
          drops: "Barkless Cedar Log"
        },
        "Barkless Aspen Log|TreeBase|Aspen": {
          ttb: 2e3,
          textureInfo: "stripped_aspen_log",
          harvestType: "wood",
          drops: "Barkless Aspen Log"
        },
        "Barkless Jungle Log|TreeBase|Jungle": {
          ttb: 2e3,
          textureInfo: "stripped_jungle_log",
          harvestType: "wood",
          drops: "Barkless Jungle Log"
        },
        "Barkless Pine Log|TreeBase|Pine": {
          ttb: 2e3,
          textureInfo: "stripped_pine_log",
          harvestType: "wood",
          drops: "Barkless Pine Log"
        },
        "Barkless Palm Log|TreeBase|Palm": {
          ttb: 2e3,
          textureInfo: "stripped_palm_log",
          harvestType: "wood",
          drops: "Barkless Palm Log"
        },
        "Barkless Pear Log|TreeBase|Pear": {
          ttb: 2e3,
          textureInfo: "stripped_pear_log",
          harvestType: "wood",
          drops: "Barkless Pear Log"
        },
        "Mystery Block": {
          displayName: {
            translationKey: "item:mysteryBlock"
          },
          ttb: 1200,
          textureInfo: "mystery_block",
          harvestType: "rock"
        },
        Rocket: {
          displayName: {
            translationKey: "item:rocket"
          },
          ttb: 1,
          textureInfo: "rocket_block",
          harvestType: "rock",
          unlitStandaloneMesh: !0
        },
        "Super Rocket": {
          displayName: {
            translationKey: "item:superRocket"
          },
          ttb: 1,
          textureInfo: "super_rocket_block",
          harvestType: "rock",
          unlitStandaloneMesh: !0
        },
        ...(0, yd.O)(),
        Grenade: {
          displayName: {
            translationKey: "item:grenade"
          },
          ttb: 1,
          textureInfo: "grenade_block",
          harvestType: "rock",
          unlitStandaloneMesh: !0
        },
        "Cherry Log": {
          displayName: {
            translationKey: "item:cherryLog"
          },
          ttb: 2400,
          textureInfo: "log_cherry",
          harvestType: "wood"
        },
        "Barkless Cherry Log": {
          displayName: {
            translationKey: "item:barklessCherryLog"
          },
          ttb: 2e3,
          textureInfo: "stripped_cherry_log",
          harvestType: "wood"
        },
        "Barkless Cherry Log|TreeBase|Cherry": {
          ttb: 2e3,
          textureInfo: "stripped_cherry_log",
          harvestType: "wood",
          drops: "Barkless Cherry Log"
        },
        "Cherry Wood Planks": {
          displayName: {
            translationKey: "item:cherryWoodPlanks"
          },
          ttb: 1800,
          textureInfo: "planks_cherry",
          harvestType: "wood"
        },
        "Cherry Leaves": {
          displayName: {
            translationKey: "item:cherryLeaves"
          },
          ttb: 350,
          textureInfo: "leaves_cherry",
          harvestType: "cuttable"
        },
        ...(0, yd.Kb)("Fallen Cherry Leaves", {
          displayName: {
            translationKey: "item:fallenCherryLeaves"
          },
          ttb: 350,
          textureInfo: ["fallen_cherry_leaves_side", "leaves_cherry"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          solid: !1,
          harvestType: "cuttable",
          rootMetaDesc: "Fallen Cherry Leaves|meta|rot1|bot"
        }),
        "Cherry Door": {
          displayName: {
            translationKey: "item:cherryDoor"
          },
          ttb: 3600,
          itemTexture: "cherry_door",
          model: "door",
          harvestType: "wood",
          rootMetaDesc: "Cherry Door|meta|rot1|closed",
          particlesIgnoreBlack: !0,
          blockModel: "Cherry Door"
        },
        "Cherry Door|meta|rot1|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Cherry Door|meta|rot2|closed": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Cherry Door|meta|rot2|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Cherry Door|meta|rot3|closed": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Cherry Door|meta|rot3|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Cherry Door|meta|rot4|closed": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Cherry Door|meta|rot4|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "_Cherry Door Top": {
          ttb: 3600,
          itemTexture: "cherry_door",
          harvestType: "wood",
          model: "door",
          drops: "Cherry Door",
          rootMetaDesc: "_Cherry Door Top|meta|rot1|closed",
          particlesIgnoreBlack: !0,
          blockModel: "_Cherry Door Top"
        },
        "_Cherry Door Top|meta|rot1|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Cherry Door"
        },
        "_Cherry Door Top|meta|rot2|closed": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Cherry Door"
        },
        "_Cherry Door Top|meta|rot2|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Cherry Door"
        },
        "_Cherry Door Top|meta|rot3|closed": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Cherry Door"
        },
        "_Cherry Door Top|meta|rot3|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Cherry Door"
        },
        "_Cherry Door Top|meta|rot4|closed": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Cherry Door"
        },
        "_Cherry Door Top|meta|rot4|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Cherry Door"
        },
        "Cherry Trapdoor": {
          displayName: {
            translationKey: "item:cherryTrapdoor"
          },
          ttb: 2800,
          itemTexture: "cherry_trapdoor",
          model: "trapdoor",
          harvestType: "wood",
          rootMetaDesc: "Cherry Trapdoor|meta|rot1|closed",
          blockModel: "Cherry Trapdoor",
          heldItemScale: .5,
          blockModelItem: !0
        },
        "Cherry Trapdoor|meta|rot1|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Cherry Trapdoor|meta|rot2|closed": {
          ttb: 2800,
          harvestType: "wood"
        },
        "Cherry Trapdoor|meta|rot2|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Cherry Trapdoor|meta|rot3|closed": {
          ttb: 2800,
          harvestType: "wood"
        },
        "Cherry Trapdoor|meta|rot3|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Cherry Trapdoor|meta|rot4|closed": {
          ttb: 2800,
          harvestType: "wood"
        },
        "Cherry Trapdoor|meta|rot4|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Cherry Sapling": {
          displayName: {
            translationKey: "item:cherrySapling"
          },
          ttb: 1,
          textureInfo: "cherry_sapling",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "cherry_sapling"
        },
        "Cherry Log|TreeBase|Cherry": {
          ttb: 2400,
          textureInfo: "log_cherry",
          harvestType: "wood",
          drops: "Cherry Log"
        },
        "Cherry Leaves|TreeCanopy": {
          ttb: 350,
          textureInfo: "leaves_cherry",
          harvestType: "cuttable",
          drops: "Cherry Leaves"
        },
        ...(0, yd.Kb)("Cherry Slab", {
          displayName: {
            translationKey: "item:cherrySlab"
          },
          ttb: 1200,
          textureInfo: ["slab_cherry_side", "planks_cherry"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "wood",
          slabFullBlock: "Cherry Wood Planks",
          rootMetaDesc: "Cherry Slab|meta|rot1|bot"
        }),
        ...(0, yd.Fb)("Cherry Ladder", {
          displayName: {
            translationKey: "item:cherryLadder"
          },
          ttb: 1e3,
          itemTexture: "ladder_cherry",
          model: "rotatableOffset",
          harvestType: "wood",
          rootMetaDesc: "Cherry Ladder|meta|rot1",
          modelScale: 1,
          solid: !1,
          blockModel: "Cherry Ladder",
          heldItemScale: 1,
          blockModelItem: !0
        }),
        "Cherry Block": {
          displayName: {
            translationKey: "item:cherryBlock"
          },
          ttb: 600,
          textureInfo: ["cherry_block_side", "cherry_block_top", "cherry_block_bottom"],
          texturePerSide: [0, 0, 1, 2, 0, 0],
          harvestType: "wood"
        },
        "Bouncy Bomb Block": {
          displayName: {
            translationKey: "item:bouncyBombBlock"
          },
          ttb: 1,
          textureInfo: "bouncy_bomb_block",
          harvestType: "rock",
          unlitStandaloneMesh: !0
        },
        "Obby Rocket": {
          displayName: {
            translationKey: "item:rocket"
          },
          ttb: 1,
          textureInfo: "rocket_block",
          harvestType: "rock",
          unlitStandaloneMesh: !0
        },
        "Wood Spikes": {
          displayName: {
            translationKey: "item:woodSpikes"
          },
          ttb: 1200,
          harvestType: "wood",
          model: "CustomModel",
          customModelInfo: {
            yOffset: -2 / 16
          },
          itemTexture: "spikes_wood",
          solid: !1,
          modelScale: 10,
          blockModel: "Spikes_Wood",
          description: {
            translationKey: "item:spikesDescription"
          }
        },
        "Stone Spikes": {
          displayName: {
            translationKey: "item:stoneSpikes"
          },
          ttb: 1200,
          harvestType: "rock",
          model: "CustomModel",
          customModelInfo: {
            yOffset: -2 / 16
          },
          itemTexture: "spikes_stone",
          solid: !1,
          modelScale: 10,
          blockModel: "Spikes_Stone",
          description: {
            translationKey: "item:spikesDescription"
          }
        },
        "Iron Spikes": {
          displayName: {
            translationKey: "item:ironSpikes"
          },
          ttb: 1200,
          harvestType: "rock",
          model: "CustomModel",
          customModelInfo: {
            yOffset: -2 / 16
          },
          itemTexture: "spikes_iron",
          solid: !1,
          modelScale: 10,
          blockModel: "Spikes_Iron",
          description: {
            translationKey: "item:spikesDescription"
          }
        },
        "Gold Spikes": {
          displayName: {
            translationKey: "item:goldSpikes"
          },
          ttb: 1200,
          harvestType: "rock",
          model: "CustomModel",
          customModelInfo: {
            yOffset: -2 / 16
          },
          itemTexture: "spikes_gold",
          solid: !1,
          modelScale: 10,
          blockModel: "Spikes_Gold",
          description: {
            translationKey: "item:spikesDescription"
          }
        },
        "Diamond Spikes": {
          displayName: {
            translationKey: "item:diamondSpikes"
          },
          ttb: 1200,
          harvestType: "rock",
          model: "CustomModel",
          customModelInfo: {
            yOffset: -2 / 16
          },
          itemTexture: "spikes_diamond",
          solid: !1,
          modelScale: 10,
          blockModel: "Spikes_Diamond",
          description: {
            translationKey: "item:spikesDescription"
          }
        },
        "Kill Spikes": {
          displayName: {
            translationKey: "item:killSpikes"
          },
          ttb: 1200,
          harvestType: "rock",
          model: "CustomModel",
          customModelInfo: {
            yOffset: -2 / 16
          },
          itemTexture: "spikes_kill",
          solid: !1,
          modelScale: 10,
          blockModel: "Spikes_Kill",
          description: {
            translationKey: "item:killSpikesDescription"
          }
        },
        "Corn Block": {
          displayName: {
            translationKey: "item:cornBlock"
          },
          ttb: 600,
          textureInfo: ["corn_block_side", "corn_block_top", "corn_block_bottom"],
          texturePerSide: [0, 0, 1, 2, 0, 0],
          harvestType: "wood"
        },
        "Corn Seeds": {
          displayName: {
            translationKey: "item:cornSeeds"
          },
          ttb: 400,
          textureInfo: "corn_stage0",
          model: "SquareSided",
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "corn_seeds",
          description: {
            translationKey: "item:cornSeedsDescription"
          }
        },
        ...(0, yd.tb)("Corn Seeds", {
          displayName: {
            translationKey: "item:cornSeeds"
          },
          ttb: 400,
          model: "SquareSided",
          solid: !1,
          harvestType: "cuttable",
          drops: "Corn Seeds"
        }, ["corn_stage1"]),
        "Corn Seeds|FreshlyGrown": {
          ttb: 400,
          textureInfo: "corn_stage2",
          model: "SquareSided",
          solid: !1,
          harvestType: "cuttable",
          drops: "Corn Seeds"
        },
        "Corn Seeds|Growing": {
          ttb: 400,
          textureInfo: "corn_stage2",
          model: "SquareSided",
          solid: !1,
          harvestType: "cuttable",
          drops: "Corn Seeds"
        },
        ...(0, yd.tb)("Corn Plant", {
          displayName: {
            translationKey: "item:corn"
          },
          ttb: 400,
          model: "SquareSided",
          solid: !1,
          harvestType: "cuttable",
          drops: "Corn Seeds"
        }, ["corn_stage0", "corn_stage1", "corn_stage2", "corn_stage3", "corn_stage4"]),
        "Corn Plant": {
          displayName: {
            translationKey: "item:corn"
          },
          ttb: 400,
          textureInfo: "corn_stage5",
          model: "SquareSided",
          solid: !1,
          harvestType: "cuttable",
          drops: "Corn Seeds"
        },
        "Corn Plant|FreshlyGrown": {
          ttb: 400,
          textureInfo: "corn_stage5",
          model: "SquareSided",
          solid: !1,
          harvestType: "cuttable",
          drops: "Corn Seeds",
          onMinedAura: 10
        },
        ...(0, yd.Hb)("Loot Chest", {
          displayName: {
            translationKey: "item:chest"
          },
          ttb: 3e3,
          textureInfo: ["chest_front", "chest_side", "chest_top[rot[1", "chest_top[rot[2", "chest_top[rot[3", "chest_top[rot[4", "chest_back"],
          harvestType: "wood",
          rootMetaDesc: "Loot Chest|meta|rot1",
          drops: "Chest"
        }, [
          [1, 1, 2, 2, 0, 6],
          [0, 6, 3, 3, 1, 1],
          [1, 1, 4, 4, 6, 0],
          [6, 0, 5, 5, 1, 1]
        ]),
        "Melting Ice": {
          displayName: {
            translationKey: "item:ice"
          },
          ttb: 1200,
          textureInfo: "ice",
          harvestType: "rock",
          harvestLevel: 0,
          stoodOnSpeedMultiplier: 1.4,
          drops: "Ice"
        },
        "Melting Ice|Breaking": {
          ttb: 200,
          textureInfo: "melting_ice",
          harvestType: "rock",
          harvestLevel: 0,
          stoodOnSpeedMultiplier: 1.4,
          drops: null
        },
        ...(0, yd.H)((dd => `${dd} Paintball Explosive`), {
          textureInfo: dd => [`explosive_paint_${(0,td.xe)(dd)}_side`, `explosive_paint_${(0,td.xe)(dd)}_top`],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          harvestType: "cuttable",
          ttb: 50
        }),
        ...(0, yd.H)((dd => `${dd} Quick Paintball Explosive`), {
          textureInfo: dd => `explosive_paint_quick_${(0,td.xe)(dd)}`,
          harvestType: "cuttable",
          ttb: 50
        }),
        ...(0, yd.H)((dd => `${dd} Seeking Paintball Explosive`), {
          textureInfo: dd => `explosive_paint_seeking_${(0,td.xe)(dd)}`,
          harvestType: "cuttable",
          ttb: 50
        }),
        ...(0, yd.H)((dd => `${dd} Sticky Paintball Explosive`), {
          textureInfo: dd => `explosive_paint_sticky_${(0,td.xe)(dd)}`,
          harvestType: "cuttable",
          ttb: 50
        }),
        ...(0, yd.Fb)("White Strongbed", {
          displayName: {
            translationKey: "item:whiteStrongbed"
          },
          ttb: 480,
          itemTexture: "white_strongbed",
          model: "rotatable",
          harvestType: "rock",
          rootMetaDesc: "White Strongbed|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "White Strongbed"
        }),
        ...(0, yd.Fb)("_White Strongbed Head", {
          ttb: 480,
          itemTexture: "white_strongbed",
          model: "rotatable",
          harvestType: "rock",
          drops: "White Strongbed",
          rootMetaDesc: "_White Strongbed Head|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "_White Strongbed Head"
        }),
        ...(0, yd.Fb)("Orange Strongbed", {
          displayName: {
            translationKey: "item:orangeStrongbed"
          },
          ttb: 480,
          itemTexture: "orange_strongbed",
          model: "rotatable",
          harvestType: "rock",
          rootMetaDesc: "Orange Strongbed|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "Orange Strongbed"
        }),
        ...(0, yd.Fb)("_Orange Strongbed Head", {
          ttb: 480,
          itemTexture: "orange_strongbed",
          model: "rotatable",
          harvestType: "rock",
          drops: "Orange Strongbed",
          rootMetaDesc: "_Orange Strongbed Head|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "_Orange Strongbed Head"
        }),
        ...(0, yd.Fb)("Magenta Strongbed", {
          displayName: {
            translationKey: "item:magentaStrongbed"
          },
          ttb: 480,
          itemTexture: "magenta_strongbed",
          model: "rotatable",
          harvestType: "rock",
          rootMetaDesc: "Magenta Strongbed|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "Magenta Strongbed"
        }),
        ...(0, yd.Fb)("_Magenta Strongbed Head", {
          ttb: 480,
          itemTexture: "magenta_strongbed",
          model: "rotatable",
          harvestType: "rock",
          drops: "Magenta Strongbed",
          rootMetaDesc: "_Magenta Strongbed Head|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "_Magenta Strongbed Head"
        }),
        ...(0, yd.Fb)("Light Blue Strongbed", {
          displayName: {
            translationKey: "item:lightBlueStrongbed"
          },
          ttb: 480,
          itemTexture: "light_blue_strongbed",
          model: "rotatable",
          harvestType: "rock",
          rootMetaDesc: "Light Blue Strongbed|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "Light Blue Strongbed"
        }),
        ...(0, yd.Fb)("_Light Blue Strongbed Head", {
          ttb: 480,
          itemTexture: "light_blue_strongbed",
          model: "rotatable",
          harvestType: "rock",
          drops: "Light Blue Strongbed",
          rootMetaDesc: "_Light Blue Strongbed Head|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "_Light Blue Strongbed Head"
        }),
        ...(0, yd.Fb)("Yellow Strongbed", {
          displayName: {
            translationKey: "item:yellowStrongbed"
          },
          ttb: 480,
          itemTexture: "yellow_strongbed",
          model: "rotatable",
          harvestType: "rock",
          rootMetaDesc: "Yellow Strongbed|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "Yellow Strongbed"
        }),
        ...(0, yd.Fb)("_Yellow Strongbed Head", {
          ttb: 480,
          itemTexture: "yellow_strongbed",
          model: "rotatable",
          harvestType: "rock",
          drops: "Yellow Strongbed",
          rootMetaDesc: "_Yellow Strongbed Head|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "_Yellow Strongbed Head"
        }),
        ...(0, yd.Fb)("Lime Strongbed", {
          displayName: {
            translationKey: "item:limeStrongbed"
          },
          ttb: 480,
          itemTexture: "lime_strongbed",
          model: "rotatable",
          harvestType: "rock",
          rootMetaDesc: "Lime Strongbed|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "Lime Strongbed"
        }),
        ...(0, yd.Fb)("_Lime Strongbed Head", {
          ttb: 480,
          itemTexture: "lime_strongbed",
          model: "rotatable",
          harvestType: "rock",
          drops: "Lime Strongbed",
          rootMetaDesc: "_Lime Strongbed Head|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "_Lime Strongbed Head"
        }),
        ...(0, yd.Fb)("Pink Strongbed", {
          displayName: {
            translationKey: "item:pinkStrongbed"
          },
          ttb: 480,
          itemTexture: "pink_strongbed",
          model: "rotatable",
          harvestType: "rock",
          rootMetaDesc: "Pink Strongbed|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "Pink Strongbed"
        }),
        ...(0, yd.Fb)("_Pink Strongbed Head", {
          ttb: 480,
          itemTexture: "pink_strongbed",
          model: "rotatable",
          harvestType: "rock",
          drops: "Pink Strongbed",
          rootMetaDesc: "_Pink Strongbed Head|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "_Pink Strongbed Head"
        }),
        ...(0, yd.Fb)("Gray Strongbed", {
          displayName: {
            translationKey: "item:grayStrongbed"
          },
          ttb: 480,
          itemTexture: "gray_strongbed",
          model: "rotatable",
          harvestType: "rock",
          rootMetaDesc: "Gray Strongbed|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "Gray Strongbed"
        }),
        ...(0, yd.Fb)("_Gray Strongbed Head", {
          ttb: 480,
          itemTexture: "gray_strongbed",
          model: "rotatable",
          harvestType: "rock",
          drops: "Gray Strongbed",
          rootMetaDesc: "_Gray Strongbed Head|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "_Gray Strongbed Head"
        }),
        ...(0, yd.Fb)("Light Gray Strongbed", {
          displayName: {
            translationKey: "item:lightGrayStrongbed"
          },
          ttb: 480,
          itemTexture: "light_gray_strongbed",
          model: "rotatable",
          harvestType: "rock",
          rootMetaDesc: "Light Gray Strongbed|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "Light Gray Strongbed"
        }),
        ...(0, yd.Fb)("_Light Gray Strongbed Head", {
          ttb: 480,
          itemTexture: "light_gray_strongbed",
          model: "rotatable",
          harvestType: "rock",
          drops: "Light Gray Strongbed",
          rootMetaDesc: "_Light Gray Strongbed Head|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "_Light Gray Strongbed Head"
        }),
        ...(0, yd.Fb)("Cyan Strongbed", {
          displayName: {
            translationKey: "item:cyanStrongbed"
          },
          ttb: 480,
          itemTexture: "cyan_strongbed",
          model: "rotatable",
          harvestType: "rock",
          rootMetaDesc: "Cyan Strongbed|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "Cyan Strongbed"
        }),
        ...(0, yd.Fb)("_Cyan Strongbed Head", {
          ttb: 480,
          itemTexture: "cyan_strongbed",
          model: "rotatable",
          harvestType: "rock",
          drops: "Cyan Strongbed",
          rootMetaDesc: "_Cyan Strongbed Head|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "_Cyan Strongbed Head"
        }),
        ...(0, yd.Fb)("Purple Strongbed", {
          displayName: {
            translationKey: "item:purpleStrongbed"
          },
          ttb: 480,
          itemTexture: "purple_strongbed",
          model: "rotatable",
          harvestType: "rock",
          rootMetaDesc: "Purple Strongbed|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "Purple Strongbed"
        }),
        ...(0, yd.Fb)("_Purple Strongbed Head", {
          ttb: 480,
          itemTexture: "purple_strongbed",
          model: "rotatable",
          harvestType: "rock",
          drops: "Purple Strongbed",
          rootMetaDesc: "_Purple Strongbed Head|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "_Purple Strongbed Head"
        }),
        ...(0, yd.Fb)("Blue Strongbed", {
          displayName: {
            translationKey: "item:blueStrongbed"
          },
          ttb: 480,
          itemTexture: "blue_strongbed",
          model: "rotatable",
          harvestType: "rock",
          rootMetaDesc: "Blue Strongbed|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "Blue Strongbed"
        }),
        ...(0, yd.Fb)("_Blue Strongbed Head", {
          ttb: 480,
          itemTexture: "blue_strongbed",
          model: "rotatable",
          harvestType: "rock",
          drops: "Blue Strongbed",
          rootMetaDesc: "_Blue Strongbed Head|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "_Blue Strongbed Head"
        }),
        ...(0, yd.Fb)("Brown Strongbed", {
          displayName: {
            translationKey: "item:brownStrongbed"
          },
          ttb: 480,
          itemTexture: "brown_strongbed",
          model: "rotatable",
          harvestType: "rock",
          rootMetaDesc: "Brown Strongbed|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "Brown Strongbed"
        }),
        ...(0, yd.Fb)("_Brown Strongbed Head", {
          ttb: 480,
          itemTexture: "brown_strongbed",
          model: "rotatable",
          harvestType: "rock",
          drops: "Brown Strongbed",
          rootMetaDesc: "_Brown Strongbed Head|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "_Brown Strongbed Head"
        }),
        ...(0, yd.Fb)("Green Strongbed", {
          displayName: {
            translationKey: "item:greenStrongbed"
          },
          ttb: 480,
          itemTexture: "green_strongbed",
          model: "rotatable",
          harvestType: "rock",
          rootMetaDesc: "Green Strongbed|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "Green Strongbed"
        }),
        ...(0, yd.Fb)("_Green Strongbed Head", {
          ttb: 480,
          itemTexture: "green_strongbed",
          model: "rotatable",
          harvestType: "rock",
          drops: "Green Strongbed",
          rootMetaDesc: "_Green Strongbed Head|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "_Green Strongbed Head"
        }),
        ...(0, yd.Fb)("Red Strongbed", {
          displayName: {
            translationKey: "item:redStrongbed"
          },
          ttb: 480,
          itemTexture: "red_strongbed",
          model: "rotatable",
          harvestType: "rock",
          rootMetaDesc: "Red Strongbed|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "Red Strongbed"
        }),
        ...(0, yd.Fb)("_Red Strongbed Head", {
          ttb: 480,
          itemTexture: "red_strongbed",
          model: "rotatable",
          harvestType: "rock",
          drops: "Red Strongbed",
          rootMetaDesc: "_Red Strongbed Head|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "_Red Strongbed Head"
        }),
        ...(0, yd.Fb)("Black Strongbed", {
          displayName: {
            translationKey: "item:blackStrongbed"
          },
          ttb: 480,
          itemTexture: "black_strongbed",
          model: "rotatable",
          harvestType: "rock",
          rootMetaDesc: "Black Strongbed|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "Black Strongbed"
        }),
        ...(0, yd.Fb)("_Black Strongbed Head", {
          ttb: 480,
          itemTexture: "black_strongbed",
          model: "rotatable",
          harvestType: "rock",
          drops: "Black Strongbed",
          rootMetaDesc: "_Black Strongbed Head|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "_Black Strongbed Head"
        }),
        "Timed Spike Bomb Block": {
          ttb: 3e4,
          itemTexture: "timed_spike_bomb",
          harvestType: "rock",
          drops: null,
          modelScale: 10,
          model: "CustomModel",
          blockModel: "Timed Spike Bomb Block",
          solid: !1
        },
        "Timed Spike Bomb Block|Flashing": {
          ttb: 3e4,
          itemTexture: "timed_spike_bomb",
          harvestType: "rock",
          drops: null,
          modelScale: 10,
          model: "CustomModel",
          blockModel: "Timed Spike Bomb Block",
          solid: !1,
          customModelInfo: {
            emissiveColor: [255, 255, 255]
          }
        },
        Lava: {
          displayName: {
            translationKey: "item:lava"
          },
          textureInfo: {
            colour: [.95, .4, .05, .95],
            animTextures: ["lava0", "lava1", "lava2", "lava3", "lava4", "lava5", "lava6", "lava7"],
            animationInterval: 800
          },
          LN: !0,
          drops: null,
          harvestType: "rock",
          Pq: [14, 8, 2]
        },
        "Fat Brown Mushroom": {
          displayName: {
            translationKey: "item:fatBrownMushroom"
          },
          ttb: 1200,
          itemTexture: "fatBrownMushroom",
          harvestType: "cuttable",
          blockModel: "Fat Brown Mushroom",
          blockModelItem: !0,
          model: "CustomModel",
          modelScale: 10,
          heldItemScale: 10,
          description: {
            translationKey: "item:fatMushroomDescription"
          }
        },
        "Fat Red Mushroom": {
          displayName: {
            translationKey: "item:fatRedMushroom"
          },
          ttb: 1200,
          itemTexture: "fatRedMushroom",
          harvestType: "cuttable",
          blockModel: "Fat Red Mushroom",
          blockModelItem: !0,
          model: "CustomModel",
          modelScale: 10,
          heldItemScale: 10,
          description: {
            translationKey: "item:fatMushroomDescription"
          }
        },
        "Chili Pepper Block": {
          displayName: {
            translationKey: "item:chiliPepperBlock"
          },
          ttb: 600,
          textureInfo: ["chili_pepper_block_side", "chili_pepper_block_top", "chili_pepper_block_bottom"],
          texturePerSide: [0, 0, 1, 2, 0, 0],
          harvestType: "wood"
        },
        "Chili Pepper Seeds": {
          displayName: {
            translationKey: "item:chiliPepperSeeds"
          },
          ttb: 400,
          itemTexture: "chili_pepper_seeds",
          model: "CustomModel",
          modelScale: 10,
          customModelInfo: {
            yOffset: -.4375
          },
          harvestType: "cuttable",
          solid: !1,
          blockModel: "chili_pepper_stage0_model",
          description: {
            translationKey: "item:chiliPepperSeedsDescription"
          }
        },
        "Chili Pepper Plant_stage1": {
          ttb: 400,
          model: "CustomModel",
          modelScale: 10,
          customModelInfo: {
            yOffset: -.4375
          },
          harvestType: "cuttable",
          solid: !1,
          blockModel: "chili_pepper_stage1_model",
          drops: "Chili Pepper Seeds"
        },
        "Chili Pepper Plant_stage2": {
          ttb: 400,
          model: "CustomModel",
          modelScale: 10,
          customModelInfo: {
            yOffset: -.4375
          },
          harvestType: "cuttable",
          solid: !1,
          blockModel: "chili_pepper_stage2_model",
          drops: "Chili Pepper Seeds"
        },
        "Chili Pepper Plant_stage3": {
          ttb: 400,
          model: "CustomModel",
          modelScale: 10,
          customModelInfo: {
            yOffset: -.4375
          },
          harvestType: "cuttable",
          solid: !1,
          blockModel: "chili_pepper_stage3_model",
          drops: "Chili Pepper Seeds"
        },
        "Chili Pepper Plant_stage4": {
          ttb: 400,
          model: "CustomModel",
          modelScale: 10,
          customModelInfo: {
            yOffset: -.4375
          },
          harvestType: "cuttable",
          solid: !1,
          blockModel: "chili_pepper_stage4_model",
          drops: "Chili Pepper Seeds"
        },
        "Chili Pepper Plant": {
          ttb: 400,
          model: "CustomModel",
          modelScale: 10,
          customModelInfo: {
            yOffset: -.4375
          },
          harvestType: "cuttable",
          solid: !1,
          blockModel: "chili_pepper_stage5_model",
          drops: "Chili Pepper Seeds"
        },
        "Chili Pepper Plant|FreshlyGrown": {
          ttb: 400,
          model: "CustomModel",
          modelScale: 10,
          customModelInfo: {
            yOffset: -.4375
          },
          harvestType: "cuttable",
          solid: !1,
          blockModel: "chili_pepper_stage5_model",
          drops: "Chili Pepper Seeds",
          onMinedAura: 10
        },
        "Chili Pepper Seeds|Lava": {
          displayName: {
            translationKey: "item:chiliPepperSeeds"
          },
          ttb: 400,
          itemTexture: "chili_pepper_seeds",
          model: "CustomModel",
          modelScale: 10,
          customModelInfo: {
            yOffset: -.4375
          },
          harvestType: "cuttable",
          solid: !1,
          blockModel: "chili_pepper_stage0_lava_model",
          description: {
            translationKey: "item:chiliPepperSeedsDescription"
          },
          drops: "Chili Pepper Seeds"
        },
        "Chili Pepper Plant_stage1|Lava": {
          ttb: 400,
          model: "CustomModel",
          modelScale: 10,
          customModelInfo: {
            yOffset: -.4375
          },
          harvestType: "cuttable",
          solid: !1,
          blockModel: "chili_pepper_stage1_lava_model",
          drops: "Chili Pepper Seeds"
        },
        "Chili Pepper Plant_stage2|Lava": {
          ttb: 400,
          model: "CustomModel",
          modelScale: 10,
          customModelInfo: {
            yOffset: -.4375
          },
          harvestType: "cuttable",
          solid: !1,
          blockModel: "chili_pepper_stage2_lava_model",
          drops: "Chili Pepper Seeds"
        },
        "Chili Pepper Plant_stage3|Lava": {
          ttb: 400,
          model: "CustomModel",
          modelScale: 10,
          customModelInfo: {
            yOffset: -.4375
          },
          harvestType: "cuttable",
          solid: !1,
          blockModel: "chili_pepper_stage3_lava_model",
          drops: "Chili Pepper Seeds"
        },
        "Chili Pepper Plant_stage4|Lava": {
          ttb: 400,
          model: "CustomModel",
          modelScale: 10,
          customModelInfo: {
            yOffset: -.4375
          },
          harvestType: "cuttable",
          solid: !1,
          blockModel: "chili_pepper_stage4_lava_model",
          drops: "Chili Pepper Seeds"
        },
        "Chili Pepper Plant_stage5": {
          ttb: 400,
          model: "CustomModel",
          modelScale: 10,
          customModelInfo: {
            yOffset: -.4375
          },
          harvestType: "cuttable",
          solid: !1,
          blockModel: "chili_pepper_stage5_model",
          drops: "Chili Pepper Seeds"
        },
        "Chili Pepper Plant_stage5|Lava": {
          ttb: 400,
          model: "CustomModel",
          modelScale: 10,
          customModelInfo: {
            yOffset: -.4375
          },
          harvestType: "cuttable",
          solid: !1,
          blockModel: "chili_pepper_stage5_lava_model",
          drops: "Chili Pepper Seeds"
        },
        "Chili Pepper Plant|Lava|FreshlyGrown": {
          ttb: 400,
          model: "CustomModel",
          modelScale: 10,
          customModelInfo: {
            yOffset: -.4375
          },
          harvestType: "cuttable",
          solid: !1,
          blockModel: "chili_pepper_stage6_lava_model",
          drops: "Chili Pepper Seeds",
          onMinedAura: 20
        },
        "Code Block": {
          displayName: {
            translationKey: "item:codeBlock"
          },
          ttb: 5e11,
          textureInfo: "code_block",
          soundType: {
            break: "stone",
            place: "stone"
          }
        },
        "Toxin Ball Block": {
          displayName: {
            translationKey: "item:toxinBallBlock"
          },
          ttb: 1,
          textureInfo: "toxin_ball_block",
          harvestType: "rock",
          unlitStandaloneMesh: !0
        },
        ...(0, yd.H)((dd => `Spawn Block (${dd})`), {
          displayName: dd => ({
            translationKey: `item:${(0,td.te)(dd)}SpawnBlock`
          }),
          ttb: 1500,
          textureInfo: dd => [`${(0,td.xe)(dd)}_spawn_block_top[rot[1`, `${(0,td.xe)(dd)}_spawn_block_top[rot[2`, `${(0,td.xe)(dd)}_spawn_block_top[rot[3`, `${(0,td.xe)(dd)}_spawn_block_top[rot[4`, `${(0,td.xe)(dd)}_spawn_block_side`],
          texturePerSide: [4, 4, 2, 4, 4, 4],
          harvestType: "rock",
          rootMetaDesc: dd => `Spawn Block (${dd})|meta|rot1`,
          description: {
            translationKey: "item:spawnBlockDescription"
          }
        }),
        ...(0, yd.H)((dd => `Spawn Block (${dd})|meta|rot2`), {
          ttb: 1500,
          textureInfo: dd => [`${(0,td.xe)(dd)}_spawn_block_top[rot[1`, `${(0,td.xe)(dd)}_spawn_block_top[rot[2`, `${(0,td.xe)(dd)}_spawn_block_top[rot[3`, `${(0,td.xe)(dd)}_spawn_block_top[rot[4`, `${(0,td.xe)(dd)}_spawn_block_side`],
          texturePerSide: [4, 4, 3, 4, 4, 4],
          harvestType: "rock"
        }),
        ...(0, yd.H)((dd => `Spawn Block (${dd})|meta|rot3`), {
          ttb: 1500,
          textureInfo: dd => [`${(0,td.xe)(dd)}_spawn_block_top[rot[1`, `${(0,td.xe)(dd)}_spawn_block_top[rot[2`, `${(0,td.xe)(dd)}_spawn_block_top[rot[3`, `${(0,td.xe)(dd)}_spawn_block_top[rot[4`, `${(0,td.xe)(dd)}_spawn_block_side`],
          texturePerSide: [4, 4, 0, 4, 4, 4],
          harvestType: "rock"
        }),
        ...(0, yd.H)((dd => `Spawn Block (${dd})|meta|rot4`), {
          ttb: 1500,
          textureInfo: dd => [`${(0,td.xe)(dd)}_spawn_block_top[rot[1`, `${(0,td.xe)(dd)}_spawn_block_top[rot[2`, `${(0,td.xe)(dd)}_spawn_block_top[rot[3`, `${(0,td.xe)(dd)}_spawn_block_top[rot[4`, `${(0,td.xe)(dd)}_spawn_block_side`],
          texturePerSide: [4, 4, 1, 4, 4, 4],
          harvestType: "rock"
        }),
        ...(0, yd.Hb)("Checkpoint Block", {
          displayName: {
            translationKey: "item:checkpointBlock"
          },
          ttb: 1500,
          textureInfo: ["checkpoint_block[rot[1", "checkpoint_block[rot[2", "checkpoint_block[rot[3", "checkpoint_block[rot[4"],
          harvestType: "rock",
          rootMetaDesc: "Checkpoint Block|meta|rot1",
          description: {
            translationKey: "item:checkpointBlockDescription"
          }
        }, [
          [0, 0, 2, 0, 0, 0],
          [0, 0, 3, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0, 0]
        ]),
        ...(0, yd.Hb)("Custom Lobby Block", {
          displayName: {
            translationKey: "item:customLobbyBlock"
          },
          ttb: 1500,
          textureInfo: ["custom_lobby_block_top[rot[1", "custom_lobby_block_top[rot[2", "custom_lobby_block_top[rot[3", "custom_lobby_block_top[rot[4", "custom_lobby_block_side"],
          harvestType: "rock",
          rootMetaDesc: "Custom Lobby Block|meta|rot1",
          description: {
            translationKey: "item:customLobbyBlockDescription"
          }
        }, [
          [4, 4, 2, 4, 4, 4],
          [4, 4, 3, 4, 4, 4],
          [4, 4, 0, 4, 4, 4],
          [4, 4, 1, 4, 4, 4]
        ]),
        ...(0, yd.H)((dd => `Generator Spawn Block (${dd})`), {
          displayName: dd => ({
            translationKey: `item:${(0,td.te)(dd)}GeneratorSpawnBlock`
          }),
          ttb: 1500,
          textureInfo: dd => [`${(0,td.xe)(dd)}_gen_spawn_top`, `${(0,td.xe)(dd)}_gen_spawn_coal`, `${(0,td.xe)(dd)}_gen_spawn_iron`],
          texturePerSide: [2, 2, 0, 0, 1, 1],
          harvestType: "rock",
          description: {
            translationKey: "item:teamGeneratorSpawnBlockDescription"
          }
        }, ["Red", "Blue", "Lime", "Yellow", "Cyan", "White", "Pink", "Gray"]),
        ...(0, yd.Hb)("Trader Shop Spawn Block", {
          displayName: {
            translationKey: "item:traderShopSpawnBlock"
          },
          ttb: 1500,
          textureInfo: ["shop_trader_spawn_top[rot[1", "shop_trader_spawn_top[rot[2", "shop_trader_spawn_top[rot[3", "shop_trader_spawn_top[rot[4", "shop_trader_spawn_side", "shop_trader_spawn_face"],
          harvestType: "rock",
          rootMetaDesc: "Trader Shop Spawn Block|meta|rot1",
          description: {
            translationKey: "item:traderShopSpawnBlockDescription"
          }
        }, [
          [5, 5, 2, 4, 4, 4],
          [5, 5, 3, 4, 4, 4],
          [5, 5, 0, 4, 4, 4],
          [5, 5, 1, 4, 4, 4]
        ]),
        ...(0, yd.Hb)("Wizard Shop Spawn Block", {
          displayName: {
            translationKey: "item:wizardShopSpawnBlock"
          },
          ttb: 1500,
          textureInfo: ["shop_wizard_spawn_top[rot[1", "shop_wizard_spawn_top[rot[2", "shop_wizard_spawn_top[rot[3", "shop_wizard_spawn_top[rot[4", "shop_wizard_spawn_side", "shop_wizard_spawn_face"],
          harvestType: "rock",
          rootMetaDesc: "Wizard Shop Spawn Block|meta|rot1",
          description: {
            translationKey: "item:wizardShopSpawnBlockDescription"
          }
        }, [
          [5, 5, 2, 4, 4, 4],
          [5, 5, 3, 4, 4, 4],
          [5, 5, 0, 4, 4, 4],
          [5, 5, 1, 4, 4, 4]
        ]),
        "Generator Spawn Block (Diamond)": {
          displayName: {
            translationKey: "item:diamondGeneratorSpawnBlock"
          },
          ttb: 1500,
          textureInfo: ["diamond_gen_spawn_top", "diamond_gen_spawn_side"],
          texturePerSide: [1, 1, 0, 0, 1, 1],
          harvestType: "rock",
          description: {
            translationKey: "item:diamondGeneratorSpawnBlockDescription"
          }
        },
        "Generator Spawn Block (Moonstone)": {
          displayName: {
            translationKey: "item:moonstoneGeneratorSpawnBlock"
          },
          ttb: 1500,
          textureInfo: ["moonstone_gen_spawn_top", "moonstone_gen_spawn_side"],
          texturePerSide: [1, 1, 0, 0, 1, 1],
          harvestType: "rock",
          description: {
            translationKey: "item:moonstoneGeneratorSpawnBlockDescription"
          }
        },
        "Generator Spawn Block (Ore)": {
          displayName: {
            translationKey: "item:oreGeneratorSpawnBlock"
          },
          ttb: 1500,
          textureInfo: ["ore_gen_spawn_top", "ore_gen_spawn_side"],
          texturePerSide: [1, 1, 0, 0, 1, 1],
          harvestType: "rock",
          description: {
            translationKey: "item:oreGeneratorSpawnBlockDescription"
          }
        },
        "Goal Block (Red)": {
          displayName: {
            translationKey: "item:redGoalBlock"
          },
          ttb: 1500,
          textureInfo: ["explosive_paint_red_top", "red_spawn_block_top[rot[3"],
          texturePerSide: [1, 1, 0, 0, 1, 1],
          harvestType: "rock",
          description: {
            translationKey: "item:goalBlockDescription"
          }
        },
        "Goal Block (Blue)": {
          displayName: {
            translationKey: "item:blueGoalBlock"
          },
          ttb: 1500,
          textureInfo: ["explosive_paint_blue_top", "blue_spawn_block_top[rot[3"],
          texturePerSide: [1, 1, 0, 0, 1, 1],
          harvestType: "rock",
          description: {
            translationKey: "item:goalBlockDescription"
          }
        },
        "Finish Block": {
          displayName: {
            translationKey: "item:finishBlock"
          },
          ttb: 1500,
          textureInfo: "finish_block",
          harvestType: "rock",
          description: {
            translationKey: "item:finishBlockDescription"
          }
        },
        "Drop Location Block": {
          displayName: {
            translationKey: "item:dropLocationBlock"
          },
          ttb: 1500,
          textureInfo: ["drop_location_block_top", "drop_location_block_side"],
          texturePerSide: [1, 1, 0, 0, 1, 1],
          harvestType: "rock",
          description: {
            translationKey: "item:dropLocationBlockDescription"
          }
        },
        "Obby Death Block": {
          displayName: {
            translationKey: "item:obbyDeathBlock"
          },
          ttb: 1500,
          textureInfo: "obby_death_block",
          harvestType: "rock",
          description: {
            translationKey: "item:obbyDeathBlockDescription"
          }
        },
        "Obby Absorb Block": {
          displayName: {
            translationKey: "item:obbyAbsorbBlock"
          },
          ttb: 1500,
          textureInfo: "obby_absorb_block",
          harvestType: "rock",
          description: {
            translationKey: "item:obbyAbsorbBlockDescription"
          }
        },
        "Obby Absorb Death Block": {
          displayName: {
            translationKey: "item:obbyAbsorbDeathBlock"
          },
          ttb: 1500,
          textureInfo: "obby_absorb_death_block",
          harvestType: "rock",
          description: {
            translationKey: "item:obbyAbsorbDeathBlockDescription"
          }
        },
        "Bone Block": {
          displayName: {
            translationKey: "item:boneBlock"
          },
          ttb: 960,
          textureInfo: ["bone_block_side", "bone_block_top"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          harvestType: "rock"
        },
        ...(0, yd.fb)("Pig"),
        ...(0, yd.fb)("Cow"),
        ...(0, yd.fb)("Sheep"),
        ...(0, yd.fb)("Cave Golem"),
        ...(0, yd.fb)("Draugr Zombie"),
        ...(0, yd.fb)("Draugr Skeleton"),
        "Empty Spawner Block": {
          displayName: {
            translationKey: "item:emptyMobSpawnerBlock"
          },
          description: {
            translationKey: "item:emptyMobSpawnerBlockDescription"
          },
          itemTexture: "empty_spawner_block_icon",
          ttb: 5e3,
          textureInfo: ["mob_spawner_block_empty_side", "mob_spawner_block_top"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          transTex: !0,
          harvestType: "rock",
          drops: null,
          specialToolDrop: {
            tool: "Moonstone Pickaxe",
            drops: "Empty Spawner Block"
          },
          particlesIgnoreBlack: !0,
          twoDBlockItem: !0
        },
        ...(0, yd.fb)("Frost Golem"),
        ...(0, yd.fb)("Frost Zombie"),
        ...(0, yd.fb)("Frost Skeleton"),
        "Snowy Messy Stone": {
          displayName: {
            translationKey: "item:snowyMessyStone"
          },
          ttb: 1800,
          textureInfo: "snowy_messy_stone",
          harvestType: "rock"
        },
        ...(0, yd.Kb)("Snowy Stone Slab", {
          displayName: {
            translationKey: "item:snowyStoneSlab"
          },
          ttb: 1200,
          textureInfo: ["snowy_messy_stone_side", "snowy_messy_stone"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "rock",
          slabFullBlock: "Snowy Messy Stone",
          rootMetaDesc: "Snowy Stone Slab|meta|rot1|bot"
        }),
        ...(0, yd.fb)("Draugr Knight"),
        "Packed Snow": {
          displayName: {
            translationKey: "item:packedSnow"
          },
          ttb: 1800,
          textureInfo: "packed_snow",
          harvestType: "granule",
          soundType: {
            break: "snow",
            place: "snow"
          }
        },
        "Carved Messy Stone": {
          displayName: {
            translationKey: "item:carvedMessyStone"
          },
          ttb: 1800,
          textureInfo: "carved_messy_stone",
          harvestType: "rock"
        },
        "Spectral Grass": {
          displayName: {
            translationKey: "item:spectralGrass"
          },
          ttb: 1,
          textureInfo: "spectral_grass",
          model: "CentreCross",
          solid: !1,
          drops: null,
          harvestType: "cuttable",
          specialToolDrop: {
            tool: "Shears",
            drops: "Spectral Grass"
          },
          canBePlacedOver: !0
        },
        "Spectral Log": {
          displayName: {
            translationKey: "item:spectralLog"
          },
          ttb: 2400,
          textureInfo: "log_spectral",
          harvestType: "wood"
        },
        "Barkless Spectral Log": {
          displayName: {
            translationKey: "item:barklessSpectralLog"
          },
          ttb: 2e3,
          textureInfo: "stripped_spectral_log",
          harvestType: "wood"
        },
        "Barkless Spectral Log|TreeBase|Spectral": {
          ttb: 2e3,
          textureInfo: "stripped_spectral_log",
          harvestType: "wood",
          drops: "Barkless Spectral Log"
        },
        "Spectral Wood Planks": {
          displayName: {
            translationKey: "item:spectralWoodPlanks"
          },
          ttb: 1800,
          textureInfo: "planks_spectral",
          harvestType: "wood"
        },
        "Spectral Leaves": {
          displayName: {
            translationKey: "item:spectralLeaves"
          },
          ttb: 350,
          textureInfo: "leaves_spectral",
          harvestType: "cuttable"
        },
        "Spectral Door": {
          displayName: {
            translationKey: "item:spectralDoor"
          },
          ttb: 3600,
          itemTexture: "spectral_door",
          model: "door",
          harvestType: "wood",
          rootMetaDesc: "Spectral Door|meta|rot1|closed",
          particlesIgnoreBlack: !0,
          blockModel: "Spectral Door"
        },
        "Spectral Door|meta|rot1|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Spectral Door|meta|rot2|closed": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Spectral Door|meta|rot2|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Spectral Door|meta|rot3|closed": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Spectral Door|meta|rot3|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Spectral Door|meta|rot4|closed": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Spectral Door|meta|rot4|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "_Spectral Door Top": {
          ttb: 3600,
          itemTexture: "spectral_door",
          harvestType: "wood",
          model: "door",
          drops: "Spectral Door",
          rootMetaDesc: "_Spectral Door Top|meta|rot1|closed",
          particlesIgnoreBlack: !0,
          blockModel: "_Spectral Door Top"
        },
        "_Spectral Door Top|meta|rot1|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Spectral Door"
        },
        "_Spectral Door Top|meta|rot2|closed": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Spectral Door"
        },
        "_Spectral Door Top|meta|rot2|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Spectral Door"
        },
        "_Spectral Door Top|meta|rot3|closed": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Spectral Door"
        },
        "_Spectral Door Top|meta|rot3|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Spectral Door"
        },
        "_Spectral Door Top|meta|rot4|closed": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Spectral Door"
        },
        "_Spectral Door Top|meta|rot4|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Spectral Door"
        },
        "Spectral Trapdoor": {
          displayName: {
            translationKey: "item:spectralTrapdoor"
          },
          ttb: 2800,
          itemTexture: "spectral_trapdoor",
          model: "trapdoor",
          harvestType: "wood",
          rootMetaDesc: "Spectral Trapdoor|meta|rot1|closed",
          blockModel: "Spectral Trapdoor",
          heldItemScale: .5,
          blockModelItem: !0
        },
        "Spectral Trapdoor|meta|rot1|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Spectral Trapdoor|meta|rot2|closed": {
          ttb: 2800,
          harvestType: "wood"
        },
        "Spectral Trapdoor|meta|rot2|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Spectral Trapdoor|meta|rot3|closed": {
          ttb: 2800,
          harvestType: "wood"
        },
        "Spectral Trapdoor|meta|rot3|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Spectral Trapdoor|meta|rot4|closed": {
          ttb: 2800,
          harvestType: "wood"
        },
        "Spectral Trapdoor|meta|rot4|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Spectral Sapling": {
          displayName: {
            translationKey: "item:spectralSapling"
          },
          ttb: 1,
          textureInfo: "spectral_sapling",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "spectral_sapling"
        },
        "Spectral Log|TreeBase|Spectral": {
          ttb: 2400,
          textureInfo: "log_spectral",
          harvestType: "wood",
          drops: "Spectral Log"
        },
        "Spectral Leaves|TreeCanopy": {
          ttb: 350,
          textureInfo: "leaves_spectral",
          harvestType: "cuttable",
          drops: "Spectral Leaves"
        },
        ...(0, yd.Kb)("Spectral Slab", {
          displayName: {
            translationKey: "item:spectralSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_spectral_side", "planks_spectral"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "wood",
          slabFullBlock: "Spectral Wood Planks",
          rootMetaDesc: "Spectral Slab|meta|rot1|bot"
        }),
        ...(0, yd.Fb)("Spectral Ladder", {
          displayName: {
            translationKey: "item:spectralLadder"
          },
          ttb: 1e3,
          itemTexture: "ladder_spectral",
          model: "rotatableOffset",
          harvestType: "wood",
          rootMetaDesc: "Spectral Ladder|meta|rot1",
          modelScale: 1,
          solid: !1,
          blockModel: "Spectral Ladder",
          heldItemScale: 1,
          blockModelItem: !0
        }),
        ...(0, yd.Fb)("Wood Enchanting Table", {
          displayName: {
            translationKey: "item:woodEnchantingTable"
          },
          ttb: 800,
          harvestType: "wood",
          model: "rotatable",
          itemTexture: "wood_enchanting_table",
          rootMetaDesc: "Wood Enchanting Table|meta|rot1",
          modelScale: 10,
          blockModel: "Wood Enchanting Table",
          description: {
            translationKey: "item:enchantingTableDescription"
          },
          Pq: [2, 0, 2]
        }),
        ...(0, yd.Fb)("Stone Enchanting Table", {
          displayName: {
            translationKey: "item:stoneEnchantingTable"
          },
          ttb: 1e3,
          harvestType: "wood",
          model: "rotatable",
          itemTexture: "stone_enchanting_table",
          rootMetaDesc: "Stone Enchanting Table|meta|rot1",
          modelScale: 10,
          blockModel: "Stone Enchanting Table",
          description: {
            translationKey: "item:enchantingTableDescription"
          },
          Pq: [4, 0, 4]
        }),
        ...(0, yd.Fb)("Iron Enchanting Table", {
          displayName: {
            translationKey: "item:ironEnchantingTable"
          },
          ttb: 1200,
          harvestType: "wood",
          model: "rotatable",
          itemTexture: "iron_enchanting_table",
          rootMetaDesc: "Iron Enchanting Table|meta|rot1",
          modelScale: 10,
          blockModel: "Iron Enchanting Table",
          description: {
            translationKey: "item:enchantingTableDescription"
          },
          Pq: [6, 0, 6]
        }),
        ...(0, yd.Fb)("Gold Enchanting Table", {
          displayName: {
            translationKey: "item:goldEnchantingTable"
          },
          ttb: 1500,
          harvestType: "wood",
          model: "rotatable",
          itemTexture: "gold_enchanting_table",
          rootMetaDesc: "Gold Enchanting Table|meta|rot1",
          modelScale: 10,
          blockModel: "Gold Enchanting Table",
          description: {
            translationKey: "item:enchantingTableDescription"
          },
          Pq: [8, 0, 8]
        }),
        ...(0, yd.Fb)("Diamond Enchanting Table", {
          displayName: {
            translationKey: "item:diamondEnchantingTable"
          },
          ttb: 2e3,
          harvestType: "wood",
          model: "rotatable",
          itemTexture: "diamond_enchanting_table",
          rootMetaDesc: "Diamond Enchanting Table|meta|rot1",
          modelScale: 10,
          blockModel: "Diamond Enchanting Table",
          description: {
            translationKey: "item:enchantingTableDescription"
          },
          Pq: [10, 0, 10]
        }),
        "Pine Grass Block": {
          displayName: {
            translationKey: "item:pineGrassBlock"
          },
          ttb: 720,
          textureInfo: ["pine_grass_block_side", "pine_grass_block", "dirt"],
          texturePerSide: [0, 0, 1, 2, 0, 0],
          harvestType: "granule",
          soundType: {
            break: "grass",
            place: "grass"
          }
        },
        ...(0, yd.Kb)("Pine Grass Slab", {
          displayName: {
            translationKey: "item:pineGrassSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_pine_grass_top_side", "pine_grass_block"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "granule",
          slabFullBlock: "Pine Grass Block",
          rootMetaDesc: "Pine Grass Slab|meta|rot1|bot"
        }),
        "Pine Grass": {
          displayName: {
            translationKey: "item:pineGrass"
          },
          ttb: 1,
          textureInfo: "pine_grass",
          model: "CentreCross",
          solid: !1,
          drops: null,
          harvestType: "cuttable",
          specialToolDrop: {
            tool: "Shears",
            drops: "Pine Grass"
          },
          canBePlacedOver: !0
        },
        "Pine Fern": {
          displayName: {
            translationKey: "item:pineFern"
          },
          ttb: 1,
          textureInfo: "pine_fern",
          model: "CentreCross",
          solid: !1,
          drops: null,
          harvestType: "cuttable",
          specialToolDrop: {
            tool: "Shears",
            drops: "Pine Fern"
          },
          canBePlacedOver: !0
        },
        "Fallen Pine Cone": {
          displayName: {
            translationKey: "item:fallenPineCone"
          },
          ttb: 1,
          textureInfo: "fallen_pine_cone",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable"
        },
        "Pine Cone Block": {
          displayName: {
            translationKey: "item:pineConeBlock"
          },
          ttb: 600,
          textureInfo: ["pine_cone_block_side", "pine_cone_block_top"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          harvestType: "wood"
        },
        ...(0, yd.fb)("Wolf"),
        ...(0, yd.fb)("Bear"),
        ...(0, yd.fb)("Deer"),
        ...(0, yd.fb)("Stag"),
        ...(0, yd.Fb)("Bone Antlers", {
          displayName: {
            translationKey: "item:boneAntlers"
          },
          description: {
            translationKey: "item:antlersDescription"
          },
          ttb: 1500,
          itemTexture: "bone_antlers_icon",
          model: "rotatableOffset",
          harvestType: "rock",
          rootMetaDesc: "Bone Antlers|meta|rot1",
          solid: !1,
          blockModel: "bone_antlers_model",
          modelScale: 10,
          particlesIgnoreBlack: !0
        }),
        ...(0, yd.Fb)("Gold Antlers", {
          displayName: {
            translationKey: "item:goldAntlers"
          },
          description: {
            translationKey: "item:antlersDescription"
          },
          ttb: 1500,
          itemTexture: "gold_antlers_icon",
          model: "rotatableOffset",
          harvestType: "rock",
          rootMetaDesc: "Gold Antlers|meta|rot1",
          solid: !1,
          blockModel: "gold_antlers_model",
          modelScale: 10,
          particlesIgnoreBlack: !0,
          Pq: [7, 7, 2]
        }),
        ...(0, yd.fb)("Gold Watermelon Stag"),
        ...(0, yd.Fb)("Salvaging Table", {
          displayName: {
            translationKey: "item:salvagingTable"
          },
          ttb: 1200,
          harvestType: "wood",
          rootMetaDesc: "Salvaging Table|meta|rot1",
          description: {
            translationKey: "item:salvagingTableDescription"
          },
          ...wd("Salvaging Table", "salvaging_table")
        }),
        Chalk: {
          displayName: {
            translationKey: "item:chalk"
          },
          description: {
            translationKey: "item:chalkDescription"
          },
          ttb: 850,
          textureInfo: "chalk",
          harvestType: "rock"
        },
        ...(0, yd.H)((dd => `${dd} Chalk`), {
          displayName: dd => ({
            translationKey: "item:colouredChalk",
            params: {
              colour: `$t(colour:${(0,td.xe)(dd)})`
            }
          }),
          description: dd => ({
            translationKey: "item:colouredChalkDescription",
            params: {
              colour: `$t(colour:${(0,td.xe)(dd)})`
            }
          }),
          ttb: 850,
          textureInfo: dd => `chalk_${(0,td.xe)(dd)}`,
          harvestType: "rock"
        }),
        ...(0, yd.H)((dd => `${dd} Chalk Bricks`), {
          displayName: dd => ({
            translationKey: "item:colouredChalkBricks",
            params: {
              colour: `$t(colour:${(0,td.xe)(dd)})`
            }
          }),
          description: dd => ({
            translationKey: "item:colouredChalkBricksDescription",
            params: {
              colour: `$t(colour:${(0,td.xe)(dd)})`
            }
          }),
          ttb: 850,
          textureInfo: dd => `chalk_bricks_${(0,td.xe)(dd)}`,
          harvestType: "rock"
        }),
        ...(0, yd.M)("$colour$ Chalk Slab", "$colour$ Chalk", "chalk_$colour$", "item:colouredChalkSlab", "item:colouredChalkSlabDescription", {
          ttb: 550,
          harvestType: "rock"
        }),
        ...(0, yd.M)("$colour$ Chalk Bricks Slab", "$colour$ Chalk Bricks", ["chalk_bricks_slab_side_$colour$", "chalk_bricks_$colour$"], "item:colouredChalkBricksSlab", "item:colouredChalkBricksSlabDescription", {
          ttb: 550,
          harvestType: "rock"
        }),
        ...(0, yd.Fb)("Leaf Bed", {
          displayName: {
            translationKey: "item:leafBed"
          },
          ttb: 240,
          itemTexture: "leaf_bed",
          model: "rotatable",
          harvestType: "wood",
          rootMetaDesc: "Leaf Bed|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "Leaf Bed"
        }),
        ...(0, yd.Fb)("_Leaf Bed Head", {
          ttb: 240,
          itemTexture: "leaf_bed",
          model: "rotatable",
          harvestType: "wood",
          drops: "Leaf Bed",
          rootMetaDesc: "_Leaf Bed Head|meta|rot1",
          particlesIgnoreBlack: !0,
          modelScale: 5,
          blockModel: "Leaf Bed"
        }),
        "Jungle Grass Block": {
          displayName: {
            translationKey: "item:jungleGrassBlock"
          },
          ttb: 720,
          textureInfo: ["jungle_grass_block_side", "jungle_grass_block", "dirt"],
          texturePerSide: [0, 0, 1, 2, 0, 0],
          harvestType: "granule",
          soundType: {
            break: "grass",
            place: "grass"
          }
        },
        ...(0, yd.Kb)("Jungle Grass Slab", {
          displayName: {
            translationKey: "item:jungleGrassSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_jungle_grass_top_side", "jungle_grass_block"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "granule",
          slabFullBlock: "Jungle Grass Block",
          rootMetaDesc: "Jungle Grass Slab|meta|rot1|bot"
        }),
        "Jungle Tall Grass": {
          displayName: {
            translationKey: "item:jungleTallGrass"
          },
          ttb: 1,
          textureInfo: "jungle_tall_grass_bottom",
          model: "CentreCross",
          heldItemScale: .5,
          solid: !1,
          harvestType: "cuttable",
          drops: null,
          specialToolDrop: {
            tool: "Shears",
            drops: "Jungle Tall Grass"
          },
          itemTexture: "jungle_tall_grass_bottom",
          canBePlacedOver: !0
        },
        "Jungle Tall Grass|Top": {
          ttb: 1,
          textureInfo: "jungle_tall_grass_top",
          model: "CentreCross",
          heldItemScale: .5,
          solid: !1,
          harvestType: "cuttable",
          drops: null,
          specialToolDrop: {
            tool: "Shears",
            drops: "Jungle Tall Grass"
          },
          itemTexture: "jungle_tall_grass_top",
          canBePlacedOver: !0
        },
        Catnip: {
          displayName: {
            translationKey: "item:catnip"
          },
          ttb: 1,
          textureInfo: "catnip",
          model: "CentreCross",
          heldItemScale: .5,
          solid: !1,
          drops: null,
          harvestType: "cuttable",
          specialToolDrop: {
            tool: "Shears",
            drops: "Catnip"
          },
          canBePlacedOver: !0
        },
        "Mango Log": {
          displayName: {
            translationKey: "item:mangoLog"
          },
          ttb: 2400,
          textureInfo: "log_mango",
          harvestType: "wood"
        },
        "Barkless Mango Log": {
          displayName: {
            translationKey: "item:barklessMangoLog"
          },
          ttb: 2e3,
          textureInfo: "stripped_mango_log",
          harvestType: "wood"
        },
        "Barkless Mango Log|TreeBase|Mango": {
          ttb: 2e3,
          textureInfo: "stripped_mango_log",
          harvestType: "wood",
          drops: "Barkless Mango Log"
        },
        "Mango Wood Planks": {
          displayName: {
            translationKey: "item:mangoWoodPlanks"
          },
          ttb: 1800,
          textureInfo: "planks_mango",
          harvestType: "wood"
        },
        "Mango Leaves": {
          displayName: {
            translationKey: "item:mangoLeaves"
          },
          ttb: 350,
          textureInfo: "leaves_mango",
          harvestType: "cuttable"
        },
        "Mango Door": {
          displayName: {
            translationKey: "item:mangoDoor"
          },
          ttb: 3600,
          itemTexture: "mango_door",
          model: "door",
          harvestType: "wood",
          rootMetaDesc: "Mango Door|meta|rot1|closed",
          particlesIgnoreBlack: !0,
          blockModel: "Mango Door"
        },
        "Mango Door|meta|rot1|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Mango Door|meta|rot2|closed": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Mango Door|meta|rot2|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Mango Door|meta|rot3|closed": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Mango Door|meta|rot3|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Mango Door|meta|rot4|closed": {
          ttb: 3600,
          harvestType: "wood"
        },
        "Mango Door|meta|rot4|open": {
          ttb: 3600,
          harvestType: "wood"
        },
        "_Mango Door Top": {
          ttb: 3600,
          itemTexture: "mango_door",
          harvestType: "wood",
          model: "door",
          drops: "Mango Door",
          rootMetaDesc: "_Mango Door Top|meta|rot1|closed",
          particlesIgnoreBlack: !0,
          blockModel: "_Mango Door Top"
        },
        "_Mango Door Top|meta|rot1|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Mango Door"
        },
        "_Mango Door Top|meta|rot2|closed": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Mango Door"
        },
        "_Mango Door Top|meta|rot2|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Mango Door"
        },
        "_Mango Door Top|meta|rot3|closed": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Mango Door"
        },
        "_Mango Door Top|meta|rot3|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Mango Door"
        },
        "_Mango Door Top|meta|rot4|closed": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Mango Door"
        },
        "_Mango Door Top|meta|rot4|open": {
          ttb: 3600,
          harvestType: "wood",
          drops: "Mango Door"
        },
        "Mango Trapdoor": {
          displayName: {
            translationKey: "item:mangoTrapdoor"
          },
          ttb: 2800,
          itemTexture: "mango_trapdoor",
          model: "trapdoor",
          harvestType: "wood",
          rootMetaDesc: "Mango Trapdoor|meta|rot1|closed",
          blockModel: "Mango Trapdoor",
          heldItemScale: .5,
          blockModelItem: !0
        },
        "Mango Trapdoor|meta|rot1|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Mango Trapdoor|meta|rot2|closed": {
          ttb: 2800,
          harvestType: "wood"
        },
        "Mango Trapdoor|meta|rot2|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Mango Trapdoor|meta|rot3|closed": {
          ttb: 2800,
          harvestType: "wood"
        },
        "Mango Trapdoor|meta|rot3|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Mango Trapdoor|meta|rot4|closed": {
          ttb: 2800,
          harvestType: "wood"
        },
        "Mango Trapdoor|meta|rot4|open": {
          ttb: 2800,
          harvestType: "wood",
          solid: !1
        },
        "Mango Sapling": {
          displayName: {
            translationKey: "item:mangoSapling"
          },
          ttb: 1,
          textureInfo: "mango_sapling",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "mango_sapling"
        },
        "Mango Log|TreeBase|Mango": {
          ttb: 2400,
          textureInfo: "log_mango",
          harvestType: "wood",
          drops: "Mango Log"
        },
        "Mango Leaves|TreeCanopy": {
          ttb: 350,
          textureInfo: "leaves_mango",
          harvestType: "cuttable",
          drops: "Mango Leaves"
        },
        ...(0, yd.Kb)("Mango Slab", {
          displayName: {
            translationKey: "item:mangoSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_mango_side", "planks_mango"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "wood",
          slabFullBlock: "Mango Wood Planks",
          rootMetaDesc: "Mango Slab|meta|rot1|bot"
        }),
        ...(0, yd.Fb)("Mango Ladder", {
          displayName: {
            translationKey: "item:mangoLadder"
          },
          ttb: 1e3,
          itemTexture: "ladder_mango",
          model: "rotatableOffset",
          harvestType: "wood",
          rootMetaDesc: "Mango Ladder|meta|rot1",
          modelScale: 1,
          solid: !1,
          blockModel: "Mango Ladder",
          heldItemScale: 1,
          blockModelItem: !0
        }),
        "Mango Block": {
          displayName: {
            translationKey: "item:mangoBlock"
          },
          ttb: 600,
          textureInfo: ["mango_block_side", "mango_block_top", "mango_block_bottom"],
          texturePerSide: [0, 0, 1, 2, 0, 0],
          harvestType: "wood"
        },
        "Banana Block": {
          displayName: {
            translationKey: "item:bananaBlock"
          },
          ttb: 1200,
          textureInfo: ["banana_block_side", "banana_block_top"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          harvestType: "wood"
        },
        "Banana Seeds": {
          displayName: {
            translationKey: "item:bananaSeeds"
          },
          ttb: 400,
          textureInfo: "banana_stem",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "banana_seeds",
          description: {
            translationKey: "item:bananaSeedsDescription"
          }
        },
        "Banana Seeds|Growing": {
          ttb: 400,
          textureInfo: "banana_stem",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          drops: "Banana Seeds"
        },
        ...(0, yd.Fb)("Attached Banana Stem", {
          displayName: {
            translationKey: "item:attachedBananaStem"
          },
          ttb: 400,
          textureInfo: ["attached_banana_stem_wrapper", "attached_banana_stem"],
          model: "CustomPlanes|rotatable",
          solid: !1,
          harvestType: "cuttable",
          drops: "Banana Seeds",
          rootMetaDesc: "Attached Banana Stem|meta|rot1",
          customPlanesInfo: [{
            textureIdx: 0,
            yRot: Math.PI / 4
          }, {
            textureIdx: 0,
            yRot: 3 * Math.PI / 4
          }, {
            textureIdx: 1,
            yRot: 3 * Math.PI / 2
          }]
        }),
        "Dangling Rope": {
          displayName: {
            translationKey: "item:danglingRope"
          },
          ttb: 225,
          itemTexture: "dangling_rope",
          model: "CustomModel",
          harvestType: "cuttable",
          solid: !1,
          blockModel: "Dangling Rope",
          modelScale: 10,
          customModelInfo: {
            yOffset: -.4375,
            backFaceCulling: !0
          },
          description: {
            translationKey: "item:ceilingClimbableDescription"
          },
          climbableInside: {
            upForceScalar: .95
          }
        },
        "Dangling Vine": {
          displayName: {
            translationKey: "item:danglingVine"
          },
          ttb: 225,
          itemTexture: "dangling_vine",
          model: "CustomModel",
          harvestType: "cuttable",
          solid: !1,
          blockModel: "Dangling Vine",
          modelScale: 10,
          customModelInfo: {
            yOffset: -.4375,
            backFaceCulling: !0
          },
          description: {
            translationKey: "item:ceilingClimbableDescription"
          },
          climbableInside: {
            upForceScalar: .95
          }
        },
        ...(0, yd.fb)("Gorilla"),
        ...(0, yd.fb)("Wildcat"),
        "Fruity Maple Leaves": {
          displayName: {
            translationKey: "item:fruityMapleLeaves"
          },
          ttb: 350,
          textureInfo: "leaves_maple_fruity",
          harvestType: "cuttable",
          drops: null,
          specialToolDrop: {
            tool: "Shears",
            drops: "Fruity Maple Leaves"
          }
        },
        "Pine Cone Leaves": {
          displayName: {
            translationKey: "item:pineConeLeaves"
          },
          ttb: 350,
          textureInfo: "leaves_pine_cone",
          harvestType: "cuttable",
          drops: null,
          specialToolDrop: {
            tool: "Shears",
            drops: "Pine Cone Leaves"
          }
        },
        "Fruity Plum Leaves": {
          displayName: {
            translationKey: "item:fruityPlumLeaves"
          },
          ttb: 350,
          textureInfo: "leaves_plum_fruity",
          harvestType: "cuttable",
          drops: null,
          specialToolDrop: {
            tool: "Shears",
            drops: "Fruity Plum Leaves"
          }
        },
        "Fruity Palm Leaves": {
          displayName: {
            translationKey: "item:fruityPalmLeaves"
          },
          ttb: 350,
          textureInfo: "leaves_palm_fruity",
          harvestType: "cuttable",
          drops: null,
          specialToolDrop: {
            tool: "Shears",
            drops: "Fruity Palm Leaves"
          }
        },
        "Fruity Pear Leaves": {
          displayName: {
            translationKey: "item:fruityPearLeaves"
          },
          ttb: 350,
          textureInfo: "leaves_pear_fruity",
          harvestType: "cuttable",
          drops: null,
          specialToolDrop: {
            tool: "Shears",
            drops: "Fruity Pear Leaves"
          }
        },
        "Fruity Cherry Leaves": {
          displayName: {
            translationKey: "item:fruityCherryLeaves"
          },
          ttb: 350,
          textureInfo: "leaves_cherry_fruity",
          harvestType: "cuttable",
          drops: null,
          specialToolDrop: {
            tool: "Shears",
            drops: "Fruity Cherry Leaves"
          }
        },
        "Fruity Mango Leaves": {
          displayName: {
            translationKey: "item:fruityMangoLeaves"
          },
          ttb: 350,
          textureInfo: "leaves_mango_fruity",
          harvestType: "cuttable",
          drops: null,
          specialToolDrop: {
            tool: "Shears",
            drops: "Fruity Mango Leaves"
          }
        },
        ...(0, yd.fb)("Draugr Huntress"),
        ...(0, yd.fb)("Magma Golem"),
        "Black Portal": {
          displayName: {
            translationKey: "item:blackPortal"
          },
          textureInfo: {
            animTextures: ["black_portal0", "black_portal1", "black_portal2", "black_portal3"],
            animationInterval: 500,
            interpolateFrames: !1
          },
          drops: null,
          harvestType: "rock",
          solid: !0,
          Pq: (0, yd.xb)("Black")
        },
        "Blue Portal": {
          displayName: {
            translationKey: "item:bluePortal"
          },
          textureInfo: {
            animTextures: ["blue_portal0", "blue_portal1", "blue_portal2", "blue_portal3"],
            animationInterval: 500,
            interpolateFrames: !1
          },
          drops: null,
          harvestType: "rock",
          solid: !0,
          Pq: (0, yd.xb)("Blue")
        },
        "Brown Portal": {
          displayName: {
            translationKey: "item:brownPortal"
          },
          textureInfo: {
            animTextures: ["brown_portal0", "brown_portal1", "brown_portal2", "brown_portal3"],
            animationInterval: 500,
            interpolateFrames: !1
          },
          drops: null,
          harvestType: "rock",
          solid: !0,
          Pq: (0, yd.xb)("Brown")
        },
        "Cyan Portal": {
          displayName: {
            translationKey: "item:cyanPortal"
          },
          textureInfo: {
            animTextures: ["cyan_portal0", "cyan_portal1", "cyan_portal2", "cyan_portal3"],
            animationInterval: 500,
            interpolateFrames: !1
          },
          drops: null,
          harvestType: "rock",
          solid: !0,
          Pq: (0, yd.xb)("Cyan")
        },
        "Gray Portal": {
          displayName: {
            translationKey: "item:grayPortal"
          },
          textureInfo: {
            animTextures: ["gray_portal0", "gray_portal1", "gray_portal2", "gray_portal3"],
            animationInterval: 500,
            interpolateFrames: !1
          },
          drops: null,
          harvestType: "rock",
          solid: !0,
          Pq: (0, yd.xb)("Gray")
        },
        "Green Portal": {
          displayName: {
            translationKey: "item:greenPortal"
          },
          textureInfo: {
            animTextures: ["green_portal0", "green_portal1", "green_portal2", "green_portal3"],
            animationInterval: 500,
            interpolateFrames: !1
          },
          drops: null,
          harvestType: "rock",
          solid: !0,
          Pq: (0, yd.xb)("Green")
        },
        "Grey Portal": {
          displayName: {
            translationKey: "item:greyPortal"
          },
          textureInfo: {
            animTextures: ["grey_portal0", "grey_portal1", "grey_portal2", "grey_portal3"],
            animationInterval: 500,
            interpolateFrames: !1
          },
          drops: null,
          harvestType: "rock",
          solid: !0,
          Pq: (0, yd.xb)("Grey")
        },
        "Light Blue Portal": {
          displayName: {
            translationKey: "item:lightbluePortal"
          },
          textureInfo: {
            animTextures: ["lightblue_portal0", "lightblue_portal1", "lightblue_portal2", "lightblue_portal3"],
            animationInterval: 500,
            interpolateFrames: !1
          },
          drops: null,
          harvestType: "rock",
          solid: !0,
          Pq: (0, yd.xb)("Light Blue")
        },
        "Light Gray Portal": {
          displayName: {
            translationKey: "item:lightgrayPortal"
          },
          textureInfo: {
            animTextures: ["lightgray_portal0", "lightgray_portal1", "lightgray_portal2", "lightgray_portal3"],
            animationInterval: 500,
            interpolateFrames: !1
          },
          drops: null,
          harvestType: "rock",
          solid: !0,
          Pq: (0, yd.xb)("Light Gray")
        },
        "Lime Portal": {
          displayName: {
            translationKey: "item:limePortal"
          },
          textureInfo: {
            animTextures: ["lime_portal0", "lime_portal1", "lime_portal2", "lime_portal3"],
            animationInterval: 500,
            interpolateFrames: !1
          },
          drops: null,
          harvestType: "rock",
          solid: !0,
          Pq: (0, yd.xb)("Lime")
        },
        "Magenta Portal": {
          displayName: {
            translationKey: "item:magentaPortal"
          },
          textureInfo: {
            animTextures: ["magenta_portal0", "magenta_portal1", "magenta_portal2", "magenta_portal3"],
            animationInterval: 500,
            interpolateFrames: !1
          },
          drops: null,
          harvestType: "rock",
          solid: !0,
          Pq: (0, yd.xb)("Magenta")
        },
        "Orange Portal": {
          displayName: {
            translationKey: "item:orangePortal"
          },
          textureInfo: {
            animTextures: ["orange_portal0", "orange_portal1", "orange_portal2", "orange_portal3"],
            animationInterval: 500,
            interpolateFrames: !1
          },
          drops: null,
          harvestType: "rock",
          solid: !0,
          Pq: (0, yd.xb)("Orange")
        },
        "Pink Portal": {
          displayName: {
            translationKey: "item:pinkPortal"
          },
          textureInfo: {
            animTextures: ["pink_portal0", "pink_portal1", "pink_portal2", "pink_portal3"],
            animationInterval: 500,
            interpolateFrames: !1
          },
          drops: null,
          harvestType: "rock",
          solid: !0,
          Pq: (0, yd.xb)("Pink")
        },
        "Purple Portal": {
          displayName: {
            translationKey: "item:purplePortal"
          },
          textureInfo: {
            animTextures: ["purple_portal0", "purple_portal1", "purple_portal2", "purple_portal3"],
            animationInterval: 500,
            interpolateFrames: !1
          },
          drops: null,
          harvestType: "rock",
          solid: !0,
          Pq: (0, yd.xb)("Purple")
        },
        "Red Portal": {
          displayName: {
            translationKey: "item:redPortal"
          },
          textureInfo: {
            animTextures: ["red_portal0", "red_portal1", "red_portal2", "red_portal3"],
            animationInterval: 500,
            interpolateFrames: !1
          },
          drops: null,
          harvestType: "rock",
          solid: !0,
          Pq: (0, yd.xb)("Red")
        },
        "White Portal": {
          displayName: {
            translationKey: "item:whitePortal"
          },
          textureInfo: {
            animTextures: ["white_portal0", "white_portal1", "white_portal2", "white_portal3"],
            animationInterval: 500,
            interpolateFrames: !1
          },
          drops: null,
          harvestType: "rock",
          solid: !0,
          Pq: (0, yd.xb)("White")
        },
        "Yellow Portal": {
          displayName: {
            translationKey: "item:yellowPortal"
          },
          textureInfo: {
            animTextures: ["yellow_portal0", "yellow_portal1", "yellow_portal2", "yellow_portal3"],
            animationInterval: 500,
            interpolateFrames: !1
          },
          drops: null,
          harvestType: "rock",
          solid: !0,
          Pq: (0, yd.xb)("Yellow")
        },
        "Leather Block": {
          displayName: {
            translationKey: "item:leatherBlock"
          },
          ttb: 960,
          textureInfo: ["leather_block_side", "leather_block_top"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          harvestType: "cuttable",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        },
        ...(0, yd.fb)("Horse"),
        "Tomato Plant": {
          displayName: {
            translationKey: "item:tomato"
          },
          ttb: 400,
          textureInfo: "tomato_plant_stage0",
          itemTexture: "tomato_plant_stage0",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable"
        },
        ...(0, yd.tb)("Tomato Plant", {
          displayName: {
            translationKey: "item:tomato"
          },
          ttb: 400,
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          drops: null
        }, ["tomato_plant_stage1"], {
          1: {
            itemTexture: "tomato_plant_stage1"
          }
        }),
        "Tomato Plant|FreshlyGrown": {
          displayName: {
            translationKey: "item:tomato"
          },
          ttb: 400,
          textureInfo: "tomato_plant_stage2",
          itemTexture: "tomato_plant_stage2",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          onMinedAura: 5
        },
        "Tomato Plant|Top|FreshlyGrown": {
          displayName: {
            translationKey: "item:tomato"
          },
          ttb: 400,
          textureInfo: "tomato_plant_stage2_top",
          itemTexture: "tomato_plant_stage2_top",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          onMinedAura: 5
        },
        "Carrot Plant": {
          displayName: {
            translationKey: "item:carrotSeeds"
          },
          ttb: 400,
          textureInfo: "carrot_plant_stage0",
          itemTexture: "carrot_seeds",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          drops: "Carrot Seeds",
          description: {
            translationKey: "item:carrotSeedsDescription"
          }
        },
        ...(0, yd.tb)("Carrot Plant", {
          displayName: {
            translationKey: "item:carrotSeeds"
          },
          ttb: 400,
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "carrot_seeds",
          drops: "Carrot Seeds",
          description: {
            translationKey: "item:carrotSeedsDescription"
          }
        }, ["carrot_plant_stage1"]),
        "Carrot Plant|FreshlyGrown": {
          displayName: {
            translationKey: "item:carrotSeeds"
          },
          ttb: 400,
          textureInfo: "carrot_plant_stage2",
          itemTexture: "carrot_seeds",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          description: {
            translationKey: "item:carrotSeedsDescription"
          },
          onMinedAura: 5
        },
        "Potato Plant": {
          displayName: {
            translationKey: "item:potatoSeeds"
          },
          ttb: 400,
          textureInfo: "potato_plant_stage0",
          itemTexture: "potato_seeds",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          drops: "Potato Seeds",
          description: {
            translationKey: "item:potatoSeedsDescription"
          }
        },
        ...(0, yd.tb)("Potato Plant", {
          displayName: {
            translationKey: "item:potatoSeeds"
          },
          ttb: 400,
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "potato_seeds",
          drops: "Potato Seeds",
          description: {
            translationKey: "item:potatoSeedsDescription"
          }
        }, ["potato_plant_stage1"]),
        "Potato Plant|FreshlyGrown": {
          displayName: {
            translationKey: "item:potatoSeeds"
          },
          ttb: 400,
          textureInfo: "potato_plant_stage2",
          itemTexture: "potato_seeds",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          onMinedAura: 5,
          description: {
            translationKey: "item:potatoSeedsDescription"
          }
        },
        "Strawberry Bush": {
          displayName: {
            translationKey: "item:strawberries"
          },
          ttb: 400,
          textureInfo: "strawberry_bush_stage0",
          itemTexture: "strawberry_bush_stage0",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable"
        },
        ...(0, yd.tb)("Strawberry Bush", {
          displayName: {
            translationKey: "item:strawberries"
          },
          ttb: 400,
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          drops: null
        }, ["strawberry_bush_stage1", "strawberry_bush_stage2"], {
          1: {
            itemTexture: "strawberry_bush_stage1"
          },
          2: {
            itemTexture: "strawberry_bush_stage2",
            onMinedAura: 5
          }
        }),
        "Sugar Cane Plant": {
          displayName: {
            translationKey: "item:sugarCane"
          },
          ttb: 400,
          textureInfo: "sugar_cane_plant_stage0",
          itemTexture: "sugar_cane_plant_stage0",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable"
        },
        ...(0, yd.tb)("Sugar Cane Plant", {
          displayName: {
            translationKey: "item:sugarCane"
          },
          ttb: 400,
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          drops: null
        }, ["sugar_cane_plant_stage1"], {
          1: {
            itemTexture: "sugar_cane_plant_stage1"
          }
        }),
        "Sugar Cane Plant|FreshlyGrown": {
          displayName: {
            translationKey: "item:sugarCane"
          },
          ttb: 400,
          textureInfo: "sugar_cane_plant_stage2",
          itemTexture: "sugar_cane_plant_stage2",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          onMinedAura: 5
        },
        "Sugar Cane Plant|Top|FreshlyGrown": {
          displayName: {
            translationKey: "item:sugarCane"
          },
          ttb: 400,
          textureInfo: "sugar_cane_plant_stage2_top",
          itemTexture: "sugar_cane_plant_stage2_top",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          onMinedAura: 5
        },
        "Lettuce Plant": {
          displayName: {
            translationKey: "item:lettuce"
          },
          ttb: 400,
          textureInfo: "lettuce_plant_stage0",
          itemTexture: "lettuce_plant_stage0",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable"
        },
        ...(0, yd.tb)("Lettuce Plant", {
          displayName: {
            translationKey: "item:lettuce"
          },
          ttb: 400,
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          drops: null
        }, ["lettuce_plant_stage1"], {
          1: {
            itemTexture: "lettuce_plant_stage1"
          }
        }),
        "Lettuce Plant|FreshlyGrown": {
          displayName: {
            translationKey: "item:lettuce"
          },
          ttb: 400,
          textureInfo: "lettuce_plant_stage2",
          itemTexture: "lettuce_plant_stage2",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          onMinedAura: 5
        },
        "Coffee Plant": {
          displayName: {
            translationKey: "item:coffeeBean"
          },
          ttb: 400,
          textureInfo: "coffee_plant_stage0",
          itemTexture: "coffee_plant_stage0",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable"
        },
        ...(0, yd.tb)("Coffee Plant", {
          displayName: {
            translationKey: "item:coffeeBean"
          },
          ttb: 400,
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          drops: null
        }, ["coffee_plant_stage1"], {
          1: {
            itemTexture: "coffee_plant_stage1"
          }
        }),
        "Coffee Plant|FreshlyGrown": {
          displayName: {
            translationKey: "item:coffeeBean"
          },
          ttb: 400,
          textureInfo: "coffee_plant_stage2",
          itemTexture: "coffee_plant_stage2",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          onMinedAura: 5
        },
        "Cauliflower Plant": {
          displayName: {
            translationKey: "item:cauliflower"
          },
          ttb: 400,
          textureInfo: "cauliflower_plant_stage0",
          itemTexture: "cauliflower_plant_stage0",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable"
        },
        ...(0, yd.tb)("Cauliflower Plant", {
          displayName: {
            translationKey: "item:cauliflower"
          },
          ttb: 400,
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          drops: null
        }, ["cauliflower_plant_stage1"], {
          1: {
            itemTexture: "cauliflower_plant_stage1"
          }
        }),
        "Cauliflower Plant|FreshlyGrown": {
          displayName: {
            translationKey: "item:cauliflower"
          },
          ttb: 400,
          textureInfo: "cauliflower_plant_stage2",
          itemTexture: "cauliflower_plant_stage2",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          onMinedAura: 5
        },
        "Parsnip Plant": {
          displayName: {
            translationKey: "item:parsnip"
          },
          ttb: 400,
          textureInfo: "parsnip_plant_stage0",
          itemTexture: "parsnip_plant_stage0",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable"
        },
        ...(0, yd.tb)("Parsnip Plant", {
          displayName: {
            translationKey: "item:parsnip"
          },
          ttb: 400,
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          drops: null
        }, ["parsnip_plant_stage1"], {
          1: {
            itemTexture: "parsnip_plant_stage1"
          }
        }),
        "Parsnip Plant|FreshlyGrown": {
          displayName: {
            translationKey: "item:parsnip"
          },
          ttb: 400,
          textureInfo: "parsnip_plant_stage2",
          itemTexture: "parsnip_plant_stage2",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          onMinedAura: 5
        },
        "Blueberry Bush": {
          displayName: {
            translationKey: "item:blueberries"
          },
          ttb: 400,
          textureInfo: "blueberry_bush_stage0",
          itemTexture: "blueberry_bush_stage0",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable"
        },
        ...(0, yd.tb)("Blueberry Bush", {
          displayName: {
            translationKey: "item:blueberries"
          },
          ttb: 400,
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          drops: null
        }, ["blueberry_bush_stage1", "blueberry_bush_stage2"], {
          1: {
            itemTexture: "blueberry_bush_stage1"
          },
          2: {
            itemTexture: "blueberry_bush_stage2",
            onMinedAura: 5
          }
        }),
        "Red Cabbage Plant": {
          displayName: {
            translationKey: "item:redCabbage"
          },
          ttb: 400,
          textureInfo: "red_cabbage_stage0",
          itemTexture: "red_cabbage_stage0",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable"
        },
        ...(0, yd.tb)("Red Cabbage Plant", {
          displayName: {
            translationKey: "item:redCabbage"
          },
          ttb: 400,
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          drops: null
        }, ["red_cabbage_stage1"], {
          1: {
            itemTexture: "red_cabbage_stage1"
          }
        }),
        "Red Cabbage Plant|FreshlyGrown": {
          displayName: {
            translationKey: "item:redCabbage"
          },
          ttb: 400,
          textureInfo: "red_cabbage_stage2",
          itemTexture: "red_cabbage_stage2",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          onMinedAura: 5
        },
        "Beetroot Plant": {
          displayName: {
            translationKey: "item:beetrootSeeds"
          },
          ttb: 400,
          textureInfo: "beetroot_plant_stage0",
          itemTexture: "beetroot_seeds",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          drops: "Beetroot Seeds",
          description: {
            translationKey: "item:beetrootSeedsDescription"
          }
        },
        ...(0, yd.tb)("Beetroot Plant", {
          displayName: {
            translationKey: "item:beetrootSeeds"
          },
          ttb: 400,
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          itemTexture: "beetroot_seeds",
          drops: "Beetroot Seeds",
          description: {
            translationKey: "item:beetrootSeedsDescription"
          }
        }, ["beetroot_plant_stage1"]),
        "Beetroot Plant|FreshlyGrown": {
          displayName: {
            translationKey: "item:beetrootSeeds"
          },
          ttb: 400,
          textureInfo: "beetroot_plant_stage2",
          itemTexture: "beetroot_seeds",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          onMinedAura: 5,
          description: {
            translationKey: "item:beetrootSeedsDescription"
          }
        },
        "Autumn Aspen Leaves": {
          displayName: {
            translationKey: "item:autumnAspenLeaves"
          },
          ttb: 350,
          textureInfo: "leaves_aspen_autumn",
          harvestType: "cuttable"
        },
        "Autumn Aspen Leaves|TreeCanopy": {
          ttb: 350,
          textureInfo: "leaves_aspen_autumn",
          harvestType: "cuttable",
          drops: "Autumn Aspen Leaves"
        },
        "Autumn Fern": {
          displayName: {
            translationKey: "item:autumnFern"
          },
          ttb: 1,
          textureInfo: "autumn_fern",
          model: "CentreCross",
          heldItemScale: .5,
          solid: !1,
          drops: null,
          harvestType: "cuttable",
          specialToolDrop: {
            tool: "Shears",
            drops: "Autumn Fern"
          },
          canBePlacedOver: !0
        },
        ...(0, yd.Hb)("Iron Chest", {
          displayName: {
            translationKey: "item:ironChest"
          },
          ttb: 7200,
          textureInfo: ["iron_chest_front", "iron_chest_side", "iron_chest_top[rot[1", "iron_chest_top[rot[2", "iron_chest_top[rot[3", "iron_chest_top[rot[4", "iron_chest_back"],
          harvestType: "rock",
          rootMetaDesc: "Iron Chest|meta|rot1",
          description: {
            translationKey: "item:ironChestDescription"
          }
        }, [
          [1, 1, 2, 2, 0, 6],
          [0, 6, 3, 3, 1, 1],
          [1, 1, 4, 4, 6, 0],
          [6, 0, 5, 5, 1, 1]
        ]),
        Crate: {
          displayName: {
            translationKey: "item:crate"
          },
          ttb: 600,
          textureInfo: "crate",
          harvestType: "wood"
        },
        "Carrot Block": {
          displayName: {
            translationKey: "item:carrotBlock"
          },
          ttb: 600,
          textureInfo: ["carrot_block_side", "carrot_block_top", "carrot_block_bottom"],
          texturePerSide: [0, 0, 1, 2, 0, 0],
          harvestType: "wood"
        },
        "Carrot Seeds": {
          displayName: {
            translationKey: "item:carrotSeeds"
          },
          ttb: 400,
          textureInfo: "carrot_plant_stage0",
          itemTexture: "carrot_seeds",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          description: {
            translationKey: "item:carrotSeedsDescription"
          }
        },
        "Potato Block": {
          displayName: {
            translationKey: "item:potatoBlock"
          },
          ttb: 600,
          textureInfo: "potato_block",
          harvestType: "wood"
        },
        "Potato Seeds": {
          displayName: {
            translationKey: "item:potatoSeeds"
          },
          ttb: 400,
          textureInfo: "potato_plant_stage0",
          itemTexture: "potato_seeds",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          description: {
            translationKey: "item:potatoSeedsDescription"
          }
        },
        "Beetroot Block": {
          displayName: {
            translationKey: "item:beetrootBlock"
          },
          ttb: 600,
          textureInfo: ["beetroot_block_side", "beetroot_block_top", "beetroot_block_bottom"],
          texturePerSide: [0, 0, 1, 2, 0, 0],
          harvestType: "wood"
        },
        "Beetroot Seeds": {
          displayName: {
            translationKey: "item:beetrootSeeds"
          },
          ttb: 400,
          textureInfo: "beetroot_plant_stage0",
          itemTexture: "beetroot_seeds",
          model: "CentreCross",
          solid: !1,
          harvestType: "cuttable",
          description: {
            translationKey: "item:beetrootSeedsDescription"
          }
        },
        ...(0, yd.z)("White Banner", {
          displayName: {
            translationKey: "item:whiteBanner"
          },
          ttb: 240,
          itemTexture: "banner_white",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "White Banner|meta|rot1|bot",
          particlesIgnoreBlack: !0,
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          },
          solid: !1,
          blockModel: "White Banner",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        }),
        ...(0, yd.z)("Orange Banner", {
          displayName: {
            translationKey: "item:orangeBanner"
          },
          ttb: 240,
          itemTexture: "banner_orange",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "Orange Banner|meta|rot1|bot",
          particlesIgnoreBlack: !0,
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          },
          solid: !1,
          blockModel: "Orange Banner",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        }),
        ...(0, yd.z)("Magenta Banner", {
          displayName: {
            translationKey: "item:magentaBanner"
          },
          ttb: 240,
          itemTexture: "banner_magenta",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "Magenta Banner|meta|rot1|bot",
          particlesIgnoreBlack: !0,
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          },
          solid: !1,
          blockModel: "Magenta Banner",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        }),
        ...(0, yd.z)("Light Blue Banner", {
          displayName: {
            translationKey: "item:lightBlueBanner"
          },
          ttb: 240,
          itemTexture: "banner_light_blue",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "Light Blue Banner|meta|rot1|bot",
          particlesIgnoreBlack: !0,
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          },
          solid: !1,
          blockModel: "Light Blue Banner",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        }),
        ...(0, yd.z)("Yellow Banner", {
          displayName: {
            translationKey: "item:yellowBanner"
          },
          ttb: 240,
          itemTexture: "banner_yellow",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "Yellow Banner|meta|rot1|bot",
          particlesIgnoreBlack: !0,
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          },
          solid: !1,
          blockModel: "Yellow Banner",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        }),
        ...(0, yd.z)("Lime Banner", {
          displayName: {
            translationKey: "item:limeBanner"
          },
          ttb: 240,
          itemTexture: "banner_lime",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "Lime Banner|meta|rot1|bot",
          particlesIgnoreBlack: !0,
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          },
          solid: !1,
          blockModel: "Lime Banner",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        }),
        ...(0, yd.z)("Pink Banner", {
          displayName: {
            translationKey: "item:pinkBanner"
          },
          ttb: 240,
          itemTexture: "banner_pink",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "Pink Banner|meta|rot1|bot",
          particlesIgnoreBlack: !0,
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          },
          solid: !1,
          blockModel: "Pink Banner",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        }),
        ...(0, yd.z)("Gray Banner", {
          displayName: {
            translationKey: "item:grayBanner"
          },
          ttb: 240,
          itemTexture: "banner_gray",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "Gray Banner|meta|rot1|bot",
          particlesIgnoreBlack: !0,
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          },
          solid: !1,
          blockModel: "Gray Banner",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        }),
        ...(0, yd.z)("Light Gray Banner", {
          displayName: {
            translationKey: "item:lightGrayBanner"
          },
          ttb: 240,
          itemTexture: "banner_light_gray",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "Light Gray Banner|meta|rot1|bot",
          particlesIgnoreBlack: !0,
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          },
          solid: !1,
          blockModel: "Light Gray Banner",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        }),
        ...(0, yd.z)("Cyan Banner", {
          displayName: {
            translationKey: "item:cyanBanner"
          },
          ttb: 240,
          itemTexture: "banner_cyan",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "Cyan Banner|meta|rot1|bot",
          particlesIgnoreBlack: !0,
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          },
          solid: !1,
          blockModel: "Cyan Banner",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        }),
        ...(0, yd.z)("Purple Banner", {
          displayName: {
            translationKey: "item:purpleBanner"
          },
          ttb: 240,
          itemTexture: "banner_purple",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "Purple Banner|meta|rot1|bot",
          particlesIgnoreBlack: !0,
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          },
          solid: !1,
          blockModel: "Purple Banner",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        }),
        ...(0, yd.z)("Blue Banner", {
          displayName: {
            translationKey: "item:blueBanner"
          },
          ttb: 240,
          itemTexture: "banner_blue",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "Blue Banner|meta|rot1|bot",
          particlesIgnoreBlack: !0,
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          },
          solid: !1,
          blockModel: "Blue Banner",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        }),
        ...(0, yd.z)("Brown Banner", {
          displayName: {
            translationKey: "item:brownBanner"
          },
          ttb: 240,
          itemTexture: "banner_brown",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "Brown Banner|meta|rot1|bot",
          particlesIgnoreBlack: !0,
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          },
          solid: !1,
          blockModel: "Brown Banner",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        }),
        ...(0, yd.z)("Green Banner", {
          displayName: {
            translationKey: "item:greenBanner"
          },
          ttb: 240,
          itemTexture: "banner_green",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "Green Banner|meta|rot1|bot",
          particlesIgnoreBlack: !0,
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          },
          solid: !1,
          blockModel: "Green Banner",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        }),
        ...(0, yd.z)("Red Banner", {
          displayName: {
            translationKey: "item:redBanner"
          },
          ttb: 240,
          itemTexture: "banner_red",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "Red Banner|meta|rot1|bot",
          particlesIgnoreBlack: !0,
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          },
          solid: !1,
          blockModel: "Red Banner",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        }),
        ...(0, yd.z)("Black Banner", {
          displayName: {
            translationKey: "item:blackBanner"
          },
          ttb: 240,
          itemTexture: "banner_black",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "Black Banner|meta|rot1|bot",
          particlesIgnoreBlack: !0,
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          },
          solid: !1,
          blockModel: "Black Banner",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        }),
        ...(0, yd.z)("Draugr Banner", {
          displayName: {
            translationKey: "item:draugrBanner"
          },
          ttb: 240,
          itemTexture: "banner_draugr",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "Draugr Banner|meta|rot1|bot",
          particlesIgnoreBlack: !0,
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          },
          solid: !1,
          blockModel: "Draugr Banner",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        }),
        ...(0, yd.fb)("Spirit Golem"),
        ...(0, yd.fb)("Spirit Wolf"),
        ...(0, yd.fb)("Spirit Bear"),
        ...(0, yd.fb)("Spirit Stag"),
        ...(0, yd.fb)("Spirit Gorilla"),
        "Fertilised Soil": {
          displayName: {
            translationKey: "item:fertilisedSoil"
          },
          ttb: 600,
          textureInfo: "fertilised_soil",
          harvestType: "granule",
          drops: "Tilled Soil"
        },
        ...(0, yd.db)("Sheep"),
        ...(0, yd.db)("Cow"),
        ...(0, yd.db)("Pig"),
        ...(0, yd.db)("Horse"),
        ...(0, yd.db)("Wolf"),
        ...(0, yd.db)("Deer"),
        ...(0, yd.db)("Wildcat"),
        "Hollow Crate": {
          displayName: {
            translationKey: "item:hollowCrate"
          },
          ttb: 600,
          textureInfo: "crate",
          harvestType: "wood",
          solid: !1
        },
        ...(0, yd.fb)("Draugr Warper"),
        ...(0, yd.zb)("Radar", "_Radar Dish Up", "active_radar", "radar_side_active", "radar_top_active"),
        ...(0, yd.zb)("Inactive Radar", "_Radar Dish Down", "inactive_radar", "radar_side_inactive", "radar_top_inactive"),
        ...(0, yd.zb)("Active Radar", "_Radar Dish Up", "active_radar", "radar_side_active", {
          textureInfo: ["radar_side_active", "radar_bottom", {
            animTextures: ["radar_screen0[rot[1", "radar_screen1[rot[1", "radar_screen2[rot[1", "radar_screen3[rot[1"],
            animationInterval: 275
          }, {
            animTextures: ["radar_screen0[rot[2", "radar_screen1[rot[2", "radar_screen2[rot[2", "radar_screen3[rot[2"],
            animationInterval: 275
          }, {
            animTextures: ["radar_screen0[rot[3", "radar_screen1[rot[3", "radar_screen2[rot[3", "radar_screen3[rot[3"],
            animationInterval: 275
          }, {
            animTextures: ["radar_screen0[rot[4", "radar_screen1[rot[4", "radar_screen2[rot[4", "radar_screen3[rot[4"],
            animationInterval: 275
          }],
          texturesPerSide: [
            [0, 0, 2, 1, 0, 0],
            [0, 0, 3, 1, 0, 0],
            [0, 0, 4, 1, 0, 0],
            [0, 0, 5, 1, 0, 0]
          ]
        }),
        "Lucky Block": {
          displayName: {
            translationKey: "item:luckyBlock"
          },
          ttb: 1200,
          textureInfo: "yellow_lucky_block",
          harvestType: "rock"
        },
        "Ultra Lucky Block": {
          displayName: {
            translationKey: "item:ultraLuckyBlock"
          },
          ttb: 1200,
          textureInfo: "light_blue_lucky_block",
          harvestType: "rock"
        },
        ...(0, yd.Fb)("Gold Trophy", {
          displayName: {
            translationKey: "item:goldTrophy"
          },
          ttb: 2e3,
          harvestType: "rock",
          model: "rotatable",
          itemTexture: "gold_trophy",
          rootMetaDesc: "Gold Trophy|meta|rot1",
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          },
          blockModel: "Gold Trophy"
        }),
        ...(0, yd.Ob)("Magenta"),
        ...(0, yd.Ob)("Light Gray"),
        ...(0, yd.Ob)("Red"),
        "INTERNAL_MESH_Gold Trophy": {
          ttb: 2e3,
          harvestType: "rock",
          blockModel: "Gold Trophy",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1
        },
        ...(0, yd.fb)("Frost Wraith"),
        ...(0, yd.fb)("Draugr Reaver"),
        ...(0, yd.Ob)("White"),
        ...(0, yd.Ob)("Orange"),
        ...(0, yd.Ob)("Light Blue"),
        ...(0, yd.Ob)("Yellow"),
        ...(0, yd.Ob)("Lime"),
        ...(0, yd.Ob)("Pink"),
        ...(0, yd.Ob)("Gray"),
        ...(0, yd.Ob)("Cyan"),
        ...(0, yd.Ob)("Purple"),
        ...(0, yd.Ob)("Blue"),
        ...(0, yd.Ob)("Brown"),
        ...(0, yd.Ob)("Green"),
        ...(0, yd.Ob)("Black"),
        ...(0, yd.z)("Skull Banner", {
          displayName: {
            translationKey: "item:skullBanner"
          },
          ttb: 240,
          itemTexture: "banner_skull",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "Skull Banner|meta|rot1|bot",
          particlesIgnoreBlack: !0,
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          },
          solid: !1,
          blockModel: "Skull Banner",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        }),
        ...(0, yd.z)("Rainbow Banner", {
          displayName: {
            translationKey: "item:rainbowBanner"
          },
          ttb: 240,
          itemTexture: "banner_rainbow",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "Rainbow Banner|meta|rot1|bot",
          particlesIgnoreBlack: !0,
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          },
          solid: !1,
          blockModel: "Rainbow Banner",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        }),
        "Duo Blocchino Statue": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          itemTexture: "2_block",
          blockModel: "2_block",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 3,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "Bebek Bebek Bebek Statue": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          itemTexture: "bebek_bebek_bebek",
          blockModel: "bebek_bebek_bebek",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 3,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "Bobino Musculino Statue": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          itemTexture: "bobino_musculino",
          blockModel: "bobino_musculino",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 3,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "Bobzilla Statue": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          itemTexture: "bobzilla",
          blockModel: "bobzilla",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 3,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "Brra Brra Pachim Statue": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          itemTexture: "brra_brra_pachim",
          blockModel: "brra_brra_pachim",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 2.5,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "Capitano Explovissimo Statue": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          itemTexture: "capitano_explovissimo",
          blockModel: "capitano_explovissimo",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 3,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "Cappuccino Ninjino Statue": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          itemTexture: "cappuccino_ninjino",
          blockModel: "cappuccino_ninjino",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 3,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "Chimpanzano Bananano Statue": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          itemTexture: "chimpanzano_bananano",
          blockModel: "chimpanzano_bananano",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 3,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "Il Wizardini Del Porko Statue": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          itemTexture: "il_wizardini_del_porko",
          blockModel: "il_wizardini_del_porko",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 3,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "Lucchia Blocchi Statue": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          itemTexture: "lucchia_blocchi",
          blockModel: "lucchia_blocchi",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 3,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "Monsieur Bedwar Statue": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          itemTexture: "monsieur_bedwar",
          blockModel: "monsieur_bedwar",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 3,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "Twirlina Cappucina Statue": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          itemTexture: "twirlina_cappucina",
          blockModel: "twirlina_cappucina",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 3,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "Weapon Lucky Block": {
          displayName: {
            translationKey: "item:weaponLuckyBlock"
          },
          ttb: 1200,
          textureInfo: ["red_lucky_block", "weapon_lucky_block"],
          texturePerSide: [1, 1, 0, 0, 0, 0],
          harvestType: "rock"
        },
        "Boiling Pot": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          itemTexture: "boiling_pot",
          blockModel: "boiling_pot",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "Chopping Board": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          itemTexture: "chopping_board",
          blockModel: "chopping_board",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "Frying Pan": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          itemTexture: "frying_pan",
          blockModel: "frying_pan",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "Hob Boiling": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          itemTexture: "hob_boiling",
          blockModel: "hob_boiling",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "Hob Frying": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          itemTexture: "hob_frying",
          blockModel: "hob_frying",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "Kitchen Worktop": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          itemTexture: "kitchen_worktop",
          blockModel: "kitchen_worktop",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "Slicing Board": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          itemTexture: "slicing_board",
          blockModel: "slicing_board",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          }
        },
        ...(0, yd.Fb)("Wood Trophy", {
          displayName: {
            translationKey: "item:woodTrophy"
          },
          ttb: 2e3,
          harvestType: "rock",
          model: "rotatable",
          itemTexture: "wood_trophy",
          rootMetaDesc: "Wood Trophy|meta|rot1",
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          },
          blockModel: "Wood Trophy"
        }),
        "INTERNAL_MESH_Wood Trophy": {
          ttb: 2e3,
          harvestType: "wood",
          blockModel: "Wood Trophy",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1
        },
        ...(0, yd.Fb)("Stone Trophy", {
          displayName: {
            translationKey: "item:stoneTrophy"
          },
          ttb: 2e3,
          harvestType: "rock",
          model: "rotatable",
          itemTexture: "stone_trophy",
          rootMetaDesc: "Stone Trophy|meta|rot1",
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          },
          blockModel: "Stone Trophy"
        }),
        "INTERNAL_MESH_Stone Trophy": {
          ttb: 2e3,
          harvestType: "rock",
          blockModel: "Stone Trophy",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1
        },
        ...(0, yd.Fb)("Iron Trophy", {
          displayName: {
            translationKey: "item:ironTrophy"
          },
          ttb: 2e3,
          harvestType: "rock",
          model: "rotatable",
          itemTexture: "iron_trophy",
          rootMetaDesc: "Iron Trophy|meta|rot1",
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          },
          blockModel: "Iron Trophy"
        }),
        "INTERNAL_MESH_Iron Trophy": {
          ttb: 2e3,
          harvestType: "rock",
          blockModel: "Iron Trophy",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1
        },
        ...(0, yd.Fb)("Diamond Trophy", {
          displayName: {
            translationKey: "item:diamondTrophy"
          },
          ttb: 2e3,
          harvestType: "rock",
          model: "rotatable",
          itemTexture: "diamond_trophy",
          rootMetaDesc: "Diamond Trophy|meta|rot1",
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          },
          blockModel: "Diamond Trophy"
        }),
        "INTERNAL_MESH_Diamond Trophy": {
          ttb: 2e3,
          harvestType: "rock",
          blockModel: "Diamond Trophy",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1
        },
        ...(0, yd.Fb)("Moonstone Trophy", {
          displayName: {
            translationKey: "item:moonstoneTrophy"
          },
          ttb: 2e3,
          harvestType: "rock",
          model: "rotatable",
          itemTexture: "moonstone_trophy",
          rootMetaDesc: "Moonstone Trophy|meta|rot1",
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          },
          blockModel: "Moonstone Trophy",
          Pq: [5, 6, 8]
        }),
        "INTERNAL_MESH_Moonstone Trophy": {
          ttb: 2e3,
          harvestType: "rock",
          blockModel: "Moonstone Trophy",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1
        },
        "Black Wave": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          blockModel: "wave_black",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "Blue Wave": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          blockModel: "wave_blue",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "Brown Wave": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          blockModel: "wave_brown",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "Cyan Wave": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          blockModel: "wave_cyan",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "Green Wave": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          blockModel: "wave_green",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "Grey Wave": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          blockModel: "wave_grey",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "Light Blue Wave": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          blockModel: "wave_light_blue",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "Light Grey Wave": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          blockModel: "wave_light_grey",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "Lime Wave": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          blockModel: "wave_lime",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "Magenta Wave": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          blockModel: "wave_magenta",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "Orange Wave": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          blockModel: "wave_orange",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "Pink Wave": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          blockModel: "wave_pink",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "Purple Wave": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          blockModel: "wave_purple",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "Red Wave": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          blockModel: "wave_red",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "White Wave": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          blockModel: "wave_white",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "Yellow Wave": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          blockModel: "wave_yellow",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1,
          customModelInfo: {
            yOffset: -.5
          }
        },
        ...(0, yd.Fb)("White Directional Arrow", {
          displayName: {
            translationKey: "item:directionalArrow",
            params: {
              colour: "$t(colour:white)"
            }
          },
          ttb: 400,
          itemTexture: "white_directional_arrow",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "White Directional Arrow|meta|rot1",
          solid: !1,
          blockModel: "White Directional Arrow",
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          }
        }),
        ...(0, yd.Fb)("Orange Directional Arrow", {
          displayName: {
            translationKey: "item:directionalArrow",
            params: {
              colour: "$t(colour:orange)"
            }
          },
          ttb: 400,
          itemTexture: "orange_directional_arrow",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "Orange Directional Arrow|meta|rot1",
          solid: !1,
          blockModel: "Orange Directional Arrow",
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          }
        }),
        ...(0, yd.Fb)("Magenta Directional Arrow", {
          displayName: {
            translationKey: "item:directionalArrow",
            params: {
              colour: "$t(colour:magenta)"
            }
          },
          ttb: 400,
          itemTexture: "magenta_directional_arrow",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "Magenta Directional Arrow|meta|rot1",
          solid: !1,
          blockModel: "Magenta Directional Arrow",
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          }
        }),
        ...(0, yd.Fb)("Light Blue Directional Arrow", {
          displayName: {
            translationKey: "item:directionalArrow",
            params: {
              colour: "$t(colour:light_blue)"
            }
          },
          ttb: 400,
          itemTexture: "light_blue_directional_arrow",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "Light Blue Directional Arrow|meta|rot1",
          solid: !1,
          blockModel: "Light Blue Directional Arrow",
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          }
        }),
        ...(0, yd.Fb)("Yellow Directional Arrow", {
          displayName: {
            translationKey: "item:directionalArrow",
            params: {
              colour: "$t(colour:yellow)"
            }
          },
          ttb: 400,
          itemTexture: "yellow_directional_arrow",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "Yellow Directional Arrow|meta|rot1",
          solid: !1,
          blockModel: "Yellow Directional Arrow",
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          }
        }),
        ...(0, yd.Fb)("Lime Directional Arrow", {
          displayName: {
            translationKey: "item:directionalArrow",
            params: {
              colour: "$t(colour:lime)"
            }
          },
          ttb: 400,
          itemTexture: "lime_directional_arrow",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "Lime Directional Arrow|meta|rot1",
          solid: !1,
          blockModel: "Lime Directional Arrow",
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          }
        }),
        ...(0, yd.Fb)("Pink Directional Arrow", {
          displayName: {
            translationKey: "item:directionalArrow",
            params: {
              colour: "$t(colour:pink)"
            }
          },
          ttb: 400,
          itemTexture: "pink_directional_arrow",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "Pink Directional Arrow|meta|rot1",
          solid: !1,
          blockModel: "Pink Directional Arrow",
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          }
        }),
        ...(0, yd.Fb)("Grey Directional Arrow", {
          displayName: {
            translationKey: "item:directionalArrow",
            params: {
              colour: "$t(colour:gray)"
            }
          },
          ttb: 400,
          itemTexture: "grey_directional_arrow",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "Grey Directional Arrow|meta|rot1",
          solid: !1,
          blockModel: "Grey Directional Arrow",
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          }
        }),
        ...(0, yd.Fb)("Light Grey Directional Arrow", {
          displayName: {
            translationKey: "item:directionalArrow",
            params: {
              colour: "$t(colour:light_gray)"
            }
          },
          ttb: 400,
          itemTexture: "light_grey_directional_arrow",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "Light Grey Directional Arrow|meta|rot1",
          solid: !1,
          blockModel: "Light Grey Directional Arrow",
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          }
        }),
        ...(0, yd.Fb)("Cyan Directional Arrow", {
          displayName: {
            translationKey: "item:directionalArrow",
            params: {
              colour: "$t(colour:cyan)"
            }
          },
          ttb: 400,
          itemTexture: "cyan_directional_arrow",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "Cyan Directional Arrow|meta|rot1",
          solid: !1,
          blockModel: "Cyan Directional Arrow",
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          }
        }),
        ...(0, yd.Fb)("Purple Directional Arrow", {
          displayName: {
            translationKey: "item:directionalArrow",
            params: {
              colour: "$t(colour:purple)"
            }
          },
          ttb: 400,
          itemTexture: "purple_directional_arrow",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "Purple Directional Arrow|meta|rot1",
          solid: !1,
          blockModel: "Purple Directional Arrow",
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          }
        }),
        ...(0, yd.Fb)("Blue Directional Arrow", {
          displayName: {
            translationKey: "item:directionalArrow",
            params: {
              colour: "$t(colour:blue)"
            }
          },
          ttb: 400,
          itemTexture: "blue_directional_arrow",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "Blue Directional Arrow|meta|rot1",
          solid: !1,
          blockModel: "Blue Directional Arrow",
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          }
        }),
        ...(0, yd.Fb)("Brown Directional Arrow", {
          displayName: {
            translationKey: "item:directionalArrow",
            params: {
              colour: "$t(colour:brown)"
            }
          },
          ttb: 400,
          itemTexture: "brown_directional_arrow",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "Brown Directional Arrow|meta|rot1",
          solid: !1,
          blockModel: "Brown Directional Arrow",
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          }
        }),
        ...(0, yd.Fb)("Green Directional Arrow", {
          displayName: {
            translationKey: "item:directionalArrow",
            params: {
              colour: "$t(colour:green)"
            }
          },
          ttb: 400,
          itemTexture: "green_directional_arrow",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "Green Directional Arrow|meta|rot1",
          solid: !1,
          blockModel: "Green Directional Arrow",
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          }
        }),
        ...(0, yd.Fb)("Red Directional Arrow", {
          displayName: {
            translationKey: "item:directionalArrow",
            params: {
              colour: "$t(colour:red)"
            }
          },
          ttb: 400,
          itemTexture: "red_directional_arrow",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "Red Directional Arrow|meta|rot1",
          solid: !1,
          blockModel: "Red Directional Arrow",
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          }
        }),
        ...(0, yd.Fb)("Black Directional Arrow", {
          displayName: {
            translationKey: "item:directionalArrow",
            params: {
              colour: "$t(colour:black)"
            }
          },
          ttb: 400,
          itemTexture: "black_directional_arrow",
          model: "rotatable",
          harvestType: "cuttable",
          rootMetaDesc: "Black Directional Arrow|meta|rot1",
          solid: !1,
          blockModel: "Black Directional Arrow",
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          }
        }),
        Bin: {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          itemTexture: "bin",
          blockModel: "bin",
          blockModelItem: !0,
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          },
          heldItemScale: 4
        },
        ...(0, yd.Fb)("Vending Machine", {
          ttb: 2e3,
          harvestType: "rock",
          model: "rotatable",
          itemTexture: "vending_machine",
          blockModel: "vending_machine_bottom",
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          },
          rootMetaDesc: "Vending Machine|meta|rot1"
        }),
        ...(0, yd.Fb)("_Vending Machine Top", {
          ttb: 2e3,
          harvestType: "rock",
          model: "rotatable",
          blockModel: "vending_machine_top",
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          },
          drops: "Vending Machine",
          rootMetaDesc: "_Vending Machine Top|meta|rot1"
        }),
        "Job Application Statue": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          itemTexture: "job_application",
          blockModel: "job_application",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 3,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "John Beef Statue": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          itemTexture: "john_beef",
          blockModel: "john_beef",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 3,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "67 Statue": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          itemTexture: "67",
          blockModel: "67",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 3,
          customModelInfo: {
            yOffset: -.5
          }
        },
        "Coloured Wheel": {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          itemTexture: "wheel",
          blockModel: "wheel",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 4,
          customModelInfo: {
            yOffset: 0
          }
        },
        UFO: {
          ttb: 2e3,
          harvestType: "rock",
          model: "CustomModel",
          blockModel: "ufo",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1
        },
        ...(0, yd.jb)("Torch", {
          ttb: 300,
          harvestType: "cuttable",
          itemTexture: "torch",
          solid: !1,
          model: "CustomModel",
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5,
            unlit: !0
          },
          blockModel: "torch",
          blockModelItem: !0,
          heldItemScale: 8,
          unlitStandaloneMesh: !0,
          rootMetaDesc: "Torch|meta|rot1|bot",
          Pq: [14, 14, 12]
        }, {
          wallBlockModel: "torch_wall"
        }),
        ...(0, yd.K)((dd => `${dd} Torch`), {
          ttb: 300,
          harvestType: "cuttable",
          itemTexture: dd => `torch_${(0,td.xe)(dd)}`,
          solid: !1,
          model: "CustomModel",
          modelScale: 8,
          customModelInfo: () => ({
            yOffset: -.5,
            unlit: !0
          }),
          blockModel: dd => `torch_${(0,td.xe)(dd)}`,
          blockModelItem: !0,
          heldItemScale: 8,
          unlitStandaloneMesh: !0,
          rootMetaDesc: dd => `${dd} Torch|meta|rot1|bot`,
          Pq: dd => td.F[dd]
        }, (dd => `torch_wall_${(0,td.xe)(dd)}`)),
        ...(0, yd.H)((dd => `${dd} Neon`), {
          ttb: 200,
          harvestType: "granule",
          soundType: {
            break: "glass",
            place: "stone"
          },
          textureInfo: dd => `neon_${(0,td.xe)(dd)}`,
          unlitStandaloneMesh: !0,
          Pq: dd => td.F[dd]
        }),
        ...(0, yd.X)(),
        ...(0, yd.H)((dd => `Invisible ${dd} Light`), {
          ttb: 3e3,
          harvestType: "rock",
          soundType: {
            break: "glass",
            place: "stone"
          },
          textureInfo: "invisible_solid",
          transTex: !0,
          solid: !1,
          Pq: dd => td.F[dd],
          drops: null
        }),
        "Invisible Sky Light": {
          ttb: 3e3,
          harvestType: "rock",
          soundType: {
            break: "glass",
            place: "stone"
          },
          textureInfo: "invisible_solid",
          transTex: !0,
          solid: !1,
          Vy: 15,
          drops: null
        },
        "Dirt|PineGrassRoots": {
          ttb: 600,
          textureInfo: "dirt",
          harvestType: "granule"
        },
        "Dirt|JungleGrassRoots": {
          ttb: 600,
          textureInfo: "dirt",
          harvestType: "granule"
        },
        "Gun Lucky Block": {
          displayName: {
            translationKey: "item:gunLuckyBlock"
          },
          ttb: 1200,
          textureInfo: ["red_lucky_block", "gun_lucky_block"],
          texturePerSide: [1, 1, 0, 0, 0, 0],
          harvestType: "rock"
        },
        "Ghost Chest": {
          ttb: 1,
          textureInfo: ["ghost_chest_front", "ghost_chest_side", "ghost_chest_top", "ghost_chest_back"],
          texturePerSide: [1, 1, 2, 2, 0, 3],
          harvestType: "wood",
          transTex: !0,
          solid: !1,
          drops: null
        },
        "Ghost Lucky Block": {
          ttb: 1,
          textureInfo: "ghost_lucky_block",
          harvestType: "rock",
          transTex: !0,
          solid: !1,
          drops: null
        },
        "Ghost Mystery Block": {
          ttb: 1,
          textureInfo: "ghost_mystery_block",
          harvestType: "rock",
          transTex: !0,
          solid: !1,
          drops: null
        },
        Football: {
          textureInfo: "football_block",
          harvestType: "rock",
          ttb: 600,
          model: "CustomModel",
          itemTexture: "football",
          blockModel: "football",
          blockModelItem: !0,
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          },
          heldItemScale: 7
        },
        "Pet Lucky Block": {
          displayName: {
            translationKey: "item:petLuckyBlock"
          },
          ttb: 1200,
          textureInfo: ["lucky_block_pink_question", "pet_lucky_block"],
          texturePerSide: [1, 1, 0, 0, 0, 0],
          harvestType: "rock"
        },
        ...(0, yd.jb)("Glowing Mushroom", {
          ttb: 240,
          harvestType: "cuttable",
          soundType: {
            break: "cloth",
            place: "cloth"
          },
          itemTexture: "glowing_mushroom",
          model: "CustomModel",
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5,
            unlit: !0
          },
          blockModel: "glowing_mushroom",
          blockModelItem: !0,
          heldItemScale: 6,
          unlitStandaloneMesh: !0,
          rootMetaDesc: "Glowing Mushroom|meta|rot1|bot",
          Pq: [8, 15, 15]
        }, {
          wallBlockModel: "glowing_mushroom_wall",
          yRotOffset: Math.PI / 2
        }),
        ...(0, yd.jb)("Crystal", {
          ttb: 600,
          harvestType: "rock",
          soundType: {
            break: "glass",
            place: "stone"
          },
          itemTexture: "crystal",
          model: "CustomModel",
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5,
            unlit: !0
          },
          blockModel: "crystal",
          blockModelItem: !0,
          heldItemScale: 6,
          unlitStandaloneMesh: !0,
          rootMetaDesc: "Crystal|meta|rot1|bot",
          Pq: [8, 15, 7],
          drops: null,
          specialToolDrop: {
            tool: "Moonstone Pickaxe",
            drops: "Crystal"
          },
          onMinedAura: 50
        }, {
          xRotOffset: -Math.PI / 2
        }),
        ...(0, yd.Fb)("Slime Trail", {
          ...gd,
          rootMetaDesc: "Slime Trail|meta|rot1"
        }),
        "Overgrown Grass Block": {
          displayName: {
            translationKey: "item:overgrownGrassBlock"
          },
          ttb: 720,
          textureInfo: "grass_top",
          harvestType: "granule",
          soundType: {
            break: "grass",
            place: "grass"
          }
        },
        "Overgrown Pine Grass Block": {
          displayName: {
            translationKey: "item:overgrownPineGrassBlock"
          },
          ttb: 720,
          textureInfo: "pine_grass_block",
          harvestType: "granule",
          soundType: {
            break: "grass",
            place: "grass"
          }
        },
        "Overgrown Jungle Grass Block": {
          displayName: {
            translationKey: "item:overgrownJungleGrassBlock"
          },
          ttb: 720,
          textureInfo: "jungle_grass_block",
          harvestType: "granule",
          soundType: {
            break: "grass",
            place: "grass"
          }
        },
        "Smoke Block": {
          displayName: "Smoke Block",
          ttb: 100,
          textureInfo: {
            animTextures: ["smoke0", "smoke1", "smoke2", "smoke3"],
            animationInterval: 400
          },
          transTex: !0,
          solid: !1,
          drops: null,
          harvestType: "cuttable"
        },
        ...(0, yd.pb)("Pipe", "pipe", {
          displayName: {
            translationKey: "item:pipe"
          },
          description: {
            translationKey: "item:pipeDescription"
          },
          ttb: 600,
          itemTexture: "pipe",
          model: "CustomModel",
          harvestType: "rock",
          solid: !1,
          blockModelItem: !0,
          modelScale: 8,
          heldItemScale: 6,
          particlesIgnoreBlack: !0,
          rootMetaDesc: "Pipe|meta|conn|none"
        }),
        ...(0, yd.x)(),
        "Auto Crafter": {
          displayName: {
            translationKey: "item:autoCrafter"
          },
          description: {
            translationKey: "item:autoCrafterDescription"
          },
          ttb: 3600,
          textureInfo: ["autocrafter_side", "crafting_table_top", "autocrafter_bottom"],
          texturePerSide: [0, 0, 1, 2, 0, 0],
          harvestType: "rock",
          particlesIgnoreBlack: !0,
          altActionable: !0
        },
        ...(0, yd.Db)(),
        ...(0, yd.pb)("Extractor Pipe", "extractor_pipe", {
          displayName: {
            translationKey: "item:extractorPipe"
          },
          description: {
            translationKey: "item:extractorPipeDescription"
          },
          ttb: 600,
          itemTexture: "extractor_pipe",
          model: "CustomModel",
          harvestType: "rock",
          solid: !1,
          modelScale: 8,
          heldItemScale: 6,
          blockModelItem: !0,
          particlesIgnoreBlack: !0,
          rootMetaDesc: "Extractor Pipe|meta|conn|none"
        }),
        "Splitter Pipe": {
          displayName: {
            translationKey: "item:splitterPipe"
          },
          description: {
            translationKey: "item:splitterPipeDescription"
          },
          ttb: 600,
          itemTexture: "splitter_pipe",
          model: "CustomModel",
          blockModel: "splitter_pipe",
          blockModelItem: !0,
          harvestType: "rock",
          solid: !1,
          modelScale: 8,
          heldItemScale: 6,
          particlesIgnoreBlack: !0
        },
        ...(0, yd.Pb)(),
        ...(0, yd.pb)("Wire", "wire", {
          displayName: {
            translationKey: "item:wire"
          },
          description: {
            translationKey: "item:wireDescription"
          },
          ttb: 400,
          itemTexture: "wire",
          model: "CustomModel",
          harvestType: "rock",
          solid: !1,
          modelScale: 8,
          heldItemScale: 6,
          blockModelItem: !0,
          particlesIgnoreBlack: !0,
          rootMetaDesc: "Wire|meta|conn|none"
        }),
        ...(0, yd.W)("Filter Pipe", "filter_pipe", "pz", {
          displayName: {
            translationKey: "item:filterPipe"
          },
          description: {
            translationKey: "item:filterPipeDescription"
          },
          ttb: 600,
          itemTexture: "filter_pipe",
          model: "CustomModel",
          harvestType: "rock",
          solid: !1,
          modelScale: 8,
          heldItemScale: 6,
          blockModelItem: !0,
          particlesIgnoreBlack: !0,
          altActionable: !0,
          rootMetaDesc: "Filter Pipe|meta|input|none"
        }),
        ...(0, yd.cb)("Merger Pipe", "merger_pipe", "pz", {
          displayName: {
            translationKey: "item:mergerPipe"
          },
          description: {
            translationKey: "item:mergerPipeDescription"
          },
          ttb: 600,
          itemTexture: "merger_pipe",
          model: "CustomModel",
          harvestType: "rock",
          solid: !1,
          modelScale: 8,
          heldItemScale: 6,
          blockModelItem: !0,
          particlesIgnoreBlack: !0,
          altActionable: !0,
          rootMetaDesc: "Merger Pipe|meta|output|none"
        }),
        "Auto Harvester": {
          displayName: {
            translationKey: "item:autoHarvester"
          },
          description: {
            translationKey: "item:autoHarvesterDescription"
          },
          ttb: 3600,
          textureInfo: ["harvester_side0", "harvester_side1", "harvester_top", "harvester_bottom"],
          texturePerSide: [0, 1, 2, 3, 0, 1],
          harvestType: "rock",
          particlesIgnoreBlack: !0,
          altActionable: !0
        },
        ...(0, yd.fb)("Stalker"),
        "Lunite Ore": {
          displayName: {
            translationKey: "item:luniteOre"
          },
          ttb: 5e3,
          textureInfo: "lunite_ore",
          harvestType: "rock",
          harvestLevel: 3,
          drops: "Lunite",
          specialToolDrop: {
            tool: "Moonstone Pickaxe",
            drops: "Lunite Ore"
          },
          specialToolBonusDrops: {
            "Golem Pickaxe": od.o
          },
          description: {
            translationKey: "item:luniteOreDescription"
          },
          onMinedAura: 40,
          Pq: [10, 3, 12]
        },
        "Block of Lunite": {
          displayName: {
            translationKey: "item:blockOfLunite"
          },
          description: {
            translationKey: "item:blockOfLuniteDescription"
          },
          ttb: 6750,
          textureInfo: "lunite_block",
          harvestType: "rock"
        },
        ...(0, yd.$)(),
        "Lunite Auto Crafter": {
          displayName: {
            translationKey: "item:luniteAutoCrafter"
          },
          description: {
            translationKey: "item:luniteAutoCrafterDescription"
          },
          ttb: 3600,
          textureInfo: ["autocrafter_lunite_side", "crafting_table_top", "autocrafter_lunite_bottom"],
          texturePerSide: [0, 0, 1, 2, 0, 0],
          harvestType: "rock",
          particlesIgnoreBlack: !0,
          altActionable: !0
        },
        "Lunite Auto Harvester": {
          displayName: {
            translationKey: "item:luniteAutoHarvester"
          },
          description: {
            translationKey: "item:luniteAutoHarvesterDescription"
          },
          ttb: 3600,
          textureInfo: ["harvester_lunite_side_0", "harvester_lunite_side_1", "harvester_lunite_top", "harvester_lunite_bottom"],
          texturePerSide: [0, 1, 2, 3, 0, 1],
          harvestType: "rock",
          particlesIgnoreBlack: !0,
          altActionable: !0
        },
        "Bowling Alley Floor": {
          displayName: {
            translationKey: "item:bowlingAlleyFloor"
          },
          ttb: 960,
          textureInfo: "bowling_alley_floor",
          harvestType: "cuttable",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        },
        ...(0, yd.fb)("Crone"),
        ...(0, yd.fb)("Slime"),
        "Slime Trail|meta|rot1|Decaying": {
          ...gd
        },
        "Slime Trail|meta|rot2|Decaying": {
          ...gd
        },
        "Slime Trail|meta|rot3|Decaying": {
          ...gd
        },
        "Slime Trail|meta|rot4|Decaying": {
          ...gd
        },
        ...(0, yd.fb)("Iron Guardian"),
        ...(0, yd.fb)("Gold Guardian"),
        ...(0, yd.fb)("Diamond Guardian"),
        ...(0, yd.fb)("Moonstone Guardian"),
        "Dry Grass Block": {
          displayName: {
            translationKey: "item:dryGrassBlock"
          },
          ttb: 720,
          textureInfo: ["dry_grass_block_side", "dry_grass_block", "dirt"],
          texturePerSide: [0, 0, 1, 2, 0, 0],
          harvestType: "granule",
          soundType: {
            break: "grass",
            place: "grass"
          }
        },
        "Overgrown Dry Grass Block": {
          displayName: {
            translationKey: "item:overgrownDryGrassBlock"
          },
          ttb: 720,
          textureInfo: "dry_grass_block",
          harvestType: "granule",
          soundType: {
            break: "grass",
            place: "grass"
          }
        },
        "Dead Bush": {
          displayName: {
            translationKey: "item:deadBush"
          },
          ttb: 1,
          textureInfo: "dead_bush",
          model: "CentreCross",
          heldItemScale: .5,
          solid: !1,
          drops: null,
          harvestType: "cuttable",
          specialToolDrop: {
            tool: "Shears",
            drops: "Dead Bush"
          },
          canBePlacedOver: !0
        },
        "Dirt|DryGrassRoots": {
          ttb: 600,
          textureInfo: "dirt",
          harvestType: "granule"
        },
        ...(0, yd.Kb)("Dry Grass Slab", {
          displayName: {
            translationKey: "item:dryGrassSlab"
          },
          ttb: 1200,
          textureInfo: ["slab_dry_grass_top_side", "dry_grass_block"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          model: "Slab",
          harvestType: "granule",
          slabFullBlock: "Dry Grass Block",
          rootMetaDesc: "Dry Grass Slab|meta|rot1|bot"
        }),
        ...(0, yd.jb)("Lantern", {
          displayName: {
            translationKey: "item:lantern"
          },
          ttb: 2500,
          harvestType: "rock",
          soundType: {
            break: "glass",
            place: "stone"
          },
          itemTexture: "lantern",
          model: "CustomModel",
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5,
            unlit: !0
          },
          blockModel: "lantern",
          blockModelItem: !0,
          heldItemScale: 8,
          unlitStandaloneMesh: !0,
          rootMetaDesc: "Lantern|meta|rot1|bot",
          Pq: [15, 15, 13]
        }, {
          wallBlockModel: "lantern_wall",
          yRotOffset: -Math.PI,
          noCeilingVariant: !0
        }),
        ...(0, yd.Fb)("Lily Pad", {
          rootMetaDesc: "Lily Pad|meta|rot1",
          displayName: {
            translationKey: "item:lilyPad"
          },
          ttb: 300,
          itemTexture: "lily_pad",
          model: "rotatable",
          harvestType: "cuttable",
          solid: !0,
          Sy: (0, Wd.e)([
            [
              [0, 0, 0],
              [8, 1, 8]
            ]
          ]),
          blockModel: "lily_pad_model",
          modelScale: 7.5,
          customModelInfo: {
            yOffset: -.4375
          },
          particlesIgnoreBlack: !0
        }),
        ...(0, yd.fb)("Camel"),
        ...(0, yd.db)("Camel", 8),
        "Rare Lucky Block": {
          displayName: "Rare Lucky Block",
          ttb: 1200,
          textureInfo: "yellow_lucky_block_rare",
          harvestType: "rock"
        },
        "Super Lucky Block": {
          displayName: "Super Lucky Block",
          ttb: 1200,
          textureInfo: "yellow_lucky_block_super",
          harvestType: "rock"
        },
        "Rare Weapon Lucky Block": {
          displayName: "Rare Weapon Lucky Block",
          ttb: 1200,
          textureInfo: ["red_lucky_block_rare", "weapon_lucky_block_rare"],
          texturePerSide: [1, 1, 0, 0, 0, 0],
          harvestType: "rock"
        },
        "Super Weapon Lucky Block": {
          displayName: "Super Weapon Lucky Block",
          ttb: 1200,
          textureInfo: ["red_lucky_block_super", "weapon_lucky_block_super"],
          texturePerSide: [1, 1, 0, 0, 0, 0],
          harvestType: "rock"
        },
        "Building Lucky Block": {
          displayName: "Building Lucky Block",
          ttb: 1200,
          textureInfo: ["purple_lucky_block", "building_lucky_block"],
          texturePerSide: [1, 1, 0, 0, 0, 0],
          harvestType: "rock"
        },
        "Rare Building Lucky Block": {
          displayName: "Rare Building Lucky Block",
          ttb: 1200,
          textureInfo: ["purple_lucky_block_rare", "building_lucky_block_rare"],
          texturePerSide: [1, 1, 0, 0, 0, 0],
          harvestType: "rock"
        },
        "Super Building Lucky Block": {
          displayName: "Super Building Lucky Block",
          ttb: 1200,
          textureInfo: ["purple_lucky_block_super", "building_lucky_block_super"],
          texturePerSide: [1, 1, 0, 0, 0, 0],
          harvestType: "rock"
        },
        "Armour Lucky Block": {
          displayName: "Armour Lucky Block",
          ttb: 1200,
          textureInfo: ["blue_lucky_block", "armour_lucky_block"],
          texturePerSide: [1, 1, 0, 0, 0, 0],
          harvestType: "rock"
        },
        "Rare Armour Lucky Block": {
          displayName: "Rare Armour Lucky Block",
          ttb: 1200,
          textureInfo: ["blue_lucky_block_rare", "armour_lucky_block_rare"],
          texturePerSide: [1, 1, 0, 0, 0, 0],
          harvestType: "rock"
        },
        "Super Armour Lucky Block": {
          displayName: "Super Armour Lucky Block",
          ttb: 1200,
          textureInfo: ["blue_lucky_block_super", "armour_lucky_block_super"],
          texturePerSide: [1, 1, 0, 0, 0, 0],
          harvestType: "rock"
        },
        "Tools Lucky Block": {
          displayName: "Tools Lucky Block",
          ttb: 1200,
          textureInfo: ["orange_lucky_block", "tools_lucky_block"],
          texturePerSide: [1, 1, 0, 0, 0, 0],
          harvestType: "rock"
        },
        "Rare Tools Lucky Block": {
          displayName: "Rare Tools Lucky Block",
          ttb: 1200,
          textureInfo: ["orange_lucky_block_rare", "tools_lucky_block_rare"],
          texturePerSide: [1, 1, 0, 0, 0, 0],
          harvestType: "rock"
        },
        "Super Tools Lucky Block": {
          displayName: "Super Tools Lucky Block",
          ttb: 1200,
          textureInfo: ["orange_lucky_block_super", "tools_lucky_block_super"],
          texturePerSide: [1, 1, 0, 0, 0, 0],
          harvestType: "rock"
        },
        "Food Lucky Block": {
          displayName: "Food Lucky Block",
          ttb: 1200,
          textureInfo: ["green_lucky_block", "food_lucky_block"],
          texturePerSide: [1, 1, 0, 0, 0, 0],
          harvestType: "rock"
        },
        "Rare Food Lucky Block": {
          displayName: "Rare Food Lucky Block",
          ttb: 1200,
          textureInfo: ["green_lucky_block_rare", "food_lucky_block_rare"],
          texturePerSide: [1, 1, 0, 0, 0, 0],
          harvestType: "rock"
        },
        "Super Food Lucky Block": {
          displayName: "Super Food Lucky Block",
          ttb: 1200,
          textureInfo: ["green_lucky_block_super", "food_lucky_block_super"],
          texturePerSide: [1, 1, 0, 0, 0, 0],
          harvestType: "rock"
        },
        "Potion Lucky Block": {
          displayName: "Potion Lucky Block",
          ttb: 1200,
          textureInfo: ["lucky_block_pink_question", "potion_lucky_block"],
          texturePerSide: [1, 1, 0, 0, 0, 0],
          harvestType: "rock"
        },
        "Rare Potion Lucky Block": {
          displayName: "Rare Potion Lucky Block",
          ttb: 1200,
          textureInfo: ["lucky_block_pink_question_rare", "potion_lucky_block_rare"],
          texturePerSide: [1, 1, 0, 0, 0, 0],
          harvestType: "rock"
        },
        "Super Potion Lucky Block": {
          displayName: "Super Potion Lucky Block",
          ttb: 1200,
          textureInfo: ["lucky_block_pink_question_super", "potion_lucky_block_super"],
          texturePerSide: [1, 1, 0, 0, 0, 0],
          harvestType: "rock"
        },
        "Block Destroyer TNT": {
          displayName: "Block Destroyer TNT",
          ttb: 50,
          textureInfo: ["block_destroyer_tnt_side", "block_destroyer_tnt_top"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          harvestType: "cuttable",
          description: "Place it to start a 30 second fuse. When it goes off, every placed block on the map is removed. Lucky blocks survive."
        },
        ...(0, yd.t)(Jd),
        "Toxic Waste Barrel": {
          displayName: {
            translationKey: "item:toxicWasteBarrel"
          },
          ttb: 4e4,
          textureInfo: ["toxic_waste_barrel_side", "toxic_waste_barrel_bottom", {
            animTextures: ["toxic_waste_barrel_top0", "toxic_waste_barrel_top1", "toxic_waste_barrel_top2", "toxic_waste_barrel_top3"],
            animationInterval: 300
          }],
          texturePerSide: [0, 0, 2, 1, 0, 0],
          harvestType: "rock",
          harvestLevel: 5
        },
        "Toxic Waste": {
          displayName: {
            translationKey: "item:toxicWaste"
          },
          textureInfo: {
            colour: [.36, .93, .3, .95],
            animTextures: ["toxic_waste0", "toxic_waste1", "toxic_waste2", "toxic_waste3", "toxic_waste4", "toxic_waste5", "toxic_waste6", "toxic_waste7"],
            animationInterval: 800
          },
          LN: !0,
          drops: null,
          harvestType: "rock",
          Pq: [6, 14, 4]
        },
        "Ancient Maple Log": {
          displayName: {
            translationKey: "item:ancientMapleLog"
          },
          description: {
            translationKey: "item:ancientMapleLogDescription"
          },
          ttb: 2400,
          textureInfo: "log_ancient_maple",
          harvestType: "wood"
        },
        "Evil Lucky Block": {
          displayName: {
            translationKey: "item:evilLuckyBlock"
          },
          ttb: 1200,
          textureInfo: ["evil_lucky_block", "evil_lucky_block_face"],
          texturePerSide: [1, 1, 0, 0, 0, 0],
          harvestType: "rock",
          description: {
            translationKey: "item:evilLuckyBlockDescription"
          }
        },
        ...(0, yd.Sb)(Jd),
        "INTERNAL_MESH_Small Twin Icicle": {
          ttb: 2e3,
          harvestType: "rock",
          blockModel: "Small Twin Icicle",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1,
          drops: null
        },
        "INTERNAL_MESH_Medium Icicle": {
          ttb: 2e3,
          harvestType: "rock",
          blockModel: "Medium Icicle",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1,
          drops: null
        },
        "INTERNAL_MESH_Large Icicle": {
          ttb: 2e3,
          harvestType: "rock",
          blockModel: "Large Icicle",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1,
          drops: null
        },
        "INTERNAL_MESH_Large Twin Icicle": {
          ttb: 2e3,
          harvestType: "rock",
          blockModel: "Large Twin Icicle",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1,
          drops: null
        },
        ...(0, yd.lb)(),
        ...(0, yd.fb)("Tiki Terror"),
        ...(0, yd.Yb)(Yd.d),
        ...(0, yd.Q)(),
        "Pure Coal Ore": {
          displayName: {
            translationKey: "item:pureCoalOre"
          },
          ttb: 27e3,
          textureInfo: "pure_coal_ore",
          harvestType: "rock",
          drops: "Coal",
          UQ: 9,
          specialToolDrop: {
            tool: "Moonstone Pickaxe",
            drops: "Pure Coal Ore"
          },
          specialToolBonusDrops: {
            "Golem Pickaxe": od.o
          },
          onMinedAura: 45,
          Pq: [6, 6, 6]
        },
        "Pure Iron Ore": {
          displayName: {
            translationKey: "item:pureIronOre"
          },
          ttb: 32400,
          textureInfo: "pure_iron_ore",
          harvestType: "rock",
          harvestLevel: 2,
          drops: "Raw Iron",
          UQ: 9,
          specialToolDrop: {
            tool: "Moonstone Pickaxe",
            drops: "Pure Iron Ore"
          },
          specialToolBonusDrops: {
            "Golem Pickaxe": od.o
          },
          onMinedAura: 135,
          Pq: [6, 6, 6]
        },
        "Pure Gold Ore": {
          displayName: {
            translationKey: "item:pureGoldOre"
          },
          ttb: 37800,
          textureInfo: "pure_gold_ore",
          harvestType: "rock",
          harvestLevel: 3,
          drops: "Raw Gold",
          UQ: 9,
          specialToolDrop: {
            tool: "Moonstone Pickaxe",
            drops: "Pure Gold Ore"
          },
          specialToolBonusDrops: {
            "Golem Pickaxe": od.o
          },
          onMinedAura: 270,
          Pq: [6, 6, 0]
        },
        "Pure Diamond Ore": {
          displayName: {
            translationKey: "item:pureDiamondOre"
          },
          ttb: 45e3,
          textureInfo: "pure_diamond_ore",
          harvestType: "rock",
          harvestLevel: 3,
          drops: "Diamond",
          UQ: 9,
          specialToolDrop: {
            tool: "Moonstone Pickaxe",
            drops: "Pure Diamond Ore"
          },
          specialToolBonusDrops: {
            "Golem Pickaxe": od.o
          },
          onMinedAura: 360,
          Pq: [2, 6, 6]
        },
        "Pure Moonstone Ore": {
          displayName: {
            translationKey: "item:pureMoonstoneOre"
          },
          ttb: 45e3,
          textureInfo: "pure_moonstone_ore",
          harvestType: "rock",
          harvestLevel: 3,
          drops: "Moonstone",
          UQ: 9,
          specialToolDrop: {
            tool: "Moonstone Pickaxe",
            drops: "Pure Moonstone Ore"
          },
          specialToolBonusDrops: {
            "Golem Pickaxe": od.o
          },
          onMinedAura: 450,
          Pq: [6, 6, 6]
        },
        ...(0, yd.Xb)(Yd.d),
        ...(0, yd.fb)("Iron Goofy Golem"),
        ...(0, yd.fb)("Gold Goofy Golem"),
        ...(0, yd.fb)("Diamond Goofy Golem"),
        ...(0, yd.fb)("Moonstone Goofy Golem"),
        ...(0, yd.F)(),
        "Crystal Block": {
          displayName: {
            translationKey: "item:crystalBlock"
          },
          ttb: 1500,
          textureInfo: "crystal_block",
          harvestType: "rock",
          soundType: {
            break: "glass",
            place: "stone"
          },
          Pq: [9, 15, 5]
        },
        "Rope Block": {
          displayName: {
            translationKey: "item:ropeBlock"
          },
          ttb: 960,
          textureInfo: "rope_block",
          harvestType: "cuttable",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        },
        Ash: {
          displayName: {
            translationKey: "item:ash"
          },
          ttb: 600,
          textureInfo: "ash",
          harvestType: "granule",
          soundType: {
            break: "sand",
            place: "sand"
          }
        },
        ...(0, Rd.f)(),
        Darkstone: {
          displayName: {
            translationKey: "item:darkstone"
          },
          ttb: 1800,
          textureInfo: "darkstone",
          harvestType: "rock"
        },
        "Darkstone Bricks": {
          displayName: {
            translationKey: "item:darkstoneBricks"
          },
          ttb: 1800,
          textureInfo: "darkstone_bricks",
          harvestType: "rock"
        },
        "Cracked Darkstone Bricks": {
          displayName: {
            translationKey: "item:crackedDarkstoneBricks"
          },
          ttb: 1800,
          textureInfo: "darkstone_bricks_cracked",
          harvestType: "rock"
        },
        "Molten Darkstone Bricks": {
          displayName: {
            translationKey: "item:moltenDarkstoneBricks"
          },
          ttb: 1800,
          textureInfo: "darkstone_bricks_lava",
          harvestType: "rock",
          Pq: [9, 3, 1]
        },
        "Engraved Darkstone": {
          displayName: {
            translationKey: "item:engravedDarkstone"
          },
          ttb: 1800,
          textureInfo: "darkstone_engraved",
          harvestType: "rock"
        },
        "Smooth Darkstone": {
          displayName: {
            translationKey: "item:smoothDarkstone"
          },
          ttb: 1800,
          textureInfo: "darkstone_smooth",
          harvestType: "rock"
        },
        ...(0, yd.U)(bd.g, Ud),
        "INTERNAL_MESH_Floor Quarters": {
          ttb: 2e3,
          harvestType: "rock",
          blockModel: "floor_quarters",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1,
          unlitStandaloneMesh: !0,
          drops: null
        },
        "Scorpion Eggs Block": {
          displayName: {
            translationKey: "item:scorpionEggsBlock"
          },
          ttb: 600,
          textureInfo: "scorpion_eggs",
          harvestType: "cuttable",
          soundType: {
            break: "cloth",
            place: "cloth"
          }
        },
        "INTERNAL_MESH_Boss Target": {
          ttb: 2e3,
          harvestType: "rock",
          blockModel: "boss_target",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1,
          unlitStandaloneMesh: !0,
          drops: null
        },
        "INTERNAL_MESH_Rune Sigil": {
          ttb: 2e3,
          harvestType: "rock",
          blockModel: "rune_sigil",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1,
          unlitStandaloneMesh: !0,
          drops: null
        },
        "INTERNAL_MESH_Eclipse Dial": {
          ttb: 2e3,
          harvestType: "rock",
          blockModel: "eclipse_dial",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1,
          unlitStandaloneMesh: !0,
          drops: null
        },
        "INTERNAL_MESH_Beam Arm": {
          ttb: 2e3,
          harvestType: "rock",
          blockModel: "beam_arm",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1,
          unlitStandaloneMesh: !0,
          drops: null
        },
        "INTERNAL_MESH_Beam Arm Mirrored": {
          ttb: 2e3,
          harvestType: "rock",
          blockModel: "beam_arm_mirrored",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1,
          unlitStandaloneMesh: !0,
          drops: null
        },
        INTERNAL_MESH_Mortar: {
          ttb: 2e3,
          harvestType: "rock",
          blockModel: "mortar_goblin",
          blockModelItem: !0,
          twoDBlockItem: !0,
          modelScale: 1,
          meshEntityBones: ["Cannon", "LeftArm", "RightArm"],
          drops: null
        },
        ...(0, yd.Hb)("Trading Terminal", {
          displayName: {
            translationKey: "item:tradingTerminal"
          },
          description: {
            translationKey: "item:tradingTerminalDescription"
          },
          ttb: 3e3,
          textureInfo: [{
            animTextures: [0, 1, 2, 3, 4, 5, 6, 7].map((dd => `trading_terminal_front${dd}`)),
            animationInterval: 400,
            interpolateFrames: !1
          }, "trading_terminal_side", "trading_terminal_top"],
          harvestType: "rock",
          harvestLevel: 0,
          altActionable: !0,
          rootMetaDesc: "Trading Terminal|meta|rot1"
        }),
        "Stone Generator": {
          displayName: {
            translationKey: "item:stoneGenerator"
          },
          description: {
            translationKey: "item:stoneGeneratorDescription"
          },
          ttb: 3e3,
          textureInfo: ["stone_generator_side", "stone_generator_top", "messy_stone"],
          texturePerSide: [0, 0, 1, 2, 0, 0],
          harvestType: "rock",
          harvestLevel: 0
        },
        "Wheat Helper": {
          displayName: {
            translationKey: "item:wheatHelper"
          },
          description: {
            translationKey: "item:wheatHelperDescription"
          },
          ttb: 1500,
          textureInfo: ["crate", "hay_block_top"],
          texturePerSide: [0, 0, 1, 0, 0, 0],
          harvestType: "wood",
          harvestLevel: 0,
          altActionable: !0
        },
        "Carrot Helper": {
          displayName: {
            translationKey: "item:carrotHelper"
          },
          description: {
            translationKey: "item:carrotHelperDescription"
          },
          ttb: 1500,
          textureInfo: ["crate", "carrot_block_top"],
          texturePerSide: [0, 0, 1, 0, 0, 0],
          harvestType: "wood",
          harvestLevel: 0,
          altActionable: !0
        },
        "Melon Helper": {
          displayName: {
            translationKey: "item:melonHelper"
          },
          description: {
            translationKey: "item:melonHelperDescription"
          },
          ttb: 1500,
          textureInfo: ["crate", "melon_top"],
          texturePerSide: [0, 0, 1, 0, 0, 0],
          harvestType: "wood",
          harvestLevel: 0,
          altActionable: !0
        },
        ... function() {
          const dd = {};
          for (const {
              wood: Od,
              block: md
            }
            of pd.b) dd[md] = {
            displayName: {
              translationKey: `item:${(0,td.te)(md)}`
            },
            ttb: 960,
            harvestType: "wood",
            ..."Maple" === Od ? {
              showInCreativeInven: !1
            } : {},
            ...wd(md, (0, td.xe)(md), {
              rotatable: !1
            })
          };
          return dd
        }(),
        ...(0, Xd.t)(),
        ...(0, Kd.d)(),
        ...(0, hd.p)()
      };
    for (const dO of Object.values(xd))
      for (const dd of Array.isArray(dO.textureInfo) ? dO.textureInfo : [dO.textureInfo]) "object" === typeof dd && null !== dd && "animTextures" in dd && (0, Qd.e)(dd);
    let Bd = 1,
      Sd = 0;
    const sd = [],
      ud = [],
      Vd = {},
      Ad = [];
    for (const dO in xd) {
      if (Bd > 65535) throw new Error(`block ID was ${Bd}, which is over 65535 - there is a limit of 65535 block types!`);
      const dd = xd[dO];
      if (dd.id = Bd, xd[Bd] = dd, dd.name = dO, dd.stackable = !0, (0, Nd.i)(xd, dd), "door" === xd[dd.meta.rootName].model) dd.Sy = (0, yd.S)(dd.meta.rot, dd.meta.open);
      else if ("trapdoor" === xd[dd.meta.rootName].model) dd.Sy = (0, yd.Wb)(dd.meta.rot, dd.meta.open);
      else {
        const Od = (0, vd.e)(dd, xd[dd.meta.rootName]);
        Od && (dd.Sy = Od)
      }
      if ("object" === typeof dd.textureInfo && "animTextures" in dd.textureInfo) {
        var rd;
        const Od = [];
        dd.atlasIdx = Od, sd.push({
          blockName: dO,
          animTextures: dd.textureInfo.animTextures,
          atlasIndices: Od,
          animationInterval: null !== (rd = dd.textureInfo.animationInterval) && void 0 !== rd ? rd : 200
        })
      } else if (Array.isArray(dd.textureInfo)) {
        for (const Od of dd.textureInfo) {
          var Gd;
          if ("object" !== typeof Od || !("animTextures" in Od)) continue;
          const dd = [];
          sd.push({
            blockName: dO,
            animTextures: Od.animTextures,
            atlasIndices: dd,
            animationInterval: null !== (Gd = Od.animationInterval) && void 0 !== Gd ? Gd : 200
          })
        }
        ud.push(dO)
      } else ud.push(dO);
      Bd++
    }
    for (const {
        blockName: dO,
        animTextures: OO,
        atlasIndices: mO
      }
      of sd) {
      const dd = OO.length;
      if (Math.log(dd) / Math.log(2) % 1 !== 0) throw new Error(`${dO} has ${dd} animation states, which is not a power of 2`);
      Vd[OO[0]] ??= Sd++, mO.push(Vd[OO[0]])
    }
    for (const {
        animTextures: dO,
        atlasIndices: OO,
        animationInterval: mO
      }
      of sd) {
      Ad[OO[0]] ??= {
        numAnimStates: dO.length,
        animStartIdx: Sd,
        animationInterval: mO
      };
      for (let dd = 1; dd < dO.length; dd++) {
        var nd;
        const Od = dO[dd],
          md = null !== (nd = Vd[Od]) && void 0 !== nd ? nd : Sd++;
        Vd[Od] = md, OO.push(md)
      }
    }
    for (const dO of ud) {
      var Ld;
      const dd = xd[dO];
      dd.stackable = !0;
      const Od = xd[dd.meta.rootName],
        md = null === (Ld = Od.model) || void 0 === Ld ? void 0 : Ld.split("|")[0];
      if (dd.textureInfo && !Od.blockModel && (!md || "Slab" === md || "Stairs" === md || "fence" === md || "fenceGate" === md))
        if ("string" === typeof dd.textureInfo) {
          const Od = dd.textureInfo;
          let md = Vd[Od];
          void 0 === md && (md = Sd++, Vd[Od] = md), dd.atlasIdx = md
        } else if (!Array.isArray(dd.textureInfo) || "number" !== typeof dd.textureInfo[0]) {
        const Od = dd.textureInfo;
        dd.atlasIdx = [];
        for (let md = 0; md < Od.length; md++) {
          const Wd = Od[md],
            Fd = "string" === typeof Wd ? Wd : Wd.animTextures[0];
          let Rd = Vd[Fd];
          void 0 === Rd && (Rd = Sd++, Vd[Fd] = Rd), dd.atlasIdx.push(Rd)
        }
      }
    }
    const Pd = {};
    for (const dO in xd) {
      var zd;
      const dd = xd[dO];
      Pd[dO] = null !== (zd = Pd[dd.id]) && void 0 !== zd ? zd : new od.b(dd)
    }
    const cd = 47 == md.j ? Pd : null,
      jd = {};
    for (const dO in Pd) {
      const dd = dO.split("|");
      if ("meta" === dd[1]) {
        var Dd;
        const Od = null !== (Dd = jd[dd[0]]) && void 0 !== Dd ? Dd : [];
        Od.push(dO), jd[dd[0]] = Od
      }
    }
    const ed = function(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (dd === Td.e) return 0;
        const md = (0, Fd.b)(Pd, dd);
        if (md) return md.id;
        const Wd = (0, Fd.b)(Pd, dd.split("|")[0]);
        if (Wd && dd === Wd.rootMetaDesc) return Wd.id;
        if (!Od) throw new Error(`Invalid block name. You sent ${dd}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      },
      Id = dd => 0 === dd ? Td.e : Pd[dd].name;

    function ld(dd) {
      return null !== Pd[dd].meta.open
    }
    const Cd = Pd.Unloaded.id,
      Zd = {
        "Patterned Yellow Glass": 1007,
        "Black Concrete Slab|meta|rot4|side": 1220,
        Grenade: 1221,
        "Cherry Block": 1270,
        "Bouncy Bomb Block": 1271,
        "Obby Rocket": 1272,
        "Kill Spikes": 1278,
        "Corn Plant|FreshlyGrown": 1290,
        "Loot Chest|meta|rot4": 1294,
        "Melting Ice|Breaking": 1296,
        "Black Sticky Paintball Explosive": 1360,
        "_Black Strongbed Head|meta|rot4": 1488,
        "Timed Spike Bomb Block|Flashing": 1490,
        Lava: 1491,
        "Fat Red Mushroom": 1493,
        "Chili Pepper Block": 1494,
        "Chili Pepper Plant|FreshlyGrown": 1501,
        "Chili Pepper Plant|Lava|FreshlyGrown": 1509,
        "Code Block": 1510,
        "Toxin Ball Block": 1511,
        "Checkpoint Block|meta|rot4": 1579,
        "Generator Spawn Block (Ore)": 1602,
        "Obby Absorb Death Block": 1609,
        "Bone Block": 1610,
        "Draugr Skeleton Spawner Block": 1616,
        "Empty Spawner Block": 1617,
        "Frost Skeleton Spawner Block": 1620,
        "Snowy Stone Slab|meta|rot4|side": 1627,
        "Draugr Knight Spawner Block": 1628,
        "Packed Snow": 1629,
        "Carved Messy Stone": 1630,
        "Spectral Grass": 1631,
        "Spectral Ladder|meta|rot4": 1673,
        "Diamond Enchanting Table|meta|rot4": 1693,
        "Gold Watermelon Stag Spawner Block": 1717,
        "Salvaging Table|meta|rot4": 1721,
        "Black Chalk Bricks Slab|meta|rot4|side": 1946,
        "_Leaf Bed Head|meta|rot4": 1954,
        "Jungle Tall Grass|Top": 1963,
        Catnip: 1964,
        "Mango Block": 2007,
        "Attached Banana Stem|meta|rot4": 2014,
        "Dangling Vine": 2016,
        "Gorilla Spawner Block": 2017,
        "Wildcat Spawner Block": 2018,
        "Fruity Mango Leaves": 2025,
        "Draugr Huntress Spawner Block": 2026,
        "Magma Golem Spawner Block": 2027,
        "Yellow Portal": 2044,
        "Leather Block": 2045,
        "Horse Spawner Block": 2046,
        "Beetroot Plant|FreshlyGrown": 2084,
        "Autumn Aspen Leaves|TreeCanopy": 2086,
        "Autumn Fern": 2087,
        "Iron Chest|meta|rot4": 2091,
        Crate: 2092,
        "Carrot Seeds": 2094,
        "Potato Seeds": 2096,
        "Beetroot Seeds": 2098,
        "Black Banner|meta|rot4|side": 2482,
        "Draugr Banner|meta|rot4|side": 2506,
        "Spirit Gorilla Spawner Block": 2511,
        "Fertilised Soil": 2512,
        "_Whiskers Bottom Right|meta|rot4": 2624,
        "Hollow Crate": 2625,
        "Draugr Warper Spawner Block": 2626,
        "_Active Radar Dish|meta|rot4": 2662,
        "Lucky Block": 2663,
        "Ultra Lucky Block": 2664,
        "Gold Trophy|meta|rot4": 2668,
        "_Small Red Pod Top": 2677,
        "INTERNAL_MESH_Gold Trophy": 2678,
        "Draugr Reaver Spawner Block": 2680,
        "_Small Black Pod Top": 2719,
        "Rainbow Banner|meta|rot4|side": 2767,
        "Twirlina Cappucina Statue": 2779,
        "Weapon Lucky Block": 2780,
        "Slicing Board": 2787,
        "INTERNAL_MESH_Moonstone Trophy": 2812,
        "Yellow Wave": 2828,
        "Black Directional Arrow|meta|rot4": 2892,
        "_Vending Machine Top|meta|rot4": 2901,
        "Coloured Wheel": 2905,
        UFO: 2906,
        "Black Neon": 3024,
        "Super Jump Pad": 3029,
        "Invisible Sky Light": 3046,
        "Dirt|JungleGrassRoots": 3048,
        "Gun Lucky Block": 3049,
        "Ghost Mystery Block": 3052,
        Football: 3053,
        "Pet Lucky Block": 3054,
        "Slime Trail|meta|rot4": 3070,
        "Overgrown Jungle Grass Block": 3073,
        "Smoke Block": 3074,
        "Pipe|meta|conn|py_pz": 3096,
        "_Auto Miner Body|meta|rot4": 3116,
        "Auto Crafter": 3117,
        "_Rocket Ship Northeast L5": 3137,
        "Rocket Ship S2": 3138,
        "Rocket Ship S3": 3139,
        "Rocket Ship S4": 3140,
        "Rocket Ship S5": 3141,
        "INTERNAL_MESH_Rocket Ship Full": 3142,
        "Extractor Pipe|meta|conn|py_pz": 3164,
        "_Solar Panel NE|meta|rot4": 3181,
        "Wire|meta|conn|py_pz": 3203,
        "Filter Pipe|meta|input|py": 3209,
        "Merger Pipe|meta|output|py": 3215,
        "Auto Harvester": 3216,
        "Stalker Spawner Block": 3217,
        "Lunite Auto Harvester": 3241,
        "Bowling Alley Floor": 3242,
        "Crone Spawner Block": 3243,
        "Slime Spawner Block": 3244,
        "Slime Trail|meta|rot1|Decaying": 3245,
        "Slime Trail|meta|rot2|Decaying": 3246,
        "Slime Trail|meta|rot3|Decaying": 3247,
        "Slime Trail|meta|rot4|Decaying": 3248,
        "Iron Guardian Spawner Block": 3249,
        "Gold Guardian Spawner Block": 3250,
        "Diamond Guardian Spawner Block": 3251,
        "Moonstone Guardian Spawner Block": 3252,
        "Dry Grass Block": 3253,
        "Overgrown Dry Grass Block": 3254,
        "Dead Bush": 3255,
        "Dirt|DryGrassRoots": 3256,
        "Dry Grass Slab|meta|rot4|side": 3262,
        "Lantern|meta|rot4|side": 3267,
        "Lily Pad": 3268,
        "Camel Spawner Block": 3272,
        "_Hump Day Bottom Right|meta|rot4": 3288,
        "Super Potion Lucky Block": 3307,
        "Block Destroyer TNT": 3308,
        "Black Chalk Bricks Stairs|meta|rot4|top": 4028,
        "Toxic Waste Barrel": 4029,
        "Toxic Waste": 4030,
        "Ancient Maple Log": 4031,
        "Evil Lucky Block": 4032,
        "Maple Stairs|meta|rot1|bot|innerLeft": 4033,
        "Black Chalk Bricks Stairs|meta|rot4|top|outerRight": 6912,
        "INTERNAL_MESH_Small Twin Icicle": 6913,
        "INTERNAL_MESH_Medium Icicle": 6914,
        "INTERNAL_MESH_Large Icicle": 6915,
        "INTERNAL_MESH_Large Twin Icicle": 6916,
        "Noticeboard Wall Bottom Right|meta|rot4": 6992,
        "Tiki Terror Spawner Block": 6993,
        "Maple Fence": 6994,
        "_Mango Fence Top|meta|nesw": 7521,
        "Standing Noticeboard|meta|rot4|lrud": 7649,
        "Pure Moonstone Ore": 7654,
        "Maple Fence Gate": 7655,
        "_Mango Fence Gate Top|meta|rot4|open": 7830,
        "Iron Goofy Golem Spawner Block": 7831,
        "Gold Goofy Golem Spawner Block": 7832,
        "Diamond Goofy Golem Spawner Block": 7833,
        "Moonstone Goofy Golem Spawner Block": 7834,
        Cannon: 7835,
        "_Cannon Top Front|meta|rot4": 7858,
        "Crystal Block": 7859,
        "Rope Block": 7860,
        Ash: 7861,
        "Smelter|meta|rot4": 7881,
        "Wire Mill|meta|rot4": 7893,
        "Conveyor Belt|meta|rot4": 7897,
        "Splitter|meta|rot4": 7901,
        "Voltite Ore": 7902,
        "Belt Loader|meta|rot4": 7922,
        "Charge Vault": 7924,
        "Tool Bench": 7927,
        "_Homestead Core Top": 7929,
        "Assembler|meta|rot4|Running": 7965,
        "Tree Cutter|meta|rot4|Running": 7973,
        "Charging Pad": 8011,
        "Crystal Vat|meta|rot4|Running": 8019,
        "Comet Heart": 8023,
        "_Starframe Spire": 8024,
        "Fast Belt|meta|rot4|turnRight": 8040,
        "Recycler|meta|rot4|Running": 8048,
        "Belt Drop": 8050,
        "Crop Harvester|meta|rot4|Running": 8058,
        "Belt Tunnel|meta|rot4|exit": 8066,
        "Pure Copper Ore": 8067,
        "Pure Voltite Ore": 8068,
        Darkstone: 8069,
        "Darkstone Bricks": 8070,
        "Cracked Darkstone Bricks": 8071,
        "Molten Darkstone Bricks": 8072,
        "Engraved Darkstone": 8073,
        "Smooth Darkstone": 8074,
        "Chest|meta|rot4|right": 8082,
        "INTERNAL_MESH_Floor Quarters": 8083,
        "Scorpion Eggs Block": 8084,
        "INTERNAL_MESH_Boss Target": 8085,
        "INTERNAL_MESH_Rune Sigil": 8086,
        "INTERNAL_MESH_Eclipse Dial": 8087,
        "INTERNAL_MESH_Beam Arm": 8088,
        "INTERNAL_MESH_Beam Arm Mirrored": 8089,
        INTERNAL_MESH_Mortar: 8090,
        "Trading Terminal": 8091,
        "Trading Terminal|meta|rot4": 8094,
        "Stone Generator": 8095,
        "Wheat Helper": 8096,
        "Carrot Helper": 8097,
        "Melon Helper": 8098,
        Showcase: 8099,
        "Pine Item Pedestal": 8100,
        "Plum Item Pedestal": 8101,
        "Cedar Item Pedestal": 8102,
        "Aspen Item Pedestal": 8103,
        "Jungle Item Pedestal": 8104,
        "Palm Item Pedestal": 8105,
        "Pear Item Pedestal": 8106,
        "Cherry Item Pedestal": 8107,
        "Spectral Item Pedestal": 8108,
        "Mango Item Pedestal": 8109,
        "Reactor Controller|meta|rot4|Alarm": 8174,
        "Express Belt|meta|rot4|turnRight": 8231,
        "Isotope Comet Heart": 8253,
        "Fluid Pipe|meta|conn|nx_ny_nz_px_py_pz": 8325,
        "Coolant Pipe|meta|conn|nx_ny_nz_px_py_pz": 8397,
        "Fluid Tank|meta|rot1|Fill4": 8401,
        "Fluid Pipe|meta|conn|nx_ny_nz_px_py_pz|Full": 8465,
        "Coolant Pipe|meta|conn|nx_ny_nz_px_py_pz|Full": 8529,
        "Reactor Port|meta|rot1|Formed|Waste": 8534,
        "Collider|meta|rot4|Running": 8538,
        Scaffolding: 8539,
        "Nova Trophy|meta|rot4": 8543,
        "Pure Uranium Ore": 8545,
        "Nova Bomb": 8548,
        "INTERNAL_MESH_Red Directional Arrow": 8558,
        "Placed Lava|Falling": 8574
      },
      [kd, fd] = Object.entries(Pd).at(-1);
    if (kd !== Object.keys(Zd).at(-1)) throw new Error(`You have added new blocks. Please add the following to knownMetadataIds:\n"${kd}": ${fd.id},\nRemember that new blocks must come after existing blocks in blockInitInfo.`);
    Object.entries(Zd).forEach((dd => {
      let [Od, md] = dd;
      if (Pd[Od].id !== md) throw new Error(`${Od} id is not ${md}. This means you added a block _before_ other blocks. Blocks can only be added at the end of blockMetadata.ts`)
    }));
    for (const dO of qd.B) {
      const dd = (0, td.Tb)(dO);
      if (!Pd[dd]) throw new Error(`Missing Mob Spawner Block for mob type ${dO}: please add '...getMobSpawnerBlock("${dO}"),' to the end of blockInitInfo.ts`)
    }
    for (const dO of Hd.h) {
      var Md;
      if (null === (Md = Hd.g[dO]) || void 0 === Md || !Md.supportsFriendship) continue;
      const dd = (0, td.Ob)(dO);
      if (!Pd[dd]) throw new Error(`Missing Mob Painting Block for mob type ${dO}: please add '...getMobPaintingBlock("${dO}"),' to the end of blockInitInfo`)
    }
  },
  5752: (dd, Od, md) => {
    md.d(Od, {
      $: () => mO,
      B: () => qd,
      Db: () => qO,
      F: () => RO,
      Fb: () => jd,
      H: () => bO,
      Hb: () => ld,
      K: () => pO,
      Kb: () => wd,
      M: () => yd,
      O: () => Hd,
      Ob: () => HO,
      Pb: () => Md,
      Q: () => Id,
      S: () => pd,
      Sb: () => Bd,
      U: () => Cd,
      W: () => Pd,
      Wb: () => gd,
      X: () => gO,
      Xb: () => ud,
      Yb: () => sd,
      ac: () => YO,
      b: () => FO,
      bb: () => Nd,
      c: () => Ad,
      cb: () => zd,
      cc: () => oO,
      d: () => KO,
      db: () => kd,
      dc: () => NO,
      fb: () => Zd,
      g: () => tO,
      gc: () => Jd,
      i: () => vO,
      jb: () => TO,
      lb: () => ed,
      m: () => QO,
      pb: () => cd,
      q: () => Ud,
      t: () => xd,
      tb: () => od,
      x: () => OO,
      xb: () => wO,
      z: () => Vd,
      zb: () => fd
    });
    var Wd = md(5737),
      Fd = md(5756),
      Rd = md(5759),
      Xd = md(5774),
      Kd = md(5778),
      hd = md(5781),
      vd = md(405),
      Qd = md(5769),
      td = md(699);

    function od(dd, Od, md, Wd) {
      const Fd = {
          ...Od
        },
        Rd = {};
      for (let Kd = 0; Kd < md.length; Kd++) {
        var Xd;
        Object.assign(Rd, {
          [`${dd}_stage${Kd+1}`]: Object.assign({
            ...Fd
          }, {
            textureInfo: md[Kd]
          }, null !== (Xd = null === Wd || void 0 === Wd ? void 0 : Wd[Kd + 1]) && void 0 !== Xd ? Xd : {})
        })
      }
      return Rd
    }

    function Nd(dd, Od) {
      console.assert("meta|rot1|empty" === Od.rootMetaDesc.split("|").slice(1).join("|"), "mailbox root block .rootMetaDesc must be |meta|rot1|empty");
      const md = {
        ...Od
      };
      delete md.rootMetaDesc;
      const Wd = {
          ...md
        },
        Fd = {
          ...md
        },
        Rd = {
          ...md
        };
      Object.assign(Wd, {
        texturePerSide: [0, 1, 1, 1, 1, 1]
      }), Object.assign(Fd, {
        texturePerSide: [1, 1, 1, 1, 1, 0]
      }), Object.assign(Rd, {
        texturePerSide: [1, 0, 1, 1, 1, 1]
      });
      const Xd = ["mailbox_front_full", "mailbox_side"];
      return {
        [dd]: Od,
        [`${dd}|meta|rot2|empty`]: {
          ...Wd
        },
        [`${dd}|meta|rot3|empty`]: {
          ...Fd
        },
        [`${dd}|meta|rot4|empty`]: {
          ...Rd
        },
        [`${dd}|meta|rot1|full`]: Object.assign({
          ...md
        }, {
          textureInfo: Xd
        }),
        [`${dd}|meta|rot2|full`]: Object.assign({
          ...Wd
        }, {
          textureInfo: Xd
        }),
        [`${dd}|meta|rot3|full`]: Object.assign({
          ...Fd
        }, {
          textureInfo: Xd
        }),
        [`${dd}|meta|rot4|full`]: Object.assign({
          ...Rd
        }, {
          textureInfo: Xd
        })
      }
    }

    function qd(dd, Od) {
      console.assert("meta|rot1|books6" === Od.rootMetaDesc.split("|").slice(1).join("|"), "bookshelf root block .rootMetaDesc must be |meta|rot1|books6");
      const md = {
        ...Od
      };
      delete md.rootMetaDesc;
      const Wd = {
          ...md
        },
        Fd = {
          ...md
        },
        Rd = {
          ...md
        },
        Xd = {
          0: ["bookshelf_empty", "planks_maple"],
          1: ["bookshelf_1", "planks_maple"],
          2: ["bookshelf_2", "planks_maple"],
          3: ["bookshelf_3", "planks_maple"],
          4: ["bookshelf_4", "planks_maple"],
          5: ["bookshelf_5", "planks_maple"]
        };
      Object.assign(Wd, {
        texturePerSide: [0, 0, 1, 1, 1, 1]
      }), Object.assign(Fd, {
        texturePerSide: [1, 1, 1, 1, 0, 0]
      }), Object.assign(Rd, {
        texturePerSide: [0, 0, 1, 1, 1, 1]
      });
      const Kd = {
        [dd]: Od,
        [`${dd}|meta|rot2|books6`]: {
          ...Wd
        },
        [`${dd}|meta|rot3|books6`]: {
          ...Fd
        },
        [`${dd}|meta|rot4|books6`]: {
          ...Rd
        },
        [`Empty ${dd}`]: Object.assign({
          ...md
        }, {
          textureInfo: Xd[0],
          description: {
            translationKey: "item:emptyBookshelfDescription"
          },
          rootMetaDesc: `Empty ${dd}|meta|rot1|books0`
        }),
        [`Empty ${dd}|meta|rot2|books0`]: Object.assign({
          ...Wd
        }, {
          textureInfo: Xd[0]
        }),
        [`Empty ${dd}|meta|rot3|books0`]: Object.assign({
          ...Fd
        }, {
          textureInfo: Xd[0]
        }),
        [`Empty ${dd}|meta|rot4|books0`]: Object.assign({
          ...Rd
        }, {
          textureInfo: Xd[0]
        })
      };
      for (let hd = 1; hd <= 5; hd++) Object.assign(Kd, {
        [`${dd}|meta|rot1|books${hd}`]: Object.assign({
          ...md
        }, {
          textureInfo: Xd[hd]
        })
      }), Object.assign(Kd, {
        [`${dd}|meta|rot2|books${hd}`]: Object.assign({
          ...Wd
        }, {
          textureInfo: Xd[hd]
        })
      }), Object.assign(Kd, {
        [`${dd}|meta|rot3|books${hd}`]: Object.assign({
          ...Fd
        }, {
          textureInfo: Xd[hd]
        })
      }), Object.assign(Kd, {
        [`${dd}|meta|rot4|books${hd}`]: Object.assign({
          ...Rd
        }, {
          textureInfo: Xd[hd]
        })
      });
      return Kd
    }

    function Hd() {
      const dd = {};
      for (const Od of vd.zc) {
        const md = `${Od.toLowerCase().split(" ").join("_")}_concrete`;
        Object.assign(dd, wd(`${Od} Concrete Slab`, {
          displayName: {
            translationKey: `item:${(0,vd.te)(Od)}ConcreteSlab`
          },
          ttb: 1080,
          textureInfo: md,
          model: "Slab",
          harvestType: "rock",
          slabFullBlock: `${Od} Concrete`,
          rootMetaDesc: `${Od} Concrete Slab|meta|rot1|bot`
        }))
      }
      return dd
    }

    function yd(dd, Od, md, Wd, Fd, Rd) {
      const Xd = {};
      for (const Kd of vd.zc) {
        const hd = dd.replace("$colour$", Kd);
        let Qd;
        Qd = Array.isArray(md) ? {
          textureInfo: md.map((dd => dd.replace("$colour$", (0, vd.xe)(Kd)))),
          texturePerSide: [0, 0, 1, 1, 0, 0]
        } : {
          textureInfo: md.replace("$colour$", (0, vd.xe)(Kd))
        }, Object.assign(Xd, wd(hd, {
          displayName: {
            translationKey: Wd,
            params: {
              colour: `$t(colour:${(0,vd.xe)(Kd)})`
            }
          },
          description: {
            translationKey: Fd,
            params: {
              colour: `$t(colour:${(0,vd.xe)(Kd)})`
            }
          },
          model: "Slab",
          slabFullBlock: Od.replace("$colour$", Kd),
          ...Qd,
          rootMetaDesc: `${hd}|meta|rot1|bot`,
          ...Rd
        }))
      }
      return Xd
    }
    const bd = {
        bot: (0, Wd.e)([
          [
            [0, 0, 0],
            [8, 4, 8]
          ]
        ]),
        top: (0, Wd.e)([
          [
            [0, 4, 0],
            [8, 8, 8]
          ]
        ]),
        side1: (0, Wd.e)([
          [
            [0, 0, 0],
            [8, 8, 4]
          ]
        ]),
        side2: (0, Wd.e)([
          [
            [0, 0, 0],
            [4, 8, 8]
          ]
        ]),
        side3: (0, Wd.e)([
          [
            [0, 0, 4],
            [8, 8, 8]
          ]
        ]),
        side4: (0, Wd.e)([
          [
            [4, 0, 0],
            [8, 8, 8]
          ]
        ])
      },
      Td = [(0, Wd.e)([
        [
          [0, 0, 7],
          [8, 8, 8]
        ]
      ]), (0, Wd.e)([
        [
          [7, 0, 0],
          [8, 8, 8]
        ]
      ]), (0, Wd.e)([
        [
          [0, 0, 0],
          [8, 8, 1]
        ]
      ]), (0, Wd.e)([
        [
          [0, 0, 0],
          [1, 8, 8]
        ]
      ])];

    function pd(dd, Od) {
      return Td[(dd - 1 + Number(Od)) % 4]
    }
    const Yd = (0, Wd.e)([
      [
        [0, 7, 0],
        [8, 8, 8]
      ]
    ]);

    function gd(dd, Od) {
      return Od ? Td[(dd + 1) % 4] : Yd
    }

    function wd(dd, Od) {
      console.assert("meta|rot1|bot" === Od.rootMetaDesc.split("|").slice(1).join("|"), "slab root block .rootMetaDesc must be |meta|rot1|bot");
      const md = {
        ...Od
      };
      return delete md.rootMetaDesc, {
        [dd]: {
          ...Od,
          Sy: bd.bot
        },
        [`${dd}|meta|rot1|top`]: {
          ...md,
          Sy: bd.top
        },
        [`${dd}|meta|rot1|side`]: {
          ...md,
          Sy: bd.side1
        },
        [`${dd}|meta|rot2|side`]: {
          ...md,
          Sy: bd.side2
        },
        [`${dd}|meta|rot3|side`]: {
          ...md,
          Sy: bd.side3
        },
        [`${dd}|meta|rot4|side`]: {
          ...md,
          Sy: bd.side4
        }
      }
    }

    function Ed(dd, Od) {
      const md = {
          ...Od,
          model: "Stairs"
        },
        Wd = {};
      for (const Rd of ["bot", "top"])
        for (let Od = 1; Od <= 4; Od++) {
          const Xd = Fd.i[Rd][Od - 1];
          1 === Od && "bot" === Rd ? Wd[dd] = {
            ...md,
            rootMetaDesc: `${dd}|meta|rot1|bot`,
            Sy: Xd
          } : Wd[`${dd}|meta|rot${Od}|${Rd}`] = {
            ...md,
            Sy: Xd
          }
        }
      return Wd
    }

    function Jd(dd, Od) {
      return {
        name: dd,
        data: Od
      }
    }

    function Ud(dd, Od) {
      return vd.zc.map((md => Jd(`${md} ${dd} Stairs`, Od(md))))
    }

    function xd(dd) {
      const Od = {};
      for (const {
          name: md,
          data: Wd
        }
        of dd) Object.assign(Od, Ed(md, Wd));
      return Od
    }

    function Bd(dd) {
      const Od = {};
      for (const {
          name: md,
          data: Wd
        }
        of dd) {
        const dd = {
          ...Wd,
          model: "Stairs"
        };
        for (const Wd of ["bot", "top"])
          for (const Rd of Qd.p)
            for (let Xd = 1; Xd <= 4; Xd++) Od[`${md}|meta|rot${Xd}|${Wd}|${Rd}`] = {
              ...dd,
              Sy: Fd.j[Wd][Rd][Xd - 1]
            }
      }
      return Od
    }

    function Sd(dd, Od) {
      const md = `_${dd} Top`,
        Wd = {};
      for (const Fd of [0, Xd.k])
        for (const Rd of Xd.g) Wd[(0, Xd.m)(dd, Rd | Fd)] = {
          ...Od,
          model: "fence",
          Sy: Xd.D[Rd],
          attachedTop: (0, Xd.m)(md, Rd)
        };
      for (const Fd of Xd.g) Wd[(0, Xd.m)(md, Fd)] = {
        ...Od,
        model: "fence",
        Sy: Xd.G[Fd],
        canBePlacedOver: !0,
        drops: null
      };
      return Wd
    }

    function sd(dd) {
      const Od = {};
      for (const md of dd) {
        const dd = `${md} Fence`;
        Object.assign(Od, Sd(dd, {
          displayName: {
            translationKey: `item:${(0,vd.te)(dd)}`
          },
          ttb: 1800,
          textureInfo: `planks_${md.toLowerCase()}`,
          itemTexture: `${md.toLowerCase()}_fence`,
          harvestType: "wood"
        }))
      }
      return Od
    }

    function ud(dd) {
      const Od = {};
      for (const md of dd) {
        const dd = `${md} Fence Gate`,
          Wd = `_${dd} Top`,
          Fd = {
            displayName: {
              translationKey: `item:${(0,vd.te)(dd)}`
            },
            ttb: 1800,
            textureInfo: `planks_${md.toLowerCase()}`,
            itemTexture: `${md.toLowerCase()}_fence_gate`,
            harvestType: "wood",
            model: Kd.g
          };
        for (const {
            rot: md,
            open: Rd
          }
          of Kd.h) Od[(0, Kd.i)(dd, md, Rd)] = {
          ...Fd,
          ...1 !== md || Rd ? {} : {
            rootMetaDesc: `${dd}|meta|rot1|closed`
          },
          Sy: (0, Kd.r)(!1, md, Rd),
          attachedTop: (0, Kd.i)(Wd, md, Rd)
        };
        for (const {
            rot: md,
            open: Rd
          }
          of Kd.h) Od[(0, Kd.i)(Wd, md, Rd)] = {
          ...Fd,
          ...1 !== md || Rd ? {} : {
            rootMetaDesc: `${Wd}|meta|rot1|closed`
          },
          Sy: (0, Kd.r)(!0, md, Rd),
          canBePlacedOver: !0,
          drops: null
        }
      }
      return Od
    }

    function Vd(dd, Od) {
      console.assert("meta|rot1|bot" === Od.rootMetaDesc.split("|").slice(1).join("|"), "banner root block .rootMetaDesc must be |meta|rot1|bot");
      const md = {
        ...Od
      };
      delete md.rootMetaDesc;
      const Wd = {
          ...md,
          blockModel: `_${dd} Hanging`
        },
        Fd = `_${dd} Flag`,
        Rd = {
          ...Od,
          drops: dd,
          rootMetaDesc: `${Fd}|meta|rot1|top`,
          blockModel: `${Fd} Hanging`
        },
        Xd = {
          ...Rd
        };
      delete Xd.rootMetaDesc;
      const Kd = {
        ...Xd,
        blockModel: Fd
      };
      return {
        [dd]: Od,
        [`${dd}|meta|rot2|bot`]: {
          ...md
        },
        [`${dd}|meta|rot3|bot`]: {
          ...md
        },
        [`${dd}|meta|rot4|bot`]: {
          ...md
        },
        [Fd]: Rd,
        [`${Fd}|meta|rot2|top`]: {
          ...Xd
        },
        [`${Fd}|meta|rot3|top`]: {
          ...Xd
        },
        [`${Fd}|meta|rot4|top`]: {
          ...Xd
        },
        [`${Fd}|meta|rot1|side`]: {
          ...Xd
        },
        [`${Fd}|meta|rot2|side`]: {
          ...Xd
        },
        [`${Fd}|meta|rot3|side`]: {
          ...Xd
        },
        [`${Fd}|meta|rot4|side`]: {
          ...Xd
        },
        [`${Fd}|meta|rot1|bot`]: {
          ...Kd
        },
        [`${Fd}|meta|rot2|bot`]: {
          ...Kd
        },
        [`${Fd}|meta|rot3|bot`]: {
          ...Kd
        },
        [`${Fd}|meta|rot4|bot`]: {
          ...Kd
        },
        [`${dd}|meta|rot1|top`]: {
          ...Wd
        },
        [`${dd}|meta|rot2|top`]: {
          ...Wd
        },
        [`${dd}|meta|rot3|top`]: {
          ...Wd
        },
        [`${dd}|meta|rot4|top`]: {
          ...Wd
        },
        [`${dd}|meta|rot1|side`]: {
          ...Wd
        },
        [`${dd}|meta|rot2|side`]: {
          ...Wd
        },
        [`${dd}|meta|rot3|side`]: {
          ...Wd
        },
        [`${dd}|meta|rot4|side`]: {
          ...Wd
        }
      }
    }
    const Ad = ["nx", "ny", "nz", "px", "py", "pz"];

    function rd(dd, Od) {
      const [md, Wd] = dd < Od ? [dd, Od] : [Od, dd];
      return `${md}_${Wd}`
    }

    function Gd(dd) {
      return dd[1]
    }

    function nd(dd, Od, md) {
      return Gd(Od) === Gd(md) ? `${dd}_straight_${Gd(Od)}` : `${dd}_elbow_${rd(Od,md)}`
    }

    function Ld(dd, Od, md, Wd, Fd) {
      const Rd = `meta|${Wd}|none`;
      if (Fd.rootMetaDesc.split("|").slice(1).join("|") !== Rd) throw new Error(`${dd} root hub pipe .rootMetaDesc must be |${Rd}, got "${Fd.rootMetaDesc}"`);
      if (void 0 !== Fd.blockModel) throw new Error(`${dd} root hub pipe data must NOT set blockModel - the builder fills it per-variant`);
      const Xd = dd => {
          const Od = {
            ...Fd,
            blockModel: dd
          };
          return delete Od.rootMetaDesc, Od
        },
        Kd = {
          [dd]: {
            ...Fd,
            blockModel: `${Od}_${Wd}_${md}`
          }
        };
      for (const hd of Ad) hd !== md && (Kd[`${dd}|meta|${Wd}|${hd}`] = Xd(`${Od}_${Wd}_${hd}`));
      return Kd
    }

    function Pd(dd, Od, md, Wd) {
      return Ld(dd, Od, md, "input", Wd)
    }

    function zd(dd, Od, md, Wd) {
      return Ld(dd, Od, md, "output", Wd)
    }

    function cd(dd, Od, md) {
      console.assert("meta|conn|none" === md.rootMetaDesc.split("|").slice(1).join("|"), `${dd} root pipe .rootMetaDesc must be |meta|conn|none`), console.assert(void 0 === md.blockModel, `${dd} root pipe data must NOT set blockModel - the builder fills it per-variant`);
      const Wd = dd => {
          const Od = {
            ...md,
            blockModel: dd
          };
          return delete Od.rootMetaDesc, Od
        },
        Fd = {
          [dd]: {
            ...md,
            blockModel: `${Od}_isolated`
          }
        };
      for (const Rd of Ad) Fd[`${dd}|meta|conn|${Rd}`] = Wd(`${Od}_end_${Rd}`);
      for (let Rd = 0; Rd < Ad.length; Rd++)
        for (let md = Rd + 1; md < Ad.length; md++) {
          const [Xd, Kd] = [Ad[Rd], Ad[md]];
          Fd[`${dd}|meta|conn|${rd(Xd,Kd)}`] = Wd(nd(Od, Xd, Kd))
        }
      return Fd
    }

    function jd(dd, Od) {
      console.assert("meta|rot1" === Od.rootMetaDesc.split("|").slice(1).join("|"), `${dd} root block .rootMetaDesc must be |meta|rot1`);
      const md = {
        ...Od
      };
      return delete md.rootMetaDesc, {
        [dd]: Od,
        [`${dd}|meta|rot2`]: {
          ...md
        },
        [`${dd}|meta|rot3`]: {
          ...md
        },
        [`${dd}|meta|rot4`]: {
          ...md
        }
      }
    }
    const Dd = {
      ttb: 1800,
      harvestType: "wood",
      solid: !0,
      model: "rotatable",
      blockModelItem: !0,
      modelScale: 8,
      heldItemScale: 4,
      customModelInfo: {
        yOffset: -.5
      }
    };

    function ed() {
      const dd = {},
        Od = ["", "Top", "Bottom", "Left", "Right", "Top Left", "Top Right", "Bottom Left", "Bottom Right"];
      for (const md of ["Standing", "Wall"])
        for (const Wd of "Standing" === md ? [...Od, "Leg"] : Od) {
          const Od = `Noticeboard ${md}${Wd?` ${Wd}`:""}`;
          Object.assign(dd, jd(Od, {
            ...Dd,
            displayName: {
              translationKey: `item:${(0,vd.te)(Od)}`
            },
            rootMetaDesc: `${Od}|meta|rot1`,
            blockModel: (0, vd.xe)(Od),
            itemTexture: (0, vd.xe)(Od)
          }))
        }
      return dd
    }

    function Id() {
      const dd = {};
      for (const {
          root: Od,
          blockModelPrefix: md
        }
        of Rd.n) {
        const Wd = {
          ...Dd,
          displayName: {
            translationKey: `item:${(0,vd.te)(Rd.s)}`
          },
          drops: Rd.s,
          itemTexture: "noticeboard",
          customModelInfo: {
            yOffset: -.5,
            yRotOffset: Math.PI
          }
        };
        for (let Fd = 1; Fd <= 4; Fd++)
          for (const Xd of Rd.d) {
            const Kd = (0, Rd.g)(Od, Fd, Xd),
              hd = `${md}${Rd.x[Xd]}`;
            dd[Kd] = Kd === Od ? {
              ...Wd,
              rootMetaDesc: `${Od}|meta|rot1`,
              blockModel: hd
            } : {
              ...Wd,
              blockModel: hd
            }
          }
      }
      return dd
    }

    function ld(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [
        [1, 1, 2, 2, 0, 1],
        [0, 1, 2, 2, 1, 1],
        [1, 1, 2, 2, 1, 0],
        [1, 0, 2, 2, 1, 1]
      ];
      console.assert("meta|rot1" === Od.rootMetaDesc.split("|").slice(1).join("|"), "threeTexRotBlock root block .rootMetaDesc must be |meta|rot1");
      const Wd = {
        ...Od
      };
      return delete Wd.rootMetaDesc, {
        [dd]: {
          ...Od,
          texturePerSide: md[0]
        },
        [`${dd}|meta|rot2`]: {
          ...Wd,
          texturePerSide: md[1]
        },
        [`${dd}|meta|rot3`]: {
          ...Wd,
          texturePerSide: md[2]
        },
        [`${dd}|meta|rot4`]: {
          ...Wd,
          texturePerSide: md[3]
        }
      }
    }

    function Cd(dd, Od) {
      const md = ["chest_double_front_lo", "chest_double_front_hi", "chest_side", "chest_double_top_1_lo", "chest_double_top_1_hi", "chest_double_top_2_lo", "chest_double_top_2_hi", "chest_double_back_lo", "chest_double_back_hi"],
        Wd = {
          left: [
            [2, 2, 6, 5, 0, 8],
            [0, 8, 4, 4, 2, 2],
            [2, 2, 5, 6, 8, 0],
            [8, 0, 3, 3, 2, 2]
          ],
          right: [
            [2, 2, 5, 6, 1, 7],
            [1, 7, 3, 3, 2, 2],
            [2, 2, 6, 5, 7, 1],
            [7, 1, 4, 4, 2, 2]
          ]
        },
        Fd = {};
      for (const Rd of hd.d)
        for (let Xd = 1; Xd <= 4; Xd++) Fd[(0, hd.b)(dd, Xd, Rd)] = {
          ...Od,
          textureInfo: md,
          texturePerSide: Wd[Rd][Xd - 1]
        };
      return Fd
    }

    function Zd(dd) {
      const Od = (0, vd.Tb)(dd),
        md = td.F.includes(dd) || td.g.includes(dd) ? "passive" : td.G.has(dd) ? "hostile" : "neutral";
      return {
        [Od]: {
          displayName: {
            translationKey: `item:${(0,vd.te)(dd)}MobSpawnerBlock`
          },
          description: {
            translationKey: `item:${(0,vd.te)(dd)}MobSpawnerBlockDescription`
          },
          itemTexture: `${(0,vd.xe)(dd)}_spawner_block_icon`,
          ttb: 5e3,
          textureInfo: [`mob_spawner_${md}_block_side`, "mob_spawner_block_top"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          transTex: !0,
          harvestType: "rock",
          drops: null,
          specialToolDrop: {
            tool: "Moonstone Pickaxe",
            drops: Od
          },
          particlesIgnoreBlack: !0,
          onMinedAura: 75,
          twoDBlockItem: !0
        }
      }
    }

    function kd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
      const md = (0, vd.Ob)(dd),
        Wd = `${(0,vd.xe)(dd)}_painting`,
        Fd = dd.replaceAll(" ", "_") + " Painting";
      return {
        ...jd(`_${md} Top Left`, {
          ttb: 240,
          itemTexture: Wd,
          model: "rotatable",
          harvestType: "wood",
          rootMetaDesc: `_${md} Top Left|meta|rot1`,
          particlesIgnoreBlack: !0,
          solid: !1,
          modelScale: Od,
          blockModel: `_${Fd} Top Left`,
          heldItemGlb: Fd,
          drops: md
        }),
        ...jd(`_${md} Top Right`, {
          ttb: 240,
          itemTexture: Wd,
          model: "rotatable",
          harvestType: "wood",
          rootMetaDesc: `_${md} Top Right|meta|rot1`,
          particlesIgnoreBlack: !0,
          solid: !1,
          modelScale: Od,
          blockModel: `_${Fd} Top Right`,
          heldItemGlb: Fd,
          drops: md
        }),
        ...jd(`${md}`, {
          ttb: 240,
          itemTexture: Wd,
          model: "rotatable",
          harvestType: "wood",
          rootMetaDesc: `${md}|meta|rot1`,
          particlesIgnoreBlack: !0,
          solid: !1,
          modelScale: Od,
          blockModel: `_${Fd} Bottom Left`,
          heldItemGlb: Fd,
          drops: md
        }),
        ...jd(`_${md} Bottom Right`, {
          ttb: 240,
          itemTexture: Wd,
          model: "rotatable",
          harvestType: "wood",
          rootMetaDesc: `_${md} Bottom Right|meta|rot1`,
          particlesIgnoreBlack: !0,
          solid: !1,
          modelScale: Od,
          blockModel: `_${Fd} Bottom Right`,
          heldItemGlb: Fd,
          drops: md
        })
      }
    }

    function fd(dd, Od, md, Wd, Fd) {
      const Rd = `_${dd} Back`,
        Xd = `_${dd} Dish`,
        Kd = 3e3,
        hd = "rock",
        Qd = "Radar";
      return {
        ...ld(dd, {
          displayName: {
            translationKey: `item:${(0,vd.te)(dd)}`
          },
          ttb: Kd,
          itemTexture: md,
          textureInfo: "string" === typeof Fd ? [Wd, Fd, "radar_bottom"] : Fd.textureInfo,
          harvestType: hd,
          drops: Qd,
          twoDBlockItem: !0,
          rootMetaDesc: `${dd}|meta|rot1`
        }, "object" === typeof Fd ? Fd.texturesPerSide : [
          [0, 0, 1, 2, 0, 0],
          [0, 0, 1, 2, 0, 0],
          [0, 0, 1, 2, 0, 0],
          [0, 0, 1, 2, 0, 0]
        ]),
        ...jd(Rd, {
          ttb: Kd,
          textureInfo: [Wd, "radar_bottom"],
          texturePerSide: [0, 0, 1, 1, 0, 0],
          harvestType: hd,
          drops: Qd,
          rootMetaDesc: `${Rd}|meta|rot1`
        }),
        ...jd(Xd, {
          ttb: Kd,
          model: "rotatable",
          harvestType: hd,
          drops: Qd,
          rootMetaDesc: `${Xd}|meta|rot1`,
          particlesIgnoreBlack: !0,
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          },
          solid: !1,
          blockModel: Od
        })
      }
    }

    function Md() {
      const dd = "Solar Panel",
        Od = [dd, "_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"],
        md = {
          ttb: 2400,
          textureInfo: ["solar_panel_side", "solar_panel_top", "solar_panel_bottom"],
          texturePerSide: [0, 0, 1, 2, 0, 0],
          harvestType: "rock"
        },
        Wd = {};
      for (const Fd of Od) {
        const Od = Fd === dd ? {
          displayName: {
            translationKey: "item:solarPanel"
          },
          description: {
            translationKey: "item:solarPanelDescription"
          },
          itemTexture: "solar_panel"
        } : {
          drops: dd
        };
        Object.assign(Wd, jd(Fd, {
          ...md,
          rootMetaDesc: `${Fd}|meta|rot1`,
          ...Od
        }))
      }
      return Wd
    }

    function dO(dd) {
      const {
        root: Od,
        cells: md,
        displayNameKey: Wd,
        descriptionKey: Fd,
        itemTexture: Rd
      } = dd, Xd = {
        ttb: 3600,
        model: "rotatable",
        modelScale: 8,
        harvestType: "rock",
        particlesIgnoreBlack: !0,
        altActionable: !0
      }, Kd = {};
      for (const [hd, vd] of md) {
        const dd = hd === Od ? {
          displayName: {
            translationKey: Wd
          },
          description: {
            translationKey: Fd
          },
          itemTexture: Rd
        } : {
          drops: Od
        };
        Object.assign(Kd, jd(hd, {
          ...Xd,
          blockModel: vd,
          rootMetaDesc: `${hd}|meta|rot1`,
          ...dd
        }))
      }
      return Kd
    }

    function OO() {
      return dO({
        root: "Auto Miner",
        cells: [
          ["Auto Miner", "auto_miner_foot_back"],
          ["_Auto Miner Drill Front", "auto_miner_drill_front"],
          ["_Auto Miner Drill Back", "auto_miner_drill_back"],
          ["_Auto Miner Foot Front", "auto_miner_foot_front"],
          ["_Auto Miner Body", "auto_miner_body"]
        ],
        displayNameKey: "item:autoMiner",
        descriptionKey: "item:autoMinerDescription",
        itemTexture: "auto_miner"
      })
    }

    function mO() {
      return dO({
        root: "Lunite Auto Miner",
        cells: [
          ["Lunite Auto Miner", "auto_miner_lunite_foot_back"],
          ["_Lunite Auto Miner Drill Front", "auto_miner_lunite_drill_front"],
          ["_Lunite Auto Miner Drill Back", "auto_miner_lunite_drill_back"],
          ["_Lunite Auto Miner Foot Front", "auto_miner_lunite_foot_front"],
          ["_Lunite Auto Miner Body", "auto_miner_lunite_body"]
        ],
        displayNameKey: "item:luniteAutoMiner",
        descriptionKey: "item:luniteAutoMinerDescription",
        itemTexture: "autominer_lunite"
      })
    }
    const WO = "Cannon",
      FO = [{
        block: WO,
        blockModel: "cannon_bottom_back",
        x: 0,
        y: 0,
        z: 0
      }, {
        block: "_Cannon Bottom Front",
        blockModel: "cannon_bottom_front",
        x: 0,
        y: 0,
        z: -1
      }, {
        block: "_Cannon Barrel Back",
        blockModel: "cannon_barrel_back",
        x: 0,
        y: 1,
        z: -2
      }, {
        block: "_Cannon Barrel Front",
        blockModel: "cannon_barrel_front",
        x: 0,
        y: 1,
        z: -3
      }, {
        block: "_Cannon Top Back",
        blockModel: "cannon_top_back",
        x: 0,
        y: 1,
        z: 0
      }, {
        block: "_Cannon Top Front",
        blockModel: "cannon_top_front",
        x: 0,
        y: 1,
        z: -1
      }];

    function RO() {
      const dd = {
          ttb: 3600,
          model: "rotatable",
          modelScale: 8,
          harvestType: "rock",
          particlesIgnoreBlack: !0,
          customModelInfo: {
            yOffset: -.5
          }
        },
        Od = {};
      for (const {
          block: md,
          blockModel: Wd
        }
        of FO) {
        const Fd = md === WO ? {
          displayName: {
            translationKey: "item:cannon"
          },
          blockModelItem: !0,
          heldItemScale: 4
        } : {
          drops: WO
        };
        Object.assign(Od, jd(md, {
          ...dd,
          blockModel: Wd,
          rootMetaDesc: `${md}|meta|rot1`,
          ...Fd
        }))
      }
      return Od
    }
    const XO = "Rocket Ship",
      KO = ["southwest", "southeast", "northwest", "northeast"],
      hO = 5,
      vO = hO,
      QO = Array.from({
        length: hO
      }, ((dd, Od) => Od + 1)),
      tO = {
        southwest: {
          x: 0,
          z: 0
        },
        southeast: {
          x: 1,
          z: 0
        },
        northwest: {
          x: 0,
          z: -1
        },
        northeast: {
          x: 1,
          z: -1
        }
      };

    function oO(dd, Od) {
      const md = dd[0].toUpperCase() + dd.slice(1);
      return `_${XO} ${md} L${Od}`
    }

    function NO(dd) {
      return 1 === dd ? XO : `${XO} S${dd}`
    }

    function qO() {
      const dd = {
          ttb: 3600,
          model: "CustomModel",
          modelScale: 8,
          harvestType: "rock",
          particlesIgnoreBlack: !0,
          altActionable: !0
        },
        Od = Od => ({
          ...dd,
          blockModel: "rocket_southwest_1",
          displayName: {
            translationKey: 1 === Od ? "item:rocketShip" : `item:rocketShipS${Od}`
          },
          description: {
            translationKey: "item:rocketShipDescription"
          },
          itemTexture: "rocket",
          drops: null
        }),
        md = {
          [XO]: Od(1)
        };
      for (const Wd of KO)
        for (let Od = 1; Od <= hO; Od++) "southwest" === Wd && 1 === Od || (md[oO(Wd, Od)] = {
          ...dd,
          blockModel: `rocket_${Wd}_${Od}`,
          drops: null
        });
      for (let Wd = 2; Wd <= vO; Wd++) md[NO(Wd)] = {
        ...Od(Wd),
        heldItemGlb: XO
      };
      return md["INTERNAL_MESH_Rocket Ship Full"] = {
        ttb: 3600,
        harvestType: "rock",
        blockModel: "rocket_full",
        blockModelItem: !0,
        twoDBlockItem: !0,
        modelScale: 8,
        drops: null
      }, md
    }

    function HO(dd) {
      const Od = {
        displayName: {
          translationKey: `item:small${dd.replaceAll(" ","")}Pod`
        },
        ttb: 300,
        itemTexture: `small_pod_${(0,vd.xe)(dd)}_icon`,
        model: "CustomModel",
        harvestType: "rock",
        solid: !1,
        modelScale: 8,
        customModelInfo: {
          yOffset: -.5
        },
        particlesIgnoreBlack: !0
      };
      return {
        [`Small ${dd} Pod`]: {
          ...Od,
          blockModel: `Small ${dd} Pod`
        },
        [`_Small ${dd} Pod Mid`]: {
          ...Od,
          blockModel: `_Small ${dd} Pod Mid`
        },
        [`_Small ${dd} Pod Top`]: {
          ...Od,
          blockModel: `_Small ${dd} Pod Top`
        }
      }
    }

    function yO(dd, Od) {
      const md = {};
      for (const Wd in dd) {
        const Fd = dd[Wd];
        md[Wd] = "function" === typeof Fd ? Fd(Od) : Fd
      }
      return md
    }

    function bO(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : vd.zc;
      const Wd = {};
      for (const Fd of md) Wd[dd(Fd)] = yO(Od, Fd);
      return Wd
    }

    function TO(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      console.assert("meta|rot1|bot" === Od.rootMetaDesc.split("|").slice(1).join("|"), `${dd} root block .rootMetaDesc must be |meta|rot1|bot`), console.assert("string" === typeof Od.blockModel, `${dd} root block .blockModel must be a string`);
      const Wd = {
        ...Od
      };
      delete Wd.rootMetaDesc;
      const {
        wallBlockModel: Fd,
        yRotOffset: Rd,
        xRotOffset: Xd,
        noCeilingVariant: Kd
      } = md, hd = {
        ...Wd,
        ...Fd ? {
          blockModel: Fd
        } : {},
        model: "rotatable",
        customModelInfo: {
          ...Wd.customModelInfo,
          yRotOffset: Math.PI + (null !== Rd && void 0 !== Rd ? Rd : 0),
          ...void 0 !== Xd ? {
            xRotOffset: Xd
          } : {}
        }
      };
      return {
        [dd]: Od,
        ...Kd ? {} : {
          [`${dd}|meta|rot1|top`]: {
            ...Wd
          }
        },
        [`${dd}|meta|rot1|side`]: {
          ...hd
        },
        [`${dd}|meta|rot2|side`]: {
          ...hd
        },
        [`${dd}|meta|rot3|side`]: {
          ...hd
        },
        [`${dd}|meta|rot4|side`]: {
          ...hd
        }
      }
    }

    function pO(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : vd.zc;
      const Fd = {};
      for (const Rd of Wd) Object.assign(Fd, TO(dd(Rd), yO(Od, Rd), {
        wallBlockModel: md(Rd)
      }));
      return Fd
    }
    const YO = {
      "Landing Pad": 0,
      "Weak Jump Pad": 13,
      "Jump Pad": 20,
      "Strong Jump Pad": 25,
      "Super Jump Pad": 31
    };

    function gO() {
      const dd = {
        ttb: 300,
        model: "CustomModel",
        harvestType: "cuttable",
        solid: !1,
        modelScale: 8,
        customModelInfo: {
          yOffset: -.5
        },
        particlesIgnoreBlack: !0,
        canBePlacedOver: !1
      };
      return {
        "Landing Pad": {
          ...dd,
          displayName: {
            translationKey: "item:landingPad"
          },
          description: {
            translationKey: "item:landingPadDescription"
          },
          itemTexture: "landing_pad",
          blockModel: "landing_pad"
        },
        "Weak Jump Pad": {
          ...dd,
          displayName: {
            translationKey: "item:weakJumpPad"
          },
          description: {
            translationKey: "item:jumpPadDescription"
          },
          itemTexture: "jump_pad_weak",
          blockModel: "jump_pad_weak"
        },
        "Jump Pad": {
          ...dd,
          displayName: {
            translationKey: "item:jumpPad"
          },
          description: {
            translationKey: "item:jumpPadDescription"
          },
          itemTexture: "jump_pad",
          blockModel: "jump_pad"
        },
        "Strong Jump Pad": {
          ...dd,
          displayName: {
            translationKey: "item:strongJumpPad"
          },
          description: {
            translationKey: "item:jumpPadDescription"
          },
          itemTexture: "jump_pad_strong",
          blockModel: "jump_pad_strong"
        },
        "Super Jump Pad": {
          ...dd,
          displayName: {
            translationKey: "item:superJumpPad"
          },
          description: {
            translationKey: "item:jumpPadDescription"
          },
          itemTexture: "jump_pad_super",
          blockModel: "jump_pad_super"
        }
      }
    }

    function wO(dd) {
      const Od = "Grey" === dd ? "Gray" : dd;
      return vd.F[Od].map((dd => Math.floor(dd / 2) + 2))
    }
  },
  5750: (dd, Od, md) => {
    md.d(Od, {
      e: () => hd,
      f: () => Qd,
      h: () => td,
      l: () => Nd,
      o: () => bd,
      s: () => qd,
      t: () => od
    });
    var Wd = md(5737),
      Fd = md(5752),
      Rd = md(5787),
      Xd = md(5796),
      Kd = md(5804);
    const hd = [1, 1, 0, 2, 1, 1],
      vd = (0, Wd.e)([
        [
          [0, 0, 0],
          [8, 4, 8]
        ]
      ]),
      Qd = 1e3 * Xd.i;

    function td(dd, Od) {
      return {
        displayName: {
          translationKey: `item:${dd}`
        },
        description: {
          translationKey: `item:${dd}Description`
        },
        ttb: 600,
        textureInfo: Od,
        model: "Slab|rotatable",
        customModelInfo: {
          yOffset: -.25
        },
        Sy: vd,
        harvestType: "rock",
        harvestLevel: 0,
        showInCreativeInven: !1
      }
    }

    function od(dd, Od) {
      const [md, Wd] = Kd.g[dd - 1];
      return [md * Od, 0, Wd * Od]
    }

    function Nd(dd, Od, md, Wd) {
      let Rd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Qd;
      const Xd = (0, Fd.Hb)(dd, {
        ...td(Od, md),
        rootMetaDesc: `${dd}|meta|rot1`
      }, [Wd, Wd, Wd, Wd]);
      for (let Fd = 1; Fd <= 4; Fd++) Xd[1 === Fd ? dd : `${dd}|meta|rot${Fd}`].surfaceVelocity = od(Fd, Rd);
      return Xd
    }

    function qd(dd, Od, md, Wd) {
      let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Qd;
      const Rd = {};
      for (const Xd of Kd.l) {
        const vd = `${md}_${"turnLeft"===Xd?"turn_left":"turn_right"}`;
        for (let md = 1; md <= 4; md++) Rd[(0, Kd.P)(dd, md, Xd)] = {
          ...td(Od, [vd, ...Wd]),
          texturePerSide: hd,
          surfaceVelocity: od(md, Fd)
        }
      }
      return Rd
    }
    const Hd = Rd.o,
      yd = Hd.map((dd => dd.map((dd => 0 === dd ? 7 : 7 === dd ? 0 : dd))));

    function bd(dd, Od) {
      const md = dd => ({
          displayName: {
            translationKey: `item:${Od}`
          },
          description: {
            translationKey: `item:${Od}Description`
          },
          ttb: 600,
          textureInfo: ["belt_tunnel_mouth", "belt_tunnel_side", ...[1, 2, 3, 4].map((Od => `${dd}[rot[${Od}`)), "conveyor_belt_bottom", "belt_tunnel_back"],
          harvestType: "rock",
          harvestLevel: 0,
          showInCreativeInven: !1
        }),
        Wd = (0, Fd.Hb)(dd, {
          ...md("belt_tunnel_top"),
          rootMetaDesc: `${dd}|meta|rot1`
        }, Hd);
      return yd.forEach(((Od, Fd) => {
        Wd[`${dd}|meta|rot${Fd+1}|exit`] = {
          ...md("belt_tunnel_exit_top"),
          texturePerSide: Od
        }
      })), Wd
    }
  },
  5746: (dd, Od, md) => {
    md.d(Od, {
      c: () => od,
      d: () => td,
      f: () => Kd,
      i: () => Qd
    });
    var Wd = md(5128),
      Fd = md(5750),
      Rd = md(5787),
      Xd = md(5796);

    function Kd() {
      return {
        ...od("Coal Deposit", "coalDeposit", "coal_deposit"),
        ...od("Iron Deposit", "ironDeposit", "iron_deposit"),
        ...od("Stone Deposit", "stoneDeposit", "stone_deposit"),
        ...od("Copper Deposit", "copperDeposit", "copper_deposit"),
        ...od("Gold Deposit", "goldDeposit", "gold_deposit"),
        "Homestead Core": {
          displayName: {
            translationKey: "item:homesteadCore"
          },
          description: {
            translationKey: "item:homesteadCoreDescription"
          },
          ttb: 5e11,
          textureInfo: "homestead_core",
          harvestType: "rock",
          drops: null,
          altActionable: !0,
          Pq: [4, 12, 14],
          showInCreativeInven: !1
        },
        "Drop Pad": {
          displayName: {
            translationKey: "item:dropPad"
          },
          description: {
            translationKey: "item:dropPadDescription"
          },
          ttb: 5e11,
          textureInfo: ["drop_pad", "machine_side"],
          texturePerSide: [1, 1, 0, 1, 1, 1],
          harvestType: "rock",
          drops: null,
          showInCreativeInven: !1
        },
        "Copper Ore": {
          displayName: {
            translationKey: "item:copperOre"
          },
          description: {
            translationKey: "item:copperOreDescription"
          },
          ttb: 3300,
          textureInfo: "copper_ore",
          harvestType: "rock",
          drops: "Raw Copper",
          showInCreativeInven: !1
        },
        ...(0, Rd.A)("Burner Drill", "burnerDrill", "burner_drill", Rd.b),
        ...(0, Rd.A)("Crusher", "crusher", "crusher"),
        ...(0, Rd.A)("Smelter", "smelter", "smelter"),
        ...(0, Rd.A)("Generator", "generator", "generator", Rd.r),
        ...(0, Rd.A)("Press", "press", "press"),
        ...(0, Rd.A)("Wire Mill", "wireMill", "wire_mill"),
        ...(0, Fd.l)("Conveyor Belt", "conveyorBelt", ["conveyor_belt_top", "conveyor_belt_slab_side", "conveyor_belt_bottom"], Fd.e),
        ...(0, Fd.l)("Splitter", "splitter", ["splitter_top", "splitter_slab_side", "conveyor_belt_bottom"], Fd.e),
        "Voltite Ore": {
          displayName: {
            translationKey: "item:voltiteOre"
          },
          description: {
            translationKey: "item:voltiteOreDescription"
          },
          ttb: 4200,
          textureInfo: "voltite_ore",
          harvestType: "rock",
          harvestLevel: 3,
          drops: "Raw Voltite",
          Pq: [2, 6, 6],
          showInCreativeInven: !1
        },
        ...(0, Rd.A)("Alloy Kiln", "alloyKiln", "alloy_kiln"),
        ...(0, Rd.A)("Electric Drill", "electricDrill", "electric_drill", Rd.m),
        ...(0, Rd.A)("Assembler", "autoBench", "auto_bench"),
        ...(0, Fd.l)("Sorting Gate", "sortingGate", ["sorting_gate_top", "sorting_gate_slab_side", "conveyor_belt_bottom"], Fd.e),
        ...(0, Fd.l)("Belt Loader", "beltLoader", ["belt_loader_top", "conveyor_belt_slab_side", "conveyor_belt_bottom", "belt_loader_slab_front"], [1, 1, 0, 2, 3, 1]),
        ...td("Storage Silo", "storageSilo", "storage_silo"),
        ...td("Charge Vault", "chargeVault", "charge_vault"),
        ...Qd("Machine Bench", "machineBench", "machine_bench"),
        ...Qd("Parts Bench", "partsBench", "parts_bench"),
        ...Qd("Tool Bench", "toolBench", "tool_bench"),
        "_Homestead Core Mid": vd([{
          animTextures: ["homestead_core_mid0", "homestead_core_mid1", "homestead_core_mid2", "homestead_core_mid3"],
          animationInterval: 250
        }], [0, 0, 0, 0, 0, 0], [3, 10, 12]),
        "_Homestead Core Top": vd(["homestead_core_crown", "homestead_core_cap"], [0, 0, 1, 0, 0, 0], [4, 12, 14]),
        ...(0, Rd.D)("Burner Drill", "burnerDrill", "burner_drill", Rd.z, Rd.b),
        ...(0, Rd.D)("Crusher", "crusher", "crusher", Rd.z),
        ...(0, Rd.D)("Smelter", "smelter", "smelter", Rd.z),
        ...(0, Rd.D)("Generator", "generator", "generator", Rd.z, Rd.r),
        ...(0, Rd.D)("Press", "press", "press", Rd.e),
        ...(0, Rd.D)("Wire Mill", "wireMill", "wire_mill", Rd.e),
        ...(0, Rd.D)("Alloy Kiln", "alloyKiln", "alloy_kiln", Rd.z),
        ...(0, Rd.D)("Electric Drill", "electricDrill", "electric_drill", Rd.e, Rd.m),
        ...(0, Rd.D)("Assembler", "autoBench", "auto_bench", Rd.e),
        ...(0, Rd.A)("Tree Cutter", "treeCutter", "tree_cutter", Rd.y),
        ...(0, Rd.D)("Tree Cutter", "treeCutter", "tree_cutter", Rd.z, Rd.y),
        ...od("Voltite Deposit", "voltiteDeposit", "voltite_deposit", [2, 6, 6]),
        ...(0, Rd.A)("Volt Engine", "voltEngine", "volt_engine", Rd.r),
        ...(0, Rd.D)("Volt Engine", "voltEngine", "volt_engine", [2, 6, 8], Rd.r),
        ...(0, Rd.A)("Deep Drill", "deepDrill", "deep_drill", Rd.i),
        ...(0, Rd.D)("Deep Drill", "deepDrill", "deep_drill", [6, 4, 2], Rd.i),
        ...(0, Rd.A)("Shatter Mill", "shatterMill", "shatter_mill"),
        ...(0, Rd.D)("Shatter Mill", "shatterMill", "shatter_mill", [6, 4, 2]),
        ...(0, Rd.A)("Sky Tap", "skyTap", "sky_tap", Rd.u),
        ...(0, Rd.D)("Sky Tap", "skyTap", "sky_tap", [4, 6, 8], Rd.u),
        ...(0, Fd.l)("Fast Belt", "fastBelt", ["fast_belt_top", "fast_belt_slab_side", "conveyor_belt_bottom"], Fd.e, 1e3 * Xd.i * Xd.z),
        ...td("Charging Pad", "chargingPad", "charging_pad"),
        ...(0, Rd.A)("Crystal Vat", "crystalVat", "crystal_vat"),
        ...(0, Rd.D)("Crystal Vat", "crystalVat", "crystal_vat", [6, 3, 9]),
        Starframe: {
          displayName: {
            translationKey: "item:starframe"
          },
          description: {
            translationKey: "item:starframeDescription"
          },
          ttb: 1500,
          textureInfo: "starframe",
          harvestType: "rock",
          harvestLevel: 0,
          Pq: [6, 6, 10],
          showInCreativeInven: !1
        },
        ...td("Forge Hopper", "forgeHopper", "forge_hopper", "machine_side"),
        "Comet Ore": {
          displayName: {
            translationKey: "item:cometOre"
          },
          description: {
            translationKey: "item:cometOreDescription"
          },
          ttb: 5e3,
          textureInfo: "comet_ore",
          harvestType: "rock",
          harvestLevel: 3,
          drops: null,
          Pq: [8, 6, 10],
          showInCreativeInven: !1
        },
        "Comet Heart": {
          displayName: {
            translationKey: "item:cometHeart"
          },
          description: {
            translationKey: "item:cometHeartDescription"
          },
          ttb: 18e3,
          textureInfo: "comet_heart",
          harvestType: "rock",
          harvestLevel: 3,
          drops: null,
          Pq: [12, 10, 14],
          showInCreativeInven: !1
        },
        "_Starframe Spire": {
          displayName: {
            translationKey: "item:starframe"
          },
          description: {
            translationKey: "item:starframeDescription"
          },
          ttb: 5e11,
          textureInfo: "starframe",
          harvestType: "rock",
          drops: null,
          Pq: [6, 6, 10],
          showInCreativeInven: !1
        },
        ...(0, Fd.s)("Conveyor Belt", "conveyorBelt", "conveyor_belt", ["conveyor_belt_slab_side", "conveyor_belt_bottom"]),
        ...(0, Fd.s)("Fast Belt", "fastBelt", "fast_belt", ["fast_belt_slab_side", "conveyor_belt_bottom"], 1e3 * Xd.i * Xd.z),
        ...(0, Rd.A)("Recycler", "recycler", "recycler"),
        ...(0, Rd.D)("Recycler", "recycler", "recycler", [3, 8, 4]),
        ...hd("Belt Lift", "beltLift", "belt_lift"),
        ...hd("Belt Drop", "beltDrop", "belt_drop"),
        ...(0, Rd.A)("Crop Harvester", "cropHarvester", "crop_harvester", Rd.f),
        ...(0, Rd.D)("Crop Harvester", "cropHarvester", "crop_harvester", Rd.e, Rd.f),
        ...(0, Fd.o)("Belt Tunnel", "beltTunnel"),
        "Pure Copper Ore": {
          displayName: {
            translationKey: "item:pureCopperOre"
          },
          ttb: 29700,
          textureInfo: "pure_copper_ore",
          harvestType: "rock",
          drops: "Raw Copper",
          UQ: 9,
          specialToolDrop: {
            tool: "Moonstone Pickaxe",
            drops: "Pure Copper Ore"
          },
          specialToolBonusDrops: {
            "Golem Pickaxe": Wd.o
          },
          Pq: [6, 6, 6],
          showInCreativeInven: !1
        },
        "Pure Voltite Ore": {
          displayName: {
            translationKey: "item:pureVoltiteOre"
          },
          ttb: 37800,
          textureInfo: "pure_voltite_ore",
          harvestType: "rock",
          harvestLevel: 3,
          drops: "Raw Voltite",
          UQ: 9,
          specialToolDrop: {
            tool: "Moonstone Pickaxe",
            drops: "Pure Voltite Ore"
          },
          specialToolBonusDrops: {
            "Golem Pickaxe": Wd.o
          },
          Pq: [2, 6, 6],
          showInCreativeInven: !1
        }
      }
    }

    function hd(dd, Od, md) {
      const Wd = {
        displayName: {
          translationKey: `item:${Od}`
        },
        description: {
          translationKey: `item:${Od}Description`
        },
        ttb: 600,
        textureInfo: [`${md}_top`, `${md}_side`, "conveyor_belt_bottom"],
        texturePerSide: [1, 1, 0, 2, 1, 1],
        harvestType: "rock",
        harvestLevel: 0,
        showInCreativeInven: !1
      };
      return {
        [dd]: Wd
      }
    }

    function vd(dd, Od, md) {
      return {
        displayName: {
          translationKey: "item:homesteadCore"
        },
        description: {
          translationKey: "item:homesteadCoreDescription"
        },
        ttb: 5e11,
        textureInfo: dd,
        texturePerSide: Od,
        harvestType: "rock",
        drops: null,
        altActionable: !0,
        Pq: md,
        showInCreativeInven: !1
      }
    }

    function Qd(dd, Od, md) {
      const Wd = {
        displayName: {
          translationKey: `item:${Od}`
        },
        description: {
          translationKey: `item:${Od}Description`
        },
        ttb: 3e3,
        textureInfo: [`${md}_side`, `${md}_top`],
        texturePerSide: [0, 0, 1, 1, 0, 0],
        harvestType: "wood",
        altActionable: !0,
        showInCreativeInven: !1
      };
      return {
        [dd]: Wd
      }
    }

    function td(dd, Od, md) {
      const Wd = {
        displayName: {
          translationKey: `item:${Od}`
        },
        description: {
          translationKey: `item:${Od}Description`
        },
        ttb: 1500,
        textureInfo: [`${md}_top`, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : `${md}_side`],
        texturePerSide: [1, 1, 0, 0, 1, 1],
        harvestType: "rock",
        harvestLevel: 0,
        altActionable: !0,
        showInCreativeInven: !1
      };
      return {
        [dd]: Wd
      }
    }

    function od(dd, Od, md, Wd) {
      const Fd = {
        displayName: {
          translationKey: `item:${Od}`
        },
        description: {
          translationKey: `item:${Od}Description`
        },
        ttb: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 6e3,
        textureInfo: md,
        harvestType: "rock",
        harvestLevel: 0,
        drops: null,
        showInCreativeInven: !1,
        ...Wd ? {
          Pq: Wd
        } : {}
      };
      return {
        [dd]: Fd
      }
    }
  },
  5787: (dd, Od, md) => {
    md.d(Od, {
      A: () => Yd,
      D: () => gd,
      b: () => vd,
      e: () => hd,
      f: () => Nd,
      i: () => td,
      m: () => Qd,
      o: () => Fd,
      r: () => Hd,
      u: () => qd,
      y: () => od,
      z: () => Kd
    });
    var Wd = md(5752);
    const Fd = [
        [1, 1, 2, 6, 0, 7],
        [0, 7, 3, 6, 1, 1],
        [1, 1, 4, 6, 7, 0],
        [7, 0, 5, 6, 1, 1]
      ],
      Rd = [
        [1, 8, 2, 6, 0, 7],
        [0, 7, 3, 6, 8, 1],
        [8, 1, 4, 6, 7, 0],
        [7, 0, 5, 6, 1, 8]
      ],
      Xd = [0, 0, 1, 2, 0, 0],
      Kd = [9, 6, 3],
      hd = [3, 7, 9],
      vd = {
        underside: "burner_drill_bottom"
      },
      Qd = {
        underside: "electric_drill_bottom"
      },
      td = {
        underside: "deep_drill_bottom"
      },
      od = {
        backRuns: !0
      },
      Nd = {
        backRuns: !0
      },
      qd = {
        underside: "sky_tap_bottom"
      },
      Hd = {
        uniform: !0
      },
      yd = {
        burner_drill_side: {
          animationInterval: 200
        },
        crusher_side: {
          animationInterval: 400,
          interpolateFrames: !1
        },
        smelter_side: {
          animationInterval: 650
        },
        press_side: {
          animationInterval: 400,
          interpolateFrames: !1
        },
        wire_mill_side: {
          animationInterval: 325
        },
        tree_cutter_back: {
          animationInterval: 325,
          interpolateFrames: !1
        },
        shatter_mill_side: {
          animationInterval: 400,
          interpolateFrames: !1
        },
        crop_harvester_side: {
          animationInterval: 400,
          interpolateFrames: !1
        },
        crop_harvester_back: {
          animationInterval: 400,
          interpolateFrames: !1
        },
        centrifuge_side: {
          animationInterval: 200
        },
        centrifuge_side_flip: {
          animationInterval: 200
        },
        synthesizer_side: {
          animationInterval: 400,
          interpolateFrames: !1
        },
        synthesizer_side_flip: {
          animationInterval: 400,
          interpolateFrames: !1
        },
        mob_farm_side: {
          animationInterval: 200
        },
        coolant_mixer_side: {
          animationInterval: 200
        },
        coolant_mixer_side_flip: {
          animationInterval: 200
        }
      };

    function bd(dd) {
      return {
        animTextures: [0, 1, 2, 3].map((Od => `${dd}_running${Od}`)),
        animationInterval: 250,
        ...yd[dd]
      }
    }

    function Td(dd, Od, md) {
      var Wd, Kd;
      const hd = md ? bd(`${dd}_side`) : `${dd}_side`,
        vd = null !== (Wd = Od.underside) && void 0 !== Wd ? Wd : "machine_side";
      if (Od.uniform) return {
        textureInfo: [hd, `${dd}_top`, vd],
        faces: [Xd, Xd, Xd, Xd]
      };
      const Qd = md && Od.backRuns ? bd(`${dd}_back`) : `${dd}_back`,
        td = [1, 2, 3, 4].map((Od => `${dd}_top[rot[${Od}`)),
        od = [null !== (Kd = Od.front) && void 0 !== Kd ? Kd : `${dd}_front`, hd, ...td, vd, Qd];
      if (Od.mirroredSides) {
        const Od = md ? bd(`${dd}_side_flip`) : `${dd}_side_flip`;
        return {
          textureInfo: [...od, Od],
          faces: Rd
        }
      }
      return {
        textureInfo: od,
        faces: Fd
      }
    }

    function pd(dd, Od) {
      return {
        displayName: {
          translationKey: `item:${dd}`
        },
        description: {
          translationKey: `item:${dd}Description`
        },
        ttb: 1500,
        textureInfo: Od,
        harvestType: "rock",
        harvestLevel: 0,
        altActionable: !0,
        showInCreativeInven: !1
      }
    }

    function Yd(dd, Od, md) {
      let Fd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        textureInfo: Rd,
        faces: Xd
      } = Td(md, Fd, !1);
      return (0, Wd.Hb)(dd, {
        ...pd(Od, Rd),
        rootMetaDesc: `${dd}|meta|rot1`
      }, Xd)
    }

    function gd(dd, Od, md, Wd) {
      let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const {
        textureInfo: Rd,
        faces: Xd
      } = Td(md, Fd, !0), Kd = {};
      return Xd.forEach(((md, Fd) => {
        Kd[`${dd}|meta|rot${Fd+1}|Running`] = {
          ...pd(Od, Rd),
          texturePerSide: md,
          Pq: Wd
        }
      })), Kd
    }
  },
  5813: (dd, Od, md) => {
    md.d(Od, {
      d: () => td,
      h: () => Qd,
      k: () => Td,
      n: () => od,
      o: () => yd,
      s: () => pd,
      t: () => tO
    });
    var Wd = md(5752),
      Fd = md(5746),
      Rd = md(5750),
      Xd = md(5787),
      Kd = md(5796);
    const hd = {
      uniform: !0,
      underside: "pump_bottom"
    };

    function vd(dd) {
      return {
        front: "output",
        underside: `${dd}_bottom`,
        mirroredSides: !0,
        backRuns: !0
      }
    }
    const Qd = "Fluid Pipe",
      td = "Coolant Pipe";

    function od(dd) {
      return dd === Qd || dd === td
    }
    const Nd = "Full",
      qd = 2,
      Hd = 350;

    function yd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Wd = "cryo" === dd ? td : Qd;
      return md || 0 !== Od ? `${Wd}|meta|conn|${Yd(Od)}${md?`|${Nd}`:""}` : Wd
    }
    const bd = "Fluid Tank",
      Td = 4;

    function pd(dd) {
      return 0 === dd ? bd : `${bd}|meta|rot1|Fill${dd}`
    }

    function Yd(dd) {
      const Od = Wd.c.filter(((Od, md) => dd >> md & 1));
      return Od.length ? Od.join("_") : "none"
    }

    function gd(dd, Od, md, Wd) {
      const Fd = {
          displayName: {
            translationKey: `item:${md}`
          },
          description: {
            translationKey: "item:fluidPipeDescription"
          },
          ttb: 600,
          harvestType: "rock",
          harvestLevel: 0,
          showInCreativeInven: !1,
          itemTexture: "fluid_pipe",
          model: "CustomModel",
          solid: !1,
          modelScale: 8,
          particlesIgnoreBlack: !0
        },
        Rd = {};
      for (let Xd = 0; Xd < 64; Xd++) {
        const md = yd(dd, Xd, Od);
        Rd[md] = {
          ...Fd,
          blockModel: `${Wd}_${Yd(Xd)}`,
          ...od(md) ? {
            rootMetaDesc: `${md}|meta|conn|none`
          } : {},
          ..."cryo" === dd ? {
            drops: Qd
          } : {},
          ...Od ? {
            customModelInfo: {
              textureAnimation: {
                frames: qd,
                animationInterval: Hd
              }
            }
          } : {}
        }
      }
      return Rd
    }
    const wd = 300;

    function Ed() {
      const dd = {};
      for (let Od = 1; Od <= Td; Od++) {
        const md = Gd(`fluid_tank_fill${Od}`, 4, "_", wd),
          Wd = Od === Td;
        dd[pd(Od)] = Pd("fluidTank", [md.animTextures[0], md, ...Wd ? [] : ["fluid_tank"]], {
          ...cd,
          texturePerSide: Wd ? [1, 1, 1, 1, 1, 1] : [1, 1, 2, 1, 1, 1]
        })
      }
      return dd
    }
    const Jd = Xd.o.map((dd => dd.map((dd => 0 === dd ? 0 : 1))));
    const Ud = [0, 0, 0, 0, 0, 0],
      xd = [1, 1, 1, 1, 1, 1],
      Bd = ["reactor_base", "reactor_base_top"],
      Sd = [0, 0, 1, 1, 0, 0],
      sd = {
        Calm: {
          texture: "reactor_controller_green",
          ms: 800,
          light: [2, 11, 3]
        },
        Warm: {
          texture: "reactor_controller_yellow",
          ms: 800,
          light: [10, 10, 1]
        },
        Hot: {
          texture: "reactor_controller_orange",
          ms: 800,
          light: [12, 6, 1]
        },
        Alarm: {
          texture: "reactor_controller_red",
          ms: 400,
          light: [13, 1, 1]
        }
      },
      ud = "reactor_frame",
      Vd = 4,
      Ad = 4,
      rd = 400;

    function Gd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
        md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "_running",
        Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 250;
      return {
        animTextures: Array.from({
          length: Od
        }, ((Od, Wd) => `${dd}${md}${Wd}`)),
        animationInterval: Wd
      }
    }

    function nd(dd, Od) {
      return [`${dd}0`, Gd(dd, Od, "")]
    }

    function Ld(dd) {
      return [1, 2, 3, 4].map((Od => `${dd}[rot[${Od}`))
    }

    function Pd(dd, Od) {
      return {
        displayName: {
          translationKey: `item:${dd}`
        },
        description: {
          translationKey: `item:${dd}Description`
        },
        ttb: 1500,
        textureInfo: Od,
        harvestType: "rock",
        harvestLevel: 0,
        showInCreativeInven: !1,
        ...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
      }
    }
    const zd = {
        transTex: !0,
        soundType: {
          break: "glass",
          place: "stone"
        }
      },
      cd = {
        ...zd,
        altActionable: !0
      },
      jd = {
        ttb: 5e11,
        drops: null
      };

    function Dd(dd, Od, md, Wd) {
      return {
        [dd]: Od,
        [`${dd}|meta|rot1|${md}`]: {
          ...Od,
          ...Wd
        }
      }
    }

    function ed(dd, Od, md) {
      return (0, Wd.Hb)(dd, {
        ...Od,
        rootMetaDesc: `${dd}|meta|rot1`
      }, md)
    }

    function Id(dd, Od, md, Wd) {
      const Fd = {};
      return Wd.forEach(((Wd, Rd) => {
        Fd[`${dd}|meta|rot${Rd+1}|${Od}`] = {
          ...md,
          texturePerSide: Wd
        }
      })), Fd
    }

    function ld(dd, Od, md, Wd) {
      const Fd = {};
      for (let Xd = 1; Xd <= 4; Xd++) Fd[`${dd}|meta|rot${Xd}|${md}`] = {
        ...(0, Rd.h)(Od, Wd),
        texturePerSide: Rd.e,
        surfaceVelocity: (0, Rd.t)(Xd, Rd.f),
        drops: dd
      };
      return Fd
    }

    function Cd() {
      const dd = "Reactor Controller",
        Od = [Ud, Ud, Ud, Ud],
        md = (dd, Od) => Pd("reactorFrame", [dd], {
          drops: "Reactor Frame",
          ...Od ? {
            Pq: Od
          } : {}
        });
      let Wd = ed(dd, md(ud), Od);
      for (const [Fd, Rd] of Object.entries(sd)) {
        const Xd = {
          animTextures: [`${Rd.texture}0`, `${Rd.texture}1`],
          animationInterval: Rd.ms
        };
        Wd = {
          ...Wd,
          ...Id(dd, Fd, md(Xd, Rd.light), Od)
        }
      }
      return Wd
    }

    function Zd() {
      const dd = "Battery Controller",
        Od = Pd("batteryController", ["battery_controller_front", "battery_casing"], {
          altActionable: !0
        }),
        md = Pd("batteryController", [Gd("battery_controller_front"), "battery_casing"], {
          altActionable: !0,
          Pq: Xd.e
        });
      return {
        ...ed(dd, Od, Jd),
        ...Id(dd, "Running", md, Jd)
      }
    }
    const kd = "collider_side_off",
      fd = 16,
      Md = 200,
      dO = [...Ld("collider_top"), "collider_bottom"],
      OO = "collider_top[rot[1",
      mO = [0, 0, 1, 2, 0, 0];

    function WO(dd) {
      return dd ? Gd("collider_side", fd, "_running", Md) : kd
    }

    function FO(dd) {
      const Od = WO(dd);
      return ["output", Od, ...dO, Od]
    }

    function RO(dd) {
      return dd ? {
        textureInfo: [kd, WO(!0), OO, "collider_bottom"],
        texturePerSide: [1, 1, 2, 3, 1, 1]
      } : {
        textureInfo: [kd, OO, "collider_bottom"],
        texturePerSide: mO
      }
    }

    function XO() {
      const dd = RO(!1),
        Od = [dd.texturePerSide, dd.texturePerSide, dd.texturePerSide, dd.texturePerSide];
      return {
        ...ed("Collider", Pd("collider", FO(!1), {
          altActionable: !0,
          drops: null
        }), Xd.o),
        ...ed("_Collider Focus", Pd("collider", dd.textureInfo, {
          altActionable: !0,
          drops: null
        }), Od),
        ...ed("_Collider Output", Pd("collider", dd.textureInfo, {
          altActionable: !0,
          drops: null
        }), Od)
      }
    }
    const KO = ["laser_front", "laser_side", ...Array(4).fill("laser_side"), "laser_side", "laser_back"];

    function hO() {
      const {
        textureInfo: dd,
        texturePerSide: Od
      } = RO(!0);
      return Id("_Collider Focus", "Running", Pd("collider", dd, {
        altActionable: !0,
        drops: null,
        Pq: [8, 3, 8]
      }), [Od, Od, Od, Od])
    }

    function vO() {
      const dd = "wireless_terminal_top[rot[1";
      return ed("Wireless Terminal", Pd("wirelessTerminal", ["wireless_terminal_front", dd, ...Ld("wireless_terminal_top"), "wireless_terminal_bottom", dd], {
        altActionable: !0,
        Pq: [2, 6, 3]
      }), Xd.o)
    }

    function QO(dd, Od, md) {
      return Pd(dd, Od, {
        ttb: md,
        harvestLevel: 3,
        drops: null,
        Pq: [6, 10, 2]
      })
    }

    function tO() {
      return {
        "Uranium Ore": Pd("uraniumOre", "uranium_ore", {
          ttb: 5400,
          harvestLevel: 3,
          drops: "Raw Uranium",
          Pq: [5, 8, 1]
        }),
        ...(0, Fd.c)("Uranium Deposit", "uraniumDeposit", "uranium_deposit", [5, 8, 1], 36e3),
        "Sky Spring": {
          ...(0, Fd.c)("Sky Spring", "skySpring", "stone")["Sky Spring"],
          textureInfo: [{
            animTextures: ["sky_spring0", "sky_spring1", "sky_spring2", "sky_spring3"],
            animationInterval: 800
          }, "stone"],
          texturePerSide: [1, 1, 0, 1, 1, 1]
        },
        ...(0, Fd.i)("Atomic Bench", "atomicBench", "atomic_bench"),
        ...NO((0, Xd.A)("Pump", "pump", "pump", hd)),
        ...NO((0, Xd.D)("Pump", "pump", "pump", Xd.e, hd)),
        ...(0, Xd.A)("Condenser", "condenser", "condenser", vd("condenser")),
        ...(0, Xd.D)("Condenser", "condenser", "condenser", Xd.e, vd("condenser")),
        ...(0, Xd.A)("Centrifuge", "centrifuge", "centrifuge", vd("centrifuge")),
        ...(0, Xd.D)("Centrifuge", "centrifuge", "centrifuge", [6, 9, 2], vd("centrifuge")),
        ...(0, Xd.A)("Synthesizer", "synthesizer", "synthesizer", vd("synthesizer")),
        ...(0, Xd.D)("Synthesizer", "synthesizer", "synthesizer", [3, 8, 3], vd("synthesizer")),
        ...(0, Xd.A)("Mob Farm", "mobFarm", "mob_farm"),
        ...(0, Xd.D)("Mob Farm", "mobFarm", "mob_farm", Xd.z),
        "Fluid Tank": Pd("fluidTank", "fluid_tank", cd),
        ...Cd(),
        "Reactor Frame": Pd("reactorFrame", "reactor_frame"),
        "Reactor Casing": Pd("reactorCasing", "reactor_casing"),
        "Reactor Glass": Pd("reactorGlass", "reactor_glass", zd),
        ...Dd("Reactor Port", Pd("reactorPort", "fuel_port"), "Water", {
          textureInfo: "water_port"
        }),
        "Reactor Port|meta|rot1|Waste": Pd("reactorPort", "output"),
        ...Dd("Fuel Rod", Pd("fuelRod", "fuel_rod0"), "Running", {
          textureInfo: nd("fuel_rod", Vd),
          texturePerSide: xd,
          Pq: [5, 9, 2]
        }),
        "Graphite Block": Pd("graphiteBlock", "graphite_block"),
        ...Dd("Coolant Channel", Pd("coolantChannel", "coolant_channel0"), "Running", {
          textureInfo: nd("coolant_channel", Ad),
          texturePerSide: xd
        }),
        "Reactor Slag": Pd("reactorSlag", "reactor_slag", {
          drops: null,
          Pq: [3, 5, 1]
        }),
        "Atomic Bomb": oO("atomicBomb", "atomic_bomb"),
        ...Zd(),
        "Battery Casing": Pd("batteryCasing", "battery_casing"),
        ...Dd("Battery Cell", Pd("batteryCell", ["battery_cell", "battery_cell_top", "battery_cell_bottom"], {
          texturePerSide: [0, 0, 1, 2, 0, 0]
        }), "Running", {
          textureInfo: ["battery_cell", Gd("battery_cell", 4, "_running", rd), "battery_cell_top", "battery_cell_bottom"],
          texturePerSide: [1, 1, 2, 3, 1, 1],
          Pq: Xd.e
        }),
        ...XO(),
        ...ed("Laser", Pd("laser", KO, {
          altActionable: !0
        }), Xd.o),
        ...vO(),
        ...(0, Fd.d)("Dense Silo", "denseSilo", "dense_silo"),
        ...(0, Rd.l)("Express Belt", "expressBelt", ["express_belt_top", "express_belt_slab_side", "conveyor_belt_bottom"], Rd.e, 1e3 * Kd.i * Kd.v),
        ...(0, Rd.s)("Express Belt", "expressBelt", "express_belt", ["express_belt_slab_side", "conveyor_belt_bottom"], 1e3 * Kd.i * Kd.v),
        ...(0, Rd.l)("Fast Loader", "fastLoader", ["fast_loader_top", "fast_belt_slab_side", "conveyor_belt_bottom", "fast_loader_slab_front"], [1, 1, 0, 2, 3, 1]),
        ...ld("Splitter", "splitter", "leftFront", ["splitter_top_left_front", "splitter_slab_side", "conveyor_belt_bottom"]),
        ...ld("Splitter", "splitter", "frontRight", ["splitter_top_front_right", "splitter_slab_side", "conveyor_belt_bottom"]),
        ...ld("Sorting Gate", "sortingGate", "right", ["sorting_gate_top_right", "sorting_gate_slab_side", "conveyor_belt_bottom"]),
        "Uranium Glass": Pd("uraniumGlass", "uranium_glass", {
          ...zd,
          harvestType: "wood",
          ttb: 450,
          Pq: [4, 7, 1]
        }),
        "Glow Lamp": Pd("glowLamp", "glow_lamp", {
          harvestType: "wood",
          ttb: 450,
          Pq: [8, 12, 13]
        }),
        "_Jetpack Back": Pd("jetChestplate", "jetpack_back", jd),
        "_Atomic Spire": Pd("atomicSpire", "atomic_spire", {
          ...jd,
          Pq: [5, 9, 2]
        }),
        "Isotope Comet Ore": QO("isotopeCometOre", "isotope_comet_ore", 5e3),
        "Isotope Comet Heart": QO("isotopeCometHeart", "isotope_comet_heart", 18e3),
        ...Id("Laser", "Running", Pd("laser", KO, {
          altActionable: !0,
          Pq: [9, 3, 9]
        }), Xd.o),
        ...hO(),
        ...gd("water", !1, "fluidPipe", "baf2_fluid_pipe"),
        ...(0, Xd.A)("Coolant Mixer", "coolantMixer", "coolant_mixer", vd("coolant_mixer")),
        ...(0, Xd.D)("Coolant Mixer", "coolantMixer", "coolant_mixer", Xd.e, vd("coolant_mixer")),
        ...gd("cryo", !1, "fluidPipe", "baf2_fluid_pipe"),
        ...Ed(),
        ...gd("water", !0, "waterPipe", "baf2_water_pipe"),
        ...gd("cryo", !0, "coolantPipe", "baf2_coolant_pipe"),
        "Reactor Frame|meta|rot1|Formed": Pd("reactorFrame", Bd, {
          texturePerSide: Sd
        }),
        "Reactor Glass|meta|rot1|Formed": Pd("reactorGlass", Bd, {
          texturePerSide: Sd,
          soundType: zd.soundType
        }),
        "Reactor Port|meta|rot1|Formed": Pd("reactorPort", "fuel_port"),
        "Reactor Port|meta|rot1|Formed|Water": Pd("reactorPort", "water_port"),
        "Reactor Port|meta|rot1|Formed|Waste": Pd("reactorPort", "output"),
        ...Id("Collider", "Running", Pd("collider", FO(!0), {
          altActionable: !0,
          drops: null,
          Pq: [8, 3, 8]
        }), Xd.o),
        Scaffolding: Pd("scaffolding", "scaffolding", {
          transTex: !0,
          ttb: 300,
          solid: !1,
          climbableInside: {
            upForceScalar: 1.05
          }
        }),
        ...(0, Wd.Fb)("Nova Trophy", {
          displayName: {
            translationKey: "item:novaTrophy"
          },
          description: {
            translationKey: "item:novaTrophyDescription"
          },
          ttb: 2e3,
          harvestType: "rock",
          showInCreativeInven: !1,
          model: "rotatable",
          itemTexture: "nova_trophy",
          rootMetaDesc: "Nova Trophy|meta|rot1",
          modelScale: 8,
          customModelInfo: {
            yOffset: -.5
          },
          blockModel: "Nova Trophy",
          Pq: [4, 10, 5]
        }),
        "Uranium Block": Pd("uraniumBlock", "uranium_block", {
          ttb: 3e3,
          Pq: [5, 9, 2]
        }),
        "Pure Uranium Ore": Pd("pureUraniumOre", "pure_uranium_ore", {
          ttb: 48600,
          harvestLevel: 3,
          drops: "Raw Uranium",
          UQ: 9,
          specialToolDrop: {
            tool: "Moonstone Pickaxe",
            drops: "Pure Uranium Ore"
          },
          Pq: [6, 10, 2]
        }),
        "Copper Block": Pd("copperBlock", "copper_block", {
          ttb: 3e3
        }),
        "Voltite Block": Pd("voltiteBlock", "voltite_block", {
          ttb: 3e3,
          Pq: [2, 6, 6]
        }),
        "Nova Bomb": oO("novaBomb", "nova_bomb")
      }
    }

    function oO(dd, Od) {
      return Pd(dd, [`${Od}_side`, `${Od}_top`], {
        ttb: 50,
        texturePerSide: [0, 0, 1, 0, 0, 0],
        harvestType: "cuttable"
      })
    }

    function NO(dd) {
      for (const Od of Object.values(dd)) Od.drops = "Condenser";
      return dd
    }
  },
  5759: (dd, Od, md) => {
    md.d(Od, {
      A: () => pd,
      B: () => vd,
      E: () => hd,
      d: () => yd,
      g: () => Yd,
      j: () => Kd,
      n: () => Xd,
      o: () => Td,
      s: () => Qd,
      t: () => gd,
      x: () => bd
    });
    var Wd = md(5766);
    const Fd = {
        root: "Noticeboard",
        blockModelPrefix: "noticeboard_wall",
        faceOffset: -.25
      },
      Rd = {
        root: "Standing Noticeboard",
        blockModelPrefix: "noticeboard_standing",
        faceOffset: .125
      },
      Xd = [Fd, Rd],
      Kd = Xd.map((dd => {
        let {
          root: Od
        } = dd;
        return Od
      })),
      hd = Fd.root,
      vd = Rd.root,
      Qd = hd,
      td = ["l", "r", "u", "d"],
      [od, Nd, qd, Hd] = td.map(((dd, Od) => 1 << Od)),
      yd = Array.from({
        length: 1 << td.length
      }, ((dd, Od) => Od)),
      bd = {
        0: "_single",
        [od]: "_horizontal_right",
        [Nd]: "_horizontal_left",
        [od | Nd]: "_horizontal",
        [qd]: "_vertical_bottom",
        [Hd]: "_vertical_top",
        [qd | Hd]: "_vertical",
        [Nd | Hd]: "_top_left",
        [od | Hd]: "_top_right",
        [Nd | qd]: "_bottom_left",
        [od | qd]: "_bottom_right",
        [od | Nd | Hd]: "_top",
        [od | Nd | qd]: "_bottom",
        [Nd | qd | Hd]: "_left",
        [od | qd | Hd]: "_right",
        [od | Nd | qd | Hd]: ""
      },
      Td = Object.fromEntries(Object.entries(Wd.e).map((dd => {
        let [Od, [md, Wd]] = dd;
        return [Od, [-Wd, md]]
      }))),
      pd = Object.fromEntries(Object.entries(Wd.e).map((dd => {
        let [Od, [md, Wd]] = dd;
        return [Od, [
          [md, 0, Wd],
          [-md, 0, -Wd],
          [0, 1, 0],
          [0, -1, 0]
        ]]
      })));

    function Yd(dd, Od, md) {
      const Wd = td.filter(((dd, Od) => md & 1 << Od)).join("");
      return "" === Wd ? 1 === Od ? dd : `${dd}|meta|rot${Od}` : `${dd}|meta|rot${Od}|${Wd}`
    }

    function gd(dd) {
      var Od;
      const md = null !== (Od = dd.split("|")[2]) && void 0 !== Od ? Od : "";
      let Wd = 0;
      return td.forEach(((dd, Od) => {
        md.includes(dd) && (Wd |= 1 << Od)
      })), Wd
    }
  },
  5774: (dd, Od, md) => {
    md.d(Od, {
      A: () => yd,
      D: () => qd,
      G: () => Hd,
      H: () => Xd,
      c: () => Rd,
      g: () => Kd,
      k: () => hd,
      m: () => td,
      p: () => bd,
      t: () => od,
      x: () => Fd
    });
    var Wd = md(5737);
    const Fd = [{
        letter: "n",
        name: "North",
        dx: 0,
        dz: -1
      }, {
        letter: "e",
        name: "East",
        dx: 1,
        dz: 0
      }, {
        letter: "s",
        name: "South",
        dx: 0,
        dz: 1
      }, {
        letter: "w",
        name: "West",
        dx: -1,
        dz: 0
      }],
      Rd = 47 == md.j ? ["fence"] : null;

    function Xd(dd) {
      return Rd.includes(dd.model)
    }
    const Kd = Array.from({
        length: 1 << Fd.length
      }, ((dd, Od) => Od)),
      hd = 1 << Fd.length,
      vd = "Stacked";

    function Qd(dd) {
      return Fd.filter(((Od, md) => dd & 1 << md)).map((dd => {
        let {
          letter: Od
        } = dd;
        return Od
      })).join("")
    }

    function td(dd, Od) {
      const md = [Qd(Od), Od & hd ? vd : ""].filter(Boolean);
      return md.length ? `${dd}|meta|${md.join("|")}` : dd
    }

    function od(dd) {
      var Od;
      const md = dd.split("|").slice(1),
        Wd = null !== (Od = md.find((dd => dd !== vd))) && void 0 !== Od ? Od : "";
      let Rd = md.includes(vd) ? hd : 0;
      return Fd.forEach(((dd, Od) => {
        let {
          letter: md
        } = dd;
        Wd.includes(md) && (Rd |= 1 << Od)
      })), Rd
    }

    function Nd(dd) {
      return Kd.map((Od => (0, Wd.e)(function(dd, Od) {
        let {
          post: md,
          northArm: Wd
        } = dd;
        const Rd = [md];
        let Xd = Wd;
        return Fd.forEach(((dd, md) => {
          Od & 1 << md && Rd.push(Xd), Xd = function(dd) {
            let [Od, md, Wd, Fd, Rd, Xd] = dd;
            return [8 - Xd, md, Od, 8 - Wd, Rd, Fd]
          }(Xd)
        })), Rd
      }(dd, Od).map((dd => {
        let [Od, md, Wd, Fd, Rd, Xd] = dd;
        return [
          [Od, md, Wd],
          [Fd, Rd, Xd]
        ]
      })))))
    }
    const qd = Nd({
        post: [3, 0, 3, 5, 8, 5],
        northArm: [3, 0, 0, 5, 8, 3]
      }),
      Hd = Nd({
        post: [3, 0, 3, 5, 4, 5],
        northArm: [3, 0, 0, 5, 4, 3]
      }),
      yd = {
        glb: "Fence",
        postPiece: "Bottom",
        topPiece: "Top"
      };
    yd.glb;

    function bd(dd, Od) {
      return `${dd}${null===Od?"Post":Fd[Od].name}`
    }
  },
  5781: (dd, Od, md) => {
    if (md.d(Od, {
        b: () => Xd,
        c: () => Kd,
        d: () => Rd,
        e: () => vd,
        g: () => Fd,
        h: () => hd
      }), 47 == md.j) var Wd = md(5766);
    const Fd = "Chest",
      Rd = ["left", "right"];

    function Xd(dd, Od, md) {
      return `${dd}|meta|rot${Od}|${md}`
    }

    function Kd(dd, Od) {
      var md;
      return dd !== Fd ? null : null !== (md = Rd.find((dd => Od.endsWith(`|${dd}`)))) && void 0 !== md ? md : null
    }
    const hd = {
      left: "right",
      right: "left"
    };

    function vd(dd, Od) {
      const [md, Fd] = Wd.e[dd];
      return "left" === Od ? [-md, -Fd] : [md, Fd]
    }
  },
  5778: (dd, Od, md) => {
    md.d(Od, {
      e: () => qd,
      g: () => Fd,
      h: () => od,
      i: () => Nd,
      m: () => Hd,
      o: () => vd,
      p: () => hd,
      r: () => td,
      s: () => Xd,
      w: () => Rd
    });
    var Wd = md(5756);
    const Fd = "fenceGate";

    function Rd(dd) {
      return (null === dd || void 0 === dd ? void 0 : dd.model) === Fd
    }

    function Xd(dd) {
      return Rd(dd) && void 0 !== dd.attachedTop
    }
    const Kd = [{
      dx: 0,
      dz: -1
    }, {
      dx: -1,
      dz: 0
    }, {
      dx: 0,
      dz: 1
    }, {
      dx: 1,
      dz: 0
    }];

    function hd(dd) {
      return dd % 2 === 1
    }

    function vd(dd, Od, md) {
      const Wd = function(dd) {
        return Kd[(dd - 1) % 4]
      }(dd);
      return Wd.dx * Od + Wd.dz * md > 0 ? (dd + 1) % 4 + 1 : dd
    }
    const Qd = new Map;

    function td(dd, Od, md) {
      const Fd = `${dd}|${Od}|${md}`;
      return Qd.has(Fd) || Qd.set(Fd, (0, Wd.d)(function(dd, Od, md) {
        return (0, Wd.n)(function(dd, Od) {
          return Od ? [
            [0, 0, 0, 1, dd, 5],
            [7, 0, 0, 8, dd, 5]
          ] : [
            [0, 0, 3, 8, dd, 5]
          ]
        }(dd ? 4 : 8, md), Od - 1)
      }(dd, Od, md))), Qd.get(Fd)
    }
    const od = [1, 2, 3, 4].flatMap((dd => [!1, !0].map((Od => ({
      rot: dd,
      open: Od
    })))));

    function Nd(dd, Od, md) {
      return 1 !== Od || md ? `${dd}|meta|rot${Od}|${md?"open":"closed"}` : dd
    }
    const qd = "FenceGate",
      Hd = {
        bottom: ["BottomLeft", "BottomRight"],
        top: ["TopLeft", "TopRight"]
      }
  },
  5729: (dd, Od, md) => {
    md.d(Od, {
      e: () => Rd,
      i: () => Fd,
      m: () => Wd,
      p: () => hd
    });
    const Wd = [{
      kind: "placedWater",
      source: "Placed Water",
      family: "water",
      reach: 8,
      still: "Water"
    }, {
      kind: "placedLava",
      source: "Placed Lava",
      family: "lava",
      reach: 4,
      still: "Lava"
    }];

    function Fd(dd, Od) {
      return `${dd}|Flow${Od}`
    }

    function Rd(dd) {
      return `${dd}|Falling`
    }
    const Xd = [.42, .56, .86, .9];

    function Kd(dd, Od) {
      return {
        textureInfo: "water" === dd ? [...Od] : {
          colour: [.95, .4, .05, .95],
          animTextures: ["lava0", "lava1", "lava2", "lava3", "lava4", "lava5", "lava6", "lava7"],
          animationInterval: 800
        },
        LN: !0,
        drops: null,
        harvestType: "rock",
        ..."lava" === dd ? {
          Pq: [14, 8, 2]
        } : {}
      }
    }

    function hd() {
      const dd = {};
      dd["Placed Water"] = {
        displayName: {
          translationKey: "item:placedWater"
        },
        ...Kd("water", Xd)
      }, dd["Placed Lava"] = {
        displayName: {
          translationKey: "item:placedLava"
        },
        ...Kd("lava", [])
      };
      for (const {
          source: Od,
          family: md,
          reach: hd
        }
        of Wd) {
        const Wd = "water" === md ? Xd : [];
        for (let Rd = 1; Rd <= hd; Rd++) dd[Fd(Od, Rd)] = {
          ...Kd(md, Wd),
          canBePlacedOver: !0
        };
        dd[Rd(Od)] = {
          ...Kd(md, Wd),
          canBePlacedOver: !0
        }
      }
      return dd
    }
  },
  5816: (dd, Od, md) => {
    function Wd() {
      const dd = {};
      for (const Od of ["White", "Light Grey", "Light Blue", "Cyan", "Green", "Lime", "Yellow", "Orange", "Magenta", "Red"]) dd[`INTERNAL_MESH_${Od} Directional Arrow`] = {
        ttb: 400,
        harvestType: "cuttable",
        model: "rotatable",
        solid: !1,
        blockModel: `${Od} Directional Arrow`,
        blockModelItem: !0,
        twoDBlockItem: !0,
        modelScale: 8,
        customModelInfo: {
          yOffset: -.5
        },
        drops: null
      };
      return dd
    }
    md.d(Od, {
      d: () => Wd
    })
  },
  5827: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd,
      d: () => Rd
    });
    const Wd = md(5836).d.map((dd => ({
        wood: dd,
        block: "Maple" === dd ? "Showcase" : `${dd} Item Pedestal`
      }))),
      Fd = new Set(Wd.map((dd => {
        let {
          block: Od
        } = dd;
        return Od
      })));

    function Rd(dd) {
      return Fd.has(dd)
    }
  },
  5756: (dd, Od, md) => {
    md.d(Od, {
      d: () => Kd,
      e: () => Ld,
      i: () => qd,
      j: () => Td,
      n: () => Xd,
      p: () => od,
      r: () => yd,
      v: () => Nd,
      y: () => bd
    });
    var Wd = md(5737),
      Fd = md(5769),
      Rd = md(5759);

    function Xd(dd, Od) {
      let md = [...dd];
      for (let Wd = 0; Wd < Od; Wd++) md = md.map((dd => {
        let [Od, md, Wd, Fd, Rd, Xd] = dd;
        return [Wd, md, 8 - Fd, Xd, Rd, 8 - Od]
      }));
      return md
    }

    function Kd(dd) {
      return (0, Wd.e)(dd.map((dd => {
        let [Od, md, Wd, Fd, Rd, Xd] = dd;
        return [
          [Od, md, Wd],
          [Fd, Rd, Xd]
        ]
      })))
    }

    function hd() {
      for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
      return [0, 1, 2, 3].map((dd => Kd(Xd(Od, dd))))
    }

    function vd(dd) {
      return dd.map((dd => {
        let [Od, md, Wd, Fd, Rd, Xd] = dd;
        return [Od, 8 - Rd, Wd, Fd, 8 - md, Xd]
      }))
    }
    const Qd = [0, 0, 0, 8, 4, 8],
      td = [0, 4, 0, 8, 8, 4],
      od = [Qd, td],
      Nd = vd(od),
      qd = {
        bot: hd(...od),
        top: hd(...Nd)
      };

    function Hd(dd) {
      return Object.fromEntries(Fd.p.map((Od => [Od, dd(Od)])))
    }
    const yd = {
        innerLeft: [Qd, td, [4, 4, 4, 8, 8, 8]],
        innerRight: [Qd, td, [0, 4, 4, 4, 8, 8]],
        outerLeft: [Qd, [4, 4, 0, 8, 8, 4]],
        outerRight: [Qd, [0, 4, 0, 4, 8, 4]]
      },
      bd = Hd((dd => vd(yd[dd]))),
      Td = {
        bot: Hd((dd => hd(...yd[dd]))),
        top: Hd((dd => hd(...bd[dd])))
      },
      pd = hd([0, 0, 0, 8, 8, 1]),
      Yd = hd([0, 0, 0, 8, 1, 8]),
      gd = hd([0, 0, 0, 8, 6, 8]),
      wd = hd([0, 0, 0, 8, 3, 8]),
      Ed = hd([0, 0, 3, 8, 8, 6]),
      Jd = hd([0, 0, 0, 8, 8, 2]),
      Ud = hd([0, 0, 2, 8, 8, 3]),
      xd = hd([1, 0, 0, 7, 8, 6]),
      Bd = hd([0, 0, 0, 8, 8, 2]),
      Sd = hd([0, 0, 3, 8, 8, 5]),
      sd = hd([0, 0, 6, 8, 8, 8]),
      ud = hd([3, 0, 3, 5, 8, 5]),
      Vd = [0, 0, 0, 8, 6, 8],
      Ad = hd(Vd),
      rd = hd(Vd, [0, 6, 7, 8, 7, 8]),
      Gd = hd(Vd, [0, 6, 0, 8, 8, 1]),
      nd = {
        "Dangling Rope": hd([3, 0, 3, 5, 8, 5]),
        "Dangling Vine": hd([2, 0, 2, 6, 8, 6]),
        Vines: pd,
        Board: pd,
        "Slime Trail": Yd,
        "Wood Spikes": gd,
        "Stone Spikes": gd,
        "Iron Spikes": gd,
        "Gold Spikes": gd,
        "Diamond Spikes": gd,
        "Kill Spikes": gd,
        "Landing Pad": wd,
        "Weak Jump Pad": wd,
        "Jump Pad": wd,
        "Strong Jump Pad": wd,
        "Super Jump Pad": wd,
        "Slicing Board": hd([1, 0, 1, 7, 2, 7]),
        Football: hd([2, 0, 2, 6, 4, 6]),
        "Coloured Wheel": hd([0, 0, 3, 8, 8, 5]),
        Lantern: hd([1, 0, 1, 7, 8, 7])
      };

    function Ld(dd, Od) {
      var md, Wd, Fd, Xd;
      let Kd = nd[dd.meta.rootName];
      const hd = null !== (md = null !== (Wd = dd.blockModel) && void 0 !== Wd ? Wd : Od.blockModel) && void 0 !== md ? md : "";
      "noticeboard_standing_leg" === hd ? Kd = ud : hd.startsWith("noticeboard_standing") ? Kd = Sd : hd.startsWith("noticeboard_wall") ? Kd = sd : dd.meta.rootName.endsWith(" Directional Arrow") ? Kd = Yd : dd.meta.rootName.endsWith(" Ladder") ? Kd = Bd : dd.meta.rootName.endsWith(" Strongbed Head") ? Kd = Gd : dd.meta.rootName.endsWith(" Strongbed") ? Kd = rd : / Bed(?: Head)?$/.test(dd.meta.rootName) ? Kd = Ad : /^_(Sheep|Cow|Pig|Horse|Wolf|Deer|Wildcat|Camel) Painting /.test(hd) ? Kd = pd : / Banner(?: Flag)?(?: Hanging)?$/.test(hd) ? Kd = hd.endsWith(" Flag Hanging") ? Ud : hd.endsWith(" Hanging") ? Jd : Ed : "lantern_wall" === hd && (Kd = xd);
      const vd = Rd.j.includes(dd.meta.rootName) ? 2 : 0;
      return null === (Fd = Kd) || void 0 === Fd ? void 0 : Fd[((null !== (Xd = dd.meta.rot) && void 0 !== Xd ? Xd : 1) - 1 + vd) % 4]
    }
  },
  5836: (dd, Od, md) => {
    md.d(Od, {
      d: () => Wd
    });
    const Wd = ["Maple", "Pine", "Plum", "Cedar", "Aspen", "Jungle", "Palm", "Pear", "Cherry", "Spectral", "Mango"]
  },
  5769: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd,
      f: () => Rd,
      i: () => Xd,
      m: () => Kd,
      p: () => Fd
    });
    let Wd = function(dd) {
      return dd[dd.bot = 0] = "bot", dd[dd.top = 1] = "top", dd[dd.side = 2] = "side", dd
    }({});
    const Fd = ["innerLeft", "innerRight", "outerLeft", "outerRight"];
    class Rd {
      constructor(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd, td, od, Nd, qd, Hd, yd, bd, Td, pd, Yd, gd, wd) {
        this.rootName = dd, this.rootId = Od, this.metaStr = md, this.rot = Wd, this.open = Fd, this.halfblockPlacement = Rd, this.Bd = Xd, this.treeBase = Kd, this.treeCanopy = hd, this.books = vd, this.freshlyGrown = Qd, this.roots = td, this.lava = od, this.top = Nd, this.grassRoots = qd, this.breaking = Hd, this.flashing = yd, this.stairsCorner = bd, this.charging = Td, this.direction = pd, this.requiresAmmo = Yd, this.woodType = gd, this.caughtMobType = wd
      }
    }
    new Set(["metaStr", "rot", "halfblockPlacement", "stairsCorner"]);

    function Xd(dd, Od) {
      Od.meta = Kd(Od.name, Od.id, (Od => dd[Od].id), Od.rootMetaDesc)
    }

    function Kd(dd, Od, md, Xd) {
      const Kd = null !== Xd && void 0 !== Xd ? Xd : dd;
      if (Kd.split("|").length > 1 || Kd.startsWith("Caught Mob")) {
        var hd;
        const dd = Kd.split("|")[0],
          Od = Kd.split("|").slice(1).join("|"),
          Xd = Od.includes("rot") ? parseInt(Od.split("rot")[1][0]) : null;
        let vd = !!Od.includes("open") || null;
        Od.includes("closed") && (vd = !1);
        let Qd = Od.includes("bot") ? Wd.bot : null;
        Od.includes("top") ? Qd = Wd.top : Od.includes("side") && (Qd = Wd.side);
        const td = !!Od.includes("Growing") || null,
          od = !!Od.includes("TreeBase") || null,
          Nd = !!Od.includes("TreeCanopy") || null,
          qd = Od.includes("books") ? parseInt(Od.split("books")[1][0]) : null,
          Hd = !!Od.includes("FreshlyGrown") || null,
          yd = !(!Od.includes("Roots") || Od.includes("GrassRoots")) || null,
          bd = !!Od.includes("Lava") || null,
          Td = !("Top" !== Od && !Od.includes("|Top") && !Od.startsWith("Top|")) || null,
          pd = !!Od.includes("GrassRoots") || null,
          Yd = !!Od.includes("Breaking") || null,
          gd = !!Od.includes("Flashing") || null,
          wd = null !== (hd = Fd.find((dd => Od.endsWith(`|${dd}`)))) && void 0 !== hd ? hd : null,
          Ed = Od.includes("charging") ? parseInt(Od.split("charging")[1][0]) : null,
          Jd = Od.includes("dir") ? parseInt(Od.split("dir")[1][0]) : null,
          Ud = !!Od.includes("RequiresAmmo") || null,
          xd = od ? Od.split("|")[1] : null,
          Bd = Kd.startsWith("Caught Mob") ? Kd.split(" ")[2].replaceAll("_", " ") : null;
        return Object.freeze(new Rd(dd, md(dd), Od, Xd, vd, Qd, td, od, Nd, qd, Hd, yd, bd, Td, pd, Yd, gd, wd, Ed, Jd, Ud, xd, Bd))
      }
      return Object.freeze(new Rd(dd, Od, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);