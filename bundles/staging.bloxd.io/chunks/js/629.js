export const id = 629;
export const ids = [629];
export const modules = {
  53843: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => nR
    });
    var yR = GR(38233),
      tR = GR(38204),
      uR = GR(42011),
      ZR = GR(41670),
      qR = GR(41449),
      iR = GR(39914),
      fR = GR(41650),
      VR = GR(41681),
      KR = GR(38217),
      wR = GR(41415),
      rR = GR(41626),
      eR = GR(41715);
    class aR {
      get renderList() {
        return this._renderList
      }
      set renderList(RR) {
        this._renderList !== RR && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), RR && (this._unObserveRenderList = (0, KR.i)(RR, this._renderListHasChanged)), this._renderList = RR)
      }
      get disableImageProcessing() {
        return this._disableImageProcessing
      }
      set disableImageProcessing(RR) {
        RR !== this._disableImageProcessing && (this._disableImageProcessing = RR, this._scene.markAllMaterialsAsDirty(64))
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(RR) {
        this._disableDepthPrePass = RR, this._renderingManager.disableDepthPrePass = RR
      }
      get name() {
        return this._name
      }
      set name(RR) {
        if (this._name !== RR) {
          if (this._name = RR, this._sceneUBOs)
            for (let RR = 0; RR < this._sceneUBOs.length; ++RR) this._sceneUBOs[RR].name = `Scene ubo #${RR} for ${this.name}`;
          if (this._scene)
            for (let RR = 0; RR < this._renderPassIds.length; ++RR) {
              const JR = this._renderPassIds[RR];
              this._engine._renderPassNames[JR] = `${this._name}#${RR}`
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
      setMaterialForRendering(RR, JR) {
        let GR;
        GR = Array.isArray(RR) ? RR : [RR];
        for (let yR = 0; yR < GR.length; ++yR)
          for (let RR = 0; RR < this.options.numPasses; ++RR) {
            let tR = GR[yR];
            GR[yR].sH && (tR = GR[yR].IuR), tR.setMaterialForRenderPass(this._renderPassIds[RR], void 0 !== JR ? Array.isArray(JR) ? JR[RR] : JR : void 0)
          }
      }
      _freezeActiveMeshes(RR) {
        this._freezeActiveMeshesCancel = (0, wR.g)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, RR)
            for (let RR = 0; RR < this._activeMeshes.length; RR++) this._activeMeshes.data[RR]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((RR, JR) => {
          this._freezeActiveMeshesCancel = null, JR ? (iR.c.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), RR && iR.c.Error(RR)) : (iR.c.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), RR && (iR.c.Error(RR), RR.stack && iR.c.Error(RR.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let RR = 0; RR < this._activeMeshes.length; RR++) this._activeMeshes.data[RR]._unFreeze();
        this._isFrozen = !1
      }
      constructor(RR, JR, GR) {
        this._unObserveRenderList = null, this._renderListHasChanged = (RR, JR) => {
          const GR = this._renderList ? this._renderList.length : 0;
          if (0 === JR && GR > 0 || 0 === GR)
            for (const yR of this._scene.meshes) yR._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new yR.b, this.onAfterRenderObservable = new yR.b, this.onBeforeRenderingManagerRenderObservable = new yR.b, this.onAfterRenderingManagerRenderObservable = new yR.b, this.onInitRenderingObservable = new yR.b, this.onFinishRenderingObservable = new yR.b, this.onFastPathRenderObservable = new yR.b, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new rR.f(256), this._activeBoundingBoxes = new rR.f(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = RR, this._scene = JR, this._engine = this._scene.ke(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...GR
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new VR.e(JR), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const RR of this._scene.lights) RR.getTypeID() === eR.c.LIGHTTYPEID_CLUSTERED_CONTAINER && RR.isSupported && RR._updateBatches(this.activeCamera).render()
        })), this._scene.addObjectRenderer(this)
      }
      _releaseRenderPassId() {
        for (let RR = 0; RR < this.options.numPasses; ++RR) this._engine.releaseRenderPassId(this._renderPassIds[RR]);
        this._renderPassIds.length = 0
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let RR = 0; RR < this.options.numPasses; ++RR) this._renderPassIds[RR] = this._engine.createRenderPassId(`${this.name}#${RR}`)
      }
      _createSceneUBO(RR, JR) {
        const GR = this._scene.ke(),
          yR = new fR.b(GR, void 0, JR, RR, void 0, !1);
        return yR.addUniform("viewProjection", 16), JR && yR.addUniform("viewProjectionR", 16), yR.addUniform("view", 16), yR.addUniform("projection", 16), yR.addUniform("vEyePosition", 4), yR.addUniform("inverseProjection", 16), yR
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const RR = this._engine._currentRenderTarget,
          JR = !(!RR || !RR.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const RR = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${RR} for ${this.name}`, JR)), this._sceneUBOIsMultiview.push(JR)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== JR && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, JR), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = JR);
        const GR = this._sceneUBOs[this._currentSceneUBOIndex++];
        return GR.unbindEffect(), GR
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1
      }
      get refreshRate() {
        return this._refreshRate
      }
      set refreshRate(RR) {
        this._refreshRate = RR, this.resetRefreshCounter()
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1))
      }
      isReadyForRendering(RR, JR) {
        this.prepareRenderList(), this.initRender(RR, JR);
        const GR = this._checkReadiness();
        return this.finishRender(), GR
      }
      prepareRenderList() {
        const RR = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let JR = 0; JR < this._waitingRenderList.length; JR++) {
              const GR = this._waitingRenderList[JR],
                yR = RR.getMeshById(GR);
              yR && this.renderList.push(yR)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const RR = this._scene.meshes;
          for (let JR = 0; JR < RR.length; JR++) {
            const GR = RR[JR];
            this.renderListPredicate(GR) && this.renderList.push(GR)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(RR, JR) {
        const GR = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), GR && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(GR.getViewMatrix(), GR.getProjectionMatrix(!0)), this._scene._activeCamera = GR, this._engine.setViewport(GR.rigParent ? GR.rigParent.viewport : GR.viewport, RR, JR)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const RR = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (RR.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), RR._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== RR.activeCamera && RR.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), RR.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const GR = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[RR], this.onBeforeRenderObservable.notifyObservers(RR);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(RR);
        else {
          const JR = this._prepareRenderingManager(RR),
            GR = this._scene.getOutlineRenderer?.(),
            yR = GR?.enabled;
          GR && (GR.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(RR), this._renderingManager.render(this.customRenderFunction, JR, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(RR), GR && (GR.enabled = yR)
        }
        JR || this.onAfterRenderObservable.notifyObservers(RR), this._engine.currentRenderPassId = GR
      }
      _checkReadiness() {
        const RR = this._scene,
          JR = this._engine.currentRenderPassId;
        let GR = !0;
        RR.getViewMatrix() || RR.updateTransformMatrix();
        const yR = this.options.numPasses;
        for (let tR = 0; tR < yR && GR; tR++) {
          const JR = this.renderList ? this.renderList : RR.frameGraph ? RR.meshes : RR.getActiveMeshes().data,
            uR = this.renderList || RR.frameGraph ? JR.length : RR.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[tR], this.onBeforeRenderObservable.notifyObservers(tR);
          let ZR = null,
            qR = uR;
          this.getCustomRenderList && (ZR = this.getCustomRenderList(tR, JR, uR), ZR && (qR = ZR.length)), ZR || (ZR = JR), this.options.doNotChangeAspectRatio || RR.updateTransformMatrix(!0);
          for (let RR = 0; RR < qR && GR; ++RR) {
            const JR = ZR[RR];
            if (!JR.isEnabled() || JR.isBlocked || !JR.isVisible || !JR.XM) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(JR, this.refreshRate, !0)) {
                GR = !1;
                continue
              }
            } else if (!JR.isReady(!0)) {
              GR = !1;
              continue
            }
            let yR = JR._edgesRenderer,
              tR = JR.hasThinInstances;
            if (JR.sH) {
              const RR = JR.IuR;
              RR.edgesShareWithInstances && RR._edgesRenderer?.isEnabled && (yR = RR._edgesRenderer, tR = !0)
            } else JR.PuR && JR.edgesShareWithInstances && (tR = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && yR?.isEnabled && (yR.isReady(tR) || (GR = !1))
          }
          if (this.renderParticles && RR.particlesEnabled) {
            const JR = this.particleSystemList || RR.pM;
            for (const RR of JR) RR.isReady() || (GR = !1)
          }
          if (this.renderSprites && RR.spritesEnabled) {
            const JR = this.spriteManagerList || RR.spriteManagers;
            if (JR)
              for (const yR of JR) RR.activeCamera && 0 === (yR.layerMask & RR.activeCamera.layerMask) || yR.isReady && !yR.isReady() && (GR = !1)
          }
          this.onAfterRenderObservable.notifyObservers(tR), yR > 1 && (RR.incrementRenderId(), RR.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = JR, GR
      }
      _prepareRenderingManager() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const GR = this._scene;
        let yR, tR, uR = null;
        const ZR = this.renderList ? this.renderList : GR.frameGraph ? GR.meshes : GR.getActiveMeshes().data,
          qR = this.renderList || GR.frameGraph ? ZR.length : GR.getActiveMeshes().length;
        if (this.getCustomRenderList && (uR = this.getCustomRenderList(RR, ZR, qR)), uR) yR = uR.length, tR = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !JR && !this._engine.isWebGPU) return ZR;
          this._defaultRenderListPrepared = !0, uR = ZR, yR = qR, tR = !this.renderList || this.forceLayerMaskCheck
        }
        const iR = GR.activeCamera,
          fR = this.cameraForLOD ?? iR,
          VR = GR.getBoundingBoxRenderer?.();
        if (GR._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && VR) {
            VR.reset();
            for (let RR = 0; RR < this._activeBoundingBoxes.length; RR++) {
              const JR = this._activeBoundingBoxes.data[RR];
              VR.renderList.push(JR)
            }
          }
          return uR
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), VR && VR.reset(), this.renderMeshes) {
          const RR = GR.getRenderId(),
            JR = GR.getFrameId();
          for (let ZR = 0; ZR < yR; ZR++) {
            const yR = uR[ZR];
            if (yR && !yR.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(yR, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!yR.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let uR, ZR;
              if (fR) {
                const RR = yR._internalAbstractMeshDataInfo._currentLOD.get(fR);
                RR && RR[1] === JR ? uR = RR[0] : (uR = GR.customLODSelector ? GR.customLODSelector(yR, fR) : yR.getLOD(fR), RR ? (RR[0] = uR, RR[1] = JR) : yR._internalAbstractMeshDataInfo._currentLOD.set(fR, [uR, JR]))
              } else uR = yR;
              if (!uR) continue;
              if (uR !== yR && 0 !== uR.billboardMode && uR.computeWorldMatrix(), uR._preActivateForIntermediateRendering(RR), ZR = !(!tR || !iR) && 0 === (yR.layerMask & iR.layerMask), yR.isEnabled() && yR.isVisible && yR.XM && !ZR) {
                if (this._activeMeshes.push(yR), uR._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, uR !== yR && uR._activate(RR, !0), this.enableBoundingBoxRendering && VR && VR._preActiveMesh(yR), yR._activate(RR, !0) && yR.XM.length) {
                  yR.sH ? yR._internalAbstractMeshDataInfo._actAsRegularMesh && (uR = yR) : uR._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, uR._internalAbstractMeshDataInfo._isActiveIntermediate = !0, GR._prepareSkeleton(uR);
                  for (let RR = 0; RR < uR.XM.length; RR++) {
                    const JR = uR.XM[RR];
                    this.enableBoundingBoxRendering && VR && VR._evaluateSubMesh(yR, JR), this._renderingManager.dispatch(JR, uR)
                  }
                }
                yR._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && VR && JR)
          for (let KR = 0; KR < VR.renderList.length; KR++) {
            const RR = VR.renderList.data[KR];
            this._activeBoundingBoxes.push(RR)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const RR = this.particleSystemList || GR.pM;
          for (let JR = 0; JR < RR.length; JR++) {
            const GR = RR[JR],
              yR = GR.emitter;
            GR.isStarted() && yR && (!yR.position || yR.isEnabled()) && this._renderingManager.dispatchParticles(GR)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return uR
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(RR, JR, GR, yR)
      }
      setRenderingAutoClearDepthStencil(RR, JR) {
        let GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          yR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(RR, JR, GR, yR), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const RR = new aR(this.name, this._scene, this.options);
        return this.renderList && (RR.renderList = this.renderList.slice(0)), RR
      }
      dispose() {
        const RR = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          JR = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let GR = 0; GR < JR; GR++) {
          const JR = RR[GR];
          JR && void 0 !== JR.getMaterialForRenderPass(this.renderPassId) && JR.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const GR of this._sceneUBOs) GR.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === aR.REFRESHRATE_RENDER_ONCE && (this.refreshRate = aR.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    aR.REFRESHRATE_RENDER_ONCE = 0, aR.REFRESHRATE_RENDER_ONEVERYFRAME = 1, aR.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var LR = GR(41407);
    class nR extends uR.f {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate
      }
      set renderListPredicate(RR) {
        this._objectRenderer.renderListPredicate = RR
      }
      get renderList() {
        return this._objectRenderer.renderList
      }
      set renderList(RR) {
        this._objectRenderer.renderList = RR
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList
      }
      set particleSystemList(RR) {
        this._objectRenderer.particleSystemList = RR
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList
      }
      set getCustomRenderList(RR) {
        this._objectRenderer.getCustomRenderList = RR
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles
      }
      set renderParticles(RR) {
        this._objectRenderer.renderParticles = RR
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites
      }
      set renderSprites(RR) {
        this._objectRenderer.renderSprites = RR
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering
      }
      set enableBoundingBoxRendering(RR) {
        this._objectRenderer.enableBoundingBoxRendering = RR
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering
      }
      set enableOutlineRendering(RR) {
        this._objectRenderer.enableOutlineRendering = RR
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck
      }
      set forceLayerMaskCheck(RR) {
        this._objectRenderer.forceLayerMaskCheck = RR
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera
      }
      set activeCamera(RR) {
        this._objectRenderer.activeCamera = RR
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD
      }
      set cameraForLOD(RR) {
        this._objectRenderer.cameraForLOD = RR
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing
      }
      set disableImageProcessing(RR) {
        this._objectRenderer.disableImageProcessing = RR
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction
      }
      set customIsReadyFunction(RR) {
        this._objectRenderer.customIsReadyFunction = RR
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction
      }
      set customRenderFunction(RR) {
        this._objectRenderer.customRenderFunction = RR
      }
      get postProcesses() {
        return this._postProcesses
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled
      }
      set onAfterUnbind(RR) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(RR)
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable
      }
      set onBeforeRender(RR) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(RR)
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable
      }
      set onAfterRender(RR) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(RR)
      }
      set onClear(RR) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(RR)
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList
      }
      set _waitingRenderList(RR) {
        this._objectRenderer._waitingRenderList = RR
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
      setMaterialForRendering(RR, JR) {
        this._objectRenderer.setMaterialForRendering(RR, JR)
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
      set boundingBoxSize(RR) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(RR)) return;
        this._boundingBoxSize = RR;
        const JR = this.jH();
        JR && JR.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(RR, JR, GR) {
        let ZR, qR, fR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          VR = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          KR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          wR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          rR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : uR.f.TRILINEAR_SAMPLINGMODE,
          eR = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          LR = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          nR = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          UR = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          WR = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          AR = arguments.length > 13 ? arguments[13] : void 0,
          CR = arguments.length > 14 ? arguments[14] : void 0,
          XR = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          MR = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          BR = !0,
          lR = !1;
        if ("object" === typeof fR) {
          const RR = fR;
          fR = !!RR.generateMipMaps, VR = RR.doNotChangeAspectRatio ?? !0, KR = RR.type ?? 0, wR = !!RR.isCube, rR = RR.samplingMode ?? uR.f.TRILINEAR_SAMPLINGMODE, eR = RR.generateDepthBuffer ?? !0, LR = !!RR.generateStencilBuffer, nR = !!RR.isMulti, UR = RR.format ?? 5, WR = !!RR.delayAllocation, AR = RR.samples, CR = RR.creationFlags, XR = !!RR.noColorAttachment, MR = !!RR.useSRGBBuffer, ZR = RR.colorAttachment, BR = RR.gammaSpace ?? BR, qR = RR.existingObjectRenderer, lR = !!RR.enableClusteredLights
        }
        if (super(null, GR, !fR, void 0, rR, void 0, void 0, void 0, void 0, UR), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new yR.b, this.onAfterUnbindObservable = new yR.b, this.onClearObservable = new yR.b, this.onResizeObservable = new yR.b, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = tR.r.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(GR = this.jH())) return;
        const pR = this.jH().ke();
        this._gammaSpace = BR, this._coordinatesMode = uR.f.PROJECTION_MODE, this.name = RR, this.isRenderTarget = !0, this._initialSizeParameter = JR, this._dontDisposeObjectRenderer = !!qR, this._processSizeParameter(JR), this._objectRenderer = qR ?? new aR(RR, GR, {
          numPasses: wR ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: VR,
          enableClusteredLights: lR
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const RR = this._scene;
          if (!this._disableEngineStages)
            for (const JR of RR._beforeRenderTargetClearStage) JR.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(pR) : this.skipInitialClear || pR.clear(this.clearColor ?? RR.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || RR.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const JR of RR._beforeRenderTargetDrawStage) JR.action(this, this._currentFaceIndex, this._currentLayer);
          pR._debugPushGroup && pR._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (pR._debugPopGroup && pR._debugPopGroup(), !this._disableEngineStages)
            for (const JR of this._scene._afterRenderTargetDrawStage) JR.action(this, this._currentFaceIndex, this._currentLayer);
          const RR = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const JR of this._scene._afterRenderTargetPostProcessStage) JR.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = RR), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), pR) : iR.c.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(pR) : this.skipInitialClear || pR.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = pR.onResizeObservable.add((() => {})), this._generateMipMaps = !!fR, this._doNotChangeAspectRatio = VR, nR || (this._renderTargetOptions = {
          generateMipMaps: fR,
          type: KR,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: eR,
          generateStencilBuffer: LR,
          samples: AR,
          creationFlags: CR,
          noColorAttachment: XR,
          useSRGBBuffer: MR,
          colorAttachment: ZR,
          label: this.name
        }, this.samplingMode === uR.f.NEAREST_SAMPLINGMODE && (this.wrapU = uR.f.CLAMP_ADDRESSMODE, this.wrapV = uR.f.CLAMP_ADDRESSMODE), WR || (wR ? (this._renderTarget = GR.ke().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = uR.f.INVCUBIC_MODE, this._textureMatrix = tR.e.Identity()) : this._renderTarget = GR.ke().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== AR && (this.samples = AR)))
      }
      createDepthStencilTexture() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          uR = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(RR, JR, GR, yR, tR, uR)
      }
      _processSizeParameter(RR) {
        if (RR.ratio) {
          this._sizeRatio = RR.ratio;
          const JR = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(JR.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(JR.getRenderHeight(), this._sizeRatio)
          }
        } else this._size = RR
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples
      }
      set samples(RR) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(RR))
      }
      addPostProcess(RR) {
        if (!this._postProcessManager) {
          const RR = this.jH();
          if (!RR) return;
          this._postProcessManager = new ZR.b(RR), this._postProcesses = new Array
        }
        this._postProcesses.push(RR), this._postProcesses[0].autoClear = !1
      }
      clearPostProcesses() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (RR)
            for (const RR of this._postProcesses) RR.dispose();
          this._postProcesses = []
        }
      }
      removePostProcess(RR) {
        if (!this._postProcesses) return;
        const JR = this._postProcesses.indexOf(RR); - 1 !== JR && (this._postProcesses.splice(JR, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter()
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate
      }
      set refreshRate(RR) {
        this._objectRenderer.refreshRate = RR
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
        const RR = this._size.layers;
        if (RR) return RR;
        const JR = this._size.depth;
        return JR || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(RR) {
        const JR = Math.max(1, this.getRenderSize() * RR);
        this.resize(JR)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(RR) {
        const JR = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const GR = this.jH();
        GR && (this._processSizeParameter(RR), this._renderTarget = JR ? GR.ke().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : GR.ke().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(RR, JR)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => GR(53856))).then((RR => this._dumpTools = RR))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const RR = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), RR
      }
      _render() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const GR = this.jH();
        if (!GR) return;
        void 0 !== this.useCameraPostProcesses && (RR = this.useCameraPostProcesses);
        const yR = GR.ke();
        if (yR._debugPushGroup && yR._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let tR = 0; tR < 6; tR++) this._renderToTarget(tR, RR, JR), GR.incrementRenderId(), GR.resetCachedMaterial();
          else this._renderToTarget(0, RR, JR);
        else
          for (let tR = 0; tR < this.getRenderLayers(); tR++) this._renderToTarget(0, RR, JR, tR), GR.incrementRenderId(), GR.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), yR._debugPopGroup && yR._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(RR, JR) {
        const GR = RR * JR,
          yR = (0, qR.i)(GR + 16384 / (128 + GR));
        return Math.min((0, qR.d)(RR), yR)
      }
      _bindFrameBuffer() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const GR = this.jH();
        if (!GR) return;
        const yR = GR.ke();
        this._renderTarget && yR.bindFramebuffer(this._renderTarget, this.isCube ? RR : void 0, void 0, void 0, this.ignoreCameraViewport, 0, JR)
      }
      _unbindFrameBuffer(RR, JR) {
        this._renderTarget && RR.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(JR)
        }))
      }
      _prepareFrame(RR, JR, GR, yR) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(JR, GR) : yR && RR.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(JR, GR)
      }
      _renderToTarget(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const tR = this.jH();
        if (!tR) return;
        const uR = tR.ke();
        this._currentFaceIndex = RR, this._currentLayer = yR, this._currentUseCameraPostProcess = JR, this._currentDumpForDebug = GR, this._prepareFrame(tR, RR, yR, JR), this._objectRenderer.render(RR + yR, !0), this._unbindFrameBuffer(uR, RR), this._texture && this.isCube && 5 === RR && uR.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(RR, JR, GR, yR)
      }
      setRenderingAutoClearDepthStencil(RR, JR) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(RR, JR)
      }
      clone() {
        const RR = this.getSize(),
          JR = new nR(this.name, RR, this.jH(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return JR.hasAlpha = this.hasAlpha, JR.level = this.level, JR.coordinatesMode = this.coordinatesMode, this.renderList && (JR.renderList = this.renderList.slice(0)), JR
      }
      serialize() {
        if (!this.name) return null;
        const RR = super.serialize();
        if (RR.renderTargetSize = this.getRenderSize(), RR.renderList = [], this.renderList)
          for (let JR = 0; JR < this.renderList.length; JR++) RR.renderList.push(this.renderList[JR].id);
        return RR
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.jH().ke().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const RR = this.jH();
        if (!RR) return;
        let JR = RR.customRenderTargets.indexOf(this);
        JR >= 0 && RR.customRenderTargets.splice(JR, 1);
        for (const GR of RR.cameras) JR = GR.customRenderTargets.indexOf(this), JR >= 0 && GR.customRenderTargets.splice(JR, 1);
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
    nR.REFRESHRATE_RENDER_ONCE = aR.REFRESHRATE_RENDER_ONCE, nR.REFRESHRATE_RENDER_ONEVERYFRAME = aR.REFRESHRATE_RENDER_ONEVERYFRAME, nR.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = aR.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(nR.prototype, "noPrePassRenderer") || Object.defineProperty(nR.prototype, "noPrePassRenderer", (0, LR.e)("RenderTargetTexture", "noPrePassRenderer"))
  },
  53825: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => fR,
      h: () => VR
    });
    var yR = GR(41663),
      tR = GR(39248),
      uR = GR(38233),
      ZR = GR(41382),
      qR = GR(41844);
    const iR = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class fR {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iR;
        this._fullscreenViewport = new tR.c(0, 0, 1, 1);
        const GR = JR.positions ?? iR.positions,
          uR = JR.indices ?? iR.indices;
        this.engine = RR, this._vertexBuffers = {
          [yR.l.PositionKind]: new yR.l(RR, GR, yR.l.PositionKind, !1, !1, 2)
        }, this._indexBuffer = RR.createIndexBuffer(uR), this._indexBufferLength = uR.length, this._onContextRestoredObserver = RR.Ye.add((() => {
          this._indexBuffer = RR.createIndexBuffer(uR);
          for (const RR in this._vertexBuffers) {
            this._vertexBuffers[RR]._rebuild()
          }
        }))
      }
      setViewport() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.engine.setViewport(RR)
      }
      bindBuffers(RR) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, RR)
      }
      applyEffectWrapper(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = JR, this.engine.stencilState.stencilTest = GR, this.engine.enableEffect(RR.drawWrapper), this.bindBuffers(RR.effect), RR.onApplyObservable.notifyObservers({})
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
      _isRenderTargetTexture(RR) {
        return void 0 !== RR.renderTarget
      }
      render(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!RR.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const GR = null === JR ? null : this._isRenderTargetTexture(JR) ? JR.renderTarget : JR;
        GR && this.engine.bindFramebuffer(GR), this.applyEffectWrapper(RR), this.draw(), GR && this.engine.unBindFramebuffer(GR), this.restoreStates()
      }
      dispose() {
        const RR = this._vertexBuffers[yR.l.PositionKind];
        RR && (RR.dispose(), delete this._vertexBuffers[yR.l.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.Ye.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class VR {
      static RegisterShaderCodeProcessing(RR, JR) {
        JR ? VR._CustomShaderCodeProcessing[RR ?? ""] = JR : delete VR._CustomShaderCodeProcessing[RR ?? ""]
      }
      static _GetShaderCodeProcessing(RR) {
        return VR._CustomShaderCodeProcessing[RR] ?? VR._CustomShaderCodeProcessing[""]
      }
      get name() {
        return this.options.name
      }
      set name(RR) {
        this.options.name = RR
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
      set effect(RR) {
        this._drawWrapper.effect = RR
      }
      constructor(RR) {
        this.alphaMode = 0, this.onEffectCreatedObservable = new uR.b(void 0, !0), this.onApplyObservable = new uR.b, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
          ...RR,
          name: RR.name || "effectWrapper",
          engine: RR.engine,
          uniforms: RR.uniforms || RR.uniformNames || [],
          uniformNames: void 0,
          samplers: RR.samplers || RR.samplerNames || [],
          samplerNames: void 0,
          attributeNames: RR.attributeNames || ["position"],
          uniformBuffers: RR.uniformBuffers || [],
          defines: RR.defines || "",
          useShaderStore: RR.useShaderStore || !1,
          vertexUrl: RR.vertexUrl || RR.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: RR.fragmentShader || "pass",
          indexParameters: RR.indexParameters,
          blockCompilation: RR.blockCompilation || !1,
          shaderLanguage: RR.shaderLanguage || 0,
          onCompiled: RR.onCompiled || void 0,
          extraInitializations: RR.extraInitializations || void 0,
          extraInitializationsAsync: RR.extraInitializationsAsync || void 0,
          useAsPostProcess: RR.useAsPostProcess ?? !1,
          allowEmptySourceTexture: RR.allowEmptySourceTexture ?? !1
        }, this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), RR.vertexUrl || RR.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add((() => {
          this.effect.setFloat2("scale", 1, 1)
        }))), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add((() => {
          this.bind()
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.Ye.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new qR.c(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const JR = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, JR, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          yR = arguments.length > 2 ? arguments[2] : void 0,
          tR = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, tR && this._importPromises.push(...tR);
        const uR = this.options.engine.isWebGPU && !VR.ForceGLSL;
        this._gatherImports(uR, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(uR && this._webGPUReady ? GR.e(681).then((() => GR(64265))) : GR.e(671).then((() => GR(64146)))), void 0 !== yR && yR(uR, this._importPromises), uR && this._webGPUReady && (this.options.shaderLanguage = 1), RR || this.updateEffect(JR)
      }
      updateEffect() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          yR = arguments.length > 3 ? arguments[3] : void 0,
          tR = arguments.length > 4 ? arguments[4] : void 0,
          uR = arguments.length > 5 ? arguments[5] : void 0,
          qR = arguments.length > 6 ? arguments[6] : void 0,
          iR = arguments.length > 7 ? arguments[7] : void 0;
        const fR = VR._GetShaderCodeProcessing(this.name);
        if (fR?.defineCustomBindings) {
          const yR = JR?.slice() ?? [];
          yR.push(...this.options.uniforms);
          const tR = GR?.slice() ?? [];
          tR.push(...this.options.samplers), RR = fR.defineCustomBindings(this.name, RR, yR, tR), JR = yR, GR = tR
        }
        this.options.defines = RR || "";
        const KR = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let wR;
        wR = this.options.extraInitializationsAsync ? async () => {
          await (KR?.()), await this.options.extraInitializationsAsync()
        }: KR, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: qR ?? this._shaderPath.vertex,
          fragment: iR ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: JR || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: GR || this.options.samplers,
          defines: null !== RR ? RR : "",
          fallbacks: null,
          onCompiled: tR ?? this.options.onCompiled,
          onError: uR ?? null,
          indexParameters: yR || this.options.indexParameters,
          processCodeAfterIncludes: fR?.processCodeAfterIncludes ? (RR, JR) => fR.processCodeAfterIncludes(this.name, RR, JR) : null,
          processFinalCode: fR?.processFinalCode ? (RR, JR) => fR.processFinalCode(this.name, RR, JR) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: wR
        }, this.options.engine) : this._drawWrapper.effect = new ZR.d(this._shaderPath, this.options.attributeNames, JR || this.options.uniforms, GR || this.options.samplerNames, this.options.engine, RR, void 0, tR || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, wR), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !RR && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), VR._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.ke().Ye.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    VR.ForceGLSL = !1, VR._CustomShaderCodeProcessing = {}
  },
  53856: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      Dispose: () => UR,
      DumpData: () => nR,
      DumpDataAsync: () => LR,
      DumpFramebuffer: () => aR,
      DumpTools: () => WR,
      EncodeImageAsync: () => eR,
      RegisterDumpTools: () => CR
    });
    var yR = GR(41520),
      tR = GR(53825),
      uR = GR(41616),
      ZR = GR(38239),
      qR = GR(38224),
      iR = GR(39914),
      fR = GR(41581),
      VR = GR(41524);
    let KR = null;
    async function wR() {
      return KR || (KR = async function() {
        const RR = qR.c.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        RR instanceof OffscreenCanvas && iR.c.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: JR
        } = await Promise.resolve().then((() => GR(41375)));
        if (!JR.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const yR = new JR(RR, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        qR.c.Instances.pop(), qR.c.OnEnginesDisposedObservable.add((RR => {
          yR && RR !== yR && !yR.oB && 0 === qR.c.Instances.length && UR()
        })), yR.getCaps().parallelShaderCompile = void 0;
        const uR = new tR.d(yR),
          {
            passPixelShader: ZR
          } = await GR.e(689).then((() => GR(64320))),
          fR = new tR.h({
            engine: yR,
            name: ZR.name,
            fragmentShader: ZR.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: RR,
          dumpEngine: {
            engine: yR,
            renderer: uR,
            wrapper: fR
          }
        }
      }()), await KR
    }
    let rR = (() => {
      var RR;
      let JR, GR = [];
      return RR = class {
        static async EncodeImageAsync(RR, JR, GR, yR, tR, ZR) {
          const qR = await wR(),
            iR = qR.dumpEngine;
          iR.engine.setSize(JR, GR, !0);
          const fR = iR.engine.createRawTexture(RR, JR, GR, 5, !1, !tR, 1);
          return iR.renderer.setViewport(), iR.renderer.applyEffectWrapper(iR.wrapper), iR.wrapper.effect._bindTexture("textureSampler", fR), iR.renderer.draw(), fR.dispose(), await new Promise(((RR, JR) => {
            uR.h.ToBlob(qR.canvas, (GR => {
              GR ? RR(GR) : JR(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), yR, ZR)
          }))
        }
      }, (() => {
        const tR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        JR = [VR.f], (0, yR.l)(RR, null, JR, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: RR => "EncodeImageAsync" in RR,
            get: RR => RR.EncodeImageAsync
          },
          metadata: tR
        }, null, GR), tR && Object.defineProperty(RR, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: tR
        }), (0, yR.m)(RR, GR)
      })(), RR
    })();
    const eR = rR.EncodeImageAsync;
    async function aR(RR, JR, GR, yR) {
      let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        uR = arguments.length > 5 ? arguments[5] : void 0,
        ZR = arguments.length > 6 ? arguments[6] : void 0;
      const qR = await GR.readPixels(0, 0, RR, JR);
      nR(RR, JR, new Uint8Array(qR.buffer), yR, tR, uR, !0, void 0, ZR)
    }
    async function LR(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        tR = arguments.length > 4 ? arguments[4] : void 0,
        qR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        VR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        KR = arguments.length > 7 ? arguments[7] : void 0;
      if (GR instanceof Float32Array) {
        const RR = new Uint8Array(GR.length);
        let JR = GR.length;
        for (; JR--;) {
          const yR = GR[JR];
          RR[JR] = Math.round(255 * (0, ZR.Clamp)(yR))
        }
        GR = RR
      }
      const wR = await rR.EncodeImageAsync(GR, RR, JR, yR, qR, KR);
      void 0 !== tR && uR.h.DownloadBlob(wR, tR), wR.type !== yR && iR.c.Warn(`DumpData: The requested mimeType '${yR}' is not supported. The result has mimeType '${wR.type}' instead.`);
      const eR = await wR.arrayBuffer();
      return VR ? eR : `data:${yR};base64,${(0,fR.g)(eR)}`
    }

    function nR(RR, JR, GR, yR) {
      let tR = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== tR || yR || (tR = ""), LR(RR, JR, GR, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", tR, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((RR => {
        yR && yR(RR)
      }))
    }

    function UR() {
      KR && (KR?.then((RR => {
        RR.canvas instanceof HTMLCanvasElement && RR.canvas.remove(), RR.dumpEngine && (RR.dumpEngine.engine.dispose(), RR.dumpEngine.renderer.dispose(), RR.dumpEngine.wrapper.dispose())
      })), KR = null)
    }
    const WR = {
      DumpData: nR,
      DumpDataAsync: LR,
      DumpFramebuffer: aR,
      Dispose: UR
    };
    let AR = !1;

    function CR() {
      if (AR) return;
      AR = !0;
      uR.h.DumpData = nR, uR.h.DumpDataAsync = LR, uR.h.DumpFramebuffer = aR
    }
  },
  53836: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => rR,
      g: () => eR,
      i: () => aR
    });
    var yR = GR(42011),
      tR = GR(53843),
      uR = GR(41520),
      ZR = GR(53823),
      qR = GR(41542),
      iR = GR(53852),
      fR = GR(41524);
    class VR extends ZR.c {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(RR, JR) {
        let GR = arguments.length > 4 ? arguments[4] : void 0;
        const yR = {
          size: "number" === typeof JR ? JR : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: GR,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...JR
        };
        super(RR, iR.d.FragmentUrl, {
          effectWrapper: "number" !== typeof JR && JR.effectWrapper ? void 0 : new iR.d(RR, GR, yR),
          ...yR
        })
      }
      static _Parse(RR, JR, GR, yR) {
        return qR.c.Parse((() => new VR(RR.name, RR.options, JR, RR.renderTargetSamplingMode, RR._engine, RR.reusable)), RR, GR, yR)
      }
    }(() => {
      var RR;
      let JR, GR = ZR.c,
        yR = [];
      RR = class extends GR {
        get face() {
          return this._effectWrapper.face
        }
        set face(RR) {
          this._effectWrapper.face = RR
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(RR, JR) {
          let GR = arguments.length > 4 ? arguments[4] : void 0;
          const tR = {
            size: "number" === typeof JR ? JR : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: GR,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...JR
          };
          super(RR, iR.d.FragmentUrl, {
            effectWrapper: "number" !== typeof JR && JR.effectWrapper ? void 0 : new iR.b(RR, GR, tR),
            ...tR
          }), (0, uR.m)(this, yR)
        }
        static _Parse(JR, GR, yR, tR) {
          return qR.c.Parse((() => new RR(JR.name, JR.options, GR, JR.renderTargetSamplingMode, JR._engine, JR.reusable)), JR, yR, tR)
        }
      }, (() => {
        const tR = "function" === typeof Symbol && Symbol.metadata ? Object.create(GR[Symbol.metadata] ?? null) : void 0;
        JR = [(0, fR.H)()], (0, uR.l)(RR, null, JR, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: RR => "face" in RR,
            get: RR => RR.face
          },
          metadata: tR
        }, null, yR), tR && Object.defineProperty(RR, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: tR
        })
      })()
    })();
    var KR = GR(38239),
      wR = GR(41594);

    function rR(RR, JR, GR, yR, tR, uR, qR, iR) {
      const fR = JR.ke();
      return JR.isReady = !1, tR = tR ?? JR.samplingMode, yR = yR ?? JR.type, uR = uR ?? JR.format, qR = qR ?? JR.width, iR = iR ?? JR.height, -1 === yR && (yR = 0), new Promise((VR => {
        const KR = new ZR.c("postprocess", RR, null, null, 1, null, tR, fR, !1, void 0, yR, void 0, null, !1, uR);
        KR.externalTextureSamplerBinding = !0;
        const wR = fR.createRenderTargetTexture({
          width: qR,
          height: iR
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: tR,
          type: yR,
          format: uR
        });
        KR.onEffectCreatedObservable.addOnce((RR => {
          RR.executeWhenCompiled((() => {
            KR.onApply = RR => {
              RR._bindTexture("textureSampler", JR), RR.setFloat2("scale", 1, 1)
            }, GR.postProcessManager.directRender([KR], wR, !0), fR.restoreDefaultFramebuffer(), fR._releaseTexture(JR), KR && KR.dispose(), wR._swapAndDie(JR), JR.type = yR, JR.format = 5, JR.isReady = !0, VR(JR)
          }))
        }))
      }))
    }
    async function eR(RR, JR, uR) {
      let qR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        iR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        fR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        VR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(RR) {
        if (RR.isReady()) return;
        if (RR.loadingError) throw new Error(RR.errorObject?.message || `Texture ${RR.name} errored while loading.`);
        const JR = RR.onLoadObservable;
        if (JR) return await new Promise((RR => JR.addOnce((() => RR()))));
        const GR = RR._texture?.onLoadedObservable;
        if (GR) return await new Promise((RR => GR.addOnce((() => RR()))));
        throw new Error(`Cannot determine readiness of texture ${RR.name}.`)
      }(RR);
      const wR = RR.getInternalTexture(),
        rR = RR.is3D || !!wR?.is3D,
        {
          width: eR,
          height: aR
        } = RR.getSize(),
        LR = JR ?? eR,
        nR = uR ?? aR;
      if (fR || rR || function(RR) {
          switch (RR) {
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
        }(RR.textureFormat) || LR !== eR || nR !== aR) {
        if (RR.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${fR?"RTT":"compression"} is not supported.`);
        return await async function(RR, JR, uR, qR, iR) {
          let fR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const VR = RR.jH(),
            KR = VR.ke(),
            wR = RR.getInternalTexture(),
            rR = RR.is3D || !!wR?.is3D;
          let eR;
          if (KR.isWebGPU ? rR ? await GR.e(685).then((() => GR(64295))) : RR.isCube ? await GR.e(686).then((() => GR(64304))) : await GR.e(687).then((() => GR(64312))) : rR ? await GR.e(682).then((() => GR(64285))) : RR.isCube ? await GR.e(683).then((() => GR(64288))) : await GR.e(684).then((() => GR(64293))), rR) eR = new ZR.c("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: yR.f.NEAREST_NEAREST_MIPNEAREST,
            engine: KR,
            shaderLanguage: KR.isWebGPU ? 1 : 0
          });
          else if (RR.isCube) {
            const RR = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            eR = new ZR.c("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: yR.f.NEAREST_NEAREST_MIPNEAREST,
              engine: KR,
              defines: RR[qR],
              shaderLanguage: KR.isWebGPU ? 1 : 0
            })
          } else eR = new ZR.c("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: yR.f.NEAREST_NEAREST_MIPNEAREST,
            engine: KR,
            shaderLanguage: KR.isWebGPU ? 1 : 0
          });
          await new Promise((RR => {
            eR.onEffectCreatedObservable.addOnce((JR => {
              JR.executeWhenCompiled((() => {
                RR(0)
              }))
            }))
          }));
          const aR = new tR.b("temp", {
            width: JR,
            height: uR
          }, VR, !1);
          eR.onApply = function(JR) {
            JR.setTexture("textureSampler", RR), JR.setFloat("lod", iR), JR.setInt("gamma", RR.gammaSpace ? 1 : 0), rR && JR.setFloat("slice", fR)
          };
          try {
            if (aR.renderTarget && wR) {
              const GR = wR.samplingMode;
              0 !== iR ? RR.updateSamplingMode(yR.f.NEAREST_NEAREST_MIPNEAREST) : RR.updateSamplingMode(yR.f.NEAREST_NEAREST), VR.postProcessManager.directRender([eR], aR.renderTarget, !0), RR.updateSamplingMode(GR);
              const tR = await KR.readPixels(0, 0, JR, uR),
                ZR = new Uint8Array(tR.buffer, tR.byteOffset, tR.byteLength);
              return KR.unBindFramebuffer(aR.renderTarget), ZR
            }
            throw Error("Render to texture failed.")
          } finally {
            aR.dispose(), eR.dispose()
          }
        }(RR, LR, nR, qR, iR, VR)
      }
      let UR = await RR.readPixels(qR, iR);
      if (!UR) throw new Error(`Failed to read pixels from texture ${RR.name}.`);
      if (UR instanceof Float32Array) {
        const RR = new Uint8Array(UR.length);
        let JR = UR.length;
        for (; JR--;) {
          const GR = UR[JR];
          RR[JR] = Math.round(255 * (0, KR.Clamp)(GR))
        }
        UR = RR
      }
      const WR = LR * nR,
        AR = 4 * WR;
      if (UR.length !== AR) {
        const RR = 0 === WR ? 0 : UR.length / WR;
        if (1 === RR || 2 === RR || 3 === RR) {
          const JR = new Uint8Array(AR);
          for (let GR = 0, yR = 0, tR = 0; GR < WR; GR++, tR += 4) {
            const GR = UR[yR++];
            if (1 === RR) {
              JR[tR] = GR, JR[tR + 1] = GR, JR[tR + 2] = GR, JR[tR + 3] = 255;
              continue
            }
            const uR = UR[yR++];
            2 !== RR ? (JR[tR] = GR, JR[tR + 1] = uR, JR[tR + 2] = UR[yR++], JR[tR + 3] = 255) : (JR[tR] = GR, JR[tR + 1] = uR, JR[tR + 2] = 0, JR[tR + 3] = 255)
          }
          return JR
        }
      }
      return UR
    }
    const aR = {
      CreateResizedCopy: function(RR, JR, GR) {
        let uR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const ZR = RR.jH(),
          qR = ZR.ke(),
          iR = new tR.b("resized" + RR.name, {
            width: JR,
            height: GR
          }, ZR, !RR.noMipmap, !0, RR._texture.type, !1, RR.samplingMode, !1);
        iR.wrapU = RR.wrapU, iR.wrapV = RR.wrapV, iR.uOffset = RR.uOffset, iR.vOffset = RR.vOffset, iR.uScale = RR.uScale, iR.vScale = RR.vScale, iR.uAng = RR.uAng, iR.vAng = RR.vAng, iR.wAng = RR.wAng, iR.coordinatesIndex = RR.coordinatesIndex, iR.level = RR.level, iR.anisotropicFilteringLevel = RR.anisotropicFilteringLevel, iR._texture.isReady = !1, RR.wrapU = yR.f.CLAMP_ADDRESSMODE, RR.wrapV = yR.f.CLAMP_ADDRESSMODE;
        const fR = new VR("pass", 1, null, uR ? yR.f.BILINEAR_SAMPLINGMODE : yR.f.NEAREST_SAMPLINGMODE, qR, !1, 0);
        return fR.externalTextureSamplerBinding = !0, fR.onEffectCreatedObservable.addOnce((JR => {
          JR.executeWhenCompiled((() => {
            fR.onApply = function(JR) {
              JR.setTexture("textureSampler", RR)
            };
            const JR = iR.renderTarget;
            JR && (ZR.postProcessManager.directRender([fR], JR), qR.unBindFramebuffer(JR), iR.disposeFramebufferObjects(), fR.dispose(), iR.getInternalTexture().isReady = !0)
          }))
        })), iR
      },
      ApplyPostProcess: rR,
      ToHalfFloat: wR.i,
      FromHalfFloat: wR.e,
      GetTextureDataAsync: eR
    }
  },
  53823: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => eR
    });
    var yR = GR(41520),
      tR = GR(41626),
      uR = GR(38233),
      ZR = GR(38204),
      qR = GR(41382),
      iR = GR(41524),
      fR = GR(41542),
      VR = GR(38253),
      KR = GR(41418),
      wR = GR(41449),
      rR = GR(53825);
    let eR = (() => {
        var RR;
        let JR, qR, KR, eR, aR, nR, UR, WR, AR, CR, XR, MR, BR, lR, pR, gR, bR = [],
          vR = [],
          OR = [],
          xR = [],
          NR = [],
          DR = [],
          HR = [],
          oR = [],
          cR = [],
          PR = [],
          IR = [],
          mR = [],
          zR = [],
          SR = [],
          jR = [],
          dR = [],
          ER = [],
          YR = [],
          kR = [],
          QR = [],
          FR = [],
          TR = [],
          sR = [],
          hR = [],
          RJ = [],
          JJ = [],
          GJ = [],
          yJ = [],
          tJ = [];
        return RR = class {
          static get ForceGLSL() {
            return rR.h.ForceGLSL
          }
          static set ForceGLSL(RR) {
            rR.h.ForceGLSL = RR
          }
          static RegisterShaderCodeProcessing(RR, JR) {
            rR.h.RegisterShaderCodeProcessing(RR, JR)
          }
          get name() {
            return this._effectWrapper.name
          }
          set name(RR) {
            this._effectWrapper.name = RR
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode
          }
          set alphaMode(RR) {
            this._effectWrapper.alphaMode = RR
          }
          get samples() {
            return this._samples
          }
          set samples(RR) {
            this._samples = Math.min(RR, this._engine.getCaps().maxMSAASamples), this._textures.forEach((RR => {
              RR.setSamples(this._samples)
            }))
          }
          get shaderLanguage() {
            return this._shaderLanguage
          }
          getEffectName() {
            return this._fragmentUrl
          }
          set onActivate(RR) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), RR && (this._onActivateObserver = this.onActivateObservable.add(RR))
          }
          set onSizeChanged(RR) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(RR)
          }
          set onApply(RR) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(RR)
          }
          set onBeforeRender(RR) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(RR)
          }
          set onAfterRender(RR) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(RR)
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd]
          }
          set inputTexture(RR) {
            this._forcedOutputTexture = RR
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty())
          }
          getCamera() {
            return this.Z5
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.VJR(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(JR, GR, qR, iR, fR, VR) {
            let KR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              wR = arguments.length > 7 ? arguments[7] : void 0,
              eR = arguments.length > 8 ? arguments[8] : void 0,
              aR = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              nR = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              UR = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              WR = arguments.length > 12 ? arguments[12] : void 0,
              AR = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              CR = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              XR = arguments.length > 15 ? arguments[15] : void 0,
              MR = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, yR.m)(this, bR), null), this.uniqueId = (0, yR.m)(this, vR, void 0), this.width = ((0, yR.m)(this, OR), (0, yR.m)(this, xR, -1)), this.height = ((0, yR.m)(this, NR), (0, yR.m)(this, DR, -1)), this.nodeMaterialSource = ((0, yR.m)(this, HR), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, yR.m)(this, oR, void 0), this.clearColor = ((0, yR.m)(this, cR), (0, yR.m)(this, PR, void 0)), this.autoClear = ((0, yR.m)(this, IR), (0, yR.m)(this, mR, !0)), this.forceAutoClearInAlphaMode = ((0, yR.m)(this, zR), (0, yR.m)(this, SR, !1)), this.alphaConstants = ((0, yR.m)(this, jR), (0, yR.m)(this, dR, void 0)), this.animations = ((0, yR.m)(this, ER), []), this.enablePixelPerfectMode = (0, yR.m)(this, YR, !1), this.forceFullscreenViewport = ((0, yR.m)(this, kR), (0, yR.m)(this, QR, !0)), this.inspectableCustomProperties = (0, yR.m)(this, FR), this.scaleMode = (0, yR.m)(this, TR, 1), this.alwaysForcePOT = ((0, yR.m)(this, sR), (0, yR.m)(this, hR, !1)), this._samples = ((0, yR.m)(this, RJ), (0, yR.m)(this, JJ, 1)), this.adaptScaleToCurrentViewport = ((0, yR.m)(this, GJ), (0, yR.m)(this, yJ, !1)), this.doNotSerialize = ((0, yR.m)(this, tJ), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new tR.f(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new ZR.n(1, 1), this._texelSize = ZR.n.Zero(), this.onActivateObservable = new uR.b, this.onSizeChangedObservable = new uR.b, this.onApplyObservable = new uR.b, this.onBeforeRenderObservable = new uR.b, this.onAfterRenderObservable = new uR.b, this.YH = new uR.b, LR();
            let BR, lR = 1,
              pR = null;
            if (qR && !Array.isArray(qR)) {
              const RR = qR;
              qR = RR.uniforms ?? null, iR = RR.samplers ?? null, lR = RR.size ?? 1, VR = RR.camera ?? null, KR = RR.samplingMode ?? 1, wR = RR.engine, eR = RR.reusable, aR = Array.isArray(RR.defines) ? RR.defines.join("\n") : RR.defines ?? null, nR = RR.textureType ?? 0, UR = RR.vertexUrl ?? "postprocess", WR = RR.indexParameters, AR = RR.blockCompilation ?? !1, CR = RR.textureFormat ?? 5, XR = RR.shaderLanguage ?? 0, pR = RR.uniformBuffers ?? null, MR = RR.extraInitializations, BR = RR.effectWrapper
            } else fR && (lR = "number" === typeof fR ? fR : {
              width: fR.width,
              height: fR.height
            });
            if (this._useExistingThinPostProcess = !!BR, this._effectWrapper = BR ?? new rR.h({
                name: JR,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: GR,
                engine: wR || VR?.jH().ke(),
                uniforms: qR,
                samplers: iR,
                uniformBuffers: pR,
                defines: aR,
                vertexUrl: UR,
                indexParameters: WR,
                blockCompilation: !0,
                shaderLanguage: XR,
                extraInitializations: void 0
              }), this.name = JR, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != VR ? (this.Z5 = VR, this._scene = VR.jH(), VR.attachPostProcess(this), this._engine = this._scene.ke(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : wR && (this._engine = wR, this._engine.postProcesses.push(this)), this._options = lR, this.renderTargetSamplingMode = KR || 1, this._reusable = eR || !1, this._textureType = nR, this._textureFormat = CR, this._shaderLanguage = XR || 0, this._samplers = iR || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = GR, this._vertexUrl = UR, this._parameters = qR || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = pR || [], this._indexParameters = WR, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const JR = [];
              this._gatherImports(this._engine.isWebGPU && !RR.ForceGLSL, JR), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(AR, aR, MR, JR)
            }
          }
          _gatherImports() {
            let RR = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? RR.push(Promise.all([GR.e(681).then((() => GR(64265)))])) : RR.push(Promise.all([GR.e(671).then((() => GR(64146)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          ke() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(RR) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = RR, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new tR.f(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              yR = arguments.length > 3 ? arguments[3] : void 0,
              tR = arguments.length > 4 ? arguments[4] : void 0,
              uR = arguments.length > 5 ? arguments[5] : void 0,
              ZR = arguments.length > 6 ? arguments[6] : void 0,
              qR = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(RR, JR, GR, yR, tR, uR, ZR, qR), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(RR, JR) {
            let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let tR = 0; tR < this._textureCache.length; tR++)
              if (this._textureCache[tR].texture.width === RR.width && this._textureCache[tR].texture.height === RR.height && this._textureCache[tR].postProcessChannel === GR && this._textureCache[tR].texture._generateDepthBuffer === JR.generateDepthBuffer && this._textureCache[tR].texture.samples === JR.samples) return this._textureCache[tR].texture;
            const yR = this._engine.createRenderTargetTexture(RR, JR);
            return this._textureCache.push({
              texture: yR,
              postProcessChannel: GR,
              lastUsedRenderId: -1
            }), yR
          }
          _flushTextureCache() {
            const RR = this._renderId;
            for (let JR = this._textureCache.length - 1; JR >= 0; JR--)
              if (RR - this._textureCache[JR].lastUsedRenderId > 100) {
                let RR = !1;
                for (let GR = 0; GR < this._textures.length; GR++)
                  if (this._textures.data[GR] === this._textureCache[JR].texture) {
                    RR = !0;
                    break
                  } RR || (this._textureCache[JR].texture.dispose(), this._textureCache.splice(JR, 1))
              }
          }
          resize(RR, JR) {
            let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = RR, this.height = JR;
            let uR = null;
            if (GR)
              for (let iR = 0; iR < GR._postProcesses.length; iR++)
                if (null !== GR._postProcesses[iR]) {
                  uR = GR._postProcesses[iR];
                  break
                } const ZR = {
                width: this.width,
                height: this.height
              },
              qR = {
                generateMipMaps: yR,
                generateDepthBuffer: tR || uR === this,
                generateStencilBuffer: (tR || uR === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(ZR, qR, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(ZR, qR, 1)), this._texelSize.VJR(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let RR;
            if (this._shareOutputWithPostProcess) RR = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) RR = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let JR;
              RR = this.inputTexture;
              for (let GR = 0; GR < this._textureCache.length; GR++)
                if (this._textureCache[GR].texture === RR) {
                  JR = this._textureCache[GR];
                  break
                } JR && (JR.lastUsedRenderId = this._renderId)
            }
            return RR
          }
          activate(RR) {
            let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              GR = arguments.length > 2 ? arguments[2] : void 0;
            const yR = null === RR || void 0 !== RR.cameraRigMode ? RR || this.Z5 : null,
              tR = yR?.jH() ?? RR,
              uR = tR.ke(),
              ZR = uR.getCaps().maxTextureSize,
              qR = (JR ? JR.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              iR = (JR ? JR.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let fR = this._options.width || qR,
              VR = this._options.height || iR;
            const KR = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let rR = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const RR = uR.currentViewport;
                RR && (fR *= RR.width, VR *= RR.height)
              }(KR || this.alwaysForcePOT) && (this._options.width || (fR = uR.needPOTTextures ? (0, wR.e)(fR, ZR, this.scaleMode) : fR), this._options.height || (VR = uR.needPOTTextures ? (0, wR.e)(VR, ZR, this.scaleMode) : VR)), this.width === fR && this.height === VR && (rR = this._getTarget()) || this.resize(fR, VR, yR, KR, GR), this._textures.forEach((RR => {
                RR.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(RR, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return rR || (rR = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.VJR(qR / fR, iR / VR), this._engine.bindFramebuffer(rR, 0, qR, iR, this.forceFullscreenViewport)) : (this._scaleRatio.VJR(1, 1), this._engine.bindFramebuffer(rR, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(yR), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : tR.clearColor, tR._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), rR
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
            let RR;
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.ke().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), RR = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", RR?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
          }
          _disposeTextureCache() {
            for (let RR = this._textureCache.length - 1; RR >= 0; RR--) this._textureCache[RR].texture.dispose();
            this._textureCache.length = 0
          }
          setPrePassRenderer(RR) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = RR.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
          }
          dispose(RR) {
            let JR;
            if (RR = RR || this.Z5, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (JR = this._parentContainer.postProcesses.indexOf(this), JR > -1 && this._parentContainer.postProcesses.splice(JR, 1), this._parentContainer = null), JR = this._engine.postProcesses.indexOf(this), -1 !== JR && this._engine.postProcesses.splice(JR, 1), this.YH.notifyObservers(), RR) {
              if (RR.detachPostProcess(this), JR = RR._postProcesses.indexOf(this), 0 === JR && RR._postProcesses.length > 0) {
                const RR = this.Z5._getFirstPostProcess();
                RR && RR.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const RR = fR.c.Serialize(this),
              JR = this.getCamera() || this._scene && this._scene.activeCamera;
            return RR.customType = "BABYLON." + this.getClassName(), RR.cameraId = JR ? JR.id : null, RR.reusable = this._reusable, RR.textureType = this._textureType, RR.fragmentUrl = this._fragmentUrl, RR.parameters = this._parameters, RR.samplers = this._samplers, RR.uniformBuffers = this._uniformBuffers, RR.options = this._options, RR.defines = this._postProcessDefines, RR.textureFormat = this._textureFormat, RR.vertexUrl = this._vertexUrl, RR.indexParameters = this._indexParameters, RR
          }
          clone() {
            const JR = this.serialize();
            JR._engine = this._engine, JR.cameraId = null;
            const GR = RR.Parse(JR, this._scene, "");
            return GR ? (GR.onActivateObservable = this.onActivateObservable.clone(), GR.onSizeChangedObservable = this.onSizeChangedObservable.clone(), GR.onApplyObservable = this.onApplyObservable.clone(), GR.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), GR.onAfterRenderObservable = this.onAfterRenderObservable.clone(), GR._prePassEffectConfiguration = this._prePassEffectConfiguration, GR) : null
          }
          static Parse(RR, JR, GR) {
            const yR = (0, VR.e)(RR.customType);
            if (!yR || !yR._Parse) return null;
            const tR = JR ? JR.getCameraById(RR.cameraId) : null;
            return yR._Parse(RR, tR, JR, GR)
          }
          static _Parse(JR, GR, yR, tR) {
            return fR.c.Parse((() => new RR(JR.name, JR.fragmentUrl, JR.parameters, JR.samplers, JR.options, GR, JR.renderTargetSamplingMode, JR._engine, JR.reusable, JR.defines, JR.textureType, JR.vertexUrl, JR.indexParameters, !1, JR.textureFormat)), JR, yR, tR)
          }
        }, (() => {
          const GR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          JR = [(0, iR.H)()], qR = [(0, iR.H)()], KR = [(0, iR.H)()], eR = [(0, iR.H)()], aR = [(0, iR.H)()], nR = [(0, iR.m)()], UR = [(0, iR.H)()], WR = [(0, iR.H)()], AR = [(0, iR.H)()], CR = [(0, iR.H)()], XR = [(0, iR.H)()], MR = [(0, iR.H)()], BR = [(0, iR.H)()], lR = [(0, iR.H)()], pR = [(0, iR.H)("samples")], gR = [(0, iR.H)()], (0, yR.l)(RR, null, qR, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: RR => "name" in RR,
              get: RR => RR.name
            },
            metadata: GR
          }, null, bR), (0, yR.l)(RR, null, AR, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: RR => "alphaMode" in RR,
              get: RR => RR.alphaMode
            },
            metadata: GR
          }, null, bR), (0, yR.l)(null, null, JR, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: RR => "uniqueId" in RR,
              get: RR => RR.uniqueId,
              set: (RR, JR) => {
                RR.uniqueId = JR
              }
            },
            metadata: GR
          }, vR, OR), (0, yR.l)(null, null, KR, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: RR => "width" in RR,
              get: RR => RR.width,
              set: (RR, JR) => {
                RR.width = JR
              }
            },
            metadata: GR
          }, xR, NR), (0, yR.l)(null, null, eR, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: RR => "height" in RR,
              get: RR => RR.height,
              set: (RR, JR) => {
                RR.height = JR
              }
            },
            metadata: GR
          }, DR, HR), (0, yR.l)(null, null, aR, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: RR => "renderTargetSamplingMode" in RR,
              get: RR => RR.renderTargetSamplingMode,
              set: (RR, JR) => {
                RR.renderTargetSamplingMode = JR
              }
            },
            metadata: GR
          }, oR, cR), (0, yR.l)(null, null, nR, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: RR => "clearColor" in RR,
              get: RR => RR.clearColor,
              set: (RR, JR) => {
                RR.clearColor = JR
              }
            },
            metadata: GR
          }, PR, IR), (0, yR.l)(null, null, UR, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: RR => "autoClear" in RR,
              get: RR => RR.autoClear,
              set: (RR, JR) => {
                RR.autoClear = JR
              }
            },
            metadata: GR
          }, mR, zR), (0, yR.l)(null, null, WR, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: RR => "forceAutoClearInAlphaMode" in RR,
              get: RR => RR.forceAutoClearInAlphaMode,
              set: (RR, JR) => {
                RR.forceAutoClearInAlphaMode = JR
              }
            },
            metadata: GR
          }, SR, jR), (0, yR.l)(null, null, CR, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: RR => "alphaConstants" in RR,
              get: RR => RR.alphaConstants,
              set: (RR, JR) => {
                RR.alphaConstants = JR
              }
            },
            metadata: GR
          }, dR, ER), (0, yR.l)(null, null, XR, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: RR => "enablePixelPerfectMode" in RR,
              get: RR => RR.enablePixelPerfectMode,
              set: (RR, JR) => {
                RR.enablePixelPerfectMode = JR
              }
            },
            metadata: GR
          }, YR, kR), (0, yR.l)(null, null, MR, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: RR => "forceFullscreenViewport" in RR,
              get: RR => RR.forceFullscreenViewport,
              set: (RR, JR) => {
                RR.forceFullscreenViewport = JR
              }
            },
            metadata: GR
          }, QR, FR), (0, yR.l)(null, null, BR, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: RR => "scaleMode" in RR,
              get: RR => RR.scaleMode,
              set: (RR, JR) => {
                RR.scaleMode = JR
              }
            },
            metadata: GR
          }, TR, sR), (0, yR.l)(null, null, lR, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: RR => "alwaysForcePOT" in RR,
              get: RR => RR.alwaysForcePOT,
              set: (RR, JR) => {
                RR.alwaysForcePOT = JR
              }
            },
            metadata: GR
          }, hR, RJ), (0, yR.l)(null, null, pR, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: RR => "_samples" in RR,
              get: RR => RR._samples,
              set: (RR, JR) => {
                RR._samples = JR
              }
            },
            metadata: GR
          }, JJ, GJ), (0, yR.l)(null, null, gR, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: RR => "adaptScaleToCurrentViewport" in RR,
              get: RR => RR.adaptScaleToCurrentViewport,
              set: (RR, JR) => {
                RR.adaptScaleToCurrentViewport = JR
              }
            },
            metadata: GR
          }, yJ, tJ), GR && Object.defineProperty(RR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: GR
          })
        })(), RR
      })(),
      aR = !1;

    function LR() {
      aR || (aR = !0, KR.c.prototype.setTextureFromPostProcess = function(RR, JR, GR) {
        let yR = null;
        JR && (JR._forcedOutputTexture ? yR = JR._forcedOutputTexture : JR._textures.data[JR._currentRenderTextureInd] && (yR = JR._textures.data[JR._currentRenderTextureInd])), this._bindTexture(RR, yR?.texture ?? null, GR)
      }, KR.c.prototype.setTextureFromPostProcessOutput = function(RR, JR, GR) {
        this._bindTexture(RR, JR?._outputTexture?.texture ?? null, GR)
      }, qR.d.prototype.setTextureFromPostProcess = function(RR, JR) {
        this._engine.setTextureFromPostProcess(this._samplers[RR], JR, RR)
      }, qR.d.prototype.setTextureFromPostProcessOutput = function(RR, JR) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[RR], JR, RR)
      }, (0, VR.f)("BABYLON.PostProcess", eR))
    }
  },
  53852: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR,
      d: () => uR
    });
    var yR = GR(53825),
      tR = GR(38224);
    class uR extends yR.h {
      _gatherImports(RR, JR) {
        RR ? (this._webGPUReady = !0, JR.push(Promise.all([GR.e(688).then((() => GR(64317)))]))) : JR.push(Promise.all([GR.e(689).then((() => GR(64320)))])), super._gatherImports(RR, JR)
      }
      constructor(RR) {
        let JR = arguments.length > 2 ? arguments[2] : void 0;
        const GR = {
          name: RR,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || tR.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: uR.FragmentUrl,
          ...JR
        };
        GR.engine || (GR.engine = tR.c.LastCreatedEngine), super(GR)
      }
    }
    uR.FragmentUrl = "pass";
    class ZR extends yR.h {
      _gatherImports(RR, JR) {
        RR ? (this._webGPUReady = !0, JR.push(Promise.all([GR.e(690).then((() => GR(64324)))]))) : JR.push(Promise.all([GR.e(691).then((() => GR(64332)))])), super._gatherImports(RR, JR)
      }
      constructor(RR) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: RR,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || tR.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: ZR.FragmentUrl,
          defines: "#define POSITIVEX"
        }), this._face = 0
      }
      get face() {
        return this._face
      }
      set face(RR) {
        if (!(RR < 0 || RR > 5)) switch (this._face = RR, this._face) {
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
    ZR.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);