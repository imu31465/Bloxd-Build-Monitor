export const id = 297;
export const ids = [297];
export const modules = {
  41333: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => xT
    });
    var lT = cT(36892),
      MT = cT(36937),
      KT = cT(39607),
      OT = cT(36901),
      yT = cT(37093);
    class fT {
      constructor(TT, kT, cT, lT) {
        this.name = TT, this.worldAxisForNormal = kT, this.worldAxisForFileX = cT, this.worldAxisForFileY = lT
      }
    }
    class xT {
      static _NearestPow2Floor(TT) {
        return TT <= 1 ? 1 : 1 << Math.floor(Math.log2(TT))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(TT) {
        if (!TT.isCube) return null;
        TT.NJ()?.Dv().flushFramebuffer();
        const kT = TT.getSize().width,
          cT = TT._sphericalPolynomialTargetSize,
          lT = cT > 0 ? this._NearestPow2Floor(cT) : 0,
          MT = !TT.noMipmap && !0 === TT._texture?.generateMipMaps,
          KT = lT > 0 && lT < kT && MT,
          OT = KT ? Math.max(0, Math.round(Math.log2(kT / lT))) : 0,
          yT = KT ? Math.max(1, Math.floor(kT / Math.pow(2, OT))) : kT,
          fT = TT.readPixels(0, OT, void 0, !1),
          xT = TT.readPixels(1, OT, void 0, !1);
        let IT, AT;
        TT.isRenderTarget ? (IT = TT.readPixels(3, OT, void 0, !1), AT = TT.readPixels(2, OT, void 0, !1)) : (IT = TT.readPixels(2, OT, void 0, !1), AT = TT.readPixels(3, OT, void 0, !1));
        const CT = TT.readPixels(4, OT, void 0, !1),
          jT = TT.readPixels(5, OT, void 0, !1),
          vT = TT.gammaSpace,
          tT = lT > 0 && lT < kT && !KT;
        return new Promise((TT => {
          Promise.all([xT, fT, IT, AT, CT, jT]).then((cT => {
            let [MT, KT, OT, fT, xT, IT] = cT, AT = yT;
            if (tT) {
              const TT = 4;
              MT = this._DownsampleFace(MT, kT, lT, TT), KT = this._DownsampleFace(KT, kT, lT, TT), OT = this._DownsampleFace(OT, kT, lT, TT), fT = this._DownsampleFace(fT, kT, lT, TT), xT = this._DownsampleFace(xT, kT, lT, TT), IT = this._DownsampleFace(IT, kT, lT, TT), AT = lT
            }
            const CT = {
              size: AT,
              right: KT,
              left: MT,
              up: OT,
              down: fT,
              front: xT,
              back: IT,
              format: 5,
              type: MT instanceof Float32Array ? 1 : 0,
              gammaSpace: vT
            };
            TT(this.ConvertCubeMapToSphericalPolynomial(CT))
          }))
        }))
      }
      static _AreaElement(TT, kT) {
        return Math.atan2(TT * kT, Math.sqrt(TT * TT + kT * kT + 1))
      }
      static _DownsampleFace(TT, kT, cT, lT) {
        const MT = TT instanceof Float32Array ? TT : Float32Array.from(TT),
          KT = cT * cT * lT,
          OT = new Float32Array(KT),
          yT = kT / cT,
          fT = 1 / (yT * yT);
        for (let IT = 0; IT < cT; IT++) {
          const TT = Math.floor(IT * yT),
            KT = Math.floor((IT + 1) * yT);
          for (let xT = 0; xT < cT; xT++) {
            const AT = Math.floor(xT * yT),
              CT = Math.floor((xT + 1) * yT),
              jT = (IT * cT + xT) * lT;
            for (let cT = 0; cT < lT; cT++) {
              let yT = 0;
              for (let OT = TT; OT < KT; OT++)
                for (let TT = AT; TT < CT; TT++) yT += MT[(OT * kT + TT) * lT + cT];
              OT[jT + cT] = yT * fT
            }
          }
        }
        if (TT instanceof Float32Array) return OT;
        const xT = new(0, TT.constructor)(KT);
        for (let IT = 0; IT < KT; IT++) xT[IT] = OT[IT] + .5 | 0;
        return xT
      }
      static ConvertCubeMapToSphericalPolynomial(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const cT = kT > 0 ? this._NearestPow2Floor(kT) : 0;
        if (cT > 0 && TT.size > cT) {
          const kT = 5 === TT.format ? 4 : 3,
            lT = ["right", "left", "up", "down", "front", "back"],
            MT = {};
          for (const KT of lT) MT[KT] = this._DownsampleFace(TT[KT], TT.size, cT, kT);
          TT = {
            ...TT,
            ...MT,
            size: cT
          }
        }
        const lT = new KT.c;
        let fT = 0;
        const xT = 2 / TT.size,
          IT = xT,
          AT = .5 * xT,
          CT = AT - 1;
        for (let KT = 0; KT < 6; KT++) {
          const kT = this._FileFaces[KT],
            cT = TT[kT.name];
          let jT = CT;
          const vT = 5 === TT.format ? 4 : 3;
          for (let KT = 0; KT < TT.size; KT++) {
            let tT = CT;
            for (let IT = 0; IT < TT.size; IT++) {
              const CT = kT.worldAxisForFileX.scale(tT).add(kT.worldAxisForFileY.scale(jT)).add(kT.worldAxisForNormal);
              CT.normalize();
              const hT = this._AreaElement(tT - AT, jT - AT) - this._AreaElement(tT - AT, jT + AT) - this._AreaElement(tT + AT, jT - AT) + this._AreaElement(tT + AT, jT + AT);
              let NT = cT[KT * TT.size * vT + IT * vT + 0],
                QT = cT[KT * TT.size * vT + IT * vT + 1],
                ST = cT[KT * TT.size * vT + IT * vT + 2];
              isNaN(NT) && (NT = 0), isNaN(QT) && (QT = 0), isNaN(ST) && (ST = 0), 0 === TT.type && (NT /= 255, QT /= 255, ST /= 255), TT.gammaSpace && (NT = Math.pow((0, MT.Clamp)(NT), OT.g), QT = Math.pow((0, MT.Clamp)(QT), OT.g), ST = Math.pow((0, MT.Clamp)(ST), OT.g));
              const DT = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const TT = Math.max(NT, QT, ST);
                if (TT > DT) {
                  const kT = DT / TT;
                  NT *= kT, QT *= kT, ST *= kT
                }
              } else NT = (0, MT.Clamp)(NT, 0, DT), QT = (0, MT.Clamp)(QT, 0, DT), ST = (0, MT.Clamp)(ST, 0, DT);
              const aT = new yT.c(NT, QT, ST);
              lT.addLight(CT, aT, hT), fT += hT, tT += xT
            }
            jT += IT
          }
        }
        const jT = 6 * (4 * Math.PI) / 6 / fT;
        return lT.scaleInPlace(jT), lT.convertIncidentRadianceToIrradiance(), lT.convertIrradianceToLambertianRadiance(), KT.e.FromHarmonics(lT)
      }
    }
    xT._FileFaces = [new fT("right", new lT.m(1, 0, 0), new lT.m(0, 0, -1), new lT.m(0, -1, 0)), new fT("left", new lT.m(-1, 0, 0), new lT.m(0, 0, 1), new lT.m(0, -1, 0)), new fT("up", new lT.m(0, 1, 0), new lT.m(1, 0, 0), new lT.m(0, 0, 1)), new fT("down", new lT.m(0, -1, 0), new lT.m(1, 0, 0), new lT.m(0, 0, -1)), new fT("front", new lT.m(0, 0, 1), new lT.m(1, 0, 0), new lT.m(0, -1, 0)), new fT("back", new lT.m(0, 0, -1), new lT.m(-1, 0, 0), new lT.m(0, -1, 0))], xT.MAX_HDRI_VALUE = 4096, xT.PRESERVE_CLAMPED_COLORS = !1
  },
  41329: (TT, kT, cT) => {
    cT.d(kT, {
      DDSTools: () => vT
    });
    var lT = cT(36937),
      MT = cT(38512),
      KT = cT(41333),
      OT = cT(39694);
    const yT = 131072,
      fT = 131072;

    function xT(TT) {
      return TT.charCodeAt(0) + (TT.charCodeAt(1) << 8) + (TT.charCodeAt(2) << 16) + (TT.charCodeAt(3) << 24)
    }
    const IT = xT("DXT1"),
      AT = xT("DXT3"),
      CT = xT("DXT5"),
      jT = xT("DX10");
    class vT {
      static GetDDSInfo(TT) {
        const kT = new Int32Array(TT.buffer, TT.byteOffset, 31),
          cT = new Int32Array(TT.buffer, TT.byteOffset, 35);
        let lT = 1;
        kT[2] & yT && (lT = Math.max(1, kT[7]));
        const MT = kT[21],
          KT = MT === jT ? cT[32] : 0;
        let OT = 0;
        switch (MT) {
          case 113:
            OT = 2;
            break;
          case 116:
            OT = 1;
            break;
          case jT:
            if (10 === KT) {
              OT = 2;
              break
            }
            if (2 === KT) {
              OT = 1;
              break
            }
        }
        return {
          width: kT[4],
          height: kT[3],
          mipmapCount: lT,
          isFourCC: 4 === (4 & kT[20]),
          isRGB: 64 === (64 & kT[20]),
          isLuminance: (kT[20] & fT) === fT,
          isCube: 512 === (512 & kT[28]),
          isCompressed: MT === IT || MT === AT || MT === CT,
          dxgiFormat: KT,
          textureType: OT
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(TT, kT, cT, lT, MT, KT) {
        const yT = new Float32Array(lT),
          fT = new Uint16Array(MT, cT);
        let xT = 0;
        for (let IT = 0; IT < kT; IT++)
          for (let kT = 0; kT < TT; kT++) {
            const cT = 4 * (kT + IT * TT);
            yT[xT] = (0, OT.e)(fT[cT]), yT[xT + 1] = (0, OT.e)(fT[cT + 1]), yT[xT + 2] = (0, OT.e)(fT[cT + 2]), vT.StoreLODInAlphaChannel ? yT[xT + 3] = KT : yT[xT + 3] = (0, OT.e)(fT[cT + 3]), xT += 4
          }
        return yT
      }
      static _GetHalfFloatRGBAArrayBuffer(TT, kT, cT, lT, MT, KT) {
        if (vT.StoreLODInAlphaChannel) {
          const yT = new Uint16Array(lT),
            fT = new Uint16Array(MT, cT);
          let xT = 0;
          for (let cT = 0; cT < kT; cT++)
            for (let kT = 0; kT < TT; kT++) {
              const lT = 4 * (kT + cT * TT);
              yT[xT] = fT[lT], yT[xT + 1] = fT[lT + 1], yT[xT + 2] = fT[lT + 2], yT[xT + 3] = (0, OT.i)(KT), xT += 4
            }
          return yT
        }
        return new Uint16Array(MT, cT, lT)
      }
      static _GetFloatRGBAArrayBuffer(TT, kT, cT, lT, MT, KT) {
        if (vT.StoreLODInAlphaChannel) {
          const OT = new Float32Array(lT),
            yT = new Float32Array(MT, cT);
          let fT = 0;
          for (let cT = 0; cT < kT; cT++)
            for (let kT = 0; kT < TT; kT++) {
              const lT = 4 * (kT + cT * TT);
              OT[fT] = yT[lT], OT[fT + 1] = yT[lT + 1], OT[fT + 2] = yT[lT + 2], OT[fT + 3] = KT, fT += 4
            }
          return OT
        }
        return new Float32Array(MT, cT, lT)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(TT, kT, cT, lT, MT, KT) {
        const yT = new Uint16Array(lT),
          fT = new Float32Array(MT, cT);
        let xT = 0;
        for (let IT = 0; IT < kT; IT++)
          for (let kT = 0; kT < TT; kT++) yT[xT] = (0, OT.i)(fT[xT]), yT[xT + 1] = (0, OT.i)(fT[xT + 1]), yT[xT + 2] = (0, OT.i)(fT[xT + 2]), vT.StoreLODInAlphaChannel ? yT[xT + 3] = (0, OT.i)(KT) : yT[xT + 3] = (0, OT.i)(fT[xT + 3]), xT += 4;
        return yT
      }
      static _GetFloatAsUIntRGBAArrayBuffer(TT, kT, cT, MT, KT, OT) {
        const yT = new Uint8Array(MT),
          fT = new Float32Array(KT, cT);
        let xT = 0;
        for (let IT = 0; IT < kT; IT++)
          for (let kT = 0; kT < TT; kT++) {
            const cT = 4 * (kT + IT * TT);
            yT[xT] = 255 * (0, lT.Clamp)(fT[cT]), yT[xT + 1] = 255 * (0, lT.Clamp)(fT[cT + 1]), yT[xT + 2] = 255 * (0, lT.Clamp)(fT[cT + 2]), vT.StoreLODInAlphaChannel ? yT[xT + 3] = OT : yT[xT + 3] = 255 * (0, lT.Clamp)(fT[cT + 3]), xT += 4
          }
        return yT
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(TT, kT, cT, MT, KT, yT) {
        const fT = new Uint8Array(MT),
          xT = new Uint16Array(KT, cT);
        let IT = 0;
        for (let AT = 0; AT < kT; AT++)
          for (let kT = 0; kT < TT; kT++) {
            const cT = 4 * (kT + AT * TT);
            fT[IT] = 255 * (0, lT.Clamp)((0, OT.e)(xT[cT])), fT[IT + 1] = 255 * (0, lT.Clamp)((0, OT.e)(xT[cT + 1])), fT[IT + 2] = 255 * (0, lT.Clamp)((0, OT.e)(xT[cT + 2])), vT.StoreLODInAlphaChannel ? fT[IT + 3] = yT : fT[IT + 3] = 255 * (0, lT.Clamp)((0, OT.e)(xT[cT + 3])), IT += 4
          }
        return fT
      }
      static _GetRGBAArrayBuffer(TT, kT, cT, lT, MT, KT, OT, yT, fT) {
        const xT = new Uint8Array(lT),
          IT = new Uint8Array(MT, cT);
        let AT = 0;
        for (let CT = 0; CT < kT; CT++)
          for (let kT = 0; kT < TT; kT++) {
            const cT = 4 * (kT + CT * TT);
            xT[AT] = IT[cT + KT], xT[AT + 1] = IT[cT + OT], xT[AT + 2] = IT[cT + yT], xT[AT + 3] = IT[cT + fT], AT += 4
          }
        return xT
      }
      static _ExtractLongWordOrder(TT) {
        return 0 === TT || 255 === TT || -16777216 === TT ? 0 : 1 + vT._ExtractLongWordOrder(TT >> 8)
      }
      static _GetRGBArrayBuffer(TT, kT, cT, lT, MT, KT, OT, yT) {
        const fT = new Uint8Array(lT),
          xT = new Uint8Array(MT, cT);
        let IT = 0;
        for (let AT = 0; AT < kT; AT++)
          for (let kT = 0; kT < TT; kT++) {
            const cT = 3 * (kT + AT * TT);
            fT[IT] = xT[cT + KT], fT[IT + 1] = xT[cT + OT], fT[IT + 2] = xT[cT + yT], IT += 3
          }
        return fT
      }
      static _GetLuminanceArrayBuffer(TT, kT, cT, lT, MT) {
        const KT = new Uint8Array(lT),
          OT = new Uint8Array(MT, cT);
        let yT = 0;
        for (let fT = 0; fT < kT; fT++)
          for (let kT = 0; kT < TT; kT++) {
            const cT = kT + fT * TT;
            KT[yT] = OT[cT], yT++
          }
        return KT
      }
      static UploadDDSLevels(TT, kT, cT, lT, OT, fT) {
        let xT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          tT = arguments.length > 7 ? arguments[7] : void 0,
          hT = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          NT = null;
        lT.sphericalPolynomial && (NT = []);
        const QT = !!TT.getCaps().s3tc;
        kT.generateMipMaps = OT;
        const ST = new Int32Array(cT.buffer, cT.byteOffset, 31);
        let DT, aT, FT, rT, PT, wT, mT, bT = 0,
          zT = 0,
          JT = 1;
        if (542327876 !== ST[0]) return void MT.e.Error("Invalid magic number in DDS header");
        if (!lT.isFourCC && !lT.isRGB && !lT.isLuminance) return void MT.e.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (lT.isCompressed && !QT) return void MT.e.Error("Compressed textures are not supported on this platform.");
        let oT = ST[22];
        rT = ST[1] + 4;
        let HT = !1;
        if (lT.isFourCC) switch (DT = ST[21], DT) {
          case IT:
            JT = 8, zT = 33777;
            break;
          case AT:
            JT = 16, zT = 33778;
            break;
          case CT:
            JT = 16, zT = 33779;
            break;
          case 113:
            HT = !0, oT = 64;
            break;
          case 116:
            HT = !0, oT = 128;
            break;
          case jT: {
            rT += 20;
            let TT = !1;
            switch (lT.dxgiFormat) {
              case 10:
                HT = !0, oT = 64, TT = !0;
                break;
              case 2:
                HT = !0, oT = 128, TT = !0;
                break;
              case 88:
                lT.isRGB = !0, lT.isFourCC = !1, oT = 32, TT = !0
            }
            if (TT) break
          }
          default:
            return void MT.e.Error(["Unsupported FourCC code:", (eT = DT, String.fromCharCode(255 & eT, eT >> 8 & 255, eT >> 16 & 255, eT >> 24 & 255))])
        }
        var eT;
        const GT = vT._ExtractLongWordOrder(ST[23]),
          VT = vT._ExtractLongWordOrder(ST[24]),
          ET = vT._ExtractLongWordOrder(ST[25]),
          ZT = vT._ExtractLongWordOrder(ST[26]);
        HT && (zT = TT._getRGBABufferInternalSizedFormat(lT.textureType)), wT = 1, ST[2] & yT && !1 !== OT && (wT = Math.max(1, ST[7]));
        const uT = tT || 0,
          XT = TT.getCaps();
        for (let MT = uT; MT < fT; MT++) {
          for (aT = ST[4], FT = ST[3], mT = 0; mT < wT; ++mT) {
            if (-1 === xT || xT === mT) {
              const KT = -1 === xT ? mT : 0;
              if (!lT.isCompressed && lT.isFourCC) {
                kT.format = 5, bT = aT * FT * 4;
                let lT = null;
                if (TT._badOS || TT._badDesktopOS || !XT.textureHalfFloat && !XT.textureFloat) 128 === oT ? (lT = vT._GetFloatAsUIntRGBAArrayBuffer(aT, FT, cT.byteOffset + rT, bT, cT.buffer, KT), NT && 0 == KT && NT.push(vT._GetFloatRGBAArrayBuffer(aT, FT, cT.byteOffset + rT, bT, cT.buffer, KT))) : 64 === oT && (lT = vT._GetHalfFloatAsUIntRGBAArrayBuffer(aT, FT, cT.byteOffset + rT, bT, cT.buffer, KT), NT && 0 == KT && NT.push(vT._GetHalfFloatAsFloatRGBAArrayBuffer(aT, FT, cT.byteOffset + rT, bT, cT.buffer, KT))), kT.type = 0;
                else {
                  const TT = XT.textureFloat && (hT && XT.textureFloatLinearFiltering || !hT),
                    MT = XT.textureHalfFloat && (hT && XT.textureHalfFloatLinearFiltering || !hT),
                    OT = (128 === oT || 64 === oT && !MT) && TT ? 1 : (64 === oT || 128 === oT && !TT) && MT ? 2 : 0;
                  let yT, fT = null;
                  if (128 === oT) switch (OT) {
                    case 1:
                      yT = vT._GetFloatRGBAArrayBuffer, fT = null;
                      break;
                    case 2:
                      yT = vT._GetFloatAsHalfFloatRGBAArrayBuffer, fT = vT._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      yT = vT._GetFloatAsUIntRGBAArrayBuffer, fT = vT._GetFloatRGBAArrayBuffer
                  } else switch (OT) {
                    case 1:
                      yT = vT._GetHalfFloatAsFloatRGBAArrayBuffer, fT = null;
                      break;
                    case 2:
                      yT = vT._GetHalfFloatRGBAArrayBuffer, fT = vT._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      yT = vT._GetHalfFloatAsUIntRGBAArrayBuffer, fT = vT._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  kT.type = OT, lT = yT(aT, FT, cT.byteOffset + rT, bT, cT.buffer, KT), NT && 0 == KT && NT.push(fT ? fT(aT, FT, cT.byteOffset + rT, bT, cT.buffer, KT) : lT)
                }
                lT && TT._uploadDataToTextureDirectly(kT, lT, MT, KT)
              } else if (lT.isRGB) kT.type = 0, 24 === oT ? (kT.format = 4, bT = aT * FT * 3, PT = vT._GetRGBArrayBuffer(aT, FT, cT.byteOffset + rT, bT, cT.buffer, GT, VT, ET), TT._uploadDataToTextureDirectly(kT, PT, MT, KT)) : (kT.format = 5, bT = aT * FT * 4, PT = vT._GetRGBAArrayBuffer(aT, FT, cT.byteOffset + rT, bT, cT.buffer, GT, VT, ET, ZT), TT._uploadDataToTextureDirectly(kT, PT, MT, KT));
              else if (lT.isLuminance) {
                const lT = TT._getUnpackAlignement(),
                  OT = aT;
                bT = Math.floor((aT + lT - 1) / lT) * lT * (FT - 1) + OT, PT = vT._GetLuminanceArrayBuffer(aT, FT, cT.byteOffset + rT, bT, cT.buffer), kT.format = 1, kT.type = 0, TT._uploadDataToTextureDirectly(kT, PT, MT, KT)
              } else bT = Math.max(4, aT) / 4 * Math.max(4, FT) / 4 * JT, PT = new Uint8Array(cT.buffer, cT.byteOffset + rT, bT), kT.type = 0, TT._uploadCompressedDataToTextureDirectly(kT, zT, aT, FT, PT, MT, KT)
            }
            rT += oT ? aT * FT * (oT / 8) : bT, aT *= .5, FT *= .5, aT = Math.max(1, aT), FT = Math.max(1, FT)
          }
          if (void 0 !== tT) break
        }
        NT && NT.length > 0 ? lT.sphericalPolynomial = KT.e.ConvertCubeMapToSphericalPolynomial({
          size: ST[4],
          right: NT[0],
          left: NT[1],
          up: NT[2],
          down: NT[3],
          front: NT[4],
          back: NT[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : lT.sphericalPolynomial = void 0
      }
    }
    vT.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);