export const id = 311;
export const ids = [311];
export const modules = {
  42219: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => YG
    });
    var wG = ZG(37439),
      SG = ZG(37471),
      LG = ZG(40379),
      yG = ZG(37443),
      kG = ZG(37621);
    class UG {
      constructor(GG, bG, ZG, wG) {
        this.name = GG, this.worldAxisForNormal = bG, this.worldAxisForFileX = ZG, this.worldAxisForFileY = wG
      }
    }
    class YG {
      static _NearestPow2Floor(GG) {
        return GG <= 1 ? 1 : 1 << Math.floor(Math.log2(GG))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(GG) {
        if (!GG.isCube) return null;
        GG.Dv()?.CK().flushFramebuffer();
        const bG = GG.getSize().width,
          ZG = GG._sphericalPolynomialTargetSize,
          wG = ZG > 0 ? this._NearestPow2Floor(ZG) : 0,
          SG = !GG.noMipmap && !0 === GG._texture?.generateMipMaps,
          LG = wG > 0 && wG < bG && SG,
          yG = LG ? Math.max(0, Math.round(Math.log2(bG / wG))) : 0,
          kG = LG ? Math.max(1, Math.floor(bG / Math.pow(2, yG))) : bG,
          UG = GG.readPixels(0, yG, void 0, !1),
          YG = GG.readPixels(1, yG, void 0, !1);
        let VG, pG;
        GG.isRenderTarget ? (VG = GG.readPixels(3, yG, void 0, !1), pG = GG.readPixels(2, yG, void 0, !1)) : (VG = GG.readPixels(2, yG, void 0, !1), pG = GG.readPixels(3, yG, void 0, !1));
        const fG = GG.readPixels(4, yG, void 0, !1),
          QG = GG.readPixels(5, yG, void 0, !1),
          KG = GG.gammaSpace,
          hG = wG > 0 && wG < bG && !LG;
        return new Promise((GG => {
          Promise.all([YG, UG, VG, pG, fG, QG]).then((ZG => {
            let [SG, LG, yG, UG, YG, VG] = ZG, pG = kG;
            if (hG) {
              const GG = 4;
              SG = this._DownsampleFace(SG, bG, wG, GG), LG = this._DownsampleFace(LG, bG, wG, GG), yG = this._DownsampleFace(yG, bG, wG, GG), UG = this._DownsampleFace(UG, bG, wG, GG), YG = this._DownsampleFace(YG, bG, wG, GG), VG = this._DownsampleFace(VG, bG, wG, GG), pG = wG
            }
            const fG = {
              size: pG,
              right: LG,
              left: SG,
              up: yG,
              down: UG,
              front: YG,
              back: VG,
              format: 5,
              type: SG instanceof Float32Array ? 1 : 0,
              gammaSpace: KG
            };
            GG(this.ConvertCubeMapToSphericalPolynomial(fG))
          }))
        }))
      }
      static _AreaElement(GG, bG) {
        return Math.atan2(GG * bG, Math.sqrt(GG * GG + bG * bG + 1))
      }
      static _DownsampleFace(GG, bG, ZG, wG) {
        const SG = GG instanceof Float32Array ? GG : Float32Array.from(GG),
          LG = ZG * ZG * wG,
          yG = new Float32Array(LG),
          kG = bG / ZG,
          UG = 1 / (kG * kG);
        for (let VG = 0; VG < ZG; VG++) {
          const GG = Math.floor(VG * kG),
            LG = Math.floor((VG + 1) * kG);
          for (let YG = 0; YG < ZG; YG++) {
            const pG = Math.floor(YG * kG),
              fG = Math.floor((YG + 1) * kG),
              QG = (VG * ZG + YG) * wG;
            for (let ZG = 0; ZG < wG; ZG++) {
              let kG = 0;
              for (let yG = GG; yG < LG; yG++)
                for (let GG = pG; GG < fG; GG++) kG += SG[(yG * bG + GG) * wG + ZG];
              yG[QG + ZG] = kG * UG
            }
          }
        }
        if (GG instanceof Float32Array) return yG;
        const YG = new(0, GG.constructor)(LG);
        for (let VG = 0; VG < LG; VG++) YG[VG] = yG[VG] + .5 | 0;
        return YG
      }
      static ConvertCubeMapToSphericalPolynomial(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZG = bG > 0 ? this._NearestPow2Floor(bG) : 0;
        if (ZG > 0 && GG.size > ZG) {
          const bG = 5 === GG.format ? 4 : 3,
            wG = ["right", "left", "up", "down", "front", "back"],
            SG = {};
          for (const LG of wG) SG[LG] = this._DownsampleFace(GG[LG], GG.size, ZG, bG);
          GG = {
            ...GG,
            ...SG,
            size: ZG
          }
        }
        const wG = new LG.b;
        let UG = 0;
        const YG = 2 / GG.size,
          VG = YG,
          pG = .5 * YG,
          fG = pG - 1;
        for (let LG = 0; LG < 6; LG++) {
          const bG = this._FileFaces[LG],
            ZG = GG[bG.name];
          let QG = fG;
          const KG = 5 === GG.format ? 4 : 3;
          for (let LG = 0; LG < GG.size; LG++) {
            let hG = fG;
            for (let VG = 0; VG < GG.size; VG++) {
              const fG = bG.worldAxisForFileX.scale(hG).add(bG.worldAxisForFileY.scale(QG)).add(bG.worldAxisForNormal);
              fG.normalize();
              const dG = this._AreaElement(hG - pG, QG - pG) - this._AreaElement(hG - pG, QG + pG) - this._AreaElement(hG + pG, QG - pG) + this._AreaElement(hG + pG, QG + pG);
              let JG = ZG[LG * GG.size * KG + VG * KG + 0],
                rG = ZG[LG * GG.size * KG + VG * KG + 1],
                zG = ZG[LG * GG.size * KG + VG * KG + 2];
              isNaN(JG) && (JG = 0), isNaN(rG) && (rG = 0), isNaN(zG) && (zG = 0), 0 === GG.type && (JG /= 255, rG /= 255, zG /= 255), GG.gammaSpace && (JG = Math.pow((0, SG.Clamp)(JG), yG.k), rG = Math.pow((0, SG.Clamp)(rG), yG.k), zG = Math.pow((0, SG.Clamp)(zG), yG.k));
              const EG = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const GG = Math.max(JG, rG, zG);
                if (GG > EG) {
                  const bG = EG / GG;
                  JG *= bG, rG *= bG, zG *= bG
                }
              } else JG = (0, SG.Clamp)(JG, 0, EG), rG = (0, SG.Clamp)(rG, 0, EG), zG = (0, SG.Clamp)(zG, 0, EG);
              const oG = new kG.c(JG, rG, zG);
              wG.addLight(fG, oG, dG), UG += dG, hG += YG
            }
            QG += VG
          }
        }
        const QG = 6 * (4 * Math.PI) / 6 / UG;
        return wG.scaleInPlace(QG), wG.convertIncidentRadianceToIrradiance(), wG.convertIrradianceToLambertianRadiance(), LG.e.FromHarmonics(wG)
      }
    }
    YG._FileFaces = [new UG("right", new wG.p(1, 0, 0), new wG.p(0, 0, -1), new wG.p(0, -1, 0)), new UG("left", new wG.p(-1, 0, 0), new wG.p(0, 0, 1), new wG.p(0, -1, 0)), new UG("up", new wG.p(0, 1, 0), new wG.p(1, 0, 0), new wG.p(0, 0, 1)), new UG("down", new wG.p(0, -1, 0), new wG.p(1, 0, 0), new wG.p(0, 0, -1)), new UG("front", new wG.p(0, 0, 1), new wG.p(1, 0, 0), new wG.p(0, -1, 0)), new UG("back", new wG.p(0, 0, -1), new wG.p(-1, 0, 0), new wG.p(0, -1, 0))], YG.MAX_HDRI_VALUE = 4096, YG.PRESERVE_CLAMPED_COLORS = !1
  },
  42215: (GG, bG, ZG) => {
    ZG.d(bG, {
      DDSTools: () => KG
    });
    var wG = ZG(37471),
      SG = ZG(39093),
      LG = ZG(42219),
      yG = ZG(40451);
    const kG = 131072,
      UG = 131072;

    function YG(GG) {
      return GG.charCodeAt(0) + (GG.charCodeAt(1) << 8) + (GG.charCodeAt(2) << 16) + (GG.charCodeAt(3) << 24)
    }
    const VG = YG("DXT1"),
      pG = YG("DXT3"),
      fG = YG("DXT5"),
      QG = YG("DX10");
    class KG {
      static GetDDSInfo(GG) {
        const bG = new Int32Array(GG.buffer, GG.byteOffset, 31),
          ZG = new Int32Array(GG.buffer, GG.byteOffset, 35);
        let wG = 1;
        bG[2] & kG && (wG = Math.max(1, bG[7]));
        const SG = bG[21],
          LG = SG === QG ? ZG[32] : 0;
        let yG = 0;
        switch (SG) {
          case 113:
            yG = 2;
            break;
          case 116:
            yG = 1;
            break;
          case QG:
            if (10 === LG) {
              yG = 2;
              break
            }
            if (2 === LG) {
              yG = 1;
              break
            }
        }
        return {
          width: bG[4],
          height: bG[3],
          mipmapCount: wG,
          isFourCC: 4 === (4 & bG[20]),
          isRGB: 64 === (64 & bG[20]),
          isLuminance: (bG[20] & UG) === UG,
          isCube: 512 === (512 & bG[28]),
          isCompressed: SG === VG || SG === pG || SG === fG,
          dxgiFormat: LG,
          textureType: yG
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(GG, bG, ZG, wG, SG, LG) {
        const kG = new Float32Array(wG),
          UG = new Uint16Array(SG, ZG);
        let YG = 0;
        for (let VG = 0; VG < bG; VG++)
          for (let bG = 0; bG < GG; bG++) {
            const ZG = 4 * (bG + VG * GG);
            kG[YG] = (0, yG.c)(UG[ZG]), kG[YG + 1] = (0, yG.c)(UG[ZG + 1]), kG[YG + 2] = (0, yG.c)(UG[ZG + 2]), KG.StoreLODInAlphaChannel ? kG[YG + 3] = LG : kG[YG + 3] = (0, yG.c)(UG[ZG + 3]), YG += 4
          }
        return kG
      }
      static _GetHalfFloatRGBAArrayBuffer(GG, bG, ZG, wG, SG, LG) {
        if (KG.StoreLODInAlphaChannel) {
          const kG = new Uint16Array(wG),
            UG = new Uint16Array(SG, ZG);
          let YG = 0;
          for (let ZG = 0; ZG < bG; ZG++)
            for (let bG = 0; bG < GG; bG++) {
              const wG = 4 * (bG + ZG * GG);
              kG[YG] = UG[wG], kG[YG + 1] = UG[wG + 1], kG[YG + 2] = UG[wG + 2], kG[YG + 3] = (0, yG.h)(LG), YG += 4
            }
          return kG
        }
        return new Uint16Array(SG, ZG, wG)
      }
      static _GetFloatRGBAArrayBuffer(GG, bG, ZG, wG, SG, LG) {
        if (KG.StoreLODInAlphaChannel) {
          const yG = new Float32Array(wG),
            kG = new Float32Array(SG, ZG);
          let UG = 0;
          for (let ZG = 0; ZG < bG; ZG++)
            for (let bG = 0; bG < GG; bG++) {
              const wG = 4 * (bG + ZG * GG);
              yG[UG] = kG[wG], yG[UG + 1] = kG[wG + 1], yG[UG + 2] = kG[wG + 2], yG[UG + 3] = LG, UG += 4
            }
          return yG
        }
        return new Float32Array(SG, ZG, wG)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(GG, bG, ZG, wG, SG, LG) {
        const kG = new Uint16Array(wG),
          UG = new Float32Array(SG, ZG);
        let YG = 0;
        for (let VG = 0; VG < bG; VG++)
          for (let bG = 0; bG < GG; bG++) kG[YG] = (0, yG.h)(UG[YG]), kG[YG + 1] = (0, yG.h)(UG[YG + 1]), kG[YG + 2] = (0, yG.h)(UG[YG + 2]), KG.StoreLODInAlphaChannel ? kG[YG + 3] = (0, yG.h)(LG) : kG[YG + 3] = (0, yG.h)(UG[YG + 3]), YG += 4;
        return kG
      }
      static _GetFloatAsUIntRGBAArrayBuffer(GG, bG, ZG, SG, LG, yG) {
        const kG = new Uint8Array(SG),
          UG = new Float32Array(LG, ZG);
        let YG = 0;
        for (let VG = 0; VG < bG; VG++)
          for (let bG = 0; bG < GG; bG++) {
            const ZG = 4 * (bG + VG * GG);
            kG[YG] = 255 * (0, wG.Clamp)(UG[ZG]), kG[YG + 1] = 255 * (0, wG.Clamp)(UG[ZG + 1]), kG[YG + 2] = 255 * (0, wG.Clamp)(UG[ZG + 2]), KG.StoreLODInAlphaChannel ? kG[YG + 3] = yG : kG[YG + 3] = 255 * (0, wG.Clamp)(UG[ZG + 3]), YG += 4
          }
        return kG
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(GG, bG, ZG, SG, LG, kG) {
        const UG = new Uint8Array(SG),
          YG = new Uint16Array(LG, ZG);
        let VG = 0;
        for (let pG = 0; pG < bG; pG++)
          for (let bG = 0; bG < GG; bG++) {
            const ZG = 4 * (bG + pG * GG);
            UG[VG] = 255 * (0, wG.Clamp)((0, yG.c)(YG[ZG])), UG[VG + 1] = 255 * (0, wG.Clamp)((0, yG.c)(YG[ZG + 1])), UG[VG + 2] = 255 * (0, wG.Clamp)((0, yG.c)(YG[ZG + 2])), KG.StoreLODInAlphaChannel ? UG[VG + 3] = kG : UG[VG + 3] = 255 * (0, wG.Clamp)((0, yG.c)(YG[ZG + 3])), VG += 4
          }
        return UG
      }
      static _GetRGBAArrayBuffer(GG, bG, ZG, wG, SG, LG, yG, kG, UG) {
        const YG = new Uint8Array(wG),
          VG = new Uint8Array(SG, ZG);
        let pG = 0;
        for (let fG = 0; fG < bG; fG++)
          for (let bG = 0; bG < GG; bG++) {
            const ZG = 4 * (bG + fG * GG);
            YG[pG] = VG[ZG + LG], YG[pG + 1] = VG[ZG + yG], YG[pG + 2] = VG[ZG + kG], YG[pG + 3] = VG[ZG + UG], pG += 4
          }
        return YG
      }
      static _ExtractLongWordOrder(GG) {
        return 0 === GG || 255 === GG || -16777216 === GG ? 0 : 1 + KG._ExtractLongWordOrder(GG >> 8)
      }
      static _GetRGBArrayBuffer(GG, bG, ZG, wG, SG, LG, yG, kG) {
        const UG = new Uint8Array(wG),
          YG = new Uint8Array(SG, ZG);
        let VG = 0;
        for (let pG = 0; pG < bG; pG++)
          for (let bG = 0; bG < GG; bG++) {
            const ZG = 3 * (bG + pG * GG);
            UG[VG] = YG[ZG + LG], UG[VG + 1] = YG[ZG + yG], UG[VG + 2] = YG[ZG + kG], VG += 3
          }
        return UG
      }
      static _GetLuminanceArrayBuffer(GG, bG, ZG, wG, SG) {
        const LG = new Uint8Array(wG),
          yG = new Uint8Array(SG, ZG);
        let kG = 0;
        for (let UG = 0; UG < bG; UG++)
          for (let bG = 0; bG < GG; bG++) {
            const ZG = bG + UG * GG;
            LG[kG] = yG[ZG], kG++
          }
        return LG
      }
      static UploadDDSLevels(GG, bG, ZG, wG, yG, UG) {
        let YG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          hG = arguments.length > 7 ? arguments[7] : void 0,
          dG = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          JG = null;
        wG.sphericalPolynomial && (JG = []);
        const rG = !!GG.getCaps().s3tc;
        bG.generateMipMaps = yG;
        const zG = new Int32Array(ZG.buffer, ZG.byteOffset, 31);
        let EG, oG, XG, uG, iG, CG, WG, mG = 0,
          IG = 0,
          FG = 1;
        if (542327876 !== zG[0]) return void SG.c.Error("Invalid magic number in DDS header");
        if (!wG.isFourCC && !wG.isRGB && !wG.isLuminance) return void SG.c.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (wG.isCompressed && !rG) return void SG.c.Error("Compressed textures are not supported on this platform.");
        let vG = zG[22];
        uG = zG[1] + 4;
        let aG = !1;
        if (wG.isFourCC) switch (EG = zG[21], EG) {
          case VG:
            FG = 8, IG = 33777;
            break;
          case pG:
            FG = 16, IG = 33778;
            break;
          case fG:
            FG = 16, IG = 33779;
            break;
          case 113:
            aG = !0, vG = 64;
            break;
          case 116:
            aG = !0, vG = 128;
            break;
          case QG: {
            uG += 20;
            let GG = !1;
            switch (wG.dxgiFormat) {
              case 10:
                aG = !0, vG = 64, GG = !0;
                break;
              case 2:
                aG = !0, vG = 128, GG = !0;
                break;
              case 88:
                wG.isRGB = !0, wG.isFourCC = !1, vG = 32, GG = !0
            }
            if (GG) break
          }
          default:
            return void SG.c.Error(["Unsupported FourCC code:", (cG = EG, String.fromCharCode(255 & cG, cG >> 8 & 255, cG >> 16 & 255, cG >> 24 & 255))])
        }
        var cG;
        const lG = KG._ExtractLongWordOrder(zG[23]),
          jG = KG._ExtractLongWordOrder(zG[24]),
          PG = KG._ExtractLongWordOrder(zG[25]),
          MG = KG._ExtractLongWordOrder(zG[26]);
        aG && (IG = GG._getRGBABufferInternalSizedFormat(wG.textureType)), CG = 1, zG[2] & kG && !1 !== yG && (CG = Math.max(1, zG[7]));
        const AG = hG || 0,
          sG = GG.getCaps();
        for (let SG = AG; SG < UG; SG++) {
          for (oG = zG[4], XG = zG[3], WG = 0; WG < CG; ++WG) {
            if (-1 === YG || YG === WG) {
              const LG = -1 === YG ? WG : 0;
              if (!wG.isCompressed && wG.isFourCC) {
                bG.format = 5, mG = oG * XG * 4;
                let wG = null;
                if (GG._badOS || GG._badDesktopOS || !sG.textureHalfFloat && !sG.textureFloat) 128 === vG ? (wG = KG._GetFloatAsUIntRGBAArrayBuffer(oG, XG, ZG.byteOffset + uG, mG, ZG.buffer, LG), JG && 0 == LG && JG.push(KG._GetFloatRGBAArrayBuffer(oG, XG, ZG.byteOffset + uG, mG, ZG.buffer, LG))) : 64 === vG && (wG = KG._GetHalfFloatAsUIntRGBAArrayBuffer(oG, XG, ZG.byteOffset + uG, mG, ZG.buffer, LG), JG && 0 == LG && JG.push(KG._GetHalfFloatAsFloatRGBAArrayBuffer(oG, XG, ZG.byteOffset + uG, mG, ZG.buffer, LG))), bG.type = 0;
                else {
                  const GG = sG.textureFloat && (dG && sG.textureFloatLinearFiltering || !dG),
                    SG = sG.textureHalfFloat && (dG && sG.textureHalfFloatLinearFiltering || !dG),
                    yG = (128 === vG || 64 === vG && !SG) && GG ? 1 : (64 === vG || 128 === vG && !GG) && SG ? 2 : 0;
                  let kG, UG = null;
                  if (128 === vG) switch (yG) {
                    case 1:
                      kG = KG._GetFloatRGBAArrayBuffer, UG = null;
                      break;
                    case 2:
                      kG = KG._GetFloatAsHalfFloatRGBAArrayBuffer, UG = KG._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      kG = KG._GetFloatAsUIntRGBAArrayBuffer, UG = KG._GetFloatRGBAArrayBuffer
                  } else switch (yG) {
                    case 1:
                      kG = KG._GetHalfFloatAsFloatRGBAArrayBuffer, UG = null;
                      break;
                    case 2:
                      kG = KG._GetHalfFloatRGBAArrayBuffer, UG = KG._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      kG = KG._GetHalfFloatAsUIntRGBAArrayBuffer, UG = KG._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  bG.type = yG, wG = kG(oG, XG, ZG.byteOffset + uG, mG, ZG.buffer, LG), JG && 0 == LG && JG.push(UG ? UG(oG, XG, ZG.byteOffset + uG, mG, ZG.buffer, LG) : wG)
                }
                wG && GG._uploadDataToTextureDirectly(bG, wG, SG, LG)
              } else if (wG.isRGB) bG.type = 0, 24 === vG ? (bG.format = 4, mG = oG * XG * 3, iG = KG._GetRGBArrayBuffer(oG, XG, ZG.byteOffset + uG, mG, ZG.buffer, lG, jG, PG), GG._uploadDataToTextureDirectly(bG, iG, SG, LG)) : (bG.format = 5, mG = oG * XG * 4, iG = KG._GetRGBAArrayBuffer(oG, XG, ZG.byteOffset + uG, mG, ZG.buffer, lG, jG, PG, MG), GG._uploadDataToTextureDirectly(bG, iG, SG, LG));
              else if (wG.isLuminance) {
                const wG = GG._getUnpackAlignement(),
                  yG = oG;
                mG = Math.floor((oG + wG - 1) / wG) * wG * (XG - 1) + yG, iG = KG._GetLuminanceArrayBuffer(oG, XG, ZG.byteOffset + uG, mG, ZG.buffer), bG.format = 1, bG.type = 0, GG._uploadDataToTextureDirectly(bG, iG, SG, LG)
              } else mG = Math.max(4, oG) / 4 * Math.max(4, XG) / 4 * FG, iG = new Uint8Array(ZG.buffer, ZG.byteOffset + uG, mG), bG.type = 0, GG._uploadCompressedDataToTextureDirectly(bG, IG, oG, XG, iG, SG, LG)
            }
            uG += vG ? oG * XG * (vG / 8) : mG, oG *= .5, XG *= .5, oG = Math.max(1, oG), XG = Math.max(1, XG)
          }
          if (void 0 !== hG) break
        }
        JG && JG.length > 0 ? wG.sphericalPolynomial = LG.d.ConvertCubeMapToSphericalPolynomial({
          size: zG[4],
          right: JG[0],
          left: JG[1],
          up: JG[2],
          down: JG[3],
          front: JG[4],
          back: JG[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : wG.sphericalPolynomial = void 0
      }
    }
    KG.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);