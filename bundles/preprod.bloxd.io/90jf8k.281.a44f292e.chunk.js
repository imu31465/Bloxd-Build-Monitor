export const id = 281;
export const ids = [281];
export const modules = {
  39659: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => tW
    });
    var CF = SF(35647),
      AF = SF(35623),
      uF = SF(38448),
      hF = SF(38114),
      bW = SF(37900),
      dF = SF(37076),
      PF = SF(38098),
      RF = SF(38124),
      iW = SF(35631),
      eF = SF(37860),
      EF = SF(38081),
      QF = SF(38166);
    class rW {
      get renderList() {
        return this._renderList
      }
      set renderList(FF) {
        this._renderList !== FF && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), FF && (this._unObserveRenderList = (0, iW.h)(FF, this._renderListHasChanged)), this._renderList = FF)
      }
      get disableImageProcessing() {
        return this._disableImageProcessing
      }
      set disableImageProcessing(FF) {
        FF !== this._disableImageProcessing && (this._disableImageProcessing = FF, this._scene.markAllMaterialsAsDirty(64))
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(FF) {
        this._disableDepthPrePass = FF, this._renderingManager.disableDepthPrePass = FF
      }
      get name() {
        return this._name
      }
      set name(FF) {
        if (this._name !== FF) {
          if (this._name = FF, this._sceneUBOs)
            for (let FF = 0; FF < this._sceneUBOs.length; ++FF) this._sceneUBOs[FF].name = `Scene ubo #${FF} for ${this.name}`;
          if (this._scene)
            for (let FF = 0; FF < this._renderPassIds.length; ++FF) {
              const WF = this._renderPassIds[FF];
              this._engine._renderPassNames[WF] = `${this._name}#${FF}`
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
      setMaterialForRendering(FF, WF) {
        let SF;
        SF = Array.isArray(FF) ? FF : [FF];
        for (let CF = 0; CF < SF.length; ++CF)
          for (let FF = 0; FF < this.options.numPasses; ++FF) {
            let AF = SF[CF];
            SF[CF].ZWF && (AF = SF[CF].iiF), AF.setMaterialForRenderPass(this._renderPassIds[FF], void 0 !== WF ? Array.isArray(WF) ? WF[FF] : WF : void 0)
          }
      }
      _freezeActiveMeshes(FF) {
        this._freezeActiveMeshesCancel = (0, eF.f)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, FF)
            for (let FF = 0; FF < this._activeMeshes.length; FF++) this._activeMeshes.data[FF]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((FF, WF) => {
          this._freezeActiveMeshesCancel = null, WF ? (dF.b.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), FF && dF.b.Error(FF)) : (dF.b.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), FF && (dF.b.Error(FF), FF.stack && dF.b.Error(FF.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let FF = 0; FF < this._activeMeshes.length; FF++) this._activeMeshes.data[FF]._unFreeze();
        this._isFrozen = !1
      }
      constructor(FF, WF, SF) {
        this._unObserveRenderList = null, this._renderListHasChanged = (FF, WF) => {
          const SF = this._renderList ? this._renderList.length : 0;
          if (0 === WF && SF > 0 || 0 === SF)
            for (const CF of this._scene.meshes) CF._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new CF.b, this.onAfterRenderObservable = new CF.b, this.onBeforeRenderingManagerRenderObservable = new CF.b, this.onAfterRenderingManagerRenderObservable = new CF.b, this.onInitRenderingObservable = new CF.b, this.onFinishRenderingObservable = new CF.b, this.onFastPathRenderObservable = new CF.b, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new EF.f(256), this._activeBoundingBoxes = new EF.f(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = FF, this._scene = WF, this._engine = this._scene.sC(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...SF
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new RF.e(WF), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const FF of this._scene.lights) FF.getTypeID() === QF.e.LIGHTTYPEID_CLUSTERED_CONTAINER && FF.isSupported && FF._updateBatches(this.activeCamera).render()
        })), this._scene.addObjectRenderer(this)
      }
      _releaseRenderPassId() {
        for (let FF = 0; FF < this.options.numPasses; ++FF) this._engine.releaseRenderPassId(this._renderPassIds[FF]);
        this._renderPassIds.length = 0
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let FF = 0; FF < this.options.numPasses; ++FF) this._renderPassIds[FF] = this._engine.createRenderPassId(`${this.name}#${FF}`)
      }
      _createSceneUBO(FF, WF) {
        const SF = this._scene.sC(),
          CF = new PF.c(SF, void 0, WF, FF, void 0, !1);
        return CF.addUniform("viewProjection", 16), WF && CF.addUniform("viewProjectionR", 16), CF.addUniform("view", 16), CF.addUniform("projection", 16), CF.addUniform("vEyePosition", 4), CF.addUniform("inverseProjection", 16), CF
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const FF = this._engine._currentRenderTarget,
          WF = !(!FF || !FF.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const FF = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${FF} for ${this.name}`, WF)), this._sceneUBOIsMultiview.push(WF)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== WF && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, WF), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = WF);
        const SF = this._sceneUBOs[this._currentSceneUBOIndex++];
        return SF.unbindEffect(), SF
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1
      }
      get refreshRate() {
        return this._refreshRate
      }
      set refreshRate(FF) {
        this._refreshRate = FF, this.resetRefreshCounter()
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1))
      }
      isReadyForRendering(FF, WF) {
        this.prepareRenderList(), this.initRender(FF, WF);
        const SF = this._checkReadiness();
        return this.finishRender(), SF
      }
      prepareRenderList() {
        const FF = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let WF = 0; WF < this._waitingRenderList.length; WF++) {
              const SF = this._waitingRenderList[WF],
                CF = FF.getMeshById(SF);
              CF && this.renderList.push(CF)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const FF = this._scene.meshes;
          for (let WF = 0; WF < FF.length; WF++) {
            const SF = FF[WF];
            this.renderListPredicate(SF) && this.renderList.push(SF)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(FF, WF) {
        const SF = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), SF && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(SF.getViewMatrix(), SF.getProjectionMatrix(!0)), this._scene._activeCamera = SF, this._engine.setViewport(SF.rigParent ? SF.rigParent.viewport : SF.viewport, FF, WF)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const FF = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (FF.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), FF._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== FF.activeCamera && FF.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), FF.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const SF = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[FF], this.onBeforeRenderObservable.notifyObservers(FF);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(FF);
        else {
          const WF = this._prepareRenderingManager(FF),
            SF = this._scene.getOutlineRenderer?.(),
            CF = SF?.enabled;
          SF && (SF.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(FF), this._renderingManager.render(this.customRenderFunction, WF, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(FF), SF && (SF.enabled = CF)
        }
        WF || this.onAfterRenderObservable.notifyObservers(FF), this._engine.currentRenderPassId = SF
      }
      _checkReadiness() {
        const FF = this._scene,
          WF = this._engine.currentRenderPassId;
        let SF = !0;
        FF.getViewMatrix() || FF.updateTransformMatrix();
        const CF = this.options.numPasses;
        for (let AF = 0; AF < CF && SF; AF++) {
          const WF = this.renderList ? this.renderList : FF.frameGraph ? FF.meshes : FF.getActiveMeshes().data,
            uF = this.renderList || FF.frameGraph ? WF.length : FF.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[AF], this.onBeforeRenderObservable.notifyObservers(AF);
          let hF = null,
            bW = uF;
          this.getCustomRenderList && (hF = this.getCustomRenderList(AF, WF, uF), hF && (bW = hF.length)), hF || (hF = WF), this.options.doNotChangeAspectRatio || FF.updateTransformMatrix(!0);
          for (let FF = 0; FF < bW && SF; ++FF) {
            const WF = hF[FF];
            if (!WF.isEnabled() || WF.isBlocked || !WF.isVisible || !WF.Om) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(WF, this.refreshRate, !0)) {
                SF = !1;
                continue
              }
            } else if (!WF.isReady(!0)) {
              SF = !1;
              continue
            }
            let CF = WF._edgesRenderer,
              AF = WF.hasThinInstances;
            if (WF.ZWF) {
              const FF = WF.iiF;
              FF.edgesShareWithInstances && FF._edgesRenderer?.isEnabled && (CF = FF._edgesRenderer, AF = !0)
            } else WF.RRF && WF.edgesShareWithInstances && (AF = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && CF?.isEnabled && (CF.isReady(AF) || (SF = !1))
          }
          if (this.renderParticles && FF.particlesEnabled) {
            const WF = this.particleSystemList || FF.Zm;
            for (const FF of WF) FF.isReady() || (SF = !1)
          }
          if (this.renderSprites && FF.spritesEnabled) {
            const WF = this.spriteManagerList || FF.spriteManagers;
            if (WF)
              for (const CF of WF) FF.activeCamera && 0 === (CF.layerMask & FF.activeCamera.layerMask) || CF.isReady && !CF.isReady() && (SF = !1)
          }
          this.onAfterRenderObservable.notifyObservers(AF), CF > 1 && (FF.incrementRenderId(), FF.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = WF, SF
      }
      _prepareRenderingManager() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const SF = this._scene;
        let CF, AF, uF = null;
        const hF = this.renderList ? this.renderList : SF.frameGraph ? SF.meshes : SF.getActiveMeshes().data,
          bW = this.renderList || SF.frameGraph ? hF.length : SF.getActiveMeshes().length;
        if (this.getCustomRenderList && (uF = this.getCustomRenderList(FF, hF, bW)), uF) CF = uF.length, AF = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !WF && !this._engine.isWebGPU) return hF;
          this._defaultRenderListPrepared = !0, uF = hF, CF = bW, AF = !this.renderList || this.forceLayerMaskCheck
        }
        const dF = SF.activeCamera,
          PF = this.cameraForLOD ?? dF,
          RF = SF.getBoundingBoxRenderer?.();
        if (SF._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && RF) {
            RF.reset();
            for (let FF = 0; FF < this._activeBoundingBoxes.length; FF++) {
              const WF = this._activeBoundingBoxes.data[FF];
              RF.renderList.push(WF)
            }
          }
          return uF
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), RF && RF.reset(), this.renderMeshes) {
          const FF = SF.getRenderId(),
            WF = SF.getFrameId();
          for (let hF = 0; hF < CF; hF++) {
            const CF = uF[hF];
            if (CF && !CF.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(CF, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!CF.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let uF, hF;
              if (PF) {
                const FF = CF._internalAbstractMeshDataInfo._currentLOD.get(PF);
                FF && FF[1] === WF ? uF = FF[0] : (uF = SF.customLODSelector ? SF.customLODSelector(CF, PF) : CF.getLOD(PF), FF ? (FF[0] = uF, FF[1] = WF) : CF._internalAbstractMeshDataInfo._currentLOD.set(PF, [uF, WF]))
              } else uF = CF;
              if (!uF) continue;
              if (uF !== CF && 0 !== uF.billboardMode && uF.computeWorldMatrix(), uF._preActivateForIntermediateRendering(FF), hF = !(!AF || !dF) && 0 === (CF.layerMask & dF.layerMask), CF.isEnabled() && CF.isVisible && CF.Om && !hF) {
                if (this._activeMeshes.push(CF), uF._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, uF !== CF && uF._activate(FF, !0), this.enableBoundingBoxRendering && RF && RF._preActiveMesh(CF), CF._activate(FF, !0) && CF.Om.length) {
                  CF.ZWF ? CF._internalAbstractMeshDataInfo._actAsRegularMesh && (uF = CF) : uF._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, uF._internalAbstractMeshDataInfo._isActiveIntermediate = !0, SF._prepareSkeleton(uF);
                  for (let FF = 0; FF < uF.Om.length; FF++) {
                    const WF = uF.Om[FF];
                    this.enableBoundingBoxRendering && RF && RF._evaluateSubMesh(CF, WF), this._renderingManager.dispatch(WF, uF)
                  }
                }
                CF._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && RF && WF)
          for (let iW = 0; iW < RF.renderList.length; iW++) {
            const FF = RF.renderList.data[iW];
            this._activeBoundingBoxes.push(FF)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const FF = this.particleSystemList || SF.Zm;
          for (let WF = 0; WF < FF.length; WF++) {
            const SF = FF[WF],
              CF = SF.emitter;
            SF.isStarted() && CF && (!CF.position || CF.isEnabled()) && this._renderingManager.dispatchParticles(SF)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return uF
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(FF, WF, SF, CF)
      }
      setRenderingAutoClearDepthStencil(FF, WF) {
        let SF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          CF = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(FF, WF, SF, CF), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const FF = new rW(this.name, this._scene, this.options);
        return this.renderList && (FF.renderList = this.renderList.slice(0)), FF
      }
      dispose() {
        const FF = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          WF = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let SF = 0; SF < WF; SF++) {
          const WF = FF[SF];
          WF && void 0 !== WF.getMaterialForRenderPass(this.renderPassId) && WF.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const SF of this._sceneUBOs) SF.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === rW.REFRESHRATE_RENDER_ONCE && (this.refreshRate = rW.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    rW.REFRESHRATE_RENDER_ONCE = 0, rW.REFRESHRATE_RENDER_ONEVERYFRAME = 1, rW.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var gW = SF(37855);
    class tW extends uF.i {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate
      }
      set renderListPredicate(FF) {
        this._objectRenderer.renderListPredicate = FF
      }
      get renderList() {
        return this._objectRenderer.renderList
      }
      set renderList(FF) {
        this._objectRenderer.renderList = FF
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList
      }
      set particleSystemList(FF) {
        this._objectRenderer.particleSystemList = FF
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList
      }
      set getCustomRenderList(FF) {
        this._objectRenderer.getCustomRenderList = FF
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles
      }
      set renderParticles(FF) {
        this._objectRenderer.renderParticles = FF
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites
      }
      set renderSprites(FF) {
        this._objectRenderer.renderSprites = FF
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering
      }
      set enableBoundingBoxRendering(FF) {
        this._objectRenderer.enableBoundingBoxRendering = FF
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering
      }
      set enableOutlineRendering(FF) {
        this._objectRenderer.enableOutlineRendering = FF
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck
      }
      set forceLayerMaskCheck(FF) {
        this._objectRenderer.forceLayerMaskCheck = FF
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera
      }
      set activeCamera(FF) {
        this._objectRenderer.activeCamera = FF
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD
      }
      set cameraForLOD(FF) {
        this._objectRenderer.cameraForLOD = FF
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing
      }
      set disableImageProcessing(FF) {
        this._objectRenderer.disableImageProcessing = FF
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction
      }
      set customIsReadyFunction(FF) {
        this._objectRenderer.customIsReadyFunction = FF
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction
      }
      set customRenderFunction(FF) {
        this._objectRenderer.customRenderFunction = FF
      }
      get postProcesses() {
        return this._postProcesses
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled
      }
      set onAfterUnbind(FF) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(FF)
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable
      }
      set onBeforeRender(FF) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(FF)
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable
      }
      set onAfterRender(FF) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(FF)
      }
      set onClear(FF) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(FF)
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList
      }
      set _waitingRenderList(FF) {
        this._objectRenderer._waitingRenderList = FF
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
      setMaterialForRendering(FF, WF) {
        this._objectRenderer.setMaterialForRendering(FF, WF)
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
      set boundingBoxSize(FF) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(FF)) return;
        this._boundingBoxSize = FF;
        const WF = this.OWF();
        WF && WF.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(FF, WF, SF) {
        let hF, bW, PF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          RF = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          iW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          eF = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          EF = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : uF.i.TRILINEAR_SAMPLINGMODE,
          QF = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          gW = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          tW = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          TF = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          aW = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          kW = arguments.length > 13 ? arguments[13] : void 0,
          qW = arguments.length > 14 ? arguments[14] : void 0,
          VF = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          NF = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          DF = !0,
          LF = !1;
        if ("object" === typeof PF) {
          const FF = PF;
          PF = !!FF.generateMipMaps, RF = FF.doNotChangeAspectRatio ?? !0, iW = FF.type ?? 0, eF = !!FF.isCube, EF = FF.samplingMode ?? uF.i.TRILINEAR_SAMPLINGMODE, QF = FF.generateDepthBuffer ?? !0, gW = !!FF.generateStencilBuffer, tW = !!FF.isMulti, TF = FF.format ?? 5, aW = !!FF.delayAllocation, kW = FF.samples, qW = FF.creationFlags, VF = !!FF.noColorAttachment, NF = !!FF.useSRGBBuffer, hF = FF.colorAttachment, DF = FF.gammaSpace ?? DF, bW = FF.existingObjectRenderer, LF = !!FF.enableClusteredLights
        }
        if (super(null, SF, !PF, void 0, EF, void 0, void 0, void 0, void 0, TF), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new CF.b, this.onAfterUnbindObservable = new CF.b, this.onClearObservable = new CF.b, this.onResizeObservable = new CF.b, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = AF.r.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(SF = this.OWF())) return;
        const mW = this.OWF().sC();
        this._gammaSpace = DF, this._coordinatesMode = uF.i.PROJECTION_MODE, this.name = FF, this.isRenderTarget = !0, this._initialSizeParameter = WF, this._dontDisposeObjectRenderer = !!bW, this._processSizeParameter(WF), this._objectRenderer = bW ?? new rW(FF, SF, {
          numPasses: eF ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: RF,
          enableClusteredLights: LF
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const FF = this._scene;
          if (!this._disableEngineStages)
            for (const WF of FF._beforeRenderTargetClearStage) WF.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(mW) : this.skipInitialClear || mW.clear(this.clearColor ?? FF.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || FF.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const WF of FF._beforeRenderTargetDrawStage) WF.action(this, this._currentFaceIndex, this._currentLayer);
          mW._debugPushGroup && mW._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (mW._debugPopGroup && mW._debugPopGroup(), !this._disableEngineStages)
            for (const WF of this._scene._afterRenderTargetDrawStage) WF.action(this, this._currentFaceIndex, this._currentLayer);
          const FF = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const WF of this._scene._afterRenderTargetPostProcessStage) WF.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = FF), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), mW) : dF.b.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(mW) : this.skipInitialClear || mW.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = mW.onResizeObservable.add((() => {})), this._generateMipMaps = !!PF, this._doNotChangeAspectRatio = RF, tW || (this._renderTargetOptions = {
          generateMipMaps: PF,
          type: iW,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: QF,
          generateStencilBuffer: gW,
          samples: kW,
          creationFlags: qW,
          noColorAttachment: VF,
          useSRGBBuffer: NF,
          colorAttachment: hF,
          label: this.name
        }, this.samplingMode === uF.i.NEAREST_SAMPLINGMODE && (this.wrapU = uF.i.CLAMP_ADDRESSMODE, this.wrapV = uF.i.CLAMP_ADDRESSMODE), aW || (eF ? (this._renderTarget = SF.sC().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = uF.i.INVCUBIC_MODE, this._textureMatrix = AF.b.Identity()) : this._renderTarget = SF.sC().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== kW && (this.samples = kW)))
      }
      createDepthStencilTexture() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          uF = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(FF, WF, SF, CF, AF, uF)
      }
      _processSizeParameter(FF) {
        if (FF.ratio) {
          this._sizeRatio = FF.ratio;
          const WF = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(WF.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(WF.getRenderHeight(), this._sizeRatio)
          }
        } else this._size = FF
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples
      }
      set samples(FF) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(FF))
      }
      addPostProcess(FF) {
        if (!this._postProcessManager) {
          const FF = this.OWF();
          if (!FF) return;
          this._postProcessManager = new hF.c(FF), this._postProcesses = new Array
        }
        this._postProcesses.push(FF), this._postProcesses[0].autoClear = !1
      }
      clearPostProcesses() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (FF)
            for (const FF of this._postProcesses) FF.dispose();
          this._postProcesses = []
        }
      }
      removePostProcess(FF) {
        if (!this._postProcesses) return;
        const WF = this._postProcesses.indexOf(FF); - 1 !== WF && (this._postProcesses.splice(WF, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter()
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate
      }
      set refreshRate(FF) {
        this._objectRenderer.refreshRate = FF
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
        const FF = this._size.layers;
        if (FF) return FF;
        const WF = this._size.depth;
        return WF || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(FF) {
        const WF = Math.max(1, this.getRenderSize() * FF);
        this.resize(WF)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(FF) {
        const WF = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const SF = this.OWF();
        SF && (this._processSizeParameter(FF), this._renderTarget = WF ? SF.sC().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : SF.sC().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(FF, WF)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => SF(39669))).then((FF => this._dumpTools = FF))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const FF = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), FF
      }
      _render() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const SF = this.OWF();
        if (!SF) return;
        void 0 !== this.useCameraPostProcesses && (FF = this.useCameraPostProcesses);
        const CF = SF.sC();
        if (CF._debugPushGroup && CF._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let AF = 0; AF < 6; AF++) this._renderToTarget(AF, FF, WF), SF.incrementRenderId(), SF.resetCachedMaterial();
          else this._renderToTarget(0, FF, WF);
        else
          for (let AF = 0; AF < this.getRenderLayers(); AF++) this._renderToTarget(0, FF, WF, AF), SF.incrementRenderId(), SF.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), CF._debugPopGroup && CF._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(FF, WF) {
        const SF = FF * WF,
          CF = (0, bW.j)(SF + 16384 / (128 + SF));
        return Math.min((0, bW.c)(FF), CF)
      }
      _bindFrameBuffer() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const SF = this.OWF();
        if (!SF) return;
        const CF = SF.sC();
        this._renderTarget && CF.bindFramebuffer(this._renderTarget, this.isCube ? FF : void 0, void 0, void 0, this.ignoreCameraViewport, 0, WF)
      }
      _unbindFrameBuffer(FF, WF) {
        this._renderTarget && FF.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(WF)
        }))
      }
      _prepareFrame(FF, WF, SF, CF) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(WF, SF) : CF && FF.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(WF, SF)
      }
      _renderToTarget(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const AF = this.OWF();
        if (!AF) return;
        const uF = AF.sC();
        this._currentFaceIndex = FF, this._currentLayer = CF, this._currentUseCameraPostProcess = WF, this._currentDumpForDebug = SF, this._prepareFrame(AF, FF, CF, WF), this._objectRenderer.render(FF + CF, !0), this._unbindFrameBuffer(uF, FF), this._texture && this.isCube && 5 === FF && uF.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(FF, WF, SF, CF)
      }
      setRenderingAutoClearDepthStencil(FF, WF) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(FF, WF)
      }
      clone() {
        const FF = this.getSize(),
          WF = new tW(this.name, FF, this.OWF(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return WF.hasAlpha = this.hasAlpha, WF.level = this.level, WF.coordinatesMode = this.coordinatesMode, this.renderList && (WF.renderList = this.renderList.slice(0)), WF
      }
      serialize() {
        if (!this.name) return null;
        const FF = super.serialize();
        if (FF.renderTargetSize = this.getRenderSize(), FF.renderList = [], this.renderList)
          for (let WF = 0; WF < this.renderList.length; WF++) FF.renderList.push(this.renderList[WF].id);
        return FF
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.OWF().sC().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const FF = this.OWF();
        if (!FF) return;
        let WF = FF.customRenderTargets.indexOf(this);
        WF >= 0 && FF.customRenderTargets.splice(WF, 1);
        for (const SF of FF.cameras) WF = SF.customRenderTargets.indexOf(this), WF >= 0 && SF.customRenderTargets.splice(WF, 1);
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
    tW.REFRESHRATE_RENDER_ONCE = rW.REFRESHRATE_RENDER_ONCE, tW.REFRESHRATE_RENDER_ONEVERYFRAME = rW.REFRESHRATE_RENDER_ONEVERYFRAME, tW.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = rW.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(tW.prototype, "noPrePassRenderer") || Object.defineProperty(tW.prototype, "noPrePassRenderer", (0, gW.f)("RenderTargetTexture", "noPrePassRenderer"))
  },
  39645: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => PF,
      e: () => RF
    });
    var CF = SF(38109),
      AF = SF(36545),
      uF = SF(35647),
      hF = SF(37816),
      bW = SF(38301);
    const dF = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class PF {
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dF;
        this._fullscreenViewport = new AF.e(0, 0, 1, 1);
        const SF = WF.positions ?? dF.positions,
          uF = WF.indices ?? dF.indices;
        this.engine = FF, this._vertexBuffers = {
          [CF.k.PositionKind]: new CF.k(FF, SF, CF.k.PositionKind, !1, !1, 2)
        }, this._indexBuffer = FF.createIndexBuffer(uF), this._indexBufferLength = uF.length, this._onContextRestoredObserver = FF.onContextRestoredObservable.add((() => {
          this._indexBuffer = FF.createIndexBuffer(uF);
          for (const FF in this._vertexBuffers) {
            this._vertexBuffers[FF]._rebuild()
          }
        }))
      }
      setViewport() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.engine.setViewport(FF)
      }
      bindBuffers(FF) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, FF)
      }
      applyEffectWrapper(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = WF, this.engine.stencilState.stencilTest = SF, this.engine.enableEffect(FF.drawWrapper), this.bindBuffers(FF.effect), FF.onApplyObservable.notifyObservers({})
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
      _isRenderTargetTexture(FF) {
        return void 0 !== FF.renderTarget
      }
      render(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!FF.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const SF = null === WF ? null : this._isRenderTargetTexture(WF) ? WF.renderTarget : WF;
        SF && this.engine.bindFramebuffer(SF), this.applyEffectWrapper(FF), this.draw(), SF && this.engine.unBindFramebuffer(SF), this.restoreStates()
      }
      dispose() {
        const FF = this._vertexBuffers[CF.k.PositionKind];
        FF && (FF.dispose(), delete this._vertexBuffers[CF.k.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class RF {
      static RegisterShaderCodeProcessing(FF, WF) {
        WF ? RF._CustomShaderCodeProcessing[FF ?? ""] = WF : delete RF._CustomShaderCodeProcessing[FF ?? ""]
      }
      static _GetShaderCodeProcessing(FF) {
        return RF._CustomShaderCodeProcessing[FF] ?? RF._CustomShaderCodeProcessing[""]
      }
      get name() {
        return this.options.name
      }
      set name(FF) {
        this.options.name = FF
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
      set effect(FF) {
        this._drawWrapper.effect = FF
      }
      constructor(FF) {
        this.alphaMode = 0, this.onEffectCreatedObservable = new uF.b(void 0, !0), this.onApplyObservable = new uF.b, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
          ...FF,
          name: FF.name || "effectWrapper",
          engine: FF.engine,
          uniforms: FF.uniforms || FF.uniformNames || [],
          uniformNames: void 0,
          samplers: FF.samplers || FF.samplerNames || [],
          samplerNames: void 0,
          attributeNames: FF.attributeNames || ["position"],
          uniformBuffers: FF.uniformBuffers || [],
          defines: FF.defines || "",
          useShaderStore: FF.useShaderStore || !1,
          vertexUrl: FF.vertexUrl || FF.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: FF.fragmentShader || "pass",
          indexParameters: FF.indexParameters,
          blockCompilation: FF.blockCompilation || !1,
          shaderLanguage: FF.shaderLanguage || 0,
          onCompiled: FF.onCompiled || void 0,
          extraInitializations: FF.extraInitializations || void 0,
          extraInitializationsAsync: FF.extraInitializationsAsync || void 0,
          useAsPostProcess: FF.useAsPostProcess ?? !1,
          allowEmptySourceTexture: FF.allowEmptySourceTexture ?? !1
        }, this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), FF.vertexUrl || FF.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add((() => {
          this.effect.setFloat2("scale", 1, 1)
        }))), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add((() => {
          this.bind()
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.onContextRestoredObservable.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new bW.e(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const WF = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, WF, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          CF = arguments.length > 2 ? arguments[2] : void 0,
          AF = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, AF && this._importPromises.push(...AF);
        const uF = this.options.engine.isWebGPU && !RF.ForceGLSL;
        this._gatherImports(uF, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(uF && this._webGPUReady ? SF.e(336).then((() => SF(59144))) : SF.e(325).then((() => SF(58906)))), void 0 !== CF && CF(uF, this._importPromises), uF && this._webGPUReady && (this.options.shaderLanguage = 1), FF || this.updateEffect(WF)
      }
      updateEffect() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          CF = arguments.length > 3 ? arguments[3] : void 0,
          AF = arguments.length > 4 ? arguments[4] : void 0,
          uF = arguments.length > 5 ? arguments[5] : void 0,
          bW = arguments.length > 6 ? arguments[6] : void 0,
          dF = arguments.length > 7 ? arguments[7] : void 0;
        const PF = RF._GetShaderCodeProcessing(this.name);
        if (PF?.defineCustomBindings) {
          const CF = WF?.slice() ?? [];
          CF.push(...this.options.uniforms);
          const AF = SF?.slice() ?? [];
          AF.push(...this.options.samplers), FF = PF.defineCustomBindings(this.name, FF, CF, AF), WF = CF, SF = AF
        }
        this.options.defines = FF || "";
        const iW = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let eF;
        eF = this.options.extraInitializationsAsync ? async () => {
          await (iW?.()), await this.options.extraInitializationsAsync()
        }: iW, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: bW ?? this._shaderPath.vertex,
          fragment: dF ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: WF || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: SF || this.options.samplers,
          defines: null !== FF ? FF : "",
          fallbacks: null,
          onCompiled: AF ?? this.options.onCompiled,
          onError: uF ?? null,
          indexParameters: CF || this.options.indexParameters,
          processCodeAfterIncludes: PF?.processCodeAfterIncludes ? (FF, WF) => PF.processCodeAfterIncludes(this.name, FF, WF) : null,
          processFinalCode: PF?.processFinalCode ? (FF, WF) => PF.processFinalCode(this.name, FF, WF) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: eF
        }, this.options.engine) : this._drawWrapper.effect = new hF.c(this._shaderPath, this.options.attributeNames, WF || this.options.uniforms, SF || this.options.samplerNames, this.options.engine, FF, void 0, AF || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, eF), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !FF && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), RF._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.sC().onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    RF.ForceGLSL = !1, RF._CustomShaderCodeProcessing = {}
  },
  39669: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      Dispose: () => TF,
      DumpData: () => tW,
      DumpDataAsync: () => gW,
      DumpFramebuffer: () => rW,
      DumpTools: () => aW,
      EncodeImageAsync: () => QF,
      RegisterDumpTools: () => qW
    });
    var CF = SF(37972),
      AF = SF(39645),
      uF = SF(38065),
      hF = SF(35650),
      bW = SF(35639),
      dF = SF(37076),
      PF = SF(38027),
      RF = SF(37974);
    let iW = null;
    async function eF() {
      return iW || (iW = async function() {
        const FF = bW.e.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        FF instanceof OffscreenCanvas && dF.b.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: WF
        } = await Promise.resolve().then((() => SF(37809)));
        if (!WF.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const CF = new WF(FF, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        bW.e.Instances.pop(), bW.e.OnEnginesDisposedObservable.add((FF => {
          CF && FF !== CF && !CF.ZdF && 0 === bW.e.Instances.length && TF()
        })), CF.getCaps().parallelShaderCompile = void 0;
        const uF = new AF.c(CF),
          {
            passPixelShader: hF
          } = await SF.e(344).then((() => SF(59192))),
          PF = new AF.e({
            engine: CF,
            name: hF.name,
            fragmentShader: hF.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: FF,
          dumpEngine: {
            engine: CF,
            renderer: uF,
            wrapper: PF
          }
        }
      }()), await iW
    }
    let EF = (() => {
      var FF;
      let WF, SF = [];
      return FF = class {
        static async EncodeImageAsync(FF, WF, SF, CF, AF, hF) {
          const bW = await eF(),
            dF = bW.dumpEngine;
          dF.engine.setSize(WF, SF, !0);
          const PF = dF.engine.createRawTexture(FF, WF, SF, 5, !1, !AF, 1);
          return dF.renderer.setViewport(), dF.renderer.applyEffectWrapper(dF.wrapper), dF.wrapper.effect._bindTexture("textureSampler", PF), dF.renderer.draw(), PF.dispose(), await new Promise(((FF, WF) => {
            uF.h.ToBlob(bW.canvas, (SF => {
              SF ? FF(SF) : WF(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), CF, hF)
          }))
        }
      }, (() => {
        const AF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        WF = [RF.k], (0, CF.j)(FF, null, WF, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: FF => "EncodeImageAsync" in FF,
            get: FF => FF.EncodeImageAsync
          },
          metadata: AF
        }, null, SF), AF && Object.defineProperty(FF, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: AF
        }), (0, CF.k)(FF, SF)
      })(), FF
    })();
    const QF = EF.EncodeImageAsync;
    async function rW(FF, WF, SF, CF) {
      let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        uF = arguments.length > 5 ? arguments[5] : void 0,
        hF = arguments.length > 6 ? arguments[6] : void 0;
      const bW = await SF.readPixels(0, 0, FF, WF);
      tW(FF, WF, new Uint8Array(bW.buffer), CF, AF, uF, !0, void 0, hF)
    }
    async function gW(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        AF = arguments.length > 4 ? arguments[4] : void 0,
        bW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        RF = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        iW = arguments.length > 7 ? arguments[7] : void 0;
      if (SF instanceof Float32Array) {
        const FF = new Uint8Array(SF.length);
        let WF = SF.length;
        for (; WF--;) {
          const CF = SF[WF];
          FF[WF] = Math.round(255 * (0, hF.Clamp)(CF))
        }
        SF = FF
      }
      const eF = await EF.EncodeImageAsync(SF, FF, WF, CF, bW, iW);
      void 0 !== AF && uF.h.DownloadBlob(eF, AF), eF.type !== CF && dF.b.Warn(`DumpData: The requested mimeType '${CF}' is not supported. The result has mimeType '${eF.type}' instead.`);
      const QF = await eF.arrayBuffer();
      return RF ? QF : `data:${CF};base64,${(0,PF.j)(QF)}`
    }

    function tW(FF, WF, SF, CF) {
      let AF = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== AF || CF || (AF = ""), gW(FF, WF, SF, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", AF, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((FF => {
        CF && CF(FF)
      }))
    }

    function TF() {
      iW && (iW?.then((FF => {
        FF.canvas instanceof HTMLCanvasElement && FF.canvas.remove(), FF.dumpEngine && (FF.dumpEngine.engine.dispose(), FF.dumpEngine.renderer.dispose(), FF.dumpEngine.wrapper.dispose())
      })), iW = null)
    }
    const aW = {
      DumpData: tW,
      DumpDataAsync: gW,
      DumpFramebuffer: rW,
      Dispose: TF
    };
    let kW = !1;

    function qW() {
      if (kW) return;
      kW = !0;
      uF.h.DumpData = tW, uF.h.DumpDataAsync = gW, uF.h.DumpFramebuffer = rW
    }
  },
  39657: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => EF,
      h: () => QF,
      j: () => rW
    });
    var CF = SF(38448),
      AF = SF(39659),
      uF = SF(37972),
      hF = SF(39636),
      bW = SF(37994),
      dF = SF(39665),
      PF = SF(37974);
    class RF extends hF.b {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(FF, WF) {
        let SF = arguments.length > 4 ? arguments[4] : void 0;
        const CF = {
          size: "number" === typeof WF ? WF : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: SF,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...WF
        };
        super(FF, dF.h.FragmentUrl, {
          effectWrapper: "number" !== typeof WF && WF.effectWrapper ? void 0 : new dF.h(FF, SF, CF),
          ...CF
        })
      }
      static _Parse(FF, WF, SF, CF) {
        return bW.e.Parse((() => new RF(FF.name, FF.options, WF, FF.renderTargetSamplingMode, FF._engine, FF.reusable)), FF, SF, CF)
      }
    }(() => {
      var FF;
      let WF, SF = hF.b,
        CF = [];
      FF = class extends SF {
        get face() {
          return this._effectWrapper.face
        }
        set face(FF) {
          this._effectWrapper.face = FF
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(FF, WF) {
          let SF = arguments.length > 4 ? arguments[4] : void 0;
          const AF = {
            size: "number" === typeof WF ? WF : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: SF,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...WF
          };
          super(FF, dF.h.FragmentUrl, {
            effectWrapper: "number" !== typeof WF && WF.effectWrapper ? void 0 : new dF.e(FF, SF, AF),
            ...AF
          }), (0, uF.k)(this, CF)
        }
        static _Parse(WF, SF, CF, AF) {
          return bW.e.Parse((() => new FF(WF.name, WF.options, SF, WF.renderTargetSamplingMode, WF._engine, WF.reusable)), WF, CF, AF)
        }
      }, (() => {
        const AF = "function" === typeof Symbol && Symbol.metadata ? Object.create(SF[Symbol.metadata] ?? null) : void 0;
        WF = [(0, PF.H)()], (0, uF.j)(FF, null, WF, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: FF => "face" in FF,
            get: FF => FF.face
          },
          metadata: AF
        }, null, CF), AF && Object.defineProperty(FF, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: AF
        })
      })()
    })();
    var iW = SF(35650),
      eF = SF(38034);

    function EF(FF, WF, SF, CF, AF, uF, bW, dF) {
      const PF = WF.sC();
      return WF.isReady = !1, AF = AF ?? WF.samplingMode, CF = CF ?? WF.type, uF = uF ?? WF.format, bW = bW ?? WF.width, dF = dF ?? WF.height, -1 === CF && (CF = 0), new Promise((RF => {
        const iW = new hF.b("postprocess", FF, null, null, 1, null, AF, PF, !1, void 0, CF, void 0, null, !1, uF);
        iW.externalTextureSamplerBinding = !0;
        const eF = PF.createRenderTargetTexture({
          width: bW,
          height: dF
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: AF,
          type: CF,
          format: uF
        });
        iW.onEffectCreatedObservable.addOnce((FF => {
          FF.executeWhenCompiled((() => {
            iW.onApply = FF => {
              FF._bindTexture("textureSampler", WF), FF.setFloat2("scale", 1, 1)
            }, SF.postProcessManager.directRender([iW], eF, !0), PF.restoreDefaultFramebuffer(), PF._releaseTexture(WF), iW && iW.dispose(), eF._swapAndDie(WF), WF.type = CF, WF.format = 5, WF.isReady = !0, RF(WF)
          }))
        }))
      }))
    }
    async function QF(FF, WF, uF) {
      let bW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        dF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        PF = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        RF = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(FF) {
        if (FF.isReady()) return;
        if (FF.loadingError) throw new Error(FF.errorObject?.message || `Texture ${FF.name} errored while loading.`);
        const WF = FF.onLoadObservable;
        if (WF) return await new Promise((FF => WF.addOnce((() => FF()))));
        const SF = FF._texture?.onLoadedObservable;
        if (SF) return await new Promise((FF => SF.addOnce((() => FF()))));
        throw new Error(`Cannot determine readiness of texture ${FF.name}.`)
      }(FF);
      const eF = FF.getInternalTexture(),
        EF = FF.is3D || !!eF?.is3D,
        {
          width: QF,
          height: rW
        } = FF.getSize(),
        gW = WF ?? QF,
        tW = uF ?? rW;
      if (PF || EF || function(FF) {
          switch (FF) {
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
        }(FF.textureFormat) || gW !== QF || tW !== rW) {
        if (FF.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${PF?"RTT":"compression"} is not supported.`);
        return await async function(FF, WF, uF, bW, dF) {
          let PF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const RF = FF.OWF(),
            iW = RF.sC(),
            eF = FF.getInternalTexture(),
            EF = FF.is3D || !!eF?.is3D;
          let QF;
          if (iW.isWebGPU ? EF ? await SF.e(340).then((() => SF(59173))) : FF.isCube ? await SF.e(341).then((() => SF(59177))) : await SF.e(342).then((() => SF(59184))) : EF ? await SF.e(337).then((() => SF(59159))) : FF.isCube ? await SF.e(338).then((() => SF(59162))) : await SF.e(339).then((() => SF(59164))), EF) QF = new hF.b("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: CF.i.NEAREST_NEAREST_MIPNEAREST,
            engine: iW,
            shaderLanguage: iW.isWebGPU ? 1 : 0
          });
          else if (FF.isCube) {
            const FF = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            QF = new hF.b("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: CF.i.NEAREST_NEAREST_MIPNEAREST,
              engine: iW,
              defines: FF[bW],
              shaderLanguage: iW.isWebGPU ? 1 : 0
            })
          } else QF = new hF.b("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: CF.i.NEAREST_NEAREST_MIPNEAREST,
            engine: iW,
            shaderLanguage: iW.isWebGPU ? 1 : 0
          });
          await new Promise((FF => {
            QF.onEffectCreatedObservable.addOnce((WF => {
              WF.executeWhenCompiled((() => {
                FF(0)
              }))
            }))
          }));
          const rW = new AF.c("temp", {
            width: WF,
            height: uF
          }, RF, !1);
          QF.onApply = function(WF) {
            WF.setTexture("textureSampler", FF), WF.setFloat("lod", dF), WF.setInt("gamma", FF.gammaSpace ? 1 : 0), EF && WF.setFloat("slice", PF)
          };
          try {
            if (rW.renderTarget && eF) {
              const SF = eF.samplingMode;
              0 !== dF ? FF.updateSamplingMode(CF.i.NEAREST_NEAREST_MIPNEAREST) : FF.updateSamplingMode(CF.i.NEAREST_NEAREST), RF.postProcessManager.directRender([QF], rW.renderTarget, !0), FF.updateSamplingMode(SF);
              const AF = await iW.readPixels(0, 0, WF, uF),
                hF = new Uint8Array(AF.buffer, AF.byteOffset, AF.byteLength);
              return iW.unBindFramebuffer(rW.renderTarget), hF
            }
            throw Error("Render to texture failed.")
          } finally {
            rW.dispose(), QF.dispose()
          }
        }(FF, gW, tW, bW, dF, RF)
      }
      let TF = await FF.readPixels(bW, dF);
      if (!TF) throw new Error(`Failed to read pixels from texture ${FF.name}.`);
      if (TF instanceof Float32Array) {
        const FF = new Uint8Array(TF.length);
        let WF = TF.length;
        for (; WF--;) {
          const SF = TF[WF];
          FF[WF] = Math.round(255 * (0, iW.Clamp)(SF))
        }
        TF = FF
      }
      const aW = gW * tW,
        kW = 4 * aW;
      if (TF.length !== kW) {
        const FF = 0 === aW ? 0 : TF.length / aW;
        if (1 === FF || 2 === FF || 3 === FF) {
          const WF = new Uint8Array(kW);
          for (let SF = 0, CF = 0, AF = 0; SF < aW; SF++, AF += 4) {
            const SF = TF[CF++];
            if (1 === FF) {
              WF[AF] = SF, WF[AF + 1] = SF, WF[AF + 2] = SF, WF[AF + 3] = 255;
              continue
            }
            const uF = TF[CF++];
            2 !== FF ? (WF[AF] = SF, WF[AF + 1] = uF, WF[AF + 2] = TF[CF++], WF[AF + 3] = 255) : (WF[AF] = SF, WF[AF + 1] = uF, WF[AF + 2] = 0, WF[AF + 3] = 255)
          }
          return WF
        }
      }
      return TF
    }
    const rW = {
      CreateResizedCopy: function(FF, WF, SF) {
        let uF = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const hF = FF.OWF(),
          bW = hF.sC(),
          dF = new AF.c("resized" + FF.name, {
            width: WF,
            height: SF
          }, hF, !FF.noMipmap, !0, FF._texture.type, !1, FF.samplingMode, !1);
        dF.wrapU = FF.wrapU, dF.wrapV = FF.wrapV, dF.uOffset = FF.uOffset, dF.vOffset = FF.vOffset, dF.uScale = FF.uScale, dF.vScale = FF.vScale, dF.uAng = FF.uAng, dF.vAng = FF.vAng, dF.wAng = FF.wAng, dF.coordinatesIndex = FF.coordinatesIndex, dF.level = FF.level, dF.anisotropicFilteringLevel = FF.anisotropicFilteringLevel, dF._texture.isReady = !1, FF.wrapU = CF.i.CLAMP_ADDRESSMODE, FF.wrapV = CF.i.CLAMP_ADDRESSMODE;
        const PF = new RF("pass", 1, null, uF ? CF.i.BILINEAR_SAMPLINGMODE : CF.i.NEAREST_SAMPLINGMODE, bW, !1, 0);
        return PF.externalTextureSamplerBinding = !0, PF.onEffectCreatedObservable.addOnce((WF => {
          WF.executeWhenCompiled((() => {
            PF.onApply = function(WF) {
              WF.setTexture("textureSampler", FF)
            };
            const WF = dF.renderTarget;
            WF && (hF.postProcessManager.directRender([PF], WF), bW.unBindFramebuffer(WF), dF.disposeFramebufferObjects(), PF.dispose(), dF.getInternalTexture().isReady = !0)
          }))
        })), dF
      },
      ApplyPostProcess: EF,
      ToHalfFloat: eF.h,
      FromHalfFloat: eF.e,
      GetTextureDataAsync: QF
    }
  },
  39636: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => QF
    });
    var CF = SF(37972),
      AF = SF(38081),
      uF = SF(35647),
      hF = SF(35623),
      bW = SF(37816),
      dF = SF(37974),
      PF = SF(37994),
      RF = SF(35660),
      iW = SF(37867),
      eF = SF(37900),
      EF = SF(39645);
    let QF = (() => {
        var FF;
        let WF, bW, iW, QF, rW, tW, TF, aW, kW, qW, VF, NF, DF, LF, mW, OF, xW = [],
          ZF = [],
          oF = [],
          YF = [],
          MF = [],
          cW = [],
          GF = [],
          zW = [],
          IF = [],
          fF = [],
          yW = [],
          sF = [],
          nF = [],
          HF = [],
          KF = [],
          wF = [],
          XF = [],
          UF = [],
          BF = [],
          jW = [],
          vW = [],
          JF = [],
          pF = [],
          lF = [],
          FW = [],
          WW = [],
          SW = [],
          CW = [],
          AW = [];
        return FF = class {
          static get ForceGLSL() {
            return EF.e.ForceGLSL
          }
          static set ForceGLSL(FF) {
            EF.e.ForceGLSL = FF
          }
          static RegisterShaderCodeProcessing(FF, WF) {
            EF.e.RegisterShaderCodeProcessing(FF, WF)
          }
          get name() {
            return this._effectWrapper.name
          }
          set name(FF) {
            this._effectWrapper.name = FF
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode
          }
          set alphaMode(FF) {
            this._effectWrapper.alphaMode = FF
          }
          get samples() {
            return this._samples
          }
          set samples(FF) {
            this._samples = Math.min(FF, this._engine.getCaps().maxMSAASamples), this._textures.forEach((FF => {
              FF.setSamples(this._samples)
            }))
          }
          get shaderLanguage() {
            return this._shaderLanguage
          }
          getEffectName() {
            return this._fragmentUrl
          }
          set onActivate(FF) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), FF && (this._onActivateObserver = this.onActivateObservable.add(FF))
          }
          set onSizeChanged(FF) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(FF)
          }
          set onApply(FF) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(FF)
          }
          set onBeforeRender(FF) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(FF)
          }
          set onAfterRender(FF) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(FF)
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd]
          }
          set inputTexture(FF) {
            this._forcedOutputTexture = FF
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty())
          }
          getCamera() {
            return this.QAF
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.FhF(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(WF, SF, bW, dF, PF, RF) {
            let iW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              eF = arguments.length > 7 ? arguments[7] : void 0,
              QF = arguments.length > 8 ? arguments[8] : void 0,
              rW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              tW = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              TF = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              aW = arguments.length > 12 ? arguments[12] : void 0,
              kW = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              qW = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              VF = arguments.length > 15 ? arguments[15] : void 0,
              NF = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, CF.k)(this, xW), null), this.uniqueId = (0, CF.k)(this, ZF, void 0), this.width = ((0, CF.k)(this, oF), (0, CF.k)(this, YF, -1)), this.height = ((0, CF.k)(this, MF), (0, CF.k)(this, cW, -1)), this.nodeMaterialSource = ((0, CF.k)(this, GF), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, CF.k)(this, zW, void 0), this.clearColor = ((0, CF.k)(this, IF), (0, CF.k)(this, fF, void 0)), this.autoClear = ((0, CF.k)(this, yW), (0, CF.k)(this, sF, !0)), this.forceAutoClearInAlphaMode = ((0, CF.k)(this, nF), (0, CF.k)(this, HF, !1)), this.alphaConstants = ((0, CF.k)(this, KF), (0, CF.k)(this, wF, void 0)), this.animations = ((0, CF.k)(this, XF), []), this.enablePixelPerfectMode = (0, CF.k)(this, UF, !1), this.forceFullscreenViewport = ((0, CF.k)(this, BF), (0, CF.k)(this, jW, !0)), this.inspectableCustomProperties = (0, CF.k)(this, vW), this.scaleMode = (0, CF.k)(this, JF, 1), this.alwaysForcePOT = ((0, CF.k)(this, pF), (0, CF.k)(this, lF, !1)), this._samples = ((0, CF.k)(this, FW), (0, CF.k)(this, WW, 1)), this.adaptScaleToCurrentViewport = ((0, CF.k)(this, SW), (0, CF.k)(this, CW, !1)), this.doNotSerialize = ((0, CF.k)(this, AW), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new AF.f(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new hF.n(1, 1), this._texelSize = hF.n.Zero(), this.onActivateObservable = new uF.b, this.onSizeChangedObservable = new uF.b, this.onApplyObservable = new uF.b, this.onBeforeRenderObservable = new uF.b, this.onAfterRenderObservable = new uF.b, this.xSF = new uF.b, gW();
            let DF, LF = 1,
              mW = null;
            if (bW && !Array.isArray(bW)) {
              const FF = bW;
              bW = FF.uniforms ?? null, dF = FF.samplers ?? null, LF = FF.size ?? 1, RF = FF.camera ?? null, iW = FF.samplingMode ?? 1, eF = FF.engine, QF = FF.reusable, rW = Array.isArray(FF.defines) ? FF.defines.join("\n") : FF.defines ?? null, tW = FF.textureType ?? 0, TF = FF.vertexUrl ?? "postprocess", aW = FF.indexParameters, kW = FF.blockCompilation ?? !1, qW = FF.textureFormat ?? 5, VF = FF.shaderLanguage ?? 0, mW = FF.uniformBuffers ?? null, NF = FF.extraInitializations, DF = FF.effectWrapper
            } else PF && (LF = "number" === typeof PF ? PF : {
              width: PF.width,
              height: PF.height
            });
            if (this._useExistingThinPostProcess = !!DF, this._effectWrapper = DF ?? new EF.e({
                name: WF,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: SF,
                engine: eF || RF?.OWF().sC(),
                uniforms: bW,
                samplers: dF,
                uniformBuffers: mW,
                defines: rW,
                vertexUrl: TF,
                indexParameters: aW,
                blockCompilation: !0,
                shaderLanguage: VF,
                extraInitializations: void 0
              }), this.name = WF, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != RF ? (this.QAF = RF, this._scene = RF.OWF(), RF.attachPostProcess(this), this._engine = this._scene.sC(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : eF && (this._engine = eF, this._engine.postProcesses.push(this)), this._options = LF, this.renderTargetSamplingMode = iW || 1, this._reusable = QF || !1, this._textureType = tW, this._textureFormat = qW, this._shaderLanguage = VF || 0, this._samplers = dF || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = SF, this._vertexUrl = TF, this._parameters = bW || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = mW || [], this._indexParameters = aW, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const WF = [];
              this._gatherImports(this._engine.isWebGPU && !FF.ForceGLSL, WF), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(kW, rW, NF, WF)
            }
          }
          _gatherImports() {
            let FF = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? FF.push(Promise.all([SF.e(336).then((() => SF(59144)))])) : FF.push(Promise.all([SF.e(325).then((() => SF(58906)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          sC() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(FF) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = FF, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new AF.f(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              CF = arguments.length > 3 ? arguments[3] : void 0,
              AF = arguments.length > 4 ? arguments[4] : void 0,
              uF = arguments.length > 5 ? arguments[5] : void 0,
              hF = arguments.length > 6 ? arguments[6] : void 0,
              bW = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(FF, WF, SF, CF, AF, uF, hF, bW), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(FF, WF) {
            let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let AF = 0; AF < this._textureCache.length; AF++)
              if (this._textureCache[AF].texture.width === FF.width && this._textureCache[AF].texture.height === FF.height && this._textureCache[AF].postProcessChannel === SF && this._textureCache[AF].texture._generateDepthBuffer === WF.generateDepthBuffer && this._textureCache[AF].texture.samples === WF.samples) return this._textureCache[AF].texture;
            const CF = this._engine.createRenderTargetTexture(FF, WF);
            return this._textureCache.push({
              texture: CF,
              postProcessChannel: SF,
              lastUsedRenderId: -1
            }), CF
          }
          _flushTextureCache() {
            const FF = this._renderId;
            for (let WF = this._textureCache.length - 1; WF >= 0; WF--)
              if (FF - this._textureCache[WF].lastUsedRenderId > 100) {
                let FF = !1;
                for (let SF = 0; SF < this._textures.length; SF++)
                  if (this._textures.data[SF] === this._textureCache[WF].texture) {
                    FF = !0;
                    break
                  } FF || (this._textureCache[WF].texture.dispose(), this._textureCache.splice(WF, 1))
              }
          }
          resize(FF, WF) {
            let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              AF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = FF, this.height = WF;
            let uF = null;
            if (SF)
              for (let dF = 0; dF < SF._postProcesses.length; dF++)
                if (null !== SF._postProcesses[dF]) {
                  uF = SF._postProcesses[dF];
                  break
                } const hF = {
                width: this.width,
                height: this.height
              },
              bW = {
                generateMipMaps: CF,
                generateDepthBuffer: AF || uF === this,
                generateStencilBuffer: (AF || uF === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(hF, bW, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(hF, bW, 1)), this._texelSize.FhF(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let FF;
            if (this._shareOutputWithPostProcess) FF = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) FF = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let WF;
              FF = this.inputTexture;
              for (let SF = 0; SF < this._textureCache.length; SF++)
                if (this._textureCache[SF].texture === FF) {
                  WF = this._textureCache[SF];
                  break
                } WF && (WF.lastUsedRenderId = this._renderId)
            }
            return FF
          }
          activate(FF) {
            let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              SF = arguments.length > 2 ? arguments[2] : void 0;
            const CF = null === FF || void 0 !== FF.cameraRigMode ? FF || this.QAF : null,
              AF = CF?.OWF() ?? FF,
              uF = AF.sC(),
              hF = uF.getCaps().maxTextureSize,
              bW = (WF ? WF.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              dF = (WF ? WF.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let PF = this._options.width || bW,
              RF = this._options.height || dF;
            const iW = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let EF = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const FF = uF.currentViewport;
                FF && (PF *= FF.width, RF *= FF.height)
              }(iW || this.alwaysForcePOT) && (this._options.width || (PF = uF.needPOTTextures ? (0, eF.e)(PF, hF, this.scaleMode) : PF), this._options.height || (RF = uF.needPOTTextures ? (0, eF.e)(RF, hF, this.scaleMode) : RF)), this.width === PF && this.height === RF && (EF = this._getTarget()) || this.resize(PF, RF, CF, iW, SF), this._textures.forEach((FF => {
                FF.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(FF, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return EF || (EF = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.FhF(bW / PF, dF / RF), this._engine.bindFramebuffer(EF, 0, bW, dF, this.forceFullscreenViewport)) : (this._scaleRatio.FhF(1, 1), this._engine.bindFramebuffer(EF, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(CF), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : AF.clearColor, AF._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), EF
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
            let FF;
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.sC().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), FF = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", FF?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
          }
          _disposeTextureCache() {
            for (let FF = this._textureCache.length - 1; FF >= 0; FF--) this._textureCache[FF].texture.dispose();
            this._textureCache.length = 0
          }
          setPrePassRenderer(FF) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = FF.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
          }
          dispose(FF) {
            let WF;
            if (FF = FF || this.QAF, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (WF = this._parentContainer.postProcesses.indexOf(this), WF > -1 && this._parentContainer.postProcesses.splice(WF, 1), this._parentContainer = null), WF = this._engine.postProcesses.indexOf(this), -1 !== WF && this._engine.postProcesses.splice(WF, 1), this.xSF.notifyObservers(), FF) {
              if (FF.detachPostProcess(this), WF = FF._postProcesses.indexOf(this), 0 === WF && FF._postProcesses.length > 0) {
                const FF = this.QAF._getFirstPostProcess();
                FF && FF.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const FF = PF.e.Serialize(this),
              WF = this.getCamera() || this._scene && this._scene.activeCamera;
            return FF.customType = "BABYLON." + this.getClassName(), FF.cameraId = WF ? WF.id : null, FF.reusable = this._reusable, FF.textureType = this._textureType, FF.fragmentUrl = this._fragmentUrl, FF.parameters = this._parameters, FF.samplers = this._samplers, FF.uniformBuffers = this._uniformBuffers, FF.options = this._options, FF.defines = this._postProcessDefines, FF.textureFormat = this._textureFormat, FF.vertexUrl = this._vertexUrl, FF.indexParameters = this._indexParameters, FF
          }
          clone() {
            const WF = this.serialize();
            WF._engine = this._engine, WF.cameraId = null;
            const SF = FF.Parse(WF, this._scene, "");
            return SF ? (SF.onActivateObservable = this.onActivateObservable.clone(), SF.onSizeChangedObservable = this.onSizeChangedObservable.clone(), SF.onApplyObservable = this.onApplyObservable.clone(), SF.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), SF.onAfterRenderObservable = this.onAfterRenderObservable.clone(), SF._prePassEffectConfiguration = this._prePassEffectConfiguration, SF) : null
          }
          static Parse(FF, WF, SF) {
            const CF = (0, RF.c)(FF.customType);
            if (!CF || !CF._Parse) return null;
            const AF = WF ? WF.getCameraById(FF.cameraId) : null;
            return CF._Parse(FF, AF, WF, SF)
          }
          static _Parse(WF, SF, CF, AF) {
            return PF.e.Parse((() => new FF(WF.name, WF.fragmentUrl, WF.parameters, WF.samplers, WF.options, SF, WF.renderTargetSamplingMode, WF._engine, WF.reusable, WF.defines, WF.textureType, WF.vertexUrl, WF.indexParameters, !1, WF.textureFormat)), WF, CF, AF)
          }
        }, (() => {
          const SF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          WF = [(0, dF.H)()], bW = [(0, dF.H)()], iW = [(0, dF.H)()], QF = [(0, dF.H)()], rW = [(0, dF.H)()], tW = [(0, dF.s)()], TF = [(0, dF.H)()], aW = [(0, dF.H)()], kW = [(0, dF.H)()], qW = [(0, dF.H)()], VF = [(0, dF.H)()], NF = [(0, dF.H)()], DF = [(0, dF.H)()], LF = [(0, dF.H)()], mW = [(0, dF.H)("samples")], OF = [(0, dF.H)()], (0, CF.j)(FF, null, bW, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: FF => "name" in FF,
              get: FF => FF.name
            },
            metadata: SF
          }, null, xW), (0, CF.j)(FF, null, kW, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: FF => "alphaMode" in FF,
              get: FF => FF.alphaMode
            },
            metadata: SF
          }, null, xW), (0, CF.j)(null, null, WF, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: FF => "uniqueId" in FF,
              get: FF => FF.uniqueId,
              set: (FF, WF) => {
                FF.uniqueId = WF
              }
            },
            metadata: SF
          }, ZF, oF), (0, CF.j)(null, null, iW, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: FF => "width" in FF,
              get: FF => FF.width,
              set: (FF, WF) => {
                FF.width = WF
              }
            },
            metadata: SF
          }, YF, MF), (0, CF.j)(null, null, QF, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: FF => "height" in FF,
              get: FF => FF.height,
              set: (FF, WF) => {
                FF.height = WF
              }
            },
            metadata: SF
          }, cW, GF), (0, CF.j)(null, null, rW, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: FF => "renderTargetSamplingMode" in FF,
              get: FF => FF.renderTargetSamplingMode,
              set: (FF, WF) => {
                FF.renderTargetSamplingMode = WF
              }
            },
            metadata: SF
          }, zW, IF), (0, CF.j)(null, null, tW, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: FF => "clearColor" in FF,
              get: FF => FF.clearColor,
              set: (FF, WF) => {
                FF.clearColor = WF
              }
            },
            metadata: SF
          }, fF, yW), (0, CF.j)(null, null, TF, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: FF => "autoClear" in FF,
              get: FF => FF.autoClear,
              set: (FF, WF) => {
                FF.autoClear = WF
              }
            },
            metadata: SF
          }, sF, nF), (0, CF.j)(null, null, aW, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: FF => "forceAutoClearInAlphaMode" in FF,
              get: FF => FF.forceAutoClearInAlphaMode,
              set: (FF, WF) => {
                FF.forceAutoClearInAlphaMode = WF
              }
            },
            metadata: SF
          }, HF, KF), (0, CF.j)(null, null, qW, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: FF => "alphaConstants" in FF,
              get: FF => FF.alphaConstants,
              set: (FF, WF) => {
                FF.alphaConstants = WF
              }
            },
            metadata: SF
          }, wF, XF), (0, CF.j)(null, null, VF, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: FF => "enablePixelPerfectMode" in FF,
              get: FF => FF.enablePixelPerfectMode,
              set: (FF, WF) => {
                FF.enablePixelPerfectMode = WF
              }
            },
            metadata: SF
          }, UF, BF), (0, CF.j)(null, null, NF, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: FF => "forceFullscreenViewport" in FF,
              get: FF => FF.forceFullscreenViewport,
              set: (FF, WF) => {
                FF.forceFullscreenViewport = WF
              }
            },
            metadata: SF
          }, jW, vW), (0, CF.j)(null, null, DF, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: FF => "scaleMode" in FF,
              get: FF => FF.scaleMode,
              set: (FF, WF) => {
                FF.scaleMode = WF
              }
            },
            metadata: SF
          }, JF, pF), (0, CF.j)(null, null, LF, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: FF => "alwaysForcePOT" in FF,
              get: FF => FF.alwaysForcePOT,
              set: (FF, WF) => {
                FF.alwaysForcePOT = WF
              }
            },
            metadata: SF
          }, lF, FW), (0, CF.j)(null, null, mW, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: FF => "_samples" in FF,
              get: FF => FF._samples,
              set: (FF, WF) => {
                FF._samples = WF
              }
            },
            metadata: SF
          }, WW, SW), (0, CF.j)(null, null, OF, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: FF => "adaptScaleToCurrentViewport" in FF,
              get: FF => FF.adaptScaleToCurrentViewport,
              set: (FF, WF) => {
                FF.adaptScaleToCurrentViewport = WF
              }
            },
            metadata: SF
          }, CW, AW), SF && Object.defineProperty(FF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SF
          })
        })(), FF
      })(),
      rW = !1;

    function gW() {
      rW || (rW = !0, iW.e.prototype.setTextureFromPostProcess = function(FF, WF, SF) {
        let CF = null;
        WF && (WF._forcedOutputTexture ? CF = WF._forcedOutputTexture : WF._textures.data[WF._currentRenderTextureInd] && (CF = WF._textures.data[WF._currentRenderTextureInd])), this._bindTexture(FF, CF?.texture ?? null, SF)
      }, iW.e.prototype.setTextureFromPostProcessOutput = function(FF, WF, SF) {
        this._bindTexture(FF, WF?._outputTexture?.texture ?? null, SF)
      }, bW.c.prototype.setTextureFromPostProcess = function(FF, WF) {
        this._engine.setTextureFromPostProcess(this._samplers[FF], WF, FF)
      }, bW.c.prototype.setTextureFromPostProcessOutput = function(FF, WF) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[FF], WF, FF)
      }, (0, RF.f)("BABYLON.PostProcess", QF))
    }
  },
  39665: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => hF,
      h: () => uF
    });
    var CF = SF(39645),
      AF = SF(35639);
    class uF extends CF.e {
      _gatherImports(FF, WF) {
        FF ? (this._webGPUReady = !0, WF.push(Promise.all([SF.e(343).then((() => SF(59188)))]))) : WF.push(Promise.all([SF.e(344).then((() => SF(59192)))])), super._gatherImports(FF, WF)
      }
      constructor(FF) {
        let WF = arguments.length > 2 ? arguments[2] : void 0;
        const SF = {
          name: FF,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || AF.e.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: uF.FragmentUrl,
          ...WF
        };
        SF.engine || (SF.engine = AF.e.LastCreatedEngine), super(SF)
      }
    }
    uF.FragmentUrl = "pass";
    class hF extends CF.e {
      _gatherImports(FF, WF) {
        FF ? (this._webGPUReady = !0, WF.push(Promise.all([SF.e(345).then((() => SF(59196)))]))) : WF.push(Promise.all([SF.e(346).then((() => SF(59204)))])), super._gatherImports(FF, WF)
      }
      constructor(FF) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: FF,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || AF.e.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: hF.FragmentUrl,
          defines: "#define POSITIVEX"
        }), this._face = 0
      }
      get face() {
        return this._face
      }
      set face(FF) {
        if (!(FF < 0 || FF > 5)) switch (this._face = FF, this._face) {
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
    hF.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);