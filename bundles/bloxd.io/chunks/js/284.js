export const id = 284;
export const ids = [284];
export const modules = {
  41366: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => mM
    });
    var OM = iM(41099),
      SM = iM(41105),
      jM = iM(38040),
      aM = iM(38173),
      PM = iM(41328),
      nM = iM(41240),
      QM = iM(38085),
      zM = iM(41309),
      LM = iM(41121);
    let mM = (() => {
      var MM, rM;
      let iM, mM, HM, hM, JM, dM, yM, lM, EM, UM, GM, CM, eM, bM = PM.d,
        wM = [],
        tM = [],
        gM = [],
        uM = [],
        RM = [],
        pM = [],
        WM = [],
        sM = [],
        DM = [],
        kM = [],
        ZM = [],
        oM = [],
        fM = [],
        YM = [],
        NM = [],
        AM = [],
        xM = [],
        vM = [],
        FM = [],
        BM = [],
        XM = [];
      return MM = class extends bM {
        get range() {
          return this._range
        }
        set range(MM) {
          this._range = MM, this._inverseSquaredRange = 1 / (this.range * this.range)
        }
        get intensityMode() {
          return this._intensityMode
        }
        set intensityMode(MM) {
          this._intensityMode = MM, this._computePhotometricScale()
        }
        get radius() {
          return this._radius
        }
        set radius(MM) {
          this._radius = MM, this._computePhotometricScale()
        }
        get renderPriority() {
          return (0, OM.c)(this, rM, "f")
        }
        set renderPriority(MM) {
          (0, OM.f)(this, rM, MM, "f")
        }
        get shadowEnabled() {
          return this._shadowEnabled
        }
        set shadowEnabled(MM) {
          this._shadowEnabled !== MM && (this._shadowEnabled = MM, this._markMeshesAsLightDirty())
        }
        get includedOnlyMeshes() {
          return this._includedOnlyMeshes
        }
        set includedOnlyMeshes(MM) {
          this._includedOnlyMeshes = MM, this._hookArrayForIncludedOnly(MM)
        }
        get excludedMeshes() {
          return this._excludedMeshes
        }
        set excludedMeshes(MM) {
          this._excludedMeshes = MM, this._hookArrayForExcluded(MM)
        }
        get excludeWithLayerMask() {
          return this._excludeWithLayerMask
        }
        set excludeWithLayerMask(MM) {
          this._excludeWithLayerMask = MM, this._resyncMeshes()
        }
        get includeOnlyWithLayerMask() {
          return this._includeOnlyWithLayerMask
        }
        set includeOnlyWithLayerMask(MM) {
          this._includeOnlyWithLayerMask = MM, this._resyncMeshes()
        }
        get lightmapMode() {
          return this._lightmapMode
        }
        set lightmapMode(MM) {
          this._lightmapMode !== MM && (this._lightmapMode = MM, this._markMeshesAsLightDirty())
        }
        getViewMatrix(MM) {
          return null
        }
        getProjectionMatrix(MM, rM) {
          return null
        }
        constructor(iM, SM, jM) {
          super(iM, SM, !1), this.diffuse = ((0, OM.m)(this, wM), (0, OM.m)(this, tM, new aM.d(1, 1, 1))), this.specular = ((0, OM.m)(this, gM), (0, OM.m)(this, uM, new aM.d(1, 1, 1))), this.falloffType = ((0, OM.m)(this, RM), (0, OM.m)(this, pM, MM.FALLOFF_DEFAULT)), this.intensity = ((0, OM.m)(this, WM), (0, OM.m)(this, sM, 1)), this._range = ((0, OM.m)(this, DM), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = MM.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, OM.m)(this, kM, void 0), rM.set(this, ((0, OM.m)(this, ZM), (0, OM.m)(this, oM, 0))), this._shadowEnabled = ((0, OM.m)(this, fM), (0, OM.m)(this, YM, !0)), this._includedOnlyMeshes = (0, OM.m)(this, NM), this._excludeWithLayerMask = (0, OM.m)(this, AM, 0), this._includeOnlyWithLayerMask = ((0, OM.m)(this, xM), (0, OM.m)(this, vM, 0)), this._lightmapMode = ((0, OM.m)(this, FM), (0, OM.m)(this, BM, 0)), this._shadowGenerators = ((0, OM.m)(this, XM), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, jM || this.Hk().addLight(this), this._uniformBuffer = new nM.b(this.Hk().ph(), void 0, void 0, iM), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], jM || this._resyncMeshes()
        }
        transferTexturesToEffect(MM, rM) {
          return this
        }
        _bindLight(MM, rM, iM, OM) {
          let SM = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const jM = MM.toString();
          let PM = !1;
          if (this._uniformBuffer.bindToEffect(iM, "Light" + jM), this._renderId !== rM.getRenderId() || this._lastUseSpecular !== OM || !this._uniformBuffer.useUbo) {
            this._renderId = rM.getRenderId(), this._lastUseSpecular = OM;
            const MM = this.getScaledIntensity();
            this.transferToEffect(iM, jM), this.diffuse.scaleToRef(MM, aM.j.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", aM.j.Color3[0], this.range, jM), OM && (this.specular.scaleToRef(MM, aM.j.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", aM.j.Color3[1], this.radius, jM)), PM = !0
          }
          if (this.transferTexturesToEffect(iM, jM), rM.shadowsEnabled && this.shadowEnabled && SM) {
            const MM = this.getShadowGenerator(rM.activeCamera) ?? this.getShadowGenerator();
            MM && (MM.bindShadowLight(jM, iM), PM = !0)
          }
          PM ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(MM) {
          let rM = "Name: " + this.name;
          if (rM += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let iM = 0; iM < this.animations.length; iM++) rM += ", animation[0]: " + this.animations[iM].toString(MM);
          return rM
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.xG() || this._resyncMeshes()
        }
        kR(MM) {
          super.kR(MM), this._resyncMeshes()
        }
        getShadowGenerator() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(MM) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return jM.q.Zero()
        }
        canAffectMesh(MM) {
          return !MM || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(MM)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(MM)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & MM.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & MM.layerMask)))
        }
        dispose(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const MM = this._shadowGenerators.values();
            for (let rM = MM.next(); !0 !== rM.done; rM = MM.next()) {
              rM.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.Hk().stopAnimation(this), this._parentContainer) {
            const MM = this._parentContainer.lights.indexOf(this);
            MM > -1 && this._parentContainer.lights.splice(MM, 1), this._parentContainer = null
          }
          for (const iM of this.Hk().meshes) iM._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.Hk().removeLight(this), super.dispose(MM, rM)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(rM) {
          let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const OM = MM.GetConstructorFromName(this.getTypeID(), rM, this.Hk());
          if (!OM) return null;
          const SM = LM.b.Clone(OM, this);
          return rM && (SM.name = rM), iM && (SM.parent = iM), SM.kR(this.isEnabled()), this.onClonedObservable.notifyObservers(SM), SM
        }
        serialize() {
          const MM = LM.b.Serialize(this);
          if (MM.uniqueId = this.uniqueId, MM.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(MM), this.excludedMeshes.length > 0) {
            MM.excludedMeshesIds = [];
            for (const rM of this.excludedMeshes) MM.excludedMeshesIds.push(rM.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            MM.includedOnlyMeshesIds = [];
            for (const rM of this.includedOnlyMeshes) MM.includedOnlyMeshesIds.push(rM.id)
          }
          return LM.b.AppendSerializedAnimations(this, MM), MM.Ld = this.serializeAnimationRanges(), MM.isEnabled = this.isEnabled(), MM
        }
        static GetConstructorFromName(MM, rM, iM) {
          const OM = PM.d.Construct("Light_Type_" + MM, rM, iM);
          return OM || null
        }
        static Parse(rM, iM) {
          let OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const SM = MM.GetConstructorFromName(rM.type, rM.name, iM);
          if (!SM) return null;
          const jM = LM.b.Parse(SM, rM, iM, OM);
          if (rM.excludedMeshesIds && (jM._excludedMeshesIds = rM.excludedMeshesIds), rM.includedOnlyMeshesIds && (jM._includedOnlyMeshesIds = rM.includedOnlyMeshesIds), void 0 !== rM.parentId && (jM._waitingParentId = rM.parentId), void 0 !== rM.parentInstanceIndex && (jM._waitingParentInstanceIndex = rM.parentInstanceIndex), void 0 !== rM.falloffType && (jM.falloffType = rM.falloffType), void 0 !== rM.lightmapMode && (jM.lightmapMode = rM.lightmapMode), rM.animations) {
            for (let MM = 0; MM < rM.animations.length; MM++) {
              const iM = rM.animations[MM],
                OM = (0, QM.b)("BABYLON.Animation");
              OM && jM.animations.push(OM.Parse(iM))
            }
            PM.d.ParseAnimationRanges(jM, rM, iM)
          }
          return rM.autoAnimate && iM.beginAnimation(jM, rM.autoAnimateFrom, rM.autoAnimateTo, rM.autoAnimateLoop, rM.autoAnimateSpeed || 1), void 0 !== rM.isEnabled && jM.kR(rM.isEnabled), jM._onParsed(rM, iM, OM), jM
        }
        _onParsed(MM, rM) {}
        _hookArrayForExcluded(MM) {
          var rM = this;
          const iM = MM.push;
          MM.push = function() {
            for (var OM = arguments.length, SM = new Array(OM), jM = 0; jM < OM; jM++) SM[jM] = arguments[jM];
            const aM = iM.apply(MM, SM);
            if (rM._clusteredContainer) return aM;
            for (const MM of SM) MM._resyncLightSource(rM);
            return aM
          };
          const OM = MM.splice;
          MM.splice = (rM, iM) => {
            const SM = OM.call(MM, rM, iM ?? MM.length);
            if (this._clusteredContainer) return SM;
            for (const MM of SM) MM._resyncLightSource(this);
            return SM
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(MM) {
          var rM = this;
          const iM = MM.push;
          MM.push = function() {
            for (var OM = arguments.length, SM = new Array(OM), jM = 0; jM < OM; jM++) SM[jM] = arguments[jM];
            const aM = iM.apply(MM, SM);
            return rM._resyncMeshes(), aM
          };
          const OM = MM.splice;
          MM.splice = (rM, iM) => {
            const SM = OM.call(MM, rM, iM ?? MM.length);
            return this._resyncMeshes(), SM
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const MM of this.Hk().meshes) MM._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const MM of this.Hk().meshes) - 1 !== MM.lightSources.indexOf(this) && MM._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.Hk().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let rM = 0;
          const iM = this.getTypeID();
          let OM = this.intensityMode;
          switch (OM === MM.INTENSITYMODE_AUTOMATIC && (OM = iM === MM.LIGHTTYPEID_DIRECTIONALLIGHT ? MM.INTENSITYMODE_ILLUMINANCE : MM.INTENSITYMODE_LUMINOUSINTENSITY), iM) {
            case MM.LIGHTTYPEID_POINTLIGHT:
            case MM.LIGHTTYPEID_SPOTLIGHT:
              switch (OM) {
                case MM.INTENSITYMODE_LUMINOUSPOWER:
                  rM = 1 / (4 * Math.PI);
                  break;
                case MM.INTENSITYMODE_LUMINOUSINTENSITY:
                  rM = 1;
                  break;
                case MM.INTENSITYMODE_LUMINANCE:
                  rM = this.radius * this.radius
              }
              break;
            case MM.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (OM) {
                case MM.INTENSITYMODE_ILLUMINANCE:
                  rM = 1;
                  break;
                case MM.INTENSITYMODE_LUMINANCE: {
                  let MM = this.radius;
                  MM = Math.max(MM, .001);
                  rM = 2 * Math.PI * (1 - Math.cos(MM));
                  break
                }
              }
              break;
            case MM.LIGHTTYPEID_HEMISPHERICLIGHT:
            case MM.LIGHTTYPEID_RECT_AREALIGHT:
              rM = 1
          }
          return rM
        }
        _reorderLightsInScene() {
          const MM = this.Hk();
          0 != this._renderPriority && (MM.requireLightSorting = !0), this.Hk().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, rM = new WeakMap, (() => {
        const rM = "function" === typeof Symbol && Symbol.metadata ? Object.create(bM[Symbol.metadata] ?? null) : void 0;
        iM = [(0, SM.r)()], mM = [(0, SM.r)()], HM = [(0, SM.L)()], hM = [(0, SM.L)()], JM = [(0, SM.L)()], dM = [(0, SM.L)()], yM = [(0, SM.L)()], lM = [(0, SM.L)()], EM = [(0, SM.g)("_reorderLightsInScene")], UM = [(0, SM.L)("shadowEnabled")], GM = [(0, SM.L)("excludeWithLayerMask")], CM = [(0, SM.L)("includeOnlyWithLayerMask")], eM = [(0, SM.L)("lightmapMode")], (0, OM.i)(MM, null, JM, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: MM => "range" in MM,
            get: MM => MM.range
          },
          metadata: rM
        }, null, wM), (0, OM.i)(MM, null, dM, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: MM => "intensityMode" in MM,
            get: MM => MM.intensityMode
          },
          metadata: rM
        }, null, wM), (0, OM.i)(MM, null, yM, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: MM => "radius" in MM,
            get: MM => MM.radius
          },
          metadata: rM
        }, null, wM), (0, OM.i)(MM, null, EM, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: MM => "renderPriority" in MM,
            get: MM => MM.renderPriority,
            set: (MM, rM) => {
              MM.renderPriority = rM
            }
          },
          metadata: rM
        }, oM, fM), (0, OM.i)(null, null, iM, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: MM => "diffuse" in MM,
            get: MM => MM.diffuse,
            set: (MM, rM) => {
              MM.diffuse = rM
            }
          },
          metadata: rM
        }, tM, gM), (0, OM.i)(null, null, mM, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: MM => "specular" in MM,
            get: MM => MM.specular,
            set: (MM, rM) => {
              MM.specular = rM
            }
          },
          metadata: rM
        }, uM, RM), (0, OM.i)(null, null, HM, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: MM => "falloffType" in MM,
            get: MM => MM.falloffType,
            set: (MM, rM) => {
              MM.falloffType = rM
            }
          },
          metadata: rM
        }, pM, WM), (0, OM.i)(null, null, hM, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: MM => "intensity" in MM,
            get: MM => MM.intensity,
            set: (MM, rM) => {
              MM.intensity = rM
            }
          },
          metadata: rM
        }, sM, DM), (0, OM.i)(null, null, lM, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: MM => "_renderPriority" in MM,
            get: MM => MM._renderPriority,
            set: (MM, rM) => {
              MM._renderPriority = rM
            }
          },
          metadata: rM
        }, kM, ZM), (0, OM.i)(null, null, UM, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: MM => "_shadowEnabled" in MM,
            get: MM => MM._shadowEnabled,
            set: (MM, rM) => {
              MM._shadowEnabled = rM
            }
          },
          metadata: rM
        }, YM, NM), (0, OM.i)(null, null, GM, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: MM => "_excludeWithLayerMask" in MM,
            get: MM => MM._excludeWithLayerMask,
            set: (MM, rM) => {
              MM._excludeWithLayerMask = rM
            }
          },
          metadata: rM
        }, AM, xM), (0, OM.i)(null, null, CM, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: MM => "_includeOnlyWithLayerMask" in MM,
            get: MM => MM._includeOnlyWithLayerMask,
            set: (MM, rM) => {
              MM._includeOnlyWithLayerMask = rM
            }
          },
          metadata: rM
        }, vM, FM), (0, OM.i)(null, null, eM, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: MM => "_lightmapMode" in MM,
            get: MM => MM._lightmapMode,
            set: (MM, rM) => {
              MM._lightmapMode = rM
            }
          },
          metadata: rM
        }, BM, XM), rM && Object.defineProperty(MM, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rM
        })
      })(), MM.FALLOFF_DEFAULT = zM.b.FALLOFF_DEFAULT, MM.FALLOFF_PHYSICAL = zM.b.FALLOFF_PHYSICAL, MM.FALLOFF_GLTF = zM.b.FALLOFF_GLTF, MM.FALLOFF_STANDARD = zM.b.FALLOFF_STANDARD, MM.LIGHTMAP_DEFAULT = zM.b.LIGHTMAP_DEFAULT, MM.LIGHTMAP_SPECULAR = zM.b.LIGHTMAP_SPECULAR, MM.LIGHTMAP_SHADOWSONLY = zM.b.LIGHTMAP_SHADOWSONLY, MM.INTENSITYMODE_AUTOMATIC = zM.b.INTENSITYMODE_AUTOMATIC, MM.INTENSITYMODE_LUMINOUSPOWER = zM.b.INTENSITYMODE_LUMINOUSPOWER, MM.INTENSITYMODE_LUMINOUSINTENSITY = zM.b.INTENSITYMODE_LUMINOUSINTENSITY, MM.INTENSITYMODE_ILLUMINANCE = zM.b.INTENSITYMODE_ILLUMINANCE, MM.INTENSITYMODE_LUMINANCE = zM.b.INTENSITYMODE_LUMINANCE, MM.LIGHTTYPEID_POINTLIGHT = zM.b.LIGHTTYPEID_POINTLIGHT, MM.LIGHTTYPEID_DIRECTIONALLIGHT = zM.b.LIGHTTYPEID_DIRECTIONALLIGHT, MM.LIGHTTYPEID_SPOTLIGHT = zM.b.LIGHTTYPEID_SPOTLIGHT, MM.LIGHTTYPEID_HEMISPHERICLIGHT = zM.b.LIGHTTYPEID_HEMISPHERICLIGHT, MM.LIGHTTYPEID_RECT_AREALIGHT = zM.b.LIGHTTYPEID_RECT_AREALIGHT, MM
    })()
  },
  41328: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => LM
    });
    var OM = iM(41099),
      SM = iM(38040),
      jM = iM(41105),
      aM = iM(38068),
      PM = iM(38064),
      nM = iM(40990),
      QM = iM(41121);
    class zM {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new aM.d, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new aM.d, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let LM = (() => {
      var MM;
      let rM, iM, LM, mM, HM, hM = [],
        JM = [],
        dM = [],
        yM = [],
        lM = [],
        EM = [],
        UM = [],
        GM = [],
        CM = [],
        eM = [];
      return MM = class {
        static AddNodeConstructor(MM, rM) {
          this._NodeConstructors[MM] = rM
        }
        static Construct(MM, rM, iM, OM) {
          const SM = this._NodeConstructors[MM];
          return SM ? SM(rM, iM, OM) : null
        }
        set accessibilityTag(MM) {
          this._accessibilityTag = MM, this.onAccessibilityTagChangedObservable.notifyObservers(MM)
        }
        get accessibilityTag() {
          return this._accessibilityTag
        }
        get doNotSerialize() {
          return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
        }
        set doNotSerialize(MM) {
          this._nodeDataStorage._doNotSerialize = MM
        }
        xG() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(MM) {
          if (this._parentNode === MM) return;
          const rM = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const rM = this._parentNode._children.indexOf(this); - 1 !== rM && this._parentNode._children.splice(rM, 1), MM || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = MM, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), rM || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
        }
        get parent() {
          return this._parentNode
        }
        get inheritVisibility() {
          return this._nodeDataStorage._inheritVisibility
        }
        set inheritVisibility(MM) {
          this._nodeDataStorage._inheritVisibility = MM
        }
        get isVisible() {
          return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
        }
        set isVisible(MM) {
          this._nodeDataStorage._isVisible = MM
        }
        _serializeAsParent(MM) {
          MM.parentId = this.uniqueId
        }
        _addToSceneRootNodes() {
          -1 === this._nodeDataStorage._sceneRootNodesIndex && (this._nodeDataStorage._sceneRootNodesIndex = this._scene.rootNodes.length, this._scene.rootNodes.push(this))
        }
        _removeFromSceneRootNodes() {
          if (-1 !== this._nodeDataStorage._sceneRootNodesIndex) {
            const MM = this._scene.rootNodes,
              rM = MM.length - 1;
            MM[this._nodeDataStorage._sceneRootNodesIndex] = MM[rM], MM[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
          }
        }
        get animationPropertiesOverride() {
          return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
        }
        set animationPropertiesOverride(MM) {
          this._animationPropertiesOverride = MM
        }
        getClassName() {
          return "Node"
        }
        set onDispose(MM) {
          this._onDisposeObserver && this.Rk.remove(this._onDisposeObserver), this._onDisposeObserver = this.Rk.add(MM)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var MM;
          return (MM = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (MM._onEffectiveEnabledStateChangedObservable = new aM.d)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new zM, this.name = (0, OM.m)(this, hM, void 0), this.id = ((0, OM.m)(this, JM), (0, OM.m)(this, dM, void 0)), this.uniqueId = ((0, OM.m)(this, yM), (0, OM.m)(this, lM, void 0)), this.state = ((0, OM.m)(this, EM), (0, OM.m)(this, UM, "")), this.metadata = ((0, OM.m)(this, GM), (0, OM.m)(this, CM, null)), this._internalMetadata = (0, OM.m)(this, eM), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new aM.d, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = SM.d.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.Rk = new aM.d, this._onDisposeObserver = null, this._behaviors = new Array, this.name = MM, this.id = MM, this._scene = rM || PM.c.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), iM && this._addToSceneRootNodes()
        }
        Hk() {
          return this._scene
        }
        ph() {
          return this._scene.ph()
        }
        addBehavior(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(MM) || (MM.init(), this._scene.isLoading && !rM ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(MM) && MM.attach(this)
          })) : MM.attach(this), this._behaviors.push(MM)), this
        }
        removeBehavior(MM) {
          const rM = this._behaviors.indexOf(MM);
          return -1 === rM || (this._behaviors.splice(rM, 1), MM.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(MM) {
          for (const rM of this._behaviors)
            if (rM.name === MM) return rM;
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
        updateCache(MM) {
          !MM && this.isSynchronized() || this._updateCache()
        }
        _getActionManagerForTrigger(MM) {
          return this.parent ? this.parent._getActionManagerForTrigger(MM, !1) : null
        }
        _updateCache(MM) {}
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
        FrM(MM) {
          return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this
        }
        isEnabled() {
          return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled
        }
        _hasEffectiveEnabledStateObservers() {
          const MM = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
          return !!MM && MM.hasObservers()
        }
        _syncParentEnabledState() {
          const MM = this._hasEffectiveEnabledStateObservers(),
            rM = MM ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const iM of this._children) iM._syncParentEnabledState();
          if (MM) {
            const MM = this.isEnabled();
            MM !== rM && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(MM)
          }
        }
        kR(MM) {
          if (this._nodeDataStorage._isEnabled === MM) return;
          const rM = this._hasEffectiveEnabledStateObservers(),
            iM = rM ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = MM, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(MM), rM) {
            const MM = this.isEnabled();
            MM !== iM && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(MM)
          }
        }
        isDescendantOf(MM) {
          return !!this.parent && (this.parent === MM || this.parent.isDescendantOf(MM))
        }
        _getDescendants(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            iM = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let OM = 0; OM < this._children.length; OM++) {
              const SM = this._children[OM];
              iM && !iM(SM) || MM.push(SM), rM || SM._getDescendants(MM, !1, iM)
            }
        }
        getDescendants(MM, rM) {
          const iM = [];
          return this._getDescendants(iM, MM, rM), iM
        }
        getChildMeshes(MM, rM) {
          const iM = [];
          return this._getDescendants(iM, MM, (MM => (!rM || rM(MM)) && void 0 !== MM.cullingStrategy)), iM
        }
        getChildren(MM) {
          let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(rM, MM)
        }
        _setReady(MM) {
          MM !== this._nodeDataStorage._isReady && (MM ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(MM) {
          for (let rM = 0; rM < this.animations.length; rM++) {
            const iM = this.animations[rM];
            if (iM.name === MM) return iM
          }
          return null
        }
        createAnimationRange(rM, iM, OM) {
          if (!this._ranges[rM]) {
            this._ranges[rM] = MM._AnimationRangeFactory(rM, iM, OM);
            for (let MM = 0, SM = this.animations.length; MM < SM; MM++) this.animations[MM] && this.animations[MM].createRange(rM, iM, OM)
          }
        }
        deleteAnimationRange(MM) {
          let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let iM = 0, OM = this.animations.length; iM < OM; iM++) this.animations[iM] && this.animations[iM].deleteRange(MM, rM);
          this._ranges[MM] = null
        }
        getAnimationRange(MM) {
          return this._ranges[MM] || null
        }
        clone(rM, iM, OM) {
          const SM = QM.b.Clone((() => new MM(rM, this.Hk())), this);
          if (iM && (SM.parent = iM), !OM) {
            const MM = this.getDescendants(!0);
            for (let iM = 0; iM < MM.length; iM++) {
              const OM = MM[iM];
              OM.clone(rM + "." + OM.name, SM)
            }
          }
          return SM
        }
        getAnimationRanges() {
          const MM = [];
          let rM;
          for (rM in this._ranges) MM.push(this._ranges[rM]);
          return MM
        }
        beginAnimation(MM, rM, iM, OM) {
          const SM = this.getAnimationRange(MM);
          return SM ? this._scene.beginAnimation(this, SM.from, SM.to, rM, iM, OM) : null
        }
        serializeAnimationRanges() {
          const MM = [];
          for (const rM in this._ranges) {
            const iM = this._ranges[rM];
            if (!iM) continue;
            const OM = {};
            OM.name = rM, OM.from = iM.from, OM.to = iM.to, MM.push(OM)
          }
          return MM
        }
        computeWorldMatrix(MM) {
          return this._worldMatrix || (this._worldMatrix = SM.d.Identity()), this._worldMatrix
        }
        dispose(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !MM) {
            const iM = this.getDescendants(!0);
            for (const OM of iM) OM.dispose(MM, rM)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.Rk.notifyObservers(this), this.Rk.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const iM of this._behaviors) iM.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(MM, rM, iM) {
          if (rM.Ld)
            for (let OM = 0; OM < rM.Ld.length; OM++) {
              const iM = rM.Ld[OM];
              MM.createAnimationRange(iM.name, iM.from, iM.to)
            }
        }
        getHierarchyBoundingVectors() {
          let MM, rM, iM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            OM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.Hk().incrementRenderId(), this.computeWorldMatrix(!0);
          const jM = this;
          if (jM.aY && jM.iG) {
            const iM = jM.aY();
            MM = iM.boundingBox.minimumWorld.clone(), rM = iM.boundingBox.maximumWorld.clone()
          } else MM = new SM.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), rM = new SM.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (iM) {
            const iM = this.getDescendants(!1);
            for (const jM of iM) {
              const iM = jM;
              if (iM.computeWorldMatrix(!0), OM && !OM(iM)) continue;
              if (!iM.aY || 0 === iM.getTotalVertices()) continue;
              const aM = iM.aY().boundingBox,
                PM = aM.minimumWorld,
                nM = aM.maximumWorld;
              SM.q.CheckExtends(PM, MM, rM), SM.q.CheckExtends(nM, MM, rM)
            }
          }
          return {
            min: MM,
            max: rM
          }
        }
      }, (() => {
        const SM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        rM = [(0, jM.L)()], iM = [(0, jM.L)()], LM = [(0, jM.L)()], mM = [(0, jM.L)()], HM = [(0, jM.L)()], (0, OM.i)(null, null, rM, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: MM => "name" in MM,
            get: MM => MM.name,
            set: (MM, rM) => {
              MM.name = rM
            }
          },
          metadata: SM
        }, hM, JM), (0, OM.i)(null, null, iM, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: MM => "id" in MM,
            get: MM => MM.id,
            set: (MM, rM) => {
              MM.id = rM
            }
          },
          metadata: SM
        }, dM, yM), (0, OM.i)(null, null, LM, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: MM => "uniqueId" in MM,
            get: MM => MM.uniqueId,
            set: (MM, rM) => {
              MM.uniqueId = rM
            }
          },
          metadata: SM
        }, lM, EM), (0, OM.i)(null, null, mM, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: MM => "state" in MM,
            get: MM => MM.state,
            set: (MM, rM) => {
              MM.state = rM
            }
          },
          metadata: SM
        }, UM, GM), (0, OM.i)(null, null, HM, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: MM => "metadata" in MM,
            get: MM => MM.metadata,
            set: (MM, rM) => {
              MM.metadata = rM
            }
          },
          metadata: SM
        }, CM, eM), SM && Object.defineProperty(MM, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: SM
        })
      })(), MM._AnimationRangeFactory = (MM, rM, iM) => {
        throw (0, nM.n)("AnimationRange")
      }, MM._NodeConstructors = {}, MM
    })()
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);