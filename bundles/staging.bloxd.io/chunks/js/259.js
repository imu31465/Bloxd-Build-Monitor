export const id = 259;
export const ids = [259];
export const modules = {
  40304: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => kS
    });
    var tS = gS(40041),
      bS = gS(40048),
      XS = gS(37117),
      xS = gS(37300),
      NS = gS(40256),
      qS = gS(40169),
      uS = gS(37164),
      IS = gS(40229),
      fS = gS(40068);
    let kS = (() => {
      var SS, HS;
      let gS, kS, aS, KS, jS, GS, CS, nS, PS, QS, DS, wS, hS, ZS = NS.e,
        JS = [],
        OS = [],
        dS = [],
        cS = [],
        vS = [],
        ES = [],
        LS = [],
        YS = [],
        AS = [],
        yS = [],
        VS = [],
        iS = [],
        WS = [],
        zS = [],
        US = [],
        pS = [],
        sS = [],
        BS = [],
        MS = [],
        FS = [],
        RS = [];
      return SS = class extends ZS {
        get range() {
          return this._range
        }
        set range(SS) {
          this._range = SS, this._inverseSquaredRange = 1 / (this.range * this.range)
        }
        get intensityMode() {
          return this._intensityMode
        }
        set intensityMode(SS) {
          this._intensityMode = SS, this._computePhotometricScale()
        }
        get radius() {
          return this._radius
        }
        set radius(SS) {
          this._radius = SS, this._computePhotometricScale()
        }
        get renderPriority() {
          return (0, tS.e)(this, HS, "f")
        }
        set renderPriority(SS) {
          (0, tS.h)(this, HS, SS, "f")
        }
        get shadowEnabled() {
          return this._shadowEnabled
        }
        set shadowEnabled(SS) {
          this._shadowEnabled !== SS && (this._shadowEnabled = SS, this._markMeshesAsLightDirty())
        }
        get includedOnlyMeshes() {
          return this._includedOnlyMeshes
        }
        set includedOnlyMeshes(SS) {
          this._includedOnlyMeshes = SS, this._hookArrayForIncludedOnly(SS)
        }
        get excludedMeshes() {
          return this._excludedMeshes
        }
        set excludedMeshes(SS) {
          this._excludedMeshes = SS, this._hookArrayForExcluded(SS)
        }
        get excludeWithLayerMask() {
          return this._excludeWithLayerMask
        }
        set excludeWithLayerMask(SS) {
          this._excludeWithLayerMask = SS, this._resyncMeshes()
        }
        get includeOnlyWithLayerMask() {
          return this._includeOnlyWithLayerMask
        }
        set includeOnlyWithLayerMask(SS) {
          this._includeOnlyWithLayerMask = SS, this._resyncMeshes()
        }
        get lightmapMode() {
          return this._lightmapMode
        }
        set lightmapMode(SS) {
          this._lightmapMode !== SS && (this._lightmapMode = SS, this._markMeshesAsLightDirty())
        }
        getViewMatrix(SS) {
          return null
        }
        getProjectionMatrix(SS, HS) {
          return null
        }
        constructor(gS, bS, XS) {
          super(gS, bS, !1), this.diffuse = ((0, tS.k)(this, JS), (0, tS.k)(this, OS, new xS.b(1, 1, 1))), this.specular = ((0, tS.k)(this, dS), (0, tS.k)(this, cS, new xS.b(1, 1, 1))), this.falloffType = ((0, tS.k)(this, vS), (0, tS.k)(this, ES, SS.FALLOFF_DEFAULT)), this.intensity = ((0, tS.k)(this, LS), (0, tS.k)(this, YS, 1)), this._range = ((0, tS.k)(this, AS), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = SS.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, tS.k)(this, yS, void 0), HS.set(this, ((0, tS.k)(this, VS), (0, tS.k)(this, iS, 0))), this._shadowEnabled = ((0, tS.k)(this, WS), (0, tS.k)(this, zS, !0)), this._includedOnlyMeshes = (0, tS.k)(this, US), this._excludeWithLayerMask = (0, tS.k)(this, pS, 0), this._includeOnlyWithLayerMask = ((0, tS.k)(this, sS), (0, tS.k)(this, BS, 0)), this._lightmapMode = ((0, tS.k)(this, MS), (0, tS.k)(this, FS, 0)), this._shadowGenerators = ((0, tS.k)(this, RS), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, XS || this.lL().addLight(this), this._uniformBuffer = new qS.c(this.lL().AK(), void 0, void 0, gS), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], XS || this._resyncMeshes()
        }
        transferTexturesToEffect(SS, HS) {
          return this
        }
        _bindLight(SS, HS, gS, tS) {
          let bS = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const XS = SS.toString();
          let NS = !1;
          if (this._uniformBuffer.bindToEffect(gS, "Light" + XS), this._renderId !== HS.getRenderId() || this._lastUseSpecular !== tS || !this._uniformBuffer.useUbo) {
            this._renderId = HS.getRenderId(), this._lastUseSpecular = tS;
            const SS = this.getScaledIntensity();
            this.transferToEffect(gS, XS), this.diffuse.scaleToRef(SS, xS.i.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", xS.i.Color3[0], this.range, XS), tS && (this.specular.scaleToRef(SS, xS.i.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", xS.i.Color3[1], this.radius, XS)), NS = !0
          }
          if (this.transferTexturesToEffect(gS, XS), HS.shadowsEnabled && this.shadowEnabled && bS) {
            const SS = this.getShadowGenerator(HS.activeCamera) ?? this.getShadowGenerator();
            SS && (SS.bindShadowLight(XS, gS), NS = !0)
          }
          NS ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(SS) {
          let HS = "Name: " + this.name;
          if (HS += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let gS = 0; gS < this.animations.length; gS++) HS += ", animation[0]: " + this.animations[gS].toString(SS);
          return HS
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.Ow() || this._resyncMeshes()
        }
        MJ(SS) {
          super.MJ(SS), this._resyncMeshes()
        }
        getShadowGenerator() {
          let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(SS) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return XS.n.Zero()
        }
        canAffectMesh(SS) {
          return !SS || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(SS)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(SS)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & SS.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & SS.layerMask)))
        }
        dispose(SS) {
          let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const SS = this._shadowGenerators.values();
            for (let HS = SS.next(); !0 !== HS.done; HS = SS.next()) {
              HS.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.lL().stopAnimation(this), this._parentContainer) {
            const SS = this._parentContainer.lights.indexOf(this);
            SS > -1 && this._parentContainer.lights.splice(SS, 1), this._parentContainer = null
          }
          for (const gS of this.lL().meshes) gS._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.lL().removeLight(this), super.dispose(SS, HS)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(HS) {
          let gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const tS = SS.GetConstructorFromName(this.getTypeID(), HS, this.lL());
          if (!tS) return null;
          const bS = fS.b.Clone(tS, this);
          return HS && (bS.name = HS), gS && (bS.parent = gS), bS.MJ(this.isEnabled()), this.onClonedObservable.notifyObservers(bS), bS
        }
        serialize() {
          const SS = fS.b.Serialize(this);
          if (SS.uniqueId = this.uniqueId, SS.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(SS), this.excludedMeshes.length > 0) {
            SS.excludedMeshesIds = [];
            for (const HS of this.excludedMeshes) SS.excludedMeshesIds.push(HS.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            SS.includedOnlyMeshesIds = [];
            for (const HS of this.includedOnlyMeshes) SS.includedOnlyMeshesIds.push(HS.id)
          }
          return fS.b.AppendSerializedAnimations(this, SS), SS.HG = this.serializeAnimationRanges(), SS.isEnabled = this.isEnabled(), SS
        }
        static GetConstructorFromName(SS, HS, gS) {
          const tS = NS.e.Construct("Light_Type_" + SS, HS, gS);
          return tS || null
        }
        static Parse(HS, gS) {
          let tS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const bS = SS.GetConstructorFromName(HS.type, HS.name, gS);
          if (!bS) return null;
          const XS = fS.b.Parse(bS, HS, gS, tS);
          if (HS.excludedMeshesIds && (XS._excludedMeshesIds = HS.excludedMeshesIds), HS.includedOnlyMeshesIds && (XS._includedOnlyMeshesIds = HS.includedOnlyMeshesIds), void 0 !== HS.parentId && (XS._waitingParentId = HS.parentId), void 0 !== HS.parentInstanceIndex && (XS._waitingParentInstanceIndex = HS.parentInstanceIndex), void 0 !== HS.falloffType && (XS.falloffType = HS.falloffType), void 0 !== HS.lightmapMode && (XS.lightmapMode = HS.lightmapMode), HS.animations) {
            for (let SS = 0; SS < HS.animations.length; SS++) {
              const gS = HS.animations[SS],
                tS = (0, uS.d)("BABYLON.Animation");
              tS && XS.animations.push(tS.Parse(gS))
            }
            NS.e.ParseAnimationRanges(XS, HS, gS)
          }
          return HS.autoAnimate && gS.beginAnimation(XS, HS.autoAnimateFrom, HS.autoAnimateTo, HS.autoAnimateLoop, HS.autoAnimateSpeed || 1), void 0 !== HS.isEnabled && XS.MJ(HS.isEnabled), XS._onParsed(HS, gS, tS), XS
        }
        _onParsed(SS, HS) {}
        _hookArrayForExcluded(SS) {
          var HS = this;
          const gS = SS.push;
          SS.push = function() {
            for (var tS = arguments.length, bS = new Array(tS), XS = 0; XS < tS; XS++) bS[XS] = arguments[XS];
            const xS = gS.apply(SS, bS);
            if (HS._clusteredContainer) return xS;
            for (const SS of bS) SS._resyncLightSource(HS);
            return xS
          };
          const tS = SS.splice;
          SS.splice = (HS, gS) => {
            const bS = tS.call(SS, HS, gS ?? SS.length);
            if (this._clusteredContainer) return bS;
            for (const SS of bS) SS._resyncLightSource(this);
            return bS
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(SS) {
          var HS = this;
          const gS = SS.push;
          SS.push = function() {
            for (var tS = arguments.length, bS = new Array(tS), XS = 0; XS < tS; XS++) bS[XS] = arguments[XS];
            const xS = gS.apply(SS, bS);
            return HS._resyncMeshes(), xS
          };
          const tS = SS.splice;
          SS.splice = (HS, gS) => {
            const bS = tS.call(SS, HS, gS ?? SS.length);
            return this._resyncMeshes(), bS
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const SS of this.lL().meshes) SS._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const SS of this.lL().meshes) - 1 !== SS.lightSources.indexOf(this) && SS._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.lL().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let HS = 0;
          const gS = this.getTypeID();
          let tS = this.intensityMode;
          switch (tS === SS.INTENSITYMODE_AUTOMATIC && (tS = gS === SS.LIGHTTYPEID_DIRECTIONALLIGHT ? SS.INTENSITYMODE_ILLUMINANCE : SS.INTENSITYMODE_LUMINOUSINTENSITY), gS) {
            case SS.LIGHTTYPEID_POINTLIGHT:
            case SS.LIGHTTYPEID_SPOTLIGHT:
              switch (tS) {
                case SS.INTENSITYMODE_LUMINOUSPOWER:
                  HS = 1 / (4 * Math.PI);
                  break;
                case SS.INTENSITYMODE_LUMINOUSINTENSITY:
                  HS = 1;
                  break;
                case SS.INTENSITYMODE_LUMINANCE:
                  HS = this.radius * this.radius
              }
              break;
            case SS.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (tS) {
                case SS.INTENSITYMODE_ILLUMINANCE:
                  HS = 1;
                  break;
                case SS.INTENSITYMODE_LUMINANCE: {
                  let SS = this.radius;
                  SS = Math.max(SS, .001);
                  HS = 2 * Math.PI * (1 - Math.cos(SS));
                  break
                }
              }
              break;
            case SS.LIGHTTYPEID_HEMISPHERICLIGHT:
            case SS.LIGHTTYPEID_RECT_AREALIGHT:
              HS = 1
          }
          return HS
        }
        _reorderLightsInScene() {
          const SS = this.lL();
          0 != this._renderPriority && (SS.requireLightSorting = !0), this.lL().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, HS = new WeakMap, (() => {
        const HS = "function" === typeof Symbol && Symbol.metadata ? Object.create(ZS[Symbol.metadata] ?? null) : void 0;
        gS = [(0, bS.k)()], kS = [(0, bS.k)()], aS = [(0, bS.M)()], KS = [(0, bS.M)()], jS = [(0, bS.M)()], GS = [(0, bS.M)()], CS = [(0, bS.M)()], nS = [(0, bS.M)()], PS = [(0, bS.d)("_reorderLightsInScene")], QS = [(0, bS.M)("shadowEnabled")], DS = [(0, bS.M)("excludeWithLayerMask")], wS = [(0, bS.M)("includeOnlyWithLayerMask")], hS = [(0, bS.M)("lightmapMode")], (0, tS.j)(SS, null, jS, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: SS => "range" in SS,
            get: SS => SS.range
          },
          metadata: HS
        }, null, JS), (0, tS.j)(SS, null, GS, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: SS => "intensityMode" in SS,
            get: SS => SS.intensityMode
          },
          metadata: HS
        }, null, JS), (0, tS.j)(SS, null, CS, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: SS => "radius" in SS,
            get: SS => SS.radius
          },
          metadata: HS
        }, null, JS), (0, tS.j)(SS, null, PS, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: SS => "renderPriority" in SS,
            get: SS => SS.renderPriority,
            set: (SS, HS) => {
              SS.renderPriority = HS
            }
          },
          metadata: HS
        }, iS, WS), (0, tS.j)(null, null, gS, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: SS => "diffuse" in SS,
            get: SS => SS.diffuse,
            set: (SS, HS) => {
              SS.diffuse = HS
            }
          },
          metadata: HS
        }, OS, dS), (0, tS.j)(null, null, kS, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: SS => "specular" in SS,
            get: SS => SS.specular,
            set: (SS, HS) => {
              SS.specular = HS
            }
          },
          metadata: HS
        }, cS, vS), (0, tS.j)(null, null, aS, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: SS => "falloffType" in SS,
            get: SS => SS.falloffType,
            set: (SS, HS) => {
              SS.falloffType = HS
            }
          },
          metadata: HS
        }, ES, LS), (0, tS.j)(null, null, KS, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: SS => "intensity" in SS,
            get: SS => SS.intensity,
            set: (SS, HS) => {
              SS.intensity = HS
            }
          },
          metadata: HS
        }, YS, AS), (0, tS.j)(null, null, nS, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: SS => "_renderPriority" in SS,
            get: SS => SS._renderPriority,
            set: (SS, HS) => {
              SS._renderPriority = HS
            }
          },
          metadata: HS
        }, yS, VS), (0, tS.j)(null, null, QS, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: SS => "_shadowEnabled" in SS,
            get: SS => SS._shadowEnabled,
            set: (SS, HS) => {
              SS._shadowEnabled = HS
            }
          },
          metadata: HS
        }, zS, US), (0, tS.j)(null, null, DS, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: SS => "_excludeWithLayerMask" in SS,
            get: SS => SS._excludeWithLayerMask,
            set: (SS, HS) => {
              SS._excludeWithLayerMask = HS
            }
          },
          metadata: HS
        }, pS, sS), (0, tS.j)(null, null, wS, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: SS => "_includeOnlyWithLayerMask" in SS,
            get: SS => SS._includeOnlyWithLayerMask,
            set: (SS, HS) => {
              SS._includeOnlyWithLayerMask = HS
            }
          },
          metadata: HS
        }, BS, MS), (0, tS.j)(null, null, hS, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: SS => "_lightmapMode" in SS,
            get: SS => SS._lightmapMode,
            set: (SS, HS) => {
              SS._lightmapMode = HS
            }
          },
          metadata: HS
        }, FS, RS), HS && Object.defineProperty(SS, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: HS
        })
      })(), SS.FALLOFF_DEFAULT = IS.e.FALLOFF_DEFAULT, SS.FALLOFF_PHYSICAL = IS.e.FALLOFF_PHYSICAL, SS.FALLOFF_GLTF = IS.e.FALLOFF_GLTF, SS.FALLOFF_STANDARD = IS.e.FALLOFF_STANDARD, SS.LIGHTMAP_DEFAULT = IS.e.LIGHTMAP_DEFAULT, SS.LIGHTMAP_SPECULAR = IS.e.LIGHTMAP_SPECULAR, SS.LIGHTMAP_SHADOWSONLY = IS.e.LIGHTMAP_SHADOWSONLY, SS.INTENSITYMODE_AUTOMATIC = IS.e.INTENSITYMODE_AUTOMATIC, SS.INTENSITYMODE_LUMINOUSPOWER = IS.e.INTENSITYMODE_LUMINOUSPOWER, SS.INTENSITYMODE_LUMINOUSINTENSITY = IS.e.INTENSITYMODE_LUMINOUSINTENSITY, SS.INTENSITYMODE_ILLUMINANCE = IS.e.INTENSITYMODE_ILLUMINANCE, SS.INTENSITYMODE_LUMINANCE = IS.e.INTENSITYMODE_LUMINANCE, SS.LIGHTTYPEID_POINTLIGHT = IS.e.LIGHTTYPEID_POINTLIGHT, SS.LIGHTTYPEID_DIRECTIONALLIGHT = IS.e.LIGHTTYPEID_DIRECTIONALLIGHT, SS.LIGHTTYPEID_SPOTLIGHT = IS.e.LIGHTTYPEID_SPOTLIGHT, SS.LIGHTTYPEID_HEMISPHERICLIGHT = IS.e.LIGHTTYPEID_HEMISPHERICLIGHT, SS.LIGHTTYPEID_RECT_AREALIGHT = IS.e.LIGHTTYPEID_RECT_AREALIGHT, SS
    })()
  },
  40256: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => fS
    });
    var tS = gS(40041),
      bS = gS(37117),
      XS = gS(40048),
      xS = gS(37144),
      NS = gS(37138),
      qS = gS(39926),
      uS = gS(40068);
    class IS {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new xS.e, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new xS.e, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let fS = (() => {
      var SS;
      let HS, gS, fS, kS, aS, KS = [],
        jS = [],
        GS = [],
        CS = [],
        nS = [],
        PS = [],
        QS = [],
        DS = [],
        wS = [],
        hS = [];
      return SS = class {
        static AddNodeConstructor(SS, HS) {
          this._NodeConstructors[SS] = HS
        }
        static Construct(SS, HS, gS, tS) {
          const bS = this._NodeConstructors[SS];
          return bS ? bS(HS, gS, tS) : null
        }
        set accessibilityTag(SS) {
          this._accessibilityTag = SS, this.onAccessibilityTagChangedObservable.notifyObservers(SS)
        }
        get accessibilityTag() {
          return this._accessibilityTag
        }
        get doNotSerialize() {
          return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
        }
        set doNotSerialize(SS) {
          this._nodeDataStorage._doNotSerialize = SS
        }
        Ow() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(SS) {
          if (this._parentNode === SS) return;
          const HS = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const HS = this._parentNode._children.indexOf(this); - 1 !== HS && this._parentNode._children.splice(HS, 1), SS || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = SS, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), HS || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
        }
        get parent() {
          return this._parentNode
        }
        get inheritVisibility() {
          return this._nodeDataStorage._inheritVisibility
        }
        set inheritVisibility(SS) {
          this._nodeDataStorage._inheritVisibility = SS
        }
        get isVisible() {
          return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
        }
        set isVisible(SS) {
          this._nodeDataStorage._isVisible = SS
        }
        _serializeAsParent(SS) {
          SS.parentId = this.uniqueId
        }
        _addToSceneRootNodes() {
          -1 === this._nodeDataStorage._sceneRootNodesIndex && (this._nodeDataStorage._sceneRootNodesIndex = this._scene.rootNodes.length, this._scene.rootNodes.push(this))
        }
        _removeFromSceneRootNodes() {
          if (-1 !== this._nodeDataStorage._sceneRootNodesIndex) {
            const SS = this._scene.rootNodes,
              HS = SS.length - 1;
            SS[this._nodeDataStorage._sceneRootNodesIndex] = SS[HS], SS[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
          }
        }
        get animationPropertiesOverride() {
          return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
        }
        set animationPropertiesOverride(SS) {
          this._animationPropertiesOverride = SS
        }
        getClassName() {
          return "Node"
        }
        set onDispose(SS) {
          this._onDisposeObserver && this.bY.remove(this._onDisposeObserver), this._onDisposeObserver = this.bY.add(SS)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var SS;
          return (SS = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (SS._onEffectiveEnabledStateChangedObservable = new xS.e)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(SS) {
          let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            gS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new IS, this.name = (0, tS.k)(this, KS, void 0), this.id = ((0, tS.k)(this, jS), (0, tS.k)(this, GS, void 0)), this.uniqueId = ((0, tS.k)(this, CS), (0, tS.k)(this, nS, void 0)), this.state = ((0, tS.k)(this, PS), (0, tS.k)(this, QS, "")), this.metadata = ((0, tS.k)(this, DS), (0, tS.k)(this, wS, null)), this._internalMetadata = (0, tS.k)(this, hS), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new xS.e, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = bS.e.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.bY = new xS.e, this._onDisposeObserver = null, this._behaviors = new Array, this.name = SS, this.id = SS, this._scene = HS || NS.d.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), gS && this._addToSceneRootNodes()
        }
        lL() {
          return this._scene
        }
        AK() {
          return this._scene.AK()
        }
        addBehavior(SS) {
          let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(SS) || (SS.init(), this._scene.isLoading && !HS ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(SS) && SS.attach(this)
          })) : SS.attach(this), this._behaviors.push(SS)), this
        }
        removeBehavior(SS) {
          const HS = this._behaviors.indexOf(SS);
          return -1 === HS || (this._behaviors.splice(HS, 1), SS.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(SS) {
          for (const HS of this._behaviors)
            if (HS.name === SS) return HS;
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
        updateCache(SS) {
          !SS && this.isSynchronized() || this._updateCache()
        }
        _getActionManagerForTrigger(SS) {
          return this.parent ? this.parent._getActionManagerForTrigger(SS, !1) : null
        }
        _updateCache(SS) {}
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
        OHS(SS) {
          return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this
        }
        isEnabled() {
          return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled
        }
        _hasEffectiveEnabledStateObservers() {
          const SS = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
          return !!SS && SS.hasObservers()
        }
        _syncParentEnabledState() {
          const SS = this._hasEffectiveEnabledStateObservers(),
            HS = SS ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const gS of this._children) gS._syncParentEnabledState();
          if (SS) {
            const SS = this.isEnabled();
            SS !== HS && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(SS)
          }
        }
        MJ(SS) {
          if (this._nodeDataStorage._isEnabled === SS) return;
          const HS = this._hasEffectiveEnabledStateObservers(),
            gS = HS ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = SS, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(SS), HS) {
            const SS = this.isEnabled();
            SS !== gS && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(SS)
          }
        }
        isDescendantOf(SS) {
          return !!this.parent && (this.parent === SS || this.parent.isDescendantOf(SS))
        }
        _getDescendants(SS) {
          let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            gS = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let tS = 0; tS < this._children.length; tS++) {
              const bS = this._children[tS];
              gS && !gS(bS) || SS.push(bS), HS || bS._getDescendants(SS, !1, gS)
            }
        }
        getDescendants(SS, HS) {
          const gS = [];
          return this._getDescendants(gS, SS, HS), gS
        }
        getChildMeshes(SS, HS) {
          const gS = [];
          return this._getDescendants(gS, SS, (SS => (!HS || HS(SS)) && void 0 !== SS.cullingStrategy)), gS
        }
        getChildren(SS) {
          let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(HS, SS)
        }
        _setReady(SS) {
          SS !== this._nodeDataStorage._isReady && (SS ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(SS) {
          for (let HS = 0; HS < this.animations.length; HS++) {
            const gS = this.animations[HS];
            if (gS.name === SS) return gS
          }
          return null
        }
        createAnimationRange(HS, gS, tS) {
          if (!this._ranges[HS]) {
            this._ranges[HS] = SS._AnimationRangeFactory(HS, gS, tS);
            for (let SS = 0, bS = this.animations.length; SS < bS; SS++) this.animations[SS] && this.animations[SS].createRange(HS, gS, tS)
          }
        }
        deleteAnimationRange(SS) {
          let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let gS = 0, tS = this.animations.length; gS < tS; gS++) this.animations[gS] && this.animations[gS].deleteRange(SS, HS);
          this._ranges[SS] = null
        }
        getAnimationRange(SS) {
          return this._ranges[SS] || null
        }
        clone(HS, gS, tS) {
          const bS = uS.b.Clone((() => new SS(HS, this.lL())), this);
          if (gS && (bS.parent = gS), !tS) {
            const SS = this.getDescendants(!0);
            for (let gS = 0; gS < SS.length; gS++) {
              const tS = SS[gS];
              tS.clone(HS + "." + tS.name, bS)
            }
          }
          return bS
        }
        getAnimationRanges() {
          const SS = [];
          let HS;
          for (HS in this._ranges) SS.push(this._ranges[HS]);
          return SS
        }
        beginAnimation(SS, HS, gS, tS) {
          const bS = this.getAnimationRange(SS);
          return bS ? this._scene.beginAnimation(this, bS.from, bS.to, HS, gS, tS) : null
        }
        serializeAnimationRanges() {
          const SS = [];
          for (const HS in this._ranges) {
            const gS = this._ranges[HS];
            if (!gS) continue;
            const tS = {};
            tS.name = HS, tS.from = gS.from, tS.to = gS.to, SS.push(tS)
          }
          return SS
        }
        computeWorldMatrix(SS) {
          return this._worldMatrix || (this._worldMatrix = bS.e.Identity()), this._worldMatrix
        }
        dispose(SS) {
          let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !SS) {
            const gS = this.getDescendants(!0);
            for (const tS of gS) tS.dispose(SS, HS)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.bY.notifyObservers(this), this.bY.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const gS of this._behaviors) gS.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(SS, HS, gS) {
          if (HS.HG)
            for (let tS = 0; tS < HS.HG.length; tS++) {
              const gS = HS.HG[tS];
              SS.createAnimationRange(gS.name, gS.from, gS.to)
            }
        }
        getHierarchyBoundingVectors() {
          let SS, HS, gS = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            tS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.lL().incrementRenderId(), this.computeWorldMatrix(!0);
          const XS = this;
          if (XS.hA && XS.dD) {
            const gS = XS.hA();
            SS = gS.boundingBox.minimumWorld.clone(), HS = gS.boundingBox.maximumWorld.clone()
          } else SS = new bS.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), HS = new bS.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (gS) {
            const gS = this.getDescendants(!1);
            for (const XS of gS) {
              const gS = XS;
              if (gS.computeWorldMatrix(!0), tS && !tS(gS)) continue;
              if (!gS.hA || 0 === gS.getTotalVertices()) continue;
              const xS = gS.hA().boundingBox,
                NS = xS.minimumWorld,
                qS = xS.maximumWorld;
              bS.n.CheckExtends(NS, SS, HS), bS.n.CheckExtends(qS, SS, HS)
            }
          }
          return {
            min: SS,
            max: HS
          }
        }
      }, (() => {
        const bS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        HS = [(0, XS.M)()], gS = [(0, XS.M)()], fS = [(0, XS.M)()], kS = [(0, XS.M)()], aS = [(0, XS.M)()], (0, tS.j)(null, null, HS, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: SS => "name" in SS,
            get: SS => SS.name,
            set: (SS, HS) => {
              SS.name = HS
            }
          },
          metadata: bS
        }, KS, jS), (0, tS.j)(null, null, gS, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: SS => "id" in SS,
            get: SS => SS.id,
            set: (SS, HS) => {
              SS.id = HS
            }
          },
          metadata: bS
        }, GS, CS), (0, tS.j)(null, null, fS, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: SS => "uniqueId" in SS,
            get: SS => SS.uniqueId,
            set: (SS, HS) => {
              SS.uniqueId = HS
            }
          },
          metadata: bS
        }, nS, PS), (0, tS.j)(null, null, kS, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: SS => "state" in SS,
            get: SS => SS.state,
            set: (SS, HS) => {
              SS.state = HS
            }
          },
          metadata: bS
        }, QS, DS), (0, tS.j)(null, null, aS, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: SS => "metadata" in SS,
            get: SS => SS.metadata,
            set: (SS, HS) => {
              SS.metadata = HS
            }
          },
          metadata: bS
        }, wS, hS), bS && Object.defineProperty(SS, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bS
        })
      })(), SS._AnimationRangeFactory = (SS, HS, gS) => {
        throw (0, qS.l)("AnimationRange")
      }, SS._NodeConstructors = {}, SS
    })()
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);