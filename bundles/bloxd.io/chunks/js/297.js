export const id = 297;
export const ids = [297];
export const modules = {
  41169: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => mQ
    });
    var LQ = wQ(36696),
      qQ = wQ(36729),
      oQ = wQ(39389),
      DQ = wQ(36705),
      kQ = wQ(36873);
    class vQ {
      constructor(QQ, FQ, wQ, LQ) {
        this.name = QQ, this.worldAxisForNormal = FQ, this.worldAxisForFileX = wQ, this.worldAxisForFileY = LQ
      }
    }
    class mQ {
      static _NearestPow2Floor(QQ) {
        return QQ <= 1 ? 1 : 1 << Math.floor(Math.log2(QQ))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(QQ) {
        if (!QQ.isCube) return null;
        QQ.iN()?.Wx().flushFramebuffer();
        const FQ = QQ.getSize().width,
          wQ = QQ._sphericalPolynomialTargetSize,
          LQ = wQ > 0 ? this._NearestPow2Floor(wQ) : 0,
          qQ = !QQ.noMipmap && !0 === QQ._texture?.generateMipMaps,
          oQ = LQ > 0 && LQ < FQ && qQ,
          DQ = oQ ? Math.max(0, Math.round(Math.log2(FQ / LQ))) : 0,
          kQ = oQ ? Math.max(1, Math.floor(FQ / Math.pow(2, DQ))) : FQ,
          vQ = QQ.readPixels(0, DQ, void 0, !1),
          mQ = QQ.readPixels(1, DQ, void 0, !1);
        let uQ, HQ;
        QQ.isRenderTarget ? (uQ = QQ.readPixels(3, DQ, void 0, !1), HQ = QQ.readPixels(2, DQ, void 0, !1)) : (uQ = QQ.readPixels(2, DQ, void 0, !1), HQ = QQ.readPixels(3, DQ, void 0, !1));
        const bQ = QQ.readPixels(4, DQ, void 0, !1),
          YQ = QQ.readPixels(5, DQ, void 0, !1),
          xQ = QQ.gammaSpace,
          AQ = LQ > 0 && LQ < FQ && !oQ;
        return new Promise((QQ => {
          Promise.all([mQ, vQ, uQ, HQ, bQ, YQ]).then((wQ => {
            let [qQ, oQ, DQ, vQ, mQ, uQ] = wQ, HQ = kQ;
            if (AQ) {
              const QQ = 4;
              qQ = this._DownsampleFace(qQ, FQ, LQ, QQ), oQ = this._DownsampleFace(oQ, FQ, LQ, QQ), DQ = this._DownsampleFace(DQ, FQ, LQ, QQ), vQ = this._DownsampleFace(vQ, FQ, LQ, QQ), mQ = this._DownsampleFace(mQ, FQ, LQ, QQ), uQ = this._DownsampleFace(uQ, FQ, LQ, QQ), HQ = LQ
            }
            const bQ = {
              size: HQ,
              right: oQ,
              left: qQ,
              up: DQ,
              down: vQ,
              front: mQ,
              back: uQ,
              format: 5,
              type: qQ instanceof Float32Array ? 1 : 0,
              gammaSpace: xQ
            };
            QQ(this.ConvertCubeMapToSphericalPolynomial(bQ))
          }))
        }))
      }
      static _AreaElement(QQ, FQ) {
        return Math.atan2(QQ * FQ, Math.sqrt(QQ * QQ + FQ * FQ + 1))
      }
      static _DownsampleFace(QQ, FQ, wQ, LQ) {
        const qQ = QQ instanceof Float32Array ? QQ : Float32Array.from(QQ),
          oQ = wQ * wQ * LQ,
          DQ = new Float32Array(oQ),
          kQ = FQ / wQ,
          vQ = 1 / (kQ * kQ);
        for (let uQ = 0; uQ < wQ; uQ++) {
          const QQ = Math.floor(uQ * kQ),
            oQ = Math.floor((uQ + 1) * kQ);
          for (let mQ = 0; mQ < wQ; mQ++) {
            const HQ = Math.floor(mQ * kQ),
              bQ = Math.floor((mQ + 1) * kQ),
              YQ = (uQ * wQ + mQ) * LQ;
            for (let wQ = 0; wQ < LQ; wQ++) {
              let kQ = 0;
              for (let DQ = QQ; DQ < oQ; DQ++)
                for (let QQ = HQ; QQ < bQ; QQ++) kQ += qQ[(DQ * FQ + QQ) * LQ + wQ];
              DQ[YQ + wQ] = kQ * vQ
            }
          }
        }
        if (QQ instanceof Float32Array) return DQ;
        const mQ = new(0, QQ.constructor)(oQ);
        for (let uQ = 0; uQ < oQ; uQ++) mQ[uQ] = DQ[uQ] + .5 | 0;
        return mQ
      }
      static ConvertCubeMapToSphericalPolynomial(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const wQ = FQ > 0 ? this._NearestPow2Floor(FQ) : 0;
        if (wQ > 0 && QQ.size > wQ) {
          const FQ = 5 === QQ.format ? 4 : 3,
            LQ = ["right", "left", "up", "down", "front", "back"],
            qQ = {};
          for (const oQ of LQ) qQ[oQ] = this._DownsampleFace(QQ[oQ], QQ.size, wQ, FQ);
          QQ = {
            ...QQ,
            ...qQ,
            size: wQ
          }
        }
        const LQ = new oQ.b;
        let vQ = 0;
        const mQ = 2 / QQ.size,
          uQ = mQ,
          HQ = .5 * mQ,
          bQ = HQ - 1;
        for (let oQ = 0; oQ < 6; oQ++) {
          const FQ = this._FileFaces[oQ],
            wQ = QQ[FQ.name];
          let YQ = bQ;
          const xQ = 5 === QQ.format ? 4 : 3;
          for (let oQ = 0; oQ < QQ.size; oQ++) {
            let AQ = bQ;
            for (let uQ = 0; uQ < QQ.size; uQ++) {
              const bQ = FQ.worldAxisForFileX.scale(AQ).add(FQ.worldAxisForFileY.scale(YQ)).add(FQ.worldAxisForNormal);
              bQ.normalize();
              const tQ = this._AreaElement(AQ - HQ, YQ - HQ) - this._AreaElement(AQ - HQ, YQ + HQ) - this._AreaElement(AQ + HQ, YQ - HQ) + this._AreaElement(AQ + HQ, YQ + HQ);
              let eQ = wQ[oQ * QQ.size * xQ + uQ * xQ + 0],
                MQ = wQ[oQ * QQ.size * xQ + uQ * xQ + 1],
                GQ = wQ[oQ * QQ.size * xQ + uQ * xQ + 2];
              isNaN(eQ) && (eQ = 0), isNaN(MQ) && (MQ = 0), isNaN(GQ) && (GQ = 0), 0 === QQ.type && (eQ /= 255, MQ /= 255, GQ /= 255), QQ.gammaSpace && (eQ = Math.pow((0, qQ.Clamp)(eQ), DQ.g), MQ = Math.pow((0, qQ.Clamp)(MQ), DQ.g), GQ = Math.pow((0, qQ.Clamp)(GQ), DQ.g));
              const pQ = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const QQ = Math.max(eQ, MQ, GQ);
                if (QQ > pQ) {
                  const FQ = pQ / QQ;
                  eQ *= FQ, MQ *= FQ, GQ *= FQ
                }
              } else eQ = (0, qQ.Clamp)(eQ, 0, pQ), MQ = (0, qQ.Clamp)(MQ, 0, pQ), GQ = (0, qQ.Clamp)(GQ, 0, pQ);
              const cQ = new kQ.b(eQ, MQ, GQ);
              LQ.addLight(bQ, cQ, tQ), vQ += tQ, AQ += mQ
            }
            YQ += uQ
          }
        }
        const YQ = 6 * (4 * Math.PI) / 6 / vQ;
        return LQ.scaleInPlace(YQ), LQ.convertIncidentRadianceToIrradiance(), LQ.convertIrradianceToLambertianRadiance(), oQ.e.FromHarmonics(LQ)
      }
    }
    mQ._FileFaces = [new vQ("right", new LQ.p(1, 0, 0), new LQ.p(0, 0, -1), new LQ.p(0, -1, 0)), new vQ("left", new LQ.p(-1, 0, 0), new LQ.p(0, 0, 1), new LQ.p(0, -1, 0)), new vQ("up", new LQ.p(0, 1, 0), new LQ.p(1, 0, 0), new LQ.p(0, 0, 1)), new vQ("down", new LQ.p(0, -1, 0), new LQ.p(1, 0, 0), new LQ.p(0, 0, -1)), new vQ("front", new LQ.p(0, 0, 1), new LQ.p(1, 0, 0), new LQ.p(0, -1, 0)), new vQ("back", new LQ.p(0, 0, -1), new LQ.p(-1, 0, 0), new LQ.p(0, -1, 0))], mQ.MAX_HDRI_VALUE = 4096, mQ.PRESERVE_CLAMPED_COLORS = !1
  },
  41162: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      DDSTools: () => xQ
    });
    var LQ = wQ(36729),
      qQ = wQ(38203),
      oQ = wQ(41169),
      DQ = wQ(39475);
    const kQ = 131072,
      vQ = 131072;

    function mQ(QQ) {
      return QQ.charCodeAt(0) + (QQ.charCodeAt(1) << 8) + (QQ.charCodeAt(2) << 16) + (QQ.charCodeAt(3) << 24)
    }
    const uQ = mQ("DXT1"),
      HQ = mQ("DXT3"),
      bQ = mQ("DXT5"),
      YQ = mQ("DX10");
    class xQ {
      static GetDDSInfo(QQ) {
        const FQ = new Int32Array(QQ.buffer, QQ.byteOffset, 31),
          wQ = new Int32Array(QQ.buffer, QQ.byteOffset, 35);
        let LQ = 1;
        FQ[2] & kQ && (LQ = Math.max(1, FQ[7]));
        const qQ = FQ[21],
          oQ = qQ === YQ ? wQ[32] : 0;
        let DQ = 0;
        switch (qQ) {
          case 113:
            DQ = 2;
            break;
          case 116:
            DQ = 1;
            break;
          case YQ:
            if (10 === oQ) {
              DQ = 2;
              break
            }
            if (2 === oQ) {
              DQ = 1;
              break
            }
        }
        return {
          width: FQ[4],
          height: FQ[3],
          mipmapCount: LQ,
          isFourCC: 4 === (4 & FQ[20]),
          isRGB: 64 === (64 & FQ[20]),
          isLuminance: (FQ[20] & vQ) === vQ,
          isCube: 512 === (512 & FQ[28]),
          isCompressed: qQ === uQ || qQ === HQ || qQ === bQ,
          dxgiFormat: oQ,
          textureType: DQ
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(QQ, FQ, wQ, LQ, qQ, oQ) {
        const kQ = new Float32Array(LQ),
          vQ = new Uint16Array(qQ, wQ);
        let mQ = 0;
        for (let uQ = 0; uQ < FQ; uQ++)
          for (let FQ = 0; FQ < QQ; FQ++) {
            const wQ = 4 * (FQ + uQ * QQ);
            kQ[mQ] = (0, DQ.d)(vQ[wQ]), kQ[mQ + 1] = (0, DQ.d)(vQ[wQ + 1]), kQ[mQ + 2] = (0, DQ.d)(vQ[wQ + 2]), xQ.StoreLODInAlphaChannel ? kQ[mQ + 3] = oQ : kQ[mQ + 3] = (0, DQ.d)(vQ[wQ + 3]), mQ += 4
          }
        return kQ
      }
      static _GetHalfFloatRGBAArrayBuffer(QQ, FQ, wQ, LQ, qQ, oQ) {
        if (xQ.StoreLODInAlphaChannel) {
          const kQ = new Uint16Array(LQ),
            vQ = new Uint16Array(qQ, wQ);
          let mQ = 0;
          for (let wQ = 0; wQ < FQ; wQ++)
            for (let FQ = 0; FQ < QQ; FQ++) {
              const LQ = 4 * (FQ + wQ * QQ);
              kQ[mQ] = vQ[LQ], kQ[mQ + 1] = vQ[LQ + 1], kQ[mQ + 2] = vQ[LQ + 2], kQ[mQ + 3] = (0, DQ.j)(oQ), mQ += 4
            }
          return kQ
        }
        return new Uint16Array(qQ, wQ, LQ)
      }
      static _GetFloatRGBAArrayBuffer(QQ, FQ, wQ, LQ, qQ, oQ) {
        if (xQ.StoreLODInAlphaChannel) {
          const DQ = new Float32Array(LQ),
            kQ = new Float32Array(qQ, wQ);
          let vQ = 0;
          for (let wQ = 0; wQ < FQ; wQ++)
            for (let FQ = 0; FQ < QQ; FQ++) {
              const LQ = 4 * (FQ + wQ * QQ);
              DQ[vQ] = kQ[LQ], DQ[vQ + 1] = kQ[LQ + 1], DQ[vQ + 2] = kQ[LQ + 2], DQ[vQ + 3] = oQ, vQ += 4
            }
          return DQ
        }
        return new Float32Array(qQ, wQ, LQ)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(QQ, FQ, wQ, LQ, qQ, oQ) {
        const kQ = new Uint16Array(LQ),
          vQ = new Float32Array(qQ, wQ);
        let mQ = 0;
        for (let uQ = 0; uQ < FQ; uQ++)
          for (let FQ = 0; FQ < QQ; FQ++) kQ[mQ] = (0, DQ.j)(vQ[mQ]), kQ[mQ + 1] = (0, DQ.j)(vQ[mQ + 1]), kQ[mQ + 2] = (0, DQ.j)(vQ[mQ + 2]), xQ.StoreLODInAlphaChannel ? kQ[mQ + 3] = (0, DQ.j)(oQ) : kQ[mQ + 3] = (0, DQ.j)(vQ[mQ + 3]), mQ += 4;
        return kQ
      }
      static _GetFloatAsUIntRGBAArrayBuffer(QQ, FQ, wQ, qQ, oQ, DQ) {
        const kQ = new Uint8Array(qQ),
          vQ = new Float32Array(oQ, wQ);
        let mQ = 0;
        for (let uQ = 0; uQ < FQ; uQ++)
          for (let FQ = 0; FQ < QQ; FQ++) {
            const wQ = 4 * (FQ + uQ * QQ);
            kQ[mQ] = 255 * (0, LQ.Clamp)(vQ[wQ]), kQ[mQ + 1] = 255 * (0, LQ.Clamp)(vQ[wQ + 1]), kQ[mQ + 2] = 255 * (0, LQ.Clamp)(vQ[wQ + 2]), xQ.StoreLODInAlphaChannel ? kQ[mQ + 3] = DQ : kQ[mQ + 3] = 255 * (0, LQ.Clamp)(vQ[wQ + 3]), mQ += 4
          }
        return kQ
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(QQ, FQ, wQ, qQ, oQ, kQ) {
        const vQ = new Uint8Array(qQ),
          mQ = new Uint16Array(oQ, wQ);
        let uQ = 0;
        for (let HQ = 0; HQ < FQ; HQ++)
          for (let FQ = 0; FQ < QQ; FQ++) {
            const wQ = 4 * (FQ + HQ * QQ);
            vQ[uQ] = 255 * (0, LQ.Clamp)((0, DQ.d)(mQ[wQ])), vQ[uQ + 1] = 255 * (0, LQ.Clamp)((0, DQ.d)(mQ[wQ + 1])), vQ[uQ + 2] = 255 * (0, LQ.Clamp)((0, DQ.d)(mQ[wQ + 2])), xQ.StoreLODInAlphaChannel ? vQ[uQ + 3] = kQ : vQ[uQ + 3] = 255 * (0, LQ.Clamp)((0, DQ.d)(mQ[wQ + 3])), uQ += 4
          }
        return vQ
      }
      static _GetRGBAArrayBuffer(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ) {
        const mQ = new Uint8Array(LQ),
          uQ = new Uint8Array(qQ, wQ);
        let HQ = 0;
        for (let bQ = 0; bQ < FQ; bQ++)
          for (let FQ = 0; FQ < QQ; FQ++) {
            const wQ = 4 * (FQ + bQ * QQ);
            mQ[HQ] = uQ[wQ + oQ], mQ[HQ + 1] = uQ[wQ + DQ], mQ[HQ + 2] = uQ[wQ + kQ], mQ[HQ + 3] = uQ[wQ + vQ], HQ += 4
          }
        return mQ
      }
      static _ExtractLongWordOrder(QQ) {
        return 0 === QQ || 255 === QQ || -16777216 === QQ ? 0 : 1 + xQ._ExtractLongWordOrder(QQ >> 8)
      }
      static _GetRGBArrayBuffer(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ) {
        const vQ = new Uint8Array(LQ),
          mQ = new Uint8Array(qQ, wQ);
        let uQ = 0;
        for (let HQ = 0; HQ < FQ; HQ++)
          for (let FQ = 0; FQ < QQ; FQ++) {
            const wQ = 3 * (FQ + HQ * QQ);
            vQ[uQ] = mQ[wQ + oQ], vQ[uQ + 1] = mQ[wQ + DQ], vQ[uQ + 2] = mQ[wQ + kQ], uQ += 3
          }
        return vQ
      }
      static _GetLuminanceArrayBuffer(QQ, FQ, wQ, LQ, qQ) {
        const oQ = new Uint8Array(LQ),
          DQ = new Uint8Array(qQ, wQ);
        let kQ = 0;
        for (let vQ = 0; vQ < FQ; vQ++)
          for (let FQ = 0; FQ < QQ; FQ++) {
            const wQ = FQ + vQ * QQ;
            oQ[kQ] = DQ[wQ], kQ++
          }
        return oQ
      }
      static UploadDDSLevels(QQ, FQ, wQ, LQ, DQ, vQ) {
        let mQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          AQ = arguments.length > 7 ? arguments[7] : void 0,
          tQ = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          eQ = null;
        LQ.sphericalPolynomial && (eQ = []);
        const MQ = !!QQ.getCaps().s3tc;
        FQ.generateMipMaps = DQ;
        const GQ = new Int32Array(wQ.buffer, wQ.byteOffset, 31);
        let pQ, cQ, CQ, SQ, iQ, WQ, RQ, OQ = 0,
          sQ = 0,
          rQ = 1;
        if (542327876 !== GQ[0]) return void qQ.c.Error("Invalid magic number in DDS header");
        if (!LQ.isFourCC && !LQ.isRGB && !LQ.isLuminance) return void qQ.c.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (LQ.isCompressed && !MQ) return void qQ.c.Error("Compressed textures are not supported on this platform.");
        let IQ = GQ[22];
        SQ = GQ[1] + 4;
        let UQ = !1;
        if (LQ.isFourCC) switch (pQ = GQ[21], pQ) {
          case uQ:
            rQ = 8, sQ = 33777;
            break;
          case HQ:
            rQ = 16, sQ = 33778;
            break;
          case bQ:
            rQ = 16, sQ = 33779;
            break;
          case 113:
            UQ = !0, IQ = 64;
            break;
          case 116:
            UQ = !0, IQ = 128;
            break;
          case YQ: {
            SQ += 20;
            let QQ = !1;
            switch (LQ.dxgiFormat) {
              case 10:
                UQ = !0, IQ = 64, QQ = !0;
                break;
              case 2:
                UQ = !0, IQ = 128, QQ = !0;
                break;
              case 88:
                LQ.isRGB = !0, LQ.isFourCC = !1, IQ = 32, QQ = !0
            }
            if (QQ) break
          }
          default:
            return void qQ.c.Error(["Unsupported FourCC code:", (NQ = pQ, String.fromCharCode(255 & NQ, NQ >> 8 & 255, NQ >> 16 & 255, NQ >> 24 & 255))])
        }
        var NQ;
        const TQ = xQ._ExtractLongWordOrder(GQ[23]),
          KQ = xQ._ExtractLongWordOrder(GQ[24]),
          zQ = xQ._ExtractLongWordOrder(GQ[25]),
          lQ = xQ._ExtractLongWordOrder(GQ[26]);
        UQ && (sQ = QQ._getRGBABufferInternalSizedFormat(LQ.textureType)), WQ = 1, GQ[2] & kQ && !1 !== DQ && (WQ = Math.max(1, GQ[7]));
        const jQ = AQ || 0,
          aQ = QQ.getCaps();
        for (let qQ = jQ; qQ < vQ; qQ++) {
          for (cQ = GQ[4], CQ = GQ[3], RQ = 0; RQ < WQ; ++RQ) {
            if (-1 === mQ || mQ === RQ) {
              const oQ = -1 === mQ ? RQ : 0;
              if (!LQ.isCompressed && LQ.isFourCC) {
                FQ.format = 5, OQ = cQ * CQ * 4;
                let LQ = null;
                if (QQ._badOS || QQ._badDesktopOS || !aQ.textureHalfFloat && !aQ.textureFloat) 128 === IQ ? (LQ = xQ._GetFloatAsUIntRGBAArrayBuffer(cQ, CQ, wQ.byteOffset + SQ, OQ, wQ.buffer, oQ), eQ && 0 == oQ && eQ.push(xQ._GetFloatRGBAArrayBuffer(cQ, CQ, wQ.byteOffset + SQ, OQ, wQ.buffer, oQ))) : 64 === IQ && (LQ = xQ._GetHalfFloatAsUIntRGBAArrayBuffer(cQ, CQ, wQ.byteOffset + SQ, OQ, wQ.buffer, oQ), eQ && 0 == oQ && eQ.push(xQ._GetHalfFloatAsFloatRGBAArrayBuffer(cQ, CQ, wQ.byteOffset + SQ, OQ, wQ.buffer, oQ))), FQ.type = 0;
                else {
                  const QQ = aQ.textureFloat && (tQ && aQ.textureFloatLinearFiltering || !tQ),
                    qQ = aQ.textureHalfFloat && (tQ && aQ.textureHalfFloatLinearFiltering || !tQ),
                    DQ = (128 === IQ || 64 === IQ && !qQ) && QQ ? 1 : (64 === IQ || 128 === IQ && !QQ) && qQ ? 2 : 0;
                  let kQ, vQ = null;
                  if (128 === IQ) switch (DQ) {
                    case 1:
                      kQ = xQ._GetFloatRGBAArrayBuffer, vQ = null;
                      break;
                    case 2:
                      kQ = xQ._GetFloatAsHalfFloatRGBAArrayBuffer, vQ = xQ._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      kQ = xQ._GetFloatAsUIntRGBAArrayBuffer, vQ = xQ._GetFloatRGBAArrayBuffer
                  } else switch (DQ) {
                    case 1:
                      kQ = xQ._GetHalfFloatAsFloatRGBAArrayBuffer, vQ = null;
                      break;
                    case 2:
                      kQ = xQ._GetHalfFloatRGBAArrayBuffer, vQ = xQ._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      kQ = xQ._GetHalfFloatAsUIntRGBAArrayBuffer, vQ = xQ._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  FQ.type = DQ, LQ = kQ(cQ, CQ, wQ.byteOffset + SQ, OQ, wQ.buffer, oQ), eQ && 0 == oQ && eQ.push(vQ ? vQ(cQ, CQ, wQ.byteOffset + SQ, OQ, wQ.buffer, oQ) : LQ)
                }
                LQ && QQ._uploadDataToTextureDirectly(FQ, LQ, qQ, oQ)
              } else if (LQ.isRGB) FQ.type = 0, 24 === IQ ? (FQ.format = 4, OQ = cQ * CQ * 3, iQ = xQ._GetRGBArrayBuffer(cQ, CQ, wQ.byteOffset + SQ, OQ, wQ.buffer, TQ, KQ, zQ), QQ._uploadDataToTextureDirectly(FQ, iQ, qQ, oQ)) : (FQ.format = 5, OQ = cQ * CQ * 4, iQ = xQ._GetRGBAArrayBuffer(cQ, CQ, wQ.byteOffset + SQ, OQ, wQ.buffer, TQ, KQ, zQ, lQ), QQ._uploadDataToTextureDirectly(FQ, iQ, qQ, oQ));
              else if (LQ.isLuminance) {
                const LQ = QQ._getUnpackAlignement(),
                  DQ = cQ;
                OQ = Math.floor((cQ + LQ - 1) / LQ) * LQ * (CQ - 1) + DQ, iQ = xQ._GetLuminanceArrayBuffer(cQ, CQ, wQ.byteOffset + SQ, OQ, wQ.buffer), FQ.format = 1, FQ.type = 0, QQ._uploadDataToTextureDirectly(FQ, iQ, qQ, oQ)
              } else OQ = Math.max(4, cQ) / 4 * Math.max(4, CQ) / 4 * rQ, iQ = new Uint8Array(wQ.buffer, wQ.byteOffset + SQ, OQ), FQ.type = 0, QQ._uploadCompressedDataToTextureDirectly(FQ, sQ, cQ, CQ, iQ, qQ, oQ)
            }
            SQ += IQ ? cQ * CQ * (IQ / 8) : OQ, cQ *= .5, CQ *= .5, cQ = Math.max(1, cQ), CQ = Math.max(1, CQ)
          }
          if (void 0 !== AQ) break
        }
        eQ && eQ.length > 0 ? LQ.sphericalPolynomial = oQ.d.ConvertCubeMapToSphericalPolynomial({
          size: GQ[4],
          right: eQ[0],
          left: eQ[1],
          up: eQ[2],
          down: eQ[3],
          front: eQ[4],
          back: eQ[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : LQ.sphericalPolynomial = void 0
      }
    }
    xQ.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);