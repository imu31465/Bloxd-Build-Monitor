export const id = 314;
export const ids = [314];
export const modules = {
  41770: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      _TGATextureLoader: () => LD
    });
    var pD = wD(38662);

    function sD(DD) {
      let zD = 0;
      return {
        id_length: DD[zD++],
        colormap_type: DD[zD++],
        image_type: DD[zD++],
        colormap_index: DD[zD++] | DD[zD++] << 8,
        colormap_length: DD[zD++] | DD[zD++] << 8,
        colormap_size: DD[zD++],
        origin: [DD[zD++] | DD[zD++] << 8, DD[zD++] | DD[zD++] << 8],
        width: DD[zD++] | DD[zD++] << 8,
        height: DD[zD++] | DD[zD++] << 8,
        pixel_size: DD[zD++],
        flags: DD[17]
      }
    }

    function KD(DD, zD) {
      if (zD.length < 19) return void pD.d.Error("Unable to load TGA file - Not enough data to contain header");
      let wD = 18;
      const KD = sD(zD);
      if (KD.id_length + wD > zD.length) return void pD.d.Error("Unable to load TGA file - Not enough data");
      wD += KD.id_length;
      let LD, cD = !1,
        gD = !1,
        RD = !1;
      switch (KD.image_type) {
        case 9:
          cD = !0;
        case 1:
          gD = !0;
          break;
        case 10:
          cD = !0;
        case 2:
          break;
        case 11:
          cD = !0;
        case 3:
          RD = !0
      }
      const AD = KD.pixel_size >> 3,
        UD = KD.width * KD.height * AD;
      let fD, ID, BD, GD, hD, nD, MD;
      if (gD && (fD = zD.subarray(wD, wD += KD.colormap_length * (KD.colormap_size >> 3))), cD) {
        let DD, pD, sD;
        LD = new Uint8Array(UD);
        let KD = 0;
        const rD = new Uint8Array(AD);
        for (; wD < UD && KD < UD;)
          if (DD = zD[wD++], pD = 1 + (127 & DD), 128 & DD) {
            for (sD = 0; sD < AD; ++sD) rD[sD] = zD[wD++];
            for (sD = 0; sD < pD; ++sD) LD.set(rD, KD + sD * AD);
            KD += AD * pD
          } else {
            for (pD *= AD, sD = 0; sD < pD; ++sD) LD[KD + sD] = zD[wD++];
            KD += pD
          }
      } else LD = zD.subarray(wD, wD + (gD ? KD.width * KD.height : UD));
      switch ((48 & KD.flags) >> 4) {
        default:
        case 2:
          ID = 0, GD = 1, MD = KD.width, BD = 0, hD = 1, nD = KD.height;
          break;
        case 0:
          ID = 0, GD = 1, MD = KD.width, BD = KD.height - 1, hD = -1, nD = -1;
          break;
        case 3:
          ID = KD.width - 1, GD = -1, MD = -1, BD = 0, hD = 1, nD = KD.height;
          break;
        case 1:
          ID = KD.width - 1, GD = -1, MD = -1, BD = KD.height - 1, hD = -1, nD = -1
      }
      const OD = "_getImageData" + (RD ? "Grey" : "") + KD.pixel_size + "bits",
        JD = rD[OD](KD, fD, LD, BD, hD, nD, ID, GD, MD);
      DD.iI()._uploadDataToTextureDirectly(DD, JD)
    }
    const rD = {
      GetTGAHeader: sD,
      UploadContent: KD,
      _getImageData8bits: function(DD, zD, wD, pD, sD, KD, rD, LD, cD) {
        const gD = wD,
          RD = zD,
          AD = DD.width,
          UD = DD.height;
        let fD, ID, BD, GD = 0;
        const hD = new Uint8Array(AD * UD * 4);
        for (BD = pD; BD !== KD; BD += sD)
          for (ID = rD; ID !== cD; ID += LD, GD++) fD = gD[GD], hD[4 * (ID + AD * BD) + 3] = 255, hD[4 * (ID + AD * BD) + 2] = RD[3 * fD + 0], hD[4 * (ID + AD * BD) + 1] = RD[3 * fD + 1], hD[4 * (ID + AD * BD) + 0] = RD[3 * fD + 2];
        return hD
      },
      _getImageData16bits: function(DD, zD, wD, pD, sD, KD, rD, LD, cD) {
        const gD = wD,
          RD = DD.width,
          AD = DD.height;
        let UD, fD, ID, BD = 0;
        const GD = new Uint8Array(RD * AD * 4);
        for (ID = pD; ID !== KD; ID += sD)
          for (fD = rD; fD !== cD; fD += LD, BD += 2) {
            UD = gD[BD + 0] + (gD[BD + 1] << 8);
            const DD = 255 * ((31744 & UD) >> 10) / 31 | 0,
              zD = 255 * ((992 & UD) >> 5) / 31 | 0,
              wD = 255 * (31 & UD) / 31 | 0;
            GD[4 * (fD + RD * ID) + 0] = DD, GD[4 * (fD + RD * ID) + 1] = zD, GD[4 * (fD + RD * ID) + 2] = wD, GD[4 * (fD + RD * ID) + 3] = 32768 & UD ? 0 : 255
          }
        return GD
      },
      _getImageData24bits: function(DD, zD, wD, pD, sD, KD, rD, LD, cD) {
        const gD = wD,
          RD = DD.width,
          AD = DD.height;
        let UD, fD, ID = 0;
        const BD = new Uint8Array(RD * AD * 4);
        for (fD = pD; fD !== KD; fD += sD)
          for (UD = rD; UD !== cD; UD += LD, ID += 3) BD[4 * (UD + RD * fD) + 3] = 255, BD[4 * (UD + RD * fD) + 2] = gD[ID + 0], BD[4 * (UD + RD * fD) + 1] = gD[ID + 1], BD[4 * (UD + RD * fD) + 0] = gD[ID + 2];
        return BD
      },
      _getImageData32bits: function(DD, zD, wD, pD, sD, KD, rD, LD, cD) {
        const gD = wD,
          RD = DD.width,
          AD = DD.height;
        let UD, fD, ID = 0;
        const BD = new Uint8Array(RD * AD * 4);
        for (fD = pD; fD !== KD; fD += sD)
          for (UD = rD; UD !== cD; UD += LD, ID += 4) BD[4 * (UD + RD * fD) + 2] = gD[ID + 0], BD[4 * (UD + RD * fD) + 1] = gD[ID + 1], BD[4 * (UD + RD * fD) + 0] = gD[ID + 2], BD[4 * (UD + RD * fD) + 3] = gD[ID + 3];
        return BD
      },
      _getImageDataGrey8bits: function(DD, zD, wD, pD, sD, KD, rD, LD, cD) {
        const gD = wD,
          RD = DD.width,
          AD = DD.height;
        let UD, fD, ID, BD = 0;
        const GD = new Uint8Array(RD * AD * 4);
        for (ID = pD; ID !== KD; ID += sD)
          for (fD = rD; fD !== cD; fD += LD, BD++) UD = gD[BD], GD[4 * (fD + RD * ID) + 0] = UD, GD[4 * (fD + RD * ID) + 1] = UD, GD[4 * (fD + RD * ID) + 2] = UD, GD[4 * (fD + RD * ID) + 3] = 255;
        return GD
      },
      _getImageDataGrey16bits: function(DD, zD, wD, pD, sD, KD, rD, LD, cD) {
        const gD = wD,
          RD = DD.width,
          AD = DD.height;
        let UD, fD, ID = 0;
        const BD = new Uint8Array(RD * AD * 4);
        for (fD = pD; fD !== KD; fD += sD)
          for (UD = rD; UD !== cD; UD += LD, ID += 2) BD[4 * (UD + RD * fD) + 0] = gD[ID + 0], BD[4 * (UD + RD * fD) + 1] = gD[ID + 0], BD[4 * (UD + RD * fD) + 2] = gD[ID + 0], BD[4 * (UD + RD * fD) + 3] = gD[ID + 1];
        return BD
      }
    };
    class LD {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(DD, zD, wD) {
        const pD = new Uint8Array(DD.buffer, DD.byteOffset, DD.byteLength),
          rD = sD(pD);
        wD(rD.width, rD.height, zD.generateMipMaps, !1, (() => {
          KD(zD, pD)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);