export const id = 4;
export const ids = [4];
export const modules = {
  36401: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      getBlockModelIconUrl: () => Zk,
      hasBlockModelIcon: () => qk
    });
    var Xk = Ik(36388),
      Tk = Ik(36386);
    const ik = Ik(36409),
      yk = new Map(ik.keys().filter((kk => kk.startsWith("./"))).map((kk => [kk.slice(2, -5), kk]))),
      lk = new Map,
      ak = new Map;

    function qk(kk) {
      return yk.has(kk)
    }

    function Lk(kk) {
      return ik(yk.get(kk))
    }
    async function tk(kk, Fk, Ik) {
      const {
        data: Xk,
        texture: ik
      } = await
      function(kk) {
        let Fk = lk.get(kk);
        return Fk || (Fk = Lk(kk).then((async kk => {
          const Fk = new Image;
          Fk.src = kk.texture, await Fk.decode();
          const Ik = document.createElement("canvas");
          Ik.width = Fk.width, Ik.height = Fk.height;
          const Xk = Ik.getContext("2d");
          return Xk.drawImage(Fk, 0, 0), {
            data: kk,
            texture: {
              width: Fk.width,
              height: Fk.height,
              pixels: Xk.getImageData(0, 0, Fk.width, Fk.height).data
            }
          }
        })), Fk.catch((() => {
          lk.delete(kk)
        })), lk.set(kk, Fk)), Fk
      }(kk), yk = document.createElement("canvas");
      return yk.width = Fk, yk.height = Fk, yk.getContext("2d").putImageData(new ImageData((0, Tk.o)(Xk, ik, Fk, Ik), Fk, Fk), 0, 0), yk.toDataURL()
    }

    function Zk(kk, Fk, Ik) {
      const Tk = `${Fk}|${Ik}|${kk}`;
      let ik = ak.get(Tk);
      return ik || (ik = (0, Xk.e)(kk, (() => Lk(kk)), Fk, Ik).then((Xk => null !== Xk && void 0 !== Xk ? Xk : tk(kk, Fk, Ik))), ik.catch((() => {
        ak.delete(Tk)
      })), ak.set(Tk, ik)), ik
    }
  },
  36409: (kk, Fk, Ik) => {
    var Xk = {
      "./Artisan Bench.json": [41193, 275],
      "./Aspen Item Pedestal.json": [41201, 276],
      "./Cedar Item Pedestal.json": [41208, 277],
      "./Cherry Item Pedestal.json": [41211, 278],
      "./Furnace.json": [41213, 279],
      "./Jungle Item Pedestal.json": [41216, 280],
      "./Mango Item Pedestal.json": [41221, 281],
      "./Palm Item Pedestal.json": [41223, 282],
      "./Pear Item Pedestal.json": [41230, 283],
      "./Pine Item Pedestal.json": [41232, 284],
      "./Plum Item Pedestal.json": [41238, 285],
      "./Potion Table.json": [41241, 286],
      "./Salvaging Table.json": [41250, 287],
      "./Showcase.json": [41253, 288],
      "./Spectral Item Pedestal.json": [41256, 289],
      "./Workbench.json": [41264, 290]
    };

    function Tk(kk) {
      if (!Ik.o(Xk, kk)) return Promise.resolve().then((() => {
        var Fk = new Error("Cannot find module '" + kk + "'");
        throw Fk.code = "MODULE_NOT_FOUND", Fk
      }));
      var Fk = Xk[kk],
        Tk = Fk[0];
      return Ik.e(Fk[1]).then((() => Ik(Tk)))
    }
    Tk.keys = () => Object.keys(Xk), Tk.id = 36409, kk.exports = Tk
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);