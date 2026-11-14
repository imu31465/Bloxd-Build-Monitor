export const id = 229;
export const ids = [229];
export const modules = {
  38230: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => eF
    });
    var CF = SF(37972),
      AF = SF(37974),
      uF = SF(35623),
      hF = SF(35678),
      bW = SF(38187),
      dF = SF(38098),
      PF = SF(35660),
      RF = SF(38166),
      iW = SF(37994);
    let eF = (() => {
      var FF, WF;
      let SF, eF, EF, QF, rW, gW, tW, TF, aW, kW, qW, VF, NF, DF = bW.e,
        LF = [],
        mW = [],
        OF = [],
        xW = [],
        ZF = [],
        oF = [],
        YF = [],
        MF = [],
        cW = [],
        GF = [],
        zW = [],
        IF = [],
        fF = [],
        yW = [],
        sF = [],
        nF = [],
        HF = [],
        KF = [],
        wF = [],
        XF = [],
        UF = [];
      return FF = class extends DF {
        get range() {
          return this._range
        }
        set range(FF) {
          this._range = FF, this._inverseSquaredRange = 1 / (this.range * this.range)
        }
        get intensityMode() {
          return this._intensityMode
        }
        set intensityMode(FF) {
          this._intensityMode = FF, this._computePhotometricScale()
        }
        get radius() {
          return this._radius
        }
        set radius(FF) {
          this._radius = FF, this._computePhotometricScale()
        }
        get renderPriority() {
          return (0, CF.d)(this, WF, "f")
        }
        set renderPriority(FF) {
          (0, CF.h)(this, WF, FF, "f")
        }
        get shadowEnabled() {
          return this._shadowEnabled
        }
        set shadowEnabled(FF) {
          this._shadowEnabled !== FF && (this._shadowEnabled = FF, this._markMeshesAsLightDirty())
        }
        get includedOnlyMeshes() {
          return this._includedOnlyMeshes
        }
        set includedOnlyMeshes(FF) {
          this._includedOnlyMeshes = FF, this._hookArrayForIncludedOnly(FF)
        }
        get excludedMeshes() {
          return this._excludedMeshes
        }
        set excludedMeshes(FF) {
          this._excludedMeshes = FF, this._hookArrayForExcluded(FF)
        }
        get excludeWithLayerMask() {
          return this._excludeWithLayerMask
        }
        set excludeWithLayerMask(FF) {
          this._excludeWithLayerMask = FF, this._resyncMeshes()
        }
        get includeOnlyWithLayerMask() {
          return this._includeOnlyWithLayerMask
        }
        set includeOnlyWithLayerMask(FF) {
          this._includeOnlyWithLayerMask = FF, this._resyncMeshes()
        }
        get lightmapMode() {
          return this._lightmapMode
        }
        set lightmapMode(FF) {
          this._lightmapMode !== FF && (this._lightmapMode = FF, this._markMeshesAsLightDirty())
        }
        getViewMatrix(FF) {
          return null
        }
        getProjectionMatrix(FF, WF) {
          return null
        }
        constructor(SF, AF, uF) {
          super(SF, AF, !1), this.diffuse = ((0, CF.k)(this, LF), (0, CF.k)(this, mW, new hF.e(1, 1, 1))), this.specular = ((0, CF.k)(this, OF), (0, CF.k)(this, xW, new hF.e(1, 1, 1))), this.falloffType = ((0, CF.k)(this, ZF), (0, CF.k)(this, oF, FF.FALLOFF_DEFAULT)), this.intensity = ((0, CF.k)(this, YF), (0, CF.k)(this, MF, 1)), this._range = ((0, CF.k)(this, cW), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = FF.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, CF.k)(this, GF, void 0), WF.set(this, ((0, CF.k)(this, zW), (0, CF.k)(this, IF, 0))), this._shadowEnabled = ((0, CF.k)(this, fF), (0, CF.k)(this, yW, !0)), this._includedOnlyMeshes = (0, CF.k)(this, sF), this._excludeWithLayerMask = (0, CF.k)(this, nF, 0), this._includeOnlyWithLayerMask = ((0, CF.k)(this, HF), (0, CF.k)(this, KF, 0)), this._lightmapMode = ((0, CF.k)(this, wF), (0, CF.k)(this, XF, 0)), this._shadowGenerators = ((0, CF.k)(this, UF), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, uF || this.OWF().addLight(this), this._uniformBuffer = new dF.c(this.OWF().sC(), void 0, void 0, SF), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], uF || this._resyncMeshes()
        }
        transferTexturesToEffect(FF, WF) {
          return this
        }
        _bindLight(FF, WF, SF, CF) {
          let AF = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const uF = FF.toString();
          let bW = !1;
          if (this._uniformBuffer.bindToEffect(SF, "Light" + uF), this._renderId !== WF.getRenderId() || this._lastUseSpecular !== CF || !this._uniformBuffer.useUbo) {
            this._renderId = WF.getRenderId(), this._lastUseSpecular = CF;
            const FF = this.getScaledIntensity();
            this.transferToEffect(SF, uF), this.diffuse.scaleToRef(FF, hF.l.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", hF.l.Color3[0], this.range, uF), CF && (this.specular.scaleToRef(FF, hF.l.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", hF.l.Color3[1], this.radius, uF)), bW = !0
          }
          if (this.transferTexturesToEffect(SF, uF), WF.shadowsEnabled && this.shadowEnabled && AF) {
            const FF = this.getShadowGenerator(WF.activeCamera) ?? this.getShadowGenerator();
            FF && (FF.bindShadowLight(uF, SF), bW = !0)
          }
          bW ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(FF) {
          let WF = "Name: " + this.name;
          if (WF += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let SF = 0; SF < this.animations.length; SF++) WF += ", animation[0]: " + this.animations[SF].toString(FF);
          return WF
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.ZdF() || this._resyncMeshes()
        }
        MWF(FF) {
          super.MWF(FF), this._resyncMeshes()
        }
        getShadowGenerator() {
          let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(FF) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return uF.r.Zero()
        }
        canAffectMesh(FF) {
          return !FF || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(FF)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(FF)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & FF.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & FF.layerMask)))
        }
        dispose(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const FF = this._shadowGenerators.values();
            for (let WF = FF.next(); !0 !== WF.done; WF = FF.next()) {
              WF.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.OWF().stopAnimation(this), this._parentContainer) {
            const FF = this._parentContainer.lights.indexOf(this);
            FF > -1 && this._parentContainer.lights.splice(FF, 1), this._parentContainer = null
          }
          for (const SF of this.OWF().meshes) SF._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.OWF().removeLight(this), super.dispose(FF, WF)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(WF) {
          let SF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const CF = FF.GetConstructorFromName(this.getTypeID(), WF, this.OWF());
          if (!CF) return null;
          const AF = iW.e.Clone(CF, this);
          return WF && (AF.name = WF), SF && (AF.parent = SF), AF.MWF(this.isEnabled()), this.onClonedObservable.notifyObservers(AF), AF
        }
        serialize() {
          const FF = iW.e.Serialize(this);
          if (FF.uniqueId = this.uniqueId, FF.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(FF), this.excludedMeshes.length > 0) {
            FF.excludedMeshesIds = [];
            for (const WF of this.excludedMeshes) FF.excludedMeshesIds.push(WF.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            FF.includedOnlyMeshesIds = [];
            for (const WF of this.includedOnlyMeshes) FF.includedOnlyMeshesIds.push(WF.id)
          }
          return iW.e.AppendSerializedAnimations(this, FF), FF.Bu = this.serializeAnimationRanges(), FF.isEnabled = this.isEnabled(), FF
        }
        static GetConstructorFromName(FF, WF, SF) {
          const CF = bW.e.Construct("Light_Type_" + FF, WF, SF);
          return CF || null
        }
        static Parse(WF, SF) {
          let CF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const AF = FF.GetConstructorFromName(WF.type, WF.name, SF);
          if (!AF) return null;
          const uF = iW.e.Parse(AF, WF, SF, CF);
          if (WF.excludedMeshesIds && (uF._excludedMeshesIds = WF.excludedMeshesIds), WF.includedOnlyMeshesIds && (uF._includedOnlyMeshesIds = WF.includedOnlyMeshesIds), void 0 !== WF.parentId && (uF._waitingParentId = WF.parentId), void 0 !== WF.parentInstanceIndex && (uF._waitingParentInstanceIndex = WF.parentInstanceIndex), void 0 !== WF.falloffType && (uF.falloffType = WF.falloffType), void 0 !== WF.lightmapMode && (uF.lightmapMode = WF.lightmapMode), WF.animations) {
            for (let FF = 0; FF < WF.animations.length; FF++) {
              const SF = WF.animations[FF],
                CF = (0, PF.c)("BABYLON.Animation");
              CF && uF.animations.push(CF.Parse(SF))
            }
            bW.e.ParseAnimationRanges(uF, WF, SF)
          }
          return WF.autoAnimate && SF.beginAnimation(uF, WF.autoAnimateFrom, WF.autoAnimateTo, WF.autoAnimateLoop, WF.autoAnimateSpeed || 1), void 0 !== WF.isEnabled && uF.MWF(WF.isEnabled), uF._onParsed(WF, SF, CF), uF
        }
        _onParsed(FF, WF) {}
        _hookArrayForExcluded(FF) {
          var WF = this;
          const SF = FF.push;
          FF.push = function() {
            for (var CF = arguments.length, AF = new Array(CF), uF = 0; uF < CF; uF++) AF[uF] = arguments[uF];
            const hF = SF.apply(FF, AF);
            if (WF._clusteredContainer) return hF;
            for (const FF of AF) FF._resyncLightSource(WF);
            return hF
          };
          const CF = FF.splice;
          FF.splice = (WF, SF) => {
            const AF = CF.call(FF, WF, SF ?? FF.length);
            if (this._clusteredContainer) return AF;
            for (const FF of AF) FF._resyncLightSource(this);
            return AF
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(FF) {
          var WF = this;
          const SF = FF.push;
          FF.push = function() {
            for (var CF = arguments.length, AF = new Array(CF), uF = 0; uF < CF; uF++) AF[uF] = arguments[uF];
            const hF = SF.apply(FF, AF);
            return WF._resyncMeshes(), hF
          };
          const CF = FF.splice;
          FF.splice = (WF, SF) => {
            const AF = CF.call(FF, WF, SF ?? FF.length);
            return this._resyncMeshes(), AF
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const FF of this.OWF().meshes) FF._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const FF of this.OWF().meshes) - 1 !== FF.lightSources.indexOf(this) && FF._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.OWF().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let WF = 0;
          const SF = this.getTypeID();
          let CF = this.intensityMode;
          switch (CF === FF.INTENSITYMODE_AUTOMATIC && (CF = SF === FF.LIGHTTYPEID_DIRECTIONALLIGHT ? FF.INTENSITYMODE_ILLUMINANCE : FF.INTENSITYMODE_LUMINOUSINTENSITY), SF) {
            case FF.LIGHTTYPEID_POINTLIGHT:
            case FF.LIGHTTYPEID_SPOTLIGHT:
              switch (CF) {
                case FF.INTENSITYMODE_LUMINOUSPOWER:
                  WF = 1 / (4 * Math.PI);
                  break;
                case FF.INTENSITYMODE_LUMINOUSINTENSITY:
                  WF = 1;
                  break;
                case FF.INTENSITYMODE_LUMINANCE:
                  WF = this.radius * this.radius
              }
              break;
            case FF.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (CF) {
                case FF.INTENSITYMODE_ILLUMINANCE:
                  WF = 1;
                  break;
                case FF.INTENSITYMODE_LUMINANCE: {
                  let FF = this.radius;
                  FF = Math.max(FF, .001);
                  WF = 2 * Math.PI * (1 - Math.cos(FF));
                  break
                }
              }
              break;
            case FF.LIGHTTYPEID_HEMISPHERICLIGHT:
            case FF.LIGHTTYPEID_RECT_AREALIGHT:
              WF = 1
          }
          return WF
        }
        _reorderLightsInScene() {
          const FF = this.OWF();
          0 != this._renderPriority && (FF.requireLightSorting = !0), this.OWF().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, WF = new WeakMap, (() => {
        const WF = "function" === typeof Symbol && Symbol.metadata ? Object.create(DF[Symbol.metadata] ?? null) : void 0;
        SF = [(0, AF.o)()], eF = [(0, AF.o)()], EF = [(0, AF.H)()], QF = [(0, AF.H)()], rW = [(0, AF.H)()], gW = [(0, AF.H)()], tW = [(0, AF.H)()], TF = [(0, AF.H)()], aW = [(0, AF.i)("_reorderLightsInScene")], kW = [(0, AF.H)("shadowEnabled")], qW = [(0, AF.H)("excludeWithLayerMask")], VF = [(0, AF.H)("includeOnlyWithLayerMask")], NF = [(0, AF.H)("lightmapMode")], (0, CF.j)(FF, null, rW, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: FF => "range" in FF,
            get: FF => FF.range
          },
          metadata: WF
        }, null, LF), (0, CF.j)(FF, null, gW, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: FF => "intensityMode" in FF,
            get: FF => FF.intensityMode
          },
          metadata: WF
        }, null, LF), (0, CF.j)(FF, null, tW, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: FF => "radius" in FF,
            get: FF => FF.radius
          },
          metadata: WF
        }, null, LF), (0, CF.j)(FF, null, aW, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: FF => "renderPriority" in FF,
            get: FF => FF.renderPriority,
            set: (FF, WF) => {
              FF.renderPriority = WF
            }
          },
          metadata: WF
        }, IF, fF), (0, CF.j)(null, null, SF, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: FF => "diffuse" in FF,
            get: FF => FF.diffuse,
            set: (FF, WF) => {
              FF.diffuse = WF
            }
          },
          metadata: WF
        }, mW, OF), (0, CF.j)(null, null, eF, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: FF => "specular" in FF,
            get: FF => FF.specular,
            set: (FF, WF) => {
              FF.specular = WF
            }
          },
          metadata: WF
        }, xW, ZF), (0, CF.j)(null, null, EF, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: FF => "falloffType" in FF,
            get: FF => FF.falloffType,
            set: (FF, WF) => {
              FF.falloffType = WF
            }
          },
          metadata: WF
        }, oF, YF), (0, CF.j)(null, null, QF, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: FF => "intensity" in FF,
            get: FF => FF.intensity,
            set: (FF, WF) => {
              FF.intensity = WF
            }
          },
          metadata: WF
        }, MF, cW), (0, CF.j)(null, null, TF, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: FF => "_renderPriority" in FF,
            get: FF => FF._renderPriority,
            set: (FF, WF) => {
              FF._renderPriority = WF
            }
          },
          metadata: WF
        }, GF, zW), (0, CF.j)(null, null, kW, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: FF => "_shadowEnabled" in FF,
            get: FF => FF._shadowEnabled,
            set: (FF, WF) => {
              FF._shadowEnabled = WF
            }
          },
          metadata: WF
        }, yW, sF), (0, CF.j)(null, null, qW, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: FF => "_excludeWithLayerMask" in FF,
            get: FF => FF._excludeWithLayerMask,
            set: (FF, WF) => {
              FF._excludeWithLayerMask = WF
            }
          },
          metadata: WF
        }, nF, HF), (0, CF.j)(null, null, VF, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: FF => "_includeOnlyWithLayerMask" in FF,
            get: FF => FF._includeOnlyWithLayerMask,
            set: (FF, WF) => {
              FF._includeOnlyWithLayerMask = WF
            }
          },
          metadata: WF
        }, KF, wF), (0, CF.j)(null, null, NF, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: FF => "_lightmapMode" in FF,
            get: FF => FF._lightmapMode,
            set: (FF, WF) => {
              FF._lightmapMode = WF
            }
          },
          metadata: WF
        }, XF, UF), WF && Object.defineProperty(FF, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: WF
        })
      })(), FF.FALLOFF_DEFAULT = RF.e.FALLOFF_DEFAULT, FF.FALLOFF_PHYSICAL = RF.e.FALLOFF_PHYSICAL, FF.FALLOFF_GLTF = RF.e.FALLOFF_GLTF, FF.FALLOFF_STANDARD = RF.e.FALLOFF_STANDARD, FF.LIGHTMAP_DEFAULT = RF.e.LIGHTMAP_DEFAULT, FF.LIGHTMAP_SPECULAR = RF.e.LIGHTMAP_SPECULAR, FF.LIGHTMAP_SHADOWSONLY = RF.e.LIGHTMAP_SHADOWSONLY, FF.INTENSITYMODE_AUTOMATIC = RF.e.INTENSITYMODE_AUTOMATIC, FF.INTENSITYMODE_LUMINOUSPOWER = RF.e.INTENSITYMODE_LUMINOUSPOWER, FF.INTENSITYMODE_LUMINOUSINTENSITY = RF.e.INTENSITYMODE_LUMINOUSINTENSITY, FF.INTENSITYMODE_ILLUMINANCE = RF.e.INTENSITYMODE_ILLUMINANCE, FF.INTENSITYMODE_LUMINANCE = RF.e.INTENSITYMODE_LUMINANCE, FF.LIGHTTYPEID_POINTLIGHT = RF.e.LIGHTTYPEID_POINTLIGHT, FF.LIGHTTYPEID_DIRECTIONALLIGHT = RF.e.LIGHTTYPEID_DIRECTIONALLIGHT, FF.LIGHTTYPEID_SPOTLIGHT = RF.e.LIGHTTYPEID_SPOTLIGHT, FF.LIGHTTYPEID_HEMISPHERICLIGHT = RF.e.LIGHTTYPEID_HEMISPHERICLIGHT, FF.LIGHTTYPEID_RECT_AREALIGHT = RF.e.LIGHTTYPEID_RECT_AREALIGHT, FF
    })()
  },
  38187: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => iW
    });
    var CF = SF(37972),
      AF = SF(35623),
      uF = SF(37974),
      hF = SF(35647),
      bW = SF(35639),
      dF = SF(37855),
      PF = SF(37994);
    class RF {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new hF.b, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new hF.b, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let iW = (() => {
      var FF;
      let WF, SF, iW, eF, EF, QF = [],
        rW = [],
        gW = [],
        tW = [],
        TF = [],
        aW = [],
        kW = [],
        qW = [],
        VF = [],
        NF = [];
      return FF = class {
        static AddNodeConstructor(FF, WF) {
          this._NodeConstructors[FF] = WF
        }
        static Construct(FF, WF, SF, CF) {
          const AF = this._NodeConstructors[FF];
          return AF ? AF(WF, SF, CF) : null
        }
        set accessibilityTag(FF) {
          this._accessibilityTag = FF, this.onAccessibilityTagChangedObservable.notifyObservers(FF)
        }
        get accessibilityTag() {
          return this._accessibilityTag
        }
        get doNotSerialize() {
          return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
        }
        set doNotSerialize(FF) {
          this._nodeDataStorage._doNotSerialize = FF
        }
        ZdF() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(FF) {
          if (this._parentNode === FF) return;
          const WF = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const WF = this._parentNode._children.indexOf(this); - 1 !== WF && this._parentNode._children.splice(WF, 1), FF || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = FF, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), WF || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
        }
        get parent() {
          return this._parentNode
        }
        get inheritVisibility() {
          return this._nodeDataStorage._inheritVisibility
        }
        set inheritVisibility(FF) {
          this._nodeDataStorage._inheritVisibility = FF
        }
        get isVisible() {
          return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
        }
        set isVisible(FF) {
          this._nodeDataStorage._isVisible = FF
        }
        _serializeAsParent(FF) {
          FF.parentId = this.uniqueId
        }
        _addToSceneRootNodes() {
          -1 === this._nodeDataStorage._sceneRootNodesIndex && (this._nodeDataStorage._sceneRootNodesIndex = this._scene.rootNodes.length, this._scene.rootNodes.push(this))
        }
        _removeFromSceneRootNodes() {
          if (-1 !== this._nodeDataStorage._sceneRootNodesIndex) {
            const FF = this._scene.rootNodes,
              WF = FF.length - 1;
            FF[this._nodeDataStorage._sceneRootNodesIndex] = FF[WF], FF[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
          }
        }
        get animationPropertiesOverride() {
          return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
        }
        set animationPropertiesOverride(FF) {
          this._animationPropertiesOverride = FF
        }
        getClassName() {
          return "Node"
        }
        set onDispose(FF) {
          this._onDisposeObserver && this.xSF.remove(this._onDisposeObserver), this._onDisposeObserver = this.xSF.add(FF)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var FF;
          return (FF = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (FF._onEffectiveEnabledStateChangedObservable = new hF.b)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            SF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new RF, this.name = (0, CF.k)(this, QF, void 0), this.id = ((0, CF.k)(this, rW), (0, CF.k)(this, gW, void 0)), this.uniqueId = ((0, CF.k)(this, tW), (0, CF.k)(this, TF, void 0)), this.state = ((0, CF.k)(this, aW), (0, CF.k)(this, kW, "")), this.metadata = ((0, CF.k)(this, qW), (0, CF.k)(this, VF, null)), this._internalMetadata = (0, CF.k)(this, NF), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new hF.b, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = AF.b.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.xSF = new hF.b, this._onDisposeObserver = null, this._behaviors = new Array, this.name = FF, this.id = FF, this._scene = WF || bW.e.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), SF && this._addToSceneRootNodes()
        }
        OWF() {
          return this._scene
        }
        sC() {
          return this._scene.sC()
        }
        addBehavior(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(FF) || (FF.init(), this._scene.isLoading && !WF ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(FF) && FF.attach(this)
          })) : FF.attach(this), this._behaviors.push(FF)), this
        }
        removeBehavior(FF) {
          const WF = this._behaviors.indexOf(FF);
          return -1 === WF || (this._behaviors.splice(WF, 1), FF.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(FF) {
          for (const WF of this._behaviors)
            if (WF.name === FF) return WF;
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
        updateCache(FF) {
          !FF && this.isSynchronized() || this._updateCache()
        }
        _getActionManagerForTrigger(FF) {
          return this.parent ? this.parent._getActionManagerForTrigger(FF, !1) : null
        }
        _updateCache(FF) {}
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
        XbF(FF) {
          return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this
        }
        isEnabled() {
          return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled
        }
        _hasEffectiveEnabledStateObservers() {
          const FF = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
          return !!FF && FF.hasObservers()
        }
        _syncParentEnabledState() {
          const FF = this._hasEffectiveEnabledStateObservers(),
            WF = FF ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const SF of this._children) SF._syncParentEnabledState();
          if (FF) {
            const FF = this.isEnabled();
            FF !== WF && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(FF)
          }
        }
        MWF(FF) {
          if (this._nodeDataStorage._isEnabled === FF) return;
          const WF = this._hasEffectiveEnabledStateObservers(),
            SF = WF ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = FF, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(FF), WF) {
            const FF = this.isEnabled();
            FF !== SF && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(FF)
          }
        }
        isDescendantOf(FF) {
          return !!this.parent && (this.parent === FF || this.parent.isDescendantOf(FF))
        }
        _getDescendants(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            SF = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let CF = 0; CF < this._children.length; CF++) {
              const AF = this._children[CF];
              SF && !SF(AF) || FF.push(AF), WF || AF._getDescendants(FF, !1, SF)
            }
        }
        getDescendants(FF, WF) {
          const SF = [];
          return this._getDescendants(SF, FF, WF), SF
        }
        getChildMeshes(FF, WF) {
          const SF = [];
          return this._getDescendants(SF, FF, (FF => (!WF || WF(FF)) && void 0 !== FF.cullingStrategy)), SF
        }
        getChildren(FF) {
          let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(WF, FF)
        }
        _setReady(FF) {
          FF !== this._nodeDataStorage._isReady && (FF ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(FF) {
          for (let WF = 0; WF < this.animations.length; WF++) {
            const SF = this.animations[WF];
            if (SF.name === FF) return SF
          }
          return null
        }
        createAnimationRange(WF, SF, CF) {
          if (!this._ranges[WF]) {
            this._ranges[WF] = FF._AnimationRangeFactory(WF, SF, CF);
            for (let FF = 0, AF = this.animations.length; FF < AF; FF++) this.animations[FF] && this.animations[FF].createRange(WF, SF, CF)
          }
        }
        deleteAnimationRange(FF) {
          let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let SF = 0, CF = this.animations.length; SF < CF; SF++) this.animations[SF] && this.animations[SF].deleteRange(FF, WF);
          this._ranges[FF] = null
        }
        getAnimationRange(FF) {
          return this._ranges[FF] || null
        }
        clone(WF, SF, CF) {
          const AF = PF.e.Clone((() => new FF(WF, this.OWF())), this);
          if (SF && (AF.parent = SF), !CF) {
            const FF = this.getDescendants(!0);
            for (let SF = 0; SF < FF.length; SF++) {
              const CF = FF[SF];
              CF.clone(WF + "." + CF.name, AF)
            }
          }
          return AF
        }
        getAnimationRanges() {
          const FF = [];
          let WF;
          for (WF in this._ranges) FF.push(this._ranges[WF]);
          return FF
        }
        beginAnimation(FF, WF, SF, CF) {
          const AF = this.getAnimationRange(FF);
          return AF ? this._scene.beginAnimation(this, AF.from, AF.to, WF, SF, CF) : null
        }
        serializeAnimationRanges() {
          const FF = [];
          for (const WF in this._ranges) {
            const SF = this._ranges[WF];
            if (!SF) continue;
            const CF = {};
            CF.name = WF, CF.from = SF.from, CF.to = SF.to, FF.push(CF)
          }
          return FF
        }
        computeWorldMatrix(FF) {
          return this._worldMatrix || (this._worldMatrix = AF.b.Identity()), this._worldMatrix
        }
        dispose(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !FF) {
            const SF = this.getDescendants(!0);
            for (const CF of SF) CF.dispose(FF, WF)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.xSF.notifyObservers(this), this.xSF.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const SF of this._behaviors) SF.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(FF, WF, SF) {
          if (WF.Bu)
            for (let CF = 0; CF < WF.Bu.length; CF++) {
              const SF = WF.Bu[CF];
              FF.createAnimationRange(SF.name, SF.from, SF.to)
            }
        }
        getHierarchyBoundingVectors() {
          let FF, WF, SF = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            CF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.OWF().incrementRenderId(), this.computeWorldMatrix(!0);
          const uF = this;
          if (uF.JWF && uF.Om) {
            const SF = uF.JWF();
            FF = SF.boundingBox.minimumWorld.clone(), WF = SF.boundingBox.maximumWorld.clone()
          } else FF = new AF.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), WF = new AF.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (SF) {
            const SF = this.getDescendants(!1);
            for (const uF of SF) {
              const SF = uF;
              if (SF.computeWorldMatrix(!0), CF && !CF(SF)) continue;
              if (!SF.JWF || 0 === SF.getTotalVertices()) continue;
              const hF = SF.JWF().boundingBox,
                bW = hF.minimumWorld,
                dF = hF.maximumWorld;
              AF.r.CheckExtends(bW, FF, WF), AF.r.CheckExtends(dF, FF, WF)
            }
          }
          return {
            min: FF,
            max: WF
          }
        }
      }, (() => {
        const AF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        WF = [(0, uF.H)()], SF = [(0, uF.H)()], iW = [(0, uF.H)()], eF = [(0, uF.H)()], EF = [(0, uF.H)()], (0, CF.j)(null, null, WF, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: FF => "name" in FF,
            get: FF => FF.name,
            set: (FF, WF) => {
              FF.name = WF
            }
          },
          metadata: AF
        }, QF, rW), (0, CF.j)(null, null, SF, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: FF => "id" in FF,
            get: FF => FF.id,
            set: (FF, WF) => {
              FF.id = WF
            }
          },
          metadata: AF
        }, gW, tW), (0, CF.j)(null, null, iW, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: FF => "uniqueId" in FF,
            get: FF => FF.uniqueId,
            set: (FF, WF) => {
              FF.uniqueId = WF
            }
          },
          metadata: AF
        }, TF, aW), (0, CF.j)(null, null, eF, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: FF => "state" in FF,
            get: FF => FF.state,
            set: (FF, WF) => {
              FF.state = WF
            }
          },
          metadata: AF
        }, kW, qW), (0, CF.j)(null, null, EF, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: FF => "metadata" in FF,
            get: FF => FF.metadata,
            set: (FF, WF) => {
              FF.metadata = WF
            }
          },
          metadata: AF
        }, VF, NF), AF && Object.defineProperty(FF, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: AF
        })
      })(), FF._AnimationRangeFactory = (FF, WF, SF) => {
        throw (0, dF.l)("AnimationRange")
      }, FF._NodeConstructors = {}, FF
    })()
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);