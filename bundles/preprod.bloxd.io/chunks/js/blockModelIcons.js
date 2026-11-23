export const id = 4;
export const ids = [4];
export const modules = {
  36302: (CC, zC, ZC) => {
    var QC = {
      "./Artisan Bench.json": [41003, 275],
      "./Aspen Item Pedestal.json": [41009, 276],
      "./Cedar Item Pedestal.json": [41018, 277],
      "./Cherry Item Pedestal.json": [41025, 278],
      "./Furnace.json": [41031, 279],
      "./Jungle Item Pedestal.json": [41035, 280],
      "./Mango Item Pedestal.json": [41044, 281],
      "./Palm Item Pedestal.json": [41047, 282],
      "./Pear Item Pedestal.json": [41050, 283],
      "./Pine Item Pedestal.json": [41056, 284],
      "./Plum Item Pedestal.json": [41062, 285],
      "./Potion Table.json": [41067, 286],
      "./Salvaging Table.json": [41070, 287],
      "./Showcase.json": [41075, 288],
      "./Spectral Item Pedestal.json": [41082, 289],
      "./Workbench.json": [41084, 290]
    };

    function wC(CC) {
      if (!ZC.o(QC, CC)) return Promise.resolve().then((() => {
        var zC = new Error("Cannot find module '" + CC + "'");
        throw zC.code = "MODULE_NOT_FOUND", zC
      }));
      var zC = QC[CC],
        wC = zC[0];
      return ZC.e(zC[1]).then((() => ZC(wC)))
    }
    wC.keys = () => Object.keys(QC), wC.id = 36302, CC.exports = wC
  },
  36297: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      getBlockModelIconUrl: () => NC,
      hasBlockModelIcon: () => qC
    });
    var QC = ZC(36291),
      wC = ZC(36288);
    const bC = ZC(36302),
      nC = new Map(bC.keys().filter((CC => CC.startsWith("./"))).map((CC => [CC.slice(2, -5), CC]))),
      fC = new Map,
      oC = new Map;

    function qC(CC) {
      return nC.has(CC)
    }

    function FC(CC) {
      return bC(nC.get(CC))
    }
    async function WC(CC, zC, ZC) {
      const {
        data: QC,
        texture: bC
      } = await
      function(CC) {
        let zC = fC.get(CC);
        return zC || (zC = FC(CC).then((async CC => {
          const zC = new Image;
          zC.src = CC.texture, await zC.decode();
          const ZC = document.createElement("canvas");
          ZC.width = zC.width, ZC.height = zC.height;
          const QC = ZC.getContext("2d");
          return QC.drawImage(zC, 0, 0), {
            data: CC,
            texture: {
              width: zC.width,
              height: zC.height,
              pixels: QC.getImageData(0, 0, zC.width, zC.height).data
            }
          }
        })), zC.catch((() => {
          fC.delete(CC)
        })), fC.set(CC, zC)), zC
      }(CC), nC = document.createElement("canvas");
      return nC.width = zC, nC.height = zC, nC.getContext("2d").putImageData(new ImageData((0, wC.k)(QC, bC, zC, ZC), zC, zC), 0, 0), nC.toDataURL()
    }

    function NC(CC, zC, ZC) {
      const wC = `${zC}|${ZC}|${CC}`;
      let bC = oC.get(wC);
      return bC || (bC = (0, QC.d)(CC, (() => FC(CC)), zC, ZC).then((QC => null !== QC && void 0 !== QC ? QC : WC(CC, zC, ZC))), bC.catch((() => {
        oC.delete(wC)
      })), oC.set(wC, bC)), bC
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);