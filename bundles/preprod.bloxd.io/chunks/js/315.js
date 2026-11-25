export const id = 315;
export const ids = [315];
export const modules = {
  42014: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => PQ
    });
    var wQ = XQ(37370),
      qQ = XQ(37404),
      TQ = XQ(40250),
      zQ = XQ(37374),
      sQ = XQ(37546);
    class FQ {
      constructor(QQ, WQ, XQ, wQ) {
        this.name = QQ, this.worldAxisForNormal = WQ, this.worldAxisForFileX = XQ, this.worldAxisForFileY = wQ
      }
    }
    class PQ {
      static _NearestPow2Floor(QQ) {
        return QQ <= 1 ? 1 : 1 << Math.floor(Math.log2(QQ))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(QQ) {
        if (!QQ.isCube) return null;
        QQ.sE()?.Uj().flushFramebuffer();
        const WQ = QQ.getSize().width,
          XQ = QQ._sphericalPolynomialTargetSize,
          wQ = XQ > 0 ? this._NearestPow2Floor(XQ) : 0,
          qQ = !QQ.noMipmap && !0 === QQ._texture?.generateMipMaps,
          TQ = wQ > 0 && wQ < WQ && qQ,
          zQ = TQ ? Math.max(0, Math.round(Math.log2(WQ / wQ))) : 0,
          sQ = TQ ? Math.max(1, Math.floor(WQ / Math.pow(2, zQ))) : WQ,
          FQ = QQ.readPixels(0, zQ, void 0, !1),
          PQ = QQ.readPixels(1, zQ, void 0, !1);
        let gQ, JQ;
        QQ.isRenderTarget ? (gQ = QQ.readPixels(3, zQ, void 0, !1), JQ = QQ.readPixels(2, zQ, void 0, !1)) : (gQ = QQ.readPixels(2, zQ, void 0, !1), JQ = QQ.readPixels(3, zQ, void 0, !1));
        const rQ = QQ.readPixels(4, zQ, void 0, !1),
          IQ = QQ.readPixels(5, zQ, void 0, !1),
          jQ = QQ.gammaSpace,
          BQ = wQ > 0 && wQ < WQ && !TQ;
        return new Promise((QQ => {
          Promise.all([PQ, FQ, gQ, JQ, rQ, IQ]).then((XQ => {
            let [qQ, TQ, zQ, FQ, PQ, gQ] = XQ, JQ = sQ;
            if (BQ) {
              const QQ = 4;
              qQ = this._DownsampleFace(qQ, WQ, wQ, QQ), TQ = this._DownsampleFace(TQ, WQ, wQ, QQ), zQ = this._DownsampleFace(zQ, WQ, wQ, QQ), FQ = this._DownsampleFace(FQ, WQ, wQ, QQ), PQ = this._DownsampleFace(PQ, WQ, wQ, QQ), gQ = this._DownsampleFace(gQ, WQ, wQ, QQ), JQ = wQ
            }
            const rQ = {
              size: JQ,
              right: TQ,
              left: qQ,
              up: zQ,
              down: FQ,
              front: PQ,
              back: gQ,
              format: 5,
              type: qQ instanceof Float32Array ? 1 : 0,
              gammaSpace: jQ
            };
            QQ(this.ConvertCubeMapToSphericalPolynomial(rQ))
          }))
        }))
      }
      static _AreaElement(QQ, WQ) {
        return Math.atan2(QQ * WQ, Math.sqrt(QQ * QQ + WQ * WQ + 1))
      }
      static _DownsampleFace(QQ, WQ, XQ, wQ) {
        const qQ = QQ instanceof Float32Array ? QQ : Float32Array.from(QQ),
          TQ = XQ * XQ * wQ,
          zQ = new Float32Array(TQ),
          sQ = WQ / XQ,
          FQ = 1 / (sQ * sQ);
        for (let gQ = 0; gQ < XQ; gQ++) {
          const QQ = Math.floor(gQ * sQ),
            TQ = Math.floor((gQ + 1) * sQ);
          for (let PQ = 0; PQ < XQ; PQ++) {
            const JQ = Math.floor(PQ * sQ),
              rQ = Math.floor((PQ + 1) * sQ),
              IQ = (gQ * XQ + PQ) * wQ;
            for (let XQ = 0; XQ < wQ; XQ++) {
              let sQ = 0;
              for (let zQ = QQ; zQ < TQ; zQ++)
                for (let QQ = JQ; QQ < rQ; QQ++) sQ += qQ[(zQ * WQ + QQ) * wQ + XQ];
              zQ[IQ + XQ] = sQ * FQ
            }
          }
        }
        if (QQ instanceof Float32Array) return zQ;
        const PQ = new(0, QQ.constructor)(TQ);
        for (let gQ = 0; gQ < TQ; gQ++) PQ[gQ] = zQ[gQ] + .5 | 0;
        return PQ
      }
      static ConvertCubeMapToSphericalPolynomial(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const XQ = WQ > 0 ? this._NearestPow2Floor(WQ) : 0;
        if (XQ > 0 && QQ.size > XQ) {
          const WQ = 5 === QQ.format ? 4 : 3,
            wQ = ["right", "left", "up", "down", "front", "back"],
            qQ = {};
          for (const TQ of wQ) qQ[TQ] = this._DownsampleFace(QQ[TQ], QQ.size, XQ, WQ);
          QQ = {
            ...QQ,
            ...qQ,
            size: XQ
          }
        }
        const wQ = new TQ.b;
        let FQ = 0;
        const PQ = 2 / QQ.size,
          gQ = PQ,
          JQ = .5 * PQ,
          rQ = JQ - 1;
        for (let TQ = 0; TQ < 6; TQ++) {
          const WQ = this._FileFaces[TQ],
            XQ = QQ[WQ.name];
          let IQ = rQ;
          const jQ = 5 === QQ.format ? 4 : 3;
          for (let TQ = 0; TQ < QQ.size; TQ++) {
            let BQ = rQ;
            for (let gQ = 0; gQ < QQ.size; gQ++) {
              const rQ = WQ.worldAxisForFileX.scale(BQ).add(WQ.worldAxisForFileY.scale(IQ)).add(WQ.worldAxisForNormal);
              rQ.normalize();
              const yQ = this._AreaElement(BQ - JQ, IQ - JQ) - this._AreaElement(BQ - JQ, IQ + JQ) - this._AreaElement(BQ + JQ, IQ - JQ) + this._AreaElement(BQ + JQ, IQ + JQ);
              let VQ = XQ[TQ * QQ.size * jQ + gQ * jQ + 0],
                DQ = XQ[TQ * QQ.size * jQ + gQ * jQ + 1],
                pQ = XQ[TQ * QQ.size * jQ + gQ * jQ + 2];
              isNaN(VQ) && (VQ = 0), isNaN(DQ) && (DQ = 0), isNaN(pQ) && (pQ = 0), 0 === QQ.type && (VQ /= 255, DQ /= 255, pQ /= 255), QQ.gammaSpace && (VQ = Math.pow((0, qQ.Clamp)(VQ), zQ.h), DQ = Math.pow((0, qQ.Clamp)(DQ), zQ.h), pQ = Math.pow((0, qQ.Clamp)(pQ), zQ.h));
              const GQ = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const QQ = Math.max(VQ, DQ, pQ);
                if (QQ > GQ) {
                  const WQ = GQ / QQ;
                  VQ *= WQ, DQ *= WQ, pQ *= WQ
                }
              } else VQ = (0, qQ.Clamp)(VQ, 0, GQ), DQ = (0, qQ.Clamp)(DQ, 0, GQ), pQ = (0, qQ.Clamp)(pQ, 0, GQ);
              const UQ = new sQ.b(VQ, DQ, pQ);
              wQ.addLight(rQ, UQ, yQ), FQ += yQ, BQ += PQ
            }
            IQ += gQ
          }
        }
        const IQ = 6 * (4 * Math.PI) / 6 / FQ;
        return wQ.scaleInPlace(IQ), wQ.convertIncidentRadianceToIrradiance(), wQ.convertIrradianceToLambertianRadiance(), TQ.e.FromHarmonics(wQ)
      }
    }
    PQ._FileFaces = [new FQ("right", new wQ.s(1, 0, 0), new wQ.s(0, 0, -1), new wQ.s(0, -1, 0)), new FQ("left", new wQ.s(-1, 0, 0), new wQ.s(0, 0, 1), new wQ.s(0, -1, 0)), new FQ("up", new wQ.s(0, 1, 0), new wQ.s(1, 0, 0), new wQ.s(0, 0, 1)), new FQ("down", new wQ.s(0, -1, 0), new wQ.s(1, 0, 0), new wQ.s(0, 0, -1)), new FQ("front", new wQ.s(0, 0, 1), new wQ.s(1, 0, 0), new wQ.s(0, -1, 0)), new FQ("back", new wQ.s(0, 0, -1), new wQ.s(-1, 0, 0), new wQ.s(0, -1, 0))], PQ.MAX_HDRI_VALUE = 4096, PQ.PRESERVE_CLAMPED_COLORS = !1
  },
  42012: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      DDSTools: () => jQ
    });
    var wQ = XQ(37404),
      qQ = XQ(38956),
      TQ = XQ(42014),
      zQ = XQ(40337);
    const sQ = 131072,
      FQ = 131072;

    function PQ(QQ) {
      return QQ.charCodeAt(0) + (QQ.charCodeAt(1) << 8) + (QQ.charCodeAt(2) << 16) + (QQ.charCodeAt(3) << 24)
    }
    const gQ = PQ("DXT1"),
      JQ = PQ("DXT3"),
      rQ = PQ("DXT5"),
      IQ = PQ("DX10");
    class jQ {
      static GetDDSInfo(QQ) {
        const WQ = new Int32Array(QQ.buffer, QQ.byteOffset, 31),
          XQ = new Int32Array(QQ.buffer, QQ.byteOffset, 35);
        let wQ = 1;
        WQ[2] & sQ && (wQ = Math.max(1, WQ[7]));
        const qQ = WQ[21],
          TQ = qQ === IQ ? XQ[32] : 0;
        let zQ = 0;
        switch (qQ) {
          case 113:
            zQ = 2;
            break;
          case 116:
            zQ = 1;
            break;
          case IQ:
            if (10 === TQ) {
              zQ = 2;
              break
            }
            if (2 === TQ) {
              zQ = 1;
              break
            }
        }
        return {
          width: WQ[4],
          height: WQ[3],
          mipmapCount: wQ,
          isFourCC: 4 === (4 & WQ[20]),
          isRGB: 64 === (64 & WQ[20]),
          isLuminance: (WQ[20] & FQ) === FQ,
          isCube: 512 === (512 & WQ[28]),
          isCompressed: qQ === gQ || qQ === JQ || qQ === rQ,
          dxgiFormat: TQ,
          textureType: zQ
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(QQ, WQ, XQ, wQ, qQ, TQ) {
        const sQ = new Float32Array(wQ),
          FQ = new Uint16Array(qQ, XQ);
        let PQ = 0;
        for (let gQ = 0; gQ < WQ; gQ++)
          for (let WQ = 0; WQ < QQ; WQ++) {
            const XQ = 4 * (WQ + gQ * QQ);
            sQ[PQ] = (0, zQ.d)(FQ[XQ]), sQ[PQ + 1] = (0, zQ.d)(FQ[XQ + 1]), sQ[PQ + 2] = (0, zQ.d)(FQ[XQ + 2]), jQ.StoreLODInAlphaChannel ? sQ[PQ + 3] = TQ : sQ[PQ + 3] = (0, zQ.d)(FQ[XQ + 3]), PQ += 4
          }
        return sQ
      }
      static _GetHalfFloatRGBAArrayBuffer(QQ, WQ, XQ, wQ, qQ, TQ) {
        if (jQ.StoreLODInAlphaChannel) {
          const sQ = new Uint16Array(wQ),
            FQ = new Uint16Array(qQ, XQ);
          let PQ = 0;
          for (let XQ = 0; XQ < WQ; XQ++)
            for (let WQ = 0; WQ < QQ; WQ++) {
              const wQ = 4 * (WQ + XQ * QQ);
              sQ[PQ] = FQ[wQ], sQ[PQ + 1] = FQ[wQ + 1], sQ[PQ + 2] = FQ[wQ + 2], sQ[PQ + 3] = (0, zQ.i)(TQ), PQ += 4
            }
          return sQ
        }
        return new Uint16Array(qQ, XQ, wQ)
      }
      static _GetFloatRGBAArrayBuffer(QQ, WQ, XQ, wQ, qQ, TQ) {
        if (jQ.StoreLODInAlphaChannel) {
          const zQ = new Float32Array(wQ),
            sQ = new Float32Array(qQ, XQ);
          let FQ = 0;
          for (let XQ = 0; XQ < WQ; XQ++)
            for (let WQ = 0; WQ < QQ; WQ++) {
              const wQ = 4 * (WQ + XQ * QQ);
              zQ[FQ] = sQ[wQ], zQ[FQ + 1] = sQ[wQ + 1], zQ[FQ + 2] = sQ[wQ + 2], zQ[FQ + 3] = TQ, FQ += 4
            }
          return zQ
        }
        return new Float32Array(qQ, XQ, wQ)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(QQ, WQ, XQ, wQ, qQ, TQ) {
        const sQ = new Uint16Array(wQ),
          FQ = new Float32Array(qQ, XQ);
        let PQ = 0;
        for (let gQ = 0; gQ < WQ; gQ++)
          for (let WQ = 0; WQ < QQ; WQ++) sQ[PQ] = (0, zQ.i)(FQ[PQ]), sQ[PQ + 1] = (0, zQ.i)(FQ[PQ + 1]), sQ[PQ + 2] = (0, zQ.i)(FQ[PQ + 2]), jQ.StoreLODInAlphaChannel ? sQ[PQ + 3] = (0, zQ.i)(TQ) : sQ[PQ + 3] = (0, zQ.i)(FQ[PQ + 3]), PQ += 4;
        return sQ
      }
      static _GetFloatAsUIntRGBAArrayBuffer(QQ, WQ, XQ, qQ, TQ, zQ) {
        const sQ = new Uint8Array(qQ),
          FQ = new Float32Array(TQ, XQ);
        let PQ = 0;
        for (let gQ = 0; gQ < WQ; gQ++)
          for (let WQ = 0; WQ < QQ; WQ++) {
            const XQ = 4 * (WQ + gQ * QQ);
            sQ[PQ] = 255 * (0, wQ.Clamp)(FQ[XQ]), sQ[PQ + 1] = 255 * (0, wQ.Clamp)(FQ[XQ + 1]), sQ[PQ + 2] = 255 * (0, wQ.Clamp)(FQ[XQ + 2]), jQ.StoreLODInAlphaChannel ? sQ[PQ + 3] = zQ : sQ[PQ + 3] = 255 * (0, wQ.Clamp)(FQ[XQ + 3]), PQ += 4
          }
        return sQ
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(QQ, WQ, XQ, qQ, TQ, sQ) {
        const FQ = new Uint8Array(qQ),
          PQ = new Uint16Array(TQ, XQ);
        let gQ = 0;
        for (let JQ = 0; JQ < WQ; JQ++)
          for (let WQ = 0; WQ < QQ; WQ++) {
            const XQ = 4 * (WQ + JQ * QQ);
            FQ[gQ] = 255 * (0, wQ.Clamp)((0, zQ.d)(PQ[XQ])), FQ[gQ + 1] = 255 * (0, wQ.Clamp)((0, zQ.d)(PQ[XQ + 1])), FQ[gQ + 2] = 255 * (0, wQ.Clamp)((0, zQ.d)(PQ[XQ + 2])), jQ.StoreLODInAlphaChannel ? FQ[gQ + 3] = sQ : FQ[gQ + 3] = 255 * (0, wQ.Clamp)((0, zQ.d)(PQ[XQ + 3])), gQ += 4
          }
        return FQ
      }
      static _GetRGBAArrayBuffer(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ) {
        const PQ = new Uint8Array(wQ),
          gQ = new Uint8Array(qQ, XQ);
        let JQ = 0;
        for (let rQ = 0; rQ < WQ; rQ++)
          for (let WQ = 0; WQ < QQ; WQ++) {
            const XQ = 4 * (WQ + rQ * QQ);
            PQ[JQ] = gQ[XQ + TQ], PQ[JQ + 1] = gQ[XQ + zQ], PQ[JQ + 2] = gQ[XQ + sQ], PQ[JQ + 3] = gQ[XQ + FQ], JQ += 4
          }
        return PQ
      }
      static _ExtractLongWordOrder(QQ) {
        return 0 === QQ || 255 === QQ || -16777216 === QQ ? 0 : 1 + jQ._ExtractLongWordOrder(QQ >> 8)
      }
      static _GetRGBArrayBuffer(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ) {
        const FQ = new Uint8Array(wQ),
          PQ = new Uint8Array(qQ, XQ);
        let gQ = 0;
        for (let JQ = 0; JQ < WQ; JQ++)
          for (let WQ = 0; WQ < QQ; WQ++) {
            const XQ = 3 * (WQ + JQ * QQ);
            FQ[gQ] = PQ[XQ + TQ], FQ[gQ + 1] = PQ[XQ + zQ], FQ[gQ + 2] = PQ[XQ + sQ], gQ += 3
          }
        return FQ
      }
      static _GetLuminanceArrayBuffer(QQ, WQ, XQ, wQ, qQ) {
        const TQ = new Uint8Array(wQ),
          zQ = new Uint8Array(qQ, XQ);
        let sQ = 0;
        for (let FQ = 0; FQ < WQ; FQ++)
          for (let WQ = 0; WQ < QQ; WQ++) {
            const XQ = WQ + FQ * QQ;
            TQ[sQ] = zQ[XQ], sQ++
          }
        return TQ
      }
      static UploadDDSLevels(QQ, WQ, XQ, wQ, zQ, FQ) {
        let PQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          BQ = arguments.length > 7 ? arguments[7] : void 0,
          yQ = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          VQ = null;
        wQ.sphericalPolynomial && (VQ = []);
        const DQ = !!QQ.getCaps().s3tc;
        WQ.generateMipMaps = zQ;
        const pQ = new Int32Array(XQ.buffer, XQ.byteOffset, 31);
        let GQ, UQ, bQ, vQ, dQ, HQ, aQ, lQ = 0,
          hQ = 0,
          iQ = 1;
        if (542327876 !== pQ[0]) return void qQ.b.Error("Invalid magic number in DDS header");
        if (!wQ.isFourCC && !wQ.isRGB && !wQ.isLuminance) return void qQ.b.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (wQ.isCompressed && !DQ) return void qQ.b.Error("Compressed textures are not supported on this platform.");
        let cQ = pQ[22];
        vQ = pQ[1] + 4;
        let AQ = !1;
        if (wQ.isFourCC) switch (GQ = pQ[21], GQ) {
          case gQ:
            iQ = 8, hQ = 33777;
            break;
          case JQ:
            iQ = 16, hQ = 33778;
            break;
          case rQ:
            iQ = 16, hQ = 33779;
            break;
          case 113:
            AQ = !0, cQ = 64;
            break;
          case 116:
            AQ = !0, cQ = 128;
            break;
          case IQ: {
            vQ += 20;
            let QQ = !1;
            switch (wQ.dxgiFormat) {
              case 10:
                AQ = !0, cQ = 64, QQ = !0;
                break;
              case 2:
                AQ = !0, cQ = 128, QQ = !0;
                break;
              case 88:
                wQ.isRGB = !0, wQ.isFourCC = !1, cQ = 32, QQ = !0
            }
            if (QQ) break
          }
          default:
            return void qQ.b.Error(["Unsupported FourCC code:", (RQ = GQ, String.fromCharCode(255 & RQ, RQ >> 8 & 255, RQ >> 16 & 255, RQ >> 24 & 255))])
        }
        var RQ;
        const EQ = jQ._ExtractLongWordOrder(pQ[23]),
          CQ = jQ._ExtractLongWordOrder(pQ[24]),
          uQ = jQ._ExtractLongWordOrder(pQ[25]),
          LQ = jQ._ExtractLongWordOrder(pQ[26]);
        AQ && (hQ = QQ._getRGBABufferInternalSizedFormat(wQ.textureType)), HQ = 1, pQ[2] & sQ && !1 !== zQ && (HQ = Math.max(1, pQ[7]));
        const kQ = BQ || 0,
          fQ = QQ.getCaps();
        for (let qQ = kQ; qQ < FQ; qQ++) {
          for (UQ = pQ[4], bQ = pQ[3], aQ = 0; aQ < HQ; ++aQ) {
            if (-1 === PQ || PQ === aQ) {
              const TQ = -1 === PQ ? aQ : 0;
              if (!wQ.isCompressed && wQ.isFourCC) {
                WQ.format = 5, lQ = UQ * bQ * 4;
                let wQ = null;
                if (QQ._badOS || QQ._badDesktopOS || !fQ.textureHalfFloat && !fQ.textureFloat) 128 === cQ ? (wQ = jQ._GetFloatAsUIntRGBAArrayBuffer(UQ, bQ, XQ.byteOffset + vQ, lQ, XQ.buffer, TQ), VQ && 0 == TQ && VQ.push(jQ._GetFloatRGBAArrayBuffer(UQ, bQ, XQ.byteOffset + vQ, lQ, XQ.buffer, TQ))) : 64 === cQ && (wQ = jQ._GetHalfFloatAsUIntRGBAArrayBuffer(UQ, bQ, XQ.byteOffset + vQ, lQ, XQ.buffer, TQ), VQ && 0 == TQ && VQ.push(jQ._GetHalfFloatAsFloatRGBAArrayBuffer(UQ, bQ, XQ.byteOffset + vQ, lQ, XQ.buffer, TQ))), WQ.type = 0;
                else {
                  const QQ = fQ.textureFloat && (yQ && fQ.textureFloatLinearFiltering || !yQ),
                    qQ = fQ.textureHalfFloat && (yQ && fQ.textureHalfFloatLinearFiltering || !yQ),
                    zQ = (128 === cQ || 64 === cQ && !qQ) && QQ ? 1 : (64 === cQ || 128 === cQ && !QQ) && qQ ? 2 : 0;
                  let sQ, FQ = null;
                  if (128 === cQ) switch (zQ) {
                    case 1:
                      sQ = jQ._GetFloatRGBAArrayBuffer, FQ = null;
                      break;
                    case 2:
                      sQ = jQ._GetFloatAsHalfFloatRGBAArrayBuffer, FQ = jQ._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      sQ = jQ._GetFloatAsUIntRGBAArrayBuffer, FQ = jQ._GetFloatRGBAArrayBuffer
                  } else switch (zQ) {
                    case 1:
                      sQ = jQ._GetHalfFloatAsFloatRGBAArrayBuffer, FQ = null;
                      break;
                    case 2:
                      sQ = jQ._GetHalfFloatRGBAArrayBuffer, FQ = jQ._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      sQ = jQ._GetHalfFloatAsUIntRGBAArrayBuffer, FQ = jQ._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  WQ.type = zQ, wQ = sQ(UQ, bQ, XQ.byteOffset + vQ, lQ, XQ.buffer, TQ), VQ && 0 == TQ && VQ.push(FQ ? FQ(UQ, bQ, XQ.byteOffset + vQ, lQ, XQ.buffer, TQ) : wQ)
                }
                wQ && QQ._uploadDataToTextureDirectly(WQ, wQ, qQ, TQ)
              } else if (wQ.isRGB) WQ.type = 0, 24 === cQ ? (WQ.format = 4, lQ = UQ * bQ * 3, dQ = jQ._GetRGBArrayBuffer(UQ, bQ, XQ.byteOffset + vQ, lQ, XQ.buffer, EQ, CQ, uQ), QQ._uploadDataToTextureDirectly(WQ, dQ, qQ, TQ)) : (WQ.format = 5, lQ = UQ * bQ * 4, dQ = jQ._GetRGBAArrayBuffer(UQ, bQ, XQ.byteOffset + vQ, lQ, XQ.buffer, EQ, CQ, uQ, LQ), QQ._uploadDataToTextureDirectly(WQ, dQ, qQ, TQ));
              else if (wQ.isLuminance) {
                const wQ = QQ._getUnpackAlignement(),
                  zQ = UQ;
                lQ = Math.floor((UQ + wQ - 1) / wQ) * wQ * (bQ - 1) + zQ, dQ = jQ._GetLuminanceArrayBuffer(UQ, bQ, XQ.byteOffset + vQ, lQ, XQ.buffer), WQ.format = 1, WQ.type = 0, QQ._uploadDataToTextureDirectly(WQ, dQ, qQ, TQ)
              } else lQ = Math.max(4, UQ) / 4 * Math.max(4, bQ) / 4 * iQ, dQ = new Uint8Array(XQ.buffer, XQ.byteOffset + vQ, lQ), WQ.type = 0, QQ._uploadCompressedDataToTextureDirectly(WQ, hQ, UQ, bQ, dQ, qQ, TQ)
            }
            vQ += cQ ? UQ * bQ * (cQ / 8) : lQ, UQ *= .5, bQ *= .5, UQ = Math.max(1, UQ), bQ = Math.max(1, bQ)
          }
          if (void 0 !== BQ) break
        }
        VQ && VQ.length > 0 ? wQ.sphericalPolynomial = TQ.d.ConvertCubeMapToSphericalPolynomial({
          size: pQ[4],
          right: VQ[0],
          left: VQ[1],
          up: VQ[2],
          down: VQ[3],
          front: VQ[4],
          back: VQ[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : wQ.sphericalPolynomial = void 0
      }
    }
    jQ.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);