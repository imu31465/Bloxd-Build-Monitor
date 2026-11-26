export const id = 284;
export const ids = [284];
export const modules = {
  41521: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => vV
    });
    var JV = xV(41257),
      YV = xV(41263),
      UV = xV(38269),
      yV = xV(38389),
      pV = xV(41486),
      QV = xV(41383),
      nV = xV(38318),
      wV = xV(41458),
      ZV = xV(41279);
    let vV = (() => {
      var VV, eV;
      let xV, vV, rV, kV, bV, EV, BV, jV, qV, tV, FV, TV, PV, AV = pV.e,
        NV = [],
        XV = [],
        MV = [],
        zV = [],
        GV = [],
        WV = [],
        RV = [],
        gV = [],
        DV = [],
        iV = [],
        CV = [],
        aV = [],
        oV = [],
        cV = [],
        hV = [],
        lV = [],
        LV = [],
        fV = [],
        mV = [],
        KV = [],
        HV = [];
      return VV = class extends AV {
        get range() {
          return this._range
        }
        set range(VV) {
          this._range = VV, this._inverseSquaredRange = 1 / (this.range * this.range)
        }
        get intensityMode() {
          return this._intensityMode
        }
        set intensityMode(VV) {
          this._intensityMode = VV, this._computePhotometricScale()
        }
        get radius() {
          return this._radius
        }
        set radius(VV) {
          this._radius = VV, this._computePhotometricScale()
        }
        get renderPriority() {
          return (0, JV.b)(this, eV, "f")
        }
        set renderPriority(VV) {
          (0, JV.f)(this, eV, VV, "f")
        }
        get shadowEnabled() {
          return this._shadowEnabled
        }
        set shadowEnabled(VV) {
          this._shadowEnabled !== VV && (this._shadowEnabled = VV, this._markMeshesAsLightDirty())
        }
        get includedOnlyMeshes() {
          return this._includedOnlyMeshes
        }
        set includedOnlyMeshes(VV) {
          this._includedOnlyMeshes = VV, this._hookArrayForIncludedOnly(VV)
        }
        get excludedMeshes() {
          return this._excludedMeshes
        }
        set excludedMeshes(VV) {
          this._excludedMeshes = VV, this._hookArrayForExcluded(VV)
        }
        get excludeWithLayerMask() {
          return this._excludeWithLayerMask
        }
        set excludeWithLayerMask(VV) {
          this._excludeWithLayerMask = VV, this._resyncMeshes()
        }
        get includeOnlyWithLayerMask() {
          return this._includeOnlyWithLayerMask
        }
        set includeOnlyWithLayerMask(VV) {
          this._includeOnlyWithLayerMask = VV, this._resyncMeshes()
        }
        get lightmapMode() {
          return this._lightmapMode
        }
        set lightmapMode(VV) {
          this._lightmapMode !== VV && (this._lightmapMode = VV, this._markMeshesAsLightDirty())
        }
        getViewMatrix(VV) {
          return null
        }
        getProjectionMatrix(VV, eV) {
          return null
        }
        constructor(xV, YV, UV) {
          super(xV, YV, !1), this.diffuse = ((0, JV.l)(this, NV), (0, JV.l)(this, XV, new yV.d(1, 1, 1))), this.specular = ((0, JV.l)(this, MV), (0, JV.l)(this, zV, new yV.d(1, 1, 1))), this.falloffType = ((0, JV.l)(this, GV), (0, JV.l)(this, WV, VV.FALLOFF_DEFAULT)), this.intensity = ((0, JV.l)(this, RV), (0, JV.l)(this, gV, 1)), this._range = ((0, JV.l)(this, DV), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = VV.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, JV.l)(this, iV, void 0), eV.set(this, ((0, JV.l)(this, CV), (0, JV.l)(this, aV, 0))), this._shadowEnabled = ((0, JV.l)(this, oV), (0, JV.l)(this, cV, !0)), this._includedOnlyMeshes = (0, JV.l)(this, hV), this._excludeWithLayerMask = (0, JV.l)(this, lV, 0), this._includeOnlyWithLayerMask = ((0, JV.l)(this, LV), (0, JV.l)(this, fV, 0)), this._lightmapMode = ((0, JV.l)(this, mV), (0, JV.l)(this, KV, 0)), this._shadowGenerators = ((0, JV.l)(this, HV), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, UV || this.dD().addLight(this), this._uniformBuffer = new QV.b(this.dD().sk(), void 0, void 0, xV), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], UV || this._resyncMeshes()
        }
        transferTexturesToEffect(VV, eV) {
          return this
        }
        _bindLight(VV, eV, xV, JV) {
          let YV = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const UV = VV.toString();
          let pV = !1;
          if (this._uniformBuffer.bindToEffect(xV, "Light" + UV), this._renderId !== eV.getRenderId() || this._lastUseSpecular !== JV || !this._uniformBuffer.useUbo) {
            this._renderId = eV.getRenderId(), this._lastUseSpecular = JV;
            const VV = this.getScaledIntensity();
            this.transferToEffect(xV, UV), this.diffuse.scaleToRef(VV, yV.k.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", yV.k.Color3[0], this.range, UV), JV && (this.specular.scaleToRef(VV, yV.k.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", yV.k.Color3[1], this.radius, UV)), pV = !0
          }
          if (this.transferTexturesToEffect(xV, UV), eV.shadowsEnabled && this.shadowEnabled && YV) {
            const VV = this.getShadowGenerator(eV.activeCamera) ?? this.getShadowGenerator();
            VV && (VV.bindShadowLight(UV, xV), pV = !0)
          }
          pV ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(VV) {
          let eV = "Name: " + this.name;
          if (eV += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let xV = 0; xV < this.animations.length; xV++) eV += ", animation[0]: " + this.animations[xV].toString(VV);
          return eV
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.iN() || this._resyncMeshes()
        }
        pW(VV) {
          super.pW(VV), this._resyncMeshes()
        }
        getShadowGenerator() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(VV) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return UV.o.Zero()
        }
        canAffectMesh(VV) {
          return !VV || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(VV)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(VV)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & VV.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & VV.layerMask)))
        }
        dispose(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const VV = this._shadowGenerators.values();
            for (let eV = VV.next(); !0 !== eV.done; eV = VV.next()) {
              eV.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.dD().stopAnimation(this), this._parentContainer) {
            const VV = this._parentContainer.lights.indexOf(this);
            VV > -1 && this._parentContainer.lights.splice(VV, 1), this._parentContainer = null
          }
          for (const xV of this.dD().meshes) xV._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.dD().removeLight(this), super.dispose(VV, eV)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(eV) {
          let xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const JV = VV.GetConstructorFromName(this.getTypeID(), eV, this.dD());
          if (!JV) return null;
          const YV = ZV.b.Clone(JV, this);
          return eV && (YV.name = eV), xV && (YV.parent = xV), YV.pW(this.isEnabled()), this.onClonedObservable.notifyObservers(YV), YV
        }
        serialize() {
          const VV = ZV.b.Serialize(this);
          if (VV.uniqueId = this.uniqueId, VV.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(VV), this.excludedMeshes.length > 0) {
            VV.excludedMeshesIds = [];
            for (const eV of this.excludedMeshes) VV.excludedMeshesIds.push(eV.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            VV.includedOnlyMeshesIds = [];
            for (const eV of this.includedOnlyMeshes) VV.includedOnlyMeshesIds.push(eV.id)
          }
          return ZV.b.AppendSerializedAnimations(this, VV), VV.TE = this.serializeAnimationRanges(), VV.isEnabled = this.isEnabled(), VV
        }
        static GetConstructorFromName(VV, eV, xV) {
          const JV = pV.e.Construct("Light_Type_" + VV, eV, xV);
          return JV || null
        }
        static Parse(eV, xV) {
          let JV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const YV = VV.GetConstructorFromName(eV.type, eV.name, xV);
          if (!YV) return null;
          const UV = ZV.b.Parse(YV, eV, xV, JV);
          if (eV.excludedMeshesIds && (UV._excludedMeshesIds = eV.excludedMeshesIds), eV.includedOnlyMeshesIds && (UV._includedOnlyMeshesIds = eV.includedOnlyMeshesIds), void 0 !== eV.parentId && (UV._waitingParentId = eV.parentId), void 0 !== eV.parentInstanceIndex && (UV._waitingParentInstanceIndex = eV.parentInstanceIndex), void 0 !== eV.falloffType && (UV.falloffType = eV.falloffType), void 0 !== eV.lightmapMode && (UV.lightmapMode = eV.lightmapMode), eV.animations) {
            for (let VV = 0; VV < eV.animations.length; VV++) {
              const xV = eV.animations[VV],
                JV = (0, nV.c)("BABYLON.Animation");
              JV && UV.animations.push(JV.Parse(xV))
            }
            pV.e.ParseAnimationRanges(UV, eV, xV)
          }
          return eV.autoAnimate && xV.beginAnimation(UV, eV.autoAnimateFrom, eV.autoAnimateTo, eV.autoAnimateLoop, eV.autoAnimateSpeed || 1), void 0 !== eV.isEnabled && UV.pW(eV.isEnabled), UV._onParsed(eV, xV, JV), UV
        }
        _onParsed(VV, eV) {}
        _hookArrayForExcluded(VV) {
          var eV = this;
          const xV = VV.push;
          VV.push = function() {
            for (var JV = arguments.length, YV = new Array(JV), UV = 0; UV < JV; UV++) YV[UV] = arguments[UV];
            const yV = xV.apply(VV, YV);
            if (eV._clusteredContainer) return yV;
            for (const VV of YV) VV._resyncLightSource(eV);
            return yV
          };
          const JV = VV.splice;
          VV.splice = (eV, xV) => {
            const YV = JV.call(VV, eV, xV ?? VV.length);
            if (this._clusteredContainer) return YV;
            for (const VV of YV) VV._resyncLightSource(this);
            return YV
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(VV) {
          var eV = this;
          const xV = VV.push;
          VV.push = function() {
            for (var JV = arguments.length, YV = new Array(JV), UV = 0; UV < JV; UV++) YV[UV] = arguments[UV];
            const yV = xV.apply(VV, YV);
            return eV._resyncMeshes(), yV
          };
          const JV = VV.splice;
          VV.splice = (eV, xV) => {
            const YV = JV.call(VV, eV, xV ?? VV.length);
            return this._resyncMeshes(), YV
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const VV of this.dD().meshes) VV._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const VV of this.dD().meshes) - 1 !== VV.lightSources.indexOf(this) && VV._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.dD().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let eV = 0;
          const xV = this.getTypeID();
          let JV = this.intensityMode;
          switch (JV === VV.INTENSITYMODE_AUTOMATIC && (JV = xV === VV.LIGHTTYPEID_DIRECTIONALLIGHT ? VV.INTENSITYMODE_ILLUMINANCE : VV.INTENSITYMODE_LUMINOUSINTENSITY), xV) {
            case VV.LIGHTTYPEID_POINTLIGHT:
            case VV.LIGHTTYPEID_SPOTLIGHT:
              switch (JV) {
                case VV.INTENSITYMODE_LUMINOUSPOWER:
                  eV = 1 / (4 * Math.PI);
                  break;
                case VV.INTENSITYMODE_LUMINOUSINTENSITY:
                  eV = 1;
                  break;
                case VV.INTENSITYMODE_LUMINANCE:
                  eV = this.radius * this.radius
              }
              break;
            case VV.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (JV) {
                case VV.INTENSITYMODE_ILLUMINANCE:
                  eV = 1;
                  break;
                case VV.INTENSITYMODE_LUMINANCE: {
                  let VV = this.radius;
                  VV = Math.max(VV, .001);
                  eV = 2 * Math.PI * (1 - Math.cos(VV));
                  break
                }
              }
              break;
            case VV.LIGHTTYPEID_HEMISPHERICLIGHT:
            case VV.LIGHTTYPEID_RECT_AREALIGHT:
              eV = 1
          }
          return eV
        }
        _reorderLightsInScene() {
          const VV = this.dD();
          0 != this._renderPriority && (VV.requireLightSorting = !0), this.dD().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, eV = new WeakMap, (() => {
        const eV = "function" === typeof Symbol && Symbol.metadata ? Object.create(AV[Symbol.metadata] ?? null) : void 0;
        xV = [(0, YV.o)()], vV = [(0, YV.o)()], rV = [(0, YV.J)()], kV = [(0, YV.J)()], bV = [(0, YV.J)()], EV = [(0, YV.J)()], BV = [(0, YV.J)()], jV = [(0, YV.J)()], qV = [(0, YV.h)("_reorderLightsInScene")], tV = [(0, YV.J)("shadowEnabled")], FV = [(0, YV.J)("excludeWithLayerMask")], TV = [(0, YV.J)("includeOnlyWithLayerMask")], PV = [(0, YV.J)("lightmapMode")], (0, JV.i)(VV, null, bV, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: VV => "range" in VV,
            get: VV => VV.range
          },
          metadata: eV
        }, null, NV), (0, JV.i)(VV, null, EV, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: VV => "intensityMode" in VV,
            get: VV => VV.intensityMode
          },
          metadata: eV
        }, null, NV), (0, JV.i)(VV, null, BV, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: VV => "radius" in VV,
            get: VV => VV.radius
          },
          metadata: eV
        }, null, NV), (0, JV.i)(VV, null, qV, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: VV => "renderPriority" in VV,
            get: VV => VV.renderPriority,
            set: (VV, eV) => {
              VV.renderPriority = eV
            }
          },
          metadata: eV
        }, aV, oV), (0, JV.i)(null, null, xV, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: VV => "diffuse" in VV,
            get: VV => VV.diffuse,
            set: (VV, eV) => {
              VV.diffuse = eV
            }
          },
          metadata: eV
        }, XV, MV), (0, JV.i)(null, null, vV, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: VV => "specular" in VV,
            get: VV => VV.specular,
            set: (VV, eV) => {
              VV.specular = eV
            }
          },
          metadata: eV
        }, zV, GV), (0, JV.i)(null, null, rV, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: VV => "falloffType" in VV,
            get: VV => VV.falloffType,
            set: (VV, eV) => {
              VV.falloffType = eV
            }
          },
          metadata: eV
        }, WV, RV), (0, JV.i)(null, null, kV, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: VV => "intensity" in VV,
            get: VV => VV.intensity,
            set: (VV, eV) => {
              VV.intensity = eV
            }
          },
          metadata: eV
        }, gV, DV), (0, JV.i)(null, null, jV, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: VV => "_renderPriority" in VV,
            get: VV => VV._renderPriority,
            set: (VV, eV) => {
              VV._renderPriority = eV
            }
          },
          metadata: eV
        }, iV, CV), (0, JV.i)(null, null, tV, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: VV => "_shadowEnabled" in VV,
            get: VV => VV._shadowEnabled,
            set: (VV, eV) => {
              VV._shadowEnabled = eV
            }
          },
          metadata: eV
        }, cV, hV), (0, JV.i)(null, null, FV, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: VV => "_excludeWithLayerMask" in VV,
            get: VV => VV._excludeWithLayerMask,
            set: (VV, eV) => {
              VV._excludeWithLayerMask = eV
            }
          },
          metadata: eV
        }, lV, LV), (0, JV.i)(null, null, TV, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: VV => "_includeOnlyWithLayerMask" in VV,
            get: VV => VV._includeOnlyWithLayerMask,
            set: (VV, eV) => {
              VV._includeOnlyWithLayerMask = eV
            }
          },
          metadata: eV
        }, fV, mV), (0, JV.i)(null, null, PV, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: VV => "_lightmapMode" in VV,
            get: VV => VV._lightmapMode,
            set: (VV, eV) => {
              VV._lightmapMode = eV
            }
          },
          metadata: eV
        }, KV, HV), eV && Object.defineProperty(VV, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: eV
        })
      })(), VV.FALLOFF_DEFAULT = wV.b.FALLOFF_DEFAULT, VV.FALLOFF_PHYSICAL = wV.b.FALLOFF_PHYSICAL, VV.FALLOFF_GLTF = wV.b.FALLOFF_GLTF, VV.FALLOFF_STANDARD = wV.b.FALLOFF_STANDARD, VV.LIGHTMAP_DEFAULT = wV.b.LIGHTMAP_DEFAULT, VV.LIGHTMAP_SPECULAR = wV.b.LIGHTMAP_SPECULAR, VV.LIGHTMAP_SHADOWSONLY = wV.b.LIGHTMAP_SHADOWSONLY, VV.INTENSITYMODE_AUTOMATIC = wV.b.INTENSITYMODE_AUTOMATIC, VV.INTENSITYMODE_LUMINOUSPOWER = wV.b.INTENSITYMODE_LUMINOUSPOWER, VV.INTENSITYMODE_LUMINOUSINTENSITY = wV.b.INTENSITYMODE_LUMINOUSINTENSITY, VV.INTENSITYMODE_ILLUMINANCE = wV.b.INTENSITYMODE_ILLUMINANCE, VV.INTENSITYMODE_LUMINANCE = wV.b.INTENSITYMODE_LUMINANCE, VV.LIGHTTYPEID_POINTLIGHT = wV.b.LIGHTTYPEID_POINTLIGHT, VV.LIGHTTYPEID_DIRECTIONALLIGHT = wV.b.LIGHTTYPEID_DIRECTIONALLIGHT, VV.LIGHTTYPEID_SPOTLIGHT = wV.b.LIGHTTYPEID_SPOTLIGHT, VV.LIGHTTYPEID_HEMISPHERICLIGHT = wV.b.LIGHTTYPEID_HEMISPHERICLIGHT, VV.LIGHTTYPEID_RECT_AREALIGHT = wV.b.LIGHTTYPEID_RECT_AREALIGHT, VV
    })()
  },
  41486: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => ZV
    });
    var JV = xV(41257),
      YV = xV(38269),
      UV = xV(41263),
      yV = xV(38296),
      pV = xV(38287),
      QV = xV(41138),
      nV = xV(41279);
    class wV {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new yV.c, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new yV.c, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let ZV = (() => {
      var VV;
      let eV, xV, ZV, vV, rV, kV = [],
        bV = [],
        EV = [],
        BV = [],
        jV = [],
        qV = [],
        tV = [],
        FV = [],
        TV = [],
        PV = [];
      return VV = class {
        static AddNodeConstructor(VV, eV) {
          this._NodeConstructors[VV] = eV
        }
        static Construct(VV, eV, xV, JV) {
          const YV = this._NodeConstructors[VV];
          return YV ? YV(eV, xV, JV) : null
        }
        set accessibilityTag(VV) {
          this._accessibilityTag = VV, this.onAccessibilityTagChangedObservable.notifyObservers(VV)
        }
        get accessibilityTag() {
          return this._accessibilityTag
        }
        get doNotSerialize() {
          return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
        }
        set doNotSerialize(VV) {
          this._nodeDataStorage._doNotSerialize = VV
        }
        iN() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(VV) {
          if (this._parentNode === VV) return;
          const eV = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const eV = this._parentNode._children.indexOf(this); - 1 !== eV && this._parentNode._children.splice(eV, 1), VV || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = VV, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), eV || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
        }
        get parent() {
          return this._parentNode
        }
        get inheritVisibility() {
          return this._nodeDataStorage._inheritVisibility
        }
        set inheritVisibility(VV) {
          this._nodeDataStorage._inheritVisibility = VV
        }
        get isVisible() {
          return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
        }
        set isVisible(VV) {
          this._nodeDataStorage._isVisible = VV
        }
        _serializeAsParent(VV) {
          VV.parentId = this.uniqueId
        }
        _addToSceneRootNodes() {
          -1 === this._nodeDataStorage._sceneRootNodesIndex && (this._nodeDataStorage._sceneRootNodesIndex = this._scene.rootNodes.length, this._scene.rootNodes.push(this))
        }
        _removeFromSceneRootNodes() {
          if (-1 !== this._nodeDataStorage._sceneRootNodesIndex) {
            const VV = this._scene.rootNodes,
              eV = VV.length - 1;
            VV[this._nodeDataStorage._sceneRootNodesIndex] = VV[eV], VV[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
          }
        }
        get animationPropertiesOverride() {
          return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
        }
        set animationPropertiesOverride(VV) {
          this._animationPropertiesOverride = VV
        }
        getClassName() {
          return "Node"
        }
        set onDispose(VV) {
          this._onDisposeObserver && this.eC.remove(this._onDisposeObserver), this._onDisposeObserver = this.eC.add(VV)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var VV;
          return (VV = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (VV._onEffectiveEnabledStateChangedObservable = new yV.c)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new wV, this.name = (0, JV.l)(this, kV, void 0), this.id = ((0, JV.l)(this, bV), (0, JV.l)(this, EV, void 0)), this.uniqueId = ((0, JV.l)(this, BV), (0, JV.l)(this, jV, void 0)), this.state = ((0, JV.l)(this, qV), (0, JV.l)(this, tV, "")), this.metadata = ((0, JV.l)(this, FV), (0, JV.l)(this, TV, null)), this._internalMetadata = (0, JV.l)(this, PV), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new yV.c, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = YV.d.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.eC = new yV.c, this._onDisposeObserver = null, this._behaviors = new Array, this.name = VV, this.id = VV, this._scene = eV || pV.d.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), xV && this._addToSceneRootNodes()
        }
        dD() {
          return this._scene
        }
        sk() {
          return this._scene.sk()
        }
        addBehavior(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(VV) || (VV.init(), this._scene.isLoading && !eV ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(VV) && VV.attach(this)
          })) : VV.attach(this), this._behaviors.push(VV)), this
        }
        removeBehavior(VV) {
          const eV = this._behaviors.indexOf(VV);
          return -1 === eV || (this._behaviors.splice(eV, 1), VV.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(VV) {
          for (const eV of this._behaviors)
            if (eV.name === VV) return eV;
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
        updateCache(VV) {
          !VV && this.isSynchronized() || this._updateCache()
        }
        _getActionManagerForTrigger(VV) {
          return this.parent ? this.parent._getActionManagerForTrigger(VV, !1) : null
        }
        _updateCache(VV) {}
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
        nJV(VV) {
          return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this
        }
        isEnabled() {
          return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled
        }
        _hasEffectiveEnabledStateObservers() {
          const VV = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
          return !!VV && VV.hasObservers()
        }
        _syncParentEnabledState() {
          const VV = this._hasEffectiveEnabledStateObservers(),
            eV = VV ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const xV of this._children) xV._syncParentEnabledState();
          if (VV) {
            const VV = this.isEnabled();
            VV !== eV && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(VV)
          }
        }
        pW(VV) {
          if (this._nodeDataStorage._isEnabled === VV) return;
          const eV = this._hasEffectiveEnabledStateObservers(),
            xV = eV ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = VV, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(VV), eV) {
            const VV = this.isEnabled();
            VV !== xV && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(VV)
          }
        }
        isDescendantOf(VV) {
          return !!this.parent && (this.parent === VV || this.parent.isDescendantOf(VV))
        }
        _getDescendants(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            xV = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let JV = 0; JV < this._children.length; JV++) {
              const YV = this._children[JV];
              xV && !xV(YV) || VV.push(YV), eV || YV._getDescendants(VV, !1, xV)
            }
        }
        getDescendants(VV, eV) {
          const xV = [];
          return this._getDescendants(xV, VV, eV), xV
        }
        getChildMeshes(VV, eV) {
          const xV = [];
          return this._getDescendants(xV, VV, (VV => (!eV || eV(VV)) && void 0 !== VV.cullingStrategy)), xV
        }
        getChildren(VV) {
          let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(eV, VV)
        }
        _setReady(VV) {
          VV !== this._nodeDataStorage._isReady && (VV ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(VV) {
          for (let eV = 0; eV < this.animations.length; eV++) {
            const xV = this.animations[eV];
            if (xV.name === VV) return xV
          }
          return null
        }
        createAnimationRange(eV, xV, JV) {
          if (!this._ranges[eV]) {
            this._ranges[eV] = VV._AnimationRangeFactory(eV, xV, JV);
            for (let VV = 0, YV = this.animations.length; VV < YV; VV++) this.animations[VV] && this.animations[VV].createRange(eV, xV, JV)
          }
        }
        deleteAnimationRange(VV) {
          let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let xV = 0, JV = this.animations.length; xV < JV; xV++) this.animations[xV] && this.animations[xV].deleteRange(VV, eV);
          this._ranges[VV] = null
        }
        getAnimationRange(VV) {
          return this._ranges[VV] || null
        }
        clone(eV, xV, JV) {
          const YV = nV.b.Clone((() => new VV(eV, this.dD())), this);
          if (xV && (YV.parent = xV), !JV) {
            const VV = this.getDescendants(!0);
            for (let xV = 0; xV < VV.length; xV++) {
              const JV = VV[xV];
              JV.clone(eV + "." + JV.name, YV)
            }
          }
          return YV
        }
        getAnimationRanges() {
          const VV = [];
          let eV;
          for (eV in this._ranges) VV.push(this._ranges[eV]);
          return VV
        }
        beginAnimation(VV, eV, xV, JV) {
          const YV = this.getAnimationRange(VV);
          return YV ? this._scene.beginAnimation(this, YV.from, YV.to, eV, xV, JV) : null
        }
        serializeAnimationRanges() {
          const VV = [];
          for (const eV in this._ranges) {
            const xV = this._ranges[eV];
            if (!xV) continue;
            const JV = {};
            JV.name = eV, JV.from = xV.from, JV.to = xV.to, VV.push(JV)
          }
          return VV
        }
        computeWorldMatrix(VV) {
          return this._worldMatrix || (this._worldMatrix = YV.d.Identity()), this._worldMatrix
        }
        dispose(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !VV) {
            const xV = this.getDescendants(!0);
            for (const JV of xV) JV.dispose(VV, eV)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.eC.notifyObservers(this), this.eC.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const xV of this._behaviors) xV.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(VV, eV, xV) {
          if (eV.TE)
            for (let JV = 0; JV < eV.TE.length; JV++) {
              const xV = eV.TE[JV];
              VV.createAnimationRange(xV.name, xV.from, xV.to)
            }
        }
        getHierarchyBoundingVectors() {
          let VV, eV, xV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            JV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.dD().incrementRenderId(), this.computeWorldMatrix(!0);
          const UV = this;
          if (UV.qL && UV.hT) {
            const xV = UV.qL();
            VV = xV.boundingBox.minimumWorld.clone(), eV = xV.boundingBox.maximumWorld.clone()
          } else VV = new YV.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), eV = new YV.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (xV) {
            const xV = this.getDescendants(!1);
            for (const UV of xV) {
              const xV = UV;
              if (xV.computeWorldMatrix(!0), JV && !JV(xV)) continue;
              if (!xV.qL || 0 === xV.getTotalVertices()) continue;
              const yV = xV.qL().boundingBox,
                pV = yV.minimumWorld,
                QV = yV.maximumWorld;
              YV.o.CheckExtends(pV, VV, eV), YV.o.CheckExtends(QV, VV, eV)
            }
          }
          return {
            min: VV,
            max: eV
          }
        }
      }, (() => {
        const YV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        eV = [(0, UV.J)()], xV = [(0, UV.J)()], ZV = [(0, UV.J)()], vV = [(0, UV.J)()], rV = [(0, UV.J)()], (0, JV.i)(null, null, eV, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: VV => "name" in VV,
            get: VV => VV.name,
            set: (VV, eV) => {
              VV.name = eV
            }
          },
          metadata: YV
        }, kV, bV), (0, JV.i)(null, null, xV, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: VV => "id" in VV,
            get: VV => VV.id,
            set: (VV, eV) => {
              VV.id = eV
            }
          },
          metadata: YV
        }, EV, BV), (0, JV.i)(null, null, ZV, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: VV => "uniqueId" in VV,
            get: VV => VV.uniqueId,
            set: (VV, eV) => {
              VV.uniqueId = eV
            }
          },
          metadata: YV
        }, jV, qV), (0, JV.i)(null, null, vV, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: VV => "state" in VV,
            get: VV => VV.state,
            set: (VV, eV) => {
              VV.state = eV
            }
          },
          metadata: YV
        }, tV, FV), (0, JV.i)(null, null, rV, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: VV => "metadata" in VV,
            get: VV => VV.metadata,
            set: (VV, eV) => {
              VV.metadata = eV
            }
          },
          metadata: YV
        }, TV, PV), YV && Object.defineProperty(VV, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: YV
        })
      })(), VV._AnimationRangeFactory = (VV, eV, xV) => {
        throw (0, QV.n)("AnimationRange")
      }, VV._NodeConstructors = {}, VV
    })()
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);