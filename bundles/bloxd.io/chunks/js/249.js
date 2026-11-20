export const id = 249;
export const ids = [249];
export const modules = {
  39823: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Bu
    });
    var Eu = yu(39560),
      Ku = yu(39566),
      Qu = yu(36830),
      mu = yu(36991),
      Ju = yu(39780),
      Nu = yu(39693),
      Xu = yu(36871),
      Vu = yu(39764),
      ru = yu(39582);
    let Bu = (() => {
      var uu, Ru;
      let yu, Bu, xu, Su, pu, Tu, Wu, ju, Hu, du, bu, Cu, ku, eu = Ju.e,
        Au = [],
        Du = [],
        Mu = [],
        Iu = [],
        Gu = [],
        Uu = [],
        nu = [],
        su = [],
        tu = [],
        lu = [],
        gu = [],
        cu = [],
        Lu = [],
        zu = [],
        Fu = [],
        wu = [],
        Zu = [],
        hu = [],
        Pu = [],
        iu = [],
        Yu = [];
      return uu = class extends eu {
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
          return (0, Eu.e)(this, Ru, "f")
        }
        set renderPriority(uu) {
          (0, Eu.f)(this, Ru, uu, "f")
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
        getProjectionMatrix(uu, Ru) {
          return null
        }
        constructor(yu, Ku, Qu) {
          super(yu, Ku, !1), this.diffuse = ((0, Eu.l)(this, Au), (0, Eu.l)(this, Du, new mu.d(1, 1, 1))), this.specular = ((0, Eu.l)(this, Mu), (0, Eu.l)(this, Iu, new mu.d(1, 1, 1))), this.falloffType = ((0, Eu.l)(this, Gu), (0, Eu.l)(this, Uu, uu.FALLOFF_DEFAULT)), this.intensity = ((0, Eu.l)(this, nu), (0, Eu.l)(this, su, 1)), this._range = ((0, Eu.l)(this, tu), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = uu.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, Eu.l)(this, lu, void 0), Ru.set(this, ((0, Eu.l)(this, gu), (0, Eu.l)(this, cu, 0))), this._shadowEnabled = ((0, Eu.l)(this, Lu), (0, Eu.l)(this, zu, !0)), this._includedOnlyMeshes = (0, Eu.l)(this, Fu), this._excludeWithLayerMask = (0, Eu.l)(this, wu, 0), this._includeOnlyWithLayerMask = ((0, Eu.l)(this, Zu), (0, Eu.l)(this, hu, 0)), this._lightmapMode = ((0, Eu.l)(this, Pu), (0, Eu.l)(this, iu, 0)), this._shadowGenerators = ((0, Eu.l)(this, Yu), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, Qu || this.lD().addLight(this), this._uniformBuffer = new Nu.c(this.lD().eS(), void 0, void 0, yu), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], Qu || this._resyncMeshes()
        }
        transferTexturesToEffect(uu, Ru) {
          return this
        }
        _bindLight(uu, Ru, yu, Eu) {
          let Ku = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const Qu = uu.toString();
          let Ju = !1;
          if (this._uniformBuffer.bindToEffect(yu, "Light" + Qu), this._renderId !== Ru.getRenderId() || this._lastUseSpecular !== Eu || !this._uniformBuffer.useUbo) {
            this._renderId = Ru.getRenderId(), this._lastUseSpecular = Eu;
            const uu = this.getScaledIntensity();
            this.transferToEffect(yu, Qu), this.diffuse.scaleToRef(uu, mu.m.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", mu.m.Color3[0], this.range, Qu), Eu && (this.specular.scaleToRef(uu, mu.m.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", mu.m.Color3[1], this.radius, Qu)), Ju = !0
          }
          if (this.transferTexturesToEffect(yu, Qu), Ru.shadowsEnabled && this.shadowEnabled && Ku) {
            const uu = this.getShadowGenerator(Ru.activeCamera) ?? this.getShadowGenerator();
            uu && (uu.bindShadowLight(Qu, yu), Ju = !0)
          }
          Ju ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(uu) {
          let Ru = "Name: " + this.name;
          if (Ru += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let yu = 0; yu < this.animations.length; yu++) Ru += ", animation[0]: " + this.animations[yu].toString(uu);
          return Ru
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.wyu() || this._resyncMeshes()
        }
        tC(uu) {
          super.tC(uu), this._resyncMeshes()
        }
        getShadowGenerator() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(uu) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return Qu.p.Zero()
        }
        canAffectMesh(uu) {
          return !uu || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(uu)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(uu)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & uu.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & uu.layerMask)))
        }
        dispose(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const uu = this._shadowGenerators.values();
            for (let Ru = uu.next(); !0 !== Ru.done; Ru = uu.next()) {
              Ru.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.lD().stopAnimation(this), this._parentContainer) {
            const uu = this._parentContainer.lights.indexOf(this);
            uu > -1 && this._parentContainer.lights.splice(uu, 1), this._parentContainer = null
          }
          for (const yu of this.lD().meshes) yu._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.lD().removeLight(this), super.dispose(uu, Ru)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(Ru) {
          let yu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Eu = uu.GetConstructorFromName(this.getTypeID(), Ru, this.lD());
          if (!Eu) return null;
          const Ku = ru.c.Clone(Eu, this);
          return Ru && (Ku.name = Ru), yu && (Ku.parent = yu), Ku.tC(this.isEnabled()), this.onClonedObservable.notifyObservers(Ku), Ku
        }
        serialize() {
          const uu = ru.c.Serialize(this);
          if (uu.uniqueId = this.uniqueId, uu.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(uu), this.excludedMeshes.length > 0) {
            uu.excludedMeshesIds = [];
            for (const Ru of this.excludedMeshes) uu.excludedMeshesIds.push(Ru.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            uu.includedOnlyMeshesIds = [];
            for (const Ru of this.includedOnlyMeshes) uu.includedOnlyMeshesIds.push(Ru.id)
          }
          return ru.c.AppendSerializedAnimations(this, uu), uu.yT = this.serializeAnimationRanges(), uu.isEnabled = this.isEnabled(), uu
        }
        static GetConstructorFromName(uu, Ru, yu) {
          const Eu = Ju.e.Construct("Light_Type_" + uu, Ru, yu);
          return Eu || null
        }
        static Parse(Ru, yu) {
          let Eu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Ku = uu.GetConstructorFromName(Ru.type, Ru.name, yu);
          if (!Ku) return null;
          const Qu = ru.c.Parse(Ku, Ru, yu, Eu);
          if (Ru.excludedMeshesIds && (Qu._excludedMeshesIds = Ru.excludedMeshesIds), Ru.includedOnlyMeshesIds && (Qu._includedOnlyMeshesIds = Ru.includedOnlyMeshesIds), void 0 !== Ru.parentId && (Qu._waitingParentId = Ru.parentId), void 0 !== Ru.parentInstanceIndex && (Qu._waitingParentInstanceIndex = Ru.parentInstanceIndex), void 0 !== Ru.falloffType && (Qu.falloffType = Ru.falloffType), void 0 !== Ru.lightmapMode && (Qu.lightmapMode = Ru.lightmapMode), Ru.animations) {
            for (let uu = 0; uu < Ru.animations.length; uu++) {
              const yu = Ru.animations[uu],
                Eu = (0, Xu.b)("BABYLON.Animation");
              Eu && Qu.animations.push(Eu.Parse(yu))
            }
            Ju.e.ParseAnimationRanges(Qu, Ru, yu)
          }
          return Ru.autoAnimate && yu.beginAnimation(Qu, Ru.autoAnimateFrom, Ru.autoAnimateTo, Ru.autoAnimateLoop, Ru.autoAnimateSpeed || 1), void 0 !== Ru.isEnabled && Qu.tC(Ru.isEnabled), Qu._onParsed(Ru, yu, Eu), Qu
        }
        _onParsed(uu, Ru) {}
        _hookArrayForExcluded(uu) {
          var Ru = this;
          const yu = uu.push;
          uu.push = function() {
            for (var Eu = arguments.length, Ku = new Array(Eu), Qu = 0; Qu < Eu; Qu++) Ku[Qu] = arguments[Qu];
            const mu = yu.apply(uu, Ku);
            if (Ru._clusteredContainer) return mu;
            for (const uu of Ku) uu._resyncLightSource(Ru);
            return mu
          };
          const Eu = uu.splice;
          uu.splice = (Ru, yu) => {
            const Ku = Eu.call(uu, Ru, yu ?? uu.length);
            if (this._clusteredContainer) return Ku;
            for (const uu of Ku) uu._resyncLightSource(this);
            return Ku
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(uu) {
          var Ru = this;
          const yu = uu.push;
          uu.push = function() {
            for (var Eu = arguments.length, Ku = new Array(Eu), Qu = 0; Qu < Eu; Qu++) Ku[Qu] = arguments[Qu];
            const mu = yu.apply(uu, Ku);
            return Ru._resyncMeshes(), mu
          };
          const Eu = uu.splice;
          uu.splice = (Ru, yu) => {
            const Ku = Eu.call(uu, Ru, yu ?? uu.length);
            return this._resyncMeshes(), Ku
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const uu of this.lD().meshes) uu._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const uu of this.lD().meshes) - 1 !== uu.lightSources.indexOf(this) && uu._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.lD().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let Ru = 0;
          const yu = this.getTypeID();
          let Eu = this.intensityMode;
          switch (Eu === uu.INTENSITYMODE_AUTOMATIC && (Eu = yu === uu.LIGHTTYPEID_DIRECTIONALLIGHT ? uu.INTENSITYMODE_ILLUMINANCE : uu.INTENSITYMODE_LUMINOUSINTENSITY), yu) {
            case uu.LIGHTTYPEID_POINTLIGHT:
            case uu.LIGHTTYPEID_SPOTLIGHT:
              switch (Eu) {
                case uu.INTENSITYMODE_LUMINOUSPOWER:
                  Ru = 1 / (4 * Math.PI);
                  break;
                case uu.INTENSITYMODE_LUMINOUSINTENSITY:
                  Ru = 1;
                  break;
                case uu.INTENSITYMODE_LUMINANCE:
                  Ru = this.radius * this.radius
              }
              break;
            case uu.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (Eu) {
                case uu.INTENSITYMODE_ILLUMINANCE:
                  Ru = 1;
                  break;
                case uu.INTENSITYMODE_LUMINANCE: {
                  let uu = this.radius;
                  uu = Math.max(uu, .001);
                  Ru = 2 * Math.PI * (1 - Math.cos(uu));
                  break
                }
              }
              break;
            case uu.LIGHTTYPEID_HEMISPHERICLIGHT:
            case uu.LIGHTTYPEID_RECT_AREALIGHT:
              Ru = 1
          }
          return Ru
        }
        _reorderLightsInScene() {
          const uu = this.lD();
          0 != this._renderPriority && (uu.requireLightSorting = !0), this.lD().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, Ru = new WeakMap, (() => {
        const Ru = "function" === typeof Symbol && Symbol.metadata ? Object.create(eu[Symbol.metadata] ?? null) : void 0;
        yu = [(0, Ku.n)()], Bu = [(0, Ku.n)()], xu = [(0, Ku.K)()], Su = [(0, Ku.K)()], pu = [(0, Ku.K)()], Tu = [(0, Ku.K)()], Wu = [(0, Ku.K)()], ju = [(0, Ku.K)()], Hu = [(0, Ku.f)("_reorderLightsInScene")], du = [(0, Ku.K)("shadowEnabled")], bu = [(0, Ku.K)("excludeWithLayerMask")], Cu = [(0, Ku.K)("includeOnlyWithLayerMask")], ku = [(0, Ku.K)("lightmapMode")], (0, Eu.h)(uu, null, pu, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: uu => "range" in uu,
            get: uu => uu.range
          },
          metadata: Ru
        }, null, Au), (0, Eu.h)(uu, null, Tu, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: uu => "intensityMode" in uu,
            get: uu => uu.intensityMode
          },
          metadata: Ru
        }, null, Au), (0, Eu.h)(uu, null, Wu, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: uu => "radius" in uu,
            get: uu => uu.radius
          },
          metadata: Ru
        }, null, Au), (0, Eu.h)(uu, null, Hu, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: uu => "renderPriority" in uu,
            get: uu => uu.renderPriority,
            set: (uu, Ru) => {
              uu.renderPriority = Ru
            }
          },
          metadata: Ru
        }, cu, Lu), (0, Eu.h)(null, null, yu, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: uu => "diffuse" in uu,
            get: uu => uu.diffuse,
            set: (uu, Ru) => {
              uu.diffuse = Ru
            }
          },
          metadata: Ru
        }, Du, Mu), (0, Eu.h)(null, null, Bu, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: uu => "specular" in uu,
            get: uu => uu.specular,
            set: (uu, Ru) => {
              uu.specular = Ru
            }
          },
          metadata: Ru
        }, Iu, Gu), (0, Eu.h)(null, null, xu, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: uu => "falloffType" in uu,
            get: uu => uu.falloffType,
            set: (uu, Ru) => {
              uu.falloffType = Ru
            }
          },
          metadata: Ru
        }, Uu, nu), (0, Eu.h)(null, null, Su, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: uu => "intensity" in uu,
            get: uu => uu.intensity,
            set: (uu, Ru) => {
              uu.intensity = Ru
            }
          },
          metadata: Ru
        }, su, tu), (0, Eu.h)(null, null, ju, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: uu => "_renderPriority" in uu,
            get: uu => uu._renderPriority,
            set: (uu, Ru) => {
              uu._renderPriority = Ru
            }
          },
          metadata: Ru
        }, lu, gu), (0, Eu.h)(null, null, du, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: uu => "_shadowEnabled" in uu,
            get: uu => uu._shadowEnabled,
            set: (uu, Ru) => {
              uu._shadowEnabled = Ru
            }
          },
          metadata: Ru
        }, zu, Fu), (0, Eu.h)(null, null, bu, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: uu => "_excludeWithLayerMask" in uu,
            get: uu => uu._excludeWithLayerMask,
            set: (uu, Ru) => {
              uu._excludeWithLayerMask = Ru
            }
          },
          metadata: Ru
        }, wu, Zu), (0, Eu.h)(null, null, Cu, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: uu => "_includeOnlyWithLayerMask" in uu,
            get: uu => uu._includeOnlyWithLayerMask,
            set: (uu, Ru) => {
              uu._includeOnlyWithLayerMask = Ru
            }
          },
          metadata: Ru
        }, hu, Pu), (0, Eu.h)(null, null, ku, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: uu => "_lightmapMode" in uu,
            get: uu => uu._lightmapMode,
            set: (uu, Ru) => {
              uu._lightmapMode = Ru
            }
          },
          metadata: Ru
        }, iu, Yu), Ru && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ru
        })
      })(), uu.FALLOFF_DEFAULT = Vu.b.FALLOFF_DEFAULT, uu.FALLOFF_PHYSICAL = Vu.b.FALLOFF_PHYSICAL, uu.FALLOFF_GLTF = Vu.b.FALLOFF_GLTF, uu.FALLOFF_STANDARD = Vu.b.FALLOFF_STANDARD, uu.LIGHTMAP_DEFAULT = Vu.b.LIGHTMAP_DEFAULT, uu.LIGHTMAP_SPECULAR = Vu.b.LIGHTMAP_SPECULAR, uu.LIGHTMAP_SHADOWSONLY = Vu.b.LIGHTMAP_SHADOWSONLY, uu.INTENSITYMODE_AUTOMATIC = Vu.b.INTENSITYMODE_AUTOMATIC, uu.INTENSITYMODE_LUMINOUSPOWER = Vu.b.INTENSITYMODE_LUMINOUSPOWER, uu.INTENSITYMODE_LUMINOUSINTENSITY = Vu.b.INTENSITYMODE_LUMINOUSINTENSITY, uu.INTENSITYMODE_ILLUMINANCE = Vu.b.INTENSITYMODE_ILLUMINANCE, uu.INTENSITYMODE_LUMINANCE = Vu.b.INTENSITYMODE_LUMINANCE, uu.LIGHTTYPEID_POINTLIGHT = Vu.b.LIGHTTYPEID_POINTLIGHT, uu.LIGHTTYPEID_DIRECTIONALLIGHT = Vu.b.LIGHTTYPEID_DIRECTIONALLIGHT, uu.LIGHTTYPEID_SPOTLIGHT = Vu.b.LIGHTTYPEID_SPOTLIGHT, uu.LIGHTTYPEID_HEMISPHERICLIGHT = Vu.b.LIGHTTYPEID_HEMISPHERICLIGHT, uu.LIGHTTYPEID_RECT_AREALIGHT = Vu.b.LIGHTTYPEID_RECT_AREALIGHT, uu
    })()
  },
  39780: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => ru
    });
    var Eu = yu(39560),
      Ku = yu(36830),
      Qu = yu(39566),
      mu = yu(36858),
      Ju = yu(36851),
      Nu = yu(39430),
      Xu = yu(39582);
    class Vu {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new mu.b, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new mu.b, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let ru = (() => {
      var uu;
      let Ru, yu, ru, Bu, xu, Su = [],
        pu = [],
        Tu = [],
        Wu = [],
        ju = [],
        Hu = [],
        du = [],
        bu = [],
        Cu = [],
        ku = [];
      return uu = class {
        static AddNodeConstructor(uu, Ru) {
          this._NodeConstructors[uu] = Ru
        }
        static Construct(uu, Ru, yu, Eu) {
          const Ku = this._NodeConstructors[uu];
          return Ku ? Ku(Ru, yu, Eu) : null
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
        wyu() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(uu) {
          if (this._parentNode === uu) return;
          const Ru = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const Ru = this._parentNode._children.indexOf(this); - 1 !== Ru && this._parentNode._children.splice(Ru, 1), uu || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = uu, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), Ru || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
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
              Ru = uu.length - 1;
            uu[this._nodeDataStorage._sceneRootNodesIndex] = uu[Ru], uu[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
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
          this._onDisposeObserver && this.zD.remove(this._onDisposeObserver), this._onDisposeObserver = this.zD.add(uu)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var uu;
          return (uu = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (uu._onEffectiveEnabledStateChangedObservable = new mu.b)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            yu = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new Vu, this.name = (0, Eu.l)(this, Su, void 0), this.id = ((0, Eu.l)(this, pu), (0, Eu.l)(this, Tu, void 0)), this.uniqueId = ((0, Eu.l)(this, Wu), (0, Eu.l)(this, ju, void 0)), this.state = ((0, Eu.l)(this, Hu), (0, Eu.l)(this, du, "")), this.metadata = ((0, Eu.l)(this, bu), (0, Eu.l)(this, Cu, null)), this._internalMetadata = (0, Eu.l)(this, ku), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new mu.b, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = Ku.d.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.zD = new mu.b, this._onDisposeObserver = null, this._behaviors = new Array, this.name = uu, this.id = uu, this._scene = Ru || Ju.b.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), yu && this._addToSceneRootNodes()
        }
        lD() {
          return this._scene
        }
        eS() {
          return this._scene.eS()
        }
        addBehavior(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(uu) || (uu.init(), this._scene.isLoading && !Ru ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(uu) && uu.attach(this)
          })) : uu.attach(this), this._behaviors.push(uu)), this
        }
        removeBehavior(uu) {
          const Ru = this._behaviors.indexOf(uu);
          return -1 === Ru || (this._behaviors.splice(Ru, 1), uu.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(uu) {
          for (const Ru of this._behaviors)
            if (Ru.name === uu) return Ru;
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
        Eyu(uu) {
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
            Ru = uu ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const yu of this._children) yu._syncParentEnabledState();
          if (uu) {
            const uu = this.isEnabled();
            uu !== Ru && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(uu)
          }
        }
        tC(uu) {
          if (this._nodeDataStorage._isEnabled === uu) return;
          const Ru = this._hasEffectiveEnabledStateObservers(),
            yu = Ru ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = uu, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(uu), Ru) {
            const uu = this.isEnabled();
            uu !== yu && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(uu)
          }
        }
        isDescendantOf(uu) {
          return !!this.parent && (this.parent === uu || this.parent.isDescendantOf(uu))
        }
        _getDescendants(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            yu = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let Eu = 0; Eu < this._children.length; Eu++) {
              const Ku = this._children[Eu];
              yu && !yu(Ku) || uu.push(Ku), Ru || Ku._getDescendants(uu, !1, yu)
            }
        }
        getDescendants(uu, Ru) {
          const yu = [];
          return this._getDescendants(yu, uu, Ru), yu
        }
        getChildMeshes(uu, Ru) {
          const yu = [];
          return this._getDescendants(yu, uu, (uu => (!Ru || Ru(uu)) && void 0 !== uu.cullingStrategy)), yu
        }
        getChildren(uu) {
          let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(Ru, uu)
        }
        _setReady(uu) {
          uu !== this._nodeDataStorage._isReady && (uu ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(uu) {
          for (let Ru = 0; Ru < this.animations.length; Ru++) {
            const yu = this.animations[Ru];
            if (yu.name === uu) return yu
          }
          return null
        }
        createAnimationRange(Ru, yu, Eu) {
          if (!this._ranges[Ru]) {
            this._ranges[Ru] = uu._AnimationRangeFactory(Ru, yu, Eu);
            for (let uu = 0, Ku = this.animations.length; uu < Ku; uu++) this.animations[uu] && this.animations[uu].createRange(Ru, yu, Eu)
          }
        }
        deleteAnimationRange(uu) {
          let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let yu = 0, Eu = this.animations.length; yu < Eu; yu++) this.animations[yu] && this.animations[yu].deleteRange(uu, Ru);
          this._ranges[uu] = null
        }
        getAnimationRange(uu) {
          return this._ranges[uu] || null
        }
        clone(Ru, yu, Eu) {
          const Ku = Xu.c.Clone((() => new uu(Ru, this.lD())), this);
          if (yu && (Ku.parent = yu), !Eu) {
            const uu = this.getDescendants(!0);
            for (let yu = 0; yu < uu.length; yu++) {
              const Eu = uu[yu];
              Eu.clone(Ru + "." + Eu.name, Ku)
            }
          }
          return Ku
        }
        getAnimationRanges() {
          const uu = [];
          let Ru;
          for (Ru in this._ranges) uu.push(this._ranges[Ru]);
          return uu
        }
        beginAnimation(uu, Ru, yu, Eu) {
          const Ku = this.getAnimationRange(uu);
          return Ku ? this._scene.beginAnimation(this, Ku.from, Ku.to, Ru, yu, Eu) : null
        }
        serializeAnimationRanges() {
          const uu = [];
          for (const Ru in this._ranges) {
            const yu = this._ranges[Ru];
            if (!yu) continue;
            const Eu = {};
            Eu.name = Ru, Eu.from = yu.from, Eu.to = yu.to, uu.push(Eu)
          }
          return uu
        }
        computeWorldMatrix(uu) {
          return this._worldMatrix || (this._worldMatrix = Ku.d.Identity()), this._worldMatrix
        }
        dispose(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !uu) {
            const yu = this.getDescendants(!0);
            for (const Eu of yu) Eu.dispose(uu, Ru)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.zD.notifyObservers(this), this.zD.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const yu of this._behaviors) yu.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(uu, Ru, yu) {
          if (Ru.yT)
            for (let Eu = 0; Eu < Ru.yT.length; Eu++) {
              const yu = Ru.yT[Eu];
              uu.createAnimationRange(yu.name, yu.from, yu.to)
            }
        }
        getHierarchyBoundingVectors() {
          let uu, Ru, yu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.lD().incrementRenderId(), this.computeWorldMatrix(!0);
          const Qu = this;
          if (Qu.vI && Qu.mC) {
            const yu = Qu.vI();
            uu = yu.boundingBox.minimumWorld.clone(), Ru = yu.boundingBox.maximumWorld.clone()
          } else uu = new Ku.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), Ru = new Ku.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (yu) {
            const yu = this.getDescendants(!1);
            for (const Qu of yu) {
              const yu = Qu;
              if (yu.computeWorldMatrix(!0), Eu && !Eu(yu)) continue;
              if (!yu.vI || 0 === yu.getTotalVertices()) continue;
              const mu = yu.vI().boundingBox,
                Ju = mu.minimumWorld,
                Nu = mu.maximumWorld;
              Ku.p.CheckExtends(Ju, uu, Ru), Ku.p.CheckExtends(Nu, uu, Ru)
            }
          }
          return {
            min: uu,
            max: Ru
          }
        }
      }, (() => {
        const Ku = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Ru = [(0, Qu.K)()], yu = [(0, Qu.K)()], ru = [(0, Qu.K)()], Bu = [(0, Qu.K)()], xu = [(0, Qu.K)()], (0, Eu.h)(null, null, Ru, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: uu => "name" in uu,
            get: uu => uu.name,
            set: (uu, Ru) => {
              uu.name = Ru
            }
          },
          metadata: Ku
        }, Su, pu), (0, Eu.h)(null, null, yu, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: uu => "id" in uu,
            get: uu => uu.id,
            set: (uu, Ru) => {
              uu.id = Ru
            }
          },
          metadata: Ku
        }, Tu, Wu), (0, Eu.h)(null, null, ru, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: uu => "uniqueId" in uu,
            get: uu => uu.uniqueId,
            set: (uu, Ru) => {
              uu.uniqueId = Ru
            }
          },
          metadata: Ku
        }, ju, Hu), (0, Eu.h)(null, null, Bu, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: uu => "state" in uu,
            get: uu => uu.state,
            set: (uu, Ru) => {
              uu.state = Ru
            }
          },
          metadata: Ku
        }, du, bu), (0, Eu.h)(null, null, xu, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: uu => "metadata" in uu,
            get: uu => uu.metadata,
            set: (uu, Ru) => {
              uu.metadata = Ru
            }
          },
          metadata: Ku
        }, Cu, ku), Ku && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ku
        })
      })(), uu._AnimationRangeFactory = (uu, Ru, yu) => {
        throw (0, Nu.k)("AnimationRange")
      }, uu._NodeConstructors = {}, uu
    })()
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);