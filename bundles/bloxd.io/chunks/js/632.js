export const id = 632;
export const ids = [632];
export const modules = {
  53891: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      _TGATextureLoader: () => qR
    });
    var yR = GR(39914);

    function tR(RR) {
      let JR = 0;
      return {
        id_length: RR[JR++],
        colormap_type: RR[JR++],
        image_type: RR[JR++],
        colormap_index: RR[JR++] | RR[JR++] << 8,
        colormap_length: RR[JR++] | RR[JR++] << 8,
        colormap_size: RR[JR++],
        origin: [RR[JR++] | RR[JR++] << 8, RR[JR++] | RR[JR++] << 8],
        width: RR[JR++] | RR[JR++] << 8,
        height: RR[JR++] | RR[JR++] << 8,
        pixel_size: RR[JR++],
        flags: RR[17]
      }
    }

    function uR(RR, JR) {
      if (JR.length < 19) return void yR.c.Error("Unable to load TGA file - Not enough data to contain header");
      let GR = 18;
      const uR = tR(JR);
      if (uR.id_length + GR > JR.length) return void yR.c.Error("Unable to load TGA file - Not enough data");
      GR += uR.id_length;
      let qR, iR = !1,
        fR = !1,
        VR = !1;
      switch (uR.image_type) {
        case 9:
          iR = !0;
        case 1:
          fR = !0;
          break;
        case 10:
          iR = !0;
        case 2:
          break;
        case 11:
          iR = !0;
        case 3:
          VR = !0
      }
      const KR = uR.pixel_size >> 3,
        wR = uR.width * uR.height * KR;
      let rR, eR, aR, LR, nR, UR, WR;
      if (fR && (rR = JR.subarray(GR, GR += uR.colormap_length * (uR.colormap_size >> 3))), iR) {
        let RR, yR, tR;
        qR = new Uint8Array(wR);
        let uR = 0;
        const ZR = new Uint8Array(KR);
        for (; GR < wR && uR < wR;)
          if (RR = JR[GR++], yR = 1 + (127 & RR), 128 & RR) {
            for (tR = 0; tR < KR; ++tR) ZR[tR] = JR[GR++];
            for (tR = 0; tR < yR; ++tR) qR.set(ZR, uR + tR * KR);
            uR += KR * yR
          } else {
            for (yR *= KR, tR = 0; tR < yR; ++tR) qR[uR + tR] = JR[GR++];
            uR += yR
          }
      } else qR = JR.subarray(GR, GR + (fR ? uR.width * uR.height : wR));
      switch ((48 & uR.flags) >> 4) {
        default:
        case 2:
          eR = 0, LR = 1, WR = uR.width, aR = 0, nR = 1, UR = uR.height;
          break;
        case 0:
          eR = 0, LR = 1, WR = uR.width, aR = uR.height - 1, nR = -1, UR = -1;
          break;
        case 3:
          eR = uR.width - 1, LR = -1, WR = -1, aR = 0, nR = 1, UR = uR.height;
          break;
        case 1:
          eR = uR.width - 1, LR = -1, WR = -1, aR = uR.height - 1, nR = -1, UR = -1
      }
      const AR = "_getImageData" + (VR ? "Grey" : "") + uR.pixel_size + "bits",
        CR = ZR[AR](uR, rR, qR, aR, nR, UR, eR, LR, WR);
      RR.ke()._uploadDataToTextureDirectly(RR, CR)
    }
    const ZR = {
      GetTGAHeader: tR,
      UploadContent: uR,
      _getImageData8bits: function(RR, JR, GR, yR, tR, uR, ZR, qR, iR) {
        const fR = GR,
          VR = JR,
          KR = RR.width,
          wR = RR.height;
        let rR, eR, aR, LR = 0;
        const nR = new Uint8Array(KR * wR * 4);
        for (aR = yR; aR !== uR; aR += tR)
          for (eR = ZR; eR !== iR; eR += qR, LR++) rR = fR[LR], nR[4 * (eR + KR * aR) + 3] = 255, nR[4 * (eR + KR * aR) + 2] = VR[3 * rR + 0], nR[4 * (eR + KR * aR) + 1] = VR[3 * rR + 1], nR[4 * (eR + KR * aR) + 0] = VR[3 * rR + 2];
        return nR
      },
      _getImageData16bits: function(RR, JR, GR, yR, tR, uR, ZR, qR, iR) {
        const fR = GR,
          VR = RR.width,
          KR = RR.height;
        let wR, rR, eR, aR = 0;
        const LR = new Uint8Array(VR * KR * 4);
        for (eR = yR; eR !== uR; eR += tR)
          for (rR = ZR; rR !== iR; rR += qR, aR += 2) {
            wR = fR[aR + 0] + (fR[aR + 1] << 8);
            const RR = 255 * ((31744 & wR) >> 10) / 31 | 0,
              JR = 255 * ((992 & wR) >> 5) / 31 | 0,
              GR = 255 * (31 & wR) / 31 | 0;
            LR[4 * (rR + VR * eR) + 0] = RR, LR[4 * (rR + VR * eR) + 1] = JR, LR[4 * (rR + VR * eR) + 2] = GR, LR[4 * (rR + VR * eR) + 3] = 32768 & wR ? 0 : 255
          }
        return LR
      },
      _getImageData24bits: function(RR, JR, GR, yR, tR, uR, ZR, qR, iR) {
        const fR = GR,
          VR = RR.width,
          KR = RR.height;
        let wR, rR, eR = 0;
        const aR = new Uint8Array(VR * KR * 4);
        for (rR = yR; rR !== uR; rR += tR)
          for (wR = ZR; wR !== iR; wR += qR, eR += 3) aR[4 * (wR + VR * rR) + 3] = 255, aR[4 * (wR + VR * rR) + 2] = fR[eR + 0], aR[4 * (wR + VR * rR) + 1] = fR[eR + 1], aR[4 * (wR + VR * rR) + 0] = fR[eR + 2];
        return aR
      },
      _getImageData32bits: function(RR, JR, GR, yR, tR, uR, ZR, qR, iR) {
        const fR = GR,
          VR = RR.width,
          KR = RR.height;
        let wR, rR, eR = 0;
        const aR = new Uint8Array(VR * KR * 4);
        for (rR = yR; rR !== uR; rR += tR)
          for (wR = ZR; wR !== iR; wR += qR, eR += 4) aR[4 * (wR + VR * rR) + 2] = fR[eR + 0], aR[4 * (wR + VR * rR) + 1] = fR[eR + 1], aR[4 * (wR + VR * rR) + 0] = fR[eR + 2], aR[4 * (wR + VR * rR) + 3] = fR[eR + 3];
        return aR
      },
      _getImageDataGrey8bits: function(RR, JR, GR, yR, tR, uR, ZR, qR, iR) {
        const fR = GR,
          VR = RR.width,
          KR = RR.height;
        let wR, rR, eR, aR = 0;
        const LR = new Uint8Array(VR * KR * 4);
        for (eR = yR; eR !== uR; eR += tR)
          for (rR = ZR; rR !== iR; rR += qR, aR++) wR = fR[aR], LR[4 * (rR + VR * eR) + 0] = wR, LR[4 * (rR + VR * eR) + 1] = wR, LR[4 * (rR + VR * eR) + 2] = wR, LR[4 * (rR + VR * eR) + 3] = 255;
        return LR
      },
      _getImageDataGrey16bits: function(RR, JR, GR, yR, tR, uR, ZR, qR, iR) {
        const fR = GR,
          VR = RR.width,
          KR = RR.height;
        let wR, rR, eR = 0;
        const aR = new Uint8Array(VR * KR * 4);
        for (rR = yR; rR !== uR; rR += tR)
          for (wR = ZR; wR !== iR; wR += qR, eR += 2) aR[4 * (wR + VR * rR) + 0] = fR[eR + 0], aR[4 * (wR + VR * rR) + 1] = fR[eR + 0], aR[4 * (wR + VR * rR) + 2] = fR[eR + 0], aR[4 * (wR + VR * rR) + 3] = fR[eR + 1];
        return aR
      }
    };
    class qR {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(RR, JR, GR) {
        const yR = new Uint8Array(RR.buffer, RR.byteOffset, RR.byteLength),
          ZR = tR(yR);
        GR(ZR.width, ZR.height, JR.generateMipMaps, !1, (() => {
          uR(JR, yR)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);