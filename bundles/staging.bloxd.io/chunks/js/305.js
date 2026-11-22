export const id = 305;
export const ids = [305];
export const modules = {
  41347: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => mk
    });
    var Dk = ik(36698),
      fk = ik(36729),
      Sk = ik(39558),
      bk = ik(36703),
      rk = ik(36874);
    class Pk {
      constructor(kk, ek, ik, Dk) {
        this.name = kk, this.worldAxisForNormal = ek, this.worldAxisForFileX = ik, this.worldAxisForFileY = Dk
      }
    }
    class mk {
      static _NearestPow2Floor(kk) {
        return kk <= 1 ? 1 : 1 << Math.floor(Math.log2(kk))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(kk) {
        if (!kk.isCube) return null;
        kk.XF()?.JU().flushFramebuffer();
        const ek = kk.getSize().width,
          ik = kk._sphericalPolynomialTargetSize,
          Dk = ik > 0 ? this._NearestPow2Floor(ik) : 0,
          fk = !kk.noMipmap && !0 === kk._texture?.generateMipMaps,
          Sk = Dk > 0 && Dk < ek && fk,
          bk = Sk ? Math.max(0, Math.round(Math.log2(ek / Dk))) : 0,
          rk = Sk ? Math.max(1, Math.floor(ek / Math.pow(2, bk))) : ek,
          Pk = kk.readPixels(0, bk, void 0, !1),
          mk = kk.readPixels(1, bk, void 0, !1);
        let Mk, Kk;
        kk.isRenderTarget ? (Mk = kk.readPixels(3, bk, void 0, !1), Kk = kk.readPixels(2, bk, void 0, !1)) : (Mk = kk.readPixels(2, bk, void 0, !1), Kk = kk.readPixels(3, bk, void 0, !1));
        const xk = kk.readPixels(4, bk, void 0, !1),
          nk = kk.readPixels(5, bk, void 0, !1),
          Uk = kk.gammaSpace,
          Hk = Dk > 0 && Dk < ek && !Sk;
        return new Promise((kk => {
          Promise.all([mk, Pk, Mk, Kk, xk, nk]).then((ik => {
            let [fk, Sk, bk, Pk, mk, Mk] = ik, Kk = rk;
            if (Hk) {
              const kk = 4;
              fk = this._DownsampleFace(fk, ek, Dk, kk), Sk = this._DownsampleFace(Sk, ek, Dk, kk), bk = this._DownsampleFace(bk, ek, Dk, kk), Pk = this._DownsampleFace(Pk, ek, Dk, kk), mk = this._DownsampleFace(mk, ek, Dk, kk), Mk = this._DownsampleFace(Mk, ek, Dk, kk), Kk = Dk
            }
            const xk = {
              size: Kk,
              right: Sk,
              left: fk,
              up: bk,
              down: Pk,
              front: mk,
              back: Mk,
              format: 5,
              type: fk instanceof Float32Array ? 1 : 0,
              gammaSpace: Uk
            };
            kk(this.ConvertCubeMapToSphericalPolynomial(xk))
          }))
        }))
      }
      static _AreaElement(kk, ek) {
        return Math.atan2(kk * ek, Math.sqrt(kk * kk + ek * ek + 1))
      }
      static _DownsampleFace(kk, ek, ik, Dk) {
        const fk = kk instanceof Float32Array ? kk : Float32Array.from(kk),
          Sk = ik * ik * Dk,
          bk = new Float32Array(Sk),
          rk = ek / ik,
          Pk = 1 / (rk * rk);
        for (let Mk = 0; Mk < ik; Mk++) {
          const kk = Math.floor(Mk * rk),
            Sk = Math.floor((Mk + 1) * rk);
          for (let mk = 0; mk < ik; mk++) {
            const Kk = Math.floor(mk * rk),
              xk = Math.floor((mk + 1) * rk),
              nk = (Mk * ik + mk) * Dk;
            for (let ik = 0; ik < Dk; ik++) {
              let rk = 0;
              for (let bk = kk; bk < Sk; bk++)
                for (let kk = Kk; kk < xk; kk++) rk += fk[(bk * ek + kk) * Dk + ik];
              bk[nk + ik] = rk * Pk
            }
          }
        }
        if (kk instanceof Float32Array) return bk;
        const mk = new(0, kk.constructor)(Sk);
        for (let Mk = 0; Mk < Sk; Mk++) mk[Mk] = bk[Mk] + .5 | 0;
        return mk
      }
      static ConvertCubeMapToSphericalPolynomial(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ik = ek > 0 ? this._NearestPow2Floor(ek) : 0;
        if (ik > 0 && kk.size > ik) {
          const ek = 5 === kk.format ? 4 : 3,
            Dk = ["right", "left", "up", "down", "front", "back"],
            fk = {};
          for (const Sk of Dk) fk[Sk] = this._DownsampleFace(kk[Sk], kk.size, ik, ek);
          kk = {
            ...kk,
            ...fk,
            size: ik
          }
        }
        const Dk = new Sk.b;
        let Pk = 0;
        const mk = 2 / kk.size,
          Mk = mk,
          Kk = .5 * mk,
          xk = Kk - 1;
        for (let Sk = 0; Sk < 6; Sk++) {
          const ek = this._FileFaces[Sk],
            ik = kk[ek.name];
          let nk = xk;
          const Uk = 5 === kk.format ? 4 : 3;
          for (let Sk = 0; Sk < kk.size; Sk++) {
            let Hk = xk;
            for (let Mk = 0; Mk < kk.size; Mk++) {
              const xk = ek.worldAxisForFileX.scale(Hk).add(ek.worldAxisForFileY.scale(nk)).add(ek.worldAxisForNormal);
              xk.normalize();
              const wk = this._AreaElement(Hk - Kk, nk - Kk) - this._AreaElement(Hk - Kk, nk + Kk) - this._AreaElement(Hk + Kk, nk - Kk) + this._AreaElement(Hk + Kk, nk + Kk);
              let lk = ik[Sk * kk.size * Uk + Mk * Uk + 0],
                pk = ik[Sk * kk.size * Uk + Mk * Uk + 1],
                yk = ik[Sk * kk.size * Uk + Mk * Uk + 2];
              isNaN(lk) && (lk = 0), isNaN(pk) && (pk = 0), isNaN(yk) && (yk = 0), 0 === kk.type && (lk /= 255, pk /= 255, yk /= 255), kk.gammaSpace && (lk = Math.pow((0, fk.Clamp)(lk), bk.i), pk = Math.pow((0, fk.Clamp)(pk), bk.i), yk = Math.pow((0, fk.Clamp)(yk), bk.i));
              const Yk = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const kk = Math.max(lk, pk, yk);
                if (kk > Yk) {
                  const ek = Yk / kk;
                  lk *= ek, pk *= ek, yk *= ek
                }
              } else lk = (0, fk.Clamp)(lk, 0, Yk), pk = (0, fk.Clamp)(pk, 0, Yk), yk = (0, fk.Clamp)(yk, 0, Yk);
              const Lk = new rk.e(lk, pk, yk);
              Dk.addLight(xk, Lk, wk), Pk += wk, Hk += mk
            }
            nk += Mk
          }
        }
        const nk = 6 * (4 * Math.PI) / 6 / Pk;
        return Dk.scaleInPlace(nk), Dk.convertIncidentRadianceToIrradiance(), Dk.convertIrradianceToLambertianRadiance(), Sk.f.FromHarmonics(Dk)
      }
    }
    mk._FileFaces = [new Pk("right", new Dk.o(1, 0, 0), new Dk.o(0, 0, -1), new Dk.o(0, -1, 0)), new Pk("left", new Dk.o(-1, 0, 0), new Dk.o(0, 0, 1), new Dk.o(0, -1, 0)), new Pk("up", new Dk.o(0, 1, 0), new Dk.o(1, 0, 0), new Dk.o(0, 0, 1)), new Pk("down", new Dk.o(0, -1, 0), new Dk.o(1, 0, 0), new Dk.o(0, 0, -1)), new Pk("front", new Dk.o(0, 0, 1), new Dk.o(1, 0, 0), new Dk.o(0, -1, 0)), new Pk("back", new Dk.o(0, 0, -1), new Dk.o(-1, 0, 0), new Dk.o(0, -1, 0))], mk.MAX_HDRI_VALUE = 4096, mk.PRESERVE_CLAMPED_COLORS = !1
  },
  41338: (kk, ek, ik) => {
    ik.d(ek, {
      DDSTools: () => Uk
    });
    var Dk = ik(36729),
      fk = ik(38272),
      Sk = ik(41347),
      bk = ik(39628);
    const rk = 131072,
      Pk = 131072;

    function mk(kk) {
      return kk.charCodeAt(0) + (kk.charCodeAt(1) << 8) + (kk.charCodeAt(2) << 16) + (kk.charCodeAt(3) << 24)
    }
    const Mk = mk("DXT1"),
      Kk = mk("DXT3"),
      xk = mk("DXT5"),
      nk = mk("DX10");
    class Uk {
      static GetDDSInfo(kk) {
        const ek = new Int32Array(kk.buffer, kk.byteOffset, 31),
          ik = new Int32Array(kk.buffer, kk.byteOffset, 35);
        let Dk = 1;
        ek[2] & rk && (Dk = Math.max(1, ek[7]));
        const fk = ek[21],
          Sk = fk === nk ? ik[32] : 0;
        let bk = 0;
        switch (fk) {
          case 113:
            bk = 2;
            break;
          case 116:
            bk = 1;
            break;
          case nk:
            if (10 === Sk) {
              bk = 2;
              break
            }
            if (2 === Sk) {
              bk = 1;
              break
            }
        }
        return {
          width: ek[4],
          height: ek[3],
          mipmapCount: Dk,
          isFourCC: 4 === (4 & ek[20]),
          isRGB: 64 === (64 & ek[20]),
          isLuminance: (ek[20] & Pk) === Pk,
          isCube: 512 === (512 & ek[28]),
          isCompressed: fk === Mk || fk === Kk || fk === xk,
          dxgiFormat: Sk,
          textureType: bk
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(kk, ek, ik, Dk, fk, Sk) {
        const rk = new Float32Array(Dk),
          Pk = new Uint16Array(fk, ik);
        let mk = 0;
        for (let Mk = 0; Mk < ek; Mk++)
          for (let ek = 0; ek < kk; ek++) {
            const ik = 4 * (ek + Mk * kk);
            rk[mk] = (0, bk.e)(Pk[ik]), rk[mk + 1] = (0, bk.e)(Pk[ik + 1]), rk[mk + 2] = (0, bk.e)(Pk[ik + 2]), Uk.StoreLODInAlphaChannel ? rk[mk + 3] = Sk : rk[mk + 3] = (0, bk.e)(Pk[ik + 3]), mk += 4
          }
        return rk
      }
      static _GetHalfFloatRGBAArrayBuffer(kk, ek, ik, Dk, fk, Sk) {
        if (Uk.StoreLODInAlphaChannel) {
          const rk = new Uint16Array(Dk),
            Pk = new Uint16Array(fk, ik);
          let mk = 0;
          for (let ik = 0; ik < ek; ik++)
            for (let ek = 0; ek < kk; ek++) {
              const Dk = 4 * (ek + ik * kk);
              rk[mk] = Pk[Dk], rk[mk + 1] = Pk[Dk + 1], rk[mk + 2] = Pk[Dk + 2], rk[mk + 3] = (0, bk.i)(Sk), mk += 4
            }
          return rk
        }
        return new Uint16Array(fk, ik, Dk)
      }
      static _GetFloatRGBAArrayBuffer(kk, ek, ik, Dk, fk, Sk) {
        if (Uk.StoreLODInAlphaChannel) {
          const bk = new Float32Array(Dk),
            rk = new Float32Array(fk, ik);
          let Pk = 0;
          for (let ik = 0; ik < ek; ik++)
            for (let ek = 0; ek < kk; ek++) {
              const Dk = 4 * (ek + ik * kk);
              bk[Pk] = rk[Dk], bk[Pk + 1] = rk[Dk + 1], bk[Pk + 2] = rk[Dk + 2], bk[Pk + 3] = Sk, Pk += 4
            }
          return bk
        }
        return new Float32Array(fk, ik, Dk)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(kk, ek, ik, Dk, fk, Sk) {
        const rk = new Uint16Array(Dk),
          Pk = new Float32Array(fk, ik);
        let mk = 0;
        for (let Mk = 0; Mk < ek; Mk++)
          for (let ek = 0; ek < kk; ek++) rk[mk] = (0, bk.i)(Pk[mk]), rk[mk + 1] = (0, bk.i)(Pk[mk + 1]), rk[mk + 2] = (0, bk.i)(Pk[mk + 2]), Uk.StoreLODInAlphaChannel ? rk[mk + 3] = (0, bk.i)(Sk) : rk[mk + 3] = (0, bk.i)(Pk[mk + 3]), mk += 4;
        return rk
      }
      static _GetFloatAsUIntRGBAArrayBuffer(kk, ek, ik, fk, Sk, bk) {
        const rk = new Uint8Array(fk),
          Pk = new Float32Array(Sk, ik);
        let mk = 0;
        for (let Mk = 0; Mk < ek; Mk++)
          for (let ek = 0; ek < kk; ek++) {
            const ik = 4 * (ek + Mk * kk);
            rk[mk] = 255 * (0, Dk.Clamp)(Pk[ik]), rk[mk + 1] = 255 * (0, Dk.Clamp)(Pk[ik + 1]), rk[mk + 2] = 255 * (0, Dk.Clamp)(Pk[ik + 2]), Uk.StoreLODInAlphaChannel ? rk[mk + 3] = bk : rk[mk + 3] = 255 * (0, Dk.Clamp)(Pk[ik + 3]), mk += 4
          }
        return rk
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(kk, ek, ik, fk, Sk, rk) {
        const Pk = new Uint8Array(fk),
          mk = new Uint16Array(Sk, ik);
        let Mk = 0;
        for (let Kk = 0; Kk < ek; Kk++)
          for (let ek = 0; ek < kk; ek++) {
            const ik = 4 * (ek + Kk * kk);
            Pk[Mk] = 255 * (0, Dk.Clamp)((0, bk.e)(mk[ik])), Pk[Mk + 1] = 255 * (0, Dk.Clamp)((0, bk.e)(mk[ik + 1])), Pk[Mk + 2] = 255 * (0, Dk.Clamp)((0, bk.e)(mk[ik + 2])), Uk.StoreLODInAlphaChannel ? Pk[Mk + 3] = rk : Pk[Mk + 3] = 255 * (0, Dk.Clamp)((0, bk.e)(mk[ik + 3])), Mk += 4
          }
        return Pk
      }
      static _GetRGBAArrayBuffer(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk) {
        const mk = new Uint8Array(Dk),
          Mk = new Uint8Array(fk, ik);
        let Kk = 0;
        for (let xk = 0; xk < ek; xk++)
          for (let ek = 0; ek < kk; ek++) {
            const ik = 4 * (ek + xk * kk);
            mk[Kk] = Mk[ik + Sk], mk[Kk + 1] = Mk[ik + bk], mk[Kk + 2] = Mk[ik + rk], mk[Kk + 3] = Mk[ik + Pk], Kk += 4
          }
        return mk
      }
      static _ExtractLongWordOrder(kk) {
        return 0 === kk || 255 === kk || -16777216 === kk ? 0 : 1 + Uk._ExtractLongWordOrder(kk >> 8)
      }
      static _GetRGBArrayBuffer(kk, ek, ik, Dk, fk, Sk, bk, rk) {
        const Pk = new Uint8Array(Dk),
          mk = new Uint8Array(fk, ik);
        let Mk = 0;
        for (let Kk = 0; Kk < ek; Kk++)
          for (let ek = 0; ek < kk; ek++) {
            const ik = 3 * (ek + Kk * kk);
            Pk[Mk] = mk[ik + Sk], Pk[Mk + 1] = mk[ik + bk], Pk[Mk + 2] = mk[ik + rk], Mk += 3
          }
        return Pk
      }
      static _GetLuminanceArrayBuffer(kk, ek, ik, Dk, fk) {
        const Sk = new Uint8Array(Dk),
          bk = new Uint8Array(fk, ik);
        let rk = 0;
        for (let Pk = 0; Pk < ek; Pk++)
          for (let ek = 0; ek < kk; ek++) {
            const ik = ek + Pk * kk;
            Sk[rk] = bk[ik], rk++
          }
        return Sk
      }
      static UploadDDSLevels(kk, ek, ik, Dk, bk, Pk) {
        let mk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          Hk = arguments.length > 7 ? arguments[7] : void 0,
          wk = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          lk = null;
        Dk.sphericalPolynomial && (lk = []);
        const pk = !!kk.getCaps().s3tc;
        ek.generateMipMaps = bk;
        const yk = new Int32Array(ik.buffer, ik.byteOffset, 31);
        let Yk, Lk, Ck, Ak, jk, sk, dk, Vk = 0,
          Fk = 0,
          uk = 1;
        if (542327876 !== yk[0]) return void fk.b.Error("Invalid magic number in DDS header");
        if (!Dk.isFourCC && !Dk.isRGB && !Dk.isLuminance) return void fk.b.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (Dk.isCompressed && !pk) return void fk.b.Error("Compressed textures are not supported on this platform.");
        let qk = yk[22];
        Ak = yk[1] + 4;
        let Ik = !1;
        if (Dk.isFourCC) switch (Yk = yk[21], Yk) {
          case Mk:
            uk = 8, Fk = 33777;
            break;
          case Kk:
            uk = 16, Fk = 33778;
            break;
          case xk:
            uk = 16, Fk = 33779;
            break;
          case 113:
            Ik = !0, qk = 64;
            break;
          case 116:
            Ik = !0, qk = 128;
            break;
          case nk: {
            Ak += 20;
            let kk = !1;
            switch (Dk.dxgiFormat) {
              case 10:
                Ik = !0, qk = 64, kk = !0;
                break;
              case 2:
                Ik = !0, qk = 128, kk = !0;
                break;
              case 88:
                Dk.isRGB = !0, Dk.isFourCC = !1, qk = 32, kk = !0
            }
            if (kk) break
          }
          default:
            return void fk.b.Error(["Unsupported FourCC code:", (zk = Yk, String.fromCharCode(255 & zk, zk >> 8 & 255, zk >> 16 & 255, zk >> 24 & 255))])
        }
        var zk;
        const Qk = Uk._ExtractLongWordOrder(yk[23]),
          vk = Uk._ExtractLongWordOrder(yk[24]),
          Ek = Uk._ExtractLongWordOrder(yk[25]),
          hk = Uk._ExtractLongWordOrder(yk[26]);
        Ik && (Fk = kk._getRGBABufferInternalSizedFormat(Dk.textureType)), sk = 1, yk[2] & rk && !1 !== bk && (sk = Math.max(1, yk[7]));
        const ak = Hk || 0,
          Wk = kk.getCaps();
        for (let fk = ak; fk < Pk; fk++) {
          for (Lk = yk[4], Ck = yk[3], dk = 0; dk < sk; ++dk) {
            if (-1 === mk || mk === dk) {
              const Sk = -1 === mk ? dk : 0;
              if (!Dk.isCompressed && Dk.isFourCC) {
                ek.format = 5, Vk = Lk * Ck * 4;
                let Dk = null;
                if (kk._badOS || kk._badDesktopOS || !Wk.textureHalfFloat && !Wk.textureFloat) 128 === qk ? (Dk = Uk._GetFloatAsUIntRGBAArrayBuffer(Lk, Ck, ik.byteOffset + Ak, Vk, ik.buffer, Sk), lk && 0 == Sk && lk.push(Uk._GetFloatRGBAArrayBuffer(Lk, Ck, ik.byteOffset + Ak, Vk, ik.buffer, Sk))) : 64 === qk && (Dk = Uk._GetHalfFloatAsUIntRGBAArrayBuffer(Lk, Ck, ik.byteOffset + Ak, Vk, ik.buffer, Sk), lk && 0 == Sk && lk.push(Uk._GetHalfFloatAsFloatRGBAArrayBuffer(Lk, Ck, ik.byteOffset + Ak, Vk, ik.buffer, Sk))), ek.type = 0;
                else {
                  const kk = Wk.textureFloat && (wk && Wk.textureFloatLinearFiltering || !wk),
                    fk = Wk.textureHalfFloat && (wk && Wk.textureHalfFloatLinearFiltering || !wk),
                    bk = (128 === qk || 64 === qk && !fk) && kk ? 1 : (64 === qk || 128 === qk && !kk) && fk ? 2 : 0;
                  let rk, Pk = null;
                  if (128 === qk) switch (bk) {
                    case 1:
                      rk = Uk._GetFloatRGBAArrayBuffer, Pk = null;
                      break;
                    case 2:
                      rk = Uk._GetFloatAsHalfFloatRGBAArrayBuffer, Pk = Uk._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      rk = Uk._GetFloatAsUIntRGBAArrayBuffer, Pk = Uk._GetFloatRGBAArrayBuffer
                  } else switch (bk) {
                    case 1:
                      rk = Uk._GetHalfFloatAsFloatRGBAArrayBuffer, Pk = null;
                      break;
                    case 2:
                      rk = Uk._GetHalfFloatRGBAArrayBuffer, Pk = Uk._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      rk = Uk._GetHalfFloatAsUIntRGBAArrayBuffer, Pk = Uk._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  ek.type = bk, Dk = rk(Lk, Ck, ik.byteOffset + Ak, Vk, ik.buffer, Sk), lk && 0 == Sk && lk.push(Pk ? Pk(Lk, Ck, ik.byteOffset + Ak, Vk, ik.buffer, Sk) : Dk)
                }
                Dk && kk._uploadDataToTextureDirectly(ek, Dk, fk, Sk)
              } else if (Dk.isRGB) ek.type = 0, 24 === qk ? (ek.format = 4, Vk = Lk * Ck * 3, jk = Uk._GetRGBArrayBuffer(Lk, Ck, ik.byteOffset + Ak, Vk, ik.buffer, Qk, vk, Ek), kk._uploadDataToTextureDirectly(ek, jk, fk, Sk)) : (ek.format = 5, Vk = Lk * Ck * 4, jk = Uk._GetRGBAArrayBuffer(Lk, Ck, ik.byteOffset + Ak, Vk, ik.buffer, Qk, vk, Ek, hk), kk._uploadDataToTextureDirectly(ek, jk, fk, Sk));
              else if (Dk.isLuminance) {
                const Dk = kk._getUnpackAlignement(),
                  bk = Lk;
                Vk = Math.floor((Lk + Dk - 1) / Dk) * Dk * (Ck - 1) + bk, jk = Uk._GetLuminanceArrayBuffer(Lk, Ck, ik.byteOffset + Ak, Vk, ik.buffer), ek.format = 1, ek.type = 0, kk._uploadDataToTextureDirectly(ek, jk, fk, Sk)
              } else Vk = Math.max(4, Lk) / 4 * Math.max(4, Ck) / 4 * uk, jk = new Uint8Array(ik.buffer, ik.byteOffset + Ak, Vk), ek.type = 0, kk._uploadCompressedDataToTextureDirectly(ek, Fk, Lk, Ck, jk, fk, Sk)
            }
            Ak += qk ? Lk * Ck * (qk / 8) : Vk, Lk *= .5, Ck *= .5, Lk = Math.max(1, Lk), Ck = Math.max(1, Ck)
          }
          if (void 0 !== Hk) break
        }
        lk && lk.length > 0 ? Dk.sphericalPolynomial = Sk.b.ConvertCubeMapToSphericalPolynomial({
          size: yk[4],
          right: lk[0],
          left: lk[1],
          up: lk[2],
          down: lk[3],
          front: lk[4],
          back: lk[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : Dk.sphericalPolynomial = void 0
      }
    }
    Uk.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);