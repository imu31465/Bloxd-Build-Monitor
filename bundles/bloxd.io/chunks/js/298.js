export const id = 298;
export const ids = [297, 298];
export const modules = {
  41733: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      _DDSTextureLoader: () => Wd
    });
    var pd = kd(39952),
      Nd = kd(41719);
    class Wd {
      constructor() {
        this.supportCascades = !0
      }
      loadCubeData(dd, Jd, kd, Wd) {
        const Pd = Jd.eL();
        let Zd, gd = !1,
          Cd = 1e3;
        if (Array.isArray(dd))
          for (let pd = 0; pd < dd.length; pd++) {
            const kd = dd[pd];
            Zd = Nd.DDSTools.GetDDSInfo(kd), Jd.width = Zd.width, Jd.height = Zd.height, gd = (Zd.isRGB || Zd.isLuminance || Zd.mipmapCount > 1) && Jd.generateMipMaps, Pd._unpackFlipY(Zd.isCompressed), Nd.DDSTools.UploadDDSLevels(Pd, Jd, kd, Zd, gd, 6, -1, pd), Zd.isFourCC || 1 !== Zd.mipmapCount ? Cd = Zd.mipmapCount - 1 : Pd.generateMipMapsForCubemap(Jd)
          } else {
            const Wd = dd;
            Zd = Nd.DDSTools.GetDDSInfo(Wd), Jd.width = Zd.width, Jd.height = Zd.height, kd && (Zd.sphericalPolynomial = new pd.f), gd = (Zd.isRGB || Zd.isLuminance || Zd.mipmapCount > 1) && Jd.generateMipMaps, Pd._unpackFlipY(Zd.isCompressed), Nd.DDSTools.UploadDDSLevels(Pd, Jd, Wd, Zd, gd, 6), Zd.isFourCC || 1 !== Zd.mipmapCount ? Cd = Zd.mipmapCount - 1 : Pd.generateMipMapsForCubemap(Jd, !1)
          }
        Pd._setCubeMapTextureParams(Jd, gd, Cd), Jd.isReady = !0, Jd.onLoadedObservable.notifyObservers(Jd), Jd.onLoadedObservable.clear(), Wd && Wd({
          isDDS: !0,
          width: Jd.width,
          info: Zd,
          data: dd,
          texture: Jd
        })
      }
      loadData(dd, Jd, kd) {
        const pd = Nd.DDSTools.GetDDSInfo(dd),
          Wd = (pd.isRGB || pd.isLuminance || pd.mipmapCount > 1) && Jd.generateMipMaps && Math.max(pd.width, pd.height) >> pd.mipmapCount - 1 === 1;
        kd(pd.width, pd.height, Wd, pd.isFourCC, (() => {
          Nd.DDSTools.UploadDDSLevels(Jd.eL(), Jd, dd, pd, Wd, 1)
        }))
      }
    }
  },
  41722: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Cd
    });
    var pd = kd(37251),
      Nd = kd(37289),
      Wd = kd(39952),
      Pd = kd(37259),
      Zd = kd(37443);
    class gd {
      constructor(dd, Jd, kd, pd) {
        this.name = dd, this.worldAxisForNormal = Jd, this.worldAxisForFileX = kd, this.worldAxisForFileY = pd
      }
    }
    class Cd {
      static _NearestPow2Floor(dd) {
        return dd <= 1 ? 1 : 1 << Math.floor(Math.log2(dd))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(dd) {
        if (!dd.isCube) return null;
        dd.Wm()?.eL().flushFramebuffer();
        const Jd = dd.getSize().width,
          kd = dd._sphericalPolynomialTargetSize,
          pd = kd > 0 ? this._NearestPow2Floor(kd) : 0,
          Nd = !dd.noMipmap && !0 === dd._texture?.generateMipMaps,
          Wd = pd > 0 && pd < Jd && Nd,
          Pd = Wd ? Math.max(0, Math.round(Math.log2(Jd / pd))) : 0,
          Zd = Wd ? Math.max(1, Math.floor(Jd / Math.pow(2, Pd))) : Jd,
          gd = dd.readPixels(0, Pd, void 0, !1),
          Cd = dd.readPixels(1, Pd, void 0, !1);
        let Kd, od;
        dd.isRenderTarget ? (Kd = dd.readPixels(3, Pd, void 0, !1), od = dd.readPixels(2, Pd, void 0, !1)) : (Kd = dd.readPixels(2, Pd, void 0, !1), od = dd.readPixels(3, Pd, void 0, !1));
        const ld = dd.readPixels(4, Pd, void 0, !1),
          Qd = dd.readPixels(5, Pd, void 0, !1),
          Ld = dd.gammaSpace,
          Od = pd > 0 && pd < Jd && !Wd;
        return new Promise((dd => {
          Promise.all([Cd, gd, Kd, od, ld, Qd]).then((kd => {
            let [Nd, Wd, Pd, gd, Cd, Kd] = kd, od = Zd;
            if (Od) {
              const dd = 4;
              Nd = this._DownsampleFace(Nd, Jd, pd, dd), Wd = this._DownsampleFace(Wd, Jd, pd, dd), Pd = this._DownsampleFace(Pd, Jd, pd, dd), gd = this._DownsampleFace(gd, Jd, pd, dd), Cd = this._DownsampleFace(Cd, Jd, pd, dd), Kd = this._DownsampleFace(Kd, Jd, pd, dd), od = pd
            }
            const ld = {
              size: od,
              right: Wd,
              left: Nd,
              up: Pd,
              down: gd,
              front: Cd,
              back: Kd,
              format: 5,
              type: Nd instanceof Float32Array ? 1 : 0,
              gammaSpace: Ld
            };
            dd(this.ConvertCubeMapToSphericalPolynomial(ld))
          }))
        }))
      }
      static _AreaElement(dd, Jd) {
        return Math.atan2(dd * Jd, Math.sqrt(dd * dd + Jd * Jd + 1))
      }
      static _DownsampleFace(dd, Jd, kd, pd) {
        const Nd = dd instanceof Float32Array ? dd : Float32Array.from(dd),
          Wd = kd * kd * pd,
          Pd = new Float32Array(Wd),
          Zd = Jd / kd,
          gd = 1 / (Zd * Zd);
        for (let Kd = 0; Kd < kd; Kd++) {
          const dd = Math.floor(Kd * Zd),
            Wd = Math.floor((Kd + 1) * Zd);
          for (let Cd = 0; Cd < kd; Cd++) {
            const od = Math.floor(Cd * Zd),
              ld = Math.floor((Cd + 1) * Zd),
              Qd = (Kd * kd + Cd) * pd;
            for (let kd = 0; kd < pd; kd++) {
              let Zd = 0;
              for (let Pd = dd; Pd < Wd; Pd++)
                for (let dd = od; dd < ld; dd++) Zd += Nd[(Pd * Jd + dd) * pd + kd];
              Pd[Qd + kd] = Zd * gd
            }
          }
        }
        if (dd instanceof Float32Array) return Pd;
        const Cd = new(0, dd.constructor)(Wd);
        for (let Kd = 0; Kd < Wd; Kd++) Cd[Kd] = Pd[Kd] + .5 | 0;
        return Cd
      }
      static ConvertCubeMapToSphericalPolynomial(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const kd = Jd > 0 ? this._NearestPow2Floor(Jd) : 0;
        if (kd > 0 && dd.size > kd) {
          const Jd = 5 === dd.format ? 4 : 3,
            pd = ["right", "left", "up", "down", "front", "back"],
            Nd = {};
          for (const Wd of pd) Nd[Wd] = this._DownsampleFace(dd[Wd], dd.size, kd, Jd);
          dd = {
            ...dd,
            ...Nd,
            size: kd
          }
        }
        const pd = new Wd.b;
        let gd = 0;
        const Cd = 2 / dd.size,
          Kd = Cd,
          od = .5 * Cd,
          ld = od - 1;
        for (let Wd = 0; Wd < 6; Wd++) {
          const Jd = this._FileFaces[Wd],
            kd = dd[Jd.name];
          let Qd = ld;
          const Ld = 5 === dd.format ? 4 : 3;
          for (let Wd = 0; Wd < dd.size; Wd++) {
            let Od = ld;
            for (let Kd = 0; Kd < dd.size; Kd++) {
              const ld = Jd.worldAxisForFileX.scale(Od).add(Jd.worldAxisForFileY.scale(Qd)).add(Jd.worldAxisForNormal);
              ld.normalize();
              const ed = this._AreaElement(Od - od, Qd - od) - this._AreaElement(Od - od, Qd + od) - this._AreaElement(Od + od, Qd - od) + this._AreaElement(Od + od, Qd + od);
              let Rd = kd[Wd * dd.size * Ld + Kd * Ld + 0],
                Id = kd[Wd * dd.size * Ld + Kd * Ld + 1],
                Gd = kd[Wd * dd.size * Ld + Kd * Ld + 2];
              isNaN(Rd) && (Rd = 0), isNaN(Id) && (Id = 0), isNaN(Gd) && (Gd = 0), 0 === dd.type && (Rd /= 255, Id /= 255, Gd /= 255), dd.gammaSpace && (Rd = Math.pow((0, Nd.Clamp)(Rd), Pd.h), Id = Math.pow((0, Nd.Clamp)(Id), Pd.h), Gd = Math.pow((0, Nd.Clamp)(Gd), Pd.h));
              const vd = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const dd = Math.max(Rd, Id, Gd);
                if (dd > vd) {
                  const Jd = vd / dd;
                  Rd *= Jd, Id *= Jd, Gd *= Jd
                }
              } else Rd = (0, Nd.Clamp)(Rd, 0, vd), Id = (0, Nd.Clamp)(Id, 0, vd), Gd = (0, Nd.Clamp)(Gd, 0, vd);
              const xd = new Zd.c(Rd, Id, Gd);
              pd.addLight(ld, xd, ed), gd += ed, Od += Cd
            }
            Qd += Kd
          }
        }
        const Qd = 6 * (4 * Math.PI) / 6 / gd;
        return pd.scaleInPlace(Qd), pd.convertIncidentRadianceToIrradiance(), pd.convertIrradianceToLambertianRadiance(), Wd.f.FromHarmonics(pd)
      }
    }
    Cd._FileFaces = [new gd("right", new pd.n(1, 0, 0), new pd.n(0, 0, -1), new pd.n(0, -1, 0)), new gd("left", new pd.n(-1, 0, 0), new pd.n(0, 0, 1), new pd.n(0, -1, 0)), new gd("up", new pd.n(0, 1, 0), new pd.n(1, 0, 0), new pd.n(0, 0, 1)), new gd("down", new pd.n(0, -1, 0), new pd.n(1, 0, 0), new pd.n(0, 0, -1)), new gd("front", new pd.n(0, 0, 1), new pd.n(1, 0, 0), new pd.n(0, -1, 0)), new gd("back", new pd.n(0, 0, -1), new pd.n(-1, 0, 0), new pd.n(0, -1, 0))], Cd.MAX_HDRI_VALUE = 4096, Cd.PRESERVE_CLAMPED_COLORS = !1
  },
  41719: (dd, Jd, kd) => {
    kd.d(Jd, {
      DDSTools: () => Ld
    });
    var pd = kd(37289),
      Nd = kd(38812),
      Wd = kd(41722),
      Pd = kd(40037);
    const Zd = 131072,
      gd = 131072;

    function Cd(dd) {
      return dd.charCodeAt(0) + (dd.charCodeAt(1) << 8) + (dd.charCodeAt(2) << 16) + (dd.charCodeAt(3) << 24)
    }
    const Kd = Cd("DXT1"),
      od = Cd("DXT3"),
      ld = Cd("DXT5"),
      Qd = Cd("DX10");
    class Ld {
      static GetDDSInfo(dd) {
        const Jd = new Int32Array(dd.buffer, dd.byteOffset, 31),
          kd = new Int32Array(dd.buffer, dd.byteOffset, 35);
        let pd = 1;
        Jd[2] & Zd && (pd = Math.max(1, Jd[7]));
        const Nd = Jd[21],
          Wd = Nd === Qd ? kd[32] : 0;
        let Pd = 0;
        switch (Nd) {
          case 113:
            Pd = 2;
            break;
          case 116:
            Pd = 1;
            break;
          case Qd:
            if (10 === Wd) {
              Pd = 2;
              break
            }
            if (2 === Wd) {
              Pd = 1;
              break
            }
        }
        return {
          width: Jd[4],
          height: Jd[3],
          mipmapCount: pd,
          isFourCC: 4 === (4 & Jd[20]),
          isRGB: 64 === (64 & Jd[20]),
          isLuminance: (Jd[20] & gd) === gd,
          isCube: 512 === (512 & Jd[28]),
          isCompressed: Nd === Kd || Nd === od || Nd === ld,
          dxgiFormat: Wd,
          textureType: Pd
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(dd, Jd, kd, pd, Nd, Wd) {
        const Zd = new Float32Array(pd),
          gd = new Uint16Array(Nd, kd);
        let Cd = 0;
        for (let Kd = 0; Kd < Jd; Kd++)
          for (let Jd = 0; Jd < dd; Jd++) {
            const kd = 4 * (Jd + Kd * dd);
            Zd[Cd] = (0, Pd.e)(gd[kd]), Zd[Cd + 1] = (0, Pd.e)(gd[kd + 1]), Zd[Cd + 2] = (0, Pd.e)(gd[kd + 2]), Ld.StoreLODInAlphaChannel ? Zd[Cd + 3] = Wd : Zd[Cd + 3] = (0, Pd.e)(gd[kd + 3]), Cd += 4
          }
        return Zd
      }
      static _GetHalfFloatRGBAArrayBuffer(dd, Jd, kd, pd, Nd, Wd) {
        if (Ld.StoreLODInAlphaChannel) {
          const Zd = new Uint16Array(pd),
            gd = new Uint16Array(Nd, kd);
          let Cd = 0;
          for (let kd = 0; kd < Jd; kd++)
            for (let Jd = 0; Jd < dd; Jd++) {
              const pd = 4 * (Jd + kd * dd);
              Zd[Cd] = gd[pd], Zd[Cd + 1] = gd[pd + 1], Zd[Cd + 2] = gd[pd + 2], Zd[Cd + 3] = (0, Pd.l)(Wd), Cd += 4
            }
          return Zd
        }
        return new Uint16Array(Nd, kd, pd)
      }
      static _GetFloatRGBAArrayBuffer(dd, Jd, kd, pd, Nd, Wd) {
        if (Ld.StoreLODInAlphaChannel) {
          const Pd = new Float32Array(pd),
            Zd = new Float32Array(Nd, kd);
          let gd = 0;
          for (let kd = 0; kd < Jd; kd++)
            for (let Jd = 0; Jd < dd; Jd++) {
              const pd = 4 * (Jd + kd * dd);
              Pd[gd] = Zd[pd], Pd[gd + 1] = Zd[pd + 1], Pd[gd + 2] = Zd[pd + 2], Pd[gd + 3] = Wd, gd += 4
            }
          return Pd
        }
        return new Float32Array(Nd, kd, pd)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(dd, Jd, kd, pd, Nd, Wd) {
        const Zd = new Uint16Array(pd),
          gd = new Float32Array(Nd, kd);
        let Cd = 0;
        for (let Kd = 0; Kd < Jd; Kd++)
          for (let Jd = 0; Jd < dd; Jd++) Zd[Cd] = (0, Pd.l)(gd[Cd]), Zd[Cd + 1] = (0, Pd.l)(gd[Cd + 1]), Zd[Cd + 2] = (0, Pd.l)(gd[Cd + 2]), Ld.StoreLODInAlphaChannel ? Zd[Cd + 3] = (0, Pd.l)(Wd) : Zd[Cd + 3] = (0, Pd.l)(gd[Cd + 3]), Cd += 4;
        return Zd
      }
      static _GetFloatAsUIntRGBAArrayBuffer(dd, Jd, kd, Nd, Wd, Pd) {
        const Zd = new Uint8Array(Nd),
          gd = new Float32Array(Wd, kd);
        let Cd = 0;
        for (let Kd = 0; Kd < Jd; Kd++)
          for (let Jd = 0; Jd < dd; Jd++) {
            const kd = 4 * (Jd + Kd * dd);
            Zd[Cd] = 255 * (0, pd.Clamp)(gd[kd]), Zd[Cd + 1] = 255 * (0, pd.Clamp)(gd[kd + 1]), Zd[Cd + 2] = 255 * (0, pd.Clamp)(gd[kd + 2]), Ld.StoreLODInAlphaChannel ? Zd[Cd + 3] = Pd : Zd[Cd + 3] = 255 * (0, pd.Clamp)(gd[kd + 3]), Cd += 4
          }
        return Zd
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(dd, Jd, kd, Nd, Wd, Zd) {
        const gd = new Uint8Array(Nd),
          Cd = new Uint16Array(Wd, kd);
        let Kd = 0;
        for (let od = 0; od < Jd; od++)
          for (let Jd = 0; Jd < dd; Jd++) {
            const kd = 4 * (Jd + od * dd);
            gd[Kd] = 255 * (0, pd.Clamp)((0, Pd.e)(Cd[kd])), gd[Kd + 1] = 255 * (0, pd.Clamp)((0, Pd.e)(Cd[kd + 1])), gd[Kd + 2] = 255 * (0, pd.Clamp)((0, Pd.e)(Cd[kd + 2])), Ld.StoreLODInAlphaChannel ? gd[Kd + 3] = Zd : gd[Kd + 3] = 255 * (0, pd.Clamp)((0, Pd.e)(Cd[kd + 3])), Kd += 4
          }
        return gd
      }
      static _GetRGBAArrayBuffer(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd) {
        const Cd = new Uint8Array(pd),
          Kd = new Uint8Array(Nd, kd);
        let od = 0;
        for (let ld = 0; ld < Jd; ld++)
          for (let Jd = 0; Jd < dd; Jd++) {
            const kd = 4 * (Jd + ld * dd);
            Cd[od] = Kd[kd + Wd], Cd[od + 1] = Kd[kd + Pd], Cd[od + 2] = Kd[kd + Zd], Cd[od + 3] = Kd[kd + gd], od += 4
          }
        return Cd
      }
      static _ExtractLongWordOrder(dd) {
        return 0 === dd || 255 === dd || -16777216 === dd ? 0 : 1 + Ld._ExtractLongWordOrder(dd >> 8)
      }
      static _GetRGBArrayBuffer(dd, Jd, kd, pd, Nd, Wd, Pd, Zd) {
        const gd = new Uint8Array(pd),
          Cd = new Uint8Array(Nd, kd);
        let Kd = 0;
        for (let od = 0; od < Jd; od++)
          for (let Jd = 0; Jd < dd; Jd++) {
            const kd = 3 * (Jd + od * dd);
            gd[Kd] = Cd[kd + Wd], gd[Kd + 1] = Cd[kd + Pd], gd[Kd + 2] = Cd[kd + Zd], Kd += 3
          }
        return gd
      }
      static _GetLuminanceArrayBuffer(dd, Jd, kd, pd, Nd) {
        const Wd = new Uint8Array(pd),
          Pd = new Uint8Array(Nd, kd);
        let Zd = 0;
        for (let gd = 0; gd < Jd; gd++)
          for (let Jd = 0; Jd < dd; Jd++) {
            const kd = Jd + gd * dd;
            Wd[Zd] = Pd[kd], Zd++
          }
        return Wd
      }
      static UploadDDSLevels(dd, Jd, kd, pd, Pd, gd) {
        let Cd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          Od = arguments.length > 7 ? arguments[7] : void 0,
          ed = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          Rd = null;
        pd.sphericalPolynomial && (Rd = []);
        const Id = !!dd.getCaps().s3tc;
        Jd.generateMipMaps = Pd;
        const Gd = new Int32Array(kd.buffer, kd.byteOffset, 31);
        let vd, xd, qd, Bd, sd, ad, Md, Fd = 0,
          Yd = 0,
          md = 1;
        if (542327876 !== Gd[0]) return void Nd.c.Error("Invalid magic number in DDS header");
        if (!pd.isFourCC && !pd.isRGB && !pd.isLuminance) return void Nd.c.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (pd.isCompressed && !Id) return void Nd.c.Error("Compressed textures are not supported on this platform.");
        let bd = Gd[22];
        Bd = Gd[1] + 4;
        let Sd = !1;
        if (pd.isFourCC) switch (vd = Gd[21], vd) {
          case Kd:
            md = 8, Yd = 33777;
            break;
          case od:
            md = 16, Yd = 33778;
            break;
          case ld:
            md = 16, Yd = 33779;
            break;
          case 113:
            Sd = !0, bd = 64;
            break;
          case 116:
            Sd = !0, bd = 128;
            break;
          case Qd: {
            Bd += 20;
            let dd = !1;
            switch (pd.dxgiFormat) {
              case 10:
                Sd = !0, bd = 64, dd = !0;
                break;
              case 2:
                Sd = !0, bd = 128, dd = !0;
                break;
              case 88:
                pd.isRGB = !0, pd.isFourCC = !1, bd = 32, dd = !0
            }
            if (dd) break
          }
          default:
            return void Nd.c.Error(["Unsupported FourCC code:", (jd = vd, String.fromCharCode(255 & jd, jd >> 8 & 255, jd >> 16 & 255, jd >> 24 & 255))])
        }
        var jd;
        const Xd = Ld._ExtractLongWordOrder(Gd[23]),
          fd = Ld._ExtractLongWordOrder(Gd[24]),
          nd = Ld._ExtractLongWordOrder(Gd[25]),
          Ud = Ld._ExtractLongWordOrder(Gd[26]);
        Sd && (Yd = dd._getRGBABufferInternalSizedFormat(pd.textureType)), ad = 1, Gd[2] & Zd && !1 !== Pd && (ad = Math.max(1, Gd[7]));
        const yd = Od || 0,
          Dd = dd.getCaps();
        for (let Nd = yd; Nd < gd; Nd++) {
          for (xd = Gd[4], qd = Gd[3], Md = 0; Md < ad; ++Md) {
            if (-1 === Cd || Cd === Md) {
              const Wd = -1 === Cd ? Md : 0;
              if (!pd.isCompressed && pd.isFourCC) {
                Jd.format = 5, Fd = xd * qd * 4;
                let pd = null;
                if (dd._badOS || dd._badDesktopOS || !Dd.textureHalfFloat && !Dd.textureFloat) 128 === bd ? (pd = Ld._GetFloatAsUIntRGBAArrayBuffer(xd, qd, kd.byteOffset + Bd, Fd, kd.buffer, Wd), Rd && 0 == Wd && Rd.push(Ld._GetFloatRGBAArrayBuffer(xd, qd, kd.byteOffset + Bd, Fd, kd.buffer, Wd))) : 64 === bd && (pd = Ld._GetHalfFloatAsUIntRGBAArrayBuffer(xd, qd, kd.byteOffset + Bd, Fd, kd.buffer, Wd), Rd && 0 == Wd && Rd.push(Ld._GetHalfFloatAsFloatRGBAArrayBuffer(xd, qd, kd.byteOffset + Bd, Fd, kd.buffer, Wd))), Jd.type = 0;
                else {
                  const dd = Dd.textureFloat && (ed && Dd.textureFloatLinearFiltering || !ed),
                    Nd = Dd.textureHalfFloat && (ed && Dd.textureHalfFloatLinearFiltering || !ed),
                    Pd = (128 === bd || 64 === bd && !Nd) && dd ? 1 : (64 === bd || 128 === bd && !dd) && Nd ? 2 : 0;
                  let Zd, gd = null;
                  if (128 === bd) switch (Pd) {
                    case 1:
                      Zd = Ld._GetFloatRGBAArrayBuffer, gd = null;
                      break;
                    case 2:
                      Zd = Ld._GetFloatAsHalfFloatRGBAArrayBuffer, gd = Ld._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      Zd = Ld._GetFloatAsUIntRGBAArrayBuffer, gd = Ld._GetFloatRGBAArrayBuffer
                  } else switch (Pd) {
                    case 1:
                      Zd = Ld._GetHalfFloatAsFloatRGBAArrayBuffer, gd = null;
                      break;
                    case 2:
                      Zd = Ld._GetHalfFloatRGBAArrayBuffer, gd = Ld._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      Zd = Ld._GetHalfFloatAsUIntRGBAArrayBuffer, gd = Ld._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  Jd.type = Pd, pd = Zd(xd, qd, kd.byteOffset + Bd, Fd, kd.buffer, Wd), Rd && 0 == Wd && Rd.push(gd ? gd(xd, qd, kd.byteOffset + Bd, Fd, kd.buffer, Wd) : pd)
                }
                pd && dd._uploadDataToTextureDirectly(Jd, pd, Nd, Wd)
              } else if (pd.isRGB) Jd.type = 0, 24 === bd ? (Jd.format = 4, Fd = xd * qd * 3, sd = Ld._GetRGBArrayBuffer(xd, qd, kd.byteOffset + Bd, Fd, kd.buffer, Xd, fd, nd), dd._uploadDataToTextureDirectly(Jd, sd, Nd, Wd)) : (Jd.format = 5, Fd = xd * qd * 4, sd = Ld._GetRGBAArrayBuffer(xd, qd, kd.byteOffset + Bd, Fd, kd.buffer, Xd, fd, nd, Ud), dd._uploadDataToTextureDirectly(Jd, sd, Nd, Wd));
              else if (pd.isLuminance) {
                const pd = dd._getUnpackAlignement(),
                  Pd = xd;
                Fd = Math.floor((xd + pd - 1) / pd) * pd * (qd - 1) + Pd, sd = Ld._GetLuminanceArrayBuffer(xd, qd, kd.byteOffset + Bd, Fd, kd.buffer), Jd.format = 1, Jd.type = 0, dd._uploadDataToTextureDirectly(Jd, sd, Nd, Wd)
              } else Fd = Math.max(4, xd) / 4 * Math.max(4, qd) / 4 * md, sd = new Uint8Array(kd.buffer, kd.byteOffset + Bd, Fd), Jd.type = 0, dd._uploadCompressedDataToTextureDirectly(Jd, Yd, xd, qd, sd, Nd, Wd)
            }
            Bd += bd ? xd * qd * (bd / 8) : Fd, xd *= .5, qd *= .5, xd = Math.max(1, xd), qd = Math.max(1, qd)
          }
          if (void 0 !== Od) break
        }
        Rd && Rd.length > 0 ? pd.sphericalPolynomial = Wd.b.ConvertCubeMapToSphericalPolynomial({
          size: Gd[4],
          right: Rd[0],
          left: Rd[1],
          up: Rd[2],
          down: Rd[3],
          front: Rd[4],
          back: Rd[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : pd.sphericalPolynomial = void 0
      }
    }
    Ld.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);