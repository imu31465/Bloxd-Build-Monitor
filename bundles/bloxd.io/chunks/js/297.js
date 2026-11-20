export const id = 297;
export const ids = [297];
export const modules = {
  41067: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Nv
    });
    var hv = Pv(36594),
      Sv = Pv(36620),
      ev = Pv(39284),
      gv = Pv(36599),
      pv = Pv(36751);
    class dv {
      constructor(vv, zv, Pv, hv) {
        this.name = vv, this.worldAxisForNormal = zv, this.worldAxisForFileX = Pv, this.worldAxisForFileY = hv
      }
    }
    class Nv {
      static _NearestPow2Floor(vv) {
        return vv <= 1 ? 1 : 1 << Math.floor(Math.log2(vv))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(vv) {
        if (!vv.isCube) return null;
        vv.rD()?.ma().flushFramebuffer();
        const zv = vv.getSize().width,
          Pv = vv._sphericalPolynomialTargetSize,
          hv = Pv > 0 ? this._NearestPow2Floor(Pv) : 0,
          Sv = !vv.noMipmap && !0 === vv._texture?.generateMipMaps,
          ev = hv > 0 && hv < zv && Sv,
          gv = ev ? Math.max(0, Math.round(Math.log2(zv / hv))) : 0,
          pv = ev ? Math.max(1, Math.floor(zv / Math.pow(2, gv))) : zv,
          dv = vv.readPixels(0, gv, void 0, !1),
          Nv = vv.readPixels(1, gv, void 0, !1);
        let lv, Tv;
        vv.isRenderTarget ? (lv = vv.readPixels(3, gv, void 0, !1), Tv = vv.readPixels(2, gv, void 0, !1)) : (lv = vv.readPixels(2, gv, void 0, !1), Tv = vv.readPixels(3, gv, void 0, !1));
        const Wv = vv.readPixels(4, gv, void 0, !1),
          wv = vv.readPixels(5, gv, void 0, !1),
          av = vv.gammaSpace,
          sv = hv > 0 && hv < zv && !ev;
        return new Promise((vv => {
          Promise.all([Nv, dv, lv, Tv, Wv, wv]).then((Pv => {
            let [Sv, ev, gv, dv, Nv, lv] = Pv, Tv = pv;
            if (sv) {
              const vv = 4;
              Sv = this._DownsampleFace(Sv, zv, hv, vv), ev = this._DownsampleFace(ev, zv, hv, vv), gv = this._DownsampleFace(gv, zv, hv, vv), dv = this._DownsampleFace(dv, zv, hv, vv), Nv = this._DownsampleFace(Nv, zv, hv, vv), lv = this._DownsampleFace(lv, zv, hv, vv), Tv = hv
            }
            const Wv = {
              size: Tv,
              right: ev,
              left: Sv,
              up: gv,
              down: dv,
              front: Nv,
              back: lv,
              format: 5,
              type: Sv instanceof Float32Array ? 1 : 0,
              gammaSpace: av
            };
            vv(this.ConvertCubeMapToSphericalPolynomial(Wv))
          }))
        }))
      }
      static _AreaElement(vv, zv) {
        return Math.atan2(vv * zv, Math.sqrt(vv * vv + zv * zv + 1))
      }
      static _DownsampleFace(vv, zv, Pv, hv) {
        const Sv = vv instanceof Float32Array ? vv : Float32Array.from(vv),
          ev = Pv * Pv * hv,
          gv = new Float32Array(ev),
          pv = zv / Pv,
          dv = 1 / (pv * pv);
        for (let lv = 0; lv < Pv; lv++) {
          const vv = Math.floor(lv * pv),
            ev = Math.floor((lv + 1) * pv);
          for (let Nv = 0; Nv < Pv; Nv++) {
            const Tv = Math.floor(Nv * pv),
              Wv = Math.floor((Nv + 1) * pv),
              wv = (lv * Pv + Nv) * hv;
            for (let Pv = 0; Pv < hv; Pv++) {
              let pv = 0;
              for (let gv = vv; gv < ev; gv++)
                for (let vv = Tv; vv < Wv; vv++) pv += Sv[(gv * zv + vv) * hv + Pv];
              gv[wv + Pv] = pv * dv
            }
          }
        }
        if (vv instanceof Float32Array) return gv;
        const Nv = new(0, vv.constructor)(ev);
        for (let lv = 0; lv < ev; lv++) Nv[lv] = gv[lv] + .5 | 0;
        return Nv
      }
      static ConvertCubeMapToSphericalPolynomial(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Pv = zv > 0 ? this._NearestPow2Floor(zv) : 0;
        if (Pv > 0 && vv.size > Pv) {
          const zv = 5 === vv.format ? 4 : 3,
            hv = ["right", "left", "up", "down", "front", "back"],
            Sv = {};
          for (const ev of hv) Sv[ev] = this._DownsampleFace(vv[ev], vv.size, Pv, zv);
          vv = {
            ...vv,
            ...Sv,
            size: Pv
          }
        }
        const hv = new ev.d;
        let dv = 0;
        const Nv = 2 / vv.size,
          lv = Nv,
          Tv = .5 * Nv,
          Wv = Tv - 1;
        for (let ev = 0; ev < 6; ev++) {
          const zv = this._FileFaces[ev],
            Pv = vv[zv.name];
          let wv = Wv;
          const av = 5 === vv.format ? 4 : 3;
          for (let ev = 0; ev < vv.size; ev++) {
            let sv = Wv;
            for (let lv = 0; lv < vv.size; lv++) {
              const Wv = zv.worldAxisForFileX.scale(sv).add(zv.worldAxisForFileY.scale(wv)).add(zv.worldAxisForNormal);
              Wv.normalize();
              const Cv = this._AreaElement(sv - Tv, wv - Tv) - this._AreaElement(sv - Tv, wv + Tv) - this._AreaElement(sv + Tv, wv - Tv) + this._AreaElement(sv + Tv, wv + Tv);
              let iv = Pv[ev * vv.size * av + lv * av + 0],
                cv = Pv[ev * vv.size * av + lv * av + 1],
                Gv = Pv[ev * vv.size * av + lv * av + 2];
              isNaN(iv) && (iv = 0), isNaN(cv) && (cv = 0), isNaN(Gv) && (Gv = 0), 0 === vv.type && (iv /= 255, cv /= 255, Gv /= 255), vv.gammaSpace && (iv = Math.pow((0, Sv.Clamp)(iv), gv.h), cv = Math.pow((0, Sv.Clamp)(cv), gv.h), Gv = Math.pow((0, Sv.Clamp)(Gv), gv.h));
              const mv = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const vv = Math.max(iv, cv, Gv);
                if (vv > mv) {
                  const zv = mv / vv;
                  iv *= zv, cv *= zv, Gv *= zv
                }
              } else iv = (0, Sv.Clamp)(iv, 0, mv), cv = (0, Sv.Clamp)(cv, 0, mv), Gv = (0, Sv.Clamp)(Gv, 0, mv);
              const jv = new pv.b(iv, cv, Gv);
              hv.addLight(Wv, jv, Cv), dv += Cv, sv += Nv
            }
            wv += lv
          }
        }
        const wv = 6 * (4 * Math.PI) / 6 / dv;
        return hv.scaleInPlace(wv), hv.convertIncidentRadianceToIrradiance(), hv.convertIrradianceToLambertianRadiance(), ev.f.FromHarmonics(hv)
      }
    }
    Nv._FileFaces = [new dv("right", new hv.l(1, 0, 0), new hv.l(0, 0, -1), new hv.l(0, -1, 0)), new dv("left", new hv.l(-1, 0, 0), new hv.l(0, 0, 1), new hv.l(0, -1, 0)), new dv("up", new hv.l(0, 1, 0), new hv.l(1, 0, 0), new hv.l(0, 0, 1)), new dv("down", new hv.l(0, -1, 0), new hv.l(1, 0, 0), new hv.l(0, 0, -1)), new dv("front", new hv.l(0, 0, 1), new hv.l(1, 0, 0), new hv.l(0, -1, 0)), new dv("back", new hv.l(0, 0, -1), new hv.l(-1, 0, 0), new hv.l(0, -1, 0))], Nv.MAX_HDRI_VALUE = 4096, Nv.PRESERVE_CLAMPED_COLORS = !1
  },
  41058: (vv, zv, Pv) => {
    Pv.d(zv, {
      DDSTools: () => av
    });
    var hv = Pv(36620),
      Sv = Pv(38209),
      ev = Pv(41067),
      gv = Pv(39368);
    const pv = 131072,
      dv = 131072;

    function Nv(vv) {
      return vv.charCodeAt(0) + (vv.charCodeAt(1) << 8) + (vv.charCodeAt(2) << 16) + (vv.charCodeAt(3) << 24)
    }
    const lv = Nv("DXT1"),
      Tv = Nv("DXT3"),
      Wv = Nv("DXT5"),
      wv = Nv("DX10");
    class av {
      static GetDDSInfo(vv) {
        const zv = new Int32Array(vv.buffer, vv.byteOffset, 31),
          Pv = new Int32Array(vv.buffer, vv.byteOffset, 35);
        let hv = 1;
        zv[2] & pv && (hv = Math.max(1, zv[7]));
        const Sv = zv[21],
          ev = Sv === wv ? Pv[32] : 0;
        let gv = 0;
        switch (Sv) {
          case 113:
            gv = 2;
            break;
          case 116:
            gv = 1;
            break;
          case wv:
            if (10 === ev) {
              gv = 2;
              break
            }
            if (2 === ev) {
              gv = 1;
              break
            }
        }
        return {
          width: zv[4],
          height: zv[3],
          mipmapCount: hv,
          isFourCC: 4 === (4 & zv[20]),
          isRGB: 64 === (64 & zv[20]),
          isLuminance: (zv[20] & dv) === dv,
          isCube: 512 === (512 & zv[28]),
          isCompressed: Sv === lv || Sv === Tv || Sv === Wv,
          dxgiFormat: ev,
          textureType: gv
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(vv, zv, Pv, hv, Sv, ev) {
        const pv = new Float32Array(hv),
          dv = new Uint16Array(Sv, Pv);
        let Nv = 0;
        for (let lv = 0; lv < zv; lv++)
          for (let zv = 0; zv < vv; zv++) {
            const Pv = 4 * (zv + lv * vv);
            pv[Nv] = (0, gv.b)(dv[Pv]), pv[Nv + 1] = (0, gv.b)(dv[Pv + 1]), pv[Nv + 2] = (0, gv.b)(dv[Pv + 2]), av.StoreLODInAlphaChannel ? pv[Nv + 3] = ev : pv[Nv + 3] = (0, gv.b)(dv[Pv + 3]), Nv += 4
          }
        return pv
      }
      static _GetHalfFloatRGBAArrayBuffer(vv, zv, Pv, hv, Sv, ev) {
        if (av.StoreLODInAlphaChannel) {
          const pv = new Uint16Array(hv),
            dv = new Uint16Array(Sv, Pv);
          let Nv = 0;
          for (let Pv = 0; Pv < zv; Pv++)
            for (let zv = 0; zv < vv; zv++) {
              const hv = 4 * (zv + Pv * vv);
              pv[Nv] = dv[hv], pv[Nv + 1] = dv[hv + 1], pv[Nv + 2] = dv[hv + 2], pv[Nv + 3] = (0, gv.i)(ev), Nv += 4
            }
          return pv
        }
        return new Uint16Array(Sv, Pv, hv)
      }
      static _GetFloatRGBAArrayBuffer(vv, zv, Pv, hv, Sv, ev) {
        if (av.StoreLODInAlphaChannel) {
          const gv = new Float32Array(hv),
            pv = new Float32Array(Sv, Pv);
          let dv = 0;
          for (let Pv = 0; Pv < zv; Pv++)
            for (let zv = 0; zv < vv; zv++) {
              const hv = 4 * (zv + Pv * vv);
              gv[dv] = pv[hv], gv[dv + 1] = pv[hv + 1], gv[dv + 2] = pv[hv + 2], gv[dv + 3] = ev, dv += 4
            }
          return gv
        }
        return new Float32Array(Sv, Pv, hv)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(vv, zv, Pv, hv, Sv, ev) {
        const pv = new Uint16Array(hv),
          dv = new Float32Array(Sv, Pv);
        let Nv = 0;
        for (let lv = 0; lv < zv; lv++)
          for (let zv = 0; zv < vv; zv++) pv[Nv] = (0, gv.i)(dv[Nv]), pv[Nv + 1] = (0, gv.i)(dv[Nv + 1]), pv[Nv + 2] = (0, gv.i)(dv[Nv + 2]), av.StoreLODInAlphaChannel ? pv[Nv + 3] = (0, gv.i)(ev) : pv[Nv + 3] = (0, gv.i)(dv[Nv + 3]), Nv += 4;
        return pv
      }
      static _GetFloatAsUIntRGBAArrayBuffer(vv, zv, Pv, Sv, ev, gv) {
        const pv = new Uint8Array(Sv),
          dv = new Float32Array(ev, Pv);
        let Nv = 0;
        for (let lv = 0; lv < zv; lv++)
          for (let zv = 0; zv < vv; zv++) {
            const Pv = 4 * (zv + lv * vv);
            pv[Nv] = 255 * (0, hv.Clamp)(dv[Pv]), pv[Nv + 1] = 255 * (0, hv.Clamp)(dv[Pv + 1]), pv[Nv + 2] = 255 * (0, hv.Clamp)(dv[Pv + 2]), av.StoreLODInAlphaChannel ? pv[Nv + 3] = gv : pv[Nv + 3] = 255 * (0, hv.Clamp)(dv[Pv + 3]), Nv += 4
          }
        return pv
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(vv, zv, Pv, Sv, ev, pv) {
        const dv = new Uint8Array(Sv),
          Nv = new Uint16Array(ev, Pv);
        let lv = 0;
        for (let Tv = 0; Tv < zv; Tv++)
          for (let zv = 0; zv < vv; zv++) {
            const Pv = 4 * (zv + Tv * vv);
            dv[lv] = 255 * (0, hv.Clamp)((0, gv.b)(Nv[Pv])), dv[lv + 1] = 255 * (0, hv.Clamp)((0, gv.b)(Nv[Pv + 1])), dv[lv + 2] = 255 * (0, hv.Clamp)((0, gv.b)(Nv[Pv + 2])), av.StoreLODInAlphaChannel ? dv[lv + 3] = pv : dv[lv + 3] = 255 * (0, hv.Clamp)((0, gv.b)(Nv[Pv + 3])), lv += 4
          }
        return dv
      }
      static _GetRGBAArrayBuffer(vv, zv, Pv, hv, Sv, ev, gv, pv, dv) {
        const Nv = new Uint8Array(hv),
          lv = new Uint8Array(Sv, Pv);
        let Tv = 0;
        for (let Wv = 0; Wv < zv; Wv++)
          for (let zv = 0; zv < vv; zv++) {
            const Pv = 4 * (zv + Wv * vv);
            Nv[Tv] = lv[Pv + ev], Nv[Tv + 1] = lv[Pv + gv], Nv[Tv + 2] = lv[Pv + pv], Nv[Tv + 3] = lv[Pv + dv], Tv += 4
          }
        return Nv
      }
      static _ExtractLongWordOrder(vv) {
        return 0 === vv || 255 === vv || -16777216 === vv ? 0 : 1 + av._ExtractLongWordOrder(vv >> 8)
      }
      static _GetRGBArrayBuffer(vv, zv, Pv, hv, Sv, ev, gv, pv) {
        const dv = new Uint8Array(hv),
          Nv = new Uint8Array(Sv, Pv);
        let lv = 0;
        for (let Tv = 0; Tv < zv; Tv++)
          for (let zv = 0; zv < vv; zv++) {
            const Pv = 3 * (zv + Tv * vv);
            dv[lv] = Nv[Pv + ev], dv[lv + 1] = Nv[Pv + gv], dv[lv + 2] = Nv[Pv + pv], lv += 3
          }
        return dv
      }
      static _GetLuminanceArrayBuffer(vv, zv, Pv, hv, Sv) {
        const ev = new Uint8Array(hv),
          gv = new Uint8Array(Sv, Pv);
        let pv = 0;
        for (let dv = 0; dv < zv; dv++)
          for (let zv = 0; zv < vv; zv++) {
            const Pv = zv + dv * vv;
            ev[pv] = gv[Pv], pv++
          }
        return ev
      }
      static UploadDDSLevels(vv, zv, Pv, hv, gv, dv) {
        let Nv = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          sv = arguments.length > 7 ? arguments[7] : void 0,
          Cv = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          iv = null;
        hv.sphericalPolynomial && (iv = []);
        const cv = !!vv.getCaps().s3tc;
        zv.generateMipMaps = gv;
        const Gv = new Int32Array(Pv.buffer, Pv.byteOffset, 31);
        let mv, jv, fv, Fv, Yv, nv, Ov, Dv = 0,
          Kv = 0,
          Vv = 1;
        if (542327876 !== Gv[0]) return void Sv.d.Error("Invalid magic number in DDS header");
        if (!hv.isFourCC && !hv.isRGB && !hv.isLuminance) return void Sv.d.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (hv.isCompressed && !cv) return void Sv.d.Error("Compressed textures are not supported on this platform.");
        let Uv = Gv[22];
        Fv = Gv[1] + 4;
        let Rv = !1;
        if (hv.isFourCC) switch (mv = Gv[21], mv) {
          case lv:
            Vv = 8, Kv = 33777;
            break;
          case Tv:
            Vv = 16, Kv = 33778;
            break;
          case Wv:
            Vv = 16, Kv = 33779;
            break;
          case 113:
            Rv = !0, Uv = 64;
            break;
          case 116:
            Rv = !0, Uv = 128;
            break;
          case wv: {
            Fv += 20;
            let vv = !1;
            switch (hv.dxgiFormat) {
              case 10:
                Rv = !0, Uv = 64, vv = !0;
                break;
              case 2:
                Rv = !0, Uv = 128, vv = !0;
                break;
              case 88:
                hv.isRGB = !0, hv.isFourCC = !1, Uv = 32, vv = !0
            }
            if (vv) break
          }
          default:
            return void Sv.d.Error(["Unsupported FourCC code:", (xv = mv, String.fromCharCode(255 & xv, xv >> 8 & 255, xv >> 16 & 255, xv >> 24 & 255))])
        }
        var xv;
        const tv = av._ExtractLongWordOrder(Gv[23]),
          qv = av._ExtractLongWordOrder(Gv[24]),
          Iv = av._ExtractLongWordOrder(Gv[25]),
          Qv = av._ExtractLongWordOrder(Gv[26]);
        Rv && (Kv = vv._getRGBABufferInternalSizedFormat(hv.textureType)), nv = 1, Gv[2] & pv && !1 !== gv && (nv = Math.max(1, Gv[7]));
        const Zv = sv || 0,
          Av = vv.getCaps();
        for (let Sv = Zv; Sv < dv; Sv++) {
          for (jv = Gv[4], fv = Gv[3], Ov = 0; Ov < nv; ++Ov) {
            if (-1 === Nv || Nv === Ov) {
              const ev = -1 === Nv ? Ov : 0;
              if (!hv.isCompressed && hv.isFourCC) {
                zv.format = 5, Dv = jv * fv * 4;
                let hv = null;
                if (vv._badOS || vv._badDesktopOS || !Av.textureHalfFloat && !Av.textureFloat) 128 === Uv ? (hv = av._GetFloatAsUIntRGBAArrayBuffer(jv, fv, Pv.byteOffset + Fv, Dv, Pv.buffer, ev), iv && 0 == ev && iv.push(av._GetFloatRGBAArrayBuffer(jv, fv, Pv.byteOffset + Fv, Dv, Pv.buffer, ev))) : 64 === Uv && (hv = av._GetHalfFloatAsUIntRGBAArrayBuffer(jv, fv, Pv.byteOffset + Fv, Dv, Pv.buffer, ev), iv && 0 == ev && iv.push(av._GetHalfFloatAsFloatRGBAArrayBuffer(jv, fv, Pv.byteOffset + Fv, Dv, Pv.buffer, ev))), zv.type = 0;
                else {
                  const vv = Av.textureFloat && (Cv && Av.textureFloatLinearFiltering || !Cv),
                    Sv = Av.textureHalfFloat && (Cv && Av.textureHalfFloatLinearFiltering || !Cv),
                    gv = (128 === Uv || 64 === Uv && !Sv) && vv ? 1 : (64 === Uv || 128 === Uv && !vv) && Sv ? 2 : 0;
                  let pv, dv = null;
                  if (128 === Uv) switch (gv) {
                    case 1:
                      pv = av._GetFloatRGBAArrayBuffer, dv = null;
                      break;
                    case 2:
                      pv = av._GetFloatAsHalfFloatRGBAArrayBuffer, dv = av._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      pv = av._GetFloatAsUIntRGBAArrayBuffer, dv = av._GetFloatRGBAArrayBuffer
                  } else switch (gv) {
                    case 1:
                      pv = av._GetHalfFloatAsFloatRGBAArrayBuffer, dv = null;
                      break;
                    case 2:
                      pv = av._GetHalfFloatRGBAArrayBuffer, dv = av._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      pv = av._GetHalfFloatAsUIntRGBAArrayBuffer, dv = av._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  zv.type = gv, hv = pv(jv, fv, Pv.byteOffset + Fv, Dv, Pv.buffer, ev), iv && 0 == ev && iv.push(dv ? dv(jv, fv, Pv.byteOffset + Fv, Dv, Pv.buffer, ev) : hv)
                }
                hv && vv._uploadDataToTextureDirectly(zv, hv, Sv, ev)
              } else if (hv.isRGB) zv.type = 0, 24 === Uv ? (zv.format = 4, Dv = jv * fv * 3, Yv = av._GetRGBArrayBuffer(jv, fv, Pv.byteOffset + Fv, Dv, Pv.buffer, tv, qv, Iv), vv._uploadDataToTextureDirectly(zv, Yv, Sv, ev)) : (zv.format = 5, Dv = jv * fv * 4, Yv = av._GetRGBAArrayBuffer(jv, fv, Pv.byteOffset + Fv, Dv, Pv.buffer, tv, qv, Iv, Qv), vv._uploadDataToTextureDirectly(zv, Yv, Sv, ev));
              else if (hv.isLuminance) {
                const hv = vv._getUnpackAlignement(),
                  gv = jv;
                Dv = Math.floor((jv + hv - 1) / hv) * hv * (fv - 1) + gv, Yv = av._GetLuminanceArrayBuffer(jv, fv, Pv.byteOffset + Fv, Dv, Pv.buffer), zv.format = 1, zv.type = 0, vv._uploadDataToTextureDirectly(zv, Yv, Sv, ev)
              } else Dv = Math.max(4, jv) / 4 * Math.max(4, fv) / 4 * Vv, Yv = new Uint8Array(Pv.buffer, Pv.byteOffset + Fv, Dv), zv.type = 0, vv._uploadCompressedDataToTextureDirectly(zv, Kv, jv, fv, Yv, Sv, ev)
            }
            Fv += Uv ? jv * fv * (Uv / 8) : Dv, jv *= .5, fv *= .5, jv = Math.max(1, jv), fv = Math.max(1, fv)
          }
          if (void 0 !== sv) break
        }
        iv && iv.length > 0 ? hv.sphericalPolynomial = ev.e.ConvertCubeMapToSphericalPolynomial({
          size: Gv[4],
          right: iv[0],
          left: iv[1],
          up: iv[2],
          down: iv[3],
          front: iv[4],
          back: iv[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : hv.sphericalPolynomial = void 0
      }
    }
    av.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);