export const id = 296;
export const ids = [296];
export const modules = {
  41347: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Xu
    });
    var Eu = yu(36830),
      Ku = yu(36865),
      Qu = yu(39547),
      mu = yu(36833),
      Ju = yu(36991);
    class Nu {
      constructor(uu, Ru, yu, Eu) {
        this.name = uu, this.worldAxisForNormal = Ru, this.worldAxisForFileX = yu, this.worldAxisForFileY = Eu
      }
    }
    class Xu {
      static _NearestPow2Floor(uu) {
        return uu <= 1 ? 1 : 1 << Math.floor(Math.log2(uu))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(uu) {
        if (!uu.isCube) return null;
        uu.lD()?.eS().flushFramebuffer();
        const Ru = uu.getSize().width,
          yu = uu._sphericalPolynomialTargetSize,
          Eu = yu > 0 ? this._NearestPow2Floor(yu) : 0,
          Ku = !uu.noMipmap && !0 === uu._texture?.generateMipMaps,
          Qu = Eu > 0 && Eu < Ru && Ku,
          mu = Qu ? Math.max(0, Math.round(Math.log2(Ru / Eu))) : 0,
          Ju = Qu ? Math.max(1, Math.floor(Ru / Math.pow(2, mu))) : Ru,
          Nu = uu.readPixels(0, mu, void 0, !1),
          Xu = uu.readPixels(1, mu, void 0, !1);
        let Vu, ru;
        uu.isRenderTarget ? (Vu = uu.readPixels(3, mu, void 0, !1), ru = uu.readPixels(2, mu, void 0, !1)) : (Vu = uu.readPixels(2, mu, void 0, !1), ru = uu.readPixels(3, mu, void 0, !1));
        const Bu = uu.readPixels(4, mu, void 0, !1),
          xu = uu.readPixels(5, mu, void 0, !1),
          Su = uu.gammaSpace,
          pu = Eu > 0 && Eu < Ru && !Qu;
        return new Promise((uu => {
          Promise.all([Xu, Nu, Vu, ru, Bu, xu]).then((yu => {
            let [Ku, Qu, mu, Nu, Xu, Vu] = yu, ru = Ju;
            if (pu) {
              const uu = 4;
              Ku = this._DownsampleFace(Ku, Ru, Eu, uu), Qu = this._DownsampleFace(Qu, Ru, Eu, uu), mu = this._DownsampleFace(mu, Ru, Eu, uu), Nu = this._DownsampleFace(Nu, Ru, Eu, uu), Xu = this._DownsampleFace(Xu, Ru, Eu, uu), Vu = this._DownsampleFace(Vu, Ru, Eu, uu), ru = Eu
            }
            const Bu = {
              size: ru,
              right: Qu,
              left: Ku,
              up: mu,
              down: Nu,
              front: Xu,
              back: Vu,
              format: 5,
              type: Ku instanceof Float32Array ? 1 : 0,
              gammaSpace: Su
            };
            uu(this.ConvertCubeMapToSphericalPolynomial(Bu))
          }))
        }))
      }
      static _AreaElement(uu, Ru) {
        return Math.atan2(uu * Ru, Math.sqrt(uu * uu + Ru * Ru + 1))
      }
      static _DownsampleFace(uu, Ru, yu, Eu) {
        const Ku = uu instanceof Float32Array ? uu : Float32Array.from(uu),
          Qu = yu * yu * Eu,
          mu = new Float32Array(Qu),
          Ju = Ru / yu,
          Nu = 1 / (Ju * Ju);
        for (let Vu = 0; Vu < yu; Vu++) {
          const uu = Math.floor(Vu * Ju),
            Qu = Math.floor((Vu + 1) * Ju);
          for (let Xu = 0; Xu < yu; Xu++) {
            const ru = Math.floor(Xu * Ju),
              Bu = Math.floor((Xu + 1) * Ju),
              xu = (Vu * yu + Xu) * Eu;
            for (let yu = 0; yu < Eu; yu++) {
              let Ju = 0;
              for (let mu = uu; mu < Qu; mu++)
                for (let uu = ru; uu < Bu; uu++) Ju += Ku[(mu * Ru + uu) * Eu + yu];
              mu[xu + yu] = Ju * Nu
            }
          }
        }
        if (uu instanceof Float32Array) return mu;
        const Xu = new(0, uu.constructor)(Qu);
        for (let Vu = 0; Vu < Qu; Vu++) Xu[Vu] = mu[Vu] + .5 | 0;
        return Xu
      }
      static ConvertCubeMapToSphericalPolynomial(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const yu = Ru > 0 ? this._NearestPow2Floor(Ru) : 0;
        if (yu > 0 && uu.size > yu) {
          const Ru = 5 === uu.format ? 4 : 3,
            Eu = ["right", "left", "up", "down", "front", "back"],
            Ku = {};
          for (const Qu of Eu) Ku[Qu] = this._DownsampleFace(uu[Qu], uu.size, yu, Ru);
          uu = {
            ...uu,
            ...Ku,
            size: yu
          }
        }
        const Eu = new Qu.b;
        let Nu = 0;
        const Xu = 2 / uu.size,
          Vu = Xu,
          ru = .5 * Xu,
          Bu = ru - 1;
        for (let Qu = 0; Qu < 6; Qu++) {
          const Ru = this._FileFaces[Qu],
            yu = uu[Ru.name];
          let xu = Bu;
          const Su = 5 === uu.format ? 4 : 3;
          for (let Qu = 0; Qu < uu.size; Qu++) {
            let pu = Bu;
            for (let Vu = 0; Vu < uu.size; Vu++) {
              const Bu = Ru.worldAxisForFileX.scale(pu).add(Ru.worldAxisForFileY.scale(xu)).add(Ru.worldAxisForNormal);
              Bu.normalize();
              const Tu = this._AreaElement(pu - ru, xu - ru) - this._AreaElement(pu - ru, xu + ru) - this._AreaElement(pu + ru, xu - ru) + this._AreaElement(pu + ru, xu + ru);
              let Wu = yu[Qu * uu.size * Su + Vu * Su + 0],
                ju = yu[Qu * uu.size * Su + Vu * Su + 1],
                Hu = yu[Qu * uu.size * Su + Vu * Su + 2];
              isNaN(Wu) && (Wu = 0), isNaN(ju) && (ju = 0), isNaN(Hu) && (Hu = 0), 0 === uu.type && (Wu /= 255, ju /= 255, Hu /= 255), uu.gammaSpace && (Wu = Math.pow((0, Ku.Clamp)(Wu), mu.g), ju = Math.pow((0, Ku.Clamp)(ju), mu.g), Hu = Math.pow((0, Ku.Clamp)(Hu), mu.g));
              const du = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const uu = Math.max(Wu, ju, Hu);
                if (uu > du) {
                  const Ru = du / uu;
                  Wu *= Ru, ju *= Ru, Hu *= Ru
                }
              } else Wu = (0, Ku.Clamp)(Wu, 0, du), ju = (0, Ku.Clamp)(ju, 0, du), Hu = (0, Ku.Clamp)(Hu, 0, du);
              const bu = new Ju.d(Wu, ju, Hu);
              Eu.addLight(Bu, bu, Tu), Nu += Tu, pu += Xu
            }
            xu += Vu
          }
        }
        const xu = 6 * (4 * Math.PI) / 6 / Nu;
        return Eu.scaleInPlace(xu), Eu.convertIncidentRadianceToIrradiance(), Eu.convertIrradianceToLambertianRadiance(), Qu.e.FromHarmonics(Eu)
      }
    }
    Xu._FileFaces = [new Nu("right", new Eu.p(1, 0, 0), new Eu.p(0, 0, -1), new Eu.p(0, -1, 0)), new Nu("left", new Eu.p(-1, 0, 0), new Eu.p(0, 0, 1), new Eu.p(0, -1, 0)), new Nu("up", new Eu.p(0, 1, 0), new Eu.p(1, 0, 0), new Eu.p(0, 0, 1)), new Nu("down", new Eu.p(0, -1, 0), new Eu.p(1, 0, 0), new Eu.p(0, 0, -1)), new Nu("front", new Eu.p(0, 0, 1), new Eu.p(1, 0, 0), new Eu.p(0, -1, 0)), new Nu("back", new Eu.p(0, 0, -1), new Eu.p(-1, 0, 0), new Eu.p(0, -1, 0))], Xu.MAX_HDRI_VALUE = 4096, Xu.PRESERVE_CLAMPED_COLORS = !1
  },
  41343: (uu, Ru, yu) => {
    yu.d(Ru, {
      DDSTools: () => Su
    });
    var Eu = yu(36865),
      Ku = yu(38448),
      Qu = yu(41347),
      mu = yu(39633);
    const Ju = 131072,
      Nu = 131072;

    function Xu(uu) {
      return uu.charCodeAt(0) + (uu.charCodeAt(1) << 8) + (uu.charCodeAt(2) << 16) + (uu.charCodeAt(3) << 24)
    }
    const Vu = Xu("DXT1"),
      ru = Xu("DXT3"),
      Bu = Xu("DXT5"),
      xu = Xu("DX10");
    class Su {
      static GetDDSInfo(uu) {
        const Ru = new Int32Array(uu.buffer, uu.byteOffset, 31),
          yu = new Int32Array(uu.buffer, uu.byteOffset, 35);
        let Eu = 1;
        Ru[2] & Ju && (Eu = Math.max(1, Ru[7]));
        const Ku = Ru[21],
          Qu = Ku === xu ? yu[32] : 0;
        let mu = 0;
        switch (Ku) {
          case 113:
            mu = 2;
            break;
          case 116:
            mu = 1;
            break;
          case xu:
            if (10 === Qu) {
              mu = 2;
              break
            }
            if (2 === Qu) {
              mu = 1;
              break
            }
        }
        return {
          width: Ru[4],
          height: Ru[3],
          mipmapCount: Eu,
          isFourCC: 4 === (4 & Ru[20]),
          isRGB: 64 === (64 & Ru[20]),
          isLuminance: (Ru[20] & Nu) === Nu,
          isCube: 512 === (512 & Ru[28]),
          isCompressed: Ku === Vu || Ku === ru || Ku === Bu,
          dxgiFormat: Qu,
          textureType: mu
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(uu, Ru, yu, Eu, Ku, Qu) {
        const Ju = new Float32Array(Eu),
          Nu = new Uint16Array(Ku, yu);
        let Xu = 0;
        for (let Vu = 0; Vu < Ru; Vu++)
          for (let Ru = 0; Ru < uu; Ru++) {
            const yu = 4 * (Ru + Vu * uu);
            Ju[Xu] = (0, mu.c)(Nu[yu]), Ju[Xu + 1] = (0, mu.c)(Nu[yu + 1]), Ju[Xu + 2] = (0, mu.c)(Nu[yu + 2]), Su.StoreLODInAlphaChannel ? Ju[Xu + 3] = Qu : Ju[Xu + 3] = (0, mu.c)(Nu[yu + 3]), Xu += 4
          }
        return Ju
      }
      static _GetHalfFloatRGBAArrayBuffer(uu, Ru, yu, Eu, Ku, Qu) {
        if (Su.StoreLODInAlphaChannel) {
          const Ju = new Uint16Array(Eu),
            Nu = new Uint16Array(Ku, yu);
          let Xu = 0;
          for (let yu = 0; yu < Ru; yu++)
            for (let Ru = 0; Ru < uu; Ru++) {
              const Eu = 4 * (Ru + yu * uu);
              Ju[Xu] = Nu[Eu], Ju[Xu + 1] = Nu[Eu + 1], Ju[Xu + 2] = Nu[Eu + 2], Ju[Xu + 3] = (0, mu.i)(Qu), Xu += 4
            }
          return Ju
        }
        return new Uint16Array(Ku, yu, Eu)
      }
      static _GetFloatRGBAArrayBuffer(uu, Ru, yu, Eu, Ku, Qu) {
        if (Su.StoreLODInAlphaChannel) {
          const mu = new Float32Array(Eu),
            Ju = new Float32Array(Ku, yu);
          let Nu = 0;
          for (let yu = 0; yu < Ru; yu++)
            for (let Ru = 0; Ru < uu; Ru++) {
              const Eu = 4 * (Ru + yu * uu);
              mu[Nu] = Ju[Eu], mu[Nu + 1] = Ju[Eu + 1], mu[Nu + 2] = Ju[Eu + 2], mu[Nu + 3] = Qu, Nu += 4
            }
          return mu
        }
        return new Float32Array(Ku, yu, Eu)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(uu, Ru, yu, Eu, Ku, Qu) {
        const Ju = new Uint16Array(Eu),
          Nu = new Float32Array(Ku, yu);
        let Xu = 0;
        for (let Vu = 0; Vu < Ru; Vu++)
          for (let Ru = 0; Ru < uu; Ru++) Ju[Xu] = (0, mu.i)(Nu[Xu]), Ju[Xu + 1] = (0, mu.i)(Nu[Xu + 1]), Ju[Xu + 2] = (0, mu.i)(Nu[Xu + 2]), Su.StoreLODInAlphaChannel ? Ju[Xu + 3] = (0, mu.i)(Qu) : Ju[Xu + 3] = (0, mu.i)(Nu[Xu + 3]), Xu += 4;
        return Ju
      }
      static _GetFloatAsUIntRGBAArrayBuffer(uu, Ru, yu, Ku, Qu, mu) {
        const Ju = new Uint8Array(Ku),
          Nu = new Float32Array(Qu, yu);
        let Xu = 0;
        for (let Vu = 0; Vu < Ru; Vu++)
          for (let Ru = 0; Ru < uu; Ru++) {
            const yu = 4 * (Ru + Vu * uu);
            Ju[Xu] = 255 * (0, Eu.Clamp)(Nu[yu]), Ju[Xu + 1] = 255 * (0, Eu.Clamp)(Nu[yu + 1]), Ju[Xu + 2] = 255 * (0, Eu.Clamp)(Nu[yu + 2]), Su.StoreLODInAlphaChannel ? Ju[Xu + 3] = mu : Ju[Xu + 3] = 255 * (0, Eu.Clamp)(Nu[yu + 3]), Xu += 4
          }
        return Ju
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(uu, Ru, yu, Ku, Qu, Ju) {
        const Nu = new Uint8Array(Ku),
          Xu = new Uint16Array(Qu, yu);
        let Vu = 0;
        for (let ru = 0; ru < Ru; ru++)
          for (let Ru = 0; Ru < uu; Ru++) {
            const yu = 4 * (Ru + ru * uu);
            Nu[Vu] = 255 * (0, Eu.Clamp)((0, mu.c)(Xu[yu])), Nu[Vu + 1] = 255 * (0, Eu.Clamp)((0, mu.c)(Xu[yu + 1])), Nu[Vu + 2] = 255 * (0, Eu.Clamp)((0, mu.c)(Xu[yu + 2])), Su.StoreLODInAlphaChannel ? Nu[Vu + 3] = Ju : Nu[Vu + 3] = 255 * (0, Eu.Clamp)((0, mu.c)(Xu[yu + 3])), Vu += 4
          }
        return Nu
      }
      static _GetRGBAArrayBuffer(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu) {
        const Xu = new Uint8Array(Eu),
          Vu = new Uint8Array(Ku, yu);
        let ru = 0;
        for (let Bu = 0; Bu < Ru; Bu++)
          for (let Ru = 0; Ru < uu; Ru++) {
            const yu = 4 * (Ru + Bu * uu);
            Xu[ru] = Vu[yu + Qu], Xu[ru + 1] = Vu[yu + mu], Xu[ru + 2] = Vu[yu + Ju], Xu[ru + 3] = Vu[yu + Nu], ru += 4
          }
        return Xu
      }
      static _ExtractLongWordOrder(uu) {
        return 0 === uu || 255 === uu || -16777216 === uu ? 0 : 1 + Su._ExtractLongWordOrder(uu >> 8)
      }
      static _GetRGBArrayBuffer(uu, Ru, yu, Eu, Ku, Qu, mu, Ju) {
        const Nu = new Uint8Array(Eu),
          Xu = new Uint8Array(Ku, yu);
        let Vu = 0;
        for (let ru = 0; ru < Ru; ru++)
          for (let Ru = 0; Ru < uu; Ru++) {
            const yu = 3 * (Ru + ru * uu);
            Nu[Vu] = Xu[yu + Qu], Nu[Vu + 1] = Xu[yu + mu], Nu[Vu + 2] = Xu[yu + Ju], Vu += 3
          }
        return Nu
      }
      static _GetLuminanceArrayBuffer(uu, Ru, yu, Eu, Ku) {
        const Qu = new Uint8Array(Eu),
          mu = new Uint8Array(Ku, yu);
        let Ju = 0;
        for (let Nu = 0; Nu < Ru; Nu++)
          for (let Ru = 0; Ru < uu; Ru++) {
            const yu = Ru + Nu * uu;
            Qu[Ju] = mu[yu], Ju++
          }
        return Qu
      }
      static UploadDDSLevels(uu, Ru, yu, Eu, mu, Nu) {
        let Xu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          pu = arguments.length > 7 ? arguments[7] : void 0,
          Tu = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          Wu = null;
        Eu.sphericalPolynomial && (Wu = []);
        const ju = !!uu.getCaps().s3tc;
        Ru.generateMipMaps = mu;
        const Hu = new Int32Array(yu.buffer, yu.byteOffset, 31);
        let du, bu, Cu, ku, eu, Au, Du, Mu = 0,
          Iu = 0,
          Gu = 1;
        if (542327876 !== Hu[0]) return void Ku.e.Error("Invalid magic number in DDS header");
        if (!Eu.isFourCC && !Eu.isRGB && !Eu.isLuminance) return void Ku.e.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (Eu.isCompressed && !ju) return void Ku.e.Error("Compressed textures are not supported on this platform.");
        let Uu = Hu[22];
        ku = Hu[1] + 4;
        let nu = !1;
        if (Eu.isFourCC) switch (du = Hu[21], du) {
          case Vu:
            Gu = 8, Iu = 33777;
            break;
          case ru:
            Gu = 16, Iu = 33778;
            break;
          case Bu:
            Gu = 16, Iu = 33779;
            break;
          case 113:
            nu = !0, Uu = 64;
            break;
          case 116:
            nu = !0, Uu = 128;
            break;
          case xu: {
            ku += 20;
            let uu = !1;
            switch (Eu.dxgiFormat) {
              case 10:
                nu = !0, Uu = 64, uu = !0;
                break;
              case 2:
                nu = !0, Uu = 128, uu = !0;
                break;
              case 88:
                Eu.isRGB = !0, Eu.isFourCC = !1, Uu = 32, uu = !0
            }
            if (uu) break
          }
          default:
            return void Ku.e.Error(["Unsupported FourCC code:", (su = du, String.fromCharCode(255 & su, su >> 8 & 255, su >> 16 & 255, su >> 24 & 255))])
        }
        var su;
        const tu = Su._ExtractLongWordOrder(Hu[23]),
          lu = Su._ExtractLongWordOrder(Hu[24]),
          gu = Su._ExtractLongWordOrder(Hu[25]),
          cu = Su._ExtractLongWordOrder(Hu[26]);
        nu && (Iu = uu._getRGBABufferInternalSizedFormat(Eu.textureType)), Au = 1, Hu[2] & Ju && !1 !== mu && (Au = Math.max(1, Hu[7]));
        const Lu = pu || 0,
          zu = uu.getCaps();
        for (let Ku = Lu; Ku < Nu; Ku++) {
          for (bu = Hu[4], Cu = Hu[3], Du = 0; Du < Au; ++Du) {
            if (-1 === Xu || Xu === Du) {
              const Qu = -1 === Xu ? Du : 0;
              if (!Eu.isCompressed && Eu.isFourCC) {
                Ru.format = 5, Mu = bu * Cu * 4;
                let Eu = null;
                if (uu._badOS || uu._badDesktopOS || !zu.textureHalfFloat && !zu.textureFloat) 128 === Uu ? (Eu = Su._GetFloatAsUIntRGBAArrayBuffer(bu, Cu, yu.byteOffset + ku, Mu, yu.buffer, Qu), Wu && 0 == Qu && Wu.push(Su._GetFloatRGBAArrayBuffer(bu, Cu, yu.byteOffset + ku, Mu, yu.buffer, Qu))) : 64 === Uu && (Eu = Su._GetHalfFloatAsUIntRGBAArrayBuffer(bu, Cu, yu.byteOffset + ku, Mu, yu.buffer, Qu), Wu && 0 == Qu && Wu.push(Su._GetHalfFloatAsFloatRGBAArrayBuffer(bu, Cu, yu.byteOffset + ku, Mu, yu.buffer, Qu))), Ru.type = 0;
                else {
                  const uu = zu.textureFloat && (Tu && zu.textureFloatLinearFiltering || !Tu),
                    Ku = zu.textureHalfFloat && (Tu && zu.textureHalfFloatLinearFiltering || !Tu),
                    mu = (128 === Uu || 64 === Uu && !Ku) && uu ? 1 : (64 === Uu || 128 === Uu && !uu) && Ku ? 2 : 0;
                  let Ju, Nu = null;
                  if (128 === Uu) switch (mu) {
                    case 1:
                      Ju = Su._GetFloatRGBAArrayBuffer, Nu = null;
                      break;
                    case 2:
                      Ju = Su._GetFloatAsHalfFloatRGBAArrayBuffer, Nu = Su._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      Ju = Su._GetFloatAsUIntRGBAArrayBuffer, Nu = Su._GetFloatRGBAArrayBuffer
                  } else switch (mu) {
                    case 1:
                      Ju = Su._GetHalfFloatAsFloatRGBAArrayBuffer, Nu = null;
                      break;
                    case 2:
                      Ju = Su._GetHalfFloatRGBAArrayBuffer, Nu = Su._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      Ju = Su._GetHalfFloatAsUIntRGBAArrayBuffer, Nu = Su._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  Ru.type = mu, Eu = Ju(bu, Cu, yu.byteOffset + ku, Mu, yu.buffer, Qu), Wu && 0 == Qu && Wu.push(Nu ? Nu(bu, Cu, yu.byteOffset + ku, Mu, yu.buffer, Qu) : Eu)
                }
                Eu && uu._uploadDataToTextureDirectly(Ru, Eu, Ku, Qu)
              } else if (Eu.isRGB) Ru.type = 0, 24 === Uu ? (Ru.format = 4, Mu = bu * Cu * 3, eu = Su._GetRGBArrayBuffer(bu, Cu, yu.byteOffset + ku, Mu, yu.buffer, tu, lu, gu), uu._uploadDataToTextureDirectly(Ru, eu, Ku, Qu)) : (Ru.format = 5, Mu = bu * Cu * 4, eu = Su._GetRGBAArrayBuffer(bu, Cu, yu.byteOffset + ku, Mu, yu.buffer, tu, lu, gu, cu), uu._uploadDataToTextureDirectly(Ru, eu, Ku, Qu));
              else if (Eu.isLuminance) {
                const Eu = uu._getUnpackAlignement(),
                  mu = bu;
                Mu = Math.floor((bu + Eu - 1) / Eu) * Eu * (Cu - 1) + mu, eu = Su._GetLuminanceArrayBuffer(bu, Cu, yu.byteOffset + ku, Mu, yu.buffer), Ru.format = 1, Ru.type = 0, uu._uploadDataToTextureDirectly(Ru, eu, Ku, Qu)
              } else Mu = Math.max(4, bu) / 4 * Math.max(4, Cu) / 4 * Gu, eu = new Uint8Array(yu.buffer, yu.byteOffset + ku, Mu), Ru.type = 0, uu._uploadCompressedDataToTextureDirectly(Ru, Iu, bu, Cu, eu, Ku, Qu)
            }
            ku += Uu ? bu * Cu * (Uu / 8) : Mu, bu *= .5, Cu *= .5, bu = Math.max(1, bu), Cu = Math.max(1, Cu)
          }
          if (void 0 !== pu) break
        }
        Wu && Wu.length > 0 ? Eu.sphericalPolynomial = Qu.b.ConvertCubeMapToSphericalPolynomial({
          size: Hu[4],
          right: Wu[0],
          left: Wu[1],
          up: Wu[2],
          down: Wu[3],
          front: Wu[4],
          back: Wu[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : Eu.sphericalPolynomial = void 0
      }
    }
    Su.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);