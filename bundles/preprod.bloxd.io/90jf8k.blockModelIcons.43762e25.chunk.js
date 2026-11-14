export const id = 3;
export const ids = [3];
export const modules = {
  34971: (FF, WF, SF) => {
    var CF = {
      "./Artisan Bench.json": [38937, 243],
      "./Aspen Item Pedestal.json": [38941, 244],
      "./Cedar Item Pedestal.json": [38947, 245],
      "./Cherry Item Pedestal.json": [38954, 246],
      "./Furnace.json": [38958, 247],
      "./Jungle Item Pedestal.json": [38966, 248],
      "./Mango Item Pedestal.json": [38970, 249],
      "./Palm Item Pedestal.json": [38977, 250],
      "./Pear Item Pedestal.json": [38984, 251],
      "./Pine Item Pedestal.json": [38991, 252],
      "./Plum Item Pedestal.json": [38995, 253],
      "./Potion Table.json": [39e3, 254],
      "./Salvaging Table.json": [39003, 255],
      "./Showcase.json": [39010, 256],
      "./Spectral Item Pedestal.json": [39013, 257],
      "./Workbench.json": [39022, 258]
    };

    function AF(FF) {
      if (!SF.o(CF, FF)) return Promise.resolve().then((() => {
        var WF = new Error("Cannot find module '" + FF + "'");
        throw WF.code = "MODULE_NOT_FOUND", WF
      }));
      var WF = CF[FF],
        AF = WF[0];
      return SF.e(WF[1]).then((() => SF(AF)))
    }
    AF.keys = () => Object.keys(CF), AF.id = 34971, FF.exports = AF
  },
  34967: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      getBlockModelIconUrl: () => iW,
      hasBlockModelIcon: () => RF
    });
    const CF = 1 / 32,
      AF = [15, 15, 15];

    function uF(FF, WF, SF, uF) {
      const {
        vertices: hF,
        uvs: bW,
        indices: dF,
        shades: PF
      } = FF, RF = SF * CF, iW = SF - 2 * RF, eF = new Float32Array(hF.length);
      for (let CF = 0; CF < hF.length; CF += 3) eF[CF] = RF + hF[CF] * iW, eF[CF + 1] = RF + hF[CF + 1] * iW, eF[CF + 2] = hF[CF + 2];
      const EF = new Float32Array(SF * SF).fill(-1 / 0),
        QF = new Uint8ClampedArray(SF * SF * 4),
        rW = 255 * FF.alphaCutoff;
      for (let CF = 0; CF < dF.length; CF += 3) {
        const [FF, AF, uF] = [dF[CF], dF[CF + 1], dF[CF + 2]], [hF, RF, iW] = [3 * FF, 3 * AF, 3 * uF], [gW, tW, TF, aW, kW, qW] = [eF[hF], eF[hF + 1], eF[RF], eF[RF + 1], eF[iW], eF[iW + 1]], VF = (TF - gW) * (qW - tW) - (kW - gW) * (aW - tW);
        if (Math.abs(VF) < 1e-9) continue;
        const NF = PF[CF / 3],
          [DF, LF, mW, OF, xW, ZF] = [bW[2 * FF], bW[2 * FF + 1], bW[2 * AF], bW[2 * AF + 1], bW[2 * uF], bW[2 * uF + 1]],
          oF = Math.max(0, Math.floor(Math.min(gW, TF, kW))),
          YF = Math.min(SF - 1, Math.ceil(Math.max(gW, TF, kW))),
          MF = Math.max(0, Math.floor(Math.min(tW, aW, qW))),
          cW = Math.min(SF - 1, Math.ceil(Math.max(tW, aW, qW)));
        for (let CF = MF; CF <= cW; CF++)
          for (let FF = oF; FF <= YF; FF++) {
            const [AF, uF] = [FF + .5, CF + .5], bW = ((AF - gW) * (qW - tW) - (kW - gW) * (uF - tW)) / VF, dF = ((TF - gW) * (uF - tW) - (AF - gW) * (aW - tW)) / VF, PF = 1 - bW - dF;
            if (PF < 0 || bW < 0 || dF < 0) continue;
            const oF = PF * eF[hF + 2] + bW * eF[RF + 2] + dF * eF[iW + 2],
              YF = CF * SF + FF;
            if (oF <= EF[YF]) continue;
            const MF = Math.max(0, Math.min(WF.width - 1, Math.floor((PF * DF + bW * mW + dF * xW) * WF.width))),
              cW = 4 * (Math.max(0, Math.min(WF.height - 1, Math.floor((PF * LF + bW * OF + dF * ZF) * WF.height))) * WF.width + MF);
            WF.pixels[cW + 3] < rW || (EF[YF] = oF, QF[4 * YF] = WF.pixels[cW] * NF, QF[4 * YF + 1] = WF.pixels[cW + 1] * NF, QF[4 * YF + 2] = WF.pixels[cW + 2] * NF, QF[4 * YF + 3] = 255)
          }
      }
      return function(FF, WF, SF) {
        const CF = (SF, CF) => SF < 0 || CF < 0 || SF >= WF || CF >= WF || 0 === FF[4 * (CF * WF + SF) + 3],
          uF = [];
        for (let AF = 0; AF < WF; AF++)
          for (let FF = 0; FF < WF; FF++)
            if (!CF(FF, AF)) FF: for (let hF = -SF; hF <= SF; hF++) {
              const bW = SF - Math.abs(hF);
              for (let SF = -bW; SF <= bW; SF++)
                if (CF(FF + SF, AF + hF)) {
                  uF.push(AF * WF + FF);
                  break FF
                }
            }
        for (const hF of uF) FF.set(AF, 4 * hF)
      }(QF, SF, uF), QF
    }
    const hF = SF(34971),
      bW = new Map(hF.keys().filter((FF => FF.startsWith("./"))).map((FF => [FF.slice(2, -5), FF]))),
      dF = new Map,
      PF = new Map;

    function RF(FF) {
      return bW.has(FF)
    }

    function iW(FF, WF, SF) {
      const CF = `${WF}|${SF}|${FF}`;
      let AF = PF.get(CF);
      return AF || (AF = function(FF) {
        let WF = dF.get(FF);
        return WF || (WF = hF(bW.get(FF)).then((async FF => {
          const WF = new Image;
          WF.src = FF.texture, await WF.decode();
          const SF = document.createElement("canvas");
          SF.width = WF.width, SF.height = WF.height;
          const CF = SF.getContext("2d");
          return CF.drawImage(WF, 0, 0), {
            data: FF,
            texture: {
              width: WF.width,
              height: WF.height,
              pixels: CF.getImageData(0, 0, WF.width, WF.height).data
            }
          }
        })), WF.catch((() => {
          dF.delete(FF)
        })), dF.set(FF, WF)), WF
      }(FF).then((FF => {
        let {
          data: CF,
          texture: AF
        } = FF;
        const hF = document.createElement("canvas");
        return hF.width = WF, hF.height = WF, hF.getContext("2d").putImageData(new ImageData(uF(CF, AF, WF, SF), WF, WF), 0, 0), hF.toDataURL()
      })), AF.catch((() => {
        PF.delete(CF)
      })), PF.set(CF, AF)), AF
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);