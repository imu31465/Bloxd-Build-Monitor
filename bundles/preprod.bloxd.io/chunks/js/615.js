export const id = 615;
export const ids = [615];
export const modules = {
  44412: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => QM
    });
    var OM = iM(38040),
      SM = iM(38074),
      jM = iM(41086),
      aM = iM(38044),
      PM = iM(38173);
    class nM {
      constructor(MM, rM, iM, OM) {
        this.name = MM, this.worldAxisForNormal = rM, this.worldAxisForFileX = iM, this.worldAxisForFileY = OM
      }
    }
    class QM {
      static _NearestPow2Floor(MM) {
        return MM <= 1 ? 1 : 1 << Math.floor(Math.log2(MM))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(MM) {
        if (!MM.isCube) return null;
        MM.Hk()?.ph().flushFramebuffer();
        const rM = MM.getSize().width,
          iM = MM._sphericalPolynomialTargetSize,
          OM = iM > 0 ? this._NearestPow2Floor(iM) : 0,
          SM = !MM.noMipmap && !0 === MM._texture?.generateMipMaps,
          jM = OM > 0 && OM < rM && SM,
          aM = jM ? Math.max(0, Math.round(Math.log2(rM / OM))) : 0,
          PM = jM ? Math.max(1, Math.floor(rM / Math.pow(2, aM))) : rM,
          nM = MM.readPixels(0, aM, void 0, !1),
          QM = MM.readPixels(1, aM, void 0, !1);
        let zM, LM;
        MM.isRenderTarget ? (zM = MM.readPixels(3, aM, void 0, !1), LM = MM.readPixels(2, aM, void 0, !1)) : (zM = MM.readPixels(2, aM, void 0, !1), LM = MM.readPixels(3, aM, void 0, !1));
        const mM = MM.readPixels(4, aM, void 0, !1),
          HM = MM.readPixels(5, aM, void 0, !1),
          hM = MM.gammaSpace,
          JM = OM > 0 && OM < rM && !jM;
        return new Promise((MM => {
          Promise.all([QM, nM, zM, LM, mM, HM]).then((iM => {
            let [SM, jM, aM, nM, QM, zM] = iM, LM = PM;
            if (JM) {
              const MM = 4;
              SM = this._DownsampleFace(SM, rM, OM, MM), jM = this._DownsampleFace(jM, rM, OM, MM), aM = this._DownsampleFace(aM, rM, OM, MM), nM = this._DownsampleFace(nM, rM, OM, MM), QM = this._DownsampleFace(QM, rM, OM, MM), zM = this._DownsampleFace(zM, rM, OM, MM), LM = OM
            }
            const mM = {
              size: LM,
              right: jM,
              left: SM,
              up: aM,
              down: nM,
              front: QM,
              back: zM,
              format: 5,
              type: SM instanceof Float32Array ? 1 : 0,
              gammaSpace: hM
            };
            MM(this.ConvertCubeMapToSphericalPolynomial(mM))
          }))
        }))
      }
      static _AreaElement(MM, rM) {
        return Math.atan2(MM * rM, Math.sqrt(MM * MM + rM * rM + 1))
      }
      static _DownsampleFace(MM, rM, iM, OM) {
        const SM = MM instanceof Float32Array ? MM : Float32Array.from(MM),
          jM = iM * iM * OM,
          aM = new Float32Array(jM),
          PM = rM / iM,
          nM = 1 / (PM * PM);
        for (let zM = 0; zM < iM; zM++) {
          const MM = Math.floor(zM * PM),
            jM = Math.floor((zM + 1) * PM);
          for (let QM = 0; QM < iM; QM++) {
            const LM = Math.floor(QM * PM),
              mM = Math.floor((QM + 1) * PM),
              HM = (zM * iM + QM) * OM;
            for (let iM = 0; iM < OM; iM++) {
              let PM = 0;
              for (let aM = MM; aM < jM; aM++)
                for (let MM = LM; MM < mM; MM++) PM += SM[(aM * rM + MM) * OM + iM];
              aM[HM + iM] = PM * nM
            }
          }
        }
        if (MM instanceof Float32Array) return aM;
        const QM = new(0, MM.constructor)(jM);
        for (let zM = 0; zM < jM; zM++) QM[zM] = aM[zM] + .5 | 0;
        return QM
      }
      static ConvertCubeMapToSphericalPolynomial(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const iM = rM > 0 ? this._NearestPow2Floor(rM) : 0;
        if (iM > 0 && MM.size > iM) {
          const rM = 5 === MM.format ? 4 : 3,
            OM = ["right", "left", "up", "down", "front", "back"],
            SM = {};
          for (const jM of OM) SM[jM] = this._DownsampleFace(MM[jM], MM.size, iM, rM);
          MM = {
            ...MM,
            ...SM,
            size: iM
          }
        }
        const OM = new jM.b;
        let nM = 0;
        const QM = 2 / MM.size,
          zM = QM,
          LM = .5 * QM,
          mM = LM - 1;
        for (let jM = 0; jM < 6; jM++) {
          const rM = this._FileFaces[jM],
            iM = MM[rM.name];
          let HM = mM;
          const hM = 5 === MM.format ? 4 : 3;
          for (let jM = 0; jM < MM.size; jM++) {
            let JM = mM;
            for (let zM = 0; zM < MM.size; zM++) {
              const mM = rM.worldAxisForFileX.scale(JM).add(rM.worldAxisForFileY.scale(HM)).add(rM.worldAxisForNormal);
              mM.normalize();
              const dM = this._AreaElement(JM - LM, HM - LM) - this._AreaElement(JM - LM, HM + LM) - this._AreaElement(JM + LM, HM - LM) + this._AreaElement(JM + LM, HM + LM);
              let yM = iM[jM * MM.size * hM + zM * hM + 0],
                lM = iM[jM * MM.size * hM + zM * hM + 1],
                EM = iM[jM * MM.size * hM + zM * hM + 2];
              isNaN(yM) && (yM = 0), isNaN(lM) && (lM = 0), isNaN(EM) && (EM = 0), 0 === MM.type && (yM /= 255, lM /= 255, EM /= 255), MM.gammaSpace && (yM = Math.pow((0, SM.Clamp)(yM), aM.h), lM = Math.pow((0, SM.Clamp)(lM), aM.h), EM = Math.pow((0, SM.Clamp)(EM), aM.h));
              const UM = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const MM = Math.max(yM, lM, EM);
                if (MM > UM) {
                  const rM = UM / MM;
                  yM *= rM, lM *= rM, EM *= rM
                }
              } else yM = (0, SM.Clamp)(yM, 0, UM), lM = (0, SM.Clamp)(lM, 0, UM), EM = (0, SM.Clamp)(EM, 0, UM);
              const GM = new PM.d(yM, lM, EM);
              OM.addLight(mM, GM, dM), nM += dM, JM += QM
            }
            HM += zM
          }
        }
        const HM = 6 * (4 * Math.PI) / 6 / nM;
        return OM.scaleInPlace(HM), OM.convertIncidentRadianceToIrradiance(), OM.convertIrradianceToLambertianRadiance(), jM.c.FromHarmonics(OM)
      }
    }
    QM._FileFaces = [new nM("right", new OM.q(1, 0, 0), new OM.q(0, 0, -1), new OM.q(0, -1, 0)), new nM("left", new OM.q(-1, 0, 0), new OM.q(0, 0, 1), new OM.q(0, -1, 0)), new nM("up", new OM.q(0, 1, 0), new OM.q(1, 0, 0), new OM.q(0, 0, 1)), new nM("down", new OM.q(0, -1, 0), new OM.q(1, 0, 0), new OM.q(0, 0, -1)), new nM("front", new OM.q(0, 0, 1), new OM.q(1, 0, 0), new OM.q(0, -1, 0)), new nM("back", new OM.q(0, 0, -1), new OM.q(-1, 0, 0), new OM.q(0, -1, 0))], QM.MAX_HDRI_VALUE = 4096, QM.PRESERVE_CLAMPED_COLORS = !1
  },
  44406: (MM, rM, iM) => {
    iM.d(rM, {
      DDSTools: () => hM
    });
    var OM = iM(38074),
      SM = iM(39711),
      jM = iM(44412),
      aM = iM(41176);
    const PM = 131072,
      nM = 131072;

    function QM(MM) {
      return MM.charCodeAt(0) + (MM.charCodeAt(1) << 8) + (MM.charCodeAt(2) << 16) + (MM.charCodeAt(3) << 24)
    }
    const zM = QM("DXT1"),
      LM = QM("DXT3"),
      mM = QM("DXT5"),
      HM = QM("DX10");
    class hM {
      static GetDDSInfo(MM) {
        const rM = new Int32Array(MM.buffer, MM.byteOffset, 31),
          iM = new Int32Array(MM.buffer, MM.byteOffset, 35);
        let OM = 1;
        rM[2] & PM && (OM = Math.max(1, rM[7]));
        const SM = rM[21],
          jM = SM === HM ? iM[32] : 0;
        let aM = 0;
        switch (SM) {
          case 113:
            aM = 2;
            break;
          case 116:
            aM = 1;
            break;
          case HM:
            if (10 === jM) {
              aM = 2;
              break
            }
            if (2 === jM) {
              aM = 1;
              break
            }
        }
        return {
          width: rM[4],
          height: rM[3],
          mipmapCount: OM,
          isFourCC: 4 === (4 & rM[20]),
          isRGB: 64 === (64 & rM[20]),
          isLuminance: (rM[20] & nM) === nM,
          isCube: 512 === (512 & rM[28]),
          isCompressed: SM === zM || SM === LM || SM === mM,
          dxgiFormat: jM,
          textureType: aM
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(MM, rM, iM, OM, SM, jM) {
        const PM = new Float32Array(OM),
          nM = new Uint16Array(SM, iM);
        let QM = 0;
        for (let zM = 0; zM < rM; zM++)
          for (let rM = 0; rM < MM; rM++) {
            const iM = 4 * (rM + zM * MM);
            PM[QM] = (0, aM.c)(nM[iM]), PM[QM + 1] = (0, aM.c)(nM[iM + 1]), PM[QM + 2] = (0, aM.c)(nM[iM + 2]), hM.StoreLODInAlphaChannel ? PM[QM + 3] = jM : PM[QM + 3] = (0, aM.c)(nM[iM + 3]), QM += 4
          }
        return PM
      }
      static _GetHalfFloatRGBAArrayBuffer(MM, rM, iM, OM, SM, jM) {
        if (hM.StoreLODInAlphaChannel) {
          const PM = new Uint16Array(OM),
            nM = new Uint16Array(SM, iM);
          let QM = 0;
          for (let iM = 0; iM < rM; iM++)
            for (let rM = 0; rM < MM; rM++) {
              const OM = 4 * (rM + iM * MM);
              PM[QM] = nM[OM], PM[QM + 1] = nM[OM + 1], PM[QM + 2] = nM[OM + 2], PM[QM + 3] = (0, aM.g)(jM), QM += 4
            }
          return PM
        }
        return new Uint16Array(SM, iM, OM)
      }
      static _GetFloatRGBAArrayBuffer(MM, rM, iM, OM, SM, jM) {
        if (hM.StoreLODInAlphaChannel) {
          const aM = new Float32Array(OM),
            PM = new Float32Array(SM, iM);
          let nM = 0;
          for (let iM = 0; iM < rM; iM++)
            for (let rM = 0; rM < MM; rM++) {
              const OM = 4 * (rM + iM * MM);
              aM[nM] = PM[OM], aM[nM + 1] = PM[OM + 1], aM[nM + 2] = PM[OM + 2], aM[nM + 3] = jM, nM += 4
            }
          return aM
        }
        return new Float32Array(SM, iM, OM)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(MM, rM, iM, OM, SM, jM) {
        const PM = new Uint16Array(OM),
          nM = new Float32Array(SM, iM);
        let QM = 0;
        for (let zM = 0; zM < rM; zM++)
          for (let rM = 0; rM < MM; rM++) PM[QM] = (0, aM.g)(nM[QM]), PM[QM + 1] = (0, aM.g)(nM[QM + 1]), PM[QM + 2] = (0, aM.g)(nM[QM + 2]), hM.StoreLODInAlphaChannel ? PM[QM + 3] = (0, aM.g)(jM) : PM[QM + 3] = (0, aM.g)(nM[QM + 3]), QM += 4;
        return PM
      }
      static _GetFloatAsUIntRGBAArrayBuffer(MM, rM, iM, SM, jM, aM) {
        const PM = new Uint8Array(SM),
          nM = new Float32Array(jM, iM);
        let QM = 0;
        for (let zM = 0; zM < rM; zM++)
          for (let rM = 0; rM < MM; rM++) {
            const iM = 4 * (rM + zM * MM);
            PM[QM] = 255 * (0, OM.Clamp)(nM[iM]), PM[QM + 1] = 255 * (0, OM.Clamp)(nM[iM + 1]), PM[QM + 2] = 255 * (0, OM.Clamp)(nM[iM + 2]), hM.StoreLODInAlphaChannel ? PM[QM + 3] = aM : PM[QM + 3] = 255 * (0, OM.Clamp)(nM[iM + 3]), QM += 4
          }
        return PM
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(MM, rM, iM, SM, jM, PM) {
        const nM = new Uint8Array(SM),
          QM = new Uint16Array(jM, iM);
        let zM = 0;
        for (let LM = 0; LM < rM; LM++)
          for (let rM = 0; rM < MM; rM++) {
            const iM = 4 * (rM + LM * MM);
            nM[zM] = 255 * (0, OM.Clamp)((0, aM.c)(QM[iM])), nM[zM + 1] = 255 * (0, OM.Clamp)((0, aM.c)(QM[iM + 1])), nM[zM + 2] = 255 * (0, OM.Clamp)((0, aM.c)(QM[iM + 2])), hM.StoreLODInAlphaChannel ? nM[zM + 3] = PM : nM[zM + 3] = 255 * (0, OM.Clamp)((0, aM.c)(QM[iM + 3])), zM += 4
          }
        return nM
      }
      static _GetRGBAArrayBuffer(MM, rM, iM, OM, SM, jM, aM, PM, nM) {
        const QM = new Uint8Array(OM),
          zM = new Uint8Array(SM, iM);
        let LM = 0;
        for (let mM = 0; mM < rM; mM++)
          for (let rM = 0; rM < MM; rM++) {
            const iM = 4 * (rM + mM * MM);
            QM[LM] = zM[iM + jM], QM[LM + 1] = zM[iM + aM], QM[LM + 2] = zM[iM + PM], QM[LM + 3] = zM[iM + nM], LM += 4
          }
        return QM
      }
      static _ExtractLongWordOrder(MM) {
        return 0 === MM || 255 === MM || -16777216 === MM ? 0 : 1 + hM._ExtractLongWordOrder(MM >> 8)
      }
      static _GetRGBArrayBuffer(MM, rM, iM, OM, SM, jM, aM, PM) {
        const nM = new Uint8Array(OM),
          QM = new Uint8Array(SM, iM);
        let zM = 0;
        for (let LM = 0; LM < rM; LM++)
          for (let rM = 0; rM < MM; rM++) {
            const iM = 3 * (rM + LM * MM);
            nM[zM] = QM[iM + jM], nM[zM + 1] = QM[iM + aM], nM[zM + 2] = QM[iM + PM], zM += 3
          }
        return nM
      }
      static _GetLuminanceArrayBuffer(MM, rM, iM, OM, SM) {
        const jM = new Uint8Array(OM),
          aM = new Uint8Array(SM, iM);
        let PM = 0;
        for (let nM = 0; nM < rM; nM++)
          for (let rM = 0; rM < MM; rM++) {
            const iM = rM + nM * MM;
            jM[PM] = aM[iM], PM++
          }
        return jM
      }
      static UploadDDSLevels(MM, rM, iM, OM, aM, nM) {
        let QM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          JM = arguments.length > 7 ? arguments[7] : void 0,
          dM = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          yM = null;
        OM.sphericalPolynomial && (yM = []);
        const lM = !!MM.getCaps().s3tc;
        rM.generateMipMaps = aM;
        const EM = new Int32Array(iM.buffer, iM.byteOffset, 31);
        let UM, GM, CM, eM, bM, wM, tM, gM = 0,
          uM = 0,
          RM = 1;
        if (542327876 !== EM[0]) return void SM.e.Error("Invalid magic number in DDS header");
        if (!OM.isFourCC && !OM.isRGB && !OM.isLuminance) return void SM.e.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (OM.isCompressed && !lM) return void SM.e.Error("Compressed textures are not supported on this platform.");
        let pM = EM[22];
        eM = EM[1] + 4;
        let WM = !1;
        if (OM.isFourCC) switch (UM = EM[21], UM) {
          case zM:
            RM = 8, uM = 33777;
            break;
          case LM:
            RM = 16, uM = 33778;
            break;
          case mM:
            RM = 16, uM = 33779;
            break;
          case 113:
            WM = !0, pM = 64;
            break;
          case 116:
            WM = !0, pM = 128;
            break;
          case HM: {
            eM += 20;
            let MM = !1;
            switch (OM.dxgiFormat) {
              case 10:
                WM = !0, pM = 64, MM = !0;
                break;
              case 2:
                WM = !0, pM = 128, MM = !0;
                break;
              case 88:
                OM.isRGB = !0, OM.isFourCC = !1, pM = 32, MM = !0
            }
            if (MM) break
          }
          default:
            return void SM.e.Error(["Unsupported FourCC code:", (sM = UM, String.fromCharCode(255 & sM, sM >> 8 & 255, sM >> 16 & 255, sM >> 24 & 255))])
        }
        var sM;
        const DM = hM._ExtractLongWordOrder(EM[23]),
          kM = hM._ExtractLongWordOrder(EM[24]),
          ZM = hM._ExtractLongWordOrder(EM[25]),
          oM = hM._ExtractLongWordOrder(EM[26]);
        WM && (uM = MM._getRGBABufferInternalSizedFormat(OM.textureType)), wM = 1, EM[2] & PM && !1 !== aM && (wM = Math.max(1, EM[7]));
        const fM = JM || 0,
          YM = MM.getCaps();
        for (let SM = fM; SM < nM; SM++) {
          for (GM = EM[4], CM = EM[3], tM = 0; tM < wM; ++tM) {
            if (-1 === QM || QM === tM) {
              const jM = -1 === QM ? tM : 0;
              if (!OM.isCompressed && OM.isFourCC) {
                rM.format = 5, gM = GM * CM * 4;
                let OM = null;
                if (MM._badOS || MM._badDesktopOS || !YM.textureHalfFloat && !YM.textureFloat) 128 === pM ? (OM = hM._GetFloatAsUIntRGBAArrayBuffer(GM, CM, iM.byteOffset + eM, gM, iM.buffer, jM), yM && 0 == jM && yM.push(hM._GetFloatRGBAArrayBuffer(GM, CM, iM.byteOffset + eM, gM, iM.buffer, jM))) : 64 === pM && (OM = hM._GetHalfFloatAsUIntRGBAArrayBuffer(GM, CM, iM.byteOffset + eM, gM, iM.buffer, jM), yM && 0 == jM && yM.push(hM._GetHalfFloatAsFloatRGBAArrayBuffer(GM, CM, iM.byteOffset + eM, gM, iM.buffer, jM))), rM.type = 0;
                else {
                  const MM = YM.textureFloat && (dM && YM.textureFloatLinearFiltering || !dM),
                    SM = YM.textureHalfFloat && (dM && YM.textureHalfFloatLinearFiltering || !dM),
                    aM = (128 === pM || 64 === pM && !SM) && MM ? 1 : (64 === pM || 128 === pM && !MM) && SM ? 2 : 0;
                  let PM, nM = null;
                  if (128 === pM) switch (aM) {
                    case 1:
                      PM = hM._GetFloatRGBAArrayBuffer, nM = null;
                      break;
                    case 2:
                      PM = hM._GetFloatAsHalfFloatRGBAArrayBuffer, nM = hM._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      PM = hM._GetFloatAsUIntRGBAArrayBuffer, nM = hM._GetFloatRGBAArrayBuffer
                  } else switch (aM) {
                    case 1:
                      PM = hM._GetHalfFloatAsFloatRGBAArrayBuffer, nM = null;
                      break;
                    case 2:
                      PM = hM._GetHalfFloatRGBAArrayBuffer, nM = hM._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      PM = hM._GetHalfFloatAsUIntRGBAArrayBuffer, nM = hM._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  rM.type = aM, OM = PM(GM, CM, iM.byteOffset + eM, gM, iM.buffer, jM), yM && 0 == jM && yM.push(nM ? nM(GM, CM, iM.byteOffset + eM, gM, iM.buffer, jM) : OM)
                }
                OM && MM._uploadDataToTextureDirectly(rM, OM, SM, jM)
              } else if (OM.isRGB) rM.type = 0, 24 === pM ? (rM.format = 4, gM = GM * CM * 3, bM = hM._GetRGBArrayBuffer(GM, CM, iM.byteOffset + eM, gM, iM.buffer, DM, kM, ZM), MM._uploadDataToTextureDirectly(rM, bM, SM, jM)) : (rM.format = 5, gM = GM * CM * 4, bM = hM._GetRGBAArrayBuffer(GM, CM, iM.byteOffset + eM, gM, iM.buffer, DM, kM, ZM, oM), MM._uploadDataToTextureDirectly(rM, bM, SM, jM));
              else if (OM.isLuminance) {
                const OM = MM._getUnpackAlignement(),
                  aM = GM;
                gM = Math.floor((GM + OM - 1) / OM) * OM * (CM - 1) + aM, bM = hM._GetLuminanceArrayBuffer(GM, CM, iM.byteOffset + eM, gM, iM.buffer), rM.format = 1, rM.type = 0, MM._uploadDataToTextureDirectly(rM, bM, SM, jM)
              } else gM = Math.max(4, GM) / 4 * Math.max(4, CM) / 4 * RM, bM = new Uint8Array(iM.buffer, iM.byteOffset + eM, gM), rM.type = 0, MM._uploadCompressedDataToTextureDirectly(rM, uM, GM, CM, bM, SM, jM)
            }
            eM += pM ? GM * CM * (pM / 8) : gM, GM *= .5, CM *= .5, GM = Math.max(1, GM), CM = Math.max(1, CM)
          }
          if (void 0 !== JM) break
        }
        yM && yM.length > 0 ? OM.sphericalPolynomial = jM.e.ConvertCubeMapToSphericalPolynomial({
          size: EM[4],
          right: yM[0],
          left: yM[1],
          up: yM[2],
          down: yM[3],
          front: yM[4],
          back: yM[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : OM.sphericalPolynomial = void 0
      }
    }
    hM.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);