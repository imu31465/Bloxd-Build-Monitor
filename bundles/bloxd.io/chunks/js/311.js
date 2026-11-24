export const id = 311;
export const ids = [311];
export const modules = {
  41862: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => UB
    });
    var QB = zB(37171),
      nB = zB(37208),
      dB = zB(40056),
      IB = zB(37178),
      NB = zB(37379);
    class uB {
      constructor(BB, jB, zB, QB) {
        this.name = BB, this.worldAxisForNormal = jB, this.worldAxisForFileX = zB, this.worldAxisForFileY = QB
      }
    }
    class UB {
      static _NearestPow2Floor(BB) {
        return BB <= 1 ? 1 : 1 << Math.floor(Math.log2(BB))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(BB) {
        if (!BB.isCube) return null;
        BB.aY()?.wJ().flushFramebuffer();
        const jB = BB.getSize().width,
          zB = BB._sphericalPolynomialTargetSize,
          QB = zB > 0 ? this._NearestPow2Floor(zB) : 0,
          nB = !BB.noMipmap && !0 === BB._texture?.generateMipMaps,
          dB = QB > 0 && QB < jB && nB,
          IB = dB ? Math.max(0, Math.round(Math.log2(jB / QB))) : 0,
          NB = dB ? Math.max(1, Math.floor(jB / Math.pow(2, IB))) : jB,
          uB = BB.readPixels(0, IB, void 0, !1),
          UB = BB.readPixels(1, IB, void 0, !1);
        let aB, pB;
        BB.isRenderTarget ? (aB = BB.readPixels(3, IB, void 0, !1), pB = BB.readPixels(2, IB, void 0, !1)) : (aB = BB.readPixels(2, IB, void 0, !1), pB = BB.readPixels(3, IB, void 0, !1));
        const rB = BB.readPixels(4, IB, void 0, !1),
          sB = BB.readPixels(5, IB, void 0, !1),
          JB = BB.gammaSpace,
          mB = QB > 0 && QB < jB && !dB;
        return new Promise((BB => {
          Promise.all([UB, uB, aB, pB, rB, sB]).then((zB => {
            let [nB, dB, IB, uB, UB, aB] = zB, pB = NB;
            if (mB) {
              const BB = 4;
              nB = this._DownsampleFace(nB, jB, QB, BB), dB = this._DownsampleFace(dB, jB, QB, BB), IB = this._DownsampleFace(IB, jB, QB, BB), uB = this._DownsampleFace(uB, jB, QB, BB), UB = this._DownsampleFace(UB, jB, QB, BB), aB = this._DownsampleFace(aB, jB, QB, BB), pB = QB
            }
            const rB = {
              size: pB,
              right: dB,
              left: nB,
              up: IB,
              down: uB,
              front: UB,
              back: aB,
              format: 5,
              type: nB instanceof Float32Array ? 1 : 0,
              gammaSpace: JB
            };
            BB(this.ConvertCubeMapToSphericalPolynomial(rB))
          }))
        }))
      }
      static _AreaElement(BB, jB) {
        return Math.atan2(BB * jB, Math.sqrt(BB * BB + jB * jB + 1))
      }
      static _DownsampleFace(BB, jB, zB, QB) {
        const nB = BB instanceof Float32Array ? BB : Float32Array.from(BB),
          dB = zB * zB * QB,
          IB = new Float32Array(dB),
          NB = jB / zB,
          uB = 1 / (NB * NB);
        for (let aB = 0; aB < zB; aB++) {
          const BB = Math.floor(aB * NB),
            dB = Math.floor((aB + 1) * NB);
          for (let UB = 0; UB < zB; UB++) {
            const pB = Math.floor(UB * NB),
              rB = Math.floor((UB + 1) * NB),
              sB = (aB * zB + UB) * QB;
            for (let zB = 0; zB < QB; zB++) {
              let NB = 0;
              for (let IB = BB; IB < dB; IB++)
                for (let BB = pB; BB < rB; BB++) NB += nB[(IB * jB + BB) * QB + zB];
              IB[sB + zB] = NB * uB
            }
          }
        }
        if (BB instanceof Float32Array) return IB;
        const UB = new(0, BB.constructor)(dB);
        for (let aB = 0; aB < dB; aB++) UB[aB] = IB[aB] + .5 | 0;
        return UB
      }
      static ConvertCubeMapToSphericalPolynomial(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const zB = jB > 0 ? this._NearestPow2Floor(jB) : 0;
        if (zB > 0 && BB.size > zB) {
          const jB = 5 === BB.format ? 4 : 3,
            QB = ["right", "left", "up", "down", "front", "back"],
            nB = {};
          for (const dB of QB) nB[dB] = this._DownsampleFace(BB[dB], BB.size, zB, jB);
          BB = {
            ...BB,
            ...nB,
            size: zB
          }
        }
        const QB = new dB.d;
        let uB = 0;
        const UB = 2 / BB.size,
          aB = UB,
          pB = .5 * UB,
          rB = pB - 1;
        for (let dB = 0; dB < 6; dB++) {
          const jB = this._FileFaces[dB],
            zB = BB[jB.name];
          let sB = rB;
          const JB = 5 === BB.format ? 4 : 3;
          for (let dB = 0; dB < BB.size; dB++) {
            let mB = rB;
            for (let aB = 0; aB < BB.size; aB++) {
              const rB = jB.worldAxisForFileX.scale(mB).add(jB.worldAxisForFileY.scale(sB)).add(jB.worldAxisForNormal);
              rB.normalize();
              const yB = this._AreaElement(mB - pB, sB - pB) - this._AreaElement(mB - pB, sB + pB) - this._AreaElement(mB + pB, sB - pB) + this._AreaElement(mB + pB, sB + pB);
              let kB = zB[dB * BB.size * JB + aB * JB + 0],
                GB = zB[dB * BB.size * JB + aB * JB + 1],
                LB = zB[dB * BB.size * JB + aB * JB + 2];
              isNaN(kB) && (kB = 0), isNaN(GB) && (GB = 0), isNaN(LB) && (LB = 0), 0 === BB.type && (kB /= 255, GB /= 255, LB /= 255), BB.gammaSpace && (kB = Math.pow((0, nB.Clamp)(kB), IB.h), GB = Math.pow((0, nB.Clamp)(GB), IB.h), LB = Math.pow((0, nB.Clamp)(LB), IB.h));
              const gB = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const BB = Math.max(kB, GB, LB);
                if (BB > gB) {
                  const jB = gB / BB;
                  kB *= jB, GB *= jB, LB *= jB
                }
              } else kB = (0, nB.Clamp)(kB, 0, gB), GB = (0, nB.Clamp)(GB, 0, gB), LB = (0, nB.Clamp)(LB, 0, gB);
              const tB = new NB.d(kB, GB, LB);
              QB.addLight(rB, tB, yB), uB += yB, mB += UB
            }
            sB += aB
          }
        }
        const sB = 6 * (4 * Math.PI) / 6 / uB;
        return QB.scaleInPlace(sB), QB.convertIncidentRadianceToIrradiance(), QB.convertIrradianceToLambertianRadiance(), dB.h.FromHarmonics(QB)
      }
    }
    UB._FileFaces = [new uB("right", new QB.m(1, 0, 0), new QB.m(0, 0, -1), new QB.m(0, -1, 0)), new uB("left", new QB.m(-1, 0, 0), new QB.m(0, 0, 1), new QB.m(0, -1, 0)), new uB("up", new QB.m(0, 1, 0), new QB.m(1, 0, 0), new QB.m(0, 0, 1)), new uB("down", new QB.m(0, -1, 0), new QB.m(1, 0, 0), new QB.m(0, 0, -1)), new uB("front", new QB.m(0, 0, 1), new QB.m(1, 0, 0), new QB.m(0, -1, 0)), new uB("back", new QB.m(0, 0, -1), new QB.m(-1, 0, 0), new QB.m(0, -1, 0))], UB.MAX_HDRI_VALUE = 4096, UB.PRESERVE_CLAMPED_COLORS = !1
  },
  41853: (BB, jB, zB) => {
    zB.d(jB, {
      DDSTools: () => JB
    });
    var QB = zB(37208),
      nB = zB(38783),
      dB = zB(41862),
      IB = zB(40130);
    const NB = 131072,
      uB = 131072;

    function UB(BB) {
      return BB.charCodeAt(0) + (BB.charCodeAt(1) << 8) + (BB.charCodeAt(2) << 16) + (BB.charCodeAt(3) << 24)
    }
    const aB = UB("DXT1"),
      pB = UB("DXT3"),
      rB = UB("DXT5"),
      sB = UB("DX10");
    class JB {
      static GetDDSInfo(BB) {
        const jB = new Int32Array(BB.buffer, BB.byteOffset, 31),
          zB = new Int32Array(BB.buffer, BB.byteOffset, 35);
        let QB = 1;
        jB[2] & NB && (QB = Math.max(1, jB[7]));
        const nB = jB[21],
          dB = nB === sB ? zB[32] : 0;
        let IB = 0;
        switch (nB) {
          case 113:
            IB = 2;
            break;
          case 116:
            IB = 1;
            break;
          case sB:
            if (10 === dB) {
              IB = 2;
              break
            }
            if (2 === dB) {
              IB = 1;
              break
            }
        }
        return {
          width: jB[4],
          height: jB[3],
          mipmapCount: QB,
          isFourCC: 4 === (4 & jB[20]),
          isRGB: 64 === (64 & jB[20]),
          isLuminance: (jB[20] & uB) === uB,
          isCube: 512 === (512 & jB[28]),
          isCompressed: nB === aB || nB === pB || nB === rB,
          dxgiFormat: dB,
          textureType: IB
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(BB, jB, zB, QB, nB, dB) {
        const NB = new Float32Array(QB),
          uB = new Uint16Array(nB, zB);
        let UB = 0;
        for (let aB = 0; aB < jB; aB++)
          for (let jB = 0; jB < BB; jB++) {
            const zB = 4 * (jB + aB * BB);
            NB[UB] = (0, IB.c)(uB[zB]), NB[UB + 1] = (0, IB.c)(uB[zB + 1]), NB[UB + 2] = (0, IB.c)(uB[zB + 2]), JB.StoreLODInAlphaChannel ? NB[UB + 3] = dB : NB[UB + 3] = (0, IB.c)(uB[zB + 3]), UB += 4
          }
        return NB
      }
      static _GetHalfFloatRGBAArrayBuffer(BB, jB, zB, QB, nB, dB) {
        if (JB.StoreLODInAlphaChannel) {
          const NB = new Uint16Array(QB),
            uB = new Uint16Array(nB, zB);
          let UB = 0;
          for (let zB = 0; zB < jB; zB++)
            for (let jB = 0; jB < BB; jB++) {
              const QB = 4 * (jB + zB * BB);
              NB[UB] = uB[QB], NB[UB + 1] = uB[QB + 1], NB[UB + 2] = uB[QB + 2], NB[UB + 3] = (0, IB.f)(dB), UB += 4
            }
          return NB
        }
        return new Uint16Array(nB, zB, QB)
      }
      static _GetFloatRGBAArrayBuffer(BB, jB, zB, QB, nB, dB) {
        if (JB.StoreLODInAlphaChannel) {
          const IB = new Float32Array(QB),
            NB = new Float32Array(nB, zB);
          let uB = 0;
          for (let zB = 0; zB < jB; zB++)
            for (let jB = 0; jB < BB; jB++) {
              const QB = 4 * (jB + zB * BB);
              IB[uB] = NB[QB], IB[uB + 1] = NB[QB + 1], IB[uB + 2] = NB[QB + 2], IB[uB + 3] = dB, uB += 4
            }
          return IB
        }
        return new Float32Array(nB, zB, QB)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(BB, jB, zB, QB, nB, dB) {
        const NB = new Uint16Array(QB),
          uB = new Float32Array(nB, zB);
        let UB = 0;
        for (let aB = 0; aB < jB; aB++)
          for (let jB = 0; jB < BB; jB++) NB[UB] = (0, IB.f)(uB[UB]), NB[UB + 1] = (0, IB.f)(uB[UB + 1]), NB[UB + 2] = (0, IB.f)(uB[UB + 2]), JB.StoreLODInAlphaChannel ? NB[UB + 3] = (0, IB.f)(dB) : NB[UB + 3] = (0, IB.f)(uB[UB + 3]), UB += 4;
        return NB
      }
      static _GetFloatAsUIntRGBAArrayBuffer(BB, jB, zB, nB, dB, IB) {
        const NB = new Uint8Array(nB),
          uB = new Float32Array(dB, zB);
        let UB = 0;
        for (let aB = 0; aB < jB; aB++)
          for (let jB = 0; jB < BB; jB++) {
            const zB = 4 * (jB + aB * BB);
            NB[UB] = 255 * (0, QB.Clamp)(uB[zB]), NB[UB + 1] = 255 * (0, QB.Clamp)(uB[zB + 1]), NB[UB + 2] = 255 * (0, QB.Clamp)(uB[zB + 2]), JB.StoreLODInAlphaChannel ? NB[UB + 3] = IB : NB[UB + 3] = 255 * (0, QB.Clamp)(uB[zB + 3]), UB += 4
          }
        return NB
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(BB, jB, zB, nB, dB, NB) {
        const uB = new Uint8Array(nB),
          UB = new Uint16Array(dB, zB);
        let aB = 0;
        for (let pB = 0; pB < jB; pB++)
          for (let jB = 0; jB < BB; jB++) {
            const zB = 4 * (jB + pB * BB);
            uB[aB] = 255 * (0, QB.Clamp)((0, IB.c)(UB[zB])), uB[aB + 1] = 255 * (0, QB.Clamp)((0, IB.c)(UB[zB + 1])), uB[aB + 2] = 255 * (0, QB.Clamp)((0, IB.c)(UB[zB + 2])), JB.StoreLODInAlphaChannel ? uB[aB + 3] = NB : uB[aB + 3] = 255 * (0, QB.Clamp)((0, IB.c)(UB[zB + 3])), aB += 4
          }
        return uB
      }
      static _GetRGBAArrayBuffer(BB, jB, zB, QB, nB, dB, IB, NB, uB) {
        const UB = new Uint8Array(QB),
          aB = new Uint8Array(nB, zB);
        let pB = 0;
        for (let rB = 0; rB < jB; rB++)
          for (let jB = 0; jB < BB; jB++) {
            const zB = 4 * (jB + rB * BB);
            UB[pB] = aB[zB + dB], UB[pB + 1] = aB[zB + IB], UB[pB + 2] = aB[zB + NB], UB[pB + 3] = aB[zB + uB], pB += 4
          }
        return UB
      }
      static _ExtractLongWordOrder(BB) {
        return 0 === BB || 255 === BB || -16777216 === BB ? 0 : 1 + JB._ExtractLongWordOrder(BB >> 8)
      }
      static _GetRGBArrayBuffer(BB, jB, zB, QB, nB, dB, IB, NB) {
        const uB = new Uint8Array(QB),
          UB = new Uint8Array(nB, zB);
        let aB = 0;
        for (let pB = 0; pB < jB; pB++)
          for (let jB = 0; jB < BB; jB++) {
            const zB = 3 * (jB + pB * BB);
            uB[aB] = UB[zB + dB], uB[aB + 1] = UB[zB + IB], uB[aB + 2] = UB[zB + NB], aB += 3
          }
        return uB
      }
      static _GetLuminanceArrayBuffer(BB, jB, zB, QB, nB) {
        const dB = new Uint8Array(QB),
          IB = new Uint8Array(nB, zB);
        let NB = 0;
        for (let uB = 0; uB < jB; uB++)
          for (let jB = 0; jB < BB; jB++) {
            const zB = jB + uB * BB;
            dB[NB] = IB[zB], NB++
          }
        return dB
      }
      static UploadDDSLevels(BB, jB, zB, QB, IB, uB) {
        let UB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          mB = arguments.length > 7 ? arguments[7] : void 0,
          yB = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          kB = null;
        QB.sphericalPolynomial && (kB = []);
        const GB = !!BB.getCaps().s3tc;
        jB.generateMipMaps = IB;
        const LB = new Int32Array(zB.buffer, zB.byteOffset, 31);
        let gB, tB, SB, MB, EB, iB, qB, fB = 0,
          oB = 0,
          HB = 1;
        if (542327876 !== LB[0]) return void nB.c.Error("Invalid magic number in DDS header");
        if (!QB.isFourCC && !QB.isRGB && !QB.isLuminance) return void nB.c.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (QB.isCompressed && !GB) return void nB.c.Error("Compressed textures are not supported on this platform.");
        let DB = LB[22];
        MB = LB[1] + 4;
        let FB = !1;
        if (QB.isFourCC) switch (gB = LB[21], gB) {
          case aB:
            HB = 8, oB = 33777;
            break;
          case pB:
            HB = 16, oB = 33778;
            break;
          case rB:
            HB = 16, oB = 33779;
            break;
          case 113:
            FB = !0, DB = 64;
            break;
          case 116:
            FB = !0, DB = 128;
            break;
          case sB: {
            MB += 20;
            let BB = !1;
            switch (QB.dxgiFormat) {
              case 10:
                FB = !0, DB = 64, BB = !0;
                break;
              case 2:
                FB = !0, DB = 128, BB = !0;
                break;
              case 88:
                QB.isRGB = !0, QB.isFourCC = !1, DB = 32, BB = !0
            }
            if (BB) break
          }
          default:
            return void nB.c.Error(["Unsupported FourCC code:", (YB = gB, String.fromCharCode(255 & YB, YB >> 8 & 255, YB >> 16 & 255, YB >> 24 & 255))])
        }
        var YB;
        const VB = JB._ExtractLongWordOrder(LB[23]),
          hB = JB._ExtractLongWordOrder(LB[24]),
          XB = JB._ExtractLongWordOrder(LB[25]),
          ZB = JB._ExtractLongWordOrder(LB[26]);
        FB && (oB = BB._getRGBABufferInternalSizedFormat(QB.textureType)), iB = 1, LB[2] & NB && !1 !== IB && (iB = Math.max(1, LB[7]));
        const AB = mB || 0,
          TB = BB.getCaps();
        for (let nB = AB; nB < uB; nB++) {
          for (tB = LB[4], SB = LB[3], qB = 0; qB < iB; ++qB) {
            if (-1 === UB || UB === qB) {
              const dB = -1 === UB ? qB : 0;
              if (!QB.isCompressed && QB.isFourCC) {
                jB.format = 5, fB = tB * SB * 4;
                let QB = null;
                if (BB._badOS || BB._badDesktopOS || !TB.textureHalfFloat && !TB.textureFloat) 128 === DB ? (QB = JB._GetFloatAsUIntRGBAArrayBuffer(tB, SB, zB.byteOffset + MB, fB, zB.buffer, dB), kB && 0 == dB && kB.push(JB._GetFloatRGBAArrayBuffer(tB, SB, zB.byteOffset + MB, fB, zB.buffer, dB))) : 64 === DB && (QB = JB._GetHalfFloatAsUIntRGBAArrayBuffer(tB, SB, zB.byteOffset + MB, fB, zB.buffer, dB), kB && 0 == dB && kB.push(JB._GetHalfFloatAsFloatRGBAArrayBuffer(tB, SB, zB.byteOffset + MB, fB, zB.buffer, dB))), jB.type = 0;
                else {
                  const BB = TB.textureFloat && (yB && TB.textureFloatLinearFiltering || !yB),
                    nB = TB.textureHalfFloat && (yB && TB.textureHalfFloatLinearFiltering || !yB),
                    IB = (128 === DB || 64 === DB && !nB) && BB ? 1 : (64 === DB || 128 === DB && !BB) && nB ? 2 : 0;
                  let NB, uB = null;
                  if (128 === DB) switch (IB) {
                    case 1:
                      NB = JB._GetFloatRGBAArrayBuffer, uB = null;
                      break;
                    case 2:
                      NB = JB._GetFloatAsHalfFloatRGBAArrayBuffer, uB = JB._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      NB = JB._GetFloatAsUIntRGBAArrayBuffer, uB = JB._GetFloatRGBAArrayBuffer
                  } else switch (IB) {
                    case 1:
                      NB = JB._GetHalfFloatAsFloatRGBAArrayBuffer, uB = null;
                      break;
                    case 2:
                      NB = JB._GetHalfFloatRGBAArrayBuffer, uB = JB._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      NB = JB._GetHalfFloatAsUIntRGBAArrayBuffer, uB = JB._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  jB.type = IB, QB = NB(tB, SB, zB.byteOffset + MB, fB, zB.buffer, dB), kB && 0 == dB && kB.push(uB ? uB(tB, SB, zB.byteOffset + MB, fB, zB.buffer, dB) : QB)
                }
                QB && BB._uploadDataToTextureDirectly(jB, QB, nB, dB)
              } else if (QB.isRGB) jB.type = 0, 24 === DB ? (jB.format = 4, fB = tB * SB * 3, EB = JB._GetRGBArrayBuffer(tB, SB, zB.byteOffset + MB, fB, zB.buffer, VB, hB, XB), BB._uploadDataToTextureDirectly(jB, EB, nB, dB)) : (jB.format = 5, fB = tB * SB * 4, EB = JB._GetRGBAArrayBuffer(tB, SB, zB.byteOffset + MB, fB, zB.buffer, VB, hB, XB, ZB), BB._uploadDataToTextureDirectly(jB, EB, nB, dB));
              else if (QB.isLuminance) {
                const QB = BB._getUnpackAlignement(),
                  IB = tB;
                fB = Math.floor((tB + QB - 1) / QB) * QB * (SB - 1) + IB, EB = JB._GetLuminanceArrayBuffer(tB, SB, zB.byteOffset + MB, fB, zB.buffer), jB.format = 1, jB.type = 0, BB._uploadDataToTextureDirectly(jB, EB, nB, dB)
              } else fB = Math.max(4, tB) / 4 * Math.max(4, SB) / 4 * HB, EB = new Uint8Array(zB.buffer, zB.byteOffset + MB, fB), jB.type = 0, BB._uploadCompressedDataToTextureDirectly(jB, oB, tB, SB, EB, nB, dB)
            }
            MB += DB ? tB * SB * (DB / 8) : fB, tB *= .5, SB *= .5, tB = Math.max(1, tB), SB = Math.max(1, SB)
          }
          if (void 0 !== mB) break
        }
        kB && kB.length > 0 ? QB.sphericalPolynomial = dB.b.ConvertCubeMapToSphericalPolynomial({
          size: LB[4],
          right: kB[0],
          left: kB[1],
          up: kB[2],
          down: kB[3],
          front: kB[4],
          back: kB[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : QB.sphericalPolynomial = void 0
      }
    }
    JB.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);