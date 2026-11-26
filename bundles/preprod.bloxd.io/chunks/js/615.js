export const id = 615;
export const ids = [615];
export const modules = {
  45245: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => CH
    });
    var AH = LH(37963),
      rH = LH(38002),
      SH = LH(41275),
      hH = LH(37972),
      tH = LH(38074);
    class zH {
      constructor(HH, BH, LH, AH) {
        this.name = HH, this.worldAxisForNormal = BH, this.worldAxisForFileX = LH, this.worldAxisForFileY = AH
      }
    }
    class CH {
      static _NearestPow2Floor(HH) {
        return HH <= 1 ? 1 : 1 << Math.floor(Math.log2(HH))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(HH) {
        if (!HH.isCube) return null;
        HH.yN()?.Iu().flushFramebuffer();
        const BH = HH.getSize().width,
          LH = HH._sphericalPolynomialTargetSize,
          AH = LH > 0 ? this._NearestPow2Floor(LH) : 0,
          rH = !HH.noMipmap && !0 === HH._texture?.generateMipMaps,
          SH = AH > 0 && AH < BH && rH,
          hH = SH ? Math.max(0, Math.round(Math.log2(BH / AH))) : 0,
          tH = SH ? Math.max(1, Math.floor(BH / Math.pow(2, hH))) : BH,
          zH = HH.readPixels(0, hH, void 0, !1),
          CH = HH.readPixels(1, hH, void 0, !1);
        let EH, XH;
        HH.isRenderTarget ? (EH = HH.readPixels(3, hH, void 0, !1), XH = HH.readPixels(2, hH, void 0, !1)) : (EH = HH.readPixels(2, hH, void 0, !1), XH = HH.readPixels(3, hH, void 0, !1));
        const GH = HH.readPixels(4, hH, void 0, !1),
          YH = HH.readPixels(5, hH, void 0, !1),
          uH = HH.gammaSpace,
          QH = AH > 0 && AH < BH && !SH;
        return new Promise((HH => {
          Promise.all([CH, zH, EH, XH, GH, YH]).then((LH => {
            let [rH, SH, hH, zH, CH, EH] = LH, XH = tH;
            if (QH) {
              const HH = 4;
              rH = this._DownsampleFace(rH, BH, AH, HH), SH = this._DownsampleFace(SH, BH, AH, HH), hH = this._DownsampleFace(hH, BH, AH, HH), zH = this._DownsampleFace(zH, BH, AH, HH), CH = this._DownsampleFace(CH, BH, AH, HH), EH = this._DownsampleFace(EH, BH, AH, HH), XH = AH
            }
            const GH = {
              size: XH,
              right: SH,
              left: rH,
              up: hH,
              down: zH,
              front: CH,
              back: EH,
              format: 5,
              type: rH instanceof Float32Array ? 1 : 0,
              gammaSpace: uH
            };
            HH(this.ConvertCubeMapToSphericalPolynomial(GH))
          }))
        }))
      }
      static _AreaElement(HH, BH) {
        return Math.atan2(HH * BH, Math.sqrt(HH * HH + BH * BH + 1))
      }
      static _DownsampleFace(HH, BH, LH, AH) {
        const rH = HH instanceof Float32Array ? HH : Float32Array.from(HH),
          SH = LH * LH * AH,
          hH = new Float32Array(SH),
          tH = BH / LH,
          zH = 1 / (tH * tH);
        for (let EH = 0; EH < LH; EH++) {
          const HH = Math.floor(EH * tH),
            SH = Math.floor((EH + 1) * tH);
          for (let CH = 0; CH < LH; CH++) {
            const XH = Math.floor(CH * tH),
              GH = Math.floor((CH + 1) * tH),
              YH = (EH * LH + CH) * AH;
            for (let LH = 0; LH < AH; LH++) {
              let tH = 0;
              for (let hH = HH; hH < SH; hH++)
                for (let HH = XH; HH < GH; HH++) tH += rH[(hH * BH + HH) * AH + LH];
              hH[YH + LH] = tH * zH
            }
          }
        }
        if (HH instanceof Float32Array) return hH;
        const CH = new(0, HH.constructor)(SH);
        for (let EH = 0; EH < SH; EH++) CH[EH] = hH[EH] + .5 | 0;
        return CH
      }
      static ConvertCubeMapToSphericalPolynomial(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const LH = BH > 0 ? this._NearestPow2Floor(BH) : 0;
        if (LH > 0 && HH.size > LH) {
          const BH = 5 === HH.format ? 4 : 3,
            AH = ["right", "left", "up", "down", "front", "back"],
            rH = {};
          for (const SH of AH) rH[SH] = this._DownsampleFace(HH[SH], HH.size, LH, BH);
          HH = {
            ...HH,
            ...rH,
            size: LH
          }
        }
        const AH = new SH.e;
        let zH = 0;
        const CH = 2 / HH.size,
          EH = CH,
          XH = .5 * CH,
          GH = XH - 1;
        for (let SH = 0; SH < 6; SH++) {
          const BH = this._FileFaces[SH],
            LH = HH[BH.name];
          let YH = GH;
          const uH = 5 === HH.format ? 4 : 3;
          for (let SH = 0; SH < HH.size; SH++) {
            let QH = GH;
            for (let EH = 0; EH < HH.size; EH++) {
              const GH = BH.worldAxisForFileX.scale(QH).add(BH.worldAxisForFileY.scale(YH)).add(BH.worldAxisForNormal);
              GH.normalize();
              const WH = this._AreaElement(QH - XH, YH - XH) - this._AreaElement(QH - XH, YH + XH) - this._AreaElement(QH + XH, YH - XH) + this._AreaElement(QH + XH, YH + XH);
              let MH = LH[SH * HH.size * uH + EH * uH + 0],
                xH = LH[SH * HH.size * uH + EH * uH + 1],
                vH = LH[SH * HH.size * uH + EH * uH + 2];
              isNaN(MH) && (MH = 0), isNaN(xH) && (xH = 0), isNaN(vH) && (vH = 0), 0 === HH.type && (MH /= 255, xH /= 255, vH /= 255), HH.gammaSpace && (MH = Math.pow((0, rH.Clamp)(MH), hH.f), xH = Math.pow((0, rH.Clamp)(xH), hH.f), vH = Math.pow((0, rH.Clamp)(vH), hH.f));
              const PH = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const HH = Math.max(MH, xH, vH);
                if (HH > PH) {
                  const BH = PH / HH;
                  MH *= BH, xH *= BH, vH *= BH
                }
              } else MH = (0, rH.Clamp)(MH, 0, PH), xH = (0, rH.Clamp)(xH, 0, PH), vH = (0, rH.Clamp)(vH, 0, PH);
              const TH = new tH.c(MH, xH, vH);
              AH.addLight(GH, TH, WH), zH += WH, QH += CH
            }
            YH += EH
          }
        }
        const YH = 6 * (4 * Math.PI) / 6 / zH;
        return AH.scaleInPlace(YH), AH.convertIncidentRadianceToIrradiance(), AH.convertIrradianceToLambertianRadiance(), SH.g.FromHarmonics(AH)
      }
    }
    CH._FileFaces = [new zH("right", new AH.o(1, 0, 0), new AH.o(0, 0, -1), new AH.o(0, -1, 0)), new zH("left", new AH.o(-1, 0, 0), new AH.o(0, 0, 1), new AH.o(0, -1, 0)), new zH("up", new AH.o(0, 1, 0), new AH.o(1, 0, 0), new AH.o(0, 0, 1)), new zH("down", new AH.o(0, -1, 0), new AH.o(1, 0, 0), new AH.o(0, 0, -1)), new zH("front", new AH.o(0, 0, 1), new AH.o(1, 0, 0), new AH.o(0, -1, 0)), new zH("back", new AH.o(0, 0, -1), new AH.o(-1, 0, 0), new AH.o(0, -1, 0))], CH.MAX_HDRI_VALUE = 4096, CH.PRESERVE_CLAMPED_COLORS = !1
  },
  45241: (HH, BH, LH) => {
    LH.d(BH, {
      DDSTools: () => uH
    });
    var AH = LH(38002),
      rH = LH(39595),
      SH = LH(45245),
      hH = LH(41364);
    const tH = 131072,
      zH = 131072;

    function CH(HH) {
      return HH.charCodeAt(0) + (HH.charCodeAt(1) << 8) + (HH.charCodeAt(2) << 16) + (HH.charCodeAt(3) << 24)
    }
    const EH = CH("DXT1"),
      XH = CH("DXT3"),
      GH = CH("DXT5"),
      YH = CH("DX10");
    class uH {
      static GetDDSInfo(HH) {
        const BH = new Int32Array(HH.buffer, HH.byteOffset, 31),
          LH = new Int32Array(HH.buffer, HH.byteOffset, 35);
        let AH = 1;
        BH[2] & tH && (AH = Math.max(1, BH[7]));
        const rH = BH[21],
          SH = rH === YH ? LH[32] : 0;
        let hH = 0;
        switch (rH) {
          case 113:
            hH = 2;
            break;
          case 116:
            hH = 1;
            break;
          case YH:
            if (10 === SH) {
              hH = 2;
              break
            }
            if (2 === SH) {
              hH = 1;
              break
            }
        }
        return {
          width: BH[4],
          height: BH[3],
          mipmapCount: AH,
          isFourCC: 4 === (4 & BH[20]),
          isRGB: 64 === (64 & BH[20]),
          isLuminance: (BH[20] & zH) === zH,
          isCube: 512 === (512 & BH[28]),
          isCompressed: rH === EH || rH === XH || rH === GH,
          dxgiFormat: SH,
          textureType: hH
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(HH, BH, LH, AH, rH, SH) {
        const tH = new Float32Array(AH),
          zH = new Uint16Array(rH, LH);
        let CH = 0;
        for (let EH = 0; EH < BH; EH++)
          for (let BH = 0; BH < HH; BH++) {
            const LH = 4 * (BH + EH * HH);
            tH[CH] = (0, hH.d)(zH[LH]), tH[CH + 1] = (0, hH.d)(zH[LH + 1]), tH[CH + 2] = (0, hH.d)(zH[LH + 2]), uH.StoreLODInAlphaChannel ? tH[CH + 3] = SH : tH[CH + 3] = (0, hH.d)(zH[LH + 3]), CH += 4
          }
        return tH
      }
      static _GetHalfFloatRGBAArrayBuffer(HH, BH, LH, AH, rH, SH) {
        if (uH.StoreLODInAlphaChannel) {
          const tH = new Uint16Array(AH),
            zH = new Uint16Array(rH, LH);
          let CH = 0;
          for (let LH = 0; LH < BH; LH++)
            for (let BH = 0; BH < HH; BH++) {
              const AH = 4 * (BH + LH * HH);
              tH[CH] = zH[AH], tH[CH + 1] = zH[AH + 1], tH[CH + 2] = zH[AH + 2], tH[CH + 3] = (0, hH.f)(SH), CH += 4
            }
          return tH
        }
        return new Uint16Array(rH, LH, AH)
      }
      static _GetFloatRGBAArrayBuffer(HH, BH, LH, AH, rH, SH) {
        if (uH.StoreLODInAlphaChannel) {
          const hH = new Float32Array(AH),
            tH = new Float32Array(rH, LH);
          let zH = 0;
          for (let LH = 0; LH < BH; LH++)
            for (let BH = 0; BH < HH; BH++) {
              const AH = 4 * (BH + LH * HH);
              hH[zH] = tH[AH], hH[zH + 1] = tH[AH + 1], hH[zH + 2] = tH[AH + 2], hH[zH + 3] = SH, zH += 4
            }
          return hH
        }
        return new Float32Array(rH, LH, AH)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(HH, BH, LH, AH, rH, SH) {
        const tH = new Uint16Array(AH),
          zH = new Float32Array(rH, LH);
        let CH = 0;
        for (let EH = 0; EH < BH; EH++)
          for (let BH = 0; BH < HH; BH++) tH[CH] = (0, hH.f)(zH[CH]), tH[CH + 1] = (0, hH.f)(zH[CH + 1]), tH[CH + 2] = (0, hH.f)(zH[CH + 2]), uH.StoreLODInAlphaChannel ? tH[CH + 3] = (0, hH.f)(SH) : tH[CH + 3] = (0, hH.f)(zH[CH + 3]), CH += 4;
        return tH
      }
      static _GetFloatAsUIntRGBAArrayBuffer(HH, BH, LH, rH, SH, hH) {
        const tH = new Uint8Array(rH),
          zH = new Float32Array(SH, LH);
        let CH = 0;
        for (let EH = 0; EH < BH; EH++)
          for (let BH = 0; BH < HH; BH++) {
            const LH = 4 * (BH + EH * HH);
            tH[CH] = 255 * (0, AH.Clamp)(zH[LH]), tH[CH + 1] = 255 * (0, AH.Clamp)(zH[LH + 1]), tH[CH + 2] = 255 * (0, AH.Clamp)(zH[LH + 2]), uH.StoreLODInAlphaChannel ? tH[CH + 3] = hH : tH[CH + 3] = 255 * (0, AH.Clamp)(zH[LH + 3]), CH += 4
          }
        return tH
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(HH, BH, LH, rH, SH, tH) {
        const zH = new Uint8Array(rH),
          CH = new Uint16Array(SH, LH);
        let EH = 0;
        for (let XH = 0; XH < BH; XH++)
          for (let BH = 0; BH < HH; BH++) {
            const LH = 4 * (BH + XH * HH);
            zH[EH] = 255 * (0, AH.Clamp)((0, hH.d)(CH[LH])), zH[EH + 1] = 255 * (0, AH.Clamp)((0, hH.d)(CH[LH + 1])), zH[EH + 2] = 255 * (0, AH.Clamp)((0, hH.d)(CH[LH + 2])), uH.StoreLODInAlphaChannel ? zH[EH + 3] = tH : zH[EH + 3] = 255 * (0, AH.Clamp)((0, hH.d)(CH[LH + 3])), EH += 4
          }
        return zH
      }
      static _GetRGBAArrayBuffer(HH, BH, LH, AH, rH, SH, hH, tH, zH) {
        const CH = new Uint8Array(AH),
          EH = new Uint8Array(rH, LH);
        let XH = 0;
        for (let GH = 0; GH < BH; GH++)
          for (let BH = 0; BH < HH; BH++) {
            const LH = 4 * (BH + GH * HH);
            CH[XH] = EH[LH + SH], CH[XH + 1] = EH[LH + hH], CH[XH + 2] = EH[LH + tH], CH[XH + 3] = EH[LH + zH], XH += 4
          }
        return CH
      }
      static _ExtractLongWordOrder(HH) {
        return 0 === HH || 255 === HH || -16777216 === HH ? 0 : 1 + uH._ExtractLongWordOrder(HH >> 8)
      }
      static _GetRGBArrayBuffer(HH, BH, LH, AH, rH, SH, hH, tH) {
        const zH = new Uint8Array(AH),
          CH = new Uint8Array(rH, LH);
        let EH = 0;
        for (let XH = 0; XH < BH; XH++)
          for (let BH = 0; BH < HH; BH++) {
            const LH = 3 * (BH + XH * HH);
            zH[EH] = CH[LH + SH], zH[EH + 1] = CH[LH + hH], zH[EH + 2] = CH[LH + tH], EH += 3
          }
        return zH
      }
      static _GetLuminanceArrayBuffer(HH, BH, LH, AH, rH) {
        const SH = new Uint8Array(AH),
          hH = new Uint8Array(rH, LH);
        let tH = 0;
        for (let zH = 0; zH < BH; zH++)
          for (let BH = 0; BH < HH; BH++) {
            const LH = BH + zH * HH;
            SH[tH] = hH[LH], tH++
          }
        return SH
      }
      static UploadDDSLevels(HH, BH, LH, AH, hH, zH) {
        let CH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          QH = arguments.length > 7 ? arguments[7] : void 0,
          WH = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          MH = null;
        AH.sphericalPolynomial && (MH = []);
        const xH = !!HH.getCaps().s3tc;
        BH.generateMipMaps = hH;
        const vH = new Int32Array(LH.buffer, LH.byteOffset, 31);
        let PH, TH, UH, VH, OH, bH, kH, mH = 0,
          oH = 0,
          IH = 1;
        if (542327876 !== vH[0]) return void rH.e.Error("Invalid magic number in DDS header");
        if (!AH.isFourCC && !AH.isRGB && !AH.isLuminance) return void rH.e.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (AH.isCompressed && !xH) return void rH.e.Error("Compressed textures are not supported on this platform.");
        let fH = vH[22];
        VH = vH[1] + 4;
        let lH = !1;
        if (AH.isFourCC) switch (PH = vH[21], PH) {
          case EH:
            IH = 8, oH = 33777;
            break;
          case XH:
            IH = 16, oH = 33778;
            break;
          case GH:
            IH = 16, oH = 33779;
            break;
          case 113:
            lH = !0, fH = 64;
            break;
          case 116:
            lH = !0, fH = 128;
            break;
          case YH: {
            VH += 20;
            let HH = !1;
            switch (AH.dxgiFormat) {
              case 10:
                lH = !0, fH = 64, HH = !0;
                break;
              case 2:
                lH = !0, fH = 128, HH = !0;
                break;
              case 88:
                AH.isRGB = !0, AH.isFourCC = !1, fH = 32, HH = !0
            }
            if (HH) break
          }
          default:
            return void rH.e.Error(["Unsupported FourCC code:", (KH = PH, String.fromCharCode(255 & KH, KH >> 8 & 255, KH >> 16 & 255, KH >> 24 & 255))])
        }
        var KH;
        const cH = uH._ExtractLongWordOrder(vH[23]),
          eH = uH._ExtractLongWordOrder(vH[24]),
          qH = uH._ExtractLongWordOrder(vH[25]),
          gH = uH._ExtractLongWordOrder(vH[26]);
        lH && (oH = HH._getRGBABufferInternalSizedFormat(AH.textureType)), bH = 1, vH[2] & tH && !1 !== hH && (bH = Math.max(1, vH[7]));
        const NH = QH || 0,
          RH = HH.getCaps();
        for (let rH = NH; rH < zH; rH++) {
          for (TH = vH[4], UH = vH[3], kH = 0; kH < bH; ++kH) {
            if (-1 === CH || CH === kH) {
              const SH = -1 === CH ? kH : 0;
              if (!AH.isCompressed && AH.isFourCC) {
                BH.format = 5, mH = TH * UH * 4;
                let AH = null;
                if (HH._badOS || HH._badDesktopOS || !RH.textureHalfFloat && !RH.textureFloat) 128 === fH ? (AH = uH._GetFloatAsUIntRGBAArrayBuffer(TH, UH, LH.byteOffset + VH, mH, LH.buffer, SH), MH && 0 == SH && MH.push(uH._GetFloatRGBAArrayBuffer(TH, UH, LH.byteOffset + VH, mH, LH.buffer, SH))) : 64 === fH && (AH = uH._GetHalfFloatAsUIntRGBAArrayBuffer(TH, UH, LH.byteOffset + VH, mH, LH.buffer, SH), MH && 0 == SH && MH.push(uH._GetHalfFloatAsFloatRGBAArrayBuffer(TH, UH, LH.byteOffset + VH, mH, LH.buffer, SH))), BH.type = 0;
                else {
                  const HH = RH.textureFloat && (WH && RH.textureFloatLinearFiltering || !WH),
                    rH = RH.textureHalfFloat && (WH && RH.textureHalfFloatLinearFiltering || !WH),
                    hH = (128 === fH || 64 === fH && !rH) && HH ? 1 : (64 === fH || 128 === fH && !HH) && rH ? 2 : 0;
                  let tH, zH = null;
                  if (128 === fH) switch (hH) {
                    case 1:
                      tH = uH._GetFloatRGBAArrayBuffer, zH = null;
                      break;
                    case 2:
                      tH = uH._GetFloatAsHalfFloatRGBAArrayBuffer, zH = uH._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      tH = uH._GetFloatAsUIntRGBAArrayBuffer, zH = uH._GetFloatRGBAArrayBuffer
                  } else switch (hH) {
                    case 1:
                      tH = uH._GetHalfFloatAsFloatRGBAArrayBuffer, zH = null;
                      break;
                    case 2:
                      tH = uH._GetHalfFloatRGBAArrayBuffer, zH = uH._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      tH = uH._GetHalfFloatAsUIntRGBAArrayBuffer, zH = uH._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  BH.type = hH, AH = tH(TH, UH, LH.byteOffset + VH, mH, LH.buffer, SH), MH && 0 == SH && MH.push(zH ? zH(TH, UH, LH.byteOffset + VH, mH, LH.buffer, SH) : AH)
                }
                AH && HH._uploadDataToTextureDirectly(BH, AH, rH, SH)
              } else if (AH.isRGB) BH.type = 0, 24 === fH ? (BH.format = 4, mH = TH * UH * 3, OH = uH._GetRGBArrayBuffer(TH, UH, LH.byteOffset + VH, mH, LH.buffer, cH, eH, qH), HH._uploadDataToTextureDirectly(BH, OH, rH, SH)) : (BH.format = 5, mH = TH * UH * 4, OH = uH._GetRGBAArrayBuffer(TH, UH, LH.byteOffset + VH, mH, LH.buffer, cH, eH, qH, gH), HH._uploadDataToTextureDirectly(BH, OH, rH, SH));
              else if (AH.isLuminance) {
                const AH = HH._getUnpackAlignement(),
                  hH = TH;
                mH = Math.floor((TH + AH - 1) / AH) * AH * (UH - 1) + hH, OH = uH._GetLuminanceArrayBuffer(TH, UH, LH.byteOffset + VH, mH, LH.buffer), BH.format = 1, BH.type = 0, HH._uploadDataToTextureDirectly(BH, OH, rH, SH)
              } else mH = Math.max(4, TH) / 4 * Math.max(4, UH) / 4 * IH, OH = new Uint8Array(LH.buffer, LH.byteOffset + VH, mH), BH.type = 0, HH._uploadCompressedDataToTextureDirectly(BH, oH, TH, UH, OH, rH, SH)
            }
            VH += fH ? TH * UH * (fH / 8) : mH, TH *= .5, UH *= .5, TH = Math.max(1, TH), UH = Math.max(1, UH)
          }
          if (void 0 !== QH) break
        }
        MH && MH.length > 0 ? AH.sphericalPolynomial = SH.e.ConvertCubeMapToSphericalPolynomial({
          size: vH[4],
          right: MH[0],
          left: MH[1],
          up: MH[2],
          down: MH[3],
          front: MH[4],
          back: MH[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : AH.sphericalPolynomial = void 0
      }
    }
    uH.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);