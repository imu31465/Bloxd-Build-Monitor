export const id = 263;
export const ids = [263];
export const modules = {
  40344: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => rB
    });
    var QB = zB(40066),
      nB = zB(40068),
      dB = zB(37171),
      IB = zB(37379),
      NB = zB(40306),
      uB = zB(40195),
      UB = zB(37222),
      aB = zB(40284),
      pB = zB(40086);
    let rB = (() => {
      var BB, jB;
      let zB, rB, sB, JB, mB, yB, kB, GB, LB, gB, tB, SB, MB, EB = NB.c,
        iB = [],
        qB = [],
        fB = [],
        oB = [],
        HB = [],
        DB = [],
        FB = [],
        YB = [],
        VB = [],
        hB = [],
        XB = [],
        ZB = [],
        AB = [],
        TB = [],
        PB = [],
        WB = [],
        eB = [],
        lB = [],
        wB = [],
        xB = [],
        KB = [];
      return BB = class extends EB {
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
          return (0, QB.b)(this, jB, "f")
        }
        set renderPriority(BB) {
          (0, QB.d)(this, jB, BB, "f")
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
        getProjectionMatrix(BB, jB) {
          return null
        }
        constructor(zB, nB, dB) {
          super(zB, nB, !1), this.diffuse = ((0, QB.g)(this, iB), (0, QB.g)(this, qB, new IB.d(1, 1, 1))), this.specular = ((0, QB.g)(this, fB), (0, QB.g)(this, oB, new IB.d(1, 1, 1))), this.falloffType = ((0, QB.g)(this, HB), (0, QB.g)(this, DB, BB.FALLOFF_DEFAULT)), this.intensity = ((0, QB.g)(this, FB), (0, QB.g)(this, YB, 1)), this._range = ((0, QB.g)(this, VB), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = BB.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, QB.g)(this, hB, void 0), jB.set(this, ((0, QB.g)(this, XB), (0, QB.g)(this, ZB, 0))), this._shadowEnabled = ((0, QB.g)(this, AB), (0, QB.g)(this, TB, !0)), this._includedOnlyMeshes = (0, QB.g)(this, PB), this._excludeWithLayerMask = (0, QB.g)(this, WB, 0), this._includeOnlyWithLayerMask = ((0, QB.g)(this, eB), (0, QB.g)(this, lB, 0)), this._lightmapMode = ((0, QB.g)(this, wB), (0, QB.g)(this, xB, 0)), this._shadowGenerators = ((0, QB.g)(this, KB), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, dB || this.aY().addLight(this), this._uniformBuffer = new uB.d(this.aY().wJ(), void 0, void 0, zB), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], dB || this._resyncMeshes()
        }
        transferTexturesToEffect(BB, jB) {
          return this
        }
        _bindLight(BB, jB, zB, QB) {
          let nB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const dB = BB.toString();
          let NB = !1;
          if (this._uniformBuffer.bindToEffect(zB, "Light" + dB), this._renderId !== jB.getRenderId() || this._lastUseSpecular !== QB || !this._uniformBuffer.useUbo) {
            this._renderId = jB.getRenderId(), this._lastUseSpecular = QB;
            const BB = this.getScaledIntensity();
            this.transferToEffect(zB, dB), this.diffuse.scaleToRef(BB, IB.o.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", IB.o.Color3[0], this.range, dB), QB && (this.specular.scaleToRef(BB, IB.o.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", IB.o.Color3[1], this.radius, dB)), NB = !0
          }
          if (this.transferTexturesToEffect(zB, dB), jB.shadowsEnabled && this.shadowEnabled && nB) {
            const BB = this.getShadowGenerator(jB.activeCamera) ?? this.getShadowGenerator();
            BB && (BB.bindShadowLight(dB, zB), NB = !0)
          }
          NB ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(BB) {
          let jB = "Name: " + this.name;
          if (jB += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let zB = 0; zB < this.animations.length; zB++) jB += ", animation[0]: " + this.animations[zB].toString(BB);
          return jB
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.aE() || this._resyncMeshes()
        }
        mH(BB) {
          super.mH(BB), this._resyncMeshes()
        }
        getShadowGenerator() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(BB) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return dB.m.Zero()
        }
        canAffectMesh(BB) {
          return !BB || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(BB)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(BB)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & BB.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & BB.layerMask)))
        }
        dispose(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const BB = this._shadowGenerators.values();
            for (let jB = BB.next(); !0 !== jB.done; jB = BB.next()) {
              jB.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.aY().stopAnimation(this), this._parentContainer) {
            const BB = this._parentContainer.lights.indexOf(this);
            BB > -1 && this._parentContainer.lights.splice(BB, 1), this._parentContainer = null
          }
          for (const zB of this.aY().meshes) zB._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.aY().removeLight(this), super.dispose(BB, jB)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(jB) {
          let zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const QB = BB.GetConstructorFromName(this.getTypeID(), jB, this.aY());
          if (!QB) return null;
          const nB = pB.b.Clone(QB, this);
          return jB && (nB.name = jB), zB && (nB.parent = zB), nB.mH(this.isEnabled()), this.onClonedObservable.notifyObservers(nB), nB
        }
        serialize() {
          const BB = pB.b.Serialize(this);
          if (BB.uniqueId = this.uniqueId, BB.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(BB), this.excludedMeshes.length > 0) {
            BB.excludedMeshesIds = [];
            for (const jB of this.excludedMeshes) BB.excludedMeshesIds.push(jB.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            BB.includedOnlyMeshesIds = [];
            for (const jB of this.includedOnlyMeshes) BB.includedOnlyMeshesIds.push(jB.id)
          }
          return pB.b.AppendSerializedAnimations(this, BB), BB.gy = this.serializeAnimationRanges(), BB.isEnabled = this.isEnabled(), BB
        }
        static GetConstructorFromName(BB, jB, zB) {
          const QB = NB.c.Construct("Light_Type_" + BB, jB, zB);
          return QB || null
        }
        static Parse(jB, zB) {
          let QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const nB = BB.GetConstructorFromName(jB.type, jB.name, zB);
          if (!nB) return null;
          const dB = pB.b.Parse(nB, jB, zB, QB);
          if (jB.excludedMeshesIds && (dB._excludedMeshesIds = jB.excludedMeshesIds), jB.includedOnlyMeshesIds && (dB._includedOnlyMeshesIds = jB.includedOnlyMeshesIds), void 0 !== jB.parentId && (dB._waitingParentId = jB.parentId), void 0 !== jB.parentInstanceIndex && (dB._waitingParentInstanceIndex = jB.parentInstanceIndex), void 0 !== jB.falloffType && (dB.falloffType = jB.falloffType), void 0 !== jB.lightmapMode && (dB.lightmapMode = jB.lightmapMode), jB.animations) {
            for (let BB = 0; BB < jB.animations.length; BB++) {
              const zB = jB.animations[BB],
                QB = (0, UB.b)("BABYLON.Animation");
              QB && dB.animations.push(QB.Parse(zB))
            }
            NB.c.ParseAnimationRanges(dB, jB, zB)
          }
          return jB.autoAnimate && zB.beginAnimation(dB, jB.autoAnimateFrom, jB.autoAnimateTo, jB.autoAnimateLoop, jB.autoAnimateSpeed || 1), void 0 !== jB.isEnabled && dB.mH(jB.isEnabled), dB._onParsed(jB, zB, QB), dB
        }
        _onParsed(BB, jB) {}
        _hookArrayForExcluded(BB) {
          var jB = this;
          const zB = BB.push;
          BB.push = function() {
            for (var QB = arguments.length, nB = new Array(QB), dB = 0; dB < QB; dB++) nB[dB] = arguments[dB];
            const IB = zB.apply(BB, nB);
            if (jB._clusteredContainer) return IB;
            for (const BB of nB) BB._resyncLightSource(jB);
            return IB
          };
          const QB = BB.splice;
          BB.splice = (jB, zB) => {
            const nB = QB.call(BB, jB, zB ?? BB.length);
            if (this._clusteredContainer) return nB;
            for (const BB of nB) BB._resyncLightSource(this);
            return nB
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(BB) {
          var jB = this;
          const zB = BB.push;
          BB.push = function() {
            for (var QB = arguments.length, nB = new Array(QB), dB = 0; dB < QB; dB++) nB[dB] = arguments[dB];
            const IB = zB.apply(BB, nB);
            return jB._resyncMeshes(), IB
          };
          const QB = BB.splice;
          BB.splice = (jB, zB) => {
            const nB = QB.call(BB, jB, zB ?? BB.length);
            return this._resyncMeshes(), nB
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const BB of this.aY().meshes) BB._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const BB of this.aY().meshes) - 1 !== BB.lightSources.indexOf(this) && BB._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.aY().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let jB = 0;
          const zB = this.getTypeID();
          let QB = this.intensityMode;
          switch (QB === BB.INTENSITYMODE_AUTOMATIC && (QB = zB === BB.LIGHTTYPEID_DIRECTIONALLIGHT ? BB.INTENSITYMODE_ILLUMINANCE : BB.INTENSITYMODE_LUMINOUSINTENSITY), zB) {
            case BB.LIGHTTYPEID_POINTLIGHT:
            case BB.LIGHTTYPEID_SPOTLIGHT:
              switch (QB) {
                case BB.INTENSITYMODE_LUMINOUSPOWER:
                  jB = 1 / (4 * Math.PI);
                  break;
                case BB.INTENSITYMODE_LUMINOUSINTENSITY:
                  jB = 1;
                  break;
                case BB.INTENSITYMODE_LUMINANCE:
                  jB = this.radius * this.radius
              }
              break;
            case BB.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (QB) {
                case BB.INTENSITYMODE_ILLUMINANCE:
                  jB = 1;
                  break;
                case BB.INTENSITYMODE_LUMINANCE: {
                  let BB = this.radius;
                  BB = Math.max(BB, .001);
                  jB = 2 * Math.PI * (1 - Math.cos(BB));
                  break
                }
              }
              break;
            case BB.LIGHTTYPEID_HEMISPHERICLIGHT:
            case BB.LIGHTTYPEID_RECT_AREALIGHT:
              jB = 1
          }
          return jB
        }
        _reorderLightsInScene() {
          const BB = this.aY();
          0 != this._renderPriority && (BB.requireLightSorting = !0), this.aY().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, jB = new WeakMap, (() => {
        const jB = "function" === typeof Symbol && Symbol.metadata ? Object.create(EB[Symbol.metadata] ?? null) : void 0;
        zB = [(0, nB.i)()], rB = [(0, nB.i)()], sB = [(0, nB.A)()], JB = [(0, nB.A)()], mB = [(0, nB.A)()], yB = [(0, nB.A)()], kB = [(0, nB.A)()], GB = [(0, nB.A)()], LB = [(0, nB.e)("_reorderLightsInScene")], gB = [(0, nB.A)("shadowEnabled")], tB = [(0, nB.A)("excludeWithLayerMask")], SB = [(0, nB.A)("includeOnlyWithLayerMask")], MB = [(0, nB.A)("lightmapMode")], (0, QB.e)(BB, null, mB, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: BB => "range" in BB,
            get: BB => BB.range
          },
          metadata: jB
        }, null, iB), (0, QB.e)(BB, null, yB, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "intensityMode" in BB,
            get: BB => BB.intensityMode
          },
          metadata: jB
        }, null, iB), (0, QB.e)(BB, null, kB, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: BB => "radius" in BB,
            get: BB => BB.radius
          },
          metadata: jB
        }, null, iB), (0, QB.e)(BB, null, LB, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: BB => "renderPriority" in BB,
            get: BB => BB.renderPriority,
            set: (BB, jB) => {
              BB.renderPriority = jB
            }
          },
          metadata: jB
        }, ZB, AB), (0, QB.e)(null, null, zB, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: BB => "diffuse" in BB,
            get: BB => BB.diffuse,
            set: (BB, jB) => {
              BB.diffuse = jB
            }
          },
          metadata: jB
        }, qB, fB), (0, QB.e)(null, null, rB, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: BB => "specular" in BB,
            get: BB => BB.specular,
            set: (BB, jB) => {
              BB.specular = jB
            }
          },
          metadata: jB
        }, oB, HB), (0, QB.e)(null, null, sB, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: BB => "falloffType" in BB,
            get: BB => BB.falloffType,
            set: (BB, jB) => {
              BB.falloffType = jB
            }
          },
          metadata: jB
        }, DB, FB), (0, QB.e)(null, null, JB, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "intensity" in BB,
            get: BB => BB.intensity,
            set: (BB, jB) => {
              BB.intensity = jB
            }
          },
          metadata: jB
        }, YB, VB), (0, QB.e)(null, null, GB, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: BB => "_renderPriority" in BB,
            get: BB => BB._renderPriority,
            set: (BB, jB) => {
              BB._renderPriority = jB
            }
          },
          metadata: jB
        }, hB, XB), (0, QB.e)(null, null, gB, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "_shadowEnabled" in BB,
            get: BB => BB._shadowEnabled,
            set: (BB, jB) => {
              BB._shadowEnabled = jB
            }
          },
          metadata: jB
        }, TB, PB), (0, QB.e)(null, null, tB, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: BB => "_excludeWithLayerMask" in BB,
            get: BB => BB._excludeWithLayerMask,
            set: (BB, jB) => {
              BB._excludeWithLayerMask = jB
            }
          },
          metadata: jB
        }, WB, eB), (0, QB.e)(null, null, SB, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: BB => "_includeOnlyWithLayerMask" in BB,
            get: BB => BB._includeOnlyWithLayerMask,
            set: (BB, jB) => {
              BB._includeOnlyWithLayerMask = jB
            }
          },
          metadata: jB
        }, lB, wB), (0, QB.e)(null, null, MB, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "_lightmapMode" in BB,
            get: BB => BB._lightmapMode,
            set: (BB, jB) => {
              BB._lightmapMode = jB
            }
          },
          metadata: jB
        }, xB, KB), jB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: jB
        })
      })(), BB.FALLOFF_DEFAULT = aB.d.FALLOFF_DEFAULT, BB.FALLOFF_PHYSICAL = aB.d.FALLOFF_PHYSICAL, BB.FALLOFF_GLTF = aB.d.FALLOFF_GLTF, BB.FALLOFF_STANDARD = aB.d.FALLOFF_STANDARD, BB.LIGHTMAP_DEFAULT = aB.d.LIGHTMAP_DEFAULT, BB.LIGHTMAP_SPECULAR = aB.d.LIGHTMAP_SPECULAR, BB.LIGHTMAP_SHADOWSONLY = aB.d.LIGHTMAP_SHADOWSONLY, BB.INTENSITYMODE_AUTOMATIC = aB.d.INTENSITYMODE_AUTOMATIC, BB.INTENSITYMODE_LUMINOUSPOWER = aB.d.INTENSITYMODE_LUMINOUSPOWER, BB.INTENSITYMODE_LUMINOUSINTENSITY = aB.d.INTENSITYMODE_LUMINOUSINTENSITY, BB.INTENSITYMODE_ILLUMINANCE = aB.d.INTENSITYMODE_ILLUMINANCE, BB.INTENSITYMODE_LUMINANCE = aB.d.INTENSITYMODE_LUMINANCE, BB.LIGHTTYPEID_POINTLIGHT = aB.d.LIGHTTYPEID_POINTLIGHT, BB.LIGHTTYPEID_DIRECTIONALLIGHT = aB.d.LIGHTTYPEID_DIRECTIONALLIGHT, BB.LIGHTTYPEID_SPOTLIGHT = aB.d.LIGHTTYPEID_SPOTLIGHT, BB.LIGHTTYPEID_HEMISPHERICLIGHT = aB.d.LIGHTTYPEID_HEMISPHERICLIGHT, BB.LIGHTTYPEID_RECT_AREALIGHT = aB.d.LIGHTTYPEID_RECT_AREALIGHT, BB
    })()
  },
  40306: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => pB
    });
    var QB = zB(40066),
      nB = zB(37171),
      dB = zB(40068),
      IB = zB(37202),
      NB = zB(37197),
      uB = zB(39965),
      UB = zB(40086);
    class aB {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new IB.c, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new IB.c, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let pB = (() => {
      var BB;
      let jB, zB, pB, rB, sB, JB = [],
        mB = [],
        yB = [],
        kB = [],
        GB = [],
        LB = [],
        gB = [],
        tB = [],
        SB = [],
        MB = [];
      return BB = class {
        static AddNodeConstructor(BB, jB) {
          this._NodeConstructors[BB] = jB
        }
        static Construct(BB, jB, zB, QB) {
          const nB = this._NodeConstructors[BB];
          return nB ? nB(jB, zB, QB) : null
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
        aE() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(BB) {
          if (this._parentNode === BB) return;
          const jB = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const jB = this._parentNode._children.indexOf(this); - 1 !== jB && this._parentNode._children.splice(jB, 1), BB || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = BB, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), jB || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
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
              jB = BB.length - 1;
            BB[this._nodeDataStorage._sceneRootNodesIndex] = BB[jB], BB[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
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
          this._onDisposeObserver && this.pY.remove(this._onDisposeObserver), this._onDisposeObserver = this.pY.add(BB)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var BB;
          return (BB = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (BB._onEffectiveEnabledStateChangedObservable = new IB.c)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            zB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new aB, this.name = (0, QB.g)(this, JB, void 0), this.id = ((0, QB.g)(this, mB), (0, QB.g)(this, yB, void 0)), this.uniqueId = ((0, QB.g)(this, kB), (0, QB.g)(this, GB, void 0)), this.state = ((0, QB.g)(this, LB), (0, QB.g)(this, gB, "")), this.metadata = ((0, QB.g)(this, tB), (0, QB.g)(this, SB, null)), this._internalMetadata = (0, QB.g)(this, MB), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new IB.c, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = nB.c.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.pY = new IB.c, this._onDisposeObserver = null, this._behaviors = new Array, this.name = BB, this.id = BB, this._scene = jB || NB.c.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), zB && this._addToSceneRootNodes()
        }
        aY() {
          return this._scene
        }
        wJ() {
          return this._scene.wJ()
        }
        addBehavior(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(BB) || (BB.init(), this._scene.isLoading && !jB ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(BB) && BB.attach(this)
          })) : BB.attach(this), this._behaviors.push(BB)), this
        }
        removeBehavior(BB) {
          const jB = this._behaviors.indexOf(BB);
          return -1 === jB || (this._behaviors.splice(jB, 1), BB.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(BB) {
          for (const jB of this._behaviors)
            if (jB.name === BB) return jB;
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
        DjB(BB) {
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
            jB = BB ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const zB of this._children) zB._syncParentEnabledState();
          if (BB) {
            const BB = this.isEnabled();
            BB !== jB && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(BB)
          }
        }
        mH(BB) {
          if (this._nodeDataStorage._isEnabled === BB) return;
          const jB = this._hasEffectiveEnabledStateObservers(),
            zB = jB ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = BB, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(BB), jB) {
            const BB = this.isEnabled();
            BB !== zB && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(BB)
          }
        }
        isDescendantOf(BB) {
          return !!this.parent && (this.parent === BB || this.parent.isDescendantOf(BB))
        }
        _getDescendants(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            zB = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let QB = 0; QB < this._children.length; QB++) {
              const nB = this._children[QB];
              zB && !zB(nB) || BB.push(nB), jB || nB._getDescendants(BB, !1, zB)
            }
        }
        getDescendants(BB, jB) {
          const zB = [];
          return this._getDescendants(zB, BB, jB), zB
        }
        getChildMeshes(BB, jB) {
          const zB = [];
          return this._getDescendants(zB, BB, (BB => (!jB || jB(BB)) && void 0 !== BB.cullingStrategy)), zB
        }
        getChildren(BB) {
          let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(jB, BB)
        }
        _setReady(BB) {
          BB !== this._nodeDataStorage._isReady && (BB ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(BB) {
          for (let jB = 0; jB < this.animations.length; jB++) {
            const zB = this.animations[jB];
            if (zB.name === BB) return zB
          }
          return null
        }
        createAnimationRange(jB, zB, QB) {
          if (!this._ranges[jB]) {
            this._ranges[jB] = BB._AnimationRangeFactory(jB, zB, QB);
            for (let BB = 0, nB = this.animations.length; BB < nB; BB++) this.animations[BB] && this.animations[BB].createRange(jB, zB, QB)
          }
        }
        deleteAnimationRange(BB) {
          let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let zB = 0, QB = this.animations.length; zB < QB; zB++) this.animations[zB] && this.animations[zB].deleteRange(BB, jB);
          this._ranges[BB] = null
        }
        getAnimationRange(BB) {
          return this._ranges[BB] || null
        }
        clone(jB, zB, QB) {
          const nB = UB.b.Clone((() => new BB(jB, this.aY())), this);
          if (zB && (nB.parent = zB), !QB) {
            const BB = this.getDescendants(!0);
            for (let zB = 0; zB < BB.length; zB++) {
              const QB = BB[zB];
              QB.clone(jB + "." + QB.name, nB)
            }
          }
          return nB
        }
        getAnimationRanges() {
          const BB = [];
          let jB;
          for (jB in this._ranges) BB.push(this._ranges[jB]);
          return BB
        }
        beginAnimation(BB, jB, zB, QB) {
          const nB = this.getAnimationRange(BB);
          return nB ? this._scene.beginAnimation(this, nB.from, nB.to, jB, zB, QB) : null
        }
        serializeAnimationRanges() {
          const BB = [];
          for (const jB in this._ranges) {
            const zB = this._ranges[jB];
            if (!zB) continue;
            const QB = {};
            QB.name = jB, QB.from = zB.from, QB.to = zB.to, BB.push(QB)
          }
          return BB
        }
        computeWorldMatrix(BB) {
          return this._worldMatrix || (this._worldMatrix = nB.c.Identity()), this._worldMatrix
        }
        dispose(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !BB) {
            const zB = this.getDescendants(!0);
            for (const QB of zB) QB.dispose(BB, jB)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.pY.notifyObservers(this), this.pY.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const zB of this._behaviors) zB.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(BB, jB, zB) {
          if (jB.gy)
            for (let QB = 0; QB < jB.gy.length; QB++) {
              const zB = jB.gy[QB];
              BB.createAnimationRange(zB.name, zB.from, zB.to)
            }
        }
        getHierarchyBoundingVectors() {
          let BB, jB, zB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            QB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.aY().incrementRenderId(), this.computeWorldMatrix(!0);
          const dB = this;
          if (dB.rV && dB.cL) {
            const zB = dB.rV();
            BB = zB.boundingBox.minimumWorld.clone(), jB = zB.boundingBox.maximumWorld.clone()
          } else BB = new nB.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), jB = new nB.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (zB) {
            const zB = this.getDescendants(!1);
            for (const dB of zB) {
              const zB = dB;
              if (zB.computeWorldMatrix(!0), QB && !QB(zB)) continue;
              if (!zB.rV || 0 === zB.getTotalVertices()) continue;
              const IB = zB.rV().boundingBox,
                NB = IB.minimumWorld,
                uB = IB.maximumWorld;
              nB.m.CheckExtends(NB, BB, jB), nB.m.CheckExtends(uB, BB, jB)
            }
          }
          return {
            min: BB,
            max: jB
          }
        }
      }, (() => {
        const nB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        jB = [(0, dB.A)()], zB = [(0, dB.A)()], pB = [(0, dB.A)()], rB = [(0, dB.A)()], sB = [(0, dB.A)()], (0, QB.e)(null, null, jB, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: BB => "name" in BB,
            get: BB => BB.name,
            set: (BB, jB) => {
              BB.name = jB
            }
          },
          metadata: nB
        }, JB, mB), (0, QB.e)(null, null, zB, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: BB => "id" in BB,
            get: BB => BB.id,
            set: (BB, jB) => {
              BB.id = jB
            }
          },
          metadata: nB
        }, yB, kB), (0, QB.e)(null, null, pB, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: BB => "uniqueId" in BB,
            get: BB => BB.uniqueId,
            set: (BB, jB) => {
              BB.uniqueId = jB
            }
          },
          metadata: nB
        }, GB, LB), (0, QB.e)(null, null, rB, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: BB => "state" in BB,
            get: BB => BB.state,
            set: (BB, jB) => {
              BB.state = jB
            }
          },
          metadata: nB
        }, gB, tB), (0, QB.e)(null, null, sB, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: BB => "metadata" in BB,
            get: BB => BB.metadata,
            set: (BB, jB) => {
              BB.metadata = jB
            }
          },
          metadata: nB
        }, SB, MB), nB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: nB
        })
      })(), BB._AnimationRangeFactory = (BB, jB, zB) => {
        throw (0, uB.k)("AnimationRange")
      }, BB._NodeConstructors = {}, BB
    })()
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);