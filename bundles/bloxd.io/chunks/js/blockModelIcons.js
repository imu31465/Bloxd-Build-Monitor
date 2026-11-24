export const id = 4;
export const ids = [4];
export const modules = {
  36420: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      getBlockModelIconUrl: () => kS,
      hasBlockModelIcon: () => uS
    });
    var tS = gS(36412),
      bS = gS(36403);
    const XS = gS(36423),
      xS = new Map(XS.keys().filter((SS => SS.startsWith("./"))).map((SS => [SS.slice(2, -5), SS]))),
      NS = new Map,
      qS = new Map;

    function uS(SS) {
      return xS.has(SS)
    }

    function IS(SS) {
      return XS(xS.get(SS))
    }
    async function fS(SS, HS, gS) {
      const {
        data: tS,
        texture: XS
      } = await
      function(SS) {
        let HS = NS.get(SS);
        return HS || (HS = IS(SS).then((async SS => {
          const HS = new Image;
          HS.src = SS.texture, await HS.decode();
          const gS = document.createElement("canvas");
          gS.width = HS.width, gS.height = HS.height;
          const tS = gS.getContext("2d");
          return tS.drawImage(HS, 0, 0), {
            data: SS,
            texture: {
              width: HS.width,
              height: HS.height,
              pixels: tS.getImageData(0, 0, HS.width, HS.height).data
            }
          }
        })), HS.catch((() => {
          NS.delete(SS)
        })), NS.set(SS, HS)), HS
      }(SS), xS = document.createElement("canvas");
      return xS.width = HS, xS.height = HS, xS.getContext("2d").putImageData(new ImageData((0, bS.n)(tS, XS, HS, gS), HS, HS), 0, 0), xS.toDataURL()
    }

    function kS(SS, HS, gS) {
      const bS = `${HS}|${gS}|${SS}`;
      let XS = qS.get(bS);
      return XS || (XS = (0, tS.e)(SS, (() => IS(SS)), HS, gS).then((tS => null !== tS && void 0 !== tS ? tS : fS(SS, HS, gS))), XS.catch((() => {
        qS.delete(bS)
      })), qS.set(bS, XS)), XS
    }
  },
  36423: (SS, HS, gS) => {
    var tS = {
      "./Artisan Bench.json": [41188, 275],
      "./Aspen Item Pedestal.json": [41194, 276],
      "./Cedar Item Pedestal.json": [41197, 277],
      "./Cherry Item Pedestal.json": [41206, 278],
      "./Furnace.json": [41213, 279],
      "./Jungle Item Pedestal.json": [41219, 280],
      "./Mango Item Pedestal.json": [41226, 281],
      "./Palm Item Pedestal.json": [41228, 282],
      "./Pear Item Pedestal.json": [41230, 283],
      "./Pine Item Pedestal.json": [41234, 284],
      "./Plum Item Pedestal.json": [41242, 285],
      "./Potion Table.json": [41248, 286],
      "./Salvaging Table.json": [41252, 287],
      "./Showcase.json": [41259, 288],
      "./Spectral Item Pedestal.json": [41261, 289],
      "./Workbench.json": [41267, 290]
    };

    function bS(SS) {
      if (!gS.o(tS, SS)) return Promise.resolve().then((() => {
        var HS = new Error("Cannot find module '" + SS + "'");
        throw HS.code = "MODULE_NOT_FOUND", HS
      }));
      var HS = tS[SS],
        bS = HS[0];
      return gS.e(HS[1]).then((() => gS(bS)))
    }
    bS.keys = () => Object.keys(tS), bS.id = 36423, SS.exports = bS
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);