export const id = 238;
export const ids = [238];
export const modules = {
  38742: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => ey
    });
    var Uy = Wy(38464),
      hy = Wy(38466),
      fy = Wy(35861),
      Zy = Wy(35919),
      cb = Wy(38697),
      Py = Wy(38607),
      oy = Wy(35909),
      By = Wy(38675),
      Ky = Wy(38485);
    let ey = (() => {
      var yb, bb;
      let Wy, ey, qb, sy, Sy, Ey, ly, mb, Cy, Ty, Vy, Jy, gb, Gy = cb.b,
        Oy = [],
        Ry = [],
        vb = [],
        ib = [],
        My = [],
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
        kb = [];
      return yb = class extends Gy {
        get range() {
          return this._range
        }
        set range(yb) {
          this._range = yb, this._inverseSquaredRange = 1 / (this.range * this.range)
        }
        get intensityMode() {
          return this._intensityMode
        }
        set intensityMode(yb) {
          this._intensityMode = yb, this._computePhotometricScale()
        }
        get radius() {
          return this._radius
        }
        set radius(yb) {
          this._radius = yb, this._computePhotometricScale()
        }
        get renderPriority() {
          return (0, Uy.e)(this, bb, "f")
        }
        set renderPriority(yb) {
          (0, Uy.f)(this, bb, yb, "f")
        }
        get shadowEnabled() {
          return this._shadowEnabled
        }
        set shadowEnabled(yb) {
          this._shadowEnabled !== yb && (this._shadowEnabled = yb, this._markMeshesAsLightDirty())
        }
        get includedOnlyMeshes() {
          return this._includedOnlyMeshes
        }
        set includedOnlyMeshes(yb) {
          this._includedOnlyMeshes = yb, this._hookArrayForIncludedOnly(yb)
        }
        get excludedMeshes() {
          return this._excludedMeshes
        }
        set excludedMeshes(yb) {
          this._excludedMeshes = yb, this._hookArrayForExcluded(yb)
        }
        get excludeWithLayerMask() {
          return this._excludeWithLayerMask
        }
        set excludeWithLayerMask(yb) {
          this._excludeWithLayerMask = yb, this._resyncMeshes()
        }
        get includeOnlyWithLayerMask() {
          return this._includeOnlyWithLayerMask
        }
        set includeOnlyWithLayerMask(yb) {
          this._includeOnlyWithLayerMask = yb, this._resyncMeshes()
        }
        get lightmapMode() {
          return this._lightmapMode
        }
        set lightmapMode(yb) {
          this._lightmapMode !== yb && (this._lightmapMode = yb, this._markMeshesAsLightDirty())
        }
        getViewMatrix(yb) {
          return null
        }
        getProjectionMatrix(yb, bb) {
          return null
        }
        constructor(Wy, hy, fy) {
          super(Wy, hy, !1), this.diffuse = ((0, Uy.l)(this, Oy), (0, Uy.l)(this, Ry, new Zy.d(1, 1, 1))), this.specular = ((0, Uy.l)(this, vb), (0, Uy.l)(this, ib, new Zy.d(1, 1, 1))), this.falloffType = ((0, Uy.l)(this, My), (0, Uy.l)(this, Yy, yb.FALLOFF_DEFAULT)), this.intensity = ((0, Uy.l)(this, Xy), (0, Uy.l)(this, ny, 1)), this._range = ((0, Uy.l)(this, uy), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = yb.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, Uy.l)(this, rb, void 0), bb.set(this, ((0, Uy.l)(this, Hy), (0, Uy.l)(this, ab, 0))), this._shadowEnabled = ((0, Uy.l)(this, Fy), (0, Uy.l)(this, py, !0)), this._includedOnlyMeshes = (0, Uy.l)(this, Ly), this._excludeWithLayerMask = (0, Uy.l)(this, Qy, 0), this._includeOnlyWithLayerMask = ((0, Uy.l)(this, jb), (0, Uy.l)(this, Dy, 0)), this._lightmapMode = ((0, Uy.l)(this, tb), (0, Uy.l)(this, wy, 0)), this._shadowGenerators = ((0, Uy.l)(this, kb), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, fy || this.kWy().addLight(this), this._uniformBuffer = new Py.b(this.kWy().xh(), void 0, void 0, Wy), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], fy || this._resyncMeshes()
        }
        transferTexturesToEffect(yb, bb) {
          return this
        }
        _bindLight(yb, bb, Wy, Uy) {
          let hy = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const fy = yb.toString();
          let cb = !1;
          if (this._uniformBuffer.bindToEffect(Wy, "Light" + fy), this._renderId !== bb.getRenderId() || this._lastUseSpecular !== Uy || !this._uniformBuffer.useUbo) {
            this._renderId = bb.getRenderId(), this._lastUseSpecular = Uy;
            const yb = this.getScaledIntensity();
            this.transferToEffect(Wy, fy), this.diffuse.scaleToRef(yb, Zy.m.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", Zy.m.Color3[0], this.range, fy), Uy && (this.specular.scaleToRef(yb, Zy.m.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", Zy.m.Color3[1], this.radius, fy)), cb = !0
          }
          if (this.transferTexturesToEffect(Wy, fy), bb.shadowsEnabled && this.shadowEnabled && hy) {
            const yb = this.getShadowGenerator(bb.activeCamera) ?? this.getShadowGenerator();
            yb && (yb.bindShadowLight(fy, Wy), cb = !0)
          }
          cb ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(yb) {
          let bb = "Name: " + this.name;
          if (bb += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let Wy = 0; Wy < this.animations.length; Wy++) bb += ", animation[0]: " + this.animations[Wy].toString(yb);
          return bb
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.Koy() || this._resyncMeshes()
        }
        dJ(yb) {
          super.dJ(yb), this._resyncMeshes()
        }
        getShadowGenerator() {
          let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(yb) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return fy.n.Zero()
        }
        canAffectMesh(yb) {
          return !yb || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(yb)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(yb)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & yb.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & yb.layerMask)))
        }
        dispose(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const yb = this._shadowGenerators.values();
            for (let bb = yb.next(); !0 !== bb.done; bb = yb.next()) {
              bb.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.kWy().stopAnimation(this), this._parentContainer) {
            const yb = this._parentContainer.lights.indexOf(this);
            yb > -1 && this._parentContainer.lights.splice(yb, 1), this._parentContainer = null
          }
          for (const Wy of this.kWy().meshes) Wy._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.kWy().removeLight(this), super.dispose(yb, bb)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(bb) {
          let Wy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Uy = yb.GetConstructorFromName(this.getTypeID(), bb, this.kWy());
          if (!Uy) return null;
          const hy = Ky.c.Clone(Uy, this);
          return bb && (hy.name = bb), Wy && (hy.parent = Wy), hy.dJ(this.isEnabled()), this.onClonedObservable.notifyObservers(hy), hy
        }
        serialize() {
          const yb = Ky.c.Serialize(this);
          if (yb.uniqueId = this.uniqueId, yb.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(yb), this.excludedMeshes.length > 0) {
            yb.excludedMeshesIds = [];
            for (const bb of this.excludedMeshes) yb.excludedMeshesIds.push(bb.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            yb.includedOnlyMeshesIds = [];
            for (const bb of this.includedOnlyMeshes) yb.includedOnlyMeshesIds.push(bb.id)
          }
          return Ky.c.AppendSerializedAnimations(this, yb), yb.lZ = this.serializeAnimationRanges(), yb.isEnabled = this.isEnabled(), yb
        }
        static GetConstructorFromName(yb, bb, Wy) {
          const Uy = cb.b.Construct("Light_Type_" + yb, bb, Wy);
          return Uy || null
        }
        static Parse(bb, Wy) {
          let Uy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const hy = yb.GetConstructorFromName(bb.type, bb.name, Wy);
          if (!hy) return null;
          const fy = Ky.c.Parse(hy, bb, Wy, Uy);
          if (bb.excludedMeshesIds && (fy._excludedMeshesIds = bb.excludedMeshesIds), bb.includedOnlyMeshesIds && (fy._includedOnlyMeshesIds = bb.includedOnlyMeshesIds), void 0 !== bb.parentId && (fy._waitingParentId = bb.parentId), void 0 !== bb.parentInstanceIndex && (fy._waitingParentInstanceIndex = bb.parentInstanceIndex), void 0 !== bb.falloffType && (fy.falloffType = bb.falloffType), void 0 !== bb.lightmapMode && (fy.lightmapMode = bb.lightmapMode), bb.animations) {
            for (let yb = 0; yb < bb.animations.length; yb++) {
              const Wy = bb.animations[yb],
                Uy = (0, oy.b)("BABYLON.Animation");
              Uy && fy.animations.push(Uy.Parse(Wy))
            }
            cb.b.ParseAnimationRanges(fy, bb, Wy)
          }
          return bb.autoAnimate && Wy.beginAnimation(fy, bb.autoAnimateFrom, bb.autoAnimateTo, bb.autoAnimateLoop, bb.autoAnimateSpeed || 1), void 0 !== bb.isEnabled && fy.dJ(bb.isEnabled), fy._onParsed(bb, Wy, Uy), fy
        }
        _onParsed(yb, bb) {}
        _hookArrayForExcluded(yb) {
          var bb = this;
          const Wy = yb.push;
          yb.push = function() {
            for (var Uy = arguments.length, hy = new Array(Uy), fy = 0; fy < Uy; fy++) hy[fy] = arguments[fy];
            const Zy = Wy.apply(yb, hy);
            if (bb._clusteredContainer) return Zy;
            for (const yb of hy) yb._resyncLightSource(bb);
            return Zy
          };
          const Uy = yb.splice;
          yb.splice = (bb, Wy) => {
            const hy = Uy.call(yb, bb, Wy ?? yb.length);
            if (this._clusteredContainer) return hy;
            for (const yb of hy) yb._resyncLightSource(this);
            return hy
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(yb) {
          var bb = this;
          const Wy = yb.push;
          yb.push = function() {
            for (var Uy = arguments.length, hy = new Array(Uy), fy = 0; fy < Uy; fy++) hy[fy] = arguments[fy];
            const Zy = Wy.apply(yb, hy);
            return bb._resyncMeshes(), Zy
          };
          const Uy = yb.splice;
          yb.splice = (bb, Wy) => {
            const hy = Uy.call(yb, bb, Wy ?? yb.length);
            return this._resyncMeshes(), hy
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const yb of this.kWy().meshes) yb._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const yb of this.kWy().meshes) - 1 !== yb.lightSources.indexOf(this) && yb._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.kWy().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let bb = 0;
          const Wy = this.getTypeID();
          let Uy = this.intensityMode;
          switch (Uy === yb.INTENSITYMODE_AUTOMATIC && (Uy = Wy === yb.LIGHTTYPEID_DIRECTIONALLIGHT ? yb.INTENSITYMODE_ILLUMINANCE : yb.INTENSITYMODE_LUMINOUSINTENSITY), Wy) {
            case yb.LIGHTTYPEID_POINTLIGHT:
            case yb.LIGHTTYPEID_SPOTLIGHT:
              switch (Uy) {
                case yb.INTENSITYMODE_LUMINOUSPOWER:
                  bb = 1 / (4 * Math.PI);
                  break;
                case yb.INTENSITYMODE_LUMINOUSINTENSITY:
                  bb = 1;
                  break;
                case yb.INTENSITYMODE_LUMINANCE:
                  bb = this.radius * this.radius
              }
              break;
            case yb.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (Uy) {
                case yb.INTENSITYMODE_ILLUMINANCE:
                  bb = 1;
                  break;
                case yb.INTENSITYMODE_LUMINANCE: {
                  let yb = this.radius;
                  yb = Math.max(yb, .001);
                  bb = 2 * Math.PI * (1 - Math.cos(yb));
                  break
                }
              }
              break;
            case yb.LIGHTTYPEID_HEMISPHERICLIGHT:
            case yb.LIGHTTYPEID_RECT_AREALIGHT:
              bb = 1
          }
          return bb
        }
        _reorderLightsInScene() {
          const yb = this.kWy();
          0 != this._renderPriority && (yb.requireLightSorting = !0), this.kWy().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, bb = new WeakMap, (() => {
        const bb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Gy[Symbol.metadata] ?? null) : void 0;
        Wy = [(0, hy.q)()], ey = [(0, hy.q)()], qb = [(0, hy.T)()], sy = [(0, hy.T)()], Sy = [(0, hy.T)()], Ey = [(0, hy.T)()], ly = [(0, hy.T)()], mb = [(0, hy.T)()], Cy = [(0, hy.h)("_reorderLightsInScene")], Ty = [(0, hy.T)("shadowEnabled")], Vy = [(0, hy.T)("excludeWithLayerMask")], Jy = [(0, hy.T)("includeOnlyWithLayerMask")], gb = [(0, hy.T)("lightmapMode")], (0, Uy.j)(yb, null, Sy, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: yb => "range" in yb,
            get: yb => yb.range
          },
          metadata: bb
        }, null, Oy), (0, Uy.j)(yb, null, Ey, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: yb => "intensityMode" in yb,
            get: yb => yb.intensityMode
          },
          metadata: bb
        }, null, Oy), (0, Uy.j)(yb, null, ly, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: yb => "radius" in yb,
            get: yb => yb.radius
          },
          metadata: bb
        }, null, Oy), (0, Uy.j)(yb, null, Cy, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: yb => "renderPriority" in yb,
            get: yb => yb.renderPriority,
            set: (yb, bb) => {
              yb.renderPriority = bb
            }
          },
          metadata: bb
        }, ab, Fy), (0, Uy.j)(null, null, Wy, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: yb => "diffuse" in yb,
            get: yb => yb.diffuse,
            set: (yb, bb) => {
              yb.diffuse = bb
            }
          },
          metadata: bb
        }, Ry, vb), (0, Uy.j)(null, null, ey, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: yb => "specular" in yb,
            get: yb => yb.specular,
            set: (yb, bb) => {
              yb.specular = bb
            }
          },
          metadata: bb
        }, ib, My), (0, Uy.j)(null, null, qb, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: yb => "falloffType" in yb,
            get: yb => yb.falloffType,
            set: (yb, bb) => {
              yb.falloffType = bb
            }
          },
          metadata: bb
        }, Yy, Xy), (0, Uy.j)(null, null, sy, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: yb => "intensity" in yb,
            get: yb => yb.intensity,
            set: (yb, bb) => {
              yb.intensity = bb
            }
          },
          metadata: bb
        }, ny, uy), (0, Uy.j)(null, null, mb, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: yb => "_renderPriority" in yb,
            get: yb => yb._renderPriority,
            set: (yb, bb) => {
              yb._renderPriority = bb
            }
          },
          metadata: bb
        }, rb, Hy), (0, Uy.j)(null, null, Ty, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: yb => "_shadowEnabled" in yb,
            get: yb => yb._shadowEnabled,
            set: (yb, bb) => {
              yb._shadowEnabled = bb
            }
          },
          metadata: bb
        }, py, Ly), (0, Uy.j)(null, null, Vy, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: yb => "_excludeWithLayerMask" in yb,
            get: yb => yb._excludeWithLayerMask,
            set: (yb, bb) => {
              yb._excludeWithLayerMask = bb
            }
          },
          metadata: bb
        }, Qy, jb), (0, Uy.j)(null, null, Jy, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: yb => "_includeOnlyWithLayerMask" in yb,
            get: yb => yb._includeOnlyWithLayerMask,
            set: (yb, bb) => {
              yb._includeOnlyWithLayerMask = bb
            }
          },
          metadata: bb
        }, Dy, tb), (0, Uy.j)(null, null, gb, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: yb => "_lightmapMode" in yb,
            get: yb => yb._lightmapMode,
            set: (yb, bb) => {
              yb._lightmapMode = bb
            }
          },
          metadata: bb
        }, wy, kb), bb && Object.defineProperty(yb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bb
        })
      })(), yb.FALLOFF_DEFAULT = By.d.FALLOFF_DEFAULT, yb.FALLOFF_PHYSICAL = By.d.FALLOFF_PHYSICAL, yb.FALLOFF_GLTF = By.d.FALLOFF_GLTF, yb.FALLOFF_STANDARD = By.d.FALLOFF_STANDARD, yb.LIGHTMAP_DEFAULT = By.d.LIGHTMAP_DEFAULT, yb.LIGHTMAP_SPECULAR = By.d.LIGHTMAP_SPECULAR, yb.LIGHTMAP_SHADOWSONLY = By.d.LIGHTMAP_SHADOWSONLY, yb.INTENSITYMODE_AUTOMATIC = By.d.INTENSITYMODE_AUTOMATIC, yb.INTENSITYMODE_LUMINOUSPOWER = By.d.INTENSITYMODE_LUMINOUSPOWER, yb.INTENSITYMODE_LUMINOUSINTENSITY = By.d.INTENSITYMODE_LUMINOUSINTENSITY, yb.INTENSITYMODE_ILLUMINANCE = By.d.INTENSITYMODE_ILLUMINANCE, yb.INTENSITYMODE_LUMINANCE = By.d.INTENSITYMODE_LUMINANCE, yb.LIGHTTYPEID_POINTLIGHT = By.d.LIGHTTYPEID_POINTLIGHT, yb.LIGHTTYPEID_DIRECTIONALLIGHT = By.d.LIGHTTYPEID_DIRECTIONALLIGHT, yb.LIGHTTYPEID_SPOTLIGHT = By.d.LIGHTTYPEID_SPOTLIGHT, yb.LIGHTTYPEID_HEMISPHERICLIGHT = By.d.LIGHTTYPEID_HEMISPHERICLIGHT, yb.LIGHTTYPEID_RECT_AREALIGHT = By.d.LIGHTTYPEID_RECT_AREALIGHT, yb
    })()
  },
  38697: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Ky
    });
    var Uy = Wy(38464),
      hy = Wy(35861),
      fy = Wy(38466),
      Zy = Wy(35893),
      cb = Wy(35886),
      Py = Wy(38347),
      oy = Wy(38485);
    class By {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new Zy.c, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new Zy.c, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let Ky = (() => {
      var yb;
      let bb, Wy, Ky, ey, qb, sy = [],
        Sy = [],
        Ey = [],
        ly = [],
        mb = [],
        Cy = [],
        Ty = [],
        Vy = [],
        Jy = [],
        gb = [];
      return yb = class {
        static AddNodeConstructor(yb, bb) {
          this._NodeConstructors[yb] = bb
        }
        static Construct(yb, bb, Wy, Uy) {
          const hy = this._NodeConstructors[yb];
          return hy ? hy(bb, Wy, Uy) : null
        }
        set accessibilityTag(yb) {
          this._accessibilityTag = yb, this.onAccessibilityTagChangedObservable.notifyObservers(yb)
        }
        get accessibilityTag() {
          return this._accessibilityTag
        }
        get doNotSerialize() {
          return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
        }
        set doNotSerialize(yb) {
          this._nodeDataStorage._doNotSerialize = yb
        }
        Koy() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(yb) {
          if (this._parentNode === yb) return;
          const bb = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const bb = this._parentNode._children.indexOf(this); - 1 !== bb && this._parentNode._children.splice(bb, 1), yb || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = yb, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), bb || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
        }
        get parent() {
          return this._parentNode
        }
        get inheritVisibility() {
          return this._nodeDataStorage._inheritVisibility
        }
        set inheritVisibility(yb) {
          this._nodeDataStorage._inheritVisibility = yb
        }
        get isVisible() {
          return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
        }
        set isVisible(yb) {
          this._nodeDataStorage._isVisible = yb
        }
        _serializeAsParent(yb) {
          yb.parentId = this.uniqueId
        }
        _addToSceneRootNodes() {
          -1 === this._nodeDataStorage._sceneRootNodesIndex && (this._nodeDataStorage._sceneRootNodesIndex = this._scene.rootNodes.length, this._scene.rootNodes.push(this))
        }
        _removeFromSceneRootNodes() {
          if (-1 !== this._nodeDataStorage._sceneRootNodesIndex) {
            const yb = this._scene.rootNodes,
              bb = yb.length - 1;
            yb[this._nodeDataStorage._sceneRootNodesIndex] = yb[bb], yb[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
          }
        }
        get animationPropertiesOverride() {
          return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
        }
        set animationPropertiesOverride(yb) {
          this._animationPropertiesOverride = yb
        }
        getClassName() {
          return "Node"
        }
        set onDispose(yb) {
          this._onDisposeObserver && this.Nby.remove(this._onDisposeObserver), this._onDisposeObserver = this.Nby.add(yb)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var yb;
          return (yb = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (yb._onEffectiveEnabledStateChangedObservable = new Zy.c)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            Wy = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new By, this.name = (0, Uy.l)(this, sy, void 0), this.id = ((0, Uy.l)(this, Sy), (0, Uy.l)(this, Ey, void 0)), this.uniqueId = ((0, Uy.l)(this, ly), (0, Uy.l)(this, mb, void 0)), this.state = ((0, Uy.l)(this, Cy), (0, Uy.l)(this, Ty, "")), this.metadata = ((0, Uy.l)(this, Vy), (0, Uy.l)(this, Jy, null)), this._internalMetadata = (0, Uy.l)(this, gb), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new Zy.c, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = hy.c.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.Nby = new Zy.c, this._onDisposeObserver = null, this._behaviors = new Array, this.name = yb, this.id = yb, this._scene = bb || cb.c.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), Wy && this._addToSceneRootNodes()
        }
        kWy() {
          return this._scene
        }
        xh() {
          return this._scene.xh()
        }
        addBehavior(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(yb) || (yb.init(), this._scene.isLoading && !bb ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(yb) && yb.attach(this)
          })) : yb.attach(this), this._behaviors.push(yb)), this
        }
        removeBehavior(yb) {
          const bb = this._behaviors.indexOf(yb);
          return -1 === bb || (this._behaviors.splice(bb, 1), yb.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(yb) {
          for (const bb of this._behaviors)
            if (bb.name === yb) return bb;
          return null
        }
        getWorldMatrix() {
          return this._currentRenderId !== this._scene.getRenderId() && this.computeWorldMatrix(), this._worldMatrix
        }
        _getWorldMatrixDeterminant() {
          return this._worldMatrixDeterminantIsDirty && (this._worldMatrixDeterminantIsDirty = !1, this._worldMatrixDeterminant = this._worldMatrix.determinant()), this._worldMatrixDeterminant
        }
        get worldMatrixFromCache() {
          return this._worldMatrix
        }
        _initCache() {
          this._cache = {}
        }
        updateCache(yb) {
          !yb && this.isSynchronized() || this._updateCache()
        }
        _getActionManagerForTrigger(yb) {
          return this.parent ? this.parent._getActionManagerForTrigger(yb, !1) : null
        }
        _updateCache(yb) {}
        _isSynchronized() {
          return !0
        }
        _markSyncedWithParent() {
          this._parentNode && (this._parentUpdateId = this._parentNode._childUpdateId)
        }
        isSynchronizedWithParent() {
          return !this._parentNode || !this._parentNode._isDirty && this._parentUpdateId === this._parentNode._childUpdateId && this._parentNode.isSynchronized()
        }
        isSynchronized() {
          return !(this._parentNode && !this.isSynchronizedWithParent()) && this._isSynchronized()
        }
        isReady() {
          return this._nodeDataStorage._isReady
        }
        goy(yb) {
          return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this
        }
        isEnabled() {
          return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled
        }
        _hasEffectiveEnabledStateObservers() {
          const yb = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
          return !!yb && yb.hasObservers()
        }
        _syncParentEnabledState() {
          const yb = this._hasEffectiveEnabledStateObservers(),
            bb = yb ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const Wy of this._children) Wy._syncParentEnabledState();
          if (yb) {
            const yb = this.isEnabled();
            yb !== bb && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(yb)
          }
        }
        dJ(yb) {
          if (this._nodeDataStorage._isEnabled === yb) return;
          const bb = this._hasEffectiveEnabledStateObservers(),
            Wy = bb ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = yb, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(yb), bb) {
            const yb = this.isEnabled();
            yb !== Wy && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(yb)
          }
        }
        isDescendantOf(yb) {
          return !!this.parent && (this.parent === yb || this.parent.isDescendantOf(yb))
        }
        _getDescendants(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Wy = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let Uy = 0; Uy < this._children.length; Uy++) {
              const hy = this._children[Uy];
              Wy && !Wy(hy) || yb.push(hy), bb || hy._getDescendants(yb, !1, Wy)
            }
        }
        getDescendants(yb, bb) {
          const Wy = [];
          return this._getDescendants(Wy, yb, bb), Wy
        }
        getChildMeshes(yb, bb) {
          const Wy = [];
          return this._getDescendants(Wy, yb, (yb => (!bb || bb(yb)) && void 0 !== yb.cullingStrategy)), Wy
        }
        getChildren(yb) {
          let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(bb, yb)
        }
        _setReady(yb) {
          yb !== this._nodeDataStorage._isReady && (yb ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(yb) {
          for (let bb = 0; bb < this.animations.length; bb++) {
            const Wy = this.animations[bb];
            if (Wy.name === yb) return Wy
          }
          return null
        }
        createAnimationRange(bb, Wy, Uy) {
          if (!this._ranges[bb]) {
            this._ranges[bb] = yb._AnimationRangeFactory(bb, Wy, Uy);
            for (let yb = 0, hy = this.animations.length; yb < hy; yb++) this.animations[yb] && this.animations[yb].createRange(bb, Wy, Uy)
          }
        }
        deleteAnimationRange(yb) {
          let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let Wy = 0, Uy = this.animations.length; Wy < Uy; Wy++) this.animations[Wy] && this.animations[Wy].deleteRange(yb, bb);
          this._ranges[yb] = null
        }
        getAnimationRange(yb) {
          return this._ranges[yb] || null
        }
        clone(bb, Wy, Uy) {
          const hy = oy.c.Clone((() => new yb(bb, this.kWy())), this);
          if (Wy && (hy.parent = Wy), !Uy) {
            const yb = this.getDescendants(!0);
            for (let Wy = 0; Wy < yb.length; Wy++) {
              const Uy = yb[Wy];
              Uy.clone(bb + "." + Uy.name, hy)
            }
          }
          return hy
        }
        getAnimationRanges() {
          const yb = [];
          let bb;
          for (bb in this._ranges) yb.push(this._ranges[bb]);
          return yb
        }
        beginAnimation(yb, bb, Wy, Uy) {
          const hy = this.getAnimationRange(yb);
          return hy ? this._scene.beginAnimation(this, hy.from, hy.to, bb, Wy, Uy) : null
        }
        serializeAnimationRanges() {
          const yb = [];
          for (const bb in this._ranges) {
            const Wy = this._ranges[bb];
            if (!Wy) continue;
            const Uy = {};
            Uy.name = bb, Uy.from = Wy.from, Uy.to = Wy.to, yb.push(Uy)
          }
          return yb
        }
        computeWorldMatrix(yb) {
          return this._worldMatrix || (this._worldMatrix = hy.c.Identity()), this._worldMatrix
        }
        dispose(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !yb) {
            const Wy = this.getDescendants(!0);
            for (const Uy of Wy) Uy.dispose(yb, bb)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.Nby.notifyObservers(this), this.Nby.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const Wy of this._behaviors) Wy.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(yb, bb, Wy) {
          if (bb.lZ)
            for (let Uy = 0; Uy < bb.lZ.length; Uy++) {
              const Wy = bb.lZ[Uy];
              yb.createAnimationRange(Wy.name, Wy.from, Wy.to)
            }
        }
        getHierarchyBoundingVectors() {
          let yb, bb, Wy = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            Uy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.kWy().incrementRenderId(), this.computeWorldMatrix(!0);
          const fy = this;
          if (fy.qUy && fy.vJ) {
            const Wy = fy.qUy();
            yb = Wy.boundingBox.minimumWorld.clone(), bb = Wy.boundingBox.maximumWorld.clone()
          } else yb = new hy.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), bb = new hy.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (Wy) {
            const Wy = this.getDescendants(!1);
            for (const fy of Wy) {
              const Wy = fy;
              if (Wy.computeWorldMatrix(!0), Uy && !Uy(Wy)) continue;
              if (!Wy.qUy || 0 === Wy.getTotalVertices()) continue;
              const Zy = Wy.qUy().boundingBox,
                cb = Zy.minimumWorld,
                Py = Zy.maximumWorld;
              hy.n.CheckExtends(cb, yb, bb), hy.n.CheckExtends(Py, yb, bb)
            }
          }
          return {
            min: yb,
            max: bb
          }
        }
      }, (() => {
        const hy = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        bb = [(0, fy.T)()], Wy = [(0, fy.T)()], Ky = [(0, fy.T)()], ey = [(0, fy.T)()], qb = [(0, fy.T)()], (0, Uy.j)(null, null, bb, {
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
          metadata: hy
        }, sy, Sy), (0, Uy.j)(null, null, Wy, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: yb => "id" in yb,
            get: yb => yb.id,
            set: (yb, bb) => {
              yb.id = bb
            }
          },
          metadata: hy
        }, Ey, ly), (0, Uy.j)(null, null, Ky, {
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
          metadata: hy
        }, mb, Cy), (0, Uy.j)(null, null, ey, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: yb => "state" in yb,
            get: yb => yb.state,
            set: (yb, bb) => {
              yb.state = bb
            }
          },
          metadata: hy
        }, Ty, Vy), (0, Uy.j)(null, null, qb, {
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
          metadata: hy
        }, Jy, gb), hy && Object.defineProperty(yb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: hy
        })
      })(), yb._AnimationRangeFactory = (yb, bb, Wy) => {
        throw (0, Py.g)("AnimationRange")
      }, yb._NodeConstructors = {}, yb
    })()
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);