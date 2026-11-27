export const id = 626;
export const ids = [625, 626];
export const modules = {
  54317: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      _DDSTextureLoader: () => ar
    });
    var Zr = Qr(41861),
      Wr = Qr(54302);
    class ar {
      constructor() {
        this.supportCascades = !0
      }
      loadCubeData(rr, Sr, Qr, ar) {
        const jr = Sr.MU();
        let Ir, fr = !1,
          Er = 1e3;
        if (Array.isArray(rr))
          for (let Zr = 0; Zr < rr.length; Zr++) {
            const Qr = rr[Zr];
            Ir = Wr.DDSTools.GetDDSInfo(Qr), Sr.width = Ir.width, Sr.height = Ir.height, fr = (Ir.isRGB || Ir.isLuminance || Ir.mipmapCount > 1) && Sr.generateMipMaps, jr._unpackFlipY(Ir.isCompressed), Wr.DDSTools.UploadDDSLevels(jr, Sr, Qr, Ir, fr, 6, -1, Zr), Ir.isFourCC || 1 !== Ir.mipmapCount ? Er = Ir.mipmapCount - 1 : jr.generateMipMapsForCubemap(Sr)
          } else {
            const ar = rr;
            Ir = Wr.DDSTools.GetDDSInfo(ar), Sr.width = Ir.width, Sr.height = Ir.height, Qr && (Ir.sphericalPolynomial = new Zr.d), fr = (Ir.isRGB || Ir.isLuminance || Ir.mipmapCount > 1) && Sr.generateMipMaps, jr._unpackFlipY(Ir.isCompressed), Wr.DDSTools.UploadDDSLevels(jr, Sr, ar, Ir, fr, 6), Ir.isFourCC || 1 !== Ir.mipmapCount ? Er = Ir.mipmapCount - 1 : jr.generateMipMapsForCubemap(Sr, !1)
          }
        jr._setCubeMapTextureParams(Sr, fr, Er), Sr.isReady = !0, Sr.onLoadedObservable.notifyObservers(Sr), Sr.onLoadedObservable.clear(), ar && ar({
          isDDS: !0,
          width: Sr.width,
          info: Ir,
          data: rr,
          texture: Sr
        })
      }
      loadData(rr, Sr, Qr) {
        const Zr = Wr.DDSTools.GetDDSInfo(rr),
          ar = (Zr.isRGB || Zr.isLuminance || Zr.mipmapCount > 1) && Sr.generateMipMaps && Math.max(Zr.width, Zr.height) >> Zr.mipmapCount - 1 === 1;
        Qr(Zr.width, Zr.height, ar, Zr.isFourCC, (() => {
          Wr.DDSTools.UploadDDSLevels(Sr.MU(), Sr, rr, Zr, ar, 1)
        }))
      }
    }
  },
  54310: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Er
    });
    var Zr = Qr(38560),
      Wr = Qr(38599),
      ar = Qr(41861),
      jr = Qr(38569),
      Ir = Qr(38684);
    class fr {
      constructor(rr, Sr, Qr, Zr) {
        this.name = rr, this.worldAxisForNormal = Sr, this.worldAxisForFileX = Qr, this.worldAxisForFileY = Zr
      }
    }
    class Er {
      static _NearestPow2Floor(rr) {
        return rr <= 1 ? 1 : 1 << Math.floor(Math.log2(rr))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(rr) {
        if (!rr.isCube) return null;
        rr.eC()?.MU().flushFramebuffer();
        const Sr = rr.getSize().width,
          Qr = rr._sphericalPolynomialTargetSize,
          Zr = Qr > 0 ? this._NearestPow2Floor(Qr) : 0,
          Wr = !rr.noMipmap && !0 === rr._texture?.generateMipMaps,
          ar = Zr > 0 && Zr < Sr && Wr,
          jr = ar ? Math.max(0, Math.round(Math.log2(Sr / Zr))) : 0,
          Ir = ar ? Math.max(1, Math.floor(Sr / Math.pow(2, jr))) : Sr,
          fr = rr.readPixels(0, jr, void 0, !1),
          Er = rr.readPixels(1, jr, void 0, !1);
        let pr, xr;
        rr.isRenderTarget ? (pr = rr.readPixels(3, jr, void 0, !1), xr = rr.readPixels(2, jr, void 0, !1)) : (pr = rr.readPixels(2, jr, void 0, !1), xr = rr.readPixels(3, jr, void 0, !1));
        const mr = rr.readPixels(4, jr, void 0, !1),
          Nr = rr.readPixels(5, jr, void 0, !1),
          Ur = rr.gammaSpace,
          tr = Zr > 0 && Zr < Sr && !ar;
        return new Promise((rr => {
          Promise.all([Er, fr, pr, xr, mr, Nr]).then((Qr => {
            let [Wr, ar, jr, fr, Er, pr] = Qr, xr = Ir;
            if (tr) {
              const rr = 4;
              Wr = this._DownsampleFace(Wr, Sr, Zr, rr), ar = this._DownsampleFace(ar, Sr, Zr, rr), jr = this._DownsampleFace(jr, Sr, Zr, rr), fr = this._DownsampleFace(fr, Sr, Zr, rr), Er = this._DownsampleFace(Er, Sr, Zr, rr), pr = this._DownsampleFace(pr, Sr, Zr, rr), xr = Zr
            }
            const mr = {
              size: xr,
              right: ar,
              left: Wr,
              up: jr,
              down: fr,
              front: Er,
              back: pr,
              format: 5,
              type: Wr instanceof Float32Array ? 1 : 0,
              gammaSpace: Ur
            };
            rr(this.ConvertCubeMapToSphericalPolynomial(mr))
          }))
        }))
      }
      static _AreaElement(rr, Sr) {
        return Math.atan2(rr * Sr, Math.sqrt(rr * rr + Sr * Sr + 1))
      }
      static _DownsampleFace(rr, Sr, Qr, Zr) {
        const Wr = rr instanceof Float32Array ? rr : Float32Array.from(rr),
          ar = Qr * Qr * Zr,
          jr = new Float32Array(ar),
          Ir = Sr / Qr,
          fr = 1 / (Ir * Ir);
        for (let pr = 0; pr < Qr; pr++) {
          const rr = Math.floor(pr * Ir),
            ar = Math.floor((pr + 1) * Ir);
          for (let Er = 0; Er < Qr; Er++) {
            const xr = Math.floor(Er * Ir),
              mr = Math.floor((Er + 1) * Ir),
              Nr = (pr * Qr + Er) * Zr;
            for (let Qr = 0; Qr < Zr; Qr++) {
              let Ir = 0;
              for (let jr = rr; jr < ar; jr++)
                for (let rr = xr; rr < mr; rr++) Ir += Wr[(jr * Sr + rr) * Zr + Qr];
              jr[Nr + Qr] = Ir * fr
            }
          }
        }
        if (rr instanceof Float32Array) return jr;
        const Er = new(0, rr.constructor)(ar);
        for (let pr = 0; pr < ar; pr++) Er[pr] = jr[pr] + .5 | 0;
        return Er
      }
      static ConvertCubeMapToSphericalPolynomial(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Qr = Sr > 0 ? this._NearestPow2Floor(Sr) : 0;
        if (Qr > 0 && rr.size > Qr) {
          const Sr = 5 === rr.format ? 4 : 3,
            Zr = ["right", "left", "up", "down", "front", "back"],
            Wr = {};
          for (const ar of Zr) Wr[ar] = this._DownsampleFace(rr[ar], rr.size, Qr, Sr);
          rr = {
            ...rr,
            ...Wr,
            size: Qr
          }
        }
        const Zr = new ar.c;
        let fr = 0;
        const Er = 2 / rr.size,
          pr = Er,
          xr = .5 * Er,
          mr = xr - 1;
        for (let ar = 0; ar < 6; ar++) {
          const Sr = this._FileFaces[ar],
            Qr = rr[Sr.name];
          let Nr = mr;
          const Ur = 5 === rr.format ? 4 : 3;
          for (let ar = 0; ar < rr.size; ar++) {
            let tr = mr;
            for (let pr = 0; pr < rr.size; pr++) {
              const mr = Sr.worldAxisForFileX.scale(tr).add(Sr.worldAxisForFileY.scale(Nr)).add(Sr.worldAxisForNormal);
              mr.normalize();
              const hr = this._AreaElement(tr - xr, Nr - xr) - this._AreaElement(tr - xr, Nr + xr) - this._AreaElement(tr + xr, Nr - xr) + this._AreaElement(tr + xr, Nr + xr);
              let zr = Qr[ar * rr.size * Ur + pr * Ur + 0],
                Yr = Qr[ar * rr.size * Ur + pr * Ur + 1],
                nr = Qr[ar * rr.size * Ur + pr * Ur + 2];
              isNaN(zr) && (zr = 0), isNaN(Yr) && (Yr = 0), isNaN(nr) && (nr = 0), 0 === rr.type && (zr /= 255, Yr /= 255, nr /= 255), rr.gammaSpace && (zr = Math.pow((0, Wr.Clamp)(zr), jr.h), Yr = Math.pow((0, Wr.Clamp)(Yr), jr.h), nr = Math.pow((0, Wr.Clamp)(nr), jr.h));
              const er = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const rr = Math.max(zr, Yr, nr);
                if (rr > er) {
                  const Sr = er / rr;
                  zr *= Sr, Yr *= Sr, nr *= Sr
                }
              } else zr = (0, Wr.Clamp)(zr, 0, er), Yr = (0, Wr.Clamp)(Yr, 0, er), nr = (0, Wr.Clamp)(nr, 0, er);
              const Kr = new Ir.e(zr, Yr, nr);
              Zr.addLight(mr, Kr, hr), fr += hr, tr += Er
            }
            Nr += pr
          }
        }
        const Nr = 6 * (4 * Math.PI) / 6 / fr;
        return Zr.scaleInPlace(Nr), Zr.convertIncidentRadianceToIrradiance(), Zr.convertIrradianceToLambertianRadiance(), ar.d.FromHarmonics(Zr)
      }
    }
    Er._FileFaces = [new fr("right", new Zr.u(1, 0, 0), new Zr.u(0, 0, -1), new Zr.u(0, -1, 0)), new fr("left", new Zr.u(-1, 0, 0), new Zr.u(0, 0, 1), new Zr.u(0, -1, 0)), new fr("up", new Zr.u(0, 1, 0), new Zr.u(1, 0, 0), new Zr.u(0, 0, 1)), new fr("down", new Zr.u(0, -1, 0), new Zr.u(1, 0, 0), new Zr.u(0, 0, -1)), new fr("front", new Zr.u(0, 0, 1), new Zr.u(1, 0, 0), new Zr.u(0, -1, 0)), new fr("back", new Zr.u(0, 0, -1), new Zr.u(-1, 0, 0), new Zr.u(0, -1, 0))], Er.MAX_HDRI_VALUE = 4096, Er.PRESERVE_CLAMPED_COLORS = !1
  },
  54302: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      DDSTools: () => Ur
    });
    var Zr = Qr(38599),
      Wr = Qr(40246),
      ar = Qr(54310),
      jr = Qr(41922);
    const Ir = 131072,
      fr = 131072;

    function Er(rr) {
      return rr.charCodeAt(0) + (rr.charCodeAt(1) << 8) + (rr.charCodeAt(2) << 16) + (rr.charCodeAt(3) << 24)
    }
    const pr = Er("DXT1"),
      xr = Er("DXT3"),
      mr = Er("DXT5"),
      Nr = Er("DX10");
    class Ur {
      static GetDDSInfo(rr) {
        const Sr = new Int32Array(rr.buffer, rr.byteOffset, 31),
          Qr = new Int32Array(rr.buffer, rr.byteOffset, 35);
        let Zr = 1;
        Sr[2] & Ir && (Zr = Math.max(1, Sr[7]));
        const Wr = Sr[21],
          ar = Wr === Nr ? Qr[32] : 0;
        let jr = 0;
        switch (Wr) {
          case 113:
            jr = 2;
            break;
          case 116:
            jr = 1;
            break;
          case Nr:
            if (10 === ar) {
              jr = 2;
              break
            }
            if (2 === ar) {
              jr = 1;
              break
            }
        }
        return {
          width: Sr[4],
          height: Sr[3],
          mipmapCount: Zr,
          isFourCC: 4 === (4 & Sr[20]),
          isRGB: 64 === (64 & Sr[20]),
          isLuminance: (Sr[20] & fr) === fr,
          isCube: 512 === (512 & Sr[28]),
          isCompressed: Wr === pr || Wr === xr || Wr === mr,
          dxgiFormat: ar,
          textureType: jr
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(rr, Sr, Qr, Zr, Wr, ar) {
        const Ir = new Float32Array(Zr),
          fr = new Uint16Array(Wr, Qr);
        let Er = 0;
        for (let pr = 0; pr < Sr; pr++)
          for (let Sr = 0; Sr < rr; Sr++) {
            const Qr = 4 * (Sr + pr * rr);
            Ir[Er] = (0, jr.c)(fr[Qr]), Ir[Er + 1] = (0, jr.c)(fr[Qr + 1]), Ir[Er + 2] = (0, jr.c)(fr[Qr + 2]), Ur.StoreLODInAlphaChannel ? Ir[Er + 3] = ar : Ir[Er + 3] = (0, jr.c)(fr[Qr + 3]), Er += 4
          }
        return Ir
      }
      static _GetHalfFloatRGBAArrayBuffer(rr, Sr, Qr, Zr, Wr, ar) {
        if (Ur.StoreLODInAlphaChannel) {
          const Ir = new Uint16Array(Zr),
            fr = new Uint16Array(Wr, Qr);
          let Er = 0;
          for (let Qr = 0; Qr < Sr; Qr++)
            for (let Sr = 0; Sr < rr; Sr++) {
              const Zr = 4 * (Sr + Qr * rr);
              Ir[Er] = fr[Zr], Ir[Er + 1] = fr[Zr + 1], Ir[Er + 2] = fr[Zr + 2], Ir[Er + 3] = (0, jr.g)(ar), Er += 4
            }
          return Ir
        }
        return new Uint16Array(Wr, Qr, Zr)
      }
      static _GetFloatRGBAArrayBuffer(rr, Sr, Qr, Zr, Wr, ar) {
        if (Ur.StoreLODInAlphaChannel) {
          const jr = new Float32Array(Zr),
            Ir = new Float32Array(Wr, Qr);
          let fr = 0;
          for (let Qr = 0; Qr < Sr; Qr++)
            for (let Sr = 0; Sr < rr; Sr++) {
              const Zr = 4 * (Sr + Qr * rr);
              jr[fr] = Ir[Zr], jr[fr + 1] = Ir[Zr + 1], jr[fr + 2] = Ir[Zr + 2], jr[fr + 3] = ar, fr += 4
            }
          return jr
        }
        return new Float32Array(Wr, Qr, Zr)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(rr, Sr, Qr, Zr, Wr, ar) {
        const Ir = new Uint16Array(Zr),
          fr = new Float32Array(Wr, Qr);
        let Er = 0;
        for (let pr = 0; pr < Sr; pr++)
          for (let Sr = 0; Sr < rr; Sr++) Ir[Er] = (0, jr.g)(fr[Er]), Ir[Er + 1] = (0, jr.g)(fr[Er + 1]), Ir[Er + 2] = (0, jr.g)(fr[Er + 2]), Ur.StoreLODInAlphaChannel ? Ir[Er + 3] = (0, jr.g)(ar) : Ir[Er + 3] = (0, jr.g)(fr[Er + 3]), Er += 4;
        return Ir
      }
      static _GetFloatAsUIntRGBAArrayBuffer(rr, Sr, Qr, Wr, ar, jr) {
        const Ir = new Uint8Array(Wr),
          fr = new Float32Array(ar, Qr);
        let Er = 0;
        for (let pr = 0; pr < Sr; pr++)
          for (let Sr = 0; Sr < rr; Sr++) {
            const Qr = 4 * (Sr + pr * rr);
            Ir[Er] = 255 * (0, Zr.Clamp)(fr[Qr]), Ir[Er + 1] = 255 * (0, Zr.Clamp)(fr[Qr + 1]), Ir[Er + 2] = 255 * (0, Zr.Clamp)(fr[Qr + 2]), Ur.StoreLODInAlphaChannel ? Ir[Er + 3] = jr : Ir[Er + 3] = 255 * (0, Zr.Clamp)(fr[Qr + 3]), Er += 4
          }
        return Ir
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(rr, Sr, Qr, Wr, ar, Ir) {
        const fr = new Uint8Array(Wr),
          Er = new Uint16Array(ar, Qr);
        let pr = 0;
        for (let xr = 0; xr < Sr; xr++)
          for (let Sr = 0; Sr < rr; Sr++) {
            const Qr = 4 * (Sr + xr * rr);
            fr[pr] = 255 * (0, Zr.Clamp)((0, jr.c)(Er[Qr])), fr[pr + 1] = 255 * (0, Zr.Clamp)((0, jr.c)(Er[Qr + 1])), fr[pr + 2] = 255 * (0, Zr.Clamp)((0, jr.c)(Er[Qr + 2])), Ur.StoreLODInAlphaChannel ? fr[pr + 3] = Ir : fr[pr + 3] = 255 * (0, Zr.Clamp)((0, jr.c)(Er[Qr + 3])), pr += 4
          }
        return fr
      }
      static _GetRGBAArrayBuffer(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr) {
        const Er = new Uint8Array(Zr),
          pr = new Uint8Array(Wr, Qr);
        let xr = 0;
        for (let mr = 0; mr < Sr; mr++)
          for (let Sr = 0; Sr < rr; Sr++) {
            const Qr = 4 * (Sr + mr * rr);
            Er[xr] = pr[Qr + ar], Er[xr + 1] = pr[Qr + jr], Er[xr + 2] = pr[Qr + Ir], Er[xr + 3] = pr[Qr + fr], xr += 4
          }
        return Er
      }
      static _ExtractLongWordOrder(rr) {
        return 0 === rr || 255 === rr || -16777216 === rr ? 0 : 1 + Ur._ExtractLongWordOrder(rr >> 8)
      }
      static _GetRGBArrayBuffer(rr, Sr, Qr, Zr, Wr, ar, jr, Ir) {
        const fr = new Uint8Array(Zr),
          Er = new Uint8Array(Wr, Qr);
        let pr = 0;
        for (let xr = 0; xr < Sr; xr++)
          for (let Sr = 0; Sr < rr; Sr++) {
            const Qr = 3 * (Sr + xr * rr);
            fr[pr] = Er[Qr + ar], fr[pr + 1] = Er[Qr + jr], fr[pr + 2] = Er[Qr + Ir], pr += 3
          }
        return fr
      }
      static _GetLuminanceArrayBuffer(rr, Sr, Qr, Zr, Wr) {
        const ar = new Uint8Array(Zr),
          jr = new Uint8Array(Wr, Qr);
        let Ir = 0;
        for (let fr = 0; fr < Sr; fr++)
          for (let Sr = 0; Sr < rr; Sr++) {
            const Qr = Sr + fr * rr;
            ar[Ir] = jr[Qr], Ir++
          }
        return ar
      }
      static UploadDDSLevels(rr, Sr, Qr, Zr, jr, fr) {
        let Er = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          tr = arguments.length > 7 ? arguments[7] : void 0,
          hr = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          zr = null;
        Zr.sphericalPolynomial && (zr = []);
        const Yr = !!rr.getCaps().s3tc;
        Sr.generateMipMaps = jr;
        const nr = new Int32Array(Qr.buffer, Qr.byteOffset, 31);
        let er, Kr, yr, Br, Tr, vr, Or, Lr = 0,
          lr = 0,
          Xr = 1;
        if (542327876 !== nr[0]) return void Wr.c.Error("Invalid magic number in DDS header");
        if (!Zr.isFourCC && !Zr.isRGB && !Zr.isLuminance) return void Wr.c.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (Zr.isCompressed && !Yr) return void Wr.c.Error("Compressed textures are not supported on this platform.");
        let Pr = nr[22];
        Br = nr[1] + 4;
        let Hr = !1;
        if (Zr.isFourCC) switch (er = nr[21], er) {
          case pr:
            Xr = 8, lr = 33777;
            break;
          case xr:
            Xr = 16, lr = 33778;
            break;
          case mr:
            Xr = 16, lr = 33779;
            break;
          case 113:
            Hr = !0, Pr = 64;
            break;
          case 116:
            Hr = !0, Pr = 128;
            break;
          case Nr: {
            Br += 20;
            let rr = !1;
            switch (Zr.dxgiFormat) {
              case 10:
                Hr = !0, Pr = 64, rr = !0;
                break;
              case 2:
                Hr = !0, Pr = 128, rr = !0;
                break;
              case 88:
                Zr.isRGB = !0, Zr.isFourCC = !1, Pr = 32, rr = !0
            }
            if (rr) break
          }
          default:
            return void Wr.c.Error(["Unsupported FourCC code:", (qr = er, String.fromCharCode(255 & qr, qr >> 8 & 255, qr >> 16 & 255, qr >> 24 & 255))])
        }
        var qr;
        const Rr = Ur._ExtractLongWordOrder(nr[23]),
          gr = Ur._ExtractLongWordOrder(nr[24]),
          Cr = Ur._ExtractLongWordOrder(nr[25]),
          Mr = Ur._ExtractLongWordOrder(nr[26]);
        Hr && (lr = rr._getRGBABufferInternalSizedFormat(Zr.textureType)), vr = 1, nr[2] & Ir && !1 !== jr && (vr = Math.max(1, nr[7]));
        const Gr = tr || 0,
          kr = rr.getCaps();
        for (let Wr = Gr; Wr < fr; Wr++) {
          for (Kr = nr[4], yr = nr[3], Or = 0; Or < vr; ++Or) {
            if (-1 === Er || Er === Or) {
              const ar = -1 === Er ? Or : 0;
              if (!Zr.isCompressed && Zr.isFourCC) {
                Sr.format = 5, Lr = Kr * yr * 4;
                let Zr = null;
                if (rr._badOS || rr._badDesktopOS || !kr.textureHalfFloat && !kr.textureFloat) 128 === Pr ? (Zr = Ur._GetFloatAsUIntRGBAArrayBuffer(Kr, yr, Qr.byteOffset + Br, Lr, Qr.buffer, ar), zr && 0 == ar && zr.push(Ur._GetFloatRGBAArrayBuffer(Kr, yr, Qr.byteOffset + Br, Lr, Qr.buffer, ar))) : 64 === Pr && (Zr = Ur._GetHalfFloatAsUIntRGBAArrayBuffer(Kr, yr, Qr.byteOffset + Br, Lr, Qr.buffer, ar), zr && 0 == ar && zr.push(Ur._GetHalfFloatAsFloatRGBAArrayBuffer(Kr, yr, Qr.byteOffset + Br, Lr, Qr.buffer, ar))), Sr.type = 0;
                else {
                  const rr = kr.textureFloat && (hr && kr.textureFloatLinearFiltering || !hr),
                    Wr = kr.textureHalfFloat && (hr && kr.textureHalfFloatLinearFiltering || !hr),
                    jr = (128 === Pr || 64 === Pr && !Wr) && rr ? 1 : (64 === Pr || 128 === Pr && !rr) && Wr ? 2 : 0;
                  let Ir, fr = null;
                  if (128 === Pr) switch (jr) {
                    case 1:
                      Ir = Ur._GetFloatRGBAArrayBuffer, fr = null;
                      break;
                    case 2:
                      Ir = Ur._GetFloatAsHalfFloatRGBAArrayBuffer, fr = Ur._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      Ir = Ur._GetFloatAsUIntRGBAArrayBuffer, fr = Ur._GetFloatRGBAArrayBuffer
                  } else switch (jr) {
                    case 1:
                      Ir = Ur._GetHalfFloatAsFloatRGBAArrayBuffer, fr = null;
                      break;
                    case 2:
                      Ir = Ur._GetHalfFloatRGBAArrayBuffer, fr = Ur._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      Ir = Ur._GetHalfFloatAsUIntRGBAArrayBuffer, fr = Ur._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  Sr.type = jr, Zr = Ir(Kr, yr, Qr.byteOffset + Br, Lr, Qr.buffer, ar), zr && 0 == ar && zr.push(fr ? fr(Kr, yr, Qr.byteOffset + Br, Lr, Qr.buffer, ar) : Zr)
                }
                Zr && rr._uploadDataToTextureDirectly(Sr, Zr, Wr, ar)
              } else if (Zr.isRGB) Sr.type = 0, 24 === Pr ? (Sr.format = 4, Lr = Kr * yr * 3, Tr = Ur._GetRGBArrayBuffer(Kr, yr, Qr.byteOffset + Br, Lr, Qr.buffer, Rr, gr, Cr), rr._uploadDataToTextureDirectly(Sr, Tr, Wr, ar)) : (Sr.format = 5, Lr = Kr * yr * 4, Tr = Ur._GetRGBAArrayBuffer(Kr, yr, Qr.byteOffset + Br, Lr, Qr.buffer, Rr, gr, Cr, Mr), rr._uploadDataToTextureDirectly(Sr, Tr, Wr, ar));
              else if (Zr.isLuminance) {
                const Zr = rr._getUnpackAlignement(),
                  jr = Kr;
                Lr = Math.floor((Kr + Zr - 1) / Zr) * Zr * (yr - 1) + jr, Tr = Ur._GetLuminanceArrayBuffer(Kr, yr, Qr.byteOffset + Br, Lr, Qr.buffer), Sr.format = 1, Sr.type = 0, rr._uploadDataToTextureDirectly(Sr, Tr, Wr, ar)
              } else Lr = Math.max(4, Kr) / 4 * Math.max(4, yr) / 4 * Xr, Tr = new Uint8Array(Qr.buffer, Qr.byteOffset + Br, Lr), Sr.type = 0, rr._uploadCompressedDataToTextureDirectly(Sr, lr, Kr, yr, Tr, Wr, ar)
            }
            Br += Pr ? Kr * yr * (Pr / 8) : Lr, Kr *= .5, yr *= .5, Kr = Math.max(1, Kr), yr = Math.max(1, yr)
          }
          if (void 0 !== tr) break
        }
        zr && zr.length > 0 ? Zr.sphericalPolynomial = ar.d.ConvertCubeMapToSphericalPolynomial({
          size: nr[4],
          right: zr[0],
          left: zr[1],
          up: zr[2],
          down: zr[3],
          front: zr[4],
          back: zr[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : Zr.sphericalPolynomial = void 0
      }
    }
    Ur.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);