export const id = 615;
export const ids = [615];
export const modules = {
  44663: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => nV
    });
    var JV = xV(38269),
      YV = xV(38303),
      UV = xV(41248),
      yV = xV(38272),
      pV = xV(38389);
    class QV {
      constructor(VV, eV, xV, JV) {
        this.name = VV, this.worldAxisForNormal = eV, this.worldAxisForFileX = xV, this.worldAxisForFileY = JV
      }
    }
    class nV {
      static _NearestPow2Floor(VV) {
        return VV <= 1 ? 1 : 1 << Math.floor(Math.log2(VV))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(VV) {
        if (!VV.isCube) return null;
        VV.dD()?.sk().flushFramebuffer();
        const eV = VV.getSize().width,
          xV = VV._sphericalPolynomialTargetSize,
          JV = xV > 0 ? this._NearestPow2Floor(xV) : 0,
          YV = !VV.noMipmap && !0 === VV._texture?.generateMipMaps,
          UV = JV > 0 && JV < eV && YV,
          yV = UV ? Math.max(0, Math.round(Math.log2(eV / JV))) : 0,
          pV = UV ? Math.max(1, Math.floor(eV / Math.pow(2, yV))) : eV,
          QV = VV.readPixels(0, yV, void 0, !1),
          nV = VV.readPixels(1, yV, void 0, !1);
        let wV, ZV;
        VV.isRenderTarget ? (wV = VV.readPixels(3, yV, void 0, !1), ZV = VV.readPixels(2, yV, void 0, !1)) : (wV = VV.readPixels(2, yV, void 0, !1), ZV = VV.readPixels(3, yV, void 0, !1));
        const vV = VV.readPixels(4, yV, void 0, !1),
          rV = VV.readPixels(5, yV, void 0, !1),
          kV = VV.gammaSpace,
          bV = JV > 0 && JV < eV && !UV;
        return new Promise((VV => {
          Promise.all([nV, QV, wV, ZV, vV, rV]).then((xV => {
            let [YV, UV, yV, QV, nV, wV] = xV, ZV = pV;
            if (bV) {
              const VV = 4;
              YV = this._DownsampleFace(YV, eV, JV, VV), UV = this._DownsampleFace(UV, eV, JV, VV), yV = this._DownsampleFace(yV, eV, JV, VV), QV = this._DownsampleFace(QV, eV, JV, VV), nV = this._DownsampleFace(nV, eV, JV, VV), wV = this._DownsampleFace(wV, eV, JV, VV), ZV = JV
            }
            const vV = {
              size: ZV,
              right: UV,
              left: YV,
              up: yV,
              down: QV,
              front: nV,
              back: wV,
              format: 5,
              type: YV instanceof Float32Array ? 1 : 0,
              gammaSpace: kV
            };
            VV(this.ConvertCubeMapToSphericalPolynomial(vV))
          }))
        }))
      }
      static _AreaElement(VV, eV) {
        return Math.atan2(VV * eV, Math.sqrt(VV * VV + eV * eV + 1))
      }
      static _DownsampleFace(VV, eV, xV, JV) {
        const YV = VV instanceof Float32Array ? VV : Float32Array.from(VV),
          UV = xV * xV * JV,
          yV = new Float32Array(UV),
          pV = eV / xV,
          QV = 1 / (pV * pV);
        for (let wV = 0; wV < xV; wV++) {
          const VV = Math.floor(wV * pV),
            UV = Math.floor((wV + 1) * pV);
          for (let nV = 0; nV < xV; nV++) {
            const ZV = Math.floor(nV * pV),
              vV = Math.floor((nV + 1) * pV),
              rV = (wV * xV + nV) * JV;
            for (let xV = 0; xV < JV; xV++) {
              let pV = 0;
              for (let yV = VV; yV < UV; yV++)
                for (let VV = ZV; VV < vV; VV++) pV += YV[(yV * eV + VV) * JV + xV];
              yV[rV + xV] = pV * QV
            }
          }
        }
        if (VV instanceof Float32Array) return yV;
        const nV = new(0, VV.constructor)(UV);
        for (let wV = 0; wV < UV; wV++) nV[wV] = yV[wV] + .5 | 0;
        return nV
      }
      static ConvertCubeMapToSphericalPolynomial(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const xV = eV > 0 ? this._NearestPow2Floor(eV) : 0;
        if (xV > 0 && VV.size > xV) {
          const eV = 5 === VV.format ? 4 : 3,
            JV = ["right", "left", "up", "down", "front", "back"],
            YV = {};
          for (const UV of JV) YV[UV] = this._DownsampleFace(VV[UV], VV.size, xV, eV);
          VV = {
            ...VV,
            ...YV,
            size: xV
          }
        }
        const JV = new UV.e;
        let QV = 0;
        const nV = 2 / VV.size,
          wV = nV,
          ZV = .5 * nV,
          vV = ZV - 1;
        for (let UV = 0; UV < 6; UV++) {
          const eV = this._FileFaces[UV],
            xV = VV[eV.name];
          let rV = vV;
          const kV = 5 === VV.format ? 4 : 3;
          for (let UV = 0; UV < VV.size; UV++) {
            let bV = vV;
            for (let wV = 0; wV < VV.size; wV++) {
              const vV = eV.worldAxisForFileX.scale(bV).add(eV.worldAxisForFileY.scale(rV)).add(eV.worldAxisForNormal);
              vV.normalize();
              const EV = this._AreaElement(bV - ZV, rV - ZV) - this._AreaElement(bV - ZV, rV + ZV) - this._AreaElement(bV + ZV, rV - ZV) + this._AreaElement(bV + ZV, rV + ZV);
              let BV = xV[UV * VV.size * kV + wV * kV + 0],
                jV = xV[UV * VV.size * kV + wV * kV + 1],
                qV = xV[UV * VV.size * kV + wV * kV + 2];
              isNaN(BV) && (BV = 0), isNaN(jV) && (jV = 0), isNaN(qV) && (qV = 0), 0 === VV.type && (BV /= 255, jV /= 255, qV /= 255), VV.gammaSpace && (BV = Math.pow((0, YV.Clamp)(BV), yV.f), jV = Math.pow((0, YV.Clamp)(jV), yV.f), qV = Math.pow((0, YV.Clamp)(qV), yV.f));
              const tV = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const VV = Math.max(BV, jV, qV);
                if (VV > tV) {
                  const eV = tV / VV;
                  BV *= eV, jV *= eV, qV *= eV
                }
              } else BV = (0, YV.Clamp)(BV, 0, tV), jV = (0, YV.Clamp)(jV, 0, tV), qV = (0, YV.Clamp)(qV, 0, tV);
              const FV = new pV.d(BV, jV, qV);
              JV.addLight(vV, FV, EV), QV += EV, bV += nV
            }
            rV += wV
          }
        }
        const rV = 6 * (4 * Math.PI) / 6 / QV;
        return JV.scaleInPlace(rV), JV.convertIncidentRadianceToIrradiance(), JV.convertIrradianceToLambertianRadiance(), UV.f.FromHarmonics(JV)
      }
    }
    nV._FileFaces = [new QV("right", new JV.o(1, 0, 0), new JV.o(0, 0, -1), new JV.o(0, -1, 0)), new QV("left", new JV.o(-1, 0, 0), new JV.o(0, 0, 1), new JV.o(0, -1, 0)), new QV("up", new JV.o(0, 1, 0), new JV.o(1, 0, 0), new JV.o(0, 0, 1)), new QV("down", new JV.o(0, -1, 0), new JV.o(1, 0, 0), new JV.o(0, 0, -1)), new QV("front", new JV.o(0, 0, 1), new JV.o(1, 0, 0), new JV.o(0, -1, 0)), new QV("back", new JV.o(0, 0, -1), new JV.o(-1, 0, 0), new JV.o(0, -1, 0))], nV.MAX_HDRI_VALUE = 4096, nV.PRESERVE_CLAMPED_COLORS = !1
  },
  44657: (VV, eV, xV) => {
    xV.d(eV, {
      DDSTools: () => kV
    });
    var JV = xV(38303),
      YV = xV(39870),
      UV = xV(44663),
      yV = xV(41323);
    const pV = 131072,
      QV = 131072;

    function nV(VV) {
      return VV.charCodeAt(0) + (VV.charCodeAt(1) << 8) + (VV.charCodeAt(2) << 16) + (VV.charCodeAt(3) << 24)
    }
    const wV = nV("DXT1"),
      ZV = nV("DXT3"),
      vV = nV("DXT5"),
      rV = nV("DX10");
    class kV {
      static GetDDSInfo(VV) {
        const eV = new Int32Array(VV.buffer, VV.byteOffset, 31),
          xV = new Int32Array(VV.buffer, VV.byteOffset, 35);
        let JV = 1;
        eV[2] & pV && (JV = Math.max(1, eV[7]));
        const YV = eV[21],
          UV = YV === rV ? xV[32] : 0;
        let yV = 0;
        switch (YV) {
          case 113:
            yV = 2;
            break;
          case 116:
            yV = 1;
            break;
          case rV:
            if (10 === UV) {
              yV = 2;
              break
            }
            if (2 === UV) {
              yV = 1;
              break
            }
        }
        return {
          width: eV[4],
          height: eV[3],
          mipmapCount: JV,
          isFourCC: 4 === (4 & eV[20]),
          isRGB: 64 === (64 & eV[20]),
          isLuminance: (eV[20] & QV) === QV,
          isCube: 512 === (512 & eV[28]),
          isCompressed: YV === wV || YV === ZV || YV === vV,
          dxgiFormat: UV,
          textureType: yV
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(VV, eV, xV, JV, YV, UV) {
        const pV = new Float32Array(JV),
          QV = new Uint16Array(YV, xV);
        let nV = 0;
        for (let wV = 0; wV < eV; wV++)
          for (let eV = 0; eV < VV; eV++) {
            const xV = 4 * (eV + wV * VV);
            pV[nV] = (0, yV.c)(QV[xV]), pV[nV + 1] = (0, yV.c)(QV[xV + 1]), pV[nV + 2] = (0, yV.c)(QV[xV + 2]), kV.StoreLODInAlphaChannel ? pV[nV + 3] = UV : pV[nV + 3] = (0, yV.c)(QV[xV + 3]), nV += 4
          }
        return pV
      }
      static _GetHalfFloatRGBAArrayBuffer(VV, eV, xV, JV, YV, UV) {
        if (kV.StoreLODInAlphaChannel) {
          const pV = new Uint16Array(JV),
            QV = new Uint16Array(YV, xV);
          let nV = 0;
          for (let xV = 0; xV < eV; xV++)
            for (let eV = 0; eV < VV; eV++) {
              const JV = 4 * (eV + xV * VV);
              pV[nV] = QV[JV], pV[nV + 1] = QV[JV + 1], pV[nV + 2] = QV[JV + 2], pV[nV + 3] = (0, yV.j)(UV), nV += 4
            }
          return pV
        }
        return new Uint16Array(YV, xV, JV)
      }
      static _GetFloatRGBAArrayBuffer(VV, eV, xV, JV, YV, UV) {
        if (kV.StoreLODInAlphaChannel) {
          const yV = new Float32Array(JV),
            pV = new Float32Array(YV, xV);
          let QV = 0;
          for (let xV = 0; xV < eV; xV++)
            for (let eV = 0; eV < VV; eV++) {
              const JV = 4 * (eV + xV * VV);
              yV[QV] = pV[JV], yV[QV + 1] = pV[JV + 1], yV[QV + 2] = pV[JV + 2], yV[QV + 3] = UV, QV += 4
            }
          return yV
        }
        return new Float32Array(YV, xV, JV)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(VV, eV, xV, JV, YV, UV) {
        const pV = new Uint16Array(JV),
          QV = new Float32Array(YV, xV);
        let nV = 0;
        for (let wV = 0; wV < eV; wV++)
          for (let eV = 0; eV < VV; eV++) pV[nV] = (0, yV.j)(QV[nV]), pV[nV + 1] = (0, yV.j)(QV[nV + 1]), pV[nV + 2] = (0, yV.j)(QV[nV + 2]), kV.StoreLODInAlphaChannel ? pV[nV + 3] = (0, yV.j)(UV) : pV[nV + 3] = (0, yV.j)(QV[nV + 3]), nV += 4;
        return pV
      }
      static _GetFloatAsUIntRGBAArrayBuffer(VV, eV, xV, YV, UV, yV) {
        const pV = new Uint8Array(YV),
          QV = new Float32Array(UV, xV);
        let nV = 0;
        for (let wV = 0; wV < eV; wV++)
          for (let eV = 0; eV < VV; eV++) {
            const xV = 4 * (eV + wV * VV);
            pV[nV] = 255 * (0, JV.Clamp)(QV[xV]), pV[nV + 1] = 255 * (0, JV.Clamp)(QV[xV + 1]), pV[nV + 2] = 255 * (0, JV.Clamp)(QV[xV + 2]), kV.StoreLODInAlphaChannel ? pV[nV + 3] = yV : pV[nV + 3] = 255 * (0, JV.Clamp)(QV[xV + 3]), nV += 4
          }
        return pV
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(VV, eV, xV, YV, UV, pV) {
        const QV = new Uint8Array(YV),
          nV = new Uint16Array(UV, xV);
        let wV = 0;
        for (let ZV = 0; ZV < eV; ZV++)
          for (let eV = 0; eV < VV; eV++) {
            const xV = 4 * (eV + ZV * VV);
            QV[wV] = 255 * (0, JV.Clamp)((0, yV.c)(nV[xV])), QV[wV + 1] = 255 * (0, JV.Clamp)((0, yV.c)(nV[xV + 1])), QV[wV + 2] = 255 * (0, JV.Clamp)((0, yV.c)(nV[xV + 2])), kV.StoreLODInAlphaChannel ? QV[wV + 3] = pV : QV[wV + 3] = 255 * (0, JV.Clamp)((0, yV.c)(nV[xV + 3])), wV += 4
          }
        return QV
      }
      static _GetRGBAArrayBuffer(VV, eV, xV, JV, YV, UV, yV, pV, QV) {
        const nV = new Uint8Array(JV),
          wV = new Uint8Array(YV, xV);
        let ZV = 0;
        for (let vV = 0; vV < eV; vV++)
          for (let eV = 0; eV < VV; eV++) {
            const xV = 4 * (eV + vV * VV);
            nV[ZV] = wV[xV + UV], nV[ZV + 1] = wV[xV + yV], nV[ZV + 2] = wV[xV + pV], nV[ZV + 3] = wV[xV + QV], ZV += 4
          }
        return nV
      }
      static _ExtractLongWordOrder(VV) {
        return 0 === VV || 255 === VV || -16777216 === VV ? 0 : 1 + kV._ExtractLongWordOrder(VV >> 8)
      }
      static _GetRGBArrayBuffer(VV, eV, xV, JV, YV, UV, yV, pV) {
        const QV = new Uint8Array(JV),
          nV = new Uint8Array(YV, xV);
        let wV = 0;
        for (let ZV = 0; ZV < eV; ZV++)
          for (let eV = 0; eV < VV; eV++) {
            const xV = 3 * (eV + ZV * VV);
            QV[wV] = nV[xV + UV], QV[wV + 1] = nV[xV + yV], QV[wV + 2] = nV[xV + pV], wV += 3
          }
        return QV
      }
      static _GetLuminanceArrayBuffer(VV, eV, xV, JV, YV) {
        const UV = new Uint8Array(JV),
          yV = new Uint8Array(YV, xV);
        let pV = 0;
        for (let QV = 0; QV < eV; QV++)
          for (let eV = 0; eV < VV; eV++) {
            const xV = eV + QV * VV;
            UV[pV] = yV[xV], pV++
          }
        return UV
      }
      static UploadDDSLevels(VV, eV, xV, JV, yV, QV) {
        let nV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          bV = arguments.length > 7 ? arguments[7] : void 0,
          EV = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          BV = null;
        JV.sphericalPolynomial && (BV = []);
        const jV = !!VV.getCaps().s3tc;
        eV.generateMipMaps = yV;
        const qV = new Int32Array(xV.buffer, xV.byteOffset, 31);
        let tV, FV, TV, PV, AV, NV, XV, MV = 0,
          zV = 0,
          GV = 1;
        if (542327876 !== qV[0]) return void YV.b.Error("Invalid magic number in DDS header");
        if (!JV.isFourCC && !JV.isRGB && !JV.isLuminance) return void YV.b.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (JV.isCompressed && !jV) return void YV.b.Error("Compressed textures are not supported on this platform.");
        let WV = qV[22];
        PV = qV[1] + 4;
        let RV = !1;
        if (JV.isFourCC) switch (tV = qV[21], tV) {
          case wV:
            GV = 8, zV = 33777;
            break;
          case ZV:
            GV = 16, zV = 33778;
            break;
          case vV:
            GV = 16, zV = 33779;
            break;
          case 113:
            RV = !0, WV = 64;
            break;
          case 116:
            RV = !0, WV = 128;
            break;
          case rV: {
            PV += 20;
            let VV = !1;
            switch (JV.dxgiFormat) {
              case 10:
                RV = !0, WV = 64, VV = !0;
                break;
              case 2:
                RV = !0, WV = 128, VV = !0;
                break;
              case 88:
                JV.isRGB = !0, JV.isFourCC = !1, WV = 32, VV = !0
            }
            if (VV) break
          }
          default:
            return void YV.b.Error(["Unsupported FourCC code:", (gV = tV, String.fromCharCode(255 & gV, gV >> 8 & 255, gV >> 16 & 255, gV >> 24 & 255))])
        }
        var gV;
        const DV = kV._ExtractLongWordOrder(qV[23]),
          iV = kV._ExtractLongWordOrder(qV[24]),
          CV = kV._ExtractLongWordOrder(qV[25]),
          aV = kV._ExtractLongWordOrder(qV[26]);
        RV && (zV = VV._getRGBABufferInternalSizedFormat(JV.textureType)), NV = 1, qV[2] & pV && !1 !== yV && (NV = Math.max(1, qV[7]));
        const oV = bV || 0,
          cV = VV.getCaps();
        for (let YV = oV; YV < QV; YV++) {
          for (FV = qV[4], TV = qV[3], XV = 0; XV < NV; ++XV) {
            if (-1 === nV || nV === XV) {
              const UV = -1 === nV ? XV : 0;
              if (!JV.isCompressed && JV.isFourCC) {
                eV.format = 5, MV = FV * TV * 4;
                let JV = null;
                if (VV._badOS || VV._badDesktopOS || !cV.textureHalfFloat && !cV.textureFloat) 128 === WV ? (JV = kV._GetFloatAsUIntRGBAArrayBuffer(FV, TV, xV.byteOffset + PV, MV, xV.buffer, UV), BV && 0 == UV && BV.push(kV._GetFloatRGBAArrayBuffer(FV, TV, xV.byteOffset + PV, MV, xV.buffer, UV))) : 64 === WV && (JV = kV._GetHalfFloatAsUIntRGBAArrayBuffer(FV, TV, xV.byteOffset + PV, MV, xV.buffer, UV), BV && 0 == UV && BV.push(kV._GetHalfFloatAsFloatRGBAArrayBuffer(FV, TV, xV.byteOffset + PV, MV, xV.buffer, UV))), eV.type = 0;
                else {
                  const VV = cV.textureFloat && (EV && cV.textureFloatLinearFiltering || !EV),
                    YV = cV.textureHalfFloat && (EV && cV.textureHalfFloatLinearFiltering || !EV),
                    yV = (128 === WV || 64 === WV && !YV) && VV ? 1 : (64 === WV || 128 === WV && !VV) && YV ? 2 : 0;
                  let pV, QV = null;
                  if (128 === WV) switch (yV) {
                    case 1:
                      pV = kV._GetFloatRGBAArrayBuffer, QV = null;
                      break;
                    case 2:
                      pV = kV._GetFloatAsHalfFloatRGBAArrayBuffer, QV = kV._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      pV = kV._GetFloatAsUIntRGBAArrayBuffer, QV = kV._GetFloatRGBAArrayBuffer
                  } else switch (yV) {
                    case 1:
                      pV = kV._GetHalfFloatAsFloatRGBAArrayBuffer, QV = null;
                      break;
                    case 2:
                      pV = kV._GetHalfFloatRGBAArrayBuffer, QV = kV._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      pV = kV._GetHalfFloatAsUIntRGBAArrayBuffer, QV = kV._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  eV.type = yV, JV = pV(FV, TV, xV.byteOffset + PV, MV, xV.buffer, UV), BV && 0 == UV && BV.push(QV ? QV(FV, TV, xV.byteOffset + PV, MV, xV.buffer, UV) : JV)
                }
                JV && VV._uploadDataToTextureDirectly(eV, JV, YV, UV)
              } else if (JV.isRGB) eV.type = 0, 24 === WV ? (eV.format = 4, MV = FV * TV * 3, AV = kV._GetRGBArrayBuffer(FV, TV, xV.byteOffset + PV, MV, xV.buffer, DV, iV, CV), VV._uploadDataToTextureDirectly(eV, AV, YV, UV)) : (eV.format = 5, MV = FV * TV * 4, AV = kV._GetRGBAArrayBuffer(FV, TV, xV.byteOffset + PV, MV, xV.buffer, DV, iV, CV, aV), VV._uploadDataToTextureDirectly(eV, AV, YV, UV));
              else if (JV.isLuminance) {
                const JV = VV._getUnpackAlignement(),
                  yV = FV;
                MV = Math.floor((FV + JV - 1) / JV) * JV * (TV - 1) + yV, AV = kV._GetLuminanceArrayBuffer(FV, TV, xV.byteOffset + PV, MV, xV.buffer), eV.format = 1, eV.type = 0, VV._uploadDataToTextureDirectly(eV, AV, YV, UV)
              } else MV = Math.max(4, FV) / 4 * Math.max(4, TV) / 4 * GV, AV = new Uint8Array(xV.buffer, xV.byteOffset + PV, MV), eV.type = 0, VV._uploadCompressedDataToTextureDirectly(eV, zV, FV, TV, AV, YV, UV)
            }
            PV += WV ? FV * TV * (WV / 8) : MV, FV *= .5, TV *= .5, FV = Math.max(1, FV), TV = Math.max(1, TV)
          }
          if (void 0 !== bV) break
        }
        BV && BV.length > 0 ? JV.sphericalPolynomial = UV.b.ConvertCubeMapToSphericalPolynomial({
          size: qV[4],
          right: BV[0],
          left: BV[1],
          up: BV[2],
          down: BV[3],
          front: BV[4],
          back: BV[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : JV.sphericalPolynomial = void 0
      }
    }
    kV.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);