export const id = 307;
export const ids = [306, 307];
export const modules = {
  41800: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      _DDSTextureLoader: () => XS
    });
    var tS = gS(40032),
      bS = gS(41780);
    class XS {
      constructor() {
        this.supportCascades = !0
      }
      loadCubeData(SS, HS, gS, XS) {
        const xS = HS.AK();
        let NS, qS = !1,
          uS = 1e3;
        if (Array.isArray(SS))
          for (let tS = 0; tS < SS.length; tS++) {
            const gS = SS[tS];
            NS = bS.DDSTools.GetDDSInfo(gS), HS.width = NS.width, HS.height = NS.height, qS = (NS.isRGB || NS.isLuminance || NS.mipmapCount > 1) && HS.generateMipMaps, xS._unpackFlipY(NS.isCompressed), bS.DDSTools.UploadDDSLevels(xS, HS, gS, NS, qS, 6, -1, tS), NS.isFourCC || 1 !== NS.mipmapCount ? uS = NS.mipmapCount - 1 : xS.generateMipMapsForCubemap(HS)
          } else {
            const XS = SS;
            NS = bS.DDSTools.GetDDSInfo(XS), HS.width = NS.width, HS.height = NS.height, gS && (NS.sphericalPolynomial = new tS.f), qS = (NS.isRGB || NS.isLuminance || NS.mipmapCount > 1) && HS.generateMipMaps, xS._unpackFlipY(NS.isCompressed), bS.DDSTools.UploadDDSLevels(xS, HS, XS, NS, qS, 6), NS.isFourCC || 1 !== NS.mipmapCount ? uS = NS.mipmapCount - 1 : xS.generateMipMapsForCubemap(HS, !1)
          }
        xS._setCubeMapTextureParams(HS, qS, uS), HS.isReady = !0, HS.onLoadedObservable.notifyObservers(HS), HS.onLoadedObservable.clear(), XS && XS({
          isDDS: !0,
          width: HS.width,
          info: NS,
          data: SS,
          texture: HS
        })
      }
      loadData(SS, HS, gS) {
        const tS = bS.DDSTools.GetDDSInfo(SS),
          XS = (tS.isRGB || tS.isLuminance || tS.mipmapCount > 1) && HS.generateMipMaps && Math.max(tS.width, tS.height) >> tS.mipmapCount - 1 === 1;
        gS(tS.width, tS.height, XS, tS.isFourCC, (() => {
          bS.DDSTools.UploadDDSLevels(HS.AK(), HS, SS, tS, XS, 1)
        }))
      }
    }
  },
  41785: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => uS
    });
    var tS = gS(37117),
      bS = gS(37149),
      XS = gS(40032),
      xS = gS(37123),
      NS = gS(37300);
    class qS {
      constructor(SS, HS, gS, tS) {
        this.name = SS, this.worldAxisForNormal = HS, this.worldAxisForFileX = gS, this.worldAxisForFileY = tS
      }
    }
    class uS {
      static _NearestPow2Floor(SS) {
        return SS <= 1 ? 1 : 1 << Math.floor(Math.log2(SS))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(SS) {
        if (!SS.isCube) return null;
        SS.lL()?.AK().flushFramebuffer();
        const HS = SS.getSize().width,
          gS = SS._sphericalPolynomialTargetSize,
          tS = gS > 0 ? this._NearestPow2Floor(gS) : 0,
          bS = !SS.noMipmap && !0 === SS._texture?.generateMipMaps,
          XS = tS > 0 && tS < HS && bS,
          xS = XS ? Math.max(0, Math.round(Math.log2(HS / tS))) : 0,
          NS = XS ? Math.max(1, Math.floor(HS / Math.pow(2, xS))) : HS,
          qS = SS.readPixels(0, xS, void 0, !1),
          uS = SS.readPixels(1, xS, void 0, !1);
        let IS, fS;
        SS.isRenderTarget ? (IS = SS.readPixels(3, xS, void 0, !1), fS = SS.readPixels(2, xS, void 0, !1)) : (IS = SS.readPixels(2, xS, void 0, !1), fS = SS.readPixels(3, xS, void 0, !1));
        const kS = SS.readPixels(4, xS, void 0, !1),
          aS = SS.readPixels(5, xS, void 0, !1),
          KS = SS.gammaSpace,
          jS = tS > 0 && tS < HS && !XS;
        return new Promise((SS => {
          Promise.all([uS, qS, IS, fS, kS, aS]).then((gS => {
            let [bS, XS, xS, qS, uS, IS] = gS, fS = NS;
            if (jS) {
              const SS = 4;
              bS = this._DownsampleFace(bS, HS, tS, SS), XS = this._DownsampleFace(XS, HS, tS, SS), xS = this._DownsampleFace(xS, HS, tS, SS), qS = this._DownsampleFace(qS, HS, tS, SS), uS = this._DownsampleFace(uS, HS, tS, SS), IS = this._DownsampleFace(IS, HS, tS, SS), fS = tS
            }
            const kS = {
              size: fS,
              right: XS,
              left: bS,
              up: xS,
              down: qS,
              front: uS,
              back: IS,
              format: 5,
              type: bS instanceof Float32Array ? 1 : 0,
              gammaSpace: KS
            };
            SS(this.ConvertCubeMapToSphericalPolynomial(kS))
          }))
        }))
      }
      static _AreaElement(SS, HS) {
        return Math.atan2(SS * HS, Math.sqrt(SS * SS + HS * HS + 1))
      }
      static _DownsampleFace(SS, HS, gS, tS) {
        const bS = SS instanceof Float32Array ? SS : Float32Array.from(SS),
          XS = gS * gS * tS,
          xS = new Float32Array(XS),
          NS = HS / gS,
          qS = 1 / (NS * NS);
        for (let IS = 0; IS < gS; IS++) {
          const SS = Math.floor(IS * NS),
            XS = Math.floor((IS + 1) * NS);
          for (let uS = 0; uS < gS; uS++) {
            const fS = Math.floor(uS * NS),
              kS = Math.floor((uS + 1) * NS),
              aS = (IS * gS + uS) * tS;
            for (let gS = 0; gS < tS; gS++) {
              let NS = 0;
              for (let xS = SS; xS < XS; xS++)
                for (let SS = fS; SS < kS; SS++) NS += bS[(xS * HS + SS) * tS + gS];
              xS[aS + gS] = NS * qS
            }
          }
        }
        if (SS instanceof Float32Array) return xS;
        const uS = new(0, SS.constructor)(XS);
        for (let IS = 0; IS < XS; IS++) uS[IS] = xS[IS] + .5 | 0;
        return uS
      }
      static ConvertCubeMapToSphericalPolynomial(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const gS = HS > 0 ? this._NearestPow2Floor(HS) : 0;
        if (gS > 0 && SS.size > gS) {
          const HS = 5 === SS.format ? 4 : 3,
            tS = ["right", "left", "up", "down", "front", "back"],
            bS = {};
          for (const XS of tS) bS[XS] = this._DownsampleFace(SS[XS], SS.size, gS, HS);
          SS = {
            ...SS,
            ...bS,
            size: gS
          }
        }
        const tS = new XS.e;
        let qS = 0;
        const uS = 2 / SS.size,
          IS = uS,
          fS = .5 * uS,
          kS = fS - 1;
        for (let XS = 0; XS < 6; XS++) {
          const HS = this._FileFaces[XS],
            gS = SS[HS.name];
          let aS = kS;
          const KS = 5 === SS.format ? 4 : 3;
          for (let XS = 0; XS < SS.size; XS++) {
            let jS = kS;
            for (let IS = 0; IS < SS.size; IS++) {
              const kS = HS.worldAxisForFileX.scale(jS).add(HS.worldAxisForFileY.scale(aS)).add(HS.worldAxisForNormal);
              kS.normalize();
              const GS = this._AreaElement(jS - fS, aS - fS) - this._AreaElement(jS - fS, aS + fS) - this._AreaElement(jS + fS, aS - fS) + this._AreaElement(jS + fS, aS + fS);
              let CS = gS[XS * SS.size * KS + IS * KS + 0],
                nS = gS[XS * SS.size * KS + IS * KS + 1],
                PS = gS[XS * SS.size * KS + IS * KS + 2];
              isNaN(CS) && (CS = 0), isNaN(nS) && (nS = 0), isNaN(PS) && (PS = 0), 0 === SS.type && (CS /= 255, nS /= 255, PS /= 255), SS.gammaSpace && (CS = Math.pow((0, bS.Clamp)(CS), xS.l), nS = Math.pow((0, bS.Clamp)(nS), xS.l), PS = Math.pow((0, bS.Clamp)(PS), xS.l));
              const QS = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const SS = Math.max(CS, nS, PS);
                if (SS > QS) {
                  const HS = QS / SS;
                  CS *= HS, nS *= HS, PS *= HS
                }
              } else CS = (0, bS.Clamp)(CS, 0, QS), nS = (0, bS.Clamp)(nS, 0, QS), PS = (0, bS.Clamp)(PS, 0, QS);
              const DS = new NS.b(CS, nS, PS);
              tS.addLight(kS, DS, GS), qS += GS, jS += uS
            }
            aS += IS
          }
        }
        const aS = 6 * (4 * Math.PI) / 6 / qS;
        return tS.scaleInPlace(aS), tS.convertIncidentRadianceToIrradiance(), tS.convertIrradianceToLambertianRadiance(), XS.f.FromHarmonics(tS)
      }
    }
    uS._FileFaces = [new qS("right", new tS.n(1, 0, 0), new tS.n(0, 0, -1), new tS.n(0, -1, 0)), new qS("left", new tS.n(-1, 0, 0), new tS.n(0, 0, 1), new tS.n(0, -1, 0)), new qS("up", new tS.n(0, 1, 0), new tS.n(1, 0, 0), new tS.n(0, 0, 1)), new qS("down", new tS.n(0, -1, 0), new tS.n(1, 0, 0), new tS.n(0, 0, -1)), new qS("front", new tS.n(0, 0, 1), new tS.n(1, 0, 0), new tS.n(0, -1, 0)), new qS("back", new tS.n(0, 0, -1), new tS.n(-1, 0, 0), new tS.n(0, -1, 0))], uS.MAX_HDRI_VALUE = 4096, uS.PRESERVE_CLAMPED_COLORS = !1
  },
  41780: (SS, HS, gS) => {
    gS.d(HS, {
      DDSTools: () => KS
    });
    var tS = gS(37149),
      bS = gS(38687),
      XS = gS(41785),
      xS = gS(40115);
    const NS = 131072,
      qS = 131072;

    function uS(SS) {
      return SS.charCodeAt(0) + (SS.charCodeAt(1) << 8) + (SS.charCodeAt(2) << 16) + (SS.charCodeAt(3) << 24)
    }
    const IS = uS("DXT1"),
      fS = uS("DXT3"),
      kS = uS("DXT5"),
      aS = uS("DX10");
    class KS {
      static GetDDSInfo(SS) {
        const HS = new Int32Array(SS.buffer, SS.byteOffset, 31),
          gS = new Int32Array(SS.buffer, SS.byteOffset, 35);
        let tS = 1;
        HS[2] & NS && (tS = Math.max(1, HS[7]));
        const bS = HS[21],
          XS = bS === aS ? gS[32] : 0;
        let xS = 0;
        switch (bS) {
          case 113:
            xS = 2;
            break;
          case 116:
            xS = 1;
            break;
          case aS:
            if (10 === XS) {
              xS = 2;
              break
            }
            if (2 === XS) {
              xS = 1;
              break
            }
        }
        return {
          width: HS[4],
          height: HS[3],
          mipmapCount: tS,
          isFourCC: 4 === (4 & HS[20]),
          isRGB: 64 === (64 & HS[20]),
          isLuminance: (HS[20] & qS) === qS,
          isCube: 512 === (512 & HS[28]),
          isCompressed: bS === IS || bS === fS || bS === kS,
          dxgiFormat: XS,
          textureType: xS
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(SS, HS, gS, tS, bS, XS) {
        const NS = new Float32Array(tS),
          qS = new Uint16Array(bS, gS);
        let uS = 0;
        for (let IS = 0; IS < HS; IS++)
          for (let HS = 0; HS < SS; HS++) {
            const gS = 4 * (HS + IS * SS);
            NS[uS] = (0, xS.b)(qS[gS]), NS[uS + 1] = (0, xS.b)(qS[gS + 1]), NS[uS + 2] = (0, xS.b)(qS[gS + 2]), KS.StoreLODInAlphaChannel ? NS[uS + 3] = XS : NS[uS + 3] = (0, xS.b)(qS[gS + 3]), uS += 4
          }
        return NS
      }
      static _GetHalfFloatRGBAArrayBuffer(SS, HS, gS, tS, bS, XS) {
        if (KS.StoreLODInAlphaChannel) {
          const NS = new Uint16Array(tS),
            qS = new Uint16Array(bS, gS);
          let uS = 0;
          for (let gS = 0; gS < HS; gS++)
            for (let HS = 0; HS < SS; HS++) {
              const tS = 4 * (HS + gS * SS);
              NS[uS] = qS[tS], NS[uS + 1] = qS[tS + 1], NS[uS + 2] = qS[tS + 2], NS[uS + 3] = (0, xS.f)(XS), uS += 4
            }
          return NS
        }
        return new Uint16Array(bS, gS, tS)
      }
      static _GetFloatRGBAArrayBuffer(SS, HS, gS, tS, bS, XS) {
        if (KS.StoreLODInAlphaChannel) {
          const xS = new Float32Array(tS),
            NS = new Float32Array(bS, gS);
          let qS = 0;
          for (let gS = 0; gS < HS; gS++)
            for (let HS = 0; HS < SS; HS++) {
              const tS = 4 * (HS + gS * SS);
              xS[qS] = NS[tS], xS[qS + 1] = NS[tS + 1], xS[qS + 2] = NS[tS + 2], xS[qS + 3] = XS, qS += 4
            }
          return xS
        }
        return new Float32Array(bS, gS, tS)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(SS, HS, gS, tS, bS, XS) {
        const NS = new Uint16Array(tS),
          qS = new Float32Array(bS, gS);
        let uS = 0;
        for (let IS = 0; IS < HS; IS++)
          for (let HS = 0; HS < SS; HS++) NS[uS] = (0, xS.f)(qS[uS]), NS[uS + 1] = (0, xS.f)(qS[uS + 1]), NS[uS + 2] = (0, xS.f)(qS[uS + 2]), KS.StoreLODInAlphaChannel ? NS[uS + 3] = (0, xS.f)(XS) : NS[uS + 3] = (0, xS.f)(qS[uS + 3]), uS += 4;
        return NS
      }
      static _GetFloatAsUIntRGBAArrayBuffer(SS, HS, gS, bS, XS, xS) {
        const NS = new Uint8Array(bS),
          qS = new Float32Array(XS, gS);
        let uS = 0;
        for (let IS = 0; IS < HS; IS++)
          for (let HS = 0; HS < SS; HS++) {
            const gS = 4 * (HS + IS * SS);
            NS[uS] = 255 * (0, tS.Clamp)(qS[gS]), NS[uS + 1] = 255 * (0, tS.Clamp)(qS[gS + 1]), NS[uS + 2] = 255 * (0, tS.Clamp)(qS[gS + 2]), KS.StoreLODInAlphaChannel ? NS[uS + 3] = xS : NS[uS + 3] = 255 * (0, tS.Clamp)(qS[gS + 3]), uS += 4
          }
        return NS
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(SS, HS, gS, bS, XS, NS) {
        const qS = new Uint8Array(bS),
          uS = new Uint16Array(XS, gS);
        let IS = 0;
        for (let fS = 0; fS < HS; fS++)
          for (let HS = 0; HS < SS; HS++) {
            const gS = 4 * (HS + fS * SS);
            qS[IS] = 255 * (0, tS.Clamp)((0, xS.b)(uS[gS])), qS[IS + 1] = 255 * (0, tS.Clamp)((0, xS.b)(uS[gS + 1])), qS[IS + 2] = 255 * (0, tS.Clamp)((0, xS.b)(uS[gS + 2])), KS.StoreLODInAlphaChannel ? qS[IS + 3] = NS : qS[IS + 3] = 255 * (0, tS.Clamp)((0, xS.b)(uS[gS + 3])), IS += 4
          }
        return qS
      }
      static _GetRGBAArrayBuffer(SS, HS, gS, tS, bS, XS, xS, NS, qS) {
        const uS = new Uint8Array(tS),
          IS = new Uint8Array(bS, gS);
        let fS = 0;
        for (let kS = 0; kS < HS; kS++)
          for (let HS = 0; HS < SS; HS++) {
            const gS = 4 * (HS + kS * SS);
            uS[fS] = IS[gS + XS], uS[fS + 1] = IS[gS + xS], uS[fS + 2] = IS[gS + NS], uS[fS + 3] = IS[gS + qS], fS += 4
          }
        return uS
      }
      static _ExtractLongWordOrder(SS) {
        return 0 === SS || 255 === SS || -16777216 === SS ? 0 : 1 + KS._ExtractLongWordOrder(SS >> 8)
      }
      static _GetRGBArrayBuffer(SS, HS, gS, tS, bS, XS, xS, NS) {
        const qS = new Uint8Array(tS),
          uS = new Uint8Array(bS, gS);
        let IS = 0;
        for (let fS = 0; fS < HS; fS++)
          for (let HS = 0; HS < SS; HS++) {
            const gS = 3 * (HS + fS * SS);
            qS[IS] = uS[gS + XS], qS[IS + 1] = uS[gS + xS], qS[IS + 2] = uS[gS + NS], IS += 3
          }
        return qS
      }
      static _GetLuminanceArrayBuffer(SS, HS, gS, tS, bS) {
        const XS = new Uint8Array(tS),
          xS = new Uint8Array(bS, gS);
        let NS = 0;
        for (let qS = 0; qS < HS; qS++)
          for (let HS = 0; HS < SS; HS++) {
            const gS = HS + qS * SS;
            XS[NS] = xS[gS], NS++
          }
        return XS
      }
      static UploadDDSLevels(SS, HS, gS, tS, xS, qS) {
        let uS = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          jS = arguments.length > 7 ? arguments[7] : void 0,
          GS = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          CS = null;
        tS.sphericalPolynomial && (CS = []);
        const nS = !!SS.getCaps().s3tc;
        HS.generateMipMaps = xS;
        const PS = new Int32Array(gS.buffer, gS.byteOffset, 31);
        let QS, DS, wS, hS, ZS, JS, OS, dS = 0,
          cS = 0,
          vS = 1;
        if (542327876 !== PS[0]) return void bS.b.Error("Invalid magic number in DDS header");
        if (!tS.isFourCC && !tS.isRGB && !tS.isLuminance) return void bS.b.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (tS.isCompressed && !nS) return void bS.b.Error("Compressed textures are not supported on this platform.");
        let ES = PS[22];
        hS = PS[1] + 4;
        let LS = !1;
        if (tS.isFourCC) switch (QS = PS[21], QS) {
          case IS:
            vS = 8, cS = 33777;
            break;
          case fS:
            vS = 16, cS = 33778;
            break;
          case kS:
            vS = 16, cS = 33779;
            break;
          case 113:
            LS = !0, ES = 64;
            break;
          case 116:
            LS = !0, ES = 128;
            break;
          case aS: {
            hS += 20;
            let SS = !1;
            switch (tS.dxgiFormat) {
              case 10:
                LS = !0, ES = 64, SS = !0;
                break;
              case 2:
                LS = !0, ES = 128, SS = !0;
                break;
              case 88:
                tS.isRGB = !0, tS.isFourCC = !1, ES = 32, SS = !0
            }
            if (SS) break
          }
          default:
            return void bS.b.Error(["Unsupported FourCC code:", (YS = QS, String.fromCharCode(255 & YS, YS >> 8 & 255, YS >> 16 & 255, YS >> 24 & 255))])
        }
        var YS;
        const AS = KS._ExtractLongWordOrder(PS[23]),
          yS = KS._ExtractLongWordOrder(PS[24]),
          VS = KS._ExtractLongWordOrder(PS[25]),
          iS = KS._ExtractLongWordOrder(PS[26]);
        LS && (cS = SS._getRGBABufferInternalSizedFormat(tS.textureType)), JS = 1, PS[2] & NS && !1 !== xS && (JS = Math.max(1, PS[7]));
        const WS = jS || 0,
          zS = SS.getCaps();
        for (let bS = WS; bS < qS; bS++) {
          for (DS = PS[4], wS = PS[3], OS = 0; OS < JS; ++OS) {
            if (-1 === uS || uS === OS) {
              const XS = -1 === uS ? OS : 0;
              if (!tS.isCompressed && tS.isFourCC) {
                HS.format = 5, dS = DS * wS * 4;
                let tS = null;
                if (SS._badOS || SS._badDesktopOS || !zS.textureHalfFloat && !zS.textureFloat) 128 === ES ? (tS = KS._GetFloatAsUIntRGBAArrayBuffer(DS, wS, gS.byteOffset + hS, dS, gS.buffer, XS), CS && 0 == XS && CS.push(KS._GetFloatRGBAArrayBuffer(DS, wS, gS.byteOffset + hS, dS, gS.buffer, XS))) : 64 === ES && (tS = KS._GetHalfFloatAsUIntRGBAArrayBuffer(DS, wS, gS.byteOffset + hS, dS, gS.buffer, XS), CS && 0 == XS && CS.push(KS._GetHalfFloatAsFloatRGBAArrayBuffer(DS, wS, gS.byteOffset + hS, dS, gS.buffer, XS))), HS.type = 0;
                else {
                  const SS = zS.textureFloat && (GS && zS.textureFloatLinearFiltering || !GS),
                    bS = zS.textureHalfFloat && (GS && zS.textureHalfFloatLinearFiltering || !GS),
                    xS = (128 === ES || 64 === ES && !bS) && SS ? 1 : (64 === ES || 128 === ES && !SS) && bS ? 2 : 0;
                  let NS, qS = null;
                  if (128 === ES) switch (xS) {
                    case 1:
                      NS = KS._GetFloatRGBAArrayBuffer, qS = null;
                      break;
                    case 2:
                      NS = KS._GetFloatAsHalfFloatRGBAArrayBuffer, qS = KS._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      NS = KS._GetFloatAsUIntRGBAArrayBuffer, qS = KS._GetFloatRGBAArrayBuffer
                  } else switch (xS) {
                    case 1:
                      NS = KS._GetHalfFloatAsFloatRGBAArrayBuffer, qS = null;
                      break;
                    case 2:
                      NS = KS._GetHalfFloatRGBAArrayBuffer, qS = KS._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      NS = KS._GetHalfFloatAsUIntRGBAArrayBuffer, qS = KS._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  HS.type = xS, tS = NS(DS, wS, gS.byteOffset + hS, dS, gS.buffer, XS), CS && 0 == XS && CS.push(qS ? qS(DS, wS, gS.byteOffset + hS, dS, gS.buffer, XS) : tS)
                }
                tS && SS._uploadDataToTextureDirectly(HS, tS, bS, XS)
              } else if (tS.isRGB) HS.type = 0, 24 === ES ? (HS.format = 4, dS = DS * wS * 3, ZS = KS._GetRGBArrayBuffer(DS, wS, gS.byteOffset + hS, dS, gS.buffer, AS, yS, VS), SS._uploadDataToTextureDirectly(HS, ZS, bS, XS)) : (HS.format = 5, dS = DS * wS * 4, ZS = KS._GetRGBAArrayBuffer(DS, wS, gS.byteOffset + hS, dS, gS.buffer, AS, yS, VS, iS), SS._uploadDataToTextureDirectly(HS, ZS, bS, XS));
              else if (tS.isLuminance) {
                const tS = SS._getUnpackAlignement(),
                  xS = DS;
                dS = Math.floor((DS + tS - 1) / tS) * tS * (wS - 1) + xS, ZS = KS._GetLuminanceArrayBuffer(DS, wS, gS.byteOffset + hS, dS, gS.buffer), HS.format = 1, HS.type = 0, SS._uploadDataToTextureDirectly(HS, ZS, bS, XS)
              } else dS = Math.max(4, DS) / 4 * Math.max(4, wS) / 4 * vS, ZS = new Uint8Array(gS.buffer, gS.byteOffset + hS, dS), HS.type = 0, SS._uploadCompressedDataToTextureDirectly(HS, cS, DS, wS, ZS, bS, XS)
            }
            hS += ES ? DS * wS * (ES / 8) : dS, DS *= .5, wS *= .5, DS = Math.max(1, DS), wS = Math.max(1, wS)
          }
          if (void 0 !== jS) break
        }
        CS && CS.length > 0 ? tS.sphericalPolynomial = XS.c.ConvertCubeMapToSphericalPolynomial({
          size: PS[4],
          right: CS[0],
          left: CS[1],
          up: CS[2],
          down: CS[3],
          front: CS[4],
          back: CS[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : tS.sphericalPolynomial = void 0
      }
    }
    KS.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);