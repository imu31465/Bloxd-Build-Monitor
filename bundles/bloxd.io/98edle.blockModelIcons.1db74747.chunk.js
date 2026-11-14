export const id = 3;
export const ids = [3];
export const modules = {
  34681: (WW, RW, MW) => {
    var wW = {
      "./Artisan Bench.json": [38559, 243],
      "./Aspen Item Pedestal.json": [38562, 244],
      "./Cedar Item Pedestal.json": [38570, 245],
      "./Cherry Item Pedestal.json": [38575, 246],
      "./Furnace.json": [38583, 247],
      "./Jungle Item Pedestal.json": [38590, 248],
      "./Mango Item Pedestal.json": [38599, 249],
      "./Palm Item Pedestal.json": [38602, 250],
      "./Pear Item Pedestal.json": [38610, 251],
      "./Pine Item Pedestal.json": [38613, 252],
      "./Plum Item Pedestal.json": [38619, 253],
      "./Potion Table.json": [38623, 254],
      "./Salvaging Table.json": [38631, 255],
      "./Showcase.json": [38640, 256],
      "./Spectral Item Pedestal.json": [38647, 257],
      "./Workbench.json": [38655, 258]
    };

    function CW(WW) {
      if (!MW.o(wW, WW)) return Promise.resolve().then((() => {
        var RW = new Error("Cannot find module '" + WW + "'");
        throw RW.code = "MODULE_NOT_FOUND", RW
      }));
      var RW = wW[WW],
        CW = RW[0];
      return MW.e(RW[1]).then((() => MW(CW)))
    }
    CW.keys = () => Object.keys(wW), CW.id = 34681, WW.exports = CW
  },
  34676: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      getBlockModelIconUrl: () => BW,
      hasBlockModelIcon: () => eW
    });
    const wW = 1 / 32,
      CW = [15, 15, 15];

    function zR(WW, RW, MW, zR) {
      const {
        vertices: AW,
        uvs: bR,
        indices: yR,
        shades: NW
      } = WW, eW = MW * wW, BW = MW - 2 * eW, tR = new Float32Array(AW.length);
      for (let wW = 0; wW < AW.length; wW += 3) tR[wW] = eW + AW[wW] * BW, tR[wW + 1] = eW + AW[wW + 1] * BW, tR[wW + 2] = AW[wW + 2];
      const TW = new Float32Array(MW * MW).fill(-1 / 0),
        gR = new Uint8ClampedArray(MW * MW * 4),
        iR = 255 * WW.alphaCutoff;
      for (let wW = 0; wW < yR.length; wW += 3) {
        const [WW, CW, zR] = [yR[wW], yR[wW + 1], yR[wW + 2]], [AW, eW, BW] = [3 * WW, 3 * CW, 3 * zR], [YW, JW, PW, IW, oW, lW] = [tR[AW], tR[AW + 1], tR[eW], tR[eW + 1], tR[BW], tR[BW + 1]], FW = (PW - YW) * (lW - JW) - (oW - YW) * (IW - JW);
        if (Math.abs(FW) < 1e-9) continue;
        const fW = NW[wW / 3],
          [QW, rR, cR, XW, jR, kR] = [bR[2 * WW], bR[2 * WW + 1], bR[2 * CW], bR[2 * CW + 1], bR[2 * zR], bR[2 * zR + 1]],
          aR = Math.max(0, Math.floor(Math.min(YW, PW, oW))),
          sW = Math.min(MW - 1, Math.ceil(Math.max(YW, PW, oW))),
          dW = Math.max(0, Math.floor(Math.min(JW, IW, lW))),
          pW = Math.min(MW - 1, Math.ceil(Math.max(JW, IW, lW)));
        for (let wW = dW; wW <= pW; wW++)
          for (let WW = aR; WW <= sW; WW++) {
            const [CW, zR] = [WW + .5, wW + .5], bR = ((CW - YW) * (lW - JW) - (oW - YW) * (zR - JW)) / FW, yR = ((PW - YW) * (zR - JW) - (CW - YW) * (IW - JW)) / FW, NW = 1 - bR - yR;
            if (NW < 0 || bR < 0 || yR < 0) continue;
            const aR = NW * tR[AW + 2] + bR * tR[eW + 2] + yR * tR[BW + 2],
              sW = wW * MW + WW;
            if (aR <= TW[sW]) continue;
            const dW = Math.max(0, Math.min(RW.width - 1, Math.floor((NW * QW + bR * cR + yR * jR) * RW.width))),
              pW = 4 * (Math.max(0, Math.min(RW.height - 1, Math.floor((NW * rR + bR * XW + yR * kR) * RW.height))) * RW.width + dW);
            RW.pixels[pW + 3] < iR || (TW[sW] = aR, gR[4 * sW] = RW.pixels[pW] * fW, gR[4 * sW + 1] = RW.pixels[pW + 1] * fW, gR[4 * sW + 2] = RW.pixels[pW + 2] * fW, gR[4 * sW + 3] = 255)
          }
      }
      return function(WW, RW, MW) {
        const wW = (MW, wW) => MW < 0 || wW < 0 || MW >= RW || wW >= RW || 0 === WW[4 * (wW * RW + MW) + 3],
          zR = [];
        for (let CW = 0; CW < RW; CW++)
          for (let WW = 0; WW < RW; WW++)
            if (!wW(WW, CW)) WW: for (let AW = -MW; AW <= MW; AW++) {
              const bR = MW - Math.abs(AW);
              for (let MW = -bR; MW <= bR; MW++)
                if (wW(WW + MW, CW + AW)) {
                  zR.push(CW * RW + WW);
                  break WW
                }
            }
        for (const AW of zR) WW.set(CW, 4 * AW)
      }(gR, MW, zR), gR
    }
    const AW = MW(34681),
      bR = new Map(AW.keys().filter((WW => WW.startsWith("./"))).map((WW => [WW.slice(2, -5), WW]))),
      yR = new Map,
      NW = new Map;

    function eW(WW) {
      return bR.has(WW)
    }

    function BW(WW, RW, MW) {
      const wW = `${RW}|${MW}|${WW}`;
      let CW = NW.get(wW);
      return CW || (CW = function(WW) {
        let RW = yR.get(WW);
        return RW || (RW = AW(bR.get(WW)).then((async WW => {
          const RW = new Image;
          RW.src = WW.texture, await RW.decode();
          const MW = document.createElement("canvas");
          MW.width = RW.width, MW.height = RW.height;
          const wW = MW.getContext("2d");
          return wW.drawImage(RW, 0, 0), {
            data: WW,
            texture: {
              width: RW.width,
              height: RW.height,
              pixels: wW.getImageData(0, 0, RW.width, RW.height).data
            }
          }
        })), RW.catch((() => {
          yR.delete(WW)
        })), yR.set(WW, RW)), RW
      }(WW).then((WW => {
        let {
          data: wW,
          texture: CW
        } = WW;
        const AW = document.createElement("canvas");
        return AW.width = RW, AW.height = RW, AW.getContext("2d").putImageData(new ImageData(zR(wW, CW, RW, MW), RW, RW), 0, 0), AW.toDataURL()
      })), CW.catch((() => {
        NW.delete(wW)
      })), NW.set(wW, CW)), CW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);