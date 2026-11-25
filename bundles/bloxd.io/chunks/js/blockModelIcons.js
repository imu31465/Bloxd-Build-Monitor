export const id = 4;
export const ids = [4];
export const modules = {
  36746: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      getBlockModelIconUrl: () => fG,
      hasBlockModelIcon: () => YG
    });
    var wG = ZG(36733),
      SG = ZG(36729);
    const LG = ZG(36749),
      yG = new Map(LG.keys().filter((GG => GG.startsWith("./"))).map((GG => [GG.slice(2, -5), GG]))),
      kG = new Map,
      UG = new Map;

    function YG(GG) {
      return yG.has(GG)
    }

    function VG(GG) {
      return LG(yG.get(GG))
    }
    async function pG(GG, bG, ZG) {
      const {
        data: wG,
        texture: LG
      } = await
      function(GG) {
        let bG = kG.get(GG);
        return bG || (bG = VG(GG).then((async GG => {
          const bG = new Image;
          bG.src = GG.texture, await bG.decode();
          const ZG = document.createElement("canvas");
          ZG.width = bG.width, ZG.height = bG.height;
          const wG = ZG.getContext("2d");
          return wG.drawImage(bG, 0, 0), {
            data: GG,
            texture: {
              width: bG.width,
              height: bG.height,
              pixels: wG.getImageData(0, 0, bG.width, bG.height).data
            }
          }
        })), bG.catch((() => {
          kG.delete(GG)
        })), kG.set(GG, bG)), bG
      }(GG), yG = document.createElement("canvas");
      return yG.width = bG, yG.height = bG, yG.getContext("2d").putImageData(new ImageData((0, SG.o)(wG, LG, bG, ZG), bG, bG), 0, 0), yG.toDataURL()
    }

    function fG(GG, bG, ZG) {
      const SG = `${bG}|${ZG}|${GG}`;
      let LG = UG.get(SG);
      return LG || (LG = (0, wG.g)(GG, (() => VG(GG)), bG, ZG).then((wG => null !== wG && void 0 !== wG ? wG : pG(GG, bG, ZG))), LG.catch((() => {
        UG.delete(SG)
      })), UG.set(SG, LG)), LG
    }
  },
  36749: (GG, bG, ZG) => {
    var wG = {
      "./Artisan Bench.json": [41581, 280],
      "./Aspen Item Pedestal.json": [41589, 281],
      "./Cedar Item Pedestal.json": [41597, 282],
      "./Cherry Item Pedestal.json": [41602, 283],
      "./Furnace.json": [41611, 284],
      "./Jungle Item Pedestal.json": [41614, 285],
      "./Mango Item Pedestal.json": [41621, 286],
      "./Palm Item Pedestal.json": [41625, 287],
      "./Pear Item Pedestal.json": [41627, 288],
      "./Pine Item Pedestal.json": [41635, 289],
      "./Plum Item Pedestal.json": [41643, 290],
      "./Potion Table.json": [41650, 291],
      "./Salvaging Table.json": [41655, 292],
      "./Showcase.json": [41662, 293],
      "./Spectral Item Pedestal.json": [41669, 294],
      "./Workbench.json": [41678, 295]
    };

    function SG(GG) {
      if (!ZG.o(wG, GG)) return Promise.resolve().then((() => {
        var bG = new Error("Cannot find module '" + GG + "'");
        throw bG.code = "MODULE_NOT_FOUND", bG
      }));
      var bG = wG[GG],
        SG = bG[0];
      return ZG.e(bG[1]).then((() => ZG(SG)))
    }
    SG.keys = () => Object.keys(wG), SG.id = 36749, GG.exports = SG
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);