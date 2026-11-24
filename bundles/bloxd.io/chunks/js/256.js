export const id = 256;
export const ids = [256];
export const modules = {
  40465: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => tS
    });
    let tS = !1
  },
  40038: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => KS
    });
    var tS = gS(40041),
      bS = gS(40048),
      XS = gS(37144),
      xS = gS(37117),
      NS = gS(37138),
      qS = gS(37933),
      uS = gS(40062);
    class IS {
      get wrapU() {
        return this._wrapU
      }
      set wrapU(SS) {
        this._wrapU = SS
      }
      get wrapV() {
        return this._wrapV
      }
      set wrapV(SS) {
        this._wrapV = SS
      }
      get coordinatesMode() {
        return 0
      }
      get isCube() {
        return !!this._texture && this._texture.isCube
      }
      set isCube(SS) {
        this._texture && (this._texture.isCube = SS)
      }
      get is3D() {
        return !!this._texture && this._texture.is3D
      }
      set is3D(SS) {
        this._texture && (this._texture.is3D = SS)
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray
      }
      set is2DArray(SS) {
        this._texture && (this._texture.is2DArray = SS)
      }
      getClassName() {
        return "ThinTexture"
      }
      static _IsRenderTargetWrapper(SS) {
        return void 0 !== SS?.shareDepth
      }
      constructor(SS) {
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = uS.b.Zero(), this._cachedBaseSize = uS.b.Zero(), this._initialSamplingMode = 2, this._texture = IS._IsRenderTargetWrapper(SS) ? SS.texture : SS, this._texture && (this._engine = this._texture.AK(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
      updateSamplingMode(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(SS, this._texture, this._texture.generateMipMaps && HS)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var fS, kS = gS(40068),
      aS = gS(39926);
    let KS = (() => {
      var SS;
      let HS, gS, uS, fS, aS, KS, jS, GS, CS, nS, PS, QS, DS, wS, hS, ZS, JS, OS, dS, cS, vS, ES, LS, YS, AS, yS = IS,
        VS = [],
        iS = [],
        WS = [],
        zS = [],
        US = [],
        pS = [],
        sS = [],
        BS = [],
        MS = [],
        FS = [],
        RS = [],
        TS = [],
        oS = [],
        lS = [],
        mS = [],
        eS = [],
        rS = [],
        SH = [],
        HH = [],
        gH = [],
        tH = [],
        bH = [],
        XH = [],
        xH = [],
        NH = [],
        qH = [],
        uH = [],
        IH = [],
        fH = [],
        kH = [],
        aH = [];
      return SS = class extends yS {
        set hasAlpha(SS) {
          this._hasAlpha = SS
        }
        get hasAlpha() {
          return this._hasAlpha
        }
        set getAlphaFromRGB(SS) {
          this._getAlphaFromRGB !== SS && (this._getAlphaFromRGB = SS, this._scene && this._scene.markAllMaterialsAsDirty(1, (SS => SS.hasTexture(this))))
        }
        get getAlphaFromRGB() {
          return this._getAlphaFromRGB
        }
        set coordinatesIndex(SS) {
          this._coordinatesIndex !== SS && (this._coordinatesIndex = SS, this._scene && this._scene.markAllMaterialsAsDirty(1, (SS => SS.hasTexture(this))))
        }
        get coordinatesIndex() {
          return this._coordinatesIndex
        }
        set coordinatesMode(SS) {
          this._coordinatesMode !== SS && (this._coordinatesMode = SS, this._scene && this._scene.markAllMaterialsAsDirty(1, (SS => SS.hasTexture(this))))
        }
        get coordinatesMode() {
          return this._coordinatesMode
        }
        get wrapU() {
          return this._wrapU
        }
        set wrapU(SS) {
          this._wrapU = SS
        }
        get wrapV() {
          return this._wrapV
        }
        set wrapV(SS) {
          this._wrapV = SS
        }
        get isCube() {
          return this._texture ? this._texture.isCube : this._isCube
        }
        set isCube(SS) {
          this._texture ? this._texture.isCube = SS : this._isCube = SS
        }
        get is3D() {
          return !!this._texture && this._texture.is3D
        }
        set is3D(SS) {
          this._texture && (this._texture.is3D = SS)
        }
        get is2DArray() {
          return !!this._texture && this._texture.is2DArray
        }
        set is2DArray(SS) {
          this._texture && (this._texture.is2DArray = SS)
        }
        get gammaSpace() {
          return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
        }
        set gammaSpace(SS) {
          if (this._texture) {
            if (this._texture._gammaSpace === SS) return;
            this._texture._gammaSpace = SS
          } else {
            if (this._gammaSpace === SS) return;
            this._gammaSpace = SS
          }
          this.lL()?.markAllMaterialsAsDirty(1, (SS => SS.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(SS) {
          SS !== this.isRGBD && (this._texture && (this._texture._isRGBD = SS), this.lL()?.markAllMaterialsAsDirty(1, (SS => SS.hasTexture(this))))
        }
        get noMipmap() {
          return !1
        }
        get lodGenerationOffset() {
          return this._texture ? this._texture._lodGenerationOffset : 0
        }
        set lodGenerationOffset(SS) {
          this._texture && (this._texture._lodGenerationOffset = SS)
        }
        get lodGenerationScale() {
          return this._texture ? this._texture._lodGenerationScale : 0
        }
        set lodGenerationScale(SS) {
          this._texture && (this._texture._lodGenerationScale = SS)
        }
        get linearSpecularLOD() {
          return !!this._texture && this._texture._linearSpecularLOD
        }
        set linearSpecularLOD(SS) {
          this._texture && (this._texture._linearSpecularLOD = SS)
        }
        get irradianceTexture() {
          return this._texture ? this._texture._irradianceTexture : null
        }
        set irradianceTexture(SS) {
          this._texture && (this._texture._irradianceTexture = SS)
        }
        get uid() {
          return this._uid || (this._uid = (0, qS.c)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(SS) {
          this._onDisposeObserver && this.bY.remove(this._onDisposeObserver), this._onDisposeObserver = this.bY.add(SS)
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
        constructor(HS) {
          let gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, tS.k)(this, VS), (0, tS.k)(this, iS, void 0)), this.name = ((0, tS.k)(this, WS), (0, tS.k)(this, zS, void 0)), this.displayName = ((0, tS.k)(this, US), (0, tS.k)(this, pS, void 0)), this.metadata = ((0, tS.k)(this, sS), (0, tS.k)(this, BS, null)), this._internalMetadata = (0, tS.k)(this, MS), this.reservedDataStore = null, this._hasAlpha = (0, tS.k)(this, FS, !1), this._getAlphaFromRGB = ((0, tS.k)(this, RS), (0, tS.k)(this, TS, !1)), this.level = ((0, tS.k)(this, oS), (0, tS.k)(this, lS, 1)), this._coordinatesIndex = ((0, tS.k)(this, mS), (0, tS.k)(this, eS, 0)), this.optimizeUVAllocation = ((0, tS.k)(this, rS), (0, tS.k)(this, SH, !0)), this._coordinatesMode = ((0, tS.k)(this, HH), (0, tS.k)(this, gH, 0)), this.wrapR = ((0, tS.k)(this, tH), (0, tS.k)(this, bH, 1)), this.anisotropicFilteringLevel = ((0, tS.k)(this, XH), (0, tS.k)(this, xH, SS.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, tS.k)(this, NH), !1), this._gammaSpace = !0, this.invertZ = (0, tS.k)(this, qH, !1), this.lodLevelInAlpha = ((0, tS.k)(this, uH), (0, tS.k)(this, IH, !1)), this._dominantDirection = ((0, tS.k)(this, fH), null), this.isRenderTarget = (0, tS.k)(this, kH, !1), this._prefiltered = ((0, tS.k)(this, aH), !1), this._forceSerialize = !1, this.animations = [], this.bY = new XS.e, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, HS ? SS._IsScene(HS) ? this._scene = HS : this._engine = HS : this._scene = NS.d.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.AK()), this._texture = gS, this._uid = null
        }
        lL() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return xS.e.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return xS.e.IdentityReadOnly
        }
        getRefractionTextureMatrix() {
          return this.getReflectionTextureMatrix()
        }
        isReadyOrNotBlocking() {
          return !this.isBlocking || this.isReady() || this.loadingError
        }
        scale(SS) {}
        get canRescale() {
          return !1
        }
        _getFromCache(SS, HS, gS, tS, bS, XS) {
          const xS = this._getEngine();
          if (!xS) return null;
          const NS = xS._getUseSRGBBuffer(!!bS, HS),
            qS = xS.getLoadedTexturesCache();
          for (let uS = 0; uS < qS.length; uS++) {
            const xS = qS[uS];
            if ((void 0 === bS || NS === xS._useSRGBBuffer) && (void 0 === tS || tS === xS.invertY) && xS.url === SS && xS.generateMipMaps === !HS && (!gS || gS === xS.samplingMode) && (void 0 === XS || XS === xS.isCube)) return xS.incrementReferences(), xS
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
          const SS = this.lL();
          SS && SS.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            tS = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            bS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            xS = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            NS = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            qS = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const uS = this._getEngine();
          if (!uS) return null;
          const IS = this.getSize();
          let fS = IS.width,
            kS = IS.height;
          0 !== HS && (fS /= Math.pow(2, HS), kS /= Math.pow(2, HS), fS = Math.round(fS), kS = Math.round(kS)), NS = Math.min(fS, NS), qS = Math.min(kS, qS);
          try {
            return this._texture.isCube || this._texture.is2DArray ? uS._readTexturePixels(this._texture, NS, qS, SS, HS, gS, tS, bS, XS, xS) : uS._readTexturePixels(this._texture, NS, qS, -1, HS, gS, tS, bS, XS, xS)
          } catch (aS) {
            return null
          }
        }
        _readPixelsSync() {
          let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            tS = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            bS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const XS = this.getSize();
          let xS = XS.width,
            NS = XS.height;
          const qS = this._getEngine();
          if (!qS) return null;
          0 != HS && (xS /= Math.pow(2, HS), NS /= Math.pow(2, HS), xS = Math.round(xS), NS = Math.round(NS));
          try {
            return this._texture.isCube ? qS._readTexturePixelsSync(this._texture, xS, NS, SS, HS, gS, tS, bS) : qS._readTexturePixelsSync(this._texture, xS, NS, -1, HS, gS, tS, bS)
          } catch (uS) {
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
            const SS = this._scene.textures.indexOf(this);
            if (SS >= 0 && this._scene.textures.splice(SS, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
              const SS = this._parentContainer.textures.indexOf(this);
              SS > -1 && this._parentContainer.textures.splice(SS, 1), this._parentContainer = null
            }
          }
          this.bY.notifyObservers(this), this.bY.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !SS) return null;
          const HS = kS.b.Serialize(this);
          return kS.b.AppendSerializedAnimations(this, HS), HS
        }
        static WhenAllReady(SS, HS) {
          let gS = SS.length;
          if (0 !== gS)
            for (let tS = 0; tS < SS.length; tS++) {
              const bS = SS[tS];
              if (bS.isReady()) 0 === --gS && HS();
              else {
                const SS = bS.onLoadObservable;
                SS ? SS.addOnce((() => {
                  0 === --gS && HS()
                })) : 0 === --gS && HS()
              }
            } else HS()
        }
        static _IsScene(SS) {
          return "Scene" === SS.getClassName()
        }
      }, (() => {
        const XS = "function" === typeof Symbol && Symbol.metadata ? Object.create(yS[Symbol.metadata] ?? null) : void 0;
        HS = [(0, bS.M)()], gS = [(0, bS.M)()], uS = [(0, bS.M)()], fS = [(0, bS.M)()], aS = [(0, bS.M)("hasAlpha")], KS = [(0, bS.M)("getAlphaFromRGB")], jS = [(0, bS.M)()], GS = [(0, bS.M)("coordinatesIndex")], CS = [(0, bS.M)()], nS = [(0, bS.M)("coordinatesMode")], PS = [(0, bS.M)()], QS = [(0, bS.M)()], DS = [(0, bS.M)()], wS = [(0, bS.M)()], hS = [(0, bS.M)()], ZS = [(0, bS.M)()], JS = [(0, bS.M)()], OS = [(0, bS.M)()], dS = [(0, bS.M)()], cS = [(0, bS.M)()], vS = [(0, bS.M)()], ES = [(0, bS.M)()], LS = [(0, bS.M)()], YS = [(0, bS.B)()], AS = [(0, bS.M)()], (0, tS.j)(SS, null, PS, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: SS => "wrapU" in SS,
            get: SS => SS.wrapU
          },
          metadata: XS
        }, null, VS), (0, tS.j)(SS, null, QS, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: SS => "wrapV" in SS,
            get: SS => SS.wrapV
          },
          metadata: XS
        }, null, VS), (0, tS.j)(SS, null, hS, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: SS => "isCube" in SS,
            get: SS => SS.isCube
          },
          metadata: XS
        }, null, VS), (0, tS.j)(SS, null, ZS, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: SS => "is3D" in SS,
            get: SS => SS.is3D
          },
          metadata: XS
        }, null, VS), (0, tS.j)(SS, null, JS, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: SS => "is2DArray" in SS,
            get: SS => SS.is2DArray
          },
          metadata: XS
        }, null, VS), (0, tS.j)(SS, null, OS, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: SS => "gammaSpace" in SS,
            get: SS => SS.gammaSpace
          },
          metadata: XS
        }, null, VS), (0, tS.j)(SS, null, vS, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: SS => "lodGenerationOffset" in SS,
            get: SS => SS.lodGenerationOffset
          },
          metadata: XS
        }, null, VS), (0, tS.j)(SS, null, ES, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: SS => "lodGenerationScale" in SS,
            get: SS => SS.lodGenerationScale
          },
          metadata: XS
        }, null, VS), (0, tS.j)(SS, null, LS, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: SS => "linearSpecularLOD" in SS,
            get: SS => SS.linearSpecularLOD
          },
          metadata: XS
        }, null, VS), (0, tS.j)(SS, null, YS, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: SS => "irradianceTexture" in SS,
            get: SS => SS.irradianceTexture
          },
          metadata: XS
        }, null, VS), (0, tS.j)(null, null, HS, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: SS => "uniqueId" in SS,
            get: SS => SS.uniqueId,
            set: (SS, HS) => {
              SS.uniqueId = HS
            }
          },
          metadata: XS
        }, iS, WS), (0, tS.j)(null, null, gS, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: SS => "name" in SS,
            get: SS => SS.name,
            set: (SS, HS) => {
              SS.name = HS
            }
          },
          metadata: XS
        }, zS, US), (0, tS.j)(null, null, uS, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: SS => "displayName" in SS,
            get: SS => SS.displayName,
            set: (SS, HS) => {
              SS.displayName = HS
            }
          },
          metadata: XS
        }, pS, sS), (0, tS.j)(null, null, fS, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: SS => "metadata" in SS,
            get: SS => SS.metadata,
            set: (SS, HS) => {
              SS.metadata = HS
            }
          },
          metadata: XS
        }, BS, MS), (0, tS.j)(null, null, aS, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: SS => "_hasAlpha" in SS,
            get: SS => SS._hasAlpha,
            set: (SS, HS) => {
              SS._hasAlpha = HS
            }
          },
          metadata: XS
        }, FS, RS), (0, tS.j)(null, null, KS, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: SS => "_getAlphaFromRGB" in SS,
            get: SS => SS._getAlphaFromRGB,
            set: (SS, HS) => {
              SS._getAlphaFromRGB = HS
            }
          },
          metadata: XS
        }, TS, oS), (0, tS.j)(null, null, jS, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: SS => "level" in SS,
            get: SS => SS.level,
            set: (SS, HS) => {
              SS.level = HS
            }
          },
          metadata: XS
        }, lS, mS), (0, tS.j)(null, null, GS, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: SS => "_coordinatesIndex" in SS,
            get: SS => SS._coordinatesIndex,
            set: (SS, HS) => {
              SS._coordinatesIndex = HS
            }
          },
          metadata: XS
        }, eS, rS), (0, tS.j)(null, null, CS, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: SS => "optimizeUVAllocation" in SS,
            get: SS => SS.optimizeUVAllocation,
            set: (SS, HS) => {
              SS.optimizeUVAllocation = HS
            }
          },
          metadata: XS
        }, SH, HH), (0, tS.j)(null, null, nS, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: SS => "_coordinatesMode" in SS,
            get: SS => SS._coordinatesMode,
            set: (SS, HS) => {
              SS._coordinatesMode = HS
            }
          },
          metadata: XS
        }, gH, tH), (0, tS.j)(null, null, DS, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: SS => "wrapR" in SS,
            get: SS => SS.wrapR,
            set: (SS, HS) => {
              SS.wrapR = HS
            }
          },
          metadata: XS
        }, bH, XH), (0, tS.j)(null, null, wS, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: SS => "anisotropicFilteringLevel" in SS,
            get: SS => SS.anisotropicFilteringLevel,
            set: (SS, HS) => {
              SS.anisotropicFilteringLevel = HS
            }
          },
          metadata: XS
        }, xH, NH), (0, tS.j)(null, null, dS, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: SS => "invertZ" in SS,
            get: SS => SS.invertZ,
            set: (SS, HS) => {
              SS.invertZ = HS
            }
          },
          metadata: XS
        }, qH, uH), (0, tS.j)(null, null, cS, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: SS => "lodLevelInAlpha" in SS,
            get: SS => SS.lodLevelInAlpha,
            set: (SS, HS) => {
              SS.lodLevelInAlpha = HS
            }
          },
          metadata: XS
        }, IH, fH), (0, tS.j)(null, null, AS, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: SS => "isRenderTarget" in SS,
            get: SS => SS.isRenderTarget,
            set: (SS, HS) => {
              SS.isRenderTarget = HS
            }
          },
          metadata: XS
        }, kH, aH), XS && Object.defineProperty(SS, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: XS
        })
      })(), SS.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, SS
    })();
    (fS = KS.prototype).forceSphericalPolynomialsRecompute ?? (fS.forceSphericalPolynomialsRecompute = (0, aS.i)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(KS.prototype, "sphericalPolynomial") || Object.defineProperty(KS.prototype, "sphericalPolynomial", (0, aS.f)("BaseTexture", "sphericalPolynomial"))
  },
  40510: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => DS,
      i: () => PS
    });
    var tS = gS(40041),
      bS = gS(40048),
      XS = gS(37144),
      xS = gS(37117),
      NS = gS(40038),
      qS = gS(37164),
      uS = gS(39926),
      IS = gS(39937),
      fS = gS(40136),
      kS = gS(37791),
      aS = gS(40105);

    function KS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const tS = HS.width,
        bS = HS.height;
      if (SS instanceof Float32Array) {
        let HS = SS.byteLength / SS.BYTES_PER_ELEMENT;
        const gS = new Uint8Array(HS);
        for (; --HS >= 0;) {
          let tS = SS[HS];
          tS < 0 ? tS = 0 : tS > 1 && (tS = 1), gS[HS] = 255 * tS
        }
        SS = gS
      }
      const XS = document.createElement("canvas");
      XS.width = tS, XS.height = bS;
      const xS = XS.getContext("2d");
      if (!xS) return null;
      const NS = xS.createImageData(tS, bS);
      if (NS.data.set(SS), xS.putImageData(NS, 0, 0), gS) {
        const SS = document.createElement("canvas");
        SS.width = tS, SS.height = bS;
        const HS = SS.getContext("2d");
        return HS ? (HS.translate(0, bS), HS.scale(1, -1), HS.drawImage(XS, 0, 0), SS.toDataURL("image/png")) : null
      }
      return XS.toDataURL("image/png")
    }

    function jS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const tS = SS.getInternalTexture();
      if (!tS) return null;
      const bS = SS._readPixelsSync(HS, gS);
      return bS ? KS(bS, SS.getSize(), tS.invertY) : null
    }
    async function GS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const tS = SS.getInternalTexture();
      if (!tS) return null;
      const bS = await SS.readPixels(HS, gS);
      return bS ? KS(bS, SS.getSize(), tS.invertY) : null
    }
    var CS = gS(40465),
      nS = gS(40068);
    let PS = (() => {
        var SS;
        let HS, gS, KS, PS, QS, DS, wS, hS, ZS, JS, OS, dS, cS, vS = NS.e,
          ES = [],
          LS = [],
          YS = [],
          AS = [],
          yS = [],
          VS = [],
          iS = [],
          WS = [],
          zS = [],
          US = [],
          pS = [],
          sS = [],
          BS = [],
          MS = [],
          FS = [],
          RS = [],
          TS = [],
          oS = [],
          lS = [],
          mS = [],
          eS = [],
          rS = [],
          SH = [],
          HH = [],
          gH = [];
        return SS = class extends vS {
          static _CreateVideoTexture(HS, gS, tS) {
            arguments.length > 5 && void 0 !== arguments[5] || SS.TRILINEAR_SAMPLINGMODE;
            throw (0, uS.l)("VideoTexture")
          }
          get noMipmap() {
            return this._noMipmap
          }
          get mimeType() {
            return this._mimeType
          }
          set isBlocking(SS) {
            this._isBlocking = SS
          }
          get isBlocking() {
            return this._isBlocking
          }
          get invertY() {
            return this._invertY
          }
          constructor(HS, gS, bS, xS) {
            let NS, qS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : SS.TRILINEAR_SAMPLINGMODE,
              uS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              fS = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              kS = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              aS = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              KS = arguments.length > 9 ? arguments[9] : void 0,
              jS = arguments.length > 10 ? arguments[10] : void 0,
              GS = arguments.length > 11 ? arguments[11] : void 0,
              nS = arguments.length > 12 ? arguments[12] : void 0,
              PS = arguments.length > 13 ? arguments[13] : void 0;
            super(gS), this.url = ((0, tS.k)(this, ES), (0, tS.k)(this, LS, null)), this.uOffset = ((0, tS.k)(this, YS), (0, tS.k)(this, AS, 0)), this.vOffset = ((0, tS.k)(this, yS), (0, tS.k)(this, VS, 0)), this.uScale = ((0, tS.k)(this, iS), (0, tS.k)(this, WS, 1)), this.vScale = ((0, tS.k)(this, zS), (0, tS.k)(this, US, 1)), this.uAng = ((0, tS.k)(this, pS), (0, tS.k)(this, sS, 0)), this.vAng = ((0, tS.k)(this, BS), (0, tS.k)(this, MS, 0)), this.wAng = ((0, tS.k)(this, FS), (0, tS.k)(this, RS, 0)), this.uRotationCenter = ((0, tS.k)(this, TS), (0, tS.k)(this, oS, .5)), this.vRotationCenter = ((0, tS.k)(this, lS), (0, tS.k)(this, mS, .5)), this.wRotationCenter = ((0, tS.k)(this, eS), (0, tS.k)(this, rS, .5)), this.homogeneousRotationInUVTransform = ((0, tS.k)(this, SH), (0, tS.k)(this, HH, !1)), this.inspectableCustomProperties = ((0, tS.k)(this, gH), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new XS.e, this._isBlocking = !0, this.name = HS || "", this.url = HS;
            let QS = !1,
              DS = null,
              wS = !0;
            "object" === typeof bS && null !== bS ? (NS = bS.noMipmap ?? !1, xS = bS.invertY ?? !CS.c, qS = bS.samplingMode ?? SS.TRILINEAR_SAMPLINGMODE, uS = bS.onLoad ?? null, fS = bS.onError ?? null, kS = bS.buffer ?? null, aS = bS.deleteBuffer ?? !1, KS = bS.format, jS = bS.mimeType, GS = bS.loaderOptions, nS = bS.creationFlags, QS = bS.useSRGBBuffer ?? !1, DS = bS.internalTexture ?? null, wS = bS.gammaSpace ?? wS, PS = bS.forcedExtension ?? PS) : NS = !!bS, this._gammaSpace = wS, this._noMipmap = NS, this._invertY = void 0 === xS ? !CS.c : xS, this._initialSamplingMode = qS, this._buffer = kS, this._deleteBuffer = aS, this._mimeType = jS, this._loaderOptions = GS, this._creationFlags = nS, this._useSRGBBuffer = QS, this._forcedExtension = PS, void 0 !== KS && (this._format = KS);
            const hS = this.lL(),
              ZS = this._getEngine();
            if (!ZS) return;
            ZS.onBeforeTextureInitObservable.notifyObservers(this);
            const JS = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), uS && uS(), !this.isBlocking && hS && hS.resetCachedMaterial()
              },
              OS = (HS, gS) => {
                this._loadingError = !0, this._errorObject = {
                  message: HS,
                  exception: gS
                }, fS && fS(HS, gS), SS.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !DS) return this._delayedOnLoad = JS, void(this._delayedOnError = OS);
            if (this._texture = DS ?? this._getFromCache(this.url, NS, qS, this._invertY, QS, this.isCube), this._texture)
              if (this._texture.isReady) IS.e.SetImmediate((() => JS()));
              else {
                const SS = this._texture.onLoadedObservable.add(JS);
                this._texture.onErrorObservable.add((HS => {
                  OS(HS.message, HS.exception), this._texture?.onLoadedObservable.remove(SS)
                }))
              }
            else if (hS && hS.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = JS, this._delayedOnError = OS;
            else {
              try {
                this._texture = ZS.createTexture(this.url, NS, this._invertY, hS, qS, JS, OS, this._buffer, void 0, this._format, this._forcedExtension, jS, GS, nS, QS)
              } catch (dS) {
                throw OS("error loading", dS), dS
              }
              aS && (this._buffer = null)
            }
          }
          updateURL(SS) {
            let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              gS = arguments.length > 2 ? arguments[2] : void 0,
              tS = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.lL().markAllMaterialsAsDirty(1, (SS => SS.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = SS), this.url = SS, this._buffer = HS, this._forcedExtension = tS, this.delayLoadState = 4;
            const bS = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              bS ? bS() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), gS && gS()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const SS = this.lL();
            if (!SS) return;
            let HS = this.url;
            !HS && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (HS = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(HS, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? IS.e.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = SS.AK().createTexture(HS, this._noMipmap, this._invertY, SS, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(SS, HS, gS, tS) {
            SS *= this._cachedUScale, HS *= this._cachedVScale, SS -= this.uRotationCenter * this._cachedUScale, HS -= this.vRotationCenter * this._cachedVScale, gS -= this.wRotationCenter, xS.n.TransformCoordinatesFromFloatsToRef(SS, HS, gS, this._rowGenerationMatrix, tS), tS.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, tS.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, tS.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * SS === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * SS, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = xS.e.Zero(), this._rowGenerationMatrix = new xS.e, this._t0 = xS.n.Zero(), this._t1 = xS.n.Zero(), this._t2 = xS.n.Zero()), xS.e.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (xS.e.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, xS.l.Matrix[0]), xS.e.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, xS.l.Matrix[1]), xS.e.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, xS.l.Matrix[2]), xS.e.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, xS.l.Matrix[3]), xS.l.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(xS.l.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(xS.l.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(xS.l.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.GtS(this._t0), this._t2.GtS(this._t0), xS.e.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const HS = this.lL();
            if (!HS) return this._cachedTextureMatrix;
            const gS = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && gS !== this._cachedIdentity3x2 && HS.markAllMaterialsAsDirty(1, (SS => SS.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const HS = this.lL();
            if (!HS) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== SS.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === HS.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = xS.e.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = xS.e.Zero());
            const gS = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case SS.PLANAR_MODE:
                xS.e.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case SS.PROJECTION_MODE: {
                xS.e.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const SS = HS.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = SS.updateFlag, SS.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                xS.e.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return gS && HS.markAllMaterialsAsDirty(1, (SS => SS.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const HS = {
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
            return nS.b.Clone((() => new SS(this._texture ? this._texture.url : null, this.lL(), HS)), this)
          }
          serialize() {
            const HS = this.name;
            SS.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const gS = super.serialize(SS._SerializeInternalTextureUniqueId);
            if (!gS) return null;
            if (SS.SerializeBuffers || SS.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) gS.base64String = this._buffer, gS.name = gS.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const SS = this.mimeType || "image/png";
              gS.base64String = `data:${SS};base64,${(0,aS.h)(this._buffer)}`
            } else(SS.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (gS.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? jS(this) : GS(this));
            return gS.invertY = this._invertY, gS.samplingMode = this.samplingMode, gS._creationFlags = this._creationFlags, gS._useSRGBBuffer = this._useSRGBBuffer, SS._SerializeInternalTextureUniqueId && (gS.internalTextureUniqueId = this._texture?.uniqueId), gS.internalTextureLabel = this._texture?.label, gS.noMipmap = this._noMipmap, this.name = HS, gS
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(HS, gS, tS) {
            if (HS.customType) {
              const SS = fS.e.Instantiate(HS.customType).Parse(HS, gS, tS);
              return HS.samplingMode && SS.updateSamplingMode && SS._samplingMode && SS._samplingMode !== HS.samplingMode && SS.updateSamplingMode(HS.samplingMode), SS
            }
            if (HS.isCube && !HS.isRenderTarget) return SS._CubeTextureParser(HS, gS, tS);
            const bS = void 0 !== HS.internalTextureUniqueId;
            if (!HS.name && !HS.isRenderTarget && !bS) return null;
            let XS;
            if (bS) {
              const SS = gS.AK().getLoadedTexturesCache();
              for (const gS of SS)
                if (gS.uniqueId === HS.internalTextureUniqueId) {
                  XS = gS;
                  break
                }
            }
            const xS = SS => {
              if (SS && SS._texture && (SS._texture._cachedWrapU = null, SS._texture._cachedWrapV = null, SS._texture._cachedWrapR = null), HS.samplingMode) {
                const gS = HS.samplingMode;
                SS && SS.samplingMode !== gS && SS.updateSamplingMode(gS)
              }
              if (SS && HS.animations)
                for (let gS = 0; gS < HS.animations.length; gS++) {
                  const tS = HS.animations[gS],
                    bS = (0, qS.d)("BABYLON.Animation");
                  bS && SS.animations.push(bS.Parse(tS))
                }
              SS && SS._texture && (bS && !XS && SS._texture._setUniqueId(HS.internalTextureUniqueId), SS._texture.label = HS.internalTextureLabel)
            };
            return nS.b.Parse((() => {
              let bS = !0;
              if (HS.noMipmap && (bS = !1), HS.mirrorPlane) {
                const tS = SS._CreateMirror(HS.name, HS.renderTargetSize, gS, bS);
                return tS._waitingRenderList = HS.renderList, tS.mirrorPlane = kS.e.FromArray(HS.mirrorPlane), xS(tS), tS
              }
              if (HS.isRenderTarget && !HS.base64String) {
                let tS = null;
                if (HS.isCube) {
                  if (gS.reflectionProbes)
                    for (let SS = 0; SS < gS.reflectionProbes.length; SS++) {
                      const tS = gS.reflectionProbes[SS];
                      if (tS.name === HS.name) return tS.cubeTexture
                    }
                } else tS = SS._CreateRenderTargetTexture(HS.name, HS.renderTargetSize, gS, bS, HS._creationFlags ?? 0), tS._waitingRenderList = HS.renderList;
                return xS(tS), tS
              }
              if (HS.isVideo) {
                const XS = SS._CreateVideoTexture(tS + (HS.url || HS.name), tS + (HS.src || HS.url), gS, bS, HS.invertY, HS.samplingMode, HS.settings || {});
                return xS(XS), XS
              } {
                let NS;
                if ("string" === typeof HS.base64String && HS.base64String && !XS) {
                  const tS = {
                      buffer: HS.base64String,
                      noMipmap: !bS,
                      invertY: HS.invertY,
                      samplingMode: HS.samplingMode,
                      useSRGBBuffer: HS._useSRGBBuffer ?? !1,
                      creationFlags: HS._creationFlags ?? 0,
                      onLoad: () => {
                        xS(NS)
                      }
                    },
                    XS = HS.base64String,
                    qS = XS.startsWith("data:") ? XS.substring(5) : XS;
                  NS = SS.CreateFromBase64String("", qS, gS, tS), NS.name = HS.name
                } else {
                  let qS;
                  qS = HS.name && (HS.name.indexOf("://") > 0 || HS.name.startsWith("data:")) ? HS.name : tS + HS.name, HS.url && (HS.url.startsWith("data:") || SS.UseSerializedUrlIfAny) && (qS = HS.url);
                  const uS = {
                    noMipmap: !bS,
                    invertY: HS.invertY,
                    samplingMode: HS.samplingMode,
                    useSRGBBuffer: HS._useSRGBBuffer ?? !1,
                    creationFlags: HS._creationFlags ?? 0,
                    onLoad: () => {
                      xS(NS)
                    },
                    internalTexture: XS
                  };
                  NS = new SS(qS, gS, uS)
                }
                return NS
              }
            }), HS, gS)
          }
          static CreateFromBase64String(HS, gS, tS, bS, XS) {
            let xS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : SS.TRILINEAR_SAMPLINGMODE;
            return new SS("data:" + gS, tS, bS, XS, xS, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, HS, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(HS, gS, tS) {
            let bS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              XS = arguments.length > 4 ? arguments[4] : void 0,
              xS = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              NS = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : SS.TRILINEAR_SAMPLINGMODE,
              qS = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              uS = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              IS = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              fS = arguments.length > 10 ? arguments[10] : void 0,
              kS = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== HS.substring(0, 5) && (HS = "data:" + HS), new SS(HS, tS, XS, xS, NS, qS, uS, gS, bS, IS, void 0, void 0, fS, kS)
          }
        }, (() => {
          const XS = "function" === typeof Symbol && Symbol.metadata ? Object.create(vS[Symbol.metadata] ?? null) : void 0;
          HS = [(0, bS.M)()], gS = [(0, bS.M)()], KS = [(0, bS.M)()], PS = [(0, bS.M)()], QS = [(0, bS.M)()], DS = [(0, bS.M)()], wS = [(0, bS.M)()], hS = [(0, bS.M)()], ZS = [(0, bS.M)()], JS = [(0, bS.M)()], OS = [(0, bS.M)()], dS = [(0, bS.M)()], cS = [(0, bS.M)()], (0, tS.j)(SS, null, cS, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: SS => "isBlocking" in SS,
              get: SS => SS.isBlocking
            },
            metadata: XS
          }, null, ES), (0, tS.j)(null, null, HS, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: SS => "url" in SS,
              get: SS => SS.url,
              set: (SS, HS) => {
                SS.url = HS
              }
            },
            metadata: XS
          }, LS, YS), (0, tS.j)(null, null, gS, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: SS => "uOffset" in SS,
              get: SS => SS.uOffset,
              set: (SS, HS) => {
                SS.uOffset = HS
              }
            },
            metadata: XS
          }, AS, yS), (0, tS.j)(null, null, KS, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: SS => "vOffset" in SS,
              get: SS => SS.vOffset,
              set: (SS, HS) => {
                SS.vOffset = HS
              }
            },
            metadata: XS
          }, VS, iS), (0, tS.j)(null, null, PS, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: SS => "uScale" in SS,
              get: SS => SS.uScale,
              set: (SS, HS) => {
                SS.uScale = HS
              }
            },
            metadata: XS
          }, WS, zS), (0, tS.j)(null, null, QS, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: SS => "vScale" in SS,
              get: SS => SS.vScale,
              set: (SS, HS) => {
                SS.vScale = HS
              }
            },
            metadata: XS
          }, US, pS), (0, tS.j)(null, null, DS, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: SS => "uAng" in SS,
              get: SS => SS.uAng,
              set: (SS, HS) => {
                SS.uAng = HS
              }
            },
            metadata: XS
          }, sS, BS), (0, tS.j)(null, null, wS, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: SS => "vAng" in SS,
              get: SS => SS.vAng,
              set: (SS, HS) => {
                SS.vAng = HS
              }
            },
            metadata: XS
          }, MS, FS), (0, tS.j)(null, null, hS, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: SS => "wAng" in SS,
              get: SS => SS.wAng,
              set: (SS, HS) => {
                SS.wAng = HS
              }
            },
            metadata: XS
          }, RS, TS), (0, tS.j)(null, null, ZS, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: SS => "uRotationCenter" in SS,
              get: SS => SS.uRotationCenter,
              set: (SS, HS) => {
                SS.uRotationCenter = HS
              }
            },
            metadata: XS
          }, oS, lS), (0, tS.j)(null, null, JS, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: SS => "vRotationCenter" in SS,
              get: SS => SS.vRotationCenter,
              set: (SS, HS) => {
                SS.vRotationCenter = HS
              }
            },
            metadata: XS
          }, mS, eS), (0, tS.j)(null, null, OS, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: SS => "wRotationCenter" in SS,
              get: SS => SS.wRotationCenter,
              set: (SS, HS) => {
                SS.wRotationCenter = HS
              }
            },
            metadata: XS
          }, rS, SH), (0, tS.j)(null, null, dS, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: SS => "homogeneousRotationInUVTransform" in SS,
              get: SS => SS.homogeneousRotationInUVTransform,
              set: (SS, HS) => {
                SS.homogeneousRotationInUVTransform = HS
              }
            },
            metadata: XS
          }, HH, gH), XS && Object.defineProperty(SS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: XS
          })
        })(), SS.SerializeBuffers = !0, SS.ForceSerializeBuffers = !1, SS.OnTextureLoadErrorObservable = new XS.e, SS._SerializeInternalTextureUniqueId = !1, SS._CubeTextureParser = (SS, HS, gS) => {
          throw (0, uS.l)("CubeTexture")
        }, SS._CreateMirror = (SS, HS, gS, tS) => {
          throw (0, uS.l)("MirrorTexture")
        }, SS._CreateRenderTargetTexture = (SS, HS, gS, tS, bS) => {
          throw (0, uS.l)("RenderTargetTexture")
        }, SS.NEAREST_SAMPLINGMODE = 1, SS.NEAREST_NEAREST_MIPLINEAR = 8, SS.BILINEAR_SAMPLINGMODE = 2, SS.LINEAR_LINEAR_MIPNEAREST = 11, SS.TRILINEAR_SAMPLINGMODE = 3, SS.LINEAR_LINEAR_MIPLINEAR = 3, SS.NEAREST_NEAREST_MIPNEAREST = 4, SS.NEAREST_LINEAR_MIPNEAREST = 5, SS.NEAREST_LINEAR_MIPLINEAR = 6, SS.NEAREST_LINEAR = 7, SS.NEAREST_NEAREST = 1, SS.LINEAR_NEAREST_MIPNEAREST = 9, SS.LINEAR_NEAREST_MIPLINEAR = 10, SS.LINEAR_LINEAR = 2, SS.LINEAR_NEAREST = 12, SS.EXPLICIT_MODE = 0, SS.SPHERICAL_MODE = 1, SS.PLANAR_MODE = 2, SS.CUBIC_MODE = 3, SS.PROJECTION_MODE = 4, SS.SKYBOX_MODE = 5, SS.INVCUBIC_MODE = 6, SS.EQUIRECTANGULAR_MODE = 7, SS.FIXED_EQUIRECTANGULAR_MODE = 8, SS.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, SS.CLAMP_ADDRESSMODE = 0, SS.WRAP_ADDRESSMODE = 1, SS.MIRROR_ADDRESSMODE = 2, SS.UseSerializedUrlIfAny = !1, SS
      })(),
      QS = !1;

    function DS() {
      QS || (QS = !0, (0, qS.f)("BABYLON.Texture", PS), nS.b._TextureParser = PS.Parse)
    }
  },
  40062: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS
    });
    class tS {
      constructor(SS, HS) {
        this.width = SS, this.height = HS
      }
      toString() {
        return `{W: ${this.width}, H: ${this.height}}`
      }
      getClassName() {
        return "Size"
      }
      getHashCode() {
        let SS = 0 | this.width;
        return SS = 397 * SS ^ this.height, SS
      }
      dJ(SS) {
        this.width = SS.width, this.height = SS.height
      }
      I5(SS, HS) {
        return this.width = SS, this.height = HS, this
      }
      set(SS, HS) {
        return this.I5(SS, HS)
      }
      multiplyByFloats(SS, HS) {
        return new tS(this.width * SS, this.height * HS)
      }
      clone() {
        return new tS(this.width, this.height)
      }
      equals(SS) {
        return !!SS && (this.width === SS.width && this.height === SS.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new tS(0, 0)
      }
      add(SS) {
        return new tS(this.width + SS.width, this.height + SS.height)
      }
      subtract(SS) {
        return new tS(this.width - SS.width, this.height - SS.height)
      }
      scale(SS) {
        return new tS(this.width * SS, this.height * SS)
      }
      static Lerp(SS, HS, gS) {
        const bS = SS.width + (HS.width - SS.width) * gS,
          XS = SS.height + (HS.height - SS.height) * gS;
        return new tS(bS, XS)
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);