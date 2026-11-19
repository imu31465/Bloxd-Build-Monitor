export const id = 296;
export const ids = [296];
export const modules = {
  40825: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => aY
    });
    var FY = DY(36524),
      AY = DY(36559),
      IY = DY(39120),
      RY = DY(36533),
      OY = DY(36588);
    class gY {
      constructor(YY, rY, DY, FY) {
        this.name = YY, this.worldAxisForNormal = rY, this.worldAxisForFileX = DY, this.worldAxisForFileY = FY
      }
    }
    class aY {
      static _NearestPow2Floor(YY) {
        return YY <= 1 ? 1 : 1 << Math.floor(Math.log2(YY))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(YY) {
        if (!YY.isCube) return null;
        YY.hT()?.ky().flushFramebuffer();
        const rY = YY.getSize().width,
          DY = YY._sphericalPolynomialTargetSize,
          FY = DY > 0 ? this._NearestPow2Floor(DY) : 0,
          AY = !YY.noMipmap && !0 === YY._texture?.generateMipMaps,
          IY = FY > 0 && FY < rY && AY,
          RY = IY ? Math.max(0, Math.round(Math.log2(rY / FY))) : 0,
          OY = IY ? Math.max(1, Math.floor(rY / Math.pow(2, RY))) : rY,
          gY = YY.readPixels(0, RY, void 0, !1),
          aY = YY.readPixels(1, RY, void 0, !1);
        let vY, uY;
        YY.isRenderTarget ? (vY = YY.readPixels(3, RY, void 0, !1), uY = YY.readPixels(2, RY, void 0, !1)) : (vY = YY.readPixels(2, RY, void 0, !1), uY = YY.readPixels(3, RY, void 0, !1));
        const sY = YY.readPixels(4, RY, void 0, !1),
          iY = YY.readPixels(5, RY, void 0, !1),
          yY = YY.gammaSpace,
          QY = FY > 0 && FY < rY && !IY;
        return new Promise((YY => {
          Promise.all([aY, gY, vY, uY, sY, iY]).then((DY => {
            let [AY, IY, RY, gY, aY, vY] = DY, uY = OY;
            if (QY) {
              const YY = 4;
              AY = this._DownsampleFace(AY, rY, FY, YY), IY = this._DownsampleFace(IY, rY, FY, YY), RY = this._DownsampleFace(RY, rY, FY, YY), gY = this._DownsampleFace(gY, rY, FY, YY), aY = this._DownsampleFace(aY, rY, FY, YY), vY = this._DownsampleFace(vY, rY, FY, YY), uY = FY
            }
            const sY = {
              size: uY,
              right: IY,
              left: AY,
              up: RY,
              down: gY,
              front: aY,
              back: vY,
              format: 5,
              type: AY instanceof Float32Array ? 1 : 0,
              gammaSpace: yY
            };
            YY(this.ConvertCubeMapToSphericalPolynomial(sY))
          }))
        }))
      }
      static _AreaElement(YY, rY) {
        return Math.atan2(YY * rY, Math.sqrt(YY * YY + rY * rY + 1))
      }
      static _DownsampleFace(YY, rY, DY, FY) {
        const AY = YY instanceof Float32Array ? YY : Float32Array.from(YY),
          IY = DY * DY * FY,
          RY = new Float32Array(IY),
          OY = rY / DY,
          gY = 1 / (OY * OY);
        for (let vY = 0; vY < DY; vY++) {
          const YY = Math.floor(vY * OY),
            IY = Math.floor((vY + 1) * OY);
          for (let aY = 0; aY < DY; aY++) {
            const uY = Math.floor(aY * OY),
              sY = Math.floor((aY + 1) * OY),
              iY = (vY * DY + aY) * FY;
            for (let DY = 0; DY < FY; DY++) {
              let OY = 0;
              for (let RY = YY; RY < IY; RY++)
                for (let YY = uY; YY < sY; YY++) OY += AY[(RY * rY + YY) * FY + DY];
              RY[iY + DY] = OY * gY
            }
          }
        }
        if (YY instanceof Float32Array) return RY;
        const aY = new(0, YY.constructor)(IY);
        for (let vY = 0; vY < IY; vY++) aY[vY] = RY[vY] + .5 | 0;
        return aY
      }
      static ConvertCubeMapToSphericalPolynomial(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const DY = rY > 0 ? this._NearestPow2Floor(rY) : 0;
        if (DY > 0 && YY.size > DY) {
          const rY = 5 === YY.format ? 4 : 3,
            FY = ["right", "left", "up", "down", "front", "back"],
            AY = {};
          for (const IY of FY) AY[IY] = this._DownsampleFace(YY[IY], YY.size, DY, rY);
          YY = {
            ...YY,
            ...AY,
            size: DY
          }
        }
        const FY = new IY.b;
        let gY = 0;
        const aY = 2 / YY.size,
          vY = aY,
          uY = .5 * aY,
          sY = uY - 1;
        for (let IY = 0; IY < 6; IY++) {
          const rY = this._FileFaces[IY],
            DY = YY[rY.name];
          let iY = sY;
          const yY = 5 === YY.format ? 4 : 3;
          for (let IY = 0; IY < YY.size; IY++) {
            let QY = sY;
            for (let vY = 0; vY < YY.size; vY++) {
              const sY = rY.worldAxisForFileX.scale(QY).add(rY.worldAxisForFileY.scale(iY)).add(rY.worldAxisForNormal);
              sY.normalize();
              const oY = this._AreaElement(QY - uY, iY - uY) - this._AreaElement(QY - uY, iY + uY) - this._AreaElement(QY + uY, iY - uY) + this._AreaElement(QY + uY, iY + uY);
              let WY = DY[IY * YY.size * yY + vY * yY + 0],
                EY = DY[IY * YY.size * yY + vY * yY + 1],
                mY = DY[IY * YY.size * yY + vY * yY + 2];
              isNaN(WY) && (WY = 0), isNaN(EY) && (EY = 0), isNaN(mY) && (mY = 0), 0 === YY.type && (WY /= 255, EY /= 255, mY /= 255), YY.gammaSpace && (WY = Math.pow((0, AY.Clamp)(WY), RY.g), EY = Math.pow((0, AY.Clamp)(EY), RY.g), mY = Math.pow((0, AY.Clamp)(mY), RY.g));
              const VY = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const YY = Math.max(WY, EY, mY);
                if (YY > VY) {
                  const rY = VY / YY;
                  WY *= rY, EY *= rY, mY *= rY
                }
              } else WY = (0, AY.Clamp)(WY, 0, VY), EY = (0, AY.Clamp)(EY, 0, VY), mY = (0, AY.Clamp)(mY, 0, VY);
              const SY = new OY.c(WY, EY, mY);
              FY.addLight(sY, SY, oY), gY += oY, QY += aY
            }
            iY += vY
          }
        }
        const iY = 6 * (4 * Math.PI) / 6 / gY;
        return FY.scaleInPlace(iY), FY.convertIncidentRadianceToIrradiance(), FY.convertIrradianceToLambertianRadiance(), IY.f.FromHarmonics(FY)
      }
    }
    aY._FileFaces = [new gY("right", new FY.r(1, 0, 0), new FY.r(0, 0, -1), new FY.r(0, -1, 0)), new gY("left", new FY.r(-1, 0, 0), new FY.r(0, 0, 1), new FY.r(0, -1, 0)), new gY("up", new FY.r(0, 1, 0), new FY.r(1, 0, 0), new FY.r(0, 0, 1)), new gY("down", new FY.r(0, -1, 0), new FY.r(1, 0, 0), new FY.r(0, 0, -1)), new gY("front", new FY.r(0, 0, 1), new FY.r(1, 0, 0), new FY.r(0, -1, 0)), new gY("back", new FY.r(0, 0, -1), new FY.r(-1, 0, 0), new FY.r(0, -1, 0))], aY.MAX_HDRI_VALUE = 4096, aY.PRESERVE_CLAMPED_COLORS = !1
  },
  40821: (YY, rY, DY) => {
    DY.d(rY, {
      DDSTools: () => yY
    });
    var FY = DY(36559),
      AY = DY(38040),
      IY = DY(40825),
      RY = DY(39184);
    const OY = 131072,
      gY = 131072;

    function aY(YY) {
      return YY.charCodeAt(0) + (YY.charCodeAt(1) << 8) + (YY.charCodeAt(2) << 16) + (YY.charCodeAt(3) << 24)
    }
    const vY = aY("DXT1"),
      uY = aY("DXT3"),
      sY = aY("DXT5"),
      iY = aY("DX10");
    class yY {
      static GetDDSInfo(YY) {
        const rY = new Int32Array(YY.buffer, YY.byteOffset, 31),
          DY = new Int32Array(YY.buffer, YY.byteOffset, 35);
        let FY = 1;
        rY[2] & OY && (FY = Math.max(1, rY[7]));
        const AY = rY[21],
          IY = AY === iY ? DY[32] : 0;
        let RY = 0;
        switch (AY) {
          case 113:
            RY = 2;
            break;
          case 116:
            RY = 1;
            break;
          case iY:
            if (10 === IY) {
              RY = 2;
              break
            }
            if (2 === IY) {
              RY = 1;
              break
            }
        }
        return {
          width: rY[4],
          height: rY[3],
          mipmapCount: FY,
          isFourCC: 4 === (4 & rY[20]),
          isRGB: 64 === (64 & rY[20]),
          isLuminance: (rY[20] & gY) === gY,
          isCube: 512 === (512 & rY[28]),
          isCompressed: AY === vY || AY === uY || AY === sY,
          dxgiFormat: IY,
          textureType: RY
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(YY, rY, DY, FY, AY, IY) {
        const OY = new Float32Array(FY),
          gY = new Uint16Array(AY, DY);
        let aY = 0;
        for (let vY = 0; vY < rY; vY++)
          for (let rY = 0; rY < YY; rY++) {
            const DY = 4 * (rY + vY * YY);
            OY[aY] = (0, RY.c)(gY[DY]), OY[aY + 1] = (0, RY.c)(gY[DY + 1]), OY[aY + 2] = (0, RY.c)(gY[DY + 2]), yY.StoreLODInAlphaChannel ? OY[aY + 3] = IY : OY[aY + 3] = (0, RY.c)(gY[DY + 3]), aY += 4
          }
        return OY
      }
      static _GetHalfFloatRGBAArrayBuffer(YY, rY, DY, FY, AY, IY) {
        if (yY.StoreLODInAlphaChannel) {
          const OY = new Uint16Array(FY),
            gY = new Uint16Array(AY, DY);
          let aY = 0;
          for (let DY = 0; DY < rY; DY++)
            for (let rY = 0; rY < YY; rY++) {
              const FY = 4 * (rY + DY * YY);
              OY[aY] = gY[FY], OY[aY + 1] = gY[FY + 1], OY[aY + 2] = gY[FY + 2], OY[aY + 3] = (0, RY.k)(IY), aY += 4
            }
          return OY
        }
        return new Uint16Array(AY, DY, FY)
      }
      static _GetFloatRGBAArrayBuffer(YY, rY, DY, FY, AY, IY) {
        if (yY.StoreLODInAlphaChannel) {
          const RY = new Float32Array(FY),
            OY = new Float32Array(AY, DY);
          let gY = 0;
          for (let DY = 0; DY < rY; DY++)
            for (let rY = 0; rY < YY; rY++) {
              const FY = 4 * (rY + DY * YY);
              RY[gY] = OY[FY], RY[gY + 1] = OY[FY + 1], RY[gY + 2] = OY[FY + 2], RY[gY + 3] = IY, gY += 4
            }
          return RY
        }
        return new Float32Array(AY, DY, FY)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(YY, rY, DY, FY, AY, IY) {
        const OY = new Uint16Array(FY),
          gY = new Float32Array(AY, DY);
        let aY = 0;
        for (let vY = 0; vY < rY; vY++)
          for (let rY = 0; rY < YY; rY++) OY[aY] = (0, RY.k)(gY[aY]), OY[aY + 1] = (0, RY.k)(gY[aY + 1]), OY[aY + 2] = (0, RY.k)(gY[aY + 2]), yY.StoreLODInAlphaChannel ? OY[aY + 3] = (0, RY.k)(IY) : OY[aY + 3] = (0, RY.k)(gY[aY + 3]), aY += 4;
        return OY
      }
      static _GetFloatAsUIntRGBAArrayBuffer(YY, rY, DY, AY, IY, RY) {
        const OY = new Uint8Array(AY),
          gY = new Float32Array(IY, DY);
        let aY = 0;
        for (let vY = 0; vY < rY; vY++)
          for (let rY = 0; rY < YY; rY++) {
            const DY = 4 * (rY + vY * YY);
            OY[aY] = 255 * (0, FY.Clamp)(gY[DY]), OY[aY + 1] = 255 * (0, FY.Clamp)(gY[DY + 1]), OY[aY + 2] = 255 * (0, FY.Clamp)(gY[DY + 2]), yY.StoreLODInAlphaChannel ? OY[aY + 3] = RY : OY[aY + 3] = 255 * (0, FY.Clamp)(gY[DY + 3]), aY += 4
          }
        return OY
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(YY, rY, DY, AY, IY, OY) {
        const gY = new Uint8Array(AY),
          aY = new Uint16Array(IY, DY);
        let vY = 0;
        for (let uY = 0; uY < rY; uY++)
          for (let rY = 0; rY < YY; rY++) {
            const DY = 4 * (rY + uY * YY);
            gY[vY] = 255 * (0, FY.Clamp)((0, RY.c)(aY[DY])), gY[vY + 1] = 255 * (0, FY.Clamp)((0, RY.c)(aY[DY + 1])), gY[vY + 2] = 255 * (0, FY.Clamp)((0, RY.c)(aY[DY + 2])), yY.StoreLODInAlphaChannel ? gY[vY + 3] = OY : gY[vY + 3] = 255 * (0, FY.Clamp)((0, RY.c)(aY[DY + 3])), vY += 4
          }
        return gY
      }
      static _GetRGBAArrayBuffer(YY, rY, DY, FY, AY, IY, RY, OY, gY) {
        const aY = new Uint8Array(FY),
          vY = new Uint8Array(AY, DY);
        let uY = 0;
        for (let sY = 0; sY < rY; sY++)
          for (let rY = 0; rY < YY; rY++) {
            const DY = 4 * (rY + sY * YY);
            aY[uY] = vY[DY + IY], aY[uY + 1] = vY[DY + RY], aY[uY + 2] = vY[DY + OY], aY[uY + 3] = vY[DY + gY], uY += 4
          }
        return aY
      }
      static _ExtractLongWordOrder(YY) {
        return 0 === YY || 255 === YY || -16777216 === YY ? 0 : 1 + yY._ExtractLongWordOrder(YY >> 8)
      }
      static _GetRGBArrayBuffer(YY, rY, DY, FY, AY, IY, RY, OY) {
        const gY = new Uint8Array(FY),
          aY = new Uint8Array(AY, DY);
        let vY = 0;
        for (let uY = 0; uY < rY; uY++)
          for (let rY = 0; rY < YY; rY++) {
            const DY = 3 * (rY + uY * YY);
            gY[vY] = aY[DY + IY], gY[vY + 1] = aY[DY + RY], gY[vY + 2] = aY[DY + OY], vY += 3
          }
        return gY
      }
      static _GetLuminanceArrayBuffer(YY, rY, DY, FY, AY) {
        const IY = new Uint8Array(FY),
          RY = new Uint8Array(AY, DY);
        let OY = 0;
        for (let gY = 0; gY < rY; gY++)
          for (let rY = 0; rY < YY; rY++) {
            const DY = rY + gY * YY;
            IY[OY] = RY[DY], OY++
          }
        return IY
      }
      static UploadDDSLevels(YY, rY, DY, FY, RY, gY) {
        let aY = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          QY = arguments.length > 7 ? arguments[7] : void 0,
          oY = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          WY = null;
        FY.sphericalPolynomial && (WY = []);
        const EY = !!YY.getCaps().s3tc;
        rY.generateMipMaps = RY;
        const mY = new Int32Array(DY.buffer, DY.byteOffset, 31);
        let VY, SY, lY, TY, eY, NY, BY, cY = 0,
          KY = 0,
          HY = 1;
        if (542327876 !== mY[0]) return void AY.d.Error("Invalid magic number in DDS header");
        if (!FY.isFourCC && !FY.isRGB && !FY.isLuminance) return void AY.d.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (FY.isCompressed && !EY) return void AY.d.Error("Compressed textures are not supported on this platform.");
        let zY = mY[22];
        TY = mY[1] + 4;
        let ZY = !1;
        if (FY.isFourCC) switch (VY = mY[21], VY) {
          case vY:
            HY = 8, KY = 33777;
            break;
          case uY:
            HY = 16, KY = 33778;
            break;
          case sY:
            HY = 16, KY = 33779;
            break;
          case 113:
            ZY = !0, zY = 64;
            break;
          case 116:
            ZY = !0, zY = 128;
            break;
          case iY: {
            TY += 20;
            let YY = !1;
            switch (FY.dxgiFormat) {
              case 10:
                ZY = !0, zY = 64, YY = !0;
                break;
              case 2:
                ZY = !0, zY = 128, YY = !0;
                break;
              case 88:
                FY.isRGB = !0, FY.isFourCC = !1, zY = 32, YY = !0
            }
            if (YY) break
          }
          default:
            return void AY.d.Error(["Unsupported FourCC code:", (CY = VY, String.fromCharCode(255 & CY, CY >> 8 & 255, CY >> 16 & 255, CY >> 24 & 255))])
        }
        var CY;
        const fY = yY._ExtractLongWordOrder(mY[23]),
          jY = yY._ExtractLongWordOrder(mY[24]),
          hY = yY._ExtractLongWordOrder(mY[25]),
          dY = yY._ExtractLongWordOrder(mY[26]);
        ZY && (KY = YY._getRGBABufferInternalSizedFormat(FY.textureType)), NY = 1, mY[2] & OY && !1 !== RY && (NY = Math.max(1, mY[7]));
        const JY = QY || 0,
          MY = YY.getCaps();
        for (let AY = JY; AY < gY; AY++) {
          for (SY = mY[4], lY = mY[3], BY = 0; BY < NY; ++BY) {
            if (-1 === aY || aY === BY) {
              const IY = -1 === aY ? BY : 0;
              if (!FY.isCompressed && FY.isFourCC) {
                rY.format = 5, cY = SY * lY * 4;
                let FY = null;
                if (YY._badOS || YY._badDesktopOS || !MY.textureHalfFloat && !MY.textureFloat) 128 === zY ? (FY = yY._GetFloatAsUIntRGBAArrayBuffer(SY, lY, DY.byteOffset + TY, cY, DY.buffer, IY), WY && 0 == IY && WY.push(yY._GetFloatRGBAArrayBuffer(SY, lY, DY.byteOffset + TY, cY, DY.buffer, IY))) : 64 === zY && (FY = yY._GetHalfFloatAsUIntRGBAArrayBuffer(SY, lY, DY.byteOffset + TY, cY, DY.buffer, IY), WY && 0 == IY && WY.push(yY._GetHalfFloatAsFloatRGBAArrayBuffer(SY, lY, DY.byteOffset + TY, cY, DY.buffer, IY))), rY.type = 0;
                else {
                  const YY = MY.textureFloat && (oY && MY.textureFloatLinearFiltering || !oY),
                    AY = MY.textureHalfFloat && (oY && MY.textureHalfFloatLinearFiltering || !oY),
                    RY = (128 === zY || 64 === zY && !AY) && YY ? 1 : (64 === zY || 128 === zY && !YY) && AY ? 2 : 0;
                  let OY, gY = null;
                  if (128 === zY) switch (RY) {
                    case 1:
                      OY = yY._GetFloatRGBAArrayBuffer, gY = null;
                      break;
                    case 2:
                      OY = yY._GetFloatAsHalfFloatRGBAArrayBuffer, gY = yY._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      OY = yY._GetFloatAsUIntRGBAArrayBuffer, gY = yY._GetFloatRGBAArrayBuffer
                  } else switch (RY) {
                    case 1:
                      OY = yY._GetHalfFloatAsFloatRGBAArrayBuffer, gY = null;
                      break;
                    case 2:
                      OY = yY._GetHalfFloatRGBAArrayBuffer, gY = yY._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      OY = yY._GetHalfFloatAsUIntRGBAArrayBuffer, gY = yY._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  rY.type = RY, FY = OY(SY, lY, DY.byteOffset + TY, cY, DY.buffer, IY), WY && 0 == IY && WY.push(gY ? gY(SY, lY, DY.byteOffset + TY, cY, DY.buffer, IY) : FY)
                }
                FY && YY._uploadDataToTextureDirectly(rY, FY, AY, IY)
              } else if (FY.isRGB) rY.type = 0, 24 === zY ? (rY.format = 4, cY = SY * lY * 3, eY = yY._GetRGBArrayBuffer(SY, lY, DY.byteOffset + TY, cY, DY.buffer, fY, jY, hY), YY._uploadDataToTextureDirectly(rY, eY, AY, IY)) : (rY.format = 5, cY = SY * lY * 4, eY = yY._GetRGBAArrayBuffer(SY, lY, DY.byteOffset + TY, cY, DY.buffer, fY, jY, hY, dY), YY._uploadDataToTextureDirectly(rY, eY, AY, IY));
              else if (FY.isLuminance) {
                const FY = YY._getUnpackAlignement(),
                  RY = SY;
                cY = Math.floor((SY + FY - 1) / FY) * FY * (lY - 1) + RY, eY = yY._GetLuminanceArrayBuffer(SY, lY, DY.byteOffset + TY, cY, DY.buffer), rY.format = 1, rY.type = 0, YY._uploadDataToTextureDirectly(rY, eY, AY, IY)
              } else cY = Math.max(4, SY) / 4 * Math.max(4, lY) / 4 * HY, eY = new Uint8Array(DY.buffer, DY.byteOffset + TY, cY), rY.type = 0, YY._uploadCompressedDataToTextureDirectly(rY, KY, SY, lY, eY, AY, IY)
            }
            TY += zY ? SY * lY * (zY / 8) : cY, SY *= .5, lY *= .5, SY = Math.max(1, SY), lY = Math.max(1, lY)
          }
          if (void 0 !== QY) break
        }
        WY && WY.length > 0 ? FY.sphericalPolynomial = IY.c.ConvertCubeMapToSphericalPolynomial({
          size: mY[4],
          right: WY[0],
          left: WY[1],
          up: WY[2],
          down: WY[3],
          front: WY[4],
          back: WY[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : FY.sphericalPolynomial = void 0
      }
    }
    yY.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);