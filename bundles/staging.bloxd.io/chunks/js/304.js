export const id = 304;
export const ids = [304];
export const modules = {
  40917: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      _TGATextureLoader: () => OY
    });
    var FY = DY(38040);

    function AY(YY) {
      let rY = 0;
      return {
        id_length: YY[rY++],
        colormap_type: YY[rY++],
        image_type: YY[rY++],
        colormap_index: YY[rY++] | YY[rY++] << 8,
        colormap_length: YY[rY++] | YY[rY++] << 8,
        colormap_size: YY[rY++],
        origin: [YY[rY++] | YY[rY++] << 8, YY[rY++] | YY[rY++] << 8],
        width: YY[rY++] | YY[rY++] << 8,
        height: YY[rY++] | YY[rY++] << 8,
        pixel_size: YY[rY++],
        flags: YY[17]
      }
    }

    function IY(YY, rY) {
      if (rY.length < 19) return void FY.d.Error("Unable to load TGA file - Not enough data to contain header");
      let DY = 18;
      const IY = AY(rY);
      if (IY.id_length + DY > rY.length) return void FY.d.Error("Unable to load TGA file - Not enough data");
      DY += IY.id_length;
      let OY, gY = !1,
        aY = !1,
        vY = !1;
      switch (IY.image_type) {
        case 9:
          gY = !0;
        case 1:
          aY = !0;
          break;
        case 10:
          gY = !0;
        case 2:
          break;
        case 11:
          gY = !0;
        case 3:
          vY = !0
      }
      const uY = IY.pixel_size >> 3,
        sY = IY.width * IY.height * uY;
      let iY, yY, QY, oY, WY, EY, mY;
      if (aY && (iY = rY.subarray(DY, DY += IY.colormap_length * (IY.colormap_size >> 3))), gY) {
        let YY, FY, AY;
        OY = new Uint8Array(sY);
        let IY = 0;
        const RY = new Uint8Array(uY);
        for (; DY < sY && IY < sY;)
          if (YY = rY[DY++], FY = 1 + (127 & YY), 128 & YY) {
            for (AY = 0; AY < uY; ++AY) RY[AY] = rY[DY++];
            for (AY = 0; AY < FY; ++AY) OY.set(RY, IY + AY * uY);
            IY += uY * FY
          } else {
            for (FY *= uY, AY = 0; AY < FY; ++AY) OY[IY + AY] = rY[DY++];
            IY += FY
          }
      } else OY = rY.subarray(DY, DY + (aY ? IY.width * IY.height : sY));
      switch ((48 & IY.flags) >> 4) {
        default:
        case 2:
          yY = 0, oY = 1, mY = IY.width, QY = 0, WY = 1, EY = IY.height;
          break;
        case 0:
          yY = 0, oY = 1, mY = IY.width, QY = IY.height - 1, WY = -1, EY = -1;
          break;
        case 3:
          yY = IY.width - 1, oY = -1, mY = -1, QY = 0, WY = 1, EY = IY.height;
          break;
        case 1:
          yY = IY.width - 1, oY = -1, mY = -1, QY = IY.height - 1, WY = -1, EY = -1
      }
      const VY = "_getImageData" + (vY ? "Grey" : "") + IY.pixel_size + "bits",
        SY = RY[VY](IY, iY, OY, QY, WY, EY, yY, oY, mY);
      YY.ky()._uploadDataToTextureDirectly(YY, SY)
    }
    const RY = {
      GetTGAHeader: AY,
      UploadContent: IY,
      _getImageData8bits: function(YY, rY, DY, FY, AY, IY, RY, OY, gY) {
        const aY = DY,
          vY = rY,
          uY = YY.width,
          sY = YY.height;
        let iY, yY, QY, oY = 0;
        const WY = new Uint8Array(uY * sY * 4);
        for (QY = FY; QY !== IY; QY += AY)
          for (yY = RY; yY !== gY; yY += OY, oY++) iY = aY[oY], WY[4 * (yY + uY * QY) + 3] = 255, WY[4 * (yY + uY * QY) + 2] = vY[3 * iY + 0], WY[4 * (yY + uY * QY) + 1] = vY[3 * iY + 1], WY[4 * (yY + uY * QY) + 0] = vY[3 * iY + 2];
        return WY
      },
      _getImageData16bits: function(YY, rY, DY, FY, AY, IY, RY, OY, gY) {
        const aY = DY,
          vY = YY.width,
          uY = YY.height;
        let sY, iY, yY, QY = 0;
        const oY = new Uint8Array(vY * uY * 4);
        for (yY = FY; yY !== IY; yY += AY)
          for (iY = RY; iY !== gY; iY += OY, QY += 2) {
            sY = aY[QY + 0] + (aY[QY + 1] << 8);
            const YY = 255 * ((31744 & sY) >> 10) / 31 | 0,
              rY = 255 * ((992 & sY) >> 5) / 31 | 0,
              DY = 255 * (31 & sY) / 31 | 0;
            oY[4 * (iY + vY * yY) + 0] = YY, oY[4 * (iY + vY * yY) + 1] = rY, oY[4 * (iY + vY * yY) + 2] = DY, oY[4 * (iY + vY * yY) + 3] = 32768 & sY ? 0 : 255
          }
        return oY
      },
      _getImageData24bits: function(YY, rY, DY, FY, AY, IY, RY, OY, gY) {
        const aY = DY,
          vY = YY.width,
          uY = YY.height;
        let sY, iY, yY = 0;
        const QY = new Uint8Array(vY * uY * 4);
        for (iY = FY; iY !== IY; iY += AY)
          for (sY = RY; sY !== gY; sY += OY, yY += 3) QY[4 * (sY + vY * iY) + 3] = 255, QY[4 * (sY + vY * iY) + 2] = aY[yY + 0], QY[4 * (sY + vY * iY) + 1] = aY[yY + 1], QY[4 * (sY + vY * iY) + 0] = aY[yY + 2];
        return QY
      },
      _getImageData32bits: function(YY, rY, DY, FY, AY, IY, RY, OY, gY) {
        const aY = DY,
          vY = YY.width,
          uY = YY.height;
        let sY, iY, yY = 0;
        const QY = new Uint8Array(vY * uY * 4);
        for (iY = FY; iY !== IY; iY += AY)
          for (sY = RY; sY !== gY; sY += OY, yY += 4) QY[4 * (sY + vY * iY) + 2] = aY[yY + 0], QY[4 * (sY + vY * iY) + 1] = aY[yY + 1], QY[4 * (sY + vY * iY) + 0] = aY[yY + 2], QY[4 * (sY + vY * iY) + 3] = aY[yY + 3];
        return QY
      },
      _getImageDataGrey8bits: function(YY, rY, DY, FY, AY, IY, RY, OY, gY) {
        const aY = DY,
          vY = YY.width,
          uY = YY.height;
        let sY, iY, yY, QY = 0;
        const oY = new Uint8Array(vY * uY * 4);
        for (yY = FY; yY !== IY; yY += AY)
          for (iY = RY; iY !== gY; iY += OY, QY++) sY = aY[QY], oY[4 * (iY + vY * yY) + 0] = sY, oY[4 * (iY + vY * yY) + 1] = sY, oY[4 * (iY + vY * yY) + 2] = sY, oY[4 * (iY + vY * yY) + 3] = 255;
        return oY
      },
      _getImageDataGrey16bits: function(YY, rY, DY, FY, AY, IY, RY, OY, gY) {
        const aY = DY,
          vY = YY.width,
          uY = YY.height;
        let sY, iY, yY = 0;
        const QY = new Uint8Array(vY * uY * 4);
        for (iY = FY; iY !== IY; iY += AY)
          for (sY = RY; sY !== gY; sY += OY, yY += 2) QY[4 * (sY + vY * iY) + 0] = aY[yY + 0], QY[4 * (sY + vY * iY) + 1] = aY[yY + 0], QY[4 * (sY + vY * iY) + 2] = aY[yY + 0], QY[4 * (sY + vY * iY) + 3] = aY[yY + 1];
        return QY
      }
    };
    class OY {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(YY, rY, DY) {
        const FY = new Uint8Array(YY.buffer, YY.byteOffset, YY.byteLength),
          RY = AY(FY);
        DY(RY.width, RY.height, rY.generateMipMaps, !1, (() => {
          IY(rY, FY)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);