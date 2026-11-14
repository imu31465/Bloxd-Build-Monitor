export const id = 284;
export const ids = [284];
export const modules = {
  39315: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      _TGATextureLoader: () => bR
    });
    var wW = MW(36721);

    function CW(WW) {
      let RW = 0;
      return {
        id_length: WW[RW++],
        colormap_type: WW[RW++],
        image_type: WW[RW++],
        colormap_index: WW[RW++] | WW[RW++] << 8,
        colormap_length: WW[RW++] | WW[RW++] << 8,
        colormap_size: WW[RW++],
        origin: [WW[RW++] | WW[RW++] << 8, WW[RW++] | WW[RW++] << 8],
        width: WW[RW++] | WW[RW++] << 8,
        height: WW[RW++] | WW[RW++] << 8,
        pixel_size: WW[RW++],
        flags: WW[17]
      }
    }

    function zR(WW, RW) {
      if (RW.length < 19) return void wW.b.Error("Unable to load TGA file - Not enough data to contain header");
      let MW = 18;
      const zR = CW(RW);
      if (zR.id_length + MW > RW.length) return void wW.b.Error("Unable to load TGA file - Not enough data");
      MW += zR.id_length;
      let bR, yR = !1,
        NW = !1,
        eW = !1;
      switch (zR.image_type) {
        case 9:
          yR = !0;
        case 1:
          NW = !0;
          break;
        case 10:
          yR = !0;
        case 2:
          break;
        case 11:
          yR = !0;
        case 3:
          eW = !0
      }
      const BW = zR.pixel_size >> 3,
        tR = zR.width * zR.height * BW;
      let TW, gR, iR, YW, JW, PW, IW;
      if (NW && (TW = RW.subarray(MW, MW += zR.colormap_length * (zR.colormap_size >> 3))), yR) {
        let WW, wW, CW;
        bR = new Uint8Array(tR);
        let zR = 0;
        const AW = new Uint8Array(BW);
        for (; MW < tR && zR < tR;)
          if (WW = RW[MW++], wW = 1 + (127 & WW), 128 & WW) {
            for (CW = 0; CW < BW; ++CW) AW[CW] = RW[MW++];
            for (CW = 0; CW < wW; ++CW) bR.set(AW, zR + CW * BW);
            zR += BW * wW
          } else {
            for (wW *= BW, CW = 0; CW < wW; ++CW) bR[zR + CW] = RW[MW++];
            zR += wW
          }
      } else bR = RW.subarray(MW, MW + (NW ? zR.width * zR.height : tR));
      switch ((48 & zR.flags) >> 4) {
        default:
        case 2:
          gR = 0, YW = 1, IW = zR.width, iR = 0, JW = 1, PW = zR.height;
          break;
        case 0:
          gR = 0, YW = 1, IW = zR.width, iR = zR.height - 1, JW = -1, PW = -1;
          break;
        case 3:
          gR = zR.width - 1, YW = -1, IW = -1, iR = 0, JW = 1, PW = zR.height;
          break;
        case 1:
          gR = zR.width - 1, YW = -1, IW = -1, iR = zR.height - 1, JW = -1, PW = -1
      }
      const oW = "_getImageData" + (eW ? "Grey" : "") + zR.pixel_size + "bits",
        lW = AW[oW](zR, TW, bR, iR, JW, PW, gR, YW, IW);
      WW.mC()._uploadDataToTextureDirectly(WW, lW)
    }
    const AW = {
      GetTGAHeader: CW,
      UploadContent: zR,
      _getImageData8bits: function(WW, RW, MW, wW, CW, zR, AW, bR, yR) {
        const NW = MW,
          eW = RW,
          BW = WW.width,
          tR = WW.height;
        let TW, gR, iR, YW = 0;
        const JW = new Uint8Array(BW * tR * 4);
        for (iR = wW; iR !== zR; iR += CW)
          for (gR = AW; gR !== yR; gR += bR, YW++) TW = NW[YW], JW[4 * (gR + BW * iR) + 3] = 255, JW[4 * (gR + BW * iR) + 2] = eW[3 * TW + 0], JW[4 * (gR + BW * iR) + 1] = eW[3 * TW + 1], JW[4 * (gR + BW * iR) + 0] = eW[3 * TW + 2];
        return JW
      },
      _getImageData16bits: function(WW, RW, MW, wW, CW, zR, AW, bR, yR) {
        const NW = MW,
          eW = WW.width,
          BW = WW.height;
        let tR, TW, gR, iR = 0;
        const YW = new Uint8Array(eW * BW * 4);
        for (gR = wW; gR !== zR; gR += CW)
          for (TW = AW; TW !== yR; TW += bR, iR += 2) {
            tR = NW[iR + 0] + (NW[iR + 1] << 8);
            const WW = 255 * ((31744 & tR) >> 10) / 31 | 0,
              RW = 255 * ((992 & tR) >> 5) / 31 | 0,
              MW = 255 * (31 & tR) / 31 | 0;
            YW[4 * (TW + eW * gR) + 0] = WW, YW[4 * (TW + eW * gR) + 1] = RW, YW[4 * (TW + eW * gR) + 2] = MW, YW[4 * (TW + eW * gR) + 3] = 32768 & tR ? 0 : 255
          }
        return YW
      },
      _getImageData24bits: function(WW, RW, MW, wW, CW, zR, AW, bR, yR) {
        const NW = MW,
          eW = WW.width,
          BW = WW.height;
        let tR, TW, gR = 0;
        const iR = new Uint8Array(eW * BW * 4);
        for (TW = wW; TW !== zR; TW += CW)
          for (tR = AW; tR !== yR; tR += bR, gR += 3) iR[4 * (tR + eW * TW) + 3] = 255, iR[4 * (tR + eW * TW) + 2] = NW[gR + 0], iR[4 * (tR + eW * TW) + 1] = NW[gR + 1], iR[4 * (tR + eW * TW) + 0] = NW[gR + 2];
        return iR
      },
      _getImageData32bits: function(WW, RW, MW, wW, CW, zR, AW, bR, yR) {
        const NW = MW,
          eW = WW.width,
          BW = WW.height;
        let tR, TW, gR = 0;
        const iR = new Uint8Array(eW * BW * 4);
        for (TW = wW; TW !== zR; TW += CW)
          for (tR = AW; tR !== yR; tR += bR, gR += 4) iR[4 * (tR + eW * TW) + 2] = NW[gR + 0], iR[4 * (tR + eW * TW) + 1] = NW[gR + 1], iR[4 * (tR + eW * TW) + 0] = NW[gR + 2], iR[4 * (tR + eW * TW) + 3] = NW[gR + 3];
        return iR
      },
      _getImageDataGrey8bits: function(WW, RW, MW, wW, CW, zR, AW, bR, yR) {
        const NW = MW,
          eW = WW.width,
          BW = WW.height;
        let tR, TW, gR, iR = 0;
        const YW = new Uint8Array(eW * BW * 4);
        for (gR = wW; gR !== zR; gR += CW)
          for (TW = AW; TW !== yR; TW += bR, iR++) tR = NW[iR], YW[4 * (TW + eW * gR) + 0] = tR, YW[4 * (TW + eW * gR) + 1] = tR, YW[4 * (TW + eW * gR) + 2] = tR, YW[4 * (TW + eW * gR) + 3] = 255;
        return YW
      },
      _getImageDataGrey16bits: function(WW, RW, MW, wW, CW, zR, AW, bR, yR) {
        const NW = MW,
          eW = WW.width,
          BW = WW.height;
        let tR, TW, gR = 0;
        const iR = new Uint8Array(eW * BW * 4);
        for (TW = wW; TW !== zR; TW += CW)
          for (tR = AW; tR !== yR; tR += bR, gR += 2) iR[4 * (tR + eW * TW) + 0] = NW[gR + 0], iR[4 * (tR + eW * TW) + 1] = NW[gR + 0], iR[4 * (tR + eW * TW) + 2] = NW[gR + 0], iR[4 * (tR + eW * TW) + 3] = NW[gR + 1];
        return iR
      }
    };
    class bR {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(WW, RW, MW) {
        const wW = new Uint8Array(WW.buffer, WW.byteOffset, WW.byteLength),
          AW = CW(wW);
        MW(AW.width, AW.height, RW.generateMipMaps, !1, (() => {
          zR(RW, wW)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);