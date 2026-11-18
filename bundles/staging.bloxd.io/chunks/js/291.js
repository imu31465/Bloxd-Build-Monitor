export const id = 291;
export const ids = [291];
export const modules = {
  40516: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => EB
    });
    var VB = dB(36150),
      yB = dB(36126),
      pB = dB(39218),
      lB = dB(38902),
      JB = dB(38689),
      YB = dB(37651),
      gB = dB(38880),
      oB = dB(38916),
      kB = dB(36137),
      LB = dB(38645),
      OB = dB(38861),
      DB = dB(38960);
    class uB {
      get renderList() {
        return this._renderList
      }
      set renderList(BB) {
        this._renderList !== BB && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), BB && (this._unObserveRenderList = (0, kB.e)(BB, this._renderListHasChanged)), this._renderList = BB)
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
              const TB = this._renderPassIds[BB];
              this._engine._renderPassNames[TB] = `${this._name}#${BB}`
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
      setMaterialForRendering(BB, TB) {
        let dB;
        dB = Array.isArray(BB) ? BB : [BB];
        for (let VB = 0; VB < dB.length; ++VB)
          for (let BB = 0; BB < this.options.numPasses; ++BB) {
            let yB = dB[VB];
            dB[VB].JF && (yB = dB[VB].myB), yB.setMaterialForRenderPass(this._renderPassIds[BB], void 0 !== TB ? Array.isArray(TB) ? TB[BB] : TB : void 0)
          }
      }
      _freezeActiveMeshes(BB) {
        this._freezeActiveMeshesCancel = (0, LB.c)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, BB)
            for (let BB = 0; BB < this._activeMeshes.length; BB++) this._activeMeshes.data[BB]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((BB, TB) => {
          this._freezeActiveMeshesCancel = null, TB ? (YB.b.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), BB && YB.b.Error(BB)) : (YB.b.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), BB && (YB.b.Error(BB), BB.stack && YB.b.Error(BB.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let BB = 0; BB < this._activeMeshes.length; BB++) this._activeMeshes.data[BB]._unFreeze();
        this._isFrozen = !1
      }
      constructor(BB, TB, dB) {
        this._unObserveRenderList = null, this._renderListHasChanged = (BB, TB) => {
          const dB = this._renderList ? this._renderList.length : 0;
          if (0 === TB && dB > 0 || 0 === dB)
            for (const VB of this._scene.meshes) VB._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new VB.e, this.onAfterRenderObservable = new VB.e, this.onBeforeRenderingManagerRenderObservable = new VB.e, this.onAfterRenderingManagerRenderObservable = new VB.e, this.onInitRenderingObservable = new VB.e, this.onFinishRenderingObservable = new VB.e, this.onFastPathRenderObservable = new VB.e, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new OB.g(256), this._activeBoundingBoxes = new OB.g(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = BB, this._scene = TB, this._engine = this._scene.PD(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...dB
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new oB.d(TB), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const BB of this._scene.lights) BB.getTypeID() === DB.b.LIGHTTYPEID_CLUSTERED_CONTAINER && BB.isSupported && BB._updateBatches(this.activeCamera).render()
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
      _createSceneUBO(BB, TB) {
        const dB = this._scene.PD(),
          VB = new gB.c(dB, void 0, TB, BB, void 0, !1);
        return VB.addUniform("viewProjection", 16), TB && VB.addUniform("viewProjectionR", 16), VB.addUniform("view", 16), VB.addUniform("projection", 16), VB.addUniform("vEyePosition", 4), VB.addUniform("inverseProjection", 16), VB
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const BB = this._engine._currentRenderTarget,
          TB = !(!BB || !BB.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const BB = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${BB} for ${this.name}`, TB)), this._sceneUBOIsMultiview.push(TB)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== TB && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, TB), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = TB);
        const dB = this._sceneUBOs[this._currentSceneUBOIndex++];
        return dB.unbindEffect(), dB
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
      isReadyForRendering(BB, TB) {
        this.prepareRenderList(), this.initRender(BB, TB);
        const dB = this._checkReadiness();
        return this.finishRender(), dB
      }
      prepareRenderList() {
        const BB = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let TB = 0; TB < this._waitingRenderList.length; TB++) {
              const dB = this._waitingRenderList[TB],
                VB = BB.getMeshById(dB);
              VB && this.renderList.push(VB)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const BB = this._scene.meshes;
          for (let TB = 0; TB < BB.length; TB++) {
            const dB = BB[TB];
            this.renderListPredicate(dB) && this.renderList.push(dB)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(BB, TB) {
        const dB = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), dB && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(dB.getViewMatrix(), dB.getProjectionMatrix(!0)), this._scene._activeCamera = dB, this._engine.setViewport(dB.rigParent ? dB.rigParent.viewport : dB.viewport, BB, TB)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const BB = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (BB.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), BB._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== BB.activeCamera && BB.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), BB.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const dB = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[BB], this.onBeforeRenderObservable.notifyObservers(BB);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(BB);
        else {
          const TB = this._prepareRenderingManager(BB),
            dB = this._scene.getOutlineRenderer?.(),
            VB = dB?.enabled;
          dB && (dB.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(BB), this._renderingManager.render(this.customRenderFunction, TB, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(BB), dB && (dB.enabled = VB)
        }
        TB || this.onAfterRenderObservable.notifyObservers(BB), this._engine.currentRenderPassId = dB
      }
      _checkReadiness() {
        const BB = this._scene,
          TB = this._engine.currentRenderPassId;
        let dB = !0;
        BB.getViewMatrix() || BB.updateTransformMatrix();
        const VB = this.options.numPasses;
        for (let yB = 0; yB < VB && dB; yB++) {
          const TB = this.renderList ? this.renderList : BB.frameGraph ? BB.meshes : BB.getActiveMeshes().data,
            pB = this.renderList || BB.frameGraph ? TB.length : BB.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[yB], this.onBeforeRenderObservable.notifyObservers(yB);
          let lB = null,
            JB = pB;
          this.getCustomRenderList && (lB = this.getCustomRenderList(yB, TB, pB), lB && (JB = lB.length)), lB || (lB = TB), this.options.doNotChangeAspectRatio || BB.updateTransformMatrix(!0);
          for (let BB = 0; BB < JB && dB; ++BB) {
            const TB = lB[BB];
            if (!TB.isEnabled() || TB.isBlocked || !TB.isVisible || !TB.oN) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(TB, this.refreshRate, !0)) {
                dB = !1;
                continue
              }
            } else if (!TB.isReady(!0)) {
              dB = !1;
              continue
            }
            let VB = TB._edgesRenderer,
              yB = TB.hasThinInstances;
            if (TB.JF) {
              const BB = TB.myB;
              BB.edgesShareWithInstances && BB._edgesRenderer?.isEnabled && (VB = BB._edgesRenderer, yB = !0)
            } else TB.vyB && TB.edgesShareWithInstances && (yB = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && VB?.isEnabled && (VB.isReady(yB) || (dB = !1))
          }
          if (this.renderParticles && BB.particlesEnabled) {
            const TB = this.particleSystemList || BB.kN;
            for (const BB of TB) BB.isReady() || (dB = !1)
          }
          if (this.renderSprites && BB.spritesEnabled) {
            const TB = this.spriteManagerList || BB.spriteManagers;
            if (TB)
              for (const VB of TB) BB.activeCamera && 0 === (VB.layerMask & BB.activeCamera.layerMask) || VB.isReady && !VB.isReady() && (dB = !1)
          }
          this.onAfterRenderObservable.notifyObservers(yB), VB > 1 && (BB.incrementRenderId(), BB.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = TB, dB
      }
      _prepareRenderingManager() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const dB = this._scene;
        let VB, yB, pB = null;
        const lB = this.renderList ? this.renderList : dB.frameGraph ? dB.meshes : dB.getActiveMeshes().data,
          JB = this.renderList || dB.frameGraph ? lB.length : dB.getActiveMeshes().length;
        if (this.getCustomRenderList && (pB = this.getCustomRenderList(BB, lB, JB)), pB) VB = pB.length, yB = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !TB && !this._engine.isWebGPU) return lB;
          this._defaultRenderListPrepared = !0, pB = lB, VB = JB, yB = !this.renderList || this.forceLayerMaskCheck
        }
        const YB = dB.activeCamera,
          gB = this.cameraForLOD ?? YB,
          oB = dB.getBoundingBoxRenderer?.();
        if (dB._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && oB) {
            oB.reset();
            for (let BB = 0; BB < this._activeBoundingBoxes.length; BB++) {
              const TB = this._activeBoundingBoxes.data[BB];
              oB.renderList.push(TB)
            }
          }
          return pB
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), oB && oB.reset(), this.renderMeshes) {
          const BB = dB.getRenderId(),
            TB = dB.getFrameId();
          for (let lB = 0; lB < VB; lB++) {
            const VB = pB[lB];
            if (VB && !VB.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(VB, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!VB.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let pB, lB;
              if (gB) {
                const BB = VB._internalAbstractMeshDataInfo._currentLOD.get(gB);
                BB && BB[1] === TB ? pB = BB[0] : (pB = dB.customLODSelector ? dB.customLODSelector(VB, gB) : VB.getLOD(gB), BB ? (BB[0] = pB, BB[1] = TB) : VB._internalAbstractMeshDataInfo._currentLOD.set(gB, [pB, TB]))
              } else pB = VB;
              if (!pB) continue;
              if (pB !== VB && 0 !== pB.billboardMode && pB.computeWorldMatrix(), pB._preActivateForIntermediateRendering(BB), lB = !(!yB || !YB) && 0 === (VB.layerMask & YB.layerMask), VB.isEnabled() && VB.isVisible && VB.oN && !lB) {
                if (this._activeMeshes.push(VB), pB._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, pB !== VB && pB._activate(BB, !0), this.enableBoundingBoxRendering && oB && oB._preActiveMesh(VB), VB._activate(BB, !0) && VB.oN.length) {
                  VB.JF ? VB._internalAbstractMeshDataInfo._actAsRegularMesh && (pB = VB) : pB._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, pB._internalAbstractMeshDataInfo._isActiveIntermediate = !0, dB._prepareSkeleton(pB);
                  for (let BB = 0; BB < pB.oN.length; BB++) {
                    const TB = pB.oN[BB];
                    this.enableBoundingBoxRendering && oB && oB._evaluateSubMesh(VB, TB), this._renderingManager.dispatch(TB, pB)
                  }
                }
                VB._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && oB && TB)
          for (let kB = 0; kB < oB.renderList.length; kB++) {
            const BB = oB.renderList.data[kB];
            this._activeBoundingBoxes.push(BB)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const BB = this.particleSystemList || dB.kN;
          for (let TB = 0; TB < BB.length; TB++) {
            const dB = BB[TB],
              VB = dB.emitter;
            dB.isStarted() && VB && (!VB.position || VB.isEnabled()) && this._renderingManager.dispatchParticles(dB)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return pB
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(BB, TB, dB, VB)
      }
      setRenderingAutoClearDepthStencil(BB, TB) {
        let dB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          VB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(BB, TB, dB, VB), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const BB = new uB(this.name, this._scene, this.options);
        return this.renderList && (BB.renderList = this.renderList.slice(0)), BB
      }
      dispose() {
        const BB = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          TB = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let dB = 0; dB < TB; dB++) {
          const TB = BB[dB];
          TB && void 0 !== TB.getMaterialForRenderPass(this.renderPassId) && TB.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const dB of this._sceneUBOs) dB.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === uB.REFRESHRATE_RENDER_ONCE && (this.refreshRate = uB.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    uB.REFRESHRATE_RENDER_ONCE = 0, uB.REFRESHRATE_RENDER_ONEVERYFRAME = 1, uB.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var HB = dB(38629);
    class EB extends pB.f {
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
      setMaterialForRendering(BB, TB) {
        this._objectRenderer.setMaterialForRendering(BB, TB)
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
        const TB = this.jU();
        TB && TB.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(BB, TB, dB) {
        let lB, JB, gB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          oB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          kB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          LB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          OB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : pB.f.TRILINEAR_SAMPLINGMODE,
          DB = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          HB = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          EB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          vB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          mB = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          iB = arguments.length > 13 ? arguments[13] : void 0,
          NB = arguments.length > 14 ? arguments[14] : void 0,
          tB = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          fB = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          sB = !0,
          MB = !1;
        if ("object" === typeof gB) {
          const BB = gB;
          gB = !!BB.generateMipMaps, oB = BB.doNotChangeAspectRatio ?? !0, kB = BB.type ?? 0, LB = !!BB.isCube, OB = BB.samplingMode ?? pB.f.TRILINEAR_SAMPLINGMODE, DB = BB.generateDepthBuffer ?? !0, HB = !!BB.generateStencilBuffer, EB = !!BB.isMulti, vB = BB.format ?? 5, mB = !!BB.delayAllocation, iB = BB.samples, NB = BB.creationFlags, tB = !!BB.noColorAttachment, fB = !!BB.useSRGBBuffer, lB = BB.colorAttachment, sB = BB.gammaSpace ?? sB, JB = BB.existingObjectRenderer, MB = !!BB.enableClusteredLights
        }
        if (super(null, dB, !gB, void 0, OB, void 0, void 0, void 0, void 0, vB), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new VB.e, this.onAfterUnbindObservable = new VB.e, this.onClearObservable = new VB.e, this.onResizeObservable = new VB.e, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = yB.p.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(dB = this.jU())) return;
        const zB = this.jU().PD();
        this._gammaSpace = sB, this._coordinatesMode = pB.f.PROJECTION_MODE, this.name = BB, this.isRenderTarget = !0, this._initialSizeParameter = TB, this._dontDisposeObjectRenderer = !!JB, this._processSizeParameter(TB), this._objectRenderer = JB ?? new uB(BB, dB, {
          numPasses: LB ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: oB,
          enableClusteredLights: MB
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const BB = this._scene;
          if (!this._disableEngineStages)
            for (const TB of BB._beforeRenderTargetClearStage) TB.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(zB) : this.skipInitialClear || zB.clear(this.clearColor ?? BB.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || BB.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const TB of BB._beforeRenderTargetDrawStage) TB.action(this, this._currentFaceIndex, this._currentLayer);
          zB._debugPushGroup && zB._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (zB._debugPopGroup && zB._debugPopGroup(), !this._disableEngineStages)
            for (const TB of this._scene._afterRenderTargetDrawStage) TB.action(this, this._currentFaceIndex, this._currentLayer);
          const BB = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const TB of this._scene._afterRenderTargetPostProcessStage) TB.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = BB), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), zB) : YB.b.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(zB) : this.skipInitialClear || zB.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = zB.onResizeObservable.add((() => {})), this._generateMipMaps = !!gB, this._doNotChangeAspectRatio = oB, EB || (this._renderTargetOptions = {
          generateMipMaps: gB,
          type: kB,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: DB,
          generateStencilBuffer: HB,
          samples: iB,
          creationFlags: NB,
          noColorAttachment: tB,
          useSRGBBuffer: fB,
          colorAttachment: lB,
          label: this.name
        }, this.samplingMode === pB.f.NEAREST_SAMPLINGMODE && (this.wrapU = pB.f.CLAMP_ADDRESSMODE, this.wrapV = pB.f.CLAMP_ADDRESSMODE), mB || (LB ? (this._renderTarget = dB.PD().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = pB.f.INVCUBIC_MODE, this._textureMatrix = yB.b.Identity()) : this._renderTarget = dB.PD().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== iB && (this.samples = iB)))
      }
      createDepthStencilTexture() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          pB = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(BB, TB, dB, VB, yB, pB)
      }
      _processSizeParameter(BB) {
        if (BB.ratio) {
          this._sizeRatio = BB.ratio;
          const TB = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(TB.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(TB.getRenderHeight(), this._sizeRatio)
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
          const BB = this.jU();
          if (!BB) return;
          this._postProcessManager = new lB.c(BB), this._postProcesses = new Array
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
        const TB = this._postProcesses.indexOf(BB); - 1 !== TB && (this._postProcesses.splice(TB, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
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
        const TB = this._size.depth;
        return TB || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(BB) {
        const TB = Math.max(1, this.getRenderSize() * BB);
        this.resize(TB)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(BB) {
        const TB = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const dB = this.jU();
        dB && (this._processSizeParameter(BB), this._renderTarget = TB ? dB.PD().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : dB.PD().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(BB, TB)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => dB(40532))).then((BB => this._dumpTools = BB))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const BB = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), BB
      }
      _render() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const dB = this.jU();
        if (!dB) return;
        void 0 !== this.useCameraPostProcesses && (BB = this.useCameraPostProcesses);
        const VB = dB.PD();
        if (VB._debugPushGroup && VB._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let yB = 0; yB < 6; yB++) this._renderToTarget(yB, BB, TB), dB.incrementRenderId(), dB.resetCachedMaterial();
          else this._renderToTarget(0, BB, TB);
        else
          for (let yB = 0; yB < this.getRenderLayers(); yB++) this._renderToTarget(0, BB, TB, yB), dB.incrementRenderId(), dB.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), VB._debugPopGroup && VB._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(BB, TB) {
        const dB = BB * TB,
          VB = (0, JB.n)(dB + 16384 / (128 + dB));
        return Math.min((0, JB.c)(BB), VB)
      }
      _bindFrameBuffer() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const dB = this.jU();
        if (!dB) return;
        const VB = dB.PD();
        this._renderTarget && VB.bindFramebuffer(this._renderTarget, this.isCube ? BB : void 0, void 0, void 0, this.ignoreCameraViewport, 0, TB)
      }
      _unbindFrameBuffer(BB, TB) {
        this._renderTarget && BB.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(TB)
        }))
      }
      _prepareFrame(BB, TB, dB, VB) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(TB, dB) : VB && BB.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(TB, dB)
      }
      _renderToTarget(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const yB = this.jU();
        if (!yB) return;
        const pB = yB.PD();
        this._currentFaceIndex = BB, this._currentLayer = VB, this._currentUseCameraPostProcess = TB, this._currentDumpForDebug = dB, this._prepareFrame(yB, BB, VB, TB), this._objectRenderer.render(BB + VB, !0), this._unbindFrameBuffer(pB, BB), this._texture && this.isCube && 5 === BB && pB.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(BB, TB, dB, VB)
      }
      setRenderingAutoClearDepthStencil(BB, TB) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(BB, TB)
      }
      clone() {
        const BB = this.getSize(),
          TB = new EB(this.name, BB, this.jU(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return TB.hasAlpha = this.hasAlpha, TB.level = this.level, TB.coordinatesMode = this.coordinatesMode, this.renderList && (TB.renderList = this.renderList.slice(0)), TB
      }
      serialize() {
        if (!this.name) return null;
        const BB = super.serialize();
        if (BB.renderTargetSize = this.getRenderSize(), BB.renderList = [], this.renderList)
          for (let TB = 0; TB < this.renderList.length; TB++) BB.renderList.push(this.renderList[TB].id);
        return BB
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.jU().PD().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const BB = this.jU();
        if (!BB) return;
        let TB = BB.customRenderTargets.indexOf(this);
        TB >= 0 && BB.customRenderTargets.splice(TB, 1);
        for (const dB of BB.cameras) TB = dB.customRenderTargets.indexOf(this), TB >= 0 && dB.customRenderTargets.splice(TB, 1);
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
    EB.REFRESHRATE_RENDER_ONCE = uB.REFRESHRATE_RENDER_ONCE, EB.REFRESHRATE_RENDER_ONEVERYFRAME = uB.REFRESHRATE_RENDER_ONEVERYFRAME, EB.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = uB.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(EB.prototype, "noPrePassRenderer") || Object.defineProperty(EB.prototype, "noPrePassRenderer", (0, HB.d)("RenderTargetTexture", "noPrePassRenderer"))
  },
  40501: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => gB,
      g: () => oB
    });
    var VB = dB(38897),
      yB = dB(37029),
      pB = dB(36150),
      lB = dB(38591),
      JB = dB(39069);
    const YB = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class gB {
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YB;
        this._fullscreenViewport = new yB.c(0, 0, 1, 1);
        const dB = TB.positions ?? YB.positions,
          pB = TB.indices ?? YB.indices;
        this.engine = BB, this._vertexBuffers = {
          [VB.m.PositionKind]: new VB.m(BB, dB, VB.m.PositionKind, !1, !1, 2)
        }, this._indexBuffer = BB.createIndexBuffer(pB), this._indexBufferLength = pB.length, this._onContextRestoredObserver = BB.onContextRestoredObservable.add((() => {
          this._indexBuffer = BB.createIndexBuffer(pB);
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
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = TB, this.engine.stencilState.stencilTest = dB, this.engine.enableEffect(BB.drawWrapper), this.bindBuffers(BB.effect), BB.onApplyObservable.notifyObservers({})
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
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!BB.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const dB = null === TB ? null : this._isRenderTargetTexture(TB) ? TB.renderTarget : TB;
        dB && this.engine.bindFramebuffer(dB), this.applyEffectWrapper(BB), this.draw(), dB && this.engine.unBindFramebuffer(dB), this.restoreStates()
      }
      dispose() {
        const BB = this._vertexBuffers[VB.m.PositionKind];
        BB && (BB.dispose(), delete this._vertexBuffers[VB.m.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class oB {
      static RegisterShaderCodeProcessing(BB, TB) {
        TB ? oB._CustomShaderCodeProcessing[BB ?? ""] = TB : delete oB._CustomShaderCodeProcessing[BB ?? ""]
      }
      static _GetShaderCodeProcessing(BB) {
        return oB._CustomShaderCodeProcessing[BB] ?? oB._CustomShaderCodeProcessing[""]
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
        this.alphaMode = 0, this.onEffectCreatedObservable = new pB.e(void 0, !0), this.onApplyObservable = new pB.e, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
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
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.onContextRestoredObservable.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new JB.b(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const TB = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, TB, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          VB = arguments.length > 2 ? arguments[2] : void 0,
          yB = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, yB && this._importPromises.push(...yB);
        const pB = this.options.engine.isWebGPU && !oB.ForceGLSL;
        this._gatherImports(pB, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(pB && this._webGPUReady ? dB.e(346).then((() => dB(59951))) : dB.e(335).then((() => dB(59725)))), void 0 !== VB && VB(pB, this._importPromises), pB && this._webGPUReady && (this.options.shaderLanguage = 1), BB || this.updateEffect(TB)
      }
      updateEffect() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          VB = arguments.length > 3 ? arguments[3] : void 0,
          yB = arguments.length > 4 ? arguments[4] : void 0,
          pB = arguments.length > 5 ? arguments[5] : void 0,
          JB = arguments.length > 6 ? arguments[6] : void 0,
          YB = arguments.length > 7 ? arguments[7] : void 0;
        const gB = oB._GetShaderCodeProcessing(this.name);
        if (gB?.defineCustomBindings) {
          const VB = TB?.slice() ?? [];
          VB.push(...this.options.uniforms);
          const yB = dB?.slice() ?? [];
          yB.push(...this.options.samplers), BB = gB.defineCustomBindings(this.name, BB, VB, yB), TB = VB, dB = yB
        }
        this.options.defines = BB || "";
        const kB = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let LB;
        LB = this.options.extraInitializationsAsync ? async () => {
          await (kB?.()), await this.options.extraInitializationsAsync()
        }: kB, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: JB ?? this._shaderPath.vertex,
          fragment: YB ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: TB || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: dB || this.options.samplers,
          defines: null !== BB ? BB : "",
          fallbacks: null,
          onCompiled: yB ?? this.options.onCompiled,
          onError: pB ?? null,
          indexParameters: VB || this.options.indexParameters,
          processCodeAfterIncludes: gB?.processCodeAfterIncludes ? (BB, TB) => gB.processCodeAfterIncludes(this.name, BB, TB) : null,
          processFinalCode: gB?.processFinalCode ? (BB, TB) => gB.processFinalCode(this.name, BB, TB) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: LB
        }, this.options.engine) : this._drawWrapper.effect = new lB.e(this._shaderPath, this.options.attributeNames, TB || this.options.uniforms, dB || this.options.samplerNames, this.options.engine, BB, void 0, yB || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, LB), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !BB && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), oB._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.PD().onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    oB.ForceGLSL = !1, oB._CustomShaderCodeProcessing = {}
  },
  40532: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      Dispose: () => vB,
      DumpData: () => EB,
      DumpDataAsync: () => HB,
      DumpFramebuffer: () => uB,
      DumpTools: () => mB,
      EncodeImageAsync: () => DB,
      RegisterDumpTools: () => NB
    });
    var VB = dB(38745),
      yB = dB(40501),
      pB = dB(38848),
      lB = dB(36157),
      JB = dB(36148),
      YB = dB(37651),
      gB = dB(38811),
      oB = dB(38750);
    let kB = null;
    async function LB() {
      return kB || (kB = async function() {
        const BB = JB.c.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        BB instanceof OffscreenCanvas && YB.b.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: TB
        } = await Promise.resolve().then((() => dB(38584)));
        if (!TB.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const VB = new TB(BB, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        JB.c.Instances.pop(), JB.c.OnEnginesDisposedObservable.add((BB => {
          VB && BB !== VB && !VB.WdB && 0 === JB.c.Instances.length && vB()
        })), VB.getCaps().parallelShaderCompile = void 0;
        const pB = new yB.c(VB),
          {
            passPixelShader: lB
          } = await dB.e(354).then((() => dB(60010))),
          gB = new yB.g({
            engine: VB,
            name: lB.name,
            fragmentShader: lB.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: BB,
          dumpEngine: {
            engine: VB,
            renderer: pB,
            wrapper: gB
          }
        }
      }()), await kB
    }
    let OB = (() => {
      var BB;
      let TB, dB = [];
      return BB = class {
        static async EncodeImageAsync(BB, TB, dB, VB, yB, lB) {
          const JB = await LB(),
            YB = JB.dumpEngine;
          YB.engine.setSize(TB, dB, !0);
          const gB = YB.engine.createRawTexture(BB, TB, dB, 5, !1, !yB, 1);
          return YB.renderer.setViewport(), YB.renderer.applyEffectWrapper(YB.wrapper), YB.wrapper.effect._bindTexture("textureSampler", gB), YB.renderer.draw(), gB.dispose(), await new Promise(((BB, TB) => {
            pB.h.ToBlob(JB.canvas, (dB => {
              dB ? BB(dB) : TB(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), VB, lB)
          }))
        }
      }, (() => {
        const yB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        TB = [oB.m], (0, VB.g)(BB, null, TB, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: BB => "EncodeImageAsync" in BB,
            get: BB => BB.EncodeImageAsync
          },
          metadata: yB
        }, null, dB), yB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: yB
        }), (0, VB.h)(BB, dB)
      })(), BB
    })();
    const DB = OB.EncodeImageAsync;
    async function uB(BB, TB, dB, VB) {
      let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        pB = arguments.length > 5 ? arguments[5] : void 0,
        lB = arguments.length > 6 ? arguments[6] : void 0;
      const JB = await dB.readPixels(0, 0, BB, TB);
      EB(BB, TB, new Uint8Array(JB.buffer), VB, yB, pB, !0, void 0, lB)
    }
    async function HB(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        yB = arguments.length > 4 ? arguments[4] : void 0,
        JB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        oB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        kB = arguments.length > 7 ? arguments[7] : void 0;
      if (dB instanceof Float32Array) {
        const BB = new Uint8Array(dB.length);
        let TB = dB.length;
        for (; TB--;) {
          const VB = dB[TB];
          BB[TB] = Math.round(255 * (0, lB.Clamp)(VB))
        }
        dB = BB
      }
      const LB = await OB.EncodeImageAsync(dB, BB, TB, VB, JB, kB);
      void 0 !== yB && pB.h.DownloadBlob(LB, yB), LB.type !== VB && YB.b.Warn(`DumpData: The requested mimeType '${VB}' is not supported. The result has mimeType '${LB.type}' instead.`);
      const DB = await LB.arrayBuffer();
      return oB ? DB : `data:${VB};base64,${(0,gB.k)(DB)}`
    }

    function EB(BB, TB, dB, VB) {
      let yB = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== yB || VB || (yB = ""), HB(BB, TB, dB, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", yB, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((BB => {
        VB && VB(BB)
      }))
    }

    function vB() {
      kB && (kB?.then((BB => {
        BB.canvas instanceof HTMLCanvasElement && BB.canvas.remove(), BB.dumpEngine && (BB.dumpEngine.engine.dispose(), BB.dumpEngine.renderer.dispose(), BB.dumpEngine.wrapper.dispose())
      })), kB = null)
    }
    const mB = {
      DumpData: EB,
      DumpDataAsync: HB,
      DumpFramebuffer: uB,
      Dispose: vB
    };
    let iB = !1;

    function NB() {
      if (iB) return;
      iB = !0;
      pB.h.DumpData = EB, pB.h.DumpDataAsync = HB, pB.h.DumpFramebuffer = uB
    }
  },
  40510: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => OB,
      h: () => DB,
      j: () => uB
    });
    var VB = dB(39218),
      yB = dB(40516),
      pB = dB(38745),
      lB = dB(40496),
      JB = dB(38772),
      YB = dB(40525),
      gB = dB(38750);
    class oB extends lB.e {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(BB, TB) {
        let dB = arguments.length > 4 ? arguments[4] : void 0;
        const VB = {
          size: "number" === typeof TB ? TB : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: dB,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...TB
        };
        super(BB, YB.g.FragmentUrl, {
          effectWrapper: "number" !== typeof TB && TB.effectWrapper ? void 0 : new YB.g(BB, dB, VB),
          ...VB
        })
      }
      static _Parse(BB, TB, dB, VB) {
        return JB.c.Parse((() => new oB(BB.name, BB.options, TB, BB.renderTargetSamplingMode, BB._engine, BB.reusable)), BB, dB, VB)
      }
    }(() => {
      var BB;
      let TB, dB = lB.e,
        VB = [];
      BB = class extends dB {
        get face() {
          return this._effectWrapper.face
        }
        set face(BB) {
          this._effectWrapper.face = BB
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(BB, TB) {
          let dB = arguments.length > 4 ? arguments[4] : void 0;
          const yB = {
            size: "number" === typeof TB ? TB : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: dB,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...TB
          };
          super(BB, YB.g.FragmentUrl, {
            effectWrapper: "number" !== typeof TB && TB.effectWrapper ? void 0 : new YB.e(BB, dB, yB),
            ...yB
          }), (0, pB.h)(this, VB)
        }
        static _Parse(TB, dB, VB, yB) {
          return JB.c.Parse((() => new BB(TB.name, TB.options, dB, TB.renderTargetSamplingMode, TB._engine, TB.reusable)), TB, VB, yB)
        }
      }, (() => {
        const yB = "function" === typeof Symbol && Symbol.metadata ? Object.create(dB[Symbol.metadata] ?? null) : void 0;
        TB = [(0, gB.W)()], (0, pB.g)(BB, null, TB, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: BB => "face" in BB,
            get: BB => BB.face
          },
          metadata: yB
        }, null, VB), yB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: yB
        })
      })()
    })();
    var kB = dB(36157),
      LB = dB(38825);

    function OB(BB, TB, dB, VB, yB, pB, JB, YB) {
      const gB = TB.PD();
      return TB.isReady = !1, yB = yB ?? TB.samplingMode, VB = VB ?? TB.type, pB = pB ?? TB.format, JB = JB ?? TB.width, YB = YB ?? TB.height, -1 === VB && (VB = 0), new Promise((oB => {
        const kB = new lB.e("postprocess", BB, null, null, 1, null, yB, gB, !1, void 0, VB, void 0, null, !1, pB);
        kB.externalTextureSamplerBinding = !0;
        const LB = gB.createRenderTargetTexture({
          width: JB,
          height: YB
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: yB,
          type: VB,
          format: pB
        });
        kB.onEffectCreatedObservable.addOnce((BB => {
          BB.executeWhenCompiled((() => {
            kB.onApply = BB => {
              BB._bindTexture("textureSampler", TB), BB.setFloat2("scale", 1, 1)
            }, dB.postProcessManager.directRender([kB], LB, !0), gB.restoreDefaultFramebuffer(), gB._releaseTexture(TB), kB && kB.dispose(), LB._swapAndDie(TB), TB.type = VB, TB.format = 5, TB.isReady = !0, oB(TB)
          }))
        }))
      }))
    }
    async function DB(BB, TB, pB) {
      let JB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        YB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        gB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        oB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(BB) {
        if (BB.isReady()) return;
        if (BB.loadingError) throw new Error(BB.errorObject?.message || `Texture ${BB.name} errored while loading.`);
        const TB = BB.onLoadObservable;
        if (TB) return await new Promise((BB => TB.addOnce((() => BB()))));
        const dB = BB._texture?.onLoadedObservable;
        if (dB) return await new Promise((BB => dB.addOnce((() => BB()))));
        throw new Error(`Cannot determine readiness of texture ${BB.name}.`)
      }(BB);
      const LB = BB.getInternalTexture(),
        OB = BB.is3D || !!LB?.is3D,
        {
          width: DB,
          height: uB
        } = BB.getSize(),
        HB = TB ?? DB,
        EB = pB ?? uB;
      if (gB || OB || function(BB) {
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
        }(BB.textureFormat) || HB !== DB || EB !== uB) {
        if (BB.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${gB?"RTT":"compression"} is not supported.`);
        return await async function(BB, TB, pB, JB, YB) {
          let gB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const oB = BB.jU(),
            kB = oB.PD(),
            LB = BB.getInternalTexture(),
            OB = BB.is3D || !!LB?.is3D;
          let DB;
          if (kB.isWebGPU ? OB ? await dB.e(350).then((() => dB(59986))) : BB.isCube ? await dB.e(351).then((() => dB(59990))) : await dB.e(352).then((() => dB(59997))) : OB ? await dB.e(347).then((() => dB(59968))) : BB.isCube ? await dB.e(348).then((() => dB(59976))) : await dB.e(349).then((() => dB(59978))), OB) DB = new lB.e("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: VB.f.NEAREST_NEAREST_MIPNEAREST,
            engine: kB,
            shaderLanguage: kB.isWebGPU ? 1 : 0
          });
          else if (BB.isCube) {
            const BB = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            DB = new lB.e("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: VB.f.NEAREST_NEAREST_MIPNEAREST,
              engine: kB,
              defines: BB[JB],
              shaderLanguage: kB.isWebGPU ? 1 : 0
            })
          } else DB = new lB.e("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: VB.f.NEAREST_NEAREST_MIPNEAREST,
            engine: kB,
            shaderLanguage: kB.isWebGPU ? 1 : 0
          });
          await new Promise((BB => {
            DB.onEffectCreatedObservable.addOnce((TB => {
              TB.executeWhenCompiled((() => {
                BB(0)
              }))
            }))
          }));
          const uB = new yB.b("temp", {
            width: TB,
            height: pB
          }, oB, !1);
          DB.onApply = function(TB) {
            TB.setTexture("textureSampler", BB), TB.setFloat("lod", YB), TB.setInt("gamma", BB.gammaSpace ? 1 : 0), OB && TB.setFloat("slice", gB)
          };
          try {
            if (uB.renderTarget && LB) {
              const dB = LB.samplingMode;
              0 !== YB ? BB.updateSamplingMode(VB.f.NEAREST_NEAREST_MIPNEAREST) : BB.updateSamplingMode(VB.f.NEAREST_NEAREST), oB.postProcessManager.directRender([DB], uB.renderTarget, !0), BB.updateSamplingMode(dB);
              const yB = await kB.readPixels(0, 0, TB, pB),
                lB = new Uint8Array(yB.buffer, yB.byteOffset, yB.byteLength);
              return kB.unBindFramebuffer(uB.renderTarget), lB
            }
            throw Error("Render to texture failed.")
          } finally {
            uB.dispose(), DB.dispose()
          }
        }(BB, HB, EB, JB, YB, oB)
      }
      let vB = await BB.readPixels(JB, YB);
      if (!vB) throw new Error(`Failed to read pixels from texture ${BB.name}.`);
      if (vB instanceof Float32Array) {
        const BB = new Uint8Array(vB.length);
        let TB = vB.length;
        for (; TB--;) {
          const dB = vB[TB];
          BB[TB] = Math.round(255 * (0, kB.Clamp)(dB))
        }
        vB = BB
      }
      const mB = HB * EB,
        iB = 4 * mB;
      if (vB.length !== iB) {
        const BB = 0 === mB ? 0 : vB.length / mB;
        if (1 === BB || 2 === BB || 3 === BB) {
          const TB = new Uint8Array(iB);
          for (let dB = 0, VB = 0, yB = 0; dB < mB; dB++, yB += 4) {
            const dB = vB[VB++];
            if (1 === BB) {
              TB[yB] = dB, TB[yB + 1] = dB, TB[yB + 2] = dB, TB[yB + 3] = 255;
              continue
            }
            const pB = vB[VB++];
            2 !== BB ? (TB[yB] = dB, TB[yB + 1] = pB, TB[yB + 2] = vB[VB++], TB[yB + 3] = 255) : (TB[yB] = dB, TB[yB + 1] = pB, TB[yB + 2] = 0, TB[yB + 3] = 255)
          }
          return TB
        }
      }
      return vB
    }
    const uB = {
      CreateResizedCopy: function(BB, TB, dB) {
        let pB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const lB = BB.jU(),
          JB = lB.PD(),
          YB = new yB.b("resized" + BB.name, {
            width: TB,
            height: dB
          }, lB, !BB.noMipmap, !0, BB._texture.type, !1, BB.samplingMode, !1);
        YB.wrapU = BB.wrapU, YB.wrapV = BB.wrapV, YB.uOffset = BB.uOffset, YB.vOffset = BB.vOffset, YB.uScale = BB.uScale, YB.vScale = BB.vScale, YB.uAng = BB.uAng, YB.vAng = BB.vAng, YB.wAng = BB.wAng, YB.coordinatesIndex = BB.coordinatesIndex, YB.level = BB.level, YB.anisotropicFilteringLevel = BB.anisotropicFilteringLevel, YB._texture.isReady = !1, BB.wrapU = VB.f.CLAMP_ADDRESSMODE, BB.wrapV = VB.f.CLAMP_ADDRESSMODE;
        const gB = new oB("pass", 1, null, pB ? VB.f.BILINEAR_SAMPLINGMODE : VB.f.NEAREST_SAMPLINGMODE, JB, !1, 0);
        return gB.externalTextureSamplerBinding = !0, gB.onEffectCreatedObservable.addOnce((TB => {
          TB.executeWhenCompiled((() => {
            gB.onApply = function(TB) {
              TB.setTexture("textureSampler", BB)
            };
            const TB = YB.renderTarget;
            TB && (lB.postProcessManager.directRender([gB], TB), JB.unBindFramebuffer(TB), YB.disposeFramebufferObjects(), gB.dispose(), YB.getInternalTexture().isReady = !0)
          }))
        })), YB
      },
      ApplyPostProcess: OB,
      ToHalfFloat: LB.i,
      FromHalfFloat: LB.d,
      GetTextureDataAsync: DB
    }
  },
  40496: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => DB
    });
    var VB = dB(38745),
      yB = dB(38861),
      pB = dB(36150),
      lB = dB(36126),
      JB = dB(38591),
      YB = dB(38750),
      gB = dB(38772),
      oB = dB(36166),
      kB = dB(38652),
      LB = dB(38689),
      OB = dB(40501);
    let DB = (() => {
        var BB;
        let TB, JB, kB, DB, uB, EB, vB, mB, iB, NB, tB, fB, sB, MB, zB, wB, UB = [],
          FB = [],
          KB = [],
          rB = [],
          IB = [],
          cB = [],
          SB = [],
          PB = [],
          QB = [],
          RB = [],
          aB = [],
          ZB = [],
          XB = [],
          WB = [],
          hB = [],
          CB = [],
          GB = [],
          qB = [],
          xB = [],
          jB = [],
          AB = [],
          bB = [],
          nB = [],
          eB = [],
          BT = [],
          TT = [],
          dT = [],
          VT = [],
          yT = [];
        return BB = class {
          static get ForceGLSL() {
            return OB.g.ForceGLSL
          }
          static set ForceGLSL(BB) {
            OB.g.ForceGLSL = BB
          }
          static RegisterShaderCodeProcessing(BB, TB) {
            OB.g.RegisterShaderCodeProcessing(BB, TB)
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
            return this.K8
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.YBB(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(TB, dB, JB, YB, gB, oB) {
            let kB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              LB = arguments.length > 7 ? arguments[7] : void 0,
              DB = arguments.length > 8 ? arguments[8] : void 0,
              uB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              EB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              vB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              mB = arguments.length > 12 ? arguments[12] : void 0,
              iB = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              NB = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              tB = arguments.length > 15 ? arguments[15] : void 0,
              fB = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, VB.h)(this, UB), null), this.uniqueId = (0, VB.h)(this, FB, void 0), this.width = ((0, VB.h)(this, KB), (0, VB.h)(this, rB, -1)), this.height = ((0, VB.h)(this, IB), (0, VB.h)(this, cB, -1)), this.nodeMaterialSource = ((0, VB.h)(this, SB), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, VB.h)(this, PB, void 0), this.clearColor = ((0, VB.h)(this, QB), (0, VB.h)(this, RB, void 0)), this.autoClear = ((0, VB.h)(this, aB), (0, VB.h)(this, ZB, !0)), this.forceAutoClearInAlphaMode = ((0, VB.h)(this, XB), (0, VB.h)(this, WB, !1)), this.alphaConstants = ((0, VB.h)(this, hB), (0, VB.h)(this, CB, void 0)), this.animations = ((0, VB.h)(this, GB), []), this.enablePixelPerfectMode = (0, VB.h)(this, qB, !1), this.forceFullscreenViewport = ((0, VB.h)(this, xB), (0, VB.h)(this, jB, !0)), this.inspectableCustomProperties = (0, VB.h)(this, AB), this.scaleMode = (0, VB.h)(this, bB, 1), this.alwaysForcePOT = ((0, VB.h)(this, nB), (0, VB.h)(this, eB, !1)), this._samples = ((0, VB.h)(this, BT), (0, VB.h)(this, TT, 1)), this.adaptScaleToCurrentViewport = ((0, VB.h)(this, dT), (0, VB.h)(this, VT, !1)), this.doNotSerialize = ((0, VB.h)(this, yT), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new yB.g(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new lB.l(1, 1), this._texelSize = lB.l.Zero(), this.onActivateObservable = new pB.e, this.onSizeChangedObservable = new pB.e, this.onApplyObservable = new pB.e, this.onBeforeRenderObservable = new pB.e, this.onAfterRenderObservable = new pB.e, this.lF = new pB.e, HB();
            let sB, MB = 1,
              zB = null;
            if (JB && !Array.isArray(JB)) {
              const BB = JB;
              JB = BB.uniforms ?? null, YB = BB.samplers ?? null, MB = BB.size ?? 1, oB = BB.camera ?? null, kB = BB.samplingMode ?? 1, LB = BB.engine, DB = BB.reusable, uB = Array.isArray(BB.defines) ? BB.defines.join("\n") : BB.defines ?? null, EB = BB.textureType ?? 0, vB = BB.vertexUrl ?? "postprocess", mB = BB.indexParameters, iB = BB.blockCompilation ?? !1, NB = BB.textureFormat ?? 5, tB = BB.shaderLanguage ?? 0, zB = BB.uniformBuffers ?? null, fB = BB.extraInitializations, sB = BB.effectWrapper
            } else gB && (MB = "number" === typeof gB ? gB : {
              width: gB.width,
              height: gB.height
            });
            if (this._useExistingThinPostProcess = !!sB, this._effectWrapper = sB ?? new OB.g({
                name: TB,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: dB,
                engine: LB || oB?.jU().PD(),
                uniforms: JB,
                samplers: YB,
                uniformBuffers: zB,
                defines: uB,
                vertexUrl: vB,
                indexParameters: mB,
                blockCompilation: !0,
                shaderLanguage: tB,
                extraInitializations: void 0
              }), this.name = TB, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != oB ? (this.K8 = oB, this._scene = oB.jU(), oB.attachPostProcess(this), this._engine = this._scene.PD(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : LB && (this._engine = LB, this._engine.postProcesses.push(this)), this._options = MB, this.renderTargetSamplingMode = kB || 1, this._reusable = DB || !1, this._textureType = EB, this._textureFormat = NB, this._shaderLanguage = tB || 0, this._samplers = YB || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = dB, this._vertexUrl = vB, this._parameters = JB || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = zB || [], this._indexParameters = mB, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const TB = [];
              this._gatherImports(this._engine.isWebGPU && !BB.ForceGLSL, TB), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(iB, uB, fB, TB)
            }
          }
          _gatherImports() {
            let BB = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? BB.push(Promise.all([dB.e(346).then((() => dB(59951)))])) : BB.push(Promise.all([dB.e(335).then((() => dB(59725)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          PD() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(BB) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = BB, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new yB.g(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              VB = arguments.length > 3 ? arguments[3] : void 0,
              yB = arguments.length > 4 ? arguments[4] : void 0,
              pB = arguments.length > 5 ? arguments[5] : void 0,
              lB = arguments.length > 6 ? arguments[6] : void 0,
              JB = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(BB, TB, dB, VB, yB, pB, lB, JB), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(BB, TB) {
            let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let yB = 0; yB < this._textureCache.length; yB++)
              if (this._textureCache[yB].texture.width === BB.width && this._textureCache[yB].texture.height === BB.height && this._textureCache[yB].postProcessChannel === dB && this._textureCache[yB].texture._generateDepthBuffer === TB.generateDepthBuffer && this._textureCache[yB].texture.samples === TB.samples) return this._textureCache[yB].texture;
            const VB = this._engine.createRenderTargetTexture(BB, TB);
            return this._textureCache.push({
              texture: VB,
              postProcessChannel: dB,
              lastUsedRenderId: -1
            }), VB
          }
          _flushTextureCache() {
            const BB = this._renderId;
            for (let TB = this._textureCache.length - 1; TB >= 0; TB--)
              if (BB - this._textureCache[TB].lastUsedRenderId > 100) {
                let BB = !1;
                for (let dB = 0; dB < this._textures.length; dB++)
                  if (this._textures.data[dB] === this._textureCache[TB].texture) {
                    BB = !0;
                    break
                  } BB || (this._textureCache[TB].texture.dispose(), this._textureCache.splice(TB, 1))
              }
          }
          resize(BB, TB) {
            let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              yB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = BB, this.height = TB;
            let pB = null;
            if (dB)
              for (let YB = 0; YB < dB._postProcesses.length; YB++)
                if (null !== dB._postProcesses[YB]) {
                  pB = dB._postProcesses[YB];
                  break
                } const lB = {
                width: this.width,
                height: this.height
              },
              JB = {
                generateMipMaps: VB,
                generateDepthBuffer: yB || pB === this,
                generateStencilBuffer: (yB || pB === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(lB, JB, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(lB, JB, 1)), this._texelSize.YBB(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let BB;
            if (this._shareOutputWithPostProcess) BB = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) BB = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let TB;
              BB = this.inputTexture;
              for (let dB = 0; dB < this._textureCache.length; dB++)
                if (this._textureCache[dB].texture === BB) {
                  TB = this._textureCache[dB];
                  break
                } TB && (TB.lastUsedRenderId = this._renderId)
            }
            return BB
          }
          activate(BB) {
            let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              dB = arguments.length > 2 ? arguments[2] : void 0;
            const VB = null === BB || void 0 !== BB.cameraRigMode ? BB || this.K8 : null,
              yB = VB?.jU() ?? BB,
              pB = yB.PD(),
              lB = pB.getCaps().maxTextureSize,
              JB = (TB ? TB.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              YB = (TB ? TB.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let gB = this._options.width || JB,
              oB = this._options.height || YB;
            const kB = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let OB = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const BB = pB.currentViewport;
                BB && (gB *= BB.width, oB *= BB.height)
              }(kB || this.alwaysForcePOT) && (this._options.width || (gB = pB.needPOTTextures ? (0, LB.g)(gB, lB, this.scaleMode) : gB), this._options.height || (oB = pB.needPOTTextures ? (0, LB.g)(oB, lB, this.scaleMode) : oB)), this.width === gB && this.height === oB && (OB = this._getTarget()) || this.resize(gB, oB, VB, kB, dB), this._textures.forEach((BB => {
                BB.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(BB, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return OB || (OB = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.YBB(JB / gB, YB / oB), this._engine.bindFramebuffer(OB, 0, JB, YB, this.forceFullscreenViewport)) : (this._scaleRatio.YBB(1, 1), this._engine.bindFramebuffer(OB, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(VB), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : yB.clearColor, yB._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), OB
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
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.PD().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), BB = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", BB?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
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
            let TB;
            if (BB = BB || this.K8, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (TB = this._parentContainer.postProcesses.indexOf(this), TB > -1 && this._parentContainer.postProcesses.splice(TB, 1), this._parentContainer = null), TB = this._engine.postProcesses.indexOf(this), -1 !== TB && this._engine.postProcesses.splice(TB, 1), this.lF.notifyObservers(), BB) {
              if (BB.detachPostProcess(this), TB = BB._postProcesses.indexOf(this), 0 === TB && BB._postProcesses.length > 0) {
                const BB = this.K8._getFirstPostProcess();
                BB && BB.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const BB = gB.c.Serialize(this),
              TB = this.getCamera() || this._scene && this._scene.activeCamera;
            return BB.customType = "BABYLON." + this.getClassName(), BB.cameraId = TB ? TB.id : null, BB.reusable = this._reusable, BB.textureType = this._textureType, BB.fragmentUrl = this._fragmentUrl, BB.parameters = this._parameters, BB.samplers = this._samplers, BB.uniformBuffers = this._uniformBuffers, BB.options = this._options, BB.defines = this._postProcessDefines, BB.textureFormat = this._textureFormat, BB.vertexUrl = this._vertexUrl, BB.indexParameters = this._indexParameters, BB
          }
          clone() {
            const TB = this.serialize();
            TB._engine = this._engine, TB.cameraId = null;
            const dB = BB.Parse(TB, this._scene, "");
            return dB ? (dB.onActivateObservable = this.onActivateObservable.clone(), dB.onSizeChangedObservable = this.onSizeChangedObservable.clone(), dB.onApplyObservable = this.onApplyObservable.clone(), dB.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), dB.onAfterRenderObservable = this.onAfterRenderObservable.clone(), dB._prePassEffectConfiguration = this._prePassEffectConfiguration, dB) : null
          }
          static Parse(BB, TB, dB) {
            const VB = (0, oB.e)(BB.customType);
            if (!VB || !VB._Parse) return null;
            const yB = TB ? TB.getCameraById(BB.cameraId) : null;
            return VB._Parse(BB, yB, TB, dB)
          }
          static _Parse(TB, dB, VB, yB) {
            return gB.c.Parse((() => new BB(TB.name, TB.fragmentUrl, TB.parameters, TB.samplers, TB.options, dB, TB.renderTargetSamplingMode, TB._engine, TB.reusable, TB.defines, TB.textureType, TB.vertexUrl, TB.indexParameters, !1, TB.textureFormat)), TB, VB, yB)
          }
        }, (() => {
          const dB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          TB = [(0, YB.W)()], JB = [(0, YB.W)()], kB = [(0, YB.W)()], DB = [(0, YB.W)()], uB = [(0, YB.W)()], EB = [(0, YB.v)()], vB = [(0, YB.W)()], mB = [(0, YB.W)()], iB = [(0, YB.W)()], NB = [(0, YB.W)()], tB = [(0, YB.W)()], fB = [(0, YB.W)()], sB = [(0, YB.W)()], MB = [(0, YB.W)()], zB = [(0, YB.W)("samples")], wB = [(0, YB.W)()], (0, VB.g)(BB, null, JB, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: BB => "name" in BB,
              get: BB => BB.name
            },
            metadata: dB
          }, null, UB), (0, VB.g)(BB, null, iB, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: BB => "alphaMode" in BB,
              get: BB => BB.alphaMode
            },
            metadata: dB
          }, null, UB), (0, VB.g)(null, null, TB, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: BB => "uniqueId" in BB,
              get: BB => BB.uniqueId,
              set: (BB, TB) => {
                BB.uniqueId = TB
              }
            },
            metadata: dB
          }, FB, KB), (0, VB.g)(null, null, kB, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: BB => "width" in BB,
              get: BB => BB.width,
              set: (BB, TB) => {
                BB.width = TB
              }
            },
            metadata: dB
          }, rB, IB), (0, VB.g)(null, null, DB, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: BB => "height" in BB,
              get: BB => BB.height,
              set: (BB, TB) => {
                BB.height = TB
              }
            },
            metadata: dB
          }, cB, SB), (0, VB.g)(null, null, uB, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: BB => "renderTargetSamplingMode" in BB,
              get: BB => BB.renderTargetSamplingMode,
              set: (BB, TB) => {
                BB.renderTargetSamplingMode = TB
              }
            },
            metadata: dB
          }, PB, QB), (0, VB.g)(null, null, EB, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "clearColor" in BB,
              get: BB => BB.clearColor,
              set: (BB, TB) => {
                BB.clearColor = TB
              }
            },
            metadata: dB
          }, RB, aB), (0, VB.g)(null, null, vB, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: BB => "autoClear" in BB,
              get: BB => BB.autoClear,
              set: (BB, TB) => {
                BB.autoClear = TB
              }
            },
            metadata: dB
          }, ZB, XB), (0, VB.g)(null, null, mB, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: BB => "forceAutoClearInAlphaMode" in BB,
              get: BB => BB.forceAutoClearInAlphaMode,
              set: (BB, TB) => {
                BB.forceAutoClearInAlphaMode = TB
              }
            },
            metadata: dB
          }, WB, hB), (0, VB.g)(null, null, NB, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: BB => "alphaConstants" in BB,
              get: BB => BB.alphaConstants,
              set: (BB, TB) => {
                BB.alphaConstants = TB
              }
            },
            metadata: dB
          }, CB, GB), (0, VB.g)(null, null, tB, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: BB => "enablePixelPerfectMode" in BB,
              get: BB => BB.enablePixelPerfectMode,
              set: (BB, TB) => {
                BB.enablePixelPerfectMode = TB
              }
            },
            metadata: dB
          }, qB, xB), (0, VB.g)(null, null, fB, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: BB => "forceFullscreenViewport" in BB,
              get: BB => BB.forceFullscreenViewport,
              set: (BB, TB) => {
                BB.forceFullscreenViewport = TB
              }
            },
            metadata: dB
          }, jB, AB), (0, VB.g)(null, null, sB, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: BB => "scaleMode" in BB,
              get: BB => BB.scaleMode,
              set: (BB, TB) => {
                BB.scaleMode = TB
              }
            },
            metadata: dB
          }, bB, nB), (0, VB.g)(null, null, MB, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: BB => "alwaysForcePOT" in BB,
              get: BB => BB.alwaysForcePOT,
              set: (BB, TB) => {
                BB.alwaysForcePOT = TB
              }
            },
            metadata: dB
          }, eB, BT), (0, VB.g)(null, null, zB, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: BB => "_samples" in BB,
              get: BB => BB._samples,
              set: (BB, TB) => {
                BB._samples = TB
              }
            },
            metadata: dB
          }, TT, dT), (0, VB.g)(null, null, wB, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: BB => "adaptScaleToCurrentViewport" in BB,
              get: BB => BB.adaptScaleToCurrentViewport,
              set: (BB, TB) => {
                BB.adaptScaleToCurrentViewport = TB
              }
            },
            metadata: dB
          }, VT, yT), dB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: dB
          })
        })(), BB
      })(),
      uB = !1;

    function HB() {
      uB || (uB = !0, kB.c.prototype.setTextureFromPostProcess = function(BB, TB, dB) {
        let VB = null;
        TB && (TB._forcedOutputTexture ? VB = TB._forcedOutputTexture : TB._textures.data[TB._currentRenderTextureInd] && (VB = TB._textures.data[TB._currentRenderTextureInd])), this._bindTexture(BB, VB?.texture ?? null, dB)
      }, kB.c.prototype.setTextureFromPostProcessOutput = function(BB, TB, dB) {
        this._bindTexture(BB, TB?._outputTexture?.texture ?? null, dB)
      }, JB.e.prototype.setTextureFromPostProcess = function(BB, TB) {
        this._engine.setTextureFromPostProcess(this._samplers[BB], TB, BB)
      }, JB.e.prototype.setTextureFromPostProcessOutput = function(BB, TB) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[BB], TB, BB)
      }, (0, oB.g)("BABYLON.PostProcess", DB))
    }
  },
  40525: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => lB,
      g: () => pB
    });
    var VB = dB(40501),
      yB = dB(36148);
    class pB extends VB.g {
      _gatherImports(BB, TB) {
        BB ? (this._webGPUReady = !0, TB.push(Promise.all([dB.e(353).then((() => dB(60006)))]))) : TB.push(Promise.all([dB.e(354).then((() => dB(60010)))])), super._gatherImports(BB, TB)
      }
      constructor(BB) {
        let TB = arguments.length > 2 ? arguments[2] : void 0;
        const dB = {
          name: BB,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || yB.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: pB.FragmentUrl,
          ...TB
        };
        dB.engine || (dB.engine = yB.c.LastCreatedEngine), super(dB)
      }
    }
    pB.FragmentUrl = "pass";
    class lB extends VB.g {
      _gatherImports(BB, TB) {
        BB ? (this._webGPUReady = !0, TB.push(Promise.all([dB.e(355).then((() => dB(60013)))]))) : TB.push(Promise.all([dB.e(356).then((() => dB(60019)))])), super._gatherImports(BB, TB)
      }
      constructor(BB) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: BB,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || yB.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: lB.FragmentUrl,
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
    lB.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);