export const id = 4;
export const ids = [4];
export const modules = {
  36433: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      getBlockModelIconUrl: () => zB,
      hasBlockModelIcon: () => cB
    });
    var TB = ZB(36422),
      JB = ZB(36416);
    const oB = ZB(36437),
      GB = new Map(oB.keys().filter((BB => BB.startsWith("./"))).map((BB => [BB.slice(2, -5), BB]))),
      vB = new Map,
      kB = new Map;

    function cB(BB) {
      return GB.has(BB)
    }

    function nB(BB) {
      return oB(GB.get(BB))
    }
    async function hB(BB, IB, ZB) {
      const {
        data: TB,
        texture: oB
      } = await
      function(BB) {
        let IB = vB.get(BB);
        return IB || (IB = nB(BB).then((async BB => {
          const IB = new Image;
          IB.src = BB.texture, await IB.decode();
          const ZB = document.createElement("canvas");
          ZB.width = IB.width, ZB.height = IB.height;
          const TB = ZB.getContext("2d");
          return TB.drawImage(IB, 0, 0), {
            data: BB,
            texture: {
              width: IB.width,
              height: IB.height,
              pixels: TB.getImageData(0, 0, IB.width, IB.height).data
            }
          }
        })), IB.catch((() => {
          vB.delete(BB)
        })), vB.set(BB, IB)), IB
      }(BB), GB = document.createElement("canvas");
      return GB.width = IB, GB.height = IB, GB.getContext("2d").putImageData(new ImageData((0, JB.o)(TB, oB, IB, ZB), IB, IB), 0, 0), GB.toDataURL()
    }

    function zB(BB, IB, ZB) {
      const JB = `${IB}|${ZB}|${BB}`;
      let oB = kB.get(JB);
      return oB || (oB = (0, TB.g)(BB, (() => nB(BB)), IB, ZB).then((TB => null !== TB && void 0 !== TB ? TB : hB(BB, IB, ZB))), oB.catch((() => {
        kB.delete(JB)
      })), kB.set(JB, oB)), oB
    }
  },
  36437: (BB, IB, ZB) => {
    var TB = {
      "./Artisan Bench.json": [41211, 280],
      "./Aspen Item Pedestal.json": [41219, 281],
      "./Cedar Item Pedestal.json": [41226, 282],
      "./Cherry Item Pedestal.json": [41231, 283],
      "./Furnace.json": [41237, 284],
      "./Jungle Item Pedestal.json": [41240, 285],
      "./Mango Item Pedestal.json": [41248, 286],
      "./Palm Item Pedestal.json": [41257, 287],
      "./Pear Item Pedestal.json": [41266, 288],
      "./Pine Item Pedestal.json": [41274, 289],
      "./Plum Item Pedestal.json": [41279, 290],
      "./Potion Table.json": [41281, 291],
      "./Salvaging Table.json": [41288, 292],
      "./Showcase.json": [41292, 293],
      "./Spectral Item Pedestal.json": [41296, 294],
      "./Workbench.json": [41299, 295]
    };

    function JB(BB) {
      if (!ZB.o(TB, BB)) return Promise.resolve().then((() => {
        var IB = new Error("Cannot find module '" + BB + "'");
        throw IB.code = "MODULE_NOT_FOUND", IB
      }));
      var IB = TB[BB],
        JB = IB[0];
      return ZB.e(IB[1]).then((() => ZB(JB)))
    }
    JB.keys = () => Object.keys(TB), JB.id = 36437, BB.exports = JB
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);