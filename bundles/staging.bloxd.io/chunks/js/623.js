export const id = 623;
export const ids = [623];
export const modules = {
  44504: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      _TGATextureLoader: () => PM
    });
    var OM = iM(39711);

    function SM(MM) {
      let rM = 0;
      return {
        id_length: MM[rM++],
        colormap_type: MM[rM++],
        image_type: MM[rM++],
        colormap_index: MM[rM++] | MM[rM++] << 8,
        colormap_length: MM[rM++] | MM[rM++] << 8,
        colormap_size: MM[rM++],
        origin: [MM[rM++] | MM[rM++] << 8, MM[rM++] | MM[rM++] << 8],
        width: MM[rM++] | MM[rM++] << 8,
        height: MM[rM++] | MM[rM++] << 8,
        pixel_size: MM[rM++],
        flags: MM[17]
      }
    }

    function jM(MM, rM) {
      if (rM.length < 19) return void OM.e.Error("Unable to load TGA file - Not enough data to contain header");
      let iM = 18;
      const jM = SM(rM);
      if (jM.id_length + iM > rM.length) return void OM.e.Error("Unable to load TGA file - Not enough data");
      iM += jM.id_length;
      let PM, nM = !1,
        QM = !1,
        zM = !1;
      switch (jM.image_type) {
        case 9:
          nM = !0;
        case 1:
          QM = !0;
          break;
        case 10:
          nM = !0;
        case 2:
          break;
        case 11:
          nM = !0;
        case 3:
          zM = !0
      }
      const LM = jM.pixel_size >> 3,
        mM = jM.width * jM.height * LM;
      let HM, hM, JM, dM, yM, lM, EM;
      if (QM && (HM = rM.subarray(iM, iM += jM.colormap_length * (jM.colormap_size >> 3))), nM) {
        let MM, OM, SM;
        PM = new Uint8Array(mM);
        let jM = 0;
        const aM = new Uint8Array(LM);
        for (; iM < mM && jM < mM;)
          if (MM = rM[iM++], OM = 1 + (127 & MM), 128 & MM) {
            for (SM = 0; SM < LM; ++SM) aM[SM] = rM[iM++];
            for (SM = 0; SM < OM; ++SM) PM.set(aM, jM + SM * LM);
            jM += LM * OM
          } else {
            for (OM *= LM, SM = 0; SM < OM; ++SM) PM[jM + SM] = rM[iM++];
            jM += OM
          }
      } else PM = rM.subarray(iM, iM + (QM ? jM.width * jM.height : mM));
      switch ((48 & jM.flags) >> 4) {
        default:
        case 2:
          hM = 0, dM = 1, EM = jM.width, JM = 0, yM = 1, lM = jM.height;
          break;
        case 0:
          hM = 0, dM = 1, EM = jM.width, JM = jM.height - 1, yM = -1, lM = -1;
          break;
        case 3:
          hM = jM.width - 1, dM = -1, EM = -1, JM = 0, yM = 1, lM = jM.height;
          break;
        case 1:
          hM = jM.width - 1, dM = -1, EM = -1, JM = jM.height - 1, yM = -1, lM = -1
      }
      const UM = "_getImageData" + (zM ? "Grey" : "") + jM.pixel_size + "bits",
        GM = aM[UM](jM, HM, PM, JM, yM, lM, hM, dM, EM);
      MM.ph()._uploadDataToTextureDirectly(MM, GM)
    }
    const aM = {
      GetTGAHeader: SM,
      UploadContent: jM,
      _getImageData8bits: function(MM, rM, iM, OM, SM, jM, aM, PM, nM) {
        const QM = iM,
          zM = rM,
          LM = MM.width,
          mM = MM.height;
        let HM, hM, JM, dM = 0;
        const yM = new Uint8Array(LM * mM * 4);
        for (JM = OM; JM !== jM; JM += SM)
          for (hM = aM; hM !== nM; hM += PM, dM++) HM = QM[dM], yM[4 * (hM + LM * JM) + 3] = 255, yM[4 * (hM + LM * JM) + 2] = zM[3 * HM + 0], yM[4 * (hM + LM * JM) + 1] = zM[3 * HM + 1], yM[4 * (hM + LM * JM) + 0] = zM[3 * HM + 2];
        return yM
      },
      _getImageData16bits: function(MM, rM, iM, OM, SM, jM, aM, PM, nM) {
        const QM = iM,
          zM = MM.width,
          LM = MM.height;
        let mM, HM, hM, JM = 0;
        const dM = new Uint8Array(zM * LM * 4);
        for (hM = OM; hM !== jM; hM += SM)
          for (HM = aM; HM !== nM; HM += PM, JM += 2) {
            mM = QM[JM + 0] + (QM[JM + 1] << 8);
            const MM = 255 * ((31744 & mM) >> 10) / 31 | 0,
              rM = 255 * ((992 & mM) >> 5) / 31 | 0,
              iM = 255 * (31 & mM) / 31 | 0;
            dM[4 * (HM + zM * hM) + 0] = MM, dM[4 * (HM + zM * hM) + 1] = rM, dM[4 * (HM + zM * hM) + 2] = iM, dM[4 * (HM + zM * hM) + 3] = 32768 & mM ? 0 : 255
          }
        return dM
      },
      _getImageData24bits: function(MM, rM, iM, OM, SM, jM, aM, PM, nM) {
        const QM = iM,
          zM = MM.width,
          LM = MM.height;
        let mM, HM, hM = 0;
        const JM = new Uint8Array(zM * LM * 4);
        for (HM = OM; HM !== jM; HM += SM)
          for (mM = aM; mM !== nM; mM += PM, hM += 3) JM[4 * (mM + zM * HM) + 3] = 255, JM[4 * (mM + zM * HM) + 2] = QM[hM + 0], JM[4 * (mM + zM * HM) + 1] = QM[hM + 1], JM[4 * (mM + zM * HM) + 0] = QM[hM + 2];
        return JM
      },
      _getImageData32bits: function(MM, rM, iM, OM, SM, jM, aM, PM, nM) {
        const QM = iM,
          zM = MM.width,
          LM = MM.height;
        let mM, HM, hM = 0;
        const JM = new Uint8Array(zM * LM * 4);
        for (HM = OM; HM !== jM; HM += SM)
          for (mM = aM; mM !== nM; mM += PM, hM += 4) JM[4 * (mM + zM * HM) + 2] = QM[hM + 0], JM[4 * (mM + zM * HM) + 1] = QM[hM + 1], JM[4 * (mM + zM * HM) + 0] = QM[hM + 2], JM[4 * (mM + zM * HM) + 3] = QM[hM + 3];
        return JM
      },
      _getImageDataGrey8bits: function(MM, rM, iM, OM, SM, jM, aM, PM, nM) {
        const QM = iM,
          zM = MM.width,
          LM = MM.height;
        let mM, HM, hM, JM = 0;
        const dM = new Uint8Array(zM * LM * 4);
        for (hM = OM; hM !== jM; hM += SM)
          for (HM = aM; HM !== nM; HM += PM, JM++) mM = QM[JM], dM[4 * (HM + zM * hM) + 0] = mM, dM[4 * (HM + zM * hM) + 1] = mM, dM[4 * (HM + zM * hM) + 2] = mM, dM[4 * (HM + zM * hM) + 3] = 255;
        return dM
      },
      _getImageDataGrey16bits: function(MM, rM, iM, OM, SM, jM, aM, PM, nM) {
        const QM = iM,
          zM = MM.width,
          LM = MM.height;
        let mM, HM, hM = 0;
        const JM = new Uint8Array(zM * LM * 4);
        for (HM = OM; HM !== jM; HM += SM)
          for (mM = aM; mM !== nM; mM += PM, hM += 2) JM[4 * (mM + zM * HM) + 0] = QM[hM + 0], JM[4 * (mM + zM * HM) + 1] = QM[hM + 0], JM[4 * (mM + zM * HM) + 2] = QM[hM + 0], JM[4 * (mM + zM * HM) + 3] = QM[hM + 1];
        return JM
      }
    };
    class PM {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(MM, rM, iM) {
        const OM = new Uint8Array(MM.buffer, MM.byteOffset, MM.byteLength),
          aM = SM(OM);
        iM(aM.width, aM.height, rM.generateMipMaps, !1, (() => {
          jM(rM, OM)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);