export const id = 623;
export const ids = [623];
export const modules = {
  45323: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      _TGATextureLoader: () => tH
    });
    var AH = LH(39595);

    function rH(HH) {
      let BH = 0;
      return {
        id_length: HH[BH++],
        colormap_type: HH[BH++],
        image_type: HH[BH++],
        colormap_index: HH[BH++] | HH[BH++] << 8,
        colormap_length: HH[BH++] | HH[BH++] << 8,
        colormap_size: HH[BH++],
        origin: [HH[BH++] | HH[BH++] << 8, HH[BH++] | HH[BH++] << 8],
        width: HH[BH++] | HH[BH++] << 8,
        height: HH[BH++] | HH[BH++] << 8,
        pixel_size: HH[BH++],
        flags: HH[17]
      }
    }

    function SH(HH, BH) {
      if (BH.length < 19) return void AH.e.Error("Unable to load TGA file - Not enough data to contain header");
      let LH = 18;
      const SH = rH(BH);
      if (SH.id_length + LH > BH.length) return void AH.e.Error("Unable to load TGA file - Not enough data");
      LH += SH.id_length;
      let tH, zH = !1,
        CH = !1,
        EH = !1;
      switch (SH.image_type) {
        case 9:
          zH = !0;
        case 1:
          CH = !0;
          break;
        case 10:
          zH = !0;
        case 2:
          break;
        case 11:
          zH = !0;
        case 3:
          EH = !0
      }
      const XH = SH.pixel_size >> 3,
        GH = SH.width * SH.height * XH;
      let YH, uH, QH, WH, MH, xH, vH;
      if (CH && (YH = BH.subarray(LH, LH += SH.colormap_length * (SH.colormap_size >> 3))), zH) {
        let HH, AH, rH;
        tH = new Uint8Array(GH);
        let SH = 0;
        const hH = new Uint8Array(XH);
        for (; LH < GH && SH < GH;)
          if (HH = BH[LH++], AH = 1 + (127 & HH), 128 & HH) {
            for (rH = 0; rH < XH; ++rH) hH[rH] = BH[LH++];
            for (rH = 0; rH < AH; ++rH) tH.set(hH, SH + rH * XH);
            SH += XH * AH
          } else {
            for (AH *= XH, rH = 0; rH < AH; ++rH) tH[SH + rH] = BH[LH++];
            SH += AH
          }
      } else tH = BH.subarray(LH, LH + (CH ? SH.width * SH.height : GH));
      switch ((48 & SH.flags) >> 4) {
        default:
        case 2:
          uH = 0, WH = 1, vH = SH.width, QH = 0, MH = 1, xH = SH.height;
          break;
        case 0:
          uH = 0, WH = 1, vH = SH.width, QH = SH.height - 1, MH = -1, xH = -1;
          break;
        case 3:
          uH = SH.width - 1, WH = -1, vH = -1, QH = 0, MH = 1, xH = SH.height;
          break;
        case 1:
          uH = SH.width - 1, WH = -1, vH = -1, QH = SH.height - 1, MH = -1, xH = -1
      }
      const PH = "_getImageData" + (EH ? "Grey" : "") + SH.pixel_size + "bits",
        TH = hH[PH](SH, YH, tH, QH, MH, xH, uH, WH, vH);
      HH.Iu()._uploadDataToTextureDirectly(HH, TH)
    }
    const hH = {
      GetTGAHeader: rH,
      UploadContent: SH,
      _getImageData8bits: function(HH, BH, LH, AH, rH, SH, hH, tH, zH) {
        const CH = LH,
          EH = BH,
          XH = HH.width,
          GH = HH.height;
        let YH, uH, QH, WH = 0;
        const MH = new Uint8Array(XH * GH * 4);
        for (QH = AH; QH !== SH; QH += rH)
          for (uH = hH; uH !== zH; uH += tH, WH++) YH = CH[WH], MH[4 * (uH + XH * QH) + 3] = 255, MH[4 * (uH + XH * QH) + 2] = EH[3 * YH + 0], MH[4 * (uH + XH * QH) + 1] = EH[3 * YH + 1], MH[4 * (uH + XH * QH) + 0] = EH[3 * YH + 2];
        return MH
      },
      _getImageData16bits: function(HH, BH, LH, AH, rH, SH, hH, tH, zH) {
        const CH = LH,
          EH = HH.width,
          XH = HH.height;
        let GH, YH, uH, QH = 0;
        const WH = new Uint8Array(EH * XH * 4);
        for (uH = AH; uH !== SH; uH += rH)
          for (YH = hH; YH !== zH; YH += tH, QH += 2) {
            GH = CH[QH + 0] + (CH[QH + 1] << 8);
            const HH = 255 * ((31744 & GH) >> 10) / 31 | 0,
              BH = 255 * ((992 & GH) >> 5) / 31 | 0,
              LH = 255 * (31 & GH) / 31 | 0;
            WH[4 * (YH + EH * uH) + 0] = HH, WH[4 * (YH + EH * uH) + 1] = BH, WH[4 * (YH + EH * uH) + 2] = LH, WH[4 * (YH + EH * uH) + 3] = 32768 & GH ? 0 : 255
          }
        return WH
      },
      _getImageData24bits: function(HH, BH, LH, AH, rH, SH, hH, tH, zH) {
        const CH = LH,
          EH = HH.width,
          XH = HH.height;
        let GH, YH, uH = 0;
        const QH = new Uint8Array(EH * XH * 4);
        for (YH = AH; YH !== SH; YH += rH)
          for (GH = hH; GH !== zH; GH += tH, uH += 3) QH[4 * (GH + EH * YH) + 3] = 255, QH[4 * (GH + EH * YH) + 2] = CH[uH + 0], QH[4 * (GH + EH * YH) + 1] = CH[uH + 1], QH[4 * (GH + EH * YH) + 0] = CH[uH + 2];
        return QH
      },
      _getImageData32bits: function(HH, BH, LH, AH, rH, SH, hH, tH, zH) {
        const CH = LH,
          EH = HH.width,
          XH = HH.height;
        let GH, YH, uH = 0;
        const QH = new Uint8Array(EH * XH * 4);
        for (YH = AH; YH !== SH; YH += rH)
          for (GH = hH; GH !== zH; GH += tH, uH += 4) QH[4 * (GH + EH * YH) + 2] = CH[uH + 0], QH[4 * (GH + EH * YH) + 1] = CH[uH + 1], QH[4 * (GH + EH * YH) + 0] = CH[uH + 2], QH[4 * (GH + EH * YH) + 3] = CH[uH + 3];
        return QH
      },
      _getImageDataGrey8bits: function(HH, BH, LH, AH, rH, SH, hH, tH, zH) {
        const CH = LH,
          EH = HH.width,
          XH = HH.height;
        let GH, YH, uH, QH = 0;
        const WH = new Uint8Array(EH * XH * 4);
        for (uH = AH; uH !== SH; uH += rH)
          for (YH = hH; YH !== zH; YH += tH, QH++) GH = CH[QH], WH[4 * (YH + EH * uH) + 0] = GH, WH[4 * (YH + EH * uH) + 1] = GH, WH[4 * (YH + EH * uH) + 2] = GH, WH[4 * (YH + EH * uH) + 3] = 255;
        return WH
      },
      _getImageDataGrey16bits: function(HH, BH, LH, AH, rH, SH, hH, tH, zH) {
        const CH = LH,
          EH = HH.width,
          XH = HH.height;
        let GH, YH, uH = 0;
        const QH = new Uint8Array(EH * XH * 4);
        for (YH = AH; YH !== SH; YH += rH)
          for (GH = hH; GH !== zH; GH += tH, uH += 2) QH[4 * (GH + EH * YH) + 0] = CH[uH + 0], QH[4 * (GH + EH * YH) + 1] = CH[uH + 0], QH[4 * (GH + EH * YH) + 2] = CH[uH + 0], QH[4 * (GH + EH * YH) + 3] = CH[uH + 1];
        return QH
      }
    };
    class tH {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(HH, BH, LH) {
        const AH = new Uint8Array(HH.buffer, HH.byteOffset, HH.byteLength),
          hH = rH(AH);
        LH(hH.width, hH.height, BH.generateMipMaps, !1, (() => {
          SH(BH, AH)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);