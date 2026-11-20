export const id = 246;
export const ids = [246];
export const modules = {
  39549: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab
    });
    let Ab = !1
  },
  39099: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => jb
    });
    var Ab = Ub(39104),
      Mb = Ub(39110),
      Tb = Ub(36431),
      Eb = Ub(36401),
      Yb = Ub(36425),
      Bb = Ub(37251),
      eb = Ub(39120);
    class vb {
      get wrapU() {
        return this._wrapU
      }
      set wrapU(bb) {
        this._wrapU = bb
      }
      get wrapV() {
        return this._wrapV
      }
      set wrapV(bb) {
        this._wrapV = bb
      }
      get coordinatesMode() {
        return 0
      }
      get isCube() {
        return !!this._texture && this._texture.isCube
      }
      set isCube(bb) {
        this._texture && (this._texture.isCube = bb)
      }
      get is3D() {
        return !!this._texture && this._texture.is3D
      }
      set is3D(bb) {
        this._texture && (this._texture.is3D = bb)
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray
      }
      set is2DArray(bb) {
        this._texture && (this._texture.is2DArray = bb)
      }
      getClassName() {
        return "ThinTexture"
      }
      static _IsRenderTargetWrapper(bb) {
        return void 0 !== bb?.shareDepth
      }
      constructor(bb) {
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = eb.c.Zero(), this._cachedBaseSize = eb.c.Zero(), this._initialSamplingMode = 2, this._texture = vb._IsRenderTargetWrapper(bb) ? bb.texture : bb, this._texture && (this._engine = this._texture.vj(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
      updateSamplingMode(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(bb, this._texture, this._texture.generateMipMaps && ab)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var Lb, Pb = Ub(39124),
      Xb = Ub(38982);
    let jb = (() => {
      var bb;
      let ab, Ub, eb, Lb, Xb, jb, Rb, kb, yb, Zb, Db, zb, xb, ib, fb, mb, pb, Nb, Wb, Hb, Ib, db, Fb, hb, Gb, Qb = vb,
        qb = [],
        ub = [],
        rb = [],
        Kb = [],
        ob = [],
        lb = [],
        tb = [],
        wb = [],
        sb = [],
        gb = [],
        Cb = [],
        Vb = [],
        Ob = [],
        cb = [],
        Jb = [],
        nb = [],
        Sb = [],
        ba = [],
        aa = [],
        Ua = [],
        Aa = [],
        Ma = [],
        Ta = [],
        Ea = [],
        Ya = [],
        Ba = [],
        ea = [],
        va = [],
        La = [],
        Pa = [],
        Xa = [];
      return bb = class extends Qb {
        set hasAlpha(bb) {
          this._hasAlpha = bb
        }
        get hasAlpha() {
          return this._hasAlpha
        }
        set getAlphaFromRGB(bb) {
          this._getAlphaFromRGB !== bb && (this._getAlphaFromRGB = bb, this._scene && this._scene.markAllMaterialsAsDirty(1, (bb => bb.hasTexture(this))))
        }
        get getAlphaFromRGB() {
          return this._getAlphaFromRGB
        }
        set coordinatesIndex(bb) {
          this._coordinatesIndex !== bb && (this._coordinatesIndex = bb, this._scene && this._scene.markAllMaterialsAsDirty(1, (bb => bb.hasTexture(this))))
        }
        get coordinatesIndex() {
          return this._coordinatesIndex
        }
        set coordinatesMode(bb) {
          this._coordinatesMode !== bb && (this._coordinatesMode = bb, this._scene && this._scene.markAllMaterialsAsDirty(1, (bb => bb.hasTexture(this))))
        }
        get coordinatesMode() {
          return this._coordinatesMode
        }
        get wrapU() {
          return this._wrapU
        }
        set wrapU(bb) {
          this._wrapU = bb
        }
        get wrapV() {
          return this._wrapV
        }
        set wrapV(bb) {
          this._wrapV = bb
        }
        get isCube() {
          return this._texture ? this._texture.isCube : this._isCube
        }
        set isCube(bb) {
          this._texture ? this._texture.isCube = bb : this._isCube = bb
        }
        get is3D() {
          return !!this._texture && this._texture.is3D
        }
        set is3D(bb) {
          this._texture && (this._texture.is3D = bb)
        }
        get is2DArray() {
          return !!this._texture && this._texture.is2DArray
        }
        set is2DArray(bb) {
          this._texture && (this._texture.is2DArray = bb)
        }
        get gammaSpace() {
          return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
        }
        set gammaSpace(bb) {
          if (this._texture) {
            if (this._texture._gammaSpace === bb) return;
            this._texture._gammaSpace = bb
          } else {
            if (this._gammaSpace === bb) return;
            this._gammaSpace = bb
          }
          this.oN()?.markAllMaterialsAsDirty(1, (bb => bb.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(bb) {
          bb !== this.isRGBD && (this._texture && (this._texture._isRGBD = bb), this.oN()?.markAllMaterialsAsDirty(1, (bb => bb.hasTexture(this))))
        }
        get noMipmap() {
          return !1
        }
        get lodGenerationOffset() {
          return this._texture ? this._texture._lodGenerationOffset : 0
        }
        set lodGenerationOffset(bb) {
          this._texture && (this._texture._lodGenerationOffset = bb)
        }
        get lodGenerationScale() {
          return this._texture ? this._texture._lodGenerationScale : 0
        }
        set lodGenerationScale(bb) {
          this._texture && (this._texture._lodGenerationScale = bb)
        }
        get linearSpecularLOD() {
          return !!this._texture && this._texture._linearSpecularLOD
        }
        set linearSpecularLOD(bb) {
          this._texture && (this._texture._linearSpecularLOD = bb)
        }
        get irradianceTexture() {
          return this._texture ? this._texture._irradianceTexture : null
        }
        set irradianceTexture(bb) {
          this._texture && (this._texture._irradianceTexture = bb)
        }
        get uid() {
          return this._uid || (this._uid = (0, Bb.b)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(bb) {
          this._onDisposeObserver && this.UW.remove(this._onDisposeObserver), this._onDisposeObserver = this.UW.add(bb)
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
        constructor(ab) {
          let Ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, Ab.k)(this, qb), (0, Ab.k)(this, ub, void 0)), this.name = ((0, Ab.k)(this, rb), (0, Ab.k)(this, Kb, void 0)), this.displayName = ((0, Ab.k)(this, ob), (0, Ab.k)(this, lb, void 0)), this.metadata = ((0, Ab.k)(this, tb), (0, Ab.k)(this, wb, null)), this._internalMetadata = (0, Ab.k)(this, sb), this.reservedDataStore = null, this._hasAlpha = (0, Ab.k)(this, gb, !1), this._getAlphaFromRGB = ((0, Ab.k)(this, Cb), (0, Ab.k)(this, Vb, !1)), this.level = ((0, Ab.k)(this, Ob), (0, Ab.k)(this, cb, 1)), this._coordinatesIndex = ((0, Ab.k)(this, Jb), (0, Ab.k)(this, nb, 0)), this.optimizeUVAllocation = ((0, Ab.k)(this, Sb), (0, Ab.k)(this, ba, !0)), this._coordinatesMode = ((0, Ab.k)(this, aa), (0, Ab.k)(this, Ua, 0)), this.wrapR = ((0, Ab.k)(this, Aa), (0, Ab.k)(this, Ma, 1)), this.anisotropicFilteringLevel = ((0, Ab.k)(this, Ta), (0, Ab.k)(this, Ea, bb.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, Ab.k)(this, Ya), !1), this._gammaSpace = !0, this.invertZ = (0, Ab.k)(this, Ba, !1), this.lodLevelInAlpha = ((0, Ab.k)(this, ea), (0, Ab.k)(this, va, !1)), this._dominantDirection = ((0, Ab.k)(this, La), null), this.isRenderTarget = (0, Ab.k)(this, Pa, !1), this._prefiltered = ((0, Ab.k)(this, Xa), !1), this._forceSerialize = !1, this.animations = [], this.UW = new Tb.b, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, ab ? bb._IsScene(ab) ? this._scene = ab : this._engine = ab : this._scene = Yb.d.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.vj()), this._texture = Ub, this._uid = null
        }
        oN() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return Eb.b.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return Eb.b.IdentityReadOnly
        }
        getRefractionTextureMatrix() {
          return this.getReflectionTextureMatrix()
        }
        isReadyOrNotBlocking() {
          return !this.isBlocking || this.isReady() || this.loadingError
        }
        scale(bb) {}
        get canRescale() {
          return !1
        }
        _getFromCache(bb, ab, Ub, Ab, Mb, Tb) {
          const Eb = this._getEngine();
          if (!Eb) return null;
          const Yb = Eb._getUseSRGBBuffer(!!Mb, ab),
            Bb = Eb.getLoadedTexturesCache();
          for (let eb = 0; eb < Bb.length; eb++) {
            const Eb = Bb[eb];
            if ((void 0 === Mb || Yb === Eb._useSRGBBuffer) && (void 0 === Ab || Ab === Eb.invertY) && Eb.url === bb && Eb.generateMipMaps === !ab && (!Ub || Ub === Eb.samplingMode) && (void 0 === Tb || Tb === Eb.isCube)) return Eb.incrementReferences(), Eb
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
          const bb = this.oN();
          bb && bb.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Ab = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            Mb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            Eb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            Yb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            Bb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const eb = this._getEngine();
          if (!eb) return null;
          const vb = this.getSize();
          let Lb = vb.width,
            Pb = vb.height;
          0 !== ab && (Lb /= Math.pow(2, ab), Pb /= Math.pow(2, ab), Lb = Math.round(Lb), Pb = Math.round(Pb)), Yb = Math.min(Lb, Yb), Bb = Math.min(Pb, Bb);
          try {
            return this._texture.isCube || this._texture.is2DArray ? eb._readTexturePixels(this._texture, Yb, Bb, bb, ab, Ub, Ab, Mb, Tb, Eb) : eb._readTexturePixels(this._texture, Yb, Bb, -1, ab, Ub, Ab, Mb, Tb, Eb)
          } catch (Xb) {
            return null
          }
        }
        _readPixelsSync() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Ab = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            Mb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const Tb = this.getSize();
          let Eb = Tb.width,
            Yb = Tb.height;
          const Bb = this._getEngine();
          if (!Bb) return null;
          0 != ab && (Eb /= Math.pow(2, ab), Yb /= Math.pow(2, ab), Eb = Math.round(Eb), Yb = Math.round(Yb));
          try {
            return this._texture.isCube ? Bb._readTexturePixelsSync(this._texture, Eb, Yb, bb, ab, Ub, Ab, Mb) : Bb._readTexturePixelsSync(this._texture, Eb, Yb, -1, ab, Ub, Ab, Mb)
          } catch (eb) {
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
            const bb = this._scene.textures.indexOf(this);
            if (bb >= 0 && this._scene.textures.splice(bb, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
              const bb = this._parentContainer.textures.indexOf(this);
              bb > -1 && this._parentContainer.textures.splice(bb, 1), this._parentContainer = null
            }
          }
          this.UW.notifyObservers(this), this.UW.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !bb) return null;
          const ab = Pb.b.Serialize(this);
          return Pb.b.AppendSerializedAnimations(this, ab), ab
        }
        static WhenAllReady(bb, ab) {
          let Ub = bb.length;
          if (0 !== Ub)
            for (let Ab = 0; Ab < bb.length; Ab++) {
              const Mb = bb[Ab];
              if (Mb.isReady()) 0 === --Ub && ab();
              else {
                const bb = Mb.onLoadObservable;
                bb ? bb.addOnce((() => {
                  0 === --Ub && ab()
                })) : 0 === --Ub && ab()
              }
            } else ab()
        }
        static _IsScene(bb) {
          return "Scene" === bb.getClassName()
        }
      }, (() => {
        const Tb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Qb[Symbol.metadata] ?? null) : void 0;
        ab = [(0, Mb.K)()], Ub = [(0, Mb.K)()], eb = [(0, Mb.K)()], Lb = [(0, Mb.K)()], Xb = [(0, Mb.K)("hasAlpha")], jb = [(0, Mb.K)("getAlphaFromRGB")], Rb = [(0, Mb.K)()], kb = [(0, Mb.K)("coordinatesIndex")], yb = [(0, Mb.K)()], Zb = [(0, Mb.K)("coordinatesMode")], Db = [(0, Mb.K)()], zb = [(0, Mb.K)()], xb = [(0, Mb.K)()], ib = [(0, Mb.K)()], fb = [(0, Mb.K)()], mb = [(0, Mb.K)()], pb = [(0, Mb.K)()], Nb = [(0, Mb.K)()], Wb = [(0, Mb.K)()], Hb = [(0, Mb.K)()], Ib = [(0, Mb.K)()], db = [(0, Mb.K)()], Fb = [(0, Mb.K)()], hb = [(0, Mb.D)()], Gb = [(0, Mb.K)()], (0, Ab.h)(bb, null, Db, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: bb => "wrapU" in bb,
            get: bb => bb.wrapU
          },
          metadata: Tb
        }, null, qb), (0, Ab.h)(bb, null, zb, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: bb => "wrapV" in bb,
            get: bb => bb.wrapV
          },
          metadata: Tb
        }, null, qb), (0, Ab.h)(bb, null, fb, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: bb => "isCube" in bb,
            get: bb => bb.isCube
          },
          metadata: Tb
        }, null, qb), (0, Ab.h)(bb, null, mb, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: bb => "is3D" in bb,
            get: bb => bb.is3D
          },
          metadata: Tb
        }, null, qb), (0, Ab.h)(bb, null, pb, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: bb => "is2DArray" in bb,
            get: bb => bb.is2DArray
          },
          metadata: Tb
        }, null, qb), (0, Ab.h)(bb, null, Nb, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: bb => "gammaSpace" in bb,
            get: bb => bb.gammaSpace
          },
          metadata: Tb
        }, null, qb), (0, Ab.h)(bb, null, Ib, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: bb => "lodGenerationOffset" in bb,
            get: bb => bb.lodGenerationOffset
          },
          metadata: Tb
        }, null, qb), (0, Ab.h)(bb, null, db, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: bb => "lodGenerationScale" in bb,
            get: bb => bb.lodGenerationScale
          },
          metadata: Tb
        }, null, qb), (0, Ab.h)(bb, null, Fb, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: bb => "linearSpecularLOD" in bb,
            get: bb => bb.linearSpecularLOD
          },
          metadata: Tb
        }, null, qb), (0, Ab.h)(bb, null, hb, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "irradianceTexture" in bb,
            get: bb => bb.irradianceTexture
          },
          metadata: Tb
        }, null, qb), (0, Ab.h)(null, null, ab, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: bb => "uniqueId" in bb,
            get: bb => bb.uniqueId,
            set: (bb, ab) => {
              bb.uniqueId = ab
            }
          },
          metadata: Tb
        }, ub, rb), (0, Ab.h)(null, null, Ub, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: bb => "name" in bb,
            get: bb => bb.name,
            set: (bb, ab) => {
              bb.name = ab
            }
          },
          metadata: Tb
        }, Kb, ob), (0, Ab.h)(null, null, eb, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: bb => "displayName" in bb,
            get: bb => bb.displayName,
            set: (bb, ab) => {
              bb.displayName = ab
            }
          },
          metadata: Tb
        }, lb, tb), (0, Ab.h)(null, null, Lb, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: bb => "metadata" in bb,
            get: bb => bb.metadata,
            set: (bb, ab) => {
              bb.metadata = ab
            }
          },
          metadata: Tb
        }, wb, sb), (0, Ab.h)(null, null, Xb, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: bb => "_hasAlpha" in bb,
            get: bb => bb._hasAlpha,
            set: (bb, ab) => {
              bb._hasAlpha = ab
            }
          },
          metadata: Tb
        }, gb, Cb), (0, Ab.h)(null, null, jb, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: bb => "_getAlphaFromRGB" in bb,
            get: bb => bb._getAlphaFromRGB,
            set: (bb, ab) => {
              bb._getAlphaFromRGB = ab
            }
          },
          metadata: Tb
        }, Vb, Ob), (0, Ab.h)(null, null, Rb, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: bb => "level" in bb,
            get: bb => bb.level,
            set: (bb, ab) => {
              bb.level = ab
            }
          },
          metadata: Tb
        }, cb, Jb), (0, Ab.h)(null, null, kb, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: bb => "_coordinatesIndex" in bb,
            get: bb => bb._coordinatesIndex,
            set: (bb, ab) => {
              bb._coordinatesIndex = ab
            }
          },
          metadata: Tb
        }, nb, Sb), (0, Ab.h)(null, null, yb, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: bb => "optimizeUVAllocation" in bb,
            get: bb => bb.optimizeUVAllocation,
            set: (bb, ab) => {
              bb.optimizeUVAllocation = ab
            }
          },
          metadata: Tb
        }, ba, aa), (0, Ab.h)(null, null, Zb, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "_coordinatesMode" in bb,
            get: bb => bb._coordinatesMode,
            set: (bb, ab) => {
              bb._coordinatesMode = ab
            }
          },
          metadata: Tb
        }, Ua, Aa), (0, Ab.h)(null, null, xb, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: bb => "wrapR" in bb,
            get: bb => bb.wrapR,
            set: (bb, ab) => {
              bb.wrapR = ab
            }
          },
          metadata: Tb
        }, Ma, Ta), (0, Ab.h)(null, null, ib, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: bb => "anisotropicFilteringLevel" in bb,
            get: bb => bb.anisotropicFilteringLevel,
            set: (bb, ab) => {
              bb.anisotropicFilteringLevel = ab
            }
          },
          metadata: Tb
        }, Ea, Ya), (0, Ab.h)(null, null, Wb, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: bb => "invertZ" in bb,
            get: bb => bb.invertZ,
            set: (bb, ab) => {
              bb.invertZ = ab
            }
          },
          metadata: Tb
        }, Ba, ea), (0, Ab.h)(null, null, Hb, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: bb => "lodLevelInAlpha" in bb,
            get: bb => bb.lodLevelInAlpha,
            set: (bb, ab) => {
              bb.lodLevelInAlpha = ab
            }
          },
          metadata: Tb
        }, va, La), (0, Ab.h)(null, null, Gb, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: bb => "isRenderTarget" in bb,
            get: bb => bb.isRenderTarget,
            set: (bb, ab) => {
              bb.isRenderTarget = ab
            }
          },
          metadata: Tb
        }, Pa, Xa), Tb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Tb
        })
      })(), bb.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, bb
    })();
    (Lb = jb.prototype).forceSphericalPolynomialsRecompute ?? (Lb.forceSphericalPolynomialsRecompute = (0, Xb.i)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(jb.prototype, "sphericalPolynomial") || Object.defineProperty(jb.prototype, "sphericalPolynomial", (0, Xb.g)("BaseTexture", "sphericalPolynomial"))
  },
  39605: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => xb,
      e: () => Db
    });
    var Ab = Ub(39104),
      Mb = Ub(39110),
      Tb = Ub(36431),
      Eb = Ub(36401),
      Yb = Ub(39099),
      Bb = Ub(36447),
      eb = Ub(38982),
      vb = Ub(38993),
      Lb = Ub(39197),
      Pb = Ub(37122),
      Xb = Ub(39163);

    function jb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Ab = ab.width,
        Mb = ab.height;
      if (bb instanceof Float32Array) {
        let ab = bb.byteLength / bb.BYTES_PER_ELEMENT;
        const Ub = new Uint8Array(ab);
        for (; --ab >= 0;) {
          let Ab = bb[ab];
          Ab < 0 ? Ab = 0 : Ab > 1 && (Ab = 1), Ub[ab] = 255 * Ab
        }
        bb = Ub
      }
      const Tb = document.createElement("canvas");
      Tb.width = Ab, Tb.height = Mb;
      const Eb = Tb.getContext("2d");
      if (!Eb) return null;
      const Yb = Eb.createImageData(Ab, Mb);
      if (Yb.data.set(bb), Eb.putImageData(Yb, 0, 0), Ub) {
        const bb = document.createElement("canvas");
        bb.width = Ab, bb.height = Mb;
        const ab = bb.getContext("2d");
        return ab ? (ab.translate(0, Mb), ab.scale(1, -1), ab.drawImage(Tb, 0, 0), bb.toDataURL("image/png")) : null
      }
      return Tb.toDataURL("image/png")
    }

    function Rb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Ab = bb.getInternalTexture();
      if (!Ab) return null;
      const Mb = bb._readPixelsSync(ab, Ub);
      return Mb ? jb(Mb, bb.getSize(), Ab.invertY) : null
    }
    async function kb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Ab = bb.getInternalTexture();
      if (!Ab) return null;
      const Mb = await bb.readPixels(ab, Ub);
      return Mb ? jb(Mb, bb.getSize(), Ab.invertY) : null
    }
    var yb = Ub(39549),
      Zb = Ub(39124);
    let Db = (() => {
        var bb;
        let ab, Ub, jb, Db, zb, xb, ib, fb, mb, pb, Nb, Wb, Hb, Ib = Yb.b,
          db = [],
          Fb = [],
          hb = [],
          Gb = [],
          Qb = [],
          qb = [],
          ub = [],
          rb = [],
          Kb = [],
          ob = [],
          lb = [],
          tb = [],
          wb = [],
          sb = [],
          gb = [],
          Cb = [],
          Vb = [],
          Ob = [],
          cb = [],
          Jb = [],
          nb = [],
          Sb = [],
          ba = [],
          aa = [],
          Ua = [];
        return bb = class extends Ib {
          static _CreateVideoTexture(ab, Ub, Ab) {
            arguments.length > 5 && void 0 !== arguments[5] || bb.TRILINEAR_SAMPLINGMODE;
            throw (0, eb.l)("VideoTexture")
          }
          get noMipmap() {
            return this._noMipmap
          }
          get mimeType() {
            return this._mimeType
          }
          set isBlocking(bb) {
            this._isBlocking = bb
          }
          get isBlocking() {
            return this._isBlocking
          }
          get invertY() {
            return this._invertY
          }
          constructor(ab, Ub, Mb, Eb) {
            let Yb, Bb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : bb.TRILINEAR_SAMPLINGMODE,
              eb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Lb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              Pb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Xb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              jb = arguments.length > 9 ? arguments[9] : void 0,
              Rb = arguments.length > 10 ? arguments[10] : void 0,
              kb = arguments.length > 11 ? arguments[11] : void 0,
              Zb = arguments.length > 12 ? arguments[12] : void 0,
              Db = arguments.length > 13 ? arguments[13] : void 0;
            super(Ub), this.url = ((0, Ab.k)(this, db), (0, Ab.k)(this, Fb, null)), this.uOffset = ((0, Ab.k)(this, hb), (0, Ab.k)(this, Gb, 0)), this.vOffset = ((0, Ab.k)(this, Qb), (0, Ab.k)(this, qb, 0)), this.uScale = ((0, Ab.k)(this, ub), (0, Ab.k)(this, rb, 1)), this.vScale = ((0, Ab.k)(this, Kb), (0, Ab.k)(this, ob, 1)), this.uAng = ((0, Ab.k)(this, lb), (0, Ab.k)(this, tb, 0)), this.vAng = ((0, Ab.k)(this, wb), (0, Ab.k)(this, sb, 0)), this.wAng = ((0, Ab.k)(this, gb), (0, Ab.k)(this, Cb, 0)), this.uRotationCenter = ((0, Ab.k)(this, Vb), (0, Ab.k)(this, Ob, .5)), this.vRotationCenter = ((0, Ab.k)(this, cb), (0, Ab.k)(this, Jb, .5)), this.wRotationCenter = ((0, Ab.k)(this, nb), (0, Ab.k)(this, Sb, .5)), this.homogeneousRotationInUVTransform = ((0, Ab.k)(this, ba), (0, Ab.k)(this, aa, !1)), this.inspectableCustomProperties = ((0, Ab.k)(this, Ua), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new Tb.b, this._isBlocking = !0, this.name = ab || "", this.url = ab;
            let zb = !1,
              xb = null,
              ib = !0;
            "object" === typeof Mb && null !== Mb ? (Yb = Mb.noMipmap ?? !1, Eb = Mb.invertY ?? !yb.e, Bb = Mb.samplingMode ?? bb.TRILINEAR_SAMPLINGMODE, eb = Mb.onLoad ?? null, Lb = Mb.onError ?? null, Pb = Mb.buffer ?? null, Xb = Mb.deleteBuffer ?? !1, jb = Mb.format, Rb = Mb.mimeType, kb = Mb.loaderOptions, Zb = Mb.creationFlags, zb = Mb.useSRGBBuffer ?? !1, xb = Mb.internalTexture ?? null, ib = Mb.gammaSpace ?? ib, Db = Mb.forcedExtension ?? Db) : Yb = !!Mb, this._gammaSpace = ib, this._noMipmap = Yb, this._invertY = void 0 === Eb ? !yb.e : Eb, this._initialSamplingMode = Bb, this._buffer = Pb, this._deleteBuffer = Xb, this._mimeType = Rb, this._loaderOptions = kb, this._creationFlags = Zb, this._useSRGBBuffer = zb, this._forcedExtension = Db, void 0 !== jb && (this._format = jb);
            const fb = this.oN(),
              mb = this._getEngine();
            if (!mb) return;
            mb.onBeforeTextureInitObservable.notifyObservers(this);
            const pb = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), eb && eb(), !this.isBlocking && fb && fb.resetCachedMaterial()
              },
              Nb = (ab, Ub) => {
                this._loadingError = !0, this._errorObject = {
                  message: ab,
                  exception: Ub
                }, Lb && Lb(ab, Ub), bb.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !xb) return this._delayedOnLoad = pb, void(this._delayedOnError = Nb);
            if (this._texture = xb ?? this._getFromCache(this.url, Yb, Bb, this._invertY, zb, this.isCube), this._texture)
              if (this._texture.isReady) vb.c.SetImmediate((() => pb()));
              else {
                const bb = this._texture.onLoadedObservable.add(pb);
                this._texture.onErrorObservable.add((ab => {
                  Nb(ab.message, ab.exception), this._texture?.onLoadedObservable.remove(bb)
                }))
              }
            else if (fb && fb.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = pb, this._delayedOnError = Nb;
            else {
              try {
                this._texture = mb.createTexture(this.url, Yb, this._invertY, fb, Bb, pb, Nb, this._buffer, void 0, this._format, this._forcedExtension, Rb, kb, Zb, zb)
              } catch (Wb) {
                throw Nb("error loading", Wb), Wb
              }
              Xb && (this._buffer = null)
            }
          }
          updateURL(bb) {
            let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              Ub = arguments.length > 2 ? arguments[2] : void 0,
              Ab = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.oN().markAllMaterialsAsDirty(1, (bb => bb.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = bb), this.url = bb, this._buffer = ab, this._forcedExtension = Ab, this.delayLoadState = 4;
            const Mb = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              Mb ? Mb() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), Ub && Ub()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const bb = this.oN();
            if (!bb) return;
            let ab = this.url;
            !ab && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (ab = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(ab, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? vb.c.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = bb.vj().createTexture(ab, this._noMipmap, this._invertY, bb, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(bb, ab, Ub, Ab) {
            bb *= this._cachedUScale, ab *= this._cachedVScale, bb -= this.uRotationCenter * this._cachedUScale, ab -= this.vRotationCenter * this._cachedVScale, Ub -= this.wRotationCenter, Eb.m.TransformCoordinatesFromFloatsToRef(bb, ab, Ub, this._rowGenerationMatrix, Ab), Ab.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, Ab.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, Ab.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * bb === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * bb, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = Eb.b.Zero(), this._rowGenerationMatrix = new Eb.b, this._t0 = Eb.m.Zero(), this._t1 = Eb.m.Zero(), this._t2 = Eb.m.Zero()), Eb.b.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (Eb.b.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, Eb.j.Matrix[0]), Eb.b.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, Eb.j.Matrix[1]), Eb.b.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, Eb.j.Matrix[2]), Eb.b.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, Eb.j.Matrix[3]), Eb.j.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Eb.j.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Eb.j.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Eb.j.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.MAb(this._t0), this._t2.MAb(this._t0), Eb.b.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const ab = this.oN();
            if (!ab) return this._cachedTextureMatrix;
            const Ub = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && Ub !== this._cachedIdentity3x2 && ab.markAllMaterialsAsDirty(1, (bb => bb.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const ab = this.oN();
            if (!ab) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== bb.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === ab.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = Eb.b.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = Eb.b.Zero());
            const Ub = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case bb.PLANAR_MODE:
                Eb.b.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case bb.PROJECTION_MODE: {
                Eb.b.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const bb = ab.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = bb.updateFlag, bb.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                Eb.b.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return Ub && ab.markAllMaterialsAsDirty(1, (bb => bb.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const ab = {
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
            return Zb.b.Clone((() => new bb(this._texture ? this._texture.url : null, this.oN(), ab)), this)
          }
          serialize() {
            const ab = this.name;
            bb.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const Ub = super.serialize(bb._SerializeInternalTextureUniqueId);
            if (!Ub) return null;
            if (bb.SerializeBuffers || bb.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) Ub.base64String = this._buffer, Ub.name = Ub.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const bb = this.mimeType || "image/png";
              Ub.base64String = `data:${bb};base64,${(0,Xb.g)(this._buffer)}`
            } else(bb.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (Ub.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? Rb(this) : kb(this));
            return Ub.invertY = this._invertY, Ub.samplingMode = this.samplingMode, Ub._creationFlags = this._creationFlags, Ub._useSRGBBuffer = this._useSRGBBuffer, bb._SerializeInternalTextureUniqueId && (Ub.internalTextureUniqueId = this._texture?.uniqueId), Ub.internalTextureLabel = this._texture?.label, Ub.noMipmap = this._noMipmap, this.name = ab, Ub
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(ab, Ub, Ab) {
            if (ab.customType) {
              const bb = Lb.e.Instantiate(ab.customType).Parse(ab, Ub, Ab);
              return ab.samplingMode && bb.updateSamplingMode && bb._samplingMode && bb._samplingMode !== ab.samplingMode && bb.updateSamplingMode(ab.samplingMode), bb
            }
            if (ab.isCube && !ab.isRenderTarget) return bb._CubeTextureParser(ab, Ub, Ab);
            const Mb = void 0 !== ab.internalTextureUniqueId;
            if (!ab.name && !ab.isRenderTarget && !Mb) return null;
            let Tb;
            if (Mb) {
              const bb = Ub.vj().getLoadedTexturesCache();
              for (const Ub of bb)
                if (Ub.uniqueId === ab.internalTextureUniqueId) {
                  Tb = Ub;
                  break
                }
            }
            const Eb = bb => {
              if (bb && bb._texture && (bb._texture._cachedWrapU = null, bb._texture._cachedWrapV = null, bb._texture._cachedWrapR = null), ab.samplingMode) {
                const Ub = ab.samplingMode;
                bb && bb.samplingMode !== Ub && bb.updateSamplingMode(Ub)
              }
              if (bb && ab.animations)
                for (let Ub = 0; Ub < ab.animations.length; Ub++) {
                  const Ab = ab.animations[Ub],
                    Mb = (0, Bb.b)("BABYLON.Animation");
                  Mb && bb.animations.push(Mb.Parse(Ab))
                }
              bb && bb._texture && (Mb && !Tb && bb._texture._setUniqueId(ab.internalTextureUniqueId), bb._texture.label = ab.internalTextureLabel)
            };
            return Zb.b.Parse((() => {
              let Mb = !0;
              if (ab.noMipmap && (Mb = !1), ab.mirrorPlane) {
                const Ab = bb._CreateMirror(ab.name, ab.renderTargetSize, Ub, Mb);
                return Ab._waitingRenderList = ab.renderList, Ab.mirrorPlane = Pb.b.FromArray(ab.mirrorPlane), Eb(Ab), Ab
              }
              if (ab.isRenderTarget && !ab.base64String) {
                let Ab = null;
                if (ab.isCube) {
                  if (Ub.reflectionProbes)
                    for (let bb = 0; bb < Ub.reflectionProbes.length; bb++) {
                      const Ab = Ub.reflectionProbes[bb];
                      if (Ab.name === ab.name) return Ab.cubeTexture
                    }
                } else Ab = bb._CreateRenderTargetTexture(ab.name, ab.renderTargetSize, Ub, Mb, ab._creationFlags ?? 0), Ab._waitingRenderList = ab.renderList;
                return Eb(Ab), Ab
              }
              if (ab.isVideo) {
                const Tb = bb._CreateVideoTexture(Ab + (ab.url || ab.name), Ab + (ab.src || ab.url), Ub, Mb, ab.invertY, ab.samplingMode, ab.settings || {});
                return Eb(Tb), Tb
              } {
                let Yb;
                if ("string" === typeof ab.base64String && ab.base64String && !Tb) {
                  const Ab = {
                      buffer: ab.base64String,
                      noMipmap: !Mb,
                      invertY: ab.invertY,
                      samplingMode: ab.samplingMode,
                      useSRGBBuffer: ab._useSRGBBuffer ?? !1,
                      creationFlags: ab._creationFlags ?? 0,
                      onLoad: () => {
                        Eb(Yb)
                      }
                    },
                    Tb = ab.base64String,
                    Bb = Tb.startsWith("data:") ? Tb.substring(5) : Tb;
                  Yb = bb.CreateFromBase64String("", Bb, Ub, Ab), Yb.name = ab.name
                } else {
                  let Bb;
                  Bb = ab.name && (ab.name.indexOf("://") > 0 || ab.name.startsWith("data:")) ? ab.name : Ab + ab.name, ab.url && (ab.url.startsWith("data:") || bb.UseSerializedUrlIfAny) && (Bb = ab.url);
                  const eb = {
                    noMipmap: !Mb,
                    invertY: ab.invertY,
                    samplingMode: ab.samplingMode,
                    useSRGBBuffer: ab._useSRGBBuffer ?? !1,
                    creationFlags: ab._creationFlags ?? 0,
                    onLoad: () => {
                      Eb(Yb)
                    },
                    internalTexture: Tb
                  };
                  Yb = new bb(Bb, Ub, eb)
                }
                return Yb
              }
            }), ab, Ub)
          }
          static CreateFromBase64String(ab, Ub, Ab, Mb, Tb) {
            let Eb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : bb.TRILINEAR_SAMPLINGMODE;
            return new bb("data:" + Ub, Ab, Mb, Tb, Eb, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, ab, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(ab, Ub, Ab) {
            let Mb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Tb = arguments.length > 4 ? arguments[4] : void 0,
              Eb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              Yb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : bb.TRILINEAR_SAMPLINGMODE,
              Bb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              eb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              vb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              Lb = arguments.length > 10 ? arguments[10] : void 0,
              Pb = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== ab.substring(0, 5) && (ab = "data:" + ab), new bb(ab, Ab, Tb, Eb, Yb, Bb, eb, Ub, Mb, vb, void 0, void 0, Lb, Pb)
          }
        }, (() => {
          const Tb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ib[Symbol.metadata] ?? null) : void 0;
          ab = [(0, Mb.K)()], Ub = [(0, Mb.K)()], jb = [(0, Mb.K)()], Db = [(0, Mb.K)()], zb = [(0, Mb.K)()], xb = [(0, Mb.K)()], ib = [(0, Mb.K)()], fb = [(0, Mb.K)()], mb = [(0, Mb.K)()], pb = [(0, Mb.K)()], Nb = [(0, Mb.K)()], Wb = [(0, Mb.K)()], Hb = [(0, Mb.K)()], (0, Ab.h)(bb, null, Hb, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: bb => "isBlocking" in bb,
              get: bb => bb.isBlocking
            },
            metadata: Tb
          }, null, db), (0, Ab.h)(null, null, ab, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: bb => "url" in bb,
              get: bb => bb.url,
              set: (bb, ab) => {
                bb.url = ab
              }
            },
            metadata: Tb
          }, Fb, hb), (0, Ab.h)(null, null, Ub, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: bb => "uOffset" in bb,
              get: bb => bb.uOffset,
              set: (bb, ab) => {
                bb.uOffset = ab
              }
            },
            metadata: Tb
          }, Gb, Qb), (0, Ab.h)(null, null, jb, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: bb => "vOffset" in bb,
              get: bb => bb.vOffset,
              set: (bb, ab) => {
                bb.vOffset = ab
              }
            },
            metadata: Tb
          }, qb, ub), (0, Ab.h)(null, null, Db, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: bb => "uScale" in bb,
              get: bb => bb.uScale,
              set: (bb, ab) => {
                bb.uScale = ab
              }
            },
            metadata: Tb
          }, rb, Kb), (0, Ab.h)(null, null, zb, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: bb => "vScale" in bb,
              get: bb => bb.vScale,
              set: (bb, ab) => {
                bb.vScale = ab
              }
            },
            metadata: Tb
          }, ob, lb), (0, Ab.h)(null, null, xb, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: bb => "uAng" in bb,
              get: bb => bb.uAng,
              set: (bb, ab) => {
                bb.uAng = ab
              }
            },
            metadata: Tb
          }, tb, wb), (0, Ab.h)(null, null, ib, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: bb => "vAng" in bb,
              get: bb => bb.vAng,
              set: (bb, ab) => {
                bb.vAng = ab
              }
            },
            metadata: Tb
          }, sb, gb), (0, Ab.h)(null, null, fb, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: bb => "wAng" in bb,
              get: bb => bb.wAng,
              set: (bb, ab) => {
                bb.wAng = ab
              }
            },
            metadata: Tb
          }, Cb, Vb), (0, Ab.h)(null, null, mb, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: bb => "uRotationCenter" in bb,
              get: bb => bb.uRotationCenter,
              set: (bb, ab) => {
                bb.uRotationCenter = ab
              }
            },
            metadata: Tb
          }, Ob, cb), (0, Ab.h)(null, null, pb, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: bb => "vRotationCenter" in bb,
              get: bb => bb.vRotationCenter,
              set: (bb, ab) => {
                bb.vRotationCenter = ab
              }
            },
            metadata: Tb
          }, Jb, nb), (0, Ab.h)(null, null, Nb, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: bb => "wRotationCenter" in bb,
              get: bb => bb.wRotationCenter,
              set: (bb, ab) => {
                bb.wRotationCenter = ab
              }
            },
            metadata: Tb
          }, Sb, ba), (0, Ab.h)(null, null, Wb, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: bb => "homogeneousRotationInUVTransform" in bb,
              get: bb => bb.homogeneousRotationInUVTransform,
              set: (bb, ab) => {
                bb.homogeneousRotationInUVTransform = ab
              }
            },
            metadata: Tb
          }, aa, Ua), Tb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Tb
          })
        })(), bb.SerializeBuffers = !0, bb.ForceSerializeBuffers = !1, bb.OnTextureLoadErrorObservable = new Tb.b, bb._SerializeInternalTextureUniqueId = !1, bb._CubeTextureParser = (bb, ab, Ub) => {
          throw (0, eb.l)("CubeTexture")
        }, bb._CreateMirror = (bb, ab, Ub, Ab) => {
          throw (0, eb.l)("MirrorTexture")
        }, bb._CreateRenderTargetTexture = (bb, ab, Ub, Ab, Mb) => {
          throw (0, eb.l)("RenderTargetTexture")
        }, bb.NEAREST_SAMPLINGMODE = 1, bb.NEAREST_NEAREST_MIPLINEAR = 8, bb.BILINEAR_SAMPLINGMODE = 2, bb.LINEAR_LINEAR_MIPNEAREST = 11, bb.TRILINEAR_SAMPLINGMODE = 3, bb.LINEAR_LINEAR_MIPLINEAR = 3, bb.NEAREST_NEAREST_MIPNEAREST = 4, bb.NEAREST_LINEAR_MIPNEAREST = 5, bb.NEAREST_LINEAR_MIPLINEAR = 6, bb.NEAREST_LINEAR = 7, bb.NEAREST_NEAREST = 1, bb.LINEAR_NEAREST_MIPNEAREST = 9, bb.LINEAR_NEAREST_MIPLINEAR = 10, bb.LINEAR_LINEAR = 2, bb.LINEAR_NEAREST = 12, bb.EXPLICIT_MODE = 0, bb.SPHERICAL_MODE = 1, bb.PLANAR_MODE = 2, bb.CUBIC_MODE = 3, bb.PROJECTION_MODE = 4, bb.SKYBOX_MODE = 5, bb.INVCUBIC_MODE = 6, bb.EQUIRECTANGULAR_MODE = 7, bb.FIXED_EQUIRECTANGULAR_MODE = 8, bb.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, bb.CLAMP_ADDRESSMODE = 0, bb.WRAP_ADDRESSMODE = 1, bb.MIRROR_ADDRESSMODE = 2, bb.UseSerializedUrlIfAny = !1, bb
      })(),
      zb = !1;

    function xb() {
      zb || (zb = !0, (0, Bb.f)("BABYLON.Texture", Db), Zb.b._TextureParser = Db.Parse)
    }
  },
  39120: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Ab
    });
    class Ab {
      constructor(bb, ab) {
        this.width = bb, this.height = ab
      }
      toString() {
        return `{W: ${this.width}, H: ${this.height}}`
      }
      getClassName() {
        return "Size"
      }
      getHashCode() {
        let bb = 0 | this.width;
        return bb = 397 * bb ^ this.height, bb
      }
      EUb(bb) {
        this.width = bb.width, this.height = bb.height
      }
      K9(bb, ab) {
        return this.width = bb, this.height = ab, this
      }
      set(bb, ab) {
        return this.K9(bb, ab)
      }
      multiplyByFloats(bb, ab) {
        return new Ab(this.width * bb, this.height * ab)
      }
      clone() {
        return new Ab(this.width, this.height)
      }
      equals(bb) {
        return !!bb && (this.width === bb.width && this.height === bb.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new Ab(0, 0)
      }
      add(bb) {
        return new Ab(this.width + bb.width, this.height + bb.height)
      }
      subtract(bb) {
        return new Ab(this.width - bb.width, this.height - bb.height)
      }
      scale(bb) {
        return new Ab(this.width * bb, this.height * bb)
      }
      static Lerp(bb, ab, Ub) {
        const Mb = bb.width + (ab.width - bb.width) * Ub,
          Tb = bb.height + (ab.height - bb.height) * Ub;
        return new Ab(Mb, Tb)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);