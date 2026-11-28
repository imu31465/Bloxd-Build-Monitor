export const id = 625;
export const ids = [625];
export const modules = {
  53988: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Lb
    });
    var eb = Mb(38285),
      Hb = Mb(38322),
      pb = Mb(41662),
      Vb = Mb(38294),
      gb = Mb(38406);
    class lb {
      constructor(bb, wb, Mb, eb) {
        this.name = bb, this.worldAxisForNormal = wb, this.worldAxisForFileX = Mb, this.worldAxisForFileY = eb
      }
    }
    class Lb {
      static _NearestPow2Floor(bb) {
        return bb <= 1 ? 1 : 1 << Math.floor(Math.log2(bb))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(bb) {
        if (!bb.isCube) return null;
        bb.RJ()?.DC().flushFramebuffer();
        const wb = bb.getSize().width,
          Mb = bb._sphericalPolynomialTargetSize,
          eb = Mb > 0 ? this._NearestPow2Floor(Mb) : 0,
          Hb = !bb.noMipmap && !0 === bb._texture?.generateMipMaps,
          pb = eb > 0 && eb < wb && Hb,
          Vb = pb ? Math.max(0, Math.round(Math.log2(wb / eb))) : 0,
          gb = pb ? Math.max(1, Math.floor(wb / Math.pow(2, Vb))) : wb,
          lb = bb.readPixels(0, Vb, void 0, !1),
          Lb = bb.readPixels(1, Vb, void 0, !1);
        let Ib, Ob;
        bb.isRenderTarget ? (Ib = bb.readPixels(3, Vb, void 0, !1), Ob = bb.readPixels(2, Vb, void 0, !1)) : (Ib = bb.readPixels(2, Vb, void 0, !1), Ob = bb.readPixels(3, Vb, void 0, !1));
        const Ub = bb.readPixels(4, Vb, void 0, !1),
          tb = bb.readPixels(5, Vb, void 0, !1),
          Cb = bb.gammaSpace,
          Eb = eb > 0 && eb < wb && !pb;
        return new Promise((bb => {
          Promise.all([Lb, lb, Ib, Ob, Ub, tb]).then((Mb => {
            let [Hb, pb, Vb, lb, Lb, Ib] = Mb, Ob = gb;
            if (Eb) {
              const bb = 4;
              Hb = this._DownsampleFace(Hb, wb, eb, bb), pb = this._DownsampleFace(pb, wb, eb, bb), Vb = this._DownsampleFace(Vb, wb, eb, bb), lb = this._DownsampleFace(lb, wb, eb, bb), Lb = this._DownsampleFace(Lb, wb, eb, bb), Ib = this._DownsampleFace(Ib, wb, eb, bb), Ob = eb
            }
            const Ub = {
              size: Ob,
              right: pb,
              left: Hb,
              up: Vb,
              down: lb,
              front: Lb,
              back: Ib,
              format: 5,
              type: Hb instanceof Float32Array ? 1 : 0,
              gammaSpace: Cb
            };
            bb(this.ConvertCubeMapToSphericalPolynomial(Ub))
          }))
        }))
      }
      static _AreaElement(bb, wb) {
        return Math.atan2(bb * wb, Math.sqrt(bb * bb + wb * wb + 1))
      }
      static _DownsampleFace(bb, wb, Mb, eb) {
        const Hb = bb instanceof Float32Array ? bb : Float32Array.from(bb),
          pb = Mb * Mb * eb,
          Vb = new Float32Array(pb),
          gb = wb / Mb,
          lb = 1 / (gb * gb);
        for (let Ib = 0; Ib < Mb; Ib++) {
          const bb = Math.floor(Ib * gb),
            pb = Math.floor((Ib + 1) * gb);
          for (let Lb = 0; Lb < Mb; Lb++) {
            const Ob = Math.floor(Lb * gb),
              Ub = Math.floor((Lb + 1) * gb),
              tb = (Ib * Mb + Lb) * eb;
            for (let Mb = 0; Mb < eb; Mb++) {
              let gb = 0;
              for (let Vb = bb; Vb < pb; Vb++)
                for (let bb = Ob; bb < Ub; bb++) gb += Hb[(Vb * wb + bb) * eb + Mb];
              Vb[tb + Mb] = gb * lb
            }
          }
        }
        if (bb instanceof Float32Array) return Vb;
        const Lb = new(0, bb.constructor)(pb);
        for (let Ib = 0; Ib < pb; Ib++) Lb[Ib] = Vb[Ib] + .5 | 0;
        return Lb
      }
      static ConvertCubeMapToSphericalPolynomial(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Mb = wb > 0 ? this._NearestPow2Floor(wb) : 0;
        if (Mb > 0 && bb.size > Mb) {
          const wb = 5 === bb.format ? 4 : 3,
            eb = ["right", "left", "up", "down", "front", "back"],
            Hb = {};
          for (const pb of eb) Hb[pb] = this._DownsampleFace(bb[pb], bb.size, Mb, wb);
          bb = {
            ...bb,
            ...Hb,
            size: Mb
          }
        }
        const eb = new pb.e;
        let lb = 0;
        const Lb = 2 / bb.size,
          Ib = Lb,
          Ob = .5 * Lb,
          Ub = Ob - 1;
        for (let pb = 0; pb < 6; pb++) {
          const wb = this._FileFaces[pb],
            Mb = bb[wb.name];
          let tb = Ub;
          const Cb = 5 === bb.format ? 4 : 3;
          for (let pb = 0; pb < bb.size; pb++) {
            let Eb = Ub;
            for (let Ib = 0; Ib < bb.size; Ib++) {
              const Ub = wb.worldAxisForFileX.scale(Eb).add(wb.worldAxisForFileY.scale(tb)).add(wb.worldAxisForNormal);
              Ub.normalize();
              const Fb = this._AreaElement(Eb - Ob, tb - Ob) - this._AreaElement(Eb - Ob, tb + Ob) - this._AreaElement(Eb + Ob, tb - Ob) + this._AreaElement(Eb + Ob, tb + Ob);
              let Bb = Mb[pb * bb.size * Cb + Ib * Cb + 0],
                sb = Mb[pb * bb.size * Cb + Ib * Cb + 1],
                mb = Mb[pb * bb.size * Cb + Ib * Cb + 2];
              isNaN(Bb) && (Bb = 0), isNaN(sb) && (sb = 0), isNaN(mb) && (mb = 0), 0 === bb.type && (Bb /= 255, sb /= 255, mb /= 255), bb.gammaSpace && (Bb = Math.pow((0, Hb.Clamp)(Bb), Vb.h), sb = Math.pow((0, Hb.Clamp)(sb), Vb.h), mb = Math.pow((0, Hb.Clamp)(mb), Vb.h));
              const hb = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const bb = Math.max(Bb, sb, mb);
                if (bb > hb) {
                  const wb = hb / bb;
                  Bb *= wb, sb *= wb, mb *= wb
                }
              } else Bb = (0, Hb.Clamp)(Bb, 0, hb), sb = (0, Hb.Clamp)(sb, 0, hb), mb = (0, Hb.Clamp)(mb, 0, hb);
              const zb = new gb.e(Bb, sb, mb);
              eb.addLight(Ub, zb, Fb), lb += Fb, Eb += Lb
            }
            tb += Ib
          }
        }
        const tb = 6 * (4 * Math.PI) / 6 / lb;
        return eb.scaleInPlace(tb), eb.convertIncidentRadianceToIrradiance(), eb.convertIrradianceToLambertianRadiance(), pb.i.FromHarmonics(eb)
      }
    }
    Lb._FileFaces = [new lb("right", new eb.o(1, 0, 0), new eb.o(0, 0, -1), new eb.o(0, -1, 0)), new lb("left", new eb.o(-1, 0, 0), new eb.o(0, 0, 1), new eb.o(0, -1, 0)), new lb("up", new eb.o(0, 1, 0), new eb.o(1, 0, 0), new eb.o(0, 0, 1)), new lb("down", new eb.o(0, -1, 0), new eb.o(1, 0, 0), new eb.o(0, 0, -1)), new lb("front", new eb.o(0, 0, 1), new eb.o(1, 0, 0), new eb.o(0, -1, 0)), new lb("back", new eb.o(0, 0, -1), new eb.o(-1, 0, 0), new eb.o(0, -1, 0))], Lb.MAX_HDRI_VALUE = 4096, Lb.PRESERVE_CLAMPED_COLORS = !1
  },
  53986: (bb, wb, Mb) => {
    Mb.d(wb, {
      DDSTools: () => Cb
    });
    var eb = Mb(38322),
      Hb = Mb(39971),
      pb = Mb(53988),
      Vb = Mb(41742);
    const gb = 131072,
      lb = 131072;

    function Lb(bb) {
      return bb.charCodeAt(0) + (bb.charCodeAt(1) << 8) + (bb.charCodeAt(2) << 16) + (bb.charCodeAt(3) << 24)
    }
    const Ib = Lb("DXT1"),
      Ob = Lb("DXT3"),
      Ub = Lb("DXT5"),
      tb = Lb("DX10");
    class Cb {
      static GetDDSInfo(bb) {
        const wb = new Int32Array(bb.buffer, bb.byteOffset, 31),
          Mb = new Int32Array(bb.buffer, bb.byteOffset, 35);
        let eb = 1;
        wb[2] & gb && (eb = Math.max(1, wb[7]));
        const Hb = wb[21],
          pb = Hb === tb ? Mb[32] : 0;
        let Vb = 0;
        switch (Hb) {
          case 113:
            Vb = 2;
            break;
          case 116:
            Vb = 1;
            break;
          case tb:
            if (10 === pb) {
              Vb = 2;
              break
            }
            if (2 === pb) {
              Vb = 1;
              break
            }
        }
        return {
          width: wb[4],
          height: wb[3],
          mipmapCount: eb,
          isFourCC: 4 === (4 & wb[20]),
          isRGB: 64 === (64 & wb[20]),
          isLuminance: (wb[20] & lb) === lb,
          isCube: 512 === (512 & wb[28]),
          isCompressed: Hb === Ib || Hb === Ob || Hb === Ub,
          dxgiFormat: pb,
          textureType: Vb
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(bb, wb, Mb, eb, Hb, pb) {
        const gb = new Float32Array(eb),
          lb = new Uint16Array(Hb, Mb);
        let Lb = 0;
        for (let Ib = 0; Ib < wb; Ib++)
          for (let wb = 0; wb < bb; wb++) {
            const Mb = 4 * (wb + Ib * bb);
            gb[Lb] = (0, Vb.c)(lb[Mb]), gb[Lb + 1] = (0, Vb.c)(lb[Mb + 1]), gb[Lb + 2] = (0, Vb.c)(lb[Mb + 2]), Cb.StoreLODInAlphaChannel ? gb[Lb + 3] = pb : gb[Lb + 3] = (0, Vb.c)(lb[Mb + 3]), Lb += 4
          }
        return gb
      }
      static _GetHalfFloatRGBAArrayBuffer(bb, wb, Mb, eb, Hb, pb) {
        if (Cb.StoreLODInAlphaChannel) {
          const gb = new Uint16Array(eb),
            lb = new Uint16Array(Hb, Mb);
          let Lb = 0;
          for (let Mb = 0; Mb < wb; Mb++)
            for (let wb = 0; wb < bb; wb++) {
              const eb = 4 * (wb + Mb * bb);
              gb[Lb] = lb[eb], gb[Lb + 1] = lb[eb + 1], gb[Lb + 2] = lb[eb + 2], gb[Lb + 3] = (0, Vb.i)(pb), Lb += 4
            }
          return gb
        }
        return new Uint16Array(Hb, Mb, eb)
      }
      static _GetFloatRGBAArrayBuffer(bb, wb, Mb, eb, Hb, pb) {
        if (Cb.StoreLODInAlphaChannel) {
          const Vb = new Float32Array(eb),
            gb = new Float32Array(Hb, Mb);
          let lb = 0;
          for (let Mb = 0; Mb < wb; Mb++)
            for (let wb = 0; wb < bb; wb++) {
              const eb = 4 * (wb + Mb * bb);
              Vb[lb] = gb[eb], Vb[lb + 1] = gb[eb + 1], Vb[lb + 2] = gb[eb + 2], Vb[lb + 3] = pb, lb += 4
            }
          return Vb
        }
        return new Float32Array(Hb, Mb, eb)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(bb, wb, Mb, eb, Hb, pb) {
        const gb = new Uint16Array(eb),
          lb = new Float32Array(Hb, Mb);
        let Lb = 0;
        for (let Ib = 0; Ib < wb; Ib++)
          for (let wb = 0; wb < bb; wb++) gb[Lb] = (0, Vb.i)(lb[Lb]), gb[Lb + 1] = (0, Vb.i)(lb[Lb + 1]), gb[Lb + 2] = (0, Vb.i)(lb[Lb + 2]), Cb.StoreLODInAlphaChannel ? gb[Lb + 3] = (0, Vb.i)(pb) : gb[Lb + 3] = (0, Vb.i)(lb[Lb + 3]), Lb += 4;
        return gb
      }
      static _GetFloatAsUIntRGBAArrayBuffer(bb, wb, Mb, Hb, pb, Vb) {
        const gb = new Uint8Array(Hb),
          lb = new Float32Array(pb, Mb);
        let Lb = 0;
        for (let Ib = 0; Ib < wb; Ib++)
          for (let wb = 0; wb < bb; wb++) {
            const Mb = 4 * (wb + Ib * bb);
            gb[Lb] = 255 * (0, eb.Clamp)(lb[Mb]), gb[Lb + 1] = 255 * (0, eb.Clamp)(lb[Mb + 1]), gb[Lb + 2] = 255 * (0, eb.Clamp)(lb[Mb + 2]), Cb.StoreLODInAlphaChannel ? gb[Lb + 3] = Vb : gb[Lb + 3] = 255 * (0, eb.Clamp)(lb[Mb + 3]), Lb += 4
          }
        return gb
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(bb, wb, Mb, Hb, pb, gb) {
        const lb = new Uint8Array(Hb),
          Lb = new Uint16Array(pb, Mb);
        let Ib = 0;
        for (let Ob = 0; Ob < wb; Ob++)
          for (let wb = 0; wb < bb; wb++) {
            const Mb = 4 * (wb + Ob * bb);
            lb[Ib] = 255 * (0, eb.Clamp)((0, Vb.c)(Lb[Mb])), lb[Ib + 1] = 255 * (0, eb.Clamp)((0, Vb.c)(Lb[Mb + 1])), lb[Ib + 2] = 255 * (0, eb.Clamp)((0, Vb.c)(Lb[Mb + 2])), Cb.StoreLODInAlphaChannel ? lb[Ib + 3] = gb : lb[Ib + 3] = 255 * (0, eb.Clamp)((0, Vb.c)(Lb[Mb + 3])), Ib += 4
          }
        return lb
      }
      static _GetRGBAArrayBuffer(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb) {
        const Lb = new Uint8Array(eb),
          Ib = new Uint8Array(Hb, Mb);
        let Ob = 0;
        for (let Ub = 0; Ub < wb; Ub++)
          for (let wb = 0; wb < bb; wb++) {
            const Mb = 4 * (wb + Ub * bb);
            Lb[Ob] = Ib[Mb + pb], Lb[Ob + 1] = Ib[Mb + Vb], Lb[Ob + 2] = Ib[Mb + gb], Lb[Ob + 3] = Ib[Mb + lb], Ob += 4
          }
        return Lb
      }
      static _ExtractLongWordOrder(bb) {
        return 0 === bb || 255 === bb || -16777216 === bb ? 0 : 1 + Cb._ExtractLongWordOrder(bb >> 8)
      }
      static _GetRGBArrayBuffer(bb, wb, Mb, eb, Hb, pb, Vb, gb) {
        const lb = new Uint8Array(eb),
          Lb = new Uint8Array(Hb, Mb);
        let Ib = 0;
        for (let Ob = 0; Ob < wb; Ob++)
          for (let wb = 0; wb < bb; wb++) {
            const Mb = 3 * (wb + Ob * bb);
            lb[Ib] = Lb[Mb + pb], lb[Ib + 1] = Lb[Mb + Vb], lb[Ib + 2] = Lb[Mb + gb], Ib += 3
          }
        return lb
      }
      static _GetLuminanceArrayBuffer(bb, wb, Mb, eb, Hb) {
        const pb = new Uint8Array(eb),
          Vb = new Uint8Array(Hb, Mb);
        let gb = 0;
        for (let lb = 0; lb < wb; lb++)
          for (let wb = 0; wb < bb; wb++) {
            const Mb = wb + lb * bb;
            pb[gb] = Vb[Mb], gb++
          }
        return pb
      }
      static UploadDDSLevels(bb, wb, Mb, eb, Vb, lb) {
        let Lb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          Eb = arguments.length > 7 ? arguments[7] : void 0,
          Fb = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          Bb = null;
        eb.sphericalPolynomial && (Bb = []);
        const sb = !!bb.getCaps().s3tc;
        wb.generateMipMaps = Vb;
        const mb = new Int32Array(Mb.buffer, Mb.byteOffset, 31);
        let hb, zb, Xb, xb, jb, Kb, rb, Rb = 0,
          Db = 0,
          cb = 1;
        if (542327876 !== mb[0]) return void Hb.b.Error("Invalid magic number in DDS header");
        if (!eb.isFourCC && !eb.isRGB && !eb.isLuminance) return void Hb.b.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (eb.isCompressed && !sb) return void Hb.b.Error("Compressed textures are not supported on this platform.");
        let Yb = mb[22];
        xb = mb[1] + 4;
        let Zb = !1;
        if (eb.isFourCC) switch (hb = mb[21], hb) {
          case Ib:
            cb = 8, Db = 33777;
            break;
          case Ob:
            cb = 16, Db = 33778;
            break;
          case Ub:
            cb = 16, Db = 33779;
            break;
          case 113:
            Zb = !0, Yb = 64;
            break;
          case 116:
            Zb = !0, Yb = 128;
            break;
          case tb: {
            xb += 20;
            let bb = !1;
            switch (eb.dxgiFormat) {
              case 10:
                Zb = !0, Yb = 64, bb = !0;
                break;
              case 2:
                Zb = !0, Yb = 128, bb = !0;
                break;
              case 88:
                eb.isRGB = !0, eb.isFourCC = !1, Yb = 32, bb = !0
            }
            if (bb) break
          }
          default:
            return void Hb.b.Error(["Unsupported FourCC code:", (fb = hb, String.fromCharCode(255 & fb, fb >> 8 & 255, fb >> 16 & 255, fb >> 24 & 255))])
        }
        var fb;
        const Ab = Cb._ExtractLongWordOrder(mb[23]),
          Wb = Cb._ExtractLongWordOrder(mb[24]),
          Jb = Cb._ExtractLongWordOrder(mb[25]),
          Sb = Cb._ExtractLongWordOrder(mb[26]);
        Zb && (Db = bb._getRGBABufferInternalSizedFormat(eb.textureType)), Kb = 1, mb[2] & gb && !1 !== Vb && (Kb = Math.max(1, mb[7]));
        const Nb = Eb || 0,
          vb = bb.getCaps();
        for (let Hb = Nb; Hb < lb; Hb++) {
          for (zb = mb[4], Xb = mb[3], rb = 0; rb < Kb; ++rb) {
            if (-1 === Lb || Lb === rb) {
              const pb = -1 === Lb ? rb : 0;
              if (!eb.isCompressed && eb.isFourCC) {
                wb.format = 5, Rb = zb * Xb * 4;
                let eb = null;
                if (bb._badOS || bb._badDesktopOS || !vb.textureHalfFloat && !vb.textureFloat) 128 === Yb ? (eb = Cb._GetFloatAsUIntRGBAArrayBuffer(zb, Xb, Mb.byteOffset + xb, Rb, Mb.buffer, pb), Bb && 0 == pb && Bb.push(Cb._GetFloatRGBAArrayBuffer(zb, Xb, Mb.byteOffset + xb, Rb, Mb.buffer, pb))) : 64 === Yb && (eb = Cb._GetHalfFloatAsUIntRGBAArrayBuffer(zb, Xb, Mb.byteOffset + xb, Rb, Mb.buffer, pb), Bb && 0 == pb && Bb.push(Cb._GetHalfFloatAsFloatRGBAArrayBuffer(zb, Xb, Mb.byteOffset + xb, Rb, Mb.buffer, pb))), wb.type = 0;
                else {
                  const bb = vb.textureFloat && (Fb && vb.textureFloatLinearFiltering || !Fb),
                    Hb = vb.textureHalfFloat && (Fb && vb.textureHalfFloatLinearFiltering || !Fb),
                    Vb = (128 === Yb || 64 === Yb && !Hb) && bb ? 1 : (64 === Yb || 128 === Yb && !bb) && Hb ? 2 : 0;
                  let gb, lb = null;
                  if (128 === Yb) switch (Vb) {
                    case 1:
                      gb = Cb._GetFloatRGBAArrayBuffer, lb = null;
                      break;
                    case 2:
                      gb = Cb._GetFloatAsHalfFloatRGBAArrayBuffer, lb = Cb._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      gb = Cb._GetFloatAsUIntRGBAArrayBuffer, lb = Cb._GetFloatRGBAArrayBuffer
                  } else switch (Vb) {
                    case 1:
                      gb = Cb._GetHalfFloatAsFloatRGBAArrayBuffer, lb = null;
                      break;
                    case 2:
                      gb = Cb._GetHalfFloatRGBAArrayBuffer, lb = Cb._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      gb = Cb._GetHalfFloatAsUIntRGBAArrayBuffer, lb = Cb._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  wb.type = Vb, eb = gb(zb, Xb, Mb.byteOffset + xb, Rb, Mb.buffer, pb), Bb && 0 == pb && Bb.push(lb ? lb(zb, Xb, Mb.byteOffset + xb, Rb, Mb.buffer, pb) : eb)
                }
                eb && bb._uploadDataToTextureDirectly(wb, eb, Hb, pb)
              } else if (eb.isRGB) wb.type = 0, 24 === Yb ? (wb.format = 4, Rb = zb * Xb * 3, jb = Cb._GetRGBArrayBuffer(zb, Xb, Mb.byteOffset + xb, Rb, Mb.buffer, Ab, Wb, Jb), bb._uploadDataToTextureDirectly(wb, jb, Hb, pb)) : (wb.format = 5, Rb = zb * Xb * 4, jb = Cb._GetRGBAArrayBuffer(zb, Xb, Mb.byteOffset + xb, Rb, Mb.buffer, Ab, Wb, Jb, Sb), bb._uploadDataToTextureDirectly(wb, jb, Hb, pb));
              else if (eb.isLuminance) {
                const eb = bb._getUnpackAlignement(),
                  Vb = zb;
                Rb = Math.floor((zb + eb - 1) / eb) * eb * (Xb - 1) + Vb, jb = Cb._GetLuminanceArrayBuffer(zb, Xb, Mb.byteOffset + xb, Rb, Mb.buffer), wb.format = 1, wb.type = 0, bb._uploadDataToTextureDirectly(wb, jb, Hb, pb)
              } else Rb = Math.max(4, zb) / 4 * Math.max(4, Xb) / 4 * cb, jb = new Uint8Array(Mb.buffer, Mb.byteOffset + xb, Rb), wb.type = 0, bb._uploadCompressedDataToTextureDirectly(wb, Db, zb, Xb, jb, Hb, pb)
            }
            xb += Yb ? zb * Xb * (Yb / 8) : Rb, zb *= .5, Xb *= .5, zb = Math.max(1, zb), Xb = Math.max(1, Xb)
          }
          if (void 0 !== Eb) break
        }
        Bb && Bb.length > 0 ? eb.sphericalPolynomial = pb.d.ConvertCubeMapToSphericalPolynomial({
          size: mb[4],
          right: Bb[0],
          left: Bb[1],
          up: Bb[2],
          down: Bb[3],
          front: Bb[4],
          back: Bb[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : eb.sphericalPolynomial = void 0
      }
    }
    Cb.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);