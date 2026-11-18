export const id = 294;
export const ids = [294];
export const modules = {
  40564: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      _TGATextureLoader: () => AJ
    });
    var FJ = ZJ(37660);

    function UJ(JJ) {
      let cJ = 0;
      return {
        id_length: JJ[cJ++],
        colormap_type: JJ[cJ++],
        image_type: JJ[cJ++],
        colormap_index: JJ[cJ++] | JJ[cJ++] << 8,
        colormap_length: JJ[cJ++] | JJ[cJ++] << 8,
        colormap_size: JJ[cJ++],
        origin: [JJ[cJ++] | JJ[cJ++] << 8, JJ[cJ++] | JJ[cJ++] << 8],
        width: JJ[cJ++] | JJ[cJ++] << 8,
        height: JJ[cJ++] | JJ[cJ++] << 8,
        pixel_size: JJ[cJ++],
        flags: JJ[17]
      }
    }

    function eJ(JJ, cJ) {
      if (cJ.length < 19) return void FJ.c.Error("Unable to load TGA file - Not enough data to contain header");
      let ZJ = 18;
      const eJ = UJ(cJ);
      if (eJ.id_length + ZJ > cJ.length) return void FJ.c.Error("Unable to load TGA file - Not enough data");
      ZJ += eJ.id_length;
      let AJ, qJ = !1,
        jJ = !1,
        YJ = !1;
      switch (eJ.image_type) {
        case 9:
          qJ = !0;
        case 1:
          jJ = !0;
          break;
        case 10:
          qJ = !0;
        case 2:
          break;
        case 11:
          qJ = !0;
        case 3:
          YJ = !0
      }
      const hJ = eJ.pixel_size >> 3,
        DJ = eJ.width * eJ.height * hJ;
      let sJ, nJ, GJ, fJ, xJ, rJ, vJ;
      if (jJ && (sJ = cJ.subarray(ZJ, ZJ += eJ.colormap_length * (eJ.colormap_size >> 3))), qJ) {
        let JJ, FJ, UJ;
        AJ = new Uint8Array(DJ);
        let eJ = 0;
        const XJ = new Uint8Array(hJ);
        for (; ZJ < DJ && eJ < DJ;)
          if (JJ = cJ[ZJ++], FJ = 1 + (127 & JJ), 128 & JJ) {
            for (UJ = 0; UJ < hJ; ++UJ) XJ[UJ] = cJ[ZJ++];
            for (UJ = 0; UJ < FJ; ++UJ) AJ.set(XJ, eJ + UJ * hJ);
            eJ += hJ * FJ
          } else {
            for (FJ *= hJ, UJ = 0; UJ < FJ; ++UJ) AJ[eJ + UJ] = cJ[ZJ++];
            eJ += FJ
          }
      } else AJ = cJ.subarray(ZJ, ZJ + (jJ ? eJ.width * eJ.height : DJ));
      switch ((48 & eJ.flags) >> 4) {
        default:
        case 2:
          nJ = 0, fJ = 1, vJ = eJ.width, GJ = 0, xJ = 1, rJ = eJ.height;
          break;
        case 0:
          nJ = 0, fJ = 1, vJ = eJ.width, GJ = eJ.height - 1, xJ = -1, rJ = -1;
          break;
        case 3:
          nJ = eJ.width - 1, fJ = -1, vJ = -1, GJ = 0, xJ = 1, rJ = eJ.height;
          break;
        case 1:
          nJ = eJ.width - 1, fJ = -1, vJ = -1, GJ = eJ.height - 1, xJ = -1, rJ = -1
      }
      const mJ = "_getImageData" + (YJ ? "Grey" : "") + eJ.pixel_size + "bits",
        QJ = XJ[mJ](eJ, sJ, AJ, GJ, xJ, rJ, nJ, fJ, vJ);
      JJ.gn()._uploadDataToTextureDirectly(JJ, QJ)
    }
    const XJ = {
      GetTGAHeader: UJ,
      UploadContent: eJ,
      _getImageData8bits: function(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ) {
        const jJ = ZJ,
          YJ = cJ,
          hJ = JJ.width,
          DJ = JJ.height;
        let sJ, nJ, GJ, fJ = 0;
        const xJ = new Uint8Array(hJ * DJ * 4);
        for (GJ = FJ; GJ !== eJ; GJ += UJ)
          for (nJ = XJ; nJ !== qJ; nJ += AJ, fJ++) sJ = jJ[fJ], xJ[4 * (nJ + hJ * GJ) + 3] = 255, xJ[4 * (nJ + hJ * GJ) + 2] = YJ[3 * sJ + 0], xJ[4 * (nJ + hJ * GJ) + 1] = YJ[3 * sJ + 1], xJ[4 * (nJ + hJ * GJ) + 0] = YJ[3 * sJ + 2];
        return xJ
      },
      _getImageData16bits: function(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ) {
        const jJ = ZJ,
          YJ = JJ.width,
          hJ = JJ.height;
        let DJ, sJ, nJ, GJ = 0;
        const fJ = new Uint8Array(YJ * hJ * 4);
        for (nJ = FJ; nJ !== eJ; nJ += UJ)
          for (sJ = XJ; sJ !== qJ; sJ += AJ, GJ += 2) {
            DJ = jJ[GJ + 0] + (jJ[GJ + 1] << 8);
            const JJ = 255 * ((31744 & DJ) >> 10) / 31 | 0,
              cJ = 255 * ((992 & DJ) >> 5) / 31 | 0,
              ZJ = 255 * (31 & DJ) / 31 | 0;
            fJ[4 * (sJ + YJ * nJ) + 0] = JJ, fJ[4 * (sJ + YJ * nJ) + 1] = cJ, fJ[4 * (sJ + YJ * nJ) + 2] = ZJ, fJ[4 * (sJ + YJ * nJ) + 3] = 32768 & DJ ? 0 : 255
          }
        return fJ
      },
      _getImageData24bits: function(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ) {
        const jJ = ZJ,
          YJ = JJ.width,
          hJ = JJ.height;
        let DJ, sJ, nJ = 0;
        const GJ = new Uint8Array(YJ * hJ * 4);
        for (sJ = FJ; sJ !== eJ; sJ += UJ)
          for (DJ = XJ; DJ !== qJ; DJ += AJ, nJ += 3) GJ[4 * (DJ + YJ * sJ) + 3] = 255, GJ[4 * (DJ + YJ * sJ) + 2] = jJ[nJ + 0], GJ[4 * (DJ + YJ * sJ) + 1] = jJ[nJ + 1], GJ[4 * (DJ + YJ * sJ) + 0] = jJ[nJ + 2];
        return GJ
      },
      _getImageData32bits: function(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ) {
        const jJ = ZJ,
          YJ = JJ.width,
          hJ = JJ.height;
        let DJ, sJ, nJ = 0;
        const GJ = new Uint8Array(YJ * hJ * 4);
        for (sJ = FJ; sJ !== eJ; sJ += UJ)
          for (DJ = XJ; DJ !== qJ; DJ += AJ, nJ += 4) GJ[4 * (DJ + YJ * sJ) + 2] = jJ[nJ + 0], GJ[4 * (DJ + YJ * sJ) + 1] = jJ[nJ + 1], GJ[4 * (DJ + YJ * sJ) + 0] = jJ[nJ + 2], GJ[4 * (DJ + YJ * sJ) + 3] = jJ[nJ + 3];
        return GJ
      },
      _getImageDataGrey8bits: function(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ) {
        const jJ = ZJ,
          YJ = JJ.width,
          hJ = JJ.height;
        let DJ, sJ, nJ, GJ = 0;
        const fJ = new Uint8Array(YJ * hJ * 4);
        for (nJ = FJ; nJ !== eJ; nJ += UJ)
          for (sJ = XJ; sJ !== qJ; sJ += AJ, GJ++) DJ = jJ[GJ], fJ[4 * (sJ + YJ * nJ) + 0] = DJ, fJ[4 * (sJ + YJ * nJ) + 1] = DJ, fJ[4 * (sJ + YJ * nJ) + 2] = DJ, fJ[4 * (sJ + YJ * nJ) + 3] = 255;
        return fJ
      },
      _getImageDataGrey16bits: function(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ) {
        const jJ = ZJ,
          YJ = JJ.width,
          hJ = JJ.height;
        let DJ, sJ, nJ = 0;
        const GJ = new Uint8Array(YJ * hJ * 4);
        for (sJ = FJ; sJ !== eJ; sJ += UJ)
          for (DJ = XJ; DJ !== qJ; DJ += AJ, nJ += 2) GJ[4 * (DJ + YJ * sJ) + 0] = jJ[nJ + 0], GJ[4 * (DJ + YJ * sJ) + 1] = jJ[nJ + 0], GJ[4 * (DJ + YJ * sJ) + 2] = jJ[nJ + 0], GJ[4 * (DJ + YJ * sJ) + 3] = jJ[nJ + 1];
        return GJ
      }
    };
    class AJ {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(JJ, cJ, ZJ) {
        const FJ = new Uint8Array(JJ.buffer, JJ.byteOffset, JJ.byteLength),
          XJ = UJ(FJ);
        ZJ(XJ.width, XJ.height, cJ.generateMipMaps, !1, (() => {
          eJ(cJ, FJ)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);