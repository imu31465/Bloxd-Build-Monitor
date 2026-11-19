export const id = 249;
export const ids = [249];
export const modules = {
  39392: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => yD
    });
    var ID = cD(39154),
      pD = cD(39156),
      iD = cD(36446),
      fD = cD(36622),
      bD = cD(39356),
      QD = cD(39281),
      wD = cD(36488),
      SD = cD(39344),
      BD = cD(39174);
    let yD = (() => {
      var DD, CD;
      let cD, yD, MD, tD, ZD, oD, vD, ND, gD, XD, mD, nD, OD, PD = bD.b,
        HD = [],
        UD = [],
        xD = [],
        qD = [],
        JD = [],
        KD = [],
        aD = [],
        VD = [],
        zD = [],
        jD = [],
        lD = [],
        LD = [],
        TD = [],
        GD = [],
        RD = [],
        kD = [],
        dD = [],
        YD = [],
        WD = [],
        sD = [],
        ED = [];
      return DD = class extends PD {
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
          return (0, ID.d)(this, CD, "f")
        }
        set renderPriority(DD) {
          (0, ID.g)(this, CD, DD, "f")
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
        getProjectionMatrix(DD, CD) {
          return null
        }
        constructor(cD, pD, iD) {
          super(cD, pD, !1), this.diffuse = ((0, ID.m)(this, HD), (0, ID.m)(this, UD, new fD.d(1, 1, 1))), this.specular = ((0, ID.m)(this, xD), (0, ID.m)(this, qD, new fD.d(1, 1, 1))), this.falloffType = ((0, ID.m)(this, JD), (0, ID.m)(this, KD, DD.FALLOFF_DEFAULT)), this.intensity = ((0, ID.m)(this, aD), (0, ID.m)(this, VD, 1)), this._range = ((0, ID.m)(this, zD), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = DD.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, ID.m)(this, jD, void 0), CD.set(this, ((0, ID.m)(this, lD), (0, ID.m)(this, LD, 0))), this._shadowEnabled = ((0, ID.m)(this, TD), (0, ID.m)(this, GD, !0)), this._includedOnlyMeshes = (0, ID.m)(this, RD), this._excludeWithLayerMask = (0, ID.m)(this, kD, 0), this._includeOnlyWithLayerMask = ((0, ID.m)(this, dD), (0, ID.m)(this, YD, 0)), this._lightmapMode = ((0, ID.m)(this, WD), (0, ID.m)(this, sD, 0)), this._shadowGenerators = ((0, ID.m)(this, ED), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, iD || this.hq().addLight(this), this._uniformBuffer = new QD.b(this.hq().DZ(), void 0, void 0, cD), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], iD || this._resyncMeshes()
        }
        transferTexturesToEffect(DD, CD) {
          return this
        }
        _bindLight(DD, CD, cD, ID) {
          let pD = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const iD = DD.toString();
          let bD = !1;
          if (this._uniformBuffer.bindToEffect(cD, "Light" + iD), this._renderId !== CD.getRenderId() || this._lastUseSpecular !== ID || !this._uniformBuffer.useUbo) {
            this._renderId = CD.getRenderId(), this._lastUseSpecular = ID;
            const DD = this.getScaledIntensity();
            this.transferToEffect(cD, iD), this.diffuse.scaleToRef(DD, fD.j.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", fD.j.Color3[0], this.range, iD), ID && (this.specular.scaleToRef(DD, fD.j.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", fD.j.Color3[1], this.radius, iD)), bD = !0
          }
          if (this.transferTexturesToEffect(cD, iD), CD.shadowsEnabled && this.shadowEnabled && pD) {
            const DD = this.getShadowGenerator(CD.activeCamera) ?? this.getShadowGenerator();
            DD && (DD.bindShadowLight(iD, cD), bD = !0)
          }
          bD ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(DD) {
          let CD = "Name: " + this.name;
          if (CD += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let cD = 0; cD < this.animations.length; cD++) CD += ", animation[0]: " + this.animations[cD].toString(DD);
          return CD
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.jCD() || this._resyncMeshes()
        }
        lH(DD) {
          super.lH(DD), this._resyncMeshes()
        }
        getShadowGenerator() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(DD) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return iD.p.Zero()
        }
        canAffectMesh(DD) {
          return !DD || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(DD)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(DD)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & DD.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & DD.layerMask)))
        }
        dispose(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const DD = this._shadowGenerators.values();
            for (let CD = DD.next(); !0 !== CD.done; CD = DD.next()) {
              CD.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.hq().stopAnimation(this), this._parentContainer) {
            const DD = this._parentContainer.lights.indexOf(this);
            DD > -1 && this._parentContainer.lights.splice(DD, 1), this._parentContainer = null
          }
          for (const cD of this.hq().meshes) cD._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.hq().removeLight(this), super.dispose(DD, CD)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(CD) {
          let cD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const ID = DD.GetConstructorFromName(this.getTypeID(), CD, this.hq());
          if (!ID) return null;
          const pD = BD.d.Clone(ID, this);
          return CD && (pD.name = CD), cD && (pD.parent = cD), pD.lH(this.isEnabled()), this.onClonedObservable.notifyObservers(pD), pD
        }
        serialize() {
          const DD = BD.d.Serialize(this);
          if (DD.uniqueId = this.uniqueId, DD.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(DD), this.excludedMeshes.length > 0) {
            DD.excludedMeshesIds = [];
            for (const CD of this.excludedMeshes) DD.excludedMeshesIds.push(CD.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            DD.includedOnlyMeshesIds = [];
            for (const CD of this.includedOnlyMeshes) DD.includedOnlyMeshesIds.push(CD.id)
          }
          return BD.d.AppendSerializedAnimations(this, DD), DD.df = this.serializeAnimationRanges(), DD.isEnabled = this.isEnabled(), DD
        }
        static GetConstructorFromName(DD, CD, cD) {
          const ID = bD.b.Construct("Light_Type_" + DD, CD, cD);
          return ID || null
        }
        static Parse(CD, cD) {
          let ID = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const pD = DD.GetConstructorFromName(CD.type, CD.name, cD);
          if (!pD) return null;
          const iD = BD.d.Parse(pD, CD, cD, ID);
          if (CD.excludedMeshesIds && (iD._excludedMeshesIds = CD.excludedMeshesIds), CD.includedOnlyMeshesIds && (iD._includedOnlyMeshesIds = CD.includedOnlyMeshesIds), void 0 !== CD.parentId && (iD._waitingParentId = CD.parentId), void 0 !== CD.parentInstanceIndex && (iD._waitingParentInstanceIndex = CD.parentInstanceIndex), void 0 !== CD.falloffType && (iD.falloffType = CD.falloffType), void 0 !== CD.lightmapMode && (iD.lightmapMode = CD.lightmapMode), CD.animations) {
            for (let DD = 0; DD < CD.animations.length; DD++) {
              const cD = CD.animations[DD],
                ID = (0, wD.b)("BABYLON.Animation");
              ID && iD.animations.push(ID.Parse(cD))
            }
            bD.b.ParseAnimationRanges(iD, CD, cD)
          }
          return CD.autoAnimate && cD.beginAnimation(iD, CD.autoAnimateFrom, CD.autoAnimateTo, CD.autoAnimateLoop, CD.autoAnimateSpeed || 1), void 0 !== CD.isEnabled && iD.lH(CD.isEnabled), iD._onParsed(CD, cD, ID), iD
        }
        _onParsed(DD, CD) {}
        _hookArrayForExcluded(DD) {
          var CD = this;
          const cD = DD.push;
          DD.push = function() {
            for (var ID = arguments.length, pD = new Array(ID), iD = 0; iD < ID; iD++) pD[iD] = arguments[iD];
            const fD = cD.apply(DD, pD);
            if (CD._clusteredContainer) return fD;
            for (const DD of pD) DD._resyncLightSource(CD);
            return fD
          };
          const ID = DD.splice;
          DD.splice = (CD, cD) => {
            const pD = ID.call(DD, CD, cD ?? DD.length);
            if (this._clusteredContainer) return pD;
            for (const DD of pD) DD._resyncLightSource(this);
            return pD
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(DD) {
          var CD = this;
          const cD = DD.push;
          DD.push = function() {
            for (var ID = arguments.length, pD = new Array(ID), iD = 0; iD < ID; iD++) pD[iD] = arguments[iD];
            const fD = cD.apply(DD, pD);
            return CD._resyncMeshes(), fD
          };
          const ID = DD.splice;
          DD.splice = (CD, cD) => {
            const pD = ID.call(DD, CD, cD ?? DD.length);
            return this._resyncMeshes(), pD
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const DD of this.hq().meshes) DD._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const DD of this.hq().meshes) - 1 !== DD.lightSources.indexOf(this) && DD._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.hq().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let CD = 0;
          const cD = this.getTypeID();
          let ID = this.intensityMode;
          switch (ID === DD.INTENSITYMODE_AUTOMATIC && (ID = cD === DD.LIGHTTYPEID_DIRECTIONALLIGHT ? DD.INTENSITYMODE_ILLUMINANCE : DD.INTENSITYMODE_LUMINOUSINTENSITY), cD) {
            case DD.LIGHTTYPEID_POINTLIGHT:
            case DD.LIGHTTYPEID_SPOTLIGHT:
              switch (ID) {
                case DD.INTENSITYMODE_LUMINOUSPOWER:
                  CD = 1 / (4 * Math.PI);
                  break;
                case DD.INTENSITYMODE_LUMINOUSINTENSITY:
                  CD = 1;
                  break;
                case DD.INTENSITYMODE_LUMINANCE:
                  CD = this.radius * this.radius
              }
              break;
            case DD.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (ID) {
                case DD.INTENSITYMODE_ILLUMINANCE:
                  CD = 1;
                  break;
                case DD.INTENSITYMODE_LUMINANCE: {
                  let DD = this.radius;
                  DD = Math.max(DD, .001);
                  CD = 2 * Math.PI * (1 - Math.cos(DD));
                  break
                }
              }
              break;
            case DD.LIGHTTYPEID_HEMISPHERICLIGHT:
            case DD.LIGHTTYPEID_RECT_AREALIGHT:
              CD = 1
          }
          return CD
        }
        _reorderLightsInScene() {
          const DD = this.hq();
          0 != this._renderPriority && (DD.requireLightSorting = !0), this.hq().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, CD = new WeakMap, (() => {
        const CD = "function" === typeof Symbol && Symbol.metadata ? Object.create(PD[Symbol.metadata] ?? null) : void 0;
        cD = [(0, pD.l)()], yD = [(0, pD.l)()], MD = [(0, pD.G)()], tD = [(0, pD.G)()], ZD = [(0, pD.G)()], oD = [(0, pD.G)()], vD = [(0, pD.G)()], ND = [(0, pD.G)()], gD = [(0, pD.c)("_reorderLightsInScene")], XD = [(0, pD.G)("shadowEnabled")], mD = [(0, pD.G)("excludeWithLayerMask")], nD = [(0, pD.G)("includeOnlyWithLayerMask")], OD = [(0, pD.G)("lightmapMode")], (0, ID.k)(DD, null, ZD, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: DD => "range" in DD,
            get: DD => DD.range
          },
          metadata: CD
        }, null, HD), (0, ID.k)(DD, null, oD, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: DD => "intensityMode" in DD,
            get: DD => DD.intensityMode
          },
          metadata: CD
        }, null, HD), (0, ID.k)(DD, null, vD, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: DD => "radius" in DD,
            get: DD => DD.radius
          },
          metadata: CD
        }, null, HD), (0, ID.k)(DD, null, gD, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: DD => "renderPriority" in DD,
            get: DD => DD.renderPriority,
            set: (DD, CD) => {
              DD.renderPriority = CD
            }
          },
          metadata: CD
        }, LD, TD), (0, ID.k)(null, null, cD, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: DD => "diffuse" in DD,
            get: DD => DD.diffuse,
            set: (DD, CD) => {
              DD.diffuse = CD
            }
          },
          metadata: CD
        }, UD, xD), (0, ID.k)(null, null, yD, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: DD => "specular" in DD,
            get: DD => DD.specular,
            set: (DD, CD) => {
              DD.specular = CD
            }
          },
          metadata: CD
        }, qD, JD), (0, ID.k)(null, null, MD, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: DD => "falloffType" in DD,
            get: DD => DD.falloffType,
            set: (DD, CD) => {
              DD.falloffType = CD
            }
          },
          metadata: CD
        }, KD, aD), (0, ID.k)(null, null, tD, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: DD => "intensity" in DD,
            get: DD => DD.intensity,
            set: (DD, CD) => {
              DD.intensity = CD
            }
          },
          metadata: CD
        }, VD, zD), (0, ID.k)(null, null, ND, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: DD => "_renderPriority" in DD,
            get: DD => DD._renderPriority,
            set: (DD, CD) => {
              DD._renderPriority = CD
            }
          },
          metadata: CD
        }, jD, lD), (0, ID.k)(null, null, XD, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: DD => "_shadowEnabled" in DD,
            get: DD => DD._shadowEnabled,
            set: (DD, CD) => {
              DD._shadowEnabled = CD
            }
          },
          metadata: CD
        }, GD, RD), (0, ID.k)(null, null, mD, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: DD => "_excludeWithLayerMask" in DD,
            get: DD => DD._excludeWithLayerMask,
            set: (DD, CD) => {
              DD._excludeWithLayerMask = CD
            }
          },
          metadata: CD
        }, kD, dD), (0, ID.k)(null, null, nD, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: DD => "_includeOnlyWithLayerMask" in DD,
            get: DD => DD._includeOnlyWithLayerMask,
            set: (DD, CD) => {
              DD._includeOnlyWithLayerMask = CD
            }
          },
          metadata: CD
        }, YD, WD), (0, ID.k)(null, null, OD, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: DD => "_lightmapMode" in DD,
            get: DD => DD._lightmapMode,
            set: (DD, CD) => {
              DD._lightmapMode = CD
            }
          },
          metadata: CD
        }, sD, ED), CD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: CD
        })
      })(), DD.FALLOFF_DEFAULT = SD.d.FALLOFF_DEFAULT, DD.FALLOFF_PHYSICAL = SD.d.FALLOFF_PHYSICAL, DD.FALLOFF_GLTF = SD.d.FALLOFF_GLTF, DD.FALLOFF_STANDARD = SD.d.FALLOFF_STANDARD, DD.LIGHTMAP_DEFAULT = SD.d.LIGHTMAP_DEFAULT, DD.LIGHTMAP_SPECULAR = SD.d.LIGHTMAP_SPECULAR, DD.LIGHTMAP_SHADOWSONLY = SD.d.LIGHTMAP_SHADOWSONLY, DD.INTENSITYMODE_AUTOMATIC = SD.d.INTENSITYMODE_AUTOMATIC, DD.INTENSITYMODE_LUMINOUSPOWER = SD.d.INTENSITYMODE_LUMINOUSPOWER, DD.INTENSITYMODE_LUMINOUSINTENSITY = SD.d.INTENSITYMODE_LUMINOUSINTENSITY, DD.INTENSITYMODE_ILLUMINANCE = SD.d.INTENSITYMODE_ILLUMINANCE, DD.INTENSITYMODE_LUMINANCE = SD.d.INTENSITYMODE_LUMINANCE, DD.LIGHTTYPEID_POINTLIGHT = SD.d.LIGHTTYPEID_POINTLIGHT, DD.LIGHTTYPEID_DIRECTIONALLIGHT = SD.d.LIGHTTYPEID_DIRECTIONALLIGHT, DD.LIGHTTYPEID_SPOTLIGHT = SD.d.LIGHTTYPEID_SPOTLIGHT, DD.LIGHTTYPEID_HEMISPHERICLIGHT = SD.d.LIGHTTYPEID_HEMISPHERICLIGHT, DD.LIGHTTYPEID_RECT_AREALIGHT = SD.d.LIGHTTYPEID_RECT_AREALIGHT, DD
    })()
  },
  39356: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => BD
    });
    var ID = cD(39154),
      pD = cD(36446),
      iD = cD(39156),
      fD = cD(36473),
      bD = cD(36464),
      QD = cD(39027),
      wD = cD(39174);
    class SD {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new fD.c, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new fD.c, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let BD = (() => {
      var DD;
      let CD, cD, BD, yD, MD, tD = [],
        ZD = [],
        oD = [],
        vD = [],
        ND = [],
        gD = [],
        XD = [],
        mD = [],
        nD = [],
        OD = [];
      return DD = class {
        static AddNodeConstructor(DD, CD) {
          this._NodeConstructors[DD] = CD
        }
        static Construct(DD, CD, cD, ID) {
          const pD = this._NodeConstructors[DD];
          return pD ? pD(CD, cD, ID) : null
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
        jCD() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(DD) {
          if (this._parentNode === DD) return;
          const CD = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const CD = this._parentNode._children.indexOf(this); - 1 !== CD && this._parentNode._children.splice(CD, 1), DD || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = DD, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), CD || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
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
              CD = DD.length - 1;
            DD[this._nodeDataStorage._sceneRootNodesIndex] = DD[CD], DD[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
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
          this._onDisposeObserver && this.Aq.remove(this._onDisposeObserver), this._onDisposeObserver = this.Aq.add(DD)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var DD;
          return (DD = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (DD._onEffectiveEnabledStateChangedObservable = new fD.c)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            cD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new SD, this.name = (0, ID.m)(this, tD, void 0), this.id = ((0, ID.m)(this, ZD), (0, ID.m)(this, oD, void 0)), this.uniqueId = ((0, ID.m)(this, vD), (0, ID.m)(this, ND, void 0)), this.state = ((0, ID.m)(this, gD), (0, ID.m)(this, XD, "")), this.metadata = ((0, ID.m)(this, mD), (0, ID.m)(this, nD, null)), this._internalMetadata = (0, ID.m)(this, OD), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new fD.c, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = pD.d.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.Aq = new fD.c, this._onDisposeObserver = null, this._behaviors = new Array, this.name = DD, this.id = DD, this._scene = CD || bD.b.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), cD && this._addToSceneRootNodes()
        }
        hq() {
          return this._scene
        }
        DZ() {
          return this._scene.DZ()
        }
        addBehavior(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(DD) || (DD.init(), this._scene.isLoading && !CD ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(DD) && DD.attach(this)
          })) : DD.attach(this), this._behaviors.push(DD)), this
        }
        removeBehavior(DD) {
          const CD = this._behaviors.indexOf(DD);
          return -1 === CD || (this._behaviors.splice(CD, 1), DD.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(DD) {
          for (const CD of this._behaviors)
            if (CD.name === DD) return CD;
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
        sDD(DD) {
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
            CD = DD ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const cD of this._children) cD._syncParentEnabledState();
          if (DD) {
            const DD = this.isEnabled();
            DD !== CD && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(DD)
          }
        }
        lH(DD) {
          if (this._nodeDataStorage._isEnabled === DD) return;
          const CD = this._hasEffectiveEnabledStateObservers(),
            cD = CD ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = DD, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(DD), CD) {
            const DD = this.isEnabled();
            DD !== cD && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(DD)
          }
        }
        isDescendantOf(DD) {
          return !!this.parent && (this.parent === DD || this.parent.isDescendantOf(DD))
        }
        _getDescendants(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            cD = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let ID = 0; ID < this._children.length; ID++) {
              const pD = this._children[ID];
              cD && !cD(pD) || DD.push(pD), CD || pD._getDescendants(DD, !1, cD)
            }
        }
        getDescendants(DD, CD) {
          const cD = [];
          return this._getDescendants(cD, DD, CD), cD
        }
        getChildMeshes(DD, CD) {
          const cD = [];
          return this._getDescendants(cD, DD, (DD => (!CD || CD(DD)) && void 0 !== DD.cullingStrategy)), cD
        }
        getChildren(DD) {
          let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(CD, DD)
        }
        _setReady(DD) {
          DD !== this._nodeDataStorage._isReady && (DD ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(DD) {
          for (let CD = 0; CD < this.animations.length; CD++) {
            const cD = this.animations[CD];
            if (cD.name === DD) return cD
          }
          return null
        }
        createAnimationRange(CD, cD, ID) {
          if (!this._ranges[CD]) {
            this._ranges[CD] = DD._AnimationRangeFactory(CD, cD, ID);
            for (let DD = 0, pD = this.animations.length; DD < pD; DD++) this.animations[DD] && this.animations[DD].createRange(CD, cD, ID)
          }
        }
        deleteAnimationRange(DD) {
          let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let cD = 0, ID = this.animations.length; cD < ID; cD++) this.animations[cD] && this.animations[cD].deleteRange(DD, CD);
          this._ranges[DD] = null
        }
        getAnimationRange(DD) {
          return this._ranges[DD] || null
        }
        clone(CD, cD, ID) {
          const pD = wD.d.Clone((() => new DD(CD, this.hq())), this);
          if (cD && (pD.parent = cD), !ID) {
            const DD = this.getDescendants(!0);
            for (let cD = 0; cD < DD.length; cD++) {
              const ID = DD[cD];
              ID.clone(CD + "." + ID.name, pD)
            }
          }
          return pD
        }
        getAnimationRanges() {
          const DD = [];
          let CD;
          for (CD in this._ranges) DD.push(this._ranges[CD]);
          return DD
        }
        beginAnimation(DD, CD, cD, ID) {
          const pD = this.getAnimationRange(DD);
          return pD ? this._scene.beginAnimation(this, pD.from, pD.to, CD, cD, ID) : null
        }
        serializeAnimationRanges() {
          const DD = [];
          for (const CD in this._ranges) {
            const cD = this._ranges[CD];
            if (!cD) continue;
            const ID = {};
            ID.name = CD, ID.from = cD.from, ID.to = cD.to, DD.push(ID)
          }
          return DD
        }
        computeWorldMatrix(DD) {
          return this._worldMatrix || (this._worldMatrix = pD.d.Identity()), this._worldMatrix
        }
        dispose(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !DD) {
            const cD = this.getDescendants(!0);
            for (const ID of cD) ID.dispose(DD, CD)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.Aq.notifyObservers(this), this.Aq.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const cD of this._behaviors) cD.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(DD, CD, cD) {
          if (CD.df)
            for (let ID = 0; ID < CD.df.length; ID++) {
              const cD = CD.df[ID];
              DD.createAnimationRange(cD.name, cD.from, cD.to)
            }
        }
        getHierarchyBoundingVectors() {
          let DD, CD, cD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            ID = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.hq().incrementRenderId(), this.computeWorldMatrix(!0);
          const iD = this;
          if (iD.VJ && iD.IH) {
            const cD = iD.VJ();
            DD = cD.boundingBox.minimumWorld.clone(), CD = cD.boundingBox.maximumWorld.clone()
          } else DD = new pD.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), CD = new pD.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (cD) {
            const cD = this.getDescendants(!1);
            for (const iD of cD) {
              const cD = iD;
              if (cD.computeWorldMatrix(!0), ID && !ID(cD)) continue;
              if (!cD.VJ || 0 === cD.getTotalVertices()) continue;
              const fD = cD.VJ().boundingBox,
                bD = fD.minimumWorld,
                QD = fD.maximumWorld;
              pD.p.CheckExtends(bD, DD, CD), pD.p.CheckExtends(QD, DD, CD)
            }
          }
          return {
            min: DD,
            max: CD
          }
        }
      }, (() => {
        const pD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        CD = [(0, iD.G)()], cD = [(0, iD.G)()], BD = [(0, iD.G)()], yD = [(0, iD.G)()], MD = [(0, iD.G)()], (0, ID.k)(null, null, CD, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: DD => "name" in DD,
            get: DD => DD.name,
            set: (DD, CD) => {
              DD.name = CD
            }
          },
          metadata: pD
        }, tD, ZD), (0, ID.k)(null, null, cD, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: DD => "id" in DD,
            get: DD => DD.id,
            set: (DD, CD) => {
              DD.id = CD
            }
          },
          metadata: pD
        }, oD, vD), (0, ID.k)(null, null, BD, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: DD => "uniqueId" in DD,
            get: DD => DD.uniqueId,
            set: (DD, CD) => {
              DD.uniqueId = CD
            }
          },
          metadata: pD
        }, ND, gD), (0, ID.k)(null, null, yD, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: DD => "state" in DD,
            get: DD => DD.state,
            set: (DD, CD) => {
              DD.state = CD
            }
          },
          metadata: pD
        }, XD, mD), (0, ID.k)(null, null, MD, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: DD => "metadata" in DD,
            get: DD => DD.metadata,
            set: (DD, CD) => {
              DD.metadata = CD
            }
          },
          metadata: pD
        }, nD, OD), pD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: pD
        })
      })(), DD._AnimationRangeFactory = (DD, CD, cD) => {
        throw (0, QD.m)("AnimationRange")
      }, DD._NodeConstructors = {}, DD
    })()
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);