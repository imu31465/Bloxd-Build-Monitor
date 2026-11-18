export const id = 235;
export const ids = [235];
export const modules = {
  38935: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Uy
    });
    let Uy = !1
  },
  38457: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => sy
    });
    var Uy = Wy(38464),
      hy = Wy(38466),
      fy = Wy(35893),
      Zy = Wy(35861),
      cb = Wy(35886),
      Py = Wy(36559),
      oy = Wy(38478);
    class By {
      get wrapU() {
        return this._wrapU
      }
      set wrapU(yb) {
        this._wrapU = yb
      }
      get wrapV() {
        return this._wrapV
      }
      set wrapV(yb) {
        this._wrapV = yb
      }
      get coordinatesMode() {
        return 0
      }
      get isCube() {
        return !!this._texture && this._texture.isCube
      }
      set isCube(yb) {
        this._texture && (this._texture.isCube = yb)
      }
      get is3D() {
        return !!this._texture && this._texture.is3D
      }
      set is3D(yb) {
        this._texture && (this._texture.is3D = yb)
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray
      }
      set is2DArray(yb) {
        this._texture && (this._texture.is2DArray = yb)
      }
      getClassName() {
        return "ThinTexture"
      }
      static _IsRenderTargetWrapper(yb) {
        return void 0 !== yb?.shareDepth
      }
      constructor(yb) {
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = oy.c.Zero(), this._cachedBaseSize = oy.c.Zero(), this._initialSamplingMode = 2, this._texture = By._IsRenderTargetWrapper(yb) ? yb.texture : yb, this._texture && (this._engine = this._texture.xh(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
      updateSamplingMode(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(yb, this._texture, this._texture.generateMipMaps && bb)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var Ky, ey = Wy(38485),
      qb = Wy(38347);
    let sy = (() => {
      var yb;
      let bb, Wy, oy, Ky, qb, sy, Sy, Ey, ly, mb, Cy, Ty, Vy, Jy, gb, Gy, Oy, Ry, vb, ib, My, Yy, Xy, ny, uy, rb = By,
        Hy = [],
        ab = [],
        Fy = [],
        py = [],
        Ly = [],
        Qy = [],
        jb = [],
        Dy = [],
        tb = [],
        wy = [],
        kb = [],
        Ny = [],
        zb = [],
        Iy = [],
        xb = [],
        Ay = [],
        dy = [],
        yW = [],
        bW = [],
        Wb = [],
        Ub = [],
        hb = [],
        fb = [],
        Zb = [],
        cW = [],
        Pb = [],
        ob = [],
        Bb = [],
        Kb = [],
        eb = [],
        qW = [];
      return yb = class extends rb {
        set hasAlpha(yb) {
          this._hasAlpha = yb
        }
        get hasAlpha() {
          return this._hasAlpha
        }
        set getAlphaFromRGB(yb) {
          this._getAlphaFromRGB !== yb && (this._getAlphaFromRGB = yb, this._scene && this._scene.markAllMaterialsAsDirty(1, (yb => yb.hasTexture(this))))
        }
        get getAlphaFromRGB() {
          return this._getAlphaFromRGB
        }
        set coordinatesIndex(yb) {
          this._coordinatesIndex !== yb && (this._coordinatesIndex = yb, this._scene && this._scene.markAllMaterialsAsDirty(1, (yb => yb.hasTexture(this))))
        }
        get coordinatesIndex() {
          return this._coordinatesIndex
        }
        set coordinatesMode(yb) {
          this._coordinatesMode !== yb && (this._coordinatesMode = yb, this._scene && this._scene.markAllMaterialsAsDirty(1, (yb => yb.hasTexture(this))))
        }
        get coordinatesMode() {
          return this._coordinatesMode
        }
        get wrapU() {
          return this._wrapU
        }
        set wrapU(yb) {
          this._wrapU = yb
        }
        get wrapV() {
          return this._wrapV
        }
        set wrapV(yb) {
          this._wrapV = yb
        }
        get isCube() {
          return this._texture ? this._texture.isCube : this._isCube
        }
        set isCube(yb) {
          this._texture ? this._texture.isCube = yb : this._isCube = yb
        }
        get is3D() {
          return !!this._texture && this._texture.is3D
        }
        set is3D(yb) {
          this._texture && (this._texture.is3D = yb)
        }
        get is2DArray() {
          return !!this._texture && this._texture.is2DArray
        }
        set is2DArray(yb) {
          this._texture && (this._texture.is2DArray = yb)
        }
        get gammaSpace() {
          return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
        }
        set gammaSpace(yb) {
          if (this._texture) {
            if (this._texture._gammaSpace === yb) return;
            this._texture._gammaSpace = yb
          } else {
            if (this._gammaSpace === yb) return;
            this._gammaSpace = yb
          }
          this.kWy()?.markAllMaterialsAsDirty(1, (yb => yb.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(yb) {
          yb !== this.isRGBD && (this._texture && (this._texture._isRGBD = yb), this.kWy()?.markAllMaterialsAsDirty(1, (yb => yb.hasTexture(this))))
        }
        get noMipmap() {
          return !1
        }
        get lodGenerationOffset() {
          return this._texture ? this._texture._lodGenerationOffset : 0
        }
        set lodGenerationOffset(yb) {
          this._texture && (this._texture._lodGenerationOffset = yb)
        }
        get lodGenerationScale() {
          return this._texture ? this._texture._lodGenerationScale : 0
        }
        set lodGenerationScale(yb) {
          this._texture && (this._texture._lodGenerationScale = yb)
        }
        get linearSpecularLOD() {
          return !!this._texture && this._texture._linearSpecularLOD
        }
        set linearSpecularLOD(yb) {
          this._texture && (this._texture._linearSpecularLOD = yb)
        }
        get irradianceTexture() {
          return this._texture ? this._texture._irradianceTexture : null
        }
        set irradianceTexture(yb) {
          this._texture && (this._texture._irradianceTexture = yb)
        }
        get uid() {
          return this._uid || (this._uid = (0, Py.e)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(yb) {
          this._onDisposeObserver && this.Nby.remove(this._onDisposeObserver), this._onDisposeObserver = this.Nby.add(yb)
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
        constructor(bb) {
          let Wy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, Uy.l)(this, Hy), (0, Uy.l)(this, ab, void 0)), this.name = ((0, Uy.l)(this, Fy), (0, Uy.l)(this, py, void 0)), this.displayName = ((0, Uy.l)(this, Ly), (0, Uy.l)(this, Qy, void 0)), this.metadata = ((0, Uy.l)(this, jb), (0, Uy.l)(this, Dy, null)), this._internalMetadata = (0, Uy.l)(this, tb), this.reservedDataStore = null, this._hasAlpha = (0, Uy.l)(this, wy, !1), this._getAlphaFromRGB = ((0, Uy.l)(this, kb), (0, Uy.l)(this, Ny, !1)), this.level = ((0, Uy.l)(this, zb), (0, Uy.l)(this, Iy, 1)), this._coordinatesIndex = ((0, Uy.l)(this, xb), (0, Uy.l)(this, Ay, 0)), this.optimizeUVAllocation = ((0, Uy.l)(this, dy), (0, Uy.l)(this, yW, !0)), this._coordinatesMode = ((0, Uy.l)(this, bW), (0, Uy.l)(this, Wb, 0)), this.wrapR = ((0, Uy.l)(this, Ub), (0, Uy.l)(this, hb, 1)), this.anisotropicFilteringLevel = ((0, Uy.l)(this, fb), (0, Uy.l)(this, Zb, yb.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, Uy.l)(this, cW), !1), this._gammaSpace = !0, this.invertZ = (0, Uy.l)(this, Pb, !1), this.lodLevelInAlpha = ((0, Uy.l)(this, ob), (0, Uy.l)(this, Bb, !1)), this._dominantDirection = ((0, Uy.l)(this, Kb), null), this.isRenderTarget = (0, Uy.l)(this, eb, !1), this._prefiltered = ((0, Uy.l)(this, qW), !1), this._forceSerialize = !1, this.animations = [], this.Nby = new fy.c, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, bb ? yb._IsScene(bb) ? this._scene = bb : this._engine = bb : this._scene = cb.c.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.xh()), this._texture = Wy, this._uid = null
        }
        kWy() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return Zy.c.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return Zy.c.IdentityReadOnly
        }
        getRefractionTextureMatrix() {
          return this.getReflectionTextureMatrix()
        }
        isReadyOrNotBlocking() {
          return !this.isBlocking || this.isReady() || this.loadingError
        }
        scale(yb) {}
        get canRescale() {
          return !1
        }
        _getFromCache(yb, bb, Wy, Uy, hy, fy) {
          const Zy = this._getEngine();
          if (!Zy) return null;
          const cb = Zy._getUseSRGBBuffer(!!hy, bb),
            Py = Zy.getLoadedTexturesCache();
          for (let oy = 0; oy < Py.length; oy++) {
            const Zy = Py[oy];
            if ((void 0 === hy || cb === Zy._useSRGBBuffer) && (void 0 === Uy || Uy === Zy.invertY) && Zy.url === yb && Zy.generateMipMaps === !bb && (!Wy || Wy === Zy.samplingMode) && (void 0 === fy || fy === Zy.isCube)) return Zy.incrementReferences(), Zy
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
          const yb = this.kWy();
          yb && yb.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Uy = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            hy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            Zy = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            cb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            Py = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const oy = this._getEngine();
          if (!oy) return null;
          const By = this.getSize();
          let Ky = By.width,
            ey = By.height;
          0 !== bb && (Ky /= Math.pow(2, bb), ey /= Math.pow(2, bb), Ky = Math.round(Ky), ey = Math.round(ey)), cb = Math.min(Ky, cb), Py = Math.min(ey, Py);
          try {
            return this._texture.isCube || this._texture.is2DArray ? oy._readTexturePixels(this._texture, cb, Py, yb, bb, Wy, Uy, hy, fy, Zy) : oy._readTexturePixels(this._texture, cb, Py, -1, bb, Wy, Uy, hy, fy, Zy)
          } catch (qb) {
            return null
          }
        }
        _readPixelsSync() {
          let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Uy = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            hy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const fy = this.getSize();
          let Zy = fy.width,
            cb = fy.height;
          const Py = this._getEngine();
          if (!Py) return null;
          0 != bb && (Zy /= Math.pow(2, bb), cb /= Math.pow(2, bb), Zy = Math.round(Zy), cb = Math.round(cb));
          try {
            return this._texture.isCube ? Py._readTexturePixelsSync(this._texture, Zy, cb, yb, bb, Wy, Uy, hy) : Py._readTexturePixelsSync(this._texture, Zy, cb, -1, bb, Wy, Uy, hy)
          } catch (oy) {
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
            const yb = this._scene.textures.indexOf(this);
            if (yb >= 0 && this._scene.textures.splice(yb, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
              const yb = this._parentContainer.textures.indexOf(this);
              yb > -1 && this._parentContainer.textures.splice(yb, 1), this._parentContainer = null
            }
          }
          this.Nby.notifyObservers(this), this.Nby.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !yb) return null;
          const bb = ey.c.Serialize(this);
          return ey.c.AppendSerializedAnimations(this, bb), bb
        }
        static WhenAllReady(yb, bb) {
          let Wy = yb.length;
          if (0 !== Wy)
            for (let Uy = 0; Uy < yb.length; Uy++) {
              const hy = yb[Uy];
              if (hy.isReady()) 0 === --Wy && bb();
              else {
                const yb = hy.onLoadObservable;
                yb ? yb.addOnce((() => {
                  0 === --Wy && bb()
                })) : 0 === --Wy && bb()
              }
            } else bb()
        }
        static _IsScene(yb) {
          return "Scene" === yb.getClassName()
        }
      }, (() => {
        const fy = "function" === typeof Symbol && Symbol.metadata ? Object.create(rb[Symbol.metadata] ?? null) : void 0;
        bb = [(0, hy.T)()], Wy = [(0, hy.T)()], oy = [(0, hy.T)()], Ky = [(0, hy.T)()], qb = [(0, hy.T)("hasAlpha")], sy = [(0, hy.T)("getAlphaFromRGB")], Sy = [(0, hy.T)()], Ey = [(0, hy.T)("coordinatesIndex")], ly = [(0, hy.T)()], mb = [(0, hy.T)("coordinatesMode")], Cy = [(0, hy.T)()], Ty = [(0, hy.T)()], Vy = [(0, hy.T)()], Jy = [(0, hy.T)()], gb = [(0, hy.T)()], Gy = [(0, hy.T)()], Oy = [(0, hy.T)()], Ry = [(0, hy.T)()], vb = [(0, hy.T)()], ib = [(0, hy.T)()], My = [(0, hy.T)()], Yy = [(0, hy.T)()], Xy = [(0, hy.T)()], ny = [(0, hy.M)()], uy = [(0, hy.T)()], (0, Uy.j)(yb, null, Cy, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: yb => "wrapU" in yb,
            get: yb => yb.wrapU
          },
          metadata: fy
        }, null, Hy), (0, Uy.j)(yb, null, Ty, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: yb => "wrapV" in yb,
            get: yb => yb.wrapV
          },
          metadata: fy
        }, null, Hy), (0, Uy.j)(yb, null, gb, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: yb => "isCube" in yb,
            get: yb => yb.isCube
          },
          metadata: fy
        }, null, Hy), (0, Uy.j)(yb, null, Gy, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: yb => "is3D" in yb,
            get: yb => yb.is3D
          },
          metadata: fy
        }, null, Hy), (0, Uy.j)(yb, null, Oy, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: yb => "is2DArray" in yb,
            get: yb => yb.is2DArray
          },
          metadata: fy
        }, null, Hy), (0, Uy.j)(yb, null, Ry, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: yb => "gammaSpace" in yb,
            get: yb => yb.gammaSpace
          },
          metadata: fy
        }, null, Hy), (0, Uy.j)(yb, null, My, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: yb => "lodGenerationOffset" in yb,
            get: yb => yb.lodGenerationOffset
          },
          metadata: fy
        }, null, Hy), (0, Uy.j)(yb, null, Yy, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: yb => "lodGenerationScale" in yb,
            get: yb => yb.lodGenerationScale
          },
          metadata: fy
        }, null, Hy), (0, Uy.j)(yb, null, Xy, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: yb => "linearSpecularLOD" in yb,
            get: yb => yb.linearSpecularLOD
          },
          metadata: fy
        }, null, Hy), (0, Uy.j)(yb, null, ny, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: yb => "irradianceTexture" in yb,
            get: yb => yb.irradianceTexture
          },
          metadata: fy
        }, null, Hy), (0, Uy.j)(null, null, bb, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: yb => "uniqueId" in yb,
            get: yb => yb.uniqueId,
            set: (yb, bb) => {
              yb.uniqueId = bb
            }
          },
          metadata: fy
        }, ab, Fy), (0, Uy.j)(null, null, Wy, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: yb => "name" in yb,
            get: yb => yb.name,
            set: (yb, bb) => {
              yb.name = bb
            }
          },
          metadata: fy
        }, py, Ly), (0, Uy.j)(null, null, oy, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: yb => "displayName" in yb,
            get: yb => yb.displayName,
            set: (yb, bb) => {
              yb.displayName = bb
            }
          },
          metadata: fy
        }, Qy, jb), (0, Uy.j)(null, null, Ky, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: yb => "metadata" in yb,
            get: yb => yb.metadata,
            set: (yb, bb) => {
              yb.metadata = bb
            }
          },
          metadata: fy
        }, Dy, tb), (0, Uy.j)(null, null, qb, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: yb => "_hasAlpha" in yb,
            get: yb => yb._hasAlpha,
            set: (yb, bb) => {
              yb._hasAlpha = bb
            }
          },
          metadata: fy
        }, wy, kb), (0, Uy.j)(null, null, sy, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: yb => "_getAlphaFromRGB" in yb,
            get: yb => yb._getAlphaFromRGB,
            set: (yb, bb) => {
              yb._getAlphaFromRGB = bb
            }
          },
          metadata: fy
        }, Ny, zb), (0, Uy.j)(null, null, Sy, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: yb => "level" in yb,
            get: yb => yb.level,
            set: (yb, bb) => {
              yb.level = bb
            }
          },
          metadata: fy
        }, Iy, xb), (0, Uy.j)(null, null, Ey, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: yb => "_coordinatesIndex" in yb,
            get: yb => yb._coordinatesIndex,
            set: (yb, bb) => {
              yb._coordinatesIndex = bb
            }
          },
          metadata: fy
        }, Ay, dy), (0, Uy.j)(null, null, ly, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: yb => "optimizeUVAllocation" in yb,
            get: yb => yb.optimizeUVAllocation,
            set: (yb, bb) => {
              yb.optimizeUVAllocation = bb
            }
          },
          metadata: fy
        }, yW, bW), (0, Uy.j)(null, null, mb, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: yb => "_coordinatesMode" in yb,
            get: yb => yb._coordinatesMode,
            set: (yb, bb) => {
              yb._coordinatesMode = bb
            }
          },
          metadata: fy
        }, Wb, Ub), (0, Uy.j)(null, null, Vy, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: yb => "wrapR" in yb,
            get: yb => yb.wrapR,
            set: (yb, bb) => {
              yb.wrapR = bb
            }
          },
          metadata: fy
        }, hb, fb), (0, Uy.j)(null, null, Jy, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: yb => "anisotropicFilteringLevel" in yb,
            get: yb => yb.anisotropicFilteringLevel,
            set: (yb, bb) => {
              yb.anisotropicFilteringLevel = bb
            }
          },
          metadata: fy
        }, Zb, cW), (0, Uy.j)(null, null, vb, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: yb => "invertZ" in yb,
            get: yb => yb.invertZ,
            set: (yb, bb) => {
              yb.invertZ = bb
            }
          },
          metadata: fy
        }, Pb, ob), (0, Uy.j)(null, null, ib, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: yb => "lodLevelInAlpha" in yb,
            get: yb => yb.lodLevelInAlpha,
            set: (yb, bb) => {
              yb.lodLevelInAlpha = bb
            }
          },
          metadata: fy
        }, Bb, Kb), (0, Uy.j)(null, null, uy, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: yb => "isRenderTarget" in yb,
            get: yb => yb.isRenderTarget,
            set: (yb, bb) => {
              yb.isRenderTarget = bb
            }
          },
          metadata: fy
        }, eb, qW), fy && Object.defineProperty(yb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: fy
        })
      })(), yb.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, yb
    })();
    (Ky = sy.prototype).forceSphericalPolynomialsRecompute ?? (Ky.forceSphericalPolynomialsRecompute = (0, qb.f)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(sy.prototype, "sphericalPolynomial") || Object.defineProperty(sy.prototype, "sphericalPolynomial", (0, qb.e)("BaseTexture", "sphericalPolynomial"))
  },
  38989: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Vy,
      f: () => Cy
    });
    var Uy = Wy(38464),
      hy = Wy(38466),
      fy = Wy(35893),
      Zy = Wy(35861),
      cb = Wy(38457),
      Py = Wy(35909),
      oy = Wy(38347),
      By = Wy(38354),
      Ky = Wy(38580),
      ey = Wy(36434),
      qb = Wy(38532);

    function sy(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Uy = bb.width,
        hy = bb.height;
      if (yb instanceof Float32Array) {
        let bb = yb.byteLength / yb.BYTES_PER_ELEMENT;
        const Wy = new Uint8Array(bb);
        for (; --bb >= 0;) {
          let Uy = yb[bb];
          Uy < 0 ? Uy = 0 : Uy > 1 && (Uy = 1), Wy[bb] = 255 * Uy
        }
        yb = Wy
      }
      const fy = document.createElement("canvas");
      fy.width = Uy, fy.height = hy;
      const Zy = fy.getContext("2d");
      if (!Zy) return null;
      const cb = Zy.createImageData(Uy, hy);
      if (cb.data.set(yb), Zy.putImageData(cb, 0, 0), Wy) {
        const yb = document.createElement("canvas");
        yb.width = Uy, yb.height = hy;
        const bb = yb.getContext("2d");
        return bb ? (bb.translate(0, hy), bb.scale(1, -1), bb.drawImage(fy, 0, 0), yb.toDataURL("image/png")) : null
      }
      return fy.toDataURL("image/png")
    }

    function Sy(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Uy = yb.getInternalTexture();
      if (!Uy) return null;
      const hy = yb._readPixelsSync(bb, Wy);
      return hy ? sy(hy, yb.getSize(), Uy.invertY) : null
    }
    async function Ey(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Uy = yb.getInternalTexture();
      if (!Uy) return null;
      const hy = await yb.readPixels(bb, Wy);
      return hy ? sy(hy, yb.getSize(), Uy.invertY) : null
    }
    var ly = Wy(38935),
      mb = Wy(38485);
    let Cy = (() => {
        var yb;
        let bb, Wy, sy, Cy, Ty, Vy, Jy, gb, Gy, Oy, Ry, vb, ib, My = cb.d,
          Yy = [],
          Xy = [],
          ny = [],
          uy = [],
          rb = [],
          Hy = [],
          ab = [],
          Fy = [],
          py = [],
          Ly = [],
          Qy = [],
          jb = [],
          Dy = [],
          tb = [],
          wy = [],
          kb = [],
          Ny = [],
          zb = [],
          Iy = [],
          xb = [],
          Ay = [],
          dy = [],
          yW = [],
          bW = [],
          Wb = [];
        return yb = class extends My {
          static _CreateVideoTexture(bb, Wy, Uy) {
            arguments.length > 5 && void 0 !== arguments[5] || yb.TRILINEAR_SAMPLINGMODE;
            throw (0, oy.g)("VideoTexture")
          }
          get noMipmap() {
            return this._noMipmap
          }
          get mimeType() {
            return this._mimeType
          }
          set isBlocking(yb) {
            this._isBlocking = yb
          }
          get isBlocking() {
            return this._isBlocking
          }
          get invertY() {
            return this._invertY
          }
          constructor(bb, Wy, hy, Zy) {
            let cb, Py = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : yb.TRILINEAR_SAMPLINGMODE,
              oy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Ky = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              ey = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              qb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              sy = arguments.length > 9 ? arguments[9] : void 0,
              Sy = arguments.length > 10 ? arguments[10] : void 0,
              Ey = arguments.length > 11 ? arguments[11] : void 0,
              mb = arguments.length > 12 ? arguments[12] : void 0,
              Cy = arguments.length > 13 ? arguments[13] : void 0;
            super(Wy), this.url = ((0, Uy.l)(this, Yy), (0, Uy.l)(this, Xy, null)), this.uOffset = ((0, Uy.l)(this, ny), (0, Uy.l)(this, uy, 0)), this.vOffset = ((0, Uy.l)(this, rb), (0, Uy.l)(this, Hy, 0)), this.uScale = ((0, Uy.l)(this, ab), (0, Uy.l)(this, Fy, 1)), this.vScale = ((0, Uy.l)(this, py), (0, Uy.l)(this, Ly, 1)), this.uAng = ((0, Uy.l)(this, Qy), (0, Uy.l)(this, jb, 0)), this.vAng = ((0, Uy.l)(this, Dy), (0, Uy.l)(this, tb, 0)), this.wAng = ((0, Uy.l)(this, wy), (0, Uy.l)(this, kb, 0)), this.uRotationCenter = ((0, Uy.l)(this, Ny), (0, Uy.l)(this, zb, .5)), this.vRotationCenter = ((0, Uy.l)(this, Iy), (0, Uy.l)(this, xb, .5)), this.wRotationCenter = ((0, Uy.l)(this, Ay), (0, Uy.l)(this, dy, .5)), this.homogeneousRotationInUVTransform = ((0, Uy.l)(this, yW), (0, Uy.l)(this, bW, !1)), this.inspectableCustomProperties = ((0, Uy.l)(this, Wb), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new fy.c, this._isBlocking = !0, this.name = bb || "", this.url = bb;
            let Ty = !1,
              Vy = null,
              Jy = !0;
            "object" === typeof hy && null !== hy ? (cb = hy.noMipmap ?? !1, Zy = hy.invertY ?? !ly.e, Py = hy.samplingMode ?? yb.TRILINEAR_SAMPLINGMODE, oy = hy.onLoad ?? null, Ky = hy.onError ?? null, ey = hy.buffer ?? null, qb = hy.deleteBuffer ?? !1, sy = hy.format, Sy = hy.mimeType, Ey = hy.loaderOptions, mb = hy.creationFlags, Ty = hy.useSRGBBuffer ?? !1, Vy = hy.internalTexture ?? null, Jy = hy.gammaSpace ?? Jy, Cy = hy.forcedExtension ?? Cy) : cb = !!hy, this._gammaSpace = Jy, this._noMipmap = cb, this._invertY = void 0 === Zy ? !ly.e : Zy, this._initialSamplingMode = Py, this._buffer = ey, this._deleteBuffer = qb, this._mimeType = Sy, this._loaderOptions = Ey, this._creationFlags = mb, this._useSRGBBuffer = Ty, this._forcedExtension = Cy, void 0 !== sy && (this._format = sy);
            const gb = this.kWy(),
              Gy = this._getEngine();
            if (!Gy) return;
            Gy.onBeforeTextureInitObservable.notifyObservers(this);
            const Oy = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), oy && oy(), !this.isBlocking && gb && gb.resetCachedMaterial()
              },
              Ry = (bb, Wy) => {
                this._loadingError = !0, this._errorObject = {
                  message: bb,
                  exception: Wy
                }, Ky && Ky(bb, Wy), yb.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !Vy) return this._delayedOnLoad = Oy, void(this._delayedOnError = Ry);
            if (this._texture = Vy ?? this._getFromCache(this.url, cb, Py, this._invertY, Ty, this.isCube), this._texture)
              if (this._texture.isReady) By.b.SetImmediate((() => Oy()));
              else {
                const yb = this._texture.onLoadedObservable.add(Oy);
                this._texture.onErrorObservable.add((bb => {
                  Ry(bb.message, bb.exception), this._texture?.onLoadedObservable.remove(yb)
                }))
              }
            else if (gb && gb.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = Oy, this._delayedOnError = Ry;
            else {
              try {
                this._texture = Gy.createTexture(this.url, cb, this._invertY, gb, Py, Oy, Ry, this._buffer, void 0, this._format, this._forcedExtension, Sy, Ey, mb, Ty)
              } catch (vb) {
                throw Ry("error loading", vb), vb
              }
              qb && (this._buffer = null)
            }
          }
          updateURL(yb) {
            let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              Wy = arguments.length > 2 ? arguments[2] : void 0,
              Uy = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.kWy().markAllMaterialsAsDirty(1, (yb => yb.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = yb), this.url = yb, this._buffer = bb, this._forcedExtension = Uy, this.delayLoadState = 4;
            const hy = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              hy ? hy() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), Wy && Wy()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const yb = this.kWy();
            if (!yb) return;
            let bb = this.url;
            !bb && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (bb = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(bb, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? By.b.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = yb.xh().createTexture(bb, this._noMipmap, this._invertY, yb, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(yb, bb, Wy, Uy) {
            yb *= this._cachedUScale, bb *= this._cachedVScale, yb -= this.uRotationCenter * this._cachedUScale, bb -= this.vRotationCenter * this._cachedVScale, Wy -= this.wRotationCenter, Zy.n.TransformCoordinatesFromFloatsToRef(yb, bb, Wy, this._rowGenerationMatrix, Uy), Uy.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, Uy.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, Uy.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * yb === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * yb, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = Zy.c.Zero(), this._rowGenerationMatrix = new Zy.c, this._t0 = Zy.n.Zero(), this._t1 = Zy.n.Zero(), this._t2 = Zy.n.Zero()), Zy.c.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (Zy.c.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, Zy.j.Matrix[0]), Zy.c.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, Zy.j.Matrix[1]), Zy.c.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, Zy.j.Matrix[2]), Zy.c.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, Zy.j.Matrix[3]), Zy.j.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Zy.j.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Zy.j.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Zy.j.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.TBy(this._t0), this._t2.TBy(this._t0), Zy.c.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const bb = this.kWy();
            if (!bb) return this._cachedTextureMatrix;
            const Wy = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && Wy !== this._cachedIdentity3x2 && bb.markAllMaterialsAsDirty(1, (yb => yb.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const bb = this.kWy();
            if (!bb) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== yb.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === bb.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = Zy.c.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = Zy.c.Zero());
            const Wy = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case yb.PLANAR_MODE:
                Zy.c.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case yb.PROJECTION_MODE: {
                Zy.c.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const yb = bb.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = yb.updateFlag, yb.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                Zy.c.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return Wy && bb.markAllMaterialsAsDirty(1, (yb => yb.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const bb = {
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
            return mb.c.Clone((() => new yb(this._texture ? this._texture.url : null, this.kWy(), bb)), this)
          }
          serialize() {
            const bb = this.name;
            yb.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const Wy = super.serialize(yb._SerializeInternalTextureUniqueId);
            if (!Wy) return null;
            if (yb.SerializeBuffers || yb.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) Wy.base64String = this._buffer, Wy.name = Wy.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const yb = this.mimeType || "image/png";
              Wy.base64String = `data:${yb};base64,${(0,qb.k)(this._buffer)}`
            } else(yb.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (Wy.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? Sy(this) : Ey(this));
            return Wy.invertY = this._invertY, Wy.samplingMode = this.samplingMode, Wy._creationFlags = this._creationFlags, Wy._useSRGBBuffer = this._useSRGBBuffer, yb._SerializeInternalTextureUniqueId && (Wy.internalTextureUniqueId = this._texture?.uniqueId), Wy.internalTextureLabel = this._texture?.label, Wy.noMipmap = this._noMipmap, this.name = bb, Wy
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(bb, Wy, Uy) {
            if (bb.customType) {
              const yb = Ky.e.Instantiate(bb.customType).Parse(bb, Wy, Uy);
              return bb.samplingMode && yb.updateSamplingMode && yb._samplingMode && yb._samplingMode !== bb.samplingMode && yb.updateSamplingMode(bb.samplingMode), yb
            }
            if (bb.isCube && !bb.isRenderTarget) return yb._CubeTextureParser(bb, Wy, Uy);
            const hy = void 0 !== bb.internalTextureUniqueId;
            if (!bb.name && !bb.isRenderTarget && !hy) return null;
            let fy;
            if (hy) {
              const yb = Wy.xh().getLoadedTexturesCache();
              for (const Wy of yb)
                if (Wy.uniqueId === bb.internalTextureUniqueId) {
                  fy = Wy;
                  break
                }
            }
            const Zy = yb => {
              if (yb && yb._texture && (yb._texture._cachedWrapU = null, yb._texture._cachedWrapV = null, yb._texture._cachedWrapR = null), bb.samplingMode) {
                const Wy = bb.samplingMode;
                yb && yb.samplingMode !== Wy && yb.updateSamplingMode(Wy)
              }
              if (yb && bb.animations)
                for (let Wy = 0; Wy < bb.animations.length; Wy++) {
                  const Uy = bb.animations[Wy],
                    hy = (0, Py.b)("BABYLON.Animation");
                  hy && yb.animations.push(hy.Parse(Uy))
                }
              yb && yb._texture && (hy && !fy && yb._texture._setUniqueId(bb.internalTextureUniqueId), yb._texture.label = bb.internalTextureLabel)
            };
            return mb.c.Parse((() => {
              let hy = !0;
              if (bb.noMipmap && (hy = !1), bb.mirrorPlane) {
                const Uy = yb._CreateMirror(bb.name, bb.renderTargetSize, Wy, hy);
                return Uy._waitingRenderList = bb.renderList, Uy.mirrorPlane = ey.c.FromArray(bb.mirrorPlane), Zy(Uy), Uy
              }
              if (bb.isRenderTarget && !bb.base64String) {
                let Uy = null;
                if (bb.isCube) {
                  if (Wy.reflectionProbes)
                    for (let yb = 0; yb < Wy.reflectionProbes.length; yb++) {
                      const Uy = Wy.reflectionProbes[yb];
                      if (Uy.name === bb.name) return Uy.cubeTexture
                    }
                } else Uy = yb._CreateRenderTargetTexture(bb.name, bb.renderTargetSize, Wy, hy, bb._creationFlags ?? 0), Uy._waitingRenderList = bb.renderList;
                return Zy(Uy), Uy
              }
              if (bb.isVideo) {
                const fy = yb._CreateVideoTexture(Uy + (bb.url || bb.name), Uy + (bb.src || bb.url), Wy, hy, bb.invertY, bb.samplingMode, bb.settings || {});
                return Zy(fy), fy
              } {
                let cb;
                if ("string" === typeof bb.base64String && bb.base64String && !fy) {
                  const Uy = {
                      buffer: bb.base64String,
                      noMipmap: !hy,
                      invertY: bb.invertY,
                      samplingMode: bb.samplingMode,
                      useSRGBBuffer: bb._useSRGBBuffer ?? !1,
                      creationFlags: bb._creationFlags ?? 0,
                      onLoad: () => {
                        Zy(cb)
                      }
                    },
                    fy = bb.base64String,
                    Py = fy.startsWith("data:") ? fy.substring(5) : fy;
                  cb = yb.CreateFromBase64String("", Py, Wy, Uy), cb.name = bb.name
                } else {
                  let Py;
                  Py = bb.name && (bb.name.indexOf("://") > 0 || bb.name.startsWith("data:")) ? bb.name : Uy + bb.name, bb.url && (bb.url.startsWith("data:") || yb.UseSerializedUrlIfAny) && (Py = bb.url);
                  const oy = {
                    noMipmap: !hy,
                    invertY: bb.invertY,
                    samplingMode: bb.samplingMode,
                    useSRGBBuffer: bb._useSRGBBuffer ?? !1,
                    creationFlags: bb._creationFlags ?? 0,
                    onLoad: () => {
                      Zy(cb)
                    },
                    internalTexture: fy
                  };
                  cb = new yb(Py, Wy, oy)
                }
                return cb
              }
            }), bb, Wy)
          }
          static CreateFromBase64String(bb, Wy, Uy, hy, fy) {
            let Zy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : yb.TRILINEAR_SAMPLINGMODE;
            return new yb("data:" + Wy, Uy, hy, fy, Zy, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, bb, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(bb, Wy, Uy) {
            let hy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              fy = arguments.length > 4 ? arguments[4] : void 0,
              Zy = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              cb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : yb.TRILINEAR_SAMPLINGMODE,
              Py = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              oy = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              By = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              Ky = arguments.length > 10 ? arguments[10] : void 0,
              ey = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== bb.substring(0, 5) && (bb = "data:" + bb), new yb(bb, Uy, fy, Zy, cb, Py, oy, Wy, hy, By, void 0, void 0, Ky, ey)
          }
        }, (() => {
          const fy = "function" === typeof Symbol && Symbol.metadata ? Object.create(My[Symbol.metadata] ?? null) : void 0;
          bb = [(0, hy.T)()], Wy = [(0, hy.T)()], sy = [(0, hy.T)()], Cy = [(0, hy.T)()], Ty = [(0, hy.T)()], Vy = [(0, hy.T)()], Jy = [(0, hy.T)()], gb = [(0, hy.T)()], Gy = [(0, hy.T)()], Oy = [(0, hy.T)()], Ry = [(0, hy.T)()], vb = [(0, hy.T)()], ib = [(0, hy.T)()], (0, Uy.j)(yb, null, ib, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: yb => "isBlocking" in yb,
              get: yb => yb.isBlocking
            },
            metadata: fy
          }, null, Yy), (0, Uy.j)(null, null, bb, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: yb => "url" in yb,
              get: yb => yb.url,
              set: (yb, bb) => {
                yb.url = bb
              }
            },
            metadata: fy
          }, Xy, ny), (0, Uy.j)(null, null, Wy, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: yb => "uOffset" in yb,
              get: yb => yb.uOffset,
              set: (yb, bb) => {
                yb.uOffset = bb
              }
            },
            metadata: fy
          }, uy, rb), (0, Uy.j)(null, null, sy, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: yb => "vOffset" in yb,
              get: yb => yb.vOffset,
              set: (yb, bb) => {
                yb.vOffset = bb
              }
            },
            metadata: fy
          }, Hy, ab), (0, Uy.j)(null, null, Cy, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: yb => "uScale" in yb,
              get: yb => yb.uScale,
              set: (yb, bb) => {
                yb.uScale = bb
              }
            },
            metadata: fy
          }, Fy, py), (0, Uy.j)(null, null, Ty, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: yb => "vScale" in yb,
              get: yb => yb.vScale,
              set: (yb, bb) => {
                yb.vScale = bb
              }
            },
            metadata: fy
          }, Ly, Qy), (0, Uy.j)(null, null, Vy, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: yb => "uAng" in yb,
              get: yb => yb.uAng,
              set: (yb, bb) => {
                yb.uAng = bb
              }
            },
            metadata: fy
          }, jb, Dy), (0, Uy.j)(null, null, Jy, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: yb => "vAng" in yb,
              get: yb => yb.vAng,
              set: (yb, bb) => {
                yb.vAng = bb
              }
            },
            metadata: fy
          }, tb, wy), (0, Uy.j)(null, null, gb, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: yb => "wAng" in yb,
              get: yb => yb.wAng,
              set: (yb, bb) => {
                yb.wAng = bb
              }
            },
            metadata: fy
          }, kb, Ny), (0, Uy.j)(null, null, Gy, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: yb => "uRotationCenter" in yb,
              get: yb => yb.uRotationCenter,
              set: (yb, bb) => {
                yb.uRotationCenter = bb
              }
            },
            metadata: fy
          }, zb, Iy), (0, Uy.j)(null, null, Oy, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: yb => "vRotationCenter" in yb,
              get: yb => yb.vRotationCenter,
              set: (yb, bb) => {
                yb.vRotationCenter = bb
              }
            },
            metadata: fy
          }, xb, Ay), (0, Uy.j)(null, null, Ry, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: yb => "wRotationCenter" in yb,
              get: yb => yb.wRotationCenter,
              set: (yb, bb) => {
                yb.wRotationCenter = bb
              }
            },
            metadata: fy
          }, dy, yW), (0, Uy.j)(null, null, vb, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: yb => "homogeneousRotationInUVTransform" in yb,
              get: yb => yb.homogeneousRotationInUVTransform,
              set: (yb, bb) => {
                yb.homogeneousRotationInUVTransform = bb
              }
            },
            metadata: fy
          }, bW, Wb), fy && Object.defineProperty(yb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fy
          })
        })(), yb.SerializeBuffers = !0, yb.ForceSerializeBuffers = !1, yb.OnTextureLoadErrorObservable = new fy.c, yb._SerializeInternalTextureUniqueId = !1, yb._CubeTextureParser = (yb, bb, Wy) => {
          throw (0, oy.g)("CubeTexture")
        }, yb._CreateMirror = (yb, bb, Wy, Uy) => {
          throw (0, oy.g)("MirrorTexture")
        }, yb._CreateRenderTargetTexture = (yb, bb, Wy, Uy, hy) => {
          throw (0, oy.g)("RenderTargetTexture")
        }, yb.NEAREST_SAMPLINGMODE = 1, yb.NEAREST_NEAREST_MIPLINEAR = 8, yb.BILINEAR_SAMPLINGMODE = 2, yb.LINEAR_LINEAR_MIPNEAREST = 11, yb.TRILINEAR_SAMPLINGMODE = 3, yb.LINEAR_LINEAR_MIPLINEAR = 3, yb.NEAREST_NEAREST_MIPNEAREST = 4, yb.NEAREST_LINEAR_MIPNEAREST = 5, yb.NEAREST_LINEAR_MIPLINEAR = 6, yb.NEAREST_LINEAR = 7, yb.NEAREST_NEAREST = 1, yb.LINEAR_NEAREST_MIPNEAREST = 9, yb.LINEAR_NEAREST_MIPLINEAR = 10, yb.LINEAR_LINEAR = 2, yb.LINEAR_NEAREST = 12, yb.EXPLICIT_MODE = 0, yb.SPHERICAL_MODE = 1, yb.PLANAR_MODE = 2, yb.CUBIC_MODE = 3, yb.PROJECTION_MODE = 4, yb.SKYBOX_MODE = 5, yb.INVCUBIC_MODE = 6, yb.EQUIRECTANGULAR_MODE = 7, yb.FIXED_EQUIRECTANGULAR_MODE = 8, yb.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, yb.CLAMP_ADDRESSMODE = 0, yb.WRAP_ADDRESSMODE = 1, yb.MIRROR_ADDRESSMODE = 2, yb.UseSerializedUrlIfAny = !1, yb
      })(),
      Ty = !1;

    function Vy() {
      Ty || (Ty = !0, (0, Py.e)("BABYLON.Texture", Cy), mb.c._TextureParser = Cy.Parse)
    }
  },
  38478: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Uy
    });
    class Uy {
      constructor(yb, bb) {
        this.width = yb, this.height = bb
      }
      toString() {
        return `{W: ${this.width}, H: ${this.height}}`
      }
      getClassName() {
        return "Size"
      }
      getHashCode() {
        let yb = 0 | this.width;
        return yb = 397 * yb ^ this.height, yb
      }
      Coy(yb) {
        this.width = yb.width, this.height = yb.height
      }
      vcy(yb, bb) {
        return this.width = yb, this.height = bb, this
      }
      set(yb, bb) {
        return this.vcy(yb, bb)
      }
      multiplyByFloats(yb, bb) {
        return new Uy(this.width * yb, this.height * bb)
      }
      clone() {
        return new Uy(this.width, this.height)
      }
      equals(yb) {
        return !!yb && (this.width === yb.width && this.height === yb.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new Uy(0, 0)
      }
      add(yb) {
        return new Uy(this.width + yb.width, this.height + yb.height)
      }
      subtract(yb) {
        return new Uy(this.width - yb.width, this.height - yb.height)
      }
      scale(yb) {
        return new Uy(this.width * yb, this.height * yb)
      }
      static Lerp(yb, bb, Wy) {
        const hy = yb.width + (bb.width - yb.width) * Wy,
          fy = yb.height + (bb.height - yb.height) * Wy;
        return new Uy(hy, fy)
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);