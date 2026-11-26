export const id = 615;
export const ids = [615];
export const modules = {
  44909: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => JB
    });
    var YB = GB(37778),
      DB = GB(37807),
      QB = GB(40985),
      oB = GB(37782),
      jB = GB(37894);
    class yB {
      constructor(BB, OB, GB, YB) {
        this.name = BB, this.worldAxisForNormal = OB, this.worldAxisForFileX = GB, this.worldAxisForFileY = YB
      }
    }
    class JB {
      static _NearestPow2Floor(BB) {
        return BB <= 1 ? 1 : 1 << Math.floor(Math.log2(BB))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(BB) {
        if (!BB.isCube) return null;
        BB.JF()?.Lp().flushFramebuffer();
        const OB = BB.getSize().width,
          GB = BB._sphericalPolynomialTargetSize,
          YB = GB > 0 ? this._NearestPow2Floor(GB) : 0,
          DB = !BB.noMipmap && !0 === BB._texture?.generateMipMaps,
          QB = YB > 0 && YB < OB && DB,
          oB = QB ? Math.max(0, Math.round(Math.log2(OB / YB))) : 0,
          jB = QB ? Math.max(1, Math.floor(OB / Math.pow(2, oB))) : OB,
          yB = BB.readPixels(0, oB, void 0, !1),
          JB = BB.readPixels(1, oB, void 0, !1);
        let MB, PB;
        BB.isRenderTarget ? (MB = BB.readPixels(3, oB, void 0, !1), PB = BB.readPixels(2, oB, void 0, !1)) : (MB = BB.readPixels(2, oB, void 0, !1), PB = BB.readPixels(3, oB, void 0, !1));
        const zB = BB.readPixels(4, oB, void 0, !1),
          lB = BB.readPixels(5, oB, void 0, !1),
          pB = BB.gammaSpace,
          qB = YB > 0 && YB < OB && !QB;
        return new Promise((BB => {
          Promise.all([JB, yB, MB, PB, zB, lB]).then((GB => {
            let [DB, QB, oB, yB, JB, MB] = GB, PB = jB;
            if (qB) {
              const BB = 4;
              DB = this._DownsampleFace(DB, OB, YB, BB), QB = this._DownsampleFace(QB, OB, YB, BB), oB = this._DownsampleFace(oB, OB, YB, BB), yB = this._DownsampleFace(yB, OB, YB, BB), JB = this._DownsampleFace(JB, OB, YB, BB), MB = this._DownsampleFace(MB, OB, YB, BB), PB = YB
            }
            const zB = {
              size: PB,
              right: QB,
              left: DB,
              up: oB,
              down: yB,
              front: JB,
              back: MB,
              format: 5,
              type: DB instanceof Float32Array ? 1 : 0,
              gammaSpace: pB
            };
            BB(this.ConvertCubeMapToSphericalPolynomial(zB))
          }))
        }))
      }
      static _AreaElement(BB, OB) {
        return Math.atan2(BB * OB, Math.sqrt(BB * BB + OB * OB + 1))
      }
      static _DownsampleFace(BB, OB, GB, YB) {
        const DB = BB instanceof Float32Array ? BB : Float32Array.from(BB),
          QB = GB * GB * YB,
          oB = new Float32Array(QB),
          jB = OB / GB,
          yB = 1 / (jB * jB);
        for (let MB = 0; MB < GB; MB++) {
          const BB = Math.floor(MB * jB),
            QB = Math.floor((MB + 1) * jB);
          for (let JB = 0; JB < GB; JB++) {
            const PB = Math.floor(JB * jB),
              zB = Math.floor((JB + 1) * jB),
              lB = (MB * GB + JB) * YB;
            for (let GB = 0; GB < YB; GB++) {
              let jB = 0;
              for (let oB = BB; oB < QB; oB++)
                for (let BB = PB; BB < zB; BB++) jB += DB[(oB * OB + BB) * YB + GB];
              oB[lB + GB] = jB * yB
            }
          }
        }
        if (BB instanceof Float32Array) return oB;
        const JB = new(0, BB.constructor)(QB);
        for (let MB = 0; MB < QB; MB++) JB[MB] = oB[MB] + .5 | 0;
        return JB
      }
      static ConvertCubeMapToSphericalPolynomial(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const GB = OB > 0 ? this._NearestPow2Floor(OB) : 0;
        if (GB > 0 && BB.size > GB) {
          const OB = 5 === BB.format ? 4 : 3,
            YB = ["right", "left", "up", "down", "front", "back"],
            DB = {};
          for (const QB of YB) DB[QB] = this._DownsampleFace(BB[QB], BB.size, GB, OB);
          BB = {
            ...BB,
            ...DB,
            size: GB
          }
        }
        const YB = new QB.c;
        let yB = 0;
        const JB = 2 / BB.size,
          MB = JB,
          PB = .5 * JB,
          zB = PB - 1;
        for (let QB = 0; QB < 6; QB++) {
          const OB = this._FileFaces[QB],
            GB = BB[OB.name];
          let lB = zB;
          const pB = 5 === BB.format ? 4 : 3;
          for (let QB = 0; QB < BB.size; QB++) {
            let qB = zB;
            for (let MB = 0; MB < BB.size; MB++) {
              const zB = OB.worldAxisForFileX.scale(qB).add(OB.worldAxisForFileY.scale(lB)).add(OB.worldAxisForNormal);
              zB.normalize();
              const ZB = this._AreaElement(qB - PB, lB - PB) - this._AreaElement(qB - PB, lB + PB) - this._AreaElement(qB + PB, lB - PB) + this._AreaElement(qB + PB, lB + PB);
              let NB = GB[QB * BB.size * pB + MB * pB + 0],
                RB = GB[QB * BB.size * pB + MB * pB + 1],
                WB = GB[QB * BB.size * pB + MB * pB + 2];
              isNaN(NB) && (NB = 0), isNaN(RB) && (RB = 0), isNaN(WB) && (WB = 0), 0 === BB.type && (NB /= 255, RB /= 255, WB /= 255), BB.gammaSpace && (NB = Math.pow((0, DB.Clamp)(NB), oB.d), RB = Math.pow((0, DB.Clamp)(RB), oB.d), WB = Math.pow((0, DB.Clamp)(WB), oB.d));
              const AB = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const BB = Math.max(NB, RB, WB);
                if (BB > AB) {
                  const OB = AB / BB;
                  NB *= OB, RB *= OB, WB *= OB
                }
              } else NB = (0, DB.Clamp)(NB, 0, AB), RB = (0, DB.Clamp)(RB, 0, AB), WB = (0, DB.Clamp)(WB, 0, AB);
              const VB = new jB.c(NB, RB, WB);
              YB.addLight(zB, VB, ZB), yB += ZB, qB += JB
            }
            lB += MB
          }
        }
        const lB = 6 * (4 * Math.PI) / 6 / yB;
        return YB.scaleInPlace(lB), YB.convertIncidentRadianceToIrradiance(), YB.convertIrradianceToLambertianRadiance(), QB.f.FromHarmonics(YB)
      }
    }
    JB._FileFaces = [new yB("right", new YB.r(1, 0, 0), new YB.r(0, 0, -1), new YB.r(0, -1, 0)), new yB("left", new YB.r(-1, 0, 0), new YB.r(0, 0, 1), new YB.r(0, -1, 0)), new yB("up", new YB.r(0, 1, 0), new YB.r(1, 0, 0), new YB.r(0, 0, 1)), new yB("down", new YB.r(0, -1, 0), new YB.r(1, 0, 0), new YB.r(0, 0, -1)), new yB("front", new YB.r(0, 0, 1), new YB.r(1, 0, 0), new YB.r(0, -1, 0)), new yB("back", new YB.r(0, 0, -1), new YB.r(-1, 0, 0), new YB.r(0, -1, 0))], JB.MAX_HDRI_VALUE = 4096, JB.PRESERVE_CLAMPED_COLORS = !1
  },
  44902: (BB, OB, GB) => {
    GB.d(OB, {
      DDSTools: () => pB
    });
    var YB = GB(37807),
      DB = GB(39366),
      QB = GB(44909),
      oB = GB(41071);
    const jB = 131072,
      yB = 131072;

    function JB(BB) {
      return BB.charCodeAt(0) + (BB.charCodeAt(1) << 8) + (BB.charCodeAt(2) << 16) + (BB.charCodeAt(3) << 24)
    }
    const MB = JB("DXT1"),
      PB = JB("DXT3"),
      zB = JB("DXT5"),
      lB = JB("DX10");
    class pB {
      static GetDDSInfo(BB) {
        const OB = new Int32Array(BB.buffer, BB.byteOffset, 31),
          GB = new Int32Array(BB.buffer, BB.byteOffset, 35);
        let YB = 1;
        OB[2] & jB && (YB = Math.max(1, OB[7]));
        const DB = OB[21],
          QB = DB === lB ? GB[32] : 0;
        let oB = 0;
        switch (DB) {
          case 113:
            oB = 2;
            break;
          case 116:
            oB = 1;
            break;
          case lB:
            if (10 === QB) {
              oB = 2;
              break
            }
            if (2 === QB) {
              oB = 1;
              break
            }
        }
        return {
          width: OB[4],
          height: OB[3],
          mipmapCount: YB,
          isFourCC: 4 === (4 & OB[20]),
          isRGB: 64 === (64 & OB[20]),
          isLuminance: (OB[20] & yB) === yB,
          isCube: 512 === (512 & OB[28]),
          isCompressed: DB === MB || DB === PB || DB === zB,
          dxgiFormat: QB,
          textureType: oB
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(BB, OB, GB, YB, DB, QB) {
        const jB = new Float32Array(YB),
          yB = new Uint16Array(DB, GB);
        let JB = 0;
        for (let MB = 0; MB < OB; MB++)
          for (let OB = 0; OB < BB; OB++) {
            const GB = 4 * (OB + MB * BB);
            jB[JB] = (0, oB.e)(yB[GB]), jB[JB + 1] = (0, oB.e)(yB[GB + 1]), jB[JB + 2] = (0, oB.e)(yB[GB + 2]), pB.StoreLODInAlphaChannel ? jB[JB + 3] = QB : jB[JB + 3] = (0, oB.e)(yB[GB + 3]), JB += 4
          }
        return jB
      }
      static _GetHalfFloatRGBAArrayBuffer(BB, OB, GB, YB, DB, QB) {
        if (pB.StoreLODInAlphaChannel) {
          const jB = new Uint16Array(YB),
            yB = new Uint16Array(DB, GB);
          let JB = 0;
          for (let GB = 0; GB < OB; GB++)
            for (let OB = 0; OB < BB; OB++) {
              const YB = 4 * (OB + GB * BB);
              jB[JB] = yB[YB], jB[JB + 1] = yB[YB + 1], jB[JB + 2] = yB[YB + 2], jB[JB + 3] = (0, oB.l)(QB), JB += 4
            }
          return jB
        }
        return new Uint16Array(DB, GB, YB)
      }
      static _GetFloatRGBAArrayBuffer(BB, OB, GB, YB, DB, QB) {
        if (pB.StoreLODInAlphaChannel) {
          const oB = new Float32Array(YB),
            jB = new Float32Array(DB, GB);
          let yB = 0;
          for (let GB = 0; GB < OB; GB++)
            for (let OB = 0; OB < BB; OB++) {
              const YB = 4 * (OB + GB * BB);
              oB[yB] = jB[YB], oB[yB + 1] = jB[YB + 1], oB[yB + 2] = jB[YB + 2], oB[yB + 3] = QB, yB += 4
            }
          return oB
        }
        return new Float32Array(DB, GB, YB)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(BB, OB, GB, YB, DB, QB) {
        const jB = new Uint16Array(YB),
          yB = new Float32Array(DB, GB);
        let JB = 0;
        for (let MB = 0; MB < OB; MB++)
          for (let OB = 0; OB < BB; OB++) jB[JB] = (0, oB.l)(yB[JB]), jB[JB + 1] = (0, oB.l)(yB[JB + 1]), jB[JB + 2] = (0, oB.l)(yB[JB + 2]), pB.StoreLODInAlphaChannel ? jB[JB + 3] = (0, oB.l)(QB) : jB[JB + 3] = (0, oB.l)(yB[JB + 3]), JB += 4;
        return jB
      }
      static _GetFloatAsUIntRGBAArrayBuffer(BB, OB, GB, DB, QB, oB) {
        const jB = new Uint8Array(DB),
          yB = new Float32Array(QB, GB);
        let JB = 0;
        for (let MB = 0; MB < OB; MB++)
          for (let OB = 0; OB < BB; OB++) {
            const GB = 4 * (OB + MB * BB);
            jB[JB] = 255 * (0, YB.Clamp)(yB[GB]), jB[JB + 1] = 255 * (0, YB.Clamp)(yB[GB + 1]), jB[JB + 2] = 255 * (0, YB.Clamp)(yB[GB + 2]), pB.StoreLODInAlphaChannel ? jB[JB + 3] = oB : jB[JB + 3] = 255 * (0, YB.Clamp)(yB[GB + 3]), JB += 4
          }
        return jB
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(BB, OB, GB, DB, QB, jB) {
        const yB = new Uint8Array(DB),
          JB = new Uint16Array(QB, GB);
        let MB = 0;
        for (let PB = 0; PB < OB; PB++)
          for (let OB = 0; OB < BB; OB++) {
            const GB = 4 * (OB + PB * BB);
            yB[MB] = 255 * (0, YB.Clamp)((0, oB.e)(JB[GB])), yB[MB + 1] = 255 * (0, YB.Clamp)((0, oB.e)(JB[GB + 1])), yB[MB + 2] = 255 * (0, YB.Clamp)((0, oB.e)(JB[GB + 2])), pB.StoreLODInAlphaChannel ? yB[MB + 3] = jB : yB[MB + 3] = 255 * (0, YB.Clamp)((0, oB.e)(JB[GB + 3])), MB += 4
          }
        return yB
      }
      static _GetRGBAArrayBuffer(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
        const JB = new Uint8Array(YB),
          MB = new Uint8Array(DB, GB);
        let PB = 0;
        for (let zB = 0; zB < OB; zB++)
          for (let OB = 0; OB < BB; OB++) {
            const GB = 4 * (OB + zB * BB);
            JB[PB] = MB[GB + QB], JB[PB + 1] = MB[GB + oB], JB[PB + 2] = MB[GB + jB], JB[PB + 3] = MB[GB + yB], PB += 4
          }
        return JB
      }
      static _ExtractLongWordOrder(BB) {
        return 0 === BB || 255 === BB || -16777216 === BB ? 0 : 1 + pB._ExtractLongWordOrder(BB >> 8)
      }
      static _GetRGBArrayBuffer(BB, OB, GB, YB, DB, QB, oB, jB) {
        const yB = new Uint8Array(YB),
          JB = new Uint8Array(DB, GB);
        let MB = 0;
        for (let PB = 0; PB < OB; PB++)
          for (let OB = 0; OB < BB; OB++) {
            const GB = 3 * (OB + PB * BB);
            yB[MB] = JB[GB + QB], yB[MB + 1] = JB[GB + oB], yB[MB + 2] = JB[GB + jB], MB += 3
          }
        return yB
      }
      static _GetLuminanceArrayBuffer(BB, OB, GB, YB, DB) {
        const QB = new Uint8Array(YB),
          oB = new Uint8Array(DB, GB);
        let jB = 0;
        for (let yB = 0; yB < OB; yB++)
          for (let OB = 0; OB < BB; OB++) {
            const GB = OB + yB * BB;
            QB[jB] = oB[GB], jB++
          }
        return QB
      }
      static UploadDDSLevels(BB, OB, GB, YB, oB, yB) {
        let JB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          qB = arguments.length > 7 ? arguments[7] : void 0,
          ZB = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          NB = null;
        YB.sphericalPolynomial && (NB = []);
        const RB = !!BB.getCaps().s3tc;
        OB.generateMipMaps = oB;
        const WB = new Int32Array(GB.buffer, GB.byteOffset, 31);
        let AB, VB, SB, nB, UB, fB, kB, dB = 0,
          KB = 0,
          uB = 1;
        if (542327876 !== WB[0]) return void DB.b.Error("Invalid magic number in DDS header");
        if (!YB.isFourCC && !YB.isRGB && !YB.isLuminance) return void DB.b.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (YB.isCompressed && !RB) return void DB.b.Error("Compressed textures are not supported on this platform.");
        let mB = WB[22];
        nB = WB[1] + 4;
        let IB = !1;
        if (YB.isFourCC) switch (AB = WB[21], AB) {
          case MB:
            uB = 8, KB = 33777;
            break;
          case PB:
            uB = 16, KB = 33778;
            break;
          case zB:
            uB = 16, KB = 33779;
            break;
          case 113:
            IB = !0, mB = 64;
            break;
          case 116:
            IB = !0, mB = 128;
            break;
          case lB: {
            nB += 20;
            let BB = !1;
            switch (YB.dxgiFormat) {
              case 10:
                IB = !0, mB = 64, BB = !0;
                break;
              case 2:
                IB = !0, mB = 128, BB = !0;
                break;
              case 88:
                YB.isRGB = !0, YB.isFourCC = !1, mB = 32, BB = !0
            }
            if (BB) break
          }
          default:
            return void DB.b.Error(["Unsupported FourCC code:", (FB = AB, String.fromCharCode(255 & FB, FB >> 8 & 255, FB >> 16 & 255, FB >> 24 & 255))])
        }
        var FB;
        const iB = pB._ExtractLongWordOrder(WB[23]),
          LB = pB._ExtractLongWordOrder(WB[24]),
          gB = pB._ExtractLongWordOrder(WB[25]),
          rB = pB._ExtractLongWordOrder(WB[26]);
        IB && (KB = BB._getRGBABufferInternalSizedFormat(YB.textureType)), fB = 1, WB[2] & jB && !1 !== oB && (fB = Math.max(1, WB[7]));
        const XB = qB || 0,
          wB = BB.getCaps();
        for (let DB = XB; DB < yB; DB++) {
          for (VB = WB[4], SB = WB[3], kB = 0; kB < fB; ++kB) {
            if (-1 === JB || JB === kB) {
              const QB = -1 === JB ? kB : 0;
              if (!YB.isCompressed && YB.isFourCC) {
                OB.format = 5, dB = VB * SB * 4;
                let YB = null;
                if (BB._badOS || BB._badDesktopOS || !wB.textureHalfFloat && !wB.textureFloat) 128 === mB ? (YB = pB._GetFloatAsUIntRGBAArrayBuffer(VB, SB, GB.byteOffset + nB, dB, GB.buffer, QB), NB && 0 == QB && NB.push(pB._GetFloatRGBAArrayBuffer(VB, SB, GB.byteOffset + nB, dB, GB.buffer, QB))) : 64 === mB && (YB = pB._GetHalfFloatAsUIntRGBAArrayBuffer(VB, SB, GB.byteOffset + nB, dB, GB.buffer, QB), NB && 0 == QB && NB.push(pB._GetHalfFloatAsFloatRGBAArrayBuffer(VB, SB, GB.byteOffset + nB, dB, GB.buffer, QB))), OB.type = 0;
                else {
                  const BB = wB.textureFloat && (ZB && wB.textureFloatLinearFiltering || !ZB),
                    DB = wB.textureHalfFloat && (ZB && wB.textureHalfFloatLinearFiltering || !ZB),
                    oB = (128 === mB || 64 === mB && !DB) && BB ? 1 : (64 === mB || 128 === mB && !BB) && DB ? 2 : 0;
                  let jB, yB = null;
                  if (128 === mB) switch (oB) {
                    case 1:
                      jB = pB._GetFloatRGBAArrayBuffer, yB = null;
                      break;
                    case 2:
                      jB = pB._GetFloatAsHalfFloatRGBAArrayBuffer, yB = pB._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      jB = pB._GetFloatAsUIntRGBAArrayBuffer, yB = pB._GetFloatRGBAArrayBuffer
                  } else switch (oB) {
                    case 1:
                      jB = pB._GetHalfFloatAsFloatRGBAArrayBuffer, yB = null;
                      break;
                    case 2:
                      jB = pB._GetHalfFloatRGBAArrayBuffer, yB = pB._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      jB = pB._GetHalfFloatAsUIntRGBAArrayBuffer, yB = pB._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  OB.type = oB, YB = jB(VB, SB, GB.byteOffset + nB, dB, GB.buffer, QB), NB && 0 == QB && NB.push(yB ? yB(VB, SB, GB.byteOffset + nB, dB, GB.buffer, QB) : YB)
                }
                YB && BB._uploadDataToTextureDirectly(OB, YB, DB, QB)
              } else if (YB.isRGB) OB.type = 0, 24 === mB ? (OB.format = 4, dB = VB * SB * 3, UB = pB._GetRGBArrayBuffer(VB, SB, GB.byteOffset + nB, dB, GB.buffer, iB, LB, gB), BB._uploadDataToTextureDirectly(OB, UB, DB, QB)) : (OB.format = 5, dB = VB * SB * 4, UB = pB._GetRGBAArrayBuffer(VB, SB, GB.byteOffset + nB, dB, GB.buffer, iB, LB, gB, rB), BB._uploadDataToTextureDirectly(OB, UB, DB, QB));
              else if (YB.isLuminance) {
                const YB = BB._getUnpackAlignement(),
                  oB = VB;
                dB = Math.floor((VB + YB - 1) / YB) * YB * (SB - 1) + oB, UB = pB._GetLuminanceArrayBuffer(VB, SB, GB.byteOffset + nB, dB, GB.buffer), OB.format = 1, OB.type = 0, BB._uploadDataToTextureDirectly(OB, UB, DB, QB)
              } else dB = Math.max(4, VB) / 4 * Math.max(4, SB) / 4 * uB, UB = new Uint8Array(GB.buffer, GB.byteOffset + nB, dB), OB.type = 0, BB._uploadCompressedDataToTextureDirectly(OB, KB, VB, SB, UB, DB, QB)
            }
            nB += mB ? VB * SB * (mB / 8) : dB, VB *= .5, SB *= .5, VB = Math.max(1, VB), SB = Math.max(1, SB)
          }
          if (void 0 !== qB) break
        }
        NB && NB.length > 0 ? YB.sphericalPolynomial = QB.c.ConvertCubeMapToSphericalPolynomial({
          size: WB[4],
          right: NB[0],
          left: NB[1],
          up: NB[2],
          down: NB[3],
          front: NB[4],
          back: NB[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : YB.sphericalPolynomial = void 0
      }
    }
    pB.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);