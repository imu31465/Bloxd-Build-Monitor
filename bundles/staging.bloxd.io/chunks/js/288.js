export const id = 288;
export const ids = [288];
export const modules = {
  41374: (ee, ie, He) => {
    He.d(ie, {
      e: () => ke
    });
    var ye = He(41113),
      be = He(41121),
      Me = He(37917),
      Ke = He(38022),
      Ue = He(41323),
      Fe = He(41238),
      Je = He(37949),
      oe = He(41301),
      Re = He(41141);
    let ke = (() => {
      var ee, ie;
      let He, ke, qe, fe, Te, pe, Xe, ze, Be, Ee, ge, Oe, de, We = Ue.d,
        te = [],
        Ze = [],
        we = [],
        De = [],
        Pe = [],
        Ae = [],
        Ye = [],
        Ve = [],
        ae = [],
        ce = [],
        xe = [],
        Le = [],
        Ce = [],
        ve = [],
        ue = [],
        me = [],
        le = [],
        Se = [],
        ne = [],
        je = [],
        se = [];
      return ee = class extends We {
        get range() {
          return this._range
        }
        set range(ee) {
          this._range = ee, this._inverseSquaredRange = 1 / (this.range * this.range)
        }
        get intensityMode() {
          return this._intensityMode
        }
        set intensityMode(ee) {
          this._intensityMode = ee, this._computePhotometricScale()
        }
        get radius() {
          return this._radius
        }
        set radius(ee) {
          this._radius = ee, this._computePhotometricScale()
        }
        get renderPriority() {
          return (0, ye.c)(this, ie, "f")
        }
        set renderPriority(ee) {
          (0, ye.f)(this, ie, ee, "f")
        }
        get shadowEnabled() {
          return this._shadowEnabled
        }
        set shadowEnabled(ee) {
          this._shadowEnabled !== ee && (this._shadowEnabled = ee, this._markMeshesAsLightDirty())
        }
        get includedOnlyMeshes() {
          return this._includedOnlyMeshes
        }
        set includedOnlyMeshes(ee) {
          this._includedOnlyMeshes = ee, this._hookArrayForIncludedOnly(ee)
        }
        get excludedMeshes() {
          return this._excludedMeshes
        }
        set excludedMeshes(ee) {
          this._excludedMeshes = ee, this._hookArrayForExcluded(ee)
        }
        get excludeWithLayerMask() {
          return this._excludeWithLayerMask
        }
        set excludeWithLayerMask(ee) {
          this._excludeWithLayerMask = ee, this._resyncMeshes()
        }
        get includeOnlyWithLayerMask() {
          return this._includeOnlyWithLayerMask
        }
        set includeOnlyWithLayerMask(ee) {
          this._includeOnlyWithLayerMask = ee, this._resyncMeshes()
        }
        get lightmapMode() {
          return this._lightmapMode
        }
        set lightmapMode(ee) {
          this._lightmapMode !== ee && (this._lightmapMode = ee, this._markMeshesAsLightDirty())
        }
        getViewMatrix(ee) {
          return null
        }
        getProjectionMatrix(ee, ie) {
          return null
        }
        constructor(He, be, Me) {
          super(He, be, !1), this.diffuse = ((0, ye.l)(this, te), (0, ye.l)(this, Ze, new Ke.c(1, 1, 1))), this.specular = ((0, ye.l)(this, we), (0, ye.l)(this, De, new Ke.c(1, 1, 1))), this.falloffType = ((0, ye.l)(this, Pe), (0, ye.l)(this, Ae, ee.FALLOFF_DEFAULT)), this.intensity = ((0, ye.l)(this, Ye), (0, ye.l)(this, Ve, 1)), this._range = ((0, ye.l)(this, ae), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = ee.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, ye.l)(this, ce, void 0), ie.set(this, ((0, ye.l)(this, xe), (0, ye.l)(this, Le, 0))), this._shadowEnabled = ((0, ye.l)(this, Ce), (0, ye.l)(this, ve, !0)), this._includedOnlyMeshes = (0, ye.l)(this, ue), this._excludeWithLayerMask = (0, ye.l)(this, me, 0), this._includeOnlyWithLayerMask = ((0, ye.l)(this, le), (0, ye.l)(this, Se, 0)), this._lightmapMode = ((0, ye.l)(this, ne), (0, ye.l)(this, je, 0)), this._shadowGenerators = ((0, ye.l)(this, se), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, Me || this.Xx().addLight(this), this._uniformBuffer = new Fe.b(this.Xx().Nf(), void 0, void 0, He), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], Me || this._resyncMeshes()
        }
        transferTexturesToEffect(ee, ie) {
          return this
        }
        _bindLight(ee, ie, He, ye) {
          let be = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const Me = ee.toString();
          let Ue = !1;
          if (this._uniformBuffer.bindToEffect(He, "Light" + Me), this._renderId !== ie.getRenderId() || this._lastUseSpecular !== ye || !this._uniformBuffer.useUbo) {
            this._renderId = ie.getRenderId(), this._lastUseSpecular = ye;
            const ee = this.getScaledIntensity();
            this.transferToEffect(He, Me), this.diffuse.scaleToRef(ee, Ke.j.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", Ke.j.Color3[0], this.range, Me), ye && (this.specular.scaleToRef(ee, Ke.j.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", Ke.j.Color3[1], this.radius, Me)), Ue = !0
          }
          if (this.transferTexturesToEffect(He, Me), ie.shadowsEnabled && this.shadowEnabled && be) {
            const ee = this.getShadowGenerator(ie.activeCamera) ?? this.getShadowGenerator();
            ee && (ee.bindShadowLight(Me, He), Ue = !0)
          }
          Ue ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(ee) {
          let ie = "Name: " + this.name;
          if (ie += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let He = 0; He < this.animations.length; He++) ie += ", animation[0]: " + this.animations[He].toString(ee);
          return ie
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.RZ() || this._resyncMeshes()
        }
        JY(ee) {
          super.JY(ee), this._resyncMeshes()
        }
        getShadowGenerator() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(ee) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return Me.p.Zero()
        }
        canAffectMesh(ee) {
          return !ee || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(ee)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(ee)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & ee.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & ee.layerMask)))
        }
        dispose(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const ee = this._shadowGenerators.values();
            for (let ie = ee.next(); !0 !== ie.done; ie = ee.next()) {
              ie.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.Xx().stopAnimation(this), this._parentContainer) {
            const ee = this._parentContainer.lights.indexOf(this);
            ee > -1 && this._parentContainer.lights.splice(ee, 1), this._parentContainer = null
          }
          for (const He of this.Xx().meshes) He._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.Xx().removeLight(this), super.dispose(ee, ie)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(ie) {
          let He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const ye = ee.GetConstructorFromName(this.getTypeID(), ie, this.Xx());
          if (!ye) return null;
          const be = Re.c.Clone(ye, this);
          return ie && (be.name = ie), He && (be.parent = He), be.JY(this.isEnabled()), this.onClonedObservable.notifyObservers(be), be
        }
        serialize() {
          const ee = Re.c.Serialize(this);
          if (ee.uniqueId = this.uniqueId, ee.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(ee), this.excludedMeshes.length > 0) {
            ee.excludedMeshesIds = [];
            for (const ie of this.excludedMeshes) ee.excludedMeshesIds.push(ie.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            ee.includedOnlyMeshesIds = [];
            for (const ie of this.includedOnlyMeshes) ee.includedOnlyMeshesIds.push(ie.id)
          }
          return Re.c.AppendSerializedAnimations(this, ee), ee.zp = this.serializeAnimationRanges(), ee.isEnabled = this.isEnabled(), ee
        }
        static GetConstructorFromName(ee, ie, He) {
          const ye = Ue.d.Construct("Light_Type_" + ee, ie, He);
          return ye || null
        }
        static Parse(ie, He) {
          let ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const be = ee.GetConstructorFromName(ie.type, ie.name, He);
          if (!be) return null;
          const Me = Re.c.Parse(be, ie, He, ye);
          if (ie.excludedMeshesIds && (Me._excludedMeshesIds = ie.excludedMeshesIds), ie.includedOnlyMeshesIds && (Me._includedOnlyMeshesIds = ie.includedOnlyMeshesIds), void 0 !== ie.parentId && (Me._waitingParentId = ie.parentId), void 0 !== ie.parentInstanceIndex && (Me._waitingParentInstanceIndex = ie.parentInstanceIndex), void 0 !== ie.falloffType && (Me.falloffType = ie.falloffType), void 0 !== ie.lightmapMode && (Me.lightmapMode = ie.lightmapMode), ie.animations) {
            for (let ee = 0; ee < ie.animations.length; ee++) {
              const He = ie.animations[ee],
                ye = (0, Je.c)("BABYLON.Animation");
              ye && Me.animations.push(ye.Parse(He))
            }
            Ue.d.ParseAnimationRanges(Me, ie, He)
          }
          return ie.autoAnimate && He.beginAnimation(Me, ie.autoAnimateFrom, ie.autoAnimateTo, ie.autoAnimateLoop, ie.autoAnimateSpeed || 1), void 0 !== ie.isEnabled && Me.JY(ie.isEnabled), Me._onParsed(ie, He, ye), Me
        }
        _onParsed(ee, ie) {}
        _hookArrayForExcluded(ee) {
          var ie = this;
          const He = ee.push;
          ee.push = function() {
            for (var ye = arguments.length, be = new Array(ye), Me = 0; Me < ye; Me++) be[Me] = arguments[Me];
            const Ke = He.apply(ee, be);
            if (ie._clusteredContainer) return Ke;
            for (const ee of be) ee._resyncLightSource(ie);
            return Ke
          };
          const ye = ee.splice;
          ee.splice = (ie, He) => {
            const be = ye.call(ee, ie, He ?? ee.length);
            if (this._clusteredContainer) return be;
            for (const ee of be) ee._resyncLightSource(this);
            return be
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(ee) {
          var ie = this;
          const He = ee.push;
          ee.push = function() {
            for (var ye = arguments.length, be = new Array(ye), Me = 0; Me < ye; Me++) be[Me] = arguments[Me];
            const Ke = He.apply(ee, be);
            return ie._resyncMeshes(), Ke
          };
          const ye = ee.splice;
          ee.splice = (ie, He) => {
            const be = ye.call(ee, ie, He ?? ee.length);
            return this._resyncMeshes(), be
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const ee of this.Xx().meshes) ee._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const ee of this.Xx().meshes) - 1 !== ee.lightSources.indexOf(this) && ee._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.Xx().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let ie = 0;
          const He = this.getTypeID();
          let ye = this.intensityMode;
          switch (ye === ee.INTENSITYMODE_AUTOMATIC && (ye = He === ee.LIGHTTYPEID_DIRECTIONALLIGHT ? ee.INTENSITYMODE_ILLUMINANCE : ee.INTENSITYMODE_LUMINOUSINTENSITY), He) {
            case ee.LIGHTTYPEID_POINTLIGHT:
            case ee.LIGHTTYPEID_SPOTLIGHT:
              switch (ye) {
                case ee.INTENSITYMODE_LUMINOUSPOWER:
                  ie = 1 / (4 * Math.PI);
                  break;
                case ee.INTENSITYMODE_LUMINOUSINTENSITY:
                  ie = 1;
                  break;
                case ee.INTENSITYMODE_LUMINANCE:
                  ie = this.radius * this.radius
              }
              break;
            case ee.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (ye) {
                case ee.INTENSITYMODE_ILLUMINANCE:
                  ie = 1;
                  break;
                case ee.INTENSITYMODE_LUMINANCE: {
                  let ee = this.radius;
                  ee = Math.max(ee, .001);
                  ie = 2 * Math.PI * (1 - Math.cos(ee));
                  break
                }
              }
              break;
            case ee.LIGHTTYPEID_HEMISPHERICLIGHT:
            case ee.LIGHTTYPEID_RECT_AREALIGHT:
              ie = 1
          }
          return ie
        }
        _reorderLightsInScene() {
          const ee = this.Xx();
          0 != this._renderPriority && (ee.requireLightSorting = !0), this.Xx().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, ie = new WeakMap, (() => {
        const ie = "function" === typeof Symbol && Symbol.metadata ? Object.create(We[Symbol.metadata] ?? null) : void 0;
        He = [(0, be.p)()], ke = [(0, be.p)()], qe = [(0, be.R)()], fe = [(0, be.R)()], Te = [(0, be.R)()], pe = [(0, be.R)()], Xe = [(0, be.R)()], ze = [(0, be.R)()], Be = [(0, be.d)("_reorderLightsInScene")], Ee = [(0, be.R)("shadowEnabled")], ge = [(0, be.R)("excludeWithLayerMask")], Oe = [(0, be.R)("includeOnlyWithLayerMask")], de = [(0, be.R)("lightmapMode")], (0, ye.i)(ee, null, Te, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: ee => "range" in ee,
            get: ee => ee.range
          },
          metadata: ie
        }, null, te), (0, ye.i)(ee, null, pe, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: ee => "intensityMode" in ee,
            get: ee => ee.intensityMode
          },
          metadata: ie
        }, null, te), (0, ye.i)(ee, null, Xe, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: ee => "radius" in ee,
            get: ee => ee.radius
          },
          metadata: ie
        }, null, te), (0, ye.i)(ee, null, Be, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: ee => "renderPriority" in ee,
            get: ee => ee.renderPriority,
            set: (ee, ie) => {
              ee.renderPriority = ie
            }
          },
          metadata: ie
        }, Le, Ce), (0, ye.i)(null, null, He, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: ee => "diffuse" in ee,
            get: ee => ee.diffuse,
            set: (ee, ie) => {
              ee.diffuse = ie
            }
          },
          metadata: ie
        }, Ze, we), (0, ye.i)(null, null, ke, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: ee => "specular" in ee,
            get: ee => ee.specular,
            set: (ee, ie) => {
              ee.specular = ie
            }
          },
          metadata: ie
        }, De, Pe), (0, ye.i)(null, null, qe, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: ee => "falloffType" in ee,
            get: ee => ee.falloffType,
            set: (ee, ie) => {
              ee.falloffType = ie
            }
          },
          metadata: ie
        }, Ae, Ye), (0, ye.i)(null, null, fe, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: ee => "intensity" in ee,
            get: ee => ee.intensity,
            set: (ee, ie) => {
              ee.intensity = ie
            }
          },
          metadata: ie
        }, Ve, ae), (0, ye.i)(null, null, ze, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: ee => "_renderPriority" in ee,
            get: ee => ee._renderPriority,
            set: (ee, ie) => {
              ee._renderPriority = ie
            }
          },
          metadata: ie
        }, ce, xe), (0, ye.i)(null, null, Ee, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: ee => "_shadowEnabled" in ee,
            get: ee => ee._shadowEnabled,
            set: (ee, ie) => {
              ee._shadowEnabled = ie
            }
          },
          metadata: ie
        }, ve, ue), (0, ye.i)(null, null, ge, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: ee => "_excludeWithLayerMask" in ee,
            get: ee => ee._excludeWithLayerMask,
            set: (ee, ie) => {
              ee._excludeWithLayerMask = ie
            }
          },
          metadata: ie
        }, me, le), (0, ye.i)(null, null, Oe, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: ee => "_includeOnlyWithLayerMask" in ee,
            get: ee => ee._includeOnlyWithLayerMask,
            set: (ee, ie) => {
              ee._includeOnlyWithLayerMask = ie
            }
          },
          metadata: ie
        }, Se, ne), (0, ye.i)(null, null, de, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: ee => "_lightmapMode" in ee,
            get: ee => ee._lightmapMode,
            set: (ee, ie) => {
              ee._lightmapMode = ie
            }
          },
          metadata: ie
        }, je, se), ie && Object.defineProperty(ee, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ie
        })
      })(), ee.FALLOFF_DEFAULT = oe.c.FALLOFF_DEFAULT, ee.FALLOFF_PHYSICAL = oe.c.FALLOFF_PHYSICAL, ee.FALLOFF_GLTF = oe.c.FALLOFF_GLTF, ee.FALLOFF_STANDARD = oe.c.FALLOFF_STANDARD, ee.LIGHTMAP_DEFAULT = oe.c.LIGHTMAP_DEFAULT, ee.LIGHTMAP_SPECULAR = oe.c.LIGHTMAP_SPECULAR, ee.LIGHTMAP_SHADOWSONLY = oe.c.LIGHTMAP_SHADOWSONLY, ee.INTENSITYMODE_AUTOMATIC = oe.c.INTENSITYMODE_AUTOMATIC, ee.INTENSITYMODE_LUMINOUSPOWER = oe.c.INTENSITYMODE_LUMINOUSPOWER, ee.INTENSITYMODE_LUMINOUSINTENSITY = oe.c.INTENSITYMODE_LUMINOUSINTENSITY, ee.INTENSITYMODE_ILLUMINANCE = oe.c.INTENSITYMODE_ILLUMINANCE, ee.INTENSITYMODE_LUMINANCE = oe.c.INTENSITYMODE_LUMINANCE, ee.LIGHTTYPEID_POINTLIGHT = oe.c.LIGHTTYPEID_POINTLIGHT, ee.LIGHTTYPEID_DIRECTIONALLIGHT = oe.c.LIGHTTYPEID_DIRECTIONALLIGHT, ee.LIGHTTYPEID_SPOTLIGHT = oe.c.LIGHTTYPEID_SPOTLIGHT, ee.LIGHTTYPEID_HEMISPHERICLIGHT = oe.c.LIGHTTYPEID_HEMISPHERICLIGHT, ee.LIGHTTYPEID_RECT_AREALIGHT = oe.c.LIGHTTYPEID_RECT_AREALIGHT, ee
    })()
  },
  41323: (ee, ie, He) => {
    He.d(ie, {
      d: () => Re
    });
    var ye = He(41113),
      be = He(37917),
      Me = He(41121),
      Ke = He(37931),
      Ue = He(37929),
      Fe = He(40985),
      Je = He(41141);
    class oe {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new Ke.d, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new Ke.d, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let Re = (() => {
      var ee;
      let ie, He, Re, ke, qe, fe = [],
        Te = [],
        pe = [],
        Xe = [],
        ze = [],
        Be = [],
        Ee = [],
        ge = [],
        Oe = [],
        de = [];
      return ee = class {
        static AddNodeConstructor(ee, ie) {
          this._NodeConstructors[ee] = ie
        }
        static Construct(ee, ie, He, ye) {
          const be = this._NodeConstructors[ee];
          return be ? be(ie, He, ye) : null
        }
        set accessibilityTag(ee) {
          this._accessibilityTag = ee, this.onAccessibilityTagChangedObservable.notifyObservers(ee)
        }
        get accessibilityTag() {
          return this._accessibilityTag
        }
        get doNotSerialize() {
          return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
        }
        set doNotSerialize(ee) {
          this._nodeDataStorage._doNotSerialize = ee
        }
        RZ() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(ee) {
          if (this._parentNode === ee) return;
          const ie = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const ie = this._parentNode._children.indexOf(this); - 1 !== ie && this._parentNode._children.splice(ie, 1), ee || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = ee, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), ie || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
        }
        get parent() {
          return this._parentNode
        }
        get inheritVisibility() {
          return this._nodeDataStorage._inheritVisibility
        }
        set inheritVisibility(ee) {
          this._nodeDataStorage._inheritVisibility = ee
        }
        get isVisible() {
          return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
        }
        set isVisible(ee) {
          this._nodeDataStorage._isVisible = ee
        }
        _serializeAsParent(ee) {
          ee.parentId = this.uniqueId
        }
        _addToSceneRootNodes() {
          -1 === this._nodeDataStorage._sceneRootNodesIndex && (this._nodeDataStorage._sceneRootNodesIndex = this._scene.rootNodes.length, this._scene.rootNodes.push(this))
        }
        _removeFromSceneRootNodes() {
          if (-1 !== this._nodeDataStorage._sceneRootNodesIndex) {
            const ee = this._scene.rootNodes,
              ie = ee.length - 1;
            ee[this._nodeDataStorage._sceneRootNodesIndex] = ee[ie], ee[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
          }
        }
        get animationPropertiesOverride() {
          return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
        }
        set animationPropertiesOverride(ee) {
          this._animationPropertiesOverride = ee
        }
        getClassName() {
          return "Node"
        }
        set onDispose(ee) {
          this._onDisposeObserver && this.Bx.remove(this._onDisposeObserver), this._onDisposeObserver = this.Bx.add(ee)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var ee;
          return (ee = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (ee._onEffectiveEnabledStateChangedObservable = new Ke.d)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new oe, this.name = (0, ye.l)(this, fe, void 0), this.id = ((0, ye.l)(this, Te), (0, ye.l)(this, pe, void 0)), this.uniqueId = ((0, ye.l)(this, Xe), (0, ye.l)(this, ze, void 0)), this.state = ((0, ye.l)(this, Be), (0, ye.l)(this, Ee, "")), this.metadata = ((0, ye.l)(this, ge), (0, ye.l)(this, Oe, null)), this._internalMetadata = (0, ye.l)(this, de), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new Ke.d, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = be.b.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.Bx = new Ke.d, this._onDisposeObserver = null, this._behaviors = new Array, this.name = ee, this.id = ee, this._scene = ie || Ue.b.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), He && this._addToSceneRootNodes()
        }
        Xx() {
          return this._scene
        }
        Nf() {
          return this._scene.Nf()
        }
        addBehavior(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(ee) || (ee.init(), this._scene.isLoading && !ie ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(ee) && ee.attach(this)
          })) : ee.attach(this), this._behaviors.push(ee)), this
        }
        removeBehavior(ee) {
          const ie = this._behaviors.indexOf(ee);
          return -1 === ie || (this._behaviors.splice(ie, 1), ee.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(ee) {
          for (const ie of this._behaviors)
            if (ie.name === ee) return ie;
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
        updateCache(ee) {
          !ee && this.isSynchronized() || this._updateCache()
        }
        _getActionManagerForTrigger(ee) {
          return this.parent ? this.parent._getActionManagerForTrigger(ee, !1) : null
        }
        _updateCache(ee) {}
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
        tye(ee) {
          return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this
        }
        isEnabled() {
          return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled
        }
        _hasEffectiveEnabledStateObservers() {
          const ee = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
          return !!ee && ee.hasObservers()
        }
        _syncParentEnabledState() {
          const ee = this._hasEffectiveEnabledStateObservers(),
            ie = ee ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const He of this._children) He._syncParentEnabledState();
          if (ee) {
            const ee = this.isEnabled();
            ee !== ie && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(ee)
          }
        }
        JY(ee) {
          if (this._nodeDataStorage._isEnabled === ee) return;
          const ie = this._hasEffectiveEnabledStateObservers(),
            He = ie ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = ee, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(ee), ie) {
            const ee = this.isEnabled();
            ee !== He && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(ee)
          }
        }
        isDescendantOf(ee) {
          return !!this.parent && (this.parent === ee || this.parent.isDescendantOf(ee))
        }
        _getDescendants(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            He = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let ye = 0; ye < this._children.length; ye++) {
              const be = this._children[ye];
              He && !He(be) || ee.push(be), ie || be._getDescendants(ee, !1, He)
            }
        }
        getDescendants(ee, ie) {
          const He = [];
          return this._getDescendants(He, ee, ie), He
        }
        getChildMeshes(ee, ie) {
          const He = [];
          return this._getDescendants(He, ee, (ee => (!ie || ie(ee)) && void 0 !== ee.cullingStrategy)), He
        }
        getChildren(ee) {
          let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(ie, ee)
        }
        _setReady(ee) {
          ee !== this._nodeDataStorage._isReady && (ee ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(ee) {
          for (let ie = 0; ie < this.animations.length; ie++) {
            const He = this.animations[ie];
            if (He.name === ee) return He
          }
          return null
        }
        createAnimationRange(ie, He, ye) {
          if (!this._ranges[ie]) {
            this._ranges[ie] = ee._AnimationRangeFactory(ie, He, ye);
            for (let ee = 0, be = this.animations.length; ee < be; ee++) this.animations[ee] && this.animations[ee].createRange(ie, He, ye)
          }
        }
        deleteAnimationRange(ee) {
          let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let He = 0, ye = this.animations.length; He < ye; He++) this.animations[He] && this.animations[He].deleteRange(ee, ie);
          this._ranges[ee] = null
        }
        getAnimationRange(ee) {
          return this._ranges[ee] || null
        }
        clone(ie, He, ye) {
          const be = Je.c.Clone((() => new ee(ie, this.Xx())), this);
          if (He && (be.parent = He), !ye) {
            const ee = this.getDescendants(!0);
            for (let He = 0; He < ee.length; He++) {
              const ye = ee[He];
              ye.clone(ie + "." + ye.name, be)
            }
          }
          return be
        }
        getAnimationRanges() {
          const ee = [];
          let ie;
          for (ie in this._ranges) ee.push(this._ranges[ie]);
          return ee
        }
        beginAnimation(ee, ie, He, ye) {
          const be = this.getAnimationRange(ee);
          return be ? this._scene.beginAnimation(this, be.from, be.to, ie, He, ye) : null
        }
        serializeAnimationRanges() {
          const ee = [];
          for (const ie in this._ranges) {
            const He = this._ranges[ie];
            if (!He) continue;
            const ye = {};
            ye.name = ie, ye.from = He.from, ye.to = He.to, ee.push(ye)
          }
          return ee
        }
        computeWorldMatrix(ee) {
          return this._worldMatrix || (this._worldMatrix = be.b.Identity()), this._worldMatrix
        }
        dispose(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !ee) {
            const He = this.getDescendants(!0);
            for (const ye of He) ye.dispose(ee, ie)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.Bx.notifyObservers(this), this.Bx.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const He of this._behaviors) He.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(ee, ie, He) {
          if (ie.zp)
            for (let ye = 0; ye < ie.zp.length; ye++) {
              const He = ie.zp[ye];
              ee.createAnimationRange(He.name, He.from, He.to)
            }
        }
        getHierarchyBoundingVectors() {
          let ee, ie, He = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            ye = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.Xx().incrementRenderId(), this.computeWorldMatrix(!0);
          const Me = this;
          if (Me.WC && Me.pW) {
            const He = Me.WC();
            ee = He.boundingBox.minimumWorld.clone(), ie = He.boundingBox.maximumWorld.clone()
          } else ee = new be.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), ie = new be.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (He) {
            const He = this.getDescendants(!1);
            for (const Me of He) {
              const He = Me;
              if (He.computeWorldMatrix(!0), ye && !ye(He)) continue;
              if (!He.WC || 0 === He.getTotalVertices()) continue;
              const Ke = He.WC().boundingBox,
                Ue = Ke.minimumWorld,
                Fe = Ke.maximumWorld;
              be.p.CheckExtends(Ue, ee, ie), be.p.CheckExtends(Fe, ee, ie)
            }
          }
          return {
            min: ee,
            max: ie
          }
        }
      }, (() => {
        const be = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ie = [(0, Me.R)()], He = [(0, Me.R)()], Re = [(0, Me.R)()], ke = [(0, Me.R)()], qe = [(0, Me.R)()], (0, ye.i)(null, null, ie, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: ee => "name" in ee,
            get: ee => ee.name,
            set: (ee, ie) => {
              ee.name = ie
            }
          },
          metadata: be
        }, fe, Te), (0, ye.i)(null, null, He, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: ee => "id" in ee,
            get: ee => ee.id,
            set: (ee, ie) => {
              ee.id = ie
            }
          },
          metadata: be
        }, pe, Xe), (0, ye.i)(null, null, Re, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: ee => "uniqueId" in ee,
            get: ee => ee.uniqueId,
            set: (ee, ie) => {
              ee.uniqueId = ie
            }
          },
          metadata: be
        }, ze, Be), (0, ye.i)(null, null, ke, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: ee => "state" in ee,
            get: ee => ee.state,
            set: (ee, ie) => {
              ee.state = ie
            }
          },
          metadata: be
        }, Ee, ge), (0, ye.i)(null, null, qe, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: ee => "metadata" in ee,
            get: ee => ee.metadata,
            set: (ee, ie) => {
              ee.metadata = ie
            }
          },
          metadata: be
        }, Oe, de), be && Object.defineProperty(ee, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: be
        })
      })(), ee._AnimationRangeFactory = (ee, ie, He) => {
        throw (0, Fe.l)("AnimationRange")
      }, ee._NodeConstructors = {}, ee
    })()
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);