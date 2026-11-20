export const id = 249;
export const ids = [249];
export const modules = {
  39668: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Jk
    });
    var Rk = Bk(39397),
      tk = Bk(39404),
      ak = Bk(36758),
      Xk = Bk(36917),
      bk = Bk(39628),
      wk = Bk(39530),
      dk = Bk(36798),
      sk = Bk(39606),
      Vk = Bk(39414);
    let Jk = (() => {
      var kk, Fk;
      let Bk, Jk, Ak, ek, yk, fk, mk, Wk, vk, ik, Yk, Lk, Ok, Ek = bk.b,
        Sk = [],
        Nk = [],
        Hk = [],
        uk = [],
        Mk = [],
        gk = [],
        Uk = [],
        ck = [],
        Gk = [],
        Tk = [],
        rk = [],
        Dk = [],
        zk = [],
        Pk = [],
        hk = [],
        qk = [],
        Ck = [],
        Zk = [],
        pk = [],
        Kk = [],
        xk = [];
      return kk = class extends Ek {
        get range() {
          return this._range
        }
        set range(kk) {
          this._range = kk, this._inverseSquaredRange = 1 / (this.range * this.range)
        }
        get intensityMode() {
          return this._intensityMode
        }
        set intensityMode(kk) {
          this._intensityMode = kk, this._computePhotometricScale()
        }
        get radius() {
          return this._radius
        }
        set radius(kk) {
          this._radius = kk, this._computePhotometricScale()
        }
        get renderPriority() {
          return (0, Rk.e)(this, Fk, "f")
        }
        set renderPriority(kk) {
          (0, Rk.i)(this, Fk, kk, "f")
        }
        get shadowEnabled() {
          return this._shadowEnabled
        }
        set shadowEnabled(kk) {
          this._shadowEnabled !== kk && (this._shadowEnabled = kk, this._markMeshesAsLightDirty())
        }
        get includedOnlyMeshes() {
          return this._includedOnlyMeshes
        }
        set includedOnlyMeshes(kk) {
          this._includedOnlyMeshes = kk, this._hookArrayForIncludedOnly(kk)
        }
        get excludedMeshes() {
          return this._excludedMeshes
        }
        set excludedMeshes(kk) {
          this._excludedMeshes = kk, this._hookArrayForExcluded(kk)
        }
        get excludeWithLayerMask() {
          return this._excludeWithLayerMask
        }
        set excludeWithLayerMask(kk) {
          this._excludeWithLayerMask = kk, this._resyncMeshes()
        }
        get includeOnlyWithLayerMask() {
          return this._includeOnlyWithLayerMask
        }
        set includeOnlyWithLayerMask(kk) {
          this._includeOnlyWithLayerMask = kk, this._resyncMeshes()
        }
        get lightmapMode() {
          return this._lightmapMode
        }
        set lightmapMode(kk) {
          this._lightmapMode !== kk && (this._lightmapMode = kk, this._markMeshesAsLightDirty())
        }
        getViewMatrix(kk) {
          return null
        }
        getProjectionMatrix(kk, Fk) {
          return null
        }
        constructor(Bk, tk, ak) {
          super(Bk, tk, !1), this.diffuse = ((0, Rk.l)(this, Sk), (0, Rk.l)(this, Nk, new Xk.e(1, 1, 1))), this.specular = ((0, Rk.l)(this, Hk), (0, Rk.l)(this, uk, new Xk.e(1, 1, 1))), this.falloffType = ((0, Rk.l)(this, Mk), (0, Rk.l)(this, gk, kk.FALLOFF_DEFAULT)), this.intensity = ((0, Rk.l)(this, Uk), (0, Rk.l)(this, ck, 1)), this._range = ((0, Rk.l)(this, Gk), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = kk.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, Rk.l)(this, Tk, void 0), Fk.set(this, ((0, Rk.l)(this, rk), (0, Rk.l)(this, Dk, 0))), this._shadowEnabled = ((0, Rk.l)(this, zk), (0, Rk.l)(this, Pk, !0)), this._includedOnlyMeshes = (0, Rk.l)(this, hk), this._excludeWithLayerMask = (0, Rk.l)(this, qk, 0), this._includeOnlyWithLayerMask = ((0, Rk.l)(this, Ck), (0, Rk.l)(this, Zk, 0)), this._lightmapMode = ((0, Rk.l)(this, pk), (0, Rk.l)(this, Kk, 0)), this._shadowGenerators = ((0, Rk.l)(this, xk), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, ak || this.XN().addLight(this), this._uniformBuffer = new wk.e(this.XN().ne(), void 0, void 0, Bk), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], ak || this._resyncMeshes()
        }
        transferTexturesToEffect(kk, Fk) {
          return this
        }
        _bindLight(kk, Fk, Bk, Rk) {
          let tk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const ak = kk.toString();
          let bk = !1;
          if (this._uniformBuffer.bindToEffect(Bk, "Light" + ak), this._renderId !== Fk.getRenderId() || this._lastUseSpecular !== Rk || !this._uniformBuffer.useUbo) {
            this._renderId = Fk.getRenderId(), this._lastUseSpecular = Rk;
            const kk = this.getScaledIntensity();
            this.transferToEffect(Bk, ak), this.diffuse.scaleToRef(kk, Xk.n.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", Xk.n.Color3[0], this.range, ak), Rk && (this.specular.scaleToRef(kk, Xk.n.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", Xk.n.Color3[1], this.radius, ak)), bk = !0
          }
          if (this.transferTexturesToEffect(Bk, ak), Fk.shadowsEnabled && this.shadowEnabled && tk) {
            const kk = this.getShadowGenerator(Fk.activeCamera) ?? this.getShadowGenerator();
            kk && (kk.bindShadowLight(ak, Bk), bk = !0)
          }
          bk ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(kk) {
          let Fk = "Name: " + this.name;
          if (Fk += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let Bk = 0; Bk < this.animations.length; Bk++) Fk += ", animation[0]: " + this.animations[Bk].toString(kk);
          return Fk
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.BBk() || this._resyncMeshes()
        }
        lY(kk) {
          super.lY(kk), this._resyncMeshes()
        }
        getShadowGenerator() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(kk) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return ak.s.Zero()
        }
        canAffectMesh(kk) {
          return !kk || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(kk)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(kk)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & kk.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & kk.layerMask)))
        }
        dispose(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const kk = this._shadowGenerators.values();
            for (let Fk = kk.next(); !0 !== Fk.done; Fk = kk.next()) {
              Fk.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.XN().stopAnimation(this), this._parentContainer) {
            const kk = this._parentContainer.lights.indexOf(this);
            kk > -1 && this._parentContainer.lights.splice(kk, 1), this._parentContainer = null
          }
          for (const Bk of this.XN().meshes) Bk._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.XN().removeLight(this), super.dispose(kk, Fk)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(Fk) {
          let Bk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Rk = kk.GetConstructorFromName(this.getTypeID(), Fk, this.XN());
          if (!Rk) return null;
          const tk = Vk.c.Clone(Rk, this);
          return Fk && (tk.name = Fk), Bk && (tk.parent = Bk), tk.lY(this.isEnabled()), this.onClonedObservable.notifyObservers(tk), tk
        }
        serialize() {
          const kk = Vk.c.Serialize(this);
          if (kk.uniqueId = this.uniqueId, kk.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(kk), this.excludedMeshes.length > 0) {
            kk.excludedMeshesIds = [];
            for (const Fk of this.excludedMeshes) kk.excludedMeshesIds.push(Fk.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            kk.includedOnlyMeshesIds = [];
            for (const Fk of this.includedOnlyMeshes) kk.includedOnlyMeshesIds.push(Fk.id)
          }
          return Vk.c.AppendSerializedAnimations(this, kk), kk.hb = this.serializeAnimationRanges(), kk.isEnabled = this.isEnabled(), kk
        }
        static GetConstructorFromName(kk, Fk, Bk) {
          const Rk = bk.b.Construct("Light_Type_" + kk, Fk, Bk);
          return Rk || null
        }
        static Parse(Fk, Bk) {
          let Rk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const tk = kk.GetConstructorFromName(Fk.type, Fk.name, Bk);
          if (!tk) return null;
          const ak = Vk.c.Parse(tk, Fk, Bk, Rk);
          if (Fk.excludedMeshesIds && (ak._excludedMeshesIds = Fk.excludedMeshesIds), Fk.includedOnlyMeshesIds && (ak._includedOnlyMeshesIds = Fk.includedOnlyMeshesIds), void 0 !== Fk.parentId && (ak._waitingParentId = Fk.parentId), void 0 !== Fk.parentInstanceIndex && (ak._waitingParentInstanceIndex = Fk.parentInstanceIndex), void 0 !== Fk.falloffType && (ak.falloffType = Fk.falloffType), void 0 !== Fk.lightmapMode && (ak.lightmapMode = Fk.lightmapMode), Fk.animations) {
            for (let kk = 0; kk < Fk.animations.length; kk++) {
              const Bk = Fk.animations[kk],
                Rk = (0, dk.c)("BABYLON.Animation");
              Rk && ak.animations.push(Rk.Parse(Bk))
            }
            bk.b.ParseAnimationRanges(ak, Fk, Bk)
          }
          return Fk.autoAnimate && Bk.beginAnimation(ak, Fk.autoAnimateFrom, Fk.autoAnimateTo, Fk.autoAnimateLoop, Fk.autoAnimateSpeed || 1), void 0 !== Fk.isEnabled && ak.lY(Fk.isEnabled), ak._onParsed(Fk, Bk, Rk), ak
        }
        _onParsed(kk, Fk) {}
        _hookArrayForExcluded(kk) {
          var Fk = this;
          const Bk = kk.push;
          kk.push = function() {
            for (var Rk = arguments.length, tk = new Array(Rk), ak = 0; ak < Rk; ak++) tk[ak] = arguments[ak];
            const Xk = Bk.apply(kk, tk);
            if (Fk._clusteredContainer) return Xk;
            for (const kk of tk) kk._resyncLightSource(Fk);
            return Xk
          };
          const Rk = kk.splice;
          kk.splice = (Fk, Bk) => {
            const tk = Rk.call(kk, Fk, Bk ?? kk.length);
            if (this._clusteredContainer) return tk;
            for (const kk of tk) kk._resyncLightSource(this);
            return tk
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(kk) {
          var Fk = this;
          const Bk = kk.push;
          kk.push = function() {
            for (var Rk = arguments.length, tk = new Array(Rk), ak = 0; ak < Rk; ak++) tk[ak] = arguments[ak];
            const Xk = Bk.apply(kk, tk);
            return Fk._resyncMeshes(), Xk
          };
          const Rk = kk.splice;
          kk.splice = (Fk, Bk) => {
            const tk = Rk.call(kk, Fk, Bk ?? kk.length);
            return this._resyncMeshes(), tk
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const kk of this.XN().meshes) kk._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const kk of this.XN().meshes) - 1 !== kk.lightSources.indexOf(this) && kk._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.XN().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let Fk = 0;
          const Bk = this.getTypeID();
          let Rk = this.intensityMode;
          switch (Rk === kk.INTENSITYMODE_AUTOMATIC && (Rk = Bk === kk.LIGHTTYPEID_DIRECTIONALLIGHT ? kk.INTENSITYMODE_ILLUMINANCE : kk.INTENSITYMODE_LUMINOUSINTENSITY), Bk) {
            case kk.LIGHTTYPEID_POINTLIGHT:
            case kk.LIGHTTYPEID_SPOTLIGHT:
              switch (Rk) {
                case kk.INTENSITYMODE_LUMINOUSPOWER:
                  Fk = 1 / (4 * Math.PI);
                  break;
                case kk.INTENSITYMODE_LUMINOUSINTENSITY:
                  Fk = 1;
                  break;
                case kk.INTENSITYMODE_LUMINANCE:
                  Fk = this.radius * this.radius
              }
              break;
            case kk.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (Rk) {
                case kk.INTENSITYMODE_ILLUMINANCE:
                  Fk = 1;
                  break;
                case kk.INTENSITYMODE_LUMINANCE: {
                  let kk = this.radius;
                  kk = Math.max(kk, .001);
                  Fk = 2 * Math.PI * (1 - Math.cos(kk));
                  break
                }
              }
              break;
            case kk.LIGHTTYPEID_HEMISPHERICLIGHT:
            case kk.LIGHTTYPEID_RECT_AREALIGHT:
              Fk = 1
          }
          return Fk
        }
        _reorderLightsInScene() {
          const kk = this.XN();
          0 != this._renderPriority && (kk.requireLightSorting = !0), this.XN().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, Fk = new WeakMap, (() => {
        const Fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ek[Symbol.metadata] ?? null) : void 0;
        Bk = [(0, tk.l)()], Jk = [(0, tk.l)()], Ak = [(0, tk.M)()], ek = [(0, tk.M)()], yk = [(0, tk.M)()], fk = [(0, tk.M)()], mk = [(0, tk.M)()], Wk = [(0, tk.M)()], vk = [(0, tk.d)("_reorderLightsInScene")], ik = [(0, tk.M)("shadowEnabled")], Yk = [(0, tk.M)("excludeWithLayerMask")], Lk = [(0, tk.M)("includeOnlyWithLayerMask")], Ok = [(0, tk.M)("lightmapMode")], (0, Rk.j)(kk, null, yk, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: kk => "range" in kk,
            get: kk => kk.range
          },
          metadata: Fk
        }, null, Sk), (0, Rk.j)(kk, null, fk, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: kk => "intensityMode" in kk,
            get: kk => kk.intensityMode
          },
          metadata: Fk
        }, null, Sk), (0, Rk.j)(kk, null, mk, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: kk => "radius" in kk,
            get: kk => kk.radius
          },
          metadata: Fk
        }, null, Sk), (0, Rk.j)(kk, null, vk, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: kk => "renderPriority" in kk,
            get: kk => kk.renderPriority,
            set: (kk, Fk) => {
              kk.renderPriority = Fk
            }
          },
          metadata: Fk
        }, Dk, zk), (0, Rk.j)(null, null, Bk, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: kk => "diffuse" in kk,
            get: kk => kk.diffuse,
            set: (kk, Fk) => {
              kk.diffuse = Fk
            }
          },
          metadata: Fk
        }, Nk, Hk), (0, Rk.j)(null, null, Jk, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: kk => "specular" in kk,
            get: kk => kk.specular,
            set: (kk, Fk) => {
              kk.specular = Fk
            }
          },
          metadata: Fk
        }, uk, Mk), (0, Rk.j)(null, null, Ak, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: kk => "falloffType" in kk,
            get: kk => kk.falloffType,
            set: (kk, Fk) => {
              kk.falloffType = Fk
            }
          },
          metadata: Fk
        }, gk, Uk), (0, Rk.j)(null, null, ek, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: kk => "intensity" in kk,
            get: kk => kk.intensity,
            set: (kk, Fk) => {
              kk.intensity = Fk
            }
          },
          metadata: Fk
        }, ck, Gk), (0, Rk.j)(null, null, Wk, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: kk => "_renderPriority" in kk,
            get: kk => kk._renderPriority,
            set: (kk, Fk) => {
              kk._renderPriority = Fk
            }
          },
          metadata: Fk
        }, Tk, rk), (0, Rk.j)(null, null, ik, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: kk => "_shadowEnabled" in kk,
            get: kk => kk._shadowEnabled,
            set: (kk, Fk) => {
              kk._shadowEnabled = Fk
            }
          },
          metadata: Fk
        }, Pk, hk), (0, Rk.j)(null, null, Yk, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: kk => "_excludeWithLayerMask" in kk,
            get: kk => kk._excludeWithLayerMask,
            set: (kk, Fk) => {
              kk._excludeWithLayerMask = Fk
            }
          },
          metadata: Fk
        }, qk, Ck), (0, Rk.j)(null, null, Lk, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: kk => "_includeOnlyWithLayerMask" in kk,
            get: kk => kk._includeOnlyWithLayerMask,
            set: (kk, Fk) => {
              kk._includeOnlyWithLayerMask = Fk
            }
          },
          metadata: Fk
        }, Zk, pk), (0, Rk.j)(null, null, Ok, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: kk => "_lightmapMode" in kk,
            get: kk => kk._lightmapMode,
            set: (kk, Fk) => {
              kk._lightmapMode = Fk
            }
          },
          metadata: Fk
        }, Kk, xk), Fk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Fk
        })
      })(), kk.FALLOFF_DEFAULT = sk.e.FALLOFF_DEFAULT, kk.FALLOFF_PHYSICAL = sk.e.FALLOFF_PHYSICAL, kk.FALLOFF_GLTF = sk.e.FALLOFF_GLTF, kk.FALLOFF_STANDARD = sk.e.FALLOFF_STANDARD, kk.LIGHTMAP_DEFAULT = sk.e.LIGHTMAP_DEFAULT, kk.LIGHTMAP_SPECULAR = sk.e.LIGHTMAP_SPECULAR, kk.LIGHTMAP_SHADOWSONLY = sk.e.LIGHTMAP_SHADOWSONLY, kk.INTENSITYMODE_AUTOMATIC = sk.e.INTENSITYMODE_AUTOMATIC, kk.INTENSITYMODE_LUMINOUSPOWER = sk.e.INTENSITYMODE_LUMINOUSPOWER, kk.INTENSITYMODE_LUMINOUSINTENSITY = sk.e.INTENSITYMODE_LUMINOUSINTENSITY, kk.INTENSITYMODE_ILLUMINANCE = sk.e.INTENSITYMODE_ILLUMINANCE, kk.INTENSITYMODE_LUMINANCE = sk.e.INTENSITYMODE_LUMINANCE, kk.LIGHTTYPEID_POINTLIGHT = sk.e.LIGHTTYPEID_POINTLIGHT, kk.LIGHTTYPEID_DIRECTIONALLIGHT = sk.e.LIGHTTYPEID_DIRECTIONALLIGHT, kk.LIGHTTYPEID_SPOTLIGHT = sk.e.LIGHTTYPEID_SPOTLIGHT, kk.LIGHTTYPEID_HEMISPHERICLIGHT = sk.e.LIGHTTYPEID_HEMISPHERICLIGHT, kk.LIGHTTYPEID_RECT_AREALIGHT = sk.e.LIGHTTYPEID_RECT_AREALIGHT, kk
    })()
  },
  39628: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Vk
    });
    var Rk = Bk(39397),
      tk = Bk(36758),
      ak = Bk(39404),
      Xk = Bk(36781),
      bk = Bk(36772),
      wk = Bk(39296),
      dk = Bk(39414);
    class sk {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new Xk.e, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new Xk.e, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let Vk = (() => {
      var kk;
      let Fk, Bk, Vk, Jk, Ak, ek = [],
        yk = [],
        fk = [],
        mk = [],
        Wk = [],
        vk = [],
        ik = [],
        Yk = [],
        Lk = [],
        Ok = [];
      return kk = class {
        static AddNodeConstructor(kk, Fk) {
          this._NodeConstructors[kk] = Fk
        }
        static Construct(kk, Fk, Bk, Rk) {
          const tk = this._NodeConstructors[kk];
          return tk ? tk(Fk, Bk, Rk) : null
        }
        set accessibilityTag(kk) {
          this._accessibilityTag = kk, this.onAccessibilityTagChangedObservable.notifyObservers(kk)
        }
        get accessibilityTag() {
          return this._accessibilityTag
        }
        get doNotSerialize() {
          return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
        }
        set doNotSerialize(kk) {
          this._nodeDataStorage._doNotSerialize = kk
        }
        BBk() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(kk) {
          if (this._parentNode === kk) return;
          const Fk = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const Fk = this._parentNode._children.indexOf(this); - 1 !== Fk && this._parentNode._children.splice(Fk, 1), kk || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = kk, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), Fk || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
        }
        get parent() {
          return this._parentNode
        }
        get inheritVisibility() {
          return this._nodeDataStorage._inheritVisibility
        }
        set inheritVisibility(kk) {
          this._nodeDataStorage._inheritVisibility = kk
        }
        get isVisible() {
          return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
        }
        set isVisible(kk) {
          this._nodeDataStorage._isVisible = kk
        }
        _serializeAsParent(kk) {
          kk.parentId = this.uniqueId
        }
        _addToSceneRootNodes() {
          -1 === this._nodeDataStorage._sceneRootNodesIndex && (this._nodeDataStorage._sceneRootNodesIndex = this._scene.rootNodes.length, this._scene.rootNodes.push(this))
        }
        _removeFromSceneRootNodes() {
          if (-1 !== this._nodeDataStorage._sceneRootNodesIndex) {
            const kk = this._scene.rootNodes,
              Fk = kk.length - 1;
            kk[this._nodeDataStorage._sceneRootNodesIndex] = kk[Fk], kk[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
          }
        }
        get animationPropertiesOverride() {
          return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
        }
        set animationPropertiesOverride(kk) {
          this._animationPropertiesOverride = kk
        }
        getClassName() {
          return "Node"
        }
        set onDispose(kk) {
          this._onDisposeObserver && this.yN.remove(this._onDisposeObserver), this._onDisposeObserver = this.yN.add(kk)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var kk;
          return (kk = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (kk._onEffectiveEnabledStateChangedObservable = new Xk.e)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            Bk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new sk, this.name = (0, Rk.l)(this, ek, void 0), this.id = ((0, Rk.l)(this, yk), (0, Rk.l)(this, fk, void 0)), this.uniqueId = ((0, Rk.l)(this, mk), (0, Rk.l)(this, Wk, void 0)), this.state = ((0, Rk.l)(this, vk), (0, Rk.l)(this, ik, "")), this.metadata = ((0, Rk.l)(this, Yk), (0, Rk.l)(this, Lk, null)), this._internalMetadata = (0, Rk.l)(this, Ok), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new Xk.e, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = tk.c.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.yN = new Xk.e, this._onDisposeObserver = null, this._behaviors = new Array, this.name = kk, this.id = kk, this._scene = Fk || bk.c.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), Bk && this._addToSceneRootNodes()
        }
        XN() {
          return this._scene
        }
        ne() {
          return this._scene.ne()
        }
        addBehavior(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(kk) || (kk.init(), this._scene.isLoading && !Fk ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(kk) && kk.attach(this)
          })) : kk.attach(this), this._behaviors.push(kk)), this
        }
        removeBehavior(kk) {
          const Fk = this._behaviors.indexOf(kk);
          return -1 === Fk || (this._behaviors.splice(Fk, 1), kk.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(kk) {
          for (const Fk of this._behaviors)
            if (Fk.name === kk) return Fk;
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
        updateCache(kk) {
          !kk && this.isSynchronized() || this._updateCache()
        }
        _getActionManagerForTrigger(kk) {
          return this.parent ? this.parent._getActionManagerForTrigger(kk, !1) : null
        }
        _updateCache(kk) {}
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
        mFk(kk) {
          return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this
        }
        isEnabled() {
          return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled
        }
        _hasEffectiveEnabledStateObservers() {
          const kk = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
          return !!kk && kk.hasObservers()
        }
        _syncParentEnabledState() {
          const kk = this._hasEffectiveEnabledStateObservers(),
            Fk = kk ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const Bk of this._children) Bk._syncParentEnabledState();
          if (kk) {
            const kk = this.isEnabled();
            kk !== Fk && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(kk)
          }
        }
        lY(kk) {
          if (this._nodeDataStorage._isEnabled === kk) return;
          const Fk = this._hasEffectiveEnabledStateObservers(),
            Bk = Fk ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = kk, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(kk), Fk) {
            const kk = this.isEnabled();
            kk !== Bk && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(kk)
          }
        }
        isDescendantOf(kk) {
          return !!this.parent && (this.parent === kk || this.parent.isDescendantOf(kk))
        }
        _getDescendants(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Bk = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let Rk = 0; Rk < this._children.length; Rk++) {
              const tk = this._children[Rk];
              Bk && !Bk(tk) || kk.push(tk), Fk || tk._getDescendants(kk, !1, Bk)
            }
        }
        getDescendants(kk, Fk) {
          const Bk = [];
          return this._getDescendants(Bk, kk, Fk), Bk
        }
        getChildMeshes(kk, Fk) {
          const Bk = [];
          return this._getDescendants(Bk, kk, (kk => (!Fk || Fk(kk)) && void 0 !== kk.cullingStrategy)), Bk
        }
        getChildren(kk) {
          let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(Fk, kk)
        }
        _setReady(kk) {
          kk !== this._nodeDataStorage._isReady && (kk ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(kk) {
          for (let Fk = 0; Fk < this.animations.length; Fk++) {
            const Bk = this.animations[Fk];
            if (Bk.name === kk) return Bk
          }
          return null
        }
        createAnimationRange(Fk, Bk, Rk) {
          if (!this._ranges[Fk]) {
            this._ranges[Fk] = kk._AnimationRangeFactory(Fk, Bk, Rk);
            for (let kk = 0, tk = this.animations.length; kk < tk; kk++) this.animations[kk] && this.animations[kk].createRange(Fk, Bk, Rk)
          }
        }
        deleteAnimationRange(kk) {
          let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let Bk = 0, Rk = this.animations.length; Bk < Rk; Bk++) this.animations[Bk] && this.animations[Bk].deleteRange(kk, Fk);
          this._ranges[kk] = null
        }
        getAnimationRange(kk) {
          return this._ranges[kk] || null
        }
        clone(Fk, Bk, Rk) {
          const tk = dk.c.Clone((() => new kk(Fk, this.XN())), this);
          if (Bk && (tk.parent = Bk), !Rk) {
            const kk = this.getDescendants(!0);
            for (let Bk = 0; Bk < kk.length; Bk++) {
              const Rk = kk[Bk];
              Rk.clone(Fk + "." + Rk.name, tk)
            }
          }
          return tk
        }
        getAnimationRanges() {
          const kk = [];
          let Fk;
          for (Fk in this._ranges) kk.push(this._ranges[Fk]);
          return kk
        }
        beginAnimation(kk, Fk, Bk, Rk) {
          const tk = this.getAnimationRange(kk);
          return tk ? this._scene.beginAnimation(this, tk.from, tk.to, Fk, Bk, Rk) : null
        }
        serializeAnimationRanges() {
          const kk = [];
          for (const Fk in this._ranges) {
            const Bk = this._ranges[Fk];
            if (!Bk) continue;
            const Rk = {};
            Rk.name = Fk, Rk.from = Bk.from, Rk.to = Bk.to, kk.push(Rk)
          }
          return kk
        }
        computeWorldMatrix(kk) {
          return this._worldMatrix || (this._worldMatrix = tk.c.Identity()), this._worldMatrix
        }
        dispose(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !kk) {
            const Bk = this.getDescendants(!0);
            for (const Rk of Bk) Rk.dispose(kk, Fk)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.yN.notifyObservers(this), this.yN.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const Bk of this._behaviors) Bk.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(kk, Fk, Bk) {
          if (Fk.hb)
            for (let Rk = 0; Rk < Fk.hb.length; Rk++) {
              const Bk = Fk.hb[Rk];
              kk.createAnimationRange(Bk.name, Bk.from, Bk.to)
            }
        }
        getHierarchyBoundingVectors() {
          let kk, Fk, Bk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            Rk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.XN().incrementRenderId(), this.computeWorldMatrix(!0);
          const ak = this;
          if (ak.ZH && ak.AY) {
            const Bk = ak.ZH();
            kk = Bk.boundingBox.minimumWorld.clone(), Fk = Bk.boundingBox.maximumWorld.clone()
          } else kk = new tk.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), Fk = new tk.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (Bk) {
            const Bk = this.getDescendants(!1);
            for (const ak of Bk) {
              const Bk = ak;
              if (Bk.computeWorldMatrix(!0), Rk && !Rk(Bk)) continue;
              if (!Bk.ZH || 0 === Bk.getTotalVertices()) continue;
              const Xk = Bk.ZH().boundingBox,
                bk = Xk.minimumWorld,
                wk = Xk.maximumWorld;
              tk.s.CheckExtends(bk, kk, Fk), tk.s.CheckExtends(wk, kk, Fk)
            }
          }
          return {
            min: kk,
            max: Fk
          }
        }
      }, (() => {
        const tk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Fk = [(0, ak.M)()], Bk = [(0, ak.M)()], Vk = [(0, ak.M)()], Jk = [(0, ak.M)()], Ak = [(0, ak.M)()], (0, Rk.j)(null, null, Fk, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: kk => "name" in kk,
            get: kk => kk.name,
            set: (kk, Fk) => {
              kk.name = Fk
            }
          },
          metadata: tk
        }, ek, yk), (0, Rk.j)(null, null, Bk, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: kk => "id" in kk,
            get: kk => kk.id,
            set: (kk, Fk) => {
              kk.id = Fk
            }
          },
          metadata: tk
        }, fk, mk), (0, Rk.j)(null, null, Vk, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: kk => "uniqueId" in kk,
            get: kk => kk.uniqueId,
            set: (kk, Fk) => {
              kk.uniqueId = Fk
            }
          },
          metadata: tk
        }, Wk, vk), (0, Rk.j)(null, null, Jk, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: kk => "state" in kk,
            get: kk => kk.state,
            set: (kk, Fk) => {
              kk.state = Fk
            }
          },
          metadata: tk
        }, ik, Yk), (0, Rk.j)(null, null, Ak, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: kk => "metadata" in kk,
            get: kk => kk.metadata,
            set: (kk, Fk) => {
              kk.metadata = Fk
            }
          },
          metadata: tk
        }, Lk, Ok), tk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: tk
        })
      })(), kk._AnimationRangeFactory = (kk, Fk, Bk) => {
        throw (0, wk.i)("AnimationRange")
      }, kk._NodeConstructors = {}, kk
    })()
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);