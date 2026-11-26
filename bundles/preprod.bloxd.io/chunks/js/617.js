export const id = 617;
export const ids = [617];
export const modules = {
  44516: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => gU
    });
    var cU = zU(37846),
      yU = zU(37819),
      QU = zU(41557),
      AU = zU(41244),
      FU = zU(41036),
      oU = zU(39493),
      DU = zU(41228),
      EU = zU(41251),
      YU = zU(37827),
      NU = zU(40999),
      IU = zU(41210),
      pU = zU(41293);
    class aU {
      get renderList() {
        return this._renderList
      }
      set renderList(UU) {
        this._renderList !== UU && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), UU && (this._unObserveRenderList = (0, YU.i)(UU, this._renderListHasChanged)), this._renderList = UU)
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
              const XU = this._renderPassIds[UU];
              this._engine._renderPassNames[XU] = `${this._name}#${UU}`
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
      setMaterialForRendering(UU, XU) {
        let zU;
        zU = Array.isArray(UU) ? UU : [UU];
        for (let cU = 0; cU < zU.length; ++cU)
          for (let UU = 0; UU < this.options.numPasses; ++UU) {
            let yU = zU[cU];
            zU[cU].UH && (yU = zU[cU].KyU), yU.setMaterialForRenderPass(this._renderPassIds[UU], void 0 !== XU ? Array.isArray(XU) ? XU[UU] : XU : void 0)
          }
      }
      _freezeActiveMeshes(UU) {
        this._freezeActiveMeshesCancel = (0, NU.h)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, UU)
            for (let UU = 0; UU < this._activeMeshes.length; UU++) this._activeMeshes.data[UU]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((UU, XU) => {
          this._freezeActiveMeshesCancel = null, XU ? (oU.b.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), UU && oU.b.Error(UU)) : (oU.b.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), UU && (oU.b.Error(UU), UU.stack && oU.b.Error(UU.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let UU = 0; UU < this._activeMeshes.length; UU++) this._activeMeshes.data[UU]._unFreeze();
        this._isFrozen = !1
      }
      constructor(UU, XU, zU) {
        this._unObserveRenderList = null, this._renderListHasChanged = (UU, XU) => {
          const zU = this._renderList ? this._renderList.length : 0;
          if (0 === XU && zU > 0 || 0 === zU)
            for (const cU of this._scene.meshes) cU._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new cU.e, this.onAfterRenderObservable = new cU.e, this.onBeforeRenderingManagerRenderObservable = new cU.e, this.onAfterRenderingManagerRenderObservable = new cU.e, this.onInitRenderingObservable = new cU.e, this.onFinishRenderingObservable = new cU.e, this.onFastPathRenderObservable = new cU.e, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new IU.d(256), this._activeBoundingBoxes = new IU.d(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = UU, this._scene = XU, this._engine = this._scene.qp(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...zU
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new EU.e(XU), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const UU of this._scene.lights) UU.getTypeID() === pU.e.LIGHTTYPEID_CLUSTERED_CONTAINER && UU.isSupported && UU._updateBatches(this.activeCamera).render()
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
      _createSceneUBO(UU, XU) {
        const zU = this._scene.qp(),
          cU = new DU.b(zU, void 0, XU, UU, void 0, !1);
        return cU.addUniform("viewProjection", 16), XU && cU.addUniform("viewProjectionR", 16), cU.addUniform("view", 16), cU.addUniform("projection", 16), cU.addUniform("vEyePosition", 4), cU.addUniform("inverseProjection", 16), cU
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const UU = this._engine._currentRenderTarget,
          XU = !(!UU || !UU.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const UU = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${UU} for ${this.name}`, XU)), this._sceneUBOIsMultiview.push(XU)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== XU && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, XU), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = XU);
        const zU = this._sceneUBOs[this._currentSceneUBOIndex++];
        return zU.unbindEffect(), zU
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
      isReadyForRendering(UU, XU) {
        this.prepareRenderList(), this.initRender(UU, XU);
        const zU = this._checkReadiness();
        return this.finishRender(), zU
      }
      prepareRenderList() {
        const UU = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let XU = 0; XU < this._waitingRenderList.length; XU++) {
              const zU = this._waitingRenderList[XU],
                cU = UU.getMeshById(zU);
              cU && this.renderList.push(cU)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const UU = this._scene.meshes;
          for (let XU = 0; XU < UU.length; XU++) {
            const zU = UU[XU];
            this.renderListPredicate(zU) && this.renderList.push(zU)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(UU, XU) {
        const zU = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), zU && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(zU.getViewMatrix(), zU.getProjectionMatrix(!0)), this._scene._activeCamera = zU, this._engine.setViewport(zU.rigParent ? zU.rigParent.viewport : zU.viewport, UU, XU)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const UU = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (UU.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), UU._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== UU.activeCamera && UU.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), UU.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const zU = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[UU], this.onBeforeRenderObservable.notifyObservers(UU);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(UU);
        else {
          const XU = this._prepareRenderingManager(UU),
            zU = this._scene.getOutlineRenderer?.(),
            cU = zU?.enabled;
          zU && (zU.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(UU), this._renderingManager.render(this.customRenderFunction, XU, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(UU), zU && (zU.enabled = cU)
        }
        XU || this.onAfterRenderObservable.notifyObservers(UU), this._engine.currentRenderPassId = zU
      }
      _checkReadiness() {
        const UU = this._scene,
          XU = this._engine.currentRenderPassId;
        let zU = !0;
        UU.getViewMatrix() || UU.updateTransformMatrix();
        const cU = this.options.numPasses;
        for (let yU = 0; yU < cU && zU; yU++) {
          const XU = this.renderList ? this.renderList : UU.frameGraph ? UU.meshes : UU.getActiveMeshes().data,
            QU = this.renderList || UU.frameGraph ? XU.length : UU.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[yU], this.onBeforeRenderObservable.notifyObservers(yU);
          let AU = null,
            FU = QU;
          this.getCustomRenderList && (AU = this.getCustomRenderList(yU, XU, QU), AU && (FU = AU.length)), AU || (AU = XU), this.options.doNotChangeAspectRatio || UU.updateTransformMatrix(!0);
          for (let UU = 0; UU < FU && zU; ++UU) {
            const XU = AU[UU];
            if (!XU.isEnabled() || XU.isBlocked || !XU.isVisible || !XU.uB) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(XU, this.refreshRate, !0)) {
                zU = !1;
                continue
              }
            } else if (!XU.isReady(!0)) {
              zU = !1;
              continue
            }
            let cU = XU._edgesRenderer,
              yU = XU.hasThinInstances;
            if (XU.UH) {
              const UU = XU.KyU;
              UU.edgesShareWithInstances && UU._edgesRenderer?.isEnabled && (cU = UU._edgesRenderer, yU = !0)
            } else XU.jyU && XU.edgesShareWithInstances && (yU = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && cU?.isEnabled && (cU.isReady(yU) || (zU = !1))
          }
          if (this.renderParticles && UU.particlesEnabled) {
            const XU = this.particleSystemList || UU.nB;
            for (const UU of XU) UU.isReady() || (zU = !1)
          }
          if (this.renderSprites && UU.spritesEnabled) {
            const XU = this.spriteManagerList || UU.spriteManagers;
            if (XU)
              for (const cU of XU) UU.activeCamera && 0 === (cU.layerMask & UU.activeCamera.layerMask) || cU.isReady && !cU.isReady() && (zU = !1)
          }
          this.onAfterRenderObservable.notifyObservers(yU), cU > 1 && (UU.incrementRenderId(), UU.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = XU, zU
      }
      _prepareRenderingManager() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const zU = this._scene;
        let cU, yU, QU = null;
        const AU = this.renderList ? this.renderList : zU.frameGraph ? zU.meshes : zU.getActiveMeshes().data,
          FU = this.renderList || zU.frameGraph ? AU.length : zU.getActiveMeshes().length;
        if (this.getCustomRenderList && (QU = this.getCustomRenderList(UU, AU, FU)), QU) cU = QU.length, yU = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !XU && !this._engine.isWebGPU) return AU;
          this._defaultRenderListPrepared = !0, QU = AU, cU = FU, yU = !this.renderList || this.forceLayerMaskCheck
        }
        const oU = zU.activeCamera,
          DU = this.cameraForLOD ?? oU,
          EU = zU.getBoundingBoxRenderer?.();
        if (zU._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && EU) {
            EU.reset();
            for (let UU = 0; UU < this._activeBoundingBoxes.length; UU++) {
              const XU = this._activeBoundingBoxes.data[UU];
              EU.renderList.push(XU)
            }
          }
          return QU
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), EU && EU.reset(), this.renderMeshes) {
          const UU = zU.getRenderId(),
            XU = zU.getFrameId();
          for (let AU = 0; AU < cU; AU++) {
            const cU = QU[AU];
            if (cU && !cU.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(cU, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!cU.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let QU, AU;
              if (DU) {
                const UU = cU._internalAbstractMeshDataInfo._currentLOD.get(DU);
                UU && UU[1] === XU ? QU = UU[0] : (QU = zU.customLODSelector ? zU.customLODSelector(cU, DU) : cU.getLOD(DU), UU ? (UU[0] = QU, UU[1] = XU) : cU._internalAbstractMeshDataInfo._currentLOD.set(DU, [QU, XU]))
              } else QU = cU;
              if (!QU) continue;
              if (QU !== cU && 0 !== QU.billboardMode && QU.computeWorldMatrix(), QU._preActivateForIntermediateRendering(UU), AU = !(!yU || !oU) && 0 === (cU.layerMask & oU.layerMask), cU.isEnabled() && cU.isVisible && cU.uB && !AU) {
                if (this._activeMeshes.push(cU), QU._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, QU !== cU && QU._activate(UU, !0), this.enableBoundingBoxRendering && EU && EU._preActiveMesh(cU), cU._activate(UU, !0) && cU.uB.length) {
                  cU.UH ? cU._internalAbstractMeshDataInfo._actAsRegularMesh && (QU = cU) : QU._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, QU._internalAbstractMeshDataInfo._isActiveIntermediate = !0, zU._prepareSkeleton(QU);
                  for (let UU = 0; UU < QU.uB.length; UU++) {
                    const XU = QU.uB[UU];
                    this.enableBoundingBoxRendering && EU && EU._evaluateSubMesh(cU, XU), this._renderingManager.dispatch(XU, QU)
                  }
                }
                cU._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && EU && XU)
          for (let YU = 0; YU < EU.renderList.length; YU++) {
            const UU = EU.renderList.data[YU];
            this._activeBoundingBoxes.push(UU)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const UU = this.particleSystemList || zU.nB;
          for (let XU = 0; XU < UU.length; XU++) {
            const zU = UU[XU],
              cU = zU.emitter;
            zU.isStarted() && cU && (!cU.position || cU.isEnabled()) && this._renderingManager.dispatchParticles(zU)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return QU
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(UU, XU, zU, cU)
      }
      setRenderingAutoClearDepthStencil(UU, XU) {
        let zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          cU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(UU, XU, zU, cU), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const UU = new aU(this.name, this._scene, this.options);
        return this.renderList && (UU.renderList = this.renderList.slice(0)), UU
      }
      dispose() {
        const UU = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          XU = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let zU = 0; zU < XU; zU++) {
          const XU = UU[zU];
          XU && void 0 !== XU.getMaterialForRenderPass(this.renderPassId) && XU.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const zU of this._sceneUBOs) zU.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === aU.REFRESHRATE_RENDER_ONCE && (this.refreshRate = aU.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    aU.REFRESHRATE_RENDER_ONCE = 0, aU.REFRESHRATE_RENDER_ONEVERYFRAME = 1, aU.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var tU = zU(40989);
    class gU extends QU.e {
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
      setMaterialForRendering(UU, XU) {
        this._objectRenderer.setMaterialForRendering(UU, XU)
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
        const XU = this.nS();
        XU && XU.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(UU, XU, zU) {
        let AU, FU, DU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          EU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          YU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          NU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          IU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : QU.e.TRILINEAR_SAMPLINGMODE,
          pU = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          tU = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          gU = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          kU = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          GU = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          BU = arguments.length > 13 ? arguments[13] : void 0,
          ZU = arguments.length > 14 ? arguments[14] : void 0,
          RU = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          PU = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          WU = !0,
          dU = !1;
        if ("object" === typeof DU) {
          const UU = DU;
          DU = !!UU.generateMipMaps, EU = UU.doNotChangeAspectRatio ?? !0, YU = UU.type ?? 0, NU = !!UU.isCube, IU = UU.samplingMode ?? QU.e.TRILINEAR_SAMPLINGMODE, pU = UU.generateDepthBuffer ?? !0, tU = !!UU.generateStencilBuffer, gU = !!UU.isMulti, kU = UU.format ?? 5, GU = !!UU.delayAllocation, BU = UU.samples, ZU = UU.creationFlags, RU = !!UU.noColorAttachment, PU = !!UU.useSRGBBuffer, AU = UU.colorAttachment, WU = UU.gammaSpace ?? WU, FU = UU.existingObjectRenderer, dU = !!UU.enableClusteredLights
        }
        if (super(null, zU, !DU, void 0, IU, void 0, void 0, void 0, void 0, kU), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new cU.e, this.onAfterUnbindObservable = new cU.e, this.onClearObservable = new cU.e, this.onResizeObservable = new cU.e, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = yU.q.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(zU = this.nS())) return;
        const LU = this.nS().qp();
        this._gammaSpace = WU, this._coordinatesMode = QU.e.PROJECTION_MODE, this.name = UU, this.isRenderTarget = !0, this._initialSizeParameter = XU, this._dontDisposeObjectRenderer = !!FU, this._processSizeParameter(XU), this._objectRenderer = FU ?? new aU(UU, zU, {
          numPasses: NU ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: EU,
          enableClusteredLights: dU
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const UU = this._scene;
          if (!this._disableEngineStages)
            for (const XU of UU._beforeRenderTargetClearStage) XU.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(LU) : this.skipInitialClear || LU.clear(this.clearColor ?? UU.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || UU.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const XU of UU._beforeRenderTargetDrawStage) XU.action(this, this._currentFaceIndex, this._currentLayer);
          LU._debugPushGroup && LU._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (LU._debugPopGroup && LU._debugPopGroup(), !this._disableEngineStages)
            for (const XU of this._scene._afterRenderTargetDrawStage) XU.action(this, this._currentFaceIndex, this._currentLayer);
          const UU = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const XU of this._scene._afterRenderTargetPostProcessStage) XU.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = UU), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), LU) : oU.b.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(LU) : this.skipInitialClear || LU.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = LU.onResizeObservable.add((() => {})), this._generateMipMaps = !!DU, this._doNotChangeAspectRatio = EU, gU || (this._renderTargetOptions = {
          generateMipMaps: DU,
          type: YU,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: pU,
          generateStencilBuffer: tU,
          samples: BU,
          creationFlags: ZU,
          noColorAttachment: RU,
          useSRGBBuffer: PU,
          colorAttachment: AU,
          label: this.name
        }, this.samplingMode === QU.e.NEAREST_SAMPLINGMODE && (this.wrapU = QU.e.CLAMP_ADDRESSMODE, this.wrapV = QU.e.CLAMP_ADDRESSMODE), GU || (NU ? (this._renderTarget = zU.qp().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = QU.e.INVCUBIC_MODE, this._textureMatrix = yU.e.Identity()) : this._renderTarget = zU.qp().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== BU && (this.samples = BU)))
      }
      createDepthStencilTexture() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          QU = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(UU, XU, zU, cU, yU, QU)
      }
      _processSizeParameter(UU) {
        if (UU.ratio) {
          this._sizeRatio = UU.ratio;
          const XU = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(XU.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(XU.getRenderHeight(), this._sizeRatio)
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
          const UU = this.nS();
          if (!UU) return;
          this._postProcessManager = new AU.e(UU), this._postProcesses = new Array
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
        const XU = this._postProcesses.indexOf(UU); - 1 !== XU && (this._postProcesses.splice(XU, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
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
        const XU = this._size.depth;
        return XU || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(UU) {
        const XU = Math.max(1, this.getRenderSize() * UU);
        this.resize(XU)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(UU) {
        const XU = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const zU = this.nS();
        zU && (this._processSizeParameter(UU), this._renderTarget = XU ? zU.qp().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : zU.qp().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(UU, XU)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => zU(44529))).then((UU => this._dumpTools = UU))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const UU = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), UU
      }
      _render() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const zU = this.nS();
        if (!zU) return;
        void 0 !== this.useCameraPostProcesses && (UU = this.useCameraPostProcesses);
        const cU = zU.qp();
        if (cU._debugPushGroup && cU._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let yU = 0; yU < 6; yU++) this._renderToTarget(yU, UU, XU), zU.incrementRenderId(), zU.resetCachedMaterial();
          else this._renderToTarget(0, UU, XU);
        else
          for (let yU = 0; yU < this.getRenderLayers(); yU++) this._renderToTarget(0, UU, XU, yU), zU.incrementRenderId(), zU.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), cU._debugPopGroup && cU._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(UU, XU) {
        const zU = UU * XU,
          cU = (0, FU.q)(zU + 16384 / (128 + zU));
        return Math.min((0, FU.e)(UU), cU)
      }
      _bindFrameBuffer() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const zU = this.nS();
        if (!zU) return;
        const cU = zU.qp();
        this._renderTarget && cU.bindFramebuffer(this._renderTarget, this.isCube ? UU : void 0, void 0, void 0, this.ignoreCameraViewport, 0, XU)
      }
      _unbindFrameBuffer(UU, XU) {
        this._renderTarget && UU.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(XU)
        }))
      }
      _prepareFrame(UU, XU, zU, cU) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(XU, zU) : cU && UU.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(XU, zU)
      }
      _renderToTarget(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const yU = this.nS();
        if (!yU) return;
        const QU = yU.qp();
        this._currentFaceIndex = UU, this._currentLayer = cU, this._currentUseCameraPostProcess = XU, this._currentDumpForDebug = zU, this._prepareFrame(yU, UU, cU, XU), this._objectRenderer.render(UU + cU, !0), this._unbindFrameBuffer(QU, UU), this._texture && this.isCube && 5 === UU && QU.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(UU, XU, zU, cU)
      }
      setRenderingAutoClearDepthStencil(UU, XU) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(UU, XU)
      }
      clone() {
        const UU = this.getSize(),
          XU = new gU(this.name, UU, this.nS(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return XU.hasAlpha = this.hasAlpha, XU.level = this.level, XU.coordinatesMode = this.coordinatesMode, this.renderList && (XU.renderList = this.renderList.slice(0)), XU
      }
      serialize() {
        if (!this.name) return null;
        const UU = super.serialize();
        if (UU.renderTargetSize = this.getRenderSize(), UU.renderList = [], this.renderList)
          for (let XU = 0; XU < this.renderList.length; XU++) UU.renderList.push(this.renderList[XU].id);
        return UU
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.nS().qp().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const UU = this.nS();
        if (!UU) return;
        let XU = UU.customRenderTargets.indexOf(this);
        XU >= 0 && UU.customRenderTargets.splice(XU, 1);
        for (const zU of UU.cameras) XU = zU.customRenderTargets.indexOf(this), XU >= 0 && zU.customRenderTargets.splice(XU, 1);
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
    gU.REFRESHRATE_RENDER_ONCE = aU.REFRESHRATE_RENDER_ONCE, gU.REFRESHRATE_RENDER_ONEVERYFRAME = aU.REFRESHRATE_RENDER_ONEVERYFRAME, gU.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = aU.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(gU.prototype, "noPrePassRenderer") || Object.defineProperty(gU.prototype, "noPrePassRenderer", (0, tU.i)("RenderTargetTexture", "noPrePassRenderer"))
  },
  44501: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => DU,
      g: () => EU
    });
    var cU = zU(41237),
      yU = zU(38845),
      QU = zU(37846),
      AU = zU(40954),
      FU = zU(41395);
    const oU = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class DU {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oU;
        this._fullscreenViewport = new yU.d(0, 0, 1, 1);
        const zU = XU.positions ?? oU.positions,
          QU = XU.indices ?? oU.indices;
        this.engine = UU, this._vertexBuffers = {
          [cU.h.PositionKind]: new cU.h(UU, zU, cU.h.PositionKind, !1, !1, 2)
        }, this._indexBuffer = UU.createIndexBuffer(QU), this._indexBufferLength = QU.length, this._onContextRestoredObserver = UU.wp.add((() => {
          this._indexBuffer = UU.createIndexBuffer(QU);
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
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = XU, this.engine.stencilState.stencilTest = zU, this.engine.enableEffect(UU.drawWrapper), this.bindBuffers(UU.effect), UU.onApplyObservable.notifyObservers({})
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
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!UU.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const zU = null === XU ? null : this._isRenderTargetTexture(XU) ? XU.renderTarget : XU;
        zU && this.engine.bindFramebuffer(zU), this.applyEffectWrapper(UU), this.draw(), zU && this.engine.unBindFramebuffer(zU), this.restoreStates()
      }
      dispose() {
        const UU = this._vertexBuffers[cU.h.PositionKind];
        UU && (UU.dispose(), delete this._vertexBuffers[cU.h.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.wp.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class EU {
      static RegisterShaderCodeProcessing(UU, XU) {
        XU ? EU._CustomShaderCodeProcessing[UU ?? ""] = XU : delete EU._CustomShaderCodeProcessing[UU ?? ""]
      }
      static _GetShaderCodeProcessing(UU) {
        return EU._CustomShaderCodeProcessing[UU] ?? EU._CustomShaderCodeProcessing[""]
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
        this.alphaMode = 0, this.onEffectCreatedObservable = new QU.e(void 0, !0), this.onApplyObservable = new QU.e, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
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
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.wp.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new FU.c(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const XU = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, XU, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cU = arguments.length > 2 ? arguments[2] : void 0,
          yU = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, yU && this._importPromises.push(...yU);
        const QU = this.options.engine.isWebGPU && !EU.ForceGLSL;
        this._gatherImports(QU, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(QU && this._webGPUReady ? zU.e(669).then((() => zU(64066))) : zU.e(659).then((() => zU(63962)))), void 0 !== cU && cU(QU, this._importPromises), QU && this._webGPUReady && (this.options.shaderLanguage = 1), UU || this.updateEffect(XU)
      }
      updateEffect() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          cU = arguments.length > 3 ? arguments[3] : void 0,
          yU = arguments.length > 4 ? arguments[4] : void 0,
          QU = arguments.length > 5 ? arguments[5] : void 0,
          FU = arguments.length > 6 ? arguments[6] : void 0,
          oU = arguments.length > 7 ? arguments[7] : void 0;
        const DU = EU._GetShaderCodeProcessing(this.name);
        if (DU?.defineCustomBindings) {
          const cU = XU?.slice() ?? [];
          cU.push(...this.options.uniforms);
          const yU = zU?.slice() ?? [];
          yU.push(...this.options.samplers), UU = DU.defineCustomBindings(this.name, UU, cU, yU), XU = cU, zU = yU
        }
        this.options.defines = UU || "";
        const YU = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let NU;
        NU = this.options.extraInitializationsAsync ? async () => {
          await (YU?.()), await this.options.extraInitializationsAsync()
        }: YU, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: FU ?? this._shaderPath.vertex,
          fragment: oU ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: XU || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: zU || this.options.samplers,
          defines: null !== UU ? UU : "",
          fallbacks: null,
          onCompiled: yU ?? this.options.onCompiled,
          onError: QU ?? null,
          indexParameters: cU || this.options.indexParameters,
          processCodeAfterIncludes: DU?.processCodeAfterIncludes ? (UU, XU) => DU.processCodeAfterIncludes(this.name, UU, XU) : null,
          processFinalCode: DU?.processFinalCode ? (UU, XU) => DU.processFinalCode(this.name, UU, XU) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: NU
        }, this.options.engine) : this._drawWrapper.effect = new AU.b(this._shaderPath, this.options.attributeNames, XU || this.options.uniforms, zU || this.options.samplerNames, this.options.engine, UU, void 0, yU || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, NU), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !UU && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), EU._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.qp().wp.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    EU.ForceGLSL = !1, EU._CustomShaderCodeProcessing = {}
  },
  44529: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      Dispose: () => kU,
      DumpData: () => gU,
      DumpDataAsync: () => tU,
      DumpFramebuffer: () => aU,
      DumpTools: () => GU,
      EncodeImageAsync: () => pU,
      RegisterDumpTools: () => ZU
    });
    var cU = zU(41113),
      yU = zU(44501),
      QU = zU(41205),
      AU = zU(37855),
      FU = zU(37841),
      oU = zU(39493),
      DU = zU(41171),
      EU = zU(41121);
    let YU = null;
    async function NU() {
      return YU || (YU = async function() {
        const UU = FU.b.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        UU instanceof OffscreenCanvas && oU.b.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: XU
        } = await Promise.resolve().then((() => zU(40948)));
        if (!XU.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const cU = new XU(UU, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        FU.b.Instances.pop(), FU.b.OnEnginesDisposedObservable.add((UU => {
          cU && UU !== cU && !cU.oR && 0 === FU.b.Instances.length && kU()
        })), cU.getCaps().parallelShaderCompile = void 0;
        const QU = new yU.e(cU),
          {
            passPixelShader: AU
          } = await zU.e(677).then((() => zU(64115))),
          DU = new yU.g({
            engine: cU,
            name: AU.name,
            fragmentShader: AU.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: UU,
          dumpEngine: {
            engine: cU,
            renderer: QU,
            wrapper: DU
          }
        }
      }()), await YU
    }
    let IU = (() => {
      var UU;
      let XU, zU = [];
      return UU = class {
        static async EncodeImageAsync(UU, XU, zU, cU, yU, AU) {
          const FU = await NU(),
            oU = FU.dumpEngine;
          oU.engine.setSize(XU, zU, !0);
          const DU = oU.engine.createRawTexture(UU, XU, zU, 5, !1, !yU, 1);
          return oU.renderer.setViewport(), oU.renderer.applyEffectWrapper(oU.wrapper), oU.wrapper.effect._bindTexture("textureSampler", DU), oU.renderer.draw(), DU.dispose(), await new Promise(((UU, XU) => {
            QU.j.ToBlob(FU.canvas, (zU => {
              zU ? UU(zU) : XU(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), cU, AU)
          }))
        }
      }, (() => {
        const yU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        XU = [EU.e], (0, cU.j)(UU, null, XU, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: UU => "EncodeImageAsync" in UU,
            get: UU => UU.EncodeImageAsync
          },
          metadata: yU
        }, null, zU), yU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: yU
        }), (0, cU.n)(UU, zU)
      })(), UU
    })();
    const pU = IU.EncodeImageAsync;
    async function aU(UU, XU, zU, cU) {
      let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        QU = arguments.length > 5 ? arguments[5] : void 0,
        AU = arguments.length > 6 ? arguments[6] : void 0;
      const FU = await zU.readPixels(0, 0, UU, XU);
      gU(UU, XU, new Uint8Array(FU.buffer), cU, yU, QU, !0, void 0, AU)
    }
    async function tU(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        yU = arguments.length > 4 ? arguments[4] : void 0,
        FU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        EU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        YU = arguments.length > 7 ? arguments[7] : void 0;
      if (zU instanceof Float32Array) {
        const UU = new Uint8Array(zU.length);
        let XU = zU.length;
        for (; XU--;) {
          const cU = zU[XU];
          UU[XU] = Math.round(255 * (0, AU.Clamp)(cU))
        }
        zU = UU
      }
      const NU = await IU.EncodeImageAsync(zU, UU, XU, cU, FU, YU);
      void 0 !== yU && QU.j.DownloadBlob(NU, yU), NU.type !== cU && oU.b.Warn(`DumpData: The requested mimeType '${cU}' is not supported. The result has mimeType '${NU.type}' instead.`);
      const pU = await NU.arrayBuffer();
      return EU ? pU : `data:${cU};base64,${(0,DU.f)(pU)}`
    }

    function gU(UU, XU, zU, cU) {
      let yU = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== yU || cU || (yU = ""), tU(UU, XU, zU, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", yU, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((UU => {
        cU && cU(UU)
      }))
    }

    function kU() {
      YU && (YU?.then((UU => {
        UU.canvas instanceof HTMLCanvasElement && UU.canvas.remove(), UU.dumpEngine && (UU.dumpEngine.engine.dispose(), UU.dumpEngine.renderer.dispose(), UU.dumpEngine.wrapper.dispose())
      })), YU = null)
    }
    const GU = {
      DumpData: gU,
      DumpDataAsync: tU,
      DumpFramebuffer: aU,
      Dispose: kU
    };
    let BU = !1;

    function ZU() {
      if (BU) return;
      BU = !0;
      QU.j.DumpData = gU, QU.j.DumpDataAsync = tU, QU.j.DumpFramebuffer = aU
    }
  },
  44509: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => IU,
      f: () => pU,
      h: () => aU
    });
    var cU = zU(41557),
      yU = zU(44516),
      QU = zU(41113),
      AU = zU(44492),
      FU = zU(41134),
      oU = zU(44524),
      DU = zU(41121);
    class EU extends AU.c {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(UU, XU) {
        let zU = arguments.length > 4 ? arguments[4] : void 0;
        const cU = {
          size: "number" === typeof XU ? XU : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: zU,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...XU
        };
        super(UU, oU.f.FragmentUrl, {
          effectWrapper: "number" !== typeof XU && XU.effectWrapper ? void 0 : new oU.f(UU, zU, cU),
          ...cU
        })
      }
      static _Parse(UU, XU, zU, cU) {
        return FU.b.Parse((() => new EU(UU.name, UU.options, XU, UU.renderTargetSamplingMode, UU._engine, UU.reusable)), UU, zU, cU)
      }
    }(() => {
      var UU;
      let XU, zU = AU.c,
        cU = [];
      UU = class extends zU {
        get face() {
          return this._effectWrapper.face
        }
        set face(UU) {
          this._effectWrapper.face = UU
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(UU, XU) {
          let zU = arguments.length > 4 ? arguments[4] : void 0;
          const yU = {
            size: "number" === typeof XU ? XU : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: zU,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...XU
          };
          super(UU, oU.f.FragmentUrl, {
            effectWrapper: "number" !== typeof XU && XU.effectWrapper ? void 0 : new oU.d(UU, zU, yU),
            ...yU
          }), (0, QU.n)(this, cU)
        }
        static _Parse(XU, zU, cU, yU) {
          return FU.b.Parse((() => new UU(XU.name, XU.options, zU, XU.renderTargetSamplingMode, XU._engine, XU.reusable)), XU, cU, yU)
        }
      }, (() => {
        const yU = "function" === typeof Symbol && Symbol.metadata ? Object.create(zU[Symbol.metadata] ?? null) : void 0;
        XU = [(0, DU.I)()], (0, QU.j)(UU, null, XU, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: UU => "face" in UU,
            get: UU => UU.face
          },
          metadata: yU
        }, null, cU), yU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: yU
        })
      })()
    })();
    var YU = zU(37855),
      NU = zU(41179);

    function IU(UU, XU, zU, cU, yU, QU, FU, oU) {
      const DU = XU.qp();
      return XU.isReady = !1, yU = yU ?? XU.samplingMode, cU = cU ?? XU.type, QU = QU ?? XU.format, FU = FU ?? XU.width, oU = oU ?? XU.height, -1 === cU && (cU = 0), new Promise((EU => {
        const YU = new AU.c("postprocess", UU, null, null, 1, null, yU, DU, !1, void 0, cU, void 0, null, !1, QU);
        YU.externalTextureSamplerBinding = !0;
        const NU = DU.createRenderTargetTexture({
          width: FU,
          height: oU
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: yU,
          type: cU,
          format: QU
        });
        YU.onEffectCreatedObservable.addOnce((UU => {
          UU.executeWhenCompiled((() => {
            YU.onApply = UU => {
              UU._bindTexture("textureSampler", XU), UU.setFloat2("scale", 1, 1)
            }, zU.postProcessManager.directRender([YU], NU, !0), DU.restoreDefaultFramebuffer(), DU._releaseTexture(XU), YU && YU.dispose(), NU._swapAndDie(XU), XU.type = cU, XU.format = 5, XU.isReady = !0, EU(XU)
          }))
        }))
      }))
    }
    async function pU(UU, XU, QU) {
      let FU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        oU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        DU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        EU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(UU) {
        if (UU.isReady()) return;
        if (UU.loadingError) throw new Error(UU.errorObject?.message || `Texture ${UU.name} errored while loading.`);
        const XU = UU.onLoadObservable;
        if (XU) return await new Promise((UU => XU.addOnce((() => UU()))));
        const zU = UU._texture?.onLoadedObservable;
        if (zU) return await new Promise((UU => zU.addOnce((() => UU()))));
        throw new Error(`Cannot determine readiness of texture ${UU.name}.`)
      }(UU);
      const NU = UU.getInternalTexture(),
        IU = UU.is3D || !!NU?.is3D,
        {
          width: pU,
          height: aU
        } = UU.getSize(),
        tU = XU ?? pU,
        gU = QU ?? aU;
      if (DU || IU || function(UU) {
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
        }(UU.textureFormat) || tU !== pU || gU !== aU) {
        if (UU.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${DU?"RTT":"compression"} is not supported.`);
        return await async function(UU, XU, QU, FU, oU) {
          let DU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const EU = UU.nS(),
            YU = EU.qp(),
            NU = UU.getInternalTexture(),
            IU = UU.is3D || !!NU?.is3D;
          let pU;
          if (YU.isWebGPU ? IU ? await zU.e(673).then((() => zU(64092))) : UU.isCube ? await zU.e(674).then((() => zU(64097))) : await zU.e(675).then((() => zU(64104))) : IU ? await zU.e(670).then((() => zU(64085))) : UU.isCube ? await zU.e(671).then((() => zU(64088))) : await zU.e(672).then((() => zU(64090))), IU) pU = new AU.c("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: cU.e.NEAREST_NEAREST_MIPNEAREST,
            engine: YU,
            shaderLanguage: YU.isWebGPU ? 1 : 0
          });
          else if (UU.isCube) {
            const UU = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            pU = new AU.c("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: cU.e.NEAREST_NEAREST_MIPNEAREST,
              engine: YU,
              defines: UU[FU],
              shaderLanguage: YU.isWebGPU ? 1 : 0
            })
          } else pU = new AU.c("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: cU.e.NEAREST_NEAREST_MIPNEAREST,
            engine: YU,
            shaderLanguage: YU.isWebGPU ? 1 : 0
          });
          await new Promise((UU => {
            pU.onEffectCreatedObservable.addOnce((XU => {
              XU.executeWhenCompiled((() => {
                UU(0)
              }))
            }))
          }));
          const aU = new yU.e("temp", {
            width: XU,
            height: QU
          }, EU, !1);
          pU.onApply = function(XU) {
            XU.setTexture("textureSampler", UU), XU.setFloat("lod", oU), XU.setInt("gamma", UU.gammaSpace ? 1 : 0), IU && XU.setFloat("slice", DU)
          };
          try {
            if (aU.renderTarget && NU) {
              const zU = NU.samplingMode;
              0 !== oU ? UU.updateSamplingMode(cU.e.NEAREST_NEAREST_MIPNEAREST) : UU.updateSamplingMode(cU.e.NEAREST_NEAREST), EU.postProcessManager.directRender([pU], aU.renderTarget, !0), UU.updateSamplingMode(zU);
              const yU = await YU.readPixels(0, 0, XU, QU),
                AU = new Uint8Array(yU.buffer, yU.byteOffset, yU.byteLength);
              return YU.unBindFramebuffer(aU.renderTarget), AU
            }
            throw Error("Render to texture failed.")
          } finally {
            aU.dispose(), pU.dispose()
          }
        }(UU, tU, gU, FU, oU, EU)
      }
      let kU = await UU.readPixels(FU, oU);
      if (!kU) throw new Error(`Failed to read pixels from texture ${UU.name}.`);
      if (kU instanceof Float32Array) {
        const UU = new Uint8Array(kU.length);
        let XU = kU.length;
        for (; XU--;) {
          const zU = kU[XU];
          UU[XU] = Math.round(255 * (0, YU.Clamp)(zU))
        }
        kU = UU
      }
      const GU = tU * gU,
        BU = 4 * GU;
      if (kU.length !== BU) {
        const UU = 0 === GU ? 0 : kU.length / GU;
        if (1 === UU || 2 === UU || 3 === UU) {
          const XU = new Uint8Array(BU);
          for (let zU = 0, cU = 0, yU = 0; zU < GU; zU++, yU += 4) {
            const zU = kU[cU++];
            if (1 === UU) {
              XU[yU] = zU, XU[yU + 1] = zU, XU[yU + 2] = zU, XU[yU + 3] = 255;
              continue
            }
            const QU = kU[cU++];
            2 !== UU ? (XU[yU] = zU, XU[yU + 1] = QU, XU[yU + 2] = kU[cU++], XU[yU + 3] = 255) : (XU[yU] = zU, XU[yU + 1] = QU, XU[yU + 2] = 0, XU[yU + 3] = 255)
          }
          return XU
        }
      }
      return kU
    }
    const aU = {
      CreateResizedCopy: function(UU, XU, zU) {
        let QU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const AU = UU.nS(),
          FU = AU.qp(),
          oU = new yU.e("resized" + UU.name, {
            width: XU,
            height: zU
          }, AU, !UU.noMipmap, !0, UU._texture.type, !1, UU.samplingMode, !1);
        oU.wrapU = UU.wrapU, oU.wrapV = UU.wrapV, oU.uOffset = UU.uOffset, oU.vOffset = UU.vOffset, oU.uScale = UU.uScale, oU.vScale = UU.vScale, oU.uAng = UU.uAng, oU.vAng = UU.vAng, oU.wAng = UU.wAng, oU.coordinatesIndex = UU.coordinatesIndex, oU.level = UU.level, oU.anisotropicFilteringLevel = UU.anisotropicFilteringLevel, oU._texture.isReady = !1, UU.wrapU = cU.e.CLAMP_ADDRESSMODE, UU.wrapV = cU.e.CLAMP_ADDRESSMODE;
        const DU = new EU("pass", 1, null, QU ? cU.e.BILINEAR_SAMPLINGMODE : cU.e.NEAREST_SAMPLINGMODE, FU, !1, 0);
        return DU.externalTextureSamplerBinding = !0, DU.onEffectCreatedObservable.addOnce((XU => {
          XU.executeWhenCompiled((() => {
            DU.onApply = function(XU) {
              XU.setTexture("textureSampler", UU)
            };
            const XU = oU.renderTarget;
            XU && (AU.postProcessManager.directRender([DU], XU), FU.unBindFramebuffer(XU), oU.disposeFramebufferObjects(), DU.dispose(), oU.getInternalTexture().isReady = !0)
          }))
        })), oU
      },
      ApplyPostProcess: IU,
      ToHalfFloat: NU.h,
      FromHalfFloat: NU.e,
      GetTextureDataAsync: pU
    }
  },
  44492: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => pU
    });
    var cU = zU(41113),
      yU = zU(41210),
      QU = zU(37846),
      AU = zU(37819),
      FU = zU(40954),
      oU = zU(41121),
      DU = zU(41134),
      EU = zU(37863),
      YU = zU(41003),
      NU = zU(41036),
      IU = zU(44501);
    let pU = (() => {
        var UU;
        let XU, FU, YU, pU, aU, gU, kU, GU, BU, ZU, RU, PU, WU, dU, LU, eU, CU = [],
          wU = [],
          qU = [],
          OU = [],
          SU = [],
          rU = [],
          uU = [],
          fU = [],
          iU = [],
          HU = [],
          MU = [],
          vU = [],
          VU = [],
          sU = [],
          nU = [],
          mU = [],
          lU = [],
          xU = [],
          JU = [],
          jU = [],
          KU = [],
          bU = [],
          TU = [],
          hU = [],
          UX = [],
          XX = [],
          zX = [],
          cX = [],
          yX = [];
        return UU = class {
          static get ForceGLSL() {
            return IU.g.ForceGLSL
          }
          static set ForceGLSL(UU) {
            IU.g.ForceGLSL = UU
          }
          static RegisterShaderCodeProcessing(UU, XU) {
            IU.g.RegisterShaderCodeProcessing(UU, XU)
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
            return this.m_
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.sUU(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(XU, zU, FU, oU, DU, EU) {
            let YU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              NU = arguments.length > 7 ? arguments[7] : void 0,
              pU = arguments.length > 8 ? arguments[8] : void 0,
              aU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              gU = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              kU = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              GU = arguments.length > 12 ? arguments[12] : void 0,
              BU = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              ZU = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              RU = arguments.length > 15 ? arguments[15] : void 0,
              PU = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, cU.n)(this, CU), null), this.uniqueId = (0, cU.n)(this, wU, void 0), this.width = ((0, cU.n)(this, qU), (0, cU.n)(this, OU, -1)), this.height = ((0, cU.n)(this, SU), (0, cU.n)(this, rU, -1)), this.nodeMaterialSource = ((0, cU.n)(this, uU), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, cU.n)(this, fU, void 0), this.clearColor = ((0, cU.n)(this, iU), (0, cU.n)(this, HU, void 0)), this.autoClear = ((0, cU.n)(this, MU), (0, cU.n)(this, vU, !0)), this.forceAutoClearInAlphaMode = ((0, cU.n)(this, VU), (0, cU.n)(this, sU, !1)), this.alphaConstants = ((0, cU.n)(this, nU), (0, cU.n)(this, mU, void 0)), this.animations = ((0, cU.n)(this, lU), []), this.enablePixelPerfectMode = (0, cU.n)(this, xU, !1), this.forceFullscreenViewport = ((0, cU.n)(this, JU), (0, cU.n)(this, jU, !0)), this.inspectableCustomProperties = (0, cU.n)(this, KU), this.scaleMode = (0, cU.n)(this, bU, 1), this.alwaysForcePOT = ((0, cU.n)(this, TU), (0, cU.n)(this, hU, !1)), this._samples = ((0, cU.n)(this, UX), (0, cU.n)(this, XX, 1)), this.adaptScaleToCurrentViewport = ((0, cU.n)(this, zX), (0, cU.n)(this, cX, !1)), this.doNotSerialize = ((0, cU.n)(this, yX), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new yU.d(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new AU.m(1, 1), this._texelSize = AU.m.Zero(), this.onActivateObservable = new QU.e, this.onSizeChangedObservable = new QU.e, this.onApplyObservable = new QU.e, this.onBeforeRenderObservable = new QU.e, this.onAfterRenderObservable = new QU.e, this.bS = new QU.e, tU();
            let WU, dU = 1,
              LU = null;
            if (FU && !Array.isArray(FU)) {
              const UU = FU;
              FU = UU.uniforms ?? null, oU = UU.samplers ?? null, dU = UU.size ?? 1, EU = UU.camera ?? null, YU = UU.samplingMode ?? 1, NU = UU.engine, pU = UU.reusable, aU = Array.isArray(UU.defines) ? UU.defines.join("\n") : UU.defines ?? null, gU = UU.textureType ?? 0, kU = UU.vertexUrl ?? "postprocess", GU = UU.indexParameters, BU = UU.blockCompilation ?? !1, ZU = UU.textureFormat ?? 5, RU = UU.shaderLanguage ?? 0, LU = UU.uniformBuffers ?? null, PU = UU.extraInitializations, WU = UU.effectWrapper
            } else DU && (dU = "number" === typeof DU ? DU : {
              width: DU.width,
              height: DU.height
            });
            if (this._useExistingThinPostProcess = !!WU, this._effectWrapper = WU ?? new IU.g({
                name: XU,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: zU,
                engine: NU || EU?.nS().qp(),
                uniforms: FU,
                samplers: oU,
                uniformBuffers: LU,
                defines: aU,
                vertexUrl: kU,
                indexParameters: GU,
                blockCompilation: !0,
                shaderLanguage: RU,
                extraInitializations: void 0
              }), this.name = XU, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != EU ? (this.m_ = EU, this._scene = EU.nS(), EU.attachPostProcess(this), this._engine = this._scene.qp(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : NU && (this._engine = NU, this._engine.postProcesses.push(this)), this._options = dU, this.renderTargetSamplingMode = YU || 1, this._reusable = pU || !1, this._textureType = gU, this._textureFormat = ZU, this._shaderLanguage = RU || 0, this._samplers = oU || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = zU, this._vertexUrl = kU, this._parameters = FU || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = LU || [], this._indexParameters = GU, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const XU = [];
              this._gatherImports(this._engine.isWebGPU && !UU.ForceGLSL, XU), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(BU, aU, PU, XU)
            }
          }
          _gatherImports() {
            let UU = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? UU.push(Promise.all([zU.e(669).then((() => zU(64066)))])) : UU.push(Promise.all([zU.e(659).then((() => zU(63962)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          qp() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(UU) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = UU, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new yU.d(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              cU = arguments.length > 3 ? arguments[3] : void 0,
              yU = arguments.length > 4 ? arguments[4] : void 0,
              QU = arguments.length > 5 ? arguments[5] : void 0,
              AU = arguments.length > 6 ? arguments[6] : void 0,
              FU = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(UU, XU, zU, cU, yU, QU, AU, FU), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(UU, XU) {
            let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let yU = 0; yU < this._textureCache.length; yU++)
              if (this._textureCache[yU].texture.width === UU.width && this._textureCache[yU].texture.height === UU.height && this._textureCache[yU].postProcessChannel === zU && this._textureCache[yU].texture._generateDepthBuffer === XU.generateDepthBuffer && this._textureCache[yU].texture.samples === XU.samples) return this._textureCache[yU].texture;
            const cU = this._engine.createRenderTargetTexture(UU, XU);
            return this._textureCache.push({
              texture: cU,
              postProcessChannel: zU,
              lastUsedRenderId: -1
            }), cU
          }
          _flushTextureCache() {
            const UU = this._renderId;
            for (let XU = this._textureCache.length - 1; XU >= 0; XU--)
              if (UU - this._textureCache[XU].lastUsedRenderId > 100) {
                let UU = !1;
                for (let zU = 0; zU < this._textures.length; zU++)
                  if (this._textures.data[zU] === this._textureCache[XU].texture) {
                    UU = !0;
                    break
                  } UU || (this._textureCache[XU].texture.dispose(), this._textureCache.splice(XU, 1))
              }
          }
          resize(UU, XU) {
            let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              yU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = UU, this.height = XU;
            let QU = null;
            if (zU)
              for (let oU = 0; oU < zU._postProcesses.length; oU++)
                if (null !== zU._postProcesses[oU]) {
                  QU = zU._postProcesses[oU];
                  break
                } const AU = {
                width: this.width,
                height: this.height
              },
              FU = {
                generateMipMaps: cU,
                generateDepthBuffer: yU || QU === this,
                generateStencilBuffer: (yU || QU === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(AU, FU, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(AU, FU, 1)), this._texelSize.sUU(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let UU;
            if (this._shareOutputWithPostProcess) UU = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) UU = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let XU;
              UU = this.inputTexture;
              for (let zU = 0; zU < this._textureCache.length; zU++)
                if (this._textureCache[zU].texture === UU) {
                  XU = this._textureCache[zU];
                  break
                } XU && (XU.lastUsedRenderId = this._renderId)
            }
            return UU
          }
          activate(UU) {
            let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              zU = arguments.length > 2 ? arguments[2] : void 0;
            const cU = null === UU || void 0 !== UU.cameraRigMode ? UU || this.m_ : null,
              yU = cU?.nS() ?? UU,
              QU = yU.qp(),
              AU = QU.getCaps().maxTextureSize,
              FU = (XU ? XU.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              oU = (XU ? XU.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let DU = this._options.width || FU,
              EU = this._options.height || oU;
            const YU = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let IU = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const UU = QU.currentViewport;
                UU && (DU *= UU.width, EU *= UU.height)
              }(YU || this.alwaysForcePOT) && (this._options.width || (DU = QU.needPOTTextures ? (0, NU.g)(DU, AU, this.scaleMode) : DU), this._options.height || (EU = QU.needPOTTextures ? (0, NU.g)(EU, AU, this.scaleMode) : EU)), this.width === DU && this.height === EU && (IU = this._getTarget()) || this.resize(DU, EU, cU, YU, zU), this._textures.forEach((UU => {
                UU.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(UU, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return IU || (IU = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.sUU(FU / DU, oU / EU), this._engine.bindFramebuffer(IU, 0, FU, oU, this.forceFullscreenViewport)) : (this._scaleRatio.sUU(1, 1), this._engine.bindFramebuffer(IU, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(cU), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : yU.clearColor, yU._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), IU
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
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.qp().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), UU = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", UU?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
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
            let XU;
            if (UU = UU || this.m_, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (XU = this._parentContainer.postProcesses.indexOf(this), XU > -1 && this._parentContainer.postProcesses.splice(XU, 1), this._parentContainer = null), XU = this._engine.postProcesses.indexOf(this), -1 !== XU && this._engine.postProcesses.splice(XU, 1), this.bS.notifyObservers(), UU) {
              if (UU.detachPostProcess(this), XU = UU._postProcesses.indexOf(this), 0 === XU && UU._postProcesses.length > 0) {
                const UU = this.m_._getFirstPostProcess();
                UU && UU.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const UU = DU.b.Serialize(this),
              XU = this.getCamera() || this._scene && this._scene.activeCamera;
            return UU.customType = "BABYLON." + this.getClassName(), UU.cameraId = XU ? XU.id : null, UU.reusable = this._reusable, UU.textureType = this._textureType, UU.fragmentUrl = this._fragmentUrl, UU.parameters = this._parameters, UU.samplers = this._samplers, UU.uniformBuffers = this._uniformBuffers, UU.options = this._options, UU.defines = this._postProcessDefines, UU.textureFormat = this._textureFormat, UU.vertexUrl = this._vertexUrl, UU.indexParameters = this._indexParameters, UU
          }
          clone() {
            const XU = this.serialize();
            XU._engine = this._engine, XU.cameraId = null;
            const zU = UU.Parse(XU, this._scene, "");
            return zU ? (zU.onActivateObservable = this.onActivateObservable.clone(), zU.onSizeChangedObservable = this.onSizeChangedObservable.clone(), zU.onApplyObservable = this.onApplyObservable.clone(), zU.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), zU.onAfterRenderObservable = this.onAfterRenderObservable.clone(), zU._prePassEffectConfiguration = this._prePassEffectConfiguration, zU) : null
          }
          static Parse(UU, XU, zU) {
            const cU = (0, EU.e)(UU.customType);
            if (!cU || !cU._Parse) return null;
            const yU = XU ? XU.getCameraById(UU.cameraId) : null;
            return cU._Parse(UU, yU, XU, zU)
          }
          static _Parse(XU, zU, cU, yU) {
            return DU.b.Parse((() => new UU(XU.name, XU.fragmentUrl, XU.parameters, XU.samplers, XU.options, zU, XU.renderTargetSamplingMode, XU._engine, XU.reusable, XU.defines, XU.textureType, XU.vertexUrl, XU.indexParameters, !1, XU.textureFormat)), XU, cU, yU)
          }
        }, (() => {
          const zU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          XU = [(0, oU.I)()], FU = [(0, oU.I)()], YU = [(0, oU.I)()], pU = [(0, oU.I)()], aU = [(0, oU.I)()], gU = [(0, oU.n)()], kU = [(0, oU.I)()], GU = [(0, oU.I)()], BU = [(0, oU.I)()], ZU = [(0, oU.I)()], RU = [(0, oU.I)()], PU = [(0, oU.I)()], WU = [(0, oU.I)()], dU = [(0, oU.I)()], LU = [(0, oU.I)("samples")], eU = [(0, oU.I)()], (0, cU.j)(UU, null, FU, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: UU => "name" in UU,
              get: UU => UU.name
            },
            metadata: zU
          }, null, CU), (0, cU.j)(UU, null, BU, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: UU => "alphaMode" in UU,
              get: UU => UU.alphaMode
            },
            metadata: zU
          }, null, CU), (0, cU.j)(null, null, XU, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: UU => "uniqueId" in UU,
              get: UU => UU.uniqueId,
              set: (UU, XU) => {
                UU.uniqueId = XU
              }
            },
            metadata: zU
          }, wU, qU), (0, cU.j)(null, null, YU, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: UU => "width" in UU,
              get: UU => UU.width,
              set: (UU, XU) => {
                UU.width = XU
              }
            },
            metadata: zU
          }, OU, SU), (0, cU.j)(null, null, pU, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: UU => "height" in UU,
              get: UU => UU.height,
              set: (UU, XU) => {
                UU.height = XU
              }
            },
            metadata: zU
          }, rU, uU), (0, cU.j)(null, null, aU, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: UU => "renderTargetSamplingMode" in UU,
              get: UU => UU.renderTargetSamplingMode,
              set: (UU, XU) => {
                UU.renderTargetSamplingMode = XU
              }
            },
            metadata: zU
          }, fU, iU), (0, cU.j)(null, null, gU, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: UU => "clearColor" in UU,
              get: UU => UU.clearColor,
              set: (UU, XU) => {
                UU.clearColor = XU
              }
            },
            metadata: zU
          }, HU, MU), (0, cU.j)(null, null, kU, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: UU => "autoClear" in UU,
              get: UU => UU.autoClear,
              set: (UU, XU) => {
                UU.autoClear = XU
              }
            },
            metadata: zU
          }, vU, VU), (0, cU.j)(null, null, GU, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: UU => "forceAutoClearInAlphaMode" in UU,
              get: UU => UU.forceAutoClearInAlphaMode,
              set: (UU, XU) => {
                UU.forceAutoClearInAlphaMode = XU
              }
            },
            metadata: zU
          }, sU, nU), (0, cU.j)(null, null, ZU, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: UU => "alphaConstants" in UU,
              get: UU => UU.alphaConstants,
              set: (UU, XU) => {
                UU.alphaConstants = XU
              }
            },
            metadata: zU
          }, mU, lU), (0, cU.j)(null, null, RU, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: UU => "enablePixelPerfectMode" in UU,
              get: UU => UU.enablePixelPerfectMode,
              set: (UU, XU) => {
                UU.enablePixelPerfectMode = XU
              }
            },
            metadata: zU
          }, xU, JU), (0, cU.j)(null, null, PU, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: UU => "forceFullscreenViewport" in UU,
              get: UU => UU.forceFullscreenViewport,
              set: (UU, XU) => {
                UU.forceFullscreenViewport = XU
              }
            },
            metadata: zU
          }, jU, KU), (0, cU.j)(null, null, WU, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: UU => "scaleMode" in UU,
              get: UU => UU.scaleMode,
              set: (UU, XU) => {
                UU.scaleMode = XU
              }
            },
            metadata: zU
          }, bU, TU), (0, cU.j)(null, null, dU, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: UU => "alwaysForcePOT" in UU,
              get: UU => UU.alwaysForcePOT,
              set: (UU, XU) => {
                UU.alwaysForcePOT = XU
              }
            },
            metadata: zU
          }, hU, UX), (0, cU.j)(null, null, LU, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: UU => "_samples" in UU,
              get: UU => UU._samples,
              set: (UU, XU) => {
                UU._samples = XU
              }
            },
            metadata: zU
          }, XX, zX), (0, cU.j)(null, null, eU, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: UU => "adaptScaleToCurrentViewport" in UU,
              get: UU => UU.adaptScaleToCurrentViewport,
              set: (UU, XU) => {
                UU.adaptScaleToCurrentViewport = XU
              }
            },
            metadata: zU
          }, cX, yX), zU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zU
          })
        })(), UU
      })(),
      aU = !1;

    function tU() {
      aU || (aU = !0, YU.c.prototype.setTextureFromPostProcess = function(UU, XU, zU) {
        let cU = null;
        XU && (XU._forcedOutputTexture ? cU = XU._forcedOutputTexture : XU._textures.data[XU._currentRenderTextureInd] && (cU = XU._textures.data[XU._currentRenderTextureInd])), this._bindTexture(UU, cU?.texture ?? null, zU)
      }, YU.c.prototype.setTextureFromPostProcessOutput = function(UU, XU, zU) {
        this._bindTexture(UU, XU?._outputTexture?.texture ?? null, zU)
      }, FU.b.prototype.setTextureFromPostProcess = function(UU, XU) {
        this._engine.setTextureFromPostProcess(this._samplers[UU], XU, UU)
      }, FU.b.prototype.setTextureFromPostProcessOutput = function(UU, XU) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[UU], XU, UU)
      }, (0, EU.h)("BABYLON.PostProcess", pU))
    }
  },
  44524: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU,
      f: () => QU
    });
    var cU = zU(44501),
      yU = zU(37841);
    class QU extends cU.g {
      _gatherImports(UU, XU) {
        UU ? (this._webGPUReady = !0, XU.push(Promise.all([zU.e(676).then((() => zU(64109)))]))) : XU.push(Promise.all([zU.e(677).then((() => zU(64115)))])), super._gatherImports(UU, XU)
      }
      constructor(UU) {
        let XU = arguments.length > 2 ? arguments[2] : void 0;
        const zU = {
          name: UU,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || yU.b.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: QU.FragmentUrl,
          ...XU
        };
        zU.engine || (zU.engine = yU.b.LastCreatedEngine), super(zU)
      }
    }
    QU.FragmentUrl = "pass";
    class AU extends cU.g {
      _gatherImports(UU, XU) {
        UU ? (this._webGPUReady = !0, XU.push(Promise.all([zU.e(678).then((() => zU(64123)))]))) : XU.push(Promise.all([zU.e(679).then((() => zU(64128)))])), super._gatherImports(UU, XU)
      }
      constructor(UU) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: UU,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || yU.b.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: AU.FragmentUrl,
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
    AU.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);