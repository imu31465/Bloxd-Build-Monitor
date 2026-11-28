export const id = 626;
export const ids = [625, 626];
export const modules = {
  54204: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      _DDSTextureLoader: () => Rd
    });
    var Wd = md(41907),
      Fd = md(54189);
    class Rd {
      constructor() {
        this.supportCascades = !0
      }
      loadCubeData(dd, Od, md, Rd) {
        const Xd = Od.Iq();
        let Kd, hd = !1,
          vd = 1e3;
        if (Array.isArray(dd))
          for (let Wd = 0; Wd < dd.length; Wd++) {
            const md = dd[Wd];
            Kd = Fd.DDSTools.GetDDSInfo(md), Od.width = Kd.width, Od.height = Kd.height, hd = (Kd.isRGB || Kd.isLuminance || Kd.mipmapCount > 1) && Od.generateMipMaps, Xd._unpackFlipY(Kd.isCompressed), Fd.DDSTools.UploadDDSLevels(Xd, Od, md, Kd, hd, 6, -1, Wd), Kd.isFourCC || 1 !== Kd.mipmapCount ? vd = Kd.mipmapCount - 1 : Xd.generateMipMapsForCubemap(Od)
          } else {
            const Rd = dd;
            Kd = Fd.DDSTools.GetDDSInfo(Rd), Od.width = Kd.width, Od.height = Kd.height, md && (Kd.sphericalPolynomial = new Wd.e), hd = (Kd.isRGB || Kd.isLuminance || Kd.mipmapCount > 1) && Od.generateMipMaps, Xd._unpackFlipY(Kd.isCompressed), Fd.DDSTools.UploadDDSLevels(Xd, Od, Rd, Kd, hd, 6), Kd.isFourCC || 1 !== Kd.mipmapCount ? vd = Kd.mipmapCount - 1 : Xd.generateMipMapsForCubemap(Od, !1)
          }
        Xd._setCubeMapTextureParams(Od, hd, vd), Od.isReady = !0, Od.onLoadedObservable.notifyObservers(Od), Od.onLoadedObservable.clear(), Rd && Rd({
          isDDS: !0,
          width: Od.width,
          info: Kd,
          data: dd,
          texture: Od
        })
      }
      loadData(dd, Od, md) {
        const Wd = Fd.DDSTools.GetDDSInfo(dd),
          Rd = (Wd.isRGB || Wd.isLuminance || Wd.mipmapCount > 1) && Od.generateMipMaps && Math.max(Wd.width, Wd.height) >> Wd.mipmapCount - 1 === 1;
        md(Wd.width, Wd.height, Rd, Wd.isFourCC, (() => {
          Fd.DDSTools.UploadDDSLevels(Od.Iq(), Od, dd, Wd, Rd, 1)
        }))
      }
    }
  },
  54193: (dd, Od, md) => {
    md.d(Od, {
      c: () => vd
    });
    var Wd = md(38636),
      Fd = md(38663),
      Rd = md(41907),
      Xd = md(38644),
      Kd = md(38741);
    class hd {
      constructor(dd, Od, md, Wd) {
        this.name = dd, this.worldAxisForNormal = Od, this.worldAxisForFileX = md, this.worldAxisForFileY = Wd
      }
    }
    class vd {
      static _NearestPow2Floor(dd) {
        return dd <= 1 ? 1 : 1 << Math.floor(Math.log2(dd))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(dd) {
        if (!dd.isCube) return null;
        dd.zV()?.Iq().flushFramebuffer();
        const Od = dd.getSize().width,
          md = dd._sphericalPolynomialTargetSize,
          Wd = md > 0 ? this._NearestPow2Floor(md) : 0,
          Fd = !dd.noMipmap && !0 === dd._texture?.generateMipMaps,
          Rd = Wd > 0 && Wd < Od && Fd,
          Xd = Rd ? Math.max(0, Math.round(Math.log2(Od / Wd))) : 0,
          Kd = Rd ? Math.max(1, Math.floor(Od / Math.pow(2, Xd))) : Od,
          hd = dd.readPixels(0, Xd, void 0, !1),
          vd = dd.readPixels(1, Xd, void 0, !1);
        let Qd, td;
        dd.isRenderTarget ? (Qd = dd.readPixels(3, Xd, void 0, !1), td = dd.readPixels(2, Xd, void 0, !1)) : (Qd = dd.readPixels(2, Xd, void 0, !1), td = dd.readPixels(3, Xd, void 0, !1));
        const od = dd.readPixels(4, Xd, void 0, !1),
          Nd = dd.readPixels(5, Xd, void 0, !1),
          qd = dd.gammaSpace,
          Hd = Wd > 0 && Wd < Od && !Rd;
        return new Promise((dd => {
          Promise.all([vd, hd, Qd, td, od, Nd]).then((md => {
            let [Fd, Rd, Xd, hd, vd, Qd] = md, td = Kd;
            if (Hd) {
              const dd = 4;
              Fd = this._DownsampleFace(Fd, Od, Wd, dd), Rd = this._DownsampleFace(Rd, Od, Wd, dd), Xd = this._DownsampleFace(Xd, Od, Wd, dd), hd = this._DownsampleFace(hd, Od, Wd, dd), vd = this._DownsampleFace(vd, Od, Wd, dd), Qd = this._DownsampleFace(Qd, Od, Wd, dd), td = Wd
            }
            const od = {
              size: td,
              right: Rd,
              left: Fd,
              up: Xd,
              down: hd,
              front: vd,
              back: Qd,
              format: 5,
              type: Fd instanceof Float32Array ? 1 : 0,
              gammaSpace: qd
            };
            dd(this.ConvertCubeMapToSphericalPolynomial(od))
          }))
        }))
      }
      static _AreaElement(dd, Od) {
        return Math.atan2(dd * Od, Math.sqrt(dd * dd + Od * Od + 1))
      }
      static _DownsampleFace(dd, Od, md, Wd) {
        const Fd = dd instanceof Float32Array ? dd : Float32Array.from(dd),
          Rd = md * md * Wd,
          Xd = new Float32Array(Rd),
          Kd = Od / md,
          hd = 1 / (Kd * Kd);
        for (let Qd = 0; Qd < md; Qd++) {
          const dd = Math.floor(Qd * Kd),
            Rd = Math.floor((Qd + 1) * Kd);
          for (let vd = 0; vd < md; vd++) {
            const td = Math.floor(vd * Kd),
              od = Math.floor((vd + 1) * Kd),
              Nd = (Qd * md + vd) * Wd;
            for (let md = 0; md < Wd; md++) {
              let Kd = 0;
              for (let Xd = dd; Xd < Rd; Xd++)
                for (let dd = td; dd < od; dd++) Kd += Fd[(Xd * Od + dd) * Wd + md];
              Xd[Nd + md] = Kd * hd
            }
          }
        }
        if (dd instanceof Float32Array) return Xd;
        const vd = new(0, dd.constructor)(Rd);
        for (let Qd = 0; Qd < Rd; Qd++) vd[Qd] = Xd[Qd] + .5 | 0;
        return vd
      }
      static ConvertCubeMapToSphericalPolynomial(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const md = Od > 0 ? this._NearestPow2Floor(Od) : 0;
        if (md > 0 && dd.size > md) {
          const Od = 5 === dd.format ? 4 : 3,
            Wd = ["right", "left", "up", "down", "front", "back"],
            Fd = {};
          for (const Rd of Wd) Fd[Rd] = this._DownsampleFace(dd[Rd], dd.size, md, Od);
          dd = {
            ...dd,
            ...Fd,
            size: md
          }
        }
        const Wd = new Rd.c;
        let hd = 0;
        const vd = 2 / dd.size,
          Qd = vd,
          td = .5 * vd,
          od = td - 1;
        for (let Rd = 0; Rd < 6; Rd++) {
          const Od = this._FileFaces[Rd],
            md = dd[Od.name];
          let Nd = od;
          const qd = 5 === dd.format ? 4 : 3;
          for (let Rd = 0; Rd < dd.size; Rd++) {
            let Hd = od;
            for (let Qd = 0; Qd < dd.size; Qd++) {
              const od = Od.worldAxisForFileX.scale(Hd).add(Od.worldAxisForFileY.scale(Nd)).add(Od.worldAxisForNormal);
              od.normalize();
              const yd = this._AreaElement(Hd - td, Nd - td) - this._AreaElement(Hd - td, Nd + td) - this._AreaElement(Hd + td, Nd - td) + this._AreaElement(Hd + td, Nd + td);
              let bd = md[Rd * dd.size * qd + Qd * qd + 0],
                Td = md[Rd * dd.size * qd + Qd * qd + 1],
                pd = md[Rd * dd.size * qd + Qd * qd + 2];
              isNaN(bd) && (bd = 0), isNaN(Td) && (Td = 0), isNaN(pd) && (pd = 0), 0 === dd.type && (bd /= 255, Td /= 255, pd /= 255), dd.gammaSpace && (bd = Math.pow((0, Fd.Clamp)(bd), Xd.f), Td = Math.pow((0, Fd.Clamp)(Td), Xd.f), pd = Math.pow((0, Fd.Clamp)(pd), Xd.f));
              const Yd = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const dd = Math.max(bd, Td, pd);
                if (dd > Yd) {
                  const Od = Yd / dd;
                  bd *= Od, Td *= Od, pd *= Od
                }
              } else bd = (0, Fd.Clamp)(bd, 0, Yd), Td = (0, Fd.Clamp)(Td, 0, Yd), pd = (0, Fd.Clamp)(pd, 0, Yd);
              const gd = new Kd.d(bd, Td, pd);
              Wd.addLight(od, gd, yd), hd += yd, Hd += vd
            }
            Nd += Qd
          }
        }
        const Nd = 6 * (4 * Math.PI) / 6 / hd;
        return Wd.scaleInPlace(Nd), Wd.convertIncidentRadianceToIrradiance(), Wd.convertIrradianceToLambertianRadiance(), Rd.e.FromHarmonics(Wd)
      }
    }
    vd._FileFaces = [new hd("right", new Wd.j(1, 0, 0), new Wd.j(0, 0, -1), new Wd.j(0, -1, 0)), new hd("left", new Wd.j(-1, 0, 0), new Wd.j(0, 0, 1), new Wd.j(0, -1, 0)), new hd("up", new Wd.j(0, 1, 0), new Wd.j(1, 0, 0), new Wd.j(0, 0, 1)), new hd("down", new Wd.j(0, -1, 0), new Wd.j(1, 0, 0), new Wd.j(0, 0, -1)), new hd("front", new Wd.j(0, 0, 1), new Wd.j(1, 0, 0), new Wd.j(0, -1, 0)), new hd("back", new Wd.j(0, 0, -1), new Wd.j(-1, 0, 0), new Wd.j(0, -1, 0))], vd.MAX_HDRI_VALUE = 4096, vd.PRESERVE_CLAMPED_COLORS = !1
  },
  54189: (dd, Od, md) => {
    md.d(Od, {
      DDSTools: () => qd
    });
    var Wd = md(38663),
      Fd = md(40262),
      Rd = md(54193),
      Xd = md(41997);
    const Kd = 131072,
      hd = 131072;

    function vd(dd) {
      return dd.charCodeAt(0) + (dd.charCodeAt(1) << 8) + (dd.charCodeAt(2) << 16) + (dd.charCodeAt(3) << 24)
    }
    const Qd = vd("DXT1"),
      td = vd("DXT3"),
      od = vd("DXT5"),
      Nd = vd("DX10");
    class qd {
      static GetDDSInfo(dd) {
        const Od = new Int32Array(dd.buffer, dd.byteOffset, 31),
          md = new Int32Array(dd.buffer, dd.byteOffset, 35);
        let Wd = 1;
        Od[2] & Kd && (Wd = Math.max(1, Od[7]));
        const Fd = Od[21],
          Rd = Fd === Nd ? md[32] : 0;
        let Xd = 0;
        switch (Fd) {
          case 113:
            Xd = 2;
            break;
          case 116:
            Xd = 1;
            break;
          case Nd:
            if (10 === Rd) {
              Xd = 2;
              break
            }
            if (2 === Rd) {
              Xd = 1;
              break
            }
        }
        return {
          width: Od[4],
          height: Od[3],
          mipmapCount: Wd,
          isFourCC: 4 === (4 & Od[20]),
          isRGB: 64 === (64 & Od[20]),
          isLuminance: (Od[20] & hd) === hd,
          isCube: 512 === (512 & Od[28]),
          isCompressed: Fd === Qd || Fd === td || Fd === od,
          dxgiFormat: Rd,
          textureType: Xd
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(dd, Od, md, Wd, Fd, Rd) {
        const Kd = new Float32Array(Wd),
          hd = new Uint16Array(Fd, md);
        let vd = 0;
        for (let Qd = 0; Qd < Od; Qd++)
          for (let Od = 0; Od < dd; Od++) {
            const md = 4 * (Od + Qd * dd);
            Kd[vd] = (0, Xd.b)(hd[md]), Kd[vd + 1] = (0, Xd.b)(hd[md + 1]), Kd[vd + 2] = (0, Xd.b)(hd[md + 2]), qd.StoreLODInAlphaChannel ? Kd[vd + 3] = Rd : Kd[vd + 3] = (0, Xd.b)(hd[md + 3]), vd += 4
          }
        return Kd
      }
      static _GetHalfFloatRGBAArrayBuffer(dd, Od, md, Wd, Fd, Rd) {
        if (qd.StoreLODInAlphaChannel) {
          const Kd = new Uint16Array(Wd),
            hd = new Uint16Array(Fd, md);
          let vd = 0;
          for (let md = 0; md < Od; md++)
            for (let Od = 0; Od < dd; Od++) {
              const Wd = 4 * (Od + md * dd);
              Kd[vd] = hd[Wd], Kd[vd + 1] = hd[Wd + 1], Kd[vd + 2] = hd[Wd + 2], Kd[vd + 3] = (0, Xd.g)(Rd), vd += 4
            }
          return Kd
        }
        return new Uint16Array(Fd, md, Wd)
      }
      static _GetFloatRGBAArrayBuffer(dd, Od, md, Wd, Fd, Rd) {
        if (qd.StoreLODInAlphaChannel) {
          const Xd = new Float32Array(Wd),
            Kd = new Float32Array(Fd, md);
          let hd = 0;
          for (let md = 0; md < Od; md++)
            for (let Od = 0; Od < dd; Od++) {
              const Wd = 4 * (Od + md * dd);
              Xd[hd] = Kd[Wd], Xd[hd + 1] = Kd[Wd + 1], Xd[hd + 2] = Kd[Wd + 2], Xd[hd + 3] = Rd, hd += 4
            }
          return Xd
        }
        return new Float32Array(Fd, md, Wd)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(dd, Od, md, Wd, Fd, Rd) {
        const Kd = new Uint16Array(Wd),
          hd = new Float32Array(Fd, md);
        let vd = 0;
        for (let Qd = 0; Qd < Od; Qd++)
          for (let Od = 0; Od < dd; Od++) Kd[vd] = (0, Xd.g)(hd[vd]), Kd[vd + 1] = (0, Xd.g)(hd[vd + 1]), Kd[vd + 2] = (0, Xd.g)(hd[vd + 2]), qd.StoreLODInAlphaChannel ? Kd[vd + 3] = (0, Xd.g)(Rd) : Kd[vd + 3] = (0, Xd.g)(hd[vd + 3]), vd += 4;
        return Kd
      }
      static _GetFloatAsUIntRGBAArrayBuffer(dd, Od, md, Fd, Rd, Xd) {
        const Kd = new Uint8Array(Fd),
          hd = new Float32Array(Rd, md);
        let vd = 0;
        for (let Qd = 0; Qd < Od; Qd++)
          for (let Od = 0; Od < dd; Od++) {
            const md = 4 * (Od + Qd * dd);
            Kd[vd] = 255 * (0, Wd.Clamp)(hd[md]), Kd[vd + 1] = 255 * (0, Wd.Clamp)(hd[md + 1]), Kd[vd + 2] = 255 * (0, Wd.Clamp)(hd[md + 2]), qd.StoreLODInAlphaChannel ? Kd[vd + 3] = Xd : Kd[vd + 3] = 255 * (0, Wd.Clamp)(hd[md + 3]), vd += 4
          }
        return Kd
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(dd, Od, md, Fd, Rd, Kd) {
        const hd = new Uint8Array(Fd),
          vd = new Uint16Array(Rd, md);
        let Qd = 0;
        for (let td = 0; td < Od; td++)
          for (let Od = 0; Od < dd; Od++) {
            const md = 4 * (Od + td * dd);
            hd[Qd] = 255 * (0, Wd.Clamp)((0, Xd.b)(vd[md])), hd[Qd + 1] = 255 * (0, Wd.Clamp)((0, Xd.b)(vd[md + 1])), hd[Qd + 2] = 255 * (0, Wd.Clamp)((0, Xd.b)(vd[md + 2])), qd.StoreLODInAlphaChannel ? hd[Qd + 3] = Kd : hd[Qd + 3] = 255 * (0, Wd.Clamp)((0, Xd.b)(vd[md + 3])), Qd += 4
          }
        return hd
      }
      static _GetRGBAArrayBuffer(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd) {
        const vd = new Uint8Array(Wd),
          Qd = new Uint8Array(Fd, md);
        let td = 0;
        for (let od = 0; od < Od; od++)
          for (let Od = 0; Od < dd; Od++) {
            const md = 4 * (Od + od * dd);
            vd[td] = Qd[md + Rd], vd[td + 1] = Qd[md + Xd], vd[td + 2] = Qd[md + Kd], vd[td + 3] = Qd[md + hd], td += 4
          }
        return vd
      }
      static _ExtractLongWordOrder(dd) {
        return 0 === dd || 255 === dd || -16777216 === dd ? 0 : 1 + qd._ExtractLongWordOrder(dd >> 8)
      }
      static _GetRGBArrayBuffer(dd, Od, md, Wd, Fd, Rd, Xd, Kd) {
        const hd = new Uint8Array(Wd),
          vd = new Uint8Array(Fd, md);
        let Qd = 0;
        for (let td = 0; td < Od; td++)
          for (let Od = 0; Od < dd; Od++) {
            const md = 3 * (Od + td * dd);
            hd[Qd] = vd[md + Rd], hd[Qd + 1] = vd[md + Xd], hd[Qd + 2] = vd[md + Kd], Qd += 3
          }
        return hd
      }
      static _GetLuminanceArrayBuffer(dd, Od, md, Wd, Fd) {
        const Rd = new Uint8Array(Wd),
          Xd = new Uint8Array(Fd, md);
        let Kd = 0;
        for (let hd = 0; hd < Od; hd++)
          for (let Od = 0; Od < dd; Od++) {
            const md = Od + hd * dd;
            Rd[Kd] = Xd[md], Kd++
          }
        return Rd
      }
      static UploadDDSLevels(dd, Od, md, Wd, Xd, hd) {
        let vd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          Hd = arguments.length > 7 ? arguments[7] : void 0,
          yd = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          bd = null;
        Wd.sphericalPolynomial && (bd = []);
        const Td = !!dd.getCaps().s3tc;
        Od.generateMipMaps = Xd;
        const pd = new Int32Array(md.buffer, md.byteOffset, 31);
        let Yd, gd, wd, Ed, Jd, Ud, xd, Bd = 0,
          Sd = 0,
          sd = 1;
        if (542327876 !== pd[0]) return void Fd.c.Error("Invalid magic number in DDS header");
        if (!Wd.isFourCC && !Wd.isRGB && !Wd.isLuminance) return void Fd.c.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (Wd.isCompressed && !Td) return void Fd.c.Error("Compressed textures are not supported on this platform.");
        let ud = pd[22];
        Ed = pd[1] + 4;
        let Vd = !1;
        if (Wd.isFourCC) switch (Yd = pd[21], Yd) {
          case Qd:
            sd = 8, Sd = 33777;
            break;
          case td:
            sd = 16, Sd = 33778;
            break;
          case od:
            sd = 16, Sd = 33779;
            break;
          case 113:
            Vd = !0, ud = 64;
            break;
          case 116:
            Vd = !0, ud = 128;
            break;
          case Nd: {
            Ed += 20;
            let dd = !1;
            switch (Wd.dxgiFormat) {
              case 10:
                Vd = !0, ud = 64, dd = !0;
                break;
              case 2:
                Vd = !0, ud = 128, dd = !0;
                break;
              case 88:
                Wd.isRGB = !0, Wd.isFourCC = !1, ud = 32, dd = !0
            }
            if (dd) break
          }
          default:
            return void Fd.c.Error(["Unsupported FourCC code:", (Ad = Yd, String.fromCharCode(255 & Ad, Ad >> 8 & 255, Ad >> 16 & 255, Ad >> 24 & 255))])
        }
        var Ad;
        const rd = qd._ExtractLongWordOrder(pd[23]),
          Gd = qd._ExtractLongWordOrder(pd[24]),
          nd = qd._ExtractLongWordOrder(pd[25]),
          Ld = qd._ExtractLongWordOrder(pd[26]);
        Vd && (Sd = dd._getRGBABufferInternalSizedFormat(Wd.textureType)), Ud = 1, pd[2] & Kd && !1 !== Xd && (Ud = Math.max(1, pd[7]));
        const Pd = Hd || 0,
          zd = dd.getCaps();
        for (let Fd = Pd; Fd < hd; Fd++) {
          for (gd = pd[4], wd = pd[3], xd = 0; xd < Ud; ++xd) {
            if (-1 === vd || vd === xd) {
              const Rd = -1 === vd ? xd : 0;
              if (!Wd.isCompressed && Wd.isFourCC) {
                Od.format = 5, Bd = gd * wd * 4;
                let Wd = null;
                if (dd._badOS || dd._badDesktopOS || !zd.textureHalfFloat && !zd.textureFloat) 128 === ud ? (Wd = qd._GetFloatAsUIntRGBAArrayBuffer(gd, wd, md.byteOffset + Ed, Bd, md.buffer, Rd), bd && 0 == Rd && bd.push(qd._GetFloatRGBAArrayBuffer(gd, wd, md.byteOffset + Ed, Bd, md.buffer, Rd))) : 64 === ud && (Wd = qd._GetHalfFloatAsUIntRGBAArrayBuffer(gd, wd, md.byteOffset + Ed, Bd, md.buffer, Rd), bd && 0 == Rd && bd.push(qd._GetHalfFloatAsFloatRGBAArrayBuffer(gd, wd, md.byteOffset + Ed, Bd, md.buffer, Rd))), Od.type = 0;
                else {
                  const dd = zd.textureFloat && (yd && zd.textureFloatLinearFiltering || !yd),
                    Fd = zd.textureHalfFloat && (yd && zd.textureHalfFloatLinearFiltering || !yd),
                    Xd = (128 === ud || 64 === ud && !Fd) && dd ? 1 : (64 === ud || 128 === ud && !dd) && Fd ? 2 : 0;
                  let Kd, hd = null;
                  if (128 === ud) switch (Xd) {
                    case 1:
                      Kd = qd._GetFloatRGBAArrayBuffer, hd = null;
                      break;
                    case 2:
                      Kd = qd._GetFloatAsHalfFloatRGBAArrayBuffer, hd = qd._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      Kd = qd._GetFloatAsUIntRGBAArrayBuffer, hd = qd._GetFloatRGBAArrayBuffer
                  } else switch (Xd) {
                    case 1:
                      Kd = qd._GetHalfFloatAsFloatRGBAArrayBuffer, hd = null;
                      break;
                    case 2:
                      Kd = qd._GetHalfFloatRGBAArrayBuffer, hd = qd._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      Kd = qd._GetHalfFloatAsUIntRGBAArrayBuffer, hd = qd._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  Od.type = Xd, Wd = Kd(gd, wd, md.byteOffset + Ed, Bd, md.buffer, Rd), bd && 0 == Rd && bd.push(hd ? hd(gd, wd, md.byteOffset + Ed, Bd, md.buffer, Rd) : Wd)
                }
                Wd && dd._uploadDataToTextureDirectly(Od, Wd, Fd, Rd)
              } else if (Wd.isRGB) Od.type = 0, 24 === ud ? (Od.format = 4, Bd = gd * wd * 3, Jd = qd._GetRGBArrayBuffer(gd, wd, md.byteOffset + Ed, Bd, md.buffer, rd, Gd, nd), dd._uploadDataToTextureDirectly(Od, Jd, Fd, Rd)) : (Od.format = 5, Bd = gd * wd * 4, Jd = qd._GetRGBAArrayBuffer(gd, wd, md.byteOffset + Ed, Bd, md.buffer, rd, Gd, nd, Ld), dd._uploadDataToTextureDirectly(Od, Jd, Fd, Rd));
              else if (Wd.isLuminance) {
                const Wd = dd._getUnpackAlignement(),
                  Xd = gd;
                Bd = Math.floor((gd + Wd - 1) / Wd) * Wd * (wd - 1) + Xd, Jd = qd._GetLuminanceArrayBuffer(gd, wd, md.byteOffset + Ed, Bd, md.buffer), Od.format = 1, Od.type = 0, dd._uploadDataToTextureDirectly(Od, Jd, Fd, Rd)
              } else Bd = Math.max(4, gd) / 4 * Math.max(4, wd) / 4 * sd, Jd = new Uint8Array(md.buffer, md.byteOffset + Ed, Bd), Od.type = 0, dd._uploadCompressedDataToTextureDirectly(Od, Sd, gd, wd, Jd, Fd, Rd)
            }
            Ed += ud ? gd * wd * (ud / 8) : Bd, gd *= .5, wd *= .5, gd = Math.max(1, gd), wd = Math.max(1, wd)
          }
          if (void 0 !== Hd) break
        }
        bd && bd.length > 0 ? Wd.sphericalPolynomial = Rd.c.ConvertCubeMapToSphericalPolynomial({
          size: pd[4],
          right: bd[0],
          left: bd[1],
          up: bd[2],
          down: bd[3],
          front: bd[4],
          back: bd[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : Wd.sphericalPolynomial = void 0
      }
    }
    qd.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);