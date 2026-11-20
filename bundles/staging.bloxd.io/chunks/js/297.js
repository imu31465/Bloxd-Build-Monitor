export const id = 297;
export const ids = [297];
export const modules = {
  41221: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Sb
    });
    var Bb = hb(36727),
      Ob = hb(36757),
      Gb = hb(39456),
      Ub = hb(36734),
      Lb = hb(36893);
    class Yb {
      constructor(bb, ub, hb, Bb) {
        this.name = bb, this.worldAxisForNormal = ub, this.worldAxisForFileX = hb, this.worldAxisForFileY = Bb
      }
    }
    class Sb {
      static _NearestPow2Floor(bb) {
        return bb <= 1 ? 1 : 1 << Math.floor(Math.log2(bb))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(bb) {
        if (!bb.isCube) return null;
        bb.ZN()?.UX().flushFramebuffer();
        const ub = bb.getSize().width,
          hb = bb._sphericalPolynomialTargetSize,
          Bb = hb > 0 ? this._NearestPow2Floor(hb) : 0,
          Ob = !bb.noMipmap && !0 === bb._texture?.generateMipMaps,
          Gb = Bb > 0 && Bb < ub && Ob,
          Ub = Gb ? Math.max(0, Math.round(Math.log2(ub / Bb))) : 0,
          Lb = Gb ? Math.max(1, Math.floor(ub / Math.pow(2, Ub))) : ub,
          Yb = bb.readPixels(0, Ub, void 0, !1),
          Sb = bb.readPixels(1, Ub, void 0, !1);
        let ab, Hb;
        bb.isRenderTarget ? (ab = bb.readPixels(3, Ub, void 0, !1), Hb = bb.readPixels(2, Ub, void 0, !1)) : (ab = bb.readPixels(2, Ub, void 0, !1), Hb = bb.readPixels(3, Ub, void 0, !1));
        const wb = bb.readPixels(4, Ub, void 0, !1),
          Zb = bb.readPixels(5, Ub, void 0, !1),
          Xb = bb.gammaSpace,
          pb = Bb > 0 && Bb < ub && !Gb;
        return new Promise((bb => {
          Promise.all([Sb, Yb, ab, Hb, wb, Zb]).then((hb => {
            let [Ob, Gb, Ub, Yb, Sb, ab] = hb, Hb = Lb;
            if (pb) {
              const bb = 4;
              Ob = this._DownsampleFace(Ob, ub, Bb, bb), Gb = this._DownsampleFace(Gb, ub, Bb, bb), Ub = this._DownsampleFace(Ub, ub, Bb, bb), Yb = this._DownsampleFace(Yb, ub, Bb, bb), Sb = this._DownsampleFace(Sb, ub, Bb, bb), ab = this._DownsampleFace(ab, ub, Bb, bb), Hb = Bb
            }
            const wb = {
              size: Hb,
              right: Gb,
              left: Ob,
              up: Ub,
              down: Yb,
              front: Sb,
              back: ab,
              format: 5,
              type: Ob instanceof Float32Array ? 1 : 0,
              gammaSpace: Xb
            };
            bb(this.ConvertCubeMapToSphericalPolynomial(wb))
          }))
        }))
      }
      static _AreaElement(bb, ub) {
        return Math.atan2(bb * ub, Math.sqrt(bb * bb + ub * ub + 1))
      }
      static _DownsampleFace(bb, ub, hb, Bb) {
        const Ob = bb instanceof Float32Array ? bb : Float32Array.from(bb),
          Gb = hb * hb * Bb,
          Ub = new Float32Array(Gb),
          Lb = ub / hb,
          Yb = 1 / (Lb * Lb);
        for (let ab = 0; ab < hb; ab++) {
          const bb = Math.floor(ab * Lb),
            Gb = Math.floor((ab + 1) * Lb);
          for (let Sb = 0; Sb < hb; Sb++) {
            const Hb = Math.floor(Sb * Lb),
              wb = Math.floor((Sb + 1) * Lb),
              Zb = (ab * hb + Sb) * Bb;
            for (let hb = 0; hb < Bb; hb++) {
              let Lb = 0;
              for (let Ub = bb; Ub < Gb; Ub++)
                for (let bb = Hb; bb < wb; bb++) Lb += Ob[(Ub * ub + bb) * Bb + hb];
              Ub[Zb + hb] = Lb * Yb
            }
          }
        }
        if (bb instanceof Float32Array) return Ub;
        const Sb = new(0, bb.constructor)(Gb);
        for (let ab = 0; ab < Gb; ab++) Sb[ab] = Ub[ab] + .5 | 0;
        return Sb
      }
      static ConvertCubeMapToSphericalPolynomial(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const hb = ub > 0 ? this._NearestPow2Floor(ub) : 0;
        if (hb > 0 && bb.size > hb) {
          const ub = 5 === bb.format ? 4 : 3,
            Bb = ["right", "left", "up", "down", "front", "back"],
            Ob = {};
          for (const Gb of Bb) Ob[Gb] = this._DownsampleFace(bb[Gb], bb.size, hb, ub);
          bb = {
            ...bb,
            ...Ob,
            size: hb
          }
        }
        const Bb = new Gb.d;
        let Yb = 0;
        const Sb = 2 / bb.size,
          ab = Sb,
          Hb = .5 * Sb,
          wb = Hb - 1;
        for (let Gb = 0; Gb < 6; Gb++) {
          const ub = this._FileFaces[Gb],
            hb = bb[ub.name];
          let Zb = wb;
          const Xb = 5 === bb.format ? 4 : 3;
          for (let Gb = 0; Gb < bb.size; Gb++) {
            let pb = wb;
            for (let ab = 0; ab < bb.size; ab++) {
              const wb = ub.worldAxisForFileX.scale(pb).add(ub.worldAxisForFileY.scale(Zb)).add(ub.worldAxisForNormal);
              wb.normalize();
              const ob = this._AreaElement(pb - Hb, Zb - Hb) - this._AreaElement(pb - Hb, Zb + Hb) - this._AreaElement(pb + Hb, Zb - Hb) + this._AreaElement(pb + Hb, Zb + Hb);
              let Ab = hb[Gb * bb.size * Xb + ab * Xb + 0],
                lb = hb[Gb * bb.size * Xb + ab * Xb + 1],
                Kb = hb[Gb * bb.size * Xb + ab * Xb + 2];
              isNaN(Ab) && (Ab = 0), isNaN(lb) && (lb = 0), isNaN(Kb) && (Kb = 0), 0 === bb.type && (Ab /= 255, lb /= 255, Kb /= 255), bb.gammaSpace && (Ab = Math.pow((0, Ob.Clamp)(Ab), Ub.h), lb = Math.pow((0, Ob.Clamp)(lb), Ub.h), Kb = Math.pow((0, Ob.Clamp)(Kb), Ub.h));
              const Wb = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const bb = Math.max(Ab, lb, Kb);
                if (bb > Wb) {
                  const ub = Wb / bb;
                  Ab *= ub, lb *= ub, Kb *= ub
                }
              } else Ab = (0, Ob.Clamp)(Ab, 0, Wb), lb = (0, Ob.Clamp)(lb, 0, Wb), Kb = (0, Ob.Clamp)(Kb, 0, Wb);
              const Cb = new Lb.b(Ab, lb, Kb);
              Bb.addLight(wb, Cb, ob), Yb += ob, pb += Sb
            }
            Zb += ab
          }
        }
        const Zb = 6 * (4 * Math.PI) / 6 / Yb;
        return Bb.scaleInPlace(Zb), Bb.convertIncidentRadianceToIrradiance(), Bb.convertIrradianceToLambertianRadiance(), Gb.g.FromHarmonics(Bb)
      }
    }
    Sb._FileFaces = [new Yb("right", new Bb.q(1, 0, 0), new Bb.q(0, 0, -1), new Bb.q(0, -1, 0)), new Yb("left", new Bb.q(-1, 0, 0), new Bb.q(0, 0, 1), new Bb.q(0, -1, 0)), new Yb("up", new Bb.q(0, 1, 0), new Bb.q(1, 0, 0), new Bb.q(0, 0, 1)), new Yb("down", new Bb.q(0, -1, 0), new Bb.q(1, 0, 0), new Bb.q(0, 0, -1)), new Yb("front", new Bb.q(0, 0, 1), new Bb.q(1, 0, 0), new Bb.q(0, -1, 0)), new Yb("back", new Bb.q(0, 0, -1), new Bb.q(-1, 0, 0), new Bb.q(0, -1, 0))], Sb.MAX_HDRI_VALUE = 4096, Sb.PRESERVE_CLAMPED_COLORS = !1
  },
  41219: (bb, ub, hb) => {
    hb.d(ub, {
      DDSTools: () => Xb
    });
    var Bb = hb(36757),
      Ob = hb(38302),
      Gb = hb(41221),
      Ub = hb(39536);
    const Lb = 131072,
      Yb = 131072;

    function Sb(bb) {
      return bb.charCodeAt(0) + (bb.charCodeAt(1) << 8) + (bb.charCodeAt(2) << 16) + (bb.charCodeAt(3) << 24)
    }
    const ab = Sb("DXT1"),
      Hb = Sb("DXT3"),
      wb = Sb("DXT5"),
      Zb = Sb("DX10");
    class Xb {
      static GetDDSInfo(bb) {
        const ub = new Int32Array(bb.buffer, bb.byteOffset, 31),
          hb = new Int32Array(bb.buffer, bb.byteOffset, 35);
        let Bb = 1;
        ub[2] & Lb && (Bb = Math.max(1, ub[7]));
        const Ob = ub[21],
          Gb = Ob === Zb ? hb[32] : 0;
        let Ub = 0;
        switch (Ob) {
          case 113:
            Ub = 2;
            break;
          case 116:
            Ub = 1;
            break;
          case Zb:
            if (10 === Gb) {
              Ub = 2;
              break
            }
            if (2 === Gb) {
              Ub = 1;
              break
            }
        }
        return {
          width: ub[4],
          height: ub[3],
          mipmapCount: Bb,
          isFourCC: 4 === (4 & ub[20]),
          isRGB: 64 === (64 & ub[20]),
          isLuminance: (ub[20] & Yb) === Yb,
          isCube: 512 === (512 & ub[28]),
          isCompressed: Ob === ab || Ob === Hb || Ob === wb,
          dxgiFormat: Gb,
          textureType: Ub
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(bb, ub, hb, Bb, Ob, Gb) {
        const Lb = new Float32Array(Bb),
          Yb = new Uint16Array(Ob, hb);
        let Sb = 0;
        for (let ab = 0; ab < ub; ab++)
          for (let ub = 0; ub < bb; ub++) {
            const hb = 4 * (ub + ab * bb);
            Lb[Sb] = (0, Ub.b)(Yb[hb]), Lb[Sb + 1] = (0, Ub.b)(Yb[hb + 1]), Lb[Sb + 2] = (0, Ub.b)(Yb[hb + 2]), Xb.StoreLODInAlphaChannel ? Lb[Sb + 3] = Gb : Lb[Sb + 3] = (0, Ub.b)(Yb[hb + 3]), Sb += 4
          }
        return Lb
      }
      static _GetHalfFloatRGBAArrayBuffer(bb, ub, hb, Bb, Ob, Gb) {
        if (Xb.StoreLODInAlphaChannel) {
          const Lb = new Uint16Array(Bb),
            Yb = new Uint16Array(Ob, hb);
          let Sb = 0;
          for (let hb = 0; hb < ub; hb++)
            for (let ub = 0; ub < bb; ub++) {
              const Bb = 4 * (ub + hb * bb);
              Lb[Sb] = Yb[Bb], Lb[Sb + 1] = Yb[Bb + 1], Lb[Sb + 2] = Yb[Bb + 2], Lb[Sb + 3] = (0, Ub.i)(Gb), Sb += 4
            }
          return Lb
        }
        return new Uint16Array(Ob, hb, Bb)
      }
      static _GetFloatRGBAArrayBuffer(bb, ub, hb, Bb, Ob, Gb) {
        if (Xb.StoreLODInAlphaChannel) {
          const Ub = new Float32Array(Bb),
            Lb = new Float32Array(Ob, hb);
          let Yb = 0;
          for (let hb = 0; hb < ub; hb++)
            for (let ub = 0; ub < bb; ub++) {
              const Bb = 4 * (ub + hb * bb);
              Ub[Yb] = Lb[Bb], Ub[Yb + 1] = Lb[Bb + 1], Ub[Yb + 2] = Lb[Bb + 2], Ub[Yb + 3] = Gb, Yb += 4
            }
          return Ub
        }
        return new Float32Array(Ob, hb, Bb)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(bb, ub, hb, Bb, Ob, Gb) {
        const Lb = new Uint16Array(Bb),
          Yb = new Float32Array(Ob, hb);
        let Sb = 0;
        for (let ab = 0; ab < ub; ab++)
          for (let ub = 0; ub < bb; ub++) Lb[Sb] = (0, Ub.i)(Yb[Sb]), Lb[Sb + 1] = (0, Ub.i)(Yb[Sb + 1]), Lb[Sb + 2] = (0, Ub.i)(Yb[Sb + 2]), Xb.StoreLODInAlphaChannel ? Lb[Sb + 3] = (0, Ub.i)(Gb) : Lb[Sb + 3] = (0, Ub.i)(Yb[Sb + 3]), Sb += 4;
        return Lb
      }
      static _GetFloatAsUIntRGBAArrayBuffer(bb, ub, hb, Ob, Gb, Ub) {
        const Lb = new Uint8Array(Ob),
          Yb = new Float32Array(Gb, hb);
        let Sb = 0;
        for (let ab = 0; ab < ub; ab++)
          for (let ub = 0; ub < bb; ub++) {
            const hb = 4 * (ub + ab * bb);
            Lb[Sb] = 255 * (0, Bb.Clamp)(Yb[hb]), Lb[Sb + 1] = 255 * (0, Bb.Clamp)(Yb[hb + 1]), Lb[Sb + 2] = 255 * (0, Bb.Clamp)(Yb[hb + 2]), Xb.StoreLODInAlphaChannel ? Lb[Sb + 3] = Ub : Lb[Sb + 3] = 255 * (0, Bb.Clamp)(Yb[hb + 3]), Sb += 4
          }
        return Lb
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(bb, ub, hb, Ob, Gb, Lb) {
        const Yb = new Uint8Array(Ob),
          Sb = new Uint16Array(Gb, hb);
        let ab = 0;
        for (let Hb = 0; Hb < ub; Hb++)
          for (let ub = 0; ub < bb; ub++) {
            const hb = 4 * (ub + Hb * bb);
            Yb[ab] = 255 * (0, Bb.Clamp)((0, Ub.b)(Sb[hb])), Yb[ab + 1] = 255 * (0, Bb.Clamp)((0, Ub.b)(Sb[hb + 1])), Yb[ab + 2] = 255 * (0, Bb.Clamp)((0, Ub.b)(Sb[hb + 2])), Xb.StoreLODInAlphaChannel ? Yb[ab + 3] = Lb : Yb[ab + 3] = 255 * (0, Bb.Clamp)((0, Ub.b)(Sb[hb + 3])), ab += 4
          }
        return Yb
      }
      static _GetRGBAArrayBuffer(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb) {
        const Sb = new Uint8Array(Bb),
          ab = new Uint8Array(Ob, hb);
        let Hb = 0;
        for (let wb = 0; wb < ub; wb++)
          for (let ub = 0; ub < bb; ub++) {
            const hb = 4 * (ub + wb * bb);
            Sb[Hb] = ab[hb + Gb], Sb[Hb + 1] = ab[hb + Ub], Sb[Hb + 2] = ab[hb + Lb], Sb[Hb + 3] = ab[hb + Yb], Hb += 4
          }
        return Sb
      }
      static _ExtractLongWordOrder(bb) {
        return 0 === bb || 255 === bb || -16777216 === bb ? 0 : 1 + Xb._ExtractLongWordOrder(bb >> 8)
      }
      static _GetRGBArrayBuffer(bb, ub, hb, Bb, Ob, Gb, Ub, Lb) {
        const Yb = new Uint8Array(Bb),
          Sb = new Uint8Array(Ob, hb);
        let ab = 0;
        for (let Hb = 0; Hb < ub; Hb++)
          for (let ub = 0; ub < bb; ub++) {
            const hb = 3 * (ub + Hb * bb);
            Yb[ab] = Sb[hb + Gb], Yb[ab + 1] = Sb[hb + Ub], Yb[ab + 2] = Sb[hb + Lb], ab += 3
          }
        return Yb
      }
      static _GetLuminanceArrayBuffer(bb, ub, hb, Bb, Ob) {
        const Gb = new Uint8Array(Bb),
          Ub = new Uint8Array(Ob, hb);
        let Lb = 0;
        for (let Yb = 0; Yb < ub; Yb++)
          for (let ub = 0; ub < bb; ub++) {
            const hb = ub + Yb * bb;
            Gb[Lb] = Ub[hb], Lb++
          }
        return Gb
      }
      static UploadDDSLevels(bb, ub, hb, Bb, Ub, Yb) {
        let Sb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          pb = arguments.length > 7 ? arguments[7] : void 0,
          ob = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          Ab = null;
        Bb.sphericalPolynomial && (Ab = []);
        const lb = !!bb.getCaps().s3tc;
        ub.generateMipMaps = Ub;
        const Kb = new Int32Array(hb.buffer, hb.byteOffset, 31);
        let Wb, Cb, db, rb, jb, nb, Db, xb = 0,
          zb = 0,
          gb = 1;
        if (542327876 !== Kb[0]) return void Ob.b.Error("Invalid magic number in DDS header");
        if (!Bb.isFourCC && !Bb.isRGB && !Bb.isLuminance) return void Ob.b.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (Bb.isCompressed && !lb) return void Ob.b.Error("Compressed textures are not supported on this platform.");
        let ib = Kb[22];
        rb = Kb[1] + 4;
        let vb = !1;
        if (Bb.isFourCC) switch (Wb = Kb[21], Wb) {
          case ab:
            gb = 8, zb = 33777;
            break;
          case Hb:
            gb = 16, zb = 33778;
            break;
          case wb:
            gb = 16, zb = 33779;
            break;
          case 113:
            vb = !0, ib = 64;
            break;
          case 116:
            vb = !0, ib = 128;
            break;
          case Zb: {
            rb += 20;
            let bb = !1;
            switch (Bb.dxgiFormat) {
              case 10:
                vb = !0, ib = 64, bb = !0;
                break;
              case 2:
                vb = !0, ib = 128, bb = !0;
                break;
              case 88:
                Bb.isRGB = !0, Bb.isFourCC = !1, ib = 32, bb = !0
            }
            if (bb) break
          }
          default:
            return void Ob.b.Error(["Unsupported FourCC code:", (tb = Wb, String.fromCharCode(255 & tb, tb >> 8 & 255, tb >> 16 & 255, tb >> 24 & 255))])
        }
        var tb;
        const Jb = Xb._ExtractLongWordOrder(Kb[23]),
          eb = Xb._ExtractLongWordOrder(Kb[24]),
          Nb = Xb._ExtractLongWordOrder(Kb[25]),
          sb = Xb._ExtractLongWordOrder(Kb[26]);
        vb && (zb = bb._getRGBABufferInternalSizedFormat(Bb.textureType)), nb = 1, Kb[2] & Lb && !1 !== Ub && (nb = Math.max(1, Kb[7]));
        const Mb = pb || 0,
          mb = bb.getCaps();
        for (let Ob = Mb; Ob < Yb; Ob++) {
          for (Cb = Kb[4], db = Kb[3], Db = 0; Db < nb; ++Db) {
            if (-1 === Sb || Sb === Db) {
              const Gb = -1 === Sb ? Db : 0;
              if (!Bb.isCompressed && Bb.isFourCC) {
                ub.format = 5, xb = Cb * db * 4;
                let Bb = null;
                if (bb._badOS || bb._badDesktopOS || !mb.textureHalfFloat && !mb.textureFloat) 128 === ib ? (Bb = Xb._GetFloatAsUIntRGBAArrayBuffer(Cb, db, hb.byteOffset + rb, xb, hb.buffer, Gb), Ab && 0 == Gb && Ab.push(Xb._GetFloatRGBAArrayBuffer(Cb, db, hb.byteOffset + rb, xb, hb.buffer, Gb))) : 64 === ib && (Bb = Xb._GetHalfFloatAsUIntRGBAArrayBuffer(Cb, db, hb.byteOffset + rb, xb, hb.buffer, Gb), Ab && 0 == Gb && Ab.push(Xb._GetHalfFloatAsFloatRGBAArrayBuffer(Cb, db, hb.byteOffset + rb, xb, hb.buffer, Gb))), ub.type = 0;
                else {
                  const bb = mb.textureFloat && (ob && mb.textureFloatLinearFiltering || !ob),
                    Ob = mb.textureHalfFloat && (ob && mb.textureHalfFloatLinearFiltering || !ob),
                    Ub = (128 === ib || 64 === ib && !Ob) && bb ? 1 : (64 === ib || 128 === ib && !bb) && Ob ? 2 : 0;
                  let Lb, Yb = null;
                  if (128 === ib) switch (Ub) {
                    case 1:
                      Lb = Xb._GetFloatRGBAArrayBuffer, Yb = null;
                      break;
                    case 2:
                      Lb = Xb._GetFloatAsHalfFloatRGBAArrayBuffer, Yb = Xb._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      Lb = Xb._GetFloatAsUIntRGBAArrayBuffer, Yb = Xb._GetFloatRGBAArrayBuffer
                  } else switch (Ub) {
                    case 1:
                      Lb = Xb._GetHalfFloatAsFloatRGBAArrayBuffer, Yb = null;
                      break;
                    case 2:
                      Lb = Xb._GetHalfFloatRGBAArrayBuffer, Yb = Xb._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      Lb = Xb._GetHalfFloatAsUIntRGBAArrayBuffer, Yb = Xb._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  ub.type = Ub, Bb = Lb(Cb, db, hb.byteOffset + rb, xb, hb.buffer, Gb), Ab && 0 == Gb && Ab.push(Yb ? Yb(Cb, db, hb.byteOffset + rb, xb, hb.buffer, Gb) : Bb)
                }
                Bb && bb._uploadDataToTextureDirectly(ub, Bb, Ob, Gb)
              } else if (Bb.isRGB) ub.type = 0, 24 === ib ? (ub.format = 4, xb = Cb * db * 3, jb = Xb._GetRGBArrayBuffer(Cb, db, hb.byteOffset + rb, xb, hb.buffer, Jb, eb, Nb), bb._uploadDataToTextureDirectly(ub, jb, Ob, Gb)) : (ub.format = 5, xb = Cb * db * 4, jb = Xb._GetRGBAArrayBuffer(Cb, db, hb.byteOffset + rb, xb, hb.buffer, Jb, eb, Nb, sb), bb._uploadDataToTextureDirectly(ub, jb, Ob, Gb));
              else if (Bb.isLuminance) {
                const Bb = bb._getUnpackAlignement(),
                  Ub = Cb;
                xb = Math.floor((Cb + Bb - 1) / Bb) * Bb * (db - 1) + Ub, jb = Xb._GetLuminanceArrayBuffer(Cb, db, hb.byteOffset + rb, xb, hb.buffer), ub.format = 1, ub.type = 0, bb._uploadDataToTextureDirectly(ub, jb, Ob, Gb)
              } else xb = Math.max(4, Cb) / 4 * Math.max(4, db) / 4 * gb, jb = new Uint8Array(hb.buffer, hb.byteOffset + rb, xb), ub.type = 0, bb._uploadCompressedDataToTextureDirectly(ub, zb, Cb, db, jb, Ob, Gb)
            }
            rb += ib ? Cb * db * (ib / 8) : xb, Cb *= .5, db *= .5, Cb = Math.max(1, Cb), db = Math.max(1, db)
          }
          if (void 0 !== pb) break
        }
        Ab && Ab.length > 0 ? Bb.sphericalPolynomial = Gb.b.ConvertCubeMapToSphericalPolynomial({
          size: Kb[4],
          right: Ab[0],
          left: Ab[1],
          up: Ab[2],
          down: Ab[3],
          front: Ab[4],
          back: Ab[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : Bb.sphericalPolynomial = void 0
      }
    }
    Xb.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);