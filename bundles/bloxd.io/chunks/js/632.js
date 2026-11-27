export const id = 632;
export const ids = [632];
export const modules = {
  54033: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      _TGATextureLoader: () => LW
    });
    var mW = OW(39911);

    function EW(WW) {
      let iW = 0;
      return {
        id_length: WW[iW++],
        colormap_type: WW[iW++],
        image_type: WW[iW++],
        colormap_index: WW[iW++] | WW[iW++] << 8,
        colormap_length: WW[iW++] | WW[iW++] << 8,
        colormap_size: WW[iW++],
        origin: [WW[iW++] | WW[iW++] << 8, WW[iW++] | WW[iW++] << 8],
        width: WW[iW++] | WW[iW++] << 8,
        height: WW[iW++] | WW[iW++] << 8,
        pixel_size: WW[iW++],
        flags: WW[17]
      }
    }

    function NW(WW, iW) {
      if (iW.length < 19) return void mW.b.Error("Unable to load TGA file - Not enough data to contain header");
      let OW = 18;
      const NW = EW(iW);
      if (NW.id_length + OW > iW.length) return void mW.b.Error("Unable to load TGA file - Not enough data");
      OW += NW.id_length;
      let LW, cW = !1,
        wW = !1,
        tW = !1;
      switch (NW.image_type) {
        case 9:
          cW = !0;
        case 1:
          wW = !0;
          break;
        case 10:
          cW = !0;
        case 2:
          break;
        case 11:
          cW = !0;
        case 3:
          tW = !0
      }
      const ZW = NW.pixel_size >> 3,
        xW = NW.width * NW.height * ZW;
      let lW, AW, bW, jW, UW, kW, sW;
      if (wW && (lW = iW.subarray(OW, OW += NW.colormap_length * (NW.colormap_size >> 3))), cW) {
        let WW, mW, EW;
        LW = new Uint8Array(xW);
        let NW = 0;
        const PW = new Uint8Array(ZW);
        for (; OW < xW && NW < xW;)
          if (WW = iW[OW++], mW = 1 + (127 & WW), 128 & WW) {
            for (EW = 0; EW < ZW; ++EW) PW[EW] = iW[OW++];
            for (EW = 0; EW < mW; ++EW) LW.set(PW, NW + EW * ZW);
            NW += ZW * mW
          } else {
            for (mW *= ZW, EW = 0; EW < mW; ++EW) LW[NW + EW] = iW[OW++];
            NW += mW
          }
      } else LW = iW.subarray(OW, OW + (wW ? NW.width * NW.height : xW));
      switch ((48 & NW.flags) >> 4) {
        default:
        case 2:
          AW = 0, jW = 1, sW = NW.width, bW = 0, UW = 1, kW = NW.height;
          break;
        case 0:
          AW = 0, jW = 1, sW = NW.width, bW = NW.height - 1, UW = -1, kW = -1;
          break;
        case 3:
          AW = NW.width - 1, jW = -1, sW = -1, bW = 0, UW = 1, kW = NW.height;
          break;
        case 1:
          AW = NW.width - 1, jW = -1, sW = -1, bW = NW.height - 1, UW = -1, kW = -1
      }
      const MW = "_getImageData" + (tW ? "Grey" : "") + NW.pixel_size + "bits",
        KW = PW[MW](NW, lW, LW, bW, UW, kW, AW, jW, sW);
      WW.VA()._uploadDataToTextureDirectly(WW, KW)
    }
    const PW = {
      GetTGAHeader: EW,
      UploadContent: NW,
      _getImageData8bits: function(WW, iW, OW, mW, EW, NW, PW, LW, cW) {
        const wW = OW,
          tW = iW,
          ZW = WW.width,
          xW = WW.height;
        let lW, AW, bW, jW = 0;
        const UW = new Uint8Array(ZW * xW * 4);
        for (bW = mW; bW !== NW; bW += EW)
          for (AW = PW; AW !== cW; AW += LW, jW++) lW = wW[jW], UW[4 * (AW + ZW * bW) + 3] = 255, UW[4 * (AW + ZW * bW) + 2] = tW[3 * lW + 0], UW[4 * (AW + ZW * bW) + 1] = tW[3 * lW + 1], UW[4 * (AW + ZW * bW) + 0] = tW[3 * lW + 2];
        return UW
      },
      _getImageData16bits: function(WW, iW, OW, mW, EW, NW, PW, LW, cW) {
        const wW = OW,
          tW = WW.width,
          ZW = WW.height;
        let xW, lW, AW, bW = 0;
        const jW = new Uint8Array(tW * ZW * 4);
        for (AW = mW; AW !== NW; AW += EW)
          for (lW = PW; lW !== cW; lW += LW, bW += 2) {
            xW = wW[bW + 0] + (wW[bW + 1] << 8);
            const WW = 255 * ((31744 & xW) >> 10) / 31 | 0,
              iW = 255 * ((992 & xW) >> 5) / 31 | 0,
              OW = 255 * (31 & xW) / 31 | 0;
            jW[4 * (lW + tW * AW) + 0] = WW, jW[4 * (lW + tW * AW) + 1] = iW, jW[4 * (lW + tW * AW) + 2] = OW, jW[4 * (lW + tW * AW) + 3] = 32768 & xW ? 0 : 255
          }
        return jW
      },
      _getImageData24bits: function(WW, iW, OW, mW, EW, NW, PW, LW, cW) {
        const wW = OW,
          tW = WW.width,
          ZW = WW.height;
        let xW, lW, AW = 0;
        const bW = new Uint8Array(tW * ZW * 4);
        for (lW = mW; lW !== NW; lW += EW)
          for (xW = PW; xW !== cW; xW += LW, AW += 3) bW[4 * (xW + tW * lW) + 3] = 255, bW[4 * (xW + tW * lW) + 2] = wW[AW + 0], bW[4 * (xW + tW * lW) + 1] = wW[AW + 1], bW[4 * (xW + tW * lW) + 0] = wW[AW + 2];
        return bW
      },
      _getImageData32bits: function(WW, iW, OW, mW, EW, NW, PW, LW, cW) {
        const wW = OW,
          tW = WW.width,
          ZW = WW.height;
        let xW, lW, AW = 0;
        const bW = new Uint8Array(tW * ZW * 4);
        for (lW = mW; lW !== NW; lW += EW)
          for (xW = PW; xW !== cW; xW += LW, AW += 4) bW[4 * (xW + tW * lW) + 2] = wW[AW + 0], bW[4 * (xW + tW * lW) + 1] = wW[AW + 1], bW[4 * (xW + tW * lW) + 0] = wW[AW + 2], bW[4 * (xW + tW * lW) + 3] = wW[AW + 3];
        return bW
      },
      _getImageDataGrey8bits: function(WW, iW, OW, mW, EW, NW, PW, LW, cW) {
        const wW = OW,
          tW = WW.width,
          ZW = WW.height;
        let xW, lW, AW, bW = 0;
        const jW = new Uint8Array(tW * ZW * 4);
        for (AW = mW; AW !== NW; AW += EW)
          for (lW = PW; lW !== cW; lW += LW, bW++) xW = wW[bW], jW[4 * (lW + tW * AW) + 0] = xW, jW[4 * (lW + tW * AW) + 1] = xW, jW[4 * (lW + tW * AW) + 2] = xW, jW[4 * (lW + tW * AW) + 3] = 255;
        return jW
      },
      _getImageDataGrey16bits: function(WW, iW, OW, mW, EW, NW, PW, LW, cW) {
        const wW = OW,
          tW = WW.width,
          ZW = WW.height;
        let xW, lW, AW = 0;
        const bW = new Uint8Array(tW * ZW * 4);
        for (lW = mW; lW !== NW; lW += EW)
          for (xW = PW; xW !== cW; xW += LW, AW += 2) bW[4 * (xW + tW * lW) + 0] = wW[AW + 0], bW[4 * (xW + tW * lW) + 1] = wW[AW + 0], bW[4 * (xW + tW * lW) + 2] = wW[AW + 0], bW[4 * (xW + tW * lW) + 3] = wW[AW + 1];
        return bW
      }
    };
    class LW {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(WW, iW, OW) {
        const mW = new Uint8Array(WW.buffer, WW.byteOffset, WW.byteLength),
          PW = EW(mW);
        OW(PW.width, PW.height, iW.generateMipMaps, !1, (() => {
          NW(iW, mW)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);