export const id = 297;
export const ids = [296, 297];
export const modules = {
  40886: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      _DDSTextureLoader: () => Tb
    });
    var Ab = Ub(39090),
      Mb = Ub(40870);
    class Tb {
      constructor() {
        this.supportCascades = !0
      }
      loadCubeData(bb, ab, Ub, Tb) {
        const Eb = ab.vj();
        let Yb, Bb = !1,
          eb = 1e3;
        if (Array.isArray(bb))
          for (let Ab = 0; Ab < bb.length; Ab++) {
            const Ub = bb[Ab];
            Yb = Mb.DDSTools.GetDDSInfo(Ub), ab.width = Yb.width, ab.height = Yb.height, Bb = (Yb.isRGB || Yb.isLuminance || Yb.mipmapCount > 1) && ab.generateMipMaps, Eb._unpackFlipY(Yb.isCompressed), Mb.DDSTools.UploadDDSLevels(Eb, ab, Ub, Yb, Bb, 6, -1, Ab), Yb.isFourCC || 1 !== Yb.mipmapCount ? eb = Yb.mipmapCount - 1 : Eb.generateMipMapsForCubemap(ab)
          } else {
            const Tb = bb;
            Yb = Mb.DDSTools.GetDDSInfo(Tb), ab.width = Yb.width, ab.height = Yb.height, Ub && (Yb.sphericalPolynomial = new Ab.e), Bb = (Yb.isRGB || Yb.isLuminance || Yb.mipmapCount > 1) && ab.generateMipMaps, Eb._unpackFlipY(Yb.isCompressed), Mb.DDSTools.UploadDDSLevels(Eb, ab, Tb, Yb, Bb, 6), Yb.isFourCC || 1 !== Yb.mipmapCount ? eb = Yb.mipmapCount - 1 : Eb.generateMipMapsForCubemap(ab, !1)
          }
        Eb._setCubeMapTextureParams(ab, Bb, eb), ab.isReady = !0, ab.onLoadedObservable.notifyObservers(ab), ab.onLoadedObservable.clear(), Tb && Tb({
          isDDS: !0,
          width: ab.width,
          info: Yb,
          data: bb,
          texture: ab
        })
      }
      loadData(bb, ab, Ub) {
        const Ab = Mb.DDSTools.GetDDSInfo(bb),
          Tb = (Ab.isRGB || Ab.isLuminance || Ab.mipmapCount > 1) && ab.generateMipMaps && Math.max(Ab.width, Ab.height) >> Ab.mipmapCount - 1 === 1;
        Ub(Ab.width, Ab.height, Tb, Ab.isFourCC, (() => {
          Mb.DDSTools.UploadDDSLevels(ab.vj(), ab, bb, Ab, Tb, 1)
        }))
      }
    }
  },
  40879: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => eb
    });
    var Ab = Ub(36401),
      Mb = Ub(36436),
      Tb = Ub(39090),
      Eb = Ub(36405),
      Yb = Ub(36593);
    class Bb {
      constructor(bb, ab, Ub, Ab) {
        this.name = bb, this.worldAxisForNormal = ab, this.worldAxisForFileX = Ub, this.worldAxisForFileY = Ab
      }
    }
    class eb {
      static _NearestPow2Floor(bb) {
        return bb <= 1 ? 1 : 1 << Math.floor(Math.log2(bb))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(bb) {
        if (!bb.isCube) return null;
        bb.oN()?.vj().flushFramebuffer();
        const ab = bb.getSize().width,
          Ub = bb._sphericalPolynomialTargetSize,
          Ab = Ub > 0 ? this._NearestPow2Floor(Ub) : 0,
          Mb = !bb.noMipmap && !0 === bb._texture?.generateMipMaps,
          Tb = Ab > 0 && Ab < ab && Mb,
          Eb = Tb ? Math.max(0, Math.round(Math.log2(ab / Ab))) : 0,
          Yb = Tb ? Math.max(1, Math.floor(ab / Math.pow(2, Eb))) : ab,
          Bb = bb.readPixels(0, Eb, void 0, !1),
          eb = bb.readPixels(1, Eb, void 0, !1);
        let vb, Lb;
        bb.isRenderTarget ? (vb = bb.readPixels(3, Eb, void 0, !1), Lb = bb.readPixels(2, Eb, void 0, !1)) : (vb = bb.readPixels(2, Eb, void 0, !1), Lb = bb.readPixels(3, Eb, void 0, !1));
        const Pb = bb.readPixels(4, Eb, void 0, !1),
          Xb = bb.readPixels(5, Eb, void 0, !1),
          jb = bb.gammaSpace,
          Rb = Ab > 0 && Ab < ab && !Tb;
        return new Promise((bb => {
          Promise.all([eb, Bb, vb, Lb, Pb, Xb]).then((Ub => {
            let [Mb, Tb, Eb, Bb, eb, vb] = Ub, Lb = Yb;
            if (Rb) {
              const bb = 4;
              Mb = this._DownsampleFace(Mb, ab, Ab, bb), Tb = this._DownsampleFace(Tb, ab, Ab, bb), Eb = this._DownsampleFace(Eb, ab, Ab, bb), Bb = this._DownsampleFace(Bb, ab, Ab, bb), eb = this._DownsampleFace(eb, ab, Ab, bb), vb = this._DownsampleFace(vb, ab, Ab, bb), Lb = Ab
            }
            const Pb = {
              size: Lb,
              right: Tb,
              left: Mb,
              up: Eb,
              down: Bb,
              front: eb,
              back: vb,
              format: 5,
              type: Mb instanceof Float32Array ? 1 : 0,
              gammaSpace: jb
            };
            bb(this.ConvertCubeMapToSphericalPolynomial(Pb))
          }))
        }))
      }
      static _AreaElement(bb, ab) {
        return Math.atan2(bb * ab, Math.sqrt(bb * bb + ab * ab + 1))
      }
      static _DownsampleFace(bb, ab, Ub, Ab) {
        const Mb = bb instanceof Float32Array ? bb : Float32Array.from(bb),
          Tb = Ub * Ub * Ab,
          Eb = new Float32Array(Tb),
          Yb = ab / Ub,
          Bb = 1 / (Yb * Yb);
        for (let vb = 0; vb < Ub; vb++) {
          const bb = Math.floor(vb * Yb),
            Tb = Math.floor((vb + 1) * Yb);
          for (let eb = 0; eb < Ub; eb++) {
            const Lb = Math.floor(eb * Yb),
              Pb = Math.floor((eb + 1) * Yb),
              Xb = (vb * Ub + eb) * Ab;
            for (let Ub = 0; Ub < Ab; Ub++) {
              let Yb = 0;
              for (let Eb = bb; Eb < Tb; Eb++)
                for (let bb = Lb; bb < Pb; bb++) Yb += Mb[(Eb * ab + bb) * Ab + Ub];
              Eb[Xb + Ub] = Yb * Bb
            }
          }
        }
        if (bb instanceof Float32Array) return Eb;
        const eb = new(0, bb.constructor)(Tb);
        for (let vb = 0; vb < Tb; vb++) eb[vb] = Eb[vb] + .5 | 0;
        return eb
      }
      static ConvertCubeMapToSphericalPolynomial(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Ub = ab > 0 ? this._NearestPow2Floor(ab) : 0;
        if (Ub > 0 && bb.size > Ub) {
          const ab = 5 === bb.format ? 4 : 3,
            Ab = ["right", "left", "up", "down", "front", "back"],
            Mb = {};
          for (const Tb of Ab) Mb[Tb] = this._DownsampleFace(bb[Tb], bb.size, Ub, ab);
          bb = {
            ...bb,
            ...Mb,
            size: Ub
          }
        }
        const Ab = new Tb.d;
        let Bb = 0;
        const eb = 2 / bb.size,
          vb = eb,
          Lb = .5 * eb,
          Pb = Lb - 1;
        for (let Tb = 0; Tb < 6; Tb++) {
          const ab = this._FileFaces[Tb],
            Ub = bb[ab.name];
          let Xb = Pb;
          const jb = 5 === bb.format ? 4 : 3;
          for (let Tb = 0; Tb < bb.size; Tb++) {
            let Rb = Pb;
            for (let vb = 0; vb < bb.size; vb++) {
              const Pb = ab.worldAxisForFileX.scale(Rb).add(ab.worldAxisForFileY.scale(Xb)).add(ab.worldAxisForNormal);
              Pb.normalize();
              const kb = this._AreaElement(Rb - Lb, Xb - Lb) - this._AreaElement(Rb - Lb, Xb + Lb) - this._AreaElement(Rb + Lb, Xb - Lb) + this._AreaElement(Rb + Lb, Xb + Lb);
              let yb = Ub[Tb * bb.size * jb + vb * jb + 0],
                Zb = Ub[Tb * bb.size * jb + vb * jb + 1],
                Db = Ub[Tb * bb.size * jb + vb * jb + 2];
              isNaN(yb) && (yb = 0), isNaN(Zb) && (Zb = 0), isNaN(Db) && (Db = 0), 0 === bb.type && (yb /= 255, Zb /= 255, Db /= 255), bb.gammaSpace && (yb = Math.pow((0, Mb.Clamp)(yb), Eb.j), Zb = Math.pow((0, Mb.Clamp)(Zb), Eb.j), Db = Math.pow((0, Mb.Clamp)(Db), Eb.j));
              const zb = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const bb = Math.max(yb, Zb, Db);
                if (bb > zb) {
                  const ab = zb / bb;
                  yb *= ab, Zb *= ab, Db *= ab
                }
              } else yb = (0, Mb.Clamp)(yb, 0, zb), Zb = (0, Mb.Clamp)(Zb, 0, zb), Db = (0, Mb.Clamp)(Db, 0, zb);
              const xb = new Yb.c(yb, Zb, Db);
              Ab.addLight(Pb, xb, kb), Bb += kb, Rb += eb
            }
            Xb += vb
          }
        }
        const Xb = 6 * (4 * Math.PI) / 6 / Bb;
        return Ab.scaleInPlace(Xb), Ab.convertIncidentRadianceToIrradiance(), Ab.convertIrradianceToLambertianRadiance(), Tb.e.FromHarmonics(Ab)
      }
    }
    eb._FileFaces = [new Bb("right", new Ab.m(1, 0, 0), new Ab.m(0, 0, -1), new Ab.m(0, -1, 0)), new Bb("left", new Ab.m(-1, 0, 0), new Ab.m(0, 0, 1), new Ab.m(0, -1, 0)), new Bb("up", new Ab.m(0, 1, 0), new Ab.m(1, 0, 0), new Ab.m(0, 0, 1)), new Bb("down", new Ab.m(0, -1, 0), new Ab.m(1, 0, 0), new Ab.m(0, 0, -1)), new Bb("front", new Ab.m(0, 0, 1), new Ab.m(1, 0, 0), new Ab.m(0, -1, 0)), new Bb("back", new Ab.m(0, 0, -1), new Ab.m(-1, 0, 0), new Ab.m(0, -1, 0))], eb.MAX_HDRI_VALUE = 4096, eb.PRESERVE_CLAMPED_COLORS = !1
  },
  40870: (bb, ab, Ub) => {
    Ub.d(ab, {
      DDSTools: () => jb
    });
    var Ab = Ub(36436),
      Mb = Ub(37989),
      Tb = Ub(40879),
      Eb = Ub(39169);
    const Yb = 131072,
      Bb = 131072;

    function eb(bb) {
      return bb.charCodeAt(0) + (bb.charCodeAt(1) << 8) + (bb.charCodeAt(2) << 16) + (bb.charCodeAt(3) << 24)
    }
    const vb = eb("DXT1"),
      Lb = eb("DXT3"),
      Pb = eb("DXT5"),
      Xb = eb("DX10");
    class jb {
      static GetDDSInfo(bb) {
        const ab = new Int32Array(bb.buffer, bb.byteOffset, 31),
          Ub = new Int32Array(bb.buffer, bb.byteOffset, 35);
        let Ab = 1;
        ab[2] & Yb && (Ab = Math.max(1, ab[7]));
        const Mb = ab[21],
          Tb = Mb === Xb ? Ub[32] : 0;
        let Eb = 0;
        switch (Mb) {
          case 113:
            Eb = 2;
            break;
          case 116:
            Eb = 1;
            break;
          case Xb:
            if (10 === Tb) {
              Eb = 2;
              break
            }
            if (2 === Tb) {
              Eb = 1;
              break
            }
        }
        return {
          width: ab[4],
          height: ab[3],
          mipmapCount: Ab,
          isFourCC: 4 === (4 & ab[20]),
          isRGB: 64 === (64 & ab[20]),
          isLuminance: (ab[20] & Bb) === Bb,
          isCube: 512 === (512 & ab[28]),
          isCompressed: Mb === vb || Mb === Lb || Mb === Pb,
          dxgiFormat: Tb,
          textureType: Eb
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(bb, ab, Ub, Ab, Mb, Tb) {
        const Yb = new Float32Array(Ab),
          Bb = new Uint16Array(Mb, Ub);
        let eb = 0;
        for (let vb = 0; vb < ab; vb++)
          for (let ab = 0; ab < bb; ab++) {
            const Ub = 4 * (ab + vb * bb);
            Yb[eb] = (0, Eb.e)(Bb[Ub]), Yb[eb + 1] = (0, Eb.e)(Bb[Ub + 1]), Yb[eb + 2] = (0, Eb.e)(Bb[Ub + 2]), jb.StoreLODInAlphaChannel ? Yb[eb + 3] = Tb : Yb[eb + 3] = (0, Eb.e)(Bb[Ub + 3]), eb += 4
          }
        return Yb
      }
      static _GetHalfFloatRGBAArrayBuffer(bb, ab, Ub, Ab, Mb, Tb) {
        if (jb.StoreLODInAlphaChannel) {
          const Yb = new Uint16Array(Ab),
            Bb = new Uint16Array(Mb, Ub);
          let eb = 0;
          for (let Ub = 0; Ub < ab; Ub++)
            for (let ab = 0; ab < bb; ab++) {
              const Ab = 4 * (ab + Ub * bb);
              Yb[eb] = Bb[Ab], Yb[eb + 1] = Bb[Ab + 1], Yb[eb + 2] = Bb[Ab + 2], Yb[eb + 3] = (0, Eb.j)(Tb), eb += 4
            }
          return Yb
        }
        return new Uint16Array(Mb, Ub, Ab)
      }
      static _GetFloatRGBAArrayBuffer(bb, ab, Ub, Ab, Mb, Tb) {
        if (jb.StoreLODInAlphaChannel) {
          const Eb = new Float32Array(Ab),
            Yb = new Float32Array(Mb, Ub);
          let Bb = 0;
          for (let Ub = 0; Ub < ab; Ub++)
            for (let ab = 0; ab < bb; ab++) {
              const Ab = 4 * (ab + Ub * bb);
              Eb[Bb] = Yb[Ab], Eb[Bb + 1] = Yb[Ab + 1], Eb[Bb + 2] = Yb[Ab + 2], Eb[Bb + 3] = Tb, Bb += 4
            }
          return Eb
        }
        return new Float32Array(Mb, Ub, Ab)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(bb, ab, Ub, Ab, Mb, Tb) {
        const Yb = new Uint16Array(Ab),
          Bb = new Float32Array(Mb, Ub);
        let eb = 0;
        for (let vb = 0; vb < ab; vb++)
          for (let ab = 0; ab < bb; ab++) Yb[eb] = (0, Eb.j)(Bb[eb]), Yb[eb + 1] = (0, Eb.j)(Bb[eb + 1]), Yb[eb + 2] = (0, Eb.j)(Bb[eb + 2]), jb.StoreLODInAlphaChannel ? Yb[eb + 3] = (0, Eb.j)(Tb) : Yb[eb + 3] = (0, Eb.j)(Bb[eb + 3]), eb += 4;
        return Yb
      }
      static _GetFloatAsUIntRGBAArrayBuffer(bb, ab, Ub, Mb, Tb, Eb) {
        const Yb = new Uint8Array(Mb),
          Bb = new Float32Array(Tb, Ub);
        let eb = 0;
        for (let vb = 0; vb < ab; vb++)
          for (let ab = 0; ab < bb; ab++) {
            const Ub = 4 * (ab + vb * bb);
            Yb[eb] = 255 * (0, Ab.Clamp)(Bb[Ub]), Yb[eb + 1] = 255 * (0, Ab.Clamp)(Bb[Ub + 1]), Yb[eb + 2] = 255 * (0, Ab.Clamp)(Bb[Ub + 2]), jb.StoreLODInAlphaChannel ? Yb[eb + 3] = Eb : Yb[eb + 3] = 255 * (0, Ab.Clamp)(Bb[Ub + 3]), eb += 4
          }
        return Yb
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(bb, ab, Ub, Mb, Tb, Yb) {
        const Bb = new Uint8Array(Mb),
          eb = new Uint16Array(Tb, Ub);
        let vb = 0;
        for (let Lb = 0; Lb < ab; Lb++)
          for (let ab = 0; ab < bb; ab++) {
            const Ub = 4 * (ab + Lb * bb);
            Bb[vb] = 255 * (0, Ab.Clamp)((0, Eb.e)(eb[Ub])), Bb[vb + 1] = 255 * (0, Ab.Clamp)((0, Eb.e)(eb[Ub + 1])), Bb[vb + 2] = 255 * (0, Ab.Clamp)((0, Eb.e)(eb[Ub + 2])), jb.StoreLODInAlphaChannel ? Bb[vb + 3] = Yb : Bb[vb + 3] = 255 * (0, Ab.Clamp)((0, Eb.e)(eb[Ub + 3])), vb += 4
          }
        return Bb
      }
      static _GetRGBAArrayBuffer(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb) {
        const eb = new Uint8Array(Ab),
          vb = new Uint8Array(Mb, Ub);
        let Lb = 0;
        for (let Pb = 0; Pb < ab; Pb++)
          for (let ab = 0; ab < bb; ab++) {
            const Ub = 4 * (ab + Pb * bb);
            eb[Lb] = vb[Ub + Tb], eb[Lb + 1] = vb[Ub + Eb], eb[Lb + 2] = vb[Ub + Yb], eb[Lb + 3] = vb[Ub + Bb], Lb += 4
          }
        return eb
      }
      static _ExtractLongWordOrder(bb) {
        return 0 === bb || 255 === bb || -16777216 === bb ? 0 : 1 + jb._ExtractLongWordOrder(bb >> 8)
      }
      static _GetRGBArrayBuffer(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb) {
        const Bb = new Uint8Array(Ab),
          eb = new Uint8Array(Mb, Ub);
        let vb = 0;
        for (let Lb = 0; Lb < ab; Lb++)
          for (let ab = 0; ab < bb; ab++) {
            const Ub = 3 * (ab + Lb * bb);
            Bb[vb] = eb[Ub + Tb], Bb[vb + 1] = eb[Ub + Eb], Bb[vb + 2] = eb[Ub + Yb], vb += 3
          }
        return Bb
      }
      static _GetLuminanceArrayBuffer(bb, ab, Ub, Ab, Mb) {
        const Tb = new Uint8Array(Ab),
          Eb = new Uint8Array(Mb, Ub);
        let Yb = 0;
        for (let Bb = 0; Bb < ab; Bb++)
          for (let ab = 0; ab < bb; ab++) {
            const Ub = ab + Bb * bb;
            Tb[Yb] = Eb[Ub], Yb++
          }
        return Tb
      }
      static UploadDDSLevels(bb, ab, Ub, Ab, Eb, Bb) {
        let eb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          Rb = arguments.length > 7 ? arguments[7] : void 0,
          kb = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          yb = null;
        Ab.sphericalPolynomial && (yb = []);
        const Zb = !!bb.getCaps().s3tc;
        ab.generateMipMaps = Eb;
        const Db = new Int32Array(Ub.buffer, Ub.byteOffset, 31);
        let zb, xb, ib, fb, mb, pb, Nb, Wb = 0,
          Hb = 0,
          Ib = 1;
        if (542327876 !== Db[0]) return void Mb.e.Error("Invalid magic number in DDS header");
        if (!Ab.isFourCC && !Ab.isRGB && !Ab.isLuminance) return void Mb.e.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (Ab.isCompressed && !Zb) return void Mb.e.Error("Compressed textures are not supported on this platform.");
        let db = Db[22];
        fb = Db[1] + 4;
        let Fb = !1;
        if (Ab.isFourCC) switch (zb = Db[21], zb) {
          case vb:
            Ib = 8, Hb = 33777;
            break;
          case Lb:
            Ib = 16, Hb = 33778;
            break;
          case Pb:
            Ib = 16, Hb = 33779;
            break;
          case 113:
            Fb = !0, db = 64;
            break;
          case 116:
            Fb = !0, db = 128;
            break;
          case Xb: {
            fb += 20;
            let bb = !1;
            switch (Ab.dxgiFormat) {
              case 10:
                Fb = !0, db = 64, bb = !0;
                break;
              case 2:
                Fb = !0, db = 128, bb = !0;
                break;
              case 88:
                Ab.isRGB = !0, Ab.isFourCC = !1, db = 32, bb = !0
            }
            if (bb) break
          }
          default:
            return void Mb.e.Error(["Unsupported FourCC code:", (hb = zb, String.fromCharCode(255 & hb, hb >> 8 & 255, hb >> 16 & 255, hb >> 24 & 255))])
        }
        var hb;
        const Gb = jb._ExtractLongWordOrder(Db[23]),
          Qb = jb._ExtractLongWordOrder(Db[24]),
          qb = jb._ExtractLongWordOrder(Db[25]),
          ub = jb._ExtractLongWordOrder(Db[26]);
        Fb && (Hb = bb._getRGBABufferInternalSizedFormat(Ab.textureType)), pb = 1, Db[2] & Yb && !1 !== Eb && (pb = Math.max(1, Db[7]));
        const rb = Rb || 0,
          Kb = bb.getCaps();
        for (let Mb = rb; Mb < Bb; Mb++) {
          for (xb = Db[4], ib = Db[3], Nb = 0; Nb < pb; ++Nb) {
            if (-1 === eb || eb === Nb) {
              const Tb = -1 === eb ? Nb : 0;
              if (!Ab.isCompressed && Ab.isFourCC) {
                ab.format = 5, Wb = xb * ib * 4;
                let Ab = null;
                if (bb._badOS || bb._badDesktopOS || !Kb.textureHalfFloat && !Kb.textureFloat) 128 === db ? (Ab = jb._GetFloatAsUIntRGBAArrayBuffer(xb, ib, Ub.byteOffset + fb, Wb, Ub.buffer, Tb), yb && 0 == Tb && yb.push(jb._GetFloatRGBAArrayBuffer(xb, ib, Ub.byteOffset + fb, Wb, Ub.buffer, Tb))) : 64 === db && (Ab = jb._GetHalfFloatAsUIntRGBAArrayBuffer(xb, ib, Ub.byteOffset + fb, Wb, Ub.buffer, Tb), yb && 0 == Tb && yb.push(jb._GetHalfFloatAsFloatRGBAArrayBuffer(xb, ib, Ub.byteOffset + fb, Wb, Ub.buffer, Tb))), ab.type = 0;
                else {
                  const bb = Kb.textureFloat && (kb && Kb.textureFloatLinearFiltering || !kb),
                    Mb = Kb.textureHalfFloat && (kb && Kb.textureHalfFloatLinearFiltering || !kb),
                    Eb = (128 === db || 64 === db && !Mb) && bb ? 1 : (64 === db || 128 === db && !bb) && Mb ? 2 : 0;
                  let Yb, Bb = null;
                  if (128 === db) switch (Eb) {
                    case 1:
                      Yb = jb._GetFloatRGBAArrayBuffer, Bb = null;
                      break;
                    case 2:
                      Yb = jb._GetFloatAsHalfFloatRGBAArrayBuffer, Bb = jb._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      Yb = jb._GetFloatAsUIntRGBAArrayBuffer, Bb = jb._GetFloatRGBAArrayBuffer
                  } else switch (Eb) {
                    case 1:
                      Yb = jb._GetHalfFloatAsFloatRGBAArrayBuffer, Bb = null;
                      break;
                    case 2:
                      Yb = jb._GetHalfFloatRGBAArrayBuffer, Bb = jb._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      Yb = jb._GetHalfFloatAsUIntRGBAArrayBuffer, Bb = jb._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  ab.type = Eb, Ab = Yb(xb, ib, Ub.byteOffset + fb, Wb, Ub.buffer, Tb), yb && 0 == Tb && yb.push(Bb ? Bb(xb, ib, Ub.byteOffset + fb, Wb, Ub.buffer, Tb) : Ab)
                }
                Ab && bb._uploadDataToTextureDirectly(ab, Ab, Mb, Tb)
              } else if (Ab.isRGB) ab.type = 0, 24 === db ? (ab.format = 4, Wb = xb * ib * 3, mb = jb._GetRGBArrayBuffer(xb, ib, Ub.byteOffset + fb, Wb, Ub.buffer, Gb, Qb, qb), bb._uploadDataToTextureDirectly(ab, mb, Mb, Tb)) : (ab.format = 5, Wb = xb * ib * 4, mb = jb._GetRGBAArrayBuffer(xb, ib, Ub.byteOffset + fb, Wb, Ub.buffer, Gb, Qb, qb, ub), bb._uploadDataToTextureDirectly(ab, mb, Mb, Tb));
              else if (Ab.isLuminance) {
                const Ab = bb._getUnpackAlignement(),
                  Eb = xb;
                Wb = Math.floor((xb + Ab - 1) / Ab) * Ab * (ib - 1) + Eb, mb = jb._GetLuminanceArrayBuffer(xb, ib, Ub.byteOffset + fb, Wb, Ub.buffer), ab.format = 1, ab.type = 0, bb._uploadDataToTextureDirectly(ab, mb, Mb, Tb)
              } else Wb = Math.max(4, xb) / 4 * Math.max(4, ib) / 4 * Ib, mb = new Uint8Array(Ub.buffer, Ub.byteOffset + fb, Wb), ab.type = 0, bb._uploadCompressedDataToTextureDirectly(ab, Hb, xb, ib, mb, Mb, Tb)
            }
            fb += db ? xb * ib * (db / 8) : Wb, xb *= .5, ib *= .5, xb = Math.max(1, xb), ib = Math.max(1, ib)
          }
          if (void 0 !== Rb) break
        }
        yb && yb.length > 0 ? Ab.sphericalPolynomial = Tb.d.ConvertCubeMapToSphericalPolynomial({
          size: Db[4],
          right: yb[0],
          left: yb[1],
          up: yb[2],
          down: yb[3],
          front: yb[4],
          back: yb[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : Ab.sphericalPolynomial = void 0
      }
    }
    jb.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);