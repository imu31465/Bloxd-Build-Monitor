export const id = 312;
export const ids = [311, 312];
export const modules = {
  41921: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      _DDSTextureLoader: () => MT
    });
    var WT = mT(40080),
      zT = mT(41905);
    class MT {
      constructor() {
        this.supportCascades = !0
      }
      loadCubeData(TT, UT, mT, MT) {
        const gT = UT.eB();
        let nT, HT = !1,
          kT = 1e3;
        if (Array.isArray(TT))
          for (let WT = 0; WT < TT.length; WT++) {
            const mT = TT[WT];
            nT = zT.DDSTools.GetDDSInfo(mT), UT.width = nT.width, UT.height = nT.height, HT = (nT.isRGB || nT.isLuminance || nT.mipmapCount > 1) && UT.generateMipMaps, gT._unpackFlipY(nT.isCompressed), zT.DDSTools.UploadDDSLevels(gT, UT, mT, nT, HT, 6, -1, WT), nT.isFourCC || 1 !== nT.mipmapCount ? kT = nT.mipmapCount - 1 : gT.generateMipMapsForCubemap(UT)
          } else {
            const MT = TT;
            nT = zT.DDSTools.GetDDSInfo(MT), UT.width = nT.width, UT.height = nT.height, mT && (nT.sphericalPolynomial = new WT.c), HT = (nT.isRGB || nT.isLuminance || nT.mipmapCount > 1) && UT.generateMipMaps, gT._unpackFlipY(nT.isCompressed), zT.DDSTools.UploadDDSLevels(gT, UT, MT, nT, HT, 6), nT.isFourCC || 1 !== nT.mipmapCount ? kT = nT.mipmapCount - 1 : gT.generateMipMapsForCubemap(UT, !1)
          }
        gT._setCubeMapTextureParams(UT, HT, kT), UT.isReady = !0, UT.onLoadedObservable.notifyObservers(UT), UT.onLoadedObservable.clear(), MT && MT({
          isDDS: !0,
          width: UT.width,
          info: nT,
          data: TT,
          texture: UT
        })
      }
      loadData(TT, UT, mT) {
        const WT = zT.DDSTools.GetDDSInfo(TT),
          MT = (WT.isRGB || WT.isLuminance || WT.mipmapCount > 1) && UT.generateMipMaps && Math.max(WT.width, WT.height) >> WT.mipmapCount - 1 === 1;
        mT(WT.width, WT.height, MT, WT.isFourCC, (() => {
          zT.DDSTools.UploadDDSLevels(UT.eB(), UT, TT, WT, MT, 1)
        }))
      }
    }
  },
  41908: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => kT
    });
    var WT = mT(37188),
      zT = mT(37226),
      MT = mT(40080),
      gT = mT(37196),
      nT = mT(37367);
    class HT {
      constructor(TT, UT, mT, WT) {
        this.name = TT, this.worldAxisForNormal = UT, this.worldAxisForFileX = mT, this.worldAxisForFileY = WT
      }
    }
    class kT {
      static _NearestPow2Floor(TT) {
        return TT <= 1 ? 1 : 1 << Math.floor(Math.log2(TT))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(TT) {
        if (!TT.isCube) return null;
        TT.KF()?.eB().flushFramebuffer();
        const UT = TT.getSize().width,
          mT = TT._sphericalPolynomialTargetSize,
          WT = mT > 0 ? this._NearestPow2Floor(mT) : 0,
          zT = !TT.noMipmap && !0 === TT._texture?.generateMipMaps,
          MT = WT > 0 && WT < UT && zT,
          gT = MT ? Math.max(0, Math.round(Math.log2(UT / WT))) : 0,
          nT = MT ? Math.max(1, Math.floor(UT / Math.pow(2, gT))) : UT,
          HT = TT.readPixels(0, gT, void 0, !1),
          kT = TT.readPixels(1, gT, void 0, !1);
        let jT, lT;
        TT.isRenderTarget ? (jT = TT.readPixels(3, gT, void 0, !1), lT = TT.readPixels(2, gT, void 0, !1)) : (jT = TT.readPixels(2, gT, void 0, !1), lT = TT.readPixels(3, gT, void 0, !1));
        const LT = TT.readPixels(4, gT, void 0, !1),
          pT = TT.readPixels(5, gT, void 0, !1),
          BT = TT.gammaSpace,
          ZT = WT > 0 && WT < UT && !MT;
        return new Promise((TT => {
          Promise.all([kT, HT, jT, lT, LT, pT]).then((mT => {
            let [zT, MT, gT, HT, kT, jT] = mT, lT = nT;
            if (ZT) {
              const TT = 4;
              zT = this._DownsampleFace(zT, UT, WT, TT), MT = this._DownsampleFace(MT, UT, WT, TT), gT = this._DownsampleFace(gT, UT, WT, TT), HT = this._DownsampleFace(HT, UT, WT, TT), kT = this._DownsampleFace(kT, UT, WT, TT), jT = this._DownsampleFace(jT, UT, WT, TT), lT = WT
            }
            const LT = {
              size: lT,
              right: MT,
              left: zT,
              up: gT,
              down: HT,
              front: kT,
              back: jT,
              format: 5,
              type: zT instanceof Float32Array ? 1 : 0,
              gammaSpace: BT
            };
            TT(this.ConvertCubeMapToSphericalPolynomial(LT))
          }))
        }))
      }
      static _AreaElement(TT, UT) {
        return Math.atan2(TT * UT, Math.sqrt(TT * TT + UT * UT + 1))
      }
      static _DownsampleFace(TT, UT, mT, WT) {
        const zT = TT instanceof Float32Array ? TT : Float32Array.from(TT),
          MT = mT * mT * WT,
          gT = new Float32Array(MT),
          nT = UT / mT,
          HT = 1 / (nT * nT);
        for (let jT = 0; jT < mT; jT++) {
          const TT = Math.floor(jT * nT),
            MT = Math.floor((jT + 1) * nT);
          for (let kT = 0; kT < mT; kT++) {
            const lT = Math.floor(kT * nT),
              LT = Math.floor((kT + 1) * nT),
              pT = (jT * mT + kT) * WT;
            for (let mT = 0; mT < WT; mT++) {
              let nT = 0;
              for (let gT = TT; gT < MT; gT++)
                for (let TT = lT; TT < LT; TT++) nT += zT[(gT * UT + TT) * WT + mT];
              gT[pT + mT] = nT * HT
            }
          }
        }
        if (TT instanceof Float32Array) return gT;
        const kT = new(0, TT.constructor)(MT);
        for (let jT = 0; jT < MT; jT++) kT[jT] = gT[jT] + .5 | 0;
        return kT
      }
      static ConvertCubeMapToSphericalPolynomial(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const mT = UT > 0 ? this._NearestPow2Floor(UT) : 0;
        if (mT > 0 && TT.size > mT) {
          const UT = 5 === TT.format ? 4 : 3,
            WT = ["right", "left", "up", "down", "front", "back"],
            zT = {};
          for (const MT of WT) zT[MT] = this._DownsampleFace(TT[MT], TT.size, mT, UT);
          TT = {
            ...TT,
            ...zT,
            size: mT
          }
        }
        const WT = new MT.b;
        let HT = 0;
        const kT = 2 / TT.size,
          jT = kT,
          lT = .5 * kT,
          LT = lT - 1;
        for (let MT = 0; MT < 6; MT++) {
          const UT = this._FileFaces[MT],
            mT = TT[UT.name];
          let pT = LT;
          const BT = 5 === TT.format ? 4 : 3;
          for (let MT = 0; MT < TT.size; MT++) {
            let ZT = LT;
            for (let jT = 0; jT < TT.size; jT++) {
              const LT = UT.worldAxisForFileX.scale(ZT).add(UT.worldAxisForFileY.scale(pT)).add(UT.worldAxisForNormal);
              LT.normalize();
              const cT = this._AreaElement(ZT - lT, pT - lT) - this._AreaElement(ZT - lT, pT + lT) - this._AreaElement(ZT + lT, pT - lT) + this._AreaElement(ZT + lT, pT + lT);
              let vT = mT[MT * TT.size * BT + jT * BT + 0],
                fT = mT[MT * TT.size * BT + jT * BT + 1],
                qT = mT[MT * TT.size * BT + jT * BT + 2];
              isNaN(vT) && (vT = 0), isNaN(fT) && (fT = 0), isNaN(qT) && (qT = 0), 0 === TT.type && (vT /= 255, fT /= 255, qT /= 255), TT.gammaSpace && (vT = Math.pow((0, zT.Clamp)(vT), gT.f), fT = Math.pow((0, zT.Clamp)(fT), gT.f), qT = Math.pow((0, zT.Clamp)(qT), gT.f));
              const iT = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const TT = Math.max(vT, fT, qT);
                if (TT > iT) {
                  const UT = iT / TT;
                  vT *= UT, fT *= UT, qT *= UT
                }
              } else vT = (0, zT.Clamp)(vT, 0, iT), fT = (0, zT.Clamp)(fT, 0, iT), qT = (0, zT.Clamp)(qT, 0, iT);
              const bT = new nT.d(vT, fT, qT);
              WT.addLight(LT, bT, cT), HT += cT, ZT += kT
            }
            pT += jT
          }
        }
        const pT = 6 * (4 * Math.PI) / 6 / HT;
        return WT.scaleInPlace(pT), WT.convertIncidentRadianceToIrradiance(), WT.convertIrradianceToLambertianRadiance(), MT.c.FromHarmonics(WT)
      }
    }
    kT._FileFaces = [new HT("right", new WT.p(1, 0, 0), new WT.p(0, 0, -1), new WT.p(0, -1, 0)), new HT("left", new WT.p(-1, 0, 0), new WT.p(0, 0, 1), new WT.p(0, -1, 0)), new HT("up", new WT.p(0, 1, 0), new WT.p(1, 0, 0), new WT.p(0, 0, 1)), new HT("down", new WT.p(0, -1, 0), new WT.p(1, 0, 0), new WT.p(0, 0, -1)), new HT("front", new WT.p(0, 0, 1), new WT.p(1, 0, 0), new WT.p(0, -1, 0)), new HT("back", new WT.p(0, 0, -1), new WT.p(-1, 0, 0), new WT.p(0, -1, 0))], kT.MAX_HDRI_VALUE = 4096, kT.PRESERVE_CLAMPED_COLORS = !1
  },
  41905: (TT, UT, mT) => {
    mT.d(UT, {
      DDSTools: () => BT
    });
    var WT = mT(37226),
      zT = mT(38800),
      MT = mT(41908),
      gT = mT(40178);
    const nT = 131072,
      HT = 131072;

    function kT(TT) {
      return TT.charCodeAt(0) + (TT.charCodeAt(1) << 8) + (TT.charCodeAt(2) << 16) + (TT.charCodeAt(3) << 24)
    }
    const jT = kT("DXT1"),
      lT = kT("DXT3"),
      LT = kT("DXT5"),
      pT = kT("DX10");
    class BT {
      static GetDDSInfo(TT) {
        const UT = new Int32Array(TT.buffer, TT.byteOffset, 31),
          mT = new Int32Array(TT.buffer, TT.byteOffset, 35);
        let WT = 1;
        UT[2] & nT && (WT = Math.max(1, UT[7]));
        const zT = UT[21],
          MT = zT === pT ? mT[32] : 0;
        let gT = 0;
        switch (zT) {
          case 113:
            gT = 2;
            break;
          case 116:
            gT = 1;
            break;
          case pT:
            if (10 === MT) {
              gT = 2;
              break
            }
            if (2 === MT) {
              gT = 1;
              break
            }
        }
        return {
          width: UT[4],
          height: UT[3],
          mipmapCount: WT,
          isFourCC: 4 === (4 & UT[20]),
          isRGB: 64 === (64 & UT[20]),
          isLuminance: (UT[20] & HT) === HT,
          isCube: 512 === (512 & UT[28]),
          isCompressed: zT === jT || zT === lT || zT === LT,
          dxgiFormat: MT,
          textureType: gT
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(TT, UT, mT, WT, zT, MT) {
        const nT = new Float32Array(WT),
          HT = new Uint16Array(zT, mT);
        let kT = 0;
        for (let jT = 0; jT < UT; jT++)
          for (let UT = 0; UT < TT; UT++) {
            const mT = 4 * (UT + jT * TT);
            nT[kT] = (0, gT.c)(HT[mT]), nT[kT + 1] = (0, gT.c)(HT[mT + 1]), nT[kT + 2] = (0, gT.c)(HT[mT + 2]), BT.StoreLODInAlphaChannel ? nT[kT + 3] = MT : nT[kT + 3] = (0, gT.c)(HT[mT + 3]), kT += 4
          }
        return nT
      }
      static _GetHalfFloatRGBAArrayBuffer(TT, UT, mT, WT, zT, MT) {
        if (BT.StoreLODInAlphaChannel) {
          const nT = new Uint16Array(WT),
            HT = new Uint16Array(zT, mT);
          let kT = 0;
          for (let mT = 0; mT < UT; mT++)
            for (let UT = 0; UT < TT; UT++) {
              const WT = 4 * (UT + mT * TT);
              nT[kT] = HT[WT], nT[kT + 1] = HT[WT + 1], nT[kT + 2] = HT[WT + 2], nT[kT + 3] = (0, gT.j)(MT), kT += 4
            }
          return nT
        }
        return new Uint16Array(zT, mT, WT)
      }
      static _GetFloatRGBAArrayBuffer(TT, UT, mT, WT, zT, MT) {
        if (BT.StoreLODInAlphaChannel) {
          const gT = new Float32Array(WT),
            nT = new Float32Array(zT, mT);
          let HT = 0;
          for (let mT = 0; mT < UT; mT++)
            for (let UT = 0; UT < TT; UT++) {
              const WT = 4 * (UT + mT * TT);
              gT[HT] = nT[WT], gT[HT + 1] = nT[WT + 1], gT[HT + 2] = nT[WT + 2], gT[HT + 3] = MT, HT += 4
            }
          return gT
        }
        return new Float32Array(zT, mT, WT)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(TT, UT, mT, WT, zT, MT) {
        const nT = new Uint16Array(WT),
          HT = new Float32Array(zT, mT);
        let kT = 0;
        for (let jT = 0; jT < UT; jT++)
          for (let UT = 0; UT < TT; UT++) nT[kT] = (0, gT.j)(HT[kT]), nT[kT + 1] = (0, gT.j)(HT[kT + 1]), nT[kT + 2] = (0, gT.j)(HT[kT + 2]), BT.StoreLODInAlphaChannel ? nT[kT + 3] = (0, gT.j)(MT) : nT[kT + 3] = (0, gT.j)(HT[kT + 3]), kT += 4;
        return nT
      }
      static _GetFloatAsUIntRGBAArrayBuffer(TT, UT, mT, zT, MT, gT) {
        const nT = new Uint8Array(zT),
          HT = new Float32Array(MT, mT);
        let kT = 0;
        for (let jT = 0; jT < UT; jT++)
          for (let UT = 0; UT < TT; UT++) {
            const mT = 4 * (UT + jT * TT);
            nT[kT] = 255 * (0, WT.Clamp)(HT[mT]), nT[kT + 1] = 255 * (0, WT.Clamp)(HT[mT + 1]), nT[kT + 2] = 255 * (0, WT.Clamp)(HT[mT + 2]), BT.StoreLODInAlphaChannel ? nT[kT + 3] = gT : nT[kT + 3] = 255 * (0, WT.Clamp)(HT[mT + 3]), kT += 4
          }
        return nT
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(TT, UT, mT, zT, MT, nT) {
        const HT = new Uint8Array(zT),
          kT = new Uint16Array(MT, mT);
        let jT = 0;
        for (let lT = 0; lT < UT; lT++)
          for (let UT = 0; UT < TT; UT++) {
            const mT = 4 * (UT + lT * TT);
            HT[jT] = 255 * (0, WT.Clamp)((0, gT.c)(kT[mT])), HT[jT + 1] = 255 * (0, WT.Clamp)((0, gT.c)(kT[mT + 1])), HT[jT + 2] = 255 * (0, WT.Clamp)((0, gT.c)(kT[mT + 2])), BT.StoreLODInAlphaChannel ? HT[jT + 3] = nT : HT[jT + 3] = 255 * (0, WT.Clamp)((0, gT.c)(kT[mT + 3])), jT += 4
          }
        return HT
      }
      static _GetRGBAArrayBuffer(TT, UT, mT, WT, zT, MT, gT, nT, HT) {
        const kT = new Uint8Array(WT),
          jT = new Uint8Array(zT, mT);
        let lT = 0;
        for (let LT = 0; LT < UT; LT++)
          for (let UT = 0; UT < TT; UT++) {
            const mT = 4 * (UT + LT * TT);
            kT[lT] = jT[mT + MT], kT[lT + 1] = jT[mT + gT], kT[lT + 2] = jT[mT + nT], kT[lT + 3] = jT[mT + HT], lT += 4
          }
        return kT
      }
      static _ExtractLongWordOrder(TT) {
        return 0 === TT || 255 === TT || -16777216 === TT ? 0 : 1 + BT._ExtractLongWordOrder(TT >> 8)
      }
      static _GetRGBArrayBuffer(TT, UT, mT, WT, zT, MT, gT, nT) {
        const HT = new Uint8Array(WT),
          kT = new Uint8Array(zT, mT);
        let jT = 0;
        for (let lT = 0; lT < UT; lT++)
          for (let UT = 0; UT < TT; UT++) {
            const mT = 3 * (UT + lT * TT);
            HT[jT] = kT[mT + MT], HT[jT + 1] = kT[mT + gT], HT[jT + 2] = kT[mT + nT], jT += 3
          }
        return HT
      }
      static _GetLuminanceArrayBuffer(TT, UT, mT, WT, zT) {
        const MT = new Uint8Array(WT),
          gT = new Uint8Array(zT, mT);
        let nT = 0;
        for (let HT = 0; HT < UT; HT++)
          for (let UT = 0; UT < TT; UT++) {
            const mT = UT + HT * TT;
            MT[nT] = gT[mT], nT++
          }
        return MT
      }
      static UploadDDSLevels(TT, UT, mT, WT, gT, HT) {
        let kT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          ZT = arguments.length > 7 ? arguments[7] : void 0,
          cT = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          vT = null;
        WT.sphericalPolynomial && (vT = []);
        const fT = !!TT.getCaps().s3tc;
        UT.generateMipMaps = gT;
        const qT = new Int32Array(mT.buffer, mT.byteOffset, 31);
        let iT, bT, OT, eT, YT, JT, xT, dT = 0,
          wT = 0,
          tT = 1;
        if (542327876 !== qT[0]) return void zT.b.Error("Invalid magic number in DDS header");
        if (!WT.isFourCC && !WT.isRGB && !WT.isLuminance) return void zT.b.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (WT.isCompressed && !fT) return void zT.b.Error("Compressed textures are not supported on this platform.");
        let aT = qT[22];
        eT = qT[1] + 4;
        let yT = !1;
        if (WT.isFourCC) switch (iT = qT[21], iT) {
          case jT:
            tT = 8, wT = 33777;
            break;
          case lT:
            tT = 16, wT = 33778;
            break;
          case LT:
            tT = 16, wT = 33779;
            break;
          case 113:
            yT = !0, aT = 64;
            break;
          case 116:
            yT = !0, aT = 128;
            break;
          case pT: {
            eT += 20;
            let TT = !1;
            switch (WT.dxgiFormat) {
              case 10:
                yT = !0, aT = 64, TT = !0;
                break;
              case 2:
                yT = !0, aT = 128, TT = !0;
                break;
              case 88:
                WT.isRGB = !0, WT.isFourCC = !1, aT = 32, TT = !0
            }
            if (TT) break
          }
          default:
            return void zT.b.Error(["Unsupported FourCC code:", (XT = iT, String.fromCharCode(255 & XT, XT >> 8 & 255, XT >> 16 & 255, XT >> 24 & 255))])
        }
        var XT;
        const IT = BT._ExtractLongWordOrder(qT[23]),
          QT = BT._ExtractLongWordOrder(qT[24]),
          sT = BT._ExtractLongWordOrder(qT[25]),
          FT = BT._ExtractLongWordOrder(qT[26]);
        yT && (wT = TT._getRGBABufferInternalSizedFormat(WT.textureType)), JT = 1, qT[2] & nT && !1 !== gT && (JT = Math.max(1, qT[7]));
        const PT = ZT || 0,
          VT = TT.getCaps();
        for (let zT = PT; zT < HT; zT++) {
          for (bT = qT[4], OT = qT[3], xT = 0; xT < JT; ++xT) {
            if (-1 === kT || kT === xT) {
              const MT = -1 === kT ? xT : 0;
              if (!WT.isCompressed && WT.isFourCC) {
                UT.format = 5, dT = bT * OT * 4;
                let WT = null;
                if (TT._badOS || TT._badDesktopOS || !VT.textureHalfFloat && !VT.textureFloat) 128 === aT ? (WT = BT._GetFloatAsUIntRGBAArrayBuffer(bT, OT, mT.byteOffset + eT, dT, mT.buffer, MT), vT && 0 == MT && vT.push(BT._GetFloatRGBAArrayBuffer(bT, OT, mT.byteOffset + eT, dT, mT.buffer, MT))) : 64 === aT && (WT = BT._GetHalfFloatAsUIntRGBAArrayBuffer(bT, OT, mT.byteOffset + eT, dT, mT.buffer, MT), vT && 0 == MT && vT.push(BT._GetHalfFloatAsFloatRGBAArrayBuffer(bT, OT, mT.byteOffset + eT, dT, mT.buffer, MT))), UT.type = 0;
                else {
                  const TT = VT.textureFloat && (cT && VT.textureFloatLinearFiltering || !cT),
                    zT = VT.textureHalfFloat && (cT && VT.textureHalfFloatLinearFiltering || !cT),
                    gT = (128 === aT || 64 === aT && !zT) && TT ? 1 : (64 === aT || 128 === aT && !TT) && zT ? 2 : 0;
                  let nT, HT = null;
                  if (128 === aT) switch (gT) {
                    case 1:
                      nT = BT._GetFloatRGBAArrayBuffer, HT = null;
                      break;
                    case 2:
                      nT = BT._GetFloatAsHalfFloatRGBAArrayBuffer, HT = BT._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      nT = BT._GetFloatAsUIntRGBAArrayBuffer, HT = BT._GetFloatRGBAArrayBuffer
                  } else switch (gT) {
                    case 1:
                      nT = BT._GetHalfFloatAsFloatRGBAArrayBuffer, HT = null;
                      break;
                    case 2:
                      nT = BT._GetHalfFloatRGBAArrayBuffer, HT = BT._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      nT = BT._GetHalfFloatAsUIntRGBAArrayBuffer, HT = BT._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  UT.type = gT, WT = nT(bT, OT, mT.byteOffset + eT, dT, mT.buffer, MT), vT && 0 == MT && vT.push(HT ? HT(bT, OT, mT.byteOffset + eT, dT, mT.buffer, MT) : WT)
                }
                WT && TT._uploadDataToTextureDirectly(UT, WT, zT, MT)
              } else if (WT.isRGB) UT.type = 0, 24 === aT ? (UT.format = 4, dT = bT * OT * 3, YT = BT._GetRGBArrayBuffer(bT, OT, mT.byteOffset + eT, dT, mT.buffer, IT, QT, sT), TT._uploadDataToTextureDirectly(UT, YT, zT, MT)) : (UT.format = 5, dT = bT * OT * 4, YT = BT._GetRGBAArrayBuffer(bT, OT, mT.byteOffset + eT, dT, mT.buffer, IT, QT, sT, FT), TT._uploadDataToTextureDirectly(UT, YT, zT, MT));
              else if (WT.isLuminance) {
                const WT = TT._getUnpackAlignement(),
                  gT = bT;
                dT = Math.floor((bT + WT - 1) / WT) * WT * (OT - 1) + gT, YT = BT._GetLuminanceArrayBuffer(bT, OT, mT.byteOffset + eT, dT, mT.buffer), UT.format = 1, UT.type = 0, TT._uploadDataToTextureDirectly(UT, YT, zT, MT)
              } else dT = Math.max(4, bT) / 4 * Math.max(4, OT) / 4 * tT, YT = new Uint8Array(mT.buffer, mT.byteOffset + eT, dT), UT.type = 0, TT._uploadCompressedDataToTextureDirectly(UT, wT, bT, OT, YT, zT, MT)
            }
            eT += aT ? bT * OT * (aT / 8) : dT, bT *= .5, OT *= .5, bT = Math.max(1, bT), OT = Math.max(1, OT)
          }
          if (void 0 !== ZT) break
        }
        vT && vT.length > 0 ? WT.sphericalPolynomial = MT.d.ConvertCubeMapToSphericalPolynomial({
          size: qT[4],
          right: vT[0],
          left: vT[1],
          up: vT[2],
          down: vT[3],
          front: vT[4],
          back: vT[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : WT.sphericalPolynomial = void 0
      }
    }
    BT.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);