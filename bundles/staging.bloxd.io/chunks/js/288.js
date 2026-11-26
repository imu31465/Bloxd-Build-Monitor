export const id = 288;
export const ids = [288];
export const modules = {
  41250: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => zB
    });
    var YB = GB(40998),
      DB = GB(41004),
      QB = GB(37778),
      oB = GB(37894),
      jB = GB(41220),
      yB = GB(41136),
      JB = GB(37823),
      MB = GB(41211),
      PB = GB(41022);
    let zB = (() => {
      var BB, OB;
      let GB, zB, lB, pB, qB, ZB, NB, RB, WB, AB, VB, SB, nB, UB = jB.b,
        fB = [],
        kB = [],
        dB = [],
        KB = [],
        uB = [],
        mB = [],
        IB = [],
        FB = [],
        iB = [],
        LB = [],
        gB = [],
        rB = [],
        XB = [],
        wB = [],
        EB = [],
        cB = [],
        hB = [],
        aB = [],
        eB = [],
        TB = [],
        bB = [];
      return BB = class extends UB {
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
          return (0, YB.c)(this, OB, "f")
        }
        set renderPriority(BB) {
          (0, YB.d)(this, OB, BB, "f")
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
        getProjectionMatrix(BB, OB) {
          return null
        }
        constructor(GB, DB, QB) {
          super(GB, DB, !1), this.diffuse = ((0, YB.j)(this, fB), (0, YB.j)(this, kB, new oB.c(1, 1, 1))), this.specular = ((0, YB.j)(this, dB), (0, YB.j)(this, KB, new oB.c(1, 1, 1))), this.falloffType = ((0, YB.j)(this, uB), (0, YB.j)(this, mB, BB.FALLOFF_DEFAULT)), this.intensity = ((0, YB.j)(this, IB), (0, YB.j)(this, FB, 1)), this._range = ((0, YB.j)(this, iB), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = BB.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, YB.j)(this, LB, void 0), OB.set(this, ((0, YB.j)(this, gB), (0, YB.j)(this, rB, 0))), this._shadowEnabled = ((0, YB.j)(this, XB), (0, YB.j)(this, wB, !0)), this._includedOnlyMeshes = (0, YB.j)(this, EB), this._excludeWithLayerMask = (0, YB.j)(this, cB, 0), this._includeOnlyWithLayerMask = ((0, YB.j)(this, hB), (0, YB.j)(this, aB, 0)), this._lightmapMode = ((0, YB.j)(this, eB), (0, YB.j)(this, TB, 0)), this._shadowGenerators = ((0, YB.j)(this, bB), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, QB || this.JF().addLight(this), this._uniformBuffer = new yB.d(this.JF().Lp(), void 0, void 0, GB), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], QB || this._resyncMeshes()
        }
        transferTexturesToEffect(BB, OB) {
          return this
        }
        _bindLight(BB, OB, GB, YB) {
          let DB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const QB = BB.toString();
          let jB = !1;
          if (this._uniformBuffer.bindToEffect(GB, "Light" + QB), this._renderId !== OB.getRenderId() || this._lastUseSpecular !== YB || !this._uniformBuffer.useUbo) {
            this._renderId = OB.getRenderId(), this._lastUseSpecular = YB;
            const BB = this.getScaledIntensity();
            this.transferToEffect(GB, QB), this.diffuse.scaleToRef(BB, oB.o.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", oB.o.Color3[0], this.range, QB), YB && (this.specular.scaleToRef(BB, oB.o.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", oB.o.Color3[1], this.radius, QB)), jB = !0
          }
          if (this.transferTexturesToEffect(GB, QB), OB.shadowsEnabled && this.shadowEnabled && DB) {
            const BB = this.getShadowGenerator(OB.activeCamera) ?? this.getShadowGenerator();
            BB && (BB.bindShadowLight(QB, GB), jB = !0)
          }
          jB ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(BB) {
          let OB = "Name: " + this.name;
          if (OB += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let GB = 0; GB < this.animations.length; GB++) OB += ", animation[0]: " + this.animations[GB].toString(BB);
          return OB
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.lV() || this._resyncMeshes()
        }
        Zk(BB) {
          super.Zk(BB), this._resyncMeshes()
        }
        getShadowGenerator() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(BB) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return QB.r.Zero()
        }
        canAffectMesh(BB) {
          return !BB || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(BB)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(BB)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & BB.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & BB.layerMask)))
        }
        dispose(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const BB = this._shadowGenerators.values();
            for (let OB = BB.next(); !0 !== OB.done; OB = BB.next()) {
              OB.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.JF().stopAnimation(this), this._parentContainer) {
            const BB = this._parentContainer.lights.indexOf(this);
            BB > -1 && this._parentContainer.lights.splice(BB, 1), this._parentContainer = null
          }
          for (const GB of this.JF().meshes) GB._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.JF().removeLight(this), super.dispose(BB, OB)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(OB) {
          let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const YB = BB.GetConstructorFromName(this.getTypeID(), OB, this.JF());
          if (!YB) return null;
          const DB = PB.d.Clone(YB, this);
          return OB && (DB.name = OB), GB && (DB.parent = GB), DB.Zk(this.isEnabled()), this.onClonedObservable.notifyObservers(DB), DB
        }
        serialize() {
          const BB = PB.d.Serialize(this);
          if (BB.uniqueId = this.uniqueId, BB.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(BB), this.excludedMeshes.length > 0) {
            BB.excludedMeshesIds = [];
            for (const OB of this.excludedMeshes) BB.excludedMeshesIds.push(OB.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            BB.includedOnlyMeshesIds = [];
            for (const OB of this.includedOnlyMeshes) BB.includedOnlyMeshesIds.push(OB.id)
          }
          return PB.d.AppendSerializedAnimations(this, BB), BB.JZ = this.serializeAnimationRanges(), BB.isEnabled = this.isEnabled(), BB
        }
        static GetConstructorFromName(BB, OB, GB) {
          const YB = jB.b.Construct("Light_Type_" + BB, OB, GB);
          return YB || null
        }
        static Parse(OB, GB) {
          let YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const DB = BB.GetConstructorFromName(OB.type, OB.name, GB);
          if (!DB) return null;
          const QB = PB.d.Parse(DB, OB, GB, YB);
          if (OB.excludedMeshesIds && (QB._excludedMeshesIds = OB.excludedMeshesIds), OB.includedOnlyMeshesIds && (QB._includedOnlyMeshesIds = OB.includedOnlyMeshesIds), void 0 !== OB.parentId && (QB._waitingParentId = OB.parentId), void 0 !== OB.parentInstanceIndex && (QB._waitingParentInstanceIndex = OB.parentInstanceIndex), void 0 !== OB.falloffType && (QB.falloffType = OB.falloffType), void 0 !== OB.lightmapMode && (QB.lightmapMode = OB.lightmapMode), OB.animations) {
            for (let BB = 0; BB < OB.animations.length; BB++) {
              const GB = OB.animations[BB],
                YB = (0, JB.c)("BABYLON.Animation");
              YB && QB.animations.push(YB.Parse(GB))
            }
            jB.b.ParseAnimationRanges(QB, OB, GB)
          }
          return OB.autoAnimate && GB.beginAnimation(QB, OB.autoAnimateFrom, OB.autoAnimateTo, OB.autoAnimateLoop, OB.autoAnimateSpeed || 1), void 0 !== OB.isEnabled && QB.Zk(OB.isEnabled), QB._onParsed(OB, GB, YB), QB
        }
        _onParsed(BB, OB) {}
        _hookArrayForExcluded(BB) {
          var OB = this;
          const GB = BB.push;
          BB.push = function() {
            for (var YB = arguments.length, DB = new Array(YB), QB = 0; QB < YB; QB++) DB[QB] = arguments[QB];
            const oB = GB.apply(BB, DB);
            if (OB._clusteredContainer) return oB;
            for (const BB of DB) BB._resyncLightSource(OB);
            return oB
          };
          const YB = BB.splice;
          BB.splice = (OB, GB) => {
            const DB = YB.call(BB, OB, GB ?? BB.length);
            if (this._clusteredContainer) return DB;
            for (const BB of DB) BB._resyncLightSource(this);
            return DB
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(BB) {
          var OB = this;
          const GB = BB.push;
          BB.push = function() {
            for (var YB = arguments.length, DB = new Array(YB), QB = 0; QB < YB; QB++) DB[QB] = arguments[QB];
            const oB = GB.apply(BB, DB);
            return OB._resyncMeshes(), oB
          };
          const YB = BB.splice;
          BB.splice = (OB, GB) => {
            const DB = YB.call(BB, OB, GB ?? BB.length);
            return this._resyncMeshes(), DB
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const BB of this.JF().meshes) BB._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const BB of this.JF().meshes) - 1 !== BB.lightSources.indexOf(this) && BB._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.JF().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let OB = 0;
          const GB = this.getTypeID();
          let YB = this.intensityMode;
          switch (YB === BB.INTENSITYMODE_AUTOMATIC && (YB = GB === BB.LIGHTTYPEID_DIRECTIONALLIGHT ? BB.INTENSITYMODE_ILLUMINANCE : BB.INTENSITYMODE_LUMINOUSINTENSITY), GB) {
            case BB.LIGHTTYPEID_POINTLIGHT:
            case BB.LIGHTTYPEID_SPOTLIGHT:
              switch (YB) {
                case BB.INTENSITYMODE_LUMINOUSPOWER:
                  OB = 1 / (4 * Math.PI);
                  break;
                case BB.INTENSITYMODE_LUMINOUSINTENSITY:
                  OB = 1;
                  break;
                case BB.INTENSITYMODE_LUMINANCE:
                  OB = this.radius * this.radius
              }
              break;
            case BB.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (YB) {
                case BB.INTENSITYMODE_ILLUMINANCE:
                  OB = 1;
                  break;
                case BB.INTENSITYMODE_LUMINANCE: {
                  let BB = this.radius;
                  BB = Math.max(BB, .001);
                  OB = 2 * Math.PI * (1 - Math.cos(BB));
                  break
                }
              }
              break;
            case BB.LIGHTTYPEID_HEMISPHERICLIGHT:
            case BB.LIGHTTYPEID_RECT_AREALIGHT:
              OB = 1
          }
          return OB
        }
        _reorderLightsInScene() {
          const BB = this.JF();
          0 != this._renderPriority && (BB.requireLightSorting = !0), this.JF().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, OB = new WeakMap, (() => {
        const OB = "function" === typeof Symbol && Symbol.metadata ? Object.create(UB[Symbol.metadata] ?? null) : void 0;
        GB = [(0, DB.n)()], zB = [(0, DB.n)()], lB = [(0, DB.L)()], pB = [(0, DB.L)()], qB = [(0, DB.L)()], ZB = [(0, DB.L)()], NB = [(0, DB.L)()], RB = [(0, DB.L)()], WB = [(0, DB.g)("_reorderLightsInScene")], AB = [(0, DB.L)("shadowEnabled")], VB = [(0, DB.L)("excludeWithLayerMask")], SB = [(0, DB.L)("includeOnlyWithLayerMask")], nB = [(0, DB.L)("lightmapMode")], (0, YB.h)(BB, null, qB, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: BB => "range" in BB,
            get: BB => BB.range
          },
          metadata: OB
        }, null, fB), (0, YB.h)(BB, null, ZB, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "intensityMode" in BB,
            get: BB => BB.intensityMode
          },
          metadata: OB
        }, null, fB), (0, YB.h)(BB, null, NB, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: BB => "radius" in BB,
            get: BB => BB.radius
          },
          metadata: OB
        }, null, fB), (0, YB.h)(BB, null, WB, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: BB => "renderPriority" in BB,
            get: BB => BB.renderPriority,
            set: (BB, OB) => {
              BB.renderPriority = OB
            }
          },
          metadata: OB
        }, rB, XB), (0, YB.h)(null, null, GB, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: BB => "diffuse" in BB,
            get: BB => BB.diffuse,
            set: (BB, OB) => {
              BB.diffuse = OB
            }
          },
          metadata: OB
        }, kB, dB), (0, YB.h)(null, null, zB, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: BB => "specular" in BB,
            get: BB => BB.specular,
            set: (BB, OB) => {
              BB.specular = OB
            }
          },
          metadata: OB
        }, KB, uB), (0, YB.h)(null, null, lB, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: BB => "falloffType" in BB,
            get: BB => BB.falloffType,
            set: (BB, OB) => {
              BB.falloffType = OB
            }
          },
          metadata: OB
        }, mB, IB), (0, YB.h)(null, null, pB, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "intensity" in BB,
            get: BB => BB.intensity,
            set: (BB, OB) => {
              BB.intensity = OB
            }
          },
          metadata: OB
        }, FB, iB), (0, YB.h)(null, null, RB, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: BB => "_renderPriority" in BB,
            get: BB => BB._renderPriority,
            set: (BB, OB) => {
              BB._renderPriority = OB
            }
          },
          metadata: OB
        }, LB, gB), (0, YB.h)(null, null, AB, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "_shadowEnabled" in BB,
            get: BB => BB._shadowEnabled,
            set: (BB, OB) => {
              BB._shadowEnabled = OB
            }
          },
          metadata: OB
        }, wB, EB), (0, YB.h)(null, null, VB, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: BB => "_excludeWithLayerMask" in BB,
            get: BB => BB._excludeWithLayerMask,
            set: (BB, OB) => {
              BB._excludeWithLayerMask = OB
            }
          },
          metadata: OB
        }, cB, hB), (0, YB.h)(null, null, SB, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: BB => "_includeOnlyWithLayerMask" in BB,
            get: BB => BB._includeOnlyWithLayerMask,
            set: (BB, OB) => {
              BB._includeOnlyWithLayerMask = OB
            }
          },
          metadata: OB
        }, aB, eB), (0, YB.h)(null, null, nB, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "_lightmapMode" in BB,
            get: BB => BB._lightmapMode,
            set: (BB, OB) => {
              BB._lightmapMode = OB
            }
          },
          metadata: OB
        }, TB, bB), OB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: OB
        })
      })(), BB.FALLOFF_DEFAULT = MB.c.FALLOFF_DEFAULT, BB.FALLOFF_PHYSICAL = MB.c.FALLOFF_PHYSICAL, BB.FALLOFF_GLTF = MB.c.FALLOFF_GLTF, BB.FALLOFF_STANDARD = MB.c.FALLOFF_STANDARD, BB.LIGHTMAP_DEFAULT = MB.c.LIGHTMAP_DEFAULT, BB.LIGHTMAP_SPECULAR = MB.c.LIGHTMAP_SPECULAR, BB.LIGHTMAP_SHADOWSONLY = MB.c.LIGHTMAP_SHADOWSONLY, BB.INTENSITYMODE_AUTOMATIC = MB.c.INTENSITYMODE_AUTOMATIC, BB.INTENSITYMODE_LUMINOUSPOWER = MB.c.INTENSITYMODE_LUMINOUSPOWER, BB.INTENSITYMODE_LUMINOUSINTENSITY = MB.c.INTENSITYMODE_LUMINOUSINTENSITY, BB.INTENSITYMODE_ILLUMINANCE = MB.c.INTENSITYMODE_ILLUMINANCE, BB.INTENSITYMODE_LUMINANCE = MB.c.INTENSITYMODE_LUMINANCE, BB.LIGHTTYPEID_POINTLIGHT = MB.c.LIGHTTYPEID_POINTLIGHT, BB.LIGHTTYPEID_DIRECTIONALLIGHT = MB.c.LIGHTTYPEID_DIRECTIONALLIGHT, BB.LIGHTTYPEID_SPOTLIGHT = MB.c.LIGHTTYPEID_SPOTLIGHT, BB.LIGHTTYPEID_HEMISPHERICLIGHT = MB.c.LIGHTTYPEID_HEMISPHERICLIGHT, BB.LIGHTTYPEID_RECT_AREALIGHT = MB.c.LIGHTTYPEID_RECT_AREALIGHT, BB
    })()
  },
  41220: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => PB
    });
    var YB = GB(40998),
      DB = GB(37778),
      QB = GB(41004),
      oB = GB(37802),
      jB = GB(37796),
      yB = GB(40890),
      JB = GB(41022);
    class MB {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new oB.b, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new oB.b, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let PB = (() => {
      var BB;
      let OB, GB, PB, zB, lB, pB = [],
        qB = [],
        ZB = [],
        NB = [],
        RB = [],
        WB = [],
        AB = [],
        VB = [],
        SB = [],
        nB = [];
      return BB = class {
        static AddNodeConstructor(BB, OB) {
          this._NodeConstructors[BB] = OB
        }
        static Construct(BB, OB, GB, YB) {
          const DB = this._NodeConstructors[BB];
          return DB ? DB(OB, GB, YB) : null
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
        lV() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(BB) {
          if (this._parentNode === BB) return;
          const OB = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const OB = this._parentNode._children.indexOf(this); - 1 !== OB && this._parentNode._children.splice(OB, 1), BB || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = BB, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), OB || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
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
              OB = BB.length - 1;
            BB[this._nodeDataStorage._sceneRootNodesIndex] = BB[OB], BB[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
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
          return (BB = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (BB._onEffectiveEnabledStateChangedObservable = new oB.b)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new MB, this.name = (0, YB.j)(this, pB, void 0), this.id = ((0, YB.j)(this, qB), (0, YB.j)(this, ZB, void 0)), this.uniqueId = ((0, YB.j)(this, NB), (0, YB.j)(this, RB, void 0)), this.state = ((0, YB.j)(this, WB), (0, YB.j)(this, AB, "")), this.metadata = ((0, YB.j)(this, VB), (0, YB.j)(this, SB, null)), this._internalMetadata = (0, YB.j)(this, nB), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new oB.b, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = DB.d.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.lF = new oB.b, this._onDisposeObserver = null, this._behaviors = new Array, this.name = BB, this.id = BB, this._scene = OB || jB.b.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), GB && this._addToSceneRootNodes()
        }
        JF() {
          return this._scene
        }
        Lp() {
          return this._scene.Lp()
        }
        addBehavior(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(BB) || (BB.init(), this._scene.isLoading && !OB ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(BB) && BB.attach(this)
          })) : BB.attach(this), this._behaviors.push(BB)), this
        }
        removeBehavior(BB) {
          const OB = this._behaviors.indexOf(BB);
          return -1 === OB || (this._behaviors.splice(OB, 1), BB.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(BB) {
          for (const OB of this._behaviors)
            if (OB.name === BB) return OB;
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
        DYB(BB) {
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
            OB = BB ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const GB of this._children) GB._syncParentEnabledState();
          if (BB) {
            const BB = this.isEnabled();
            BB !== OB && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(BB)
          }
        }
        Zk(BB) {
          if (this._nodeDataStorage._isEnabled === BB) return;
          const OB = this._hasEffectiveEnabledStateObservers(),
            GB = OB ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = BB, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(BB), OB) {
            const BB = this.isEnabled();
            BB !== GB && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(BB)
          }
        }
        isDescendantOf(BB) {
          return !!this.parent && (this.parent === BB || this.parent.isDescendantOf(BB))
        }
        _getDescendants(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            GB = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let YB = 0; YB < this._children.length; YB++) {
              const DB = this._children[YB];
              GB && !GB(DB) || BB.push(DB), OB || DB._getDescendants(BB, !1, GB)
            }
        }
        getDescendants(BB, OB) {
          const GB = [];
          return this._getDescendants(GB, BB, OB), GB
        }
        getChildMeshes(BB, OB) {
          const GB = [];
          return this._getDescendants(GB, BB, (BB => (!OB || OB(BB)) && void 0 !== BB.cullingStrategy)), GB
        }
        getChildren(BB) {
          let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(OB, BB)
        }
        _setReady(BB) {
          BB !== this._nodeDataStorage._isReady && (BB ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(BB) {
          for (let OB = 0; OB < this.animations.length; OB++) {
            const GB = this.animations[OB];
            if (GB.name === BB) return GB
          }
          return null
        }
        createAnimationRange(OB, GB, YB) {
          if (!this._ranges[OB]) {
            this._ranges[OB] = BB._AnimationRangeFactory(OB, GB, YB);
            for (let BB = 0, DB = this.animations.length; BB < DB; BB++) this.animations[BB] && this.animations[BB].createRange(OB, GB, YB)
          }
        }
        deleteAnimationRange(BB) {
          let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let GB = 0, YB = this.animations.length; GB < YB; GB++) this.animations[GB] && this.animations[GB].deleteRange(BB, OB);
          this._ranges[BB] = null
        }
        getAnimationRange(BB) {
          return this._ranges[BB] || null
        }
        clone(OB, GB, YB) {
          const DB = JB.d.Clone((() => new BB(OB, this.JF())), this);
          if (GB && (DB.parent = GB), !YB) {
            const BB = this.getDescendants(!0);
            for (let GB = 0; GB < BB.length; GB++) {
              const YB = BB[GB];
              YB.clone(OB + "." + YB.name, DB)
            }
          }
          return DB
        }
        getAnimationRanges() {
          const BB = [];
          let OB;
          for (OB in this._ranges) BB.push(this._ranges[OB]);
          return BB
        }
        beginAnimation(BB, OB, GB, YB) {
          const DB = this.getAnimationRange(BB);
          return DB ? this._scene.beginAnimation(this, DB.from, DB.to, OB, GB, YB) : null
        }
        serializeAnimationRanges() {
          const BB = [];
          for (const OB in this._ranges) {
            const GB = this._ranges[OB];
            if (!GB) continue;
            const YB = {};
            YB.name = OB, YB.from = GB.from, YB.to = GB.to, BB.push(YB)
          }
          return BB
        }
        computeWorldMatrix(BB) {
          return this._worldMatrix || (this._worldMatrix = DB.d.Identity()), this._worldMatrix
        }
        dispose(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !BB) {
            const GB = this.getDescendants(!0);
            for (const YB of GB) YB.dispose(BB, OB)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.lF.notifyObservers(this), this.lF.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const GB of this._behaviors) GB.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(BB, OB, GB) {
          if (OB.JZ)
            for (let YB = 0; YB < OB.JZ.length; YB++) {
              const GB = OB.JZ[YB];
              BB.createAnimationRange(GB.name, GB.from, GB.to)
            }
        }
        getHierarchyBoundingVectors() {
          let BB, OB, GB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            YB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.JF().incrementRenderId(), this.computeWorldMatrix(!0);
          const QB = this;
          if (QB.Gw && QB.iW) {
            const GB = QB.Gw();
            BB = GB.boundingBox.minimumWorld.clone(), OB = GB.boundingBox.maximumWorld.clone()
          } else BB = new DB.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), OB = new DB.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (GB) {
            const GB = this.getDescendants(!1);
            for (const QB of GB) {
              const GB = QB;
              if (GB.computeWorldMatrix(!0), YB && !YB(GB)) continue;
              if (!GB.Gw || 0 === GB.getTotalVertices()) continue;
              const oB = GB.Gw().boundingBox,
                jB = oB.minimumWorld,
                yB = oB.maximumWorld;
              DB.r.CheckExtends(jB, BB, OB), DB.r.CheckExtends(yB, BB, OB)
            }
          }
          return {
            min: BB,
            max: OB
          }
        }
      }, (() => {
        const DB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        OB = [(0, QB.L)()], GB = [(0, QB.L)()], PB = [(0, QB.L)()], zB = [(0, QB.L)()], lB = [(0, QB.L)()], (0, YB.h)(null, null, OB, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: BB => "name" in BB,
            get: BB => BB.name,
            set: (BB, OB) => {
              BB.name = OB
            }
          },
          metadata: DB
        }, pB, qB), (0, YB.h)(null, null, GB, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: BB => "id" in BB,
            get: BB => BB.id,
            set: (BB, OB) => {
              BB.id = OB
            }
          },
          metadata: DB
        }, ZB, NB), (0, YB.h)(null, null, PB, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: BB => "uniqueId" in BB,
            get: BB => BB.uniqueId,
            set: (BB, OB) => {
              BB.uniqueId = OB
            }
          },
          metadata: DB
        }, RB, WB), (0, YB.h)(null, null, zB, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: BB => "state" in BB,
            get: BB => BB.state,
            set: (BB, OB) => {
              BB.state = OB
            }
          },
          metadata: DB
        }, AB, VB), (0, YB.h)(null, null, lB, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: BB => "metadata" in BB,
            get: BB => BB.metadata,
            set: (BB, OB) => {
              BB.metadata = OB
            }
          },
          metadata: DB
        }, SB, nB), DB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: DB
        })
      })(), BB._AnimationRangeFactory = (BB, OB, GB) => {
        throw (0, yB.j)("AnimationRange")
      }, BB._NodeConstructors = {}, BB
    })()
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);