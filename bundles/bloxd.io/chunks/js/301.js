export const id = 301;
export const ids = [301];
export const modules = {
  40924: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => vD
    });
    var ID = cD(36473),
      pD = cD(36446),
      iD = cD(39595),
      fD = cD(39294),
      bD = cD(39084),
      QD = cD(38048),
      wD = cD(39281),
      SD = cD(39303),
      BD = cD(36452),
      yD = cD(39039),
      MD = cD(39257),
      tD = cD(39344);
    class ZD {
      get renderList() {
        return this._renderList
      }
      set renderList(DD) {
        this._renderList !== DD && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), DD && (this._unObserveRenderList = (0, BD.f)(DD, this._renderListHasChanged)), this._renderList = DD)
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
              const CD = this._renderPassIds[DD];
              this._engine._renderPassNames[CD] = `${this._name}#${DD}`
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
      setMaterialForRendering(DD, CD) {
        let cD;
        cD = Array.isArray(DD) ? DD : [DD];
        for (let ID = 0; ID < cD.length; ++ID)
          for (let DD = 0; DD < this.options.numPasses; ++DD) {
            let pD = cD[ID];
            cD[ID].Fq && (pD = cD[ID].OID), pD.setMaterialForRenderPass(this._renderPassIds[DD], void 0 !== CD ? Array.isArray(CD) ? CD[DD] : CD : void 0)
          }
      }
      _freezeActiveMeshes(DD) {
        this._freezeActiveMeshesCancel = (0, yD.e)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, DD)
            for (let DD = 0; DD < this._activeMeshes.length; DD++) this._activeMeshes.data[DD]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((DD, CD) => {
          this._freezeActiveMeshesCancel = null, CD ? (QD.e.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), DD && QD.e.Error(DD)) : (QD.e.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), DD && (QD.e.Error(DD), DD.stack && QD.e.Error(DD.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let DD = 0; DD < this._activeMeshes.length; DD++) this._activeMeshes.data[DD]._unFreeze();
        this._isFrozen = !1
      }
      constructor(DD, CD, cD) {
        this._unObserveRenderList = null, this._renderListHasChanged = (DD, CD) => {
          const cD = this._renderList ? this._renderList.length : 0;
          if (0 === CD && cD > 0 || 0 === cD)
            for (const ID of this._scene.meshes) ID._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new ID.c, this.onAfterRenderObservable = new ID.c, this.onBeforeRenderingManagerRenderObservable = new ID.c, this.onAfterRenderingManagerRenderObservable = new ID.c, this.onInitRenderingObservable = new ID.c, this.onFinishRenderingObservable = new ID.c, this.onFastPathRenderObservable = new ID.c, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new MD.f(256), this._activeBoundingBoxes = new MD.f(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = DD, this._scene = CD, this._engine = this._scene.DZ(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...cD
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new SD.b(CD), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const DD of this._scene.lights) DD.getTypeID() === tD.d.LIGHTTYPEID_CLUSTERED_CONTAINER && DD.isSupported && DD._updateBatches(this.activeCamera).render()
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
      _createSceneUBO(DD, CD) {
        const cD = this._scene.DZ(),
          ID = new wD.b(cD, void 0, CD, DD, void 0, !1);
        return ID.addUniform("viewProjection", 16), CD && ID.addUniform("viewProjectionR", 16), ID.addUniform("view", 16), ID.addUniform("projection", 16), ID.addUniform("vEyePosition", 4), ID.addUniform("inverseProjection", 16), ID
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const DD = this._engine._currentRenderTarget,
          CD = !(!DD || !DD.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const DD = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${DD} for ${this.name}`, CD)), this._sceneUBOIsMultiview.push(CD)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== CD && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, CD), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = CD);
        const cD = this._sceneUBOs[this._currentSceneUBOIndex++];
        return cD.unbindEffect(), cD
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
      isReadyForRendering(DD, CD) {
        this.prepareRenderList(), this.initRender(DD, CD);
        const cD = this._checkReadiness();
        return this.finishRender(), cD
      }
      prepareRenderList() {
        const DD = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let CD = 0; CD < this._waitingRenderList.length; CD++) {
              const cD = this._waitingRenderList[CD],
                ID = DD.getMeshById(cD);
              ID && this.renderList.push(ID)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const DD = this._scene.meshes;
          for (let CD = 0; CD < DD.length; CD++) {
            const cD = DD[CD];
            this.renderListPredicate(cD) && this.renderList.push(cD)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(DD, CD) {
        const cD = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), cD && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(cD.getViewMatrix(), cD.getProjectionMatrix(!0)), this._scene._activeCamera = cD, this._engine.setViewport(cD.rigParent ? cD.rigParent.viewport : cD.viewport, DD, CD)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const DD = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (DD.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), DD._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== DD.activeCamera && DD.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), DD.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cD = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[DD], this.onBeforeRenderObservable.notifyObservers(DD);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(DD);
        else {
          const CD = this._prepareRenderingManager(DD),
            cD = this._scene.getOutlineRenderer?.(),
            ID = cD?.enabled;
          cD && (cD.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(DD), this._renderingManager.render(this.customRenderFunction, CD, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(DD), cD && (cD.enabled = ID)
        }
        CD || this.onAfterRenderObservable.notifyObservers(DD), this._engine.currentRenderPassId = cD
      }
      _checkReadiness() {
        const DD = this._scene,
          CD = this._engine.currentRenderPassId;
        let cD = !0;
        DD.getViewMatrix() || DD.updateTransformMatrix();
        const ID = this.options.numPasses;
        for (let pD = 0; pD < ID && cD; pD++) {
          const CD = this.renderList ? this.renderList : DD.frameGraph ? DD.meshes : DD.getActiveMeshes().data,
            iD = this.renderList || DD.frameGraph ? CD.length : DD.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[pD], this.onBeforeRenderObservable.notifyObservers(pD);
          let fD = null,
            bD = iD;
          this.getCustomRenderList && (fD = this.getCustomRenderList(pD, CD, iD), fD && (bD = fD.length)), fD || (fD = CD), this.options.doNotChangeAspectRatio || DD.updateTransformMatrix(!0);
          for (let DD = 0; DD < bD && cD; ++DD) {
            const CD = fD[DD];
            if (!CD.isEnabled() || CD.isBlocked || !CD.isVisible || !CD.IH) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(CD, this.refreshRate, !0)) {
                cD = !1;
                continue
              }
            } else if (!CD.isReady(!0)) {
              cD = !1;
              continue
            }
            let ID = CD._edgesRenderer,
              pD = CD.hasThinInstances;
            if (CD.Fq) {
              const DD = CD.OID;
              DD.edgesShareWithInstances && DD._edgesRenderer?.isEnabled && (ID = DD._edgesRenderer, pD = !0)
            } else CD.nID && CD.edgesShareWithInstances && (pD = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && ID?.isEnabled && (ID.isReady(pD) || (cD = !1))
          }
          if (this.renderParticles && DD.particlesEnabled) {
            const CD = this.particleSystemList || DD.iH;
            for (const DD of CD) DD.isReady() || (cD = !1)
          }
          if (this.renderSprites && DD.spritesEnabled) {
            const CD = this.spriteManagerList || DD.spriteManagers;
            if (CD)
              for (const ID of CD) DD.activeCamera && 0 === (ID.layerMask & DD.activeCamera.layerMask) || ID.isReady && !ID.isReady() && (cD = !1)
          }
          this.onAfterRenderObservable.notifyObservers(pD), ID > 1 && (DD.incrementRenderId(), DD.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = CD, cD
      }
      _prepareRenderingManager() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cD = this._scene;
        let ID, pD, iD = null;
        const fD = this.renderList ? this.renderList : cD.frameGraph ? cD.meshes : cD.getActiveMeshes().data,
          bD = this.renderList || cD.frameGraph ? fD.length : cD.getActiveMeshes().length;
        if (this.getCustomRenderList && (iD = this.getCustomRenderList(DD, fD, bD)), iD) ID = iD.length, pD = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !CD && !this._engine.isWebGPU) return fD;
          this._defaultRenderListPrepared = !0, iD = fD, ID = bD, pD = !this.renderList || this.forceLayerMaskCheck
        }
        const QD = cD.activeCamera,
          wD = this.cameraForLOD ?? QD,
          SD = cD.getBoundingBoxRenderer?.();
        if (cD._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && SD) {
            SD.reset();
            for (let DD = 0; DD < this._activeBoundingBoxes.length; DD++) {
              const CD = this._activeBoundingBoxes.data[DD];
              SD.renderList.push(CD)
            }
          }
          return iD
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), SD && SD.reset(), this.renderMeshes) {
          const DD = cD.getRenderId(),
            CD = cD.getFrameId();
          for (let fD = 0; fD < ID; fD++) {
            const ID = iD[fD];
            if (ID && !ID.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(ID, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!ID.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let iD, fD;
              if (wD) {
                const DD = ID._internalAbstractMeshDataInfo._currentLOD.get(wD);
                DD && DD[1] === CD ? iD = DD[0] : (iD = cD.customLODSelector ? cD.customLODSelector(ID, wD) : ID.getLOD(wD), DD ? (DD[0] = iD, DD[1] = CD) : ID._internalAbstractMeshDataInfo._currentLOD.set(wD, [iD, CD]))
              } else iD = ID;
              if (!iD) continue;
              if (iD !== ID && 0 !== iD.billboardMode && iD.computeWorldMatrix(), iD._preActivateForIntermediateRendering(DD), fD = !(!pD || !QD) && 0 === (ID.layerMask & QD.layerMask), ID.isEnabled() && ID.isVisible && ID.IH && !fD) {
                if (this._activeMeshes.push(ID), iD._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, iD !== ID && iD._activate(DD, !0), this.enableBoundingBoxRendering && SD && SD._preActiveMesh(ID), ID._activate(DD, !0) && ID.IH.length) {
                  ID.Fq ? ID._internalAbstractMeshDataInfo._actAsRegularMesh && (iD = ID) : iD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, iD._internalAbstractMeshDataInfo._isActiveIntermediate = !0, cD._prepareSkeleton(iD);
                  for (let DD = 0; DD < iD.IH.length; DD++) {
                    const CD = iD.IH[DD];
                    this.enableBoundingBoxRendering && SD && SD._evaluateSubMesh(ID, CD), this._renderingManager.dispatch(CD, iD)
                  }
                }
                ID._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && SD && CD)
          for (let BD = 0; BD < SD.renderList.length; BD++) {
            const DD = SD.renderList.data[BD];
            this._activeBoundingBoxes.push(DD)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const DD = this.particleSystemList || cD.iH;
          for (let CD = 0; CD < DD.length; CD++) {
            const cD = DD[CD],
              ID = cD.emitter;
            cD.isStarted() && ID && (!ID.position || ID.isEnabled()) && this._renderingManager.dispatchParticles(cD)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return iD
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(DD, CD, cD, ID)
      }
      setRenderingAutoClearDepthStencil(DD, CD) {
        let cD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          ID = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(DD, CD, cD, ID), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const DD = new ZD(this.name, this._scene, this.options);
        return this.renderList && (DD.renderList = this.renderList.slice(0)), DD
      }
      dispose() {
        const DD = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          CD = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let cD = 0; cD < CD; cD++) {
          const CD = DD[cD];
          CD && void 0 !== CD.getMaterialForRenderPass(this.renderPassId) && CD.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const cD of this._sceneUBOs) cD.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === ZD.REFRESHRATE_RENDER_ONCE && (this.refreshRate = ZD.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    ZD.REFRESHRATE_RENDER_ONCE = 0, ZD.REFRESHRATE_RENDER_ONEVERYFRAME = 1, ZD.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var oD = cD(39027);
    class vD extends iD.c {
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
      setMaterialForRendering(DD, CD) {
        this._objectRenderer.setMaterialForRendering(DD, CD)
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
        const CD = this.hq();
        CD && CD.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(DD, CD, cD) {
        let fD, bD, wD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          SD = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          BD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          yD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          MD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : iD.c.TRILINEAR_SAMPLINGMODE,
          tD = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          oD = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          vD = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          ND = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          gD = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          XD = arguments.length > 13 ? arguments[13] : void 0,
          mD = arguments.length > 14 ? arguments[14] : void 0,
          nD = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          OD = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          PD = !0,
          HD = !1;
        if ("object" === typeof wD) {
          const DD = wD;
          wD = !!DD.generateMipMaps, SD = DD.doNotChangeAspectRatio ?? !0, BD = DD.type ?? 0, yD = !!DD.isCube, MD = DD.samplingMode ?? iD.c.TRILINEAR_SAMPLINGMODE, tD = DD.generateDepthBuffer ?? !0, oD = !!DD.generateStencilBuffer, vD = !!DD.isMulti, ND = DD.format ?? 5, gD = !!DD.delayAllocation, XD = DD.samples, mD = DD.creationFlags, nD = !!DD.noColorAttachment, OD = !!DD.useSRGBBuffer, fD = DD.colorAttachment, PD = DD.gammaSpace ?? PD, bD = DD.existingObjectRenderer, HD = !!DD.enableClusteredLights
        }
        if (super(null, cD, !wD, void 0, MD, void 0, void 0, void 0, void 0, ND), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new ID.c, this.onAfterUnbindObservable = new ID.c, this.onClearObservable = new ID.c, this.onResizeObservable = new ID.c, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = pD.p.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(cD = this.hq())) return;
        const UD = this.hq().DZ();
        this._gammaSpace = PD, this._coordinatesMode = iD.c.PROJECTION_MODE, this.name = DD, this.isRenderTarget = !0, this._initialSizeParameter = CD, this._dontDisposeObjectRenderer = !!bD, this._processSizeParameter(CD), this._objectRenderer = bD ?? new ZD(DD, cD, {
          numPasses: yD ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: SD,
          enableClusteredLights: HD
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const DD = this._scene;
          if (!this._disableEngineStages)
            for (const CD of DD._beforeRenderTargetClearStage) CD.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(UD) : this.skipInitialClear || UD.clear(this.clearColor ?? DD.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || DD.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const CD of DD._beforeRenderTargetDrawStage) CD.action(this, this._currentFaceIndex, this._currentLayer);
          UD._debugPushGroup && UD._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (UD._debugPopGroup && UD._debugPopGroup(), !this._disableEngineStages)
            for (const CD of this._scene._afterRenderTargetDrawStage) CD.action(this, this._currentFaceIndex, this._currentLayer);
          const DD = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const CD of this._scene._afterRenderTargetPostProcessStage) CD.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = DD), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), UD) : QD.e.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(UD) : this.skipInitialClear || UD.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = UD.onResizeObservable.add((() => {})), this._generateMipMaps = !!wD, this._doNotChangeAspectRatio = SD, vD || (this._renderTargetOptions = {
          generateMipMaps: wD,
          type: BD,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: tD,
          generateStencilBuffer: oD,
          samples: XD,
          creationFlags: mD,
          noColorAttachment: nD,
          useSRGBBuffer: OD,
          colorAttachment: fD,
          label: this.name
        }, this.samplingMode === iD.c.NEAREST_SAMPLINGMODE && (this.wrapU = iD.c.CLAMP_ADDRESSMODE, this.wrapV = iD.c.CLAMP_ADDRESSMODE), gD || (yD ? (this._renderTarget = cD.DZ().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = iD.c.INVCUBIC_MODE, this._textureMatrix = pD.d.Identity()) : this._renderTarget = cD.DZ().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== XD && (this.samples = XD)))
      }
      createDepthStencilTexture() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          iD = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(DD, CD, cD, ID, pD, iD)
      }
      _processSizeParameter(DD) {
        if (DD.ratio) {
          this._sizeRatio = DD.ratio;
          const CD = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(CD.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(CD.getRenderHeight(), this._sizeRatio)
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
          const DD = this.hq();
          if (!DD) return;
          this._postProcessManager = new fD.b(DD), this._postProcesses = new Array
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
        const CD = this._postProcesses.indexOf(DD); - 1 !== CD && (this._postProcesses.splice(CD, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
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
        const CD = this._size.depth;
        return CD || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(DD) {
        const CD = Math.max(1, this.getRenderSize() * DD);
        this.resize(CD)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(DD) {
        const CD = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const cD = this.hq();
        cD && (this._processSizeParameter(DD), this._renderTarget = CD ? cD.DZ().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : cD.DZ().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(DD, CD)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => cD(40941))).then((DD => this._dumpTools = DD))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const DD = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), DD
      }
      _render() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cD = this.hq();
        if (!cD) return;
        void 0 !== this.useCameraPostProcesses && (DD = this.useCameraPostProcesses);
        const ID = cD.DZ();
        if (ID._debugPushGroup && ID._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let pD = 0; pD < 6; pD++) this._renderToTarget(pD, DD, CD), cD.incrementRenderId(), cD.resetCachedMaterial();
          else this._renderToTarget(0, DD, CD);
        else
          for (let pD = 0; pD < this.getRenderLayers(); pD++) this._renderToTarget(0, DD, CD, pD), cD.incrementRenderId(), cD.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), ID._debugPopGroup && ID._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(DD, CD) {
        const cD = DD * CD,
          ID = (0, bD.o)(cD + 16384 / (128 + cD));
        return Math.min((0, bD.c)(DD), ID)
      }
      _bindFrameBuffer() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const cD = this.hq();
        if (!cD) return;
        const ID = cD.DZ();
        this._renderTarget && ID.bindFramebuffer(this._renderTarget, this.isCube ? DD : void 0, void 0, void 0, this.ignoreCameraViewport, 0, CD)
      }
      _unbindFrameBuffer(DD, CD) {
        this._renderTarget && DD.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(CD)
        }))
      }
      _prepareFrame(DD, CD, cD, ID) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(CD, cD) : ID && DD.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(CD, cD)
      }
      _renderToTarget(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const pD = this.hq();
        if (!pD) return;
        const iD = pD.DZ();
        this._currentFaceIndex = DD, this._currentLayer = ID, this._currentUseCameraPostProcess = CD, this._currentDumpForDebug = cD, this._prepareFrame(pD, DD, ID, CD), this._objectRenderer.render(DD + ID, !0), this._unbindFrameBuffer(iD, DD), this._texture && this.isCube && 5 === DD && iD.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(DD, CD, cD, ID)
      }
      setRenderingAutoClearDepthStencil(DD, CD) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(DD, CD)
      }
      clone() {
        const DD = this.getSize(),
          CD = new vD(this.name, DD, this.hq(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return CD.hasAlpha = this.hasAlpha, CD.level = this.level, CD.coordinatesMode = this.coordinatesMode, this.renderList && (CD.renderList = this.renderList.slice(0)), CD
      }
      serialize() {
        if (!this.name) return null;
        const DD = super.serialize();
        if (DD.renderTargetSize = this.getRenderSize(), DD.renderList = [], this.renderList)
          for (let CD = 0; CD < this.renderList.length; CD++) DD.renderList.push(this.renderList[CD].id);
        return DD
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.hq().DZ().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const DD = this.hq();
        if (!DD) return;
        let CD = DD.customRenderTargets.indexOf(this);
        CD >= 0 && DD.customRenderTargets.splice(CD, 1);
        for (const cD of DD.cameras) CD = cD.customRenderTargets.indexOf(this), CD >= 0 && cD.customRenderTargets.splice(CD, 1);
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
    vD.REFRESHRATE_RENDER_ONCE = ZD.REFRESHRATE_RENDER_ONCE, vD.REFRESHRATE_RENDER_ONEVERYFRAME = ZD.REFRESHRATE_RENDER_ONEVERYFRAME, vD.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = ZD.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(vD.prototype, "noPrePassRenderer") || Object.defineProperty(vD.prototype, "noPrePassRenderer", (0, oD.g)("RenderTargetTexture", "noPrePassRenderer"))
  },
  40904: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => wD,
      h: () => SD
    });
    var ID = cD(39286),
      pD = cD(37479),
      iD = cD(36473),
      fD = cD(38996),
      bD = cD(39456);
    const QD = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class wD {
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QD;
        this._fullscreenViewport = new pD.e(0, 0, 1, 1);
        const cD = CD.positions ?? QD.positions,
          iD = CD.indices ?? QD.indices;
        this.engine = DD, this._vertexBuffers = {
          [ID.k.PositionKind]: new ID.k(DD, cD, ID.k.PositionKind, !1, !1, 2)
        }, this._indexBuffer = DD.createIndexBuffer(iD), this._indexBufferLength = iD.length, this._onContextRestoredObserver = DD.onContextRestoredObservable.add((() => {
          this._indexBuffer = DD.createIndexBuffer(iD);
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
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = CD, this.engine.stencilState.stencilTest = cD, this.engine.enableEffect(DD.drawWrapper), this.bindBuffers(DD.effect), DD.onApplyObservable.notifyObservers({})
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
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!DD.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const cD = null === CD ? null : this._isRenderTargetTexture(CD) ? CD.renderTarget : CD;
        cD && this.engine.bindFramebuffer(cD), this.applyEffectWrapper(DD), this.draw(), cD && this.engine.unBindFramebuffer(cD), this.restoreStates()
      }
      dispose() {
        const DD = this._vertexBuffers[ID.k.PositionKind];
        DD && (DD.dispose(), delete this._vertexBuffers[ID.k.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class SD {
      static RegisterShaderCodeProcessing(DD, CD) {
        CD ? SD._CustomShaderCodeProcessing[DD ?? ""] = CD : delete SD._CustomShaderCodeProcessing[DD ?? ""]
      }
      static _GetShaderCodeProcessing(DD) {
        return SD._CustomShaderCodeProcessing[DD] ?? SD._CustomShaderCodeProcessing[""]
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
        this.alphaMode = 0, this.onEffectCreatedObservable = new iD.c(void 0, !0), this.onApplyObservable = new iD.c, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
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
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.onContextRestoredObservable.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new bD.c(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const CD = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, CD, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ID = arguments.length > 2 ? arguments[2] : void 0,
          pD = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, pD && this._importPromises.push(...pD);
        const iD = this.options.engine.isWebGPU && !SD.ForceGLSL;
        this._gatherImports(iD, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(iD && this._webGPUReady ? cD.e(356).then((() => cD(60621))) : cD.e(345).then((() => cD(60393)))), void 0 !== ID && ID(iD, this._importPromises), iD && this._webGPUReady && (this.options.shaderLanguage = 1), DD || this.updateEffect(CD)
      }
      updateEffect() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          ID = arguments.length > 3 ? arguments[3] : void 0,
          pD = arguments.length > 4 ? arguments[4] : void 0,
          iD = arguments.length > 5 ? arguments[5] : void 0,
          bD = arguments.length > 6 ? arguments[6] : void 0,
          QD = arguments.length > 7 ? arguments[7] : void 0;
        const wD = SD._GetShaderCodeProcessing(this.name);
        if (wD?.defineCustomBindings) {
          const ID = CD?.slice() ?? [];
          ID.push(...this.options.uniforms);
          const pD = cD?.slice() ?? [];
          pD.push(...this.options.samplers), DD = wD.defineCustomBindings(this.name, DD, ID, pD), CD = ID, cD = pD
        }
        this.options.defines = DD || "";
        const BD = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let yD;
        yD = this.options.extraInitializationsAsync ? async () => {
          await (BD?.()), await this.options.extraInitializationsAsync()
        }: BD, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: bD ?? this._shaderPath.vertex,
          fragment: QD ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: CD || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: cD || this.options.samplers,
          defines: null !== DD ? DD : "",
          fallbacks: null,
          onCompiled: pD ?? this.options.onCompiled,
          onError: iD ?? null,
          indexParameters: ID || this.options.indexParameters,
          processCodeAfterIncludes: wD?.processCodeAfterIncludes ? (DD, CD) => wD.processCodeAfterIncludes(this.name, DD, CD) : null,
          processFinalCode: wD?.processFinalCode ? (DD, CD) => wD.processFinalCode(this.name, DD, CD) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: yD
        }, this.options.engine) : this._drawWrapper.effect = new fD.b(this._shaderPath, this.options.attributeNames, CD || this.options.uniforms, cD || this.options.samplerNames, this.options.engine, DD, void 0, pD || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, yD), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !DD && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), SD._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.DZ().onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    SD.ForceGLSL = !1, SD._CustomShaderCodeProcessing = {}
  },
  40941: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      Dispose: () => ND,
      DumpData: () => vD,
      DumpDataAsync: () => oD,
      DumpFramebuffer: () => ZD,
      DumpTools: () => gD,
      EncodeImageAsync: () => tD,
      RegisterDumpTools: () => mD
    });
    var ID = cD(39154),
      pD = cD(40904),
      iD = cD(39245),
      fD = cD(36479),
      bD = cD(36464),
      QD = cD(38048),
      wD = cD(39208),
      SD = cD(39156);
    let BD = null;
    async function yD() {
      return BD || (BD = async function() {
        const DD = bD.b.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        DD instanceof OffscreenCanvas && QD.e.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: CD
        } = await Promise.resolve().then((() => cD(38991)));
        if (!CD.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const ID = new CD(DD, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        bD.b.Instances.pop(), bD.b.OnEnginesDisposedObservable.add((DD => {
          ID && DD !== ID && !ID.jCD && 0 === bD.b.Instances.length && ND()
        })), ID.getCaps().parallelShaderCompile = void 0;
        const iD = new pD.e(ID),
          {
            passPixelShader: fD
          } = await cD.e(364).then((() => cD(60673))),
          wD = new pD.h({
            engine: ID,
            name: fD.name,
            fragmentShader: fD.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: DD,
          dumpEngine: {
            engine: ID,
            renderer: iD,
            wrapper: wD
          }
        }
      }()), await BD
    }
    let MD = (() => {
      var DD;
      let CD, cD = [];
      return DD = class {
        static async EncodeImageAsync(DD, CD, cD, ID, pD, fD) {
          const bD = await yD(),
            QD = bD.dumpEngine;
          QD.engine.setSize(CD, cD, !0);
          const wD = QD.engine.createRawTexture(DD, CD, cD, 5, !1, !pD, 1);
          return QD.renderer.setViewport(), QD.renderer.applyEffectWrapper(QD.wrapper), QD.wrapper.effect._bindTexture("textureSampler", wD), QD.renderer.draw(), wD.dispose(), await new Promise(((DD, CD) => {
            iD.g.ToBlob(bD.canvas, (cD => {
              cD ? DD(cD) : CD(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), ID, fD)
          }))
        }
      }, (() => {
        const pD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        CD = [SD.g], (0, ID.k)(DD, null, CD, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: DD => "EncodeImageAsync" in DD,
            get: DD => DD.EncodeImageAsync
          },
          metadata: pD
        }, null, cD), pD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: pD
        }), (0, ID.m)(DD, cD)
      })(), DD
    })();
    const tD = MD.EncodeImageAsync;
    async function ZD(DD, CD, cD, ID) {
      let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        iD = arguments.length > 5 ? arguments[5] : void 0,
        fD = arguments.length > 6 ? arguments[6] : void 0;
      const bD = await cD.readPixels(0, 0, DD, CD);
      vD(DD, CD, new Uint8Array(bD.buffer), ID, pD, iD, !0, void 0, fD)
    }
    async function oD(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        pD = arguments.length > 4 ? arguments[4] : void 0,
        bD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        SD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        BD = arguments.length > 7 ? arguments[7] : void 0;
      if (cD instanceof Float32Array) {
        const DD = new Uint8Array(cD.length);
        let CD = cD.length;
        for (; CD--;) {
          const ID = cD[CD];
          DD[CD] = Math.round(255 * (0, fD.Clamp)(ID))
        }
        cD = DD
      }
      const yD = await MD.EncodeImageAsync(cD, DD, CD, ID, bD, BD);
      void 0 !== pD && iD.g.DownloadBlob(yD, pD), yD.type !== ID && QD.e.Warn(`DumpData: The requested mimeType '${ID}' is not supported. The result has mimeType '${yD.type}' instead.`);
      const tD = await yD.arrayBuffer();
      return SD ? tD : `data:${ID};base64,${(0,wD.k)(tD)}`
    }

    function vD(DD, CD, cD, ID) {
      let pD = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== pD || ID || (pD = ""), oD(DD, CD, cD, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", pD, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((DD => {
        ID && ID(DD)
      }))
    }

    function ND() {
      BD && (BD?.then((DD => {
        DD.canvas instanceof HTMLCanvasElement && DD.canvas.remove(), DD.dumpEngine && (DD.dumpEngine.engine.dispose(), DD.dumpEngine.renderer.dispose(), DD.dumpEngine.wrapper.dispose())
      })), BD = null)
    }
    const gD = {
      DumpData: vD,
      DumpDataAsync: oD,
      DumpFramebuffer: ZD,
      Dispose: ND
    };
    let XD = !1;

    function mD() {
      if (XD) return;
      XD = !0;
      iD.g.DumpData = vD, iD.g.DumpDataAsync = oD, iD.g.DumpFramebuffer = ZD
    }
  },
  40917: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => MD,
      g: () => tD,
      k: () => ZD
    });
    var ID = cD(39595),
      pD = cD(40924),
      iD = cD(39154),
      fD = cD(40895),
      bD = cD(39174),
      QD = cD(40932),
      wD = cD(39156);
    class SD extends fD.d {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(DD, CD) {
        let cD = arguments.length > 4 ? arguments[4] : void 0;
        const ID = {
          size: "number" === typeof CD ? CD : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: cD,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...CD
        };
        super(DD, QD.f.FragmentUrl, {
          effectWrapper: "number" !== typeof CD && CD.effectWrapper ? void 0 : new QD.f(DD, cD, ID),
          ...ID
        })
      }
      static _Parse(DD, CD, cD, ID) {
        return bD.d.Parse((() => new SD(DD.name, DD.options, CD, DD.renderTargetSamplingMode, DD._engine, DD.reusable)), DD, cD, ID)
      }
    }(() => {
      var DD;
      let CD, cD = fD.d,
        ID = [];
      DD = class extends cD {
        get face() {
          return this._effectWrapper.face
        }
        set face(DD) {
          this._effectWrapper.face = DD
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(DD, CD) {
          let cD = arguments.length > 4 ? arguments[4] : void 0;
          const pD = {
            size: "number" === typeof CD ? CD : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: cD,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...CD
          };
          super(DD, QD.f.FragmentUrl, {
            effectWrapper: "number" !== typeof CD && CD.effectWrapper ? void 0 : new QD.d(DD, cD, pD),
            ...pD
          }), (0, iD.m)(this, ID)
        }
        static _Parse(CD, cD, ID, pD) {
          return bD.d.Parse((() => new DD(CD.name, CD.options, cD, CD.renderTargetSamplingMode, CD._engine, CD.reusable)), CD, ID, pD)
        }
      }, (() => {
        const pD = "function" === typeof Symbol && Symbol.metadata ? Object.create(cD[Symbol.metadata] ?? null) : void 0;
        CD = [(0, wD.G)()], (0, iD.k)(DD, null, CD, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: DD => "face" in DD,
            get: DD => DD.face
          },
          metadata: pD
        }, null, ID), pD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: pD
        })
      })()
    })();
    var BD = cD(36479),
      yD = cD(39215);

    function MD(DD, CD, cD, ID, pD, iD, bD, QD) {
      const wD = CD.DZ();
      return CD.isReady = !1, pD = pD ?? CD.samplingMode, ID = ID ?? CD.type, iD = iD ?? CD.format, bD = bD ?? CD.width, QD = QD ?? CD.height, -1 === ID && (ID = 0), new Promise((SD => {
        const BD = new fD.d("postprocess", DD, null, null, 1, null, pD, wD, !1, void 0, ID, void 0, null, !1, iD);
        BD.externalTextureSamplerBinding = !0;
        const yD = wD.createRenderTargetTexture({
          width: bD,
          height: QD
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: pD,
          type: ID,
          format: iD
        });
        BD.onEffectCreatedObservable.addOnce((DD => {
          DD.executeWhenCompiled((() => {
            BD.onApply = DD => {
              DD._bindTexture("textureSampler", CD), DD.setFloat2("scale", 1, 1)
            }, cD.postProcessManager.directRender([BD], yD, !0), wD.restoreDefaultFramebuffer(), wD._releaseTexture(CD), BD && BD.dispose(), yD._swapAndDie(CD), CD.type = ID, CD.format = 5, CD.isReady = !0, SD(CD)
          }))
        }))
      }))
    }
    async function tD(DD, CD, iD) {
      let bD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        QD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        wD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        SD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(DD) {
        if (DD.isReady()) return;
        if (DD.loadingError) throw new Error(DD.errorObject?.message || `Texture ${DD.name} errored while loading.`);
        const CD = DD.onLoadObservable;
        if (CD) return await new Promise((DD => CD.addOnce((() => DD()))));
        const cD = DD._texture?.onLoadedObservable;
        if (cD) return await new Promise((DD => cD.addOnce((() => DD()))));
        throw new Error(`Cannot determine readiness of texture ${DD.name}.`)
      }(DD);
      const yD = DD.getInternalTexture(),
        MD = DD.is3D || !!yD?.is3D,
        {
          width: tD,
          height: ZD
        } = DD.getSize(),
        oD = CD ?? tD,
        vD = iD ?? ZD;
      if (wD || MD || function(DD) {
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
        }(DD.textureFormat) || oD !== tD || vD !== ZD) {
        if (DD.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${wD?"RTT":"compression"} is not supported.`);
        return await async function(DD, CD, iD, bD, QD) {
          let wD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const SD = DD.hq(),
            BD = SD.DZ(),
            yD = DD.getInternalTexture(),
            MD = DD.is3D || !!yD?.is3D;
          let tD;
          if (BD.isWebGPU ? MD ? await cD.e(360).then((() => cD(60647))) : DD.isCube ? await cD.e(361).then((() => cD(60655))) : await cD.e(362).then((() => cD(60661))) : MD ? await cD.e(357).then((() => cD(60639))) : DD.isCube ? await cD.e(358).then((() => cD(60641))) : await cD.e(359).then((() => cD(60643))), MD) tD = new fD.d("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: ID.c.NEAREST_NEAREST_MIPNEAREST,
            engine: BD,
            shaderLanguage: BD.isWebGPU ? 1 : 0
          });
          else if (DD.isCube) {
            const DD = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            tD = new fD.d("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: ID.c.NEAREST_NEAREST_MIPNEAREST,
              engine: BD,
              defines: DD[bD],
              shaderLanguage: BD.isWebGPU ? 1 : 0
            })
          } else tD = new fD.d("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: ID.c.NEAREST_NEAREST_MIPNEAREST,
            engine: BD,
            shaderLanguage: BD.isWebGPU ? 1 : 0
          });
          await new Promise((DD => {
            tD.onEffectCreatedObservable.addOnce((CD => {
              CD.executeWhenCompiled((() => {
                DD(0)
              }))
            }))
          }));
          const ZD = new pD.b("temp", {
            width: CD,
            height: iD
          }, SD, !1);
          tD.onApply = function(CD) {
            CD.setTexture("textureSampler", DD), CD.setFloat("lod", QD), CD.setInt("gamma", DD.gammaSpace ? 1 : 0), MD && CD.setFloat("slice", wD)
          };
          try {
            if (ZD.renderTarget && yD) {
              const cD = yD.samplingMode;
              0 !== QD ? DD.updateSamplingMode(ID.c.NEAREST_NEAREST_MIPNEAREST) : DD.updateSamplingMode(ID.c.NEAREST_NEAREST), SD.postProcessManager.directRender([tD], ZD.renderTarget, !0), DD.updateSamplingMode(cD);
              const pD = await BD.readPixels(0, 0, CD, iD),
                fD = new Uint8Array(pD.buffer, pD.byteOffset, pD.byteLength);
              return BD.unBindFramebuffer(ZD.renderTarget), fD
            }
            throw Error("Render to texture failed.")
          } finally {
            ZD.dispose(), tD.dispose()
          }
        }(DD, oD, vD, bD, QD, SD)
      }
      let ND = await DD.readPixels(bD, QD);
      if (!ND) throw new Error(`Failed to read pixels from texture ${DD.name}.`);
      if (ND instanceof Float32Array) {
        const DD = new Uint8Array(ND.length);
        let CD = ND.length;
        for (; CD--;) {
          const cD = ND[CD];
          DD[CD] = Math.round(255 * (0, BD.Clamp)(cD))
        }
        ND = DD
      }
      const gD = oD * vD,
        XD = 4 * gD;
      if (ND.length !== XD) {
        const DD = 0 === gD ? 0 : ND.length / gD;
        if (1 === DD || 2 === DD || 3 === DD) {
          const CD = new Uint8Array(XD);
          for (let cD = 0, ID = 0, pD = 0; cD < gD; cD++, pD += 4) {
            const cD = ND[ID++];
            if (1 === DD) {
              CD[pD] = cD, CD[pD + 1] = cD, CD[pD + 2] = cD, CD[pD + 3] = 255;
              continue
            }
            const iD = ND[ID++];
            2 !== DD ? (CD[pD] = cD, CD[pD + 1] = iD, CD[pD + 2] = ND[ID++], CD[pD + 3] = 255) : (CD[pD] = cD, CD[pD + 1] = iD, CD[pD + 2] = 0, CD[pD + 3] = 255)
          }
          return CD
        }
      }
      return ND
    }
    const ZD = {
      CreateResizedCopy: function(DD, CD, cD) {
        let iD = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const fD = DD.hq(),
          bD = fD.DZ(),
          QD = new pD.b("resized" + DD.name, {
            width: CD,
            height: cD
          }, fD, !DD.noMipmap, !0, DD._texture.type, !1, DD.samplingMode, !1);
        QD.wrapU = DD.wrapU, QD.wrapV = DD.wrapV, QD.uOffset = DD.uOffset, QD.vOffset = DD.vOffset, QD.uScale = DD.uScale, QD.vScale = DD.vScale, QD.uAng = DD.uAng, QD.vAng = DD.vAng, QD.wAng = DD.wAng, QD.coordinatesIndex = DD.coordinatesIndex, QD.level = DD.level, QD.anisotropicFilteringLevel = DD.anisotropicFilteringLevel, QD._texture.isReady = !1, DD.wrapU = ID.c.CLAMP_ADDRESSMODE, DD.wrapV = ID.c.CLAMP_ADDRESSMODE;
        const wD = new SD("pass", 1, null, iD ? ID.c.BILINEAR_SAMPLINGMODE : ID.c.NEAREST_SAMPLINGMODE, bD, !1, 0);
        return wD.externalTextureSamplerBinding = !0, wD.onEffectCreatedObservable.addOnce((CD => {
          CD.executeWhenCompiled((() => {
            wD.onApply = function(CD) {
              CD.setTexture("textureSampler", DD)
            };
            const CD = QD.renderTarget;
            CD && (fD.postProcessManager.directRender([wD], CD), bD.unBindFramebuffer(CD), QD.disposeFramebufferObjects(), wD.dispose(), QD.getInternalTexture().isReady = !0)
          }))
        })), QD
      },
      ApplyPostProcess: MD,
      ToHalfFloat: yD.i,
      FromHalfFloat: yD.c,
      GetTextureDataAsync: tD
    }
  },
  40895: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => tD
    });
    var ID = cD(39154),
      pD = cD(39257),
      iD = cD(36473),
      fD = cD(36446),
      bD = cD(38996),
      QD = cD(39156),
      wD = cD(39174),
      SD = cD(36488),
      BD = cD(39046),
      yD = cD(39084),
      MD = cD(40904);
    let tD = (() => {
        var DD;
        let CD, bD, BD, tD, ZD, vD, ND, gD, XD, mD, nD, OD, PD, HD, UD, xD, qD = [],
          JD = [],
          KD = [],
          aD = [],
          VD = [],
          zD = [],
          jD = [],
          lD = [],
          LD = [],
          TD = [],
          GD = [],
          RD = [],
          kD = [],
          dD = [],
          YD = [],
          WD = [],
          sD = [],
          ED = [],
          eD = [],
          uD = [],
          hD = [],
          rD = [],
          AD = [],
          FD = [],
          DC = [],
          CC = [],
          cC = [],
          IC = [],
          pC = [];
        return DD = class {
          static get ForceGLSL() {
            return MD.h.ForceGLSL
          }
          static set ForceGLSL(DD) {
            MD.h.ForceGLSL = DD
          }
          static RegisterShaderCodeProcessing(DD, CD) {
            MD.h.RegisterShaderCodeProcessing(DD, CD)
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
            return this.FY
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.K4(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(CD, cD, bD, QD, wD, SD) {
            let BD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              yD = arguments.length > 7 ? arguments[7] : void 0,
              tD = arguments.length > 8 ? arguments[8] : void 0,
              ZD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              vD = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              ND = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              gD = arguments.length > 12 ? arguments[12] : void 0,
              XD = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              mD = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              nD = arguments.length > 15 ? arguments[15] : void 0,
              OD = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, ID.m)(this, qD), null), this.uniqueId = (0, ID.m)(this, JD, void 0), this.width = ((0, ID.m)(this, KD), (0, ID.m)(this, aD, -1)), this.height = ((0, ID.m)(this, VD), (0, ID.m)(this, zD, -1)), this.nodeMaterialSource = ((0, ID.m)(this, jD), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, ID.m)(this, lD, void 0), this.clearColor = ((0, ID.m)(this, LD), (0, ID.m)(this, TD, void 0)), this.autoClear = ((0, ID.m)(this, GD), (0, ID.m)(this, RD, !0)), this.forceAutoClearInAlphaMode = ((0, ID.m)(this, kD), (0, ID.m)(this, dD, !1)), this.alphaConstants = ((0, ID.m)(this, YD), (0, ID.m)(this, WD, void 0)), this.animations = ((0, ID.m)(this, sD), []), this.enablePixelPerfectMode = (0, ID.m)(this, ED, !1), this.forceFullscreenViewport = ((0, ID.m)(this, eD), (0, ID.m)(this, uD, !0)), this.inspectableCustomProperties = (0, ID.m)(this, hD), this.scaleMode = (0, ID.m)(this, rD, 1), this.alwaysForcePOT = ((0, ID.m)(this, AD), (0, ID.m)(this, FD, !1)), this._samples = ((0, ID.m)(this, DC), (0, ID.m)(this, CC, 1)), this.adaptScaleToCurrentViewport = ((0, ID.m)(this, cC), (0, ID.m)(this, IC, !1)), this.doNotSerialize = ((0, ID.m)(this, pC), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new pD.f(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new fD.n(1, 1), this._texelSize = fD.n.Zero(), this.onActivateObservable = new iD.c, this.onSizeChangedObservable = new iD.c, this.onApplyObservable = new iD.c, this.onBeforeRenderObservable = new iD.c, this.onAfterRenderObservable = new iD.c, this.Aq = new iD.c, oD();
            let PD, HD = 1,
              UD = null;
            if (bD && !Array.isArray(bD)) {
              const DD = bD;
              bD = DD.uniforms ?? null, QD = DD.samplers ?? null, HD = DD.size ?? 1, SD = DD.camera ?? null, BD = DD.samplingMode ?? 1, yD = DD.engine, tD = DD.reusable, ZD = Array.isArray(DD.defines) ? DD.defines.join("\n") : DD.defines ?? null, vD = DD.textureType ?? 0, ND = DD.vertexUrl ?? "postprocess", gD = DD.indexParameters, XD = DD.blockCompilation ?? !1, mD = DD.textureFormat ?? 5, nD = DD.shaderLanguage ?? 0, UD = DD.uniformBuffers ?? null, OD = DD.extraInitializations, PD = DD.effectWrapper
            } else wD && (HD = "number" === typeof wD ? wD : {
              width: wD.width,
              height: wD.height
            });
            if (this._useExistingThinPostProcess = !!PD, this._effectWrapper = PD ?? new MD.h({
                name: CD,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: cD,
                engine: yD || SD?.hq().DZ(),
                uniforms: bD,
                samplers: QD,
                uniformBuffers: UD,
                defines: ZD,
                vertexUrl: ND,
                indexParameters: gD,
                blockCompilation: !0,
                shaderLanguage: nD,
                extraInitializations: void 0
              }), this.name = CD, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != SD ? (this.FY = SD, this._scene = SD.hq(), SD.attachPostProcess(this), this._engine = this._scene.DZ(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : yD && (this._engine = yD, this._engine.postProcesses.push(this)), this._options = HD, this.renderTargetSamplingMode = BD || 1, this._reusable = tD || !1, this._textureType = vD, this._textureFormat = mD, this._shaderLanguage = nD || 0, this._samplers = QD || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = cD, this._vertexUrl = ND, this._parameters = bD || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = UD || [], this._indexParameters = gD, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const CD = [];
              this._gatherImports(this._engine.isWebGPU && !DD.ForceGLSL, CD), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(XD, ZD, OD, CD)
            }
          }
          _gatherImports() {
            let DD = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? DD.push(Promise.all([cD.e(356).then((() => cD(60621)))])) : DD.push(Promise.all([cD.e(345).then((() => cD(60393)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          DZ() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(DD) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = DD, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new pD.f(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              ID = arguments.length > 3 ? arguments[3] : void 0,
              pD = arguments.length > 4 ? arguments[4] : void 0,
              iD = arguments.length > 5 ? arguments[5] : void 0,
              fD = arguments.length > 6 ? arguments[6] : void 0,
              bD = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(DD, CD, cD, ID, pD, iD, fD, bD), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(DD, CD) {
            let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let pD = 0; pD < this._textureCache.length; pD++)
              if (this._textureCache[pD].texture.width === DD.width && this._textureCache[pD].texture.height === DD.height && this._textureCache[pD].postProcessChannel === cD && this._textureCache[pD].texture._generateDepthBuffer === CD.generateDepthBuffer && this._textureCache[pD].texture.samples === CD.samples) return this._textureCache[pD].texture;
            const ID = this._engine.createRenderTargetTexture(DD, CD);
            return this._textureCache.push({
              texture: ID,
              postProcessChannel: cD,
              lastUsedRenderId: -1
            }), ID
          }
          _flushTextureCache() {
            const DD = this._renderId;
            for (let CD = this._textureCache.length - 1; CD >= 0; CD--)
              if (DD - this._textureCache[CD].lastUsedRenderId > 100) {
                let DD = !1;
                for (let cD = 0; cD < this._textures.length; cD++)
                  if (this._textures.data[cD] === this._textureCache[CD].texture) {
                    DD = !0;
                    break
                  } DD || (this._textureCache[CD].texture.dispose(), this._textureCache.splice(CD, 1))
              }
          }
          resize(DD, CD) {
            let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              pD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = DD, this.height = CD;
            let iD = null;
            if (cD)
              for (let QD = 0; QD < cD._postProcesses.length; QD++)
                if (null !== cD._postProcesses[QD]) {
                  iD = cD._postProcesses[QD];
                  break
                } const fD = {
                width: this.width,
                height: this.height
              },
              bD = {
                generateMipMaps: ID,
                generateDepthBuffer: pD || iD === this,
                generateStencilBuffer: (pD || iD === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(fD, bD, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(fD, bD, 1)), this._texelSize.K4(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let DD;
            if (this._shareOutputWithPostProcess) DD = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) DD = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let CD;
              DD = this.inputTexture;
              for (let cD = 0; cD < this._textureCache.length; cD++)
                if (this._textureCache[cD].texture === DD) {
                  CD = this._textureCache[cD];
                  break
                } CD && (CD.lastUsedRenderId = this._renderId)
            }
            return DD
          }
          activate(DD) {
            let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              cD = arguments.length > 2 ? arguments[2] : void 0;
            const ID = null === DD || void 0 !== DD.cameraRigMode ? DD || this.FY : null,
              pD = ID?.hq() ?? DD,
              iD = pD.DZ(),
              fD = iD.getCaps().maxTextureSize,
              bD = (CD ? CD.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              QD = (CD ? CD.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let wD = this._options.width || bD,
              SD = this._options.height || QD;
            const BD = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let MD = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const DD = iD.currentViewport;
                DD && (wD *= DD.width, SD *= DD.height)
              }(BD || this.alwaysForcePOT) && (this._options.width || (wD = iD.needPOTTextures ? (0, yD.e)(wD, fD, this.scaleMode) : wD), this._options.height || (SD = iD.needPOTTextures ? (0, yD.e)(SD, fD, this.scaleMode) : SD)), this.width === wD && this.height === SD && (MD = this._getTarget()) || this.resize(wD, SD, ID, BD, cD), this._textures.forEach((DD => {
                DD.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(DD, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return MD || (MD = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.K4(bD / wD, QD / SD), this._engine.bindFramebuffer(MD, 0, bD, QD, this.forceFullscreenViewport)) : (this._scaleRatio.K4(1, 1), this._engine.bindFramebuffer(MD, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(ID), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : pD.clearColor, pD._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), MD
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
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.DZ().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), DD = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", DD?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
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
            let CD;
            if (DD = DD || this.FY, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (CD = this._parentContainer.postProcesses.indexOf(this), CD > -1 && this._parentContainer.postProcesses.splice(CD, 1), this._parentContainer = null), CD = this._engine.postProcesses.indexOf(this), -1 !== CD && this._engine.postProcesses.splice(CD, 1), this.Aq.notifyObservers(), DD) {
              if (DD.detachPostProcess(this), CD = DD._postProcesses.indexOf(this), 0 === CD && DD._postProcesses.length > 0) {
                const DD = this.FY._getFirstPostProcess();
                DD && DD.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const DD = wD.d.Serialize(this),
              CD = this.getCamera() || this._scene && this._scene.activeCamera;
            return DD.customType = "BABYLON." + this.getClassName(), DD.cameraId = CD ? CD.id : null, DD.reusable = this._reusable, DD.textureType = this._textureType, DD.fragmentUrl = this._fragmentUrl, DD.parameters = this._parameters, DD.samplers = this._samplers, DD.uniformBuffers = this._uniformBuffers, DD.options = this._options, DD.defines = this._postProcessDefines, DD.textureFormat = this._textureFormat, DD.vertexUrl = this._vertexUrl, DD.indexParameters = this._indexParameters, DD
          }
          clone() {
            const CD = this.serialize();
            CD._engine = this._engine, CD.cameraId = null;
            const cD = DD.Parse(CD, this._scene, "");
            return cD ? (cD.onActivateObservable = this.onActivateObservable.clone(), cD.onSizeChangedObservable = this.onSizeChangedObservable.clone(), cD.onApplyObservable = this.onApplyObservable.clone(), cD.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), cD.onAfterRenderObservable = this.onAfterRenderObservable.clone(), cD._prePassEffectConfiguration = this._prePassEffectConfiguration, cD) : null
          }
          static Parse(DD, CD, cD) {
            const ID = (0, SD.b)(DD.customType);
            if (!ID || !ID._Parse) return null;
            const pD = CD ? CD.getCameraById(DD.cameraId) : null;
            return ID._Parse(DD, pD, CD, cD)
          }
          static _Parse(CD, cD, ID, pD) {
            return wD.d.Parse((() => new DD(CD.name, CD.fragmentUrl, CD.parameters, CD.samplers, CD.options, cD, CD.renderTargetSamplingMode, CD._engine, CD.reusable, CD.defines, CD.textureType, CD.vertexUrl, CD.indexParameters, !1, CD.textureFormat)), CD, ID, pD)
          }
        }, (() => {
          const cD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          CD = [(0, QD.G)()], bD = [(0, QD.G)()], BD = [(0, QD.G)()], tD = [(0, QD.G)()], ZD = [(0, QD.G)()], vD = [(0, QD.m)()], ND = [(0, QD.G)()], gD = [(0, QD.G)()], XD = [(0, QD.G)()], mD = [(0, QD.G)()], nD = [(0, QD.G)()], OD = [(0, QD.G)()], PD = [(0, QD.G)()], HD = [(0, QD.G)()], UD = [(0, QD.G)("samples")], xD = [(0, QD.G)()], (0, ID.k)(DD, null, bD, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: DD => "name" in DD,
              get: DD => DD.name
            },
            metadata: cD
          }, null, qD), (0, ID.k)(DD, null, XD, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: DD => "alphaMode" in DD,
              get: DD => DD.alphaMode
            },
            metadata: cD
          }, null, qD), (0, ID.k)(null, null, CD, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: DD => "uniqueId" in DD,
              get: DD => DD.uniqueId,
              set: (DD, CD) => {
                DD.uniqueId = CD
              }
            },
            metadata: cD
          }, JD, KD), (0, ID.k)(null, null, BD, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: DD => "width" in DD,
              get: DD => DD.width,
              set: (DD, CD) => {
                DD.width = CD
              }
            },
            metadata: cD
          }, aD, VD), (0, ID.k)(null, null, tD, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: DD => "height" in DD,
              get: DD => DD.height,
              set: (DD, CD) => {
                DD.height = CD
              }
            },
            metadata: cD
          }, zD, jD), (0, ID.k)(null, null, ZD, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: DD => "renderTargetSamplingMode" in DD,
              get: DD => DD.renderTargetSamplingMode,
              set: (DD, CD) => {
                DD.renderTargetSamplingMode = CD
              }
            },
            metadata: cD
          }, lD, LD), (0, ID.k)(null, null, vD, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: DD => "clearColor" in DD,
              get: DD => DD.clearColor,
              set: (DD, CD) => {
                DD.clearColor = CD
              }
            },
            metadata: cD
          }, TD, GD), (0, ID.k)(null, null, ND, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: DD => "autoClear" in DD,
              get: DD => DD.autoClear,
              set: (DD, CD) => {
                DD.autoClear = CD
              }
            },
            metadata: cD
          }, RD, kD), (0, ID.k)(null, null, gD, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: DD => "forceAutoClearInAlphaMode" in DD,
              get: DD => DD.forceAutoClearInAlphaMode,
              set: (DD, CD) => {
                DD.forceAutoClearInAlphaMode = CD
              }
            },
            metadata: cD
          }, dD, YD), (0, ID.k)(null, null, mD, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: DD => "alphaConstants" in DD,
              get: DD => DD.alphaConstants,
              set: (DD, CD) => {
                DD.alphaConstants = CD
              }
            },
            metadata: cD
          }, WD, sD), (0, ID.k)(null, null, nD, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: DD => "enablePixelPerfectMode" in DD,
              get: DD => DD.enablePixelPerfectMode,
              set: (DD, CD) => {
                DD.enablePixelPerfectMode = CD
              }
            },
            metadata: cD
          }, ED, eD), (0, ID.k)(null, null, OD, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: DD => "forceFullscreenViewport" in DD,
              get: DD => DD.forceFullscreenViewport,
              set: (DD, CD) => {
                DD.forceFullscreenViewport = CD
              }
            },
            metadata: cD
          }, uD, hD), (0, ID.k)(null, null, PD, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: DD => "scaleMode" in DD,
              get: DD => DD.scaleMode,
              set: (DD, CD) => {
                DD.scaleMode = CD
              }
            },
            metadata: cD
          }, rD, AD), (0, ID.k)(null, null, HD, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: DD => "alwaysForcePOT" in DD,
              get: DD => DD.alwaysForcePOT,
              set: (DD, CD) => {
                DD.alwaysForcePOT = CD
              }
            },
            metadata: cD
          }, FD, DC), (0, ID.k)(null, null, UD, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: DD => "_samples" in DD,
              get: DD => DD._samples,
              set: (DD, CD) => {
                DD._samples = CD
              }
            },
            metadata: cD
          }, CC, cC), (0, ID.k)(null, null, xD, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: DD => "adaptScaleToCurrentViewport" in DD,
              get: DD => DD.adaptScaleToCurrentViewport,
              set: (DD, CD) => {
                DD.adaptScaleToCurrentViewport = CD
              }
            },
            metadata: cD
          }, IC, pC), cD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: cD
          })
        })(), DD
      })(),
      ZD = !1;

    function oD() {
      ZD || (ZD = !0, BD.e.prototype.setTextureFromPostProcess = function(DD, CD, cD) {
        let ID = null;
        CD && (CD._forcedOutputTexture ? ID = CD._forcedOutputTexture : CD._textures.data[CD._currentRenderTextureInd] && (ID = CD._textures.data[CD._currentRenderTextureInd])), this._bindTexture(DD, ID?.texture ?? null, cD)
      }, BD.e.prototype.setTextureFromPostProcessOutput = function(DD, CD, cD) {
        this._bindTexture(DD, CD?._outputTexture?.texture ?? null, cD)
      }, bD.b.prototype.setTextureFromPostProcess = function(DD, CD) {
        this._engine.setTextureFromPostProcess(this._samplers[DD], CD, DD)
      }, bD.b.prototype.setTextureFromPostProcessOutput = function(DD, CD) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[DD], CD, DD)
      }, (0, SD.d)("BABYLON.PostProcess", tD))
    }
  },
  40932: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => fD,
      f: () => iD
    });
    var ID = cD(40904),
      pD = cD(36464);
    class iD extends ID.h {
      _gatherImports(DD, CD) {
        DD ? (this._webGPUReady = !0, CD.push(Promise.all([cD.e(363).then((() => cD(60668)))]))) : CD.push(Promise.all([cD.e(364).then((() => cD(60673)))])), super._gatherImports(DD, CD)
      }
      constructor(DD) {
        let CD = arguments.length > 2 ? arguments[2] : void 0;
        const cD = {
          name: DD,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || pD.b.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: iD.FragmentUrl,
          ...CD
        };
        cD.engine || (cD.engine = pD.b.LastCreatedEngine), super(cD)
      }
    }
    iD.FragmentUrl = "pass";
    class fD extends ID.h {
      _gatherImports(DD, CD) {
        DD ? (this._webGPUReady = !0, CD.push(Promise.all([cD.e(365).then((() => cD(60679)))]))) : CD.push(Promise.all([cD.e(366).then((() => cD(60684)))])), super._gatherImports(DD, CD)
      }
      constructor(DD) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: DD,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || pD.b.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: fD.FragmentUrl,
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
    fD.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);