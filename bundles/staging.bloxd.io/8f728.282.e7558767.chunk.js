export const id = 282;
export const ids = [281, 282];
export const modules = {
  39715: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      _DDSTextureLoader: () => rB
    });
    var Vc = nc(38029),
      Ic = nc(39705);
    class rB {
      constructor() {
        this.supportCascades = !0
      }
      loadCubeData(cB, Bc, nc, rB) {
        const uc = Bc.RV();
        let sc, Mc = !1,
          Pc = 1e3;
        if (Array.isArray(cB))
          for (let Vc = 0; Vc < cB.length; Vc++) {
            const nc = cB[Vc];
            sc = Ic.DDSTools.GetDDSInfo(nc), Bc.width = sc.width, Bc.height = sc.height, Mc = (sc.isRGB || sc.isLuminance || sc.mipmapCount > 1) && Bc.generateMipMaps, uc._unpackFlipY(sc.isCompressed), Ic.DDSTools.UploadDDSLevels(uc, Bc, nc, sc, Mc, 6, -1, Vc), sc.isFourCC || 1 !== sc.mipmapCount ? Pc = sc.mipmapCount - 1 : uc.generateMipMapsForCubemap(Bc)
          } else {
            const rB = cB;
            sc = Ic.DDSTools.GetDDSInfo(rB), Bc.width = sc.width, Bc.height = sc.height, nc && (sc.sphericalPolynomial = new Vc.g), Mc = (sc.isRGB || sc.isLuminance || sc.mipmapCount > 1) && Bc.generateMipMaps, uc._unpackFlipY(sc.isCompressed), Ic.DDSTools.UploadDDSLevels(uc, Bc, rB, sc, Mc, 6), sc.isFourCC || 1 !== sc.mipmapCount ? Pc = sc.mipmapCount - 1 : uc.generateMipMapsForCubemap(Bc, !1)
          }
        uc._setCubeMapTextureParams(Bc, Mc, Pc), Bc.isReady = !0, Bc.onLoadedObservable.notifyObservers(Bc), Bc.onLoadedObservable.clear(), rB && rB({
          isDDS: !0,
          width: Bc.width,
          info: sc,
          data: cB,
          texture: Bc
        })
      }
      loadData(cB, Bc, nc) {
        const Vc = Ic.DDSTools.GetDDSInfo(cB),
          rB = (Vc.isRGB || Vc.isLuminance || Vc.mipmapCount > 1) && Bc.generateMipMaps && Math.max(Vc.width, Vc.height) >> Vc.mipmapCount - 1 === 1;
        nc(Vc.width, Vc.height, rB, Vc.isFourCC, (() => {
          Ic.DDSTools.UploadDDSLevels(Bc.RV(), Bc, cB, Vc, rB, 1)
        }))
      }
    }
  },
  39709: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Pc
    });
    var Vc = nc(35756),
      Ic = nc(35785),
      rB = nc(38029),
      uc = nc(35759),
      sc = nc(35815);
    class Mc {
      constructor(cB, Bc, nc, Vc) {
        this.name = cB, this.worldAxisForNormal = Bc, this.worldAxisForFileX = nc, this.worldAxisForFileY = Vc
      }
    }
    class Pc {
      static _NearestPow2Floor(cB) {
        return cB <= 1 ? 1 : 1 << Math.floor(Math.log2(cB))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(cB) {
        if (!cB.isCube) return null;
        cB.knc()?.RV().flushFramebuffer();
        const Bc = cB.getSize().width,
          nc = cB._sphericalPolynomialTargetSize,
          Vc = nc > 0 ? this._NearestPow2Floor(nc) : 0,
          Ic = !cB.noMipmap && !0 === cB._texture?.generateMipMaps,
          rB = Vc > 0 && Vc < Bc && Ic,
          uc = rB ? Math.max(0, Math.round(Math.log2(Bc / Vc))) : 0,
          sc = rB ? Math.max(1, Math.floor(Bc / Math.pow(2, uc))) : Bc,
          Mc = cB.readPixels(0, uc, void 0, !1),
          Pc = cB.readPixels(1, uc, void 0, !1);
        let qB, Oc;
        cB.isRenderTarget ? (qB = cB.readPixels(3, uc, void 0, !1), Oc = cB.readPixels(2, uc, void 0, !1)) : (qB = cB.readPixels(2, uc, void 0, !1), Oc = cB.readPixels(3, uc, void 0, !1));
        const Tc = cB.readPixels(4, uc, void 0, !1),
          fc = cB.readPixels(5, uc, void 0, !1),
          mB = cB.gammaSpace,
          ec = Vc > 0 && Vc < Bc && !rB;
        return new Promise((cB => {
          Promise.all([Pc, Mc, qB, Oc, Tc, fc]).then((nc => {
            let [Ic, rB, uc, Mc, Pc, qB] = nc, Oc = sc;
            if (ec) {
              const cB = 4;
              Ic = this._DownsampleFace(Ic, Bc, Vc, cB), rB = this._DownsampleFace(rB, Bc, Vc, cB), uc = this._DownsampleFace(uc, Bc, Vc, cB), Mc = this._DownsampleFace(Mc, Bc, Vc, cB), Pc = this._DownsampleFace(Pc, Bc, Vc, cB), qB = this._DownsampleFace(qB, Bc, Vc, cB), Oc = Vc
            }
            const Tc = {
              size: Oc,
              right: rB,
              left: Ic,
              up: uc,
              down: Mc,
              front: Pc,
              back: qB,
              format: 5,
              type: Ic instanceof Float32Array ? 1 : 0,
              gammaSpace: mB
            };
            cB(this.ConvertCubeMapToSphericalPolynomial(Tc))
          }))
        }))
      }
      static _AreaElement(cB, Bc) {
        return Math.atan2(cB * Bc, Math.sqrt(cB * cB + Bc * Bc + 1))
      }
      static _DownsampleFace(cB, Bc, nc, Vc) {
        const Ic = cB instanceof Float32Array ? cB : Float32Array.from(cB),
          rB = nc * nc * Vc,
          uc = new Float32Array(rB),
          sc = Bc / nc,
          Mc = 1 / (sc * sc);
        for (let qB = 0; qB < nc; qB++) {
          const cB = Math.floor(qB * sc),
            rB = Math.floor((qB + 1) * sc);
          for (let Pc = 0; Pc < nc; Pc++) {
            const Oc = Math.floor(Pc * sc),
              Tc = Math.floor((Pc + 1) * sc),
              fc = (qB * nc + Pc) * Vc;
            for (let nc = 0; nc < Vc; nc++) {
              let sc = 0;
              for (let uc = cB; uc < rB; uc++)
                for (let cB = Oc; cB < Tc; cB++) sc += Ic[(uc * Bc + cB) * Vc + nc];
              uc[fc + nc] = sc * Mc
            }
          }
        }
        if (cB instanceof Float32Array) return uc;
        const Pc = new(0, cB.constructor)(rB);
        for (let qB = 0; qB < rB; qB++) Pc[qB] = uc[qB] + .5 | 0;
        return Pc
      }
      static ConvertCubeMapToSphericalPolynomial(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const nc = Bc > 0 ? this._NearestPow2Floor(Bc) : 0;
        if (nc > 0 && cB.size > nc) {
          const Bc = 5 === cB.format ? 4 : 3,
            Vc = ["right", "left", "up", "down", "front", "back"],
            Ic = {};
          for (const rB of Vc) Ic[rB] = this._DownsampleFace(cB[rB], cB.size, nc, Bc);
          cB = {
            ...cB,
            ...Ic,
            size: nc
          }
        }
        const Vc = new rB.c;
        let Mc = 0;
        const Pc = 2 / cB.size,
          qB = Pc,
          Oc = .5 * Pc,
          Tc = Oc - 1;
        for (let rB = 0; rB < 6; rB++) {
          const Bc = this._FileFaces[rB],
            nc = cB[Bc.name];
          let fc = Tc;
          const mB = 5 === cB.format ? 4 : 3;
          for (let rB = 0; rB < cB.size; rB++) {
            let ec = Tc;
            for (let qB = 0; qB < cB.size; qB++) {
              const Tc = Bc.worldAxisForFileX.scale(ec).add(Bc.worldAxisForFileY.scale(fc)).add(Bc.worldAxisForNormal);
              Tc.normalize();
              const tB = this._AreaElement(ec - Oc, fc - Oc) - this._AreaElement(ec - Oc, fc + Oc) - this._AreaElement(ec + Oc, fc - Oc) + this._AreaElement(ec + Oc, fc + Oc);
              let Sc = nc[rB * cB.size * mB + qB * mB + 0],
                yB = nc[rB * cB.size * mB + qB * mB + 1],
                zB = nc[rB * cB.size * mB + qB * mB + 2];
              isNaN(Sc) && (Sc = 0), isNaN(yB) && (yB = 0), isNaN(zB) && (zB = 0), 0 === cB.type && (Sc /= 255, yB /= 255, zB /= 255), cB.gammaSpace && (Sc = Math.pow((0, Ic.Clamp)(Sc), uc.k), yB = Math.pow((0, Ic.Clamp)(yB), uc.k), zB = Math.pow((0, Ic.Clamp)(zB), uc.k));
              const pc = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const cB = Math.max(Sc, yB, zB);
                if (cB > pc) {
                  const Bc = pc / cB;
                  Sc *= Bc, yB *= Bc, zB *= Bc
                }
              } else Sc = (0, Ic.Clamp)(Sc, 0, pc), yB = (0, Ic.Clamp)(yB, 0, pc), zB = (0, Ic.Clamp)(zB, 0, pc);
              const hc = new sc.e(Sc, yB, zB);
              Vc.addLight(Tc, hc, tB), Mc += tB, ec += Pc
            }
            fc += qB
          }
        }
        const fc = 6 * (4 * Math.PI) / 6 / Mc;
        return Vc.scaleInPlace(fc), Vc.convertIncidentRadianceToIrradiance(), Vc.convertIrradianceToLambertianRadiance(), rB.g.FromHarmonics(Vc)
      }
    }
    Pc._FileFaces = [new Mc("right", new Vc.p(1, 0, 0), new Vc.p(0, 0, -1), new Vc.p(0, -1, 0)), new Mc("left", new Vc.p(-1, 0, 0), new Vc.p(0, 0, 1), new Vc.p(0, -1, 0)), new Mc("up", new Vc.p(0, 1, 0), new Vc.p(1, 0, 0), new Vc.p(0, 0, 1)), new Mc("down", new Vc.p(0, -1, 0), new Vc.p(1, 0, 0), new Vc.p(0, 0, -1)), new Mc("front", new Vc.p(0, 0, 1), new Vc.p(1, 0, 0), new Vc.p(0, -1, 0)), new Mc("back", new Vc.p(0, 0, -1), new Vc.p(-1, 0, 0), new Vc.p(0, -1, 0))], Pc.MAX_HDRI_VALUE = 4096, Pc.PRESERVE_CLAMPED_COLORS = !1
  },
  39705: (cB, Bc, nc) => {
    nc.d(Bc, {
      DDSTools: () => mB
    });
    var Vc = nc(35785),
      Ic = nc(37191),
      rB = nc(39709),
      uc = nc(38118);
    const sc = 131072,
      Mc = 131072;

    function Pc(cB) {
      return cB.charCodeAt(0) + (cB.charCodeAt(1) << 8) + (cB.charCodeAt(2) << 16) + (cB.charCodeAt(3) << 24)
    }
    const qB = Pc("DXT1"),
      Oc = Pc("DXT3"),
      Tc = Pc("DXT5"),
      fc = Pc("DX10");
    class mB {
      static GetDDSInfo(cB) {
        const Bc = new Int32Array(cB.buffer, cB.byteOffset, 31),
          nc = new Int32Array(cB.buffer, cB.byteOffset, 35);
        let Vc = 1;
        Bc[2] & sc && (Vc = Math.max(1, Bc[7]));
        const Ic = Bc[21],
          rB = Ic === fc ? nc[32] : 0;
        let uc = 0;
        switch (Ic) {
          case 113:
            uc = 2;
            break;
          case 116:
            uc = 1;
            break;
          case fc:
            if (10 === rB) {
              uc = 2;
              break
            }
            if (2 === rB) {
              uc = 1;
              break
            }
        }
        return {
          width: Bc[4],
          height: Bc[3],
          mipmapCount: Vc,
          isFourCC: 4 === (4 & Bc[20]),
          isRGB: 64 === (64 & Bc[20]),
          isLuminance: (Bc[20] & Mc) === Mc,
          isCube: 512 === (512 & Bc[28]),
          isCompressed: Ic === qB || Ic === Oc || Ic === Tc,
          dxgiFormat: rB,
          textureType: uc
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(cB, Bc, nc, Vc, Ic, rB) {
        const sc = new Float32Array(Vc),
          Mc = new Uint16Array(Ic, nc);
        let Pc = 0;
        for (let qB = 0; qB < Bc; qB++)
          for (let Bc = 0; Bc < cB; Bc++) {
            const nc = 4 * (Bc + qB * cB);
            sc[Pc] = (0, uc.c)(Mc[nc]), sc[Pc + 1] = (0, uc.c)(Mc[nc + 1]), sc[Pc + 2] = (0, uc.c)(Mc[nc + 2]), mB.StoreLODInAlphaChannel ? sc[Pc + 3] = rB : sc[Pc + 3] = (0, uc.c)(Mc[nc + 3]), Pc += 4
          }
        return sc
      }
      static _GetHalfFloatRGBAArrayBuffer(cB, Bc, nc, Vc, Ic, rB) {
        if (mB.StoreLODInAlphaChannel) {
          const sc = new Uint16Array(Vc),
            Mc = new Uint16Array(Ic, nc);
          let Pc = 0;
          for (let nc = 0; nc < Bc; nc++)
            for (let Bc = 0; Bc < cB; Bc++) {
              const Vc = 4 * (Bc + nc * cB);
              sc[Pc] = Mc[Vc], sc[Pc + 1] = Mc[Vc + 1], sc[Pc + 2] = Mc[Vc + 2], sc[Pc + 3] = (0, uc.g)(rB), Pc += 4
            }
          return sc
        }
        return new Uint16Array(Ic, nc, Vc)
      }
      static _GetFloatRGBAArrayBuffer(cB, Bc, nc, Vc, Ic, rB) {
        if (mB.StoreLODInAlphaChannel) {
          const uc = new Float32Array(Vc),
            sc = new Float32Array(Ic, nc);
          let Mc = 0;
          for (let nc = 0; nc < Bc; nc++)
            for (let Bc = 0; Bc < cB; Bc++) {
              const Vc = 4 * (Bc + nc * cB);
              uc[Mc] = sc[Vc], uc[Mc + 1] = sc[Vc + 1], uc[Mc + 2] = sc[Vc + 2], uc[Mc + 3] = rB, Mc += 4
            }
          return uc
        }
        return new Float32Array(Ic, nc, Vc)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(cB, Bc, nc, Vc, Ic, rB) {
        const sc = new Uint16Array(Vc),
          Mc = new Float32Array(Ic, nc);
        let Pc = 0;
        for (let qB = 0; qB < Bc; qB++)
          for (let Bc = 0; Bc < cB; Bc++) sc[Pc] = (0, uc.g)(Mc[Pc]), sc[Pc + 1] = (0, uc.g)(Mc[Pc + 1]), sc[Pc + 2] = (0, uc.g)(Mc[Pc + 2]), mB.StoreLODInAlphaChannel ? sc[Pc + 3] = (0, uc.g)(rB) : sc[Pc + 3] = (0, uc.g)(Mc[Pc + 3]), Pc += 4;
        return sc
      }
      static _GetFloatAsUIntRGBAArrayBuffer(cB, Bc, nc, Ic, rB, uc) {
        const sc = new Uint8Array(Ic),
          Mc = new Float32Array(rB, nc);
        let Pc = 0;
        for (let qB = 0; qB < Bc; qB++)
          for (let Bc = 0; Bc < cB; Bc++) {
            const nc = 4 * (Bc + qB * cB);
            sc[Pc] = 255 * (0, Vc.Clamp)(Mc[nc]), sc[Pc + 1] = 255 * (0, Vc.Clamp)(Mc[nc + 1]), sc[Pc + 2] = 255 * (0, Vc.Clamp)(Mc[nc + 2]), mB.StoreLODInAlphaChannel ? sc[Pc + 3] = uc : sc[Pc + 3] = 255 * (0, Vc.Clamp)(Mc[nc + 3]), Pc += 4
          }
        return sc
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(cB, Bc, nc, Ic, rB, sc) {
        const Mc = new Uint8Array(Ic),
          Pc = new Uint16Array(rB, nc);
        let qB = 0;
        for (let Oc = 0; Oc < Bc; Oc++)
          for (let Bc = 0; Bc < cB; Bc++) {
            const nc = 4 * (Bc + Oc * cB);
            Mc[qB] = 255 * (0, Vc.Clamp)((0, uc.c)(Pc[nc])), Mc[qB + 1] = 255 * (0, Vc.Clamp)((0, uc.c)(Pc[nc + 1])), Mc[qB + 2] = 255 * (0, Vc.Clamp)((0, uc.c)(Pc[nc + 2])), mB.StoreLODInAlphaChannel ? Mc[qB + 3] = sc : Mc[qB + 3] = 255 * (0, Vc.Clamp)((0, uc.c)(Pc[nc + 3])), qB += 4
          }
        return Mc
      }
      static _GetRGBAArrayBuffer(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc) {
        const Pc = new Uint8Array(Vc),
          qB = new Uint8Array(Ic, nc);
        let Oc = 0;
        for (let Tc = 0; Tc < Bc; Tc++)
          for (let Bc = 0; Bc < cB; Bc++) {
            const nc = 4 * (Bc + Tc * cB);
            Pc[Oc] = qB[nc + rB], Pc[Oc + 1] = qB[nc + uc], Pc[Oc + 2] = qB[nc + sc], Pc[Oc + 3] = qB[nc + Mc], Oc += 4
          }
        return Pc
      }
      static _ExtractLongWordOrder(cB) {
        return 0 === cB || 255 === cB || -16777216 === cB ? 0 : 1 + mB._ExtractLongWordOrder(cB >> 8)
      }
      static _GetRGBArrayBuffer(cB, Bc, nc, Vc, Ic, rB, uc, sc) {
        const Mc = new Uint8Array(Vc),
          Pc = new Uint8Array(Ic, nc);
        let qB = 0;
        for (let Oc = 0; Oc < Bc; Oc++)
          for (let Bc = 0; Bc < cB; Bc++) {
            const nc = 3 * (Bc + Oc * cB);
            Mc[qB] = Pc[nc + rB], Mc[qB + 1] = Pc[nc + uc], Mc[qB + 2] = Pc[nc + sc], qB += 3
          }
        return Mc
      }
      static _GetLuminanceArrayBuffer(cB, Bc, nc, Vc, Ic) {
        const rB = new Uint8Array(Vc),
          uc = new Uint8Array(Ic, nc);
        let sc = 0;
        for (let Mc = 0; Mc < Bc; Mc++)
          for (let Bc = 0; Bc < cB; Bc++) {
            const nc = Bc + Mc * cB;
            rB[sc] = uc[nc], sc++
          }
        return rB
      }
      static UploadDDSLevels(cB, Bc, nc, Vc, uc, Mc) {
        let Pc = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          ec = arguments.length > 7 ? arguments[7] : void 0,
          tB = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          Sc = null;
        Vc.sphericalPolynomial && (Sc = []);
        const yB = !!cB.getCaps().s3tc;
        Bc.generateMipMaps = uc;
        const zB = new Int32Array(nc.buffer, nc.byteOffset, 31);
        let pc, hc, aB, lc, Yc, Lc, gB, Uc = 0,
          bB = 0,
          Zc = 1;
        if (542327876 !== zB[0]) return void Ic.c.Error("Invalid magic number in DDS header");
        if (!Vc.isFourCC && !Vc.isRGB && !Vc.isLuminance) return void Ic.c.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (Vc.isCompressed && !yB) return void Ic.c.Error("Compressed textures are not supported on this platform.");
        let Qc = zB[22];
        lc = zB[1] + 4;
        let Cc = !1;
        if (Vc.isFourCC) switch (pc = zB[21], pc) {
          case qB:
            Zc = 8, bB = 33777;
            break;
          case Oc:
            Zc = 16, bB = 33778;
            break;
          case Tc:
            Zc = 16, bB = 33779;
            break;
          case 113:
            Cc = !0, Qc = 64;
            break;
          case 116:
            Cc = !0, Qc = 128;
            break;
          case fc: {
            lc += 20;
            let cB = !1;
            switch (Vc.dxgiFormat) {
              case 10:
                Cc = !0, Qc = 64, cB = !0;
                break;
              case 2:
                Cc = !0, Qc = 128, cB = !0;
                break;
              case 88:
                Vc.isRGB = !0, Vc.isFourCC = !1, Qc = 32, cB = !0
            }
            if (cB) break
          }
          default:
            return void Ic.c.Error(["Unsupported FourCC code:", (vB = pc, String.fromCharCode(255 & vB, vB >> 8 & 255, vB >> 16 & 255, vB >> 24 & 255))])
        }
        var vB;
        const Dc = mB._ExtractLongWordOrder(zB[23]),
          Nc = mB._ExtractLongWordOrder(zB[24]),
          Ec = mB._ExtractLongWordOrder(zB[25]),
          oc = mB._ExtractLongWordOrder(zB[26]);
        Cc && (bB = cB._getRGBABufferInternalSizedFormat(Vc.textureType)), Lc = 1, zB[2] & sc && !1 !== uc && (Lc = Math.max(1, zB[7]));
        const Wc = ec || 0,
          wc = cB.getCaps();
        for (let Ic = Wc; Ic < Mc; Ic++) {
          for (hc = zB[4], aB = zB[3], gB = 0; gB < Lc; ++gB) {
            if (-1 === Pc || Pc === gB) {
              const rB = -1 === Pc ? gB : 0;
              if (!Vc.isCompressed && Vc.isFourCC) {
                Bc.format = 5, Uc = hc * aB * 4;
                let Vc = null;
                if (cB._badOS || cB._badDesktopOS || !wc.textureHalfFloat && !wc.textureFloat) 128 === Qc ? (Vc = mB._GetFloatAsUIntRGBAArrayBuffer(hc, aB, nc.byteOffset + lc, Uc, nc.buffer, rB), Sc && 0 == rB && Sc.push(mB._GetFloatRGBAArrayBuffer(hc, aB, nc.byteOffset + lc, Uc, nc.buffer, rB))) : 64 === Qc && (Vc = mB._GetHalfFloatAsUIntRGBAArrayBuffer(hc, aB, nc.byteOffset + lc, Uc, nc.buffer, rB), Sc && 0 == rB && Sc.push(mB._GetHalfFloatAsFloatRGBAArrayBuffer(hc, aB, nc.byteOffset + lc, Uc, nc.buffer, rB))), Bc.type = 0;
                else {
                  const cB = wc.textureFloat && (tB && wc.textureFloatLinearFiltering || !tB),
                    Ic = wc.textureHalfFloat && (tB && wc.textureHalfFloatLinearFiltering || !tB),
                    uc = (128 === Qc || 64 === Qc && !Ic) && cB ? 1 : (64 === Qc || 128 === Qc && !cB) && Ic ? 2 : 0;
                  let sc, Mc = null;
                  if (128 === Qc) switch (uc) {
                    case 1:
                      sc = mB._GetFloatRGBAArrayBuffer, Mc = null;
                      break;
                    case 2:
                      sc = mB._GetFloatAsHalfFloatRGBAArrayBuffer, Mc = mB._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      sc = mB._GetFloatAsUIntRGBAArrayBuffer, Mc = mB._GetFloatRGBAArrayBuffer
                  } else switch (uc) {
                    case 1:
                      sc = mB._GetHalfFloatAsFloatRGBAArrayBuffer, Mc = null;
                      break;
                    case 2:
                      sc = mB._GetHalfFloatRGBAArrayBuffer, Mc = mB._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      sc = mB._GetHalfFloatAsUIntRGBAArrayBuffer, Mc = mB._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  Bc.type = uc, Vc = sc(hc, aB, nc.byteOffset + lc, Uc, nc.buffer, rB), Sc && 0 == rB && Sc.push(Mc ? Mc(hc, aB, nc.byteOffset + lc, Uc, nc.buffer, rB) : Vc)
                }
                Vc && cB._uploadDataToTextureDirectly(Bc, Vc, Ic, rB)
              } else if (Vc.isRGB) Bc.type = 0, 24 === Qc ? (Bc.format = 4, Uc = hc * aB * 3, Yc = mB._GetRGBArrayBuffer(hc, aB, nc.byteOffset + lc, Uc, nc.buffer, Dc, Nc, Ec), cB._uploadDataToTextureDirectly(Bc, Yc, Ic, rB)) : (Bc.format = 5, Uc = hc * aB * 4, Yc = mB._GetRGBAArrayBuffer(hc, aB, nc.byteOffset + lc, Uc, nc.buffer, Dc, Nc, Ec, oc), cB._uploadDataToTextureDirectly(Bc, Yc, Ic, rB));
              else if (Vc.isLuminance) {
                const Vc = cB._getUnpackAlignement(),
                  uc = hc;
                Uc = Math.floor((hc + Vc - 1) / Vc) * Vc * (aB - 1) + uc, Yc = mB._GetLuminanceArrayBuffer(hc, aB, nc.byteOffset + lc, Uc, nc.buffer), Bc.format = 1, Bc.type = 0, cB._uploadDataToTextureDirectly(Bc, Yc, Ic, rB)
              } else Uc = Math.max(4, hc) / 4 * Math.max(4, aB) / 4 * Zc, Yc = new Uint8Array(nc.buffer, nc.byteOffset + lc, Uc), Bc.type = 0, cB._uploadCompressedDataToTextureDirectly(Bc, bB, hc, aB, Yc, Ic, rB)
            }
            lc += Qc ? hc * aB * (Qc / 8) : Uc, hc *= .5, aB *= .5, hc = Math.max(1, hc), aB = Math.max(1, aB)
          }
          if (void 0 !== ec) break
        }
        Sc && Sc.length > 0 ? Vc.sphericalPolynomial = rB.c.ConvertCubeMapToSphericalPolynomial({
          size: zB[4],
          right: Sc[0],
          left: Sc[1],
          up: Sc[2],
          down: Sc[3],
          front: Sc[4],
          back: Sc[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : Vc.sphericalPolynomial = void 0
      }
    }
    mB.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);