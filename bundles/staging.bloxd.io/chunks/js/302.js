export const id = 302;
export const ids = [302];
export const modules = {
  41218: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => eQ
    });
    var LQ = wQ(36722),
      qQ = wQ(36696),
      oQ = wQ(39897),
      DQ = wQ(39566),
      kQ = wQ(39333),
      vQ = wQ(38203),
      mQ = wQ(39550),
      uQ = wQ(39574),
      HQ = wQ(36709),
      bQ = wQ(39289),
      YQ = wQ(39518),
      xQ = wQ(39623);
    class AQ {
      get renderList() {
        return this._renderList
      }
      set renderList(QQ) {
        this._renderList !== QQ && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), QQ && (this._unObserveRenderList = (0, HQ.h)(QQ, this._renderListHasChanged)), this._renderList = QQ)
      }
      get disableImageProcessing() {
        return this._disableImageProcessing
      }
      set disableImageProcessing(QQ) {
        QQ !== this._disableImageProcessing && (this._disableImageProcessing = QQ, this._scene.markAllMaterialsAsDirty(64))
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(QQ) {
        this._disableDepthPrePass = QQ, this._renderingManager.disableDepthPrePass = QQ
      }
      get name() {
        return this._name
      }
      set name(QQ) {
        if (this._name !== QQ) {
          if (this._name = QQ, this._sceneUBOs)
            for (let QQ = 0; QQ < this._sceneUBOs.length; ++QQ) this._sceneUBOs[QQ].name = `Scene ubo #${QQ} for ${this.name}`;
          if (this._scene)
            for (let QQ = 0; QQ < this._renderPassIds.length; ++QQ) {
              const FQ = this._renderPassIds[QQ];
              this._engine._renderPassNames[FQ] = `${this._name}#${QQ}`
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
      setMaterialForRendering(QQ, FQ) {
        let wQ;
        wQ = Array.isArray(QQ) ? QQ : [QQ];
        for (let LQ = 0; LQ < wQ.length; ++LQ)
          for (let QQ = 0; QQ < this.options.numPasses; ++QQ) {
            let qQ = wQ[LQ];
            wQ[LQ].lN && (qQ = wQ[LQ].cqQ), qQ.setMaterialForRenderPass(this._renderPassIds[QQ], void 0 !== FQ ? Array.isArray(FQ) ? FQ[QQ] : FQ : void 0)
          }
      }
      _freezeActiveMeshes(QQ) {
        this._freezeActiveMeshesCancel = (0, bQ.e)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, QQ)
            for (let QQ = 0; QQ < this._activeMeshes.length; QQ++) this._activeMeshes.data[QQ]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((QQ, FQ) => {
          this._freezeActiveMeshesCancel = null, FQ ? (vQ.c.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), QQ && vQ.c.Error(QQ)) : (vQ.c.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), QQ && (vQ.c.Error(QQ), QQ.stack && vQ.c.Error(QQ.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let QQ = 0; QQ < this._activeMeshes.length; QQ++) this._activeMeshes.data[QQ]._unFreeze();
        this._isFrozen = !1
      }
      constructor(QQ, FQ, wQ) {
        this._unObserveRenderList = null, this._renderListHasChanged = (QQ, FQ) => {
          const wQ = this._renderList ? this._renderList.length : 0;
          if (0 === FQ && wQ > 0 || 0 === wQ)
            for (const LQ of this._scene.meshes) LQ._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new LQ.e, this.onAfterRenderObservable = new LQ.e, this.onBeforeRenderingManagerRenderObservable = new LQ.e, this.onAfterRenderingManagerRenderObservable = new LQ.e, this.onInitRenderingObservable = new LQ.e, this.onFinishRenderingObservable = new LQ.e, this.onFastPathRenderObservable = new LQ.e, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new YQ.d(256), this._activeBoundingBoxes = new YQ.d(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = QQ, this._scene = FQ, this._engine = this._scene.Wx(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...wQ
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new uQ.e(FQ), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const QQ of this._scene.lights) QQ.getTypeID() === xQ.c.LIGHTTYPEID_CLUSTERED_CONTAINER && QQ.isSupported && QQ._updateBatches(this.activeCamera).render()
        })), this._scene.addObjectRenderer(this)
      }
      _releaseRenderPassId() {
        for (let QQ = 0; QQ < this.options.numPasses; ++QQ) this._engine.releaseRenderPassId(this._renderPassIds[QQ]);
        this._renderPassIds.length = 0
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let QQ = 0; QQ < this.options.numPasses; ++QQ) this._renderPassIds[QQ] = this._engine.createRenderPassId(`${this.name}#${QQ}`)
      }
      _createSceneUBO(QQ, FQ) {
        const wQ = this._scene.Wx(),
          LQ = new mQ.d(wQ, void 0, FQ, QQ, void 0, !1);
        return LQ.addUniform("viewProjection", 16), FQ && LQ.addUniform("viewProjectionR", 16), LQ.addUniform("view", 16), LQ.addUniform("projection", 16), LQ.addUniform("vEyePosition", 4), LQ.addUniform("inverseProjection", 16), LQ
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const QQ = this._engine._currentRenderTarget,
          FQ = !(!QQ || !QQ.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const QQ = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${QQ} for ${this.name}`, FQ)), this._sceneUBOIsMultiview.push(FQ)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== FQ && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, FQ), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = FQ);
        const wQ = this._sceneUBOs[this._currentSceneUBOIndex++];
        return wQ.unbindEffect(), wQ
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1
      }
      get refreshRate() {
        return this._refreshRate
      }
      set refreshRate(QQ) {
        this._refreshRate = QQ, this.resetRefreshCounter()
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1))
      }
      isReadyForRendering(QQ, FQ) {
        this.prepareRenderList(), this.initRender(QQ, FQ);
        const wQ = this._checkReadiness();
        return this.finishRender(), wQ
      }
      prepareRenderList() {
        const QQ = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let FQ = 0; FQ < this._waitingRenderList.length; FQ++) {
              const wQ = this._waitingRenderList[FQ],
                LQ = QQ.getMeshById(wQ);
              LQ && this.renderList.push(LQ)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const QQ = this._scene.meshes;
          for (let FQ = 0; FQ < QQ.length; FQ++) {
            const wQ = QQ[FQ];
            this.renderListPredicate(wQ) && this.renderList.push(wQ)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(QQ, FQ) {
        const wQ = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), wQ && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(wQ.getViewMatrix(), wQ.getProjectionMatrix(!0)), this._scene._activeCamera = wQ, this._engine.setViewport(wQ.rigParent ? wQ.rigParent.viewport : wQ.viewport, QQ, FQ)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const QQ = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (QQ.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), QQ._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== QQ.activeCamera && QQ.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), QQ.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const wQ = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[QQ], this.onBeforeRenderObservable.notifyObservers(QQ);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(QQ);
        else {
          const FQ = this._prepareRenderingManager(QQ),
            wQ = this._scene.getOutlineRenderer?.(),
            LQ = wQ?.enabled;
          wQ && (wQ.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(QQ), this._renderingManager.render(this.customRenderFunction, FQ, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(QQ), wQ && (wQ.enabled = LQ)
        }
        FQ || this.onAfterRenderObservable.notifyObservers(QQ), this._engine.currentRenderPassId = wQ
      }
      _checkReadiness() {
        const QQ = this._scene,
          FQ = this._engine.currentRenderPassId;
        let wQ = !0;
        QQ.getViewMatrix() || QQ.updateTransformMatrix();
        const LQ = this.options.numPasses;
        for (let qQ = 0; qQ < LQ && wQ; qQ++) {
          const FQ = this.renderList ? this.renderList : QQ.frameGraph ? QQ.meshes : QQ.getActiveMeshes().data,
            oQ = this.renderList || QQ.frameGraph ? FQ.length : QQ.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[qQ], this.onBeforeRenderObservable.notifyObservers(qQ);
          let DQ = null,
            kQ = oQ;
          this.getCustomRenderList && (DQ = this.getCustomRenderList(qQ, FQ, oQ), DQ && (kQ = DQ.length)), DQ || (DQ = FQ), this.options.doNotChangeAspectRatio || QQ.updateTransformMatrix(!0);
          for (let QQ = 0; QQ < kQ && wQ; ++QQ) {
            const FQ = DQ[QQ];
            if (!FQ.isEnabled() || FQ.isBlocked || !FQ.isVisible || !FQ.lC) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(FQ, this.refreshRate, !0)) {
                wQ = !1;
                continue
              }
            } else if (!FQ.isReady(!0)) {
              wQ = !1;
              continue
            }
            let LQ = FQ._edgesRenderer,
              qQ = FQ.hasThinInstances;
            if (FQ.lN) {
              const QQ = FQ.cqQ;
              QQ.edgesShareWithInstances && QQ._edgesRenderer?.isEnabled && (LQ = QQ._edgesRenderer, qQ = !0)
            } else FQ.pqQ && FQ.edgesShareWithInstances && (qQ = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && LQ?.isEnabled && (LQ.isReady(qQ) || (wQ = !1))
          }
          if (this.renderParticles && QQ.particlesEnabled) {
            const FQ = this.particleSystemList || QQ.fC;
            for (const QQ of FQ) QQ.isReady() || (wQ = !1)
          }
          if (this.renderSprites && QQ.spritesEnabled) {
            const FQ = this.spriteManagerList || QQ.spriteManagers;
            if (FQ)
              for (const LQ of FQ) QQ.activeCamera && 0 === (LQ.layerMask & QQ.activeCamera.layerMask) || LQ.isReady && !LQ.isReady() && (wQ = !1)
          }
          this.onAfterRenderObservable.notifyObservers(qQ), LQ > 1 && (QQ.incrementRenderId(), QQ.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = FQ, wQ
      }
      _prepareRenderingManager() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const wQ = this._scene;
        let LQ, qQ, oQ = null;
        const DQ = this.renderList ? this.renderList : wQ.frameGraph ? wQ.meshes : wQ.getActiveMeshes().data,
          kQ = this.renderList || wQ.frameGraph ? DQ.length : wQ.getActiveMeshes().length;
        if (this.getCustomRenderList && (oQ = this.getCustomRenderList(QQ, DQ, kQ)), oQ) LQ = oQ.length, qQ = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !FQ && !this._engine.isWebGPU) return DQ;
          this._defaultRenderListPrepared = !0, oQ = DQ, LQ = kQ, qQ = !this.renderList || this.forceLayerMaskCheck
        }
        const vQ = wQ.activeCamera,
          mQ = this.cameraForLOD ?? vQ,
          uQ = wQ.getBoundingBoxRenderer?.();
        if (wQ._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && uQ) {
            uQ.reset();
            for (let QQ = 0; QQ < this._activeBoundingBoxes.length; QQ++) {
              const FQ = this._activeBoundingBoxes.data[QQ];
              uQ.renderList.push(FQ)
            }
          }
          return oQ
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), uQ && uQ.reset(), this.renderMeshes) {
          const QQ = wQ.getRenderId(),
            FQ = wQ.getFrameId();
          for (let DQ = 0; DQ < LQ; DQ++) {
            const LQ = oQ[DQ];
            if (LQ && !LQ.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(LQ, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!LQ.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let oQ, DQ;
              if (mQ) {
                const QQ = LQ._internalAbstractMeshDataInfo._currentLOD.get(mQ);
                QQ && QQ[1] === FQ ? oQ = QQ[0] : (oQ = wQ.customLODSelector ? wQ.customLODSelector(LQ, mQ) : LQ.getLOD(mQ), QQ ? (QQ[0] = oQ, QQ[1] = FQ) : LQ._internalAbstractMeshDataInfo._currentLOD.set(mQ, [oQ, FQ]))
              } else oQ = LQ;
              if (!oQ) continue;
              if (oQ !== LQ && 0 !== oQ.billboardMode && oQ.computeWorldMatrix(), oQ._preActivateForIntermediateRendering(QQ), DQ = !(!qQ || !vQ) && 0 === (LQ.layerMask & vQ.layerMask), LQ.isEnabled() && LQ.isVisible && LQ.lC && !DQ) {
                if (this._activeMeshes.push(LQ), oQ._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, oQ !== LQ && oQ._activate(QQ, !0), this.enableBoundingBoxRendering && uQ && uQ._preActiveMesh(LQ), LQ._activate(QQ, !0) && LQ.lC.length) {
                  LQ.lN ? LQ._internalAbstractMeshDataInfo._actAsRegularMesh && (oQ = LQ) : oQ._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, oQ._internalAbstractMeshDataInfo._isActiveIntermediate = !0, wQ._prepareSkeleton(oQ);
                  for (let QQ = 0; QQ < oQ.lC.length; QQ++) {
                    const FQ = oQ.lC[QQ];
                    this.enableBoundingBoxRendering && uQ && uQ._evaluateSubMesh(LQ, FQ), this._renderingManager.dispatch(FQ, oQ)
                  }
                }
                LQ._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && uQ && FQ)
          for (let HQ = 0; HQ < uQ.renderList.length; HQ++) {
            const QQ = uQ.renderList.data[HQ];
            this._activeBoundingBoxes.push(QQ)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const QQ = this.particleSystemList || wQ.fC;
          for (let FQ = 0; FQ < QQ.length; FQ++) {
            const wQ = QQ[FQ],
              LQ = wQ.emitter;
            wQ.isStarted() && LQ && (!LQ.position || LQ.isEnabled()) && this._renderingManager.dispatchParticles(wQ)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return oQ
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(QQ, FQ, wQ, LQ)
      }
      setRenderingAutoClearDepthStencil(QQ, FQ) {
        let wQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          LQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(QQ, FQ, wQ, LQ), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const QQ = new AQ(this.name, this._scene, this.options);
        return this.renderList && (QQ.renderList = this.renderList.slice(0)), QQ
      }
      dispose() {
        const QQ = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          FQ = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let wQ = 0; wQ < FQ; wQ++) {
          const FQ = QQ[wQ];
          FQ && void 0 !== FQ.getMaterialForRenderPass(this.renderPassId) && FQ.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const wQ of this._sceneUBOs) wQ.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === AQ.REFRESHRATE_RENDER_ONCE && (this.refreshRate = AQ.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    AQ.REFRESHRATE_RENDER_ONCE = 0, AQ.REFRESHRATE_RENDER_ONEVERYFRAME = 1, AQ.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var tQ = wQ(39277);
    class eQ extends oQ.e {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate
      }
      set renderListPredicate(QQ) {
        this._objectRenderer.renderListPredicate = QQ
      }
      get renderList() {
        return this._objectRenderer.renderList
      }
      set renderList(QQ) {
        this._objectRenderer.renderList = QQ
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList
      }
      set particleSystemList(QQ) {
        this._objectRenderer.particleSystemList = QQ
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList
      }
      set getCustomRenderList(QQ) {
        this._objectRenderer.getCustomRenderList = QQ
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles
      }
      set renderParticles(QQ) {
        this._objectRenderer.renderParticles = QQ
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites
      }
      set renderSprites(QQ) {
        this._objectRenderer.renderSprites = QQ
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering
      }
      set enableBoundingBoxRendering(QQ) {
        this._objectRenderer.enableBoundingBoxRendering = QQ
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering
      }
      set enableOutlineRendering(QQ) {
        this._objectRenderer.enableOutlineRendering = QQ
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck
      }
      set forceLayerMaskCheck(QQ) {
        this._objectRenderer.forceLayerMaskCheck = QQ
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera
      }
      set activeCamera(QQ) {
        this._objectRenderer.activeCamera = QQ
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD
      }
      set cameraForLOD(QQ) {
        this._objectRenderer.cameraForLOD = QQ
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing
      }
      set disableImageProcessing(QQ) {
        this._objectRenderer.disableImageProcessing = QQ
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction
      }
      set customIsReadyFunction(QQ) {
        this._objectRenderer.customIsReadyFunction = QQ
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction
      }
      set customRenderFunction(QQ) {
        this._objectRenderer.customRenderFunction = QQ
      }
      get postProcesses() {
        return this._postProcesses
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled
      }
      set onAfterUnbind(QQ) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(QQ)
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable
      }
      set onBeforeRender(QQ) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(QQ)
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable
      }
      set onAfterRender(QQ) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(QQ)
      }
      set onClear(QQ) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(QQ)
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList
      }
      set _waitingRenderList(QQ) {
        this._objectRenderer._waitingRenderList = QQ
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
      setMaterialForRendering(QQ, FQ) {
        this._objectRenderer.setMaterialForRendering(QQ, FQ)
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
      set boundingBoxSize(QQ) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(QQ)) return;
        this._boundingBoxSize = QQ;
        const FQ = this.iN();
        FQ && FQ.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(QQ, FQ, wQ) {
        let DQ, kQ, mQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          uQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          HQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          bQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          YQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : oQ.e.TRILINEAR_SAMPLINGMODE,
          xQ = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          tQ = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          eQ = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          MQ = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          GQ = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          pQ = arguments.length > 13 ? arguments[13] : void 0,
          cQ = arguments.length > 14 ? arguments[14] : void 0,
          CQ = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          SQ = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          iQ = !0,
          WQ = !1;
        if ("object" === typeof mQ) {
          const QQ = mQ;
          mQ = !!QQ.generateMipMaps, uQ = QQ.doNotChangeAspectRatio ?? !0, HQ = QQ.type ?? 0, bQ = !!QQ.isCube, YQ = QQ.samplingMode ?? oQ.e.TRILINEAR_SAMPLINGMODE, xQ = QQ.generateDepthBuffer ?? !0, tQ = !!QQ.generateStencilBuffer, eQ = !!QQ.isMulti, MQ = QQ.format ?? 5, GQ = !!QQ.delayAllocation, pQ = QQ.samples, cQ = QQ.creationFlags, CQ = !!QQ.noColorAttachment, SQ = !!QQ.useSRGBBuffer, DQ = QQ.colorAttachment, iQ = QQ.gammaSpace ?? iQ, kQ = QQ.existingObjectRenderer, WQ = !!QQ.enableClusteredLights
        }
        if (super(null, wQ, !mQ, void 0, YQ, void 0, void 0, void 0, void 0, MQ), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new LQ.e, this.onAfterUnbindObservable = new LQ.e, this.onClearObservable = new LQ.e, this.onResizeObservable = new LQ.e, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = qQ.p.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(wQ = this.iN())) return;
        const RQ = this.iN().Wx();
        this._gammaSpace = iQ, this._coordinatesMode = oQ.e.PROJECTION_MODE, this.name = QQ, this.isRenderTarget = !0, this._initialSizeParameter = FQ, this._dontDisposeObjectRenderer = !!kQ, this._processSizeParameter(FQ), this._objectRenderer = kQ ?? new AQ(QQ, wQ, {
          numPasses: bQ ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: uQ,
          enableClusteredLights: WQ
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const QQ = this._scene;
          if (!this._disableEngineStages)
            for (const FQ of QQ._beforeRenderTargetClearStage) FQ.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(RQ) : this.skipInitialClear || RQ.clear(this.clearColor ?? QQ.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || QQ.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const FQ of QQ._beforeRenderTargetDrawStage) FQ.action(this, this._currentFaceIndex, this._currentLayer);
          RQ._debugPushGroup && RQ._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (RQ._debugPopGroup && RQ._debugPopGroup(), !this._disableEngineStages)
            for (const FQ of this._scene._afterRenderTargetDrawStage) FQ.action(this, this._currentFaceIndex, this._currentLayer);
          const QQ = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const FQ of this._scene._afterRenderTargetPostProcessStage) FQ.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = QQ), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), RQ) : vQ.c.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(RQ) : this.skipInitialClear || RQ.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = RQ.onResizeObservable.add((() => {})), this._generateMipMaps = !!mQ, this._doNotChangeAspectRatio = uQ, eQ || (this._renderTargetOptions = {
          generateMipMaps: mQ,
          type: HQ,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: xQ,
          generateStencilBuffer: tQ,
          samples: pQ,
          creationFlags: cQ,
          noColorAttachment: CQ,
          useSRGBBuffer: SQ,
          colorAttachment: DQ,
          label: this.name
        }, this.samplingMode === oQ.e.NEAREST_SAMPLINGMODE && (this.wrapU = oQ.e.CLAMP_ADDRESSMODE, this.wrapV = oQ.e.CLAMP_ADDRESSMODE), GQ || (bQ ? (this._renderTarget = wQ.Wx().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = oQ.e.INVCUBIC_MODE, this._textureMatrix = qQ.c.Identity()) : this._renderTarget = wQ.Wx().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== pQ && (this.samples = pQ)))
      }
      createDepthStencilTexture() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          oQ = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(QQ, FQ, wQ, LQ, qQ, oQ)
      }
      _processSizeParameter(QQ) {
        if (QQ.ratio) {
          this._sizeRatio = QQ.ratio;
          const FQ = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(FQ.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(FQ.getRenderHeight(), this._sizeRatio)
          }
        } else this._size = QQ
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples
      }
      set samples(QQ) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(QQ))
      }
      addPostProcess(QQ) {
        if (!this._postProcessManager) {
          const QQ = this.iN();
          if (!QQ) return;
          this._postProcessManager = new DQ.d(QQ), this._postProcesses = new Array
        }
        this._postProcesses.push(QQ), this._postProcesses[0].autoClear = !1
      }
      clearPostProcesses() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (QQ)
            for (const QQ of this._postProcesses) QQ.dispose();
          this._postProcesses = []
        }
      }
      removePostProcess(QQ) {
        if (!this._postProcesses) return;
        const FQ = this._postProcesses.indexOf(QQ); - 1 !== FQ && (this._postProcesses.splice(FQ, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter()
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate
      }
      set refreshRate(QQ) {
        this._objectRenderer.refreshRate = QQ
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
        const QQ = this._size.layers;
        if (QQ) return QQ;
        const FQ = this._size.depth;
        return FQ || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(QQ) {
        const FQ = Math.max(1, this.getRenderSize() * QQ);
        this.resize(FQ)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(QQ) {
        const FQ = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const wQ = this.iN();
        wQ && (this._processSizeParameter(QQ), this._renderTarget = FQ ? wQ.Wx().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : wQ.Wx().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(QQ, FQ)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => wQ(41235))).then((QQ => this._dumpTools = QQ))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const QQ = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), QQ
      }
      _render() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const wQ = this.iN();
        if (!wQ) return;
        void 0 !== this.useCameraPostProcesses && (QQ = this.useCameraPostProcesses);
        const LQ = wQ.Wx();
        if (LQ._debugPushGroup && LQ._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let qQ = 0; qQ < 6; qQ++) this._renderToTarget(qQ, QQ, FQ), wQ.incrementRenderId(), wQ.resetCachedMaterial();
          else this._renderToTarget(0, QQ, FQ);
        else
          for (let qQ = 0; qQ < this.getRenderLayers(); qQ++) this._renderToTarget(0, QQ, FQ, qQ), wQ.incrementRenderId(), wQ.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), LQ._debugPopGroup && LQ._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(QQ, FQ) {
        const wQ = QQ * FQ,
          LQ = (0, kQ.i)(wQ + 16384 / (128 + wQ));
        return Math.min((0, kQ.d)(QQ), LQ)
      }
      _bindFrameBuffer() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const wQ = this.iN();
        if (!wQ) return;
        const LQ = wQ.Wx();
        this._renderTarget && LQ.bindFramebuffer(this._renderTarget, this.isCube ? QQ : void 0, void 0, void 0, this.ignoreCameraViewport, 0, FQ)
      }
      _unbindFrameBuffer(QQ, FQ) {
        this._renderTarget && QQ.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(FQ)
        }))
      }
      _prepareFrame(QQ, FQ, wQ, LQ) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(FQ, wQ) : LQ && QQ.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(FQ, wQ)
      }
      _renderToTarget(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const qQ = this.iN();
        if (!qQ) return;
        const oQ = qQ.Wx();
        this._currentFaceIndex = QQ, this._currentLayer = LQ, this._currentUseCameraPostProcess = FQ, this._currentDumpForDebug = wQ, this._prepareFrame(qQ, QQ, LQ, FQ), this._objectRenderer.render(QQ + LQ, !0), this._unbindFrameBuffer(oQ, QQ), this._texture && this.isCube && 5 === QQ && oQ.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(QQ, FQ, wQ, LQ)
      }
      setRenderingAutoClearDepthStencil(QQ, FQ) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(QQ, FQ)
      }
      clone() {
        const QQ = this.getSize(),
          FQ = new eQ(this.name, QQ, this.iN(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return FQ.hasAlpha = this.hasAlpha, FQ.level = this.level, FQ.coordinatesMode = this.coordinatesMode, this.renderList && (FQ.renderList = this.renderList.slice(0)), FQ
      }
      serialize() {
        if (!this.name) return null;
        const QQ = super.serialize();
        if (QQ.renderTargetSize = this.getRenderSize(), QQ.renderList = [], this.renderList)
          for (let FQ = 0; FQ < this.renderList.length; FQ++) QQ.renderList.push(this.renderList[FQ].id);
        return QQ
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.iN().Wx().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const QQ = this.iN();
        if (!QQ) return;
        let FQ = QQ.customRenderTargets.indexOf(this);
        FQ >= 0 && QQ.customRenderTargets.splice(FQ, 1);
        for (const wQ of QQ.cameras) FQ = wQ.customRenderTargets.indexOf(this), FQ >= 0 && wQ.customRenderTargets.splice(FQ, 1);
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
    eQ.REFRESHRATE_RENDER_ONCE = AQ.REFRESHRATE_RENDER_ONCE, eQ.REFRESHRATE_RENDER_ONEVERYFRAME = AQ.REFRESHRATE_RENDER_ONEVERYFRAME, eQ.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = AQ.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(eQ.prototype, "noPrePassRenderer") || Object.defineProperty(eQ.prototype, "noPrePassRenderer", (0, tQ.e)("RenderTargetTexture", "noPrePassRenderer"))
  },
  41202: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => mQ,
      f: () => uQ
    });
    var LQ = wQ(39561),
      qQ = wQ(37631),
      oQ = wQ(36722),
      DQ = wQ(39243),
      kQ = wQ(39748);
    const vQ = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class mQ {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vQ;
        this._fullscreenViewport = new qQ.c(0, 0, 1, 1);
        const wQ = FQ.positions ?? vQ.positions,
          oQ = FQ.indices ?? vQ.indices;
        this.engine = QQ, this._vertexBuffers = {
          [LQ.h.PositionKind]: new LQ.h(QQ, wQ, LQ.h.PositionKind, !1, !1, 2)
        }, this._indexBuffer = QQ.createIndexBuffer(oQ), this._indexBufferLength = oQ.length, this._onContextRestoredObserver = QQ.onContextRestoredObservable.add((() => {
          this._indexBuffer = QQ.createIndexBuffer(oQ);
          for (const QQ in this._vertexBuffers) {
            this._vertexBuffers[QQ]._rebuild()
          }
        }))
      }
      setViewport() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.engine.setViewport(QQ)
      }
      bindBuffers(QQ) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, QQ)
      }
      applyEffectWrapper(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = FQ, this.engine.stencilState.stencilTest = wQ, this.engine.enableEffect(QQ.drawWrapper), this.bindBuffers(QQ.effect), QQ.onApplyObservable.notifyObservers({})
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
      _isRenderTargetTexture(QQ) {
        return void 0 !== QQ.renderTarget
      }
      render(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!QQ.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const wQ = null === FQ ? null : this._isRenderTargetTexture(FQ) ? FQ.renderTarget : FQ;
        wQ && this.engine.bindFramebuffer(wQ), this.applyEffectWrapper(QQ), this.draw(), wQ && this.engine.unBindFramebuffer(wQ), this.restoreStates()
      }
      dispose() {
        const QQ = this._vertexBuffers[LQ.h.PositionKind];
        QQ && (QQ.dispose(), delete this._vertexBuffers[LQ.h.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class uQ {
      static RegisterShaderCodeProcessing(QQ, FQ) {
        FQ ? uQ._CustomShaderCodeProcessing[QQ ?? ""] = FQ : delete uQ._CustomShaderCodeProcessing[QQ ?? ""]
      }
      static _GetShaderCodeProcessing(QQ) {
        return uQ._CustomShaderCodeProcessing[QQ] ?? uQ._CustomShaderCodeProcessing[""]
      }
      get name() {
        return this.options.name
      }
      set name(QQ) {
        this.options.name = QQ
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
      set effect(QQ) {
        this._drawWrapper.effect = QQ
      }
      constructor(QQ) {
        this.alphaMode = 0, this.onEffectCreatedObservable = new oQ.e(void 0, !0), this.onApplyObservable = new oQ.e, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
          ...QQ,
          name: QQ.name || "effectWrapper",
          engine: QQ.engine,
          uniforms: QQ.uniforms || QQ.uniformNames || [],
          uniformNames: void 0,
          samplers: QQ.samplers || QQ.samplerNames || [],
          samplerNames: void 0,
          attributeNames: QQ.attributeNames || ["position"],
          uniformBuffers: QQ.uniformBuffers || [],
          defines: QQ.defines || "",
          useShaderStore: QQ.useShaderStore || !1,
          vertexUrl: QQ.vertexUrl || QQ.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: QQ.fragmentShader || "pass",
          indexParameters: QQ.indexParameters,
          blockCompilation: QQ.blockCompilation || !1,
          shaderLanguage: QQ.shaderLanguage || 0,
          onCompiled: QQ.onCompiled || void 0,
          extraInitializations: QQ.extraInitializations || void 0,
          extraInitializationsAsync: QQ.extraInitializationsAsync || void 0,
          useAsPostProcess: QQ.useAsPostProcess ?? !1,
          allowEmptySourceTexture: QQ.allowEmptySourceTexture ?? !1
        }, this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), QQ.vertexUrl || QQ.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add((() => {
          this.effect.setFloat2("scale", 1, 1)
        }))), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add((() => {
          this.bind()
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.onContextRestoredObservable.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new kQ.d(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const FQ = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, FQ, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          LQ = arguments.length > 2 ? arguments[2] : void 0,
          qQ = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, qQ && this._importPromises.push(...qQ);
        const oQ = this.options.engine.isWebGPU && !uQ.ForceGLSL;
        this._gatherImports(oQ, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(oQ && this._webGPUReady ? wQ.e(357).then((() => wQ(60891))) : wQ.e(346).then((() => wQ(60652)))), void 0 !== LQ && LQ(oQ, this._importPromises), oQ && this._webGPUReady && (this.options.shaderLanguage = 1), QQ || this.updateEffect(FQ)
      }
      updateEffect() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          LQ = arguments.length > 3 ? arguments[3] : void 0,
          qQ = arguments.length > 4 ? arguments[4] : void 0,
          oQ = arguments.length > 5 ? arguments[5] : void 0,
          kQ = arguments.length > 6 ? arguments[6] : void 0,
          vQ = arguments.length > 7 ? arguments[7] : void 0;
        const mQ = uQ._GetShaderCodeProcessing(this.name);
        if (mQ?.defineCustomBindings) {
          const LQ = FQ?.slice() ?? [];
          LQ.push(...this.options.uniforms);
          const qQ = wQ?.slice() ?? [];
          qQ.push(...this.options.samplers), QQ = mQ.defineCustomBindings(this.name, QQ, LQ, qQ), FQ = LQ, wQ = qQ
        }
        this.options.defines = QQ || "";
        const HQ = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let bQ;
        bQ = this.options.extraInitializationsAsync ? async () => {
          await (HQ?.()), await this.options.extraInitializationsAsync()
        }: HQ, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: kQ ?? this._shaderPath.vertex,
          fragment: vQ ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: FQ || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: wQ || this.options.samplers,
          defines: null !== QQ ? QQ : "",
          fallbacks: null,
          onCompiled: qQ ?? this.options.onCompiled,
          onError: oQ ?? null,
          indexParameters: LQ || this.options.indexParameters,
          processCodeAfterIncludes: mQ?.processCodeAfterIncludes ? (QQ, FQ) => mQ.processCodeAfterIncludes(this.name, QQ, FQ) : null,
          processFinalCode: mQ?.processFinalCode ? (QQ, FQ) => mQ.processFinalCode(this.name, QQ, FQ) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: bQ
        }, this.options.engine) : this._drawWrapper.effect = new DQ.d(this._shaderPath, this.options.attributeNames, FQ || this.options.uniforms, wQ || this.options.samplerNames, this.options.engine, QQ, void 0, qQ || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, bQ), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !QQ && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), uQ._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.Wx().onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    uQ.ForceGLSL = !1, uQ._CustomShaderCodeProcessing = {}
  },
  41235: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      Dispose: () => MQ,
      DumpData: () => eQ,
      DumpDataAsync: () => tQ,
      DumpFramebuffer: () => AQ,
      DumpTools: () => GQ,
      EncodeImageAsync: () => xQ,
      RegisterDumpTools: () => cQ
    });
    var LQ = wQ(39402),
      qQ = wQ(41202),
      oQ = wQ(39505),
      DQ = wQ(36729),
      kQ = wQ(36720),
      vQ = wQ(38203),
      mQ = wQ(39468),
      uQ = wQ(39409);
    let HQ = null;
    async function bQ() {
      return HQ || (HQ = async function() {
        const QQ = kQ.d.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        QQ instanceof OffscreenCanvas && vQ.c.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: FQ
        } = await Promise.resolve().then((() => wQ(39240)));
        if (!FQ.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const LQ = new FQ(QQ, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        kQ.d.Instances.pop(), kQ.d.OnEnginesDisposedObservable.add((QQ => {
          LQ && QQ !== LQ && !LQ.vW && 0 === kQ.d.Instances.length && MQ()
        })), LQ.getCaps().parallelShaderCompile = void 0;
        const oQ = new qQ.b(LQ),
          {
            passPixelShader: DQ
          } = await wQ.e(365).then((() => wQ(60956))),
          mQ = new qQ.f({
            engine: LQ,
            name: DQ.name,
            fragmentShader: DQ.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: QQ,
          dumpEngine: {
            engine: LQ,
            renderer: oQ,
            wrapper: mQ
          }
        }
      }()), await HQ
    }
    let YQ = (() => {
      var QQ;
      let FQ, wQ = [];
      return QQ = class {
        static async EncodeImageAsync(QQ, FQ, wQ, LQ, qQ, DQ) {
          const kQ = await bQ(),
            vQ = kQ.dumpEngine;
          vQ.engine.setSize(FQ, wQ, !0);
          const mQ = vQ.engine.createRawTexture(QQ, FQ, wQ, 5, !1, !qQ, 1);
          return vQ.renderer.setViewport(), vQ.renderer.applyEffectWrapper(vQ.wrapper), vQ.wrapper.effect._bindTexture("textureSampler", mQ), vQ.renderer.draw(), mQ.dispose(), await new Promise(((QQ, FQ) => {
            oQ.g.ToBlob(kQ.canvas, (wQ => {
              wQ ? QQ(wQ) : FQ(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), LQ, DQ)
          }))
        }
      }, (() => {
        const qQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        FQ = [uQ.i], (0, LQ.i)(QQ, null, FQ, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: QQ => "EncodeImageAsync" in QQ,
            get: QQ => QQ.EncodeImageAsync
          },
          metadata: qQ
        }, null, wQ), qQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: qQ
        }), (0, LQ.l)(QQ, wQ)
      })(), QQ
    })();
    const xQ = YQ.EncodeImageAsync;
    async function AQ(QQ, FQ, wQ, LQ) {
      let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        oQ = arguments.length > 5 ? arguments[5] : void 0,
        DQ = arguments.length > 6 ? arguments[6] : void 0;
      const kQ = await wQ.readPixels(0, 0, QQ, FQ);
      eQ(QQ, FQ, new Uint8Array(kQ.buffer), LQ, qQ, oQ, !0, void 0, DQ)
    }
    async function tQ(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        qQ = arguments.length > 4 ? arguments[4] : void 0,
        kQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        uQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        HQ = arguments.length > 7 ? arguments[7] : void 0;
      if (wQ instanceof Float32Array) {
        const QQ = new Uint8Array(wQ.length);
        let FQ = wQ.length;
        for (; FQ--;) {
          const LQ = wQ[FQ];
          QQ[FQ] = Math.round(255 * (0, DQ.Clamp)(LQ))
        }
        wQ = QQ
      }
      const bQ = await YQ.EncodeImageAsync(wQ, QQ, FQ, LQ, kQ, HQ);
      void 0 !== qQ && oQ.g.DownloadBlob(bQ, qQ), bQ.type !== LQ && vQ.c.Warn(`DumpData: The requested mimeType '${LQ}' is not supported. The result has mimeType '${bQ.type}' instead.`);
      const xQ = await bQ.arrayBuffer();
      return uQ ? xQ : `data:${LQ};base64,${(0,mQ.i)(xQ)}`
    }

    function eQ(QQ, FQ, wQ, LQ) {
      let qQ = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== qQ || LQ || (qQ = ""), tQ(QQ, FQ, wQ, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", qQ, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((QQ => {
        LQ && LQ(QQ)
      }))
    }

    function MQ() {
      HQ && (HQ?.then((QQ => {
        QQ.canvas instanceof HTMLCanvasElement && QQ.canvas.remove(), QQ.dumpEngine && (QQ.dumpEngine.engine.dispose(), QQ.dumpEngine.renderer.dispose(), QQ.dumpEngine.wrapper.dispose())
      })), HQ = null)
    }
    const GQ = {
      DumpData: eQ,
      DumpDataAsync: tQ,
      DumpFramebuffer: AQ,
      Dispose: MQ
    };
    let pQ = !1;

    function cQ() {
      if (pQ) return;
      pQ = !0;
      oQ.g.DumpData = eQ, oQ.g.DumpDataAsync = tQ, oQ.g.DumpFramebuffer = AQ
    }
  },
  41214: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => YQ,
      d: () => xQ,
      e: () => AQ
    });
    var LQ = wQ(39897),
      qQ = wQ(41218),
      oQ = wQ(39402),
      DQ = wQ(41200),
      kQ = wQ(39426),
      vQ = wQ(41226),
      mQ = wQ(39409);
    class uQ extends DQ.d {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(QQ, FQ) {
        let wQ = arguments.length > 4 ? arguments[4] : void 0;
        const LQ = {
          size: "number" === typeof FQ ? FQ : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: wQ,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...FQ
        };
        super(QQ, vQ.f.FragmentUrl, {
          effectWrapper: "number" !== typeof FQ && FQ.effectWrapper ? void 0 : new vQ.f(QQ, wQ, LQ),
          ...LQ
        })
      }
      static _Parse(QQ, FQ, wQ, LQ) {
        return kQ.c.Parse((() => new uQ(QQ.name, QQ.options, FQ, QQ.renderTargetSamplingMode, QQ._engine, QQ.reusable)), QQ, wQ, LQ)
      }
    }(() => {
      var QQ;
      let FQ, wQ = DQ.d,
        LQ = [];
      QQ = class extends wQ {
        get face() {
          return this._effectWrapper.face
        }
        set face(QQ) {
          this._effectWrapper.face = QQ
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(QQ, FQ) {
          let wQ = arguments.length > 4 ? arguments[4] : void 0;
          const qQ = {
            size: "number" === typeof FQ ? FQ : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: wQ,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...FQ
          };
          super(QQ, vQ.f.FragmentUrl, {
            effectWrapper: "number" !== typeof FQ && FQ.effectWrapper ? void 0 : new vQ.c(QQ, wQ, qQ),
            ...qQ
          }), (0, oQ.l)(this, LQ)
        }
        static _Parse(FQ, wQ, LQ, qQ) {
          return kQ.c.Parse((() => new QQ(FQ.name, FQ.options, wQ, FQ.renderTargetSamplingMode, FQ._engine, FQ.reusable)), FQ, LQ, qQ)
        }
      }, (() => {
        const qQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(wQ[Symbol.metadata] ?? null) : void 0;
        FQ = [(0, mQ.I)()], (0, oQ.i)(QQ, null, FQ, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: QQ => "face" in QQ,
            get: QQ => QQ.face
          },
          metadata: qQ
        }, null, LQ), qQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: qQ
        })
      })()
    })();
    var HQ = wQ(36729),
      bQ = wQ(39475);

    function YQ(QQ, FQ, wQ, LQ, qQ, oQ, kQ, vQ) {
      const mQ = FQ.Wx();
      return FQ.isReady = !1, qQ = qQ ?? FQ.samplingMode, LQ = LQ ?? FQ.type, oQ = oQ ?? FQ.format, kQ = kQ ?? FQ.width, vQ = vQ ?? FQ.height, -1 === LQ && (LQ = 0), new Promise((uQ => {
        const HQ = new DQ.d("postprocess", QQ, null, null, 1, null, qQ, mQ, !1, void 0, LQ, void 0, null, !1, oQ);
        HQ.externalTextureSamplerBinding = !0;
        const bQ = mQ.createRenderTargetTexture({
          width: kQ,
          height: vQ
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: qQ,
          type: LQ,
          format: oQ
        });
        HQ.onEffectCreatedObservable.addOnce((QQ => {
          QQ.executeWhenCompiled((() => {
            HQ.onApply = QQ => {
              QQ._bindTexture("textureSampler", FQ), QQ.setFloat2("scale", 1, 1)
            }, wQ.postProcessManager.directRender([HQ], bQ, !0), mQ.restoreDefaultFramebuffer(), mQ._releaseTexture(FQ), HQ && HQ.dispose(), bQ._swapAndDie(FQ), FQ.type = LQ, FQ.format = 5, FQ.isReady = !0, uQ(FQ)
          }))
        }))
      }))
    }
    async function xQ(QQ, FQ, oQ) {
      let kQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        vQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        mQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        uQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(QQ) {
        if (QQ.isReady()) return;
        if (QQ.loadingError) throw new Error(QQ.errorObject?.message || `Texture ${QQ.name} errored while loading.`);
        const FQ = QQ.onLoadObservable;
        if (FQ) return await new Promise((QQ => FQ.addOnce((() => QQ()))));
        const wQ = QQ._texture?.onLoadedObservable;
        if (wQ) return await new Promise((QQ => wQ.addOnce((() => QQ()))));
        throw new Error(`Cannot determine readiness of texture ${QQ.name}.`)
      }(QQ);
      const bQ = QQ.getInternalTexture(),
        YQ = QQ.is3D || !!bQ?.is3D,
        {
          width: xQ,
          height: AQ
        } = QQ.getSize(),
        tQ = FQ ?? xQ,
        eQ = oQ ?? AQ;
      if (mQ || YQ || function(QQ) {
          switch (QQ) {
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
        }(QQ.textureFormat) || tQ !== xQ || eQ !== AQ) {
        if (QQ.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${mQ?"RTT":"compression"} is not supported.`);
        return await async function(QQ, FQ, oQ, kQ, vQ) {
          let mQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const uQ = QQ.iN(),
            HQ = uQ.Wx(),
            bQ = QQ.getInternalTexture(),
            YQ = QQ.is3D || !!bQ?.is3D;
          let xQ;
          if (HQ.isWebGPU ? YQ ? await wQ.e(361).then((() => wQ(60934))) : QQ.isCube ? await wQ.e(362).then((() => wQ(60942))) : await wQ.e(363).then((() => wQ(60950))) : YQ ? await wQ.e(358).then((() => wQ(60913))) : QQ.isCube ? await wQ.e(359).then((() => wQ(60920))) : await wQ.e(360).then((() => wQ(60928))), YQ) xQ = new DQ.d("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: LQ.e.NEAREST_NEAREST_MIPNEAREST,
            engine: HQ,
            shaderLanguage: HQ.isWebGPU ? 1 : 0
          });
          else if (QQ.isCube) {
            const QQ = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            xQ = new DQ.d("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: LQ.e.NEAREST_NEAREST_MIPNEAREST,
              engine: HQ,
              defines: QQ[kQ],
              shaderLanguage: HQ.isWebGPU ? 1 : 0
            })
          } else xQ = new DQ.d("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: LQ.e.NEAREST_NEAREST_MIPNEAREST,
            engine: HQ,
            shaderLanguage: HQ.isWebGPU ? 1 : 0
          });
          await new Promise((QQ => {
            xQ.onEffectCreatedObservable.addOnce((FQ => {
              FQ.executeWhenCompiled((() => {
                QQ(0)
              }))
            }))
          }));
          const AQ = new qQ.e("temp", {
            width: FQ,
            height: oQ
          }, uQ, !1);
          xQ.onApply = function(FQ) {
            FQ.setTexture("textureSampler", QQ), FQ.setFloat("lod", vQ), FQ.setInt("gamma", QQ.gammaSpace ? 1 : 0), YQ && FQ.setFloat("slice", mQ)
          };
          try {
            if (AQ.renderTarget && bQ) {
              const wQ = bQ.samplingMode;
              0 !== vQ ? QQ.updateSamplingMode(LQ.e.NEAREST_NEAREST_MIPNEAREST) : QQ.updateSamplingMode(LQ.e.NEAREST_NEAREST), uQ.postProcessManager.directRender([xQ], AQ.renderTarget, !0), QQ.updateSamplingMode(wQ);
              const qQ = await HQ.readPixels(0, 0, FQ, oQ),
                DQ = new Uint8Array(qQ.buffer, qQ.byteOffset, qQ.byteLength);
              return HQ.unBindFramebuffer(AQ.renderTarget), DQ
            }
            throw Error("Render to texture failed.")
          } finally {
            AQ.dispose(), xQ.dispose()
          }
        }(QQ, tQ, eQ, kQ, vQ, uQ)
      }
      let MQ = await QQ.readPixels(kQ, vQ);
      if (!MQ) throw new Error(`Failed to read pixels from texture ${QQ.name}.`);
      if (MQ instanceof Float32Array) {
        const QQ = new Uint8Array(MQ.length);
        let FQ = MQ.length;
        for (; FQ--;) {
          const wQ = MQ[FQ];
          QQ[FQ] = Math.round(255 * (0, HQ.Clamp)(wQ))
        }
        MQ = QQ
      }
      const GQ = tQ * eQ,
        pQ = 4 * GQ;
      if (MQ.length !== pQ) {
        const QQ = 0 === GQ ? 0 : MQ.length / GQ;
        if (1 === QQ || 2 === QQ || 3 === QQ) {
          const FQ = new Uint8Array(pQ);
          for (let wQ = 0, LQ = 0, qQ = 0; wQ < GQ; wQ++, qQ += 4) {
            const wQ = MQ[LQ++];
            if (1 === QQ) {
              FQ[qQ] = wQ, FQ[qQ + 1] = wQ, FQ[qQ + 2] = wQ, FQ[qQ + 3] = 255;
              continue
            }
            const oQ = MQ[LQ++];
            2 !== QQ ? (FQ[qQ] = wQ, FQ[qQ + 1] = oQ, FQ[qQ + 2] = MQ[LQ++], FQ[qQ + 3] = 255) : (FQ[qQ] = wQ, FQ[qQ + 1] = oQ, FQ[qQ + 2] = 0, FQ[qQ + 3] = 255)
          }
          return FQ
        }
      }
      return MQ
    }
    const AQ = {
      CreateResizedCopy: function(QQ, FQ, wQ) {
        let oQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const DQ = QQ.iN(),
          kQ = DQ.Wx(),
          vQ = new qQ.e("resized" + QQ.name, {
            width: FQ,
            height: wQ
          }, DQ, !QQ.noMipmap, !0, QQ._texture.type, !1, QQ.samplingMode, !1);
        vQ.wrapU = QQ.wrapU, vQ.wrapV = QQ.wrapV, vQ.uOffset = QQ.uOffset, vQ.vOffset = QQ.vOffset, vQ.uScale = QQ.uScale, vQ.vScale = QQ.vScale, vQ.uAng = QQ.uAng, vQ.vAng = QQ.vAng, vQ.wAng = QQ.wAng, vQ.coordinatesIndex = QQ.coordinatesIndex, vQ.level = QQ.level, vQ.anisotropicFilteringLevel = QQ.anisotropicFilteringLevel, vQ._texture.isReady = !1, QQ.wrapU = LQ.e.CLAMP_ADDRESSMODE, QQ.wrapV = LQ.e.CLAMP_ADDRESSMODE;
        const mQ = new uQ("pass", 1, null, oQ ? LQ.e.BILINEAR_SAMPLINGMODE : LQ.e.NEAREST_SAMPLINGMODE, kQ, !1, 0);
        return mQ.externalTextureSamplerBinding = !0, mQ.onEffectCreatedObservable.addOnce((FQ => {
          FQ.executeWhenCompiled((() => {
            mQ.onApply = function(FQ) {
              FQ.setTexture("textureSampler", QQ)
            };
            const FQ = vQ.renderTarget;
            FQ && (DQ.postProcessManager.directRender([mQ], FQ), kQ.unBindFramebuffer(FQ), vQ.disposeFramebufferObjects(), mQ.dispose(), vQ.getInternalTexture().isReady = !0)
          }))
        })), vQ
      },
      ApplyPostProcess: YQ,
      ToHalfFloat: bQ.j,
      FromHalfFloat: bQ.d,
      GetTextureDataAsync: xQ
    }
  },
  41200: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => xQ
    });
    var LQ = wQ(39402),
      qQ = wQ(39518),
      oQ = wQ(36722),
      DQ = wQ(36696),
      kQ = wQ(39243),
      vQ = wQ(39409),
      mQ = wQ(39426),
      uQ = wQ(36741),
      HQ = wQ(39295),
      bQ = wQ(39333),
      YQ = wQ(41202);
    let xQ = (() => {
        var QQ;
        let FQ, kQ, HQ, xQ, AQ, eQ, MQ, GQ, pQ, cQ, CQ, SQ, iQ, WQ, RQ, OQ, sQ = [],
          rQ = [],
          IQ = [],
          UQ = [],
          NQ = [],
          TQ = [],
          KQ = [],
          zQ = [],
          lQ = [],
          jQ = [],
          aQ = [],
          XQ = [],
          fQ = [],
          VQ = [],
          hQ = [],
          JQ = [],
          EQ = [],
          nQ = [],
          gQ = [],
          PQ = [],
          ZQ = [],
          yQ = [],
          BQ = [],
          dQ = [],
          QF = [],
          FF = [],
          wF = [],
          LF = [],
          qF = [];
        return QQ = class {
          static get ForceGLSL() {
            return YQ.f.ForceGLSL
          }
          static set ForceGLSL(QQ) {
            YQ.f.ForceGLSL = QQ
          }
          static RegisterShaderCodeProcessing(QQ, FQ) {
            YQ.f.RegisterShaderCodeProcessing(QQ, FQ)
          }
          get name() {
            return this._effectWrapper.name
          }
          set name(QQ) {
            this._effectWrapper.name = QQ
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode
          }
          set alphaMode(QQ) {
            this._effectWrapper.alphaMode = QQ
          }
          get samples() {
            return this._samples
          }
          set samples(QQ) {
            this._samples = Math.min(QQ, this._engine.getCaps().maxMSAASamples), this._textures.forEach((QQ => {
              QQ.setSamples(this._samples)
            }))
          }
          get shaderLanguage() {
            return this._shaderLanguage
          }
          getEffectName() {
            return this._fragmentUrl
          }
          set onActivate(QQ) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), QQ && (this._onActivateObserver = this.onActivateObservable.add(QQ))
          }
          set onSizeChanged(QQ) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(QQ)
          }
          set onApply(QQ) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(QQ)
          }
          set onBeforeRender(QQ) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(QQ)
          }
          set onAfterRender(QQ) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(QQ)
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd]
          }
          set inputTexture(QQ) {
            this._forcedOutputTexture = QQ
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty())
          }
          getCamera() {
            return this.W8
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.vQQ(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(FQ, wQ, kQ, vQ, mQ, uQ) {
            let HQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              bQ = arguments.length > 7 ? arguments[7] : void 0,
              xQ = arguments.length > 8 ? arguments[8] : void 0,
              AQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              eQ = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              MQ = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              GQ = arguments.length > 12 ? arguments[12] : void 0,
              pQ = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              cQ = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              CQ = arguments.length > 15 ? arguments[15] : void 0,
              SQ = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, LQ.l)(this, sQ), null), this.uniqueId = (0, LQ.l)(this, rQ, void 0), this.width = ((0, LQ.l)(this, IQ), (0, LQ.l)(this, UQ, -1)), this.height = ((0, LQ.l)(this, NQ), (0, LQ.l)(this, TQ, -1)), this.nodeMaterialSource = ((0, LQ.l)(this, KQ), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, LQ.l)(this, zQ, void 0), this.clearColor = ((0, LQ.l)(this, lQ), (0, LQ.l)(this, jQ, void 0)), this.autoClear = ((0, LQ.l)(this, aQ), (0, LQ.l)(this, XQ, !0)), this.forceAutoClearInAlphaMode = ((0, LQ.l)(this, fQ), (0, LQ.l)(this, VQ, !1)), this.alphaConstants = ((0, LQ.l)(this, hQ), (0, LQ.l)(this, JQ, void 0)), this.animations = ((0, LQ.l)(this, EQ), []), this.enablePixelPerfectMode = (0, LQ.l)(this, nQ, !1), this.forceFullscreenViewport = ((0, LQ.l)(this, gQ), (0, LQ.l)(this, PQ, !0)), this.inspectableCustomProperties = (0, LQ.l)(this, ZQ), this.scaleMode = (0, LQ.l)(this, yQ, 1), this.alwaysForcePOT = ((0, LQ.l)(this, BQ), (0, LQ.l)(this, dQ, !1)), this._samples = ((0, LQ.l)(this, QF), (0, LQ.l)(this, FF, 1)), this.adaptScaleToCurrentViewport = ((0, LQ.l)(this, wF), (0, LQ.l)(this, LF, !1)), this.doNotSerialize = ((0, LQ.l)(this, qF), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new qQ.d(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new DQ.n(1, 1), this._texelSize = DQ.n.Zero(), this.onActivateObservable = new oQ.e, this.onSizeChangedObservable = new oQ.e, this.onApplyObservable = new oQ.e, this.onBeforeRenderObservable = new oQ.e, this.onAfterRenderObservable = new oQ.e, this.zN = new oQ.e, tQ();
            let iQ, WQ = 1,
              RQ = null;
            if (kQ && !Array.isArray(kQ)) {
              const QQ = kQ;
              kQ = QQ.uniforms ?? null, vQ = QQ.samplers ?? null, WQ = QQ.size ?? 1, uQ = QQ.camera ?? null, HQ = QQ.samplingMode ?? 1, bQ = QQ.engine, xQ = QQ.reusable, AQ = Array.isArray(QQ.defines) ? QQ.defines.join("\n") : QQ.defines ?? null, eQ = QQ.textureType ?? 0, MQ = QQ.vertexUrl ?? "postprocess", GQ = QQ.indexParameters, pQ = QQ.blockCompilation ?? !1, cQ = QQ.textureFormat ?? 5, CQ = QQ.shaderLanguage ?? 0, RQ = QQ.uniformBuffers ?? null, SQ = QQ.extraInitializations, iQ = QQ.effectWrapper
            } else mQ && (WQ = "number" === typeof mQ ? mQ : {
              width: mQ.width,
              height: mQ.height
            });
            if (this._useExistingThinPostProcess = !!iQ, this._effectWrapper = iQ ?? new YQ.f({
                name: FQ,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: wQ,
                engine: bQ || uQ?.iN().Wx(),
                uniforms: kQ,
                samplers: vQ,
                uniformBuffers: RQ,
                defines: AQ,
                vertexUrl: MQ,
                indexParameters: GQ,
                blockCompilation: !0,
                shaderLanguage: CQ,
                extraInitializations: void 0
              }), this.name = FQ, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != uQ ? (this.W8 = uQ, this._scene = uQ.iN(), uQ.attachPostProcess(this), this._engine = this._scene.Wx(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : bQ && (this._engine = bQ, this._engine.postProcesses.push(this)), this._options = WQ, this.renderTargetSamplingMode = HQ || 1, this._reusable = xQ || !1, this._textureType = eQ, this._textureFormat = cQ, this._shaderLanguage = CQ || 0, this._samplers = vQ || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = wQ, this._vertexUrl = MQ, this._parameters = kQ || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = RQ || [], this._indexParameters = GQ, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const FQ = [];
              this._gatherImports(this._engine.isWebGPU && !QQ.ForceGLSL, FQ), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(pQ, AQ, SQ, FQ)
            }
          }
          _gatherImports() {
            let QQ = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? QQ.push(Promise.all([wQ.e(357).then((() => wQ(60891)))])) : QQ.push(Promise.all([wQ.e(346).then((() => wQ(60652)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          Wx() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(QQ) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = QQ, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new qQ.d(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              LQ = arguments.length > 3 ? arguments[3] : void 0,
              qQ = arguments.length > 4 ? arguments[4] : void 0,
              oQ = arguments.length > 5 ? arguments[5] : void 0,
              DQ = arguments.length > 6 ? arguments[6] : void 0,
              kQ = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(QQ, FQ) {
            let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let qQ = 0; qQ < this._textureCache.length; qQ++)
              if (this._textureCache[qQ].texture.width === QQ.width && this._textureCache[qQ].texture.height === QQ.height && this._textureCache[qQ].postProcessChannel === wQ && this._textureCache[qQ].texture._generateDepthBuffer === FQ.generateDepthBuffer && this._textureCache[qQ].texture.samples === FQ.samples) return this._textureCache[qQ].texture;
            const LQ = this._engine.createRenderTargetTexture(QQ, FQ);
            return this._textureCache.push({
              texture: LQ,
              postProcessChannel: wQ,
              lastUsedRenderId: -1
            }), LQ
          }
          _flushTextureCache() {
            const QQ = this._renderId;
            for (let FQ = this._textureCache.length - 1; FQ >= 0; FQ--)
              if (QQ - this._textureCache[FQ].lastUsedRenderId > 100) {
                let QQ = !1;
                for (let wQ = 0; wQ < this._textures.length; wQ++)
                  if (this._textures.data[wQ] === this._textureCache[FQ].texture) {
                    QQ = !0;
                    break
                  } QQ || (this._textureCache[FQ].texture.dispose(), this._textureCache.splice(FQ, 1))
              }
          }
          resize(QQ, FQ) {
            let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = QQ, this.height = FQ;
            let oQ = null;
            if (wQ)
              for (let vQ = 0; vQ < wQ._postProcesses.length; vQ++)
                if (null !== wQ._postProcesses[vQ]) {
                  oQ = wQ._postProcesses[vQ];
                  break
                } const DQ = {
                width: this.width,
                height: this.height
              },
              kQ = {
                generateMipMaps: LQ,
                generateDepthBuffer: qQ || oQ === this,
                generateStencilBuffer: (qQ || oQ === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(DQ, kQ, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(DQ, kQ, 1)), this._texelSize.vQQ(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let QQ;
            if (this._shareOutputWithPostProcess) QQ = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) QQ = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let FQ;
              QQ = this.inputTexture;
              for (let wQ = 0; wQ < this._textureCache.length; wQ++)
                if (this._textureCache[wQ].texture === QQ) {
                  FQ = this._textureCache[wQ];
                  break
                } FQ && (FQ.lastUsedRenderId = this._renderId)
            }
            return QQ
          }
          activate(QQ) {
            let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              wQ = arguments.length > 2 ? arguments[2] : void 0;
            const LQ = null === QQ || void 0 !== QQ.cameraRigMode ? QQ || this.W8 : null,
              qQ = LQ?.iN() ?? QQ,
              oQ = qQ.Wx(),
              DQ = oQ.getCaps().maxTextureSize,
              kQ = (FQ ? FQ.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              vQ = (FQ ? FQ.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let mQ = this._options.width || kQ,
              uQ = this._options.height || vQ;
            const HQ = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let YQ = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const QQ = oQ.currentViewport;
                QQ && (mQ *= QQ.width, uQ *= QQ.height)
              }(HQ || this.alwaysForcePOT) && (this._options.width || (mQ = oQ.needPOTTextures ? (0, bQ.e)(mQ, DQ, this.scaleMode) : mQ), this._options.height || (uQ = oQ.needPOTTextures ? (0, bQ.e)(uQ, DQ, this.scaleMode) : uQ)), this.width === mQ && this.height === uQ && (YQ = this._getTarget()) || this.resize(mQ, uQ, LQ, HQ, wQ), this._textures.forEach((QQ => {
                QQ.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(QQ, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return YQ || (YQ = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.vQQ(kQ / mQ, vQ / uQ), this._engine.bindFramebuffer(YQ, 0, kQ, vQ, this.forceFullscreenViewport)) : (this._scaleRatio.vQQ(1, 1), this._engine.bindFramebuffer(YQ, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(LQ), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : qQ.clearColor, qQ._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), YQ
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
            let QQ;
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.Wx().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), QQ = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", QQ?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
          }
          _disposeTextureCache() {
            for (let QQ = this._textureCache.length - 1; QQ >= 0; QQ--) this._textureCache[QQ].texture.dispose();
            this._textureCache.length = 0
          }
          setPrePassRenderer(QQ) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = QQ.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
          }
          dispose(QQ) {
            let FQ;
            if (QQ = QQ || this.W8, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (FQ = this._parentContainer.postProcesses.indexOf(this), FQ > -1 && this._parentContainer.postProcesses.splice(FQ, 1), this._parentContainer = null), FQ = this._engine.postProcesses.indexOf(this), -1 !== FQ && this._engine.postProcesses.splice(FQ, 1), this.zN.notifyObservers(), QQ) {
              if (QQ.detachPostProcess(this), FQ = QQ._postProcesses.indexOf(this), 0 === FQ && QQ._postProcesses.length > 0) {
                const QQ = this.W8._getFirstPostProcess();
                QQ && QQ.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const QQ = mQ.c.Serialize(this),
              FQ = this.getCamera() || this._scene && this._scene.activeCamera;
            return QQ.customType = "BABYLON." + this.getClassName(), QQ.cameraId = FQ ? FQ.id : null, QQ.reusable = this._reusable, QQ.textureType = this._textureType, QQ.fragmentUrl = this._fragmentUrl, QQ.parameters = this._parameters, QQ.samplers = this._samplers, QQ.uniformBuffers = this._uniformBuffers, QQ.options = this._options, QQ.defines = this._postProcessDefines, QQ.textureFormat = this._textureFormat, QQ.vertexUrl = this._vertexUrl, QQ.indexParameters = this._indexParameters, QQ
          }
          clone() {
            const FQ = this.serialize();
            FQ._engine = this._engine, FQ.cameraId = null;
            const wQ = QQ.Parse(FQ, this._scene, "");
            return wQ ? (wQ.onActivateObservable = this.onActivateObservable.clone(), wQ.onSizeChangedObservable = this.onSizeChangedObservable.clone(), wQ.onApplyObservable = this.onApplyObservable.clone(), wQ.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), wQ.onAfterRenderObservable = this.onAfterRenderObservable.clone(), wQ._prePassEffectConfiguration = this._prePassEffectConfiguration, wQ) : null
          }
          static Parse(QQ, FQ, wQ) {
            const LQ = (0, uQ.b)(QQ.customType);
            if (!LQ || !LQ._Parse) return null;
            const qQ = FQ ? FQ.getCameraById(QQ.cameraId) : null;
            return LQ._Parse(QQ, qQ, FQ, wQ)
          }
          static _Parse(FQ, wQ, LQ, qQ) {
            return mQ.c.Parse((() => new QQ(FQ.name, FQ.fragmentUrl, FQ.parameters, FQ.samplers, FQ.options, wQ, FQ.renderTargetSamplingMode, FQ._engine, FQ.reusable, FQ.defines, FQ.textureType, FQ.vertexUrl, FQ.indexParameters, !1, FQ.textureFormat)), FQ, LQ, qQ)
          }
        }, (() => {
          const wQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          FQ = [(0, vQ.I)()], kQ = [(0, vQ.I)()], HQ = [(0, vQ.I)()], xQ = [(0, vQ.I)()], AQ = [(0, vQ.I)()], eQ = [(0, vQ.n)()], MQ = [(0, vQ.I)()], GQ = [(0, vQ.I)()], pQ = [(0, vQ.I)()], cQ = [(0, vQ.I)()], CQ = [(0, vQ.I)()], SQ = [(0, vQ.I)()], iQ = [(0, vQ.I)()], WQ = [(0, vQ.I)()], RQ = [(0, vQ.I)("samples")], OQ = [(0, vQ.I)()], (0, LQ.i)(QQ, null, kQ, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: QQ => "name" in QQ,
              get: QQ => QQ.name
            },
            metadata: wQ
          }, null, sQ), (0, LQ.i)(QQ, null, pQ, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: QQ => "alphaMode" in QQ,
              get: QQ => QQ.alphaMode
            },
            metadata: wQ
          }, null, sQ), (0, LQ.i)(null, null, FQ, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: QQ => "uniqueId" in QQ,
              get: QQ => QQ.uniqueId,
              set: (QQ, FQ) => {
                QQ.uniqueId = FQ
              }
            },
            metadata: wQ
          }, rQ, IQ), (0, LQ.i)(null, null, HQ, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: QQ => "width" in QQ,
              get: QQ => QQ.width,
              set: (QQ, FQ) => {
                QQ.width = FQ
              }
            },
            metadata: wQ
          }, UQ, NQ), (0, LQ.i)(null, null, xQ, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: QQ => "height" in QQ,
              get: QQ => QQ.height,
              set: (QQ, FQ) => {
                QQ.height = FQ
              }
            },
            metadata: wQ
          }, TQ, KQ), (0, LQ.i)(null, null, AQ, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: QQ => "renderTargetSamplingMode" in QQ,
              get: QQ => QQ.renderTargetSamplingMode,
              set: (QQ, FQ) => {
                QQ.renderTargetSamplingMode = FQ
              }
            },
            metadata: wQ
          }, zQ, lQ), (0, LQ.i)(null, null, eQ, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "clearColor" in QQ,
              get: QQ => QQ.clearColor,
              set: (QQ, FQ) => {
                QQ.clearColor = FQ
              }
            },
            metadata: wQ
          }, jQ, aQ), (0, LQ.i)(null, null, MQ, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: QQ => "autoClear" in QQ,
              get: QQ => QQ.autoClear,
              set: (QQ, FQ) => {
                QQ.autoClear = FQ
              }
            },
            metadata: wQ
          }, XQ, fQ), (0, LQ.i)(null, null, GQ, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: QQ => "forceAutoClearInAlphaMode" in QQ,
              get: QQ => QQ.forceAutoClearInAlphaMode,
              set: (QQ, FQ) => {
                QQ.forceAutoClearInAlphaMode = FQ
              }
            },
            metadata: wQ
          }, VQ, hQ), (0, LQ.i)(null, null, cQ, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: QQ => "alphaConstants" in QQ,
              get: QQ => QQ.alphaConstants,
              set: (QQ, FQ) => {
                QQ.alphaConstants = FQ
              }
            },
            metadata: wQ
          }, JQ, EQ), (0, LQ.i)(null, null, CQ, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: QQ => "enablePixelPerfectMode" in QQ,
              get: QQ => QQ.enablePixelPerfectMode,
              set: (QQ, FQ) => {
                QQ.enablePixelPerfectMode = FQ
              }
            },
            metadata: wQ
          }, nQ, gQ), (0, LQ.i)(null, null, SQ, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: QQ => "forceFullscreenViewport" in QQ,
              get: QQ => QQ.forceFullscreenViewport,
              set: (QQ, FQ) => {
                QQ.forceFullscreenViewport = FQ
              }
            },
            metadata: wQ
          }, PQ, ZQ), (0, LQ.i)(null, null, iQ, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: QQ => "scaleMode" in QQ,
              get: QQ => QQ.scaleMode,
              set: (QQ, FQ) => {
                QQ.scaleMode = FQ
              }
            },
            metadata: wQ
          }, yQ, BQ), (0, LQ.i)(null, null, WQ, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: QQ => "alwaysForcePOT" in QQ,
              get: QQ => QQ.alwaysForcePOT,
              set: (QQ, FQ) => {
                QQ.alwaysForcePOT = FQ
              }
            },
            metadata: wQ
          }, dQ, QF), (0, LQ.i)(null, null, RQ, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_samples" in QQ,
              get: QQ => QQ._samples,
              set: (QQ, FQ) => {
                QQ._samples = FQ
              }
            },
            metadata: wQ
          }, FF, wF), (0, LQ.i)(null, null, OQ, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: QQ => "adaptScaleToCurrentViewport" in QQ,
              get: QQ => QQ.adaptScaleToCurrentViewport,
              set: (QQ, FQ) => {
                QQ.adaptScaleToCurrentViewport = FQ
              }
            },
            metadata: wQ
          }, LF, qF), wQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: wQ
          })
        })(), QQ
      })(),
      AQ = !1;

    function tQ() {
      AQ || (AQ = !0, HQ.e.prototype.setTextureFromPostProcess = function(QQ, FQ, wQ) {
        let LQ = null;
        FQ && (FQ._forcedOutputTexture ? LQ = FQ._forcedOutputTexture : FQ._textures.data[FQ._currentRenderTextureInd] && (LQ = FQ._textures.data[FQ._currentRenderTextureInd])), this._bindTexture(QQ, LQ?.texture ?? null, wQ)
      }, HQ.e.prototype.setTextureFromPostProcessOutput = function(QQ, FQ, wQ) {
        this._bindTexture(QQ, FQ?._outputTexture?.texture ?? null, wQ)
      }, kQ.d.prototype.setTextureFromPostProcess = function(QQ, FQ) {
        this._engine.setTextureFromPostProcess(this._samplers[QQ], FQ, QQ)
      }, kQ.d.prototype.setTextureFromPostProcessOutput = function(QQ, FQ) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[QQ], FQ, QQ)
      }, (0, uQ.e)("BABYLON.PostProcess", xQ))
    }
  },
  41226: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ,
      f: () => oQ
    });
    var LQ = wQ(41202),
      qQ = wQ(36720);
    class oQ extends LQ.f {
      _gatherImports(QQ, FQ) {
        QQ ? (this._webGPUReady = !0, FQ.push(Promise.all([wQ.e(364).then((() => wQ(60953)))]))) : FQ.push(Promise.all([wQ.e(365).then((() => wQ(60956)))])), super._gatherImports(QQ, FQ)
      }
      constructor(QQ) {
        let FQ = arguments.length > 2 ? arguments[2] : void 0;
        const wQ = {
          name: QQ,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || qQ.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: oQ.FragmentUrl,
          ...FQ
        };
        wQ.engine || (wQ.engine = qQ.d.LastCreatedEngine), super(wQ)
      }
    }
    oQ.FragmentUrl = "pass";
    class DQ extends LQ.f {
      _gatherImports(QQ, FQ) {
        QQ ? (this._webGPUReady = !0, FQ.push(Promise.all([wQ.e(366).then((() => wQ(60959)))]))) : FQ.push(Promise.all([wQ.e(367).then((() => wQ(60964)))])), super._gatherImports(QQ, FQ)
      }
      constructor(QQ) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: QQ,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || qQ.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: DQ.FragmentUrl,
          defines: "#define POSITIVEX"
        }), this._face = 0
      }
      get face() {
        return this._face
      }
      set face(QQ) {
        if (!(QQ < 0 || QQ > 5)) switch (this._face = QQ, this._face) {
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
    DQ.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);