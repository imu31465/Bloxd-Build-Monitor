export const id = 226;
export const ids = [226];
export const modules = {
  38403: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => CF
    });
    let CF = !1
  },
  37963: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => QF
    });
    var CF = SF(37972),
      AF = SF(37974),
      uF = SF(35647),
      hF = SF(35623),
      bW = SF(35639),
      dF = SF(36308),
      PF = SF(37989);
    class RF {
      get wrapU() {
        return this._wrapU
      }
      set wrapU(FF) {
        this._wrapU = FF
      }
      get wrapV() {
        return this._wrapV
      }
      set wrapV(FF) {
        this._wrapV = FF
      }
      get coordinatesMode() {
        return 0
      }
      get isCube() {
        return !!this._texture && this._texture.isCube
      }
      set isCube(FF) {
        this._texture && (this._texture.isCube = FF)
      }
      get is3D() {
        return !!this._texture && this._texture.is3D
      }
      set is3D(FF) {
        this._texture && (this._texture.is3D = FF)
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray
      }
      set is2DArray(FF) {
        this._texture && (this._texture.is2DArray = FF)
      }
      getClassName() {
        return "ThinTexture"
      }
      static _IsRenderTargetWrapper(FF) {
        return void 0 !== FF?.shareDepth
      }
      constructor(FF) {
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = PF.d.Zero(), this._cachedBaseSize = PF.d.Zero(), this._initialSamplingMode = 2, this._texture = RF._IsRenderTargetWrapper(FF) ? FF.texture : FF, this._texture && (this._engine = this._texture.sC(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
      updateSamplingMode(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(FF, this._texture, this._texture.generateMipMaps && WF)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var iW, eF = SF(37994),
      EF = SF(37855);
    let QF = (() => {
      var FF;
      let WF, SF, PF, iW, EF, QF, rW, gW, tW, TF, aW, kW, qW, VF, NF, DF, LF, mW, OF, xW, ZF, oF, YF, MF, cW, GF = RF,
        zW = [],
        IF = [],
        fF = [],
        yW = [],
        sF = [],
        nF = [],
        HF = [],
        KF = [],
        wF = [],
        XF = [],
        UF = [],
        BF = [],
        jW = [],
        vW = [],
        JF = [],
        pF = [],
        lF = [],
        FW = [],
        WW = [],
        SW = [],
        CW = [],
        AW = [],
        uW = [],
        hW = [],
        bS = [],
        dW = [],
        PW = [],
        RW = [],
        iS = [],
        eW = [],
        EW = [];
      return FF = class extends GF {
        set hasAlpha(FF) {
          this._hasAlpha = FF
        }
        get hasAlpha() {
          return this._hasAlpha
        }
        set getAlphaFromRGB(FF) {
          this._getAlphaFromRGB !== FF && (this._getAlphaFromRGB = FF, this._scene && this._scene.markAllMaterialsAsDirty(1, (FF => FF.hasTexture(this))))
        }
        get getAlphaFromRGB() {
          return this._getAlphaFromRGB
        }
        set coordinatesIndex(FF) {
          this._coordinatesIndex !== FF && (this._coordinatesIndex = FF, this._scene && this._scene.markAllMaterialsAsDirty(1, (FF => FF.hasTexture(this))))
        }
        get coordinatesIndex() {
          return this._coordinatesIndex
        }
        set coordinatesMode(FF) {
          this._coordinatesMode !== FF && (this._coordinatesMode = FF, this._scene && this._scene.markAllMaterialsAsDirty(1, (FF => FF.hasTexture(this))))
        }
        get coordinatesMode() {
          return this._coordinatesMode
        }
        get wrapU() {
          return this._wrapU
        }
        set wrapU(FF) {
          this._wrapU = FF
        }
        get wrapV() {
          return this._wrapV
        }
        set wrapV(FF) {
          this._wrapV = FF
        }
        get isCube() {
          return this._texture ? this._texture.isCube : this._isCube
        }
        set isCube(FF) {
          this._texture ? this._texture.isCube = FF : this._isCube = FF
        }
        get is3D() {
          return !!this._texture && this._texture.is3D
        }
        set is3D(FF) {
          this._texture && (this._texture.is3D = FF)
        }
        get is2DArray() {
          return !!this._texture && this._texture.is2DArray
        }
        set is2DArray(FF) {
          this._texture && (this._texture.is2DArray = FF)
        }
        get gammaSpace() {
          return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
        }
        set gammaSpace(FF) {
          if (this._texture) {
            if (this._texture._gammaSpace === FF) return;
            this._texture._gammaSpace = FF
          } else {
            if (this._gammaSpace === FF) return;
            this._gammaSpace = FF
          }
          this.OWF()?.markAllMaterialsAsDirty(1, (FF => FF.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(FF) {
          FF !== this.isRGBD && (this._texture && (this._texture._isRGBD = FF), this.OWF()?.markAllMaterialsAsDirty(1, (FF => FF.hasTexture(this))))
        }
        get noMipmap() {
          return !1
        }
        get lodGenerationOffset() {
          return this._texture ? this._texture._lodGenerationOffset : 0
        }
        set lodGenerationOffset(FF) {
          this._texture && (this._texture._lodGenerationOffset = FF)
        }
        get lodGenerationScale() {
          return this._texture ? this._texture._lodGenerationScale : 0
        }
        set lodGenerationScale(FF) {
          this._texture && (this._texture._lodGenerationScale = FF)
        }
        get linearSpecularLOD() {
          return !!this._texture && this._texture._linearSpecularLOD
        }
        set linearSpecularLOD(FF) {
          this._texture && (this._texture._linearSpecularLOD = FF)
        }
        get irradianceTexture() {
          return this._texture ? this._texture._irradianceTexture : null
        }
        set irradianceTexture(FF) {
          this._texture && (this._texture._irradianceTexture = FF)
        }
        get uid() {
          return this._uid || (this._uid = (0, dF.b)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(FF) {
          this._onDisposeObserver && this.xSF.remove(this._onDisposeObserver), this._onDisposeObserver = this.xSF.add(FF)
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
        constructor(WF) {
          let SF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, CF.k)(this, zW), (0, CF.k)(this, IF, void 0)), this.name = ((0, CF.k)(this, fF), (0, CF.k)(this, yW, void 0)), this.displayName = ((0, CF.k)(this, sF), (0, CF.k)(this, nF, void 0)), this.metadata = ((0, CF.k)(this, HF), (0, CF.k)(this, KF, null)), this._internalMetadata = (0, CF.k)(this, wF), this.reservedDataStore = null, this._hasAlpha = (0, CF.k)(this, XF, !1), this._getAlphaFromRGB = ((0, CF.k)(this, UF), (0, CF.k)(this, BF, !1)), this.level = ((0, CF.k)(this, jW), (0, CF.k)(this, vW, 1)), this._coordinatesIndex = ((0, CF.k)(this, JF), (0, CF.k)(this, pF, 0)), this.optimizeUVAllocation = ((0, CF.k)(this, lF), (0, CF.k)(this, FW, !0)), this._coordinatesMode = ((0, CF.k)(this, WW), (0, CF.k)(this, SW, 0)), this.wrapR = ((0, CF.k)(this, CW), (0, CF.k)(this, AW, 1)), this.anisotropicFilteringLevel = ((0, CF.k)(this, uW), (0, CF.k)(this, hW, FF.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, CF.k)(this, bS), !1), this._gammaSpace = !0, this.invertZ = (0, CF.k)(this, dW, !1), this.lodLevelInAlpha = ((0, CF.k)(this, PW), (0, CF.k)(this, RW, !1)), this._dominantDirection = ((0, CF.k)(this, iS), null), this.isRenderTarget = (0, CF.k)(this, eW, !1), this._prefiltered = ((0, CF.k)(this, EW), !1), this._forceSerialize = !1, this.animations = [], this.xSF = new uF.b, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, WF ? FF._IsScene(WF) ? this._scene = WF : this._engine = WF : this._scene = bW.e.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.sC()), this._texture = SF, this._uid = null
        }
        OWF() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return hF.b.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return hF.b.IdentityReadOnly
        }
        getRefractionTextureMatrix() {
          return this.getReflectionTextureMatrix()
        }
        isReadyOrNotBlocking() {
          return !this.isBlocking || this.isReady() || this.loadingError
        }
        scale(FF) {}
        get canRescale() {
          return !1
        }
        _getFromCache(FF, WF, SF, CF, AF, uF) {
          const hF = this._getEngine();
          if (!hF) return null;
          const bW = hF._getUseSRGBBuffer(!!AF, WF),
            dF = hF.getLoadedTexturesCache();
          for (let PF = 0; PF < dF.length; PF++) {
            const hF = dF[PF];
            if ((void 0 === AF || bW === hF._useSRGBBuffer) && (void 0 === CF || CF === hF.invertY) && hF.url === FF && hF.generateMipMaps === !WF && (!SF || SF === hF.samplingMode) && (void 0 === uF || uF === hF.isCube)) return hF.incrementReferences(), hF
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
          const FF = this.OWF();
          FF && FF.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            CF = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            AF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            hF = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            bW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            dF = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const PF = this._getEngine();
          if (!PF) return null;
          const RF = this.getSize();
          let iW = RF.width,
            eF = RF.height;
          0 !== WF && (iW /= Math.pow(2, WF), eF /= Math.pow(2, WF), iW = Math.round(iW), eF = Math.round(eF)), bW = Math.min(iW, bW), dF = Math.min(eF, dF);
          try {
            return this._texture.isCube || this._texture.is2DArray ? PF._readTexturePixels(this._texture, bW, dF, FF, WF, SF, CF, AF, uF, hF) : PF._readTexturePixels(this._texture, bW, dF, -1, WF, SF, CF, AF, uF, hF)
          } catch (EF) {
            return null
          }
        }
        _readPixelsSync() {
          let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            CF = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            AF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const uF = this.getSize();
          let hF = uF.width,
            bW = uF.height;
          const dF = this._getEngine();
          if (!dF) return null;
          0 != WF && (hF /= Math.pow(2, WF), bW /= Math.pow(2, WF), hF = Math.round(hF), bW = Math.round(bW));
          try {
            return this._texture.isCube ? dF._readTexturePixelsSync(this._texture, hF, bW, FF, WF, SF, CF, AF) : dF._readTexturePixelsSync(this._texture, hF, bW, -1, WF, SF, CF, AF)
          } catch (PF) {
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
            const FF = this._scene.textures.indexOf(this);
            if (FF >= 0 && this._scene.textures.splice(FF, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
              const FF = this._parentContainer.textures.indexOf(this);
              FF > -1 && this._parentContainer.textures.splice(FF, 1), this._parentContainer = null
            }
          }
          this.xSF.notifyObservers(this), this.xSF.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !FF) return null;
          const WF = eF.e.Serialize(this);
          return eF.e.AppendSerializedAnimations(this, WF), WF
        }
        static WhenAllReady(FF, WF) {
          let SF = FF.length;
          if (0 !== SF)
            for (let CF = 0; CF < FF.length; CF++) {
              const AF = FF[CF];
              if (AF.isReady()) 0 === --SF && WF();
              else {
                const FF = AF.onLoadObservable;
                FF ? FF.addOnce((() => {
                  0 === --SF && WF()
                })) : 0 === --SF && WF()
              }
            } else WF()
        }
        static _IsScene(FF) {
          return "Scene" === FF.getClassName()
        }
      }, (() => {
        const uF = "function" === typeof Symbol && Symbol.metadata ? Object.create(GF[Symbol.metadata] ?? null) : void 0;
        WF = [(0, AF.H)()], SF = [(0, AF.H)()], PF = [(0, AF.H)()], iW = [(0, AF.H)()], EF = [(0, AF.H)("hasAlpha")], QF = [(0, AF.H)("getAlphaFromRGB")], rW = [(0, AF.H)()], gW = [(0, AF.H)("coordinatesIndex")], tW = [(0, AF.H)()], TF = [(0, AF.H)("coordinatesMode")], aW = [(0, AF.H)()], kW = [(0, AF.H)()], qW = [(0, AF.H)()], VF = [(0, AF.H)()], NF = [(0, AF.H)()], DF = [(0, AF.H)()], LF = [(0, AF.H)()], mW = [(0, AF.H)()], OF = [(0, AF.H)()], xW = [(0, AF.H)()], ZF = [(0, AF.H)()], oF = [(0, AF.H)()], YF = [(0, AF.H)()], MF = [(0, AF.C)()], cW = [(0, AF.H)()], (0, CF.j)(FF, null, aW, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: FF => "wrapU" in FF,
            get: FF => FF.wrapU
          },
          metadata: uF
        }, null, zW), (0, CF.j)(FF, null, kW, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: FF => "wrapV" in FF,
            get: FF => FF.wrapV
          },
          metadata: uF
        }, null, zW), (0, CF.j)(FF, null, NF, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: FF => "isCube" in FF,
            get: FF => FF.isCube
          },
          metadata: uF
        }, null, zW), (0, CF.j)(FF, null, DF, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: FF => "is3D" in FF,
            get: FF => FF.is3D
          },
          metadata: uF
        }, null, zW), (0, CF.j)(FF, null, LF, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: FF => "is2DArray" in FF,
            get: FF => FF.is2DArray
          },
          metadata: uF
        }, null, zW), (0, CF.j)(FF, null, mW, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: FF => "gammaSpace" in FF,
            get: FF => FF.gammaSpace
          },
          metadata: uF
        }, null, zW), (0, CF.j)(FF, null, ZF, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: FF => "lodGenerationOffset" in FF,
            get: FF => FF.lodGenerationOffset
          },
          metadata: uF
        }, null, zW), (0, CF.j)(FF, null, oF, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: FF => "lodGenerationScale" in FF,
            get: FF => FF.lodGenerationScale
          },
          metadata: uF
        }, null, zW), (0, CF.j)(FF, null, YF, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: FF => "linearSpecularLOD" in FF,
            get: FF => FF.linearSpecularLOD
          },
          metadata: uF
        }, null, zW), (0, CF.j)(FF, null, MF, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: FF => "irradianceTexture" in FF,
            get: FF => FF.irradianceTexture
          },
          metadata: uF
        }, null, zW), (0, CF.j)(null, null, WF, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: FF => "uniqueId" in FF,
            get: FF => FF.uniqueId,
            set: (FF, WF) => {
              FF.uniqueId = WF
            }
          },
          metadata: uF
        }, IF, fF), (0, CF.j)(null, null, SF, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: FF => "name" in FF,
            get: FF => FF.name,
            set: (FF, WF) => {
              FF.name = WF
            }
          },
          metadata: uF
        }, yW, sF), (0, CF.j)(null, null, PF, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: FF => "displayName" in FF,
            get: FF => FF.displayName,
            set: (FF, WF) => {
              FF.displayName = WF
            }
          },
          metadata: uF
        }, nF, HF), (0, CF.j)(null, null, iW, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: FF => "metadata" in FF,
            get: FF => FF.metadata,
            set: (FF, WF) => {
              FF.metadata = WF
            }
          },
          metadata: uF
        }, KF, wF), (0, CF.j)(null, null, EF, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: FF => "_hasAlpha" in FF,
            get: FF => FF._hasAlpha,
            set: (FF, WF) => {
              FF._hasAlpha = WF
            }
          },
          metadata: uF
        }, XF, UF), (0, CF.j)(null, null, QF, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: FF => "_getAlphaFromRGB" in FF,
            get: FF => FF._getAlphaFromRGB,
            set: (FF, WF) => {
              FF._getAlphaFromRGB = WF
            }
          },
          metadata: uF
        }, BF, jW), (0, CF.j)(null, null, rW, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: FF => "level" in FF,
            get: FF => FF.level,
            set: (FF, WF) => {
              FF.level = WF
            }
          },
          metadata: uF
        }, vW, JF), (0, CF.j)(null, null, gW, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: FF => "_coordinatesIndex" in FF,
            get: FF => FF._coordinatesIndex,
            set: (FF, WF) => {
              FF._coordinatesIndex = WF
            }
          },
          metadata: uF
        }, pF, lF), (0, CF.j)(null, null, tW, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: FF => "optimizeUVAllocation" in FF,
            get: FF => FF.optimizeUVAllocation,
            set: (FF, WF) => {
              FF.optimizeUVAllocation = WF
            }
          },
          metadata: uF
        }, FW, WW), (0, CF.j)(null, null, TF, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: FF => "_coordinatesMode" in FF,
            get: FF => FF._coordinatesMode,
            set: (FF, WF) => {
              FF._coordinatesMode = WF
            }
          },
          metadata: uF
        }, SW, CW), (0, CF.j)(null, null, qW, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: FF => "wrapR" in FF,
            get: FF => FF.wrapR,
            set: (FF, WF) => {
              FF.wrapR = WF
            }
          },
          metadata: uF
        }, AW, uW), (0, CF.j)(null, null, VF, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: FF => "anisotropicFilteringLevel" in FF,
            get: FF => FF.anisotropicFilteringLevel,
            set: (FF, WF) => {
              FF.anisotropicFilteringLevel = WF
            }
          },
          metadata: uF
        }, hW, bS), (0, CF.j)(null, null, OF, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: FF => "invertZ" in FF,
            get: FF => FF.invertZ,
            set: (FF, WF) => {
              FF.invertZ = WF
            }
          },
          metadata: uF
        }, dW, PW), (0, CF.j)(null, null, xW, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: FF => "lodLevelInAlpha" in FF,
            get: FF => FF.lodLevelInAlpha,
            set: (FF, WF) => {
              FF.lodLevelInAlpha = WF
            }
          },
          metadata: uF
        }, RW, iS), (0, CF.j)(null, null, cW, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: FF => "isRenderTarget" in FF,
            get: FF => FF.isRenderTarget,
            set: (FF, WF) => {
              FF.isRenderTarget = WF
            }
          },
          metadata: uF
        }, eW, EW), uF && Object.defineProperty(FF, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: uF
        })
      })(), FF.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, FF
    })();
    (iW = QF.prototype).forceSphericalPolynomialsRecompute ?? (iW.forceSphericalPolynomialsRecompute = (0, EF.j)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(QF.prototype, "sphericalPolynomial") || Object.defineProperty(QF.prototype, "sphericalPolynomial", (0, EF.f)("BaseTexture", "sphericalPolynomial"))
  },
  38448: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => qW,
      i: () => aW
    });
    var CF = SF(37972),
      AF = SF(37974),
      uF = SF(35647),
      hF = SF(35623),
      bW = SF(37963),
      dF = SF(35660),
      PF = SF(37855),
      RF = SF(37860),
      iW = SF(38074),
      eF = SF(36181),
      EF = SF(38027);

    function QF(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const CF = WF.width,
        AF = WF.height;
      if (FF instanceof Float32Array) {
        let WF = FF.byteLength / FF.BYTES_PER_ELEMENT;
        const SF = new Uint8Array(WF);
        for (; --WF >= 0;) {
          let CF = FF[WF];
          CF < 0 ? CF = 0 : CF > 1 && (CF = 1), SF[WF] = 255 * CF
        }
        FF = SF
      }
      const uF = document.createElement("canvas");
      uF.width = CF, uF.height = AF;
      const hF = uF.getContext("2d");
      if (!hF) return null;
      const bW = hF.createImageData(CF, AF);
      if (bW.data.set(FF), hF.putImageData(bW, 0, 0), SF) {
        const FF = document.createElement("canvas");
        FF.width = CF, FF.height = AF;
        const WF = FF.getContext("2d");
        return WF ? (WF.translate(0, AF), WF.scale(1, -1), WF.drawImage(uF, 0, 0), FF.toDataURL("image/png")) : null
      }
      return uF.toDataURL("image/png")
    }

    function rW(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const CF = FF.getInternalTexture();
      if (!CF) return null;
      const AF = FF._readPixelsSync(WF, SF);
      return AF ? QF(AF, FF.getSize(), CF.invertY) : null
    }
    async function gW(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const CF = FF.getInternalTexture();
      if (!CF) return null;
      const AF = await FF.readPixels(WF, SF);
      return AF ? QF(AF, FF.getSize(), CF.invertY) : null
    }
    var tW = SF(38403),
      TF = SF(37994);
    let aW = (() => {
        var FF;
        let WF, SF, QF, aW, kW, qW, VF, NF, DF, LF, mW, OF, xW, ZF = bW.d,
          oF = [],
          YF = [],
          MF = [],
          cW = [],
          GF = [],
          zW = [],
          IF = [],
          fF = [],
          yW = [],
          sF = [],
          nF = [],
          HF = [],
          KF = [],
          wF = [],
          XF = [],
          UF = [],
          BF = [],
          jW = [],
          vW = [],
          JF = [],
          pF = [],
          lF = [],
          FW = [],
          WW = [],
          SW = [];
        return FF = class extends ZF {
          static _CreateVideoTexture(WF, SF, CF) {
            arguments.length > 5 && void 0 !== arguments[5] || FF.TRILINEAR_SAMPLINGMODE;
            throw (0, PF.l)("VideoTexture")
          }
          get noMipmap() {
            return this._noMipmap
          }
          get mimeType() {
            return this._mimeType
          }
          set isBlocking(FF) {
            this._isBlocking = FF
          }
          get isBlocking() {
            return this._isBlocking
          }
          get invertY() {
            return this._invertY
          }
          constructor(WF, SF, AF, hF) {
            let bW, dF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : FF.TRILINEAR_SAMPLINGMODE,
              PF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              iW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              eF = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              EF = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              QF = arguments.length > 9 ? arguments[9] : void 0,
              rW = arguments.length > 10 ? arguments[10] : void 0,
              gW = arguments.length > 11 ? arguments[11] : void 0,
              TF = arguments.length > 12 ? arguments[12] : void 0,
              aW = arguments.length > 13 ? arguments[13] : void 0;
            super(SF), this.url = ((0, CF.k)(this, oF), (0, CF.k)(this, YF, null)), this.uOffset = ((0, CF.k)(this, MF), (0, CF.k)(this, cW, 0)), this.vOffset = ((0, CF.k)(this, GF), (0, CF.k)(this, zW, 0)), this.uScale = ((0, CF.k)(this, IF), (0, CF.k)(this, fF, 1)), this.vScale = ((0, CF.k)(this, yW), (0, CF.k)(this, sF, 1)), this.uAng = ((0, CF.k)(this, nF), (0, CF.k)(this, HF, 0)), this.vAng = ((0, CF.k)(this, KF), (0, CF.k)(this, wF, 0)), this.wAng = ((0, CF.k)(this, XF), (0, CF.k)(this, UF, 0)), this.uRotationCenter = ((0, CF.k)(this, BF), (0, CF.k)(this, jW, .5)), this.vRotationCenter = ((0, CF.k)(this, vW), (0, CF.k)(this, JF, .5)), this.wRotationCenter = ((0, CF.k)(this, pF), (0, CF.k)(this, lF, .5)), this.homogeneousRotationInUVTransform = ((0, CF.k)(this, FW), (0, CF.k)(this, WW, !1)), this.inspectableCustomProperties = ((0, CF.k)(this, SW), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new uF.b, this._isBlocking = !0, this.name = WF || "", this.url = WF;
            let kW = !1,
              qW = null,
              VF = !0;
            "object" === typeof AF && null !== AF ? (bW = AF.noMipmap ?? !1, hF = AF.invertY ?? !tW.b, dF = AF.samplingMode ?? FF.TRILINEAR_SAMPLINGMODE, PF = AF.onLoad ?? null, iW = AF.onError ?? null, eF = AF.buffer ?? null, EF = AF.deleteBuffer ?? !1, QF = AF.format, rW = AF.mimeType, gW = AF.loaderOptions, TF = AF.creationFlags, kW = AF.useSRGBBuffer ?? !1, qW = AF.internalTexture ?? null, VF = AF.gammaSpace ?? VF, aW = AF.forcedExtension ?? aW) : bW = !!AF, this._gammaSpace = VF, this._noMipmap = bW, this._invertY = void 0 === hF ? !tW.b : hF, this._initialSamplingMode = dF, this._buffer = eF, this._deleteBuffer = EF, this._mimeType = rW, this._loaderOptions = gW, this._creationFlags = TF, this._useSRGBBuffer = kW, this._forcedExtension = aW, void 0 !== QF && (this._format = QF);
            const NF = this.OWF(),
              DF = this._getEngine();
            if (!DF) return;
            DF.onBeforeTextureInitObservable.notifyObservers(this);
            const LF = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), PF && PF(), !this.isBlocking && NF && NF.resetCachedMaterial()
              },
              mW = (WF, SF) => {
                this._loadingError = !0, this._errorObject = {
                  message: WF,
                  exception: SF
                }, iW && iW(WF, SF), FF.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !qW) return this._delayedOnLoad = LF, void(this._delayedOnError = mW);
            if (this._texture = qW ?? this._getFromCache(this.url, bW, dF, this._invertY, kW, this.isCube), this._texture)
              if (this._texture.isReady) RF.c.SetImmediate((() => LF()));
              else {
                const FF = this._texture.onLoadedObservable.add(LF);
                this._texture.onErrorObservable.add((WF => {
                  mW(WF.message, WF.exception), this._texture?.onLoadedObservable.remove(FF)
                }))
              }
            else if (NF && NF.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = LF, this._delayedOnError = mW;
            else {
              try {
                this._texture = DF.createTexture(this.url, bW, this._invertY, NF, dF, LF, mW, this._buffer, void 0, this._format, this._forcedExtension, rW, gW, TF, kW)
              } catch (OF) {
                throw mW("error loading", OF), OF
              }
              EF && (this._buffer = null)
            }
          }
          updateURL(FF) {
            let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              SF = arguments.length > 2 ? arguments[2] : void 0,
              CF = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.OWF().markAllMaterialsAsDirty(1, (FF => FF.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = FF), this.url = FF, this._buffer = WF, this._forcedExtension = CF, this.delayLoadState = 4;
            const AF = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              AF ? AF() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), SF && SF()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const FF = this.OWF();
            if (!FF) return;
            let WF = this.url;
            !WF && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (WF = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(WF, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? RF.c.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = FF.sC().createTexture(WF, this._noMipmap, this._invertY, FF, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(FF, WF, SF, CF) {
            FF *= this._cachedUScale, WF *= this._cachedVScale, FF -= this.uRotationCenter * this._cachedUScale, WF -= this.vRotationCenter * this._cachedVScale, SF -= this.wRotationCenter, hF.r.TransformCoordinatesFromFloatsToRef(FF, WF, SF, this._rowGenerationMatrix, CF), CF.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, CF.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, CF.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * FF === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * FF, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = hF.b.Zero(), this._rowGenerationMatrix = new hF.b, this._t0 = hF.r.Zero(), this._t1 = hF.r.Zero(), this._t2 = hF.r.Zero()), hF.b.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (hF.b.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, hF.j.Matrix[0]), hF.b.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, hF.j.Matrix[1]), hF.b.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, hF.j.Matrix[2]), hF.b.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, hF.j.Matrix[3]), hF.j.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(hF.j.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(hF.j.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(hF.j.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.IPF(this._t0), this._t2.IPF(this._t0), hF.b.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const WF = this.OWF();
            if (!WF) return this._cachedTextureMatrix;
            const SF = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && SF !== this._cachedIdentity3x2 && WF.markAllMaterialsAsDirty(1, (FF => FF.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const WF = this.OWF();
            if (!WF) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== FF.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === WF.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = hF.b.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = hF.b.Zero());
            const SF = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case FF.PLANAR_MODE:
                hF.b.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case FF.PROJECTION_MODE: {
                hF.b.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const FF = WF.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = FF.updateFlag, FF.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                hF.b.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return SF && WF.markAllMaterialsAsDirty(1, (FF => FF.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const WF = {
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
            return TF.e.Clone((() => new FF(this._texture ? this._texture.url : null, this.OWF(), WF)), this)
          }
          serialize() {
            const WF = this.name;
            FF.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const SF = super.serialize(FF._SerializeInternalTextureUniqueId);
            if (!SF) return null;
            if (FF.SerializeBuffers || FF.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) SF.base64String = this._buffer, SF.name = SF.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const FF = this.mimeType || "image/png";
              SF.base64String = `data:${FF};base64,${(0,EF.j)(this._buffer)}`
            } else(FF.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (SF.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? rW(this) : gW(this));
            return SF.invertY = this._invertY, SF.samplingMode = this.samplingMode, SF._creationFlags = this._creationFlags, SF._useSRGBBuffer = this._useSRGBBuffer, FF._SerializeInternalTextureUniqueId && (SF.internalTextureUniqueId = this._texture?.uniqueId), SF.internalTextureLabel = this._texture?.label, SF.noMipmap = this._noMipmap, this.name = WF, SF
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(WF, SF, CF) {
            if (WF.customType) {
              const FF = iW.b.Instantiate(WF.customType).Parse(WF, SF, CF);
              return WF.samplingMode && FF.updateSamplingMode && FF._samplingMode && FF._samplingMode !== WF.samplingMode && FF.updateSamplingMode(WF.samplingMode), FF
            }
            if (WF.isCube && !WF.isRenderTarget) return FF._CubeTextureParser(WF, SF, CF);
            const AF = void 0 !== WF.internalTextureUniqueId;
            if (!WF.name && !WF.isRenderTarget && !AF) return null;
            let uF;
            if (AF) {
              const FF = SF.sC().getLoadedTexturesCache();
              for (const SF of FF)
                if (SF.uniqueId === WF.internalTextureUniqueId) {
                  uF = SF;
                  break
                }
            }
            const hF = FF => {
              if (FF && FF._texture && (FF._texture._cachedWrapU = null, FF._texture._cachedWrapV = null, FF._texture._cachedWrapR = null), WF.samplingMode) {
                const SF = WF.samplingMode;
                FF && FF.samplingMode !== SF && FF.updateSamplingMode(SF)
              }
              if (FF && WF.animations)
                for (let SF = 0; SF < WF.animations.length; SF++) {
                  const CF = WF.animations[SF],
                    AF = (0, dF.c)("BABYLON.Animation");
                  AF && FF.animations.push(AF.Parse(CF))
                }
              FF && FF._texture && (AF && !uF && FF._texture._setUniqueId(WF.internalTextureUniqueId), FF._texture.label = WF.internalTextureLabel)
            };
            return TF.e.Parse((() => {
              let AF = !0;
              if (WF.noMipmap && (AF = !1), WF.mirrorPlane) {
                const CF = FF._CreateMirror(WF.name, WF.renderTargetSize, SF, AF);
                return CF._waitingRenderList = WF.renderList, CF.mirrorPlane = eF.d.FromArray(WF.mirrorPlane), hF(CF), CF
              }
              if (WF.isRenderTarget && !WF.base64String) {
                let CF = null;
                if (WF.isCube) {
                  if (SF.reflectionProbes)
                    for (let FF = 0; FF < SF.reflectionProbes.length; FF++) {
                      const CF = SF.reflectionProbes[FF];
                      if (CF.name === WF.name) return CF.cubeTexture
                    }
                } else CF = FF._CreateRenderTargetTexture(WF.name, WF.renderTargetSize, SF, AF, WF._creationFlags ?? 0), CF._waitingRenderList = WF.renderList;
                return hF(CF), CF
              }
              if (WF.isVideo) {
                const uF = FF._CreateVideoTexture(CF + (WF.url || WF.name), CF + (WF.src || WF.url), SF, AF, WF.invertY, WF.samplingMode, WF.settings || {});
                return hF(uF), uF
              } {
                let bW;
                if ("string" === typeof WF.base64String && WF.base64String && !uF) {
                  const CF = {
                      buffer: WF.base64String,
                      noMipmap: !AF,
                      invertY: WF.invertY,
                      samplingMode: WF.samplingMode,
                      useSRGBBuffer: WF._useSRGBBuffer ?? !1,
                      creationFlags: WF._creationFlags ?? 0,
                      onLoad: () => {
                        hF(bW)
                      }
                    },
                    uF = WF.base64String,
                    dF = uF.startsWith("data:") ? uF.substring(5) : uF;
                  bW = FF.CreateFromBase64String("", dF, SF, CF), bW.name = WF.name
                } else {
                  let dF;
                  dF = WF.name && (WF.name.indexOf("://") > 0 || WF.name.startsWith("data:")) ? WF.name : CF + WF.name, WF.url && (WF.url.startsWith("data:") || FF.UseSerializedUrlIfAny) && (dF = WF.url);
                  const PF = {
                    noMipmap: !AF,
                    invertY: WF.invertY,
                    samplingMode: WF.samplingMode,
                    useSRGBBuffer: WF._useSRGBBuffer ?? !1,
                    creationFlags: WF._creationFlags ?? 0,
                    onLoad: () => {
                      hF(bW)
                    },
                    internalTexture: uF
                  };
                  bW = new FF(dF, SF, PF)
                }
                return bW
              }
            }), WF, SF)
          }
          static CreateFromBase64String(WF, SF, CF, AF, uF) {
            let hF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : FF.TRILINEAR_SAMPLINGMODE;
            return new FF("data:" + SF, CF, AF, uF, hF, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, WF, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(WF, SF, CF) {
            let AF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              uF = arguments.length > 4 ? arguments[4] : void 0,
              hF = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              bW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : FF.TRILINEAR_SAMPLINGMODE,
              dF = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              PF = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              RF = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              iW = arguments.length > 10 ? arguments[10] : void 0,
              eF = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== WF.substring(0, 5) && (WF = "data:" + WF), new FF(WF, CF, uF, hF, bW, dF, PF, SF, AF, RF, void 0, void 0, iW, eF)
          }
        }, (() => {
          const uF = "function" === typeof Symbol && Symbol.metadata ? Object.create(ZF[Symbol.metadata] ?? null) : void 0;
          WF = [(0, AF.H)()], SF = [(0, AF.H)()], QF = [(0, AF.H)()], aW = [(0, AF.H)()], kW = [(0, AF.H)()], qW = [(0, AF.H)()], VF = [(0, AF.H)()], NF = [(0, AF.H)()], DF = [(0, AF.H)()], LF = [(0, AF.H)()], mW = [(0, AF.H)()], OF = [(0, AF.H)()], xW = [(0, AF.H)()], (0, CF.j)(FF, null, xW, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: FF => "isBlocking" in FF,
              get: FF => FF.isBlocking
            },
            metadata: uF
          }, null, oF), (0, CF.j)(null, null, WF, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: FF => "url" in FF,
              get: FF => FF.url,
              set: (FF, WF) => {
                FF.url = WF
              }
            },
            metadata: uF
          }, YF, MF), (0, CF.j)(null, null, SF, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: FF => "uOffset" in FF,
              get: FF => FF.uOffset,
              set: (FF, WF) => {
                FF.uOffset = WF
              }
            },
            metadata: uF
          }, cW, GF), (0, CF.j)(null, null, QF, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: FF => "vOffset" in FF,
              get: FF => FF.vOffset,
              set: (FF, WF) => {
                FF.vOffset = WF
              }
            },
            metadata: uF
          }, zW, IF), (0, CF.j)(null, null, aW, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: FF => "uScale" in FF,
              get: FF => FF.uScale,
              set: (FF, WF) => {
                FF.uScale = WF
              }
            },
            metadata: uF
          }, fF, yW), (0, CF.j)(null, null, kW, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: FF => "vScale" in FF,
              get: FF => FF.vScale,
              set: (FF, WF) => {
                FF.vScale = WF
              }
            },
            metadata: uF
          }, sF, nF), (0, CF.j)(null, null, qW, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: FF => "uAng" in FF,
              get: FF => FF.uAng,
              set: (FF, WF) => {
                FF.uAng = WF
              }
            },
            metadata: uF
          }, HF, KF), (0, CF.j)(null, null, VF, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: FF => "vAng" in FF,
              get: FF => FF.vAng,
              set: (FF, WF) => {
                FF.vAng = WF
              }
            },
            metadata: uF
          }, wF, XF), (0, CF.j)(null, null, NF, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: FF => "wAng" in FF,
              get: FF => FF.wAng,
              set: (FF, WF) => {
                FF.wAng = WF
              }
            },
            metadata: uF
          }, UF, BF), (0, CF.j)(null, null, DF, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: FF => "uRotationCenter" in FF,
              get: FF => FF.uRotationCenter,
              set: (FF, WF) => {
                FF.uRotationCenter = WF
              }
            },
            metadata: uF
          }, jW, vW), (0, CF.j)(null, null, LF, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: FF => "vRotationCenter" in FF,
              get: FF => FF.vRotationCenter,
              set: (FF, WF) => {
                FF.vRotationCenter = WF
              }
            },
            metadata: uF
          }, JF, pF), (0, CF.j)(null, null, mW, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: FF => "wRotationCenter" in FF,
              get: FF => FF.wRotationCenter,
              set: (FF, WF) => {
                FF.wRotationCenter = WF
              }
            },
            metadata: uF
          }, lF, FW), (0, CF.j)(null, null, OF, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: FF => "homogeneousRotationInUVTransform" in FF,
              get: FF => FF.homogeneousRotationInUVTransform,
              set: (FF, WF) => {
                FF.homogeneousRotationInUVTransform = WF
              }
            },
            metadata: uF
          }, WW, SW), uF && Object.defineProperty(FF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uF
          })
        })(), FF.SerializeBuffers = !0, FF.ForceSerializeBuffers = !1, FF.OnTextureLoadErrorObservable = new uF.b, FF._SerializeInternalTextureUniqueId = !1, FF._CubeTextureParser = (FF, WF, SF) => {
          throw (0, PF.l)("CubeTexture")
        }, FF._CreateMirror = (FF, WF, SF, CF) => {
          throw (0, PF.l)("MirrorTexture")
        }, FF._CreateRenderTargetTexture = (FF, WF, SF, CF, AF) => {
          throw (0, PF.l)("RenderTargetTexture")
        }, FF.NEAREST_SAMPLINGMODE = 1, FF.NEAREST_NEAREST_MIPLINEAR = 8, FF.BILINEAR_SAMPLINGMODE = 2, FF.LINEAR_LINEAR_MIPNEAREST = 11, FF.TRILINEAR_SAMPLINGMODE = 3, FF.LINEAR_LINEAR_MIPLINEAR = 3, FF.NEAREST_NEAREST_MIPNEAREST = 4, FF.NEAREST_LINEAR_MIPNEAREST = 5, FF.NEAREST_LINEAR_MIPLINEAR = 6, FF.NEAREST_LINEAR = 7, FF.NEAREST_NEAREST = 1, FF.LINEAR_NEAREST_MIPNEAREST = 9, FF.LINEAR_NEAREST_MIPLINEAR = 10, FF.LINEAR_LINEAR = 2, FF.LINEAR_NEAREST = 12, FF.EXPLICIT_MODE = 0, FF.SPHERICAL_MODE = 1, FF.PLANAR_MODE = 2, FF.CUBIC_MODE = 3, FF.PROJECTION_MODE = 4, FF.SKYBOX_MODE = 5, FF.INVCUBIC_MODE = 6, FF.EQUIRECTANGULAR_MODE = 7, FF.FIXED_EQUIRECTANGULAR_MODE = 8, FF.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, FF.CLAMP_ADDRESSMODE = 0, FF.WRAP_ADDRESSMODE = 1, FF.MIRROR_ADDRESSMODE = 2, FF.UseSerializedUrlIfAny = !1, FF
      })(),
      kW = !1;

    function qW() {
      kW || (kW = !0, (0, dF.f)("BABYLON.Texture", aW), TF.e._TextureParser = aW.Parse)
    }
  },
  37989: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => CF
    });
    class CF {
      constructor(FF, WF) {
        this.width = FF, this.height = WF
      }
      toString() {
        return `{W: ${this.width}, H: ${this.height}}`
      }
      getClassName() {
        return "Size"
      }
      getHashCode() {
        let FF = 0 | this.width;
        return FF = 397 * FF ^ this.height, FF
      }
      fdF(FF) {
        this.width = FF.width, this.height = FF.height
      }
      FhF(FF, WF) {
        return this.width = FF, this.height = WF, this
      }
      set(FF, WF) {
        return this.FhF(FF, WF)
      }
      multiplyByFloats(FF, WF) {
        return new CF(this.width * FF, this.height * WF)
      }
      clone() {
        return new CF(this.width, this.height)
      }
      equals(FF) {
        return !!FF && (this.width === FF.width && this.height === FF.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new CF(0, 0)
      }
      add(FF) {
        return new CF(this.width + FF.width, this.height + FF.height)
      }
      subtract(FF) {
        return new CF(this.width - FF.width, this.height - FF.height)
      }
      scale(FF) {
        return new CF(this.width * FF, this.height * FF)
      }
      static Lerp(FF, WF, SF) {
        const AF = FF.width + (WF.width - FF.width) * SF,
          uF = FF.height + (WF.height - FF.height) * SF;
        return new CF(AF, uF)
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);