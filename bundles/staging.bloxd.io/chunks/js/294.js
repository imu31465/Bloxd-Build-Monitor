export const id = 294;
export const ids = [294];
export const modules = {
  41777: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => wR
    });
    var yR = GR(41520),
      tR = GR(41524),
      uR = GR(38204),
      ZR = GR(38331),
      qR = GR(41741),
      iR = GR(41650),
      fR = GR(38253),
      VR = GR(41715),
      KR = GR(41542);
    let wR = (() => {
      var RR, JR;
      let GR, wR, rR, eR, aR, LR, nR, UR, WR, AR, CR, XR, MR, BR = qR.d,
        lR = [],
        pR = [],
        gR = [],
        bR = [],
        vR = [],
        OR = [],
        xR = [],
        NR = [],
        DR = [],
        HR = [],
        oR = [],
        cR = [],
        PR = [],
        IR = [],
        mR = [],
        zR = [],
        SR = [],
        jR = [],
        dR = [],
        ER = [],
        YR = [];
      return RR = class extends BR {
        get range() {
          return this._range
        }
        set range(RR) {
          this._range = RR, this._inverseSquaredRange = 1 / (this.range * this.range)
        }
        get intensityMode() {
          return this._intensityMode
        }
        set intensityMode(RR) {
          this._intensityMode = RR, this._computePhotometricScale()
        }
        get radius() {
          return this._radius
        }
        set radius(RR) {
          this._radius = RR, this._computePhotometricScale()
        }
        get renderPriority() {
          return (0, yR.e)(this, JR, "f")
        }
        set renderPriority(RR) {
          (0, yR.i)(this, JR, RR, "f")
        }
        get shadowEnabled() {
          return this._shadowEnabled
        }
        set shadowEnabled(RR) {
          this._shadowEnabled !== RR && (this._shadowEnabled = RR, this._markMeshesAsLightDirty())
        }
        get includedOnlyMeshes() {
          return this._includedOnlyMeshes
        }
        set includedOnlyMeshes(RR) {
          this._includedOnlyMeshes = RR, this._hookArrayForIncludedOnly(RR)
        }
        get excludedMeshes() {
          return this._excludedMeshes
        }
        set excludedMeshes(RR) {
          this._excludedMeshes = RR, this._hookArrayForExcluded(RR)
        }
        get excludeWithLayerMask() {
          return this._excludeWithLayerMask
        }
        set excludeWithLayerMask(RR) {
          this._excludeWithLayerMask = RR, this._resyncMeshes()
        }
        get includeOnlyWithLayerMask() {
          return this._includeOnlyWithLayerMask
        }
        set includeOnlyWithLayerMask(RR) {
          this._includeOnlyWithLayerMask = RR, this._resyncMeshes()
        }
        get lightmapMode() {
          return this._lightmapMode
        }
        set lightmapMode(RR) {
          this._lightmapMode !== RR && (this._lightmapMode = RR, this._markMeshesAsLightDirty())
        }
        getViewMatrix(RR) {
          return null
        }
        getProjectionMatrix(RR, JR) {
          return null
        }
        constructor(GR, tR, uR) {
          super(GR, tR, !1), this.diffuse = ((0, yR.m)(this, lR), (0, yR.m)(this, pR, new ZR.d(1, 1, 1))), this.specular = ((0, yR.m)(this, gR), (0, yR.m)(this, bR, new ZR.d(1, 1, 1))), this.falloffType = ((0, yR.m)(this, vR), (0, yR.m)(this, OR, RR.FALLOFF_DEFAULT)), this.intensity = ((0, yR.m)(this, xR), (0, yR.m)(this, NR, 1)), this._range = ((0, yR.m)(this, DR), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = RR.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, yR.m)(this, HR, void 0), JR.set(this, ((0, yR.m)(this, oR), (0, yR.m)(this, cR, 0))), this._shadowEnabled = ((0, yR.m)(this, PR), (0, yR.m)(this, IR, !0)), this._includedOnlyMeshes = (0, yR.m)(this, mR), this._excludeWithLayerMask = (0, yR.m)(this, zR, 0), this._includeOnlyWithLayerMask = ((0, yR.m)(this, SR), (0, yR.m)(this, jR, 0)), this._lightmapMode = ((0, yR.m)(this, dR), (0, yR.m)(this, ER, 0)), this._shadowGenerators = ((0, yR.m)(this, YR), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, uR || this.jH().addLight(this), this._uniformBuffer = new iR.b(this.jH().ke(), void 0, void 0, GR), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], uR || this._resyncMeshes()
        }
        transferTexturesToEffect(RR, JR) {
          return this
        }
        _bindLight(RR, JR, GR, yR) {
          let tR = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const uR = RR.toString();
          let qR = !1;
          if (this._uniformBuffer.bindToEffect(GR, "Light" + uR), this._renderId !== JR.getRenderId() || this._lastUseSpecular !== yR || !this._uniformBuffer.useUbo) {
            this._renderId = JR.getRenderId(), this._lastUseSpecular = yR;
            const RR = this.getScaledIntensity();
            this.transferToEffect(GR, uR), this.diffuse.scaleToRef(RR, ZR.j.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", ZR.j.Color3[0], this.range, uR), yR && (this.specular.scaleToRef(RR, ZR.j.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", ZR.j.Color3[1], this.radius, uR)), qR = !0
          }
          if (this.transferTexturesToEffect(GR, uR), JR.shadowsEnabled && this.shadowEnabled && tR) {
            const RR = this.getShadowGenerator(JR.activeCamera) ?? this.getShadowGenerator();
            RR && (RR.bindShadowLight(uR, GR), qR = !0)
          }
          qR ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(RR) {
          let JR = "Name: " + this.name;
          if (JR += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let GR = 0; GR < this.animations.length; GR++) JR += ", animation[0]: " + this.animations[GR].toString(RR);
          return JR
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.oB() || this._resyncMeshes()
        }
        JA(RR) {
          super.JA(RR), this._resyncMeshes()
        }
        getShadowGenerator() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(RR) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return uR.r.Zero()
        }
        canAffectMesh(RR) {
          return !RR || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(RR)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(RR)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & RR.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & RR.layerMask)))
        }
        dispose(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const RR = this._shadowGenerators.values();
            for (let JR = RR.next(); !0 !== JR.done; JR = RR.next()) {
              JR.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.jH().stopAnimation(this), this._parentContainer) {
            const RR = this._parentContainer.lights.indexOf(this);
            RR > -1 && this._parentContainer.lights.splice(RR, 1), this._parentContainer = null
          }
          for (const GR of this.jH().meshes) GR._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.jH().removeLight(this), super.dispose(RR, JR)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(JR) {
          let GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const yR = RR.GetConstructorFromName(this.getTypeID(), JR, this.jH());
          if (!yR) return null;
          const tR = KR.c.Clone(yR, this);
          return JR && (tR.name = JR), GR && (tR.parent = GR), tR.JA(this.isEnabled()), this.onClonedObservable.notifyObservers(tR), tR
        }
        serialize() {
          const RR = KR.c.Serialize(this);
          if (RR.uniqueId = this.uniqueId, RR.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(RR), this.excludedMeshes.length > 0) {
            RR.excludedMeshesIds = [];
            for (const JR of this.excludedMeshes) RR.excludedMeshesIds.push(JR.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            RR.includedOnlyMeshesIds = [];
            for (const JR of this.includedOnlyMeshes) RR.includedOnlyMeshesIds.push(JR.id)
          }
          return KR.c.AppendSerializedAnimations(this, RR), RR.WL = this.serializeAnimationRanges(), RR.isEnabled = this.isEnabled(), RR
        }
        static GetConstructorFromName(RR, JR, GR) {
          const yR = qR.d.Construct("Light_Type_" + RR, JR, GR);
          return yR || null
        }
        static Parse(JR, GR) {
          let yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const tR = RR.GetConstructorFromName(JR.type, JR.name, GR);
          if (!tR) return null;
          const uR = KR.c.Parse(tR, JR, GR, yR);
          if (JR.excludedMeshesIds && (uR._excludedMeshesIds = JR.excludedMeshesIds), JR.includedOnlyMeshesIds && (uR._includedOnlyMeshesIds = JR.includedOnlyMeshesIds), void 0 !== JR.parentId && (uR._waitingParentId = JR.parentId), void 0 !== JR.parentInstanceIndex && (uR._waitingParentInstanceIndex = JR.parentInstanceIndex), void 0 !== JR.falloffType && (uR.falloffType = JR.falloffType), void 0 !== JR.lightmapMode && (uR.lightmapMode = JR.lightmapMode), JR.animations) {
            for (let RR = 0; RR < JR.animations.length; RR++) {
              const GR = JR.animations[RR],
                yR = (0, fR.e)("BABYLON.Animation");
              yR && uR.animations.push(yR.Parse(GR))
            }
            qR.d.ParseAnimationRanges(uR, JR, GR)
          }
          return JR.autoAnimate && GR.beginAnimation(uR, JR.autoAnimateFrom, JR.autoAnimateTo, JR.autoAnimateLoop, JR.autoAnimateSpeed || 1), void 0 !== JR.isEnabled && uR.JA(JR.isEnabled), uR._onParsed(JR, GR, yR), uR
        }
        _onParsed(RR, JR) {}
        _hookArrayForExcluded(RR) {
          var JR = this;
          const GR = RR.push;
          RR.push = function() {
            for (var yR = arguments.length, tR = new Array(yR), uR = 0; uR < yR; uR++) tR[uR] = arguments[uR];
            const ZR = GR.apply(RR, tR);
            if (JR._clusteredContainer) return ZR;
            for (const RR of tR) RR._resyncLightSource(JR);
            return ZR
          };
          const yR = RR.splice;
          RR.splice = (JR, GR) => {
            const tR = yR.call(RR, JR, GR ?? RR.length);
            if (this._clusteredContainer) return tR;
            for (const RR of tR) RR._resyncLightSource(this);
            return tR
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(RR) {
          var JR = this;
          const GR = RR.push;
          RR.push = function() {
            for (var yR = arguments.length, tR = new Array(yR), uR = 0; uR < yR; uR++) tR[uR] = arguments[uR];
            const ZR = GR.apply(RR, tR);
            return JR._resyncMeshes(), ZR
          };
          const yR = RR.splice;
          RR.splice = (JR, GR) => {
            const tR = yR.call(RR, JR, GR ?? RR.length);
            return this._resyncMeshes(), tR
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const RR of this.jH().meshes) RR._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const RR of this.jH().meshes) - 1 !== RR.lightSources.indexOf(this) && RR._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.jH().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let JR = 0;
          const GR = this.getTypeID();
          let yR = this.intensityMode;
          switch (yR === RR.INTENSITYMODE_AUTOMATIC && (yR = GR === RR.LIGHTTYPEID_DIRECTIONALLIGHT ? RR.INTENSITYMODE_ILLUMINANCE : RR.INTENSITYMODE_LUMINOUSINTENSITY), GR) {
            case RR.LIGHTTYPEID_POINTLIGHT:
            case RR.LIGHTTYPEID_SPOTLIGHT:
              switch (yR) {
                case RR.INTENSITYMODE_LUMINOUSPOWER:
                  JR = 1 / (4 * Math.PI);
                  break;
                case RR.INTENSITYMODE_LUMINOUSINTENSITY:
                  JR = 1;
                  break;
                case RR.INTENSITYMODE_LUMINANCE:
                  JR = this.radius * this.radius
              }
              break;
            case RR.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (yR) {
                case RR.INTENSITYMODE_ILLUMINANCE:
                  JR = 1;
                  break;
                case RR.INTENSITYMODE_LUMINANCE: {
                  let RR = this.radius;
                  RR = Math.max(RR, .001);
                  JR = 2 * Math.PI * (1 - Math.cos(RR));
                  break
                }
              }
              break;
            case RR.LIGHTTYPEID_HEMISPHERICLIGHT:
            case RR.LIGHTTYPEID_RECT_AREALIGHT:
              JR = 1
          }
          return JR
        }
        _reorderLightsInScene() {
          const RR = this.jH();
          0 != this._renderPriority && (RR.requireLightSorting = !0), this.jH().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, JR = new WeakMap, (() => {
        const JR = "function" === typeof Symbol && Symbol.metadata ? Object.create(BR[Symbol.metadata] ?? null) : void 0;
        GR = [(0, tR.k)()], wR = [(0, tR.k)()], rR = [(0, tR.H)()], eR = [(0, tR.H)()], aR = [(0, tR.H)()], LR = [(0, tR.H)()], nR = [(0, tR.H)()], UR = [(0, tR.H)()], WR = [(0, tR.d)("_reorderLightsInScene")], AR = [(0, tR.H)("shadowEnabled")], CR = [(0, tR.H)("excludeWithLayerMask")], XR = [(0, tR.H)("includeOnlyWithLayerMask")], MR = [(0, tR.H)("lightmapMode")], (0, yR.l)(RR, null, aR, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: RR => "range" in RR,
            get: RR => RR.range
          },
          metadata: JR
        }, null, lR), (0, yR.l)(RR, null, LR, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: RR => "intensityMode" in RR,
            get: RR => RR.intensityMode
          },
          metadata: JR
        }, null, lR), (0, yR.l)(RR, null, nR, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: RR => "radius" in RR,
            get: RR => RR.radius
          },
          metadata: JR
        }, null, lR), (0, yR.l)(RR, null, WR, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: RR => "renderPriority" in RR,
            get: RR => RR.renderPriority,
            set: (RR, JR) => {
              RR.renderPriority = JR
            }
          },
          metadata: JR
        }, cR, PR), (0, yR.l)(null, null, GR, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: RR => "diffuse" in RR,
            get: RR => RR.diffuse,
            set: (RR, JR) => {
              RR.diffuse = JR
            }
          },
          metadata: JR
        }, pR, gR), (0, yR.l)(null, null, wR, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: RR => "specular" in RR,
            get: RR => RR.specular,
            set: (RR, JR) => {
              RR.specular = JR
            }
          },
          metadata: JR
        }, bR, vR), (0, yR.l)(null, null, rR, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: RR => "falloffType" in RR,
            get: RR => RR.falloffType,
            set: (RR, JR) => {
              RR.falloffType = JR
            }
          },
          metadata: JR
        }, OR, xR), (0, yR.l)(null, null, eR, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: RR => "intensity" in RR,
            get: RR => RR.intensity,
            set: (RR, JR) => {
              RR.intensity = JR
            }
          },
          metadata: JR
        }, NR, DR), (0, yR.l)(null, null, UR, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: RR => "_renderPriority" in RR,
            get: RR => RR._renderPriority,
            set: (RR, JR) => {
              RR._renderPriority = JR
            }
          },
          metadata: JR
        }, HR, oR), (0, yR.l)(null, null, AR, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: RR => "_shadowEnabled" in RR,
            get: RR => RR._shadowEnabled,
            set: (RR, JR) => {
              RR._shadowEnabled = JR
            }
          },
          metadata: JR
        }, IR, mR), (0, yR.l)(null, null, CR, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: RR => "_excludeWithLayerMask" in RR,
            get: RR => RR._excludeWithLayerMask,
            set: (RR, JR) => {
              RR._excludeWithLayerMask = JR
            }
          },
          metadata: JR
        }, zR, SR), (0, yR.l)(null, null, XR, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: RR => "_includeOnlyWithLayerMask" in RR,
            get: RR => RR._includeOnlyWithLayerMask,
            set: (RR, JR) => {
              RR._includeOnlyWithLayerMask = JR
            }
          },
          metadata: JR
        }, jR, dR), (0, yR.l)(null, null, MR, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: RR => "_lightmapMode" in RR,
            get: RR => RR._lightmapMode,
            set: (RR, JR) => {
              RR._lightmapMode = JR
            }
          },
          metadata: JR
        }, ER, YR), JR && Object.defineProperty(RR, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: JR
        })
      })(), RR.FALLOFF_DEFAULT = VR.c.FALLOFF_DEFAULT, RR.FALLOFF_PHYSICAL = VR.c.FALLOFF_PHYSICAL, RR.FALLOFF_GLTF = VR.c.FALLOFF_GLTF, RR.FALLOFF_STANDARD = VR.c.FALLOFF_STANDARD, RR.LIGHTMAP_DEFAULT = VR.c.LIGHTMAP_DEFAULT, RR.LIGHTMAP_SPECULAR = VR.c.LIGHTMAP_SPECULAR, RR.LIGHTMAP_SHADOWSONLY = VR.c.LIGHTMAP_SHADOWSONLY, RR.INTENSITYMODE_AUTOMATIC = VR.c.INTENSITYMODE_AUTOMATIC, RR.INTENSITYMODE_LUMINOUSPOWER = VR.c.INTENSITYMODE_LUMINOUSPOWER, RR.INTENSITYMODE_LUMINOUSINTENSITY = VR.c.INTENSITYMODE_LUMINOUSINTENSITY, RR.INTENSITYMODE_ILLUMINANCE = VR.c.INTENSITYMODE_ILLUMINANCE, RR.INTENSITYMODE_LUMINANCE = VR.c.INTENSITYMODE_LUMINANCE, RR.LIGHTTYPEID_POINTLIGHT = VR.c.LIGHTTYPEID_POINTLIGHT, RR.LIGHTTYPEID_DIRECTIONALLIGHT = VR.c.LIGHTTYPEID_DIRECTIONALLIGHT, RR.LIGHTTYPEID_SPOTLIGHT = VR.c.LIGHTTYPEID_SPOTLIGHT, RR.LIGHTTYPEID_HEMISPHERICLIGHT = VR.c.LIGHTTYPEID_HEMISPHERICLIGHT, RR.LIGHTTYPEID_RECT_AREALIGHT = VR.c.LIGHTTYPEID_RECT_AREALIGHT, RR
    })()
  },
  41741: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => KR
    });
    var yR = GR(41520),
      tR = GR(38204),
      uR = GR(41524),
      ZR = GR(38233),
      qR = GR(38224),
      iR = GR(41407),
      fR = GR(41542);
    class VR {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new ZR.b, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new ZR.b, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let KR = (() => {
      var RR;
      let JR, GR, KR, wR, rR, eR = [],
        aR = [],
        LR = [],
        nR = [],
        UR = [],
        WR = [],
        AR = [],
        CR = [],
        XR = [],
        MR = [];
      return RR = class {
        static AddNodeConstructor(RR, JR) {
          this._NodeConstructors[RR] = JR
        }
        static Construct(RR, JR, GR, yR) {
          const tR = this._NodeConstructors[RR];
          return tR ? tR(JR, GR, yR) : null
        }
        set accessibilityTag(RR) {
          this._accessibilityTag = RR, this.onAccessibilityTagChangedObservable.notifyObservers(RR)
        }
        get accessibilityTag() {
          return this._accessibilityTag
        }
        get doNotSerialize() {
          return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
        }
        set doNotSerialize(RR) {
          this._nodeDataStorage._doNotSerialize = RR
        }
        oB() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(RR) {
          if (this._parentNode === RR) return;
          const JR = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const JR = this._parentNode._children.indexOf(this); - 1 !== JR && this._parentNode._children.splice(JR, 1), RR || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = RR, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), JR || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
        }
        get parent() {
          return this._parentNode
        }
        get inheritVisibility() {
          return this._nodeDataStorage._inheritVisibility
        }
        set inheritVisibility(RR) {
          this._nodeDataStorage._inheritVisibility = RR
        }
        get isVisible() {
          return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
        }
        set isVisible(RR) {
          this._nodeDataStorage._isVisible = RR
        }
        _serializeAsParent(RR) {
          RR.parentId = this.uniqueId
        }
        _addToSceneRootNodes() {
          -1 === this._nodeDataStorage._sceneRootNodesIndex && (this._nodeDataStorage._sceneRootNodesIndex = this._scene.rootNodes.length, this._scene.rootNodes.push(this))
        }
        _removeFromSceneRootNodes() {
          if (-1 !== this._nodeDataStorage._sceneRootNodesIndex) {
            const RR = this._scene.rootNodes,
              JR = RR.length - 1;
            RR[this._nodeDataStorage._sceneRootNodesIndex] = RR[JR], RR[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
          }
        }
        get animationPropertiesOverride() {
          return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
        }
        set animationPropertiesOverride(RR) {
          this._animationPropertiesOverride = RR
        }
        getClassName() {
          return "Node"
        }
        set onDispose(RR) {
          this._onDisposeObserver && this.YH.remove(this._onDisposeObserver), this._onDisposeObserver = this.YH.add(RR)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var RR;
          return (RR = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (RR._onEffectiveEnabledStateChangedObservable = new ZR.b)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new VR, this.name = (0, yR.m)(this, eR, void 0), this.id = ((0, yR.m)(this, aR), (0, yR.m)(this, LR, void 0)), this.uniqueId = ((0, yR.m)(this, nR), (0, yR.m)(this, UR, void 0)), this.state = ((0, yR.m)(this, WR), (0, yR.m)(this, AR, "")), this.metadata = ((0, yR.m)(this, CR), (0, yR.m)(this, XR, null)), this._internalMetadata = (0, yR.m)(this, MR), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new ZR.b, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = tR.e.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.YH = new ZR.b, this._onDisposeObserver = null, this._behaviors = new Array, this.name = RR, this.id = RR, this._scene = JR || qR.c.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), GR && this._addToSceneRootNodes()
        }
        jH() {
          return this._scene
        }
        ke() {
          return this._scene.ke()
        }
        addBehavior(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(RR) || (RR.init(), this._scene.isLoading && !JR ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(RR) && RR.attach(this)
          })) : RR.attach(this), this._behaviors.push(RR)), this
        }
        removeBehavior(RR) {
          const JR = this._behaviors.indexOf(RR);
          return -1 === JR || (this._behaviors.splice(JR, 1), RR.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(RR) {
          for (const JR of this._behaviors)
            if (JR.name === RR) return JR;
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
        updateCache(RR) {
          !RR && this.isSynchronized() || this._updateCache()
        }
        _getActionManagerForTrigger(RR) {
          return this.parent ? this.parent._getActionManagerForTrigger(RR, !1) : null
        }
        _updateCache(RR) {}
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
        hGR(RR) {
          return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this
        }
        isEnabled() {
          return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled
        }
        _hasEffectiveEnabledStateObservers() {
          const RR = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
          return !!RR && RR.hasObservers()
        }
        _syncParentEnabledState() {
          const RR = this._hasEffectiveEnabledStateObservers(),
            JR = RR ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const GR of this._children) GR._syncParentEnabledState();
          if (RR) {
            const RR = this.isEnabled();
            RR !== JR && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(RR)
          }
        }
        JA(RR) {
          if (this._nodeDataStorage._isEnabled === RR) return;
          const JR = this._hasEffectiveEnabledStateObservers(),
            GR = JR ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = RR, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(RR), JR) {
            const RR = this.isEnabled();
            RR !== GR && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(RR)
          }
        }
        isDescendantOf(RR) {
          return !!this.parent && (this.parent === RR || this.parent.isDescendantOf(RR))
        }
        _getDescendants(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            GR = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let yR = 0; yR < this._children.length; yR++) {
              const tR = this._children[yR];
              GR && !GR(tR) || RR.push(tR), JR || tR._getDescendants(RR, !1, GR)
            }
        }
        getDescendants(RR, JR) {
          const GR = [];
          return this._getDescendants(GR, RR, JR), GR
        }
        getChildMeshes(RR, JR) {
          const GR = [];
          return this._getDescendants(GR, RR, (RR => (!JR || JR(RR)) && void 0 !== RR.cullingStrategy)), GR
        }
        getChildren(RR) {
          let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(JR, RR)
        }
        _setReady(RR) {
          RR !== this._nodeDataStorage._isReady && (RR ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(RR) {
          for (let JR = 0; JR < this.animations.length; JR++) {
            const GR = this.animations[JR];
            if (GR.name === RR) return GR
          }
          return null
        }
        createAnimationRange(JR, GR, yR) {
          if (!this._ranges[JR]) {
            this._ranges[JR] = RR._AnimationRangeFactory(JR, GR, yR);
            for (let RR = 0, tR = this.animations.length; RR < tR; RR++) this.animations[RR] && this.animations[RR].createRange(JR, GR, yR)
          }
        }
        deleteAnimationRange(RR) {
          let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let GR = 0, yR = this.animations.length; GR < yR; GR++) this.animations[GR] && this.animations[GR].deleteRange(RR, JR);
          this._ranges[RR] = null
        }
        getAnimationRange(RR) {
          return this._ranges[RR] || null
        }
        clone(JR, GR, yR) {
          const tR = fR.c.Clone((() => new RR(JR, this.jH())), this);
          if (GR && (tR.parent = GR), !yR) {
            const RR = this.getDescendants(!0);
            for (let GR = 0; GR < RR.length; GR++) {
              const yR = RR[GR];
              yR.clone(JR + "." + yR.name, tR)
            }
          }
          return tR
        }
        getAnimationRanges() {
          const RR = [];
          let JR;
          for (JR in this._ranges) RR.push(this._ranges[JR]);
          return RR
        }
        beginAnimation(RR, JR, GR, yR) {
          const tR = this.getAnimationRange(RR);
          return tR ? this._scene.beginAnimation(this, tR.from, tR.to, JR, GR, yR) : null
        }
        serializeAnimationRanges() {
          const RR = [];
          for (const JR in this._ranges) {
            const GR = this._ranges[JR];
            if (!GR) continue;
            const yR = {};
            yR.name = JR, yR.from = GR.from, yR.to = GR.to, RR.push(yR)
          }
          return RR
        }
        computeWorldMatrix(RR) {
          return this._worldMatrix || (this._worldMatrix = tR.e.Identity()), this._worldMatrix
        }
        dispose(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !RR) {
            const GR = this.getDescendants(!0);
            for (const yR of GR) yR.dispose(RR, JR)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.YH.notifyObservers(this), this.YH.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const GR of this._behaviors) GR.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(RR, JR, GR) {
          if (JR.WL)
            for (let yR = 0; yR < JR.WL.length; yR++) {
              const GR = JR.WL[yR];
              RR.createAnimationRange(GR.name, GR.from, GR.to)
            }
        }
        getHierarchyBoundingVectors() {
          let RR, JR, GR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            yR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.jH().incrementRenderId(), this.computeWorldMatrix(!0);
          const uR = this;
          if (uR.Tm && uR.XM) {
            const GR = uR.Tm();
            RR = GR.boundingBox.minimumWorld.clone(), JR = GR.boundingBox.maximumWorld.clone()
          } else RR = new tR.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), JR = new tR.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (GR) {
            const GR = this.getDescendants(!1);
            for (const uR of GR) {
              const GR = uR;
              if (GR.computeWorldMatrix(!0), yR && !yR(GR)) continue;
              if (!GR.Tm || 0 === GR.getTotalVertices()) continue;
              const ZR = GR.Tm().boundingBox,
                qR = ZR.minimumWorld,
                iR = ZR.maximumWorld;
              tR.r.CheckExtends(qR, RR, JR), tR.r.CheckExtends(iR, RR, JR)
            }
          }
          return {
            min: RR,
            max: JR
          }
        }
      }, (() => {
        const tR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        JR = [(0, uR.H)()], GR = [(0, uR.H)()], KR = [(0, uR.H)()], wR = [(0, uR.H)()], rR = [(0, uR.H)()], (0, yR.l)(null, null, JR, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: RR => "name" in RR,
            get: RR => RR.name,
            set: (RR, JR) => {
              RR.name = JR
            }
          },
          metadata: tR
        }, eR, aR), (0, yR.l)(null, null, GR, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: RR => "id" in RR,
            get: RR => RR.id,
            set: (RR, JR) => {
              RR.id = JR
            }
          },
          metadata: tR
        }, LR, nR), (0, yR.l)(null, null, KR, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: RR => "uniqueId" in RR,
            get: RR => RR.uniqueId,
            set: (RR, JR) => {
              RR.uniqueId = JR
            }
          },
          metadata: tR
        }, UR, WR), (0, yR.l)(null, null, wR, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: RR => "state" in RR,
            get: RR => RR.state,
            set: (RR, JR) => {
              RR.state = JR
            }
          },
          metadata: tR
        }, AR, CR), (0, yR.l)(null, null, rR, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: RR => "metadata" in RR,
            get: RR => RR.metadata,
            set: (RR, JR) => {
              RR.metadata = JR
            }
          },
          metadata: tR
        }, XR, MR), tR && Object.defineProperty(RR, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: tR
        })
      })(), RR._AnimationRangeFactory = (RR, JR, GR) => {
        throw (0, iR.j)("AnimationRange")
      }, RR._NodeConstructors = {}, RR
    })()
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);