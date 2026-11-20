export const id = 297;
export const ids = [297];
export const modules = {
  41519: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => cq
    });
    var Yq = gq(37139),
      lq = gq(37158),
      Oq = gq(39741),
      mq = gq(37145),
      xq = gq(37289);
    class Aq {
      constructor(qq, Eq, gq, Yq) {
        this.name = qq, this.worldAxisForNormal = Eq, this.worldAxisForFileX = gq, this.worldAxisForFileY = Yq
      }
    }
    class cq {
      static _NearestPow2Floor(qq) {
        return qq <= 1 ? 1 : 1 << Math.floor(Math.log2(qq))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(qq) {
        if (!qq.isCube) return null;
        qq.ZJ()?.Ba().flushFramebuffer();
        const Eq = qq.getSize().width,
          gq = qq._sphericalPolynomialTargetSize,
          Yq = gq > 0 ? this._NearestPow2Floor(gq) : 0,
          lq = !qq.noMipmap && !0 === qq._texture?.generateMipMaps,
          Oq = Yq > 0 && Yq < Eq && lq,
          mq = Oq ? Math.max(0, Math.round(Math.log2(Eq / Yq))) : 0,
          xq = Oq ? Math.max(1, Math.floor(Eq / Math.pow(2, mq))) : Eq,
          Aq = qq.readPixels(0, mq, void 0, !1),
          cq = qq.readPixels(1, mq, void 0, !1);
        let uq, Bq;
        qq.isRenderTarget ? (uq = qq.readPixels(3, mq, void 0, !1), Bq = qq.readPixels(2, mq, void 0, !1)) : (uq = qq.readPixels(2, mq, void 0, !1), Bq = qq.readPixels(3, mq, void 0, !1));
        const Wq = qq.readPixels(4, mq, void 0, !1),
          Nq = qq.readPixels(5, mq, void 0, !1),
          aq = qq.gammaSpace,
          Vq = Yq > 0 && Yq < Eq && !Oq;
        return new Promise((qq => {
          Promise.all([cq, Aq, uq, Bq, Wq, Nq]).then((gq => {
            let [lq, Oq, mq, Aq, cq, uq] = gq, Bq = xq;
            if (Vq) {
              const qq = 4;
              lq = this._DownsampleFace(lq, Eq, Yq, qq), Oq = this._DownsampleFace(Oq, Eq, Yq, qq), mq = this._DownsampleFace(mq, Eq, Yq, qq), Aq = this._DownsampleFace(Aq, Eq, Yq, qq), cq = this._DownsampleFace(cq, Eq, Yq, qq), uq = this._DownsampleFace(uq, Eq, Yq, qq), Bq = Yq
            }
            const Wq = {
              size: Bq,
              right: Oq,
              left: lq,
              up: mq,
              down: Aq,
              front: cq,
              back: uq,
              format: 5,
              type: lq instanceof Float32Array ? 1 : 0,
              gammaSpace: aq
            };
            qq(this.ConvertCubeMapToSphericalPolynomial(Wq))
          }))
        }))
      }
      static _AreaElement(qq, Eq) {
        return Math.atan2(qq * Eq, Math.sqrt(qq * qq + Eq * Eq + 1))
      }
      static _DownsampleFace(qq, Eq, gq, Yq) {
        const lq = qq instanceof Float32Array ? qq : Float32Array.from(qq),
          Oq = gq * gq * Yq,
          mq = new Float32Array(Oq),
          xq = Eq / gq,
          Aq = 1 / (xq * xq);
        for (let uq = 0; uq < gq; uq++) {
          const qq = Math.floor(uq * xq),
            Oq = Math.floor((uq + 1) * xq);
          for (let cq = 0; cq < gq; cq++) {
            const Bq = Math.floor(cq * xq),
              Wq = Math.floor((cq + 1) * xq),
              Nq = (uq * gq + cq) * Yq;
            for (let gq = 0; gq < Yq; gq++) {
              let xq = 0;
              for (let mq = qq; mq < Oq; mq++)
                for (let qq = Bq; qq < Wq; qq++) xq += lq[(mq * Eq + qq) * Yq + gq];
              mq[Nq + gq] = xq * Aq
            }
          }
        }
        if (qq instanceof Float32Array) return mq;
        const cq = new(0, qq.constructor)(Oq);
        for (let uq = 0; uq < Oq; uq++) cq[uq] = mq[uq] + .5 | 0;
        return cq
      }
      static ConvertCubeMapToSphericalPolynomial(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const gq = Eq > 0 ? this._NearestPow2Floor(Eq) : 0;
        if (gq > 0 && qq.size > gq) {
          const Eq = 5 === qq.format ? 4 : 3,
            Yq = ["right", "left", "up", "down", "front", "back"],
            lq = {};
          for (const Oq of Yq) lq[Oq] = this._DownsampleFace(qq[Oq], qq.size, gq, Eq);
          qq = {
            ...qq,
            ...lq,
            size: gq
          }
        }
        const Yq = new Oq.c;
        let Aq = 0;
        const cq = 2 / qq.size,
          uq = cq,
          Bq = .5 * cq,
          Wq = Bq - 1;
        for (let Oq = 0; Oq < 6; Oq++) {
          const Eq = this._FileFaces[Oq],
            gq = qq[Eq.name];
          let Nq = Wq;
          const aq = 5 === qq.format ? 4 : 3;
          for (let Oq = 0; Oq < qq.size; Oq++) {
            let Vq = Wq;
            for (let uq = 0; uq < qq.size; uq++) {
              const Wq = Eq.worldAxisForFileX.scale(Vq).add(Eq.worldAxisForFileY.scale(Nq)).add(Eq.worldAxisForNormal);
              Wq.normalize();
              const dq = this._AreaElement(Vq - Bq, Nq - Bq) - this._AreaElement(Vq - Bq, Nq + Bq) - this._AreaElement(Vq + Bq, Nq - Bq) + this._AreaElement(Vq + Bq, Nq + Bq);
              let jq = gq[Oq * qq.size * aq + uq * aq + 0],
                Hq = gq[Oq * qq.size * aq + uq * aq + 1],
                oq = gq[Oq * qq.size * aq + uq * aq + 2];
              isNaN(jq) && (jq = 0), isNaN(Hq) && (Hq = 0), isNaN(oq) && (oq = 0), 0 === qq.type && (jq /= 255, Hq /= 255, oq /= 255), qq.gammaSpace && (jq = Math.pow((0, lq.Clamp)(jq), mq.h), Hq = Math.pow((0, lq.Clamp)(Hq), mq.h), oq = Math.pow((0, lq.Clamp)(oq), mq.h));
              const Pq = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const qq = Math.max(jq, Hq, oq);
                if (qq > Pq) {
                  const Eq = Pq / qq;
                  jq *= Eq, Hq *= Eq, oq *= Eq
                }
              } else jq = (0, lq.Clamp)(jq, 0, Pq), Hq = (0, lq.Clamp)(Hq, 0, Pq), oq = (0, lq.Clamp)(oq, 0, Pq);
              const Qq = new xq.d(jq, Hq, oq);
              Yq.addLight(Wq, Qq, dq), Aq += dq, Vq += cq
            }
            Nq += uq
          }
        }
        const Nq = 6 * (4 * Math.PI) / 6 / Aq;
        return Yq.scaleInPlace(Nq), Yq.convertIncidentRadianceToIrradiance(), Yq.convertIrradianceToLambertianRadiance(), Oq.d.FromHarmonics(Yq)
      }
    }
    cq._FileFaces = [new Aq("right", new Yq.q(1, 0, 0), new Yq.q(0, 0, -1), new Yq.q(0, -1, 0)), new Aq("left", new Yq.q(-1, 0, 0), new Yq.q(0, 0, 1), new Yq.q(0, -1, 0)), new Aq("up", new Yq.q(0, 1, 0), new Yq.q(1, 0, 0), new Yq.q(0, 0, 1)), new Aq("down", new Yq.q(0, -1, 0), new Yq.q(1, 0, 0), new Yq.q(0, 0, -1)), new Aq("front", new Yq.q(0, 0, 1), new Yq.q(1, 0, 0), new Yq.q(0, -1, 0)), new Aq("back", new Yq.q(0, 0, -1), new Yq.q(-1, 0, 0), new Yq.q(0, -1, 0))], cq.MAX_HDRI_VALUE = 4096, cq.PRESERVE_CLAMPED_COLORS = !1
  },
  41515: (qq, Eq, gq) => {
    gq.d(Eq, {
      DDSTools: () => aq
    });
    var Yq = gq(37158),
      lq = gq(38653),
      Oq = gq(41519),
      mq = gq(39819);
    const xq = 131072,
      Aq = 131072;

    function cq(qq) {
      return qq.charCodeAt(0) + (qq.charCodeAt(1) << 8) + (qq.charCodeAt(2) << 16) + (qq.charCodeAt(3) << 24)
    }
    const uq = cq("DXT1"),
      Bq = cq("DXT3"),
      Wq = cq("DXT5"),
      Nq = cq("DX10");
    class aq {
      static GetDDSInfo(qq) {
        const Eq = new Int32Array(qq.buffer, qq.byteOffset, 31),
          gq = new Int32Array(qq.buffer, qq.byteOffset, 35);
        let Yq = 1;
        Eq[2] & xq && (Yq = Math.max(1, Eq[7]));
        const lq = Eq[21],
          Oq = lq === Nq ? gq[32] : 0;
        let mq = 0;
        switch (lq) {
          case 113:
            mq = 2;
            break;
          case 116:
            mq = 1;
            break;
          case Nq:
            if (10 === Oq) {
              mq = 2;
              break
            }
            if (2 === Oq) {
              mq = 1;
              break
            }
        }
        return {
          width: Eq[4],
          height: Eq[3],
          mipmapCount: Yq,
          isFourCC: 4 === (4 & Eq[20]),
          isRGB: 64 === (64 & Eq[20]),
          isLuminance: (Eq[20] & Aq) === Aq,
          isCube: 512 === (512 & Eq[28]),
          isCompressed: lq === uq || lq === Bq || lq === Wq,
          dxgiFormat: Oq,
          textureType: mq
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(qq, Eq, gq, Yq, lq, Oq) {
        const xq = new Float32Array(Yq),
          Aq = new Uint16Array(lq, gq);
        let cq = 0;
        for (let uq = 0; uq < Eq; uq++)
          for (let Eq = 0; Eq < qq; Eq++) {
            const gq = 4 * (Eq + uq * qq);
            xq[cq] = (0, mq.e)(Aq[gq]), xq[cq + 1] = (0, mq.e)(Aq[gq + 1]), xq[cq + 2] = (0, mq.e)(Aq[gq + 2]), aq.StoreLODInAlphaChannel ? xq[cq + 3] = Oq : xq[cq + 3] = (0, mq.e)(Aq[gq + 3]), cq += 4
          }
        return xq
      }
      static _GetHalfFloatRGBAArrayBuffer(qq, Eq, gq, Yq, lq, Oq) {
        if (aq.StoreLODInAlphaChannel) {
          const xq = new Uint16Array(Yq),
            Aq = new Uint16Array(lq, gq);
          let cq = 0;
          for (let gq = 0; gq < Eq; gq++)
            for (let Eq = 0; Eq < qq; Eq++) {
              const Yq = 4 * (Eq + gq * qq);
              xq[cq] = Aq[Yq], xq[cq + 1] = Aq[Yq + 1], xq[cq + 2] = Aq[Yq + 2], xq[cq + 3] = (0, mq.j)(Oq), cq += 4
            }
          return xq
        }
        return new Uint16Array(lq, gq, Yq)
      }
      static _GetFloatRGBAArrayBuffer(qq, Eq, gq, Yq, lq, Oq) {
        if (aq.StoreLODInAlphaChannel) {
          const mq = new Float32Array(Yq),
            xq = new Float32Array(lq, gq);
          let Aq = 0;
          for (let gq = 0; gq < Eq; gq++)
            for (let Eq = 0; Eq < qq; Eq++) {
              const Yq = 4 * (Eq + gq * qq);
              mq[Aq] = xq[Yq], mq[Aq + 1] = xq[Yq + 1], mq[Aq + 2] = xq[Yq + 2], mq[Aq + 3] = Oq, Aq += 4
            }
          return mq
        }
        return new Float32Array(lq, gq, Yq)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(qq, Eq, gq, Yq, lq, Oq) {
        const xq = new Uint16Array(Yq),
          Aq = new Float32Array(lq, gq);
        let cq = 0;
        for (let uq = 0; uq < Eq; uq++)
          for (let Eq = 0; Eq < qq; Eq++) xq[cq] = (0, mq.j)(Aq[cq]), xq[cq + 1] = (0, mq.j)(Aq[cq + 1]), xq[cq + 2] = (0, mq.j)(Aq[cq + 2]), aq.StoreLODInAlphaChannel ? xq[cq + 3] = (0, mq.j)(Oq) : xq[cq + 3] = (0, mq.j)(Aq[cq + 3]), cq += 4;
        return xq
      }
      static _GetFloatAsUIntRGBAArrayBuffer(qq, Eq, gq, lq, Oq, mq) {
        const xq = new Uint8Array(lq),
          Aq = new Float32Array(Oq, gq);
        let cq = 0;
        for (let uq = 0; uq < Eq; uq++)
          for (let Eq = 0; Eq < qq; Eq++) {
            const gq = 4 * (Eq + uq * qq);
            xq[cq] = 255 * (0, Yq.Clamp)(Aq[gq]), xq[cq + 1] = 255 * (0, Yq.Clamp)(Aq[gq + 1]), xq[cq + 2] = 255 * (0, Yq.Clamp)(Aq[gq + 2]), aq.StoreLODInAlphaChannel ? xq[cq + 3] = mq : xq[cq + 3] = 255 * (0, Yq.Clamp)(Aq[gq + 3]), cq += 4
          }
        return xq
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(qq, Eq, gq, lq, Oq, xq) {
        const Aq = new Uint8Array(lq),
          cq = new Uint16Array(Oq, gq);
        let uq = 0;
        for (let Bq = 0; Bq < Eq; Bq++)
          for (let Eq = 0; Eq < qq; Eq++) {
            const gq = 4 * (Eq + Bq * qq);
            Aq[uq] = 255 * (0, Yq.Clamp)((0, mq.e)(cq[gq])), Aq[uq + 1] = 255 * (0, Yq.Clamp)((0, mq.e)(cq[gq + 1])), Aq[uq + 2] = 255 * (0, Yq.Clamp)((0, mq.e)(cq[gq + 2])), aq.StoreLODInAlphaChannel ? Aq[uq + 3] = xq : Aq[uq + 3] = 255 * (0, Yq.Clamp)((0, mq.e)(cq[gq + 3])), uq += 4
          }
        return Aq
      }
      static _GetRGBAArrayBuffer(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
        const cq = new Uint8Array(Yq),
          uq = new Uint8Array(lq, gq);
        let Bq = 0;
        for (let Wq = 0; Wq < Eq; Wq++)
          for (let Eq = 0; Eq < qq; Eq++) {
            const gq = 4 * (Eq + Wq * qq);
            cq[Bq] = uq[gq + Oq], cq[Bq + 1] = uq[gq + mq], cq[Bq + 2] = uq[gq + xq], cq[Bq + 3] = uq[gq + Aq], Bq += 4
          }
        return cq
      }
      static _ExtractLongWordOrder(qq) {
        return 0 === qq || 255 === qq || -16777216 === qq ? 0 : 1 + aq._ExtractLongWordOrder(qq >> 8)
      }
      static _GetRGBArrayBuffer(qq, Eq, gq, Yq, lq, Oq, mq, xq) {
        const Aq = new Uint8Array(Yq),
          cq = new Uint8Array(lq, gq);
        let uq = 0;
        for (let Bq = 0; Bq < Eq; Bq++)
          for (let Eq = 0; Eq < qq; Eq++) {
            const gq = 3 * (Eq + Bq * qq);
            Aq[uq] = cq[gq + Oq], Aq[uq + 1] = cq[gq + mq], Aq[uq + 2] = cq[gq + xq], uq += 3
          }
        return Aq
      }
      static _GetLuminanceArrayBuffer(qq, Eq, gq, Yq, lq) {
        const Oq = new Uint8Array(Yq),
          mq = new Uint8Array(lq, gq);
        let xq = 0;
        for (let Aq = 0; Aq < Eq; Aq++)
          for (let Eq = 0; Eq < qq; Eq++) {
            const gq = Eq + Aq * qq;
            Oq[xq] = mq[gq], xq++
          }
        return Oq
      }
      static UploadDDSLevels(qq, Eq, gq, Yq, mq, Aq) {
        let cq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          Vq = arguments.length > 7 ? arguments[7] : void 0,
          dq = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          jq = null;
        Yq.sphericalPolynomial && (jq = []);
        const Hq = !!qq.getCaps().s3tc;
        Eq.generateMipMaps = mq;
        const oq = new Int32Array(gq.buffer, gq.byteOffset, 31);
        let Pq, Qq, yq, tq, rq, vq, hq, nq = 0,
          bq = 0,
          iq = 1;
        if (542327876 !== oq[0]) return void lq.b.Error("Invalid magic number in DDS header");
        if (!Yq.isFourCC && !Yq.isRGB && !Yq.isLuminance) return void lq.b.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (Yq.isCompressed && !Hq) return void lq.b.Error("Compressed textures are not supported on this platform.");
        let Zq = oq[22];
        tq = oq[1] + 4;
        let fq = !1;
        if (Yq.isFourCC) switch (Pq = oq[21], Pq) {
          case uq:
            iq = 8, bq = 33777;
            break;
          case Bq:
            iq = 16, bq = 33778;
            break;
          case Wq:
            iq = 16, bq = 33779;
            break;
          case 113:
            fq = !0, Zq = 64;
            break;
          case 116:
            fq = !0, Zq = 128;
            break;
          case Nq: {
            tq += 20;
            let qq = !1;
            switch (Yq.dxgiFormat) {
              case 10:
                fq = !0, Zq = 64, qq = !0;
                break;
              case 2:
                fq = !0, Zq = 128, qq = !0;
                break;
              case 88:
                Yq.isRGB = !0, Yq.isFourCC = !1, Zq = 32, qq = !0
            }
            if (qq) break
          }
          default:
            return void lq.b.Error(["Unsupported FourCC code:", (Mq = Pq, String.fromCharCode(255 & Mq, Mq >> 8 & 255, Mq >> 16 & 255, Mq >> 24 & 255))])
        }
        var Mq;
        const Tq = aq._ExtractLongWordOrder(oq[23]),
          zq = aq._ExtractLongWordOrder(oq[24]),
          Sq = aq._ExtractLongWordOrder(oq[25]),
          pq = aq._ExtractLongWordOrder(oq[26]);
        fq && (bq = qq._getRGBABufferInternalSizedFormat(Yq.textureType)), vq = 1, oq[2] & xq && !1 !== mq && (vq = Math.max(1, oq[7]));
        const Gq = Vq || 0,
          Lq = qq.getCaps();
        for (let lq = Gq; lq < Aq; lq++) {
          for (Qq = oq[4], yq = oq[3], hq = 0; hq < vq; ++hq) {
            if (-1 === cq || cq === hq) {
              const Oq = -1 === cq ? hq : 0;
              if (!Yq.isCompressed && Yq.isFourCC) {
                Eq.format = 5, nq = Qq * yq * 4;
                let Yq = null;
                if (qq._badOS || qq._badDesktopOS || !Lq.textureHalfFloat && !Lq.textureFloat) 128 === Zq ? (Yq = aq._GetFloatAsUIntRGBAArrayBuffer(Qq, yq, gq.byteOffset + tq, nq, gq.buffer, Oq), jq && 0 == Oq && jq.push(aq._GetFloatRGBAArrayBuffer(Qq, yq, gq.byteOffset + tq, nq, gq.buffer, Oq))) : 64 === Zq && (Yq = aq._GetHalfFloatAsUIntRGBAArrayBuffer(Qq, yq, gq.byteOffset + tq, nq, gq.buffer, Oq), jq && 0 == Oq && jq.push(aq._GetHalfFloatAsFloatRGBAArrayBuffer(Qq, yq, gq.byteOffset + tq, nq, gq.buffer, Oq))), Eq.type = 0;
                else {
                  const qq = Lq.textureFloat && (dq && Lq.textureFloatLinearFiltering || !dq),
                    lq = Lq.textureHalfFloat && (dq && Lq.textureHalfFloatLinearFiltering || !dq),
                    mq = (128 === Zq || 64 === Zq && !lq) && qq ? 1 : (64 === Zq || 128 === Zq && !qq) && lq ? 2 : 0;
                  let xq, Aq = null;
                  if (128 === Zq) switch (mq) {
                    case 1:
                      xq = aq._GetFloatRGBAArrayBuffer, Aq = null;
                      break;
                    case 2:
                      xq = aq._GetFloatAsHalfFloatRGBAArrayBuffer, Aq = aq._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      xq = aq._GetFloatAsUIntRGBAArrayBuffer, Aq = aq._GetFloatRGBAArrayBuffer
                  } else switch (mq) {
                    case 1:
                      xq = aq._GetHalfFloatAsFloatRGBAArrayBuffer, Aq = null;
                      break;
                    case 2:
                      xq = aq._GetHalfFloatRGBAArrayBuffer, Aq = aq._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      xq = aq._GetHalfFloatAsUIntRGBAArrayBuffer, Aq = aq._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  Eq.type = mq, Yq = xq(Qq, yq, gq.byteOffset + tq, nq, gq.buffer, Oq), jq && 0 == Oq && jq.push(Aq ? Aq(Qq, yq, gq.byteOffset + tq, nq, gq.buffer, Oq) : Yq)
                }
                Yq && qq._uploadDataToTextureDirectly(Eq, Yq, lq, Oq)
              } else if (Yq.isRGB) Eq.type = 0, 24 === Zq ? (Eq.format = 4, nq = Qq * yq * 3, rq = aq._GetRGBArrayBuffer(Qq, yq, gq.byteOffset + tq, nq, gq.buffer, Tq, zq, Sq), qq._uploadDataToTextureDirectly(Eq, rq, lq, Oq)) : (Eq.format = 5, nq = Qq * yq * 4, rq = aq._GetRGBAArrayBuffer(Qq, yq, gq.byteOffset + tq, nq, gq.buffer, Tq, zq, Sq, pq), qq._uploadDataToTextureDirectly(Eq, rq, lq, Oq));
              else if (Yq.isLuminance) {
                const Yq = qq._getUnpackAlignement(),
                  mq = Qq;
                nq = Math.floor((Qq + Yq - 1) / Yq) * Yq * (yq - 1) + mq, rq = aq._GetLuminanceArrayBuffer(Qq, yq, gq.byteOffset + tq, nq, gq.buffer), Eq.format = 1, Eq.type = 0, qq._uploadDataToTextureDirectly(Eq, rq, lq, Oq)
              } else nq = Math.max(4, Qq) / 4 * Math.max(4, yq) / 4 * iq, rq = new Uint8Array(gq.buffer, gq.byteOffset + tq, nq), Eq.type = 0, qq._uploadCompressedDataToTextureDirectly(Eq, bq, Qq, yq, rq, lq, Oq)
            }
            tq += Zq ? Qq * yq * (Zq / 8) : nq, Qq *= .5, yq *= .5, Qq = Math.max(1, Qq), yq = Math.max(1, yq)
          }
          if (void 0 !== Vq) break
        }
        jq && jq.length > 0 ? Yq.sphericalPolynomial = Oq.b.ConvertCubeMapToSphericalPolynomial({
          size: oq[4],
          right: jq[0],
          left: jq[1],
          up: jq[2],
          down: jq[3],
          front: jq[4],
          back: jq[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : Yq.sphericalPolynomial = void 0
      }
    }
    aq.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);