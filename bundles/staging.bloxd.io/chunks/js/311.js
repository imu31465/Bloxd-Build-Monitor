export const id = 311;
export const ids = [311];
export const modules = {
  41731: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => hD
    });
    var pD = wD(37119),
      sD = wD(37079),
      KD = wD(40400),
      rD = wD(40073),
      LD = wD(39852),
      cD = wD(38662),
      gD = wD(40055),
      RD = wD(40084),
      AD = wD(37094),
      UD = wD(39820),
      fD = wD(40043),
      ID = wD(40128);
    class BD {
      get renderList() {
        return this._renderList
      }
      set renderList(DD) {
        this._renderList !== DD && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), DD && (this._unObserveRenderList = (0, AD.i)(DD, this._renderListHasChanged)), this._renderList = DD)
      }
      get disableImageProcessing() {
        return this._disableImageProcessing
      }
      set disableImageProcessing(DD) {
        DD !== this._disableImageProcessing && (this._disableImageProcessing = DD, this._scene.markAllMaterialsAsDirty(64))
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(DD) {
        this._disableDepthPrePass = DD, this._renderingManager.disableDepthPrePass = DD
      }
      get name() {
        return this._name
      }
      set name(DD) {
        if (this._name !== DD) {
          if (this._name = DD, this._sceneUBOs)
            for (let DD = 0; DD < this._sceneUBOs.length; ++DD) this._sceneUBOs[DD].name = `Scene ubo #${DD} for ${this.name}`;
          if (this._scene)
            for (let DD = 0; DD < this._renderPassIds.length; ++DD) {
              const zD = this._renderPassIds[DD];
              this._engine._renderPassNames[zD] = `${this._name}#${DD}`
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
      setMaterialForRendering(DD, zD) {
        let wD;
        wD = Array.isArray(DD) ? DD : [DD];
        for (let pD = 0; pD < wD.length; ++pD)
          for (let DD = 0; DD < this.options.numPasses; ++DD) {
            let sD = wD[pD];
            wD[pD].Gl && (sD = wD[pD].nsD), sD.setMaterialForRenderPass(this._renderPassIds[DD], void 0 !== zD ? Array.isArray(zD) ? zD[DD] : zD : void 0)
          }
      }
      _freezeActiveMeshes(DD) {
        this._freezeActiveMeshesCancel = (0, UD.e)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, DD)
            for (let DD = 0; DD < this._activeMeshes.length; DD++) this._activeMeshes.data[DD]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((DD, zD) => {
          this._freezeActiveMeshesCancel = null, zD ? (cD.d.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), DD && cD.d.Error(DD)) : (cD.d.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), DD && (cD.d.Error(DD), DD.stack && cD.d.Error(DD.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let DD = 0; DD < this._activeMeshes.length; DD++) this._activeMeshes.data[DD]._unFreeze();
        this._isFrozen = !1
      }
      constructor(DD, zD, wD) {
        this._unObserveRenderList = null, this._renderListHasChanged = (DD, zD) => {
          const wD = this._renderList ? this._renderList.length : 0;
          if (0 === zD && wD > 0 || 0 === wD)
            for (const pD of this._scene.meshes) pD._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new pD.b, this.onAfterRenderObservable = new pD.b, this.onBeforeRenderingManagerRenderObservable = new pD.b, this.onAfterRenderingManagerRenderObservable = new pD.b, this.onInitRenderingObservable = new pD.b, this.onFinishRenderingObservable = new pD.b, this.onFastPathRenderObservable = new pD.b, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new fD.f(256), this._activeBoundingBoxes = new fD.f(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = DD, this._scene = zD, this._engine = this._scene.iI(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...wD
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new RD.d(zD), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const DD of this._scene.lights) DD.getTypeID() === ID.e.LIGHTTYPEID_CLUSTERED_CONTAINER && DD.isSupported && DD._updateBatches(this.activeCamera).render()
        })), this._scene.addObjectRenderer(this)
      }
      _releaseRenderPassId() {
        for (let DD = 0; DD < this.options.numPasses; ++DD) this._engine.releaseRenderPassId(this._renderPassIds[DD]);
        this._renderPassIds.length = 0
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let DD = 0; DD < this.options.numPasses; ++DD) this._renderPassIds[DD] = this._engine.createRenderPassId(`${this.name}#${DD}`)
      }
      _createSceneUBO(DD, zD) {
        const wD = this._scene.iI(),
          pD = new gD.e(wD, void 0, zD, DD, void 0, !1);
        return pD.addUniform("viewProjection", 16), zD && pD.addUniform("viewProjectionR", 16), pD.addUniform("view", 16), pD.addUniform("projection", 16), pD.addUniform("vEyePosition", 4), pD.addUniform("inverseProjection", 16), pD
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const DD = this._engine._currentRenderTarget,
          zD = !(!DD || !DD.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const DD = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${DD} for ${this.name}`, zD)), this._sceneUBOIsMultiview.push(zD)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== zD && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, zD), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = zD);
        const wD = this._sceneUBOs[this._currentSceneUBOIndex++];
        return wD.unbindEffect(), wD
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1
      }
      get refreshRate() {
        return this._refreshRate
      }
      set refreshRate(DD) {
        this._refreshRate = DD, this.resetRefreshCounter()
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1))
      }
      isReadyForRendering(DD, zD) {
        this.prepareRenderList(), this.initRender(DD, zD);
        const wD = this._checkReadiness();
        return this.finishRender(), wD
      }
      prepareRenderList() {
        const DD = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let zD = 0; zD < this._waitingRenderList.length; zD++) {
              const wD = this._waitingRenderList[zD],
                pD = DD.getMeshById(wD);
              pD && this.renderList.push(pD)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const DD = this._scene.meshes;
          for (let zD = 0; zD < DD.length; zD++) {
            const wD = DD[zD];
            this.renderListPredicate(wD) && this.renderList.push(wD)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(DD, zD) {
        const wD = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), wD && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(wD.getViewMatrix(), wD.getProjectionMatrix(!0)), this._scene._activeCamera = wD, this._engine.setViewport(wD.rigParent ? wD.rigParent.viewport : wD.viewport, DD, zD)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const DD = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (DD.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), DD._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== DD.activeCamera && DD.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), DD.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const wD = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[DD], this.onBeforeRenderObservable.notifyObservers(DD);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(DD);
        else {
          const zD = this._prepareRenderingManager(DD),
            wD = this._scene.getOutlineRenderer?.(),
            pD = wD?.enabled;
          wD && (wD.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(DD), this._renderingManager.render(this.customRenderFunction, zD, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(DD), wD && (wD.enabled = pD)
        }
        zD || this.onAfterRenderObservable.notifyObservers(DD), this._engine.currentRenderPassId = wD
      }
      _checkReadiness() {
        const DD = this._scene,
          zD = this._engine.currentRenderPassId;
        let wD = !0;
        DD.getViewMatrix() || DD.updateTransformMatrix();
        const pD = this.options.numPasses;
        for (let sD = 0; sD < pD && wD; sD++) {
          const zD = this.renderList ? this.renderList : DD.frameGraph ? DD.meshes : DD.getActiveMeshes().data,
            KD = this.renderList || DD.frameGraph ? zD.length : DD.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[sD], this.onBeforeRenderObservable.notifyObservers(sD);
          let rD = null,
            LD = KD;
          this.getCustomRenderList && (rD = this.getCustomRenderList(sD, zD, KD), rD && (LD = rD.length)), rD || (rD = zD), this.options.doNotChangeAspectRatio || DD.updateTransformMatrix(!0);
          for (let DD = 0; DD < LD && wD; ++DD) {
            const zD = rD[DD];
            if (!zD.isEnabled() || zD.isBlocked || !zD.isVisible || !zD.QE) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(zD, this.refreshRate, !0)) {
                wD = !1;
                continue
              }
            } else if (!zD.isReady(!0)) {
              wD = !1;
              continue
            }
            let pD = zD._edgesRenderer,
              sD = zD.hasThinInstances;
            if (zD.Gl) {
              const DD = zD.nsD;
              DD.edgesShareWithInstances && DD._edgesRenderer?.isEnabled && (pD = DD._edgesRenderer, sD = !0)
            } else zD.hsD && zD.edgesShareWithInstances && (sD = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && pD?.isEnabled && (pD.isReady(sD) || (wD = !1))
          }
          if (this.renderParticles && DD.particlesEnabled) {
            const zD = this.particleSystemList || DD.XE;
            for (const DD of zD) DD.isReady() || (wD = !1)
          }
          if (this.renderSprites && DD.spritesEnabled) {
            const zD = this.spriteManagerList || DD.spriteManagers;
            if (zD)
              for (const pD of zD) DD.activeCamera && 0 === (pD.layerMask & DD.activeCamera.layerMask) || pD.isReady && !pD.isReady() && (wD = !1)
          }
          this.onAfterRenderObservable.notifyObservers(sD), pD > 1 && (DD.incrementRenderId(), DD.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = zD, wD
      }
      _prepareRenderingManager() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const wD = this._scene;
        let pD, sD, KD = null;
        const rD = this.renderList ? this.renderList : wD.frameGraph ? wD.meshes : wD.getActiveMeshes().data,
          LD = this.renderList || wD.frameGraph ? rD.length : wD.getActiveMeshes().length;
        if (this.getCustomRenderList && (KD = this.getCustomRenderList(DD, rD, LD)), KD) pD = KD.length, sD = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !zD && !this._engine.isWebGPU) return rD;
          this._defaultRenderListPrepared = !0, KD = rD, pD = LD, sD = !this.renderList || this.forceLayerMaskCheck
        }
        const cD = wD.activeCamera,
          gD = this.cameraForLOD ?? cD,
          RD = wD.getBoundingBoxRenderer?.();
        if (wD._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && RD) {
            RD.reset();
            for (let DD = 0; DD < this._activeBoundingBoxes.length; DD++) {
              const zD = this._activeBoundingBoxes.data[DD];
              RD.renderList.push(zD)
            }
          }
          return KD
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), RD && RD.reset(), this.renderMeshes) {
          const DD = wD.getRenderId(),
            zD = wD.getFrameId();
          for (let rD = 0; rD < pD; rD++) {
            const pD = KD[rD];
            if (pD && !pD.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(pD, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!pD.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let KD, rD;
              if (gD) {
                const DD = pD._internalAbstractMeshDataInfo._currentLOD.get(gD);
                DD && DD[1] === zD ? KD = DD[0] : (KD = wD.customLODSelector ? wD.customLODSelector(pD, gD) : pD.getLOD(gD), DD ? (DD[0] = KD, DD[1] = zD) : pD._internalAbstractMeshDataInfo._currentLOD.set(gD, [KD, zD]))
              } else KD = pD;
              if (!KD) continue;
              if (KD !== pD && 0 !== KD.billboardMode && KD.computeWorldMatrix(), KD._preActivateForIntermediateRendering(DD), rD = !(!sD || !cD) && 0 === (pD.layerMask & cD.layerMask), pD.isEnabled() && pD.isVisible && pD.QE && !rD) {
                if (this._activeMeshes.push(pD), KD._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, KD !== pD && KD._activate(DD, !0), this.enableBoundingBoxRendering && RD && RD._preActiveMesh(pD), pD._activate(DD, !0) && pD.QE.length) {
                  pD.Gl ? pD._internalAbstractMeshDataInfo._actAsRegularMesh && (KD = pD) : KD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, KD._internalAbstractMeshDataInfo._isActiveIntermediate = !0, wD._prepareSkeleton(KD);
                  for (let DD = 0; DD < KD.QE.length; DD++) {
                    const zD = KD.QE[DD];
                    this.enableBoundingBoxRendering && RD && RD._evaluateSubMesh(pD, zD), this._renderingManager.dispatch(zD, KD)
                  }
                }
                pD._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && RD && zD)
          for (let AD = 0; AD < RD.renderList.length; AD++) {
            const DD = RD.renderList.data[AD];
            this._activeBoundingBoxes.push(DD)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const DD = this.particleSystemList || wD.XE;
          for (let zD = 0; zD < DD.length; zD++) {
            const wD = DD[zD],
              pD = wD.emitter;
            wD.isStarted() && pD && (!pD.position || pD.isEnabled()) && this._renderingManager.dispatchParticles(wD)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return KD
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(DD, zD, wD, pD)
      }
      setRenderingAutoClearDepthStencil(DD, zD) {
        let wD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          pD = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(DD, zD, wD, pD), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const DD = new BD(this.name, this._scene, this.options);
        return this.renderList && (DD.renderList = this.renderList.slice(0)), DD
      }
      dispose() {
        const DD = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          zD = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let wD = 0; wD < zD; wD++) {
          const zD = DD[wD];
          zD && void 0 !== zD.getMaterialForRenderPass(this.renderPassId) && zD.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const wD of this._sceneUBOs) wD.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === BD.REFRESHRATE_RENDER_ONCE && (this.refreshRate = BD.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    BD.REFRESHRATE_RENDER_ONCE = 0, BD.REFRESHRATE_RENDER_ONEVERYFRAME = 1, BD.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var GD = wD(39808);
    class hD extends KD.d {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate
      }
      set renderListPredicate(DD) {
        this._objectRenderer.renderListPredicate = DD
      }
      get renderList() {
        return this._objectRenderer.renderList
      }
      set renderList(DD) {
        this._objectRenderer.renderList = DD
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList
      }
      set particleSystemList(DD) {
        this._objectRenderer.particleSystemList = DD
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList
      }
      set getCustomRenderList(DD) {
        this._objectRenderer.getCustomRenderList = DD
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles
      }
      set renderParticles(DD) {
        this._objectRenderer.renderParticles = DD
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites
      }
      set renderSprites(DD) {
        this._objectRenderer.renderSprites = DD
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering
      }
      set enableBoundingBoxRendering(DD) {
        this._objectRenderer.enableBoundingBoxRendering = DD
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering
      }
      set enableOutlineRendering(DD) {
        this._objectRenderer.enableOutlineRendering = DD
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck
      }
      set forceLayerMaskCheck(DD) {
        this._objectRenderer.forceLayerMaskCheck = DD
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera
      }
      set activeCamera(DD) {
        this._objectRenderer.activeCamera = DD
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD
      }
      set cameraForLOD(DD) {
        this._objectRenderer.cameraForLOD = DD
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing
      }
      set disableImageProcessing(DD) {
        this._objectRenderer.disableImageProcessing = DD
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction
      }
      set customIsReadyFunction(DD) {
        this._objectRenderer.customIsReadyFunction = DD
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction
      }
      set customRenderFunction(DD) {
        this._objectRenderer.customRenderFunction = DD
      }
      get postProcesses() {
        return this._postProcesses
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled
      }
      set onAfterUnbind(DD) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(DD)
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable
      }
      set onBeforeRender(DD) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(DD)
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable
      }
      set onAfterRender(DD) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(DD)
      }
      set onClear(DD) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(DD)
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList
      }
      set _waitingRenderList(DD) {
        this._objectRenderer._waitingRenderList = DD
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
      setMaterialForRendering(DD, zD) {
        this._objectRenderer.setMaterialForRendering(DD, zD)
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
      set boundingBoxSize(DD) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(DD)) return;
        this._boundingBoxSize = DD;
        const zD = this.Ul();
        zD && zD.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(DD, zD, wD) {
        let rD, LD, gD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          RD = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          AD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          UD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          fD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : KD.d.TRILINEAR_SAMPLINGMODE,
          ID = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          GD = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          hD = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          nD = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          MD = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          OD = arguments.length > 13 ? arguments[13] : void 0,
          JD = arguments.length > 14 ? arguments[14] : void 0,
          ED = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          QD = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          XD = !0,
          VD = !1;
        if ("object" === typeof gD) {
          const DD = gD;
          gD = !!DD.generateMipMaps, RD = DD.doNotChangeAspectRatio ?? !0, AD = DD.type ?? 0, UD = !!DD.isCube, fD = DD.samplingMode ?? KD.d.TRILINEAR_SAMPLINGMODE, ID = DD.generateDepthBuffer ?? !0, GD = !!DD.generateStencilBuffer, hD = !!DD.isMulti, nD = DD.format ?? 5, MD = !!DD.delayAllocation, OD = DD.samples, JD = DD.creationFlags, ED = !!DD.noColorAttachment, QD = !!DD.useSRGBBuffer, rD = DD.colorAttachment, XD = DD.gammaSpace ?? XD, LD = DD.existingObjectRenderer, VD = !!DD.enableClusteredLights
        }
        if (super(null, wD, !gD, void 0, fD, void 0, void 0, void 0, void 0, nD), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new pD.b, this.onAfterUnbindObservable = new pD.b, this.onClearObservable = new pD.b, this.onResizeObservable = new pD.b, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = sD.s.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(wD = this.Ul())) return;
        const PD = this.Ul().iI();
        this._gammaSpace = XD, this._coordinatesMode = KD.d.PROJECTION_MODE, this.name = DD, this.isRenderTarget = !0, this._initialSizeParameter = zD, this._dontDisposeObjectRenderer = !!LD, this._processSizeParameter(zD), this._objectRenderer = LD ?? new BD(DD, wD, {
          numPasses: UD ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: RD,
          enableClusteredLights: VD
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const DD = this._scene;
          if (!this._disableEngineStages)
            for (const zD of DD._beforeRenderTargetClearStage) zD.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(PD) : this.skipInitialClear || PD.clear(this.clearColor ?? DD.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || DD.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const zD of DD._beforeRenderTargetDrawStage) zD.action(this, this._currentFaceIndex, this._currentLayer);
          PD._debugPushGroup && PD._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (PD._debugPopGroup && PD._debugPopGroup(), !this._disableEngineStages)
            for (const zD of this._scene._afterRenderTargetDrawStage) zD.action(this, this._currentFaceIndex, this._currentLayer);
          const DD = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const zD of this._scene._afterRenderTargetPostProcessStage) zD.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = DD), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), PD) : cD.d.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(PD) : this.skipInitialClear || PD.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = PD.onResizeObservable.add((() => {})), this._generateMipMaps = !!gD, this._doNotChangeAspectRatio = RD, hD || (this._renderTargetOptions = {
          generateMipMaps: gD,
          type: AD,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: ID,
          generateStencilBuffer: GD,
          samples: OD,
          creationFlags: JD,
          noColorAttachment: ED,
          useSRGBBuffer: QD,
          colorAttachment: rD,
          label: this.name
        }, this.samplingMode === KD.d.NEAREST_SAMPLINGMODE && (this.wrapU = KD.d.CLAMP_ADDRESSMODE, this.wrapV = KD.d.CLAMP_ADDRESSMODE), MD || (UD ? (this._renderTarget = wD.iI().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = KD.d.INVCUBIC_MODE, this._textureMatrix = sD.e.Identity()) : this._renderTarget = wD.iI().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== OD && (this.samples = OD)))
      }
      createDepthStencilTexture() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          KD = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(DD, zD, wD, pD, sD, KD)
      }
      _processSizeParameter(DD) {
        if (DD.ratio) {
          this._sizeRatio = DD.ratio;
          const zD = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(zD.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(zD.getRenderHeight(), this._sizeRatio)
          }
        } else this._size = DD
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples
      }
      set samples(DD) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(DD))
      }
      addPostProcess(DD) {
        if (!this._postProcessManager) {
          const DD = this.Ul();
          if (!DD) return;
          this._postProcessManager = new rD.d(DD), this._postProcesses = new Array
        }
        this._postProcesses.push(DD), this._postProcesses[0].autoClear = !1
      }
      clearPostProcesses() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (DD)
            for (const DD of this._postProcesses) DD.dispose();
          this._postProcesses = []
        }
      }
      removePostProcess(DD) {
        if (!this._postProcesses) return;
        const zD = this._postProcesses.indexOf(DD); - 1 !== zD && (this._postProcesses.splice(zD, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter()
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate
      }
      set refreshRate(DD) {
        this._objectRenderer.refreshRate = DD
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
        const DD = this._size.layers;
        if (DD) return DD;
        const zD = this._size.depth;
        return zD || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(DD) {
        const zD = Math.max(1, this.getRenderSize() * DD);
        this.resize(zD)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(DD) {
        const zD = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const wD = this.Ul();
        wD && (this._processSizeParameter(DD), this._renderTarget = zD ? wD.iI().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : wD.iI().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(DD, zD)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => wD(41742))).then((DD => this._dumpTools = DD))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const DD = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), DD
      }
      _render() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const wD = this.Ul();
        if (!wD) return;
        void 0 !== this.useCameraPostProcesses && (DD = this.useCameraPostProcesses);
        const pD = wD.iI();
        if (pD._debugPushGroup && pD._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let sD = 0; sD < 6; sD++) this._renderToTarget(sD, DD, zD), wD.incrementRenderId(), wD.resetCachedMaterial();
          else this._renderToTarget(0, DD, zD);
        else
          for (let sD = 0; sD < this.getRenderLayers(); sD++) this._renderToTarget(0, DD, zD, sD), wD.incrementRenderId(), wD.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), pD._debugPopGroup && pD._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(DD, zD) {
        const wD = DD * zD,
          pD = (0, LD.k)(wD + 16384 / (128 + wD));
        return Math.min((0, LD.b)(DD), pD)
      }
      _bindFrameBuffer() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const wD = this.Ul();
        if (!wD) return;
        const pD = wD.iI();
        this._renderTarget && pD.bindFramebuffer(this._renderTarget, this.isCube ? DD : void 0, void 0, void 0, this.ignoreCameraViewport, 0, zD)
      }
      _unbindFrameBuffer(DD, zD) {
        this._renderTarget && DD.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(zD)
        }))
      }
      _prepareFrame(DD, zD, wD, pD) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(zD, wD) : pD && DD.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(zD, wD)
      }
      _renderToTarget(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const sD = this.Ul();
        if (!sD) return;
        const KD = sD.iI();
        this._currentFaceIndex = DD, this._currentLayer = pD, this._currentUseCameraPostProcess = zD, this._currentDumpForDebug = wD, this._prepareFrame(sD, DD, pD, zD), this._objectRenderer.render(DD + pD, !0), this._unbindFrameBuffer(KD, DD), this._texture && this.isCube && 5 === DD && KD.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(DD, zD, wD, pD)
      }
      setRenderingAutoClearDepthStencil(DD, zD) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(DD, zD)
      }
      clone() {
        const DD = this.getSize(),
          zD = new hD(this.name, DD, this.Ul(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return zD.hasAlpha = this.hasAlpha, zD.level = this.level, zD.coordinatesMode = this.coordinatesMode, this.renderList && (zD.renderList = this.renderList.slice(0)), zD
      }
      serialize() {
        if (!this.name) return null;
        const DD = super.serialize();
        if (DD.renderTargetSize = this.getRenderSize(), DD.renderList = [], this.renderList)
          for (let zD = 0; zD < this.renderList.length; zD++) DD.renderList.push(this.renderList[zD].id);
        return DD
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.Ul().iI().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const DD = this.Ul();
        if (!DD) return;
        let zD = DD.customRenderTargets.indexOf(this);
        zD >= 0 && DD.customRenderTargets.splice(zD, 1);
        for (const wD of DD.cameras) zD = wD.customRenderTargets.indexOf(this), zD >= 0 && wD.customRenderTargets.splice(zD, 1);
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
    hD.REFRESHRATE_RENDER_ONCE = BD.REFRESHRATE_RENDER_ONCE, hD.REFRESHRATE_RENDER_ONEVERYFRAME = BD.REFRESHRATE_RENDER_ONEVERYFRAME, hD.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = BD.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(hD.prototype, "noPrePassRenderer") || Object.defineProperty(hD.prototype, "noPrePassRenderer", (0, GD.g)("RenderTargetTexture", "noPrePassRenderer"))
  },
  41711: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => gD,
      g: () => RD
    });
    var pD = wD(40066),
      sD = wD(38074),
      KD = wD(37119),
      rD = wD(39771),
      LD = wD(40249);
    const cD = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class gD {
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cD;
        this._fullscreenViewport = new sD.e(0, 0, 1, 1);
        const wD = zD.positions ?? cD.positions,
          KD = zD.indices ?? cD.indices;
        this.engine = DD, this._vertexBuffers = {
          [pD.k.PositionKind]: new pD.k(DD, wD, pD.k.PositionKind, !1, !1, 2)
        }, this._indexBuffer = DD.createIndexBuffer(KD), this._indexBufferLength = KD.length, this._onContextRestoredObserver = DD.SI.add((() => {
          this._indexBuffer = DD.createIndexBuffer(KD);
          for (const DD in this._vertexBuffers) {
            this._vertexBuffers[DD]._rebuild()
          }
        }))
      }
      setViewport() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.engine.setViewport(DD)
      }
      bindBuffers(DD) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, DD)
      }
      applyEffectWrapper(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = zD, this.engine.stencilState.stencilTest = wD, this.engine.enableEffect(DD.drawWrapper), this.bindBuffers(DD.effect), DD.onApplyObservable.notifyObservers({})
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
      _isRenderTargetTexture(DD) {
        return void 0 !== DD.renderTarget
      }
      render(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!DD.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const wD = null === zD ? null : this._isRenderTargetTexture(zD) ? zD.renderTarget : zD;
        wD && this.engine.bindFramebuffer(wD), this.applyEffectWrapper(DD), this.draw(), wD && this.engine.unBindFramebuffer(wD), this.restoreStates()
      }
      dispose() {
        const DD = this._vertexBuffers[pD.k.PositionKind];
        DD && (DD.dispose(), delete this._vertexBuffers[pD.k.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.SI.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class RD {
      static RegisterShaderCodeProcessing(DD, zD) {
        zD ? RD._CustomShaderCodeProcessing[DD ?? ""] = zD : delete RD._CustomShaderCodeProcessing[DD ?? ""]
      }
      static _GetShaderCodeProcessing(DD) {
        return RD._CustomShaderCodeProcessing[DD] ?? RD._CustomShaderCodeProcessing[""]
      }
      get name() {
        return this.options.name
      }
      set name(DD) {
        this.options.name = DD
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
      set effect(DD) {
        this._drawWrapper.effect = DD
      }
      constructor(DD) {
        this.alphaMode = 0, this.onEffectCreatedObservable = new KD.b(void 0, !0), this.onApplyObservable = new KD.b, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
          ...DD,
          name: DD.name || "effectWrapper",
          engine: DD.engine,
          uniforms: DD.uniforms || DD.uniformNames || [],
          uniformNames: void 0,
          samplers: DD.samplers || DD.samplerNames || [],
          samplerNames: void 0,
          attributeNames: DD.attributeNames || ["position"],
          uniformBuffers: DD.uniformBuffers || [],
          defines: DD.defines || "",
          useShaderStore: DD.useShaderStore || !1,
          vertexUrl: DD.vertexUrl || DD.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: DD.fragmentShader || "pass",
          indexParameters: DD.indexParameters,
          blockCompilation: DD.blockCompilation || !1,
          shaderLanguage: DD.shaderLanguage || 0,
          onCompiled: DD.onCompiled || void 0,
          extraInitializations: DD.extraInitializations || void 0,
          extraInitializationsAsync: DD.extraInitializationsAsync || void 0,
          useAsPostProcess: DD.useAsPostProcess ?? !1,
          allowEmptySourceTexture: DD.allowEmptySourceTexture ?? !1
        }, this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), DD.vertexUrl || DD.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add((() => {
          this.effect.setFloat2("scale", 1, 1)
        }))), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add((() => {
          this.bind()
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.SI.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new LD.e(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const zD = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, zD, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          pD = arguments.length > 2 ? arguments[2] : void 0,
          sD = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, sD && this._importPromises.push(...sD);
        const KD = this.options.engine.isWebGPU && !RD.ForceGLSL;
        this._gatherImports(KD, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(KD && this._webGPUReady ? wD.e(364).then((() => wD(61157))) : wD.e(353).then((() => wD(61035)))), void 0 !== pD && pD(KD, this._importPromises), KD && this._webGPUReady && (this.options.shaderLanguage = 1), DD || this.updateEffect(zD)
      }
      updateEffect() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          pD = arguments.length > 3 ? arguments[3] : void 0,
          sD = arguments.length > 4 ? arguments[4] : void 0,
          KD = arguments.length > 5 ? arguments[5] : void 0,
          LD = arguments.length > 6 ? arguments[6] : void 0,
          cD = arguments.length > 7 ? arguments[7] : void 0;
        const gD = RD._GetShaderCodeProcessing(this.name);
        if (gD?.defineCustomBindings) {
          const pD = zD?.slice() ?? [];
          pD.push(...this.options.uniforms);
          const sD = wD?.slice() ?? [];
          sD.push(...this.options.samplers), DD = gD.defineCustomBindings(this.name, DD, pD, sD), zD = pD, wD = sD
        }
        this.options.defines = DD || "";
        const AD = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let UD;
        UD = this.options.extraInitializationsAsync ? async () => {
          await (AD?.()), await this.options.extraInitializationsAsync()
        }: AD, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: LD ?? this._shaderPath.vertex,
          fragment: cD ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: zD || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: wD || this.options.samplers,
          defines: null !== DD ? DD : "",
          fallbacks: null,
          onCompiled: sD ?? this.options.onCompiled,
          onError: KD ?? null,
          indexParameters: pD || this.options.indexParameters,
          processCodeAfterIncludes: gD?.processCodeAfterIncludes ? (DD, zD) => gD.processCodeAfterIncludes(this.name, DD, zD) : null,
          processFinalCode: gD?.processFinalCode ? (DD, zD) => gD.processFinalCode(this.name, DD, zD) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: UD
        }, this.options.engine) : this._drawWrapper.effect = new rD.c(this._shaderPath, this.options.attributeNames, zD || this.options.uniforms, wD || this.options.samplerNames, this.options.engine, DD, void 0, sD || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, UD), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !DD && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), RD._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.iI().SI.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    RD.ForceGLSL = !1, RD._CustomShaderCodeProcessing = {}
  },
  41742: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      Dispose: () => nD,
      DumpData: () => hD,
      DumpDataAsync: () => GD,
      DumpFramebuffer: () => BD,
      DumpTools: () => MD,
      EncodeImageAsync: () => ID,
      RegisterDumpTools: () => JD
    });
    var pD = wD(39921),
      sD = wD(41711),
      KD = wD(40027),
      rD = wD(37125),
      LD = wD(37110),
      cD = wD(38662),
      gD = wD(39975),
      RD = wD(39927);
    let AD = null;
    async function UD() {
      return AD || (AD = async function() {
        const DD = LD.d.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        DD instanceof OffscreenCanvas && cD.d.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: zD
        } = await Promise.resolve().then((() => wD(39766)));
        if (!zD.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const pD = new zD(DD, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        LD.d.Instances.pop(), LD.d.OnEnginesDisposedObservable.add((DD => {
          pD && DD !== pD && !pD.EX && 0 === LD.d.Instances.length && nD()
        })), pD.getCaps().parallelShaderCompile = void 0;
        const KD = new sD.e(pD),
          {
            passPixelShader: rD
          } = await wD.e(372).then((() => wD(61215))),
          gD = new sD.g({
            engine: pD,
            name: rD.name,
            fragmentShader: rD.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: DD,
          dumpEngine: {
            engine: pD,
            renderer: KD,
            wrapper: gD
          }
        }
      }()), await AD
    }
    let fD = (() => {
      var DD;
      let zD, wD = [];
      return DD = class {
        static async EncodeImageAsync(DD, zD, wD, pD, sD, rD) {
          const LD = await UD(),
            cD = LD.dumpEngine;
          cD.engine.setSize(zD, wD, !0);
          const gD = cD.engine.createRawTexture(DD, zD, wD, 5, !1, !sD, 1);
          return cD.renderer.setViewport(), cD.renderer.applyEffectWrapper(cD.wrapper), cD.wrapper.effect._bindTexture("textureSampler", gD), cD.renderer.draw(), gD.dispose(), await new Promise(((DD, zD) => {
            KD.h.ToBlob(LD.canvas, (wD => {
              wD ? DD(wD) : zD(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), pD, rD)
          }))
        }
      }, (() => {
        const sD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zD = [RD.i], (0, pD.i)(DD, null, zD, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: DD => "EncodeImageAsync" in DD,
            get: DD => DD.EncodeImageAsync
          },
          metadata: sD
        }, null, wD), sD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: sD
        }), (0, pD.m)(DD, wD)
      })(), DD
    })();
    const ID = fD.EncodeImageAsync;
    async function BD(DD, zD, wD, pD) {
      let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        KD = arguments.length > 5 ? arguments[5] : void 0,
        rD = arguments.length > 6 ? arguments[6] : void 0;
      const LD = await wD.readPixels(0, 0, DD, zD);
      hD(DD, zD, new Uint8Array(LD.buffer), pD, sD, KD, !0, void 0, rD)
    }
    async function GD(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        sD = arguments.length > 4 ? arguments[4] : void 0,
        LD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        RD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        AD = arguments.length > 7 ? arguments[7] : void 0;
      if (wD instanceof Float32Array) {
        const DD = new Uint8Array(wD.length);
        let zD = wD.length;
        for (; zD--;) {
          const pD = wD[zD];
          DD[zD] = Math.round(255 * (0, rD.Clamp)(pD))
        }
        wD = DD
      }
      const UD = await fD.EncodeImageAsync(wD, DD, zD, pD, LD, AD);
      void 0 !== sD && KD.h.DownloadBlob(UD, sD), UD.type !== pD && cD.d.Warn(`DumpData: The requested mimeType '${pD}' is not supported. The result has mimeType '${UD.type}' instead.`);
      const ID = await UD.arrayBuffer();
      return RD ? ID : `data:${pD};base64,${(0,gD.e)(ID)}`
    }

    function hD(DD, zD, wD, pD) {
      let sD = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== sD || pD || (sD = ""), GD(DD, zD, wD, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", sD, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((DD => {
        pD && pD(DD)
      }))
    }

    function nD() {
      AD && (AD?.then((DD => {
        DD.canvas instanceof HTMLCanvasElement && DD.canvas.remove(), DD.dumpEngine && (DD.dumpEngine.engine.dispose(), DD.dumpEngine.renderer.dispose(), DD.dumpEngine.wrapper.dispose())
      })), AD = null)
    }
    const MD = {
      DumpData: hD,
      DumpDataAsync: GD,
      DumpFramebuffer: BD,
      Dispose: nD
    };
    let OD = !1;

    function JD() {
      if (OD) return;
      OD = !0;
      KD.h.DumpData = hD, KD.h.DumpDataAsync = GD, KD.h.DumpFramebuffer = BD
    }
  },
  41722: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => fD,
      e: () => ID,
      h: () => BD
    });
    var pD = wD(40400),
      sD = wD(41731),
      KD = wD(39921),
      rD = wD(41709),
      LD = wD(39939),
      cD = wD(41737),
      gD = wD(39927);
    class RD extends rD.e {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(DD, zD) {
        let wD = arguments.length > 4 ? arguments[4] : void 0;
        const pD = {
          size: "number" === typeof zD ? zD : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: wD,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...zD
        };
        super(DD, cD.e.FragmentUrl, {
          effectWrapper: "number" !== typeof zD && zD.effectWrapper ? void 0 : new cD.e(DD, wD, pD),
          ...pD
        })
      }
      static _Parse(DD, zD, wD, pD) {
        return LD.d.Parse((() => new RD(DD.name, DD.options, zD, DD.renderTargetSamplingMode, DD._engine, DD.reusable)), DD, wD, pD)
      }
    }(() => {
      var DD;
      let zD, wD = rD.e,
        pD = [];
      DD = class extends wD {
        get face() {
          return this._effectWrapper.face
        }
        set face(DD) {
          this._effectWrapper.face = DD
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(DD, zD) {
          let wD = arguments.length > 4 ? arguments[4] : void 0;
          const sD = {
            size: "number" === typeof zD ? zD : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: wD,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...zD
          };
          super(DD, cD.e.FragmentUrl, {
            effectWrapper: "number" !== typeof zD && zD.effectWrapper ? void 0 : new cD.d(DD, wD, sD),
            ...sD
          }), (0, KD.m)(this, pD)
        }
        static _Parse(zD, wD, pD, sD) {
          return LD.d.Parse((() => new DD(zD.name, zD.options, wD, zD.renderTargetSamplingMode, zD._engine, zD.reusable)), zD, pD, sD)
        }
      }, (() => {
        const sD = "function" === typeof Symbol && Symbol.metadata ? Object.create(wD[Symbol.metadata] ?? null) : void 0;
        zD = [(0, gD.C)()], (0, KD.i)(DD, null, zD, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: DD => "face" in DD,
            get: DD => DD.face
          },
          metadata: sD
        }, null, pD), sD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: sD
        })
      })()
    })();
    var AD = wD(37125),
      UD = wD(39990);

    function fD(DD, zD, wD, pD, sD, KD, LD, cD) {
      const gD = zD.iI();
      return zD.isReady = !1, sD = sD ?? zD.samplingMode, pD = pD ?? zD.type, KD = KD ?? zD.format, LD = LD ?? zD.width, cD = cD ?? zD.height, -1 === pD && (pD = 0), new Promise((RD => {
        const AD = new rD.e("postprocess", DD, null, null, 1, null, sD, gD, !1, void 0, pD, void 0, null, !1, KD);
        AD.externalTextureSamplerBinding = !0;
        const UD = gD.createRenderTargetTexture({
          width: LD,
          height: cD
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: sD,
          type: pD,
          format: KD
        });
        AD.onEffectCreatedObservable.addOnce((DD => {
          DD.executeWhenCompiled((() => {
            AD.onApply = DD => {
              DD._bindTexture("textureSampler", zD), DD.setFloat2("scale", 1, 1)
            }, wD.postProcessManager.directRender([AD], UD, !0), gD.restoreDefaultFramebuffer(), gD._releaseTexture(zD), AD && AD.dispose(), UD._swapAndDie(zD), zD.type = pD, zD.format = 5, zD.isReady = !0, RD(zD)
          }))
        }))
      }))
    }
    async function ID(DD, zD, KD) {
      let LD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        cD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        gD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        RD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(DD) {
        if (DD.isReady()) return;
        if (DD.loadingError) throw new Error(DD.errorObject?.message || `Texture ${DD.name} errored while loading.`);
        const zD = DD.onLoadObservable;
        if (zD) return await new Promise((DD => zD.addOnce((() => DD()))));
        const wD = DD._texture?.onLoadedObservable;
        if (wD) return await new Promise((DD => wD.addOnce((() => DD()))));
        throw new Error(`Cannot determine readiness of texture ${DD.name}.`)
      }(DD);
      const UD = DD.getInternalTexture(),
        fD = DD.is3D || !!UD?.is3D,
        {
          width: ID,
          height: BD
        } = DD.getSize(),
        GD = zD ?? ID,
        hD = KD ?? BD;
      if (gD || fD || function(DD) {
          switch (DD) {
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
        }(DD.textureFormat) || GD !== ID || hD !== BD) {
        if (DD.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${gD?"RTT":"compression"} is not supported.`);
        return await async function(DD, zD, KD, LD, cD) {
          let gD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const RD = DD.Ul(),
            AD = RD.iI(),
            UD = DD.getInternalTexture(),
            fD = DD.is3D || !!UD?.is3D;
          let ID;
          if (AD.isWebGPU ? fD ? await wD.e(368).then((() => wD(61185))) : DD.isCube ? await wD.e(369).then((() => wD(61193))) : await wD.e(370).then((() => wD(61202))) : fD ? await wD.e(365).then((() => wD(61174))) : DD.isCube ? await wD.e(366).then((() => wD(61180))) : await wD.e(367).then((() => wD(61183))), fD) ID = new rD.e("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: pD.d.NEAREST_NEAREST_MIPNEAREST,
            engine: AD,
            shaderLanguage: AD.isWebGPU ? 1 : 0
          });
          else if (DD.isCube) {
            const DD = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            ID = new rD.e("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: pD.d.NEAREST_NEAREST_MIPNEAREST,
              engine: AD,
              defines: DD[LD],
              shaderLanguage: AD.isWebGPU ? 1 : 0
            })
          } else ID = new rD.e("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: pD.d.NEAREST_NEAREST_MIPNEAREST,
            engine: AD,
            shaderLanguage: AD.isWebGPU ? 1 : 0
          });
          await new Promise((DD => {
            ID.onEffectCreatedObservable.addOnce((zD => {
              zD.executeWhenCompiled((() => {
                DD(0)
              }))
            }))
          }));
          const BD = new sD.b("temp", {
            width: zD,
            height: KD
          }, RD, !1);
          ID.onApply = function(zD) {
            zD.setTexture("textureSampler", DD), zD.setFloat("lod", cD), zD.setInt("gamma", DD.gammaSpace ? 1 : 0), fD && zD.setFloat("slice", gD)
          };
          try {
            if (BD.renderTarget && UD) {
              const wD = UD.samplingMode;
              0 !== cD ? DD.updateSamplingMode(pD.d.NEAREST_NEAREST_MIPNEAREST) : DD.updateSamplingMode(pD.d.NEAREST_NEAREST), RD.postProcessManager.directRender([ID], BD.renderTarget, !0), DD.updateSamplingMode(wD);
              const sD = await AD.readPixels(0, 0, zD, KD),
                rD = new Uint8Array(sD.buffer, sD.byteOffset, sD.byteLength);
              return AD.unBindFramebuffer(BD.renderTarget), rD
            }
            throw Error("Render to texture failed.")
          } finally {
            BD.dispose(), ID.dispose()
          }
        }(DD, GD, hD, LD, cD, RD)
      }
      let nD = await DD.readPixels(LD, cD);
      if (!nD) throw new Error(`Failed to read pixels from texture ${DD.name}.`);
      if (nD instanceof Float32Array) {
        const DD = new Uint8Array(nD.length);
        let zD = nD.length;
        for (; zD--;) {
          const wD = nD[zD];
          DD[zD] = Math.round(255 * (0, AD.Clamp)(wD))
        }
        nD = DD
      }
      const MD = GD * hD,
        OD = 4 * MD;
      if (nD.length !== OD) {
        const DD = 0 === MD ? 0 : nD.length / MD;
        if (1 === DD || 2 === DD || 3 === DD) {
          const zD = new Uint8Array(OD);
          for (let wD = 0, pD = 0, sD = 0; wD < MD; wD++, sD += 4) {
            const wD = nD[pD++];
            if (1 === DD) {
              zD[sD] = wD, zD[sD + 1] = wD, zD[sD + 2] = wD, zD[sD + 3] = 255;
              continue
            }
            const KD = nD[pD++];
            2 !== DD ? (zD[sD] = wD, zD[sD + 1] = KD, zD[sD + 2] = nD[pD++], zD[sD + 3] = 255) : (zD[sD] = wD, zD[sD + 1] = KD, zD[sD + 2] = 0, zD[sD + 3] = 255)
          }
          return zD
        }
      }
      return nD
    }
    const BD = {
      CreateResizedCopy: function(DD, zD, wD) {
        let KD = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const rD = DD.Ul(),
          LD = rD.iI(),
          cD = new sD.b("resized" + DD.name, {
            width: zD,
            height: wD
          }, rD, !DD.noMipmap, !0, DD._texture.type, !1, DD.samplingMode, !1);
        cD.wrapU = DD.wrapU, cD.wrapV = DD.wrapV, cD.uOffset = DD.uOffset, cD.vOffset = DD.vOffset, cD.uScale = DD.uScale, cD.vScale = DD.vScale, cD.uAng = DD.uAng, cD.vAng = DD.vAng, cD.wAng = DD.wAng, cD.coordinatesIndex = DD.coordinatesIndex, cD.level = DD.level, cD.anisotropicFilteringLevel = DD.anisotropicFilteringLevel, cD._texture.isReady = !1, DD.wrapU = pD.d.CLAMP_ADDRESSMODE, DD.wrapV = pD.d.CLAMP_ADDRESSMODE;
        const gD = new RD("pass", 1, null, KD ? pD.d.BILINEAR_SAMPLINGMODE : pD.d.NEAREST_SAMPLINGMODE, LD, !1, 0);
        return gD.externalTextureSamplerBinding = !0, gD.onEffectCreatedObservable.addOnce((zD => {
          zD.executeWhenCompiled((() => {
            gD.onApply = function(zD) {
              zD.setTexture("textureSampler", DD)
            };
            const zD = cD.renderTarget;
            zD && (rD.postProcessManager.directRender([gD], zD), LD.unBindFramebuffer(zD), cD.disposeFramebufferObjects(), gD.dispose(), cD.getInternalTexture().isReady = !0)
          }))
        })), cD
      },
      ApplyPostProcess: fD,
      ToHalfFloat: UD.g,
      FromHalfFloat: UD.c,
      GetTextureDataAsync: ID
    }
  },
  41709: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => ID
    });
    var pD = wD(39921),
      sD = wD(40043),
      KD = wD(37119),
      rD = wD(37079),
      LD = wD(39771),
      cD = wD(39927),
      gD = wD(39939),
      RD = wD(37134),
      AD = wD(39826),
      UD = wD(39852),
      fD = wD(41711);
    let ID = (() => {
        var DD;
        let zD, LD, AD, ID, BD, hD, nD, MD, OD, JD, ED, QD, XD, VD, PD, CD, xD = [],
          TD = [],
          bD = [],
          jD = [],
          dD = [],
          SD = [],
          iD = [],
          lD = [],
          WD = [],
          ND = [],
          ZD = [],
          yD = [],
          kD = [],
          mD = [],
          eD = [],
          oD = [],
          aD = [],
          uD = [],
          vD = [],
          tD = [],
          FD = [],
          YD = [],
          HD = [],
          qD = [],
          Dz = [],
          zz = [],
          wz = [],
          pz = [],
          sz = [];
        return DD = class {
          static get ForceGLSL() {
            return fD.g.ForceGLSL
          }
          static set ForceGLSL(DD) {
            fD.g.ForceGLSL = DD
          }
          static RegisterShaderCodeProcessing(DD, zD) {
            fD.g.RegisterShaderCodeProcessing(DD, zD)
          }
          get name() {
            return this._effectWrapper.name
          }
          set name(DD) {
            this._effectWrapper.name = DD
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode
          }
          set alphaMode(DD) {
            this._effectWrapper.alphaMode = DD
          }
          get samples() {
            return this._samples
          }
          set samples(DD) {
            this._samples = Math.min(DD, this._engine.getCaps().maxMSAASamples), this._textures.forEach((DD => {
              DD.setSamples(this._samples)
            }))
          }
          get shaderLanguage() {
            return this._shaderLanguage
          }
          getEffectName() {
            return this._fragmentUrl
          }
          set onActivate(DD) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), DD && (this._onActivateObserver = this.onActivateObservable.add(DD))
          }
          set onSizeChanged(DD) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(DD)
          }
          set onApply(DD) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(DD)
          }
          set onBeforeRender(DD) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(DD)
          }
          set onAfterRender(DD) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(DD)
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd]
          }
          set inputTexture(DD) {
            this._forcedOutputTexture = DD
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty())
          }
          getCamera() {
            return this.Qq
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.Z2(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(zD, wD, LD, cD, gD, RD) {
            let AD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              UD = arguments.length > 7 ? arguments[7] : void 0,
              ID = arguments.length > 8 ? arguments[8] : void 0,
              BD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              hD = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              nD = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              MD = arguments.length > 12 ? arguments[12] : void 0,
              OD = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              JD = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              ED = arguments.length > 15 ? arguments[15] : void 0,
              QD = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, pD.m)(this, xD), null), this.uniqueId = (0, pD.m)(this, TD, void 0), this.width = ((0, pD.m)(this, bD), (0, pD.m)(this, jD, -1)), this.height = ((0, pD.m)(this, dD), (0, pD.m)(this, SD, -1)), this.nodeMaterialSource = ((0, pD.m)(this, iD), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, pD.m)(this, lD, void 0), this.clearColor = ((0, pD.m)(this, WD), (0, pD.m)(this, ND, void 0)), this.autoClear = ((0, pD.m)(this, ZD), (0, pD.m)(this, yD, !0)), this.forceAutoClearInAlphaMode = ((0, pD.m)(this, kD), (0, pD.m)(this, mD, !1)), this.alphaConstants = ((0, pD.m)(this, eD), (0, pD.m)(this, oD, void 0)), this.animations = ((0, pD.m)(this, aD), []), this.enablePixelPerfectMode = (0, pD.m)(this, uD, !1), this.forceFullscreenViewport = ((0, pD.m)(this, vD), (0, pD.m)(this, tD, !0)), this.inspectableCustomProperties = (0, pD.m)(this, FD), this.scaleMode = (0, pD.m)(this, YD, 1), this.alwaysForcePOT = ((0, pD.m)(this, HD), (0, pD.m)(this, qD, !1)), this._samples = ((0, pD.m)(this, Dz), (0, pD.m)(this, zz, 1)), this.adaptScaleToCurrentViewport = ((0, pD.m)(this, wz), (0, pD.m)(this, pz, !1)), this.doNotSerialize = ((0, pD.m)(this, sz), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new sD.f(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new rD.r(1, 1), this._texelSize = rD.r.Zero(), this.onActivateObservable = new KD.b, this.onSizeChangedObservable = new KD.b, this.onApplyObservable = new KD.b, this.onBeforeRenderObservable = new KD.b, this.onAfterRenderObservable = new KD.b, this.Bl = new KD.b, GD();
            let XD, VD = 1,
              PD = null;
            if (LD && !Array.isArray(LD)) {
              const DD = LD;
              LD = DD.uniforms ?? null, cD = DD.samplers ?? null, VD = DD.size ?? 1, RD = DD.camera ?? null, AD = DD.samplingMode ?? 1, UD = DD.engine, ID = DD.reusable, BD = Array.isArray(DD.defines) ? DD.defines.join("\n") : DD.defines ?? null, hD = DD.textureType ?? 0, nD = DD.vertexUrl ?? "postprocess", MD = DD.indexParameters, OD = DD.blockCompilation ?? !1, JD = DD.textureFormat ?? 5, ED = DD.shaderLanguage ?? 0, PD = DD.uniformBuffers ?? null, QD = DD.extraInitializations, XD = DD.effectWrapper
            } else gD && (VD = "number" === typeof gD ? gD : {
              width: gD.width,
              height: gD.height
            });
            if (this._useExistingThinPostProcess = !!XD, this._effectWrapper = XD ?? new fD.g({
                name: zD,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: wD,
                engine: UD || RD?.Ul().iI(),
                uniforms: LD,
                samplers: cD,
                uniformBuffers: PD,
                defines: BD,
                vertexUrl: nD,
                indexParameters: MD,
                blockCompilation: !0,
                shaderLanguage: ED,
                extraInitializations: void 0
              }), this.name = zD, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != RD ? (this.Qq = RD, this._scene = RD.Ul(), RD.attachPostProcess(this), this._engine = this._scene.iI(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : UD && (this._engine = UD, this._engine.postProcesses.push(this)), this._options = VD, this.renderTargetSamplingMode = AD || 1, this._reusable = ID || !1, this._textureType = hD, this._textureFormat = JD, this._shaderLanguage = ED || 0, this._samplers = cD || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = wD, this._vertexUrl = nD, this._parameters = LD || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = PD || [], this._indexParameters = MD, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const zD = [];
              this._gatherImports(this._engine.isWebGPU && !DD.ForceGLSL, zD), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(OD, BD, QD, zD)
            }
          }
          _gatherImports() {
            let DD = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? DD.push(Promise.all([wD.e(364).then((() => wD(61157)))])) : DD.push(Promise.all([wD.e(353).then((() => wD(61035)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          iI() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(DD) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = DD, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new sD.f(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              pD = arguments.length > 3 ? arguments[3] : void 0,
              sD = arguments.length > 4 ? arguments[4] : void 0,
              KD = arguments.length > 5 ? arguments[5] : void 0,
              rD = arguments.length > 6 ? arguments[6] : void 0,
              LD = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(DD, zD, wD, pD, sD, KD, rD, LD), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(DD, zD) {
            let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let sD = 0; sD < this._textureCache.length; sD++)
              if (this._textureCache[sD].texture.width === DD.width && this._textureCache[sD].texture.height === DD.height && this._textureCache[sD].postProcessChannel === wD && this._textureCache[sD].texture._generateDepthBuffer === zD.generateDepthBuffer && this._textureCache[sD].texture.samples === zD.samples) return this._textureCache[sD].texture;
            const pD = this._engine.createRenderTargetTexture(DD, zD);
            return this._textureCache.push({
              texture: pD,
              postProcessChannel: wD,
              lastUsedRenderId: -1
            }), pD
          }
          _flushTextureCache() {
            const DD = this._renderId;
            for (let zD = this._textureCache.length - 1; zD >= 0; zD--)
              if (DD - this._textureCache[zD].lastUsedRenderId > 100) {
                let DD = !1;
                for (let wD = 0; wD < this._textures.length; wD++)
                  if (this._textures.data[wD] === this._textureCache[zD].texture) {
                    DD = !0;
                    break
                  } DD || (this._textureCache[zD].texture.dispose(), this._textureCache.splice(zD, 1))
              }
          }
          resize(DD, zD) {
            let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              sD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = DD, this.height = zD;
            let KD = null;
            if (wD)
              for (let cD = 0; cD < wD._postProcesses.length; cD++)
                if (null !== wD._postProcesses[cD]) {
                  KD = wD._postProcesses[cD];
                  break
                } const rD = {
                width: this.width,
                height: this.height
              },
              LD = {
                generateMipMaps: pD,
                generateDepthBuffer: sD || KD === this,
                generateStencilBuffer: (sD || KD === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(rD, LD, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(rD, LD, 1)), this._texelSize.Z2(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let DD;
            if (this._shareOutputWithPostProcess) DD = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) DD = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let zD;
              DD = this.inputTexture;
              for (let wD = 0; wD < this._textureCache.length; wD++)
                if (this._textureCache[wD].texture === DD) {
                  zD = this._textureCache[wD];
                  break
                } zD && (zD.lastUsedRenderId = this._renderId)
            }
            return DD
          }
          activate(DD) {
            let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              wD = arguments.length > 2 ? arguments[2] : void 0;
            const pD = null === DD || void 0 !== DD.cameraRigMode ? DD || this.Qq : null,
              sD = pD?.Ul() ?? DD,
              KD = sD.iI(),
              rD = KD.getCaps().maxTextureSize,
              LD = (zD ? zD.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              cD = (zD ? zD.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let gD = this._options.width || LD,
              RD = this._options.height || cD;
            const AD = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let fD = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const DD = KD.currentViewport;
                DD && (gD *= DD.width, RD *= DD.height)
              }(AD || this.alwaysForcePOT) && (this._options.width || (gD = KD.needPOTTextures ? (0, UD.f)(gD, rD, this.scaleMode) : gD), this._options.height || (RD = KD.needPOTTextures ? (0, UD.f)(RD, rD, this.scaleMode) : RD)), this.width === gD && this.height === RD && (fD = this._getTarget()) || this.resize(gD, RD, pD, AD, wD), this._textures.forEach((DD => {
                DD.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(DD, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return fD || (fD = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.Z2(LD / gD, cD / RD), this._engine.bindFramebuffer(fD, 0, LD, cD, this.forceFullscreenViewport)) : (this._scaleRatio.Z2(1, 1), this._engine.bindFramebuffer(fD, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(pD), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : sD.clearColor, sD._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), fD
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
            let DD;
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.iI().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), DD = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", DD?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
          }
          _disposeTextureCache() {
            for (let DD = this._textureCache.length - 1; DD >= 0; DD--) this._textureCache[DD].texture.dispose();
            this._textureCache.length = 0
          }
          setPrePassRenderer(DD) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = DD.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
          }
          dispose(DD) {
            let zD;
            if (DD = DD || this.Qq, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (zD = this._parentContainer.postProcesses.indexOf(this), zD > -1 && this._parentContainer.postProcesses.splice(zD, 1), this._parentContainer = null), zD = this._engine.postProcesses.indexOf(this), -1 !== zD && this._engine.postProcesses.splice(zD, 1), this.Bl.notifyObservers(), DD) {
              if (DD.detachPostProcess(this), zD = DD._postProcesses.indexOf(this), 0 === zD && DD._postProcesses.length > 0) {
                const DD = this.Qq._getFirstPostProcess();
                DD && DD.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const DD = gD.d.Serialize(this),
              zD = this.getCamera() || this._scene && this._scene.activeCamera;
            return DD.customType = "BABYLON." + this.getClassName(), DD.cameraId = zD ? zD.id : null, DD.reusable = this._reusable, DD.textureType = this._textureType, DD.fragmentUrl = this._fragmentUrl, DD.parameters = this._parameters, DD.samplers = this._samplers, DD.uniformBuffers = this._uniformBuffers, DD.options = this._options, DD.defines = this._postProcessDefines, DD.textureFormat = this._textureFormat, DD.vertexUrl = this._vertexUrl, DD.indexParameters = this._indexParameters, DD
          }
          clone() {
            const zD = this.serialize();
            zD._engine = this._engine, zD.cameraId = null;
            const wD = DD.Parse(zD, this._scene, "");
            return wD ? (wD.onActivateObservable = this.onActivateObservable.clone(), wD.onSizeChangedObservable = this.onSizeChangedObservable.clone(), wD.onApplyObservable = this.onApplyObservable.clone(), wD.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), wD.onAfterRenderObservable = this.onAfterRenderObservable.clone(), wD._prePassEffectConfiguration = this._prePassEffectConfiguration, wD) : null
          }
          static Parse(DD, zD, wD) {
            const pD = (0, RD.e)(DD.customType);
            if (!pD || !pD._Parse) return null;
            const sD = zD ? zD.getCameraById(DD.cameraId) : null;
            return pD._Parse(DD, sD, zD, wD)
          }
          static _Parse(zD, wD, pD, sD) {
            return gD.d.Parse((() => new DD(zD.name, zD.fragmentUrl, zD.parameters, zD.samplers, zD.options, wD, zD.renderTargetSamplingMode, zD._engine, zD.reusable, zD.defines, zD.textureType, zD.vertexUrl, zD.indexParameters, !1, zD.textureFormat)), zD, pD, sD)
          }
        }, (() => {
          const wD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zD = [(0, cD.C)()], LD = [(0, cD.C)()], AD = [(0, cD.C)()], ID = [(0, cD.C)()], BD = [(0, cD.C)()], hD = [(0, cD.m)()], nD = [(0, cD.C)()], MD = [(0, cD.C)()], OD = [(0, cD.C)()], JD = [(0, cD.C)()], ED = [(0, cD.C)()], QD = [(0, cD.C)()], XD = [(0, cD.C)()], VD = [(0, cD.C)()], PD = [(0, cD.C)("samples")], CD = [(0, cD.C)()], (0, pD.i)(DD, null, LD, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: DD => "name" in DD,
              get: DD => DD.name
            },
            metadata: wD
          }, null, xD), (0, pD.i)(DD, null, OD, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: DD => "alphaMode" in DD,
              get: DD => DD.alphaMode
            },
            metadata: wD
          }, null, xD), (0, pD.i)(null, null, zD, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: DD => "uniqueId" in DD,
              get: DD => DD.uniqueId,
              set: (DD, zD) => {
                DD.uniqueId = zD
              }
            },
            metadata: wD
          }, TD, bD), (0, pD.i)(null, null, AD, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: DD => "width" in DD,
              get: DD => DD.width,
              set: (DD, zD) => {
                DD.width = zD
              }
            },
            metadata: wD
          }, jD, dD), (0, pD.i)(null, null, ID, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: DD => "height" in DD,
              get: DD => DD.height,
              set: (DD, zD) => {
                DD.height = zD
              }
            },
            metadata: wD
          }, SD, iD), (0, pD.i)(null, null, BD, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: DD => "renderTargetSamplingMode" in DD,
              get: DD => DD.renderTargetSamplingMode,
              set: (DD, zD) => {
                DD.renderTargetSamplingMode = zD
              }
            },
            metadata: wD
          }, lD, WD), (0, pD.i)(null, null, hD, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: DD => "clearColor" in DD,
              get: DD => DD.clearColor,
              set: (DD, zD) => {
                DD.clearColor = zD
              }
            },
            metadata: wD
          }, ND, ZD), (0, pD.i)(null, null, nD, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: DD => "autoClear" in DD,
              get: DD => DD.autoClear,
              set: (DD, zD) => {
                DD.autoClear = zD
              }
            },
            metadata: wD
          }, yD, kD), (0, pD.i)(null, null, MD, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: DD => "forceAutoClearInAlphaMode" in DD,
              get: DD => DD.forceAutoClearInAlphaMode,
              set: (DD, zD) => {
                DD.forceAutoClearInAlphaMode = zD
              }
            },
            metadata: wD
          }, mD, eD), (0, pD.i)(null, null, JD, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: DD => "alphaConstants" in DD,
              get: DD => DD.alphaConstants,
              set: (DD, zD) => {
                DD.alphaConstants = zD
              }
            },
            metadata: wD
          }, oD, aD), (0, pD.i)(null, null, ED, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: DD => "enablePixelPerfectMode" in DD,
              get: DD => DD.enablePixelPerfectMode,
              set: (DD, zD) => {
                DD.enablePixelPerfectMode = zD
              }
            },
            metadata: wD
          }, uD, vD), (0, pD.i)(null, null, QD, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: DD => "forceFullscreenViewport" in DD,
              get: DD => DD.forceFullscreenViewport,
              set: (DD, zD) => {
                DD.forceFullscreenViewport = zD
              }
            },
            metadata: wD
          }, tD, FD), (0, pD.i)(null, null, XD, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: DD => "scaleMode" in DD,
              get: DD => DD.scaleMode,
              set: (DD, zD) => {
                DD.scaleMode = zD
              }
            },
            metadata: wD
          }, YD, HD), (0, pD.i)(null, null, VD, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: DD => "alwaysForcePOT" in DD,
              get: DD => DD.alwaysForcePOT,
              set: (DD, zD) => {
                DD.alwaysForcePOT = zD
              }
            },
            metadata: wD
          }, qD, Dz), (0, pD.i)(null, null, PD, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: DD => "_samples" in DD,
              get: DD => DD._samples,
              set: (DD, zD) => {
                DD._samples = zD
              }
            },
            metadata: wD
          }, zz, wz), (0, pD.i)(null, null, CD, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: DD => "adaptScaleToCurrentViewport" in DD,
              get: DD => DD.adaptScaleToCurrentViewport,
              set: (DD, zD) => {
                DD.adaptScaleToCurrentViewport = zD
              }
            },
            metadata: wD
          }, pz, sz), wD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: wD
          })
        })(), DD
      })(),
      BD = !1;

    function GD() {
      BD || (BD = !0, AD.c.prototype.setTextureFromPostProcess = function(DD, zD, wD) {
        let pD = null;
        zD && (zD._forcedOutputTexture ? pD = zD._forcedOutputTexture : zD._textures.data[zD._currentRenderTextureInd] && (pD = zD._textures.data[zD._currentRenderTextureInd])), this._bindTexture(DD, pD?.texture ?? null, wD)
      }, AD.c.prototype.setTextureFromPostProcessOutput = function(DD, zD, wD) {
        this._bindTexture(DD, zD?._outputTexture?.texture ?? null, wD)
      }, LD.c.prototype.setTextureFromPostProcess = function(DD, zD) {
        this._engine.setTextureFromPostProcess(this._samplers[DD], zD, DD)
      }, LD.c.prototype.setTextureFromPostProcessOutput = function(DD, zD) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[DD], zD, DD)
      }, (0, RD.i)("BABYLON.PostProcess", ID))
    }
  },
  41737: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => rD,
      e: () => KD
    });
    var pD = wD(41711),
      sD = wD(37110);
    class KD extends pD.g {
      _gatherImports(DD, zD) {
        DD ? (this._webGPUReady = !0, zD.push(Promise.all([wD.e(371).then((() => wD(61208)))]))) : zD.push(Promise.all([wD.e(372).then((() => wD(61215)))])), super._gatherImports(DD, zD)
      }
      constructor(DD) {
        let zD = arguments.length > 2 ? arguments[2] : void 0;
        const wD = {
          name: DD,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || sD.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: KD.FragmentUrl,
          ...zD
        };
        wD.engine || (wD.engine = sD.d.LastCreatedEngine), super(wD)
      }
    }
    KD.FragmentUrl = "pass";
    class rD extends pD.g {
      _gatherImports(DD, zD) {
        DD ? (this._webGPUReady = !0, zD.push(Promise.all([wD.e(373).then((() => wD(61221)))]))) : zD.push(Promise.all([wD.e(374).then((() => wD(61227)))])), super._gatherImports(DD, zD)
      }
      constructor(DD) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: DD,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || sD.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: rD.FragmentUrl,
          defines: "#define POSITIVEX"
        }), this._face = 0
      }
      get face() {
        return this._face
      }
      set face(DD) {
        if (!(DD < 0 || DD > 5)) switch (this._face = DD, this._face) {
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
    rD.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);