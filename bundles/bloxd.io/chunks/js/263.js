export const id = 263;
export const ids = [263];
export const modules = {
  40635: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => fG
    });
    var wG = ZG(40393),
      SG = ZG(40398),
      LG = ZG(37439),
      yG = ZG(37621),
      kG = ZG(40599),
      UG = ZG(40508),
      YG = ZG(37484),
      VG = ZG(40573),
      pG = ZG(40416);
    let fG = (() => {
      var GG, bG;
      let ZG, fG, QG, KG, hG, dG, JG, rG, zG, EG, oG, XG, uG, iG = kG.e,
        CG = [],
        WG = [],
        mG = [],
        IG = [],
        FG = [],
        vG = [],
        aG = [],
        cG = [],
        lG = [],
        jG = [],
        PG = [],
        MG = [],
        AG = [],
        sG = [],
        qG = [],
        nG = [],
        gG = [],
        eG = [],
        RG = [],
        TG = [],
        HG = [];
      return GG = class extends iG {
        get range() {
          return this._range
        }
        set range(GG) {
          this._range = GG, this._inverseSquaredRange = 1 / (this.range * this.range)
        }
        get intensityMode() {
          return this._intensityMode
        }
        set intensityMode(GG) {
          this._intensityMode = GG, this._computePhotometricScale()
        }
        get radius() {
          return this._radius
        }
        set radius(GG) {
          this._radius = GG, this._computePhotometricScale()
        }
        get renderPriority() {
          return (0, wG.e)(this, bG, "f")
        }
        set renderPriority(GG) {
          (0, wG.h)(this, bG, GG, "f")
        }
        get shadowEnabled() {
          return this._shadowEnabled
        }
        set shadowEnabled(GG) {
          this._shadowEnabled !== GG && (this._shadowEnabled = GG, this._markMeshesAsLightDirty())
        }
        get includedOnlyMeshes() {
          return this._includedOnlyMeshes
        }
        set includedOnlyMeshes(GG) {
          this._includedOnlyMeshes = GG, this._hookArrayForIncludedOnly(GG)
        }
        get excludedMeshes() {
          return this._excludedMeshes
        }
        set excludedMeshes(GG) {
          this._excludedMeshes = GG, this._hookArrayForExcluded(GG)
        }
        get excludeWithLayerMask() {
          return this._excludeWithLayerMask
        }
        set excludeWithLayerMask(GG) {
          this._excludeWithLayerMask = GG, this._resyncMeshes()
        }
        get includeOnlyWithLayerMask() {
          return this._includeOnlyWithLayerMask
        }
        set includeOnlyWithLayerMask(GG) {
          this._includeOnlyWithLayerMask = GG, this._resyncMeshes()
        }
        get lightmapMode() {
          return this._lightmapMode
        }
        set lightmapMode(GG) {
          this._lightmapMode !== GG && (this._lightmapMode = GG, this._markMeshesAsLightDirty())
        }
        getViewMatrix(GG) {
          return null
        }
        getProjectionMatrix(GG, bG) {
          return null
        }
        constructor(ZG, SG, LG) {
          super(ZG, SG, !1), this.diffuse = ((0, wG.n)(this, CG), (0, wG.n)(this, WG, new yG.c(1, 1, 1))), this.specular = ((0, wG.n)(this, mG), (0, wG.n)(this, IG, new yG.c(1, 1, 1))), this.falloffType = ((0, wG.n)(this, FG), (0, wG.n)(this, vG, GG.FALLOFF_DEFAULT)), this.intensity = ((0, wG.n)(this, aG), (0, wG.n)(this, cG, 1)), this._range = ((0, wG.n)(this, lG), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = GG.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, wG.n)(this, jG, void 0), bG.set(this, ((0, wG.n)(this, PG), (0, wG.n)(this, MG, 0))), this._shadowEnabled = ((0, wG.n)(this, AG), (0, wG.n)(this, sG, !0)), this._includedOnlyMeshes = (0, wG.n)(this, qG), this._excludeWithLayerMask = (0, wG.n)(this, nG, 0), this._includeOnlyWithLayerMask = ((0, wG.n)(this, gG), (0, wG.n)(this, eG, 0)), this._lightmapMode = ((0, wG.n)(this, RG), (0, wG.n)(this, TG, 0)), this._shadowGenerators = ((0, wG.n)(this, HG), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, LG || this.Dv().addLight(this), this._uniformBuffer = new UG.d(this.Dv().CK(), void 0, void 0, ZG), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], LG || this._resyncMeshes()
        }
        transferTexturesToEffect(GG, bG) {
          return this
        }
        _bindLight(GG, bG, ZG, wG) {
          let SG = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const LG = GG.toString();
          let kG = !1;
          if (this._uniformBuffer.bindToEffect(ZG, "Light" + LG), this._renderId !== bG.getRenderId() || this._lastUseSpecular !== wG || !this._uniformBuffer.useUbo) {
            this._renderId = bG.getRenderId(), this._lastUseSpecular = wG;
            const GG = this.getScaledIntensity();
            this.transferToEffect(ZG, LG), this.diffuse.scaleToRef(GG, yG.l.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", yG.l.Color3[0], this.range, LG), wG && (this.specular.scaleToRef(GG, yG.l.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", yG.l.Color3[1], this.radius, LG)), kG = !0
          }
          if (this.transferTexturesToEffect(ZG, LG), bG.shadowsEnabled && this.shadowEnabled && SG) {
            const GG = this.getShadowGenerator(bG.activeCamera) ?? this.getShadowGenerator();
            GG && (GG.bindShadowLight(LG, ZG), kG = !0)
          }
          kG ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(GG) {
          let bG = "Name: " + this.name;
          if (bG += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let ZG = 0; ZG < this.animations.length; ZG++) bG += ", animation[0]: " + this.animations[ZG].toString(GG);
          return bG
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.Tu() || this._resyncMeshes()
        }
        DW(GG) {
          super.DW(GG), this._resyncMeshes()
        }
        getShadowGenerator() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(GG) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return LG.p.Zero()
        }
        canAffectMesh(GG) {
          return !GG || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(GG)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(GG)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & GG.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & GG.layerMask)))
        }
        dispose(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const GG = this._shadowGenerators.values();
            for (let bG = GG.next(); !0 !== bG.done; bG = GG.next()) {
              bG.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.Dv().stopAnimation(this), this._parentContainer) {
            const GG = this._parentContainer.lights.indexOf(this);
            GG > -1 && this._parentContainer.lights.splice(GG, 1), this._parentContainer = null
          }
          for (const ZG of this.Dv().meshes) ZG._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.Dv().removeLight(this), super.dispose(GG, bG)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(bG) {
          let ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const wG = GG.GetConstructorFromName(this.getTypeID(), bG, this.Dv());
          if (!wG) return null;
          const SG = pG.b.Clone(wG, this);
          return bG && (SG.name = bG), ZG && (SG.parent = ZG), SG.DW(this.isEnabled()), this.onClonedObservable.notifyObservers(SG), SG
        }
        serialize() {
          const GG = pG.b.Serialize(this);
          if (GG.uniqueId = this.uniqueId, GG.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(GG), this.excludedMeshes.length > 0) {
            GG.excludedMeshesIds = [];
            for (const bG of this.excludedMeshes) GG.excludedMeshesIds.push(bG.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            GG.includedOnlyMeshesIds = [];
            for (const bG of this.includedOnlyMeshes) GG.includedOnlyMeshesIds.push(bG.id)
          }
          return pG.b.AppendSerializedAnimations(this, GG), GG.Bh = this.serializeAnimationRanges(), GG.isEnabled = this.isEnabled(), GG
        }
        static GetConstructorFromName(GG, bG, ZG) {
          const wG = kG.e.Construct("Light_Type_" + GG, bG, ZG);
          return wG || null
        }
        static Parse(bG, ZG) {
          let wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const SG = GG.GetConstructorFromName(bG.type, bG.name, ZG);
          if (!SG) return null;
          const LG = pG.b.Parse(SG, bG, ZG, wG);
          if (bG.excludedMeshesIds && (LG._excludedMeshesIds = bG.excludedMeshesIds), bG.includedOnlyMeshesIds && (LG._includedOnlyMeshesIds = bG.includedOnlyMeshesIds), void 0 !== bG.parentId && (LG._waitingParentId = bG.parentId), void 0 !== bG.parentInstanceIndex && (LG._waitingParentInstanceIndex = bG.parentInstanceIndex), void 0 !== bG.falloffType && (LG.falloffType = bG.falloffType), void 0 !== bG.lightmapMode && (LG.lightmapMode = bG.lightmapMode), bG.animations) {
            for (let GG = 0; GG < bG.animations.length; GG++) {
              const ZG = bG.animations[GG],
                wG = (0, YG.e)("BABYLON.Animation");
              wG && LG.animations.push(wG.Parse(ZG))
            }
            kG.e.ParseAnimationRanges(LG, bG, ZG)
          }
          return bG.autoAnimate && ZG.beginAnimation(LG, bG.autoAnimateFrom, bG.autoAnimateTo, bG.autoAnimateLoop, bG.autoAnimateSpeed || 1), void 0 !== bG.isEnabled && LG.DW(bG.isEnabled), LG._onParsed(bG, ZG, wG), LG
        }
        _onParsed(GG, bG) {}
        _hookArrayForExcluded(GG) {
          var bG = this;
          const ZG = GG.push;
          GG.push = function() {
            for (var wG = arguments.length, SG = new Array(wG), LG = 0; LG < wG; LG++) SG[LG] = arguments[LG];
            const yG = ZG.apply(GG, SG);
            if (bG._clusteredContainer) return yG;
            for (const GG of SG) GG._resyncLightSource(bG);
            return yG
          };
          const wG = GG.splice;
          GG.splice = (bG, ZG) => {
            const SG = wG.call(GG, bG, ZG ?? GG.length);
            if (this._clusteredContainer) return SG;
            for (const GG of SG) GG._resyncLightSource(this);
            return SG
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(GG) {
          var bG = this;
          const ZG = GG.push;
          GG.push = function() {
            for (var wG = arguments.length, SG = new Array(wG), LG = 0; LG < wG; LG++) SG[LG] = arguments[LG];
            const yG = ZG.apply(GG, SG);
            return bG._resyncMeshes(), yG
          };
          const wG = GG.splice;
          GG.splice = (bG, ZG) => {
            const SG = wG.call(GG, bG, ZG ?? GG.length);
            return this._resyncMeshes(), SG
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const GG of this.Dv().meshes) GG._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const GG of this.Dv().meshes) - 1 !== GG.lightSources.indexOf(this) && GG._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.Dv().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let bG = 0;
          const ZG = this.getTypeID();
          let wG = this.intensityMode;
          switch (wG === GG.INTENSITYMODE_AUTOMATIC && (wG = ZG === GG.LIGHTTYPEID_DIRECTIONALLIGHT ? GG.INTENSITYMODE_ILLUMINANCE : GG.INTENSITYMODE_LUMINOUSINTENSITY), ZG) {
            case GG.LIGHTTYPEID_POINTLIGHT:
            case GG.LIGHTTYPEID_SPOTLIGHT:
              switch (wG) {
                case GG.INTENSITYMODE_LUMINOUSPOWER:
                  bG = 1 / (4 * Math.PI);
                  break;
                case GG.INTENSITYMODE_LUMINOUSINTENSITY:
                  bG = 1;
                  break;
                case GG.INTENSITYMODE_LUMINANCE:
                  bG = this.radius * this.radius
              }
              break;
            case GG.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (wG) {
                case GG.INTENSITYMODE_ILLUMINANCE:
                  bG = 1;
                  break;
                case GG.INTENSITYMODE_LUMINANCE: {
                  let GG = this.radius;
                  GG = Math.max(GG, .001);
                  bG = 2 * Math.PI * (1 - Math.cos(GG));
                  break
                }
              }
              break;
            case GG.LIGHTTYPEID_HEMISPHERICLIGHT:
            case GG.LIGHTTYPEID_RECT_AREALIGHT:
              bG = 1
          }
          return bG
        }
        _reorderLightsInScene() {
          const GG = this.Dv();
          0 != this._renderPriority && (GG.requireLightSorting = !0), this.Dv().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, bG = new WeakMap, (() => {
        const bG = "function" === typeof Symbol && Symbol.metadata ? Object.create(iG[Symbol.metadata] ?? null) : void 0;
        ZG = [(0, SG.m)()], fG = [(0, SG.m)()], QG = [(0, SG.Q)()], KG = [(0, SG.Q)()], hG = [(0, SG.Q)()], dG = [(0, SG.Q)()], JG = [(0, SG.Q)()], rG = [(0, SG.Q)()], zG = [(0, SG.d)("_reorderLightsInScene")], EG = [(0, SG.Q)("shadowEnabled")], oG = [(0, SG.Q)("excludeWithLayerMask")], XG = [(0, SG.Q)("includeOnlyWithLayerMask")], uG = [(0, SG.Q)("lightmapMode")], (0, wG.k)(GG, null, hG, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: GG => "range" in GG,
            get: GG => GG.range
          },
          metadata: bG
        }, null, CG), (0, wG.k)(GG, null, dG, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: GG => "intensityMode" in GG,
            get: GG => GG.intensityMode
          },
          metadata: bG
        }, null, CG), (0, wG.k)(GG, null, JG, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: GG => "radius" in GG,
            get: GG => GG.radius
          },
          metadata: bG
        }, null, CG), (0, wG.k)(GG, null, zG, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: GG => "renderPriority" in GG,
            get: GG => GG.renderPriority,
            set: (GG, bG) => {
              GG.renderPriority = bG
            }
          },
          metadata: bG
        }, MG, AG), (0, wG.k)(null, null, ZG, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: GG => "diffuse" in GG,
            get: GG => GG.diffuse,
            set: (GG, bG) => {
              GG.diffuse = bG
            }
          },
          metadata: bG
        }, WG, mG), (0, wG.k)(null, null, fG, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: GG => "specular" in GG,
            get: GG => GG.specular,
            set: (GG, bG) => {
              GG.specular = bG
            }
          },
          metadata: bG
        }, IG, FG), (0, wG.k)(null, null, QG, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: GG => "falloffType" in GG,
            get: GG => GG.falloffType,
            set: (GG, bG) => {
              GG.falloffType = bG
            }
          },
          metadata: bG
        }, vG, aG), (0, wG.k)(null, null, KG, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: GG => "intensity" in GG,
            get: GG => GG.intensity,
            set: (GG, bG) => {
              GG.intensity = bG
            }
          },
          metadata: bG
        }, cG, lG), (0, wG.k)(null, null, rG, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: GG => "_renderPriority" in GG,
            get: GG => GG._renderPriority,
            set: (GG, bG) => {
              GG._renderPriority = bG
            }
          },
          metadata: bG
        }, jG, PG), (0, wG.k)(null, null, EG, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: GG => "_shadowEnabled" in GG,
            get: GG => GG._shadowEnabled,
            set: (GG, bG) => {
              GG._shadowEnabled = bG
            }
          },
          metadata: bG
        }, sG, qG), (0, wG.k)(null, null, oG, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: GG => "_excludeWithLayerMask" in GG,
            get: GG => GG._excludeWithLayerMask,
            set: (GG, bG) => {
              GG._excludeWithLayerMask = bG
            }
          },
          metadata: bG
        }, nG, gG), (0, wG.k)(null, null, XG, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: GG => "_includeOnlyWithLayerMask" in GG,
            get: GG => GG._includeOnlyWithLayerMask,
            set: (GG, bG) => {
              GG._includeOnlyWithLayerMask = bG
            }
          },
          metadata: bG
        }, eG, RG), (0, wG.k)(null, null, uG, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: GG => "_lightmapMode" in GG,
            get: GG => GG._lightmapMode,
            set: (GG, bG) => {
              GG._lightmapMode = bG
            }
          },
          metadata: bG
        }, TG, HG), bG && Object.defineProperty(GG, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bG
        })
      })(), GG.FALLOFF_DEFAULT = VG.b.FALLOFF_DEFAULT, GG.FALLOFF_PHYSICAL = VG.b.FALLOFF_PHYSICAL, GG.FALLOFF_GLTF = VG.b.FALLOFF_GLTF, GG.FALLOFF_STANDARD = VG.b.FALLOFF_STANDARD, GG.LIGHTMAP_DEFAULT = VG.b.LIGHTMAP_DEFAULT, GG.LIGHTMAP_SPECULAR = VG.b.LIGHTMAP_SPECULAR, GG.LIGHTMAP_SHADOWSONLY = VG.b.LIGHTMAP_SHADOWSONLY, GG.INTENSITYMODE_AUTOMATIC = VG.b.INTENSITYMODE_AUTOMATIC, GG.INTENSITYMODE_LUMINOUSPOWER = VG.b.INTENSITYMODE_LUMINOUSPOWER, GG.INTENSITYMODE_LUMINOUSINTENSITY = VG.b.INTENSITYMODE_LUMINOUSINTENSITY, GG.INTENSITYMODE_ILLUMINANCE = VG.b.INTENSITYMODE_ILLUMINANCE, GG.INTENSITYMODE_LUMINANCE = VG.b.INTENSITYMODE_LUMINANCE, GG.LIGHTTYPEID_POINTLIGHT = VG.b.LIGHTTYPEID_POINTLIGHT, GG.LIGHTTYPEID_DIRECTIONALLIGHT = VG.b.LIGHTTYPEID_DIRECTIONALLIGHT, GG.LIGHTTYPEID_SPOTLIGHT = VG.b.LIGHTTYPEID_SPOTLIGHT, GG.LIGHTTYPEID_HEMISPHERICLIGHT = VG.b.LIGHTTYPEID_HEMISPHERICLIGHT, GG.LIGHTTYPEID_RECT_AREALIGHT = VG.b.LIGHTTYPEID_RECT_AREALIGHT, GG
    })()
  },
  40599: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => pG
    });
    var wG = ZG(40393),
      SG = ZG(37439),
      LG = ZG(40398),
      yG = ZG(37465),
      kG = ZG(37463),
      UG = ZG(40258),
      YG = ZG(40416);
    class VG {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new yG.c, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new yG.c, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let pG = (() => {
      var GG;
      let bG, ZG, pG, fG, QG, KG = [],
        hG = [],
        dG = [],
        JG = [],
        rG = [],
        zG = [],
        EG = [],
        oG = [],
        XG = [],
        uG = [];
      return GG = class {
        static AddNodeConstructor(GG, bG) {
          this._NodeConstructors[GG] = bG
        }
        static Construct(GG, bG, ZG, wG) {
          const SG = this._NodeConstructors[GG];
          return SG ? SG(bG, ZG, wG) : null
        }
        set accessibilityTag(GG) {
          this._accessibilityTag = GG, this.onAccessibilityTagChangedObservable.notifyObservers(GG)
        }
        get accessibilityTag() {
          return this._accessibilityTag
        }
        get doNotSerialize() {
          return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
        }
        set doNotSerialize(GG) {
          this._nodeDataStorage._doNotSerialize = GG
        }
        Tu() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(GG) {
          if (this._parentNode === GG) return;
          const bG = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const bG = this._parentNode._children.indexOf(this); - 1 !== bG && this._parentNode._children.splice(bG, 1), GG || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = GG, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), bG || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
        }
        get parent() {
          return this._parentNode
        }
        get inheritVisibility() {
          return this._nodeDataStorage._inheritVisibility
        }
        set inheritVisibility(GG) {
          this._nodeDataStorage._inheritVisibility = GG
        }
        get isVisible() {
          return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
        }
        set isVisible(GG) {
          this._nodeDataStorage._isVisible = GG
        }
        _serializeAsParent(GG) {
          GG.parentId = this.uniqueId
        }
        _addToSceneRootNodes() {
          -1 === this._nodeDataStorage._sceneRootNodesIndex && (this._nodeDataStorage._sceneRootNodesIndex = this._scene.rootNodes.length, this._scene.rootNodes.push(this))
        }
        _removeFromSceneRootNodes() {
          if (-1 !== this._nodeDataStorage._sceneRootNodesIndex) {
            const GG = this._scene.rootNodes,
              bG = GG.length - 1;
            GG[this._nodeDataStorage._sceneRootNodesIndex] = GG[bG], GG[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
          }
        }
        get animationPropertiesOverride() {
          return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
        }
        set animationPropertiesOverride(GG) {
          this._animationPropertiesOverride = GG
        }
        getClassName() {
          return "Node"
        }
        set onDispose(GG) {
          this._onDisposeObserver && this.Gl.remove(this._onDisposeObserver), this._onDisposeObserver = this.Gl.add(GG)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var GG;
          return (GG = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (GG._onEffectiveEnabledStateChangedObservable = new yG.c)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            ZG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new VG, this.name = (0, wG.n)(this, KG, void 0), this.id = ((0, wG.n)(this, hG), (0, wG.n)(this, dG, void 0)), this.uniqueId = ((0, wG.n)(this, JG), (0, wG.n)(this, rG, void 0)), this.state = ((0, wG.n)(this, zG), (0, wG.n)(this, EG, "")), this.metadata = ((0, wG.n)(this, oG), (0, wG.n)(this, XG, null)), this._internalMetadata = (0, wG.n)(this, uG), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new yG.c, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = SG.e.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.Gl = new yG.c, this._onDisposeObserver = null, this._behaviors = new Array, this.name = GG, this.id = GG, this._scene = bG || kG.c.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), ZG && this._addToSceneRootNodes()
        }
        Dv() {
          return this._scene
        }
        CK() {
          return this._scene.CK()
        }
        addBehavior(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(GG) || (GG.init(), this._scene.isLoading && !bG ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(GG) && GG.attach(this)
          })) : GG.attach(this), this._behaviors.push(GG)), this
        }
        removeBehavior(GG) {
          const bG = this._behaviors.indexOf(GG);
          return -1 === bG || (this._behaviors.splice(bG, 1), GG.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(GG) {
          for (const bG of this._behaviors)
            if (bG.name === GG) return bG;
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
        updateCache(GG) {
          !GG && this.isSynchronized() || this._updateCache()
        }
        _getActionManagerForTrigger(GG) {
          return this.parent ? this.parent._getActionManagerForTrigger(GG, !1) : null
        }
        _updateCache(GG) {}
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
        wZG(GG) {
          return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this
        }
        isEnabled() {
          return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled
        }
        _hasEffectiveEnabledStateObservers() {
          const GG = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
          return !!GG && GG.hasObservers()
        }
        _syncParentEnabledState() {
          const GG = this._hasEffectiveEnabledStateObservers(),
            bG = GG ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const ZG of this._children) ZG._syncParentEnabledState();
          if (GG) {
            const GG = this.isEnabled();
            GG !== bG && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(GG)
          }
        }
        DW(GG) {
          if (this._nodeDataStorage._isEnabled === GG) return;
          const bG = this._hasEffectiveEnabledStateObservers(),
            ZG = bG ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = GG, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(GG), bG) {
            const GG = this.isEnabled();
            GG !== ZG && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(GG)
          }
        }
        isDescendantOf(GG) {
          return !!this.parent && (this.parent === GG || this.parent.isDescendantOf(GG))
        }
        _getDescendants(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            ZG = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let wG = 0; wG < this._children.length; wG++) {
              const SG = this._children[wG];
              ZG && !ZG(SG) || GG.push(SG), bG || SG._getDescendants(GG, !1, ZG)
            }
        }
        getDescendants(GG, bG) {
          const ZG = [];
          return this._getDescendants(ZG, GG, bG), ZG
        }
        getChildMeshes(GG, bG) {
          const ZG = [];
          return this._getDescendants(ZG, GG, (GG => (!bG || bG(GG)) && void 0 !== GG.cullingStrategy)), ZG
        }
        getChildren(GG) {
          let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(bG, GG)
        }
        _setReady(GG) {
          GG !== this._nodeDataStorage._isReady && (GG ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(GG) {
          for (let bG = 0; bG < this.animations.length; bG++) {
            const ZG = this.animations[bG];
            if (ZG.name === GG) return ZG
          }
          return null
        }
        createAnimationRange(bG, ZG, wG) {
          if (!this._ranges[bG]) {
            this._ranges[bG] = GG._AnimationRangeFactory(bG, ZG, wG);
            for (let GG = 0, SG = this.animations.length; GG < SG; GG++) this.animations[GG] && this.animations[GG].createRange(bG, ZG, wG)
          }
        }
        deleteAnimationRange(GG) {
          let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let ZG = 0, wG = this.animations.length; ZG < wG; ZG++) this.animations[ZG] && this.animations[ZG].deleteRange(GG, bG);
          this._ranges[GG] = null
        }
        getAnimationRange(GG) {
          return this._ranges[GG] || null
        }
        clone(bG, ZG, wG) {
          const SG = YG.b.Clone((() => new GG(bG, this.Dv())), this);
          if (ZG && (SG.parent = ZG), !wG) {
            const GG = this.getDescendants(!0);
            for (let ZG = 0; ZG < GG.length; ZG++) {
              const wG = GG[ZG];
              wG.clone(bG + "." + wG.name, SG)
            }
          }
          return SG
        }
        getAnimationRanges() {
          const GG = [];
          let bG;
          for (bG in this._ranges) GG.push(this._ranges[bG]);
          return GG
        }
        beginAnimation(GG, bG, ZG, wG) {
          const SG = this.getAnimationRange(GG);
          return SG ? this._scene.beginAnimation(this, SG.from, SG.to, bG, ZG, wG) : null
        }
        serializeAnimationRanges() {
          const GG = [];
          for (const bG in this._ranges) {
            const ZG = this._ranges[bG];
            if (!ZG) continue;
            const wG = {};
            wG.name = bG, wG.from = ZG.from, wG.to = ZG.to, GG.push(wG)
          }
          return GG
        }
        computeWorldMatrix(GG) {
          return this._worldMatrix || (this._worldMatrix = SG.e.Identity()), this._worldMatrix
        }
        dispose(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !GG) {
            const ZG = this.getDescendants(!0);
            for (const wG of ZG) wG.dispose(GG, bG)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.Gl.notifyObservers(this), this.Gl.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const ZG of this._behaviors) ZG.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(GG, bG, ZG) {
          if (bG.Bh)
            for (let wG = 0; wG < bG.Bh.length; wG++) {
              const ZG = bG.Bh[wG];
              GG.createAnimationRange(ZG.name, ZG.from, ZG.to)
            }
        }
        getHierarchyBoundingVectors() {
          let GG, bG, ZG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            wG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.Dv().incrementRenderId(), this.computeWorldMatrix(!0);
          const LG = this;
          if (LG.HA && LG.aE) {
            const ZG = LG.HA();
            GG = ZG.boundingBox.minimumWorld.clone(), bG = ZG.boundingBox.maximumWorld.clone()
          } else GG = new SG.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), bG = new SG.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (ZG) {
            const ZG = this.getDescendants(!1);
            for (const LG of ZG) {
              const ZG = LG;
              if (ZG.computeWorldMatrix(!0), wG && !wG(ZG)) continue;
              if (!ZG.HA || 0 === ZG.getTotalVertices()) continue;
              const yG = ZG.HA().boundingBox,
                kG = yG.minimumWorld,
                UG = yG.maximumWorld;
              SG.p.CheckExtends(kG, GG, bG), SG.p.CheckExtends(UG, GG, bG)
            }
          }
          return {
            min: GG,
            max: bG
          }
        }
      }, (() => {
        const SG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        bG = [(0, LG.Q)()], ZG = [(0, LG.Q)()], pG = [(0, LG.Q)()], fG = [(0, LG.Q)()], QG = [(0, LG.Q)()], (0, wG.k)(null, null, bG, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: GG => "name" in GG,
            get: GG => GG.name,
            set: (GG, bG) => {
              GG.name = bG
            }
          },
          metadata: SG
        }, KG, hG), (0, wG.k)(null, null, ZG, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: GG => "id" in GG,
            get: GG => GG.id,
            set: (GG, bG) => {
              GG.id = bG
            }
          },
          metadata: SG
        }, dG, JG), (0, wG.k)(null, null, pG, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: GG => "uniqueId" in GG,
            get: GG => GG.uniqueId,
            set: (GG, bG) => {
              GG.uniqueId = bG
            }
          },
          metadata: SG
        }, rG, zG), (0, wG.k)(null, null, fG, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: GG => "state" in GG,
            get: GG => GG.state,
            set: (GG, bG) => {
              GG.state = bG
            }
          },
          metadata: SG
        }, EG, oG), (0, wG.k)(null, null, QG, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: GG => "metadata" in GG,
            get: GG => GG.metadata,
            set: (GG, bG) => {
              GG.metadata = bG
            }
          },
          metadata: SG
        }, XG, uG), SG && Object.defineProperty(GG, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: SG
        })
      })(), GG._AnimationRangeFactory = (GG, bG, ZG) => {
        throw (0, UG.i)("AnimationRange")
      }, GG._NodeConstructors = {}, GG
    })()
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);