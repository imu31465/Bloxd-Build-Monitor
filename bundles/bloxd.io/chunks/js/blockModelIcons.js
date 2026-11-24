export const id = 4;
export const ids = [4];
export const modules = {
  36494: (BB, jB, zB) => {
    var QB = {
      "./Artisan Bench.json": [41277, 280],
      "./Aspen Item Pedestal.json": [41283, 281],
      "./Cedar Item Pedestal.json": [41292, 282],
      "./Cherry Item Pedestal.json": [41294, 283],
      "./Furnace.json": [41298, 284],
      "./Jungle Item Pedestal.json": [41301, 285],
      "./Mango Item Pedestal.json": [41306, 286],
      "./Palm Item Pedestal.json": [41312, 287],
      "./Pear Item Pedestal.json": [41319, 288],
      "./Pine Item Pedestal.json": [41327, 289],
      "./Plum Item Pedestal.json": [41331, 290],
      "./Potion Table.json": [41339, 291],
      "./Salvaging Table.json": [41342, 292],
      "./Showcase.json": [41348, 293],
      "./Spectral Item Pedestal.json": [41357, 294],
      "./Workbench.json": [41360, 295]
    };

    function nB(BB) {
      if (!zB.o(QB, BB)) return Promise.resolve().then((() => {
        var jB = new Error("Cannot find module '" + BB + "'");
        throw jB.code = "MODULE_NOT_FOUND", jB
      }));
      var jB = QB[BB],
        nB = jB[0];
      return zB.e(jB[1]).then((() => zB(nB)))
    }
    nB.keys = () => Object.keys(QB), nB.id = 36494, BB.exports = nB
  },
  36487: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      getBlockModelIconUrl: () => rB,
      hasBlockModelIcon: () => UB
    });
    var QB = zB(36475),
      nB = zB(36473);
    const dB = zB(36494),
      IB = new Map(dB.keys().filter((BB => BB.startsWith("./"))).map((BB => [BB.slice(2, -5), BB]))),
      NB = new Map,
      uB = new Map;

    function UB(BB) {
      return IB.has(BB)
    }

    function aB(BB) {
      return dB(IB.get(BB))
    }
    async function pB(BB, jB, zB) {
      const {
        data: QB,
        texture: dB
      } = await
      function(BB) {
        let jB = NB.get(BB);
        return jB || (jB = aB(BB).then((async BB => {
          const jB = new Image;
          jB.src = BB.texture, await jB.decode();
          const zB = document.createElement("canvas");
          zB.width = jB.width, zB.height = jB.height;
          const QB = zB.getContext("2d");
          return QB.drawImage(jB, 0, 0), {
            data: BB,
            texture: {
              width: jB.width,
              height: jB.height,
              pixels: QB.getImageData(0, 0, jB.width, jB.height).data
            }
          }
        })), jB.catch((() => {
          NB.delete(BB)
        })), NB.set(BB, jB)), jB
      }(BB), IB = document.createElement("canvas");
      return IB.width = jB, IB.height = jB, IB.getContext("2d").putImageData(new ImageData((0, nB.n)(QB, dB, jB, zB), jB, jB), 0, 0), IB.toDataURL()
    }

    function rB(BB, jB, zB) {
      const nB = `${jB}|${zB}|${BB}`;
      let dB = uB.get(nB);
      return dB || (dB = (0, QB.f)(BB, (() => aB(BB)), jB, zB).then((QB => null !== QB && void 0 !== QB ? QB : pB(BB, jB, zB))), dB.catch((() => {
        uB.delete(nB)
      })), uB.set(nB, dB)), dB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);