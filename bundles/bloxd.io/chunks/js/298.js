export const id = 298;
export const ids = [298];
export const modules = {
  40846: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      _ENVTextureLoader: () => NY
    });
    var FY = DY(39065),
      AY = DY(36524),
      IY = DY(36559),
      RY = DY(39120),
      OY = DY(38975),
      gY = DY(39123),
      aY = (DY(39217), DY(40853)),
      vY = DY(38040),
      uY = (DY(40863), DY(40891), DY(39180));
    const sY = "image/png",
      iY = [134, 22, 135, 150, 246, 214, 150, 54];

    function yY(YY) {
      const rY = new DataView(YY.buffer, YY.byteOffset, YY.byteLength);
      let DY = 0;
      for (let RY = 0; RY < iY.length; RY++)
        if (rY.getUint8(DY++) !== iY[RY]) return vY.d.Error("Not a babylon environment map"), null;
      let FY, AY = "";
      for (; FY = rY.getUint8(DY++);) AY += String.fromCharCode(FY);
      let IY = JSON.parse(AY);
      return IY = QY(IY), IY.binaryDataPosition = DY, IY.specular && (IY.specular.lodGenerationScale = IY.specular.lodGenerationScale || .8), IY
    }

    function QY(YY) {
      if (YY.version > 2) throw new Error(`Unsupported babylon environment map version "${YY.version}". Latest supported version is "2".`);
      return 2 === YY.version ? YY : YY = {
        ...YY,
        version: 2,
        imageType: sY
      }
    }

    function oY(YY, rY) {
      const DY = (rY = QY(rY)).specular;
      let FY = Math.log2(rY.width);
      if (FY = Math.round(FY) + 1, DY.mipmaps.length !== 6 * FY) throw new Error(`Unsupported specular mipmaps number "${DY.mipmaps.length}"`);
      const AY = new Array(FY);
      for (let IY = 0; IY < FY; IY++) {
        AY[IY] = new Array(6);
        for (let FY = 0; FY < 6; FY++) {
          const RY = DY.mipmaps[6 * IY + FY];
          AY[IY][FY] = new Uint8Array(YY.buffer, YY.byteOffset + rY.binaryDataPosition + RY.position, RY.length)
        }
      }
      return AY
    }

    function WY(YY, rY) {
      rY = QY(rY);
      const DY = new Array(6),
        FY = rY.irradiance?.irradianceTexture;
      if (FY) {
        if (6 !== FY.faces.length) throw new Error(`Incorrect irradiance texture faces number "${FY.faces.length}"`);
        for (let AY = 0; AY < 6; AY++) {
          const IY = FY.faces[AY];
          DY[AY] = new Uint8Array(YY.buffer, YY.byteOffset + rY.binaryDataPosition + IY.position, IY.length)
        }
      }
      return DY
    }

    function EY(YY, rY, DY) {
      const FY = (DY = QY(DY)).specular;
      if (!FY) return Promise.resolve([]);
      YY._lodGenerationScale = FY.lodGenerationScale;
      const IY = [],
        RY = oY(rY, DY);
      IY.push(VY(YY, RY, DY.imageType));
      const OY = DY.irradiance?.irradianceTexture;
      if (OY) {
        const FY = WY(rY, DY);
        let RY = null;
        DY.irradiance?.irradianceTexture?.dominantDirection && (RY = AY.r.FromArray(DY.irradiance.irradianceTexture.dominantDirection)), IY.push(SY(YY, FY, OY.size, DY.imageType, RY))
      }
      return Promise.all(IY)
    }
    async function mY(YY, rY, DY, FY, AY, IY, RY, OY, gY, aY, vY) {
      return await new Promise(((uY, sY) => {
        if (DY) {
          const DY = rY.createTexture(null, !0, !0, null, 1, null, (YY => {
            sY(YY)
          }), YY);
          FY?.onEffectCreatedObservable.addOnce((OY => {
            OY.executeWhenCompiled((() => {
              FY.externalTextureSamplerBinding = !0, FY.onApply = FY => {
                FY._bindTexture("textureSampler", DY), FY.setFloat2("scale", 1, rY._features.needsInvertingBitmap && YY instanceof ImageBitmap ? -1 : 1)
              }, rY.scenes.length && (rY.scenes[0].postProcessManager.directRender([FY], aY, !0, IY, RY), rY.restoreDefaultFramebuffer(), DY.dispose(), URL.revokeObjectURL(AY), uY())
            }))
          }))
        } else {
          if (rY._uploadImageToTexture(vY, YY, IY, RY), OY) {
            const DY = gY[RY];
            DY && rY._uploadImageToTexture(DY._texture, YY, IY, 0)
          }
          uY()
        }
      }))
    }
    async function VY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : sY;
      const FY = YY.ky();
      YY.format = 5, YY.type = 0, YY.generateMipMaps = !0, YY._cachedAnisotropicFilteringLevel = null, FY.updateTextureSamplingMode(3, YY), await lY(YY, rY, !0, DY), YY.isReady = !0
    }
    async function SY(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : sY,
        AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const IY = YY.ky(),
        RY = new OY.c(IY, 5),
        aY = new gY.e(IY, RY);
      YY._irradianceTexture = aY, aY._dominantDirection = AY, RY.isCube = !0, RY.format = 5, RY.type = 0, RY.generateMipMaps = !0, RY._cachedAnisotropicFilteringLevel = null, RY.generateMipMaps = !0, RY.width = DY, RY.height = DY, IY.updateTextureSamplingMode(3, RY), await lY(RY, [rY], !1, FY), IY.generateMipMapsForCubemap(RY), RY.isReady = !0
    }
    async function lY(YY, rY, AY) {
      let RY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : sY;
      if (!(0, FY.g)(YY.width)) throw new Error("Texture size must be a power of two");
      const vY = (0, IY.ILog2)(YY.width) + 1,
        iY = YY.ky();
      let yY = !1,
        QY = !1,
        oY = null,
        WY = null,
        EY = null;
      const VY = iY.getCaps();
      VY.textureLOD ? iY._features.supportRenderAndCopyToLodForFloatTextures ? VY.textureHalfFloatRender && VY.textureHalfFloatLinearFiltering ? (yY = !0, YY.type = 2) : VY.textureFloatRender && VY.textureFloatLinearFiltering && (yY = !0, YY.type = 1) : yY = !1 : (yY = !1, QY = AY);
      let SY = 0;
      if (yY) iY.isWebGPU ? (SY = 1, await DY.e(332).then((() => DY(60433)))) : await DY.e(314).then((() => DY(60440))), oY = new aY.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, iY, !1, void 0, YY.type, void 0, null, !1, void 0, SY), YY._isRGBD = !1, YY.invertY = !1, WY = iY.createRenderTargetCubeTexture(YY.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: YY.type,
        format: 5
      });
      else if (YY._isRGBD = !0, YY.invertY = !0, QY) {
        const rY = 3;
        EY = {};
        const DY = YY._lodGenerationScale,
          FY = YY._lodGenerationOffset;
        for (let AY = 0; AY < rY; AY++) {
          const IY = (vY - 1) * DY + FY,
            RY = FY + (IY - FY) * (1 - AY / (rY - 1)),
            aY = Math.round(Math.min(Math.max(RY, 0), IY)),
            uY = new OY.c(iY, 2);
          uY.isCube = !0, uY.invertY = !0, uY.generateMipMaps = !1, iY.updateTextureSamplingMode(2, uY);
          const sY = new gY.e(null);
          switch (sY._isCube = !0, sY._texture = uY, EY[aY] = sY, AY) {
            case 0:
              YY._lodTextureLow = sY;
              break;
            case 1:
              YY._lodTextureMid = sY;
              break;
            case 2:
              YY._lodTextureHigh = sY
          }
        }
      }
      const lY = [];
      for (let DY = 0; DY < rY.length; DY++)
        for (let FY = 0; FY < 6; FY++) {
          const AY = rY[DY][FY],
            IY = (0, uY.i)(AY),
            OY = new Blob([IY], {
              type: RY
            }),
            gY = URL.createObjectURL(OY);
          let aY;
          if (iY._features.forceBitmapOverHTMLImageElement) aY = iY.createImageBitmap(OY, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async rY => await mY(rY, iY, yY, oY, gY, FY, DY, QY, EY, WY, YY)));
          else {
            const rY = new Image;
            rY.src = gY, aY = new Promise(((AY, IY) => {
              rY.onload = () => {
                mY(rY, iY, yY, oY, gY, FY, DY, QY, EY, WY, YY).then((() => AY())).catch((YY => {
                  IY(YY)
                }))
              }, rY.onerror = YY => {
                IY(YY)
              }
            }))
          }
          lY.push(aY)
        }
      if (await Promise.all(lY), rY.length < vY) {
        let DY;
        const FY = Math.pow(2, vY - 1 - rY.length),
          AY = FY * FY * 4;
        switch (YY.type) {
          case 0:
            DY = new Uint8Array(AY);
            break;
          case 2:
            DY = new Uint16Array(AY);
            break;
          case 1:
            DY = new Float32Array(AY)
        }
        for (let IY = rY.length; IY < vY; IY++)
          for (let rY = 0; rY < 6; rY++) iY._uploadArrayBufferViewToTexture(WY?.texture || YY, DY, rY, IY)
      }
      if (WY) {
        const rY = YY._irradianceTexture;
        YY._irradianceTexture = null, iY._releaseTexture(YY), WY._swapAndDie(YY), YY._irradianceTexture = rY
      }
      oY && oY.dispose(), QY && (YY._lodTextureHigh && YY._lodTextureHigh._texture && (YY._lodTextureHigh._texture.isReady = !0), YY._lodTextureMid && YY._lodTextureMid._texture && (YY._lodTextureMid._texture.isReady = !0), YY._lodTextureLow && YY._lodTextureLow._texture && (YY._lodTextureLow._texture.isReady = !0))
    }

    function TY(YY, rY) {
      const DY = (rY = QY(rY)).irradiance;
      if (!DY) return;
      const FY = new RY.f;
      AY.r.FromArrayToRef(DY.x, 0, FY.x), AY.r.FromArrayToRef(DY.y, 0, FY.y), AY.r.FromArrayToRef(DY.z, 0, FY.z), AY.r.FromArrayToRef(DY.xx, 0, FY.xx), AY.r.FromArrayToRef(DY.yy, 0, FY.yy), AY.r.FromArrayToRef(DY.zz, 0, FY.zz), AY.r.FromArrayToRef(DY.yz, 0, FY.yz), AY.r.FromArrayToRef(DY.zx, 0, FY.zx), AY.r.FromArrayToRef(DY.xy, 0, FY.xy), YY._sphericalPolynomial = FY
    }
    var eY = DY(40900);
    class NY {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(YY, rY, DY, FY, AY) {
        if (Array.isArray(YY)) return;
        const IY = yY(YY);
        if (IY) {
          rY.width = IY.width, rY.height = IY.width;
          try {
            (0, eY.d)(), TY(rY, IY), EY(rY, YY, IY).then((() => {
              rY.isReady = !0, rY.onLoadedObservable.notifyObservers(rY), rY.onLoadedObservable.clear(), FY && FY()
            }), (YY => {
              AY?.("Can not upload environment levels", YY)
            }))
          } catch (RY) {
            AY?.("Can not upload environment file", RY)
          }
        } else AY && AY("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  40900: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY
    });
    var FY = DY(40825),
      AY = DY(39123);
    let IY = !1;

    function RY() {
      IY || (IY = !0, AY.e.prototype._sphericalPolynomialTargetSize = 0, AY.e.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(AY.e.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = FY.c.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((YY => {
              this._texture._sphericalPolynomial = YY, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(YY) {
          this._texture && (this._texture._sphericalPolynomial = YY)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  40825: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => aY
    });
    var FY = DY(36524),
      AY = DY(36559),
      IY = DY(39120),
      RY = DY(36533),
      OY = DY(36588);
    class gY {
      constructor(YY, rY, DY, FY) {
        this.name = YY, this.worldAxisForNormal = rY, this.worldAxisForFileX = DY, this.worldAxisForFileY = FY
      }
    }
    class aY {
      static _NearestPow2Floor(YY) {
        return YY <= 1 ? 1 : 1 << Math.floor(Math.log2(YY))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(YY) {
        if (!YY.isCube) return null;
        YY.hT()?.ky().flushFramebuffer();
        const rY = YY.getSize().width,
          DY = YY._sphericalPolynomialTargetSize,
          FY = DY > 0 ? this._NearestPow2Floor(DY) : 0,
          AY = !YY.noMipmap && !0 === YY._texture?.generateMipMaps,
          IY = FY > 0 && FY < rY && AY,
          RY = IY ? Math.max(0, Math.round(Math.log2(rY / FY))) : 0,
          OY = IY ? Math.max(1, Math.floor(rY / Math.pow(2, RY))) : rY,
          gY = YY.readPixels(0, RY, void 0, !1),
          aY = YY.readPixels(1, RY, void 0, !1);
        let vY, uY;
        YY.isRenderTarget ? (vY = YY.readPixels(3, RY, void 0, !1), uY = YY.readPixels(2, RY, void 0, !1)) : (vY = YY.readPixels(2, RY, void 0, !1), uY = YY.readPixels(3, RY, void 0, !1));
        const sY = YY.readPixels(4, RY, void 0, !1),
          iY = YY.readPixels(5, RY, void 0, !1),
          yY = YY.gammaSpace,
          QY = FY > 0 && FY < rY && !IY;
        return new Promise((YY => {
          Promise.all([aY, gY, vY, uY, sY, iY]).then((DY => {
            let [AY, IY, RY, gY, aY, vY] = DY, uY = OY;
            if (QY) {
              const YY = 4;
              AY = this._DownsampleFace(AY, rY, FY, YY), IY = this._DownsampleFace(IY, rY, FY, YY), RY = this._DownsampleFace(RY, rY, FY, YY), gY = this._DownsampleFace(gY, rY, FY, YY), aY = this._DownsampleFace(aY, rY, FY, YY), vY = this._DownsampleFace(vY, rY, FY, YY), uY = FY
            }
            const sY = {
              size: uY,
              right: IY,
              left: AY,
              up: RY,
              down: gY,
              front: aY,
              back: vY,
              format: 5,
              type: AY instanceof Float32Array ? 1 : 0,
              gammaSpace: yY
            };
            YY(this.ConvertCubeMapToSphericalPolynomial(sY))
          }))
        }))
      }
      static _AreaElement(YY, rY) {
        return Math.atan2(YY * rY, Math.sqrt(YY * YY + rY * rY + 1))
      }
      static _DownsampleFace(YY, rY, DY, FY) {
        const AY = YY instanceof Float32Array ? YY : Float32Array.from(YY),
          IY = DY * DY * FY,
          RY = new Float32Array(IY),
          OY = rY / DY,
          gY = 1 / (OY * OY);
        for (let vY = 0; vY < DY; vY++) {
          const YY = Math.floor(vY * OY),
            IY = Math.floor((vY + 1) * OY);
          for (let aY = 0; aY < DY; aY++) {
            const uY = Math.floor(aY * OY),
              sY = Math.floor((aY + 1) * OY),
              iY = (vY * DY + aY) * FY;
            for (let DY = 0; DY < FY; DY++) {
              let OY = 0;
              for (let RY = YY; RY < IY; RY++)
                for (let YY = uY; YY < sY; YY++) OY += AY[(RY * rY + YY) * FY + DY];
              RY[iY + DY] = OY * gY
            }
          }
        }
        if (YY instanceof Float32Array) return RY;
        const aY = new(0, YY.constructor)(IY);
        for (let vY = 0; vY < IY; vY++) aY[vY] = RY[vY] + .5 | 0;
        return aY
      }
      static ConvertCubeMapToSphericalPolynomial(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const DY = rY > 0 ? this._NearestPow2Floor(rY) : 0;
        if (DY > 0 && YY.size > DY) {
          const rY = 5 === YY.format ? 4 : 3,
            FY = ["right", "left", "up", "down", "front", "back"],
            AY = {};
          for (const IY of FY) AY[IY] = this._DownsampleFace(YY[IY], YY.size, DY, rY);
          YY = {
            ...YY,
            ...AY,
            size: DY
          }
        }
        const FY = new IY.b;
        let gY = 0;
        const aY = 2 / YY.size,
          vY = aY,
          uY = .5 * aY,
          sY = uY - 1;
        for (let IY = 0; IY < 6; IY++) {
          const rY = this._FileFaces[IY],
            DY = YY[rY.name];
          let iY = sY;
          const yY = 5 === YY.format ? 4 : 3;
          for (let IY = 0; IY < YY.size; IY++) {
            let QY = sY;
            for (let vY = 0; vY < YY.size; vY++) {
              const sY = rY.worldAxisForFileX.scale(QY).add(rY.worldAxisForFileY.scale(iY)).add(rY.worldAxisForNormal);
              sY.normalize();
              const oY = this._AreaElement(QY - uY, iY - uY) - this._AreaElement(QY - uY, iY + uY) - this._AreaElement(QY + uY, iY - uY) + this._AreaElement(QY + uY, iY + uY);
              let WY = DY[IY * YY.size * yY + vY * yY + 0],
                EY = DY[IY * YY.size * yY + vY * yY + 1],
                mY = DY[IY * YY.size * yY + vY * yY + 2];
              isNaN(WY) && (WY = 0), isNaN(EY) && (EY = 0), isNaN(mY) && (mY = 0), 0 === YY.type && (WY /= 255, EY /= 255, mY /= 255), YY.gammaSpace && (WY = Math.pow((0, AY.Clamp)(WY), RY.g), EY = Math.pow((0, AY.Clamp)(EY), RY.g), mY = Math.pow((0, AY.Clamp)(mY), RY.g));
              const VY = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const YY = Math.max(WY, EY, mY);
                if (YY > VY) {
                  const rY = VY / YY;
                  WY *= rY, EY *= rY, mY *= rY
                }
              } else WY = (0, AY.Clamp)(WY, 0, VY), EY = (0, AY.Clamp)(EY, 0, VY), mY = (0, AY.Clamp)(mY, 0, VY);
              const SY = new OY.c(WY, EY, mY);
              FY.addLight(sY, SY, oY), gY += oY, QY += aY
            }
            iY += vY
          }
        }
        const iY = 6 * (4 * Math.PI) / 6 / gY;
        return FY.scaleInPlace(iY), FY.convertIncidentRadianceToIrradiance(), FY.convertIrradianceToLambertianRadiance(), IY.f.FromHarmonics(FY)
      }
    }
    aY._FileFaces = [new gY("right", new FY.r(1, 0, 0), new FY.r(0, 0, -1), new FY.r(0, -1, 0)), new gY("left", new FY.r(-1, 0, 0), new FY.r(0, 0, 1), new FY.r(0, -1, 0)), new gY("up", new FY.r(0, 1, 0), new FY.r(1, 0, 0), new FY.r(0, 0, 1)), new gY("down", new FY.r(0, -1, 0), new FY.r(1, 0, 0), new FY.r(0, 0, -1)), new gY("front", new FY.r(0, 0, 1), new FY.r(1, 0, 0), new FY.r(0, -1, 0)), new gY("back", new FY.r(0, 0, -1), new FY.r(-1, 0, 0), new FY.r(0, -1, 0))], aY.MAX_HDRI_VALUE = 4096, aY.PRESERVE_CLAMPED_COLORS = !1
  },
  40863: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => IY
    });
    var FY = DY(40853),
      AY = DY(40871);
    class IY {
      static ExpandRGBDTexture(YY) {
        const rY = YY._texture;
        if (!rY || !YY.isRGBD) return;
        const AY = rY.ky(),
          IY = AY.getCaps(),
          RY = rY.isReady;
        let OY = !1;
        IY.textureHalfFloatRender && IY.textureHalfFloatLinearFiltering ? (OY = !0, rY.type = 2) : IY.textureFloatRender && IY.textureFloatLinearFiltering && (OY = !0, rY.type = 1), OY && (rY.isReady = !1, rY._isRGBD = !1, rY.invertY = !1);
        const gY = async () => {
          const IY = AY.isWebGPU,
            RY = IY ? 1 : 0;
          rY.isReady = !1, IY ? await DY.e(332).then((() => DY(60433))) : await DY.e(314).then((() => DY(60440)));
          const OY = new FY.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, AY, !1, void 0, rY.type, void 0, null, !1, void 0, RY);
          OY.externalTextureSamplerBinding = !0;
          const gY = AY.createRenderTargetTexture(rY.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: rY.samplingMode,
            type: rY.type,
            format: 5
          });
          OY.onEffectCreatedObservable.addOnce((DY => {
            DY.executeWhenCompiled((() => {
              OY.onApply = YY => {
                YY._bindTexture("textureSampler", rY), YY.setFloat2("scale", 1, 1)
              }, YY.hT()?.postProcessManager.directRender([OY], gY, !0), AY.restoreDefaultFramebuffer(), AY._releaseTexture(rY), OY && OY.dispose(), gY._swapAndDie(rY), rY.isReady = !0
            }))
          }))
        };
        OY && (RY ? gY() : YY.onLoadObservable.addOnce(gY))
      }
      static async EncodeTextureToRGBD(YY, rY) {
        let FY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return rY.ky().isWebGPU ? await DY.e(333).then((() => DY(60457))) : await DY.e(315).then((() => DY(60455))), await (0, AY.b)("rgbdEncode", YY, rY, FY, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);