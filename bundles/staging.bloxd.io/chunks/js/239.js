export const id = 239;
export const ids = [239];
export const modules = {
  39016: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => LB
    });
    var VB = dB(38745),
      yB = dB(38750),
      pB = dB(36126),
      lB = dB(36183),
      JB = dB(38980),
      YB = dB(38880),
      gB = dB(36166),
      oB = dB(38960),
      kB = dB(38772);
    let LB = (() => {
      var BB, TB;
      let dB, LB, OB, DB, uB, HB, EB, vB, mB, iB, NB, tB, fB, sB = JB.e,
        MB = [],
        zB = [],
        wB = [],
        UB = [],
        FB = [],
        KB = [],
        rB = [],
        IB = [],
        cB = [],
        SB = [],
        PB = [],
        QB = [],
        RB = [],
        aB = [],
        ZB = [],
        XB = [],
        WB = [],
        hB = [],
        CB = [],
        GB = [],
        qB = [];
      return BB = class extends sB {
        get range() {
          return this._range
        }
        set range(BB) {
          this._range = BB, this._inverseSquaredRange = 1 / (this.range * this.range)
        }
        get intensityMode() {
          return this._intensityMode
        }
        set intensityMode(BB) {
          this._intensityMode = BB, this._computePhotometricScale()
        }
        get radius() {
          return this._radius
        }
        set radius(BB) {
          this._radius = BB, this._computePhotometricScale()
        }
        get renderPriority() {
          return (0, VB.b)(this, TB, "f")
        }
        set renderPriority(BB) {
          (0, VB.f)(this, TB, BB, "f")
        }
        get shadowEnabled() {
          return this._shadowEnabled
        }
        set shadowEnabled(BB) {
          this._shadowEnabled !== BB && (this._shadowEnabled = BB, this._markMeshesAsLightDirty())
        }
        get includedOnlyMeshes() {
          return this._includedOnlyMeshes
        }
        set includedOnlyMeshes(BB) {
          this._includedOnlyMeshes = BB, this._hookArrayForIncludedOnly(BB)
        }
        get excludedMeshes() {
          return this._excludedMeshes
        }
        set excludedMeshes(BB) {
          this._excludedMeshes = BB, this._hookArrayForExcluded(BB)
        }
        get excludeWithLayerMask() {
          return this._excludeWithLayerMask
        }
        set excludeWithLayerMask(BB) {
          this._excludeWithLayerMask = BB, this._resyncMeshes()
        }
        get includeOnlyWithLayerMask() {
          return this._includeOnlyWithLayerMask
        }
        set includeOnlyWithLayerMask(BB) {
          this._includeOnlyWithLayerMask = BB, this._resyncMeshes()
        }
        get lightmapMode() {
          return this._lightmapMode
        }
        set lightmapMode(BB) {
          this._lightmapMode !== BB && (this._lightmapMode = BB, this._markMeshesAsLightDirty())
        }
        getViewMatrix(BB) {
          return null
        }
        getProjectionMatrix(BB, TB) {
          return null
        }
        constructor(dB, yB, pB) {
          super(dB, yB, !1), this.diffuse = ((0, VB.h)(this, MB), (0, VB.h)(this, zB, new lB.c(1, 1, 1))), this.specular = ((0, VB.h)(this, wB), (0, VB.h)(this, UB, new lB.c(1, 1, 1))), this.falloffType = ((0, VB.h)(this, FB), (0, VB.h)(this, KB, BB.FALLOFF_DEFAULT)), this.intensity = ((0, VB.h)(this, rB), (0, VB.h)(this, IB, 1)), this._range = ((0, VB.h)(this, cB), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = BB.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, VB.h)(this, SB, void 0), TB.set(this, ((0, VB.h)(this, PB), (0, VB.h)(this, QB, 0))), this._shadowEnabled = ((0, VB.h)(this, RB), (0, VB.h)(this, aB, !0)), this._includedOnlyMeshes = (0, VB.h)(this, ZB), this._excludeWithLayerMask = (0, VB.h)(this, XB, 0), this._includeOnlyWithLayerMask = ((0, VB.h)(this, WB), (0, VB.h)(this, hB, 0)), this._lightmapMode = ((0, VB.h)(this, CB), (0, VB.h)(this, GB, 0)), this._shadowGenerators = ((0, VB.h)(this, qB), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, pB || this.jU().addLight(this), this._uniformBuffer = new YB.c(this.jU().PD(), void 0, void 0, dB), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], pB || this._resyncMeshes()
        }
        transferTexturesToEffect(BB, TB) {
          return this
        }
        _bindLight(BB, TB, dB, VB) {
          let yB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const pB = BB.toString();
          let JB = !1;
          if (this._uniformBuffer.bindToEffect(dB, "Light" + pB), this._renderId !== TB.getRenderId() || this._lastUseSpecular !== VB || !this._uniformBuffer.useUbo) {
            this._renderId = TB.getRenderId(), this._lastUseSpecular = VB;
            const BB = this.getScaledIntensity();
            this.transferToEffect(dB, pB), this.diffuse.scaleToRef(BB, lB.h.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", lB.h.Color3[0], this.range, pB), VB && (this.specular.scaleToRef(BB, lB.h.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", lB.h.Color3[1], this.radius, pB)), JB = !0
          }
          if (this.transferTexturesToEffect(dB, pB), TB.shadowsEnabled && this.shadowEnabled && yB) {
            const BB = this.getShadowGenerator(TB.activeCamera) ?? this.getShadowGenerator();
            BB && (BB.bindShadowLight(pB, dB), JB = !0)
          }
          JB ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(BB) {
          let TB = "Name: " + this.name;
          if (TB += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let dB = 0; dB < this.animations.length; dB++) TB += ", animation[0]: " + this.animations[dB].toString(BB);
          return TB
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.WdB() || this._resyncMeshes()
        }
        hN(BB) {
          super.hN(BB), this._resyncMeshes()
        }
        getShadowGenerator() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(BB) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return pB.p.Zero()
        }
        canAffectMesh(BB) {
          return !BB || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(BB)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(BB)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & BB.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & BB.layerMask)))
        }
        dispose(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const BB = this._shadowGenerators.values();
            for (let TB = BB.next(); !0 !== TB.done; TB = BB.next()) {
              TB.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.jU().stopAnimation(this), this._parentContainer) {
            const BB = this._parentContainer.lights.indexOf(this);
            BB > -1 && this._parentContainer.lights.splice(BB, 1), this._parentContainer = null
          }
          for (const dB of this.jU().meshes) dB._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.jU().removeLight(this), super.dispose(BB, TB)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(TB) {
          let dB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const VB = BB.GetConstructorFromName(this.getTypeID(), TB, this.jU());
          if (!VB) return null;
          const yB = kB.c.Clone(VB, this);
          return TB && (yB.name = TB), dB && (yB.parent = dB), yB.hN(this.isEnabled()), this.onClonedObservable.notifyObservers(yB), yB
        }
        serialize() {
          const BB = kB.c.Serialize(this);
          if (BB.uniqueId = this.uniqueId, BB.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(BB), this.excludedMeshes.length > 0) {
            BB.excludedMeshesIds = [];
            for (const TB of this.excludedMeshes) BB.excludedMeshesIds.push(TB.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            BB.includedOnlyMeshesIds = [];
            for (const TB of this.includedOnlyMeshes) BB.includedOnlyMeshesIds.push(TB.id)
          }
          return kB.c.AppendSerializedAnimations(this, BB), BB.ek = this.serializeAnimationRanges(), BB.isEnabled = this.isEnabled(), BB
        }
        static GetConstructorFromName(BB, TB, dB) {
          const VB = JB.e.Construct("Light_Type_" + BB, TB, dB);
          return VB || null
        }
        static Parse(TB, dB) {
          let VB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const yB = BB.GetConstructorFromName(TB.type, TB.name, dB);
          if (!yB) return null;
          const pB = kB.c.Parse(yB, TB, dB, VB);
          if (TB.excludedMeshesIds && (pB._excludedMeshesIds = TB.excludedMeshesIds), TB.includedOnlyMeshesIds && (pB._includedOnlyMeshesIds = TB.includedOnlyMeshesIds), void 0 !== TB.parentId && (pB._waitingParentId = TB.parentId), void 0 !== TB.parentInstanceIndex && (pB._waitingParentInstanceIndex = TB.parentInstanceIndex), void 0 !== TB.falloffType && (pB.falloffType = TB.falloffType), void 0 !== TB.lightmapMode && (pB.lightmapMode = TB.lightmapMode), TB.animations) {
            for (let BB = 0; BB < TB.animations.length; BB++) {
              const dB = TB.animations[BB],
                VB = (0, gB.e)("BABYLON.Animation");
              VB && pB.animations.push(VB.Parse(dB))
            }
            JB.e.ParseAnimationRanges(pB, TB, dB)
          }
          return TB.autoAnimate && dB.beginAnimation(pB, TB.autoAnimateFrom, TB.autoAnimateTo, TB.autoAnimateLoop, TB.autoAnimateSpeed || 1), void 0 !== TB.isEnabled && pB.hN(TB.isEnabled), pB._onParsed(TB, dB, VB), pB
        }
        _onParsed(BB, TB) {}
        _hookArrayForExcluded(BB) {
          var TB = this;
          const dB = BB.push;
          BB.push = function() {
            for (var VB = arguments.length, yB = new Array(VB), pB = 0; pB < VB; pB++) yB[pB] = arguments[pB];
            const lB = dB.apply(BB, yB);
            if (TB._clusteredContainer) return lB;
            for (const BB of yB) BB._resyncLightSource(TB);
            return lB
          };
          const VB = BB.splice;
          BB.splice = (TB, dB) => {
            const yB = VB.call(BB, TB, dB ?? BB.length);
            if (this._clusteredContainer) return yB;
            for (const BB of yB) BB._resyncLightSource(this);
            return yB
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(BB) {
          var TB = this;
          const dB = BB.push;
          BB.push = function() {
            for (var VB = arguments.length, yB = new Array(VB), pB = 0; pB < VB; pB++) yB[pB] = arguments[pB];
            const lB = dB.apply(BB, yB);
            return TB._resyncMeshes(), lB
          };
          const VB = BB.splice;
          BB.splice = (TB, dB) => {
            const yB = VB.call(BB, TB, dB ?? BB.length);
            return this._resyncMeshes(), yB
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const BB of this.jU().meshes) BB._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const BB of this.jU().meshes) - 1 !== BB.lightSources.indexOf(this) && BB._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.jU().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let TB = 0;
          const dB = this.getTypeID();
          let VB = this.intensityMode;
          switch (VB === BB.INTENSITYMODE_AUTOMATIC && (VB = dB === BB.LIGHTTYPEID_DIRECTIONALLIGHT ? BB.INTENSITYMODE_ILLUMINANCE : BB.INTENSITYMODE_LUMINOUSINTENSITY), dB) {
            case BB.LIGHTTYPEID_POINTLIGHT:
            case BB.LIGHTTYPEID_SPOTLIGHT:
              switch (VB) {
                case BB.INTENSITYMODE_LUMINOUSPOWER:
                  TB = 1 / (4 * Math.PI);
                  break;
                case BB.INTENSITYMODE_LUMINOUSINTENSITY:
                  TB = 1;
                  break;
                case BB.INTENSITYMODE_LUMINANCE:
                  TB = this.radius * this.radius
              }
              break;
            case BB.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (VB) {
                case BB.INTENSITYMODE_ILLUMINANCE:
                  TB = 1;
                  break;
                case BB.INTENSITYMODE_LUMINANCE: {
                  let BB = this.radius;
                  BB = Math.max(BB, .001);
                  TB = 2 * Math.PI * (1 - Math.cos(BB));
                  break
                }
              }
              break;
            case BB.LIGHTTYPEID_HEMISPHERICLIGHT:
            case BB.LIGHTTYPEID_RECT_AREALIGHT:
              TB = 1
          }
          return TB
        }
        _reorderLightsInScene() {
          const BB = this.jU();
          0 != this._renderPriority && (BB.requireLightSorting = !0), this.jU().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, TB = new WeakMap, (() => {
        const TB = "function" === typeof Symbol && Symbol.metadata ? Object.create(sB[Symbol.metadata] ?? null) : void 0;
        dB = [(0, yB.s)()], LB = [(0, yB.s)()], OB = [(0, yB.W)()], DB = [(0, yB.W)()], uB = [(0, yB.W)()], HB = [(0, yB.W)()], EB = [(0, yB.W)()], vB = [(0, yB.W)()], mB = [(0, yB.i)("_reorderLightsInScene")], iB = [(0, yB.W)("shadowEnabled")], NB = [(0, yB.W)("excludeWithLayerMask")], tB = [(0, yB.W)("includeOnlyWithLayerMask")], fB = [(0, yB.W)("lightmapMode")], (0, VB.g)(BB, null, uB, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: BB => "range" in BB,
            get: BB => BB.range
          },
          metadata: TB
        }, null, MB), (0, VB.g)(BB, null, HB, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "intensityMode" in BB,
            get: BB => BB.intensityMode
          },
          metadata: TB
        }, null, MB), (0, VB.g)(BB, null, EB, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: BB => "radius" in BB,
            get: BB => BB.radius
          },
          metadata: TB
        }, null, MB), (0, VB.g)(BB, null, mB, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: BB => "renderPriority" in BB,
            get: BB => BB.renderPriority,
            set: (BB, TB) => {
              BB.renderPriority = TB
            }
          },
          metadata: TB
        }, QB, RB), (0, VB.g)(null, null, dB, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: BB => "diffuse" in BB,
            get: BB => BB.diffuse,
            set: (BB, TB) => {
              BB.diffuse = TB
            }
          },
          metadata: TB
        }, zB, wB), (0, VB.g)(null, null, LB, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: BB => "specular" in BB,
            get: BB => BB.specular,
            set: (BB, TB) => {
              BB.specular = TB
            }
          },
          metadata: TB
        }, UB, FB), (0, VB.g)(null, null, OB, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: BB => "falloffType" in BB,
            get: BB => BB.falloffType,
            set: (BB, TB) => {
              BB.falloffType = TB
            }
          },
          metadata: TB
        }, KB, rB), (0, VB.g)(null, null, DB, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "intensity" in BB,
            get: BB => BB.intensity,
            set: (BB, TB) => {
              BB.intensity = TB
            }
          },
          metadata: TB
        }, IB, cB), (0, VB.g)(null, null, vB, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: BB => "_renderPriority" in BB,
            get: BB => BB._renderPriority,
            set: (BB, TB) => {
              BB._renderPriority = TB
            }
          },
          metadata: TB
        }, SB, PB), (0, VB.g)(null, null, iB, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "_shadowEnabled" in BB,
            get: BB => BB._shadowEnabled,
            set: (BB, TB) => {
              BB._shadowEnabled = TB
            }
          },
          metadata: TB
        }, aB, ZB), (0, VB.g)(null, null, NB, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: BB => "_excludeWithLayerMask" in BB,
            get: BB => BB._excludeWithLayerMask,
            set: (BB, TB) => {
              BB._excludeWithLayerMask = TB
            }
          },
          metadata: TB
        }, XB, WB), (0, VB.g)(null, null, tB, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: BB => "_includeOnlyWithLayerMask" in BB,
            get: BB => BB._includeOnlyWithLayerMask,
            set: (BB, TB) => {
              BB._includeOnlyWithLayerMask = TB
            }
          },
          metadata: TB
        }, hB, CB), (0, VB.g)(null, null, fB, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "_lightmapMode" in BB,
            get: BB => BB._lightmapMode,
            set: (BB, TB) => {
              BB._lightmapMode = TB
            }
          },
          metadata: TB
        }, GB, qB), TB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: TB
        })
      })(), BB.FALLOFF_DEFAULT = oB.b.FALLOFF_DEFAULT, BB.FALLOFF_PHYSICAL = oB.b.FALLOFF_PHYSICAL, BB.FALLOFF_GLTF = oB.b.FALLOFF_GLTF, BB.FALLOFF_STANDARD = oB.b.FALLOFF_STANDARD, BB.LIGHTMAP_DEFAULT = oB.b.LIGHTMAP_DEFAULT, BB.LIGHTMAP_SPECULAR = oB.b.LIGHTMAP_SPECULAR, BB.LIGHTMAP_SHADOWSONLY = oB.b.LIGHTMAP_SHADOWSONLY, BB.INTENSITYMODE_AUTOMATIC = oB.b.INTENSITYMODE_AUTOMATIC, BB.INTENSITYMODE_LUMINOUSPOWER = oB.b.INTENSITYMODE_LUMINOUSPOWER, BB.INTENSITYMODE_LUMINOUSINTENSITY = oB.b.INTENSITYMODE_LUMINOUSINTENSITY, BB.INTENSITYMODE_ILLUMINANCE = oB.b.INTENSITYMODE_ILLUMINANCE, BB.INTENSITYMODE_LUMINANCE = oB.b.INTENSITYMODE_LUMINANCE, BB.LIGHTTYPEID_POINTLIGHT = oB.b.LIGHTTYPEID_POINTLIGHT, BB.LIGHTTYPEID_DIRECTIONALLIGHT = oB.b.LIGHTTYPEID_DIRECTIONALLIGHT, BB.LIGHTTYPEID_SPOTLIGHT = oB.b.LIGHTTYPEID_SPOTLIGHT, BB.LIGHTTYPEID_HEMISPHERICLIGHT = oB.b.LIGHTTYPEID_HEMISPHERICLIGHT, BB.LIGHTTYPEID_RECT_AREALIGHT = oB.b.LIGHTTYPEID_RECT_AREALIGHT, BB
    })()
  },
  38980: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => kB
    });
    var VB = dB(38745),
      yB = dB(36126),
      pB = dB(38750),
      lB = dB(36150),
      JB = dB(36148),
      YB = dB(38629),
      gB = dB(38772);
    class oB {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new lB.e, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new lB.e, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let kB = (() => {
      var BB;
      let TB, dB, kB, LB, OB, DB = [],
        uB = [],
        HB = [],
        EB = [],
        vB = [],
        mB = [],
        iB = [],
        NB = [],
        tB = [],
        fB = [];
      return BB = class {
        static AddNodeConstructor(BB, TB) {
          this._NodeConstructors[BB] = TB
        }
        static Construct(BB, TB, dB, VB) {
          const yB = this._NodeConstructors[BB];
          return yB ? yB(TB, dB, VB) : null
        }
        set accessibilityTag(BB) {
          this._accessibilityTag = BB, this.onAccessibilityTagChangedObservable.notifyObservers(BB)
        }
        get accessibilityTag() {
          return this._accessibilityTag
        }
        get doNotSerialize() {
          return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
        }
        set doNotSerialize(BB) {
          this._nodeDataStorage._doNotSerialize = BB
        }
        WdB() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(BB) {
          if (this._parentNode === BB) return;
          const TB = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const TB = this._parentNode._children.indexOf(this); - 1 !== TB && this._parentNode._children.splice(TB, 1), BB || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = BB, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), TB || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
        }
        get parent() {
          return this._parentNode
        }
        get inheritVisibility() {
          return this._nodeDataStorage._inheritVisibility
        }
        set inheritVisibility(BB) {
          this._nodeDataStorage._inheritVisibility = BB
        }
        get isVisible() {
          return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
        }
        set isVisible(BB) {
          this._nodeDataStorage._isVisible = BB
        }
        _serializeAsParent(BB) {
          BB.parentId = this.uniqueId
        }
        _addToSceneRootNodes() {
          -1 === this._nodeDataStorage._sceneRootNodesIndex && (this._nodeDataStorage._sceneRootNodesIndex = this._scene.rootNodes.length, this._scene.rootNodes.push(this))
        }
        _removeFromSceneRootNodes() {
          if (-1 !== this._nodeDataStorage._sceneRootNodesIndex) {
            const BB = this._scene.rootNodes,
              TB = BB.length - 1;
            BB[this._nodeDataStorage._sceneRootNodesIndex] = BB[TB], BB[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
          }
        }
        get animationPropertiesOverride() {
          return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
        }
        set animationPropertiesOverride(BB) {
          this._animationPropertiesOverride = BB
        }
        getClassName() {
          return "Node"
        }
        set onDispose(BB) {
          this._onDisposeObserver && this.lF.remove(this._onDisposeObserver), this._onDisposeObserver = this.lF.add(BB)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var BB;
          return (BB = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (BB._onEffectiveEnabledStateChangedObservable = new lB.e)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            dB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new oB, this.name = (0, VB.h)(this, DB, void 0), this.id = ((0, VB.h)(this, uB), (0, VB.h)(this, HB, void 0)), this.uniqueId = ((0, VB.h)(this, EB), (0, VB.h)(this, vB, void 0)), this.state = ((0, VB.h)(this, mB), (0, VB.h)(this, iB, "")), this.metadata = ((0, VB.h)(this, NB), (0, VB.h)(this, tB, null)), this._internalMetadata = (0, VB.h)(this, fB), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new lB.e, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = yB.b.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.lF = new lB.e, this._onDisposeObserver = null, this._behaviors = new Array, this.name = BB, this.id = BB, this._scene = TB || JB.c.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), dB && this._addToSceneRootNodes()
        }
        jU() {
          return this._scene
        }
        PD() {
          return this._scene.PD()
        }
        addBehavior(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(BB) || (BB.init(), this._scene.isLoading && !TB ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(BB) && BB.attach(this)
          })) : BB.attach(this), this._behaviors.push(BB)), this
        }
        removeBehavior(BB) {
          const TB = this._behaviors.indexOf(BB);
          return -1 === TB || (this._behaviors.splice(TB, 1), BB.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(BB) {
          for (const TB of this._behaviors)
            if (TB.name === BB) return TB;
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
        updateCache(BB) {
          !BB && this.isSynchronized() || this._updateCache()
        }
        _getActionManagerForTrigger(BB) {
          return this.parent ? this.parent._getActionManagerForTrigger(BB, !1) : null
        }
        _updateCache(BB) {}
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
        VdB(BB) {
          return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this
        }
        isEnabled() {
          return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled
        }
        _hasEffectiveEnabledStateObservers() {
          const BB = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
          return !!BB && BB.hasObservers()
        }
        _syncParentEnabledState() {
          const BB = this._hasEffectiveEnabledStateObservers(),
            TB = BB ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const dB of this._children) dB._syncParentEnabledState();
          if (BB) {
            const BB = this.isEnabled();
            BB !== TB && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(BB)
          }
        }
        hN(BB) {
          if (this._nodeDataStorage._isEnabled === BB) return;
          const TB = this._hasEffectiveEnabledStateObservers(),
            dB = TB ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = BB, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(BB), TB) {
            const BB = this.isEnabled();
            BB !== dB && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(BB)
          }
        }
        isDescendantOf(BB) {
          return !!this.parent && (this.parent === BB || this.parent.isDescendantOf(BB))
        }
        _getDescendants(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            dB = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let VB = 0; VB < this._children.length; VB++) {
              const yB = this._children[VB];
              dB && !dB(yB) || BB.push(yB), TB || yB._getDescendants(BB, !1, dB)
            }
        }
        getDescendants(BB, TB) {
          const dB = [];
          return this._getDescendants(dB, BB, TB), dB
        }
        getChildMeshes(BB, TB) {
          const dB = [];
          return this._getDescendants(dB, BB, (BB => (!TB || TB(BB)) && void 0 !== BB.cullingStrategy)), dB
        }
        getChildren(BB) {
          let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(TB, BB)
        }
        _setReady(BB) {
          BB !== this._nodeDataStorage._isReady && (BB ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(BB) {
          for (let TB = 0; TB < this.animations.length; TB++) {
            const dB = this.animations[TB];
            if (dB.name === BB) return dB
          }
          return null
        }
        createAnimationRange(TB, dB, VB) {
          if (!this._ranges[TB]) {
            this._ranges[TB] = BB._AnimationRangeFactory(TB, dB, VB);
            for (let BB = 0, yB = this.animations.length; BB < yB; BB++) this.animations[BB] && this.animations[BB].createRange(TB, dB, VB)
          }
        }
        deleteAnimationRange(BB) {
          let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let dB = 0, VB = this.animations.length; dB < VB; dB++) this.animations[dB] && this.animations[dB].deleteRange(BB, TB);
          this._ranges[BB] = null
        }
        getAnimationRange(BB) {
          return this._ranges[BB] || null
        }
        clone(TB, dB, VB) {
          const yB = gB.c.Clone((() => new BB(TB, this.jU())), this);
          if (dB && (yB.parent = dB), !VB) {
            const BB = this.getDescendants(!0);
            for (let dB = 0; dB < BB.length; dB++) {
              const VB = BB[dB];
              VB.clone(TB + "." + VB.name, yB)
            }
          }
          return yB
        }
        getAnimationRanges() {
          const BB = [];
          let TB;
          for (TB in this._ranges) BB.push(this._ranges[TB]);
          return BB
        }
        beginAnimation(BB, TB, dB, VB) {
          const yB = this.getAnimationRange(BB);
          return yB ? this._scene.beginAnimation(this, yB.from, yB.to, TB, dB, VB) : null
        }
        serializeAnimationRanges() {
          const BB = [];
          for (const TB in this._ranges) {
            const dB = this._ranges[TB];
            if (!dB) continue;
            const VB = {};
            VB.name = TB, VB.from = dB.from, VB.to = dB.to, BB.push(VB)
          }
          return BB
        }
        computeWorldMatrix(BB) {
          return this._worldMatrix || (this._worldMatrix = yB.b.Identity()), this._worldMatrix
        }
        dispose(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !BB) {
            const dB = this.getDescendants(!0);
            for (const VB of dB) VB.dispose(BB, TB)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.lF.notifyObservers(this), this.lF.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const dB of this._behaviors) dB.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(BB, TB, dB) {
          if (TB.ek)
            for (let VB = 0; VB < TB.ek.length; VB++) {
              const dB = TB.ek[VB];
              BB.createAnimationRange(dB.name, dB.from, dB.to)
            }
        }
        getHierarchyBoundingVectors() {
          let BB, TB, dB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            VB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.jU().incrementRenderId(), this.computeWorldMatrix(!0);
          const pB = this;
          if (pB.IK && pB.oN) {
            const dB = pB.IK();
            BB = dB.boundingBox.minimumWorld.clone(), TB = dB.boundingBox.maximumWorld.clone()
          } else BB = new yB.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), TB = new yB.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (dB) {
            const dB = this.getDescendants(!1);
            for (const pB of dB) {
              const dB = pB;
              if (dB.computeWorldMatrix(!0), VB && !VB(dB)) continue;
              if (!dB.IK || 0 === dB.getTotalVertices()) continue;
              const lB = dB.IK().boundingBox,
                JB = lB.minimumWorld,
                YB = lB.maximumWorld;
              yB.p.CheckExtends(JB, BB, TB), yB.p.CheckExtends(YB, BB, TB)
            }
          }
          return {
            min: BB,
            max: TB
          }
        }
      }, (() => {
        const yB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        TB = [(0, pB.W)()], dB = [(0, pB.W)()], kB = [(0, pB.W)()], LB = [(0, pB.W)()], OB = [(0, pB.W)()], (0, VB.g)(null, null, TB, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: BB => "name" in BB,
            get: BB => BB.name,
            set: (BB, TB) => {
              BB.name = TB
            }
          },
          metadata: yB
        }, DB, uB), (0, VB.g)(null, null, dB, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: BB => "id" in BB,
            get: BB => BB.id,
            set: (BB, TB) => {
              BB.id = TB
            }
          },
          metadata: yB
        }, HB, EB), (0, VB.g)(null, null, kB, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: BB => "uniqueId" in BB,
            get: BB => BB.uniqueId,
            set: (BB, TB) => {
              BB.uniqueId = TB
            }
          },
          metadata: yB
        }, vB, mB), (0, VB.g)(null, null, LB, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: BB => "state" in BB,
            get: BB => BB.state,
            set: (BB, TB) => {
              BB.state = TB
            }
          },
          metadata: yB
        }, iB, NB), (0, VB.g)(null, null, OB, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: BB => "metadata" in BB,
            get: BB => BB.metadata,
            set: (BB, TB) => {
              BB.metadata = TB
            }
          },
          metadata: yB
        }, tB, fB), yB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: yB
        })
      })(), BB._AnimationRangeFactory = (BB, TB, dB) => {
        throw (0, YB.i)("AnimationRange")
      }, BB._NodeConstructors = {}, BB
    })()
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);