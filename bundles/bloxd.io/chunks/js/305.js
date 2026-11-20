export const id = 305;
export const ids = [305];
export const modules = {
  41412: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      _TGATextureLoader: () => yT
    });
    var lT = cT(38512);

    function MT(TT) {
      let kT = 0;
      return {
        id_length: TT[kT++],
        colormap_type: TT[kT++],
        image_type: TT[kT++],
        colormap_index: TT[kT++] | TT[kT++] << 8,
        colormap_length: TT[kT++] | TT[kT++] << 8,
        colormap_size: TT[kT++],
        origin: [TT[kT++] | TT[kT++] << 8, TT[kT++] | TT[kT++] << 8],
        width: TT[kT++] | TT[kT++] << 8,
        height: TT[kT++] | TT[kT++] << 8,
        pixel_size: TT[kT++],
        flags: TT[17]
      }
    }

    function KT(TT, kT) {
      if (kT.length < 19) return void lT.e.Error("Unable to load TGA file - Not enough data to contain header");
      let cT = 18;
      const KT = MT(kT);
      if (KT.id_length + cT > kT.length) return void lT.e.Error("Unable to load TGA file - Not enough data");
      cT += KT.id_length;
      let yT, fT = !1,
        xT = !1,
        IT = !1;
      switch (KT.image_type) {
        case 9:
          fT = !0;
        case 1:
          xT = !0;
          break;
        case 10:
          fT = !0;
        case 2:
          break;
        case 11:
          fT = !0;
        case 3:
          IT = !0
      }
      const AT = KT.pixel_size >> 3,
        CT = KT.width * KT.height * AT;
      let jT, vT, tT, hT, NT, QT, ST;
      if (xT && (jT = kT.subarray(cT, cT += KT.colormap_length * (KT.colormap_size >> 3))), fT) {
        let TT, lT, MT;
        yT = new Uint8Array(CT);
        let KT = 0;
        const OT = new Uint8Array(AT);
        for (; cT < CT && KT < CT;)
          if (TT = kT[cT++], lT = 1 + (127 & TT), 128 & TT) {
            for (MT = 0; MT < AT; ++MT) OT[MT] = kT[cT++];
            for (MT = 0; MT < lT; ++MT) yT.set(OT, KT + MT * AT);
            KT += AT * lT
          } else {
            for (lT *= AT, MT = 0; MT < lT; ++MT) yT[KT + MT] = kT[cT++];
            KT += lT
          }
      } else yT = kT.subarray(cT, cT + (xT ? KT.width * KT.height : CT));
      switch ((48 & KT.flags) >> 4) {
        default:
        case 2:
          vT = 0, hT = 1, ST = KT.width, tT = 0, NT = 1, QT = KT.height;
          break;
        case 0:
          vT = 0, hT = 1, ST = KT.width, tT = KT.height - 1, NT = -1, QT = -1;
          break;
        case 3:
          vT = KT.width - 1, hT = -1, ST = -1, tT = 0, NT = 1, QT = KT.height;
          break;
        case 1:
          vT = KT.width - 1, hT = -1, ST = -1, tT = KT.height - 1, NT = -1, QT = -1
      }
      const DT = "_getImageData" + (IT ? "Grey" : "") + KT.pixel_size + "bits",
        aT = OT[DT](KT, jT, yT, tT, NT, QT, vT, hT, ST);
      TT.Dv()._uploadDataToTextureDirectly(TT, aT)
    }
    const OT = {
      GetTGAHeader: MT,
      UploadContent: KT,
      _getImageData8bits: function(TT, kT, cT, lT, MT, KT, OT, yT, fT) {
        const xT = cT,
          IT = kT,
          AT = TT.width,
          CT = TT.height;
        let jT, vT, tT, hT = 0;
        const NT = new Uint8Array(AT * CT * 4);
        for (tT = lT; tT !== KT; tT += MT)
          for (vT = OT; vT !== fT; vT += yT, hT++) jT = xT[hT], NT[4 * (vT + AT * tT) + 3] = 255, NT[4 * (vT + AT * tT) + 2] = IT[3 * jT + 0], NT[4 * (vT + AT * tT) + 1] = IT[3 * jT + 1], NT[4 * (vT + AT * tT) + 0] = IT[3 * jT + 2];
        return NT
      },
      _getImageData16bits: function(TT, kT, cT, lT, MT, KT, OT, yT, fT) {
        const xT = cT,
          IT = TT.width,
          AT = TT.height;
        let CT, jT, vT, tT = 0;
        const hT = new Uint8Array(IT * AT * 4);
        for (vT = lT; vT !== KT; vT += MT)
          for (jT = OT; jT !== fT; jT += yT, tT += 2) {
            CT = xT[tT + 0] + (xT[tT + 1] << 8);
            const TT = 255 * ((31744 & CT) >> 10) / 31 | 0,
              kT = 255 * ((992 & CT) >> 5) / 31 | 0,
              cT = 255 * (31 & CT) / 31 | 0;
            hT[4 * (jT + IT * vT) + 0] = TT, hT[4 * (jT + IT * vT) + 1] = kT, hT[4 * (jT + IT * vT) + 2] = cT, hT[4 * (jT + IT * vT) + 3] = 32768 & CT ? 0 : 255
          }
        return hT
      },
      _getImageData24bits: function(TT, kT, cT, lT, MT, KT, OT, yT, fT) {
        const xT = cT,
          IT = TT.width,
          AT = TT.height;
        let CT, jT, vT = 0;
        const tT = new Uint8Array(IT * AT * 4);
        for (jT = lT; jT !== KT; jT += MT)
          for (CT = OT; CT !== fT; CT += yT, vT += 3) tT[4 * (CT + IT * jT) + 3] = 255, tT[4 * (CT + IT * jT) + 2] = xT[vT + 0], tT[4 * (CT + IT * jT) + 1] = xT[vT + 1], tT[4 * (CT + IT * jT) + 0] = xT[vT + 2];
        return tT
      },
      _getImageData32bits: function(TT, kT, cT, lT, MT, KT, OT, yT, fT) {
        const xT = cT,
          IT = TT.width,
          AT = TT.height;
        let CT, jT, vT = 0;
        const tT = new Uint8Array(IT * AT * 4);
        for (jT = lT; jT !== KT; jT += MT)
          for (CT = OT; CT !== fT; CT += yT, vT += 4) tT[4 * (CT + IT * jT) + 2] = xT[vT + 0], tT[4 * (CT + IT * jT) + 1] = xT[vT + 1], tT[4 * (CT + IT * jT) + 0] = xT[vT + 2], tT[4 * (CT + IT * jT) + 3] = xT[vT + 3];
        return tT
      },
      _getImageDataGrey8bits: function(TT, kT, cT, lT, MT, KT, OT, yT, fT) {
        const xT = cT,
          IT = TT.width,
          AT = TT.height;
        let CT, jT, vT, tT = 0;
        const hT = new Uint8Array(IT * AT * 4);
        for (vT = lT; vT !== KT; vT += MT)
          for (jT = OT; jT !== fT; jT += yT, tT++) CT = xT[tT], hT[4 * (jT + IT * vT) + 0] = CT, hT[4 * (jT + IT * vT) + 1] = CT, hT[4 * (jT + IT * vT) + 2] = CT, hT[4 * (jT + IT * vT) + 3] = 255;
        return hT
      },
      _getImageDataGrey16bits: function(TT, kT, cT, lT, MT, KT, OT, yT, fT) {
        const xT = cT,
          IT = TT.width,
          AT = TT.height;
        let CT, jT, vT = 0;
        const tT = new Uint8Array(IT * AT * 4);
        for (jT = lT; jT !== KT; jT += MT)
          for (CT = OT; CT !== fT; CT += yT, vT += 2) tT[4 * (CT + IT * jT) + 0] = xT[vT + 0], tT[4 * (CT + IT * jT) + 1] = xT[vT + 0], tT[4 * (CT + IT * jT) + 2] = xT[vT + 0], tT[4 * (CT + IT * jT) + 3] = xT[vT + 1];
        return tT
      }
    };
    class yT {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(TT, kT, cT) {
        const lT = new Uint8Array(TT.buffer, TT.byteOffset, TT.byteLength),
          OT = MT(lT);
        cT(OT.width, OT.height, kT.generateMipMaps, !1, (() => {
          KT(kT, lT)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);