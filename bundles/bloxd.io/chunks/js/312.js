export const id = 312;
export const ids = [311, 312];
export const modules = {
  42055: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      _DDSTextureLoader: () => Zu
    });
    var su = ju(40245),
      Uu = ju(42032);
    class Zu {
      constructor() {
        this.supportCascades = !0
      }
      loadCubeData(uu, Eu, ju, Zu) {
        const Xu = Eu.wO();
        let lu, qu = !1,
          fu = 1e3;
        if (Array.isArray(uu))
          for (let su = 0; su < uu.length; su++) {
            const ju = uu[su];
            lu = Uu.DDSTools.GetDDSInfo(ju), Eu.width = lu.width, Eu.height = lu.height, qu = (lu.isRGB || lu.isLuminance || lu.mipmapCount > 1) && Eu.generateMipMaps, Xu._unpackFlipY(lu.isCompressed), Uu.DDSTools.UploadDDSLevels(Xu, Eu, ju, lu, qu, 6, -1, su), lu.isFourCC || 1 !== lu.mipmapCount ? fu = lu.mipmapCount - 1 : Xu.generateMipMapsForCubemap(Eu)
          } else {
            const Zu = uu;
            lu = Uu.DDSTools.GetDDSInfo(Zu), Eu.width = lu.width, Eu.height = lu.height, ju && (lu.sphericalPolynomial = new su.e), qu = (lu.isRGB || lu.isLuminance || lu.mipmapCount > 1) && Eu.generateMipMaps, Xu._unpackFlipY(lu.isCompressed), Uu.DDSTools.UploadDDSLevels(Xu, Eu, Zu, lu, qu, 6), lu.isFourCC || 1 !== lu.mipmapCount ? fu = lu.mipmapCount - 1 : Xu.generateMipMapsForCubemap(Eu, !1)
          }
        Xu._setCubeMapTextureParams(Eu, qu, fu), Eu.isReady = !0, Eu.onLoadedObservable.notifyObservers(Eu), Eu.onLoadedObservable.clear(), Zu && Zu({
          isDDS: !0,
          width: Eu.width,
          info: lu,
          data: uu,
          texture: Eu
        })
      }
      loadData(uu, Eu, ju) {
        const su = Uu.DDSTools.GetDDSInfo(uu),
          Zu = (su.isRGB || su.isLuminance || su.mipmapCount > 1) && Eu.generateMipMaps && Math.max(su.width, su.height) >> su.mipmapCount - 1 === 1;
        ju(su.width, su.height, Zu, su.isFourCC, (() => {
          Uu.DDSTools.UploadDDSLevels(Eu.wO(), Eu, uu, su, Zu, 1)
        }))
      }
    }
  },
  42037: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => fu
    });
    var su = ju(37494),
      Uu = ju(37519),
      Zu = ju(40245),
      Xu = ju(37496),
      lu = ju(37680);
    class qu {
      constructor(uu, Eu, ju, su) {
        this.name = uu, this.worldAxisForNormal = Eu, this.worldAxisForFileX = ju, this.worldAxisForFileY = su
      }
    }
    class fu {
      static _NearestPow2Floor(uu) {
        return uu <= 1 ? 1 : 1 << Math.floor(Math.log2(uu))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(uu) {
        if (!uu.isCube) return null;
        uu.hV()?.wO().flushFramebuffer();
        const Eu = uu.getSize().width,
          ju = uu._sphericalPolynomialTargetSize,
          su = ju > 0 ? this._NearestPow2Floor(ju) : 0,
          Uu = !uu.noMipmap && !0 === uu._texture?.generateMipMaps,
          Zu = su > 0 && su < Eu && Uu,
          Xu = Zu ? Math.max(0, Math.round(Math.log2(Eu / su))) : 0,
          lu = Zu ? Math.max(1, Math.floor(Eu / Math.pow(2, Xu))) : Eu,
          qu = uu.readPixels(0, Xu, void 0, !1),
          fu = uu.readPixels(1, Xu, void 0, !1);
        let Cu, bu;
        uu.isRenderTarget ? (Cu = uu.readPixels(3, Xu, void 0, !1), bu = uu.readPixels(2, Xu, void 0, !1)) : (Cu = uu.readPixels(2, Xu, void 0, !1), bu = uu.readPixels(3, Xu, void 0, !1));
        const cu = uu.readPixels(4, Xu, void 0, !1),
          Nu = uu.readPixels(5, Xu, void 0, !1),
          Ou = uu.gammaSpace,
          Yu = su > 0 && su < Eu && !Zu;
        return new Promise((uu => {
          Promise.all([fu, qu, Cu, bu, cu, Nu]).then((ju => {
            let [Uu, Zu, Xu, qu, fu, Cu] = ju, bu = lu;
            if (Yu) {
              const uu = 4;
              Uu = this._DownsampleFace(Uu, Eu, su, uu), Zu = this._DownsampleFace(Zu, Eu, su, uu), Xu = this._DownsampleFace(Xu, Eu, su, uu), qu = this._DownsampleFace(qu, Eu, su, uu), fu = this._DownsampleFace(fu, Eu, su, uu), Cu = this._DownsampleFace(Cu, Eu, su, uu), bu = su
            }
            const cu = {
              size: bu,
              right: Zu,
              left: Uu,
              up: Xu,
              down: qu,
              front: fu,
              back: Cu,
              format: 5,
              type: Uu instanceof Float32Array ? 1 : 0,
              gammaSpace: Ou
            };
            uu(this.ConvertCubeMapToSphericalPolynomial(cu))
          }))
        }))
      }
      static _AreaElement(uu, Eu) {
        return Math.atan2(uu * Eu, Math.sqrt(uu * uu + Eu * Eu + 1))
      }
      static _DownsampleFace(uu, Eu, ju, su) {
        const Uu = uu instanceof Float32Array ? uu : Float32Array.from(uu),
          Zu = ju * ju * su,
          Xu = new Float32Array(Zu),
          lu = Eu / ju,
          qu = 1 / (lu * lu);
        for (let Cu = 0; Cu < ju; Cu++) {
          const uu = Math.floor(Cu * lu),
            Zu = Math.floor((Cu + 1) * lu);
          for (let fu = 0; fu < ju; fu++) {
            const bu = Math.floor(fu * lu),
              cu = Math.floor((fu + 1) * lu),
              Nu = (Cu * ju + fu) * su;
            for (let ju = 0; ju < su; ju++) {
              let lu = 0;
              for (let Xu = uu; Xu < Zu; Xu++)
                for (let uu = bu; uu < cu; uu++) lu += Uu[(Xu * Eu + uu) * su + ju];
              Xu[Nu + ju] = lu * qu
            }
          }
        }
        if (uu instanceof Float32Array) return Xu;
        const fu = new(0, uu.constructor)(Zu);
        for (let Cu = 0; Cu < Zu; Cu++) fu[Cu] = Xu[Cu] + .5 | 0;
        return fu
      }
      static ConvertCubeMapToSphericalPolynomial(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ju = Eu > 0 ? this._NearestPow2Floor(Eu) : 0;
        if (ju > 0 && uu.size > ju) {
          const Eu = 5 === uu.format ? 4 : 3,
            su = ["right", "left", "up", "down", "front", "back"],
            Uu = {};
          for (const Zu of su) Uu[Zu] = this._DownsampleFace(uu[Zu], uu.size, ju, Eu);
          uu = {
            ...uu,
            ...Uu,
            size: ju
          }
        }
        const su = new Zu.b;
        let qu = 0;
        const fu = 2 / uu.size,
          Cu = fu,
          bu = .5 * fu,
          cu = bu - 1;
        for (let Zu = 0; Zu < 6; Zu++) {
          const Eu = this._FileFaces[Zu],
            ju = uu[Eu.name];
          let Nu = cu;
          const Ou = 5 === uu.format ? 4 : 3;
          for (let Zu = 0; Zu < uu.size; Zu++) {
            let Yu = cu;
            for (let Cu = 0; Cu < uu.size; Cu++) {
              const cu = Eu.worldAxisForFileX.scale(Yu).add(Eu.worldAxisForFileY.scale(Nu)).add(Eu.worldAxisForNormal);
              cu.normalize();
              const hu = this._AreaElement(Yu - bu, Nu - bu) - this._AreaElement(Yu - bu, Nu + bu) - this._AreaElement(Yu + bu, Nu - bu) + this._AreaElement(Yu + bu, Nu + bu);
              let Du = ju[Zu * uu.size * Ou + Cu * Ou + 0],
                gu = ju[Zu * uu.size * Ou + Cu * Ou + 1],
                Mu = ju[Zu * uu.size * Ou + Cu * Ou + 2];
              isNaN(Du) && (Du = 0), isNaN(gu) && (gu = 0), isNaN(Mu) && (Mu = 0), 0 === uu.type && (Du /= 255, gu /= 255, Mu /= 255), uu.gammaSpace && (Du = Math.pow((0, Uu.Clamp)(Du), Xu.i), gu = Math.pow((0, Uu.Clamp)(gu), Xu.i), Mu = Math.pow((0, Uu.Clamp)(Mu), Xu.i));
              const eu = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const uu = Math.max(Du, gu, Mu);
                if (uu > eu) {
                  const Eu = eu / uu;
                  Du *= Eu, gu *= Eu, Mu *= Eu
                }
              } else Du = (0, Uu.Clamp)(Du, 0, eu), gu = (0, Uu.Clamp)(gu, 0, eu), Mu = (0, Uu.Clamp)(Mu, 0, eu);
              const Gu = new lu.c(Du, gu, Mu);
              su.addLight(cu, Gu, hu), qu += hu, Yu += fu
            }
            Nu += Cu
          }
        }
        const Nu = 6 * (4 * Math.PI) / 6 / qu;
        return su.scaleInPlace(Nu), su.convertIncidentRadianceToIrradiance(), su.convertIrradianceToLambertianRadiance(), Zu.e.FromHarmonics(su)
      }
    }
    fu._FileFaces = [new qu("right", new su.t(1, 0, 0), new su.t(0, 0, -1), new su.t(0, -1, 0)), new qu("left", new su.t(-1, 0, 0), new su.t(0, 0, 1), new su.t(0, -1, 0)), new qu("up", new su.t(0, 1, 0), new su.t(1, 0, 0), new su.t(0, 0, 1)), new qu("down", new su.t(0, -1, 0), new su.t(1, 0, 0), new su.t(0, 0, -1)), new qu("front", new su.t(0, 0, 1), new su.t(1, 0, 0), new su.t(0, -1, 0)), new qu("back", new su.t(0, 0, -1), new su.t(-1, 0, 0), new su.t(0, -1, 0))], fu.MAX_HDRI_VALUE = 4096, fu.PRESERVE_CLAMPED_COLORS = !1
  },
  42032: (uu, Eu, ju) => {
    ju.d(Eu, {
      DDSTools: () => Ou
    });
    var su = ju(37519),
      Uu = ju(39032),
      Zu = ju(42037),
      Xu = ju(40326);
    const lu = 131072,
      qu = 131072;

    function fu(uu) {
      return uu.charCodeAt(0) + (uu.charCodeAt(1) << 8) + (uu.charCodeAt(2) << 16) + (uu.charCodeAt(3) << 24)
    }
    const Cu = fu("DXT1"),
      bu = fu("DXT3"),
      cu = fu("DXT5"),
      Nu = fu("DX10");
    class Ou {
      static GetDDSInfo(uu) {
        const Eu = new Int32Array(uu.buffer, uu.byteOffset, 31),
          ju = new Int32Array(uu.buffer, uu.byteOffset, 35);
        let su = 1;
        Eu[2] & lu && (su = Math.max(1, Eu[7]));
        const Uu = Eu[21],
          Zu = Uu === Nu ? ju[32] : 0;
        let Xu = 0;
        switch (Uu) {
          case 113:
            Xu = 2;
            break;
          case 116:
            Xu = 1;
            break;
          case Nu:
            if (10 === Zu) {
              Xu = 2;
              break
            }
            if (2 === Zu) {
              Xu = 1;
              break
            }
        }
        return {
          width: Eu[4],
          height: Eu[3],
          mipmapCount: su,
          isFourCC: 4 === (4 & Eu[20]),
          isRGB: 64 === (64 & Eu[20]),
          isLuminance: (Eu[20] & qu) === qu,
          isCube: 512 === (512 & Eu[28]),
          isCompressed: Uu === Cu || Uu === bu || Uu === cu,
          dxgiFormat: Zu,
          textureType: Xu
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(uu, Eu, ju, su, Uu, Zu) {
        const lu = new Float32Array(su),
          qu = new Uint16Array(Uu, ju);
        let fu = 0;
        for (let Cu = 0; Cu < Eu; Cu++)
          for (let Eu = 0; Eu < uu; Eu++) {
            const ju = 4 * (Eu + Cu * uu);
            lu[fu] = (0, Xu.e)(qu[ju]), lu[fu + 1] = (0, Xu.e)(qu[ju + 1]), lu[fu + 2] = (0, Xu.e)(qu[ju + 2]), Ou.StoreLODInAlphaChannel ? lu[fu + 3] = Zu : lu[fu + 3] = (0, Xu.e)(qu[ju + 3]), fu += 4
          }
        return lu
      }
      static _GetHalfFloatRGBAArrayBuffer(uu, Eu, ju, su, Uu, Zu) {
        if (Ou.StoreLODInAlphaChannel) {
          const lu = new Uint16Array(su),
            qu = new Uint16Array(Uu, ju);
          let fu = 0;
          for (let ju = 0; ju < Eu; ju++)
            for (let Eu = 0; Eu < uu; Eu++) {
              const su = 4 * (Eu + ju * uu);
              lu[fu] = qu[su], lu[fu + 1] = qu[su + 1], lu[fu + 2] = qu[su + 2], lu[fu + 3] = (0, Xu.k)(Zu), fu += 4
            }
          return lu
        }
        return new Uint16Array(Uu, ju, su)
      }
      static _GetFloatRGBAArrayBuffer(uu, Eu, ju, su, Uu, Zu) {
        if (Ou.StoreLODInAlphaChannel) {
          const Xu = new Float32Array(su),
            lu = new Float32Array(Uu, ju);
          let qu = 0;
          for (let ju = 0; ju < Eu; ju++)
            for (let Eu = 0; Eu < uu; Eu++) {
              const su = 4 * (Eu + ju * uu);
              Xu[qu] = lu[su], Xu[qu + 1] = lu[su + 1], Xu[qu + 2] = lu[su + 2], Xu[qu + 3] = Zu, qu += 4
            }
          return Xu
        }
        return new Float32Array(Uu, ju, su)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(uu, Eu, ju, su, Uu, Zu) {
        const lu = new Uint16Array(su),
          qu = new Float32Array(Uu, ju);
        let fu = 0;
        for (let Cu = 0; Cu < Eu; Cu++)
          for (let Eu = 0; Eu < uu; Eu++) lu[fu] = (0, Xu.k)(qu[fu]), lu[fu + 1] = (0, Xu.k)(qu[fu + 1]), lu[fu + 2] = (0, Xu.k)(qu[fu + 2]), Ou.StoreLODInAlphaChannel ? lu[fu + 3] = (0, Xu.k)(Zu) : lu[fu + 3] = (0, Xu.k)(qu[fu + 3]), fu += 4;
        return lu
      }
      static _GetFloatAsUIntRGBAArrayBuffer(uu, Eu, ju, Uu, Zu, Xu) {
        const lu = new Uint8Array(Uu),
          qu = new Float32Array(Zu, ju);
        let fu = 0;
        for (let Cu = 0; Cu < Eu; Cu++)
          for (let Eu = 0; Eu < uu; Eu++) {
            const ju = 4 * (Eu + Cu * uu);
            lu[fu] = 255 * (0, su.Clamp)(qu[ju]), lu[fu + 1] = 255 * (0, su.Clamp)(qu[ju + 1]), lu[fu + 2] = 255 * (0, su.Clamp)(qu[ju + 2]), Ou.StoreLODInAlphaChannel ? lu[fu + 3] = Xu : lu[fu + 3] = 255 * (0, su.Clamp)(qu[ju + 3]), fu += 4
          }
        return lu
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(uu, Eu, ju, Uu, Zu, lu) {
        const qu = new Uint8Array(Uu),
          fu = new Uint16Array(Zu, ju);
        let Cu = 0;
        for (let bu = 0; bu < Eu; bu++)
          for (let Eu = 0; Eu < uu; Eu++) {
            const ju = 4 * (Eu + bu * uu);
            qu[Cu] = 255 * (0, su.Clamp)((0, Xu.e)(fu[ju])), qu[Cu + 1] = 255 * (0, su.Clamp)((0, Xu.e)(fu[ju + 1])), qu[Cu + 2] = 255 * (0, su.Clamp)((0, Xu.e)(fu[ju + 2])), Ou.StoreLODInAlphaChannel ? qu[Cu + 3] = lu : qu[Cu + 3] = 255 * (0, su.Clamp)((0, Xu.e)(fu[ju + 3])), Cu += 4
          }
        return qu
      }
      static _GetRGBAArrayBuffer(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu) {
        const fu = new Uint8Array(su),
          Cu = new Uint8Array(Uu, ju);
        let bu = 0;
        for (let cu = 0; cu < Eu; cu++)
          for (let Eu = 0; Eu < uu; Eu++) {
            const ju = 4 * (Eu + cu * uu);
            fu[bu] = Cu[ju + Zu], fu[bu + 1] = Cu[ju + Xu], fu[bu + 2] = Cu[ju + lu], fu[bu + 3] = Cu[ju + qu], bu += 4
          }
        return fu
      }
      static _ExtractLongWordOrder(uu) {
        return 0 === uu || 255 === uu || -16777216 === uu ? 0 : 1 + Ou._ExtractLongWordOrder(uu >> 8)
      }
      static _GetRGBArrayBuffer(uu, Eu, ju, su, Uu, Zu, Xu, lu) {
        const qu = new Uint8Array(su),
          fu = new Uint8Array(Uu, ju);
        let Cu = 0;
        for (let bu = 0; bu < Eu; bu++)
          for (let Eu = 0; Eu < uu; Eu++) {
            const ju = 3 * (Eu + bu * uu);
            qu[Cu] = fu[ju + Zu], qu[Cu + 1] = fu[ju + Xu], qu[Cu + 2] = fu[ju + lu], Cu += 3
          }
        return qu
      }
      static _GetLuminanceArrayBuffer(uu, Eu, ju, su, Uu) {
        const Zu = new Uint8Array(su),
          Xu = new Uint8Array(Uu, ju);
        let lu = 0;
        for (let qu = 0; qu < Eu; qu++)
          for (let Eu = 0; Eu < uu; Eu++) {
            const ju = Eu + qu * uu;
            Zu[lu] = Xu[ju], lu++
          }
        return Zu
      }
      static UploadDDSLevels(uu, Eu, ju, su, Xu, qu) {
        let fu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          Yu = arguments.length > 7 ? arguments[7] : void 0,
          hu = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          Du = null;
        su.sphericalPolynomial && (Du = []);
        const gu = !!uu.getCaps().s3tc;
        Eu.generateMipMaps = Xu;
        const Mu = new Int32Array(ju.buffer, ju.byteOffset, 31);
        let eu, Gu, pu, wu, Ju, du, au, Pu = 0,
          ou = 0,
          ku = 1;
        if (542327876 !== Mu[0]) return void Uu.b.Error("Invalid magic number in DDS header");
        if (!su.isFourCC && !su.isRGB && !su.isLuminance) return void Uu.b.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (su.isCompressed && !gu) return void Uu.b.Error("Compressed textures are not supported on this platform.");
        let mu = Mu[22];
        wu = Mu[1] + 4;
        let vu = !1;
        if (su.isFourCC) switch (eu = Mu[21], eu) {
          case Cu:
            ku = 8, ou = 33777;
            break;
          case bu:
            ku = 16, ou = 33778;
            break;
          case cu:
            ku = 16, ou = 33779;
            break;
          case 113:
            vu = !0, mu = 64;
            break;
          case 116:
            vu = !0, mu = 128;
            break;
          case Nu: {
            wu += 20;
            let uu = !1;
            switch (su.dxgiFormat) {
              case 10:
                vu = !0, mu = 64, uu = !0;
                break;
              case 2:
                vu = !0, mu = 128, uu = !0;
                break;
              case 88:
                su.isRGB = !0, su.isFourCC = !1, mu = 32, uu = !0
            }
            if (uu) break
          }
          default:
            return void Uu.b.Error(["Unsupported FourCC code:", (Ku = eu, String.fromCharCode(255 & Ku, Ku >> 8 & 255, Ku >> 16 & 255, Ku >> 24 & 255))])
        }
        var Ku;
        const Vu = Ou._ExtractLongWordOrder(Mu[23]),
          ru = Ou._ExtractLongWordOrder(Mu[24]),
          Qu = Ou._ExtractLongWordOrder(Mu[25]),
          iu = Ou._ExtractLongWordOrder(Mu[26]);
        vu && (ou = uu._getRGBABufferInternalSizedFormat(su.textureType)), du = 1, Mu[2] & lu && !1 !== Xu && (du = Math.max(1, Mu[7]));
        const Wu = Yu || 0,
          Su = uu.getCaps();
        for (let Uu = Wu; Uu < qu; Uu++) {
          for (Gu = Mu[4], pu = Mu[3], au = 0; au < du; ++au) {
            if (-1 === fu || fu === au) {
              const Zu = -1 === fu ? au : 0;
              if (!su.isCompressed && su.isFourCC) {
                Eu.format = 5, Pu = Gu * pu * 4;
                let su = null;
                if (uu._badOS || uu._badDesktopOS || !Su.textureHalfFloat && !Su.textureFloat) 128 === mu ? (su = Ou._GetFloatAsUIntRGBAArrayBuffer(Gu, pu, ju.byteOffset + wu, Pu, ju.buffer, Zu), Du && 0 == Zu && Du.push(Ou._GetFloatRGBAArrayBuffer(Gu, pu, ju.byteOffset + wu, Pu, ju.buffer, Zu))) : 64 === mu && (su = Ou._GetHalfFloatAsUIntRGBAArrayBuffer(Gu, pu, ju.byteOffset + wu, Pu, ju.buffer, Zu), Du && 0 == Zu && Du.push(Ou._GetHalfFloatAsFloatRGBAArrayBuffer(Gu, pu, ju.byteOffset + wu, Pu, ju.buffer, Zu))), Eu.type = 0;
                else {
                  const uu = Su.textureFloat && (hu && Su.textureFloatLinearFiltering || !hu),
                    Uu = Su.textureHalfFloat && (hu && Su.textureHalfFloatLinearFiltering || !hu),
                    Xu = (128 === mu || 64 === mu && !Uu) && uu ? 1 : (64 === mu || 128 === mu && !uu) && Uu ? 2 : 0;
                  let lu, qu = null;
                  if (128 === mu) switch (Xu) {
                    case 1:
                      lu = Ou._GetFloatRGBAArrayBuffer, qu = null;
                      break;
                    case 2:
                      lu = Ou._GetFloatAsHalfFloatRGBAArrayBuffer, qu = Ou._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      lu = Ou._GetFloatAsUIntRGBAArrayBuffer, qu = Ou._GetFloatRGBAArrayBuffer
                  } else switch (Xu) {
                    case 1:
                      lu = Ou._GetHalfFloatAsFloatRGBAArrayBuffer, qu = null;
                      break;
                    case 2:
                      lu = Ou._GetHalfFloatRGBAArrayBuffer, qu = Ou._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      lu = Ou._GetHalfFloatAsUIntRGBAArrayBuffer, qu = Ou._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  Eu.type = Xu, su = lu(Gu, pu, ju.byteOffset + wu, Pu, ju.buffer, Zu), Du && 0 == Zu && Du.push(qu ? qu(Gu, pu, ju.byteOffset + wu, Pu, ju.buffer, Zu) : su)
                }
                su && uu._uploadDataToTextureDirectly(Eu, su, Uu, Zu)
              } else if (su.isRGB) Eu.type = 0, 24 === mu ? (Eu.format = 4, Pu = Gu * pu * 3, Ju = Ou._GetRGBArrayBuffer(Gu, pu, ju.byteOffset + wu, Pu, ju.buffer, Vu, ru, Qu), uu._uploadDataToTextureDirectly(Eu, Ju, Uu, Zu)) : (Eu.format = 5, Pu = Gu * pu * 4, Ju = Ou._GetRGBAArrayBuffer(Gu, pu, ju.byteOffset + wu, Pu, ju.buffer, Vu, ru, Qu, iu), uu._uploadDataToTextureDirectly(Eu, Ju, Uu, Zu));
              else if (su.isLuminance) {
                const su = uu._getUnpackAlignement(),
                  Xu = Gu;
                Pu = Math.floor((Gu + su - 1) / su) * su * (pu - 1) + Xu, Ju = Ou._GetLuminanceArrayBuffer(Gu, pu, ju.byteOffset + wu, Pu, ju.buffer), Eu.format = 1, Eu.type = 0, uu._uploadDataToTextureDirectly(Eu, Ju, Uu, Zu)
              } else Pu = Math.max(4, Gu) / 4 * Math.max(4, pu) / 4 * ku, Ju = new Uint8Array(ju.buffer, ju.byteOffset + wu, Pu), Eu.type = 0, uu._uploadCompressedDataToTextureDirectly(Eu, ou, Gu, pu, Ju, Uu, Zu)
            }
            wu += mu ? Gu * pu * (mu / 8) : Pu, Gu *= .5, pu *= .5, Gu = Math.max(1, Gu), pu = Math.max(1, pu)
          }
          if (void 0 !== Yu) break
        }
        Du && Du.length > 0 ? su.sphericalPolynomial = Zu.e.ConvertCubeMapToSphericalPolynomial({
          size: Mu[4],
          right: Du[0],
          left: Du[1],
          up: Du[2],
          down: Du[3],
          front: Du[4],
          back: Du[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : su.sphericalPolynomial = void 0
      }
    }
    Ou.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);