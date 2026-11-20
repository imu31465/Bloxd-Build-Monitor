export const id = 301;
export const ids = [301];
export const modules = {
  40936: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Hz
    });
    var Fz = sz(36505),
      Wz = sz(36475),
      Xz = sz(39617),
      Oz = sz(39299),
      oz = sz(39111),
      vz = sz(38097),
      Uz = sz(39280),
      Kz = sz(39312),
      uz = sz(36487),
      Nz = sz(39074),
      bz = sz(39270),
      wz = sz(39350);
    class Dz {
      get renderList() {
        return this._renderList
      }
      set renderList(zz) {
        this._renderList !== zz && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), zz && (this._unObserveRenderList = (0, uz.f)(zz, this._renderListHasChanged)), this._renderList = zz)
      }
      get disableImageProcessing() {
        return this._disableImageProcessing
      }
      set disableImageProcessing(zz) {
        zz !== this._disableImageProcessing && (this._disableImageProcessing = zz, this._scene.markAllMaterialsAsDirty(64))
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(zz) {
        this._disableDepthPrePass = zz, this._renderingManager.disableDepthPrePass = zz
      }
      get name() {
        return this._name
      }
      set name(zz) {
        if (this._name !== zz) {
          if (this._name = zz, this._sceneUBOs)
            for (let zz = 0; zz < this._sceneUBOs.length; ++zz) this._sceneUBOs[zz].name = `Scene ubo #${zz} for ${this.name}`;
          if (this._scene)
            for (let zz = 0; zz < this._renderPassIds.length; ++zz) {
              const tz = this._renderPassIds[zz];
              this._engine._renderPassNames[tz] = `${this._name}#${zz}`
            }
        }
      }
      get renderPassIds() {
        return this._renderPassIds
      }
      get currentRefreshId() {
        return this._currentRefreshId
      }
      getActiveMeshes() {
        return this._activeMeshes
      }
      setMaterialForRendering(zz, tz) {
        let sz;
        sz = Array.isArray(zz) ? zz : [zz];
        for (let Fz = 0; Fz < sz.length; ++Fz)
          for (let zz = 0; zz < this.options.numPasses; ++zz) {
            let Wz = sz[Fz];
            sz[Fz].VJ && (Wz = sz[Fz].AFz), Wz.setMaterialForRenderPass(this._renderPassIds[zz], void 0 !== tz ? Array.isArray(tz) ? tz[zz] : tz : void 0)
          }
      }
      _freezeActiveMeshes(zz) {
        this._freezeActiveMeshesCancel = (0, Nz.e)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, zz)
            for (let zz = 0; zz < this._activeMeshes.length; zz++) this._activeMeshes.data[zz]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((zz, tz) => {
          this._freezeActiveMeshesCancel = null, tz ? (vz.e.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), zz && vz.e.Error(zz)) : (vz.e.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), zz && (vz.e.Error(zz), zz.stack && vz.e.Error(zz.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let zz = 0; zz < this._activeMeshes.length; zz++) this._activeMeshes.data[zz]._unFreeze();
        this._isFrozen = !1
      }
      constructor(zz, tz, sz) {
        this._unObserveRenderList = null, this._renderListHasChanged = (zz, tz) => {
          const sz = this._renderList ? this._renderList.length : 0;
          if (0 === tz && sz > 0 || 0 === sz)
            for (const Fz of this._scene.meshes) Fz._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new Fz.c, this.onAfterRenderObservable = new Fz.c, this.onBeforeRenderingManagerRenderObservable = new Fz.c, this.onAfterRenderingManagerRenderObservable = new Fz.c, this.onInitRenderingObservable = new Fz.c, this.onFinishRenderingObservable = new Fz.c, this.onFastPathRenderObservable = new Fz.c, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new bz.h(256), this._activeBoundingBoxes = new bz.h(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = zz, this._scene = tz, this._engine = this._scene.FD(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...sz
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new Kz.e(tz), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const zz of this._scene.lights) zz.getTypeID() === wz.c.LIGHTTYPEID_CLUSTERED_CONTAINER && zz.isSupported && zz._updateBatches(this.activeCamera).render()
        })), this._scene.addObjectRenderer(this)
      }
      _releaseRenderPassId() {
        for (let zz = 0; zz < this.options.numPasses; ++zz) this._engine.releaseRenderPassId(this._renderPassIds[zz]);
        this._renderPassIds.length = 0
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let zz = 0; zz < this.options.numPasses; ++zz) this._renderPassIds[zz] = this._engine.createRenderPassId(`${this.name}#${zz}`)
      }
      _createSceneUBO(zz, tz) {
        const sz = this._scene.FD(),
          Fz = new Uz.c(sz, void 0, tz, zz, void 0, !1);
        return Fz.addUniform("viewProjection", 16), tz && Fz.addUniform("viewProjectionR", 16), Fz.addUniform("view", 16), Fz.addUniform("projection", 16), Fz.addUniform("vEyePosition", 4), Fz.addUniform("inverseProjection", 16), Fz
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const zz = this._engine._currentRenderTarget,
          tz = !(!zz || !zz.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const zz = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${zz} for ${this.name}`, tz)), this._sceneUBOIsMultiview.push(tz)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== tz && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, tz), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = tz);
        const sz = this._sceneUBOs[this._currentSceneUBOIndex++];
        return sz.unbindEffect(), sz
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1
      }
      get refreshRate() {
        return this._refreshRate
      }
      set refreshRate(zz) {
        this._refreshRate = zz, this.resetRefreshCounter()
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1))
      }
      isReadyForRendering(zz, tz) {
        this.prepareRenderList(), this.initRender(zz, tz);
        const sz = this._checkReadiness();
        return this.finishRender(), sz
      }
      prepareRenderList() {
        const zz = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let tz = 0; tz < this._waitingRenderList.length; tz++) {
              const sz = this._waitingRenderList[tz],
                Fz = zz.getMeshById(sz);
              Fz && this.renderList.push(Fz)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const zz = this._scene.meshes;
          for (let tz = 0; tz < zz.length; tz++) {
            const sz = zz[tz];
            this.renderListPredicate(sz) && this.renderList.push(sz)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(zz, tz) {
        const sz = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), sz && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(sz.getViewMatrix(), sz.getProjectionMatrix(!0)), this._scene._activeCamera = sz, this._engine.setViewport(sz.rigParent ? sz.rigParent.viewport : sz.viewport, zz, tz)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const zz = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (zz.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), zz._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== zz.activeCamera && zz.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), zz.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const sz = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[zz], this.onBeforeRenderObservable.notifyObservers(zz);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(zz);
        else {
          const tz = this._prepareRenderingManager(zz),
            sz = this._scene.getOutlineRenderer?.(),
            Fz = sz?.enabled;
          sz && (sz.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(zz), this._renderingManager.render(this.customRenderFunction, tz, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(zz), sz && (sz.enabled = Fz)
        }
        tz || this.onAfterRenderObservable.notifyObservers(zz), this._engine.currentRenderPassId = sz
      }
      _checkReadiness() {
        const zz = this._scene,
          tz = this._engine.currentRenderPassId;
        let sz = !0;
        zz.getViewMatrix() || zz.updateTransformMatrix();
        const Fz = this.options.numPasses;
        for (let Wz = 0; Wz < Fz && sz; Wz++) {
          const tz = this.renderList ? this.renderList : zz.frameGraph ? zz.meshes : zz.getActiveMeshes().data,
            Xz = this.renderList || zz.frameGraph ? tz.length : zz.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[Wz], this.onBeforeRenderObservable.notifyObservers(Wz);
          let Oz = null,
            oz = Xz;
          this.getCustomRenderList && (Oz = this.getCustomRenderList(Wz, tz, Xz), Oz && (oz = Oz.length)), Oz || (Oz = tz), this.options.doNotChangeAspectRatio || zz.updateTransformMatrix(!0);
          for (let zz = 0; zz < oz && sz; ++zz) {
            const tz = Oz[zz];
            if (!tz.isEnabled() || tz.isBlocked || !tz.isVisible || !tz.kY) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(tz, this.refreshRate, !0)) {
                sz = !1;
                continue
              }
            } else if (!tz.isReady(!0)) {
              sz = !1;
              continue
            }
            let Fz = tz._edgesRenderer,
              Wz = tz.hasThinInstances;
            if (tz.VJ) {
              const zz = tz.AFz;
              zz.edgesShareWithInstances && zz._edgesRenderer?.isEnabled && (Fz = zz._edgesRenderer, Wz = !0)
            } else tz.jFz && tz.edgesShareWithInstances && (Wz = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && Fz?.isEnabled && (Fz.isReady(Wz) || (sz = !1))
          }
          if (this.renderParticles && zz.particlesEnabled) {
            const tz = this.particleSystemList || zz.lY;
            for (const zz of tz) zz.isReady() || (sz = !1)
          }
          if (this.renderSprites && zz.spritesEnabled) {
            const tz = this.spriteManagerList || zz.spriteManagers;
            if (tz)
              for (const Fz of tz) zz.activeCamera && 0 === (Fz.layerMask & zz.activeCamera.layerMask) || Fz.isReady && !Fz.isReady() && (sz = !1)
          }
          this.onAfterRenderObservable.notifyObservers(Wz), Fz > 1 && (zz.incrementRenderId(), zz.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = tz, sz
      }
      _prepareRenderingManager() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const sz = this._scene;
        let Fz, Wz, Xz = null;
        const Oz = this.renderList ? this.renderList : sz.frameGraph ? sz.meshes : sz.getActiveMeshes().data,
          oz = this.renderList || sz.frameGraph ? Oz.length : sz.getActiveMeshes().length;
        if (this.getCustomRenderList && (Xz = this.getCustomRenderList(zz, Oz, oz)), Xz) Fz = Xz.length, Wz = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !tz && !this._engine.isWebGPU) return Oz;
          this._defaultRenderListPrepared = !0, Xz = Oz, Fz = oz, Wz = !this.renderList || this.forceLayerMaskCheck
        }
        const vz = sz.activeCamera,
          Uz = this.cameraForLOD ?? vz,
          Kz = sz.getBoundingBoxRenderer?.();
        if (sz._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && Kz) {
            Kz.reset();
            for (let zz = 0; zz < this._activeBoundingBoxes.length; zz++) {
              const tz = this._activeBoundingBoxes.data[zz];
              Kz.renderList.push(tz)
            }
          }
          return Xz
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), Kz && Kz.reset(), this.renderMeshes) {
          const zz = sz.getRenderId(),
            tz = sz.getFrameId();
          for (let Oz = 0; Oz < Fz; Oz++) {
            const Fz = Xz[Oz];
            if (Fz && !Fz.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(Fz, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!Fz.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let Xz, Oz;
              if (Uz) {
                const zz = Fz._internalAbstractMeshDataInfo._currentLOD.get(Uz);
                zz && zz[1] === tz ? Xz = zz[0] : (Xz = sz.customLODSelector ? sz.customLODSelector(Fz, Uz) : Fz.getLOD(Uz), zz ? (zz[0] = Xz, zz[1] = tz) : Fz._internalAbstractMeshDataInfo._currentLOD.set(Uz, [Xz, tz]))
              } else Xz = Fz;
              if (!Xz) continue;
              if (Xz !== Fz && 0 !== Xz.billboardMode && Xz.computeWorldMatrix(), Xz._preActivateForIntermediateRendering(zz), Oz = !(!Wz || !vz) && 0 === (Fz.layerMask & vz.layerMask), Fz.isEnabled() && Fz.isVisible && Fz.kY && !Oz) {
                if (this._activeMeshes.push(Fz), Xz._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, Xz !== Fz && Xz._activate(zz, !0), this.enableBoundingBoxRendering && Kz && Kz._preActiveMesh(Fz), Fz._activate(zz, !0) && Fz.kY.length) {
                  Fz.VJ ? Fz._internalAbstractMeshDataInfo._actAsRegularMesh && (Xz = Fz) : Xz._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, Xz._internalAbstractMeshDataInfo._isActiveIntermediate = !0, sz._prepareSkeleton(Xz);
                  for (let zz = 0; zz < Xz.kY.length; zz++) {
                    const tz = Xz.kY[zz];
                    this.enableBoundingBoxRendering && Kz && Kz._evaluateSubMesh(Fz, tz), this._renderingManager.dispatch(tz, Xz)
                  }
                }
                Fz._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && Kz && tz)
          for (let uz = 0; uz < Kz.renderList.length; uz++) {
            const zz = Kz.renderList.data[uz];
            this._activeBoundingBoxes.push(zz)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const zz = this.particleSystemList || sz.lY;
          for (let tz = 0; tz < zz.length; tz++) {
            const sz = zz[tz],
              Fz = sz.emitter;
            sz.isStarted() && Fz && (!Fz.position || Fz.isEnabled()) && this._renderingManager.dispatchParticles(sz)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return Xz
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(zz, tz, sz, Fz)
      }
      setRenderingAutoClearDepthStencil(zz, tz) {
        let sz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Fz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(zz, tz, sz, Fz), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const zz = new Dz(this.name, this._scene, this.options);
        return this.renderList && (zz.renderList = this.renderList.slice(0)), zz
      }
      dispose() {
        const zz = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          tz = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let sz = 0; sz < tz; sz++) {
          const tz = zz[sz];
          tz && void 0 !== tz.getMaterialForRenderPass(this.renderPassId) && tz.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const sz of this._sceneUBOs) sz.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === Dz.REFRESHRATE_RENDER_ONCE && (this.refreshRate = Dz.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    Dz.REFRESHRATE_RENDER_ONCE = 0, Dz.REFRESHRATE_RENDER_ONEVERYFRAME = 1, Dz.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var gz = sz(39065);
    class Hz extends Xz.g {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate
      }
      set renderListPredicate(zz) {
        this._objectRenderer.renderListPredicate = zz
      }
      get renderList() {
        return this._objectRenderer.renderList
      }
      set renderList(zz) {
        this._objectRenderer.renderList = zz
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList
      }
      set particleSystemList(zz) {
        this._objectRenderer.particleSystemList = zz
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList
      }
      set getCustomRenderList(zz) {
        this._objectRenderer.getCustomRenderList = zz
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles
      }
      set renderParticles(zz) {
        this._objectRenderer.renderParticles = zz
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites
      }
      set renderSprites(zz) {
        this._objectRenderer.renderSprites = zz
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering
      }
      set enableBoundingBoxRendering(zz) {
        this._objectRenderer.enableBoundingBoxRendering = zz
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering
      }
      set enableOutlineRendering(zz) {
        this._objectRenderer.enableOutlineRendering = zz
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck
      }
      set forceLayerMaskCheck(zz) {
        this._objectRenderer.forceLayerMaskCheck = zz
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera
      }
      set activeCamera(zz) {
        this._objectRenderer.activeCamera = zz
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD
      }
      set cameraForLOD(zz) {
        this._objectRenderer.cameraForLOD = zz
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing
      }
      set disableImageProcessing(zz) {
        this._objectRenderer.disableImageProcessing = zz
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction
      }
      set customIsReadyFunction(zz) {
        this._objectRenderer.customIsReadyFunction = zz
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction
      }
      set customRenderFunction(zz) {
        this._objectRenderer.customRenderFunction = zz
      }
      get postProcesses() {
        return this._postProcesses
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled
      }
      set onAfterUnbind(zz) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(zz)
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable
      }
      set onBeforeRender(zz) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(zz)
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable
      }
      set onAfterRender(zz) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(zz)
      }
      set onClear(zz) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(zz)
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList
      }
      set _waitingRenderList(zz) {
        this._objectRenderer._waitingRenderList = zz
      }
      get renderPassId() {
        return this._objectRenderer.renderPassId
      }
      get renderPassIds() {
        return this._objectRenderer.renderPassIds
      }
      get currentRefreshId() {
        return this._objectRenderer.currentRefreshId
      }
      setMaterialForRendering(zz, tz) {
        this._objectRenderer.setMaterialForRendering(zz, tz)
      }
      get isMulti() {
        return this._renderTarget?.isMulti ?? !1
      }
      get renderTargetOptions() {
        return this._renderTargetOptions
      }
      get renderTarget() {
        return this._renderTarget
      }
      _onRatioRescale() {
        this._sizeRatio && this.resize(this._initialSizeParameter)
      }
      set boundingBoxSize(zz) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(zz)) return;
        this._boundingBoxSize = zz;
        const tz = this.aJ();
        tz && tz.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(zz, tz, sz) {
        let Oz, oz, Uz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Kz = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          uz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Nz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          bz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Xz.g.TRILINEAR_SAMPLINGMODE,
          wz = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          gz = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          Hz = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          Bz = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          Pz = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          rz = arguments.length > 13 ? arguments[13] : void 0,
          Yz = arguments.length > 14 ? arguments[14] : void 0,
          xz = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          mz = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          Jz = !0,
          Iz = !1;
        if ("object" === typeof Uz) {
          const zz = Uz;
          Uz = !!zz.generateMipMaps, Kz = zz.doNotChangeAspectRatio ?? !0, uz = zz.type ?? 0, Nz = !!zz.isCube, bz = zz.samplingMode ?? Xz.g.TRILINEAR_SAMPLINGMODE, wz = zz.generateDepthBuffer ?? !0, gz = !!zz.generateStencilBuffer, Hz = !!zz.isMulti, Bz = zz.format ?? 5, Pz = !!zz.delayAllocation, rz = zz.samples, Yz = zz.creationFlags, xz = !!zz.noColorAttachment, mz = !!zz.useSRGBBuffer, Oz = zz.colorAttachment, Jz = zz.gammaSpace ?? Jz, oz = zz.existingObjectRenderer, Iz = !!zz.enableClusteredLights
        }
        if (super(null, sz, !Uz, void 0, bz, void 0, void 0, void 0, void 0, Bz), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new Fz.c, this.onAfterUnbindObservable = new Fz.c, this.onClearObservable = new Fz.c, this.onResizeObservable = new Fz.c, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = Wz.p.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(sz = this.aJ())) return;
        const Cz = this.aJ().FD();
        this._gammaSpace = Jz, this._coordinatesMode = Xz.g.PROJECTION_MODE, this.name = zz, this.isRenderTarget = !0, this._initialSizeParameter = tz, this._dontDisposeObjectRenderer = !!oz, this._processSizeParameter(tz), this._objectRenderer = oz ?? new Dz(zz, sz, {
          numPasses: Nz ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: Kz,
          enableClusteredLights: Iz
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const zz = this._scene;
          if (!this._disableEngineStages)
            for (const tz of zz._beforeRenderTargetClearStage) tz.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(Cz) : this.skipInitialClear || Cz.clear(this.clearColor ?? zz.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || zz.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const tz of zz._beforeRenderTargetDrawStage) tz.action(this, this._currentFaceIndex, this._currentLayer);
          Cz._debugPushGroup && Cz._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (Cz._debugPopGroup && Cz._debugPopGroup(), !this._disableEngineStages)
            for (const tz of this._scene._afterRenderTargetDrawStage) tz.action(this, this._currentFaceIndex, this._currentLayer);
          const zz = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const tz of this._scene._afterRenderTargetPostProcessStage) tz.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = zz), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), Cz) : vz.e.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(Cz) : this.skipInitialClear || Cz.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = Cz.onResizeObservable.add((() => {})), this._generateMipMaps = !!Uz, this._doNotChangeAspectRatio = Kz, Hz || (this._renderTargetOptions = {
          generateMipMaps: Uz,
          type: uz,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: wz,
          generateStencilBuffer: gz,
          samples: rz,
          creationFlags: Yz,
          noColorAttachment: xz,
          useSRGBBuffer: mz,
          colorAttachment: Oz,
          label: this.name
        }, this.samplingMode === Xz.g.NEAREST_SAMPLINGMODE && (this.wrapU = Xz.g.CLAMP_ADDRESSMODE, this.wrapV = Xz.g.CLAMP_ADDRESSMODE), Pz || (Nz ? (this._renderTarget = sz.FD().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = Xz.g.INVCUBIC_MODE, this._textureMatrix = Wz.e.Identity()) : this._renderTarget = sz.FD().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== rz && (this.samples = rz)))
      }
      createDepthStencilTexture() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Xz = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(zz, tz, sz, Fz, Wz, Xz)
      }
      _processSizeParameter(zz) {
        if (zz.ratio) {
          this._sizeRatio = zz.ratio;
          const tz = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(tz.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(tz.getRenderHeight(), this._sizeRatio)
          }
        } else this._size = zz
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples
      }
      set samples(zz) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(zz))
      }
      addPostProcess(zz) {
        if (!this._postProcessManager) {
          const zz = this.aJ();
          if (!zz) return;
          this._postProcessManager = new Oz.c(zz), this._postProcesses = new Array
        }
        this._postProcesses.push(zz), this._postProcesses[0].autoClear = !1
      }
      clearPostProcesses() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (zz)
            for (const zz of this._postProcesses) zz.dispose();
          this._postProcesses = []
        }
      }
      removePostProcess(zz) {
        if (!this._postProcesses) return;
        const tz = this._postProcesses.indexOf(zz); - 1 !== tz && (this._postProcesses.splice(tz, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter()
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate
      }
      set refreshRate(zz) {
        this._objectRenderer.refreshRate = zz
      }
      _shouldRender() {
        return this._objectRenderer.shouldRender()
      }
      getRenderSize() {
        return this.getRenderWidth()
      }
      getRenderWidth() {
        return this._size.width ? this._size.width : this._size
      }
      getRenderHeight() {
        return this._size.width ? this._size.height : this._size
      }
      getRenderLayers() {
        const zz = this._size.layers;
        if (zz) return zz;
        const tz = this._size.depth;
        return tz || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(zz) {
        const tz = Math.max(1, this.getRenderSize() * zz);
        this.resize(tz)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(zz) {
        const tz = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const sz = this.aJ();
        sz && (this._processSizeParameter(zz), this._renderTarget = tz ? sz.FD().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : sz.FD().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(zz, tz)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => sz(40945))).then((zz => this._dumpTools = zz))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const zz = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), zz
      }
      _render() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const sz = this.aJ();
        if (!sz) return;
        void 0 !== this.useCameraPostProcesses && (zz = this.useCameraPostProcesses);
        const Fz = sz.FD();
        if (Fz._debugPushGroup && Fz._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let Wz = 0; Wz < 6; Wz++) this._renderToTarget(Wz, zz, tz), sz.incrementRenderId(), sz.resetCachedMaterial();
          else this._renderToTarget(0, zz, tz);
        else
          for (let Wz = 0; Wz < this.getRenderLayers(); Wz++) this._renderToTarget(0, zz, tz, Wz), sz.incrementRenderId(), sz.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), Fz._debugPopGroup && Fz._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(zz, tz) {
        const sz = zz * tz,
          Fz = (0, oz.m)(sz + 16384 / (128 + sz));
        return Math.min((0, oz.d)(zz), Fz)
      }
      _bindFrameBuffer() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const sz = this.aJ();
        if (!sz) return;
        const Fz = sz.FD();
        this._renderTarget && Fz.bindFramebuffer(this._renderTarget, this.isCube ? zz : void 0, void 0, void 0, this.ignoreCameraViewport, 0, tz)
      }
      _unbindFrameBuffer(zz, tz) {
        this._renderTarget && zz.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(tz)
        }))
      }
      _prepareFrame(zz, tz, sz, Fz) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(tz, sz) : Fz && zz.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(tz, sz)
      }
      _renderToTarget(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Wz = this.aJ();
        if (!Wz) return;
        const Xz = Wz.FD();
        this._currentFaceIndex = zz, this._currentLayer = Fz, this._currentUseCameraPostProcess = tz, this._currentDumpForDebug = sz, this._prepareFrame(Wz, zz, Fz, tz), this._objectRenderer.render(zz + Fz, !0), this._unbindFrameBuffer(Xz, zz), this._texture && this.isCube && 5 === zz && Xz.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(zz, tz, sz, Fz)
      }
      setRenderingAutoClearDepthStencil(zz, tz) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(zz, tz)
      }
      clone() {
        const zz = this.getSize(),
          tz = new Hz(this.name, zz, this.aJ(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return tz.hasAlpha = this.hasAlpha, tz.level = this.level, tz.coordinatesMode = this.coordinatesMode, this.renderList && (tz.renderList = this.renderList.slice(0)), tz
      }
      serialize() {
        if (!this.name) return null;
        const zz = super.serialize();
        if (zz.renderTargetSize = this.getRenderSize(), zz.renderList = [], this.renderList)
          for (let tz = 0; tz < this.renderList.length; tz++) zz.renderList.push(this.renderList[tz].id);
        return zz
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.aJ().FD().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const zz = this.aJ();
        if (!zz) return;
        let tz = zz.customRenderTargets.indexOf(this);
        tz >= 0 && zz.customRenderTargets.splice(tz, 1);
        for (const sz of zz.cameras) tz = sz.customRenderTargets.indexOf(this), tz >= 0 && sz.customRenderTargets.splice(tz, 1);
        this._renderTarget?.dispose(), this._renderTarget = null, this._texture = null, super.dispose()
      }
      _rebuild() {
        this._objectRenderer._rebuild(), this._postProcessManager && this._postProcessManager._rebuild()
      }
      freeRenderingGroups() {
        this._objectRenderer.freeRenderingGroups()
      }
      getViewCount() {
        return 1
      }
    }
    Hz.REFRESHRATE_RENDER_ONCE = Dz.REFRESHRATE_RENDER_ONCE, Hz.REFRESHRATE_RENDER_ONEVERYFRAME = Dz.REFRESHRATE_RENDER_ONEVERYFRAME, Hz.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = Dz.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(Hz.prototype, "noPrePassRenderer") || Object.defineProperty(Hz.prototype, "noPrePassRenderer", (0, gz.f)("RenderTargetTexture", "noPrePassRenderer"))
  },
  40915: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Uz,
      f: () => Kz
    });
    var Fz = sz(39293),
      Wz = sz(37536),
      Xz = sz(36505),
      Oz = sz(39036),
      oz = sz(39485);
    const vz = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class Uz {
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vz;
        this._fullscreenViewport = new Wz.b(0, 0, 1, 1);
        const sz = tz.positions ?? vz.positions,
          Xz = tz.indices ?? vz.indices;
        this.engine = zz, this._vertexBuffers = {
          [Fz.m.PositionKind]: new Fz.m(zz, sz, Fz.m.PositionKind, !1, !1, 2)
        }, this._indexBuffer = zz.createIndexBuffer(Xz), this._indexBufferLength = Xz.length, this._onContextRestoredObserver = zz.onContextRestoredObservable.add((() => {
          this._indexBuffer = zz.createIndexBuffer(Xz);
          for (const zz in this._vertexBuffers) {
            this._vertexBuffers[zz]._rebuild()
          }
        }))
      }
      setViewport() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.engine.setViewport(zz)
      }
      bindBuffers(zz) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, zz)
      }
      applyEffectWrapper(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = tz, this.engine.stencilState.stencilTest = sz, this.engine.enableEffect(zz.drawWrapper), this.bindBuffers(zz.effect), zz.onApplyObservable.notifyObservers({})
      }
      saveStates() {
        this._savedStateDepthTest = this.engine.depthCullingState.depthTest, this._savedStateStencilTest = this.engine.stencilState.stencilTest
      }
      restoreStates() {
        this.engine.depthCullingState.depthTest = this._savedStateDepthTest, this.engine.stencilState.stencilTest = this._savedStateStencilTest
      }
      draw() {
        this.engine.drawElementsType(0, 0, this._indexBufferLength)
      }
      _isRenderTargetTexture(zz) {
        return void 0 !== zz.renderTarget
      }
      render(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!zz.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const sz = null === tz ? null : this._isRenderTargetTexture(tz) ? tz.renderTarget : tz;
        sz && this.engine.bindFramebuffer(sz), this.applyEffectWrapper(zz), this.draw(), sz && this.engine.unBindFramebuffer(sz), this.restoreStates()
      }
      dispose() {
        const zz = this._vertexBuffers[Fz.m.PositionKind];
        zz && (zz.dispose(), delete this._vertexBuffers[Fz.m.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class Kz {
      static RegisterShaderCodeProcessing(zz, tz) {
        tz ? Kz._CustomShaderCodeProcessing[zz ?? ""] = tz : delete Kz._CustomShaderCodeProcessing[zz ?? ""]
      }
      static _GetShaderCodeProcessing(zz) {
        return Kz._CustomShaderCodeProcessing[zz] ?? Kz._CustomShaderCodeProcessing[""]
      }
      get name() {
        return this.options.name
      }
      set name(zz) {
        this.options.name = zz
      }
      isReady() {
        return this._drawWrapper.effect?.isReady() ?? !1
      }
      get drawWrapper() {
        return this._drawWrapper
      }
      get effect() {
        return this._drawWrapper.effect
      }
      set effect(zz) {
        this._drawWrapper.effect = zz
      }
      constructor(zz) {
        this.alphaMode = 0, this.onEffectCreatedObservable = new Xz.c(void 0, !0), this.onApplyObservable = new Xz.c, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
          ...zz,
          name: zz.name || "effectWrapper",
          engine: zz.engine,
          uniforms: zz.uniforms || zz.uniformNames || [],
          uniformNames: void 0,
          samplers: zz.samplers || zz.samplerNames || [],
          samplerNames: void 0,
          attributeNames: zz.attributeNames || ["position"],
          uniformBuffers: zz.uniformBuffers || [],
          defines: zz.defines || "",
          useShaderStore: zz.useShaderStore || !1,
          vertexUrl: zz.vertexUrl || zz.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: zz.fragmentShader || "pass",
          indexParameters: zz.indexParameters,
          blockCompilation: zz.blockCompilation || !1,
          shaderLanguage: zz.shaderLanguage || 0,
          onCompiled: zz.onCompiled || void 0,
          extraInitializations: zz.extraInitializations || void 0,
          extraInitializationsAsync: zz.extraInitializationsAsync || void 0,
          useAsPostProcess: zz.useAsPostProcess ?? !1,
          allowEmptySourceTexture: zz.allowEmptySourceTexture ?? !1
        }, this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), zz.vertexUrl || zz.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add((() => {
          this.effect.setFloat2("scale", 1, 1)
        }))), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add((() => {
          this.bind()
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.onContextRestoredObservable.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new oz.c(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const tz = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, tz, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Fz = arguments.length > 2 ? arguments[2] : void 0,
          Wz = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, Wz && this._importPromises.push(...Wz);
        const Xz = this.options.engine.isWebGPU && !Kz.ForceGLSL;
        this._gatherImports(Xz, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(Xz && this._webGPUReady ? sz.e(356).then((() => sz(60562))) : sz.e(345).then((() => sz(60319)))), void 0 !== Fz && Fz(Xz, this._importPromises), Xz && this._webGPUReady && (this.options.shaderLanguage = 1), zz || this.updateEffect(tz)
      }
      updateEffect() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Fz = arguments.length > 3 ? arguments[3] : void 0,
          Wz = arguments.length > 4 ? arguments[4] : void 0,
          Xz = arguments.length > 5 ? arguments[5] : void 0,
          oz = arguments.length > 6 ? arguments[6] : void 0,
          vz = arguments.length > 7 ? arguments[7] : void 0;
        const Uz = Kz._GetShaderCodeProcessing(this.name);
        if (Uz?.defineCustomBindings) {
          const Fz = tz?.slice() ?? [];
          Fz.push(...this.options.uniforms);
          const Wz = sz?.slice() ?? [];
          Wz.push(...this.options.samplers), zz = Uz.defineCustomBindings(this.name, zz, Fz, Wz), tz = Fz, sz = Wz
        }
        this.options.defines = zz || "";
        const uz = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let Nz;
        Nz = this.options.extraInitializationsAsync ? async () => {
          await (uz?.()), await this.options.extraInitializationsAsync()
        }: uz, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: oz ?? this._shaderPath.vertex,
          fragment: vz ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: tz || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: sz || this.options.samplers,
          defines: null !== zz ? zz : "",
          fallbacks: null,
          onCompiled: Wz ?? this.options.onCompiled,
          onError: Xz ?? null,
          indexParameters: Fz || this.options.indexParameters,
          processCodeAfterIncludes: Uz?.processCodeAfterIncludes ? (zz, tz) => Uz.processCodeAfterIncludes(this.name, zz, tz) : null,
          processFinalCode: Uz?.processFinalCode ? (zz, tz) => Uz.processFinalCode(this.name, zz, tz) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: Nz
        }, this.options.engine) : this._drawWrapper.effect = new Oz.e(this._shaderPath, this.options.attributeNames, tz || this.options.uniforms, sz || this.options.samplerNames, this.options.engine, zz, void 0, Wz || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, Nz), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !zz && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), Kz._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.FD().onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    Kz.ForceGLSL = !1, Kz._CustomShaderCodeProcessing = {}
  },
  40945: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      Dispose: () => Bz,
      DumpData: () => Hz,
      DumpDataAsync: () => gz,
      DumpFramebuffer: () => Dz,
      DumpTools: () => Pz,
      EncodeImageAsync: () => wz,
      RegisterDumpTools: () => Yz
    });
    var Fz = sz(39167),
      Wz = sz(40915),
      Xz = sz(39264),
      Oz = sz(36507),
      oz = sz(36502),
      vz = sz(38097),
      Uz = sz(39222),
      Kz = sz(39170);
    let uz = null;
    async function Nz() {
      return uz || (uz = async function() {
        const zz = oz.c.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        zz instanceof OffscreenCanvas && vz.e.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: tz
        } = await Promise.resolve().then((() => sz(39031)));
        if (!tz.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const Fz = new tz(zz, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        oz.c.Instances.pop(), oz.c.OnEnginesDisposedObservable.add((zz => {
          Fz && zz !== Fz && !Fz.zsz && 0 === oz.c.Instances.length && Bz()
        })), Fz.getCaps().parallelShaderCompile = void 0;
        const Xz = new Wz.d(Fz),
          {
            passPixelShader: Oz
          } = await sz.e(364).then((() => sz(60616))),
          Uz = new Wz.f({
            engine: Fz,
            name: Oz.name,
            fragmentShader: Oz.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: zz,
          dumpEngine: {
            engine: Fz,
            renderer: Xz,
            wrapper: Uz
          }
        }
      }()), await uz
    }
    let bz = (() => {
      var zz;
      let tz, sz = [];
      return zz = class {
        static async EncodeImageAsync(zz, tz, sz, Fz, Wz, Oz) {
          const oz = await Nz(),
            vz = oz.dumpEngine;
          vz.engine.setSize(tz, sz, !0);
          const Uz = vz.engine.createRawTexture(zz, tz, sz, 5, !1, !Wz, 1);
          return vz.renderer.setViewport(), vz.renderer.applyEffectWrapper(vz.wrapper), vz.wrapper.effect._bindTexture("textureSampler", Uz), vz.renderer.draw(), Uz.dispose(), await new Promise(((zz, tz) => {
            Xz.j.ToBlob(oz.canvas, (sz => {
              sz ? zz(sz) : tz(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), Fz, Oz)
          }))
        }
      }, (() => {
        const Wz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        tz = [Kz.m], (0, Fz.h)(zz, null, tz, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: zz => "EncodeImageAsync" in zz,
            get: zz => zz.EncodeImageAsync
          },
          metadata: Wz
        }, null, sz), Wz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Wz
        }), (0, Fz.k)(zz, sz)
      })(), zz
    })();
    const wz = bz.EncodeImageAsync;
    async function Dz(zz, tz, sz, Fz) {
      let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Xz = arguments.length > 5 ? arguments[5] : void 0,
        Oz = arguments.length > 6 ? arguments[6] : void 0;
      const oz = await sz.readPixels(0, 0, zz, tz);
      Hz(zz, tz, new Uint8Array(oz.buffer), Fz, Wz, Xz, !0, void 0, Oz)
    }
    async function gz(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Wz = arguments.length > 4 ? arguments[4] : void 0,
        oz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Kz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        uz = arguments.length > 7 ? arguments[7] : void 0;
      if (sz instanceof Float32Array) {
        const zz = new Uint8Array(sz.length);
        let tz = sz.length;
        for (; tz--;) {
          const Fz = sz[tz];
          zz[tz] = Math.round(255 * (0, Oz.Clamp)(Fz))
        }
        sz = zz
      }
      const Nz = await bz.EncodeImageAsync(sz, zz, tz, Fz, oz, uz);
      void 0 !== Wz && Xz.j.DownloadBlob(Nz, Wz), Nz.type !== Fz && vz.e.Warn(`DumpData: The requested mimeType '${Fz}' is not supported. The result has mimeType '${Nz.type}' instead.`);
      const wz = await Nz.arrayBuffer();
      return Kz ? wz : `data:${Fz};base64,${(0,Uz.g)(wz)}`
    }

    function Hz(zz, tz, sz, Fz) {
      let Wz = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== Wz || Fz || (Wz = ""), gz(zz, tz, sz, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", Wz, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((zz => {
        Fz && Fz(zz)
      }))
    }

    function Bz() {
      uz && (uz?.then((zz => {
        zz.canvas instanceof HTMLCanvasElement && zz.canvas.remove(), zz.dumpEngine && (zz.dumpEngine.engine.dispose(), zz.dumpEngine.renderer.dispose(), zz.dumpEngine.wrapper.dispose())
      })), uz = null)
    }
    const Pz = {
      DumpData: Hz,
      DumpDataAsync: gz,
      DumpFramebuffer: Dz,
      Dispose: Bz
    };
    let rz = !1;

    function Yz() {
      if (rz) return;
      rz = !0;
      Xz.j.DumpData = Hz, Xz.j.DumpDataAsync = gz, Xz.j.DumpFramebuffer = Dz
    }
  },
  40928: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => bz,
      c: () => wz,
      d: () => Dz
    });
    var Fz = sz(39617),
      Wz = sz(40936),
      Xz = sz(39167),
      Oz = sz(40909),
      oz = sz(39181),
      vz = sz(40942),
      Uz = sz(39170);
    class Kz extends Oz.c {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(zz, tz) {
        let sz = arguments.length > 4 ? arguments[4] : void 0;
        const Fz = {
          size: "number" === typeof tz ? tz : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: sz,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...tz
        };
        super(zz, vz.f.FragmentUrl, {
          effectWrapper: "number" !== typeof tz && tz.effectWrapper ? void 0 : new vz.f(zz, sz, Fz),
          ...Fz
        })
      }
      static _Parse(zz, tz, sz, Fz) {
        return oz.e.Parse((() => new Kz(zz.name, zz.options, tz, zz.renderTargetSamplingMode, zz._engine, zz.reusable)), zz, sz, Fz)
      }
    }(() => {
      var zz;
      let tz, sz = Oz.c,
        Fz = [];
      zz = class extends sz {
        get face() {
          return this._effectWrapper.face
        }
        set face(zz) {
          this._effectWrapper.face = zz
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(zz, tz) {
          let sz = arguments.length > 4 ? arguments[4] : void 0;
          const Wz = {
            size: "number" === typeof tz ? tz : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: sz,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...tz
          };
          super(zz, vz.f.FragmentUrl, {
            effectWrapper: "number" !== typeof tz && tz.effectWrapper ? void 0 : new vz.d(zz, sz, Wz),
            ...Wz
          }), (0, Xz.k)(this, Fz)
        }
        static _Parse(tz, sz, Fz, Wz) {
          return oz.e.Parse((() => new zz(tz.name, tz.options, sz, tz.renderTargetSamplingMode, tz._engine, tz.reusable)), tz, Fz, Wz)
        }
      }, (() => {
        const Wz = "function" === typeof Symbol && Symbol.metadata ? Object.create(sz[Symbol.metadata] ?? null) : void 0;
        tz = [(0, Uz.J)()], (0, Xz.h)(zz, null, tz, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: zz => "face" in zz,
            get: zz => zz.face
          },
          metadata: Wz
        }, null, Fz), Wz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Wz
        })
      })()
    })();
    var uz = sz(36507),
      Nz = sz(39234);

    function bz(zz, tz, sz, Fz, Wz, Xz, oz, vz) {
      const Uz = tz.FD();
      return tz.isReady = !1, Wz = Wz ?? tz.samplingMode, Fz = Fz ?? tz.type, Xz = Xz ?? tz.format, oz = oz ?? tz.width, vz = vz ?? tz.height, -1 === Fz && (Fz = 0), new Promise((Kz => {
        const uz = new Oz.c("postprocess", zz, null, null, 1, null, Wz, Uz, !1, void 0, Fz, void 0, null, !1, Xz);
        uz.externalTextureSamplerBinding = !0;
        const Nz = Uz.createRenderTargetTexture({
          width: oz,
          height: vz
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: Wz,
          type: Fz,
          format: Xz
        });
        uz.onEffectCreatedObservable.addOnce((zz => {
          zz.executeWhenCompiled((() => {
            uz.onApply = zz => {
              zz._bindTexture("textureSampler", tz), zz.setFloat2("scale", 1, 1)
            }, sz.postProcessManager.directRender([uz], Nz, !0), Uz.restoreDefaultFramebuffer(), Uz._releaseTexture(tz), uz && uz.dispose(), Nz._swapAndDie(tz), tz.type = Fz, tz.format = 5, tz.isReady = !0, Kz(tz)
          }))
        }))
      }))
    }
    async function wz(zz, tz, Xz) {
      let oz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        vz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Uz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Kz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(zz) {
        if (zz.isReady()) return;
        if (zz.loadingError) throw new Error(zz.errorObject?.message || `Texture ${zz.name} errored while loading.`);
        const tz = zz.onLoadObservable;
        if (tz) return await new Promise((zz => tz.addOnce((() => zz()))));
        const sz = zz._texture?.onLoadedObservable;
        if (sz) return await new Promise((zz => sz.addOnce((() => zz()))));
        throw new Error(`Cannot determine readiness of texture ${zz.name}.`)
      }(zz);
      const Nz = zz.getInternalTexture(),
        bz = zz.is3D || !!Nz?.is3D,
        {
          width: wz,
          height: Dz
        } = zz.getSize(),
        gz = tz ?? wz,
        Hz = Xz ?? Dz;
      if (Uz || bz || function(zz) {
          switch (zz) {
            case 36492:
            case 36493:
            case 36495:
            case 36494:
            case 33779:
            case 35919:
            case 33778:
            case 35918:
            case 33777:
            case 33776:
            case 35917:
            case 35916:
            case 37808:
            case 37809:
            case 37810:
            case 37811:
            case 37812:
            case 37813:
            case 37814:
            case 37815:
            case 37816:
            case 37817:
            case 37818:
            case 37819:
            case 37820:
            case 37821:
            case 37840:
            case 37841:
            case 37842:
            case 37843:
            case 37844:
            case 37845:
            case 37846:
            case 37847:
            case 37848:
            case 37849:
            case 37850:
            case 37851:
            case 37852:
            case 37853:
            case 36196:
            case 37492:
            case 37493:
            case 37494:
            case 37495:
            case 37496:
            case 37497:
              return !0;
            default:
              return !1
          }
        }(zz.textureFormat) || gz !== wz || Hz !== Dz) {
        if (zz.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${Uz?"RTT":"compression"} is not supported.`);
        return await async function(zz, tz, Xz, oz, vz) {
          let Uz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const Kz = zz.aJ(),
            uz = Kz.FD(),
            Nz = zz.getInternalTexture(),
            bz = zz.is3D || !!Nz?.is3D;
          let wz;
          if (uz.isWebGPU ? bz ? await sz.e(360).then((() => sz(60593))) : zz.isCube ? await sz.e(361).then((() => sz(60602))) : await sz.e(362).then((() => sz(60605))) : bz ? await sz.e(357).then((() => sz(60575))) : zz.isCube ? await sz.e(358).then((() => sz(60578))) : await sz.e(359).then((() => sz(60584))), bz) wz = new Oz.c("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: Fz.g.NEAREST_NEAREST_MIPNEAREST,
            engine: uz,
            shaderLanguage: uz.isWebGPU ? 1 : 0
          });
          else if (zz.isCube) {
            const zz = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            wz = new Oz.c("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: Fz.g.NEAREST_NEAREST_MIPNEAREST,
              engine: uz,
              defines: zz[oz],
              shaderLanguage: uz.isWebGPU ? 1 : 0
            })
          } else wz = new Oz.c("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: Fz.g.NEAREST_NEAREST_MIPNEAREST,
            engine: uz,
            shaderLanguage: uz.isWebGPU ? 1 : 0
          });
          await new Promise((zz => {
            wz.onEffectCreatedObservable.addOnce((tz => {
              tz.executeWhenCompiled((() => {
                zz(0)
              }))
            }))
          }));
          const Dz = new Wz.d("temp", {
            width: tz,
            height: Xz
          }, Kz, !1);
          wz.onApply = function(tz) {
            tz.setTexture("textureSampler", zz), tz.setFloat("lod", vz), tz.setInt("gamma", zz.gammaSpace ? 1 : 0), bz && tz.setFloat("slice", Uz)
          };
          try {
            if (Dz.renderTarget && Nz) {
              const sz = Nz.samplingMode;
              0 !== vz ? zz.updateSamplingMode(Fz.g.NEAREST_NEAREST_MIPNEAREST) : zz.updateSamplingMode(Fz.g.NEAREST_NEAREST), Kz.postProcessManager.directRender([wz], Dz.renderTarget, !0), zz.updateSamplingMode(sz);
              const Wz = await uz.readPixels(0, 0, tz, Xz),
                Oz = new Uint8Array(Wz.buffer, Wz.byteOffset, Wz.byteLength);
              return uz.unBindFramebuffer(Dz.renderTarget), Oz
            }
            throw Error("Render to texture failed.")
          } finally {
            Dz.dispose(), wz.dispose()
          }
        }(zz, gz, Hz, oz, vz, Kz)
      }
      let Bz = await zz.readPixels(oz, vz);
      if (!Bz) throw new Error(`Failed to read pixels from texture ${zz.name}.`);
      if (Bz instanceof Float32Array) {
        const zz = new Uint8Array(Bz.length);
        let tz = Bz.length;
        for (; tz--;) {
          const sz = Bz[tz];
          zz[tz] = Math.round(255 * (0, uz.Clamp)(sz))
        }
        Bz = zz
      }
      const Pz = gz * Hz,
        rz = 4 * Pz;
      if (Bz.length !== rz) {
        const zz = 0 === Pz ? 0 : Bz.length / Pz;
        if (1 === zz || 2 === zz || 3 === zz) {
          const tz = new Uint8Array(rz);
          for (let sz = 0, Fz = 0, Wz = 0; sz < Pz; sz++, Wz += 4) {
            const sz = Bz[Fz++];
            if (1 === zz) {
              tz[Wz] = sz, tz[Wz + 1] = sz, tz[Wz + 2] = sz, tz[Wz + 3] = 255;
              continue
            }
            const Xz = Bz[Fz++];
            2 !== zz ? (tz[Wz] = sz, tz[Wz + 1] = Xz, tz[Wz + 2] = Bz[Fz++], tz[Wz + 3] = 255) : (tz[Wz] = sz, tz[Wz + 1] = Xz, tz[Wz + 2] = 0, tz[Wz + 3] = 255)
          }
          return tz
        }
      }
      return Bz
    }
    const Dz = {
      CreateResizedCopy: function(zz, tz, sz) {
        let Xz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Oz = zz.aJ(),
          oz = Oz.FD(),
          vz = new Wz.d("resized" + zz.name, {
            width: tz,
            height: sz
          }, Oz, !zz.noMipmap, !0, zz._texture.type, !1, zz.samplingMode, !1);
        vz.wrapU = zz.wrapU, vz.wrapV = zz.wrapV, vz.uOffset = zz.uOffset, vz.vOffset = zz.vOffset, vz.uScale = zz.uScale, vz.vScale = zz.vScale, vz.uAng = zz.uAng, vz.vAng = zz.vAng, vz.wAng = zz.wAng, vz.coordinatesIndex = zz.coordinatesIndex, vz.level = zz.level, vz.anisotropicFilteringLevel = zz.anisotropicFilteringLevel, vz._texture.isReady = !1, zz.wrapU = Fz.g.CLAMP_ADDRESSMODE, zz.wrapV = Fz.g.CLAMP_ADDRESSMODE;
        const Uz = new Kz("pass", 1, null, Xz ? Fz.g.BILINEAR_SAMPLINGMODE : Fz.g.NEAREST_SAMPLINGMODE, oz, !1, 0);
        return Uz.externalTextureSamplerBinding = !0, Uz.onEffectCreatedObservable.addOnce((tz => {
          tz.executeWhenCompiled((() => {
            Uz.onApply = function(tz) {
              tz.setTexture("textureSampler", zz)
            };
            const tz = vz.renderTarget;
            tz && (Oz.postProcessManager.directRender([Uz], tz), oz.unBindFramebuffer(tz), vz.disposeFramebufferObjects(), Uz.dispose(), vz.getInternalTexture().isReady = !0)
          }))
        })), vz
      },
      ApplyPostProcess: bz,
      ToHalfFloat: Nz.g,
      FromHalfFloat: Nz.d,
      GetTextureDataAsync: wz
    }
  },
  40909: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => wz
    });
    var Fz = sz(39167),
      Wz = sz(39270),
      Xz = sz(36505),
      Oz = sz(36475),
      oz = sz(39036),
      vz = sz(39170),
      Uz = sz(39181),
      Kz = sz(36518),
      uz = sz(39077),
      Nz = sz(39111),
      bz = sz(40915);
    let wz = (() => {
        var zz;
        let tz, oz, uz, wz, Dz, Hz, Bz, Pz, rz, Yz, xz, mz, Jz, Iz, Cz, ez, Zz = [],
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
          qz = [],
          Sz = [],
          Vz = [],
          Rz = [],
          pz = [],
          fz = [],
          Ez = [],
          zt = [],
          tt = [],
          st = [],
          Ft = [],
          Wt = [];
        return zz = class {
          static get ForceGLSL() {
            return bz.f.ForceGLSL
          }
          static set ForceGLSL(zz) {
            bz.f.ForceGLSL = zz
          }
          static RegisterShaderCodeProcessing(zz, tz) {
            bz.f.RegisterShaderCodeProcessing(zz, tz)
          }
          get name() {
            return this._effectWrapper.name
          }
          set name(zz) {
            this._effectWrapper.name = zz
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode
          }
          set alphaMode(zz) {
            this._effectWrapper.alphaMode = zz
          }
          get samples() {
            return this._samples
          }
          set samples(zz) {
            this._samples = Math.min(zz, this._engine.getCaps().maxMSAASamples), this._textures.forEach((zz => {
              zz.setSamples(this._samples)
            }))
          }
          get shaderLanguage() {
            return this._shaderLanguage
          }
          getEffectName() {
            return this._fragmentUrl
          }
          set onActivate(zz) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), zz && (this._onActivateObserver = this.onActivateObservable.add(zz))
          }
          set onSizeChanged(zz) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(zz)
          }
          set onApply(zz) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(zz)
          }
          set onBeforeRender(zz) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(zz)
          }
          set onAfterRender(zz) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(zz)
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd]
          }
          set inputTexture(zz) {
            this._forcedOutputTexture = zz
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty())
          }
          getCamera() {
            return this.oV
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.m_(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(tz, sz, oz, vz, Uz, Kz) {
            let uz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              Nz = arguments.length > 7 ? arguments[7] : void 0,
              wz = arguments.length > 8 ? arguments[8] : void 0,
              Dz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              Hz = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              Bz = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              Pz = arguments.length > 12 ? arguments[12] : void 0,
              rz = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              Yz = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              xz = arguments.length > 15 ? arguments[15] : void 0,
              mz = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, Fz.k)(this, Zz), null), this.uniqueId = (0, Fz.k)(this, Gz, void 0), this.width = ((0, Fz.k)(this, Tz), (0, Fz.k)(this, cz, -1)), this.height = ((0, Fz.k)(this, jz), (0, Fz.k)(this, Az, -1)), this.nodeMaterialSource = ((0, Fz.k)(this, yz), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, Fz.k)(this, Mz, void 0), this.clearColor = ((0, Fz.k)(this, dz), (0, Fz.k)(this, hz, void 0)), this.autoClear = ((0, Fz.k)(this, Qz), (0, Fz.k)(this, kz, !0)), this.forceAutoClearInAlphaMode = ((0, Fz.k)(this, iz), (0, Fz.k)(this, Lz, !1)), this.alphaConstants = ((0, Fz.k)(this, lz), (0, Fz.k)(this, nz, void 0)), this.animations = ((0, Fz.k)(this, az), []), this.enablePixelPerfectMode = (0, Fz.k)(this, qz, !1), this.forceFullscreenViewport = ((0, Fz.k)(this, Sz), (0, Fz.k)(this, Vz, !0)), this.inspectableCustomProperties = (0, Fz.k)(this, Rz), this.scaleMode = (0, Fz.k)(this, pz, 1), this.alwaysForcePOT = ((0, Fz.k)(this, fz), (0, Fz.k)(this, Ez, !1)), this._samples = ((0, Fz.k)(this, zt), (0, Fz.k)(this, tt, 1)), this.adaptScaleToCurrentViewport = ((0, Fz.k)(this, st), (0, Fz.k)(this, Ft, !1)), this.doNotSerialize = ((0, Fz.k)(this, Wt), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new Wz.h(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new Oz.n(1, 1), this._texelSize = Oz.n.Zero(), this.onActivateObservable = new Xz.c, this.onSizeChangedObservable = new Xz.c, this.onApplyObservable = new Xz.c, this.onBeforeRenderObservable = new Xz.c, this.onAfterRenderObservable = new Xz.c, this.qJ = new Xz.c, gz();
            let Jz, Iz = 1,
              Cz = null;
            if (oz && !Array.isArray(oz)) {
              const zz = oz;
              oz = zz.uniforms ?? null, vz = zz.samplers ?? null, Iz = zz.size ?? 1, Kz = zz.camera ?? null, uz = zz.samplingMode ?? 1, Nz = zz.engine, wz = zz.reusable, Dz = Array.isArray(zz.defines) ? zz.defines.join("\n") : zz.defines ?? null, Hz = zz.textureType ?? 0, Bz = zz.vertexUrl ?? "postprocess", Pz = zz.indexParameters, rz = zz.blockCompilation ?? !1, Yz = zz.textureFormat ?? 5, xz = zz.shaderLanguage ?? 0, Cz = zz.uniformBuffers ?? null, mz = zz.extraInitializations, Jz = zz.effectWrapper
            } else Uz && (Iz = "number" === typeof Uz ? Uz : {
              width: Uz.width,
              height: Uz.height
            });
            if (this._useExistingThinPostProcess = !!Jz, this._effectWrapper = Jz ?? new bz.f({
                name: tz,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: sz,
                engine: Nz || Kz?.aJ().FD(),
                uniforms: oz,
                samplers: vz,
                uniformBuffers: Cz,
                defines: Dz,
                vertexUrl: Bz,
                indexParameters: Pz,
                blockCompilation: !0,
                shaderLanguage: xz,
                extraInitializations: void 0
              }), this.name = tz, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != Kz ? (this.oV = Kz, this._scene = Kz.aJ(), Kz.attachPostProcess(this), this._engine = this._scene.FD(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : Nz && (this._engine = Nz, this._engine.postProcesses.push(this)), this._options = Iz, this.renderTargetSamplingMode = uz || 1, this._reusable = wz || !1, this._textureType = Hz, this._textureFormat = Yz, this._shaderLanguage = xz || 0, this._samplers = vz || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = sz, this._vertexUrl = Bz, this._parameters = oz || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = Cz || [], this._indexParameters = Pz, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const tz = [];
              this._gatherImports(this._engine.isWebGPU && !zz.ForceGLSL, tz), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(rz, Dz, mz, tz)
            }
          }
          _gatherImports() {
            let zz = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? zz.push(Promise.all([sz.e(356).then((() => sz(60562)))])) : zz.push(Promise.all([sz.e(345).then((() => sz(60319)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          FD() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(zz) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = zz, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new Wz.h(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Fz = arguments.length > 3 ? arguments[3] : void 0,
              Wz = arguments.length > 4 ? arguments[4] : void 0,
              Xz = arguments.length > 5 ? arguments[5] : void 0,
              Oz = arguments.length > 6 ? arguments[6] : void 0,
              oz = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(zz, tz, sz, Fz, Wz, Xz, Oz, oz), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(zz, tz) {
            let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let Wz = 0; Wz < this._textureCache.length; Wz++)
              if (this._textureCache[Wz].texture.width === zz.width && this._textureCache[Wz].texture.height === zz.height && this._textureCache[Wz].postProcessChannel === sz && this._textureCache[Wz].texture._generateDepthBuffer === tz.generateDepthBuffer && this._textureCache[Wz].texture.samples === tz.samples) return this._textureCache[Wz].texture;
            const Fz = this._engine.createRenderTargetTexture(zz, tz);
            return this._textureCache.push({
              texture: Fz,
              postProcessChannel: sz,
              lastUsedRenderId: -1
            }), Fz
          }
          _flushTextureCache() {
            const zz = this._renderId;
            for (let tz = this._textureCache.length - 1; tz >= 0; tz--)
              if (zz - this._textureCache[tz].lastUsedRenderId > 100) {
                let zz = !1;
                for (let sz = 0; sz < this._textures.length; sz++)
                  if (this._textures.data[sz] === this._textureCache[tz].texture) {
                    zz = !0;
                    break
                  } zz || (this._textureCache[tz].texture.dispose(), this._textureCache.splice(tz, 1))
              }
          }
          resize(zz, tz) {
            let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Wz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = zz, this.height = tz;
            let Xz = null;
            if (sz)
              for (let vz = 0; vz < sz._postProcesses.length; vz++)
                if (null !== sz._postProcesses[vz]) {
                  Xz = sz._postProcesses[vz];
                  break
                } const Oz = {
                width: this.width,
                height: this.height
              },
              oz = {
                generateMipMaps: Fz,
                generateDepthBuffer: Wz || Xz === this,
                generateStencilBuffer: (Wz || Xz === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(Oz, oz, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(Oz, oz, 1)), this._texelSize.m_(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let zz;
            if (this._shareOutputWithPostProcess) zz = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) zz = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let tz;
              zz = this.inputTexture;
              for (let sz = 0; sz < this._textureCache.length; sz++)
                if (this._textureCache[sz].texture === zz) {
                  tz = this._textureCache[sz];
                  break
                } tz && (tz.lastUsedRenderId = this._renderId)
            }
            return zz
          }
          activate(zz) {
            let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              sz = arguments.length > 2 ? arguments[2] : void 0;
            const Fz = null === zz || void 0 !== zz.cameraRigMode ? zz || this.oV : null,
              Wz = Fz?.aJ() ?? zz,
              Xz = Wz.FD(),
              Oz = Xz.getCaps().maxTextureSize,
              oz = (tz ? tz.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              vz = (tz ? tz.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let Uz = this._options.width || oz,
              Kz = this._options.height || vz;
            const uz = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let bz = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const zz = Xz.currentViewport;
                zz && (Uz *= zz.width, Kz *= zz.height)
              }(uz || this.alwaysForcePOT) && (this._options.width || (Uz = Xz.needPOTTextures ? (0, Nz.e)(Uz, Oz, this.scaleMode) : Uz), this._options.height || (Kz = Xz.needPOTTextures ? (0, Nz.e)(Kz, Oz, this.scaleMode) : Kz)), this.width === Uz && this.height === Kz && (bz = this._getTarget()) || this.resize(Uz, Kz, Fz, uz, sz), this._textures.forEach((zz => {
                zz.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(zz, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return bz || (bz = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.m_(oz / Uz, vz / Kz), this._engine.bindFramebuffer(bz, 0, oz, vz, this.forceFullscreenViewport)) : (this._scaleRatio.m_(1, 1), this._engine.bindFramebuffer(bz, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(Fz), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : Wz.clearColor, Wz._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), bz
          }
          get isSupported() {
            return this._effectWrapper.drawWrapper.effect.isSupported
          }
          get aspectRatio() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.aspectRatio : this._forcedOutputTexture ? this._forcedOutputTexture.width / this._forcedOutputTexture.height : this.width / this.height
          }
          isReady() {
            return this._effectWrapper.isReady()
          }
          apply() {
            if (!this._effectWrapper.isReady()) return null;
            let zz;
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.FD().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), zz = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", zz?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
          }
          _disposeTextureCache() {
            for (let zz = this._textureCache.length - 1; zz >= 0; zz--) this._textureCache[zz].texture.dispose();
            this._textureCache.length = 0
          }
          setPrePassRenderer(zz) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = zz.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
          }
          dispose(zz) {
            let tz;
            if (zz = zz || this.oV, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (tz = this._parentContainer.postProcesses.indexOf(this), tz > -1 && this._parentContainer.postProcesses.splice(tz, 1), this._parentContainer = null), tz = this._engine.postProcesses.indexOf(this), -1 !== tz && this._engine.postProcesses.splice(tz, 1), this.qJ.notifyObservers(), zz) {
              if (zz.detachPostProcess(this), tz = zz._postProcesses.indexOf(this), 0 === tz && zz._postProcesses.length > 0) {
                const zz = this.oV._getFirstPostProcess();
                zz && zz.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const zz = Uz.e.Serialize(this),
              tz = this.getCamera() || this._scene && this._scene.activeCamera;
            return zz.customType = "BABYLON." + this.getClassName(), zz.cameraId = tz ? tz.id : null, zz.reusable = this._reusable, zz.textureType = this._textureType, zz.fragmentUrl = this._fragmentUrl, zz.parameters = this._parameters, zz.samplers = this._samplers, zz.uniformBuffers = this._uniformBuffers, zz.options = this._options, zz.defines = this._postProcessDefines, zz.textureFormat = this._textureFormat, zz.vertexUrl = this._vertexUrl, zz.indexParameters = this._indexParameters, zz
          }
          clone() {
            const tz = this.serialize();
            tz._engine = this._engine, tz.cameraId = null;
            const sz = zz.Parse(tz, this._scene, "");
            return sz ? (sz.onActivateObservable = this.onActivateObservable.clone(), sz.onSizeChangedObservable = this.onSizeChangedObservable.clone(), sz.onApplyObservable = this.onApplyObservable.clone(), sz.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), sz.onAfterRenderObservable = this.onAfterRenderObservable.clone(), sz._prePassEffectConfiguration = this._prePassEffectConfiguration, sz) : null
          }
          static Parse(zz, tz, sz) {
            const Fz = (0, Kz.e)(zz.customType);
            if (!Fz || !Fz._Parse) return null;
            const Wz = tz ? tz.getCameraById(zz.cameraId) : null;
            return Fz._Parse(zz, Wz, tz, sz)
          }
          static _Parse(tz, sz, Fz, Wz) {
            return Uz.e.Parse((() => new zz(tz.name, tz.fragmentUrl, tz.parameters, tz.samplers, tz.options, sz, tz.renderTargetSamplingMode, tz._engine, tz.reusable, tz.defines, tz.textureType, tz.vertexUrl, tz.indexParameters, !1, tz.textureFormat)), tz, Fz, Wz)
          }
        }, (() => {
          const sz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          tz = [(0, vz.J)()], oz = [(0, vz.J)()], uz = [(0, vz.J)()], wz = [(0, vz.J)()], Dz = [(0, vz.J)()], Hz = [(0, vz.t)()], Bz = [(0, vz.J)()], Pz = [(0, vz.J)()], rz = [(0, vz.J)()], Yz = [(0, vz.J)()], xz = [(0, vz.J)()], mz = [(0, vz.J)()], Jz = [(0, vz.J)()], Iz = [(0, vz.J)()], Cz = [(0, vz.J)("samples")], ez = [(0, vz.J)()], (0, Fz.h)(zz, null, oz, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: zz => "name" in zz,
              get: zz => zz.name
            },
            metadata: sz
          }, null, Zz), (0, Fz.h)(zz, null, rz, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: zz => "alphaMode" in zz,
              get: zz => zz.alphaMode
            },
            metadata: sz
          }, null, Zz), (0, Fz.h)(null, null, tz, {
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
            metadata: sz
          }, Gz, Tz), (0, Fz.h)(null, null, uz, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: zz => "width" in zz,
              get: zz => zz.width,
              set: (zz, tz) => {
                zz.width = tz
              }
            },
            metadata: sz
          }, cz, jz), (0, Fz.h)(null, null, wz, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: zz => "height" in zz,
              get: zz => zz.height,
              set: (zz, tz) => {
                zz.height = tz
              }
            },
            metadata: sz
          }, Az, yz), (0, Fz.h)(null, null, Dz, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: zz => "renderTargetSamplingMode" in zz,
              get: zz => zz.renderTargetSamplingMode,
              set: (zz, tz) => {
                zz.renderTargetSamplingMode = tz
              }
            },
            metadata: sz
          }, Mz, dz), (0, Fz.h)(null, null, Hz, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: zz => "clearColor" in zz,
              get: zz => zz.clearColor,
              set: (zz, tz) => {
                zz.clearColor = tz
              }
            },
            metadata: sz
          }, hz, Qz), (0, Fz.h)(null, null, Bz, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: zz => "autoClear" in zz,
              get: zz => zz.autoClear,
              set: (zz, tz) => {
                zz.autoClear = tz
              }
            },
            metadata: sz
          }, kz, iz), (0, Fz.h)(null, null, Pz, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: zz => "forceAutoClearInAlphaMode" in zz,
              get: zz => zz.forceAutoClearInAlphaMode,
              set: (zz, tz) => {
                zz.forceAutoClearInAlphaMode = tz
              }
            },
            metadata: sz
          }, Lz, lz), (0, Fz.h)(null, null, Yz, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: zz => "alphaConstants" in zz,
              get: zz => zz.alphaConstants,
              set: (zz, tz) => {
                zz.alphaConstants = tz
              }
            },
            metadata: sz
          }, nz, az), (0, Fz.h)(null, null, xz, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: zz => "enablePixelPerfectMode" in zz,
              get: zz => zz.enablePixelPerfectMode,
              set: (zz, tz) => {
                zz.enablePixelPerfectMode = tz
              }
            },
            metadata: sz
          }, qz, Sz), (0, Fz.h)(null, null, mz, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: zz => "forceFullscreenViewport" in zz,
              get: zz => zz.forceFullscreenViewport,
              set: (zz, tz) => {
                zz.forceFullscreenViewport = tz
              }
            },
            metadata: sz
          }, Vz, Rz), (0, Fz.h)(null, null, Jz, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: zz => "scaleMode" in zz,
              get: zz => zz.scaleMode,
              set: (zz, tz) => {
                zz.scaleMode = tz
              }
            },
            metadata: sz
          }, pz, fz), (0, Fz.h)(null, null, Iz, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: zz => "alwaysForcePOT" in zz,
              get: zz => zz.alwaysForcePOT,
              set: (zz, tz) => {
                zz.alwaysForcePOT = tz
              }
            },
            metadata: sz
          }, Ez, zt), (0, Fz.h)(null, null, Cz, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: zz => "_samples" in zz,
              get: zz => zz._samples,
              set: (zz, tz) => {
                zz._samples = tz
              }
            },
            metadata: sz
          }, tt, st), (0, Fz.h)(null, null, ez, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: zz => "adaptScaleToCurrentViewport" in zz,
              get: zz => zz.adaptScaleToCurrentViewport,
              set: (zz, tz) => {
                zz.adaptScaleToCurrentViewport = tz
              }
            },
            metadata: sz
          }, Ft, Wt), sz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: sz
          })
        })(), zz
      })(),
      Dz = !1;

    function gz() {
      Dz || (Dz = !0, uz.b.prototype.setTextureFromPostProcess = function(zz, tz, sz) {
        let Fz = null;
        tz && (tz._forcedOutputTexture ? Fz = tz._forcedOutputTexture : tz._textures.data[tz._currentRenderTextureInd] && (Fz = tz._textures.data[tz._currentRenderTextureInd])), this._bindTexture(zz, Fz?.texture ?? null, sz)
      }, uz.b.prototype.setTextureFromPostProcessOutput = function(zz, tz, sz) {
        this._bindTexture(zz, tz?._outputTexture?.texture ?? null, sz)
      }, oz.e.prototype.setTextureFromPostProcess = function(zz, tz) {
        this._engine.setTextureFromPostProcess(this._samplers[zz], tz, zz)
      }, oz.e.prototype.setTextureFromPostProcessOutput = function(zz, tz) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[zz], tz, zz)
      }, (0, Kz.g)("BABYLON.PostProcess", wz))
    }
  },
  40942: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Oz,
      f: () => Xz
    });
    var Fz = sz(40915),
      Wz = sz(36502);
    class Xz extends Fz.f {
      _gatherImports(zz, tz) {
        zz ? (this._webGPUReady = !0, tz.push(Promise.all([sz.e(363).then((() => sz(60612)))]))) : tz.push(Promise.all([sz.e(364).then((() => sz(60616)))])), super._gatherImports(zz, tz)
      }
      constructor(zz) {
        let tz = arguments.length > 2 ? arguments[2] : void 0;
        const sz = {
          name: zz,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Wz.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: Xz.FragmentUrl,
          ...tz
        };
        sz.engine || (sz.engine = Wz.c.LastCreatedEngine), super(sz)
      }
    }
    Xz.FragmentUrl = "pass";
    class Oz extends Fz.f {
      _gatherImports(zz, tz) {
        zz ? (this._webGPUReady = !0, tz.push(Promise.all([sz.e(365).then((() => sz(60618)))]))) : tz.push(Promise.all([sz.e(366).then((() => sz(60623)))])), super._gatherImports(zz, tz)
      }
      constructor(zz) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: zz,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Wz.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: Oz.FragmentUrl,
          defines: "#define POSITIVEX"
        }), this._face = 0
      }
      get face() {
        return this._face
      }
      set face(zz) {
        if (!(zz < 0 || zz > 5)) switch (this._face = zz, this._face) {
          case 0:
            this.updateEffect("#define POSITIVEX");
            break;
          case 1:
            this.updateEffect("#define NEGATIVEX");
            break;
          case 2:
            this.updateEffect("#define POSITIVEY");
            break;
          case 3:
            this.updateEffect("#define NEGATIVEY");
            break;
          case 4:
            this.updateEffect("#define POSITIVEZ");
            break;
          case 5:
            this.updateEffect("#define NEGATIVEZ")
        }
      }
    }
    Oz.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);