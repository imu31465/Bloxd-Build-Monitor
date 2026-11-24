export const id = 312;
export const ids = [311, 312];
export const modules = {
  41804: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      _DDSTextureLoader: () => oB
    });
    var TB = ZB(40044),
      JB = ZB(41790);
    class oB {
      constructor() {
        this.supportCascades = !0
      }
      loadCubeData(BB, IB, ZB, oB) {
        const GB = IB.PN();
        let vB, kB = !1,
          cB = 1e3;
        if (Array.isArray(BB))
          for (let TB = 0; TB < BB.length; TB++) {
            const ZB = BB[TB];
            vB = JB.DDSTools.GetDDSInfo(ZB), IB.width = vB.width, IB.height = vB.height, kB = (vB.isRGB || vB.isLuminance || vB.mipmapCount > 1) && IB.generateMipMaps, GB._unpackFlipY(vB.isCompressed), JB.DDSTools.UploadDDSLevels(GB, IB, ZB, vB, kB, 6, -1, TB), vB.isFourCC || 1 !== vB.mipmapCount ? cB = vB.mipmapCount - 1 : GB.generateMipMapsForCubemap(IB)
          } else {
            const oB = BB;
            vB = JB.DDSTools.GetDDSInfo(oB), IB.width = vB.width, IB.height = vB.height, ZB && (vB.sphericalPolynomial = new TB.f), kB = (vB.isRGB || vB.isLuminance || vB.mipmapCount > 1) && IB.generateMipMaps, GB._unpackFlipY(vB.isCompressed), JB.DDSTools.UploadDDSLevels(GB, IB, oB, vB, kB, 6), vB.isFourCC || 1 !== vB.mipmapCount ? cB = vB.mipmapCount - 1 : GB.generateMipMapsForCubemap(IB, !1)
          }
        GB._setCubeMapTextureParams(IB, kB, cB), IB.isReady = !0, IB.onLoadedObservable.notifyObservers(IB), IB.onLoadedObservable.clear(), oB && oB({
          isDDS: !0,
          width: IB.width,
          info: vB,
          data: BB,
          texture: IB
        })
      }
      loadData(BB, IB, ZB) {
        const TB = JB.DDSTools.GetDDSInfo(BB),
          oB = (TB.isRGB || TB.isLuminance || TB.mipmapCount > 1) && IB.generateMipMaps && Math.max(TB.width, TB.height) >> TB.mipmapCount - 1 === 1;
        ZB(TB.width, TB.height, oB, TB.isFourCC, (() => {
          JB.DDSTools.UploadDDSLevels(IB.PN(), IB, BB, TB, oB, 1)
        }))
      }
    }
  },
  41794: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => cB
    });
    var TB = ZB(37120),
      JB = ZB(37158),
      oB = ZB(40044),
      GB = ZB(37129),
      vB = ZB(37311);
    class kB {
      constructor(BB, IB, ZB, TB) {
        this.name = BB, this.worldAxisForNormal = IB, this.worldAxisForFileX = ZB, this.worldAxisForFileY = TB
      }
    }
    class cB {
      static _NearestPow2Floor(BB) {
        return BB <= 1 ? 1 : 1 << Math.floor(Math.log2(BB))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(BB) {
        if (!BB.isCube) return null;
        BB.JR()?.PN().flushFramebuffer();
        const IB = BB.getSize().width,
          ZB = BB._sphericalPolynomialTargetSize,
          TB = ZB > 0 ? this._NearestPow2Floor(ZB) : 0,
          JB = !BB.noMipmap && !0 === BB._texture?.generateMipMaps,
          oB = TB > 0 && TB < IB && JB,
          GB = oB ? Math.max(0, Math.round(Math.log2(IB / TB))) : 0,
          vB = oB ? Math.max(1, Math.floor(IB / Math.pow(2, GB))) : IB,
          kB = BB.readPixels(0, GB, void 0, !1),
          cB = BB.readPixels(1, GB, void 0, !1);
        let nB, hB;
        BB.isRenderTarget ? (nB = BB.readPixels(3, GB, void 0, !1), hB = BB.readPixels(2, GB, void 0, !1)) : (nB = BB.readPixels(2, GB, void 0, !1), hB = BB.readPixels(3, GB, void 0, !1));
        const zB = BB.readPixels(4, GB, void 0, !1),
          FB = BB.readPixels(5, GB, void 0, !1),
          NB = BB.gammaSpace,
          gB = TB > 0 && TB < IB && !oB;
        return new Promise((BB => {
          Promise.all([cB, kB, nB, hB, zB, FB]).then((ZB => {
            let [JB, oB, GB, kB, cB, nB] = ZB, hB = vB;
            if (gB) {
              const BB = 4;
              JB = this._DownsampleFace(JB, IB, TB, BB), oB = this._DownsampleFace(oB, IB, TB, BB), GB = this._DownsampleFace(GB, IB, TB, BB), kB = this._DownsampleFace(kB, IB, TB, BB), cB = this._DownsampleFace(cB, IB, TB, BB), nB = this._DownsampleFace(nB, IB, TB, BB), hB = TB
            }
            const zB = {
              size: hB,
              right: oB,
              left: JB,
              up: GB,
              down: kB,
              front: cB,
              back: nB,
              format: 5,
              type: JB instanceof Float32Array ? 1 : 0,
              gammaSpace: NB
            };
            BB(this.ConvertCubeMapToSphericalPolynomial(zB))
          }))
        }))
      }
      static _AreaElement(BB, IB) {
        return Math.atan2(BB * IB, Math.sqrt(BB * BB + IB * IB + 1))
      }
      static _DownsampleFace(BB, IB, ZB, TB) {
        const JB = BB instanceof Float32Array ? BB : Float32Array.from(BB),
          oB = ZB * ZB * TB,
          GB = new Float32Array(oB),
          vB = IB / ZB,
          kB = 1 / (vB * vB);
        for (let nB = 0; nB < ZB; nB++) {
          const BB = Math.floor(nB * vB),
            oB = Math.floor((nB + 1) * vB);
          for (let cB = 0; cB < ZB; cB++) {
            const hB = Math.floor(cB * vB),
              zB = Math.floor((cB + 1) * vB),
              FB = (nB * ZB + cB) * TB;
            for (let ZB = 0; ZB < TB; ZB++) {
              let vB = 0;
              for (let GB = BB; GB < oB; GB++)
                for (let BB = hB; BB < zB; BB++) vB += JB[(GB * IB + BB) * TB + ZB];
              GB[FB + ZB] = vB * kB
            }
          }
        }
        if (BB instanceof Float32Array) return GB;
        const cB = new(0, BB.constructor)(oB);
        for (let nB = 0; nB < oB; nB++) cB[nB] = GB[nB] + .5 | 0;
        return cB
      }
      static ConvertCubeMapToSphericalPolynomial(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZB = IB > 0 ? this._NearestPow2Floor(IB) : 0;
        if (ZB > 0 && BB.size > ZB) {
          const IB = 5 === BB.format ? 4 : 3,
            TB = ["right", "left", "up", "down", "front", "back"],
            JB = {};
          for (const oB of TB) JB[oB] = this._DownsampleFace(BB[oB], BB.size, ZB, IB);
          BB = {
            ...BB,
            ...JB,
            size: ZB
          }
        }
        const TB = new oB.c;
        let kB = 0;
        const cB = 2 / BB.size,
          nB = cB,
          hB = .5 * cB,
          zB = hB - 1;
        for (let oB = 0; oB < 6; oB++) {
          const IB = this._FileFaces[oB],
            ZB = BB[IB.name];
          let FB = zB;
          const NB = 5 === BB.format ? 4 : 3;
          for (let oB = 0; oB < BB.size; oB++) {
            let gB = zB;
            for (let nB = 0; nB < BB.size; nB++) {
              const zB = IB.worldAxisForFileX.scale(gB).add(IB.worldAxisForFileY.scale(FB)).add(IB.worldAxisForNormal);
              zB.normalize();
              const qB = this._AreaElement(gB - hB, FB - hB) - this._AreaElement(gB - hB, FB + hB) - this._AreaElement(gB + hB, FB - hB) + this._AreaElement(gB + hB, FB + hB);
              let yB = ZB[oB * BB.size * NB + nB * NB + 0],
                UB = ZB[oB * BB.size * NB + nB * NB + 1],
                WB = ZB[oB * BB.size * NB + nB * NB + 2];
              isNaN(yB) && (yB = 0), isNaN(UB) && (UB = 0), isNaN(WB) && (WB = 0), 0 === BB.type && (yB /= 255, UB /= 255, WB /= 255), BB.gammaSpace && (yB = Math.pow((0, JB.Clamp)(yB), GB.g), UB = Math.pow((0, JB.Clamp)(UB), GB.g), WB = Math.pow((0, JB.Clamp)(WB), GB.g));
              const dB = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const BB = Math.max(yB, UB, WB);
                if (BB > dB) {
                  const IB = dB / BB;
                  yB *= IB, UB *= IB, WB *= IB
                }
              } else yB = (0, JB.Clamp)(yB, 0, dB), UB = (0, JB.Clamp)(UB, 0, dB), WB = (0, JB.Clamp)(WB, 0, dB);
              const CB = new vB.c(yB, UB, WB);
              TB.addLight(zB, CB, qB), kB += qB, gB += cB
            }
            FB += nB
          }
        }
        const FB = 6 * (4 * Math.PI) / 6 / kB;
        return TB.scaleInPlace(FB), TB.convertIncidentRadianceToIrradiance(), TB.convertIrradianceToLambertianRadiance(), oB.f.FromHarmonics(TB)
      }
    }
    cB._FileFaces = [new kB("right", new TB.s(1, 0, 0), new TB.s(0, 0, -1), new TB.s(0, -1, 0)), new kB("left", new TB.s(-1, 0, 0), new TB.s(0, 0, 1), new TB.s(0, -1, 0)), new kB("up", new TB.s(0, 1, 0), new TB.s(1, 0, 0), new TB.s(0, 0, 1)), new kB("down", new TB.s(0, -1, 0), new TB.s(1, 0, 0), new TB.s(0, 0, -1)), new kB("front", new TB.s(0, 0, 1), new TB.s(1, 0, 0), new TB.s(0, -1, 0)), new kB("back", new TB.s(0, 0, -1), new TB.s(-1, 0, 0), new TB.s(0, -1, 0))], cB.MAX_HDRI_VALUE = 4096, cB.PRESERVE_CLAMPED_COLORS = !1
  },
  41790: (BB, IB, ZB) => {
    ZB.d(IB, {
      DDSTools: () => NB
    });
    var TB = ZB(37158),
      JB = ZB(38718),
      oB = ZB(41794),
      GB = ZB(40134);
    const vB = 131072,
      kB = 131072;

    function cB(BB) {
      return BB.charCodeAt(0) + (BB.charCodeAt(1) << 8) + (BB.charCodeAt(2) << 16) + (BB.charCodeAt(3) << 24)
    }
    const nB = cB("DXT1"),
      hB = cB("DXT3"),
      zB = cB("DXT5"),
      FB = cB("DX10");
    class NB {
      static GetDDSInfo(BB) {
        const IB = new Int32Array(BB.buffer, BB.byteOffset, 31),
          ZB = new Int32Array(BB.buffer, BB.byteOffset, 35);
        let TB = 1;
        IB[2] & vB && (TB = Math.max(1, IB[7]));
        const JB = IB[21],
          oB = JB === FB ? ZB[32] : 0;
        let GB = 0;
        switch (JB) {
          case 113:
            GB = 2;
            break;
          case 116:
            GB = 1;
            break;
          case FB:
            if (10 === oB) {
              GB = 2;
              break
            }
            if (2 === oB) {
              GB = 1;
              break
            }
        }
        return {
          width: IB[4],
          height: IB[3],
          mipmapCount: TB,
          isFourCC: 4 === (4 & IB[20]),
          isRGB: 64 === (64 & IB[20]),
          isLuminance: (IB[20] & kB) === kB,
          isCube: 512 === (512 & IB[28]),
          isCompressed: JB === nB || JB === hB || JB === zB,
          dxgiFormat: oB,
          textureType: GB
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(BB, IB, ZB, TB, JB, oB) {
        const vB = new Float32Array(TB),
          kB = new Uint16Array(JB, ZB);
        let cB = 0;
        for (let nB = 0; nB < IB; nB++)
          for (let IB = 0; IB < BB; IB++) {
            const ZB = 4 * (IB + nB * BB);
            vB[cB] = (0, GB.c)(kB[ZB]), vB[cB + 1] = (0, GB.c)(kB[ZB + 1]), vB[cB + 2] = (0, GB.c)(kB[ZB + 2]), NB.StoreLODInAlphaChannel ? vB[cB + 3] = oB : vB[cB + 3] = (0, GB.c)(kB[ZB + 3]), cB += 4
          }
        return vB
      }
      static _GetHalfFloatRGBAArrayBuffer(BB, IB, ZB, TB, JB, oB) {
        if (NB.StoreLODInAlphaChannel) {
          const vB = new Uint16Array(TB),
            kB = new Uint16Array(JB, ZB);
          let cB = 0;
          for (let ZB = 0; ZB < IB; ZB++)
            for (let IB = 0; IB < BB; IB++) {
              const TB = 4 * (IB + ZB * BB);
              vB[cB] = kB[TB], vB[cB + 1] = kB[TB + 1], vB[cB + 2] = kB[TB + 2], vB[cB + 3] = (0, GB.h)(oB), cB += 4
            }
          return vB
        }
        return new Uint16Array(JB, ZB, TB)
      }
      static _GetFloatRGBAArrayBuffer(BB, IB, ZB, TB, JB, oB) {
        if (NB.StoreLODInAlphaChannel) {
          const GB = new Float32Array(TB),
            vB = new Float32Array(JB, ZB);
          let kB = 0;
          for (let ZB = 0; ZB < IB; ZB++)
            for (let IB = 0; IB < BB; IB++) {
              const TB = 4 * (IB + ZB * BB);
              GB[kB] = vB[TB], GB[kB + 1] = vB[TB + 1], GB[kB + 2] = vB[TB + 2], GB[kB + 3] = oB, kB += 4
            }
          return GB
        }
        return new Float32Array(JB, ZB, TB)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(BB, IB, ZB, TB, JB, oB) {
        const vB = new Uint16Array(TB),
          kB = new Float32Array(JB, ZB);
        let cB = 0;
        for (let nB = 0; nB < IB; nB++)
          for (let IB = 0; IB < BB; IB++) vB[cB] = (0, GB.h)(kB[cB]), vB[cB + 1] = (0, GB.h)(kB[cB + 1]), vB[cB + 2] = (0, GB.h)(kB[cB + 2]), NB.StoreLODInAlphaChannel ? vB[cB + 3] = (0, GB.h)(oB) : vB[cB + 3] = (0, GB.h)(kB[cB + 3]), cB += 4;
        return vB
      }
      static _GetFloatAsUIntRGBAArrayBuffer(BB, IB, ZB, JB, oB, GB) {
        const vB = new Uint8Array(JB),
          kB = new Float32Array(oB, ZB);
        let cB = 0;
        for (let nB = 0; nB < IB; nB++)
          for (let IB = 0; IB < BB; IB++) {
            const ZB = 4 * (IB + nB * BB);
            vB[cB] = 255 * (0, TB.Clamp)(kB[ZB]), vB[cB + 1] = 255 * (0, TB.Clamp)(kB[ZB + 1]), vB[cB + 2] = 255 * (0, TB.Clamp)(kB[ZB + 2]), NB.StoreLODInAlphaChannel ? vB[cB + 3] = GB : vB[cB + 3] = 255 * (0, TB.Clamp)(kB[ZB + 3]), cB += 4
          }
        return vB
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(BB, IB, ZB, JB, oB, vB) {
        const kB = new Uint8Array(JB),
          cB = new Uint16Array(oB, ZB);
        let nB = 0;
        for (let hB = 0; hB < IB; hB++)
          for (let IB = 0; IB < BB; IB++) {
            const ZB = 4 * (IB + hB * BB);
            kB[nB] = 255 * (0, TB.Clamp)((0, GB.c)(cB[ZB])), kB[nB + 1] = 255 * (0, TB.Clamp)((0, GB.c)(cB[ZB + 1])), kB[nB + 2] = 255 * (0, TB.Clamp)((0, GB.c)(cB[ZB + 2])), NB.StoreLODInAlphaChannel ? kB[nB + 3] = vB : kB[nB + 3] = 255 * (0, TB.Clamp)((0, GB.c)(cB[ZB + 3])), nB += 4
          }
        return kB
      }
      static _GetRGBAArrayBuffer(BB, IB, ZB, TB, JB, oB, GB, vB, kB) {
        const cB = new Uint8Array(TB),
          nB = new Uint8Array(JB, ZB);
        let hB = 0;
        for (let zB = 0; zB < IB; zB++)
          for (let IB = 0; IB < BB; IB++) {
            const ZB = 4 * (IB + zB * BB);
            cB[hB] = nB[ZB + oB], cB[hB + 1] = nB[ZB + GB], cB[hB + 2] = nB[ZB + vB], cB[hB + 3] = nB[ZB + kB], hB += 4
          }
        return cB
      }
      static _ExtractLongWordOrder(BB) {
        return 0 === BB || 255 === BB || -16777216 === BB ? 0 : 1 + NB._ExtractLongWordOrder(BB >> 8)
      }
      static _GetRGBArrayBuffer(BB, IB, ZB, TB, JB, oB, GB, vB) {
        const kB = new Uint8Array(TB),
          cB = new Uint8Array(JB, ZB);
        let nB = 0;
        for (let hB = 0; hB < IB; hB++)
          for (let IB = 0; IB < BB; IB++) {
            const ZB = 3 * (IB + hB * BB);
            kB[nB] = cB[ZB + oB], kB[nB + 1] = cB[ZB + GB], kB[nB + 2] = cB[ZB + vB], nB += 3
          }
        return kB
      }
      static _GetLuminanceArrayBuffer(BB, IB, ZB, TB, JB) {
        const oB = new Uint8Array(TB),
          GB = new Uint8Array(JB, ZB);
        let vB = 0;
        for (let kB = 0; kB < IB; kB++)
          for (let IB = 0; IB < BB; IB++) {
            const ZB = IB + kB * BB;
            oB[vB] = GB[ZB], vB++
          }
        return oB
      }
      static UploadDDSLevels(BB, IB, ZB, TB, GB, kB) {
        let cB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          gB = arguments.length > 7 ? arguments[7] : void 0,
          qB = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          yB = null;
        TB.sphericalPolynomial && (yB = []);
        const UB = !!BB.getCaps().s3tc;
        IB.generateMipMaps = GB;
        const WB = new Int32Array(ZB.buffer, ZB.byteOffset, 31);
        let dB, CB, QB, sB, wB, OB, YB, iB = 0,
          pB = 0,
          aB = 1;
        if (542327876 !== WB[0]) return void JB.d.Error("Invalid magic number in DDS header");
        if (!TB.isFourCC && !TB.isRGB && !TB.isLuminance) return void JB.d.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (TB.isCompressed && !UB) return void JB.d.Error("Compressed textures are not supported on this platform.");
        let HB = WB[22];
        sB = WB[1] + 4;
        let MB = !1;
        if (TB.isFourCC) switch (dB = WB[21], dB) {
          case nB:
            aB = 8, pB = 33777;
            break;
          case hB:
            aB = 16, pB = 33778;
            break;
          case zB:
            aB = 16, pB = 33779;
            break;
          case 113:
            MB = !0, HB = 64;
            break;
          case 116:
            MB = !0, HB = 128;
            break;
          case FB: {
            sB += 20;
            let BB = !1;
            switch (TB.dxgiFormat) {
              case 10:
                MB = !0, HB = 64, BB = !0;
                break;
              case 2:
                MB = !0, HB = 128, BB = !0;
                break;
              case 88:
                TB.isRGB = !0, TB.isFourCC = !1, HB = 32, BB = !0
            }
            if (BB) break
          }
          default:
            return void JB.d.Error(["Unsupported FourCC code:", (jB = dB, String.fromCharCode(255 & jB, jB >> 8 & 255, jB >> 16 & 255, jB >> 24 & 255))])
        }
        var jB;
        const PB = NB._ExtractLongWordOrder(WB[23]),
          RB = NB._ExtractLongWordOrder(WB[24]),
          rB = NB._ExtractLongWordOrder(WB[25]),
          mB = NB._ExtractLongWordOrder(WB[26]);
        MB && (pB = BB._getRGBABufferInternalSizedFormat(TB.textureType)), OB = 1, WB[2] & vB && !1 !== GB && (OB = Math.max(1, WB[7]));
        const XB = gB || 0,
          LB = BB.getCaps();
        for (let JB = XB; JB < kB; JB++) {
          for (CB = WB[4], QB = WB[3], YB = 0; YB < OB; ++YB) {
            if (-1 === cB || cB === YB) {
              const oB = -1 === cB ? YB : 0;
              if (!TB.isCompressed && TB.isFourCC) {
                IB.format = 5, iB = CB * QB * 4;
                let TB = null;
                if (BB._badOS || BB._badDesktopOS || !LB.textureHalfFloat && !LB.textureFloat) 128 === HB ? (TB = NB._GetFloatAsUIntRGBAArrayBuffer(CB, QB, ZB.byteOffset + sB, iB, ZB.buffer, oB), yB && 0 == oB && yB.push(NB._GetFloatRGBAArrayBuffer(CB, QB, ZB.byteOffset + sB, iB, ZB.buffer, oB))) : 64 === HB && (TB = NB._GetHalfFloatAsUIntRGBAArrayBuffer(CB, QB, ZB.byteOffset + sB, iB, ZB.buffer, oB), yB && 0 == oB && yB.push(NB._GetHalfFloatAsFloatRGBAArrayBuffer(CB, QB, ZB.byteOffset + sB, iB, ZB.buffer, oB))), IB.type = 0;
                else {
                  const BB = LB.textureFloat && (qB && LB.textureFloatLinearFiltering || !qB),
                    JB = LB.textureHalfFloat && (qB && LB.textureHalfFloatLinearFiltering || !qB),
                    GB = (128 === HB || 64 === HB && !JB) && BB ? 1 : (64 === HB || 128 === HB && !BB) && JB ? 2 : 0;
                  let vB, kB = null;
                  if (128 === HB) switch (GB) {
                    case 1:
                      vB = NB._GetFloatRGBAArrayBuffer, kB = null;
                      break;
                    case 2:
                      vB = NB._GetFloatAsHalfFloatRGBAArrayBuffer, kB = NB._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      vB = NB._GetFloatAsUIntRGBAArrayBuffer, kB = NB._GetFloatRGBAArrayBuffer
                  } else switch (GB) {
                    case 1:
                      vB = NB._GetHalfFloatAsFloatRGBAArrayBuffer, kB = null;
                      break;
                    case 2:
                      vB = NB._GetHalfFloatRGBAArrayBuffer, kB = NB._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      vB = NB._GetHalfFloatAsUIntRGBAArrayBuffer, kB = NB._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  IB.type = GB, TB = vB(CB, QB, ZB.byteOffset + sB, iB, ZB.buffer, oB), yB && 0 == oB && yB.push(kB ? kB(CB, QB, ZB.byteOffset + sB, iB, ZB.buffer, oB) : TB)
                }
                TB && BB._uploadDataToTextureDirectly(IB, TB, JB, oB)
              } else if (TB.isRGB) IB.type = 0, 24 === HB ? (IB.format = 4, iB = CB * QB * 3, wB = NB._GetRGBArrayBuffer(CB, QB, ZB.byteOffset + sB, iB, ZB.buffer, PB, RB, rB), BB._uploadDataToTextureDirectly(IB, wB, JB, oB)) : (IB.format = 5, iB = CB * QB * 4, wB = NB._GetRGBAArrayBuffer(CB, QB, ZB.byteOffset + sB, iB, ZB.buffer, PB, RB, rB, mB), BB._uploadDataToTextureDirectly(IB, wB, JB, oB));
              else if (TB.isLuminance) {
                const TB = BB._getUnpackAlignement(),
                  GB = CB;
                iB = Math.floor((CB + TB - 1) / TB) * TB * (QB - 1) + GB, wB = NB._GetLuminanceArrayBuffer(CB, QB, ZB.byteOffset + sB, iB, ZB.buffer), IB.format = 1, IB.type = 0, BB._uploadDataToTextureDirectly(IB, wB, JB, oB)
              } else iB = Math.max(4, CB) / 4 * Math.max(4, QB) / 4 * aB, wB = new Uint8Array(ZB.buffer, ZB.byteOffset + sB, iB), IB.type = 0, BB._uploadCompressedDataToTextureDirectly(IB, pB, CB, QB, wB, JB, oB)
            }
            sB += HB ? CB * QB * (HB / 8) : iB, CB *= .5, QB *= .5, CB = Math.max(1, CB), QB = Math.max(1, QB)
          }
          if (void 0 !== gB) break
        }
        yB && yB.length > 0 ? TB.sphericalPolynomial = oB.d.ConvertCubeMapToSphericalPolynomial({
          size: WB[4],
          right: yB[0],
          left: yB[1],
          up: yB[2],
          down: yB[3],
          front: yB[4],
          back: yB[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : TB.sphericalPolynomial = void 0
      }
    }
    NB.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);