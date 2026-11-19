export const id = 301;
export const ids = [301];
export const modules = {
  41019: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => wz
    });
    var Ez = bz(36547),
      nz = bz(36519),
      iz = bz(39636),
      lz = bz(39304),
      Mz = bz(39118),
      tz = bz(38060),
      Hz = bz(39291),
      Oz = bz(39314),
      pz = bz(36528),
      dz = bz(39071),
      Fz = bz(39267),
      Zz = bz(39358);
    class Rz {
      get renderList() {
        return this._renderList
      }
      set renderList(zz) {
        this._renderList !== zz && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), zz && (this._unObserveRenderList = (0, pz.h)(zz, this._renderListHasChanged)), this._renderList = zz)
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
              const uz = this._renderPassIds[zz];
              this._engine._renderPassNames[uz] = `${this._name}#${zz}`
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
      setMaterialForRendering(zz, uz) {
        let bz;
        bz = Array.isArray(zz) ? zz : [zz];
        for (let Ez = 0; Ez < bz.length; ++Ez)
          for (let zz = 0; zz < this.options.numPasses; ++zz) {
            let nz = bz[Ez];
            bz[Ez].qT && (nz = bz[Ez].wEz), nz.setMaterialForRenderPass(this._renderPassIds[zz], void 0 !== uz ? Array.isArray(uz) ? uz[zz] : uz : void 0)
          }
      }
      _freezeActiveMeshes(zz) {
        this._freezeActiveMeshesCancel = (0, dz.g)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, zz)
            for (let zz = 0; zz < this._activeMeshes.length; zz++) this._activeMeshes.data[zz]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((zz, uz) => {
          this._freezeActiveMeshesCancel = null, uz ? (tz.e.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), zz && tz.e.Error(zz)) : (tz.e.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), zz && (tz.e.Error(zz), zz.stack && tz.e.Error(zz.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let zz = 0; zz < this._activeMeshes.length; zz++) this._activeMeshes.data[zz]._unFreeze();
        this._isFrozen = !1
      }
      constructor(zz, uz, bz) {
        this._unObserveRenderList = null, this._renderListHasChanged = (zz, uz) => {
          const bz = this._renderList ? this._renderList.length : 0;
          if (0 === uz && bz > 0 || 0 === bz)
            for (const Ez of this._scene.meshes) Ez._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new Ez.b, this.onAfterRenderObservable = new Ez.b, this.onBeforeRenderingManagerRenderObservable = new Ez.b, this.onAfterRenderingManagerRenderObservable = new Ez.b, this.onInitRenderingObservable = new Ez.b, this.onFinishRenderingObservable = new Ez.b, this.onFastPathRenderObservable = new Ez.b, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new Fz.e(256), this._activeBoundingBoxes = new Fz.e(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = zz, this._scene = uz, this._engine = this._scene.uR(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...bz
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new Oz.e(uz), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const zz of this._scene.lights) zz.getTypeID() === Zz.c.LIGHTTYPEID_CLUSTERED_CONTAINER && zz.isSupported && zz._updateBatches(this.activeCamera).render()
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
      _createSceneUBO(zz, uz) {
        const bz = this._scene.uR(),
          Ez = new Hz.b(bz, void 0, uz, zz, void 0, !1);
        return Ez.addUniform("viewProjection", 16), uz && Ez.addUniform("viewProjectionR", 16), Ez.addUniform("view", 16), Ez.addUniform("projection", 16), Ez.addUniform("vEyePosition", 4), Ez.addUniform("inverseProjection", 16), Ez
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const zz = this._engine._currentRenderTarget,
          uz = !(!zz || !zz.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const zz = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${zz} for ${this.name}`, uz)), this._sceneUBOIsMultiview.push(uz)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== uz && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, uz), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = uz);
        const bz = this._sceneUBOs[this._currentSceneUBOIndex++];
        return bz.unbindEffect(), bz
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
      isReadyForRendering(zz, uz) {
        this.prepareRenderList(), this.initRender(zz, uz);
        const bz = this._checkReadiness();
        return this.finishRender(), bz
      }
      prepareRenderList() {
        const zz = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let uz = 0; uz < this._waitingRenderList.length; uz++) {
              const bz = this._waitingRenderList[uz],
                Ez = zz.getMeshById(bz);
              Ez && this.renderList.push(Ez)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const zz = this._scene.meshes;
          for (let uz = 0; uz < zz.length; uz++) {
            const bz = zz[uz];
            this.renderListPredicate(bz) && this.renderList.push(bz)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(zz, uz) {
        const bz = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), bz && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(bz.getViewMatrix(), bz.getProjectionMatrix(!0)), this._scene._activeCamera = bz, this._engine.setViewport(bz.rigParent ? bz.rigParent.viewport : bz.viewport, zz, uz)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const zz = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (zz.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), zz._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== zz.activeCamera && zz.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), zz.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const bz = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[zz], this.onBeforeRenderObservable.notifyObservers(zz);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(zz);
        else {
          const uz = this._prepareRenderingManager(zz),
            bz = this._scene.getOutlineRenderer?.(),
            Ez = bz?.enabled;
          bz && (bz.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(zz), this._renderingManager.render(this.customRenderFunction, uz, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(zz), bz && (bz.enabled = Ez)
        }
        uz || this.onAfterRenderObservable.notifyObservers(zz), this._engine.currentRenderPassId = bz
      }
      _checkReadiness() {
        const zz = this._scene,
          uz = this._engine.currentRenderPassId;
        let bz = !0;
        zz.getViewMatrix() || zz.updateTransformMatrix();
        const Ez = this.options.numPasses;
        for (let nz = 0; nz < Ez && bz; nz++) {
          const uz = this.renderList ? this.renderList : zz.frameGraph ? zz.meshes : zz.getActiveMeshes().data,
            iz = this.renderList || zz.frameGraph ? uz.length : zz.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[nz], this.onBeforeRenderObservable.notifyObservers(nz);
          let lz = null,
            Mz = iz;
          this.getCustomRenderList && (lz = this.getCustomRenderList(nz, uz, iz), lz && (Mz = lz.length)), lz || (lz = uz), this.options.doNotChangeAspectRatio || zz.updateTransformMatrix(!0);
          for (let zz = 0; zz < Mz && bz; ++zz) {
            const uz = lz[zz];
            if (!uz.isEnabled() || uz.isBlocked || !uz.isVisible || !uz.hN) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(uz, this.refreshRate, !0)) {
                bz = !1;
                continue
              }
            } else if (!uz.isReady(!0)) {
              bz = !1;
              continue
            }
            let Ez = uz._edgesRenderer,
              nz = uz.hasThinInstances;
            if (uz.qT) {
              const zz = uz.wEz;
              zz.edgesShareWithInstances && zz._edgesRenderer?.isEnabled && (Ez = zz._edgesRenderer, nz = !0)
            } else uz.KEz && uz.edgesShareWithInstances && (nz = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && Ez?.isEnabled && (Ez.isReady(nz) || (bz = !1))
          }
          if (this.renderParticles && zz.particlesEnabled) {
            const uz = this.particleSystemList || zz.yN;
            for (const zz of uz) zz.isReady() || (bz = !1)
          }
          if (this.renderSprites && zz.spritesEnabled) {
            const uz = this.spriteManagerList || zz.spriteManagers;
            if (uz)
              for (const Ez of uz) zz.activeCamera && 0 === (Ez.layerMask & zz.activeCamera.layerMask) || Ez.isReady && !Ez.isReady() && (bz = !1)
          }
          this.onAfterRenderObservable.notifyObservers(nz), Ez > 1 && (zz.incrementRenderId(), zz.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = uz, bz
      }
      _prepareRenderingManager() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const bz = this._scene;
        let Ez, nz, iz = null;
        const lz = this.renderList ? this.renderList : bz.frameGraph ? bz.meshes : bz.getActiveMeshes().data,
          Mz = this.renderList || bz.frameGraph ? lz.length : bz.getActiveMeshes().length;
        if (this.getCustomRenderList && (iz = this.getCustomRenderList(zz, lz, Mz)), iz) Ez = iz.length, nz = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !uz && !this._engine.isWebGPU) return lz;
          this._defaultRenderListPrepared = !0, iz = lz, Ez = Mz, nz = !this.renderList || this.forceLayerMaskCheck
        }
        const tz = bz.activeCamera,
          Hz = this.cameraForLOD ?? tz,
          Oz = bz.getBoundingBoxRenderer?.();
        if (bz._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && Oz) {
            Oz.reset();
            for (let zz = 0; zz < this._activeBoundingBoxes.length; zz++) {
              const uz = this._activeBoundingBoxes.data[zz];
              Oz.renderList.push(uz)
            }
          }
          return iz
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), Oz && Oz.reset(), this.renderMeshes) {
          const zz = bz.getRenderId(),
            uz = bz.getFrameId();
          for (let lz = 0; lz < Ez; lz++) {
            const Ez = iz[lz];
            if (Ez && !Ez.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(Ez, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!Ez.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let iz, lz;
              if (Hz) {
                const zz = Ez._internalAbstractMeshDataInfo._currentLOD.get(Hz);
                zz && zz[1] === uz ? iz = zz[0] : (iz = bz.customLODSelector ? bz.customLODSelector(Ez, Hz) : Ez.getLOD(Hz), zz ? (zz[0] = iz, zz[1] = uz) : Ez._internalAbstractMeshDataInfo._currentLOD.set(Hz, [iz, uz]))
              } else iz = Ez;
              if (!iz) continue;
              if (iz !== Ez && 0 !== iz.billboardMode && iz.computeWorldMatrix(), iz._preActivateForIntermediateRendering(zz), lz = !(!nz || !tz) && 0 === (Ez.layerMask & tz.layerMask), Ez.isEnabled() && Ez.isVisible && Ez.hN && !lz) {
                if (this._activeMeshes.push(Ez), iz._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, iz !== Ez && iz._activate(zz, !0), this.enableBoundingBoxRendering && Oz && Oz._preActiveMesh(Ez), Ez._activate(zz, !0) && Ez.hN.length) {
                  Ez.qT ? Ez._internalAbstractMeshDataInfo._actAsRegularMesh && (iz = Ez) : iz._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, iz._internalAbstractMeshDataInfo._isActiveIntermediate = !0, bz._prepareSkeleton(iz);
                  for (let zz = 0; zz < iz.hN.length; zz++) {
                    const uz = iz.hN[zz];
                    this.enableBoundingBoxRendering && Oz && Oz._evaluateSubMesh(Ez, uz), this._renderingManager.dispatch(uz, iz)
                  }
                }
                Ez._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && Oz && uz)
          for (let pz = 0; pz < Oz.renderList.length; pz++) {
            const zz = Oz.renderList.data[pz];
            this._activeBoundingBoxes.push(zz)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const zz = this.particleSystemList || bz.yN;
          for (let uz = 0; uz < zz.length; uz++) {
            const bz = zz[uz],
              Ez = bz.emitter;
            bz.isStarted() && Ez && (!Ez.position || Ez.isEnabled()) && this._renderingManager.dispatchParticles(bz)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return iz
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(zz, uz, bz, Ez)
      }
      setRenderingAutoClearDepthStencil(zz, uz) {
        let bz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Ez = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(zz, uz, bz, Ez), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const zz = new Rz(this.name, this._scene, this.options);
        return this.renderList && (zz.renderList = this.renderList.slice(0)), zz
      }
      dispose() {
        const zz = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          uz = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let bz = 0; bz < uz; bz++) {
          const uz = zz[bz];
          uz && void 0 !== uz.getMaterialForRenderPass(this.renderPassId) && uz.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const bz of this._sceneUBOs) bz.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === Rz.REFRESHRATE_RENDER_ONCE && (this.refreshRate = Rz.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    Rz.REFRESHRATE_RENDER_ONCE = 0, Rz.REFRESHRATE_RENDER_ONEVERYFRAME = 1, Rz.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var Kz = bz(39061);
    class wz extends iz.e {
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
      setMaterialForRendering(zz, uz) {
        this._objectRenderer.setMaterialForRendering(zz, uz)
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
        const uz = this.XT();
        uz && uz.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(zz, uz, bz) {
        let lz, Mz, Hz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Oz = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          pz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          dz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Fz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : iz.e.TRILINEAR_SAMPLINGMODE,
          Zz = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          Kz = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          wz = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          Xz = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          fz = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          sz = arguments.length > 13 ? arguments[13] : void 0,
          rz = arguments.length > 14 ? arguments[14] : void 0,
          oz = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          Nz = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          vz = !0,
          xz = !1;
        if ("object" === typeof Hz) {
          const zz = Hz;
          Hz = !!zz.generateMipMaps, Oz = zz.doNotChangeAspectRatio ?? !0, pz = zz.type ?? 0, dz = !!zz.isCube, Fz = zz.samplingMode ?? iz.e.TRILINEAR_SAMPLINGMODE, Zz = zz.generateDepthBuffer ?? !0, Kz = !!zz.generateStencilBuffer, wz = !!zz.isMulti, Xz = zz.format ?? 5, fz = !!zz.delayAllocation, sz = zz.samples, rz = zz.creationFlags, oz = !!zz.noColorAttachment, Nz = !!zz.useSRGBBuffer, lz = zz.colorAttachment, vz = zz.gammaSpace ?? vz, Mz = zz.existingObjectRenderer, xz = !!zz.enableClusteredLights
        }
        if (super(null, bz, !Hz, void 0, Fz, void 0, void 0, void 0, void 0, Xz), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new Ez.b, this.onAfterUnbindObservable = new Ez.b, this.onClearObservable = new Ez.b, this.onResizeObservable = new Ez.b, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = nz.n.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(bz = this.XT())) return;
        const Jz = this.XT().uR();
        this._gammaSpace = vz, this._coordinatesMode = iz.e.PROJECTION_MODE, this.name = zz, this.isRenderTarget = !0, this._initialSizeParameter = uz, this._dontDisposeObjectRenderer = !!Mz, this._processSizeParameter(uz), this._objectRenderer = Mz ?? new Rz(zz, bz, {
          numPasses: dz ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: Oz,
          enableClusteredLights: xz
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const zz = this._scene;
          if (!this._disableEngineStages)
            for (const uz of zz._beforeRenderTargetClearStage) uz.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(Jz) : this.skipInitialClear || Jz.clear(this.clearColor ?? zz.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || zz.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const uz of zz._beforeRenderTargetDrawStage) uz.action(this, this._currentFaceIndex, this._currentLayer);
          Jz._debugPushGroup && Jz._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (Jz._debugPopGroup && Jz._debugPopGroup(), !this._disableEngineStages)
            for (const uz of this._scene._afterRenderTargetDrawStage) uz.action(this, this._currentFaceIndex, this._currentLayer);
          const zz = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const uz of this._scene._afterRenderTargetPostProcessStage) uz.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = zz), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), Jz) : tz.e.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(Jz) : this.skipInitialClear || Jz.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = Jz.onResizeObservable.add((() => {})), this._generateMipMaps = !!Hz, this._doNotChangeAspectRatio = Oz, wz || (this._renderTargetOptions = {
          generateMipMaps: Hz,
          type: pz,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: Zz,
          generateStencilBuffer: Kz,
          samples: sz,
          creationFlags: rz,
          noColorAttachment: oz,
          useSRGBBuffer: Nz,
          colorAttachment: lz,
          label: this.name
        }, this.samplingMode === iz.e.NEAREST_SAMPLINGMODE && (this.wrapU = iz.e.CLAMP_ADDRESSMODE, this.wrapV = iz.e.CLAMP_ADDRESSMODE), fz || (dz ? (this._renderTarget = bz.uR().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = iz.e.INVCUBIC_MODE, this._textureMatrix = nz.d.Identity()) : this._renderTarget = bz.uR().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== sz && (this.samples = sz)))
      }
      createDepthStencilTexture() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          iz = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(zz, uz, bz, Ez, nz, iz)
      }
      _processSizeParameter(zz) {
        if (zz.ratio) {
          this._sizeRatio = zz.ratio;
          const uz = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(uz.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(uz.getRenderHeight(), this._sizeRatio)
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
          const zz = this.XT();
          if (!zz) return;
          this._postProcessManager = new lz.e(zz), this._postProcesses = new Array
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
        const uz = this._postProcesses.indexOf(zz); - 1 !== uz && (this._postProcesses.splice(uz, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
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
        const uz = this._size.depth;
        return uz || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(zz) {
        const uz = Math.max(1, this.getRenderSize() * zz);
        this.resize(uz)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(zz) {
        const uz = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const bz = this.XT();
        bz && (this._processSizeParameter(zz), this._renderTarget = uz ? bz.uR().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : bz.uR().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(zz, uz)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => bz(41031))).then((zz => this._dumpTools = zz))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const zz = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), zz
      }
      _render() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const bz = this.XT();
        if (!bz) return;
        void 0 !== this.useCameraPostProcesses && (zz = this.useCameraPostProcesses);
        const Ez = bz.uR();
        if (Ez._debugPushGroup && Ez._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let nz = 0; nz < 6; nz++) this._renderToTarget(nz, zz, uz), bz.incrementRenderId(), bz.resetCachedMaterial();
          else this._renderToTarget(0, zz, uz);
        else
          for (let nz = 0; nz < this.getRenderLayers(); nz++) this._renderToTarget(0, zz, uz, nz), bz.incrementRenderId(), bz.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), Ez._debugPopGroup && Ez._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(zz, uz) {
        const bz = zz * uz,
          Ez = (0, Mz.l)(bz + 16384 / (128 + bz));
        return Math.min((0, Mz.d)(zz), Ez)
      }
      _bindFrameBuffer() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const bz = this.XT();
        if (!bz) return;
        const Ez = bz.uR();
        this._renderTarget && Ez.bindFramebuffer(this._renderTarget, this.isCube ? zz : void 0, void 0, void 0, this.ignoreCameraViewport, 0, uz)
      }
      _unbindFrameBuffer(zz, uz) {
        this._renderTarget && zz.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(uz)
        }))
      }
      _prepareFrame(zz, uz, bz, Ez) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(uz, bz) : Ez && zz.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(uz, bz)
      }
      _renderToTarget(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const nz = this.XT();
        if (!nz) return;
        const iz = nz.uR();
        this._currentFaceIndex = zz, this._currentLayer = Ez, this._currentUseCameraPostProcess = uz, this._currentDumpForDebug = bz, this._prepareFrame(nz, zz, Ez, uz), this._objectRenderer.render(zz + Ez, !0), this._unbindFrameBuffer(iz, zz), this._texture && this.isCube && 5 === zz && iz.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(zz, uz, bz, Ez)
      }
      setRenderingAutoClearDepthStencil(zz, uz) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(zz, uz)
      }
      clone() {
        const zz = this.getSize(),
          uz = new wz(this.name, zz, this.XT(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return uz.hasAlpha = this.hasAlpha, uz.level = this.level, uz.coordinatesMode = this.coordinatesMode, this.renderList && (uz.renderList = this.renderList.slice(0)), uz
      }
      serialize() {
        if (!this.name) return null;
        const zz = super.serialize();
        if (zz.renderTargetSize = this.getRenderSize(), zz.renderList = [], this.renderList)
          for (let uz = 0; uz < this.renderList.length; uz++) zz.renderList.push(this.renderList[uz].id);
        return zz
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.XT().uR().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const zz = this.XT();
        if (!zz) return;
        let uz = zz.customRenderTargets.indexOf(this);
        uz >= 0 && zz.customRenderTargets.splice(uz, 1);
        for (const bz of zz.cameras) uz = bz.customRenderTargets.indexOf(this), uz >= 0 && bz.customRenderTargets.splice(uz, 1);
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
    wz.REFRESHRATE_RENDER_ONCE = Rz.REFRESHRATE_RENDER_ONCE, wz.REFRESHRATE_RENDER_ONEVERYFRAME = Rz.REFRESHRATE_RENDER_ONEVERYFRAME, wz.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = Rz.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(wz.prototype, "noPrePassRenderer") || Object.defineProperty(wz.prototype, "noPrePassRenderer", (0, Kz.f)("RenderTargetTexture", "noPrePassRenderer"))
  },
  41009: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Hz,
      c: () => Oz
    });
    var Ez = bz(39299),
      nz = bz(37519),
      iz = bz(36547),
      lz = bz(39024),
      Mz = bz(39497);
    const tz = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class Hz {
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tz;
        this._fullscreenViewport = new nz.d(0, 0, 1, 1);
        const bz = uz.positions ?? tz.positions,
          iz = uz.indices ?? tz.indices;
        this.engine = zz, this._vertexBuffers = {
          [Ez.j.PositionKind]: new Ez.j(zz, bz, Ez.j.PositionKind, !1, !1, 2)
        }, this._indexBuffer = zz.createIndexBuffer(iz), this._indexBufferLength = iz.length, this._onContextRestoredObserver = zz.onContextRestoredObservable.add((() => {
          this._indexBuffer = zz.createIndexBuffer(iz);
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
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = uz, this.engine.stencilState.stencilTest = bz, this.engine.enableEffect(zz.drawWrapper), this.bindBuffers(zz.effect), zz.onApplyObservable.notifyObservers({})
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
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!zz.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const bz = null === uz ? null : this._isRenderTargetTexture(uz) ? uz.renderTarget : uz;
        bz && this.engine.bindFramebuffer(bz), this.applyEffectWrapper(zz), this.draw(), bz && this.engine.unBindFramebuffer(bz), this.restoreStates()
      }
      dispose() {
        const zz = this._vertexBuffers[Ez.j.PositionKind];
        zz && (zz.dispose(), delete this._vertexBuffers[Ez.j.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class Oz {
      static RegisterShaderCodeProcessing(zz, uz) {
        uz ? Oz._CustomShaderCodeProcessing[zz ?? ""] = uz : delete Oz._CustomShaderCodeProcessing[zz ?? ""]
      }
      static _GetShaderCodeProcessing(zz) {
        return Oz._CustomShaderCodeProcessing[zz] ?? Oz._CustomShaderCodeProcessing[""]
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
        this.alphaMode = 0, this.onEffectCreatedObservable = new iz.b(void 0, !0), this.onApplyObservable = new iz.b, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
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
        }))), this._drawWrapper = new Mz.c(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const uz = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, uz, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ez = arguments.length > 2 ? arguments[2] : void 0,
          nz = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, nz && this._importPromises.push(...nz);
        const iz = this.options.engine.isWebGPU && !Oz.ForceGLSL;
        this._gatherImports(iz, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(iz && this._webGPUReady ? bz.e(356).then((() => bz(60539))) : bz.e(345).then((() => bz(60333)))), void 0 !== Ez && Ez(iz, this._importPromises), iz && this._webGPUReady && (this.options.shaderLanguage = 1), zz || this.updateEffect(uz)
      }
      updateEffect() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ez = arguments.length > 3 ? arguments[3] : void 0,
          nz = arguments.length > 4 ? arguments[4] : void 0,
          iz = arguments.length > 5 ? arguments[5] : void 0,
          Mz = arguments.length > 6 ? arguments[6] : void 0,
          tz = arguments.length > 7 ? arguments[7] : void 0;
        const Hz = Oz._GetShaderCodeProcessing(this.name);
        if (Hz?.defineCustomBindings) {
          const Ez = uz?.slice() ?? [];
          Ez.push(...this.options.uniforms);
          const nz = bz?.slice() ?? [];
          nz.push(...this.options.samplers), zz = Hz.defineCustomBindings(this.name, zz, Ez, nz), uz = Ez, bz = nz
        }
        this.options.defines = zz || "";
        const pz = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let dz;
        dz = this.options.extraInitializationsAsync ? async () => {
          await (pz?.()), await this.options.extraInitializationsAsync()
        }: pz, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: Mz ?? this._shaderPath.vertex,
          fragment: tz ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: uz || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: bz || this.options.samplers,
          defines: null !== zz ? zz : "",
          fallbacks: null,
          onCompiled: nz ?? this.options.onCompiled,
          onError: iz ?? null,
          indexParameters: Ez || this.options.indexParameters,
          processCodeAfterIncludes: Hz?.processCodeAfterIncludes ? (zz, uz) => Hz.processCodeAfterIncludes(this.name, zz, uz) : null,
          processFinalCode: Hz?.processFinalCode ? (zz, uz) => Hz.processFinalCode(this.name, zz, uz) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: dz
        }, this.options.engine) : this._drawWrapper.effect = new lz.b(this._shaderPath, this.options.attributeNames, uz || this.options.uniforms, bz || this.options.samplerNames, this.options.engine, zz, void 0, nz || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, dz), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !zz && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), Oz._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.uR().onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    Oz.ForceGLSL = !1, Oz._CustomShaderCodeProcessing = {}
  },
  41031: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      Dispose: () => Xz,
      DumpData: () => wz,
      DumpDataAsync: () => Kz,
      DumpFramebuffer: () => Rz,
      DumpTools: () => fz,
      EncodeImageAsync: () => Zz,
      RegisterDumpTools: () => rz
    });
    var Ez = bz(39170),
      nz = bz(41009),
      iz = bz(39258),
      lz = bz(36553),
      Mz = bz(36543),
      tz = bz(38060),
      Hz = bz(39221),
      Oz = bz(39172);
    let pz = null;
    async function dz() {
      return pz || (pz = async function() {
        const zz = Mz.d.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        zz instanceof OffscreenCanvas && tz.e.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: uz
        } = await Promise.resolve().then((() => bz(39022)));
        if (!uz.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const Ez = new uz(zz, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        Mz.d.Instances.pop(), Mz.d.OnEnginesDisposedObservable.add((zz => {
          Ez && zz !== Ez && !Ez.Uuz && 0 === Mz.d.Instances.length && Xz()
        })), Ez.getCaps().parallelShaderCompile = void 0;
        const iz = new nz.b(Ez),
          {
            passPixelShader: lz
          } = await bz.e(364).then((() => bz(60596))),
          Hz = new nz.c({
            engine: Ez,
            name: lz.name,
            fragmentShader: lz.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: zz,
          dumpEngine: {
            engine: Ez,
            renderer: iz,
            wrapper: Hz
          }
        }
      }()), await pz
    }
    let Fz = (() => {
      var zz;
      let uz, bz = [];
      return zz = class {
        static async EncodeImageAsync(zz, uz, bz, Ez, nz, lz) {
          const Mz = await dz(),
            tz = Mz.dumpEngine;
          tz.engine.setSize(uz, bz, !0);
          const Hz = tz.engine.createRawTexture(zz, uz, bz, 5, !1, !nz, 1);
          return tz.renderer.setViewport(), tz.renderer.applyEffectWrapper(tz.wrapper), tz.wrapper.effect._bindTexture("textureSampler", Hz), tz.renderer.draw(), Hz.dispose(), await new Promise(((zz, uz) => {
            iz.h.ToBlob(Mz.canvas, (bz => {
              bz ? zz(bz) : uz(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), Ez, lz)
          }))
        }
      }, (() => {
        const nz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        uz = [Oz.l], (0, Ez.h)(zz, null, uz, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: zz => "EncodeImageAsync" in zz,
            get: zz => zz.EncodeImageAsync
          },
          metadata: nz
        }, null, bz), nz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: nz
        }), (0, Ez.j)(zz, bz)
      })(), zz
    })();
    const Zz = Fz.EncodeImageAsync;
    async function Rz(zz, uz, bz, Ez) {
      let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        iz = arguments.length > 5 ? arguments[5] : void 0,
        lz = arguments.length > 6 ? arguments[6] : void 0;
      const Mz = await bz.readPixels(0, 0, zz, uz);
      wz(zz, uz, new Uint8Array(Mz.buffer), Ez, nz, iz, !0, void 0, lz)
    }
    async function Kz(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        nz = arguments.length > 4 ? arguments[4] : void 0,
        Mz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Oz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        pz = arguments.length > 7 ? arguments[7] : void 0;
      if (bz instanceof Float32Array) {
        const zz = new Uint8Array(bz.length);
        let uz = bz.length;
        for (; uz--;) {
          const Ez = bz[uz];
          zz[uz] = Math.round(255 * (0, lz.Clamp)(Ez))
        }
        bz = zz
      }
      const dz = await Fz.EncodeImageAsync(bz, zz, uz, Ez, Mz, pz);
      void 0 !== nz && iz.h.DownloadBlob(dz, nz), dz.type !== Ez && tz.e.Warn(`DumpData: The requested mimeType '${Ez}' is not supported. The result has mimeType '${dz.type}' instead.`);
      const Zz = await dz.arrayBuffer();
      return Oz ? Zz : `data:${Ez};base64,${(0,Hz.h)(Zz)}`
    }

    function wz(zz, uz, bz, Ez) {
      let nz = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== nz || Ez || (nz = ""), Kz(zz, uz, bz, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", nz, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((zz => {
        Ez && Ez(zz)
      }))
    }

    function Xz() {
      pz && (pz?.then((zz => {
        zz.canvas instanceof HTMLCanvasElement && zz.canvas.remove(), zz.dumpEngine && (zz.dumpEngine.engine.dispose(), zz.dumpEngine.renderer.dispose(), zz.dumpEngine.wrapper.dispose())
      })), pz = null)
    }
    const fz = {
      DumpData: wz,
      DumpDataAsync: Kz,
      DumpFramebuffer: Rz,
      Dispose: Xz
    };
    let sz = !1;

    function rz() {
      if (sz) return;
      sz = !0;
      iz.h.DumpData = wz, iz.h.DumpDataAsync = Kz, iz.h.DumpFramebuffer = Rz
    }
  },
  41014: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Fz,
      e: () => Zz,
      f: () => Rz
    });
    var Ez = bz(39636),
      nz = bz(41019),
      iz = bz(39170),
      lz = bz(41e3),
      Mz = bz(39182),
      tz = bz(41027),
      Hz = bz(39172);
    class Oz extends lz.d {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(zz, uz) {
        let bz = arguments.length > 4 ? arguments[4] : void 0;
        const Ez = {
          size: "number" === typeof uz ? uz : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: bz,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...uz
        };
        super(zz, tz.h.FragmentUrl, {
          effectWrapper: "number" !== typeof uz && uz.effectWrapper ? void 0 : new tz.h(zz, bz, Ez),
          ...Ez
        })
      }
      static _Parse(zz, uz, bz, Ez) {
        return Mz.e.Parse((() => new Oz(zz.name, zz.options, uz, zz.renderTargetSamplingMode, zz._engine, zz.reusable)), zz, bz, Ez)
      }
    }(() => {
      var zz;
      let uz, bz = lz.d,
        Ez = [];
      zz = class extends bz {
        get face() {
          return this._effectWrapper.face
        }
        set face(zz) {
          this._effectWrapper.face = zz
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(zz, uz) {
          let bz = arguments.length > 4 ? arguments[4] : void 0;
          const nz = {
            size: "number" === typeof uz ? uz : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: bz,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...uz
          };
          super(zz, tz.h.FragmentUrl, {
            effectWrapper: "number" !== typeof uz && uz.effectWrapper ? void 0 : new tz.e(zz, bz, nz),
            ...nz
          }), (0, iz.j)(this, Ez)
        }
        static _Parse(uz, bz, Ez, nz) {
          return Mz.e.Parse((() => new zz(uz.name, uz.options, bz, uz.renderTargetSamplingMode, uz._engine, uz.reusable)), uz, Ez, nz)
        }
      }, (() => {
        const nz = "function" === typeof Symbol && Symbol.metadata ? Object.create(bz[Symbol.metadata] ?? null) : void 0;
        uz = [(0, Hz.G)()], (0, iz.h)(zz, null, uz, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: zz => "face" in zz,
            get: zz => zz.face
          },
          metadata: nz
        }, null, Ez), nz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: nz
        })
      })()
    })();
    var pz = bz(36553),
      dz = bz(39231);

    function Fz(zz, uz, bz, Ez, nz, iz, Mz, tz) {
      const Hz = uz.uR();
      return uz.isReady = !1, nz = nz ?? uz.samplingMode, Ez = Ez ?? uz.type, iz = iz ?? uz.format, Mz = Mz ?? uz.width, tz = tz ?? uz.height, -1 === Ez && (Ez = 0), new Promise((Oz => {
        const pz = new lz.d("postprocess", zz, null, null, 1, null, nz, Hz, !1, void 0, Ez, void 0, null, !1, iz);
        pz.externalTextureSamplerBinding = !0;
        const dz = Hz.createRenderTargetTexture({
          width: Mz,
          height: tz
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: nz,
          type: Ez,
          format: iz
        });
        pz.onEffectCreatedObservable.addOnce((zz => {
          zz.executeWhenCompiled((() => {
            pz.onApply = zz => {
              zz._bindTexture("textureSampler", uz), zz.setFloat2("scale", 1, 1)
            }, bz.postProcessManager.directRender([pz], dz, !0), Hz.restoreDefaultFramebuffer(), Hz._releaseTexture(uz), pz && pz.dispose(), dz._swapAndDie(uz), uz.type = Ez, uz.format = 5, uz.isReady = !0, Oz(uz)
          }))
        }))
      }))
    }
    async function Zz(zz, uz, iz) {
      let Mz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        tz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Hz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Oz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(zz) {
        if (zz.isReady()) return;
        if (zz.loadingError) throw new Error(zz.errorObject?.message || `Texture ${zz.name} errored while loading.`);
        const uz = zz.onLoadObservable;
        if (uz) return await new Promise((zz => uz.addOnce((() => zz()))));
        const bz = zz._texture?.onLoadedObservable;
        if (bz) return await new Promise((zz => bz.addOnce((() => zz()))));
        throw new Error(`Cannot determine readiness of texture ${zz.name}.`)
      }(zz);
      const dz = zz.getInternalTexture(),
        Fz = zz.is3D || !!dz?.is3D,
        {
          width: Zz,
          height: Rz
        } = zz.getSize(),
        Kz = uz ?? Zz,
        wz = iz ?? Rz;
      if (Hz || Fz || function(zz) {
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
        }(zz.textureFormat) || Kz !== Zz || wz !== Rz) {
        if (zz.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${Hz?"RTT":"compression"} is not supported.`);
        return await async function(zz, uz, iz, Mz, tz) {
          let Hz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const Oz = zz.XT(),
            pz = Oz.uR(),
            dz = zz.getInternalTexture(),
            Fz = zz.is3D || !!dz?.is3D;
          let Zz;
          if (pz.isWebGPU ? Fz ? await bz.e(360).then((() => bz(60571))) : zz.isCube ? await bz.e(361).then((() => bz(60580))) : await bz.e(362).then((() => bz(60589))) : Fz ? await bz.e(357).then((() => bz(60558))) : zz.isCube ? await bz.e(358).then((() => bz(60562))) : await bz.e(359).then((() => bz(60566))), Fz) Zz = new lz.d("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: Ez.e.NEAREST_NEAREST_MIPNEAREST,
            engine: pz,
            shaderLanguage: pz.isWebGPU ? 1 : 0
          });
          else if (zz.isCube) {
            const zz = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            Zz = new lz.d("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: Ez.e.NEAREST_NEAREST_MIPNEAREST,
              engine: pz,
              defines: zz[Mz],
              shaderLanguage: pz.isWebGPU ? 1 : 0
            })
          } else Zz = new lz.d("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: Ez.e.NEAREST_NEAREST_MIPNEAREST,
            engine: pz,
            shaderLanguage: pz.isWebGPU ? 1 : 0
          });
          await new Promise((zz => {
            Zz.onEffectCreatedObservable.addOnce((uz => {
              uz.executeWhenCompiled((() => {
                zz(0)
              }))
            }))
          }));
          const Rz = new nz.e("temp", {
            width: uz,
            height: iz
          }, Oz, !1);
          Zz.onApply = function(uz) {
            uz.setTexture("textureSampler", zz), uz.setFloat("lod", tz), uz.setInt("gamma", zz.gammaSpace ? 1 : 0), Fz && uz.setFloat("slice", Hz)
          };
          try {
            if (Rz.renderTarget && dz) {
              const bz = dz.samplingMode;
              0 !== tz ? zz.updateSamplingMode(Ez.e.NEAREST_NEAREST_MIPNEAREST) : zz.updateSamplingMode(Ez.e.NEAREST_NEAREST), Oz.postProcessManager.directRender([Zz], Rz.renderTarget, !0), zz.updateSamplingMode(bz);
              const nz = await pz.readPixels(0, 0, uz, iz),
                lz = new Uint8Array(nz.buffer, nz.byteOffset, nz.byteLength);
              return pz.unBindFramebuffer(Rz.renderTarget), lz
            }
            throw Error("Render to texture failed.")
          } finally {
            Rz.dispose(), Zz.dispose()
          }
        }(zz, Kz, wz, Mz, tz, Oz)
      }
      let Xz = await zz.readPixels(Mz, tz);
      if (!Xz) throw new Error(`Failed to read pixels from texture ${zz.name}.`);
      if (Xz instanceof Float32Array) {
        const zz = new Uint8Array(Xz.length);
        let uz = Xz.length;
        for (; uz--;) {
          const bz = Xz[uz];
          zz[uz] = Math.round(255 * (0, pz.Clamp)(bz))
        }
        Xz = zz
      }
      const fz = Kz * wz,
        sz = 4 * fz;
      if (Xz.length !== sz) {
        const zz = 0 === fz ? 0 : Xz.length / fz;
        if (1 === zz || 2 === zz || 3 === zz) {
          const uz = new Uint8Array(sz);
          for (let bz = 0, Ez = 0, nz = 0; bz < fz; bz++, nz += 4) {
            const bz = Xz[Ez++];
            if (1 === zz) {
              uz[nz] = bz, uz[nz + 1] = bz, uz[nz + 2] = bz, uz[nz + 3] = 255;
              continue
            }
            const iz = Xz[Ez++];
            2 !== zz ? (uz[nz] = bz, uz[nz + 1] = iz, uz[nz + 2] = Xz[Ez++], uz[nz + 3] = 255) : (uz[nz] = bz, uz[nz + 1] = iz, uz[nz + 2] = 0, uz[nz + 3] = 255)
          }
          return uz
        }
      }
      return Xz
    }
    const Rz = {
      CreateResizedCopy: function(zz, uz, bz) {
        let iz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const lz = zz.XT(),
          Mz = lz.uR(),
          tz = new nz.e("resized" + zz.name, {
            width: uz,
            height: bz
          }, lz, !zz.noMipmap, !0, zz._texture.type, !1, zz.samplingMode, !1);
        tz.wrapU = zz.wrapU, tz.wrapV = zz.wrapV, tz.uOffset = zz.uOffset, tz.vOffset = zz.vOffset, tz.uScale = zz.uScale, tz.vScale = zz.vScale, tz.uAng = zz.uAng, tz.vAng = zz.vAng, tz.wAng = zz.wAng, tz.coordinatesIndex = zz.coordinatesIndex, tz.level = zz.level, tz.anisotropicFilteringLevel = zz.anisotropicFilteringLevel, tz._texture.isReady = !1, zz.wrapU = Ez.e.CLAMP_ADDRESSMODE, zz.wrapV = Ez.e.CLAMP_ADDRESSMODE;
        const Hz = new Oz("pass", 1, null, iz ? Ez.e.BILINEAR_SAMPLINGMODE : Ez.e.NEAREST_SAMPLINGMODE, Mz, !1, 0);
        return Hz.externalTextureSamplerBinding = !0, Hz.onEffectCreatedObservable.addOnce((uz => {
          uz.executeWhenCompiled((() => {
            Hz.onApply = function(uz) {
              uz.setTexture("textureSampler", zz)
            };
            const uz = tz.renderTarget;
            uz && (lz.postProcessManager.directRender([Hz], uz), Mz.unBindFramebuffer(uz), tz.disposeFramebufferObjects(), Hz.dispose(), tz.getInternalTexture().isReady = !0)
          }))
        })), tz
      },
      ApplyPostProcess: Fz,
      ToHalfFloat: dz.i,
      FromHalfFloat: dz.e,
      GetTextureDataAsync: Zz
    }
  },
  41e3: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Zz
    });
    var Ez = bz(39170),
      nz = bz(39267),
      iz = bz(36547),
      lz = bz(36519),
      Mz = bz(39024),
      tz = bz(39172),
      Hz = bz(39182),
      Oz = bz(36564),
      pz = bz(39079),
      dz = bz(39118),
      Fz = bz(41009);
    let Zz = (() => {
        var zz;
        let uz, Mz, pz, Zz, Rz, wz, Xz, fz, sz, rz, oz, Nz, vz, xz, Jz, Az, Tz = [],
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
          ez = [],
          jz = [],
          Iz = [],
          Bz = [],
          Cz = [],
          Yz = [],
          kz = [],
          zu = [],
          uu = [],
          bu = [],
          Eu = [],
          nu = [];
        return zz = class {
          static get ForceGLSL() {
            return Fz.c.ForceGLSL
          }
          static set ForceGLSL(zz) {
            Fz.c.ForceGLSL = zz
          }
          static RegisterShaderCodeProcessing(zz, uz) {
            Fz.c.RegisterShaderCodeProcessing(zz, uz)
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
            return this.HI
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.P_(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(uz, bz, Mz, tz, Hz, Oz) {
            let pz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              dz = arguments.length > 7 ? arguments[7] : void 0,
              Zz = arguments.length > 8 ? arguments[8] : void 0,
              Rz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              wz = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              Xz = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              fz = arguments.length > 12 ? arguments[12] : void 0,
              sz = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              rz = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              oz = arguments.length > 15 ? arguments[15] : void 0,
              Nz = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, Ez.j)(this, Tz), null), this.uniqueId = (0, Ez.j)(this, Lz, void 0), this.width = ((0, Ez.j)(this, Pz), (0, Ez.j)(this, Gz, -1)), this.height = ((0, Ez.j)(this, az), (0, Ez.j)(this, Vz, -1)), this.nodeMaterialSource = ((0, Ez.j)(this, mz), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, Ez.j)(this, qz, void 0), this.clearColor = ((0, Ez.j)(this, hz), (0, Ez.j)(this, Uz, void 0)), this.autoClear = ((0, Ez.j)(this, cz), (0, Ez.j)(this, gz, !0)), this.forceAutoClearInAlphaMode = ((0, Ez.j)(this, Sz), (0, Ez.j)(this, yz, !1)), this.alphaConstants = ((0, Ez.j)(this, Dz), (0, Ez.j)(this, Qz, void 0)), this.animations = ((0, Ez.j)(this, Wz), []), this.enablePixelPerfectMode = (0, Ez.j)(this, ez, !1), this.forceFullscreenViewport = ((0, Ez.j)(this, jz), (0, Ez.j)(this, Iz, !0)), this.inspectableCustomProperties = (0, Ez.j)(this, Bz), this.scaleMode = (0, Ez.j)(this, Cz, 1), this.alwaysForcePOT = ((0, Ez.j)(this, Yz), (0, Ez.j)(this, kz, !1)), this._samples = ((0, Ez.j)(this, zu), (0, Ez.j)(this, uu, 1)), this.adaptScaleToCurrentViewport = ((0, Ez.j)(this, bu), (0, Ez.j)(this, Eu, !1)), this.doNotSerialize = ((0, Ez.j)(this, nu), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new nz.e(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new lz.m(1, 1), this._texelSize = lz.m.Zero(), this.onActivateObservable = new iz.b, this.onSizeChangedObservable = new iz.b, this.onApplyObservable = new iz.b, this.onBeforeRenderObservable = new iz.b, this.onAfterRenderObservable = new iz.b, this.aT = new iz.b, Kz();
            let vz, xz = 1,
              Jz = null;
            if (Mz && !Array.isArray(Mz)) {
              const zz = Mz;
              Mz = zz.uniforms ?? null, tz = zz.samplers ?? null, xz = zz.size ?? 1, Oz = zz.camera ?? null, pz = zz.samplingMode ?? 1, dz = zz.engine, Zz = zz.reusable, Rz = Array.isArray(zz.defines) ? zz.defines.join("\n") : zz.defines ?? null, wz = zz.textureType ?? 0, Xz = zz.vertexUrl ?? "postprocess", fz = zz.indexParameters, sz = zz.blockCompilation ?? !1, rz = zz.textureFormat ?? 5, oz = zz.shaderLanguage ?? 0, Jz = zz.uniformBuffers ?? null, Nz = zz.extraInitializations, vz = zz.effectWrapper
            } else Hz && (xz = "number" === typeof Hz ? Hz : {
              width: Hz.width,
              height: Hz.height
            });
            if (this._useExistingThinPostProcess = !!vz, this._effectWrapper = vz ?? new Fz.c({
                name: uz,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: bz,
                engine: dz || Oz?.XT().uR(),
                uniforms: Mz,
                samplers: tz,
                uniformBuffers: Jz,
                defines: Rz,
                vertexUrl: Xz,
                indexParameters: fz,
                blockCompilation: !0,
                shaderLanguage: oz,
                extraInitializations: void 0
              }), this.name = uz, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != Oz ? (this.HI = Oz, this._scene = Oz.XT(), Oz.attachPostProcess(this), this._engine = this._scene.uR(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : dz && (this._engine = dz, this._engine.postProcesses.push(this)), this._options = xz, this.renderTargetSamplingMode = pz || 1, this._reusable = Zz || !1, this._textureType = wz, this._textureFormat = rz, this._shaderLanguage = oz || 0, this._samplers = tz || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = bz, this._vertexUrl = Xz, this._parameters = Mz || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = Jz || [], this._indexParameters = fz, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const uz = [];
              this._gatherImports(this._engine.isWebGPU && !zz.ForceGLSL, uz), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(sz, Rz, Nz, uz)
            }
          }
          _gatherImports() {
            let zz = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? zz.push(Promise.all([bz.e(356).then((() => bz(60539)))])) : zz.push(Promise.all([bz.e(345).then((() => bz(60333)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          uR() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(zz) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = zz, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new nz.e(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Ez = arguments.length > 3 ? arguments[3] : void 0,
              nz = arguments.length > 4 ? arguments[4] : void 0,
              iz = arguments.length > 5 ? arguments[5] : void 0,
              lz = arguments.length > 6 ? arguments[6] : void 0,
              Mz = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(zz, uz, bz, Ez, nz, iz, lz, Mz), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(zz, uz) {
            let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let nz = 0; nz < this._textureCache.length; nz++)
              if (this._textureCache[nz].texture.width === zz.width && this._textureCache[nz].texture.height === zz.height && this._textureCache[nz].postProcessChannel === bz && this._textureCache[nz].texture._generateDepthBuffer === uz.generateDepthBuffer && this._textureCache[nz].texture.samples === uz.samples) return this._textureCache[nz].texture;
            const Ez = this._engine.createRenderTargetTexture(zz, uz);
            return this._textureCache.push({
              texture: Ez,
              postProcessChannel: bz,
              lastUsedRenderId: -1
            }), Ez
          }
          _flushTextureCache() {
            const zz = this._renderId;
            for (let uz = this._textureCache.length - 1; uz >= 0; uz--)
              if (zz - this._textureCache[uz].lastUsedRenderId > 100) {
                let zz = !1;
                for (let bz = 0; bz < this._textures.length; bz++)
                  if (this._textures.data[bz] === this._textureCache[uz].texture) {
                    zz = !0;
                    break
                  } zz || (this._textureCache[uz].texture.dispose(), this._textureCache.splice(uz, 1))
              }
          }
          resize(zz, uz) {
            let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              nz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = zz, this.height = uz;
            let iz = null;
            if (bz)
              for (let tz = 0; tz < bz._postProcesses.length; tz++)
                if (null !== bz._postProcesses[tz]) {
                  iz = bz._postProcesses[tz];
                  break
                } const lz = {
                width: this.width,
                height: this.height
              },
              Mz = {
                generateMipMaps: Ez,
                generateDepthBuffer: nz || iz === this,
                generateStencilBuffer: (nz || iz === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(lz, Mz, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(lz, Mz, 1)), this._texelSize.P_(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let zz;
            if (this._shareOutputWithPostProcess) zz = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) zz = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let uz;
              zz = this.inputTexture;
              for (let bz = 0; bz < this._textureCache.length; bz++)
                if (this._textureCache[bz].texture === zz) {
                  uz = this._textureCache[bz];
                  break
                } uz && (uz.lastUsedRenderId = this._renderId)
            }
            return zz
          }
          activate(zz) {
            let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              bz = arguments.length > 2 ? arguments[2] : void 0;
            const Ez = null === zz || void 0 !== zz.cameraRigMode ? zz || this.HI : null,
              nz = Ez?.XT() ?? zz,
              iz = nz.uR(),
              lz = iz.getCaps().maxTextureSize,
              Mz = (uz ? uz.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              tz = (uz ? uz.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let Hz = this._options.width || Mz,
              Oz = this._options.height || tz;
            const pz = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let Fz = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const zz = iz.currentViewport;
                zz && (Hz *= zz.width, Oz *= zz.height)
              }(pz || this.alwaysForcePOT) && (this._options.width || (Hz = iz.needPOTTextures ? (0, dz.e)(Hz, lz, this.scaleMode) : Hz), this._options.height || (Oz = iz.needPOTTextures ? (0, dz.e)(Oz, lz, this.scaleMode) : Oz)), this.width === Hz && this.height === Oz && (Fz = this._getTarget()) || this.resize(Hz, Oz, Ez, pz, bz), this._textures.forEach((zz => {
                zz.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(zz, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return Fz || (Fz = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.P_(Mz / Hz, tz / Oz), this._engine.bindFramebuffer(Fz, 0, Mz, tz, this.forceFullscreenViewport)) : (this._scaleRatio.P_(1, 1), this._engine.bindFramebuffer(Fz, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(Ez), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : nz.clearColor, nz._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), Fz
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
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.uR().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), zz = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", zz?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
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
            let uz;
            if (zz = zz || this.HI, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (uz = this._parentContainer.postProcesses.indexOf(this), uz > -1 && this._parentContainer.postProcesses.splice(uz, 1), this._parentContainer = null), uz = this._engine.postProcesses.indexOf(this), -1 !== uz && this._engine.postProcesses.splice(uz, 1), this.aT.notifyObservers(), zz) {
              if (zz.detachPostProcess(this), uz = zz._postProcesses.indexOf(this), 0 === uz && zz._postProcesses.length > 0) {
                const zz = this.HI._getFirstPostProcess();
                zz && zz.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const zz = Hz.e.Serialize(this),
              uz = this.getCamera() || this._scene && this._scene.activeCamera;
            return zz.customType = "BABYLON." + this.getClassName(), zz.cameraId = uz ? uz.id : null, zz.reusable = this._reusable, zz.textureType = this._textureType, zz.fragmentUrl = this._fragmentUrl, zz.parameters = this._parameters, zz.samplers = this._samplers, zz.uniformBuffers = this._uniformBuffers, zz.options = this._options, zz.defines = this._postProcessDefines, zz.textureFormat = this._textureFormat, zz.vertexUrl = this._vertexUrl, zz.indexParameters = this._indexParameters, zz
          }
          clone() {
            const uz = this.serialize();
            uz._engine = this._engine, uz.cameraId = null;
            const bz = zz.Parse(uz, this._scene, "");
            return bz ? (bz.onActivateObservable = this.onActivateObservable.clone(), bz.onSizeChangedObservable = this.onSizeChangedObservable.clone(), bz.onApplyObservable = this.onApplyObservable.clone(), bz.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), bz.onAfterRenderObservable = this.onAfterRenderObservable.clone(), bz._prePassEffectConfiguration = this._prePassEffectConfiguration, bz) : null
          }
          static Parse(zz, uz, bz) {
            const Ez = (0, Oz.b)(zz.customType);
            if (!Ez || !Ez._Parse) return null;
            const nz = uz ? uz.getCameraById(zz.cameraId) : null;
            return Ez._Parse(zz, nz, uz, bz)
          }
          static _Parse(uz, bz, Ez, nz) {
            return Hz.e.Parse((() => new zz(uz.name, uz.fragmentUrl, uz.parameters, uz.samplers, uz.options, bz, uz.renderTargetSamplingMode, uz._engine, uz.reusable, uz.defines, uz.textureType, uz.vertexUrl, uz.indexParameters, !1, uz.textureFormat)), uz, Ez, nz)
          }
        }, (() => {
          const bz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          uz = [(0, tz.G)()], Mz = [(0, tz.G)()], pz = [(0, tz.G)()], Zz = [(0, tz.G)()], Rz = [(0, tz.G)()], wz = [(0, tz.s)()], Xz = [(0, tz.G)()], fz = [(0, tz.G)()], sz = [(0, tz.G)()], rz = [(0, tz.G)()], oz = [(0, tz.G)()], Nz = [(0, tz.G)()], vz = [(0, tz.G)()], xz = [(0, tz.G)()], Jz = [(0, tz.G)("samples")], Az = [(0, tz.G)()], (0, Ez.h)(zz, null, Mz, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: zz => "name" in zz,
              get: zz => zz.name
            },
            metadata: bz
          }, null, Tz), (0, Ez.h)(zz, null, sz, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: zz => "alphaMode" in zz,
              get: zz => zz.alphaMode
            },
            metadata: bz
          }, null, Tz), (0, Ez.h)(null, null, uz, {
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
            metadata: bz
          }, Lz, Pz), (0, Ez.h)(null, null, pz, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: zz => "width" in zz,
              get: zz => zz.width,
              set: (zz, uz) => {
                zz.width = uz
              }
            },
            metadata: bz
          }, Gz, az), (0, Ez.h)(null, null, Zz, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: zz => "height" in zz,
              get: zz => zz.height,
              set: (zz, uz) => {
                zz.height = uz
              }
            },
            metadata: bz
          }, Vz, mz), (0, Ez.h)(null, null, Rz, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: zz => "renderTargetSamplingMode" in zz,
              get: zz => zz.renderTargetSamplingMode,
              set: (zz, uz) => {
                zz.renderTargetSamplingMode = uz
              }
            },
            metadata: bz
          }, qz, hz), (0, Ez.h)(null, null, wz, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: zz => "clearColor" in zz,
              get: zz => zz.clearColor,
              set: (zz, uz) => {
                zz.clearColor = uz
              }
            },
            metadata: bz
          }, Uz, cz), (0, Ez.h)(null, null, Xz, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: zz => "autoClear" in zz,
              get: zz => zz.autoClear,
              set: (zz, uz) => {
                zz.autoClear = uz
              }
            },
            metadata: bz
          }, gz, Sz), (0, Ez.h)(null, null, fz, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: zz => "forceAutoClearInAlphaMode" in zz,
              get: zz => zz.forceAutoClearInAlphaMode,
              set: (zz, uz) => {
                zz.forceAutoClearInAlphaMode = uz
              }
            },
            metadata: bz
          }, yz, Dz), (0, Ez.h)(null, null, rz, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: zz => "alphaConstants" in zz,
              get: zz => zz.alphaConstants,
              set: (zz, uz) => {
                zz.alphaConstants = uz
              }
            },
            metadata: bz
          }, Qz, Wz), (0, Ez.h)(null, null, oz, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: zz => "enablePixelPerfectMode" in zz,
              get: zz => zz.enablePixelPerfectMode,
              set: (zz, uz) => {
                zz.enablePixelPerfectMode = uz
              }
            },
            metadata: bz
          }, ez, jz), (0, Ez.h)(null, null, Nz, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: zz => "forceFullscreenViewport" in zz,
              get: zz => zz.forceFullscreenViewport,
              set: (zz, uz) => {
                zz.forceFullscreenViewport = uz
              }
            },
            metadata: bz
          }, Iz, Bz), (0, Ez.h)(null, null, vz, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: zz => "scaleMode" in zz,
              get: zz => zz.scaleMode,
              set: (zz, uz) => {
                zz.scaleMode = uz
              }
            },
            metadata: bz
          }, Cz, Yz), (0, Ez.h)(null, null, xz, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: zz => "alwaysForcePOT" in zz,
              get: zz => zz.alwaysForcePOT,
              set: (zz, uz) => {
                zz.alwaysForcePOT = uz
              }
            },
            metadata: bz
          }, kz, zu), (0, Ez.h)(null, null, Jz, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: zz => "_samples" in zz,
              get: zz => zz._samples,
              set: (zz, uz) => {
                zz._samples = uz
              }
            },
            metadata: bz
          }, uu, bu), (0, Ez.h)(null, null, Az, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: zz => "adaptScaleToCurrentViewport" in zz,
              get: zz => zz.adaptScaleToCurrentViewport,
              set: (zz, uz) => {
                zz.adaptScaleToCurrentViewport = uz
              }
            },
            metadata: bz
          }, Eu, nu), bz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bz
          })
        })(), zz
      })(),
      Rz = !1;

    function Kz() {
      Rz || (Rz = !0, pz.b.prototype.setTextureFromPostProcess = function(zz, uz, bz) {
        let Ez = null;
        uz && (uz._forcedOutputTexture ? Ez = uz._forcedOutputTexture : uz._textures.data[uz._currentRenderTextureInd] && (Ez = uz._textures.data[uz._currentRenderTextureInd])), this._bindTexture(zz, Ez?.texture ?? null, bz)
      }, pz.b.prototype.setTextureFromPostProcessOutput = function(zz, uz, bz) {
        this._bindTexture(zz, uz?._outputTexture?.texture ?? null, bz)
      }, Mz.b.prototype.setTextureFromPostProcess = function(zz, uz) {
        this._engine.setTextureFromPostProcess(this._samplers[zz], uz, zz)
      }, Mz.b.prototype.setTextureFromPostProcessOutput = function(zz, uz) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[zz], uz, zz)
      }, (0, Oz.c)("BABYLON.PostProcess", Zz))
    }
  },
  41027: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => lz,
      h: () => iz
    });
    var Ez = bz(41009),
      nz = bz(36543);
    class iz extends Ez.c {
      _gatherImports(zz, uz) {
        zz ? (this._webGPUReady = !0, uz.push(Promise.all([bz.e(363).then((() => bz(60594)))]))) : uz.push(Promise.all([bz.e(364).then((() => bz(60596)))])), super._gatherImports(zz, uz)
      }
      constructor(zz) {
        let uz = arguments.length > 2 ? arguments[2] : void 0;
        const bz = {
          name: zz,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || nz.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: iz.FragmentUrl,
          ...uz
        };
        bz.engine || (bz.engine = nz.d.LastCreatedEngine), super(bz)
      }
    }
    iz.FragmentUrl = "pass";
    class lz extends Ez.c {
      _gatherImports(zz, uz) {
        zz ? (this._webGPUReady = !0, uz.push(Promise.all([bz.e(365).then((() => bz(60605)))]))) : uz.push(Promise.all([bz.e(366).then((() => bz(60607)))])), super._gatherImports(zz, uz)
      }
      constructor(zz) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: zz,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || nz.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: lz.FragmentUrl,
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
    lz.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);