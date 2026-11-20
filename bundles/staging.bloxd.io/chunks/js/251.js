export const id = 251;
export const ids = [251];
export const modules = {
  39553: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Wv
    });
    var hv = Pv(39295),
      Sv = Pv(39300),
      ev = Pv(36594),
      gv = Pv(36751),
      pv = Pv(39518),
      dv = Pv(39435),
      Nv = Pv(36631),
      lv = Pv(39500),
      Tv = Pv(39312);
    let Wv = (() => {
      var vv, zv;
      let Pv, Wv, wv, av, sv, Cv, iv, cv, Gv, mv, jv, fv, Fv, Yv = pv.c,
        nv = [],
        Ov = [],
        Dv = [],
        Kv = [],
        Vv = [],
        Uv = [],
        Rv = [],
        xv = [],
        tv = [],
        qv = [],
        Iv = [],
        Qv = [],
        Zv = [],
        Av = [],
        Lv = [],
        Hv = [],
        Mv = [],
        yv = [],
        Bv = [],
        Jv = [],
        Ev = [];
      return vv = class extends Yv {
        get range() {
          return this._range
        }
        set range(vv) {
          this._range = vv, this._inverseSquaredRange = 1 / (this.range * this.range)
        }
        get intensityMode() {
          return this._intensityMode
        }
        set intensityMode(vv) {
          this._intensityMode = vv, this._computePhotometricScale()
        }
        get radius() {
          return this._radius
        }
        set radius(vv) {
          this._radius = vv, this._computePhotometricScale()
        }
        get renderPriority() {
          return (0, hv.c)(this, zv, "f")
        }
        set renderPriority(vv) {
          (0, hv.d)(this, zv, vv, "f")
        }
        get shadowEnabled() {
          return this._shadowEnabled
        }
        set shadowEnabled(vv) {
          this._shadowEnabled !== vv && (this._shadowEnabled = vv, this._markMeshesAsLightDirty())
        }
        get includedOnlyMeshes() {
          return this._includedOnlyMeshes
        }
        set includedOnlyMeshes(vv) {
          this._includedOnlyMeshes = vv, this._hookArrayForIncludedOnly(vv)
        }
        get excludedMeshes() {
          return this._excludedMeshes
        }
        set excludedMeshes(vv) {
          this._excludedMeshes = vv, this._hookArrayForExcluded(vv)
        }
        get excludeWithLayerMask() {
          return this._excludeWithLayerMask
        }
        set excludeWithLayerMask(vv) {
          this._excludeWithLayerMask = vv, this._resyncMeshes()
        }
        get includeOnlyWithLayerMask() {
          return this._includeOnlyWithLayerMask
        }
        set includeOnlyWithLayerMask(vv) {
          this._includeOnlyWithLayerMask = vv, this._resyncMeshes()
        }
        get lightmapMode() {
          return this._lightmapMode
        }
        set lightmapMode(vv) {
          this._lightmapMode !== vv && (this._lightmapMode = vv, this._markMeshesAsLightDirty())
        }
        getViewMatrix(vv) {
          return null
        }
        getProjectionMatrix(vv, zv) {
          return null
        }
        constructor(Pv, Sv, ev) {
          super(Pv, Sv, !1), this.diffuse = ((0, hv.f)(this, nv), (0, hv.f)(this, Ov, new gv.b(1, 1, 1))), this.specular = ((0, hv.f)(this, Dv), (0, hv.f)(this, Kv, new gv.b(1, 1, 1))), this.falloffType = ((0, hv.f)(this, Vv), (0, hv.f)(this, Uv, vv.FALLOFF_DEFAULT)), this.intensity = ((0, hv.f)(this, Rv), (0, hv.f)(this, xv, 1)), this._range = ((0, hv.f)(this, tv), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = vv.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, hv.f)(this, qv, void 0), zv.set(this, ((0, hv.f)(this, Iv), (0, hv.f)(this, Qv, 0))), this._shadowEnabled = ((0, hv.f)(this, Zv), (0, hv.f)(this, Av, !0)), this._includedOnlyMeshes = (0, hv.f)(this, Lv), this._excludeWithLayerMask = (0, hv.f)(this, Hv, 0), this._includeOnlyWithLayerMask = ((0, hv.f)(this, Mv), (0, hv.f)(this, yv, 0)), this._lightmapMode = ((0, hv.f)(this, Bv), (0, hv.f)(this, Jv, 0)), this._shadowGenerators = ((0, hv.f)(this, Ev), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, ev || this.rD().addLight(this), this._uniformBuffer = new dv.e(this.rD().ma(), void 0, void 0, Pv), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], ev || this._resyncMeshes()
        }
        transferTexturesToEffect(vv, zv) {
          return this
        }
        _bindLight(vv, zv, Pv, hv) {
          let Sv = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const ev = vv.toString();
          let pv = !1;
          if (this._uniformBuffer.bindToEffect(Pv, "Light" + ev), this._renderId !== zv.getRenderId() || this._lastUseSpecular !== hv || !this._uniformBuffer.useUbo) {
            this._renderId = zv.getRenderId(), this._lastUseSpecular = hv;
            const vv = this.getScaledIntensity();
            this.transferToEffect(Pv, ev), this.diffuse.scaleToRef(vv, gv.k.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", gv.k.Color3[0], this.range, ev), hv && (this.specular.scaleToRef(vv, gv.k.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", gv.k.Color3[1], this.radius, ev)), pv = !0
          }
          if (this.transferTexturesToEffect(Pv, ev), zv.shadowsEnabled && this.shadowEnabled && Sv) {
            const vv = this.getShadowGenerator(zv.activeCamera) ?? this.getShadowGenerator();
            vv && (vv.bindShadowLight(ev, Pv), pv = !0)
          }
          pv ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(vv) {
          let zv = "Name: " + this.name;
          if (zv += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let Pv = 0; Pv < this.animations.length; Pv++) zv += ", animation[0]: " + this.animations[Pv].toString(vv);
          return zv
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.mzv() || this._resyncMeshes()
        }
        uF(vv) {
          super.uF(vv), this._resyncMeshes()
        }
        getShadowGenerator() {
          let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(vv) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return ev.l.Zero()
        }
        canAffectMesh(vv) {
          return !vv || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(vv)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(vv)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & vv.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & vv.layerMask)))
        }
        dispose(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const vv = this._shadowGenerators.values();
            for (let zv = vv.next(); !0 !== zv.done; zv = vv.next()) {
              zv.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.rD().stopAnimation(this), this._parentContainer) {
            const vv = this._parentContainer.lights.indexOf(this);
            vv > -1 && this._parentContainer.lights.splice(vv, 1), this._parentContainer = null
          }
          for (const Pv of this.rD().meshes) Pv._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.rD().removeLight(this), super.dispose(vv, zv)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(zv) {
          let Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const hv = vv.GetConstructorFromName(this.getTypeID(), zv, this.rD());
          if (!hv) return null;
          const Sv = Tv.c.Clone(hv, this);
          return zv && (Sv.name = zv), Pv && (Sv.parent = Pv), Sv.uF(this.isEnabled()), this.onClonedObservable.notifyObservers(Sv), Sv
        }
        serialize() {
          const vv = Tv.c.Serialize(this);
          if (vv.uniqueId = this.uniqueId, vv.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(vv), this.excludedMeshes.length > 0) {
            vv.excludedMeshesIds = [];
            for (const zv of this.excludedMeshes) vv.excludedMeshesIds.push(zv.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            vv.includedOnlyMeshesIds = [];
            for (const zv of this.includedOnlyMeshes) vv.includedOnlyMeshesIds.push(zv.id)
          }
          return Tv.c.AppendSerializedAnimations(this, vv), vv.PC = this.serializeAnimationRanges(), vv.isEnabled = this.isEnabled(), vv
        }
        static GetConstructorFromName(vv, zv, Pv) {
          const hv = pv.c.Construct("Light_Type_" + vv, zv, Pv);
          return hv || null
        }
        static Parse(zv, Pv) {
          let hv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Sv = vv.GetConstructorFromName(zv.type, zv.name, Pv);
          if (!Sv) return null;
          const ev = Tv.c.Parse(Sv, zv, Pv, hv);
          if (zv.excludedMeshesIds && (ev._excludedMeshesIds = zv.excludedMeshesIds), zv.includedOnlyMeshesIds && (ev._includedOnlyMeshesIds = zv.includedOnlyMeshesIds), void 0 !== zv.parentId && (ev._waitingParentId = zv.parentId), void 0 !== zv.parentInstanceIndex && (ev._waitingParentInstanceIndex = zv.parentInstanceIndex), void 0 !== zv.falloffType && (ev.falloffType = zv.falloffType), void 0 !== zv.lightmapMode && (ev.lightmapMode = zv.lightmapMode), zv.animations) {
            for (let vv = 0; vv < zv.animations.length; vv++) {
              const Pv = zv.animations[vv],
                hv = (0, Nv.b)("BABYLON.Animation");
              hv && ev.animations.push(hv.Parse(Pv))
            }
            pv.c.ParseAnimationRanges(ev, zv, Pv)
          }
          return zv.autoAnimate && Pv.beginAnimation(ev, zv.autoAnimateFrom, zv.autoAnimateTo, zv.autoAnimateLoop, zv.autoAnimateSpeed || 1), void 0 !== zv.isEnabled && ev.uF(zv.isEnabled), ev._onParsed(zv, Pv, hv), ev
        }
        _onParsed(vv, zv) {}
        _hookArrayForExcluded(vv) {
          var zv = this;
          const Pv = vv.push;
          vv.push = function() {
            for (var hv = arguments.length, Sv = new Array(hv), ev = 0; ev < hv; ev++) Sv[ev] = arguments[ev];
            const gv = Pv.apply(vv, Sv);
            if (zv._clusteredContainer) return gv;
            for (const vv of Sv) vv._resyncLightSource(zv);
            return gv
          };
          const hv = vv.splice;
          vv.splice = (zv, Pv) => {
            const Sv = hv.call(vv, zv, Pv ?? vv.length);
            if (this._clusteredContainer) return Sv;
            for (const vv of Sv) vv._resyncLightSource(this);
            return Sv
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(vv) {
          var zv = this;
          const Pv = vv.push;
          vv.push = function() {
            for (var hv = arguments.length, Sv = new Array(hv), ev = 0; ev < hv; ev++) Sv[ev] = arguments[ev];
            const gv = Pv.apply(vv, Sv);
            return zv._resyncMeshes(), gv
          };
          const hv = vv.splice;
          vv.splice = (zv, Pv) => {
            const Sv = hv.call(vv, zv, Pv ?? vv.length);
            return this._resyncMeshes(), Sv
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const vv of this.rD().meshes) vv._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const vv of this.rD().meshes) - 1 !== vv.lightSources.indexOf(this) && vv._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.rD().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let zv = 0;
          const Pv = this.getTypeID();
          let hv = this.intensityMode;
          switch (hv === vv.INTENSITYMODE_AUTOMATIC && (hv = Pv === vv.LIGHTTYPEID_DIRECTIONALLIGHT ? vv.INTENSITYMODE_ILLUMINANCE : vv.INTENSITYMODE_LUMINOUSINTENSITY), Pv) {
            case vv.LIGHTTYPEID_POINTLIGHT:
            case vv.LIGHTTYPEID_SPOTLIGHT:
              switch (hv) {
                case vv.INTENSITYMODE_LUMINOUSPOWER:
                  zv = 1 / (4 * Math.PI);
                  break;
                case vv.INTENSITYMODE_LUMINOUSINTENSITY:
                  zv = 1;
                  break;
                case vv.INTENSITYMODE_LUMINANCE:
                  zv = this.radius * this.radius
              }
              break;
            case vv.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (hv) {
                case vv.INTENSITYMODE_ILLUMINANCE:
                  zv = 1;
                  break;
                case vv.INTENSITYMODE_LUMINANCE: {
                  let vv = this.radius;
                  vv = Math.max(vv, .001);
                  zv = 2 * Math.PI * (1 - Math.cos(vv));
                  break
                }
              }
              break;
            case vv.LIGHTTYPEID_HEMISPHERICLIGHT:
            case vv.LIGHTTYPEID_RECT_AREALIGHT:
              zv = 1
          }
          return zv
        }
        _reorderLightsInScene() {
          const vv = this.rD();
          0 != this._renderPriority && (vv.requireLightSorting = !0), this.rD().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, zv = new WeakMap, (() => {
        const zv = "function" === typeof Symbol && Symbol.metadata ? Object.create(Yv[Symbol.metadata] ?? null) : void 0;
        Pv = [(0, Sv.n)()], Wv = [(0, Sv.n)()], wv = [(0, Sv.L)()], av = [(0, Sv.L)()], sv = [(0, Sv.L)()], Cv = [(0, Sv.L)()], iv = [(0, Sv.L)()], cv = [(0, Sv.L)()], Gv = [(0, Sv.e)("_reorderLightsInScene")], mv = [(0, Sv.L)("shadowEnabled")], jv = [(0, Sv.L)("excludeWithLayerMask")], fv = [(0, Sv.L)("includeOnlyWithLayerMask")], Fv = [(0, Sv.L)("lightmapMode")], (0, hv.e)(vv, null, sv, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: vv => "range" in vv,
            get: vv => vv.range
          },
          metadata: zv
        }, null, nv), (0, hv.e)(vv, null, Cv, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: vv => "intensityMode" in vv,
            get: vv => vv.intensityMode
          },
          metadata: zv
        }, null, nv), (0, hv.e)(vv, null, iv, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: vv => "radius" in vv,
            get: vv => vv.radius
          },
          metadata: zv
        }, null, nv), (0, hv.e)(vv, null, Gv, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: vv => "renderPriority" in vv,
            get: vv => vv.renderPriority,
            set: (vv, zv) => {
              vv.renderPriority = zv
            }
          },
          metadata: zv
        }, Qv, Zv), (0, hv.e)(null, null, Pv, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: vv => "diffuse" in vv,
            get: vv => vv.diffuse,
            set: (vv, zv) => {
              vv.diffuse = zv
            }
          },
          metadata: zv
        }, Ov, Dv), (0, hv.e)(null, null, Wv, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: vv => "specular" in vv,
            get: vv => vv.specular,
            set: (vv, zv) => {
              vv.specular = zv
            }
          },
          metadata: zv
        }, Kv, Vv), (0, hv.e)(null, null, wv, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: vv => "falloffType" in vv,
            get: vv => vv.falloffType,
            set: (vv, zv) => {
              vv.falloffType = zv
            }
          },
          metadata: zv
        }, Uv, Rv), (0, hv.e)(null, null, av, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: vv => "intensity" in vv,
            get: vv => vv.intensity,
            set: (vv, zv) => {
              vv.intensity = zv
            }
          },
          metadata: zv
        }, xv, tv), (0, hv.e)(null, null, cv, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: vv => "_renderPriority" in vv,
            get: vv => vv._renderPriority,
            set: (vv, zv) => {
              vv._renderPriority = zv
            }
          },
          metadata: zv
        }, qv, Iv), (0, hv.e)(null, null, mv, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: vv => "_shadowEnabled" in vv,
            get: vv => vv._shadowEnabled,
            set: (vv, zv) => {
              vv._shadowEnabled = zv
            }
          },
          metadata: zv
        }, Av, Lv), (0, hv.e)(null, null, jv, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: vv => "_excludeWithLayerMask" in vv,
            get: vv => vv._excludeWithLayerMask,
            set: (vv, zv) => {
              vv._excludeWithLayerMask = zv
            }
          },
          metadata: zv
        }, Hv, Mv), (0, hv.e)(null, null, fv, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: vv => "_includeOnlyWithLayerMask" in vv,
            get: vv => vv._includeOnlyWithLayerMask,
            set: (vv, zv) => {
              vv._includeOnlyWithLayerMask = zv
            }
          },
          metadata: zv
        }, yv, Bv), (0, hv.e)(null, null, Fv, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: vv => "_lightmapMode" in vv,
            get: vv => vv._lightmapMode,
            set: (vv, zv) => {
              vv._lightmapMode = zv
            }
          },
          metadata: zv
        }, Jv, Ev), zv && Object.defineProperty(vv, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zv
        })
      })(), vv.FALLOFF_DEFAULT = lv.c.FALLOFF_DEFAULT, vv.FALLOFF_PHYSICAL = lv.c.FALLOFF_PHYSICAL, vv.FALLOFF_GLTF = lv.c.FALLOFF_GLTF, vv.FALLOFF_STANDARD = lv.c.FALLOFF_STANDARD, vv.LIGHTMAP_DEFAULT = lv.c.LIGHTMAP_DEFAULT, vv.LIGHTMAP_SPECULAR = lv.c.LIGHTMAP_SPECULAR, vv.LIGHTMAP_SHADOWSONLY = lv.c.LIGHTMAP_SHADOWSONLY, vv.INTENSITYMODE_AUTOMATIC = lv.c.INTENSITYMODE_AUTOMATIC, vv.INTENSITYMODE_LUMINOUSPOWER = lv.c.INTENSITYMODE_LUMINOUSPOWER, vv.INTENSITYMODE_LUMINOUSINTENSITY = lv.c.INTENSITYMODE_LUMINOUSINTENSITY, vv.INTENSITYMODE_ILLUMINANCE = lv.c.INTENSITYMODE_ILLUMINANCE, vv.INTENSITYMODE_LUMINANCE = lv.c.INTENSITYMODE_LUMINANCE, vv.LIGHTTYPEID_POINTLIGHT = lv.c.LIGHTTYPEID_POINTLIGHT, vv.LIGHTTYPEID_DIRECTIONALLIGHT = lv.c.LIGHTTYPEID_DIRECTIONALLIGHT, vv.LIGHTTYPEID_SPOTLIGHT = lv.c.LIGHTTYPEID_SPOTLIGHT, vv.LIGHTTYPEID_HEMISPHERICLIGHT = lv.c.LIGHTTYPEID_HEMISPHERICLIGHT, vv.LIGHTTYPEID_RECT_AREALIGHT = lv.c.LIGHTTYPEID_RECT_AREALIGHT, vv
    })()
  },
  39518: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Tv
    });
    var hv = Pv(39295),
      Sv = Pv(36594),
      ev = Pv(39300),
      gv = Pv(36618),
      pv = Pv(36615),
      dv = Pv(39190),
      Nv = Pv(39312);
    class lv {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new gv.c, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new gv.c, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let Tv = (() => {
      var vv;
      let zv, Pv, Tv, Wv, wv, av = [],
        sv = [],
        Cv = [],
        iv = [],
        cv = [],
        Gv = [],
        mv = [],
        jv = [],
        fv = [],
        Fv = [];
      return vv = class {
        static AddNodeConstructor(vv, zv) {
          this._NodeConstructors[vv] = zv
        }
        static Construct(vv, zv, Pv, hv) {
          const Sv = this._NodeConstructors[vv];
          return Sv ? Sv(zv, Pv, hv) : null
        }
        set accessibilityTag(vv) {
          this._accessibilityTag = vv, this.onAccessibilityTagChangedObservable.notifyObservers(vv)
        }
        get accessibilityTag() {
          return this._accessibilityTag
        }
        get doNotSerialize() {
          return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
        }
        set doNotSerialize(vv) {
          this._nodeDataStorage._doNotSerialize = vv
        }
        mzv() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(vv) {
          if (this._parentNode === vv) return;
          const zv = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const zv = this._parentNode._children.indexOf(this); - 1 !== zv && this._parentNode._children.splice(zv, 1), vv || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = vv, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), zv || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
        }
        get parent() {
          return this._parentNode
        }
        get inheritVisibility() {
          return this._nodeDataStorage._inheritVisibility
        }
        set inheritVisibility(vv) {
          this._nodeDataStorage._inheritVisibility = vv
        }
        get isVisible() {
          return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
        }
        set isVisible(vv) {
          this._nodeDataStorage._isVisible = vv
        }
        _serializeAsParent(vv) {
          vv.parentId = this.uniqueId
        }
        _addToSceneRootNodes() {
          -1 === this._nodeDataStorage._sceneRootNodesIndex && (this._nodeDataStorage._sceneRootNodesIndex = this._scene.rootNodes.length, this._scene.rootNodes.push(this))
        }
        _removeFromSceneRootNodes() {
          if (-1 !== this._nodeDataStorage._sceneRootNodesIndex) {
            const vv = this._scene.rootNodes,
              zv = vv.length - 1;
            vv[this._nodeDataStorage._sceneRootNodesIndex] = vv[zv], vv[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
          }
        }
        get animationPropertiesOverride() {
          return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
        }
        set animationPropertiesOverride(vv) {
          this._animationPropertiesOverride = vv
        }
        getClassName() {
          return "Node"
        }
        set onDispose(vv) {
          this._onDisposeObserver && this.uD.remove(this._onDisposeObserver), this._onDisposeObserver = this.uD.add(vv)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var vv;
          return (vv = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (vv._onEffectiveEnabledStateChangedObservable = new gv.c)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            Pv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new lv, this.name = (0, hv.f)(this, av, void 0), this.id = ((0, hv.f)(this, sv), (0, hv.f)(this, Cv, void 0)), this.uniqueId = ((0, hv.f)(this, iv), (0, hv.f)(this, cv, void 0)), this.state = ((0, hv.f)(this, Gv), (0, hv.f)(this, mv, "")), this.metadata = ((0, hv.f)(this, jv), (0, hv.f)(this, fv, null)), this._internalMetadata = (0, hv.f)(this, Fv), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new gv.c, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = Sv.c.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.uD = new gv.c, this._onDisposeObserver = null, this._behaviors = new Array, this.name = vv, this.id = vv, this._scene = zv || pv.e.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), Pv && this._addToSceneRootNodes()
        }
        rD() {
          return this._scene
        }
        ma() {
          return this._scene.ma()
        }
        addBehavior(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(vv) || (vv.init(), this._scene.isLoading && !zv ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(vv) && vv.attach(this)
          })) : vv.attach(this), this._behaviors.push(vv)), this
        }
        removeBehavior(vv) {
          const zv = this._behaviors.indexOf(vv);
          return -1 === zv || (this._behaviors.splice(zv, 1), vv.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(vv) {
          for (const zv of this._behaviors)
            if (zv.name === vv) return zv;
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
        updateCache(vv) {
          !vv && this.isSynchronized() || this._updateCache()
        }
        _getActionManagerForTrigger(vv) {
          return this.parent ? this.parent._getActionManagerForTrigger(vv, !1) : null
        }
        _updateCache(vv) {}
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
        xvv(vv) {
          return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this
        }
        isEnabled() {
          return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled
        }
        _hasEffectiveEnabledStateObservers() {
          const vv = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
          return !!vv && vv.hasObservers()
        }
        _syncParentEnabledState() {
          const vv = this._hasEffectiveEnabledStateObservers(),
            zv = vv ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const Pv of this._children) Pv._syncParentEnabledState();
          if (vv) {
            const vv = this.isEnabled();
            vv !== zv && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(vv)
          }
        }
        uF(vv) {
          if (this._nodeDataStorage._isEnabled === vv) return;
          const zv = this._hasEffectiveEnabledStateObservers(),
            Pv = zv ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = vv, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(vv), zv) {
            const vv = this.isEnabled();
            vv !== Pv && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(vv)
          }
        }
        isDescendantOf(vv) {
          return !!this.parent && (this.parent === vv || this.parent.isDescendantOf(vv))
        }
        _getDescendants(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Pv = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let hv = 0; hv < this._children.length; hv++) {
              const Sv = this._children[hv];
              Pv && !Pv(Sv) || vv.push(Sv), zv || Sv._getDescendants(vv, !1, Pv)
            }
        }
        getDescendants(vv, zv) {
          const Pv = [];
          return this._getDescendants(Pv, vv, zv), Pv
        }
        getChildMeshes(vv, zv) {
          const Pv = [];
          return this._getDescendants(Pv, vv, (vv => (!zv || zv(vv)) && void 0 !== vv.cullingStrategy)), Pv
        }
        getChildren(vv) {
          let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(zv, vv)
        }
        _setReady(vv) {
          vv !== this._nodeDataStorage._isReady && (vv ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(vv) {
          for (let zv = 0; zv < this.animations.length; zv++) {
            const Pv = this.animations[zv];
            if (Pv.name === vv) return Pv
          }
          return null
        }
        createAnimationRange(zv, Pv, hv) {
          if (!this._ranges[zv]) {
            this._ranges[zv] = vv._AnimationRangeFactory(zv, Pv, hv);
            for (let vv = 0, Sv = this.animations.length; vv < Sv; vv++) this.animations[vv] && this.animations[vv].createRange(zv, Pv, hv)
          }
        }
        deleteAnimationRange(vv) {
          let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let Pv = 0, hv = this.animations.length; Pv < hv; Pv++) this.animations[Pv] && this.animations[Pv].deleteRange(vv, zv);
          this._ranges[vv] = null
        }
        getAnimationRange(vv) {
          return this._ranges[vv] || null
        }
        clone(zv, Pv, hv) {
          const Sv = Nv.c.Clone((() => new vv(zv, this.rD())), this);
          if (Pv && (Sv.parent = Pv), !hv) {
            const vv = this.getDescendants(!0);
            for (let Pv = 0; Pv < vv.length; Pv++) {
              const hv = vv[Pv];
              hv.clone(zv + "." + hv.name, Sv)
            }
          }
          return Sv
        }
        getAnimationRanges() {
          const vv = [];
          let zv;
          for (zv in this._ranges) vv.push(this._ranges[zv]);
          return vv
        }
        beginAnimation(vv, zv, Pv, hv) {
          const Sv = this.getAnimationRange(vv);
          return Sv ? this._scene.beginAnimation(this, Sv.from, Sv.to, zv, Pv, hv) : null
        }
        serializeAnimationRanges() {
          const vv = [];
          for (const zv in this._ranges) {
            const Pv = this._ranges[zv];
            if (!Pv) continue;
            const hv = {};
            hv.name = zv, hv.from = Pv.from, hv.to = Pv.to, vv.push(hv)
          }
          return vv
        }
        computeWorldMatrix(vv) {
          return this._worldMatrix || (this._worldMatrix = Sv.c.Identity()), this._worldMatrix
        }
        dispose(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !vv) {
            const Pv = this.getDescendants(!0);
            for (const hv of Pv) hv.dispose(vv, zv)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.uD.notifyObservers(this), this.uD.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const Pv of this._behaviors) Pv.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(vv, zv, Pv) {
          if (zv.PC)
            for (let hv = 0; hv < zv.PC.length; hv++) {
              const Pv = zv.PC[hv];
              vv.createAnimationRange(Pv.name, Pv.from, Pv.to)
            }
        }
        getHierarchyBoundingVectors() {
          let vv, zv, Pv = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            hv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.rD().incrementRenderId(), this.computeWorldMatrix(!0);
          const ev = this;
          if (ev.cV && ev.sF) {
            const Pv = ev.cV();
            vv = Pv.boundingBox.minimumWorld.clone(), zv = Pv.boundingBox.maximumWorld.clone()
          } else vv = new Sv.l(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), zv = new Sv.l(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (Pv) {
            const Pv = this.getDescendants(!1);
            for (const ev of Pv) {
              const Pv = ev;
              if (Pv.computeWorldMatrix(!0), hv && !hv(Pv)) continue;
              if (!Pv.cV || 0 === Pv.getTotalVertices()) continue;
              const gv = Pv.cV().boundingBox,
                pv = gv.minimumWorld,
                dv = gv.maximumWorld;
              Sv.l.CheckExtends(pv, vv, zv), Sv.l.CheckExtends(dv, vv, zv)
            }
          }
          return {
            min: vv,
            max: zv
          }
        }
      }, (() => {
        const Sv = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zv = [(0, ev.L)()], Pv = [(0, ev.L)()], Tv = [(0, ev.L)()], Wv = [(0, ev.L)()], wv = [(0, ev.L)()], (0, hv.e)(null, null, zv, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: vv => "name" in vv,
            get: vv => vv.name,
            set: (vv, zv) => {
              vv.name = zv
            }
          },
          metadata: Sv
        }, av, sv), (0, hv.e)(null, null, Pv, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: vv => "id" in vv,
            get: vv => vv.id,
            set: (vv, zv) => {
              vv.id = zv
            }
          },
          metadata: Sv
        }, Cv, iv), (0, hv.e)(null, null, Tv, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: vv => "uniqueId" in vv,
            get: vv => vv.uniqueId,
            set: (vv, zv) => {
              vv.uniqueId = zv
            }
          },
          metadata: Sv
        }, cv, Gv), (0, hv.e)(null, null, Wv, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: vv => "state" in vv,
            get: vv => vv.state,
            set: (vv, zv) => {
              vv.state = zv
            }
          },
          metadata: Sv
        }, mv, jv), (0, hv.e)(null, null, wv, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: vv => "metadata" in vv,
            get: vv => vv.metadata,
            set: (vv, zv) => {
              vv.metadata = zv
            }
          },
          metadata: Sv
        }, fv, Fv), Sv && Object.defineProperty(vv, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Sv
        })
      })(), vv._AnimationRangeFactory = (vv, zv, Pv) => {
        throw (0, dv.m)("AnimationRange")
      }, vv._NodeConstructors = {}, vv
    })()
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);