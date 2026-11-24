export const id = 314;
export const ids = [314];
export const modules = {
  41894: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      _TGATextureLoader: () => NS
    });
    var tS = gS(38687);

    function bS(SS) {
      let HS = 0;
      return {
        id_length: SS[HS++],
        colormap_type: SS[HS++],
        image_type: SS[HS++],
        colormap_index: SS[HS++] | SS[HS++] << 8,
        colormap_length: SS[HS++] | SS[HS++] << 8,
        colormap_size: SS[HS++],
        origin: [SS[HS++] | SS[HS++] << 8, SS[HS++] | SS[HS++] << 8],
        width: SS[HS++] | SS[HS++] << 8,
        height: SS[HS++] | SS[HS++] << 8,
        pixel_size: SS[HS++],
        flags: SS[17]
      }
    }

    function XS(SS, HS) {
      if (HS.length < 19) return void tS.b.Error("Unable to load TGA file - Not enough data to contain header");
      let gS = 18;
      const XS = bS(HS);
      if (XS.id_length + gS > HS.length) return void tS.b.Error("Unable to load TGA file - Not enough data");
      gS += XS.id_length;
      let NS, qS = !1,
        uS = !1,
        IS = !1;
      switch (XS.image_type) {
        case 9:
          qS = !0;
        case 1:
          uS = !0;
          break;
        case 10:
          qS = !0;
        case 2:
          break;
        case 11:
          qS = !0;
        case 3:
          IS = !0
      }
      const fS = XS.pixel_size >> 3,
        kS = XS.width * XS.height * fS;
      let aS, KS, jS, GS, CS, nS, PS;
      if (uS && (aS = HS.subarray(gS, gS += XS.colormap_length * (XS.colormap_size >> 3))), qS) {
        let SS, tS, bS;
        NS = new Uint8Array(kS);
        let XS = 0;
        const xS = new Uint8Array(fS);
        for (; gS < kS && XS < kS;)
          if (SS = HS[gS++], tS = 1 + (127 & SS), 128 & SS) {
            for (bS = 0; bS < fS; ++bS) xS[bS] = HS[gS++];
            for (bS = 0; bS < tS; ++bS) NS.set(xS, XS + bS * fS);
            XS += fS * tS
          } else {
            for (tS *= fS, bS = 0; bS < tS; ++bS) NS[XS + bS] = HS[gS++];
            XS += tS
          }
      } else NS = HS.subarray(gS, gS + (uS ? XS.width * XS.height : kS));
      switch ((48 & XS.flags) >> 4) {
        default:
        case 2:
          KS = 0, GS = 1, PS = XS.width, jS = 0, CS = 1, nS = XS.height;
          break;
        case 0:
          KS = 0, GS = 1, PS = XS.width, jS = XS.height - 1, CS = -1, nS = -1;
          break;
        case 3:
          KS = XS.width - 1, GS = -1, PS = -1, jS = 0, CS = 1, nS = XS.height;
          break;
        case 1:
          KS = XS.width - 1, GS = -1, PS = -1, jS = XS.height - 1, CS = -1, nS = -1
      }
      const QS = "_getImageData" + (IS ? "Grey" : "") + XS.pixel_size + "bits",
        DS = xS[QS](XS, aS, NS, jS, CS, nS, KS, GS, PS);
      SS.AK()._uploadDataToTextureDirectly(SS, DS)
    }
    const xS = {
      GetTGAHeader: bS,
      UploadContent: XS,
      _getImageData8bits: function(SS, HS, gS, tS, bS, XS, xS, NS, qS) {
        const uS = gS,
          IS = HS,
          fS = SS.width,
          kS = SS.height;
        let aS, KS, jS, GS = 0;
        const CS = new Uint8Array(fS * kS * 4);
        for (jS = tS; jS !== XS; jS += bS)
          for (KS = xS; KS !== qS; KS += NS, GS++) aS = uS[GS], CS[4 * (KS + fS * jS) + 3] = 255, CS[4 * (KS + fS * jS) + 2] = IS[3 * aS + 0], CS[4 * (KS + fS * jS) + 1] = IS[3 * aS + 1], CS[4 * (KS + fS * jS) + 0] = IS[3 * aS + 2];
        return CS
      },
      _getImageData16bits: function(SS, HS, gS, tS, bS, XS, xS, NS, qS) {
        const uS = gS,
          IS = SS.width,
          fS = SS.height;
        let kS, aS, KS, jS = 0;
        const GS = new Uint8Array(IS * fS * 4);
        for (KS = tS; KS !== XS; KS += bS)
          for (aS = xS; aS !== qS; aS += NS, jS += 2) {
            kS = uS[jS + 0] + (uS[jS + 1] << 8);
            const SS = 255 * ((31744 & kS) >> 10) / 31 | 0,
              HS = 255 * ((992 & kS) >> 5) / 31 | 0,
              gS = 255 * (31 & kS) / 31 | 0;
            GS[4 * (aS + IS * KS) + 0] = SS, GS[4 * (aS + IS * KS) + 1] = HS, GS[4 * (aS + IS * KS) + 2] = gS, GS[4 * (aS + IS * KS) + 3] = 32768 & kS ? 0 : 255
          }
        return GS
      },
      _getImageData24bits: function(SS, HS, gS, tS, bS, XS, xS, NS, qS) {
        const uS = gS,
          IS = SS.width,
          fS = SS.height;
        let kS, aS, KS = 0;
        const jS = new Uint8Array(IS * fS * 4);
        for (aS = tS; aS !== XS; aS += bS)
          for (kS = xS; kS !== qS; kS += NS, KS += 3) jS[4 * (kS + IS * aS) + 3] = 255, jS[4 * (kS + IS * aS) + 2] = uS[KS + 0], jS[4 * (kS + IS * aS) + 1] = uS[KS + 1], jS[4 * (kS + IS * aS) + 0] = uS[KS + 2];
        return jS
      },
      _getImageData32bits: function(SS, HS, gS, tS, bS, XS, xS, NS, qS) {
        const uS = gS,
          IS = SS.width,
          fS = SS.height;
        let kS, aS, KS = 0;
        const jS = new Uint8Array(IS * fS * 4);
        for (aS = tS; aS !== XS; aS += bS)
          for (kS = xS; kS !== qS; kS += NS, KS += 4) jS[4 * (kS + IS * aS) + 2] = uS[KS + 0], jS[4 * (kS + IS * aS) + 1] = uS[KS + 1], jS[4 * (kS + IS * aS) + 0] = uS[KS + 2], jS[4 * (kS + IS * aS) + 3] = uS[KS + 3];
        return jS
      },
      _getImageDataGrey8bits: function(SS, HS, gS, tS, bS, XS, xS, NS, qS) {
        const uS = gS,
          IS = SS.width,
          fS = SS.height;
        let kS, aS, KS, jS = 0;
        const GS = new Uint8Array(IS * fS * 4);
        for (KS = tS; KS !== XS; KS += bS)
          for (aS = xS; aS !== qS; aS += NS, jS++) kS = uS[jS], GS[4 * (aS + IS * KS) + 0] = kS, GS[4 * (aS + IS * KS) + 1] = kS, GS[4 * (aS + IS * KS) + 2] = kS, GS[4 * (aS + IS * KS) + 3] = 255;
        return GS
      },
      _getImageDataGrey16bits: function(SS, HS, gS, tS, bS, XS, xS, NS, qS) {
        const uS = gS,
          IS = SS.width,
          fS = SS.height;
        let kS, aS, KS = 0;
        const jS = new Uint8Array(IS * fS * 4);
        for (aS = tS; aS !== XS; aS += bS)
          for (kS = xS; kS !== qS; kS += NS, KS += 2) jS[4 * (kS + IS * aS) + 0] = uS[KS + 0], jS[4 * (kS + IS * aS) + 1] = uS[KS + 0], jS[4 * (kS + IS * aS) + 2] = uS[KS + 0], jS[4 * (kS + IS * aS) + 3] = uS[KS + 1];
        return jS
      }
    };
    class NS {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(SS, HS, gS) {
        const tS = new Uint8Array(SS.buffer, SS.byteOffset, SS.byteLength),
          xS = bS(tS);
        gS(xS.width, xS.height, HS.generateMipMaps, !1, (() => {
          XS(HS, tS)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);