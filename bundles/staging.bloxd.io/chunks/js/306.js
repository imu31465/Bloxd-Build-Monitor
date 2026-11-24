export const id = 306;
export const ids = [306];
export const modules = {
  41678: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => gD
    });
    var pD = wD(37079),
      sD = wD(37125),
      KD = wD(39916),
      rD = wD(37088),
      LD = wD(37273);
    class cD {
      constructor(DD, zD, wD, pD) {
        this.name = DD, this.worldAxisForNormal = zD, this.worldAxisForFileX = wD, this.worldAxisForFileY = pD
      }
    }
    class gD {
      static _NearestPow2Floor(DD) {
        return DD <= 1 ? 1 : 1 << Math.floor(Math.log2(DD))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(DD) {
        if (!DD.isCube) return null;
        DD.Ul()?.iI().flushFramebuffer();
        const zD = DD.getSize().width,
          wD = DD._sphericalPolynomialTargetSize,
          pD = wD > 0 ? this._NearestPow2Floor(wD) : 0,
          sD = !DD.noMipmap && !0 === DD._texture?.generateMipMaps,
          KD = pD > 0 && pD < zD && sD,
          rD = KD ? Math.max(0, Math.round(Math.log2(zD / pD))) : 0,
          LD = KD ? Math.max(1, Math.floor(zD / Math.pow(2, rD))) : zD,
          cD = DD.readPixels(0, rD, void 0, !1),
          gD = DD.readPixels(1, rD, void 0, !1);
        let RD, AD;
        DD.isRenderTarget ? (RD = DD.readPixels(3, rD, void 0, !1), AD = DD.readPixels(2, rD, void 0, !1)) : (RD = DD.readPixels(2, rD, void 0, !1), AD = DD.readPixels(3, rD, void 0, !1));
        const UD = DD.readPixels(4, rD, void 0, !1),
          fD = DD.readPixels(5, rD, void 0, !1),
          ID = DD.gammaSpace,
          BD = pD > 0 && pD < zD && !KD;
        return new Promise((DD => {
          Promise.all([gD, cD, RD, AD, UD, fD]).then((wD => {
            let [sD, KD, rD, cD, gD, RD] = wD, AD = LD;
            if (BD) {
              const DD = 4;
              sD = this._DownsampleFace(sD, zD, pD, DD), KD = this._DownsampleFace(KD, zD, pD, DD), rD = this._DownsampleFace(rD, zD, pD, DD), cD = this._DownsampleFace(cD, zD, pD, DD), gD = this._DownsampleFace(gD, zD, pD, DD), RD = this._DownsampleFace(RD, zD, pD, DD), AD = pD
            }
            const UD = {
              size: AD,
              right: KD,
              left: sD,
              up: rD,
              down: cD,
              front: gD,
              back: RD,
              format: 5,
              type: sD instanceof Float32Array ? 1 : 0,
              gammaSpace: ID
            };
            DD(this.ConvertCubeMapToSphericalPolynomial(UD))
          }))
        }))
      }
      static _AreaElement(DD, zD) {
        return Math.atan2(DD * zD, Math.sqrt(DD * DD + zD * zD + 1))
      }
      static _DownsampleFace(DD, zD, wD, pD) {
        const sD = DD instanceof Float32Array ? DD : Float32Array.from(DD),
          KD = wD * wD * pD,
          rD = new Float32Array(KD),
          LD = zD / wD,
          cD = 1 / (LD * LD);
        for (let RD = 0; RD < wD; RD++) {
          const DD = Math.floor(RD * LD),
            KD = Math.floor((RD + 1) * LD);
          for (let gD = 0; gD < wD; gD++) {
            const AD = Math.floor(gD * LD),
              UD = Math.floor((gD + 1) * LD),
              fD = (RD * wD + gD) * pD;
            for (let wD = 0; wD < pD; wD++) {
              let LD = 0;
              for (let rD = DD; rD < KD; rD++)
                for (let DD = AD; DD < UD; DD++) LD += sD[(rD * zD + DD) * pD + wD];
              rD[fD + wD] = LD * cD
            }
          }
        }
        if (DD instanceof Float32Array) return rD;
        const gD = new(0, DD.constructor)(KD);
        for (let RD = 0; RD < KD; RD++) gD[RD] = rD[RD] + .5 | 0;
        return gD
      }
      static ConvertCubeMapToSphericalPolynomial(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const wD = zD > 0 ? this._NearestPow2Floor(zD) : 0;
        if (wD > 0 && DD.size > wD) {
          const zD = 5 === DD.format ? 4 : 3,
            pD = ["right", "left", "up", "down", "front", "back"],
            sD = {};
          for (const KD of pD) sD[KD] = this._DownsampleFace(DD[KD], DD.size, wD, zD);
          DD = {
            ...DD,
            ...sD,
            size: wD
          }
        }
        const pD = new KD.c;
        let cD = 0;
        const gD = 2 / DD.size,
          RD = gD,
          AD = .5 * gD,
          UD = AD - 1;
        for (let KD = 0; KD < 6; KD++) {
          const zD = this._FileFaces[KD],
            wD = DD[zD.name];
          let fD = UD;
          const ID = 5 === DD.format ? 4 : 3;
          for (let KD = 0; KD < DD.size; KD++) {
            let BD = UD;
            for (let RD = 0; RD < DD.size; RD++) {
              const UD = zD.worldAxisForFileX.scale(BD).add(zD.worldAxisForFileY.scale(fD)).add(zD.worldAxisForNormal);
              UD.normalize();
              const GD = this._AreaElement(BD - AD, fD - AD) - this._AreaElement(BD - AD, fD + AD) - this._AreaElement(BD + AD, fD - AD) + this._AreaElement(BD + AD, fD + AD);
              let hD = wD[KD * DD.size * ID + RD * ID + 0],
                nD = wD[KD * DD.size * ID + RD * ID + 1],
                MD = wD[KD * DD.size * ID + RD * ID + 2];
              isNaN(hD) && (hD = 0), isNaN(nD) && (nD = 0), isNaN(MD) && (MD = 0), 0 === DD.type && (hD /= 255, nD /= 255, MD /= 255), DD.gammaSpace && (hD = Math.pow((0, sD.Clamp)(hD), rD.g), nD = Math.pow((0, sD.Clamp)(nD), rD.g), MD = Math.pow((0, sD.Clamp)(MD), rD.g));
              const OD = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const DD = Math.max(hD, nD, MD);
                if (DD > OD) {
                  const zD = OD / DD;
                  hD *= zD, nD *= zD, MD *= zD
                }
              } else hD = (0, sD.Clamp)(hD, 0, OD), nD = (0, sD.Clamp)(nD, 0, OD), MD = (0, sD.Clamp)(MD, 0, OD);
              const JD = new LD.d(hD, nD, MD);
              pD.addLight(UD, JD, GD), cD += GD, BD += gD
            }
            fD += RD
          }
        }
        const fD = 6 * (4 * Math.PI) / 6 / cD;
        return pD.scaleInPlace(fD), pD.convertIncidentRadianceToIrradiance(), pD.convertIrradianceToLambertianRadiance(), KD.e.FromHarmonics(pD)
      }
    }
    gD._FileFaces = [new cD("right", new pD.s(1, 0, 0), new pD.s(0, 0, -1), new pD.s(0, -1, 0)), new cD("left", new pD.s(-1, 0, 0), new pD.s(0, 0, 1), new pD.s(0, -1, 0)), new cD("up", new pD.s(0, 1, 0), new pD.s(1, 0, 0), new pD.s(0, 0, 1)), new cD("down", new pD.s(0, -1, 0), new pD.s(1, 0, 0), new pD.s(0, 0, -1)), new cD("front", new pD.s(0, 0, 1), new pD.s(1, 0, 0), new pD.s(0, -1, 0)), new cD("back", new pD.s(0, 0, -1), new pD.s(-1, 0, 0), new pD.s(0, -1, 0))], gD.MAX_HDRI_VALUE = 4096, gD.PRESERVE_CLAMPED_COLORS = !1
  },
  41670: (DD, zD, wD) => {
    wD.d(zD, {
      DDSTools: () => ID
    });
    var pD = wD(37125),
      sD = wD(38662),
      KD = wD(41678),
      rD = wD(39990);
    const LD = 131072,
      cD = 131072;

    function gD(DD) {
      return DD.charCodeAt(0) + (DD.charCodeAt(1) << 8) + (DD.charCodeAt(2) << 16) + (DD.charCodeAt(3) << 24)
    }
    const RD = gD("DXT1"),
      AD = gD("DXT3"),
      UD = gD("DXT5"),
      fD = gD("DX10");
    class ID {
      static GetDDSInfo(DD) {
        const zD = new Int32Array(DD.buffer, DD.byteOffset, 31),
          wD = new Int32Array(DD.buffer, DD.byteOffset, 35);
        let pD = 1;
        zD[2] & LD && (pD = Math.max(1, zD[7]));
        const sD = zD[21],
          KD = sD === fD ? wD[32] : 0;
        let rD = 0;
        switch (sD) {
          case 113:
            rD = 2;
            break;
          case 116:
            rD = 1;
            break;
          case fD:
            if (10 === KD) {
              rD = 2;
              break
            }
            if (2 === KD) {
              rD = 1;
              break
            }
        }
        return {
          width: zD[4],
          height: zD[3],
          mipmapCount: pD,
          isFourCC: 4 === (4 & zD[20]),
          isRGB: 64 === (64 & zD[20]),
          isLuminance: (zD[20] & cD) === cD,
          isCube: 512 === (512 & zD[28]),
          isCompressed: sD === RD || sD === AD || sD === UD,
          dxgiFormat: KD,
          textureType: rD
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(DD, zD, wD, pD, sD, KD) {
        const LD = new Float32Array(pD),
          cD = new Uint16Array(sD, wD);
        let gD = 0;
        for (let RD = 0; RD < zD; RD++)
          for (let zD = 0; zD < DD; zD++) {
            const wD = 4 * (zD + RD * DD);
            LD[gD] = (0, rD.c)(cD[wD]), LD[gD + 1] = (0, rD.c)(cD[wD + 1]), LD[gD + 2] = (0, rD.c)(cD[wD + 2]), ID.StoreLODInAlphaChannel ? LD[gD + 3] = KD : LD[gD + 3] = (0, rD.c)(cD[wD + 3]), gD += 4
          }
        return LD
      }
      static _GetHalfFloatRGBAArrayBuffer(DD, zD, wD, pD, sD, KD) {
        if (ID.StoreLODInAlphaChannel) {
          const LD = new Uint16Array(pD),
            cD = new Uint16Array(sD, wD);
          let gD = 0;
          for (let wD = 0; wD < zD; wD++)
            for (let zD = 0; zD < DD; zD++) {
              const pD = 4 * (zD + wD * DD);
              LD[gD] = cD[pD], LD[gD + 1] = cD[pD + 1], LD[gD + 2] = cD[pD + 2], LD[gD + 3] = (0, rD.g)(KD), gD += 4
            }
          return LD
        }
        return new Uint16Array(sD, wD, pD)
      }
      static _GetFloatRGBAArrayBuffer(DD, zD, wD, pD, sD, KD) {
        if (ID.StoreLODInAlphaChannel) {
          const rD = new Float32Array(pD),
            LD = new Float32Array(sD, wD);
          let cD = 0;
          for (let wD = 0; wD < zD; wD++)
            for (let zD = 0; zD < DD; zD++) {
              const pD = 4 * (zD + wD * DD);
              rD[cD] = LD[pD], rD[cD + 1] = LD[pD + 1], rD[cD + 2] = LD[pD + 2], rD[cD + 3] = KD, cD += 4
            }
          return rD
        }
        return new Float32Array(sD, wD, pD)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(DD, zD, wD, pD, sD, KD) {
        const LD = new Uint16Array(pD),
          cD = new Float32Array(sD, wD);
        let gD = 0;
        for (let RD = 0; RD < zD; RD++)
          for (let zD = 0; zD < DD; zD++) LD[gD] = (0, rD.g)(cD[gD]), LD[gD + 1] = (0, rD.g)(cD[gD + 1]), LD[gD + 2] = (0, rD.g)(cD[gD + 2]), ID.StoreLODInAlphaChannel ? LD[gD + 3] = (0, rD.g)(KD) : LD[gD + 3] = (0, rD.g)(cD[gD + 3]), gD += 4;
        return LD
      }
      static _GetFloatAsUIntRGBAArrayBuffer(DD, zD, wD, sD, KD, rD) {
        const LD = new Uint8Array(sD),
          cD = new Float32Array(KD, wD);
        let gD = 0;
        for (let RD = 0; RD < zD; RD++)
          for (let zD = 0; zD < DD; zD++) {
            const wD = 4 * (zD + RD * DD);
            LD[gD] = 255 * (0, pD.Clamp)(cD[wD]), LD[gD + 1] = 255 * (0, pD.Clamp)(cD[wD + 1]), LD[gD + 2] = 255 * (0, pD.Clamp)(cD[wD + 2]), ID.StoreLODInAlphaChannel ? LD[gD + 3] = rD : LD[gD + 3] = 255 * (0, pD.Clamp)(cD[wD + 3]), gD += 4
          }
        return LD
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(DD, zD, wD, sD, KD, LD) {
        const cD = new Uint8Array(sD),
          gD = new Uint16Array(KD, wD);
        let RD = 0;
        for (let AD = 0; AD < zD; AD++)
          for (let zD = 0; zD < DD; zD++) {
            const wD = 4 * (zD + AD * DD);
            cD[RD] = 255 * (0, pD.Clamp)((0, rD.c)(gD[wD])), cD[RD + 1] = 255 * (0, pD.Clamp)((0, rD.c)(gD[wD + 1])), cD[RD + 2] = 255 * (0, pD.Clamp)((0, rD.c)(gD[wD + 2])), ID.StoreLODInAlphaChannel ? cD[RD + 3] = LD : cD[RD + 3] = 255 * (0, pD.Clamp)((0, rD.c)(gD[wD + 3])), RD += 4
          }
        return cD
      }
      static _GetRGBAArrayBuffer(DD, zD, wD, pD, sD, KD, rD, LD, cD) {
        const gD = new Uint8Array(pD),
          RD = new Uint8Array(sD, wD);
        let AD = 0;
        for (let UD = 0; UD < zD; UD++)
          for (let zD = 0; zD < DD; zD++) {
            const wD = 4 * (zD + UD * DD);
            gD[AD] = RD[wD + KD], gD[AD + 1] = RD[wD + rD], gD[AD + 2] = RD[wD + LD], gD[AD + 3] = RD[wD + cD], AD += 4
          }
        return gD
      }
      static _ExtractLongWordOrder(DD) {
        return 0 === DD || 255 === DD || -16777216 === DD ? 0 : 1 + ID._ExtractLongWordOrder(DD >> 8)
      }
      static _GetRGBArrayBuffer(DD, zD, wD, pD, sD, KD, rD, LD) {
        const cD = new Uint8Array(pD),
          gD = new Uint8Array(sD, wD);
        let RD = 0;
        for (let AD = 0; AD < zD; AD++)
          for (let zD = 0; zD < DD; zD++) {
            const wD = 3 * (zD + AD * DD);
            cD[RD] = gD[wD + KD], cD[RD + 1] = gD[wD + rD], cD[RD + 2] = gD[wD + LD], RD += 3
          }
        return cD
      }
      static _GetLuminanceArrayBuffer(DD, zD, wD, pD, sD) {
        const KD = new Uint8Array(pD),
          rD = new Uint8Array(sD, wD);
        let LD = 0;
        for (let cD = 0; cD < zD; cD++)
          for (let zD = 0; zD < DD; zD++) {
            const wD = zD + cD * DD;
            KD[LD] = rD[wD], LD++
          }
        return KD
      }
      static UploadDDSLevels(DD, zD, wD, pD, rD, cD) {
        let gD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          BD = arguments.length > 7 ? arguments[7] : void 0,
          GD = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          hD = null;
        pD.sphericalPolynomial && (hD = []);
        const nD = !!DD.getCaps().s3tc;
        zD.generateMipMaps = rD;
        const MD = new Int32Array(wD.buffer, wD.byteOffset, 31);
        let OD, JD, ED, QD, XD, VD, PD, CD = 0,
          xD = 0,
          TD = 1;
        if (542327876 !== MD[0]) return void sD.d.Error("Invalid magic number in DDS header");
        if (!pD.isFourCC && !pD.isRGB && !pD.isLuminance) return void sD.d.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (pD.isCompressed && !nD) return void sD.d.Error("Compressed textures are not supported on this platform.");
        let bD = MD[22];
        QD = MD[1] + 4;
        let jD = !1;
        if (pD.isFourCC) switch (OD = MD[21], OD) {
          case RD:
            TD = 8, xD = 33777;
            break;
          case AD:
            TD = 16, xD = 33778;
            break;
          case UD:
            TD = 16, xD = 33779;
            break;
          case 113:
            jD = !0, bD = 64;
            break;
          case 116:
            jD = !0, bD = 128;
            break;
          case fD: {
            QD += 20;
            let DD = !1;
            switch (pD.dxgiFormat) {
              case 10:
                jD = !0, bD = 64, DD = !0;
                break;
              case 2:
                jD = !0, bD = 128, DD = !0;
                break;
              case 88:
                pD.isRGB = !0, pD.isFourCC = !1, bD = 32, DD = !0
            }
            if (DD) break
          }
          default:
            return void sD.d.Error(["Unsupported FourCC code:", (dD = OD, String.fromCharCode(255 & dD, dD >> 8 & 255, dD >> 16 & 255, dD >> 24 & 255))])
        }
        var dD;
        const SD = ID._ExtractLongWordOrder(MD[23]),
          iD = ID._ExtractLongWordOrder(MD[24]),
          lD = ID._ExtractLongWordOrder(MD[25]),
          WD = ID._ExtractLongWordOrder(MD[26]);
        jD && (xD = DD._getRGBABufferInternalSizedFormat(pD.textureType)), VD = 1, MD[2] & LD && !1 !== rD && (VD = Math.max(1, MD[7]));
        const ND = BD || 0,
          ZD = DD.getCaps();
        for (let sD = ND; sD < cD; sD++) {
          for (JD = MD[4], ED = MD[3], PD = 0; PD < VD; ++PD) {
            if (-1 === gD || gD === PD) {
              const KD = -1 === gD ? PD : 0;
              if (!pD.isCompressed && pD.isFourCC) {
                zD.format = 5, CD = JD * ED * 4;
                let pD = null;
                if (DD._badOS || DD._badDesktopOS || !ZD.textureHalfFloat && !ZD.textureFloat) 128 === bD ? (pD = ID._GetFloatAsUIntRGBAArrayBuffer(JD, ED, wD.byteOffset + QD, CD, wD.buffer, KD), hD && 0 == KD && hD.push(ID._GetFloatRGBAArrayBuffer(JD, ED, wD.byteOffset + QD, CD, wD.buffer, KD))) : 64 === bD && (pD = ID._GetHalfFloatAsUIntRGBAArrayBuffer(JD, ED, wD.byteOffset + QD, CD, wD.buffer, KD), hD && 0 == KD && hD.push(ID._GetHalfFloatAsFloatRGBAArrayBuffer(JD, ED, wD.byteOffset + QD, CD, wD.buffer, KD))), zD.type = 0;
                else {
                  const DD = ZD.textureFloat && (GD && ZD.textureFloatLinearFiltering || !GD),
                    sD = ZD.textureHalfFloat && (GD && ZD.textureHalfFloatLinearFiltering || !GD),
                    rD = (128 === bD || 64 === bD && !sD) && DD ? 1 : (64 === bD || 128 === bD && !DD) && sD ? 2 : 0;
                  let LD, cD = null;
                  if (128 === bD) switch (rD) {
                    case 1:
                      LD = ID._GetFloatRGBAArrayBuffer, cD = null;
                      break;
                    case 2:
                      LD = ID._GetFloatAsHalfFloatRGBAArrayBuffer, cD = ID._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      LD = ID._GetFloatAsUIntRGBAArrayBuffer, cD = ID._GetFloatRGBAArrayBuffer
                  } else switch (rD) {
                    case 1:
                      LD = ID._GetHalfFloatAsFloatRGBAArrayBuffer, cD = null;
                      break;
                    case 2:
                      LD = ID._GetHalfFloatRGBAArrayBuffer, cD = ID._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      LD = ID._GetHalfFloatAsUIntRGBAArrayBuffer, cD = ID._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  zD.type = rD, pD = LD(JD, ED, wD.byteOffset + QD, CD, wD.buffer, KD), hD && 0 == KD && hD.push(cD ? cD(JD, ED, wD.byteOffset + QD, CD, wD.buffer, KD) : pD)
                }
                pD && DD._uploadDataToTextureDirectly(zD, pD, sD, KD)
              } else if (pD.isRGB) zD.type = 0, 24 === bD ? (zD.format = 4, CD = JD * ED * 3, XD = ID._GetRGBArrayBuffer(JD, ED, wD.byteOffset + QD, CD, wD.buffer, SD, iD, lD), DD._uploadDataToTextureDirectly(zD, XD, sD, KD)) : (zD.format = 5, CD = JD * ED * 4, XD = ID._GetRGBAArrayBuffer(JD, ED, wD.byteOffset + QD, CD, wD.buffer, SD, iD, lD, WD), DD._uploadDataToTextureDirectly(zD, XD, sD, KD));
              else if (pD.isLuminance) {
                const pD = DD._getUnpackAlignement(),
                  rD = JD;
                CD = Math.floor((JD + pD - 1) / pD) * pD * (ED - 1) + rD, XD = ID._GetLuminanceArrayBuffer(JD, ED, wD.byteOffset + QD, CD, wD.buffer), zD.format = 1, zD.type = 0, DD._uploadDataToTextureDirectly(zD, XD, sD, KD)
              } else CD = Math.max(4, JD) / 4 * Math.max(4, ED) / 4 * TD, XD = new Uint8Array(wD.buffer, wD.byteOffset + QD, CD), zD.type = 0, DD._uploadCompressedDataToTextureDirectly(zD, xD, JD, ED, XD, sD, KD)
            }
            QD += bD ? JD * ED * (bD / 8) : CD, JD *= .5, ED *= .5, JD = Math.max(1, JD), ED = Math.max(1, ED)
          }
          if (void 0 !== BD) break
        }
        hD && hD.length > 0 ? pD.sphericalPolynomial = KD.b.ConvertCubeMapToSphericalPolynomial({
          size: MD[4],
          right: hD[0],
          left: hD[1],
          up: hD[2],
          down: hD[3],
          front: hD[4],
          back: hD[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : pD.sphericalPolynomial = void 0
      }
    }
    ID.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);