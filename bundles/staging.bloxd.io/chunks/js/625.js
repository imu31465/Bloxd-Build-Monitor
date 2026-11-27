export const id = 625;
export const ids = [624, 625];
export const modules = {
  53808: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      _DDSTextureLoader: () => uR
    });
    var yR = GR(41509),
      tR = GR(53792);
    class uR {
      constructor() {
        this.supportCascades = !0
      }
      loadCubeData(RR, JR, GR, uR) {
        const ZR = JR.ke();
        let qR, iR = !1,
          fR = 1e3;
        if (Array.isArray(RR))
          for (let yR = 0; yR < RR.length; yR++) {
            const GR = RR[yR];
            qR = tR.DDSTools.GetDDSInfo(GR), JR.width = qR.width, JR.height = qR.height, iR = (qR.isRGB || qR.isLuminance || qR.mipmapCount > 1) && JR.generateMipMaps, ZR._unpackFlipY(qR.isCompressed), tR.DDSTools.UploadDDSLevels(ZR, JR, GR, qR, iR, 6, -1, yR), qR.isFourCC || 1 !== qR.mipmapCount ? fR = qR.mipmapCount - 1 : ZR.generateMipMapsForCubemap(JR)
          } else {
            const uR = RR;
            qR = tR.DDSTools.GetDDSInfo(uR), JR.width = qR.width, JR.height = qR.height, GR && (qR.sphericalPolynomial = new yR.g), iR = (qR.isRGB || qR.isLuminance || qR.mipmapCount > 1) && JR.generateMipMaps, ZR._unpackFlipY(qR.isCompressed), tR.DDSTools.UploadDDSLevels(ZR, JR, uR, qR, iR, 6), qR.isFourCC || 1 !== qR.mipmapCount ? fR = qR.mipmapCount - 1 : ZR.generateMipMapsForCubemap(JR, !1)
          }
        ZR._setCubeMapTextureParams(JR, iR, fR), JR.isReady = !0, JR.onLoadedObservable.notifyObservers(JR), JR.onLoadedObservable.clear(), uR && uR({
          isDDS: !0,
          width: JR.width,
          info: qR,
          data: RR,
          texture: JR
        })
      }
      loadData(RR, JR, GR) {
        const yR = tR.DDSTools.GetDDSInfo(RR),
          uR = (yR.isRGB || yR.isLuminance || yR.mipmapCount > 1) && JR.generateMipMaps && Math.max(yR.width, yR.height) >> yR.mipmapCount - 1 === 1;
        GR(yR.width, yR.height, uR, yR.isFourCC, (() => {
          tR.DDSTools.UploadDDSLevels(JR.ke(), JR, RR, yR, uR, 1)
        }))
      }
    }
  },
  53798: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => fR
    });
    var yR = GR(38204),
      tR = GR(38239),
      uR = GR(41509),
      ZR = GR(38213),
      qR = GR(38331);
    class iR {
      constructor(RR, JR, GR, yR) {
        this.name = RR, this.worldAxisForNormal = JR, this.worldAxisForFileX = GR, this.worldAxisForFileY = yR
      }
    }
    class fR {
      static _NearestPow2Floor(RR) {
        return RR <= 1 ? 1 : 1 << Math.floor(Math.log2(RR))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(RR) {
        if (!RR.isCube) return null;
        RR.jH()?.ke().flushFramebuffer();
        const JR = RR.getSize().width,
          GR = RR._sphericalPolynomialTargetSize,
          yR = GR > 0 ? this._NearestPow2Floor(GR) : 0,
          tR = !RR.noMipmap && !0 === RR._texture?.generateMipMaps,
          uR = yR > 0 && yR < JR && tR,
          ZR = uR ? Math.max(0, Math.round(Math.log2(JR / yR))) : 0,
          qR = uR ? Math.max(1, Math.floor(JR / Math.pow(2, ZR))) : JR,
          iR = RR.readPixels(0, ZR, void 0, !1),
          fR = RR.readPixels(1, ZR, void 0, !1);
        let VR, KR;
        RR.isRenderTarget ? (VR = RR.readPixels(3, ZR, void 0, !1), KR = RR.readPixels(2, ZR, void 0, !1)) : (VR = RR.readPixels(2, ZR, void 0, !1), KR = RR.readPixels(3, ZR, void 0, !1));
        const wR = RR.readPixels(4, ZR, void 0, !1),
          rR = RR.readPixels(5, ZR, void 0, !1),
          eR = RR.gammaSpace,
          aR = yR > 0 && yR < JR && !uR;
        return new Promise((RR => {
          Promise.all([fR, iR, VR, KR, wR, rR]).then((GR => {
            let [tR, uR, ZR, iR, fR, VR] = GR, KR = qR;
            if (aR) {
              const RR = 4;
              tR = this._DownsampleFace(tR, JR, yR, RR), uR = this._DownsampleFace(uR, JR, yR, RR), ZR = this._DownsampleFace(ZR, JR, yR, RR), iR = this._DownsampleFace(iR, JR, yR, RR), fR = this._DownsampleFace(fR, JR, yR, RR), VR = this._DownsampleFace(VR, JR, yR, RR), KR = yR
            }
            const wR = {
              size: KR,
              right: uR,
              left: tR,
              up: ZR,
              down: iR,
              front: fR,
              back: VR,
              format: 5,
              type: tR instanceof Float32Array ? 1 : 0,
              gammaSpace: eR
            };
            RR(this.ConvertCubeMapToSphericalPolynomial(wR))
          }))
        }))
      }
      static _AreaElement(RR, JR) {
        return Math.atan2(RR * JR, Math.sqrt(RR * RR + JR * JR + 1))
      }
      static _DownsampleFace(RR, JR, GR, yR) {
        const tR = RR instanceof Float32Array ? RR : Float32Array.from(RR),
          uR = GR * GR * yR,
          ZR = new Float32Array(uR),
          qR = JR / GR,
          iR = 1 / (qR * qR);
        for (let VR = 0; VR < GR; VR++) {
          const RR = Math.floor(VR * qR),
            uR = Math.floor((VR + 1) * qR);
          for (let fR = 0; fR < GR; fR++) {
            const KR = Math.floor(fR * qR),
              wR = Math.floor((fR + 1) * qR),
              rR = (VR * GR + fR) * yR;
            for (let GR = 0; GR < yR; GR++) {
              let qR = 0;
              for (let ZR = RR; ZR < uR; ZR++)
                for (let RR = KR; RR < wR; RR++) qR += tR[(ZR * JR + RR) * yR + GR];
              ZR[rR + GR] = qR * iR
            }
          }
        }
        if (RR instanceof Float32Array) return ZR;
        const fR = new(0, RR.constructor)(uR);
        for (let VR = 0; VR < uR; VR++) fR[VR] = ZR[VR] + .5 | 0;
        return fR
      }
      static ConvertCubeMapToSphericalPolynomial(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const GR = JR > 0 ? this._NearestPow2Floor(JR) : 0;
        if (GR > 0 && RR.size > GR) {
          const JR = 5 === RR.format ? 4 : 3,
            yR = ["right", "left", "up", "down", "front", "back"],
            tR = {};
          for (const uR of yR) tR[uR] = this._DownsampleFace(RR[uR], RR.size, GR, JR);
          RR = {
            ...RR,
            ...tR,
            size: GR
          }
        }
        const yR = new uR.c;
        let iR = 0;
        const fR = 2 / RR.size,
          VR = fR,
          KR = .5 * fR,
          wR = KR - 1;
        for (let uR = 0; uR < 6; uR++) {
          const JR = this._FileFaces[uR],
            GR = RR[JR.name];
          let rR = wR;
          const eR = 5 === RR.format ? 4 : 3;
          for (let uR = 0; uR < RR.size; uR++) {
            let aR = wR;
            for (let VR = 0; VR < RR.size; VR++) {
              const wR = JR.worldAxisForFileX.scale(aR).add(JR.worldAxisForFileY.scale(rR)).add(JR.worldAxisForNormal);
              wR.normalize();
              const LR = this._AreaElement(aR - KR, rR - KR) - this._AreaElement(aR - KR, rR + KR) - this._AreaElement(aR + KR, rR - KR) + this._AreaElement(aR + KR, rR + KR);
              let nR = GR[uR * RR.size * eR + VR * eR + 0],
                UR = GR[uR * RR.size * eR + VR * eR + 1],
                WR = GR[uR * RR.size * eR + VR * eR + 2];
              isNaN(nR) && (nR = 0), isNaN(UR) && (UR = 0), isNaN(WR) && (WR = 0), 0 === RR.type && (nR /= 255, UR /= 255, WR /= 255), RR.gammaSpace && (nR = Math.pow((0, tR.Clamp)(nR), ZR.i), UR = Math.pow((0, tR.Clamp)(UR), ZR.i), WR = Math.pow((0, tR.Clamp)(WR), ZR.i));
              const AR = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const RR = Math.max(nR, UR, WR);
                if (RR > AR) {
                  const JR = AR / RR;
                  nR *= JR, UR *= JR, WR *= JR
                }
              } else nR = (0, tR.Clamp)(nR, 0, AR), UR = (0, tR.Clamp)(UR, 0, AR), WR = (0, tR.Clamp)(WR, 0, AR);
              const CR = new qR.d(nR, UR, WR);
              yR.addLight(wR, CR, LR), iR += LR, aR += fR
            }
            rR += VR
          }
        }
        const rR = 6 * (4 * Math.PI) / 6 / iR;
        return yR.scaleInPlace(rR), yR.convertIncidentRadianceToIrradiance(), yR.convertIrradianceToLambertianRadiance(), uR.g.FromHarmonics(yR)
      }
    }
    fR._FileFaces = [new iR("right", new yR.r(1, 0, 0), new yR.r(0, 0, -1), new yR.r(0, -1, 0)), new iR("left", new yR.r(-1, 0, 0), new yR.r(0, 0, 1), new yR.r(0, -1, 0)), new iR("up", new yR.r(0, 1, 0), new yR.r(1, 0, 0), new yR.r(0, 0, 1)), new iR("down", new yR.r(0, -1, 0), new yR.r(1, 0, 0), new yR.r(0, 0, -1)), new iR("front", new yR.r(0, 0, 1), new yR.r(1, 0, 0), new yR.r(0, -1, 0)), new iR("back", new yR.r(0, 0, -1), new yR.r(-1, 0, 0), new yR.r(0, -1, 0))], fR.MAX_HDRI_VALUE = 4096, fR.PRESERVE_CLAMPED_COLORS = !1
  },
  53792: (RR, JR, GR) => {
    GR.d(JR, {
      DDSTools: () => eR
    });
    var yR = GR(38239),
      tR = GR(39914),
      uR = GR(53798),
      ZR = GR(41594);
    const qR = 131072,
      iR = 131072;

    function fR(RR) {
      return RR.charCodeAt(0) + (RR.charCodeAt(1) << 8) + (RR.charCodeAt(2) << 16) + (RR.charCodeAt(3) << 24)
    }
    const VR = fR("DXT1"),
      KR = fR("DXT3"),
      wR = fR("DXT5"),
      rR = fR("DX10");
    class eR {
      static GetDDSInfo(RR) {
        const JR = new Int32Array(RR.buffer, RR.byteOffset, 31),
          GR = new Int32Array(RR.buffer, RR.byteOffset, 35);
        let yR = 1;
        JR[2] & qR && (yR = Math.max(1, JR[7]));
        const tR = JR[21],
          uR = tR === rR ? GR[32] : 0;
        let ZR = 0;
        switch (tR) {
          case 113:
            ZR = 2;
            break;
          case 116:
            ZR = 1;
            break;
          case rR:
            if (10 === uR) {
              ZR = 2;
              break
            }
            if (2 === uR) {
              ZR = 1;
              break
            }
        }
        return {
          width: JR[4],
          height: JR[3],
          mipmapCount: yR,
          isFourCC: 4 === (4 & JR[20]),
          isRGB: 64 === (64 & JR[20]),
          isLuminance: (JR[20] & iR) === iR,
          isCube: 512 === (512 & JR[28]),
          isCompressed: tR === VR || tR === KR || tR === wR,
          dxgiFormat: uR,
          textureType: ZR
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(RR, JR, GR, yR, tR, uR) {
        const qR = new Float32Array(yR),
          iR = new Uint16Array(tR, GR);
        let fR = 0;
        for (let VR = 0; VR < JR; VR++)
          for (let JR = 0; JR < RR; JR++) {
            const GR = 4 * (JR + VR * RR);
            qR[fR] = (0, ZR.e)(iR[GR]), qR[fR + 1] = (0, ZR.e)(iR[GR + 1]), qR[fR + 2] = (0, ZR.e)(iR[GR + 2]), eR.StoreLODInAlphaChannel ? qR[fR + 3] = uR : qR[fR + 3] = (0, ZR.e)(iR[GR + 3]), fR += 4
          }
        return qR
      }
      static _GetHalfFloatRGBAArrayBuffer(RR, JR, GR, yR, tR, uR) {
        if (eR.StoreLODInAlphaChannel) {
          const qR = new Uint16Array(yR),
            iR = new Uint16Array(tR, GR);
          let fR = 0;
          for (let GR = 0; GR < JR; GR++)
            for (let JR = 0; JR < RR; JR++) {
              const yR = 4 * (JR + GR * RR);
              qR[fR] = iR[yR], qR[fR + 1] = iR[yR + 1], qR[fR + 2] = iR[yR + 2], qR[fR + 3] = (0, ZR.i)(uR), fR += 4
            }
          return qR
        }
        return new Uint16Array(tR, GR, yR)
      }
      static _GetFloatRGBAArrayBuffer(RR, JR, GR, yR, tR, uR) {
        if (eR.StoreLODInAlphaChannel) {
          const ZR = new Float32Array(yR),
            qR = new Float32Array(tR, GR);
          let iR = 0;
          for (let GR = 0; GR < JR; GR++)
            for (let JR = 0; JR < RR; JR++) {
              const yR = 4 * (JR + GR * RR);
              ZR[iR] = qR[yR], ZR[iR + 1] = qR[yR + 1], ZR[iR + 2] = qR[yR + 2], ZR[iR + 3] = uR, iR += 4
            }
          return ZR
        }
        return new Float32Array(tR, GR, yR)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(RR, JR, GR, yR, tR, uR) {
        const qR = new Uint16Array(yR),
          iR = new Float32Array(tR, GR);
        let fR = 0;
        for (let VR = 0; VR < JR; VR++)
          for (let JR = 0; JR < RR; JR++) qR[fR] = (0, ZR.i)(iR[fR]), qR[fR + 1] = (0, ZR.i)(iR[fR + 1]), qR[fR + 2] = (0, ZR.i)(iR[fR + 2]), eR.StoreLODInAlphaChannel ? qR[fR + 3] = (0, ZR.i)(uR) : qR[fR + 3] = (0, ZR.i)(iR[fR + 3]), fR += 4;
        return qR
      }
      static _GetFloatAsUIntRGBAArrayBuffer(RR, JR, GR, tR, uR, ZR) {
        const qR = new Uint8Array(tR),
          iR = new Float32Array(uR, GR);
        let fR = 0;
        for (let VR = 0; VR < JR; VR++)
          for (let JR = 0; JR < RR; JR++) {
            const GR = 4 * (JR + VR * RR);
            qR[fR] = 255 * (0, yR.Clamp)(iR[GR]), qR[fR + 1] = 255 * (0, yR.Clamp)(iR[GR + 1]), qR[fR + 2] = 255 * (0, yR.Clamp)(iR[GR + 2]), eR.StoreLODInAlphaChannel ? qR[fR + 3] = ZR : qR[fR + 3] = 255 * (0, yR.Clamp)(iR[GR + 3]), fR += 4
          }
        return qR
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(RR, JR, GR, tR, uR, qR) {
        const iR = new Uint8Array(tR),
          fR = new Uint16Array(uR, GR);
        let VR = 0;
        for (let KR = 0; KR < JR; KR++)
          for (let JR = 0; JR < RR; JR++) {
            const GR = 4 * (JR + KR * RR);
            iR[VR] = 255 * (0, yR.Clamp)((0, ZR.e)(fR[GR])), iR[VR + 1] = 255 * (0, yR.Clamp)((0, ZR.e)(fR[GR + 1])), iR[VR + 2] = 255 * (0, yR.Clamp)((0, ZR.e)(fR[GR + 2])), eR.StoreLODInAlphaChannel ? iR[VR + 3] = qR : iR[VR + 3] = 255 * (0, yR.Clamp)((0, ZR.e)(fR[GR + 3])), VR += 4
          }
        return iR
      }
      static _GetRGBAArrayBuffer(RR, JR, GR, yR, tR, uR, ZR, qR, iR) {
        const fR = new Uint8Array(yR),
          VR = new Uint8Array(tR, GR);
        let KR = 0;
        for (let wR = 0; wR < JR; wR++)
          for (let JR = 0; JR < RR; JR++) {
            const GR = 4 * (JR + wR * RR);
            fR[KR] = VR[GR + uR], fR[KR + 1] = VR[GR + ZR], fR[KR + 2] = VR[GR + qR], fR[KR + 3] = VR[GR + iR], KR += 4
          }
        return fR
      }
      static _ExtractLongWordOrder(RR) {
        return 0 === RR || 255 === RR || -16777216 === RR ? 0 : 1 + eR._ExtractLongWordOrder(RR >> 8)
      }
      static _GetRGBArrayBuffer(RR, JR, GR, yR, tR, uR, ZR, qR) {
        const iR = new Uint8Array(yR),
          fR = new Uint8Array(tR, GR);
        let VR = 0;
        for (let KR = 0; KR < JR; KR++)
          for (let JR = 0; JR < RR; JR++) {
            const GR = 3 * (JR + KR * RR);
            iR[VR] = fR[GR + uR], iR[VR + 1] = fR[GR + ZR], iR[VR + 2] = fR[GR + qR], VR += 3
          }
        return iR
      }
      static _GetLuminanceArrayBuffer(RR, JR, GR, yR, tR) {
        const uR = new Uint8Array(yR),
          ZR = new Uint8Array(tR, GR);
        let qR = 0;
        for (let iR = 0; iR < JR; iR++)
          for (let JR = 0; JR < RR; JR++) {
            const GR = JR + iR * RR;
            uR[qR] = ZR[GR], qR++
          }
        return uR
      }
      static UploadDDSLevels(RR, JR, GR, yR, ZR, iR) {
        let fR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          aR = arguments.length > 7 ? arguments[7] : void 0,
          LR = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          nR = null;
        yR.sphericalPolynomial && (nR = []);
        const UR = !!RR.getCaps().s3tc;
        JR.generateMipMaps = ZR;
        const WR = new Int32Array(GR.buffer, GR.byteOffset, 31);
        let AR, CR, XR, MR, BR, lR, pR, gR = 0,
          bR = 0,
          vR = 1;
        if (542327876 !== WR[0]) return void tR.c.Error("Invalid magic number in DDS header");
        if (!yR.isFourCC && !yR.isRGB && !yR.isLuminance) return void tR.c.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (yR.isCompressed && !UR) return void tR.c.Error("Compressed textures are not supported on this platform.");
        let OR = WR[22];
        MR = WR[1] + 4;
        let xR = !1;
        if (yR.isFourCC) switch (AR = WR[21], AR) {
          case VR:
            vR = 8, bR = 33777;
            break;
          case KR:
            vR = 16, bR = 33778;
            break;
          case wR:
            vR = 16, bR = 33779;
            break;
          case 113:
            xR = !0, OR = 64;
            break;
          case 116:
            xR = !0, OR = 128;
            break;
          case rR: {
            MR += 20;
            let RR = !1;
            switch (yR.dxgiFormat) {
              case 10:
                xR = !0, OR = 64, RR = !0;
                break;
              case 2:
                xR = !0, OR = 128, RR = !0;
                break;
              case 88:
                yR.isRGB = !0, yR.isFourCC = !1, OR = 32, RR = !0
            }
            if (RR) break
          }
          default:
            return void tR.c.Error(["Unsupported FourCC code:", (NR = AR, String.fromCharCode(255 & NR, NR >> 8 & 255, NR >> 16 & 255, NR >> 24 & 255))])
        }
        var NR;
        const DR = eR._ExtractLongWordOrder(WR[23]),
          HR = eR._ExtractLongWordOrder(WR[24]),
          oR = eR._ExtractLongWordOrder(WR[25]),
          cR = eR._ExtractLongWordOrder(WR[26]);
        xR && (bR = RR._getRGBABufferInternalSizedFormat(yR.textureType)), lR = 1, WR[2] & qR && !1 !== ZR && (lR = Math.max(1, WR[7]));
        const PR = aR || 0,
          IR = RR.getCaps();
        for (let tR = PR; tR < iR; tR++) {
          for (CR = WR[4], XR = WR[3], pR = 0; pR < lR; ++pR) {
            if (-1 === fR || fR === pR) {
              const uR = -1 === fR ? pR : 0;
              if (!yR.isCompressed && yR.isFourCC) {
                JR.format = 5, gR = CR * XR * 4;
                let yR = null;
                if (RR._badOS || RR._badDesktopOS || !IR.textureHalfFloat && !IR.textureFloat) 128 === OR ? (yR = eR._GetFloatAsUIntRGBAArrayBuffer(CR, XR, GR.byteOffset + MR, gR, GR.buffer, uR), nR && 0 == uR && nR.push(eR._GetFloatRGBAArrayBuffer(CR, XR, GR.byteOffset + MR, gR, GR.buffer, uR))) : 64 === OR && (yR = eR._GetHalfFloatAsUIntRGBAArrayBuffer(CR, XR, GR.byteOffset + MR, gR, GR.buffer, uR), nR && 0 == uR && nR.push(eR._GetHalfFloatAsFloatRGBAArrayBuffer(CR, XR, GR.byteOffset + MR, gR, GR.buffer, uR))), JR.type = 0;
                else {
                  const RR = IR.textureFloat && (LR && IR.textureFloatLinearFiltering || !LR),
                    tR = IR.textureHalfFloat && (LR && IR.textureHalfFloatLinearFiltering || !LR),
                    ZR = (128 === OR || 64 === OR && !tR) && RR ? 1 : (64 === OR || 128 === OR && !RR) && tR ? 2 : 0;
                  let qR, iR = null;
                  if (128 === OR) switch (ZR) {
                    case 1:
                      qR = eR._GetFloatRGBAArrayBuffer, iR = null;
                      break;
                    case 2:
                      qR = eR._GetFloatAsHalfFloatRGBAArrayBuffer, iR = eR._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      qR = eR._GetFloatAsUIntRGBAArrayBuffer, iR = eR._GetFloatRGBAArrayBuffer
                  } else switch (ZR) {
                    case 1:
                      qR = eR._GetHalfFloatAsFloatRGBAArrayBuffer, iR = null;
                      break;
                    case 2:
                      qR = eR._GetHalfFloatRGBAArrayBuffer, iR = eR._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      qR = eR._GetHalfFloatAsUIntRGBAArrayBuffer, iR = eR._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  JR.type = ZR, yR = qR(CR, XR, GR.byteOffset + MR, gR, GR.buffer, uR), nR && 0 == uR && nR.push(iR ? iR(CR, XR, GR.byteOffset + MR, gR, GR.buffer, uR) : yR)
                }
                yR && RR._uploadDataToTextureDirectly(JR, yR, tR, uR)
              } else if (yR.isRGB) JR.type = 0, 24 === OR ? (JR.format = 4, gR = CR * XR * 3, BR = eR._GetRGBArrayBuffer(CR, XR, GR.byteOffset + MR, gR, GR.buffer, DR, HR, oR), RR._uploadDataToTextureDirectly(JR, BR, tR, uR)) : (JR.format = 5, gR = CR * XR * 4, BR = eR._GetRGBAArrayBuffer(CR, XR, GR.byteOffset + MR, gR, GR.buffer, DR, HR, oR, cR), RR._uploadDataToTextureDirectly(JR, BR, tR, uR));
              else if (yR.isLuminance) {
                const yR = RR._getUnpackAlignement(),
                  ZR = CR;
                gR = Math.floor((CR + yR - 1) / yR) * yR * (XR - 1) + ZR, BR = eR._GetLuminanceArrayBuffer(CR, XR, GR.byteOffset + MR, gR, GR.buffer), JR.format = 1, JR.type = 0, RR._uploadDataToTextureDirectly(JR, BR, tR, uR)
              } else gR = Math.max(4, CR) / 4 * Math.max(4, XR) / 4 * vR, BR = new Uint8Array(GR.buffer, GR.byteOffset + MR, gR), JR.type = 0, RR._uploadCompressedDataToTextureDirectly(JR, bR, CR, XR, BR, tR, uR)
            }
            MR += OR ? CR * XR * (OR / 8) : gR, CR *= .5, XR *= .5, CR = Math.max(1, CR), XR = Math.max(1, XR)
          }
          if (void 0 !== aR) break
        }
        nR && nR.length > 0 ? yR.sphericalPolynomial = uR.e.ConvertCubeMapToSphericalPolynomial({
          size: WR[4],
          right: nR[0],
          left: nR[1],
          up: nR[2],
          down: nR[3],
          front: nR[4],
          back: nR[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : yR.sphericalPolynomial = void 0
      }
    }
    eR.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);