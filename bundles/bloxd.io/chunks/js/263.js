export const id = 263;
export const ids = [263];
export const modules = {
  40508: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => cu
    });
    var su = ju(40255),
      Uu = ju(40258),
      Zu = ju(37494),
      Xu = ju(37680),
      lu = ju(40467),
      qu = ju(40390),
      fu = ju(37532),
      Cu = ju(40450),
      bu = ju(40272);
    let cu = (() => {
      var uu, Eu;
      let ju, cu, Nu, Ou, Yu, hu, Du, gu, Mu, eu, Gu, pu, wu, Ju = lu.c,
        du = [],
        au = [],
        Pu = [],
        ou = [],
        ku = [],
        mu = [],
        vu = [],
        Ku = [],
        Vu = [],
        ru = [],
        Qu = [],
        iu = [],
        Wu = [],
        Su = [],
        Iu = [],
        Fu = [],
        Bu = [],
        Lu = [],
        tu = [],
        xu = [],
        Tu = [];
      return uu = class extends Ju {
        get range() {
          return this._range
        }
        set range(uu) {
          this._range = uu, this._inverseSquaredRange = 1 / (this.range * this.range)
        }
        get intensityMode() {
          return this._intensityMode
        }
        set intensityMode(uu) {
          this._intensityMode = uu, this._computePhotometricScale()
        }
        get radius() {
          return this._radius
        }
        set radius(uu) {
          this._radius = uu, this._computePhotometricScale()
        }
        get renderPriority() {
          return (0, su.b)(this, Eu, "f")
        }
        set renderPriority(uu) {
          (0, su.d)(this, Eu, uu, "f")
        }
        get shadowEnabled() {
          return this._shadowEnabled
        }
        set shadowEnabled(uu) {
          this._shadowEnabled !== uu && (this._shadowEnabled = uu, this._markMeshesAsLightDirty())
        }
        get includedOnlyMeshes() {
          return this._includedOnlyMeshes
        }
        set includedOnlyMeshes(uu) {
          this._includedOnlyMeshes = uu, this._hookArrayForIncludedOnly(uu)
        }
        get excludedMeshes() {
          return this._excludedMeshes
        }
        set excludedMeshes(uu) {
          this._excludedMeshes = uu, this._hookArrayForExcluded(uu)
        }
        get excludeWithLayerMask() {
          return this._excludeWithLayerMask
        }
        set excludeWithLayerMask(uu) {
          this._excludeWithLayerMask = uu, this._resyncMeshes()
        }
        get includeOnlyWithLayerMask() {
          return this._includeOnlyWithLayerMask
        }
        set includeOnlyWithLayerMask(uu) {
          this._includeOnlyWithLayerMask = uu, this._resyncMeshes()
        }
        get lightmapMode() {
          return this._lightmapMode
        }
        set lightmapMode(uu) {
          this._lightmapMode !== uu && (this._lightmapMode = uu, this._markMeshesAsLightDirty())
        }
        getViewMatrix(uu) {
          return null
        }
        getProjectionMatrix(uu, Eu) {
          return null
        }
        constructor(ju, Uu, Zu) {
          super(ju, Uu, !1), this.diffuse = ((0, su.g)(this, du), (0, su.g)(this, au, new Xu.c(1, 1, 1))), this.specular = ((0, su.g)(this, Pu), (0, su.g)(this, ou, new Xu.c(1, 1, 1))), this.falloffType = ((0, su.g)(this, ku), (0, su.g)(this, mu, uu.FALLOFF_DEFAULT)), this.intensity = ((0, su.g)(this, vu), (0, su.g)(this, Ku, 1)), this._range = ((0, su.g)(this, Vu), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = uu.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, su.g)(this, ru, void 0), Eu.set(this, ((0, su.g)(this, Qu), (0, su.g)(this, iu, 0))), this._shadowEnabled = ((0, su.g)(this, Wu), (0, su.g)(this, Su, !0)), this._includedOnlyMeshes = (0, su.g)(this, Iu), this._excludeWithLayerMask = (0, su.g)(this, Fu, 0), this._includeOnlyWithLayerMask = ((0, su.g)(this, Bu), (0, su.g)(this, Lu, 0)), this._lightmapMode = ((0, su.g)(this, tu), (0, su.g)(this, xu, 0)), this._shadowGenerators = ((0, su.g)(this, Tu), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, Zu || this.hV().addLight(this), this._uniformBuffer = new qu.d(this.hV().wO(), void 0, void 0, ju), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], Zu || this._resyncMeshes()
        }
        transferTexturesToEffect(uu, Eu) {
          return this
        }
        _bindLight(uu, Eu, ju, su) {
          let Uu = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const Zu = uu.toString();
          let lu = !1;
          if (this._uniformBuffer.bindToEffect(ju, "Light" + Zu), this._renderId !== Eu.getRenderId() || this._lastUseSpecular !== su || !this._uniformBuffer.useUbo) {
            this._renderId = Eu.getRenderId(), this._lastUseSpecular = su;
            const uu = this.getScaledIntensity();
            this.transferToEffect(ju, Zu), this.diffuse.scaleToRef(uu, Xu.m.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", Xu.m.Color3[0], this.range, Zu), su && (this.specular.scaleToRef(uu, Xu.m.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", Xu.m.Color3[1], this.radius, Zu)), lu = !0
          }
          if (this.transferTexturesToEffect(ju, Zu), Eu.shadowsEnabled && this.shadowEnabled && Uu) {
            const uu = this.getShadowGenerator(Eu.activeCamera) ?? this.getShadowGenerator();
            uu && (uu.bindShadowLight(Zu, ju), lu = !0)
          }
          lu ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(uu) {
          let Eu = "Name: " + this.name;
          if (Eu += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let ju = 0; ju < this.animations.length; ju++) Eu += ", animation[0]: " + this.animations[ju].toString(uu);
          return Eu
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.Gw() || this._resyncMeshes()
        }
        Wk(uu) {
          super.Wk(uu), this._resyncMeshes()
        }
        getShadowGenerator() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(uu) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return Zu.t.Zero()
        }
        canAffectMesh(uu) {
          return !uu || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(uu)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(uu)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & uu.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & uu.layerMask)))
        }
        dispose(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const uu = this._shadowGenerators.values();
            for (let Eu = uu.next(); !0 !== Eu.done; Eu = uu.next()) {
              Eu.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.hV().stopAnimation(this), this._parentContainer) {
            const uu = this._parentContainer.lights.indexOf(this);
            uu > -1 && this._parentContainer.lights.splice(uu, 1), this._parentContainer = null
          }
          for (const ju of this.hV().meshes) ju._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.hV().removeLight(this), super.dispose(uu, Eu)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(Eu) {
          let ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const su = uu.GetConstructorFromName(this.getTypeID(), Eu, this.hV());
          if (!su) return null;
          const Uu = bu.e.Clone(su, this);
          return Eu && (Uu.name = Eu), ju && (Uu.parent = ju), Uu.Wk(this.isEnabled()), this.onClonedObservable.notifyObservers(Uu), Uu
        }
        serialize() {
          const uu = bu.e.Serialize(this);
          if (uu.uniqueId = this.uniqueId, uu.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(uu), this.excludedMeshes.length > 0) {
            uu.excludedMeshesIds = [];
            for (const Eu of this.excludedMeshes) uu.excludedMeshesIds.push(Eu.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            uu.includedOnlyMeshesIds = [];
            for (const Eu of this.includedOnlyMeshes) uu.includedOnlyMeshesIds.push(Eu.id)
          }
          return bu.e.AppendSerializedAnimations(this, uu), uu.HY = this.serializeAnimationRanges(), uu.isEnabled = this.isEnabled(), uu
        }
        static GetConstructorFromName(uu, Eu, ju) {
          const su = lu.c.Construct("Light_Type_" + uu, Eu, ju);
          return su || null
        }
        static Parse(Eu, ju) {
          let su = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Uu = uu.GetConstructorFromName(Eu.type, Eu.name, ju);
          if (!Uu) return null;
          const Zu = bu.e.Parse(Uu, Eu, ju, su);
          if (Eu.excludedMeshesIds && (Zu._excludedMeshesIds = Eu.excludedMeshesIds), Eu.includedOnlyMeshesIds && (Zu._includedOnlyMeshesIds = Eu.includedOnlyMeshesIds), void 0 !== Eu.parentId && (Zu._waitingParentId = Eu.parentId), void 0 !== Eu.parentInstanceIndex && (Zu._waitingParentInstanceIndex = Eu.parentInstanceIndex), void 0 !== Eu.falloffType && (Zu.falloffType = Eu.falloffType), void 0 !== Eu.lightmapMode && (Zu.lightmapMode = Eu.lightmapMode), Eu.animations) {
            for (let uu = 0; uu < Eu.animations.length; uu++) {
              const ju = Eu.animations[uu],
                su = (0, fu.d)("BABYLON.Animation");
              su && Zu.animations.push(su.Parse(ju))
            }
            lu.c.ParseAnimationRanges(Zu, Eu, ju)
          }
          return Eu.autoAnimate && ju.beginAnimation(Zu, Eu.autoAnimateFrom, Eu.autoAnimateTo, Eu.autoAnimateLoop, Eu.autoAnimateSpeed || 1), void 0 !== Eu.isEnabled && Zu.Wk(Eu.isEnabled), Zu._onParsed(Eu, ju, su), Zu
        }
        _onParsed(uu, Eu) {}
        _hookArrayForExcluded(uu) {
          var Eu = this;
          const ju = uu.push;
          uu.push = function() {
            for (var su = arguments.length, Uu = new Array(su), Zu = 0; Zu < su; Zu++) Uu[Zu] = arguments[Zu];
            const Xu = ju.apply(uu, Uu);
            if (Eu._clusteredContainer) return Xu;
            for (const uu of Uu) uu._resyncLightSource(Eu);
            return Xu
          };
          const su = uu.splice;
          uu.splice = (Eu, ju) => {
            const Uu = su.call(uu, Eu, ju ?? uu.length);
            if (this._clusteredContainer) return Uu;
            for (const uu of Uu) uu._resyncLightSource(this);
            return Uu
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(uu) {
          var Eu = this;
          const ju = uu.push;
          uu.push = function() {
            for (var su = arguments.length, Uu = new Array(su), Zu = 0; Zu < su; Zu++) Uu[Zu] = arguments[Zu];
            const Xu = ju.apply(uu, Uu);
            return Eu._resyncMeshes(), Xu
          };
          const su = uu.splice;
          uu.splice = (Eu, ju) => {
            const Uu = su.call(uu, Eu, ju ?? uu.length);
            return this._resyncMeshes(), Uu
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const uu of this.hV().meshes) uu._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const uu of this.hV().meshes) - 1 !== uu.lightSources.indexOf(this) && uu._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.hV().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let Eu = 0;
          const ju = this.getTypeID();
          let su = this.intensityMode;
          switch (su === uu.INTENSITYMODE_AUTOMATIC && (su = ju === uu.LIGHTTYPEID_DIRECTIONALLIGHT ? uu.INTENSITYMODE_ILLUMINANCE : uu.INTENSITYMODE_LUMINOUSINTENSITY), ju) {
            case uu.LIGHTTYPEID_POINTLIGHT:
            case uu.LIGHTTYPEID_SPOTLIGHT:
              switch (su) {
                case uu.INTENSITYMODE_LUMINOUSPOWER:
                  Eu = 1 / (4 * Math.PI);
                  break;
                case uu.INTENSITYMODE_LUMINOUSINTENSITY:
                  Eu = 1;
                  break;
                case uu.INTENSITYMODE_LUMINANCE:
                  Eu = this.radius * this.radius
              }
              break;
            case uu.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (su) {
                case uu.INTENSITYMODE_ILLUMINANCE:
                  Eu = 1;
                  break;
                case uu.INTENSITYMODE_LUMINANCE: {
                  let uu = this.radius;
                  uu = Math.max(uu, .001);
                  Eu = 2 * Math.PI * (1 - Math.cos(uu));
                  break
                }
              }
              break;
            case uu.LIGHTTYPEID_HEMISPHERICLIGHT:
            case uu.LIGHTTYPEID_RECT_AREALIGHT:
              Eu = 1
          }
          return Eu
        }
        _reorderLightsInScene() {
          const uu = this.hV();
          0 != this._renderPriority && (uu.requireLightSorting = !0), this.hV().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, Eu = new WeakMap, (() => {
        const Eu = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ju[Symbol.metadata] ?? null) : void 0;
        ju = [(0, Uu.j)()], cu = [(0, Uu.j)()], Nu = [(0, Uu.E)()], Ou = [(0, Uu.E)()], Yu = [(0, Uu.E)()], hu = [(0, Uu.E)()], Du = [(0, Uu.E)()], gu = [(0, Uu.E)()], Mu = [(0, Uu.e)("_reorderLightsInScene")], eu = [(0, Uu.E)("shadowEnabled")], Gu = [(0, Uu.E)("excludeWithLayerMask")], pu = [(0, Uu.E)("includeOnlyWithLayerMask")], wu = [(0, Uu.E)("lightmapMode")], (0, su.e)(uu, null, Yu, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: uu => "range" in uu,
            get: uu => uu.range
          },
          metadata: Eu
        }, null, du), (0, su.e)(uu, null, hu, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: uu => "intensityMode" in uu,
            get: uu => uu.intensityMode
          },
          metadata: Eu
        }, null, du), (0, su.e)(uu, null, Du, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: uu => "radius" in uu,
            get: uu => uu.radius
          },
          metadata: Eu
        }, null, du), (0, su.e)(uu, null, Mu, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: uu => "renderPriority" in uu,
            get: uu => uu.renderPriority,
            set: (uu, Eu) => {
              uu.renderPriority = Eu
            }
          },
          metadata: Eu
        }, iu, Wu), (0, su.e)(null, null, ju, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: uu => "diffuse" in uu,
            get: uu => uu.diffuse,
            set: (uu, Eu) => {
              uu.diffuse = Eu
            }
          },
          metadata: Eu
        }, au, Pu), (0, su.e)(null, null, cu, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: uu => "specular" in uu,
            get: uu => uu.specular,
            set: (uu, Eu) => {
              uu.specular = Eu
            }
          },
          metadata: Eu
        }, ou, ku), (0, su.e)(null, null, Nu, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: uu => "falloffType" in uu,
            get: uu => uu.falloffType,
            set: (uu, Eu) => {
              uu.falloffType = Eu
            }
          },
          metadata: Eu
        }, mu, vu), (0, su.e)(null, null, Ou, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: uu => "intensity" in uu,
            get: uu => uu.intensity,
            set: (uu, Eu) => {
              uu.intensity = Eu
            }
          },
          metadata: Eu
        }, Ku, Vu), (0, su.e)(null, null, gu, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: uu => "_renderPriority" in uu,
            get: uu => uu._renderPriority,
            set: (uu, Eu) => {
              uu._renderPriority = Eu
            }
          },
          metadata: Eu
        }, ru, Qu), (0, su.e)(null, null, eu, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: uu => "_shadowEnabled" in uu,
            get: uu => uu._shadowEnabled,
            set: (uu, Eu) => {
              uu._shadowEnabled = Eu
            }
          },
          metadata: Eu
        }, Su, Iu), (0, su.e)(null, null, Gu, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: uu => "_excludeWithLayerMask" in uu,
            get: uu => uu._excludeWithLayerMask,
            set: (uu, Eu) => {
              uu._excludeWithLayerMask = Eu
            }
          },
          metadata: Eu
        }, Fu, Bu), (0, su.e)(null, null, pu, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: uu => "_includeOnlyWithLayerMask" in uu,
            get: uu => uu._includeOnlyWithLayerMask,
            set: (uu, Eu) => {
              uu._includeOnlyWithLayerMask = Eu
            }
          },
          metadata: Eu
        }, Lu, tu), (0, su.e)(null, null, wu, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: uu => "_lightmapMode" in uu,
            get: uu => uu._lightmapMode,
            set: (uu, Eu) => {
              uu._lightmapMode = Eu
            }
          },
          metadata: Eu
        }, xu, Tu), Eu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Eu
        })
      })(), uu.FALLOFF_DEFAULT = Cu.e.FALLOFF_DEFAULT, uu.FALLOFF_PHYSICAL = Cu.e.FALLOFF_PHYSICAL, uu.FALLOFF_GLTF = Cu.e.FALLOFF_GLTF, uu.FALLOFF_STANDARD = Cu.e.FALLOFF_STANDARD, uu.LIGHTMAP_DEFAULT = Cu.e.LIGHTMAP_DEFAULT, uu.LIGHTMAP_SPECULAR = Cu.e.LIGHTMAP_SPECULAR, uu.LIGHTMAP_SHADOWSONLY = Cu.e.LIGHTMAP_SHADOWSONLY, uu.INTENSITYMODE_AUTOMATIC = Cu.e.INTENSITYMODE_AUTOMATIC, uu.INTENSITYMODE_LUMINOUSPOWER = Cu.e.INTENSITYMODE_LUMINOUSPOWER, uu.INTENSITYMODE_LUMINOUSINTENSITY = Cu.e.INTENSITYMODE_LUMINOUSINTENSITY, uu.INTENSITYMODE_ILLUMINANCE = Cu.e.INTENSITYMODE_ILLUMINANCE, uu.INTENSITYMODE_LUMINANCE = Cu.e.INTENSITYMODE_LUMINANCE, uu.LIGHTTYPEID_POINTLIGHT = Cu.e.LIGHTTYPEID_POINTLIGHT, uu.LIGHTTYPEID_DIRECTIONALLIGHT = Cu.e.LIGHTTYPEID_DIRECTIONALLIGHT, uu.LIGHTTYPEID_SPOTLIGHT = Cu.e.LIGHTTYPEID_SPOTLIGHT, uu.LIGHTTYPEID_HEMISPHERICLIGHT = Cu.e.LIGHTTYPEID_HEMISPHERICLIGHT, uu.LIGHTTYPEID_RECT_AREALIGHT = Cu.e.LIGHTTYPEID_RECT_AREALIGHT, uu
    })()
  },
  40467: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => bu
    });
    var su = ju(40255),
      Uu = ju(37494),
      Zu = ju(40258),
      Xu = ju(37514),
      lu = ju(37506),
      qu = ju(40153),
      fu = ju(40272);
    class Cu {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new Xu.d, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new Xu.d, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let bu = (() => {
      var uu;
      let Eu, ju, bu, cu, Nu, Ou = [],
        Yu = [],
        hu = [],
        Du = [],
        gu = [],
        Mu = [],
        eu = [],
        Gu = [],
        pu = [],
        wu = [];
      return uu = class {
        static AddNodeConstructor(uu, Eu) {
          this._NodeConstructors[uu] = Eu
        }
        static Construct(uu, Eu, ju, su) {
          const Uu = this._NodeConstructors[uu];
          return Uu ? Uu(Eu, ju, su) : null
        }
        set accessibilityTag(uu) {
          this._accessibilityTag = uu, this.onAccessibilityTagChangedObservable.notifyObservers(uu)
        }
        get accessibilityTag() {
          return this._accessibilityTag
        }
        get doNotSerialize() {
          return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
        }
        set doNotSerialize(uu) {
          this._nodeDataStorage._doNotSerialize = uu
        }
        Gw() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(uu) {
          if (this._parentNode === uu) return;
          const Eu = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const Eu = this._parentNode._children.indexOf(this); - 1 !== Eu && this._parentNode._children.splice(Eu, 1), uu || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = uu, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), Eu || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
        }
        get parent() {
          return this._parentNode
        }
        get inheritVisibility() {
          return this._nodeDataStorage._inheritVisibility
        }
        set inheritVisibility(uu) {
          this._nodeDataStorage._inheritVisibility = uu
        }
        get isVisible() {
          return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
        }
        set isVisible(uu) {
          this._nodeDataStorage._isVisible = uu
        }
        _serializeAsParent(uu) {
          uu.parentId = this.uniqueId
        }
        _addToSceneRootNodes() {
          -1 === this._nodeDataStorage._sceneRootNodesIndex && (this._nodeDataStorage._sceneRootNodesIndex = this._scene.rootNodes.length, this._scene.rootNodes.push(this))
        }
        _removeFromSceneRootNodes() {
          if (-1 !== this._nodeDataStorage._sceneRootNodesIndex) {
            const uu = this._scene.rootNodes,
              Eu = uu.length - 1;
            uu[this._nodeDataStorage._sceneRootNodesIndex] = uu[Eu], uu[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
          }
        }
        get animationPropertiesOverride() {
          return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
        }
        set animationPropertiesOverride(uu) {
          this._animationPropertiesOverride = uu
        }
        getClassName() {
          return "Node"
        }
        set onDispose(uu) {
          this._onDisposeObserver && this.wV.remove(this._onDisposeObserver), this._onDisposeObserver = this.wV.add(uu)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var uu;
          return (uu = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (uu._onEffectiveEnabledStateChangedObservable = new Xu.d)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            ju = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new Cu, this.name = (0, su.g)(this, Ou, void 0), this.id = ((0, su.g)(this, Yu), (0, su.g)(this, hu, void 0)), this.uniqueId = ((0, su.g)(this, Du), (0, su.g)(this, gu, void 0)), this.state = ((0, su.g)(this, Mu), (0, su.g)(this, eu, "")), this.metadata = ((0, su.g)(this, Gu), (0, su.g)(this, pu, null)), this._internalMetadata = (0, su.g)(this, wu), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new Xu.d, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = Uu.e.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.wV = new Xu.d, this._onDisposeObserver = null, this._behaviors = new Array, this.name = uu, this.id = uu, this._scene = Eu || lu.b.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), ju && this._addToSceneRootNodes()
        }
        hV() {
          return this._scene
        }
        wO() {
          return this._scene.wO()
        }
        addBehavior(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(uu) || (uu.init(), this._scene.isLoading && !Eu ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(uu) && uu.attach(this)
          })) : uu.attach(this), this._behaviors.push(uu)), this
        }
        removeBehavior(uu) {
          const Eu = this._behaviors.indexOf(uu);
          return -1 === Eu || (this._behaviors.splice(Eu, 1), uu.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(uu) {
          for (const Eu of this._behaviors)
            if (Eu.name === uu) return Eu;
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
        updateCache(uu) {
          !uu && this.isSynchronized() || this._updateCache()
        }
        _getActionManagerForTrigger(uu) {
          return this.parent ? this.parent._getActionManagerForTrigger(uu, !1) : null
        }
        _updateCache(uu) {}
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
        tEu(uu) {
          return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this
        }
        isEnabled() {
          return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled
        }
        _hasEffectiveEnabledStateObservers() {
          const uu = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
          return !!uu && uu.hasObservers()
        }
        _syncParentEnabledState() {
          const uu = this._hasEffectiveEnabledStateObservers(),
            Eu = uu ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const ju of this._children) ju._syncParentEnabledState();
          if (uu) {
            const uu = this.isEnabled();
            uu !== Eu && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(uu)
          }
        }
        Wk(uu) {
          if (this._nodeDataStorage._isEnabled === uu) return;
          const Eu = this._hasEffectiveEnabledStateObservers(),
            ju = Eu ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = uu, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(uu), Eu) {
            const uu = this.isEnabled();
            uu !== ju && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(uu)
          }
        }
        isDescendantOf(uu) {
          return !!this.parent && (this.parent === uu || this.parent.isDescendantOf(uu))
        }
        _getDescendants(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            ju = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let su = 0; su < this._children.length; su++) {
              const Uu = this._children[su];
              ju && !ju(Uu) || uu.push(Uu), Eu || Uu._getDescendants(uu, !1, ju)
            }
        }
        getDescendants(uu, Eu) {
          const ju = [];
          return this._getDescendants(ju, uu, Eu), ju
        }
        getChildMeshes(uu, Eu) {
          const ju = [];
          return this._getDescendants(ju, uu, (uu => (!Eu || Eu(uu)) && void 0 !== uu.cullingStrategy)), ju
        }
        getChildren(uu) {
          let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(Eu, uu)
        }
        _setReady(uu) {
          uu !== this._nodeDataStorage._isReady && (uu ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(uu) {
          for (let Eu = 0; Eu < this.animations.length; Eu++) {
            const ju = this.animations[Eu];
            if (ju.name === uu) return ju
          }
          return null
        }
        createAnimationRange(Eu, ju, su) {
          if (!this._ranges[Eu]) {
            this._ranges[Eu] = uu._AnimationRangeFactory(Eu, ju, su);
            for (let uu = 0, Uu = this.animations.length; uu < Uu; uu++) this.animations[uu] && this.animations[uu].createRange(Eu, ju, su)
          }
        }
        deleteAnimationRange(uu) {
          let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let ju = 0, su = this.animations.length; ju < su; ju++) this.animations[ju] && this.animations[ju].deleteRange(uu, Eu);
          this._ranges[uu] = null
        }
        getAnimationRange(uu) {
          return this._ranges[uu] || null
        }
        clone(Eu, ju, su) {
          const Uu = fu.e.Clone((() => new uu(Eu, this.hV())), this);
          if (ju && (Uu.parent = ju), !su) {
            const uu = this.getDescendants(!0);
            for (let ju = 0; ju < uu.length; ju++) {
              const su = uu[ju];
              su.clone(Eu + "." + su.name, Uu)
            }
          }
          return Uu
        }
        getAnimationRanges() {
          const uu = [];
          let Eu;
          for (Eu in this._ranges) uu.push(this._ranges[Eu]);
          return uu
        }
        beginAnimation(uu, Eu, ju, su) {
          const Uu = this.getAnimationRange(uu);
          return Uu ? this._scene.beginAnimation(this, Uu.from, Uu.to, Eu, ju, su) : null
        }
        serializeAnimationRanges() {
          const uu = [];
          for (const Eu in this._ranges) {
            const ju = this._ranges[Eu];
            if (!ju) continue;
            const su = {};
            su.name = Eu, su.from = ju.from, su.to = ju.to, uu.push(su)
          }
          return uu
        }
        computeWorldMatrix(uu) {
          return this._worldMatrix || (this._worldMatrix = Uu.e.Identity()), this._worldMatrix
        }
        dispose(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !uu) {
            const ju = this.getDescendants(!0);
            for (const su of ju) su.dispose(uu, Eu)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.wV.notifyObservers(this), this.wV.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const ju of this._behaviors) ju.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(uu, Eu, ju) {
          if (Eu.HY)
            for (let su = 0; su < Eu.HY.length; su++) {
              const ju = Eu.HY[su];
              uu.createAnimationRange(ju.name, ju.from, ju.to)
            }
        }
        getHierarchyBoundingVectors() {
          let uu, Eu, ju = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            su = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.hV().incrementRenderId(), this.computeWorldMatrix(!0);
          const Zu = this;
          if (Zu.EW && Zu.iG) {
            const ju = Zu.EW();
            uu = ju.boundingBox.minimumWorld.clone(), Eu = ju.boundingBox.maximumWorld.clone()
          } else uu = new Uu.t(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), Eu = new Uu.t(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (ju) {
            const ju = this.getDescendants(!1);
            for (const Zu of ju) {
              const ju = Zu;
              if (ju.computeWorldMatrix(!0), su && !su(ju)) continue;
              if (!ju.EW || 0 === ju.getTotalVertices()) continue;
              const Xu = ju.EW().boundingBox,
                lu = Xu.minimumWorld,
                qu = Xu.maximumWorld;
              Uu.t.CheckExtends(lu, uu, Eu), Uu.t.CheckExtends(qu, uu, Eu)
            }
          }
          return {
            min: uu,
            max: Eu
          }
        }
      }, (() => {
        const Uu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Eu = [(0, Zu.E)()], ju = [(0, Zu.E)()], bu = [(0, Zu.E)()], cu = [(0, Zu.E)()], Nu = [(0, Zu.E)()], (0, su.e)(null, null, Eu, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: uu => "name" in uu,
            get: uu => uu.name,
            set: (uu, Eu) => {
              uu.name = Eu
            }
          },
          metadata: Uu
        }, Ou, Yu), (0, su.e)(null, null, ju, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: uu => "id" in uu,
            get: uu => uu.id,
            set: (uu, Eu) => {
              uu.id = Eu
            }
          },
          metadata: Uu
        }, hu, Du), (0, su.e)(null, null, bu, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: uu => "uniqueId" in uu,
            get: uu => uu.uniqueId,
            set: (uu, Eu) => {
              uu.uniqueId = Eu
            }
          },
          metadata: Uu
        }, gu, Mu), (0, su.e)(null, null, cu, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: uu => "state" in uu,
            get: uu => uu.state,
            set: (uu, Eu) => {
              uu.state = Eu
            }
          },
          metadata: Uu
        }, eu, Gu), (0, su.e)(null, null, Nu, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: uu => "metadata" in uu,
            get: uu => uu.metadata,
            set: (uu, Eu) => {
              uu.metadata = Eu
            }
          },
          metadata: Uu
        }, pu, wu), Uu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Uu
        })
      })(), uu._AnimationRangeFactory = (uu, Eu, ju) => {
        throw (0, qu.h)("AnimationRange")
      }, uu._NodeConstructors = {}, uu
    })()
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);