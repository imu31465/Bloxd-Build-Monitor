export const id = 287;
export const ids = [286, 287];
export const modules = {
  40491: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      _DDSTextureLoader: () => eJ
    });
    var FJ = ZJ(38790),
      UJ = ZJ(40473);
    class eJ {
      constructor() {
        this.supportCascades = !0
      }
      loadCubeData(JJ, cJ, ZJ, eJ) {
        const XJ = cJ.gn();
        let AJ, qJ = !1,
          jJ = 1e3;
        if (Array.isArray(JJ))
          for (let FJ = 0; FJ < JJ.length; FJ++) {
            const ZJ = JJ[FJ];
            AJ = UJ.DDSTools.GetDDSInfo(ZJ), cJ.width = AJ.width, cJ.height = AJ.height, qJ = (AJ.isRGB || AJ.isLuminance || AJ.mipmapCount > 1) && cJ.generateMipMaps, XJ._unpackFlipY(AJ.isCompressed), UJ.DDSTools.UploadDDSLevels(XJ, cJ, ZJ, AJ, qJ, 6, -1, FJ), AJ.isFourCC || 1 !== AJ.mipmapCount ? jJ = AJ.mipmapCount - 1 : XJ.generateMipMapsForCubemap(cJ)
          } else {
            const eJ = JJ;
            AJ = UJ.DDSTools.GetDDSInfo(eJ), cJ.width = AJ.width, cJ.height = AJ.height, ZJ && (AJ.sphericalPolynomial = new FJ.h), qJ = (AJ.isRGB || AJ.isLuminance || AJ.mipmapCount > 1) && cJ.generateMipMaps, XJ._unpackFlipY(AJ.isCompressed), UJ.DDSTools.UploadDDSLevels(XJ, cJ, eJ, AJ, qJ, 6), AJ.isFourCC || 1 !== AJ.mipmapCount ? jJ = AJ.mipmapCount - 1 : XJ.generateMipMapsForCubemap(cJ, !1)
          }
        XJ._setCubeMapTextureParams(cJ, qJ, jJ), cJ.isReady = !0, cJ.onLoadedObservable.notifyObservers(cJ), cJ.onLoadedObservable.clear(), eJ && eJ({
          isDDS: !0,
          width: cJ.width,
          info: AJ,
          data: JJ,
          texture: cJ
        })
      }
      loadData(JJ, cJ, ZJ) {
        const FJ = UJ.DDSTools.GetDDSInfo(JJ),
          eJ = (FJ.isRGB || FJ.isLuminance || FJ.mipmapCount > 1) && cJ.generateMipMaps && Math.max(FJ.width, FJ.height) >> FJ.mipmapCount - 1 === 1;
        ZJ(FJ.width, FJ.height, eJ, FJ.isFourCC, (() => {
          UJ.DDSTools.UploadDDSLevels(cJ.gn(), cJ, JJ, FJ, eJ, 1)
        }))
      }
    }
  },
  40476: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => jJ
    });
    var FJ = ZJ(36174),
      UJ = ZJ(36207),
      eJ = ZJ(38790),
      XJ = ZJ(36177),
      AJ = ZJ(36231);
    class qJ {
      constructor(JJ, cJ, ZJ, FJ) {
        this.name = JJ, this.worldAxisForNormal = cJ, this.worldAxisForFileX = ZJ, this.worldAxisForFileY = FJ
      }
    }
    class jJ {
      static _NearestPow2Floor(JJ) {
        return JJ <= 1 ? 1 : 1 << Math.floor(Math.log2(JJ))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(JJ) {
        if (!JJ.isCube) return null;
        JJ.Qy()?.gn().flushFramebuffer();
        const cJ = JJ.getSize().width,
          ZJ = JJ._sphericalPolynomialTargetSize,
          FJ = ZJ > 0 ? this._NearestPow2Floor(ZJ) : 0,
          UJ = !JJ.noMipmap && !0 === JJ._texture?.generateMipMaps,
          eJ = FJ > 0 && FJ < cJ && UJ,
          XJ = eJ ? Math.max(0, Math.round(Math.log2(cJ / FJ))) : 0,
          AJ = eJ ? Math.max(1, Math.floor(cJ / Math.pow(2, XJ))) : cJ,
          qJ = JJ.readPixels(0, XJ, void 0, !1),
          jJ = JJ.readPixels(1, XJ, void 0, !1);
        let YJ, hJ;
        JJ.isRenderTarget ? (YJ = JJ.readPixels(3, XJ, void 0, !1), hJ = JJ.readPixels(2, XJ, void 0, !1)) : (YJ = JJ.readPixels(2, XJ, void 0, !1), hJ = JJ.readPixels(3, XJ, void 0, !1));
        const DJ = JJ.readPixels(4, XJ, void 0, !1),
          sJ = JJ.readPixels(5, XJ, void 0, !1),
          nJ = JJ.gammaSpace,
          GJ = FJ > 0 && FJ < cJ && !eJ;
        return new Promise((JJ => {
          Promise.all([jJ, qJ, YJ, hJ, DJ, sJ]).then((ZJ => {
            let [UJ, eJ, XJ, qJ, jJ, YJ] = ZJ, hJ = AJ;
            if (GJ) {
              const JJ = 4;
              UJ = this._DownsampleFace(UJ, cJ, FJ, JJ), eJ = this._DownsampleFace(eJ, cJ, FJ, JJ), XJ = this._DownsampleFace(XJ, cJ, FJ, JJ), qJ = this._DownsampleFace(qJ, cJ, FJ, JJ), jJ = this._DownsampleFace(jJ, cJ, FJ, JJ), YJ = this._DownsampleFace(YJ, cJ, FJ, JJ), hJ = FJ
            }
            const DJ = {
              size: hJ,
              right: eJ,
              left: UJ,
              up: XJ,
              down: qJ,
              front: jJ,
              back: YJ,
              format: 5,
              type: UJ instanceof Float32Array ? 1 : 0,
              gammaSpace: nJ
            };
            JJ(this.ConvertCubeMapToSphericalPolynomial(DJ))
          }))
        }))
      }
      static _AreaElement(JJ, cJ) {
        return Math.atan2(JJ * cJ, Math.sqrt(JJ * JJ + cJ * cJ + 1))
      }
      static _DownsampleFace(JJ, cJ, ZJ, FJ) {
        const UJ = JJ instanceof Float32Array ? JJ : Float32Array.from(JJ),
          eJ = ZJ * ZJ * FJ,
          XJ = new Float32Array(eJ),
          AJ = cJ / ZJ,
          qJ = 1 / (AJ * AJ);
        for (let YJ = 0; YJ < ZJ; YJ++) {
          const JJ = Math.floor(YJ * AJ),
            eJ = Math.floor((YJ + 1) * AJ);
          for (let jJ = 0; jJ < ZJ; jJ++) {
            const hJ = Math.floor(jJ * AJ),
              DJ = Math.floor((jJ + 1) * AJ),
              sJ = (YJ * ZJ + jJ) * FJ;
            for (let ZJ = 0; ZJ < FJ; ZJ++) {
              let AJ = 0;
              for (let XJ = JJ; XJ < eJ; XJ++)
                for (let JJ = hJ; JJ < DJ; JJ++) AJ += UJ[(XJ * cJ + JJ) * FJ + ZJ];
              XJ[sJ + ZJ] = AJ * qJ
            }
          }
        }
        if (JJ instanceof Float32Array) return XJ;
        const jJ = new(0, JJ.constructor)(eJ);
        for (let YJ = 0; YJ < eJ; YJ++) jJ[YJ] = XJ[YJ] + .5 | 0;
        return jJ
      }
      static ConvertCubeMapToSphericalPolynomial(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZJ = cJ > 0 ? this._NearestPow2Floor(cJ) : 0;
        if (ZJ > 0 && JJ.size > ZJ) {
          const cJ = 5 === JJ.format ? 4 : 3,
            FJ = ["right", "left", "up", "down", "front", "back"],
            UJ = {};
          for (const eJ of FJ) UJ[eJ] = this._DownsampleFace(JJ[eJ], JJ.size, ZJ, cJ);
          JJ = {
            ...JJ,
            ...UJ,
            size: ZJ
          }
        }
        const FJ = new eJ.e;
        let qJ = 0;
        const jJ = 2 / JJ.size,
          YJ = jJ,
          hJ = .5 * jJ,
          DJ = hJ - 1;
        for (let eJ = 0; eJ < 6; eJ++) {
          const cJ = this._FileFaces[eJ],
            ZJ = JJ[cJ.name];
          let sJ = DJ;
          const nJ = 5 === JJ.format ? 4 : 3;
          for (let eJ = 0; eJ < JJ.size; eJ++) {
            let GJ = DJ;
            for (let YJ = 0; YJ < JJ.size; YJ++) {
              const DJ = cJ.worldAxisForFileX.scale(GJ).add(cJ.worldAxisForFileY.scale(sJ)).add(cJ.worldAxisForNormal);
              DJ.normalize();
              const fJ = this._AreaElement(GJ - hJ, sJ - hJ) - this._AreaElement(GJ - hJ, sJ + hJ) - this._AreaElement(GJ + hJ, sJ - hJ) + this._AreaElement(GJ + hJ, sJ + hJ);
              let xJ = ZJ[eJ * JJ.size * nJ + YJ * nJ + 0],
                rJ = ZJ[eJ * JJ.size * nJ + YJ * nJ + 1],
                vJ = ZJ[eJ * JJ.size * nJ + YJ * nJ + 2];
              isNaN(xJ) && (xJ = 0), isNaN(rJ) && (rJ = 0), isNaN(vJ) && (vJ = 0), 0 === JJ.type && (xJ /= 255, rJ /= 255, vJ /= 255), JJ.gammaSpace && (xJ = Math.pow((0, UJ.Clamp)(xJ), XJ.j), rJ = Math.pow((0, UJ.Clamp)(rJ), XJ.j), vJ = Math.pow((0, UJ.Clamp)(vJ), XJ.j));
              const mJ = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const JJ = Math.max(xJ, rJ, vJ);
                if (JJ > mJ) {
                  const cJ = mJ / JJ;
                  xJ *= cJ, rJ *= cJ, vJ *= cJ
                }
              } else xJ = (0, UJ.Clamp)(xJ, 0, mJ), rJ = (0, UJ.Clamp)(rJ, 0, mJ), vJ = (0, UJ.Clamp)(vJ, 0, mJ);
              const QJ = new AJ.e(xJ, rJ, vJ);
              FJ.addLight(DJ, QJ, fJ), qJ += fJ, GJ += jJ
            }
            sJ += YJ
          }
        }
        const sJ = 6 * (4 * Math.PI) / 6 / qJ;
        return FJ.scaleInPlace(sJ), FJ.convertIncidentRadianceToIrradiance(), FJ.convertIrradianceToLambertianRadiance(), eJ.h.FromHarmonics(FJ)
      }
    }
    jJ._FileFaces = [new qJ("right", new FJ.j(1, 0, 0), new FJ.j(0, 0, -1), new FJ.j(0, -1, 0)), new qJ("left", new FJ.j(-1, 0, 0), new FJ.j(0, 0, 1), new FJ.j(0, -1, 0)), new qJ("up", new FJ.j(0, 1, 0), new FJ.j(1, 0, 0), new FJ.j(0, 0, 1)), new qJ("down", new FJ.j(0, -1, 0), new FJ.j(1, 0, 0), new FJ.j(0, 0, -1)), new qJ("front", new FJ.j(0, 0, 1), new FJ.j(1, 0, 0), new FJ.j(0, -1, 0)), new qJ("back", new FJ.j(0, 0, -1), new FJ.j(-1, 0, 0), new FJ.j(0, -1, 0))], jJ.MAX_HDRI_VALUE = 4096, jJ.PRESERVE_CLAMPED_COLORS = !1
  },
  40473: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      DDSTools: () => nJ
    });
    var FJ = ZJ(36207),
      UJ = ZJ(37660),
      eJ = ZJ(40476),
      XJ = ZJ(38862);
    const AJ = 131072,
      qJ = 131072;

    function jJ(JJ) {
      return JJ.charCodeAt(0) + (JJ.charCodeAt(1) << 8) + (JJ.charCodeAt(2) << 16) + (JJ.charCodeAt(3) << 24)
    }
    const YJ = jJ("DXT1"),
      hJ = jJ("DXT3"),
      DJ = jJ("DXT5"),
      sJ = jJ("DX10");
    class nJ {
      static GetDDSInfo(JJ) {
        const cJ = new Int32Array(JJ.buffer, JJ.byteOffset, 31),
          ZJ = new Int32Array(JJ.buffer, JJ.byteOffset, 35);
        let FJ = 1;
        cJ[2] & AJ && (FJ = Math.max(1, cJ[7]));
        const UJ = cJ[21],
          eJ = UJ === sJ ? ZJ[32] : 0;
        let XJ = 0;
        switch (UJ) {
          case 113:
            XJ = 2;
            break;
          case 116:
            XJ = 1;
            break;
          case sJ:
            if (10 === eJ) {
              XJ = 2;
              break
            }
            if (2 === eJ) {
              XJ = 1;
              break
            }
        }
        return {
          width: cJ[4],
          height: cJ[3],
          mipmapCount: FJ,
          isFourCC: 4 === (4 & cJ[20]),
          isRGB: 64 === (64 & cJ[20]),
          isLuminance: (cJ[20] & qJ) === qJ,
          isCube: 512 === (512 & cJ[28]),
          isCompressed: UJ === YJ || UJ === hJ || UJ === DJ,
          dxgiFormat: eJ,
          textureType: XJ
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(JJ, cJ, ZJ, FJ, UJ, eJ) {
        const AJ = new Float32Array(FJ),
          qJ = new Uint16Array(UJ, ZJ);
        let jJ = 0;
        for (let YJ = 0; YJ < cJ; YJ++)
          for (let cJ = 0; cJ < JJ; cJ++) {
            const ZJ = 4 * (cJ + YJ * JJ);
            AJ[jJ] = (0, XJ.d)(qJ[ZJ]), AJ[jJ + 1] = (0, XJ.d)(qJ[ZJ + 1]), AJ[jJ + 2] = (0, XJ.d)(qJ[ZJ + 2]), nJ.StoreLODInAlphaChannel ? AJ[jJ + 3] = eJ : AJ[jJ + 3] = (0, XJ.d)(qJ[ZJ + 3]), jJ += 4
          }
        return AJ
      }
      static _GetHalfFloatRGBAArrayBuffer(JJ, cJ, ZJ, FJ, UJ, eJ) {
        if (nJ.StoreLODInAlphaChannel) {
          const AJ = new Uint16Array(FJ),
            qJ = new Uint16Array(UJ, ZJ);
          let jJ = 0;
          for (let ZJ = 0; ZJ < cJ; ZJ++)
            for (let cJ = 0; cJ < JJ; cJ++) {
              const FJ = 4 * (cJ + ZJ * JJ);
              AJ[jJ] = qJ[FJ], AJ[jJ + 1] = qJ[FJ + 1], AJ[jJ + 2] = qJ[FJ + 2], AJ[jJ + 3] = (0, XJ.j)(eJ), jJ += 4
            }
          return AJ
        }
        return new Uint16Array(UJ, ZJ, FJ)
      }
      static _GetFloatRGBAArrayBuffer(JJ, cJ, ZJ, FJ, UJ, eJ) {
        if (nJ.StoreLODInAlphaChannel) {
          const XJ = new Float32Array(FJ),
            AJ = new Float32Array(UJ, ZJ);
          let qJ = 0;
          for (let ZJ = 0; ZJ < cJ; ZJ++)
            for (let cJ = 0; cJ < JJ; cJ++) {
              const FJ = 4 * (cJ + ZJ * JJ);
              XJ[qJ] = AJ[FJ], XJ[qJ + 1] = AJ[FJ + 1], XJ[qJ + 2] = AJ[FJ + 2], XJ[qJ + 3] = eJ, qJ += 4
            }
          return XJ
        }
        return new Float32Array(UJ, ZJ, FJ)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(JJ, cJ, ZJ, FJ, UJ, eJ) {
        const AJ = new Uint16Array(FJ),
          qJ = new Float32Array(UJ, ZJ);
        let jJ = 0;
        for (let YJ = 0; YJ < cJ; YJ++)
          for (let cJ = 0; cJ < JJ; cJ++) AJ[jJ] = (0, XJ.j)(qJ[jJ]), AJ[jJ + 1] = (0, XJ.j)(qJ[jJ + 1]), AJ[jJ + 2] = (0, XJ.j)(qJ[jJ + 2]), nJ.StoreLODInAlphaChannel ? AJ[jJ + 3] = (0, XJ.j)(eJ) : AJ[jJ + 3] = (0, XJ.j)(qJ[jJ + 3]), jJ += 4;
        return AJ
      }
      static _GetFloatAsUIntRGBAArrayBuffer(JJ, cJ, ZJ, UJ, eJ, XJ) {
        const AJ = new Uint8Array(UJ),
          qJ = new Float32Array(eJ, ZJ);
        let jJ = 0;
        for (let YJ = 0; YJ < cJ; YJ++)
          for (let cJ = 0; cJ < JJ; cJ++) {
            const ZJ = 4 * (cJ + YJ * JJ);
            AJ[jJ] = 255 * (0, FJ.Clamp)(qJ[ZJ]), AJ[jJ + 1] = 255 * (0, FJ.Clamp)(qJ[ZJ + 1]), AJ[jJ + 2] = 255 * (0, FJ.Clamp)(qJ[ZJ + 2]), nJ.StoreLODInAlphaChannel ? AJ[jJ + 3] = XJ : AJ[jJ + 3] = 255 * (0, FJ.Clamp)(qJ[ZJ + 3]), jJ += 4
          }
        return AJ
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(JJ, cJ, ZJ, UJ, eJ, AJ) {
        const qJ = new Uint8Array(UJ),
          jJ = new Uint16Array(eJ, ZJ);
        let YJ = 0;
        for (let hJ = 0; hJ < cJ; hJ++)
          for (let cJ = 0; cJ < JJ; cJ++) {
            const ZJ = 4 * (cJ + hJ * JJ);
            qJ[YJ] = 255 * (0, FJ.Clamp)((0, XJ.d)(jJ[ZJ])), qJ[YJ + 1] = 255 * (0, FJ.Clamp)((0, XJ.d)(jJ[ZJ + 1])), qJ[YJ + 2] = 255 * (0, FJ.Clamp)((0, XJ.d)(jJ[ZJ + 2])), nJ.StoreLODInAlphaChannel ? qJ[YJ + 3] = AJ : qJ[YJ + 3] = 255 * (0, FJ.Clamp)((0, XJ.d)(jJ[ZJ + 3])), YJ += 4
          }
        return qJ
      }
      static _GetRGBAArrayBuffer(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ) {
        const jJ = new Uint8Array(FJ),
          YJ = new Uint8Array(UJ, ZJ);
        let hJ = 0;
        for (let DJ = 0; DJ < cJ; DJ++)
          for (let cJ = 0; cJ < JJ; cJ++) {
            const ZJ = 4 * (cJ + DJ * JJ);
            jJ[hJ] = YJ[ZJ + eJ], jJ[hJ + 1] = YJ[ZJ + XJ], jJ[hJ + 2] = YJ[ZJ + AJ], jJ[hJ + 3] = YJ[ZJ + qJ], hJ += 4
          }
        return jJ
      }
      static _ExtractLongWordOrder(JJ) {
        return 0 === JJ || 255 === JJ || -16777216 === JJ ? 0 : 1 + nJ._ExtractLongWordOrder(JJ >> 8)
      }
      static _GetRGBArrayBuffer(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ) {
        const qJ = new Uint8Array(FJ),
          jJ = new Uint8Array(UJ, ZJ);
        let YJ = 0;
        for (let hJ = 0; hJ < cJ; hJ++)
          for (let cJ = 0; cJ < JJ; cJ++) {
            const ZJ = 3 * (cJ + hJ * JJ);
            qJ[YJ] = jJ[ZJ + eJ], qJ[YJ + 1] = jJ[ZJ + XJ], qJ[YJ + 2] = jJ[ZJ + AJ], YJ += 3
          }
        return qJ
      }
      static _GetLuminanceArrayBuffer(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = new Uint8Array(FJ),
          XJ = new Uint8Array(UJ, ZJ);
        let AJ = 0;
        for (let qJ = 0; qJ < cJ; qJ++)
          for (let cJ = 0; cJ < JJ; cJ++) {
            const ZJ = cJ + qJ * JJ;
            eJ[AJ] = XJ[ZJ], AJ++
          }
        return eJ
      }
      static UploadDDSLevels(JJ, cJ, ZJ, FJ, XJ, qJ) {
        let jJ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          GJ = arguments.length > 7 ? arguments[7] : void 0,
          fJ = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          xJ = null;
        FJ.sphericalPolynomial && (xJ = []);
        const rJ = !!JJ.getCaps().s3tc;
        cJ.generateMipMaps = XJ;
        const vJ = new Int32Array(ZJ.buffer, ZJ.byteOffset, 31);
        let mJ, QJ, EJ, VJ, KJ, yJ, SJ, IJ = 0,
          MJ = 0,
          bJ = 1;
        if (542327876 !== vJ[0]) return void UJ.c.Error("Invalid magic number in DDS header");
        if (!FJ.isFourCC && !FJ.isRGB && !FJ.isLuminance) return void UJ.c.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (FJ.isCompressed && !rJ) return void UJ.c.Error("Compressed textures are not supported on this platform.");
        let wJ = vJ[22];
        VJ = vJ[1] + 4;
        let WJ = !1;
        if (FJ.isFourCC) switch (mJ = vJ[21], mJ) {
          case YJ:
            bJ = 8, MJ = 33777;
            break;
          case hJ:
            bJ = 16, MJ = 33778;
            break;
          case DJ:
            bJ = 16, MJ = 33779;
            break;
          case 113:
            WJ = !0, wJ = 64;
            break;
          case 116:
            WJ = !0, wJ = 128;
            break;
          case sJ: {
            VJ += 20;
            let JJ = !1;
            switch (FJ.dxgiFormat) {
              case 10:
                WJ = !0, wJ = 64, JJ = !0;
                break;
              case 2:
                WJ = !0, wJ = 128, JJ = !0;
                break;
              case 88:
                FJ.isRGB = !0, FJ.isFourCC = !1, wJ = 32, JJ = !0
            }
            if (JJ) break
          }
          default:
            return void UJ.c.Error(["Unsupported FourCC code:", (gJ = mJ, String.fromCharCode(255 & gJ, gJ >> 8 & 255, gJ >> 16 & 255, gJ >> 24 & 255))])
        }
        var gJ;
        const HJ = nJ._ExtractLongWordOrder(vJ[23]),
          PJ = nJ._ExtractLongWordOrder(vJ[24]),
          kJ = nJ._ExtractLongWordOrder(vJ[25]),
          pJ = nJ._ExtractLongWordOrder(vJ[26]);
        WJ && (MJ = JJ._getRGBABufferInternalSizedFormat(FJ.textureType)), yJ = 1, vJ[2] & AJ && !1 !== XJ && (yJ = Math.max(1, vJ[7]));
        const dJ = GJ || 0,
          zJ = JJ.getCaps();
        for (let UJ = dJ; UJ < qJ; UJ++) {
          for (QJ = vJ[4], EJ = vJ[3], SJ = 0; SJ < yJ; ++SJ) {
            if (-1 === jJ || jJ === SJ) {
              const eJ = -1 === jJ ? SJ : 0;
              if (!FJ.isCompressed && FJ.isFourCC) {
                cJ.format = 5, IJ = QJ * EJ * 4;
                let FJ = null;
                if (JJ._badOS || JJ._badDesktopOS || !zJ.textureHalfFloat && !zJ.textureFloat) 128 === wJ ? (FJ = nJ._GetFloatAsUIntRGBAArrayBuffer(QJ, EJ, ZJ.byteOffset + VJ, IJ, ZJ.buffer, eJ), xJ && 0 == eJ && xJ.push(nJ._GetFloatRGBAArrayBuffer(QJ, EJ, ZJ.byteOffset + VJ, IJ, ZJ.buffer, eJ))) : 64 === wJ && (FJ = nJ._GetHalfFloatAsUIntRGBAArrayBuffer(QJ, EJ, ZJ.byteOffset + VJ, IJ, ZJ.buffer, eJ), xJ && 0 == eJ && xJ.push(nJ._GetHalfFloatAsFloatRGBAArrayBuffer(QJ, EJ, ZJ.byteOffset + VJ, IJ, ZJ.buffer, eJ))), cJ.type = 0;
                else {
                  const JJ = zJ.textureFloat && (fJ && zJ.textureFloatLinearFiltering || !fJ),
                    UJ = zJ.textureHalfFloat && (fJ && zJ.textureHalfFloatLinearFiltering || !fJ),
                    XJ = (128 === wJ || 64 === wJ && !UJ) && JJ ? 1 : (64 === wJ || 128 === wJ && !JJ) && UJ ? 2 : 0;
                  let AJ, qJ = null;
                  if (128 === wJ) switch (XJ) {
                    case 1:
                      AJ = nJ._GetFloatRGBAArrayBuffer, qJ = null;
                      break;
                    case 2:
                      AJ = nJ._GetFloatAsHalfFloatRGBAArrayBuffer, qJ = nJ._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      AJ = nJ._GetFloatAsUIntRGBAArrayBuffer, qJ = nJ._GetFloatRGBAArrayBuffer
                  } else switch (XJ) {
                    case 1:
                      AJ = nJ._GetHalfFloatAsFloatRGBAArrayBuffer, qJ = null;
                      break;
                    case 2:
                      AJ = nJ._GetHalfFloatRGBAArrayBuffer, qJ = nJ._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      AJ = nJ._GetHalfFloatAsUIntRGBAArrayBuffer, qJ = nJ._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  cJ.type = XJ, FJ = AJ(QJ, EJ, ZJ.byteOffset + VJ, IJ, ZJ.buffer, eJ), xJ && 0 == eJ && xJ.push(qJ ? qJ(QJ, EJ, ZJ.byteOffset + VJ, IJ, ZJ.buffer, eJ) : FJ)
                }
                FJ && JJ._uploadDataToTextureDirectly(cJ, FJ, UJ, eJ)
              } else if (FJ.isRGB) cJ.type = 0, 24 === wJ ? (cJ.format = 4, IJ = QJ * EJ * 3, KJ = nJ._GetRGBArrayBuffer(QJ, EJ, ZJ.byteOffset + VJ, IJ, ZJ.buffer, HJ, PJ, kJ), JJ._uploadDataToTextureDirectly(cJ, KJ, UJ, eJ)) : (cJ.format = 5, IJ = QJ * EJ * 4, KJ = nJ._GetRGBAArrayBuffer(QJ, EJ, ZJ.byteOffset + VJ, IJ, ZJ.buffer, HJ, PJ, kJ, pJ), JJ._uploadDataToTextureDirectly(cJ, KJ, UJ, eJ));
              else if (FJ.isLuminance) {
                const FJ = JJ._getUnpackAlignement(),
                  XJ = QJ;
                IJ = Math.floor((QJ + FJ - 1) / FJ) * FJ * (EJ - 1) + XJ, KJ = nJ._GetLuminanceArrayBuffer(QJ, EJ, ZJ.byteOffset + VJ, IJ, ZJ.buffer), cJ.format = 1, cJ.type = 0, JJ._uploadDataToTextureDirectly(cJ, KJ, UJ, eJ)
              } else IJ = Math.max(4, QJ) / 4 * Math.max(4, EJ) / 4 * bJ, KJ = new Uint8Array(ZJ.buffer, ZJ.byteOffset + VJ, IJ), cJ.type = 0, JJ._uploadCompressedDataToTextureDirectly(cJ, MJ, QJ, EJ, KJ, UJ, eJ)
            }
            VJ += wJ ? QJ * EJ * (wJ / 8) : IJ, QJ *= .5, EJ *= .5, QJ = Math.max(1, QJ), EJ = Math.max(1, EJ)
          }
          if (void 0 !== GJ) break
        }
        xJ && xJ.length > 0 ? FJ.sphericalPolynomial = eJ.c.ConvertCubeMapToSphericalPolynomial({
          size: vJ[4],
          right: xJ[0],
          left: xJ[1],
          up: xJ[2],
          down: xJ[3],
          front: xJ[4],
          back: xJ[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : FJ.sphericalPolynomial = void 0
      }
    }
    nJ.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);