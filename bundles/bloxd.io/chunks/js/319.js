export const id = 319;
export const ids = [319];
export const modules = {
  41997: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      _TGATextureLoader: () => nT
    });
    var WT = mT(38800);

    function zT(TT) {
      let UT = 0;
      return {
        id_length: TT[UT++],
        colormap_type: TT[UT++],
        image_type: TT[UT++],
        colormap_index: TT[UT++] | TT[UT++] << 8,
        colormap_length: TT[UT++] | TT[UT++] << 8,
        colormap_size: TT[UT++],
        origin: [TT[UT++] | TT[UT++] << 8, TT[UT++] | TT[UT++] << 8],
        width: TT[UT++] | TT[UT++] << 8,
        height: TT[UT++] | TT[UT++] << 8,
        pixel_size: TT[UT++],
        flags: TT[17]
      }
    }

    function MT(TT, UT) {
      if (UT.length < 19) return void WT.b.Error("Unable to load TGA file - Not enough data to contain header");
      let mT = 18;
      const MT = zT(UT);
      if (MT.id_length + mT > UT.length) return void WT.b.Error("Unable to load TGA file - Not enough data");
      mT += MT.id_length;
      let nT, HT = !1,
        kT = !1,
        jT = !1;
      switch (MT.image_type) {
        case 9:
          HT = !0;
        case 1:
          kT = !0;
          break;
        case 10:
          HT = !0;
        case 2:
          break;
        case 11:
          HT = !0;
        case 3:
          jT = !0
      }
      const lT = MT.pixel_size >> 3,
        LT = MT.width * MT.height * lT;
      let pT, BT, ZT, cT, vT, fT, qT;
      if (kT && (pT = UT.subarray(mT, mT += MT.colormap_length * (MT.colormap_size >> 3))), HT) {
        let TT, WT, zT;
        nT = new Uint8Array(LT);
        let MT = 0;
        const gT = new Uint8Array(lT);
        for (; mT < LT && MT < LT;)
          if (TT = UT[mT++], WT = 1 + (127 & TT), 128 & TT) {
            for (zT = 0; zT < lT; ++zT) gT[zT] = UT[mT++];
            for (zT = 0; zT < WT; ++zT) nT.set(gT, MT + zT * lT);
            MT += lT * WT
          } else {
            for (WT *= lT, zT = 0; zT < WT; ++zT) nT[MT + zT] = UT[mT++];
            MT += WT
          }
      } else nT = UT.subarray(mT, mT + (kT ? MT.width * MT.height : LT));
      switch ((48 & MT.flags) >> 4) {
        default:
        case 2:
          BT = 0, cT = 1, qT = MT.width, ZT = 0, vT = 1, fT = MT.height;
          break;
        case 0:
          BT = 0, cT = 1, qT = MT.width, ZT = MT.height - 1, vT = -1, fT = -1;
          break;
        case 3:
          BT = MT.width - 1, cT = -1, qT = -1, ZT = 0, vT = 1, fT = MT.height;
          break;
        case 1:
          BT = MT.width - 1, cT = -1, qT = -1, ZT = MT.height - 1, vT = -1, fT = -1
      }
      const iT = "_getImageData" + (jT ? "Grey" : "") + MT.pixel_size + "bits",
        bT = gT[iT](MT, pT, nT, ZT, vT, fT, BT, cT, qT);
      TT.eB()._uploadDataToTextureDirectly(TT, bT)
    }
    const gT = {
      GetTGAHeader: zT,
      UploadContent: MT,
      _getImageData8bits: function(TT, UT, mT, WT, zT, MT, gT, nT, HT) {
        const kT = mT,
          jT = UT,
          lT = TT.width,
          LT = TT.height;
        let pT, BT, ZT, cT = 0;
        const vT = new Uint8Array(lT * LT * 4);
        for (ZT = WT; ZT !== MT; ZT += zT)
          for (BT = gT; BT !== HT; BT += nT, cT++) pT = kT[cT], vT[4 * (BT + lT * ZT) + 3] = 255, vT[4 * (BT + lT * ZT) + 2] = jT[3 * pT + 0], vT[4 * (BT + lT * ZT) + 1] = jT[3 * pT + 1], vT[4 * (BT + lT * ZT) + 0] = jT[3 * pT + 2];
        return vT
      },
      _getImageData16bits: function(TT, UT, mT, WT, zT, MT, gT, nT, HT) {
        const kT = mT,
          jT = TT.width,
          lT = TT.height;
        let LT, pT, BT, ZT = 0;
        const cT = new Uint8Array(jT * lT * 4);
        for (BT = WT; BT !== MT; BT += zT)
          for (pT = gT; pT !== HT; pT += nT, ZT += 2) {
            LT = kT[ZT + 0] + (kT[ZT + 1] << 8);
            const TT = 255 * ((31744 & LT) >> 10) / 31 | 0,
              UT = 255 * ((992 & LT) >> 5) / 31 | 0,
              mT = 255 * (31 & LT) / 31 | 0;
            cT[4 * (pT + jT * BT) + 0] = TT, cT[4 * (pT + jT * BT) + 1] = UT, cT[4 * (pT + jT * BT) + 2] = mT, cT[4 * (pT + jT * BT) + 3] = 32768 & LT ? 0 : 255
          }
        return cT
      },
      _getImageData24bits: function(TT, UT, mT, WT, zT, MT, gT, nT, HT) {
        const kT = mT,
          jT = TT.width,
          lT = TT.height;
        let LT, pT, BT = 0;
        const ZT = new Uint8Array(jT * lT * 4);
        for (pT = WT; pT !== MT; pT += zT)
          for (LT = gT; LT !== HT; LT += nT, BT += 3) ZT[4 * (LT + jT * pT) + 3] = 255, ZT[4 * (LT + jT * pT) + 2] = kT[BT + 0], ZT[4 * (LT + jT * pT) + 1] = kT[BT + 1], ZT[4 * (LT + jT * pT) + 0] = kT[BT + 2];
        return ZT
      },
      _getImageData32bits: function(TT, UT, mT, WT, zT, MT, gT, nT, HT) {
        const kT = mT,
          jT = TT.width,
          lT = TT.height;
        let LT, pT, BT = 0;
        const ZT = new Uint8Array(jT * lT * 4);
        for (pT = WT; pT !== MT; pT += zT)
          for (LT = gT; LT !== HT; LT += nT, BT += 4) ZT[4 * (LT + jT * pT) + 2] = kT[BT + 0], ZT[4 * (LT + jT * pT) + 1] = kT[BT + 1], ZT[4 * (LT + jT * pT) + 0] = kT[BT + 2], ZT[4 * (LT + jT * pT) + 3] = kT[BT + 3];
        return ZT
      },
      _getImageDataGrey8bits: function(TT, UT, mT, WT, zT, MT, gT, nT, HT) {
        const kT = mT,
          jT = TT.width,
          lT = TT.height;
        let LT, pT, BT, ZT = 0;
        const cT = new Uint8Array(jT * lT * 4);
        for (BT = WT; BT !== MT; BT += zT)
          for (pT = gT; pT !== HT; pT += nT, ZT++) LT = kT[ZT], cT[4 * (pT + jT * BT) + 0] = LT, cT[4 * (pT + jT * BT) + 1] = LT, cT[4 * (pT + jT * BT) + 2] = LT, cT[4 * (pT + jT * BT) + 3] = 255;
        return cT
      },
      _getImageDataGrey16bits: function(TT, UT, mT, WT, zT, MT, gT, nT, HT) {
        const kT = mT,
          jT = TT.width,
          lT = TT.height;
        let LT, pT, BT = 0;
        const ZT = new Uint8Array(jT * lT * 4);
        for (pT = WT; pT !== MT; pT += zT)
          for (LT = gT; LT !== HT; LT += nT, BT += 2) ZT[4 * (LT + jT * pT) + 0] = kT[BT + 0], ZT[4 * (LT + jT * pT) + 1] = kT[BT + 0], ZT[4 * (LT + jT * pT) + 2] = kT[BT + 0], ZT[4 * (LT + jT * pT) + 3] = kT[BT + 1];
        return ZT
      }
    };
    class nT {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(TT, UT, mT) {
        const WT = new Uint8Array(TT.buffer, TT.byteOffset, TT.byteLength),
          gT = zT(WT);
        mT(gT.width, gT.height, UT.generateMipMaps, !1, (() => {
          MT(UT, WT)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);