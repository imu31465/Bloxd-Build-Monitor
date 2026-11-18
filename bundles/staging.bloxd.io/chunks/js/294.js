export const id = 294;
export const ids = [294];
export const modules = {
  40552: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      _TGATextureLoader: () => JB
    });
    var VB = dB(37651);

    function yB(BB) {
      let TB = 0;
      return {
        id_length: BB[TB++],
        colormap_type: BB[TB++],
        image_type: BB[TB++],
        colormap_index: BB[TB++] | BB[TB++] << 8,
        colormap_length: BB[TB++] | BB[TB++] << 8,
        colormap_size: BB[TB++],
        origin: [BB[TB++] | BB[TB++] << 8, BB[TB++] | BB[TB++] << 8],
        width: BB[TB++] | BB[TB++] << 8,
        height: BB[TB++] | BB[TB++] << 8,
        pixel_size: BB[TB++],
        flags: BB[17]
      }
    }

    function pB(BB, TB) {
      if (TB.length < 19) return void VB.b.Error("Unable to load TGA file - Not enough data to contain header");
      let dB = 18;
      const pB = yB(TB);
      if (pB.id_length + dB > TB.length) return void VB.b.Error("Unable to load TGA file - Not enough data");
      dB += pB.id_length;
      let JB, YB = !1,
        gB = !1,
        oB = !1;
      switch (pB.image_type) {
        case 9:
          YB = !0;
        case 1:
          gB = !0;
          break;
        case 10:
          YB = !0;
        case 2:
          break;
        case 11:
          YB = !0;
        case 3:
          oB = !0
      }
      const kB = pB.pixel_size >> 3,
        LB = pB.width * pB.height * kB;
      let OB, DB, uB, HB, EB, vB, mB;
      if (gB && (OB = TB.subarray(dB, dB += pB.colormap_length * (pB.colormap_size >> 3))), YB) {
        let BB, VB, yB;
        JB = new Uint8Array(LB);
        let pB = 0;
        const lB = new Uint8Array(kB);
        for (; dB < LB && pB < LB;)
          if (BB = TB[dB++], VB = 1 + (127 & BB), 128 & BB) {
            for (yB = 0; yB < kB; ++yB) lB[yB] = TB[dB++];
            for (yB = 0; yB < VB; ++yB) JB.set(lB, pB + yB * kB);
            pB += kB * VB
          } else {
            for (VB *= kB, yB = 0; yB < VB; ++yB) JB[pB + yB] = TB[dB++];
            pB += VB
          }
      } else JB = TB.subarray(dB, dB + (gB ? pB.width * pB.height : LB));
      switch ((48 & pB.flags) >> 4) {
        default:
        case 2:
          DB = 0, HB = 1, mB = pB.width, uB = 0, EB = 1, vB = pB.height;
          break;
        case 0:
          DB = 0, HB = 1, mB = pB.width, uB = pB.height - 1, EB = -1, vB = -1;
          break;
        case 3:
          DB = pB.width - 1, HB = -1, mB = -1, uB = 0, EB = 1, vB = pB.height;
          break;
        case 1:
          DB = pB.width - 1, HB = -1, mB = -1, uB = pB.height - 1, EB = -1, vB = -1
      }
      const iB = "_getImageData" + (oB ? "Grey" : "") + pB.pixel_size + "bits",
        NB = lB[iB](pB, OB, JB, uB, EB, vB, DB, HB, mB);
      BB.PD()._uploadDataToTextureDirectly(BB, NB)
    }
    const lB = {
      GetTGAHeader: yB,
      UploadContent: pB,
      _getImageData8bits: function(BB, TB, dB, VB, yB, pB, lB, JB, YB) {
        const gB = dB,
          oB = TB,
          kB = BB.width,
          LB = BB.height;
        let OB, DB, uB, HB = 0;
        const EB = new Uint8Array(kB * LB * 4);
        for (uB = VB; uB !== pB; uB += yB)
          for (DB = lB; DB !== YB; DB += JB, HB++) OB = gB[HB], EB[4 * (DB + kB * uB) + 3] = 255, EB[4 * (DB + kB * uB) + 2] = oB[3 * OB + 0], EB[4 * (DB + kB * uB) + 1] = oB[3 * OB + 1], EB[4 * (DB + kB * uB) + 0] = oB[3 * OB + 2];
        return EB
      },
      _getImageData16bits: function(BB, TB, dB, VB, yB, pB, lB, JB, YB) {
        const gB = dB,
          oB = BB.width,
          kB = BB.height;
        let LB, OB, DB, uB = 0;
        const HB = new Uint8Array(oB * kB * 4);
        for (DB = VB; DB !== pB; DB += yB)
          for (OB = lB; OB !== YB; OB += JB, uB += 2) {
            LB = gB[uB + 0] + (gB[uB + 1] << 8);
            const BB = 255 * ((31744 & LB) >> 10) / 31 | 0,
              TB = 255 * ((992 & LB) >> 5) / 31 | 0,
              dB = 255 * (31 & LB) / 31 | 0;
            HB[4 * (OB + oB * DB) + 0] = BB, HB[4 * (OB + oB * DB) + 1] = TB, HB[4 * (OB + oB * DB) + 2] = dB, HB[4 * (OB + oB * DB) + 3] = 32768 & LB ? 0 : 255
          }
        return HB
      },
      _getImageData24bits: function(BB, TB, dB, VB, yB, pB, lB, JB, YB) {
        const gB = dB,
          oB = BB.width,
          kB = BB.height;
        let LB, OB, DB = 0;
        const uB = new Uint8Array(oB * kB * 4);
        for (OB = VB; OB !== pB; OB += yB)
          for (LB = lB; LB !== YB; LB += JB, DB += 3) uB[4 * (LB + oB * OB) + 3] = 255, uB[4 * (LB + oB * OB) + 2] = gB[DB + 0], uB[4 * (LB + oB * OB) + 1] = gB[DB + 1], uB[4 * (LB + oB * OB) + 0] = gB[DB + 2];
        return uB
      },
      _getImageData32bits: function(BB, TB, dB, VB, yB, pB, lB, JB, YB) {
        const gB = dB,
          oB = BB.width,
          kB = BB.height;
        let LB, OB, DB = 0;
        const uB = new Uint8Array(oB * kB * 4);
        for (OB = VB; OB !== pB; OB += yB)
          for (LB = lB; LB !== YB; LB += JB, DB += 4) uB[4 * (LB + oB * OB) + 2] = gB[DB + 0], uB[4 * (LB + oB * OB) + 1] = gB[DB + 1], uB[4 * (LB + oB * OB) + 0] = gB[DB + 2], uB[4 * (LB + oB * OB) + 3] = gB[DB + 3];
        return uB
      },
      _getImageDataGrey8bits: function(BB, TB, dB, VB, yB, pB, lB, JB, YB) {
        const gB = dB,
          oB = BB.width,
          kB = BB.height;
        let LB, OB, DB, uB = 0;
        const HB = new Uint8Array(oB * kB * 4);
        for (DB = VB; DB !== pB; DB += yB)
          for (OB = lB; OB !== YB; OB += JB, uB++) LB = gB[uB], HB[4 * (OB + oB * DB) + 0] = LB, HB[4 * (OB + oB * DB) + 1] = LB, HB[4 * (OB + oB * DB) + 2] = LB, HB[4 * (OB + oB * DB) + 3] = 255;
        return HB
      },
      _getImageDataGrey16bits: function(BB, TB, dB, VB, yB, pB, lB, JB, YB) {
        const gB = dB,
          oB = BB.width,
          kB = BB.height;
        let LB, OB, DB = 0;
        const uB = new Uint8Array(oB * kB * 4);
        for (OB = VB; OB !== pB; OB += yB)
          for (LB = lB; LB !== YB; LB += JB, DB += 2) uB[4 * (LB + oB * OB) + 0] = gB[DB + 0], uB[4 * (LB + oB * OB) + 1] = gB[DB + 0], uB[4 * (LB + oB * OB) + 2] = gB[DB + 0], uB[4 * (LB + oB * OB) + 3] = gB[DB + 1];
        return uB
      }
    };
    class JB {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(BB, TB, dB) {
        const VB = new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength),
          lB = yB(VB);
        dB(lB.width, lB.height, TB.generateMipMaps, !1, (() => {
          pB(TB, VB)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);