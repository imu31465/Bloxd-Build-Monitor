export const id = 319;
export const ids = [319];
export const modules = {
  41889: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      _TGATextureLoader: () => vB
    });
    var TB = ZB(38718);

    function JB(BB) {
      let IB = 0;
      return {
        id_length: BB[IB++],
        colormap_type: BB[IB++],
        image_type: BB[IB++],
        colormap_index: BB[IB++] | BB[IB++] << 8,
        colormap_length: BB[IB++] | BB[IB++] << 8,
        colormap_size: BB[IB++],
        origin: [BB[IB++] | BB[IB++] << 8, BB[IB++] | BB[IB++] << 8],
        width: BB[IB++] | BB[IB++] << 8,
        height: BB[IB++] | BB[IB++] << 8,
        pixel_size: BB[IB++],
        flags: BB[17]
      }
    }

    function oB(BB, IB) {
      if (IB.length < 19) return void TB.d.Error("Unable to load TGA file - Not enough data to contain header");
      let ZB = 18;
      const oB = JB(IB);
      if (oB.id_length + ZB > IB.length) return void TB.d.Error("Unable to load TGA file - Not enough data");
      ZB += oB.id_length;
      let vB, kB = !1,
        cB = !1,
        nB = !1;
      switch (oB.image_type) {
        case 9:
          kB = !0;
        case 1:
          cB = !0;
          break;
        case 10:
          kB = !0;
        case 2:
          break;
        case 11:
          kB = !0;
        case 3:
          nB = !0
      }
      const hB = oB.pixel_size >> 3,
        zB = oB.width * oB.height * hB;
      let FB, NB, gB, qB, yB, UB, WB;
      if (cB && (FB = IB.subarray(ZB, ZB += oB.colormap_length * (oB.colormap_size >> 3))), kB) {
        let BB, TB, JB;
        vB = new Uint8Array(zB);
        let oB = 0;
        const GB = new Uint8Array(hB);
        for (; ZB < zB && oB < zB;)
          if (BB = IB[ZB++], TB = 1 + (127 & BB), 128 & BB) {
            for (JB = 0; JB < hB; ++JB) GB[JB] = IB[ZB++];
            for (JB = 0; JB < TB; ++JB) vB.set(GB, oB + JB * hB);
            oB += hB * TB
          } else {
            for (TB *= hB, JB = 0; JB < TB; ++JB) vB[oB + JB] = IB[ZB++];
            oB += TB
          }
      } else vB = IB.subarray(ZB, ZB + (cB ? oB.width * oB.height : zB));
      switch ((48 & oB.flags) >> 4) {
        default:
        case 2:
          NB = 0, qB = 1, WB = oB.width, gB = 0, yB = 1, UB = oB.height;
          break;
        case 0:
          NB = 0, qB = 1, WB = oB.width, gB = oB.height - 1, yB = -1, UB = -1;
          break;
        case 3:
          NB = oB.width - 1, qB = -1, WB = -1, gB = 0, yB = 1, UB = oB.height;
          break;
        case 1:
          NB = oB.width - 1, qB = -1, WB = -1, gB = oB.height - 1, yB = -1, UB = -1
      }
      const dB = "_getImageData" + (nB ? "Grey" : "") + oB.pixel_size + "bits",
        CB = GB[dB](oB, FB, vB, gB, yB, UB, NB, qB, WB);
      BB.PN()._uploadDataToTextureDirectly(BB, CB)
    }
    const GB = {
      GetTGAHeader: JB,
      UploadContent: oB,
      _getImageData8bits: function(BB, IB, ZB, TB, JB, oB, GB, vB, kB) {
        const cB = ZB,
          nB = IB,
          hB = BB.width,
          zB = BB.height;
        let FB, NB, gB, qB = 0;
        const yB = new Uint8Array(hB * zB * 4);
        for (gB = TB; gB !== oB; gB += JB)
          for (NB = GB; NB !== kB; NB += vB, qB++) FB = cB[qB], yB[4 * (NB + hB * gB) + 3] = 255, yB[4 * (NB + hB * gB) + 2] = nB[3 * FB + 0], yB[4 * (NB + hB * gB) + 1] = nB[3 * FB + 1], yB[4 * (NB + hB * gB) + 0] = nB[3 * FB + 2];
        return yB
      },
      _getImageData16bits: function(BB, IB, ZB, TB, JB, oB, GB, vB, kB) {
        const cB = ZB,
          nB = BB.width,
          hB = BB.height;
        let zB, FB, NB, gB = 0;
        const qB = new Uint8Array(nB * hB * 4);
        for (NB = TB; NB !== oB; NB += JB)
          for (FB = GB; FB !== kB; FB += vB, gB += 2) {
            zB = cB[gB + 0] + (cB[gB + 1] << 8);
            const BB = 255 * ((31744 & zB) >> 10) / 31 | 0,
              IB = 255 * ((992 & zB) >> 5) / 31 | 0,
              ZB = 255 * (31 & zB) / 31 | 0;
            qB[4 * (FB + nB * NB) + 0] = BB, qB[4 * (FB + nB * NB) + 1] = IB, qB[4 * (FB + nB * NB) + 2] = ZB, qB[4 * (FB + nB * NB) + 3] = 32768 & zB ? 0 : 255
          }
        return qB
      },
      _getImageData24bits: function(BB, IB, ZB, TB, JB, oB, GB, vB, kB) {
        const cB = ZB,
          nB = BB.width,
          hB = BB.height;
        let zB, FB, NB = 0;
        const gB = new Uint8Array(nB * hB * 4);
        for (FB = TB; FB !== oB; FB += JB)
          for (zB = GB; zB !== kB; zB += vB, NB += 3) gB[4 * (zB + nB * FB) + 3] = 255, gB[4 * (zB + nB * FB) + 2] = cB[NB + 0], gB[4 * (zB + nB * FB) + 1] = cB[NB + 1], gB[4 * (zB + nB * FB) + 0] = cB[NB + 2];
        return gB
      },
      _getImageData32bits: function(BB, IB, ZB, TB, JB, oB, GB, vB, kB) {
        const cB = ZB,
          nB = BB.width,
          hB = BB.height;
        let zB, FB, NB = 0;
        const gB = new Uint8Array(nB * hB * 4);
        for (FB = TB; FB !== oB; FB += JB)
          for (zB = GB; zB !== kB; zB += vB, NB += 4) gB[4 * (zB + nB * FB) + 2] = cB[NB + 0], gB[4 * (zB + nB * FB) + 1] = cB[NB + 1], gB[4 * (zB + nB * FB) + 0] = cB[NB + 2], gB[4 * (zB + nB * FB) + 3] = cB[NB + 3];
        return gB
      },
      _getImageDataGrey8bits: function(BB, IB, ZB, TB, JB, oB, GB, vB, kB) {
        const cB = ZB,
          nB = BB.width,
          hB = BB.height;
        let zB, FB, NB, gB = 0;
        const qB = new Uint8Array(nB * hB * 4);
        for (NB = TB; NB !== oB; NB += JB)
          for (FB = GB; FB !== kB; FB += vB, gB++) zB = cB[gB], qB[4 * (FB + nB * NB) + 0] = zB, qB[4 * (FB + nB * NB) + 1] = zB, qB[4 * (FB + nB * NB) + 2] = zB, qB[4 * (FB + nB * NB) + 3] = 255;
        return qB
      },
      _getImageDataGrey16bits: function(BB, IB, ZB, TB, JB, oB, GB, vB, kB) {
        const cB = ZB,
          nB = BB.width,
          hB = BB.height;
        let zB, FB, NB = 0;
        const gB = new Uint8Array(nB * hB * 4);
        for (FB = TB; FB !== oB; FB += JB)
          for (zB = GB; zB !== kB; zB += vB, NB += 2) gB[4 * (zB + nB * FB) + 0] = cB[NB + 0], gB[4 * (zB + nB * FB) + 1] = cB[NB + 0], gB[4 * (zB + nB * FB) + 2] = cB[NB + 0], gB[4 * (zB + nB * FB) + 3] = cB[NB + 1];
        return gB
      }
    };
    class vB {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(BB, IB, ZB) {
        const TB = new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength),
          GB = JB(TB);
        ZB(GB.width, GB.height, IB.generateMipMaps, !1, (() => {
          oB(IB, TB)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);