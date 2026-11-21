export const id = 305;
export const ids = [305];
export const modules = {
  41260: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      _TGATextureLoader: () => kQ
    });
    var LQ = wQ(38203);

    function qQ(QQ) {
      let FQ = 0;
      return {
        id_length: QQ[FQ++],
        colormap_type: QQ[FQ++],
        image_type: QQ[FQ++],
        colormap_index: QQ[FQ++] | QQ[FQ++] << 8,
        colormap_length: QQ[FQ++] | QQ[FQ++] << 8,
        colormap_size: QQ[FQ++],
        origin: [QQ[FQ++] | QQ[FQ++] << 8, QQ[FQ++] | QQ[FQ++] << 8],
        width: QQ[FQ++] | QQ[FQ++] << 8,
        height: QQ[FQ++] | QQ[FQ++] << 8,
        pixel_size: QQ[FQ++],
        flags: QQ[17]
      }
    }

    function oQ(QQ, FQ) {
      if (FQ.length < 19) return void LQ.c.Error("Unable to load TGA file - Not enough data to contain header");
      let wQ = 18;
      const oQ = qQ(FQ);
      if (oQ.id_length + wQ > FQ.length) return void LQ.c.Error("Unable to load TGA file - Not enough data");
      wQ += oQ.id_length;
      let kQ, vQ = !1,
        mQ = !1,
        uQ = !1;
      switch (oQ.image_type) {
        case 9:
          vQ = !0;
        case 1:
          mQ = !0;
          break;
        case 10:
          vQ = !0;
        case 2:
          break;
        case 11:
          vQ = !0;
        case 3:
          uQ = !0
      }
      const HQ = oQ.pixel_size >> 3,
        bQ = oQ.width * oQ.height * HQ;
      let YQ, xQ, AQ, tQ, eQ, MQ, GQ;
      if (mQ && (YQ = FQ.subarray(wQ, wQ += oQ.colormap_length * (oQ.colormap_size >> 3))), vQ) {
        let QQ, LQ, qQ;
        kQ = new Uint8Array(bQ);
        let oQ = 0;
        const DQ = new Uint8Array(HQ);
        for (; wQ < bQ && oQ < bQ;)
          if (QQ = FQ[wQ++], LQ = 1 + (127 & QQ), 128 & QQ) {
            for (qQ = 0; qQ < HQ; ++qQ) DQ[qQ] = FQ[wQ++];
            for (qQ = 0; qQ < LQ; ++qQ) kQ.set(DQ, oQ + qQ * HQ);
            oQ += HQ * LQ
          } else {
            for (LQ *= HQ, qQ = 0; qQ < LQ; ++qQ) kQ[oQ + qQ] = FQ[wQ++];
            oQ += LQ
          }
      } else kQ = FQ.subarray(wQ, wQ + (mQ ? oQ.width * oQ.height : bQ));
      switch ((48 & oQ.flags) >> 4) {
        default:
        case 2:
          xQ = 0, tQ = 1, GQ = oQ.width, AQ = 0, eQ = 1, MQ = oQ.height;
          break;
        case 0:
          xQ = 0, tQ = 1, GQ = oQ.width, AQ = oQ.height - 1, eQ = -1, MQ = -1;
          break;
        case 3:
          xQ = oQ.width - 1, tQ = -1, GQ = -1, AQ = 0, eQ = 1, MQ = oQ.height;
          break;
        case 1:
          xQ = oQ.width - 1, tQ = -1, GQ = -1, AQ = oQ.height - 1, eQ = -1, MQ = -1
      }
      const pQ = "_getImageData" + (uQ ? "Grey" : "") + oQ.pixel_size + "bits",
        cQ = DQ[pQ](oQ, YQ, kQ, AQ, eQ, MQ, xQ, tQ, GQ);
      QQ.Wx()._uploadDataToTextureDirectly(QQ, cQ)
    }
    const DQ = {
      GetTGAHeader: qQ,
      UploadContent: oQ,
      _getImageData8bits: function(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ) {
        const mQ = wQ,
          uQ = FQ,
          HQ = QQ.width,
          bQ = QQ.height;
        let YQ, xQ, AQ, tQ = 0;
        const eQ = new Uint8Array(HQ * bQ * 4);
        for (AQ = LQ; AQ !== oQ; AQ += qQ)
          for (xQ = DQ; xQ !== vQ; xQ += kQ, tQ++) YQ = mQ[tQ], eQ[4 * (xQ + HQ * AQ) + 3] = 255, eQ[4 * (xQ + HQ * AQ) + 2] = uQ[3 * YQ + 0], eQ[4 * (xQ + HQ * AQ) + 1] = uQ[3 * YQ + 1], eQ[4 * (xQ + HQ * AQ) + 0] = uQ[3 * YQ + 2];
        return eQ
      },
      _getImageData16bits: function(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ) {
        const mQ = wQ,
          uQ = QQ.width,
          HQ = QQ.height;
        let bQ, YQ, xQ, AQ = 0;
        const tQ = new Uint8Array(uQ * HQ * 4);
        for (xQ = LQ; xQ !== oQ; xQ += qQ)
          for (YQ = DQ; YQ !== vQ; YQ += kQ, AQ += 2) {
            bQ = mQ[AQ + 0] + (mQ[AQ + 1] << 8);
            const QQ = 255 * ((31744 & bQ) >> 10) / 31 | 0,
              FQ = 255 * ((992 & bQ) >> 5) / 31 | 0,
              wQ = 255 * (31 & bQ) / 31 | 0;
            tQ[4 * (YQ + uQ * xQ) + 0] = QQ, tQ[4 * (YQ + uQ * xQ) + 1] = FQ, tQ[4 * (YQ + uQ * xQ) + 2] = wQ, tQ[4 * (YQ + uQ * xQ) + 3] = 32768 & bQ ? 0 : 255
          }
        return tQ
      },
      _getImageData24bits: function(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ) {
        const mQ = wQ,
          uQ = QQ.width,
          HQ = QQ.height;
        let bQ, YQ, xQ = 0;
        const AQ = new Uint8Array(uQ * HQ * 4);
        for (YQ = LQ; YQ !== oQ; YQ += qQ)
          for (bQ = DQ; bQ !== vQ; bQ += kQ, xQ += 3) AQ[4 * (bQ + uQ * YQ) + 3] = 255, AQ[4 * (bQ + uQ * YQ) + 2] = mQ[xQ + 0], AQ[4 * (bQ + uQ * YQ) + 1] = mQ[xQ + 1], AQ[4 * (bQ + uQ * YQ) + 0] = mQ[xQ + 2];
        return AQ
      },
      _getImageData32bits: function(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ) {
        const mQ = wQ,
          uQ = QQ.width,
          HQ = QQ.height;
        let bQ, YQ, xQ = 0;
        const AQ = new Uint8Array(uQ * HQ * 4);
        for (YQ = LQ; YQ !== oQ; YQ += qQ)
          for (bQ = DQ; bQ !== vQ; bQ += kQ, xQ += 4) AQ[4 * (bQ + uQ * YQ) + 2] = mQ[xQ + 0], AQ[4 * (bQ + uQ * YQ) + 1] = mQ[xQ + 1], AQ[4 * (bQ + uQ * YQ) + 0] = mQ[xQ + 2], AQ[4 * (bQ + uQ * YQ) + 3] = mQ[xQ + 3];
        return AQ
      },
      _getImageDataGrey8bits: function(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ) {
        const mQ = wQ,
          uQ = QQ.width,
          HQ = QQ.height;
        let bQ, YQ, xQ, AQ = 0;
        const tQ = new Uint8Array(uQ * HQ * 4);
        for (xQ = LQ; xQ !== oQ; xQ += qQ)
          for (YQ = DQ; YQ !== vQ; YQ += kQ, AQ++) bQ = mQ[AQ], tQ[4 * (YQ + uQ * xQ) + 0] = bQ, tQ[4 * (YQ + uQ * xQ) + 1] = bQ, tQ[4 * (YQ + uQ * xQ) + 2] = bQ, tQ[4 * (YQ + uQ * xQ) + 3] = 255;
        return tQ
      },
      _getImageDataGrey16bits: function(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ) {
        const mQ = wQ,
          uQ = QQ.width,
          HQ = QQ.height;
        let bQ, YQ, xQ = 0;
        const AQ = new Uint8Array(uQ * HQ * 4);
        for (YQ = LQ; YQ !== oQ; YQ += qQ)
          for (bQ = DQ; bQ !== vQ; bQ += kQ, xQ += 2) AQ[4 * (bQ + uQ * YQ) + 0] = mQ[xQ + 0], AQ[4 * (bQ + uQ * YQ) + 1] = mQ[xQ + 0], AQ[4 * (bQ + uQ * YQ) + 2] = mQ[xQ + 0], AQ[4 * (bQ + uQ * YQ) + 3] = mQ[xQ + 1];
        return AQ
      }
    };
    class kQ {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(QQ, FQ, wQ) {
        const LQ = new Uint8Array(QQ.buffer, QQ.byteOffset, QQ.byteLength),
          DQ = qQ(LQ);
        wQ(DQ.width, DQ.height, FQ.generateMipMaps, !1, (() => {
          oQ(FQ, LQ)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);