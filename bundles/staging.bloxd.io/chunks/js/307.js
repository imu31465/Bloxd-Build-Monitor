export const id = 307;
export const ids = [306, 307];
export const modules = {
  41777: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      _DDSTextureLoader: () => ik
    });
    var Xk = Ik(39989),
      Tk = Ik(41753);
    class ik {
      constructor() {
        this.supportCascades = !0
      }
      loadCubeData(kk, Fk, Ik, ik) {
        const yk = Fk.Oe();
        let lk, ak = !1,
          qk = 1e3;
        if (Array.isArray(kk))
          for (let Xk = 0; Xk < kk.length; Xk++) {
            const Ik = kk[Xk];
            lk = Tk.DDSTools.GetDDSInfo(Ik), Fk.width = lk.width, Fk.height = lk.height, ak = (lk.isRGB || lk.isLuminance || lk.mipmapCount > 1) && Fk.generateMipMaps, yk._unpackFlipY(lk.isCompressed), Tk.DDSTools.UploadDDSLevels(yk, Fk, Ik, lk, ak, 6, -1, Xk), lk.isFourCC || 1 !== lk.mipmapCount ? qk = lk.mipmapCount - 1 : yk.generateMipMapsForCubemap(Fk)
          } else {
            const ik = kk;
            lk = Tk.DDSTools.GetDDSInfo(ik), Fk.width = lk.width, Fk.height = lk.height, Ik && (lk.sphericalPolynomial = new Xk.h), ak = (lk.isRGB || lk.isLuminance || lk.mipmapCount > 1) && Fk.generateMipMaps, yk._unpackFlipY(lk.isCompressed), Tk.DDSTools.UploadDDSLevels(yk, Fk, ik, lk, ak, 6), lk.isFourCC || 1 !== lk.mipmapCount ? qk = lk.mipmapCount - 1 : yk.generateMipMapsForCubemap(Fk, !1)
          }
        yk._setCubeMapTextureParams(Fk, ak, qk), Fk.isReady = !0, Fk.onLoadedObservable.notifyObservers(Fk), Fk.onLoadedObservable.clear(), ik && ik({
          isDDS: !0,
          width: Fk.width,
          info: lk,
          data: kk,
          texture: Fk
        })
      }
      loadData(kk, Fk, Ik) {
        const Xk = Tk.DDSTools.GetDDSInfo(kk),
          ik = (Xk.isRGB || Xk.isLuminance || Xk.mipmapCount > 1) && Fk.generateMipMaps && Math.max(Xk.width, Xk.height) >> Xk.mipmapCount - 1 === 1;
        Ik(Xk.width, Xk.height, ik, Xk.isFourCC, (() => {
          Tk.DDSTools.UploadDDSLevels(Fk.Oe(), Fk, kk, Xk, ik, 1)
        }))
      }
    }
  },
  41761: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => qk
    });
    var Xk = Ik(37153),
      Tk = Ik(37189),
      ik = Ik(39989),
      yk = Ik(37158),
      lk = Ik(37331);
    class ak {
      constructor(kk, Fk, Ik, Xk) {
        this.name = kk, this.worldAxisForNormal = Fk, this.worldAxisForFileX = Ik, this.worldAxisForFileY = Xk
      }
    }
    class qk {
      static _NearestPow2Floor(kk) {
        return kk <= 1 ? 1 : 1 << Math.floor(Math.log2(kk))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(kk) {
        if (!kk.isCube) return null;
        kk.mG()?.Oe().flushFramebuffer();
        const Fk = kk.getSize().width,
          Ik = kk._sphericalPolynomialTargetSize,
          Xk = Ik > 0 ? this._NearestPow2Floor(Ik) : 0,
          Tk = !kk.noMipmap && !0 === kk._texture?.generateMipMaps,
          ik = Xk > 0 && Xk < Fk && Tk,
          yk = ik ? Math.max(0, Math.round(Math.log2(Fk / Xk))) : 0,
          lk = ik ? Math.max(1, Math.floor(Fk / Math.pow(2, yk))) : Fk,
          ak = kk.readPixels(0, yk, void 0, !1),
          qk = kk.readPixels(1, yk, void 0, !1);
        let Lk, tk;
        kk.isRenderTarget ? (Lk = kk.readPixels(3, yk, void 0, !1), tk = kk.readPixels(2, yk, void 0, !1)) : (Lk = kk.readPixels(2, yk, void 0, !1), tk = kk.readPixels(3, yk, void 0, !1));
        const Zk = kk.readPixels(4, yk, void 0, !1),
          jk = kk.readPixels(5, yk, void 0, !1),
          ek = kk.gammaSpace,
          wk = Xk > 0 && Xk < Fk && !ik;
        return new Promise((kk => {
          Promise.all([qk, ak, Lk, tk, Zk, jk]).then((Ik => {
            let [Tk, ik, yk, ak, qk, Lk] = Ik, tk = lk;
            if (wk) {
              const kk = 4;
              Tk = this._DownsampleFace(Tk, Fk, Xk, kk), ik = this._DownsampleFace(ik, Fk, Xk, kk), yk = this._DownsampleFace(yk, Fk, Xk, kk), ak = this._DownsampleFace(ak, Fk, Xk, kk), qk = this._DownsampleFace(qk, Fk, Xk, kk), Lk = this._DownsampleFace(Lk, Fk, Xk, kk), tk = Xk
            }
            const Zk = {
              size: tk,
              right: ik,
              left: Tk,
              up: yk,
              down: ak,
              front: qk,
              back: Lk,
              format: 5,
              type: Tk instanceof Float32Array ? 1 : 0,
              gammaSpace: ek
            };
            kk(this.ConvertCubeMapToSphericalPolynomial(Zk))
          }))
        }))
      }
      static _AreaElement(kk, Fk) {
        return Math.atan2(kk * Fk, Math.sqrt(kk * kk + Fk * Fk + 1))
      }
      static _DownsampleFace(kk, Fk, Ik, Xk) {
        const Tk = kk instanceof Float32Array ? kk : Float32Array.from(kk),
          ik = Ik * Ik * Xk,
          yk = new Float32Array(ik),
          lk = Fk / Ik,
          ak = 1 / (lk * lk);
        for (let Lk = 0; Lk < Ik; Lk++) {
          const kk = Math.floor(Lk * lk),
            ik = Math.floor((Lk + 1) * lk);
          for (let qk = 0; qk < Ik; qk++) {
            const tk = Math.floor(qk * lk),
              Zk = Math.floor((qk + 1) * lk),
              jk = (Lk * Ik + qk) * Xk;
            for (let Ik = 0; Ik < Xk; Ik++) {
              let lk = 0;
              for (let yk = kk; yk < ik; yk++)
                for (let kk = tk; kk < Zk; kk++) lk += Tk[(yk * Fk + kk) * Xk + Ik];
              yk[jk + Ik] = lk * ak
            }
          }
        }
        if (kk instanceof Float32Array) return yk;
        const qk = new(0, kk.constructor)(ik);
        for (let Lk = 0; Lk < ik; Lk++) qk[Lk] = yk[Lk] + .5 | 0;
        return qk
      }
      static ConvertCubeMapToSphericalPolynomial(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Ik = Fk > 0 ? this._NearestPow2Floor(Fk) : 0;
        if (Ik > 0 && kk.size > Ik) {
          const Fk = 5 === kk.format ? 4 : 3,
            Xk = ["right", "left", "up", "down", "front", "back"],
            Tk = {};
          for (const ik of Xk) Tk[ik] = this._DownsampleFace(kk[ik], kk.size, Ik, Fk);
          kk = {
            ...kk,
            ...Tk,
            size: Ik
          }
        }
        const Xk = new ik.d;
        let ak = 0;
        const qk = 2 / kk.size,
          Lk = qk,
          tk = .5 * qk,
          Zk = tk - 1;
        for (let ik = 0; ik < 6; ik++) {
          const Fk = this._FileFaces[ik],
            Ik = kk[Fk.name];
          let jk = Zk;
          const ek = 5 === kk.format ? 4 : 3;
          for (let ik = 0; ik < kk.size; ik++) {
            let wk = Zk;
            for (let Lk = 0; Lk < kk.size; Lk++) {
              const Zk = Fk.worldAxisForFileX.scale(wk).add(Fk.worldAxisForFileY.scale(jk)).add(Fk.worldAxisForNormal);
              Zk.normalize();
              const Hk = this._AreaElement(wk - tk, jk - tk) - this._AreaElement(wk - tk, jk + tk) - this._AreaElement(wk + tk, jk - tk) + this._AreaElement(wk + tk, jk + tk);
              let Jk = Ik[ik * kk.size * ek + Lk * ek + 0],
                xk = Ik[ik * kk.size * ek + Lk * ek + 1],
                Pk = Ik[ik * kk.size * ek + Lk * ek + 2];
              isNaN(Jk) && (Jk = 0), isNaN(xk) && (xk = 0), isNaN(Pk) && (Pk = 0), 0 === kk.type && (Jk /= 255, xk /= 255, Pk /= 255), kk.gammaSpace && (Jk = Math.pow((0, Tk.Clamp)(Jk), yk.g), xk = Math.pow((0, Tk.Clamp)(xk), yk.g), Pk = Math.pow((0, Tk.Clamp)(Pk), yk.g));
              const Kk = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const kk = Math.max(Jk, xk, Pk);
                if (kk > Kk) {
                  const Fk = Kk / kk;
                  Jk *= Fk, xk *= Fk, Pk *= Fk
                }
              } else Jk = (0, Tk.Clamp)(Jk, 0, Kk), xk = (0, Tk.Clamp)(xk, 0, Kk), Pk = (0, Tk.Clamp)(Pk, 0, Kk);
              const Qk = new lk.e(Jk, xk, Pk);
              Xk.addLight(Zk, Qk, Hk), ak += Hk, wk += qk
            }
            jk += Lk
          }
        }
        const jk = 6 * (4 * Math.PI) / 6 / ak;
        return Xk.scaleInPlace(jk), Xk.convertIncidentRadianceToIrradiance(), Xk.convertIrradianceToLambertianRadiance(), ik.h.FromHarmonics(Xk)
      }
    }
    qk._FileFaces = [new ak("right", new Xk.t(1, 0, 0), new Xk.t(0, 0, -1), new Xk.t(0, -1, 0)), new ak("left", new Xk.t(-1, 0, 0), new Xk.t(0, 0, 1), new Xk.t(0, -1, 0)), new ak("up", new Xk.t(0, 1, 0), new Xk.t(1, 0, 0), new Xk.t(0, 0, 1)), new ak("down", new Xk.t(0, -1, 0), new Xk.t(1, 0, 0), new Xk.t(0, 0, -1)), new ak("front", new Xk.t(0, 0, 1), new Xk.t(1, 0, 0), new Xk.t(0, -1, 0)), new ak("back", new Xk.t(0, 0, -1), new Xk.t(-1, 0, 0), new Xk.t(0, -1, 0))], qk.MAX_HDRI_VALUE = 4096, qk.PRESERVE_CLAMPED_COLORS = !1
  },
  41753: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      DDSTools: () => ek
    });
    var Xk = Ik(37189),
      Tk = Ik(38674),
      ik = Ik(41761),
      yk = Ik(40064);
    const lk = 131072,
      ak = 131072;

    function qk(kk) {
      return kk.charCodeAt(0) + (kk.charCodeAt(1) << 8) + (kk.charCodeAt(2) << 16) + (kk.charCodeAt(3) << 24)
    }
    const Lk = qk("DXT1"),
      tk = qk("DXT3"),
      Zk = qk("DXT5"),
      jk = qk("DX10");
    class ek {
      static GetDDSInfo(kk) {
        const Fk = new Int32Array(kk.buffer, kk.byteOffset, 31),
          Ik = new Int32Array(kk.buffer, kk.byteOffset, 35);
        let Xk = 1;
        Fk[2] & lk && (Xk = Math.max(1, Fk[7]));
        const Tk = Fk[21],
          ik = Tk === jk ? Ik[32] : 0;
        let yk = 0;
        switch (Tk) {
          case 113:
            yk = 2;
            break;
          case 116:
            yk = 1;
            break;
          case jk:
            if (10 === ik) {
              yk = 2;
              break
            }
            if (2 === ik) {
              yk = 1;
              break
            }
        }
        return {
          width: Fk[4],
          height: Fk[3],
          mipmapCount: Xk,
          isFourCC: 4 === (4 & Fk[20]),
          isRGB: 64 === (64 & Fk[20]),
          isLuminance: (Fk[20] & ak) === ak,
          isCube: 512 === (512 & Fk[28]),
          isCompressed: Tk === Lk || Tk === tk || Tk === Zk,
          dxgiFormat: ik,
          textureType: yk
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(kk, Fk, Ik, Xk, Tk, ik) {
        const lk = new Float32Array(Xk),
          ak = new Uint16Array(Tk, Ik);
        let qk = 0;
        for (let Lk = 0; Lk < Fk; Lk++)
          for (let Fk = 0; Fk < kk; Fk++) {
            const Ik = 4 * (Fk + Lk * kk);
            lk[qk] = (0, yk.c)(ak[Ik]), lk[qk + 1] = (0, yk.c)(ak[Ik + 1]), lk[qk + 2] = (0, yk.c)(ak[Ik + 2]), ek.StoreLODInAlphaChannel ? lk[qk + 3] = ik : lk[qk + 3] = (0, yk.c)(ak[Ik + 3]), qk += 4
          }
        return lk
      }
      static _GetHalfFloatRGBAArrayBuffer(kk, Fk, Ik, Xk, Tk, ik) {
        if (ek.StoreLODInAlphaChannel) {
          const lk = new Uint16Array(Xk),
            ak = new Uint16Array(Tk, Ik);
          let qk = 0;
          for (let Ik = 0; Ik < Fk; Ik++)
            for (let Fk = 0; Fk < kk; Fk++) {
              const Xk = 4 * (Fk + Ik * kk);
              lk[qk] = ak[Xk], lk[qk + 1] = ak[Xk + 1], lk[qk + 2] = ak[Xk + 2], lk[qk + 3] = (0, yk.i)(ik), qk += 4
            }
          return lk
        }
        return new Uint16Array(Tk, Ik, Xk)
      }
      static _GetFloatRGBAArrayBuffer(kk, Fk, Ik, Xk, Tk, ik) {
        if (ek.StoreLODInAlphaChannel) {
          const yk = new Float32Array(Xk),
            lk = new Float32Array(Tk, Ik);
          let ak = 0;
          for (let Ik = 0; Ik < Fk; Ik++)
            for (let Fk = 0; Fk < kk; Fk++) {
              const Xk = 4 * (Fk + Ik * kk);
              yk[ak] = lk[Xk], yk[ak + 1] = lk[Xk + 1], yk[ak + 2] = lk[Xk + 2], yk[ak + 3] = ik, ak += 4
            }
          return yk
        }
        return new Float32Array(Tk, Ik, Xk)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(kk, Fk, Ik, Xk, Tk, ik) {
        const lk = new Uint16Array(Xk),
          ak = new Float32Array(Tk, Ik);
        let qk = 0;
        for (let Lk = 0; Lk < Fk; Lk++)
          for (let Fk = 0; Fk < kk; Fk++) lk[qk] = (0, yk.i)(ak[qk]), lk[qk + 1] = (0, yk.i)(ak[qk + 1]), lk[qk + 2] = (0, yk.i)(ak[qk + 2]), ek.StoreLODInAlphaChannel ? lk[qk + 3] = (0, yk.i)(ik) : lk[qk + 3] = (0, yk.i)(ak[qk + 3]), qk += 4;
        return lk
      }
      static _GetFloatAsUIntRGBAArrayBuffer(kk, Fk, Ik, Tk, ik, yk) {
        const lk = new Uint8Array(Tk),
          ak = new Float32Array(ik, Ik);
        let qk = 0;
        for (let Lk = 0; Lk < Fk; Lk++)
          for (let Fk = 0; Fk < kk; Fk++) {
            const Ik = 4 * (Fk + Lk * kk);
            lk[qk] = 255 * (0, Xk.Clamp)(ak[Ik]), lk[qk + 1] = 255 * (0, Xk.Clamp)(ak[Ik + 1]), lk[qk + 2] = 255 * (0, Xk.Clamp)(ak[Ik + 2]), ek.StoreLODInAlphaChannel ? lk[qk + 3] = yk : lk[qk + 3] = 255 * (0, Xk.Clamp)(ak[Ik + 3]), qk += 4
          }
        return lk
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(kk, Fk, Ik, Tk, ik, lk) {
        const ak = new Uint8Array(Tk),
          qk = new Uint16Array(ik, Ik);
        let Lk = 0;
        for (let tk = 0; tk < Fk; tk++)
          for (let Fk = 0; Fk < kk; Fk++) {
            const Ik = 4 * (Fk + tk * kk);
            ak[Lk] = 255 * (0, Xk.Clamp)((0, yk.c)(qk[Ik])), ak[Lk + 1] = 255 * (0, Xk.Clamp)((0, yk.c)(qk[Ik + 1])), ak[Lk + 2] = 255 * (0, Xk.Clamp)((0, yk.c)(qk[Ik + 2])), ek.StoreLODInAlphaChannel ? ak[Lk + 3] = lk : ak[Lk + 3] = 255 * (0, Xk.Clamp)((0, yk.c)(qk[Ik + 3])), Lk += 4
          }
        return ak
      }
      static _GetRGBAArrayBuffer(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak) {
        const qk = new Uint8Array(Xk),
          Lk = new Uint8Array(Tk, Ik);
        let tk = 0;
        for (let Zk = 0; Zk < Fk; Zk++)
          for (let Fk = 0; Fk < kk; Fk++) {
            const Ik = 4 * (Fk + Zk * kk);
            qk[tk] = Lk[Ik + ik], qk[tk + 1] = Lk[Ik + yk], qk[tk + 2] = Lk[Ik + lk], qk[tk + 3] = Lk[Ik + ak], tk += 4
          }
        return qk
      }
      static _ExtractLongWordOrder(kk) {
        return 0 === kk || 255 === kk || -16777216 === kk ? 0 : 1 + ek._ExtractLongWordOrder(kk >> 8)
      }
      static _GetRGBArrayBuffer(kk, Fk, Ik, Xk, Tk, ik, yk, lk) {
        const ak = new Uint8Array(Xk),
          qk = new Uint8Array(Tk, Ik);
        let Lk = 0;
        for (let tk = 0; tk < Fk; tk++)
          for (let Fk = 0; Fk < kk; Fk++) {
            const Ik = 3 * (Fk + tk * kk);
            ak[Lk] = qk[Ik + ik], ak[Lk + 1] = qk[Ik + yk], ak[Lk + 2] = qk[Ik + lk], Lk += 3
          }
        return ak
      }
      static _GetLuminanceArrayBuffer(kk, Fk, Ik, Xk, Tk) {
        const ik = new Uint8Array(Xk),
          yk = new Uint8Array(Tk, Ik);
        let lk = 0;
        for (let ak = 0; ak < Fk; ak++)
          for (let Fk = 0; Fk < kk; Fk++) {
            const Ik = Fk + ak * kk;
            ik[lk] = yk[Ik], lk++
          }
        return ik
      }
      static UploadDDSLevels(kk, Fk, Ik, Xk, yk, ak) {
        let qk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          wk = arguments.length > 7 ? arguments[7] : void 0,
          Hk = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          Jk = null;
        Xk.sphericalPolynomial && (Jk = []);
        const xk = !!kk.getCaps().s3tc;
        Fk.generateMipMaps = yk;
        const Pk = new Int32Array(Ik.buffer, Ik.byteOffset, 31);
        let Kk, Qk, sk, Vk, zk, Sk, vk, Ek = 0,
          Ok = 0,
          nk = 1;
        if (542327876 !== Pk[0]) return void Tk.e.Error("Invalid magic number in DDS header");
        if (!Xk.isFourCC && !Xk.isRGB && !Xk.isLuminance) return void Tk.e.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (Xk.isCompressed && !xk) return void Tk.e.Error("Compressed textures are not supported on this platform.");
        let Gk = Pk[22];
        Vk = Pk[1] + 4;
        let pk = !1;
        if (Xk.isFourCC) switch (Kk = Pk[21], Kk) {
          case Lk:
            nk = 8, Ok = 33777;
            break;
          case tk:
            nk = 16, Ok = 33778;
            break;
          case Zk:
            nk = 16, Ok = 33779;
            break;
          case 113:
            pk = !0, Gk = 64;
            break;
          case 116:
            pk = !0, Gk = 128;
            break;
          case jk: {
            Vk += 20;
            let kk = !1;
            switch (Xk.dxgiFormat) {
              case 10:
                pk = !0, Gk = 64, kk = !0;
                break;
              case 2:
                pk = !0, Gk = 128, kk = !0;
                break;
              case 88:
                Xk.isRGB = !0, Xk.isFourCC = !1, Gk = 32, kk = !0
            }
            if (kk) break
          }
          default:
            return void Tk.e.Error(["Unsupported FourCC code:", (uk = Kk, String.fromCharCode(255 & uk, uk >> 8 & 255, uk >> 16 & 255, uk >> 24 & 255))])
        }
        var uk;
        const bk = ek._ExtractLongWordOrder(Pk[23]),
          Rk = ek._ExtractLongWordOrder(Pk[24]),
          Uk = ek._ExtractLongWordOrder(Pk[25]),
          Ck = ek._ExtractLongWordOrder(Pk[26]);
        pk && (Ok = kk._getRGBABufferInternalSizedFormat(Xk.textureType)), Sk = 1, Pk[2] & lk && !1 !== yk && (Sk = Math.max(1, Pk[7]));
        const Nk = wk || 0,
          ck = kk.getCaps();
        for (let Tk = Nk; Tk < ak; Tk++) {
          for (Qk = Pk[4], sk = Pk[3], vk = 0; vk < Sk; ++vk) {
            if (-1 === qk || qk === vk) {
              const ik = -1 === qk ? vk : 0;
              if (!Xk.isCompressed && Xk.isFourCC) {
                Fk.format = 5, Ek = Qk * sk * 4;
                let Xk = null;
                if (kk._badOS || kk._badDesktopOS || !ck.textureHalfFloat && !ck.textureFloat) 128 === Gk ? (Xk = ek._GetFloatAsUIntRGBAArrayBuffer(Qk, sk, Ik.byteOffset + Vk, Ek, Ik.buffer, ik), Jk && 0 == ik && Jk.push(ek._GetFloatRGBAArrayBuffer(Qk, sk, Ik.byteOffset + Vk, Ek, Ik.buffer, ik))) : 64 === Gk && (Xk = ek._GetHalfFloatAsUIntRGBAArrayBuffer(Qk, sk, Ik.byteOffset + Vk, Ek, Ik.buffer, ik), Jk && 0 == ik && Jk.push(ek._GetHalfFloatAsFloatRGBAArrayBuffer(Qk, sk, Ik.byteOffset + Vk, Ek, Ik.buffer, ik))), Fk.type = 0;
                else {
                  const kk = ck.textureFloat && (Hk && ck.textureFloatLinearFiltering || !Hk),
                    Tk = ck.textureHalfFloat && (Hk && ck.textureHalfFloatLinearFiltering || !Hk),
                    yk = (128 === Gk || 64 === Gk && !Tk) && kk ? 1 : (64 === Gk || 128 === Gk && !kk) && Tk ? 2 : 0;
                  let lk, ak = null;
                  if (128 === Gk) switch (yk) {
                    case 1:
                      lk = ek._GetFloatRGBAArrayBuffer, ak = null;
                      break;
                    case 2:
                      lk = ek._GetFloatAsHalfFloatRGBAArrayBuffer, ak = ek._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      lk = ek._GetFloatAsUIntRGBAArrayBuffer, ak = ek._GetFloatRGBAArrayBuffer
                  } else switch (yk) {
                    case 1:
                      lk = ek._GetHalfFloatAsFloatRGBAArrayBuffer, ak = null;
                      break;
                    case 2:
                      lk = ek._GetHalfFloatRGBAArrayBuffer, ak = ek._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      lk = ek._GetHalfFloatAsUIntRGBAArrayBuffer, ak = ek._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  Fk.type = yk, Xk = lk(Qk, sk, Ik.byteOffset + Vk, Ek, Ik.buffer, ik), Jk && 0 == ik && Jk.push(ak ? ak(Qk, sk, Ik.byteOffset + Vk, Ek, Ik.buffer, ik) : Xk)
                }
                Xk && kk._uploadDataToTextureDirectly(Fk, Xk, Tk, ik)
              } else if (Xk.isRGB) Fk.type = 0, 24 === Gk ? (Fk.format = 4, Ek = Qk * sk * 3, zk = ek._GetRGBArrayBuffer(Qk, sk, Ik.byteOffset + Vk, Ek, Ik.buffer, bk, Rk, Uk), kk._uploadDataToTextureDirectly(Fk, zk, Tk, ik)) : (Fk.format = 5, Ek = Qk * sk * 4, zk = ek._GetRGBAArrayBuffer(Qk, sk, Ik.byteOffset + Vk, Ek, Ik.buffer, bk, Rk, Uk, Ck), kk._uploadDataToTextureDirectly(Fk, zk, Tk, ik));
              else if (Xk.isLuminance) {
                const Xk = kk._getUnpackAlignement(),
                  yk = Qk;
                Ek = Math.floor((Qk + Xk - 1) / Xk) * Xk * (sk - 1) + yk, zk = ek._GetLuminanceArrayBuffer(Qk, sk, Ik.byteOffset + Vk, Ek, Ik.buffer), Fk.format = 1, Fk.type = 0, kk._uploadDataToTextureDirectly(Fk, zk, Tk, ik)
              } else Ek = Math.max(4, Qk) / 4 * Math.max(4, sk) / 4 * nk, zk = new Uint8Array(Ik.buffer, Ik.byteOffset + Vk, Ek), Fk.type = 0, kk._uploadCompressedDataToTextureDirectly(Fk, Ok, Qk, sk, zk, Tk, ik)
            }
            Vk += Gk ? Qk * sk * (Gk / 8) : Ek, Qk *= .5, sk *= .5, Qk = Math.max(1, Qk), sk = Math.max(1, sk)
          }
          if (void 0 !== wk) break
        }
        Jk && Jk.length > 0 ? Xk.sphericalPolynomial = ik.b.ConvertCubeMapToSphericalPolynomial({
          size: Pk[4],
          right: Jk[0],
          left: Jk[1],
          up: Jk[2],
          down: Jk[3],
          front: Jk[4],
          back: Jk[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : Xk.sphericalPolynomial = void 0
      }
    }
    ek.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);