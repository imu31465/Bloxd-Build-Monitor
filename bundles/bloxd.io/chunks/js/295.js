export const id = 295;
export const ids = [295];
export const modules = {
  42094: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => mr
    });
    var Zr = Qr(41872),
      Wr = Qr(41875),
      ar = Qr(38560),
      jr = Qr(38684),
      Ir = Qr(42060),
      fr = Qr(41987),
      Er = Qr(38609),
      pr = Qr(42044),
      xr = Qr(41889);
    let mr = (() => {
      var rr, Sr;
      let Qr, mr, Nr, Ur, tr, hr, zr, Yr, nr, er, Kr, yr, Br, Tr = Ir.c,
        vr = [],
        Or = [],
        Lr = [],
        lr = [],
        Xr = [],
        Pr = [],
        Hr = [],
        qr = [],
        Rr = [],
        gr = [],
        Cr = [],
        Mr = [],
        Gr = [],
        kr = [],
        Ar = [],
        Vr = [],
        ir = [],
        wr = [],
        cr = [],
        Fr = [],
        or = [];
      return rr = class extends Tr {
        get range() {
          return this._range
        }
        set range(rr) {
          this._range = rr, this._inverseSquaredRange = 1 / (this.range * this.range)
        }
        get intensityMode() {
          return this._intensityMode
        }
        set intensityMode(rr) {
          this._intensityMode = rr, this._computePhotometricScale()
        }
        get radius() {
          return this._radius
        }
        set radius(rr) {
          this._radius = rr, this._computePhotometricScale()
        }
        get renderPriority() {
          return (0, Zr.e)(this, Sr, "f")
        }
        set renderPriority(rr) {
          (0, Zr.i)(this, Sr, rr, "f")
        }
        get shadowEnabled() {
          return this._shadowEnabled
        }
        set shadowEnabled(rr) {
          this._shadowEnabled !== rr && (this._shadowEnabled = rr, this._markMeshesAsLightDirty())
        }
        get includedOnlyMeshes() {
          return this._includedOnlyMeshes
        }
        set includedOnlyMeshes(rr) {
          this._includedOnlyMeshes = rr, this._hookArrayForIncludedOnly(rr)
        }
        get excludedMeshes() {
          return this._excludedMeshes
        }
        set excludedMeshes(rr) {
          this._excludedMeshes = rr, this._hookArrayForExcluded(rr)
        }
        get excludeWithLayerMask() {
          return this._excludeWithLayerMask
        }
        set excludeWithLayerMask(rr) {
          this._excludeWithLayerMask = rr, this._resyncMeshes()
        }
        get includeOnlyWithLayerMask() {
          return this._includeOnlyWithLayerMask
        }
        set includeOnlyWithLayerMask(rr) {
          this._includeOnlyWithLayerMask = rr, this._resyncMeshes()
        }
        get lightmapMode() {
          return this._lightmapMode
        }
        set lightmapMode(rr) {
          this._lightmapMode !== rr && (this._lightmapMode = rr, this._markMeshesAsLightDirty())
        }
        getViewMatrix(rr) {
          return null
        }
        getProjectionMatrix(rr, Sr) {
          return null
        }
        constructor(Qr, Wr, ar) {
          super(Qr, Wr, !1), this.diffuse = ((0, Zr.m)(this, vr), (0, Zr.m)(this, Or, new jr.e(1, 1, 1))), this.specular = ((0, Zr.m)(this, Lr), (0, Zr.m)(this, lr, new jr.e(1, 1, 1))), this.falloffType = ((0, Zr.m)(this, Xr), (0, Zr.m)(this, Pr, rr.FALLOFF_DEFAULT)), this.intensity = ((0, Zr.m)(this, Hr), (0, Zr.m)(this, qr, 1)), this._range = ((0, Zr.m)(this, Rr), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = rr.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, Zr.m)(this, gr, void 0), Sr.set(this, ((0, Zr.m)(this, Cr), (0, Zr.m)(this, Mr, 0))), this._shadowEnabled = ((0, Zr.m)(this, Gr), (0, Zr.m)(this, kr, !0)), this._includedOnlyMeshes = (0, Zr.m)(this, Ar), this._excludeWithLayerMask = (0, Zr.m)(this, Vr, 0), this._includeOnlyWithLayerMask = ((0, Zr.m)(this, ir), (0, Zr.m)(this, wr, 0)), this._lightmapMode = ((0, Zr.m)(this, cr), (0, Zr.m)(this, Fr, 0)), this._shadowGenerators = ((0, Zr.m)(this, or), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, ar || this.eC().addLight(this), this._uniformBuffer = new fr.d(this.eC().MU(), void 0, void 0, Qr), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], ar || this._resyncMeshes()
        }
        transferTexturesToEffect(rr, Sr) {
          return this
        }
        _bindLight(rr, Sr, Qr, Zr) {
          let Wr = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const ar = rr.toString();
          let Ir = !1;
          if (this._uniformBuffer.bindToEffect(Qr, "Light" + ar), this._renderId !== Sr.getRenderId() || this._lastUseSpecular !== Zr || !this._uniformBuffer.useUbo) {
            this._renderId = Sr.getRenderId(), this._lastUseSpecular = Zr;
            const rr = this.getScaledIntensity();
            this.transferToEffect(Qr, ar), this.diffuse.scaleToRef(rr, jr.l.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", jr.l.Color3[0], this.range, ar), Zr && (this.specular.scaleToRef(rr, jr.l.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", jr.l.Color3[1], this.radius, ar)), Ir = !0
          }
          if (this.transferTexturesToEffect(Qr, ar), Sr.shadowsEnabled && this.shadowEnabled && Wr) {
            const rr = this.getShadowGenerator(Sr.activeCamera) ?? this.getShadowGenerator();
            rr && (rr.bindShadowLight(ar, Qr), Ir = !0)
          }
          Ir ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(rr) {
          let Sr = "Name: " + this.name;
          if (Sr += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let Qr = 0; Qr < this.animations.length; Qr++) Sr += ", animation[0]: " + this.animations[Qr].toString(rr);
          return Sr
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.Dv() || this._resyncMeshes()
        }
        VK(rr) {
          super.VK(rr), this._resyncMeshes()
        }
        getShadowGenerator() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(rr) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return ar.u.Zero()
        }
        canAffectMesh(rr) {
          return !rr || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(rr)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(rr)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & rr.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & rr.layerMask)))
        }
        dispose(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const rr = this._shadowGenerators.values();
            for (let Sr = rr.next(); !0 !== Sr.done; Sr = rr.next()) {
              Sr.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.eC().stopAnimation(this), this._parentContainer) {
            const rr = this._parentContainer.lights.indexOf(this);
            rr > -1 && this._parentContainer.lights.splice(rr, 1), this._parentContainer = null
          }
          for (const Qr of this.eC().meshes) Qr._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.eC().removeLight(this), super.dispose(rr, Sr)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(Sr) {
          let Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Zr = rr.GetConstructorFromName(this.getTypeID(), Sr, this.eC());
          if (!Zr) return null;
          const Wr = xr.e.Clone(Zr, this);
          return Sr && (Wr.name = Sr), Qr && (Wr.parent = Qr), Wr.VK(this.isEnabled()), this.onClonedObservable.notifyObservers(Wr), Wr
        }
        serialize() {
          const rr = xr.e.Serialize(this);
          if (rr.uniqueId = this.uniqueId, rr.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(rr), this.excludedMeshes.length > 0) {
            rr.excludedMeshesIds = [];
            for (const Sr of this.excludedMeshes) rr.excludedMeshesIds.push(Sr.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            rr.includedOnlyMeshesIds = [];
            for (const Sr of this.includedOnlyMeshes) rr.includedOnlyMeshesIds.push(Sr.id)
          }
          return xr.e.AppendSerializedAnimations(this, rr), rr.yh = this.serializeAnimationRanges(), rr.isEnabled = this.isEnabled(), rr
        }
        static GetConstructorFromName(rr, Sr, Qr) {
          const Zr = Ir.c.Construct("Light_Type_" + rr, Sr, Qr);
          return Zr || null
        }
        static Parse(Sr, Qr) {
          let Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Wr = rr.GetConstructorFromName(Sr.type, Sr.name, Qr);
          if (!Wr) return null;
          const ar = xr.e.Parse(Wr, Sr, Qr, Zr);
          if (Sr.excludedMeshesIds && (ar._excludedMeshesIds = Sr.excludedMeshesIds), Sr.includedOnlyMeshesIds && (ar._includedOnlyMeshesIds = Sr.includedOnlyMeshesIds), void 0 !== Sr.parentId && (ar._waitingParentId = Sr.parentId), void 0 !== Sr.parentInstanceIndex && (ar._waitingParentInstanceIndex = Sr.parentInstanceIndex), void 0 !== Sr.falloffType && (ar.falloffType = Sr.falloffType), void 0 !== Sr.lightmapMode && (ar.lightmapMode = Sr.lightmapMode), Sr.animations) {
            for (let rr = 0; rr < Sr.animations.length; rr++) {
              const Qr = Sr.animations[rr],
                Zr = (0, Er.d)("BABYLON.Animation");
              Zr && ar.animations.push(Zr.Parse(Qr))
            }
            Ir.c.ParseAnimationRanges(ar, Sr, Qr)
          }
          return Sr.autoAnimate && Qr.beginAnimation(ar, Sr.autoAnimateFrom, Sr.autoAnimateTo, Sr.autoAnimateLoop, Sr.autoAnimateSpeed || 1), void 0 !== Sr.isEnabled && ar.VK(Sr.isEnabled), ar._onParsed(Sr, Qr, Zr), ar
        }
        _onParsed(rr, Sr) {}
        _hookArrayForExcluded(rr) {
          var Sr = this;
          const Qr = rr.push;
          rr.push = function() {
            for (var Zr = arguments.length, Wr = new Array(Zr), ar = 0; ar < Zr; ar++) Wr[ar] = arguments[ar];
            const jr = Qr.apply(rr, Wr);
            if (Sr._clusteredContainer) return jr;
            for (const rr of Wr) rr._resyncLightSource(Sr);
            return jr
          };
          const Zr = rr.splice;
          rr.splice = (Sr, Qr) => {
            const Wr = Zr.call(rr, Sr, Qr ?? rr.length);
            if (this._clusteredContainer) return Wr;
            for (const rr of Wr) rr._resyncLightSource(this);
            return Wr
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(rr) {
          var Sr = this;
          const Qr = rr.push;
          rr.push = function() {
            for (var Zr = arguments.length, Wr = new Array(Zr), ar = 0; ar < Zr; ar++) Wr[ar] = arguments[ar];
            const jr = Qr.apply(rr, Wr);
            return Sr._resyncMeshes(), jr
          };
          const Zr = rr.splice;
          rr.splice = (Sr, Qr) => {
            const Wr = Zr.call(rr, Sr, Qr ?? rr.length);
            return this._resyncMeshes(), Wr
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const rr of this.eC().meshes) rr._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const rr of this.eC().meshes) - 1 !== rr.lightSources.indexOf(this) && rr._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.eC().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let Sr = 0;
          const Qr = this.getTypeID();
          let Zr = this.intensityMode;
          switch (Zr === rr.INTENSITYMODE_AUTOMATIC && (Zr = Qr === rr.LIGHTTYPEID_DIRECTIONALLIGHT ? rr.INTENSITYMODE_ILLUMINANCE : rr.INTENSITYMODE_LUMINOUSINTENSITY), Qr) {
            case rr.LIGHTTYPEID_POINTLIGHT:
            case rr.LIGHTTYPEID_SPOTLIGHT:
              switch (Zr) {
                case rr.INTENSITYMODE_LUMINOUSPOWER:
                  Sr = 1 / (4 * Math.PI);
                  break;
                case rr.INTENSITYMODE_LUMINOUSINTENSITY:
                  Sr = 1;
                  break;
                case rr.INTENSITYMODE_LUMINANCE:
                  Sr = this.radius * this.radius
              }
              break;
            case rr.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (Zr) {
                case rr.INTENSITYMODE_ILLUMINANCE:
                  Sr = 1;
                  break;
                case rr.INTENSITYMODE_LUMINANCE: {
                  let rr = this.radius;
                  rr = Math.max(rr, .001);
                  Sr = 2 * Math.PI * (1 - Math.cos(rr));
                  break
                }
              }
              break;
            case rr.LIGHTTYPEID_HEMISPHERICLIGHT:
            case rr.LIGHTTYPEID_RECT_AREALIGHT:
              Sr = 1
          }
          return Sr
        }
        _reorderLightsInScene() {
          const rr = this.eC();
          0 != this._renderPriority && (rr.requireLightSorting = !0), this.eC().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, Sr = new WeakMap, (() => {
        const Sr = "function" === typeof Symbol && Symbol.metadata ? Object.create(Tr[Symbol.metadata] ?? null) : void 0;
        Qr = [(0, Wr.n)()], mr = [(0, Wr.n)()], Nr = [(0, Wr.G)()], Ur = [(0, Wr.G)()], tr = [(0, Wr.G)()], hr = [(0, Wr.G)()], zr = [(0, Wr.G)()], Yr = [(0, Wr.G)()], nr = [(0, Wr.f)("_reorderLightsInScene")], er = [(0, Wr.G)("shadowEnabled")], Kr = [(0, Wr.G)("excludeWithLayerMask")], yr = [(0, Wr.G)("includeOnlyWithLayerMask")], Br = [(0, Wr.G)("lightmapMode")], (0, Zr.k)(rr, null, tr, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: rr => "range" in rr,
            get: rr => rr.range
          },
          metadata: Sr
        }, null, vr), (0, Zr.k)(rr, null, hr, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: rr => "intensityMode" in rr,
            get: rr => rr.intensityMode
          },
          metadata: Sr
        }, null, vr), (0, Zr.k)(rr, null, zr, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: rr => "radius" in rr,
            get: rr => rr.radius
          },
          metadata: Sr
        }, null, vr), (0, Zr.k)(rr, null, nr, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: rr => "renderPriority" in rr,
            get: rr => rr.renderPriority,
            set: (rr, Sr) => {
              rr.renderPriority = Sr
            }
          },
          metadata: Sr
        }, Mr, Gr), (0, Zr.k)(null, null, Qr, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: rr => "diffuse" in rr,
            get: rr => rr.diffuse,
            set: (rr, Sr) => {
              rr.diffuse = Sr
            }
          },
          metadata: Sr
        }, Or, Lr), (0, Zr.k)(null, null, mr, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: rr => "specular" in rr,
            get: rr => rr.specular,
            set: (rr, Sr) => {
              rr.specular = Sr
            }
          },
          metadata: Sr
        }, lr, Xr), (0, Zr.k)(null, null, Nr, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: rr => "falloffType" in rr,
            get: rr => rr.falloffType,
            set: (rr, Sr) => {
              rr.falloffType = Sr
            }
          },
          metadata: Sr
        }, Pr, Hr), (0, Zr.k)(null, null, Ur, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: rr => "intensity" in rr,
            get: rr => rr.intensity,
            set: (rr, Sr) => {
              rr.intensity = Sr
            }
          },
          metadata: Sr
        }, qr, Rr), (0, Zr.k)(null, null, Yr, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: rr => "_renderPriority" in rr,
            get: rr => rr._renderPriority,
            set: (rr, Sr) => {
              rr._renderPriority = Sr
            }
          },
          metadata: Sr
        }, gr, Cr), (0, Zr.k)(null, null, er, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: rr => "_shadowEnabled" in rr,
            get: rr => rr._shadowEnabled,
            set: (rr, Sr) => {
              rr._shadowEnabled = Sr
            }
          },
          metadata: Sr
        }, kr, Ar), (0, Zr.k)(null, null, Kr, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: rr => "_excludeWithLayerMask" in rr,
            get: rr => rr._excludeWithLayerMask,
            set: (rr, Sr) => {
              rr._excludeWithLayerMask = Sr
            }
          },
          metadata: Sr
        }, Vr, ir), (0, Zr.k)(null, null, yr, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: rr => "_includeOnlyWithLayerMask" in rr,
            get: rr => rr._includeOnlyWithLayerMask,
            set: (rr, Sr) => {
              rr._includeOnlyWithLayerMask = Sr
            }
          },
          metadata: Sr
        }, wr, cr), (0, Zr.k)(null, null, Br, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: rr => "_lightmapMode" in rr,
            get: rr => rr._lightmapMode,
            set: (rr, Sr) => {
              rr._lightmapMode = Sr
            }
          },
          metadata: Sr
        }, Fr, or), Sr && Object.defineProperty(rr, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Sr
        })
      })(), rr.FALLOFF_DEFAULT = pr.b.FALLOFF_DEFAULT, rr.FALLOFF_PHYSICAL = pr.b.FALLOFF_PHYSICAL, rr.FALLOFF_GLTF = pr.b.FALLOFF_GLTF, rr.FALLOFF_STANDARD = pr.b.FALLOFF_STANDARD, rr.LIGHTMAP_DEFAULT = pr.b.LIGHTMAP_DEFAULT, rr.LIGHTMAP_SPECULAR = pr.b.LIGHTMAP_SPECULAR, rr.LIGHTMAP_SHADOWSONLY = pr.b.LIGHTMAP_SHADOWSONLY, rr.INTENSITYMODE_AUTOMATIC = pr.b.INTENSITYMODE_AUTOMATIC, rr.INTENSITYMODE_LUMINOUSPOWER = pr.b.INTENSITYMODE_LUMINOUSPOWER, rr.INTENSITYMODE_LUMINOUSINTENSITY = pr.b.INTENSITYMODE_LUMINOUSINTENSITY, rr.INTENSITYMODE_ILLUMINANCE = pr.b.INTENSITYMODE_ILLUMINANCE, rr.INTENSITYMODE_LUMINANCE = pr.b.INTENSITYMODE_LUMINANCE, rr.LIGHTTYPEID_POINTLIGHT = pr.b.LIGHTTYPEID_POINTLIGHT, rr.LIGHTTYPEID_DIRECTIONALLIGHT = pr.b.LIGHTTYPEID_DIRECTIONALLIGHT, rr.LIGHTTYPEID_SPOTLIGHT = pr.b.LIGHTTYPEID_SPOTLIGHT, rr.LIGHTTYPEID_HEMISPHERICLIGHT = pr.b.LIGHTTYPEID_HEMISPHERICLIGHT, rr.LIGHTTYPEID_RECT_AREALIGHT = pr.b.LIGHTTYPEID_RECT_AREALIGHT, rr
    })()
  },
  42060: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => xr
    });
    var Zr = Qr(41872),
      Wr = Qr(38560),
      ar = Qr(41875),
      jr = Qr(38595),
      Ir = Qr(38587),
      fr = Qr(41769),
      Er = Qr(41889);
    class pr {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new jr.d, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new jr.d, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let xr = (() => {
      var rr;
      let Sr, Qr, xr, mr, Nr, Ur = [],
        tr = [],
        hr = [],
        zr = [],
        Yr = [],
        nr = [],
        er = [],
        Kr = [],
        yr = [],
        Br = [];
      return rr = class {
        static AddNodeConstructor(rr, Sr) {
          this._NodeConstructors[rr] = Sr
        }
        static Construct(rr, Sr, Qr, Zr) {
          const Wr = this._NodeConstructors[rr];
          return Wr ? Wr(Sr, Qr, Zr) : null
        }
        set accessibilityTag(rr) {
          this._accessibilityTag = rr, this.onAccessibilityTagChangedObservable.notifyObservers(rr)
        }
        get accessibilityTag() {
          return this._accessibilityTag
        }
        get doNotSerialize() {
          return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
        }
        set doNotSerialize(rr) {
          this._nodeDataStorage._doNotSerialize = rr
        }
        Dv() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(rr) {
          if (this._parentNode === rr) return;
          const Sr = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const Sr = this._parentNode._children.indexOf(this); - 1 !== Sr && this._parentNode._children.splice(Sr, 1), rr || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = rr, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), Sr || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
        }
        get parent() {
          return this._parentNode
        }
        get inheritVisibility() {
          return this._nodeDataStorage._inheritVisibility
        }
        set inheritVisibility(rr) {
          this._nodeDataStorage._inheritVisibility = rr
        }
        get isVisible() {
          return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
        }
        set isVisible(rr) {
          this._nodeDataStorage._isVisible = rr
        }
        _serializeAsParent(rr) {
          rr.parentId = this.uniqueId
        }
        _addToSceneRootNodes() {
          -1 === this._nodeDataStorage._sceneRootNodesIndex && (this._nodeDataStorage._sceneRootNodesIndex = this._scene.rootNodes.length, this._scene.rootNodes.push(this))
        }
        _removeFromSceneRootNodes() {
          if (-1 !== this._nodeDataStorage._sceneRootNodesIndex) {
            const rr = this._scene.rootNodes,
              Sr = rr.length - 1;
            rr[this._nodeDataStorage._sceneRootNodesIndex] = rr[Sr], rr[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
          }
        }
        get animationPropertiesOverride() {
          return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
        }
        set animationPropertiesOverride(rr) {
          this._animationPropertiesOverride = rr
        }
        getClassName() {
          return "Node"
        }
        set onDispose(rr) {
          this._onDisposeObserver && this.lC.remove(this._onDisposeObserver), this._onDisposeObserver = this.lC.add(rr)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var rr;
          return (rr = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (rr._onEffectiveEnabledStateChangedObservable = new jr.d)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new pr, this.name = (0, Zr.m)(this, Ur, void 0), this.id = ((0, Zr.m)(this, tr), (0, Zr.m)(this, hr, void 0)), this.uniqueId = ((0, Zr.m)(this, zr), (0, Zr.m)(this, Yr, void 0)), this.state = ((0, Zr.m)(this, nr), (0, Zr.m)(this, er, "")), this.metadata = ((0, Zr.m)(this, Kr), (0, Zr.m)(this, yr, null)), this._internalMetadata = (0, Zr.m)(this, Br), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new jr.d, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = Wr.d.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.lC = new jr.d, this._onDisposeObserver = null, this._behaviors = new Array, this.name = rr, this.id = rr, this._scene = Sr || Ir.b.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), Qr && this._addToSceneRootNodes()
        }
        eC() {
          return this._scene
        }
        MU() {
          return this._scene.MU()
        }
        addBehavior(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(rr) || (rr.init(), this._scene.isLoading && !Sr ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(rr) && rr.attach(this)
          })) : rr.attach(this), this._behaviors.push(rr)), this
        }
        removeBehavior(rr) {
          const Sr = this._behaviors.indexOf(rr);
          return -1 === Sr || (this._behaviors.splice(Sr, 1), rr.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(rr) {
          for (const Sr of this._behaviors)
            if (Sr.name === rr) return Sr;
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
        updateCache(rr) {
          !rr && this.isSynchronized() || this._updateCache()
        }
        _getActionManagerForTrigger(rr) {
          return this.parent ? this.parent._getActionManagerForTrigger(rr, !1) : null
        }
        _updateCache(rr) {}
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
        BQr(rr) {
          return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this
        }
        isEnabled() {
          return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled
        }
        _hasEffectiveEnabledStateObservers() {
          const rr = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
          return !!rr && rr.hasObservers()
        }
        _syncParentEnabledState() {
          const rr = this._hasEffectiveEnabledStateObservers(),
            Sr = rr ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const Qr of this._children) Qr._syncParentEnabledState();
          if (rr) {
            const rr = this.isEnabled();
            rr !== Sr && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(rr)
          }
        }
        VK(rr) {
          if (this._nodeDataStorage._isEnabled === rr) return;
          const Sr = this._hasEffectiveEnabledStateObservers(),
            Qr = Sr ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = rr, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(rr), Sr) {
            const rr = this.isEnabled();
            rr !== Qr && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(rr)
          }
        }
        isDescendantOf(rr) {
          return !!this.parent && (this.parent === rr || this.parent.isDescendantOf(rr))
        }
        _getDescendants(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Qr = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let Zr = 0; Zr < this._children.length; Zr++) {
              const Wr = this._children[Zr];
              Qr && !Qr(Wr) || rr.push(Wr), Sr || Wr._getDescendants(rr, !1, Qr)
            }
        }
        getDescendants(rr, Sr) {
          const Qr = [];
          return this._getDescendants(Qr, rr, Sr), Qr
        }
        getChildMeshes(rr, Sr) {
          const Qr = [];
          return this._getDescendants(Qr, rr, (rr => (!Sr || Sr(rr)) && void 0 !== rr.cullingStrategy)), Qr
        }
        getChildren(rr) {
          let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(Sr, rr)
        }
        _setReady(rr) {
          rr !== this._nodeDataStorage._isReady && (rr ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(rr) {
          for (let Sr = 0; Sr < this.animations.length; Sr++) {
            const Qr = this.animations[Sr];
            if (Qr.name === rr) return Qr
          }
          return null
        }
        createAnimationRange(Sr, Qr, Zr) {
          if (!this._ranges[Sr]) {
            this._ranges[Sr] = rr._AnimationRangeFactory(Sr, Qr, Zr);
            for (let rr = 0, Wr = this.animations.length; rr < Wr; rr++) this.animations[rr] && this.animations[rr].createRange(Sr, Qr, Zr)
          }
        }
        deleteAnimationRange(rr) {
          let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let Qr = 0, Zr = this.animations.length; Qr < Zr; Qr++) this.animations[Qr] && this.animations[Qr].deleteRange(rr, Sr);
          this._ranges[rr] = null
        }
        getAnimationRange(rr) {
          return this._ranges[rr] || null
        }
        clone(Sr, Qr, Zr) {
          const Wr = Er.e.Clone((() => new rr(Sr, this.eC())), this);
          if (Qr && (Wr.parent = Qr), !Zr) {
            const rr = this.getDescendants(!0);
            for (let Qr = 0; Qr < rr.length; Qr++) {
              const Zr = rr[Qr];
              Zr.clone(Sr + "." + Zr.name, Wr)
            }
          }
          return Wr
        }
        getAnimationRanges() {
          const rr = [];
          let Sr;
          for (Sr in this._ranges) rr.push(this._ranges[Sr]);
          return rr
        }
        beginAnimation(rr, Sr, Qr, Zr) {
          const Wr = this.getAnimationRange(rr);
          return Wr ? this._scene.beginAnimation(this, Wr.from, Wr.to, Sr, Qr, Zr) : null
        }
        serializeAnimationRanges() {
          const rr = [];
          for (const Sr in this._ranges) {
            const Qr = this._ranges[Sr];
            if (!Qr) continue;
            const Zr = {};
            Zr.name = Sr, Zr.from = Qr.from, Zr.to = Qr.to, rr.push(Zr)
          }
          return rr
        }
        computeWorldMatrix(rr) {
          return this._worldMatrix || (this._worldMatrix = Wr.d.Identity()), this._worldMatrix
        }
        dispose(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !rr) {
            const Qr = this.getDescendants(!0);
            for (const Zr of Qr) Zr.dispose(rr, Sr)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.lC.notifyObservers(this), this.lC.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const Qr of this._behaviors) Qr.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(rr, Sr, Qr) {
          if (Sr.yh)
            for (let Zr = 0; Zr < Sr.yh.length; Zr++) {
              const Qr = Sr.yh[Zr];
              rr.createAnimationRange(Qr.name, Qr.from, Qr.to)
            }
        }
        getHierarchyBoundingVectors() {
          let rr, Sr, Qr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            Zr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.eC().incrementRenderId(), this.computeWorldMatrix(!0);
          const ar = this;
          if (ar.mG && ar.jT) {
            const Qr = ar.mG();
            rr = Qr.boundingBox.minimumWorld.clone(), Sr = Qr.boundingBox.maximumWorld.clone()
          } else rr = new Wr.u(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), Sr = new Wr.u(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (Qr) {
            const Qr = this.getDescendants(!1);
            for (const ar of Qr) {
              const Qr = ar;
              if (Qr.computeWorldMatrix(!0), Zr && !Zr(Qr)) continue;
              if (!Qr.mG || 0 === Qr.getTotalVertices()) continue;
              const jr = Qr.mG().boundingBox,
                Ir = jr.minimumWorld,
                fr = jr.maximumWorld;
              Wr.u.CheckExtends(Ir, rr, Sr), Wr.u.CheckExtends(fr, rr, Sr)
            }
          }
          return {
            min: rr,
            max: Sr
          }
        }
      }, (() => {
        const Wr = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Sr = [(0, ar.G)()], Qr = [(0, ar.G)()], xr = [(0, ar.G)()], mr = [(0, ar.G)()], Nr = [(0, ar.G)()], (0, Zr.k)(null, null, Sr, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: rr => "name" in rr,
            get: rr => rr.name,
            set: (rr, Sr) => {
              rr.name = Sr
            }
          },
          metadata: Wr
        }, Ur, tr), (0, Zr.k)(null, null, Qr, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: rr => "id" in rr,
            get: rr => rr.id,
            set: (rr, Sr) => {
              rr.id = Sr
            }
          },
          metadata: Wr
        }, hr, zr), (0, Zr.k)(null, null, xr, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: rr => "uniqueId" in rr,
            get: rr => rr.uniqueId,
            set: (rr, Sr) => {
              rr.uniqueId = Sr
            }
          },
          metadata: Wr
        }, Yr, nr), (0, Zr.k)(null, null, mr, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: rr => "state" in rr,
            get: rr => rr.state,
            set: (rr, Sr) => {
              rr.state = Sr
            }
          },
          metadata: Wr
        }, er, Kr), (0, Zr.k)(null, null, Nr, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: rr => "metadata" in rr,
            get: rr => rr.metadata,
            set: (rr, Sr) => {
              rr.metadata = Sr
            }
          },
          metadata: Wr
        }, yr, Br), Wr && Object.defineProperty(rr, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Wr
        })
      })(), rr._AnimationRangeFactory = (rr, Sr, Qr) => {
        throw (0, fr.l)("AnimationRange")
      }, rr._NodeConstructors = {}, rr
    })()
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);