export const id = 304;
export const ids = [304];
export const modules = {
  40665: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      _TGATextureLoader: () => XT
    });
    var iT = IT(37660);

    function zT(TT) {
      let oT = 0;
      return {
        id_length: TT[oT++],
        colormap_type: TT[oT++],
        image_type: TT[oT++],
        colormap_index: TT[oT++] | TT[oT++] << 8,
        colormap_length: TT[oT++] | TT[oT++] << 8,
        colormap_size: TT[oT++],
        origin: [TT[oT++] | TT[oT++] << 8, TT[oT++] | TT[oT++] << 8],
        width: TT[oT++] | TT[oT++] << 8,
        height: TT[oT++] | TT[oT++] << 8,
        pixel_size: TT[oT++],
        flags: TT[17]
      }
    }

    function kT(TT, oT) {
      if (oT.length < 19) return void iT.d.Error("Unable to load TGA file - Not enough data to contain header");
      let IT = 18;
      const kT = zT(oT);
      if (kT.id_length + IT > oT.length) return void iT.d.Error("Unable to load TGA file - Not enough data");
      IT += kT.id_length;
      let XT, BT = !1,
        FT = !1,
        ST = !1;
      switch (kT.image_type) {
        case 9:
          BT = !0;
        case 1:
          FT = !0;
          break;
        case 10:
          BT = !0;
        case 2:
          break;
        case 11:
          BT = !0;
        case 3:
          ST = !0
      }
      const DT = kT.pixel_size >> 3,
        LT = kT.width * kT.height * DT;
      let xT, cT, KT, MT, rT, AT, gT;
      if (FT && (xT = oT.subarray(IT, IT += kT.colormap_length * (kT.colormap_size >> 3))), BT) {
        let TT, iT, zT;
        XT = new Uint8Array(LT);
        let kT = 0;
        const WT = new Uint8Array(DT);
        for (; IT < LT && kT < LT;)
          if (TT = oT[IT++], iT = 1 + (127 & TT), 128 & TT) {
            for (zT = 0; zT < DT; ++zT) WT[zT] = oT[IT++];
            for (zT = 0; zT < iT; ++zT) XT.set(WT, kT + zT * DT);
            kT += DT * iT
          } else {
            for (iT *= DT, zT = 0; zT < iT; ++zT) XT[kT + zT] = oT[IT++];
            kT += iT
          }
      } else XT = oT.subarray(IT, IT + (FT ? kT.width * kT.height : LT));
      switch ((48 & kT.flags) >> 4) {
        default:
        case 2:
          cT = 0, MT = 1, gT = kT.width, KT = 0, rT = 1, AT = kT.height;
          break;
        case 0:
          cT = 0, MT = 1, gT = kT.width, KT = kT.height - 1, rT = -1, AT = -1;
          break;
        case 3:
          cT = kT.width - 1, MT = -1, gT = -1, KT = 0, rT = 1, AT = kT.height;
          break;
        case 1:
          cT = kT.width - 1, MT = -1, gT = -1, KT = kT.height - 1, rT = -1, AT = -1
      }
      const hT = "_getImageData" + (ST ? "Grey" : "") + kT.pixel_size + "bits",
        wT = WT[hT](kT, xT, XT, KT, rT, AT, cT, MT, gT);
      TT.Zc()._uploadDataToTextureDirectly(TT, wT)
    }
    const WT = {
      GetTGAHeader: zT,
      UploadContent: kT,
      _getImageData8bits: function(TT, oT, IT, iT, zT, kT, WT, XT, BT) {
        const FT = IT,
          ST = oT,
          DT = TT.width,
          LT = TT.height;
        let xT, cT, KT, MT = 0;
        const rT = new Uint8Array(DT * LT * 4);
        for (KT = iT; KT !== kT; KT += zT)
          for (cT = WT; cT !== BT; cT += XT, MT++) xT = FT[MT], rT[4 * (cT + DT * KT) + 3] = 255, rT[4 * (cT + DT * KT) + 2] = ST[3 * xT + 0], rT[4 * (cT + DT * KT) + 1] = ST[3 * xT + 1], rT[4 * (cT + DT * KT) + 0] = ST[3 * xT + 2];
        return rT
      },
      _getImageData16bits: function(TT, oT, IT, iT, zT, kT, WT, XT, BT) {
        const FT = IT,
          ST = TT.width,
          DT = TT.height;
        let LT, xT, cT, KT = 0;
        const MT = new Uint8Array(ST * DT * 4);
        for (cT = iT; cT !== kT; cT += zT)
          for (xT = WT; xT !== BT; xT += XT, KT += 2) {
            LT = FT[KT + 0] + (FT[KT + 1] << 8);
            const TT = 255 * ((31744 & LT) >> 10) / 31 | 0,
              oT = 255 * ((992 & LT) >> 5) / 31 | 0,
              IT = 255 * (31 & LT) / 31 | 0;
            MT[4 * (xT + ST * cT) + 0] = TT, MT[4 * (xT + ST * cT) + 1] = oT, MT[4 * (xT + ST * cT) + 2] = IT, MT[4 * (xT + ST * cT) + 3] = 32768 & LT ? 0 : 255
          }
        return MT
      },
      _getImageData24bits: function(TT, oT, IT, iT, zT, kT, WT, XT, BT) {
        const FT = IT,
          ST = TT.width,
          DT = TT.height;
        let LT, xT, cT = 0;
        const KT = new Uint8Array(ST * DT * 4);
        for (xT = iT; xT !== kT; xT += zT)
          for (LT = WT; LT !== BT; LT += XT, cT += 3) KT[4 * (LT + ST * xT) + 3] = 255, KT[4 * (LT + ST * xT) + 2] = FT[cT + 0], KT[4 * (LT + ST * xT) + 1] = FT[cT + 1], KT[4 * (LT + ST * xT) + 0] = FT[cT + 2];
        return KT
      },
      _getImageData32bits: function(TT, oT, IT, iT, zT, kT, WT, XT, BT) {
        const FT = IT,
          ST = TT.width,
          DT = TT.height;
        let LT, xT, cT = 0;
        const KT = new Uint8Array(ST * DT * 4);
        for (xT = iT; xT !== kT; xT += zT)
          for (LT = WT; LT !== BT; LT += XT, cT += 4) KT[4 * (LT + ST * xT) + 2] = FT[cT + 0], KT[4 * (LT + ST * xT) + 1] = FT[cT + 1], KT[4 * (LT + ST * xT) + 0] = FT[cT + 2], KT[4 * (LT + ST * xT) + 3] = FT[cT + 3];
        return KT
      },
      _getImageDataGrey8bits: function(TT, oT, IT, iT, zT, kT, WT, XT, BT) {
        const FT = IT,
          ST = TT.width,
          DT = TT.height;
        let LT, xT, cT, KT = 0;
        const MT = new Uint8Array(ST * DT * 4);
        for (cT = iT; cT !== kT; cT += zT)
          for (xT = WT; xT !== BT; xT += XT, KT++) LT = FT[KT], MT[4 * (xT + ST * cT) + 0] = LT, MT[4 * (xT + ST * cT) + 1] = LT, MT[4 * (xT + ST * cT) + 2] = LT, MT[4 * (xT + ST * cT) + 3] = 255;
        return MT
      },
      _getImageDataGrey16bits: function(TT, oT, IT, iT, zT, kT, WT, XT, BT) {
        const FT = IT,
          ST = TT.width,
          DT = TT.height;
        let LT, xT, cT = 0;
        const KT = new Uint8Array(ST * DT * 4);
        for (xT = iT; xT !== kT; xT += zT)
          for (LT = WT; LT !== BT; LT += XT, cT += 2) KT[4 * (LT + ST * xT) + 0] = FT[cT + 0], KT[4 * (LT + ST * xT) + 1] = FT[cT + 0], KT[4 * (LT + ST * xT) + 2] = FT[cT + 0], KT[4 * (LT + ST * xT) + 3] = FT[cT + 1];
        return KT
      }
    };
    class XT {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(TT, oT, IT) {
        const iT = new Uint8Array(TT.buffer, TT.byteOffset, TT.byteLength),
          WT = zT(iT);
        IT(WT.width, WT.height, oT.generateMipMaps, !1, (() => {
          kT(oT, iT)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);