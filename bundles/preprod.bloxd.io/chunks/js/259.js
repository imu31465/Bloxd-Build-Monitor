export const id = 259;
export const ids = [259];
export const modules = {
  40084: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => NC
    });
    var QC = ZC(39811),
      wC = ZC(39818),
      bC = ZC(36963),
      nC = ZC(37142),
      fC = ZC(40046),
      oC = ZC(39950),
      qC = ZC(37002),
      FC = ZC(40022),
      WC = ZC(39842);
    let NC = (() => {
      var CC, zC;
      let ZC, NC, MC, gC, SC, pC, PC, GC, RC, AC, xC, JC, IC, iC = fC.d,
        vC = [],
        eC = [],
        hC = [],
        KC = [],
        YC = [],
        dC = [],
        mC = [],
        HC = [],
        EC = [],
        lC = [],
        XC = [],
        cC = [],
        uC = [],
        rC = [],
        sC = [],
        TC = [],
        aC = [],
        tC = [],
        DC = [],
        jC = [],
        yC = [];
      return CC = class extends iC {
        get range() {
          return this._range
        }
        set range(CC) {
          this._range = CC, this._inverseSquaredRange = 1 / (this.range * this.range)
        }
        get intensityMode() {
          return this._intensityMode
        }
        set intensityMode(CC) {
          this._intensityMode = CC, this._computePhotometricScale()
        }
        get radius() {
          return this._radius
        }
        set radius(CC) {
          this._radius = CC, this._computePhotometricScale()
        }
        get renderPriority() {
          return (0, QC.e)(this, zC, "f")
        }
        set renderPriority(CC) {
          (0, QC.f)(this, zC, CC, "f")
        }
        get shadowEnabled() {
          return this._shadowEnabled
        }
        set shadowEnabled(CC) {
          this._shadowEnabled !== CC && (this._shadowEnabled = CC, this._markMeshesAsLightDirty())
        }
        get includedOnlyMeshes() {
          return this._includedOnlyMeshes
        }
        set includedOnlyMeshes(CC) {
          this._includedOnlyMeshes = CC, this._hookArrayForIncludedOnly(CC)
        }
        get excludedMeshes() {
          return this._excludedMeshes
        }
        set excludedMeshes(CC) {
          this._excludedMeshes = CC, this._hookArrayForExcluded(CC)
        }
        get excludeWithLayerMask() {
          return this._excludeWithLayerMask
        }
        set excludeWithLayerMask(CC) {
          this._excludeWithLayerMask = CC, this._resyncMeshes()
        }
        get includeOnlyWithLayerMask() {
          return this._includeOnlyWithLayerMask
        }
        set includeOnlyWithLayerMask(CC) {
          this._includeOnlyWithLayerMask = CC, this._resyncMeshes()
        }
        get lightmapMode() {
          return this._lightmapMode
        }
        set lightmapMode(CC) {
          this._lightmapMode !== CC && (this._lightmapMode = CC, this._markMeshesAsLightDirty())
        }
        getViewMatrix(CC) {
          return null
        }
        getProjectionMatrix(CC, zC) {
          return null
        }
        constructor(ZC, wC, bC) {
          super(ZC, wC, !1), this.diffuse = ((0, QC.n)(this, vC), (0, QC.n)(this, eC, new nC.e(1, 1, 1))), this.specular = ((0, QC.n)(this, hC), (0, QC.n)(this, KC, new nC.e(1, 1, 1))), this.falloffType = ((0, QC.n)(this, YC), (0, QC.n)(this, dC, CC.FALLOFF_DEFAULT)), this.intensity = ((0, QC.n)(this, mC), (0, QC.n)(this, HC, 1)), this._range = ((0, QC.n)(this, EC), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = CC.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, QC.n)(this, lC, void 0), zC.set(this, ((0, QC.n)(this, XC), (0, QC.n)(this, cC, 0))), this._shadowEnabled = ((0, QC.n)(this, uC), (0, QC.n)(this, rC, !0)), this._includedOnlyMeshes = (0, QC.n)(this, sC), this._excludeWithLayerMask = (0, QC.n)(this, TC, 0), this._includeOnlyWithLayerMask = ((0, QC.n)(this, aC), (0, QC.n)(this, tC, 0)), this._lightmapMode = ((0, QC.n)(this, DC), (0, QC.n)(this, jC, 0)), this._shadowGenerators = ((0, QC.n)(this, yC), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, bC || this.Km().addLight(this), this._uniformBuffer = new oC.c(this.Km().mg(), void 0, void 0, ZC), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], bC || this._resyncMeshes()
        }
        transferTexturesToEffect(CC, zC) {
          return this
        }
        _bindLight(CC, zC, ZC, QC) {
          let wC = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const bC = CC.toString();
          let fC = !1;
          if (this._uniformBuffer.bindToEffect(ZC, "Light" + bC), this._renderId !== zC.getRenderId() || this._lastUseSpecular !== QC || !this._uniformBuffer.useUbo) {
            this._renderId = zC.getRenderId(), this._lastUseSpecular = QC;
            const CC = this.getScaledIntensity();
            this.transferToEffect(ZC, bC), this.diffuse.scaleToRef(CC, nC.j.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", nC.j.Color3[0], this.range, bC), QC && (this.specular.scaleToRef(CC, nC.j.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", nC.j.Color3[1], this.radius, bC)), fC = !0
          }
          if (this.transferTexturesToEffect(ZC, bC), zC.shadowsEnabled && this.shadowEnabled && wC) {
            const CC = this.getShadowGenerator(zC.activeCamera) ?? this.getShadowGenerator();
            CC && (CC.bindShadowLight(bC, ZC), fC = !0)
          }
          fC ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(CC) {
          let zC = "Name: " + this.name;
          if (zC += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let ZC = 0; ZC < this.animations.length; ZC++) zC += ", animation[0]: " + this.animations[ZC].toString(CC);
          return zC
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.GJ() || this._resyncMeshes()
        }
        IK(CC) {
          super.IK(CC), this._resyncMeshes()
        }
        getShadowGenerator() {
          let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(CC) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return bC.r.Zero()
        }
        canAffectMesh(CC) {
          return !CC || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(CC)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(CC)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & CC.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & CC.layerMask)))
        }
        dispose(CC) {
          let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const CC = this._shadowGenerators.values();
            for (let zC = CC.next(); !0 !== zC.done; zC = CC.next()) {
              zC.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.Km().stopAnimation(this), this._parentContainer) {
            const CC = this._parentContainer.lights.indexOf(this);
            CC > -1 && this._parentContainer.lights.splice(CC, 1), this._parentContainer = null
          }
          for (const ZC of this.Km().meshes) ZC._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.Km().removeLight(this), super.dispose(CC, zC)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(zC) {
          let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const QC = CC.GetConstructorFromName(this.getTypeID(), zC, this.Km());
          if (!QC) return null;
          const wC = WC.d.Clone(QC, this);
          return zC && (wC.name = zC), ZC && (wC.parent = ZC), wC.IK(this.isEnabled()), this.onClonedObservable.notifyObservers(wC), wC
        }
        serialize() {
          const CC = WC.d.Serialize(this);
          if (CC.uniqueId = this.uniqueId, CC.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(CC), this.excludedMeshes.length > 0) {
            CC.excludedMeshesIds = [];
            for (const zC of this.excludedMeshes) CC.excludedMeshesIds.push(zC.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            CC.includedOnlyMeshesIds = [];
            for (const zC of this.includedOnlyMeshes) CC.includedOnlyMeshesIds.push(zC.id)
          }
          return WC.d.AppendSerializedAnimations(this, CC), CC.np = this.serializeAnimationRanges(), CC.isEnabled = this.isEnabled(), CC
        }
        static GetConstructorFromName(CC, zC, ZC) {
          const QC = fC.d.Construct("Light_Type_" + CC, zC, ZC);
          return QC || null
        }
        static Parse(zC, ZC) {
          let QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const wC = CC.GetConstructorFromName(zC.type, zC.name, ZC);
          if (!wC) return null;
          const bC = WC.d.Parse(wC, zC, ZC, QC);
          if (zC.excludedMeshesIds && (bC._excludedMeshesIds = zC.excludedMeshesIds), zC.includedOnlyMeshesIds && (bC._includedOnlyMeshesIds = zC.includedOnlyMeshesIds), void 0 !== zC.parentId && (bC._waitingParentId = zC.parentId), void 0 !== zC.parentInstanceIndex && (bC._waitingParentInstanceIndex = zC.parentInstanceIndex), void 0 !== zC.falloffType && (bC.falloffType = zC.falloffType), void 0 !== zC.lightmapMode && (bC.lightmapMode = zC.lightmapMode), zC.animations) {
            for (let CC = 0; CC < zC.animations.length; CC++) {
              const ZC = zC.animations[CC],
                QC = (0, qC.c)("BABYLON.Animation");
              QC && bC.animations.push(QC.Parse(ZC))
            }
            fC.d.ParseAnimationRanges(bC, zC, ZC)
          }
          return zC.autoAnimate && ZC.beginAnimation(bC, zC.autoAnimateFrom, zC.autoAnimateTo, zC.autoAnimateLoop, zC.autoAnimateSpeed || 1), void 0 !== zC.isEnabled && bC.IK(zC.isEnabled), bC._onParsed(zC, ZC, QC), bC
        }
        _onParsed(CC, zC) {}
        _hookArrayForExcluded(CC) {
          var zC = this;
          const ZC = CC.push;
          CC.push = function() {
            for (var QC = arguments.length, wC = new Array(QC), bC = 0; bC < QC; bC++) wC[bC] = arguments[bC];
            const nC = ZC.apply(CC, wC);
            if (zC._clusteredContainer) return nC;
            for (const CC of wC) CC._resyncLightSource(zC);
            return nC
          };
          const QC = CC.splice;
          CC.splice = (zC, ZC) => {
            const wC = QC.call(CC, zC, ZC ?? CC.length);
            if (this._clusteredContainer) return wC;
            for (const CC of wC) CC._resyncLightSource(this);
            return wC
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(CC) {
          var zC = this;
          const ZC = CC.push;
          CC.push = function() {
            for (var QC = arguments.length, wC = new Array(QC), bC = 0; bC < QC; bC++) wC[bC] = arguments[bC];
            const nC = ZC.apply(CC, wC);
            return zC._resyncMeshes(), nC
          };
          const QC = CC.splice;
          CC.splice = (zC, ZC) => {
            const wC = QC.call(CC, zC, ZC ?? CC.length);
            return this._resyncMeshes(), wC
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const CC of this.Km().meshes) CC._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const CC of this.Km().meshes) - 1 !== CC.lightSources.indexOf(this) && CC._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.Km().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let zC = 0;
          const ZC = this.getTypeID();
          let QC = this.intensityMode;
          switch (QC === CC.INTENSITYMODE_AUTOMATIC && (QC = ZC === CC.LIGHTTYPEID_DIRECTIONALLIGHT ? CC.INTENSITYMODE_ILLUMINANCE : CC.INTENSITYMODE_LUMINOUSINTENSITY), ZC) {
            case CC.LIGHTTYPEID_POINTLIGHT:
            case CC.LIGHTTYPEID_SPOTLIGHT:
              switch (QC) {
                case CC.INTENSITYMODE_LUMINOUSPOWER:
                  zC = 1 / (4 * Math.PI);
                  break;
                case CC.INTENSITYMODE_LUMINOUSINTENSITY:
                  zC = 1;
                  break;
                case CC.INTENSITYMODE_LUMINANCE:
                  zC = this.radius * this.radius
              }
              break;
            case CC.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (QC) {
                case CC.INTENSITYMODE_ILLUMINANCE:
                  zC = 1;
                  break;
                case CC.INTENSITYMODE_LUMINANCE: {
                  let CC = this.radius;
                  CC = Math.max(CC, .001);
                  zC = 2 * Math.PI * (1 - Math.cos(CC));
                  break
                }
              }
              break;
            case CC.LIGHTTYPEID_HEMISPHERICLIGHT:
            case CC.LIGHTTYPEID_RECT_AREALIGHT:
              zC = 1
          }
          return zC
        }
        _reorderLightsInScene() {
          const CC = this.Km();
          0 != this._renderPriority && (CC.requireLightSorting = !0), this.Km().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, zC = new WeakMap, (() => {
        const zC = "function" === typeof Symbol && Symbol.metadata ? Object.create(iC[Symbol.metadata] ?? null) : void 0;
        ZC = [(0, wC.n)()], NC = [(0, wC.n)()], MC = [(0, wC.M)()], gC = [(0, wC.M)()], SC = [(0, wC.M)()], pC = [(0, wC.M)()], PC = [(0, wC.M)()], GC = [(0, wC.M)()], RC = [(0, wC.d)("_reorderLightsInScene")], AC = [(0, wC.M)("shadowEnabled")], xC = [(0, wC.M)("excludeWithLayerMask")], JC = [(0, wC.M)("includeOnlyWithLayerMask")], IC = [(0, wC.M)("lightmapMode")], (0, QC.j)(CC, null, SC, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: CC => "range" in CC,
            get: CC => CC.range
          },
          metadata: zC
        }, null, vC), (0, QC.j)(CC, null, pC, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: CC => "intensityMode" in CC,
            get: CC => CC.intensityMode
          },
          metadata: zC
        }, null, vC), (0, QC.j)(CC, null, PC, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: CC => "radius" in CC,
            get: CC => CC.radius
          },
          metadata: zC
        }, null, vC), (0, QC.j)(CC, null, RC, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: CC => "renderPriority" in CC,
            get: CC => CC.renderPriority,
            set: (CC, zC) => {
              CC.renderPriority = zC
            }
          },
          metadata: zC
        }, cC, uC), (0, QC.j)(null, null, ZC, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: CC => "diffuse" in CC,
            get: CC => CC.diffuse,
            set: (CC, zC) => {
              CC.diffuse = zC
            }
          },
          metadata: zC
        }, eC, hC), (0, QC.j)(null, null, NC, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: CC => "specular" in CC,
            get: CC => CC.specular,
            set: (CC, zC) => {
              CC.specular = zC
            }
          },
          metadata: zC
        }, KC, YC), (0, QC.j)(null, null, MC, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: CC => "falloffType" in CC,
            get: CC => CC.falloffType,
            set: (CC, zC) => {
              CC.falloffType = zC
            }
          },
          metadata: zC
        }, dC, mC), (0, QC.j)(null, null, gC, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: CC => "intensity" in CC,
            get: CC => CC.intensity,
            set: (CC, zC) => {
              CC.intensity = zC
            }
          },
          metadata: zC
        }, HC, EC), (0, QC.j)(null, null, GC, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: CC => "_renderPriority" in CC,
            get: CC => CC._renderPriority,
            set: (CC, zC) => {
              CC._renderPriority = zC
            }
          },
          metadata: zC
        }, lC, XC), (0, QC.j)(null, null, AC, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: CC => "_shadowEnabled" in CC,
            get: CC => CC._shadowEnabled,
            set: (CC, zC) => {
              CC._shadowEnabled = zC
            }
          },
          metadata: zC
        }, rC, sC), (0, QC.j)(null, null, xC, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: CC => "_excludeWithLayerMask" in CC,
            get: CC => CC._excludeWithLayerMask,
            set: (CC, zC) => {
              CC._excludeWithLayerMask = zC
            }
          },
          metadata: zC
        }, TC, aC), (0, QC.j)(null, null, JC, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: CC => "_includeOnlyWithLayerMask" in CC,
            get: CC => CC._includeOnlyWithLayerMask,
            set: (CC, zC) => {
              CC._includeOnlyWithLayerMask = zC
            }
          },
          metadata: zC
        }, tC, DC), (0, QC.j)(null, null, IC, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: CC => "_lightmapMode" in CC,
            get: CC => CC._lightmapMode,
            set: (CC, zC) => {
              CC._lightmapMode = zC
            }
          },
          metadata: zC
        }, jC, yC), zC && Object.defineProperty(CC, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zC
        })
      })(), CC.FALLOFF_DEFAULT = FC.c.FALLOFF_DEFAULT, CC.FALLOFF_PHYSICAL = FC.c.FALLOFF_PHYSICAL, CC.FALLOFF_GLTF = FC.c.FALLOFF_GLTF, CC.FALLOFF_STANDARD = FC.c.FALLOFF_STANDARD, CC.LIGHTMAP_DEFAULT = FC.c.LIGHTMAP_DEFAULT, CC.LIGHTMAP_SPECULAR = FC.c.LIGHTMAP_SPECULAR, CC.LIGHTMAP_SHADOWSONLY = FC.c.LIGHTMAP_SHADOWSONLY, CC.INTENSITYMODE_AUTOMATIC = FC.c.INTENSITYMODE_AUTOMATIC, CC.INTENSITYMODE_LUMINOUSPOWER = FC.c.INTENSITYMODE_LUMINOUSPOWER, CC.INTENSITYMODE_LUMINOUSINTENSITY = FC.c.INTENSITYMODE_LUMINOUSINTENSITY, CC.INTENSITYMODE_ILLUMINANCE = FC.c.INTENSITYMODE_ILLUMINANCE, CC.INTENSITYMODE_LUMINANCE = FC.c.INTENSITYMODE_LUMINANCE, CC.LIGHTTYPEID_POINTLIGHT = FC.c.LIGHTTYPEID_POINTLIGHT, CC.LIGHTTYPEID_DIRECTIONALLIGHT = FC.c.LIGHTTYPEID_DIRECTIONALLIGHT, CC.LIGHTTYPEID_SPOTLIGHT = FC.c.LIGHTTYPEID_SPOTLIGHT, CC.LIGHTTYPEID_HEMISPHERICLIGHT = FC.c.LIGHTTYPEID_HEMISPHERICLIGHT, CC.LIGHTTYPEID_RECT_AREALIGHT = FC.c.LIGHTTYPEID_RECT_AREALIGHT, CC
    })()
  },
  40046: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => WC
    });
    var QC = ZC(39811),
      wC = ZC(36963),
      bC = ZC(39818),
      nC = ZC(36987),
      fC = ZC(36985),
      oC = ZC(39694),
      qC = ZC(39842);
    class FC {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new nC.d, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new nC.d, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let WC = (() => {
      var CC;
      let zC, ZC, WC, NC, MC, gC = [],
        SC = [],
        pC = [],
        PC = [],
        GC = [],
        RC = [],
        AC = [],
        xC = [],
        JC = [],
        IC = [];
      return CC = class {
        static AddNodeConstructor(CC, zC) {
          this._NodeConstructors[CC] = zC
        }
        static Construct(CC, zC, ZC, QC) {
          const wC = this._NodeConstructors[CC];
          return wC ? wC(zC, ZC, QC) : null
        }
        set accessibilityTag(CC) {
          this._accessibilityTag = CC, this.onAccessibilityTagChangedObservable.notifyObservers(CC)
        }
        get accessibilityTag() {
          return this._accessibilityTag
        }
        get doNotSerialize() {
          return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
        }
        set doNotSerialize(CC) {
          this._nodeDataStorage._doNotSerialize = CC
        }
        GJ() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(CC) {
          if (this._parentNode === CC) return;
          const zC = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const zC = this._parentNode._children.indexOf(this); - 1 !== zC && this._parentNode._children.splice(zC, 1), CC || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = CC, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), zC || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
        }
        get parent() {
          return this._parentNode
        }
        get inheritVisibility() {
          return this._nodeDataStorage._inheritVisibility
        }
        set inheritVisibility(CC) {
          this._nodeDataStorage._inheritVisibility = CC
        }
        get isVisible() {
          return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
        }
        set isVisible(CC) {
          this._nodeDataStorage._isVisible = CC
        }
        _serializeAsParent(CC) {
          CC.parentId = this.uniqueId
        }
        _addToSceneRootNodes() {
          -1 === this._nodeDataStorage._sceneRootNodesIndex && (this._nodeDataStorage._sceneRootNodesIndex = this._scene.rootNodes.length, this._scene.rootNodes.push(this))
        }
        _removeFromSceneRootNodes() {
          if (-1 !== this._nodeDataStorage._sceneRootNodesIndex) {
            const CC = this._scene.rootNodes,
              zC = CC.length - 1;
            CC[this._nodeDataStorage._sceneRootNodesIndex] = CC[zC], CC[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
          }
        }
        get animationPropertiesOverride() {
          return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
        }
        set animationPropertiesOverride(CC) {
          this._animationPropertiesOverride = CC
        }
        getClassName() {
          return "Node"
        }
        set onDispose(CC) {
          this._onDisposeObserver && this.Tm.remove(this._onDisposeObserver), this._onDisposeObserver = this.Tm.add(CC)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var CC;
          return (CC = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (CC._onEffectiveEnabledStateChangedObservable = new nC.d)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(CC) {
          let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new FC, this.name = (0, QC.n)(this, gC, void 0), this.id = ((0, QC.n)(this, SC), (0, QC.n)(this, pC, void 0)), this.uniqueId = ((0, QC.n)(this, PC), (0, QC.n)(this, GC, void 0)), this.state = ((0, QC.n)(this, RC), (0, QC.n)(this, AC, "")), this.metadata = ((0, QC.n)(this, xC), (0, QC.n)(this, JC, null)), this._internalMetadata = (0, QC.n)(this, IC), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new nC.d, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = wC.b.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.Tm = new nC.d, this._onDisposeObserver = null, this._behaviors = new Array, this.name = CC, this.id = CC, this._scene = zC || fC.c.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), ZC && this._addToSceneRootNodes()
        }
        Km() {
          return this._scene
        }
        mg() {
          return this._scene.mg()
        }
        addBehavior(CC) {
          let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(CC) || (CC.init(), this._scene.isLoading && !zC ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(CC) && CC.attach(this)
          })) : CC.attach(this), this._behaviors.push(CC)), this
        }
        removeBehavior(CC) {
          const zC = this._behaviors.indexOf(CC);
          return -1 === zC || (this._behaviors.splice(zC, 1), CC.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(CC) {
          for (const zC of this._behaviors)
            if (zC.name === CC) return zC;
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
        updateCache(CC) {
          !CC && this.isSynchronized() || this._updateCache()
        }
        _getActionManagerForTrigger(CC) {
          return this.parent ? this.parent._getActionManagerForTrigger(CC, !1) : null
        }
        _updateCache(CC) {}
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
        YzC(CC) {
          return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this
        }
        isEnabled() {
          return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled
        }
        _hasEffectiveEnabledStateObservers() {
          const CC = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
          return !!CC && CC.hasObservers()
        }
        _syncParentEnabledState() {
          const CC = this._hasEffectiveEnabledStateObservers(),
            zC = CC ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const ZC of this._children) ZC._syncParentEnabledState();
          if (CC) {
            const CC = this.isEnabled();
            CC !== zC && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(CC)
          }
        }
        IK(CC) {
          if (this._nodeDataStorage._isEnabled === CC) return;
          const zC = this._hasEffectiveEnabledStateObservers(),
            ZC = zC ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = CC, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(CC), zC) {
            const CC = this.isEnabled();
            CC !== ZC && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(CC)
          }
        }
        isDescendantOf(CC) {
          return !!this.parent && (this.parent === CC || this.parent.isDescendantOf(CC))
        }
        _getDescendants(CC) {
          let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            ZC = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let QC = 0; QC < this._children.length; QC++) {
              const wC = this._children[QC];
              ZC && !ZC(wC) || CC.push(wC), zC || wC._getDescendants(CC, !1, ZC)
            }
        }
        getDescendants(CC, zC) {
          const ZC = [];
          return this._getDescendants(ZC, CC, zC), ZC
        }
        getChildMeshes(CC, zC) {
          const ZC = [];
          return this._getDescendants(ZC, CC, (CC => (!zC || zC(CC)) && void 0 !== CC.cullingStrategy)), ZC
        }
        getChildren(CC) {
          let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(zC, CC)
        }
        _setReady(CC) {
          CC !== this._nodeDataStorage._isReady && (CC ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(CC) {
          for (let zC = 0; zC < this.animations.length; zC++) {
            const ZC = this.animations[zC];
            if (ZC.name === CC) return ZC
          }
          return null
        }
        createAnimationRange(zC, ZC, QC) {
          if (!this._ranges[zC]) {
            this._ranges[zC] = CC._AnimationRangeFactory(zC, ZC, QC);
            for (let CC = 0, wC = this.animations.length; CC < wC; CC++) this.animations[CC] && this.animations[CC].createRange(zC, ZC, QC)
          }
        }
        deleteAnimationRange(CC) {
          let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let ZC = 0, QC = this.animations.length; ZC < QC; ZC++) this.animations[ZC] && this.animations[ZC].deleteRange(CC, zC);
          this._ranges[CC] = null
        }
        getAnimationRange(CC) {
          return this._ranges[CC] || null
        }
        clone(zC, ZC, QC) {
          const wC = qC.d.Clone((() => new CC(zC, this.Km())), this);
          if (ZC && (wC.parent = ZC), !QC) {
            const CC = this.getDescendants(!0);
            for (let ZC = 0; ZC < CC.length; ZC++) {
              const QC = CC[ZC];
              QC.clone(zC + "." + QC.name, wC)
            }
          }
          return wC
        }
        getAnimationRanges() {
          const CC = [];
          let zC;
          for (zC in this._ranges) CC.push(this._ranges[zC]);
          return CC
        }
        beginAnimation(CC, zC, ZC, QC) {
          const wC = this.getAnimationRange(CC);
          return wC ? this._scene.beginAnimation(this, wC.from, wC.to, zC, ZC, QC) : null
        }
        serializeAnimationRanges() {
          const CC = [];
          for (const zC in this._ranges) {
            const ZC = this._ranges[zC];
            if (!ZC) continue;
            const QC = {};
            QC.name = zC, QC.from = ZC.from, QC.to = ZC.to, CC.push(QC)
          }
          return CC
        }
        computeWorldMatrix(CC) {
          return this._worldMatrix || (this._worldMatrix = wC.b.Identity()), this._worldMatrix
        }
        dispose(CC) {
          let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !CC) {
            const ZC = this.getDescendants(!0);
            for (const QC of ZC) QC.dispose(CC, zC)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.Tm.notifyObservers(this), this.Tm.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const ZC of this._behaviors) ZC.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(CC, zC, ZC) {
          if (zC.np)
            for (let QC = 0; QC < zC.np.length; QC++) {
              const ZC = zC.np[QC];
              CC.createAnimationRange(ZC.name, ZC.from, ZC.to)
            }
        }
        getHierarchyBoundingVectors() {
          let CC, zC, ZC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            QC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.Km().incrementRenderId(), this.computeWorldMatrix(!0);
          const bC = this;
          if (bC.WE && bC.Zx) {
            const ZC = bC.WE();
            CC = ZC.boundingBox.minimumWorld.clone(), zC = ZC.boundingBox.maximumWorld.clone()
          } else CC = new wC.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), zC = new wC.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (ZC) {
            const ZC = this.getDescendants(!1);
            for (const bC of ZC) {
              const ZC = bC;
              if (ZC.computeWorldMatrix(!0), QC && !QC(ZC)) continue;
              if (!ZC.WE || 0 === ZC.getTotalVertices()) continue;
              const nC = ZC.WE().boundingBox,
                fC = nC.minimumWorld,
                oC = nC.maximumWorld;
              wC.r.CheckExtends(fC, CC, zC), wC.r.CheckExtends(oC, CC, zC)
            }
          }
          return {
            min: CC,
            max: zC
          }
        }
      }, (() => {
        const wC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zC = [(0, bC.M)()], ZC = [(0, bC.M)()], WC = [(0, bC.M)()], NC = [(0, bC.M)()], MC = [(0, bC.M)()], (0, QC.j)(null, null, zC, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: CC => "name" in CC,
            get: CC => CC.name,
            set: (CC, zC) => {
              CC.name = zC
            }
          },
          metadata: wC
        }, gC, SC), (0, QC.j)(null, null, ZC, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: CC => "id" in CC,
            get: CC => CC.id,
            set: (CC, zC) => {
              CC.id = zC
            }
          },
          metadata: wC
        }, pC, PC), (0, QC.j)(null, null, WC, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: CC => "uniqueId" in CC,
            get: CC => CC.uniqueId,
            set: (CC, zC) => {
              CC.uniqueId = zC
            }
          },
          metadata: wC
        }, GC, RC), (0, QC.j)(null, null, NC, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: CC => "state" in CC,
            get: CC => CC.state,
            set: (CC, zC) => {
              CC.state = zC
            }
          },
          metadata: wC
        }, AC, xC), (0, QC.j)(null, null, MC, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: CC => "metadata" in CC,
            get: CC => CC.metadata,
            set: (CC, zC) => {
              CC.metadata = zC
            }
          },
          metadata: wC
        }, JC, IC), wC && Object.defineProperty(CC, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: wC
        })
      })(), CC._AnimationRangeFactory = (CC, zC, ZC) => {
        throw (0, oC.i)("AnimationRange")
      }, CC._NodeConstructors = {}, CC
    })()
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);