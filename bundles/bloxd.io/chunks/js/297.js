export const id = 297;
export const ids = [296, 297];
export const modules = {
  41196: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      _DDSTextureLoader: () => ak
    });
    var Rk = Bk(39384),
      tk = Bk(41174);
    class ak {
      constructor() {
        this.supportCascades = !0
      }
      loadCubeData(kk, Fk, Bk, ak) {
        const Xk = Fk.ne();
        let bk, wk = !1,
          dk = 1e3;
        if (Array.isArray(kk))
          for (let Rk = 0; Rk < kk.length; Rk++) {
            const Bk = kk[Rk];
            bk = tk.DDSTools.GetDDSInfo(Bk), Fk.width = bk.width, Fk.height = bk.height, wk = (bk.isRGB || bk.isLuminance || bk.mipmapCount > 1) && Fk.generateMipMaps, Xk._unpackFlipY(bk.isCompressed), tk.DDSTools.UploadDDSLevels(Xk, Fk, Bk, bk, wk, 6, -1, Rk), bk.isFourCC || 1 !== bk.mipmapCount ? dk = bk.mipmapCount - 1 : Xk.generateMipMapsForCubemap(Fk)
          } else {
            const ak = kk;
            bk = tk.DDSTools.GetDDSInfo(ak), Fk.width = bk.width, Fk.height = bk.height, Bk && (bk.sphericalPolynomial = new Rk.f), wk = (bk.isRGB || bk.isLuminance || bk.mipmapCount > 1) && Fk.generateMipMaps, Xk._unpackFlipY(bk.isCompressed), tk.DDSTools.UploadDDSLevels(Xk, Fk, ak, bk, wk, 6), bk.isFourCC || 1 !== bk.mipmapCount ? dk = bk.mipmapCount - 1 : Xk.generateMipMapsForCubemap(Fk, !1)
          }
        Xk._setCubeMapTextureParams(Fk, wk, dk), Fk.isReady = !0, Fk.onLoadedObservable.notifyObservers(Fk), Fk.onLoadedObservable.clear(), ak && ak({
          isDDS: !0,
          width: Fk.width,
          info: bk,
          data: kk,
          texture: Fk
        })
      }
      loadData(kk, Fk, Bk) {
        const Rk = tk.DDSTools.GetDDSInfo(kk),
          ak = (Rk.isRGB || Rk.isLuminance || Rk.mipmapCount > 1) && Fk.generateMipMaps && Math.max(Rk.width, Rk.height) >> Rk.mipmapCount - 1 === 1;
        Bk(Rk.width, Rk.height, ak, Rk.isFourCC, (() => {
          tk.DDSTools.UploadDDSLevels(Fk.ne(), Fk, kk, Rk, ak, 1)
        }))
      }
    }
  },
  41182: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => dk
    });
    var Rk = Bk(36758),
      tk = Bk(36790),
      ak = Bk(39384),
      Xk = Bk(36764),
      bk = Bk(36917);
    class wk {
      constructor(kk, Fk, Bk, Rk) {
        this.name = kk, this.worldAxisForNormal = Fk, this.worldAxisForFileX = Bk, this.worldAxisForFileY = Rk
      }
    }
    class dk {
      static _NearestPow2Floor(kk) {
        return kk <= 1 ? 1 : 1 << Math.floor(Math.log2(kk))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(kk) {
        if (!kk.isCube) return null;
        kk.XN()?.ne().flushFramebuffer();
        const Fk = kk.getSize().width,
          Bk = kk._sphericalPolynomialTargetSize,
          Rk = Bk > 0 ? this._NearestPow2Floor(Bk) : 0,
          tk = !kk.noMipmap && !0 === kk._texture?.generateMipMaps,
          ak = Rk > 0 && Rk < Fk && tk,
          Xk = ak ? Math.max(0, Math.round(Math.log2(Fk / Rk))) : 0,
          bk = ak ? Math.max(1, Math.floor(Fk / Math.pow(2, Xk))) : Fk,
          wk = kk.readPixels(0, Xk, void 0, !1),
          dk = kk.readPixels(1, Xk, void 0, !1);
        let sk, Vk;
        kk.isRenderTarget ? (sk = kk.readPixels(3, Xk, void 0, !1), Vk = kk.readPixels(2, Xk, void 0, !1)) : (sk = kk.readPixels(2, Xk, void 0, !1), Vk = kk.readPixels(3, Xk, void 0, !1));
        const Jk = kk.readPixels(4, Xk, void 0, !1),
          Ak = kk.readPixels(5, Xk, void 0, !1),
          ek = kk.gammaSpace,
          yk = Rk > 0 && Rk < Fk && !ak;
        return new Promise((kk => {
          Promise.all([dk, wk, sk, Vk, Jk, Ak]).then((Bk => {
            let [tk, ak, Xk, wk, dk, sk] = Bk, Vk = bk;
            if (yk) {
              const kk = 4;
              tk = this._DownsampleFace(tk, Fk, Rk, kk), ak = this._DownsampleFace(ak, Fk, Rk, kk), Xk = this._DownsampleFace(Xk, Fk, Rk, kk), wk = this._DownsampleFace(wk, Fk, Rk, kk), dk = this._DownsampleFace(dk, Fk, Rk, kk), sk = this._DownsampleFace(sk, Fk, Rk, kk), Vk = Rk
            }
            const Jk = {
              size: Vk,
              right: ak,
              left: tk,
              up: Xk,
              down: wk,
              front: dk,
              back: sk,
              format: 5,
              type: tk instanceof Float32Array ? 1 : 0,
              gammaSpace: ek
            };
            kk(this.ConvertCubeMapToSphericalPolynomial(Jk))
          }))
        }))
      }
      static _AreaElement(kk, Fk) {
        return Math.atan2(kk * Fk, Math.sqrt(kk * kk + Fk * Fk + 1))
      }
      static _DownsampleFace(kk, Fk, Bk, Rk) {
        const tk = kk instanceof Float32Array ? kk : Float32Array.from(kk),
          ak = Bk * Bk * Rk,
          Xk = new Float32Array(ak),
          bk = Fk / Bk,
          wk = 1 / (bk * bk);
        for (let sk = 0; sk < Bk; sk++) {
          const kk = Math.floor(sk * bk),
            ak = Math.floor((sk + 1) * bk);
          for (let dk = 0; dk < Bk; dk++) {
            const Vk = Math.floor(dk * bk),
              Jk = Math.floor((dk + 1) * bk),
              Ak = (sk * Bk + dk) * Rk;
            for (let Bk = 0; Bk < Rk; Bk++) {
              let bk = 0;
              for (let Xk = kk; Xk < ak; Xk++)
                for (let kk = Vk; kk < Jk; kk++) bk += tk[(Xk * Fk + kk) * Rk + Bk];
              Xk[Ak + Bk] = bk * wk
            }
          }
        }
        if (kk instanceof Float32Array) return Xk;
        const dk = new(0, kk.constructor)(ak);
        for (let sk = 0; sk < ak; sk++) dk[sk] = Xk[sk] + .5 | 0;
        return dk
      }
      static ConvertCubeMapToSphericalPolynomial(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Bk = Fk > 0 ? this._NearestPow2Floor(Fk) : 0;
        if (Bk > 0 && kk.size > Bk) {
          const Fk = 5 === kk.format ? 4 : 3,
            Rk = ["right", "left", "up", "down", "front", "back"],
            tk = {};
          for (const ak of Rk) tk[ak] = this._DownsampleFace(kk[ak], kk.size, Bk, Fk);
          kk = {
            ...kk,
            ...tk,
            size: Bk
          }
        }
        const Rk = new ak.b;
        let wk = 0;
        const dk = 2 / kk.size,
          sk = dk,
          Vk = .5 * dk,
          Jk = Vk - 1;
        for (let ak = 0; ak < 6; ak++) {
          const Fk = this._FileFaces[ak],
            Bk = kk[Fk.name];
          let Ak = Jk;
          const ek = 5 === kk.format ? 4 : 3;
          for (let ak = 0; ak < kk.size; ak++) {
            let yk = Jk;
            for (let sk = 0; sk < kk.size; sk++) {
              const Jk = Fk.worldAxisForFileX.scale(yk).add(Fk.worldAxisForFileY.scale(Ak)).add(Fk.worldAxisForNormal);
              Jk.normalize();
              const fk = this._AreaElement(yk - Vk, Ak - Vk) - this._AreaElement(yk - Vk, Ak + Vk) - this._AreaElement(yk + Vk, Ak - Vk) + this._AreaElement(yk + Vk, Ak + Vk);
              let mk = Bk[ak * kk.size * ek + sk * ek + 0],
                Wk = Bk[ak * kk.size * ek + sk * ek + 1],
                vk = Bk[ak * kk.size * ek + sk * ek + 2];
              isNaN(mk) && (mk = 0), isNaN(Wk) && (Wk = 0), isNaN(vk) && (vk = 0), 0 === kk.type && (mk /= 255, Wk /= 255, vk /= 255), kk.gammaSpace && (mk = Math.pow((0, tk.Clamp)(mk), Xk.i), Wk = Math.pow((0, tk.Clamp)(Wk), Xk.i), vk = Math.pow((0, tk.Clamp)(vk), Xk.i));
              const ik = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const kk = Math.max(mk, Wk, vk);
                if (kk > ik) {
                  const Fk = ik / kk;
                  mk *= Fk, Wk *= Fk, vk *= Fk
                }
              } else mk = (0, tk.Clamp)(mk, 0, ik), Wk = (0, tk.Clamp)(Wk, 0, ik), vk = (0, tk.Clamp)(vk, 0, ik);
              const Yk = new bk.e(mk, Wk, vk);
              Rk.addLight(Jk, Yk, fk), wk += fk, yk += dk
            }
            Ak += sk
          }
        }
        const Ak = 6 * (4 * Math.PI) / 6 / wk;
        return Rk.scaleInPlace(Ak), Rk.convertIncidentRadianceToIrradiance(), Rk.convertIrradianceToLambertianRadiance(), ak.f.FromHarmonics(Rk)
      }
    }
    dk._FileFaces = [new wk("right", new Rk.s(1, 0, 0), new Rk.s(0, 0, -1), new Rk.s(0, -1, 0)), new wk("left", new Rk.s(-1, 0, 0), new Rk.s(0, 0, 1), new Rk.s(0, -1, 0)), new wk("up", new Rk.s(0, 1, 0), new Rk.s(1, 0, 0), new Rk.s(0, 0, 1)), new wk("down", new Rk.s(0, -1, 0), new Rk.s(1, 0, 0), new Rk.s(0, 0, -1)), new wk("front", new Rk.s(0, 0, 1), new Rk.s(1, 0, 0), new Rk.s(0, -1, 0)), new wk("back", new Rk.s(0, 0, -1), new Rk.s(-1, 0, 0), new Rk.s(0, -1, 0))], dk.MAX_HDRI_VALUE = 4096, dk.PRESERVE_CLAMPED_COLORS = !1
  },
  41174: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      DDSTools: () => ek
    });
    var Rk = Bk(36790),
      tk = Bk(38320),
      ak = Bk(41182),
      Xk = Bk(39465);
    const bk = 131072,
      wk = 131072;

    function dk(kk) {
      return kk.charCodeAt(0) + (kk.charCodeAt(1) << 8) + (kk.charCodeAt(2) << 16) + (kk.charCodeAt(3) << 24)
    }
    const sk = dk("DXT1"),
      Vk = dk("DXT3"),
      Jk = dk("DXT5"),
      Ak = dk("DX10");
    class ek {
      static GetDDSInfo(kk) {
        const Fk = new Int32Array(kk.buffer, kk.byteOffset, 31),
          Bk = new Int32Array(kk.buffer, kk.byteOffset, 35);
        let Rk = 1;
        Fk[2] & bk && (Rk = Math.max(1, Fk[7]));
        const tk = Fk[21],
          ak = tk === Ak ? Bk[32] : 0;
        let Xk = 0;
        switch (tk) {
          case 113:
            Xk = 2;
            break;
          case 116:
            Xk = 1;
            break;
          case Ak:
            if (10 === ak) {
              Xk = 2;
              break
            }
            if (2 === ak) {
              Xk = 1;
              break
            }
        }
        return {
          width: Fk[4],
          height: Fk[3],
          mipmapCount: Rk,
          isFourCC: 4 === (4 & Fk[20]),
          isRGB: 64 === (64 & Fk[20]),
          isLuminance: (Fk[20] & wk) === wk,
          isCube: 512 === (512 & Fk[28]),
          isCompressed: tk === sk || tk === Vk || tk === Jk,
          dxgiFormat: ak,
          textureType: Xk
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(kk, Fk, Bk, Rk, tk, ak) {
        const bk = new Float32Array(Rk),
          wk = new Uint16Array(tk, Bk);
        let dk = 0;
        for (let sk = 0; sk < Fk; sk++)
          for (let Fk = 0; Fk < kk; Fk++) {
            const Bk = 4 * (Fk + sk * kk);
            bk[dk] = (0, Xk.d)(wk[Bk]), bk[dk + 1] = (0, Xk.d)(wk[Bk + 1]), bk[dk + 2] = (0, Xk.d)(wk[Bk + 2]), ek.StoreLODInAlphaChannel ? bk[dk + 3] = ak : bk[dk + 3] = (0, Xk.d)(wk[Bk + 3]), dk += 4
          }
        return bk
      }
      static _GetHalfFloatRGBAArrayBuffer(kk, Fk, Bk, Rk, tk, ak) {
        if (ek.StoreLODInAlphaChannel) {
          const bk = new Uint16Array(Rk),
            wk = new Uint16Array(tk, Bk);
          let dk = 0;
          for (let Bk = 0; Bk < Fk; Bk++)
            for (let Fk = 0; Fk < kk; Fk++) {
              const Rk = 4 * (Fk + Bk * kk);
              bk[dk] = wk[Rk], bk[dk + 1] = wk[Rk + 1], bk[dk + 2] = wk[Rk + 2], bk[dk + 3] = (0, Xk.h)(ak), dk += 4
            }
          return bk
        }
        return new Uint16Array(tk, Bk, Rk)
      }
      static _GetFloatRGBAArrayBuffer(kk, Fk, Bk, Rk, tk, ak) {
        if (ek.StoreLODInAlphaChannel) {
          const Xk = new Float32Array(Rk),
            bk = new Float32Array(tk, Bk);
          let wk = 0;
          for (let Bk = 0; Bk < Fk; Bk++)
            for (let Fk = 0; Fk < kk; Fk++) {
              const Rk = 4 * (Fk + Bk * kk);
              Xk[wk] = bk[Rk], Xk[wk + 1] = bk[Rk + 1], Xk[wk + 2] = bk[Rk + 2], Xk[wk + 3] = ak, wk += 4
            }
          return Xk
        }
        return new Float32Array(tk, Bk, Rk)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(kk, Fk, Bk, Rk, tk, ak) {
        const bk = new Uint16Array(Rk),
          wk = new Float32Array(tk, Bk);
        let dk = 0;
        for (let sk = 0; sk < Fk; sk++)
          for (let Fk = 0; Fk < kk; Fk++) bk[dk] = (0, Xk.h)(wk[dk]), bk[dk + 1] = (0, Xk.h)(wk[dk + 1]), bk[dk + 2] = (0, Xk.h)(wk[dk + 2]), ek.StoreLODInAlphaChannel ? bk[dk + 3] = (0, Xk.h)(ak) : bk[dk + 3] = (0, Xk.h)(wk[dk + 3]), dk += 4;
        return bk
      }
      static _GetFloatAsUIntRGBAArrayBuffer(kk, Fk, Bk, tk, ak, Xk) {
        const bk = new Uint8Array(tk),
          wk = new Float32Array(ak, Bk);
        let dk = 0;
        for (let sk = 0; sk < Fk; sk++)
          for (let Fk = 0; Fk < kk; Fk++) {
            const Bk = 4 * (Fk + sk * kk);
            bk[dk] = 255 * (0, Rk.Clamp)(wk[Bk]), bk[dk + 1] = 255 * (0, Rk.Clamp)(wk[Bk + 1]), bk[dk + 2] = 255 * (0, Rk.Clamp)(wk[Bk + 2]), ek.StoreLODInAlphaChannel ? bk[dk + 3] = Xk : bk[dk + 3] = 255 * (0, Rk.Clamp)(wk[Bk + 3]), dk += 4
          }
        return bk
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(kk, Fk, Bk, tk, ak, bk) {
        const wk = new Uint8Array(tk),
          dk = new Uint16Array(ak, Bk);
        let sk = 0;
        for (let Vk = 0; Vk < Fk; Vk++)
          for (let Fk = 0; Fk < kk; Fk++) {
            const Bk = 4 * (Fk + Vk * kk);
            wk[sk] = 255 * (0, Rk.Clamp)((0, Xk.d)(dk[Bk])), wk[sk + 1] = 255 * (0, Rk.Clamp)((0, Xk.d)(dk[Bk + 1])), wk[sk + 2] = 255 * (0, Rk.Clamp)((0, Xk.d)(dk[Bk + 2])), ek.StoreLODInAlphaChannel ? wk[sk + 3] = bk : wk[sk + 3] = 255 * (0, Rk.Clamp)((0, Xk.d)(dk[Bk + 3])), sk += 4
          }
        return wk
      }
      static _GetRGBAArrayBuffer(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk) {
        const dk = new Uint8Array(Rk),
          sk = new Uint8Array(tk, Bk);
        let Vk = 0;
        for (let Jk = 0; Jk < Fk; Jk++)
          for (let Fk = 0; Fk < kk; Fk++) {
            const Bk = 4 * (Fk + Jk * kk);
            dk[Vk] = sk[Bk + ak], dk[Vk + 1] = sk[Bk + Xk], dk[Vk + 2] = sk[Bk + bk], dk[Vk + 3] = sk[Bk + wk], Vk += 4
          }
        return dk
      }
      static _ExtractLongWordOrder(kk) {
        return 0 === kk || 255 === kk || -16777216 === kk ? 0 : 1 + ek._ExtractLongWordOrder(kk >> 8)
      }
      static _GetRGBArrayBuffer(kk, Fk, Bk, Rk, tk, ak, Xk, bk) {
        const wk = new Uint8Array(Rk),
          dk = new Uint8Array(tk, Bk);
        let sk = 0;
        for (let Vk = 0; Vk < Fk; Vk++)
          for (let Fk = 0; Fk < kk; Fk++) {
            const Bk = 3 * (Fk + Vk * kk);
            wk[sk] = dk[Bk + ak], wk[sk + 1] = dk[Bk + Xk], wk[sk + 2] = dk[Bk + bk], sk += 3
          }
        return wk
      }
      static _GetLuminanceArrayBuffer(kk, Fk, Bk, Rk, tk) {
        const ak = new Uint8Array(Rk),
          Xk = new Uint8Array(tk, Bk);
        let bk = 0;
        for (let wk = 0; wk < Fk; wk++)
          for (let Fk = 0; Fk < kk; Fk++) {
            const Bk = Fk + wk * kk;
            ak[bk] = Xk[Bk], bk++
          }
        return ak
      }
      static UploadDDSLevels(kk, Fk, Bk, Rk, Xk, wk) {
        let dk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          yk = arguments.length > 7 ? arguments[7] : void 0,
          fk = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          mk = null;
        Rk.sphericalPolynomial && (mk = []);
        const Wk = !!kk.getCaps().s3tc;
        Fk.generateMipMaps = Xk;
        const vk = new Int32Array(Bk.buffer, Bk.byteOffset, 31);
        let ik, Yk, Lk, Ok, Ek, Sk, Nk, Hk = 0,
          uk = 0,
          Mk = 1;
        if (542327876 !== vk[0]) return void tk.b.Error("Invalid magic number in DDS header");
        if (!Rk.isFourCC && !Rk.isRGB && !Rk.isLuminance) return void tk.b.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (Rk.isCompressed && !Wk) return void tk.b.Error("Compressed textures are not supported on this platform.");
        let gk = vk[22];
        Ok = vk[1] + 4;
        let Uk = !1;
        if (Rk.isFourCC) switch (ik = vk[21], ik) {
          case sk:
            Mk = 8, uk = 33777;
            break;
          case Vk:
            Mk = 16, uk = 33778;
            break;
          case Jk:
            Mk = 16, uk = 33779;
            break;
          case 113:
            Uk = !0, gk = 64;
            break;
          case 116:
            Uk = !0, gk = 128;
            break;
          case Ak: {
            Ok += 20;
            let kk = !1;
            switch (Rk.dxgiFormat) {
              case 10:
                Uk = !0, gk = 64, kk = !0;
                break;
              case 2:
                Uk = !0, gk = 128, kk = !0;
                break;
              case 88:
                Rk.isRGB = !0, Rk.isFourCC = !1, gk = 32, kk = !0
            }
            if (kk) break
          }
          default:
            return void tk.b.Error(["Unsupported FourCC code:", (ck = ik, String.fromCharCode(255 & ck, ck >> 8 & 255, ck >> 16 & 255, ck >> 24 & 255))])
        }
        var ck;
        const Gk = ek._ExtractLongWordOrder(vk[23]),
          Tk = ek._ExtractLongWordOrder(vk[24]),
          rk = ek._ExtractLongWordOrder(vk[25]),
          Dk = ek._ExtractLongWordOrder(vk[26]);
        Uk && (uk = kk._getRGBABufferInternalSizedFormat(Rk.textureType)), Sk = 1, vk[2] & bk && !1 !== Xk && (Sk = Math.max(1, vk[7]));
        const zk = yk || 0,
          Pk = kk.getCaps();
        for (let tk = zk; tk < wk; tk++) {
          for (Yk = vk[4], Lk = vk[3], Nk = 0; Nk < Sk; ++Nk) {
            if (-1 === dk || dk === Nk) {
              const ak = -1 === dk ? Nk : 0;
              if (!Rk.isCompressed && Rk.isFourCC) {
                Fk.format = 5, Hk = Yk * Lk * 4;
                let Rk = null;
                if (kk._badOS || kk._badDesktopOS || !Pk.textureHalfFloat && !Pk.textureFloat) 128 === gk ? (Rk = ek._GetFloatAsUIntRGBAArrayBuffer(Yk, Lk, Bk.byteOffset + Ok, Hk, Bk.buffer, ak), mk && 0 == ak && mk.push(ek._GetFloatRGBAArrayBuffer(Yk, Lk, Bk.byteOffset + Ok, Hk, Bk.buffer, ak))) : 64 === gk && (Rk = ek._GetHalfFloatAsUIntRGBAArrayBuffer(Yk, Lk, Bk.byteOffset + Ok, Hk, Bk.buffer, ak), mk && 0 == ak && mk.push(ek._GetHalfFloatAsFloatRGBAArrayBuffer(Yk, Lk, Bk.byteOffset + Ok, Hk, Bk.buffer, ak))), Fk.type = 0;
                else {
                  const kk = Pk.textureFloat && (fk && Pk.textureFloatLinearFiltering || !fk),
                    tk = Pk.textureHalfFloat && (fk && Pk.textureHalfFloatLinearFiltering || !fk),
                    Xk = (128 === gk || 64 === gk && !tk) && kk ? 1 : (64 === gk || 128 === gk && !kk) && tk ? 2 : 0;
                  let bk, wk = null;
                  if (128 === gk) switch (Xk) {
                    case 1:
                      bk = ek._GetFloatRGBAArrayBuffer, wk = null;
                      break;
                    case 2:
                      bk = ek._GetFloatAsHalfFloatRGBAArrayBuffer, wk = ek._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      bk = ek._GetFloatAsUIntRGBAArrayBuffer, wk = ek._GetFloatRGBAArrayBuffer
                  } else switch (Xk) {
                    case 1:
                      bk = ek._GetHalfFloatAsFloatRGBAArrayBuffer, wk = null;
                      break;
                    case 2:
                      bk = ek._GetHalfFloatRGBAArrayBuffer, wk = ek._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      bk = ek._GetHalfFloatAsUIntRGBAArrayBuffer, wk = ek._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  Fk.type = Xk, Rk = bk(Yk, Lk, Bk.byteOffset + Ok, Hk, Bk.buffer, ak), mk && 0 == ak && mk.push(wk ? wk(Yk, Lk, Bk.byteOffset + Ok, Hk, Bk.buffer, ak) : Rk)
                }
                Rk && kk._uploadDataToTextureDirectly(Fk, Rk, tk, ak)
              } else if (Rk.isRGB) Fk.type = 0, 24 === gk ? (Fk.format = 4, Hk = Yk * Lk * 3, Ek = ek._GetRGBArrayBuffer(Yk, Lk, Bk.byteOffset + Ok, Hk, Bk.buffer, Gk, Tk, rk), kk._uploadDataToTextureDirectly(Fk, Ek, tk, ak)) : (Fk.format = 5, Hk = Yk * Lk * 4, Ek = ek._GetRGBAArrayBuffer(Yk, Lk, Bk.byteOffset + Ok, Hk, Bk.buffer, Gk, Tk, rk, Dk), kk._uploadDataToTextureDirectly(Fk, Ek, tk, ak));
              else if (Rk.isLuminance) {
                const Rk = kk._getUnpackAlignement(),
                  Xk = Yk;
                Hk = Math.floor((Yk + Rk - 1) / Rk) * Rk * (Lk - 1) + Xk, Ek = ek._GetLuminanceArrayBuffer(Yk, Lk, Bk.byteOffset + Ok, Hk, Bk.buffer), Fk.format = 1, Fk.type = 0, kk._uploadDataToTextureDirectly(Fk, Ek, tk, ak)
              } else Hk = Math.max(4, Yk) / 4 * Math.max(4, Lk) / 4 * Mk, Ek = new Uint8Array(Bk.buffer, Bk.byteOffset + Ok, Hk), Fk.type = 0, kk._uploadCompressedDataToTextureDirectly(Fk, uk, Yk, Lk, Ek, tk, ak)
            }
            Ok += gk ? Yk * Lk * (gk / 8) : Hk, Yk *= .5, Lk *= .5, Yk = Math.max(1, Yk), Lk = Math.max(1, Lk)
          }
          if (void 0 !== yk) break
        }
        mk && mk.length > 0 ? Rk.sphericalPolynomial = ak.b.ConvertCubeMapToSphericalPolynomial({
          size: vk[4],
          right: mk[0],
          left: mk[1],
          up: mk[2],
          down: mk[3],
          front: mk[4],
          back: mk[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : Rk.sphericalPolynomial = void 0
      }
    }
    ek.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);