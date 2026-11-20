export const id = 249;
export const ids = [249];
export const modules = {
  39645: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => jU
    });
    var tU = gU(39377),
      pU = gU(39380),
      EU = gU(36600),
      PU = gU(36761),
      TU = gU(39610),
      qU = gU(39504),
      KU = gU(36639),
      cU = gU(39581),
      GU = gU(39395);
    let jU = (() => {
      var UU, RU;
      let gU, jU, uU, CU, hU, QU, eU, WU, fU, xU, mU, IU, JU, wU = TU.b,
        nU = [],
        bU = [],
        oU = [],
        ZU = [],
        aU = [],
        YU = [],
        BU = [],
        VU = [],
        rU = [],
        XU = [],
        vU = [],
        dU = [],
        HU = [],
        SU = [],
        sU = [],
        yU = [],
        kU = [],
        FU = [],
        iU = [],
        AU = [],
        zU = [];
      return UU = class extends wU {
        get range() {
          return this._range
        }
        set range(UU) {
          this._range = UU, this._inverseSquaredRange = 1 / (this.range * this.range)
        }
        get intensityMode() {
          return this._intensityMode
        }
        set intensityMode(UU) {
          this._intensityMode = UU, this._computePhotometricScale()
        }
        get radius() {
          return this._radius
        }
        set radius(UU) {
          this._radius = UU, this._computePhotometricScale()
        }
        get renderPriority() {
          return (0, tU.c)(this, RU, "f")
        }
        set renderPriority(UU) {
          (0, tU.e)(this, RU, UU, "f")
        }
        get shadowEnabled() {
          return this._shadowEnabled
        }
        set shadowEnabled(UU) {
          this._shadowEnabled !== UU && (this._shadowEnabled = UU, this._markMeshesAsLightDirty())
        }
        get includedOnlyMeshes() {
          return this._includedOnlyMeshes
        }
        set includedOnlyMeshes(UU) {
          this._includedOnlyMeshes = UU, this._hookArrayForIncludedOnly(UU)
        }
        get excludedMeshes() {
          return this._excludedMeshes
        }
        set excludedMeshes(UU) {
          this._excludedMeshes = UU, this._hookArrayForExcluded(UU)
        }
        get excludeWithLayerMask() {
          return this._excludeWithLayerMask
        }
        set excludeWithLayerMask(UU) {
          this._excludeWithLayerMask = UU, this._resyncMeshes()
        }
        get includeOnlyWithLayerMask() {
          return this._includeOnlyWithLayerMask
        }
        set includeOnlyWithLayerMask(UU) {
          this._includeOnlyWithLayerMask = UU, this._resyncMeshes()
        }
        get lightmapMode() {
          return this._lightmapMode
        }
        set lightmapMode(UU) {
          this._lightmapMode !== UU && (this._lightmapMode = UU, this._markMeshesAsLightDirty())
        }
        getViewMatrix(UU) {
          return null
        }
        getProjectionMatrix(UU, RU) {
          return null
        }
        constructor(gU, pU, EU) {
          super(gU, pU, !1), this.diffuse = ((0, tU.j)(this, nU), (0, tU.j)(this, bU, new PU.e(1, 1, 1))), this.specular = ((0, tU.j)(this, oU), (0, tU.j)(this, ZU, new PU.e(1, 1, 1))), this.falloffType = ((0, tU.j)(this, aU), (0, tU.j)(this, YU, UU.FALLOFF_DEFAULT)), this.intensity = ((0, tU.j)(this, BU), (0, tU.j)(this, VU, 1)), this._range = ((0, tU.j)(this, rU), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = UU.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, tU.j)(this, XU, void 0), RU.set(this, ((0, tU.j)(this, vU), (0, tU.j)(this, dU, 0))), this._shadowEnabled = ((0, tU.j)(this, HU), (0, tU.j)(this, SU, !0)), this._includedOnlyMeshes = (0, tU.j)(this, sU), this._excludeWithLayerMask = (0, tU.j)(this, yU, 0), this._includeOnlyWithLayerMask = ((0, tU.j)(this, kU), (0, tU.j)(this, FU, 0)), this._lightmapMode = ((0, tU.j)(this, iU), (0, tU.j)(this, AU, 0)), this._shadowGenerators = ((0, tU.j)(this, zU), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, EU || this.aZ().addLight(this), this._uniformBuffer = new qU.c(this.aZ().WC(), void 0, void 0, gU), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], EU || this._resyncMeshes()
        }
        transferTexturesToEffect(UU, RU) {
          return this
        }
        _bindLight(UU, RU, gU, tU) {
          let pU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const EU = UU.toString();
          let TU = !1;
          if (this._uniformBuffer.bindToEffect(gU, "Light" + EU), this._renderId !== RU.getRenderId() || this._lastUseSpecular !== tU || !this._uniformBuffer.useUbo) {
            this._renderId = RU.getRenderId(), this._lastUseSpecular = tU;
            const UU = this.getScaledIntensity();
            this.transferToEffect(gU, EU), this.diffuse.scaleToRef(UU, PU.m.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", PU.m.Color3[0], this.range, EU), tU && (this.specular.scaleToRef(UU, PU.m.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", PU.m.Color3[1], this.radius, EU)), TU = !0
          }
          if (this.transferTexturesToEffect(gU, EU), RU.shadowsEnabled && this.shadowEnabled && pU) {
            const UU = this.getShadowGenerator(RU.activeCamera) ?? this.getShadowGenerator();
            UU && (UU.bindShadowLight(EU, gU), TU = !0)
          }
          TU ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(UU) {
          let RU = "Name: " + this.name;
          if (RU += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let gU = 0; gU < this.animations.length; gU++) RU += ", animation[0]: " + this.animations[gU].toString(UU);
          return RU
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.lRU() || this._resyncMeshes()
        }
        GJ(UU) {
          super.GJ(UU), this._resyncMeshes()
        }
        getShadowGenerator() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(UU) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return EU.n.Zero()
        }
        canAffectMesh(UU) {
          return !UU || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(UU)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(UU)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & UU.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & UU.layerMask)))
        }
        dispose(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const UU = this._shadowGenerators.values();
            for (let RU = UU.next(); !0 !== RU.done; RU = UU.next()) {
              RU.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.aZ().stopAnimation(this), this._parentContainer) {
            const UU = this._parentContainer.lights.indexOf(this);
            UU > -1 && this._parentContainer.lights.splice(UU, 1), this._parentContainer = null
          }
          for (const gU of this.aZ().meshes) gU._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.aZ().removeLight(this), super.dispose(UU, RU)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(RU) {
          let gU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const tU = UU.GetConstructorFromName(this.getTypeID(), RU, this.aZ());
          if (!tU) return null;
          const pU = GU.b.Clone(tU, this);
          return RU && (pU.name = RU), gU && (pU.parent = gU), pU.GJ(this.isEnabled()), this.onClonedObservable.notifyObservers(pU), pU
        }
        serialize() {
          const UU = GU.b.Serialize(this);
          if (UU.uniqueId = this.uniqueId, UU.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(UU), this.excludedMeshes.length > 0) {
            UU.excludedMeshesIds = [];
            for (const RU of this.excludedMeshes) UU.excludedMeshesIds.push(RU.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            UU.includedOnlyMeshesIds = [];
            for (const RU of this.includedOnlyMeshes) UU.includedOnlyMeshesIds.push(RU.id)
          }
          return GU.b.AppendSerializedAnimations(this, UU), UU.hu = this.serializeAnimationRanges(), UU.isEnabled = this.isEnabled(), UU
        }
        static GetConstructorFromName(UU, RU, gU) {
          const tU = TU.b.Construct("Light_Type_" + UU, RU, gU);
          return tU || null
        }
        static Parse(RU, gU) {
          let tU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const pU = UU.GetConstructorFromName(RU.type, RU.name, gU);
          if (!pU) return null;
          const EU = GU.b.Parse(pU, RU, gU, tU);
          if (RU.excludedMeshesIds && (EU._excludedMeshesIds = RU.excludedMeshesIds), RU.includedOnlyMeshesIds && (EU._includedOnlyMeshesIds = RU.includedOnlyMeshesIds), void 0 !== RU.parentId && (EU._waitingParentId = RU.parentId), void 0 !== RU.parentInstanceIndex && (EU._waitingParentInstanceIndex = RU.parentInstanceIndex), void 0 !== RU.falloffType && (EU.falloffType = RU.falloffType), void 0 !== RU.lightmapMode && (EU.lightmapMode = RU.lightmapMode), RU.animations) {
            for (let UU = 0; UU < RU.animations.length; UU++) {
              const gU = RU.animations[UU],
                tU = (0, KU.e)("BABYLON.Animation");
              tU && EU.animations.push(tU.Parse(gU))
            }
            TU.b.ParseAnimationRanges(EU, RU, gU)
          }
          return RU.autoAnimate && gU.beginAnimation(EU, RU.autoAnimateFrom, RU.autoAnimateTo, RU.autoAnimateLoop, RU.autoAnimateSpeed || 1), void 0 !== RU.isEnabled && EU.GJ(RU.isEnabled), EU._onParsed(RU, gU, tU), EU
        }
        _onParsed(UU, RU) {}
        _hookArrayForExcluded(UU) {
          var RU = this;
          const gU = UU.push;
          UU.push = function() {
            for (var tU = arguments.length, pU = new Array(tU), EU = 0; EU < tU; EU++) pU[EU] = arguments[EU];
            const PU = gU.apply(UU, pU);
            if (RU._clusteredContainer) return PU;
            for (const UU of pU) UU._resyncLightSource(RU);
            return PU
          };
          const tU = UU.splice;
          UU.splice = (RU, gU) => {
            const pU = tU.call(UU, RU, gU ?? UU.length);
            if (this._clusteredContainer) return pU;
            for (const UU of pU) UU._resyncLightSource(this);
            return pU
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(UU) {
          var RU = this;
          const gU = UU.push;
          UU.push = function() {
            for (var tU = arguments.length, pU = new Array(tU), EU = 0; EU < tU; EU++) pU[EU] = arguments[EU];
            const PU = gU.apply(UU, pU);
            return RU._resyncMeshes(), PU
          };
          const tU = UU.splice;
          UU.splice = (RU, gU) => {
            const pU = tU.call(UU, RU, gU ?? UU.length);
            return this._resyncMeshes(), pU
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const UU of this.aZ().meshes) UU._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const UU of this.aZ().meshes) - 1 !== UU.lightSources.indexOf(this) && UU._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.aZ().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let RU = 0;
          const gU = this.getTypeID();
          let tU = this.intensityMode;
          switch (tU === UU.INTENSITYMODE_AUTOMATIC && (tU = gU === UU.LIGHTTYPEID_DIRECTIONALLIGHT ? UU.INTENSITYMODE_ILLUMINANCE : UU.INTENSITYMODE_LUMINOUSINTENSITY), gU) {
            case UU.LIGHTTYPEID_POINTLIGHT:
            case UU.LIGHTTYPEID_SPOTLIGHT:
              switch (tU) {
                case UU.INTENSITYMODE_LUMINOUSPOWER:
                  RU = 1 / (4 * Math.PI);
                  break;
                case UU.INTENSITYMODE_LUMINOUSINTENSITY:
                  RU = 1;
                  break;
                case UU.INTENSITYMODE_LUMINANCE:
                  RU = this.radius * this.radius
              }
              break;
            case UU.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (tU) {
                case UU.INTENSITYMODE_ILLUMINANCE:
                  RU = 1;
                  break;
                case UU.INTENSITYMODE_LUMINANCE: {
                  let UU = this.radius;
                  UU = Math.max(UU, .001);
                  RU = 2 * Math.PI * (1 - Math.cos(UU));
                  break
                }
              }
              break;
            case UU.LIGHTTYPEID_HEMISPHERICLIGHT:
            case UU.LIGHTTYPEID_RECT_AREALIGHT:
              RU = 1
          }
          return RU
        }
        _reorderLightsInScene() {
          const UU = this.aZ();
          0 != this._renderPriority && (UU.requireLightSorting = !0), this.aZ().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, RU = new WeakMap, (() => {
        const RU = "function" === typeof Symbol && Symbol.metadata ? Object.create(wU[Symbol.metadata] ?? null) : void 0;
        gU = [(0, pU.l)()], jU = [(0, pU.l)()], uU = [(0, pU.K)()], CU = [(0, pU.K)()], hU = [(0, pU.K)()], QU = [(0, pU.K)()], eU = [(0, pU.K)()], WU = [(0, pU.K)()], fU = [(0, pU.e)("_reorderLightsInScene")], xU = [(0, pU.K)("shadowEnabled")], mU = [(0, pU.K)("excludeWithLayerMask")], IU = [(0, pU.K)("includeOnlyWithLayerMask")], JU = [(0, pU.K)("lightmapMode")], (0, tU.i)(UU, null, hU, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: UU => "range" in UU,
            get: UU => UU.range
          },
          metadata: RU
        }, null, nU), (0, tU.i)(UU, null, QU, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: UU => "intensityMode" in UU,
            get: UU => UU.intensityMode
          },
          metadata: RU
        }, null, nU), (0, tU.i)(UU, null, eU, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: UU => "radius" in UU,
            get: UU => UU.radius
          },
          metadata: RU
        }, null, nU), (0, tU.i)(UU, null, fU, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: UU => "renderPriority" in UU,
            get: UU => UU.renderPriority,
            set: (UU, RU) => {
              UU.renderPriority = RU
            }
          },
          metadata: RU
        }, dU, HU), (0, tU.i)(null, null, gU, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: UU => "diffuse" in UU,
            get: UU => UU.diffuse,
            set: (UU, RU) => {
              UU.diffuse = RU
            }
          },
          metadata: RU
        }, bU, oU), (0, tU.i)(null, null, jU, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: UU => "specular" in UU,
            get: UU => UU.specular,
            set: (UU, RU) => {
              UU.specular = RU
            }
          },
          metadata: RU
        }, ZU, aU), (0, tU.i)(null, null, uU, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: UU => "falloffType" in UU,
            get: UU => UU.falloffType,
            set: (UU, RU) => {
              UU.falloffType = RU
            }
          },
          metadata: RU
        }, YU, BU), (0, tU.i)(null, null, CU, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: UU => "intensity" in UU,
            get: UU => UU.intensity,
            set: (UU, RU) => {
              UU.intensity = RU
            }
          },
          metadata: RU
        }, VU, rU), (0, tU.i)(null, null, WU, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: UU => "_renderPriority" in UU,
            get: UU => UU._renderPriority,
            set: (UU, RU) => {
              UU._renderPriority = RU
            }
          },
          metadata: RU
        }, XU, vU), (0, tU.i)(null, null, xU, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: UU => "_shadowEnabled" in UU,
            get: UU => UU._shadowEnabled,
            set: (UU, RU) => {
              UU._shadowEnabled = RU
            }
          },
          metadata: RU
        }, SU, sU), (0, tU.i)(null, null, mU, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: UU => "_excludeWithLayerMask" in UU,
            get: UU => UU._excludeWithLayerMask,
            set: (UU, RU) => {
              UU._excludeWithLayerMask = RU
            }
          },
          metadata: RU
        }, yU, kU), (0, tU.i)(null, null, IU, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: UU => "_includeOnlyWithLayerMask" in UU,
            get: UU => UU._includeOnlyWithLayerMask,
            set: (UU, RU) => {
              UU._includeOnlyWithLayerMask = RU
            }
          },
          metadata: RU
        }, FU, iU), (0, tU.i)(null, null, JU, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: UU => "_lightmapMode" in UU,
            get: UU => UU._lightmapMode,
            set: (UU, RU) => {
              UU._lightmapMode = RU
            }
          },
          metadata: RU
        }, AU, zU), RU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: RU
        })
      })(), UU.FALLOFF_DEFAULT = cU.c.FALLOFF_DEFAULT, UU.FALLOFF_PHYSICAL = cU.c.FALLOFF_PHYSICAL, UU.FALLOFF_GLTF = cU.c.FALLOFF_GLTF, UU.FALLOFF_STANDARD = cU.c.FALLOFF_STANDARD, UU.LIGHTMAP_DEFAULT = cU.c.LIGHTMAP_DEFAULT, UU.LIGHTMAP_SPECULAR = cU.c.LIGHTMAP_SPECULAR, UU.LIGHTMAP_SHADOWSONLY = cU.c.LIGHTMAP_SHADOWSONLY, UU.INTENSITYMODE_AUTOMATIC = cU.c.INTENSITYMODE_AUTOMATIC, UU.INTENSITYMODE_LUMINOUSPOWER = cU.c.INTENSITYMODE_LUMINOUSPOWER, UU.INTENSITYMODE_LUMINOUSINTENSITY = cU.c.INTENSITYMODE_LUMINOUSINTENSITY, UU.INTENSITYMODE_ILLUMINANCE = cU.c.INTENSITYMODE_ILLUMINANCE, UU.INTENSITYMODE_LUMINANCE = cU.c.INTENSITYMODE_LUMINANCE, UU.LIGHTTYPEID_POINTLIGHT = cU.c.LIGHTTYPEID_POINTLIGHT, UU.LIGHTTYPEID_DIRECTIONALLIGHT = cU.c.LIGHTTYPEID_DIRECTIONALLIGHT, UU.LIGHTTYPEID_SPOTLIGHT = cU.c.LIGHTTYPEID_SPOTLIGHT, UU.LIGHTTYPEID_HEMISPHERICLIGHT = cU.c.LIGHTTYPEID_HEMISPHERICLIGHT, UU.LIGHTTYPEID_RECT_AREALIGHT = cU.c.LIGHTTYPEID_RECT_AREALIGHT, UU
    })()
  },
  39610: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => GU
    });
    var tU = gU(39377),
      pU = gU(36600),
      EU = gU(39380),
      PU = gU(36624),
      TU = gU(36622),
      qU = gU(39256),
      KU = gU(39395);
    class cU {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new PU.b, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new PU.b, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let GU = (() => {
      var UU;
      let RU, gU, GU, jU, uU, CU = [],
        hU = [],
        QU = [],
        eU = [],
        WU = [],
        fU = [],
        xU = [],
        mU = [],
        IU = [],
        JU = [];
      return UU = class {
        static AddNodeConstructor(UU, RU) {
          this._NodeConstructors[UU] = RU
        }
        static Construct(UU, RU, gU, tU) {
          const pU = this._NodeConstructors[UU];
          return pU ? pU(RU, gU, tU) : null
        }
        set accessibilityTag(UU) {
          this._accessibilityTag = UU, this.onAccessibilityTagChangedObservable.notifyObservers(UU)
        }
        get accessibilityTag() {
          return this._accessibilityTag
        }
        get doNotSerialize() {
          return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
        }
        set doNotSerialize(UU) {
          this._nodeDataStorage._doNotSerialize = UU
        }
        lRU() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(UU) {
          if (this._parentNode === UU) return;
          const RU = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const RU = this._parentNode._children.indexOf(this); - 1 !== RU && this._parentNode._children.splice(RU, 1), UU || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = UU, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), RU || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
        }
        get parent() {
          return this._parentNode
        }
        get inheritVisibility() {
          return this._nodeDataStorage._inheritVisibility
        }
        set inheritVisibility(UU) {
          this._nodeDataStorage._inheritVisibility = UU
        }
        get isVisible() {
          return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
        }
        set isVisible(UU) {
          this._nodeDataStorage._isVisible = UU
        }
        _serializeAsParent(UU) {
          UU.parentId = this.uniqueId
        }
        _addToSceneRootNodes() {
          -1 === this._nodeDataStorage._sceneRootNodesIndex && (this._nodeDataStorage._sceneRootNodesIndex = this._scene.rootNodes.length, this._scene.rootNodes.push(this))
        }
        _removeFromSceneRootNodes() {
          if (-1 !== this._nodeDataStorage._sceneRootNodesIndex) {
            const UU = this._scene.rootNodes,
              RU = UU.length - 1;
            UU[this._nodeDataStorage._sceneRootNodesIndex] = UU[RU], UU[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
          }
        }
        get animationPropertiesOverride() {
          return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
        }
        set animationPropertiesOverride(UU) {
          this._animationPropertiesOverride = UU
        }
        getClassName() {
          return "Node"
        }
        set onDispose(UU) {
          this._onDisposeObserver && this.HZ.remove(this._onDisposeObserver), this._onDisposeObserver = this.HZ.add(UU)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var UU;
          return (UU = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (UU._onEffectiveEnabledStateChangedObservable = new PU.b)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            gU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new cU, this.name = (0, tU.j)(this, CU, void 0), this.id = ((0, tU.j)(this, hU), (0, tU.j)(this, QU, void 0)), this.uniqueId = ((0, tU.j)(this, eU), (0, tU.j)(this, WU, void 0)), this.state = ((0, tU.j)(this, fU), (0, tU.j)(this, xU, "")), this.metadata = ((0, tU.j)(this, mU), (0, tU.j)(this, IU, null)), this._internalMetadata = (0, tU.j)(this, JU), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new PU.b, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = pU.c.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.HZ = new PU.b, this._onDisposeObserver = null, this._behaviors = new Array, this.name = UU, this.id = UU, this._scene = RU || TU.c.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), gU && this._addToSceneRootNodes()
        }
        aZ() {
          return this._scene
        }
        WC() {
          return this._scene.WC()
        }
        addBehavior(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(UU) || (UU.init(), this._scene.isLoading && !RU ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(UU) && UU.attach(this)
          })) : UU.attach(this), this._behaviors.push(UU)), this
        }
        removeBehavior(UU) {
          const RU = this._behaviors.indexOf(UU);
          return -1 === RU || (this._behaviors.splice(RU, 1), UU.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(UU) {
          for (const RU of this._behaviors)
            if (RU.name === UU) return RU;
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
        updateCache(UU) {
          !UU && this.isSynchronized() || this._updateCache()
        }
        _getActionManagerForTrigger(UU) {
          return this.parent ? this.parent._getActionManagerForTrigger(UU, !1) : null
        }
        _updateCache(UU) {}
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
        cRU(UU) {
          return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this
        }
        isEnabled() {
          return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled
        }
        _hasEffectiveEnabledStateObservers() {
          const UU = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
          return !!UU && UU.hasObservers()
        }
        _syncParentEnabledState() {
          const UU = this._hasEffectiveEnabledStateObservers(),
            RU = UU ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const gU of this._children) gU._syncParentEnabledState();
          if (UU) {
            const UU = this.isEnabled();
            UU !== RU && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(UU)
          }
        }
        GJ(UU) {
          if (this._nodeDataStorage._isEnabled === UU) return;
          const RU = this._hasEffectiveEnabledStateObservers(),
            gU = RU ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = UU, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(UU), RU) {
            const UU = this.isEnabled();
            UU !== gU && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(UU)
          }
        }
        isDescendantOf(UU) {
          return !!this.parent && (this.parent === UU || this.parent.isDescendantOf(UU))
        }
        _getDescendants(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            gU = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let tU = 0; tU < this._children.length; tU++) {
              const pU = this._children[tU];
              gU && !gU(pU) || UU.push(pU), RU || pU._getDescendants(UU, !1, gU)
            }
        }
        getDescendants(UU, RU) {
          const gU = [];
          return this._getDescendants(gU, UU, RU), gU
        }
        getChildMeshes(UU, RU) {
          const gU = [];
          return this._getDescendants(gU, UU, (UU => (!RU || RU(UU)) && void 0 !== UU.cullingStrategy)), gU
        }
        getChildren(UU) {
          let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(RU, UU)
        }
        _setReady(UU) {
          UU !== this._nodeDataStorage._isReady && (UU ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(UU) {
          for (let RU = 0; RU < this.animations.length; RU++) {
            const gU = this.animations[RU];
            if (gU.name === UU) return gU
          }
          return null
        }
        createAnimationRange(RU, gU, tU) {
          if (!this._ranges[RU]) {
            this._ranges[RU] = UU._AnimationRangeFactory(RU, gU, tU);
            for (let UU = 0, pU = this.animations.length; UU < pU; UU++) this.animations[UU] && this.animations[UU].createRange(RU, gU, tU)
          }
        }
        deleteAnimationRange(UU) {
          let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let gU = 0, tU = this.animations.length; gU < tU; gU++) this.animations[gU] && this.animations[gU].deleteRange(UU, RU);
          this._ranges[UU] = null
        }
        getAnimationRange(UU) {
          return this._ranges[UU] || null
        }
        clone(RU, gU, tU) {
          const pU = KU.b.Clone((() => new UU(RU, this.aZ())), this);
          if (gU && (pU.parent = gU), !tU) {
            const UU = this.getDescendants(!0);
            for (let gU = 0; gU < UU.length; gU++) {
              const tU = UU[gU];
              tU.clone(RU + "." + tU.name, pU)
            }
          }
          return pU
        }
        getAnimationRanges() {
          const UU = [];
          let RU;
          for (RU in this._ranges) UU.push(this._ranges[RU]);
          return UU
        }
        beginAnimation(UU, RU, gU, tU) {
          const pU = this.getAnimationRange(UU);
          return pU ? this._scene.beginAnimation(this, pU.from, pU.to, RU, gU, tU) : null
        }
        serializeAnimationRanges() {
          const UU = [];
          for (const RU in this._ranges) {
            const gU = this._ranges[RU];
            if (!gU) continue;
            const tU = {};
            tU.name = RU, tU.from = gU.from, tU.to = gU.to, UU.push(tU)
          }
          return UU
        }
        computeWorldMatrix(UU) {
          return this._worldMatrix || (this._worldMatrix = pU.c.Identity()), this._worldMatrix
        }
        dispose(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !UU) {
            const gU = this.getDescendants(!0);
            for (const tU of gU) tU.dispose(UU, RU)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.HZ.notifyObservers(this), this.HZ.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const gU of this._behaviors) gU.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(UU, RU, gU) {
          if (RU.hu)
            for (let tU = 0; tU < RU.hu.length; tU++) {
              const gU = RU.hu[tU];
              UU.createAnimationRange(gU.name, gU.from, gU.to)
            }
        }
        getHierarchyBoundingVectors() {
          let UU, RU, gU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            tU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.aZ().incrementRenderId(), this.computeWorldMatrix(!0);
          const EU = this;
          if (EU.lY && EU.ZI) {
            const gU = EU.lY();
            UU = gU.boundingBox.minimumWorld.clone(), RU = gU.boundingBox.maximumWorld.clone()
          } else UU = new pU.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), RU = new pU.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (gU) {
            const gU = this.getDescendants(!1);
            for (const EU of gU) {
              const gU = EU;
              if (gU.computeWorldMatrix(!0), tU && !tU(gU)) continue;
              if (!gU.lY || 0 === gU.getTotalVertices()) continue;
              const PU = gU.lY().boundingBox,
                TU = PU.minimumWorld,
                qU = PU.maximumWorld;
              pU.n.CheckExtends(TU, UU, RU), pU.n.CheckExtends(qU, UU, RU)
            }
          }
          return {
            min: UU,
            max: RU
          }
        }
      }, (() => {
        const pU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        RU = [(0, EU.K)()], gU = [(0, EU.K)()], GU = [(0, EU.K)()], jU = [(0, EU.K)()], uU = [(0, EU.K)()], (0, tU.i)(null, null, RU, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: UU => "name" in UU,
            get: UU => UU.name,
            set: (UU, RU) => {
              UU.name = RU
            }
          },
          metadata: pU
        }, CU, hU), (0, tU.i)(null, null, gU, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: UU => "id" in UU,
            get: UU => UU.id,
            set: (UU, RU) => {
              UU.id = RU
            }
          },
          metadata: pU
        }, QU, eU), (0, tU.i)(null, null, GU, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: UU => "uniqueId" in UU,
            get: UU => UU.uniqueId,
            set: (UU, RU) => {
              UU.uniqueId = RU
            }
          },
          metadata: pU
        }, WU, fU), (0, tU.i)(null, null, jU, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: UU => "state" in UU,
            get: UU => UU.state,
            set: (UU, RU) => {
              UU.state = RU
            }
          },
          metadata: pU
        }, xU, mU), (0, tU.i)(null, null, uU, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: UU => "metadata" in UU,
            get: UU => UU.metadata,
            set: (UU, RU) => {
              UU.metadata = RU
            }
          },
          metadata: pU
        }, IU, JU), pU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: pU
        })
      })(), UU._AnimationRangeFactory = (UU, RU, gU) => {
        throw (0, qU.n)("AnimationRange")
      }, UU._NodeConstructors = {}, UU
    })()
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);