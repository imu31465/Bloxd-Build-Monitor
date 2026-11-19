export const id = 304;
export const ids = [304];
export const modules = {
  40969: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      _TGATextureLoader: () => bD
    });
    var ID = cD(38048);

    function pD(DD) {
      let CD = 0;
      return {
        id_length: DD[CD++],
        colormap_type: DD[CD++],
        image_type: DD[CD++],
        colormap_index: DD[CD++] | DD[CD++] << 8,
        colormap_length: DD[CD++] | DD[CD++] << 8,
        colormap_size: DD[CD++],
        origin: [DD[CD++] | DD[CD++] << 8, DD[CD++] | DD[CD++] << 8],
        width: DD[CD++] | DD[CD++] << 8,
        height: DD[CD++] | DD[CD++] << 8,
        pixel_size: DD[CD++],
        flags: DD[17]
      }
    }

    function iD(DD, CD) {
      if (CD.length < 19) return void ID.e.Error("Unable to load TGA file - Not enough data to contain header");
      let cD = 18;
      const iD = pD(CD);
      if (iD.id_length + cD > CD.length) return void ID.e.Error("Unable to load TGA file - Not enough data");
      cD += iD.id_length;
      let bD, QD = !1,
        wD = !1,
        SD = !1;
      switch (iD.image_type) {
        case 9:
          QD = !0;
        case 1:
          wD = !0;
          break;
        case 10:
          QD = !0;
        case 2:
          break;
        case 11:
          QD = !0;
        case 3:
          SD = !0
      }
      const BD = iD.pixel_size >> 3,
        yD = iD.width * iD.height * BD;
      let MD, tD, ZD, oD, vD, ND, gD;
      if (wD && (MD = CD.subarray(cD, cD += iD.colormap_length * (iD.colormap_size >> 3))), QD) {
        let DD, ID, pD;
        bD = new Uint8Array(yD);
        let iD = 0;
        const fD = new Uint8Array(BD);
        for (; cD < yD && iD < yD;)
          if (DD = CD[cD++], ID = 1 + (127 & DD), 128 & DD) {
            for (pD = 0; pD < BD; ++pD) fD[pD] = CD[cD++];
            for (pD = 0; pD < ID; ++pD) bD.set(fD, iD + pD * BD);
            iD += BD * ID
          } else {
            for (ID *= BD, pD = 0; pD < ID; ++pD) bD[iD + pD] = CD[cD++];
            iD += ID
          }
      } else bD = CD.subarray(cD, cD + (wD ? iD.width * iD.height : yD));
      switch ((48 & iD.flags) >> 4) {
        default:
        case 2:
          tD = 0, oD = 1, gD = iD.width, ZD = 0, vD = 1, ND = iD.height;
          break;
        case 0:
          tD = 0, oD = 1, gD = iD.width, ZD = iD.height - 1, vD = -1, ND = -1;
          break;
        case 3:
          tD = iD.width - 1, oD = -1, gD = -1, ZD = 0, vD = 1, ND = iD.height;
          break;
        case 1:
          tD = iD.width - 1, oD = -1, gD = -1, ZD = iD.height - 1, vD = -1, ND = -1
      }
      const XD = "_getImageData" + (SD ? "Grey" : "") + iD.pixel_size + "bits",
        mD = fD[XD](iD, MD, bD, ZD, vD, ND, tD, oD, gD);
      DD.DZ()._uploadDataToTextureDirectly(DD, mD)
    }
    const fD = {
      GetTGAHeader: pD,
      UploadContent: iD,
      _getImageData8bits: function(DD, CD, cD, ID, pD, iD, fD, bD, QD) {
        const wD = cD,
          SD = CD,
          BD = DD.width,
          yD = DD.height;
        let MD, tD, ZD, oD = 0;
        const vD = new Uint8Array(BD * yD * 4);
        for (ZD = ID; ZD !== iD; ZD += pD)
          for (tD = fD; tD !== QD; tD += bD, oD++) MD = wD[oD], vD[4 * (tD + BD * ZD) + 3] = 255, vD[4 * (tD + BD * ZD) + 2] = SD[3 * MD + 0], vD[4 * (tD + BD * ZD) + 1] = SD[3 * MD + 1], vD[4 * (tD + BD * ZD) + 0] = SD[3 * MD + 2];
        return vD
      },
      _getImageData16bits: function(DD, CD, cD, ID, pD, iD, fD, bD, QD) {
        const wD = cD,
          SD = DD.width,
          BD = DD.height;
        let yD, MD, tD, ZD = 0;
        const oD = new Uint8Array(SD * BD * 4);
        for (tD = ID; tD !== iD; tD += pD)
          for (MD = fD; MD !== QD; MD += bD, ZD += 2) {
            yD = wD[ZD + 0] + (wD[ZD + 1] << 8);
            const DD = 255 * ((31744 & yD) >> 10) / 31 | 0,
              CD = 255 * ((992 & yD) >> 5) / 31 | 0,
              cD = 255 * (31 & yD) / 31 | 0;
            oD[4 * (MD + SD * tD) + 0] = DD, oD[4 * (MD + SD * tD) + 1] = CD, oD[4 * (MD + SD * tD) + 2] = cD, oD[4 * (MD + SD * tD) + 3] = 32768 & yD ? 0 : 255
          }
        return oD
      },
      _getImageData24bits: function(DD, CD, cD, ID, pD, iD, fD, bD, QD) {
        const wD = cD,
          SD = DD.width,
          BD = DD.height;
        let yD, MD, tD = 0;
        const ZD = new Uint8Array(SD * BD * 4);
        for (MD = ID; MD !== iD; MD += pD)
          for (yD = fD; yD !== QD; yD += bD, tD += 3) ZD[4 * (yD + SD * MD) + 3] = 255, ZD[4 * (yD + SD * MD) + 2] = wD[tD + 0], ZD[4 * (yD + SD * MD) + 1] = wD[tD + 1], ZD[4 * (yD + SD * MD) + 0] = wD[tD + 2];
        return ZD
      },
      _getImageData32bits: function(DD, CD, cD, ID, pD, iD, fD, bD, QD) {
        const wD = cD,
          SD = DD.width,
          BD = DD.height;
        let yD, MD, tD = 0;
        const ZD = new Uint8Array(SD * BD * 4);
        for (MD = ID; MD !== iD; MD += pD)
          for (yD = fD; yD !== QD; yD += bD, tD += 4) ZD[4 * (yD + SD * MD) + 2] = wD[tD + 0], ZD[4 * (yD + SD * MD) + 1] = wD[tD + 1], ZD[4 * (yD + SD * MD) + 0] = wD[tD + 2], ZD[4 * (yD + SD * MD) + 3] = wD[tD + 3];
        return ZD
      },
      _getImageDataGrey8bits: function(DD, CD, cD, ID, pD, iD, fD, bD, QD) {
        const wD = cD,
          SD = DD.width,
          BD = DD.height;
        let yD, MD, tD, ZD = 0;
        const oD = new Uint8Array(SD * BD * 4);
        for (tD = ID; tD !== iD; tD += pD)
          for (MD = fD; MD !== QD; MD += bD, ZD++) yD = wD[ZD], oD[4 * (MD + SD * tD) + 0] = yD, oD[4 * (MD + SD * tD) + 1] = yD, oD[4 * (MD + SD * tD) + 2] = yD, oD[4 * (MD + SD * tD) + 3] = 255;
        return oD
      },
      _getImageDataGrey16bits: function(DD, CD, cD, ID, pD, iD, fD, bD, QD) {
        const wD = cD,
          SD = DD.width,
          BD = DD.height;
        let yD, MD, tD = 0;
        const ZD = new Uint8Array(SD * BD * 4);
        for (MD = ID; MD !== iD; MD += pD)
          for (yD = fD; yD !== QD; yD += bD, tD += 2) ZD[4 * (yD + SD * MD) + 0] = wD[tD + 0], ZD[4 * (yD + SD * MD) + 1] = wD[tD + 0], ZD[4 * (yD + SD * MD) + 2] = wD[tD + 0], ZD[4 * (yD + SD * MD) + 3] = wD[tD + 1];
        return ZD
      }
    };
    class bD {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(DD, CD, cD) {
        const ID = new Uint8Array(DD.buffer, DD.byteOffset, DD.byteLength),
          fD = pD(ID);
        cD(fD.width, fD.height, CD.generateMipMaps, !1, (() => {
          iD(CD, ID)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);