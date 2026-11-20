export const id = 249;
export const ids = [249];
export const modules = {
  39421: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Nz
    });
    var Fz = sz(39167),
      Wz = sz(39170),
      Xz = sz(36475),
      Oz = sz(36654),
      oz = sz(39374),
      vz = sz(39280),
      Uz = sz(36518),
      Kz = sz(39350),
      uz = sz(39181);
    let Nz = (() => {
      var zz, tz;
      let sz, Nz, bz, wz, Dz, gz, Hz, Bz, Pz, rz, Yz, xz, mz, Jz = oz.e,
        Iz = [],
        Cz = [],
        ez = [],
        Zz = [],
        Gz = [],
        Tz = [],
        cz = [],
        jz = [],
        Az = [],
        yz = [],
        Mz = [],
        dz = [],
        hz = [],
        Qz = [],
        kz = [],
        iz = [],
        Lz = [],
        lz = [],
        nz = [],
        az = [],
        qz = [];
      return zz = class extends Jz {
        get range() {
          return this._range
        }
        set range(zz) {
          this._range = zz, this._inverseSquaredRange = 1 / (this.range * this.range)
        }
        get intensityMode() {
          return this._intensityMode
        }
        set intensityMode(zz) {
          this._intensityMode = zz, this._computePhotometricScale()
        }
        get radius() {
          return this._radius
        }
        set radius(zz) {
          this._radius = zz, this._computePhotometricScale()
        }
        get renderPriority() {
          return (0, Fz.c)(this, tz, "f")
        }
        set renderPriority(zz) {
          (0, Fz.g)(this, tz, zz, "f")
        }
        get shadowEnabled() {
          return this._shadowEnabled
        }
        set shadowEnabled(zz) {
          this._shadowEnabled !== zz && (this._shadowEnabled = zz, this._markMeshesAsLightDirty())
        }
        get includedOnlyMeshes() {
          return this._includedOnlyMeshes
        }
        set includedOnlyMeshes(zz) {
          this._includedOnlyMeshes = zz, this._hookArrayForIncludedOnly(zz)
        }
        get excludedMeshes() {
          return this._excludedMeshes
        }
        set excludedMeshes(zz) {
          this._excludedMeshes = zz, this._hookArrayForExcluded(zz)
        }
        get excludeWithLayerMask() {
          return this._excludeWithLayerMask
        }
        set excludeWithLayerMask(zz) {
          this._excludeWithLayerMask = zz, this._resyncMeshes()
        }
        get includeOnlyWithLayerMask() {
          return this._includeOnlyWithLayerMask
        }
        set includeOnlyWithLayerMask(zz) {
          this._includeOnlyWithLayerMask = zz, this._resyncMeshes()
        }
        get lightmapMode() {
          return this._lightmapMode
        }
        set lightmapMode(zz) {
          this._lightmapMode !== zz && (this._lightmapMode = zz, this._markMeshesAsLightDirty())
        }
        getViewMatrix(zz) {
          return null
        }
        getProjectionMatrix(zz, tz) {
          return null
        }
        constructor(sz, Wz, Xz) {
          super(sz, Wz, !1), this.diffuse = ((0, Fz.k)(this, Iz), (0, Fz.k)(this, Cz, new Oz.c(1, 1, 1))), this.specular = ((0, Fz.k)(this, ez), (0, Fz.k)(this, Zz, new Oz.c(1, 1, 1))), this.falloffType = ((0, Fz.k)(this, Gz), (0, Fz.k)(this, Tz, zz.FALLOFF_DEFAULT)), this.intensity = ((0, Fz.k)(this, cz), (0, Fz.k)(this, jz, 1)), this._range = ((0, Fz.k)(this, Az), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = zz.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, Fz.k)(this, yz, void 0), tz.set(this, ((0, Fz.k)(this, Mz), (0, Fz.k)(this, dz, 0))), this._shadowEnabled = ((0, Fz.k)(this, hz), (0, Fz.k)(this, Qz, !0)), this._includedOnlyMeshes = (0, Fz.k)(this, kz), this._excludeWithLayerMask = (0, Fz.k)(this, iz, 0), this._includeOnlyWithLayerMask = ((0, Fz.k)(this, Lz), (0, Fz.k)(this, lz, 0)), this._lightmapMode = ((0, Fz.k)(this, nz), (0, Fz.k)(this, az, 0)), this._shadowGenerators = ((0, Fz.k)(this, qz), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, Xz || this.aJ().addLight(this), this._uniformBuffer = new vz.c(this.aJ().FD(), void 0, void 0, sz), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], Xz || this._resyncMeshes()
        }
        transferTexturesToEffect(zz, tz) {
          return this
        }
        _bindLight(zz, tz, sz, Fz) {
          let Wz = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const Xz = zz.toString();
          let oz = !1;
          if (this._uniformBuffer.bindToEffect(sz, "Light" + Xz), this._renderId !== tz.getRenderId() || this._lastUseSpecular !== Fz || !this._uniformBuffer.useUbo) {
            this._renderId = tz.getRenderId(), this._lastUseSpecular = Fz;
            const zz = this.getScaledIntensity();
            this.transferToEffect(sz, Xz), this.diffuse.scaleToRef(zz, Oz.f.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", Oz.f.Color3[0], this.range, Xz), Fz && (this.specular.scaleToRef(zz, Oz.f.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", Oz.f.Color3[1], this.radius, Xz)), oz = !0
          }
          if (this.transferTexturesToEffect(sz, Xz), tz.shadowsEnabled && this.shadowEnabled && Wz) {
            const zz = this.getShadowGenerator(tz.activeCamera) ?? this.getShadowGenerator();
            zz && (zz.bindShadowLight(Xz, sz), oz = !0)
          }
          oz ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(zz) {
          let tz = "Name: " + this.name;
          if (tz += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let sz = 0; sz < this.animations.length; sz++) tz += ", animation[0]: " + this.animations[sz].toString(zz);
          return tz
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.zsz() || this._resyncMeshes()
        }
        Xx(zz) {
          super.Xx(zz), this._resyncMeshes()
        }
        getShadowGenerator() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(zz) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return Xz.p.Zero()
        }
        canAffectMesh(zz) {
          return !zz || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(zz)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(zz)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & zz.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & zz.layerMask)))
        }
        dispose(zz) {
          let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const zz = this._shadowGenerators.values();
            for (let tz = zz.next(); !0 !== tz.done; tz = zz.next()) {
              tz.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.aJ().stopAnimation(this), this._parentContainer) {
            const zz = this._parentContainer.lights.indexOf(this);
            zz > -1 && this._parentContainer.lights.splice(zz, 1), this._parentContainer = null
          }
          for (const sz of this.aJ().meshes) sz._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.aJ().removeLight(this), super.dispose(zz, tz)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(tz) {
          let sz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Fz = zz.GetConstructorFromName(this.getTypeID(), tz, this.aJ());
          if (!Fz) return null;
          const Wz = uz.e.Clone(Fz, this);
          return tz && (Wz.name = tz), sz && (Wz.parent = sz), Wz.Xx(this.isEnabled()), this.onClonedObservable.notifyObservers(Wz), Wz
        }
        serialize() {
          const zz = uz.e.Serialize(this);
          if (zz.uniqueId = this.uniqueId, zz.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(zz), this.excludedMeshes.length > 0) {
            zz.excludedMeshesIds = [];
            for (const tz of this.excludedMeshes) zz.excludedMeshesIds.push(tz.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            zz.includedOnlyMeshesIds = [];
            for (const tz of this.includedOnlyMeshes) zz.includedOnlyMeshesIds.push(tz.id)
          }
          return uz.e.AppendSerializedAnimations(this, zz), zz.du = this.serializeAnimationRanges(), zz.isEnabled = this.isEnabled(), zz
        }
        static GetConstructorFromName(zz, tz, sz) {
          const Fz = oz.e.Construct("Light_Type_" + zz, tz, sz);
          return Fz || null
        }
        static Parse(tz, sz) {
          let Fz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Wz = zz.GetConstructorFromName(tz.type, tz.name, sz);
          if (!Wz) return null;
          const Xz = uz.e.Parse(Wz, tz, sz, Fz);
          if (tz.excludedMeshesIds && (Xz._excludedMeshesIds = tz.excludedMeshesIds), tz.includedOnlyMeshesIds && (Xz._includedOnlyMeshesIds = tz.includedOnlyMeshesIds), void 0 !== tz.parentId && (Xz._waitingParentId = tz.parentId), void 0 !== tz.parentInstanceIndex && (Xz._waitingParentInstanceIndex = tz.parentInstanceIndex), void 0 !== tz.falloffType && (Xz.falloffType = tz.falloffType), void 0 !== tz.lightmapMode && (Xz.lightmapMode = tz.lightmapMode), tz.animations) {
            for (let zz = 0; zz < tz.animations.length; zz++) {
              const sz = tz.animations[zz],
                Fz = (0, Uz.e)("BABYLON.Animation");
              Fz && Xz.animations.push(Fz.Parse(sz))
            }
            oz.e.ParseAnimationRanges(Xz, tz, sz)
          }
          return tz.autoAnimate && sz.beginAnimation(Xz, tz.autoAnimateFrom, tz.autoAnimateTo, tz.autoAnimateLoop, tz.autoAnimateSpeed || 1), void 0 !== tz.isEnabled && Xz.Xx(tz.isEnabled), Xz._onParsed(tz, sz, Fz), Xz
        }
        _onParsed(zz, tz) {}
        _hookArrayForExcluded(zz) {
          var tz = this;
          const sz = zz.push;
          zz.push = function() {
            for (var Fz = arguments.length, Wz = new Array(Fz), Xz = 0; Xz < Fz; Xz++) Wz[Xz] = arguments[Xz];
            const Oz = sz.apply(zz, Wz);
            if (tz._clusteredContainer) return Oz;
            for (const zz of Wz) zz._resyncLightSource(tz);
            return Oz
          };
          const Fz = zz.splice;
          zz.splice = (tz, sz) => {
            const Wz = Fz.call(zz, tz, sz ?? zz.length);
            if (this._clusteredContainer) return Wz;
            for (const zz of Wz) zz._resyncLightSource(this);
            return Wz
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(zz) {
          var tz = this;
          const sz = zz.push;
          zz.push = function() {
            for (var Fz = arguments.length, Wz = new Array(Fz), Xz = 0; Xz < Fz; Xz++) Wz[Xz] = arguments[Xz];
            const Oz = sz.apply(zz, Wz);
            return tz._resyncMeshes(), Oz
          };
          const Fz = zz.splice;
          zz.splice = (tz, sz) => {
            const Wz = Fz.call(zz, tz, sz ?? zz.length);
            return this._resyncMeshes(), Wz
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const zz of this.aJ().meshes) zz._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const zz of this.aJ().meshes) - 1 !== zz.lightSources.indexOf(this) && zz._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.aJ().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let tz = 0;
          const sz = this.getTypeID();
          let Fz = this.intensityMode;
          switch (Fz === zz.INTENSITYMODE_AUTOMATIC && (Fz = sz === zz.LIGHTTYPEID_DIRECTIONALLIGHT ? zz.INTENSITYMODE_ILLUMINANCE : zz.INTENSITYMODE_LUMINOUSINTENSITY), sz) {
            case zz.LIGHTTYPEID_POINTLIGHT:
            case zz.LIGHTTYPEID_SPOTLIGHT:
              switch (Fz) {
                case zz.INTENSITYMODE_LUMINOUSPOWER:
                  tz = 1 / (4 * Math.PI);
                  break;
                case zz.INTENSITYMODE_LUMINOUSINTENSITY:
                  tz = 1;
                  break;
                case zz.INTENSITYMODE_LUMINANCE:
                  tz = this.radius * this.radius
              }
              break;
            case zz.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (Fz) {
                case zz.INTENSITYMODE_ILLUMINANCE:
                  tz = 1;
                  break;
                case zz.INTENSITYMODE_LUMINANCE: {
                  let zz = this.radius;
                  zz = Math.max(zz, .001);
                  tz = 2 * Math.PI * (1 - Math.cos(zz));
                  break
                }
              }
              break;
            case zz.LIGHTTYPEID_HEMISPHERICLIGHT:
            case zz.LIGHTTYPEID_RECT_AREALIGHT:
              tz = 1
          }
          return tz
        }
        _reorderLightsInScene() {
          const zz = this.aJ();
          0 != this._renderPriority && (zz.requireLightSorting = !0), this.aJ().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, tz = new WeakMap, (() => {
        const tz = "function" === typeof Symbol && Symbol.metadata ? Object.create(Jz[Symbol.metadata] ?? null) : void 0;
        sz = [(0, Wz.p)()], Nz = [(0, Wz.p)()], bz = [(0, Wz.J)()], wz = [(0, Wz.J)()], Dz = [(0, Wz.J)()], gz = [(0, Wz.J)()], Hz = [(0, Wz.J)()], Bz = [(0, Wz.J)()], Pz = [(0, Wz.i)("_reorderLightsInScene")], rz = [(0, Wz.J)("shadowEnabled")], Yz = [(0, Wz.J)("excludeWithLayerMask")], xz = [(0, Wz.J)("includeOnlyWithLayerMask")], mz = [(0, Wz.J)("lightmapMode")], (0, Fz.h)(zz, null, Dz, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: zz => "range" in zz,
            get: zz => zz.range
          },
          metadata: tz
        }, null, Iz), (0, Fz.h)(zz, null, gz, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: zz => "intensityMode" in zz,
            get: zz => zz.intensityMode
          },
          metadata: tz
        }, null, Iz), (0, Fz.h)(zz, null, Hz, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: zz => "radius" in zz,
            get: zz => zz.radius
          },
          metadata: tz
        }, null, Iz), (0, Fz.h)(zz, null, Pz, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: zz => "renderPriority" in zz,
            get: zz => zz.renderPriority,
            set: (zz, tz) => {
              zz.renderPriority = tz
            }
          },
          metadata: tz
        }, dz, hz), (0, Fz.h)(null, null, sz, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: zz => "diffuse" in zz,
            get: zz => zz.diffuse,
            set: (zz, tz) => {
              zz.diffuse = tz
            }
          },
          metadata: tz
        }, Cz, ez), (0, Fz.h)(null, null, Nz, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: zz => "specular" in zz,
            get: zz => zz.specular,
            set: (zz, tz) => {
              zz.specular = tz
            }
          },
          metadata: tz
        }, Zz, Gz), (0, Fz.h)(null, null, bz, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: zz => "falloffType" in zz,
            get: zz => zz.falloffType,
            set: (zz, tz) => {
              zz.falloffType = tz
            }
          },
          metadata: tz
        }, Tz, cz), (0, Fz.h)(null, null, wz, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: zz => "intensity" in zz,
            get: zz => zz.intensity,
            set: (zz, tz) => {
              zz.intensity = tz
            }
          },
          metadata: tz
        }, jz, Az), (0, Fz.h)(null, null, Bz, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: zz => "_renderPriority" in zz,
            get: zz => zz._renderPriority,
            set: (zz, tz) => {
              zz._renderPriority = tz
            }
          },
          metadata: tz
        }, yz, Mz), (0, Fz.h)(null, null, rz, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: zz => "_shadowEnabled" in zz,
            get: zz => zz._shadowEnabled,
            set: (zz, tz) => {
              zz._shadowEnabled = tz
            }
          },
          metadata: tz
        }, Qz, kz), (0, Fz.h)(null, null, Yz, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: zz => "_excludeWithLayerMask" in zz,
            get: zz => zz._excludeWithLayerMask,
            set: (zz, tz) => {
              zz._excludeWithLayerMask = tz
            }
          },
          metadata: tz
        }, iz, Lz), (0, Fz.h)(null, null, xz, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: zz => "_includeOnlyWithLayerMask" in zz,
            get: zz => zz._includeOnlyWithLayerMask,
            set: (zz, tz) => {
              zz._includeOnlyWithLayerMask = tz
            }
          },
          metadata: tz
        }, lz, nz), (0, Fz.h)(null, null, mz, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: zz => "_lightmapMode" in zz,
            get: zz => zz._lightmapMode,
            set: (zz, tz) => {
              zz._lightmapMode = tz
            }
          },
          metadata: tz
        }, az, qz), tz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: tz
        })
      })(), zz.FALLOFF_DEFAULT = Kz.c.FALLOFF_DEFAULT, zz.FALLOFF_PHYSICAL = Kz.c.FALLOFF_PHYSICAL, zz.FALLOFF_GLTF = Kz.c.FALLOFF_GLTF, zz.FALLOFF_STANDARD = Kz.c.FALLOFF_STANDARD, zz.LIGHTMAP_DEFAULT = Kz.c.LIGHTMAP_DEFAULT, zz.LIGHTMAP_SPECULAR = Kz.c.LIGHTMAP_SPECULAR, zz.LIGHTMAP_SHADOWSONLY = Kz.c.LIGHTMAP_SHADOWSONLY, zz.INTENSITYMODE_AUTOMATIC = Kz.c.INTENSITYMODE_AUTOMATIC, zz.INTENSITYMODE_LUMINOUSPOWER = Kz.c.INTENSITYMODE_LUMINOUSPOWER, zz.INTENSITYMODE_LUMINOUSINTENSITY = Kz.c.INTENSITYMODE_LUMINOUSINTENSITY, zz.INTENSITYMODE_ILLUMINANCE = Kz.c.INTENSITYMODE_ILLUMINANCE, zz.INTENSITYMODE_LUMINANCE = Kz.c.INTENSITYMODE_LUMINANCE, zz.LIGHTTYPEID_POINTLIGHT = Kz.c.LIGHTTYPEID_POINTLIGHT, zz.LIGHTTYPEID_DIRECTIONALLIGHT = Kz.c.LIGHTTYPEID_DIRECTIONALLIGHT, zz.LIGHTTYPEID_SPOTLIGHT = Kz.c.LIGHTTYPEID_SPOTLIGHT, zz.LIGHTTYPEID_HEMISPHERICLIGHT = Kz.c.LIGHTTYPEID_HEMISPHERICLIGHT, zz.LIGHTTYPEID_RECT_AREALIGHT = Kz.c.LIGHTTYPEID_RECT_AREALIGHT, zz
    })()
  },
  39374: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => uz
    });
    var Fz = sz(39167),
      Wz = sz(36475),
      Xz = sz(39170),
      Oz = sz(36505),
      oz = sz(36502),
      vz = sz(39065),
      Uz = sz(39181);
    class Kz {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new Oz.c, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new Oz.c, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let uz = (() => {
      var zz;
      let tz, sz, uz, Nz, bz, wz = [],
        Dz = [],
        gz = [],
        Hz = [],
        Bz = [],
        Pz = [],
        rz = [],
        Yz = [],
        xz = [],
        mz = [];
      return zz = class {
        static AddNodeConstructor(zz, tz) {
          this._NodeConstructors[zz] = tz
        }
        static Construct(zz, tz, sz, Fz) {
          const Wz = this._NodeConstructors[zz];
          return Wz ? Wz(tz, sz, Fz) : null
        }
        set accessibilityTag(zz) {
          this._accessibilityTag = zz, this.onAccessibilityTagChangedObservable.notifyObservers(zz)
        }
        get accessibilityTag() {
          return this._accessibilityTag
        }
        get doNotSerialize() {
          return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
        }
        set doNotSerialize(zz) {
          this._nodeDataStorage._doNotSerialize = zz
        }
        zsz() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(zz) {
          if (this._parentNode === zz) return;
          const tz = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const tz = this._parentNode._children.indexOf(this); - 1 !== tz && this._parentNode._children.splice(tz, 1), zz || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = zz, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), tz || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
        }
        get parent() {
          return this._parentNode
        }
        get inheritVisibility() {
          return this._nodeDataStorage._inheritVisibility
        }
        set inheritVisibility(zz) {
          this._nodeDataStorage._inheritVisibility = zz
        }
        get isVisible() {
          return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
        }
        set isVisible(zz) {
          this._nodeDataStorage._isVisible = zz
        }
        _serializeAsParent(zz) {
          zz.parentId = this.uniqueId
        }
        _addToSceneRootNodes() {
          -1 === this._nodeDataStorage._sceneRootNodesIndex && (this._nodeDataStorage._sceneRootNodesIndex = this._scene.rootNodes.length, this._scene.rootNodes.push(this))
        }
        _removeFromSceneRootNodes() {
          if (-1 !== this._nodeDataStorage._sceneRootNodesIndex) {
            const zz = this._scene.rootNodes,
              tz = zz.length - 1;
            zz[this._nodeDataStorage._sceneRootNodesIndex] = zz[tz], zz[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
          }
        }
        get animationPropertiesOverride() {
          return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
        }
        set animationPropertiesOverride(zz) {
          this._animationPropertiesOverride = zz
        }
        getClassName() {
          return "Node"
        }
        set onDispose(zz) {
          this._onDisposeObserver && this.qJ.remove(this._onDisposeObserver), this._onDisposeObserver = this.qJ.add(zz)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var zz;
          return (zz = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (zz._onEffectiveEnabledStateChangedObservable = new Oz.c)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(zz) {
          let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            sz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new Kz, this.name = (0, Fz.k)(this, wz, void 0), this.id = ((0, Fz.k)(this, Dz), (0, Fz.k)(this, gz, void 0)), this.uniqueId = ((0, Fz.k)(this, Hz), (0, Fz.k)(this, Bz, void 0)), this.state = ((0, Fz.k)(this, Pz), (0, Fz.k)(this, rz, "")), this.metadata = ((0, Fz.k)(this, Yz), (0, Fz.k)(this, xz, null)), this._internalMetadata = (0, Fz.k)(this, mz), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new Oz.c, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = Wz.e.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.qJ = new Oz.c, this._onDisposeObserver = null, this._behaviors = new Array, this.name = zz, this.id = zz, this._scene = tz || oz.c.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), sz && this._addToSceneRootNodes()
        }
        aJ() {
          return this._scene
        }
        FD() {
          return this._scene.FD()
        }
        addBehavior(zz) {
          let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(zz) || (zz.init(), this._scene.isLoading && !tz ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(zz) && zz.attach(this)
          })) : zz.attach(this), this._behaviors.push(zz)), this
        }
        removeBehavior(zz) {
          const tz = this._behaviors.indexOf(zz);
          return -1 === tz || (this._behaviors.splice(tz, 1), zz.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(zz) {
          for (const tz of this._behaviors)
            if (tz.name === zz) return tz;
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
        updateCache(zz) {
          !zz && this.isSynchronized() || this._updateCache()
        }
        _getActionManagerForTrigger(zz) {
          return this.parent ? this.parent._getActionManagerForTrigger(zz, !1) : null
        }
        _updateCache(zz) {}
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
        wtz(zz) {
          return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this
        }
        isEnabled() {
          return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled
        }
        _hasEffectiveEnabledStateObservers() {
          const zz = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
          return !!zz && zz.hasObservers()
        }
        _syncParentEnabledState() {
          const zz = this._hasEffectiveEnabledStateObservers(),
            tz = zz ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const sz of this._children) sz._syncParentEnabledState();
          if (zz) {
            const zz = this.isEnabled();
            zz !== tz && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(zz)
          }
        }
        Xx(zz) {
          if (this._nodeDataStorage._isEnabled === zz) return;
          const tz = this._hasEffectiveEnabledStateObservers(),
            sz = tz ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = zz, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(zz), tz) {
            const zz = this.isEnabled();
            zz !== sz && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(zz)
          }
        }
        isDescendantOf(zz) {
          return !!this.parent && (this.parent === zz || this.parent.isDescendantOf(zz))
        }
        _getDescendants(zz) {
          let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            sz = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let Fz = 0; Fz < this._children.length; Fz++) {
              const Wz = this._children[Fz];
              sz && !sz(Wz) || zz.push(Wz), tz || Wz._getDescendants(zz, !1, sz)
            }
        }
        getDescendants(zz, tz) {
          const sz = [];
          return this._getDescendants(sz, zz, tz), sz
        }
        getChildMeshes(zz, tz) {
          const sz = [];
          return this._getDescendants(sz, zz, (zz => (!tz || tz(zz)) && void 0 !== zz.cullingStrategy)), sz
        }
        getChildren(zz) {
          let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(tz, zz)
        }
        _setReady(zz) {
          zz !== this._nodeDataStorage._isReady && (zz ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(zz) {
          for (let tz = 0; tz < this.animations.length; tz++) {
            const sz = this.animations[tz];
            if (sz.name === zz) return sz
          }
          return null
        }
        createAnimationRange(tz, sz, Fz) {
          if (!this._ranges[tz]) {
            this._ranges[tz] = zz._AnimationRangeFactory(tz, sz, Fz);
            for (let zz = 0, Wz = this.animations.length; zz < Wz; zz++) this.animations[zz] && this.animations[zz].createRange(tz, sz, Fz)
          }
        }
        deleteAnimationRange(zz) {
          let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let sz = 0, Fz = this.animations.length; sz < Fz; sz++) this.animations[sz] && this.animations[sz].deleteRange(zz, tz);
          this._ranges[zz] = null
        }
        getAnimationRange(zz) {
          return this._ranges[zz] || null
        }
        clone(tz, sz, Fz) {
          const Wz = Uz.e.Clone((() => new zz(tz, this.aJ())), this);
          if (sz && (Wz.parent = sz), !Fz) {
            const zz = this.getDescendants(!0);
            for (let sz = 0; sz < zz.length; sz++) {
              const Fz = zz[sz];
              Fz.clone(tz + "." + Fz.name, Wz)
            }
          }
          return Wz
        }
        getAnimationRanges() {
          const zz = [];
          let tz;
          for (tz in this._ranges) zz.push(this._ranges[tz]);
          return zz
        }
        beginAnimation(zz, tz, sz, Fz) {
          const Wz = this.getAnimationRange(zz);
          return Wz ? this._scene.beginAnimation(this, Wz.from, Wz.to, tz, sz, Fz) : null
        }
        serializeAnimationRanges() {
          const zz = [];
          for (const tz in this._ranges) {
            const sz = this._ranges[tz];
            if (!sz) continue;
            const Fz = {};
            Fz.name = tz, Fz.from = sz.from, Fz.to = sz.to, zz.push(Fz)
          }
          return zz
        }
        computeWorldMatrix(zz) {
          return this._worldMatrix || (this._worldMatrix = Wz.e.Identity()), this._worldMatrix
        }
        dispose(zz) {
          let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !zz) {
            const sz = this.getDescendants(!0);
            for (const Fz of sz) Fz.dispose(zz, tz)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.qJ.notifyObservers(this), this.qJ.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const sz of this._behaviors) sz.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(zz, tz, sz) {
          if (tz.du)
            for (let Fz = 0; Fz < tz.du.length; Fz++) {
              const sz = tz.du[Fz];
              zz.createAnimationRange(sz.name, sz.from, sz.to)
            }
        }
        getHierarchyBoundingVectors() {
          let zz, tz, sz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            Fz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.aJ().incrementRenderId(), this.computeWorldMatrix(!0);
          const Xz = this;
          if (Xz.rC && Xz.kY) {
            const sz = Xz.rC();
            zz = sz.boundingBox.minimumWorld.clone(), tz = sz.boundingBox.maximumWorld.clone()
          } else zz = new Wz.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), tz = new Wz.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (sz) {
            const sz = this.getDescendants(!1);
            for (const Xz of sz) {
              const sz = Xz;
              if (sz.computeWorldMatrix(!0), Fz && !Fz(sz)) continue;
              if (!sz.rC || 0 === sz.getTotalVertices()) continue;
              const Oz = sz.rC().boundingBox,
                oz = Oz.minimumWorld,
                vz = Oz.maximumWorld;
              Wz.p.CheckExtends(oz, zz, tz), Wz.p.CheckExtends(vz, zz, tz)
            }
          }
          return {
            min: zz,
            max: tz
          }
        }
      }, (() => {
        const Wz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        tz = [(0, Xz.J)()], sz = [(0, Xz.J)()], uz = [(0, Xz.J)()], Nz = [(0, Xz.J)()], bz = [(0, Xz.J)()], (0, Fz.h)(null, null, tz, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: zz => "name" in zz,
            get: zz => zz.name,
            set: (zz, tz) => {
              zz.name = tz
            }
          },
          metadata: Wz
        }, wz, Dz), (0, Fz.h)(null, null, sz, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: zz => "id" in zz,
            get: zz => zz.id,
            set: (zz, tz) => {
              zz.id = tz
            }
          },
          metadata: Wz
        }, gz, Hz), (0, Fz.h)(null, null, uz, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: zz => "uniqueId" in zz,
            get: zz => zz.uniqueId,
            set: (zz, tz) => {
              zz.uniqueId = tz
            }
          },
          metadata: Wz
        }, Bz, Pz), (0, Fz.h)(null, null, Nz, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: zz => "state" in zz,
            get: zz => zz.state,
            set: (zz, tz) => {
              zz.state = tz
            }
          },
          metadata: Wz
        }, rz, Yz), (0, Fz.h)(null, null, bz, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: zz => "metadata" in zz,
            get: zz => zz.metadata,
            set: (zz, tz) => {
              zz.metadata = tz
            }
          },
          metadata: Wz
        }, xz, mz), Wz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Wz
        })
      })(), zz._AnimationRangeFactory = (zz, tz, sz) => {
        throw (0, vz.i)("AnimationRange")
      }, zz._NodeConstructors = {}, zz
    })()
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);