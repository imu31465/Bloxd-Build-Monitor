export const id = 4;
export const ids = [4];
export const modules = {
  36406: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      getBlockModelIconUrl: () => UD,
      hasBlockModelIcon: () => gD
    });
    var pD = wD(36395),
      sD = wD(36386);
    const KD = wD(36414),
      rD = new Map(KD.keys().filter((DD => DD.startsWith("./"))).map((DD => [DD.slice(2, -5), DD]))),
      LD = new Map,
      cD = new Map;

    function gD(DD) {
      return rD.has(DD)
    }

    function RD(DD) {
      return KD(rD.get(DD))
    }
    async function AD(DD, zD, wD) {
      const {
        data: pD,
        texture: KD
      } = await
      function(DD) {
        let zD = LD.get(DD);
        return zD || (zD = RD(DD).then((async DD => {
          const zD = new Image;
          zD.src = DD.texture, await zD.decode();
          const wD = document.createElement("canvas");
          wD.width = zD.width, wD.height = zD.height;
          const pD = wD.getContext("2d");
          return pD.drawImage(zD, 0, 0), {
            data: DD,
            texture: {
              width: zD.width,
              height: zD.height,
              pixels: pD.getImageData(0, 0, zD.width, zD.height).data
            }
          }
        })), zD.catch((() => {
          LD.delete(DD)
        })), LD.set(DD, zD)), zD
      }(DD), rD = document.createElement("canvas");
      return rD.width = zD, rD.height = zD, rD.getContext("2d").putImageData(new ImageData((0, sD.m)(pD, KD, zD, wD), zD, zD), 0, 0), rD.toDataURL()
    }

    function UD(DD, zD, wD) {
      const sD = `${zD}|${wD}|${DD}`;
      let KD = cD.get(sD);
      return KD || (KD = (0, pD.h)(DD, (() => RD(DD)), zD, wD).then((pD => null !== pD && void 0 !== pD ? pD : AD(DD, zD, wD))), KD.catch((() => {
        cD.delete(sD)
      })), cD.set(sD, KD)), KD
    }
  },
  36414: (DD, zD, wD) => {
    var pD = {
      "./Artisan Bench.json": [41093, 275],
      "./Aspen Item Pedestal.json": [41099, 276],
      "./Cedar Item Pedestal.json": [41103, 277],
      "./Cherry Item Pedestal.json": [41108, 278],
      "./Furnace.json": [41111, 279],
      "./Jungle Item Pedestal.json": [41113, 280],
      "./Mango Item Pedestal.json": [41119, 281],
      "./Palm Item Pedestal.json": [41123, 282],
      "./Pear Item Pedestal.json": [41128, 283],
      "./Pine Item Pedestal.json": [41136, 284],
      "./Plum Item Pedestal.json": [41144, 285],
      "./Potion Table.json": [41150, 286],
      "./Salvaging Table.json": [41153, 287],
      "./Showcase.json": [41160, 288],
      "./Spectral Item Pedestal.json": [41164, 289],
      "./Workbench.json": [41171, 290]
    };

    function sD(DD) {
      if (!wD.o(pD, DD)) return Promise.resolve().then((() => {
        var zD = new Error("Cannot find module '" + DD + "'");
        throw zD.code = "MODULE_NOT_FOUND", zD
      }));
      var zD = pD[DD],
        sD = zD[0];
      return wD.e(zD[1]).then((() => wD(sD)))
    }
    sD.keys = () => Object.keys(pD), sD.id = 36414, DD.exports = sD
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);