export const id = 277;
export const ids = [276, 277];
export const modules = {
  39623: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      _DDSTextureLoader: () => uF
    });
    var CF = SF(37960),
      AF = SF(39616);
    class uF {
      constructor() {
        this.supportCascades = !0
      }
      loadCubeData(FF, WF, SF, uF) {
        const hF = WF.sC();
        let bW, dF = !1,
          PF = 1e3;
        if (Array.isArray(FF))
          for (let CF = 0; CF < FF.length; CF++) {
            const SF = FF[CF];
            bW = AF.DDSTools.GetDDSInfo(SF), WF.width = bW.width, WF.height = bW.height, dF = (bW.isRGB || bW.isLuminance || bW.mipmapCount > 1) && WF.generateMipMaps, hF._unpackFlipY(bW.isCompressed), AF.DDSTools.UploadDDSLevels(hF, WF, SF, bW, dF, 6, -1, CF), bW.isFourCC || 1 !== bW.mipmapCount ? PF = bW.mipmapCount - 1 : hF.generateMipMapsForCubemap(WF)
          } else {
            const uF = FF;
            bW = AF.DDSTools.GetDDSInfo(uF), WF.width = bW.width, WF.height = bW.height, SF && (bW.sphericalPolynomial = new CF.g), dF = (bW.isRGB || bW.isLuminance || bW.mipmapCount > 1) && WF.generateMipMaps, hF._unpackFlipY(bW.isCompressed), AF.DDSTools.UploadDDSLevels(hF, WF, uF, bW, dF, 6), bW.isFourCC || 1 !== bW.mipmapCount ? PF = bW.mipmapCount - 1 : hF.generateMipMapsForCubemap(WF, !1)
          }
        hF._setCubeMapTextureParams(WF, dF, PF), WF.isReady = !0, WF.onLoadedObservable.notifyObservers(WF), WF.onLoadedObservable.clear(), uF && uF({
          isDDS: !0,
          width: WF.width,
          info: bW,
          data: FF,
          texture: WF
        })
      }
      loadData(FF, WF, SF) {
        const CF = AF.DDSTools.GetDDSInfo(FF),
          uF = (CF.isRGB || CF.isLuminance || CF.mipmapCount > 1) && WF.generateMipMaps && Math.max(CF.width, CF.height) >> CF.mipmapCount - 1 === 1;
        SF(CF.width, CF.height, uF, CF.isFourCC, (() => {
          AF.DDSTools.UploadDDSLevels(WF.sC(), WF, FF, CF, uF, 1)
        }))
      }
    }
  },
  39619: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => PF
    });
    var CF = SF(35623),
      AF = SF(35650),
      uF = SF(37960),
      hF = SF(35625),
      bW = SF(35678);
    class dF {
      constructor(FF, WF, SF, CF) {
        this.name = FF, this.worldAxisForNormal = WF, this.worldAxisForFileX = SF, this.worldAxisForFileY = CF
      }
    }
    class PF {
      static _NearestPow2Floor(FF) {
        return FF <= 1 ? 1 : 1 << Math.floor(Math.log2(FF))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(FF) {
        if (!FF.isCube) return null;
        FF.OWF()?.sC().flushFramebuffer();
        const WF = FF.getSize().width,
          SF = FF._sphericalPolynomialTargetSize,
          CF = SF > 0 ? this._NearestPow2Floor(SF) : 0,
          AF = !FF.noMipmap && !0 === FF._texture?.generateMipMaps,
          uF = CF > 0 && CF < WF && AF,
          hF = uF ? Math.max(0, Math.round(Math.log2(WF / CF))) : 0,
          bW = uF ? Math.max(1, Math.floor(WF / Math.pow(2, hF))) : WF,
          dF = FF.readPixels(0, hF, void 0, !1),
          PF = FF.readPixels(1, hF, void 0, !1);
        let RF, iW;
        FF.isRenderTarget ? (RF = FF.readPixels(3, hF, void 0, !1), iW = FF.readPixels(2, hF, void 0, !1)) : (RF = FF.readPixels(2, hF, void 0, !1), iW = FF.readPixels(3, hF, void 0, !1));
        const eF = FF.readPixels(4, hF, void 0, !1),
          EF = FF.readPixels(5, hF, void 0, !1),
          QF = FF.gammaSpace,
          rW = CF > 0 && CF < WF && !uF;
        return new Promise((FF => {
          Promise.all([PF, dF, RF, iW, eF, EF]).then((SF => {
            let [AF, uF, hF, dF, PF, RF] = SF, iW = bW;
            if (rW) {
              const FF = 4;
              AF = this._DownsampleFace(AF, WF, CF, FF), uF = this._DownsampleFace(uF, WF, CF, FF), hF = this._DownsampleFace(hF, WF, CF, FF), dF = this._DownsampleFace(dF, WF, CF, FF), PF = this._DownsampleFace(PF, WF, CF, FF), RF = this._DownsampleFace(RF, WF, CF, FF), iW = CF
            }
            const eF = {
              size: iW,
              right: uF,
              left: AF,
              up: hF,
              down: dF,
              front: PF,
              back: RF,
              format: 5,
              type: AF instanceof Float32Array ? 1 : 0,
              gammaSpace: QF
            };
            FF(this.ConvertCubeMapToSphericalPolynomial(eF))
          }))
        }))
      }
      static _AreaElement(FF, WF) {
        return Math.atan2(FF * WF, Math.sqrt(FF * FF + WF * WF + 1))
      }
      static _DownsampleFace(FF, WF, SF, CF) {
        const AF = FF instanceof Float32Array ? FF : Float32Array.from(FF),
          uF = SF * SF * CF,
          hF = new Float32Array(uF),
          bW = WF / SF,
          dF = 1 / (bW * bW);
        for (let RF = 0; RF < SF; RF++) {
          const FF = Math.floor(RF * bW),
            uF = Math.floor((RF + 1) * bW);
          for (let PF = 0; PF < SF; PF++) {
            const iW = Math.floor(PF * bW),
              eF = Math.floor((PF + 1) * bW),
              EF = (RF * SF + PF) * CF;
            for (let SF = 0; SF < CF; SF++) {
              let bW = 0;
              for (let hF = FF; hF < uF; hF++)
                for (let FF = iW; FF < eF; FF++) bW += AF[(hF * WF + FF) * CF + SF];
              hF[EF + SF] = bW * dF
            }
          }
        }
        if (FF instanceof Float32Array) return hF;
        const PF = new(0, FF.constructor)(uF);
        for (let RF = 0; RF < uF; RF++) PF[RF] = hF[RF] + .5 | 0;
        return PF
      }
      static ConvertCubeMapToSphericalPolynomial(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const SF = WF > 0 ? this._NearestPow2Floor(WF) : 0;
        if (SF > 0 && FF.size > SF) {
          const WF = 5 === FF.format ? 4 : 3,
            CF = ["right", "left", "up", "down", "front", "back"],
            AF = {};
          for (const uF of CF) AF[uF] = this._DownsampleFace(FF[uF], FF.size, SF, WF);
          FF = {
            ...FF,
            ...AF,
            size: SF
          }
        }
        const CF = new uF.d;
        let dF = 0;
        const PF = 2 / FF.size,
          RF = PF,
          iW = .5 * PF,
          eF = iW - 1;
        for (let uF = 0; uF < 6; uF++) {
          const WF = this._FileFaces[uF],
            SF = FF[WF.name];
          let EF = eF;
          const QF = 5 === FF.format ? 4 : 3;
          for (let uF = 0; uF < FF.size; uF++) {
            let rW = eF;
            for (let RF = 0; RF < FF.size; RF++) {
              const eF = WF.worldAxisForFileX.scale(rW).add(WF.worldAxisForFileY.scale(EF)).add(WF.worldAxisForNormal);
              eF.normalize();
              const gW = this._AreaElement(rW - iW, EF - iW) - this._AreaElement(rW - iW, EF + iW) - this._AreaElement(rW + iW, EF - iW) + this._AreaElement(rW + iW, EF + iW);
              let tW = SF[uF * FF.size * QF + RF * QF + 0],
                TF = SF[uF * FF.size * QF + RF * QF + 1],
                aW = SF[uF * FF.size * QF + RF * QF + 2];
              isNaN(tW) && (tW = 0), isNaN(TF) && (TF = 0), isNaN(aW) && (aW = 0), 0 === FF.type && (tW /= 255, TF /= 255, aW /= 255), FF.gammaSpace && (tW = Math.pow((0, AF.Clamp)(tW), hF.f), TF = Math.pow((0, AF.Clamp)(TF), hF.f), aW = Math.pow((0, AF.Clamp)(aW), hF.f));
              const kW = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const FF = Math.max(tW, TF, aW);
                if (FF > kW) {
                  const WF = kW / FF;
                  tW *= WF, TF *= WF, aW *= WF
                }
              } else tW = (0, AF.Clamp)(tW, 0, kW), TF = (0, AF.Clamp)(TF, 0, kW), aW = (0, AF.Clamp)(aW, 0, kW);
              const qW = new bW.e(tW, TF, aW);
              CF.addLight(eF, qW, gW), dF += gW, rW += PF
            }
            EF += RF
          }
        }
        const EF = 6 * (4 * Math.PI) / 6 / dF;
        return CF.scaleInPlace(EF), CF.convertIncidentRadianceToIrradiance(), CF.convertIrradianceToLambertianRadiance(), uF.g.FromHarmonics(CF)
      }
    }
    PF._FileFaces = [new dF("right", new CF.r(1, 0, 0), new CF.r(0, 0, -1), new CF.r(0, -1, 0)), new dF("left", new CF.r(-1, 0, 0), new CF.r(0, 0, 1), new CF.r(0, -1, 0)), new dF("up", new CF.r(0, 1, 0), new CF.r(1, 0, 0), new CF.r(0, 0, 1)), new dF("down", new CF.r(0, -1, 0), new CF.r(1, 0, 0), new CF.r(0, 0, -1)), new dF("front", new CF.r(0, 0, 1), new CF.r(1, 0, 0), new CF.r(0, -1, 0)), new dF("back", new CF.r(0, 0, -1), new CF.r(-1, 0, 0), new CF.r(0, -1, 0))], PF.MAX_HDRI_VALUE = 4096, PF.PRESERVE_CLAMPED_COLORS = !1
  },
  39616: (FF, WF, SF) => {
    SF.d(WF, {
      DDSTools: () => QF
    });
    var CF = SF(35650),
      AF = SF(37076),
      uF = SF(39619),
      hF = SF(38034);
    const bW = 131072,
      dF = 131072;

    function PF(FF) {
      return FF.charCodeAt(0) + (FF.charCodeAt(1) << 8) + (FF.charCodeAt(2) << 16) + (FF.charCodeAt(3) << 24)
    }
    const RF = PF("DXT1"),
      iW = PF("DXT3"),
      eF = PF("DXT5"),
      EF = PF("DX10");
    class QF {
      static GetDDSInfo(FF) {
        const WF = new Int32Array(FF.buffer, FF.byteOffset, 31),
          SF = new Int32Array(FF.buffer, FF.byteOffset, 35);
        let CF = 1;
        WF[2] & bW && (CF = Math.max(1, WF[7]));
        const AF = WF[21],
          uF = AF === EF ? SF[32] : 0;
        let hF = 0;
        switch (AF) {
          case 113:
            hF = 2;
            break;
          case 116:
            hF = 1;
            break;
          case EF:
            if (10 === uF) {
              hF = 2;
              break
            }
            if (2 === uF) {
              hF = 1;
              break
            }
        }
        return {
          width: WF[4],
          height: WF[3],
          mipmapCount: CF,
          isFourCC: 4 === (4 & WF[20]),
          isRGB: 64 === (64 & WF[20]),
          isLuminance: (WF[20] & dF) === dF,
          isCube: 512 === (512 & WF[28]),
          isCompressed: AF === RF || AF === iW || AF === eF,
          dxgiFormat: uF,
          textureType: hF
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(FF, WF, SF, CF, AF, uF) {
        const bW = new Float32Array(CF),
          dF = new Uint16Array(AF, SF);
        let PF = 0;
        for (let RF = 0; RF < WF; RF++)
          for (let WF = 0; WF < FF; WF++) {
            const SF = 4 * (WF + RF * FF);
            bW[PF] = (0, hF.e)(dF[SF]), bW[PF + 1] = (0, hF.e)(dF[SF + 1]), bW[PF + 2] = (0, hF.e)(dF[SF + 2]), QF.StoreLODInAlphaChannel ? bW[PF + 3] = uF : bW[PF + 3] = (0, hF.e)(dF[SF + 3]), PF += 4
          }
        return bW
      }
      static _GetHalfFloatRGBAArrayBuffer(FF, WF, SF, CF, AF, uF) {
        if (QF.StoreLODInAlphaChannel) {
          const bW = new Uint16Array(CF),
            dF = new Uint16Array(AF, SF);
          let PF = 0;
          for (let SF = 0; SF < WF; SF++)
            for (let WF = 0; WF < FF; WF++) {
              const CF = 4 * (WF + SF * FF);
              bW[PF] = dF[CF], bW[PF + 1] = dF[CF + 1], bW[PF + 2] = dF[CF + 2], bW[PF + 3] = (0, hF.h)(uF), PF += 4
            }
          return bW
        }
        return new Uint16Array(AF, SF, CF)
      }
      static _GetFloatRGBAArrayBuffer(FF, WF, SF, CF, AF, uF) {
        if (QF.StoreLODInAlphaChannel) {
          const hF = new Float32Array(CF),
            bW = new Float32Array(AF, SF);
          let dF = 0;
          for (let SF = 0; SF < WF; SF++)
            for (let WF = 0; WF < FF; WF++) {
              const CF = 4 * (WF + SF * FF);
              hF[dF] = bW[CF], hF[dF + 1] = bW[CF + 1], hF[dF + 2] = bW[CF + 2], hF[dF + 3] = uF, dF += 4
            }
          return hF
        }
        return new Float32Array(AF, SF, CF)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(FF, WF, SF, CF, AF, uF) {
        const bW = new Uint16Array(CF),
          dF = new Float32Array(AF, SF);
        let PF = 0;
        for (let RF = 0; RF < WF; RF++)
          for (let WF = 0; WF < FF; WF++) bW[PF] = (0, hF.h)(dF[PF]), bW[PF + 1] = (0, hF.h)(dF[PF + 1]), bW[PF + 2] = (0, hF.h)(dF[PF + 2]), QF.StoreLODInAlphaChannel ? bW[PF + 3] = (0, hF.h)(uF) : bW[PF + 3] = (0, hF.h)(dF[PF + 3]), PF += 4;
        return bW
      }
      static _GetFloatAsUIntRGBAArrayBuffer(FF, WF, SF, AF, uF, hF) {
        const bW = new Uint8Array(AF),
          dF = new Float32Array(uF, SF);
        let PF = 0;
        for (let RF = 0; RF < WF; RF++)
          for (let WF = 0; WF < FF; WF++) {
            const SF = 4 * (WF + RF * FF);
            bW[PF] = 255 * (0, CF.Clamp)(dF[SF]), bW[PF + 1] = 255 * (0, CF.Clamp)(dF[SF + 1]), bW[PF + 2] = 255 * (0, CF.Clamp)(dF[SF + 2]), QF.StoreLODInAlphaChannel ? bW[PF + 3] = hF : bW[PF + 3] = 255 * (0, CF.Clamp)(dF[SF + 3]), PF += 4
          }
        return bW
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(FF, WF, SF, AF, uF, bW) {
        const dF = new Uint8Array(AF),
          PF = new Uint16Array(uF, SF);
        let RF = 0;
        for (let iW = 0; iW < WF; iW++)
          for (let WF = 0; WF < FF; WF++) {
            const SF = 4 * (WF + iW * FF);
            dF[RF] = 255 * (0, CF.Clamp)((0, hF.e)(PF[SF])), dF[RF + 1] = 255 * (0, CF.Clamp)((0, hF.e)(PF[SF + 1])), dF[RF + 2] = 255 * (0, CF.Clamp)((0, hF.e)(PF[SF + 2])), QF.StoreLODInAlphaChannel ? dF[RF + 3] = bW : dF[RF + 3] = 255 * (0, CF.Clamp)((0, hF.e)(PF[SF + 3])), RF += 4
          }
        return dF
      }
      static _GetRGBAArrayBuffer(FF, WF, SF, CF, AF, uF, hF, bW, dF) {
        const PF = new Uint8Array(CF),
          RF = new Uint8Array(AF, SF);
        let iW = 0;
        for (let eF = 0; eF < WF; eF++)
          for (let WF = 0; WF < FF; WF++) {
            const SF = 4 * (WF + eF * FF);
            PF[iW] = RF[SF + uF], PF[iW + 1] = RF[SF + hF], PF[iW + 2] = RF[SF + bW], PF[iW + 3] = RF[SF + dF], iW += 4
          }
        return PF
      }
      static _ExtractLongWordOrder(FF) {
        return 0 === FF || 255 === FF || -16777216 === FF ? 0 : 1 + QF._ExtractLongWordOrder(FF >> 8)
      }
      static _GetRGBArrayBuffer(FF, WF, SF, CF, AF, uF, hF, bW) {
        const dF = new Uint8Array(CF),
          PF = new Uint8Array(AF, SF);
        let RF = 0;
        for (let iW = 0; iW < WF; iW++)
          for (let WF = 0; WF < FF; WF++) {
            const SF = 3 * (WF + iW * FF);
            dF[RF] = PF[SF + uF], dF[RF + 1] = PF[SF + hF], dF[RF + 2] = PF[SF + bW], RF += 3
          }
        return dF
      }
      static _GetLuminanceArrayBuffer(FF, WF, SF, CF, AF) {
        const uF = new Uint8Array(CF),
          hF = new Uint8Array(AF, SF);
        let bW = 0;
        for (let dF = 0; dF < WF; dF++)
          for (let WF = 0; WF < FF; WF++) {
            const SF = WF + dF * FF;
            uF[bW] = hF[SF], bW++
          }
        return uF
      }
      static UploadDDSLevels(FF, WF, SF, CF, hF, dF) {
        let PF = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          rW = arguments.length > 7 ? arguments[7] : void 0,
          gW = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          tW = null;
        CF.sphericalPolynomial && (tW = []);
        const TF = !!FF.getCaps().s3tc;
        WF.generateMipMaps = hF;
        const aW = new Int32Array(SF.buffer, SF.byteOffset, 31);
        let kW, qW, VF, NF, DF, LF, mW, OF = 0,
          xW = 0,
          ZF = 1;
        if (542327876 !== aW[0]) return void AF.b.Error("Invalid magic number in DDS header");
        if (!CF.isFourCC && !CF.isRGB && !CF.isLuminance) return void AF.b.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (CF.isCompressed && !TF) return void AF.b.Error("Compressed textures are not supported on this platform.");
        let oF = aW[22];
        NF = aW[1] + 4;
        let YF = !1;
        if (CF.isFourCC) switch (kW = aW[21], kW) {
          case RF:
            ZF = 8, xW = 33777;
            break;
          case iW:
            ZF = 16, xW = 33778;
            break;
          case eF:
            ZF = 16, xW = 33779;
            break;
          case 113:
            YF = !0, oF = 64;
            break;
          case 116:
            YF = !0, oF = 128;
            break;
          case EF: {
            NF += 20;
            let FF = !1;
            switch (CF.dxgiFormat) {
              case 10:
                YF = !0, oF = 64, FF = !0;
                break;
              case 2:
                YF = !0, oF = 128, FF = !0;
                break;
              case 88:
                CF.isRGB = !0, CF.isFourCC = !1, oF = 32, FF = !0
            }
            if (FF) break
          }
          default:
            return void AF.b.Error(["Unsupported FourCC code:", (MF = kW, String.fromCharCode(255 & MF, MF >> 8 & 255, MF >> 16 & 255, MF >> 24 & 255))])
        }
        var MF;
        const cW = QF._ExtractLongWordOrder(aW[23]),
          GF = QF._ExtractLongWordOrder(aW[24]),
          zW = QF._ExtractLongWordOrder(aW[25]),
          IF = QF._ExtractLongWordOrder(aW[26]);
        YF && (xW = FF._getRGBABufferInternalSizedFormat(CF.textureType)), LF = 1, aW[2] & bW && !1 !== hF && (LF = Math.max(1, aW[7]));
        const fF = rW || 0,
          yW = FF.getCaps();
        for (let AF = fF; AF < dF; AF++) {
          for (qW = aW[4], VF = aW[3], mW = 0; mW < LF; ++mW) {
            if (-1 === PF || PF === mW) {
              const uF = -1 === PF ? mW : 0;
              if (!CF.isCompressed && CF.isFourCC) {
                WF.format = 5, OF = qW * VF * 4;
                let CF = null;
                if (FF._badOS || FF._badDesktopOS || !yW.textureHalfFloat && !yW.textureFloat) 128 === oF ? (CF = QF._GetFloatAsUIntRGBAArrayBuffer(qW, VF, SF.byteOffset + NF, OF, SF.buffer, uF), tW && 0 == uF && tW.push(QF._GetFloatRGBAArrayBuffer(qW, VF, SF.byteOffset + NF, OF, SF.buffer, uF))) : 64 === oF && (CF = QF._GetHalfFloatAsUIntRGBAArrayBuffer(qW, VF, SF.byteOffset + NF, OF, SF.buffer, uF), tW && 0 == uF && tW.push(QF._GetHalfFloatAsFloatRGBAArrayBuffer(qW, VF, SF.byteOffset + NF, OF, SF.buffer, uF))), WF.type = 0;
                else {
                  const FF = yW.textureFloat && (gW && yW.textureFloatLinearFiltering || !gW),
                    AF = yW.textureHalfFloat && (gW && yW.textureHalfFloatLinearFiltering || !gW),
                    hF = (128 === oF || 64 === oF && !AF) && FF ? 1 : (64 === oF || 128 === oF && !FF) && AF ? 2 : 0;
                  let bW, dF = null;
                  if (128 === oF) switch (hF) {
                    case 1:
                      bW = QF._GetFloatRGBAArrayBuffer, dF = null;
                      break;
                    case 2:
                      bW = QF._GetFloatAsHalfFloatRGBAArrayBuffer, dF = QF._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      bW = QF._GetFloatAsUIntRGBAArrayBuffer, dF = QF._GetFloatRGBAArrayBuffer
                  } else switch (hF) {
                    case 1:
                      bW = QF._GetHalfFloatAsFloatRGBAArrayBuffer, dF = null;
                      break;
                    case 2:
                      bW = QF._GetHalfFloatRGBAArrayBuffer, dF = QF._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      bW = QF._GetHalfFloatAsUIntRGBAArrayBuffer, dF = QF._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  WF.type = hF, CF = bW(qW, VF, SF.byteOffset + NF, OF, SF.buffer, uF), tW && 0 == uF && tW.push(dF ? dF(qW, VF, SF.byteOffset + NF, OF, SF.buffer, uF) : CF)
                }
                CF && FF._uploadDataToTextureDirectly(WF, CF, AF, uF)
              } else if (CF.isRGB) WF.type = 0, 24 === oF ? (WF.format = 4, OF = qW * VF * 3, DF = QF._GetRGBArrayBuffer(qW, VF, SF.byteOffset + NF, OF, SF.buffer, cW, GF, zW), FF._uploadDataToTextureDirectly(WF, DF, AF, uF)) : (WF.format = 5, OF = qW * VF * 4, DF = QF._GetRGBAArrayBuffer(qW, VF, SF.byteOffset + NF, OF, SF.buffer, cW, GF, zW, IF), FF._uploadDataToTextureDirectly(WF, DF, AF, uF));
              else if (CF.isLuminance) {
                const CF = FF._getUnpackAlignement(),
                  hF = qW;
                OF = Math.floor((qW + CF - 1) / CF) * CF * (VF - 1) + hF, DF = QF._GetLuminanceArrayBuffer(qW, VF, SF.byteOffset + NF, OF, SF.buffer), WF.format = 1, WF.type = 0, FF._uploadDataToTextureDirectly(WF, DF, AF, uF)
              } else OF = Math.max(4, qW) / 4 * Math.max(4, VF) / 4 * ZF, DF = new Uint8Array(SF.buffer, SF.byteOffset + NF, OF), WF.type = 0, FF._uploadCompressedDataToTextureDirectly(WF, xW, qW, VF, DF, AF, uF)
            }
            NF += oF ? qW * VF * (oF / 8) : OF, qW *= .5, VF *= .5, qW = Math.max(1, qW), VF = Math.max(1, VF)
          }
          if (void 0 !== rW) break
        }
        tW && tW.length > 0 ? CF.sphericalPolynomial = uF.c.ConvertCubeMapToSphericalPolynomial({
          size: aW[4],
          right: tW[0],
          left: tW[1],
          up: tW[2],
          down: tW[3],
          front: tW[4],
          back: tW[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : CF.sphericalPolynomial = void 0
      }
    }
    QF.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);