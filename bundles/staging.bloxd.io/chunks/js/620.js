export const id = 620;
export const ids = [620];
export const modules = {
  44465: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => yM
    });
    var OM = iM(38068),
      SM = iM(38040),
      jM = iM(41560),
      aM = iM(41258),
      PM = iM(41034),
      nM = iM(39711),
      QM = iM(41240),
      zM = iM(41269),
      LM = iM(38048),
      mM = iM(41003),
      HM = iM(41213),
      hM = iM(41309);
    class JM {
      get renderList() {
        return this._renderList
      }
      set renderList(MM) {
        this._renderList !== MM && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), MM && (this._unObserveRenderList = (0, LM.j)(MM, this._renderListHasChanged)), this._renderList = MM)
      }
      get disableImageProcessing() {
        return this._disableImageProcessing
      }
      set disableImageProcessing(MM) {
        MM !== this._disableImageProcessing && (this._disableImageProcessing = MM, this._scene.markAllMaterialsAsDirty(64))
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(MM) {
        this._disableDepthPrePass = MM, this._renderingManager.disableDepthPrePass = MM
      }
      get name() {
        return this._name
      }
      set name(MM) {
        if (this._name !== MM) {
          if (this._name = MM, this._sceneUBOs)
            for (let MM = 0; MM < this._sceneUBOs.length; ++MM) this._sceneUBOs[MM].name = `Scene ubo #${MM} for ${this.name}`;
          if (this._scene)
            for (let MM = 0; MM < this._renderPassIds.length; ++MM) {
              const rM = this._renderPassIds[MM];
              this._engine._renderPassNames[rM] = `${this._name}#${MM}`
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
      setMaterialForRendering(MM, rM) {
        let iM;
        iM = Array.isArray(MM) ? MM : [MM];
        for (let OM = 0; OM < iM.length; ++OM)
          for (let MM = 0; MM < this.options.numPasses; ++MM) {
            let SM = iM[OM];
            iM[OM].Wk && (SM = iM[OM].QSM), SM.setMaterialForRenderPass(this._renderPassIds[MM], void 0 !== rM ? Array.isArray(rM) ? rM[MM] : rM : void 0)
          }
      }
      _freezeActiveMeshes(MM) {
        this._freezeActiveMeshesCancel = (0, mM.d)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, MM)
            for (let MM = 0; MM < this._activeMeshes.length; MM++) this._activeMeshes.data[MM]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((MM, rM) => {
          this._freezeActiveMeshesCancel = null, rM ? (nM.e.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), MM && nM.e.Error(MM)) : (nM.e.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), MM && (nM.e.Error(MM), MM.stack && nM.e.Error(MM.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let MM = 0; MM < this._activeMeshes.length; MM++) this._activeMeshes.data[MM]._unFreeze();
        this._isFrozen = !1
      }
      constructor(MM, rM, iM) {
        this._unObserveRenderList = null, this._renderListHasChanged = (MM, rM) => {
          const iM = this._renderList ? this._renderList.length : 0;
          if (0 === rM && iM > 0 || 0 === iM)
            for (const OM of this._scene.meshes) OM._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new OM.d, this.onAfterRenderObservable = new OM.d, this.onBeforeRenderingManagerRenderObservable = new OM.d, this.onAfterRenderingManagerRenderObservable = new OM.d, this.onInitRenderingObservable = new OM.d, this.onFinishRenderingObservable = new OM.d, this.onFastPathRenderObservable = new OM.d, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new HM.e(256), this._activeBoundingBoxes = new HM.e(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = MM, this._scene = rM, this._engine = this._scene.ph(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...iM
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new zM.b(rM), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const MM of this._scene.lights) MM.getTypeID() === hM.b.LIGHTTYPEID_CLUSTERED_CONTAINER && MM.isSupported && MM._updateBatches(this.activeCamera).render()
        })), this._scene.addObjectRenderer(this)
      }
      _releaseRenderPassId() {
        for (let MM = 0; MM < this.options.numPasses; ++MM) this._engine.releaseRenderPassId(this._renderPassIds[MM]);
        this._renderPassIds.length = 0
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let MM = 0; MM < this.options.numPasses; ++MM) this._renderPassIds[MM] = this._engine.createRenderPassId(`${this.name}#${MM}`)
      }
      _createSceneUBO(MM, rM) {
        const iM = this._scene.ph(),
          OM = new QM.b(iM, void 0, rM, MM, void 0, !1);
        return OM.addUniform("viewProjection", 16), rM && OM.addUniform("viewProjectionR", 16), OM.addUniform("view", 16), OM.addUniform("projection", 16), OM.addUniform("vEyePosition", 4), OM.addUniform("inverseProjection", 16), OM
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const MM = this._engine._currentRenderTarget,
          rM = !(!MM || !MM.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const MM = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${MM} for ${this.name}`, rM)), this._sceneUBOIsMultiview.push(rM)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== rM && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, rM), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = rM);
        const iM = this._sceneUBOs[this._currentSceneUBOIndex++];
        return iM.unbindEffect(), iM
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1
      }
      get refreshRate() {
        return this._refreshRate
      }
      set refreshRate(MM) {
        this._refreshRate = MM, this.resetRefreshCounter()
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1))
      }
      isReadyForRendering(MM, rM) {
        this.prepareRenderList(), this.initRender(MM, rM);
        const iM = this._checkReadiness();
        return this.finishRender(), iM
      }
      prepareRenderList() {
        const MM = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let rM = 0; rM < this._waitingRenderList.length; rM++) {
              const iM = this._waitingRenderList[rM],
                OM = MM.getMeshById(iM);
              OM && this.renderList.push(OM)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const MM = this._scene.meshes;
          for (let rM = 0; rM < MM.length; rM++) {
            const iM = MM[rM];
            this.renderListPredicate(iM) && this.renderList.push(iM)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(MM, rM) {
        const iM = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), iM && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(iM.getViewMatrix(), iM.getProjectionMatrix(!0)), this._scene._activeCamera = iM, this._engine.setViewport(iM.rigParent ? iM.rigParent.viewport : iM.viewport, MM, rM)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const MM = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (MM.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), MM._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== MM.activeCamera && MM.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), MM.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const iM = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[MM], this.onBeforeRenderObservable.notifyObservers(MM);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(MM);
        else {
          const rM = this._prepareRenderingManager(MM),
            iM = this._scene.getOutlineRenderer?.(),
            OM = iM?.enabled;
          iM && (iM.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(MM), this._renderingManager.render(this.customRenderFunction, rM, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(MM), iM && (iM.enabled = OM)
        }
        rM || this.onAfterRenderObservable.notifyObservers(MM), this._engine.currentRenderPassId = iM
      }
      _checkReadiness() {
        const MM = this._scene,
          rM = this._engine.currentRenderPassId;
        let iM = !0;
        MM.getViewMatrix() || MM.updateTransformMatrix();
        const OM = this.options.numPasses;
        for (let SM = 0; SM < OM && iM; SM++) {
          const rM = this.renderList ? this.renderList : MM.frameGraph ? MM.meshes : MM.getActiveMeshes().data,
            jM = this.renderList || MM.frameGraph ? rM.length : MM.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[SM], this.onBeforeRenderObservable.notifyObservers(SM);
          let aM = null,
            PM = jM;
          this.getCustomRenderList && (aM = this.getCustomRenderList(SM, rM, jM), aM && (PM = aM.length)), aM || (aM = rM), this.options.doNotChangeAspectRatio || MM.updateTransformMatrix(!0);
          for (let MM = 0; MM < PM && iM; ++MM) {
            const rM = aM[MM];
            if (!rM.isEnabled() || rM.isBlocked || !rM.isVisible || !rM.iG) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(rM, this.refreshRate, !0)) {
                iM = !1;
                continue
              }
            } else if (!rM.isReady(!0)) {
              iM = !1;
              continue
            }
            let OM = rM._edgesRenderer,
              SM = rM.hasThinInstances;
            if (rM.Wk) {
              const MM = rM.QSM;
              MM.edgesShareWithInstances && MM._edgesRenderer?.isEnabled && (OM = MM._edgesRenderer, SM = !0)
            } else rM.nSM && rM.edgesShareWithInstances && (SM = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && OM?.isEnabled && (OM.isReady(SM) || (iM = !1))
          }
          if (this.renderParticles && MM.particlesEnabled) {
            const rM = this.particleSystemList || MM.aG;
            for (const MM of rM) MM.isReady() || (iM = !1)
          }
          if (this.renderSprites && MM.spritesEnabled) {
            const rM = this.spriteManagerList || MM.spriteManagers;
            if (rM)
              for (const OM of rM) MM.activeCamera && 0 === (OM.layerMask & MM.activeCamera.layerMask) || OM.isReady && !OM.isReady() && (iM = !1)
          }
          this.onAfterRenderObservable.notifyObservers(SM), OM > 1 && (MM.incrementRenderId(), MM.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = rM, iM
      }
      _prepareRenderingManager() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const iM = this._scene;
        let OM, SM, jM = null;
        const aM = this.renderList ? this.renderList : iM.frameGraph ? iM.meshes : iM.getActiveMeshes().data,
          PM = this.renderList || iM.frameGraph ? aM.length : iM.getActiveMeshes().length;
        if (this.getCustomRenderList && (jM = this.getCustomRenderList(MM, aM, PM)), jM) OM = jM.length, SM = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !rM && !this._engine.isWebGPU) return aM;
          this._defaultRenderListPrepared = !0, jM = aM, OM = PM, SM = !this.renderList || this.forceLayerMaskCheck
        }
        const nM = iM.activeCamera,
          QM = this.cameraForLOD ?? nM,
          zM = iM.getBoundingBoxRenderer?.();
        if (iM._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && zM) {
            zM.reset();
            for (let MM = 0; MM < this._activeBoundingBoxes.length; MM++) {
              const rM = this._activeBoundingBoxes.data[MM];
              zM.renderList.push(rM)
            }
          }
          return jM
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), zM && zM.reset(), this.renderMeshes) {
          const MM = iM.getRenderId(),
            rM = iM.getFrameId();
          for (let aM = 0; aM < OM; aM++) {
            const OM = jM[aM];
            if (OM && !OM.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(OM, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!OM.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let jM, aM;
              if (QM) {
                const MM = OM._internalAbstractMeshDataInfo._currentLOD.get(QM);
                MM && MM[1] === rM ? jM = MM[0] : (jM = iM.customLODSelector ? iM.customLODSelector(OM, QM) : OM.getLOD(QM), MM ? (MM[0] = jM, MM[1] = rM) : OM._internalAbstractMeshDataInfo._currentLOD.set(QM, [jM, rM]))
              } else jM = OM;
              if (!jM) continue;
              if (jM !== OM && 0 !== jM.billboardMode && jM.computeWorldMatrix(), jM._preActivateForIntermediateRendering(MM), aM = !(!SM || !nM) && 0 === (OM.layerMask & nM.layerMask), OM.isEnabled() && OM.isVisible && OM.iG && !aM) {
                if (this._activeMeshes.push(OM), jM._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, jM !== OM && jM._activate(MM, !0), this.enableBoundingBoxRendering && zM && zM._preActiveMesh(OM), OM._activate(MM, !0) && OM.iG.length) {
                  OM.Wk ? OM._internalAbstractMeshDataInfo._actAsRegularMesh && (jM = OM) : jM._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, jM._internalAbstractMeshDataInfo._isActiveIntermediate = !0, iM._prepareSkeleton(jM);
                  for (let MM = 0; MM < jM.iG.length; MM++) {
                    const rM = jM.iG[MM];
                    this.enableBoundingBoxRendering && zM && zM._evaluateSubMesh(OM, rM), this._renderingManager.dispatch(rM, jM)
                  }
                }
                OM._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && zM && rM)
          for (let LM = 0; LM < zM.renderList.length; LM++) {
            const MM = zM.renderList.data[LM];
            this._activeBoundingBoxes.push(MM)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const MM = this.particleSystemList || iM.aG;
          for (let rM = 0; rM < MM.length; rM++) {
            const iM = MM[rM],
              OM = iM.emitter;
            iM.isStarted() && OM && (!OM.position || OM.isEnabled()) && this._renderingManager.dispatchParticles(iM)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return jM
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(MM, rM, iM, OM)
      }
      setRenderingAutoClearDepthStencil(MM, rM) {
        let iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          OM = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(MM, rM, iM, OM), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const MM = new JM(this.name, this._scene, this.options);
        return this.renderList && (MM.renderList = this.renderList.slice(0)), MM
      }
      dispose() {
        const MM = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          rM = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let iM = 0; iM < rM; iM++) {
          const rM = MM[iM];
          rM && void 0 !== rM.getMaterialForRenderPass(this.renderPassId) && rM.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const iM of this._sceneUBOs) iM.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === JM.REFRESHRATE_RENDER_ONCE && (this.refreshRate = JM.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    JM.REFRESHRATE_RENDER_ONCE = 0, JM.REFRESHRATE_RENDER_ONEVERYFRAME = 1, JM.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var dM = iM(40990);
    class yM extends jM.h {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate
      }
      set renderListPredicate(MM) {
        this._objectRenderer.renderListPredicate = MM
      }
      get renderList() {
        return this._objectRenderer.renderList
      }
      set renderList(MM) {
        this._objectRenderer.renderList = MM
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList
      }
      set particleSystemList(MM) {
        this._objectRenderer.particleSystemList = MM
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList
      }
      set getCustomRenderList(MM) {
        this._objectRenderer.getCustomRenderList = MM
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles
      }
      set renderParticles(MM) {
        this._objectRenderer.renderParticles = MM
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites
      }
      set renderSprites(MM) {
        this._objectRenderer.renderSprites = MM
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering
      }
      set enableBoundingBoxRendering(MM) {
        this._objectRenderer.enableBoundingBoxRendering = MM
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering
      }
      set enableOutlineRendering(MM) {
        this._objectRenderer.enableOutlineRendering = MM
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck
      }
      set forceLayerMaskCheck(MM) {
        this._objectRenderer.forceLayerMaskCheck = MM
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera
      }
      set activeCamera(MM) {
        this._objectRenderer.activeCamera = MM
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD
      }
      set cameraForLOD(MM) {
        this._objectRenderer.cameraForLOD = MM
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing
      }
      set disableImageProcessing(MM) {
        this._objectRenderer.disableImageProcessing = MM
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction
      }
      set customIsReadyFunction(MM) {
        this._objectRenderer.customIsReadyFunction = MM
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction
      }
      set customRenderFunction(MM) {
        this._objectRenderer.customRenderFunction = MM
      }
      get postProcesses() {
        return this._postProcesses
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled
      }
      set onAfterUnbind(MM) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(MM)
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable
      }
      set onBeforeRender(MM) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(MM)
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable
      }
      set onAfterRender(MM) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(MM)
      }
      set onClear(MM) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(MM)
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList
      }
      set _waitingRenderList(MM) {
        this._objectRenderer._waitingRenderList = MM
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
      setMaterialForRendering(MM, rM) {
        this._objectRenderer.setMaterialForRendering(MM, rM)
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
      set boundingBoxSize(MM) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(MM)) return;
        this._boundingBoxSize = MM;
        const rM = this.Hk();
        rM && rM.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(MM, rM, iM) {
        let aM, PM, QM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          zM = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          LM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          mM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          HM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : jM.h.TRILINEAR_SAMPLINGMODE,
          hM = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          dM = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          yM = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          lM = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          EM = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          UM = arguments.length > 13 ? arguments[13] : void 0,
          GM = arguments.length > 14 ? arguments[14] : void 0,
          CM = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          eM = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          bM = !0,
          wM = !1;
        if ("object" === typeof QM) {
          const MM = QM;
          QM = !!MM.generateMipMaps, zM = MM.doNotChangeAspectRatio ?? !0, LM = MM.type ?? 0, mM = !!MM.isCube, HM = MM.samplingMode ?? jM.h.TRILINEAR_SAMPLINGMODE, hM = MM.generateDepthBuffer ?? !0, dM = !!MM.generateStencilBuffer, yM = !!MM.isMulti, lM = MM.format ?? 5, EM = !!MM.delayAllocation, UM = MM.samples, GM = MM.creationFlags, CM = !!MM.noColorAttachment, eM = !!MM.useSRGBBuffer, aM = MM.colorAttachment, bM = MM.gammaSpace ?? bM, PM = MM.existingObjectRenderer, wM = !!MM.enableClusteredLights
        }
        if (super(null, iM, !QM, void 0, HM, void 0, void 0, void 0, void 0, lM), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new OM.d, this.onAfterUnbindObservable = new OM.d, this.onClearObservable = new OM.d, this.onResizeObservable = new OM.d, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = SM.q.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(iM = this.Hk())) return;
        const tM = this.Hk().ph();
        this._gammaSpace = bM, this._coordinatesMode = jM.h.PROJECTION_MODE, this.name = MM, this.isRenderTarget = !0, this._initialSizeParameter = rM, this._dontDisposeObjectRenderer = !!PM, this._processSizeParameter(rM), this._objectRenderer = PM ?? new JM(MM, iM, {
          numPasses: mM ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: zM,
          enableClusteredLights: wM
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const MM = this._scene;
          if (!this._disableEngineStages)
            for (const rM of MM._beforeRenderTargetClearStage) rM.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(tM) : this.skipInitialClear || tM.clear(this.clearColor ?? MM.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || MM.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const rM of MM._beforeRenderTargetDrawStage) rM.action(this, this._currentFaceIndex, this._currentLayer);
          tM._debugPushGroup && tM._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (tM._debugPopGroup && tM._debugPopGroup(), !this._disableEngineStages)
            for (const rM of this._scene._afterRenderTargetDrawStage) rM.action(this, this._currentFaceIndex, this._currentLayer);
          const MM = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const rM of this._scene._afterRenderTargetPostProcessStage) rM.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = MM), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), tM) : nM.e.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(tM) : this.skipInitialClear || tM.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = tM.onResizeObservable.add((() => {})), this._generateMipMaps = !!QM, this._doNotChangeAspectRatio = zM, yM || (this._renderTargetOptions = {
          generateMipMaps: QM,
          type: LM,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: hM,
          generateStencilBuffer: dM,
          samples: UM,
          creationFlags: GM,
          noColorAttachment: CM,
          useSRGBBuffer: eM,
          colorAttachment: aM,
          label: this.name
        }, this.samplingMode === jM.h.NEAREST_SAMPLINGMODE && (this.wrapU = jM.h.CLAMP_ADDRESSMODE, this.wrapV = jM.h.CLAMP_ADDRESSMODE), EM || (mM ? (this._renderTarget = iM.ph().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = jM.h.INVCUBIC_MODE, this._textureMatrix = SM.d.Identity()) : this._renderTarget = iM.ph().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== UM && (this.samples = UM)))
      }
      createDepthStencilTexture() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          jM = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(MM, rM, iM, OM, SM, jM)
      }
      _processSizeParameter(MM) {
        if (MM.ratio) {
          this._sizeRatio = MM.ratio;
          const rM = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(rM.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(rM.getRenderHeight(), this._sizeRatio)
          }
        } else this._size = MM
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples
      }
      set samples(MM) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(MM))
      }
      addPostProcess(MM) {
        if (!this._postProcessManager) {
          const MM = this.Hk();
          if (!MM) return;
          this._postProcessManager = new aM.b(MM), this._postProcesses = new Array
        }
        this._postProcesses.push(MM), this._postProcesses[0].autoClear = !1
      }
      clearPostProcesses() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (MM)
            for (const MM of this._postProcesses) MM.dispose();
          this._postProcesses = []
        }
      }
      removePostProcess(MM) {
        if (!this._postProcesses) return;
        const rM = this._postProcesses.indexOf(MM); - 1 !== rM && (this._postProcesses.splice(rM, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter()
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate
      }
      set refreshRate(MM) {
        this._objectRenderer.refreshRate = MM
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
        const MM = this._size.layers;
        if (MM) return MM;
        const rM = this._size.depth;
        return rM || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(MM) {
        const rM = Math.max(1, this.getRenderSize() * MM);
        this.resize(rM)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(MM) {
        const rM = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const iM = this.Hk();
        iM && (this._processSizeParameter(MM), this._renderTarget = rM ? iM.ph().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : iM.ph().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(MM, rM)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => iM(44478))).then((MM => this._dumpTools = MM))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const MM = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), MM
      }
      _render() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const iM = this.Hk();
        if (!iM) return;
        void 0 !== this.useCameraPostProcesses && (MM = this.useCameraPostProcesses);
        const OM = iM.ph();
        if (OM._debugPushGroup && OM._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let SM = 0; SM < 6; SM++) this._renderToTarget(SM, MM, rM), iM.incrementRenderId(), iM.resetCachedMaterial();
          else this._renderToTarget(0, MM, rM);
        else
          for (let SM = 0; SM < this.getRenderLayers(); SM++) this._renderToTarget(0, MM, rM, SM), iM.incrementRenderId(), iM.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), OM._debugPopGroup && OM._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(MM, rM) {
        const iM = MM * rM,
          OM = (0, PM.m)(iM + 16384 / (128 + iM));
        return Math.min((0, PM.c)(MM), OM)
      }
      _bindFrameBuffer() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const iM = this.Hk();
        if (!iM) return;
        const OM = iM.ph();
        this._renderTarget && OM.bindFramebuffer(this._renderTarget, this.isCube ? MM : void 0, void 0, void 0, this.ignoreCameraViewport, 0, rM)
      }
      _unbindFrameBuffer(MM, rM) {
        this._renderTarget && MM.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(rM)
        }))
      }
      _prepareFrame(MM, rM, iM, OM) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(rM, iM) : OM && MM.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(rM, iM)
      }
      _renderToTarget(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const SM = this.Hk();
        if (!SM) return;
        const jM = SM.ph();
        this._currentFaceIndex = MM, this._currentLayer = OM, this._currentUseCameraPostProcess = rM, this._currentDumpForDebug = iM, this._prepareFrame(SM, MM, OM, rM), this._objectRenderer.render(MM + OM, !0), this._unbindFrameBuffer(jM, MM), this._texture && this.isCube && 5 === MM && jM.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(MM, rM, iM, OM)
      }
      setRenderingAutoClearDepthStencil(MM, rM) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(MM, rM)
      }
      clone() {
        const MM = this.getSize(),
          rM = new yM(this.name, MM, this.Hk(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return rM.hasAlpha = this.hasAlpha, rM.level = this.level, rM.coordinatesMode = this.coordinatesMode, this.renderList && (rM.renderList = this.renderList.slice(0)), rM
      }
      serialize() {
        if (!this.name) return null;
        const MM = super.serialize();
        if (MM.renderTargetSize = this.getRenderSize(), MM.renderList = [], this.renderList)
          for (let rM = 0; rM < this.renderList.length; rM++) MM.renderList.push(this.renderList[rM].id);
        return MM
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.Hk().ph().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const MM = this.Hk();
        if (!MM) return;
        let rM = MM.customRenderTargets.indexOf(this);
        rM >= 0 && MM.customRenderTargets.splice(rM, 1);
        for (const iM of MM.cameras) rM = iM.customRenderTargets.indexOf(this), rM >= 0 && iM.customRenderTargets.splice(rM, 1);
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
    yM.REFRESHRATE_RENDER_ONCE = JM.REFRESHRATE_RENDER_ONCE, yM.REFRESHRATE_RENDER_ONEVERYFRAME = JM.REFRESHRATE_RENDER_ONEVERYFRAME, yM.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = JM.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(yM.prototype, "noPrePassRenderer") || Object.defineProperty(yM.prototype, "noPrePassRenderer", (0, dM.g)("RenderTargetTexture", "noPrePassRenderer"))
  },
  44445: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => QM,
      c: () => zM
    });
    var OM = iM(41250),
      SM = iM(39078),
      jM = iM(38068),
      aM = iM(40957),
      PM = iM(41424);
    const nM = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class QM {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nM;
        this._fullscreenViewport = new SM.e(0, 0, 1, 1);
        const iM = rM.positions ?? nM.positions,
          jM = rM.indices ?? nM.indices;
        this.engine = MM, this._vertexBuffers = {
          [OM.j.PositionKind]: new OM.j(MM, iM, OM.j.PositionKind, !1, !1, 2)
        }, this._indexBuffer = MM.createIndexBuffer(jM), this._indexBufferLength = jM.length, this._onContextRestoredObserver = MM.Rh.add((() => {
          this._indexBuffer = MM.createIndexBuffer(jM);
          for (const MM in this._vertexBuffers) {
            this._vertexBuffers[MM]._rebuild()
          }
        }))
      }
      setViewport() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.engine.setViewport(MM)
      }
      bindBuffers(MM) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, MM)
      }
      applyEffectWrapper(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = rM, this.engine.stencilState.stencilTest = iM, this.engine.enableEffect(MM.drawWrapper), this.bindBuffers(MM.effect), MM.onApplyObservable.notifyObservers({})
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
      _isRenderTargetTexture(MM) {
        return void 0 !== MM.renderTarget
      }
      render(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!MM.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const iM = null === rM ? null : this._isRenderTargetTexture(rM) ? rM.renderTarget : rM;
        iM && this.engine.bindFramebuffer(iM), this.applyEffectWrapper(MM), this.draw(), iM && this.engine.unBindFramebuffer(iM), this.restoreStates()
      }
      dispose() {
        const MM = this._vertexBuffers[OM.j.PositionKind];
        MM && (MM.dispose(), delete this._vertexBuffers[OM.j.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.Rh.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class zM {
      static RegisterShaderCodeProcessing(MM, rM) {
        rM ? zM._CustomShaderCodeProcessing[MM ?? ""] = rM : delete zM._CustomShaderCodeProcessing[MM ?? ""]
      }
      static _GetShaderCodeProcessing(MM) {
        return zM._CustomShaderCodeProcessing[MM] ?? zM._CustomShaderCodeProcessing[""]
      }
      get name() {
        return this.options.name
      }
      set name(MM) {
        this.options.name = MM
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
      set effect(MM) {
        this._drawWrapper.effect = MM
      }
      constructor(MM) {
        this.alphaMode = 0, this.onEffectCreatedObservable = new jM.d(void 0, !0), this.onApplyObservable = new jM.d, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
          ...MM,
          name: MM.name || "effectWrapper",
          engine: MM.engine,
          uniforms: MM.uniforms || MM.uniformNames || [],
          uniformNames: void 0,
          samplers: MM.samplers || MM.samplerNames || [],
          samplerNames: void 0,
          attributeNames: MM.attributeNames || ["position"],
          uniformBuffers: MM.uniformBuffers || [],
          defines: MM.defines || "",
          useShaderStore: MM.useShaderStore || !1,
          vertexUrl: MM.vertexUrl || MM.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: MM.fragmentShader || "pass",
          indexParameters: MM.indexParameters,
          blockCompilation: MM.blockCompilation || !1,
          shaderLanguage: MM.shaderLanguage || 0,
          onCompiled: MM.onCompiled || void 0,
          extraInitializations: MM.extraInitializations || void 0,
          extraInitializationsAsync: MM.extraInitializationsAsync || void 0,
          useAsPostProcess: MM.useAsPostProcess ?? !1,
          allowEmptySourceTexture: MM.allowEmptySourceTexture ?? !1
        }, this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), MM.vertexUrl || MM.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add((() => {
          this.effect.setFloat2("scale", 1, 1)
        }))), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add((() => {
          this.bind()
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.Rh.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new PM.c(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const rM = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, rM, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          OM = arguments.length > 2 ? arguments[2] : void 0,
          SM = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, SM && this._importPromises.push(...SM);
        const jM = this.options.engine.isWebGPU && !zM.ForceGLSL;
        this._gatherImports(jM, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(jM && this._webGPUReady ? iM.e(672).then((() => iM(64036))) : iM.e(662).then((() => iM(63910)))), void 0 !== OM && OM(jM, this._importPromises), jM && this._webGPUReady && (this.options.shaderLanguage = 1), MM || this.updateEffect(rM)
      }
      updateEffect() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          OM = arguments.length > 3 ? arguments[3] : void 0,
          SM = arguments.length > 4 ? arguments[4] : void 0,
          jM = arguments.length > 5 ? arguments[5] : void 0,
          PM = arguments.length > 6 ? arguments[6] : void 0,
          nM = arguments.length > 7 ? arguments[7] : void 0;
        const QM = zM._GetShaderCodeProcessing(this.name);
        if (QM?.defineCustomBindings) {
          const OM = rM?.slice() ?? [];
          OM.push(...this.options.uniforms);
          const SM = iM?.slice() ?? [];
          SM.push(...this.options.samplers), MM = QM.defineCustomBindings(this.name, MM, OM, SM), rM = OM, iM = SM
        }
        this.options.defines = MM || "";
        const LM = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let mM;
        mM = this.options.extraInitializationsAsync ? async () => {
          await (LM?.()), await this.options.extraInitializationsAsync()
        }: LM, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: PM ?? this._shaderPath.vertex,
          fragment: nM ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: rM || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: iM || this.options.samplers,
          defines: null !== MM ? MM : "",
          fallbacks: null,
          onCompiled: SM ?? this.options.onCompiled,
          onError: jM ?? null,
          indexParameters: OM || this.options.indexParameters,
          processCodeAfterIncludes: QM?.processCodeAfterIncludes ? (MM, rM) => QM.processCodeAfterIncludes(this.name, MM, rM) : null,
          processFinalCode: QM?.processFinalCode ? (MM, rM) => QM.processFinalCode(this.name, MM, rM) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: mM
        }, this.options.engine) : this._drawWrapper.effect = new aM.c(this._shaderPath, this.options.attributeNames, rM || this.options.uniforms, iM || this.options.samplerNames, this.options.engine, MM, void 0, SM || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, mM), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !MM && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), zM._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.ph().Rh.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    zM.ForceGLSL = !1, zM._CustomShaderCodeProcessing = {}
  },
  44478: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      Dispose: () => lM,
      DumpData: () => yM,
      DumpDataAsync: () => dM,
      DumpFramebuffer: () => JM,
      DumpTools: () => EM,
      EncodeImageAsync: () => hM,
      RegisterDumpTools: () => GM
    });
    var OM = iM(41099),
      SM = iM(44445),
      jM = iM(41205),
      aM = iM(38074),
      PM = iM(38064),
      nM = iM(39711),
      QM = iM(41160),
      zM = iM(41105);
    let LM = null;
    async function mM() {
      return LM || (LM = async function() {
        const MM = PM.c.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        MM instanceof OffscreenCanvas && nM.e.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: rM
        } = await Promise.resolve().then((() => iM(40949)));
        if (!rM.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const OM = new rM(MM, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        PM.c.Instances.pop(), PM.c.OnEnginesDisposedObservable.add((MM => {
          OM && MM !== OM && !OM.xG && 0 === PM.c.Instances.length && lM()
        })), OM.getCaps().parallelShaderCompile = void 0;
        const jM = new SM.b(OM),
          {
            passPixelShader: aM
          } = await iM.e(680).then((() => iM(64089))),
          QM = new SM.c({
            engine: OM,
            name: aM.name,
            fragmentShader: aM.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: MM,
          dumpEngine: {
            engine: OM,
            renderer: jM,
            wrapper: QM
          }
        }
      }()), await LM
    }
    let HM = (() => {
      var MM;
      let rM, iM = [];
      return MM = class {
        static async EncodeImageAsync(MM, rM, iM, OM, SM, aM) {
          const PM = await mM(),
            nM = PM.dumpEngine;
          nM.engine.setSize(rM, iM, !0);
          const QM = nM.engine.createRawTexture(MM, rM, iM, 5, !1, !SM, 1);
          return nM.renderer.setViewport(), nM.renderer.applyEffectWrapper(nM.wrapper), nM.wrapper.effect._bindTexture("textureSampler", QM), nM.renderer.draw(), QM.dispose(), await new Promise(((MM, rM) => {
            jM.e.ToBlob(PM.canvas, (iM => {
              iM ? MM(iM) : rM(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), OM, aM)
          }))
        }
      }, (() => {
        const SM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        rM = [zM.k], (0, OM.i)(MM, null, rM, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: MM => "EncodeImageAsync" in MM,
            get: MM => MM.EncodeImageAsync
          },
          metadata: SM
        }, null, iM), SM && Object.defineProperty(MM, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: SM
        }), (0, OM.m)(MM, iM)
      })(), MM
    })();
    const hM = HM.EncodeImageAsync;
    async function JM(MM, rM, iM, OM) {
      let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        jM = arguments.length > 5 ? arguments[5] : void 0,
        aM = arguments.length > 6 ? arguments[6] : void 0;
      const PM = await iM.readPixels(0, 0, MM, rM);
      yM(MM, rM, new Uint8Array(PM.buffer), OM, SM, jM, !0, void 0, aM)
    }
    async function dM(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        SM = arguments.length > 4 ? arguments[4] : void 0,
        PM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        zM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        LM = arguments.length > 7 ? arguments[7] : void 0;
      if (iM instanceof Float32Array) {
        const MM = new Uint8Array(iM.length);
        let rM = iM.length;
        for (; rM--;) {
          const OM = iM[rM];
          MM[rM] = Math.round(255 * (0, aM.Clamp)(OM))
        }
        iM = MM
      }
      const mM = await HM.EncodeImageAsync(iM, MM, rM, OM, PM, LM);
      void 0 !== SM && jM.e.DownloadBlob(mM, SM), mM.type !== OM && nM.e.Warn(`DumpData: The requested mimeType '${OM}' is not supported. The result has mimeType '${mM.type}' instead.`);
      const hM = await mM.arrayBuffer();
      return zM ? hM : `data:${OM};base64,${(0,QM.j)(hM)}`
    }

    function yM(MM, rM, iM, OM) {
      let SM = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== SM || OM || (SM = ""), dM(MM, rM, iM, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", SM, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((MM => {
        OM && OM(MM)
      }))
    }

    function lM() {
      LM && (LM?.then((MM => {
        MM.canvas instanceof HTMLCanvasElement && MM.canvas.remove(), MM.dumpEngine && (MM.dumpEngine.engine.dispose(), MM.dumpEngine.renderer.dispose(), MM.dumpEngine.wrapper.dispose())
      })), LM = null)
    }
    const EM = {
      DumpData: yM,
      DumpDataAsync: dM,
      DumpFramebuffer: JM,
      Dispose: lM
    };
    let UM = !1;

    function GM() {
      if (UM) return;
      UM = !0;
      jM.e.DumpData = yM, jM.e.DumpDataAsync = dM, jM.e.DumpFramebuffer = JM
    }
  },
  44458: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => HM,
      g: () => hM,
      j: () => JM
    });
    var OM = iM(41560),
      SM = iM(44465),
      jM = iM(41099),
      aM = iM(44439),
      PM = iM(41121),
      nM = iM(44469),
      QM = iM(41105);
    class zM extends aM.b {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(MM, rM) {
        let iM = arguments.length > 4 ? arguments[4] : void 0;
        const OM = {
          size: "number" === typeof rM ? rM : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: iM,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...rM
        };
        super(MM, nM.f.FragmentUrl, {
          effectWrapper: "number" !== typeof rM && rM.effectWrapper ? void 0 : new nM.f(MM, iM, OM),
          ...OM
        })
      }
      static _Parse(MM, rM, iM, OM) {
        return PM.b.Parse((() => new zM(MM.name, MM.options, rM, MM.renderTargetSamplingMode, MM._engine, MM.reusable)), MM, iM, OM)
      }
    }(() => {
      var MM;
      let rM, iM = aM.b,
        OM = [];
      MM = class extends iM {
        get face() {
          return this._effectWrapper.face
        }
        set face(MM) {
          this._effectWrapper.face = MM
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(MM, rM) {
          let iM = arguments.length > 4 ? arguments[4] : void 0;
          const SM = {
            size: "number" === typeof rM ? rM : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: iM,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...rM
          };
          super(MM, nM.f.FragmentUrl, {
            effectWrapper: "number" !== typeof rM && rM.effectWrapper ? void 0 : new nM.d(MM, iM, SM),
            ...SM
          }), (0, jM.m)(this, OM)
        }
        static _Parse(rM, iM, OM, SM) {
          return PM.b.Parse((() => new MM(rM.name, rM.options, iM, rM.renderTargetSamplingMode, rM._engine, rM.reusable)), rM, OM, SM)
        }
      }, (() => {
        const SM = "function" === typeof Symbol && Symbol.metadata ? Object.create(iM[Symbol.metadata] ?? null) : void 0;
        rM = [(0, QM.L)()], (0, jM.i)(MM, null, rM, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: MM => "face" in MM,
            get: MM => MM.face
          },
          metadata: SM
        }, null, OM), SM && Object.defineProperty(MM, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: SM
        })
      })()
    })();
    var LM = iM(38074),
      mM = iM(41176);

    function HM(MM, rM, iM, OM, SM, jM, PM, nM) {
      const QM = rM.ph();
      return rM.isReady = !1, SM = SM ?? rM.samplingMode, OM = OM ?? rM.type, jM = jM ?? rM.format, PM = PM ?? rM.width, nM = nM ?? rM.height, -1 === OM && (OM = 0), new Promise((zM => {
        const LM = new aM.b("postprocess", MM, null, null, 1, null, SM, QM, !1, void 0, OM, void 0, null, !1, jM);
        LM.externalTextureSamplerBinding = !0;
        const mM = QM.createRenderTargetTexture({
          width: PM,
          height: nM
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: SM,
          type: OM,
          format: jM
        });
        LM.onEffectCreatedObservable.addOnce((MM => {
          MM.executeWhenCompiled((() => {
            LM.onApply = MM => {
              MM._bindTexture("textureSampler", rM), MM.setFloat2("scale", 1, 1)
            }, iM.postProcessManager.directRender([LM], mM, !0), QM.restoreDefaultFramebuffer(), QM._releaseTexture(rM), LM && LM.dispose(), mM._swapAndDie(rM), rM.type = OM, rM.format = 5, rM.isReady = !0, zM(rM)
          }))
        }))
      }))
    }
    async function hM(MM, rM, jM) {
      let PM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        nM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        QM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        zM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(MM) {
        if (MM.isReady()) return;
        if (MM.loadingError) throw new Error(MM.errorObject?.message || `Texture ${MM.name} errored while loading.`);
        const rM = MM.onLoadObservable;
        if (rM) return await new Promise((MM => rM.addOnce((() => MM()))));
        const iM = MM._texture?.onLoadedObservable;
        if (iM) return await new Promise((MM => iM.addOnce((() => MM()))));
        throw new Error(`Cannot determine readiness of texture ${MM.name}.`)
      }(MM);
      const mM = MM.getInternalTexture(),
        HM = MM.is3D || !!mM?.is3D,
        {
          width: hM,
          height: JM
        } = MM.getSize(),
        dM = rM ?? hM,
        yM = jM ?? JM;
      if (QM || HM || function(MM) {
          switch (MM) {
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
        }(MM.textureFormat) || dM !== hM || yM !== JM) {
        if (MM.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${QM?"RTT":"compression"} is not supported.`);
        return await async function(MM, rM, jM, PM, nM) {
          let QM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const zM = MM.Hk(),
            LM = zM.ph(),
            mM = MM.getInternalTexture(),
            HM = MM.is3D || !!mM?.is3D;
          let hM;
          if (LM.isWebGPU ? HM ? await iM.e(676).then((() => iM(64066))) : MM.isCube ? await iM.e(677).then((() => iM(64072))) : await iM.e(678).then((() => iM(64075))) : HM ? await iM.e(673).then((() => iM(64051))) : MM.isCube ? await iM.e(674).then((() => iM(64055))) : await iM.e(675).then((() => iM(64060))), HM) hM = new aM.b("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: OM.h.NEAREST_NEAREST_MIPNEAREST,
            engine: LM,
            shaderLanguage: LM.isWebGPU ? 1 : 0
          });
          else if (MM.isCube) {
            const MM = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            hM = new aM.b("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: OM.h.NEAREST_NEAREST_MIPNEAREST,
              engine: LM,
              defines: MM[PM],
              shaderLanguage: LM.isWebGPU ? 1 : 0
            })
          } else hM = new aM.b("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: OM.h.NEAREST_NEAREST_MIPNEAREST,
            engine: LM,
            shaderLanguage: LM.isWebGPU ? 1 : 0
          });
          await new Promise((MM => {
            hM.onEffectCreatedObservable.addOnce((rM => {
              rM.executeWhenCompiled((() => {
                MM(0)
              }))
            }))
          }));
          const JM = new SM.c("temp", {
            width: rM,
            height: jM
          }, zM, !1);
          hM.onApply = function(rM) {
            rM.setTexture("textureSampler", MM), rM.setFloat("lod", nM), rM.setInt("gamma", MM.gammaSpace ? 1 : 0), HM && rM.setFloat("slice", QM)
          };
          try {
            if (JM.renderTarget && mM) {
              const iM = mM.samplingMode;
              0 !== nM ? MM.updateSamplingMode(OM.h.NEAREST_NEAREST_MIPNEAREST) : MM.updateSamplingMode(OM.h.NEAREST_NEAREST), zM.postProcessManager.directRender([hM], JM.renderTarget, !0), MM.updateSamplingMode(iM);
              const SM = await LM.readPixels(0, 0, rM, jM),
                aM = new Uint8Array(SM.buffer, SM.byteOffset, SM.byteLength);
              return LM.unBindFramebuffer(JM.renderTarget), aM
            }
            throw Error("Render to texture failed.")
          } finally {
            JM.dispose(), hM.dispose()
          }
        }(MM, dM, yM, PM, nM, zM)
      }
      let lM = await MM.readPixels(PM, nM);
      if (!lM) throw new Error(`Failed to read pixels from texture ${MM.name}.`);
      if (lM instanceof Float32Array) {
        const MM = new Uint8Array(lM.length);
        let rM = lM.length;
        for (; rM--;) {
          const iM = lM[rM];
          MM[rM] = Math.round(255 * (0, LM.Clamp)(iM))
        }
        lM = MM
      }
      const EM = dM * yM,
        UM = 4 * EM;
      if (lM.length !== UM) {
        const MM = 0 === EM ? 0 : lM.length / EM;
        if (1 === MM || 2 === MM || 3 === MM) {
          const rM = new Uint8Array(UM);
          for (let iM = 0, OM = 0, SM = 0; iM < EM; iM++, SM += 4) {
            const iM = lM[OM++];
            if (1 === MM) {
              rM[SM] = iM, rM[SM + 1] = iM, rM[SM + 2] = iM, rM[SM + 3] = 255;
              continue
            }
            const jM = lM[OM++];
            2 !== MM ? (rM[SM] = iM, rM[SM + 1] = jM, rM[SM + 2] = lM[OM++], rM[SM + 3] = 255) : (rM[SM] = iM, rM[SM + 1] = jM, rM[SM + 2] = 0, rM[SM + 3] = 255)
          }
          return rM
        }
      }
      return lM
    }
    const JM = {
      CreateResizedCopy: function(MM, rM, iM) {
        let jM = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const aM = MM.Hk(),
          PM = aM.ph(),
          nM = new SM.c("resized" + MM.name, {
            width: rM,
            height: iM
          }, aM, !MM.noMipmap, !0, MM._texture.type, !1, MM.samplingMode, !1);
        nM.wrapU = MM.wrapU, nM.wrapV = MM.wrapV, nM.uOffset = MM.uOffset, nM.vOffset = MM.vOffset, nM.uScale = MM.uScale, nM.vScale = MM.vScale, nM.uAng = MM.uAng, nM.vAng = MM.vAng, nM.wAng = MM.wAng, nM.coordinatesIndex = MM.coordinatesIndex, nM.level = MM.level, nM.anisotropicFilteringLevel = MM.anisotropicFilteringLevel, nM._texture.isReady = !1, MM.wrapU = OM.h.CLAMP_ADDRESSMODE, MM.wrapV = OM.h.CLAMP_ADDRESSMODE;
        const QM = new zM("pass", 1, null, jM ? OM.h.BILINEAR_SAMPLINGMODE : OM.h.NEAREST_SAMPLINGMODE, PM, !1, 0);
        return QM.externalTextureSamplerBinding = !0, QM.onEffectCreatedObservable.addOnce((rM => {
          rM.executeWhenCompiled((() => {
            QM.onApply = function(rM) {
              rM.setTexture("textureSampler", MM)
            };
            const rM = nM.renderTarget;
            rM && (aM.postProcessManager.directRender([QM], rM), PM.unBindFramebuffer(rM), nM.disposeFramebufferObjects(), QM.dispose(), nM.getInternalTexture().isReady = !0)
          }))
        })), nM
      },
      ApplyPostProcess: HM,
      ToHalfFloat: mM.g,
      FromHalfFloat: mM.c,
      GetTextureDataAsync: hM
    }
  },
  44439: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => hM
    });
    var OM = iM(41099),
      SM = iM(41213),
      jM = iM(38068),
      aM = iM(38040),
      PM = iM(40957),
      nM = iM(41105),
      QM = iM(41121),
      zM = iM(38085),
      LM = iM(41005),
      mM = iM(41034),
      HM = iM(44445);
    let hM = (() => {
        var MM;
        let rM, PM, LM, hM, JM, yM, lM, EM, UM, GM, CM, eM, bM, wM, tM, gM, uM = [],
          RM = [],
          pM = [],
          WM = [],
          sM = [],
          DM = [],
          kM = [],
          ZM = [],
          oM = [],
          fM = [],
          YM = [],
          NM = [],
          AM = [],
          xM = [],
          vM = [],
          FM = [],
          BM = [],
          XM = [],
          IM = [],
          KM = [],
          qM = [],
          TM = [],
          VM = [],
          cM = [],
          Mr = [],
          rr = [],
          ir = [],
          Or = [],
          Sr = [];
        return MM = class {
          static get ForceGLSL() {
            return HM.c.ForceGLSL
          }
          static set ForceGLSL(MM) {
            HM.c.ForceGLSL = MM
          }
          static RegisterShaderCodeProcessing(MM, rM) {
            HM.c.RegisterShaderCodeProcessing(MM, rM)
          }
          get name() {
            return this._effectWrapper.name
          }
          set name(MM) {
            this._effectWrapper.name = MM
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode
          }
          set alphaMode(MM) {
            this._effectWrapper.alphaMode = MM
          }
          get samples() {
            return this._samples
          }
          set samples(MM) {
            this._samples = Math.min(MM, this._engine.getCaps().maxMSAASamples), this._textures.forEach((MM => {
              MM.setSamples(this._samples)
            }))
          }
          get shaderLanguage() {
            return this._shaderLanguage
          }
          getEffectName() {
            return this._fragmentUrl
          }
          set onActivate(MM) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), MM && (this._onActivateObserver = this.onActivateObservable.add(MM))
          }
          set onSizeChanged(MM) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(MM)
          }
          set onApply(MM) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(MM)
          }
          set onBeforeRender(MM) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(MM)
          }
          set onAfterRender(MM) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(MM)
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd]
          }
          set inputTexture(MM) {
            this._forcedOutputTexture = MM
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty())
          }
          getCamera() {
            return this.lV
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.iMM(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(rM, iM, PM, nM, QM, zM) {
            let LM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              mM = arguments.length > 7 ? arguments[7] : void 0,
              hM = arguments.length > 8 ? arguments[8] : void 0,
              JM = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              yM = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              lM = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              EM = arguments.length > 12 ? arguments[12] : void 0,
              UM = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              GM = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              CM = arguments.length > 15 ? arguments[15] : void 0,
              eM = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, OM.m)(this, uM), null), this.uniqueId = (0, OM.m)(this, RM, void 0), this.width = ((0, OM.m)(this, pM), (0, OM.m)(this, WM, -1)), this.height = ((0, OM.m)(this, sM), (0, OM.m)(this, DM, -1)), this.nodeMaterialSource = ((0, OM.m)(this, kM), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, OM.m)(this, ZM, void 0), this.clearColor = ((0, OM.m)(this, oM), (0, OM.m)(this, fM, void 0)), this.autoClear = ((0, OM.m)(this, YM), (0, OM.m)(this, NM, !0)), this.forceAutoClearInAlphaMode = ((0, OM.m)(this, AM), (0, OM.m)(this, xM, !1)), this.alphaConstants = ((0, OM.m)(this, vM), (0, OM.m)(this, FM, void 0)), this.animations = ((0, OM.m)(this, BM), []), this.enablePixelPerfectMode = (0, OM.m)(this, XM, !1), this.forceFullscreenViewport = ((0, OM.m)(this, IM), (0, OM.m)(this, KM, !0)), this.inspectableCustomProperties = (0, OM.m)(this, qM), this.scaleMode = (0, OM.m)(this, TM, 1), this.alwaysForcePOT = ((0, OM.m)(this, VM), (0, OM.m)(this, cM, !1)), this._samples = ((0, OM.m)(this, Mr), (0, OM.m)(this, rr, 1)), this.adaptScaleToCurrentViewport = ((0, OM.m)(this, ir), (0, OM.m)(this, Or, !1)), this.doNotSerialize = ((0, OM.m)(this, Sr), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new SM.e(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new aM.o(1, 1), this._texelSize = aM.o.Zero(), this.onActivateObservable = new jM.d, this.onSizeChangedObservable = new jM.d, this.onApplyObservable = new jM.d, this.onBeforeRenderObservable = new jM.d, this.onAfterRenderObservable = new jM.d, this.Rk = new jM.d, dM();
            let bM, wM = 1,
              tM = null;
            if (PM && !Array.isArray(PM)) {
              const MM = PM;
              PM = MM.uniforms ?? null, nM = MM.samplers ?? null, wM = MM.size ?? 1, zM = MM.camera ?? null, LM = MM.samplingMode ?? 1, mM = MM.engine, hM = MM.reusable, JM = Array.isArray(MM.defines) ? MM.defines.join("\n") : MM.defines ?? null, yM = MM.textureType ?? 0, lM = MM.vertexUrl ?? "postprocess", EM = MM.indexParameters, UM = MM.blockCompilation ?? !1, GM = MM.textureFormat ?? 5, CM = MM.shaderLanguage ?? 0, tM = MM.uniformBuffers ?? null, eM = MM.extraInitializations, bM = MM.effectWrapper
            } else QM && (wM = "number" === typeof QM ? QM : {
              width: QM.width,
              height: QM.height
            });
            if (this._useExistingThinPostProcess = !!bM, this._effectWrapper = bM ?? new HM.c({
                name: rM,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: iM,
                engine: mM || zM?.Hk().ph(),
                uniforms: PM,
                samplers: nM,
                uniformBuffers: tM,
                defines: JM,
                vertexUrl: lM,
                indexParameters: EM,
                blockCompilation: !0,
                shaderLanguage: CM,
                extraInitializations: void 0
              }), this.name = rM, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != zM ? (this.lV = zM, this._scene = zM.Hk(), zM.attachPostProcess(this), this._engine = this._scene.ph(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : mM && (this._engine = mM, this._engine.postProcesses.push(this)), this._options = wM, this.renderTargetSamplingMode = LM || 1, this._reusable = hM || !1, this._textureType = yM, this._textureFormat = GM, this._shaderLanguage = CM || 0, this._samplers = nM || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = iM, this._vertexUrl = lM, this._parameters = PM || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = tM || [], this._indexParameters = EM, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const rM = [];
              this._gatherImports(this._engine.isWebGPU && !MM.ForceGLSL, rM), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(UM, JM, eM, rM)
            }
          }
          _gatherImports() {
            let MM = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? MM.push(Promise.all([iM.e(672).then((() => iM(64036)))])) : MM.push(Promise.all([iM.e(662).then((() => iM(63910)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          ph() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(MM) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = MM, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new SM.e(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              OM = arguments.length > 3 ? arguments[3] : void 0,
              SM = arguments.length > 4 ? arguments[4] : void 0,
              jM = arguments.length > 5 ? arguments[5] : void 0,
              aM = arguments.length > 6 ? arguments[6] : void 0,
              PM = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(MM, rM, iM, OM, SM, jM, aM, PM), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(MM, rM) {
            let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let SM = 0; SM < this._textureCache.length; SM++)
              if (this._textureCache[SM].texture.width === MM.width && this._textureCache[SM].texture.height === MM.height && this._textureCache[SM].postProcessChannel === iM && this._textureCache[SM].texture._generateDepthBuffer === rM.generateDepthBuffer && this._textureCache[SM].texture.samples === rM.samples) return this._textureCache[SM].texture;
            const OM = this._engine.createRenderTargetTexture(MM, rM);
            return this._textureCache.push({
              texture: OM,
              postProcessChannel: iM,
              lastUsedRenderId: -1
            }), OM
          }
          _flushTextureCache() {
            const MM = this._renderId;
            for (let rM = this._textureCache.length - 1; rM >= 0; rM--)
              if (MM - this._textureCache[rM].lastUsedRenderId > 100) {
                let MM = !1;
                for (let iM = 0; iM < this._textures.length; iM++)
                  if (this._textures.data[iM] === this._textureCache[rM].texture) {
                    MM = !0;
                    break
                  } MM || (this._textureCache[rM].texture.dispose(), this._textureCache.splice(rM, 1))
              }
          }
          resize(MM, rM) {
            let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              SM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = MM, this.height = rM;
            let jM = null;
            if (iM)
              for (let nM = 0; nM < iM._postProcesses.length; nM++)
                if (null !== iM._postProcesses[nM]) {
                  jM = iM._postProcesses[nM];
                  break
                } const aM = {
                width: this.width,
                height: this.height
              },
              PM = {
                generateMipMaps: OM,
                generateDepthBuffer: SM || jM === this,
                generateStencilBuffer: (SM || jM === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(aM, PM, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(aM, PM, 1)), this._texelSize.iMM(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let MM;
            if (this._shareOutputWithPostProcess) MM = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) MM = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let rM;
              MM = this.inputTexture;
              for (let iM = 0; iM < this._textureCache.length; iM++)
                if (this._textureCache[iM].texture === MM) {
                  rM = this._textureCache[iM];
                  break
                } rM && (rM.lastUsedRenderId = this._renderId)
            }
            return MM
          }
          activate(MM) {
            let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              iM = arguments.length > 2 ? arguments[2] : void 0;
            const OM = null === MM || void 0 !== MM.cameraRigMode ? MM || this.lV : null,
              SM = OM?.Hk() ?? MM,
              jM = SM.ph(),
              aM = jM.getCaps().maxTextureSize,
              PM = (rM ? rM.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              nM = (rM ? rM.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let QM = this._options.width || PM,
              zM = this._options.height || nM;
            const LM = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let HM = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const MM = jM.currentViewport;
                MM && (QM *= MM.width, zM *= MM.height)
              }(LM || this.alwaysForcePOT) && (this._options.width || (QM = jM.needPOTTextures ? (0, mM.e)(QM, aM, this.scaleMode) : QM), this._options.height || (zM = jM.needPOTTextures ? (0, mM.e)(zM, aM, this.scaleMode) : zM)), this.width === QM && this.height === zM && (HM = this._getTarget()) || this.resize(QM, zM, OM, LM, iM), this._textures.forEach((MM => {
                MM.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(MM, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return HM || (HM = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.iMM(PM / QM, nM / zM), this._engine.bindFramebuffer(HM, 0, PM, nM, this.forceFullscreenViewport)) : (this._scaleRatio.iMM(1, 1), this._engine.bindFramebuffer(HM, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(OM), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : SM.clearColor, SM._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), HM
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
            let MM;
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.ph().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), MM = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", MM?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
          }
          _disposeTextureCache() {
            for (let MM = this._textureCache.length - 1; MM >= 0; MM--) this._textureCache[MM].texture.dispose();
            this._textureCache.length = 0
          }
          setPrePassRenderer(MM) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = MM.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
          }
          dispose(MM) {
            let rM;
            if (MM = MM || this.lV, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (rM = this._parentContainer.postProcesses.indexOf(this), rM > -1 && this._parentContainer.postProcesses.splice(rM, 1), this._parentContainer = null), rM = this._engine.postProcesses.indexOf(this), -1 !== rM && this._engine.postProcesses.splice(rM, 1), this.Rk.notifyObservers(), MM) {
              if (MM.detachPostProcess(this), rM = MM._postProcesses.indexOf(this), 0 === rM && MM._postProcesses.length > 0) {
                const MM = this.lV._getFirstPostProcess();
                MM && MM.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const MM = QM.b.Serialize(this),
              rM = this.getCamera() || this._scene && this._scene.activeCamera;
            return MM.customType = "BABYLON." + this.getClassName(), MM.cameraId = rM ? rM.id : null, MM.reusable = this._reusable, MM.textureType = this._textureType, MM.fragmentUrl = this._fragmentUrl, MM.parameters = this._parameters, MM.samplers = this._samplers, MM.uniformBuffers = this._uniformBuffers, MM.options = this._options, MM.defines = this._postProcessDefines, MM.textureFormat = this._textureFormat, MM.vertexUrl = this._vertexUrl, MM.indexParameters = this._indexParameters, MM
          }
          clone() {
            const rM = this.serialize();
            rM._engine = this._engine, rM.cameraId = null;
            const iM = MM.Parse(rM, this._scene, "");
            return iM ? (iM.onActivateObservable = this.onActivateObservable.clone(), iM.onSizeChangedObservable = this.onSizeChangedObservable.clone(), iM.onApplyObservable = this.onApplyObservable.clone(), iM.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), iM.onAfterRenderObservable = this.onAfterRenderObservable.clone(), iM._prePassEffectConfiguration = this._prePassEffectConfiguration, iM) : null
          }
          static Parse(MM, rM, iM) {
            const OM = (0, zM.b)(MM.customType);
            if (!OM || !OM._Parse) return null;
            const SM = rM ? rM.getCameraById(MM.cameraId) : null;
            return OM._Parse(MM, SM, rM, iM)
          }
          static _Parse(rM, iM, OM, SM) {
            return QM.b.Parse((() => new MM(rM.name, rM.fragmentUrl, rM.parameters, rM.samplers, rM.options, iM, rM.renderTargetSamplingMode, rM._engine, rM.reusable, rM.defines, rM.textureType, rM.vertexUrl, rM.indexParameters, !1, rM.textureFormat)), rM, OM, SM)
          }
        }, (() => {
          const iM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          rM = [(0, nM.L)()], PM = [(0, nM.L)()], LM = [(0, nM.L)()], hM = [(0, nM.L)()], JM = [(0, nM.L)()], yM = [(0, nM.s)()], lM = [(0, nM.L)()], EM = [(0, nM.L)()], UM = [(0, nM.L)()], GM = [(0, nM.L)()], CM = [(0, nM.L)()], eM = [(0, nM.L)()], bM = [(0, nM.L)()], wM = [(0, nM.L)()], tM = [(0, nM.L)("samples")], gM = [(0, nM.L)()], (0, OM.i)(MM, null, PM, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: MM => "name" in MM,
              get: MM => MM.name
            },
            metadata: iM
          }, null, uM), (0, OM.i)(MM, null, UM, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: MM => "alphaMode" in MM,
              get: MM => MM.alphaMode
            },
            metadata: iM
          }, null, uM), (0, OM.i)(null, null, rM, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: MM => "uniqueId" in MM,
              get: MM => MM.uniqueId,
              set: (MM, rM) => {
                MM.uniqueId = rM
              }
            },
            metadata: iM
          }, RM, pM), (0, OM.i)(null, null, LM, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: MM => "width" in MM,
              get: MM => MM.width,
              set: (MM, rM) => {
                MM.width = rM
              }
            },
            metadata: iM
          }, WM, sM), (0, OM.i)(null, null, hM, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: MM => "height" in MM,
              get: MM => MM.height,
              set: (MM, rM) => {
                MM.height = rM
              }
            },
            metadata: iM
          }, DM, kM), (0, OM.i)(null, null, JM, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: MM => "renderTargetSamplingMode" in MM,
              get: MM => MM.renderTargetSamplingMode,
              set: (MM, rM) => {
                MM.renderTargetSamplingMode = rM
              }
            },
            metadata: iM
          }, ZM, oM), (0, OM.i)(null, null, yM, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: MM => "clearColor" in MM,
              get: MM => MM.clearColor,
              set: (MM, rM) => {
                MM.clearColor = rM
              }
            },
            metadata: iM
          }, fM, YM), (0, OM.i)(null, null, lM, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: MM => "autoClear" in MM,
              get: MM => MM.autoClear,
              set: (MM, rM) => {
                MM.autoClear = rM
              }
            },
            metadata: iM
          }, NM, AM), (0, OM.i)(null, null, EM, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: MM => "forceAutoClearInAlphaMode" in MM,
              get: MM => MM.forceAutoClearInAlphaMode,
              set: (MM, rM) => {
                MM.forceAutoClearInAlphaMode = rM
              }
            },
            metadata: iM
          }, xM, vM), (0, OM.i)(null, null, GM, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: MM => "alphaConstants" in MM,
              get: MM => MM.alphaConstants,
              set: (MM, rM) => {
                MM.alphaConstants = rM
              }
            },
            metadata: iM
          }, FM, BM), (0, OM.i)(null, null, CM, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: MM => "enablePixelPerfectMode" in MM,
              get: MM => MM.enablePixelPerfectMode,
              set: (MM, rM) => {
                MM.enablePixelPerfectMode = rM
              }
            },
            metadata: iM
          }, XM, IM), (0, OM.i)(null, null, eM, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: MM => "forceFullscreenViewport" in MM,
              get: MM => MM.forceFullscreenViewport,
              set: (MM, rM) => {
                MM.forceFullscreenViewport = rM
              }
            },
            metadata: iM
          }, KM, qM), (0, OM.i)(null, null, bM, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: MM => "scaleMode" in MM,
              get: MM => MM.scaleMode,
              set: (MM, rM) => {
                MM.scaleMode = rM
              }
            },
            metadata: iM
          }, TM, VM), (0, OM.i)(null, null, wM, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: MM => "alwaysForcePOT" in MM,
              get: MM => MM.alwaysForcePOT,
              set: (MM, rM) => {
                MM.alwaysForcePOT = rM
              }
            },
            metadata: iM
          }, cM, Mr), (0, OM.i)(null, null, tM, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: MM => "_samples" in MM,
              get: MM => MM._samples,
              set: (MM, rM) => {
                MM._samples = rM
              }
            },
            metadata: iM
          }, rr, ir), (0, OM.i)(null, null, gM, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: MM => "adaptScaleToCurrentViewport" in MM,
              get: MM => MM.adaptScaleToCurrentViewport,
              set: (MM, rM) => {
                MM.adaptScaleToCurrentViewport = rM
              }
            },
            metadata: iM
          }, Or, Sr), iM && Object.defineProperty(MM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: iM
          })
        })(), MM
      })(),
      JM = !1;

    function dM() {
      JM || (JM = !0, LM.d.prototype.setTextureFromPostProcess = function(MM, rM, iM) {
        let OM = null;
        rM && (rM._forcedOutputTexture ? OM = rM._forcedOutputTexture : rM._textures.data[rM._currentRenderTextureInd] && (OM = rM._textures.data[rM._currentRenderTextureInd])), this._bindTexture(MM, OM?.texture ?? null, iM)
      }, LM.d.prototype.setTextureFromPostProcessOutput = function(MM, rM, iM) {
        this._bindTexture(MM, rM?._outputTexture?.texture ?? null, iM)
      }, PM.c.prototype.setTextureFromPostProcess = function(MM, rM) {
        this._engine.setTextureFromPostProcess(this._samplers[MM], rM, MM)
      }, PM.c.prototype.setTextureFromPostProcessOutput = function(MM, rM) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[MM], rM, MM)
      }, (0, zM.e)("BABYLON.PostProcess", hM))
    }
  },
  44469: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM,
      f: () => jM
    });
    var OM = iM(44445),
      SM = iM(38064);
    class jM extends OM.c {
      _gatherImports(MM, rM) {
        MM ? (this._webGPUReady = !0, rM.push(Promise.all([iM.e(679).then((() => iM(64081)))]))) : rM.push(Promise.all([iM.e(680).then((() => iM(64089)))])), super._gatherImports(MM, rM)
      }
      constructor(MM) {
        let rM = arguments.length > 2 ? arguments[2] : void 0;
        const iM = {
          name: MM,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || SM.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: jM.FragmentUrl,
          ...rM
        };
        iM.engine || (iM.engine = SM.c.LastCreatedEngine), super(iM)
      }
    }
    jM.FragmentUrl = "pass";
    class aM extends OM.c {
      _gatherImports(MM, rM) {
        MM ? (this._webGPUReady = !0, rM.push(Promise.all([iM.e(681).then((() => iM(64097)))]))) : rM.push(Promise.all([iM.e(682).then((() => iM(64101)))])), super._gatherImports(MM, rM)
      }
      constructor(MM) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: MM,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || SM.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: aM.FragmentUrl,
          defines: "#define POSITIVEX"
        }), this._face = 0
      }
      get face() {
        return this._face
      }
      set face(MM) {
        if (!(MM < 0 || MM > 5)) switch (this._face = MM, this._face) {
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
    aM.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);