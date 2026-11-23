export const id = 314;
export const ids = [314];
export const modules = {
  41679: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      _TGATextureLoader: () => fC
    });
    var QC = ZC(38507);

    function wC(CC) {
      let zC = 0;
      return {
        id_length: CC[zC++],
        colormap_type: CC[zC++],
        image_type: CC[zC++],
        colormap_index: CC[zC++] | CC[zC++] << 8,
        colormap_length: CC[zC++] | CC[zC++] << 8,
        colormap_size: CC[zC++],
        origin: [CC[zC++] | CC[zC++] << 8, CC[zC++] | CC[zC++] << 8],
        width: CC[zC++] | CC[zC++] << 8,
        height: CC[zC++] | CC[zC++] << 8,
        pixel_size: CC[zC++],
        flags: CC[17]
      }
    }

    function bC(CC, zC) {
      if (zC.length < 19) return void QC.c.Error("Unable to load TGA file - Not enough data to contain header");
      let ZC = 18;
      const bC = wC(zC);
      if (bC.id_length + ZC > zC.length) return void QC.c.Error("Unable to load TGA file - Not enough data");
      ZC += bC.id_length;
      let fC, oC = !1,
        qC = !1,
        FC = !1;
      switch (bC.image_type) {
        case 9:
          oC = !0;
        case 1:
          qC = !0;
          break;
        case 10:
          oC = !0;
        case 2:
          break;
        case 11:
          oC = !0;
        case 3:
          FC = !0
      }
      const WC = bC.pixel_size >> 3,
        NC = bC.width * bC.height * WC;
      let MC, gC, SC, pC, PC, GC, RC;
      if (qC && (MC = zC.subarray(ZC, ZC += bC.colormap_length * (bC.colormap_size >> 3))), oC) {
        let CC, QC, wC;
        fC = new Uint8Array(NC);
        let bC = 0;
        const nC = new Uint8Array(WC);
        for (; ZC < NC && bC < NC;)
          if (CC = zC[ZC++], QC = 1 + (127 & CC), 128 & CC) {
            for (wC = 0; wC < WC; ++wC) nC[wC] = zC[ZC++];
            for (wC = 0; wC < QC; ++wC) fC.set(nC, bC + wC * WC);
            bC += WC * QC
          } else {
            for (QC *= WC, wC = 0; wC < QC; ++wC) fC[bC + wC] = zC[ZC++];
            bC += QC
          }
      } else fC = zC.subarray(ZC, ZC + (qC ? bC.width * bC.height : NC));
      switch ((48 & bC.flags) >> 4) {
        default:
        case 2:
          gC = 0, pC = 1, RC = bC.width, SC = 0, PC = 1, GC = bC.height;
          break;
        case 0:
          gC = 0, pC = 1, RC = bC.width, SC = bC.height - 1, PC = -1, GC = -1;
          break;
        case 3:
          gC = bC.width - 1, pC = -1, RC = -1, SC = 0, PC = 1, GC = bC.height;
          break;
        case 1:
          gC = bC.width - 1, pC = -1, RC = -1, SC = bC.height - 1, PC = -1, GC = -1
      }
      const AC = "_getImageData" + (FC ? "Grey" : "") + bC.pixel_size + "bits",
        xC = nC[AC](bC, MC, fC, SC, PC, GC, gC, pC, RC);
      CC.mg()._uploadDataToTextureDirectly(CC, xC)
    }
    const nC = {
      GetTGAHeader: wC,
      UploadContent: bC,
      _getImageData8bits: function(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
        const qC = ZC,
          FC = zC,
          WC = CC.width,
          NC = CC.height;
        let MC, gC, SC, pC = 0;
        const PC = new Uint8Array(WC * NC * 4);
        for (SC = QC; SC !== bC; SC += wC)
          for (gC = nC; gC !== oC; gC += fC, pC++) MC = qC[pC], PC[4 * (gC + WC * SC) + 3] = 255, PC[4 * (gC + WC * SC) + 2] = FC[3 * MC + 0], PC[4 * (gC + WC * SC) + 1] = FC[3 * MC + 1], PC[4 * (gC + WC * SC) + 0] = FC[3 * MC + 2];
        return PC
      },
      _getImageData16bits: function(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
        const qC = ZC,
          FC = CC.width,
          WC = CC.height;
        let NC, MC, gC, SC = 0;
        const pC = new Uint8Array(FC * WC * 4);
        for (gC = QC; gC !== bC; gC += wC)
          for (MC = nC; MC !== oC; MC += fC, SC += 2) {
            NC = qC[SC + 0] + (qC[SC + 1] << 8);
            const CC = 255 * ((31744 & NC) >> 10) / 31 | 0,
              zC = 255 * ((992 & NC) >> 5) / 31 | 0,
              ZC = 255 * (31 & NC) / 31 | 0;
            pC[4 * (MC + FC * gC) + 0] = CC, pC[4 * (MC + FC * gC) + 1] = zC, pC[4 * (MC + FC * gC) + 2] = ZC, pC[4 * (MC + FC * gC) + 3] = 32768 & NC ? 0 : 255
          }
        return pC
      },
      _getImageData24bits: function(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
        const qC = ZC,
          FC = CC.width,
          WC = CC.height;
        let NC, MC, gC = 0;
        const SC = new Uint8Array(FC * WC * 4);
        for (MC = QC; MC !== bC; MC += wC)
          for (NC = nC; NC !== oC; NC += fC, gC += 3) SC[4 * (NC + FC * MC) + 3] = 255, SC[4 * (NC + FC * MC) + 2] = qC[gC + 0], SC[4 * (NC + FC * MC) + 1] = qC[gC + 1], SC[4 * (NC + FC * MC) + 0] = qC[gC + 2];
        return SC
      },
      _getImageData32bits: function(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
        const qC = ZC,
          FC = CC.width,
          WC = CC.height;
        let NC, MC, gC = 0;
        const SC = new Uint8Array(FC * WC * 4);
        for (MC = QC; MC !== bC; MC += wC)
          for (NC = nC; NC !== oC; NC += fC, gC += 4) SC[4 * (NC + FC * MC) + 2] = qC[gC + 0], SC[4 * (NC + FC * MC) + 1] = qC[gC + 1], SC[4 * (NC + FC * MC) + 0] = qC[gC + 2], SC[4 * (NC + FC * MC) + 3] = qC[gC + 3];
        return SC
      },
      _getImageDataGrey8bits: function(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
        const qC = ZC,
          FC = CC.width,
          WC = CC.height;
        let NC, MC, gC, SC = 0;
        const pC = new Uint8Array(FC * WC * 4);
        for (gC = QC; gC !== bC; gC += wC)
          for (MC = nC; MC !== oC; MC += fC, SC++) NC = qC[SC], pC[4 * (MC + FC * gC) + 0] = NC, pC[4 * (MC + FC * gC) + 1] = NC, pC[4 * (MC + FC * gC) + 2] = NC, pC[4 * (MC + FC * gC) + 3] = 255;
        return pC
      },
      _getImageDataGrey16bits: function(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
        const qC = ZC,
          FC = CC.width,
          WC = CC.height;
        let NC, MC, gC = 0;
        const SC = new Uint8Array(FC * WC * 4);
        for (MC = QC; MC !== bC; MC += wC)
          for (NC = nC; NC !== oC; NC += fC, gC += 2) SC[4 * (NC + FC * MC) + 0] = qC[gC + 0], SC[4 * (NC + FC * MC) + 1] = qC[gC + 0], SC[4 * (NC + FC * MC) + 2] = qC[gC + 0], SC[4 * (NC + FC * MC) + 3] = qC[gC + 1];
        return SC
      }
    };
    class fC {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(CC, zC, ZC) {
        const QC = new Uint8Array(CC.buffer, CC.byteOffset, CC.byteLength),
          nC = wC(QC);
        ZC(nC.width, nC.height, zC.generateMipMaps, !1, (() => {
          bC(zC, QC)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);