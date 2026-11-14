export const id = 281;
export const ids = [281];
export const modules = {
  39273: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => JW
    });
    var wW = MW(35346),
      CW = MW(35324),
      zR = MW(38069),
      AW = MW(37728),
      bR = MW(37520),
      yR = MW(36721),
      NW = MW(37712),
      eW = MW(37739),
      BW = MW(35330),
      tR = MW(37483),
      TW = MW(37693),
      gR = MW(37774);
    class iR {
      get renderList() {
        return this._renderList
      }
      set renderList(WW) {
        this._renderList !== WW && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), WW && (this._unObserveRenderList = (0, BW.g)(WW, this._renderListHasChanged)), this._renderList = WW)
      }
      get disableImageProcessing() {
        return this._disableImageProcessing
      }
      set disableImageProcessing(WW) {
        WW !== this._disableImageProcessing && (this._disableImageProcessing = WW, this._scene.markAllMaterialsAsDirty(64))
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(WW) {
        this._disableDepthPrePass = WW, this._renderingManager.disableDepthPrePass = WW
      }
      get name() {
        return this._name
      }
      set name(WW) {
        if (this._name !== WW) {
          if (this._name = WW, this._sceneUBOs)
            for (let WW = 0; WW < this._sceneUBOs.length; ++WW) this._sceneUBOs[WW].name = `Scene ubo #${WW} for ${this.name}`;
          if (this._scene)
            for (let WW = 0; WW < this._renderPassIds.length; ++WW) {
              const RW = this._renderPassIds[WW];
              this._engine._renderPassNames[RW] = `${this._name}#${WW}`
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
      setMaterialForRendering(WW, RW) {
        let MW;
        MW = Array.isArray(WW) ? WW : [WW];
        for (let wW = 0; wW < MW.length; ++wW)
          for (let WW = 0; WW < this.options.numPasses; ++WW) {
            let CW = MW[wW];
            MW[wW].cMW && (CW = MW[wW].yBW), CW.setMaterialForRenderPass(this._renderPassIds[WW], void 0 !== RW ? Array.isArray(RW) ? RW[WW] : RW : void 0)
          }
      }
      _freezeActiveMeshes(WW) {
        this._freezeActiveMeshesCancel = (0, tR.g)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, WW)
            for (let WW = 0; WW < this._activeMeshes.length; WW++) this._activeMeshes.data[WW]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((WW, RW) => {
          this._freezeActiveMeshesCancel = null, RW ? (yR.b.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), WW && yR.b.Error(WW)) : (yR.b.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), WW && (yR.b.Error(WW), WW.stack && yR.b.Error(WW.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let WW = 0; WW < this._activeMeshes.length; WW++) this._activeMeshes.data[WW]._unFreeze();
        this._isFrozen = !1
      }
      constructor(WW, RW, MW) {
        this._unObserveRenderList = null, this._renderListHasChanged = (WW, RW) => {
          const MW = this._renderList ? this._renderList.length : 0;
          if (0 === RW && MW > 0 || 0 === MW)
            for (const wW of this._scene.meshes) wW._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new wW.c, this.onAfterRenderObservable = new wW.c, this.onBeforeRenderingManagerRenderObservable = new wW.c, this.onAfterRenderingManagerRenderObservable = new wW.c, this.onInitRenderingObservable = new wW.c, this.onFinishRenderingObservable = new wW.c, this.onFastPathRenderObservable = new wW.c, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new TW.i(256), this._activeBoundingBoxes = new TW.i(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = WW, this._scene = RW, this._engine = this._scene.mC(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...MW
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new eW.d(RW), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const WW of this._scene.lights) WW.getTypeID() === gR.c.LIGHTTYPEID_CLUSTERED_CONTAINER && WW.isSupported && WW._updateBatches(this.activeCamera).render()
        })), this._scene.addObjectRenderer(this)
      }
      _releaseRenderPassId() {
        for (let WW = 0; WW < this.options.numPasses; ++WW) this._engine.releaseRenderPassId(this._renderPassIds[WW]);
        this._renderPassIds.length = 0
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let WW = 0; WW < this.options.numPasses; ++WW) this._renderPassIds[WW] = this._engine.createRenderPassId(`${this.name}#${WW}`)
      }
      _createSceneUBO(WW, RW) {
        const MW = this._scene.mC(),
          wW = new NW.b(MW, void 0, RW, WW, void 0, !1);
        return wW.addUniform("viewProjection", 16), RW && wW.addUniform("viewProjectionR", 16), wW.addUniform("view", 16), wW.addUniform("projection", 16), wW.addUniform("vEyePosition", 4), wW.addUniform("inverseProjection", 16), wW
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const WW = this._engine._currentRenderTarget,
          RW = !(!WW || !WW.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const WW = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${WW} for ${this.name}`, RW)), this._sceneUBOIsMultiview.push(RW)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== RW && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, RW), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = RW);
        const MW = this._sceneUBOs[this._currentSceneUBOIndex++];
        return MW.unbindEffect(), MW
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1
      }
      get refreshRate() {
        return this._refreshRate
      }
      set refreshRate(WW) {
        this._refreshRate = WW, this.resetRefreshCounter()
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1))
      }
      isReadyForRendering(WW, RW) {
        this.prepareRenderList(), this.initRender(WW, RW);
        const MW = this._checkReadiness();
        return this.finishRender(), MW
      }
      prepareRenderList() {
        const WW = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let RW = 0; RW < this._waitingRenderList.length; RW++) {
              const MW = this._waitingRenderList[RW],
                wW = WW.getMeshById(MW);
              wW && this.renderList.push(wW)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const WW = this._scene.meshes;
          for (let RW = 0; RW < WW.length; RW++) {
            const MW = WW[RW];
            this.renderListPredicate(MW) && this.renderList.push(MW)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(WW, RW) {
        const MW = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), MW && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(MW.getViewMatrix(), MW.getProjectionMatrix(!0)), this._scene._activeCamera = MW, this._engine.setViewport(MW.rigParent ? MW.rigParent.viewport : MW.viewport, WW, RW)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const WW = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (WW.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), WW._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== WW.activeCamera && WW.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), WW.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const MW = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[WW], this.onBeforeRenderObservable.notifyObservers(WW);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(WW);
        else {
          const RW = this._prepareRenderingManager(WW),
            MW = this._scene.getOutlineRenderer?.(),
            wW = MW?.enabled;
          MW && (MW.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(WW), this._renderingManager.render(this.customRenderFunction, RW, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(WW), MW && (MW.enabled = wW)
        }
        RW || this.onAfterRenderObservable.notifyObservers(WW), this._engine.currentRenderPassId = MW
      }
      _checkReadiness() {
        const WW = this._scene,
          RW = this._engine.currentRenderPassId;
        let MW = !0;
        WW.getViewMatrix() || WW.updateTransformMatrix();
        const wW = this.options.numPasses;
        for (let CW = 0; CW < wW && MW; CW++) {
          const RW = this.renderList ? this.renderList : WW.frameGraph ? WW.meshes : WW.getActiveMeshes().data,
            zR = this.renderList || WW.frameGraph ? RW.length : WW.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[CW], this.onBeforeRenderObservable.notifyObservers(CW);
          let AW = null,
            bR = zR;
          this.getCustomRenderList && (AW = this.getCustomRenderList(CW, RW, zR), AW && (bR = AW.length)), AW || (AW = RW), this.options.doNotChangeAspectRatio || WW.updateTransformMatrix(!0);
          for (let WW = 0; WW < bR && MW; ++WW) {
            const RW = AW[WW];
            if (!RW.isEnabled() || RW.isBlocked || !RW.isVisible || !RW.Qs) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(RW, this.refreshRate, !0)) {
                MW = !1;
                continue
              }
            } else if (!RW.isReady(!0)) {
              MW = !1;
              continue
            }
            let wW = RW._edgesRenderer,
              CW = RW.hasThinInstances;
            if (RW.cMW) {
              const WW = RW.yBW;
              WW.edgesShareWithInstances && WW._edgesRenderer?.isEnabled && (wW = WW._edgesRenderer, CW = !0)
            } else RW.bBW && RW.edgesShareWithInstances && (CW = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && wW?.isEnabled && (wW.isReady(CW) || (MW = !1))
          }
          if (this.renderParticles && WW.particlesEnabled) {
            const RW = this.particleSystemList || WW.Xs;
            for (const WW of RW) WW.isReady() || (MW = !1)
          }
          if (this.renderSprites && WW.spritesEnabled) {
            const RW = this.spriteManagerList || WW.spriteManagers;
            if (RW)
              for (const wW of RW) WW.activeCamera && 0 === (wW.layerMask & WW.activeCamera.layerMask) || wW.isReady && !wW.isReady() && (MW = !1)
          }
          this.onAfterRenderObservable.notifyObservers(CW), wW > 1 && (WW.incrementRenderId(), WW.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = RW, MW
      }
      _prepareRenderingManager() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const MW = this._scene;
        let wW, CW, zR = null;
        const AW = this.renderList ? this.renderList : MW.frameGraph ? MW.meshes : MW.getActiveMeshes().data,
          bR = this.renderList || MW.frameGraph ? AW.length : MW.getActiveMeshes().length;
        if (this.getCustomRenderList && (zR = this.getCustomRenderList(WW, AW, bR)), zR) wW = zR.length, CW = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !RW && !this._engine.isWebGPU) return AW;
          this._defaultRenderListPrepared = !0, zR = AW, wW = bR, CW = !this.renderList || this.forceLayerMaskCheck
        }
        const yR = MW.activeCamera,
          NW = this.cameraForLOD ?? yR,
          eW = MW.getBoundingBoxRenderer?.();
        if (MW._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && eW) {
            eW.reset();
            for (let WW = 0; WW < this._activeBoundingBoxes.length; WW++) {
              const RW = this._activeBoundingBoxes.data[WW];
              eW.renderList.push(RW)
            }
          }
          return zR
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), eW && eW.reset(), this.renderMeshes) {
          const WW = MW.getRenderId(),
            RW = MW.getFrameId();
          for (let AW = 0; AW < wW; AW++) {
            const wW = zR[AW];
            if (wW && !wW.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(wW, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!wW.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let zR, AW;
              if (NW) {
                const WW = wW._internalAbstractMeshDataInfo._currentLOD.get(NW);
                WW && WW[1] === RW ? zR = WW[0] : (zR = MW.customLODSelector ? MW.customLODSelector(wW, NW) : wW.getLOD(NW), WW ? (WW[0] = zR, WW[1] = RW) : wW._internalAbstractMeshDataInfo._currentLOD.set(NW, [zR, RW]))
              } else zR = wW;
              if (!zR) continue;
              if (zR !== wW && 0 !== zR.billboardMode && zR.computeWorldMatrix(), zR._preActivateForIntermediateRendering(WW), AW = !(!CW || !yR) && 0 === (wW.layerMask & yR.layerMask), wW.isEnabled() && wW.isVisible && wW.Qs && !AW) {
                if (this._activeMeshes.push(wW), zR._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, zR !== wW && zR._activate(WW, !0), this.enableBoundingBoxRendering && eW && eW._preActiveMesh(wW), wW._activate(WW, !0) && wW.Qs.length) {
                  wW.cMW ? wW._internalAbstractMeshDataInfo._actAsRegularMesh && (zR = wW) : zR._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, zR._internalAbstractMeshDataInfo._isActiveIntermediate = !0, MW._prepareSkeleton(zR);
                  for (let WW = 0; WW < zR.Qs.length; WW++) {
                    const RW = zR.Qs[WW];
                    this.enableBoundingBoxRendering && eW && eW._evaluateSubMesh(wW, RW), this._renderingManager.dispatch(RW, zR)
                  }
                }
                wW._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && eW && RW)
          for (let BW = 0; BW < eW.renderList.length; BW++) {
            const WW = eW.renderList.data[BW];
            this._activeBoundingBoxes.push(WW)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const WW = this.particleSystemList || MW.Xs;
          for (let RW = 0; RW < WW.length; RW++) {
            const MW = WW[RW],
              wW = MW.emitter;
            MW.isStarted() && wW && (!wW.position || wW.isEnabled()) && this._renderingManager.dispatchParticles(MW)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return zR
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(WW, RW, MW, wW)
      }
      setRenderingAutoClearDepthStencil(WW, RW) {
        let MW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          wW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(WW, RW, MW, wW), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const WW = new iR(this.name, this._scene, this.options);
        return this.renderList && (WW.renderList = this.renderList.slice(0)), WW
      }
      dispose() {
        const WW = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          RW = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let MW = 0; MW < RW; MW++) {
          const RW = WW[MW];
          RW && void 0 !== RW.getMaterialForRenderPass(this.renderPassId) && RW.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const MW of this._sceneUBOs) MW.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === iR.REFRESHRATE_RENDER_ONCE && (this.refreshRate = iR.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    iR.REFRESHRATE_RENDER_ONCE = 0, iR.REFRESHRATE_RENDER_ONEVERYFRAME = 1, iR.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var YW = MW(37470);
    class JW extends zR.d {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate
      }
      set renderListPredicate(WW) {
        this._objectRenderer.renderListPredicate = WW
      }
      get renderList() {
        return this._objectRenderer.renderList
      }
      set renderList(WW) {
        this._objectRenderer.renderList = WW
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList
      }
      set particleSystemList(WW) {
        this._objectRenderer.particleSystemList = WW
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList
      }
      set getCustomRenderList(WW) {
        this._objectRenderer.getCustomRenderList = WW
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles
      }
      set renderParticles(WW) {
        this._objectRenderer.renderParticles = WW
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites
      }
      set renderSprites(WW) {
        this._objectRenderer.renderSprites = WW
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering
      }
      set enableBoundingBoxRendering(WW) {
        this._objectRenderer.enableBoundingBoxRendering = WW
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering
      }
      set enableOutlineRendering(WW) {
        this._objectRenderer.enableOutlineRendering = WW
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck
      }
      set forceLayerMaskCheck(WW) {
        this._objectRenderer.forceLayerMaskCheck = WW
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera
      }
      set activeCamera(WW) {
        this._objectRenderer.activeCamera = WW
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD
      }
      set cameraForLOD(WW) {
        this._objectRenderer.cameraForLOD = WW
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing
      }
      set disableImageProcessing(WW) {
        this._objectRenderer.disableImageProcessing = WW
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction
      }
      set customIsReadyFunction(WW) {
        this._objectRenderer.customIsReadyFunction = WW
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction
      }
      set customRenderFunction(WW) {
        this._objectRenderer.customRenderFunction = WW
      }
      get postProcesses() {
        return this._postProcesses
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled
      }
      set onAfterUnbind(WW) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(WW)
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable
      }
      set onBeforeRender(WW) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(WW)
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable
      }
      set onAfterRender(WW) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(WW)
      }
      set onClear(WW) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(WW)
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList
      }
      set _waitingRenderList(WW) {
        this._objectRenderer._waitingRenderList = WW
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
      setMaterialForRendering(WW, RW) {
        this._objectRenderer.setMaterialForRendering(WW, RW)
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
      set boundingBoxSize(WW) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(WW)) return;
        this._boundingBoxSize = WW;
        const RW = this.QRW();
        RW && RW.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(WW, RW, MW) {
        let AW, bR, NW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          eW = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          BW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          tR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          TW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : zR.d.TRILINEAR_SAMPLINGMODE,
          gR = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          YW = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          JW = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          PW = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          IW = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          oW = arguments.length > 13 ? arguments[13] : void 0,
          lW = arguments.length > 14 ? arguments[14] : void 0,
          FW = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          fW = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          QW = !0,
          rR = !1;
        if ("object" === typeof NW) {
          const WW = NW;
          NW = !!WW.generateMipMaps, eW = WW.doNotChangeAspectRatio ?? !0, BW = WW.type ?? 0, tR = !!WW.isCube, TW = WW.samplingMode ?? zR.d.TRILINEAR_SAMPLINGMODE, gR = WW.generateDepthBuffer ?? !0, YW = !!WW.generateStencilBuffer, JW = !!WW.isMulti, PW = WW.format ?? 5, IW = !!WW.delayAllocation, oW = WW.samples, lW = WW.creationFlags, FW = !!WW.noColorAttachment, fW = !!WW.useSRGBBuffer, AW = WW.colorAttachment, QW = WW.gammaSpace ?? QW, bR = WW.existingObjectRenderer, rR = !!WW.enableClusteredLights
        }
        if (super(null, MW, !NW, void 0, TW, void 0, void 0, void 0, void 0, PW), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new wW.c, this.onAfterUnbindObservable = new wW.c, this.onClearObservable = new wW.c, this.onResizeObservable = new wW.c, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = CW.q.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(MW = this.QRW())) return;
        const cR = this.QRW().mC();
        this._gammaSpace = QW, this._coordinatesMode = zR.d.PROJECTION_MODE, this.name = WW, this.isRenderTarget = !0, this._initialSizeParameter = RW, this._dontDisposeObjectRenderer = !!bR, this._processSizeParameter(RW), this._objectRenderer = bR ?? new iR(WW, MW, {
          numPasses: tR ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: eW,
          enableClusteredLights: rR
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const WW = this._scene;
          if (!this._disableEngineStages)
            for (const RW of WW._beforeRenderTargetClearStage) RW.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(cR) : this.skipInitialClear || cR.clear(this.clearColor ?? WW.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || WW.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const RW of WW._beforeRenderTargetDrawStage) RW.action(this, this._currentFaceIndex, this._currentLayer);
          cR._debugPushGroup && cR._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (cR._debugPopGroup && cR._debugPopGroup(), !this._disableEngineStages)
            for (const RW of this._scene._afterRenderTargetDrawStage) RW.action(this, this._currentFaceIndex, this._currentLayer);
          const WW = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const RW of this._scene._afterRenderTargetPostProcessStage) RW.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = WW), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), cR) : yR.b.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(cR) : this.skipInitialClear || cR.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = cR.onResizeObservable.add((() => {})), this._generateMipMaps = !!NW, this._doNotChangeAspectRatio = eW, JW || (this._renderTargetOptions = {
          generateMipMaps: NW,
          type: BW,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: gR,
          generateStencilBuffer: YW,
          samples: oW,
          creationFlags: lW,
          noColorAttachment: FW,
          useSRGBBuffer: fW,
          colorAttachment: AW,
          label: this.name
        }, this.samplingMode === zR.d.NEAREST_SAMPLINGMODE && (this.wrapU = zR.d.CLAMP_ADDRESSMODE, this.wrapV = zR.d.CLAMP_ADDRESSMODE), IW || (tR ? (this._renderTarget = MW.mC().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = zR.d.INVCUBIC_MODE, this._textureMatrix = CW.d.Identity()) : this._renderTarget = MW.mC().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== oW && (this.samples = oW)))
      }
      createDepthStencilTexture() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          zR = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(WW, RW, MW, wW, CW, zR)
      }
      _processSizeParameter(WW) {
        if (WW.ratio) {
          this._sizeRatio = WW.ratio;
          const RW = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(RW.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(RW.getRenderHeight(), this._sizeRatio)
          }
        } else this._size = WW
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples
      }
      set samples(WW) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(WW))
      }
      addPostProcess(WW) {
        if (!this._postProcessManager) {
          const WW = this.QRW();
          if (!WW) return;
          this._postProcessManager = new AW.d(WW), this._postProcesses = new Array
        }
        this._postProcesses.push(WW), this._postProcesses[0].autoClear = !1
      }
      clearPostProcesses() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (WW)
            for (const WW of this._postProcesses) WW.dispose();
          this._postProcesses = []
        }
      }
      removePostProcess(WW) {
        if (!this._postProcesses) return;
        const RW = this._postProcesses.indexOf(WW); - 1 !== RW && (this._postProcesses.splice(RW, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter()
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate
      }
      set refreshRate(WW) {
        this._objectRenderer.refreshRate = WW
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
        const WW = this._size.layers;
        if (WW) return WW;
        const RW = this._size.depth;
        return RW || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(WW) {
        const RW = Math.max(1, this.getRenderSize() * WW);
        this.resize(RW)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(WW) {
        const RW = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const MW = this.QRW();
        MW && (this._processSizeParameter(WW), this._renderTarget = RW ? MW.mC().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : MW.mC().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(WW, RW)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => MW(39287))).then((WW => this._dumpTools = WW))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const WW = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), WW
      }
      _render() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const MW = this.QRW();
        if (!MW) return;
        void 0 !== this.useCameraPostProcesses && (WW = this.useCameraPostProcesses);
        const wW = MW.mC();
        if (wW._debugPushGroup && wW._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let CW = 0; CW < 6; CW++) this._renderToTarget(CW, WW, RW), MW.incrementRenderId(), MW.resetCachedMaterial();
          else this._renderToTarget(0, WW, RW);
        else
          for (let CW = 0; CW < this.getRenderLayers(); CW++) this._renderToTarget(0, WW, RW, CW), MW.incrementRenderId(), MW.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), wW._debugPopGroup && wW._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(WW, RW) {
        const MW = WW * RW,
          wW = (0, bR.k)(MW + 16384 / (128 + MW));
        return Math.min((0, bR.c)(WW), wW)
      }
      _bindFrameBuffer() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const MW = this.QRW();
        if (!MW) return;
        const wW = MW.mC();
        this._renderTarget && wW.bindFramebuffer(this._renderTarget, this.isCube ? WW : void 0, void 0, void 0, this.ignoreCameraViewport, 0, RW)
      }
      _unbindFrameBuffer(WW, RW) {
        this._renderTarget && WW.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(RW)
        }))
      }
      _prepareFrame(WW, RW, MW, wW) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(RW, MW) : wW && WW.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(RW, MW)
      }
      _renderToTarget(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const CW = this.QRW();
        if (!CW) return;
        const zR = CW.mC();
        this._currentFaceIndex = WW, this._currentLayer = wW, this._currentUseCameraPostProcess = RW, this._currentDumpForDebug = MW, this._prepareFrame(CW, WW, wW, RW), this._objectRenderer.render(WW + wW, !0), this._unbindFrameBuffer(zR, WW), this._texture && this.isCube && 5 === WW && zR.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(WW, RW, MW, wW)
      }
      setRenderingAutoClearDepthStencil(WW, RW) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(WW, RW)
      }
      clone() {
        const WW = this.getSize(),
          RW = new JW(this.name, WW, this.QRW(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return RW.hasAlpha = this.hasAlpha, RW.level = this.level, RW.coordinatesMode = this.coordinatesMode, this.renderList && (RW.renderList = this.renderList.slice(0)), RW
      }
      serialize() {
        if (!this.name) return null;
        const WW = super.serialize();
        if (WW.renderTargetSize = this.getRenderSize(), WW.renderList = [], this.renderList)
          for (let RW = 0; RW < this.renderList.length; RW++) WW.renderList.push(this.renderList[RW].id);
        return WW
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.QRW().mC().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const WW = this.QRW();
        if (!WW) return;
        let RW = WW.customRenderTargets.indexOf(this);
        RW >= 0 && WW.customRenderTargets.splice(RW, 1);
        for (const MW of WW.cameras) RW = MW.customRenderTargets.indexOf(this), RW >= 0 && MW.customRenderTargets.splice(RW, 1);
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
    JW.REFRESHRATE_RENDER_ONCE = iR.REFRESHRATE_RENDER_ONCE, JW.REFRESHRATE_RENDER_ONEVERYFRAME = iR.REFRESHRATE_RENDER_ONEVERYFRAME, JW.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = iR.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(JW.prototype, "noPrePassRenderer") || Object.defineProperty(JW.prototype, "noPrePassRenderer", (0, YW.e)("RenderTargetTexture", "noPrePassRenderer"))
  },
  39251: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => NW,
      f: () => eW
    });
    var wW = MW(37722),
      CW = MW(36185),
      zR = MW(35346),
      AW = MW(37437),
      bR = MW(37900);
    const yR = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class NW {
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yR;
        this._fullscreenViewport = new CW.d(0, 0, 1, 1);
        const MW = RW.positions ?? yR.positions,
          zR = RW.indices ?? yR.indices;
        this.engine = WW, this._vertexBuffers = {
          [wW.j.PositionKind]: new wW.j(WW, MW, wW.j.PositionKind, !1, !1, 2)
        }, this._indexBuffer = WW.createIndexBuffer(zR), this._indexBufferLength = zR.length, this._onContextRestoredObserver = WW.onContextRestoredObservable.add((() => {
          this._indexBuffer = WW.createIndexBuffer(zR);
          for (const WW in this._vertexBuffers) {
            this._vertexBuffers[WW]._rebuild()
          }
        }))
      }
      setViewport() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.engine.setViewport(WW)
      }
      bindBuffers(WW) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, WW)
      }
      applyEffectWrapper(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = RW, this.engine.stencilState.stencilTest = MW, this.engine.enableEffect(WW.drawWrapper), this.bindBuffers(WW.effect), WW.onApplyObservable.notifyObservers({})
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
      _isRenderTargetTexture(WW) {
        return void 0 !== WW.renderTarget
      }
      render(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!WW.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const MW = null === RW ? null : this._isRenderTargetTexture(RW) ? RW.renderTarget : RW;
        MW && this.engine.bindFramebuffer(MW), this.applyEffectWrapper(WW), this.draw(), MW && this.engine.unBindFramebuffer(MW), this.restoreStates()
      }
      dispose() {
        const WW = this._vertexBuffers[wW.j.PositionKind];
        WW && (WW.dispose(), delete this._vertexBuffers[wW.j.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class eW {
      static RegisterShaderCodeProcessing(WW, RW) {
        RW ? eW._CustomShaderCodeProcessing[WW ?? ""] = RW : delete eW._CustomShaderCodeProcessing[WW ?? ""]
      }
      static _GetShaderCodeProcessing(WW) {
        return eW._CustomShaderCodeProcessing[WW] ?? eW._CustomShaderCodeProcessing[""]
      }
      get name() {
        return this.options.name
      }
      set name(WW) {
        this.options.name = WW
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
      set effect(WW) {
        this._drawWrapper.effect = WW
      }
      constructor(WW) {
        this.alphaMode = 0, this.onEffectCreatedObservable = new zR.c(void 0, !0), this.onApplyObservable = new zR.c, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
          ...WW,
          name: WW.name || "effectWrapper",
          engine: WW.engine,
          uniforms: WW.uniforms || WW.uniformNames || [],
          uniformNames: void 0,
          samplers: WW.samplers || WW.samplerNames || [],
          samplerNames: void 0,
          attributeNames: WW.attributeNames || ["position"],
          uniformBuffers: WW.uniformBuffers || [],
          defines: WW.defines || "",
          useShaderStore: WW.useShaderStore || !1,
          vertexUrl: WW.vertexUrl || WW.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: WW.fragmentShader || "pass",
          indexParameters: WW.indexParameters,
          blockCompilation: WW.blockCompilation || !1,
          shaderLanguage: WW.shaderLanguage || 0,
          onCompiled: WW.onCompiled || void 0,
          extraInitializations: WW.extraInitializations || void 0,
          extraInitializationsAsync: WW.extraInitializationsAsync || void 0,
          useAsPostProcess: WW.useAsPostProcess ?? !1,
          allowEmptySourceTexture: WW.allowEmptySourceTexture ?? !1
        }, this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), WW.vertexUrl || WW.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add((() => {
          this.effect.setFloat2("scale", 1, 1)
        }))), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add((() => {
          this.bind()
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.onContextRestoredObservable.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new bR.d(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const RW = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, RW, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wW = arguments.length > 2 ? arguments[2] : void 0,
          CW = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, CW && this._importPromises.push(...CW);
        const zR = this.options.engine.isWebGPU && !eW.ForceGLSL;
        this._gatherImports(zR, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(zR && this._webGPUReady ? MW.e(336).then((() => MW(58808))) : MW.e(325).then((() => MW(58597)))), void 0 !== wW && wW(zR, this._importPromises), zR && this._webGPUReady && (this.options.shaderLanguage = 1), WW || this.updateEffect(RW)
      }
      updateEffect() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          wW = arguments.length > 3 ? arguments[3] : void 0,
          CW = arguments.length > 4 ? arguments[4] : void 0,
          zR = arguments.length > 5 ? arguments[5] : void 0,
          bR = arguments.length > 6 ? arguments[6] : void 0,
          yR = arguments.length > 7 ? arguments[7] : void 0;
        const NW = eW._GetShaderCodeProcessing(this.name);
        if (NW?.defineCustomBindings) {
          const wW = RW?.slice() ?? [];
          wW.push(...this.options.uniforms);
          const CW = MW?.slice() ?? [];
          CW.push(...this.options.samplers), WW = NW.defineCustomBindings(this.name, WW, wW, CW), RW = wW, MW = CW
        }
        this.options.defines = WW || "";
        const BW = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let tR;
        tR = this.options.extraInitializationsAsync ? async () => {
          await (BW?.()), await this.options.extraInitializationsAsync()
        }: BW, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: bR ?? this._shaderPath.vertex,
          fragment: yR ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: RW || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: MW || this.options.samplers,
          defines: null !== WW ? WW : "",
          fallbacks: null,
          onCompiled: CW ?? this.options.onCompiled,
          onError: zR ?? null,
          indexParameters: wW || this.options.indexParameters,
          processCodeAfterIncludes: NW?.processCodeAfterIncludes ? (WW, RW) => NW.processCodeAfterIncludes(this.name, WW, RW) : null,
          processFinalCode: NW?.processFinalCode ? (WW, RW) => NW.processFinalCode(this.name, WW, RW) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: tR
        }, this.options.engine) : this._drawWrapper.effect = new AW.d(this._shaderPath, this.options.attributeNames, RW || this.options.uniforms, MW || this.options.samplerNames, this.options.engine, WW, void 0, CW || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, tR), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !WW && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), eW._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.mC().onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    eW.ForceGLSL = !1, eW._CustomShaderCodeProcessing = {}
  },
  39287: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      Dispose: () => PW,
      DumpData: () => JW,
      DumpDataAsync: () => YW,
      DumpFramebuffer: () => iR,
      DumpTools: () => IW,
      EncodeImageAsync: () => gR,
      RegisterDumpTools: () => lW
    });
    var wW = MW(37587),
      CW = MW(39251),
      zR = MW(37685),
      AW = MW(35353),
      bR = MW(35344),
      yR = MW(36721),
      NW = MW(37650),
      eW = MW(37593);
    let BW = null;
    async function tR() {
      return BW || (BW = async function() {
        const WW = bR.d.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        WW instanceof OffscreenCanvas && yR.b.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: RW
        } = await Promise.resolve().then((() => MW(37433)));
        if (!RW.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const wW = new RW(WW, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        bR.d.Instances.pop(), bR.d.OnEnginesDisposedObservable.add((WW => {
          wW && WW !== wW && !wW.cNW && 0 === bR.d.Instances.length && PW()
        })), wW.getCaps().parallelShaderCompile = void 0;
        const zR = new CW.c(wW),
          {
            passPixelShader: AW
          } = await MW.e(344).then((() => MW(58871))),
          NW = new CW.f({
            engine: wW,
            name: AW.name,
            fragmentShader: AW.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: WW,
          dumpEngine: {
            engine: wW,
            renderer: zR,
            wrapper: NW
          }
        }
      }()), await BW
    }
    let TW = (() => {
      var WW;
      let RW, MW = [];
      return WW = class {
        static async EncodeImageAsync(WW, RW, MW, wW, CW, AW) {
          const bR = await tR(),
            yR = bR.dumpEngine;
          yR.engine.setSize(RW, MW, !0);
          const NW = yR.engine.createRawTexture(WW, RW, MW, 5, !1, !CW, 1);
          return yR.renderer.setViewport(), yR.renderer.applyEffectWrapper(yR.wrapper), yR.wrapper.effect._bindTexture("textureSampler", NW), yR.renderer.draw(), NW.dispose(), await new Promise(((WW, RW) => {
            zR.j.ToBlob(bR.canvas, (MW => {
              MW ? WW(MW) : RW(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), wW, AW)
          }))
        }
      }, (() => {
        const CW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        RW = [eW.i], (0, wW.e)(WW, null, RW, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: WW => "EncodeImageAsync" in WW,
            get: WW => WW.EncodeImageAsync
          },
          metadata: CW
        }, null, MW), CW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: CW
        }), (0, wW.i)(WW, MW)
      })(), WW
    })();
    const gR = TW.EncodeImageAsync;
    async function iR(WW, RW, MW, wW) {
      let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        zR = arguments.length > 5 ? arguments[5] : void 0,
        AW = arguments.length > 6 ? arguments[6] : void 0;
      const bR = await MW.readPixels(0, 0, WW, RW);
      JW(WW, RW, new Uint8Array(bR.buffer), wW, CW, zR, !0, void 0, AW)
    }
    async function YW(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        CW = arguments.length > 4 ? arguments[4] : void 0,
        bR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        eW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        BW = arguments.length > 7 ? arguments[7] : void 0;
      if (MW instanceof Float32Array) {
        const WW = new Uint8Array(MW.length);
        let RW = MW.length;
        for (; RW--;) {
          const wW = MW[RW];
          WW[RW] = Math.round(255 * (0, AW.Clamp)(wW))
        }
        MW = WW
      }
      const tR = await TW.EncodeImageAsync(MW, WW, RW, wW, bR, BW);
      void 0 !== CW && zR.j.DownloadBlob(tR, CW), tR.type !== wW && yR.b.Warn(`DumpData: The requested mimeType '${wW}' is not supported. The result has mimeType '${tR.type}' instead.`);
      const gR = await tR.arrayBuffer();
      return eW ? gR : `data:${wW};base64,${(0,NW.h)(gR)}`
    }

    function JW(WW, RW, MW, wW) {
      let CW = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== CW || wW || (CW = ""), YW(WW, RW, MW, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", CW, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((WW => {
        wW && wW(WW)
      }))
    }

    function PW() {
      BW && (BW?.then((WW => {
        WW.canvas instanceof HTMLCanvasElement && WW.canvas.remove(), WW.dumpEngine && (WW.dumpEngine.engine.dispose(), WW.dumpEngine.renderer.dispose(), WW.dumpEngine.wrapper.dispose())
      })), BW = null)
    }
    const IW = {
      DumpData: JW,
      DumpDataAsync: YW,
      DumpFramebuffer: iR,
      Dispose: PW
    };
    let oW = !1;

    function lW() {
      if (oW) return;
      oW = !0;
      zR.j.DumpData = JW, zR.j.DumpDataAsync = YW, zR.j.DumpFramebuffer = iR
    }
  },
  39265: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => TW,
      d: () => gR,
      f: () => iR
    });
    var wW = MW(38069),
      CW = MW(39273),
      zR = MW(37587),
      AW = MW(39244),
      bR = MW(37615),
      yR = MW(39278),
      NW = MW(37593);
    class eW extends AW.c {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(WW, RW) {
        let MW = arguments.length > 4 ? arguments[4] : void 0;
        const wW = {
          size: "number" === typeof RW ? RW : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: MW,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...RW
        };
        super(WW, yR.d.FragmentUrl, {
          effectWrapper: "number" !== typeof RW && RW.effectWrapper ? void 0 : new yR.d(WW, MW, wW),
          ...wW
        })
      }
      static _Parse(WW, RW, MW, wW) {
        return bR.d.Parse((() => new eW(WW.name, WW.options, RW, WW.renderTargetSamplingMode, WW._engine, WW.reusable)), WW, MW, wW)
      }
    }(() => {
      var WW;
      let RW, MW = AW.c,
        wW = [];
      WW = class extends MW {
        get face() {
          return this._effectWrapper.face
        }
        set face(WW) {
          this._effectWrapper.face = WW
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(WW, RW) {
          let MW = arguments.length > 4 ? arguments[4] : void 0;
          const CW = {
            size: "number" === typeof RW ? RW : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: MW,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...RW
          };
          super(WW, yR.d.FragmentUrl, {
            effectWrapper: "number" !== typeof RW && RW.effectWrapper ? void 0 : new yR.b(WW, MW, CW),
            ...CW
          }), (0, zR.i)(this, wW)
        }
        static _Parse(RW, MW, wW, CW) {
          return bR.d.Parse((() => new WW(RW.name, RW.options, MW, RW.renderTargetSamplingMode, RW._engine, RW.reusable)), RW, wW, CW)
        }
      }, (() => {
        const CW = "function" === typeof Symbol && Symbol.metadata ? Object.create(MW[Symbol.metadata] ?? null) : void 0;
        RW = [(0, NW.D)()], (0, zR.e)(WW, null, RW, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: WW => "face" in WW,
            get: WW => WW.face
          },
          metadata: CW
        }, null, wW), CW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: CW
        })
      })()
    })();
    var BW = MW(35353),
      tR = MW(37659);

    function TW(WW, RW, MW, wW, CW, zR, bR, yR) {
      const NW = RW.mC();
      return RW.isReady = !1, CW = CW ?? RW.samplingMode, wW = wW ?? RW.type, zR = zR ?? RW.format, bR = bR ?? RW.width, yR = yR ?? RW.height, -1 === wW && (wW = 0), new Promise((eW => {
        const BW = new AW.c("postprocess", WW, null, null, 1, null, CW, NW, !1, void 0, wW, void 0, null, !1, zR);
        BW.externalTextureSamplerBinding = !0;
        const tR = NW.createRenderTargetTexture({
          width: bR,
          height: yR
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: CW,
          type: wW,
          format: zR
        });
        BW.onEffectCreatedObservable.addOnce((WW => {
          WW.executeWhenCompiled((() => {
            BW.onApply = WW => {
              WW._bindTexture("textureSampler", RW), WW.setFloat2("scale", 1, 1)
            }, MW.postProcessManager.directRender([BW], tR, !0), NW.restoreDefaultFramebuffer(), NW._releaseTexture(RW), BW && BW.dispose(), tR._swapAndDie(RW), RW.type = wW, RW.format = 5, RW.isReady = !0, eW(RW)
          }))
        }))
      }))
    }
    async function gR(WW, RW, zR) {
      let bR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        yR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        eW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(WW) {
        if (WW.isReady()) return;
        if (WW.loadingError) throw new Error(WW.errorObject?.message || `Texture ${WW.name} errored while loading.`);
        const RW = WW.onLoadObservable;
        if (RW) return await new Promise((WW => RW.addOnce((() => WW()))));
        const MW = WW._texture?.onLoadedObservable;
        if (MW) return await new Promise((WW => MW.addOnce((() => WW()))));
        throw new Error(`Cannot determine readiness of texture ${WW.name}.`)
      }(WW);
      const tR = WW.getInternalTexture(),
        TW = WW.is3D || !!tR?.is3D,
        {
          width: gR,
          height: iR
        } = WW.getSize(),
        YW = RW ?? gR,
        JW = zR ?? iR;
      if (NW || TW || function(WW) {
          switch (WW) {
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
        }(WW.textureFormat) || YW !== gR || JW !== iR) {
        if (WW.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${NW?"RTT":"compression"} is not supported.`);
        return await async function(WW, RW, zR, bR, yR) {
          let NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const eW = WW.QRW(),
            BW = eW.mC(),
            tR = WW.getInternalTexture(),
            TW = WW.is3D || !!tR?.is3D;
          let gR;
          if (BW.isWebGPU ? TW ? await MW.e(340).then((() => MW(58844))) : WW.isCube ? await MW.e(341).then((() => MW(58851))) : await MW.e(342).then((() => MW(58857))) : TW ? await MW.e(337).then((() => MW(58821))) : WW.isCube ? await MW.e(338).then((() => MW(58828))) : await MW.e(339).then((() => MW(58835))), TW) gR = new AW.c("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: wW.d.NEAREST_NEAREST_MIPNEAREST,
            engine: BW,
            shaderLanguage: BW.isWebGPU ? 1 : 0
          });
          else if (WW.isCube) {
            const WW = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            gR = new AW.c("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: wW.d.NEAREST_NEAREST_MIPNEAREST,
              engine: BW,
              defines: WW[bR],
              shaderLanguage: BW.isWebGPU ? 1 : 0
            })
          } else gR = new AW.c("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: wW.d.NEAREST_NEAREST_MIPNEAREST,
            engine: BW,
            shaderLanguage: BW.isWebGPU ? 1 : 0
          });
          await new Promise((WW => {
            gR.onEffectCreatedObservable.addOnce((RW => {
              RW.executeWhenCompiled((() => {
                WW(0)
              }))
            }))
          }));
          const iR = new CW.b("temp", {
            width: RW,
            height: zR
          }, eW, !1);
          gR.onApply = function(RW) {
            RW.setTexture("textureSampler", WW), RW.setFloat("lod", yR), RW.setInt("gamma", WW.gammaSpace ? 1 : 0), TW && RW.setFloat("slice", NW)
          };
          try {
            if (iR.renderTarget && tR) {
              const MW = tR.samplingMode;
              0 !== yR ? WW.updateSamplingMode(wW.d.NEAREST_NEAREST_MIPNEAREST) : WW.updateSamplingMode(wW.d.NEAREST_NEAREST), eW.postProcessManager.directRender([gR], iR.renderTarget, !0), WW.updateSamplingMode(MW);
              const CW = await BW.readPixels(0, 0, RW, zR),
                AW = new Uint8Array(CW.buffer, CW.byteOffset, CW.byteLength);
              return BW.unBindFramebuffer(iR.renderTarget), AW
            }
            throw Error("Render to texture failed.")
          } finally {
            iR.dispose(), gR.dispose()
          }
        }(WW, YW, JW, bR, yR, eW)
      }
      let PW = await WW.readPixels(bR, yR);
      if (!PW) throw new Error(`Failed to read pixels from texture ${WW.name}.`);
      if (PW instanceof Float32Array) {
        const WW = new Uint8Array(PW.length);
        let RW = PW.length;
        for (; RW--;) {
          const MW = PW[RW];
          WW[RW] = Math.round(255 * (0, BW.Clamp)(MW))
        }
        PW = WW
      }
      const IW = YW * JW,
        oW = 4 * IW;
      if (PW.length !== oW) {
        const WW = 0 === IW ? 0 : PW.length / IW;
        if (1 === WW || 2 === WW || 3 === WW) {
          const RW = new Uint8Array(oW);
          for (let MW = 0, wW = 0, CW = 0; MW < IW; MW++, CW += 4) {
            const MW = PW[wW++];
            if (1 === WW) {
              RW[CW] = MW, RW[CW + 1] = MW, RW[CW + 2] = MW, RW[CW + 3] = 255;
              continue
            }
            const zR = PW[wW++];
            2 !== WW ? (RW[CW] = MW, RW[CW + 1] = zR, RW[CW + 2] = PW[wW++], RW[CW + 3] = 255) : (RW[CW] = MW, RW[CW + 1] = zR, RW[CW + 2] = 0, RW[CW + 3] = 255)
          }
          return RW
        }
      }
      return PW
    }
    const iR = {
      CreateResizedCopy: function(WW, RW, MW) {
        let zR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const AW = WW.QRW(),
          bR = AW.mC(),
          yR = new CW.b("resized" + WW.name, {
            width: RW,
            height: MW
          }, AW, !WW.noMipmap, !0, WW._texture.type, !1, WW.samplingMode, !1);
        yR.wrapU = WW.wrapU, yR.wrapV = WW.wrapV, yR.uOffset = WW.uOffset, yR.vOffset = WW.vOffset, yR.uScale = WW.uScale, yR.vScale = WW.vScale, yR.uAng = WW.uAng, yR.vAng = WW.vAng, yR.wAng = WW.wAng, yR.coordinatesIndex = WW.coordinatesIndex, yR.level = WW.level, yR.anisotropicFilteringLevel = WW.anisotropicFilteringLevel, yR._texture.isReady = !1, WW.wrapU = wW.d.CLAMP_ADDRESSMODE, WW.wrapV = wW.d.CLAMP_ADDRESSMODE;
        const NW = new eW("pass", 1, null, zR ? wW.d.BILINEAR_SAMPLINGMODE : wW.d.NEAREST_SAMPLINGMODE, bR, !1, 0);
        return NW.externalTextureSamplerBinding = !0, NW.onEffectCreatedObservable.addOnce((RW => {
          RW.executeWhenCompiled((() => {
            NW.onApply = function(RW) {
              RW.setTexture("textureSampler", WW)
            };
            const RW = yR.renderTarget;
            RW && (AW.postProcessManager.directRender([NW], RW), bR.unBindFramebuffer(RW), yR.disposeFramebufferObjects(), NW.dispose(), yR.getInternalTexture().isReady = !0)
          }))
        })), yR
      },
      ApplyPostProcess: TW,
      ToHalfFloat: tR.j,
      FromHalfFloat: tR.e,
      GetTextureDataAsync: gR
    }
  },
  39244: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => gR
    });
    var wW = MW(37587),
      CW = MW(37693),
      zR = MW(35346),
      AW = MW(35324),
      bR = MW(37437),
      yR = MW(37593),
      NW = MW(37615),
      eW = MW(35361),
      BW = MW(37485),
      tR = MW(37520),
      TW = MW(39251);
    let gR = (() => {
        var WW;
        let RW, bR, BW, gR, iR, JW, PW, IW, oW, lW, FW, fW, QW, rR, cR, XW, jR = [],
          kR = [],
          aR = [],
          sW = [],
          dW = [],
          pW = [],
          hW = [],
          UW = [],
          EW = [],
          VW = [],
          mR = [],
          xR = [],
          vR = [],
          KW = [],
          uW = [],
          OW = [],
          nW = [],
          GW = [],
          LW = [],
          HW = [],
          DW = [],
          qR = [],
          ZW = [],
          SW = [],
          WR = [],
          RR = [],
          MR = [],
          wR = [],
          CR = [];
        return WW = class {
          static get ForceGLSL() {
            return TW.f.ForceGLSL
          }
          static set ForceGLSL(WW) {
            TW.f.ForceGLSL = WW
          }
          static RegisterShaderCodeProcessing(WW, RW) {
            TW.f.RegisterShaderCodeProcessing(WW, RW)
          }
          get name() {
            return this._effectWrapper.name
          }
          set name(WW) {
            this._effectWrapper.name = WW
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode
          }
          set alphaMode(WW) {
            this._effectWrapper.alphaMode = WW
          }
          get samples() {
            return this._samples
          }
          set samples(WW) {
            this._samples = Math.min(WW, this._engine.getCaps().maxMSAASamples), this._textures.forEach((WW => {
              WW.setSamples(this._samples)
            }))
          }
          get shaderLanguage() {
            return this._shaderLanguage
          }
          getEffectName() {
            return this._fragmentUrl
          }
          set onActivate(WW) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), WW && (this._onActivateObserver = this.onActivateObservable.add(WW))
          }
          set onSizeChanged(WW) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(WW)
          }
          set onApply(WW) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(WW)
          }
          set onBeforeRender(WW) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(WW)
          }
          set onAfterRender(WW) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(WW)
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd]
          }
          set inputTexture(WW) {
            this._forcedOutputTexture = WW
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty())
          }
          getCamera() {
            return this.yzW
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.nzW(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(RW, MW, bR, yR, NW, eW) {
            let BW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              tR = arguments.length > 7 ? arguments[7] : void 0,
              gR = arguments.length > 8 ? arguments[8] : void 0,
              iR = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              JW = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              PW = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              IW = arguments.length > 12 ? arguments[12] : void 0,
              oW = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              lW = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              FW = arguments.length > 15 ? arguments[15] : void 0,
              fW = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, wW.i)(this, jR), null), this.uniqueId = (0, wW.i)(this, kR, void 0), this.width = ((0, wW.i)(this, aR), (0, wW.i)(this, sW, -1)), this.height = ((0, wW.i)(this, dW), (0, wW.i)(this, pW, -1)), this.nodeMaterialSource = ((0, wW.i)(this, hW), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, wW.i)(this, UW, void 0), this.clearColor = ((0, wW.i)(this, EW), (0, wW.i)(this, VW, void 0)), this.autoClear = ((0, wW.i)(this, mR), (0, wW.i)(this, xR, !0)), this.forceAutoClearInAlphaMode = ((0, wW.i)(this, vR), (0, wW.i)(this, KW, !1)), this.alphaConstants = ((0, wW.i)(this, uW), (0, wW.i)(this, OW, void 0)), this.animations = ((0, wW.i)(this, nW), []), this.enablePixelPerfectMode = (0, wW.i)(this, GW, !1), this.forceFullscreenViewport = ((0, wW.i)(this, LW), (0, wW.i)(this, HW, !0)), this.inspectableCustomProperties = (0, wW.i)(this, DW), this.scaleMode = (0, wW.i)(this, qR, 1), this.alwaysForcePOT = ((0, wW.i)(this, ZW), (0, wW.i)(this, SW, !1)), this._samples = ((0, wW.i)(this, WR), (0, wW.i)(this, RR, 1)), this.adaptScaleToCurrentViewport = ((0, wW.i)(this, MR), (0, wW.i)(this, wR, !1)), this.doNotSerialize = ((0, wW.i)(this, CR), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new CW.i(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new AW.n(1, 1), this._texelSize = AW.n.Zero(), this.onActivateObservable = new zR.c, this.onSizeChangedObservable = new zR.c, this.onApplyObservable = new zR.c, this.onBeforeRenderObservable = new zR.c, this.onAfterRenderObservable = new zR.c, this.rMW = new zR.c, YW();
            let QW, rR = 1,
              cR = null;
            if (bR && !Array.isArray(bR)) {
              const WW = bR;
              bR = WW.uniforms ?? null, yR = WW.samplers ?? null, rR = WW.size ?? 1, eW = WW.camera ?? null, BW = WW.samplingMode ?? 1, tR = WW.engine, gR = WW.reusable, iR = Array.isArray(WW.defines) ? WW.defines.join("\n") : WW.defines ?? null, JW = WW.textureType ?? 0, PW = WW.vertexUrl ?? "postprocess", IW = WW.indexParameters, oW = WW.blockCompilation ?? !1, lW = WW.textureFormat ?? 5, FW = WW.shaderLanguage ?? 0, cR = WW.uniformBuffers ?? null, fW = WW.extraInitializations, QW = WW.effectWrapper
            } else NW && (rR = "number" === typeof NW ? NW : {
              width: NW.width,
              height: NW.height
            });
            if (this._useExistingThinPostProcess = !!QW, this._effectWrapper = QW ?? new TW.f({
                name: RW,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: MW,
                engine: tR || eW?.QRW().mC(),
                uniforms: bR,
                samplers: yR,
                uniformBuffers: cR,
                defines: iR,
                vertexUrl: PW,
                indexParameters: IW,
                blockCompilation: !0,
                shaderLanguage: FW,
                extraInitializations: void 0
              }), this.name = RW, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != eW ? (this.yzW = eW, this._scene = eW.QRW(), eW.attachPostProcess(this), this._engine = this._scene.mC(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : tR && (this._engine = tR, this._engine.postProcesses.push(this)), this._options = rR, this.renderTargetSamplingMode = BW || 1, this._reusable = gR || !1, this._textureType = JW, this._textureFormat = lW, this._shaderLanguage = FW || 0, this._samplers = yR || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = MW, this._vertexUrl = PW, this._parameters = bR || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = cR || [], this._indexParameters = IW, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const RW = [];
              this._gatherImports(this._engine.isWebGPU && !WW.ForceGLSL, RW), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(oW, iR, fW, RW)
            }
          }
          _gatherImports() {
            let WW = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? WW.push(Promise.all([MW.e(336).then((() => MW(58808)))])) : WW.push(Promise.all([MW.e(325).then((() => MW(58597)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          mC() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(WW) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = WW, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new CW.i(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              wW = arguments.length > 3 ? arguments[3] : void 0,
              CW = arguments.length > 4 ? arguments[4] : void 0,
              zR = arguments.length > 5 ? arguments[5] : void 0,
              AW = arguments.length > 6 ? arguments[6] : void 0,
              bR = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(WW, RW, MW, wW, CW, zR, AW, bR), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(WW, RW) {
            let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let CW = 0; CW < this._textureCache.length; CW++)
              if (this._textureCache[CW].texture.width === WW.width && this._textureCache[CW].texture.height === WW.height && this._textureCache[CW].postProcessChannel === MW && this._textureCache[CW].texture._generateDepthBuffer === RW.generateDepthBuffer && this._textureCache[CW].texture.samples === RW.samples) return this._textureCache[CW].texture;
            const wW = this._engine.createRenderTargetTexture(WW, RW);
            return this._textureCache.push({
              texture: wW,
              postProcessChannel: MW,
              lastUsedRenderId: -1
            }), wW
          }
          _flushTextureCache() {
            const WW = this._renderId;
            for (let RW = this._textureCache.length - 1; RW >= 0; RW--)
              if (WW - this._textureCache[RW].lastUsedRenderId > 100) {
                let WW = !1;
                for (let MW = 0; MW < this._textures.length; MW++)
                  if (this._textures.data[MW] === this._textureCache[RW].texture) {
                    WW = !0;
                    break
                  } WW || (this._textureCache[RW].texture.dispose(), this._textureCache.splice(RW, 1))
              }
          }
          resize(WW, RW) {
            let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              CW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = WW, this.height = RW;
            let zR = null;
            if (MW)
              for (let yR = 0; yR < MW._postProcesses.length; yR++)
                if (null !== MW._postProcesses[yR]) {
                  zR = MW._postProcesses[yR];
                  break
                } const AW = {
                width: this.width,
                height: this.height
              },
              bR = {
                generateMipMaps: wW,
                generateDepthBuffer: CW || zR === this,
                generateStencilBuffer: (CW || zR === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(AW, bR, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(AW, bR, 1)), this._texelSize.nzW(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let WW;
            if (this._shareOutputWithPostProcess) WW = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) WW = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let RW;
              WW = this.inputTexture;
              for (let MW = 0; MW < this._textureCache.length; MW++)
                if (this._textureCache[MW].texture === WW) {
                  RW = this._textureCache[MW];
                  break
                } RW && (RW.lastUsedRenderId = this._renderId)
            }
            return WW
          }
          activate(WW) {
            let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              MW = arguments.length > 2 ? arguments[2] : void 0;
            const wW = null === WW || void 0 !== WW.cameraRigMode ? WW || this.yzW : null,
              CW = wW?.QRW() ?? WW,
              zR = CW.mC(),
              AW = zR.getCaps().maxTextureSize,
              bR = (RW ? RW.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              yR = (RW ? RW.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let NW = this._options.width || bR,
              eW = this._options.height || yR;
            const BW = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let TW = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const WW = zR.currentViewport;
                WW && (NW *= WW.width, eW *= WW.height)
              }(BW || this.alwaysForcePOT) && (this._options.width || (NW = zR.needPOTTextures ? (0, tR.e)(NW, AW, this.scaleMode) : NW), this._options.height || (eW = zR.needPOTTextures ? (0, tR.e)(eW, AW, this.scaleMode) : eW)), this.width === NW && this.height === eW && (TW = this._getTarget()) || this.resize(NW, eW, wW, BW, MW), this._textures.forEach((WW => {
                WW.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(WW, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return TW || (TW = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.nzW(bR / NW, yR / eW), this._engine.bindFramebuffer(TW, 0, bR, yR, this.forceFullscreenViewport)) : (this._scaleRatio.nzW(1, 1), this._engine.bindFramebuffer(TW, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(wW), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : CW.clearColor, CW._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), TW
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
            let WW;
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.mC().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), WW = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", WW?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
          }
          _disposeTextureCache() {
            for (let WW = this._textureCache.length - 1; WW >= 0; WW--) this._textureCache[WW].texture.dispose();
            this._textureCache.length = 0
          }
          setPrePassRenderer(WW) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = WW.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
          }
          dispose(WW) {
            let RW;
            if (WW = WW || this.yzW, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (RW = this._parentContainer.postProcesses.indexOf(this), RW > -1 && this._parentContainer.postProcesses.splice(RW, 1), this._parentContainer = null), RW = this._engine.postProcesses.indexOf(this), -1 !== RW && this._engine.postProcesses.splice(RW, 1), this.rMW.notifyObservers(), WW) {
              if (WW.detachPostProcess(this), RW = WW._postProcesses.indexOf(this), 0 === RW && WW._postProcesses.length > 0) {
                const WW = this.yzW._getFirstPostProcess();
                WW && WW.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const WW = NW.d.Serialize(this),
              RW = this.getCamera() || this._scene && this._scene.activeCamera;
            return WW.customType = "BABYLON." + this.getClassName(), WW.cameraId = RW ? RW.id : null, WW.reusable = this._reusable, WW.textureType = this._textureType, WW.fragmentUrl = this._fragmentUrl, WW.parameters = this._parameters, WW.samplers = this._samplers, WW.uniformBuffers = this._uniformBuffers, WW.options = this._options, WW.defines = this._postProcessDefines, WW.textureFormat = this._textureFormat, WW.vertexUrl = this._vertexUrl, WW.indexParameters = this._indexParameters, WW
          }
          clone() {
            const RW = this.serialize();
            RW._engine = this._engine, RW.cameraId = null;
            const MW = WW.Parse(RW, this._scene, "");
            return MW ? (MW.onActivateObservable = this.onActivateObservable.clone(), MW.onSizeChangedObservable = this.onSizeChangedObservable.clone(), MW.onApplyObservable = this.onApplyObservable.clone(), MW.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), MW.onAfterRenderObservable = this.onAfterRenderObservable.clone(), MW._prePassEffectConfiguration = this._prePassEffectConfiguration, MW) : null
          }
          static Parse(WW, RW, MW) {
            const wW = (0, eW.c)(WW.customType);
            if (!wW || !wW._Parse) return null;
            const CW = RW ? RW.getCameraById(WW.cameraId) : null;
            return wW._Parse(WW, CW, RW, MW)
          }
          static _Parse(RW, MW, wW, CW) {
            return NW.d.Parse((() => new WW(RW.name, RW.fragmentUrl, RW.parameters, RW.samplers, RW.options, MW, RW.renderTargetSamplingMode, RW._engine, RW.reusable, RW.defines, RW.textureType, RW.vertexUrl, RW.indexParameters, !1, RW.textureFormat)), RW, wW, CW)
          }
        }, (() => {
          const MW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          RW = [(0, yR.D)()], bR = [(0, yR.D)()], BW = [(0, yR.D)()], gR = [(0, yR.D)()], iR = [(0, yR.D)()], JW = [(0, yR.o)()], PW = [(0, yR.D)()], IW = [(0, yR.D)()], oW = [(0, yR.D)()], lW = [(0, yR.D)()], FW = [(0, yR.D)()], fW = [(0, yR.D)()], QW = [(0, yR.D)()], rR = [(0, yR.D)()], cR = [(0, yR.D)("samples")], XW = [(0, yR.D)()], (0, wW.e)(WW, null, bR, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: WW => "name" in WW,
              get: WW => WW.name
            },
            metadata: MW
          }, null, jR), (0, wW.e)(WW, null, oW, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: WW => "alphaMode" in WW,
              get: WW => WW.alphaMode
            },
            metadata: MW
          }, null, jR), (0, wW.e)(null, null, RW, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: WW => "uniqueId" in WW,
              get: WW => WW.uniqueId,
              set: (WW, RW) => {
                WW.uniqueId = RW
              }
            },
            metadata: MW
          }, kR, aR), (0, wW.e)(null, null, BW, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: WW => "width" in WW,
              get: WW => WW.width,
              set: (WW, RW) => {
                WW.width = RW
              }
            },
            metadata: MW
          }, sW, dW), (0, wW.e)(null, null, gR, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: WW => "height" in WW,
              get: WW => WW.height,
              set: (WW, RW) => {
                WW.height = RW
              }
            },
            metadata: MW
          }, pW, hW), (0, wW.e)(null, null, iR, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: WW => "renderTargetSamplingMode" in WW,
              get: WW => WW.renderTargetSamplingMode,
              set: (WW, RW) => {
                WW.renderTargetSamplingMode = RW
              }
            },
            metadata: MW
          }, UW, EW), (0, wW.e)(null, null, JW, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: WW => "clearColor" in WW,
              get: WW => WW.clearColor,
              set: (WW, RW) => {
                WW.clearColor = RW
              }
            },
            metadata: MW
          }, VW, mR), (0, wW.e)(null, null, PW, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: WW => "autoClear" in WW,
              get: WW => WW.autoClear,
              set: (WW, RW) => {
                WW.autoClear = RW
              }
            },
            metadata: MW
          }, xR, vR), (0, wW.e)(null, null, IW, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: WW => "forceAutoClearInAlphaMode" in WW,
              get: WW => WW.forceAutoClearInAlphaMode,
              set: (WW, RW) => {
                WW.forceAutoClearInAlphaMode = RW
              }
            },
            metadata: MW
          }, KW, uW), (0, wW.e)(null, null, lW, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: WW => "alphaConstants" in WW,
              get: WW => WW.alphaConstants,
              set: (WW, RW) => {
                WW.alphaConstants = RW
              }
            },
            metadata: MW
          }, OW, nW), (0, wW.e)(null, null, FW, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: WW => "enablePixelPerfectMode" in WW,
              get: WW => WW.enablePixelPerfectMode,
              set: (WW, RW) => {
                WW.enablePixelPerfectMode = RW
              }
            },
            metadata: MW
          }, GW, LW), (0, wW.e)(null, null, fW, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: WW => "forceFullscreenViewport" in WW,
              get: WW => WW.forceFullscreenViewport,
              set: (WW, RW) => {
                WW.forceFullscreenViewport = RW
              }
            },
            metadata: MW
          }, HW, DW), (0, wW.e)(null, null, QW, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: WW => "scaleMode" in WW,
              get: WW => WW.scaleMode,
              set: (WW, RW) => {
                WW.scaleMode = RW
              }
            },
            metadata: MW
          }, qR, ZW), (0, wW.e)(null, null, rR, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: WW => "alwaysForcePOT" in WW,
              get: WW => WW.alwaysForcePOT,
              set: (WW, RW) => {
                WW.alwaysForcePOT = RW
              }
            },
            metadata: MW
          }, SW, WR), (0, wW.e)(null, null, cR, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: WW => "_samples" in WW,
              get: WW => WW._samples,
              set: (WW, RW) => {
                WW._samples = RW
              }
            },
            metadata: MW
          }, RR, MR), (0, wW.e)(null, null, XW, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: WW => "adaptScaleToCurrentViewport" in WW,
              get: WW => WW.adaptScaleToCurrentViewport,
              set: (WW, RW) => {
                WW.adaptScaleToCurrentViewport = RW
              }
            },
            metadata: MW
          }, wR, CR), MW && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MW
          })
        })(), WW
      })(),
      iR = !1;

    function YW() {
      iR || (iR = !0, BW.b.prototype.setTextureFromPostProcess = function(WW, RW, MW) {
        let wW = null;
        RW && (RW._forcedOutputTexture ? wW = RW._forcedOutputTexture : RW._textures.data[RW._currentRenderTextureInd] && (wW = RW._textures.data[RW._currentRenderTextureInd])), this._bindTexture(WW, wW?.texture ?? null, MW)
      }, BW.b.prototype.setTextureFromPostProcessOutput = function(WW, RW, MW) {
        this._bindTexture(WW, RW?._outputTexture?.texture ?? null, MW)
      }, bR.d.prototype.setTextureFromPostProcess = function(WW, RW) {
        this._engine.setTextureFromPostProcess(this._samplers[WW], RW, WW)
      }, bR.d.prototype.setTextureFromPostProcessOutput = function(WW, RW) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[WW], RW, WW)
      }, (0, eW.e)("BABYLON.PostProcess", gR))
    }
  },
  39278: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => AW,
      d: () => zR
    });
    var wW = MW(39251),
      CW = MW(35344);
    class zR extends wW.f {
      _gatherImports(WW, RW) {
        WW ? (this._webGPUReady = !0, RW.push(Promise.all([MW.e(343).then((() => MW(58866)))]))) : RW.push(Promise.all([MW.e(344).then((() => MW(58871)))])), super._gatherImports(WW, RW)
      }
      constructor(WW) {
        let RW = arguments.length > 2 ? arguments[2] : void 0;
        const MW = {
          name: WW,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || CW.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: zR.FragmentUrl,
          ...RW
        };
        MW.engine || (MW.engine = CW.d.LastCreatedEngine), super(MW)
      }
    }
    zR.FragmentUrl = "pass";
    class AW extends wW.f {
      _gatherImports(WW, RW) {
        WW ? (this._webGPUReady = !0, RW.push(Promise.all([MW.e(345).then((() => MW(58877)))]))) : RW.push(Promise.all([MW.e(346).then((() => MW(58879)))])), super._gatherImports(WW, RW)
      }
      constructor(WW) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: WW,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || CW.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: AW.FragmentUrl,
          defines: "#define POSITIVEX"
        }), this._face = 0
      }
      get face() {
        return this._face
      }
      set face(WW) {
        if (!(WW < 0 || WW > 5)) switch (this._face = WW, this._face) {
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
    AW.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);