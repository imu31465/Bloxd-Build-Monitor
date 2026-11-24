export const id = 4;
export const ids = [4];
export const modules = {
  36642: (pp, ip, cp) => {
    var Op = {
      "./Artisan Bench.json": [41402, 280],
      "./Aspen Item Pedestal.json": [41410, 281],
      "./Cedar Item Pedestal.json": [41418, 282],
      "./Cherry Item Pedestal.json": [41427, 283],
      "./Furnace.json": [41432, 284],
      "./Jungle Item Pedestal.json": [41440, 285],
      "./Mango Item Pedestal.json": [41446, 286],
      "./Palm Item Pedestal.json": [41454, 287],
      "./Pear Item Pedestal.json": [41461, 288],
      "./Pine Item Pedestal.json": [41467, 289],
      "./Plum Item Pedestal.json": [41469, 290],
      "./Potion Table.json": [41478, 291],
      "./Salvaging Table.json": [41481, 292],
      "./Showcase.json": [41484, 293],
      "./Spectral Item Pedestal.json": [41492, 294],
      "./Workbench.json": [41498, 295]
    };

    function op(pp) {
      if (!cp.o(Op, pp)) return Promise.resolve().then((() => {
        var ip = new Error("Cannot find module '" + pp + "'");
        throw ip.code = "MODULE_NOT_FOUND", ip
      }));
      var ip = Op[pp],
        op = ip[0];
      return cp.e(ip[1]).then((() => cp(op)))
    }
    op.keys = () => Object.keys(Op), op.id = 36642, pp.exports = op
  },
  36635: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      getBlockModelIconUrl: () => Pp,
      hasBlockModelIcon: () => Yp
    });
    var Op = cp(36622),
      op = cp(36618);
    const Ip = cp(36642),
      Sp = new Map(Ip.keys().filter((pp => pp.startsWith("./"))).map((pp => [pp.slice(2, -5), pp]))),
      xp = new Map,
      Lp = new Map;

    function Yp(pp) {
      return Sp.has(pp)
    }

    function Dp(pp) {
      return Ip(Sp.get(pp))
    }
    async function Ap(pp, ip, cp) {
      const {
        data: Op,
        texture: Ip
      } = await
      function(pp) {
        let ip = xp.get(pp);
        return ip || (ip = Dp(pp).then((async pp => {
          const ip = new Image;
          ip.src = pp.texture, await ip.decode();
          const cp = document.createElement("canvas");
          cp.width = ip.width, cp.height = ip.height;
          const Op = cp.getContext("2d");
          return Op.drawImage(ip, 0, 0), {
            data: pp,
            texture: {
              width: ip.width,
              height: ip.height,
              pixels: Op.getImageData(0, 0, ip.width, ip.height).data
            }
          }
        })), ip.catch((() => {
          xp.delete(pp)
        })), xp.set(pp, ip)), ip
      }(pp), Sp = document.createElement("canvas");
      return Sp.width = ip, Sp.height = ip, Sp.getContext("2d").putImageData(new ImageData((0, op.m)(Op, Ip, ip, cp), ip, ip), 0, 0), Sp.toDataURL()
    }

    function Pp(pp, ip, cp) {
      const op = `${ip}|${cp}|${pp}`;
      let Ip = Lp.get(op);
      return Ip || (Ip = (0, Op.f)(pp, (() => Dp(pp)), ip, cp).then((Op => null !== Op && void 0 !== Op ? Op : Ap(pp, ip, cp))), Ip.catch((() => {
        Lp.delete(op)
      })), Lp.set(op, Ip)), Ip
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);