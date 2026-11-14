export const id = 4;
export const ids = [4];
export const modules = {
  35110: (cB, Bc, nc) => {
    var Vc = {
      "./Artisan Bench.json": [39057, 248],
      "./Aspen Item Pedestal.json": [39061, 249],
      "./Cedar Item Pedestal.json": [39067, 250],
      "./Cherry Item Pedestal.json": [39072, 251],
      "./Furnace.json": [39078, 252],
      "./Jungle Item Pedestal.json": [39082, 253],
      "./Mango Item Pedestal.json": [39087, 254],
      "./Palm Item Pedestal.json": [39089, 255],
      "./Pear Item Pedestal.json": [39097, 256],
      "./Pine Item Pedestal.json": [39102, 257],
      "./Plum Item Pedestal.json": [39111, 258],
      "./Potion Table.json": [39118, 259],
      "./Salvaging Table.json": [39120, 260],
      "./Showcase.json": [39128, 261],
      "./Spectral Item Pedestal.json": [39136, 262],
      "./Workbench.json": [39139, 263]
    };

    function Ic(cB) {
      if (!nc.o(Vc, cB)) return Promise.resolve().then((() => {
        var Bc = new Error("Cannot find module '" + cB + "'");
        throw Bc.code = "MODULE_NOT_FOUND", Bc
      }));
      var Bc = Vc[cB],
        Ic = Bc[0];
      return nc.e(Bc[1]).then((() => nc(Ic)))
    }
    Ic.keys = () => Object.keys(Vc), Ic.id = 35110, cB.exports = Ic
  },
  35106: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      getBlockModelIconUrl: () => Pc,
      hasBlockModelIcon: () => Mc
    });
    var Vc = nc(35093);
    const Ic = nc(35110),
      rB = new Map(Ic.keys().filter((cB => cB.startsWith("./"))).map((cB => [cB.slice(2, -5), cB]))),
      uc = new Map,
      sc = new Map;

    function Mc(cB) {
      return rB.has(cB)
    }

    function Pc(cB, Bc, nc) {
      const Mc = `${Bc}|${nc}|${cB}`;
      let Pc = sc.get(Mc);
      return Pc || (Pc = function(cB) {
        let Bc = uc.get(cB);
        return Bc || (Bc = Ic(rB.get(cB)).then((async cB => {
          const Bc = new Image;
          Bc.src = cB.texture, await Bc.decode();
          const nc = document.createElement("canvas");
          nc.width = Bc.width, nc.height = Bc.height;
          const Vc = nc.getContext("2d");
          return Vc.drawImage(Bc, 0, 0), {
            data: cB,
            texture: {
              width: Bc.width,
              height: Bc.height,
              pixels: Vc.getImageData(0, 0, Bc.width, Bc.height).data
            }
          }
        })), Bc.catch((() => {
          uc.delete(cB)
        })), uc.set(cB, Bc)), Bc
      }(cB).then((cB => {
        let {
          data: Ic,
          texture: rB
        } = cB;
        const uc = document.createElement("canvas");
        return uc.width = Bc, uc.height = Bc, uc.getContext("2d").putImageData(new ImageData((0, Vc.j)(Ic, rB, Bc, nc), Bc, Bc), 0, 0), uc.toDataURL()
      })), Pc.catch((() => {
        sc.delete(Mc)
      })), sc.set(Mc, Pc)), Pc
    }
  },
  35093: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => rB,
      f: () => sc,
      j: () => uc
    });
    const Vc = 1 / 32,
      Ic = [15, 15, 15],
      rB = {
        top: 1,
        left: .85,
        right: .7
      };

    function uc(cB, Bc, nc, Ic) {
      const {
        vertices: rB,
        uvs: uc,
        indices: Mc,
        shades: Pc
      } = cB, qB = nc * Vc, Oc = nc - 2 * qB, Tc = new Float32Array(rB.length);
      for (let Vc = 0; Vc < rB.length; Vc += 3) Tc[Vc] = qB + rB[Vc] * Oc, Tc[Vc + 1] = qB + rB[Vc + 1] * Oc, Tc[Vc + 2] = rB[Vc + 2];
      const fc = new Float32Array(nc * nc).fill(-1 / 0),
        mB = new Uint8ClampedArray(nc * nc * 4),
        ec = 255 * cB.alphaCutoff;
      for (let Vc = 0; Vc < Mc.length; Vc += 3) {
        const [cB, Ic, rB] = [Mc[Vc], Mc[Vc + 1], Mc[Vc + 2]], [sc, qB, Oc] = [3 * cB, 3 * Ic, 3 * rB], [tB, Sc, yB, zB, pc, hc] = [Tc[sc], Tc[sc + 1], Tc[qB], Tc[qB + 1], Tc[Oc], Tc[Oc + 1]], aB = (yB - tB) * (hc - Sc) - (pc - tB) * (zB - Sc);
        if (Math.abs(aB) < 1e-9) continue;
        const lc = Pc[Vc / 3],
          [Yc, Lc, gB, Uc, bB, Zc] = [uc[2 * cB], uc[2 * cB + 1], uc[2 * Ic], uc[2 * Ic + 1], uc[2 * rB], uc[2 * rB + 1]],
          Qc = Math.max(0, Math.floor(Math.min(tB, yB, pc))),
          Cc = Math.min(nc - 1, Math.ceil(Math.max(tB, yB, pc))),
          vB = Math.max(0, Math.floor(Math.min(Sc, zB, hc))),
          Dc = Math.min(nc - 1, Math.ceil(Math.max(Sc, zB, hc)));
        for (let Vc = vB; Vc <= Dc; Vc++)
          for (let cB = Qc; cB <= Cc; cB++) {
            const [Ic, rB] = [cB + .5, Vc + .5], uc = ((Ic - tB) * (hc - Sc) - (pc - tB) * (rB - Sc)) / aB, Mc = ((yB - tB) * (rB - Sc) - (Ic - tB) * (zB - Sc)) / aB, Pc = 1 - uc - Mc;
            if (Pc < 0 || uc < 0 || Mc < 0) continue;
            const Qc = Pc * Tc[sc + 2] + uc * Tc[qB + 2] + Mc * Tc[Oc + 2],
              Cc = Vc * nc + cB;
            if (Qc <= fc[Cc]) continue;
            const vB = Math.max(0, Math.min(Bc.width - 1, Math.floor((Pc * Yc + uc * gB + Mc * bB) * Bc.width))),
              Dc = 4 * (Math.max(0, Math.min(Bc.height - 1, Math.floor((Pc * Lc + uc * Uc + Mc * Zc) * Bc.height))) * Bc.width + vB);
            Bc.pixels[Dc + 3] < ec || (fc[Cc] = Qc, mB[4 * Cc] = Bc.pixels[Dc] * lc, mB[4 * Cc + 1] = Bc.pixels[Dc + 1] * lc, mB[4 * Cc + 2] = Bc.pixels[Dc + 2] * lc, mB[4 * Cc + 3] = 255)
          }
      }
      return sc(mB, nc, Ic), mB
    }

    function sc(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Bc => 0 !== cB[4 * Bc + 3];
      const rB = (cB, nc) => cB < 0 || nc < 0 || cB >= Bc || nc >= Bc || !Vc(nc * Bc + cB),
        uc = [];
      for (let Ic = 0; Ic < Bc; Ic++)
        for (let cB = 0; cB < Bc; cB++)
          if (!rB(cB, Ic)) cB: for (let Vc = -nc; Vc <= nc; Vc++) {
            const sc = nc - Math.abs(Vc);
            for (let nc = -sc; nc <= sc; nc++)
              if (rB(cB + nc, Ic + Vc)) {
                uc.push(Ic * Bc + cB);
                break cB
              }
          }
      for (const sc of uc) cB.set(Ic, 4 * sc), cB[4 * sc + 3] = 255
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);