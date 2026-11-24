export const id = 263;
export const ids = [263];
export const modules = {
  40310: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => zB
    });
    var TB = ZB(40061),
      JB = ZB(40065),
      oB = ZB(37120),
      GB = ZB(37311),
      vB = ZB(40272),
      kB = ZB(40177),
      cB = ZB(37170),
      nB = ZB(40245),
      hB = ZB(40085);
    let zB = (() => {
      var BB, IB;
      let ZB, zB, FB, NB, gB, qB, yB, UB, WB, dB, CB, QB, sB, wB = vB.e,
        OB = [],
        YB = [],
        iB = [],
        pB = [],
        aB = [],
        HB = [],
        MB = [],
        jB = [],
        PB = [],
        RB = [],
        rB = [],
        mB = [],
        XB = [],
        LB = [],
        eB = [],
        uB = [],
        fB = [],
        lB = [],
        AB = [],
        tB = [],
        bB = [];
      return BB = class extends wB {
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
          return (0, TB.b)(this, IB, "f")
        }
        set renderPriority(BB) {
          (0, TB.f)(this, IB, BB, "f")
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
        getProjectionMatrix(BB, IB) {
          return null
        }
        constructor(ZB, JB, oB) {
          super(ZB, JB, !1), this.diffuse = ((0, TB.l)(this, OB), (0, TB.l)(this, YB, new GB.c(1, 1, 1))), this.specular = ((0, TB.l)(this, iB), (0, TB.l)(this, pB, new GB.c(1, 1, 1))), this.falloffType = ((0, TB.l)(this, aB), (0, TB.l)(this, HB, BB.FALLOFF_DEFAULT)), this.intensity = ((0, TB.l)(this, MB), (0, TB.l)(this, jB, 1)), this._range = ((0, TB.l)(this, PB), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = BB.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, TB.l)(this, RB, void 0), IB.set(this, ((0, TB.l)(this, rB), (0, TB.l)(this, mB, 0))), this._shadowEnabled = ((0, TB.l)(this, XB), (0, TB.l)(this, LB, !0)), this._includedOnlyMeshes = (0, TB.l)(this, eB), this._excludeWithLayerMask = (0, TB.l)(this, uB, 0), this._includeOnlyWithLayerMask = ((0, TB.l)(this, fB), (0, TB.l)(this, lB, 0)), this._lightmapMode = ((0, TB.l)(this, AB), (0, TB.l)(this, tB, 0)), this._shadowGenerators = ((0, TB.l)(this, bB), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, oB || this.JR().addLight(this), this._uniformBuffer = new kB.d(this.JR().PN(), void 0, void 0, ZB), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], oB || this._resyncMeshes()
        }
        transferTexturesToEffect(BB, IB) {
          return this
        }
        _bindLight(BB, IB, ZB, TB) {
          let JB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const oB = BB.toString();
          let vB = !1;
          if (this._uniformBuffer.bindToEffect(ZB, "Light" + oB), this._renderId !== IB.getRenderId() || this._lastUseSpecular !== TB || !this._uniformBuffer.useUbo) {
            this._renderId = IB.getRenderId(), this._lastUseSpecular = TB;
            const BB = this.getScaledIntensity();
            this.transferToEffect(ZB, oB), this.diffuse.scaleToRef(BB, GB.k.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", GB.k.Color3[0], this.range, oB), TB && (this.specular.scaleToRef(BB, GB.k.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", GB.k.Color3[1], this.radius, oB)), vB = !0
          }
          if (this.transferTexturesToEffect(ZB, oB), IB.shadowsEnabled && this.shadowEnabled && JB) {
            const BB = this.getShadowGenerator(IB.activeCamera) ?? this.getShadowGenerator();
            BB && (BB.bindShadowLight(oB, ZB), vB = !0)
          }
          vB ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(BB) {
          let IB = "Name: " + this.name;
          if (IB += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let ZB = 0; ZB < this.animations.length; ZB++) IB += ", animation[0]: " + this.animations[ZB].toString(BB);
          return IB
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.mC() || this._resyncMeshes()
        }
        qY(BB) {
          super.qY(BB), this._resyncMeshes()
        }
        getShadowGenerator() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(BB) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return oB.s.Zero()
        }
        canAffectMesh(BB) {
          return !BB || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(BB)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(BB)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & BB.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & BB.layerMask)))
        }
        dispose(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const BB = this._shadowGenerators.values();
            for (let IB = BB.next(); !0 !== IB.done; IB = BB.next()) {
              IB.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.JR().stopAnimation(this), this._parentContainer) {
            const BB = this._parentContainer.lights.indexOf(this);
            BB > -1 && this._parentContainer.lights.splice(BB, 1), this._parentContainer = null
          }
          for (const ZB of this.JR().meshes) ZB._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.JR().removeLight(this), super.dispose(BB, IB)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(IB) {
          let ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const TB = BB.GetConstructorFromName(this.getTypeID(), IB, this.JR());
          if (!TB) return null;
          const JB = hB.b.Clone(TB, this);
          return IB && (JB.name = IB), ZB && (JB.parent = ZB), JB.qY(this.isEnabled()), this.onClonedObservable.notifyObservers(JB), JB
        }
        serialize() {
          const BB = hB.b.Serialize(this);
          if (BB.uniqueId = this.uniqueId, BB.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(BB), this.excludedMeshes.length > 0) {
            BB.excludedMeshesIds = [];
            for (const IB of this.excludedMeshes) BB.excludedMeshesIds.push(IB.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            BB.includedOnlyMeshesIds = [];
            for (const IB of this.includedOnlyMeshes) BB.includedOnlyMeshesIds.push(IB.id)
          }
          return hB.b.AppendSerializedAnimations(this, BB), BB.vq = this.serializeAnimationRanges(), BB.isEnabled = this.isEnabled(), BB
        }
        static GetConstructorFromName(BB, IB, ZB) {
          const TB = vB.e.Construct("Light_Type_" + BB, IB, ZB);
          return TB || null
        }
        static Parse(IB, ZB) {
          let TB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const JB = BB.GetConstructorFromName(IB.type, IB.name, ZB);
          if (!JB) return null;
          const oB = hB.b.Parse(JB, IB, ZB, TB);
          if (IB.excludedMeshesIds && (oB._excludedMeshesIds = IB.excludedMeshesIds), IB.includedOnlyMeshesIds && (oB._includedOnlyMeshesIds = IB.includedOnlyMeshesIds), void 0 !== IB.parentId && (oB._waitingParentId = IB.parentId), void 0 !== IB.parentInstanceIndex && (oB._waitingParentInstanceIndex = IB.parentInstanceIndex), void 0 !== IB.falloffType && (oB.falloffType = IB.falloffType), void 0 !== IB.lightmapMode && (oB.lightmapMode = IB.lightmapMode), IB.animations) {
            for (let BB = 0; BB < IB.animations.length; BB++) {
              const ZB = IB.animations[BB],
                TB = (0, cB.e)("BABYLON.Animation");
              TB && oB.animations.push(TB.Parse(ZB))
            }
            vB.e.ParseAnimationRanges(oB, IB, ZB)
          }
          return IB.autoAnimate && ZB.beginAnimation(oB, IB.autoAnimateFrom, IB.autoAnimateTo, IB.autoAnimateLoop, IB.autoAnimateSpeed || 1), void 0 !== IB.isEnabled && oB.qY(IB.isEnabled), oB._onParsed(IB, ZB, TB), oB
        }
        _onParsed(BB, IB) {}
        _hookArrayForExcluded(BB) {
          var IB = this;
          const ZB = BB.push;
          BB.push = function() {
            for (var TB = arguments.length, JB = new Array(TB), oB = 0; oB < TB; oB++) JB[oB] = arguments[oB];
            const GB = ZB.apply(BB, JB);
            if (IB._clusteredContainer) return GB;
            for (const BB of JB) BB._resyncLightSource(IB);
            return GB
          };
          const TB = BB.splice;
          BB.splice = (IB, ZB) => {
            const JB = TB.call(BB, IB, ZB ?? BB.length);
            if (this._clusteredContainer) return JB;
            for (const BB of JB) BB._resyncLightSource(this);
            return JB
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(BB) {
          var IB = this;
          const ZB = BB.push;
          BB.push = function() {
            for (var TB = arguments.length, JB = new Array(TB), oB = 0; oB < TB; oB++) JB[oB] = arguments[oB];
            const GB = ZB.apply(BB, JB);
            return IB._resyncMeshes(), GB
          };
          const TB = BB.splice;
          BB.splice = (IB, ZB) => {
            const JB = TB.call(BB, IB, ZB ?? BB.length);
            return this._resyncMeshes(), JB
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const BB of this.JR().meshes) BB._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const BB of this.JR().meshes) - 1 !== BB.lightSources.indexOf(this) && BB._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.JR().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let IB = 0;
          const ZB = this.getTypeID();
          let TB = this.intensityMode;
          switch (TB === BB.INTENSITYMODE_AUTOMATIC && (TB = ZB === BB.LIGHTTYPEID_DIRECTIONALLIGHT ? BB.INTENSITYMODE_ILLUMINANCE : BB.INTENSITYMODE_LUMINOUSINTENSITY), ZB) {
            case BB.LIGHTTYPEID_POINTLIGHT:
            case BB.LIGHTTYPEID_SPOTLIGHT:
              switch (TB) {
                case BB.INTENSITYMODE_LUMINOUSPOWER:
                  IB = 1 / (4 * Math.PI);
                  break;
                case BB.INTENSITYMODE_LUMINOUSINTENSITY:
                  IB = 1;
                  break;
                case BB.INTENSITYMODE_LUMINANCE:
                  IB = this.radius * this.radius
              }
              break;
            case BB.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (TB) {
                case BB.INTENSITYMODE_ILLUMINANCE:
                  IB = 1;
                  break;
                case BB.INTENSITYMODE_LUMINANCE: {
                  let BB = this.radius;
                  BB = Math.max(BB, .001);
                  IB = 2 * Math.PI * (1 - Math.cos(BB));
                  break
                }
              }
              break;
            case BB.LIGHTTYPEID_HEMISPHERICLIGHT:
            case BB.LIGHTTYPEID_RECT_AREALIGHT:
              IB = 1
          }
          return IB
        }
        _reorderLightsInScene() {
          const BB = this.JR();
          0 != this._renderPriority && (BB.requireLightSorting = !0), this.JR().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, IB = new WeakMap, (() => {
        const IB = "function" === typeof Symbol && Symbol.metadata ? Object.create(wB[Symbol.metadata] ?? null) : void 0;
        ZB = [(0, JB.l)()], zB = [(0, JB.l)()], FB = [(0, JB.C)()], NB = [(0, JB.C)()], gB = [(0, JB.C)()], qB = [(0, JB.C)()], yB = [(0, JB.C)()], UB = [(0, JB.C)()], WB = [(0, JB.e)("_reorderLightsInScene")], dB = [(0, JB.C)("shadowEnabled")], CB = [(0, JB.C)("excludeWithLayerMask")], QB = [(0, JB.C)("includeOnlyWithLayerMask")], sB = [(0, JB.C)("lightmapMode")], (0, TB.j)(BB, null, gB, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: BB => "range" in BB,
            get: BB => BB.range
          },
          metadata: IB
        }, null, OB), (0, TB.j)(BB, null, qB, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "intensityMode" in BB,
            get: BB => BB.intensityMode
          },
          metadata: IB
        }, null, OB), (0, TB.j)(BB, null, yB, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: BB => "radius" in BB,
            get: BB => BB.radius
          },
          metadata: IB
        }, null, OB), (0, TB.j)(BB, null, WB, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: BB => "renderPriority" in BB,
            get: BB => BB.renderPriority,
            set: (BB, IB) => {
              BB.renderPriority = IB
            }
          },
          metadata: IB
        }, mB, XB), (0, TB.j)(null, null, ZB, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: BB => "diffuse" in BB,
            get: BB => BB.diffuse,
            set: (BB, IB) => {
              BB.diffuse = IB
            }
          },
          metadata: IB
        }, YB, iB), (0, TB.j)(null, null, zB, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: BB => "specular" in BB,
            get: BB => BB.specular,
            set: (BB, IB) => {
              BB.specular = IB
            }
          },
          metadata: IB
        }, pB, aB), (0, TB.j)(null, null, FB, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: BB => "falloffType" in BB,
            get: BB => BB.falloffType,
            set: (BB, IB) => {
              BB.falloffType = IB
            }
          },
          metadata: IB
        }, HB, MB), (0, TB.j)(null, null, NB, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "intensity" in BB,
            get: BB => BB.intensity,
            set: (BB, IB) => {
              BB.intensity = IB
            }
          },
          metadata: IB
        }, jB, PB), (0, TB.j)(null, null, UB, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: BB => "_renderPriority" in BB,
            get: BB => BB._renderPriority,
            set: (BB, IB) => {
              BB._renderPriority = IB
            }
          },
          metadata: IB
        }, RB, rB), (0, TB.j)(null, null, dB, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "_shadowEnabled" in BB,
            get: BB => BB._shadowEnabled,
            set: (BB, IB) => {
              BB._shadowEnabled = IB
            }
          },
          metadata: IB
        }, LB, eB), (0, TB.j)(null, null, CB, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: BB => "_excludeWithLayerMask" in BB,
            get: BB => BB._excludeWithLayerMask,
            set: (BB, IB) => {
              BB._excludeWithLayerMask = IB
            }
          },
          metadata: IB
        }, uB, fB), (0, TB.j)(null, null, QB, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: BB => "_includeOnlyWithLayerMask" in BB,
            get: BB => BB._includeOnlyWithLayerMask,
            set: (BB, IB) => {
              BB._includeOnlyWithLayerMask = IB
            }
          },
          metadata: IB
        }, lB, AB), (0, TB.j)(null, null, sB, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "_lightmapMode" in BB,
            get: BB => BB._lightmapMode,
            set: (BB, IB) => {
              BB._lightmapMode = IB
            }
          },
          metadata: IB
        }, tB, bB), IB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: IB
        })
      })(), BB.FALLOFF_DEFAULT = nB.d.FALLOFF_DEFAULT, BB.FALLOFF_PHYSICAL = nB.d.FALLOFF_PHYSICAL, BB.FALLOFF_GLTF = nB.d.FALLOFF_GLTF, BB.FALLOFF_STANDARD = nB.d.FALLOFF_STANDARD, BB.LIGHTMAP_DEFAULT = nB.d.LIGHTMAP_DEFAULT, BB.LIGHTMAP_SPECULAR = nB.d.LIGHTMAP_SPECULAR, BB.LIGHTMAP_SHADOWSONLY = nB.d.LIGHTMAP_SHADOWSONLY, BB.INTENSITYMODE_AUTOMATIC = nB.d.INTENSITYMODE_AUTOMATIC, BB.INTENSITYMODE_LUMINOUSPOWER = nB.d.INTENSITYMODE_LUMINOUSPOWER, BB.INTENSITYMODE_LUMINOUSINTENSITY = nB.d.INTENSITYMODE_LUMINOUSINTENSITY, BB.INTENSITYMODE_ILLUMINANCE = nB.d.INTENSITYMODE_ILLUMINANCE, BB.INTENSITYMODE_LUMINANCE = nB.d.INTENSITYMODE_LUMINANCE, BB.LIGHTTYPEID_POINTLIGHT = nB.d.LIGHTTYPEID_POINTLIGHT, BB.LIGHTTYPEID_DIRECTIONALLIGHT = nB.d.LIGHTTYPEID_DIRECTIONALLIGHT, BB.LIGHTTYPEID_SPOTLIGHT = nB.d.LIGHTTYPEID_SPOTLIGHT, BB.LIGHTTYPEID_HEMISPHERICLIGHT = nB.d.LIGHTTYPEID_HEMISPHERICLIGHT, BB.LIGHTTYPEID_RECT_AREALIGHT = nB.d.LIGHTTYPEID_RECT_AREALIGHT, BB
    })()
  },
  40272: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => hB
    });
    var TB = ZB(40061),
      JB = ZB(37120),
      oB = ZB(40065),
      GB = ZB(37153),
      vB = ZB(37147),
      kB = ZB(39931),
      cB = ZB(40085);
    class nB {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new GB.b, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new GB.b, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let hB = (() => {
      var BB;
      let IB, ZB, hB, zB, FB, NB = [],
        gB = [],
        qB = [],
        yB = [],
        UB = [],
        WB = [],
        dB = [],
        CB = [],
        QB = [],
        sB = [];
      return BB = class {
        static AddNodeConstructor(BB, IB) {
          this._NodeConstructors[BB] = IB
        }
        static Construct(BB, IB, ZB, TB) {
          const JB = this._NodeConstructors[BB];
          return JB ? JB(IB, ZB, TB) : null
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
        mC() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(BB) {
          if (this._parentNode === BB) return;
          const IB = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const IB = this._parentNode._children.indexOf(this); - 1 !== IB && this._parentNode._children.splice(IB, 1), BB || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = BB, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), IB || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
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
              IB = BB.length - 1;
            BB[this._nodeDataStorage._sceneRootNodesIndex] = BB[IB], BB[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
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
          this._onDisposeObserver && this.oR.remove(this._onDisposeObserver), this._onDisposeObserver = this.oR.add(BB)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var BB;
          return (BB = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (BB._onEffectiveEnabledStateChangedObservable = new GB.b)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            ZB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new nB, this.name = (0, TB.l)(this, NB, void 0), this.id = ((0, TB.l)(this, gB), (0, TB.l)(this, qB, void 0)), this.uniqueId = ((0, TB.l)(this, yB), (0, TB.l)(this, UB, void 0)), this.state = ((0, TB.l)(this, WB), (0, TB.l)(this, dB, "")), this.metadata = ((0, TB.l)(this, CB), (0, TB.l)(this, QB, null)), this._internalMetadata = (0, TB.l)(this, sB), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new GB.b, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = JB.b.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.oR = new GB.b, this._onDisposeObserver = null, this._behaviors = new Array, this.name = BB, this.id = BB, this._scene = IB || vB.e.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), ZB && this._addToSceneRootNodes()
        }
        JR() {
          return this._scene
        }
        PN() {
          return this._scene.PN()
        }
        addBehavior(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(BB) || (BB.init(), this._scene.isLoading && !IB ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(BB) && BB.attach(this)
          })) : BB.attach(this), this._behaviors.push(BB)), this
        }
        removeBehavior(BB) {
          const IB = this._behaviors.indexOf(BB);
          return -1 === IB || (this._behaviors.splice(IB, 1), BB.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(BB) {
          for (const IB of this._behaviors)
            if (IB.name === BB) return IB;
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
        GZB(BB) {
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
            IB = BB ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const ZB of this._children) ZB._syncParentEnabledState();
          if (BB) {
            const BB = this.isEnabled();
            BB !== IB && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(BB)
          }
        }
        qY(BB) {
          if (this._nodeDataStorage._isEnabled === BB) return;
          const IB = this._hasEffectiveEnabledStateObservers(),
            ZB = IB ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = BB, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(BB), IB) {
            const BB = this.isEnabled();
            BB !== ZB && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(BB)
          }
        }
        isDescendantOf(BB) {
          return !!this.parent && (this.parent === BB || this.parent.isDescendantOf(BB))
        }
        _getDescendants(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            ZB = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let TB = 0; TB < this._children.length; TB++) {
              const JB = this._children[TB];
              ZB && !ZB(JB) || BB.push(JB), IB || JB._getDescendants(BB, !1, ZB)
            }
        }
        getDescendants(BB, IB) {
          const ZB = [];
          return this._getDescendants(ZB, BB, IB), ZB
        }
        getChildMeshes(BB, IB) {
          const ZB = [];
          return this._getDescendants(ZB, BB, (BB => (!IB || IB(BB)) && void 0 !== BB.cullingStrategy)), ZB
        }
        getChildren(BB) {
          let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(IB, BB)
        }
        _setReady(BB) {
          BB !== this._nodeDataStorage._isReady && (BB ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(BB) {
          for (let IB = 0; IB < this.animations.length; IB++) {
            const ZB = this.animations[IB];
            if (ZB.name === BB) return ZB
          }
          return null
        }
        createAnimationRange(IB, ZB, TB) {
          if (!this._ranges[IB]) {
            this._ranges[IB] = BB._AnimationRangeFactory(IB, ZB, TB);
            for (let BB = 0, JB = this.animations.length; BB < JB; BB++) this.animations[BB] && this.animations[BB].createRange(IB, ZB, TB)
          }
        }
        deleteAnimationRange(BB) {
          let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let ZB = 0, TB = this.animations.length; ZB < TB; ZB++) this.animations[ZB] && this.animations[ZB].deleteRange(BB, IB);
          this._ranges[BB] = null
        }
        getAnimationRange(BB) {
          return this._ranges[BB] || null
        }
        clone(IB, ZB, TB) {
          const JB = cB.b.Clone((() => new BB(IB, this.JR())), this);
          if (ZB && (JB.parent = ZB), !TB) {
            const BB = this.getDescendants(!0);
            for (let ZB = 0; ZB < BB.length; ZB++) {
              const TB = BB[ZB];
              TB.clone(IB + "." + TB.name, JB)
            }
          }
          return JB
        }
        getAnimationRanges() {
          const BB = [];
          let IB;
          for (IB in this._ranges) BB.push(this._ranges[IB]);
          return BB
        }
        beginAnimation(BB, IB, ZB, TB) {
          const JB = this.getAnimationRange(BB);
          return JB ? this._scene.beginAnimation(this, JB.from, JB.to, IB, ZB, TB) : null
        }
        serializeAnimationRanges() {
          const BB = [];
          for (const IB in this._ranges) {
            const ZB = this._ranges[IB];
            if (!ZB) continue;
            const TB = {};
            TB.name = IB, TB.from = ZB.from, TB.to = ZB.to, BB.push(TB)
          }
          return BB
        }
        computeWorldMatrix(BB) {
          return this._worldMatrix || (this._worldMatrix = JB.b.Identity()), this._worldMatrix
        }
        dispose(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !BB) {
            const ZB = this.getDescendants(!0);
            for (const TB of ZB) TB.dispose(BB, IB)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.oR.notifyObservers(this), this.oR.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const ZB of this._behaviors) ZB.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(BB, IB, ZB) {
          if (IB.vq)
            for (let TB = 0; TB < IB.vq.length; TB++) {
              const ZB = IB.vq[TB];
              BB.createAnimationRange(ZB.name, ZB.from, ZB.to)
            }
        }
        getHierarchyBoundingVectors() {
          let BB, IB, ZB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.JR().incrementRenderId(), this.computeWorldMatrix(!0);
          const oB = this;
          if (oB.qm && oB.EW) {
            const ZB = oB.qm();
            BB = ZB.boundingBox.minimumWorld.clone(), IB = ZB.boundingBox.maximumWorld.clone()
          } else BB = new JB.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), IB = new JB.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (ZB) {
            const ZB = this.getDescendants(!1);
            for (const oB of ZB) {
              const ZB = oB;
              if (ZB.computeWorldMatrix(!0), TB && !TB(ZB)) continue;
              if (!ZB.qm || 0 === ZB.getTotalVertices()) continue;
              const GB = ZB.qm().boundingBox,
                vB = GB.minimumWorld,
                kB = GB.maximumWorld;
              JB.s.CheckExtends(vB, BB, IB), JB.s.CheckExtends(kB, BB, IB)
            }
          }
          return {
            min: BB,
            max: IB
          }
        }
      }, (() => {
        const JB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        IB = [(0, oB.C)()], ZB = [(0, oB.C)()], hB = [(0, oB.C)()], zB = [(0, oB.C)()], FB = [(0, oB.C)()], (0, TB.j)(null, null, IB, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: BB => "name" in BB,
            get: BB => BB.name,
            set: (BB, IB) => {
              BB.name = IB
            }
          },
          metadata: JB
        }, NB, gB), (0, TB.j)(null, null, ZB, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: BB => "id" in BB,
            get: BB => BB.id,
            set: (BB, IB) => {
              BB.id = IB
            }
          },
          metadata: JB
        }, qB, yB), (0, TB.j)(null, null, hB, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: BB => "uniqueId" in BB,
            get: BB => BB.uniqueId,
            set: (BB, IB) => {
              BB.uniqueId = IB
            }
          },
          metadata: JB
        }, UB, WB), (0, TB.j)(null, null, zB, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: BB => "state" in BB,
            get: BB => BB.state,
            set: (BB, IB) => {
              BB.state = IB
            }
          },
          metadata: JB
        }, dB, CB), (0, TB.j)(null, null, FB, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: BB => "metadata" in BB,
            get: BB => BB.metadata,
            set: (BB, IB) => {
              BB.metadata = IB
            }
          },
          metadata: JB
        }, QB, sB), JB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: JB
        })
      })(), BB._AnimationRangeFactory = (BB, IB, ZB) => {
        throw (0, kB.m)("AnimationRange")
      }, BB._NodeConstructors = {}, BB
    })()
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);