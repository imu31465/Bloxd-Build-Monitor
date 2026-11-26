export const id = 620;
export const ids = [620];
export const modules = {
  44550: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      _TGATextureLoader: () => FU
    });
    var cU = zU(39493);

    function yU(UU) {
      let XU = 0;
      return {
        id_length: UU[XU++],
        colormap_type: UU[XU++],
        image_type: UU[XU++],
        colormap_index: UU[XU++] | UU[XU++] << 8,
        colormap_length: UU[XU++] | UU[XU++] << 8,
        colormap_size: UU[XU++],
        origin: [UU[XU++] | UU[XU++] << 8, UU[XU++] | UU[XU++] << 8],
        width: UU[XU++] | UU[XU++] << 8,
        height: UU[XU++] | UU[XU++] << 8,
        pixel_size: UU[XU++],
        flags: UU[17]
      }
    }

    function QU(UU, XU) {
      if (XU.length < 19) return void cU.b.Error("Unable to load TGA file - Not enough data to contain header");
      let zU = 18;
      const QU = yU(XU);
      if (QU.id_length + zU > XU.length) return void cU.b.Error("Unable to load TGA file - Not enough data");
      zU += QU.id_length;
      let FU, oU = !1,
        DU = !1,
        EU = !1;
      switch (QU.image_type) {
        case 9:
          oU = !0;
        case 1:
          DU = !0;
          break;
        case 10:
          oU = !0;
        case 2:
          break;
        case 11:
          oU = !0;
        case 3:
          EU = !0
      }
      const YU = QU.pixel_size >> 3,
        NU = QU.width * QU.height * YU;
      let IU, pU, aU, tU, gU, kU, GU;
      if (DU && (IU = XU.subarray(zU, zU += QU.colormap_length * (QU.colormap_size >> 3))), oU) {
        let UU, cU, yU;
        FU = new Uint8Array(NU);
        let QU = 0;
        const AU = new Uint8Array(YU);
        for (; zU < NU && QU < NU;)
          if (UU = XU[zU++], cU = 1 + (127 & UU), 128 & UU) {
            for (yU = 0; yU < YU; ++yU) AU[yU] = XU[zU++];
            for (yU = 0; yU < cU; ++yU) FU.set(AU, QU + yU * YU);
            QU += YU * cU
          } else {
            for (cU *= YU, yU = 0; yU < cU; ++yU) FU[QU + yU] = XU[zU++];
            QU += cU
          }
      } else FU = XU.subarray(zU, zU + (DU ? QU.width * QU.height : NU));
      switch ((48 & QU.flags) >> 4) {
        default:
        case 2:
          pU = 0, tU = 1, GU = QU.width, aU = 0, gU = 1, kU = QU.height;
          break;
        case 0:
          pU = 0, tU = 1, GU = QU.width, aU = QU.height - 1, gU = -1, kU = -1;
          break;
        case 3:
          pU = QU.width - 1, tU = -1, GU = -1, aU = 0, gU = 1, kU = QU.height;
          break;
        case 1:
          pU = QU.width - 1, tU = -1, GU = -1, aU = QU.height - 1, gU = -1, kU = -1
      }
      const BU = "_getImageData" + (EU ? "Grey" : "") + QU.pixel_size + "bits",
        ZU = AU[BU](QU, IU, FU, aU, gU, kU, pU, tU, GU);
      UU.qp()._uploadDataToTextureDirectly(UU, ZU)
    }
    const AU = {
      GetTGAHeader: yU,
      UploadContent: QU,
      _getImageData8bits: function(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
        const DU = zU,
          EU = XU,
          YU = UU.width,
          NU = UU.height;
        let IU, pU, aU, tU = 0;
        const gU = new Uint8Array(YU * NU * 4);
        for (aU = cU; aU !== QU; aU += yU)
          for (pU = AU; pU !== oU; pU += FU, tU++) IU = DU[tU], gU[4 * (pU + YU * aU) + 3] = 255, gU[4 * (pU + YU * aU) + 2] = EU[3 * IU + 0], gU[4 * (pU + YU * aU) + 1] = EU[3 * IU + 1], gU[4 * (pU + YU * aU) + 0] = EU[3 * IU + 2];
        return gU
      },
      _getImageData16bits: function(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
        const DU = zU,
          EU = UU.width,
          YU = UU.height;
        let NU, IU, pU, aU = 0;
        const tU = new Uint8Array(EU * YU * 4);
        for (pU = cU; pU !== QU; pU += yU)
          for (IU = AU; IU !== oU; IU += FU, aU += 2) {
            NU = DU[aU + 0] + (DU[aU + 1] << 8);
            const UU = 255 * ((31744 & NU) >> 10) / 31 | 0,
              XU = 255 * ((992 & NU) >> 5) / 31 | 0,
              zU = 255 * (31 & NU) / 31 | 0;
            tU[4 * (IU + EU * pU) + 0] = UU, tU[4 * (IU + EU * pU) + 1] = XU, tU[4 * (IU + EU * pU) + 2] = zU, tU[4 * (IU + EU * pU) + 3] = 32768 & NU ? 0 : 255
          }
        return tU
      },
      _getImageData24bits: function(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
        const DU = zU,
          EU = UU.width,
          YU = UU.height;
        let NU, IU, pU = 0;
        const aU = new Uint8Array(EU * YU * 4);
        for (IU = cU; IU !== QU; IU += yU)
          for (NU = AU; NU !== oU; NU += FU, pU += 3) aU[4 * (NU + EU * IU) + 3] = 255, aU[4 * (NU + EU * IU) + 2] = DU[pU + 0], aU[4 * (NU + EU * IU) + 1] = DU[pU + 1], aU[4 * (NU + EU * IU) + 0] = DU[pU + 2];
        return aU
      },
      _getImageData32bits: function(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
        const DU = zU,
          EU = UU.width,
          YU = UU.height;
        let NU, IU, pU = 0;
        const aU = new Uint8Array(EU * YU * 4);
        for (IU = cU; IU !== QU; IU += yU)
          for (NU = AU; NU !== oU; NU += FU, pU += 4) aU[4 * (NU + EU * IU) + 2] = DU[pU + 0], aU[4 * (NU + EU * IU) + 1] = DU[pU + 1], aU[4 * (NU + EU * IU) + 0] = DU[pU + 2], aU[4 * (NU + EU * IU) + 3] = DU[pU + 3];
        return aU
      },
      _getImageDataGrey8bits: function(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
        const DU = zU,
          EU = UU.width,
          YU = UU.height;
        let NU, IU, pU, aU = 0;
        const tU = new Uint8Array(EU * YU * 4);
        for (pU = cU; pU !== QU; pU += yU)
          for (IU = AU; IU !== oU; IU += FU, aU++) NU = DU[aU], tU[4 * (IU + EU * pU) + 0] = NU, tU[4 * (IU + EU * pU) + 1] = NU, tU[4 * (IU + EU * pU) + 2] = NU, tU[4 * (IU + EU * pU) + 3] = 255;
        return tU
      },
      _getImageDataGrey16bits: function(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
        const DU = zU,
          EU = UU.width,
          YU = UU.height;
        let NU, IU, pU = 0;
        const aU = new Uint8Array(EU * YU * 4);
        for (IU = cU; IU !== QU; IU += yU)
          for (NU = AU; NU !== oU; NU += FU, pU += 2) aU[4 * (NU + EU * IU) + 0] = DU[pU + 0], aU[4 * (NU + EU * IU) + 1] = DU[pU + 0], aU[4 * (NU + EU * IU) + 2] = DU[pU + 0], aU[4 * (NU + EU * IU) + 3] = DU[pU + 1];
        return aU
      }
    };
    class FU {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(UU, XU, zU) {
        const cU = new Uint8Array(UU.buffer, UU.byteOffset, UU.byteLength),
          AU = yU(cU);
        zU(AU.width, AU.height, XU.generateMipMaps, !1, (() => {
          QU(XU, cU)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);