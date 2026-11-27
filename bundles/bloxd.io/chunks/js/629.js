export const id = 629;
export const ids = [629];
export const modules = {
  53997: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => UW
    });
    var mW = OW(38276),
      EW = OW(38241),
      NW = OW(41992),
      PW = OW(41665),
      LW = OW(41458),
      cW = OW(39911),
      wW = OW(41649),
      tW = OW(41675),
      ZW = OW(38253),
      xW = OW(41420),
      lW = OW(41628),
      AW = OW(41710);
    class bW {
      get renderList() {
        return this._renderList
      }
      set renderList(WW) {
        this._renderList !== WW && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), WW && (this._unObserveRenderList = (0, ZW.j)(WW, this._renderListHasChanged)), this._renderList = WW)
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
              const iW = this._renderPassIds[WW];
              this._engine._renderPassNames[iW] = `${this._name}#${WW}`
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
      setMaterialForRendering(WW, iW) {
        let OW;
        OW = Array.isArray(WW) ? WW : [WW];
        for (let mW = 0; mW < OW.length; ++mW)
          for (let WW = 0; WW < this.options.numPasses; ++WW) {
            let EW = OW[mW];
            OW[mW].KD && (EW = OW[mW].WNW), EW.setMaterialForRenderPass(this._renderPassIds[WW], void 0 !== iW ? Array.isArray(iW) ? iW[WW] : iW : void 0)
          }
      }
      _freezeActiveMeshes(WW) {
        this._freezeActiveMeshesCancel = (0, xW.g)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, WW)
            for (let WW = 0; WW < this._activeMeshes.length; WW++) this._activeMeshes.data[WW]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((WW, iW) => {
          this._freezeActiveMeshesCancel = null, iW ? (cW.b.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), WW && cW.b.Error(WW)) : (cW.b.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), WW && (cW.b.Error(WW), WW.stack && cW.b.Error(WW.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let WW = 0; WW < this._activeMeshes.length; WW++) this._activeMeshes.data[WW]._unFreeze();
        this._isFrozen = !1
      }
      constructor(WW, iW, OW) {
        this._unObserveRenderList = null, this._renderListHasChanged = (WW, iW) => {
          const OW = this._renderList ? this._renderList.length : 0;
          if (0 === iW && OW > 0 || 0 === OW)
            for (const mW of this._scene.meshes) mW._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new mW.e, this.onAfterRenderObservable = new mW.e, this.onBeforeRenderingManagerRenderObservable = new mW.e, this.onAfterRenderingManagerRenderObservable = new mW.e, this.onInitRenderingObservable = new mW.e, this.onFinishRenderingObservable = new mW.e, this.onFastPathRenderObservable = new mW.e, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new lW.g(256), this._activeBoundingBoxes = new lW.g(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = WW, this._scene = iW, this._engine = this._scene.VA(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...OW
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new tW.d(iW), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const WW of this._scene.lights) WW.getTypeID() === AW.e.LIGHTTYPEID_CLUSTERED_CONTAINER && WW.isSupported && WW._updateBatches(this.activeCamera).render()
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
      _createSceneUBO(WW, iW) {
        const OW = this._scene.VA(),
          mW = new wW.c(OW, void 0, iW, WW, void 0, !1);
        return mW.addUniform("viewProjection", 16), iW && mW.addUniform("viewProjectionR", 16), mW.addUniform("view", 16), mW.addUniform("projection", 16), mW.addUniform("vEyePosition", 4), mW.addUniform("inverseProjection", 16), mW
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const WW = this._engine._currentRenderTarget,
          iW = !(!WW || !WW.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const WW = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${WW} for ${this.name}`, iW)), this._sceneUBOIsMultiview.push(iW)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== iW && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, iW), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = iW);
        const OW = this._sceneUBOs[this._currentSceneUBOIndex++];
        return OW.unbindEffect(), OW
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
      isReadyForRendering(WW, iW) {
        this.prepareRenderList(), this.initRender(WW, iW);
        const OW = this._checkReadiness();
        return this.finishRender(), OW
      }
      prepareRenderList() {
        const WW = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let iW = 0; iW < this._waitingRenderList.length; iW++) {
              const OW = this._waitingRenderList[iW],
                mW = WW.getMeshById(OW);
              mW && this.renderList.push(mW)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const WW = this._scene.meshes;
          for (let iW = 0; iW < WW.length; iW++) {
            const OW = WW[iW];
            this.renderListPredicate(OW) && this.renderList.push(OW)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(WW, iW) {
        const OW = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), OW && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(OW.getViewMatrix(), OW.getProjectionMatrix(!0)), this._scene._activeCamera = OW, this._engine.setViewport(OW.rigParent ? OW.rigParent.viewport : OW.viewport, WW, iW)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const WW = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (WW.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), WW._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== WW.activeCamera && WW.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), WW.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const OW = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[WW], this.onBeforeRenderObservable.notifyObservers(WW);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(WW);
        else {
          const iW = this._prepareRenderingManager(WW),
            OW = this._scene.getOutlineRenderer?.(),
            mW = OW?.enabled;
          OW && (OW.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(WW), this._renderingManager.render(this.customRenderFunction, iW, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(WW), OW && (OW.enabled = mW)
        }
        iW || this.onAfterRenderObservable.notifyObservers(WW), this._engine.currentRenderPassId = OW
      }
      _checkReadiness() {
        const WW = this._scene,
          iW = this._engine.currentRenderPassId;
        let OW = !0;
        WW.getViewMatrix() || WW.updateTransformMatrix();
        const mW = this.options.numPasses;
        for (let EW = 0; EW < mW && OW; EW++) {
          const iW = this.renderList ? this.renderList : WW.frameGraph ? WW.meshes : WW.getActiveMeshes().data,
            NW = this.renderList || WW.frameGraph ? iW.length : WW.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[EW], this.onBeforeRenderObservable.notifyObservers(EW);
          let PW = null,
            LW = NW;
          this.getCustomRenderList && (PW = this.getCustomRenderList(EW, iW, NW), PW && (LW = PW.length)), PW || (PW = iW), this.options.doNotChangeAspectRatio || WW.updateTransformMatrix(!0);
          for (let WW = 0; WW < LW && OW; ++WW) {
            const iW = PW[WW];
            if (!iW.isEnabled() || iW.isBlocked || !iW.isVisible || !iW.hY) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(iW, this.refreshRate, !0)) {
                OW = !1;
                continue
              }
            } else if (!iW.isReady(!0)) {
              OW = !1;
              continue
            }
            let mW = iW._edgesRenderer,
              EW = iW.hasThinInstances;
            if (iW.KD) {
              const WW = iW.WNW;
              WW.edgesShareWithInstances && WW._edgesRenderer?.isEnabled && (mW = WW._edgesRenderer, EW = !0)
            } else iW.QEW && iW.edgesShareWithInstances && (EW = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && mW?.isEnabled && (mW.isReady(EW) || (OW = !1))
          }
          if (this.renderParticles && WW.particlesEnabled) {
            const iW = this.particleSystemList || WW.vY;
            for (const WW of iW) WW.isReady() || (OW = !1)
          }
          if (this.renderSprites && WW.spritesEnabled) {
            const iW = this.spriteManagerList || WW.spriteManagers;
            if (iW)
              for (const mW of iW) WW.activeCamera && 0 === (mW.layerMask & WW.activeCamera.layerMask) || mW.isReady && !mW.isReady() && (OW = !1)
          }
          this.onAfterRenderObservable.notifyObservers(EW), mW > 1 && (WW.incrementRenderId(), WW.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = iW, OW
      }
      _prepareRenderingManager() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const OW = this._scene;
        let mW, EW, NW = null;
        const PW = this.renderList ? this.renderList : OW.frameGraph ? OW.meshes : OW.getActiveMeshes().data,
          LW = this.renderList || OW.frameGraph ? PW.length : OW.getActiveMeshes().length;
        if (this.getCustomRenderList && (NW = this.getCustomRenderList(WW, PW, LW)), NW) mW = NW.length, EW = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !iW && !this._engine.isWebGPU) return PW;
          this._defaultRenderListPrepared = !0, NW = PW, mW = LW, EW = !this.renderList || this.forceLayerMaskCheck
        }
        const cW = OW.activeCamera,
          wW = this.cameraForLOD ?? cW,
          tW = OW.getBoundingBoxRenderer?.();
        if (OW._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && tW) {
            tW.reset();
            for (let WW = 0; WW < this._activeBoundingBoxes.length; WW++) {
              const iW = this._activeBoundingBoxes.data[WW];
              tW.renderList.push(iW)
            }
          }
          return NW
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), tW && tW.reset(), this.renderMeshes) {
          const WW = OW.getRenderId(),
            iW = OW.getFrameId();
          for (let PW = 0; PW < mW; PW++) {
            const mW = NW[PW];
            if (mW && !mW.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(mW, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!mW.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let NW, PW;
              if (wW) {
                const WW = mW._internalAbstractMeshDataInfo._currentLOD.get(wW);
                WW && WW[1] === iW ? NW = WW[0] : (NW = OW.customLODSelector ? OW.customLODSelector(mW, wW) : mW.getLOD(wW), WW ? (WW[0] = NW, WW[1] = iW) : mW._internalAbstractMeshDataInfo._currentLOD.set(wW, [NW, iW]))
              } else NW = mW;
              if (!NW) continue;
              if (NW !== mW && 0 !== NW.billboardMode && NW.computeWorldMatrix(), NW._preActivateForIntermediateRendering(WW), PW = !(!EW || !cW) && 0 === (mW.layerMask & cW.layerMask), mW.isEnabled() && mW.isVisible && mW.hY && !PW) {
                if (this._activeMeshes.push(mW), NW._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, NW !== mW && NW._activate(WW, !0), this.enableBoundingBoxRendering && tW && tW._preActiveMesh(mW), mW._activate(WW, !0) && mW.hY.length) {
                  mW.KD ? mW._internalAbstractMeshDataInfo._actAsRegularMesh && (NW = mW) : NW._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, NW._internalAbstractMeshDataInfo._isActiveIntermediate = !0, OW._prepareSkeleton(NW);
                  for (let WW = 0; WW < NW.hY.length; WW++) {
                    const iW = NW.hY[WW];
                    this.enableBoundingBoxRendering && tW && tW._evaluateSubMesh(mW, iW), this._renderingManager.dispatch(iW, NW)
                  }
                }
                mW._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && tW && iW)
          for (let ZW = 0; ZW < tW.renderList.length; ZW++) {
            const WW = tW.renderList.data[ZW];
            this._activeBoundingBoxes.push(WW)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const WW = this.particleSystemList || OW.vY;
          for (let iW = 0; iW < WW.length; iW++) {
            const OW = WW[iW],
              mW = OW.emitter;
            OW.isStarted() && mW && (!mW.position || mW.isEnabled()) && this._renderingManager.dispatchParticles(OW)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return NW
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(WW, iW, OW, mW)
      }
      setRenderingAutoClearDepthStencil(WW, iW) {
        let OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          mW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(WW, iW, OW, mW), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const WW = new bW(this.name, this._scene, this.options);
        return this.renderList && (WW.renderList = this.renderList.slice(0)), WW
      }
      dispose() {
        const WW = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          iW = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let OW = 0; OW < iW; OW++) {
          const iW = WW[OW];
          iW && void 0 !== iW.getMaterialForRenderPass(this.renderPassId) && iW.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const OW of this._sceneUBOs) OW.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === bW.REFRESHRATE_RENDER_ONCE && (this.refreshRate = bW.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    bW.REFRESHRATE_RENDER_ONCE = 0, bW.REFRESHRATE_RENDER_ONEVERYFRAME = 1, bW.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var jW = OW(41415);
    class UW extends NW.h {
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
      setMaterialForRendering(WW, iW) {
        this._objectRenderer.setMaterialForRendering(WW, iW)
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
        const iW = this.bD();
        iW && iW.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(WW, iW, OW) {
        let PW, LW, wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          tW = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          ZW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          xW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          lW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : NW.h.TRILINEAR_SAMPLINGMODE,
          AW = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          jW = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          UW = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          kW = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          sW = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          MW = arguments.length > 13 ? arguments[13] : void 0,
          KW = arguments.length > 14 ? arguments[14] : void 0,
          SW = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          YW = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          yW = !0,
          TW = !1;
        if ("object" === typeof wW) {
          const WW = wW;
          wW = !!WW.generateMipMaps, tW = WW.doNotChangeAspectRatio ?? !0, ZW = WW.type ?? 0, xW = !!WW.isCube, lW = WW.samplingMode ?? NW.h.TRILINEAR_SAMPLINGMODE, AW = WW.generateDepthBuffer ?? !0, jW = !!WW.generateStencilBuffer, UW = !!WW.isMulti, kW = WW.format ?? 5, sW = !!WW.delayAllocation, MW = WW.samples, KW = WW.creationFlags, SW = !!WW.noColorAttachment, YW = !!WW.useSRGBBuffer, PW = WW.colorAttachment, yW = WW.gammaSpace ?? yW, LW = WW.existingObjectRenderer, TW = !!WW.enableClusteredLights
        }
        if (super(null, OW, !wW, void 0, lW, void 0, void 0, void 0, void 0, kW), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new mW.e, this.onAfterUnbindObservable = new mW.e, this.onClearObservable = new mW.e, this.onResizeObservable = new mW.e, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = EW.q.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(OW = this.bD())) return;
        const JW = this.bD().VA();
        this._gammaSpace = yW, this._coordinatesMode = NW.h.PROJECTION_MODE, this.name = WW, this.isRenderTarget = !0, this._initialSizeParameter = iW, this._dontDisposeObjectRenderer = !!LW, this._processSizeParameter(iW), this._objectRenderer = LW ?? new bW(WW, OW, {
          numPasses: xW ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: tW,
          enableClusteredLights: TW
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const WW = this._scene;
          if (!this._disableEngineStages)
            for (const iW of WW._beforeRenderTargetClearStage) iW.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(JW) : this.skipInitialClear || JW.clear(this.clearColor ?? WW.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || WW.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const iW of WW._beforeRenderTargetDrawStage) iW.action(this, this._currentFaceIndex, this._currentLayer);
          JW._debugPushGroup && JW._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (JW._debugPopGroup && JW._debugPopGroup(), !this._disableEngineStages)
            for (const iW of this._scene._afterRenderTargetDrawStage) iW.action(this, this._currentFaceIndex, this._currentLayer);
          const WW = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const iW of this._scene._afterRenderTargetPostProcessStage) iW.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = WW), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), JW) : cW.b.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(JW) : this.skipInitialClear || JW.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = JW.onResizeObservable.add((() => {})), this._generateMipMaps = !!wW, this._doNotChangeAspectRatio = tW, UW || (this._renderTargetOptions = {
          generateMipMaps: wW,
          type: ZW,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: AW,
          generateStencilBuffer: jW,
          samples: MW,
          creationFlags: KW,
          noColorAttachment: SW,
          useSRGBBuffer: YW,
          colorAttachment: PW,
          label: this.name
        }, this.samplingMode === NW.h.NEAREST_SAMPLINGMODE && (this.wrapU = NW.h.CLAMP_ADDRESSMODE, this.wrapV = NW.h.CLAMP_ADDRESSMODE), sW || (xW ? (this._renderTarget = OW.VA().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = NW.h.INVCUBIC_MODE, this._textureMatrix = EW.d.Identity()) : this._renderTarget = OW.VA().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== MW && (this.samples = MW)))
      }
      createDepthStencilTexture() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          NW = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(WW, iW, OW, mW, EW, NW)
      }
      _processSizeParameter(WW) {
        if (WW.ratio) {
          this._sizeRatio = WW.ratio;
          const iW = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(iW.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(iW.getRenderHeight(), this._sizeRatio)
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
          const WW = this.bD();
          if (!WW) return;
          this._postProcessManager = new PW.c(WW), this._postProcesses = new Array
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
        const iW = this._postProcesses.indexOf(WW); - 1 !== iW && (this._postProcesses.splice(iW, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
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
        const iW = this._size.depth;
        return iW || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(WW) {
        const iW = Math.max(1, this.getRenderSize() * WW);
        this.resize(iW)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(WW) {
        const iW = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const OW = this.bD();
        OW && (this._processSizeParameter(WW), this._renderTarget = iW ? OW.VA().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : OW.VA().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(WW, iW)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => OW(54011))).then((WW => this._dumpTools = WW))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const WW = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), WW
      }
      _render() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const OW = this.bD();
        if (!OW) return;
        void 0 !== this.useCameraPostProcesses && (WW = this.useCameraPostProcesses);
        const mW = OW.VA();
        if (mW._debugPushGroup && mW._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let EW = 0; EW < 6; EW++) this._renderToTarget(EW, WW, iW), OW.incrementRenderId(), OW.resetCachedMaterial();
          else this._renderToTarget(0, WW, iW);
        else
          for (let EW = 0; EW < this.getRenderLayers(); EW++) this._renderToTarget(0, WW, iW, EW), OW.incrementRenderId(), OW.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), mW._debugPopGroup && mW._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(WW, iW) {
        const OW = WW * iW,
          mW = (0, LW.n)(OW + 16384 / (128 + OW));
        return Math.min((0, LW.e)(WW), mW)
      }
      _bindFrameBuffer() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const OW = this.bD();
        if (!OW) return;
        const mW = OW.VA();
        this._renderTarget && mW.bindFramebuffer(this._renderTarget, this.isCube ? WW : void 0, void 0, void 0, this.ignoreCameraViewport, 0, iW)
      }
      _unbindFrameBuffer(WW, iW) {
        this._renderTarget && WW.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(iW)
        }))
      }
      _prepareFrame(WW, iW, OW, mW) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(iW, OW) : mW && WW.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(iW, OW)
      }
      _renderToTarget(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const EW = this.bD();
        if (!EW) return;
        const NW = EW.VA();
        this._currentFaceIndex = WW, this._currentLayer = mW, this._currentUseCameraPostProcess = iW, this._currentDumpForDebug = OW, this._prepareFrame(EW, WW, mW, iW), this._objectRenderer.render(WW + mW, !0), this._unbindFrameBuffer(NW, WW), this._texture && this.isCube && 5 === WW && NW.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(WW, iW, OW, mW)
      }
      setRenderingAutoClearDepthStencil(WW, iW) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(WW, iW)
      }
      clone() {
        const WW = this.getSize(),
          iW = new UW(this.name, WW, this.bD(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return iW.hasAlpha = this.hasAlpha, iW.level = this.level, iW.coordinatesMode = this.coordinatesMode, this.renderList && (iW.renderList = this.renderList.slice(0)), iW
      }
      serialize() {
        if (!this.name) return null;
        const WW = super.serialize();
        if (WW.renderTargetSize = this.getRenderSize(), WW.renderList = [], this.renderList)
          for (let iW = 0; iW < this.renderList.length; iW++) WW.renderList.push(this.renderList[iW].id);
        return WW
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.bD().VA().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const WW = this.bD();
        if (!WW) return;
        let iW = WW.customRenderTargets.indexOf(this);
        iW >= 0 && WW.customRenderTargets.splice(iW, 1);
        for (const OW of WW.cameras) iW = OW.customRenderTargets.indexOf(this), iW >= 0 && OW.customRenderTargets.splice(iW, 1);
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
    UW.REFRESHRATE_RENDER_ONCE = bW.REFRESHRATE_RENDER_ONCE, UW.REFRESHRATE_RENDER_ONEVERYFRAME = bW.REFRESHRATE_RENDER_ONEVERYFRAME, UW.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = bW.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(UW.prototype, "noPrePassRenderer") || Object.defineProperty(UW.prototype, "noPrePassRenderer", (0, jW.h)("RenderTargetTexture", "noPrePassRenderer"))
  },
  53980: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => wW,
      g: () => tW
    });
    var mW = OW(41660),
      EW = OW(39271),
      NW = OW(38276),
      PW = OW(41389),
      LW = OW(41840);
    const cW = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class wW {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cW;
        this._fullscreenViewport = new EW.e(0, 0, 1, 1);
        const OW = iW.positions ?? cW.positions,
          NW = iW.indices ?? cW.indices;
        this.engine = WW, this._vertexBuffers = {
          [mW.k.PositionKind]: new mW.k(WW, OW, mW.k.PositionKind, !1, !1, 2)
        }, this._indexBuffer = WW.createIndexBuffer(NW), this._indexBufferLength = NW.length, this._onContextRestoredObserver = WW.DA.add((() => {
          this._indexBuffer = WW.createIndexBuffer(NW);
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
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = iW, this.engine.stencilState.stencilTest = OW, this.engine.enableEffect(WW.drawWrapper), this.bindBuffers(WW.effect), WW.onApplyObservable.notifyObservers({})
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
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!WW.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const OW = null === iW ? null : this._isRenderTargetTexture(iW) ? iW.renderTarget : iW;
        OW && this.engine.bindFramebuffer(OW), this.applyEffectWrapper(WW), this.draw(), OW && this.engine.unBindFramebuffer(OW), this.restoreStates()
      }
      dispose() {
        const WW = this._vertexBuffers[mW.k.PositionKind];
        WW && (WW.dispose(), delete this._vertexBuffers[mW.k.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.DA.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class tW {
      static RegisterShaderCodeProcessing(WW, iW) {
        iW ? tW._CustomShaderCodeProcessing[WW ?? ""] = iW : delete tW._CustomShaderCodeProcessing[WW ?? ""]
      }
      static _GetShaderCodeProcessing(WW) {
        return tW._CustomShaderCodeProcessing[WW] ?? tW._CustomShaderCodeProcessing[""]
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
        this.alphaMode = 0, this.onEffectCreatedObservable = new NW.e(void 0, !0), this.onApplyObservable = new NW.e, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
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
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.DA.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new LW.d(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const iW = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, iW, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          mW = arguments.length > 2 ? arguments[2] : void 0,
          EW = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, EW && this._importPromises.push(...EW);
        const NW = this.options.engine.isWebGPU && !tW.ForceGLSL;
        this._gatherImports(NW, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(NW && this._webGPUReady ? OW.e(681).then((() => OW(64531))) : OW.e(671).then((() => OW(64405)))), void 0 !== mW && mW(NW, this._importPromises), NW && this._webGPUReady && (this.options.shaderLanguage = 1), WW || this.updateEffect(iW)
      }
      updateEffect() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          mW = arguments.length > 3 ? arguments[3] : void 0,
          EW = arguments.length > 4 ? arguments[4] : void 0,
          NW = arguments.length > 5 ? arguments[5] : void 0,
          LW = arguments.length > 6 ? arguments[6] : void 0,
          cW = arguments.length > 7 ? arguments[7] : void 0;
        const wW = tW._GetShaderCodeProcessing(this.name);
        if (wW?.defineCustomBindings) {
          const mW = iW?.slice() ?? [];
          mW.push(...this.options.uniforms);
          const EW = OW?.slice() ?? [];
          EW.push(...this.options.samplers), WW = wW.defineCustomBindings(this.name, WW, mW, EW), iW = mW, OW = EW
        }
        this.options.defines = WW || "";
        const ZW = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let xW;
        xW = this.options.extraInitializationsAsync ? async () => {
          await (ZW?.()), await this.options.extraInitializationsAsync()
        }: ZW, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: LW ?? this._shaderPath.vertex,
          fragment: cW ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: iW || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: OW || this.options.samplers,
          defines: null !== WW ? WW : "",
          fallbacks: null,
          onCompiled: EW ?? this.options.onCompiled,
          onError: NW ?? null,
          indexParameters: mW || this.options.indexParameters,
          processCodeAfterIncludes: wW?.processCodeAfterIncludes ? (WW, iW) => wW.processCodeAfterIncludes(this.name, WW, iW) : null,
          processFinalCode: wW?.processFinalCode ? (WW, iW) => wW.processFinalCode(this.name, WW, iW) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: xW
        }, this.options.engine) : this._drawWrapper.effect = new PW.e(this._shaderPath, this.options.attributeNames, iW || this.options.uniforms, OW || this.options.samplerNames, this.options.engine, WW, void 0, EW || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, xW), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !WW && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), tW._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.VA().DA.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    tW.ForceGLSL = !1, tW._CustomShaderCodeProcessing = {}
  },
  54011: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      Dispose: () => kW,
      DumpData: () => UW,
      DumpDataAsync: () => jW,
      DumpFramebuffer: () => bW,
      DumpTools: () => sW,
      EncodeImageAsync: () => AW,
      RegisterDumpTools: () => KW
    });
    var mW = OW(41516),
      EW = OW(53980),
      NW = OW(41620),
      PW = OW(38285),
      LW = OW(38270),
      cW = OW(39911),
      wW = OW(41574),
      tW = OW(41519);
    let ZW = null;
    async function xW() {
      return ZW || (ZW = async function() {
        const WW = LW.d.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        WW instanceof OffscreenCanvas && cW.b.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: iW
        } = await Promise.resolve().then((() => OW(41384)));
        if (!iW.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const mW = new iW(WW, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        LW.d.Instances.pop(), LW.d.OnEnginesDisposedObservable.add((WW => {
          mW && WW !== mW && !mW.Ay && 0 === LW.d.Instances.length && kW()
        })), mW.getCaps().parallelShaderCompile = void 0;
        const NW = new EW.d(mW),
          {
            passPixelShader: PW
          } = await OW.e(689).then((() => OW(64588))),
          wW = new EW.g({
            engine: mW,
            name: PW.name,
            fragmentShader: PW.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: WW,
          dumpEngine: {
            engine: mW,
            renderer: NW,
            wrapper: wW
          }
        }
      }()), await ZW
    }
    let lW = (() => {
      var WW;
      let iW, OW = [];
      return WW = class {
        static async EncodeImageAsync(WW, iW, OW, mW, EW, PW) {
          const LW = await xW(),
            cW = LW.dumpEngine;
          cW.engine.setSize(iW, OW, !0);
          const wW = cW.engine.createRawTexture(WW, iW, OW, 5, !1, !EW, 1);
          return cW.renderer.setViewport(), cW.renderer.applyEffectWrapper(cW.wrapper), cW.wrapper.effect._bindTexture("textureSampler", wW), cW.renderer.draw(), wW.dispose(), await new Promise(((WW, iW) => {
            NW.f.ToBlob(LW.canvas, (OW => {
              OW ? WW(OW) : iW(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), mW, PW)
          }))
        }
      }, (() => {
        const EW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        iW = [tW.j], (0, mW.e)(WW, null, iW, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: WW => "EncodeImageAsync" in WW,
            get: WW => WW.EncodeImageAsync
          },
          metadata: EW
        }, null, OW), EW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: EW
        }), (0, mW.g)(WW, OW)
      })(), WW
    })();
    const AW = lW.EncodeImageAsync;
    async function bW(WW, iW, OW, mW) {
      let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        NW = arguments.length > 5 ? arguments[5] : void 0,
        PW = arguments.length > 6 ? arguments[6] : void 0;
      const LW = await OW.readPixels(0, 0, WW, iW);
      UW(WW, iW, new Uint8Array(LW.buffer), mW, EW, NW, !0, void 0, PW)
    }
    async function jW(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        EW = arguments.length > 4 ? arguments[4] : void 0,
        LW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        tW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        ZW = arguments.length > 7 ? arguments[7] : void 0;
      if (OW instanceof Float32Array) {
        const WW = new Uint8Array(OW.length);
        let iW = OW.length;
        for (; iW--;) {
          const mW = OW[iW];
          WW[iW] = Math.round(255 * (0, PW.Clamp)(mW))
        }
        OW = WW
      }
      const xW = await lW.EncodeImageAsync(OW, WW, iW, mW, LW, ZW);
      void 0 !== EW && NW.f.DownloadBlob(xW, EW), xW.type !== mW && cW.b.Warn(`DumpData: The requested mimeType '${mW}' is not supported. The result has mimeType '${xW.type}' instead.`);
      const AW = await xW.arrayBuffer();
      return tW ? AW : `data:${mW};base64,${(0,wW.h)(AW)}`
    }

    function UW(WW, iW, OW, mW) {
      let EW = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== EW || mW || (EW = ""), jW(WW, iW, OW, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", EW, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((WW => {
        mW && mW(WW)
      }))
    }

    function kW() {
      ZW && (ZW?.then((WW => {
        WW.canvas instanceof HTMLCanvasElement && WW.canvas.remove(), WW.dumpEngine && (WW.dumpEngine.engine.dispose(), WW.dumpEngine.renderer.dispose(), WW.dumpEngine.wrapper.dispose())
      })), ZW = null)
    }
    const sW = {
      DumpData: UW,
      DumpDataAsync: jW,
      DumpFramebuffer: bW,
      Dispose: kW
    };
    let MW = !1;

    function KW() {
      if (MW) return;
      MW = !0;
      NW.f.DumpData = UW, NW.f.DumpDataAsync = jW, NW.f.DumpFramebuffer = bW
    }
  },
  53995: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => lW,
      f: () => AW,
      i: () => bW
    });
    var mW = OW(41992),
      EW = OW(53997),
      NW = OW(41516),
      PW = OW(53977),
      LW = OW(41538),
      cW = OW(54003),
      wW = OW(41519);
    class tW extends PW.c {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(WW, iW) {
        let OW = arguments.length > 4 ? arguments[4] : void 0;
        const mW = {
          size: "number" === typeof iW ? iW : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: OW,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...iW
        };
        super(WW, cW.h.FragmentUrl, {
          effectWrapper: "number" !== typeof iW && iW.effectWrapper ? void 0 : new cW.h(WW, OW, mW),
          ...mW
        })
      }
      static _Parse(WW, iW, OW, mW) {
        return LW.d.Parse((() => new tW(WW.name, WW.options, iW, WW.renderTargetSamplingMode, WW._engine, WW.reusable)), WW, OW, mW)
      }
    }(() => {
      var WW;
      let iW, OW = PW.c,
        mW = [];
      WW = class extends OW {
        get face() {
          return this._effectWrapper.face
        }
        set face(WW) {
          this._effectWrapper.face = WW
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(WW, iW) {
          let OW = arguments.length > 4 ? arguments[4] : void 0;
          const EW = {
            size: "number" === typeof iW ? iW : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: OW,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...iW
          };
          super(WW, cW.h.FragmentUrl, {
            effectWrapper: "number" !== typeof iW && iW.effectWrapper ? void 0 : new cW.e(WW, OW, EW),
            ...EW
          }), (0, NW.g)(this, mW)
        }
        static _Parse(iW, OW, mW, EW) {
          return LW.d.Parse((() => new WW(iW.name, iW.options, OW, iW.renderTargetSamplingMode, iW._engine, iW.reusable)), iW, mW, EW)
        }
      }, (() => {
        const EW = "function" === typeof Symbol && Symbol.metadata ? Object.create(OW[Symbol.metadata] ?? null) : void 0;
        iW = [(0, wW.M)()], (0, NW.e)(WW, null, iW, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: WW => "face" in WW,
            get: WW => WW.face
          },
          metadata: EW
        }, null, mW), EW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: EW
        })
      })()
    })();
    var ZW = OW(38285),
      xW = OW(41586);

    function lW(WW, iW, OW, mW, EW, NW, LW, cW) {
      const wW = iW.VA();
      return iW.isReady = !1, EW = EW ?? iW.samplingMode, mW = mW ?? iW.type, NW = NW ?? iW.format, LW = LW ?? iW.width, cW = cW ?? iW.height, -1 === mW && (mW = 0), new Promise((tW => {
        const ZW = new PW.c("postprocess", WW, null, null, 1, null, EW, wW, !1, void 0, mW, void 0, null, !1, NW);
        ZW.externalTextureSamplerBinding = !0;
        const xW = wW.createRenderTargetTexture({
          width: LW,
          height: cW
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: EW,
          type: mW,
          format: NW
        });
        ZW.onEffectCreatedObservable.addOnce((WW => {
          WW.executeWhenCompiled((() => {
            ZW.onApply = WW => {
              WW._bindTexture("textureSampler", iW), WW.setFloat2("scale", 1, 1)
            }, OW.postProcessManager.directRender([ZW], xW, !0), wW.restoreDefaultFramebuffer(), wW._releaseTexture(iW), ZW && ZW.dispose(), xW._swapAndDie(iW), iW.type = mW, iW.format = 5, iW.isReady = !0, tW(iW)
          }))
        }))
      }))
    }
    async function AW(WW, iW, NW) {
      let LW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        cW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        wW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        tW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(WW) {
        if (WW.isReady()) return;
        if (WW.loadingError) throw new Error(WW.errorObject?.message || `Texture ${WW.name} errored while loading.`);
        const iW = WW.onLoadObservable;
        if (iW) return await new Promise((WW => iW.addOnce((() => WW()))));
        const OW = WW._texture?.onLoadedObservable;
        if (OW) return await new Promise((WW => OW.addOnce((() => WW()))));
        throw new Error(`Cannot determine readiness of texture ${WW.name}.`)
      }(WW);
      const xW = WW.getInternalTexture(),
        lW = WW.is3D || !!xW?.is3D,
        {
          width: AW,
          height: bW
        } = WW.getSize(),
        jW = iW ?? AW,
        UW = NW ?? bW;
      if (wW || lW || function(WW) {
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
        }(WW.textureFormat) || jW !== AW || UW !== bW) {
        if (WW.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${wW?"RTT":"compression"} is not supported.`);
        return await async function(WW, iW, NW, LW, cW) {
          let wW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const tW = WW.bD(),
            ZW = tW.VA(),
            xW = WW.getInternalTexture(),
            lW = WW.is3D || !!xW?.is3D;
          let AW;
          if (ZW.isWebGPU ? lW ? await OW.e(685).then((() => OW(64572))) : WW.isCube ? await OW.e(686).then((() => OW(64578))) : await OW.e(687).then((() => OW(64583))) : lW ? await OW.e(682).then((() => OW(64554))) : WW.isCube ? await OW.e(683).then((() => OW(64561))) : await OW.e(684).then((() => OW(64565))), lW) AW = new PW.c("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: mW.h.NEAREST_NEAREST_MIPNEAREST,
            engine: ZW,
            shaderLanguage: ZW.isWebGPU ? 1 : 0
          });
          else if (WW.isCube) {
            const WW = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            AW = new PW.c("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: mW.h.NEAREST_NEAREST_MIPNEAREST,
              engine: ZW,
              defines: WW[LW],
              shaderLanguage: ZW.isWebGPU ? 1 : 0
            })
          } else AW = new PW.c("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: mW.h.NEAREST_NEAREST_MIPNEAREST,
            engine: ZW,
            shaderLanguage: ZW.isWebGPU ? 1 : 0
          });
          await new Promise((WW => {
            AW.onEffectCreatedObservable.addOnce((iW => {
              iW.executeWhenCompiled((() => {
                WW(0)
              }))
            }))
          }));
          const bW = new EW.e("temp", {
            width: iW,
            height: NW
          }, tW, !1);
          AW.onApply = function(iW) {
            iW.setTexture("textureSampler", WW), iW.setFloat("lod", cW), iW.setInt("gamma", WW.gammaSpace ? 1 : 0), lW && iW.setFloat("slice", wW)
          };
          try {
            if (bW.renderTarget && xW) {
              const OW = xW.samplingMode;
              0 !== cW ? WW.updateSamplingMode(mW.h.NEAREST_NEAREST_MIPNEAREST) : WW.updateSamplingMode(mW.h.NEAREST_NEAREST), tW.postProcessManager.directRender([AW], bW.renderTarget, !0), WW.updateSamplingMode(OW);
              const EW = await ZW.readPixels(0, 0, iW, NW),
                PW = new Uint8Array(EW.buffer, EW.byteOffset, EW.byteLength);
              return ZW.unBindFramebuffer(bW.renderTarget), PW
            }
            throw Error("Render to texture failed.")
          } finally {
            bW.dispose(), AW.dispose()
          }
        }(WW, jW, UW, LW, cW, tW)
      }
      let kW = await WW.readPixels(LW, cW);
      if (!kW) throw new Error(`Failed to read pixels from texture ${WW.name}.`);
      if (kW instanceof Float32Array) {
        const WW = new Uint8Array(kW.length);
        let iW = kW.length;
        for (; iW--;) {
          const OW = kW[iW];
          WW[iW] = Math.round(255 * (0, ZW.Clamp)(OW))
        }
        kW = WW
      }
      const sW = jW * UW,
        MW = 4 * sW;
      if (kW.length !== MW) {
        const WW = 0 === sW ? 0 : kW.length / sW;
        if (1 === WW || 2 === WW || 3 === WW) {
          const iW = new Uint8Array(MW);
          for (let OW = 0, mW = 0, EW = 0; OW < sW; OW++, EW += 4) {
            const OW = kW[mW++];
            if (1 === WW) {
              iW[EW] = OW, iW[EW + 1] = OW, iW[EW + 2] = OW, iW[EW + 3] = 255;
              continue
            }
            const NW = kW[mW++];
            2 !== WW ? (iW[EW] = OW, iW[EW + 1] = NW, iW[EW + 2] = kW[mW++], iW[EW + 3] = 255) : (iW[EW] = OW, iW[EW + 1] = NW, iW[EW + 2] = 0, iW[EW + 3] = 255)
          }
          return iW
        }
      }
      return kW
    }
    const bW = {
      CreateResizedCopy: function(WW, iW, OW) {
        let NW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const PW = WW.bD(),
          LW = PW.VA(),
          cW = new EW.e("resized" + WW.name, {
            width: iW,
            height: OW
          }, PW, !WW.noMipmap, !0, WW._texture.type, !1, WW.samplingMode, !1);
        cW.wrapU = WW.wrapU, cW.wrapV = WW.wrapV, cW.uOffset = WW.uOffset, cW.vOffset = WW.vOffset, cW.uScale = WW.uScale, cW.vScale = WW.vScale, cW.uAng = WW.uAng, cW.vAng = WW.vAng, cW.wAng = WW.wAng, cW.coordinatesIndex = WW.coordinatesIndex, cW.level = WW.level, cW.anisotropicFilteringLevel = WW.anisotropicFilteringLevel, cW._texture.isReady = !1, WW.wrapU = mW.h.CLAMP_ADDRESSMODE, WW.wrapV = mW.h.CLAMP_ADDRESSMODE;
        const wW = new tW("pass", 1, null, NW ? mW.h.BILINEAR_SAMPLINGMODE : mW.h.NEAREST_SAMPLINGMODE, LW, !1, 0);
        return wW.externalTextureSamplerBinding = !0, wW.onEffectCreatedObservable.addOnce((iW => {
          iW.executeWhenCompiled((() => {
            wW.onApply = function(iW) {
              iW.setTexture("textureSampler", WW)
            };
            const iW = cW.renderTarget;
            iW && (PW.postProcessManager.directRender([wW], iW), LW.unBindFramebuffer(iW), cW.disposeFramebufferObjects(), wW.dispose(), cW.getInternalTexture().isReady = !0)
          }))
        })), cW
      },
      ApplyPostProcess: lW,
      ToHalfFloat: xW.k,
      FromHalfFloat: xW.d,
      GetTextureDataAsync: AW
    }
  },
  53977: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => AW
    });
    var mW = OW(41516),
      EW = OW(41628),
      NW = OW(38276),
      PW = OW(38241),
      LW = OW(41389),
      cW = OW(41519),
      wW = OW(41538),
      tW = OW(38299),
      ZW = OW(41423),
      xW = OW(41458),
      lW = OW(53980);
    let AW = (() => {
        var WW;
        let iW, LW, ZW, AW, bW, UW, kW, sW, MW, KW, SW, YW, yW, TW, JW, hW, HW = [],
          nW = [],
          uW = [],
          oW = [],
          dW = [],
          eW = [],
          vW = [],
          gW = [],
          DW = [],
          VW = [],
          pW = [],
          fW = [],
          CW = [],
          XW = [],
          BW = [],
          qW = [],
          RW = [],
          GW = [],
          IW = [],
          aW = [],
          rW = [],
          zW = [],
          FW = [],
          QW = [],
          Wi = [],
          ii = [],
          Oi = [],
          mi = [],
          Ei = [];
        return WW = class {
          static get ForceGLSL() {
            return lW.g.ForceGLSL
          }
          static set ForceGLSL(WW) {
            lW.g.ForceGLSL = WW
          }
          static RegisterShaderCodeProcessing(WW, iW) {
            lW.g.RegisterShaderCodeProcessing(WW, iW)
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
            return this.W9
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.yWW(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(iW, OW, LW, cW, wW, tW) {
            let ZW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              xW = arguments.length > 7 ? arguments[7] : void 0,
              AW = arguments.length > 8 ? arguments[8] : void 0,
              bW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              UW = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              kW = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              sW = arguments.length > 12 ? arguments[12] : void 0,
              MW = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              KW = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              SW = arguments.length > 15 ? arguments[15] : void 0,
              YW = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, mW.g)(this, HW), null), this.uniqueId = (0, mW.g)(this, nW, void 0), this.width = ((0, mW.g)(this, uW), (0, mW.g)(this, oW, -1)), this.height = ((0, mW.g)(this, dW), (0, mW.g)(this, eW, -1)), this.nodeMaterialSource = ((0, mW.g)(this, vW), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, mW.g)(this, gW, void 0), this.clearColor = ((0, mW.g)(this, DW), (0, mW.g)(this, VW, void 0)), this.autoClear = ((0, mW.g)(this, pW), (0, mW.g)(this, fW, !0)), this.forceAutoClearInAlphaMode = ((0, mW.g)(this, CW), (0, mW.g)(this, XW, !1)), this.alphaConstants = ((0, mW.g)(this, BW), (0, mW.g)(this, qW, void 0)), this.animations = ((0, mW.g)(this, RW), []), this.enablePixelPerfectMode = (0, mW.g)(this, GW, !1), this.forceFullscreenViewport = ((0, mW.g)(this, IW), (0, mW.g)(this, aW, !0)), this.inspectableCustomProperties = (0, mW.g)(this, rW), this.scaleMode = (0, mW.g)(this, zW, 1), this.alwaysForcePOT = ((0, mW.g)(this, FW), (0, mW.g)(this, QW, !1)), this._samples = ((0, mW.g)(this, Wi), (0, mW.g)(this, ii, 1)), this.adaptScaleToCurrentViewport = ((0, mW.g)(this, Oi), (0, mW.g)(this, mi, !1)), this.doNotSerialize = ((0, mW.g)(this, Ei), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new EW.g(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new PW.m(1, 1), this._texelSize = PW.m.Zero(), this.onActivateObservable = new NW.e, this.onSizeChangedObservable = new NW.e, this.onApplyObservable = new NW.e, this.onBeforeRenderObservable = new NW.e, this.onAfterRenderObservable = new NW.e, this.jD = new NW.e, jW();
            let yW, TW = 1,
              JW = null;
            if (LW && !Array.isArray(LW)) {
              const WW = LW;
              LW = WW.uniforms ?? null, cW = WW.samplers ?? null, TW = WW.size ?? 1, tW = WW.camera ?? null, ZW = WW.samplingMode ?? 1, xW = WW.engine, AW = WW.reusable, bW = Array.isArray(WW.defines) ? WW.defines.join("\n") : WW.defines ?? null, UW = WW.textureType ?? 0, kW = WW.vertexUrl ?? "postprocess", sW = WW.indexParameters, MW = WW.blockCompilation ?? !1, KW = WW.textureFormat ?? 5, SW = WW.shaderLanguage ?? 0, JW = WW.uniformBuffers ?? null, YW = WW.extraInitializations, yW = WW.effectWrapper
            } else wW && (TW = "number" === typeof wW ? wW : {
              width: wW.width,
              height: wW.height
            });
            if (this._useExistingThinPostProcess = !!yW, this._effectWrapper = yW ?? new lW.g({
                name: iW,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: OW,
                engine: xW || tW?.bD().VA(),
                uniforms: LW,
                samplers: cW,
                uniformBuffers: JW,
                defines: bW,
                vertexUrl: kW,
                indexParameters: sW,
                blockCompilation: !0,
                shaderLanguage: SW,
                extraInitializations: void 0
              }), this.name = iW, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != tW ? (this.W9 = tW, this._scene = tW.bD(), tW.attachPostProcess(this), this._engine = this._scene.VA(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : xW && (this._engine = xW, this._engine.postProcesses.push(this)), this._options = TW, this.renderTargetSamplingMode = ZW || 1, this._reusable = AW || !1, this._textureType = UW, this._textureFormat = KW, this._shaderLanguage = SW || 0, this._samplers = cW || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = OW, this._vertexUrl = kW, this._parameters = LW || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = JW || [], this._indexParameters = sW, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const iW = [];
              this._gatherImports(this._engine.isWebGPU && !WW.ForceGLSL, iW), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(MW, bW, YW, iW)
            }
          }
          _gatherImports() {
            let WW = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? WW.push(Promise.all([OW.e(681).then((() => OW(64531)))])) : WW.push(Promise.all([OW.e(671).then((() => OW(64405)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          VA() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(WW) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = WW, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new EW.g(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              mW = arguments.length > 3 ? arguments[3] : void 0,
              EW = arguments.length > 4 ? arguments[4] : void 0,
              NW = arguments.length > 5 ? arguments[5] : void 0,
              PW = arguments.length > 6 ? arguments[6] : void 0,
              LW = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(WW, iW, OW, mW, EW, NW, PW, LW), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(WW, iW) {
            let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let EW = 0; EW < this._textureCache.length; EW++)
              if (this._textureCache[EW].texture.width === WW.width && this._textureCache[EW].texture.height === WW.height && this._textureCache[EW].postProcessChannel === OW && this._textureCache[EW].texture._generateDepthBuffer === iW.generateDepthBuffer && this._textureCache[EW].texture.samples === iW.samples) return this._textureCache[EW].texture;
            const mW = this._engine.createRenderTargetTexture(WW, iW);
            return this._textureCache.push({
              texture: mW,
              postProcessChannel: OW,
              lastUsedRenderId: -1
            }), mW
          }
          _flushTextureCache() {
            const WW = this._renderId;
            for (let iW = this._textureCache.length - 1; iW >= 0; iW--)
              if (WW - this._textureCache[iW].lastUsedRenderId > 100) {
                let WW = !1;
                for (let OW = 0; OW < this._textures.length; OW++)
                  if (this._textures.data[OW] === this._textureCache[iW].texture) {
                    WW = !0;
                    break
                  } WW || (this._textureCache[iW].texture.dispose(), this._textureCache.splice(iW, 1))
              }
          }
          resize(WW, iW) {
            let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = WW, this.height = iW;
            let NW = null;
            if (OW)
              for (let cW = 0; cW < OW._postProcesses.length; cW++)
                if (null !== OW._postProcesses[cW]) {
                  NW = OW._postProcesses[cW];
                  break
                } const PW = {
                width: this.width,
                height: this.height
              },
              LW = {
                generateMipMaps: mW,
                generateDepthBuffer: EW || NW === this,
                generateStencilBuffer: (EW || NW === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(PW, LW, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(PW, LW, 1)), this._texelSize.yWW(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let WW;
            if (this._shareOutputWithPostProcess) WW = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) WW = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let iW;
              WW = this.inputTexture;
              for (let OW = 0; OW < this._textureCache.length; OW++)
                if (this._textureCache[OW].texture === WW) {
                  iW = this._textureCache[OW];
                  break
                } iW && (iW.lastUsedRenderId = this._renderId)
            }
            return WW
          }
          activate(WW) {
            let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              OW = arguments.length > 2 ? arguments[2] : void 0;
            const mW = null === WW || void 0 !== WW.cameraRigMode ? WW || this.W9 : null,
              EW = mW?.bD() ?? WW,
              NW = EW.VA(),
              PW = NW.getCaps().maxTextureSize,
              LW = (iW ? iW.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              cW = (iW ? iW.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let wW = this._options.width || LW,
              tW = this._options.height || cW;
            const ZW = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let lW = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const WW = NW.currentViewport;
                WW && (wW *= WW.width, tW *= WW.height)
              }(ZW || this.alwaysForcePOT) && (this._options.width || (wW = NW.needPOTTextures ? (0, xW.h)(wW, PW, this.scaleMode) : wW), this._options.height || (tW = NW.needPOTTextures ? (0, xW.h)(tW, PW, this.scaleMode) : tW)), this.width === wW && this.height === tW && (lW = this._getTarget()) || this.resize(wW, tW, mW, ZW, OW), this._textures.forEach((WW => {
                WW.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(WW, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return lW || (lW = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.yWW(LW / wW, cW / tW), this._engine.bindFramebuffer(lW, 0, LW, cW, this.forceFullscreenViewport)) : (this._scaleRatio.yWW(1, 1), this._engine.bindFramebuffer(lW, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(mW), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : EW.clearColor, EW._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), lW
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
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.VA().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), WW = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", WW?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
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
            let iW;
            if (WW = WW || this.W9, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (iW = this._parentContainer.postProcesses.indexOf(this), iW > -1 && this._parentContainer.postProcesses.splice(iW, 1), this._parentContainer = null), iW = this._engine.postProcesses.indexOf(this), -1 !== iW && this._engine.postProcesses.splice(iW, 1), this.jD.notifyObservers(), WW) {
              if (WW.detachPostProcess(this), iW = WW._postProcesses.indexOf(this), 0 === iW && WW._postProcesses.length > 0) {
                const WW = this.W9._getFirstPostProcess();
                WW && WW.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const WW = wW.d.Serialize(this),
              iW = this.getCamera() || this._scene && this._scene.activeCamera;
            return WW.customType = "BABYLON." + this.getClassName(), WW.cameraId = iW ? iW.id : null, WW.reusable = this._reusable, WW.textureType = this._textureType, WW.fragmentUrl = this._fragmentUrl, WW.parameters = this._parameters, WW.samplers = this._samplers, WW.uniformBuffers = this._uniformBuffers, WW.options = this._options, WW.defines = this._postProcessDefines, WW.textureFormat = this._textureFormat, WW.vertexUrl = this._vertexUrl, WW.indexParameters = this._indexParameters, WW
          }
          clone() {
            const iW = this.serialize();
            iW._engine = this._engine, iW.cameraId = null;
            const OW = WW.Parse(iW, this._scene, "");
            return OW ? (OW.onActivateObservable = this.onActivateObservable.clone(), OW.onSizeChangedObservable = this.onSizeChangedObservable.clone(), OW.onApplyObservable = this.onApplyObservable.clone(), OW.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), OW.onAfterRenderObservable = this.onAfterRenderObservable.clone(), OW._prePassEffectConfiguration = this._prePassEffectConfiguration, OW) : null
          }
          static Parse(WW, iW, OW) {
            const mW = (0, tW.d)(WW.customType);
            if (!mW || !mW._Parse) return null;
            const EW = iW ? iW.getCameraById(WW.cameraId) : null;
            return mW._Parse(WW, EW, iW, OW)
          }
          static _Parse(iW, OW, mW, EW) {
            return wW.d.Parse((() => new WW(iW.name, iW.fragmentUrl, iW.parameters, iW.samplers, iW.options, OW, iW.renderTargetSamplingMode, iW._engine, iW.reusable, iW.defines, iW.textureType, iW.vertexUrl, iW.indexParameters, !1, iW.textureFormat)), iW, mW, EW)
          }
        }, (() => {
          const OW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          iW = [(0, cW.M)()], LW = [(0, cW.M)()], ZW = [(0, cW.M)()], AW = [(0, cW.M)()], bW = [(0, cW.M)()], UW = [(0, cW.r)()], kW = [(0, cW.M)()], sW = [(0, cW.M)()], MW = [(0, cW.M)()], KW = [(0, cW.M)()], SW = [(0, cW.M)()], YW = [(0, cW.M)()], yW = [(0, cW.M)()], TW = [(0, cW.M)()], JW = [(0, cW.M)("samples")], hW = [(0, cW.M)()], (0, mW.e)(WW, null, LW, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: WW => "name" in WW,
              get: WW => WW.name
            },
            metadata: OW
          }, null, HW), (0, mW.e)(WW, null, MW, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: WW => "alphaMode" in WW,
              get: WW => WW.alphaMode
            },
            metadata: OW
          }, null, HW), (0, mW.e)(null, null, iW, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: WW => "uniqueId" in WW,
              get: WW => WW.uniqueId,
              set: (WW, iW) => {
                WW.uniqueId = iW
              }
            },
            metadata: OW
          }, nW, uW), (0, mW.e)(null, null, ZW, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: WW => "width" in WW,
              get: WW => WW.width,
              set: (WW, iW) => {
                WW.width = iW
              }
            },
            metadata: OW
          }, oW, dW), (0, mW.e)(null, null, AW, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: WW => "height" in WW,
              get: WW => WW.height,
              set: (WW, iW) => {
                WW.height = iW
              }
            },
            metadata: OW
          }, eW, vW), (0, mW.e)(null, null, bW, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: WW => "renderTargetSamplingMode" in WW,
              get: WW => WW.renderTargetSamplingMode,
              set: (WW, iW) => {
                WW.renderTargetSamplingMode = iW
              }
            },
            metadata: OW
          }, gW, DW), (0, mW.e)(null, null, UW, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: WW => "clearColor" in WW,
              get: WW => WW.clearColor,
              set: (WW, iW) => {
                WW.clearColor = iW
              }
            },
            metadata: OW
          }, VW, pW), (0, mW.e)(null, null, kW, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: WW => "autoClear" in WW,
              get: WW => WW.autoClear,
              set: (WW, iW) => {
                WW.autoClear = iW
              }
            },
            metadata: OW
          }, fW, CW), (0, mW.e)(null, null, sW, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: WW => "forceAutoClearInAlphaMode" in WW,
              get: WW => WW.forceAutoClearInAlphaMode,
              set: (WW, iW) => {
                WW.forceAutoClearInAlphaMode = iW
              }
            },
            metadata: OW
          }, XW, BW), (0, mW.e)(null, null, KW, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: WW => "alphaConstants" in WW,
              get: WW => WW.alphaConstants,
              set: (WW, iW) => {
                WW.alphaConstants = iW
              }
            },
            metadata: OW
          }, qW, RW), (0, mW.e)(null, null, SW, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: WW => "enablePixelPerfectMode" in WW,
              get: WW => WW.enablePixelPerfectMode,
              set: (WW, iW) => {
                WW.enablePixelPerfectMode = iW
              }
            },
            metadata: OW
          }, GW, IW), (0, mW.e)(null, null, YW, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: WW => "forceFullscreenViewport" in WW,
              get: WW => WW.forceFullscreenViewport,
              set: (WW, iW) => {
                WW.forceFullscreenViewport = iW
              }
            },
            metadata: OW
          }, aW, rW), (0, mW.e)(null, null, yW, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: WW => "scaleMode" in WW,
              get: WW => WW.scaleMode,
              set: (WW, iW) => {
                WW.scaleMode = iW
              }
            },
            metadata: OW
          }, zW, FW), (0, mW.e)(null, null, TW, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: WW => "alwaysForcePOT" in WW,
              get: WW => WW.alwaysForcePOT,
              set: (WW, iW) => {
                WW.alwaysForcePOT = iW
              }
            },
            metadata: OW
          }, QW, Wi), (0, mW.e)(null, null, JW, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: WW => "_samples" in WW,
              get: WW => WW._samples,
              set: (WW, iW) => {
                WW._samples = iW
              }
            },
            metadata: OW
          }, ii, Oi), (0, mW.e)(null, null, hW, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: WW => "adaptScaleToCurrentViewport" in WW,
              get: WW => WW.adaptScaleToCurrentViewport,
              set: (WW, iW) => {
                WW.adaptScaleToCurrentViewport = iW
              }
            },
            metadata: OW
          }, mi, Ei), OW && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: OW
          })
        })(), WW
      })(),
      bW = !1;

    function jW() {
      bW || (bW = !0, ZW.b.prototype.setTextureFromPostProcess = function(WW, iW, OW) {
        let mW = null;
        iW && (iW._forcedOutputTexture ? mW = iW._forcedOutputTexture : iW._textures.data[iW._currentRenderTextureInd] && (mW = iW._textures.data[iW._currentRenderTextureInd])), this._bindTexture(WW, mW?.texture ?? null, OW)
      }, ZW.b.prototype.setTextureFromPostProcessOutput = function(WW, iW, OW) {
        this._bindTexture(WW, iW?._outputTexture?.texture ?? null, OW)
      }, LW.e.prototype.setTextureFromPostProcess = function(WW, iW) {
        this._engine.setTextureFromPostProcess(this._samplers[WW], iW, WW)
      }, LW.e.prototype.setTextureFromPostProcessOutput = function(WW, iW) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[WW], iW, WW)
      }, (0, tW.h)("BABYLON.PostProcess", AW))
    }
  },
  54003: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => PW,
      h: () => NW
    });
    var mW = OW(53980),
      EW = OW(38270);
    class NW extends mW.g {
      _gatherImports(WW, iW) {
        WW ? (this._webGPUReady = !0, iW.push(Promise.all([OW.e(688).then((() => OW(64585)))]))) : iW.push(Promise.all([OW.e(689).then((() => OW(64588)))])), super._gatherImports(WW, iW)
      }
      constructor(WW) {
        let iW = arguments.length > 2 ? arguments[2] : void 0;
        const OW = {
          name: WW,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || EW.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: NW.FragmentUrl,
          ...iW
        };
        OW.engine || (OW.engine = EW.d.LastCreatedEngine), super(OW)
      }
    }
    NW.FragmentUrl = "pass";
    class PW extends mW.g {
      _gatherImports(WW, iW) {
        WW ? (this._webGPUReady = !0, iW.push(Promise.all([OW.e(690).then((() => OW(64592)))]))) : iW.push(Promise.all([OW.e(691).then((() => OW(64598)))])), super._gatherImports(WW, iW)
      }
      constructor(WW) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: WW,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || EW.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: PW.FragmentUrl,
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
    PW.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);