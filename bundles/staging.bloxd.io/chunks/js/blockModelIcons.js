export const id = 4;
export const ids = [4];
export const modules = {
  36646: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      getBlockModelIconUrl: () => lt,
      hasBlockModelIcon: () => Ht
    });
    var Ot = Vt(36635),
      qt = Vt(36632);
    const Dt = Vt(36653),
      mt = new Map(Dt.keys().filter((tt => tt.startsWith("./"))).map((tt => [tt.slice(2, -5), tt]))),
      dt = new Map,
      jt = new Map;

    function Ht(tt) {
      return mt.has(tt)
    }

    function Xt(tt) {
      return Dt(mt.get(tt))
    }
    async function Qt(tt, et, Vt) {
      const {
        data: Ot,
        texture: Dt
      } = await
      function(tt) {
        let et = dt.get(tt);
        return et || (et = Xt(tt).then((async tt => {
          const et = new Image;
          et.src = tt.texture, await et.decode();
          const Vt = document.createElement("canvas");
          Vt.width = et.width, Vt.height = et.height;
          const Ot = Vt.getContext("2d");
          return Ot.drawImage(et, 0, 0), {
            data: tt,
            texture: {
              width: et.width,
              height: et.height,
              pixels: Ot.getImageData(0, 0, et.width, et.height).data
            }
          }
        })), et.catch((() => {
          dt.delete(tt)
        })), dt.set(tt, et)), et
      }(tt), mt = document.createElement("canvas");
      return mt.width = et, mt.height = et, mt.getContext("2d").putImageData(new ImageData((0, qt.s)(Ot, Dt, et, Vt), et, et), 0, 0), mt.toDataURL()
    }

    function lt(tt, et, Vt) {
      const qt = `${et}|${Vt}|${tt}`;
      let Dt = jt.get(qt);
      return Dt || (Dt = (0, Ot.e)(tt, (() => Xt(tt)), et, Vt).then((Ot => null !== Ot && void 0 !== Ot ? Ot : Qt(tt, et, Vt))), Dt.catch((() => {
        jt.delete(qt)
      })), jt.set(qt, Dt)), Dt
    }
  },
  36653: (tt, et, Vt) => {
    var Ot = {
      "./Artisan Bench.json": [41399, 280],
      "./Aspen Item Pedestal.json": [41407, 281],
      "./Cedar Item Pedestal.json": [41412, 282],
      "./Cherry Item Pedestal.json": [41419, 283],
      "./Furnace.json": [41428, 284],
      "./Jungle Item Pedestal.json": [41434, 285],
      "./Mango Item Pedestal.json": [41442, 286],
      "./Palm Item Pedestal.json": [41449, 287],
      "./Pear Item Pedestal.json": [41454, 288],
      "./Pine Item Pedestal.json": [41460, 289],
      "./Plum Item Pedestal.json": [41462, 290],
      "./Potion Table.json": [41471, 291],
      "./Salvaging Table.json": [41473, 292],
      "./Showcase.json": [41480, 293],
      "./Spectral Item Pedestal.json": [41483, 294],
      "./Workbench.json": [41490, 295]
    };

    function qt(tt) {
      if (!Vt.o(Ot, tt)) return Promise.resolve().then((() => {
        var et = new Error("Cannot find module '" + tt + "'");
        throw et.code = "MODULE_NOT_FOUND", et
      }));
      var et = Ot[tt],
        qt = et[0];
      return Vt.e(et[1]).then((() => Vt(qt)))
    }
    qt.keys = () => Object.keys(Ot), qt.id = 36653, tt.exports = qt
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);