export const id = 264;
export const ids = [264];
export const modules = {
  40679: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => wQ
    });
    let wQ = !1
  },
  40253: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => jQ
    });
    var wQ = XQ(40260),
      qQ = XQ(40268),
      TQ = XQ(37399),
      zQ = XQ(37370),
      sQ = XQ(37392),
      FQ = XQ(38191),
      PQ = XQ(40277);
    class gQ {
      get wrapU() {
        return this._wrapU
      }
      set wrapU(QQ) {
        this._wrapU = QQ
      }
      get wrapV() {
        return this._wrapV
      }
      set wrapV(QQ) {
        this._wrapV = QQ
      }
      get coordinatesMode() {
        return 0
      }
      get isCube() {
        return !!this._texture && this._texture.isCube
      }
      set isCube(QQ) {
        this._texture && (this._texture.isCube = QQ)
      }
      get is3D() {
        return !!this._texture && this._texture.is3D
      }
      set is3D(QQ) {
        this._texture && (this._texture.is3D = QQ)
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray
      }
      set is2DArray(QQ) {
        this._texture && (this._texture.is2DArray = QQ)
      }
      getClassName() {
        return "ThinTexture"
      }
      static _IsRenderTargetWrapper(QQ) {
        return void 0 !== QQ?.shareDepth
      }
      constructor(QQ) {
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = PQ.e.Zero(), this._cachedBaseSize = PQ.e.Zero(), this._initialSamplingMode = 2, this._texture = gQ._IsRenderTargetWrapper(QQ) ? QQ.texture : QQ, this._texture && (this._engine = this._texture.Uj(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
      updateSamplingMode(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(QQ, this._texture, this._texture.generateMipMaps && WQ)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var JQ, rQ = XQ(40286),
      IQ = XQ(40153);
    let jQ = (() => {
      var QQ;
      let WQ, XQ, PQ, JQ, IQ, jQ, BQ, yQ, VQ, DQ, pQ, GQ, UQ, bQ, vQ, dQ, HQ, aQ, lQ, hQ, iQ, cQ, AQ, RQ, EQ, CQ = gQ,
        uQ = [],
        LQ = [],
        kQ = [],
        fQ = [],
        SQ = [],
        tQ = [],
        oQ = [],
        eQ = [],
        nQ = [],
        xQ = [],
        YQ = [],
        NQ = [],
        ZQ = [],
        OQ = [],
        KQ = [],
        mQ = [],
        MQ = [],
        QW = [],
        WW = [],
        XW = [],
        wW = [],
        qW = [],
        TW = [],
        zW = [],
        sW = [],
        FW = [],
        PW = [],
        gW = [],
        JW = [],
        rW = [],
        IW = [];
      return QQ = class extends CQ {
        set hasAlpha(QQ) {
          this._hasAlpha = QQ
        }
        get hasAlpha() {
          return this._hasAlpha
        }
        set getAlphaFromRGB(QQ) {
          this._getAlphaFromRGB !== QQ && (this._getAlphaFromRGB = QQ, this._scene && this._scene.markAllMaterialsAsDirty(1, (QQ => QQ.hasTexture(this))))
        }
        get getAlphaFromRGB() {
          return this._getAlphaFromRGB
        }
        set coordinatesIndex(QQ) {
          this._coordinatesIndex !== QQ && (this._coordinatesIndex = QQ, this._scene && this._scene.markAllMaterialsAsDirty(1, (QQ => QQ.hasTexture(this))))
        }
        get coordinatesIndex() {
          return this._coordinatesIndex
        }
        set coordinatesMode(QQ) {
          this._coordinatesMode !== QQ && (this._coordinatesMode = QQ, this._scene && this._scene.markAllMaterialsAsDirty(1, (QQ => QQ.hasTexture(this))))
        }
        get coordinatesMode() {
          return this._coordinatesMode
        }
        get wrapU() {
          return this._wrapU
        }
        set wrapU(QQ) {
          this._wrapU = QQ
        }
        get wrapV() {
          return this._wrapV
        }
        set wrapV(QQ) {
          this._wrapV = QQ
        }
        get isCube() {
          return this._texture ? this._texture.isCube : this._isCube
        }
        set isCube(QQ) {
          this._texture ? this._texture.isCube = QQ : this._isCube = QQ
        }
        get is3D() {
          return !!this._texture && this._texture.is3D
        }
        set is3D(QQ) {
          this._texture && (this._texture.is3D = QQ)
        }
        get is2DArray() {
          return !!this._texture && this._texture.is2DArray
        }
        set is2DArray(QQ) {
          this._texture && (this._texture.is2DArray = QQ)
        }
        get gammaSpace() {
          return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
        }
        set gammaSpace(QQ) {
          if (this._texture) {
            if (this._texture._gammaSpace === QQ) return;
            this._texture._gammaSpace = QQ
          } else {
            if (this._gammaSpace === QQ) return;
            this._gammaSpace = QQ
          }
          this.sE()?.markAllMaterialsAsDirty(1, (QQ => QQ.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(QQ) {
          QQ !== this.isRGBD && (this._texture && (this._texture._isRGBD = QQ), this.sE()?.markAllMaterialsAsDirty(1, (QQ => QQ.hasTexture(this))))
        }
        get noMipmap() {
          return !1
        }
        get lodGenerationOffset() {
          return this._texture ? this._texture._lodGenerationOffset : 0
        }
        set lodGenerationOffset(QQ) {
          this._texture && (this._texture._lodGenerationOffset = QQ)
        }
        get lodGenerationScale() {
          return this._texture ? this._texture._lodGenerationScale : 0
        }
        set lodGenerationScale(QQ) {
          this._texture && (this._texture._lodGenerationScale = QQ)
        }
        get linearSpecularLOD() {
          return !!this._texture && this._texture._linearSpecularLOD
        }
        set linearSpecularLOD(QQ) {
          this._texture && (this._texture._linearSpecularLOD = QQ)
        }
        get irradianceTexture() {
          return this._texture ? this._texture._irradianceTexture : null
        }
        set irradianceTexture(QQ) {
          this._texture && (this._texture._irradianceTexture = QQ)
        }
        get uid() {
          return this._uid || (this._uid = (0, FQ.d)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(QQ) {
          this._onDisposeObserver && this.yE.remove(this._onDisposeObserver), this._onDisposeObserver = this.yE.add(QQ)
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
        constructor(WQ) {
          let XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, wQ.n)(this, uQ), (0, wQ.n)(this, LQ, void 0)), this.name = ((0, wQ.n)(this, kQ), (0, wQ.n)(this, fQ, void 0)), this.displayName = ((0, wQ.n)(this, SQ), (0, wQ.n)(this, tQ, void 0)), this.metadata = ((0, wQ.n)(this, oQ), (0, wQ.n)(this, eQ, null)), this._internalMetadata = (0, wQ.n)(this, nQ), this.reservedDataStore = null, this._hasAlpha = (0, wQ.n)(this, xQ, !1), this._getAlphaFromRGB = ((0, wQ.n)(this, YQ), (0, wQ.n)(this, NQ, !1)), this.level = ((0, wQ.n)(this, ZQ), (0, wQ.n)(this, OQ, 1)), this._coordinatesIndex = ((0, wQ.n)(this, KQ), (0, wQ.n)(this, mQ, 0)), this.optimizeUVAllocation = ((0, wQ.n)(this, MQ), (0, wQ.n)(this, QW, !0)), this._coordinatesMode = ((0, wQ.n)(this, WW), (0, wQ.n)(this, XW, 0)), this.wrapR = ((0, wQ.n)(this, wW), (0, wQ.n)(this, qW, 1)), this.anisotropicFilteringLevel = ((0, wQ.n)(this, TW), (0, wQ.n)(this, zW, QQ.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, wQ.n)(this, sW), !1), this._gammaSpace = !0, this.invertZ = (0, wQ.n)(this, FW, !1), this.lodLevelInAlpha = ((0, wQ.n)(this, PW), (0, wQ.n)(this, gW, !1)), this._dominantDirection = ((0, wQ.n)(this, JW), null), this.isRenderTarget = (0, wQ.n)(this, rW, !1), this._prefiltered = ((0, wQ.n)(this, IW), !1), this._forceSerialize = !1, this.animations = [], this.yE = new TQ.b, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, WQ ? QQ._IsScene(WQ) ? this._scene = WQ : this._engine = WQ : this._scene = sQ.d.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.Uj()), this._texture = XQ, this._uid = null
        }
        sE() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return zQ.e.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return zQ.e.IdentityReadOnly
        }
        getRefractionTextureMatrix() {
          return this.getReflectionTextureMatrix()
        }
        isReadyOrNotBlocking() {
          return !this.isBlocking || this.isReady() || this.loadingError
        }
        scale(QQ) {}
        get canRescale() {
          return !1
        }
        _getFromCache(QQ, WQ, XQ, wQ, qQ, TQ) {
          const zQ = this._getEngine();
          if (!zQ) return null;
          const sQ = zQ._getUseSRGBBuffer(!!qQ, WQ),
            FQ = zQ.getLoadedTexturesCache();
          for (let PQ = 0; PQ < FQ.length; PQ++) {
            const zQ = FQ[PQ];
            if ((void 0 === qQ || sQ === zQ._useSRGBBuffer) && (void 0 === wQ || wQ === zQ.invertY) && zQ.url === QQ && zQ.generateMipMaps === !WQ && (!XQ || XQ === zQ.samplingMode) && (void 0 === TQ || TQ === zQ.isCube)) return zQ.incrementReferences(), zQ
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
          const QQ = this.sE();
          QQ && QQ.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            wQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            zQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            sQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            FQ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const PQ = this._getEngine();
          if (!PQ) return null;
          const gQ = this.getSize();
          let JQ = gQ.width,
            rQ = gQ.height;
          0 !== WQ && (JQ /= Math.pow(2, WQ), rQ /= Math.pow(2, WQ), JQ = Math.round(JQ), rQ = Math.round(rQ)), sQ = Math.min(JQ, sQ), FQ = Math.min(rQ, FQ);
          try {
            return this._texture.isCube || this._texture.is2DArray ? PQ._readTexturePixels(this._texture, sQ, FQ, QQ, WQ, XQ, wQ, qQ, TQ, zQ) : PQ._readTexturePixels(this._texture, sQ, FQ, -1, WQ, XQ, wQ, qQ, TQ, zQ)
          } catch (IQ) {
            return null
          }
        }
        _readPixelsSync() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            wQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const TQ = this.getSize();
          let zQ = TQ.width,
            sQ = TQ.height;
          const FQ = this._getEngine();
          if (!FQ) return null;
          0 != WQ && (zQ /= Math.pow(2, WQ), sQ /= Math.pow(2, WQ), zQ = Math.round(zQ), sQ = Math.round(sQ));
          try {
            return this._texture.isCube ? FQ._readTexturePixelsSync(this._texture, zQ, sQ, QQ, WQ, XQ, wQ, qQ) : FQ._readTexturePixelsSync(this._texture, zQ, sQ, -1, WQ, XQ, wQ, qQ)
          } catch (PQ) {
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
            const QQ = this._scene.textures.indexOf(this);
            if (QQ >= 0 && this._scene.textures.splice(QQ, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
              const QQ = this._parentContainer.textures.indexOf(this);
              QQ > -1 && this._parentContainer.textures.splice(QQ, 1), this._parentContainer = null
            }
          }
          this.yE.notifyObservers(this), this.yE.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !QQ) return null;
          const WQ = rQ.b.Serialize(this);
          return rQ.b.AppendSerializedAnimations(this, WQ), WQ
        }
        static WhenAllReady(QQ, WQ) {
          let XQ = QQ.length;
          if (0 !== XQ)
            for (let wQ = 0; wQ < QQ.length; wQ++) {
              const qQ = QQ[wQ];
              if (qQ.isReady()) 0 === --XQ && WQ();
              else {
                const QQ = qQ.onLoadObservable;
                QQ ? QQ.addOnce((() => {
                  0 === --XQ && WQ()
                })) : 0 === --XQ && WQ()
              }
            } else WQ()
        }
        static _IsScene(QQ) {
          return "Scene" === QQ.getClassName()
        }
      }, (() => {
        const TQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(CQ[Symbol.metadata] ?? null) : void 0;
        WQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], PQ = [(0, qQ.I)()], JQ = [(0, qQ.I)()], IQ = [(0, qQ.I)("hasAlpha")], jQ = [(0, qQ.I)("getAlphaFromRGB")], BQ = [(0, qQ.I)()], yQ = [(0, qQ.I)("coordinatesIndex")], VQ = [(0, qQ.I)()], DQ = [(0, qQ.I)("coordinatesMode")], pQ = [(0, qQ.I)()], GQ = [(0, qQ.I)()], UQ = [(0, qQ.I)()], bQ = [(0, qQ.I)()], vQ = [(0, qQ.I)()], dQ = [(0, qQ.I)()], HQ = [(0, qQ.I)()], aQ = [(0, qQ.I)()], lQ = [(0, qQ.I)()], hQ = [(0, qQ.I)()], iQ = [(0, qQ.I)()], cQ = [(0, qQ.I)()], AQ = [(0, qQ.I)()], RQ = [(0, qQ.z)()], EQ = [(0, qQ.I)()], (0, wQ.k)(QQ, null, pQ, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wrapU" in QQ,
            get: QQ => QQ.wrapU
          },
          metadata: TQ
        }, null, uQ), (0, wQ.k)(QQ, null, GQ, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wrapV" in QQ,
            get: QQ => QQ.wrapV
          },
          metadata: TQ
        }, null, uQ), (0, wQ.k)(QQ, null, vQ, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: QQ => "isCube" in QQ,
            get: QQ => QQ.isCube
          },
          metadata: TQ
        }, null, uQ), (0, wQ.k)(QQ, null, dQ, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: QQ => "is3D" in QQ,
            get: QQ => QQ.is3D
          },
          metadata: TQ
        }, null, uQ), (0, wQ.k)(QQ, null, HQ, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: QQ => "is2DArray" in QQ,
            get: QQ => QQ.is2DArray
          },
          metadata: TQ
        }, null, uQ), (0, wQ.k)(QQ, null, aQ, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: QQ => "gammaSpace" in QQ,
            get: QQ => QQ.gammaSpace
          },
          metadata: TQ
        }, null, uQ), (0, wQ.k)(QQ, null, iQ, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: QQ => "lodGenerationOffset" in QQ,
            get: QQ => QQ.lodGenerationOffset
          },
          metadata: TQ
        }, null, uQ), (0, wQ.k)(QQ, null, cQ, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: QQ => "lodGenerationScale" in QQ,
            get: QQ => QQ.lodGenerationScale
          },
          metadata: TQ
        }, null, uQ), (0, wQ.k)(QQ, null, AQ, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: QQ => "linearSpecularLOD" in QQ,
            get: QQ => QQ.linearSpecularLOD
          },
          metadata: TQ
        }, null, uQ), (0, wQ.k)(QQ, null, RQ, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "irradianceTexture" in QQ,
            get: QQ => QQ.irradianceTexture
          },
          metadata: TQ
        }, null, uQ), (0, wQ.k)(null, null, WQ, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: QQ => "uniqueId" in QQ,
            get: QQ => QQ.uniqueId,
            set: (QQ, WQ) => {
              QQ.uniqueId = WQ
            }
          },
          metadata: TQ
        }, LQ, kQ), (0, wQ.k)(null, null, XQ, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: QQ => "name" in QQ,
            get: QQ => QQ.name,
            set: (QQ, WQ) => {
              QQ.name = WQ
            }
          },
          metadata: TQ
        }, fQ, SQ), (0, wQ.k)(null, null, PQ, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: QQ => "displayName" in QQ,
            get: QQ => QQ.displayName,
            set: (QQ, WQ) => {
              QQ.displayName = WQ
            }
          },
          metadata: TQ
        }, tQ, oQ), (0, wQ.k)(null, null, JQ, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: QQ => "metadata" in QQ,
            get: QQ => QQ.metadata,
            set: (QQ, WQ) => {
              QQ.metadata = WQ
            }
          },
          metadata: TQ
        }, eQ, nQ), (0, wQ.k)(null, null, IQ, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_hasAlpha" in QQ,
            get: QQ => QQ._hasAlpha,
            set: (QQ, WQ) => {
              QQ._hasAlpha = WQ
            }
          },
          metadata: TQ
        }, xQ, YQ), (0, wQ.k)(null, null, jQ, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_getAlphaFromRGB" in QQ,
            get: QQ => QQ._getAlphaFromRGB,
            set: (QQ, WQ) => {
              QQ._getAlphaFromRGB = WQ
            }
          },
          metadata: TQ
        }, NQ, ZQ), (0, wQ.k)(null, null, BQ, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: QQ => "level" in QQ,
            get: QQ => QQ.level,
            set: (QQ, WQ) => {
              QQ.level = WQ
            }
          },
          metadata: TQ
        }, OQ, KQ), (0, wQ.k)(null, null, yQ, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_coordinatesIndex" in QQ,
            get: QQ => QQ._coordinatesIndex,
            set: (QQ, WQ) => {
              QQ._coordinatesIndex = WQ
            }
          },
          metadata: TQ
        }, mQ, MQ), (0, wQ.k)(null, null, VQ, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: QQ => "optimizeUVAllocation" in QQ,
            get: QQ => QQ.optimizeUVAllocation,
            set: (QQ, WQ) => {
              QQ.optimizeUVAllocation = WQ
            }
          },
          metadata: TQ
        }, QW, WW), (0, wQ.k)(null, null, DQ, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_coordinatesMode" in QQ,
            get: QQ => QQ._coordinatesMode,
            set: (QQ, WQ) => {
              QQ._coordinatesMode = WQ
            }
          },
          metadata: TQ
        }, XW, wW), (0, wQ.k)(null, null, UQ, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wrapR" in QQ,
            get: QQ => QQ.wrapR,
            set: (QQ, WQ) => {
              QQ.wrapR = WQ
            }
          },
          metadata: TQ
        }, qW, TW), (0, wQ.k)(null, null, bQ, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: QQ => "anisotropicFilteringLevel" in QQ,
            get: QQ => QQ.anisotropicFilteringLevel,
            set: (QQ, WQ) => {
              QQ.anisotropicFilteringLevel = WQ
            }
          },
          metadata: TQ
        }, zW, sW), (0, wQ.k)(null, null, lQ, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: QQ => "invertZ" in QQ,
            get: QQ => QQ.invertZ,
            set: (QQ, WQ) => {
              QQ.invertZ = WQ
            }
          },
          metadata: TQ
        }, FW, PW), (0, wQ.k)(null, null, hQ, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: QQ => "lodLevelInAlpha" in QQ,
            get: QQ => QQ.lodLevelInAlpha,
            set: (QQ, WQ) => {
              QQ.lodLevelInAlpha = WQ
            }
          },
          metadata: TQ
        }, gW, JW), (0, wQ.k)(null, null, EQ, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: QQ => "isRenderTarget" in QQ,
            get: QQ => QQ.isRenderTarget,
            set: (QQ, WQ) => {
              QQ.isRenderTarget = WQ
            }
          },
          metadata: TQ
        }, rW, IW), TQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: TQ
        })
      })(), QQ.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, QQ
    })();
    (JQ = jQ.prototype).forceSphericalPolynomialsRecompute ?? (JQ.forceSphericalPolynomialsRecompute = (0, IQ.h)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(jQ.prototype, "sphericalPolynomial") || Object.defineProperty(jQ.prototype, "sphericalPolynomial", (0, IQ.g)("BaseTexture", "sphericalPolynomial"))
  },
  40724: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => UQ,
      g: () => pQ
    });
    var wQ = XQ(40260),
      qQ = XQ(40268),
      TQ = XQ(37399),
      zQ = XQ(37370),
      sQ = XQ(40253),
      FQ = XQ(37418),
      PQ = XQ(40153),
      gQ = XQ(40164),
      JQ = XQ(40363),
      rQ = XQ(38047),
      IQ = XQ(40327);

    function jQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const wQ = WQ.width,
        qQ = WQ.height;
      if (QQ instanceof Float32Array) {
        let WQ = QQ.byteLength / QQ.BYTES_PER_ELEMENT;
        const XQ = new Uint8Array(WQ);
        for (; --WQ >= 0;) {
          let wQ = QQ[WQ];
          wQ < 0 ? wQ = 0 : wQ > 1 && (wQ = 1), XQ[WQ] = 255 * wQ
        }
        QQ = XQ
      }
      const TQ = document.createElement("canvas");
      TQ.width = wQ, TQ.height = qQ;
      const zQ = TQ.getContext("2d");
      if (!zQ) return null;
      const sQ = zQ.createImageData(wQ, qQ);
      if (sQ.data.set(QQ), zQ.putImageData(sQ, 0, 0), XQ) {
        const QQ = document.createElement("canvas");
        QQ.width = wQ, QQ.height = qQ;
        const WQ = QQ.getContext("2d");
        return WQ ? (WQ.translate(0, qQ), WQ.scale(1, -1), WQ.drawImage(TQ, 0, 0), QQ.toDataURL("image/png")) : null
      }
      return TQ.toDataURL("image/png")
    }

    function BQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const wQ = QQ.getInternalTexture();
      if (!wQ) return null;
      const qQ = QQ._readPixelsSync(WQ, XQ);
      return qQ ? jQ(qQ, QQ.getSize(), wQ.invertY) : null
    }
    async function yQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const wQ = QQ.getInternalTexture();
      if (!wQ) return null;
      const qQ = await QQ.readPixels(WQ, XQ);
      return qQ ? jQ(qQ, QQ.getSize(), wQ.invertY) : null
    }
    var VQ = XQ(40679),
      DQ = XQ(40286);
    let pQ = (() => {
        var QQ;
        let WQ, XQ, jQ, pQ, GQ, UQ, bQ, vQ, dQ, HQ, aQ, lQ, hQ, iQ = sQ.c,
          cQ = [],
          AQ = [],
          RQ = [],
          EQ = [],
          CQ = [],
          uQ = [],
          LQ = [],
          kQ = [],
          fQ = [],
          SQ = [],
          tQ = [],
          oQ = [],
          eQ = [],
          nQ = [],
          xQ = [],
          YQ = [],
          NQ = [],
          ZQ = [],
          OQ = [],
          KQ = [],
          mQ = [],
          MQ = [],
          QW = [],
          WW = [],
          XW = [];
        return QQ = class extends iQ {
          static _CreateVideoTexture(WQ, XQ, wQ) {
            arguments.length > 5 && void 0 !== arguments[5] || QQ.TRILINEAR_SAMPLINGMODE;
            throw (0, PQ.i)("VideoTexture")
          }
          get noMipmap() {
            return this._noMipmap
          }
          get mimeType() {
            return this._mimeType
          }
          set isBlocking(QQ) {
            this._isBlocking = QQ
          }
          get isBlocking() {
            return this._isBlocking
          }
          get invertY() {
            return this._invertY
          }
          constructor(WQ, XQ, qQ, zQ) {
            let sQ, FQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : QQ.TRILINEAR_SAMPLINGMODE,
              PQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              JQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              rQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              IQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              jQ = arguments.length > 9 ? arguments[9] : void 0,
              BQ = arguments.length > 10 ? arguments[10] : void 0,
              yQ = arguments.length > 11 ? arguments[11] : void 0,
              DQ = arguments.length > 12 ? arguments[12] : void 0,
              pQ = arguments.length > 13 ? arguments[13] : void 0;
            super(XQ), this.url = ((0, wQ.n)(this, cQ), (0, wQ.n)(this, AQ, null)), this.uOffset = ((0, wQ.n)(this, RQ), (0, wQ.n)(this, EQ, 0)), this.vOffset = ((0, wQ.n)(this, CQ), (0, wQ.n)(this, uQ, 0)), this.uScale = ((0, wQ.n)(this, LQ), (0, wQ.n)(this, kQ, 1)), this.vScale = ((0, wQ.n)(this, fQ), (0, wQ.n)(this, SQ, 1)), this.uAng = ((0, wQ.n)(this, tQ), (0, wQ.n)(this, oQ, 0)), this.vAng = ((0, wQ.n)(this, eQ), (0, wQ.n)(this, nQ, 0)), this.wAng = ((0, wQ.n)(this, xQ), (0, wQ.n)(this, YQ, 0)), this.uRotationCenter = ((0, wQ.n)(this, NQ), (0, wQ.n)(this, ZQ, .5)), this.vRotationCenter = ((0, wQ.n)(this, OQ), (0, wQ.n)(this, KQ, .5)), this.wRotationCenter = ((0, wQ.n)(this, mQ), (0, wQ.n)(this, MQ, .5)), this.homogeneousRotationInUVTransform = ((0, wQ.n)(this, QW), (0, wQ.n)(this, WW, !1)), this.inspectableCustomProperties = ((0, wQ.n)(this, XW), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new TQ.b, this._isBlocking = !0, this.name = WQ || "", this.url = WQ;
            let GQ = !1,
              UQ = null,
              bQ = !0;
            "object" === typeof qQ && null !== qQ ? (sQ = qQ.noMipmap ?? !1, zQ = qQ.invertY ?? !VQ.e, FQ = qQ.samplingMode ?? QQ.TRILINEAR_SAMPLINGMODE, PQ = qQ.onLoad ?? null, JQ = qQ.onError ?? null, rQ = qQ.buffer ?? null, IQ = qQ.deleteBuffer ?? !1, jQ = qQ.format, BQ = qQ.mimeType, yQ = qQ.loaderOptions, DQ = qQ.creationFlags, GQ = qQ.useSRGBBuffer ?? !1, UQ = qQ.internalTexture ?? null, bQ = qQ.gammaSpace ?? bQ, pQ = qQ.forcedExtension ?? pQ) : sQ = !!qQ, this._gammaSpace = bQ, this._noMipmap = sQ, this._invertY = void 0 === zQ ? !VQ.e : zQ, this._initialSamplingMode = FQ, this._buffer = rQ, this._deleteBuffer = IQ, this._mimeType = BQ, this._loaderOptions = yQ, this._creationFlags = DQ, this._useSRGBBuffer = GQ, this._forcedExtension = pQ, void 0 !== jQ && (this._format = jQ);
            const vQ = this.sE(),
              dQ = this._getEngine();
            if (!dQ) return;
            dQ.onBeforeTextureInitObservable.notifyObservers(this);
            const HQ = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), PQ && PQ(), !this.isBlocking && vQ && vQ.resetCachedMaterial()
              },
              aQ = (WQ, XQ) => {
                this._loadingError = !0, this._errorObject = {
                  message: WQ,
                  exception: XQ
                }, JQ && JQ(WQ, XQ), QQ.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !UQ) return this._delayedOnLoad = HQ, void(this._delayedOnError = aQ);
            if (this._texture = UQ ?? this._getFromCache(this.url, sQ, FQ, this._invertY, GQ, this.isCube), this._texture)
              if (this._texture.isReady) gQ.b.SetImmediate((() => HQ()));
              else {
                const QQ = this._texture.onLoadedObservable.add(HQ);
                this._texture.onErrorObservable.add((WQ => {
                  aQ(WQ.message, WQ.exception), this._texture?.onLoadedObservable.remove(QQ)
                }))
              }
            else if (vQ && vQ.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = HQ, this._delayedOnError = aQ;
            else {
              try {
                this._texture = dQ.createTexture(this.url, sQ, this._invertY, vQ, FQ, HQ, aQ, this._buffer, void 0, this._format, this._forcedExtension, BQ, yQ, DQ, GQ)
              } catch (lQ) {
                throw aQ("error loading", lQ), lQ
              }
              IQ && (this._buffer = null)
            }
          }
          updateURL(QQ) {
            let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              XQ = arguments.length > 2 ? arguments[2] : void 0,
              wQ = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.sE().markAllMaterialsAsDirty(1, (QQ => QQ.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = QQ), this.url = QQ, this._buffer = WQ, this._forcedExtension = wQ, this.delayLoadState = 4;
            const qQ = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              qQ ? qQ() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), XQ && XQ()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const QQ = this.sE();
            if (!QQ) return;
            let WQ = this.url;
            !WQ && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (WQ = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(WQ, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? gQ.b.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = QQ.Uj().createTexture(WQ, this._noMipmap, this._invertY, QQ, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(QQ, WQ, XQ, wQ) {
            QQ *= this._cachedUScale, WQ *= this._cachedVScale, QQ -= this.uRotationCenter * this._cachedUScale, WQ -= this.vRotationCenter * this._cachedVScale, XQ -= this.wRotationCenter, zQ.s.TransformCoordinatesFromFloatsToRef(QQ, WQ, XQ, this._rowGenerationMatrix, wQ), wQ.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, wQ.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, wQ.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * QQ === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * QQ, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = zQ.e.Zero(), this._rowGenerationMatrix = new zQ.e, this._t0 = zQ.s.Zero(), this._t1 = zQ.s.Zero(), this._t2 = zQ.s.Zero()), zQ.e.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (zQ.e.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, zQ.m.Matrix[0]), zQ.e.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, zQ.m.Matrix[1]), zQ.e.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, zQ.m.Matrix[2]), zQ.e.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, zQ.m.Matrix[3]), zQ.m.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(zQ.m.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(zQ.m.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(zQ.m.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.YwQ(this._t0), this._t2.YwQ(this._t0), zQ.e.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const WQ = this.sE();
            if (!WQ) return this._cachedTextureMatrix;
            const XQ = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && XQ !== this._cachedIdentity3x2 && WQ.markAllMaterialsAsDirty(1, (QQ => QQ.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const WQ = this.sE();
            if (!WQ) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== QQ.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === WQ.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = zQ.e.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = zQ.e.Zero());
            const XQ = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case QQ.PLANAR_MODE:
                zQ.e.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case QQ.PROJECTION_MODE: {
                zQ.e.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const QQ = WQ.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = QQ.updateFlag, QQ.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                zQ.e.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return XQ && WQ.markAllMaterialsAsDirty(1, (QQ => QQ.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const WQ = {
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
            return DQ.b.Clone((() => new QQ(this._texture ? this._texture.url : null, this.sE(), WQ)), this)
          }
          serialize() {
            const WQ = this.name;
            QQ.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const XQ = super.serialize(QQ._SerializeInternalTextureUniqueId);
            if (!XQ) return null;
            if (QQ.SerializeBuffers || QQ.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) XQ.base64String = this._buffer, XQ.name = XQ.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const QQ = this.mimeType || "image/png";
              XQ.base64String = `data:${QQ};base64,${(0,IQ.d)(this._buffer)}`
            } else(QQ.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (XQ.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? BQ(this) : yQ(this));
            return XQ.invertY = this._invertY, XQ.samplingMode = this.samplingMode, XQ._creationFlags = this._creationFlags, XQ._useSRGBBuffer = this._useSRGBBuffer, QQ._SerializeInternalTextureUniqueId && (XQ.internalTextureUniqueId = this._texture?.uniqueId), XQ.internalTextureLabel = this._texture?.label, XQ.noMipmap = this._noMipmap, this.name = WQ, XQ
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(WQ, XQ, wQ) {
            if (WQ.customType) {
              const QQ = JQ.d.Instantiate(WQ.customType).Parse(WQ, XQ, wQ);
              return WQ.samplingMode && QQ.updateSamplingMode && QQ._samplingMode && QQ._samplingMode !== WQ.samplingMode && QQ.updateSamplingMode(WQ.samplingMode), QQ
            }
            if (WQ.isCube && !WQ.isRenderTarget) return QQ._CubeTextureParser(WQ, XQ, wQ);
            const qQ = void 0 !== WQ.internalTextureUniqueId;
            if (!WQ.name && !WQ.isRenderTarget && !qQ) return null;
            let TQ;
            if (qQ) {
              const QQ = XQ.Uj().getLoadedTexturesCache();
              for (const XQ of QQ)
                if (XQ.uniqueId === WQ.internalTextureUniqueId) {
                  TQ = XQ;
                  break
                }
            }
            const zQ = QQ => {
              if (QQ && QQ._texture && (QQ._texture._cachedWrapU = null, QQ._texture._cachedWrapV = null, QQ._texture._cachedWrapR = null), WQ.samplingMode) {
                const XQ = WQ.samplingMode;
                QQ && QQ.samplingMode !== XQ && QQ.updateSamplingMode(XQ)
              }
              if (QQ && WQ.animations)
                for (let XQ = 0; XQ < WQ.animations.length; XQ++) {
                  const wQ = WQ.animations[XQ],
                    qQ = (0, FQ.b)("BABYLON.Animation");
                  qQ && QQ.animations.push(qQ.Parse(wQ))
                }
              QQ && QQ._texture && (qQ && !TQ && QQ._texture._setUniqueId(WQ.internalTextureUniqueId), QQ._texture.label = WQ.internalTextureLabel)
            };
            return DQ.b.Parse((() => {
              let qQ = !0;
              if (WQ.noMipmap && (qQ = !1), WQ.mirrorPlane) {
                const wQ = QQ._CreateMirror(WQ.name, WQ.renderTargetSize, XQ, qQ);
                return wQ._waitingRenderList = WQ.renderList, wQ.mirrorPlane = rQ.b.FromArray(WQ.mirrorPlane), zQ(wQ), wQ
              }
              if (WQ.isRenderTarget && !WQ.base64String) {
                let wQ = null;
                if (WQ.isCube) {
                  if (XQ.reflectionProbes)
                    for (let QQ = 0; QQ < XQ.reflectionProbes.length; QQ++) {
                      const wQ = XQ.reflectionProbes[QQ];
                      if (wQ.name === WQ.name) return wQ.cubeTexture
                    }
                } else wQ = QQ._CreateRenderTargetTexture(WQ.name, WQ.renderTargetSize, XQ, qQ, WQ._creationFlags ?? 0), wQ._waitingRenderList = WQ.renderList;
                return zQ(wQ), wQ
              }
              if (WQ.isVideo) {
                const TQ = QQ._CreateVideoTexture(wQ + (WQ.url || WQ.name), wQ + (WQ.src || WQ.url), XQ, qQ, WQ.invertY, WQ.samplingMode, WQ.settings || {});
                return zQ(TQ), TQ
              } {
                let sQ;
                if ("string" === typeof WQ.base64String && WQ.base64String && !TQ) {
                  const wQ = {
                      buffer: WQ.base64String,
                      noMipmap: !qQ,
                      invertY: WQ.invertY,
                      samplingMode: WQ.samplingMode,
                      useSRGBBuffer: WQ._useSRGBBuffer ?? !1,
                      creationFlags: WQ._creationFlags ?? 0,
                      onLoad: () => {
                        zQ(sQ)
                      }
                    },
                    TQ = WQ.base64String,
                    FQ = TQ.startsWith("data:") ? TQ.substring(5) : TQ;
                  sQ = QQ.CreateFromBase64String("", FQ, XQ, wQ), sQ.name = WQ.name
                } else {
                  let FQ;
                  FQ = WQ.name && (WQ.name.indexOf("://") > 0 || WQ.name.startsWith("data:")) ? WQ.name : wQ + WQ.name, WQ.url && (WQ.url.startsWith("data:") || QQ.UseSerializedUrlIfAny) && (FQ = WQ.url);
                  const PQ = {
                    noMipmap: !qQ,
                    invertY: WQ.invertY,
                    samplingMode: WQ.samplingMode,
                    useSRGBBuffer: WQ._useSRGBBuffer ?? !1,
                    creationFlags: WQ._creationFlags ?? 0,
                    onLoad: () => {
                      zQ(sQ)
                    },
                    internalTexture: TQ
                  };
                  sQ = new QQ(FQ, XQ, PQ)
                }
                return sQ
              }
            }), WQ, XQ)
          }
          static CreateFromBase64String(WQ, XQ, wQ, qQ, TQ) {
            let zQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : QQ.TRILINEAR_SAMPLINGMODE;
            return new QQ("data:" + XQ, wQ, qQ, TQ, zQ, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, WQ, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(WQ, XQ, wQ) {
            let qQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              TQ = arguments.length > 4 ? arguments[4] : void 0,
              zQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              sQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : QQ.TRILINEAR_SAMPLINGMODE,
              FQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              PQ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              gQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              JQ = arguments.length > 10 ? arguments[10] : void 0,
              rQ = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== WQ.substring(0, 5) && (WQ = "data:" + WQ), new QQ(WQ, wQ, TQ, zQ, sQ, FQ, PQ, XQ, qQ, gQ, void 0, void 0, JQ, rQ)
          }
        }, (() => {
          const TQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(iQ[Symbol.metadata] ?? null) : void 0;
          WQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], jQ = [(0, qQ.I)()], pQ = [(0, qQ.I)()], GQ = [(0, qQ.I)()], UQ = [(0, qQ.I)()], bQ = [(0, qQ.I)()], vQ = [(0, qQ.I)()], dQ = [(0, qQ.I)()], HQ = [(0, qQ.I)()], aQ = [(0, qQ.I)()], lQ = [(0, qQ.I)()], hQ = [(0, qQ.I)()], (0, wQ.k)(QQ, null, hQ, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: QQ => "isBlocking" in QQ,
              get: QQ => QQ.isBlocking
            },
            metadata: TQ
          }, null, cQ), (0, wQ.k)(null, null, WQ, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: QQ => "url" in QQ,
              get: QQ => QQ.url,
              set: (QQ, WQ) => {
                QQ.url = WQ
              }
            },
            metadata: TQ
          }, AQ, RQ), (0, wQ.k)(null, null, XQ, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: QQ => "uOffset" in QQ,
              get: QQ => QQ.uOffset,
              set: (QQ, WQ) => {
                QQ.uOffset = WQ
              }
            },
            metadata: TQ
          }, EQ, CQ), (0, wQ.k)(null, null, jQ, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: QQ => "vOffset" in QQ,
              get: QQ => QQ.vOffset,
              set: (QQ, WQ) => {
                QQ.vOffset = WQ
              }
            },
            metadata: TQ
          }, uQ, LQ), (0, wQ.k)(null, null, pQ, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: QQ => "uScale" in QQ,
              get: QQ => QQ.uScale,
              set: (QQ, WQ) => {
                QQ.uScale = WQ
              }
            },
            metadata: TQ
          }, kQ, fQ), (0, wQ.k)(null, null, GQ, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: QQ => "vScale" in QQ,
              get: QQ => QQ.vScale,
              set: (QQ, WQ) => {
                QQ.vScale = WQ
              }
            },
            metadata: TQ
          }, SQ, tQ), (0, wQ.k)(null, null, UQ, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: QQ => "uAng" in QQ,
              get: QQ => QQ.uAng,
              set: (QQ, WQ) => {
                QQ.uAng = WQ
              }
            },
            metadata: TQ
          }, oQ, eQ), (0, wQ.k)(null, null, bQ, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: QQ => "vAng" in QQ,
              get: QQ => QQ.vAng,
              set: (QQ, WQ) => {
                QQ.vAng = WQ
              }
            },
            metadata: TQ
          }, nQ, xQ), (0, wQ.k)(null, null, vQ, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: QQ => "wAng" in QQ,
              get: QQ => QQ.wAng,
              set: (QQ, WQ) => {
                QQ.wAng = WQ
              }
            },
            metadata: TQ
          }, YQ, NQ), (0, wQ.k)(null, null, dQ, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: QQ => "uRotationCenter" in QQ,
              get: QQ => QQ.uRotationCenter,
              set: (QQ, WQ) => {
                QQ.uRotationCenter = WQ
              }
            },
            metadata: TQ
          }, ZQ, OQ), (0, wQ.k)(null, null, HQ, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: QQ => "vRotationCenter" in QQ,
              get: QQ => QQ.vRotationCenter,
              set: (QQ, WQ) => {
                QQ.vRotationCenter = WQ
              }
            },
            metadata: TQ
          }, KQ, mQ), (0, wQ.k)(null, null, aQ, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: QQ => "wRotationCenter" in QQ,
              get: QQ => QQ.wRotationCenter,
              set: (QQ, WQ) => {
                QQ.wRotationCenter = WQ
              }
            },
            metadata: TQ
          }, MQ, QW), (0, wQ.k)(null, null, lQ, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: QQ => "homogeneousRotationInUVTransform" in QQ,
              get: QQ => QQ.homogeneousRotationInUVTransform,
              set: (QQ, WQ) => {
                QQ.homogeneousRotationInUVTransform = WQ
              }
            },
            metadata: TQ
          }, WW, XW), TQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: TQ
          })
        })(), QQ.SerializeBuffers = !0, QQ.ForceSerializeBuffers = !1, QQ.OnTextureLoadErrorObservable = new TQ.b, QQ._SerializeInternalTextureUniqueId = !1, QQ._CubeTextureParser = (QQ, WQ, XQ) => {
          throw (0, PQ.i)("CubeTexture")
        }, QQ._CreateMirror = (QQ, WQ, XQ, wQ) => {
          throw (0, PQ.i)("MirrorTexture")
        }, QQ._CreateRenderTargetTexture = (QQ, WQ, XQ, wQ, qQ) => {
          throw (0, PQ.i)("RenderTargetTexture")
        }, QQ.NEAREST_SAMPLINGMODE = 1, QQ.NEAREST_NEAREST_MIPLINEAR = 8, QQ.BILINEAR_SAMPLINGMODE = 2, QQ.LINEAR_LINEAR_MIPNEAREST = 11, QQ.TRILINEAR_SAMPLINGMODE = 3, QQ.LINEAR_LINEAR_MIPLINEAR = 3, QQ.NEAREST_NEAREST_MIPNEAREST = 4, QQ.NEAREST_LINEAR_MIPNEAREST = 5, QQ.NEAREST_LINEAR_MIPLINEAR = 6, QQ.NEAREST_LINEAR = 7, QQ.NEAREST_NEAREST = 1, QQ.LINEAR_NEAREST_MIPNEAREST = 9, QQ.LINEAR_NEAREST_MIPLINEAR = 10, QQ.LINEAR_LINEAR = 2, QQ.LINEAR_NEAREST = 12, QQ.EXPLICIT_MODE = 0, QQ.SPHERICAL_MODE = 1, QQ.PLANAR_MODE = 2, QQ.CUBIC_MODE = 3, QQ.PROJECTION_MODE = 4, QQ.SKYBOX_MODE = 5, QQ.INVCUBIC_MODE = 6, QQ.EQUIRECTANGULAR_MODE = 7, QQ.FIXED_EQUIRECTANGULAR_MODE = 8, QQ.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, QQ.CLAMP_ADDRESSMODE = 0, QQ.WRAP_ADDRESSMODE = 1, QQ.MIRROR_ADDRESSMODE = 2, QQ.UseSerializedUrlIfAny = !1, QQ
      })(),
      GQ = !1;

    function UQ() {
      GQ || (GQ = !0, (0, FQ.d)("BABYLON.Texture", pQ), DQ.b._TextureParser = pQ.Parse)
    }
  },
  40277: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => wQ
    });
    class wQ {
      constructor(QQ, WQ) {
        this.width = QQ, this.height = WQ
      }
      toString() {
        return `{W: ${this.width}, H: ${this.height}}`
      }
      getClassName() {
        return "Size"
      }
      getHashCode() {
        let QQ = 0 | this.width;
        return QQ = 397 * QQ ^ this.height, QQ
      }
      WH(QQ) {
        this.width = QQ.width, this.height = QQ.height
      }
      XQQ(QQ, WQ) {
        return this.width = QQ, this.height = WQ, this
      }
      set(QQ, WQ) {
        return this.XQQ(QQ, WQ)
      }
      multiplyByFloats(QQ, WQ) {
        return new wQ(this.width * QQ, this.height * WQ)
      }
      clone() {
        return new wQ(this.width, this.height)
      }
      equals(QQ) {
        return !!QQ && (this.width === QQ.width && this.height === QQ.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new wQ(0, 0)
      }
      add(QQ) {
        return new wQ(this.width + QQ.width, this.height + QQ.height)
      }
      subtract(QQ) {
        return new wQ(this.width - QQ.width, this.height - QQ.height)
      }
      scale(QQ) {
        return new wQ(this.width * QQ, this.height * QQ)
      }
      static Lerp(QQ, WQ, XQ) {
        const qQ = QQ.width + (WQ.width - QQ.width) * XQ,
          TQ = QQ.height + (WQ.height - QQ.height) * XQ;
        return new wQ(qQ, TQ)
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);