export const id = 312;
export const ids = [311, 312];
export const modules = {
  42048: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      _DDSTextureLoader: () => Dt
    });
    var Ot = Vt(40194),
      qt = Vt(42023);
    class Dt {
      constructor() {
        this.supportCascades = !0
      }
      loadCubeData(tt, et, Vt, Dt) {
        const mt = et.Jf();
        let dt, jt = !1,
          Ht = 1e3;
        if (Array.isArray(tt))
          for (let Ot = 0; Ot < tt.length; Ot++) {
            const Vt = tt[Ot];
            dt = qt.DDSTools.GetDDSInfo(Vt), et.width = dt.width, et.height = dt.height, jt = (dt.isRGB || dt.isLuminance || dt.mipmapCount > 1) && et.generateMipMaps, mt._unpackFlipY(dt.isCompressed), qt.DDSTools.UploadDDSLevels(mt, et, Vt, dt, jt, 6, -1, Ot), dt.isFourCC || 1 !== dt.mipmapCount ? Ht = dt.mipmapCount - 1 : mt.generateMipMapsForCubemap(et)
          } else {
            const Dt = tt;
            dt = qt.DDSTools.GetDDSInfo(Dt), et.width = dt.width, et.height = dt.height, Vt && (dt.sphericalPolynomial = new Ot.g), jt = (dt.isRGB || dt.isLuminance || dt.mipmapCount > 1) && et.generateMipMaps, mt._unpackFlipY(dt.isCompressed), qt.DDSTools.UploadDDSLevels(mt, et, Dt, dt, jt, 6), dt.isFourCC || 1 !== dt.mipmapCount ? Ht = dt.mipmapCount - 1 : mt.generateMipMapsForCubemap(et, !1)
          }
        mt._setCubeMapTextureParams(et, jt, Ht), et.isReady = !0, et.onLoadedObservable.notifyObservers(et), et.onLoadedObservable.clear(), Dt && Dt({
          isDDS: !0,
          width: et.width,
          info: dt,
          data: tt,
          texture: et
        })
      }
      loadData(tt, et, Vt) {
        const Ot = qt.DDSTools.GetDDSInfo(tt),
          Dt = (Ot.isRGB || Ot.isLuminance || Ot.mipmapCount > 1) && et.generateMipMaps && Math.max(Ot.width, Ot.height) >> Ot.mipmapCount - 1 === 1;
        Vt(Ot.width, Ot.height, Dt, Ot.isFourCC, (() => {
          qt.DDSTools.UploadDDSLevels(et.Jf(), et, tt, Ot, Dt, 1)
        }))
      }
    }
  },
  42031: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ht
    });
    var Ot = Vt(37336),
      qt = Vt(37372),
      Dt = Vt(40194),
      mt = Vt(37342),
      dt = Vt(37513);
    class jt {
      constructor(tt, et, Vt, Ot) {
        this.name = tt, this.worldAxisForNormal = et, this.worldAxisForFileX = Vt, this.worldAxisForFileY = Ot
      }
    }
    class Ht {
      static _NearestPow2Floor(tt) {
        return tt <= 1 ? 1 : 1 << Math.floor(Math.log2(tt))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(tt) {
        if (!tt.isCube) return null;
        tt.vI()?.Jf().flushFramebuffer();
        const et = tt.getSize().width,
          Vt = tt._sphericalPolynomialTargetSize,
          Ot = Vt > 0 ? this._NearestPow2Floor(Vt) : 0,
          qt = !tt.noMipmap && !0 === tt._texture?.generateMipMaps,
          Dt = Ot > 0 && Ot < et && qt,
          mt = Dt ? Math.max(0, Math.round(Math.log2(et / Ot))) : 0,
          dt = Dt ? Math.max(1, Math.floor(et / Math.pow(2, mt))) : et,
          jt = tt.readPixels(0, mt, void 0, !1),
          Ht = tt.readPixels(1, mt, void 0, !1);
        let Xt, Qt;
        tt.isRenderTarget ? (Xt = tt.readPixels(3, mt, void 0, !1), Qt = tt.readPixels(2, mt, void 0, !1)) : (Xt = tt.readPixels(2, mt, void 0, !1), Qt = tt.readPixels(3, mt, void 0, !1));
        const lt = tt.readPixels(4, mt, void 0, !1),
          Et = tt.readPixels(5, mt, void 0, !1),
          ft = tt.gammaSpace,
          wt = Ot > 0 && Ot < et && !Dt;
        return new Promise((tt => {
          Promise.all([Ht, jt, Xt, Qt, lt, Et]).then((Vt => {
            let [qt, Dt, mt, jt, Ht, Xt] = Vt, Qt = dt;
            if (wt) {
              const tt = 4;
              qt = this._DownsampleFace(qt, et, Ot, tt), Dt = this._DownsampleFace(Dt, et, Ot, tt), mt = this._DownsampleFace(mt, et, Ot, tt), jt = this._DownsampleFace(jt, et, Ot, tt), Ht = this._DownsampleFace(Ht, et, Ot, tt), Xt = this._DownsampleFace(Xt, et, Ot, tt), Qt = Ot
            }
            const lt = {
              size: Qt,
              right: Dt,
              left: qt,
              up: mt,
              down: jt,
              front: Ht,
              back: Xt,
              format: 5,
              type: qt instanceof Float32Array ? 1 : 0,
              gammaSpace: ft
            };
            tt(this.ConvertCubeMapToSphericalPolynomial(lt))
          }))
        }))
      }
      static _AreaElement(tt, et) {
        return Math.atan2(tt * et, Math.sqrt(tt * tt + et * et + 1))
      }
      static _DownsampleFace(tt, et, Vt, Ot) {
        const qt = tt instanceof Float32Array ? tt : Float32Array.from(tt),
          Dt = Vt * Vt * Ot,
          mt = new Float32Array(Dt),
          dt = et / Vt,
          jt = 1 / (dt * dt);
        for (let Xt = 0; Xt < Vt; Xt++) {
          const tt = Math.floor(Xt * dt),
            Dt = Math.floor((Xt + 1) * dt);
          for (let Ht = 0; Ht < Vt; Ht++) {
            const Qt = Math.floor(Ht * dt),
              lt = Math.floor((Ht + 1) * dt),
              Et = (Xt * Vt + Ht) * Ot;
            for (let Vt = 0; Vt < Ot; Vt++) {
              let dt = 0;
              for (let mt = tt; mt < Dt; mt++)
                for (let tt = Qt; tt < lt; tt++) dt += qt[(mt * et + tt) * Ot + Vt];
              mt[Et + Vt] = dt * jt
            }
          }
        }
        if (tt instanceof Float32Array) return mt;
        const Ht = new(0, tt.constructor)(Dt);
        for (let Xt = 0; Xt < Dt; Xt++) Ht[Xt] = mt[Xt] + .5 | 0;
        return Ht
      }
      static ConvertCubeMapToSphericalPolynomial(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Vt = et > 0 ? this._NearestPow2Floor(et) : 0;
        if (Vt > 0 && tt.size > Vt) {
          const et = 5 === tt.format ? 4 : 3,
            Ot = ["right", "left", "up", "down", "front", "back"],
            qt = {};
          for (const Dt of Ot) qt[Dt] = this._DownsampleFace(tt[Dt], tt.size, Vt, et);
          tt = {
            ...tt,
            ...qt,
            size: Vt
          }
        }
        const Ot = new Dt.e;
        let jt = 0;
        const Ht = 2 / tt.size,
          Xt = Ht,
          Qt = .5 * Ht,
          lt = Qt - 1;
        for (let Dt = 0; Dt < 6; Dt++) {
          const et = this._FileFaces[Dt],
            Vt = tt[et.name];
          let Et = lt;
          const ft = 5 === tt.format ? 4 : 3;
          for (let Dt = 0; Dt < tt.size; Dt++) {
            let wt = lt;
            for (let Xt = 0; Xt < tt.size; Xt++) {
              const lt = et.worldAxisForFileX.scale(wt).add(et.worldAxisForFileY.scale(Et)).add(et.worldAxisForNormal);
              lt.normalize();
              const yt = this._AreaElement(wt - Qt, Et - Qt) - this._AreaElement(wt - Qt, Et + Qt) - this._AreaElement(wt + Qt, Et - Qt) + this._AreaElement(wt + Qt, Et + Qt);
              let Nt = Vt[Dt * tt.size * ft + Xt * ft + 0],
                Mt = Vt[Dt * tt.size * ft + Xt * ft + 1],
                bt = Vt[Dt * tt.size * ft + Xt * ft + 2];
              isNaN(Nt) && (Nt = 0), isNaN(Mt) && (Mt = 0), isNaN(bt) && (bt = 0), 0 === tt.type && (Nt /= 255, Mt /= 255, bt /= 255), tt.gammaSpace && (Nt = Math.pow((0, qt.Clamp)(Nt), mt.i), Mt = Math.pow((0, qt.Clamp)(Mt), mt.i), bt = Math.pow((0, qt.Clamp)(bt), mt.i));
              const Jt = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const tt = Math.max(Nt, Mt, bt);
                if (tt > Jt) {
                  const et = Jt / tt;
                  Nt *= et, Mt *= et, bt *= et
                }
              } else Nt = (0, qt.Clamp)(Nt, 0, Jt), Mt = (0, qt.Clamp)(Mt, 0, Jt), bt = (0, qt.Clamp)(bt, 0, Jt);
              const Ct = new dt.b(Nt, Mt, bt);
              Ot.addLight(lt, Ct, yt), jt += yt, wt += Ht
            }
            Et += Xt
          }
        }
        const Et = 6 * (4 * Math.PI) / 6 / jt;
        return Ot.scaleInPlace(Et), Ot.convertIncidentRadianceToIrradiance(), Ot.convertIrradianceToLambertianRadiance(), Dt.g.FromHarmonics(Ot)
      }
    }
    Ht._FileFaces = [new jt("right", new Ot.n(1, 0, 0), new Ot.n(0, 0, -1), new Ot.n(0, -1, 0)), new jt("left", new Ot.n(-1, 0, 0), new Ot.n(0, 0, 1), new Ot.n(0, -1, 0)), new jt("up", new Ot.n(0, 1, 0), new Ot.n(1, 0, 0), new Ot.n(0, 0, 1)), new jt("down", new Ot.n(0, -1, 0), new Ot.n(1, 0, 0), new Ot.n(0, 0, -1)), new jt("front", new Ot.n(0, 0, 1), new Ot.n(1, 0, 0), new Ot.n(0, -1, 0)), new jt("back", new Ot.n(0, 0, -1), new Ot.n(-1, 0, 0), new Ot.n(0, -1, 0))], Ht.MAX_HDRI_VALUE = 4096, Ht.PRESERVE_CLAMPED_COLORS = !1
  },
  42023: (tt, et, Vt) => {
    Vt.d(et, {
      DDSTools: () => ft
    });
    var Ot = Vt(37372),
      qt = Vt(38899),
      Dt = Vt(42031),
      mt = Vt(40272);
    const dt = 131072,
      jt = 131072;

    function Ht(tt) {
      return tt.charCodeAt(0) + (tt.charCodeAt(1) << 8) + (tt.charCodeAt(2) << 16) + (tt.charCodeAt(3) << 24)
    }
    const Xt = Ht("DXT1"),
      Qt = Ht("DXT3"),
      lt = Ht("DXT5"),
      Et = Ht("DX10");
    class ft {
      static GetDDSInfo(tt) {
        const et = new Int32Array(tt.buffer, tt.byteOffset, 31),
          Vt = new Int32Array(tt.buffer, tt.byteOffset, 35);
        let Ot = 1;
        et[2] & dt && (Ot = Math.max(1, et[7]));
        const qt = et[21],
          Dt = qt === Et ? Vt[32] : 0;
        let mt = 0;
        switch (qt) {
          case 113:
            mt = 2;
            break;
          case 116:
            mt = 1;
            break;
          case Et:
            if (10 === Dt) {
              mt = 2;
              break
            }
            if (2 === Dt) {
              mt = 1;
              break
            }
        }
        return {
          width: et[4],
          height: et[3],
          mipmapCount: Ot,
          isFourCC: 4 === (4 & et[20]),
          isRGB: 64 === (64 & et[20]),
          isLuminance: (et[20] & jt) === jt,
          isCube: 512 === (512 & et[28]),
          isCompressed: qt === Xt || qt === Qt || qt === lt,
          dxgiFormat: Dt,
          textureType: mt
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(tt, et, Vt, Ot, qt, Dt) {
        const dt = new Float32Array(Ot),
          jt = new Uint16Array(qt, Vt);
        let Ht = 0;
        for (let Xt = 0; Xt < et; Xt++)
          for (let et = 0; et < tt; et++) {
            const Vt = 4 * (et + Xt * tt);
            dt[Ht] = (0, mt.e)(jt[Vt]), dt[Ht + 1] = (0, mt.e)(jt[Vt + 1]), dt[Ht + 2] = (0, mt.e)(jt[Vt + 2]), ft.StoreLODInAlphaChannel ? dt[Ht + 3] = Dt : dt[Ht + 3] = (0, mt.e)(jt[Vt + 3]), Ht += 4
          }
        return dt
      }
      static _GetHalfFloatRGBAArrayBuffer(tt, et, Vt, Ot, qt, Dt) {
        if (ft.StoreLODInAlphaChannel) {
          const dt = new Uint16Array(Ot),
            jt = new Uint16Array(qt, Vt);
          let Ht = 0;
          for (let Vt = 0; Vt < et; Vt++)
            for (let et = 0; et < tt; et++) {
              const Ot = 4 * (et + Vt * tt);
              dt[Ht] = jt[Ot], dt[Ht + 1] = jt[Ot + 1], dt[Ht + 2] = jt[Ot + 2], dt[Ht + 3] = (0, mt.k)(Dt), Ht += 4
            }
          return dt
        }
        return new Uint16Array(qt, Vt, Ot)
      }
      static _GetFloatRGBAArrayBuffer(tt, et, Vt, Ot, qt, Dt) {
        if (ft.StoreLODInAlphaChannel) {
          const mt = new Float32Array(Ot),
            dt = new Float32Array(qt, Vt);
          let jt = 0;
          for (let Vt = 0; Vt < et; Vt++)
            for (let et = 0; et < tt; et++) {
              const Ot = 4 * (et + Vt * tt);
              mt[jt] = dt[Ot], mt[jt + 1] = dt[Ot + 1], mt[jt + 2] = dt[Ot + 2], mt[jt + 3] = Dt, jt += 4
            }
          return mt
        }
        return new Float32Array(qt, Vt, Ot)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(tt, et, Vt, Ot, qt, Dt) {
        const dt = new Uint16Array(Ot),
          jt = new Float32Array(qt, Vt);
        let Ht = 0;
        for (let Xt = 0; Xt < et; Xt++)
          for (let et = 0; et < tt; et++) dt[Ht] = (0, mt.k)(jt[Ht]), dt[Ht + 1] = (0, mt.k)(jt[Ht + 1]), dt[Ht + 2] = (0, mt.k)(jt[Ht + 2]), ft.StoreLODInAlphaChannel ? dt[Ht + 3] = (0, mt.k)(Dt) : dt[Ht + 3] = (0, mt.k)(jt[Ht + 3]), Ht += 4;
        return dt
      }
      static _GetFloatAsUIntRGBAArrayBuffer(tt, et, Vt, qt, Dt, mt) {
        const dt = new Uint8Array(qt),
          jt = new Float32Array(Dt, Vt);
        let Ht = 0;
        for (let Xt = 0; Xt < et; Xt++)
          for (let et = 0; et < tt; et++) {
            const Vt = 4 * (et + Xt * tt);
            dt[Ht] = 255 * (0, Ot.Clamp)(jt[Vt]), dt[Ht + 1] = 255 * (0, Ot.Clamp)(jt[Vt + 1]), dt[Ht + 2] = 255 * (0, Ot.Clamp)(jt[Vt + 2]), ft.StoreLODInAlphaChannel ? dt[Ht + 3] = mt : dt[Ht + 3] = 255 * (0, Ot.Clamp)(jt[Vt + 3]), Ht += 4
          }
        return dt
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(tt, et, Vt, qt, Dt, dt) {
        const jt = new Uint8Array(qt),
          Ht = new Uint16Array(Dt, Vt);
        let Xt = 0;
        for (let Qt = 0; Qt < et; Qt++)
          for (let et = 0; et < tt; et++) {
            const Vt = 4 * (et + Qt * tt);
            jt[Xt] = 255 * (0, Ot.Clamp)((0, mt.e)(Ht[Vt])), jt[Xt + 1] = 255 * (0, Ot.Clamp)((0, mt.e)(Ht[Vt + 1])), jt[Xt + 2] = 255 * (0, Ot.Clamp)((0, mt.e)(Ht[Vt + 2])), ft.StoreLODInAlphaChannel ? jt[Xt + 3] = dt : jt[Xt + 3] = 255 * (0, Ot.Clamp)((0, mt.e)(Ht[Vt + 3])), Xt += 4
          }
        return jt
      }
      static _GetRGBAArrayBuffer(tt, et, Vt, Ot, qt, Dt, mt, dt, jt) {
        const Ht = new Uint8Array(Ot),
          Xt = new Uint8Array(qt, Vt);
        let Qt = 0;
        for (let lt = 0; lt < et; lt++)
          for (let et = 0; et < tt; et++) {
            const Vt = 4 * (et + lt * tt);
            Ht[Qt] = Xt[Vt + Dt], Ht[Qt + 1] = Xt[Vt + mt], Ht[Qt + 2] = Xt[Vt + dt], Ht[Qt + 3] = Xt[Vt + jt], Qt += 4
          }
        return Ht
      }
      static _ExtractLongWordOrder(tt) {
        return 0 === tt || 255 === tt || -16777216 === tt ? 0 : 1 + ft._ExtractLongWordOrder(tt >> 8)
      }
      static _GetRGBArrayBuffer(tt, et, Vt, Ot, qt, Dt, mt, dt) {
        const jt = new Uint8Array(Ot),
          Ht = new Uint8Array(qt, Vt);
        let Xt = 0;
        for (let Qt = 0; Qt < et; Qt++)
          for (let et = 0; et < tt; et++) {
            const Vt = 3 * (et + Qt * tt);
            jt[Xt] = Ht[Vt + Dt], jt[Xt + 1] = Ht[Vt + mt], jt[Xt + 2] = Ht[Vt + dt], Xt += 3
          }
        return jt
      }
      static _GetLuminanceArrayBuffer(tt, et, Vt, Ot, qt) {
        const Dt = new Uint8Array(Ot),
          mt = new Uint8Array(qt, Vt);
        let dt = 0;
        for (let jt = 0; jt < et; jt++)
          for (let et = 0; et < tt; et++) {
            const Vt = et + jt * tt;
            Dt[dt] = mt[Vt], dt++
          }
        return Dt
      }
      static UploadDDSLevels(tt, et, Vt, Ot, mt, jt) {
        let Ht = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          wt = arguments.length > 7 ? arguments[7] : void 0,
          yt = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          Nt = null;
        Ot.sphericalPolynomial && (Nt = []);
        const Mt = !!tt.getCaps().s3tc;
        et.generateMipMaps = mt;
        const bt = new Int32Array(Vt.buffer, Vt.byteOffset, 31);
        let Jt, Ct, ut, Kt, ht, vt, Wt, St = 0,
          ct = 0,
          Rt = 1;
        if (542327876 !== bt[0]) return void qt.d.Error("Invalid magic number in DDS header");
        if (!Ot.isFourCC && !Ot.isRGB && !Ot.isLuminance) return void qt.d.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (Ot.isCompressed && !Mt) return void qt.d.Error("Compressed textures are not supported on this platform.");
        let It = bt[22];
        Kt = bt[1] + 4;
        let Pt = !1;
        if (Ot.isFourCC) switch (Jt = bt[21], Jt) {
          case Xt:
            Rt = 8, ct = 33777;
            break;
          case Qt:
            Rt = 16, ct = 33778;
            break;
          case lt:
            Rt = 16, ct = 33779;
            break;
          case 113:
            Pt = !0, It = 64;
            break;
          case 116:
            Pt = !0, It = 128;
            break;
          case Et: {
            Kt += 20;
            let tt = !1;
            switch (Ot.dxgiFormat) {
              case 10:
                Pt = !0, It = 64, tt = !0;
                break;
              case 2:
                Pt = !0, It = 128, tt = !0;
                break;
              case 88:
                Ot.isRGB = !0, Ot.isFourCC = !1, It = 32, tt = !0
            }
            if (tt) break
          }
          default:
            return void qt.d.Error(["Unsupported FourCC code:", (Zt = Jt, String.fromCharCode(255 & Zt, Zt >> 8 & 255, Zt >> 16 & 255, Zt >> 24 & 255))])
        }
        var Zt;
        const Lt = ft._ExtractLongWordOrder(bt[23]),
          Ft = ft._ExtractLongWordOrder(bt[24]),
          kt = ft._ExtractLongWordOrder(bt[25]),
          Gt = ft._ExtractLongWordOrder(bt[26]);
        Pt && (ct = tt._getRGBABufferInternalSizedFormat(Ot.textureType)), vt = 1, bt[2] & dt && !1 !== mt && (vt = Math.max(1, bt[7]));
        const zt = wt || 0,
          ot = tt.getCaps();
        for (let qt = zt; qt < jt; qt++) {
          for (Ct = bt[4], ut = bt[3], Wt = 0; Wt < vt; ++Wt) {
            if (-1 === Ht || Ht === Wt) {
              const Dt = -1 === Ht ? Wt : 0;
              if (!Ot.isCompressed && Ot.isFourCC) {
                et.format = 5, St = Ct * ut * 4;
                let Ot = null;
                if (tt._badOS || tt._badDesktopOS || !ot.textureHalfFloat && !ot.textureFloat) 128 === It ? (Ot = ft._GetFloatAsUIntRGBAArrayBuffer(Ct, ut, Vt.byteOffset + Kt, St, Vt.buffer, Dt), Nt && 0 == Dt && Nt.push(ft._GetFloatRGBAArrayBuffer(Ct, ut, Vt.byteOffset + Kt, St, Vt.buffer, Dt))) : 64 === It && (Ot = ft._GetHalfFloatAsUIntRGBAArrayBuffer(Ct, ut, Vt.byteOffset + Kt, St, Vt.buffer, Dt), Nt && 0 == Dt && Nt.push(ft._GetHalfFloatAsFloatRGBAArrayBuffer(Ct, ut, Vt.byteOffset + Kt, St, Vt.buffer, Dt))), et.type = 0;
                else {
                  const tt = ot.textureFloat && (yt && ot.textureFloatLinearFiltering || !yt),
                    qt = ot.textureHalfFloat && (yt && ot.textureHalfFloatLinearFiltering || !yt),
                    mt = (128 === It || 64 === It && !qt) && tt ? 1 : (64 === It || 128 === It && !tt) && qt ? 2 : 0;
                  let dt, jt = null;
                  if (128 === It) switch (mt) {
                    case 1:
                      dt = ft._GetFloatRGBAArrayBuffer, jt = null;
                      break;
                    case 2:
                      dt = ft._GetFloatAsHalfFloatRGBAArrayBuffer, jt = ft._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      dt = ft._GetFloatAsUIntRGBAArrayBuffer, jt = ft._GetFloatRGBAArrayBuffer
                  } else switch (mt) {
                    case 1:
                      dt = ft._GetHalfFloatAsFloatRGBAArrayBuffer, jt = null;
                      break;
                    case 2:
                      dt = ft._GetHalfFloatRGBAArrayBuffer, jt = ft._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      dt = ft._GetHalfFloatAsUIntRGBAArrayBuffer, jt = ft._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  et.type = mt, Ot = dt(Ct, ut, Vt.byteOffset + Kt, St, Vt.buffer, Dt), Nt && 0 == Dt && Nt.push(jt ? jt(Ct, ut, Vt.byteOffset + Kt, St, Vt.buffer, Dt) : Ot)
                }
                Ot && tt._uploadDataToTextureDirectly(et, Ot, qt, Dt)
              } else if (Ot.isRGB) et.type = 0, 24 === It ? (et.format = 4, St = Ct * ut * 3, ht = ft._GetRGBArrayBuffer(Ct, ut, Vt.byteOffset + Kt, St, Vt.buffer, Lt, Ft, kt), tt._uploadDataToTextureDirectly(et, ht, qt, Dt)) : (et.format = 5, St = Ct * ut * 4, ht = ft._GetRGBAArrayBuffer(Ct, ut, Vt.byteOffset + Kt, St, Vt.buffer, Lt, Ft, kt, Gt), tt._uploadDataToTextureDirectly(et, ht, qt, Dt));
              else if (Ot.isLuminance) {
                const Ot = tt._getUnpackAlignement(),
                  mt = Ct;
                St = Math.floor((Ct + Ot - 1) / Ot) * Ot * (ut - 1) + mt, ht = ft._GetLuminanceArrayBuffer(Ct, ut, Vt.byteOffset + Kt, St, Vt.buffer), et.format = 1, et.type = 0, tt._uploadDataToTextureDirectly(et, ht, qt, Dt)
              } else St = Math.max(4, Ct) / 4 * Math.max(4, ut) / 4 * Rt, ht = new Uint8Array(Vt.buffer, Vt.byteOffset + Kt, St), et.type = 0, tt._uploadCompressedDataToTextureDirectly(et, ct, Ct, ut, ht, qt, Dt)
            }
            Kt += It ? Ct * ut * (It / 8) : St, Ct *= .5, ut *= .5, Ct = Math.max(1, Ct), ut = Math.max(1, ut)
          }
          if (void 0 !== wt) break
        }
        Nt && Nt.length > 0 ? Ot.sphericalPolynomial = Dt.e.ConvertCubeMapToSphericalPolynomial({
          size: bt[4],
          right: Nt[0],
          left: Nt[1],
          up: Nt[2],
          down: Nt[3],
          front: Nt[4],
          back: Nt[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : Ot.sphericalPolynomial = void 0
      }
    }
    ft.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);