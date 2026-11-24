export const id = 316;
export const ids = [316];
export const modules = {
  41904: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => kB
    });
    var QB = zB(37202),
      nB = zB(37171),
      dB = zB(40580),
      IB = zB(40220),
      NB = zB(40015),
      uB = zB(38783),
      UB = zB(40195),
      aB = zB(40232),
      pB = zB(37186),
      rB = zB(39976),
      sB = zB(40171),
      JB = zB(40284);
    class mB {
      get renderList() {
        return this._renderList
      }
      set renderList(BB) {
        this._renderList !== BB && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), BB && (this._unObserveRenderList = (0, pB.k)(BB, this._renderListHasChanged)), this._renderList = BB)
      }
      get disableImageProcessing() {
        return this._disableImageProcessing
      }
      set disableImageProcessing(BB) {
        BB !== this._disableImageProcessing && (this._disableImageProcessing = BB, this._scene.markAllMaterialsAsDirty(64))
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(BB) {
        this._disableDepthPrePass = BB, this._renderingManager.disableDepthPrePass = BB
      }
      get name() {
        return this._name
      }
      set name(BB) {
        if (this._name !== BB) {
          if (this._name = BB, this._sceneUBOs)
            for (let BB = 0; BB < this._sceneUBOs.length; ++BB) this._sceneUBOs[BB].name = `Scene ubo #${BB} for ${this.name}`;
          if (this._scene)
            for (let BB = 0; BB < this._renderPassIds.length; ++BB) {
              const jB = this._renderPassIds[BB];
              this._engine._renderPassNames[jB] = `${this._name}#${BB}`
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
      setMaterialForRendering(BB, jB) {
        let zB;
        zB = Array.isArray(BB) ? BB : [BB];
        for (let QB = 0; QB < zB.length; ++QB)
          for (let BB = 0; BB < this.options.numPasses; ++BB) {
            let nB = zB[QB];
            zB[QB].rY && (nB = zB[QB].vQB), nB.setMaterialForRenderPass(this._renderPassIds[BB], void 0 !== jB ? Array.isArray(jB) ? jB[BB] : jB : void 0)
          }
      }
      _freezeActiveMeshes(BB) {
        this._freezeActiveMeshesCancel = (0, rB.e)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, BB)
            for (let BB = 0; BB < this._activeMeshes.length; BB++) this._activeMeshes.data[BB]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((BB, jB) => {
          this._freezeActiveMeshesCancel = null, jB ? (uB.c.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), BB && uB.c.Error(BB)) : (uB.c.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), BB && (uB.c.Error(BB), BB.stack && uB.c.Error(BB.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let BB = 0; BB < this._activeMeshes.length; BB++) this._activeMeshes.data[BB]._unFreeze();
        this._isFrozen = !1
      }
      constructor(BB, jB, zB) {
        this._unObserveRenderList = null, this._renderListHasChanged = (BB, jB) => {
          const zB = this._renderList ? this._renderList.length : 0;
          if (0 === jB && zB > 0 || 0 === zB)
            for (const QB of this._scene.meshes) QB._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new QB.c, this.onAfterRenderObservable = new QB.c, this.onBeforeRenderingManagerRenderObservable = new QB.c, this.onAfterRenderingManagerRenderObservable = new QB.c, this.onInitRenderingObservable = new QB.c, this.onFinishRenderingObservable = new QB.c, this.onFastPathRenderObservable = new QB.c, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new sB.i(256), this._activeBoundingBoxes = new sB.i(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = BB, this._scene = jB, this._engine = this._scene.wJ(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...zB
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new aB.d(jB), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const BB of this._scene.lights) BB.getTypeID() === JB.d.LIGHTTYPEID_CLUSTERED_CONTAINER && BB.isSupported && BB._updateBatches(this.activeCamera).render()
        })), this._scene.addObjectRenderer(this)
      }
      _releaseRenderPassId() {
        for (let BB = 0; BB < this.options.numPasses; ++BB) this._engine.releaseRenderPassId(this._renderPassIds[BB]);
        this._renderPassIds.length = 0
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let BB = 0; BB < this.options.numPasses; ++BB) this._renderPassIds[BB] = this._engine.createRenderPassId(`${this.name}#${BB}`)
      }
      _createSceneUBO(BB, jB) {
        const zB = this._scene.wJ(),
          QB = new UB.d(zB, void 0, jB, BB, void 0, !1);
        return QB.addUniform("viewProjection", 16), jB && QB.addUniform("viewProjectionR", 16), QB.addUniform("view", 16), QB.addUniform("projection", 16), QB.addUniform("vEyePosition", 4), QB.addUniform("inverseProjection", 16), QB
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const BB = this._engine._currentRenderTarget,
          jB = !(!BB || !BB.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const BB = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${BB} for ${this.name}`, jB)), this._sceneUBOIsMultiview.push(jB)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== jB && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, jB), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = jB);
        const zB = this._sceneUBOs[this._currentSceneUBOIndex++];
        return zB.unbindEffect(), zB
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1
      }
      get refreshRate() {
        return this._refreshRate
      }
      set refreshRate(BB) {
        this._refreshRate = BB, this.resetRefreshCounter()
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1))
      }
      isReadyForRendering(BB, jB) {
        this.prepareRenderList(), this.initRender(BB, jB);
        const zB = this._checkReadiness();
        return this.finishRender(), zB
      }
      prepareRenderList() {
        const BB = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let jB = 0; jB < this._waitingRenderList.length; jB++) {
              const zB = this._waitingRenderList[jB],
                QB = BB.getMeshById(zB);
              QB && this.renderList.push(QB)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const BB = this._scene.meshes;
          for (let jB = 0; jB < BB.length; jB++) {
            const zB = BB[jB];
            this.renderListPredicate(zB) && this.renderList.push(zB)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(BB, jB) {
        const zB = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), zB && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(zB.getViewMatrix(), zB.getProjectionMatrix(!0)), this._scene._activeCamera = zB, this._engine.setViewport(zB.rigParent ? zB.rigParent.viewport : zB.viewport, BB, jB)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const BB = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (BB.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), BB._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== BB.activeCamera && BB.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), BB.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const zB = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[BB], this.onBeforeRenderObservable.notifyObservers(BB);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(BB);
        else {
          const jB = this._prepareRenderingManager(BB),
            zB = this._scene.getOutlineRenderer?.(),
            QB = zB?.enabled;
          zB && (zB.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(BB), this._renderingManager.render(this.customRenderFunction, jB, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(BB), zB && (zB.enabled = QB)
        }
        jB || this.onAfterRenderObservable.notifyObservers(BB), this._engine.currentRenderPassId = zB
      }
      _checkReadiness() {
        const BB = this._scene,
          jB = this._engine.currentRenderPassId;
        let zB = !0;
        BB.getViewMatrix() || BB.updateTransformMatrix();
        const QB = this.options.numPasses;
        for (let nB = 0; nB < QB && zB; nB++) {
          const jB = this.renderList ? this.renderList : BB.frameGraph ? BB.meshes : BB.getActiveMeshes().data,
            dB = this.renderList || BB.frameGraph ? jB.length : BB.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[nB], this.onBeforeRenderObservable.notifyObservers(nB);
          let IB = null,
            NB = dB;
          this.getCustomRenderList && (IB = this.getCustomRenderList(nB, jB, dB), IB && (NB = IB.length)), IB || (IB = jB), this.options.doNotChangeAspectRatio || BB.updateTransformMatrix(!0);
          for (let BB = 0; BB < NB && zB; ++BB) {
            const jB = IB[BB];
            if (!jB.isEnabled() || jB.isBlocked || !jB.isVisible || !jB.cL) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(jB, this.refreshRate, !0)) {
                zB = !1;
                continue
              }
            } else if (!jB.isReady(!0)) {
              zB = !1;
              continue
            }
            let QB = jB._edgesRenderer,
              nB = jB.hasThinInstances;
            if (jB.rY) {
              const BB = jB.vQB;
              BB.edgesShareWithInstances && BB._edgesRenderer?.isEnabled && (QB = BB._edgesRenderer, nB = !0)
            } else jB.bQB && jB.edgesShareWithInstances && (nB = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && QB?.isEnabled && (QB.isReady(nB) || (zB = !1))
          }
          if (this.renderParticles && BB.particlesEnabled) {
            const jB = this.particleSystemList || BB.RL;
            for (const BB of jB) BB.isReady() || (zB = !1)
          }
          if (this.renderSprites && BB.spritesEnabled) {
            const jB = this.spriteManagerList || BB.spriteManagers;
            if (jB)
              for (const QB of jB) BB.activeCamera && 0 === (QB.layerMask & BB.activeCamera.layerMask) || QB.isReady && !QB.isReady() && (zB = !1)
          }
          this.onAfterRenderObservable.notifyObservers(nB), QB > 1 && (BB.incrementRenderId(), BB.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = jB, zB
      }
      _prepareRenderingManager() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const zB = this._scene;
        let QB, nB, dB = null;
        const IB = this.renderList ? this.renderList : zB.frameGraph ? zB.meshes : zB.getActiveMeshes().data,
          NB = this.renderList || zB.frameGraph ? IB.length : zB.getActiveMeshes().length;
        if (this.getCustomRenderList && (dB = this.getCustomRenderList(BB, IB, NB)), dB) QB = dB.length, nB = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !jB && !this._engine.isWebGPU) return IB;
          this._defaultRenderListPrepared = !0, dB = IB, QB = NB, nB = !this.renderList || this.forceLayerMaskCheck
        }
        const uB = zB.activeCamera,
          UB = this.cameraForLOD ?? uB,
          aB = zB.getBoundingBoxRenderer?.();
        if (zB._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && aB) {
            aB.reset();
            for (let BB = 0; BB < this._activeBoundingBoxes.length; BB++) {
              const jB = this._activeBoundingBoxes.data[BB];
              aB.renderList.push(jB)
            }
          }
          return dB
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), aB && aB.reset(), this.renderMeshes) {
          const BB = zB.getRenderId(),
            jB = zB.getFrameId();
          for (let IB = 0; IB < QB; IB++) {
            const QB = dB[IB];
            if (QB && !QB.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(QB, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!QB.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let dB, IB;
              if (UB) {
                const BB = QB._internalAbstractMeshDataInfo._currentLOD.get(UB);
                BB && BB[1] === jB ? dB = BB[0] : (dB = zB.customLODSelector ? zB.customLODSelector(QB, UB) : QB.getLOD(UB), BB ? (BB[0] = dB, BB[1] = jB) : QB._internalAbstractMeshDataInfo._currentLOD.set(UB, [dB, jB]))
              } else dB = QB;
              if (!dB) continue;
              if (dB !== QB && 0 !== dB.billboardMode && dB.computeWorldMatrix(), dB._preActivateForIntermediateRendering(BB), IB = !(!nB || !uB) && 0 === (QB.layerMask & uB.layerMask), QB.isEnabled() && QB.isVisible && QB.cL && !IB) {
                if (this._activeMeshes.push(QB), dB._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, dB !== QB && dB._activate(BB, !0), this.enableBoundingBoxRendering && aB && aB._preActiveMesh(QB), QB._activate(BB, !0) && QB.cL.length) {
                  QB.rY ? QB._internalAbstractMeshDataInfo._actAsRegularMesh && (dB = QB) : dB._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, dB._internalAbstractMeshDataInfo._isActiveIntermediate = !0, zB._prepareSkeleton(dB);
                  for (let BB = 0; BB < dB.cL.length; BB++) {
                    const jB = dB.cL[BB];
                    this.enableBoundingBoxRendering && aB && aB._evaluateSubMesh(QB, jB), this._renderingManager.dispatch(jB, dB)
                  }
                }
                QB._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && aB && jB)
          for (let pB = 0; pB < aB.renderList.length; pB++) {
            const BB = aB.renderList.data[pB];
            this._activeBoundingBoxes.push(BB)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const BB = this.particleSystemList || zB.RL;
          for (let jB = 0; jB < BB.length; jB++) {
            const zB = BB[jB],
              QB = zB.emitter;
            zB.isStarted() && QB && (!QB.position || QB.isEnabled()) && this._renderingManager.dispatchParticles(zB)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return dB
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(BB, jB, zB, QB)
      }
      setRenderingAutoClearDepthStencil(BB, jB) {
        let zB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          QB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(BB, jB, zB, QB), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const BB = new mB(this.name, this._scene, this.options);
        return this.renderList && (BB.renderList = this.renderList.slice(0)), BB
      }
      dispose() {
        const BB = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          jB = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let zB = 0; zB < jB; zB++) {
          const jB = BB[zB];
          jB && void 0 !== jB.getMaterialForRenderPass(this.renderPassId) && jB.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const zB of this._sceneUBOs) zB.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === mB.REFRESHRATE_RENDER_ONCE && (this.refreshRate = mB.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    mB.REFRESHRATE_RENDER_ONCE = 0, mB.REFRESHRATE_RENDER_ONEVERYFRAME = 1, mB.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var yB = zB(39965);
    class kB extends dB.i {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate
      }
      set renderListPredicate(BB) {
        this._objectRenderer.renderListPredicate = BB
      }
      get renderList() {
        return this._objectRenderer.renderList
      }
      set renderList(BB) {
        this._objectRenderer.renderList = BB
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList
      }
      set particleSystemList(BB) {
        this._objectRenderer.particleSystemList = BB
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList
      }
      set getCustomRenderList(BB) {
        this._objectRenderer.getCustomRenderList = BB
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles
      }
      set renderParticles(BB) {
        this._objectRenderer.renderParticles = BB
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites
      }
      set renderSprites(BB) {
        this._objectRenderer.renderSprites = BB
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering
      }
      set enableBoundingBoxRendering(BB) {
        this._objectRenderer.enableBoundingBoxRendering = BB
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering
      }
      set enableOutlineRendering(BB) {
        this._objectRenderer.enableOutlineRendering = BB
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck
      }
      set forceLayerMaskCheck(BB) {
        this._objectRenderer.forceLayerMaskCheck = BB
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera
      }
      set activeCamera(BB) {
        this._objectRenderer.activeCamera = BB
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD
      }
      set cameraForLOD(BB) {
        this._objectRenderer.cameraForLOD = BB
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing
      }
      set disableImageProcessing(BB) {
        this._objectRenderer.disableImageProcessing = BB
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction
      }
      set customIsReadyFunction(BB) {
        this._objectRenderer.customIsReadyFunction = BB
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction
      }
      set customRenderFunction(BB) {
        this._objectRenderer.customRenderFunction = BB
      }
      get postProcesses() {
        return this._postProcesses
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled
      }
      set onAfterUnbind(BB) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(BB)
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable
      }
      set onBeforeRender(BB) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(BB)
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable
      }
      set onAfterRender(BB) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(BB)
      }
      set onClear(BB) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(BB)
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList
      }
      set _waitingRenderList(BB) {
        this._objectRenderer._waitingRenderList = BB
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
      setMaterialForRendering(BB, jB) {
        this._objectRenderer.setMaterialForRendering(BB, jB)
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
      set boundingBoxSize(BB) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(BB)) return;
        this._boundingBoxSize = BB;
        const jB = this.aY();
        jB && jB.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(BB, jB, zB) {
        let IB, NB, UB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          aB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          rB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          sB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : dB.i.TRILINEAR_SAMPLINGMODE,
          JB = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          yB = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          kB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          GB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          LB = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          gB = arguments.length > 13 ? arguments[13] : void 0,
          tB = arguments.length > 14 ? arguments[14] : void 0,
          SB = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          MB = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          EB = !0,
          iB = !1;
        if ("object" === typeof UB) {
          const BB = UB;
          UB = !!BB.generateMipMaps, aB = BB.doNotChangeAspectRatio ?? !0, pB = BB.type ?? 0, rB = !!BB.isCube, sB = BB.samplingMode ?? dB.i.TRILINEAR_SAMPLINGMODE, JB = BB.generateDepthBuffer ?? !0, yB = !!BB.generateStencilBuffer, kB = !!BB.isMulti, GB = BB.format ?? 5, LB = !!BB.delayAllocation, gB = BB.samples, tB = BB.creationFlags, SB = !!BB.noColorAttachment, MB = !!BB.useSRGBBuffer, IB = BB.colorAttachment, EB = BB.gammaSpace ?? EB, NB = BB.existingObjectRenderer, iB = !!BB.enableClusteredLights
        }
        if (super(null, zB, !UB, void 0, sB, void 0, void 0, void 0, void 0, GB), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new QB.c, this.onAfterUnbindObservable = new QB.c, this.onClearObservable = new QB.c, this.onResizeObservable = new QB.c, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = nB.m.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(zB = this.aY())) return;
        const qB = this.aY().wJ();
        this._gammaSpace = EB, this._coordinatesMode = dB.i.PROJECTION_MODE, this.name = BB, this.isRenderTarget = !0, this._initialSizeParameter = jB, this._dontDisposeObjectRenderer = !!NB, this._processSizeParameter(jB), this._objectRenderer = NB ?? new mB(BB, zB, {
          numPasses: rB ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: aB,
          enableClusteredLights: iB
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const BB = this._scene;
          if (!this._disableEngineStages)
            for (const jB of BB._beforeRenderTargetClearStage) jB.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(qB) : this.skipInitialClear || qB.clear(this.clearColor ?? BB.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || BB.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const jB of BB._beforeRenderTargetDrawStage) jB.action(this, this._currentFaceIndex, this._currentLayer);
          qB._debugPushGroup && qB._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (qB._debugPopGroup && qB._debugPopGroup(), !this._disableEngineStages)
            for (const jB of this._scene._afterRenderTargetDrawStage) jB.action(this, this._currentFaceIndex, this._currentLayer);
          const BB = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const jB of this._scene._afterRenderTargetPostProcessStage) jB.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = BB), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), qB) : uB.c.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(qB) : this.skipInitialClear || qB.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = qB.onResizeObservable.add((() => {})), this._generateMipMaps = !!UB, this._doNotChangeAspectRatio = aB, kB || (this._renderTargetOptions = {
          generateMipMaps: UB,
          type: pB,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: JB,
          generateStencilBuffer: yB,
          samples: gB,
          creationFlags: tB,
          noColorAttachment: SB,
          useSRGBBuffer: MB,
          colorAttachment: IB,
          label: this.name
        }, this.samplingMode === dB.i.NEAREST_SAMPLINGMODE && (this.wrapU = dB.i.CLAMP_ADDRESSMODE, this.wrapV = dB.i.CLAMP_ADDRESSMODE), LB || (rB ? (this._renderTarget = zB.wJ().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = dB.i.INVCUBIC_MODE, this._textureMatrix = nB.c.Identity()) : this._renderTarget = zB.wJ().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== gB && (this.samples = gB)))
      }
      createDepthStencilTexture() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          dB = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(BB, jB, zB, QB, nB, dB)
      }
      _processSizeParameter(BB) {
        if (BB.ratio) {
          this._sizeRatio = BB.ratio;
          const jB = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(jB.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(jB.getRenderHeight(), this._sizeRatio)
          }
        } else this._size = BB
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples
      }
      set samples(BB) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(BB))
      }
      addPostProcess(BB) {
        if (!this._postProcessManager) {
          const BB = this.aY();
          if (!BB) return;
          this._postProcessManager = new IB.e(BB), this._postProcesses = new Array
        }
        this._postProcesses.push(BB), this._postProcesses[0].autoClear = !1
      }
      clearPostProcesses() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (BB)
            for (const BB of this._postProcesses) BB.dispose();
          this._postProcesses = []
        }
      }
      removePostProcess(BB) {
        if (!this._postProcesses) return;
        const jB = this._postProcesses.indexOf(BB); - 1 !== jB && (this._postProcesses.splice(jB, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter()
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate
      }
      set refreshRate(BB) {
        this._objectRenderer.refreshRate = BB
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
        const BB = this._size.layers;
        if (BB) return BB;
        const jB = this._size.depth;
        return jB || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(BB) {
        const jB = Math.max(1, this.getRenderSize() * BB);
        this.resize(jB)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(BB) {
        const jB = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const zB = this.aY();
        zB && (this._processSizeParameter(BB), this._renderTarget = jB ? zB.wJ().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : zB.wJ().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(BB, jB)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => zB(41914))).then((BB => this._dumpTools = BB))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const BB = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), BB
      }
      _render() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const zB = this.aY();
        if (!zB) return;
        void 0 !== this.useCameraPostProcesses && (BB = this.useCameraPostProcesses);
        const QB = zB.wJ();
        if (QB._debugPushGroup && QB._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let nB = 0; nB < 6; nB++) this._renderToTarget(nB, BB, jB), zB.incrementRenderId(), zB.resetCachedMaterial();
          else this._renderToTarget(0, BB, jB);
        else
          for (let nB = 0; nB < this.getRenderLayers(); nB++) this._renderToTarget(0, BB, jB, nB), zB.incrementRenderId(), zB.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), QB._debugPopGroup && QB._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(BB, jB) {
        const zB = BB * jB,
          QB = (0, NB.g)(zB + 16384 / (128 + zB));
        return Math.min((0, NB.b)(BB), QB)
      }
      _bindFrameBuffer() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const zB = this.aY();
        if (!zB) return;
        const QB = zB.wJ();
        this._renderTarget && QB.bindFramebuffer(this._renderTarget, this.isCube ? BB : void 0, void 0, void 0, this.ignoreCameraViewport, 0, jB)
      }
      _unbindFrameBuffer(BB, jB) {
        this._renderTarget && BB.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(jB)
        }))
      }
      _prepareFrame(BB, jB, zB, QB) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(jB, zB) : QB && BB.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(jB, zB)
      }
      _renderToTarget(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const nB = this.aY();
        if (!nB) return;
        const dB = nB.wJ();
        this._currentFaceIndex = BB, this._currentLayer = QB, this._currentUseCameraPostProcess = jB, this._currentDumpForDebug = zB, this._prepareFrame(nB, BB, QB, jB), this._objectRenderer.render(BB + QB, !0), this._unbindFrameBuffer(dB, BB), this._texture && this.isCube && 5 === BB && dB.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(BB, jB, zB, QB)
      }
      setRenderingAutoClearDepthStencil(BB, jB) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(BB, jB)
      }
      clone() {
        const BB = this.getSize(),
          jB = new kB(this.name, BB, this.aY(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return jB.hasAlpha = this.hasAlpha, jB.level = this.level, jB.coordinatesMode = this.coordinatesMode, this.renderList && (jB.renderList = this.renderList.slice(0)), jB
      }
      serialize() {
        if (!this.name) return null;
        const BB = super.serialize();
        if (BB.renderTargetSize = this.getRenderSize(), BB.renderList = [], this.renderList)
          for (let jB = 0; jB < this.renderList.length; jB++) BB.renderList.push(this.renderList[jB].id);
        return BB
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.aY().wJ().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const BB = this.aY();
        if (!BB) return;
        let jB = BB.customRenderTargets.indexOf(this);
        jB >= 0 && BB.customRenderTargets.splice(jB, 1);
        for (const zB of BB.cameras) jB = zB.customRenderTargets.indexOf(this), jB >= 0 && zB.customRenderTargets.splice(jB, 1);
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
    kB.REFRESHRATE_RENDER_ONCE = mB.REFRESHRATE_RENDER_ONCE, kB.REFRESHRATE_RENDER_ONEVERYFRAME = mB.REFRESHRATE_RENDER_ONEVERYFRAME, kB.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = mB.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(kB.prototype, "noPrePassRenderer") || Object.defineProperty(kB.prototype, "noPrePassRenderer", (0, yB.f)("RenderTargetTexture", "noPrePassRenderer"))
  },
  41894: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => UB,
      f: () => aB
    });
    var QB = zB(40211),
      nB = zB(38170),
      dB = zB(37202),
      IB = zB(39927),
      NB = zB(40423);
    const uB = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class UB {
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uB;
        this._fullscreenViewport = new nB.e(0, 0, 1, 1);
        const zB = jB.positions ?? uB.positions,
          dB = jB.indices ?? uB.indices;
        this.engine = BB, this._vertexBuffers = {
          [QB.l.PositionKind]: new QB.l(BB, zB, QB.l.PositionKind, !1, !1, 2)
        }, this._indexBuffer = BB.createIndexBuffer(dB), this._indexBufferLength = dB.length, this._onContextRestoredObserver = BB.lJ.add((() => {
          this._indexBuffer = BB.createIndexBuffer(dB);
          for (const BB in this._vertexBuffers) {
            this._vertexBuffers[BB]._rebuild()
          }
        }))
      }
      setViewport() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.engine.setViewport(BB)
      }
      bindBuffers(BB) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, BB)
      }
      applyEffectWrapper(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = jB, this.engine.stencilState.stencilTest = zB, this.engine.enableEffect(BB.drawWrapper), this.bindBuffers(BB.effect), BB.onApplyObservable.notifyObservers({})
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
      _isRenderTargetTexture(BB) {
        return void 0 !== BB.renderTarget
      }
      render(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!BB.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const zB = null === jB ? null : this._isRenderTargetTexture(jB) ? jB.renderTarget : jB;
        zB && this.engine.bindFramebuffer(zB), this.applyEffectWrapper(BB), this.draw(), zB && this.engine.unBindFramebuffer(zB), this.restoreStates()
      }
      dispose() {
        const BB = this._vertexBuffers[QB.l.PositionKind];
        BB && (BB.dispose(), delete this._vertexBuffers[QB.l.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.lJ.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class aB {
      static RegisterShaderCodeProcessing(BB, jB) {
        jB ? aB._CustomShaderCodeProcessing[BB ?? ""] = jB : delete aB._CustomShaderCodeProcessing[BB ?? ""]
      }
      static _GetShaderCodeProcessing(BB) {
        return aB._CustomShaderCodeProcessing[BB] ?? aB._CustomShaderCodeProcessing[""]
      }
      get name() {
        return this.options.name
      }
      set name(BB) {
        this.options.name = BB
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
      set effect(BB) {
        this._drawWrapper.effect = BB
      }
      constructor(BB) {
        this.alphaMode = 0, this.onEffectCreatedObservable = new dB.c(void 0, !0), this.onApplyObservable = new dB.c, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
          ...BB,
          name: BB.name || "effectWrapper",
          engine: BB.engine,
          uniforms: BB.uniforms || BB.uniformNames || [],
          uniformNames: void 0,
          samplers: BB.samplers || BB.samplerNames || [],
          samplerNames: void 0,
          attributeNames: BB.attributeNames || ["position"],
          uniformBuffers: BB.uniformBuffers || [],
          defines: BB.defines || "",
          useShaderStore: BB.useShaderStore || !1,
          vertexUrl: BB.vertexUrl || BB.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: BB.fragmentShader || "pass",
          indexParameters: BB.indexParameters,
          blockCompilation: BB.blockCompilation || !1,
          shaderLanguage: BB.shaderLanguage || 0,
          onCompiled: BB.onCompiled || void 0,
          extraInitializations: BB.extraInitializations || void 0,
          extraInitializationsAsync: BB.extraInitializationsAsync || void 0,
          useAsPostProcess: BB.useAsPostProcess ?? !1,
          allowEmptySourceTexture: BB.allowEmptySourceTexture ?? !1
        }, this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), BB.vertexUrl || BB.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add((() => {
          this.effect.setFloat2("scale", 1, 1)
        }))), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add((() => {
          this.bind()
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.lJ.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new NB.e(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const jB = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, jB, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          QB = arguments.length > 2 ? arguments[2] : void 0,
          nB = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, nB && this._importPromises.push(...nB);
        const dB = this.options.engine.isWebGPU && !aB.ForceGLSL;
        this._gatherImports(dB, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(dB && this._webGPUReady ? zB.e(368).then((() => zB(61548))) : zB.e(358).then((() => zB(61435)))), void 0 !== QB && QB(dB, this._importPromises), dB && this._webGPUReady && (this.options.shaderLanguage = 1), BB || this.updateEffect(jB)
      }
      updateEffect() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          QB = arguments.length > 3 ? arguments[3] : void 0,
          nB = arguments.length > 4 ? arguments[4] : void 0,
          dB = arguments.length > 5 ? arguments[5] : void 0,
          NB = arguments.length > 6 ? arguments[6] : void 0,
          uB = arguments.length > 7 ? arguments[7] : void 0;
        const UB = aB._GetShaderCodeProcessing(this.name);
        if (UB?.defineCustomBindings) {
          const QB = jB?.slice() ?? [];
          QB.push(...this.options.uniforms);
          const nB = zB?.slice() ?? [];
          nB.push(...this.options.samplers), BB = UB.defineCustomBindings(this.name, BB, QB, nB), jB = QB, zB = nB
        }
        this.options.defines = BB || "";
        const pB = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let rB;
        rB = this.options.extraInitializationsAsync ? async () => {
          await (pB?.()), await this.options.extraInitializationsAsync()
        }: pB, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: NB ?? this._shaderPath.vertex,
          fragment: uB ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: jB || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: zB || this.options.samplers,
          defines: null !== BB ? BB : "",
          fallbacks: null,
          onCompiled: nB ?? this.options.onCompiled,
          onError: dB ?? null,
          indexParameters: QB || this.options.indexParameters,
          processCodeAfterIncludes: UB?.processCodeAfterIncludes ? (BB, jB) => UB.processCodeAfterIncludes(this.name, BB, jB) : null,
          processFinalCode: UB?.processFinalCode ? (BB, jB) => UB.processFinalCode(this.name, BB, jB) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: rB
        }, this.options.engine) : this._drawWrapper.effect = new IB.e(this._shaderPath, this.options.attributeNames, jB || this.options.uniforms, zB || this.options.samplerNames, this.options.engine, BB, void 0, nB || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, rB), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !BB && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), aB._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.wJ().lJ.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    aB.ForceGLSL = !1, aB._CustomShaderCodeProcessing = {}
  },
  41914: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      Dispose: () => GB,
      DumpData: () => kB,
      DumpDataAsync: () => yB,
      DumpFramebuffer: () => mB,
      DumpTools: () => LB,
      EncodeImageAsync: () => JB,
      RegisterDumpTools: () => tB
    });
    var QB = zB(40066),
      nB = zB(41894),
      dB = zB(40164),
      IB = zB(37208),
      NB = zB(37197),
      uB = zB(38783),
      UB = zB(40120),
      aB = zB(40068);
    let pB = null;
    async function rB() {
      return pB || (pB = async function() {
        const BB = NB.c.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        BB instanceof OffscreenCanvas && uB.c.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: jB
        } = await Promise.resolve().then((() => zB(39922)));
        if (!jB.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const QB = new jB(BB, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        NB.c.Instances.pop(), NB.c.OnEnginesDisposedObservable.add((BB => {
          QB && BB !== QB && !QB.aE && 0 === NB.c.Instances.length && GB()
        })), QB.getCaps().parallelShaderCompile = void 0;
        const dB = new nB.c(QB),
          {
            passPixelShader: IB
          } = await zB.e(376).then((() => zB(61603))),
          UB = new nB.f({
            engine: QB,
            name: IB.name,
            fragmentShader: IB.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: BB,
          dumpEngine: {
            engine: QB,
            renderer: dB,
            wrapper: UB
          }
        }
      }()), await pB
    }
    let sB = (() => {
      var BB;
      let jB, zB = [];
      return BB = class {
        static async EncodeImageAsync(BB, jB, zB, QB, nB, IB) {
          const NB = await rB(),
            uB = NB.dumpEngine;
          uB.engine.setSize(jB, zB, !0);
          const UB = uB.engine.createRawTexture(BB, jB, zB, 5, !1, !nB, 1);
          return uB.renderer.setViewport(), uB.renderer.applyEffectWrapper(uB.wrapper), uB.wrapper.effect._bindTexture("textureSampler", UB), uB.renderer.draw(), UB.dispose(), await new Promise(((BB, jB) => {
            dB.i.ToBlob(NB.canvas, (zB => {
              zB ? BB(zB) : jB(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), QB, IB)
          }))
        }
      }, (() => {
        const nB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        jB = [aB.f], (0, QB.e)(BB, null, jB, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: BB => "EncodeImageAsync" in BB,
            get: BB => BB.EncodeImageAsync
          },
          metadata: nB
        }, null, zB), nB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: nB
        }), (0, QB.g)(BB, zB)
      })(), BB
    })();
    const JB = sB.EncodeImageAsync;
    async function mB(BB, jB, zB, QB) {
      let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        dB = arguments.length > 5 ? arguments[5] : void 0,
        IB = arguments.length > 6 ? arguments[6] : void 0;
      const NB = await zB.readPixels(0, 0, BB, jB);
      kB(BB, jB, new Uint8Array(NB.buffer), QB, nB, dB, !0, void 0, IB)
    }
    async function yB(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        nB = arguments.length > 4 ? arguments[4] : void 0,
        NB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        aB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        pB = arguments.length > 7 ? arguments[7] : void 0;
      if (zB instanceof Float32Array) {
        const BB = new Uint8Array(zB.length);
        let jB = zB.length;
        for (; jB--;) {
          const QB = zB[jB];
          BB[jB] = Math.round(255 * (0, IB.Clamp)(QB))
        }
        zB = BB
      }
      const rB = await sB.EncodeImageAsync(zB, BB, jB, QB, NB, pB);
      void 0 !== nB && dB.i.DownloadBlob(rB, nB), rB.type !== QB && uB.c.Warn(`DumpData: The requested mimeType '${QB}' is not supported. The result has mimeType '${rB.type}' instead.`);
      const JB = await rB.arrayBuffer();
      return aB ? JB : `data:${QB};base64,${(0,UB.e)(JB)}`
    }

    function kB(BB, jB, zB, QB) {
      let nB = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== nB || QB || (nB = ""), yB(BB, jB, zB, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", nB, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((BB => {
        QB && QB(BB)
      }))
    }

    function GB() {
      pB && (pB?.then((BB => {
        BB.canvas instanceof HTMLCanvasElement && BB.canvas.remove(), BB.dumpEngine && (BB.dumpEngine.engine.dispose(), BB.dumpEngine.renderer.dispose(), BB.dumpEngine.wrapper.dispose())
      })), pB = null)
    }
    const LB = {
      DumpData: kB,
      DumpDataAsync: yB,
      DumpFramebuffer: mB,
      Dispose: GB
    };
    let gB = !1;

    function tB() {
      if (gB) return;
      gB = !0;
      dB.i.DumpData = kB, dB.i.DumpDataAsync = yB, dB.i.DumpFramebuffer = mB
    }
  },
  41900: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => sB,
      i: () => JB,
      m: () => mB
    });
    var QB = zB(40580),
      nB = zB(41904),
      dB = zB(40066),
      IB = zB(41892),
      NB = zB(40086),
      uB = zB(41910),
      UB = zB(40068);
    class aB extends IB.d {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(BB, jB) {
        let zB = arguments.length > 4 ? arguments[4] : void 0;
        const QB = {
          size: "number" === typeof jB ? jB : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: zB,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...jB
        };
        super(BB, uB.d.FragmentUrl, {
          effectWrapper: "number" !== typeof jB && jB.effectWrapper ? void 0 : new uB.d(BB, zB, QB),
          ...QB
        })
      }
      static _Parse(BB, jB, zB, QB) {
        return NB.b.Parse((() => new aB(BB.name, BB.options, jB, BB.renderTargetSamplingMode, BB._engine, BB.reusable)), BB, zB, QB)
      }
    }(() => {
      var BB;
      let jB, zB = IB.d,
        QB = [];
      BB = class extends zB {
        get face() {
          return this._effectWrapper.face
        }
        set face(BB) {
          this._effectWrapper.face = BB
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(BB, jB) {
          let zB = arguments.length > 4 ? arguments[4] : void 0;
          const nB = {
            size: "number" === typeof jB ? jB : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: zB,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...jB
          };
          super(BB, uB.d.FragmentUrl, {
            effectWrapper: "number" !== typeof jB && jB.effectWrapper ? void 0 : new uB.b(BB, zB, nB),
            ...nB
          }), (0, dB.g)(this, QB)
        }
        static _Parse(jB, zB, QB, nB) {
          return NB.b.Parse((() => new BB(jB.name, jB.options, zB, jB.renderTargetSamplingMode, jB._engine, jB.reusable)), jB, QB, nB)
        }
      }, (() => {
        const nB = "function" === typeof Symbol && Symbol.metadata ? Object.create(zB[Symbol.metadata] ?? null) : void 0;
        jB = [(0, UB.A)()], (0, dB.e)(BB, null, jB, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: BB => "face" in BB,
            get: BB => BB.face
          },
          metadata: nB
        }, null, QB), nB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: nB
        })
      })()
    })();
    var pB = zB(37208),
      rB = zB(40130);

    function sB(BB, jB, zB, QB, nB, dB, NB, uB) {
      const UB = jB.wJ();
      return jB.isReady = !1, nB = nB ?? jB.samplingMode, QB = QB ?? jB.type, dB = dB ?? jB.format, NB = NB ?? jB.width, uB = uB ?? jB.height, -1 === QB && (QB = 0), new Promise((aB => {
        const pB = new IB.d("postprocess", BB, null, null, 1, null, nB, UB, !1, void 0, QB, void 0, null, !1, dB);
        pB.externalTextureSamplerBinding = !0;
        const rB = UB.createRenderTargetTexture({
          width: NB,
          height: uB
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: nB,
          type: QB,
          format: dB
        });
        pB.onEffectCreatedObservable.addOnce((BB => {
          BB.executeWhenCompiled((() => {
            pB.onApply = BB => {
              BB._bindTexture("textureSampler", jB), BB.setFloat2("scale", 1, 1)
            }, zB.postProcessManager.directRender([pB], rB, !0), UB.restoreDefaultFramebuffer(), UB._releaseTexture(jB), pB && pB.dispose(), rB._swapAndDie(jB), jB.type = QB, jB.format = 5, jB.isReady = !0, aB(jB)
          }))
        }))
      }))
    }
    async function JB(BB, jB, dB) {
      let NB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        uB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        UB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        aB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(BB) {
        if (BB.isReady()) return;
        if (BB.loadingError) throw new Error(BB.errorObject?.message || `Texture ${BB.name} errored while loading.`);
        const jB = BB.onLoadObservable;
        if (jB) return await new Promise((BB => jB.addOnce((() => BB()))));
        const zB = BB._texture?.onLoadedObservable;
        if (zB) return await new Promise((BB => zB.addOnce((() => BB()))));
        throw new Error(`Cannot determine readiness of texture ${BB.name}.`)
      }(BB);
      const rB = BB.getInternalTexture(),
        sB = BB.is3D || !!rB?.is3D,
        {
          width: JB,
          height: mB
        } = BB.getSize(),
        yB = jB ?? JB,
        kB = dB ?? mB;
      if (UB || sB || function(BB) {
          switch (BB) {
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
        }(BB.textureFormat) || yB !== JB || kB !== mB) {
        if (BB.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${UB?"RTT":"compression"} is not supported.`);
        return await async function(BB, jB, dB, NB, uB) {
          let UB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const aB = BB.aY(),
            pB = aB.wJ(),
            rB = BB.getInternalTexture(),
            sB = BB.is3D || !!rB?.is3D;
          let JB;
          if (pB.isWebGPU ? sB ? await zB.e(372).then((() => zB(61579))) : BB.isCube ? await zB.e(373).then((() => zB(61588))) : await zB.e(374).then((() => zB(61592))) : sB ? await zB.e(369).then((() => zB(61556))) : BB.isCube ? await zB.e(370).then((() => zB(61561))) : await zB.e(371).then((() => zB(61570))), sB) JB = new IB.d("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: QB.i.NEAREST_NEAREST_MIPNEAREST,
            engine: pB,
            shaderLanguage: pB.isWebGPU ? 1 : 0
          });
          else if (BB.isCube) {
            const BB = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            JB = new IB.d("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: QB.i.NEAREST_NEAREST_MIPNEAREST,
              engine: pB,
              defines: BB[NB],
              shaderLanguage: pB.isWebGPU ? 1 : 0
            })
          } else JB = new IB.d("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: QB.i.NEAREST_NEAREST_MIPNEAREST,
            engine: pB,
            shaderLanguage: pB.isWebGPU ? 1 : 0
          });
          await new Promise((BB => {
            JB.onEffectCreatedObservable.addOnce((jB => {
              jB.executeWhenCompiled((() => {
                BB(0)
              }))
            }))
          }));
          const mB = new nB.c("temp", {
            width: jB,
            height: dB
          }, aB, !1);
          JB.onApply = function(jB) {
            jB.setTexture("textureSampler", BB), jB.setFloat("lod", uB), jB.setInt("gamma", BB.gammaSpace ? 1 : 0), sB && jB.setFloat("slice", UB)
          };
          try {
            if (mB.renderTarget && rB) {
              const zB = rB.samplingMode;
              0 !== uB ? BB.updateSamplingMode(QB.i.NEAREST_NEAREST_MIPNEAREST) : BB.updateSamplingMode(QB.i.NEAREST_NEAREST), aB.postProcessManager.directRender([JB], mB.renderTarget, !0), BB.updateSamplingMode(zB);
              const nB = await pB.readPixels(0, 0, jB, dB),
                IB = new Uint8Array(nB.buffer, nB.byteOffset, nB.byteLength);
              return pB.unBindFramebuffer(mB.renderTarget), IB
            }
            throw Error("Render to texture failed.")
          } finally {
            mB.dispose(), JB.dispose()
          }
        }(BB, yB, kB, NB, uB, aB)
      }
      let GB = await BB.readPixels(NB, uB);
      if (!GB) throw new Error(`Failed to read pixels from texture ${BB.name}.`);
      if (GB instanceof Float32Array) {
        const BB = new Uint8Array(GB.length);
        let jB = GB.length;
        for (; jB--;) {
          const zB = GB[jB];
          BB[jB] = Math.round(255 * (0, pB.Clamp)(zB))
        }
        GB = BB
      }
      const LB = yB * kB,
        gB = 4 * LB;
      if (GB.length !== gB) {
        const BB = 0 === LB ? 0 : GB.length / LB;
        if (1 === BB || 2 === BB || 3 === BB) {
          const jB = new Uint8Array(gB);
          for (let zB = 0, QB = 0, nB = 0; zB < LB; zB++, nB += 4) {
            const zB = GB[QB++];
            if (1 === BB) {
              jB[nB] = zB, jB[nB + 1] = zB, jB[nB + 2] = zB, jB[nB + 3] = 255;
              continue
            }
            const dB = GB[QB++];
            2 !== BB ? (jB[nB] = zB, jB[nB + 1] = dB, jB[nB + 2] = GB[QB++], jB[nB + 3] = 255) : (jB[nB] = zB, jB[nB + 1] = dB, jB[nB + 2] = 0, jB[nB + 3] = 255)
          }
          return jB
        }
      }
      return GB
    }
    const mB = {
      CreateResizedCopy: function(BB, jB, zB) {
        let dB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const IB = BB.aY(),
          NB = IB.wJ(),
          uB = new nB.c("resized" + BB.name, {
            width: jB,
            height: zB
          }, IB, !BB.noMipmap, !0, BB._texture.type, !1, BB.samplingMode, !1);
        uB.wrapU = BB.wrapU, uB.wrapV = BB.wrapV, uB.uOffset = BB.uOffset, uB.vOffset = BB.vOffset, uB.uScale = BB.uScale, uB.vScale = BB.vScale, uB.uAng = BB.uAng, uB.vAng = BB.vAng, uB.wAng = BB.wAng, uB.coordinatesIndex = BB.coordinatesIndex, uB.level = BB.level, uB.anisotropicFilteringLevel = BB.anisotropicFilteringLevel, uB._texture.isReady = !1, BB.wrapU = QB.i.CLAMP_ADDRESSMODE, BB.wrapV = QB.i.CLAMP_ADDRESSMODE;
        const UB = new aB("pass", 1, null, dB ? QB.i.BILINEAR_SAMPLINGMODE : QB.i.NEAREST_SAMPLINGMODE, NB, !1, 0);
        return UB.externalTextureSamplerBinding = !0, UB.onEffectCreatedObservable.addOnce((jB => {
          jB.executeWhenCompiled((() => {
            UB.onApply = function(jB) {
              jB.setTexture("textureSampler", BB)
            };
            const jB = uB.renderTarget;
            jB && (IB.postProcessManager.directRender([UB], jB), NB.unBindFramebuffer(jB), uB.disposeFramebufferObjects(), UB.dispose(), uB.getInternalTexture().isReady = !0)
          }))
        })), uB
      },
      ApplyPostProcess: sB,
      ToHalfFloat: rB.f,
      FromHalfFloat: rB.c,
      GetTextureDataAsync: JB
    }
  },
  41892: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => JB
    });
    var QB = zB(40066),
      nB = zB(40171),
      dB = zB(37202),
      IB = zB(37171),
      NB = zB(39927),
      uB = zB(40068),
      UB = zB(40086),
      aB = zB(37222),
      pB = zB(39980),
      rB = zB(40015),
      sB = zB(41894);
    let JB = (() => {
        var BB;
        let jB, NB, pB, JB, mB, kB, GB, LB, gB, tB, SB, MB, EB, iB, qB, fB, oB = [],
          HB = [],
          DB = [],
          FB = [],
          YB = [],
          VB = [],
          hB = [],
          XB = [],
          ZB = [],
          AB = [],
          TB = [],
          PB = [],
          WB = [],
          eB = [],
          lB = [],
          wB = [],
          xB = [],
          KB = [],
          CB = [],
          cB = [],
          bB = [],
          vB = [],
          RB = [],
          OB = [],
          Bj = [],
          jj = [],
          zj = [],
          Qj = [],
          nj = [];
        return BB = class {
          static get ForceGLSL() {
            return sB.f.ForceGLSL
          }
          static set ForceGLSL(BB) {
            sB.f.ForceGLSL = BB
          }
          static RegisterShaderCodeProcessing(BB, jB) {
            sB.f.RegisterShaderCodeProcessing(BB, jB)
          }
          get name() {
            return this._effectWrapper.name
          }
          set name(BB) {
            this._effectWrapper.name = BB
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode
          }
          set alphaMode(BB) {
            this._effectWrapper.alphaMode = BB
          }
          get samples() {
            return this._samples
          }
          set samples(BB) {
            this._samples = Math.min(BB, this._engine.getCaps().maxMSAASamples), this._textures.forEach((BB => {
              BB.setSamples(this._samples)
            }))
          }
          get shaderLanguage() {
            return this._shaderLanguage
          }
          getEffectName() {
            return this._fragmentUrl
          }
          set onActivate(BB) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), BB && (this._onActivateObserver = this.onActivateObservable.add(BB))
          }
          set onSizeChanged(BB) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(BB)
          }
          set onApply(BB) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(BB)
          }
          set onBeforeRender(BB) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(BB)
          }
          set onAfterRender(BB) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(BB)
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd]
          }
          set inputTexture(BB) {
            this._forcedOutputTexture = BB
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty())
          }
          getCamera() {
            return this.ZC
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.U3(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(jB, zB, NB, uB, UB, aB) {
            let pB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              rB = arguments.length > 7 ? arguments[7] : void 0,
              JB = arguments.length > 8 ? arguments[8] : void 0,
              mB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              kB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              GB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              LB = arguments.length > 12 ? arguments[12] : void 0,
              gB = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              tB = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              SB = arguments.length > 15 ? arguments[15] : void 0,
              MB = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, QB.g)(this, oB), null), this.uniqueId = (0, QB.g)(this, HB, void 0), this.width = ((0, QB.g)(this, DB), (0, QB.g)(this, FB, -1)), this.height = ((0, QB.g)(this, YB), (0, QB.g)(this, VB, -1)), this.nodeMaterialSource = ((0, QB.g)(this, hB), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, QB.g)(this, XB, void 0), this.clearColor = ((0, QB.g)(this, ZB), (0, QB.g)(this, AB, void 0)), this.autoClear = ((0, QB.g)(this, TB), (0, QB.g)(this, PB, !0)), this.forceAutoClearInAlphaMode = ((0, QB.g)(this, WB), (0, QB.g)(this, eB, !1)), this.alphaConstants = ((0, QB.g)(this, lB), (0, QB.g)(this, wB, void 0)), this.animations = ((0, QB.g)(this, xB), []), this.enablePixelPerfectMode = (0, QB.g)(this, KB, !1), this.forceFullscreenViewport = ((0, QB.g)(this, CB), (0, QB.g)(this, cB, !0)), this.inspectableCustomProperties = (0, QB.g)(this, bB), this.scaleMode = (0, QB.g)(this, vB, 1), this.alwaysForcePOT = ((0, QB.g)(this, RB), (0, QB.g)(this, OB, !1)), this._samples = ((0, QB.g)(this, Bj), (0, QB.g)(this, jj, 1)), this.adaptScaleToCurrentViewport = ((0, QB.g)(this, zj), (0, QB.g)(this, Qj, !1)), this.doNotSerialize = ((0, QB.g)(this, nj), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new nB.i(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new IB.i(1, 1), this._texelSize = IB.i.Zero(), this.onActivateObservable = new dB.c, this.onSizeChangedObservable = new dB.c, this.onApplyObservable = new dB.c, this.onBeforeRenderObservable = new dB.c, this.onAfterRenderObservable = new dB.c, this.pY = new dB.c, yB();
            let EB, iB = 1,
              qB = null;
            if (NB && !Array.isArray(NB)) {
              const BB = NB;
              NB = BB.uniforms ?? null, uB = BB.samplers ?? null, iB = BB.size ?? 1, aB = BB.camera ?? null, pB = BB.samplingMode ?? 1, rB = BB.engine, JB = BB.reusable, mB = Array.isArray(BB.defines) ? BB.defines.join("\n") : BB.defines ?? null, kB = BB.textureType ?? 0, GB = BB.vertexUrl ?? "postprocess", LB = BB.indexParameters, gB = BB.blockCompilation ?? !1, tB = BB.textureFormat ?? 5, SB = BB.shaderLanguage ?? 0, qB = BB.uniformBuffers ?? null, MB = BB.extraInitializations, EB = BB.effectWrapper
            } else UB && (iB = "number" === typeof UB ? UB : {
              width: UB.width,
              height: UB.height
            });
            if (this._useExistingThinPostProcess = !!EB, this._effectWrapper = EB ?? new sB.f({
                name: jB,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: zB,
                engine: rB || aB?.aY().wJ(),
                uniforms: NB,
                samplers: uB,
                uniformBuffers: qB,
                defines: mB,
                vertexUrl: GB,
                indexParameters: LB,
                blockCompilation: !0,
                shaderLanguage: SB,
                extraInitializations: void 0
              }), this.name = jB, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != aB ? (this.ZC = aB, this._scene = aB.aY(), aB.attachPostProcess(this), this._engine = this._scene.wJ(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : rB && (this._engine = rB, this._engine.postProcesses.push(this)), this._options = iB, this.renderTargetSamplingMode = pB || 1, this._reusable = JB || !1, this._textureType = kB, this._textureFormat = tB, this._shaderLanguage = SB || 0, this._samplers = uB || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = zB, this._vertexUrl = GB, this._parameters = NB || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = qB || [], this._indexParameters = LB, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const jB = [];
              this._gatherImports(this._engine.isWebGPU && !BB.ForceGLSL, jB), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(gB, mB, MB, jB)
            }
          }
          _gatherImports() {
            let BB = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? BB.push(Promise.all([zB.e(368).then((() => zB(61548)))])) : BB.push(Promise.all([zB.e(358).then((() => zB(61435)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          wJ() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(BB) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = BB, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new nB.i(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              QB = arguments.length > 3 ? arguments[3] : void 0,
              nB = arguments.length > 4 ? arguments[4] : void 0,
              dB = arguments.length > 5 ? arguments[5] : void 0,
              IB = arguments.length > 6 ? arguments[6] : void 0,
              NB = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(BB, jB, zB, QB, nB, dB, IB, NB), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(BB, jB) {
            let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let nB = 0; nB < this._textureCache.length; nB++)
              if (this._textureCache[nB].texture.width === BB.width && this._textureCache[nB].texture.height === BB.height && this._textureCache[nB].postProcessChannel === zB && this._textureCache[nB].texture._generateDepthBuffer === jB.generateDepthBuffer && this._textureCache[nB].texture.samples === jB.samples) return this._textureCache[nB].texture;
            const QB = this._engine.createRenderTargetTexture(BB, jB);
            return this._textureCache.push({
              texture: QB,
              postProcessChannel: zB,
              lastUsedRenderId: -1
            }), QB
          }
          _flushTextureCache() {
            const BB = this._renderId;
            for (let jB = this._textureCache.length - 1; jB >= 0; jB--)
              if (BB - this._textureCache[jB].lastUsedRenderId > 100) {
                let BB = !1;
                for (let zB = 0; zB < this._textures.length; zB++)
                  if (this._textures.data[zB] === this._textureCache[jB].texture) {
                    BB = !0;
                    break
                  } BB || (this._textureCache[jB].texture.dispose(), this._textureCache.splice(jB, 1))
              }
          }
          resize(BB, jB) {
            let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              nB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = BB, this.height = jB;
            let dB = null;
            if (zB)
              for (let uB = 0; uB < zB._postProcesses.length; uB++)
                if (null !== zB._postProcesses[uB]) {
                  dB = zB._postProcesses[uB];
                  break
                } const IB = {
                width: this.width,
                height: this.height
              },
              NB = {
                generateMipMaps: QB,
                generateDepthBuffer: nB || dB === this,
                generateStencilBuffer: (nB || dB === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(IB, NB, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(IB, NB, 1)), this._texelSize.U3(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let BB;
            if (this._shareOutputWithPostProcess) BB = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) BB = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let jB;
              BB = this.inputTexture;
              for (let zB = 0; zB < this._textureCache.length; zB++)
                if (this._textureCache[zB].texture === BB) {
                  jB = this._textureCache[zB];
                  break
                } jB && (jB.lastUsedRenderId = this._renderId)
            }
            return BB
          }
          activate(BB) {
            let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              zB = arguments.length > 2 ? arguments[2] : void 0;
            const QB = null === BB || void 0 !== BB.cameraRigMode ? BB || this.ZC : null,
              nB = QB?.aY() ?? BB,
              dB = nB.wJ(),
              IB = dB.getCaps().maxTextureSize,
              NB = (jB ? jB.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              uB = (jB ? jB.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let UB = this._options.width || NB,
              aB = this._options.height || uB;
            const pB = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let sB = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const BB = dB.currentViewport;
                BB && (UB *= BB.width, aB *= BB.height)
              }(pB || this.alwaysForcePOT) && (this._options.width || (UB = dB.needPOTTextures ? (0, rB.c)(UB, IB, this.scaleMode) : UB), this._options.height || (aB = dB.needPOTTextures ? (0, rB.c)(aB, IB, this.scaleMode) : aB)), this.width === UB && this.height === aB && (sB = this._getTarget()) || this.resize(UB, aB, QB, pB, zB), this._textures.forEach((BB => {
                BB.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(BB, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return sB || (sB = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.U3(NB / UB, uB / aB), this._engine.bindFramebuffer(sB, 0, NB, uB, this.forceFullscreenViewport)) : (this._scaleRatio.U3(1, 1), this._engine.bindFramebuffer(sB, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(QB), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : nB.clearColor, nB._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), sB
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
            let BB;
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.wJ().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), BB = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", BB?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
          }
          _disposeTextureCache() {
            for (let BB = this._textureCache.length - 1; BB >= 0; BB--) this._textureCache[BB].texture.dispose();
            this._textureCache.length = 0
          }
          setPrePassRenderer(BB) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = BB.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
          }
          dispose(BB) {
            let jB;
            if (BB = BB || this.ZC, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (jB = this._parentContainer.postProcesses.indexOf(this), jB > -1 && this._parentContainer.postProcesses.splice(jB, 1), this._parentContainer = null), jB = this._engine.postProcesses.indexOf(this), -1 !== jB && this._engine.postProcesses.splice(jB, 1), this.pY.notifyObservers(), BB) {
              if (BB.detachPostProcess(this), jB = BB._postProcesses.indexOf(this), 0 === jB && BB._postProcesses.length > 0) {
                const BB = this.ZC._getFirstPostProcess();
                BB && BB.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const BB = UB.b.Serialize(this),
              jB = this.getCamera() || this._scene && this._scene.activeCamera;
            return BB.customType = "BABYLON." + this.getClassName(), BB.cameraId = jB ? jB.id : null, BB.reusable = this._reusable, BB.textureType = this._textureType, BB.fragmentUrl = this._fragmentUrl, BB.parameters = this._parameters, BB.samplers = this._samplers, BB.uniformBuffers = this._uniformBuffers, BB.options = this._options, BB.defines = this._postProcessDefines, BB.textureFormat = this._textureFormat, BB.vertexUrl = this._vertexUrl, BB.indexParameters = this._indexParameters, BB
          }
          clone() {
            const jB = this.serialize();
            jB._engine = this._engine, jB.cameraId = null;
            const zB = BB.Parse(jB, this._scene, "");
            return zB ? (zB.onActivateObservable = this.onActivateObservable.clone(), zB.onSizeChangedObservable = this.onSizeChangedObservable.clone(), zB.onApplyObservable = this.onApplyObservable.clone(), zB.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), zB.onAfterRenderObservable = this.onAfterRenderObservable.clone(), zB._prePassEffectConfiguration = this._prePassEffectConfiguration, zB) : null
          }
          static Parse(BB, jB, zB) {
            const QB = (0, aB.b)(BB.customType);
            if (!QB || !QB._Parse) return null;
            const nB = jB ? jB.getCameraById(BB.cameraId) : null;
            return QB._Parse(BB, nB, jB, zB)
          }
          static _Parse(jB, zB, QB, nB) {
            return UB.b.Parse((() => new BB(jB.name, jB.fragmentUrl, jB.parameters, jB.samplers, jB.options, zB, jB.renderTargetSamplingMode, jB._engine, jB.reusable, jB.defines, jB.textureType, jB.vertexUrl, jB.indexParameters, !1, jB.textureFormat)), jB, QB, nB)
          }
        }, (() => {
          const zB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          jB = [(0, uB.A)()], NB = [(0, uB.A)()], pB = [(0, uB.A)()], JB = [(0, uB.A)()], mB = [(0, uB.A)()], kB = [(0, uB.l)()], GB = [(0, uB.A)()], LB = [(0, uB.A)()], gB = [(0, uB.A)()], tB = [(0, uB.A)()], SB = [(0, uB.A)()], MB = [(0, uB.A)()], EB = [(0, uB.A)()], iB = [(0, uB.A)()], qB = [(0, uB.A)("samples")], fB = [(0, uB.A)()], (0, QB.e)(BB, null, NB, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: BB => "name" in BB,
              get: BB => BB.name
            },
            metadata: zB
          }, null, oB), (0, QB.e)(BB, null, gB, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: BB => "alphaMode" in BB,
              get: BB => BB.alphaMode
            },
            metadata: zB
          }, null, oB), (0, QB.e)(null, null, jB, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: BB => "uniqueId" in BB,
              get: BB => BB.uniqueId,
              set: (BB, jB) => {
                BB.uniqueId = jB
              }
            },
            metadata: zB
          }, HB, DB), (0, QB.e)(null, null, pB, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: BB => "width" in BB,
              get: BB => BB.width,
              set: (BB, jB) => {
                BB.width = jB
              }
            },
            metadata: zB
          }, FB, YB), (0, QB.e)(null, null, JB, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: BB => "height" in BB,
              get: BB => BB.height,
              set: (BB, jB) => {
                BB.height = jB
              }
            },
            metadata: zB
          }, VB, hB), (0, QB.e)(null, null, mB, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: BB => "renderTargetSamplingMode" in BB,
              get: BB => BB.renderTargetSamplingMode,
              set: (BB, jB) => {
                BB.renderTargetSamplingMode = jB
              }
            },
            metadata: zB
          }, XB, ZB), (0, QB.e)(null, null, kB, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "clearColor" in BB,
              get: BB => BB.clearColor,
              set: (BB, jB) => {
                BB.clearColor = jB
              }
            },
            metadata: zB
          }, AB, TB), (0, QB.e)(null, null, GB, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: BB => "autoClear" in BB,
              get: BB => BB.autoClear,
              set: (BB, jB) => {
                BB.autoClear = jB
              }
            },
            metadata: zB
          }, PB, WB), (0, QB.e)(null, null, LB, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: BB => "forceAutoClearInAlphaMode" in BB,
              get: BB => BB.forceAutoClearInAlphaMode,
              set: (BB, jB) => {
                BB.forceAutoClearInAlphaMode = jB
              }
            },
            metadata: zB
          }, eB, lB), (0, QB.e)(null, null, tB, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: BB => "alphaConstants" in BB,
              get: BB => BB.alphaConstants,
              set: (BB, jB) => {
                BB.alphaConstants = jB
              }
            },
            metadata: zB
          }, wB, xB), (0, QB.e)(null, null, SB, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: BB => "enablePixelPerfectMode" in BB,
              get: BB => BB.enablePixelPerfectMode,
              set: (BB, jB) => {
                BB.enablePixelPerfectMode = jB
              }
            },
            metadata: zB
          }, KB, CB), (0, QB.e)(null, null, MB, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: BB => "forceFullscreenViewport" in BB,
              get: BB => BB.forceFullscreenViewport,
              set: (BB, jB) => {
                BB.forceFullscreenViewport = jB
              }
            },
            metadata: zB
          }, cB, bB), (0, QB.e)(null, null, EB, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: BB => "scaleMode" in BB,
              get: BB => BB.scaleMode,
              set: (BB, jB) => {
                BB.scaleMode = jB
              }
            },
            metadata: zB
          }, vB, RB), (0, QB.e)(null, null, iB, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: BB => "alwaysForcePOT" in BB,
              get: BB => BB.alwaysForcePOT,
              set: (BB, jB) => {
                BB.alwaysForcePOT = jB
              }
            },
            metadata: zB
          }, OB, Bj), (0, QB.e)(null, null, qB, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: BB => "_samples" in BB,
              get: BB => BB._samples,
              set: (BB, jB) => {
                BB._samples = jB
              }
            },
            metadata: zB
          }, jj, zj), (0, QB.e)(null, null, fB, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: BB => "adaptScaleToCurrentViewport" in BB,
              get: BB => BB.adaptScaleToCurrentViewport,
              set: (BB, jB) => {
                BB.adaptScaleToCurrentViewport = jB
              }
            },
            metadata: zB
          }, Qj, nj), zB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zB
          })
        })(), BB
      })(),
      mB = !1;

    function yB() {
      mB || (mB = !0, pB.c.prototype.setTextureFromPostProcess = function(BB, jB, zB) {
        let QB = null;
        jB && (jB._forcedOutputTexture ? QB = jB._forcedOutputTexture : jB._textures.data[jB._currentRenderTextureInd] && (QB = jB._textures.data[jB._currentRenderTextureInd])), this._bindTexture(BB, QB?.texture ?? null, zB)
      }, pB.c.prototype.setTextureFromPostProcessOutput = function(BB, jB, zB) {
        this._bindTexture(BB, jB?._outputTexture?.texture ?? null, zB)
      }, NB.e.prototype.setTextureFromPostProcess = function(BB, jB) {
        this._engine.setTextureFromPostProcess(this._samplers[BB], jB, BB)
      }, NB.e.prototype.setTextureFromPostProcessOutput = function(BB, jB) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[BB], jB, BB)
      }, (0, aB.d)("BABYLON.PostProcess", JB))
    }
  },
  41910: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB,
      d: () => dB
    });
    var QB = zB(41894),
      nB = zB(37197);
    class dB extends QB.f {
      _gatherImports(BB, jB) {
        BB ? (this._webGPUReady = !0, jB.push(Promise.all([zB.e(375).then((() => zB(61599)))]))) : jB.push(Promise.all([zB.e(376).then((() => zB(61603)))])), super._gatherImports(BB, jB)
      }
      constructor(BB) {
        let jB = arguments.length > 2 ? arguments[2] : void 0;
        const zB = {
          name: BB,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || nB.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: dB.FragmentUrl,
          ...jB
        };
        zB.engine || (zB.engine = nB.c.LastCreatedEngine), super(zB)
      }
    }
    dB.FragmentUrl = "pass";
    class IB extends QB.f {
      _gatherImports(BB, jB) {
        BB ? (this._webGPUReady = !0, jB.push(Promise.all([zB.e(377).then((() => zB(61608)))]))) : jB.push(Promise.all([zB.e(378).then((() => zB(61612)))])), super._gatherImports(BB, jB)
      }
      constructor(BB) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: BB,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || nB.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: IB.FragmentUrl,
          defines: "#define POSITIVEX"
        }), this._face = 0
      }
      get face() {
        return this._face
      }
      set face(BB) {
        if (!(BB < 0 || BB > 5)) switch (this._face = BB, this._face) {
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
    IB.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);