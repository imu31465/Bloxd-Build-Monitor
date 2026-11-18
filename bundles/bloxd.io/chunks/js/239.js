export const id = 239;
export const ids = [239];
export const modules = {
  39023: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => DJ
    });
    var FJ = ZJ(38800),
      UJ = ZJ(38806),
      eJ = ZJ(36174),
      XJ = ZJ(36231),
      AJ = ZJ(38989),
      qJ = ZJ(38907),
      jJ = ZJ(36216),
      YJ = ZJ(38967),
      hJ = ZJ(38822);
    let DJ = (() => {
      var JJ, cJ;
      let ZJ, DJ, sJ, nJ, GJ, fJ, xJ, rJ, vJ, mJ, QJ, EJ, VJ, KJ = AJ.b,
        yJ = [],
        SJ = [],
        IJ = [],
        MJ = [],
        bJ = [],
        wJ = [],
        WJ = [],
        gJ = [],
        HJ = [],
        PJ = [],
        kJ = [],
        pJ = [],
        dJ = [],
        zJ = [],
        NJ = [],
        OJ = [],
        TJ = [],
        CJ = [],
        uJ = [],
        iJ = [],
        RJ = [];
      return JJ = class extends KJ {
        get range() {
          return this._range
        }
        set range(JJ) {
          this._range = JJ, this._inverseSquaredRange = 1 / (this.range * this.range)
        }
        get intensityMode() {
          return this._intensityMode
        }
        set intensityMode(JJ) {
          this._intensityMode = JJ, this._computePhotometricScale()
        }
        get radius() {
          return this._radius
        }
        set radius(JJ) {
          this._radius = JJ, this._computePhotometricScale()
        }
        get renderPriority() {
          return (0, FJ.b)(this, cJ, "f")
        }
        set renderPriority(JJ) {
          (0, FJ.c)(this, cJ, JJ, "f")
        }
        get shadowEnabled() {
          return this._shadowEnabled
        }
        set shadowEnabled(JJ) {
          this._shadowEnabled !== JJ && (this._shadowEnabled = JJ, this._markMeshesAsLightDirty())
        }
        get includedOnlyMeshes() {
          return this._includedOnlyMeshes
        }
        set includedOnlyMeshes(JJ) {
          this._includedOnlyMeshes = JJ, this._hookArrayForIncludedOnly(JJ)
        }
        get excludedMeshes() {
          return this._excludedMeshes
        }
        set excludedMeshes(JJ) {
          this._excludedMeshes = JJ, this._hookArrayForExcluded(JJ)
        }
        get excludeWithLayerMask() {
          return this._excludeWithLayerMask
        }
        set excludeWithLayerMask(JJ) {
          this._excludeWithLayerMask = JJ, this._resyncMeshes()
        }
        get includeOnlyWithLayerMask() {
          return this._includeOnlyWithLayerMask
        }
        set includeOnlyWithLayerMask(JJ) {
          this._includeOnlyWithLayerMask = JJ, this._resyncMeshes()
        }
        get lightmapMode() {
          return this._lightmapMode
        }
        set lightmapMode(JJ) {
          this._lightmapMode !== JJ && (this._lightmapMode = JJ, this._markMeshesAsLightDirty())
        }
        getViewMatrix(JJ) {
          return null
        }
        getProjectionMatrix(JJ, cJ) {
          return null
        }
        constructor(ZJ, UJ, eJ) {
          super(ZJ, UJ, !1), this.diffuse = ((0, FJ.e)(this, yJ), (0, FJ.e)(this, SJ, new XJ.e(1, 1, 1))), this.specular = ((0, FJ.e)(this, IJ), (0, FJ.e)(this, MJ, new XJ.e(1, 1, 1))), this.falloffType = ((0, FJ.e)(this, bJ), (0, FJ.e)(this, wJ, JJ.FALLOFF_DEFAULT)), this.intensity = ((0, FJ.e)(this, WJ), (0, FJ.e)(this, gJ, 1)), this._range = ((0, FJ.e)(this, HJ), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = JJ.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, FJ.e)(this, PJ, void 0), cJ.set(this, ((0, FJ.e)(this, kJ), (0, FJ.e)(this, pJ, 0))), this._shadowEnabled = ((0, FJ.e)(this, dJ), (0, FJ.e)(this, zJ, !0)), this._includedOnlyMeshes = (0, FJ.e)(this, NJ), this._excludeWithLayerMask = (0, FJ.e)(this, OJ, 0), this._includeOnlyWithLayerMask = ((0, FJ.e)(this, TJ), (0, FJ.e)(this, CJ, 0)), this._lightmapMode = ((0, FJ.e)(this, uJ), (0, FJ.e)(this, iJ, 0)), this._shadowGenerators = ((0, FJ.e)(this, RJ), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, eJ || this.Qy().addLight(this), this._uniformBuffer = new qJ.e(this.Qy().gn(), void 0, void 0, ZJ), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], eJ || this._resyncMeshes()
        }
        transferTexturesToEffect(JJ, cJ) {
          return this
        }
        _bindLight(JJ, cJ, ZJ, FJ) {
          let UJ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const eJ = JJ.toString();
          let AJ = !1;
          if (this._uniformBuffer.bindToEffect(ZJ, "Light" + eJ), this._renderId !== cJ.getRenderId() || this._lastUseSpecular !== FJ || !this._uniformBuffer.useUbo) {
            this._renderId = cJ.getRenderId(), this._lastUseSpecular = FJ;
            const JJ = this.getScaledIntensity();
            this.transferToEffect(ZJ, eJ), this.diffuse.scaleToRef(JJ, XJ.h.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", XJ.h.Color3[0], this.range, eJ), FJ && (this.specular.scaleToRef(JJ, XJ.h.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", XJ.h.Color3[1], this.radius, eJ)), AJ = !0
          }
          if (this.transferTexturesToEffect(ZJ, eJ), cJ.shadowsEnabled && this.shadowEnabled && UJ) {
            const JJ = this.getShadowGenerator(cJ.activeCamera) ?? this.getShadowGenerator();
            JJ && (JJ.bindShadowLight(eJ, ZJ), AJ = !0)
          }
          AJ ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(JJ) {
          let cJ = "Name: " + this.name;
          if (cJ += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let ZJ = 0; ZJ < this.animations.length; ZJ++) cJ += ", animation[0]: " + this.animations[ZJ].toString(JJ);
          return cJ
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.YZJ() || this._resyncMeshes()
        }
        GV(JJ) {
          super.GV(JJ), this._resyncMeshes()
        }
        getShadowGenerator() {
          let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(JJ) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return eJ.j.Zero()
        }
        canAffectMesh(JJ) {
          return !JJ || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(JJ)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(JJ)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & JJ.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & JJ.layerMask)))
        }
        dispose(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const JJ = this._shadowGenerators.values();
            for (let cJ = JJ.next(); !0 !== cJ.done; cJ = JJ.next()) {
              cJ.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.Qy().stopAnimation(this), this._parentContainer) {
            const JJ = this._parentContainer.lights.indexOf(this);
            JJ > -1 && this._parentContainer.lights.splice(JJ, 1), this._parentContainer = null
          }
          for (const ZJ of this.Qy().meshes) ZJ._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.Qy().removeLight(this), super.dispose(JJ, cJ)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(cJ) {
          let ZJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const FJ = JJ.GetConstructorFromName(this.getTypeID(), cJ, this.Qy());
          if (!FJ) return null;
          const UJ = hJ.c.Clone(FJ, this);
          return cJ && (UJ.name = cJ), ZJ && (UJ.parent = ZJ), UJ.GV(this.isEnabled()), this.onClonedObservable.notifyObservers(UJ), UJ
        }
        serialize() {
          const JJ = hJ.c.Serialize(this);
          if (JJ.uniqueId = this.uniqueId, JJ.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(JJ), this.excludedMeshes.length > 0) {
            JJ.excludedMeshesIds = [];
            for (const cJ of this.excludedMeshes) JJ.excludedMeshesIds.push(cJ.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            JJ.includedOnlyMeshesIds = [];
            for (const cJ of this.includedOnlyMeshes) JJ.includedOnlyMeshesIds.push(cJ.id)
          }
          return hJ.c.AppendSerializedAnimations(this, JJ), JJ.ws = this.serializeAnimationRanges(), JJ.isEnabled = this.isEnabled(), JJ
        }
        static GetConstructorFromName(JJ, cJ, ZJ) {
          const FJ = AJ.b.Construct("Light_Type_" + JJ, cJ, ZJ);
          return FJ || null
        }
        static Parse(cJ, ZJ) {
          let FJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const UJ = JJ.GetConstructorFromName(cJ.type, cJ.name, ZJ);
          if (!UJ) return null;
          const eJ = hJ.c.Parse(UJ, cJ, ZJ, FJ);
          if (cJ.excludedMeshesIds && (eJ._excludedMeshesIds = cJ.excludedMeshesIds), cJ.includedOnlyMeshesIds && (eJ._includedOnlyMeshesIds = cJ.includedOnlyMeshesIds), void 0 !== cJ.parentId && (eJ._waitingParentId = cJ.parentId), void 0 !== cJ.parentInstanceIndex && (eJ._waitingParentInstanceIndex = cJ.parentInstanceIndex), void 0 !== cJ.falloffType && (eJ.falloffType = cJ.falloffType), void 0 !== cJ.lightmapMode && (eJ.lightmapMode = cJ.lightmapMode), cJ.animations) {
            for (let JJ = 0; JJ < cJ.animations.length; JJ++) {
              const ZJ = cJ.animations[JJ],
                FJ = (0, jJ.e)("BABYLON.Animation");
              FJ && eJ.animations.push(FJ.Parse(ZJ))
            }
            AJ.b.ParseAnimationRanges(eJ, cJ, ZJ)
          }
          return cJ.autoAnimate && ZJ.beginAnimation(eJ, cJ.autoAnimateFrom, cJ.autoAnimateTo, cJ.autoAnimateLoop, cJ.autoAnimateSpeed || 1), void 0 !== cJ.isEnabled && eJ.GV(cJ.isEnabled), eJ._onParsed(cJ, ZJ, FJ), eJ
        }
        _onParsed(JJ, cJ) {}
        _hookArrayForExcluded(JJ) {
          var cJ = this;
          const ZJ = JJ.push;
          JJ.push = function() {
            for (var FJ = arguments.length, UJ = new Array(FJ), eJ = 0; eJ < FJ; eJ++) UJ[eJ] = arguments[eJ];
            const XJ = ZJ.apply(JJ, UJ);
            if (cJ._clusteredContainer) return XJ;
            for (const JJ of UJ) JJ._resyncLightSource(cJ);
            return XJ
          };
          const FJ = JJ.splice;
          JJ.splice = (cJ, ZJ) => {
            const UJ = FJ.call(JJ, cJ, ZJ ?? JJ.length);
            if (this._clusteredContainer) return UJ;
            for (const JJ of UJ) JJ._resyncLightSource(this);
            return UJ
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(JJ) {
          var cJ = this;
          const ZJ = JJ.push;
          JJ.push = function() {
            for (var FJ = arguments.length, UJ = new Array(FJ), eJ = 0; eJ < FJ; eJ++) UJ[eJ] = arguments[eJ];
            const XJ = ZJ.apply(JJ, UJ);
            return cJ._resyncMeshes(), XJ
          };
          const FJ = JJ.splice;
          JJ.splice = (cJ, ZJ) => {
            const UJ = FJ.call(JJ, cJ, ZJ ?? JJ.length);
            return this._resyncMeshes(), UJ
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const JJ of this.Qy().meshes) JJ._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const JJ of this.Qy().meshes) - 1 !== JJ.lightSources.indexOf(this) && JJ._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.Qy().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let cJ = 0;
          const ZJ = this.getTypeID();
          let FJ = this.intensityMode;
          switch (FJ === JJ.INTENSITYMODE_AUTOMATIC && (FJ = ZJ === JJ.LIGHTTYPEID_DIRECTIONALLIGHT ? JJ.INTENSITYMODE_ILLUMINANCE : JJ.INTENSITYMODE_LUMINOUSINTENSITY), ZJ) {
            case JJ.LIGHTTYPEID_POINTLIGHT:
            case JJ.LIGHTTYPEID_SPOTLIGHT:
              switch (FJ) {
                case JJ.INTENSITYMODE_LUMINOUSPOWER:
                  cJ = 1 / (4 * Math.PI);
                  break;
                case JJ.INTENSITYMODE_LUMINOUSINTENSITY:
                  cJ = 1;
                  break;
                case JJ.INTENSITYMODE_LUMINANCE:
                  cJ = this.radius * this.radius
              }
              break;
            case JJ.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (FJ) {
                case JJ.INTENSITYMODE_ILLUMINANCE:
                  cJ = 1;
                  break;
                case JJ.INTENSITYMODE_LUMINANCE: {
                  let JJ = this.radius;
                  JJ = Math.max(JJ, .001);
                  cJ = 2 * Math.PI * (1 - Math.cos(JJ));
                  break
                }
              }
              break;
            case JJ.LIGHTTYPEID_HEMISPHERICLIGHT:
            case JJ.LIGHTTYPEID_RECT_AREALIGHT:
              cJ = 1
          }
          return cJ
        }
        _reorderLightsInScene() {
          const JJ = this.Qy();
          0 != this._renderPriority && (JJ.requireLightSorting = !0), this.Qy().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, cJ = new WeakMap, (() => {
        const cJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(KJ[Symbol.metadata] ?? null) : void 0;
        ZJ = [(0, UJ.m)()], DJ = [(0, UJ.m)()], sJ = [(0, UJ.F)()], nJ = [(0, UJ.F)()], GJ = [(0, UJ.F)()], fJ = [(0, UJ.F)()], xJ = [(0, UJ.F)()], rJ = [(0, UJ.F)()], vJ = [(0, UJ.f)("_reorderLightsInScene")], mJ = [(0, UJ.F)("shadowEnabled")], QJ = [(0, UJ.F)("excludeWithLayerMask")], EJ = [(0, UJ.F)("includeOnlyWithLayerMask")], VJ = [(0, UJ.F)("lightmapMode")], (0, FJ.d)(JJ, null, GJ, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: JJ => "range" in JJ,
            get: JJ => JJ.range
          },
          metadata: cJ
        }, null, yJ), (0, FJ.d)(JJ, null, fJ, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: JJ => "intensityMode" in JJ,
            get: JJ => JJ.intensityMode
          },
          metadata: cJ
        }, null, yJ), (0, FJ.d)(JJ, null, xJ, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: JJ => "radius" in JJ,
            get: JJ => JJ.radius
          },
          metadata: cJ
        }, null, yJ), (0, FJ.d)(JJ, null, vJ, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: JJ => "renderPriority" in JJ,
            get: JJ => JJ.renderPriority,
            set: (JJ, cJ) => {
              JJ.renderPriority = cJ
            }
          },
          metadata: cJ
        }, pJ, dJ), (0, FJ.d)(null, null, ZJ, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: JJ => "diffuse" in JJ,
            get: JJ => JJ.diffuse,
            set: (JJ, cJ) => {
              JJ.diffuse = cJ
            }
          },
          metadata: cJ
        }, SJ, IJ), (0, FJ.d)(null, null, DJ, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: JJ => "specular" in JJ,
            get: JJ => JJ.specular,
            set: (JJ, cJ) => {
              JJ.specular = cJ
            }
          },
          metadata: cJ
        }, MJ, bJ), (0, FJ.d)(null, null, sJ, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: JJ => "falloffType" in JJ,
            get: JJ => JJ.falloffType,
            set: (JJ, cJ) => {
              JJ.falloffType = cJ
            }
          },
          metadata: cJ
        }, wJ, WJ), (0, FJ.d)(null, null, nJ, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: JJ => "intensity" in JJ,
            get: JJ => JJ.intensity,
            set: (JJ, cJ) => {
              JJ.intensity = cJ
            }
          },
          metadata: cJ
        }, gJ, HJ), (0, FJ.d)(null, null, rJ, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_renderPriority" in JJ,
            get: JJ => JJ._renderPriority,
            set: (JJ, cJ) => {
              JJ._renderPriority = cJ
            }
          },
          metadata: cJ
        }, PJ, kJ), (0, FJ.d)(null, null, mJ, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_shadowEnabled" in JJ,
            get: JJ => JJ._shadowEnabled,
            set: (JJ, cJ) => {
              JJ._shadowEnabled = cJ
            }
          },
          metadata: cJ
        }, zJ, NJ), (0, FJ.d)(null, null, QJ, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_excludeWithLayerMask" in JJ,
            get: JJ => JJ._excludeWithLayerMask,
            set: (JJ, cJ) => {
              JJ._excludeWithLayerMask = cJ
            }
          },
          metadata: cJ
        }, OJ, TJ), (0, FJ.d)(null, null, EJ, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_includeOnlyWithLayerMask" in JJ,
            get: JJ => JJ._includeOnlyWithLayerMask,
            set: (JJ, cJ) => {
              JJ._includeOnlyWithLayerMask = cJ
            }
          },
          metadata: cJ
        }, CJ, uJ), (0, FJ.d)(null, null, VJ, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_lightmapMode" in JJ,
            get: JJ => JJ._lightmapMode,
            set: (JJ, cJ) => {
              JJ._lightmapMode = cJ
            }
          },
          metadata: cJ
        }, iJ, RJ), cJ && Object.defineProperty(JJ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: cJ
        })
      })(), JJ.FALLOFF_DEFAULT = YJ.d.FALLOFF_DEFAULT, JJ.FALLOFF_PHYSICAL = YJ.d.FALLOFF_PHYSICAL, JJ.FALLOFF_GLTF = YJ.d.FALLOFF_GLTF, JJ.FALLOFF_STANDARD = YJ.d.FALLOFF_STANDARD, JJ.LIGHTMAP_DEFAULT = YJ.d.LIGHTMAP_DEFAULT, JJ.LIGHTMAP_SPECULAR = YJ.d.LIGHTMAP_SPECULAR, JJ.LIGHTMAP_SHADOWSONLY = YJ.d.LIGHTMAP_SHADOWSONLY, JJ.INTENSITYMODE_AUTOMATIC = YJ.d.INTENSITYMODE_AUTOMATIC, JJ.INTENSITYMODE_LUMINOUSPOWER = YJ.d.INTENSITYMODE_LUMINOUSPOWER, JJ.INTENSITYMODE_LUMINOUSINTENSITY = YJ.d.INTENSITYMODE_LUMINOUSINTENSITY, JJ.INTENSITYMODE_ILLUMINANCE = YJ.d.INTENSITYMODE_ILLUMINANCE, JJ.INTENSITYMODE_LUMINANCE = YJ.d.INTENSITYMODE_LUMINANCE, JJ.LIGHTTYPEID_POINTLIGHT = YJ.d.LIGHTTYPEID_POINTLIGHT, JJ.LIGHTTYPEID_DIRECTIONALLIGHT = YJ.d.LIGHTTYPEID_DIRECTIONALLIGHT, JJ.LIGHTTYPEID_SPOTLIGHT = YJ.d.LIGHTTYPEID_SPOTLIGHT, JJ.LIGHTTYPEID_HEMISPHERICLIGHT = YJ.d.LIGHTTYPEID_HEMISPHERICLIGHT, JJ.LIGHTTYPEID_RECT_AREALIGHT = YJ.d.LIGHTTYPEID_RECT_AREALIGHT, JJ
    })()
  },
  38989: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => hJ
    });
    var FJ = ZJ(38800),
      UJ = ZJ(36174),
      eJ = ZJ(38806),
      XJ = ZJ(36200),
      AJ = ZJ(36192),
      qJ = ZJ(38677),
      jJ = ZJ(38822);
    class YJ {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new XJ.c, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new XJ.c, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let hJ = (() => {
      var JJ;
      let cJ, ZJ, hJ, DJ, sJ, nJ = [],
        GJ = [],
        fJ = [],
        xJ = [],
        rJ = [],
        vJ = [],
        mJ = [],
        QJ = [],
        EJ = [],
        VJ = [];
      return JJ = class {
        static AddNodeConstructor(JJ, cJ) {
          this._NodeConstructors[JJ] = cJ
        }
        static Construct(JJ, cJ, ZJ, FJ) {
          const UJ = this._NodeConstructors[JJ];
          return UJ ? UJ(cJ, ZJ, FJ) : null
        }
        set accessibilityTag(JJ) {
          this._accessibilityTag = JJ, this.onAccessibilityTagChangedObservable.notifyObservers(JJ)
        }
        get accessibilityTag() {
          return this._accessibilityTag
        }
        get doNotSerialize() {
          return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
        }
        set doNotSerialize(JJ) {
          this._nodeDataStorage._doNotSerialize = JJ
        }
        YZJ() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(JJ) {
          if (this._parentNode === JJ) return;
          const cJ = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const cJ = this._parentNode._children.indexOf(this); - 1 !== cJ && this._parentNode._children.splice(cJ, 1), JJ || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = JJ, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), cJ || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
        }
        get parent() {
          return this._parentNode
        }
        get inheritVisibility() {
          return this._nodeDataStorage._inheritVisibility
        }
        set inheritVisibility(JJ) {
          this._nodeDataStorage._inheritVisibility = JJ
        }
        get isVisible() {
          return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
        }
        set isVisible(JJ) {
          this._nodeDataStorage._isVisible = JJ
        }
        _serializeAsParent(JJ) {
          JJ.parentId = this.uniqueId
        }
        _addToSceneRootNodes() {
          -1 === this._nodeDataStorage._sceneRootNodesIndex && (this._nodeDataStorage._sceneRootNodesIndex = this._scene.rootNodes.length, this._scene.rootNodes.push(this))
        }
        _removeFromSceneRootNodes() {
          if (-1 !== this._nodeDataStorage._sceneRootNodesIndex) {
            const JJ = this._scene.rootNodes,
              cJ = JJ.length - 1;
            JJ[this._nodeDataStorage._sceneRootNodesIndex] = JJ[cJ], JJ[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
          }
        }
        get animationPropertiesOverride() {
          return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
        }
        set animationPropertiesOverride(JJ) {
          this._animationPropertiesOverride = JJ
        }
        getClassName() {
          return "Node"
        }
        set onDispose(JJ) {
          this._onDisposeObserver && this.Sy.remove(this._onDisposeObserver), this._onDisposeObserver = this.Sy.add(JJ)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var JJ;
          return (JJ = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (JJ._onEffectiveEnabledStateChangedObservable = new XJ.c)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            ZJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new YJ, this.name = (0, FJ.e)(this, nJ, void 0), this.id = ((0, FJ.e)(this, GJ), (0, FJ.e)(this, fJ, void 0)), this.uniqueId = ((0, FJ.e)(this, xJ), (0, FJ.e)(this, rJ, void 0)), this.state = ((0, FJ.e)(this, vJ), (0, FJ.e)(this, mJ, "")), this.metadata = ((0, FJ.e)(this, QJ), (0, FJ.e)(this, EJ, null)), this._internalMetadata = (0, FJ.e)(this, VJ), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new XJ.c, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = UJ.b.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.Sy = new XJ.c, this._onDisposeObserver = null, this._behaviors = new Array, this.name = JJ, this.id = JJ, this._scene = cJ || AJ.c.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), ZJ && this._addToSceneRootNodes()
        }
        Qy() {
          return this._scene
        }
        gn() {
          return this._scene.gn()
        }
        addBehavior(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(JJ) || (JJ.init(), this._scene.isLoading && !cJ ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(JJ) && JJ.attach(this)
          })) : JJ.attach(this), this._behaviors.push(JJ)), this
        }
        removeBehavior(JJ) {
          const cJ = this._behaviors.indexOf(JJ);
          return -1 === cJ || (this._behaviors.splice(cJ, 1), JJ.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(JJ) {
          for (const cJ of this._behaviors)
            if (cJ.name === JJ) return cJ;
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
        updateCache(JJ) {
          !JJ && this.isSynchronized() || this._updateCache()
        }
        _getActionManagerForTrigger(JJ) {
          return this.parent ? this.parent._getActionManagerForTrigger(JJ, !1) : null
        }
        _updateCache(JJ) {}
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
        ycJ(JJ) {
          return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this
        }
        isEnabled() {
          return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled
        }
        _hasEffectiveEnabledStateObservers() {
          const JJ = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
          return !!JJ && JJ.hasObservers()
        }
        _syncParentEnabledState() {
          const JJ = this._hasEffectiveEnabledStateObservers(),
            cJ = JJ ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const ZJ of this._children) ZJ._syncParentEnabledState();
          if (JJ) {
            const JJ = this.isEnabled();
            JJ !== cJ && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(JJ)
          }
        }
        GV(JJ) {
          if (this._nodeDataStorage._isEnabled === JJ) return;
          const cJ = this._hasEffectiveEnabledStateObservers(),
            ZJ = cJ ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = JJ, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(JJ), cJ) {
            const JJ = this.isEnabled();
            JJ !== ZJ && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(JJ)
          }
        }
        isDescendantOf(JJ) {
          return !!this.parent && (this.parent === JJ || this.parent.isDescendantOf(JJ))
        }
        _getDescendants(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            ZJ = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let FJ = 0; FJ < this._children.length; FJ++) {
              const UJ = this._children[FJ];
              ZJ && !ZJ(UJ) || JJ.push(UJ), cJ || UJ._getDescendants(JJ, !1, ZJ)
            }
        }
        getDescendants(JJ, cJ) {
          const ZJ = [];
          return this._getDescendants(ZJ, JJ, cJ), ZJ
        }
        getChildMeshes(JJ, cJ) {
          const ZJ = [];
          return this._getDescendants(ZJ, JJ, (JJ => (!cJ || cJ(JJ)) && void 0 !== JJ.cullingStrategy)), ZJ
        }
        getChildren(JJ) {
          let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(cJ, JJ)
        }
        _setReady(JJ) {
          JJ !== this._nodeDataStorage._isReady && (JJ ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(JJ) {
          for (let cJ = 0; cJ < this.animations.length; cJ++) {
            const ZJ = this.animations[cJ];
            if (ZJ.name === JJ) return ZJ
          }
          return null
        }
        createAnimationRange(cJ, ZJ, FJ) {
          if (!this._ranges[cJ]) {
            this._ranges[cJ] = JJ._AnimationRangeFactory(cJ, ZJ, FJ);
            for (let JJ = 0, UJ = this.animations.length; JJ < UJ; JJ++) this.animations[JJ] && this.animations[JJ].createRange(cJ, ZJ, FJ)
          }
        }
        deleteAnimationRange(JJ) {
          let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let ZJ = 0, FJ = this.animations.length; ZJ < FJ; ZJ++) this.animations[ZJ] && this.animations[ZJ].deleteRange(JJ, cJ);
          this._ranges[JJ] = null
        }
        getAnimationRange(JJ) {
          return this._ranges[JJ] || null
        }
        clone(cJ, ZJ, FJ) {
          const UJ = jJ.c.Clone((() => new JJ(cJ, this.Qy())), this);
          if (ZJ && (UJ.parent = ZJ), !FJ) {
            const JJ = this.getDescendants(!0);
            for (let ZJ = 0; ZJ < JJ.length; ZJ++) {
              const FJ = JJ[ZJ];
              FJ.clone(cJ + "." + FJ.name, UJ)
            }
          }
          return UJ
        }
        getAnimationRanges() {
          const JJ = [];
          let cJ;
          for (cJ in this._ranges) JJ.push(this._ranges[cJ]);
          return JJ
        }
        beginAnimation(JJ, cJ, ZJ, FJ) {
          const UJ = this.getAnimationRange(JJ);
          return UJ ? this._scene.beginAnimation(this, UJ.from, UJ.to, cJ, ZJ, FJ) : null
        }
        serializeAnimationRanges() {
          const JJ = [];
          for (const cJ in this._ranges) {
            const ZJ = this._ranges[cJ];
            if (!ZJ) continue;
            const FJ = {};
            FJ.name = cJ, FJ.from = ZJ.from, FJ.to = ZJ.to, JJ.push(FJ)
          }
          return JJ
        }
        computeWorldMatrix(JJ) {
          return this._worldMatrix || (this._worldMatrix = UJ.b.Identity()), this._worldMatrix
        }
        dispose(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !JJ) {
            const ZJ = this.getDescendants(!0);
            for (const FJ of ZJ) FJ.dispose(JJ, cJ)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.Sy.notifyObservers(this), this.Sy.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const ZJ of this._behaviors) ZJ.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(JJ, cJ, ZJ) {
          if (cJ.ws)
            for (let FJ = 0; FJ < cJ.ws.length; FJ++) {
              const ZJ = cJ.ws[FJ];
              JJ.createAnimationRange(ZJ.name, ZJ.from, ZJ.to)
            }
        }
        getHierarchyBoundingVectors() {
          let JJ, cJ, ZJ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            FJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.Qy().incrementRenderId(), this.computeWorldMatrix(!0);
          const eJ = this;
          if (eJ.rM && eJ.aE) {
            const ZJ = eJ.rM();
            JJ = ZJ.boundingBox.minimumWorld.clone(), cJ = ZJ.boundingBox.maximumWorld.clone()
          } else JJ = new UJ.j(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), cJ = new UJ.j(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (ZJ) {
            const ZJ = this.getDescendants(!1);
            for (const eJ of ZJ) {
              const ZJ = eJ;
              if (ZJ.computeWorldMatrix(!0), FJ && !FJ(ZJ)) continue;
              if (!ZJ.rM || 0 === ZJ.getTotalVertices()) continue;
              const XJ = ZJ.rM().boundingBox,
                AJ = XJ.minimumWorld,
                qJ = XJ.maximumWorld;
              UJ.j.CheckExtends(AJ, JJ, cJ), UJ.j.CheckExtends(qJ, JJ, cJ)
            }
          }
          return {
            min: JJ,
            max: cJ
          }
        }
      }, (() => {
        const UJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        cJ = [(0, eJ.F)()], ZJ = [(0, eJ.F)()], hJ = [(0, eJ.F)()], DJ = [(0, eJ.F)()], sJ = [(0, eJ.F)()], (0, FJ.d)(null, null, cJ, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: JJ => "name" in JJ,
            get: JJ => JJ.name,
            set: (JJ, cJ) => {
              JJ.name = cJ
            }
          },
          metadata: UJ
        }, nJ, GJ), (0, FJ.d)(null, null, ZJ, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: JJ => "id" in JJ,
            get: JJ => JJ.id,
            set: (JJ, cJ) => {
              JJ.id = cJ
            }
          },
          metadata: UJ
        }, fJ, xJ), (0, FJ.d)(null, null, hJ, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: JJ => "uniqueId" in JJ,
            get: JJ => JJ.uniqueId,
            set: (JJ, cJ) => {
              JJ.uniqueId = cJ
            }
          },
          metadata: UJ
        }, rJ, vJ), (0, FJ.d)(null, null, DJ, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: JJ => "state" in JJ,
            get: JJ => JJ.state,
            set: (JJ, cJ) => {
              JJ.state = cJ
            }
          },
          metadata: UJ
        }, mJ, QJ), (0, FJ.d)(null, null, sJ, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: JJ => "metadata" in JJ,
            get: JJ => JJ.metadata,
            set: (JJ, cJ) => {
              JJ.metadata = cJ
            }
          },
          metadata: UJ
        }, EJ, VJ), UJ && Object.defineProperty(JJ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: UJ
        })
      })(), JJ._AnimationRangeFactory = (JJ, cJ, ZJ) => {
        throw (0, qJ.m)("AnimationRange")
      }, JJ._NodeConstructors = {}, JJ
    })()
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);