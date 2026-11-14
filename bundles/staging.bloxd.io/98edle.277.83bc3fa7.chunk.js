export const id = 277;
export const ids = [276, 277];
export const modules = {
  39229: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      _DDSTextureLoader: () => zR
    });
    var wW = MW(37574),
      CW = MW(39220);
    class zR {
      constructor() {
        this.supportCascades = !0
      }
      loadCubeData(WW, RW, MW, zR) {
        const AW = RW.mC();
        let bR, yR = !1,
          NW = 1e3;
        if (Array.isArray(WW))
          for (let wW = 0; wW < WW.length; wW++) {
            const MW = WW[wW];
            bR = CW.DDSTools.GetDDSInfo(MW), RW.width = bR.width, RW.height = bR.height, yR = (bR.isRGB || bR.isLuminance || bR.mipmapCount > 1) && RW.generateMipMaps, AW._unpackFlipY(bR.isCompressed), CW.DDSTools.UploadDDSLevels(AW, RW, MW, bR, yR, 6, -1, wW), bR.isFourCC || 1 !== bR.mipmapCount ? NW = bR.mipmapCount - 1 : AW.generateMipMapsForCubemap(RW)
          } else {
            const zR = WW;
            bR = CW.DDSTools.GetDDSInfo(zR), RW.width = bR.width, RW.height = bR.height, MW && (bR.sphericalPolynomial = new wW.d), yR = (bR.isRGB || bR.isLuminance || bR.mipmapCount > 1) && RW.generateMipMaps, AW._unpackFlipY(bR.isCompressed), CW.DDSTools.UploadDDSLevels(AW, RW, zR, bR, yR, 6), bR.isFourCC || 1 !== bR.mipmapCount ? NW = bR.mipmapCount - 1 : AW.generateMipMapsForCubemap(RW, !1)
          }
        AW._setCubeMapTextureParams(RW, yR, NW), RW.isReady = !0, RW.onLoadedObservable.notifyObservers(RW), RW.onLoadedObservable.clear(), zR && zR({
          isDDS: !0,
          width: RW.width,
          info: bR,
          data: WW,
          texture: RW
        })
      }
      loadData(WW, RW, MW) {
        const wW = CW.DDSTools.GetDDSInfo(WW),
          zR = (wW.isRGB || wW.isLuminance || wW.mipmapCount > 1) && RW.generateMipMaps && Math.max(wW.width, wW.height) >> wW.mipmapCount - 1 === 1;
        MW(wW.width, wW.height, zR, wW.isFourCC, (() => {
          CW.DDSTools.UploadDDSLevels(RW.mC(), RW, WW, wW, zR, 1)
        }))
      }
    }
  },
  39222: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => NW
    });
    var wW = MW(35324),
      CW = MW(35353),
      zR = MW(37574),
      AW = MW(35328),
      bR = MW(35376);
    class yR {
      constructor(WW, RW, MW, wW) {
        this.name = WW, this.worldAxisForNormal = RW, this.worldAxisForFileX = MW, this.worldAxisForFileY = wW
      }
    }
    class NW {
      static _NearestPow2Floor(WW) {
        return WW <= 1 ? 1 : 1 << Math.floor(Math.log2(WW))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(WW) {
        if (!WW.isCube) return null;
        WW.QRW()?.mC().flushFramebuffer();
        const RW = WW.getSize().width,
          MW = WW._sphericalPolynomialTargetSize,
          wW = MW > 0 ? this._NearestPow2Floor(MW) : 0,
          CW = !WW.noMipmap && !0 === WW._texture?.generateMipMaps,
          zR = wW > 0 && wW < RW && CW,
          AW = zR ? Math.max(0, Math.round(Math.log2(RW / wW))) : 0,
          bR = zR ? Math.max(1, Math.floor(RW / Math.pow(2, AW))) : RW,
          yR = WW.readPixels(0, AW, void 0, !1),
          NW = WW.readPixels(1, AW, void 0, !1);
        let eW, BW;
        WW.isRenderTarget ? (eW = WW.readPixels(3, AW, void 0, !1), BW = WW.readPixels(2, AW, void 0, !1)) : (eW = WW.readPixels(2, AW, void 0, !1), BW = WW.readPixels(3, AW, void 0, !1));
        const tR = WW.readPixels(4, AW, void 0, !1),
          TW = WW.readPixels(5, AW, void 0, !1),
          gR = WW.gammaSpace,
          iR = wW > 0 && wW < RW && !zR;
        return new Promise((WW => {
          Promise.all([NW, yR, eW, BW, tR, TW]).then((MW => {
            let [CW, zR, AW, yR, NW, eW] = MW, BW = bR;
            if (iR) {
              const WW = 4;
              CW = this._DownsampleFace(CW, RW, wW, WW), zR = this._DownsampleFace(zR, RW, wW, WW), AW = this._DownsampleFace(AW, RW, wW, WW), yR = this._DownsampleFace(yR, RW, wW, WW), NW = this._DownsampleFace(NW, RW, wW, WW), eW = this._DownsampleFace(eW, RW, wW, WW), BW = wW
            }
            const tR = {
              size: BW,
              right: zR,
              left: CW,
              up: AW,
              down: yR,
              front: NW,
              back: eW,
              format: 5,
              type: CW instanceof Float32Array ? 1 : 0,
              gammaSpace: gR
            };
            WW(this.ConvertCubeMapToSphericalPolynomial(tR))
          }))
        }))
      }
      static _AreaElement(WW, RW) {
        return Math.atan2(WW * RW, Math.sqrt(WW * WW + RW * RW + 1))
      }
      static _DownsampleFace(WW, RW, MW, wW) {
        const CW = WW instanceof Float32Array ? WW : Float32Array.from(WW),
          zR = MW * MW * wW,
          AW = new Float32Array(zR),
          bR = RW / MW,
          yR = 1 / (bR * bR);
        for (let eW = 0; eW < MW; eW++) {
          const WW = Math.floor(eW * bR),
            zR = Math.floor((eW + 1) * bR);
          for (let NW = 0; NW < MW; NW++) {
            const BW = Math.floor(NW * bR),
              tR = Math.floor((NW + 1) * bR),
              TW = (eW * MW + NW) * wW;
            for (let MW = 0; MW < wW; MW++) {
              let bR = 0;
              for (let AW = WW; AW < zR; AW++)
                for (let WW = BW; WW < tR; WW++) bR += CW[(AW * RW + WW) * wW + MW];
              AW[TW + MW] = bR * yR
            }
          }
        }
        if (WW instanceof Float32Array) return AW;
        const NW = new(0, WW.constructor)(zR);
        for (let eW = 0; eW < zR; eW++) NW[eW] = AW[eW] + .5 | 0;
        return NW
      }
      static ConvertCubeMapToSphericalPolynomial(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const MW = RW > 0 ? this._NearestPow2Floor(RW) : 0;
        if (MW > 0 && WW.size > MW) {
          const RW = 5 === WW.format ? 4 : 3,
            wW = ["right", "left", "up", "down", "front", "back"],
            CW = {};
          for (const zR of wW) CW[zR] = this._DownsampleFace(WW[zR], WW.size, MW, RW);
          WW = {
            ...WW,
            ...CW,
            size: MW
          }
        }
        const wW = new zR.c;
        let yR = 0;
        const NW = 2 / WW.size,
          eW = NW,
          BW = .5 * NW,
          tR = BW - 1;
        for (let zR = 0; zR < 6; zR++) {
          const RW = this._FileFaces[zR],
            MW = WW[RW.name];
          let TW = tR;
          const gR = 5 === WW.format ? 4 : 3;
          for (let zR = 0; zR < WW.size; zR++) {
            let iR = tR;
            for (let eW = 0; eW < WW.size; eW++) {
              const tR = RW.worldAxisForFileX.scale(iR).add(RW.worldAxisForFileY.scale(TW)).add(RW.worldAxisForNormal);
              tR.normalize();
              const YW = this._AreaElement(iR - BW, TW - BW) - this._AreaElement(iR - BW, TW + BW) - this._AreaElement(iR + BW, TW - BW) + this._AreaElement(iR + BW, TW + BW);
              let JW = MW[zR * WW.size * gR + eW * gR + 0],
                PW = MW[zR * WW.size * gR + eW * gR + 1],
                IW = MW[zR * WW.size * gR + eW * gR + 2];
              isNaN(JW) && (JW = 0), isNaN(PW) && (PW = 0), isNaN(IW) && (IW = 0), 0 === WW.type && (JW /= 255, PW /= 255, IW /= 255), WW.gammaSpace && (JW = Math.pow((0, CW.Clamp)(JW), AW.k), PW = Math.pow((0, CW.Clamp)(PW), AW.k), IW = Math.pow((0, CW.Clamp)(IW), AW.k));
              const oW = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const WW = Math.max(JW, PW, IW);
                if (WW > oW) {
                  const RW = oW / WW;
                  JW *= RW, PW *= RW, IW *= RW
                }
              } else JW = (0, CW.Clamp)(JW, 0, oW), PW = (0, CW.Clamp)(PW, 0, oW), IW = (0, CW.Clamp)(IW, 0, oW);
              const lW = new bR.d(JW, PW, IW);
              wW.addLight(tR, lW, YW), yR += YW, iR += NW
            }
            TW += eW
          }
        }
        const TW = 6 * (4 * Math.PI) / 6 / yR;
        return wW.scaleInPlace(TW), wW.convertIncidentRadianceToIrradiance(), wW.convertIrradianceToLambertianRadiance(), zR.d.FromHarmonics(wW)
      }
    }
    NW._FileFaces = [new yR("right", new wW.q(1, 0, 0), new wW.q(0, 0, -1), new wW.q(0, -1, 0)), new yR("left", new wW.q(-1, 0, 0), new wW.q(0, 0, 1), new wW.q(0, -1, 0)), new yR("up", new wW.q(0, 1, 0), new wW.q(1, 0, 0), new wW.q(0, 0, 1)), new yR("down", new wW.q(0, -1, 0), new wW.q(1, 0, 0), new wW.q(0, 0, -1)), new yR("front", new wW.q(0, 0, 1), new wW.q(1, 0, 0), new wW.q(0, -1, 0)), new yR("back", new wW.q(0, 0, -1), new wW.q(-1, 0, 0), new wW.q(0, -1, 0))], NW.MAX_HDRI_VALUE = 4096, NW.PRESERVE_CLAMPED_COLORS = !1
  },
  39220: (WW, RW, MW) => {
    MW.d(RW, {
      DDSTools: () => gR
    });
    var wW = MW(35353),
      CW = MW(36721),
      zR = MW(39222),
      AW = MW(37659);
    const bR = 131072,
      yR = 131072;

    function NW(WW) {
      return WW.charCodeAt(0) + (WW.charCodeAt(1) << 8) + (WW.charCodeAt(2) << 16) + (WW.charCodeAt(3) << 24)
    }
    const eW = NW("DXT1"),
      BW = NW("DXT3"),
      tR = NW("DXT5"),
      TW = NW("DX10");
    class gR {
      static GetDDSInfo(WW) {
        const RW = new Int32Array(WW.buffer, WW.byteOffset, 31),
          MW = new Int32Array(WW.buffer, WW.byteOffset, 35);
        let wW = 1;
        RW[2] & bR && (wW = Math.max(1, RW[7]));
        const CW = RW[21],
          zR = CW === TW ? MW[32] : 0;
        let AW = 0;
        switch (CW) {
          case 113:
            AW = 2;
            break;
          case 116:
            AW = 1;
            break;
          case TW:
            if (10 === zR) {
              AW = 2;
              break
            }
            if (2 === zR) {
              AW = 1;
              break
            }
        }
        return {
          width: RW[4],
          height: RW[3],
          mipmapCount: wW,
          isFourCC: 4 === (4 & RW[20]),
          isRGB: 64 === (64 & RW[20]),
          isLuminance: (RW[20] & yR) === yR,
          isCube: 512 === (512 & RW[28]),
          isCompressed: CW === eW || CW === BW || CW === tR,
          dxgiFormat: zR,
          textureType: AW
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(WW, RW, MW, wW, CW, zR) {
        const bR = new Float32Array(wW),
          yR = new Uint16Array(CW, MW);
        let NW = 0;
        for (let eW = 0; eW < RW; eW++)
          for (let RW = 0; RW < WW; RW++) {
            const MW = 4 * (RW + eW * WW);
            bR[NW] = (0, AW.e)(yR[MW]), bR[NW + 1] = (0, AW.e)(yR[MW + 1]), bR[NW + 2] = (0, AW.e)(yR[MW + 2]), gR.StoreLODInAlphaChannel ? bR[NW + 3] = zR : bR[NW + 3] = (0, AW.e)(yR[MW + 3]), NW += 4
          }
        return bR
      }
      static _GetHalfFloatRGBAArrayBuffer(WW, RW, MW, wW, CW, zR) {
        if (gR.StoreLODInAlphaChannel) {
          const bR = new Uint16Array(wW),
            yR = new Uint16Array(CW, MW);
          let NW = 0;
          for (let MW = 0; MW < RW; MW++)
            for (let RW = 0; RW < WW; RW++) {
              const wW = 4 * (RW + MW * WW);
              bR[NW] = yR[wW], bR[NW + 1] = yR[wW + 1], bR[NW + 2] = yR[wW + 2], bR[NW + 3] = (0, AW.j)(zR), NW += 4
            }
          return bR
        }
        return new Uint16Array(CW, MW, wW)
      }
      static _GetFloatRGBAArrayBuffer(WW, RW, MW, wW, CW, zR) {
        if (gR.StoreLODInAlphaChannel) {
          const AW = new Float32Array(wW),
            bR = new Float32Array(CW, MW);
          let yR = 0;
          for (let MW = 0; MW < RW; MW++)
            for (let RW = 0; RW < WW; RW++) {
              const wW = 4 * (RW + MW * WW);
              AW[yR] = bR[wW], AW[yR + 1] = bR[wW + 1], AW[yR + 2] = bR[wW + 2], AW[yR + 3] = zR, yR += 4
            }
          return AW
        }
        return new Float32Array(CW, MW, wW)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(WW, RW, MW, wW, CW, zR) {
        const bR = new Uint16Array(wW),
          yR = new Float32Array(CW, MW);
        let NW = 0;
        for (let eW = 0; eW < RW; eW++)
          for (let RW = 0; RW < WW; RW++) bR[NW] = (0, AW.j)(yR[NW]), bR[NW + 1] = (0, AW.j)(yR[NW + 1]), bR[NW + 2] = (0, AW.j)(yR[NW + 2]), gR.StoreLODInAlphaChannel ? bR[NW + 3] = (0, AW.j)(zR) : bR[NW + 3] = (0, AW.j)(yR[NW + 3]), NW += 4;
        return bR
      }
      static _GetFloatAsUIntRGBAArrayBuffer(WW, RW, MW, CW, zR, AW) {
        const bR = new Uint8Array(CW),
          yR = new Float32Array(zR, MW);
        let NW = 0;
        for (let eW = 0; eW < RW; eW++)
          for (let RW = 0; RW < WW; RW++) {
            const MW = 4 * (RW + eW * WW);
            bR[NW] = 255 * (0, wW.Clamp)(yR[MW]), bR[NW + 1] = 255 * (0, wW.Clamp)(yR[MW + 1]), bR[NW + 2] = 255 * (0, wW.Clamp)(yR[MW + 2]), gR.StoreLODInAlphaChannel ? bR[NW + 3] = AW : bR[NW + 3] = 255 * (0, wW.Clamp)(yR[MW + 3]), NW += 4
          }
        return bR
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(WW, RW, MW, CW, zR, bR) {
        const yR = new Uint8Array(CW),
          NW = new Uint16Array(zR, MW);
        let eW = 0;
        for (let BW = 0; BW < RW; BW++)
          for (let RW = 0; RW < WW; RW++) {
            const MW = 4 * (RW + BW * WW);
            yR[eW] = 255 * (0, wW.Clamp)((0, AW.e)(NW[MW])), yR[eW + 1] = 255 * (0, wW.Clamp)((0, AW.e)(NW[MW + 1])), yR[eW + 2] = 255 * (0, wW.Clamp)((0, AW.e)(NW[MW + 2])), gR.StoreLODInAlphaChannel ? yR[eW + 3] = bR : yR[eW + 3] = 255 * (0, wW.Clamp)((0, AW.e)(NW[MW + 3])), eW += 4
          }
        return yR
      }
      static _GetRGBAArrayBuffer(WW, RW, MW, wW, CW, zR, AW, bR, yR) {
        const NW = new Uint8Array(wW),
          eW = new Uint8Array(CW, MW);
        let BW = 0;
        for (let tR = 0; tR < RW; tR++)
          for (let RW = 0; RW < WW; RW++) {
            const MW = 4 * (RW + tR * WW);
            NW[BW] = eW[MW + zR], NW[BW + 1] = eW[MW + AW], NW[BW + 2] = eW[MW + bR], NW[BW + 3] = eW[MW + yR], BW += 4
          }
        return NW
      }
      static _ExtractLongWordOrder(WW) {
        return 0 === WW || 255 === WW || -16777216 === WW ? 0 : 1 + gR._ExtractLongWordOrder(WW >> 8)
      }
      static _GetRGBArrayBuffer(WW, RW, MW, wW, CW, zR, AW, bR) {
        const yR = new Uint8Array(wW),
          NW = new Uint8Array(CW, MW);
        let eW = 0;
        for (let BW = 0; BW < RW; BW++)
          for (let RW = 0; RW < WW; RW++) {
            const MW = 3 * (RW + BW * WW);
            yR[eW] = NW[MW + zR], yR[eW + 1] = NW[MW + AW], yR[eW + 2] = NW[MW + bR], eW += 3
          }
        return yR
      }
      static _GetLuminanceArrayBuffer(WW, RW, MW, wW, CW) {
        const zR = new Uint8Array(wW),
          AW = new Uint8Array(CW, MW);
        let bR = 0;
        for (let yR = 0; yR < RW; yR++)
          for (let RW = 0; RW < WW; RW++) {
            const MW = RW + yR * WW;
            zR[bR] = AW[MW], bR++
          }
        return zR
      }
      static UploadDDSLevels(WW, RW, MW, wW, AW, yR) {
        let NW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          iR = arguments.length > 7 ? arguments[7] : void 0,
          YW = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          JW = null;
        wW.sphericalPolynomial && (JW = []);
        const PW = !!WW.getCaps().s3tc;
        RW.generateMipMaps = AW;
        const IW = new Int32Array(MW.buffer, MW.byteOffset, 31);
        let oW, lW, FW, fW, QW, rR, cR, XW = 0,
          jR = 0,
          kR = 1;
        if (542327876 !== IW[0]) return void CW.b.Error("Invalid magic number in DDS header");
        if (!wW.isFourCC && !wW.isRGB && !wW.isLuminance) return void CW.b.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (wW.isCompressed && !PW) return void CW.b.Error("Compressed textures are not supported on this platform.");
        let aR = IW[22];
        fW = IW[1] + 4;
        let sW = !1;
        if (wW.isFourCC) switch (oW = IW[21], oW) {
          case eW:
            kR = 8, jR = 33777;
            break;
          case BW:
            kR = 16, jR = 33778;
            break;
          case tR:
            kR = 16, jR = 33779;
            break;
          case 113:
            sW = !0, aR = 64;
            break;
          case 116:
            sW = !0, aR = 128;
            break;
          case TW: {
            fW += 20;
            let WW = !1;
            switch (wW.dxgiFormat) {
              case 10:
                sW = !0, aR = 64, WW = !0;
                break;
              case 2:
                sW = !0, aR = 128, WW = !0;
                break;
              case 88:
                wW.isRGB = !0, wW.isFourCC = !1, aR = 32, WW = !0
            }
            if (WW) break
          }
          default:
            return void CW.b.Error(["Unsupported FourCC code:", (dW = oW, String.fromCharCode(255 & dW, dW >> 8 & 255, dW >> 16 & 255, dW >> 24 & 255))])
        }
        var dW;
        const pW = gR._ExtractLongWordOrder(IW[23]),
          hW = gR._ExtractLongWordOrder(IW[24]),
          UW = gR._ExtractLongWordOrder(IW[25]),
          EW = gR._ExtractLongWordOrder(IW[26]);
        sW && (jR = WW._getRGBABufferInternalSizedFormat(wW.textureType)), rR = 1, IW[2] & bR && !1 !== AW && (rR = Math.max(1, IW[7]));
        const VW = iR || 0,
          mR = WW.getCaps();
        for (let CW = VW; CW < yR; CW++) {
          for (lW = IW[4], FW = IW[3], cR = 0; cR < rR; ++cR) {
            if (-1 === NW || NW === cR) {
              const zR = -1 === NW ? cR : 0;
              if (!wW.isCompressed && wW.isFourCC) {
                RW.format = 5, XW = lW * FW * 4;
                let wW = null;
                if (WW._badOS || WW._badDesktopOS || !mR.textureHalfFloat && !mR.textureFloat) 128 === aR ? (wW = gR._GetFloatAsUIntRGBAArrayBuffer(lW, FW, MW.byteOffset + fW, XW, MW.buffer, zR), JW && 0 == zR && JW.push(gR._GetFloatRGBAArrayBuffer(lW, FW, MW.byteOffset + fW, XW, MW.buffer, zR))) : 64 === aR && (wW = gR._GetHalfFloatAsUIntRGBAArrayBuffer(lW, FW, MW.byteOffset + fW, XW, MW.buffer, zR), JW && 0 == zR && JW.push(gR._GetHalfFloatAsFloatRGBAArrayBuffer(lW, FW, MW.byteOffset + fW, XW, MW.buffer, zR))), RW.type = 0;
                else {
                  const WW = mR.textureFloat && (YW && mR.textureFloatLinearFiltering || !YW),
                    CW = mR.textureHalfFloat && (YW && mR.textureHalfFloatLinearFiltering || !YW),
                    AW = (128 === aR || 64 === aR && !CW) && WW ? 1 : (64 === aR || 128 === aR && !WW) && CW ? 2 : 0;
                  let bR, yR = null;
                  if (128 === aR) switch (AW) {
                    case 1:
                      bR = gR._GetFloatRGBAArrayBuffer, yR = null;
                      break;
                    case 2:
                      bR = gR._GetFloatAsHalfFloatRGBAArrayBuffer, yR = gR._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      bR = gR._GetFloatAsUIntRGBAArrayBuffer, yR = gR._GetFloatRGBAArrayBuffer
                  } else switch (AW) {
                    case 1:
                      bR = gR._GetHalfFloatAsFloatRGBAArrayBuffer, yR = null;
                      break;
                    case 2:
                      bR = gR._GetHalfFloatRGBAArrayBuffer, yR = gR._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      bR = gR._GetHalfFloatAsUIntRGBAArrayBuffer, yR = gR._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  RW.type = AW, wW = bR(lW, FW, MW.byteOffset + fW, XW, MW.buffer, zR), JW && 0 == zR && JW.push(yR ? yR(lW, FW, MW.byteOffset + fW, XW, MW.buffer, zR) : wW)
                }
                wW && WW._uploadDataToTextureDirectly(RW, wW, CW, zR)
              } else if (wW.isRGB) RW.type = 0, 24 === aR ? (RW.format = 4, XW = lW * FW * 3, QW = gR._GetRGBArrayBuffer(lW, FW, MW.byteOffset + fW, XW, MW.buffer, pW, hW, UW), WW._uploadDataToTextureDirectly(RW, QW, CW, zR)) : (RW.format = 5, XW = lW * FW * 4, QW = gR._GetRGBAArrayBuffer(lW, FW, MW.byteOffset + fW, XW, MW.buffer, pW, hW, UW, EW), WW._uploadDataToTextureDirectly(RW, QW, CW, zR));
              else if (wW.isLuminance) {
                const wW = WW._getUnpackAlignement(),
                  AW = lW;
                XW = Math.floor((lW + wW - 1) / wW) * wW * (FW - 1) + AW, QW = gR._GetLuminanceArrayBuffer(lW, FW, MW.byteOffset + fW, XW, MW.buffer), RW.format = 1, RW.type = 0, WW._uploadDataToTextureDirectly(RW, QW, CW, zR)
              } else XW = Math.max(4, lW) / 4 * Math.max(4, FW) / 4 * kR, QW = new Uint8Array(MW.buffer, MW.byteOffset + fW, XW), RW.type = 0, WW._uploadCompressedDataToTextureDirectly(RW, jR, lW, FW, QW, CW, zR)
            }
            fW += aR ? lW * FW * (aR / 8) : XW, lW *= .5, FW *= .5, lW = Math.max(1, lW), FW = Math.max(1, FW)
          }
          if (void 0 !== iR) break
        }
        JW && JW.length > 0 ? wW.sphericalPolynomial = zR.b.ConvertCubeMapToSphericalPolynomial({
          size: IW[4],
          right: JW[0],
          left: JW[1],
          up: JW[2],
          down: JW[3],
          front: JW[4],
          back: JW[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : wW.sphericalPolynomial = void 0
      }
    }
    gR.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);