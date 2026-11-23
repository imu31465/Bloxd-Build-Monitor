export const id = 307;
export const ids = [306, 307];
export const modules = {
  41600: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      _DDSTextureLoader: () => bC
    });
    var QC = ZC(39800),
      wC = ZC(41585);
    class bC {
      constructor() {
        this.supportCascades = !0
      }
      loadCubeData(CC, zC, ZC, bC) {
        const nC = zC.mg();
        let fC, oC = !1,
          qC = 1e3;
        if (Array.isArray(CC))
          for (let QC = 0; QC < CC.length; QC++) {
            const ZC = CC[QC];
            fC = wC.DDSTools.GetDDSInfo(ZC), zC.width = fC.width, zC.height = fC.height, oC = (fC.isRGB || fC.isLuminance || fC.mipmapCount > 1) && zC.generateMipMaps, nC._unpackFlipY(fC.isCompressed), wC.DDSTools.UploadDDSLevels(nC, zC, ZC, fC, oC, 6, -1, QC), fC.isFourCC || 1 !== fC.mipmapCount ? qC = fC.mipmapCount - 1 : nC.generateMipMapsForCubemap(zC)
          } else {
            const bC = CC;
            fC = wC.DDSTools.GetDDSInfo(bC), zC.width = fC.width, zC.height = fC.height, ZC && (fC.sphericalPolynomial = new QC.g), oC = (fC.isRGB || fC.isLuminance || fC.mipmapCount > 1) && zC.generateMipMaps, nC._unpackFlipY(fC.isCompressed), wC.DDSTools.UploadDDSLevels(nC, zC, bC, fC, oC, 6), fC.isFourCC || 1 !== fC.mipmapCount ? qC = fC.mipmapCount - 1 : nC.generateMipMapsForCubemap(zC, !1)
          }
        nC._setCubeMapTextureParams(zC, oC, qC), zC.isReady = !0, zC.onLoadedObservable.notifyObservers(zC), zC.onLoadedObservable.clear(), bC && bC({
          isDDS: !0,
          width: zC.width,
          info: fC,
          data: CC,
          texture: zC
        })
      }
      loadData(CC, zC, ZC) {
        const QC = wC.DDSTools.GetDDSInfo(CC),
          bC = (QC.isRGB || QC.isLuminance || QC.mipmapCount > 1) && zC.generateMipMaps && Math.max(QC.width, QC.height) >> QC.mipmapCount - 1 === 1;
        ZC(QC.width, QC.height, bC, QC.isFourCC, (() => {
          wC.DDSTools.UploadDDSLevels(zC.mg(), zC, CC, QC, bC, 1)
        }))
      }
    }
  },
  41590: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => qC
    });
    var QC = ZC(36963),
      wC = ZC(36991),
      bC = ZC(39800),
      nC = ZC(36968),
      fC = ZC(37142);
    class oC {
      constructor(CC, zC, ZC, QC) {
        this.name = CC, this.worldAxisForNormal = zC, this.worldAxisForFileX = ZC, this.worldAxisForFileY = QC
      }
    }
    class qC {
      static _NearestPow2Floor(CC) {
        return CC <= 1 ? 1 : 1 << Math.floor(Math.log2(CC))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(CC) {
        if (!CC.isCube) return null;
        CC.Km()?.mg().flushFramebuffer();
        const zC = CC.getSize().width,
          ZC = CC._sphericalPolynomialTargetSize,
          QC = ZC > 0 ? this._NearestPow2Floor(ZC) : 0,
          wC = !CC.noMipmap && !0 === CC._texture?.generateMipMaps,
          bC = QC > 0 && QC < zC && wC,
          nC = bC ? Math.max(0, Math.round(Math.log2(zC / QC))) : 0,
          fC = bC ? Math.max(1, Math.floor(zC / Math.pow(2, nC))) : zC,
          oC = CC.readPixels(0, nC, void 0, !1),
          qC = CC.readPixels(1, nC, void 0, !1);
        let FC, WC;
        CC.isRenderTarget ? (FC = CC.readPixels(3, nC, void 0, !1), WC = CC.readPixels(2, nC, void 0, !1)) : (FC = CC.readPixels(2, nC, void 0, !1), WC = CC.readPixels(3, nC, void 0, !1));
        const NC = CC.readPixels(4, nC, void 0, !1),
          MC = CC.readPixels(5, nC, void 0, !1),
          gC = CC.gammaSpace,
          SC = QC > 0 && QC < zC && !bC;
        return new Promise((CC => {
          Promise.all([qC, oC, FC, WC, NC, MC]).then((ZC => {
            let [wC, bC, nC, oC, qC, FC] = ZC, WC = fC;
            if (SC) {
              const CC = 4;
              wC = this._DownsampleFace(wC, zC, QC, CC), bC = this._DownsampleFace(bC, zC, QC, CC), nC = this._DownsampleFace(nC, zC, QC, CC), oC = this._DownsampleFace(oC, zC, QC, CC), qC = this._DownsampleFace(qC, zC, QC, CC), FC = this._DownsampleFace(FC, zC, QC, CC), WC = QC
            }
            const NC = {
              size: WC,
              right: bC,
              left: wC,
              up: nC,
              down: oC,
              front: qC,
              back: FC,
              format: 5,
              type: wC instanceof Float32Array ? 1 : 0,
              gammaSpace: gC
            };
            CC(this.ConvertCubeMapToSphericalPolynomial(NC))
          }))
        }))
      }
      static _AreaElement(CC, zC) {
        return Math.atan2(CC * zC, Math.sqrt(CC * CC + zC * zC + 1))
      }
      static _DownsampleFace(CC, zC, ZC, QC) {
        const wC = CC instanceof Float32Array ? CC : Float32Array.from(CC),
          bC = ZC * ZC * QC,
          nC = new Float32Array(bC),
          fC = zC / ZC,
          oC = 1 / (fC * fC);
        for (let FC = 0; FC < ZC; FC++) {
          const CC = Math.floor(FC * fC),
            bC = Math.floor((FC + 1) * fC);
          for (let qC = 0; qC < ZC; qC++) {
            const WC = Math.floor(qC * fC),
              NC = Math.floor((qC + 1) * fC),
              MC = (FC * ZC + qC) * QC;
            for (let ZC = 0; ZC < QC; ZC++) {
              let fC = 0;
              for (let nC = CC; nC < bC; nC++)
                for (let CC = WC; CC < NC; CC++) fC += wC[(nC * zC + CC) * QC + ZC];
              nC[MC + ZC] = fC * oC
            }
          }
        }
        if (CC instanceof Float32Array) return nC;
        const qC = new(0, CC.constructor)(bC);
        for (let FC = 0; FC < bC; FC++) qC[FC] = nC[FC] + .5 | 0;
        return qC
      }
      static ConvertCubeMapToSphericalPolynomial(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZC = zC > 0 ? this._NearestPow2Floor(zC) : 0;
        if (ZC > 0 && CC.size > ZC) {
          const zC = 5 === CC.format ? 4 : 3,
            QC = ["right", "left", "up", "down", "front", "back"],
            wC = {};
          for (const bC of QC) wC[bC] = this._DownsampleFace(CC[bC], CC.size, ZC, zC);
          CC = {
            ...CC,
            ...wC,
            size: ZC
          }
        }
        const QC = new bC.c;
        let oC = 0;
        const qC = 2 / CC.size,
          FC = qC,
          WC = .5 * qC,
          NC = WC - 1;
        for (let bC = 0; bC < 6; bC++) {
          const zC = this._FileFaces[bC],
            ZC = CC[zC.name];
          let MC = NC;
          const gC = 5 === CC.format ? 4 : 3;
          for (let bC = 0; bC < CC.size; bC++) {
            let SC = NC;
            for (let FC = 0; FC < CC.size; FC++) {
              const NC = zC.worldAxisForFileX.scale(SC).add(zC.worldAxisForFileY.scale(MC)).add(zC.worldAxisForNormal);
              NC.normalize();
              const pC = this._AreaElement(SC - WC, MC - WC) - this._AreaElement(SC - WC, MC + WC) - this._AreaElement(SC + WC, MC - WC) + this._AreaElement(SC + WC, MC + WC);
              let PC = ZC[bC * CC.size * gC + FC * gC + 0],
                GC = ZC[bC * CC.size * gC + FC * gC + 1],
                RC = ZC[bC * CC.size * gC + FC * gC + 2];
              isNaN(PC) && (PC = 0), isNaN(GC) && (GC = 0), isNaN(RC) && (RC = 0), 0 === CC.type && (PC /= 255, GC /= 255, RC /= 255), CC.gammaSpace && (PC = Math.pow((0, wC.Clamp)(PC), nC.i), GC = Math.pow((0, wC.Clamp)(GC), nC.i), RC = Math.pow((0, wC.Clamp)(RC), nC.i));
              const AC = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const CC = Math.max(PC, GC, RC);
                if (CC > AC) {
                  const zC = AC / CC;
                  PC *= zC, GC *= zC, RC *= zC
                }
              } else PC = (0, wC.Clamp)(PC, 0, AC), GC = (0, wC.Clamp)(GC, 0, AC), RC = (0, wC.Clamp)(RC, 0, AC);
              const xC = new fC.e(PC, GC, RC);
              QC.addLight(NC, xC, pC), oC += pC, SC += qC
            }
            MC += FC
          }
        }
        const MC = 6 * (4 * Math.PI) / 6 / oC;
        return QC.scaleInPlace(MC), QC.convertIncidentRadianceToIrradiance(), QC.convertIrradianceToLambertianRadiance(), bC.g.FromHarmonics(QC)
      }
    }
    qC._FileFaces = [new oC("right", new QC.r(1, 0, 0), new QC.r(0, 0, -1), new QC.r(0, -1, 0)), new oC("left", new QC.r(-1, 0, 0), new QC.r(0, 0, 1), new QC.r(0, -1, 0)), new oC("up", new QC.r(0, 1, 0), new QC.r(1, 0, 0), new QC.r(0, 0, 1)), new oC("down", new QC.r(0, -1, 0), new QC.r(1, 0, 0), new QC.r(0, 0, -1)), new oC("front", new QC.r(0, 0, 1), new QC.r(1, 0, 0), new QC.r(0, -1, 0)), new oC("back", new QC.r(0, 0, -1), new QC.r(-1, 0, 0), new QC.r(0, -1, 0))], qC.MAX_HDRI_VALUE = 4096, qC.PRESERVE_CLAMPED_COLORS = !1
  },
  41585: (CC, zC, ZC) => {
    ZC.d(zC, {
      DDSTools: () => gC
    });
    var QC = ZC(36991),
      wC = ZC(38507),
      bC = ZC(41590),
      nC = ZC(39889);
    const fC = 131072,
      oC = 131072;

    function qC(CC) {
      return CC.charCodeAt(0) + (CC.charCodeAt(1) << 8) + (CC.charCodeAt(2) << 16) + (CC.charCodeAt(3) << 24)
    }
    const FC = qC("DXT1"),
      WC = qC("DXT3"),
      NC = qC("DXT5"),
      MC = qC("DX10");
    class gC {
      static GetDDSInfo(CC) {
        const zC = new Int32Array(CC.buffer, CC.byteOffset, 31),
          ZC = new Int32Array(CC.buffer, CC.byteOffset, 35);
        let QC = 1;
        zC[2] & fC && (QC = Math.max(1, zC[7]));
        const wC = zC[21],
          bC = wC === MC ? ZC[32] : 0;
        let nC = 0;
        switch (wC) {
          case 113:
            nC = 2;
            break;
          case 116:
            nC = 1;
            break;
          case MC:
            if (10 === bC) {
              nC = 2;
              break
            }
            if (2 === bC) {
              nC = 1;
              break
            }
        }
        return {
          width: zC[4],
          height: zC[3],
          mipmapCount: QC,
          isFourCC: 4 === (4 & zC[20]),
          isRGB: 64 === (64 & zC[20]),
          isLuminance: (zC[20] & oC) === oC,
          isCube: 512 === (512 & zC[28]),
          isCompressed: wC === FC || wC === WC || wC === NC,
          dxgiFormat: bC,
          textureType: nC
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(CC, zC, ZC, QC, wC, bC) {
        const fC = new Float32Array(QC),
          oC = new Uint16Array(wC, ZC);
        let qC = 0;
        for (let FC = 0; FC < zC; FC++)
          for (let zC = 0; zC < CC; zC++) {
            const ZC = 4 * (zC + FC * CC);
            fC[qC] = (0, nC.e)(oC[ZC]), fC[qC + 1] = (0, nC.e)(oC[ZC + 1]), fC[qC + 2] = (0, nC.e)(oC[ZC + 2]), gC.StoreLODInAlphaChannel ? fC[qC + 3] = bC : fC[qC + 3] = (0, nC.e)(oC[ZC + 3]), qC += 4
          }
        return fC
      }
      static _GetHalfFloatRGBAArrayBuffer(CC, zC, ZC, QC, wC, bC) {
        if (gC.StoreLODInAlphaChannel) {
          const fC = new Uint16Array(QC),
            oC = new Uint16Array(wC, ZC);
          let qC = 0;
          for (let ZC = 0; ZC < zC; ZC++)
            for (let zC = 0; zC < CC; zC++) {
              const QC = 4 * (zC + ZC * CC);
              fC[qC] = oC[QC], fC[qC + 1] = oC[QC + 1], fC[qC + 2] = oC[QC + 2], fC[qC + 3] = (0, nC.k)(bC), qC += 4
            }
          return fC
        }
        return new Uint16Array(wC, ZC, QC)
      }
      static _GetFloatRGBAArrayBuffer(CC, zC, ZC, QC, wC, bC) {
        if (gC.StoreLODInAlphaChannel) {
          const nC = new Float32Array(QC),
            fC = new Float32Array(wC, ZC);
          let oC = 0;
          for (let ZC = 0; ZC < zC; ZC++)
            for (let zC = 0; zC < CC; zC++) {
              const QC = 4 * (zC + ZC * CC);
              nC[oC] = fC[QC], nC[oC + 1] = fC[QC + 1], nC[oC + 2] = fC[QC + 2], nC[oC + 3] = bC, oC += 4
            }
          return nC
        }
        return new Float32Array(wC, ZC, QC)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(CC, zC, ZC, QC, wC, bC) {
        const fC = new Uint16Array(QC),
          oC = new Float32Array(wC, ZC);
        let qC = 0;
        for (let FC = 0; FC < zC; FC++)
          for (let zC = 0; zC < CC; zC++) fC[qC] = (0, nC.k)(oC[qC]), fC[qC + 1] = (0, nC.k)(oC[qC + 1]), fC[qC + 2] = (0, nC.k)(oC[qC + 2]), gC.StoreLODInAlphaChannel ? fC[qC + 3] = (0, nC.k)(bC) : fC[qC + 3] = (0, nC.k)(oC[qC + 3]), qC += 4;
        return fC
      }
      static _GetFloatAsUIntRGBAArrayBuffer(CC, zC, ZC, wC, bC, nC) {
        const fC = new Uint8Array(wC),
          oC = new Float32Array(bC, ZC);
        let qC = 0;
        for (let FC = 0; FC < zC; FC++)
          for (let zC = 0; zC < CC; zC++) {
            const ZC = 4 * (zC + FC * CC);
            fC[qC] = 255 * (0, QC.Clamp)(oC[ZC]), fC[qC + 1] = 255 * (0, QC.Clamp)(oC[ZC + 1]), fC[qC + 2] = 255 * (0, QC.Clamp)(oC[ZC + 2]), gC.StoreLODInAlphaChannel ? fC[qC + 3] = nC : fC[qC + 3] = 255 * (0, QC.Clamp)(oC[ZC + 3]), qC += 4
          }
        return fC
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(CC, zC, ZC, wC, bC, fC) {
        const oC = new Uint8Array(wC),
          qC = new Uint16Array(bC, ZC);
        let FC = 0;
        for (let WC = 0; WC < zC; WC++)
          for (let zC = 0; zC < CC; zC++) {
            const ZC = 4 * (zC + WC * CC);
            oC[FC] = 255 * (0, QC.Clamp)((0, nC.e)(qC[ZC])), oC[FC + 1] = 255 * (0, QC.Clamp)((0, nC.e)(qC[ZC + 1])), oC[FC + 2] = 255 * (0, QC.Clamp)((0, nC.e)(qC[ZC + 2])), gC.StoreLODInAlphaChannel ? oC[FC + 3] = fC : oC[FC + 3] = 255 * (0, QC.Clamp)((0, nC.e)(qC[ZC + 3])), FC += 4
          }
        return oC
      }
      static _GetRGBAArrayBuffer(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
        const qC = new Uint8Array(QC),
          FC = new Uint8Array(wC, ZC);
        let WC = 0;
        for (let NC = 0; NC < zC; NC++)
          for (let zC = 0; zC < CC; zC++) {
            const ZC = 4 * (zC + NC * CC);
            qC[WC] = FC[ZC + bC], qC[WC + 1] = FC[ZC + nC], qC[WC + 2] = FC[ZC + fC], qC[WC + 3] = FC[ZC + oC], WC += 4
          }
        return qC
      }
      static _ExtractLongWordOrder(CC) {
        return 0 === CC || 255 === CC || -16777216 === CC ? 0 : 1 + gC._ExtractLongWordOrder(CC >> 8)
      }
      static _GetRGBArrayBuffer(CC, zC, ZC, QC, wC, bC, nC, fC) {
        const oC = new Uint8Array(QC),
          qC = new Uint8Array(wC, ZC);
        let FC = 0;
        for (let WC = 0; WC < zC; WC++)
          for (let zC = 0; zC < CC; zC++) {
            const ZC = 3 * (zC + WC * CC);
            oC[FC] = qC[ZC + bC], oC[FC + 1] = qC[ZC + nC], oC[FC + 2] = qC[ZC + fC], FC += 3
          }
        return oC
      }
      static _GetLuminanceArrayBuffer(CC, zC, ZC, QC, wC) {
        const bC = new Uint8Array(QC),
          nC = new Uint8Array(wC, ZC);
        let fC = 0;
        for (let oC = 0; oC < zC; oC++)
          for (let zC = 0; zC < CC; zC++) {
            const ZC = zC + oC * CC;
            bC[fC] = nC[ZC], fC++
          }
        return bC
      }
      static UploadDDSLevels(CC, zC, ZC, QC, nC, oC) {
        let qC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          SC = arguments.length > 7 ? arguments[7] : void 0,
          pC = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          PC = null;
        QC.sphericalPolynomial && (PC = []);
        const GC = !!CC.getCaps().s3tc;
        zC.generateMipMaps = nC;
        const RC = new Int32Array(ZC.buffer, ZC.byteOffset, 31);
        let AC, xC, JC, IC, iC, vC, eC, hC = 0,
          KC = 0,
          YC = 1;
        if (542327876 !== RC[0]) return void wC.c.Error("Invalid magic number in DDS header");
        if (!QC.isFourCC && !QC.isRGB && !QC.isLuminance) return void wC.c.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (QC.isCompressed && !GC) return void wC.c.Error("Compressed textures are not supported on this platform.");
        let dC = RC[22];
        IC = RC[1] + 4;
        let mC = !1;
        if (QC.isFourCC) switch (AC = RC[21], AC) {
          case FC:
            YC = 8, KC = 33777;
            break;
          case WC:
            YC = 16, KC = 33778;
            break;
          case NC:
            YC = 16, KC = 33779;
            break;
          case 113:
            mC = !0, dC = 64;
            break;
          case 116:
            mC = !0, dC = 128;
            break;
          case MC: {
            IC += 20;
            let CC = !1;
            switch (QC.dxgiFormat) {
              case 10:
                mC = !0, dC = 64, CC = !0;
                break;
              case 2:
                mC = !0, dC = 128, CC = !0;
                break;
              case 88:
                QC.isRGB = !0, QC.isFourCC = !1, dC = 32, CC = !0
            }
            if (CC) break
          }
          default:
            return void wC.c.Error(["Unsupported FourCC code:", (HC = AC, String.fromCharCode(255 & HC, HC >> 8 & 255, HC >> 16 & 255, HC >> 24 & 255))])
        }
        var HC;
        const EC = gC._ExtractLongWordOrder(RC[23]),
          lC = gC._ExtractLongWordOrder(RC[24]),
          XC = gC._ExtractLongWordOrder(RC[25]),
          cC = gC._ExtractLongWordOrder(RC[26]);
        mC && (KC = CC._getRGBABufferInternalSizedFormat(QC.textureType)), vC = 1, RC[2] & fC && !1 !== nC && (vC = Math.max(1, RC[7]));
        const uC = SC || 0,
          rC = CC.getCaps();
        for (let wC = uC; wC < oC; wC++) {
          for (xC = RC[4], JC = RC[3], eC = 0; eC < vC; ++eC) {
            if (-1 === qC || qC === eC) {
              const bC = -1 === qC ? eC : 0;
              if (!QC.isCompressed && QC.isFourCC) {
                zC.format = 5, hC = xC * JC * 4;
                let QC = null;
                if (CC._badOS || CC._badDesktopOS || !rC.textureHalfFloat && !rC.textureFloat) 128 === dC ? (QC = gC._GetFloatAsUIntRGBAArrayBuffer(xC, JC, ZC.byteOffset + IC, hC, ZC.buffer, bC), PC && 0 == bC && PC.push(gC._GetFloatRGBAArrayBuffer(xC, JC, ZC.byteOffset + IC, hC, ZC.buffer, bC))) : 64 === dC && (QC = gC._GetHalfFloatAsUIntRGBAArrayBuffer(xC, JC, ZC.byteOffset + IC, hC, ZC.buffer, bC), PC && 0 == bC && PC.push(gC._GetHalfFloatAsFloatRGBAArrayBuffer(xC, JC, ZC.byteOffset + IC, hC, ZC.buffer, bC))), zC.type = 0;
                else {
                  const CC = rC.textureFloat && (pC && rC.textureFloatLinearFiltering || !pC),
                    wC = rC.textureHalfFloat && (pC && rC.textureHalfFloatLinearFiltering || !pC),
                    nC = (128 === dC || 64 === dC && !wC) && CC ? 1 : (64 === dC || 128 === dC && !CC) && wC ? 2 : 0;
                  let fC, oC = null;
                  if (128 === dC) switch (nC) {
                    case 1:
                      fC = gC._GetFloatRGBAArrayBuffer, oC = null;
                      break;
                    case 2:
                      fC = gC._GetFloatAsHalfFloatRGBAArrayBuffer, oC = gC._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      fC = gC._GetFloatAsUIntRGBAArrayBuffer, oC = gC._GetFloatRGBAArrayBuffer
                  } else switch (nC) {
                    case 1:
                      fC = gC._GetHalfFloatAsFloatRGBAArrayBuffer, oC = null;
                      break;
                    case 2:
                      fC = gC._GetHalfFloatRGBAArrayBuffer, oC = gC._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      fC = gC._GetHalfFloatAsUIntRGBAArrayBuffer, oC = gC._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  zC.type = nC, QC = fC(xC, JC, ZC.byteOffset + IC, hC, ZC.buffer, bC), PC && 0 == bC && PC.push(oC ? oC(xC, JC, ZC.byteOffset + IC, hC, ZC.buffer, bC) : QC)
                }
                QC && CC._uploadDataToTextureDirectly(zC, QC, wC, bC)
              } else if (QC.isRGB) zC.type = 0, 24 === dC ? (zC.format = 4, hC = xC * JC * 3, iC = gC._GetRGBArrayBuffer(xC, JC, ZC.byteOffset + IC, hC, ZC.buffer, EC, lC, XC), CC._uploadDataToTextureDirectly(zC, iC, wC, bC)) : (zC.format = 5, hC = xC * JC * 4, iC = gC._GetRGBAArrayBuffer(xC, JC, ZC.byteOffset + IC, hC, ZC.buffer, EC, lC, XC, cC), CC._uploadDataToTextureDirectly(zC, iC, wC, bC));
              else if (QC.isLuminance) {
                const QC = CC._getUnpackAlignement(),
                  nC = xC;
                hC = Math.floor((xC + QC - 1) / QC) * QC * (JC - 1) + nC, iC = gC._GetLuminanceArrayBuffer(xC, JC, ZC.byteOffset + IC, hC, ZC.buffer), zC.format = 1, zC.type = 0, CC._uploadDataToTextureDirectly(zC, iC, wC, bC)
              } else hC = Math.max(4, xC) / 4 * Math.max(4, JC) / 4 * YC, iC = new Uint8Array(ZC.buffer, ZC.byteOffset + IC, hC), zC.type = 0, CC._uploadCompressedDataToTextureDirectly(zC, KC, xC, JC, iC, wC, bC)
            }
            IC += dC ? xC * JC * (dC / 8) : hC, xC *= .5, JC *= .5, xC = Math.max(1, xC), JC = Math.max(1, JC)
          }
          if (void 0 !== SC) break
        }
        PC && PC.length > 0 ? QC.sphericalPolynomial = bC.b.ConvertCubeMapToSphericalPolynomial({
          size: RC[4],
          right: PC[0],
          left: PC[1],
          up: PC[2],
          down: PC[3],
          front: PC[4],
          back: PC[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : QC.sphericalPolynomial = void 0
      }
    }
    gC.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);