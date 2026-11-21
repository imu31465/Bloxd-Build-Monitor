export const id = 248;
export const ids = [248];
export const modules = {
  39852: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => LQ
    });
    let LQ = !1
  },
  39397: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => xQ
    });
    var LQ = wQ(39402),
      qQ = wQ(39409),
      oQ = wQ(36722),
      DQ = wQ(36696),
      kQ = wQ(36720),
      vQ = wQ(37452),
      mQ = wQ(39418);
    class uQ {
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
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = mQ.d.Zero(), this._cachedBaseSize = mQ.d.Zero(), this._initialSamplingMode = 2, this._texture = uQ._IsRenderTargetWrapper(QQ) ? QQ.texture : QQ, this._texture && (this._engine = this._texture.Wx(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(QQ, this._texture, this._texture.generateMipMaps && FQ)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var HQ, bQ = wQ(39426),
      YQ = wQ(39277);
    let xQ = (() => {
      var QQ;
      let FQ, wQ, mQ, HQ, YQ, xQ, AQ, tQ, eQ, MQ, GQ, pQ, cQ, CQ, SQ, iQ, WQ, RQ, OQ, sQ, rQ, IQ, UQ, NQ, TQ, KQ = uQ,
        zQ = [],
        lQ = [],
        jQ = [],
        aQ = [],
        XQ = [],
        fQ = [],
        VQ = [],
        hQ = [],
        JQ = [],
        EQ = [],
        nQ = [],
        gQ = [],
        PQ = [],
        ZQ = [],
        yQ = [],
        BQ = [],
        dQ = [],
        QF = [],
        FF = [],
        wF = [],
        LF = [],
        qF = [],
        oF = [],
        DF = [],
        kF = [],
        vF = [],
        mF = [],
        uF = [],
        HF = [],
        bF = [],
        YF = [];
      return QQ = class extends KQ {
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
          this.iN()?.markAllMaterialsAsDirty(1, (QQ => QQ.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(QQ) {
          QQ !== this.isRGBD && (this._texture && (this._texture._isRGBD = QQ), this.iN()?.markAllMaterialsAsDirty(1, (QQ => QQ.hasTexture(this))))
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
          return this._uid || (this._uid = (0, vQ.d)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(QQ) {
          this._onDisposeObserver && this.zN.remove(this._onDisposeObserver), this._onDisposeObserver = this.zN.add(QQ)
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
        constructor(FQ) {
          let wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, LQ.l)(this, zQ), (0, LQ.l)(this, lQ, void 0)), this.name = ((0, LQ.l)(this, jQ), (0, LQ.l)(this, aQ, void 0)), this.displayName = ((0, LQ.l)(this, XQ), (0, LQ.l)(this, fQ, void 0)), this.metadata = ((0, LQ.l)(this, VQ), (0, LQ.l)(this, hQ, null)), this._internalMetadata = (0, LQ.l)(this, JQ), this.reservedDataStore = null, this._hasAlpha = (0, LQ.l)(this, EQ, !1), this._getAlphaFromRGB = ((0, LQ.l)(this, nQ), (0, LQ.l)(this, gQ, !1)), this.level = ((0, LQ.l)(this, PQ), (0, LQ.l)(this, ZQ, 1)), this._coordinatesIndex = ((0, LQ.l)(this, yQ), (0, LQ.l)(this, BQ, 0)), this.optimizeUVAllocation = ((0, LQ.l)(this, dQ), (0, LQ.l)(this, QF, !0)), this._coordinatesMode = ((0, LQ.l)(this, FF), (0, LQ.l)(this, wF, 0)), this.wrapR = ((0, LQ.l)(this, LF), (0, LQ.l)(this, qF, 1)), this.anisotropicFilteringLevel = ((0, LQ.l)(this, oF), (0, LQ.l)(this, DF, QQ.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, LQ.l)(this, kF), !1), this._gammaSpace = !0, this.invertZ = (0, LQ.l)(this, vF, !1), this.lodLevelInAlpha = ((0, LQ.l)(this, mF), (0, LQ.l)(this, uF, !1)), this._dominantDirection = ((0, LQ.l)(this, HF), null), this.isRenderTarget = (0, LQ.l)(this, bF, !1), this._prefiltered = ((0, LQ.l)(this, YF), !1), this._forceSerialize = !1, this.animations = [], this.zN = new oQ.e, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, FQ ? QQ._IsScene(FQ) ? this._scene = FQ : this._engine = FQ : this._scene = kQ.d.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.Wx()), this._texture = wQ, this._uid = null
        }
        iN() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return DQ.c.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return DQ.c.IdentityReadOnly
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
        _getFromCache(QQ, FQ, wQ, LQ, qQ, oQ) {
          const DQ = this._getEngine();
          if (!DQ) return null;
          const kQ = DQ._getUseSRGBBuffer(!!qQ, FQ),
            vQ = DQ.getLoadedTexturesCache();
          for (let mQ = 0; mQ < vQ.length; mQ++) {
            const DQ = vQ[mQ];
            if ((void 0 === qQ || kQ === DQ._useSRGBBuffer) && (void 0 === LQ || LQ === DQ.invertY) && DQ.url === QQ && DQ.generateMipMaps === !FQ && (!wQ || wQ === DQ.samplingMode) && (void 0 === oQ || oQ === DQ.isCube)) return DQ.incrementReferences(), DQ
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
          const QQ = this.iN();
          QQ && QQ.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            LQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            DQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            kQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            vQ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const mQ = this._getEngine();
          if (!mQ) return null;
          const uQ = this.getSize();
          let HQ = uQ.width,
            bQ = uQ.height;
          0 !== FQ && (HQ /= Math.pow(2, FQ), bQ /= Math.pow(2, FQ), HQ = Math.round(HQ), bQ = Math.round(bQ)), kQ = Math.min(HQ, kQ), vQ = Math.min(bQ, vQ);
          try {
            return this._texture.isCube || this._texture.is2DArray ? mQ._readTexturePixels(this._texture, kQ, vQ, QQ, FQ, wQ, LQ, qQ, oQ, DQ) : mQ._readTexturePixels(this._texture, kQ, vQ, -1, FQ, wQ, LQ, qQ, oQ, DQ)
          } catch (YQ) {
            return null
          }
        }
        _readPixelsSync() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            LQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const oQ = this.getSize();
          let DQ = oQ.width,
            kQ = oQ.height;
          const vQ = this._getEngine();
          if (!vQ) return null;
          0 != FQ && (DQ /= Math.pow(2, FQ), kQ /= Math.pow(2, FQ), DQ = Math.round(DQ), kQ = Math.round(kQ));
          try {
            return this._texture.isCube ? vQ._readTexturePixelsSync(this._texture, DQ, kQ, QQ, FQ, wQ, LQ, qQ) : vQ._readTexturePixelsSync(this._texture, DQ, kQ, -1, FQ, wQ, LQ, qQ)
          } catch (mQ) {
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
          this.zN.notifyObservers(this), this.zN.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !QQ) return null;
          const FQ = bQ.c.Serialize(this);
          return bQ.c.AppendSerializedAnimations(this, FQ), FQ
        }
        static WhenAllReady(QQ, FQ) {
          let wQ = QQ.length;
          if (0 !== wQ)
            for (let LQ = 0; LQ < QQ.length; LQ++) {
              const qQ = QQ[LQ];
              if (qQ.isReady()) 0 === --wQ && FQ();
              else {
                const QQ = qQ.onLoadObservable;
                QQ ? QQ.addOnce((() => {
                  0 === --wQ && FQ()
                })) : 0 === --wQ && FQ()
              }
            } else FQ()
        }
        static _IsScene(QQ) {
          return "Scene" === QQ.getClassName()
        }
      }, (() => {
        const oQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(KQ[Symbol.metadata] ?? null) : void 0;
        FQ = [(0, qQ.I)()], wQ = [(0, qQ.I)()], mQ = [(0, qQ.I)()], HQ = [(0, qQ.I)()], YQ = [(0, qQ.I)("hasAlpha")], xQ = [(0, qQ.I)("getAlphaFromRGB")], AQ = [(0, qQ.I)()], tQ = [(0, qQ.I)("coordinatesIndex")], eQ = [(0, qQ.I)()], MQ = [(0, qQ.I)("coordinatesMode")], GQ = [(0, qQ.I)()], pQ = [(0, qQ.I)()], cQ = [(0, qQ.I)()], CQ = [(0, qQ.I)()], SQ = [(0, qQ.I)()], iQ = [(0, qQ.I)()], WQ = [(0, qQ.I)()], RQ = [(0, qQ.I)()], OQ = [(0, qQ.I)()], sQ = [(0, qQ.I)()], rQ = [(0, qQ.I)()], IQ = [(0, qQ.I)()], UQ = [(0, qQ.I)()], NQ = [(0, qQ.z)()], TQ = [(0, qQ.I)()], (0, LQ.i)(QQ, null, GQ, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wrapU" in QQ,
            get: QQ => QQ.wrapU
          },
          metadata: oQ
        }, null, zQ), (0, LQ.i)(QQ, null, pQ, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wrapV" in QQ,
            get: QQ => QQ.wrapV
          },
          metadata: oQ
        }, null, zQ), (0, LQ.i)(QQ, null, SQ, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: QQ => "isCube" in QQ,
            get: QQ => QQ.isCube
          },
          metadata: oQ
        }, null, zQ), (0, LQ.i)(QQ, null, iQ, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: QQ => "is3D" in QQ,
            get: QQ => QQ.is3D
          },
          metadata: oQ
        }, null, zQ), (0, LQ.i)(QQ, null, WQ, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: QQ => "is2DArray" in QQ,
            get: QQ => QQ.is2DArray
          },
          metadata: oQ
        }, null, zQ), (0, LQ.i)(QQ, null, RQ, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: QQ => "gammaSpace" in QQ,
            get: QQ => QQ.gammaSpace
          },
          metadata: oQ
        }, null, zQ), (0, LQ.i)(QQ, null, rQ, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: QQ => "lodGenerationOffset" in QQ,
            get: QQ => QQ.lodGenerationOffset
          },
          metadata: oQ
        }, null, zQ), (0, LQ.i)(QQ, null, IQ, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: QQ => "lodGenerationScale" in QQ,
            get: QQ => QQ.lodGenerationScale
          },
          metadata: oQ
        }, null, zQ), (0, LQ.i)(QQ, null, UQ, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: QQ => "linearSpecularLOD" in QQ,
            get: QQ => QQ.linearSpecularLOD
          },
          metadata: oQ
        }, null, zQ), (0, LQ.i)(QQ, null, NQ, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "irradianceTexture" in QQ,
            get: QQ => QQ.irradianceTexture
          },
          metadata: oQ
        }, null, zQ), (0, LQ.i)(null, null, FQ, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: QQ => "uniqueId" in QQ,
            get: QQ => QQ.uniqueId,
            set: (QQ, FQ) => {
              QQ.uniqueId = FQ
            }
          },
          metadata: oQ
        }, lQ, jQ), (0, LQ.i)(null, null, wQ, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: QQ => "name" in QQ,
            get: QQ => QQ.name,
            set: (QQ, FQ) => {
              QQ.name = FQ
            }
          },
          metadata: oQ
        }, aQ, XQ), (0, LQ.i)(null, null, mQ, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: QQ => "displayName" in QQ,
            get: QQ => QQ.displayName,
            set: (QQ, FQ) => {
              QQ.displayName = FQ
            }
          },
          metadata: oQ
        }, fQ, VQ), (0, LQ.i)(null, null, HQ, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: QQ => "metadata" in QQ,
            get: QQ => QQ.metadata,
            set: (QQ, FQ) => {
              QQ.metadata = FQ
            }
          },
          metadata: oQ
        }, hQ, JQ), (0, LQ.i)(null, null, YQ, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_hasAlpha" in QQ,
            get: QQ => QQ._hasAlpha,
            set: (QQ, FQ) => {
              QQ._hasAlpha = FQ
            }
          },
          metadata: oQ
        }, EQ, nQ), (0, LQ.i)(null, null, xQ, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_getAlphaFromRGB" in QQ,
            get: QQ => QQ._getAlphaFromRGB,
            set: (QQ, FQ) => {
              QQ._getAlphaFromRGB = FQ
            }
          },
          metadata: oQ
        }, gQ, PQ), (0, LQ.i)(null, null, AQ, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: QQ => "level" in QQ,
            get: QQ => QQ.level,
            set: (QQ, FQ) => {
              QQ.level = FQ
            }
          },
          metadata: oQ
        }, ZQ, yQ), (0, LQ.i)(null, null, tQ, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_coordinatesIndex" in QQ,
            get: QQ => QQ._coordinatesIndex,
            set: (QQ, FQ) => {
              QQ._coordinatesIndex = FQ
            }
          },
          metadata: oQ
        }, BQ, dQ), (0, LQ.i)(null, null, eQ, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: QQ => "optimizeUVAllocation" in QQ,
            get: QQ => QQ.optimizeUVAllocation,
            set: (QQ, FQ) => {
              QQ.optimizeUVAllocation = FQ
            }
          },
          metadata: oQ
        }, QF, FF), (0, LQ.i)(null, null, MQ, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_coordinatesMode" in QQ,
            get: QQ => QQ._coordinatesMode,
            set: (QQ, FQ) => {
              QQ._coordinatesMode = FQ
            }
          },
          metadata: oQ
        }, wF, LF), (0, LQ.i)(null, null, cQ, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wrapR" in QQ,
            get: QQ => QQ.wrapR,
            set: (QQ, FQ) => {
              QQ.wrapR = FQ
            }
          },
          metadata: oQ
        }, qF, oF), (0, LQ.i)(null, null, CQ, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: QQ => "anisotropicFilteringLevel" in QQ,
            get: QQ => QQ.anisotropicFilteringLevel,
            set: (QQ, FQ) => {
              QQ.anisotropicFilteringLevel = FQ
            }
          },
          metadata: oQ
        }, DF, kF), (0, LQ.i)(null, null, OQ, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: QQ => "invertZ" in QQ,
            get: QQ => QQ.invertZ,
            set: (QQ, FQ) => {
              QQ.invertZ = FQ
            }
          },
          metadata: oQ
        }, vF, mF), (0, LQ.i)(null, null, sQ, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: QQ => "lodLevelInAlpha" in QQ,
            get: QQ => QQ.lodLevelInAlpha,
            set: (QQ, FQ) => {
              QQ.lodLevelInAlpha = FQ
            }
          },
          metadata: oQ
        }, uF, HF), (0, LQ.i)(null, null, TQ, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: QQ => "isRenderTarget" in QQ,
            get: QQ => QQ.isRenderTarget,
            set: (QQ, FQ) => {
              QQ.isRenderTarget = FQ
            }
          },
          metadata: oQ
        }, bF, YF), oQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: oQ
        })
      })(), QQ.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, QQ
    })();
    (HQ = xQ.prototype).forceSphericalPolynomialsRecompute ?? (HQ.forceSphericalPolynomialsRecompute = (0, YQ.g)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(xQ.prototype, "sphericalPolynomial") || Object.defineProperty(xQ.prototype, "sphericalPolynomial", (0, YQ.e)("BaseTexture", "sphericalPolynomial"))
  },
  39897: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => cQ,
      e: () => GQ
    });
    var LQ = wQ(39402),
      qQ = wQ(39409),
      oQ = wQ(36722),
      DQ = wQ(36696),
      kQ = wQ(39397),
      vQ = wQ(36741),
      mQ = wQ(39277),
      uQ = wQ(39289),
      HQ = wQ(39512),
      bQ = wQ(37324),
      YQ = wQ(39468);

    function xQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const LQ = FQ.width,
        qQ = FQ.height;
      if (QQ instanceof Float32Array) {
        let FQ = QQ.byteLength / QQ.BYTES_PER_ELEMENT;
        const wQ = new Uint8Array(FQ);
        for (; --FQ >= 0;) {
          let LQ = QQ[FQ];
          LQ < 0 ? LQ = 0 : LQ > 1 && (LQ = 1), wQ[FQ] = 255 * LQ
        }
        QQ = wQ
      }
      const oQ = document.createElement("canvas");
      oQ.width = LQ, oQ.height = qQ;
      const DQ = oQ.getContext("2d");
      if (!DQ) return null;
      const kQ = DQ.createImageData(LQ, qQ);
      if (kQ.data.set(QQ), DQ.putImageData(kQ, 0, 0), wQ) {
        const QQ = document.createElement("canvas");
        QQ.width = LQ, QQ.height = qQ;
        const FQ = QQ.getContext("2d");
        return FQ ? (FQ.translate(0, qQ), FQ.scale(1, -1), FQ.drawImage(oQ, 0, 0), QQ.toDataURL("image/png")) : null
      }
      return oQ.toDataURL("image/png")
    }

    function AQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const LQ = QQ.getInternalTexture();
      if (!LQ) return null;
      const qQ = QQ._readPixelsSync(FQ, wQ);
      return qQ ? xQ(qQ, QQ.getSize(), LQ.invertY) : null
    }
    async function tQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const LQ = QQ.getInternalTexture();
      if (!LQ) return null;
      const qQ = await QQ.readPixels(FQ, wQ);
      return qQ ? xQ(qQ, QQ.getSize(), LQ.invertY) : null
    }
    var eQ = wQ(39852),
      MQ = wQ(39426);
    let GQ = (() => {
        var QQ;
        let FQ, wQ, xQ, GQ, pQ, cQ, CQ, SQ, iQ, WQ, RQ, OQ, sQ, rQ = kQ.b,
          IQ = [],
          UQ = [],
          NQ = [],
          TQ = [],
          KQ = [],
          zQ = [],
          lQ = [],
          jQ = [],
          aQ = [],
          XQ = [],
          fQ = [],
          VQ = [],
          hQ = [],
          JQ = [],
          EQ = [],
          nQ = [],
          gQ = [],
          PQ = [],
          ZQ = [],
          yQ = [],
          BQ = [],
          dQ = [],
          QF = [],
          FF = [],
          wF = [];
        return QQ = class extends rQ {
          static _CreateVideoTexture(FQ, wQ, LQ) {
            arguments.length > 5 && void 0 !== arguments[5] || QQ.TRILINEAR_SAMPLINGMODE;
            throw (0, mQ.k)("VideoTexture")
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
          constructor(FQ, wQ, qQ, DQ) {
            let kQ, vQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : QQ.TRILINEAR_SAMPLINGMODE,
              mQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              HQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              bQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              YQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              xQ = arguments.length > 9 ? arguments[9] : void 0,
              AQ = arguments.length > 10 ? arguments[10] : void 0,
              tQ = arguments.length > 11 ? arguments[11] : void 0,
              MQ = arguments.length > 12 ? arguments[12] : void 0,
              GQ = arguments.length > 13 ? arguments[13] : void 0;
            super(wQ), this.url = ((0, LQ.l)(this, IQ), (0, LQ.l)(this, UQ, null)), this.uOffset = ((0, LQ.l)(this, NQ), (0, LQ.l)(this, TQ, 0)), this.vOffset = ((0, LQ.l)(this, KQ), (0, LQ.l)(this, zQ, 0)), this.uScale = ((0, LQ.l)(this, lQ), (0, LQ.l)(this, jQ, 1)), this.vScale = ((0, LQ.l)(this, aQ), (0, LQ.l)(this, XQ, 1)), this.uAng = ((0, LQ.l)(this, fQ), (0, LQ.l)(this, VQ, 0)), this.vAng = ((0, LQ.l)(this, hQ), (0, LQ.l)(this, JQ, 0)), this.wAng = ((0, LQ.l)(this, EQ), (0, LQ.l)(this, nQ, 0)), this.uRotationCenter = ((0, LQ.l)(this, gQ), (0, LQ.l)(this, PQ, .5)), this.vRotationCenter = ((0, LQ.l)(this, ZQ), (0, LQ.l)(this, yQ, .5)), this.wRotationCenter = ((0, LQ.l)(this, BQ), (0, LQ.l)(this, dQ, .5)), this.homogeneousRotationInUVTransform = ((0, LQ.l)(this, QF), (0, LQ.l)(this, FF, !1)), this.inspectableCustomProperties = ((0, LQ.l)(this, wF), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new oQ.e, this._isBlocking = !0, this.name = FQ || "", this.url = FQ;
            let pQ = !1,
              cQ = null,
              CQ = !0;
            "object" === typeof qQ && null !== qQ ? (kQ = qQ.noMipmap ?? !1, DQ = qQ.invertY ?? !eQ.d, vQ = qQ.samplingMode ?? QQ.TRILINEAR_SAMPLINGMODE, mQ = qQ.onLoad ?? null, HQ = qQ.onError ?? null, bQ = qQ.buffer ?? null, YQ = qQ.deleteBuffer ?? !1, xQ = qQ.format, AQ = qQ.mimeType, tQ = qQ.loaderOptions, MQ = qQ.creationFlags, pQ = qQ.useSRGBBuffer ?? !1, cQ = qQ.internalTexture ?? null, CQ = qQ.gammaSpace ?? CQ, GQ = qQ.forcedExtension ?? GQ) : kQ = !!qQ, this._gammaSpace = CQ, this._noMipmap = kQ, this._invertY = void 0 === DQ ? !eQ.d : DQ, this._initialSamplingMode = vQ, this._buffer = bQ, this._deleteBuffer = YQ, this._mimeType = AQ, this._loaderOptions = tQ, this._creationFlags = MQ, this._useSRGBBuffer = pQ, this._forcedExtension = GQ, void 0 !== xQ && (this._format = xQ);
            const SQ = this.iN(),
              iQ = this._getEngine();
            if (!iQ) return;
            iQ.onBeforeTextureInitObservable.notifyObservers(this);
            const WQ = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), mQ && mQ(), !this.isBlocking && SQ && SQ.resetCachedMaterial()
              },
              RQ = (FQ, wQ) => {
                this._loadingError = !0, this._errorObject = {
                  message: FQ,
                  exception: wQ
                }, HQ && HQ(FQ, wQ), QQ.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !cQ) return this._delayedOnLoad = WQ, void(this._delayedOnError = RQ);
            if (this._texture = cQ ?? this._getFromCache(this.url, kQ, vQ, this._invertY, pQ, this.isCube), this._texture)
              if (this._texture.isReady) uQ.d.SetImmediate((() => WQ()));
              else {
                const QQ = this._texture.onLoadedObservable.add(WQ);
                this._texture.onErrorObservable.add((FQ => {
                  RQ(FQ.message, FQ.exception), this._texture?.onLoadedObservable.remove(QQ)
                }))
              }
            else if (SQ && SQ.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = WQ, this._delayedOnError = RQ;
            else {
              try {
                this._texture = iQ.createTexture(this.url, kQ, this._invertY, SQ, vQ, WQ, RQ, this._buffer, void 0, this._format, this._forcedExtension, AQ, tQ, MQ, pQ)
              } catch (OQ) {
                throw RQ("error loading", OQ), OQ
              }
              YQ && (this._buffer = null)
            }
          }
          updateURL(QQ) {
            let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              wQ = arguments.length > 2 ? arguments[2] : void 0,
              LQ = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.iN().markAllMaterialsAsDirty(1, (QQ => QQ.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = QQ), this.url = QQ, this._buffer = FQ, this._forcedExtension = LQ, this.delayLoadState = 4;
            const qQ = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              qQ ? qQ() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), wQ && wQ()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const QQ = this.iN();
            if (!QQ) return;
            let FQ = this.url;
            !FQ && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (FQ = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(FQ, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? uQ.d.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = QQ.Wx().createTexture(FQ, this._noMipmap, this._invertY, QQ, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(QQ, FQ, wQ, LQ) {
            QQ *= this._cachedUScale, FQ *= this._cachedVScale, QQ -= this.uRotationCenter * this._cachedUScale, FQ -= this.vRotationCenter * this._cachedVScale, wQ -= this.wRotationCenter, DQ.p.TransformCoordinatesFromFloatsToRef(QQ, FQ, wQ, this._rowGenerationMatrix, LQ), LQ.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, LQ.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, LQ.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * QQ === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * QQ, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = DQ.c.Zero(), this._rowGenerationMatrix = new DQ.c, this._t0 = DQ.p.Zero(), this._t1 = DQ.p.Zero(), this._t2 = DQ.p.Zero()), DQ.c.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (DQ.c.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, DQ.k.Matrix[0]), DQ.c.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, DQ.k.Matrix[1]), DQ.c.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, DQ.k.Matrix[2]), DQ.c.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, DQ.k.Matrix[3]), DQ.k.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(DQ.k.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(DQ.k.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(DQ.k.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.gLQ(this._t0), this._t2.gLQ(this._t0), DQ.c.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const FQ = this.iN();
            if (!FQ) return this._cachedTextureMatrix;
            const wQ = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && wQ !== this._cachedIdentity3x2 && FQ.markAllMaterialsAsDirty(1, (QQ => QQ.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const FQ = this.iN();
            if (!FQ) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== QQ.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === FQ.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = DQ.c.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = DQ.c.Zero());
            const wQ = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case QQ.PLANAR_MODE:
                DQ.c.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case QQ.PROJECTION_MODE: {
                DQ.c.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const QQ = FQ.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = QQ.updateFlag, QQ.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                DQ.c.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return wQ && FQ.markAllMaterialsAsDirty(1, (QQ => QQ.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const FQ = {
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
            return MQ.c.Clone((() => new QQ(this._texture ? this._texture.url : null, this.iN(), FQ)), this)
          }
          serialize() {
            const FQ = this.name;
            QQ.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const wQ = super.serialize(QQ._SerializeInternalTextureUniqueId);
            if (!wQ) return null;
            if (QQ.SerializeBuffers || QQ.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) wQ.base64String = this._buffer, wQ.name = wQ.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const QQ = this.mimeType || "image/png";
              wQ.base64String = `data:${QQ};base64,${(0,YQ.i)(this._buffer)}`
            } else(QQ.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (wQ.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? AQ(this) : tQ(this));
            return wQ.invertY = this._invertY, wQ.samplingMode = this.samplingMode, wQ._creationFlags = this._creationFlags, wQ._useSRGBBuffer = this._useSRGBBuffer, QQ._SerializeInternalTextureUniqueId && (wQ.internalTextureUniqueId = this._texture?.uniqueId), wQ.internalTextureLabel = this._texture?.label, wQ.noMipmap = this._noMipmap, this.name = FQ, wQ
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(FQ, wQ, LQ) {
            if (FQ.customType) {
              const QQ = HQ.e.Instantiate(FQ.customType).Parse(FQ, wQ, LQ);
              return FQ.samplingMode && QQ.updateSamplingMode && QQ._samplingMode && QQ._samplingMode !== FQ.samplingMode && QQ.updateSamplingMode(FQ.samplingMode), QQ
            }
            if (FQ.isCube && !FQ.isRenderTarget) return QQ._CubeTextureParser(FQ, wQ, LQ);
            const qQ = void 0 !== FQ.internalTextureUniqueId;
            if (!FQ.name && !FQ.isRenderTarget && !qQ) return null;
            let oQ;
            if (qQ) {
              const QQ = wQ.Wx().getLoadedTexturesCache();
              for (const wQ of QQ)
                if (wQ.uniqueId === FQ.internalTextureUniqueId) {
                  oQ = wQ;
                  break
                }
            }
            const DQ = QQ => {
              if (QQ && QQ._texture && (QQ._texture._cachedWrapU = null, QQ._texture._cachedWrapV = null, QQ._texture._cachedWrapR = null), FQ.samplingMode) {
                const wQ = FQ.samplingMode;
                QQ && QQ.samplingMode !== wQ && QQ.updateSamplingMode(wQ)
              }
              if (QQ && FQ.animations)
                for (let wQ = 0; wQ < FQ.animations.length; wQ++) {
                  const LQ = FQ.animations[wQ],
                    qQ = (0, vQ.b)("BABYLON.Animation");
                  qQ && QQ.animations.push(qQ.Parse(LQ))
                }
              QQ && QQ._texture && (qQ && !oQ && QQ._texture._setUniqueId(FQ.internalTextureUniqueId), QQ._texture.label = FQ.internalTextureLabel)
            };
            return MQ.c.Parse((() => {
              let qQ = !0;
              if (FQ.noMipmap && (qQ = !1), FQ.mirrorPlane) {
                const LQ = QQ._CreateMirror(FQ.name, FQ.renderTargetSize, wQ, qQ);
                return LQ._waitingRenderList = FQ.renderList, LQ.mirrorPlane = bQ.d.FromArray(FQ.mirrorPlane), DQ(LQ), LQ
              }
              if (FQ.isRenderTarget && !FQ.base64String) {
                let LQ = null;
                if (FQ.isCube) {
                  if (wQ.reflectionProbes)
                    for (let QQ = 0; QQ < wQ.reflectionProbes.length; QQ++) {
                      const LQ = wQ.reflectionProbes[QQ];
                      if (LQ.name === FQ.name) return LQ.cubeTexture
                    }
                } else LQ = QQ._CreateRenderTargetTexture(FQ.name, FQ.renderTargetSize, wQ, qQ, FQ._creationFlags ?? 0), LQ._waitingRenderList = FQ.renderList;
                return DQ(LQ), LQ
              }
              if (FQ.isVideo) {
                const oQ = QQ._CreateVideoTexture(LQ + (FQ.url || FQ.name), LQ + (FQ.src || FQ.url), wQ, qQ, FQ.invertY, FQ.samplingMode, FQ.settings || {});
                return DQ(oQ), oQ
              } {
                let kQ;
                if ("string" === typeof FQ.base64String && FQ.base64String && !oQ) {
                  const LQ = {
                      buffer: FQ.base64String,
                      noMipmap: !qQ,
                      invertY: FQ.invertY,
                      samplingMode: FQ.samplingMode,
                      useSRGBBuffer: FQ._useSRGBBuffer ?? !1,
                      creationFlags: FQ._creationFlags ?? 0,
                      onLoad: () => {
                        DQ(kQ)
                      }
                    },
                    oQ = FQ.base64String,
                    vQ = oQ.startsWith("data:") ? oQ.substring(5) : oQ;
                  kQ = QQ.CreateFromBase64String("", vQ, wQ, LQ), kQ.name = FQ.name
                } else {
                  let vQ;
                  vQ = FQ.name && (FQ.name.indexOf("://") > 0 || FQ.name.startsWith("data:")) ? FQ.name : LQ + FQ.name, FQ.url && (FQ.url.startsWith("data:") || QQ.UseSerializedUrlIfAny) && (vQ = FQ.url);
                  const mQ = {
                    noMipmap: !qQ,
                    invertY: FQ.invertY,
                    samplingMode: FQ.samplingMode,
                    useSRGBBuffer: FQ._useSRGBBuffer ?? !1,
                    creationFlags: FQ._creationFlags ?? 0,
                    onLoad: () => {
                      DQ(kQ)
                    },
                    internalTexture: oQ
                  };
                  kQ = new QQ(vQ, wQ, mQ)
                }
                return kQ
              }
            }), FQ, wQ)
          }
          static CreateFromBase64String(FQ, wQ, LQ, qQ, oQ) {
            let DQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : QQ.TRILINEAR_SAMPLINGMODE;
            return new QQ("data:" + wQ, LQ, qQ, oQ, DQ, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, FQ, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(FQ, wQ, LQ) {
            let qQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              oQ = arguments.length > 4 ? arguments[4] : void 0,
              DQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              kQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : QQ.TRILINEAR_SAMPLINGMODE,
              vQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              mQ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              uQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              HQ = arguments.length > 10 ? arguments[10] : void 0,
              bQ = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== FQ.substring(0, 5) && (FQ = "data:" + FQ), new QQ(FQ, LQ, oQ, DQ, kQ, vQ, mQ, wQ, qQ, uQ, void 0, void 0, HQ, bQ)
          }
        }, (() => {
          const oQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(rQ[Symbol.metadata] ?? null) : void 0;
          FQ = [(0, qQ.I)()], wQ = [(0, qQ.I)()], xQ = [(0, qQ.I)()], GQ = [(0, qQ.I)()], pQ = [(0, qQ.I)()], cQ = [(0, qQ.I)()], CQ = [(0, qQ.I)()], SQ = [(0, qQ.I)()], iQ = [(0, qQ.I)()], WQ = [(0, qQ.I)()], RQ = [(0, qQ.I)()], OQ = [(0, qQ.I)()], sQ = [(0, qQ.I)()], (0, LQ.i)(QQ, null, sQ, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: QQ => "isBlocking" in QQ,
              get: QQ => QQ.isBlocking
            },
            metadata: oQ
          }, null, IQ), (0, LQ.i)(null, null, FQ, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: QQ => "url" in QQ,
              get: QQ => QQ.url,
              set: (QQ, FQ) => {
                QQ.url = FQ
              }
            },
            metadata: oQ
          }, UQ, NQ), (0, LQ.i)(null, null, wQ, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: QQ => "uOffset" in QQ,
              get: QQ => QQ.uOffset,
              set: (QQ, FQ) => {
                QQ.uOffset = FQ
              }
            },
            metadata: oQ
          }, TQ, KQ), (0, LQ.i)(null, null, xQ, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: QQ => "vOffset" in QQ,
              get: QQ => QQ.vOffset,
              set: (QQ, FQ) => {
                QQ.vOffset = FQ
              }
            },
            metadata: oQ
          }, zQ, lQ), (0, LQ.i)(null, null, GQ, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: QQ => "uScale" in QQ,
              get: QQ => QQ.uScale,
              set: (QQ, FQ) => {
                QQ.uScale = FQ
              }
            },
            metadata: oQ
          }, jQ, aQ), (0, LQ.i)(null, null, pQ, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: QQ => "vScale" in QQ,
              get: QQ => QQ.vScale,
              set: (QQ, FQ) => {
                QQ.vScale = FQ
              }
            },
            metadata: oQ
          }, XQ, fQ), (0, LQ.i)(null, null, cQ, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: QQ => "uAng" in QQ,
              get: QQ => QQ.uAng,
              set: (QQ, FQ) => {
                QQ.uAng = FQ
              }
            },
            metadata: oQ
          }, VQ, hQ), (0, LQ.i)(null, null, CQ, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: QQ => "vAng" in QQ,
              get: QQ => QQ.vAng,
              set: (QQ, FQ) => {
                QQ.vAng = FQ
              }
            },
            metadata: oQ
          }, JQ, EQ), (0, LQ.i)(null, null, SQ, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: QQ => "wAng" in QQ,
              get: QQ => QQ.wAng,
              set: (QQ, FQ) => {
                QQ.wAng = FQ
              }
            },
            metadata: oQ
          }, nQ, gQ), (0, LQ.i)(null, null, iQ, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: QQ => "uRotationCenter" in QQ,
              get: QQ => QQ.uRotationCenter,
              set: (QQ, FQ) => {
                QQ.uRotationCenter = FQ
              }
            },
            metadata: oQ
          }, PQ, ZQ), (0, LQ.i)(null, null, WQ, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: QQ => "vRotationCenter" in QQ,
              get: QQ => QQ.vRotationCenter,
              set: (QQ, FQ) => {
                QQ.vRotationCenter = FQ
              }
            },
            metadata: oQ
          }, yQ, BQ), (0, LQ.i)(null, null, RQ, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: QQ => "wRotationCenter" in QQ,
              get: QQ => QQ.wRotationCenter,
              set: (QQ, FQ) => {
                QQ.wRotationCenter = FQ
              }
            },
            metadata: oQ
          }, dQ, QF), (0, LQ.i)(null, null, OQ, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: QQ => "homogeneousRotationInUVTransform" in QQ,
              get: QQ => QQ.homogeneousRotationInUVTransform,
              set: (QQ, FQ) => {
                QQ.homogeneousRotationInUVTransform = FQ
              }
            },
            metadata: oQ
          }, FF, wF), oQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oQ
          })
        })(), QQ.SerializeBuffers = !0, QQ.ForceSerializeBuffers = !1, QQ.OnTextureLoadErrorObservable = new oQ.e, QQ._SerializeInternalTextureUniqueId = !1, QQ._CubeTextureParser = (QQ, FQ, wQ) => {
          throw (0, mQ.k)("CubeTexture")
        }, QQ._CreateMirror = (QQ, FQ, wQ, LQ) => {
          throw (0, mQ.k)("MirrorTexture")
        }, QQ._CreateRenderTargetTexture = (QQ, FQ, wQ, LQ, qQ) => {
          throw (0, mQ.k)("RenderTargetTexture")
        }, QQ.NEAREST_SAMPLINGMODE = 1, QQ.NEAREST_NEAREST_MIPLINEAR = 8, QQ.BILINEAR_SAMPLINGMODE = 2, QQ.LINEAR_LINEAR_MIPNEAREST = 11, QQ.TRILINEAR_SAMPLINGMODE = 3, QQ.LINEAR_LINEAR_MIPLINEAR = 3, QQ.NEAREST_NEAREST_MIPNEAREST = 4, QQ.NEAREST_LINEAR_MIPNEAREST = 5, QQ.NEAREST_LINEAR_MIPLINEAR = 6, QQ.NEAREST_LINEAR = 7, QQ.NEAREST_NEAREST = 1, QQ.LINEAR_NEAREST_MIPNEAREST = 9, QQ.LINEAR_NEAREST_MIPLINEAR = 10, QQ.LINEAR_LINEAR = 2, QQ.LINEAR_NEAREST = 12, QQ.EXPLICIT_MODE = 0, QQ.SPHERICAL_MODE = 1, QQ.PLANAR_MODE = 2, QQ.CUBIC_MODE = 3, QQ.PROJECTION_MODE = 4, QQ.SKYBOX_MODE = 5, QQ.INVCUBIC_MODE = 6, QQ.EQUIRECTANGULAR_MODE = 7, QQ.FIXED_EQUIRECTANGULAR_MODE = 8, QQ.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, QQ.CLAMP_ADDRESSMODE = 0, QQ.WRAP_ADDRESSMODE = 1, QQ.MIRROR_ADDRESSMODE = 2, QQ.UseSerializedUrlIfAny = !1, QQ
      })(),
      pQ = !1;

    function cQ() {
      pQ || (pQ = !0, (0, vQ.e)("BABYLON.Texture", GQ), MQ.c._TextureParser = GQ.Parse)
    }
  },
  39418: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => LQ
    });
    class LQ {
      constructor(QQ, FQ) {
        this.width = QQ, this.height = FQ
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
      Qs(QQ) {
        this.width = QQ.width, this.height = QQ.height
      }
      vQQ(QQ, FQ) {
        return this.width = QQ, this.height = FQ, this
      }
      set(QQ, FQ) {
        return this.vQQ(QQ, FQ)
      }
      multiplyByFloats(QQ, FQ) {
        return new LQ(this.width * QQ, this.height * FQ)
      }
      clone() {
        return new LQ(this.width, this.height)
      }
      equals(QQ) {
        return !!QQ && (this.width === QQ.width && this.height === QQ.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new LQ(0, 0)
      }
      add(QQ) {
        return new LQ(this.width + QQ.width, this.height + QQ.height)
      }
      subtract(QQ) {
        return new LQ(this.width - QQ.width, this.height - QQ.height)
      }
      scale(QQ) {
        return new LQ(this.width * QQ, this.height * QQ)
      }
      static Lerp(QQ, FQ, wQ) {
        const qQ = QQ.width + (FQ.width - QQ.width) * wQ,
          oQ = QQ.height + (FQ.height - QQ.height) * wQ;
        return new LQ(qQ, oQ)
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);