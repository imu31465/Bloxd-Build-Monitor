export const id = 291;
export const ids = [291];
export const modules = {
  41972: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => yR
    });
    let yR = !1
  },
  41514: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => eR
    });
    var yR = GR(41520),
      tR = GR(41524),
      uR = GR(38233),
      ZR = GR(38204),
      qR = GR(38224),
      iR = GR(39062),
      fR = GR(41534);
    class VR {
      get wrapU() {
        return this._wrapU
      }
      set wrapU(RR) {
        this._wrapU = RR
      }
      get wrapV() {
        return this._wrapV
      }
      set wrapV(RR) {
        this._wrapV = RR
      }
      get coordinatesMode() {
        return 0
      }
      get isCube() {
        return !!this._texture && this._texture.isCube
      }
      set isCube(RR) {
        this._texture && (this._texture.isCube = RR)
      }
      get is3D() {
        return !!this._texture && this._texture.is3D
      }
      set is3D(RR) {
        this._texture && (this._texture.is3D = RR)
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray
      }
      set is2DArray(RR) {
        this._texture && (this._texture.is2DArray = RR)
      }
      getClassName() {
        return "ThinTexture"
      }
      static _IsRenderTargetWrapper(RR) {
        return void 0 !== RR?.shareDepth
      }
      constructor(RR) {
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = fR.b.Zero(), this._cachedBaseSize = fR.b.Zero(), this._initialSamplingMode = 2, this._texture = VR._IsRenderTargetWrapper(RR) ? RR.texture : RR, this._texture && (this._engine = this._texture.ke(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
      }
      isReady() {
        return 4 === this.delayLoadState ? (this.delayLoad(), !1) : !!this._texture && this._texture.isReady
      }
      delayLoad() {}
      getInternalTexture() {
        return this._texture
      }
      getSize() {
        if (this._texture) {
          if (this._texture.width) return this._cachedSize.width = this._texture.width, this._cachedSize.height = this._texture.height, this._cachedSize;
          if (this._texture._size) return this._cachedSize.width = this._texture._size, this._cachedSize.height = this._texture._size, this._cachedSize
        }
        return this._cachedSize
      }
      getBaseSize() {
        return this.isReady() && this._texture ? this._texture._size ? (this._cachedBaseSize.width = this._texture._size, this._cachedBaseSize.height = this._texture._size, this._cachedBaseSize) : (this._cachedBaseSize.width = this._texture.baseWidth, this._cachedBaseSize.height = this._texture.baseHeight, this._cachedBaseSize) : (this._cachedBaseSize.width = 0, this._cachedBaseSize.height = 0, this._cachedBaseSize)
      }
      get samplingMode() {
        return this._texture ? this._texture.samplingMode : this._initialSamplingMode
      }
      updateSamplingMode(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(RR, this._texture, this._texture.generateMipMaps && JR)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var KR, wR = GR(41542),
      rR = GR(41407);
    let eR = (() => {
      var RR;
      let JR, GR, fR, KR, rR, eR, aR, LR, nR, UR, WR, AR, CR, XR, MR, BR, lR, pR, gR, bR, vR, OR, xR, NR, DR, HR = VR,
        oR = [],
        cR = [],
        PR = [],
        IR = [],
        mR = [],
        zR = [],
        SR = [],
        jR = [],
        dR = [],
        ER = [],
        YR = [],
        kR = [],
        QR = [],
        FR = [],
        TR = [],
        sR = [],
        hR = [],
        RJ = [],
        JJ = [],
        GJ = [],
        yJ = [],
        tJ = [],
        uJ = [],
        ZJ = [],
        qJ = [],
        iJ = [],
        fJ = [],
        VJ = [],
        KJ = [],
        wJ = [],
        rJ = [];
      return RR = class extends HR {
        set hasAlpha(RR) {
          this._hasAlpha = RR
        }
        get hasAlpha() {
          return this._hasAlpha
        }
        set getAlphaFromRGB(RR) {
          this._getAlphaFromRGB !== RR && (this._getAlphaFromRGB = RR, this._scene && this._scene.markAllMaterialsAsDirty(1, (RR => RR.hasTexture(this))))
        }
        get getAlphaFromRGB() {
          return this._getAlphaFromRGB
        }
        set coordinatesIndex(RR) {
          this._coordinatesIndex !== RR && (this._coordinatesIndex = RR, this._scene && this._scene.markAllMaterialsAsDirty(1, (RR => RR.hasTexture(this))))
        }
        get coordinatesIndex() {
          return this._coordinatesIndex
        }
        set coordinatesMode(RR) {
          this._coordinatesMode !== RR && (this._coordinatesMode = RR, this._scene && this._scene.markAllMaterialsAsDirty(1, (RR => RR.hasTexture(this))))
        }
        get coordinatesMode() {
          return this._coordinatesMode
        }
        get wrapU() {
          return this._wrapU
        }
        set wrapU(RR) {
          this._wrapU = RR
        }
        get wrapV() {
          return this._wrapV
        }
        set wrapV(RR) {
          this._wrapV = RR
        }
        get isCube() {
          return this._texture ? this._texture.isCube : this._isCube
        }
        set isCube(RR) {
          this._texture ? this._texture.isCube = RR : this._isCube = RR
        }
        get is3D() {
          return !!this._texture && this._texture.is3D
        }
        set is3D(RR) {
          this._texture && (this._texture.is3D = RR)
        }
        get is2DArray() {
          return !!this._texture && this._texture.is2DArray
        }
        set is2DArray(RR) {
          this._texture && (this._texture.is2DArray = RR)
        }
        get gammaSpace() {
          return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
        }
        set gammaSpace(RR) {
          if (this._texture) {
            if (this._texture._gammaSpace === RR) return;
            this._texture._gammaSpace = RR
          } else {
            if (this._gammaSpace === RR) return;
            this._gammaSpace = RR
          }
          this.jH()?.markAllMaterialsAsDirty(1, (RR => RR.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(RR) {
          RR !== this.isRGBD && (this._texture && (this._texture._isRGBD = RR), this.jH()?.markAllMaterialsAsDirty(1, (RR => RR.hasTexture(this))))
        }
        get noMipmap() {
          return !1
        }
        get lodGenerationOffset() {
          return this._texture ? this._texture._lodGenerationOffset : 0
        }
        set lodGenerationOffset(RR) {
          this._texture && (this._texture._lodGenerationOffset = RR)
        }
        get lodGenerationScale() {
          return this._texture ? this._texture._lodGenerationScale : 0
        }
        set lodGenerationScale(RR) {
          this._texture && (this._texture._lodGenerationScale = RR)
        }
        get linearSpecularLOD() {
          return !!this._texture && this._texture._linearSpecularLOD
        }
        set linearSpecularLOD(RR) {
          this._texture && (this._texture._linearSpecularLOD = RR)
        }
        get irradianceTexture() {
          return this._texture ? this._texture._irradianceTexture : null
        }
        set irradianceTexture(RR) {
          this._texture && (this._texture._irradianceTexture = RR)
        }
        get uid() {
          return this._uid || (this._uid = (0, iR.c)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(RR) {
          this._onDisposeObserver && this.YH.remove(this._onDisposeObserver), this._onDisposeObserver = this.YH.add(RR)
        }
        get isBlocking() {
          return !0
        }
        get loadingError() {
          return this._loadingError
        }
        get errorObject() {
          return this._errorObject
        }
        constructor(JR) {
          let GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, yR.m)(this, oR), (0, yR.m)(this, cR, void 0)), this.name = ((0, yR.m)(this, PR), (0, yR.m)(this, IR, void 0)), this.displayName = ((0, yR.m)(this, mR), (0, yR.m)(this, zR, void 0)), this.metadata = ((0, yR.m)(this, SR), (0, yR.m)(this, jR, null)), this._internalMetadata = (0, yR.m)(this, dR), this.reservedDataStore = null, this._hasAlpha = (0, yR.m)(this, ER, !1), this._getAlphaFromRGB = ((0, yR.m)(this, YR), (0, yR.m)(this, kR, !1)), this.level = ((0, yR.m)(this, QR), (0, yR.m)(this, FR, 1)), this._coordinatesIndex = ((0, yR.m)(this, TR), (0, yR.m)(this, sR, 0)), this.optimizeUVAllocation = ((0, yR.m)(this, hR), (0, yR.m)(this, RJ, !0)), this._coordinatesMode = ((0, yR.m)(this, JJ), (0, yR.m)(this, GJ, 0)), this.wrapR = ((0, yR.m)(this, yJ), (0, yR.m)(this, tJ, 1)), this.anisotropicFilteringLevel = ((0, yR.m)(this, uJ), (0, yR.m)(this, ZJ, RR.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, yR.m)(this, qJ), !1), this._gammaSpace = !0, this.invertZ = (0, yR.m)(this, iJ, !1), this.lodLevelInAlpha = ((0, yR.m)(this, fJ), (0, yR.m)(this, VJ, !1)), this._dominantDirection = ((0, yR.m)(this, KJ), null), this.isRenderTarget = (0, yR.m)(this, wJ, !1), this._prefiltered = ((0, yR.m)(this, rJ), !1), this._forceSerialize = !1, this.animations = [], this.YH = new uR.b, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, JR ? RR._IsScene(JR) ? this._scene = JR : this._engine = JR : this._scene = qR.c.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.ke()), this._texture = GR, this._uid = null
        }
        jH() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return ZR.e.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return ZR.e.IdentityReadOnly
        }
        getRefractionTextureMatrix() {
          return this.getReflectionTextureMatrix()
        }
        isReadyOrNotBlocking() {
          return !this.isBlocking || this.isReady() || this.loadingError
        }
        scale(RR) {}
        get canRescale() {
          return !1
        }
        _getFromCache(RR, JR, GR, yR, tR, uR) {
          const ZR = this._getEngine();
          if (!ZR) return null;
          const qR = ZR._getUseSRGBBuffer(!!tR, JR),
            iR = ZR.getLoadedTexturesCache();
          for (let fR = 0; fR < iR.length; fR++) {
            const ZR = iR[fR];
            if ((void 0 === tR || qR === ZR._useSRGBBuffer) && (void 0 === yR || yR === ZR.invertY) && ZR.url === RR && ZR.generateMipMaps === !JR && (!GR || GR === ZR.samplingMode) && (void 0 === uR || uR === ZR.isCube)) return ZR.incrementReferences(), ZR
          }
          return null
        }
        _rebuild() {}
        clone() {
          return null
        }
        get textureType() {
          return this._texture && void 0 !== this._texture.type ? this._texture.type : 0
        }
        get textureFormat() {
          return this._texture && void 0 !== this._texture.format ? this._texture.format : 5
        }
        _markAllSubMeshesAsTexturesDirty() {
          const RR = this.jH();
          RR && RR.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            yR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            ZR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            qR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            iR = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const fR = this._getEngine();
          if (!fR) return null;
          const VR = this.getSize();
          let KR = VR.width,
            wR = VR.height;
          0 !== JR && (KR /= Math.pow(2, JR), wR /= Math.pow(2, JR), KR = Math.round(KR), wR = Math.round(wR)), qR = Math.min(KR, qR), iR = Math.min(wR, iR);
          try {
            return this._texture.isCube || this._texture.is2DArray ? fR._readTexturePixels(this._texture, qR, iR, RR, JR, GR, yR, tR, uR, ZR) : fR._readTexturePixels(this._texture, qR, iR, -1, JR, GR, yR, tR, uR, ZR)
          } catch (rR) {
            return null
          }
        }
        _readPixelsSync() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            yR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const uR = this.getSize();
          let ZR = uR.width,
            qR = uR.height;
          const iR = this._getEngine();
          if (!iR) return null;
          0 != JR && (ZR /= Math.pow(2, JR), qR /= Math.pow(2, JR), ZR = Math.round(ZR), qR = Math.round(qR));
          try {
            return this._texture.isCube ? iR._readTexturePixelsSync(this._texture, ZR, qR, RR, JR, GR, yR, tR) : iR._readTexturePixelsSync(this._texture, ZR, qR, -1, JR, GR, yR, tR)
          } catch (fR) {
            return null
          }
        }
        get _lodTextureHigh() {
          return this._texture ? this._texture._lodTextureHigh : null
        }
        get _lodTextureMid() {
          return this._texture ? this._texture._lodTextureMid : null
        }
        get _lodTextureLow() {
          return this._texture ? this._texture._lodTextureLow : null
        }
        dispose() {
          if (this._scene) {
            this._scene.stopAnimation && this._scene.stopAnimation(this), this._scene.removePendingData(this);
            const RR = this._scene.textures.indexOf(this);
            if (RR >= 0 && this._scene.textures.splice(RR, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
              const RR = this._parentContainer.textures.indexOf(this);
              RR > -1 && this._parentContainer.textures.splice(RR, 1), this._parentContainer = null
            }
          }
          this.YH.notifyObservers(this), this.YH.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !RR) return null;
          const JR = wR.c.Serialize(this);
          return wR.c.AppendSerializedAnimations(this, JR), JR
        }
        static WhenAllReady(RR, JR) {
          let GR = RR.length;
          if (0 !== GR)
            for (let yR = 0; yR < RR.length; yR++) {
              const tR = RR[yR];
              if (tR.isReady()) 0 === --GR && JR();
              else {
                const RR = tR.onLoadObservable;
                RR ? RR.addOnce((() => {
                  0 === --GR && JR()
                })) : 0 === --GR && JR()
              }
            } else JR()
        }
        static _IsScene(RR) {
          return "Scene" === RR.getClassName()
        }
      }, (() => {
        const uR = "function" === typeof Symbol && Symbol.metadata ? Object.create(HR[Symbol.metadata] ?? null) : void 0;
        JR = [(0, tR.H)()], GR = [(0, tR.H)()], fR = [(0, tR.H)()], KR = [(0, tR.H)()], rR = [(0, tR.H)("hasAlpha")], eR = [(0, tR.H)("getAlphaFromRGB")], aR = [(0, tR.H)()], LR = [(0, tR.H)("coordinatesIndex")], nR = [(0, tR.H)()], UR = [(0, tR.H)("coordinatesMode")], WR = [(0, tR.H)()], AR = [(0, tR.H)()], CR = [(0, tR.H)()], XR = [(0, tR.H)()], MR = [(0, tR.H)()], BR = [(0, tR.H)()], lR = [(0, tR.H)()], pR = [(0, tR.H)()], gR = [(0, tR.H)()], bR = [(0, tR.H)()], vR = [(0, tR.H)()], OR = [(0, tR.H)()], xR = [(0, tR.H)()], NR = [(0, tR.C)()], DR = [(0, tR.H)()], (0, yR.l)(RR, null, WR, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: RR => "wrapU" in RR,
            get: RR => RR.wrapU
          },
          metadata: uR
        }, null, oR), (0, yR.l)(RR, null, AR, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: RR => "wrapV" in RR,
            get: RR => RR.wrapV
          },
          metadata: uR
        }, null, oR), (0, yR.l)(RR, null, MR, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: RR => "isCube" in RR,
            get: RR => RR.isCube
          },
          metadata: uR
        }, null, oR), (0, yR.l)(RR, null, BR, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: RR => "is3D" in RR,
            get: RR => RR.is3D
          },
          metadata: uR
        }, null, oR), (0, yR.l)(RR, null, lR, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: RR => "is2DArray" in RR,
            get: RR => RR.is2DArray
          },
          metadata: uR
        }, null, oR), (0, yR.l)(RR, null, pR, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: RR => "gammaSpace" in RR,
            get: RR => RR.gammaSpace
          },
          metadata: uR
        }, null, oR), (0, yR.l)(RR, null, vR, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: RR => "lodGenerationOffset" in RR,
            get: RR => RR.lodGenerationOffset
          },
          metadata: uR
        }, null, oR), (0, yR.l)(RR, null, OR, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: RR => "lodGenerationScale" in RR,
            get: RR => RR.lodGenerationScale
          },
          metadata: uR
        }, null, oR), (0, yR.l)(RR, null, xR, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: RR => "linearSpecularLOD" in RR,
            get: RR => RR.linearSpecularLOD
          },
          metadata: uR
        }, null, oR), (0, yR.l)(RR, null, NR, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: RR => "irradianceTexture" in RR,
            get: RR => RR.irradianceTexture
          },
          metadata: uR
        }, null, oR), (0, yR.l)(null, null, JR, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: RR => "uniqueId" in RR,
            get: RR => RR.uniqueId,
            set: (RR, JR) => {
              RR.uniqueId = JR
            }
          },
          metadata: uR
        }, cR, PR), (0, yR.l)(null, null, GR, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: RR => "name" in RR,
            get: RR => RR.name,
            set: (RR, JR) => {
              RR.name = JR
            }
          },
          metadata: uR
        }, IR, mR), (0, yR.l)(null, null, fR, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: RR => "displayName" in RR,
            get: RR => RR.displayName,
            set: (RR, JR) => {
              RR.displayName = JR
            }
          },
          metadata: uR
        }, zR, SR), (0, yR.l)(null, null, KR, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: RR => "metadata" in RR,
            get: RR => RR.metadata,
            set: (RR, JR) => {
              RR.metadata = JR
            }
          },
          metadata: uR
        }, jR, dR), (0, yR.l)(null, null, rR, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: RR => "_hasAlpha" in RR,
            get: RR => RR._hasAlpha,
            set: (RR, JR) => {
              RR._hasAlpha = JR
            }
          },
          metadata: uR
        }, ER, YR), (0, yR.l)(null, null, eR, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: RR => "_getAlphaFromRGB" in RR,
            get: RR => RR._getAlphaFromRGB,
            set: (RR, JR) => {
              RR._getAlphaFromRGB = JR
            }
          },
          metadata: uR
        }, kR, QR), (0, yR.l)(null, null, aR, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: RR => "level" in RR,
            get: RR => RR.level,
            set: (RR, JR) => {
              RR.level = JR
            }
          },
          metadata: uR
        }, FR, TR), (0, yR.l)(null, null, LR, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: RR => "_coordinatesIndex" in RR,
            get: RR => RR._coordinatesIndex,
            set: (RR, JR) => {
              RR._coordinatesIndex = JR
            }
          },
          metadata: uR
        }, sR, hR), (0, yR.l)(null, null, nR, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: RR => "optimizeUVAllocation" in RR,
            get: RR => RR.optimizeUVAllocation,
            set: (RR, JR) => {
              RR.optimizeUVAllocation = JR
            }
          },
          metadata: uR
        }, RJ, JJ), (0, yR.l)(null, null, UR, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: RR => "_coordinatesMode" in RR,
            get: RR => RR._coordinatesMode,
            set: (RR, JR) => {
              RR._coordinatesMode = JR
            }
          },
          metadata: uR
        }, GJ, yJ), (0, yR.l)(null, null, CR, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: RR => "wrapR" in RR,
            get: RR => RR.wrapR,
            set: (RR, JR) => {
              RR.wrapR = JR
            }
          },
          metadata: uR
        }, tJ, uJ), (0, yR.l)(null, null, XR, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: RR => "anisotropicFilteringLevel" in RR,
            get: RR => RR.anisotropicFilteringLevel,
            set: (RR, JR) => {
              RR.anisotropicFilteringLevel = JR
            }
          },
          metadata: uR
        }, ZJ, qJ), (0, yR.l)(null, null, gR, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: RR => "invertZ" in RR,
            get: RR => RR.invertZ,
            set: (RR, JR) => {
              RR.invertZ = JR
            }
          },
          metadata: uR
        }, iJ, fJ), (0, yR.l)(null, null, bR, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: RR => "lodLevelInAlpha" in RR,
            get: RR => RR.lodLevelInAlpha,
            set: (RR, JR) => {
              RR.lodLevelInAlpha = JR
            }
          },
          metadata: uR
        }, VJ, KJ), (0, yR.l)(null, null, DR, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: RR => "isRenderTarget" in RR,
            get: RR => RR.isRenderTarget,
            set: (RR, JR) => {
              RR.isRenderTarget = JR
            }
          },
          metadata: uR
        }, wJ, rJ), uR && Object.defineProperty(RR, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: uR
        })
      })(), RR.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, RR
    })();
    (KR = eR.prototype).forceSphericalPolynomialsRecompute ?? (KR.forceSphericalPolynomialsRecompute = (0, rR.f)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(eR.prototype, "sphericalPolynomial") || Object.defineProperty(eR.prototype, "sphericalPolynomial", (0, rR.e)("BaseTexture", "sphericalPolynomial"))
  },
  42011: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => CR,
      f: () => WR
    });
    var yR = GR(41520),
      tR = GR(41524),
      uR = GR(38233),
      ZR = GR(38204),
      qR = GR(41514),
      iR = GR(38253),
      fR = GR(41407),
      VR = GR(41415),
      KR = GR(41620),
      wR = GR(38933),
      rR = GR(41581);

    function eR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const yR = JR.width,
        tR = JR.height;
      if (RR instanceof Float32Array) {
        let JR = RR.byteLength / RR.BYTES_PER_ELEMENT;
        const GR = new Uint8Array(JR);
        for (; --JR >= 0;) {
          let yR = RR[JR];
          yR < 0 ? yR = 0 : yR > 1 && (yR = 1), GR[JR] = 255 * yR
        }
        RR = GR
      }
      const uR = document.createElement("canvas");
      uR.width = yR, uR.height = tR;
      const ZR = uR.getContext("2d");
      if (!ZR) return null;
      const qR = ZR.createImageData(yR, tR);
      if (qR.data.set(RR), ZR.putImageData(qR, 0, 0), GR) {
        const RR = document.createElement("canvas");
        RR.width = yR, RR.height = tR;
        const JR = RR.getContext("2d");
        return JR ? (JR.translate(0, tR), JR.scale(1, -1), JR.drawImage(uR, 0, 0), RR.toDataURL("image/png")) : null
      }
      return uR.toDataURL("image/png")
    }

    function aR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const yR = RR.getInternalTexture();
      if (!yR) return null;
      const tR = RR._readPixelsSync(JR, GR);
      return tR ? eR(tR, RR.getSize(), yR.invertY) : null
    }
    async function LR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const yR = RR.getInternalTexture();
      if (!yR) return null;
      const tR = await RR.readPixels(JR, GR);
      return tR ? eR(tR, RR.getSize(), yR.invertY) : null
    }
    var nR = GR(41972),
      UR = GR(41542);
    let WR = (() => {
        var RR;
        let JR, GR, eR, WR, AR, CR, XR, MR, BR, lR, pR, gR, bR, vR = qR.c,
          OR = [],
          xR = [],
          NR = [],
          DR = [],
          HR = [],
          oR = [],
          cR = [],
          PR = [],
          IR = [],
          mR = [],
          zR = [],
          SR = [],
          jR = [],
          dR = [],
          ER = [],
          YR = [],
          kR = [],
          QR = [],
          FR = [],
          TR = [],
          sR = [],
          hR = [],
          RJ = [],
          JJ = [],
          GJ = [];
        return RR = class extends vR {
          static _CreateVideoTexture(JR, GR, yR) {
            arguments.length > 5 && void 0 !== arguments[5] || RR.TRILINEAR_SAMPLINGMODE;
            throw (0, fR.j)("VideoTexture")
          }
          get noMipmap() {
            return this._noMipmap
          }
          get mimeType() {
            return this._mimeType
          }
          set isBlocking(RR) {
            this._isBlocking = RR
          }
          get isBlocking() {
            return this._isBlocking
          }
          get invertY() {
            return this._invertY
          }
          constructor(JR, GR, tR, ZR) {
            let qR, iR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : RR.TRILINEAR_SAMPLINGMODE,
              fR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              KR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              wR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              rR = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              eR = arguments.length > 9 ? arguments[9] : void 0,
              aR = arguments.length > 10 ? arguments[10] : void 0,
              LR = arguments.length > 11 ? arguments[11] : void 0,
              UR = arguments.length > 12 ? arguments[12] : void 0,
              WR = arguments.length > 13 ? arguments[13] : void 0;
            super(GR), this.url = ((0, yR.m)(this, OR), (0, yR.m)(this, xR, null)), this.uOffset = ((0, yR.m)(this, NR), (0, yR.m)(this, DR, 0)), this.vOffset = ((0, yR.m)(this, HR), (0, yR.m)(this, oR, 0)), this.uScale = ((0, yR.m)(this, cR), (0, yR.m)(this, PR, 1)), this.vScale = ((0, yR.m)(this, IR), (0, yR.m)(this, mR, 1)), this.uAng = ((0, yR.m)(this, zR), (0, yR.m)(this, SR, 0)), this.vAng = ((0, yR.m)(this, jR), (0, yR.m)(this, dR, 0)), this.wAng = ((0, yR.m)(this, ER), (0, yR.m)(this, YR, 0)), this.uRotationCenter = ((0, yR.m)(this, kR), (0, yR.m)(this, QR, .5)), this.vRotationCenter = ((0, yR.m)(this, FR), (0, yR.m)(this, TR, .5)), this.wRotationCenter = ((0, yR.m)(this, sR), (0, yR.m)(this, hR, .5)), this.homogeneousRotationInUVTransform = ((0, yR.m)(this, RJ), (0, yR.m)(this, JJ, !1)), this.inspectableCustomProperties = ((0, yR.m)(this, GJ), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new uR.b, this._isBlocking = !0, this.name = JR || "", this.url = JR;
            let AR = !1,
              CR = null,
              XR = !0;
            "object" === typeof tR && null !== tR ? (qR = tR.noMipmap ?? !1, ZR = tR.invertY ?? !nR.d, iR = tR.samplingMode ?? RR.TRILINEAR_SAMPLINGMODE, fR = tR.onLoad ?? null, KR = tR.onError ?? null, wR = tR.buffer ?? null, rR = tR.deleteBuffer ?? !1, eR = tR.format, aR = tR.mimeType, LR = tR.loaderOptions, UR = tR.creationFlags, AR = tR.useSRGBBuffer ?? !1, CR = tR.internalTexture ?? null, XR = tR.gammaSpace ?? XR, WR = tR.forcedExtension ?? WR) : qR = !!tR, this._gammaSpace = XR, this._noMipmap = qR, this._invertY = void 0 === ZR ? !nR.d : ZR, this._initialSamplingMode = iR, this._buffer = wR, this._deleteBuffer = rR, this._mimeType = aR, this._loaderOptions = LR, this._creationFlags = UR, this._useSRGBBuffer = AR, this._forcedExtension = WR, void 0 !== eR && (this._format = eR);
            const MR = this.jH(),
              BR = this._getEngine();
            if (!BR) return;
            BR.onBeforeTextureInitObservable.notifyObservers(this);
            const lR = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), fR && fR(), !this.isBlocking && MR && MR.resetCachedMaterial()
              },
              pR = (JR, GR) => {
                this._loadingError = !0, this._errorObject = {
                  message: JR,
                  exception: GR
                }, KR && KR(JR, GR), RR.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !CR) return this._delayedOnLoad = lR, void(this._delayedOnError = pR);
            if (this._texture = CR ?? this._getFromCache(this.url, qR, iR, this._invertY, AR, this.isCube), this._texture)
              if (this._texture.isReady) VR.e.SetImmediate((() => lR()));
              else {
                const RR = this._texture.onLoadedObservable.add(lR);
                this._texture.onErrorObservable.add((JR => {
                  pR(JR.message, JR.exception), this._texture?.onLoadedObservable.remove(RR)
                }))
              }
            else if (MR && MR.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = lR, this._delayedOnError = pR;
            else {
              try {
                this._texture = BR.createTexture(this.url, qR, this._invertY, MR, iR, lR, pR, this._buffer, void 0, this._format, this._forcedExtension, aR, LR, UR, AR)
              } catch (gR) {
                throw pR("error loading", gR), gR
              }
              rR && (this._buffer = null)
            }
          }
          updateURL(RR) {
            let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              GR = arguments.length > 2 ? arguments[2] : void 0,
              yR = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.jH().markAllMaterialsAsDirty(1, (RR => RR.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = RR), this.url = RR, this._buffer = JR, this._forcedExtension = yR, this.delayLoadState = 4;
            const tR = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              tR ? tR() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), GR && GR()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const RR = this.jH();
            if (!RR) return;
            let JR = this.url;
            !JR && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (JR = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(JR, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? VR.e.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = RR.ke().createTexture(JR, this._noMipmap, this._invertY, RR, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(RR, JR, GR, yR) {
            RR *= this._cachedUScale, JR *= this._cachedVScale, RR -= this.uRotationCenter * this._cachedUScale, JR -= this.vRotationCenter * this._cachedVScale, GR -= this.wRotationCenter, ZR.r.TransformCoordinatesFromFloatsToRef(RR, JR, GR, this._rowGenerationMatrix, yR), yR.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, yR.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, yR.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * RR === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * RR, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = ZR.e.Zero(), this._rowGenerationMatrix = new ZR.e, this._t0 = ZR.r.Zero(), this._t1 = ZR.r.Zero(), this._t2 = ZR.r.Zero()), ZR.e.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (ZR.e.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, ZR.l.Matrix[0]), ZR.e.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, ZR.l.Matrix[1]), ZR.e.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, ZR.l.Matrix[2]), ZR.e.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, ZR.l.Matrix[3]), ZR.l.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(ZR.l.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(ZR.l.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(ZR.l.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.VuR(this._t0), this._t2.VuR(this._t0), ZR.e.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const JR = this.jH();
            if (!JR) return this._cachedTextureMatrix;
            const GR = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && GR !== this._cachedIdentity3x2 && JR.markAllMaterialsAsDirty(1, (RR => RR.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const JR = this.jH();
            if (!JR) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== RR.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === JR.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = ZR.e.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = ZR.e.Zero());
            const GR = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case RR.PLANAR_MODE:
                ZR.e.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case RR.PROJECTION_MODE: {
                ZR.e.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const RR = JR.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = RR.updateFlag, RR.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                ZR.e.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return GR && JR.markAllMaterialsAsDirty(1, (RR => RR.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const JR = {
              noMipmap: this._noMipmap,
              invertY: this._invertY,
              samplingMode: this.samplingMode,
              onLoad: void 0,
              onError: void 0,
              buffer: this._texture ? this._texture._buffer : void 0,
              deleteBuffer: this._deleteBuffer,
              format: this.textureFormat,
              mimeType: this.mimeType,
              loaderOptions: this._loaderOptions,
              creationFlags: this._creationFlags,
              useSRGBBuffer: this._useSRGBBuffer
            };
            return UR.c.Clone((() => new RR(this._texture ? this._texture.url : null, this.jH(), JR)), this)
          }
          serialize() {
            const JR = this.name;
            RR.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const GR = super.serialize(RR._SerializeInternalTextureUniqueId);
            if (!GR) return null;
            if (RR.SerializeBuffers || RR.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) GR.base64String = this._buffer, GR.name = GR.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const RR = this.mimeType || "image/png";
              GR.base64String = `data:${RR};base64,${(0,rR.g)(this._buffer)}`
            } else(RR.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (GR.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? aR(this) : LR(this));
            return GR.invertY = this._invertY, GR.samplingMode = this.samplingMode, GR._creationFlags = this._creationFlags, GR._useSRGBBuffer = this._useSRGBBuffer, RR._SerializeInternalTextureUniqueId && (GR.internalTextureUniqueId = this._texture?.uniqueId), GR.internalTextureLabel = this._texture?.label, GR.noMipmap = this._noMipmap, this.name = JR, GR
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(JR, GR, yR) {
            if (JR.customType) {
              const RR = KR.b.Instantiate(JR.customType).Parse(JR, GR, yR);
              return JR.samplingMode && RR.updateSamplingMode && RR._samplingMode && RR._samplingMode !== JR.samplingMode && RR.updateSamplingMode(JR.samplingMode), RR
            }
            if (JR.isCube && !JR.isRenderTarget) return RR._CubeTextureParser(JR, GR, yR);
            const tR = void 0 !== JR.internalTextureUniqueId;
            if (!JR.name && !JR.isRenderTarget && !tR) return null;
            let uR;
            if (tR) {
              const RR = GR.ke().getLoadedTexturesCache();
              for (const GR of RR)
                if (GR.uniqueId === JR.internalTextureUniqueId) {
                  uR = GR;
                  break
                }
            }
            const ZR = RR => {
              if (RR && RR._texture && (RR._texture._cachedWrapU = null, RR._texture._cachedWrapV = null, RR._texture._cachedWrapR = null), JR.samplingMode) {
                const GR = JR.samplingMode;
                RR && RR.samplingMode !== GR && RR.updateSamplingMode(GR)
              }
              if (RR && JR.animations)
                for (let GR = 0; GR < JR.animations.length; GR++) {
                  const yR = JR.animations[GR],
                    tR = (0, iR.e)("BABYLON.Animation");
                  tR && RR.animations.push(tR.Parse(yR))
                }
              RR && RR._texture && (tR && !uR && RR._texture._setUniqueId(JR.internalTextureUniqueId), RR._texture.label = JR.internalTextureLabel)
            };
            return UR.c.Parse((() => {
              let tR = !0;
              if (JR.noMipmap && (tR = !1), JR.mirrorPlane) {
                const yR = RR._CreateMirror(JR.name, JR.renderTargetSize, GR, tR);
                return yR._waitingRenderList = JR.renderList, yR.mirrorPlane = wR.c.FromArray(JR.mirrorPlane), ZR(yR), yR
              }
              if (JR.isRenderTarget && !JR.base64String) {
                let yR = null;
                if (JR.isCube) {
                  if (GR.reflectionProbes)
                    for (let RR = 0; RR < GR.reflectionProbes.length; RR++) {
                      const yR = GR.reflectionProbes[RR];
                      if (yR.name === JR.name) return yR.cubeTexture
                    }
                } else yR = RR._CreateRenderTargetTexture(JR.name, JR.renderTargetSize, GR, tR, JR._creationFlags ?? 0), yR._waitingRenderList = JR.renderList;
                return ZR(yR), yR
              }
              if (JR.isVideo) {
                const uR = RR._CreateVideoTexture(yR + (JR.url || JR.name), yR + (JR.src || JR.url), GR, tR, JR.invertY, JR.samplingMode, JR.settings || {});
                return ZR(uR), uR
              } {
                let qR;
                if ("string" === typeof JR.base64String && JR.base64String && !uR) {
                  const yR = {
                      buffer: JR.base64String,
                      noMipmap: !tR,
                      invertY: JR.invertY,
                      samplingMode: JR.samplingMode,
                      useSRGBBuffer: JR._useSRGBBuffer ?? !1,
                      creationFlags: JR._creationFlags ?? 0,
                      onLoad: () => {
                        ZR(qR)
                      }
                    },
                    uR = JR.base64String,
                    iR = uR.startsWith("data:") ? uR.substring(5) : uR;
                  qR = RR.CreateFromBase64String("", iR, GR, yR), qR.name = JR.name
                } else {
                  let iR;
                  iR = JR.name && (JR.name.indexOf("://") > 0 || JR.name.startsWith("data:")) ? JR.name : yR + JR.name, JR.url && (JR.url.startsWith("data:") || RR.UseSerializedUrlIfAny) && (iR = JR.url);
                  const fR = {
                    noMipmap: !tR,
                    invertY: JR.invertY,
                    samplingMode: JR.samplingMode,
                    useSRGBBuffer: JR._useSRGBBuffer ?? !1,
                    creationFlags: JR._creationFlags ?? 0,
                    onLoad: () => {
                      ZR(qR)
                    },
                    internalTexture: uR
                  };
                  qR = new RR(iR, GR, fR)
                }
                return qR
              }
            }), JR, GR)
          }
          static CreateFromBase64String(JR, GR, yR, tR, uR) {
            let ZR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : RR.TRILINEAR_SAMPLINGMODE;
            return new RR("data:" + GR, yR, tR, uR, ZR, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, JR, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(JR, GR, yR) {
            let tR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              uR = arguments.length > 4 ? arguments[4] : void 0,
              ZR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              qR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : RR.TRILINEAR_SAMPLINGMODE,
              iR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              fR = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              VR = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              KR = arguments.length > 10 ? arguments[10] : void 0,
              wR = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== JR.substring(0, 5) && (JR = "data:" + JR), new RR(JR, yR, uR, ZR, qR, iR, fR, GR, tR, VR, void 0, void 0, KR, wR)
          }
        }, (() => {
          const uR = "function" === typeof Symbol && Symbol.metadata ? Object.create(vR[Symbol.metadata] ?? null) : void 0;
          JR = [(0, tR.H)()], GR = [(0, tR.H)()], eR = [(0, tR.H)()], WR = [(0, tR.H)()], AR = [(0, tR.H)()], CR = [(0, tR.H)()], XR = [(0, tR.H)()], MR = [(0, tR.H)()], BR = [(0, tR.H)()], lR = [(0, tR.H)()], pR = [(0, tR.H)()], gR = [(0, tR.H)()], bR = [(0, tR.H)()], (0, yR.l)(RR, null, bR, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: RR => "isBlocking" in RR,
              get: RR => RR.isBlocking
            },
            metadata: uR
          }, null, OR), (0, yR.l)(null, null, JR, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: RR => "url" in RR,
              get: RR => RR.url,
              set: (RR, JR) => {
                RR.url = JR
              }
            },
            metadata: uR
          }, xR, NR), (0, yR.l)(null, null, GR, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: RR => "uOffset" in RR,
              get: RR => RR.uOffset,
              set: (RR, JR) => {
                RR.uOffset = JR
              }
            },
            metadata: uR
          }, DR, HR), (0, yR.l)(null, null, eR, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: RR => "vOffset" in RR,
              get: RR => RR.vOffset,
              set: (RR, JR) => {
                RR.vOffset = JR
              }
            },
            metadata: uR
          }, oR, cR), (0, yR.l)(null, null, WR, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: RR => "uScale" in RR,
              get: RR => RR.uScale,
              set: (RR, JR) => {
                RR.uScale = JR
              }
            },
            metadata: uR
          }, PR, IR), (0, yR.l)(null, null, AR, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: RR => "vScale" in RR,
              get: RR => RR.vScale,
              set: (RR, JR) => {
                RR.vScale = JR
              }
            },
            metadata: uR
          }, mR, zR), (0, yR.l)(null, null, CR, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: RR => "uAng" in RR,
              get: RR => RR.uAng,
              set: (RR, JR) => {
                RR.uAng = JR
              }
            },
            metadata: uR
          }, SR, jR), (0, yR.l)(null, null, XR, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: RR => "vAng" in RR,
              get: RR => RR.vAng,
              set: (RR, JR) => {
                RR.vAng = JR
              }
            },
            metadata: uR
          }, dR, ER), (0, yR.l)(null, null, MR, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: RR => "wAng" in RR,
              get: RR => RR.wAng,
              set: (RR, JR) => {
                RR.wAng = JR
              }
            },
            metadata: uR
          }, YR, kR), (0, yR.l)(null, null, BR, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: RR => "uRotationCenter" in RR,
              get: RR => RR.uRotationCenter,
              set: (RR, JR) => {
                RR.uRotationCenter = JR
              }
            },
            metadata: uR
          }, QR, FR), (0, yR.l)(null, null, lR, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: RR => "vRotationCenter" in RR,
              get: RR => RR.vRotationCenter,
              set: (RR, JR) => {
                RR.vRotationCenter = JR
              }
            },
            metadata: uR
          }, TR, sR), (0, yR.l)(null, null, pR, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: RR => "wRotationCenter" in RR,
              get: RR => RR.wRotationCenter,
              set: (RR, JR) => {
                RR.wRotationCenter = JR
              }
            },
            metadata: uR
          }, hR, RJ), (0, yR.l)(null, null, gR, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: RR => "homogeneousRotationInUVTransform" in RR,
              get: RR => RR.homogeneousRotationInUVTransform,
              set: (RR, JR) => {
                RR.homogeneousRotationInUVTransform = JR
              }
            },
            metadata: uR
          }, JJ, GJ), uR && Object.defineProperty(RR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uR
          })
        })(), RR.SerializeBuffers = !0, RR.ForceSerializeBuffers = !1, RR.OnTextureLoadErrorObservable = new uR.b, RR._SerializeInternalTextureUniqueId = !1, RR._CubeTextureParser = (RR, JR, GR) => {
          throw (0, fR.j)("CubeTexture")
        }, RR._CreateMirror = (RR, JR, GR, yR) => {
          throw (0, fR.j)("MirrorTexture")
        }, RR._CreateRenderTargetTexture = (RR, JR, GR, yR, tR) => {
          throw (0, fR.j)("RenderTargetTexture")
        }, RR.NEAREST_SAMPLINGMODE = 1, RR.NEAREST_NEAREST_MIPLINEAR = 8, RR.BILINEAR_SAMPLINGMODE = 2, RR.LINEAR_LINEAR_MIPNEAREST = 11, RR.TRILINEAR_SAMPLINGMODE = 3, RR.LINEAR_LINEAR_MIPLINEAR = 3, RR.NEAREST_NEAREST_MIPNEAREST = 4, RR.NEAREST_LINEAR_MIPNEAREST = 5, RR.NEAREST_LINEAR_MIPLINEAR = 6, RR.NEAREST_LINEAR = 7, RR.NEAREST_NEAREST = 1, RR.LINEAR_NEAREST_MIPNEAREST = 9, RR.LINEAR_NEAREST_MIPLINEAR = 10, RR.LINEAR_LINEAR = 2, RR.LINEAR_NEAREST = 12, RR.EXPLICIT_MODE = 0, RR.SPHERICAL_MODE = 1, RR.PLANAR_MODE = 2, RR.CUBIC_MODE = 3, RR.PROJECTION_MODE = 4, RR.SKYBOX_MODE = 5, RR.INVCUBIC_MODE = 6, RR.EQUIRECTANGULAR_MODE = 7, RR.FIXED_EQUIRECTANGULAR_MODE = 8, RR.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, RR.CLAMP_ADDRESSMODE = 0, RR.WRAP_ADDRESSMODE = 1, RR.MIRROR_ADDRESSMODE = 2, RR.UseSerializedUrlIfAny = !1, RR
      })(),
      AR = !1;

    function CR() {
      AR || (AR = !0, (0, iR.f)("BABYLON.Texture", WR), UR.c._TextureParser = WR.Parse)
    }
  },
  41534: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR
    });
    class yR {
      constructor(RR, JR) {
        this.width = RR, this.height = JR
      }
      toString() {
        return `{W: ${this.width}, H: ${this.height}}`
      }
      getClassName() {
        return "Size"
      }
      getHashCode() {
        let RR = 0 | this.width;
        return RR = 397 * RR ^ this.height, RR
      }
      vN(RR) {
        this.width = RR.width, this.height = RR.height
      }
      VJR(RR, JR) {
        return this.width = RR, this.height = JR, this
      }
      set(RR, JR) {
        return this.VJR(RR, JR)
      }
      multiplyByFloats(RR, JR) {
        return new yR(this.width * RR, this.height * JR)
      }
      clone() {
        return new yR(this.width, this.height)
      }
      equals(RR) {
        return !!RR && (this.width === RR.width && this.height === RR.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new yR(0, 0)
      }
      add(RR) {
        return new yR(this.width + RR.width, this.height + RR.height)
      }
      subtract(RR) {
        return new yR(this.width - RR.width, this.height - RR.height)
      }
      scale(RR) {
        return new yR(this.width * RR, this.height * RR)
      }
      static Lerp(RR, JR, GR) {
        const tR = RR.width + (JR.width - RR.width) * GR,
          uR = RR.height + (JR.height - RR.height) * GR;
        return new yR(tR, uR)
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);