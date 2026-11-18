export const id = 291;
export const ids = [291];
export const modules = {
  40527: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => xJ
    });
    var FJ = ZJ(36200),
      UJ = ZJ(36174),
      eJ = ZJ(39243),
      XJ = ZJ(38924),
      AJ = ZJ(38729),
      qJ = ZJ(37660),
      jJ = ZJ(38907),
      YJ = ZJ(38929),
      hJ = ZJ(36183),
      DJ = ZJ(38689),
      sJ = ZJ(38890),
      nJ = ZJ(38967);
    class GJ {
      get renderList() {
        return this._renderList
      }
      set renderList(JJ) {
        this._renderList !== JJ && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), JJ && (this._unObserveRenderList = (0, hJ.k)(JJ, this._renderListHasChanged)), this._renderList = JJ)
      }
      get disableImageProcessing() {
        return this._disableImageProcessing
      }
      set disableImageProcessing(JJ) {
        JJ !== this._disableImageProcessing && (this._disableImageProcessing = JJ, this._scene.markAllMaterialsAsDirty(64))
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(JJ) {
        this._disableDepthPrePass = JJ, this._renderingManager.disableDepthPrePass = JJ
      }
      get name() {
        return this._name
      }
      set name(JJ) {
        if (this._name !== JJ) {
          if (this._name = JJ, this._sceneUBOs)
            for (let JJ = 0; JJ < this._sceneUBOs.length; ++JJ) this._sceneUBOs[JJ].name = `Scene ubo #${JJ} for ${this.name}`;
          if (this._scene)
            for (let JJ = 0; JJ < this._renderPassIds.length; ++JJ) {
              const cJ = this._renderPassIds[JJ];
              this._engine._renderPassNames[cJ] = `${this._name}#${JJ}`
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
      setMaterialForRendering(JJ, cJ) {
        let ZJ;
        ZJ = Array.isArray(JJ) ? JJ : [JJ];
        for (let FJ = 0; FJ < ZJ.length; ++FJ)
          for (let JJ = 0; JJ < this.options.numPasses; ++JJ) {
            let UJ = ZJ[FJ];
            ZJ[FJ].Iy && (UJ = ZJ[FJ].uFJ), UJ.setMaterialForRenderPass(this._renderPassIds[JJ], void 0 !== cJ ? Array.isArray(cJ) ? cJ[JJ] : cJ : void 0)
          }
      }
      _freezeActiveMeshes(JJ) {
        this._freezeActiveMeshesCancel = (0, DJ.h)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, JJ)
            for (let JJ = 0; JJ < this._activeMeshes.length; JJ++) this._activeMeshes.data[JJ]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((JJ, cJ) => {
          this._freezeActiveMeshesCancel = null, cJ ? (qJ.c.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), JJ && qJ.c.Error(JJ)) : (qJ.c.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), JJ && (qJ.c.Error(JJ), JJ.stack && qJ.c.Error(JJ.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let JJ = 0; JJ < this._activeMeshes.length; JJ++) this._activeMeshes.data[JJ]._unFreeze();
        this._isFrozen = !1
      }
      constructor(JJ, cJ, ZJ) {
        this._unObserveRenderList = null, this._renderListHasChanged = (JJ, cJ) => {
          const ZJ = this._renderList ? this._renderList.length : 0;
          if (0 === cJ && ZJ > 0 || 0 === ZJ)
            for (const FJ of this._scene.meshes) FJ._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new FJ.c, this.onAfterRenderObservable = new FJ.c, this.onBeforeRenderingManagerRenderObservable = new FJ.c, this.onAfterRenderingManagerRenderObservable = new FJ.c, this.onInitRenderingObservable = new FJ.c, this.onFinishRenderingObservable = new FJ.c, this.onFastPathRenderObservable = new FJ.c, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new sJ.c(256), this._activeBoundingBoxes = new sJ.c(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = JJ, this._scene = cJ, this._engine = this._scene.gn(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...ZJ
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new YJ.b(cJ), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const JJ of this._scene.lights) JJ.getTypeID() === nJ.d.LIGHTTYPEID_CLUSTERED_CONTAINER && JJ.isSupported && JJ._updateBatches(this.activeCamera).render()
        })), this._scene.addObjectRenderer(this)
      }
      _releaseRenderPassId() {
        for (let JJ = 0; JJ < this.options.numPasses; ++JJ) this._engine.releaseRenderPassId(this._renderPassIds[JJ]);
        this._renderPassIds.length = 0
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let JJ = 0; JJ < this.options.numPasses; ++JJ) this._renderPassIds[JJ] = this._engine.createRenderPassId(`${this.name}#${JJ}`)
      }
      _createSceneUBO(JJ, cJ) {
        const ZJ = this._scene.gn(),
          FJ = new jJ.e(ZJ, void 0, cJ, JJ, void 0, !1);
        return FJ.addUniform("viewProjection", 16), cJ && FJ.addUniform("viewProjectionR", 16), FJ.addUniform("view", 16), FJ.addUniform("projection", 16), FJ.addUniform("vEyePosition", 4), FJ.addUniform("inverseProjection", 16), FJ
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const JJ = this._engine._currentRenderTarget,
          cJ = !(!JJ || !JJ.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const JJ = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${JJ} for ${this.name}`, cJ)), this._sceneUBOIsMultiview.push(cJ)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== cJ && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, cJ), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = cJ);
        const ZJ = this._sceneUBOs[this._currentSceneUBOIndex++];
        return ZJ.unbindEffect(), ZJ
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1
      }
      get refreshRate() {
        return this._refreshRate
      }
      set refreshRate(JJ) {
        this._refreshRate = JJ, this.resetRefreshCounter()
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1))
      }
      isReadyForRendering(JJ, cJ) {
        this.prepareRenderList(), this.initRender(JJ, cJ);
        const ZJ = this._checkReadiness();
        return this.finishRender(), ZJ
      }
      prepareRenderList() {
        const JJ = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let cJ = 0; cJ < this._waitingRenderList.length; cJ++) {
              const ZJ = this._waitingRenderList[cJ],
                FJ = JJ.getMeshById(ZJ);
              FJ && this.renderList.push(FJ)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const JJ = this._scene.meshes;
          for (let cJ = 0; cJ < JJ.length; cJ++) {
            const ZJ = JJ[cJ];
            this.renderListPredicate(ZJ) && this.renderList.push(ZJ)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(JJ, cJ) {
        const ZJ = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), ZJ && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(ZJ.getViewMatrix(), ZJ.getProjectionMatrix(!0)), this._scene._activeCamera = ZJ, this._engine.setViewport(ZJ.rigParent ? ZJ.rigParent.viewport : ZJ.viewport, JJ, cJ)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const JJ = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (JJ.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), JJ._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== JJ.activeCamera && JJ.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), JJ.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZJ = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[JJ], this.onBeforeRenderObservable.notifyObservers(JJ);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(JJ);
        else {
          const cJ = this._prepareRenderingManager(JJ),
            ZJ = this._scene.getOutlineRenderer?.(),
            FJ = ZJ?.enabled;
          ZJ && (ZJ.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(JJ), this._renderingManager.render(this.customRenderFunction, cJ, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(JJ), ZJ && (ZJ.enabled = FJ)
        }
        cJ || this.onAfterRenderObservable.notifyObservers(JJ), this._engine.currentRenderPassId = ZJ
      }
      _checkReadiness() {
        const JJ = this._scene,
          cJ = this._engine.currentRenderPassId;
        let ZJ = !0;
        JJ.getViewMatrix() || JJ.updateTransformMatrix();
        const FJ = this.options.numPasses;
        for (let UJ = 0; UJ < FJ && ZJ; UJ++) {
          const cJ = this.renderList ? this.renderList : JJ.frameGraph ? JJ.meshes : JJ.getActiveMeshes().data,
            eJ = this.renderList || JJ.frameGraph ? cJ.length : JJ.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[UJ], this.onBeforeRenderObservable.notifyObservers(UJ);
          let XJ = null,
            AJ = eJ;
          this.getCustomRenderList && (XJ = this.getCustomRenderList(UJ, cJ, eJ), XJ && (AJ = XJ.length)), XJ || (XJ = cJ), this.options.doNotChangeAspectRatio || JJ.updateTransformMatrix(!0);
          for (let JJ = 0; JJ < AJ && ZJ; ++JJ) {
            const cJ = XJ[JJ];
            if (!cJ.isEnabled() || cJ.isBlocked || !cJ.isVisible || !cJ.aE) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(cJ, this.refreshRate, !0)) {
                ZJ = !1;
                continue
              }
            } else if (!cJ.isReady(!0)) {
              ZJ = !1;
              continue
            }
            let FJ = cJ._edgesRenderer,
              UJ = cJ.hasThinInstances;
            if (cJ.Iy) {
              const JJ = cJ.uFJ;
              JJ.edgesShareWithInstances && JJ._edgesRenderer?.isEnabled && (FJ = JJ._edgesRenderer, UJ = !0)
            } else cJ.CFJ && cJ.edgesShareWithInstances && (UJ = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && FJ?.isEnabled && (FJ.isReady(UJ) || (ZJ = !1))
          }
          if (this.renderParticles && JJ.particlesEnabled) {
            const cJ = this.particleSystemList || JJ.lE;
            for (const JJ of cJ) JJ.isReady() || (ZJ = !1)
          }
          if (this.renderSprites && JJ.spritesEnabled) {
            const cJ = this.spriteManagerList || JJ.spriteManagers;
            if (cJ)
              for (const FJ of cJ) JJ.activeCamera && 0 === (FJ.layerMask & JJ.activeCamera.layerMask) || FJ.isReady && !FJ.isReady() && (ZJ = !1)
          }
          this.onAfterRenderObservable.notifyObservers(UJ), FJ > 1 && (JJ.incrementRenderId(), JJ.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = cJ, ZJ
      }
      _prepareRenderingManager() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZJ = this._scene;
        let FJ, UJ, eJ = null;
        const XJ = this.renderList ? this.renderList : ZJ.frameGraph ? ZJ.meshes : ZJ.getActiveMeshes().data,
          AJ = this.renderList || ZJ.frameGraph ? XJ.length : ZJ.getActiveMeshes().length;
        if (this.getCustomRenderList && (eJ = this.getCustomRenderList(JJ, XJ, AJ)), eJ) FJ = eJ.length, UJ = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !cJ && !this._engine.isWebGPU) return XJ;
          this._defaultRenderListPrepared = !0, eJ = XJ, FJ = AJ, UJ = !this.renderList || this.forceLayerMaskCheck
        }
        const qJ = ZJ.activeCamera,
          jJ = this.cameraForLOD ?? qJ,
          YJ = ZJ.getBoundingBoxRenderer?.();
        if (ZJ._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && YJ) {
            YJ.reset();
            for (let JJ = 0; JJ < this._activeBoundingBoxes.length; JJ++) {
              const cJ = this._activeBoundingBoxes.data[JJ];
              YJ.renderList.push(cJ)
            }
          }
          return eJ
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), YJ && YJ.reset(), this.renderMeshes) {
          const JJ = ZJ.getRenderId(),
            cJ = ZJ.getFrameId();
          for (let XJ = 0; XJ < FJ; XJ++) {
            const FJ = eJ[XJ];
            if (FJ && !FJ.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(FJ, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!FJ.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let eJ, XJ;
              if (jJ) {
                const JJ = FJ._internalAbstractMeshDataInfo._currentLOD.get(jJ);
                JJ && JJ[1] === cJ ? eJ = JJ[0] : (eJ = ZJ.customLODSelector ? ZJ.customLODSelector(FJ, jJ) : FJ.getLOD(jJ), JJ ? (JJ[0] = eJ, JJ[1] = cJ) : FJ._internalAbstractMeshDataInfo._currentLOD.set(jJ, [eJ, cJ]))
              } else eJ = FJ;
              if (!eJ) continue;
              if (eJ !== FJ && 0 !== eJ.billboardMode && eJ.computeWorldMatrix(), eJ._preActivateForIntermediateRendering(JJ), XJ = !(!UJ || !qJ) && 0 === (FJ.layerMask & qJ.layerMask), FJ.isEnabled() && FJ.isVisible && FJ.aE && !XJ) {
                if (this._activeMeshes.push(FJ), eJ._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, eJ !== FJ && eJ._activate(JJ, !0), this.enableBoundingBoxRendering && YJ && YJ._preActiveMesh(FJ), FJ._activate(JJ, !0) && FJ.aE.length) {
                  FJ.Iy ? FJ._internalAbstractMeshDataInfo._actAsRegularMesh && (eJ = FJ) : eJ._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, eJ._internalAbstractMeshDataInfo._isActiveIntermediate = !0, ZJ._prepareSkeleton(eJ);
                  for (let JJ = 0; JJ < eJ.aE.length; JJ++) {
                    const cJ = eJ.aE[JJ];
                    this.enableBoundingBoxRendering && YJ && YJ._evaluateSubMesh(FJ, cJ), this._renderingManager.dispatch(cJ, eJ)
                  }
                }
                FJ._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && YJ && cJ)
          for (let hJ = 0; hJ < YJ.renderList.length; hJ++) {
            const JJ = YJ.renderList.data[hJ];
            this._activeBoundingBoxes.push(JJ)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const JJ = this.particleSystemList || ZJ.lE;
          for (let cJ = 0; cJ < JJ.length; cJ++) {
            const ZJ = JJ[cJ],
              FJ = ZJ.emitter;
            ZJ.isStarted() && FJ && (!FJ.position || FJ.isEnabled()) && this._renderingManager.dispatchParticles(ZJ)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return eJ
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(JJ, cJ, ZJ, FJ)
      }
      setRenderingAutoClearDepthStencil(JJ, cJ) {
        let ZJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          FJ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(JJ, cJ, ZJ, FJ), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const JJ = new GJ(this.name, this._scene, this.options);
        return this.renderList && (JJ.renderList = this.renderList.slice(0)), JJ
      }
      dispose() {
        const JJ = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          cJ = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let ZJ = 0; ZJ < cJ; ZJ++) {
          const cJ = JJ[ZJ];
          cJ && void 0 !== cJ.getMaterialForRenderPass(this.renderPassId) && cJ.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const ZJ of this._sceneUBOs) ZJ.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === GJ.REFRESHRATE_RENDER_ONCE && (this.refreshRate = GJ.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    GJ.REFRESHRATE_RENDER_ONCE = 0, GJ.REFRESHRATE_RENDER_ONEVERYFRAME = 1, GJ.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var fJ = ZJ(38677);
    class xJ extends eJ.i {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate
      }
      set renderListPredicate(JJ) {
        this._objectRenderer.renderListPredicate = JJ
      }
      get renderList() {
        return this._objectRenderer.renderList
      }
      set renderList(JJ) {
        this._objectRenderer.renderList = JJ
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList
      }
      set particleSystemList(JJ) {
        this._objectRenderer.particleSystemList = JJ
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList
      }
      set getCustomRenderList(JJ) {
        this._objectRenderer.getCustomRenderList = JJ
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles
      }
      set renderParticles(JJ) {
        this._objectRenderer.renderParticles = JJ
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites
      }
      set renderSprites(JJ) {
        this._objectRenderer.renderSprites = JJ
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering
      }
      set enableBoundingBoxRendering(JJ) {
        this._objectRenderer.enableBoundingBoxRendering = JJ
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering
      }
      set enableOutlineRendering(JJ) {
        this._objectRenderer.enableOutlineRendering = JJ
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck
      }
      set forceLayerMaskCheck(JJ) {
        this._objectRenderer.forceLayerMaskCheck = JJ
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera
      }
      set activeCamera(JJ) {
        this._objectRenderer.activeCamera = JJ
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD
      }
      set cameraForLOD(JJ) {
        this._objectRenderer.cameraForLOD = JJ
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing
      }
      set disableImageProcessing(JJ) {
        this._objectRenderer.disableImageProcessing = JJ
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction
      }
      set customIsReadyFunction(JJ) {
        this._objectRenderer.customIsReadyFunction = JJ
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction
      }
      set customRenderFunction(JJ) {
        this._objectRenderer.customRenderFunction = JJ
      }
      get postProcesses() {
        return this._postProcesses
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled
      }
      set onAfterUnbind(JJ) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(JJ)
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable
      }
      set onBeforeRender(JJ) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(JJ)
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable
      }
      set onAfterRender(JJ) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(JJ)
      }
      set onClear(JJ) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(JJ)
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList
      }
      set _waitingRenderList(JJ) {
        this._objectRenderer._waitingRenderList = JJ
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
      setMaterialForRendering(JJ, cJ) {
        this._objectRenderer.setMaterialForRendering(JJ, cJ)
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
      set boundingBoxSize(JJ) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(JJ)) return;
        this._boundingBoxSize = JJ;
        const cJ = this.Qy();
        cJ && cJ.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(JJ, cJ, ZJ) {
        let XJ, AJ, jJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          YJ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          hJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          DJ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          sJ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : eJ.i.TRILINEAR_SAMPLINGMODE,
          nJ = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          fJ = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          xJ = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          rJ = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          vJ = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          mJ = arguments.length > 13 ? arguments[13] : void 0,
          QJ = arguments.length > 14 ? arguments[14] : void 0,
          EJ = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          VJ = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          KJ = !0,
          yJ = !1;
        if ("object" === typeof jJ) {
          const JJ = jJ;
          jJ = !!JJ.generateMipMaps, YJ = JJ.doNotChangeAspectRatio ?? !0, hJ = JJ.type ?? 0, DJ = !!JJ.isCube, sJ = JJ.samplingMode ?? eJ.i.TRILINEAR_SAMPLINGMODE, nJ = JJ.generateDepthBuffer ?? !0, fJ = !!JJ.generateStencilBuffer, xJ = !!JJ.isMulti, rJ = JJ.format ?? 5, vJ = !!JJ.delayAllocation, mJ = JJ.samples, QJ = JJ.creationFlags, EJ = !!JJ.noColorAttachment, VJ = !!JJ.useSRGBBuffer, XJ = JJ.colorAttachment, KJ = JJ.gammaSpace ?? KJ, AJ = JJ.existingObjectRenderer, yJ = !!JJ.enableClusteredLights
        }
        if (super(null, ZJ, !jJ, void 0, sJ, void 0, void 0, void 0, void 0, rJ), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new FJ.c, this.onAfterUnbindObservable = new FJ.c, this.onClearObservable = new FJ.c, this.onResizeObservable = new FJ.c, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = UJ.j.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(ZJ = this.Qy())) return;
        const SJ = this.Qy().gn();
        this._gammaSpace = KJ, this._coordinatesMode = eJ.i.PROJECTION_MODE, this.name = JJ, this.isRenderTarget = !0, this._initialSizeParameter = cJ, this._dontDisposeObjectRenderer = !!AJ, this._processSizeParameter(cJ), this._objectRenderer = AJ ?? new GJ(JJ, ZJ, {
          numPasses: DJ ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: YJ,
          enableClusteredLights: yJ
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const JJ = this._scene;
          if (!this._disableEngineStages)
            for (const cJ of JJ._beforeRenderTargetClearStage) cJ.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(SJ) : this.skipInitialClear || SJ.clear(this.clearColor ?? JJ.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || JJ.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const cJ of JJ._beforeRenderTargetDrawStage) cJ.action(this, this._currentFaceIndex, this._currentLayer);
          SJ._debugPushGroup && SJ._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (SJ._debugPopGroup && SJ._debugPopGroup(), !this._disableEngineStages)
            for (const cJ of this._scene._afterRenderTargetDrawStage) cJ.action(this, this._currentFaceIndex, this._currentLayer);
          const JJ = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const cJ of this._scene._afterRenderTargetPostProcessStage) cJ.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = JJ), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), SJ) : qJ.c.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(SJ) : this.skipInitialClear || SJ.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = SJ.onResizeObservable.add((() => {})), this._generateMipMaps = !!jJ, this._doNotChangeAspectRatio = YJ, xJ || (this._renderTargetOptions = {
          generateMipMaps: jJ,
          type: hJ,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: nJ,
          generateStencilBuffer: fJ,
          samples: mJ,
          creationFlags: QJ,
          noColorAttachment: EJ,
          useSRGBBuffer: VJ,
          colorAttachment: XJ,
          label: this.name
        }, this.samplingMode === eJ.i.NEAREST_SAMPLINGMODE && (this.wrapU = eJ.i.CLAMP_ADDRESSMODE, this.wrapV = eJ.i.CLAMP_ADDRESSMODE), vJ || (DJ ? (this._renderTarget = ZJ.gn().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = eJ.i.INVCUBIC_MODE, this._textureMatrix = UJ.b.Identity()) : this._renderTarget = ZJ.gn().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== mJ && (this.samples = mJ)))
      }
      createDepthStencilTexture() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          eJ = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(JJ, cJ, ZJ, FJ, UJ, eJ)
      }
      _processSizeParameter(JJ) {
        if (JJ.ratio) {
          this._sizeRatio = JJ.ratio;
          const cJ = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(cJ.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(cJ.getRenderHeight(), this._sizeRatio)
          }
        } else this._size = JJ
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples
      }
      set samples(JJ) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(JJ))
      }
      addPostProcess(JJ) {
        if (!this._postProcessManager) {
          const JJ = this.Qy();
          if (!JJ) return;
          this._postProcessManager = new XJ.d(JJ), this._postProcesses = new Array
        }
        this._postProcesses.push(JJ), this._postProcesses[0].autoClear = !1
      }
      clearPostProcesses() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (JJ)
            for (const JJ of this._postProcesses) JJ.dispose();
          this._postProcesses = []
        }
      }
      removePostProcess(JJ) {
        if (!this._postProcesses) return;
        const cJ = this._postProcesses.indexOf(JJ); - 1 !== cJ && (this._postProcesses.splice(cJ, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter()
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate
      }
      set refreshRate(JJ) {
        this._objectRenderer.refreshRate = JJ
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
        const JJ = this._size.layers;
        if (JJ) return JJ;
        const cJ = this._size.depth;
        return cJ || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(JJ) {
        const cJ = Math.max(1, this.getRenderSize() * JJ);
        this.resize(cJ)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(JJ) {
        const cJ = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const ZJ = this.Qy();
        ZJ && (this._processSizeParameter(JJ), this._renderTarget = cJ ? ZJ.gn().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : ZJ.gn().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(JJ, cJ)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => ZJ(40538))).then((JJ => this._dumpTools = JJ))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const JJ = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), JJ
      }
      _render() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZJ = this.Qy();
        if (!ZJ) return;
        void 0 !== this.useCameraPostProcesses && (JJ = this.useCameraPostProcesses);
        const FJ = ZJ.gn();
        if (FJ._debugPushGroup && FJ._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let UJ = 0; UJ < 6; UJ++) this._renderToTarget(UJ, JJ, cJ), ZJ.incrementRenderId(), ZJ.resetCachedMaterial();
          else this._renderToTarget(0, JJ, cJ);
        else
          for (let UJ = 0; UJ < this.getRenderLayers(); UJ++) this._renderToTarget(0, JJ, cJ, UJ), ZJ.incrementRenderId(), ZJ.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), FJ._debugPopGroup && FJ._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(JJ, cJ) {
        const ZJ = JJ * cJ,
          FJ = (0, AJ.h)(ZJ + 16384 / (128 + ZJ));
        return Math.min((0, AJ.c)(JJ), FJ)
      }
      _bindFrameBuffer() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZJ = this.Qy();
        if (!ZJ) return;
        const FJ = ZJ.gn();
        this._renderTarget && FJ.bindFramebuffer(this._renderTarget, this.isCube ? JJ : void 0, void 0, void 0, this.ignoreCameraViewport, 0, cJ)
      }
      _unbindFrameBuffer(JJ, cJ) {
        this._renderTarget && JJ.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(cJ)
        }))
      }
      _prepareFrame(JJ, cJ, ZJ, FJ) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(cJ, ZJ) : FJ && JJ.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(cJ, ZJ)
      }
      _renderToTarget(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const UJ = this.Qy();
        if (!UJ) return;
        const eJ = UJ.gn();
        this._currentFaceIndex = JJ, this._currentLayer = FJ, this._currentUseCameraPostProcess = cJ, this._currentDumpForDebug = ZJ, this._prepareFrame(UJ, JJ, FJ, cJ), this._objectRenderer.render(JJ + FJ, !0), this._unbindFrameBuffer(eJ, JJ), this._texture && this.isCube && 5 === JJ && eJ.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(JJ, cJ, ZJ, FJ)
      }
      setRenderingAutoClearDepthStencil(JJ, cJ) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(JJ, cJ)
      }
      clone() {
        const JJ = this.getSize(),
          cJ = new xJ(this.name, JJ, this.Qy(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return cJ.hasAlpha = this.hasAlpha, cJ.level = this.level, cJ.coordinatesMode = this.coordinatesMode, this.renderList && (cJ.renderList = this.renderList.slice(0)), cJ
      }
      serialize() {
        if (!this.name) return null;
        const JJ = super.serialize();
        if (JJ.renderTargetSize = this.getRenderSize(), JJ.renderList = [], this.renderList)
          for (let cJ = 0; cJ < this.renderList.length; cJ++) JJ.renderList.push(this.renderList[cJ].id);
        return JJ
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.Qy().gn().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const JJ = this.Qy();
        if (!JJ) return;
        let cJ = JJ.customRenderTargets.indexOf(this);
        cJ >= 0 && JJ.customRenderTargets.splice(cJ, 1);
        for (const ZJ of JJ.cameras) cJ = ZJ.customRenderTargets.indexOf(this), cJ >= 0 && ZJ.customRenderTargets.splice(cJ, 1);
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
    xJ.REFRESHRATE_RENDER_ONCE = GJ.REFRESHRATE_RENDER_ONCE, xJ.REFRESHRATE_RENDER_ONEVERYFRAME = GJ.REFRESHRATE_RENDER_ONEVERYFRAME, xJ.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = GJ.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(xJ.prototype, "noPrePassRenderer") || Object.defineProperty(xJ.prototype, "noPrePassRenderer", (0, fJ.h)("RenderTargetTexture", "noPrePassRenderer"))
  },
  40506: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => jJ,
      i: () => YJ
    });
    var FJ = ZJ(38918),
      UJ = ZJ(37100),
      eJ = ZJ(36200),
      XJ = ZJ(38653),
      AJ = ZJ(39079);
    const qJ = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class jJ {
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qJ;
        this._fullscreenViewport = new UJ.c(0, 0, 1, 1);
        const ZJ = cJ.positions ?? qJ.positions,
          eJ = cJ.indices ?? qJ.indices;
        this.engine = JJ, this._vertexBuffers = {
          [FJ.n.PositionKind]: new FJ.n(JJ, ZJ, FJ.n.PositionKind, !1, !1, 2)
        }, this._indexBuffer = JJ.createIndexBuffer(eJ), this._indexBufferLength = eJ.length, this._onContextRestoredObserver = JJ.onContextRestoredObservable.add((() => {
          this._indexBuffer = JJ.createIndexBuffer(eJ);
          for (const JJ in this._vertexBuffers) {
            this._vertexBuffers[JJ]._rebuild()
          }
        }))
      }
      setViewport() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.engine.setViewport(JJ)
      }
      bindBuffers(JJ) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, JJ)
      }
      applyEffectWrapper(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = cJ, this.engine.stencilState.stencilTest = ZJ, this.engine.enableEffect(JJ.drawWrapper), this.bindBuffers(JJ.effect), JJ.onApplyObservable.notifyObservers({})
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
      _isRenderTargetTexture(JJ) {
        return void 0 !== JJ.renderTarget
      }
      render(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!JJ.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const ZJ = null === cJ ? null : this._isRenderTargetTexture(cJ) ? cJ.renderTarget : cJ;
        ZJ && this.engine.bindFramebuffer(ZJ), this.applyEffectWrapper(JJ), this.draw(), ZJ && this.engine.unBindFramebuffer(ZJ), this.restoreStates()
      }
      dispose() {
        const JJ = this._vertexBuffers[FJ.n.PositionKind];
        JJ && (JJ.dispose(), delete this._vertexBuffers[FJ.n.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class YJ {
      static RegisterShaderCodeProcessing(JJ, cJ) {
        cJ ? YJ._CustomShaderCodeProcessing[JJ ?? ""] = cJ : delete YJ._CustomShaderCodeProcessing[JJ ?? ""]
      }
      static _GetShaderCodeProcessing(JJ) {
        return YJ._CustomShaderCodeProcessing[JJ] ?? YJ._CustomShaderCodeProcessing[""]
      }
      get name() {
        return this.options.name
      }
      set name(JJ) {
        this.options.name = JJ
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
      set effect(JJ) {
        this._drawWrapper.effect = JJ
      }
      constructor(JJ) {
        this.alphaMode = 0, this.onEffectCreatedObservable = new eJ.c(void 0, !0), this.onApplyObservable = new eJ.c, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
          ...JJ,
          name: JJ.name || "effectWrapper",
          engine: JJ.engine,
          uniforms: JJ.uniforms || JJ.uniformNames || [],
          uniformNames: void 0,
          samplers: JJ.samplers || JJ.samplerNames || [],
          samplerNames: void 0,
          attributeNames: JJ.attributeNames || ["position"],
          uniformBuffers: JJ.uniformBuffers || [],
          defines: JJ.defines || "",
          useShaderStore: JJ.useShaderStore || !1,
          vertexUrl: JJ.vertexUrl || JJ.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: JJ.fragmentShader || "pass",
          indexParameters: JJ.indexParameters,
          blockCompilation: JJ.blockCompilation || !1,
          shaderLanguage: JJ.shaderLanguage || 0,
          onCompiled: JJ.onCompiled || void 0,
          extraInitializations: JJ.extraInitializations || void 0,
          extraInitializationsAsync: JJ.extraInitializationsAsync || void 0,
          useAsPostProcess: JJ.useAsPostProcess ?? !1,
          allowEmptySourceTexture: JJ.allowEmptySourceTexture ?? !1
        }, this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), JJ.vertexUrl || JJ.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add((() => {
          this.effect.setFloat2("scale", 1, 1)
        }))), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add((() => {
          this.bind()
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.onContextRestoredObservable.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new AJ.d(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const cJ = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, cJ, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          FJ = arguments.length > 2 ? arguments[2] : void 0,
          UJ = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, UJ && this._importPromises.push(...UJ);
        const eJ = this.options.engine.isWebGPU && !YJ.ForceGLSL;
        this._gatherImports(eJ, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(eJ && this._webGPUReady ? ZJ.e(346).then((() => ZJ(59644))) : ZJ.e(335).then((() => ZJ(59409)))), void 0 !== FJ && FJ(eJ, this._importPromises), eJ && this._webGPUReady && (this.options.shaderLanguage = 1), JJ || this.updateEffect(cJ)
      }
      updateEffect() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          FJ = arguments.length > 3 ? arguments[3] : void 0,
          UJ = arguments.length > 4 ? arguments[4] : void 0,
          eJ = arguments.length > 5 ? arguments[5] : void 0,
          AJ = arguments.length > 6 ? arguments[6] : void 0,
          qJ = arguments.length > 7 ? arguments[7] : void 0;
        const jJ = YJ._GetShaderCodeProcessing(this.name);
        if (jJ?.defineCustomBindings) {
          const FJ = cJ?.slice() ?? [];
          FJ.push(...this.options.uniforms);
          const UJ = ZJ?.slice() ?? [];
          UJ.push(...this.options.samplers), JJ = jJ.defineCustomBindings(this.name, JJ, FJ, UJ), cJ = FJ, ZJ = UJ
        }
        this.options.defines = JJ || "";
        const hJ = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let DJ;
        DJ = this.options.extraInitializationsAsync ? async () => {
          await (hJ?.()), await this.options.extraInitializationsAsync()
        }: hJ, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: AJ ?? this._shaderPath.vertex,
          fragment: qJ ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: cJ || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: ZJ || this.options.samplers,
          defines: null !== JJ ? JJ : "",
          fallbacks: null,
          onCompiled: UJ ?? this.options.onCompiled,
          onError: eJ ?? null,
          indexParameters: FJ || this.options.indexParameters,
          processCodeAfterIncludes: jJ?.processCodeAfterIncludes ? (JJ, cJ) => jJ.processCodeAfterIncludes(this.name, JJ, cJ) : null,
          processFinalCode: jJ?.processFinalCode ? (JJ, cJ) => jJ.processFinalCode(this.name, JJ, cJ) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: DJ
        }, this.options.engine) : this._drawWrapper.effect = new XJ.d(this._shaderPath, this.options.attributeNames, cJ || this.options.uniforms, ZJ || this.options.samplerNames, this.options.engine, JJ, void 0, UJ || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, DJ), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !JJ && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), YJ._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.gn().onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    YJ.ForceGLSL = !1, YJ._CustomShaderCodeProcessing = {}
  },
  40538: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      Dispose: () => rJ,
      DumpData: () => xJ,
      DumpDataAsync: () => fJ,
      DumpFramebuffer: () => GJ,
      DumpTools: () => vJ,
      EncodeImageAsync: () => nJ,
      RegisterDumpTools: () => QJ
    });
    var FJ = ZJ(38800),
      UJ = ZJ(40506),
      eJ = ZJ(38879),
      XJ = ZJ(36207),
      AJ = ZJ(36192),
      qJ = ZJ(37660),
      jJ = ZJ(38856),
      YJ = ZJ(38806);
    let hJ = null;
    async function DJ() {
      return hJ || (hJ = async function() {
        const JJ = AJ.c.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        JJ instanceof OffscreenCanvas && qJ.c.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: cJ
        } = await Promise.resolve().then((() => ZJ(38644)));
        if (!cJ.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const FJ = new cJ(JJ, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        AJ.c.Instances.pop(), AJ.c.OnEnginesDisposedObservable.add((JJ => {
          FJ && JJ !== FJ && !FJ.YZJ && 0 === AJ.c.Instances.length && rJ()
        })), FJ.getCaps().parallelShaderCompile = void 0;
        const eJ = new UJ.e(FJ),
          {
            passPixelShader: XJ
          } = await ZJ.e(354).then((() => ZJ(59703))),
          jJ = new UJ.i({
            engine: FJ,
            name: XJ.name,
            fragmentShader: XJ.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: JJ,
          dumpEngine: {
            engine: FJ,
            renderer: eJ,
            wrapper: jJ
          }
        }
      }()), await hJ
    }
    let sJ = (() => {
      var JJ;
      let cJ, ZJ = [];
      return JJ = class {
        static async EncodeImageAsync(JJ, cJ, ZJ, FJ, UJ, XJ) {
          const AJ = await DJ(),
            qJ = AJ.dumpEngine;
          qJ.engine.setSize(cJ, ZJ, !0);
          const jJ = qJ.engine.createRawTexture(JJ, cJ, ZJ, 5, !1, !UJ, 1);
          return qJ.renderer.setViewport(), qJ.renderer.applyEffectWrapper(qJ.wrapper), qJ.wrapper.effect._bindTexture("textureSampler", jJ), qJ.renderer.draw(), jJ.dispose(), await new Promise(((JJ, cJ) => {
            eJ.j.ToBlob(AJ.canvas, (ZJ => {
              ZJ ? JJ(ZJ) : cJ(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), FJ, XJ)
          }))
        }
      }, (() => {
        const UJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        cJ = [YJ.g], (0, FJ.d)(JJ, null, cJ, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: JJ => "EncodeImageAsync" in JJ,
            get: JJ => JJ.EncodeImageAsync
          },
          metadata: UJ
        }, null, ZJ), UJ && Object.defineProperty(JJ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: UJ
        }), (0, FJ.e)(JJ, ZJ)
      })(), JJ
    })();
    const nJ = sJ.EncodeImageAsync;
    async function GJ(JJ, cJ, ZJ, FJ) {
      let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        eJ = arguments.length > 5 ? arguments[5] : void 0,
        XJ = arguments.length > 6 ? arguments[6] : void 0;
      const AJ = await ZJ.readPixels(0, 0, JJ, cJ);
      xJ(JJ, cJ, new Uint8Array(AJ.buffer), FJ, UJ, eJ, !0, void 0, XJ)
    }
    async function fJ(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        UJ = arguments.length > 4 ? arguments[4] : void 0,
        AJ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        YJ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        hJ = arguments.length > 7 ? arguments[7] : void 0;
      if (ZJ instanceof Float32Array) {
        const JJ = new Uint8Array(ZJ.length);
        let cJ = ZJ.length;
        for (; cJ--;) {
          const FJ = ZJ[cJ];
          JJ[cJ] = Math.round(255 * (0, XJ.Clamp)(FJ))
        }
        ZJ = JJ
      }
      const DJ = await sJ.EncodeImageAsync(ZJ, JJ, cJ, FJ, AJ, hJ);
      void 0 !== UJ && eJ.j.DownloadBlob(DJ, UJ), DJ.type !== FJ && qJ.c.Warn(`DumpData: The requested mimeType '${FJ}' is not supported. The result has mimeType '${DJ.type}' instead.`);
      const nJ = await DJ.arrayBuffer();
      return YJ ? nJ : `data:${FJ};base64,${(0,jJ.k)(nJ)}`
    }

    function xJ(JJ, cJ, ZJ, FJ) {
      let UJ = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== UJ || FJ || (UJ = ""), fJ(JJ, cJ, ZJ, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", UJ, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((JJ => {
        FJ && FJ(JJ)
      }))
    }

    function rJ() {
      hJ && (hJ?.then((JJ => {
        JJ.canvas instanceof HTMLCanvasElement && JJ.canvas.remove(), JJ.dumpEngine && (JJ.dumpEngine.engine.dispose(), JJ.dumpEngine.renderer.dispose(), JJ.dumpEngine.wrapper.dispose())
      })), hJ = null)
    }
    const vJ = {
      DumpData: xJ,
      DumpDataAsync: fJ,
      DumpFramebuffer: GJ,
      Dispose: rJ
    };
    let mJ = !1;

    function QJ() {
      if (mJ) return;
      mJ = !0;
      eJ.j.DumpData = xJ, eJ.j.DumpDataAsync = fJ, eJ.j.DumpFramebuffer = GJ
    }
  },
  40520: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => sJ,
      f: () => nJ,
      g: () => GJ
    });
    var FJ = ZJ(39243),
      UJ = ZJ(40527),
      eJ = ZJ(38800),
      XJ = ZJ(40501),
      AJ = ZJ(38822),
      qJ = ZJ(40531),
      jJ = ZJ(38806);
    class YJ extends XJ.e {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 4 ? arguments[4] : void 0;
        const FJ = {
          size: "number" === typeof cJ ? cJ : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: ZJ,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...cJ
        };
        super(JJ, qJ.e.FragmentUrl, {
          effectWrapper: "number" !== typeof cJ && cJ.effectWrapper ? void 0 : new qJ.e(JJ, ZJ, FJ),
          ...FJ
        })
      }
      static _Parse(JJ, cJ, ZJ, FJ) {
        return AJ.c.Parse((() => new YJ(JJ.name, JJ.options, cJ, JJ.renderTargetSamplingMode, JJ._engine, JJ.reusable)), JJ, ZJ, FJ)
      }
    }(() => {
      var JJ;
      let cJ, ZJ = XJ.e,
        FJ = [];
      JJ = class extends ZJ {
        get face() {
          return this._effectWrapper.face
        }
        set face(JJ) {
          this._effectWrapper.face = JJ
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(JJ, cJ) {
          let ZJ = arguments.length > 4 ? arguments[4] : void 0;
          const UJ = {
            size: "number" === typeof cJ ? cJ : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: ZJ,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...cJ
          };
          super(JJ, qJ.e.FragmentUrl, {
            effectWrapper: "number" !== typeof cJ && cJ.effectWrapper ? void 0 : new qJ.c(JJ, ZJ, UJ),
            ...UJ
          }), (0, eJ.e)(this, FJ)
        }
        static _Parse(cJ, ZJ, FJ, UJ) {
          return AJ.c.Parse((() => new JJ(cJ.name, cJ.options, ZJ, cJ.renderTargetSamplingMode, cJ._engine, cJ.reusable)), cJ, FJ, UJ)
        }
      }, (() => {
        const UJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(ZJ[Symbol.metadata] ?? null) : void 0;
        cJ = [(0, jJ.F)()], (0, eJ.d)(JJ, null, cJ, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: JJ => "face" in JJ,
            get: JJ => JJ.face
          },
          metadata: UJ
        }, null, FJ), UJ && Object.defineProperty(JJ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: UJ
        })
      })()
    })();
    var hJ = ZJ(36207),
      DJ = ZJ(38862);

    function sJ(JJ, cJ, ZJ, FJ, UJ, eJ, AJ, qJ) {
      const jJ = cJ.gn();
      return cJ.isReady = !1, UJ = UJ ?? cJ.samplingMode, FJ = FJ ?? cJ.type, eJ = eJ ?? cJ.format, AJ = AJ ?? cJ.width, qJ = qJ ?? cJ.height, -1 === FJ && (FJ = 0), new Promise((YJ => {
        const hJ = new XJ.e("postprocess", JJ, null, null, 1, null, UJ, jJ, !1, void 0, FJ, void 0, null, !1, eJ);
        hJ.externalTextureSamplerBinding = !0;
        const DJ = jJ.createRenderTargetTexture({
          width: AJ,
          height: qJ
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: UJ,
          type: FJ,
          format: eJ
        });
        hJ.onEffectCreatedObservable.addOnce((JJ => {
          JJ.executeWhenCompiled((() => {
            hJ.onApply = JJ => {
              JJ._bindTexture("textureSampler", cJ), JJ.setFloat2("scale", 1, 1)
            }, ZJ.postProcessManager.directRender([hJ], DJ, !0), jJ.restoreDefaultFramebuffer(), jJ._releaseTexture(cJ), hJ && hJ.dispose(), DJ._swapAndDie(cJ), cJ.type = FJ, cJ.format = 5, cJ.isReady = !0, YJ(cJ)
          }))
        }))
      }))
    }
    async function nJ(JJ, cJ, eJ) {
      let AJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        qJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        jJ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        YJ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(JJ) {
        if (JJ.isReady()) return;
        if (JJ.loadingError) throw new Error(JJ.errorObject?.message || `Texture ${JJ.name} errored while loading.`);
        const cJ = JJ.onLoadObservable;
        if (cJ) return await new Promise((JJ => cJ.addOnce((() => JJ()))));
        const ZJ = JJ._texture?.onLoadedObservable;
        if (ZJ) return await new Promise((JJ => ZJ.addOnce((() => JJ()))));
        throw new Error(`Cannot determine readiness of texture ${JJ.name}.`)
      }(JJ);
      const DJ = JJ.getInternalTexture(),
        sJ = JJ.is3D || !!DJ?.is3D,
        {
          width: nJ,
          height: GJ
        } = JJ.getSize(),
        fJ = cJ ?? nJ,
        xJ = eJ ?? GJ;
      if (jJ || sJ || function(JJ) {
          switch (JJ) {
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
        }(JJ.textureFormat) || fJ !== nJ || xJ !== GJ) {
        if (JJ.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${jJ?"RTT":"compression"} is not supported.`);
        return await async function(JJ, cJ, eJ, AJ, qJ) {
          let jJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const YJ = JJ.Qy(),
            hJ = YJ.gn(),
            DJ = JJ.getInternalTexture(),
            sJ = JJ.is3D || !!DJ?.is3D;
          let nJ;
          if (hJ.isWebGPU ? sJ ? await ZJ.e(350).then((() => ZJ(59678))) : JJ.isCube ? await ZJ.e(351).then((() => ZJ(59686))) : await ZJ.e(352).then((() => ZJ(59692))) : sJ ? await ZJ.e(347).then((() => ZJ(59659))) : JJ.isCube ? await ZJ.e(348).then((() => ZJ(59667))) : await ZJ.e(349).then((() => ZJ(59672))), sJ) nJ = new XJ.e("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: FJ.i.NEAREST_NEAREST_MIPNEAREST,
            engine: hJ,
            shaderLanguage: hJ.isWebGPU ? 1 : 0
          });
          else if (JJ.isCube) {
            const JJ = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            nJ = new XJ.e("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: FJ.i.NEAREST_NEAREST_MIPNEAREST,
              engine: hJ,
              defines: JJ[AJ],
              shaderLanguage: hJ.isWebGPU ? 1 : 0
            })
          } else nJ = new XJ.e("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: FJ.i.NEAREST_NEAREST_MIPNEAREST,
            engine: hJ,
            shaderLanguage: hJ.isWebGPU ? 1 : 0
          });
          await new Promise((JJ => {
            nJ.onEffectCreatedObservable.addOnce((cJ => {
              cJ.executeWhenCompiled((() => {
                JJ(0)
              }))
            }))
          }));
          const GJ = new UJ.d("temp", {
            width: cJ,
            height: eJ
          }, YJ, !1);
          nJ.onApply = function(cJ) {
            cJ.setTexture("textureSampler", JJ), cJ.setFloat("lod", qJ), cJ.setInt("gamma", JJ.gammaSpace ? 1 : 0), sJ && cJ.setFloat("slice", jJ)
          };
          try {
            if (GJ.renderTarget && DJ) {
              const ZJ = DJ.samplingMode;
              0 !== qJ ? JJ.updateSamplingMode(FJ.i.NEAREST_NEAREST_MIPNEAREST) : JJ.updateSamplingMode(FJ.i.NEAREST_NEAREST), YJ.postProcessManager.directRender([nJ], GJ.renderTarget, !0), JJ.updateSamplingMode(ZJ);
              const UJ = await hJ.readPixels(0, 0, cJ, eJ),
                XJ = new Uint8Array(UJ.buffer, UJ.byteOffset, UJ.byteLength);
              return hJ.unBindFramebuffer(GJ.renderTarget), XJ
            }
            throw Error("Render to texture failed.")
          } finally {
            GJ.dispose(), nJ.dispose()
          }
        }(JJ, fJ, xJ, AJ, qJ, YJ)
      }
      let rJ = await JJ.readPixels(AJ, qJ);
      if (!rJ) throw new Error(`Failed to read pixels from texture ${JJ.name}.`);
      if (rJ instanceof Float32Array) {
        const JJ = new Uint8Array(rJ.length);
        let cJ = rJ.length;
        for (; cJ--;) {
          const ZJ = rJ[cJ];
          JJ[cJ] = Math.round(255 * (0, hJ.Clamp)(ZJ))
        }
        rJ = JJ
      }
      const vJ = fJ * xJ,
        mJ = 4 * vJ;
      if (rJ.length !== mJ) {
        const JJ = 0 === vJ ? 0 : rJ.length / vJ;
        if (1 === JJ || 2 === JJ || 3 === JJ) {
          const cJ = new Uint8Array(mJ);
          for (let ZJ = 0, FJ = 0, UJ = 0; ZJ < vJ; ZJ++, UJ += 4) {
            const ZJ = rJ[FJ++];
            if (1 === JJ) {
              cJ[UJ] = ZJ, cJ[UJ + 1] = ZJ, cJ[UJ + 2] = ZJ, cJ[UJ + 3] = 255;
              continue
            }
            const eJ = rJ[FJ++];
            2 !== JJ ? (cJ[UJ] = ZJ, cJ[UJ + 1] = eJ, cJ[UJ + 2] = rJ[FJ++], cJ[UJ + 3] = 255) : (cJ[UJ] = ZJ, cJ[UJ + 1] = eJ, cJ[UJ + 2] = 0, cJ[UJ + 3] = 255)
          }
          return cJ
        }
      }
      return rJ
    }
    const GJ = {
      CreateResizedCopy: function(JJ, cJ, ZJ) {
        let eJ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const XJ = JJ.Qy(),
          AJ = XJ.gn(),
          qJ = new UJ.d("resized" + JJ.name, {
            width: cJ,
            height: ZJ
          }, XJ, !JJ.noMipmap, !0, JJ._texture.type, !1, JJ.samplingMode, !1);
        qJ.wrapU = JJ.wrapU, qJ.wrapV = JJ.wrapV, qJ.uOffset = JJ.uOffset, qJ.vOffset = JJ.vOffset, qJ.uScale = JJ.uScale, qJ.vScale = JJ.vScale, qJ.uAng = JJ.uAng, qJ.vAng = JJ.vAng, qJ.wAng = JJ.wAng, qJ.coordinatesIndex = JJ.coordinatesIndex, qJ.level = JJ.level, qJ.anisotropicFilteringLevel = JJ.anisotropicFilteringLevel, qJ._texture.isReady = !1, JJ.wrapU = FJ.i.CLAMP_ADDRESSMODE, JJ.wrapV = FJ.i.CLAMP_ADDRESSMODE;
        const jJ = new YJ("pass", 1, null, eJ ? FJ.i.BILINEAR_SAMPLINGMODE : FJ.i.NEAREST_SAMPLINGMODE, AJ, !1, 0);
        return jJ.externalTextureSamplerBinding = !0, jJ.onEffectCreatedObservable.addOnce((cJ => {
          cJ.executeWhenCompiled((() => {
            jJ.onApply = function(cJ) {
              cJ.setTexture("textureSampler", JJ)
            };
            const cJ = qJ.renderTarget;
            cJ && (XJ.postProcessManager.directRender([jJ], cJ), AJ.unBindFramebuffer(cJ), qJ.disposeFramebufferObjects(), jJ.dispose(), qJ.getInternalTexture().isReady = !0)
          }))
        })), qJ
      },
      ApplyPostProcess: sJ,
      ToHalfFloat: DJ.j,
      FromHalfFloat: DJ.d,
      GetTextureDataAsync: nJ
    }
  },
  40501: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => nJ
    });
    var FJ = ZJ(38800),
      UJ = ZJ(38890),
      eJ = ZJ(36200),
      XJ = ZJ(36174),
      AJ = ZJ(38653),
      qJ = ZJ(38806),
      jJ = ZJ(38822),
      YJ = ZJ(36216),
      hJ = ZJ(38698),
      DJ = ZJ(38729),
      sJ = ZJ(40506);
    let nJ = (() => {
        var JJ;
        let cJ, AJ, hJ, nJ, GJ, xJ, rJ, vJ, mJ, QJ, EJ, VJ, KJ, yJ, SJ, IJ, MJ = [],
          bJ = [],
          wJ = [],
          WJ = [],
          gJ = [],
          HJ = [],
          PJ = [],
          kJ = [],
          pJ = [],
          dJ = [],
          zJ = [],
          NJ = [],
          OJ = [],
          TJ = [],
          CJ = [],
          uJ = [],
          iJ = [],
          RJ = [],
          LJ = [],
          aJ = [],
          BJ = [],
          tJ = [],
          oJ = [],
          lJ = [],
          Jc = [],
          cc = [],
          Zc = [],
          Fc = [],
          Uc = [];
        return JJ = class {
          static get ForceGLSL() {
            return sJ.i.ForceGLSL
          }
          static set ForceGLSL(JJ) {
            sJ.i.ForceGLSL = JJ
          }
          static RegisterShaderCodeProcessing(JJ, cJ) {
            sJ.i.RegisterShaderCodeProcessing(JJ, cJ)
          }
          get name() {
            return this._effectWrapper.name
          }
          set name(JJ) {
            this._effectWrapper.name = JJ
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode
          }
          set alphaMode(JJ) {
            this._effectWrapper.alphaMode = JJ
          }
          get samples() {
            return this._samples
          }
          set samples(JJ) {
            this._samples = Math.min(JJ, this._engine.getCaps().maxMSAASamples), this._textures.forEach((JJ => {
              JJ.setSamples(this._samples)
            }))
          }
          get shaderLanguage() {
            return this._shaderLanguage
          }
          getEffectName() {
            return this._fragmentUrl
          }
          set onActivate(JJ) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), JJ && (this._onActivateObserver = this.onActivateObservable.add(JJ))
          }
          set onSizeChanged(JJ) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(JJ)
          }
          set onApply(JJ) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(JJ)
          }
          set onBeforeRender(JJ) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(JJ)
          }
          set onAfterRender(JJ) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(JJ)
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd]
          }
          set inputTexture(JJ) {
            this._forcedOutputTexture = JJ
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty())
          }
          getCamera() {
            return this.EL
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.K9(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(cJ, ZJ, AJ, qJ, jJ, YJ) {
            let hJ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              DJ = arguments.length > 7 ? arguments[7] : void 0,
              nJ = arguments.length > 8 ? arguments[8] : void 0,
              GJ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              xJ = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              rJ = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              vJ = arguments.length > 12 ? arguments[12] : void 0,
              mJ = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              QJ = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              EJ = arguments.length > 15 ? arguments[15] : void 0,
              VJ = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, FJ.e)(this, MJ), null), this.uniqueId = (0, FJ.e)(this, bJ, void 0), this.width = ((0, FJ.e)(this, wJ), (0, FJ.e)(this, WJ, -1)), this.height = ((0, FJ.e)(this, gJ), (0, FJ.e)(this, HJ, -1)), this.nodeMaterialSource = ((0, FJ.e)(this, PJ), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, FJ.e)(this, kJ, void 0), this.clearColor = ((0, FJ.e)(this, pJ), (0, FJ.e)(this, dJ, void 0)), this.autoClear = ((0, FJ.e)(this, zJ), (0, FJ.e)(this, NJ, !0)), this.forceAutoClearInAlphaMode = ((0, FJ.e)(this, OJ), (0, FJ.e)(this, TJ, !1)), this.alphaConstants = ((0, FJ.e)(this, CJ), (0, FJ.e)(this, uJ, void 0)), this.animations = ((0, FJ.e)(this, iJ), []), this.enablePixelPerfectMode = (0, FJ.e)(this, RJ, !1), this.forceFullscreenViewport = ((0, FJ.e)(this, LJ), (0, FJ.e)(this, aJ, !0)), this.inspectableCustomProperties = (0, FJ.e)(this, BJ), this.scaleMode = (0, FJ.e)(this, tJ, 1), this.alwaysForcePOT = ((0, FJ.e)(this, oJ), (0, FJ.e)(this, lJ, !1)), this._samples = ((0, FJ.e)(this, Jc), (0, FJ.e)(this, cc, 1)), this.adaptScaleToCurrentViewport = ((0, FJ.e)(this, Zc), (0, FJ.e)(this, Fc, !1)), this.doNotSerialize = ((0, FJ.e)(this, Uc), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new UJ.c(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new XJ.i(1, 1), this._texelSize = XJ.i.Zero(), this.onActivateObservable = new eJ.c, this.onSizeChangedObservable = new eJ.c, this.onApplyObservable = new eJ.c, this.onBeforeRenderObservable = new eJ.c, this.onAfterRenderObservable = new eJ.c, this.Sy = new eJ.c, fJ();
            let KJ, yJ = 1,
              SJ = null;
            if (AJ && !Array.isArray(AJ)) {
              const JJ = AJ;
              AJ = JJ.uniforms ?? null, qJ = JJ.samplers ?? null, yJ = JJ.size ?? 1, YJ = JJ.camera ?? null, hJ = JJ.samplingMode ?? 1, DJ = JJ.engine, nJ = JJ.reusable, GJ = Array.isArray(JJ.defines) ? JJ.defines.join("\n") : JJ.defines ?? null, xJ = JJ.textureType ?? 0, rJ = JJ.vertexUrl ?? "postprocess", vJ = JJ.indexParameters, mJ = JJ.blockCompilation ?? !1, QJ = JJ.textureFormat ?? 5, EJ = JJ.shaderLanguage ?? 0, SJ = JJ.uniformBuffers ?? null, VJ = JJ.extraInitializations, KJ = JJ.effectWrapper
            } else jJ && (yJ = "number" === typeof jJ ? jJ : {
              width: jJ.width,
              height: jJ.height
            });
            if (this._useExistingThinPostProcess = !!KJ, this._effectWrapper = KJ ?? new sJ.i({
                name: cJ,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: ZJ,
                engine: DJ || YJ?.Qy().gn(),
                uniforms: AJ,
                samplers: qJ,
                uniformBuffers: SJ,
                defines: GJ,
                vertexUrl: rJ,
                indexParameters: vJ,
                blockCompilation: !0,
                shaderLanguage: EJ,
                extraInitializations: void 0
              }), this.name = cJ, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != YJ ? (this.EL = YJ, this._scene = YJ.Qy(), YJ.attachPostProcess(this), this._engine = this._scene.gn(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : DJ && (this._engine = DJ, this._engine.postProcesses.push(this)), this._options = yJ, this.renderTargetSamplingMode = hJ || 1, this._reusable = nJ || !1, this._textureType = xJ, this._textureFormat = QJ, this._shaderLanguage = EJ || 0, this._samplers = qJ || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = ZJ, this._vertexUrl = rJ, this._parameters = AJ || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = SJ || [], this._indexParameters = vJ, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const cJ = [];
              this._gatherImports(this._engine.isWebGPU && !JJ.ForceGLSL, cJ), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(mJ, GJ, VJ, cJ)
            }
          }
          _gatherImports() {
            let JJ = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? JJ.push(Promise.all([ZJ.e(346).then((() => ZJ(59644)))])) : JJ.push(Promise.all([ZJ.e(335).then((() => ZJ(59409)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          gn() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(JJ) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = JJ, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new UJ.c(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              FJ = arguments.length > 3 ? arguments[3] : void 0,
              UJ = arguments.length > 4 ? arguments[4] : void 0,
              eJ = arguments.length > 5 ? arguments[5] : void 0,
              XJ = arguments.length > 6 ? arguments[6] : void 0,
              AJ = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(JJ, cJ) {
            let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let UJ = 0; UJ < this._textureCache.length; UJ++)
              if (this._textureCache[UJ].texture.width === JJ.width && this._textureCache[UJ].texture.height === JJ.height && this._textureCache[UJ].postProcessChannel === ZJ && this._textureCache[UJ].texture._generateDepthBuffer === cJ.generateDepthBuffer && this._textureCache[UJ].texture.samples === cJ.samples) return this._textureCache[UJ].texture;
            const FJ = this._engine.createRenderTargetTexture(JJ, cJ);
            return this._textureCache.push({
              texture: FJ,
              postProcessChannel: ZJ,
              lastUsedRenderId: -1
            }), FJ
          }
          _flushTextureCache() {
            const JJ = this._renderId;
            for (let cJ = this._textureCache.length - 1; cJ >= 0; cJ--)
              if (JJ - this._textureCache[cJ].lastUsedRenderId > 100) {
                let JJ = !1;
                for (let ZJ = 0; ZJ < this._textures.length; ZJ++)
                  if (this._textures.data[ZJ] === this._textureCache[cJ].texture) {
                    JJ = !0;
                    break
                  } JJ || (this._textureCache[cJ].texture.dispose(), this._textureCache.splice(cJ, 1))
              }
          }
          resize(JJ, cJ) {
            let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              UJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = JJ, this.height = cJ;
            let eJ = null;
            if (ZJ)
              for (let qJ = 0; qJ < ZJ._postProcesses.length; qJ++)
                if (null !== ZJ._postProcesses[qJ]) {
                  eJ = ZJ._postProcesses[qJ];
                  break
                } const XJ = {
                width: this.width,
                height: this.height
              },
              AJ = {
                generateMipMaps: FJ,
                generateDepthBuffer: UJ || eJ === this,
                generateStencilBuffer: (UJ || eJ === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(XJ, AJ, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(XJ, AJ, 1)), this._texelSize.K9(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let JJ;
            if (this._shareOutputWithPostProcess) JJ = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) JJ = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let cJ;
              JJ = this.inputTexture;
              for (let ZJ = 0; ZJ < this._textureCache.length; ZJ++)
                if (this._textureCache[ZJ].texture === JJ) {
                  cJ = this._textureCache[ZJ];
                  break
                } cJ && (cJ.lastUsedRenderId = this._renderId)
            }
            return JJ
          }
          activate(JJ) {
            let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              ZJ = arguments.length > 2 ? arguments[2] : void 0;
            const FJ = null === JJ || void 0 !== JJ.cameraRigMode ? JJ || this.EL : null,
              UJ = FJ?.Qy() ?? JJ,
              eJ = UJ.gn(),
              XJ = eJ.getCaps().maxTextureSize,
              AJ = (cJ ? cJ.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              qJ = (cJ ? cJ.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let jJ = this._options.width || AJ,
              YJ = this._options.height || qJ;
            const hJ = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let sJ = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const JJ = eJ.currentViewport;
                JJ && (jJ *= JJ.width, YJ *= JJ.height)
              }(hJ || this.alwaysForcePOT) && (this._options.width || (jJ = eJ.needPOTTextures ? (0, DJ.d)(jJ, XJ, this.scaleMode) : jJ), this._options.height || (YJ = eJ.needPOTTextures ? (0, DJ.d)(YJ, XJ, this.scaleMode) : YJ)), this.width === jJ && this.height === YJ && (sJ = this._getTarget()) || this.resize(jJ, YJ, FJ, hJ, ZJ), this._textures.forEach((JJ => {
                JJ.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(JJ, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return sJ || (sJ = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.K9(AJ / jJ, qJ / YJ), this._engine.bindFramebuffer(sJ, 0, AJ, qJ, this.forceFullscreenViewport)) : (this._scaleRatio.K9(1, 1), this._engine.bindFramebuffer(sJ, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(FJ), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : UJ.clearColor, UJ._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), sJ
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
            let JJ;
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.gn().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), JJ = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", JJ?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
          }
          _disposeTextureCache() {
            for (let JJ = this._textureCache.length - 1; JJ >= 0; JJ--) this._textureCache[JJ].texture.dispose();
            this._textureCache.length = 0
          }
          setPrePassRenderer(JJ) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = JJ.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
          }
          dispose(JJ) {
            let cJ;
            if (JJ = JJ || this.EL, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (cJ = this._parentContainer.postProcesses.indexOf(this), cJ > -1 && this._parentContainer.postProcesses.splice(cJ, 1), this._parentContainer = null), cJ = this._engine.postProcesses.indexOf(this), -1 !== cJ && this._engine.postProcesses.splice(cJ, 1), this.Sy.notifyObservers(), JJ) {
              if (JJ.detachPostProcess(this), cJ = JJ._postProcesses.indexOf(this), 0 === cJ && JJ._postProcesses.length > 0) {
                const JJ = this.EL._getFirstPostProcess();
                JJ && JJ.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const JJ = jJ.c.Serialize(this),
              cJ = this.getCamera() || this._scene && this._scene.activeCamera;
            return JJ.customType = "BABYLON." + this.getClassName(), JJ.cameraId = cJ ? cJ.id : null, JJ.reusable = this._reusable, JJ.textureType = this._textureType, JJ.fragmentUrl = this._fragmentUrl, JJ.parameters = this._parameters, JJ.samplers = this._samplers, JJ.uniformBuffers = this._uniformBuffers, JJ.options = this._options, JJ.defines = this._postProcessDefines, JJ.textureFormat = this._textureFormat, JJ.vertexUrl = this._vertexUrl, JJ.indexParameters = this._indexParameters, JJ
          }
          clone() {
            const cJ = this.serialize();
            cJ._engine = this._engine, cJ.cameraId = null;
            const ZJ = JJ.Parse(cJ, this._scene, "");
            return ZJ ? (ZJ.onActivateObservable = this.onActivateObservable.clone(), ZJ.onSizeChangedObservable = this.onSizeChangedObservable.clone(), ZJ.onApplyObservable = this.onApplyObservable.clone(), ZJ.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), ZJ.onAfterRenderObservable = this.onAfterRenderObservable.clone(), ZJ._prePassEffectConfiguration = this._prePassEffectConfiguration, ZJ) : null
          }
          static Parse(JJ, cJ, ZJ) {
            const FJ = (0, YJ.e)(JJ.customType);
            if (!FJ || !FJ._Parse) return null;
            const UJ = cJ ? cJ.getCameraById(JJ.cameraId) : null;
            return FJ._Parse(JJ, UJ, cJ, ZJ)
          }
          static _Parse(cJ, ZJ, FJ, UJ) {
            return jJ.c.Parse((() => new JJ(cJ.name, cJ.fragmentUrl, cJ.parameters, cJ.samplers, cJ.options, ZJ, cJ.renderTargetSamplingMode, cJ._engine, cJ.reusable, cJ.defines, cJ.textureType, cJ.vertexUrl, cJ.indexParameters, !1, cJ.textureFormat)), cJ, FJ, UJ)
          }
        }, (() => {
          const ZJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cJ = [(0, qJ.F)()], AJ = [(0, qJ.F)()], hJ = [(0, qJ.F)()], nJ = [(0, qJ.F)()], GJ = [(0, qJ.F)()], xJ = [(0, qJ.o)()], rJ = [(0, qJ.F)()], vJ = [(0, qJ.F)()], mJ = [(0, qJ.F)()], QJ = [(0, qJ.F)()], EJ = [(0, qJ.F)()], VJ = [(0, qJ.F)()], KJ = [(0, qJ.F)()], yJ = [(0, qJ.F)()], SJ = [(0, qJ.F)("samples")], IJ = [(0, qJ.F)()], (0, FJ.d)(JJ, null, AJ, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: JJ => "name" in JJ,
              get: JJ => JJ.name
            },
            metadata: ZJ
          }, null, MJ), (0, FJ.d)(JJ, null, mJ, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: JJ => "alphaMode" in JJ,
              get: JJ => JJ.alphaMode
            },
            metadata: ZJ
          }, null, MJ), (0, FJ.d)(null, null, cJ, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: JJ => "uniqueId" in JJ,
              get: JJ => JJ.uniqueId,
              set: (JJ, cJ) => {
                JJ.uniqueId = cJ
              }
            },
            metadata: ZJ
          }, bJ, wJ), (0, FJ.d)(null, null, hJ, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: JJ => "width" in JJ,
              get: JJ => JJ.width,
              set: (JJ, cJ) => {
                JJ.width = cJ
              }
            },
            metadata: ZJ
          }, WJ, gJ), (0, FJ.d)(null, null, nJ, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: JJ => "height" in JJ,
              get: JJ => JJ.height,
              set: (JJ, cJ) => {
                JJ.height = cJ
              }
            },
            metadata: ZJ
          }, HJ, PJ), (0, FJ.d)(null, null, GJ, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: JJ => "renderTargetSamplingMode" in JJ,
              get: JJ => JJ.renderTargetSamplingMode,
              set: (JJ, cJ) => {
                JJ.renderTargetSamplingMode = cJ
              }
            },
            metadata: ZJ
          }, kJ, pJ), (0, FJ.d)(null, null, xJ, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: JJ => "clearColor" in JJ,
              get: JJ => JJ.clearColor,
              set: (JJ, cJ) => {
                JJ.clearColor = cJ
              }
            },
            metadata: ZJ
          }, dJ, zJ), (0, FJ.d)(null, null, rJ, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: JJ => "autoClear" in JJ,
              get: JJ => JJ.autoClear,
              set: (JJ, cJ) => {
                JJ.autoClear = cJ
              }
            },
            metadata: ZJ
          }, NJ, OJ), (0, FJ.d)(null, null, vJ, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: JJ => "forceAutoClearInAlphaMode" in JJ,
              get: JJ => JJ.forceAutoClearInAlphaMode,
              set: (JJ, cJ) => {
                JJ.forceAutoClearInAlphaMode = cJ
              }
            },
            metadata: ZJ
          }, TJ, CJ), (0, FJ.d)(null, null, QJ, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: JJ => "alphaConstants" in JJ,
              get: JJ => JJ.alphaConstants,
              set: (JJ, cJ) => {
                JJ.alphaConstants = cJ
              }
            },
            metadata: ZJ
          }, uJ, iJ), (0, FJ.d)(null, null, EJ, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: JJ => "enablePixelPerfectMode" in JJ,
              get: JJ => JJ.enablePixelPerfectMode,
              set: (JJ, cJ) => {
                JJ.enablePixelPerfectMode = cJ
              }
            },
            metadata: ZJ
          }, RJ, LJ), (0, FJ.d)(null, null, VJ, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: JJ => "forceFullscreenViewport" in JJ,
              get: JJ => JJ.forceFullscreenViewport,
              set: (JJ, cJ) => {
                JJ.forceFullscreenViewport = cJ
              }
            },
            metadata: ZJ
          }, aJ, BJ), (0, FJ.d)(null, null, KJ, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: JJ => "scaleMode" in JJ,
              get: JJ => JJ.scaleMode,
              set: (JJ, cJ) => {
                JJ.scaleMode = cJ
              }
            },
            metadata: ZJ
          }, tJ, oJ), (0, FJ.d)(null, null, yJ, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: JJ => "alwaysForcePOT" in JJ,
              get: JJ => JJ.alwaysForcePOT,
              set: (JJ, cJ) => {
                JJ.alwaysForcePOT = cJ
              }
            },
            metadata: ZJ
          }, lJ, Jc), (0, FJ.d)(null, null, SJ, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_samples" in JJ,
              get: JJ => JJ._samples,
              set: (JJ, cJ) => {
                JJ._samples = cJ
              }
            },
            metadata: ZJ
          }, cc, Zc), (0, FJ.d)(null, null, IJ, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: JJ => "adaptScaleToCurrentViewport" in JJ,
              get: JJ => JJ.adaptScaleToCurrentViewport,
              set: (JJ, cJ) => {
                JJ.adaptScaleToCurrentViewport = cJ
              }
            },
            metadata: ZJ
          }, Fc, Uc), ZJ && Object.defineProperty(JJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ZJ
          })
        })(), JJ
      })(),
      GJ = !1;

    function fJ() {
      GJ || (GJ = !0, hJ.e.prototype.setTextureFromPostProcess = function(JJ, cJ, ZJ) {
        let FJ = null;
        cJ && (cJ._forcedOutputTexture ? FJ = cJ._forcedOutputTexture : cJ._textures.data[cJ._currentRenderTextureInd] && (FJ = cJ._textures.data[cJ._currentRenderTextureInd])), this._bindTexture(JJ, FJ?.texture ?? null, ZJ)
      }, hJ.e.prototype.setTextureFromPostProcessOutput = function(JJ, cJ, ZJ) {
        this._bindTexture(JJ, cJ?._outputTexture?.texture ?? null, ZJ)
      }, AJ.d.prototype.setTextureFromPostProcess = function(JJ, cJ) {
        this._engine.setTextureFromPostProcess(this._samplers[JJ], cJ, JJ)
      }, AJ.d.prototype.setTextureFromPostProcessOutput = function(JJ, cJ) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[JJ], cJ, JJ)
      }, (0, YJ.f)("BABYLON.PostProcess", nJ))
    }
  },
  40531: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => XJ,
      e: () => eJ
    });
    var FJ = ZJ(40506),
      UJ = ZJ(36192);
    class eJ extends FJ.i {
      _gatherImports(JJ, cJ) {
        JJ ? (this._webGPUReady = !0, cJ.push(Promise.all([ZJ.e(353).then((() => ZJ(59697)))]))) : cJ.push(Promise.all([ZJ.e(354).then((() => ZJ(59703)))])), super._gatherImports(JJ, cJ)
      }
      constructor(JJ) {
        let cJ = arguments.length > 2 ? arguments[2] : void 0;
        const ZJ = {
          name: JJ,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || UJ.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: eJ.FragmentUrl,
          ...cJ
        };
        ZJ.engine || (ZJ.engine = UJ.c.LastCreatedEngine), super(ZJ)
      }
    }
    eJ.FragmentUrl = "pass";
    class XJ extends FJ.i {
      _gatherImports(JJ, cJ) {
        JJ ? (this._webGPUReady = !0, cJ.push(Promise.all([ZJ.e(355).then((() => ZJ(59712)))]))) : cJ.push(Promise.all([ZJ.e(356).then((() => ZJ(59717)))])), super._gatherImports(JJ, cJ)
      }
      constructor(JJ) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: JJ,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || UJ.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: XJ.FragmentUrl,
          defines: "#define POSITIVEX"
        }), this._face = 0
      }
      get face() {
        return this._face
      }
      set face(JJ) {
        if (!(JJ < 0 || JJ > 5)) switch (this._face = JJ, this._face) {
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
    XJ.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);