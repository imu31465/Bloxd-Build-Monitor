export const id = 4;
export const ids = [4];
export const modules = {
  36490: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      getBlockModelIconUrl: () => Em,
      hasBlockModelIcon: () => im
    });
    var hm = fm(36484),
      Am = fm(36481);
    const am = fm(36495),
      xm = new Map(am.keys().filter((mm => mm.startsWith("./"))).map((mm => [mm.slice(2, -5), mm]))),
      wm = new Map,
      Dm = new Map;

    function im(mm) {
      return xm.has(mm)
    }

    function Rm(mm) {
      return am(xm.get(mm))
    }
    async function pm(mm, Tm, fm) {
      const {
        data: hm,
        texture: am
      } = await
      function(mm) {
        let Tm = wm.get(mm);
        return Tm || (Tm = Rm(mm).then((async mm => {
          const Tm = new Image;
          Tm.src = mm.texture, await Tm.decode();
          const fm = document.createElement("canvas");
          fm.width = Tm.width, fm.height = Tm.height;
          const hm = fm.getContext("2d");
          return hm.drawImage(Tm, 0, 0), {
            data: mm,
            texture: {
              width: Tm.width,
              height: Tm.height,
              pixels: hm.getImageData(0, 0, Tm.width, Tm.height).data
            }
          }
        })), Tm.catch((() => {
          wm.delete(mm)
        })), wm.set(mm, Tm)), Tm
      }(mm), xm = document.createElement("canvas");
      return xm.width = Tm, xm.height = Tm, xm.getContext("2d").putImageData(new ImageData((0, Am.k)(hm, am, Tm, fm), Tm, Tm), 0, 0), xm.toDataURL()
    }

    function Em(mm, Tm, fm) {
      const Am = `${Tm}|${fm}|${mm}`;
      let am = Dm.get(Am);
      return am || (am = (0, hm.e)(mm, (() => Rm(mm)), Tm, fm).then((hm => null !== hm && void 0 !== hm ? hm : pm(mm, Tm, fm))), am.catch((() => {
        Dm.delete(Am)
      })), Dm.set(Am, am)), am
    }
  },
  36495: (mm, Tm, fm) => {
    var hm = {
      "./Artisan Bench.json": [41228, 275],
      "./Aspen Item Pedestal.json": [41232, 276],
      "./Cedar Item Pedestal.json": [41236, 277],
      "./Cherry Item Pedestal.json": [41245, 278],
      "./Furnace.json": [41254, 279],
      "./Jungle Item Pedestal.json": [41259, 280],
      "./Mango Item Pedestal.json": [41263, 281],
      "./Palm Item Pedestal.json": [41266, 282],
      "./Pear Item Pedestal.json": [41268, 283],
      "./Pine Item Pedestal.json": [41271, 284],
      "./Plum Item Pedestal.json": [41273, 285],
      "./Potion Table.json": [41282, 286],
      "./Salvaging Table.json": [41291, 287],
      "./Showcase.json": [41298, 288],
      "./Spectral Item Pedestal.json": [41305, 289],
      "./Workbench.json": [41312, 290]
    };

    function Am(mm) {
      if (!fm.o(hm, mm)) return Promise.resolve().then((() => {
        var Tm = new Error("Cannot find module '" + mm + "'");
        throw Tm.code = "MODULE_NOT_FOUND", Tm
      }));
      var Tm = hm[mm],
        Am = Tm[0];
      return fm.e(Tm[1]).then((() => fm(Am)))
    }
    Am.keys = () => Object.keys(hm), Am.id = 36495, mm.exports = Am
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);