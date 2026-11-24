export const id = 319;
export const ids = [319];
export const modules = {
  41941: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      _TGATextureLoader: () => NB
    });
    var QB = zB(38783);

    function nB(BB) {
      let jB = 0;
      return {
        id_length: BB[jB++],
        colormap_type: BB[jB++],
        image_type: BB[jB++],
        colormap_index: BB[jB++] | BB[jB++] << 8,
        colormap_length: BB[jB++] | BB[jB++] << 8,
        colormap_size: BB[jB++],
        origin: [BB[jB++] | BB[jB++] << 8, BB[jB++] | BB[jB++] << 8],
        width: BB[jB++] | BB[jB++] << 8,
        height: BB[jB++] | BB[jB++] << 8,
        pixel_size: BB[jB++],
        flags: BB[17]
      }
    }

    function dB(BB, jB) {
      if (jB.length < 19) return void QB.c.Error("Unable to load TGA file - Not enough data to contain header");
      let zB = 18;
      const dB = nB(jB);
      if (dB.id_length + zB > jB.length) return void QB.c.Error("Unable to load TGA file - Not enough data");
      zB += dB.id_length;
      let NB, uB = !1,
        UB = !1,
        aB = !1;
      switch (dB.image_type) {
        case 9:
          uB = !0;
        case 1:
          UB = !0;
          break;
        case 10:
          uB = !0;
        case 2:
          break;
        case 11:
          uB = !0;
        case 3:
          aB = !0
      }
      const pB = dB.pixel_size >> 3,
        rB = dB.width * dB.height * pB;
      let sB, JB, mB, yB, kB, GB, LB;
      if (UB && (sB = jB.subarray(zB, zB += dB.colormap_length * (dB.colormap_size >> 3))), uB) {
        let BB, QB, nB;
        NB = new Uint8Array(rB);
        let dB = 0;
        const IB = new Uint8Array(pB);
        for (; zB < rB && dB < rB;)
          if (BB = jB[zB++], QB = 1 + (127 & BB), 128 & BB) {
            for (nB = 0; nB < pB; ++nB) IB[nB] = jB[zB++];
            for (nB = 0; nB < QB; ++nB) NB.set(IB, dB + nB * pB);
            dB += pB * QB
          } else {
            for (QB *= pB, nB = 0; nB < QB; ++nB) NB[dB + nB] = jB[zB++];
            dB += QB
          }
      } else NB = jB.subarray(zB, zB + (UB ? dB.width * dB.height : rB));
      switch ((48 & dB.flags) >> 4) {
        default:
        case 2:
          JB = 0, yB = 1, LB = dB.width, mB = 0, kB = 1, GB = dB.height;
          break;
        case 0:
          JB = 0, yB = 1, LB = dB.width, mB = dB.height - 1, kB = -1, GB = -1;
          break;
        case 3:
          JB = dB.width - 1, yB = -1, LB = -1, mB = 0, kB = 1, GB = dB.height;
          break;
        case 1:
          JB = dB.width - 1, yB = -1, LB = -1, mB = dB.height - 1, kB = -1, GB = -1
      }
      const gB = "_getImageData" + (aB ? "Grey" : "") + dB.pixel_size + "bits",
        tB = IB[gB](dB, sB, NB, mB, kB, GB, JB, yB, LB);
      BB.wJ()._uploadDataToTextureDirectly(BB, tB)
    }
    const IB = {
      GetTGAHeader: nB,
      UploadContent: dB,
      _getImageData8bits: function(BB, jB, zB, QB, nB, dB, IB, NB, uB) {
        const UB = zB,
          aB = jB,
          pB = BB.width,
          rB = BB.height;
        let sB, JB, mB, yB = 0;
        const kB = new Uint8Array(pB * rB * 4);
        for (mB = QB; mB !== dB; mB += nB)
          for (JB = IB; JB !== uB; JB += NB, yB++) sB = UB[yB], kB[4 * (JB + pB * mB) + 3] = 255, kB[4 * (JB + pB * mB) + 2] = aB[3 * sB + 0], kB[4 * (JB + pB * mB) + 1] = aB[3 * sB + 1], kB[4 * (JB + pB * mB) + 0] = aB[3 * sB + 2];
        return kB
      },
      _getImageData16bits: function(BB, jB, zB, QB, nB, dB, IB, NB, uB) {
        const UB = zB,
          aB = BB.width,
          pB = BB.height;
        let rB, sB, JB, mB = 0;
        const yB = new Uint8Array(aB * pB * 4);
        for (JB = QB; JB !== dB; JB += nB)
          for (sB = IB; sB !== uB; sB += NB, mB += 2) {
            rB = UB[mB + 0] + (UB[mB + 1] << 8);
            const BB = 255 * ((31744 & rB) >> 10) / 31 | 0,
              jB = 255 * ((992 & rB) >> 5) / 31 | 0,
              zB = 255 * (31 & rB) / 31 | 0;
            yB[4 * (sB + aB * JB) + 0] = BB, yB[4 * (sB + aB * JB) + 1] = jB, yB[4 * (sB + aB * JB) + 2] = zB, yB[4 * (sB + aB * JB) + 3] = 32768 & rB ? 0 : 255
          }
        return yB
      },
      _getImageData24bits: function(BB, jB, zB, QB, nB, dB, IB, NB, uB) {
        const UB = zB,
          aB = BB.width,
          pB = BB.height;
        let rB, sB, JB = 0;
        const mB = new Uint8Array(aB * pB * 4);
        for (sB = QB; sB !== dB; sB += nB)
          for (rB = IB; rB !== uB; rB += NB, JB += 3) mB[4 * (rB + aB * sB) + 3] = 255, mB[4 * (rB + aB * sB) + 2] = UB[JB + 0], mB[4 * (rB + aB * sB) + 1] = UB[JB + 1], mB[4 * (rB + aB * sB) + 0] = UB[JB + 2];
        return mB
      },
      _getImageData32bits: function(BB, jB, zB, QB, nB, dB, IB, NB, uB) {
        const UB = zB,
          aB = BB.width,
          pB = BB.height;
        let rB, sB, JB = 0;
        const mB = new Uint8Array(aB * pB * 4);
        for (sB = QB; sB !== dB; sB += nB)
          for (rB = IB; rB !== uB; rB += NB, JB += 4) mB[4 * (rB + aB * sB) + 2] = UB[JB + 0], mB[4 * (rB + aB * sB) + 1] = UB[JB + 1], mB[4 * (rB + aB * sB) + 0] = UB[JB + 2], mB[4 * (rB + aB * sB) + 3] = UB[JB + 3];
        return mB
      },
      _getImageDataGrey8bits: function(BB, jB, zB, QB, nB, dB, IB, NB, uB) {
        const UB = zB,
          aB = BB.width,
          pB = BB.height;
        let rB, sB, JB, mB = 0;
        const yB = new Uint8Array(aB * pB * 4);
        for (JB = QB; JB !== dB; JB += nB)
          for (sB = IB; sB !== uB; sB += NB, mB++) rB = UB[mB], yB[4 * (sB + aB * JB) + 0] = rB, yB[4 * (sB + aB * JB) + 1] = rB, yB[4 * (sB + aB * JB) + 2] = rB, yB[4 * (sB + aB * JB) + 3] = 255;
        return yB
      },
      _getImageDataGrey16bits: function(BB, jB, zB, QB, nB, dB, IB, NB, uB) {
        const UB = zB,
          aB = BB.width,
          pB = BB.height;
        let rB, sB, JB = 0;
        const mB = new Uint8Array(aB * pB * 4);
        for (sB = QB; sB !== dB; sB += nB)
          for (rB = IB; rB !== uB; rB += NB, JB += 2) mB[4 * (rB + aB * sB) + 0] = UB[JB + 0], mB[4 * (rB + aB * sB) + 1] = UB[JB + 0], mB[4 * (rB + aB * sB) + 2] = UB[JB + 0], mB[4 * (rB + aB * sB) + 3] = UB[JB + 1];
        return mB
      }
    };
    class NB {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(BB, jB, zB) {
        const QB = new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength),
          IB = nB(QB);
        zB(IB.width, IB.height, jB.generateMipMaps, !1, (() => {
          dB(jB, QB)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);