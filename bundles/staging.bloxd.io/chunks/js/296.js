export const id = 296;
export const ids = [296];
export const modules = {
  40859: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => wD
    });
    var ID = cD(36446),
      pD = cD(36479),
      iD = cD(39142),
      fD = cD(36449),
      bD = cD(36622);
    class QD {
      constructor(DD, CD, cD, ID) {
        this.name = DD, this.worldAxisForNormal = CD, this.worldAxisForFileX = cD, this.worldAxisForFileY = ID
      }
    }
    class wD {
      static _NearestPow2Floor(DD) {
        return DD <= 1 ? 1 : 1 << Math.floor(Math.log2(DD))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(DD) {
        if (!DD.isCube) return null;
        DD.hq()?.DZ().flushFramebuffer();
        const CD = DD.getSize().width,
          cD = DD._sphericalPolynomialTargetSize,
          ID = cD > 0 ? this._NearestPow2Floor(cD) : 0,
          pD = !DD.noMipmap && !0 === DD._texture?.generateMipMaps,
          iD = ID > 0 && ID < CD && pD,
          fD = iD ? Math.max(0, Math.round(Math.log2(CD / ID))) : 0,
          bD = iD ? Math.max(1, Math.floor(CD / Math.pow(2, fD))) : CD,
          QD = DD.readPixels(0, fD, void 0, !1),
          wD = DD.readPixels(1, fD, void 0, !1);
        let SD, BD;
        DD.isRenderTarget ? (SD = DD.readPixels(3, fD, void 0, !1), BD = DD.readPixels(2, fD, void 0, !1)) : (SD = DD.readPixels(2, fD, void 0, !1), BD = DD.readPixels(3, fD, void 0, !1));
        const yD = DD.readPixels(4, fD, void 0, !1),
          MD = DD.readPixels(5, fD, void 0, !1),
          tD = DD.gammaSpace,
          ZD = ID > 0 && ID < CD && !iD;
        return new Promise((DD => {
          Promise.all([wD, QD, SD, BD, yD, MD]).then((cD => {
            let [pD, iD, fD, QD, wD, SD] = cD, BD = bD;
            if (ZD) {
              const DD = 4;
              pD = this._DownsampleFace(pD, CD, ID, DD), iD = this._DownsampleFace(iD, CD, ID, DD), fD = this._DownsampleFace(fD, CD, ID, DD), QD = this._DownsampleFace(QD, CD, ID, DD), wD = this._DownsampleFace(wD, CD, ID, DD), SD = this._DownsampleFace(SD, CD, ID, DD), BD = ID
            }
            const yD = {
              size: BD,
              right: iD,
              left: pD,
              up: fD,
              down: QD,
              front: wD,
              back: SD,
              format: 5,
              type: pD instanceof Float32Array ? 1 : 0,
              gammaSpace: tD
            };
            DD(this.ConvertCubeMapToSphericalPolynomial(yD))
          }))
        }))
      }
      static _AreaElement(DD, CD) {
        return Math.atan2(DD * CD, Math.sqrt(DD * DD + CD * CD + 1))
      }
      static _DownsampleFace(DD, CD, cD, ID) {
        const pD = DD instanceof Float32Array ? DD : Float32Array.from(DD),
          iD = cD * cD * ID,
          fD = new Float32Array(iD),
          bD = CD / cD,
          QD = 1 / (bD * bD);
        for (let SD = 0; SD < cD; SD++) {
          const DD = Math.floor(SD * bD),
            iD = Math.floor((SD + 1) * bD);
          for (let wD = 0; wD < cD; wD++) {
            const BD = Math.floor(wD * bD),
              yD = Math.floor((wD + 1) * bD),
              MD = (SD * cD + wD) * ID;
            for (let cD = 0; cD < ID; cD++) {
              let bD = 0;
              for (let fD = DD; fD < iD; fD++)
                for (let DD = BD; DD < yD; DD++) bD += pD[(fD * CD + DD) * ID + cD];
              fD[MD + cD] = bD * QD
            }
          }
        }
        if (DD instanceof Float32Array) return fD;
        const wD = new(0, DD.constructor)(iD);
        for (let SD = 0; SD < iD; SD++) wD[SD] = fD[SD] + .5 | 0;
        return wD
      }
      static ConvertCubeMapToSphericalPolynomial(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const cD = CD > 0 ? this._NearestPow2Floor(CD) : 0;
        if (cD > 0 && DD.size > cD) {
          const CD = 5 === DD.format ? 4 : 3,
            ID = ["right", "left", "up", "down", "front", "back"],
            pD = {};
          for (const iD of ID) pD[iD] = this._DownsampleFace(DD[iD], DD.size, cD, CD);
          DD = {
            ...DD,
            ...pD,
            size: cD
          }
        }
        const ID = new iD.e;
        let QD = 0;
        const wD = 2 / DD.size,
          SD = wD,
          BD = .5 * wD,
          yD = BD - 1;
        for (let iD = 0; iD < 6; iD++) {
          const CD = this._FileFaces[iD],
            cD = DD[CD.name];
          let MD = yD;
          const tD = 5 === DD.format ? 4 : 3;
          for (let iD = 0; iD < DD.size; iD++) {
            let ZD = yD;
            for (let SD = 0; SD < DD.size; SD++) {
              const yD = CD.worldAxisForFileX.scale(ZD).add(CD.worldAxisForFileY.scale(MD)).add(CD.worldAxisForNormal);
              yD.normalize();
              const oD = this._AreaElement(ZD - BD, MD - BD) - this._AreaElement(ZD - BD, MD + BD) - this._AreaElement(ZD + BD, MD - BD) + this._AreaElement(ZD + BD, MD + BD);
              let vD = cD[iD * DD.size * tD + SD * tD + 0],
                ND = cD[iD * DD.size * tD + SD * tD + 1],
                gD = cD[iD * DD.size * tD + SD * tD + 2];
              isNaN(vD) && (vD = 0), isNaN(ND) && (ND = 0), isNaN(gD) && (gD = 0), 0 === DD.type && (vD /= 255, ND /= 255, gD /= 255), DD.gammaSpace && (vD = Math.pow((0, pD.Clamp)(vD), fD.h), ND = Math.pow((0, pD.Clamp)(ND), fD.h), gD = Math.pow((0, pD.Clamp)(gD), fD.h));
              const XD = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const DD = Math.max(vD, ND, gD);
                if (DD > XD) {
                  const CD = XD / DD;
                  vD *= CD, ND *= CD, gD *= CD
                }
              } else vD = (0, pD.Clamp)(vD, 0, XD), ND = (0, pD.Clamp)(ND, 0, XD), gD = (0, pD.Clamp)(gD, 0, XD);
              const mD = new bD.d(vD, ND, gD);
              ID.addLight(yD, mD, oD), QD += oD, ZD += wD
            }
            MD += SD
          }
        }
        const MD = 6 * (4 * Math.PI) / 6 / QD;
        return ID.scaleInPlace(MD), ID.convertIncidentRadianceToIrradiance(), ID.convertIrradianceToLambertianRadiance(), iD.f.FromHarmonics(ID)
      }
    }
    wD._FileFaces = [new QD("right", new ID.p(1, 0, 0), new ID.p(0, 0, -1), new ID.p(0, -1, 0)), new QD("left", new ID.p(-1, 0, 0), new ID.p(0, 0, 1), new ID.p(0, -1, 0)), new QD("up", new ID.p(0, 1, 0), new ID.p(1, 0, 0), new ID.p(0, 0, 1)), new QD("down", new ID.p(0, -1, 0), new ID.p(1, 0, 0), new ID.p(0, 0, -1)), new QD("front", new ID.p(0, 0, 1), new ID.p(1, 0, 0), new ID.p(0, -1, 0)), new QD("back", new ID.p(0, 0, -1), new ID.p(-1, 0, 0), new ID.p(0, -1, 0))], wD.MAX_HDRI_VALUE = 4096, wD.PRESERVE_CLAMPED_COLORS = !1
  },
  40851: (DD, CD, cD) => {
    cD.d(CD, {
      DDSTools: () => tD
    });
    var ID = cD(36479),
      pD = cD(38048),
      iD = cD(40859),
      fD = cD(39215);
    const bD = 131072,
      QD = 131072;

    function wD(DD) {
      return DD.charCodeAt(0) + (DD.charCodeAt(1) << 8) + (DD.charCodeAt(2) << 16) + (DD.charCodeAt(3) << 24)
    }
    const SD = wD("DXT1"),
      BD = wD("DXT3"),
      yD = wD("DXT5"),
      MD = wD("DX10");
    class tD {
      static GetDDSInfo(DD) {
        const CD = new Int32Array(DD.buffer, DD.byteOffset, 31),
          cD = new Int32Array(DD.buffer, DD.byteOffset, 35);
        let ID = 1;
        CD[2] & bD && (ID = Math.max(1, CD[7]));
        const pD = CD[21],
          iD = pD === MD ? cD[32] : 0;
        let fD = 0;
        switch (pD) {
          case 113:
            fD = 2;
            break;
          case 116:
            fD = 1;
            break;
          case MD:
            if (10 === iD) {
              fD = 2;
              break
            }
            if (2 === iD) {
              fD = 1;
              break
            }
        }
        return {
          width: CD[4],
          height: CD[3],
          mipmapCount: ID,
          isFourCC: 4 === (4 & CD[20]),
          isRGB: 64 === (64 & CD[20]),
          isLuminance: (CD[20] & QD) === QD,
          isCube: 512 === (512 & CD[28]),
          isCompressed: pD === SD || pD === BD || pD === yD,
          dxgiFormat: iD,
          textureType: fD
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(DD, CD, cD, ID, pD, iD) {
        const bD = new Float32Array(ID),
          QD = new Uint16Array(pD, cD);
        let wD = 0;
        for (let SD = 0; SD < CD; SD++)
          for (let CD = 0; CD < DD; CD++) {
            const cD = 4 * (CD + SD * DD);
            bD[wD] = (0, fD.c)(QD[cD]), bD[wD + 1] = (0, fD.c)(QD[cD + 1]), bD[wD + 2] = (0, fD.c)(QD[cD + 2]), tD.StoreLODInAlphaChannel ? bD[wD + 3] = iD : bD[wD + 3] = (0, fD.c)(QD[cD + 3]), wD += 4
          }
        return bD
      }
      static _GetHalfFloatRGBAArrayBuffer(DD, CD, cD, ID, pD, iD) {
        if (tD.StoreLODInAlphaChannel) {
          const bD = new Uint16Array(ID),
            QD = new Uint16Array(pD, cD);
          let wD = 0;
          for (let cD = 0; cD < CD; cD++)
            for (let CD = 0; CD < DD; CD++) {
              const ID = 4 * (CD + cD * DD);
              bD[wD] = QD[ID], bD[wD + 1] = QD[ID + 1], bD[wD + 2] = QD[ID + 2], bD[wD + 3] = (0, fD.i)(iD), wD += 4
            }
          return bD
        }
        return new Uint16Array(pD, cD, ID)
      }
      static _GetFloatRGBAArrayBuffer(DD, CD, cD, ID, pD, iD) {
        if (tD.StoreLODInAlphaChannel) {
          const fD = new Float32Array(ID),
            bD = new Float32Array(pD, cD);
          let QD = 0;
          for (let cD = 0; cD < CD; cD++)
            for (let CD = 0; CD < DD; CD++) {
              const ID = 4 * (CD + cD * DD);
              fD[QD] = bD[ID], fD[QD + 1] = bD[ID + 1], fD[QD + 2] = bD[ID + 2], fD[QD + 3] = iD, QD += 4
            }
          return fD
        }
        return new Float32Array(pD, cD, ID)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(DD, CD, cD, ID, pD, iD) {
        const bD = new Uint16Array(ID),
          QD = new Float32Array(pD, cD);
        let wD = 0;
        for (let SD = 0; SD < CD; SD++)
          for (let CD = 0; CD < DD; CD++) bD[wD] = (0, fD.i)(QD[wD]), bD[wD + 1] = (0, fD.i)(QD[wD + 1]), bD[wD + 2] = (0, fD.i)(QD[wD + 2]), tD.StoreLODInAlphaChannel ? bD[wD + 3] = (0, fD.i)(iD) : bD[wD + 3] = (0, fD.i)(QD[wD + 3]), wD += 4;
        return bD
      }
      static _GetFloatAsUIntRGBAArrayBuffer(DD, CD, cD, pD, iD, fD) {
        const bD = new Uint8Array(pD),
          QD = new Float32Array(iD, cD);
        let wD = 0;
        for (let SD = 0; SD < CD; SD++)
          for (let CD = 0; CD < DD; CD++) {
            const cD = 4 * (CD + SD * DD);
            bD[wD] = 255 * (0, ID.Clamp)(QD[cD]), bD[wD + 1] = 255 * (0, ID.Clamp)(QD[cD + 1]), bD[wD + 2] = 255 * (0, ID.Clamp)(QD[cD + 2]), tD.StoreLODInAlphaChannel ? bD[wD + 3] = fD : bD[wD + 3] = 255 * (0, ID.Clamp)(QD[cD + 3]), wD += 4
          }
        return bD
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(DD, CD, cD, pD, iD, bD) {
        const QD = new Uint8Array(pD),
          wD = new Uint16Array(iD, cD);
        let SD = 0;
        for (let BD = 0; BD < CD; BD++)
          for (let CD = 0; CD < DD; CD++) {
            const cD = 4 * (CD + BD * DD);
            QD[SD] = 255 * (0, ID.Clamp)((0, fD.c)(wD[cD])), QD[SD + 1] = 255 * (0, ID.Clamp)((0, fD.c)(wD[cD + 1])), QD[SD + 2] = 255 * (0, ID.Clamp)((0, fD.c)(wD[cD + 2])), tD.StoreLODInAlphaChannel ? QD[SD + 3] = bD : QD[SD + 3] = 255 * (0, ID.Clamp)((0, fD.c)(wD[cD + 3])), SD += 4
          }
        return QD
      }
      static _GetRGBAArrayBuffer(DD, CD, cD, ID, pD, iD, fD, bD, QD) {
        const wD = new Uint8Array(ID),
          SD = new Uint8Array(pD, cD);
        let BD = 0;
        for (let yD = 0; yD < CD; yD++)
          for (let CD = 0; CD < DD; CD++) {
            const cD = 4 * (CD + yD * DD);
            wD[BD] = SD[cD + iD], wD[BD + 1] = SD[cD + fD], wD[BD + 2] = SD[cD + bD], wD[BD + 3] = SD[cD + QD], BD += 4
          }
        return wD
      }
      static _ExtractLongWordOrder(DD) {
        return 0 === DD || 255 === DD || -16777216 === DD ? 0 : 1 + tD._ExtractLongWordOrder(DD >> 8)
      }
      static _GetRGBArrayBuffer(DD, CD, cD, ID, pD, iD, fD, bD) {
        const QD = new Uint8Array(ID),
          wD = new Uint8Array(pD, cD);
        let SD = 0;
        for (let BD = 0; BD < CD; BD++)
          for (let CD = 0; CD < DD; CD++) {
            const cD = 3 * (CD + BD * DD);
            QD[SD] = wD[cD + iD], QD[SD + 1] = wD[cD + fD], QD[SD + 2] = wD[cD + bD], SD += 3
          }
        return QD
      }
      static _GetLuminanceArrayBuffer(DD, CD, cD, ID, pD) {
        const iD = new Uint8Array(ID),
          fD = new Uint8Array(pD, cD);
        let bD = 0;
        for (let QD = 0; QD < CD; QD++)
          for (let CD = 0; CD < DD; CD++) {
            const cD = CD + QD * DD;
            iD[bD] = fD[cD], bD++
          }
        return iD
      }
      static UploadDDSLevels(DD, CD, cD, ID, fD, QD) {
        let wD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          ZD = arguments.length > 7 ? arguments[7] : void 0,
          oD = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          vD = null;
        ID.sphericalPolynomial && (vD = []);
        const ND = !!DD.getCaps().s3tc;
        CD.generateMipMaps = fD;
        const gD = new Int32Array(cD.buffer, cD.byteOffset, 31);
        let XD, mD, nD, OD, PD, HD, UD, xD = 0,
          qD = 0,
          JD = 1;
        if (542327876 !== gD[0]) return void pD.e.Error("Invalid magic number in DDS header");
        if (!ID.isFourCC && !ID.isRGB && !ID.isLuminance) return void pD.e.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (ID.isCompressed && !ND) return void pD.e.Error("Compressed textures are not supported on this platform.");
        let KD = gD[22];
        OD = gD[1] + 4;
        let aD = !1;
        if (ID.isFourCC) switch (XD = gD[21], XD) {
          case SD:
            JD = 8, qD = 33777;
            break;
          case BD:
            JD = 16, qD = 33778;
            break;
          case yD:
            JD = 16, qD = 33779;
            break;
          case 113:
            aD = !0, KD = 64;
            break;
          case 116:
            aD = !0, KD = 128;
            break;
          case MD: {
            OD += 20;
            let DD = !1;
            switch (ID.dxgiFormat) {
              case 10:
                aD = !0, KD = 64, DD = !0;
                break;
              case 2:
                aD = !0, KD = 128, DD = !0;
                break;
              case 88:
                ID.isRGB = !0, ID.isFourCC = !1, KD = 32, DD = !0
            }
            if (DD) break
          }
          default:
            return void pD.e.Error(["Unsupported FourCC code:", (VD = XD, String.fromCharCode(255 & VD, VD >> 8 & 255, VD >> 16 & 255, VD >> 24 & 255))])
        }
        var VD;
        const zD = tD._ExtractLongWordOrder(gD[23]),
          jD = tD._ExtractLongWordOrder(gD[24]),
          lD = tD._ExtractLongWordOrder(gD[25]),
          LD = tD._ExtractLongWordOrder(gD[26]);
        aD && (qD = DD._getRGBABufferInternalSizedFormat(ID.textureType)), HD = 1, gD[2] & bD && !1 !== fD && (HD = Math.max(1, gD[7]));
        const TD = ZD || 0,
          GD = DD.getCaps();
        for (let pD = TD; pD < QD; pD++) {
          for (mD = gD[4], nD = gD[3], UD = 0; UD < HD; ++UD) {
            if (-1 === wD || wD === UD) {
              const iD = -1 === wD ? UD : 0;
              if (!ID.isCompressed && ID.isFourCC) {
                CD.format = 5, xD = mD * nD * 4;
                let ID = null;
                if (DD._badOS || DD._badDesktopOS || !GD.textureHalfFloat && !GD.textureFloat) 128 === KD ? (ID = tD._GetFloatAsUIntRGBAArrayBuffer(mD, nD, cD.byteOffset + OD, xD, cD.buffer, iD), vD && 0 == iD && vD.push(tD._GetFloatRGBAArrayBuffer(mD, nD, cD.byteOffset + OD, xD, cD.buffer, iD))) : 64 === KD && (ID = tD._GetHalfFloatAsUIntRGBAArrayBuffer(mD, nD, cD.byteOffset + OD, xD, cD.buffer, iD), vD && 0 == iD && vD.push(tD._GetHalfFloatAsFloatRGBAArrayBuffer(mD, nD, cD.byteOffset + OD, xD, cD.buffer, iD))), CD.type = 0;
                else {
                  const DD = GD.textureFloat && (oD && GD.textureFloatLinearFiltering || !oD),
                    pD = GD.textureHalfFloat && (oD && GD.textureHalfFloatLinearFiltering || !oD),
                    fD = (128 === KD || 64 === KD && !pD) && DD ? 1 : (64 === KD || 128 === KD && !DD) && pD ? 2 : 0;
                  let bD, QD = null;
                  if (128 === KD) switch (fD) {
                    case 1:
                      bD = tD._GetFloatRGBAArrayBuffer, QD = null;
                      break;
                    case 2:
                      bD = tD._GetFloatAsHalfFloatRGBAArrayBuffer, QD = tD._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      bD = tD._GetFloatAsUIntRGBAArrayBuffer, QD = tD._GetFloatRGBAArrayBuffer
                  } else switch (fD) {
                    case 1:
                      bD = tD._GetHalfFloatAsFloatRGBAArrayBuffer, QD = null;
                      break;
                    case 2:
                      bD = tD._GetHalfFloatRGBAArrayBuffer, QD = tD._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      bD = tD._GetHalfFloatAsUIntRGBAArrayBuffer, QD = tD._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  CD.type = fD, ID = bD(mD, nD, cD.byteOffset + OD, xD, cD.buffer, iD), vD && 0 == iD && vD.push(QD ? QD(mD, nD, cD.byteOffset + OD, xD, cD.buffer, iD) : ID)
                }
                ID && DD._uploadDataToTextureDirectly(CD, ID, pD, iD)
              } else if (ID.isRGB) CD.type = 0, 24 === KD ? (CD.format = 4, xD = mD * nD * 3, PD = tD._GetRGBArrayBuffer(mD, nD, cD.byteOffset + OD, xD, cD.buffer, zD, jD, lD), DD._uploadDataToTextureDirectly(CD, PD, pD, iD)) : (CD.format = 5, xD = mD * nD * 4, PD = tD._GetRGBAArrayBuffer(mD, nD, cD.byteOffset + OD, xD, cD.buffer, zD, jD, lD, LD), DD._uploadDataToTextureDirectly(CD, PD, pD, iD));
              else if (ID.isLuminance) {
                const ID = DD._getUnpackAlignement(),
                  fD = mD;
                xD = Math.floor((mD + ID - 1) / ID) * ID * (nD - 1) + fD, PD = tD._GetLuminanceArrayBuffer(mD, nD, cD.byteOffset + OD, xD, cD.buffer), CD.format = 1, CD.type = 0, DD._uploadDataToTextureDirectly(CD, PD, pD, iD)
              } else xD = Math.max(4, mD) / 4 * Math.max(4, nD) / 4 * JD, PD = new Uint8Array(cD.buffer, cD.byteOffset + OD, xD), CD.type = 0, DD._uploadCompressedDataToTextureDirectly(CD, qD, mD, nD, PD, pD, iD)
            }
            OD += KD ? mD * nD * (KD / 8) : xD, mD *= .5, nD *= .5, mD = Math.max(1, mD), nD = Math.max(1, nD)
          }
          if (void 0 !== ZD) break
        }
        vD && vD.length > 0 ? ID.sphericalPolynomial = iD.e.ConvertCubeMapToSphericalPolynomial({
          size: gD[4],
          right: vD[0],
          left: vD[1],
          up: vD[2],
          down: vD[3],
          front: vD[4],
          back: vD[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : ID.sphericalPolynomial = void 0
      }
    }
    tD.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);