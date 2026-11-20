export const id = 297;
export const ids = [296, 297];
export const modules = {
  41125: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      _DDSTextureLoader: () => EU
    });
    var tU = gU(39364),
      pU = gU(41112);
    class EU {
      constructor() {
        this.supportCascades = !0
      }
      loadCubeData(UU, RU, gU, EU) {
        const PU = RU.WC();
        let TU, qU = !1,
          KU = 1e3;
        if (Array.isArray(UU))
          for (let tU = 0; tU < UU.length; tU++) {
            const gU = UU[tU];
            TU = pU.DDSTools.GetDDSInfo(gU), RU.width = TU.width, RU.height = TU.height, qU = (TU.isRGB || TU.isLuminance || TU.mipmapCount > 1) && RU.generateMipMaps, PU._unpackFlipY(TU.isCompressed), pU.DDSTools.UploadDDSLevels(PU, RU, gU, TU, qU, 6, -1, tU), TU.isFourCC || 1 !== TU.mipmapCount ? KU = TU.mipmapCount - 1 : PU.generateMipMapsForCubemap(RU)
          } else {
            const EU = UU;
            TU = pU.DDSTools.GetDDSInfo(EU), RU.width = TU.width, RU.height = TU.height, gU && (TU.sphericalPolynomial = new tU.c), qU = (TU.isRGB || TU.isLuminance || TU.mipmapCount > 1) && RU.generateMipMaps, PU._unpackFlipY(TU.isCompressed), pU.DDSTools.UploadDDSLevels(PU, RU, EU, TU, qU, 6), TU.isFourCC || 1 !== TU.mipmapCount ? KU = TU.mipmapCount - 1 : PU.generateMipMapsForCubemap(RU, !1)
          }
        PU._setCubeMapTextureParams(RU, qU, KU), RU.isReady = !0, RU.onLoadedObservable.notifyObservers(RU), RU.onLoadedObservable.clear(), EU && EU({
          isDDS: !0,
          width: RU.width,
          info: TU,
          data: UU,
          texture: RU
        })
      }
      loadData(UU, RU, gU) {
        const tU = pU.DDSTools.GetDDSInfo(UU),
          EU = (tU.isRGB || tU.isLuminance || tU.mipmapCount > 1) && RU.generateMipMaps && Math.max(tU.width, tU.height) >> tU.mipmapCount - 1 === 1;
        gU(tU.width, tU.height, EU, tU.isFourCC, (() => {
          pU.DDSTools.UploadDDSLevels(RU.WC(), RU, UU, tU, EU, 1)
        }))
      }
    }
  },
  41114: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => KU
    });
    var tU = gU(36600),
      pU = gU(36626),
      EU = gU(39364),
      PU = gU(36602),
      TU = gU(36761);
    class qU {
      constructor(UU, RU, gU, tU) {
        this.name = UU, this.worldAxisForNormal = RU, this.worldAxisForFileX = gU, this.worldAxisForFileY = tU
      }
    }
    class KU {
      static _NearestPow2Floor(UU) {
        return UU <= 1 ? 1 : 1 << Math.floor(Math.log2(UU))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(UU) {
        if (!UU.isCube) return null;
        UU.aZ()?.WC().flushFramebuffer();
        const RU = UU.getSize().width,
          gU = UU._sphericalPolynomialTargetSize,
          tU = gU > 0 ? this._NearestPow2Floor(gU) : 0,
          pU = !UU.noMipmap && !0 === UU._texture?.generateMipMaps,
          EU = tU > 0 && tU < RU && pU,
          PU = EU ? Math.max(0, Math.round(Math.log2(RU / tU))) : 0,
          TU = EU ? Math.max(1, Math.floor(RU / Math.pow(2, PU))) : RU,
          qU = UU.readPixels(0, PU, void 0, !1),
          KU = UU.readPixels(1, PU, void 0, !1);
        let cU, GU;
        UU.isRenderTarget ? (cU = UU.readPixels(3, PU, void 0, !1), GU = UU.readPixels(2, PU, void 0, !1)) : (cU = UU.readPixels(2, PU, void 0, !1), GU = UU.readPixels(3, PU, void 0, !1));
        const jU = UU.readPixels(4, PU, void 0, !1),
          uU = UU.readPixels(5, PU, void 0, !1),
          CU = UU.gammaSpace,
          hU = tU > 0 && tU < RU && !EU;
        return new Promise((UU => {
          Promise.all([KU, qU, cU, GU, jU, uU]).then((gU => {
            let [pU, EU, PU, qU, KU, cU] = gU, GU = TU;
            if (hU) {
              const UU = 4;
              pU = this._DownsampleFace(pU, RU, tU, UU), EU = this._DownsampleFace(EU, RU, tU, UU), PU = this._DownsampleFace(PU, RU, tU, UU), qU = this._DownsampleFace(qU, RU, tU, UU), KU = this._DownsampleFace(KU, RU, tU, UU), cU = this._DownsampleFace(cU, RU, tU, UU), GU = tU
            }
            const jU = {
              size: GU,
              right: EU,
              left: pU,
              up: PU,
              down: qU,
              front: KU,
              back: cU,
              format: 5,
              type: pU instanceof Float32Array ? 1 : 0,
              gammaSpace: CU
            };
            UU(this.ConvertCubeMapToSphericalPolynomial(jU))
          }))
        }))
      }
      static _AreaElement(UU, RU) {
        return Math.atan2(UU * RU, Math.sqrt(UU * UU + RU * RU + 1))
      }
      static _DownsampleFace(UU, RU, gU, tU) {
        const pU = UU instanceof Float32Array ? UU : Float32Array.from(UU),
          EU = gU * gU * tU,
          PU = new Float32Array(EU),
          TU = RU / gU,
          qU = 1 / (TU * TU);
        for (let cU = 0; cU < gU; cU++) {
          const UU = Math.floor(cU * TU),
            EU = Math.floor((cU + 1) * TU);
          for (let KU = 0; KU < gU; KU++) {
            const GU = Math.floor(KU * TU),
              jU = Math.floor((KU + 1) * TU),
              uU = (cU * gU + KU) * tU;
            for (let gU = 0; gU < tU; gU++) {
              let TU = 0;
              for (let PU = UU; PU < EU; PU++)
                for (let UU = GU; UU < jU; UU++) TU += pU[(PU * RU + UU) * tU + gU];
              PU[uU + gU] = TU * qU
            }
          }
        }
        if (UU instanceof Float32Array) return PU;
        const KU = new(0, UU.constructor)(EU);
        for (let cU = 0; cU < EU; cU++) KU[cU] = PU[cU] + .5 | 0;
        return KU
      }
      static ConvertCubeMapToSphericalPolynomial(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const gU = RU > 0 ? this._NearestPow2Floor(RU) : 0;
        if (gU > 0 && UU.size > gU) {
          const RU = 5 === UU.format ? 4 : 3,
            tU = ["right", "left", "up", "down", "front", "back"],
            pU = {};
          for (const EU of tU) pU[EU] = this._DownsampleFace(UU[EU], UU.size, gU, RU);
          UU = {
            ...UU,
            ...pU,
            size: gU
          }
        }
        const tU = new EU.b;
        let qU = 0;
        const KU = 2 / UU.size,
          cU = KU,
          GU = .5 * KU,
          jU = GU - 1;
        for (let EU = 0; EU < 6; EU++) {
          const RU = this._FileFaces[EU],
            gU = UU[RU.name];
          let uU = jU;
          const CU = 5 === UU.format ? 4 : 3;
          for (let EU = 0; EU < UU.size; EU++) {
            let hU = jU;
            for (let cU = 0; cU < UU.size; cU++) {
              const jU = RU.worldAxisForFileX.scale(hU).add(RU.worldAxisForFileY.scale(uU)).add(RU.worldAxisForNormal);
              jU.normalize();
              const QU = this._AreaElement(hU - GU, uU - GU) - this._AreaElement(hU - GU, uU + GU) - this._AreaElement(hU + GU, uU - GU) + this._AreaElement(hU + GU, uU + GU);
              let eU = gU[EU * UU.size * CU + cU * CU + 0],
                WU = gU[EU * UU.size * CU + cU * CU + 1],
                fU = gU[EU * UU.size * CU + cU * CU + 2];
              isNaN(eU) && (eU = 0), isNaN(WU) && (WU = 0), isNaN(fU) && (fU = 0), 0 === UU.type && (eU /= 255, WU /= 255, fU /= 255), UU.gammaSpace && (eU = Math.pow((0, pU.Clamp)(eU), PU.k), WU = Math.pow((0, pU.Clamp)(WU), PU.k), fU = Math.pow((0, pU.Clamp)(fU), PU.k));
              const xU = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const UU = Math.max(eU, WU, fU);
                if (UU > xU) {
                  const RU = xU / UU;
                  eU *= RU, WU *= RU, fU *= RU
                }
              } else eU = (0, pU.Clamp)(eU, 0, xU), WU = (0, pU.Clamp)(WU, 0, xU), fU = (0, pU.Clamp)(fU, 0, xU);
              const mU = new TU.e(eU, WU, fU);
              tU.addLight(jU, mU, QU), qU += QU, hU += KU
            }
            uU += cU
          }
        }
        const uU = 6 * (4 * Math.PI) / 6 / qU;
        return tU.scaleInPlace(uU), tU.convertIncidentRadianceToIrradiance(), tU.convertIrradianceToLambertianRadiance(), EU.c.FromHarmonics(tU)
      }
    }
    KU._FileFaces = [new qU("right", new tU.n(1, 0, 0), new tU.n(0, 0, -1), new tU.n(0, -1, 0)), new qU("left", new tU.n(-1, 0, 0), new tU.n(0, 0, 1), new tU.n(0, -1, 0)), new qU("up", new tU.n(0, 1, 0), new tU.n(1, 0, 0), new tU.n(0, 0, 1)), new qU("down", new tU.n(0, -1, 0), new tU.n(1, 0, 0), new tU.n(0, 0, -1)), new qU("front", new tU.n(0, 0, 1), new tU.n(1, 0, 0), new tU.n(0, -1, 0)), new qU("back", new tU.n(0, 0, -1), new tU.n(-1, 0, 0), new tU.n(0, -1, 0))], KU.MAX_HDRI_VALUE = 4096, KU.PRESERVE_CLAMPED_COLORS = !1
  },
  41112: (UU, RU, gU) => {
    gU.d(RU, {
      DDSTools: () => CU
    });
    var tU = gU(36626),
      pU = gU(38236),
      EU = gU(41114),
      PU = gU(39442);
    const TU = 131072,
      qU = 131072;

    function KU(UU) {
      return UU.charCodeAt(0) + (UU.charCodeAt(1) << 8) + (UU.charCodeAt(2) << 16) + (UU.charCodeAt(3) << 24)
    }
    const cU = KU("DXT1"),
      GU = KU("DXT3"),
      jU = KU("DXT5"),
      uU = KU("DX10");
    class CU {
      static GetDDSInfo(UU) {
        const RU = new Int32Array(UU.buffer, UU.byteOffset, 31),
          gU = new Int32Array(UU.buffer, UU.byteOffset, 35);
        let tU = 1;
        RU[2] & TU && (tU = Math.max(1, RU[7]));
        const pU = RU[21],
          EU = pU === uU ? gU[32] : 0;
        let PU = 0;
        switch (pU) {
          case 113:
            PU = 2;
            break;
          case 116:
            PU = 1;
            break;
          case uU:
            if (10 === EU) {
              PU = 2;
              break
            }
            if (2 === EU) {
              PU = 1;
              break
            }
        }
        return {
          width: RU[4],
          height: RU[3],
          mipmapCount: tU,
          isFourCC: 4 === (4 & RU[20]),
          isRGB: 64 === (64 & RU[20]),
          isLuminance: (RU[20] & qU) === qU,
          isCube: 512 === (512 & RU[28]),
          isCompressed: pU === cU || pU === GU || pU === jU,
          dxgiFormat: EU,
          textureType: PU
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(UU, RU, gU, tU, pU, EU) {
        const TU = new Float32Array(tU),
          qU = new Uint16Array(pU, gU);
        let KU = 0;
        for (let cU = 0; cU < RU; cU++)
          for (let RU = 0; RU < UU; RU++) {
            const gU = 4 * (RU + cU * UU);
            TU[KU] = (0, PU.c)(qU[gU]), TU[KU + 1] = (0, PU.c)(qU[gU + 1]), TU[KU + 2] = (0, PU.c)(qU[gU + 2]), CU.StoreLODInAlphaChannel ? TU[KU + 3] = EU : TU[KU + 3] = (0, PU.c)(qU[gU + 3]), KU += 4
          }
        return TU
      }
      static _GetHalfFloatRGBAArrayBuffer(UU, RU, gU, tU, pU, EU) {
        if (CU.StoreLODInAlphaChannel) {
          const TU = new Uint16Array(tU),
            qU = new Uint16Array(pU, gU);
          let KU = 0;
          for (let gU = 0; gU < RU; gU++)
            for (let RU = 0; RU < UU; RU++) {
              const tU = 4 * (RU + gU * UU);
              TU[KU] = qU[tU], TU[KU + 1] = qU[tU + 1], TU[KU + 2] = qU[tU + 2], TU[KU + 3] = (0, PU.f)(EU), KU += 4
            }
          return TU
        }
        return new Uint16Array(pU, gU, tU)
      }
      static _GetFloatRGBAArrayBuffer(UU, RU, gU, tU, pU, EU) {
        if (CU.StoreLODInAlphaChannel) {
          const PU = new Float32Array(tU),
            TU = new Float32Array(pU, gU);
          let qU = 0;
          for (let gU = 0; gU < RU; gU++)
            for (let RU = 0; RU < UU; RU++) {
              const tU = 4 * (RU + gU * UU);
              PU[qU] = TU[tU], PU[qU + 1] = TU[tU + 1], PU[qU + 2] = TU[tU + 2], PU[qU + 3] = EU, qU += 4
            }
          return PU
        }
        return new Float32Array(pU, gU, tU)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(UU, RU, gU, tU, pU, EU) {
        const TU = new Uint16Array(tU),
          qU = new Float32Array(pU, gU);
        let KU = 0;
        for (let cU = 0; cU < RU; cU++)
          for (let RU = 0; RU < UU; RU++) TU[KU] = (0, PU.f)(qU[KU]), TU[KU + 1] = (0, PU.f)(qU[KU + 1]), TU[KU + 2] = (0, PU.f)(qU[KU + 2]), CU.StoreLODInAlphaChannel ? TU[KU + 3] = (0, PU.f)(EU) : TU[KU + 3] = (0, PU.f)(qU[KU + 3]), KU += 4;
        return TU
      }
      static _GetFloatAsUIntRGBAArrayBuffer(UU, RU, gU, pU, EU, PU) {
        const TU = new Uint8Array(pU),
          qU = new Float32Array(EU, gU);
        let KU = 0;
        for (let cU = 0; cU < RU; cU++)
          for (let RU = 0; RU < UU; RU++) {
            const gU = 4 * (RU + cU * UU);
            TU[KU] = 255 * (0, tU.Clamp)(qU[gU]), TU[KU + 1] = 255 * (0, tU.Clamp)(qU[gU + 1]), TU[KU + 2] = 255 * (0, tU.Clamp)(qU[gU + 2]), CU.StoreLODInAlphaChannel ? TU[KU + 3] = PU : TU[KU + 3] = 255 * (0, tU.Clamp)(qU[gU + 3]), KU += 4
          }
        return TU
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(UU, RU, gU, pU, EU, TU) {
        const qU = new Uint8Array(pU),
          KU = new Uint16Array(EU, gU);
        let cU = 0;
        for (let GU = 0; GU < RU; GU++)
          for (let RU = 0; RU < UU; RU++) {
            const gU = 4 * (RU + GU * UU);
            qU[cU] = 255 * (0, tU.Clamp)((0, PU.c)(KU[gU])), qU[cU + 1] = 255 * (0, tU.Clamp)((0, PU.c)(KU[gU + 1])), qU[cU + 2] = 255 * (0, tU.Clamp)((0, PU.c)(KU[gU + 2])), CU.StoreLODInAlphaChannel ? qU[cU + 3] = TU : qU[cU + 3] = 255 * (0, tU.Clamp)((0, PU.c)(KU[gU + 3])), cU += 4
          }
        return qU
      }
      static _GetRGBAArrayBuffer(UU, RU, gU, tU, pU, EU, PU, TU, qU) {
        const KU = new Uint8Array(tU),
          cU = new Uint8Array(pU, gU);
        let GU = 0;
        for (let jU = 0; jU < RU; jU++)
          for (let RU = 0; RU < UU; RU++) {
            const gU = 4 * (RU + jU * UU);
            KU[GU] = cU[gU + EU], KU[GU + 1] = cU[gU + PU], KU[GU + 2] = cU[gU + TU], KU[GU + 3] = cU[gU + qU], GU += 4
          }
        return KU
      }
      static _ExtractLongWordOrder(UU) {
        return 0 === UU || 255 === UU || -16777216 === UU ? 0 : 1 + CU._ExtractLongWordOrder(UU >> 8)
      }
      static _GetRGBArrayBuffer(UU, RU, gU, tU, pU, EU, PU, TU) {
        const qU = new Uint8Array(tU),
          KU = new Uint8Array(pU, gU);
        let cU = 0;
        for (let GU = 0; GU < RU; GU++)
          for (let RU = 0; RU < UU; RU++) {
            const gU = 3 * (RU + GU * UU);
            qU[cU] = KU[gU + EU], qU[cU + 1] = KU[gU + PU], qU[cU + 2] = KU[gU + TU], cU += 3
          }
        return qU
      }
      static _GetLuminanceArrayBuffer(UU, RU, gU, tU, pU) {
        const EU = new Uint8Array(tU),
          PU = new Uint8Array(pU, gU);
        let TU = 0;
        for (let qU = 0; qU < RU; qU++)
          for (let RU = 0; RU < UU; RU++) {
            const gU = RU + qU * UU;
            EU[TU] = PU[gU], TU++
          }
        return EU
      }
      static UploadDDSLevels(UU, RU, gU, tU, PU, qU) {
        let KU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          hU = arguments.length > 7 ? arguments[7] : void 0,
          QU = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          eU = null;
        tU.sphericalPolynomial && (eU = []);
        const WU = !!UU.getCaps().s3tc;
        RU.generateMipMaps = PU;
        const fU = new Int32Array(gU.buffer, gU.byteOffset, 31);
        let xU, mU, IU, JU, wU, nU, bU, oU = 0,
          ZU = 0,
          aU = 1;
        if (542327876 !== fU[0]) return void pU.e.Error("Invalid magic number in DDS header");
        if (!tU.isFourCC && !tU.isRGB && !tU.isLuminance) return void pU.e.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (tU.isCompressed && !WU) return void pU.e.Error("Compressed textures are not supported on this platform.");
        let YU = fU[22];
        JU = fU[1] + 4;
        let BU = !1;
        if (tU.isFourCC) switch (xU = fU[21], xU) {
          case cU:
            aU = 8, ZU = 33777;
            break;
          case GU:
            aU = 16, ZU = 33778;
            break;
          case jU:
            aU = 16, ZU = 33779;
            break;
          case 113:
            BU = !0, YU = 64;
            break;
          case 116:
            BU = !0, YU = 128;
            break;
          case uU: {
            JU += 20;
            let UU = !1;
            switch (tU.dxgiFormat) {
              case 10:
                BU = !0, YU = 64, UU = !0;
                break;
              case 2:
                BU = !0, YU = 128, UU = !0;
                break;
              case 88:
                tU.isRGB = !0, tU.isFourCC = !1, YU = 32, UU = !0
            }
            if (UU) break
          }
          default:
            return void pU.e.Error(["Unsupported FourCC code:", (VU = xU, String.fromCharCode(255 & VU, VU >> 8 & 255, VU >> 16 & 255, VU >> 24 & 255))])
        }
        var VU;
        const rU = CU._ExtractLongWordOrder(fU[23]),
          XU = CU._ExtractLongWordOrder(fU[24]),
          vU = CU._ExtractLongWordOrder(fU[25]),
          dU = CU._ExtractLongWordOrder(fU[26]);
        BU && (ZU = UU._getRGBABufferInternalSizedFormat(tU.textureType)), nU = 1, fU[2] & TU && !1 !== PU && (nU = Math.max(1, fU[7]));
        const HU = hU || 0,
          SU = UU.getCaps();
        for (let pU = HU; pU < qU; pU++) {
          for (mU = fU[4], IU = fU[3], bU = 0; bU < nU; ++bU) {
            if (-1 === KU || KU === bU) {
              const EU = -1 === KU ? bU : 0;
              if (!tU.isCompressed && tU.isFourCC) {
                RU.format = 5, oU = mU * IU * 4;
                let tU = null;
                if (UU._badOS || UU._badDesktopOS || !SU.textureHalfFloat && !SU.textureFloat) 128 === YU ? (tU = CU._GetFloatAsUIntRGBAArrayBuffer(mU, IU, gU.byteOffset + JU, oU, gU.buffer, EU), eU && 0 == EU && eU.push(CU._GetFloatRGBAArrayBuffer(mU, IU, gU.byteOffset + JU, oU, gU.buffer, EU))) : 64 === YU && (tU = CU._GetHalfFloatAsUIntRGBAArrayBuffer(mU, IU, gU.byteOffset + JU, oU, gU.buffer, EU), eU && 0 == EU && eU.push(CU._GetHalfFloatAsFloatRGBAArrayBuffer(mU, IU, gU.byteOffset + JU, oU, gU.buffer, EU))), RU.type = 0;
                else {
                  const UU = SU.textureFloat && (QU && SU.textureFloatLinearFiltering || !QU),
                    pU = SU.textureHalfFloat && (QU && SU.textureHalfFloatLinearFiltering || !QU),
                    PU = (128 === YU || 64 === YU && !pU) && UU ? 1 : (64 === YU || 128 === YU && !UU) && pU ? 2 : 0;
                  let TU, qU = null;
                  if (128 === YU) switch (PU) {
                    case 1:
                      TU = CU._GetFloatRGBAArrayBuffer, qU = null;
                      break;
                    case 2:
                      TU = CU._GetFloatAsHalfFloatRGBAArrayBuffer, qU = CU._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      TU = CU._GetFloatAsUIntRGBAArrayBuffer, qU = CU._GetFloatRGBAArrayBuffer
                  } else switch (PU) {
                    case 1:
                      TU = CU._GetHalfFloatAsFloatRGBAArrayBuffer, qU = null;
                      break;
                    case 2:
                      TU = CU._GetHalfFloatRGBAArrayBuffer, qU = CU._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      TU = CU._GetHalfFloatAsUIntRGBAArrayBuffer, qU = CU._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  RU.type = PU, tU = TU(mU, IU, gU.byteOffset + JU, oU, gU.buffer, EU), eU && 0 == EU && eU.push(qU ? qU(mU, IU, gU.byteOffset + JU, oU, gU.buffer, EU) : tU)
                }
                tU && UU._uploadDataToTextureDirectly(RU, tU, pU, EU)
              } else if (tU.isRGB) RU.type = 0, 24 === YU ? (RU.format = 4, oU = mU * IU * 3, wU = CU._GetRGBArrayBuffer(mU, IU, gU.byteOffset + JU, oU, gU.buffer, rU, XU, vU), UU._uploadDataToTextureDirectly(RU, wU, pU, EU)) : (RU.format = 5, oU = mU * IU * 4, wU = CU._GetRGBAArrayBuffer(mU, IU, gU.byteOffset + JU, oU, gU.buffer, rU, XU, vU, dU), UU._uploadDataToTextureDirectly(RU, wU, pU, EU));
              else if (tU.isLuminance) {
                const tU = UU._getUnpackAlignement(),
                  PU = mU;
                oU = Math.floor((mU + tU - 1) / tU) * tU * (IU - 1) + PU, wU = CU._GetLuminanceArrayBuffer(mU, IU, gU.byteOffset + JU, oU, gU.buffer), RU.format = 1, RU.type = 0, UU._uploadDataToTextureDirectly(RU, wU, pU, EU)
              } else oU = Math.max(4, mU) / 4 * Math.max(4, IU) / 4 * aU, wU = new Uint8Array(gU.buffer, gU.byteOffset + JU, oU), RU.type = 0, UU._uploadCompressedDataToTextureDirectly(RU, ZU, mU, IU, wU, pU, EU)
            }
            JU += YU ? mU * IU * (YU / 8) : oU, mU *= .5, IU *= .5, mU = Math.max(1, mU), IU = Math.max(1, IU)
          }
          if (void 0 !== hU) break
        }
        eU && eU.length > 0 ? tU.sphericalPolynomial = EU.e.ConvertCubeMapToSphericalPolynomial({
          size: fU[4],
          right: eU[0],
          left: eU[1],
          up: eU[2],
          down: eU[3],
          front: eU[4],
          back: eU[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : tU.sphericalPolynomial = void 0
      }
    }
    CU.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);