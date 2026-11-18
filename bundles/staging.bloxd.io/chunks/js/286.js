export const id = 286;
export const ids = [286];
export const modules = {
  40463: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => gB
    });
    var VB = dB(36126),
      yB = dB(36157),
      pB = dB(38732),
      lB = dB(36132),
      JB = dB(36183);
    class YB {
      constructor(BB, TB, dB, VB) {
        this.name = BB, this.worldAxisForNormal = TB, this.worldAxisForFileX = dB, this.worldAxisForFileY = VB
      }
    }
    class gB {
      static _NearestPow2Floor(BB) {
        return BB <= 1 ? 1 : 1 << Math.floor(Math.log2(BB))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(BB) {
        if (!BB.isCube) return null;
        BB.jU()?.PD().flushFramebuffer();
        const TB = BB.getSize().width,
          dB = BB._sphericalPolynomialTargetSize,
          VB = dB > 0 ? this._NearestPow2Floor(dB) : 0,
          yB = !BB.noMipmap && !0 === BB._texture?.generateMipMaps,
          pB = VB > 0 && VB < TB && yB,
          lB = pB ? Math.max(0, Math.round(Math.log2(TB / VB))) : 0,
          JB = pB ? Math.max(1, Math.floor(TB / Math.pow(2, lB))) : TB,
          YB = BB.readPixels(0, lB, void 0, !1),
          gB = BB.readPixels(1, lB, void 0, !1);
        let oB, kB;
        BB.isRenderTarget ? (oB = BB.readPixels(3, lB, void 0, !1), kB = BB.readPixels(2, lB, void 0, !1)) : (oB = BB.readPixels(2, lB, void 0, !1), kB = BB.readPixels(3, lB, void 0, !1));
        const LB = BB.readPixels(4, lB, void 0, !1),
          OB = BB.readPixels(5, lB, void 0, !1),
          DB = BB.gammaSpace,
          uB = VB > 0 && VB < TB && !pB;
        return new Promise((BB => {
          Promise.all([gB, YB, oB, kB, LB, OB]).then((dB => {
            let [yB, pB, lB, YB, gB, oB] = dB, kB = JB;
            if (uB) {
              const BB = 4;
              yB = this._DownsampleFace(yB, TB, VB, BB), pB = this._DownsampleFace(pB, TB, VB, BB), lB = this._DownsampleFace(lB, TB, VB, BB), YB = this._DownsampleFace(YB, TB, VB, BB), gB = this._DownsampleFace(gB, TB, VB, BB), oB = this._DownsampleFace(oB, TB, VB, BB), kB = VB
            }
            const LB = {
              size: kB,
              right: pB,
              left: yB,
              up: lB,
              down: YB,
              front: gB,
              back: oB,
              format: 5,
              type: yB instanceof Float32Array ? 1 : 0,
              gammaSpace: DB
            };
            BB(this.ConvertCubeMapToSphericalPolynomial(LB))
          }))
        }))
      }
      static _AreaElement(BB, TB) {
        return Math.atan2(BB * TB, Math.sqrt(BB * BB + TB * TB + 1))
      }
      static _DownsampleFace(BB, TB, dB, VB) {
        const yB = BB instanceof Float32Array ? BB : Float32Array.from(BB),
          pB = dB * dB * VB,
          lB = new Float32Array(pB),
          JB = TB / dB,
          YB = 1 / (JB * JB);
        for (let oB = 0; oB < dB; oB++) {
          const BB = Math.floor(oB * JB),
            pB = Math.floor((oB + 1) * JB);
          for (let gB = 0; gB < dB; gB++) {
            const kB = Math.floor(gB * JB),
              LB = Math.floor((gB + 1) * JB),
              OB = (oB * dB + gB) * VB;
            for (let dB = 0; dB < VB; dB++) {
              let JB = 0;
              for (let lB = BB; lB < pB; lB++)
                for (let BB = kB; BB < LB; BB++) JB += yB[(lB * TB + BB) * VB + dB];
              lB[OB + dB] = JB * YB
            }
          }
        }
        if (BB instanceof Float32Array) return lB;
        const gB = new(0, BB.constructor)(pB);
        for (let oB = 0; oB < pB; oB++) gB[oB] = lB[oB] + .5 | 0;
        return gB
      }
      static ConvertCubeMapToSphericalPolynomial(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const dB = TB > 0 ? this._NearestPow2Floor(TB) : 0;
        if (dB > 0 && BB.size > dB) {
          const TB = 5 === BB.format ? 4 : 3,
            VB = ["right", "left", "up", "down", "front", "back"],
            yB = {};
          for (const pB of VB) yB[pB] = this._DownsampleFace(BB[pB], BB.size, dB, TB);
          BB = {
            ...BB,
            ...yB,
            size: dB
          }
        }
        const VB = new pB.b;
        let YB = 0;
        const gB = 2 / BB.size,
          oB = gB,
          kB = .5 * gB,
          LB = kB - 1;
        for (let pB = 0; pB < 6; pB++) {
          const TB = this._FileFaces[pB],
            dB = BB[TB.name];
          let OB = LB;
          const DB = 5 === BB.format ? 4 : 3;
          for (let pB = 0; pB < BB.size; pB++) {
            let uB = LB;
            for (let oB = 0; oB < BB.size; oB++) {
              const LB = TB.worldAxisForFileX.scale(uB).add(TB.worldAxisForFileY.scale(OB)).add(TB.worldAxisForNormal);
              LB.normalize();
              const HB = this._AreaElement(uB - kB, OB - kB) - this._AreaElement(uB - kB, OB + kB) - this._AreaElement(uB + kB, OB - kB) + this._AreaElement(uB + kB, OB + kB);
              let EB = dB[pB * BB.size * DB + oB * DB + 0],
                vB = dB[pB * BB.size * DB + oB * DB + 1],
                mB = dB[pB * BB.size * DB + oB * DB + 2];
              isNaN(EB) && (EB = 0), isNaN(vB) && (vB = 0), isNaN(mB) && (mB = 0), 0 === BB.type && (EB /= 255, vB /= 255, mB /= 255), BB.gammaSpace && (EB = Math.pow((0, yB.Clamp)(EB), lB.j), vB = Math.pow((0, yB.Clamp)(vB), lB.j), mB = Math.pow((0, yB.Clamp)(mB), lB.j));
              const iB = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const BB = Math.max(EB, vB, mB);
                if (BB > iB) {
                  const TB = iB / BB;
                  EB *= TB, vB *= TB, mB *= TB
                }
              } else EB = (0, yB.Clamp)(EB, 0, iB), vB = (0, yB.Clamp)(vB, 0, iB), mB = (0, yB.Clamp)(mB, 0, iB);
              const NB = new JB.c(EB, vB, mB);
              VB.addLight(LB, NB, HB), YB += HB, uB += gB
            }
            OB += oB
          }
        }
        const OB = 6 * (4 * Math.PI) / 6 / YB;
        return VB.scaleInPlace(OB), VB.convertIncidentRadianceToIrradiance(), VB.convertIrradianceToLambertianRadiance(), pB.d.FromHarmonics(VB)
      }
    }
    gB._FileFaces = [new YB("right", new VB.p(1, 0, 0), new VB.p(0, 0, -1), new VB.p(0, -1, 0)), new YB("left", new VB.p(-1, 0, 0), new VB.p(0, 0, 1), new VB.p(0, -1, 0)), new YB("up", new VB.p(0, 1, 0), new VB.p(1, 0, 0), new VB.p(0, 0, 1)), new YB("down", new VB.p(0, -1, 0), new VB.p(1, 0, 0), new VB.p(0, 0, -1)), new YB("front", new VB.p(0, 0, 1), new VB.p(1, 0, 0), new VB.p(0, -1, 0)), new YB("back", new VB.p(0, 0, -1), new VB.p(-1, 0, 0), new VB.p(0, -1, 0))], gB.MAX_HDRI_VALUE = 4096, gB.PRESERVE_CLAMPED_COLORS = !1
  },
  40461: (BB, TB, dB) => {
    dB.d(TB, {
      DDSTools: () => DB
    });
    var VB = dB(36157),
      yB = dB(37651),
      pB = dB(40463),
      lB = dB(38825);
    const JB = 131072,
      YB = 131072;

    function gB(BB) {
      return BB.charCodeAt(0) + (BB.charCodeAt(1) << 8) + (BB.charCodeAt(2) << 16) + (BB.charCodeAt(3) << 24)
    }
    const oB = gB("DXT1"),
      kB = gB("DXT3"),
      LB = gB("DXT5"),
      OB = gB("DX10");
    class DB {
      static GetDDSInfo(BB) {
        const TB = new Int32Array(BB.buffer, BB.byteOffset, 31),
          dB = new Int32Array(BB.buffer, BB.byteOffset, 35);
        let VB = 1;
        TB[2] & JB && (VB = Math.max(1, TB[7]));
        const yB = TB[21],
          pB = yB === OB ? dB[32] : 0;
        let lB = 0;
        switch (yB) {
          case 113:
            lB = 2;
            break;
          case 116:
            lB = 1;
            break;
          case OB:
            if (10 === pB) {
              lB = 2;
              break
            }
            if (2 === pB) {
              lB = 1;
              break
            }
        }
        return {
          width: TB[4],
          height: TB[3],
          mipmapCount: VB,
          isFourCC: 4 === (4 & TB[20]),
          isRGB: 64 === (64 & TB[20]),
          isLuminance: (TB[20] & YB) === YB,
          isCube: 512 === (512 & TB[28]),
          isCompressed: yB === oB || yB === kB || yB === LB,
          dxgiFormat: pB,
          textureType: lB
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(BB, TB, dB, VB, yB, pB) {
        const JB = new Float32Array(VB),
          YB = new Uint16Array(yB, dB);
        let gB = 0;
        for (let oB = 0; oB < TB; oB++)
          for (let TB = 0; TB < BB; TB++) {
            const dB = 4 * (TB + oB * BB);
            JB[gB] = (0, lB.d)(YB[dB]), JB[gB + 1] = (0, lB.d)(YB[dB + 1]), JB[gB + 2] = (0, lB.d)(YB[dB + 2]), DB.StoreLODInAlphaChannel ? JB[gB + 3] = pB : JB[gB + 3] = (0, lB.d)(YB[dB + 3]), gB += 4
          }
        return JB
      }
      static _GetHalfFloatRGBAArrayBuffer(BB, TB, dB, VB, yB, pB) {
        if (DB.StoreLODInAlphaChannel) {
          const JB = new Uint16Array(VB),
            YB = new Uint16Array(yB, dB);
          let gB = 0;
          for (let dB = 0; dB < TB; dB++)
            for (let TB = 0; TB < BB; TB++) {
              const VB = 4 * (TB + dB * BB);
              JB[gB] = YB[VB], JB[gB + 1] = YB[VB + 1], JB[gB + 2] = YB[VB + 2], JB[gB + 3] = (0, lB.i)(pB), gB += 4
            }
          return JB
        }
        return new Uint16Array(yB, dB, VB)
      }
      static _GetFloatRGBAArrayBuffer(BB, TB, dB, VB, yB, pB) {
        if (DB.StoreLODInAlphaChannel) {
          const lB = new Float32Array(VB),
            JB = new Float32Array(yB, dB);
          let YB = 0;
          for (let dB = 0; dB < TB; dB++)
            for (let TB = 0; TB < BB; TB++) {
              const VB = 4 * (TB + dB * BB);
              lB[YB] = JB[VB], lB[YB + 1] = JB[VB + 1], lB[YB + 2] = JB[VB + 2], lB[YB + 3] = pB, YB += 4
            }
          return lB
        }
        return new Float32Array(yB, dB, VB)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(BB, TB, dB, VB, yB, pB) {
        const JB = new Uint16Array(VB),
          YB = new Float32Array(yB, dB);
        let gB = 0;
        for (let oB = 0; oB < TB; oB++)
          for (let TB = 0; TB < BB; TB++) JB[gB] = (0, lB.i)(YB[gB]), JB[gB + 1] = (0, lB.i)(YB[gB + 1]), JB[gB + 2] = (0, lB.i)(YB[gB + 2]), DB.StoreLODInAlphaChannel ? JB[gB + 3] = (0, lB.i)(pB) : JB[gB + 3] = (0, lB.i)(YB[gB + 3]), gB += 4;
        return JB
      }
      static _GetFloatAsUIntRGBAArrayBuffer(BB, TB, dB, yB, pB, lB) {
        const JB = new Uint8Array(yB),
          YB = new Float32Array(pB, dB);
        let gB = 0;
        for (let oB = 0; oB < TB; oB++)
          for (let TB = 0; TB < BB; TB++) {
            const dB = 4 * (TB + oB * BB);
            JB[gB] = 255 * (0, VB.Clamp)(YB[dB]), JB[gB + 1] = 255 * (0, VB.Clamp)(YB[dB + 1]), JB[gB + 2] = 255 * (0, VB.Clamp)(YB[dB + 2]), DB.StoreLODInAlphaChannel ? JB[gB + 3] = lB : JB[gB + 3] = 255 * (0, VB.Clamp)(YB[dB + 3]), gB += 4
          }
        return JB
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(BB, TB, dB, yB, pB, JB) {
        const YB = new Uint8Array(yB),
          gB = new Uint16Array(pB, dB);
        let oB = 0;
        for (let kB = 0; kB < TB; kB++)
          for (let TB = 0; TB < BB; TB++) {
            const dB = 4 * (TB + kB * BB);
            YB[oB] = 255 * (0, VB.Clamp)((0, lB.d)(gB[dB])), YB[oB + 1] = 255 * (0, VB.Clamp)((0, lB.d)(gB[dB + 1])), YB[oB + 2] = 255 * (0, VB.Clamp)((0, lB.d)(gB[dB + 2])), DB.StoreLODInAlphaChannel ? YB[oB + 3] = JB : YB[oB + 3] = 255 * (0, VB.Clamp)((0, lB.d)(gB[dB + 3])), oB += 4
          }
        return YB
      }
      static _GetRGBAArrayBuffer(BB, TB, dB, VB, yB, pB, lB, JB, YB) {
        const gB = new Uint8Array(VB),
          oB = new Uint8Array(yB, dB);
        let kB = 0;
        for (let LB = 0; LB < TB; LB++)
          for (let TB = 0; TB < BB; TB++) {
            const dB = 4 * (TB + LB * BB);
            gB[kB] = oB[dB + pB], gB[kB + 1] = oB[dB + lB], gB[kB + 2] = oB[dB + JB], gB[kB + 3] = oB[dB + YB], kB += 4
          }
        return gB
      }
      static _ExtractLongWordOrder(BB) {
        return 0 === BB || 255 === BB || -16777216 === BB ? 0 : 1 + DB._ExtractLongWordOrder(BB >> 8)
      }
      static _GetRGBArrayBuffer(BB, TB, dB, VB, yB, pB, lB, JB) {
        const YB = new Uint8Array(VB),
          gB = new Uint8Array(yB, dB);
        let oB = 0;
        for (let kB = 0; kB < TB; kB++)
          for (let TB = 0; TB < BB; TB++) {
            const dB = 3 * (TB + kB * BB);
            YB[oB] = gB[dB + pB], YB[oB + 1] = gB[dB + lB], YB[oB + 2] = gB[dB + JB], oB += 3
          }
        return YB
      }
      static _GetLuminanceArrayBuffer(BB, TB, dB, VB, yB) {
        const pB = new Uint8Array(VB),
          lB = new Uint8Array(yB, dB);
        let JB = 0;
        for (let YB = 0; YB < TB; YB++)
          for (let TB = 0; TB < BB; TB++) {
            const dB = TB + YB * BB;
            pB[JB] = lB[dB], JB++
          }
        return pB
      }
      static UploadDDSLevels(BB, TB, dB, VB, lB, YB) {
        let gB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          uB = arguments.length > 7 ? arguments[7] : void 0,
          HB = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          EB = null;
        VB.sphericalPolynomial && (EB = []);
        const vB = !!BB.getCaps().s3tc;
        TB.generateMipMaps = lB;
        const mB = new Int32Array(dB.buffer, dB.byteOffset, 31);
        let iB, NB, tB, fB, sB, MB, zB, wB = 0,
          UB = 0,
          FB = 1;
        if (542327876 !== mB[0]) return void yB.b.Error("Invalid magic number in DDS header");
        if (!VB.isFourCC && !VB.isRGB && !VB.isLuminance) return void yB.b.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (VB.isCompressed && !vB) return void yB.b.Error("Compressed textures are not supported on this platform.");
        let KB = mB[22];
        fB = mB[1] + 4;
        let rB = !1;
        if (VB.isFourCC) switch (iB = mB[21], iB) {
          case oB:
            FB = 8, UB = 33777;
            break;
          case kB:
            FB = 16, UB = 33778;
            break;
          case LB:
            FB = 16, UB = 33779;
            break;
          case 113:
            rB = !0, KB = 64;
            break;
          case 116:
            rB = !0, KB = 128;
            break;
          case OB: {
            fB += 20;
            let BB = !1;
            switch (VB.dxgiFormat) {
              case 10:
                rB = !0, KB = 64, BB = !0;
                break;
              case 2:
                rB = !0, KB = 128, BB = !0;
                break;
              case 88:
                VB.isRGB = !0, VB.isFourCC = !1, KB = 32, BB = !0
            }
            if (BB) break
          }
          default:
            return void yB.b.Error(["Unsupported FourCC code:", (IB = iB, String.fromCharCode(255 & IB, IB >> 8 & 255, IB >> 16 & 255, IB >> 24 & 255))])
        }
        var IB;
        const cB = DB._ExtractLongWordOrder(mB[23]),
          SB = DB._ExtractLongWordOrder(mB[24]),
          PB = DB._ExtractLongWordOrder(mB[25]),
          QB = DB._ExtractLongWordOrder(mB[26]);
        rB && (UB = BB._getRGBABufferInternalSizedFormat(VB.textureType)), MB = 1, mB[2] & JB && !1 !== lB && (MB = Math.max(1, mB[7]));
        const RB = uB || 0,
          aB = BB.getCaps();
        for (let yB = RB; yB < YB; yB++) {
          for (NB = mB[4], tB = mB[3], zB = 0; zB < MB; ++zB) {
            if (-1 === gB || gB === zB) {
              const pB = -1 === gB ? zB : 0;
              if (!VB.isCompressed && VB.isFourCC) {
                TB.format = 5, wB = NB * tB * 4;
                let VB = null;
                if (BB._badOS || BB._badDesktopOS || !aB.textureHalfFloat && !aB.textureFloat) 128 === KB ? (VB = DB._GetFloatAsUIntRGBAArrayBuffer(NB, tB, dB.byteOffset + fB, wB, dB.buffer, pB), EB && 0 == pB && EB.push(DB._GetFloatRGBAArrayBuffer(NB, tB, dB.byteOffset + fB, wB, dB.buffer, pB))) : 64 === KB && (VB = DB._GetHalfFloatAsUIntRGBAArrayBuffer(NB, tB, dB.byteOffset + fB, wB, dB.buffer, pB), EB && 0 == pB && EB.push(DB._GetHalfFloatAsFloatRGBAArrayBuffer(NB, tB, dB.byteOffset + fB, wB, dB.buffer, pB))), TB.type = 0;
                else {
                  const BB = aB.textureFloat && (HB && aB.textureFloatLinearFiltering || !HB),
                    yB = aB.textureHalfFloat && (HB && aB.textureHalfFloatLinearFiltering || !HB),
                    lB = (128 === KB || 64 === KB && !yB) && BB ? 1 : (64 === KB || 128 === KB && !BB) && yB ? 2 : 0;
                  let JB, YB = null;
                  if (128 === KB) switch (lB) {
                    case 1:
                      JB = DB._GetFloatRGBAArrayBuffer, YB = null;
                      break;
                    case 2:
                      JB = DB._GetFloatAsHalfFloatRGBAArrayBuffer, YB = DB._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      JB = DB._GetFloatAsUIntRGBAArrayBuffer, YB = DB._GetFloatRGBAArrayBuffer
                  } else switch (lB) {
                    case 1:
                      JB = DB._GetHalfFloatAsFloatRGBAArrayBuffer, YB = null;
                      break;
                    case 2:
                      JB = DB._GetHalfFloatRGBAArrayBuffer, YB = DB._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      JB = DB._GetHalfFloatAsUIntRGBAArrayBuffer, YB = DB._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  TB.type = lB, VB = JB(NB, tB, dB.byteOffset + fB, wB, dB.buffer, pB), EB && 0 == pB && EB.push(YB ? YB(NB, tB, dB.byteOffset + fB, wB, dB.buffer, pB) : VB)
                }
                VB && BB._uploadDataToTextureDirectly(TB, VB, yB, pB)
              } else if (VB.isRGB) TB.type = 0, 24 === KB ? (TB.format = 4, wB = NB * tB * 3, sB = DB._GetRGBArrayBuffer(NB, tB, dB.byteOffset + fB, wB, dB.buffer, cB, SB, PB), BB._uploadDataToTextureDirectly(TB, sB, yB, pB)) : (TB.format = 5, wB = NB * tB * 4, sB = DB._GetRGBAArrayBuffer(NB, tB, dB.byteOffset + fB, wB, dB.buffer, cB, SB, PB, QB), BB._uploadDataToTextureDirectly(TB, sB, yB, pB));
              else if (VB.isLuminance) {
                const VB = BB._getUnpackAlignement(),
                  lB = NB;
                wB = Math.floor((NB + VB - 1) / VB) * VB * (tB - 1) + lB, sB = DB._GetLuminanceArrayBuffer(NB, tB, dB.byteOffset + fB, wB, dB.buffer), TB.format = 1, TB.type = 0, BB._uploadDataToTextureDirectly(TB, sB, yB, pB)
              } else wB = Math.max(4, NB) / 4 * Math.max(4, tB) / 4 * FB, sB = new Uint8Array(dB.buffer, dB.byteOffset + fB, wB), TB.type = 0, BB._uploadCompressedDataToTextureDirectly(TB, UB, NB, tB, sB, yB, pB)
            }
            fB += KB ? NB * tB * (KB / 8) : wB, NB *= .5, tB *= .5, NB = Math.max(1, NB), tB = Math.max(1, tB)
          }
          if (void 0 !== uB) break
        }
        EB && EB.length > 0 ? VB.sphericalPolynomial = pB.e.ConvertCubeMapToSphericalPolynomial({
          size: mB[4],
          right: EB[0],
          left: EB[1],
          up: EB[2],
          down: EB[3],
          front: EB[4],
          back: EB[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : VB.sphericalPolynomial = void 0
      }
    }
    DB.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);