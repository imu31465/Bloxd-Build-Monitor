export const id = 620;
export const ids = [620];
export const modules = {
  45290: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => MH
    });
    var AH = LH(37997),
      rH = LH(37963),
      SH = LH(41777),
      hH = LH(41433),
      tH = LH(41222),
      zH = LH(39595),
      CH = LH(41416),
      EH = LH(41448),
      XH = LH(37974),
      GH = LH(41179),
      YH = LH(41398),
      uH = LH(41472);
    class QH {
      get renderList() {
        return this._renderList
      }
      set renderList(HH) {
        this._renderList !== HH && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), HH && (this._unObserveRenderList = (0, XH.i)(HH, this._renderListHasChanged)), this._renderList = HH)
      }
      get disableImageProcessing() {
        return this._disableImageProcessing
      }
      set disableImageProcessing(HH) {
        HH !== this._disableImageProcessing && (this._disableImageProcessing = HH, this._scene.markAllMaterialsAsDirty(64))
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(HH) {
        this._disableDepthPrePass = HH, this._renderingManager.disableDepthPrePass = HH
      }
      get name() {
        return this._name
      }
      set name(HH) {
        if (this._name !== HH) {
          if (this._name = HH, this._sceneUBOs)
            for (let HH = 0; HH < this._sceneUBOs.length; ++HH) this._sceneUBOs[HH].name = `Scene ubo #${HH} for ${this.name}`;
          if (this._scene)
            for (let HH = 0; HH < this._renderPassIds.length; ++HH) {
              const BH = this._renderPassIds[HH];
              this._engine._renderPassNames[BH] = `${this._name}#${HH}`
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
      setMaterialForRendering(HH, BH) {
        let LH;
        LH = Array.isArray(HH) ? HH : [HH];
        for (let AH = 0; AH < LH.length; ++AH)
          for (let HH = 0; HH < this.options.numPasses; ++HH) {
            let rH = LH[AH];
            LH[AH].xR && (rH = LH[AH].XSH), rH.setMaterialForRenderPass(this._renderPassIds[HH], void 0 !== BH ? Array.isArray(BH) ? BH[HH] : BH : void 0)
          }
      }
      _freezeActiveMeshes(HH) {
        this._freezeActiveMeshesCancel = (0, GH.f)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, HH)
            for (let HH = 0; HH < this._activeMeshes.length; HH++) this._activeMeshes.data[HH]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((HH, BH) => {
          this._freezeActiveMeshesCancel = null, BH ? (zH.e.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), HH && zH.e.Error(HH)) : (zH.e.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), HH && (zH.e.Error(HH), HH.stack && zH.e.Error(HH.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let HH = 0; HH < this._activeMeshes.length; HH++) this._activeMeshes.data[HH]._unFreeze();
        this._isFrozen = !1
      }
      constructor(HH, BH, LH) {
        this._unObserveRenderList = null, this._renderListHasChanged = (HH, BH) => {
          const LH = this._renderList ? this._renderList.length : 0;
          if (0 === BH && LH > 0 || 0 === LH)
            for (const AH of this._scene.meshes) AH._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new AH.d, this.onAfterRenderObservable = new AH.d, this.onBeforeRenderingManagerRenderObservable = new AH.d, this.onAfterRenderingManagerRenderObservable = new AH.d, this.onInitRenderingObservable = new AH.d, this.onFinishRenderingObservable = new AH.d, this.onFastPathRenderObservable = new AH.d, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new YH.i(256), this._activeBoundingBoxes = new YH.i(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = HH, this._scene = BH, this._engine = this._scene.Iu(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...LH
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new EH.c(BH), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const HH of this._scene.lights) HH.getTypeID() === uH.e.LIGHTTYPEID_CLUSTERED_CONTAINER && HH.isSupported && HH._updateBatches(this.activeCamera).render()
        })), this._scene.addObjectRenderer(this)
      }
      _releaseRenderPassId() {
        for (let HH = 0; HH < this.options.numPasses; ++HH) this._engine.releaseRenderPassId(this._renderPassIds[HH]);
        this._renderPassIds.length = 0
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let HH = 0; HH < this.options.numPasses; ++HH) this._renderPassIds[HH] = this._engine.createRenderPassId(`${this.name}#${HH}`)
      }
      _createSceneUBO(HH, BH) {
        const LH = this._scene.Iu(),
          AH = new CH.c(LH, void 0, BH, HH, void 0, !1);
        return AH.addUniform("viewProjection", 16), BH && AH.addUniform("viewProjectionR", 16), AH.addUniform("view", 16), AH.addUniform("projection", 16), AH.addUniform("vEyePosition", 4), AH.addUniform("inverseProjection", 16), AH
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const HH = this._engine._currentRenderTarget,
          BH = !(!HH || !HH.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const HH = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${HH} for ${this.name}`, BH)), this._sceneUBOIsMultiview.push(BH)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== BH && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, BH), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = BH);
        const LH = this._sceneUBOs[this._currentSceneUBOIndex++];
        return LH.unbindEffect(), LH
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1
      }
      get refreshRate() {
        return this._refreshRate
      }
      set refreshRate(HH) {
        this._refreshRate = HH, this.resetRefreshCounter()
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1))
      }
      isReadyForRendering(HH, BH) {
        this.prepareRenderList(), this.initRender(HH, BH);
        const LH = this._checkReadiness();
        return this.finishRender(), LH
      }
      prepareRenderList() {
        const HH = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let BH = 0; BH < this._waitingRenderList.length; BH++) {
              const LH = this._waitingRenderList[BH],
                AH = HH.getMeshById(LH);
              AH && this.renderList.push(AH)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const HH = this._scene.meshes;
          for (let BH = 0; BH < HH.length; BH++) {
            const LH = HH[BH];
            this.renderListPredicate(LH) && this.renderList.push(LH)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(HH, BH) {
        const LH = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), LH && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(LH.getViewMatrix(), LH.getProjectionMatrix(!0)), this._scene._activeCamera = LH, this._engine.setViewport(LH.rigParent ? LH.rigParent.viewport : LH.viewport, HH, BH)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const HH = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (HH.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), HH._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== HH.activeCamera && HH.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), HH.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const LH = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[HH], this.onBeforeRenderObservable.notifyObservers(HH);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(HH);
        else {
          const BH = this._prepareRenderingManager(HH),
            LH = this._scene.getOutlineRenderer?.(),
            AH = LH?.enabled;
          LH && (LH.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(HH), this._renderingManager.render(this.customRenderFunction, BH, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(HH), LH && (LH.enabled = AH)
        }
        BH || this.onAfterRenderObservable.notifyObservers(HH), this._engine.currentRenderPassId = LH
      }
      _checkReadiness() {
        const HH = this._scene,
          BH = this._engine.currentRenderPassId;
        let LH = !0;
        HH.getViewMatrix() || HH.updateTransformMatrix();
        const AH = this.options.numPasses;
        for (let rH = 0; rH < AH && LH; rH++) {
          const BH = this.renderList ? this.renderList : HH.frameGraph ? HH.meshes : HH.getActiveMeshes().data,
            SH = this.renderList || HH.frameGraph ? BH.length : HH.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[rH], this.onBeforeRenderObservable.notifyObservers(rH);
          let hH = null,
            tH = SH;
          this.getCustomRenderList && (hH = this.getCustomRenderList(rH, BH, SH), hH && (tH = hH.length)), hH || (hH = BH), this.options.doNotChangeAspectRatio || HH.updateTransformMatrix(!0);
          for (let HH = 0; HH < tH && LH; ++HH) {
            const BH = hH[HH];
            if (!BH.isEnabled() || BH.isBlocked || !BH.isVisible || !BH.jU) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(BH, this.refreshRate, !0)) {
                LH = !1;
                continue
              }
            } else if (!BH.isReady(!0)) {
              LH = !1;
              continue
            }
            let AH = BH._edgesRenderer,
              rH = BH.hasThinInstances;
            if (BH.xR) {
              const HH = BH.XSH;
              HH.edgesShareWithInstances && HH._edgesRenderer?.isEnabled && (AH = HH._edgesRenderer, rH = !0)
            } else BH.ESH && BH.edgesShareWithInstances && (rH = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && AH?.isEnabled && (AH.isReady(rH) || (LH = !1))
          }
          if (this.renderParticles && HH.particlesEnabled) {
            const BH = this.particleSystemList || HH.dU;
            for (const HH of BH) HH.isReady() || (LH = !1)
          }
          if (this.renderSprites && HH.spritesEnabled) {
            const BH = this.spriteManagerList || HH.spriteManagers;
            if (BH)
              for (const AH of BH) HH.activeCamera && 0 === (AH.layerMask & HH.activeCamera.layerMask) || AH.isReady && !AH.isReady() && (LH = !1)
          }
          this.onAfterRenderObservable.notifyObservers(rH), AH > 1 && (HH.incrementRenderId(), HH.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = BH, LH
      }
      _prepareRenderingManager() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const LH = this._scene;
        let AH, rH, SH = null;
        const hH = this.renderList ? this.renderList : LH.frameGraph ? LH.meshes : LH.getActiveMeshes().data,
          tH = this.renderList || LH.frameGraph ? hH.length : LH.getActiveMeshes().length;
        if (this.getCustomRenderList && (SH = this.getCustomRenderList(HH, hH, tH)), SH) AH = SH.length, rH = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !BH && !this._engine.isWebGPU) return hH;
          this._defaultRenderListPrepared = !0, SH = hH, AH = tH, rH = !this.renderList || this.forceLayerMaskCheck
        }
        const zH = LH.activeCamera,
          CH = this.cameraForLOD ?? zH,
          EH = LH.getBoundingBoxRenderer?.();
        if (LH._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && EH) {
            EH.reset();
            for (let HH = 0; HH < this._activeBoundingBoxes.length; HH++) {
              const BH = this._activeBoundingBoxes.data[HH];
              EH.renderList.push(BH)
            }
          }
          return SH
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), EH && EH.reset(), this.renderMeshes) {
          const HH = LH.getRenderId(),
            BH = LH.getFrameId();
          for (let hH = 0; hH < AH; hH++) {
            const AH = SH[hH];
            if (AH && !AH.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(AH, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!AH.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let SH, hH;
              if (CH) {
                const HH = AH._internalAbstractMeshDataInfo._currentLOD.get(CH);
                HH && HH[1] === BH ? SH = HH[0] : (SH = LH.customLODSelector ? LH.customLODSelector(AH, CH) : AH.getLOD(CH), HH ? (HH[0] = SH, HH[1] = BH) : AH._internalAbstractMeshDataInfo._currentLOD.set(CH, [SH, BH]))
              } else SH = AH;
              if (!SH) continue;
              if (SH !== AH && 0 !== SH.billboardMode && SH.computeWorldMatrix(), SH._preActivateForIntermediateRendering(HH), hH = !(!rH || !zH) && 0 === (AH.layerMask & zH.layerMask), AH.isEnabled() && AH.isVisible && AH.jU && !hH) {
                if (this._activeMeshes.push(AH), SH._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, SH !== AH && SH._activate(HH, !0), this.enableBoundingBoxRendering && EH && EH._preActiveMesh(AH), AH._activate(HH, !0) && AH.jU.length) {
                  AH.xR ? AH._internalAbstractMeshDataInfo._actAsRegularMesh && (SH = AH) : SH._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, SH._internalAbstractMeshDataInfo._isActiveIntermediate = !0, LH._prepareSkeleton(SH);
                  for (let HH = 0; HH < SH.jU.length; HH++) {
                    const BH = SH.jU[HH];
                    this.enableBoundingBoxRendering && EH && EH._evaluateSubMesh(AH, BH), this._renderingManager.dispatch(BH, SH)
                  }
                }
                AH._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && EH && BH)
          for (let XH = 0; XH < EH.renderList.length; XH++) {
            const HH = EH.renderList.data[XH];
            this._activeBoundingBoxes.push(HH)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const HH = this.particleSystemList || LH.dU;
          for (let BH = 0; BH < HH.length; BH++) {
            const LH = HH[BH],
              AH = LH.emitter;
            LH.isStarted() && AH && (!AH.position || AH.isEnabled()) && this._renderingManager.dispatchParticles(LH)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return SH
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(HH, BH, LH, AH)
      }
      setRenderingAutoClearDepthStencil(HH, BH) {
        let LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          AH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(HH, BH, LH, AH), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const HH = new QH(this.name, this._scene, this.options);
        return this.renderList && (HH.renderList = this.renderList.slice(0)), HH
      }
      dispose() {
        const HH = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          BH = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let LH = 0; LH < BH; LH++) {
          const BH = HH[LH];
          BH && void 0 !== BH.getMaterialForRenderPass(this.renderPassId) && BH.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const LH of this._sceneUBOs) LH.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === QH.REFRESHRATE_RENDER_ONCE && (this.refreshRate = QH.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    QH.REFRESHRATE_RENDER_ONCE = 0, QH.REFRESHRATE_RENDER_ONEVERYFRAME = 1, QH.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var WH = LH(41169);
    class MH extends SH.g {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate
      }
      set renderListPredicate(HH) {
        this._objectRenderer.renderListPredicate = HH
      }
      get renderList() {
        return this._objectRenderer.renderList
      }
      set renderList(HH) {
        this._objectRenderer.renderList = HH
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList
      }
      set particleSystemList(HH) {
        this._objectRenderer.particleSystemList = HH
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList
      }
      set getCustomRenderList(HH) {
        this._objectRenderer.getCustomRenderList = HH
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles
      }
      set renderParticles(HH) {
        this._objectRenderer.renderParticles = HH
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites
      }
      set renderSprites(HH) {
        this._objectRenderer.renderSprites = HH
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering
      }
      set enableBoundingBoxRendering(HH) {
        this._objectRenderer.enableBoundingBoxRendering = HH
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering
      }
      set enableOutlineRendering(HH) {
        this._objectRenderer.enableOutlineRendering = HH
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck
      }
      set forceLayerMaskCheck(HH) {
        this._objectRenderer.forceLayerMaskCheck = HH
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera
      }
      set activeCamera(HH) {
        this._objectRenderer.activeCamera = HH
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD
      }
      set cameraForLOD(HH) {
        this._objectRenderer.cameraForLOD = HH
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing
      }
      set disableImageProcessing(HH) {
        this._objectRenderer.disableImageProcessing = HH
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction
      }
      set customIsReadyFunction(HH) {
        this._objectRenderer.customIsReadyFunction = HH
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction
      }
      set customRenderFunction(HH) {
        this._objectRenderer.customRenderFunction = HH
      }
      get postProcesses() {
        return this._postProcesses
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled
      }
      set onAfterUnbind(HH) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(HH)
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable
      }
      set onBeforeRender(HH) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(HH)
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable
      }
      set onAfterRender(HH) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(HH)
      }
      set onClear(HH) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(HH)
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList
      }
      set _waitingRenderList(HH) {
        this._objectRenderer._waitingRenderList = HH
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
      setMaterialForRendering(HH, BH) {
        this._objectRenderer.setMaterialForRendering(HH, BH)
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
      set boundingBoxSize(HH) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(HH)) return;
        this._boundingBoxSize = HH;
        const BH = this.yN();
        BH && BH.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(HH, BH, LH) {
        let hH, tH, CH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          EH = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          XH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          GH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          YH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : SH.g.TRILINEAR_SAMPLINGMODE,
          uH = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          WH = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          MH = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          xH = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          vH = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          PH = arguments.length > 13 ? arguments[13] : void 0,
          TH = arguments.length > 14 ? arguments[14] : void 0,
          UH = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          VH = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          OH = !0,
          bH = !1;
        if ("object" === typeof CH) {
          const HH = CH;
          CH = !!HH.generateMipMaps, EH = HH.doNotChangeAspectRatio ?? !0, XH = HH.type ?? 0, GH = !!HH.isCube, YH = HH.samplingMode ?? SH.g.TRILINEAR_SAMPLINGMODE, uH = HH.generateDepthBuffer ?? !0, WH = !!HH.generateStencilBuffer, MH = !!HH.isMulti, xH = HH.format ?? 5, vH = !!HH.delayAllocation, PH = HH.samples, TH = HH.creationFlags, UH = !!HH.noColorAttachment, VH = !!HH.useSRGBBuffer, hH = HH.colorAttachment, OH = HH.gammaSpace ?? OH, tH = HH.existingObjectRenderer, bH = !!HH.enableClusteredLights
        }
        if (super(null, LH, !CH, void 0, YH, void 0, void 0, void 0, void 0, xH), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new AH.d, this.onAfterUnbindObservable = new AH.d, this.onClearObservable = new AH.d, this.onResizeObservable = new AH.d, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = rH.o.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(LH = this.yN())) return;
        const kH = this.yN().Iu();
        this._gammaSpace = OH, this._coordinatesMode = SH.g.PROJECTION_MODE, this.name = HH, this.isRenderTarget = !0, this._initialSizeParameter = BH, this._dontDisposeObjectRenderer = !!tH, this._processSizeParameter(BH), this._objectRenderer = tH ?? new QH(HH, LH, {
          numPasses: GH ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: EH,
          enableClusteredLights: bH
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const HH = this._scene;
          if (!this._disableEngineStages)
            for (const BH of HH._beforeRenderTargetClearStage) BH.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(kH) : this.skipInitialClear || kH.clear(this.clearColor ?? HH.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || HH.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const BH of HH._beforeRenderTargetDrawStage) BH.action(this, this._currentFaceIndex, this._currentLayer);
          kH._debugPushGroup && kH._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (kH._debugPopGroup && kH._debugPopGroup(), !this._disableEngineStages)
            for (const BH of this._scene._afterRenderTargetDrawStage) BH.action(this, this._currentFaceIndex, this._currentLayer);
          const HH = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const BH of this._scene._afterRenderTargetPostProcessStage) BH.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = HH), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), kH) : zH.e.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(kH) : this.skipInitialClear || kH.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = kH.onResizeObservable.add((() => {})), this._generateMipMaps = !!CH, this._doNotChangeAspectRatio = EH, MH || (this._renderTargetOptions = {
          generateMipMaps: CH,
          type: XH,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: uH,
          generateStencilBuffer: WH,
          samples: PH,
          creationFlags: TH,
          noColorAttachment: UH,
          useSRGBBuffer: VH,
          colorAttachment: hH,
          label: this.name
        }, this.samplingMode === SH.g.NEAREST_SAMPLINGMODE && (this.wrapU = SH.g.CLAMP_ADDRESSMODE, this.wrapV = SH.g.CLAMP_ADDRESSMODE), vH || (GH ? (this._renderTarget = LH.Iu().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = SH.g.INVCUBIC_MODE, this._textureMatrix = rH.e.Identity()) : this._renderTarget = LH.Iu().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== PH && (this.samples = PH)))
      }
      createDepthStencilTexture() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          SH = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(HH, BH, LH, AH, rH, SH)
      }
      _processSizeParameter(HH) {
        if (HH.ratio) {
          this._sizeRatio = HH.ratio;
          const BH = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(BH.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(BH.getRenderHeight(), this._sizeRatio)
          }
        } else this._size = HH
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples
      }
      set samples(HH) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(HH))
      }
      addPostProcess(HH) {
        if (!this._postProcessManager) {
          const HH = this.yN();
          if (!HH) return;
          this._postProcessManager = new hH.e(HH), this._postProcesses = new Array
        }
        this._postProcesses.push(HH), this._postProcesses[0].autoClear = !1
      }
      clearPostProcesses() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (HH)
            for (const HH of this._postProcesses) HH.dispose();
          this._postProcesses = []
        }
      }
      removePostProcess(HH) {
        if (!this._postProcesses) return;
        const BH = this._postProcesses.indexOf(HH); - 1 !== BH && (this._postProcesses.splice(BH, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter()
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate
      }
      set refreshRate(HH) {
        this._objectRenderer.refreshRate = HH
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
        const HH = this._size.layers;
        if (HH) return HH;
        const BH = this._size.depth;
        return BH || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(HH) {
        const BH = Math.max(1, this.getRenderSize() * HH);
        this.resize(BH)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(HH) {
        const BH = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const LH = this.yN();
        LH && (this._processSizeParameter(HH), this._renderTarget = BH ? LH.Iu().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : LH.Iu().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(HH, BH)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => LH(45299))).then((HH => this._dumpTools = HH))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const HH = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), HH
      }
      _render() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const LH = this.yN();
        if (!LH) return;
        void 0 !== this.useCameraPostProcesses && (HH = this.useCameraPostProcesses);
        const AH = LH.Iu();
        if (AH._debugPushGroup && AH._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let rH = 0; rH < 6; rH++) this._renderToTarget(rH, HH, BH), LH.incrementRenderId(), LH.resetCachedMaterial();
          else this._renderToTarget(0, HH, BH);
        else
          for (let rH = 0; rH < this.getRenderLayers(); rH++) this._renderToTarget(0, HH, BH, rH), LH.incrementRenderId(), LH.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), AH._debugPopGroup && AH._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(HH, BH) {
        const LH = HH * BH,
          AH = (0, tH.m)(LH + 16384 / (128 + LH));
        return Math.min((0, tH.b)(HH), AH)
      }
      _bindFrameBuffer() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const LH = this.yN();
        if (!LH) return;
        const AH = LH.Iu();
        this._renderTarget && AH.bindFramebuffer(this._renderTarget, this.isCube ? HH : void 0, void 0, void 0, this.ignoreCameraViewport, 0, BH)
      }
      _unbindFrameBuffer(HH, BH) {
        this._renderTarget && HH.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(BH)
        }))
      }
      _prepareFrame(HH, BH, LH, AH) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(BH, LH) : AH && HH.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(BH, LH)
      }
      _renderToTarget(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const rH = this.yN();
        if (!rH) return;
        const SH = rH.Iu();
        this._currentFaceIndex = HH, this._currentLayer = AH, this._currentUseCameraPostProcess = BH, this._currentDumpForDebug = LH, this._prepareFrame(rH, HH, AH, BH), this._objectRenderer.render(HH + AH, !0), this._unbindFrameBuffer(SH, HH), this._texture && this.isCube && 5 === HH && SH.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(HH, BH, LH, AH)
      }
      setRenderingAutoClearDepthStencil(HH, BH) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(HH, BH)
      }
      clone() {
        const HH = this.getSize(),
          BH = new MH(this.name, HH, this.yN(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return BH.hasAlpha = this.hasAlpha, BH.level = this.level, BH.coordinatesMode = this.coordinatesMode, this.renderList && (BH.renderList = this.renderList.slice(0)), BH
      }
      serialize() {
        if (!this.name) return null;
        const HH = super.serialize();
        if (HH.renderTargetSize = this.getRenderSize(), HH.renderList = [], this.renderList)
          for (let BH = 0; BH < this.renderList.length; BH++) HH.renderList.push(this.renderList[BH].id);
        return HH
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.yN().Iu().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const HH = this.yN();
        if (!HH) return;
        let BH = HH.customRenderTargets.indexOf(this);
        BH >= 0 && HH.customRenderTargets.splice(BH, 1);
        for (const LH of HH.cameras) BH = LH.customRenderTargets.indexOf(this), BH >= 0 && LH.customRenderTargets.splice(BH, 1);
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
    MH.REFRESHRATE_RENDER_ONCE = QH.REFRESHRATE_RENDER_ONCE, MH.REFRESHRATE_RENDER_ONEVERYFRAME = QH.REFRESHRATE_RENDER_ONEVERYFRAME, MH.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = QH.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(MH.prototype, "noPrePassRenderer") || Object.defineProperty(MH.prototype, "noPrePassRenderer", (0, WH.e)("RenderTargetTexture", "noPrePassRenderer"))
  },
  45271: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => CH,
      f: () => EH
    });
    var AH = LH(41427),
      rH = LH(38966),
      SH = LH(37997),
      hH = LH(41134),
      tH = LH(41609);
    const zH = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class CH {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zH;
        this._fullscreenViewport = new rH.c(0, 0, 1, 1);
        const LH = BH.positions ?? zH.positions,
          SH = BH.indices ?? zH.indices;
        this.engine = HH, this._vertexBuffers = {
          [AH.i.PositionKind]: new AH.i(HH, LH, AH.i.PositionKind, !1, !1, 2)
        }, this._indexBuffer = HH.createIndexBuffer(SH), this._indexBufferLength = SH.length, this._onContextRestoredObserver = HH.ou.add((() => {
          this._indexBuffer = HH.createIndexBuffer(SH);
          for (const HH in this._vertexBuffers) {
            this._vertexBuffers[HH]._rebuild()
          }
        }))
      }
      setViewport() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.engine.setViewport(HH)
      }
      bindBuffers(HH) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, HH)
      }
      applyEffectWrapper(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = BH, this.engine.stencilState.stencilTest = LH, this.engine.enableEffect(HH.drawWrapper), this.bindBuffers(HH.effect), HH.onApplyObservable.notifyObservers({})
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
      _isRenderTargetTexture(HH) {
        return void 0 !== HH.renderTarget
      }
      render(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!HH.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const LH = null === BH ? null : this._isRenderTargetTexture(BH) ? BH.renderTarget : BH;
        LH && this.engine.bindFramebuffer(LH), this.applyEffectWrapper(HH), this.draw(), LH && this.engine.unBindFramebuffer(LH), this.restoreStates()
      }
      dispose() {
        const HH = this._vertexBuffers[AH.i.PositionKind];
        HH && (HH.dispose(), delete this._vertexBuffers[AH.i.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.ou.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class EH {
      static RegisterShaderCodeProcessing(HH, BH) {
        BH ? EH._CustomShaderCodeProcessing[HH ?? ""] = BH : delete EH._CustomShaderCodeProcessing[HH ?? ""]
      }
      static _GetShaderCodeProcessing(HH) {
        return EH._CustomShaderCodeProcessing[HH] ?? EH._CustomShaderCodeProcessing[""]
      }
      get name() {
        return this.options.name
      }
      set name(HH) {
        this.options.name = HH
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
      set effect(HH) {
        this._drawWrapper.effect = HH
      }
      constructor(HH) {
        this.alphaMode = 0, this.onEffectCreatedObservable = new SH.d(void 0, !0), this.onApplyObservable = new SH.d, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
          ...HH,
          name: HH.name || "effectWrapper",
          engine: HH.engine,
          uniforms: HH.uniforms || HH.uniformNames || [],
          uniformNames: void 0,
          samplers: HH.samplers || HH.samplerNames || [],
          samplerNames: void 0,
          attributeNames: HH.attributeNames || ["position"],
          uniformBuffers: HH.uniformBuffers || [],
          defines: HH.defines || "",
          useShaderStore: HH.useShaderStore || !1,
          vertexUrl: HH.vertexUrl || HH.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: HH.fragmentShader || "pass",
          indexParameters: HH.indexParameters,
          blockCompilation: HH.blockCompilation || !1,
          shaderLanguage: HH.shaderLanguage || 0,
          onCompiled: HH.onCompiled || void 0,
          extraInitializations: HH.extraInitializations || void 0,
          extraInitializationsAsync: HH.extraInitializationsAsync || void 0,
          useAsPostProcess: HH.useAsPostProcess ?? !1,
          allowEmptySourceTexture: HH.allowEmptySourceTexture ?? !1
        }, this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), HH.vertexUrl || HH.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add((() => {
          this.effect.setFloat2("scale", 1, 1)
        }))), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add((() => {
          this.bind()
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.ou.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new tH.e(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const BH = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, BH, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          AH = arguments.length > 2 ? arguments[2] : void 0,
          rH = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, rH && this._importPromises.push(...rH);
        const SH = this.options.engine.isWebGPU && !EH.ForceGLSL;
        this._gatherImports(SH, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(SH && this._webGPUReady ? LH.e(672).then((() => LH(64241))) : LH.e(662).then((() => LH(64110)))), void 0 !== AH && AH(SH, this._importPromises), SH && this._webGPUReady && (this.options.shaderLanguage = 1), HH || this.updateEffect(BH)
      }
      updateEffect() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          AH = arguments.length > 3 ? arguments[3] : void 0,
          rH = arguments.length > 4 ? arguments[4] : void 0,
          SH = arguments.length > 5 ? arguments[5] : void 0,
          tH = arguments.length > 6 ? arguments[6] : void 0,
          zH = arguments.length > 7 ? arguments[7] : void 0;
        const CH = EH._GetShaderCodeProcessing(this.name);
        if (CH?.defineCustomBindings) {
          const AH = BH?.slice() ?? [];
          AH.push(...this.options.uniforms);
          const rH = LH?.slice() ?? [];
          rH.push(...this.options.samplers), HH = CH.defineCustomBindings(this.name, HH, AH, rH), BH = AH, LH = rH
        }
        this.options.defines = HH || "";
        const XH = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let GH;
        GH = this.options.extraInitializationsAsync ? async () => {
          await (XH?.()), await this.options.extraInitializationsAsync()
        }: XH, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: tH ?? this._shaderPath.vertex,
          fragment: zH ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: BH || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: LH || this.options.samplers,
          defines: null !== HH ? HH : "",
          fallbacks: null,
          onCompiled: rH ?? this.options.onCompiled,
          onError: SH ?? null,
          indexParameters: AH || this.options.indexParameters,
          processCodeAfterIncludes: CH?.processCodeAfterIncludes ? (HH, BH) => CH.processCodeAfterIncludes(this.name, HH, BH) : null,
          processFinalCode: CH?.processFinalCode ? (HH, BH) => CH.processFinalCode(this.name, HH, BH) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: GH
        }, this.options.engine) : this._drawWrapper.effect = new hH.c(this._shaderPath, this.options.attributeNames, BH || this.options.uniforms, LH || this.options.samplerNames, this.options.engine, HH, void 0, rH || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, GH), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !HH && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), EH._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.Iu().ou.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    EH.ForceGLSL = !1, EH._CustomShaderCodeProcessing = {}
  },
  45299: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      Dispose: () => xH,
      DumpData: () => MH,
      DumpDataAsync: () => WH,
      DumpFramebuffer: () => QH,
      DumpTools: () => vH,
      EncodeImageAsync: () => uH,
      RegisterDumpTools: () => TH
    });
    var AH = LH(41290),
      rH = LH(45271),
      SH = LH(41387),
      hH = LH(38002),
      tH = LH(37989),
      zH = LH(39595),
      CH = LH(41353),
      EH = LH(41297);
    let XH = null;
    async function GH() {
      return XH || (XH = async function() {
        const HH = tH.d.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        HH instanceof OffscreenCanvas && zH.e.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: BH
        } = await Promise.resolve().then((() => LH(41129)));
        if (!BH.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const AH = new BH(HH, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        tH.d.Instances.pop(), tH.d.OnEnginesDisposedObservable.add((HH => {
          AH && HH !== AH && !AH.mV && 0 === tH.d.Instances.length && xH()
        })), AH.getCaps().parallelShaderCompile = void 0;
        const SH = new rH.e(AH),
          {
            passPixelShader: hH
          } = await LH.e(680).then((() => LH(64302))),
          CH = new rH.f({
            engine: AH,
            name: hH.name,
            fragmentShader: hH.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: HH,
          dumpEngine: {
            engine: AH,
            renderer: SH,
            wrapper: CH
          }
        }
      }()), await XH
    }
    let YH = (() => {
      var HH;
      let BH, LH = [];
      return HH = class {
        static async EncodeImageAsync(HH, BH, LH, AH, rH, hH) {
          const tH = await GH(),
            zH = tH.dumpEngine;
          zH.engine.setSize(BH, LH, !0);
          const CH = zH.engine.createRawTexture(HH, BH, LH, 5, !1, !rH, 1);
          return zH.renderer.setViewport(), zH.renderer.applyEffectWrapper(zH.wrapper), zH.wrapper.effect._bindTexture("textureSampler", CH), zH.renderer.draw(), CH.dispose(), await new Promise(((HH, BH) => {
            SH.i.ToBlob(tH.canvas, (LH => {
              LH ? HH(LH) : BH(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), AH, hH)
          }))
        }
      }, (() => {
        const rH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        BH = [EH.g], (0, AH.g)(HH, null, BH, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: HH => "EncodeImageAsync" in HH,
            get: HH => HH.EncodeImageAsync
          },
          metadata: rH
        }, null, LH), rH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rH
        }), (0, AH.k)(HH, LH)
      })(), HH
    })();
    const uH = YH.EncodeImageAsync;
    async function QH(HH, BH, LH, AH) {
      let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        SH = arguments.length > 5 ? arguments[5] : void 0,
        hH = arguments.length > 6 ? arguments[6] : void 0;
      const tH = await LH.readPixels(0, 0, HH, BH);
      MH(HH, BH, new Uint8Array(tH.buffer), AH, rH, SH, !0, void 0, hH)
    }
    async function WH(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        rH = arguments.length > 4 ? arguments[4] : void 0,
        tH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        EH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        XH = arguments.length > 7 ? arguments[7] : void 0;
      if (LH instanceof Float32Array) {
        const HH = new Uint8Array(LH.length);
        let BH = LH.length;
        for (; BH--;) {
          const AH = LH[BH];
          HH[BH] = Math.round(255 * (0, hH.Clamp)(AH))
        }
        LH = HH
      }
      const GH = await YH.EncodeImageAsync(LH, HH, BH, AH, tH, XH);
      void 0 !== rH && SH.i.DownloadBlob(GH, rH), GH.type !== AH && zH.e.Warn(`DumpData: The requested mimeType '${AH}' is not supported. The result has mimeType '${GH.type}' instead.`);
      const uH = await GH.arrayBuffer();
      return EH ? uH : `data:${AH};base64,${(0,CH.f)(uH)}`
    }

    function MH(HH, BH, LH, AH) {
      let rH = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== rH || AH || (rH = ""), WH(HH, BH, LH, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", rH, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((HH => {
        AH && AH(HH)
      }))
    }

    function xH() {
      XH && (XH?.then((HH => {
        HH.canvas instanceof HTMLCanvasElement && HH.canvas.remove(), HH.dumpEngine && (HH.dumpEngine.engine.dispose(), HH.dumpEngine.renderer.dispose(), HH.dumpEngine.wrapper.dispose())
      })), XH = null)
    }
    const vH = {
      DumpData: MH,
      DumpDataAsync: WH,
      DumpFramebuffer: QH,
      Dispose: xH
    };
    let PH = !1;

    function TH() {
      if (PH) return;
      PH = !0;
      SH.i.DumpData = MH, SH.i.DumpDataAsync = WH, SH.i.DumpFramebuffer = QH
    }
  },
  45285: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => YH,
      g: () => uH,
      i: () => QH
    });
    var AH = LH(41777),
      rH = LH(45290),
      SH = LH(41290),
      hH = LH(45266),
      tH = LH(41319),
      zH = LH(45296),
      CH = LH(41297);
    class EH extends hH.d {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(HH, BH) {
        let LH = arguments.length > 4 ? arguments[4] : void 0;
        const AH = {
          size: "number" === typeof BH ? BH : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: LH,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...BH
        };
        super(HH, zH.f.FragmentUrl, {
          effectWrapper: "number" !== typeof BH && BH.effectWrapper ? void 0 : new zH.f(HH, LH, AH),
          ...AH
        })
      }
      static _Parse(HH, BH, LH, AH) {
        return tH.c.Parse((() => new EH(HH.name, HH.options, BH, HH.renderTargetSamplingMode, HH._engine, HH.reusable)), HH, LH, AH)
      }
    }(() => {
      var HH;
      let BH, LH = hH.d,
        AH = [];
      HH = class extends LH {
        get face() {
          return this._effectWrapper.face
        }
        set face(HH) {
          this._effectWrapper.face = HH
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(HH, BH) {
          let LH = arguments.length > 4 ? arguments[4] : void 0;
          const rH = {
            size: "number" === typeof BH ? BH : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: LH,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...BH
          };
          super(HH, zH.f.FragmentUrl, {
            effectWrapper: "number" !== typeof BH && BH.effectWrapper ? void 0 : new zH.b(HH, LH, rH),
            ...rH
          }), (0, SH.k)(this, AH)
        }
        static _Parse(BH, LH, AH, rH) {
          return tH.c.Parse((() => new HH(BH.name, BH.options, LH, BH.renderTargetSamplingMode, BH._engine, BH.reusable)), BH, AH, rH)
        }
      }, (() => {
        const rH = "function" === typeof Symbol && Symbol.metadata ? Object.create(LH[Symbol.metadata] ?? null) : void 0;
        BH = [(0, CH.H)()], (0, SH.g)(HH, null, BH, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: HH => "face" in HH,
            get: HH => HH.face
          },
          metadata: rH
        }, null, AH), rH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rH
        })
      })()
    })();
    var XH = LH(38002),
      GH = LH(41364);

    function YH(HH, BH, LH, AH, rH, SH, tH, zH) {
      const CH = BH.Iu();
      return BH.isReady = !1, rH = rH ?? BH.samplingMode, AH = AH ?? BH.type, SH = SH ?? BH.format, tH = tH ?? BH.width, zH = zH ?? BH.height, -1 === AH && (AH = 0), new Promise((EH => {
        const XH = new hH.d("postprocess", HH, null, null, 1, null, rH, CH, !1, void 0, AH, void 0, null, !1, SH);
        XH.externalTextureSamplerBinding = !0;
        const GH = CH.createRenderTargetTexture({
          width: tH,
          height: zH
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: rH,
          type: AH,
          format: SH
        });
        XH.onEffectCreatedObservable.addOnce((HH => {
          HH.executeWhenCompiled((() => {
            XH.onApply = HH => {
              HH._bindTexture("textureSampler", BH), HH.setFloat2("scale", 1, 1)
            }, LH.postProcessManager.directRender([XH], GH, !0), CH.restoreDefaultFramebuffer(), CH._releaseTexture(BH), XH && XH.dispose(), GH._swapAndDie(BH), BH.type = AH, BH.format = 5, BH.isReady = !0, EH(BH)
          }))
        }))
      }))
    }
    async function uH(HH, BH, SH) {
      let tH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        zH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        CH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        EH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(HH) {
        if (HH.isReady()) return;
        if (HH.loadingError) throw new Error(HH.errorObject?.message || `Texture ${HH.name} errored while loading.`);
        const BH = HH.onLoadObservable;
        if (BH) return await new Promise((HH => BH.addOnce((() => HH()))));
        const LH = HH._texture?.onLoadedObservable;
        if (LH) return await new Promise((HH => LH.addOnce((() => HH()))));
        throw new Error(`Cannot determine readiness of texture ${HH.name}.`)
      }(HH);
      const GH = HH.getInternalTexture(),
        YH = HH.is3D || !!GH?.is3D,
        {
          width: uH,
          height: QH
        } = HH.getSize(),
        WH = BH ?? uH,
        MH = SH ?? QH;
      if (CH || YH || function(HH) {
          switch (HH) {
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
        }(HH.textureFormat) || WH !== uH || MH !== QH) {
        if (HH.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${CH?"RTT":"compression"} is not supported.`);
        return await async function(HH, BH, SH, tH, zH) {
          let CH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const EH = HH.yN(),
            XH = EH.Iu(),
            GH = HH.getInternalTexture(),
            YH = HH.is3D || !!GH?.is3D;
          let uH;
          if (XH.isWebGPU ? YH ? await LH.e(676).then((() => LH(64276))) : HH.isCube ? await LH.e(677).then((() => LH(64283))) : await LH.e(678).then((() => LH(64288))) : YH ? await LH.e(673).then((() => LH(64252))) : HH.isCube ? await LH.e(674).then((() => LH(64261))) : await LH.e(675).then((() => LH(64267))), YH) uH = new hH.d("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: AH.g.NEAREST_NEAREST_MIPNEAREST,
            engine: XH,
            shaderLanguage: XH.isWebGPU ? 1 : 0
          });
          else if (HH.isCube) {
            const HH = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            uH = new hH.d("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: AH.g.NEAREST_NEAREST_MIPNEAREST,
              engine: XH,
              defines: HH[tH],
              shaderLanguage: XH.isWebGPU ? 1 : 0
            })
          } else uH = new hH.d("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: AH.g.NEAREST_NEAREST_MIPNEAREST,
            engine: XH,
            shaderLanguage: XH.isWebGPU ? 1 : 0
          });
          await new Promise((HH => {
            uH.onEffectCreatedObservable.addOnce((BH => {
              BH.executeWhenCompiled((() => {
                HH(0)
              }))
            }))
          }));
          const QH = new rH.c("temp", {
            width: BH,
            height: SH
          }, EH, !1);
          uH.onApply = function(BH) {
            BH.setTexture("textureSampler", HH), BH.setFloat("lod", zH), BH.setInt("gamma", HH.gammaSpace ? 1 : 0), YH && BH.setFloat("slice", CH)
          };
          try {
            if (QH.renderTarget && GH) {
              const LH = GH.samplingMode;
              0 !== zH ? HH.updateSamplingMode(AH.g.NEAREST_NEAREST_MIPNEAREST) : HH.updateSamplingMode(AH.g.NEAREST_NEAREST), EH.postProcessManager.directRender([uH], QH.renderTarget, !0), HH.updateSamplingMode(LH);
              const rH = await XH.readPixels(0, 0, BH, SH),
                hH = new Uint8Array(rH.buffer, rH.byteOffset, rH.byteLength);
              return XH.unBindFramebuffer(QH.renderTarget), hH
            }
            throw Error("Render to texture failed.")
          } finally {
            QH.dispose(), uH.dispose()
          }
        }(HH, WH, MH, tH, zH, EH)
      }
      let xH = await HH.readPixels(tH, zH);
      if (!xH) throw new Error(`Failed to read pixels from texture ${HH.name}.`);
      if (xH instanceof Float32Array) {
        const HH = new Uint8Array(xH.length);
        let BH = xH.length;
        for (; BH--;) {
          const LH = xH[BH];
          HH[BH] = Math.round(255 * (0, XH.Clamp)(LH))
        }
        xH = HH
      }
      const vH = WH * MH,
        PH = 4 * vH;
      if (xH.length !== PH) {
        const HH = 0 === vH ? 0 : xH.length / vH;
        if (1 === HH || 2 === HH || 3 === HH) {
          const BH = new Uint8Array(PH);
          for (let LH = 0, AH = 0, rH = 0; LH < vH; LH++, rH += 4) {
            const LH = xH[AH++];
            if (1 === HH) {
              BH[rH] = LH, BH[rH + 1] = LH, BH[rH + 2] = LH, BH[rH + 3] = 255;
              continue
            }
            const SH = xH[AH++];
            2 !== HH ? (BH[rH] = LH, BH[rH + 1] = SH, BH[rH + 2] = xH[AH++], BH[rH + 3] = 255) : (BH[rH] = LH, BH[rH + 1] = SH, BH[rH + 2] = 0, BH[rH + 3] = 255)
          }
          return BH
        }
      }
      return xH
    }
    const QH = {
      CreateResizedCopy: function(HH, BH, LH) {
        let SH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const hH = HH.yN(),
          tH = hH.Iu(),
          zH = new rH.c("resized" + HH.name, {
            width: BH,
            height: LH
          }, hH, !HH.noMipmap, !0, HH._texture.type, !1, HH.samplingMode, !1);
        zH.wrapU = HH.wrapU, zH.wrapV = HH.wrapV, zH.uOffset = HH.uOffset, zH.vOffset = HH.vOffset, zH.uScale = HH.uScale, zH.vScale = HH.vScale, zH.uAng = HH.uAng, zH.vAng = HH.vAng, zH.wAng = HH.wAng, zH.coordinatesIndex = HH.coordinatesIndex, zH.level = HH.level, zH.anisotropicFilteringLevel = HH.anisotropicFilteringLevel, zH._texture.isReady = !1, HH.wrapU = AH.g.CLAMP_ADDRESSMODE, HH.wrapV = AH.g.CLAMP_ADDRESSMODE;
        const CH = new EH("pass", 1, null, SH ? AH.g.BILINEAR_SAMPLINGMODE : AH.g.NEAREST_SAMPLINGMODE, tH, !1, 0);
        return CH.externalTextureSamplerBinding = !0, CH.onEffectCreatedObservable.addOnce((BH => {
          BH.executeWhenCompiled((() => {
            CH.onApply = function(BH) {
              BH.setTexture("textureSampler", HH)
            };
            const BH = zH.renderTarget;
            BH && (hH.postProcessManager.directRender([CH], BH), tH.unBindFramebuffer(BH), zH.disposeFramebufferObjects(), CH.dispose(), zH.getInternalTexture().isReady = !0)
          }))
        })), zH
      },
      ApplyPostProcess: YH,
      ToHalfFloat: GH.f,
      FromHalfFloat: GH.d,
      GetTextureDataAsync: uH
    }
  },
  45266: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => uH
    });
    var AH = LH(41290),
      rH = LH(41398),
      SH = LH(37997),
      hH = LH(37963),
      tH = LH(41134),
      zH = LH(41297),
      CH = LH(41319),
      EH = LH(38012),
      XH = LH(41184),
      GH = LH(41222),
      YH = LH(45271);
    let uH = (() => {
        var HH;
        let BH, tH, XH, uH, QH, MH, xH, vH, PH, TH, UH, VH, OH, bH, kH, mH, oH = [],
          IH = [],
          fH = [],
          lH = [],
          KH = [],
          cH = [],
          eH = [],
          qH = [],
          gH = [],
          NH = [],
          RH = [],
          jH = [],
          nH = [],
          FH = [],
          DH = [],
          wH = [],
          ZH = [],
          dH = [],
          aH = [],
          sH = [],
          JH = [],
          iH = [],
          pH = [],
          yH = [],
          HB = [],
          BB = [],
          LB = [],
          AB = [],
          rB = [];
        return HH = class {
          static get ForceGLSL() {
            return YH.f.ForceGLSL
          }
          static set ForceGLSL(HH) {
            YH.f.ForceGLSL = HH
          }
          static RegisterShaderCodeProcessing(HH, BH) {
            YH.f.RegisterShaderCodeProcessing(HH, BH)
          }
          get name() {
            return this._effectWrapper.name
          }
          set name(HH) {
            this._effectWrapper.name = HH
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode
          }
          set alphaMode(HH) {
            this._effectWrapper.alphaMode = HH
          }
          get samples() {
            return this._samples
          }
          set samples(HH) {
            this._samples = Math.min(HH, this._engine.getCaps().maxMSAASamples), this._textures.forEach((HH => {
              HH.setSamples(this._samples)
            }))
          }
          get shaderLanguage() {
            return this._shaderLanguage
          }
          getEffectName() {
            return this._fragmentUrl
          }
          set onActivate(HH) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), HH && (this._onActivateObserver = this.onActivateObservable.add(HH))
          }
          set onSizeChanged(HH) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(HH)
          }
          set onApply(HH) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(HH)
          }
          set onBeforeRender(HH) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(HH)
          }
          set onAfterRender(HH) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(HH)
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd]
          }
          set inputTexture(HH) {
            this._forcedOutputTexture = HH
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty())
          }
          getCamera() {
            return this.j_
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.SBH(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(BH, LH, tH, zH, CH, EH) {
            let XH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              GH = arguments.length > 7 ? arguments[7] : void 0,
              uH = arguments.length > 8 ? arguments[8] : void 0,
              QH = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              MH = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              xH = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              vH = arguments.length > 12 ? arguments[12] : void 0,
              PH = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              TH = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              UH = arguments.length > 15 ? arguments[15] : void 0,
              VH = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, AH.k)(this, oH), null), this.uniqueId = (0, AH.k)(this, IH, void 0), this.width = ((0, AH.k)(this, fH), (0, AH.k)(this, lH, -1)), this.height = ((0, AH.k)(this, KH), (0, AH.k)(this, cH, -1)), this.nodeMaterialSource = ((0, AH.k)(this, eH), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, AH.k)(this, qH, void 0), this.clearColor = ((0, AH.k)(this, gH), (0, AH.k)(this, NH, void 0)), this.autoClear = ((0, AH.k)(this, RH), (0, AH.k)(this, jH, !0)), this.forceAutoClearInAlphaMode = ((0, AH.k)(this, nH), (0, AH.k)(this, FH, !1)), this.alphaConstants = ((0, AH.k)(this, DH), (0, AH.k)(this, wH, void 0)), this.animations = ((0, AH.k)(this, ZH), []), this.enablePixelPerfectMode = (0, AH.k)(this, dH, !1), this.forceFullscreenViewport = ((0, AH.k)(this, aH), (0, AH.k)(this, sH, !0)), this.inspectableCustomProperties = (0, AH.k)(this, JH), this.scaleMode = (0, AH.k)(this, iH, 1), this.alwaysForcePOT = ((0, AH.k)(this, pH), (0, AH.k)(this, yH, !1)), this._samples = ((0, AH.k)(this, HB), (0, AH.k)(this, BB, 1)), this.adaptScaleToCurrentViewport = ((0, AH.k)(this, LB), (0, AH.k)(this, AB, !1)), this.doNotSerialize = ((0, AH.k)(this, rB), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new rH.i(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new hH.n(1, 1), this._texelSize = hH.n.Zero(), this.onActivateObservable = new SH.d, this.onSizeChangedObservable = new SH.d, this.onApplyObservable = new SH.d, this.onBeforeRenderObservable = new SH.d, this.onAfterRenderObservable = new SH.d, this.uR = new SH.d, WH();
            let OH, bH = 1,
              kH = null;
            if (tH && !Array.isArray(tH)) {
              const HH = tH;
              tH = HH.uniforms ?? null, zH = HH.samplers ?? null, bH = HH.size ?? 1, EH = HH.camera ?? null, XH = HH.samplingMode ?? 1, GH = HH.engine, uH = HH.reusable, QH = Array.isArray(HH.defines) ? HH.defines.join("\n") : HH.defines ?? null, MH = HH.textureType ?? 0, xH = HH.vertexUrl ?? "postprocess", vH = HH.indexParameters, PH = HH.blockCompilation ?? !1, TH = HH.textureFormat ?? 5, UH = HH.shaderLanguage ?? 0, kH = HH.uniformBuffers ?? null, VH = HH.extraInitializations, OH = HH.effectWrapper
            } else CH && (bH = "number" === typeof CH ? CH : {
              width: CH.width,
              height: CH.height
            });
            if (this._useExistingThinPostProcess = !!OH, this._effectWrapper = OH ?? new YH.f({
                name: BH,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: LH,
                engine: GH || EH?.yN().Iu(),
                uniforms: tH,
                samplers: zH,
                uniformBuffers: kH,
                defines: QH,
                vertexUrl: xH,
                indexParameters: vH,
                blockCompilation: !0,
                shaderLanguage: UH,
                extraInitializations: void 0
              }), this.name = BH, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != EH ? (this.j_ = EH, this._scene = EH.yN(), EH.attachPostProcess(this), this._engine = this._scene.Iu(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : GH && (this._engine = GH, this._engine.postProcesses.push(this)), this._options = bH, this.renderTargetSamplingMode = XH || 1, this._reusable = uH || !1, this._textureType = MH, this._textureFormat = TH, this._shaderLanguage = UH || 0, this._samplers = zH || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = LH, this._vertexUrl = xH, this._parameters = tH || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = kH || [], this._indexParameters = vH, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const BH = [];
              this._gatherImports(this._engine.isWebGPU && !HH.ForceGLSL, BH), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(PH, QH, VH, BH)
            }
          }
          _gatherImports() {
            let HH = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? HH.push(Promise.all([LH.e(672).then((() => LH(64241)))])) : HH.push(Promise.all([LH.e(662).then((() => LH(64110)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          Iu() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(HH) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = HH, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new rH.i(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              AH = arguments.length > 3 ? arguments[3] : void 0,
              rH = arguments.length > 4 ? arguments[4] : void 0,
              SH = arguments.length > 5 ? arguments[5] : void 0,
              hH = arguments.length > 6 ? arguments[6] : void 0,
              tH = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(HH, BH, LH, AH, rH, SH, hH, tH), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(HH, BH) {
            let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let rH = 0; rH < this._textureCache.length; rH++)
              if (this._textureCache[rH].texture.width === HH.width && this._textureCache[rH].texture.height === HH.height && this._textureCache[rH].postProcessChannel === LH && this._textureCache[rH].texture._generateDepthBuffer === BH.generateDepthBuffer && this._textureCache[rH].texture.samples === BH.samples) return this._textureCache[rH].texture;
            const AH = this._engine.createRenderTargetTexture(HH, BH);
            return this._textureCache.push({
              texture: AH,
              postProcessChannel: LH,
              lastUsedRenderId: -1
            }), AH
          }
          _flushTextureCache() {
            const HH = this._renderId;
            for (let BH = this._textureCache.length - 1; BH >= 0; BH--)
              if (HH - this._textureCache[BH].lastUsedRenderId > 100) {
                let HH = !1;
                for (let LH = 0; LH < this._textures.length; LH++)
                  if (this._textures.data[LH] === this._textureCache[BH].texture) {
                    HH = !0;
                    break
                  } HH || (this._textureCache[BH].texture.dispose(), this._textureCache.splice(BH, 1))
              }
          }
          resize(HH, BH) {
            let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              rH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = HH, this.height = BH;
            let SH = null;
            if (LH)
              for (let zH = 0; zH < LH._postProcesses.length; zH++)
                if (null !== LH._postProcesses[zH]) {
                  SH = LH._postProcesses[zH];
                  break
                } const hH = {
                width: this.width,
                height: this.height
              },
              tH = {
                generateMipMaps: AH,
                generateDepthBuffer: rH || SH === this,
                generateStencilBuffer: (rH || SH === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(hH, tH, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(hH, tH, 1)), this._texelSize.SBH(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let HH;
            if (this._shareOutputWithPostProcess) HH = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) HH = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let BH;
              HH = this.inputTexture;
              for (let LH = 0; LH < this._textureCache.length; LH++)
                if (this._textureCache[LH].texture === HH) {
                  BH = this._textureCache[LH];
                  break
                } BH && (BH.lastUsedRenderId = this._renderId)
            }
            return HH
          }
          activate(HH) {
            let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              LH = arguments.length > 2 ? arguments[2] : void 0;
            const AH = null === HH || void 0 !== HH.cameraRigMode ? HH || this.j_ : null,
              rH = AH?.yN() ?? HH,
              SH = rH.Iu(),
              hH = SH.getCaps().maxTextureSize,
              tH = (BH ? BH.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              zH = (BH ? BH.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let CH = this._options.width || tH,
              EH = this._options.height || zH;
            const XH = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let YH = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const HH = SH.currentViewport;
                HH && (CH *= HH.width, EH *= HH.height)
              }(XH || this.alwaysForcePOT) && (this._options.width || (CH = SH.needPOTTextures ? (0, GH.c)(CH, hH, this.scaleMode) : CH), this._options.height || (EH = SH.needPOTTextures ? (0, GH.c)(EH, hH, this.scaleMode) : EH)), this.width === CH && this.height === EH && (YH = this._getTarget()) || this.resize(CH, EH, AH, XH, LH), this._textures.forEach((HH => {
                HH.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(HH, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return YH || (YH = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.SBH(tH / CH, zH / EH), this._engine.bindFramebuffer(YH, 0, tH, zH, this.forceFullscreenViewport)) : (this._scaleRatio.SBH(1, 1), this._engine.bindFramebuffer(YH, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(AH), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : rH.clearColor, rH._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), YH
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
            let HH;
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.Iu().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), HH = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", HH?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
          }
          _disposeTextureCache() {
            for (let HH = this._textureCache.length - 1; HH >= 0; HH--) this._textureCache[HH].texture.dispose();
            this._textureCache.length = 0
          }
          setPrePassRenderer(HH) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = HH.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
          }
          dispose(HH) {
            let BH;
            if (HH = HH || this.j_, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (BH = this._parentContainer.postProcesses.indexOf(this), BH > -1 && this._parentContainer.postProcesses.splice(BH, 1), this._parentContainer = null), BH = this._engine.postProcesses.indexOf(this), -1 !== BH && this._engine.postProcesses.splice(BH, 1), this.uR.notifyObservers(), HH) {
              if (HH.detachPostProcess(this), BH = HH._postProcesses.indexOf(this), 0 === BH && HH._postProcesses.length > 0) {
                const HH = this.j_._getFirstPostProcess();
                HH && HH.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const HH = CH.c.Serialize(this),
              BH = this.getCamera() || this._scene && this._scene.activeCamera;
            return HH.customType = "BABYLON." + this.getClassName(), HH.cameraId = BH ? BH.id : null, HH.reusable = this._reusable, HH.textureType = this._textureType, HH.fragmentUrl = this._fragmentUrl, HH.parameters = this._parameters, HH.samplers = this._samplers, HH.uniformBuffers = this._uniformBuffers, HH.options = this._options, HH.defines = this._postProcessDefines, HH.textureFormat = this._textureFormat, HH.vertexUrl = this._vertexUrl, HH.indexParameters = this._indexParameters, HH
          }
          clone() {
            const BH = this.serialize();
            BH._engine = this._engine, BH.cameraId = null;
            const LH = HH.Parse(BH, this._scene, "");
            return LH ? (LH.onActivateObservable = this.onActivateObservable.clone(), LH.onSizeChangedObservable = this.onSizeChangedObservable.clone(), LH.onApplyObservable = this.onApplyObservable.clone(), LH.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), LH.onAfterRenderObservable = this.onAfterRenderObservable.clone(), LH._prePassEffectConfiguration = this._prePassEffectConfiguration, LH) : null
          }
          static Parse(HH, BH, LH) {
            const AH = (0, EH.b)(HH.customType);
            if (!AH || !AH._Parse) return null;
            const rH = BH ? BH.getCameraById(HH.cameraId) : null;
            return AH._Parse(HH, rH, BH, LH)
          }
          static _Parse(BH, LH, AH, rH) {
            return CH.c.Parse((() => new HH(BH.name, BH.fragmentUrl, BH.parameters, BH.samplers, BH.options, LH, BH.renderTargetSamplingMode, BH._engine, BH.reusable, BH.defines, BH.textureType, BH.vertexUrl, BH.indexParameters, !1, BH.textureFormat)), BH, AH, rH)
          }
        }, (() => {
          const LH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          BH = [(0, zH.H)()], tH = [(0, zH.H)()], XH = [(0, zH.H)()], uH = [(0, zH.H)()], QH = [(0, zH.H)()], MH = [(0, zH.n)()], xH = [(0, zH.H)()], vH = [(0, zH.H)()], PH = [(0, zH.H)()], TH = [(0, zH.H)()], UH = [(0, zH.H)()], VH = [(0, zH.H)()], OH = [(0, zH.H)()], bH = [(0, zH.H)()], kH = [(0, zH.H)("samples")], mH = [(0, zH.H)()], (0, AH.g)(HH, null, tH, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: HH => "name" in HH,
              get: HH => HH.name
            },
            metadata: LH
          }, null, oH), (0, AH.g)(HH, null, PH, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: HH => "alphaMode" in HH,
              get: HH => HH.alphaMode
            },
            metadata: LH
          }, null, oH), (0, AH.g)(null, null, BH, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: HH => "uniqueId" in HH,
              get: HH => HH.uniqueId,
              set: (HH, BH) => {
                HH.uniqueId = BH
              }
            },
            metadata: LH
          }, IH, fH), (0, AH.g)(null, null, XH, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: HH => "width" in HH,
              get: HH => HH.width,
              set: (HH, BH) => {
                HH.width = BH
              }
            },
            metadata: LH
          }, lH, KH), (0, AH.g)(null, null, uH, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: HH => "height" in HH,
              get: HH => HH.height,
              set: (HH, BH) => {
                HH.height = BH
              }
            },
            metadata: LH
          }, cH, eH), (0, AH.g)(null, null, QH, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: HH => "renderTargetSamplingMode" in HH,
              get: HH => HH.renderTargetSamplingMode,
              set: (HH, BH) => {
                HH.renderTargetSamplingMode = BH
              }
            },
            metadata: LH
          }, qH, gH), (0, AH.g)(null, null, MH, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: HH => "clearColor" in HH,
              get: HH => HH.clearColor,
              set: (HH, BH) => {
                HH.clearColor = BH
              }
            },
            metadata: LH
          }, NH, RH), (0, AH.g)(null, null, xH, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: HH => "autoClear" in HH,
              get: HH => HH.autoClear,
              set: (HH, BH) => {
                HH.autoClear = BH
              }
            },
            metadata: LH
          }, jH, nH), (0, AH.g)(null, null, vH, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: HH => "forceAutoClearInAlphaMode" in HH,
              get: HH => HH.forceAutoClearInAlphaMode,
              set: (HH, BH) => {
                HH.forceAutoClearInAlphaMode = BH
              }
            },
            metadata: LH
          }, FH, DH), (0, AH.g)(null, null, TH, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: HH => "alphaConstants" in HH,
              get: HH => HH.alphaConstants,
              set: (HH, BH) => {
                HH.alphaConstants = BH
              }
            },
            metadata: LH
          }, wH, ZH), (0, AH.g)(null, null, UH, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: HH => "enablePixelPerfectMode" in HH,
              get: HH => HH.enablePixelPerfectMode,
              set: (HH, BH) => {
                HH.enablePixelPerfectMode = BH
              }
            },
            metadata: LH
          }, dH, aH), (0, AH.g)(null, null, VH, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: HH => "forceFullscreenViewport" in HH,
              get: HH => HH.forceFullscreenViewport,
              set: (HH, BH) => {
                HH.forceFullscreenViewport = BH
              }
            },
            metadata: LH
          }, sH, JH), (0, AH.g)(null, null, OH, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: HH => "scaleMode" in HH,
              get: HH => HH.scaleMode,
              set: (HH, BH) => {
                HH.scaleMode = BH
              }
            },
            metadata: LH
          }, iH, pH), (0, AH.g)(null, null, bH, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: HH => "alwaysForcePOT" in HH,
              get: HH => HH.alwaysForcePOT,
              set: (HH, BH) => {
                HH.alwaysForcePOT = BH
              }
            },
            metadata: LH
          }, yH, HB), (0, AH.g)(null, null, kH, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: HH => "_samples" in HH,
              get: HH => HH._samples,
              set: (HH, BH) => {
                HH._samples = BH
              }
            },
            metadata: LH
          }, BB, LB), (0, AH.g)(null, null, mH, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: HH => "adaptScaleToCurrentViewport" in HH,
              get: HH => HH.adaptScaleToCurrentViewport,
              set: (HH, BH) => {
                HH.adaptScaleToCurrentViewport = BH
              }
            },
            metadata: LH
          }, AB, rB), LH && Object.defineProperty(HH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: LH
          })
        })(), HH
      })(),
      QH = !1;

    function WH() {
      QH || (QH = !0, XH.c.prototype.setTextureFromPostProcess = function(HH, BH, LH) {
        let AH = null;
        BH && (BH._forcedOutputTexture ? AH = BH._forcedOutputTexture : BH._textures.data[BH._currentRenderTextureInd] && (AH = BH._textures.data[BH._currentRenderTextureInd])), this._bindTexture(HH, AH?.texture ?? null, LH)
      }, XH.c.prototype.setTextureFromPostProcessOutput = function(HH, BH, LH) {
        this._bindTexture(HH, BH?._outputTexture?.texture ?? null, LH)
      }, tH.c.prototype.setTextureFromPostProcess = function(HH, BH) {
        this._engine.setTextureFromPostProcess(this._samplers[HH], BH, HH)
      }, tH.c.prototype.setTextureFromPostProcessOutput = function(HH, BH) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[HH], BH, HH)
      }, (0, EH.f)("BABYLON.PostProcess", uH))
    }
  },
  45296: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => hH,
      f: () => SH
    });
    var AH = LH(45271),
      rH = LH(37989);
    class SH extends AH.f {
      _gatherImports(HH, BH) {
        HH ? (this._webGPUReady = !0, BH.push(Promise.all([LH.e(679).then((() => LH(64293)))]))) : BH.push(Promise.all([LH.e(680).then((() => LH(64302)))])), super._gatherImports(HH, BH)
      }
      constructor(HH) {
        let BH = arguments.length > 2 ? arguments[2] : void 0;
        const LH = {
          name: HH,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || rH.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: SH.FragmentUrl,
          ...BH
        };
        LH.engine || (LH.engine = rH.d.LastCreatedEngine), super(LH)
      }
    }
    SH.FragmentUrl = "pass";
    class hH extends AH.f {
      _gatherImports(HH, BH) {
        HH ? (this._webGPUReady = !0, BH.push(Promise.all([LH.e(681).then((() => LH(64311)))]))) : BH.push(Promise.all([LH.e(682).then((() => LH(64313)))])), super._gatherImports(HH, BH)
      }
      constructor(HH) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: HH,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || rH.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: hH.FragmentUrl,
          defines: "#define POSITIVEX"
        }), this._face = 0
      }
      get face() {
        return this._face
      }
      set face(HH) {
        if (!(HH < 0 || HH > 5)) switch (this._face = HH, this._face) {
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
    hH.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);