export const id = 4;
export const ids = [4];
export const modules = {
  36484: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      getBlockModelIconUrl: () => LT,
      hasBlockModelIcon: () => kT
    });
    var WT = mT(36478),
      zT = mT(36476);
    const MT = mT(36487),
      gT = new Map(MT.keys().filter((TT => TT.startsWith("./"))).map((TT => [TT.slice(2, -5), TT]))),
      nT = new Map,
      HT = new Map;

    function kT(TT) {
      return gT.has(TT)
    }

    function jT(TT) {
      return MT(gT.get(TT))
    }
    async function lT(TT, UT, mT) {
      const {
        data: WT,
        texture: MT
      } = await
      function(TT) {
        let UT = nT.get(TT);
        return UT || (UT = jT(TT).then((async TT => {
          const UT = new Image;
          UT.src = TT.texture, await UT.decode();
          const mT = document.createElement("canvas");
          mT.width = UT.width, mT.height = UT.height;
          const WT = mT.getContext("2d");
          return WT.drawImage(UT, 0, 0), {
            data: TT,
            texture: {
              width: UT.width,
              height: UT.height,
              pixels: WT.getImageData(0, 0, UT.width, UT.height).data
            }
          }
        })), UT.catch((() => {
          nT.delete(TT)
        })), nT.set(TT, UT)), UT
      }(TT), gT = document.createElement("canvas");
      return gT.width = UT, gT.height = UT, gT.getContext("2d").putImageData(new ImageData((0, zT.l)(WT, MT, UT, mT), UT, UT), 0, 0), gT.toDataURL()
    }

    function LT(TT, UT, mT) {
      const zT = `${UT}|${mT}|${TT}`;
      let MT = HT.get(zT);
      return MT || (MT = (0, WT.e)(TT, (() => jT(TT)), UT, mT).then((WT => null !== WT && void 0 !== WT ? WT : lT(TT, UT, mT))), MT.catch((() => {
        HT.delete(zT)
      })), HT.set(zT, MT)), MT
    }
  },
  36487: (TT, UT, mT) => {
    var WT = {
      "./Artisan Bench.json": [41348, 280],
      "./Aspen Item Pedestal.json": [41351, 281],
      "./Cedar Item Pedestal.json": [41359, 282],
      "./Cherry Item Pedestal.json": [41361, 283],
      "./Furnace.json": [41364, 284],
      "./Jungle Item Pedestal.json": [41367, 285],
      "./Mango Item Pedestal.json": [41373, 286],
      "./Palm Item Pedestal.json": [41375, 287],
      "./Pear Item Pedestal.json": [41377, 288],
      "./Pine Item Pedestal.json": [41384, 289],
      "./Plum Item Pedestal.json": [41390, 290],
      "./Potion Table.json": [41392, 291],
      "./Salvaging Table.json": [41400, 292],
      "./Showcase.json": [41407, 293],
      "./Spectral Item Pedestal.json": [41412, 294],
      "./Workbench.json": [41418, 295]
    };

    function zT(TT) {
      if (!mT.o(WT, TT)) return Promise.resolve().then((() => {
        var UT = new Error("Cannot find module '" + TT + "'");
        throw UT.code = "MODULE_NOT_FOUND", UT
      }));
      var UT = WT[TT],
        zT = UT[0];
      return mT.e(UT[1]).then((() => mT(zT)))
    }
    zT.keys = () => Object.keys(WT), zT.id = 36487, TT.exports = zT
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);