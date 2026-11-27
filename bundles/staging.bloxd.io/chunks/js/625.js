export const id = 625;
export const ids = [624, 625];
export const modules = {
  53960: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      _DDSTextureLoader: () => NW
    });
    var mW = OW(41506),
      EW = OW(53948);
    class NW {
      constructor() {
        this.supportCascades = !0
      }
      loadCubeData(WW, iW, OW, NW) {
        const PW = iW.VA();
        let LW, cW = !1,
          wW = 1e3;
        if (Array.isArray(WW))
          for (let mW = 0; mW < WW.length; mW++) {
            const OW = WW[mW];
            LW = EW.DDSTools.GetDDSInfo(OW), iW.width = LW.width, iW.height = LW.height, cW = (LW.isRGB || LW.isLuminance || LW.mipmapCount > 1) && iW.generateMipMaps, PW._unpackFlipY(LW.isCompressed), EW.DDSTools.UploadDDSLevels(PW, iW, OW, LW, cW, 6, -1, mW), LW.isFourCC || 1 !== LW.mipmapCount ? wW = LW.mipmapCount - 1 : PW.generateMipMapsForCubemap(iW)
          } else {
            const NW = WW;
            LW = EW.DDSTools.GetDDSInfo(NW), iW.width = LW.width, iW.height = LW.height, OW && (LW.sphericalPolynomial = new mW.f), cW = (LW.isRGB || LW.isLuminance || LW.mipmapCount > 1) && iW.generateMipMaps, PW._unpackFlipY(LW.isCompressed), EW.DDSTools.UploadDDSLevels(PW, iW, NW, LW, cW, 6), LW.isFourCC || 1 !== LW.mipmapCount ? wW = LW.mipmapCount - 1 : PW.generateMipMapsForCubemap(iW, !1)
          }
        PW._setCubeMapTextureParams(iW, cW, wW), iW.isReady = !0, iW.onLoadedObservable.notifyObservers(iW), iW.onLoadedObservable.clear(), NW && NW({
          isDDS: !0,
          width: iW.width,
          info: LW,
          data: WW,
          texture: iW
        })
      }
      loadData(WW, iW, OW) {
        const mW = EW.DDSTools.GetDDSInfo(WW),
          NW = (mW.isRGB || mW.isLuminance || mW.mipmapCount > 1) && iW.generateMipMaps && Math.max(mW.width, mW.height) >> mW.mipmapCount - 1 === 1;
        OW(mW.width, mW.height, NW, mW.isFourCC, (() => {
          EW.DDSTools.UploadDDSLevels(iW.VA(), iW, WW, mW, NW, 1)
        }))
      }
    }
  },
  53951: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => wW
    });
    var mW = OW(38241),
      EW = OW(38285),
      NW = OW(41506),
      PW = OW(38249),
      LW = OW(38372);
    class cW {
      constructor(WW, iW, OW, mW) {
        this.name = WW, this.worldAxisForNormal = iW, this.worldAxisForFileX = OW, this.worldAxisForFileY = mW
      }
    }
    class wW {
      static _NearestPow2Floor(WW) {
        return WW <= 1 ? 1 : 1 << Math.floor(Math.log2(WW))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(WW) {
        if (!WW.isCube) return null;
        WW.bD()?.VA().flushFramebuffer();
        const iW = WW.getSize().width,
          OW = WW._sphericalPolynomialTargetSize,
          mW = OW > 0 ? this._NearestPow2Floor(OW) : 0,
          EW = !WW.noMipmap && !0 === WW._texture?.generateMipMaps,
          NW = mW > 0 && mW < iW && EW,
          PW = NW ? Math.max(0, Math.round(Math.log2(iW / mW))) : 0,
          LW = NW ? Math.max(1, Math.floor(iW / Math.pow(2, PW))) : iW,
          cW = WW.readPixels(0, PW, void 0, !1),
          wW = WW.readPixels(1, PW, void 0, !1);
        let tW, ZW;
        WW.isRenderTarget ? (tW = WW.readPixels(3, PW, void 0, !1), ZW = WW.readPixels(2, PW, void 0, !1)) : (tW = WW.readPixels(2, PW, void 0, !1), ZW = WW.readPixels(3, PW, void 0, !1));
        const xW = WW.readPixels(4, PW, void 0, !1),
          lW = WW.readPixels(5, PW, void 0, !1),
          AW = WW.gammaSpace,
          bW = mW > 0 && mW < iW && !NW;
        return new Promise((WW => {
          Promise.all([wW, cW, tW, ZW, xW, lW]).then((OW => {
            let [EW, NW, PW, cW, wW, tW] = OW, ZW = LW;
            if (bW) {
              const WW = 4;
              EW = this._DownsampleFace(EW, iW, mW, WW), NW = this._DownsampleFace(NW, iW, mW, WW), PW = this._DownsampleFace(PW, iW, mW, WW), cW = this._DownsampleFace(cW, iW, mW, WW), wW = this._DownsampleFace(wW, iW, mW, WW), tW = this._DownsampleFace(tW, iW, mW, WW), ZW = mW
            }
            const xW = {
              size: ZW,
              right: NW,
              left: EW,
              up: PW,
              down: cW,
              front: wW,
              back: tW,
              format: 5,
              type: EW instanceof Float32Array ? 1 : 0,
              gammaSpace: AW
            };
            WW(this.ConvertCubeMapToSphericalPolynomial(xW))
          }))
        }))
      }
      static _AreaElement(WW, iW) {
        return Math.atan2(WW * iW, Math.sqrt(WW * WW + iW * iW + 1))
      }
      static _DownsampleFace(WW, iW, OW, mW) {
        const EW = WW instanceof Float32Array ? WW : Float32Array.from(WW),
          NW = OW * OW * mW,
          PW = new Float32Array(NW),
          LW = iW / OW,
          cW = 1 / (LW * LW);
        for (let tW = 0; tW < OW; tW++) {
          const WW = Math.floor(tW * LW),
            NW = Math.floor((tW + 1) * LW);
          for (let wW = 0; wW < OW; wW++) {
            const ZW = Math.floor(wW * LW),
              xW = Math.floor((wW + 1) * LW),
              lW = (tW * OW + wW) * mW;
            for (let OW = 0; OW < mW; OW++) {
              let LW = 0;
              for (let PW = WW; PW < NW; PW++)
                for (let WW = ZW; WW < xW; WW++) LW += EW[(PW * iW + WW) * mW + OW];
              PW[lW + OW] = LW * cW
            }
          }
        }
        if (WW instanceof Float32Array) return PW;
        const wW = new(0, WW.constructor)(NW);
        for (let tW = 0; tW < NW; tW++) wW[tW] = PW[tW] + .5 | 0;
        return wW
      }
      static ConvertCubeMapToSphericalPolynomial(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const OW = iW > 0 ? this._NearestPow2Floor(iW) : 0;
        if (OW > 0 && WW.size > OW) {
          const iW = 5 === WW.format ? 4 : 3,
            mW = ["right", "left", "up", "down", "front", "back"],
            EW = {};
          for (const NW of mW) EW[NW] = this._DownsampleFace(WW[NW], WW.size, OW, iW);
          WW = {
            ...WW,
            ...EW,
            size: OW
          }
        }
        const mW = new NW.e;
        let cW = 0;
        const wW = 2 / WW.size,
          tW = wW,
          ZW = .5 * wW,
          xW = ZW - 1;
        for (let NW = 0; NW < 6; NW++) {
          const iW = this._FileFaces[NW],
            OW = WW[iW.name];
          let lW = xW;
          const AW = 5 === WW.format ? 4 : 3;
          for (let NW = 0; NW < WW.size; NW++) {
            let bW = xW;
            for (let tW = 0; tW < WW.size; tW++) {
              const xW = iW.worldAxisForFileX.scale(bW).add(iW.worldAxisForFileY.scale(lW)).add(iW.worldAxisForNormal);
              xW.normalize();
              const jW = this._AreaElement(bW - ZW, lW - ZW) - this._AreaElement(bW - ZW, lW + ZW) - this._AreaElement(bW + ZW, lW - ZW) + this._AreaElement(bW + ZW, lW + ZW);
              let UW = OW[NW * WW.size * AW + tW * AW + 0],
                kW = OW[NW * WW.size * AW + tW * AW + 1],
                sW = OW[NW * WW.size * AW + tW * AW + 2];
              isNaN(UW) && (UW = 0), isNaN(kW) && (kW = 0), isNaN(sW) && (sW = 0), 0 === WW.type && (UW /= 255, kW /= 255, sW /= 255), WW.gammaSpace && (UW = Math.pow((0, EW.Clamp)(UW), PW.i), kW = Math.pow((0, EW.Clamp)(kW), PW.i), sW = Math.pow((0, EW.Clamp)(sW), PW.i));
              const MW = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const WW = Math.max(UW, kW, sW);
                if (WW > MW) {
                  const iW = MW / WW;
                  UW *= iW, kW *= iW, sW *= iW
                }
              } else UW = (0, EW.Clamp)(UW, 0, MW), kW = (0, EW.Clamp)(kW, 0, MW), sW = (0, EW.Clamp)(sW, 0, MW);
              const KW = new LW.b(UW, kW, sW);
              mW.addLight(xW, KW, jW), cW += jW, bW += wW
            }
            lW += tW
          }
        }
        const lW = 6 * (4 * Math.PI) / 6 / cW;
        return mW.scaleInPlace(lW), mW.convertIncidentRadianceToIrradiance(), mW.convertIrradianceToLambertianRadiance(), NW.f.FromHarmonics(mW)
      }
    }
    wW._FileFaces = [new cW("right", new mW.q(1, 0, 0), new mW.q(0, 0, -1), new mW.q(0, -1, 0)), new cW("left", new mW.q(-1, 0, 0), new mW.q(0, 0, 1), new mW.q(0, -1, 0)), new cW("up", new mW.q(0, 1, 0), new mW.q(1, 0, 0), new mW.q(0, 0, 1)), new cW("down", new mW.q(0, -1, 0), new mW.q(1, 0, 0), new mW.q(0, 0, -1)), new cW("front", new mW.q(0, 0, 1), new mW.q(1, 0, 0), new mW.q(0, -1, 0)), new cW("back", new mW.q(0, 0, -1), new mW.q(-1, 0, 0), new mW.q(0, -1, 0))], wW.MAX_HDRI_VALUE = 4096, wW.PRESERVE_CLAMPED_COLORS = !1
  },
  53948: (WW, iW, OW) => {
    OW.d(iW, {
      DDSTools: () => AW
    });
    var mW = OW(38285),
      EW = OW(39911),
      NW = OW(53951),
      PW = OW(41586);
    const LW = 131072,
      cW = 131072;

    function wW(WW) {
      return WW.charCodeAt(0) + (WW.charCodeAt(1) << 8) + (WW.charCodeAt(2) << 16) + (WW.charCodeAt(3) << 24)
    }
    const tW = wW("DXT1"),
      ZW = wW("DXT3"),
      xW = wW("DXT5"),
      lW = wW("DX10");
    class AW {
      static GetDDSInfo(WW) {
        const iW = new Int32Array(WW.buffer, WW.byteOffset, 31),
          OW = new Int32Array(WW.buffer, WW.byteOffset, 35);
        let mW = 1;
        iW[2] & LW && (mW = Math.max(1, iW[7]));
        const EW = iW[21],
          NW = EW === lW ? OW[32] : 0;
        let PW = 0;
        switch (EW) {
          case 113:
            PW = 2;
            break;
          case 116:
            PW = 1;
            break;
          case lW:
            if (10 === NW) {
              PW = 2;
              break
            }
            if (2 === NW) {
              PW = 1;
              break
            }
        }
        return {
          width: iW[4],
          height: iW[3],
          mipmapCount: mW,
          isFourCC: 4 === (4 & iW[20]),
          isRGB: 64 === (64 & iW[20]),
          isLuminance: (iW[20] & cW) === cW,
          isCube: 512 === (512 & iW[28]),
          isCompressed: EW === tW || EW === ZW || EW === xW,
          dxgiFormat: NW,
          textureType: PW
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(WW, iW, OW, mW, EW, NW) {
        const LW = new Float32Array(mW),
          cW = new Uint16Array(EW, OW);
        let wW = 0;
        for (let tW = 0; tW < iW; tW++)
          for (let iW = 0; iW < WW; iW++) {
            const OW = 4 * (iW + tW * WW);
            LW[wW] = (0, PW.d)(cW[OW]), LW[wW + 1] = (0, PW.d)(cW[OW + 1]), LW[wW + 2] = (0, PW.d)(cW[OW + 2]), AW.StoreLODInAlphaChannel ? LW[wW + 3] = NW : LW[wW + 3] = (0, PW.d)(cW[OW + 3]), wW += 4
          }
        return LW
      }
      static _GetHalfFloatRGBAArrayBuffer(WW, iW, OW, mW, EW, NW) {
        if (AW.StoreLODInAlphaChannel) {
          const LW = new Uint16Array(mW),
            cW = new Uint16Array(EW, OW);
          let wW = 0;
          for (let OW = 0; OW < iW; OW++)
            for (let iW = 0; iW < WW; iW++) {
              const mW = 4 * (iW + OW * WW);
              LW[wW] = cW[mW], LW[wW + 1] = cW[mW + 1], LW[wW + 2] = cW[mW + 2], LW[wW + 3] = (0, PW.k)(NW), wW += 4
            }
          return LW
        }
        return new Uint16Array(EW, OW, mW)
      }
      static _GetFloatRGBAArrayBuffer(WW, iW, OW, mW, EW, NW) {
        if (AW.StoreLODInAlphaChannel) {
          const PW = new Float32Array(mW),
            LW = new Float32Array(EW, OW);
          let cW = 0;
          for (let OW = 0; OW < iW; OW++)
            for (let iW = 0; iW < WW; iW++) {
              const mW = 4 * (iW + OW * WW);
              PW[cW] = LW[mW], PW[cW + 1] = LW[mW + 1], PW[cW + 2] = LW[mW + 2], PW[cW + 3] = NW, cW += 4
            }
          return PW
        }
        return new Float32Array(EW, OW, mW)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(WW, iW, OW, mW, EW, NW) {
        const LW = new Uint16Array(mW),
          cW = new Float32Array(EW, OW);
        let wW = 0;
        for (let tW = 0; tW < iW; tW++)
          for (let iW = 0; iW < WW; iW++) LW[wW] = (0, PW.k)(cW[wW]), LW[wW + 1] = (0, PW.k)(cW[wW + 1]), LW[wW + 2] = (0, PW.k)(cW[wW + 2]), AW.StoreLODInAlphaChannel ? LW[wW + 3] = (0, PW.k)(NW) : LW[wW + 3] = (0, PW.k)(cW[wW + 3]), wW += 4;
        return LW
      }
      static _GetFloatAsUIntRGBAArrayBuffer(WW, iW, OW, EW, NW, PW) {
        const LW = new Uint8Array(EW),
          cW = new Float32Array(NW, OW);
        let wW = 0;
        for (let tW = 0; tW < iW; tW++)
          for (let iW = 0; iW < WW; iW++) {
            const OW = 4 * (iW + tW * WW);
            LW[wW] = 255 * (0, mW.Clamp)(cW[OW]), LW[wW + 1] = 255 * (0, mW.Clamp)(cW[OW + 1]), LW[wW + 2] = 255 * (0, mW.Clamp)(cW[OW + 2]), AW.StoreLODInAlphaChannel ? LW[wW + 3] = PW : LW[wW + 3] = 255 * (0, mW.Clamp)(cW[OW + 3]), wW += 4
          }
        return LW
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(WW, iW, OW, EW, NW, LW) {
        const cW = new Uint8Array(EW),
          wW = new Uint16Array(NW, OW);
        let tW = 0;
        for (let ZW = 0; ZW < iW; ZW++)
          for (let iW = 0; iW < WW; iW++) {
            const OW = 4 * (iW + ZW * WW);
            cW[tW] = 255 * (0, mW.Clamp)((0, PW.d)(wW[OW])), cW[tW + 1] = 255 * (0, mW.Clamp)((0, PW.d)(wW[OW + 1])), cW[tW + 2] = 255 * (0, mW.Clamp)((0, PW.d)(wW[OW + 2])), AW.StoreLODInAlphaChannel ? cW[tW + 3] = LW : cW[tW + 3] = 255 * (0, mW.Clamp)((0, PW.d)(wW[OW + 3])), tW += 4
          }
        return cW
      }
      static _GetRGBAArrayBuffer(WW, iW, OW, mW, EW, NW, PW, LW, cW) {
        const wW = new Uint8Array(mW),
          tW = new Uint8Array(EW, OW);
        let ZW = 0;
        for (let xW = 0; xW < iW; xW++)
          for (let iW = 0; iW < WW; iW++) {
            const OW = 4 * (iW + xW * WW);
            wW[ZW] = tW[OW + NW], wW[ZW + 1] = tW[OW + PW], wW[ZW + 2] = tW[OW + LW], wW[ZW + 3] = tW[OW + cW], ZW += 4
          }
        return wW
      }
      static _ExtractLongWordOrder(WW) {
        return 0 === WW || 255 === WW || -16777216 === WW ? 0 : 1 + AW._ExtractLongWordOrder(WW >> 8)
      }
      static _GetRGBArrayBuffer(WW, iW, OW, mW, EW, NW, PW, LW) {
        const cW = new Uint8Array(mW),
          wW = new Uint8Array(EW, OW);
        let tW = 0;
        for (let ZW = 0; ZW < iW; ZW++)
          for (let iW = 0; iW < WW; iW++) {
            const OW = 3 * (iW + ZW * WW);
            cW[tW] = wW[OW + NW], cW[tW + 1] = wW[OW + PW], cW[tW + 2] = wW[OW + LW], tW += 3
          }
        return cW
      }
      static _GetLuminanceArrayBuffer(WW, iW, OW, mW, EW) {
        const NW = new Uint8Array(mW),
          PW = new Uint8Array(EW, OW);
        let LW = 0;
        for (let cW = 0; cW < iW; cW++)
          for (let iW = 0; iW < WW; iW++) {
            const OW = iW + cW * WW;
            NW[LW] = PW[OW], LW++
          }
        return NW
      }
      static UploadDDSLevels(WW, iW, OW, mW, PW, cW) {
        let wW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          bW = arguments.length > 7 ? arguments[7] : void 0,
          jW = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          UW = null;
        mW.sphericalPolynomial && (UW = []);
        const kW = !!WW.getCaps().s3tc;
        iW.generateMipMaps = PW;
        const sW = new Int32Array(OW.buffer, OW.byteOffset, 31);
        let MW, KW, SW, YW, yW, TW, JW, hW = 0,
          HW = 0,
          nW = 1;
        if (542327876 !== sW[0]) return void EW.b.Error("Invalid magic number in DDS header");
        if (!mW.isFourCC && !mW.isRGB && !mW.isLuminance) return void EW.b.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (mW.isCompressed && !kW) return void EW.b.Error("Compressed textures are not supported on this platform.");
        let uW = sW[22];
        YW = sW[1] + 4;
        let oW = !1;
        if (mW.isFourCC) switch (MW = sW[21], MW) {
          case tW:
            nW = 8, HW = 33777;
            break;
          case ZW:
            nW = 16, HW = 33778;
            break;
          case xW:
            nW = 16, HW = 33779;
            break;
          case 113:
            oW = !0, uW = 64;
            break;
          case 116:
            oW = !0, uW = 128;
            break;
          case lW: {
            YW += 20;
            let WW = !1;
            switch (mW.dxgiFormat) {
              case 10:
                oW = !0, uW = 64, WW = !0;
                break;
              case 2:
                oW = !0, uW = 128, WW = !0;
                break;
              case 88:
                mW.isRGB = !0, mW.isFourCC = !1, uW = 32, WW = !0
            }
            if (WW) break
          }
          default:
            return void EW.b.Error(["Unsupported FourCC code:", (dW = MW, String.fromCharCode(255 & dW, dW >> 8 & 255, dW >> 16 & 255, dW >> 24 & 255))])
        }
        var dW;
        const eW = AW._ExtractLongWordOrder(sW[23]),
          vW = AW._ExtractLongWordOrder(sW[24]),
          gW = AW._ExtractLongWordOrder(sW[25]),
          DW = AW._ExtractLongWordOrder(sW[26]);
        oW && (HW = WW._getRGBABufferInternalSizedFormat(mW.textureType)), TW = 1, sW[2] & LW && !1 !== PW && (TW = Math.max(1, sW[7]));
        const VW = bW || 0,
          pW = WW.getCaps();
        for (let EW = VW; EW < cW; EW++) {
          for (KW = sW[4], SW = sW[3], JW = 0; JW < TW; ++JW) {
            if (-1 === wW || wW === JW) {
              const NW = -1 === wW ? JW : 0;
              if (!mW.isCompressed && mW.isFourCC) {
                iW.format = 5, hW = KW * SW * 4;
                let mW = null;
                if (WW._badOS || WW._badDesktopOS || !pW.textureHalfFloat && !pW.textureFloat) 128 === uW ? (mW = AW._GetFloatAsUIntRGBAArrayBuffer(KW, SW, OW.byteOffset + YW, hW, OW.buffer, NW), UW && 0 == NW && UW.push(AW._GetFloatRGBAArrayBuffer(KW, SW, OW.byteOffset + YW, hW, OW.buffer, NW))) : 64 === uW && (mW = AW._GetHalfFloatAsUIntRGBAArrayBuffer(KW, SW, OW.byteOffset + YW, hW, OW.buffer, NW), UW && 0 == NW && UW.push(AW._GetHalfFloatAsFloatRGBAArrayBuffer(KW, SW, OW.byteOffset + YW, hW, OW.buffer, NW))), iW.type = 0;
                else {
                  const WW = pW.textureFloat && (jW && pW.textureFloatLinearFiltering || !jW),
                    EW = pW.textureHalfFloat && (jW && pW.textureHalfFloatLinearFiltering || !jW),
                    PW = (128 === uW || 64 === uW && !EW) && WW ? 1 : (64 === uW || 128 === uW && !WW) && EW ? 2 : 0;
                  let LW, cW = null;
                  if (128 === uW) switch (PW) {
                    case 1:
                      LW = AW._GetFloatRGBAArrayBuffer, cW = null;
                      break;
                    case 2:
                      LW = AW._GetFloatAsHalfFloatRGBAArrayBuffer, cW = AW._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      LW = AW._GetFloatAsUIntRGBAArrayBuffer, cW = AW._GetFloatRGBAArrayBuffer
                  } else switch (PW) {
                    case 1:
                      LW = AW._GetHalfFloatAsFloatRGBAArrayBuffer, cW = null;
                      break;
                    case 2:
                      LW = AW._GetHalfFloatRGBAArrayBuffer, cW = AW._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      LW = AW._GetHalfFloatAsUIntRGBAArrayBuffer, cW = AW._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  iW.type = PW, mW = LW(KW, SW, OW.byteOffset + YW, hW, OW.buffer, NW), UW && 0 == NW && UW.push(cW ? cW(KW, SW, OW.byteOffset + YW, hW, OW.buffer, NW) : mW)
                }
                mW && WW._uploadDataToTextureDirectly(iW, mW, EW, NW)
              } else if (mW.isRGB) iW.type = 0, 24 === uW ? (iW.format = 4, hW = KW * SW * 3, yW = AW._GetRGBArrayBuffer(KW, SW, OW.byteOffset + YW, hW, OW.buffer, eW, vW, gW), WW._uploadDataToTextureDirectly(iW, yW, EW, NW)) : (iW.format = 5, hW = KW * SW * 4, yW = AW._GetRGBAArrayBuffer(KW, SW, OW.byteOffset + YW, hW, OW.buffer, eW, vW, gW, DW), WW._uploadDataToTextureDirectly(iW, yW, EW, NW));
              else if (mW.isLuminance) {
                const mW = WW._getUnpackAlignement(),
                  PW = KW;
                hW = Math.floor((KW + mW - 1) / mW) * mW * (SW - 1) + PW, yW = AW._GetLuminanceArrayBuffer(KW, SW, OW.byteOffset + YW, hW, OW.buffer), iW.format = 1, iW.type = 0, WW._uploadDataToTextureDirectly(iW, yW, EW, NW)
              } else hW = Math.max(4, KW) / 4 * Math.max(4, SW) / 4 * nW, yW = new Uint8Array(OW.buffer, OW.byteOffset + YW, hW), iW.type = 0, WW._uploadCompressedDataToTextureDirectly(iW, HW, KW, SW, yW, EW, NW)
            }
            YW += uW ? KW * SW * (uW / 8) : hW, KW *= .5, SW *= .5, KW = Math.max(1, KW), SW = Math.max(1, SW)
          }
          if (void 0 !== bW) break
        }
        UW && UW.length > 0 ? mW.sphericalPolynomial = NW.b.ConvertCubeMapToSphericalPolynomial({
          size: sW[4],
          right: UW[0],
          left: UW[1],
          up: UW[2],
          down: UW[3],
          front: UW[4],
          back: UW[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : mW.sphericalPolynomial = void 0
      }
    }
    AW.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);