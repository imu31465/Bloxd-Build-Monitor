export const id = 296;
export const ids = [296];
export const modules = {
  40597: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => FT
    });
    var iT = IT(36118),
      zT = IT(36156),
      kT = IT(38752),
      WT = IT(36125),
      XT = IT(36177);
    class BT {
      constructor(TT, oT, IT, iT) {
        this.name = TT, this.worldAxisForNormal = oT, this.worldAxisForFileX = IT, this.worldAxisForFileY = iT
      }
    }
    class FT {
      static _NearestPow2Floor(TT) {
        return TT <= 1 ? 1 : 1 << Math.floor(Math.log2(TT))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(TT) {
        if (!TT.isCube) return null;
        TT.pC()?.Zc().flushFramebuffer();
        const oT = TT.getSize().width,
          IT = TT._sphericalPolynomialTargetSize,
          iT = IT > 0 ? this._NearestPow2Floor(IT) : 0,
          zT = !TT.noMipmap && !0 === TT._texture?.generateMipMaps,
          kT = iT > 0 && iT < oT && zT,
          WT = kT ? Math.max(0, Math.round(Math.log2(oT / iT))) : 0,
          XT = kT ? Math.max(1, Math.floor(oT / Math.pow(2, WT))) : oT,
          BT = TT.readPixels(0, WT, void 0, !1),
          FT = TT.readPixels(1, WT, void 0, !1);
        let ST, DT;
        TT.isRenderTarget ? (ST = TT.readPixels(3, WT, void 0, !1), DT = TT.readPixels(2, WT, void 0, !1)) : (ST = TT.readPixels(2, WT, void 0, !1), DT = TT.readPixels(3, WT, void 0, !1));
        const LT = TT.readPixels(4, WT, void 0, !1),
          xT = TT.readPixels(5, WT, void 0, !1),
          cT = TT.gammaSpace,
          KT = iT > 0 && iT < oT && !kT;
        return new Promise((TT => {
          Promise.all([FT, BT, ST, DT, LT, xT]).then((IT => {
            let [zT, kT, WT, BT, FT, ST] = IT, DT = XT;
            if (KT) {
              const TT = 4;
              zT = this._DownsampleFace(zT, oT, iT, TT), kT = this._DownsampleFace(kT, oT, iT, TT), WT = this._DownsampleFace(WT, oT, iT, TT), BT = this._DownsampleFace(BT, oT, iT, TT), FT = this._DownsampleFace(FT, oT, iT, TT), ST = this._DownsampleFace(ST, oT, iT, TT), DT = iT
            }
            const LT = {
              size: DT,
              right: kT,
              left: zT,
              up: WT,
              down: BT,
              front: FT,
              back: ST,
              format: 5,
              type: zT instanceof Float32Array ? 1 : 0,
              gammaSpace: cT
            };
            TT(this.ConvertCubeMapToSphericalPolynomial(LT))
          }))
        }))
      }
      static _AreaElement(TT, oT) {
        return Math.atan2(TT * oT, Math.sqrt(TT * TT + oT * oT + 1))
      }
      static _DownsampleFace(TT, oT, IT, iT) {
        const zT = TT instanceof Float32Array ? TT : Float32Array.from(TT),
          kT = IT * IT * iT,
          WT = new Float32Array(kT),
          XT = oT / IT,
          BT = 1 / (XT * XT);
        for (let ST = 0; ST < IT; ST++) {
          const TT = Math.floor(ST * XT),
            kT = Math.floor((ST + 1) * XT);
          for (let FT = 0; FT < IT; FT++) {
            const DT = Math.floor(FT * XT),
              LT = Math.floor((FT + 1) * XT),
              xT = (ST * IT + FT) * iT;
            for (let IT = 0; IT < iT; IT++) {
              let XT = 0;
              for (let WT = TT; WT < kT; WT++)
                for (let TT = DT; TT < LT; TT++) XT += zT[(WT * oT + TT) * iT + IT];
              WT[xT + IT] = XT * BT
            }
          }
        }
        if (TT instanceof Float32Array) return WT;
        const FT = new(0, TT.constructor)(kT);
        for (let ST = 0; ST < kT; ST++) FT[ST] = WT[ST] + .5 | 0;
        return FT
      }
      static ConvertCubeMapToSphericalPolynomial(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const IT = oT > 0 ? this._NearestPow2Floor(oT) : 0;
        if (IT > 0 && TT.size > IT) {
          const oT = 5 === TT.format ? 4 : 3,
            iT = ["right", "left", "up", "down", "front", "back"],
            zT = {};
          for (const kT of iT) zT[kT] = this._DownsampleFace(TT[kT], TT.size, IT, oT);
          TT = {
            ...TT,
            ...zT,
            size: IT
          }
        }
        const iT = new kT.b;
        let BT = 0;
        const FT = 2 / TT.size,
          ST = FT,
          DT = .5 * FT,
          LT = DT - 1;
        for (let kT = 0; kT < 6; kT++) {
          const oT = this._FileFaces[kT],
            IT = TT[oT.name];
          let xT = LT;
          const cT = 5 === TT.format ? 4 : 3;
          for (let kT = 0; kT < TT.size; kT++) {
            let KT = LT;
            for (let ST = 0; ST < TT.size; ST++) {
              const LT = oT.worldAxisForFileX.scale(KT).add(oT.worldAxisForFileY.scale(xT)).add(oT.worldAxisForNormal);
              LT.normalize();
              const MT = this._AreaElement(KT - DT, xT - DT) - this._AreaElement(KT - DT, xT + DT) - this._AreaElement(KT + DT, xT - DT) + this._AreaElement(KT + DT, xT + DT);
              let rT = IT[kT * TT.size * cT + ST * cT + 0],
                AT = IT[kT * TT.size * cT + ST * cT + 1],
                gT = IT[kT * TT.size * cT + ST * cT + 2];
              isNaN(rT) && (rT = 0), isNaN(AT) && (AT = 0), isNaN(gT) && (gT = 0), 0 === TT.type && (rT /= 255, AT /= 255, gT /= 255), TT.gammaSpace && (rT = Math.pow((0, zT.Clamp)(rT), WT.l), AT = Math.pow((0, zT.Clamp)(AT), WT.l), gT = Math.pow((0, zT.Clamp)(gT), WT.l));
              const hT = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const TT = Math.max(rT, AT, gT);
                if (TT > hT) {
                  const oT = hT / TT;
                  rT *= oT, AT *= oT, gT *= oT
                }
              } else rT = (0, zT.Clamp)(rT, 0, hT), AT = (0, zT.Clamp)(AT, 0, hT), gT = (0, zT.Clamp)(gT, 0, hT);
              const wT = new XT.e(rT, AT, gT);
              iT.addLight(LT, wT, MT), BT += MT, KT += FT
            }
            xT += ST
          }
        }
        const xT = 6 * (4 * Math.PI) / 6 / BT;
        return iT.scaleInPlace(xT), iT.convertIncidentRadianceToIrradiance(), iT.convertIrradianceToLambertianRadiance(), kT.c.FromHarmonics(iT)
      }
    }
    FT._FileFaces = [new BT("right", new iT.m(1, 0, 0), new iT.m(0, 0, -1), new iT.m(0, -1, 0)), new BT("left", new iT.m(-1, 0, 0), new iT.m(0, 0, 1), new iT.m(0, -1, 0)), new BT("up", new iT.m(0, 1, 0), new iT.m(1, 0, 0), new iT.m(0, 0, 1)), new BT("down", new iT.m(0, -1, 0), new iT.m(1, 0, 0), new iT.m(0, 0, -1)), new BT("front", new iT.m(0, 0, 1), new iT.m(1, 0, 0), new iT.m(0, -1, 0)), new BT("back", new iT.m(0, 0, -1), new iT.m(-1, 0, 0), new iT.m(0, -1, 0))], FT.MAX_HDRI_VALUE = 4096, FT.PRESERVE_CLAMPED_COLORS = !1
  },
  40592: (TT, oT, IT) => {
    IT.d(oT, {
      DDSTools: () => cT
    });
    var iT = IT(36156),
      zT = IT(37660),
      kT = IT(40597),
      WT = IT(38853);
    const XT = 131072,
      BT = 131072;

    function FT(TT) {
      return TT.charCodeAt(0) + (TT.charCodeAt(1) << 8) + (TT.charCodeAt(2) << 16) + (TT.charCodeAt(3) << 24)
    }
    const ST = FT("DXT1"),
      DT = FT("DXT3"),
      LT = FT("DXT5"),
      xT = FT("DX10");
    class cT {
      static GetDDSInfo(TT) {
        const oT = new Int32Array(TT.buffer, TT.byteOffset, 31),
          IT = new Int32Array(TT.buffer, TT.byteOffset, 35);
        let iT = 1;
        oT[2] & XT && (iT = Math.max(1, oT[7]));
        const zT = oT[21],
          kT = zT === xT ? IT[32] : 0;
        let WT = 0;
        switch (zT) {
          case 113:
            WT = 2;
            break;
          case 116:
            WT = 1;
            break;
          case xT:
            if (10 === kT) {
              WT = 2;
              break
            }
            if (2 === kT) {
              WT = 1;
              break
            }
        }
        return {
          width: oT[4],
          height: oT[3],
          mipmapCount: iT,
          isFourCC: 4 === (4 & oT[20]),
          isRGB: 64 === (64 & oT[20]),
          isLuminance: (oT[20] & BT) === BT,
          isCube: 512 === (512 & oT[28]),
          isCompressed: zT === ST || zT === DT || zT === LT,
          dxgiFormat: kT,
          textureType: WT
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(TT, oT, IT, iT, zT, kT) {
        const XT = new Float32Array(iT),
          BT = new Uint16Array(zT, IT);
        let FT = 0;
        for (let ST = 0; ST < oT; ST++)
          for (let oT = 0; oT < TT; oT++) {
            const IT = 4 * (oT + ST * TT);
            XT[FT] = (0, WT.b)(BT[IT]), XT[FT + 1] = (0, WT.b)(BT[IT + 1]), XT[FT + 2] = (0, WT.b)(BT[IT + 2]), cT.StoreLODInAlphaChannel ? XT[FT + 3] = kT : XT[FT + 3] = (0, WT.b)(BT[IT + 3]), FT += 4
          }
        return XT
      }
      static _GetHalfFloatRGBAArrayBuffer(TT, oT, IT, iT, zT, kT) {
        if (cT.StoreLODInAlphaChannel) {
          const XT = new Uint16Array(iT),
            BT = new Uint16Array(zT, IT);
          let FT = 0;
          for (let IT = 0; IT < oT; IT++)
            for (let oT = 0; oT < TT; oT++) {
              const iT = 4 * (oT + IT * TT);
              XT[FT] = BT[iT], XT[FT + 1] = BT[iT + 1], XT[FT + 2] = BT[iT + 2], XT[FT + 3] = (0, WT.i)(kT), FT += 4
            }
          return XT
        }
        return new Uint16Array(zT, IT, iT)
      }
      static _GetFloatRGBAArrayBuffer(TT, oT, IT, iT, zT, kT) {
        if (cT.StoreLODInAlphaChannel) {
          const WT = new Float32Array(iT),
            XT = new Float32Array(zT, IT);
          let BT = 0;
          for (let IT = 0; IT < oT; IT++)
            for (let oT = 0; oT < TT; oT++) {
              const iT = 4 * (oT + IT * TT);
              WT[BT] = XT[iT], WT[BT + 1] = XT[iT + 1], WT[BT + 2] = XT[iT + 2], WT[BT + 3] = kT, BT += 4
            }
          return WT
        }
        return new Float32Array(zT, IT, iT)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(TT, oT, IT, iT, zT, kT) {
        const XT = new Uint16Array(iT),
          BT = new Float32Array(zT, IT);
        let FT = 0;
        for (let ST = 0; ST < oT; ST++)
          for (let oT = 0; oT < TT; oT++) XT[FT] = (0, WT.i)(BT[FT]), XT[FT + 1] = (0, WT.i)(BT[FT + 1]), XT[FT + 2] = (0, WT.i)(BT[FT + 2]), cT.StoreLODInAlphaChannel ? XT[FT + 3] = (0, WT.i)(kT) : XT[FT + 3] = (0, WT.i)(BT[FT + 3]), FT += 4;
        return XT
      }
      static _GetFloatAsUIntRGBAArrayBuffer(TT, oT, IT, zT, kT, WT) {
        const XT = new Uint8Array(zT),
          BT = new Float32Array(kT, IT);
        let FT = 0;
        for (let ST = 0; ST < oT; ST++)
          for (let oT = 0; oT < TT; oT++) {
            const IT = 4 * (oT + ST * TT);
            XT[FT] = 255 * (0, iT.Clamp)(BT[IT]), XT[FT + 1] = 255 * (0, iT.Clamp)(BT[IT + 1]), XT[FT + 2] = 255 * (0, iT.Clamp)(BT[IT + 2]), cT.StoreLODInAlphaChannel ? XT[FT + 3] = WT : XT[FT + 3] = 255 * (0, iT.Clamp)(BT[IT + 3]), FT += 4
          }
        return XT
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(TT, oT, IT, zT, kT, XT) {
        const BT = new Uint8Array(zT),
          FT = new Uint16Array(kT, IT);
        let ST = 0;
        for (let DT = 0; DT < oT; DT++)
          for (let oT = 0; oT < TT; oT++) {
            const IT = 4 * (oT + DT * TT);
            BT[ST] = 255 * (0, iT.Clamp)((0, WT.b)(FT[IT])), BT[ST + 1] = 255 * (0, iT.Clamp)((0, WT.b)(FT[IT + 1])), BT[ST + 2] = 255 * (0, iT.Clamp)((0, WT.b)(FT[IT + 2])), cT.StoreLODInAlphaChannel ? BT[ST + 3] = XT : BT[ST + 3] = 255 * (0, iT.Clamp)((0, WT.b)(FT[IT + 3])), ST += 4
          }
        return BT
      }
      static _GetRGBAArrayBuffer(TT, oT, IT, iT, zT, kT, WT, XT, BT) {
        const FT = new Uint8Array(iT),
          ST = new Uint8Array(zT, IT);
        let DT = 0;
        for (let LT = 0; LT < oT; LT++)
          for (let oT = 0; oT < TT; oT++) {
            const IT = 4 * (oT + LT * TT);
            FT[DT] = ST[IT + kT], FT[DT + 1] = ST[IT + WT], FT[DT + 2] = ST[IT + XT], FT[DT + 3] = ST[IT + BT], DT += 4
          }
        return FT
      }
      static _ExtractLongWordOrder(TT) {
        return 0 === TT || 255 === TT || -16777216 === TT ? 0 : 1 + cT._ExtractLongWordOrder(TT >> 8)
      }
      static _GetRGBArrayBuffer(TT, oT, IT, iT, zT, kT, WT, XT) {
        const BT = new Uint8Array(iT),
          FT = new Uint8Array(zT, IT);
        let ST = 0;
        for (let DT = 0; DT < oT; DT++)
          for (let oT = 0; oT < TT; oT++) {
            const IT = 3 * (oT + DT * TT);
            BT[ST] = FT[IT + kT], BT[ST + 1] = FT[IT + WT], BT[ST + 2] = FT[IT + XT], ST += 3
          }
        return BT
      }
      static _GetLuminanceArrayBuffer(TT, oT, IT, iT, zT) {
        const kT = new Uint8Array(iT),
          WT = new Uint8Array(zT, IT);
        let XT = 0;
        for (let BT = 0; BT < oT; BT++)
          for (let oT = 0; oT < TT; oT++) {
            const IT = oT + BT * TT;
            kT[XT] = WT[IT], XT++
          }
        return kT
      }
      static UploadDDSLevels(TT, oT, IT, iT, WT, BT) {
        let FT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          KT = arguments.length > 7 ? arguments[7] : void 0,
          MT = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          rT = null;
        iT.sphericalPolynomial && (rT = []);
        const AT = !!TT.getCaps().s3tc;
        oT.generateMipMaps = WT;
        const gT = new Int32Array(IT.buffer, IT.byteOffset, 31);
        let hT, wT, mT, eT, RT, uT, vT, ET = 0,
          fT = 0,
          CT = 1;
        if (542327876 !== gT[0]) return void zT.d.Error("Invalid magic number in DDS header");
        if (!iT.isFourCC && !iT.isRGB && !iT.isLuminance) return void zT.d.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (iT.isCompressed && !AT) return void zT.d.Error("Compressed textures are not supported on this platform.");
        let jT = gT[22];
        eT = gT[1] + 4;
        let JT = !1;
        if (iT.isFourCC) switch (hT = gT[21], hT) {
          case ST:
            CT = 8, fT = 33777;
            break;
          case DT:
            CT = 16, fT = 33778;
            break;
          case LT:
            CT = 16, fT = 33779;
            break;
          case 113:
            JT = !0, jT = 64;
            break;
          case 116:
            JT = !0, jT = 128;
            break;
          case xT: {
            eT += 20;
            let TT = !1;
            switch (iT.dxgiFormat) {
              case 10:
                JT = !0, jT = 64, TT = !0;
                break;
              case 2:
                JT = !0, jT = 128, TT = !0;
                break;
              case 88:
                iT.isRGB = !0, iT.isFourCC = !1, jT = 32, TT = !0
            }
            if (TT) break
          }
          default:
            return void zT.d.Error(["Unsupported FourCC code:", (UT = hT, String.fromCharCode(255 & UT, UT >> 8 & 255, UT >> 16 & 255, UT >> 24 & 255))])
        }
        var UT;
        const aT = cT._ExtractLongWordOrder(gT[23]),
          YT = cT._ExtractLongWordOrder(gT[24]),
          QT = cT._ExtractLongWordOrder(gT[25]),
          OT = cT._ExtractLongWordOrder(gT[26]);
        JT && (fT = TT._getRGBABufferInternalSizedFormat(iT.textureType)), uT = 1, gT[2] & XT && !1 !== WT && (uT = Math.max(1, gT[7]));
        const HT = KT || 0,
          nT = TT.getCaps();
        for (let zT = HT; zT < BT; zT++) {
          for (wT = gT[4], mT = gT[3], vT = 0; vT < uT; ++vT) {
            if (-1 === FT || FT === vT) {
              const kT = -1 === FT ? vT : 0;
              if (!iT.isCompressed && iT.isFourCC) {
                oT.format = 5, ET = wT * mT * 4;
                let iT = null;
                if (TT._badOS || TT._badDesktopOS || !nT.textureHalfFloat && !nT.textureFloat) 128 === jT ? (iT = cT._GetFloatAsUIntRGBAArrayBuffer(wT, mT, IT.byteOffset + eT, ET, IT.buffer, kT), rT && 0 == kT && rT.push(cT._GetFloatRGBAArrayBuffer(wT, mT, IT.byteOffset + eT, ET, IT.buffer, kT))) : 64 === jT && (iT = cT._GetHalfFloatAsUIntRGBAArrayBuffer(wT, mT, IT.byteOffset + eT, ET, IT.buffer, kT), rT && 0 == kT && rT.push(cT._GetHalfFloatAsFloatRGBAArrayBuffer(wT, mT, IT.byteOffset + eT, ET, IT.buffer, kT))), oT.type = 0;
                else {
                  const TT = nT.textureFloat && (MT && nT.textureFloatLinearFiltering || !MT),
                    zT = nT.textureHalfFloat && (MT && nT.textureHalfFloatLinearFiltering || !MT),
                    WT = (128 === jT || 64 === jT && !zT) && TT ? 1 : (64 === jT || 128 === jT && !TT) && zT ? 2 : 0;
                  let XT, BT = null;
                  if (128 === jT) switch (WT) {
                    case 1:
                      XT = cT._GetFloatRGBAArrayBuffer, BT = null;
                      break;
                    case 2:
                      XT = cT._GetFloatAsHalfFloatRGBAArrayBuffer, BT = cT._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      XT = cT._GetFloatAsUIntRGBAArrayBuffer, BT = cT._GetFloatRGBAArrayBuffer
                  } else switch (WT) {
                    case 1:
                      XT = cT._GetHalfFloatAsFloatRGBAArrayBuffer, BT = null;
                      break;
                    case 2:
                      XT = cT._GetHalfFloatRGBAArrayBuffer, BT = cT._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      XT = cT._GetHalfFloatAsUIntRGBAArrayBuffer, BT = cT._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  oT.type = WT, iT = XT(wT, mT, IT.byteOffset + eT, ET, IT.buffer, kT), rT && 0 == kT && rT.push(BT ? BT(wT, mT, IT.byteOffset + eT, ET, IT.buffer, kT) : iT)
                }
                iT && TT._uploadDataToTextureDirectly(oT, iT, zT, kT)
              } else if (iT.isRGB) oT.type = 0, 24 === jT ? (oT.format = 4, ET = wT * mT * 3, RT = cT._GetRGBArrayBuffer(wT, mT, IT.byteOffset + eT, ET, IT.buffer, aT, YT, QT), TT._uploadDataToTextureDirectly(oT, RT, zT, kT)) : (oT.format = 5, ET = wT * mT * 4, RT = cT._GetRGBAArrayBuffer(wT, mT, IT.byteOffset + eT, ET, IT.buffer, aT, YT, QT, OT), TT._uploadDataToTextureDirectly(oT, RT, zT, kT));
              else if (iT.isLuminance) {
                const iT = TT._getUnpackAlignement(),
                  WT = wT;
                ET = Math.floor((wT + iT - 1) / iT) * iT * (mT - 1) + WT, RT = cT._GetLuminanceArrayBuffer(wT, mT, IT.byteOffset + eT, ET, IT.buffer), oT.format = 1, oT.type = 0, TT._uploadDataToTextureDirectly(oT, RT, zT, kT)
              } else ET = Math.max(4, wT) / 4 * Math.max(4, mT) / 4 * CT, RT = new Uint8Array(IT.buffer, IT.byteOffset + eT, ET), oT.type = 0, TT._uploadCompressedDataToTextureDirectly(oT, fT, wT, mT, RT, zT, kT)
            }
            eT += jT ? wT * mT * (jT / 8) : ET, wT *= .5, mT *= .5, wT = Math.max(1, wT), mT = Math.max(1, mT)
          }
          if (void 0 !== KT) break
        }
        rT && rT.length > 0 ? iT.sphericalPolynomial = kT.e.ConvertCubeMapToSphericalPolynomial({
          size: gT[4],
          right: rT[0],
          left: rT[1],
          up: rT[2],
          down: rT[3],
          front: rT[4],
          back: rT[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : iT.sphericalPolynomial = void 0
      }
    }
    cT.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);