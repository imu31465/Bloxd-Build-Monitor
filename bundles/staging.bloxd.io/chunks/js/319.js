export const id = 319;
export const ids = [319];
export const modules = {
  42314: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      _TGATextureLoader: () => kG
    });
    var wG = ZG(39093);

    function SG(GG) {
      let bG = 0;
      return {
        id_length: GG[bG++],
        colormap_type: GG[bG++],
        image_type: GG[bG++],
        colormap_index: GG[bG++] | GG[bG++] << 8,
        colormap_length: GG[bG++] | GG[bG++] << 8,
        colormap_size: GG[bG++],
        origin: [GG[bG++] | GG[bG++] << 8, GG[bG++] | GG[bG++] << 8],
        width: GG[bG++] | GG[bG++] << 8,
        height: GG[bG++] | GG[bG++] << 8,
        pixel_size: GG[bG++],
        flags: GG[17]
      }
    }

    function LG(GG, bG) {
      if (bG.length < 19) return void wG.c.Error("Unable to load TGA file - Not enough data to contain header");
      let ZG = 18;
      const LG = SG(bG);
      if (LG.id_length + ZG > bG.length) return void wG.c.Error("Unable to load TGA file - Not enough data");
      ZG += LG.id_length;
      let kG, UG = !1,
        YG = !1,
        VG = !1;
      switch (LG.image_type) {
        case 9:
          UG = !0;
        case 1:
          YG = !0;
          break;
        case 10:
          UG = !0;
        case 2:
          break;
        case 11:
          UG = !0;
        case 3:
          VG = !0
      }
      const pG = LG.pixel_size >> 3,
        fG = LG.width * LG.height * pG;
      let QG, KG, hG, dG, JG, rG, zG;
      if (YG && (QG = bG.subarray(ZG, ZG += LG.colormap_length * (LG.colormap_size >> 3))), UG) {
        let GG, wG, SG;
        kG = new Uint8Array(fG);
        let LG = 0;
        const yG = new Uint8Array(pG);
        for (; ZG < fG && LG < fG;)
          if (GG = bG[ZG++], wG = 1 + (127 & GG), 128 & GG) {
            for (SG = 0; SG < pG; ++SG) yG[SG] = bG[ZG++];
            for (SG = 0; SG < wG; ++SG) kG.set(yG, LG + SG * pG);
            LG += pG * wG
          } else {
            for (wG *= pG, SG = 0; SG < wG; ++SG) kG[LG + SG] = bG[ZG++];
            LG += wG
          }
      } else kG = bG.subarray(ZG, ZG + (YG ? LG.width * LG.height : fG));
      switch ((48 & LG.flags) >> 4) {
        default:
        case 2:
          KG = 0, dG = 1, zG = LG.width, hG = 0, JG = 1, rG = LG.height;
          break;
        case 0:
          KG = 0, dG = 1, zG = LG.width, hG = LG.height - 1, JG = -1, rG = -1;
          break;
        case 3:
          KG = LG.width - 1, dG = -1, zG = -1, hG = 0, JG = 1, rG = LG.height;
          break;
        case 1:
          KG = LG.width - 1, dG = -1, zG = -1, hG = LG.height - 1, JG = -1, rG = -1
      }
      const EG = "_getImageData" + (VG ? "Grey" : "") + LG.pixel_size + "bits",
        oG = yG[EG](LG, QG, kG, hG, JG, rG, KG, dG, zG);
      GG.CK()._uploadDataToTextureDirectly(GG, oG)
    }
    const yG = {
      GetTGAHeader: SG,
      UploadContent: LG,
      _getImageData8bits: function(GG, bG, ZG, wG, SG, LG, yG, kG, UG) {
        const YG = ZG,
          VG = bG,
          pG = GG.width,
          fG = GG.height;
        let QG, KG, hG, dG = 0;
        const JG = new Uint8Array(pG * fG * 4);
        for (hG = wG; hG !== LG; hG += SG)
          for (KG = yG; KG !== UG; KG += kG, dG++) QG = YG[dG], JG[4 * (KG + pG * hG) + 3] = 255, JG[4 * (KG + pG * hG) + 2] = VG[3 * QG + 0], JG[4 * (KG + pG * hG) + 1] = VG[3 * QG + 1], JG[4 * (KG + pG * hG) + 0] = VG[3 * QG + 2];
        return JG
      },
      _getImageData16bits: function(GG, bG, ZG, wG, SG, LG, yG, kG, UG) {
        const YG = ZG,
          VG = GG.width,
          pG = GG.height;
        let fG, QG, KG, hG = 0;
        const dG = new Uint8Array(VG * pG * 4);
        for (KG = wG; KG !== LG; KG += SG)
          for (QG = yG; QG !== UG; QG += kG, hG += 2) {
            fG = YG[hG + 0] + (YG[hG + 1] << 8);
            const GG = 255 * ((31744 & fG) >> 10) / 31 | 0,
              bG = 255 * ((992 & fG) >> 5) / 31 | 0,
              ZG = 255 * (31 & fG) / 31 | 0;
            dG[4 * (QG + VG * KG) + 0] = GG, dG[4 * (QG + VG * KG) + 1] = bG, dG[4 * (QG + VG * KG) + 2] = ZG, dG[4 * (QG + VG * KG) + 3] = 32768 & fG ? 0 : 255
          }
        return dG
      },
      _getImageData24bits: function(GG, bG, ZG, wG, SG, LG, yG, kG, UG) {
        const YG = ZG,
          VG = GG.width,
          pG = GG.height;
        let fG, QG, KG = 0;
        const hG = new Uint8Array(VG * pG * 4);
        for (QG = wG; QG !== LG; QG += SG)
          for (fG = yG; fG !== UG; fG += kG, KG += 3) hG[4 * (fG + VG * QG) + 3] = 255, hG[4 * (fG + VG * QG) + 2] = YG[KG + 0], hG[4 * (fG + VG * QG) + 1] = YG[KG + 1], hG[4 * (fG + VG * QG) + 0] = YG[KG + 2];
        return hG
      },
      _getImageData32bits: function(GG, bG, ZG, wG, SG, LG, yG, kG, UG) {
        const YG = ZG,
          VG = GG.width,
          pG = GG.height;
        let fG, QG, KG = 0;
        const hG = new Uint8Array(VG * pG * 4);
        for (QG = wG; QG !== LG; QG += SG)
          for (fG = yG; fG !== UG; fG += kG, KG += 4) hG[4 * (fG + VG * QG) + 2] = YG[KG + 0], hG[4 * (fG + VG * QG) + 1] = YG[KG + 1], hG[4 * (fG + VG * QG) + 0] = YG[KG + 2], hG[4 * (fG + VG * QG) + 3] = YG[KG + 3];
        return hG
      },
      _getImageDataGrey8bits: function(GG, bG, ZG, wG, SG, LG, yG, kG, UG) {
        const YG = ZG,
          VG = GG.width,
          pG = GG.height;
        let fG, QG, KG, hG = 0;
        const dG = new Uint8Array(VG * pG * 4);
        for (KG = wG; KG !== LG; KG += SG)
          for (QG = yG; QG !== UG; QG += kG, hG++) fG = YG[hG], dG[4 * (QG + VG * KG) + 0] = fG, dG[4 * (QG + VG * KG) + 1] = fG, dG[4 * (QG + VG * KG) + 2] = fG, dG[4 * (QG + VG * KG) + 3] = 255;
        return dG
      },
      _getImageDataGrey16bits: function(GG, bG, ZG, wG, SG, LG, yG, kG, UG) {
        const YG = ZG,
          VG = GG.width,
          pG = GG.height;
        let fG, QG, KG = 0;
        const hG = new Uint8Array(VG * pG * 4);
        for (QG = wG; QG !== LG; QG += SG)
          for (fG = yG; fG !== UG; fG += kG, KG += 2) hG[4 * (fG + VG * QG) + 0] = YG[KG + 0], hG[4 * (fG + VG * QG) + 1] = YG[KG + 0], hG[4 * (fG + VG * QG) + 2] = YG[KG + 0], hG[4 * (fG + VG * QG) + 3] = YG[KG + 1];
        return hG
      }
    };
    class kG {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(GG, bG, ZG) {
        const wG = new Uint8Array(GG.buffer, GG.byteOffset, GG.byteLength),
          yG = SG(wG);
        ZG(yG.width, yG.height, bG.generateMipMaps, !1, (() => {
          LG(bG, wG)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);