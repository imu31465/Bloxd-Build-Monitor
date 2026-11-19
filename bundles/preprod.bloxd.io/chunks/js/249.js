export const id = 249;
export const ids = [249];
export const modules = {
  39421: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => dz
    });
    var Ez = bz(39170),
      nz = bz(39172),
      iz = bz(36519),
      lz = bz(36715),
      Mz = bz(39384),
      tz = bz(39291),
      Hz = bz(36564),
      Oz = bz(39358),
      pz = bz(39182);
    let dz = (() => {
      var zz, uz;
      let bz, dz, Fz, Zz, Rz, Kz, wz, Xz, fz, sz, rz, oz, Nz, vz = Mz.c,
        xz = [],
        Jz = [],
        Az = [],
        Tz = [],
        Lz = [],
        Pz = [],
        Gz = [],
        az = [],
        Vz = [],
        mz = [],
        qz = [],
        hz = [],
        Uz = [],
        cz = [],
        gz = [],
        Sz = [],
        yz = [],
        Dz = [],
        Qz = [],
        Wz = [],
        ez = [];
      return zz = class extends vz {
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
          return (0, Ez.c)(this, uz, "f")
        }
        set renderPriority(zz) {
          (0, Ez.g)(this, uz, zz, "f")
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
        getProjectionMatrix(zz, uz) {
          return null
        }
        constructor(bz, nz, iz) {
          super(bz, nz, !1), this.diffuse = ((0, Ez.j)(this, xz), (0, Ez.j)(this, Jz, new lz.c(1, 1, 1))), this.specular = ((0, Ez.j)(this, Az), (0, Ez.j)(this, Tz, new lz.c(1, 1, 1))), this.falloffType = ((0, Ez.j)(this, Lz), (0, Ez.j)(this, Pz, zz.FALLOFF_DEFAULT)), this.intensity = ((0, Ez.j)(this, Gz), (0, Ez.j)(this, az, 1)), this._range = ((0, Ez.j)(this, Vz), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = zz.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, Ez.j)(this, mz, void 0), uz.set(this, ((0, Ez.j)(this, qz), (0, Ez.j)(this, hz, 0))), this._shadowEnabled = ((0, Ez.j)(this, Uz), (0, Ez.j)(this, cz, !0)), this._includedOnlyMeshes = (0, Ez.j)(this, gz), this._excludeWithLayerMask = (0, Ez.j)(this, Sz, 0), this._includeOnlyWithLayerMask = ((0, Ez.j)(this, yz), (0, Ez.j)(this, Dz, 0)), this._lightmapMode = ((0, Ez.j)(this, Qz), (0, Ez.j)(this, Wz, 0)), this._shadowGenerators = ((0, Ez.j)(this, ez), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, iz || this.XT().addLight(this), this._uniformBuffer = new tz.b(this.XT().uR(), void 0, void 0, bz), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], iz || this._resyncMeshes()
        }
        transferTexturesToEffect(zz, uz) {
          return this
        }
        _bindLight(zz, uz, bz, Ez) {
          let nz = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const iz = zz.toString();
          let Mz = !1;
          if (this._uniformBuffer.bindToEffect(bz, "Light" + iz), this._renderId !== uz.getRenderId() || this._lastUseSpecular !== Ez || !this._uniformBuffer.useUbo) {
            this._renderId = uz.getRenderId(), this._lastUseSpecular = Ez;
            const zz = this.getScaledIntensity();
            this.transferToEffect(bz, iz), this.diffuse.scaleToRef(zz, lz.k.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", lz.k.Color3[0], this.range, iz), Ez && (this.specular.scaleToRef(zz, lz.k.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", lz.k.Color3[1], this.radius, iz)), Mz = !0
          }
          if (this.transferTexturesToEffect(bz, iz), uz.shadowsEnabled && this.shadowEnabled && nz) {
            const zz = this.getShadowGenerator(uz.activeCamera) ?? this.getShadowGenerator();
            zz && (zz.bindShadowLight(iz, bz), Mz = !0)
          }
          Mz ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(zz) {
          let uz = "Name: " + this.name;
          if (uz += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let bz = 0; bz < this.animations.length; bz++) uz += ", animation[0]: " + this.animations[bz].toString(zz);
          return uz
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.Uuz() || this._resyncMeshes()
        }
        Zx(zz) {
          super.Zx(zz), this._resyncMeshes()
        }
        getShadowGenerator() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(zz) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return iz.n.Zero()
        }
        canAffectMesh(zz) {
          return !zz || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(zz)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(zz)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & zz.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & zz.layerMask)))
        }
        dispose(zz) {
          let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const zz = this._shadowGenerators.values();
            for (let uz = zz.next(); !0 !== uz.done; uz = zz.next()) {
              uz.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.XT().stopAnimation(this), this._parentContainer) {
            const zz = this._parentContainer.lights.indexOf(this);
            zz > -1 && this._parentContainer.lights.splice(zz, 1), this._parentContainer = null
          }
          for (const bz of this.XT().meshes) bz._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.XT().removeLight(this), super.dispose(zz, uz)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(uz) {
          let bz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Ez = zz.GetConstructorFromName(this.getTypeID(), uz, this.XT());
          if (!Ez) return null;
          const nz = pz.e.Clone(Ez, this);
          return uz && (nz.name = uz), bz && (nz.parent = bz), nz.Zx(this.isEnabled()), this.onClonedObservable.notifyObservers(nz), nz
        }
        serialize() {
          const zz = pz.e.Serialize(this);
          if (zz.uniqueId = this.uniqueId, zz.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(zz), this.excludedMeshes.length > 0) {
            zz.excludedMeshesIds = [];
            for (const uz of this.excludedMeshes) zz.excludedMeshesIds.push(uz.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            zz.includedOnlyMeshesIds = [];
            for (const uz of this.includedOnlyMeshes) zz.includedOnlyMeshesIds.push(uz.id)
          }
          return pz.e.AppendSerializedAnimations(this, zz), zz.al = this.serializeAnimationRanges(), zz.isEnabled = this.isEnabled(), zz
        }
        static GetConstructorFromName(zz, uz, bz) {
          const Ez = Mz.c.Construct("Light_Type_" + zz, uz, bz);
          return Ez || null
        }
        static Parse(uz, bz) {
          let Ez = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const nz = zz.GetConstructorFromName(uz.type, uz.name, bz);
          if (!nz) return null;
          const iz = pz.e.Parse(nz, uz, bz, Ez);
          if (uz.excludedMeshesIds && (iz._excludedMeshesIds = uz.excludedMeshesIds), uz.includedOnlyMeshesIds && (iz._includedOnlyMeshesIds = uz.includedOnlyMeshesIds), void 0 !== uz.parentId && (iz._waitingParentId = uz.parentId), void 0 !== uz.parentInstanceIndex && (iz._waitingParentInstanceIndex = uz.parentInstanceIndex), void 0 !== uz.falloffType && (iz.falloffType = uz.falloffType), void 0 !== uz.lightmapMode && (iz.lightmapMode = uz.lightmapMode), uz.animations) {
            for (let zz = 0; zz < uz.animations.length; zz++) {
              const bz = uz.animations[zz],
                Ez = (0, Hz.b)("BABYLON.Animation");
              Ez && iz.animations.push(Ez.Parse(bz))
            }
            Mz.c.ParseAnimationRanges(iz, uz, bz)
          }
          return uz.autoAnimate && bz.beginAnimation(iz, uz.autoAnimateFrom, uz.autoAnimateTo, uz.autoAnimateLoop, uz.autoAnimateSpeed || 1), void 0 !== uz.isEnabled && iz.Zx(uz.isEnabled), iz._onParsed(uz, bz, Ez), iz
        }
        _onParsed(zz, uz) {}
        _hookArrayForExcluded(zz) {
          var uz = this;
          const bz = zz.push;
          zz.push = function() {
            for (var Ez = arguments.length, nz = new Array(Ez), iz = 0; iz < Ez; iz++) nz[iz] = arguments[iz];
            const lz = bz.apply(zz, nz);
            if (uz._clusteredContainer) return lz;
            for (const zz of nz) zz._resyncLightSource(uz);
            return lz
          };
          const Ez = zz.splice;
          zz.splice = (uz, bz) => {
            const nz = Ez.call(zz, uz, bz ?? zz.length);
            if (this._clusteredContainer) return nz;
            for (const zz of nz) zz._resyncLightSource(this);
            return nz
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(zz) {
          var uz = this;
          const bz = zz.push;
          zz.push = function() {
            for (var Ez = arguments.length, nz = new Array(Ez), iz = 0; iz < Ez; iz++) nz[iz] = arguments[iz];
            const lz = bz.apply(zz, nz);
            return uz._resyncMeshes(), lz
          };
          const Ez = zz.splice;
          zz.splice = (uz, bz) => {
            const nz = Ez.call(zz, uz, bz ?? zz.length);
            return this._resyncMeshes(), nz
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const zz of this.XT().meshes) zz._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const zz of this.XT().meshes) - 1 !== zz.lightSources.indexOf(this) && zz._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.XT().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let uz = 0;
          const bz = this.getTypeID();
          let Ez = this.intensityMode;
          switch (Ez === zz.INTENSITYMODE_AUTOMATIC && (Ez = bz === zz.LIGHTTYPEID_DIRECTIONALLIGHT ? zz.INTENSITYMODE_ILLUMINANCE : zz.INTENSITYMODE_LUMINOUSINTENSITY), bz) {
            case zz.LIGHTTYPEID_POINTLIGHT:
            case zz.LIGHTTYPEID_SPOTLIGHT:
              switch (Ez) {
                case zz.INTENSITYMODE_LUMINOUSPOWER:
                  uz = 1 / (4 * Math.PI);
                  break;
                case zz.INTENSITYMODE_LUMINOUSINTENSITY:
                  uz = 1;
                  break;
                case zz.INTENSITYMODE_LUMINANCE:
                  uz = this.radius * this.radius
              }
              break;
            case zz.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (Ez) {
                case zz.INTENSITYMODE_ILLUMINANCE:
                  uz = 1;
                  break;
                case zz.INTENSITYMODE_LUMINANCE: {
                  let zz = this.radius;
                  zz = Math.max(zz, .001);
                  uz = 2 * Math.PI * (1 - Math.cos(zz));
                  break
                }
              }
              break;
            case zz.LIGHTTYPEID_HEMISPHERICLIGHT:
            case zz.LIGHTTYPEID_RECT_AREALIGHT:
              uz = 1
          }
          return uz
        }
        _reorderLightsInScene() {
          const zz = this.XT();
          0 != this._renderPriority && (zz.requireLightSorting = !0), this.XT().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, uz = new WeakMap, (() => {
        const uz = "function" === typeof Symbol && Symbol.metadata ? Object.create(vz[Symbol.metadata] ?? null) : void 0;
        bz = [(0, nz.q)()], dz = [(0, nz.q)()], Fz = [(0, nz.G)()], Zz = [(0, nz.G)()], Rz = [(0, nz.G)()], Kz = [(0, nz.G)()], wz = [(0, nz.G)()], Xz = [(0, nz.G)()], fz = [(0, nz.i)("_reorderLightsInScene")], sz = [(0, nz.G)("shadowEnabled")], rz = [(0, nz.G)("excludeWithLayerMask")], oz = [(0, nz.G)("includeOnlyWithLayerMask")], Nz = [(0, nz.G)("lightmapMode")], (0, Ez.h)(zz, null, Rz, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: zz => "range" in zz,
            get: zz => zz.range
          },
          metadata: uz
        }, null, xz), (0, Ez.h)(zz, null, Kz, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: zz => "intensityMode" in zz,
            get: zz => zz.intensityMode
          },
          metadata: uz
        }, null, xz), (0, Ez.h)(zz, null, wz, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: zz => "radius" in zz,
            get: zz => zz.radius
          },
          metadata: uz
        }, null, xz), (0, Ez.h)(zz, null, fz, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: zz => "renderPriority" in zz,
            get: zz => zz.renderPriority,
            set: (zz, uz) => {
              zz.renderPriority = uz
            }
          },
          metadata: uz
        }, hz, Uz), (0, Ez.h)(null, null, bz, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: zz => "diffuse" in zz,
            get: zz => zz.diffuse,
            set: (zz, uz) => {
              zz.diffuse = uz
            }
          },
          metadata: uz
        }, Jz, Az), (0, Ez.h)(null, null, dz, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: zz => "specular" in zz,
            get: zz => zz.specular,
            set: (zz, uz) => {
              zz.specular = uz
            }
          },
          metadata: uz
        }, Tz, Lz), (0, Ez.h)(null, null, Fz, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: zz => "falloffType" in zz,
            get: zz => zz.falloffType,
            set: (zz, uz) => {
              zz.falloffType = uz
            }
          },
          metadata: uz
        }, Pz, Gz), (0, Ez.h)(null, null, Zz, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: zz => "intensity" in zz,
            get: zz => zz.intensity,
            set: (zz, uz) => {
              zz.intensity = uz
            }
          },
          metadata: uz
        }, az, Vz), (0, Ez.h)(null, null, Xz, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: zz => "_renderPriority" in zz,
            get: zz => zz._renderPriority,
            set: (zz, uz) => {
              zz._renderPriority = uz
            }
          },
          metadata: uz
        }, mz, qz), (0, Ez.h)(null, null, sz, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: zz => "_shadowEnabled" in zz,
            get: zz => zz._shadowEnabled,
            set: (zz, uz) => {
              zz._shadowEnabled = uz
            }
          },
          metadata: uz
        }, cz, gz), (0, Ez.h)(null, null, rz, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: zz => "_excludeWithLayerMask" in zz,
            get: zz => zz._excludeWithLayerMask,
            set: (zz, uz) => {
              zz._excludeWithLayerMask = uz
            }
          },
          metadata: uz
        }, Sz, yz), (0, Ez.h)(null, null, oz, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: zz => "_includeOnlyWithLayerMask" in zz,
            get: zz => zz._includeOnlyWithLayerMask,
            set: (zz, uz) => {
              zz._includeOnlyWithLayerMask = uz
            }
          },
          metadata: uz
        }, Dz, Qz), (0, Ez.h)(null, null, Nz, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: zz => "_lightmapMode" in zz,
            get: zz => zz._lightmapMode,
            set: (zz, uz) => {
              zz._lightmapMode = uz
            }
          },
          metadata: uz
        }, Wz, ez), uz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: uz
        })
      })(), zz.FALLOFF_DEFAULT = Oz.c.FALLOFF_DEFAULT, zz.FALLOFF_PHYSICAL = Oz.c.FALLOFF_PHYSICAL, zz.FALLOFF_GLTF = Oz.c.FALLOFF_GLTF, zz.FALLOFF_STANDARD = Oz.c.FALLOFF_STANDARD, zz.LIGHTMAP_DEFAULT = Oz.c.LIGHTMAP_DEFAULT, zz.LIGHTMAP_SPECULAR = Oz.c.LIGHTMAP_SPECULAR, zz.LIGHTMAP_SHADOWSONLY = Oz.c.LIGHTMAP_SHADOWSONLY, zz.INTENSITYMODE_AUTOMATIC = Oz.c.INTENSITYMODE_AUTOMATIC, zz.INTENSITYMODE_LUMINOUSPOWER = Oz.c.INTENSITYMODE_LUMINOUSPOWER, zz.INTENSITYMODE_LUMINOUSINTENSITY = Oz.c.INTENSITYMODE_LUMINOUSINTENSITY, zz.INTENSITYMODE_ILLUMINANCE = Oz.c.INTENSITYMODE_ILLUMINANCE, zz.INTENSITYMODE_LUMINANCE = Oz.c.INTENSITYMODE_LUMINANCE, zz.LIGHTTYPEID_POINTLIGHT = Oz.c.LIGHTTYPEID_POINTLIGHT, zz.LIGHTTYPEID_DIRECTIONALLIGHT = Oz.c.LIGHTTYPEID_DIRECTIONALLIGHT, zz.LIGHTTYPEID_SPOTLIGHT = Oz.c.LIGHTTYPEID_SPOTLIGHT, zz.LIGHTTYPEID_HEMISPHERICLIGHT = Oz.c.LIGHTTYPEID_HEMISPHERICLIGHT, zz.LIGHTTYPEID_RECT_AREALIGHT = Oz.c.LIGHTTYPEID_RECT_AREALIGHT, zz
    })()
  },
  39384: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => pz
    });
    var Ez = bz(39170),
      nz = bz(36519),
      iz = bz(39172),
      lz = bz(36547),
      Mz = bz(36543),
      tz = bz(39061),
      Hz = bz(39182);
    class Oz {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new lz.b, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new lz.b, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let pz = (() => {
      var zz;
      let uz, bz, pz, dz, Fz, Zz = [],
        Rz = [],
        Kz = [],
        wz = [],
        Xz = [],
        fz = [],
        sz = [],
        rz = [],
        oz = [],
        Nz = [];
      return zz = class {
        static AddNodeConstructor(zz, uz) {
          this._NodeConstructors[zz] = uz
        }
        static Construct(zz, uz, bz, Ez) {
          const nz = this._NodeConstructors[zz];
          return nz ? nz(uz, bz, Ez) : null
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
        Uuz() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(zz) {
          if (this._parentNode === zz) return;
          const uz = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const uz = this._parentNode._children.indexOf(this); - 1 !== uz && this._parentNode._children.splice(uz, 1), zz || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = zz, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), uz || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
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
              uz = zz.length - 1;
            zz[this._nodeDataStorage._sceneRootNodesIndex] = zz[uz], zz[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
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
          this._onDisposeObserver && this.aT.remove(this._onDisposeObserver), this._onDisposeObserver = this.aT.add(zz)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var zz;
          return (zz = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (zz._onEffectiveEnabledStateChangedObservable = new lz.b)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(zz) {
          let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            bz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new Oz, this.name = (0, Ez.j)(this, Zz, void 0), this.id = ((0, Ez.j)(this, Rz), (0, Ez.j)(this, Kz, void 0)), this.uniqueId = ((0, Ez.j)(this, wz), (0, Ez.j)(this, Xz, void 0)), this.state = ((0, Ez.j)(this, fz), (0, Ez.j)(this, sz, "")), this.metadata = ((0, Ez.j)(this, rz), (0, Ez.j)(this, oz, null)), this._internalMetadata = (0, Ez.j)(this, Nz), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new lz.b, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = nz.d.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.aT = new lz.b, this._onDisposeObserver = null, this._behaviors = new Array, this.name = zz, this.id = zz, this._scene = uz || Mz.d.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), bz && this._addToSceneRootNodes()
        }
        XT() {
          return this._scene
        }
        uR() {
          return this._scene.uR()
        }
        addBehavior(zz) {
          let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(zz) || (zz.init(), this._scene.isLoading && !uz ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(zz) && zz.attach(this)
          })) : zz.attach(this), this._behaviors.push(zz)), this
        }
        removeBehavior(zz) {
          const uz = this._behaviors.indexOf(zz);
          return -1 === uz || (this._behaviors.splice(uz, 1), zz.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(zz) {
          for (const uz of this._behaviors)
            if (uz.name === zz) return uz;
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
        zuz(zz) {
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
            uz = zz ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const bz of this._children) bz._syncParentEnabledState();
          if (zz) {
            const zz = this.isEnabled();
            zz !== uz && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(zz)
          }
        }
        Zx(zz) {
          if (this._nodeDataStorage._isEnabled === zz) return;
          const uz = this._hasEffectiveEnabledStateObservers(),
            bz = uz ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = zz, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(zz), uz) {
            const zz = this.isEnabled();
            zz !== bz && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(zz)
          }
        }
        isDescendantOf(zz) {
          return !!this.parent && (this.parent === zz || this.parent.isDescendantOf(zz))
        }
        _getDescendants(zz) {
          let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            bz = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let Ez = 0; Ez < this._children.length; Ez++) {
              const nz = this._children[Ez];
              bz && !bz(nz) || zz.push(nz), uz || nz._getDescendants(zz, !1, bz)
            }
        }
        getDescendants(zz, uz) {
          const bz = [];
          return this._getDescendants(bz, zz, uz), bz
        }
        getChildMeshes(zz, uz) {
          const bz = [];
          return this._getDescendants(bz, zz, (zz => (!uz || uz(zz)) && void 0 !== zz.cullingStrategy)), bz
        }
        getChildren(zz) {
          let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(uz, zz)
        }
        _setReady(zz) {
          zz !== this._nodeDataStorage._isReady && (zz ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(zz) {
          for (let uz = 0; uz < this.animations.length; uz++) {
            const bz = this.animations[uz];
            if (bz.name === zz) return bz
          }
          return null
        }
        createAnimationRange(uz, bz, Ez) {
          if (!this._ranges[uz]) {
            this._ranges[uz] = zz._AnimationRangeFactory(uz, bz, Ez);
            for (let zz = 0, nz = this.animations.length; zz < nz; zz++) this.animations[zz] && this.animations[zz].createRange(uz, bz, Ez)
          }
        }
        deleteAnimationRange(zz) {
          let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let bz = 0, Ez = this.animations.length; bz < Ez; bz++) this.animations[bz] && this.animations[bz].deleteRange(zz, uz);
          this._ranges[zz] = null
        }
        getAnimationRange(zz) {
          return this._ranges[zz] || null
        }
        clone(uz, bz, Ez) {
          const nz = Hz.e.Clone((() => new zz(uz, this.XT())), this);
          if (bz && (nz.parent = bz), !Ez) {
            const zz = this.getDescendants(!0);
            for (let bz = 0; bz < zz.length; bz++) {
              const Ez = zz[bz];
              Ez.clone(uz + "." + Ez.name, nz)
            }
          }
          return nz
        }
        getAnimationRanges() {
          const zz = [];
          let uz;
          for (uz in this._ranges) zz.push(this._ranges[uz]);
          return zz
        }
        beginAnimation(zz, uz, bz, Ez) {
          const nz = this.getAnimationRange(zz);
          return nz ? this._scene.beginAnimation(this, nz.from, nz.to, uz, bz, Ez) : null
        }
        serializeAnimationRanges() {
          const zz = [];
          for (const uz in this._ranges) {
            const bz = this._ranges[uz];
            if (!bz) continue;
            const Ez = {};
            Ez.name = uz, Ez.from = bz.from, Ez.to = bz.to, zz.push(Ez)
          }
          return zz
        }
        computeWorldMatrix(zz) {
          return this._worldMatrix || (this._worldMatrix = nz.d.Identity()), this._worldMatrix
        }
        dispose(zz) {
          let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !zz) {
            const bz = this.getDescendants(!0);
            for (const Ez of bz) Ez.dispose(zz, uz)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.aT.notifyObservers(this), this.aT.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const bz of this._behaviors) bz.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(zz, uz, bz) {
          if (uz.al)
            for (let Ez = 0; Ez < uz.al.length; Ez++) {
              const bz = uz.al[Ez];
              zz.createAnimationRange(bz.name, bz.from, bz.to)
            }
        }
        getHierarchyBoundingVectors() {
          let zz, uz, bz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            Ez = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.XT().incrementRenderId(), this.computeWorldMatrix(!0);
          const iz = this;
          if (iz.lG && iz.hN) {
            const bz = iz.lG();
            zz = bz.boundingBox.minimumWorld.clone(), uz = bz.boundingBox.maximumWorld.clone()
          } else zz = new nz.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), uz = new nz.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (bz) {
            const bz = this.getDescendants(!1);
            for (const iz of bz) {
              const bz = iz;
              if (bz.computeWorldMatrix(!0), Ez && !Ez(bz)) continue;
              if (!bz.lG || 0 === bz.getTotalVertices()) continue;
              const lz = bz.lG().boundingBox,
                Mz = lz.minimumWorld,
                tz = lz.maximumWorld;
              nz.n.CheckExtends(Mz, zz, uz), nz.n.CheckExtends(tz, zz, uz)
            }
          }
          return {
            min: zz,
            max: uz
          }
        }
      }, (() => {
        const nz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        uz = [(0, iz.G)()], bz = [(0, iz.G)()], pz = [(0, iz.G)()], dz = [(0, iz.G)()], Fz = [(0, iz.G)()], (0, Ez.h)(null, null, uz, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: zz => "name" in zz,
            get: zz => zz.name,
            set: (zz, uz) => {
              zz.name = uz
            }
          },
          metadata: nz
        }, Zz, Rz), (0, Ez.h)(null, null, bz, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: zz => "id" in zz,
            get: zz => zz.id,
            set: (zz, uz) => {
              zz.id = uz
            }
          },
          metadata: nz
        }, Kz, wz), (0, Ez.h)(null, null, pz, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: zz => "uniqueId" in zz,
            get: zz => zz.uniqueId,
            set: (zz, uz) => {
              zz.uniqueId = uz
            }
          },
          metadata: nz
        }, Xz, fz), (0, Ez.h)(null, null, dz, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: zz => "state" in zz,
            get: zz => zz.state,
            set: (zz, uz) => {
              zz.state = uz
            }
          },
          metadata: nz
        }, sz, rz), (0, Ez.h)(null, null, Fz, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: zz => "metadata" in zz,
            get: zz => zz.metadata,
            set: (zz, uz) => {
              zz.metadata = uz
            }
          },
          metadata: nz
        }, oz, Nz), nz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: nz
        })
      })(), zz._AnimationRangeFactory = (zz, uz, bz) => {
        throw (0, tz.l)("AnimationRange")
      }, zz._NodeConstructors = {}, zz
    })()
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);