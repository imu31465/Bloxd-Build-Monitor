export const id = 306;
export const ids = [306];
export const modules = {
  41793: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => im
    });
    var hm = fm(37185),
      Am = fm(37208),
      am = fm(40108),
      xm = fm(37191),
      wm = fm(37336);
    class Dm {
      constructor(mm, Tm, fm, hm) {
        this.name = mm, this.worldAxisForNormal = Tm, this.worldAxisForFileX = fm, this.worldAxisForFileY = hm
      }
    }
    class im {
      static _NearestPow2Floor(mm) {
        return mm <= 1 ? 1 : 1 << Math.floor(Math.log2(mm))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(mm) {
        if (!mm.isCube) return null;
        mm.wG()?.dO().flushFramebuffer();
        const Tm = mm.getSize().width,
          fm = mm._sphericalPolynomialTargetSize,
          hm = fm > 0 ? this._NearestPow2Floor(fm) : 0,
          Am = !mm.noMipmap && !0 === mm._texture?.generateMipMaps,
          am = hm > 0 && hm < Tm && Am,
          xm = am ? Math.max(0, Math.round(Math.log2(Tm / hm))) : 0,
          wm = am ? Math.max(1, Math.floor(Tm / Math.pow(2, xm))) : Tm,
          Dm = mm.readPixels(0, xm, void 0, !1),
          im = mm.readPixels(1, xm, void 0, !1);
        let Rm, pm;
        mm.isRenderTarget ? (Rm = mm.readPixels(3, xm, void 0, !1), pm = mm.readPixels(2, xm, void 0, !1)) : (Rm = mm.readPixels(2, xm, void 0, !1), pm = mm.readPixels(3, xm, void 0, !1));
        const Em = mm.readPixels(4, xm, void 0, !1),
          om = mm.readPixels(5, xm, void 0, !1),
          Om = mm.gammaSpace,
          Ym = hm > 0 && hm < Tm && !am;
        return new Promise((mm => {
          Promise.all([im, Dm, Rm, pm, Em, om]).then((fm => {
            let [Am, am, xm, Dm, im, Rm] = fm, pm = wm;
            if (Ym) {
              const mm = 4;
              Am = this._DownsampleFace(Am, Tm, hm, mm), am = this._DownsampleFace(am, Tm, hm, mm), xm = this._DownsampleFace(xm, Tm, hm, mm), Dm = this._DownsampleFace(Dm, Tm, hm, mm), im = this._DownsampleFace(im, Tm, hm, mm), Rm = this._DownsampleFace(Rm, Tm, hm, mm), pm = hm
            }
            const Em = {
              size: pm,
              right: am,
              left: Am,
              up: xm,
              down: Dm,
              front: im,
              back: Rm,
              format: 5,
              type: Am instanceof Float32Array ? 1 : 0,
              gammaSpace: Om
            };
            mm(this.ConvertCubeMapToSphericalPolynomial(Em))
          }))
        }))
      }
      static _AreaElement(mm, Tm) {
        return Math.atan2(mm * Tm, Math.sqrt(mm * mm + Tm * Tm + 1))
      }
      static _DownsampleFace(mm, Tm, fm, hm) {
        const Am = mm instanceof Float32Array ? mm : Float32Array.from(mm),
          am = fm * fm * hm,
          xm = new Float32Array(am),
          wm = Tm / fm,
          Dm = 1 / (wm * wm);
        for (let Rm = 0; Rm < fm; Rm++) {
          const mm = Math.floor(Rm * wm),
            am = Math.floor((Rm + 1) * wm);
          for (let im = 0; im < fm; im++) {
            const pm = Math.floor(im * wm),
              Em = Math.floor((im + 1) * wm),
              om = (Rm * fm + im) * hm;
            for (let fm = 0; fm < hm; fm++) {
              let wm = 0;
              for (let xm = mm; xm < am; xm++)
                for (let mm = pm; mm < Em; mm++) wm += Am[(xm * Tm + mm) * hm + fm];
              xm[om + fm] = wm * Dm
            }
          }
        }
        if (mm instanceof Float32Array) return xm;
        const im = new(0, mm.constructor)(am);
        for (let Rm = 0; Rm < am; Rm++) im[Rm] = xm[Rm] + .5 | 0;
        return im
      }
      static ConvertCubeMapToSphericalPolynomial(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const fm = Tm > 0 ? this._NearestPow2Floor(Tm) : 0;
        if (fm > 0 && mm.size > fm) {
          const Tm = 5 === mm.format ? 4 : 3,
            hm = ["right", "left", "up", "down", "front", "back"],
            Am = {};
          for (const am of hm) Am[am] = this._DownsampleFace(mm[am], mm.size, fm, Tm);
          mm = {
            ...mm,
            ...Am,
            size: fm
          }
        }
        const hm = new am.b;
        let Dm = 0;
        const im = 2 / mm.size,
          Rm = im,
          pm = .5 * im,
          Em = pm - 1;
        for (let am = 0; am < 6; am++) {
          const Tm = this._FileFaces[am],
            fm = mm[Tm.name];
          let om = Em;
          const Om = 5 === mm.format ? 4 : 3;
          for (let am = 0; am < mm.size; am++) {
            let Ym = Em;
            for (let Rm = 0; Rm < mm.size; Rm++) {
              const Em = Tm.worldAxisForFileX.scale(Ym).add(Tm.worldAxisForFileY.scale(om)).add(Tm.worldAxisForNormal);
              Em.normalize();
              const qm = this._AreaElement(Ym - pm, om - pm) - this._AreaElement(Ym - pm, om + pm) - this._AreaElement(Ym + pm, om - pm) + this._AreaElement(Ym + pm, om + pm);
              let jm = fm[am * mm.size * Om + Rm * Om + 0],
                Vm = fm[am * mm.size * Om + Rm * Om + 1],
                Im = fm[am * mm.size * Om + Rm * Om + 2];
              isNaN(jm) && (jm = 0), isNaN(Vm) && (Vm = 0), isNaN(Im) && (Im = 0), 0 === mm.type && (jm /= 255, Vm /= 255, Im /= 255), mm.gammaSpace && (jm = Math.pow((0, Am.Clamp)(jm), xm.g), Vm = Math.pow((0, Am.Clamp)(Vm), xm.g), Im = Math.pow((0, Am.Clamp)(Im), xm.g));
              const Km = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const mm = Math.max(jm, Vm, Im);
                if (mm > Km) {
                  const Tm = Km / mm;
                  jm *= Tm, Vm *= Tm, Im *= Tm
                }
              } else jm = (0, Am.Clamp)(jm, 0, Km), Vm = (0, Am.Clamp)(Vm, 0, Km), Im = (0, Am.Clamp)(Im, 0, Km);
              const Qm = new wm.b(jm, Vm, Im);
              hm.addLight(Em, Qm, qm), Dm += qm, Ym += im
            }
            om += Rm
          }
        }
        const om = 6 * (4 * Math.PI) / 6 / Dm;
        return hm.scaleInPlace(om), hm.convertIncidentRadianceToIrradiance(), hm.convertIrradianceToLambertianRadiance(), am.e.FromHarmonics(hm)
      }
    }
    im._FileFaces = [new Dm("right", new hm.p(1, 0, 0), new hm.p(0, 0, -1), new hm.p(0, -1, 0)), new Dm("left", new hm.p(-1, 0, 0), new hm.p(0, 0, 1), new hm.p(0, -1, 0)), new Dm("up", new hm.p(0, 1, 0), new hm.p(1, 0, 0), new hm.p(0, 0, 1)), new Dm("down", new hm.p(0, -1, 0), new hm.p(1, 0, 0), new hm.p(0, 0, -1)), new Dm("front", new hm.p(0, 0, 1), new hm.p(1, 0, 0), new hm.p(0, -1, 0)), new Dm("back", new hm.p(0, 0, -1), new hm.p(-1, 0, 0), new hm.p(0, -1, 0))], im.MAX_HDRI_VALUE = 4096, im.PRESERVE_CLAMPED_COLORS = !1
  },
  41784: (mm, Tm, fm) => {
    fm.d(Tm, {
      DDSTools: () => Om
    });
    var hm = fm(37208),
      Am = fm(38766),
      am = fm(41793),
      xm = fm(40186);
    const wm = 131072,
      Dm = 131072;

    function im(mm) {
      return mm.charCodeAt(0) + (mm.charCodeAt(1) << 8) + (mm.charCodeAt(2) << 16) + (mm.charCodeAt(3) << 24)
    }
    const Rm = im("DXT1"),
      pm = im("DXT3"),
      Em = im("DXT5"),
      om = im("DX10");
    class Om {
      static GetDDSInfo(mm) {
        const Tm = new Int32Array(mm.buffer, mm.byteOffset, 31),
          fm = new Int32Array(mm.buffer, mm.byteOffset, 35);
        let hm = 1;
        Tm[2] & wm && (hm = Math.max(1, Tm[7]));
        const Am = Tm[21],
          am = Am === om ? fm[32] : 0;
        let xm = 0;
        switch (Am) {
          case 113:
            xm = 2;
            break;
          case 116:
            xm = 1;
            break;
          case om:
            if (10 === am) {
              xm = 2;
              break
            }
            if (2 === am) {
              xm = 1;
              break
            }
        }
        return {
          width: Tm[4],
          height: Tm[3],
          mipmapCount: hm,
          isFourCC: 4 === (4 & Tm[20]),
          isRGB: 64 === (64 & Tm[20]),
          isLuminance: (Tm[20] & Dm) === Dm,
          isCube: 512 === (512 & Tm[28]),
          isCompressed: Am === Rm || Am === pm || Am === Em,
          dxgiFormat: am,
          textureType: xm
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(mm, Tm, fm, hm, Am, am) {
        const wm = new Float32Array(hm),
          Dm = new Uint16Array(Am, fm);
        let im = 0;
        for (let Rm = 0; Rm < Tm; Rm++)
          for (let Tm = 0; Tm < mm; Tm++) {
            const fm = 4 * (Tm + Rm * mm);
            wm[im] = (0, xm.d)(Dm[fm]), wm[im + 1] = (0, xm.d)(Dm[fm + 1]), wm[im + 2] = (0, xm.d)(Dm[fm + 2]), Om.StoreLODInAlphaChannel ? wm[im + 3] = am : wm[im + 3] = (0, xm.d)(Dm[fm + 3]), im += 4
          }
        return wm
      }
      static _GetHalfFloatRGBAArrayBuffer(mm, Tm, fm, hm, Am, am) {
        if (Om.StoreLODInAlphaChannel) {
          const wm = new Uint16Array(hm),
            Dm = new Uint16Array(Am, fm);
          let im = 0;
          for (let fm = 0; fm < Tm; fm++)
            for (let Tm = 0; Tm < mm; Tm++) {
              const hm = 4 * (Tm + fm * mm);
              wm[im] = Dm[hm], wm[im + 1] = Dm[hm + 1], wm[im + 2] = Dm[hm + 2], wm[im + 3] = (0, xm.j)(am), im += 4
            }
          return wm
        }
        return new Uint16Array(Am, fm, hm)
      }
      static _GetFloatRGBAArrayBuffer(mm, Tm, fm, hm, Am, am) {
        if (Om.StoreLODInAlphaChannel) {
          const xm = new Float32Array(hm),
            wm = new Float32Array(Am, fm);
          let Dm = 0;
          for (let fm = 0; fm < Tm; fm++)
            for (let Tm = 0; Tm < mm; Tm++) {
              const hm = 4 * (Tm + fm * mm);
              xm[Dm] = wm[hm], xm[Dm + 1] = wm[hm + 1], xm[Dm + 2] = wm[hm + 2], xm[Dm + 3] = am, Dm += 4
            }
          return xm
        }
        return new Float32Array(Am, fm, hm)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(mm, Tm, fm, hm, Am, am) {
        const wm = new Uint16Array(hm),
          Dm = new Float32Array(Am, fm);
        let im = 0;
        for (let Rm = 0; Rm < Tm; Rm++)
          for (let Tm = 0; Tm < mm; Tm++) wm[im] = (0, xm.j)(Dm[im]), wm[im + 1] = (0, xm.j)(Dm[im + 1]), wm[im + 2] = (0, xm.j)(Dm[im + 2]), Om.StoreLODInAlphaChannel ? wm[im + 3] = (0, xm.j)(am) : wm[im + 3] = (0, xm.j)(Dm[im + 3]), im += 4;
        return wm
      }
      static _GetFloatAsUIntRGBAArrayBuffer(mm, Tm, fm, Am, am, xm) {
        const wm = new Uint8Array(Am),
          Dm = new Float32Array(am, fm);
        let im = 0;
        for (let Rm = 0; Rm < Tm; Rm++)
          for (let Tm = 0; Tm < mm; Tm++) {
            const fm = 4 * (Tm + Rm * mm);
            wm[im] = 255 * (0, hm.Clamp)(Dm[fm]), wm[im + 1] = 255 * (0, hm.Clamp)(Dm[fm + 1]), wm[im + 2] = 255 * (0, hm.Clamp)(Dm[fm + 2]), Om.StoreLODInAlphaChannel ? wm[im + 3] = xm : wm[im + 3] = 255 * (0, hm.Clamp)(Dm[fm + 3]), im += 4
          }
        return wm
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(mm, Tm, fm, Am, am, wm) {
        const Dm = new Uint8Array(Am),
          im = new Uint16Array(am, fm);
        let Rm = 0;
        for (let pm = 0; pm < Tm; pm++)
          for (let Tm = 0; Tm < mm; Tm++) {
            const fm = 4 * (Tm + pm * mm);
            Dm[Rm] = 255 * (0, hm.Clamp)((0, xm.d)(im[fm])), Dm[Rm + 1] = 255 * (0, hm.Clamp)((0, xm.d)(im[fm + 1])), Dm[Rm + 2] = 255 * (0, hm.Clamp)((0, xm.d)(im[fm + 2])), Om.StoreLODInAlphaChannel ? Dm[Rm + 3] = wm : Dm[Rm + 3] = 255 * (0, hm.Clamp)((0, xm.d)(im[fm + 3])), Rm += 4
          }
        return Dm
      }
      static _GetRGBAArrayBuffer(mm, Tm, fm, hm, Am, am, xm, wm, Dm) {
        const im = new Uint8Array(hm),
          Rm = new Uint8Array(Am, fm);
        let pm = 0;
        for (let Em = 0; Em < Tm; Em++)
          for (let Tm = 0; Tm < mm; Tm++) {
            const fm = 4 * (Tm + Em * mm);
            im[pm] = Rm[fm + am], im[pm + 1] = Rm[fm + xm], im[pm + 2] = Rm[fm + wm], im[pm + 3] = Rm[fm + Dm], pm += 4
          }
        return im
      }
      static _ExtractLongWordOrder(mm) {
        return 0 === mm || 255 === mm || -16777216 === mm ? 0 : 1 + Om._ExtractLongWordOrder(mm >> 8)
      }
      static _GetRGBArrayBuffer(mm, Tm, fm, hm, Am, am, xm, wm) {
        const Dm = new Uint8Array(hm),
          im = new Uint8Array(Am, fm);
        let Rm = 0;
        for (let pm = 0; pm < Tm; pm++)
          for (let Tm = 0; Tm < mm; Tm++) {
            const fm = 3 * (Tm + pm * mm);
            Dm[Rm] = im[fm + am], Dm[Rm + 1] = im[fm + xm], Dm[Rm + 2] = im[fm + wm], Rm += 3
          }
        return Dm
      }
      static _GetLuminanceArrayBuffer(mm, Tm, fm, hm, Am) {
        const am = new Uint8Array(hm),
          xm = new Uint8Array(Am, fm);
        let wm = 0;
        for (let Dm = 0; Dm < Tm; Dm++)
          for (let Tm = 0; Tm < mm; Tm++) {
            const fm = Tm + Dm * mm;
            am[wm] = xm[fm], wm++
          }
        return am
      }
      static UploadDDSLevels(mm, Tm, fm, hm, xm, Dm) {
        let im = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          Ym = arguments.length > 7 ? arguments[7] : void 0,
          qm = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          jm = null;
        hm.sphericalPolynomial && (jm = []);
        const Vm = !!mm.getCaps().s3tc;
        Tm.generateMipMaps = xm;
        const Im = new Int32Array(fm.buffer, fm.byteOffset, 31);
        let Km, Qm, nm, Jm, cm, zm, Zm, km = 0,
          bm = 0,
          Sm = 1;
        if (542327876 !== Im[0]) return void Am.b.Error("Invalid magic number in DDS header");
        if (!hm.isFourCC && !hm.isRGB && !hm.isLuminance) return void Am.b.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (hm.isCompressed && !Vm) return void Am.b.Error("Compressed textures are not supported on this platform.");
        let em = Im[22];
        Jm = Im[1] + 4;
        let Nm = !1;
        if (hm.isFourCC) switch (Km = Im[21], Km) {
          case Rm:
            Sm = 8, bm = 33777;
            break;
          case pm:
            Sm = 16, bm = 33778;
            break;
          case Em:
            Sm = 16, bm = 33779;
            break;
          case 113:
            Nm = !0, em = 64;
            break;
          case 116:
            Nm = !0, em = 128;
            break;
          case om: {
            Jm += 20;
            let mm = !1;
            switch (hm.dxgiFormat) {
              case 10:
                Nm = !0, em = 64, mm = !0;
                break;
              case 2:
                Nm = !0, em = 128, mm = !0;
                break;
              case 88:
                hm.isRGB = !0, hm.isFourCC = !1, em = 32, mm = !0
            }
            if (mm) break
          }
          default:
            return void Am.b.Error(["Unsupported FourCC code:", (Gm = Km, String.fromCharCode(255 & Gm, Gm >> 8 & 255, Gm >> 16 & 255, Gm >> 24 & 255))])
        }
        var Gm;
        const Xm = Om._ExtractLongWordOrder(Im[23]),
          Pm = Om._ExtractLongWordOrder(Im[24]),
          Hm = Om._ExtractLongWordOrder(Im[25]),
          ym = Om._ExtractLongWordOrder(Im[26]);
        Nm && (bm = mm._getRGBABufferInternalSizedFormat(hm.textureType)), zm = 1, Im[2] & wm && !1 !== xm && (zm = Math.max(1, Im[7]));
        const Cm = Ym || 0,
          rm = mm.getCaps();
        for (let Am = Cm; Am < Dm; Am++) {
          for (Qm = Im[4], nm = Im[3], Zm = 0; Zm < zm; ++Zm) {
            if (-1 === im || im === Zm) {
              const am = -1 === im ? Zm : 0;
              if (!hm.isCompressed && hm.isFourCC) {
                Tm.format = 5, km = Qm * nm * 4;
                let hm = null;
                if (mm._badOS || mm._badDesktopOS || !rm.textureHalfFloat && !rm.textureFloat) 128 === em ? (hm = Om._GetFloatAsUIntRGBAArrayBuffer(Qm, nm, fm.byteOffset + Jm, km, fm.buffer, am), jm && 0 == am && jm.push(Om._GetFloatRGBAArrayBuffer(Qm, nm, fm.byteOffset + Jm, km, fm.buffer, am))) : 64 === em && (hm = Om._GetHalfFloatAsUIntRGBAArrayBuffer(Qm, nm, fm.byteOffset + Jm, km, fm.buffer, am), jm && 0 == am && jm.push(Om._GetHalfFloatAsFloatRGBAArrayBuffer(Qm, nm, fm.byteOffset + Jm, km, fm.buffer, am))), Tm.type = 0;
                else {
                  const mm = rm.textureFloat && (qm && rm.textureFloatLinearFiltering || !qm),
                    Am = rm.textureHalfFloat && (qm && rm.textureHalfFloatLinearFiltering || !qm),
                    xm = (128 === em || 64 === em && !Am) && mm ? 1 : (64 === em || 128 === em && !mm) && Am ? 2 : 0;
                  let wm, Dm = null;
                  if (128 === em) switch (xm) {
                    case 1:
                      wm = Om._GetFloatRGBAArrayBuffer, Dm = null;
                      break;
                    case 2:
                      wm = Om._GetFloatAsHalfFloatRGBAArrayBuffer, Dm = Om._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      wm = Om._GetFloatAsUIntRGBAArrayBuffer, Dm = Om._GetFloatRGBAArrayBuffer
                  } else switch (xm) {
                    case 1:
                      wm = Om._GetHalfFloatAsFloatRGBAArrayBuffer, Dm = null;
                      break;
                    case 2:
                      wm = Om._GetHalfFloatRGBAArrayBuffer, Dm = Om._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      wm = Om._GetHalfFloatAsUIntRGBAArrayBuffer, Dm = Om._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  Tm.type = xm, hm = wm(Qm, nm, fm.byteOffset + Jm, km, fm.buffer, am), jm && 0 == am && jm.push(Dm ? Dm(Qm, nm, fm.byteOffset + Jm, km, fm.buffer, am) : hm)
                }
                hm && mm._uploadDataToTextureDirectly(Tm, hm, Am, am)
              } else if (hm.isRGB) Tm.type = 0, 24 === em ? (Tm.format = 4, km = Qm * nm * 3, cm = Om._GetRGBArrayBuffer(Qm, nm, fm.byteOffset + Jm, km, fm.buffer, Xm, Pm, Hm), mm._uploadDataToTextureDirectly(Tm, cm, Am, am)) : (Tm.format = 5, km = Qm * nm * 4, cm = Om._GetRGBAArrayBuffer(Qm, nm, fm.byteOffset + Jm, km, fm.buffer, Xm, Pm, Hm, ym), mm._uploadDataToTextureDirectly(Tm, cm, Am, am));
              else if (hm.isLuminance) {
                const hm = mm._getUnpackAlignement(),
                  xm = Qm;
                km = Math.floor((Qm + hm - 1) / hm) * hm * (nm - 1) + xm, cm = Om._GetLuminanceArrayBuffer(Qm, nm, fm.byteOffset + Jm, km, fm.buffer), Tm.format = 1, Tm.type = 0, mm._uploadDataToTextureDirectly(Tm, cm, Am, am)
              } else km = Math.max(4, Qm) / 4 * Math.max(4, nm) / 4 * Sm, cm = new Uint8Array(fm.buffer, fm.byteOffset + Jm, km), Tm.type = 0, mm._uploadCompressedDataToTextureDirectly(Tm, bm, Qm, nm, cm, Am, am)
            }
            Jm += em ? Qm * nm * (em / 8) : km, Qm *= .5, nm *= .5, Qm = Math.max(1, Qm), nm = Math.max(1, nm)
          }
          if (void 0 !== Ym) break
        }
        jm && jm.length > 0 ? hm.sphericalPolynomial = am.d.ConvertCubeMapToSphericalPolynomial({
          size: Im[4],
          right: jm[0],
          left: jm[1],
          up: jm[2],
          down: jm[3],
          front: jm[4],
          back: jm[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : hm.sphericalPolynomial = void 0
      }
    }
    Om.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);