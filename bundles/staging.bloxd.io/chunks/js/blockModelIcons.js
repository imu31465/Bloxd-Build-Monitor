export const id = 4;
export const ids = [4];
export const modules = {
  36794: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      getBlockModelIconUrl: () => cu,
      hasBlockModelIcon: () => fu
    });
    var su = ju(36784),
      Uu = ju(36779);
    const Zu = ju(36800),
      Xu = new Map(Zu.keys().filter((uu => uu.startsWith("./"))).map((uu => [uu.slice(2, -5), uu]))),
      lu = new Map,
      qu = new Map;

    function fu(uu) {
      return Xu.has(uu)
    }

    function Cu(uu) {
      return Zu(Xu.get(uu))
    }
    async function bu(uu, Eu, ju) {
      const {
        data: su,
        texture: Zu
      } = await
      function(uu) {
        let Eu = lu.get(uu);
        return Eu || (Eu = Cu(uu).then((async uu => {
          const Eu = new Image;
          Eu.src = uu.texture, await Eu.decode();
          const ju = document.createElement("canvas");
          ju.width = Eu.width, ju.height = Eu.height;
          const su = ju.getContext("2d");
          return su.drawImage(Eu, 0, 0), {
            data: uu,
            texture: {
              width: Eu.width,
              height: Eu.height,
              pixels: su.getImageData(0, 0, Eu.width, Eu.height).data
            }
          }
        })), Eu.catch((() => {
          lu.delete(uu)
        })), lu.set(uu, Eu)), Eu
      }(uu), Xu = document.createElement("canvas");
      return Xu.width = Eu, Xu.height = Eu, Xu.getContext("2d").putImageData(new ImageData((0, Uu.m)(su, Zu, Eu, ju), Eu, Eu), 0, 0), Xu.toDataURL()
    }

    function cu(uu, Eu, ju) {
      const Uu = `${Eu}|${ju}|${uu}`;
      let Zu = qu.get(Uu);
      return Zu || (Zu = (0, su.g)(uu, (() => Cu(uu)), Eu, ju).then((su => null !== su && void 0 !== su ? su : bu(uu, Eu, ju))), Zu.catch((() => {
        qu.delete(Uu)
      })), qu.set(Uu, Zu)), Zu
    }
  },
  36800: (uu, Eu, ju) => {
    var su = {
      "./Artisan Bench.json": [41410, 280],
      "./Aspen Item Pedestal.json": [41412, 281],
      "./Cedar Item Pedestal.json": [41415, 282],
      "./Cherry Item Pedestal.json": [41418, 283],
      "./Furnace.json": [41421, 284],
      "./Jungle Item Pedestal.json": [41424, 285],
      "./Mango Item Pedestal.json": [41433, 286],
      "./Palm Item Pedestal.json": [41438, 287],
      "./Pear Item Pedestal.json": [41443, 288],
      "./Pine Item Pedestal.json": [41449, 289],
      "./Plum Item Pedestal.json": [41458, 290],
      "./Potion Table.json": [41466, 291],
      "./Salvaging Table.json": [41471, 292],
      "./Showcase.json": [41477, 293],
      "./Spectral Item Pedestal.json": [41485, 294],
      "./Workbench.json": [41491, 295]
    };

    function Uu(uu) {
      if (!ju.o(su, uu)) return Promise.resolve().then((() => {
        var Eu = new Error("Cannot find module '" + uu + "'");
        throw Eu.code = "MODULE_NOT_FOUND", Eu
      }));
      var Eu = su[uu],
        Uu = Eu[0];
      return ju.e(Eu[1]).then((() => ju(Uu)))
    }
    Uu.keys = () => Object.keys(su), Uu.id = 36800, uu.exports = Uu
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);