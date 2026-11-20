export const id = 246;
export const ids = [246];
export const modules = {
  39861: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => kb
    });
    let kb = !1
  },
  39406: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => mb
    });
    var kb = sb(39414),
      Wb = sb(39418),
      ab = sb(36683),
      Tb = sb(36656),
      Ub = sb(36677),
      Ib = sb(37501),
      Hb = sb(39433);
    class fb {
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
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = Hb.c.Zero(), this._cachedBaseSize = Hb.c.Zero(), this._initialSamplingMode = 2, this._texture = fb._IsRenderTargetWrapper(bb) ? bb.texture : bb, this._texture && (this._engine = this._texture.Sm(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(bb, this._texture, this._texture.generateMipMaps && cb)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var Mb, Xb = sb(39441),
      nb = sb(39296);
    let mb = (() => {
      var bb;
      let cb, sb, Hb, Mb, nb, mb, lb, Qb, eb, Cb, Nb, Vb, Lb, ub, Yb, hb, Jb, gb, Bb, tb, yb, Pb, Db, Eb, ib, Ob = fb,
        Gb = [],
        Kb = [],
        Zb = [],
        zb = [],
        qb = [],
        db = [],
        Ab = [],
        wb = [],
        rb = [],
        ob = [],
        Sb = [],
        Rb = [],
        vb = [],
        Fb = [],
        xb = [],
        jb = [],
        pb = [],
        bc = [],
        cc = [],
        sc = [],
        kc = [],
        Wc = [],
        ac = [],
        Tc = [],
        Uc = [],
        Ic = [],
        Hc = [],
        fc = [],
        Mc = [],
        Xc = [],
        nc = [];
      return bb = class extends Ob {
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
          this.EY()?.markAllMaterialsAsDirty(1, (bb => bb.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(bb) {
          bb !== this.isRGBD && (this._texture && (this._texture._isRGBD = bb), this.EY()?.markAllMaterialsAsDirty(1, (bb => bb.hasTexture(this))))
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
          return this._uid || (this._uid = (0, Ib.b)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(bb) {
          this._onDisposeObserver && this.ZY.remove(this._onDisposeObserver), this._onDisposeObserver = this.ZY.add(bb)
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
        constructor(cb) {
          let sb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, kb.m)(this, Gb), (0, kb.m)(this, Kb, void 0)), this.name = ((0, kb.m)(this, Zb), (0, kb.m)(this, zb, void 0)), this.displayName = ((0, kb.m)(this, qb), (0, kb.m)(this, db, void 0)), this.metadata = ((0, kb.m)(this, Ab), (0, kb.m)(this, wb, null)), this._internalMetadata = (0, kb.m)(this, rb), this.reservedDataStore = null, this._hasAlpha = (0, kb.m)(this, ob, !1), this._getAlphaFromRGB = ((0, kb.m)(this, Sb), (0, kb.m)(this, Rb, !1)), this.level = ((0, kb.m)(this, vb), (0, kb.m)(this, Fb, 1)), this._coordinatesIndex = ((0, kb.m)(this, xb), (0, kb.m)(this, jb, 0)), this.optimizeUVAllocation = ((0, kb.m)(this, pb), (0, kb.m)(this, bc, !0)), this._coordinatesMode = ((0, kb.m)(this, cc), (0, kb.m)(this, sc, 0)), this.wrapR = ((0, kb.m)(this, kc), (0, kb.m)(this, Wc, 1)), this.anisotropicFilteringLevel = ((0, kb.m)(this, ac), (0, kb.m)(this, Tc, bb.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, kb.m)(this, Uc), !1), this._gammaSpace = !0, this.invertZ = (0, kb.m)(this, Ic, !1), this.lodLevelInAlpha = ((0, kb.m)(this, Hc), (0, kb.m)(this, fc, !1)), this._dominantDirection = ((0, kb.m)(this, Mc), null), this.isRenderTarget = (0, kb.m)(this, Xc, !1), this._prefiltered = ((0, kb.m)(this, nc), !1), this._forceSerialize = !1, this.animations = [], this.ZY = new ab.c, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, cb ? bb._IsScene(cb) ? this._scene = cb : this._engine = cb : this._scene = Ub.d.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.Sm()), this._texture = sb, this._uid = null
        }
        EY() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return Tb.e.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return Tb.e.IdentityReadOnly
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
        _getFromCache(bb, cb, sb, kb, Wb, ab) {
          const Tb = this._getEngine();
          if (!Tb) return null;
          const Ub = Tb._getUseSRGBBuffer(!!Wb, cb),
            Ib = Tb.getLoadedTexturesCache();
          for (let Hb = 0; Hb < Ib.length; Hb++) {
            const Tb = Ib[Hb];
            if ((void 0 === Wb || Ub === Tb._useSRGBBuffer) && (void 0 === kb || kb === Tb.invertY) && Tb.url === bb && Tb.generateMipMaps === !cb && (!sb || sb === Tb.samplingMode) && (void 0 === ab || ab === Tb.isCube)) return Tb.incrementReferences(), Tb
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
          const bb = this.EY();
          bb && bb.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            kb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            Wb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            Tb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            Ub = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            Ib = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const Hb = this._getEngine();
          if (!Hb) return null;
          const fb = this.getSize();
          let Mb = fb.width,
            Xb = fb.height;
          0 !== cb && (Mb /= Math.pow(2, cb), Xb /= Math.pow(2, cb), Mb = Math.round(Mb), Xb = Math.round(Xb)), Ub = Math.min(Mb, Ub), Ib = Math.min(Xb, Ib);
          try {
            return this._texture.isCube || this._texture.is2DArray ? Hb._readTexturePixels(this._texture, Ub, Ib, bb, cb, sb, kb, Wb, ab, Tb) : Hb._readTexturePixels(this._texture, Ub, Ib, -1, cb, sb, kb, Wb, ab, Tb)
          } catch (nb) {
            return null
          }
        }
        _readPixelsSync() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            kb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            Wb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const ab = this.getSize();
          let Tb = ab.width,
            Ub = ab.height;
          const Ib = this._getEngine();
          if (!Ib) return null;
          0 != cb && (Tb /= Math.pow(2, cb), Ub /= Math.pow(2, cb), Tb = Math.round(Tb), Ub = Math.round(Ub));
          try {
            return this._texture.isCube ? Ib._readTexturePixelsSync(this._texture, Tb, Ub, bb, cb, sb, kb, Wb) : Ib._readTexturePixelsSync(this._texture, Tb, Ub, -1, cb, sb, kb, Wb)
          } catch (Hb) {
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
          this.ZY.notifyObservers(this), this.ZY.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !bb) return null;
          const cb = Xb.d.Serialize(this);
          return Xb.d.AppendSerializedAnimations(this, cb), cb
        }
        static WhenAllReady(bb, cb) {
          let sb = bb.length;
          if (0 !== sb)
            for (let kb = 0; kb < bb.length; kb++) {
              const Wb = bb[kb];
              if (Wb.isReady()) 0 === --sb && cb();
              else {
                const bb = Wb.onLoadObservable;
                bb ? bb.addOnce((() => {
                  0 === --sb && cb()
                })) : 0 === --sb && cb()
              }
            } else cb()
        }
        static _IsScene(bb) {
          return "Scene" === bb.getClassName()
        }
      }, (() => {
        const ab = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ob[Symbol.metadata] ?? null) : void 0;
        cb = [(0, Wb.E)()], sb = [(0, Wb.E)()], Hb = [(0, Wb.E)()], Mb = [(0, Wb.E)()], nb = [(0, Wb.E)("hasAlpha")], mb = [(0, Wb.E)("getAlphaFromRGB")], lb = [(0, Wb.E)()], Qb = [(0, Wb.E)("coordinatesIndex")], eb = [(0, Wb.E)()], Cb = [(0, Wb.E)("coordinatesMode")], Nb = [(0, Wb.E)()], Vb = [(0, Wb.E)()], Lb = [(0, Wb.E)()], ub = [(0, Wb.E)()], Yb = [(0, Wb.E)()], hb = [(0, Wb.E)()], Jb = [(0, Wb.E)()], gb = [(0, Wb.E)()], Bb = [(0, Wb.E)()], tb = [(0, Wb.E)()], yb = [(0, Wb.E)()], Pb = [(0, Wb.E)()], Db = [(0, Wb.E)()], Eb = [(0, Wb.x)()], ib = [(0, Wb.E)()], (0, kb.j)(bb, null, Nb, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: bb => "wrapU" in bb,
            get: bb => bb.wrapU
          },
          metadata: ab
        }, null, Gb), (0, kb.j)(bb, null, Vb, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: bb => "wrapV" in bb,
            get: bb => bb.wrapV
          },
          metadata: ab
        }, null, Gb), (0, kb.j)(bb, null, Yb, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: bb => "isCube" in bb,
            get: bb => bb.isCube
          },
          metadata: ab
        }, null, Gb), (0, kb.j)(bb, null, hb, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: bb => "is3D" in bb,
            get: bb => bb.is3D
          },
          metadata: ab
        }, null, Gb), (0, kb.j)(bb, null, Jb, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: bb => "is2DArray" in bb,
            get: bb => bb.is2DArray
          },
          metadata: ab
        }, null, Gb), (0, kb.j)(bb, null, gb, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: bb => "gammaSpace" in bb,
            get: bb => bb.gammaSpace
          },
          metadata: ab
        }, null, Gb), (0, kb.j)(bb, null, yb, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: bb => "lodGenerationOffset" in bb,
            get: bb => bb.lodGenerationOffset
          },
          metadata: ab
        }, null, Gb), (0, kb.j)(bb, null, Pb, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: bb => "lodGenerationScale" in bb,
            get: bb => bb.lodGenerationScale
          },
          metadata: ab
        }, null, Gb), (0, kb.j)(bb, null, Db, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: bb => "linearSpecularLOD" in bb,
            get: bb => bb.linearSpecularLOD
          },
          metadata: ab
        }, null, Gb), (0, kb.j)(bb, null, Eb, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "irradianceTexture" in bb,
            get: bb => bb.irradianceTexture
          },
          metadata: ab
        }, null, Gb), (0, kb.j)(null, null, cb, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: bb => "uniqueId" in bb,
            get: bb => bb.uniqueId,
            set: (bb, cb) => {
              bb.uniqueId = cb
            }
          },
          metadata: ab
        }, Kb, Zb), (0, kb.j)(null, null, sb, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: bb => "name" in bb,
            get: bb => bb.name,
            set: (bb, cb) => {
              bb.name = cb
            }
          },
          metadata: ab
        }, zb, qb), (0, kb.j)(null, null, Hb, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: bb => "displayName" in bb,
            get: bb => bb.displayName,
            set: (bb, cb) => {
              bb.displayName = cb
            }
          },
          metadata: ab
        }, db, Ab), (0, kb.j)(null, null, Mb, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: bb => "metadata" in bb,
            get: bb => bb.metadata,
            set: (bb, cb) => {
              bb.metadata = cb
            }
          },
          metadata: ab
        }, wb, rb), (0, kb.j)(null, null, nb, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: bb => "_hasAlpha" in bb,
            get: bb => bb._hasAlpha,
            set: (bb, cb) => {
              bb._hasAlpha = cb
            }
          },
          metadata: ab
        }, ob, Sb), (0, kb.j)(null, null, mb, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: bb => "_getAlphaFromRGB" in bb,
            get: bb => bb._getAlphaFromRGB,
            set: (bb, cb) => {
              bb._getAlphaFromRGB = cb
            }
          },
          metadata: ab
        }, Rb, vb), (0, kb.j)(null, null, lb, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: bb => "level" in bb,
            get: bb => bb.level,
            set: (bb, cb) => {
              bb.level = cb
            }
          },
          metadata: ab
        }, Fb, xb), (0, kb.j)(null, null, Qb, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: bb => "_coordinatesIndex" in bb,
            get: bb => bb._coordinatesIndex,
            set: (bb, cb) => {
              bb._coordinatesIndex = cb
            }
          },
          metadata: ab
        }, jb, pb), (0, kb.j)(null, null, eb, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: bb => "optimizeUVAllocation" in bb,
            get: bb => bb.optimizeUVAllocation,
            set: (bb, cb) => {
              bb.optimizeUVAllocation = cb
            }
          },
          metadata: ab
        }, bc, cc), (0, kb.j)(null, null, Cb, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "_coordinatesMode" in bb,
            get: bb => bb._coordinatesMode,
            set: (bb, cb) => {
              bb._coordinatesMode = cb
            }
          },
          metadata: ab
        }, sc, kc), (0, kb.j)(null, null, Lb, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: bb => "wrapR" in bb,
            get: bb => bb.wrapR,
            set: (bb, cb) => {
              bb.wrapR = cb
            }
          },
          metadata: ab
        }, Wc, ac), (0, kb.j)(null, null, ub, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: bb => "anisotropicFilteringLevel" in bb,
            get: bb => bb.anisotropicFilteringLevel,
            set: (bb, cb) => {
              bb.anisotropicFilteringLevel = cb
            }
          },
          metadata: ab
        }, Tc, Uc), (0, kb.j)(null, null, Bb, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: bb => "invertZ" in bb,
            get: bb => bb.invertZ,
            set: (bb, cb) => {
              bb.invertZ = cb
            }
          },
          metadata: ab
        }, Ic, Hc), (0, kb.j)(null, null, tb, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: bb => "lodLevelInAlpha" in bb,
            get: bb => bb.lodLevelInAlpha,
            set: (bb, cb) => {
              bb.lodLevelInAlpha = cb
            }
          },
          metadata: ab
        }, fc, Mc), (0, kb.j)(null, null, ib, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: bb => "isRenderTarget" in bb,
            get: bb => bb.isRenderTarget,
            set: (bb, cb) => {
              bb.isRenderTarget = cb
            }
          },
          metadata: ab
        }, Xc, nc), ab && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ab
        })
      })(), bb.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, bb
    })();
    (Mb = mb.prototype).forceSphericalPolynomialsRecompute ?? (Mb.forceSphericalPolynomialsRecompute = (0, nb.e)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(mb.prototype, "sphericalPolynomial") || Object.defineProperty(mb.prototype, "sphericalPolynomial", (0, nb.d)("BaseTexture", "sphericalPolynomial"))
  },
  39895: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Lb,
      e: () => Nb
    });
    var kb = sb(39414),
      Wb = sb(39418),
      ab = sb(36683),
      Tb = sb(36656),
      Ub = sb(39406),
      Ib = sb(36698),
      Hb = sb(39296),
      fb = sb(39307),
      Mb = sb(39533),
      Xb = sb(37368),
      nb = sb(39487);

    function mb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const kb = cb.width,
        Wb = cb.height;
      if (bb instanceof Float32Array) {
        let cb = bb.byteLength / bb.BYTES_PER_ELEMENT;
        const sb = new Uint8Array(cb);
        for (; --cb >= 0;) {
          let kb = bb[cb];
          kb < 0 ? kb = 0 : kb > 1 && (kb = 1), sb[cb] = 255 * kb
        }
        bb = sb
      }
      const ab = document.createElement("canvas");
      ab.width = kb, ab.height = Wb;
      const Tb = ab.getContext("2d");
      if (!Tb) return null;
      const Ub = Tb.createImageData(kb, Wb);
      if (Ub.data.set(bb), Tb.putImageData(Ub, 0, 0), sb) {
        const bb = document.createElement("canvas");
        bb.width = kb, bb.height = Wb;
        const cb = bb.getContext("2d");
        return cb ? (cb.translate(0, Wb), cb.scale(1, -1), cb.drawImage(ab, 0, 0), bb.toDataURL("image/png")) : null
      }
      return ab.toDataURL("image/png")
    }

    function lb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const kb = bb.getInternalTexture();
      if (!kb) return null;
      const Wb = bb._readPixelsSync(cb, sb);
      return Wb ? mb(Wb, bb.getSize(), kb.invertY) : null
    }
    async function Qb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const kb = bb.getInternalTexture();
      if (!kb) return null;
      const Wb = await bb.readPixels(cb, sb);
      return Wb ? mb(Wb, bb.getSize(), kb.invertY) : null
    }
    var eb = sb(39861),
      Cb = sb(39441);
    let Nb = (() => {
        var bb;
        let cb, sb, mb, Nb, Vb, Lb, ub, Yb, hb, Jb, gb, Bb, tb, yb = Ub.e,
          Pb = [],
          Db = [],
          Eb = [],
          ib = [],
          Ob = [],
          Gb = [],
          Kb = [],
          Zb = [],
          zb = [],
          qb = [],
          db = [],
          Ab = [],
          wb = [],
          rb = [],
          ob = [],
          Sb = [],
          Rb = [],
          vb = [],
          Fb = [],
          xb = [],
          jb = [],
          pb = [],
          bc = [],
          cc = [],
          sc = [];
        return bb = class extends yb {
          static _CreateVideoTexture(cb, sb, kb) {
            arguments.length > 5 && void 0 !== arguments[5] || bb.TRILINEAR_SAMPLINGMODE;
            throw (0, Hb.i)("VideoTexture")
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
          constructor(cb, sb, Wb, Tb) {
            let Ub, Ib = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : bb.TRILINEAR_SAMPLINGMODE,
              Hb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Mb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              Xb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              nb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              mb = arguments.length > 9 ? arguments[9] : void 0,
              lb = arguments.length > 10 ? arguments[10] : void 0,
              Qb = arguments.length > 11 ? arguments[11] : void 0,
              Cb = arguments.length > 12 ? arguments[12] : void 0,
              Nb = arguments.length > 13 ? arguments[13] : void 0;
            super(sb), this.url = ((0, kb.m)(this, Pb), (0, kb.m)(this, Db, null)), this.uOffset = ((0, kb.m)(this, Eb), (0, kb.m)(this, ib, 0)), this.vOffset = ((0, kb.m)(this, Ob), (0, kb.m)(this, Gb, 0)), this.uScale = ((0, kb.m)(this, Kb), (0, kb.m)(this, Zb, 1)), this.vScale = ((0, kb.m)(this, zb), (0, kb.m)(this, qb, 1)), this.uAng = ((0, kb.m)(this, db), (0, kb.m)(this, Ab, 0)), this.vAng = ((0, kb.m)(this, wb), (0, kb.m)(this, rb, 0)), this.wAng = ((0, kb.m)(this, ob), (0, kb.m)(this, Sb, 0)), this.uRotationCenter = ((0, kb.m)(this, Rb), (0, kb.m)(this, vb, .5)), this.vRotationCenter = ((0, kb.m)(this, Fb), (0, kb.m)(this, xb, .5)), this.wRotationCenter = ((0, kb.m)(this, jb), (0, kb.m)(this, pb, .5)), this.homogeneousRotationInUVTransform = ((0, kb.m)(this, bc), (0, kb.m)(this, cc, !1)), this.inspectableCustomProperties = ((0, kb.m)(this, sc), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new ab.c, this._isBlocking = !0, this.name = cb || "", this.url = cb;
            let Vb = !1,
              Lb = null,
              ub = !0;
            "object" === typeof Wb && null !== Wb ? (Ub = Wb.noMipmap ?? !1, Tb = Wb.invertY ?? !eb.e, Ib = Wb.samplingMode ?? bb.TRILINEAR_SAMPLINGMODE, Hb = Wb.onLoad ?? null, Mb = Wb.onError ?? null, Xb = Wb.buffer ?? null, nb = Wb.deleteBuffer ?? !1, mb = Wb.format, lb = Wb.mimeType, Qb = Wb.loaderOptions, Cb = Wb.creationFlags, Vb = Wb.useSRGBBuffer ?? !1, Lb = Wb.internalTexture ?? null, ub = Wb.gammaSpace ?? ub, Nb = Wb.forcedExtension ?? Nb) : Ub = !!Wb, this._gammaSpace = ub, this._noMipmap = Ub, this._invertY = void 0 === Tb ? !eb.e : Tb, this._initialSamplingMode = Ib, this._buffer = Xb, this._deleteBuffer = nb, this._mimeType = lb, this._loaderOptions = Qb, this._creationFlags = Cb, this._useSRGBBuffer = Vb, this._forcedExtension = Nb, void 0 !== mb && (this._format = mb);
            const Yb = this.EY(),
              hb = this._getEngine();
            if (!hb) return;
            hb.onBeforeTextureInitObservable.notifyObservers(this);
            const Jb = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), Hb && Hb(), !this.isBlocking && Yb && Yb.resetCachedMaterial()
              },
              gb = (cb, sb) => {
                this._loadingError = !0, this._errorObject = {
                  message: cb,
                  exception: sb
                }, Mb && Mb(cb, sb), bb.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !Lb) return this._delayedOnLoad = Jb, void(this._delayedOnError = gb);
            if (this._texture = Lb ?? this._getFromCache(this.url, Ub, Ib, this._invertY, Vb, this.isCube), this._texture)
              if (this._texture.isReady) fb.c.SetImmediate((() => Jb()));
              else {
                const bb = this._texture.onLoadedObservable.add(Jb);
                this._texture.onErrorObservable.add((cb => {
                  gb(cb.message, cb.exception), this._texture?.onLoadedObservable.remove(bb)
                }))
              }
            else if (Yb && Yb.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = Jb, this._delayedOnError = gb;
            else {
              try {
                this._texture = hb.createTexture(this.url, Ub, this._invertY, Yb, Ib, Jb, gb, this._buffer, void 0, this._format, this._forcedExtension, lb, Qb, Cb, Vb)
              } catch (Bb) {
                throw gb("error loading", Bb), Bb
              }
              nb && (this._buffer = null)
            }
          }
          updateURL(bb) {
            let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              sb = arguments.length > 2 ? arguments[2] : void 0,
              kb = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.EY().markAllMaterialsAsDirty(1, (bb => bb.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = bb), this.url = bb, this._buffer = cb, this._forcedExtension = kb, this.delayLoadState = 4;
            const Wb = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              Wb ? Wb() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), sb && sb()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const bb = this.EY();
            if (!bb) return;
            let cb = this.url;
            !cb && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (cb = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(cb, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? fb.c.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = bb.Sm().createTexture(cb, this._noMipmap, this._invertY, bb, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(bb, cb, sb, kb) {
            bb *= this._cachedUScale, cb *= this._cachedVScale, bb -= this.uRotationCenter * this._cachedUScale, cb -= this.vRotationCenter * this._cachedVScale, sb -= this.wRotationCenter, Tb.p.TransformCoordinatesFromFloatsToRef(bb, cb, sb, this._rowGenerationMatrix, kb), kb.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, kb.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, kb.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * bb === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * bb, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = Tb.e.Zero(), this._rowGenerationMatrix = new Tb.e, this._t0 = Tb.p.Zero(), this._t1 = Tb.p.Zero(), this._t2 = Tb.p.Zero()), Tb.e.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (Tb.e.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, Tb.m.Matrix[0]), Tb.e.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, Tb.m.Matrix[1]), Tb.e.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, Tb.m.Matrix[2]), Tb.e.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, Tb.m.Matrix[3]), Tb.m.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Tb.m.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Tb.m.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Tb.m.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.Wkb(this._t0), this._t2.Wkb(this._t0), Tb.e.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const cb = this.EY();
            if (!cb) return this._cachedTextureMatrix;
            const sb = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && sb !== this._cachedIdentity3x2 && cb.markAllMaterialsAsDirty(1, (bb => bb.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const cb = this.EY();
            if (!cb) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== bb.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === cb.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = Tb.e.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = Tb.e.Zero());
            const sb = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case bb.PLANAR_MODE:
                Tb.e.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case bb.PROJECTION_MODE: {
                Tb.e.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const bb = cb.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = bb.updateFlag, bb.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                Tb.e.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return sb && cb.markAllMaterialsAsDirty(1, (bb => bb.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const cb = {
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
            return Cb.d.Clone((() => new bb(this._texture ? this._texture.url : null, this.EY(), cb)), this)
          }
          serialize() {
            const cb = this.name;
            bb.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const sb = super.serialize(bb._SerializeInternalTextureUniqueId);
            if (!sb) return null;
            if (bb.SerializeBuffers || bb.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) sb.base64String = this._buffer, sb.name = sb.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const bb = this.mimeType || "image/png";
              sb.base64String = `data:${bb};base64,${(0,nb.k)(this._buffer)}`
            } else(bb.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (sb.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? lb(this) : Qb(this));
            return sb.invertY = this._invertY, sb.samplingMode = this.samplingMode, sb._creationFlags = this._creationFlags, sb._useSRGBBuffer = this._useSRGBBuffer, bb._SerializeInternalTextureUniqueId && (sb.internalTextureUniqueId = this._texture?.uniqueId), sb.internalTextureLabel = this._texture?.label, sb.noMipmap = this._noMipmap, this.name = cb, sb
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(cb, sb, kb) {
            if (cb.customType) {
              const bb = Mb.d.Instantiate(cb.customType).Parse(cb, sb, kb);
              return cb.samplingMode && bb.updateSamplingMode && bb._samplingMode && bb._samplingMode !== cb.samplingMode && bb.updateSamplingMode(cb.samplingMode), bb
            }
            if (cb.isCube && !cb.isRenderTarget) return bb._CubeTextureParser(cb, sb, kb);
            const Wb = void 0 !== cb.internalTextureUniqueId;
            if (!cb.name && !cb.isRenderTarget && !Wb) return null;
            let ab;
            if (Wb) {
              const bb = sb.Sm().getLoadedTexturesCache();
              for (const sb of bb)
                if (sb.uniqueId === cb.internalTextureUniqueId) {
                  ab = sb;
                  break
                }
            }
            const Tb = bb => {
              if (bb && bb._texture && (bb._texture._cachedWrapU = null, bb._texture._cachedWrapV = null, bb._texture._cachedWrapR = null), cb.samplingMode) {
                const sb = cb.samplingMode;
                bb && bb.samplingMode !== sb && bb.updateSamplingMode(sb)
              }
              if (bb && cb.animations)
                for (let sb = 0; sb < cb.animations.length; sb++) {
                  const kb = cb.animations[sb],
                    Wb = (0, Ib.e)("BABYLON.Animation");
                  Wb && bb.animations.push(Wb.Parse(kb))
                }
              bb && bb._texture && (Wb && !ab && bb._texture._setUniqueId(cb.internalTextureUniqueId), bb._texture.label = cb.internalTextureLabel)
            };
            return Cb.d.Parse((() => {
              let Wb = !0;
              if (cb.noMipmap && (Wb = !1), cb.mirrorPlane) {
                const kb = bb._CreateMirror(cb.name, cb.renderTargetSize, sb, Wb);
                return kb._waitingRenderList = cb.renderList, kb.mirrorPlane = Xb.c.FromArray(cb.mirrorPlane), Tb(kb), kb
              }
              if (cb.isRenderTarget && !cb.base64String) {
                let kb = null;
                if (cb.isCube) {
                  if (sb.reflectionProbes)
                    for (let bb = 0; bb < sb.reflectionProbes.length; bb++) {
                      const kb = sb.reflectionProbes[bb];
                      if (kb.name === cb.name) return kb.cubeTexture
                    }
                } else kb = bb._CreateRenderTargetTexture(cb.name, cb.renderTargetSize, sb, Wb, cb._creationFlags ?? 0), kb._waitingRenderList = cb.renderList;
                return Tb(kb), kb
              }
              if (cb.isVideo) {
                const ab = bb._CreateVideoTexture(kb + (cb.url || cb.name), kb + (cb.src || cb.url), sb, Wb, cb.invertY, cb.samplingMode, cb.settings || {});
                return Tb(ab), ab
              } {
                let Ub;
                if ("string" === typeof cb.base64String && cb.base64String && !ab) {
                  const kb = {
                      buffer: cb.base64String,
                      noMipmap: !Wb,
                      invertY: cb.invertY,
                      samplingMode: cb.samplingMode,
                      useSRGBBuffer: cb._useSRGBBuffer ?? !1,
                      creationFlags: cb._creationFlags ?? 0,
                      onLoad: () => {
                        Tb(Ub)
                      }
                    },
                    ab = cb.base64String,
                    Ib = ab.startsWith("data:") ? ab.substring(5) : ab;
                  Ub = bb.CreateFromBase64String("", Ib, sb, kb), Ub.name = cb.name
                } else {
                  let Ib;
                  Ib = cb.name && (cb.name.indexOf("://") > 0 || cb.name.startsWith("data:")) ? cb.name : kb + cb.name, cb.url && (cb.url.startsWith("data:") || bb.UseSerializedUrlIfAny) && (Ib = cb.url);
                  const Hb = {
                    noMipmap: !Wb,
                    invertY: cb.invertY,
                    samplingMode: cb.samplingMode,
                    useSRGBBuffer: cb._useSRGBBuffer ?? !1,
                    creationFlags: cb._creationFlags ?? 0,
                    onLoad: () => {
                      Tb(Ub)
                    },
                    internalTexture: ab
                  };
                  Ub = new bb(Ib, sb, Hb)
                }
                return Ub
              }
            }), cb, sb)
          }
          static CreateFromBase64String(cb, sb, kb, Wb, ab) {
            let Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : bb.TRILINEAR_SAMPLINGMODE;
            return new bb("data:" + sb, kb, Wb, ab, Tb, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, cb, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(cb, sb, kb) {
            let Wb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              ab = arguments.length > 4 ? arguments[4] : void 0,
              Tb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              Ub = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : bb.TRILINEAR_SAMPLINGMODE,
              Ib = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Hb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              fb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              Mb = arguments.length > 10 ? arguments[10] : void 0,
              Xb = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== cb.substring(0, 5) && (cb = "data:" + cb), new bb(cb, kb, ab, Tb, Ub, Ib, Hb, sb, Wb, fb, void 0, void 0, Mb, Xb)
          }
        }, (() => {
          const ab = "function" === typeof Symbol && Symbol.metadata ? Object.create(yb[Symbol.metadata] ?? null) : void 0;
          cb = [(0, Wb.E)()], sb = [(0, Wb.E)()], mb = [(0, Wb.E)()], Nb = [(0, Wb.E)()], Vb = [(0, Wb.E)()], Lb = [(0, Wb.E)()], ub = [(0, Wb.E)()], Yb = [(0, Wb.E)()], hb = [(0, Wb.E)()], Jb = [(0, Wb.E)()], gb = [(0, Wb.E)()], Bb = [(0, Wb.E)()], tb = [(0, Wb.E)()], (0, kb.j)(bb, null, tb, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: bb => "isBlocking" in bb,
              get: bb => bb.isBlocking
            },
            metadata: ab
          }, null, Pb), (0, kb.j)(null, null, cb, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: bb => "url" in bb,
              get: bb => bb.url,
              set: (bb, cb) => {
                bb.url = cb
              }
            },
            metadata: ab
          }, Db, Eb), (0, kb.j)(null, null, sb, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: bb => "uOffset" in bb,
              get: bb => bb.uOffset,
              set: (bb, cb) => {
                bb.uOffset = cb
              }
            },
            metadata: ab
          }, ib, Ob), (0, kb.j)(null, null, mb, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: bb => "vOffset" in bb,
              get: bb => bb.vOffset,
              set: (bb, cb) => {
                bb.vOffset = cb
              }
            },
            metadata: ab
          }, Gb, Kb), (0, kb.j)(null, null, Nb, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: bb => "uScale" in bb,
              get: bb => bb.uScale,
              set: (bb, cb) => {
                bb.uScale = cb
              }
            },
            metadata: ab
          }, Zb, zb), (0, kb.j)(null, null, Vb, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: bb => "vScale" in bb,
              get: bb => bb.vScale,
              set: (bb, cb) => {
                bb.vScale = cb
              }
            },
            metadata: ab
          }, qb, db), (0, kb.j)(null, null, Lb, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: bb => "uAng" in bb,
              get: bb => bb.uAng,
              set: (bb, cb) => {
                bb.uAng = cb
              }
            },
            metadata: ab
          }, Ab, wb), (0, kb.j)(null, null, ub, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: bb => "vAng" in bb,
              get: bb => bb.vAng,
              set: (bb, cb) => {
                bb.vAng = cb
              }
            },
            metadata: ab
          }, rb, ob), (0, kb.j)(null, null, Yb, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: bb => "wAng" in bb,
              get: bb => bb.wAng,
              set: (bb, cb) => {
                bb.wAng = cb
              }
            },
            metadata: ab
          }, Sb, Rb), (0, kb.j)(null, null, hb, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: bb => "uRotationCenter" in bb,
              get: bb => bb.uRotationCenter,
              set: (bb, cb) => {
                bb.uRotationCenter = cb
              }
            },
            metadata: ab
          }, vb, Fb), (0, kb.j)(null, null, Jb, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: bb => "vRotationCenter" in bb,
              get: bb => bb.vRotationCenter,
              set: (bb, cb) => {
                bb.vRotationCenter = cb
              }
            },
            metadata: ab
          }, xb, jb), (0, kb.j)(null, null, gb, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: bb => "wRotationCenter" in bb,
              get: bb => bb.wRotationCenter,
              set: (bb, cb) => {
                bb.wRotationCenter = cb
              }
            },
            metadata: ab
          }, pb, bc), (0, kb.j)(null, null, Bb, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: bb => "homogeneousRotationInUVTransform" in bb,
              get: bb => bb.homogeneousRotationInUVTransform,
              set: (bb, cb) => {
                bb.homogeneousRotationInUVTransform = cb
              }
            },
            metadata: ab
          }, cc, sc), ab && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ab
          })
        })(), bb.SerializeBuffers = !0, bb.ForceSerializeBuffers = !1, bb.OnTextureLoadErrorObservable = new ab.c, bb._SerializeInternalTextureUniqueId = !1, bb._CubeTextureParser = (bb, cb, sb) => {
          throw (0, Hb.i)("CubeTexture")
        }, bb._CreateMirror = (bb, cb, sb, kb) => {
          throw (0, Hb.i)("MirrorTexture")
        }, bb._CreateRenderTargetTexture = (bb, cb, sb, kb, Wb) => {
          throw (0, Hb.i)("RenderTargetTexture")
        }, bb.NEAREST_SAMPLINGMODE = 1, bb.NEAREST_NEAREST_MIPLINEAR = 8, bb.BILINEAR_SAMPLINGMODE = 2, bb.LINEAR_LINEAR_MIPNEAREST = 11, bb.TRILINEAR_SAMPLINGMODE = 3, bb.LINEAR_LINEAR_MIPLINEAR = 3, bb.NEAREST_NEAREST_MIPNEAREST = 4, bb.NEAREST_LINEAR_MIPNEAREST = 5, bb.NEAREST_LINEAR_MIPLINEAR = 6, bb.NEAREST_LINEAR = 7, bb.NEAREST_NEAREST = 1, bb.LINEAR_NEAREST_MIPNEAREST = 9, bb.LINEAR_NEAREST_MIPLINEAR = 10, bb.LINEAR_LINEAR = 2, bb.LINEAR_NEAREST = 12, bb.EXPLICIT_MODE = 0, bb.SPHERICAL_MODE = 1, bb.PLANAR_MODE = 2, bb.CUBIC_MODE = 3, bb.PROJECTION_MODE = 4, bb.SKYBOX_MODE = 5, bb.INVCUBIC_MODE = 6, bb.EQUIRECTANGULAR_MODE = 7, bb.FIXED_EQUIRECTANGULAR_MODE = 8, bb.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, bb.CLAMP_ADDRESSMODE = 0, bb.WRAP_ADDRESSMODE = 1, bb.MIRROR_ADDRESSMODE = 2, bb.UseSerializedUrlIfAny = !1, bb
      })(),
      Vb = !1;

    function Lb() {
      Vb || (Vb = !0, (0, Ib.h)("BABYLON.Texture", Nb), Cb.d._TextureParser = Nb.Parse)
    }
  },
  39433: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb
    });
    class kb {
      constructor(bb, cb) {
        this.width = bb, this.height = cb
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
      ssb(bb) {
        this.width = bb.width, this.height = bb.height
      }
      I5(bb, cb) {
        return this.width = bb, this.height = cb, this
      }
      set(bb, cb) {
        return this.I5(bb, cb)
      }
      multiplyByFloats(bb, cb) {
        return new kb(this.width * bb, this.height * cb)
      }
      clone() {
        return new kb(this.width, this.height)
      }
      equals(bb) {
        return !!bb && (this.width === bb.width && this.height === bb.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new kb(0, 0)
      }
      add(bb) {
        return new kb(this.width + bb.width, this.height + bb.height)
      }
      subtract(bb) {
        return new kb(this.width - bb.width, this.height - bb.height)
      }
      scale(bb) {
        return new kb(this.width * bb, this.height * bb)
      }
      static Lerp(bb, cb, sb) {
        const Wb = bb.width + (cb.width - bb.width) * sb,
          ab = bb.height + (cb.height - bb.height) * sb;
        return new kb(Wb, ab)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);