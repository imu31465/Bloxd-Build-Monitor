export const id = 284;
export const ids = [284];
export const modules = {
  39699: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      _TGATextureLoader: () => bW
    });
    var CF = SF(37076);

    function AF(FF) {
      let WF = 0;
      return {
        id_length: FF[WF++],
        colormap_type: FF[WF++],
        image_type: FF[WF++],
        colormap_index: FF[WF++] | FF[WF++] << 8,
        colormap_length: FF[WF++] | FF[WF++] << 8,
        colormap_size: FF[WF++],
        origin: [FF[WF++] | FF[WF++] << 8, FF[WF++] | FF[WF++] << 8],
        width: FF[WF++] | FF[WF++] << 8,
        height: FF[WF++] | FF[WF++] << 8,
        pixel_size: FF[WF++],
        flags: FF[17]
      }
    }

    function uF(FF, WF) {
      if (WF.length < 19) return void CF.b.Error("Unable to load TGA file - Not enough data to contain header");
      let SF = 18;
      const uF = AF(WF);
      if (uF.id_length + SF > WF.length) return void CF.b.Error("Unable to load TGA file - Not enough data");
      SF += uF.id_length;
      let bW, dF = !1,
        PF = !1,
        RF = !1;
      switch (uF.image_type) {
        case 9:
          dF = !0;
        case 1:
          PF = !0;
          break;
        case 10:
          dF = !0;
        case 2:
          break;
        case 11:
          dF = !0;
        case 3:
          RF = !0
      }
      const iW = uF.pixel_size >> 3,
        eF = uF.width * uF.height * iW;
      let EF, QF, rW, gW, tW, TF, aW;
      if (PF && (EF = WF.subarray(SF, SF += uF.colormap_length * (uF.colormap_size >> 3))), dF) {
        let FF, CF, AF;
        bW = new Uint8Array(eF);
        let uF = 0;
        const hF = new Uint8Array(iW);
        for (; SF < eF && uF < eF;)
          if (FF = WF[SF++], CF = 1 + (127 & FF), 128 & FF) {
            for (AF = 0; AF < iW; ++AF) hF[AF] = WF[SF++];
            for (AF = 0; AF < CF; ++AF) bW.set(hF, uF + AF * iW);
            uF += iW * CF
          } else {
            for (CF *= iW, AF = 0; AF < CF; ++AF) bW[uF + AF] = WF[SF++];
            uF += CF
          }
      } else bW = WF.subarray(SF, SF + (PF ? uF.width * uF.height : eF));
      switch ((48 & uF.flags) >> 4) {
        default:
        case 2:
          QF = 0, gW = 1, aW = uF.width, rW = 0, tW = 1, TF = uF.height;
          break;
        case 0:
          QF = 0, gW = 1, aW = uF.width, rW = uF.height - 1, tW = -1, TF = -1;
          break;
        case 3:
          QF = uF.width - 1, gW = -1, aW = -1, rW = 0, tW = 1, TF = uF.height;
          break;
        case 1:
          QF = uF.width - 1, gW = -1, aW = -1, rW = uF.height - 1, tW = -1, TF = -1
      }
      const kW = "_getImageData" + (RF ? "Grey" : "") + uF.pixel_size + "bits",
        qW = hF[kW](uF, EF, bW, rW, tW, TF, QF, gW, aW);
      FF.sC()._uploadDataToTextureDirectly(FF, qW)
    }
    const hF = {
      GetTGAHeader: AF,
      UploadContent: uF,
      _getImageData8bits: function(FF, WF, SF, CF, AF, uF, hF, bW, dF) {
        const PF = SF,
          RF = WF,
          iW = FF.width,
          eF = FF.height;
        let EF, QF, rW, gW = 0;
        const tW = new Uint8Array(iW * eF * 4);
        for (rW = CF; rW !== uF; rW += AF)
          for (QF = hF; QF !== dF; QF += bW, gW++) EF = PF[gW], tW[4 * (QF + iW * rW) + 3] = 255, tW[4 * (QF + iW * rW) + 2] = RF[3 * EF + 0], tW[4 * (QF + iW * rW) + 1] = RF[3 * EF + 1], tW[4 * (QF + iW * rW) + 0] = RF[3 * EF + 2];
        return tW
      },
      _getImageData16bits: function(FF, WF, SF, CF, AF, uF, hF, bW, dF) {
        const PF = SF,
          RF = FF.width,
          iW = FF.height;
        let eF, EF, QF, rW = 0;
        const gW = new Uint8Array(RF * iW * 4);
        for (QF = CF; QF !== uF; QF += AF)
          for (EF = hF; EF !== dF; EF += bW, rW += 2) {
            eF = PF[rW + 0] + (PF[rW + 1] << 8);
            const FF = 255 * ((31744 & eF) >> 10) / 31 | 0,
              WF = 255 * ((992 & eF) >> 5) / 31 | 0,
              SF = 255 * (31 & eF) / 31 | 0;
            gW[4 * (EF + RF * QF) + 0] = FF, gW[4 * (EF + RF * QF) + 1] = WF, gW[4 * (EF + RF * QF) + 2] = SF, gW[4 * (EF + RF * QF) + 3] = 32768 & eF ? 0 : 255
          }
        return gW
      },
      _getImageData24bits: function(FF, WF, SF, CF, AF, uF, hF, bW, dF) {
        const PF = SF,
          RF = FF.width,
          iW = FF.height;
        let eF, EF, QF = 0;
        const rW = new Uint8Array(RF * iW * 4);
        for (EF = CF; EF !== uF; EF += AF)
          for (eF = hF; eF !== dF; eF += bW, QF += 3) rW[4 * (eF + RF * EF) + 3] = 255, rW[4 * (eF + RF * EF) + 2] = PF[QF + 0], rW[4 * (eF + RF * EF) + 1] = PF[QF + 1], rW[4 * (eF + RF * EF) + 0] = PF[QF + 2];
        return rW
      },
      _getImageData32bits: function(FF, WF, SF, CF, AF, uF, hF, bW, dF) {
        const PF = SF,
          RF = FF.width,
          iW = FF.height;
        let eF, EF, QF = 0;
        const rW = new Uint8Array(RF * iW * 4);
        for (EF = CF; EF !== uF; EF += AF)
          for (eF = hF; eF !== dF; eF += bW, QF += 4) rW[4 * (eF + RF * EF) + 2] = PF[QF + 0], rW[4 * (eF + RF * EF) + 1] = PF[QF + 1], rW[4 * (eF + RF * EF) + 0] = PF[QF + 2], rW[4 * (eF + RF * EF) + 3] = PF[QF + 3];
        return rW
      },
      _getImageDataGrey8bits: function(FF, WF, SF, CF, AF, uF, hF, bW, dF) {
        const PF = SF,
          RF = FF.width,
          iW = FF.height;
        let eF, EF, QF, rW = 0;
        const gW = new Uint8Array(RF * iW * 4);
        for (QF = CF; QF !== uF; QF += AF)
          for (EF = hF; EF !== dF; EF += bW, rW++) eF = PF[rW], gW[4 * (EF + RF * QF) + 0] = eF, gW[4 * (EF + RF * QF) + 1] = eF, gW[4 * (EF + RF * QF) + 2] = eF, gW[4 * (EF + RF * QF) + 3] = 255;
        return gW
      },
      _getImageDataGrey16bits: function(FF, WF, SF, CF, AF, uF, hF, bW, dF) {
        const PF = SF,
          RF = FF.width,
          iW = FF.height;
        let eF, EF, QF = 0;
        const rW = new Uint8Array(RF * iW * 4);
        for (EF = CF; EF !== uF; EF += AF)
          for (eF = hF; eF !== dF; eF += bW, QF += 2) rW[4 * (eF + RF * EF) + 0] = PF[QF + 0], rW[4 * (eF + RF * EF) + 1] = PF[QF + 0], rW[4 * (eF + RF * EF) + 2] = PF[QF + 0], rW[4 * (eF + RF * EF) + 3] = PF[QF + 1];
        return rW
      }
    };
    class bW {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(FF, WF, SF) {
        const CF = new Uint8Array(FF.buffer, FF.byteOffset, FF.byteLength),
          hF = AF(CF);
        SF(hF.width, hF.height, WF.generateMipMaps, !1, (() => {
          uF(WF, CF)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);