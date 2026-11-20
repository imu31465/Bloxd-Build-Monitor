export const id = 301;
export const ids = [301];
export const modules = {
  41170: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => eU
    });
    var tU = gU(36624),
      pU = gU(36600),
      EU = gU(39855),
      PU = gU(39524),
      TU = gU(39311),
      qU = gU(38236),
      KU = gU(39504),
      cU = gU(39534),
      GU = gU(36610),
      jU = gU(39268),
      uU = gU(39480),
      CU = gU(39581);
    class hU {
      get renderList() {
        return this._renderList
      }
      set renderList(UU) {
        this._renderList !== UU && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), UU && (this._unObserveRenderList = (0, GU.h)(UU, this._renderListHasChanged)), this._renderList = UU)
      }
      get disableImageProcessing() {
        return this._disableImageProcessing
      }
      set disableImageProcessing(UU) {
        UU !== this._disableImageProcessing && (this._disableImageProcessing = UU, this._scene.markAllMaterialsAsDirty(64))
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(UU) {
        this._disableDepthPrePass = UU, this._renderingManager.disableDepthPrePass = UU
      }
      get name() {
        return this._name
      }
      set name(UU) {
        if (this._name !== UU) {
          if (this._name = UU, this._sceneUBOs)
            for (let UU = 0; UU < this._sceneUBOs.length; ++UU) this._sceneUBOs[UU].name = `Scene ubo #${UU} for ${this.name}`;
          if (this._scene)
            for (let UU = 0; UU < this._renderPassIds.length; ++UU) {
              const RU = this._renderPassIds[UU];
              this._engine._renderPassNames[RU] = `${this._name}#${UU}`
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
      setMaterialForRendering(UU, RU) {
        let gU;
        gU = Array.isArray(UU) ? UU : [UU];
        for (let tU = 0; tU < gU.length; ++tU)
          for (let UU = 0; UU < this.options.numPasses; ++UU) {
            let pU = gU[tU];
            gU[tU].sZ && (pU = gU[tU].VtU), pU.setMaterialForRenderPass(this._renderPassIds[UU], void 0 !== RU ? Array.isArray(RU) ? RU[UU] : RU : void 0)
          }
      }
      _freezeActiveMeshes(UU) {
        this._freezeActiveMeshesCancel = (0, jU.c)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, UU)
            for (let UU = 0; UU < this._activeMeshes.length; UU++) this._activeMeshes.data[UU]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((UU, RU) => {
          this._freezeActiveMeshesCancel = null, RU ? (qU.e.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), UU && qU.e.Error(UU)) : (qU.e.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), UU && (qU.e.Error(UU), UU.stack && qU.e.Error(UU.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let UU = 0; UU < this._activeMeshes.length; UU++) this._activeMeshes.data[UU]._unFreeze();
        this._isFrozen = !1
      }
      constructor(UU, RU, gU) {
        this._unObserveRenderList = null, this._renderListHasChanged = (UU, RU) => {
          const gU = this._renderList ? this._renderList.length : 0;
          if (0 === RU && gU > 0 || 0 === gU)
            for (const tU of this._scene.meshes) tU._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new tU.b, this.onAfterRenderObservable = new tU.b, this.onBeforeRenderingManagerRenderObservable = new tU.b, this.onAfterRenderingManagerRenderObservable = new tU.b, this.onInitRenderingObservable = new tU.b, this.onFinishRenderingObservable = new tU.b, this.onFastPathRenderObservable = new tU.b, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new uU.h(256), this._activeBoundingBoxes = new uU.h(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = UU, this._scene = RU, this._engine = this._scene.WC(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...gU
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new cU.e(RU), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const UU of this._scene.lights) UU.getTypeID() === CU.c.LIGHTTYPEID_CLUSTERED_CONTAINER && UU.isSupported && UU._updateBatches(this.activeCamera).render()
        })), this._scene.addObjectRenderer(this)
      }
      _releaseRenderPassId() {
        for (let UU = 0; UU < this.options.numPasses; ++UU) this._engine.releaseRenderPassId(this._renderPassIds[UU]);
        this._renderPassIds.length = 0
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let UU = 0; UU < this.options.numPasses; ++UU) this._renderPassIds[UU] = this._engine.createRenderPassId(`${this.name}#${UU}`)
      }
      _createSceneUBO(UU, RU) {
        const gU = this._scene.WC(),
          tU = new KU.c(gU, void 0, RU, UU, void 0, !1);
        return tU.addUniform("viewProjection", 16), RU && tU.addUniform("viewProjectionR", 16), tU.addUniform("view", 16), tU.addUniform("projection", 16), tU.addUniform("vEyePosition", 4), tU.addUniform("inverseProjection", 16), tU
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const UU = this._engine._currentRenderTarget,
          RU = !(!UU || !UU.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const UU = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${UU} for ${this.name}`, RU)), this._sceneUBOIsMultiview.push(RU)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== RU && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, RU), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = RU);
        const gU = this._sceneUBOs[this._currentSceneUBOIndex++];
        return gU.unbindEffect(), gU
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1
      }
      get refreshRate() {
        return this._refreshRate
      }
      set refreshRate(UU) {
        this._refreshRate = UU, this.resetRefreshCounter()
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1))
      }
      isReadyForRendering(UU, RU) {
        this.prepareRenderList(), this.initRender(UU, RU);
        const gU = this._checkReadiness();
        return this.finishRender(), gU
      }
      prepareRenderList() {
        const UU = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let RU = 0; RU < this._waitingRenderList.length; RU++) {
              const gU = this._waitingRenderList[RU],
                tU = UU.getMeshById(gU);
              tU && this.renderList.push(tU)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const UU = this._scene.meshes;
          for (let RU = 0; RU < UU.length; RU++) {
            const gU = UU[RU];
            this.renderListPredicate(gU) && this.renderList.push(gU)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(UU, RU) {
        const gU = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), gU && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(gU.getViewMatrix(), gU.getProjectionMatrix(!0)), this._scene._activeCamera = gU, this._engine.setViewport(gU.rigParent ? gU.rigParent.viewport : gU.viewport, UU, RU)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const UU = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (UU.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), UU._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== UU.activeCamera && UU.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), UU.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gU = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[UU], this.onBeforeRenderObservable.notifyObservers(UU);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(UU);
        else {
          const RU = this._prepareRenderingManager(UU),
            gU = this._scene.getOutlineRenderer?.(),
            tU = gU?.enabled;
          gU && (gU.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(UU), this._renderingManager.render(this.customRenderFunction, RU, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(UU), gU && (gU.enabled = tU)
        }
        RU || this.onAfterRenderObservable.notifyObservers(UU), this._engine.currentRenderPassId = gU
      }
      _checkReadiness() {
        const UU = this._scene,
          RU = this._engine.currentRenderPassId;
        let gU = !0;
        UU.getViewMatrix() || UU.updateTransformMatrix();
        const tU = this.options.numPasses;
        for (let pU = 0; pU < tU && gU; pU++) {
          const RU = this.renderList ? this.renderList : UU.frameGraph ? UU.meshes : UU.getActiveMeshes().data,
            EU = this.renderList || UU.frameGraph ? RU.length : UU.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[pU], this.onBeforeRenderObservable.notifyObservers(pU);
          let PU = null,
            TU = EU;
          this.getCustomRenderList && (PU = this.getCustomRenderList(pU, RU, EU), PU && (TU = PU.length)), PU || (PU = RU), this.options.doNotChangeAspectRatio || UU.updateTransformMatrix(!0);
          for (let UU = 0; UU < TU && gU; ++UU) {
            const RU = PU[UU];
            if (!RU.isEnabled() || RU.isBlocked || !RU.isVisible || !RU.ZI) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(RU, this.refreshRate, !0)) {
                gU = !1;
                continue
              }
            } else if (!RU.isReady(!0)) {
              gU = !1;
              continue
            }
            let tU = RU._edgesRenderer,
              pU = RU.hasThinInstances;
            if (RU.sZ) {
              const UU = RU.VtU;
              UU.edgesShareWithInstances && UU._edgesRenderer?.isEnabled && (tU = UU._edgesRenderer, pU = !0)
            } else RU.BtU && RU.edgesShareWithInstances && (pU = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && tU?.isEnabled && (tU.isReady(pU) || (gU = !1))
          }
          if (this.renderParticles && UU.particlesEnabled) {
            const RU = this.particleSystemList || UU.vI;
            for (const UU of RU) UU.isReady() || (gU = !1)
          }
          if (this.renderSprites && UU.spritesEnabled) {
            const RU = this.spriteManagerList || UU.spriteManagers;
            if (RU)
              for (const tU of RU) UU.activeCamera && 0 === (tU.layerMask & UU.activeCamera.layerMask) || tU.isReady && !tU.isReady() && (gU = !1)
          }
          this.onAfterRenderObservable.notifyObservers(pU), tU > 1 && (UU.incrementRenderId(), UU.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = RU, gU
      }
      _prepareRenderingManager() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gU = this._scene;
        let tU, pU, EU = null;
        const PU = this.renderList ? this.renderList : gU.frameGraph ? gU.meshes : gU.getActiveMeshes().data,
          TU = this.renderList || gU.frameGraph ? PU.length : gU.getActiveMeshes().length;
        if (this.getCustomRenderList && (EU = this.getCustomRenderList(UU, PU, TU)), EU) tU = EU.length, pU = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !RU && !this._engine.isWebGPU) return PU;
          this._defaultRenderListPrepared = !0, EU = PU, tU = TU, pU = !this.renderList || this.forceLayerMaskCheck
        }
        const qU = gU.activeCamera,
          KU = this.cameraForLOD ?? qU,
          cU = gU.getBoundingBoxRenderer?.();
        if (gU._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && cU) {
            cU.reset();
            for (let UU = 0; UU < this._activeBoundingBoxes.length; UU++) {
              const RU = this._activeBoundingBoxes.data[UU];
              cU.renderList.push(RU)
            }
          }
          return EU
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), cU && cU.reset(), this.renderMeshes) {
          const UU = gU.getRenderId(),
            RU = gU.getFrameId();
          for (let PU = 0; PU < tU; PU++) {
            const tU = EU[PU];
            if (tU && !tU.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(tU, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!tU.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let EU, PU;
              if (KU) {
                const UU = tU._internalAbstractMeshDataInfo._currentLOD.get(KU);
                UU && UU[1] === RU ? EU = UU[0] : (EU = gU.customLODSelector ? gU.customLODSelector(tU, KU) : tU.getLOD(KU), UU ? (UU[0] = EU, UU[1] = RU) : tU._internalAbstractMeshDataInfo._currentLOD.set(KU, [EU, RU]))
              } else EU = tU;
              if (!EU) continue;
              if (EU !== tU && 0 !== EU.billboardMode && EU.computeWorldMatrix(), EU._preActivateForIntermediateRendering(UU), PU = !(!pU || !qU) && 0 === (tU.layerMask & qU.layerMask), tU.isEnabled() && tU.isVisible && tU.ZI && !PU) {
                if (this._activeMeshes.push(tU), EU._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, EU !== tU && EU._activate(UU, !0), this.enableBoundingBoxRendering && cU && cU._preActiveMesh(tU), tU._activate(UU, !0) && tU.ZI.length) {
                  tU.sZ ? tU._internalAbstractMeshDataInfo._actAsRegularMesh && (EU = tU) : EU._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, EU._internalAbstractMeshDataInfo._isActiveIntermediate = !0, gU._prepareSkeleton(EU);
                  for (let UU = 0; UU < EU.ZI.length; UU++) {
                    const RU = EU.ZI[UU];
                    this.enableBoundingBoxRendering && cU && cU._evaluateSubMesh(tU, RU), this._renderingManager.dispatch(RU, EU)
                  }
                }
                tU._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && cU && RU)
          for (let GU = 0; GU < cU.renderList.length; GU++) {
            const UU = cU.renderList.data[GU];
            this._activeBoundingBoxes.push(UU)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const UU = this.particleSystemList || gU.vI;
          for (let RU = 0; RU < UU.length; RU++) {
            const gU = UU[RU],
              tU = gU.emitter;
            gU.isStarted() && tU && (!tU.position || tU.isEnabled()) && this._renderingManager.dispatchParticles(gU)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return EU
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(UU, RU, gU, tU)
      }
      setRenderingAutoClearDepthStencil(UU, RU) {
        let gU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          tU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(UU, RU, gU, tU), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const UU = new hU(this.name, this._scene, this.options);
        return this.renderList && (UU.renderList = this.renderList.slice(0)), UU
      }
      dispose() {
        const UU = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          RU = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let gU = 0; gU < RU; gU++) {
          const RU = UU[gU];
          RU && void 0 !== RU.getMaterialForRenderPass(this.renderPassId) && RU.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const gU of this._sceneUBOs) gU.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === hU.REFRESHRATE_RENDER_ONCE && (this.refreshRate = hU.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    hU.REFRESHRATE_RENDER_ONCE = 0, hU.REFRESHRATE_RENDER_ONEVERYFRAME = 1, hU.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var QU = gU(39256);
    class eU extends EU.e {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate
      }
      set renderListPredicate(UU) {
        this._objectRenderer.renderListPredicate = UU
      }
      get renderList() {
        return this._objectRenderer.renderList
      }
      set renderList(UU) {
        this._objectRenderer.renderList = UU
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList
      }
      set particleSystemList(UU) {
        this._objectRenderer.particleSystemList = UU
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList
      }
      set getCustomRenderList(UU) {
        this._objectRenderer.getCustomRenderList = UU
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles
      }
      set renderParticles(UU) {
        this._objectRenderer.renderParticles = UU
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites
      }
      set renderSprites(UU) {
        this._objectRenderer.renderSprites = UU
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering
      }
      set enableBoundingBoxRendering(UU) {
        this._objectRenderer.enableBoundingBoxRendering = UU
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering
      }
      set enableOutlineRendering(UU) {
        this._objectRenderer.enableOutlineRendering = UU
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck
      }
      set forceLayerMaskCheck(UU) {
        this._objectRenderer.forceLayerMaskCheck = UU
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera
      }
      set activeCamera(UU) {
        this._objectRenderer.activeCamera = UU
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD
      }
      set cameraForLOD(UU) {
        this._objectRenderer.cameraForLOD = UU
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing
      }
      set disableImageProcessing(UU) {
        this._objectRenderer.disableImageProcessing = UU
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction
      }
      set customIsReadyFunction(UU) {
        this._objectRenderer.customIsReadyFunction = UU
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction
      }
      set customRenderFunction(UU) {
        this._objectRenderer.customRenderFunction = UU
      }
      get postProcesses() {
        return this._postProcesses
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled
      }
      set onAfterUnbind(UU) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(UU)
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable
      }
      set onBeforeRender(UU) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(UU)
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable
      }
      set onAfterRender(UU) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(UU)
      }
      set onClear(UU) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(UU)
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList
      }
      set _waitingRenderList(UU) {
        this._objectRenderer._waitingRenderList = UU
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
      setMaterialForRendering(UU, RU) {
        this._objectRenderer.setMaterialForRendering(UU, RU)
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
      set boundingBoxSize(UU) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(UU)) return;
        this._boundingBoxSize = UU;
        const RU = this.aZ();
        RU && RU.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(UU, RU, gU) {
        let PU, TU, KU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          cU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          GU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          jU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          uU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : EU.e.TRILINEAR_SAMPLINGMODE,
          CU = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          QU = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          eU = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          WU = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          fU = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          xU = arguments.length > 13 ? arguments[13] : void 0,
          mU = arguments.length > 14 ? arguments[14] : void 0,
          IU = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          JU = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          wU = !0,
          nU = !1;
        if ("object" === typeof KU) {
          const UU = KU;
          KU = !!UU.generateMipMaps, cU = UU.doNotChangeAspectRatio ?? !0, GU = UU.type ?? 0, jU = !!UU.isCube, uU = UU.samplingMode ?? EU.e.TRILINEAR_SAMPLINGMODE, CU = UU.generateDepthBuffer ?? !0, QU = !!UU.generateStencilBuffer, eU = !!UU.isMulti, WU = UU.format ?? 5, fU = !!UU.delayAllocation, xU = UU.samples, mU = UU.creationFlags, IU = !!UU.noColorAttachment, JU = !!UU.useSRGBBuffer, PU = UU.colorAttachment, wU = UU.gammaSpace ?? wU, TU = UU.existingObjectRenderer, nU = !!UU.enableClusteredLights
        }
        if (super(null, gU, !KU, void 0, uU, void 0, void 0, void 0, void 0, WU), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new tU.b, this.onAfterUnbindObservable = new tU.b, this.onClearObservable = new tU.b, this.onResizeObservable = new tU.b, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = pU.n.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(gU = this.aZ())) return;
        const bU = this.aZ().WC();
        this._gammaSpace = wU, this._coordinatesMode = EU.e.PROJECTION_MODE, this.name = UU, this.isRenderTarget = !0, this._initialSizeParameter = RU, this._dontDisposeObjectRenderer = !!TU, this._processSizeParameter(RU), this._objectRenderer = TU ?? new hU(UU, gU, {
          numPasses: jU ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: cU,
          enableClusteredLights: nU
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const UU = this._scene;
          if (!this._disableEngineStages)
            for (const RU of UU._beforeRenderTargetClearStage) RU.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(bU) : this.skipInitialClear || bU.clear(this.clearColor ?? UU.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || UU.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const RU of UU._beforeRenderTargetDrawStage) RU.action(this, this._currentFaceIndex, this._currentLayer);
          bU._debugPushGroup && bU._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (bU._debugPopGroup && bU._debugPopGroup(), !this._disableEngineStages)
            for (const RU of this._scene._afterRenderTargetDrawStage) RU.action(this, this._currentFaceIndex, this._currentLayer);
          const UU = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const RU of this._scene._afterRenderTargetPostProcessStage) RU.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = UU), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), bU) : qU.e.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(bU) : this.skipInitialClear || bU.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = bU.onResizeObservable.add((() => {})), this._generateMipMaps = !!KU, this._doNotChangeAspectRatio = cU, eU || (this._renderTargetOptions = {
          generateMipMaps: KU,
          type: GU,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: CU,
          generateStencilBuffer: QU,
          samples: xU,
          creationFlags: mU,
          noColorAttachment: IU,
          useSRGBBuffer: JU,
          colorAttachment: PU,
          label: this.name
        }, this.samplingMode === EU.e.NEAREST_SAMPLINGMODE && (this.wrapU = EU.e.CLAMP_ADDRESSMODE, this.wrapV = EU.e.CLAMP_ADDRESSMODE), fU || (jU ? (this._renderTarget = gU.WC().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = EU.e.INVCUBIC_MODE, this._textureMatrix = pU.c.Identity()) : this._renderTarget = gU.WC().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== xU && (this.samples = xU)))
      }
      createDepthStencilTexture() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          EU = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(UU, RU, gU, tU, pU, EU)
      }
      _processSizeParameter(UU) {
        if (UU.ratio) {
          this._sizeRatio = UU.ratio;
          const RU = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(RU.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(RU.getRenderHeight(), this._sizeRatio)
          }
        } else this._size = UU
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples
      }
      set samples(UU) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(UU))
      }
      addPostProcess(UU) {
        if (!this._postProcessManager) {
          const UU = this.aZ();
          if (!UU) return;
          this._postProcessManager = new PU.c(UU), this._postProcesses = new Array
        }
        this._postProcesses.push(UU), this._postProcesses[0].autoClear = !1
      }
      clearPostProcesses() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (UU)
            for (const UU of this._postProcesses) UU.dispose();
          this._postProcesses = []
        }
      }
      removePostProcess(UU) {
        if (!this._postProcesses) return;
        const RU = this._postProcesses.indexOf(UU); - 1 !== RU && (this._postProcesses.splice(RU, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter()
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate
      }
      set refreshRate(UU) {
        this._objectRenderer.refreshRate = UU
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
        const UU = this._size.layers;
        if (UU) return UU;
        const RU = this._size.depth;
        return RU || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(UU) {
        const RU = Math.max(1, this.getRenderSize() * UU);
        this.resize(RU)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(UU) {
        const RU = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const gU = this.aZ();
        gU && (this._processSizeParameter(UU), this._renderTarget = RU ? gU.WC().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : gU.WC().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(UU, RU)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => gU(41181))).then((UU => this._dumpTools = UU))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const UU = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), UU
      }
      _render() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gU = this.aZ();
        if (!gU) return;
        void 0 !== this.useCameraPostProcesses && (UU = this.useCameraPostProcesses);
        const tU = gU.WC();
        if (tU._debugPushGroup && tU._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let pU = 0; pU < 6; pU++) this._renderToTarget(pU, UU, RU), gU.incrementRenderId(), gU.resetCachedMaterial();
          else this._renderToTarget(0, UU, RU);
        else
          for (let pU = 0; pU < this.getRenderLayers(); pU++) this._renderToTarget(0, UU, RU, pU), gU.incrementRenderId(), gU.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), tU._debugPopGroup && tU._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(UU, RU) {
        const gU = UU * RU,
          tU = (0, TU.k)(gU + 16384 / (128 + gU));
        return Math.min((0, TU.b)(UU), tU)
      }
      _bindFrameBuffer() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const gU = this.aZ();
        if (!gU) return;
        const tU = gU.WC();
        this._renderTarget && tU.bindFramebuffer(this._renderTarget, this.isCube ? UU : void 0, void 0, void 0, this.ignoreCameraViewport, 0, RU)
      }
      _unbindFrameBuffer(UU, RU) {
        this._renderTarget && UU.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(RU)
        }))
      }
      _prepareFrame(UU, RU, gU, tU) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(RU, gU) : tU && UU.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(RU, gU)
      }
      _renderToTarget(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const pU = this.aZ();
        if (!pU) return;
        const EU = pU.WC();
        this._currentFaceIndex = UU, this._currentLayer = tU, this._currentUseCameraPostProcess = RU, this._currentDumpForDebug = gU, this._prepareFrame(pU, UU, tU, RU), this._objectRenderer.render(UU + tU, !0), this._unbindFrameBuffer(EU, UU), this._texture && this.isCube && 5 === UU && EU.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(UU, RU, gU, tU)
      }
      setRenderingAutoClearDepthStencil(UU, RU) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(UU, RU)
      }
      clone() {
        const UU = this.getSize(),
          RU = new eU(this.name, UU, this.aZ(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return RU.hasAlpha = this.hasAlpha, RU.level = this.level, RU.coordinatesMode = this.coordinatesMode, this.renderList && (RU.renderList = this.renderList.slice(0)), RU
      }
      serialize() {
        if (!this.name) return null;
        const UU = super.serialize();
        if (UU.renderTargetSize = this.getRenderSize(), UU.renderList = [], this.renderList)
          for (let RU = 0; RU < this.renderList.length; RU++) UU.renderList.push(this.renderList[RU].id);
        return UU
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.aZ().WC().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const UU = this.aZ();
        if (!UU) return;
        let RU = UU.customRenderTargets.indexOf(this);
        RU >= 0 && UU.customRenderTargets.splice(RU, 1);
        for (const gU of UU.cameras) RU = gU.customRenderTargets.indexOf(this), RU >= 0 && gU.customRenderTargets.splice(RU, 1);
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
    eU.REFRESHRATE_RENDER_ONCE = hU.REFRESHRATE_RENDER_ONCE, eU.REFRESHRATE_RENDER_ONEVERYFRAME = hU.REFRESHRATE_RENDER_ONEVERYFRAME, eU.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = hU.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(eU.prototype, "noPrePassRenderer") || Object.defineProperty(eU.prototype, "noPrePassRenderer", (0, QU.i)("RenderTargetTexture", "noPrePassRenderer"))
  },
  41152: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => KU,
      f: () => cU
    });
    var tU = gU(39517),
      pU = gU(37641),
      EU = gU(36624),
      PU = gU(39223),
      TU = gU(39714);
    const qU = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class KU {
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qU;
        this._fullscreenViewport = new pU.d(0, 0, 1, 1);
        const gU = RU.positions ?? qU.positions,
          EU = RU.indices ?? qU.indices;
        this.engine = UU, this._vertexBuffers = {
          [tU.l.PositionKind]: new tU.l(UU, gU, tU.l.PositionKind, !1, !1, 2)
        }, this._indexBuffer = UU.createIndexBuffer(EU), this._indexBufferLength = EU.length, this._onContextRestoredObserver = UU.onContextRestoredObservable.add((() => {
          this._indexBuffer = UU.createIndexBuffer(EU);
          for (const UU in this._vertexBuffers) {
            this._vertexBuffers[UU]._rebuild()
          }
        }))
      }
      setViewport() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.engine.setViewport(UU)
      }
      bindBuffers(UU) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, UU)
      }
      applyEffectWrapper(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = RU, this.engine.stencilState.stencilTest = gU, this.engine.enableEffect(UU.drawWrapper), this.bindBuffers(UU.effect), UU.onApplyObservable.notifyObservers({})
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
      _isRenderTargetTexture(UU) {
        return void 0 !== UU.renderTarget
      }
      render(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!UU.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const gU = null === RU ? null : this._isRenderTargetTexture(RU) ? RU.renderTarget : RU;
        gU && this.engine.bindFramebuffer(gU), this.applyEffectWrapper(UU), this.draw(), gU && this.engine.unBindFramebuffer(gU), this.restoreStates()
      }
      dispose() {
        const UU = this._vertexBuffers[tU.l.PositionKind];
        UU && (UU.dispose(), delete this._vertexBuffers[tU.l.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class cU {
      static RegisterShaderCodeProcessing(UU, RU) {
        RU ? cU._CustomShaderCodeProcessing[UU ?? ""] = RU : delete cU._CustomShaderCodeProcessing[UU ?? ""]
      }
      static _GetShaderCodeProcessing(UU) {
        return cU._CustomShaderCodeProcessing[UU] ?? cU._CustomShaderCodeProcessing[""]
      }
      get name() {
        return this.options.name
      }
      set name(UU) {
        this.options.name = UU
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
      set effect(UU) {
        this._drawWrapper.effect = UU
      }
      constructor(UU) {
        this.alphaMode = 0, this.onEffectCreatedObservable = new EU.b(void 0, !0), this.onApplyObservable = new EU.b, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
          ...UU,
          name: UU.name || "effectWrapper",
          engine: UU.engine,
          uniforms: UU.uniforms || UU.uniformNames || [],
          uniformNames: void 0,
          samplers: UU.samplers || UU.samplerNames || [],
          samplerNames: void 0,
          attributeNames: UU.attributeNames || ["position"],
          uniformBuffers: UU.uniformBuffers || [],
          defines: UU.defines || "",
          useShaderStore: UU.useShaderStore || !1,
          vertexUrl: UU.vertexUrl || UU.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: UU.fragmentShader || "pass",
          indexParameters: UU.indexParameters,
          blockCompilation: UU.blockCompilation || !1,
          shaderLanguage: UU.shaderLanguage || 0,
          onCompiled: UU.onCompiled || void 0,
          extraInitializations: UU.extraInitializations || void 0,
          extraInitializationsAsync: UU.extraInitializationsAsync || void 0,
          useAsPostProcess: UU.useAsPostProcess ?? !1,
          allowEmptySourceTexture: UU.allowEmptySourceTexture ?? !1
        }, this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), UU.vertexUrl || UU.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add((() => {
          this.effect.setFloat2("scale", 1, 1)
        }))), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add((() => {
          this.bind()
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.onContextRestoredObservable.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new TU.c(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const RU = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, RU, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          tU = arguments.length > 2 ? arguments[2] : void 0,
          pU = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, pU && this._importPromises.push(...pU);
        const EU = this.options.engine.isWebGPU && !cU.ForceGLSL;
        this._gatherImports(EU, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(EU && this._webGPUReady ? gU.e(356).then((() => gU(60771))) : gU.e(345).then((() => gU(60543)))), void 0 !== tU && tU(EU, this._importPromises), EU && this._webGPUReady && (this.options.shaderLanguage = 1), UU || this.updateEffect(RU)
      }
      updateEffect() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          tU = arguments.length > 3 ? arguments[3] : void 0,
          pU = arguments.length > 4 ? arguments[4] : void 0,
          EU = arguments.length > 5 ? arguments[5] : void 0,
          TU = arguments.length > 6 ? arguments[6] : void 0,
          qU = arguments.length > 7 ? arguments[7] : void 0;
        const KU = cU._GetShaderCodeProcessing(this.name);
        if (KU?.defineCustomBindings) {
          const tU = RU?.slice() ?? [];
          tU.push(...this.options.uniforms);
          const pU = gU?.slice() ?? [];
          pU.push(...this.options.samplers), UU = KU.defineCustomBindings(this.name, UU, tU, pU), RU = tU, gU = pU
        }
        this.options.defines = UU || "";
        const GU = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let jU;
        jU = this.options.extraInitializationsAsync ? async () => {
          await (GU?.()), await this.options.extraInitializationsAsync()
        }: GU, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: TU ?? this._shaderPath.vertex,
          fragment: qU ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: RU || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: gU || this.options.samplers,
          defines: null !== UU ? UU : "",
          fallbacks: null,
          onCompiled: pU ?? this.options.onCompiled,
          onError: EU ?? null,
          indexParameters: tU || this.options.indexParameters,
          processCodeAfterIncludes: KU?.processCodeAfterIncludes ? (UU, RU) => KU.processCodeAfterIncludes(this.name, UU, RU) : null,
          processFinalCode: KU?.processFinalCode ? (UU, RU) => KU.processFinalCode(this.name, UU, RU) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: jU
        }, this.options.engine) : this._drawWrapper.effect = new PU.d(this._shaderPath, this.options.attributeNames, RU || this.options.uniforms, gU || this.options.samplerNames, this.options.engine, UU, void 0, pU || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, jU), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !UU && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), cU._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.WC().onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    cU.ForceGLSL = !1, cU._CustomShaderCodeProcessing = {}
  },
  41181: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      Dispose: () => WU,
      DumpData: () => eU,
      DumpDataAsync: () => QU,
      DumpFramebuffer: () => hU,
      DumpTools: () => fU,
      EncodeImageAsync: () => CU,
      RegisterDumpTools: () => mU
    });
    var tU = gU(39377),
      pU = gU(41152),
      EU = gU(39473),
      PU = gU(36626),
      TU = gU(36622),
      qU = gU(38236),
      KU = gU(39434),
      cU = gU(39380);
    let GU = null;
    async function jU() {
      return GU || (GU = async function() {
        const UU = TU.c.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        UU instanceof OffscreenCanvas && qU.e.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: RU
        } = await Promise.resolve().then((() => gU(39215)));
        if (!RU.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const tU = new RU(UU, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        TU.c.Instances.pop(), TU.c.OnEnginesDisposedObservable.add((UU => {
          tU && UU !== tU && !tU.lRU && 0 === TU.c.Instances.length && WU()
        })), tU.getCaps().parallelShaderCompile = void 0;
        const EU = new pU.d(tU),
          {
            passPixelShader: PU
          } = await gU.e(364).then((() => gU(60817))),
          KU = new pU.f({
            engine: tU,
            name: PU.name,
            fragmentShader: PU.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: UU,
          dumpEngine: {
            engine: tU,
            renderer: EU,
            wrapper: KU
          }
        }
      }()), await GU
    }
    let uU = (() => {
      var UU;
      let RU, gU = [];
      return UU = class {
        static async EncodeImageAsync(UU, RU, gU, tU, pU, PU) {
          const TU = await jU(),
            qU = TU.dumpEngine;
          qU.engine.setSize(RU, gU, !0);
          const KU = qU.engine.createRawTexture(UU, RU, gU, 5, !1, !pU, 1);
          return qU.renderer.setViewport(), qU.renderer.applyEffectWrapper(qU.wrapper), qU.wrapper.effect._bindTexture("textureSampler", KU), qU.renderer.draw(), KU.dispose(), await new Promise(((UU, RU) => {
            EU.g.ToBlob(TU.canvas, (gU => {
              gU ? UU(gU) : RU(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), tU, PU)
          }))
        }
      }, (() => {
        const pU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        RU = [cU.g], (0, tU.i)(UU, null, RU, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: UU => "EncodeImageAsync" in UU,
            get: UU => UU.EncodeImageAsync
          },
          metadata: pU
        }, null, gU), pU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: pU
        }), (0, tU.j)(UU, gU)
      })(), UU
    })();
    const CU = uU.EncodeImageAsync;
    async function hU(UU, RU, gU, tU) {
      let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        EU = arguments.length > 5 ? arguments[5] : void 0,
        PU = arguments.length > 6 ? arguments[6] : void 0;
      const TU = await gU.readPixels(0, 0, UU, RU);
      eU(UU, RU, new Uint8Array(TU.buffer), tU, pU, EU, !0, void 0, PU)
    }
    async function QU(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        pU = arguments.length > 4 ? arguments[4] : void 0,
        TU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        cU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        GU = arguments.length > 7 ? arguments[7] : void 0;
      if (gU instanceof Float32Array) {
        const UU = new Uint8Array(gU.length);
        let RU = gU.length;
        for (; RU--;) {
          const tU = gU[RU];
          UU[RU] = Math.round(255 * (0, PU.Clamp)(tU))
        }
        gU = UU
      }
      const jU = await uU.EncodeImageAsync(gU, UU, RU, tU, TU, GU);
      void 0 !== pU && EU.g.DownloadBlob(jU, pU), jU.type !== tU && qU.e.Warn(`DumpData: The requested mimeType '${tU}' is not supported. The result has mimeType '${jU.type}' instead.`);
      const CU = await jU.arrayBuffer();
      return cU ? CU : `data:${tU};base64,${(0,KU.d)(CU)}`
    }

    function eU(UU, RU, gU, tU) {
      let pU = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== pU || tU || (pU = ""), QU(UU, RU, gU, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", pU, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((UU => {
        tU && tU(UU)
      }))
    }

    function WU() {
      GU && (GU?.then((UU => {
        UU.canvas instanceof HTMLCanvasElement && UU.canvas.remove(), UU.dumpEngine && (UU.dumpEngine.engine.dispose(), UU.dumpEngine.renderer.dispose(), UU.dumpEngine.wrapper.dispose())
      })), GU = null)
    }
    const fU = {
      DumpData: eU,
      DumpDataAsync: QU,
      DumpFramebuffer: hU,
      Dispose: WU
    };
    let xU = !1;

    function mU() {
      if (xU) return;
      xU = !0;
      EU.g.DumpData = eU, EU.g.DumpDataAsync = QU, EU.g.DumpFramebuffer = hU
    }
  },
  41165: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => uU,
      f: () => CU,
      h: () => hU
    });
    var tU = gU(39855),
      pU = gU(41170),
      EU = gU(39377),
      PU = gU(41147),
      TU = gU(39395),
      qU = gU(41179),
      KU = gU(39380);
    class cU extends PU.e {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(UU, RU) {
        let gU = arguments.length > 4 ? arguments[4] : void 0;
        const tU = {
          size: "number" === typeof RU ? RU : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: gU,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...RU
        };
        super(UU, qU.d.FragmentUrl, {
          effectWrapper: "number" !== typeof RU && RU.effectWrapper ? void 0 : new qU.d(UU, gU, tU),
          ...tU
        })
      }
      static _Parse(UU, RU, gU, tU) {
        return TU.b.Parse((() => new cU(UU.name, UU.options, RU, UU.renderTargetSamplingMode, UU._engine, UU.reusable)), UU, gU, tU)
      }
    }(() => {
      var UU;
      let RU, gU = PU.e,
        tU = [];
      UU = class extends gU {
        get face() {
          return this._effectWrapper.face
        }
        set face(UU) {
          this._effectWrapper.face = UU
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(UU, RU) {
          let gU = arguments.length > 4 ? arguments[4] : void 0;
          const pU = {
            size: "number" === typeof RU ? RU : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: gU,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...RU
          };
          super(UU, qU.d.FragmentUrl, {
            effectWrapper: "number" !== typeof RU && RU.effectWrapper ? void 0 : new qU.c(UU, gU, pU),
            ...pU
          }), (0, EU.j)(this, tU)
        }
        static _Parse(RU, gU, tU, pU) {
          return TU.b.Parse((() => new UU(RU.name, RU.options, gU, RU.renderTargetSamplingMode, RU._engine, RU.reusable)), RU, tU, pU)
        }
      }, (() => {
        const pU = "function" === typeof Symbol && Symbol.metadata ? Object.create(gU[Symbol.metadata] ?? null) : void 0;
        RU = [(0, KU.K)()], (0, EU.i)(UU, null, RU, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: UU => "face" in UU,
            get: UU => UU.face
          },
          metadata: pU
        }, null, tU), pU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: pU
        })
      })()
    })();
    var GU = gU(36626),
      jU = gU(39442);

    function uU(UU, RU, gU, tU, pU, EU, TU, qU) {
      const KU = RU.WC();
      return RU.isReady = !1, pU = pU ?? RU.samplingMode, tU = tU ?? RU.type, EU = EU ?? RU.format, TU = TU ?? RU.width, qU = qU ?? RU.height, -1 === tU && (tU = 0), new Promise((cU => {
        const GU = new PU.e("postprocess", UU, null, null, 1, null, pU, KU, !1, void 0, tU, void 0, null, !1, EU);
        GU.externalTextureSamplerBinding = !0;
        const jU = KU.createRenderTargetTexture({
          width: TU,
          height: qU
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: pU,
          type: tU,
          format: EU
        });
        GU.onEffectCreatedObservable.addOnce((UU => {
          UU.executeWhenCompiled((() => {
            GU.onApply = UU => {
              UU._bindTexture("textureSampler", RU), UU.setFloat2("scale", 1, 1)
            }, gU.postProcessManager.directRender([GU], jU, !0), KU.restoreDefaultFramebuffer(), KU._releaseTexture(RU), GU && GU.dispose(), jU._swapAndDie(RU), RU.type = tU, RU.format = 5, RU.isReady = !0, cU(RU)
          }))
        }))
      }))
    }
    async function CU(UU, RU, EU) {
      let TU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        qU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        KU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        cU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(UU) {
        if (UU.isReady()) return;
        if (UU.loadingError) throw new Error(UU.errorObject?.message || `Texture ${UU.name} errored while loading.`);
        const RU = UU.onLoadObservable;
        if (RU) return await new Promise((UU => RU.addOnce((() => UU()))));
        const gU = UU._texture?.onLoadedObservable;
        if (gU) return await new Promise((UU => gU.addOnce((() => UU()))));
        throw new Error(`Cannot determine readiness of texture ${UU.name}.`)
      }(UU);
      const jU = UU.getInternalTexture(),
        uU = UU.is3D || !!jU?.is3D,
        {
          width: CU,
          height: hU
        } = UU.getSize(),
        QU = RU ?? CU,
        eU = EU ?? hU;
      if (KU || uU || function(UU) {
          switch (UU) {
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
        }(UU.textureFormat) || QU !== CU || eU !== hU) {
        if (UU.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${KU?"RTT":"compression"} is not supported.`);
        return await async function(UU, RU, EU, TU, qU) {
          let KU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const cU = UU.aZ(),
            GU = cU.WC(),
            jU = UU.getInternalTexture(),
            uU = UU.is3D || !!jU?.is3D;
          let CU;
          if (GU.isWebGPU ? uU ? await gU.e(360).then((() => gU(60797))) : UU.isCube ? await gU.e(361).then((() => gU(60805))) : await gU.e(362).then((() => gU(60810))) : uU ? await gU.e(357).then((() => gU(60781))) : UU.isCube ? await gU.e(358).then((() => gU(60784))) : await gU.e(359).then((() => gU(60792))), uU) CU = new PU.e("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: tU.e.NEAREST_NEAREST_MIPNEAREST,
            engine: GU,
            shaderLanguage: GU.isWebGPU ? 1 : 0
          });
          else if (UU.isCube) {
            const UU = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            CU = new PU.e("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: tU.e.NEAREST_NEAREST_MIPNEAREST,
              engine: GU,
              defines: UU[TU],
              shaderLanguage: GU.isWebGPU ? 1 : 0
            })
          } else CU = new PU.e("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: tU.e.NEAREST_NEAREST_MIPNEAREST,
            engine: GU,
            shaderLanguage: GU.isWebGPU ? 1 : 0
          });
          await new Promise((UU => {
            CU.onEffectCreatedObservable.addOnce((RU => {
              RU.executeWhenCompiled((() => {
                UU(0)
              }))
            }))
          }));
          const hU = new pU.e("temp", {
            width: RU,
            height: EU
          }, cU, !1);
          CU.onApply = function(RU) {
            RU.setTexture("textureSampler", UU), RU.setFloat("lod", qU), RU.setInt("gamma", UU.gammaSpace ? 1 : 0), uU && RU.setFloat("slice", KU)
          };
          try {
            if (hU.renderTarget && jU) {
              const gU = jU.samplingMode;
              0 !== qU ? UU.updateSamplingMode(tU.e.NEAREST_NEAREST_MIPNEAREST) : UU.updateSamplingMode(tU.e.NEAREST_NEAREST), cU.postProcessManager.directRender([CU], hU.renderTarget, !0), UU.updateSamplingMode(gU);
              const pU = await GU.readPixels(0, 0, RU, EU),
                PU = new Uint8Array(pU.buffer, pU.byteOffset, pU.byteLength);
              return GU.unBindFramebuffer(hU.renderTarget), PU
            }
            throw Error("Render to texture failed.")
          } finally {
            hU.dispose(), CU.dispose()
          }
        }(UU, QU, eU, TU, qU, cU)
      }
      let WU = await UU.readPixels(TU, qU);
      if (!WU) throw new Error(`Failed to read pixels from texture ${UU.name}.`);
      if (WU instanceof Float32Array) {
        const UU = new Uint8Array(WU.length);
        let RU = WU.length;
        for (; RU--;) {
          const gU = WU[RU];
          UU[RU] = Math.round(255 * (0, GU.Clamp)(gU))
        }
        WU = UU
      }
      const fU = QU * eU,
        xU = 4 * fU;
      if (WU.length !== xU) {
        const UU = 0 === fU ? 0 : WU.length / fU;
        if (1 === UU || 2 === UU || 3 === UU) {
          const RU = new Uint8Array(xU);
          for (let gU = 0, tU = 0, pU = 0; gU < fU; gU++, pU += 4) {
            const gU = WU[tU++];
            if (1 === UU) {
              RU[pU] = gU, RU[pU + 1] = gU, RU[pU + 2] = gU, RU[pU + 3] = 255;
              continue
            }
            const EU = WU[tU++];
            2 !== UU ? (RU[pU] = gU, RU[pU + 1] = EU, RU[pU + 2] = WU[tU++], RU[pU + 3] = 255) : (RU[pU] = gU, RU[pU + 1] = EU, RU[pU + 2] = 0, RU[pU + 3] = 255)
          }
          return RU
        }
      }
      return WU
    }
    const hU = {
      CreateResizedCopy: function(UU, RU, gU) {
        let EU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const PU = UU.aZ(),
          TU = PU.WC(),
          qU = new pU.e("resized" + UU.name, {
            width: RU,
            height: gU
          }, PU, !UU.noMipmap, !0, UU._texture.type, !1, UU.samplingMode, !1);
        qU.wrapU = UU.wrapU, qU.wrapV = UU.wrapV, qU.uOffset = UU.uOffset, qU.vOffset = UU.vOffset, qU.uScale = UU.uScale, qU.vScale = UU.vScale, qU.uAng = UU.uAng, qU.vAng = UU.vAng, qU.wAng = UU.wAng, qU.coordinatesIndex = UU.coordinatesIndex, qU.level = UU.level, qU.anisotropicFilteringLevel = UU.anisotropicFilteringLevel, qU._texture.isReady = !1, UU.wrapU = tU.e.CLAMP_ADDRESSMODE, UU.wrapV = tU.e.CLAMP_ADDRESSMODE;
        const KU = new cU("pass", 1, null, EU ? tU.e.BILINEAR_SAMPLINGMODE : tU.e.NEAREST_SAMPLINGMODE, TU, !1, 0);
        return KU.externalTextureSamplerBinding = !0, KU.onEffectCreatedObservable.addOnce((RU => {
          RU.executeWhenCompiled((() => {
            KU.onApply = function(RU) {
              RU.setTexture("textureSampler", UU)
            };
            const RU = qU.renderTarget;
            RU && (PU.postProcessManager.directRender([KU], RU), TU.unBindFramebuffer(RU), qU.disposeFramebufferObjects(), KU.dispose(), qU.getInternalTexture().isReady = !0)
          }))
        })), qU
      },
      ApplyPostProcess: uU,
      ToHalfFloat: jU.f,
      FromHalfFloat: jU.c,
      GetTextureDataAsync: CU
    }
  },
  41147: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => CU
    });
    var tU = gU(39377),
      pU = gU(39480),
      EU = gU(36624),
      PU = gU(36600),
      TU = gU(39223),
      qU = gU(39380),
      KU = gU(39395),
      cU = gU(36639),
      GU = gU(39272),
      jU = gU(39311),
      uU = gU(41152);
    let CU = (() => {
        var UU;
        let RU, TU, GU, CU, hU, eU, WU, fU, xU, mU, IU, JU, wU, nU, bU, oU, ZU = [],
          aU = [],
          YU = [],
          BU = [],
          VU = [],
          rU = [],
          XU = [],
          vU = [],
          dU = [],
          HU = [],
          SU = [],
          sU = [],
          yU = [],
          kU = [],
          FU = [],
          iU = [],
          AU = [],
          zU = [],
          MU = [],
          DU = [],
          LU = [],
          NU = [],
          lU = [],
          OU = [],
          UR = [],
          RR = [],
          gR = [],
          tR = [],
          pR = [];
        return UU = class {
          static get ForceGLSL() {
            return uU.f.ForceGLSL
          }
          static set ForceGLSL(UU) {
            uU.f.ForceGLSL = UU
          }
          static RegisterShaderCodeProcessing(UU, RU) {
            uU.f.RegisterShaderCodeProcessing(UU, RU)
          }
          get name() {
            return this._effectWrapper.name
          }
          set name(UU) {
            this._effectWrapper.name = UU
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode
          }
          set alphaMode(UU) {
            this._effectWrapper.alphaMode = UU
          }
          get samples() {
            return this._samples
          }
          set samples(UU) {
            this._samples = Math.min(UU, this._engine.getCaps().maxMSAASamples), this._textures.forEach((UU => {
              UU.setSamples(this._samples)
            }))
          }
          get shaderLanguage() {
            return this._shaderLanguage
          }
          getEffectName() {
            return this._fragmentUrl
          }
          set onActivate(UU) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), UU && (this._onActivateObserver = this.onActivateObservable.add(UU))
          }
          set onSizeChanged(UU) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(UU)
          }
          set onApply(UU) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(UU)
          }
          set onBeforeRender(UU) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(UU)
          }
          set onAfterRender(UU) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(UU)
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd]
          }
          set inputTexture(UU) {
            this._forcedOutputTexture = UU
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty())
          }
          getCamera() {
            return this.mD
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.b_(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(RU, gU, TU, qU, KU, cU) {
            let GU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              jU = arguments.length > 7 ? arguments[7] : void 0,
              CU = arguments.length > 8 ? arguments[8] : void 0,
              hU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              eU = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              WU = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              fU = arguments.length > 12 ? arguments[12] : void 0,
              xU = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              mU = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              IU = arguments.length > 15 ? arguments[15] : void 0,
              JU = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, tU.j)(this, ZU), null), this.uniqueId = (0, tU.j)(this, aU, void 0), this.width = ((0, tU.j)(this, YU), (0, tU.j)(this, BU, -1)), this.height = ((0, tU.j)(this, VU), (0, tU.j)(this, rU, -1)), this.nodeMaterialSource = ((0, tU.j)(this, XU), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, tU.j)(this, vU, void 0), this.clearColor = ((0, tU.j)(this, dU), (0, tU.j)(this, HU, void 0)), this.autoClear = ((0, tU.j)(this, SU), (0, tU.j)(this, sU, !0)), this.forceAutoClearInAlphaMode = ((0, tU.j)(this, yU), (0, tU.j)(this, kU, !1)), this.alphaConstants = ((0, tU.j)(this, FU), (0, tU.j)(this, iU, void 0)), this.animations = ((0, tU.j)(this, AU), []), this.enablePixelPerfectMode = (0, tU.j)(this, zU, !1), this.forceFullscreenViewport = ((0, tU.j)(this, MU), (0, tU.j)(this, DU, !0)), this.inspectableCustomProperties = (0, tU.j)(this, LU), this.scaleMode = (0, tU.j)(this, NU, 1), this.alwaysForcePOT = ((0, tU.j)(this, lU), (0, tU.j)(this, OU, !1)), this._samples = ((0, tU.j)(this, UR), (0, tU.j)(this, RR, 1)), this.adaptScaleToCurrentViewport = ((0, tU.j)(this, gR), (0, tU.j)(this, tR, !1)), this.doNotSerialize = ((0, tU.j)(this, pR), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new pU.h(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new PU.l(1, 1), this._texelSize = PU.l.Zero(), this.onActivateObservable = new EU.b, this.onSizeChangedObservable = new EU.b, this.onApplyObservable = new EU.b, this.onBeforeRenderObservable = new EU.b, this.onAfterRenderObservable = new EU.b, this.HZ = new EU.b, QU();
            let wU, nU = 1,
              bU = null;
            if (TU && !Array.isArray(TU)) {
              const UU = TU;
              TU = UU.uniforms ?? null, qU = UU.samplers ?? null, nU = UU.size ?? 1, cU = UU.camera ?? null, GU = UU.samplingMode ?? 1, jU = UU.engine, CU = UU.reusable, hU = Array.isArray(UU.defines) ? UU.defines.join("\n") : UU.defines ?? null, eU = UU.textureType ?? 0, WU = UU.vertexUrl ?? "postprocess", fU = UU.indexParameters, xU = UU.blockCompilation ?? !1, mU = UU.textureFormat ?? 5, IU = UU.shaderLanguage ?? 0, bU = UU.uniformBuffers ?? null, JU = UU.extraInitializations, wU = UU.effectWrapper
            } else KU && (nU = "number" === typeof KU ? KU : {
              width: KU.width,
              height: KU.height
            });
            if (this._useExistingThinPostProcess = !!wU, this._effectWrapper = wU ?? new uU.f({
                name: RU,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: gU,
                engine: jU || cU?.aZ().WC(),
                uniforms: TU,
                samplers: qU,
                uniformBuffers: bU,
                defines: hU,
                vertexUrl: WU,
                indexParameters: fU,
                blockCompilation: !0,
                shaderLanguage: IU,
                extraInitializations: void 0
              }), this.name = RU, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != cU ? (this.mD = cU, this._scene = cU.aZ(), cU.attachPostProcess(this), this._engine = this._scene.WC(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : jU && (this._engine = jU, this._engine.postProcesses.push(this)), this._options = nU, this.renderTargetSamplingMode = GU || 1, this._reusable = CU || !1, this._textureType = eU, this._textureFormat = mU, this._shaderLanguage = IU || 0, this._samplers = qU || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = gU, this._vertexUrl = WU, this._parameters = TU || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = bU || [], this._indexParameters = fU, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const RU = [];
              this._gatherImports(this._engine.isWebGPU && !UU.ForceGLSL, RU), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(xU, hU, JU, RU)
            }
          }
          _gatherImports() {
            let UU = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? UU.push(Promise.all([gU.e(356).then((() => gU(60771)))])) : UU.push(Promise.all([gU.e(345).then((() => gU(60543)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          WC() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(UU) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = UU, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new pU.h(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              tU = arguments.length > 3 ? arguments[3] : void 0,
              pU = arguments.length > 4 ? arguments[4] : void 0,
              EU = arguments.length > 5 ? arguments[5] : void 0,
              PU = arguments.length > 6 ? arguments[6] : void 0,
              TU = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(UU, RU, gU, tU, pU, EU, PU, TU), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(UU, RU) {
            let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let pU = 0; pU < this._textureCache.length; pU++)
              if (this._textureCache[pU].texture.width === UU.width && this._textureCache[pU].texture.height === UU.height && this._textureCache[pU].postProcessChannel === gU && this._textureCache[pU].texture._generateDepthBuffer === RU.generateDepthBuffer && this._textureCache[pU].texture.samples === RU.samples) return this._textureCache[pU].texture;
            const tU = this._engine.createRenderTargetTexture(UU, RU);
            return this._textureCache.push({
              texture: tU,
              postProcessChannel: gU,
              lastUsedRenderId: -1
            }), tU
          }
          _flushTextureCache() {
            const UU = this._renderId;
            for (let RU = this._textureCache.length - 1; RU >= 0; RU--)
              if (UU - this._textureCache[RU].lastUsedRenderId > 100) {
                let UU = !1;
                for (let gU = 0; gU < this._textures.length; gU++)
                  if (this._textures.data[gU] === this._textureCache[RU].texture) {
                    UU = !0;
                    break
                  } UU || (this._textureCache[RU].texture.dispose(), this._textureCache.splice(RU, 1))
              }
          }
          resize(UU, RU) {
            let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              pU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = UU, this.height = RU;
            let EU = null;
            if (gU)
              for (let qU = 0; qU < gU._postProcesses.length; qU++)
                if (null !== gU._postProcesses[qU]) {
                  EU = gU._postProcesses[qU];
                  break
                } const PU = {
                width: this.width,
                height: this.height
              },
              TU = {
                generateMipMaps: tU,
                generateDepthBuffer: pU || EU === this,
                generateStencilBuffer: (pU || EU === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(PU, TU, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(PU, TU, 1)), this._texelSize.b_(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let UU;
            if (this._shareOutputWithPostProcess) UU = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) UU = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let RU;
              UU = this.inputTexture;
              for (let gU = 0; gU < this._textureCache.length; gU++)
                if (this._textureCache[gU].texture === UU) {
                  RU = this._textureCache[gU];
                  break
                } RU && (RU.lastUsedRenderId = this._renderId)
            }
            return UU
          }
          activate(UU) {
            let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              gU = arguments.length > 2 ? arguments[2] : void 0;
            const tU = null === UU || void 0 !== UU.cameraRigMode ? UU || this.mD : null,
              pU = tU?.aZ() ?? UU,
              EU = pU.WC(),
              PU = EU.getCaps().maxTextureSize,
              TU = (RU ? RU.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              qU = (RU ? RU.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let KU = this._options.width || TU,
              cU = this._options.height || qU;
            const GU = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let uU = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const UU = EU.currentViewport;
                UU && (KU *= UU.width, cU *= UU.height)
              }(GU || this.alwaysForcePOT) && (this._options.width || (KU = EU.needPOTTextures ? (0, jU.e)(KU, PU, this.scaleMode) : KU), this._options.height || (cU = EU.needPOTTextures ? (0, jU.e)(cU, PU, this.scaleMode) : cU)), this.width === KU && this.height === cU && (uU = this._getTarget()) || this.resize(KU, cU, tU, GU, gU), this._textures.forEach((UU => {
                UU.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(UU, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return uU || (uU = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.b_(TU / KU, qU / cU), this._engine.bindFramebuffer(uU, 0, TU, qU, this.forceFullscreenViewport)) : (this._scaleRatio.b_(1, 1), this._engine.bindFramebuffer(uU, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(tU), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : pU.clearColor, pU._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), uU
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
            let UU;
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.WC().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), UU = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", UU?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
          }
          _disposeTextureCache() {
            for (let UU = this._textureCache.length - 1; UU >= 0; UU--) this._textureCache[UU].texture.dispose();
            this._textureCache.length = 0
          }
          setPrePassRenderer(UU) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = UU.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
          }
          dispose(UU) {
            let RU;
            if (UU = UU || this.mD, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (RU = this._parentContainer.postProcesses.indexOf(this), RU > -1 && this._parentContainer.postProcesses.splice(RU, 1), this._parentContainer = null), RU = this._engine.postProcesses.indexOf(this), -1 !== RU && this._engine.postProcesses.splice(RU, 1), this.HZ.notifyObservers(), UU) {
              if (UU.detachPostProcess(this), RU = UU._postProcesses.indexOf(this), 0 === RU && UU._postProcesses.length > 0) {
                const UU = this.mD._getFirstPostProcess();
                UU && UU.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const UU = KU.b.Serialize(this),
              RU = this.getCamera() || this._scene && this._scene.activeCamera;
            return UU.customType = "BABYLON." + this.getClassName(), UU.cameraId = RU ? RU.id : null, UU.reusable = this._reusable, UU.textureType = this._textureType, UU.fragmentUrl = this._fragmentUrl, UU.parameters = this._parameters, UU.samplers = this._samplers, UU.uniformBuffers = this._uniformBuffers, UU.options = this._options, UU.defines = this._postProcessDefines, UU.textureFormat = this._textureFormat, UU.vertexUrl = this._vertexUrl, UU.indexParameters = this._indexParameters, UU
          }
          clone() {
            const RU = this.serialize();
            RU._engine = this._engine, RU.cameraId = null;
            const gU = UU.Parse(RU, this._scene, "");
            return gU ? (gU.onActivateObservable = this.onActivateObservable.clone(), gU.onSizeChangedObservable = this.onSizeChangedObservable.clone(), gU.onApplyObservable = this.onApplyObservable.clone(), gU.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), gU.onAfterRenderObservable = this.onAfterRenderObservable.clone(), gU._prePassEffectConfiguration = this._prePassEffectConfiguration, gU) : null
          }
          static Parse(UU, RU, gU) {
            const tU = (0, cU.e)(UU.customType);
            if (!tU || !tU._Parse) return null;
            const pU = RU ? RU.getCameraById(UU.cameraId) : null;
            return tU._Parse(UU, pU, RU, gU)
          }
          static _Parse(RU, gU, tU, pU) {
            return KU.b.Parse((() => new UU(RU.name, RU.fragmentUrl, RU.parameters, RU.samplers, RU.options, gU, RU.renderTargetSamplingMode, RU._engine, RU.reusable, RU.defines, RU.textureType, RU.vertexUrl, RU.indexParameters, !1, RU.textureFormat)), RU, tU, pU)
          }
        }, (() => {
          const gU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          RU = [(0, qU.K)()], TU = [(0, qU.K)()], GU = [(0, qU.K)()], CU = [(0, qU.K)()], hU = [(0, qU.K)()], eU = [(0, qU.p)()], WU = [(0, qU.K)()], fU = [(0, qU.K)()], xU = [(0, qU.K)()], mU = [(0, qU.K)()], IU = [(0, qU.K)()], JU = [(0, qU.K)()], wU = [(0, qU.K)()], nU = [(0, qU.K)()], bU = [(0, qU.K)("samples")], oU = [(0, qU.K)()], (0, tU.i)(UU, null, TU, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: UU => "name" in UU,
              get: UU => UU.name
            },
            metadata: gU
          }, null, ZU), (0, tU.i)(UU, null, xU, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: UU => "alphaMode" in UU,
              get: UU => UU.alphaMode
            },
            metadata: gU
          }, null, ZU), (0, tU.i)(null, null, RU, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: UU => "uniqueId" in UU,
              get: UU => UU.uniqueId,
              set: (UU, RU) => {
                UU.uniqueId = RU
              }
            },
            metadata: gU
          }, aU, YU), (0, tU.i)(null, null, GU, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: UU => "width" in UU,
              get: UU => UU.width,
              set: (UU, RU) => {
                UU.width = RU
              }
            },
            metadata: gU
          }, BU, VU), (0, tU.i)(null, null, CU, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: UU => "height" in UU,
              get: UU => UU.height,
              set: (UU, RU) => {
                UU.height = RU
              }
            },
            metadata: gU
          }, rU, XU), (0, tU.i)(null, null, hU, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: UU => "renderTargetSamplingMode" in UU,
              get: UU => UU.renderTargetSamplingMode,
              set: (UU, RU) => {
                UU.renderTargetSamplingMode = RU
              }
            },
            metadata: gU
          }, vU, dU), (0, tU.i)(null, null, eU, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: UU => "clearColor" in UU,
              get: UU => UU.clearColor,
              set: (UU, RU) => {
                UU.clearColor = RU
              }
            },
            metadata: gU
          }, HU, SU), (0, tU.i)(null, null, WU, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: UU => "autoClear" in UU,
              get: UU => UU.autoClear,
              set: (UU, RU) => {
                UU.autoClear = RU
              }
            },
            metadata: gU
          }, sU, yU), (0, tU.i)(null, null, fU, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: UU => "forceAutoClearInAlphaMode" in UU,
              get: UU => UU.forceAutoClearInAlphaMode,
              set: (UU, RU) => {
                UU.forceAutoClearInAlphaMode = RU
              }
            },
            metadata: gU
          }, kU, FU), (0, tU.i)(null, null, mU, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: UU => "alphaConstants" in UU,
              get: UU => UU.alphaConstants,
              set: (UU, RU) => {
                UU.alphaConstants = RU
              }
            },
            metadata: gU
          }, iU, AU), (0, tU.i)(null, null, IU, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: UU => "enablePixelPerfectMode" in UU,
              get: UU => UU.enablePixelPerfectMode,
              set: (UU, RU) => {
                UU.enablePixelPerfectMode = RU
              }
            },
            metadata: gU
          }, zU, MU), (0, tU.i)(null, null, JU, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: UU => "forceFullscreenViewport" in UU,
              get: UU => UU.forceFullscreenViewport,
              set: (UU, RU) => {
                UU.forceFullscreenViewport = RU
              }
            },
            metadata: gU
          }, DU, LU), (0, tU.i)(null, null, wU, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: UU => "scaleMode" in UU,
              get: UU => UU.scaleMode,
              set: (UU, RU) => {
                UU.scaleMode = RU
              }
            },
            metadata: gU
          }, NU, lU), (0, tU.i)(null, null, nU, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: UU => "alwaysForcePOT" in UU,
              get: UU => UU.alwaysForcePOT,
              set: (UU, RU) => {
                UU.alwaysForcePOT = RU
              }
            },
            metadata: gU
          }, OU, UR), (0, tU.i)(null, null, bU, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: UU => "_samples" in UU,
              get: UU => UU._samples,
              set: (UU, RU) => {
                UU._samples = RU
              }
            },
            metadata: gU
          }, RR, gR), (0, tU.i)(null, null, oU, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: UU => "adaptScaleToCurrentViewport" in UU,
              get: UU => UU.adaptScaleToCurrentViewport,
              set: (UU, RU) => {
                UU.adaptScaleToCurrentViewport = RU
              }
            },
            metadata: gU
          }, tR, pR), gU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: gU
          })
        })(), UU
      })(),
      hU = !1;

    function QU() {
      hU || (hU = !0, GU.d.prototype.setTextureFromPostProcess = function(UU, RU, gU) {
        let tU = null;
        RU && (RU._forcedOutputTexture ? tU = RU._forcedOutputTexture : RU._textures.data[RU._currentRenderTextureInd] && (tU = RU._textures.data[RU._currentRenderTextureInd])), this._bindTexture(UU, tU?.texture ?? null, gU)
      }, GU.d.prototype.setTextureFromPostProcessOutput = function(UU, RU, gU) {
        this._bindTexture(UU, RU?._outputTexture?.texture ?? null, gU)
      }, TU.d.prototype.setTextureFromPostProcess = function(UU, RU) {
        this._engine.setTextureFromPostProcess(this._samplers[UU], RU, UU)
      }, TU.d.prototype.setTextureFromPostProcessOutput = function(UU, RU) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[UU], RU, UU)
      }, (0, cU.g)("BABYLON.PostProcess", CU))
    }
  },
  41179: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => PU,
      d: () => EU
    });
    var tU = gU(41152),
      pU = gU(36622);
    class EU extends tU.f {
      _gatherImports(UU, RU) {
        UU ? (this._webGPUReady = !0, RU.push(Promise.all([gU.e(363).then((() => gU(60812)))]))) : RU.push(Promise.all([gU.e(364).then((() => gU(60817)))])), super._gatherImports(UU, RU)
      }
      constructor(UU) {
        let RU = arguments.length > 2 ? arguments[2] : void 0;
        const gU = {
          name: UU,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || pU.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: EU.FragmentUrl,
          ...RU
        };
        gU.engine || (gU.engine = pU.c.LastCreatedEngine), super(gU)
      }
    }
    EU.FragmentUrl = "pass";
    class PU extends tU.f {
      _gatherImports(UU, RU) {
        UU ? (this._webGPUReady = !0, RU.push(Promise.all([gU.e(365).then((() => gU(60825)))]))) : RU.push(Promise.all([gU.e(366).then((() => gU(60829)))])), super._gatherImports(UU, RU)
      }
      constructor(UU) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: UU,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || pU.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: PU.FragmentUrl,
          defines: "#define POSITIVEX"
        }), this._face = 0
      }
      get face() {
        return this._face
      }
      set face(UU) {
        if (!(UU < 0 || UU > 5)) switch (this._face = UU, this._face) {
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
    PU.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);