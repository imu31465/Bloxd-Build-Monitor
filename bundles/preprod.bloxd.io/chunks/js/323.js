export const id = 323;
export const ids = [323];
export const modules = {
  42105: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      _TGATextureLoader: () => sQ
    });
    var wQ = XQ(38956);

    function qQ(QQ) {
      let WQ = 0;
      return {
        id_length: QQ[WQ++],
        colormap_type: QQ[WQ++],
        image_type: QQ[WQ++],
        colormap_index: QQ[WQ++] | QQ[WQ++] << 8,
        colormap_length: QQ[WQ++] | QQ[WQ++] << 8,
        colormap_size: QQ[WQ++],
        origin: [QQ[WQ++] | QQ[WQ++] << 8, QQ[WQ++] | QQ[WQ++] << 8],
        width: QQ[WQ++] | QQ[WQ++] << 8,
        height: QQ[WQ++] | QQ[WQ++] << 8,
        pixel_size: QQ[WQ++],
        flags: QQ[17]
      }
    }

    function TQ(QQ, WQ) {
      if (WQ.length < 19) return void wQ.b.Error("Unable to load TGA file - Not enough data to contain header");
      let XQ = 18;
      const TQ = qQ(WQ);
      if (TQ.id_length + XQ > WQ.length) return void wQ.b.Error("Unable to load TGA file - Not enough data");
      XQ += TQ.id_length;
      let sQ, FQ = !1,
        PQ = !1,
        gQ = !1;
      switch (TQ.image_type) {
        case 9:
          FQ = !0;
        case 1:
          PQ = !0;
          break;
        case 10:
          FQ = !0;
        case 2:
          break;
        case 11:
          FQ = !0;
        case 3:
          gQ = !0
      }
      const JQ = TQ.pixel_size >> 3,
        rQ = TQ.width * TQ.height * JQ;
      let IQ, jQ, BQ, yQ, VQ, DQ, pQ;
      if (PQ && (IQ = WQ.subarray(XQ, XQ += TQ.colormap_length * (TQ.colormap_size >> 3))), FQ) {
        let QQ, wQ, qQ;
        sQ = new Uint8Array(rQ);
        let TQ = 0;
        const zQ = new Uint8Array(JQ);
        for (; XQ < rQ && TQ < rQ;)
          if (QQ = WQ[XQ++], wQ = 1 + (127 & QQ), 128 & QQ) {
            for (qQ = 0; qQ < JQ; ++qQ) zQ[qQ] = WQ[XQ++];
            for (qQ = 0; qQ < wQ; ++qQ) sQ.set(zQ, TQ + qQ * JQ);
            TQ += JQ * wQ
          } else {
            for (wQ *= JQ, qQ = 0; qQ < wQ; ++qQ) sQ[TQ + qQ] = WQ[XQ++];
            TQ += wQ
          }
      } else sQ = WQ.subarray(XQ, XQ + (PQ ? TQ.width * TQ.height : rQ));
      switch ((48 & TQ.flags) >> 4) {
        default:
        case 2:
          jQ = 0, yQ = 1, pQ = TQ.width, BQ = 0, VQ = 1, DQ = TQ.height;
          break;
        case 0:
          jQ = 0, yQ = 1, pQ = TQ.width, BQ = TQ.height - 1, VQ = -1, DQ = -1;
          break;
        case 3:
          jQ = TQ.width - 1, yQ = -1, pQ = -1, BQ = 0, VQ = 1, DQ = TQ.height;
          break;
        case 1:
          jQ = TQ.width - 1, yQ = -1, pQ = -1, BQ = TQ.height - 1, VQ = -1, DQ = -1
      }
      const GQ = "_getImageData" + (gQ ? "Grey" : "") + TQ.pixel_size + "bits",
        UQ = zQ[GQ](TQ, IQ, sQ, BQ, VQ, DQ, jQ, yQ, pQ);
      QQ.Uj()._uploadDataToTextureDirectly(QQ, UQ)
    }
    const zQ = {
      GetTGAHeader: qQ,
      UploadContent: TQ,
      _getImageData8bits: function(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ) {
        const PQ = XQ,
          gQ = WQ,
          JQ = QQ.width,
          rQ = QQ.height;
        let IQ, jQ, BQ, yQ = 0;
        const VQ = new Uint8Array(JQ * rQ * 4);
        for (BQ = wQ; BQ !== TQ; BQ += qQ)
          for (jQ = zQ; jQ !== FQ; jQ += sQ, yQ++) IQ = PQ[yQ], VQ[4 * (jQ + JQ * BQ) + 3] = 255, VQ[4 * (jQ + JQ * BQ) + 2] = gQ[3 * IQ + 0], VQ[4 * (jQ + JQ * BQ) + 1] = gQ[3 * IQ + 1], VQ[4 * (jQ + JQ * BQ) + 0] = gQ[3 * IQ + 2];
        return VQ
      },
      _getImageData16bits: function(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ) {
        const PQ = XQ,
          gQ = QQ.width,
          JQ = QQ.height;
        let rQ, IQ, jQ, BQ = 0;
        const yQ = new Uint8Array(gQ * JQ * 4);
        for (jQ = wQ; jQ !== TQ; jQ += qQ)
          for (IQ = zQ; IQ !== FQ; IQ += sQ, BQ += 2) {
            rQ = PQ[BQ + 0] + (PQ[BQ + 1] << 8);
            const QQ = 255 * ((31744 & rQ) >> 10) / 31 | 0,
              WQ = 255 * ((992 & rQ) >> 5) / 31 | 0,
              XQ = 255 * (31 & rQ) / 31 | 0;
            yQ[4 * (IQ + gQ * jQ) + 0] = QQ, yQ[4 * (IQ + gQ * jQ) + 1] = WQ, yQ[4 * (IQ + gQ * jQ) + 2] = XQ, yQ[4 * (IQ + gQ * jQ) + 3] = 32768 & rQ ? 0 : 255
          }
        return yQ
      },
      _getImageData24bits: function(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ) {
        const PQ = XQ,
          gQ = QQ.width,
          JQ = QQ.height;
        let rQ, IQ, jQ = 0;
        const BQ = new Uint8Array(gQ * JQ * 4);
        for (IQ = wQ; IQ !== TQ; IQ += qQ)
          for (rQ = zQ; rQ !== FQ; rQ += sQ, jQ += 3) BQ[4 * (rQ + gQ * IQ) + 3] = 255, BQ[4 * (rQ + gQ * IQ) + 2] = PQ[jQ + 0], BQ[4 * (rQ + gQ * IQ) + 1] = PQ[jQ + 1], BQ[4 * (rQ + gQ * IQ) + 0] = PQ[jQ + 2];
        return BQ
      },
      _getImageData32bits: function(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ) {
        const PQ = XQ,
          gQ = QQ.width,
          JQ = QQ.height;
        let rQ, IQ, jQ = 0;
        const BQ = new Uint8Array(gQ * JQ * 4);
        for (IQ = wQ; IQ !== TQ; IQ += qQ)
          for (rQ = zQ; rQ !== FQ; rQ += sQ, jQ += 4) BQ[4 * (rQ + gQ * IQ) + 2] = PQ[jQ + 0], BQ[4 * (rQ + gQ * IQ) + 1] = PQ[jQ + 1], BQ[4 * (rQ + gQ * IQ) + 0] = PQ[jQ + 2], BQ[4 * (rQ + gQ * IQ) + 3] = PQ[jQ + 3];
        return BQ
      },
      _getImageDataGrey8bits: function(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ) {
        const PQ = XQ,
          gQ = QQ.width,
          JQ = QQ.height;
        let rQ, IQ, jQ, BQ = 0;
        const yQ = new Uint8Array(gQ * JQ * 4);
        for (jQ = wQ; jQ !== TQ; jQ += qQ)
          for (IQ = zQ; IQ !== FQ; IQ += sQ, BQ++) rQ = PQ[BQ], yQ[4 * (IQ + gQ * jQ) + 0] = rQ, yQ[4 * (IQ + gQ * jQ) + 1] = rQ, yQ[4 * (IQ + gQ * jQ) + 2] = rQ, yQ[4 * (IQ + gQ * jQ) + 3] = 255;
        return yQ
      },
      _getImageDataGrey16bits: function(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ) {
        const PQ = XQ,
          gQ = QQ.width,
          JQ = QQ.height;
        let rQ, IQ, jQ = 0;
        const BQ = new Uint8Array(gQ * JQ * 4);
        for (IQ = wQ; IQ !== TQ; IQ += qQ)
          for (rQ = zQ; rQ !== FQ; rQ += sQ, jQ += 2) BQ[4 * (rQ + gQ * IQ) + 0] = PQ[jQ + 0], BQ[4 * (rQ + gQ * IQ) + 1] = PQ[jQ + 0], BQ[4 * (rQ + gQ * IQ) + 2] = PQ[jQ + 0], BQ[4 * (rQ + gQ * IQ) + 3] = PQ[jQ + 1];
        return BQ
      }
    };
    class sQ {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(QQ, WQ, XQ) {
        const wQ = new Uint8Array(QQ.buffer, QQ.byteOffset, QQ.byteLength),
          zQ = qQ(wQ);
        XQ(zQ.width, zQ.height, WQ.generateMipMaps, !1, (() => {
          TQ(WQ, wQ)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);