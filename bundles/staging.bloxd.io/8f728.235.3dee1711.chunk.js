export const id = 235;
export const ids = [235];
export const modules = {
  38291: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Tc
    });
    var Vc = nc(38035),
      Ic = nc(38043),
      rB = nc(35756),
      uc = nc(35815),
      sc = nc(38255),
      Mc = nc(38182),
      Pc = nc(35799),
      qB = nc(38232),
      Oc = nc(38068);
    let Tc = (() => {
      var cB, Bc;
      let nc, Tc, fc, mB, ec, tB, Sc, yB, zB, pc, hc, aB, lc, Yc = sc.c,
        Lc = [],
        gB = [],
        Uc = [],
        bB = [],
        Zc = [],
        Qc = [],
        Cc = [],
        vB = [],
        Dc = [],
        Nc = [],
        Ec = [],
        oc = [],
        Wc = [],
        wc = [],
        kB = [],
        Xc = [],
        Hc = [],
        Fc = [],
        Jc = [],
        jB = [],
        Rc = [];
      return cB = class extends Yc {
        get range() {
          return this._range
        }
        set range(cB) {
          this._range = cB, this._inverseSquaredRange = 1 / (this.range * this.range)
        }
        get intensityMode() {
          return this._intensityMode
        }
        set intensityMode(cB) {
          this._intensityMode = cB, this._computePhotometricScale()
        }
        get radius() {
          return this._radius
        }
        set radius(cB) {
          this._radius = cB, this._computePhotometricScale()
        }
        get renderPriority() {
          return (0, Vc.c)(this, Bc, "f")
        }
        set renderPriority(cB) {
          (0, Vc.f)(this, Bc, cB, "f")
        }
        get shadowEnabled() {
          return this._shadowEnabled
        }
        set shadowEnabled(cB) {
          this._shadowEnabled !== cB && (this._shadowEnabled = cB, this._markMeshesAsLightDirty())
        }
        get includedOnlyMeshes() {
          return this._includedOnlyMeshes
        }
        set includedOnlyMeshes(cB) {
          this._includedOnlyMeshes = cB, this._hookArrayForIncludedOnly(cB)
        }
        get excludedMeshes() {
          return this._excludedMeshes
        }
        set excludedMeshes(cB) {
          this._excludedMeshes = cB, this._hookArrayForExcluded(cB)
        }
        get excludeWithLayerMask() {
          return this._excludeWithLayerMask
        }
        set excludeWithLayerMask(cB) {
          this._excludeWithLayerMask = cB, this._resyncMeshes()
        }
        get includeOnlyWithLayerMask() {
          return this._includeOnlyWithLayerMask
        }
        set includeOnlyWithLayerMask(cB) {
          this._includeOnlyWithLayerMask = cB, this._resyncMeshes()
        }
        get lightmapMode() {
          return this._lightmapMode
        }
        set lightmapMode(cB) {
          this._lightmapMode !== cB && (this._lightmapMode = cB, this._markMeshesAsLightDirty())
        }
        getViewMatrix(cB) {
          return null
        }
        getProjectionMatrix(cB, Bc) {
          return null
        }
        constructor(nc, Ic, rB) {
          super(nc, Ic, !1), this.diffuse = ((0, Vc.k)(this, Lc), (0, Vc.k)(this, gB, new uc.e(1, 1, 1))), this.specular = ((0, Vc.k)(this, Uc), (0, Vc.k)(this, bB, new uc.e(1, 1, 1))), this.falloffType = ((0, Vc.k)(this, Zc), (0, Vc.k)(this, Qc, cB.FALLOFF_DEFAULT)), this.intensity = ((0, Vc.k)(this, Cc), (0, Vc.k)(this, vB, 1)), this._range = ((0, Vc.k)(this, Dc), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = cB.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, Vc.k)(this, Nc, void 0), Bc.set(this, ((0, Vc.k)(this, Ec), (0, Vc.k)(this, oc, 0))), this._shadowEnabled = ((0, Vc.k)(this, Wc), (0, Vc.k)(this, wc, !0)), this._includedOnlyMeshes = (0, Vc.k)(this, kB), this._excludeWithLayerMask = (0, Vc.k)(this, Xc, 0), this._includeOnlyWithLayerMask = ((0, Vc.k)(this, Hc), (0, Vc.k)(this, Fc, 0)), this._lightmapMode = ((0, Vc.k)(this, Jc), (0, Vc.k)(this, jB, 0)), this._shadowGenerators = ((0, Vc.k)(this, Rc), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, rB || this.knc().addLight(this), this._uniformBuffer = new Mc.c(this.knc().RV(), void 0, void 0, nc), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], rB || this._resyncMeshes()
        }
        transferTexturesToEffect(cB, Bc) {
          return this
        }
        _bindLight(cB, Bc, nc, Vc) {
          let Ic = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const rB = cB.toString();
          let sc = !1;
          if (this._uniformBuffer.bindToEffect(nc, "Light" + rB), this._renderId !== Bc.getRenderId() || this._lastUseSpecular !== Vc || !this._uniformBuffer.useUbo) {
            this._renderId = Bc.getRenderId(), this._lastUseSpecular = Vc;
            const cB = this.getScaledIntensity();
            this.transferToEffect(nc, rB), this.diffuse.scaleToRef(cB, uc.m.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", uc.m.Color3[0], this.range, rB), Vc && (this.specular.scaleToRef(cB, uc.m.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", uc.m.Color3[1], this.radius, rB)), sc = !0
          }
          if (this.transferTexturesToEffect(nc, rB), Bc.shadowsEnabled && this.shadowEnabled && Ic) {
            const cB = this.getShadowGenerator(Bc.activeCamera) ?? this.getShadowGenerator();
            cB && (cB.bindShadowLight(rB, nc), sc = !0)
          }
          sc ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(cB) {
          let Bc = "Name: " + this.name;
          if (Bc += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let nc = 0; nc < this.animations.length; nc++) Bc += ", animation[0]: " + this.animations[nc].toString(cB);
          return Bc
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.nPc() || this._resyncMeshes()
        }
        jnc(cB) {
          super.jnc(cB), this._resyncMeshes()
        }
        getShadowGenerator() {
          let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(cB) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return rB.p.Zero()
        }
        canAffectMesh(cB) {
          return !cB || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(cB)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(cB)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & cB.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & cB.layerMask)))
        }
        dispose(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const cB = this._shadowGenerators.values();
            for (let Bc = cB.next(); !0 !== Bc.done; Bc = cB.next()) {
              Bc.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.knc().stopAnimation(this), this._parentContainer) {
            const cB = this._parentContainer.lights.indexOf(this);
            cB > -1 && this._parentContainer.lights.splice(cB, 1), this._parentContainer = null
          }
          for (const nc of this.knc().meshes) nc._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.knc().removeLight(this), super.dispose(cB, Bc)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(Bc) {
          let nc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Vc = cB.GetConstructorFromName(this.getTypeID(), Bc, this.knc());
          if (!Vc) return null;
          const Ic = Oc.e.Clone(Vc, this);
          return Bc && (Ic.name = Bc), nc && (Ic.parent = nc), Ic.jnc(this.isEnabled()), this.onClonedObservable.notifyObservers(Ic), Ic
        }
        serialize() {
          const cB = Oc.e.Serialize(this);
          if (cB.uniqueId = this.uniqueId, cB.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(cB), this.excludedMeshes.length > 0) {
            cB.excludedMeshesIds = [];
            for (const Bc of this.excludedMeshes) cB.excludedMeshesIds.push(Bc.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            cB.includedOnlyMeshesIds = [];
            for (const Bc of this.includedOnlyMeshes) cB.includedOnlyMeshesIds.push(Bc.id)
          }
          return Oc.e.AppendSerializedAnimations(this, cB), cB.Iu = this.serializeAnimationRanges(), cB.isEnabled = this.isEnabled(), cB
        }
        static GetConstructorFromName(cB, Bc, nc) {
          const Vc = sc.c.Construct("Light_Type_" + cB, Bc, nc);
          return Vc || null
        }
        static Parse(Bc, nc) {
          let Vc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Ic = cB.GetConstructorFromName(Bc.type, Bc.name, nc);
          if (!Ic) return null;
          const rB = Oc.e.Parse(Ic, Bc, nc, Vc);
          if (Bc.excludedMeshesIds && (rB._excludedMeshesIds = Bc.excludedMeshesIds), Bc.includedOnlyMeshesIds && (rB._includedOnlyMeshesIds = Bc.includedOnlyMeshesIds), void 0 !== Bc.parentId && (rB._waitingParentId = Bc.parentId), void 0 !== Bc.parentInstanceIndex && (rB._waitingParentInstanceIndex = Bc.parentInstanceIndex), void 0 !== Bc.falloffType && (rB.falloffType = Bc.falloffType), void 0 !== Bc.lightmapMode && (rB.lightmapMode = Bc.lightmapMode), Bc.animations) {
            for (let cB = 0; cB < Bc.animations.length; cB++) {
              const nc = Bc.animations[cB],
                Vc = (0, Pc.b)("BABYLON.Animation");
              Vc && rB.animations.push(Vc.Parse(nc))
            }
            sc.c.ParseAnimationRanges(rB, Bc, nc)
          }
          return Bc.autoAnimate && nc.beginAnimation(rB, Bc.autoAnimateFrom, Bc.autoAnimateTo, Bc.autoAnimateLoop, Bc.autoAnimateSpeed || 1), void 0 !== Bc.isEnabled && rB.jnc(Bc.isEnabled), rB._onParsed(Bc, nc, Vc), rB
        }
        _onParsed(cB, Bc) {}
        _hookArrayForExcluded(cB) {
          var Bc = this;
          const nc = cB.push;
          cB.push = function() {
            for (var Vc = arguments.length, Ic = new Array(Vc), rB = 0; rB < Vc; rB++) Ic[rB] = arguments[rB];
            const uc = nc.apply(cB, Ic);
            if (Bc._clusteredContainer) return uc;
            for (const cB of Ic) cB._resyncLightSource(Bc);
            return uc
          };
          const Vc = cB.splice;
          cB.splice = (Bc, nc) => {
            const Ic = Vc.call(cB, Bc, nc ?? cB.length);
            if (this._clusteredContainer) return Ic;
            for (const cB of Ic) cB._resyncLightSource(this);
            return Ic
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(cB) {
          var Bc = this;
          const nc = cB.push;
          cB.push = function() {
            for (var Vc = arguments.length, Ic = new Array(Vc), rB = 0; rB < Vc; rB++) Ic[rB] = arguments[rB];
            const uc = nc.apply(cB, Ic);
            return Bc._resyncMeshes(), uc
          };
          const Vc = cB.splice;
          cB.splice = (Bc, nc) => {
            const Ic = Vc.call(cB, Bc, nc ?? cB.length);
            return this._resyncMeshes(), Ic
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const cB of this.knc().meshes) cB._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const cB of this.knc().meshes) - 1 !== cB.lightSources.indexOf(this) && cB._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.knc().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let Bc = 0;
          const nc = this.getTypeID();
          let Vc = this.intensityMode;
          switch (Vc === cB.INTENSITYMODE_AUTOMATIC && (Vc = nc === cB.LIGHTTYPEID_DIRECTIONALLIGHT ? cB.INTENSITYMODE_ILLUMINANCE : cB.INTENSITYMODE_LUMINOUSINTENSITY), nc) {
            case cB.LIGHTTYPEID_POINTLIGHT:
            case cB.LIGHTTYPEID_SPOTLIGHT:
              switch (Vc) {
                case cB.INTENSITYMODE_LUMINOUSPOWER:
                  Bc = 1 / (4 * Math.PI);
                  break;
                case cB.INTENSITYMODE_LUMINOUSINTENSITY:
                  Bc = 1;
                  break;
                case cB.INTENSITYMODE_LUMINANCE:
                  Bc = this.radius * this.radius
              }
              break;
            case cB.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (Vc) {
                case cB.INTENSITYMODE_ILLUMINANCE:
                  Bc = 1;
                  break;
                case cB.INTENSITYMODE_LUMINANCE: {
                  let cB = this.radius;
                  cB = Math.max(cB, .001);
                  Bc = 2 * Math.PI * (1 - Math.cos(cB));
                  break
                }
              }
              break;
            case cB.LIGHTTYPEID_HEMISPHERICLIGHT:
            case cB.LIGHTTYPEID_RECT_AREALIGHT:
              Bc = 1
          }
          return Bc
        }
        _reorderLightsInScene() {
          const cB = this.knc();
          0 != this._renderPriority && (cB.requireLightSorting = !0), this.knc().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, Bc = new WeakMap, (() => {
        const Bc = "function" === typeof Symbol && Symbol.metadata ? Object.create(Yc[Symbol.metadata] ?? null) : void 0;
        nc = [(0, Ic.o)()], Tc = [(0, Ic.o)()], fc = [(0, Ic.M)()], mB = [(0, Ic.M)()], ec = [(0, Ic.M)()], tB = [(0, Ic.M)()], Sc = [(0, Ic.M)()], yB = [(0, Ic.M)()], zB = [(0, Ic.d)("_reorderLightsInScene")], pc = [(0, Ic.M)("shadowEnabled")], hc = [(0, Ic.M)("excludeWithLayerMask")], aB = [(0, Ic.M)("includeOnlyWithLayerMask")], lc = [(0, Ic.M)("lightmapMode")], (0, Vc.g)(cB, null, ec, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: cB => "range" in cB,
            get: cB => cB.range
          },
          metadata: Bc
        }, null, Lc), (0, Vc.g)(cB, null, tB, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: cB => "intensityMode" in cB,
            get: cB => cB.intensityMode
          },
          metadata: Bc
        }, null, Lc), (0, Vc.g)(cB, null, Sc, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: cB => "radius" in cB,
            get: cB => cB.radius
          },
          metadata: Bc
        }, null, Lc), (0, Vc.g)(cB, null, zB, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: cB => "renderPriority" in cB,
            get: cB => cB.renderPriority,
            set: (cB, Bc) => {
              cB.renderPriority = Bc
            }
          },
          metadata: Bc
        }, oc, Wc), (0, Vc.g)(null, null, nc, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: cB => "diffuse" in cB,
            get: cB => cB.diffuse,
            set: (cB, Bc) => {
              cB.diffuse = Bc
            }
          },
          metadata: Bc
        }, gB, Uc), (0, Vc.g)(null, null, Tc, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: cB => "specular" in cB,
            get: cB => cB.specular,
            set: (cB, Bc) => {
              cB.specular = Bc
            }
          },
          metadata: Bc
        }, bB, Zc), (0, Vc.g)(null, null, fc, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: cB => "falloffType" in cB,
            get: cB => cB.falloffType,
            set: (cB, Bc) => {
              cB.falloffType = Bc
            }
          },
          metadata: Bc
        }, Qc, Cc), (0, Vc.g)(null, null, mB, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: cB => "intensity" in cB,
            get: cB => cB.intensity,
            set: (cB, Bc) => {
              cB.intensity = Bc
            }
          },
          metadata: Bc
        }, vB, Dc), (0, Vc.g)(null, null, yB, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: cB => "_renderPriority" in cB,
            get: cB => cB._renderPriority,
            set: (cB, Bc) => {
              cB._renderPriority = Bc
            }
          },
          metadata: Bc
        }, Nc, Ec), (0, Vc.g)(null, null, pc, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: cB => "_shadowEnabled" in cB,
            get: cB => cB._shadowEnabled,
            set: (cB, Bc) => {
              cB._shadowEnabled = Bc
            }
          },
          metadata: Bc
        }, wc, kB), (0, Vc.g)(null, null, hc, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: cB => "_excludeWithLayerMask" in cB,
            get: cB => cB._excludeWithLayerMask,
            set: (cB, Bc) => {
              cB._excludeWithLayerMask = Bc
            }
          },
          metadata: Bc
        }, Xc, Hc), (0, Vc.g)(null, null, aB, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: cB => "_includeOnlyWithLayerMask" in cB,
            get: cB => cB._includeOnlyWithLayerMask,
            set: (cB, Bc) => {
              cB._includeOnlyWithLayerMask = Bc
            }
          },
          metadata: Bc
        }, Fc, Jc), (0, Vc.g)(null, null, lc, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: cB => "_lightmapMode" in cB,
            get: cB => cB._lightmapMode,
            set: (cB, Bc) => {
              cB._lightmapMode = Bc
            }
          },
          metadata: Bc
        }, jB, Rc), Bc && Object.defineProperty(cB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Bc
        })
      })(), cB.FALLOFF_DEFAULT = qB.c.FALLOFF_DEFAULT, cB.FALLOFF_PHYSICAL = qB.c.FALLOFF_PHYSICAL, cB.FALLOFF_GLTF = qB.c.FALLOFF_GLTF, cB.FALLOFF_STANDARD = qB.c.FALLOFF_STANDARD, cB.LIGHTMAP_DEFAULT = qB.c.LIGHTMAP_DEFAULT, cB.LIGHTMAP_SPECULAR = qB.c.LIGHTMAP_SPECULAR, cB.LIGHTMAP_SHADOWSONLY = qB.c.LIGHTMAP_SHADOWSONLY, cB.INTENSITYMODE_AUTOMATIC = qB.c.INTENSITYMODE_AUTOMATIC, cB.INTENSITYMODE_LUMINOUSPOWER = qB.c.INTENSITYMODE_LUMINOUSPOWER, cB.INTENSITYMODE_LUMINOUSINTENSITY = qB.c.INTENSITYMODE_LUMINOUSINTENSITY, cB.INTENSITYMODE_ILLUMINANCE = qB.c.INTENSITYMODE_ILLUMINANCE, cB.INTENSITYMODE_LUMINANCE = qB.c.INTENSITYMODE_LUMINANCE, cB.LIGHTTYPEID_POINTLIGHT = qB.c.LIGHTTYPEID_POINTLIGHT, cB.LIGHTTYPEID_DIRECTIONALLIGHT = qB.c.LIGHTTYPEID_DIRECTIONALLIGHT, cB.LIGHTTYPEID_SPOTLIGHT = qB.c.LIGHTTYPEID_SPOTLIGHT, cB.LIGHTTYPEID_HEMISPHERICLIGHT = qB.c.LIGHTTYPEID_HEMISPHERICLIGHT, cB.LIGHTTYPEID_RECT_AREALIGHT = qB.c.LIGHTTYPEID_RECT_AREALIGHT, cB
    })()
  },
  38255: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Oc
    });
    var Vc = nc(38035),
      Ic = nc(35756),
      rB = nc(38043),
      uc = nc(35783),
      sc = nc(35780),
      Mc = nc(37953),
      Pc = nc(38068);
    class qB {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new uc.c, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new uc.c, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let Oc = (() => {
      var cB;
      let Bc, nc, Oc, Tc, fc, mB = [],
        ec = [],
        tB = [],
        Sc = [],
        yB = [],
        zB = [],
        pc = [],
        hc = [],
        aB = [],
        lc = [];
      return cB = class {
        static AddNodeConstructor(cB, Bc) {
          this._NodeConstructors[cB] = Bc
        }
        static Construct(cB, Bc, nc, Vc) {
          const Ic = this._NodeConstructors[cB];
          return Ic ? Ic(Bc, nc, Vc) : null
        }
        set accessibilityTag(cB) {
          this._accessibilityTag = cB, this.onAccessibilityTagChangedObservable.notifyObservers(cB)
        }
        get accessibilityTag() {
          return this._accessibilityTag
        }
        get doNotSerialize() {
          return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
        }
        set doNotSerialize(cB) {
          this._nodeDataStorage._doNotSerialize = cB
        }
        nPc() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(cB) {
          if (this._parentNode === cB) return;
          const Bc = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const Bc = this._parentNode._children.indexOf(this); - 1 !== Bc && this._parentNode._children.splice(Bc, 1), cB || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = cB, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), Bc || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
        }
        get parent() {
          return this._parentNode
        }
        get inheritVisibility() {
          return this._nodeDataStorage._inheritVisibility
        }
        set inheritVisibility(cB) {
          this._nodeDataStorage._inheritVisibility = cB
        }
        get isVisible() {
          return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
        }
        set isVisible(cB) {
          this._nodeDataStorage._isVisible = cB
        }
        _serializeAsParent(cB) {
          cB.parentId = this.uniqueId
        }
        _addToSceneRootNodes() {
          -1 === this._nodeDataStorage._sceneRootNodesIndex && (this._nodeDataStorage._sceneRootNodesIndex = this._scene.rootNodes.length, this._scene.rootNodes.push(this))
        }
        _removeFromSceneRootNodes() {
          if (-1 !== this._nodeDataStorage._sceneRootNodesIndex) {
            const cB = this._scene.rootNodes,
              Bc = cB.length - 1;
            cB[this._nodeDataStorage._sceneRootNodesIndex] = cB[Bc], cB[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
          }
        }
        get animationPropertiesOverride() {
          return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
        }
        set animationPropertiesOverride(cB) {
          this._animationPropertiesOverride = cB
        }
        getClassName() {
          return "Node"
        }
        set onDispose(cB) {
          this._onDisposeObserver && this.XBc.remove(this._onDisposeObserver), this._onDisposeObserver = this.XBc.add(cB)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var cB;
          return (cB = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (cB._onEffectiveEnabledStateChangedObservable = new uc.c)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            nc = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new qB, this.name = (0, Vc.k)(this, mB, void 0), this.id = ((0, Vc.k)(this, ec), (0, Vc.k)(this, tB, void 0)), this.uniqueId = ((0, Vc.k)(this, Sc), (0, Vc.k)(this, yB, void 0)), this.state = ((0, Vc.k)(this, zB), (0, Vc.k)(this, pc, "")), this.metadata = ((0, Vc.k)(this, hc), (0, Vc.k)(this, aB, null)), this._internalMetadata = (0, Vc.k)(this, lc), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new uc.c, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = Ic.d.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.XBc = new uc.c, this._onDisposeObserver = null, this._behaviors = new Array, this.name = cB, this.id = cB, this._scene = Bc || sc.d.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), nc && this._addToSceneRootNodes()
        }
        knc() {
          return this._scene
        }
        RV() {
          return this._scene.RV()
        }
        addBehavior(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(cB) || (cB.init(), this._scene.isLoading && !Bc ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(cB) && cB.attach(this)
          })) : cB.attach(this), this._behaviors.push(cB)), this
        }
        removeBehavior(cB) {
          const Bc = this._behaviors.indexOf(cB);
          return -1 === Bc || (this._behaviors.splice(Bc, 1), cB.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(cB) {
          for (const Bc of this._behaviors)
            if (Bc.name === cB) return Bc;
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
        updateCache(cB) {
          !cB && this.isSynchronized() || this._updateCache()
        }
        _getActionManagerForTrigger(cB) {
          return this.parent ? this.parent._getActionManagerForTrigger(cB, !1) : null
        }
        _updateCache(cB) {}
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
        SMc(cB) {
          return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this
        }
        isEnabled() {
          return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled
        }
        _hasEffectiveEnabledStateObservers() {
          const cB = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
          return !!cB && cB.hasObservers()
        }
        _syncParentEnabledState() {
          const cB = this._hasEffectiveEnabledStateObservers(),
            Bc = cB ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const nc of this._children) nc._syncParentEnabledState();
          if (cB) {
            const cB = this.isEnabled();
            cB !== Bc && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(cB)
          }
        }
        jnc(cB) {
          if (this._nodeDataStorage._isEnabled === cB) return;
          const Bc = this._hasEffectiveEnabledStateObservers(),
            nc = Bc ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = cB, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(cB), Bc) {
            const cB = this.isEnabled();
            cB !== nc && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(cB)
          }
        }
        isDescendantOf(cB) {
          return !!this.parent && (this.parent === cB || this.parent.isDescendantOf(cB))
        }
        _getDescendants(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            nc = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let Vc = 0; Vc < this._children.length; Vc++) {
              const Ic = this._children[Vc];
              nc && !nc(Ic) || cB.push(Ic), Bc || Ic._getDescendants(cB, !1, nc)
            }
        }
        getDescendants(cB, Bc) {
          const nc = [];
          return this._getDescendants(nc, cB, Bc), nc
        }
        getChildMeshes(cB, Bc) {
          const nc = [];
          return this._getDescendants(nc, cB, (cB => (!Bc || Bc(cB)) && void 0 !== cB.cullingStrategy)), nc
        }
        getChildren(cB) {
          let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(Bc, cB)
        }
        _setReady(cB) {
          cB !== this._nodeDataStorage._isReady && (cB ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(cB) {
          for (let Bc = 0; Bc < this.animations.length; Bc++) {
            const nc = this.animations[Bc];
            if (nc.name === cB) return nc
          }
          return null
        }
        createAnimationRange(Bc, nc, Vc) {
          if (!this._ranges[Bc]) {
            this._ranges[Bc] = cB._AnimationRangeFactory(Bc, nc, Vc);
            for (let cB = 0, Ic = this.animations.length; cB < Ic; cB++) this.animations[cB] && this.animations[cB].createRange(Bc, nc, Vc)
          }
        }
        deleteAnimationRange(cB) {
          let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let nc = 0, Vc = this.animations.length; nc < Vc; nc++) this.animations[nc] && this.animations[nc].deleteRange(cB, Bc);
          this._ranges[cB] = null
        }
        getAnimationRange(cB) {
          return this._ranges[cB] || null
        }
        clone(Bc, nc, Vc) {
          const Ic = Pc.e.Clone((() => new cB(Bc, this.knc())), this);
          if (nc && (Ic.parent = nc), !Vc) {
            const cB = this.getDescendants(!0);
            for (let nc = 0; nc < cB.length; nc++) {
              const Vc = cB[nc];
              Vc.clone(Bc + "." + Vc.name, Ic)
            }
          }
          return Ic
        }
        getAnimationRanges() {
          const cB = [];
          let Bc;
          for (Bc in this._ranges) cB.push(this._ranges[Bc]);
          return cB
        }
        beginAnimation(cB, Bc, nc, Vc) {
          const Ic = this.getAnimationRange(cB);
          return Ic ? this._scene.beginAnimation(this, Ic.from, Ic.to, Bc, nc, Vc) : null
        }
        serializeAnimationRanges() {
          const cB = [];
          for (const Bc in this._ranges) {
            const nc = this._ranges[Bc];
            if (!nc) continue;
            const Vc = {};
            Vc.name = Bc, Vc.from = nc.from, Vc.to = nc.to, cB.push(Vc)
          }
          return cB
        }
        computeWorldMatrix(cB) {
          return this._worldMatrix || (this._worldMatrix = Ic.d.Identity()), this._worldMatrix
        }
        dispose(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !cB) {
            const nc = this.getDescendants(!0);
            for (const Vc of nc) Vc.dispose(cB, Bc)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.XBc.notifyObservers(this), this.XBc.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const nc of this._behaviors) nc.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(cB, Bc, nc) {
          if (Bc.Iu)
            for (let Vc = 0; Vc < Bc.Iu.length; Vc++) {
              const nc = Bc.Iu[Vc];
              cB.createAnimationRange(nc.name, nc.from, nc.to)
            }
        }
        getHierarchyBoundingVectors() {
          let cB, Bc, nc = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            Vc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.knc().incrementRenderId(), this.computeWorldMatrix(!0);
          const rB = this;
          if (rB.qVc && rB.rD) {
            const nc = rB.qVc();
            cB = nc.boundingBox.minimumWorld.clone(), Bc = nc.boundingBox.maximumWorld.clone()
          } else cB = new Ic.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), Bc = new Ic.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (nc) {
            const nc = this.getDescendants(!1);
            for (const rB of nc) {
              const nc = rB;
              if (nc.computeWorldMatrix(!0), Vc && !Vc(nc)) continue;
              if (!nc.qVc || 0 === nc.getTotalVertices()) continue;
              const uc = nc.qVc().boundingBox,
                sc = uc.minimumWorld,
                Mc = uc.maximumWorld;
              Ic.p.CheckExtends(sc, cB, Bc), Ic.p.CheckExtends(Mc, cB, Bc)
            }
          }
          return {
            min: cB,
            max: Bc
          }
        }
      }, (() => {
        const Ic = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Bc = [(0, rB.M)()], nc = [(0, rB.M)()], Oc = [(0, rB.M)()], Tc = [(0, rB.M)()], fc = [(0, rB.M)()], (0, Vc.g)(null, null, Bc, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: cB => "name" in cB,
            get: cB => cB.name,
            set: (cB, Bc) => {
              cB.name = Bc
            }
          },
          metadata: Ic
        }, mB, ec), (0, Vc.g)(null, null, nc, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: cB => "id" in cB,
            get: cB => cB.id,
            set: (cB, Bc) => {
              cB.id = Bc
            }
          },
          metadata: Ic
        }, tB, Sc), (0, Vc.g)(null, null, Oc, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: cB => "uniqueId" in cB,
            get: cB => cB.uniqueId,
            set: (cB, Bc) => {
              cB.uniqueId = Bc
            }
          },
          metadata: Ic
        }, yB, zB), (0, Vc.g)(null, null, Tc, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: cB => "state" in cB,
            get: cB => cB.state,
            set: (cB, Bc) => {
              cB.state = Bc
            }
          },
          metadata: Ic
        }, pc, hc), (0, Vc.g)(null, null, fc, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: cB => "metadata" in cB,
            get: cB => cB.metadata,
            set: (cB, Bc) => {
              cB.metadata = Bc
            }
          },
          metadata: Ic
        }, aB, lc), Ic && Object.defineProperty(cB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ic
        })
      })(), cB._AnimationRangeFactory = (cB, Bc, nc) => {
        throw (0, Mc.k)("AnimationRange")
      }, cB._NodeConstructors = {}, cB
    })()
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);