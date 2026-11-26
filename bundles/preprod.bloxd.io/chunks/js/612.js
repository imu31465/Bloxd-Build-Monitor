export const id = 612;
export const ids = [612];
export const modules = {
  44458: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => DU
    });
    var cU = zU(37819),
      yU = zU(37855),
      QU = zU(41103),
      AU = zU(37825),
      FU = zU(37923);
    class oU {
      constructor(UU, XU, zU, cU) {
        this.name = UU, this.worldAxisForNormal = XU, this.worldAxisForFileX = zU, this.worldAxisForFileY = cU
      }
    }
    class DU {
      static _NearestPow2Floor(UU) {
        return UU <= 1 ? 1 : 1 << Math.floor(Math.log2(UU))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(UU) {
        if (!UU.isCube) return null;
        UU.nS()?.qp().flushFramebuffer();
        const XU = UU.getSize().width,
          zU = UU._sphericalPolynomialTargetSize,
          cU = zU > 0 ? this._NearestPow2Floor(zU) : 0,
          yU = !UU.noMipmap && !0 === UU._texture?.generateMipMaps,
          QU = cU > 0 && cU < XU && yU,
          AU = QU ? Math.max(0, Math.round(Math.log2(XU / cU))) : 0,
          FU = QU ? Math.max(1, Math.floor(XU / Math.pow(2, AU))) : XU,
          oU = UU.readPixels(0, AU, void 0, !1),
          DU = UU.readPixels(1, AU, void 0, !1);
        let EU, YU;
        UU.isRenderTarget ? (EU = UU.readPixels(3, AU, void 0, !1), YU = UU.readPixels(2, AU, void 0, !1)) : (EU = UU.readPixels(2, AU, void 0, !1), YU = UU.readPixels(3, AU, void 0, !1));
        const NU = UU.readPixels(4, AU, void 0, !1),
          IU = UU.readPixels(5, AU, void 0, !1),
          pU = UU.gammaSpace,
          aU = cU > 0 && cU < XU && !QU;
        return new Promise((UU => {
          Promise.all([DU, oU, EU, YU, NU, IU]).then((zU => {
            let [yU, QU, AU, oU, DU, EU] = zU, YU = FU;
            if (aU) {
              const UU = 4;
              yU = this._DownsampleFace(yU, XU, cU, UU), QU = this._DownsampleFace(QU, XU, cU, UU), AU = this._DownsampleFace(AU, XU, cU, UU), oU = this._DownsampleFace(oU, XU, cU, UU), DU = this._DownsampleFace(DU, XU, cU, UU), EU = this._DownsampleFace(EU, XU, cU, UU), YU = cU
            }
            const NU = {
              size: YU,
              right: QU,
              left: yU,
              up: AU,
              down: oU,
              front: DU,
              back: EU,
              format: 5,
              type: yU instanceof Float32Array ? 1 : 0,
              gammaSpace: pU
            };
            UU(this.ConvertCubeMapToSphericalPolynomial(NU))
          }))
        }))
      }
      static _AreaElement(UU, XU) {
        return Math.atan2(UU * XU, Math.sqrt(UU * UU + XU * XU + 1))
      }
      static _DownsampleFace(UU, XU, zU, cU) {
        const yU = UU instanceof Float32Array ? UU : Float32Array.from(UU),
          QU = zU * zU * cU,
          AU = new Float32Array(QU),
          FU = XU / zU,
          oU = 1 / (FU * FU);
        for (let EU = 0; EU < zU; EU++) {
          const UU = Math.floor(EU * FU),
            QU = Math.floor((EU + 1) * FU);
          for (let DU = 0; DU < zU; DU++) {
            const YU = Math.floor(DU * FU),
              NU = Math.floor((DU + 1) * FU),
              IU = (EU * zU + DU) * cU;
            for (let zU = 0; zU < cU; zU++) {
              let FU = 0;
              for (let AU = UU; AU < QU; AU++)
                for (let UU = YU; UU < NU; UU++) FU += yU[(AU * XU + UU) * cU + zU];
              AU[IU + zU] = FU * oU
            }
          }
        }
        if (UU instanceof Float32Array) return AU;
        const DU = new(0, UU.constructor)(QU);
        for (let EU = 0; EU < QU; EU++) DU[EU] = AU[EU] + .5 | 0;
        return DU
      }
      static ConvertCubeMapToSphericalPolynomial(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const zU = XU > 0 ? this._NearestPow2Floor(XU) : 0;
        if (zU > 0 && UU.size > zU) {
          const XU = 5 === UU.format ? 4 : 3,
            cU = ["right", "left", "up", "down", "front", "back"],
            yU = {};
          for (const QU of cU) yU[QU] = this._DownsampleFace(UU[QU], UU.size, zU, XU);
          UU = {
            ...UU,
            ...yU,
            size: zU
          }
        }
        const cU = new QU.b;
        let oU = 0;
        const DU = 2 / UU.size,
          EU = DU,
          YU = .5 * DU,
          NU = YU - 1;
        for (let QU = 0; QU < 6; QU++) {
          const XU = this._FileFaces[QU],
            zU = UU[XU.name];
          let IU = NU;
          const pU = 5 === UU.format ? 4 : 3;
          for (let QU = 0; QU < UU.size; QU++) {
            let aU = NU;
            for (let EU = 0; EU < UU.size; EU++) {
              const NU = XU.worldAxisForFileX.scale(aU).add(XU.worldAxisForFileY.scale(IU)).add(XU.worldAxisForNormal);
              NU.normalize();
              const tU = this._AreaElement(aU - YU, IU - YU) - this._AreaElement(aU - YU, IU + YU) - this._AreaElement(aU + YU, IU - YU) + this._AreaElement(aU + YU, IU + YU);
              let gU = zU[QU * UU.size * pU + EU * pU + 0],
                kU = zU[QU * UU.size * pU + EU * pU + 1],
                GU = zU[QU * UU.size * pU + EU * pU + 2];
              isNaN(gU) && (gU = 0), isNaN(kU) && (kU = 0), isNaN(GU) && (GU = 0), 0 === UU.type && (gU /= 255, kU /= 255, GU /= 255), UU.gammaSpace && (gU = Math.pow((0, yU.Clamp)(gU), AU.h), kU = Math.pow((0, yU.Clamp)(kU), AU.h), GU = Math.pow((0, yU.Clamp)(GU), AU.h));
              const BU = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const UU = Math.max(gU, kU, GU);
                if (UU > BU) {
                  const XU = BU / UU;
                  gU *= XU, kU *= XU, GU *= XU
                }
              } else gU = (0, yU.Clamp)(gU, 0, BU), kU = (0, yU.Clamp)(kU, 0, BU), GU = (0, yU.Clamp)(GU, 0, BU);
              const ZU = new FU.b(gU, kU, GU);
              cU.addLight(NU, ZU, tU), oU += tU, aU += DU
            }
            IU += EU
          }
        }
        const IU = 6 * (4 * Math.PI) / 6 / oU;
        return cU.scaleInPlace(IU), cU.convertIncidentRadianceToIrradiance(), cU.convertIrradianceToLambertianRadiance(), QU.c.FromHarmonics(cU)
      }
    }
    DU._FileFaces = [new oU("right", new cU.q(1, 0, 0), new cU.q(0, 0, -1), new cU.q(0, -1, 0)), new oU("left", new cU.q(-1, 0, 0), new cU.q(0, 0, 1), new cU.q(0, -1, 0)), new oU("up", new cU.q(0, 1, 0), new cU.q(1, 0, 0), new cU.q(0, 0, 1)), new oU("down", new cU.q(0, -1, 0), new cU.q(1, 0, 0), new cU.q(0, 0, -1)), new oU("front", new cU.q(0, 0, 1), new cU.q(1, 0, 0), new cU.q(0, -1, 0)), new oU("back", new cU.q(0, 0, -1), new cU.q(-1, 0, 0), new cU.q(0, -1, 0))], DU.MAX_HDRI_VALUE = 4096, DU.PRESERVE_CLAMPED_COLORS = !1
  },
  44454: (UU, XU, zU) => {
    zU.d(XU, {
      DDSTools: () => pU
    });
    var cU = zU(37855),
      yU = zU(39493),
      QU = zU(44458),
      AU = zU(41179);
    const FU = 131072,
      oU = 131072;

    function DU(UU) {
      return UU.charCodeAt(0) + (UU.charCodeAt(1) << 8) + (UU.charCodeAt(2) << 16) + (UU.charCodeAt(3) << 24)
    }
    const EU = DU("DXT1"),
      YU = DU("DXT3"),
      NU = DU("DXT5"),
      IU = DU("DX10");
    class pU {
      static GetDDSInfo(UU) {
        const XU = new Int32Array(UU.buffer, UU.byteOffset, 31),
          zU = new Int32Array(UU.buffer, UU.byteOffset, 35);
        let cU = 1;
        XU[2] & FU && (cU = Math.max(1, XU[7]));
        const yU = XU[21],
          QU = yU === IU ? zU[32] : 0;
        let AU = 0;
        switch (yU) {
          case 113:
            AU = 2;
            break;
          case 116:
            AU = 1;
            break;
          case IU:
            if (10 === QU) {
              AU = 2;
              break
            }
            if (2 === QU) {
              AU = 1;
              break
            }
        }
        return {
          width: XU[4],
          height: XU[3],
          mipmapCount: cU,
          isFourCC: 4 === (4 & XU[20]),
          isRGB: 64 === (64 & XU[20]),
          isLuminance: (XU[20] & oU) === oU,
          isCube: 512 === (512 & XU[28]),
          isCompressed: yU === EU || yU === YU || yU === NU,
          dxgiFormat: QU,
          textureType: AU
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(UU, XU, zU, cU, yU, QU) {
        const FU = new Float32Array(cU),
          oU = new Uint16Array(yU, zU);
        let DU = 0;
        for (let EU = 0; EU < XU; EU++)
          for (let XU = 0; XU < UU; XU++) {
            const zU = 4 * (XU + EU * UU);
            FU[DU] = (0, AU.e)(oU[zU]), FU[DU + 1] = (0, AU.e)(oU[zU + 1]), FU[DU + 2] = (0, AU.e)(oU[zU + 2]), pU.StoreLODInAlphaChannel ? FU[DU + 3] = QU : FU[DU + 3] = (0, AU.e)(oU[zU + 3]), DU += 4
          }
        return FU
      }
      static _GetHalfFloatRGBAArrayBuffer(UU, XU, zU, cU, yU, QU) {
        if (pU.StoreLODInAlphaChannel) {
          const FU = new Uint16Array(cU),
            oU = new Uint16Array(yU, zU);
          let DU = 0;
          for (let zU = 0; zU < XU; zU++)
            for (let XU = 0; XU < UU; XU++) {
              const cU = 4 * (XU + zU * UU);
              FU[DU] = oU[cU], FU[DU + 1] = oU[cU + 1], FU[DU + 2] = oU[cU + 2], FU[DU + 3] = (0, AU.h)(QU), DU += 4
            }
          return FU
        }
        return new Uint16Array(yU, zU, cU)
      }
      static _GetFloatRGBAArrayBuffer(UU, XU, zU, cU, yU, QU) {
        if (pU.StoreLODInAlphaChannel) {
          const AU = new Float32Array(cU),
            FU = new Float32Array(yU, zU);
          let oU = 0;
          for (let zU = 0; zU < XU; zU++)
            for (let XU = 0; XU < UU; XU++) {
              const cU = 4 * (XU + zU * UU);
              AU[oU] = FU[cU], AU[oU + 1] = FU[cU + 1], AU[oU + 2] = FU[cU + 2], AU[oU + 3] = QU, oU += 4
            }
          return AU
        }
        return new Float32Array(yU, zU, cU)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(UU, XU, zU, cU, yU, QU) {
        const FU = new Uint16Array(cU),
          oU = new Float32Array(yU, zU);
        let DU = 0;
        for (let EU = 0; EU < XU; EU++)
          for (let XU = 0; XU < UU; XU++) FU[DU] = (0, AU.h)(oU[DU]), FU[DU + 1] = (0, AU.h)(oU[DU + 1]), FU[DU + 2] = (0, AU.h)(oU[DU + 2]), pU.StoreLODInAlphaChannel ? FU[DU + 3] = (0, AU.h)(QU) : FU[DU + 3] = (0, AU.h)(oU[DU + 3]), DU += 4;
        return FU
      }
      static _GetFloatAsUIntRGBAArrayBuffer(UU, XU, zU, yU, QU, AU) {
        const FU = new Uint8Array(yU),
          oU = new Float32Array(QU, zU);
        let DU = 0;
        for (let EU = 0; EU < XU; EU++)
          for (let XU = 0; XU < UU; XU++) {
            const zU = 4 * (XU + EU * UU);
            FU[DU] = 255 * (0, cU.Clamp)(oU[zU]), FU[DU + 1] = 255 * (0, cU.Clamp)(oU[zU + 1]), FU[DU + 2] = 255 * (0, cU.Clamp)(oU[zU + 2]), pU.StoreLODInAlphaChannel ? FU[DU + 3] = AU : FU[DU + 3] = 255 * (0, cU.Clamp)(oU[zU + 3]), DU += 4
          }
        return FU
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(UU, XU, zU, yU, QU, FU) {
        const oU = new Uint8Array(yU),
          DU = new Uint16Array(QU, zU);
        let EU = 0;
        for (let YU = 0; YU < XU; YU++)
          for (let XU = 0; XU < UU; XU++) {
            const zU = 4 * (XU + YU * UU);
            oU[EU] = 255 * (0, cU.Clamp)((0, AU.e)(DU[zU])), oU[EU + 1] = 255 * (0, cU.Clamp)((0, AU.e)(DU[zU + 1])), oU[EU + 2] = 255 * (0, cU.Clamp)((0, AU.e)(DU[zU + 2])), pU.StoreLODInAlphaChannel ? oU[EU + 3] = FU : oU[EU + 3] = 255 * (0, cU.Clamp)((0, AU.e)(DU[zU + 3])), EU += 4
          }
        return oU
      }
      static _GetRGBAArrayBuffer(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
        const DU = new Uint8Array(cU),
          EU = new Uint8Array(yU, zU);
        let YU = 0;
        for (let NU = 0; NU < XU; NU++)
          for (let XU = 0; XU < UU; XU++) {
            const zU = 4 * (XU + NU * UU);
            DU[YU] = EU[zU + QU], DU[YU + 1] = EU[zU + AU], DU[YU + 2] = EU[zU + FU], DU[YU + 3] = EU[zU + oU], YU += 4
          }
        return DU
      }
      static _ExtractLongWordOrder(UU) {
        return 0 === UU || 255 === UU || -16777216 === UU ? 0 : 1 + pU._ExtractLongWordOrder(UU >> 8)
      }
      static _GetRGBArrayBuffer(UU, XU, zU, cU, yU, QU, AU, FU) {
        const oU = new Uint8Array(cU),
          DU = new Uint8Array(yU, zU);
        let EU = 0;
        for (let YU = 0; YU < XU; YU++)
          for (let XU = 0; XU < UU; XU++) {
            const zU = 3 * (XU + YU * UU);
            oU[EU] = DU[zU + QU], oU[EU + 1] = DU[zU + AU], oU[EU + 2] = DU[zU + FU], EU += 3
          }
        return oU
      }
      static _GetLuminanceArrayBuffer(UU, XU, zU, cU, yU) {
        const QU = new Uint8Array(cU),
          AU = new Uint8Array(yU, zU);
        let FU = 0;
        for (let oU = 0; oU < XU; oU++)
          for (let XU = 0; XU < UU; XU++) {
            const zU = XU + oU * UU;
            QU[FU] = AU[zU], FU++
          }
        return QU
      }
      static UploadDDSLevels(UU, XU, zU, cU, AU, oU) {
        let DU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          aU = arguments.length > 7 ? arguments[7] : void 0,
          tU = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          gU = null;
        cU.sphericalPolynomial && (gU = []);
        const kU = !!UU.getCaps().s3tc;
        XU.generateMipMaps = AU;
        const GU = new Int32Array(zU.buffer, zU.byteOffset, 31);
        let BU, ZU, RU, PU, WU, dU, LU, eU = 0,
          CU = 0,
          wU = 1;
        if (542327876 !== GU[0]) return void yU.b.Error("Invalid magic number in DDS header");
        if (!cU.isFourCC && !cU.isRGB && !cU.isLuminance) return void yU.b.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (cU.isCompressed && !kU) return void yU.b.Error("Compressed textures are not supported on this platform.");
        let qU = GU[22];
        PU = GU[1] + 4;
        let OU = !1;
        if (cU.isFourCC) switch (BU = GU[21], BU) {
          case EU:
            wU = 8, CU = 33777;
            break;
          case YU:
            wU = 16, CU = 33778;
            break;
          case NU:
            wU = 16, CU = 33779;
            break;
          case 113:
            OU = !0, qU = 64;
            break;
          case 116:
            OU = !0, qU = 128;
            break;
          case IU: {
            PU += 20;
            let UU = !1;
            switch (cU.dxgiFormat) {
              case 10:
                OU = !0, qU = 64, UU = !0;
                break;
              case 2:
                OU = !0, qU = 128, UU = !0;
                break;
              case 88:
                cU.isRGB = !0, cU.isFourCC = !1, qU = 32, UU = !0
            }
            if (UU) break
          }
          default:
            return void yU.b.Error(["Unsupported FourCC code:", (SU = BU, String.fromCharCode(255 & SU, SU >> 8 & 255, SU >> 16 & 255, SU >> 24 & 255))])
        }
        var SU;
        const rU = pU._ExtractLongWordOrder(GU[23]),
          uU = pU._ExtractLongWordOrder(GU[24]),
          fU = pU._ExtractLongWordOrder(GU[25]),
          iU = pU._ExtractLongWordOrder(GU[26]);
        OU && (CU = UU._getRGBABufferInternalSizedFormat(cU.textureType)), dU = 1, GU[2] & FU && !1 !== AU && (dU = Math.max(1, GU[7]));
        const HU = aU || 0,
          MU = UU.getCaps();
        for (let yU = HU; yU < oU; yU++) {
          for (ZU = GU[4], RU = GU[3], LU = 0; LU < dU; ++LU) {
            if (-1 === DU || DU === LU) {
              const QU = -1 === DU ? LU : 0;
              if (!cU.isCompressed && cU.isFourCC) {
                XU.format = 5, eU = ZU * RU * 4;
                let cU = null;
                if (UU._badOS || UU._badDesktopOS || !MU.textureHalfFloat && !MU.textureFloat) 128 === qU ? (cU = pU._GetFloatAsUIntRGBAArrayBuffer(ZU, RU, zU.byteOffset + PU, eU, zU.buffer, QU), gU && 0 == QU && gU.push(pU._GetFloatRGBAArrayBuffer(ZU, RU, zU.byteOffset + PU, eU, zU.buffer, QU))) : 64 === qU && (cU = pU._GetHalfFloatAsUIntRGBAArrayBuffer(ZU, RU, zU.byteOffset + PU, eU, zU.buffer, QU), gU && 0 == QU && gU.push(pU._GetHalfFloatAsFloatRGBAArrayBuffer(ZU, RU, zU.byteOffset + PU, eU, zU.buffer, QU))), XU.type = 0;
                else {
                  const UU = MU.textureFloat && (tU && MU.textureFloatLinearFiltering || !tU),
                    yU = MU.textureHalfFloat && (tU && MU.textureHalfFloatLinearFiltering || !tU),
                    AU = (128 === qU || 64 === qU && !yU) && UU ? 1 : (64 === qU || 128 === qU && !UU) && yU ? 2 : 0;
                  let FU, oU = null;
                  if (128 === qU) switch (AU) {
                    case 1:
                      FU = pU._GetFloatRGBAArrayBuffer, oU = null;
                      break;
                    case 2:
                      FU = pU._GetFloatAsHalfFloatRGBAArrayBuffer, oU = pU._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      FU = pU._GetFloatAsUIntRGBAArrayBuffer, oU = pU._GetFloatRGBAArrayBuffer
                  } else switch (AU) {
                    case 1:
                      FU = pU._GetHalfFloatAsFloatRGBAArrayBuffer, oU = null;
                      break;
                    case 2:
                      FU = pU._GetHalfFloatRGBAArrayBuffer, oU = pU._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      FU = pU._GetHalfFloatAsUIntRGBAArrayBuffer, oU = pU._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  XU.type = AU, cU = FU(ZU, RU, zU.byteOffset + PU, eU, zU.buffer, QU), gU && 0 == QU && gU.push(oU ? oU(ZU, RU, zU.byteOffset + PU, eU, zU.buffer, QU) : cU)
                }
                cU && UU._uploadDataToTextureDirectly(XU, cU, yU, QU)
              } else if (cU.isRGB) XU.type = 0, 24 === qU ? (XU.format = 4, eU = ZU * RU * 3, WU = pU._GetRGBArrayBuffer(ZU, RU, zU.byteOffset + PU, eU, zU.buffer, rU, uU, fU), UU._uploadDataToTextureDirectly(XU, WU, yU, QU)) : (XU.format = 5, eU = ZU * RU * 4, WU = pU._GetRGBAArrayBuffer(ZU, RU, zU.byteOffset + PU, eU, zU.buffer, rU, uU, fU, iU), UU._uploadDataToTextureDirectly(XU, WU, yU, QU));
              else if (cU.isLuminance) {
                const cU = UU._getUnpackAlignement(),
                  AU = ZU;
                eU = Math.floor((ZU + cU - 1) / cU) * cU * (RU - 1) + AU, WU = pU._GetLuminanceArrayBuffer(ZU, RU, zU.byteOffset + PU, eU, zU.buffer), XU.format = 1, XU.type = 0, UU._uploadDataToTextureDirectly(XU, WU, yU, QU)
              } else eU = Math.max(4, ZU) / 4 * Math.max(4, RU) / 4 * wU, WU = new Uint8Array(zU.buffer, zU.byteOffset + PU, eU), XU.type = 0, UU._uploadCompressedDataToTextureDirectly(XU, CU, ZU, RU, WU, yU, QU)
            }
            PU += qU ? ZU * RU * (qU / 8) : eU, ZU *= .5, RU *= .5, ZU = Math.max(1, ZU), RU = Math.max(1, RU)
          }
          if (void 0 !== aU) break
        }
        gU && gU.length > 0 ? cU.sphericalPolynomial = QU.c.ConvertCubeMapToSphericalPolynomial({
          size: GU[4],
          right: gU[0],
          left: gU[1],
          up: gU[2],
          down: gU[3],
          front: gU[4],
          back: gU[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : cU.sphericalPolynomial = void 0
      }
    }
    pU.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);