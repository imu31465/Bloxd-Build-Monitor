export const id = 259;
export const ids = [259];
export const modules = {
  40355: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Em
    });
    var hm = fm(40113),
      Am = fm(40119),
      am = fm(37185),
      xm = fm(37336),
      wm = fm(40326),
      Dm = fm(40235),
      im = fm(37224),
      Rm = fm(40303),
      pm = fm(40129);
    let Em = (() => {
      var mm, Tm;
      let fm, Em, om, Om, Ym, qm, jm, Vm, Im, Km, Qm, nm, Jm, cm = wm.c,
        zm = [],
        Zm = [],
        km = [],
        bm = [],
        Sm = [],
        em = [],
        Nm = [],
        Gm = [],
        Xm = [],
        Pm = [],
        Hm = [],
        ym = [],
        Cm = [],
        rm = [],
        sm = [],
        lm = [],
        Mm = [],
        um = [],
        Bm = [],
        Lm = [],
        tm = [];
      return mm = class extends cm {
        get range() {
          return this._range
        }
        set range(mm) {
          this._range = mm, this._inverseSquaredRange = 1 / (this.range * this.range)
        }
        get intensityMode() {
          return this._intensityMode
        }
        set intensityMode(mm) {
          this._intensityMode = mm, this._computePhotometricScale()
        }
        get radius() {
          return this._radius
        }
        set radius(mm) {
          this._radius = mm, this._computePhotometricScale()
        }
        get renderPriority() {
          return (0, hm.b)(this, Tm, "f")
        }
        set renderPriority(mm) {
          (0, hm.c)(this, Tm, mm, "f")
        }
        get shadowEnabled() {
          return this._shadowEnabled
        }
        set shadowEnabled(mm) {
          this._shadowEnabled !== mm && (this._shadowEnabled = mm, this._markMeshesAsLightDirty())
        }
        get includedOnlyMeshes() {
          return this._includedOnlyMeshes
        }
        set includedOnlyMeshes(mm) {
          this._includedOnlyMeshes = mm, this._hookArrayForIncludedOnly(mm)
        }
        get excludedMeshes() {
          return this._excludedMeshes
        }
        set excludedMeshes(mm) {
          this._excludedMeshes = mm, this._hookArrayForExcluded(mm)
        }
        get excludeWithLayerMask() {
          return this._excludeWithLayerMask
        }
        set excludeWithLayerMask(mm) {
          this._excludeWithLayerMask = mm, this._resyncMeshes()
        }
        get includeOnlyWithLayerMask() {
          return this._includeOnlyWithLayerMask
        }
        set includeOnlyWithLayerMask(mm) {
          this._includeOnlyWithLayerMask = mm, this._resyncMeshes()
        }
        get lightmapMode() {
          return this._lightmapMode
        }
        set lightmapMode(mm) {
          this._lightmapMode !== mm && (this._lightmapMode = mm, this._markMeshesAsLightDirty())
        }
        getViewMatrix(mm) {
          return null
        }
        getProjectionMatrix(mm, Tm) {
          return null
        }
        constructor(fm, Am, am) {
          super(fm, Am, !1), this.diffuse = ((0, hm.i)(this, zm), (0, hm.i)(this, Zm, new xm.b(1, 1, 1))), this.specular = ((0, hm.i)(this, km), (0, hm.i)(this, bm, new xm.b(1, 1, 1))), this.falloffType = ((0, hm.i)(this, Sm), (0, hm.i)(this, em, mm.FALLOFF_DEFAULT)), this.intensity = ((0, hm.i)(this, Nm), (0, hm.i)(this, Gm, 1)), this._range = ((0, hm.i)(this, Xm), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = mm.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, hm.i)(this, Pm, void 0), Tm.set(this, ((0, hm.i)(this, Hm), (0, hm.i)(this, ym, 0))), this._shadowEnabled = ((0, hm.i)(this, Cm), (0, hm.i)(this, rm, !0)), this._includedOnlyMeshes = (0, hm.i)(this, sm), this._excludeWithLayerMask = (0, hm.i)(this, lm, 0), this._includeOnlyWithLayerMask = ((0, hm.i)(this, Mm), (0, hm.i)(this, um, 0)), this._lightmapMode = ((0, hm.i)(this, Bm), (0, hm.i)(this, Lm, 0)), this._shadowGenerators = ((0, hm.i)(this, tm), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, am || this.wG().addLight(this), this._uniformBuffer = new Dm.e(this.wG().dO(), void 0, void 0, fm), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], am || this._resyncMeshes()
        }
        transferTexturesToEffect(mm, Tm) {
          return this
        }
        _bindLight(mm, Tm, fm, hm) {
          let Am = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const am = mm.toString();
          let wm = !1;
          if (this._uniformBuffer.bindToEffect(fm, "Light" + am), this._renderId !== Tm.getRenderId() || this._lastUseSpecular !== hm || !this._uniformBuffer.useUbo) {
            this._renderId = Tm.getRenderId(), this._lastUseSpecular = hm;
            const mm = this.getScaledIntensity();
            this.transferToEffect(fm, am), this.diffuse.scaleToRef(mm, xm.e.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", xm.e.Color3[0], this.range, am), hm && (this.specular.scaleToRef(mm, xm.e.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", xm.e.Color3[1], this.radius, am)), wm = !0
          }
          if (this.transferTexturesToEffect(fm, am), Tm.shadowsEnabled && this.shadowEnabled && Am) {
            const mm = this.getShadowGenerator(Tm.activeCamera) ?? this.getShadowGenerator();
            mm && (mm.bindShadowLight(am, fm), wm = !0)
          }
          wm ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(mm) {
          let Tm = "Name: " + this.name;
          if (Tm += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let fm = 0; fm < this.animations.length; fm++) Tm += ", animation[0]: " + this.animations[fm].toString(mm);
          return Tm
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.aJ() || this._resyncMeshes()
        }
        Dk(mm) {
          super.Dk(mm), this._resyncMeshes()
        }
        getShadowGenerator() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(mm) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return am.p.Zero()
        }
        canAffectMesh(mm) {
          return !mm || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(mm)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(mm)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & mm.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & mm.layerMask)))
        }
        dispose(mm) {
          let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const mm = this._shadowGenerators.values();
            for (let Tm = mm.next(); !0 !== Tm.done; Tm = mm.next()) {
              Tm.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.wG().stopAnimation(this), this._parentContainer) {
            const mm = this._parentContainer.lights.indexOf(this);
            mm > -1 && this._parentContainer.lights.splice(mm, 1), this._parentContainer = null
          }
          for (const fm of this.wG().meshes) fm._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.wG().removeLight(this), super.dispose(mm, Tm)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(Tm) {
          let fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const hm = mm.GetConstructorFromName(this.getTypeID(), Tm, this.wG());
          if (!hm) return null;
          const Am = pm.d.Clone(hm, this);
          return Tm && (Am.name = Tm), fm && (Am.parent = fm), Am.Dk(this.isEnabled()), this.onClonedObservable.notifyObservers(Am), Am
        }
        serialize() {
          const mm = pm.d.Serialize(this);
          if (mm.uniqueId = this.uniqueId, mm.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(mm), this.excludedMeshes.length > 0) {
            mm.excludedMeshesIds = [];
            for (const Tm of this.excludedMeshes) mm.excludedMeshesIds.push(Tm.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            mm.includedOnlyMeshesIds = [];
            for (const Tm of this.includedOnlyMeshes) mm.includedOnlyMeshesIds.push(Tm.id)
          }
          return pm.d.AppendSerializedAnimations(this, mm), mm.mo = this.serializeAnimationRanges(), mm.isEnabled = this.isEnabled(), mm
        }
        static GetConstructorFromName(mm, Tm, fm) {
          const hm = wm.c.Construct("Light_Type_" + mm, Tm, fm);
          return hm || null
        }
        static Parse(Tm, fm) {
          let hm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Am = mm.GetConstructorFromName(Tm.type, Tm.name, fm);
          if (!Am) return null;
          const am = pm.d.Parse(Am, Tm, fm, hm);
          if (Tm.excludedMeshesIds && (am._excludedMeshesIds = Tm.excludedMeshesIds), Tm.includedOnlyMeshesIds && (am._includedOnlyMeshesIds = Tm.includedOnlyMeshesIds), void 0 !== Tm.parentId && (am._waitingParentId = Tm.parentId), void 0 !== Tm.parentInstanceIndex && (am._waitingParentInstanceIndex = Tm.parentInstanceIndex), void 0 !== Tm.falloffType && (am.falloffType = Tm.falloffType), void 0 !== Tm.lightmapMode && (am.lightmapMode = Tm.lightmapMode), Tm.animations) {
            for (let mm = 0; mm < Tm.animations.length; mm++) {
              const fm = Tm.animations[mm],
                hm = (0, im.c)("BABYLON.Animation");
              hm && am.animations.push(hm.Parse(fm))
            }
            wm.c.ParseAnimationRanges(am, Tm, fm)
          }
          return Tm.autoAnimate && fm.beginAnimation(am, Tm.autoAnimateFrom, Tm.autoAnimateTo, Tm.autoAnimateLoop, Tm.autoAnimateSpeed || 1), void 0 !== Tm.isEnabled && am.Dk(Tm.isEnabled), am._onParsed(Tm, fm, hm), am
        }
        _onParsed(mm, Tm) {}
        _hookArrayForExcluded(mm) {
          var Tm = this;
          const fm = mm.push;
          mm.push = function() {
            for (var hm = arguments.length, Am = new Array(hm), am = 0; am < hm; am++) Am[am] = arguments[am];
            const xm = fm.apply(mm, Am);
            if (Tm._clusteredContainer) return xm;
            for (const mm of Am) mm._resyncLightSource(Tm);
            return xm
          };
          const hm = mm.splice;
          mm.splice = (Tm, fm) => {
            const Am = hm.call(mm, Tm, fm ?? mm.length);
            if (this._clusteredContainer) return Am;
            for (const mm of Am) mm._resyncLightSource(this);
            return Am
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(mm) {
          var Tm = this;
          const fm = mm.push;
          mm.push = function() {
            for (var hm = arguments.length, Am = new Array(hm), am = 0; am < hm; am++) Am[am] = arguments[am];
            const xm = fm.apply(mm, Am);
            return Tm._resyncMeshes(), xm
          };
          const hm = mm.splice;
          mm.splice = (Tm, fm) => {
            const Am = hm.call(mm, Tm, fm ?? mm.length);
            return this._resyncMeshes(), Am
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const mm of this.wG().meshes) mm._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const mm of this.wG().meshes) - 1 !== mm.lightSources.indexOf(this) && mm._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.wG().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let Tm = 0;
          const fm = this.getTypeID();
          let hm = this.intensityMode;
          switch (hm === mm.INTENSITYMODE_AUTOMATIC && (hm = fm === mm.LIGHTTYPEID_DIRECTIONALLIGHT ? mm.INTENSITYMODE_ILLUMINANCE : mm.INTENSITYMODE_LUMINOUSINTENSITY), fm) {
            case mm.LIGHTTYPEID_POINTLIGHT:
            case mm.LIGHTTYPEID_SPOTLIGHT:
              switch (hm) {
                case mm.INTENSITYMODE_LUMINOUSPOWER:
                  Tm = 1 / (4 * Math.PI);
                  break;
                case mm.INTENSITYMODE_LUMINOUSINTENSITY:
                  Tm = 1;
                  break;
                case mm.INTENSITYMODE_LUMINANCE:
                  Tm = this.radius * this.radius
              }
              break;
            case mm.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (hm) {
                case mm.INTENSITYMODE_ILLUMINANCE:
                  Tm = 1;
                  break;
                case mm.INTENSITYMODE_LUMINANCE: {
                  let mm = this.radius;
                  mm = Math.max(mm, .001);
                  Tm = 2 * Math.PI * (1 - Math.cos(mm));
                  break
                }
              }
              break;
            case mm.LIGHTTYPEID_HEMISPHERICLIGHT:
            case mm.LIGHTTYPEID_RECT_AREALIGHT:
              Tm = 1
          }
          return Tm
        }
        _reorderLightsInScene() {
          const mm = this.wG();
          0 != this._renderPriority && (mm.requireLightSorting = !0), this.wG().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, Tm = new WeakMap, (() => {
        const Tm = "function" === typeof Symbol && Symbol.metadata ? Object.create(cm[Symbol.metadata] ?? null) : void 0;
        fm = [(0, Am.k)()], Em = [(0, Am.k)()], om = [(0, Am.J)()], Om = [(0, Am.J)()], Ym = [(0, Am.J)()], qm = [(0, Am.J)()], jm = [(0, Am.J)()], Vm = [(0, Am.J)()], Im = [(0, Am.c)("_reorderLightsInScene")], Km = [(0, Am.J)("shadowEnabled")], Qm = [(0, Am.J)("excludeWithLayerMask")], nm = [(0, Am.J)("includeOnlyWithLayerMask")], Jm = [(0, Am.J)("lightmapMode")], (0, hm.g)(mm, null, Ym, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: mm => "range" in mm,
            get: mm => mm.range
          },
          metadata: Tm
        }, null, zm), (0, hm.g)(mm, null, qm, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: mm => "intensityMode" in mm,
            get: mm => mm.intensityMode
          },
          metadata: Tm
        }, null, zm), (0, hm.g)(mm, null, jm, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: mm => "radius" in mm,
            get: mm => mm.radius
          },
          metadata: Tm
        }, null, zm), (0, hm.g)(mm, null, Im, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: mm => "renderPriority" in mm,
            get: mm => mm.renderPriority,
            set: (mm, Tm) => {
              mm.renderPriority = Tm
            }
          },
          metadata: Tm
        }, ym, Cm), (0, hm.g)(null, null, fm, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: mm => "diffuse" in mm,
            get: mm => mm.diffuse,
            set: (mm, Tm) => {
              mm.diffuse = Tm
            }
          },
          metadata: Tm
        }, Zm, km), (0, hm.g)(null, null, Em, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: mm => "specular" in mm,
            get: mm => mm.specular,
            set: (mm, Tm) => {
              mm.specular = Tm
            }
          },
          metadata: Tm
        }, bm, Sm), (0, hm.g)(null, null, om, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: mm => "falloffType" in mm,
            get: mm => mm.falloffType,
            set: (mm, Tm) => {
              mm.falloffType = Tm
            }
          },
          metadata: Tm
        }, em, Nm), (0, hm.g)(null, null, Om, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: mm => "intensity" in mm,
            get: mm => mm.intensity,
            set: (mm, Tm) => {
              mm.intensity = Tm
            }
          },
          metadata: Tm
        }, Gm, Xm), (0, hm.g)(null, null, Vm, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: mm => "_renderPriority" in mm,
            get: mm => mm._renderPriority,
            set: (mm, Tm) => {
              mm._renderPriority = Tm
            }
          },
          metadata: Tm
        }, Pm, Hm), (0, hm.g)(null, null, Km, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: mm => "_shadowEnabled" in mm,
            get: mm => mm._shadowEnabled,
            set: (mm, Tm) => {
              mm._shadowEnabled = Tm
            }
          },
          metadata: Tm
        }, rm, sm), (0, hm.g)(null, null, Qm, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: mm => "_excludeWithLayerMask" in mm,
            get: mm => mm._excludeWithLayerMask,
            set: (mm, Tm) => {
              mm._excludeWithLayerMask = Tm
            }
          },
          metadata: Tm
        }, lm, Mm), (0, hm.g)(null, null, nm, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: mm => "_includeOnlyWithLayerMask" in mm,
            get: mm => mm._includeOnlyWithLayerMask,
            set: (mm, Tm) => {
              mm._includeOnlyWithLayerMask = Tm
            }
          },
          metadata: Tm
        }, um, Bm), (0, hm.g)(null, null, Jm, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: mm => "_lightmapMode" in mm,
            get: mm => mm._lightmapMode,
            set: (mm, Tm) => {
              mm._lightmapMode = Tm
            }
          },
          metadata: Tm
        }, Lm, tm), Tm && Object.defineProperty(mm, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Tm
        })
      })(), mm.FALLOFF_DEFAULT = Rm.e.FALLOFF_DEFAULT, mm.FALLOFF_PHYSICAL = Rm.e.FALLOFF_PHYSICAL, mm.FALLOFF_GLTF = Rm.e.FALLOFF_GLTF, mm.FALLOFF_STANDARD = Rm.e.FALLOFF_STANDARD, mm.LIGHTMAP_DEFAULT = Rm.e.LIGHTMAP_DEFAULT, mm.LIGHTMAP_SPECULAR = Rm.e.LIGHTMAP_SPECULAR, mm.LIGHTMAP_SHADOWSONLY = Rm.e.LIGHTMAP_SHADOWSONLY, mm.INTENSITYMODE_AUTOMATIC = Rm.e.INTENSITYMODE_AUTOMATIC, mm.INTENSITYMODE_LUMINOUSPOWER = Rm.e.INTENSITYMODE_LUMINOUSPOWER, mm.INTENSITYMODE_LUMINOUSINTENSITY = Rm.e.INTENSITYMODE_LUMINOUSINTENSITY, mm.INTENSITYMODE_ILLUMINANCE = Rm.e.INTENSITYMODE_ILLUMINANCE, mm.INTENSITYMODE_LUMINANCE = Rm.e.INTENSITYMODE_LUMINANCE, mm.LIGHTTYPEID_POINTLIGHT = Rm.e.LIGHTTYPEID_POINTLIGHT, mm.LIGHTTYPEID_DIRECTIONALLIGHT = Rm.e.LIGHTTYPEID_DIRECTIONALLIGHT, mm.LIGHTTYPEID_SPOTLIGHT = Rm.e.LIGHTTYPEID_SPOTLIGHT, mm.LIGHTTYPEID_HEMISPHERICLIGHT = Rm.e.LIGHTTYPEID_HEMISPHERICLIGHT, mm.LIGHTTYPEID_RECT_AREALIGHT = Rm.e.LIGHTTYPEID_RECT_AREALIGHT, mm
    })()
  },
  40326: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => pm
    });
    var hm = fm(40113),
      Am = fm(37185),
      am = fm(40119),
      xm = fm(37203),
      wm = fm(37201),
      Dm = fm(39993),
      im = fm(40129);
    class Rm {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new xm.c, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new xm.c, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let pm = (() => {
      var mm;
      let Tm, fm, pm, Em, om, Om = [],
        Ym = [],
        qm = [],
        jm = [],
        Vm = [],
        Im = [],
        Km = [],
        Qm = [],
        nm = [],
        Jm = [];
      return mm = class {
        static AddNodeConstructor(mm, Tm) {
          this._NodeConstructors[mm] = Tm
        }
        static Construct(mm, Tm, fm, hm) {
          const Am = this._NodeConstructors[mm];
          return Am ? Am(Tm, fm, hm) : null
        }
        set accessibilityTag(mm) {
          this._accessibilityTag = mm, this.onAccessibilityTagChangedObservable.notifyObservers(mm)
        }
        get accessibilityTag() {
          return this._accessibilityTag
        }
        get doNotSerialize() {
          return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
        }
        set doNotSerialize(mm) {
          this._nodeDataStorage._doNotSerialize = mm
        }
        aJ() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(mm) {
          if (this._parentNode === mm) return;
          const Tm = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const Tm = this._parentNode._children.indexOf(this); - 1 !== Tm && this._parentNode._children.splice(Tm, 1), mm || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = mm, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), Tm || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
        }
        get parent() {
          return this._parentNode
        }
        get inheritVisibility() {
          return this._nodeDataStorage._inheritVisibility
        }
        set inheritVisibility(mm) {
          this._nodeDataStorage._inheritVisibility = mm
        }
        get isVisible() {
          return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
        }
        set isVisible(mm) {
          this._nodeDataStorage._isVisible = mm
        }
        _serializeAsParent(mm) {
          mm.parentId = this.uniqueId
        }
        _addToSceneRootNodes() {
          -1 === this._nodeDataStorage._sceneRootNodesIndex && (this._nodeDataStorage._sceneRootNodesIndex = this._scene.rootNodes.length, this._scene.rootNodes.push(this))
        }
        _removeFromSceneRootNodes() {
          if (-1 !== this._nodeDataStorage._sceneRootNodesIndex) {
            const mm = this._scene.rootNodes,
              Tm = mm.length - 1;
            mm[this._nodeDataStorage._sceneRootNodesIndex] = mm[Tm], mm[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
          }
        }
        get animationPropertiesOverride() {
          return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
        }
        set animationPropertiesOverride(mm) {
          this._animationPropertiesOverride = mm
        }
        getClassName() {
          return "Node"
        }
        set onDispose(mm) {
          this._onDisposeObserver && this.iG.remove(this._onDisposeObserver), this._onDisposeObserver = this.iG.add(mm)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var mm;
          return (mm = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (mm._onEffectiveEnabledStateChangedObservable = new xm.c)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(mm) {
          let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            fm = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new Rm, this.name = (0, hm.i)(this, Om, void 0), this.id = ((0, hm.i)(this, Ym), (0, hm.i)(this, qm, void 0)), this.uniqueId = ((0, hm.i)(this, jm), (0, hm.i)(this, Vm, void 0)), this.state = ((0, hm.i)(this, Im), (0, hm.i)(this, Km, "")), this.metadata = ((0, hm.i)(this, Qm), (0, hm.i)(this, nm, null)), this._internalMetadata = (0, hm.i)(this, Jm), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new xm.c, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = Am.e.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.iG = new xm.c, this._onDisposeObserver = null, this._behaviors = new Array, this.name = mm, this.id = mm, this._scene = Tm || wm.c.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), fm && this._addToSceneRootNodes()
        }
        wG() {
          return this._scene
        }
        dO() {
          return this._scene.dO()
        }
        addBehavior(mm) {
          let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(mm) || (mm.init(), this._scene.isLoading && !Tm ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(mm) && mm.attach(this)
          })) : mm.attach(this), this._behaviors.push(mm)), this
        }
        removeBehavior(mm) {
          const Tm = this._behaviors.indexOf(mm);
          return -1 === Tm || (this._behaviors.splice(Tm, 1), mm.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(mm) {
          for (const Tm of this._behaviors)
            if (Tm.name === mm) return Tm;
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
        updateCache(mm) {
          !mm && this.isSynchronized() || this._updateCache()
        }
        _getActionManagerForTrigger(mm) {
          return this.parent ? this.parent._getActionManagerForTrigger(mm, !1) : null
        }
        _updateCache(mm) {}
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
        HTm(mm) {
          return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this
        }
        isEnabled() {
          return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled
        }
        _hasEffectiveEnabledStateObservers() {
          const mm = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
          return !!mm && mm.hasObservers()
        }
        _syncParentEnabledState() {
          const mm = this._hasEffectiveEnabledStateObservers(),
            Tm = mm ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const fm of this._children) fm._syncParentEnabledState();
          if (mm) {
            const mm = this.isEnabled();
            mm !== Tm && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(mm)
          }
        }
        Dk(mm) {
          if (this._nodeDataStorage._isEnabled === mm) return;
          const Tm = this._hasEffectiveEnabledStateObservers(),
            fm = Tm ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = mm, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(mm), Tm) {
            const mm = this.isEnabled();
            mm !== fm && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(mm)
          }
        }
        isDescendantOf(mm) {
          return !!this.parent && (this.parent === mm || this.parent.isDescendantOf(mm))
        }
        _getDescendants(mm) {
          let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            fm = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let hm = 0; hm < this._children.length; hm++) {
              const Am = this._children[hm];
              fm && !fm(Am) || mm.push(Am), Tm || Am._getDescendants(mm, !1, fm)
            }
        }
        getDescendants(mm, Tm) {
          const fm = [];
          return this._getDescendants(fm, mm, Tm), fm
        }
        getChildMeshes(mm, Tm) {
          const fm = [];
          return this._getDescendants(fm, mm, (mm => (!Tm || Tm(mm)) && void 0 !== mm.cullingStrategy)), fm
        }
        getChildren(mm) {
          let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(Tm, mm)
        }
        _setReady(mm) {
          mm !== this._nodeDataStorage._isReady && (mm ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(mm) {
          for (let Tm = 0; Tm < this.animations.length; Tm++) {
            const fm = this.animations[Tm];
            if (fm.name === mm) return fm
          }
          return null
        }
        createAnimationRange(Tm, fm, hm) {
          if (!this._ranges[Tm]) {
            this._ranges[Tm] = mm._AnimationRangeFactory(Tm, fm, hm);
            for (let mm = 0, Am = this.animations.length; mm < Am; mm++) this.animations[mm] && this.animations[mm].createRange(Tm, fm, hm)
          }
        }
        deleteAnimationRange(mm) {
          let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let fm = 0, hm = this.animations.length; fm < hm; fm++) this.animations[fm] && this.animations[fm].deleteRange(mm, Tm);
          this._ranges[mm] = null
        }
        getAnimationRange(mm) {
          return this._ranges[mm] || null
        }
        clone(Tm, fm, hm) {
          const Am = im.d.Clone((() => new mm(Tm, this.wG())), this);
          if (fm && (Am.parent = fm), !hm) {
            const mm = this.getDescendants(!0);
            for (let fm = 0; fm < mm.length; fm++) {
              const hm = mm[fm];
              hm.clone(Tm + "." + hm.name, Am)
            }
          }
          return Am
        }
        getAnimationRanges() {
          const mm = [];
          let Tm;
          for (Tm in this._ranges) mm.push(this._ranges[Tm]);
          return mm
        }
        beginAnimation(mm, Tm, fm, hm) {
          const Am = this.getAnimationRange(mm);
          return Am ? this._scene.beginAnimation(this, Am.from, Am.to, Tm, fm, hm) : null
        }
        serializeAnimationRanges() {
          const mm = [];
          for (const Tm in this._ranges) {
            const fm = this._ranges[Tm];
            if (!fm) continue;
            const hm = {};
            hm.name = Tm, hm.from = fm.from, hm.to = fm.to, mm.push(hm)
          }
          return mm
        }
        computeWorldMatrix(mm) {
          return this._worldMatrix || (this._worldMatrix = Am.e.Identity()), this._worldMatrix
        }
        dispose(mm) {
          let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !mm) {
            const fm = this.getDescendants(!0);
            for (const hm of fm) hm.dispose(mm, Tm)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.iG.notifyObservers(this), this.iG.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const fm of this._behaviors) fm.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(mm, Tm, fm) {
          if (Tm.mo)
            for (let hm = 0; hm < Tm.mo.length; hm++) {
              const fm = Tm.mo[hm];
              mm.createAnimationRange(fm.name, fm.from, fm.to)
            }
        }
        getHierarchyBoundingVectors() {
          let mm, Tm, fm = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            hm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.wG().incrementRenderId(), this.computeWorldMatrix(!0);
          const am = this;
          if (am.DH && am.jK) {
            const fm = am.DH();
            mm = fm.boundingBox.minimumWorld.clone(), Tm = fm.boundingBox.maximumWorld.clone()
          } else mm = new Am.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), Tm = new Am.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (fm) {
            const fm = this.getDescendants(!1);
            for (const am of fm) {
              const fm = am;
              if (fm.computeWorldMatrix(!0), hm && !hm(fm)) continue;
              if (!fm.DH || 0 === fm.getTotalVertices()) continue;
              const xm = fm.DH().boundingBox,
                wm = xm.minimumWorld,
                Dm = xm.maximumWorld;
              Am.p.CheckExtends(wm, mm, Tm), Am.p.CheckExtends(Dm, mm, Tm)
            }
          }
          return {
            min: mm,
            max: Tm
          }
        }
      }, (() => {
        const Am = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Tm = [(0, am.J)()], fm = [(0, am.J)()], pm = [(0, am.J)()], Em = [(0, am.J)()], om = [(0, am.J)()], (0, hm.g)(null, null, Tm, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: mm => "name" in mm,
            get: mm => mm.name,
            set: (mm, Tm) => {
              mm.name = Tm
            }
          },
          metadata: Am
        }, Om, Ym), (0, hm.g)(null, null, fm, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: mm => "id" in mm,
            get: mm => mm.id,
            set: (mm, Tm) => {
              mm.id = Tm
            }
          },
          metadata: Am
        }, qm, jm), (0, hm.g)(null, null, pm, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: mm => "uniqueId" in mm,
            get: mm => mm.uniqueId,
            set: (mm, Tm) => {
              mm.uniqueId = Tm
            }
          },
          metadata: Am
        }, Vm, Im), (0, hm.g)(null, null, Em, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: mm => "state" in mm,
            get: mm => mm.state,
            set: (mm, Tm) => {
              mm.state = Tm
            }
          },
          metadata: Am
        }, Km, Qm), (0, hm.g)(null, null, om, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: mm => "metadata" in mm,
            get: mm => mm.metadata,
            set: (mm, Tm) => {
              mm.metadata = Tm
            }
          },
          metadata: Am
        }, nm, Jm), Am && Object.defineProperty(mm, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Am
        })
      })(), mm._AnimationRangeFactory = (mm, Tm, fm) => {
        throw (0, Dm.i)("AnimationRange")
      }, mm._NodeConstructors = {}, mm
    })()
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);