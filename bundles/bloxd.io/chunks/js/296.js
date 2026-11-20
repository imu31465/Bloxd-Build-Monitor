export const id = 296;
export const ids = [296];
export const modules = {
  41160: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Hb
    });
    var kb = sb(36656),
      Wb = sb(36688),
      ab = sb(39404),
      Tb = sb(36661),
      Ub = sb(36830);
    class Ib {
      constructor(bb, cb, sb, kb) {
        this.name = bb, this.worldAxisForNormal = cb, this.worldAxisForFileX = sb, this.worldAxisForFileY = kb
      }
    }
    class Hb {
      static _NearestPow2Floor(bb) {
        return bb <= 1 ? 1 : 1 << Math.floor(Math.log2(bb))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(bb) {
        if (!bb.isCube) return null;
        bb.EY()?.Sm().flushFramebuffer();
        const cb = bb.getSize().width,
          sb = bb._sphericalPolynomialTargetSize,
          kb = sb > 0 ? this._NearestPow2Floor(sb) : 0,
          Wb = !bb.noMipmap && !0 === bb._texture?.generateMipMaps,
          ab = kb > 0 && kb < cb && Wb,
          Tb = ab ? Math.max(0, Math.round(Math.log2(cb / kb))) : 0,
          Ub = ab ? Math.max(1, Math.floor(cb / Math.pow(2, Tb))) : cb,
          Ib = bb.readPixels(0, Tb, void 0, !1),
          Hb = bb.readPixels(1, Tb, void 0, !1);
        let fb, Mb;
        bb.isRenderTarget ? (fb = bb.readPixels(3, Tb, void 0, !1), Mb = bb.readPixels(2, Tb, void 0, !1)) : (fb = bb.readPixels(2, Tb, void 0, !1), Mb = bb.readPixels(3, Tb, void 0, !1));
        const Xb = bb.readPixels(4, Tb, void 0, !1),
          nb = bb.readPixels(5, Tb, void 0, !1),
          mb = bb.gammaSpace,
          lb = kb > 0 && kb < cb && !ab;
        return new Promise((bb => {
          Promise.all([Hb, Ib, fb, Mb, Xb, nb]).then((sb => {
            let [Wb, ab, Tb, Ib, Hb, fb] = sb, Mb = Ub;
            if (lb) {
              const bb = 4;
              Wb = this._DownsampleFace(Wb, cb, kb, bb), ab = this._DownsampleFace(ab, cb, kb, bb), Tb = this._DownsampleFace(Tb, cb, kb, bb), Ib = this._DownsampleFace(Ib, cb, kb, bb), Hb = this._DownsampleFace(Hb, cb, kb, bb), fb = this._DownsampleFace(fb, cb, kb, bb), Mb = kb
            }
            const Xb = {
              size: Mb,
              right: ab,
              left: Wb,
              up: Tb,
              down: Ib,
              front: Hb,
              back: fb,
              format: 5,
              type: Wb instanceof Float32Array ? 1 : 0,
              gammaSpace: mb
            };
            bb(this.ConvertCubeMapToSphericalPolynomial(Xb))
          }))
        }))
      }
      static _AreaElement(bb, cb) {
        return Math.atan2(bb * cb, Math.sqrt(bb * bb + cb * cb + 1))
      }
      static _DownsampleFace(bb, cb, sb, kb) {
        const Wb = bb instanceof Float32Array ? bb : Float32Array.from(bb),
          ab = sb * sb * kb,
          Tb = new Float32Array(ab),
          Ub = cb / sb,
          Ib = 1 / (Ub * Ub);
        for (let fb = 0; fb < sb; fb++) {
          const bb = Math.floor(fb * Ub),
            ab = Math.floor((fb + 1) * Ub);
          for (let Hb = 0; Hb < sb; Hb++) {
            const Mb = Math.floor(Hb * Ub),
              Xb = Math.floor((Hb + 1) * Ub),
              nb = (fb * sb + Hb) * kb;
            for (let sb = 0; sb < kb; sb++) {
              let Ub = 0;
              for (let Tb = bb; Tb < ab; Tb++)
                for (let bb = Mb; bb < Xb; bb++) Ub += Wb[(Tb * cb + bb) * kb + sb];
              Tb[nb + sb] = Ub * Ib
            }
          }
        }
        if (bb instanceof Float32Array) return Tb;
        const Hb = new(0, bb.constructor)(ab);
        for (let fb = 0; fb < ab; fb++) Hb[fb] = Tb[fb] + .5 | 0;
        return Hb
      }
      static ConvertCubeMapToSphericalPolynomial(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const sb = cb > 0 ? this._NearestPow2Floor(cb) : 0;
        if (sb > 0 && bb.size > sb) {
          const cb = 5 === bb.format ? 4 : 3,
            kb = ["right", "left", "up", "down", "front", "back"],
            Wb = {};
          for (const ab of kb) Wb[ab] = this._DownsampleFace(bb[ab], bb.size, sb, cb);
          bb = {
            ...bb,
            ...Wb,
            size: sb
          }
        }
        const kb = new ab.b;
        let Ib = 0;
        const Hb = 2 / bb.size,
          fb = Hb,
          Mb = .5 * Hb,
          Xb = Mb - 1;
        for (let ab = 0; ab < 6; ab++) {
          const cb = this._FileFaces[ab],
            sb = bb[cb.name];
          let nb = Xb;
          const mb = 5 === bb.format ? 4 : 3;
          for (let ab = 0; ab < bb.size; ab++) {
            let lb = Xb;
            for (let fb = 0; fb < bb.size; fb++) {
              const Xb = cb.worldAxisForFileX.scale(lb).add(cb.worldAxisForFileY.scale(nb)).add(cb.worldAxisForNormal);
              Xb.normalize();
              const Qb = this._AreaElement(lb - Mb, nb - Mb) - this._AreaElement(lb - Mb, nb + Mb) - this._AreaElement(lb + Mb, nb - Mb) + this._AreaElement(lb + Mb, nb + Mb);
              let eb = sb[ab * bb.size * mb + fb * mb + 0],
                Cb = sb[ab * bb.size * mb + fb * mb + 1],
                Nb = sb[ab * bb.size * mb + fb * mb + 2];
              isNaN(eb) && (eb = 0), isNaN(Cb) && (Cb = 0), isNaN(Nb) && (Nb = 0), 0 === bb.type && (eb /= 255, Cb /= 255, Nb /= 255), bb.gammaSpace && (eb = Math.pow((0, Wb.Clamp)(eb), Tb.h), Cb = Math.pow((0, Wb.Clamp)(Cb), Tb.h), Nb = Math.pow((0, Wb.Clamp)(Nb), Tb.h));
              const Vb = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const bb = Math.max(eb, Cb, Nb);
                if (bb > Vb) {
                  const cb = Vb / bb;
                  eb *= cb, Cb *= cb, Nb *= cb
                }
              } else eb = (0, Wb.Clamp)(eb, 0, Vb), Cb = (0, Wb.Clamp)(Cb, 0, Vb), Nb = (0, Wb.Clamp)(Nb, 0, Vb);
              const Lb = new Ub.e(eb, Cb, Nb);
              kb.addLight(Xb, Lb, Qb), Ib += Qb, lb += Hb
            }
            nb += fb
          }
        }
        const nb = 6 * (4 * Math.PI) / 6 / Ib;
        return kb.scaleInPlace(nb), kb.convertIncidentRadianceToIrradiance(), kb.convertIrradianceToLambertianRadiance(), ab.f.FromHarmonics(kb)
      }
    }
    Hb._FileFaces = [new Ib("right", new kb.p(1, 0, 0), new kb.p(0, 0, -1), new kb.p(0, -1, 0)), new Ib("left", new kb.p(-1, 0, 0), new kb.p(0, 0, 1), new kb.p(0, -1, 0)), new Ib("up", new kb.p(0, 1, 0), new kb.p(1, 0, 0), new kb.p(0, 0, 1)), new Ib("down", new kb.p(0, -1, 0), new kb.p(1, 0, 0), new kb.p(0, 0, -1)), new Ib("front", new kb.p(0, 0, 1), new kb.p(1, 0, 0), new kb.p(0, -1, 0)), new Ib("back", new kb.p(0, 0, -1), new kb.p(-1, 0, 0), new kb.p(0, -1, 0))], Hb.MAX_HDRI_VALUE = 4096, Hb.PRESERVE_CLAMPED_COLORS = !1
  },
  41155: (bb, cb, sb) => {
    sb.d(cb, {
      DDSTools: () => mb
    });
    var kb = sb(36688),
      Wb = sb(38284),
      ab = sb(41160),
      Tb = sb(39503);
    const Ub = 131072,
      Ib = 131072;

    function Hb(bb) {
      return bb.charCodeAt(0) + (bb.charCodeAt(1) << 8) + (bb.charCodeAt(2) << 16) + (bb.charCodeAt(3) << 24)
    }
    const fb = Hb("DXT1"),
      Mb = Hb("DXT3"),
      Xb = Hb("DXT5"),
      nb = Hb("DX10");
    class mb {
      static GetDDSInfo(bb) {
        const cb = new Int32Array(bb.buffer, bb.byteOffset, 31),
          sb = new Int32Array(bb.buffer, bb.byteOffset, 35);
        let kb = 1;
        cb[2] & Ub && (kb = Math.max(1, cb[7]));
        const Wb = cb[21],
          ab = Wb === nb ? sb[32] : 0;
        let Tb = 0;
        switch (Wb) {
          case 113:
            Tb = 2;
            break;
          case 116:
            Tb = 1;
            break;
          case nb:
            if (10 === ab) {
              Tb = 2;
              break
            }
            if (2 === ab) {
              Tb = 1;
              break
            }
        }
        return {
          width: cb[4],
          height: cb[3],
          mipmapCount: kb,
          isFourCC: 4 === (4 & cb[20]),
          isRGB: 64 === (64 & cb[20]),
          isLuminance: (cb[20] & Ib) === Ib,
          isCube: 512 === (512 & cb[28]),
          isCompressed: Wb === fb || Wb === Mb || Wb === Xb,
          dxgiFormat: ab,
          textureType: Tb
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(bb, cb, sb, kb, Wb, ab) {
        const Ub = new Float32Array(kb),
          Ib = new Uint16Array(Wb, sb);
        let Hb = 0;
        for (let fb = 0; fb < cb; fb++)
          for (let cb = 0; cb < bb; cb++) {
            const sb = 4 * (cb + fb * bb);
            Ub[Hb] = (0, Tb.d)(Ib[sb]), Ub[Hb + 1] = (0, Tb.d)(Ib[sb + 1]), Ub[Hb + 2] = (0, Tb.d)(Ib[sb + 2]), mb.StoreLODInAlphaChannel ? Ub[Hb + 3] = ab : Ub[Hb + 3] = (0, Tb.d)(Ib[sb + 3]), Hb += 4
          }
        return Ub
      }
      static _GetHalfFloatRGBAArrayBuffer(bb, cb, sb, kb, Wb, ab) {
        if (mb.StoreLODInAlphaChannel) {
          const Ub = new Uint16Array(kb),
            Ib = new Uint16Array(Wb, sb);
          let Hb = 0;
          for (let sb = 0; sb < cb; sb++)
            for (let cb = 0; cb < bb; cb++) {
              const kb = 4 * (cb + sb * bb);
              Ub[Hb] = Ib[kb], Ub[Hb + 1] = Ib[kb + 1], Ub[Hb + 2] = Ib[kb + 2], Ub[Hb + 3] = (0, Tb.f)(ab), Hb += 4
            }
          return Ub
        }
        return new Uint16Array(Wb, sb, kb)
      }
      static _GetFloatRGBAArrayBuffer(bb, cb, sb, kb, Wb, ab) {
        if (mb.StoreLODInAlphaChannel) {
          const Tb = new Float32Array(kb),
            Ub = new Float32Array(Wb, sb);
          let Ib = 0;
          for (let sb = 0; sb < cb; sb++)
            for (let cb = 0; cb < bb; cb++) {
              const kb = 4 * (cb + sb * bb);
              Tb[Ib] = Ub[kb], Tb[Ib + 1] = Ub[kb + 1], Tb[Ib + 2] = Ub[kb + 2], Tb[Ib + 3] = ab, Ib += 4
            }
          return Tb
        }
        return new Float32Array(Wb, sb, kb)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(bb, cb, sb, kb, Wb, ab) {
        const Ub = new Uint16Array(kb),
          Ib = new Float32Array(Wb, sb);
        let Hb = 0;
        for (let fb = 0; fb < cb; fb++)
          for (let cb = 0; cb < bb; cb++) Ub[Hb] = (0, Tb.f)(Ib[Hb]), Ub[Hb + 1] = (0, Tb.f)(Ib[Hb + 1]), Ub[Hb + 2] = (0, Tb.f)(Ib[Hb + 2]), mb.StoreLODInAlphaChannel ? Ub[Hb + 3] = (0, Tb.f)(ab) : Ub[Hb + 3] = (0, Tb.f)(Ib[Hb + 3]), Hb += 4;
        return Ub
      }
      static _GetFloatAsUIntRGBAArrayBuffer(bb, cb, sb, Wb, ab, Tb) {
        const Ub = new Uint8Array(Wb),
          Ib = new Float32Array(ab, sb);
        let Hb = 0;
        for (let fb = 0; fb < cb; fb++)
          for (let cb = 0; cb < bb; cb++) {
            const sb = 4 * (cb + fb * bb);
            Ub[Hb] = 255 * (0, kb.Clamp)(Ib[sb]), Ub[Hb + 1] = 255 * (0, kb.Clamp)(Ib[sb + 1]), Ub[Hb + 2] = 255 * (0, kb.Clamp)(Ib[sb + 2]), mb.StoreLODInAlphaChannel ? Ub[Hb + 3] = Tb : Ub[Hb + 3] = 255 * (0, kb.Clamp)(Ib[sb + 3]), Hb += 4
          }
        return Ub
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(bb, cb, sb, Wb, ab, Ub) {
        const Ib = new Uint8Array(Wb),
          Hb = new Uint16Array(ab, sb);
        let fb = 0;
        for (let Mb = 0; Mb < cb; Mb++)
          for (let cb = 0; cb < bb; cb++) {
            const sb = 4 * (cb + Mb * bb);
            Ib[fb] = 255 * (0, kb.Clamp)((0, Tb.d)(Hb[sb])), Ib[fb + 1] = 255 * (0, kb.Clamp)((0, Tb.d)(Hb[sb + 1])), Ib[fb + 2] = 255 * (0, kb.Clamp)((0, Tb.d)(Hb[sb + 2])), mb.StoreLODInAlphaChannel ? Ib[fb + 3] = Ub : Ib[fb + 3] = 255 * (0, kb.Clamp)((0, Tb.d)(Hb[sb + 3])), fb += 4
          }
        return Ib
      }
      static _GetRGBAArrayBuffer(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib) {
        const Hb = new Uint8Array(kb),
          fb = new Uint8Array(Wb, sb);
        let Mb = 0;
        for (let Xb = 0; Xb < cb; Xb++)
          for (let cb = 0; cb < bb; cb++) {
            const sb = 4 * (cb + Xb * bb);
            Hb[Mb] = fb[sb + ab], Hb[Mb + 1] = fb[sb + Tb], Hb[Mb + 2] = fb[sb + Ub], Hb[Mb + 3] = fb[sb + Ib], Mb += 4
          }
        return Hb
      }
      static _ExtractLongWordOrder(bb) {
        return 0 === bb || 255 === bb || -16777216 === bb ? 0 : 1 + mb._ExtractLongWordOrder(bb >> 8)
      }
      static _GetRGBArrayBuffer(bb, cb, sb, kb, Wb, ab, Tb, Ub) {
        const Ib = new Uint8Array(kb),
          Hb = new Uint8Array(Wb, sb);
        let fb = 0;
        for (let Mb = 0; Mb < cb; Mb++)
          for (let cb = 0; cb < bb; cb++) {
            const sb = 3 * (cb + Mb * bb);
            Ib[fb] = Hb[sb + ab], Ib[fb + 1] = Hb[sb + Tb], Ib[fb + 2] = Hb[sb + Ub], fb += 3
          }
        return Ib
      }
      static _GetLuminanceArrayBuffer(bb, cb, sb, kb, Wb) {
        const ab = new Uint8Array(kb),
          Tb = new Uint8Array(Wb, sb);
        let Ub = 0;
        for (let Ib = 0; Ib < cb; Ib++)
          for (let cb = 0; cb < bb; cb++) {
            const sb = cb + Ib * bb;
            ab[Ub] = Tb[sb], Ub++
          }
        return ab
      }
      static UploadDDSLevels(bb, cb, sb, kb, Tb, Ib) {
        let Hb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          lb = arguments.length > 7 ? arguments[7] : void 0,
          Qb = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          eb = null;
        kb.sphericalPolynomial && (eb = []);
        const Cb = !!bb.getCaps().s3tc;
        cb.generateMipMaps = Tb;
        const Nb = new Int32Array(sb.buffer, sb.byteOffset, 31);
        let Vb, Lb, ub, Yb, hb, Jb, gb, Bb = 0,
          tb = 0,
          yb = 1;
        if (542327876 !== Nb[0]) return void Wb.c.Error("Invalid magic number in DDS header");
        if (!kb.isFourCC && !kb.isRGB && !kb.isLuminance) return void Wb.c.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (kb.isCompressed && !Cb) return void Wb.c.Error("Compressed textures are not supported on this platform.");
        let Pb = Nb[22];
        Yb = Nb[1] + 4;
        let Db = !1;
        if (kb.isFourCC) switch (Vb = Nb[21], Vb) {
          case fb:
            yb = 8, tb = 33777;
            break;
          case Mb:
            yb = 16, tb = 33778;
            break;
          case Xb:
            yb = 16, tb = 33779;
            break;
          case 113:
            Db = !0, Pb = 64;
            break;
          case 116:
            Db = !0, Pb = 128;
            break;
          case nb: {
            Yb += 20;
            let bb = !1;
            switch (kb.dxgiFormat) {
              case 10:
                Db = !0, Pb = 64, bb = !0;
                break;
              case 2:
                Db = !0, Pb = 128, bb = !0;
                break;
              case 88:
                kb.isRGB = !0, kb.isFourCC = !1, Pb = 32, bb = !0
            }
            if (bb) break
          }
          default:
            return void Wb.c.Error(["Unsupported FourCC code:", (Eb = Vb, String.fromCharCode(255 & Eb, Eb >> 8 & 255, Eb >> 16 & 255, Eb >> 24 & 255))])
        }
        var Eb;
        const ib = mb._ExtractLongWordOrder(Nb[23]),
          Ob = mb._ExtractLongWordOrder(Nb[24]),
          Gb = mb._ExtractLongWordOrder(Nb[25]),
          Kb = mb._ExtractLongWordOrder(Nb[26]);
        Db && (tb = bb._getRGBABufferInternalSizedFormat(kb.textureType)), Jb = 1, Nb[2] & Ub && !1 !== Tb && (Jb = Math.max(1, Nb[7]));
        const Zb = lb || 0,
          zb = bb.getCaps();
        for (let Wb = Zb; Wb < Ib; Wb++) {
          for (Lb = Nb[4], ub = Nb[3], gb = 0; gb < Jb; ++gb) {
            if (-1 === Hb || Hb === gb) {
              const ab = -1 === Hb ? gb : 0;
              if (!kb.isCompressed && kb.isFourCC) {
                cb.format = 5, Bb = Lb * ub * 4;
                let kb = null;
                if (bb._badOS || bb._badDesktopOS || !zb.textureHalfFloat && !zb.textureFloat) 128 === Pb ? (kb = mb._GetFloatAsUIntRGBAArrayBuffer(Lb, ub, sb.byteOffset + Yb, Bb, sb.buffer, ab), eb && 0 == ab && eb.push(mb._GetFloatRGBAArrayBuffer(Lb, ub, sb.byteOffset + Yb, Bb, sb.buffer, ab))) : 64 === Pb && (kb = mb._GetHalfFloatAsUIntRGBAArrayBuffer(Lb, ub, sb.byteOffset + Yb, Bb, sb.buffer, ab), eb && 0 == ab && eb.push(mb._GetHalfFloatAsFloatRGBAArrayBuffer(Lb, ub, sb.byteOffset + Yb, Bb, sb.buffer, ab))), cb.type = 0;
                else {
                  const bb = zb.textureFloat && (Qb && zb.textureFloatLinearFiltering || !Qb),
                    Wb = zb.textureHalfFloat && (Qb && zb.textureHalfFloatLinearFiltering || !Qb),
                    Tb = (128 === Pb || 64 === Pb && !Wb) && bb ? 1 : (64 === Pb || 128 === Pb && !bb) && Wb ? 2 : 0;
                  let Ub, Ib = null;
                  if (128 === Pb) switch (Tb) {
                    case 1:
                      Ub = mb._GetFloatRGBAArrayBuffer, Ib = null;
                      break;
                    case 2:
                      Ub = mb._GetFloatAsHalfFloatRGBAArrayBuffer, Ib = mb._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      Ub = mb._GetFloatAsUIntRGBAArrayBuffer, Ib = mb._GetFloatRGBAArrayBuffer
                  } else switch (Tb) {
                    case 1:
                      Ub = mb._GetHalfFloatAsFloatRGBAArrayBuffer, Ib = null;
                      break;
                    case 2:
                      Ub = mb._GetHalfFloatRGBAArrayBuffer, Ib = mb._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      Ub = mb._GetHalfFloatAsUIntRGBAArrayBuffer, Ib = mb._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  cb.type = Tb, kb = Ub(Lb, ub, sb.byteOffset + Yb, Bb, sb.buffer, ab), eb && 0 == ab && eb.push(Ib ? Ib(Lb, ub, sb.byteOffset + Yb, Bb, sb.buffer, ab) : kb)
                }
                kb && bb._uploadDataToTextureDirectly(cb, kb, Wb, ab)
              } else if (kb.isRGB) cb.type = 0, 24 === Pb ? (cb.format = 4, Bb = Lb * ub * 3, hb = mb._GetRGBArrayBuffer(Lb, ub, sb.byteOffset + Yb, Bb, sb.buffer, ib, Ob, Gb), bb._uploadDataToTextureDirectly(cb, hb, Wb, ab)) : (cb.format = 5, Bb = Lb * ub * 4, hb = mb._GetRGBAArrayBuffer(Lb, ub, sb.byteOffset + Yb, Bb, sb.buffer, ib, Ob, Gb, Kb), bb._uploadDataToTextureDirectly(cb, hb, Wb, ab));
              else if (kb.isLuminance) {
                const kb = bb._getUnpackAlignement(),
                  Tb = Lb;
                Bb = Math.floor((Lb + kb - 1) / kb) * kb * (ub - 1) + Tb, hb = mb._GetLuminanceArrayBuffer(Lb, ub, sb.byteOffset + Yb, Bb, sb.buffer), cb.format = 1, cb.type = 0, bb._uploadDataToTextureDirectly(cb, hb, Wb, ab)
              } else Bb = Math.max(4, Lb) / 4 * Math.max(4, ub) / 4 * yb, hb = new Uint8Array(sb.buffer, sb.byteOffset + Yb, Bb), cb.type = 0, bb._uploadCompressedDataToTextureDirectly(cb, tb, Lb, ub, hb, Wb, ab)
            }
            Yb += Pb ? Lb * ub * (Pb / 8) : Bb, Lb *= .5, ub *= .5, Lb = Math.max(1, Lb), ub = Math.max(1, ub)
          }
          if (void 0 !== lb) break
        }
        eb && eb.length > 0 ? kb.sphericalPolynomial = ab.c.ConvertCubeMapToSphericalPolynomial({
          size: Nb[4],
          right: eb[0],
          left: eb[1],
          up: eb[2],
          down: eb[3],
          front: eb[4],
          back: eb[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : kb.sphericalPolynomial = void 0
      }
    }
    mb.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);