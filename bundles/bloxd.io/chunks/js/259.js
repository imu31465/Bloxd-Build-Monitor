export const id = 259;
export const ids = [259];
export const modules = {
  40189: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => UD
    });
    var pD = wD(39921),
      sD = wD(39927),
      KD = wD(37079),
      rD = wD(37273),
      LD = wD(40155),
      cD = wD(40055),
      gD = wD(37134),
      RD = wD(40128),
      AD = wD(39939);
    let UD = (() => {
      var DD, zD;
      let wD, UD, fD, ID, BD, GD, hD, nD, MD, OD, JD, ED, QD, XD = LD.b,
        VD = [],
        PD = [],
        CD = [],
        xD = [],
        TD = [],
        bD = [],
        jD = [],
        dD = [],
        SD = [],
        iD = [],
        lD = [],
        WD = [],
        ND = [],
        ZD = [],
        yD = [],
        kD = [],
        mD = [],
        eD = [],
        oD = [],
        aD = [],
        uD = [];
      return DD = class extends XD {
        get range() {
          return this._range
        }
        set range(DD) {
          this._range = DD, this._inverseSquaredRange = 1 / (this.range * this.range)
        }
        get intensityMode() {
          return this._intensityMode
        }
        set intensityMode(DD) {
          this._intensityMode = DD, this._computePhotometricScale()
        }
        get radius() {
          return this._radius
        }
        set radius(DD) {
          this._radius = DD, this._computePhotometricScale()
        }
        get renderPriority() {
          return (0, pD.c)(this, zD, "f")
        }
        set renderPriority(DD) {
          (0, pD.g)(this, zD, DD, "f")
        }
        get shadowEnabled() {
          return this._shadowEnabled
        }
        set shadowEnabled(DD) {
          this._shadowEnabled !== DD && (this._shadowEnabled = DD, this._markMeshesAsLightDirty())
        }
        get includedOnlyMeshes() {
          return this._includedOnlyMeshes
        }
        set includedOnlyMeshes(DD) {
          this._includedOnlyMeshes = DD, this._hookArrayForIncludedOnly(DD)
        }
        get excludedMeshes() {
          return this._excludedMeshes
        }
        set excludedMeshes(DD) {
          this._excludedMeshes = DD, this._hookArrayForExcluded(DD)
        }
        get excludeWithLayerMask() {
          return this._excludeWithLayerMask
        }
        set excludeWithLayerMask(DD) {
          this._excludeWithLayerMask = DD, this._resyncMeshes()
        }
        get includeOnlyWithLayerMask() {
          return this._includeOnlyWithLayerMask
        }
        set includeOnlyWithLayerMask(DD) {
          this._includeOnlyWithLayerMask = DD, this._resyncMeshes()
        }
        get lightmapMode() {
          return this._lightmapMode
        }
        set lightmapMode(DD) {
          this._lightmapMode !== DD && (this._lightmapMode = DD, this._markMeshesAsLightDirty())
        }
        getViewMatrix(DD) {
          return null
        }
        getProjectionMatrix(DD, zD) {
          return null
        }
        constructor(wD, sD, KD) {
          super(wD, sD, !1), this.diffuse = ((0, pD.m)(this, VD), (0, pD.m)(this, PD, new rD.d(1, 1, 1))), this.specular = ((0, pD.m)(this, CD), (0, pD.m)(this, xD, new rD.d(1, 1, 1))), this.falloffType = ((0, pD.m)(this, TD), (0, pD.m)(this, bD, DD.FALLOFF_DEFAULT)), this.intensity = ((0, pD.m)(this, jD), (0, pD.m)(this, dD, 1)), this._range = ((0, pD.m)(this, SD), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = DD.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, pD.m)(this, iD, void 0), zD.set(this, ((0, pD.m)(this, lD), (0, pD.m)(this, WD, 0))), this._shadowEnabled = ((0, pD.m)(this, ND), (0, pD.m)(this, ZD, !0)), this._includedOnlyMeshes = (0, pD.m)(this, yD), this._excludeWithLayerMask = (0, pD.m)(this, kD, 0), this._includeOnlyWithLayerMask = ((0, pD.m)(this, mD), (0, pD.m)(this, eD, 0)), this._lightmapMode = ((0, pD.m)(this, oD), (0, pD.m)(this, aD, 0)), this._shadowGenerators = ((0, pD.m)(this, uD), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, KD || this.Ul().addLight(this), this._uniformBuffer = new cD.e(this.Ul().iI(), void 0, void 0, wD), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], KD || this._resyncMeshes()
        }
        transferTexturesToEffect(DD, zD) {
          return this
        }
        _bindLight(DD, zD, wD, pD) {
          let sD = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const KD = DD.toString();
          let LD = !1;
          if (this._uniformBuffer.bindToEffect(wD, "Light" + KD), this._renderId !== zD.getRenderId() || this._lastUseSpecular !== pD || !this._uniformBuffer.useUbo) {
            this._renderId = zD.getRenderId(), this._lastUseSpecular = pD;
            const DD = this.getScaledIntensity();
            this.transferToEffect(wD, KD), this.diffuse.scaleToRef(DD, rD.l.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", rD.l.Color3[0], this.range, KD), pD && (this.specular.scaleToRef(DD, rD.l.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", rD.l.Color3[1], this.radius, KD)), LD = !0
          }
          if (this.transferTexturesToEffect(wD, KD), zD.shadowsEnabled && this.shadowEnabled && sD) {
            const DD = this.getShadowGenerator(zD.activeCamera) ?? this.getShadowGenerator();
            DD && (DD.bindShadowLight(KD, wD), LD = !0)
          }
          LD ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(DD) {
          let zD = "Name: " + this.name;
          if (zD += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let wD = 0; wD < this.animations.length; wD++) zD += ", animation[0]: " + this.animations[wD].toString(DD);
          return zD
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.EX() || this._resyncMeshes()
        }
        nC(DD) {
          super.nC(DD), this._resyncMeshes()
        }
        getShadowGenerator() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(DD) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return KD.s.Zero()
        }
        canAffectMesh(DD) {
          return !DD || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(DD)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(DD)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & DD.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & DD.layerMask)))
        }
        dispose(DD) {
          let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const DD = this._shadowGenerators.values();
            for (let zD = DD.next(); !0 !== zD.done; zD = DD.next()) {
              zD.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.Ul().stopAnimation(this), this._parentContainer) {
            const DD = this._parentContainer.lights.indexOf(this);
            DD > -1 && this._parentContainer.lights.splice(DD, 1), this._parentContainer = null
          }
          for (const wD of this.Ul().meshes) wD._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.Ul().removeLight(this), super.dispose(DD, zD)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(zD) {
          let wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const pD = DD.GetConstructorFromName(this.getTypeID(), zD, this.Ul());
          if (!pD) return null;
          const sD = AD.d.Clone(pD, this);
          return zD && (sD.name = zD), wD && (sD.parent = wD), sD.nC(this.isEnabled()), this.onClonedObservable.notifyObservers(sD), sD
        }
        serialize() {
          const DD = AD.d.Serialize(this);
          if (DD.uniqueId = this.uniqueId, DD.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(DD), this.excludedMeshes.length > 0) {
            DD.excludedMeshesIds = [];
            for (const zD of this.excludedMeshes) DD.excludedMeshesIds.push(zD.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            DD.includedOnlyMeshesIds = [];
            for (const zD of this.includedOnlyMeshes) DD.includedOnlyMeshesIds.push(zD.id)
          }
          return AD.d.AppendSerializedAnimations(this, DD), DD.rG = this.serializeAnimationRanges(), DD.isEnabled = this.isEnabled(), DD
        }
        static GetConstructorFromName(DD, zD, wD) {
          const pD = LD.b.Construct("Light_Type_" + DD, zD, wD);
          return pD || null
        }
        static Parse(zD, wD) {
          let pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const sD = DD.GetConstructorFromName(zD.type, zD.name, wD);
          if (!sD) return null;
          const KD = AD.d.Parse(sD, zD, wD, pD);
          if (zD.excludedMeshesIds && (KD._excludedMeshesIds = zD.excludedMeshesIds), zD.includedOnlyMeshesIds && (KD._includedOnlyMeshesIds = zD.includedOnlyMeshesIds), void 0 !== zD.parentId && (KD._waitingParentId = zD.parentId), void 0 !== zD.parentInstanceIndex && (KD._waitingParentInstanceIndex = zD.parentInstanceIndex), void 0 !== zD.falloffType && (KD.falloffType = zD.falloffType), void 0 !== zD.lightmapMode && (KD.lightmapMode = zD.lightmapMode), zD.animations) {
            for (let DD = 0; DD < zD.animations.length; DD++) {
              const wD = zD.animations[DD],
                pD = (0, gD.e)("BABYLON.Animation");
              pD && KD.animations.push(pD.Parse(wD))
            }
            LD.b.ParseAnimationRanges(KD, zD, wD)
          }
          return zD.autoAnimate && wD.beginAnimation(KD, zD.autoAnimateFrom, zD.autoAnimateTo, zD.autoAnimateLoop, zD.autoAnimateSpeed || 1), void 0 !== zD.isEnabled && KD.nC(zD.isEnabled), KD._onParsed(zD, wD, pD), KD
        }
        _onParsed(DD, zD) {}
        _hookArrayForExcluded(DD) {
          var zD = this;
          const wD = DD.push;
          DD.push = function() {
            for (var pD = arguments.length, sD = new Array(pD), KD = 0; KD < pD; KD++) sD[KD] = arguments[KD];
            const rD = wD.apply(DD, sD);
            if (zD._clusteredContainer) return rD;
            for (const DD of sD) DD._resyncLightSource(zD);
            return rD
          };
          const pD = DD.splice;
          DD.splice = (zD, wD) => {
            const sD = pD.call(DD, zD, wD ?? DD.length);
            if (this._clusteredContainer) return sD;
            for (const DD of sD) DD._resyncLightSource(this);
            return sD
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(DD) {
          var zD = this;
          const wD = DD.push;
          DD.push = function() {
            for (var pD = arguments.length, sD = new Array(pD), KD = 0; KD < pD; KD++) sD[KD] = arguments[KD];
            const rD = wD.apply(DD, sD);
            return zD._resyncMeshes(), rD
          };
          const pD = DD.splice;
          DD.splice = (zD, wD) => {
            const sD = pD.call(DD, zD, wD ?? DD.length);
            return this._resyncMeshes(), sD
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const DD of this.Ul().meshes) DD._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const DD of this.Ul().meshes) - 1 !== DD.lightSources.indexOf(this) && DD._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.Ul().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let zD = 0;
          const wD = this.getTypeID();
          let pD = this.intensityMode;
          switch (pD === DD.INTENSITYMODE_AUTOMATIC && (pD = wD === DD.LIGHTTYPEID_DIRECTIONALLIGHT ? DD.INTENSITYMODE_ILLUMINANCE : DD.INTENSITYMODE_LUMINOUSINTENSITY), wD) {
            case DD.LIGHTTYPEID_POINTLIGHT:
            case DD.LIGHTTYPEID_SPOTLIGHT:
              switch (pD) {
                case DD.INTENSITYMODE_LUMINOUSPOWER:
                  zD = 1 / (4 * Math.PI);
                  break;
                case DD.INTENSITYMODE_LUMINOUSINTENSITY:
                  zD = 1;
                  break;
                case DD.INTENSITYMODE_LUMINANCE:
                  zD = this.radius * this.radius
              }
              break;
            case DD.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (pD) {
                case DD.INTENSITYMODE_ILLUMINANCE:
                  zD = 1;
                  break;
                case DD.INTENSITYMODE_LUMINANCE: {
                  let DD = this.radius;
                  DD = Math.max(DD, .001);
                  zD = 2 * Math.PI * (1 - Math.cos(DD));
                  break
                }
              }
              break;
            case DD.LIGHTTYPEID_HEMISPHERICLIGHT:
            case DD.LIGHTTYPEID_RECT_AREALIGHT:
              zD = 1
          }
          return zD
        }
        _reorderLightsInScene() {
          const DD = this.Ul();
          0 != this._renderPriority && (DD.requireLightSorting = !0), this.Ul().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, zD = new WeakMap, (() => {
        const zD = "function" === typeof Symbol && Symbol.metadata ? Object.create(XD[Symbol.metadata] ?? null) : void 0;
        wD = [(0, sD.k)()], UD = [(0, sD.k)()], fD = [(0, sD.C)()], ID = [(0, sD.C)()], BD = [(0, sD.C)()], GD = [(0, sD.C)()], hD = [(0, sD.C)()], nD = [(0, sD.C)()], MD = [(0, sD.e)("_reorderLightsInScene")], OD = [(0, sD.C)("shadowEnabled")], JD = [(0, sD.C)("excludeWithLayerMask")], ED = [(0, sD.C)("includeOnlyWithLayerMask")], QD = [(0, sD.C)("lightmapMode")], (0, pD.i)(DD, null, BD, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: DD => "range" in DD,
            get: DD => DD.range
          },
          metadata: zD
        }, null, VD), (0, pD.i)(DD, null, GD, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: DD => "intensityMode" in DD,
            get: DD => DD.intensityMode
          },
          metadata: zD
        }, null, VD), (0, pD.i)(DD, null, hD, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: DD => "radius" in DD,
            get: DD => DD.radius
          },
          metadata: zD
        }, null, VD), (0, pD.i)(DD, null, MD, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: DD => "renderPriority" in DD,
            get: DD => DD.renderPriority,
            set: (DD, zD) => {
              DD.renderPriority = zD
            }
          },
          metadata: zD
        }, WD, ND), (0, pD.i)(null, null, wD, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: DD => "diffuse" in DD,
            get: DD => DD.diffuse,
            set: (DD, zD) => {
              DD.diffuse = zD
            }
          },
          metadata: zD
        }, PD, CD), (0, pD.i)(null, null, UD, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: DD => "specular" in DD,
            get: DD => DD.specular,
            set: (DD, zD) => {
              DD.specular = zD
            }
          },
          metadata: zD
        }, xD, TD), (0, pD.i)(null, null, fD, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: DD => "falloffType" in DD,
            get: DD => DD.falloffType,
            set: (DD, zD) => {
              DD.falloffType = zD
            }
          },
          metadata: zD
        }, bD, jD), (0, pD.i)(null, null, ID, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: DD => "intensity" in DD,
            get: DD => DD.intensity,
            set: (DD, zD) => {
              DD.intensity = zD
            }
          },
          metadata: zD
        }, dD, SD), (0, pD.i)(null, null, nD, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: DD => "_renderPriority" in DD,
            get: DD => DD._renderPriority,
            set: (DD, zD) => {
              DD._renderPriority = zD
            }
          },
          metadata: zD
        }, iD, lD), (0, pD.i)(null, null, OD, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: DD => "_shadowEnabled" in DD,
            get: DD => DD._shadowEnabled,
            set: (DD, zD) => {
              DD._shadowEnabled = zD
            }
          },
          metadata: zD
        }, ZD, yD), (0, pD.i)(null, null, JD, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: DD => "_excludeWithLayerMask" in DD,
            get: DD => DD._excludeWithLayerMask,
            set: (DD, zD) => {
              DD._excludeWithLayerMask = zD
            }
          },
          metadata: zD
        }, kD, mD), (0, pD.i)(null, null, ED, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: DD => "_includeOnlyWithLayerMask" in DD,
            get: DD => DD._includeOnlyWithLayerMask,
            set: (DD, zD) => {
              DD._includeOnlyWithLayerMask = zD
            }
          },
          metadata: zD
        }, eD, oD), (0, pD.i)(null, null, QD, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: DD => "_lightmapMode" in DD,
            get: DD => DD._lightmapMode,
            set: (DD, zD) => {
              DD._lightmapMode = zD
            }
          },
          metadata: zD
        }, aD, uD), zD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zD
        })
      })(), DD.FALLOFF_DEFAULT = RD.e.FALLOFF_DEFAULT, DD.FALLOFF_PHYSICAL = RD.e.FALLOFF_PHYSICAL, DD.FALLOFF_GLTF = RD.e.FALLOFF_GLTF, DD.FALLOFF_STANDARD = RD.e.FALLOFF_STANDARD, DD.LIGHTMAP_DEFAULT = RD.e.LIGHTMAP_DEFAULT, DD.LIGHTMAP_SPECULAR = RD.e.LIGHTMAP_SPECULAR, DD.LIGHTMAP_SHADOWSONLY = RD.e.LIGHTMAP_SHADOWSONLY, DD.INTENSITYMODE_AUTOMATIC = RD.e.INTENSITYMODE_AUTOMATIC, DD.INTENSITYMODE_LUMINOUSPOWER = RD.e.INTENSITYMODE_LUMINOUSPOWER, DD.INTENSITYMODE_LUMINOUSINTENSITY = RD.e.INTENSITYMODE_LUMINOUSINTENSITY, DD.INTENSITYMODE_ILLUMINANCE = RD.e.INTENSITYMODE_ILLUMINANCE, DD.INTENSITYMODE_LUMINANCE = RD.e.INTENSITYMODE_LUMINANCE, DD.LIGHTTYPEID_POINTLIGHT = RD.e.LIGHTTYPEID_POINTLIGHT, DD.LIGHTTYPEID_DIRECTIONALLIGHT = RD.e.LIGHTTYPEID_DIRECTIONALLIGHT, DD.LIGHTTYPEID_SPOTLIGHT = RD.e.LIGHTTYPEID_SPOTLIGHT, DD.LIGHTTYPEID_HEMISPHERICLIGHT = RD.e.LIGHTTYPEID_HEMISPHERICLIGHT, DD.LIGHTTYPEID_RECT_AREALIGHT = RD.e.LIGHTTYPEID_RECT_AREALIGHT, DD
    })()
  },
  40155: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => AD
    });
    var pD = wD(39921),
      sD = wD(37079),
      KD = wD(39927),
      rD = wD(37119),
      LD = wD(37110),
      cD = wD(39808),
      gD = wD(39939);
    class RD {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new rD.b, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new rD.b, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let AD = (() => {
      var DD;
      let zD, wD, AD, UD, fD, ID = [],
        BD = [],
        GD = [],
        hD = [],
        nD = [],
        MD = [],
        OD = [],
        JD = [],
        ED = [],
        QD = [];
      return DD = class {
        static AddNodeConstructor(DD, zD) {
          this._NodeConstructors[DD] = zD
        }
        static Construct(DD, zD, wD, pD) {
          const sD = this._NodeConstructors[DD];
          return sD ? sD(zD, wD, pD) : null
        }
        set accessibilityTag(DD) {
          this._accessibilityTag = DD, this.onAccessibilityTagChangedObservable.notifyObservers(DD)
        }
        get accessibilityTag() {
          return this._accessibilityTag
        }
        get doNotSerialize() {
          return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
        }
        set doNotSerialize(DD) {
          this._nodeDataStorage._doNotSerialize = DD
        }
        EX() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(DD) {
          if (this._parentNode === DD) return;
          const zD = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const zD = this._parentNode._children.indexOf(this); - 1 !== zD && this._parentNode._children.splice(zD, 1), DD || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = DD, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), zD || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
        }
        get parent() {
          return this._parentNode
        }
        get inheritVisibility() {
          return this._nodeDataStorage._inheritVisibility
        }
        set inheritVisibility(DD) {
          this._nodeDataStorage._inheritVisibility = DD
        }
        get isVisible() {
          return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
        }
        set isVisible(DD) {
          this._nodeDataStorage._isVisible = DD
        }
        _serializeAsParent(DD) {
          DD.parentId = this.uniqueId
        }
        _addToSceneRootNodes() {
          -1 === this._nodeDataStorage._sceneRootNodesIndex && (this._nodeDataStorage._sceneRootNodesIndex = this._scene.rootNodes.length, this._scene.rootNodes.push(this))
        }
        _removeFromSceneRootNodes() {
          if (-1 !== this._nodeDataStorage._sceneRootNodesIndex) {
            const DD = this._scene.rootNodes,
              zD = DD.length - 1;
            DD[this._nodeDataStorage._sceneRootNodesIndex] = DD[zD], DD[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
          }
        }
        get animationPropertiesOverride() {
          return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
        }
        set animationPropertiesOverride(DD) {
          this._animationPropertiesOverride = DD
        }
        getClassName() {
          return "Node"
        }
        set onDispose(DD) {
          this._onDisposeObserver && this.Bl.remove(this._onDisposeObserver), this._onDisposeObserver = this.Bl.add(DD)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var DD;
          return (DD = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (DD._onEffectiveEnabledStateChangedObservable = new rD.b)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(DD) {
          let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            wD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new RD, this.name = (0, pD.m)(this, ID, void 0), this.id = ((0, pD.m)(this, BD), (0, pD.m)(this, GD, void 0)), this.uniqueId = ((0, pD.m)(this, hD), (0, pD.m)(this, nD, void 0)), this.state = ((0, pD.m)(this, MD), (0, pD.m)(this, OD, "")), this.metadata = ((0, pD.m)(this, JD), (0, pD.m)(this, ED, null)), this._internalMetadata = (0, pD.m)(this, QD), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new rD.b, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = sD.e.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.Bl = new rD.b, this._onDisposeObserver = null, this._behaviors = new Array, this.name = DD, this.id = DD, this._scene = zD || LD.d.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), wD && this._addToSceneRootNodes()
        }
        Ul() {
          return this._scene
        }
        iI() {
          return this._scene.iI()
        }
        addBehavior(DD) {
          let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(DD) || (DD.init(), this._scene.isLoading && !zD ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(DD) && DD.attach(this)
          })) : DD.attach(this), this._behaviors.push(DD)), this
        }
        removeBehavior(DD) {
          const zD = this._behaviors.indexOf(DD);
          return -1 === zD || (this._behaviors.splice(zD, 1), DD.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(DD) {
          for (const zD of this._behaviors)
            if (zD.name === DD) return zD;
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
        updateCache(DD) {
          !DD && this.isSynchronized() || this._updateCache()
        }
        _getActionManagerForTrigger(DD) {
          return this.parent ? this.parent._getActionManagerForTrigger(DD, !1) : null
        }
        _updateCache(DD) {}
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
        vzD(DD) {
          return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this
        }
        isEnabled() {
          return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled
        }
        _hasEffectiveEnabledStateObservers() {
          const DD = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
          return !!DD && DD.hasObservers()
        }
        _syncParentEnabledState() {
          const DD = this._hasEffectiveEnabledStateObservers(),
            zD = DD ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const wD of this._children) wD._syncParentEnabledState();
          if (DD) {
            const DD = this.isEnabled();
            DD !== zD && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(DD)
          }
        }
        nC(DD) {
          if (this._nodeDataStorage._isEnabled === DD) return;
          const zD = this._hasEffectiveEnabledStateObservers(),
            wD = zD ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = DD, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(DD), zD) {
            const DD = this.isEnabled();
            DD !== wD && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(DD)
          }
        }
        isDescendantOf(DD) {
          return !!this.parent && (this.parent === DD || this.parent.isDescendantOf(DD))
        }
        _getDescendants(DD) {
          let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            wD = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let pD = 0; pD < this._children.length; pD++) {
              const sD = this._children[pD];
              wD && !wD(sD) || DD.push(sD), zD || sD._getDescendants(DD, !1, wD)
            }
        }
        getDescendants(DD, zD) {
          const wD = [];
          return this._getDescendants(wD, DD, zD), wD
        }
        getChildMeshes(DD, zD) {
          const wD = [];
          return this._getDescendants(wD, DD, (DD => (!zD || zD(DD)) && void 0 !== DD.cullingStrategy)), wD
        }
        getChildren(DD) {
          let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(zD, DD)
        }
        _setReady(DD) {
          DD !== this._nodeDataStorage._isReady && (DD ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(DD) {
          for (let zD = 0; zD < this.animations.length; zD++) {
            const wD = this.animations[zD];
            if (wD.name === DD) return wD
          }
          return null
        }
        createAnimationRange(zD, wD, pD) {
          if (!this._ranges[zD]) {
            this._ranges[zD] = DD._AnimationRangeFactory(zD, wD, pD);
            for (let DD = 0, sD = this.animations.length; DD < sD; DD++) this.animations[DD] && this.animations[DD].createRange(zD, wD, pD)
          }
        }
        deleteAnimationRange(DD) {
          let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let wD = 0, pD = this.animations.length; wD < pD; wD++) this.animations[wD] && this.animations[wD].deleteRange(DD, zD);
          this._ranges[DD] = null
        }
        getAnimationRange(DD) {
          return this._ranges[DD] || null
        }
        clone(zD, wD, pD) {
          const sD = gD.d.Clone((() => new DD(zD, this.Ul())), this);
          if (wD && (sD.parent = wD), !pD) {
            const DD = this.getDescendants(!0);
            for (let wD = 0; wD < DD.length; wD++) {
              const pD = DD[wD];
              pD.clone(zD + "." + pD.name, sD)
            }
          }
          return sD
        }
        getAnimationRanges() {
          const DD = [];
          let zD;
          for (zD in this._ranges) DD.push(this._ranges[zD]);
          return DD
        }
        beginAnimation(DD, zD, wD, pD) {
          const sD = this.getAnimationRange(DD);
          return sD ? this._scene.beginAnimation(this, sD.from, sD.to, zD, wD, pD) : null
        }
        serializeAnimationRanges() {
          const DD = [];
          for (const zD in this._ranges) {
            const wD = this._ranges[zD];
            if (!wD) continue;
            const pD = {};
            pD.name = zD, pD.from = wD.from, pD.to = wD.to, DD.push(pD)
          }
          return DD
        }
        computeWorldMatrix(DD) {
          return this._worldMatrix || (this._worldMatrix = sD.e.Identity()), this._worldMatrix
        }
        dispose(DD) {
          let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !DD) {
            const wD = this.getDescendants(!0);
            for (const pD of wD) pD.dispose(DD, zD)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.Bl.notifyObservers(this), this.Bl.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const wD of this._behaviors) wD.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(DD, zD, wD) {
          if (zD.rG)
            for (let pD = 0; pD < zD.rG.length; pD++) {
              const wD = zD.rG[pD];
              DD.createAnimationRange(wD.name, wD.from, wD.to)
            }
        }
        getHierarchyBoundingVectors() {
          let DD, zD, wD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            pD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.Ul().incrementRenderId(), this.computeWorldMatrix(!0);
          const KD = this;
          if (KD.FW && KD.QE) {
            const wD = KD.FW();
            DD = wD.boundingBox.minimumWorld.clone(), zD = wD.boundingBox.maximumWorld.clone()
          } else DD = new sD.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), zD = new sD.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (wD) {
            const wD = this.getDescendants(!1);
            for (const KD of wD) {
              const wD = KD;
              if (wD.computeWorldMatrix(!0), pD && !pD(wD)) continue;
              if (!wD.FW || 0 === wD.getTotalVertices()) continue;
              const rD = wD.FW().boundingBox,
                LD = rD.minimumWorld,
                cD = rD.maximumWorld;
              sD.s.CheckExtends(LD, DD, zD), sD.s.CheckExtends(cD, DD, zD)
            }
          }
          return {
            min: DD,
            max: zD
          }
        }
      }, (() => {
        const sD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zD = [(0, KD.C)()], wD = [(0, KD.C)()], AD = [(0, KD.C)()], UD = [(0, KD.C)()], fD = [(0, KD.C)()], (0, pD.i)(null, null, zD, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: DD => "name" in DD,
            get: DD => DD.name,
            set: (DD, zD) => {
              DD.name = zD
            }
          },
          metadata: sD
        }, ID, BD), (0, pD.i)(null, null, wD, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: DD => "id" in DD,
            get: DD => DD.id,
            set: (DD, zD) => {
              DD.id = zD
            }
          },
          metadata: sD
        }, GD, hD), (0, pD.i)(null, null, AD, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: DD => "uniqueId" in DD,
            get: DD => DD.uniqueId,
            set: (DD, zD) => {
              DD.uniqueId = zD
            }
          },
          metadata: sD
        }, nD, MD), (0, pD.i)(null, null, UD, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: DD => "state" in DD,
            get: DD => DD.state,
            set: (DD, zD) => {
              DD.state = zD
            }
          },
          metadata: sD
        }, OD, JD), (0, pD.i)(null, null, fD, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: DD => "metadata" in DD,
            get: DD => DD.metadata,
            set: (DD, zD) => {
              DD.metadata = zD
            }
          },
          metadata: sD
        }, ED, QD), sD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: sD
        })
      })(), DD._AnimationRangeFactory = (DD, zD, wD) => {
        throw (0, cD.j)("AnimationRange")
      }, DD._NodeConstructors = {}, DD
    })()
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);