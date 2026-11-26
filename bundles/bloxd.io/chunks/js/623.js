export const id = 623;
export const ids = [623];
export const modules = {
  44742: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      _TGATextureLoader: () => pV
    });
    var JV = xV(39870);

    function YV(VV) {
      let eV = 0;
      return {
        id_length: VV[eV++],
        colormap_type: VV[eV++],
        image_type: VV[eV++],
        colormap_index: VV[eV++] | VV[eV++] << 8,
        colormap_length: VV[eV++] | VV[eV++] << 8,
        colormap_size: VV[eV++],
        origin: [VV[eV++] | VV[eV++] << 8, VV[eV++] | VV[eV++] << 8],
        width: VV[eV++] | VV[eV++] << 8,
        height: VV[eV++] | VV[eV++] << 8,
        pixel_size: VV[eV++],
        flags: VV[17]
      }
    }

    function UV(VV, eV) {
      if (eV.length < 19) return void JV.b.Error("Unable to load TGA file - Not enough data to contain header");
      let xV = 18;
      const UV = YV(eV);
      if (UV.id_length + xV > eV.length) return void JV.b.Error("Unable to load TGA file - Not enough data");
      xV += UV.id_length;
      let pV, QV = !1,
        nV = !1,
        wV = !1;
      switch (UV.image_type) {
        case 9:
          QV = !0;
        case 1:
          nV = !0;
          break;
        case 10:
          QV = !0;
        case 2:
          break;
        case 11:
          QV = !0;
        case 3:
          wV = !0
      }
      const ZV = UV.pixel_size >> 3,
        vV = UV.width * UV.height * ZV;
      let rV, kV, bV, EV, BV, jV, qV;
      if (nV && (rV = eV.subarray(xV, xV += UV.colormap_length * (UV.colormap_size >> 3))), QV) {
        let VV, JV, YV;
        pV = new Uint8Array(vV);
        let UV = 0;
        const yV = new Uint8Array(ZV);
        for (; xV < vV && UV < vV;)
          if (VV = eV[xV++], JV = 1 + (127 & VV), 128 & VV) {
            for (YV = 0; YV < ZV; ++YV) yV[YV] = eV[xV++];
            for (YV = 0; YV < JV; ++YV) pV.set(yV, UV + YV * ZV);
            UV += ZV * JV
          } else {
            for (JV *= ZV, YV = 0; YV < JV; ++YV) pV[UV + YV] = eV[xV++];
            UV += JV
          }
      } else pV = eV.subarray(xV, xV + (nV ? UV.width * UV.height : vV));
      switch ((48 & UV.flags) >> 4) {
        default:
        case 2:
          kV = 0, EV = 1, qV = UV.width, bV = 0, BV = 1, jV = UV.height;
          break;
        case 0:
          kV = 0, EV = 1, qV = UV.width, bV = UV.height - 1, BV = -1, jV = -1;
          break;
        case 3:
          kV = UV.width - 1, EV = -1, qV = -1, bV = 0, BV = 1, jV = UV.height;
          break;
        case 1:
          kV = UV.width - 1, EV = -1, qV = -1, bV = UV.height - 1, BV = -1, jV = -1
      }
      const tV = "_getImageData" + (wV ? "Grey" : "") + UV.pixel_size + "bits",
        FV = yV[tV](UV, rV, pV, bV, BV, jV, kV, EV, qV);
      VV.sk()._uploadDataToTextureDirectly(VV, FV)
    }
    const yV = {
      GetTGAHeader: YV,
      UploadContent: UV,
      _getImageData8bits: function(VV, eV, xV, JV, YV, UV, yV, pV, QV) {
        const nV = xV,
          wV = eV,
          ZV = VV.width,
          vV = VV.height;
        let rV, kV, bV, EV = 0;
        const BV = new Uint8Array(ZV * vV * 4);
        for (bV = JV; bV !== UV; bV += YV)
          for (kV = yV; kV !== QV; kV += pV, EV++) rV = nV[EV], BV[4 * (kV + ZV * bV) + 3] = 255, BV[4 * (kV + ZV * bV) + 2] = wV[3 * rV + 0], BV[4 * (kV + ZV * bV) + 1] = wV[3 * rV + 1], BV[4 * (kV + ZV * bV) + 0] = wV[3 * rV + 2];
        return BV
      },
      _getImageData16bits: function(VV, eV, xV, JV, YV, UV, yV, pV, QV) {
        const nV = xV,
          wV = VV.width,
          ZV = VV.height;
        let vV, rV, kV, bV = 0;
        const EV = new Uint8Array(wV * ZV * 4);
        for (kV = JV; kV !== UV; kV += YV)
          for (rV = yV; rV !== QV; rV += pV, bV += 2) {
            vV = nV[bV + 0] + (nV[bV + 1] << 8);
            const VV = 255 * ((31744 & vV) >> 10) / 31 | 0,
              eV = 255 * ((992 & vV) >> 5) / 31 | 0,
              xV = 255 * (31 & vV) / 31 | 0;
            EV[4 * (rV + wV * kV) + 0] = VV, EV[4 * (rV + wV * kV) + 1] = eV, EV[4 * (rV + wV * kV) + 2] = xV, EV[4 * (rV + wV * kV) + 3] = 32768 & vV ? 0 : 255
          }
        return EV
      },
      _getImageData24bits: function(VV, eV, xV, JV, YV, UV, yV, pV, QV) {
        const nV = xV,
          wV = VV.width,
          ZV = VV.height;
        let vV, rV, kV = 0;
        const bV = new Uint8Array(wV * ZV * 4);
        for (rV = JV; rV !== UV; rV += YV)
          for (vV = yV; vV !== QV; vV += pV, kV += 3) bV[4 * (vV + wV * rV) + 3] = 255, bV[4 * (vV + wV * rV) + 2] = nV[kV + 0], bV[4 * (vV + wV * rV) + 1] = nV[kV + 1], bV[4 * (vV + wV * rV) + 0] = nV[kV + 2];
        return bV
      },
      _getImageData32bits: function(VV, eV, xV, JV, YV, UV, yV, pV, QV) {
        const nV = xV,
          wV = VV.width,
          ZV = VV.height;
        let vV, rV, kV = 0;
        const bV = new Uint8Array(wV * ZV * 4);
        for (rV = JV; rV !== UV; rV += YV)
          for (vV = yV; vV !== QV; vV += pV, kV += 4) bV[4 * (vV + wV * rV) + 2] = nV[kV + 0], bV[4 * (vV + wV * rV) + 1] = nV[kV + 1], bV[4 * (vV + wV * rV) + 0] = nV[kV + 2], bV[4 * (vV + wV * rV) + 3] = nV[kV + 3];
        return bV
      },
      _getImageDataGrey8bits: function(VV, eV, xV, JV, YV, UV, yV, pV, QV) {
        const nV = xV,
          wV = VV.width,
          ZV = VV.height;
        let vV, rV, kV, bV = 0;
        const EV = new Uint8Array(wV * ZV * 4);
        for (kV = JV; kV !== UV; kV += YV)
          for (rV = yV; rV !== QV; rV += pV, bV++) vV = nV[bV], EV[4 * (rV + wV * kV) + 0] = vV, EV[4 * (rV + wV * kV) + 1] = vV, EV[4 * (rV + wV * kV) + 2] = vV, EV[4 * (rV + wV * kV) + 3] = 255;
        return EV
      },
      _getImageDataGrey16bits: function(VV, eV, xV, JV, YV, UV, yV, pV, QV) {
        const nV = xV,
          wV = VV.width,
          ZV = VV.height;
        let vV, rV, kV = 0;
        const bV = new Uint8Array(wV * ZV * 4);
        for (rV = JV; rV !== UV; rV += YV)
          for (vV = yV; vV !== QV; vV += pV, kV += 2) bV[4 * (vV + wV * rV) + 0] = nV[kV + 0], bV[4 * (vV + wV * rV) + 1] = nV[kV + 0], bV[4 * (vV + wV * rV) + 2] = nV[kV + 0], bV[4 * (vV + wV * rV) + 3] = nV[kV + 1];
        return bV
      }
    };
    class pV {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(VV, eV, xV) {
        const JV = new Uint8Array(VV.buffer, VV.byteOffset, VV.byteLength),
          yV = YV(JV);
        xV(yV.width, yV.height, eV.generateMipMaps, !1, (() => {
          UV(eV, JV)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);