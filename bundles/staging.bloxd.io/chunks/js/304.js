export const id = 304;
export const ids = [304];
export const modules = {
  41207: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      _TGATextureLoader: () => TU
    });
    var tU = gU(38236);

    function pU(UU) {
      let RU = 0;
      return {
        id_length: UU[RU++],
        colormap_type: UU[RU++],
        image_type: UU[RU++],
        colormap_index: UU[RU++] | UU[RU++] << 8,
        colormap_length: UU[RU++] | UU[RU++] << 8,
        colormap_size: UU[RU++],
        origin: [UU[RU++] | UU[RU++] << 8, UU[RU++] | UU[RU++] << 8],
        width: UU[RU++] | UU[RU++] << 8,
        height: UU[RU++] | UU[RU++] << 8,
        pixel_size: UU[RU++],
        flags: UU[17]
      }
    }

    function EU(UU, RU) {
      if (RU.length < 19) return void tU.e.Error("Unable to load TGA file - Not enough data to contain header");
      let gU = 18;
      const EU = pU(RU);
      if (EU.id_length + gU > RU.length) return void tU.e.Error("Unable to load TGA file - Not enough data");
      gU += EU.id_length;
      let TU, qU = !1,
        KU = !1,
        cU = !1;
      switch (EU.image_type) {
        case 9:
          qU = !0;
        case 1:
          KU = !0;
          break;
        case 10:
          qU = !0;
        case 2:
          break;
        case 11:
          qU = !0;
        case 3:
          cU = !0
      }
      const GU = EU.pixel_size >> 3,
        jU = EU.width * EU.height * GU;
      let uU, CU, hU, QU, eU, WU, fU;
      if (KU && (uU = RU.subarray(gU, gU += EU.colormap_length * (EU.colormap_size >> 3))), qU) {
        let UU, tU, pU;
        TU = new Uint8Array(jU);
        let EU = 0;
        const PU = new Uint8Array(GU);
        for (; gU < jU && EU < jU;)
          if (UU = RU[gU++], tU = 1 + (127 & UU), 128 & UU) {
            for (pU = 0; pU < GU; ++pU) PU[pU] = RU[gU++];
            for (pU = 0; pU < tU; ++pU) TU.set(PU, EU + pU * GU);
            EU += GU * tU
          } else {
            for (tU *= GU, pU = 0; pU < tU; ++pU) TU[EU + pU] = RU[gU++];
            EU += tU
          }
      } else TU = RU.subarray(gU, gU + (KU ? EU.width * EU.height : jU));
      switch ((48 & EU.flags) >> 4) {
        default:
        case 2:
          CU = 0, QU = 1, fU = EU.width, hU = 0, eU = 1, WU = EU.height;
          break;
        case 0:
          CU = 0, QU = 1, fU = EU.width, hU = EU.height - 1, eU = -1, WU = -1;
          break;
        case 3:
          CU = EU.width - 1, QU = -1, fU = -1, hU = 0, eU = 1, WU = EU.height;
          break;
        case 1:
          CU = EU.width - 1, QU = -1, fU = -1, hU = EU.height - 1, eU = -1, WU = -1
      }
      const xU = "_getImageData" + (cU ? "Grey" : "") + EU.pixel_size + "bits",
        mU = PU[xU](EU, uU, TU, hU, eU, WU, CU, QU, fU);
      UU.WC()._uploadDataToTextureDirectly(UU, mU)
    }
    const PU = {
      GetTGAHeader: pU,
      UploadContent: EU,
      _getImageData8bits: function(UU, RU, gU, tU, pU, EU, PU, TU, qU) {
        const KU = gU,
          cU = RU,
          GU = UU.width,
          jU = UU.height;
        let uU, CU, hU, QU = 0;
        const eU = new Uint8Array(GU * jU * 4);
        for (hU = tU; hU !== EU; hU += pU)
          for (CU = PU; CU !== qU; CU += TU, QU++) uU = KU[QU], eU[4 * (CU + GU * hU) + 3] = 255, eU[4 * (CU + GU * hU) + 2] = cU[3 * uU + 0], eU[4 * (CU + GU * hU) + 1] = cU[3 * uU + 1], eU[4 * (CU + GU * hU) + 0] = cU[3 * uU + 2];
        return eU
      },
      _getImageData16bits: function(UU, RU, gU, tU, pU, EU, PU, TU, qU) {
        const KU = gU,
          cU = UU.width,
          GU = UU.height;
        let jU, uU, CU, hU = 0;
        const QU = new Uint8Array(cU * GU * 4);
        for (CU = tU; CU !== EU; CU += pU)
          for (uU = PU; uU !== qU; uU += TU, hU += 2) {
            jU = KU[hU + 0] + (KU[hU + 1] << 8);
            const UU = 255 * ((31744 & jU) >> 10) / 31 | 0,
              RU = 255 * ((992 & jU) >> 5) / 31 | 0,
              gU = 255 * (31 & jU) / 31 | 0;
            QU[4 * (uU + cU * CU) + 0] = UU, QU[4 * (uU + cU * CU) + 1] = RU, QU[4 * (uU + cU * CU) + 2] = gU, QU[4 * (uU + cU * CU) + 3] = 32768 & jU ? 0 : 255
          }
        return QU
      },
      _getImageData24bits: function(UU, RU, gU, tU, pU, EU, PU, TU, qU) {
        const KU = gU,
          cU = UU.width,
          GU = UU.height;
        let jU, uU, CU = 0;
        const hU = new Uint8Array(cU * GU * 4);
        for (uU = tU; uU !== EU; uU += pU)
          for (jU = PU; jU !== qU; jU += TU, CU += 3) hU[4 * (jU + cU * uU) + 3] = 255, hU[4 * (jU + cU * uU) + 2] = KU[CU + 0], hU[4 * (jU + cU * uU) + 1] = KU[CU + 1], hU[4 * (jU + cU * uU) + 0] = KU[CU + 2];
        return hU
      },
      _getImageData32bits: function(UU, RU, gU, tU, pU, EU, PU, TU, qU) {
        const KU = gU,
          cU = UU.width,
          GU = UU.height;
        let jU, uU, CU = 0;
        const hU = new Uint8Array(cU * GU * 4);
        for (uU = tU; uU !== EU; uU += pU)
          for (jU = PU; jU !== qU; jU += TU, CU += 4) hU[4 * (jU + cU * uU) + 2] = KU[CU + 0], hU[4 * (jU + cU * uU) + 1] = KU[CU + 1], hU[4 * (jU + cU * uU) + 0] = KU[CU + 2], hU[4 * (jU + cU * uU) + 3] = KU[CU + 3];
        return hU
      },
      _getImageDataGrey8bits: function(UU, RU, gU, tU, pU, EU, PU, TU, qU) {
        const KU = gU,
          cU = UU.width,
          GU = UU.height;
        let jU, uU, CU, hU = 0;
        const QU = new Uint8Array(cU * GU * 4);
        for (CU = tU; CU !== EU; CU += pU)
          for (uU = PU; uU !== qU; uU += TU, hU++) jU = KU[hU], QU[4 * (uU + cU * CU) + 0] = jU, QU[4 * (uU + cU * CU) + 1] = jU, QU[4 * (uU + cU * CU) + 2] = jU, QU[4 * (uU + cU * CU) + 3] = 255;
        return QU
      },
      _getImageDataGrey16bits: function(UU, RU, gU, tU, pU, EU, PU, TU, qU) {
        const KU = gU,
          cU = UU.width,
          GU = UU.height;
        let jU, uU, CU = 0;
        const hU = new Uint8Array(cU * GU * 4);
        for (uU = tU; uU !== EU; uU += pU)
          for (jU = PU; jU !== qU; jU += TU, CU += 2) hU[4 * (jU + cU * uU) + 0] = KU[CU + 0], hU[4 * (jU + cU * uU) + 1] = KU[CU + 0], hU[4 * (jU + cU * uU) + 2] = KU[CU + 0], hU[4 * (jU + cU * uU) + 3] = KU[CU + 1];
        return hU
      }
    };
    class TU {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(UU, RU, gU) {
        const tU = new Uint8Array(UU.buffer, UU.byteOffset, UU.byteLength),
          PU = pU(tU);
        gU(PU.width, PU.height, RU.generateMipMaps, !1, (() => {
          EU(RU, tU)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);