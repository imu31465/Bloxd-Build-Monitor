export const id = 311;
export const ids = [311];
export const modules = {
  41638: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => PC
    });
    var QC = ZC(36987),
      wC = ZC(36963),
      bC = ZC(40303),
      nC = ZC(39962),
      fC = ZC(39747),
      oC = ZC(38507),
      qC = ZC(39950),
      FC = ZC(39978),
      WC = ZC(36971),
      NC = ZC(39712),
      MC = ZC(39925),
      gC = ZC(40022);
    class SC {
      get renderList() {
        return this._renderList
      }
      set renderList(CC) {
        this._renderList !== CC && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), CC && (this._unObserveRenderList = (0, WC.i)(CC, this._renderListHasChanged)), this._renderList = CC)
      }
      get disableImageProcessing() {
        return this._disableImageProcessing
      }
      set disableImageProcessing(CC) {
        CC !== this._disableImageProcessing && (this._disableImageProcessing = CC, this._scene.markAllMaterialsAsDirty(64))
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(CC) {
        this._disableDepthPrePass = CC, this._renderingManager.disableDepthPrePass = CC
      }
      get name() {
        return this._name
      }
      set name(CC) {
        if (this._name !== CC) {
          if (this._name = CC, this._sceneUBOs)
            for (let CC = 0; CC < this._sceneUBOs.length; ++CC) this._sceneUBOs[CC].name = `Scene ubo #${CC} for ${this.name}`;
          if (this._scene)
            for (let CC = 0; CC < this._renderPassIds.length; ++CC) {
              const zC = this._renderPassIds[CC];
              this._engine._renderPassNames[zC] = `${this._name}#${CC}`
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
      setMaterialForRendering(CC, zC) {
        let ZC;
        ZC = Array.isArray(CC) ? CC : [CC];
        for (let QC = 0; QC < ZC.length; ++QC)
          for (let CC = 0; CC < this.options.numPasses; ++CC) {
            let wC = ZC[QC];
            ZC[QC].ZH && (wC = ZC[QC].LQC), wC.setMaterialForRenderPass(this._renderPassIds[CC], void 0 !== zC ? Array.isArray(zC) ? zC[CC] : zC : void 0)
          }
      }
      _freezeActiveMeshes(CC) {
        this._freezeActiveMeshesCancel = (0, NC.g)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, CC)
            for (let CC = 0; CC < this._activeMeshes.length; CC++) this._activeMeshes.data[CC]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((CC, zC) => {
          this._freezeActiveMeshesCancel = null, zC ? (oC.c.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), CC && oC.c.Error(CC)) : (oC.c.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), CC && (oC.c.Error(CC), CC.stack && oC.c.Error(CC.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let CC = 0; CC < this._activeMeshes.length; CC++) this._activeMeshes.data[CC]._unFreeze();
        this._isFrozen = !1
      }
      constructor(CC, zC, ZC) {
        this._unObserveRenderList = null, this._renderListHasChanged = (CC, zC) => {
          const ZC = this._renderList ? this._renderList.length : 0;
          if (0 === zC && ZC > 0 || 0 === ZC)
            for (const QC of this._scene.meshes) QC._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new QC.d, this.onAfterRenderObservable = new QC.d, this.onBeforeRenderingManagerRenderObservable = new QC.d, this.onAfterRenderingManagerRenderObservable = new QC.d, this.onInitRenderingObservable = new QC.d, this.onFinishRenderingObservable = new QC.d, this.onFastPathRenderObservable = new QC.d, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new MC.i(256), this._activeBoundingBoxes = new MC.i(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = CC, this._scene = zC, this._engine = this._scene.mg(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...ZC
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new FC.b(zC), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const CC of this._scene.lights) CC.getTypeID() === gC.c.LIGHTTYPEID_CLUSTERED_CONTAINER && CC.isSupported && CC._updateBatches(this.activeCamera).render()
        })), this._scene.addObjectRenderer(this)
      }
      _releaseRenderPassId() {
        for (let CC = 0; CC < this.options.numPasses; ++CC) this._engine.releaseRenderPassId(this._renderPassIds[CC]);
        this._renderPassIds.length = 0
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let CC = 0; CC < this.options.numPasses; ++CC) this._renderPassIds[CC] = this._engine.createRenderPassId(`${this.name}#${CC}`)
      }
      _createSceneUBO(CC, zC) {
        const ZC = this._scene.mg(),
          QC = new qC.c(ZC, void 0, zC, CC, void 0, !1);
        return QC.addUniform("viewProjection", 16), zC && QC.addUniform("viewProjectionR", 16), QC.addUniform("view", 16), QC.addUniform("projection", 16), QC.addUniform("vEyePosition", 4), QC.addUniform("inverseProjection", 16), QC
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const CC = this._engine._currentRenderTarget,
          zC = !(!CC || !CC.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const CC = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${CC} for ${this.name}`, zC)), this._sceneUBOIsMultiview.push(zC)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== zC && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, zC), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = zC);
        const ZC = this._sceneUBOs[this._currentSceneUBOIndex++];
        return ZC.unbindEffect(), ZC
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1
      }
      get refreshRate() {
        return this._refreshRate
      }
      set refreshRate(CC) {
        this._refreshRate = CC, this.resetRefreshCounter()
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1))
      }
      isReadyForRendering(CC, zC) {
        this.prepareRenderList(), this.initRender(CC, zC);
        const ZC = this._checkReadiness();
        return this.finishRender(), ZC
      }
      prepareRenderList() {
        const CC = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let zC = 0; zC < this._waitingRenderList.length; zC++) {
              const ZC = this._waitingRenderList[zC],
                QC = CC.getMeshById(ZC);
              QC && this.renderList.push(QC)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const CC = this._scene.meshes;
          for (let zC = 0; zC < CC.length; zC++) {
            const ZC = CC[zC];
            this.renderListPredicate(ZC) && this.renderList.push(ZC)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(CC, zC) {
        const ZC = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), ZC && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(ZC.getViewMatrix(), ZC.getProjectionMatrix(!0)), this._scene._activeCamera = ZC, this._engine.setViewport(ZC.rigParent ? ZC.rigParent.viewport : ZC.viewport, CC, zC)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const CC = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (CC.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), CC._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== CC.activeCamera && CC.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), CC.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZC = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[CC], this.onBeforeRenderObservable.notifyObservers(CC);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(CC);
        else {
          const zC = this._prepareRenderingManager(CC),
            ZC = this._scene.getOutlineRenderer?.(),
            QC = ZC?.enabled;
          ZC && (ZC.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(CC), this._renderingManager.render(this.customRenderFunction, zC, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(CC), ZC && (ZC.enabled = QC)
        }
        zC || this.onAfterRenderObservable.notifyObservers(CC), this._engine.currentRenderPassId = ZC
      }
      _checkReadiness() {
        const CC = this._scene,
          zC = this._engine.currentRenderPassId;
        let ZC = !0;
        CC.getViewMatrix() || CC.updateTransformMatrix();
        const QC = this.options.numPasses;
        for (let wC = 0; wC < QC && ZC; wC++) {
          const zC = this.renderList ? this.renderList : CC.frameGraph ? CC.meshes : CC.getActiveMeshes().data,
            bC = this.renderList || CC.frameGraph ? zC.length : CC.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[wC], this.onBeforeRenderObservable.notifyObservers(wC);
          let nC = null,
            fC = bC;
          this.getCustomRenderList && (nC = this.getCustomRenderList(wC, zC, bC), nC && (fC = nC.length)), nC || (nC = zC), this.options.doNotChangeAspectRatio || CC.updateTransformMatrix(!0);
          for (let CC = 0; CC < fC && ZC; ++CC) {
            const zC = nC[CC];
            if (!zC.isEnabled() || zC.isBlocked || !zC.isVisible || !zC.Zx) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(zC, this.refreshRate, !0)) {
                ZC = !1;
                continue
              }
            } else if (!zC.isReady(!0)) {
              ZC = !1;
              continue
            }
            let QC = zC._edgesRenderer,
              wC = zC.hasThinInstances;
            if (zC.ZH) {
              const CC = zC.LQC;
              CC.edgesShareWithInstances && CC._edgesRenderer?.isEnabled && (QC = CC._edgesRenderer, wC = !0)
            } else zC.yQC && zC.edgesShareWithInstances && (wC = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && QC?.isEnabled && (QC.isReady(wC) || (ZC = !1))
          }
          if (this.renderParticles && CC.particlesEnabled) {
            const zC = this.particleSystemList || CC.Ix;
            for (const CC of zC) CC.isReady() || (ZC = !1)
          }
          if (this.renderSprites && CC.spritesEnabled) {
            const zC = this.spriteManagerList || CC.spriteManagers;
            if (zC)
              for (const QC of zC) CC.activeCamera && 0 === (QC.layerMask & CC.activeCamera.layerMask) || QC.isReady && !QC.isReady() && (ZC = !1)
          }
          this.onAfterRenderObservable.notifyObservers(wC), QC > 1 && (CC.incrementRenderId(), CC.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = zC, ZC
      }
      _prepareRenderingManager() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZC = this._scene;
        let QC, wC, bC = null;
        const nC = this.renderList ? this.renderList : ZC.frameGraph ? ZC.meshes : ZC.getActiveMeshes().data,
          fC = this.renderList || ZC.frameGraph ? nC.length : ZC.getActiveMeshes().length;
        if (this.getCustomRenderList && (bC = this.getCustomRenderList(CC, nC, fC)), bC) QC = bC.length, wC = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !zC && !this._engine.isWebGPU) return nC;
          this._defaultRenderListPrepared = !0, bC = nC, QC = fC, wC = !this.renderList || this.forceLayerMaskCheck
        }
        const oC = ZC.activeCamera,
          qC = this.cameraForLOD ?? oC,
          FC = ZC.getBoundingBoxRenderer?.();
        if (ZC._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && FC) {
            FC.reset();
            for (let CC = 0; CC < this._activeBoundingBoxes.length; CC++) {
              const zC = this._activeBoundingBoxes.data[CC];
              FC.renderList.push(zC)
            }
          }
          return bC
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), FC && FC.reset(), this.renderMeshes) {
          const CC = ZC.getRenderId(),
            zC = ZC.getFrameId();
          for (let nC = 0; nC < QC; nC++) {
            const QC = bC[nC];
            if (QC && !QC.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(QC, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!QC.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let bC, nC;
              if (qC) {
                const CC = QC._internalAbstractMeshDataInfo._currentLOD.get(qC);
                CC && CC[1] === zC ? bC = CC[0] : (bC = ZC.customLODSelector ? ZC.customLODSelector(QC, qC) : QC.getLOD(qC), CC ? (CC[0] = bC, CC[1] = zC) : QC._internalAbstractMeshDataInfo._currentLOD.set(qC, [bC, zC]))
              } else bC = QC;
              if (!bC) continue;
              if (bC !== QC && 0 !== bC.billboardMode && bC.computeWorldMatrix(), bC._preActivateForIntermediateRendering(CC), nC = !(!wC || !oC) && 0 === (QC.layerMask & oC.layerMask), QC.isEnabled() && QC.isVisible && QC.Zx && !nC) {
                if (this._activeMeshes.push(QC), bC._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, bC !== QC && bC._activate(CC, !0), this.enableBoundingBoxRendering && FC && FC._preActiveMesh(QC), QC._activate(CC, !0) && QC.Zx.length) {
                  QC.ZH ? QC._internalAbstractMeshDataInfo._actAsRegularMesh && (bC = QC) : bC._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, bC._internalAbstractMeshDataInfo._isActiveIntermediate = !0, ZC._prepareSkeleton(bC);
                  for (let CC = 0; CC < bC.Zx.length; CC++) {
                    const zC = bC.Zx[CC];
                    this.enableBoundingBoxRendering && FC && FC._evaluateSubMesh(QC, zC), this._renderingManager.dispatch(zC, bC)
                  }
                }
                QC._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && FC && zC)
          for (let WC = 0; WC < FC.renderList.length; WC++) {
            const CC = FC.renderList.data[WC];
            this._activeBoundingBoxes.push(CC)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const CC = this.particleSystemList || ZC.Ix;
          for (let zC = 0; zC < CC.length; zC++) {
            const ZC = CC[zC],
              QC = ZC.emitter;
            ZC.isStarted() && QC && (!QC.position || QC.isEnabled()) && this._renderingManager.dispatchParticles(ZC)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return bC
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(CC, zC, ZC, QC)
      }
      setRenderingAutoClearDepthStencil(CC, zC) {
        let ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          QC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(CC, zC, ZC, QC), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const CC = new SC(this.name, this._scene, this.options);
        return this.renderList && (CC.renderList = this.renderList.slice(0)), CC
      }
      dispose() {
        const CC = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          zC = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let ZC = 0; ZC < zC; ZC++) {
          const zC = CC[ZC];
          zC && void 0 !== zC.getMaterialForRenderPass(this.renderPassId) && zC.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const ZC of this._sceneUBOs) ZC.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === SC.REFRESHRATE_RENDER_ONCE && (this.refreshRate = SC.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    SC.REFRESHRATE_RENDER_ONCE = 0, SC.REFRESHRATE_RENDER_ONEVERYFRAME = 1, SC.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var pC = ZC(39694);
    class PC extends bC.h {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate
      }
      set renderListPredicate(CC) {
        this._objectRenderer.renderListPredicate = CC
      }
      get renderList() {
        return this._objectRenderer.renderList
      }
      set renderList(CC) {
        this._objectRenderer.renderList = CC
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList
      }
      set particleSystemList(CC) {
        this._objectRenderer.particleSystemList = CC
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList
      }
      set getCustomRenderList(CC) {
        this._objectRenderer.getCustomRenderList = CC
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles
      }
      set renderParticles(CC) {
        this._objectRenderer.renderParticles = CC
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites
      }
      set renderSprites(CC) {
        this._objectRenderer.renderSprites = CC
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering
      }
      set enableBoundingBoxRendering(CC) {
        this._objectRenderer.enableBoundingBoxRendering = CC
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering
      }
      set enableOutlineRendering(CC) {
        this._objectRenderer.enableOutlineRendering = CC
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck
      }
      set forceLayerMaskCheck(CC) {
        this._objectRenderer.forceLayerMaskCheck = CC
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera
      }
      set activeCamera(CC) {
        this._objectRenderer.activeCamera = CC
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD
      }
      set cameraForLOD(CC) {
        this._objectRenderer.cameraForLOD = CC
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing
      }
      set disableImageProcessing(CC) {
        this._objectRenderer.disableImageProcessing = CC
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction
      }
      set customIsReadyFunction(CC) {
        this._objectRenderer.customIsReadyFunction = CC
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction
      }
      set customRenderFunction(CC) {
        this._objectRenderer.customRenderFunction = CC
      }
      get postProcesses() {
        return this._postProcesses
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled
      }
      set onAfterUnbind(CC) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(CC)
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable
      }
      set onBeforeRender(CC) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(CC)
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable
      }
      set onAfterRender(CC) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(CC)
      }
      set onClear(CC) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(CC)
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList
      }
      set _waitingRenderList(CC) {
        this._objectRenderer._waitingRenderList = CC
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
      setMaterialForRendering(CC, zC) {
        this._objectRenderer.setMaterialForRendering(CC, zC)
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
      set boundingBoxSize(CC) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(CC)) return;
        this._boundingBoxSize = CC;
        const zC = this.Km();
        zC && zC.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(CC, zC, ZC) {
        let nC, fC, qC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          FC = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          WC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          NC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          MC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : bC.h.TRILINEAR_SAMPLINGMODE,
          gC = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          pC = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          PC = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          GC = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          RC = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          AC = arguments.length > 13 ? arguments[13] : void 0,
          xC = arguments.length > 14 ? arguments[14] : void 0,
          JC = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          IC = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          iC = !0,
          vC = !1;
        if ("object" === typeof qC) {
          const CC = qC;
          qC = !!CC.generateMipMaps, FC = CC.doNotChangeAspectRatio ?? !0, WC = CC.type ?? 0, NC = !!CC.isCube, MC = CC.samplingMode ?? bC.h.TRILINEAR_SAMPLINGMODE, gC = CC.generateDepthBuffer ?? !0, pC = !!CC.generateStencilBuffer, PC = !!CC.isMulti, GC = CC.format ?? 5, RC = !!CC.delayAllocation, AC = CC.samples, xC = CC.creationFlags, JC = !!CC.noColorAttachment, IC = !!CC.useSRGBBuffer, nC = CC.colorAttachment, iC = CC.gammaSpace ?? iC, fC = CC.existingObjectRenderer, vC = !!CC.enableClusteredLights
        }
        if (super(null, ZC, !qC, void 0, MC, void 0, void 0, void 0, void 0, GC), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new QC.d, this.onAfterUnbindObservable = new QC.d, this.onClearObservable = new QC.d, this.onResizeObservable = new QC.d, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = wC.r.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(ZC = this.Km())) return;
        const eC = this.Km().mg();
        this._gammaSpace = iC, this._coordinatesMode = bC.h.PROJECTION_MODE, this.name = CC, this.isRenderTarget = !0, this._initialSizeParameter = zC, this._dontDisposeObjectRenderer = !!fC, this._processSizeParameter(zC), this._objectRenderer = fC ?? new SC(CC, ZC, {
          numPasses: NC ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: FC,
          enableClusteredLights: vC
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const CC = this._scene;
          if (!this._disableEngineStages)
            for (const zC of CC._beforeRenderTargetClearStage) zC.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(eC) : this.skipInitialClear || eC.clear(this.clearColor ?? CC.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || CC.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const zC of CC._beforeRenderTargetDrawStage) zC.action(this, this._currentFaceIndex, this._currentLayer);
          eC._debugPushGroup && eC._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (eC._debugPopGroup && eC._debugPopGroup(), !this._disableEngineStages)
            for (const zC of this._scene._afterRenderTargetDrawStage) zC.action(this, this._currentFaceIndex, this._currentLayer);
          const CC = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const zC of this._scene._afterRenderTargetPostProcessStage) zC.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = CC), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), eC) : oC.c.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(eC) : this.skipInitialClear || eC.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = eC.onResizeObservable.add((() => {})), this._generateMipMaps = !!qC, this._doNotChangeAspectRatio = FC, PC || (this._renderTargetOptions = {
          generateMipMaps: qC,
          type: WC,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: gC,
          generateStencilBuffer: pC,
          samples: AC,
          creationFlags: xC,
          noColorAttachment: JC,
          useSRGBBuffer: IC,
          colorAttachment: nC,
          label: this.name
        }, this.samplingMode === bC.h.NEAREST_SAMPLINGMODE && (this.wrapU = bC.h.CLAMP_ADDRESSMODE, this.wrapV = bC.h.CLAMP_ADDRESSMODE), RC || (NC ? (this._renderTarget = ZC.mg().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = bC.h.INVCUBIC_MODE, this._textureMatrix = wC.b.Identity()) : this._renderTarget = ZC.mg().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== AC && (this.samples = AC)))
      }
      createDepthStencilTexture() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          bC = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(CC, zC, ZC, QC, wC, bC)
      }
      _processSizeParameter(CC) {
        if (CC.ratio) {
          this._sizeRatio = CC.ratio;
          const zC = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(zC.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(zC.getRenderHeight(), this._sizeRatio)
          }
        } else this._size = CC
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples
      }
      set samples(CC) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(CC))
      }
      addPostProcess(CC) {
        if (!this._postProcessManager) {
          const CC = this.Km();
          if (!CC) return;
          this._postProcessManager = new nC.e(CC), this._postProcesses = new Array
        }
        this._postProcesses.push(CC), this._postProcesses[0].autoClear = !1
      }
      clearPostProcesses() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (CC)
            for (const CC of this._postProcesses) CC.dispose();
          this._postProcesses = []
        }
      }
      removePostProcess(CC) {
        if (!this._postProcesses) return;
        const zC = this._postProcesses.indexOf(CC); - 1 !== zC && (this._postProcesses.splice(zC, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter()
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate
      }
      set refreshRate(CC) {
        this._objectRenderer.refreshRate = CC
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
        const CC = this._size.layers;
        if (CC) return CC;
        const zC = this._size.depth;
        return zC || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(CC) {
        const zC = Math.max(1, this.getRenderSize() * CC);
        this.resize(zC)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(CC) {
        const zC = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const ZC = this.Km();
        ZC && (this._processSizeParameter(CC), this._renderTarget = zC ? ZC.mg().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : ZC.mg().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(CC, zC)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => ZC(41648))).then((CC => this._dumpTools = CC))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const CC = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), CC
      }
      _render() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZC = this.Km();
        if (!ZC) return;
        void 0 !== this.useCameraPostProcesses && (CC = this.useCameraPostProcesses);
        const QC = ZC.mg();
        if (QC._debugPushGroup && QC._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let wC = 0; wC < 6; wC++) this._renderToTarget(wC, CC, zC), ZC.incrementRenderId(), ZC.resetCachedMaterial();
          else this._renderToTarget(0, CC, zC);
        else
          for (let wC = 0; wC < this.getRenderLayers(); wC++) this._renderToTarget(0, CC, zC, wC), ZC.incrementRenderId(), ZC.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), QC._debugPopGroup && QC._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(CC, zC) {
        const ZC = CC * zC,
          QC = (0, fC.j)(ZC + 16384 / (128 + ZC));
        return Math.min((0, fC.c)(CC), QC)
      }
      _bindFrameBuffer() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZC = this.Km();
        if (!ZC) return;
        const QC = ZC.mg();
        this._renderTarget && QC.bindFramebuffer(this._renderTarget, this.isCube ? CC : void 0, void 0, void 0, this.ignoreCameraViewport, 0, zC)
      }
      _unbindFrameBuffer(CC, zC) {
        this._renderTarget && CC.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(zC)
        }))
      }
      _prepareFrame(CC, zC, ZC, QC) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(zC, ZC) : QC && CC.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(zC, ZC)
      }
      _renderToTarget(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const wC = this.Km();
        if (!wC) return;
        const bC = wC.mg();
        this._currentFaceIndex = CC, this._currentLayer = QC, this._currentUseCameraPostProcess = zC, this._currentDumpForDebug = ZC, this._prepareFrame(wC, CC, QC, zC), this._objectRenderer.render(CC + QC, !0), this._unbindFrameBuffer(bC, CC), this._texture && this.isCube && 5 === CC && bC.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(CC, zC, ZC, QC)
      }
      setRenderingAutoClearDepthStencil(CC, zC) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(CC, zC)
      }
      clone() {
        const CC = this.getSize(),
          zC = new PC(this.name, CC, this.Km(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return zC.hasAlpha = this.hasAlpha, zC.level = this.level, zC.coordinatesMode = this.coordinatesMode, this.renderList && (zC.renderList = this.renderList.slice(0)), zC
      }
      serialize() {
        if (!this.name) return null;
        const CC = super.serialize();
        if (CC.renderTargetSize = this.getRenderSize(), CC.renderList = [], this.renderList)
          for (let zC = 0; zC < this.renderList.length; zC++) CC.renderList.push(this.renderList[zC].id);
        return CC
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.Km().mg().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const CC = this.Km();
        if (!CC) return;
        let zC = CC.customRenderTargets.indexOf(this);
        zC >= 0 && CC.customRenderTargets.splice(zC, 1);
        for (const ZC of CC.cameras) zC = ZC.customRenderTargets.indexOf(this), zC >= 0 && ZC.customRenderTargets.splice(zC, 1);
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
    PC.REFRESHRATE_RENDER_ONCE = SC.REFRESHRATE_RENDER_ONCE, PC.REFRESHRATE_RENDER_ONEVERYFRAME = SC.REFRESHRATE_RENDER_ONEVERYFRAME, PC.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = SC.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(PC.prototype, "noPrePassRenderer") || Object.defineProperty(PC.prototype, "noPrePassRenderer", (0, pC.d)("RenderTargetTexture", "noPrePassRenderer"))
  },
  41622: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => qC,
      e: () => FC
    });
    var QC = ZC(39959),
      wC = ZC(37931),
      bC = ZC(36987),
      nC = ZC(39666),
      fC = ZC(40148);
    const oC = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class qC {
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oC;
        this._fullscreenViewport = new wC.d(0, 0, 1, 1);
        const ZC = zC.positions ?? oC.positions,
          bC = zC.indices ?? oC.indices;
        this.engine = CC, this._vertexBuffers = {
          [QC.k.PositionKind]: new QC.k(CC, ZC, QC.k.PositionKind, !1, !1, 2)
        }, this._indexBuffer = CC.createIndexBuffer(bC), this._indexBufferLength = bC.length, this._onContextRestoredObserver = CC.Yg.add((() => {
          this._indexBuffer = CC.createIndexBuffer(bC);
          for (const CC in this._vertexBuffers) {
            this._vertexBuffers[CC]._rebuild()
          }
        }))
      }
      setViewport() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.engine.setViewport(CC)
      }
      bindBuffers(CC) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, CC)
      }
      applyEffectWrapper(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = zC, this.engine.stencilState.stencilTest = ZC, this.engine.enableEffect(CC.drawWrapper), this.bindBuffers(CC.effect), CC.onApplyObservable.notifyObservers({})
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
      _isRenderTargetTexture(CC) {
        return void 0 !== CC.renderTarget
      }
      render(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!CC.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const ZC = null === zC ? null : this._isRenderTargetTexture(zC) ? zC.renderTarget : zC;
        ZC && this.engine.bindFramebuffer(ZC), this.applyEffectWrapper(CC), this.draw(), ZC && this.engine.unBindFramebuffer(ZC), this.restoreStates()
      }
      dispose() {
        const CC = this._vertexBuffers[QC.k.PositionKind];
        CC && (CC.dispose(), delete this._vertexBuffers[QC.k.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.Yg.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class FC {
      static RegisterShaderCodeProcessing(CC, zC) {
        zC ? FC._CustomShaderCodeProcessing[CC ?? ""] = zC : delete FC._CustomShaderCodeProcessing[CC ?? ""]
      }
      static _GetShaderCodeProcessing(CC) {
        return FC._CustomShaderCodeProcessing[CC] ?? FC._CustomShaderCodeProcessing[""]
      }
      get name() {
        return this.options.name
      }
      set name(CC) {
        this.options.name = CC
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
      set effect(CC) {
        this._drawWrapper.effect = CC
      }
      constructor(CC) {
        this.alphaMode = 0, this.onEffectCreatedObservable = new bC.d(void 0, !0), this.onApplyObservable = new bC.d, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
          ...CC,
          name: CC.name || "effectWrapper",
          engine: CC.engine,
          uniforms: CC.uniforms || CC.uniformNames || [],
          uniformNames: void 0,
          samplers: CC.samplers || CC.samplerNames || [],
          samplerNames: void 0,
          attributeNames: CC.attributeNames || ["position"],
          uniformBuffers: CC.uniformBuffers || [],
          defines: CC.defines || "",
          useShaderStore: CC.useShaderStore || !1,
          vertexUrl: CC.vertexUrl || CC.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: CC.fragmentShader || "pass",
          indexParameters: CC.indexParameters,
          blockCompilation: CC.blockCompilation || !1,
          shaderLanguage: CC.shaderLanguage || 0,
          onCompiled: CC.onCompiled || void 0,
          extraInitializations: CC.extraInitializations || void 0,
          extraInitializationsAsync: CC.extraInitializationsAsync || void 0,
          useAsPostProcess: CC.useAsPostProcess ?? !1,
          allowEmptySourceTexture: CC.allowEmptySourceTexture ?? !1
        }, this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), CC.vertexUrl || CC.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add((() => {
          this.effect.setFloat2("scale", 1, 1)
        }))), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add((() => {
          this.bind()
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.Yg.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new fC.d(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const zC = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, zC, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          QC = arguments.length > 2 ? arguments[2] : void 0,
          wC = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, wC && this._importPromises.push(...wC);
        const bC = this.options.engine.isWebGPU && !FC.ForceGLSL;
        this._gatherImports(bC, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(bC && this._webGPUReady ? ZC.e(364).then((() => ZC(61047))) : ZC.e(353).then((() => ZC(60938)))), void 0 !== QC && QC(bC, this._importPromises), bC && this._webGPUReady && (this.options.shaderLanguage = 1), CC || this.updateEffect(zC)
      }
      updateEffect() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          QC = arguments.length > 3 ? arguments[3] : void 0,
          wC = arguments.length > 4 ? arguments[4] : void 0,
          bC = arguments.length > 5 ? arguments[5] : void 0,
          fC = arguments.length > 6 ? arguments[6] : void 0,
          oC = arguments.length > 7 ? arguments[7] : void 0;
        const qC = FC._GetShaderCodeProcessing(this.name);
        if (qC?.defineCustomBindings) {
          const QC = zC?.slice() ?? [];
          QC.push(...this.options.uniforms);
          const wC = ZC?.slice() ?? [];
          wC.push(...this.options.samplers), CC = qC.defineCustomBindings(this.name, CC, QC, wC), zC = QC, ZC = wC
        }
        this.options.defines = CC || "";
        const WC = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let NC;
        NC = this.options.extraInitializationsAsync ? async () => {
          await (WC?.()), await this.options.extraInitializationsAsync()
        }: WC, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: fC ?? this._shaderPath.vertex,
          fragment: oC ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: zC || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: ZC || this.options.samplers,
          defines: null !== CC ? CC : "",
          fallbacks: null,
          onCompiled: wC ?? this.options.onCompiled,
          onError: bC ?? null,
          indexParameters: QC || this.options.indexParameters,
          processCodeAfterIncludes: qC?.processCodeAfterIncludes ? (CC, zC) => qC.processCodeAfterIncludes(this.name, CC, zC) : null,
          processFinalCode: qC?.processFinalCode ? (CC, zC) => qC.processFinalCode(this.name, CC, zC) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: NC
        }, this.options.engine) : this._drawWrapper.effect = new nC.b(this._shaderPath, this.options.attributeNames, zC || this.options.uniforms, ZC || this.options.samplerNames, this.options.engine, CC, void 0, wC || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, NC), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !CC && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), FC._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.mg().Yg.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    FC.ForceGLSL = !1, FC._CustomShaderCodeProcessing = {}
  },
  41648: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      Dispose: () => GC,
      DumpData: () => PC,
      DumpDataAsync: () => pC,
      DumpFramebuffer: () => SC,
      DumpTools: () => RC,
      EncodeImageAsync: () => gC,
      RegisterDumpTools: () => xC
    });
    var QC = ZC(39811),
      wC = ZC(41622),
      bC = ZC(39913),
      nC = ZC(36991),
      fC = ZC(36985),
      oC = ZC(38507),
      qC = ZC(39878),
      FC = ZC(39818);
    let WC = null;
    async function NC() {
      return WC || (WC = async function() {
        const CC = fC.c.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        CC instanceof OffscreenCanvas && oC.c.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: zC
        } = await Promise.resolve().then((() => ZC(39663)));
        if (!zC.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const QC = new zC(CC, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        fC.c.Instances.pop(), fC.c.OnEnginesDisposedObservable.add((CC => {
          QC && CC !== QC && !QC.GJ && 0 === fC.c.Instances.length && GC()
        })), QC.getCaps().parallelShaderCompile = void 0;
        const bC = new wC.b(QC),
          {
            passPixelShader: nC
          } = await ZC.e(372).then((() => ZC(61109))),
          qC = new wC.e({
            engine: QC,
            name: nC.name,
            fragmentShader: nC.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: CC,
          dumpEngine: {
            engine: QC,
            renderer: bC,
            wrapper: qC
          }
        }
      }()), await WC
    }
    let MC = (() => {
      var CC;
      let zC, ZC = [];
      return CC = class {
        static async EncodeImageAsync(CC, zC, ZC, QC, wC, nC) {
          const fC = await NC(),
            oC = fC.dumpEngine;
          oC.engine.setSize(zC, ZC, !0);
          const qC = oC.engine.createRawTexture(CC, zC, ZC, 5, !1, !wC, 1);
          return oC.renderer.setViewport(), oC.renderer.applyEffectWrapper(oC.wrapper), oC.wrapper.effect._bindTexture("textureSampler", qC), oC.renderer.draw(), qC.dispose(), await new Promise(((CC, zC) => {
            bC.g.ToBlob(fC.canvas, (ZC => {
              ZC ? CC(ZC) : zC(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), QC, nC)
          }))
        }
      }, (() => {
        const wC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zC = [FC.h], (0, QC.j)(CC, null, zC, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: CC => "EncodeImageAsync" in CC,
            get: CC => CC.EncodeImageAsync
          },
          metadata: wC
        }, null, ZC), wC && Object.defineProperty(CC, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: wC
        }), (0, QC.n)(CC, ZC)
      })(), CC
    })();
    const gC = MC.EncodeImageAsync;
    async function SC(CC, zC, ZC, QC) {
      let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        bC = arguments.length > 5 ? arguments[5] : void 0,
        nC = arguments.length > 6 ? arguments[6] : void 0;
      const fC = await ZC.readPixels(0, 0, CC, zC);
      PC(CC, zC, new Uint8Array(fC.buffer), QC, wC, bC, !0, void 0, nC)
    }
    async function pC(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        wC = arguments.length > 4 ? arguments[4] : void 0,
        fC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        FC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        WC = arguments.length > 7 ? arguments[7] : void 0;
      if (ZC instanceof Float32Array) {
        const CC = new Uint8Array(ZC.length);
        let zC = ZC.length;
        for (; zC--;) {
          const QC = ZC[zC];
          CC[zC] = Math.round(255 * (0, nC.Clamp)(QC))
        }
        ZC = CC
      }
      const NC = await MC.EncodeImageAsync(ZC, CC, zC, QC, fC, WC);
      void 0 !== wC && bC.g.DownloadBlob(NC, wC), NC.type !== QC && oC.c.Warn(`DumpData: The requested mimeType '${QC}' is not supported. The result has mimeType '${NC.type}' instead.`);
      const gC = await NC.arrayBuffer();
      return FC ? gC : `data:${QC};base64,${(0,qC.i)(gC)}`
    }

    function PC(CC, zC, ZC, QC) {
      let wC = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== wC || QC || (wC = ""), pC(CC, zC, ZC, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", wC, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((CC => {
        QC && QC(CC)
      }))
    }

    function GC() {
      WC && (WC?.then((CC => {
        CC.canvas instanceof HTMLCanvasElement && CC.canvas.remove(), CC.dumpEngine && (CC.dumpEngine.engine.dispose(), CC.dumpEngine.renderer.dispose(), CC.dumpEngine.wrapper.dispose())
      })), WC = null)
    }
    const RC = {
      DumpData: PC,
      DumpDataAsync: pC,
      DumpFramebuffer: SC,
      Dispose: GC
    };
    let AC = !1;

    function xC() {
      if (AC) return;
      AC = !0;
      bC.g.DumpData = PC, bC.g.DumpDataAsync = pC, bC.g.DumpFramebuffer = SC
    }
  },
  41634: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => MC,
      d: () => gC,
      f: () => SC
    });
    var QC = ZC(40303),
      wC = ZC(41638),
      bC = ZC(39811),
      nC = ZC(41618),
      fC = ZC(39842),
      oC = ZC(41640),
      qC = ZC(39818);
    class FC extends nC.d {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(CC, zC) {
        let ZC = arguments.length > 4 ? arguments[4] : void 0;
        const QC = {
          size: "number" === typeof zC ? zC : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: ZC,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...zC
        };
        super(CC, oC.g.FragmentUrl, {
          effectWrapper: "number" !== typeof zC && zC.effectWrapper ? void 0 : new oC.g(CC, ZC, QC),
          ...QC
        })
      }
      static _Parse(CC, zC, ZC, QC) {
        return fC.d.Parse((() => new FC(CC.name, CC.options, zC, CC.renderTargetSamplingMode, CC._engine, CC.reusable)), CC, ZC, QC)
      }
    }(() => {
      var CC;
      let zC, ZC = nC.d,
        QC = [];
      CC = class extends ZC {
        get face() {
          return this._effectWrapper.face
        }
        set face(CC) {
          this._effectWrapper.face = CC
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(CC, zC) {
          let ZC = arguments.length > 4 ? arguments[4] : void 0;
          const wC = {
            size: "number" === typeof zC ? zC : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: ZC,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...zC
          };
          super(CC, oC.g.FragmentUrl, {
            effectWrapper: "number" !== typeof zC && zC.effectWrapper ? void 0 : new oC.c(CC, ZC, wC),
            ...wC
          }), (0, bC.n)(this, QC)
        }
        static _Parse(zC, ZC, QC, wC) {
          return fC.d.Parse((() => new CC(zC.name, zC.options, ZC, zC.renderTargetSamplingMode, zC._engine, zC.reusable)), zC, QC, wC)
        }
      }, (() => {
        const wC = "function" === typeof Symbol && Symbol.metadata ? Object.create(ZC[Symbol.metadata] ?? null) : void 0;
        zC = [(0, qC.M)()], (0, bC.j)(CC, null, zC, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: CC => "face" in CC,
            get: CC => CC.face
          },
          metadata: wC
        }, null, QC), wC && Object.defineProperty(CC, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: wC
        })
      })()
    })();
    var WC = ZC(36991),
      NC = ZC(39889);

    function MC(CC, zC, ZC, QC, wC, bC, fC, oC) {
      const qC = zC.mg();
      return zC.isReady = !1, wC = wC ?? zC.samplingMode, QC = QC ?? zC.type, bC = bC ?? zC.format, fC = fC ?? zC.width, oC = oC ?? zC.height, -1 === QC && (QC = 0), new Promise((FC => {
        const WC = new nC.d("postprocess", CC, null, null, 1, null, wC, qC, !1, void 0, QC, void 0, null, !1, bC);
        WC.externalTextureSamplerBinding = !0;
        const NC = qC.createRenderTargetTexture({
          width: fC,
          height: oC
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: wC,
          type: QC,
          format: bC
        });
        WC.onEffectCreatedObservable.addOnce((CC => {
          CC.executeWhenCompiled((() => {
            WC.onApply = CC => {
              CC._bindTexture("textureSampler", zC), CC.setFloat2("scale", 1, 1)
            }, ZC.postProcessManager.directRender([WC], NC, !0), qC.restoreDefaultFramebuffer(), qC._releaseTexture(zC), WC && WC.dispose(), NC._swapAndDie(zC), zC.type = QC, zC.format = 5, zC.isReady = !0, FC(zC)
          }))
        }))
      }))
    }
    async function gC(CC, zC, bC) {
      let fC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        oC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        qC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        FC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(CC) {
        if (CC.isReady()) return;
        if (CC.loadingError) throw new Error(CC.errorObject?.message || `Texture ${CC.name} errored while loading.`);
        const zC = CC.onLoadObservable;
        if (zC) return await new Promise((CC => zC.addOnce((() => CC()))));
        const ZC = CC._texture?.onLoadedObservable;
        if (ZC) return await new Promise((CC => ZC.addOnce((() => CC()))));
        throw new Error(`Cannot determine readiness of texture ${CC.name}.`)
      }(CC);
      const NC = CC.getInternalTexture(),
        MC = CC.is3D || !!NC?.is3D,
        {
          width: gC,
          height: SC
        } = CC.getSize(),
        pC = zC ?? gC,
        PC = bC ?? SC;
      if (qC || MC || function(CC) {
          switch (CC) {
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
        }(CC.textureFormat) || pC !== gC || PC !== SC) {
        if (CC.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${qC?"RTT":"compression"} is not supported.`);
        return await async function(CC, zC, bC, fC, oC) {
          let qC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const FC = CC.Km(),
            WC = FC.mg(),
            NC = CC.getInternalTexture(),
            MC = CC.is3D || !!NC?.is3D;
          let gC;
          if (WC.isWebGPU ? MC ? await ZC.e(368).then((() => ZC(61084))) : CC.isCube ? await ZC.e(369).then((() => ZC(61088))) : await ZC.e(370).then((() => ZC(61096))) : MC ? await ZC.e(365).then((() => ZC(61069))) : CC.isCube ? await ZC.e(366).then((() => ZC(61075))) : await ZC.e(367).then((() => ZC(61081))), MC) gC = new nC.d("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: QC.h.NEAREST_NEAREST_MIPNEAREST,
            engine: WC,
            shaderLanguage: WC.isWebGPU ? 1 : 0
          });
          else if (CC.isCube) {
            const CC = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            gC = new nC.d("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: QC.h.NEAREST_NEAREST_MIPNEAREST,
              engine: WC,
              defines: CC[fC],
              shaderLanguage: WC.isWebGPU ? 1 : 0
            })
          } else gC = new nC.d("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: QC.h.NEAREST_NEAREST_MIPNEAREST,
            engine: WC,
            shaderLanguage: WC.isWebGPU ? 1 : 0
          });
          await new Promise((CC => {
            gC.onEffectCreatedObservable.addOnce((zC => {
              zC.executeWhenCompiled((() => {
                CC(0)
              }))
            }))
          }));
          const SC = new wC.e("temp", {
            width: zC,
            height: bC
          }, FC, !1);
          gC.onApply = function(zC) {
            zC.setTexture("textureSampler", CC), zC.setFloat("lod", oC), zC.setInt("gamma", CC.gammaSpace ? 1 : 0), MC && zC.setFloat("slice", qC)
          };
          try {
            if (SC.renderTarget && NC) {
              const ZC = NC.samplingMode;
              0 !== oC ? CC.updateSamplingMode(QC.h.NEAREST_NEAREST_MIPNEAREST) : CC.updateSamplingMode(QC.h.NEAREST_NEAREST), FC.postProcessManager.directRender([gC], SC.renderTarget, !0), CC.updateSamplingMode(ZC);
              const wC = await WC.readPixels(0, 0, zC, bC),
                nC = new Uint8Array(wC.buffer, wC.byteOffset, wC.byteLength);
              return WC.unBindFramebuffer(SC.renderTarget), nC
            }
            throw Error("Render to texture failed.")
          } finally {
            SC.dispose(), gC.dispose()
          }
        }(CC, pC, PC, fC, oC, FC)
      }
      let GC = await CC.readPixels(fC, oC);
      if (!GC) throw new Error(`Failed to read pixels from texture ${CC.name}.`);
      if (GC instanceof Float32Array) {
        const CC = new Uint8Array(GC.length);
        let zC = GC.length;
        for (; zC--;) {
          const ZC = GC[zC];
          CC[zC] = Math.round(255 * (0, WC.Clamp)(ZC))
        }
        GC = CC
      }
      const RC = pC * PC,
        AC = 4 * RC;
      if (GC.length !== AC) {
        const CC = 0 === RC ? 0 : GC.length / RC;
        if (1 === CC || 2 === CC || 3 === CC) {
          const zC = new Uint8Array(AC);
          for (let ZC = 0, QC = 0, wC = 0; ZC < RC; ZC++, wC += 4) {
            const ZC = GC[QC++];
            if (1 === CC) {
              zC[wC] = ZC, zC[wC + 1] = ZC, zC[wC + 2] = ZC, zC[wC + 3] = 255;
              continue
            }
            const bC = GC[QC++];
            2 !== CC ? (zC[wC] = ZC, zC[wC + 1] = bC, zC[wC + 2] = GC[QC++], zC[wC + 3] = 255) : (zC[wC] = ZC, zC[wC + 1] = bC, zC[wC + 2] = 0, zC[wC + 3] = 255)
          }
          return zC
        }
      }
      return GC
    }
    const SC = {
      CreateResizedCopy: function(CC, zC, ZC) {
        let bC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const nC = CC.Km(),
          fC = nC.mg(),
          oC = new wC.e("resized" + CC.name, {
            width: zC,
            height: ZC
          }, nC, !CC.noMipmap, !0, CC._texture.type, !1, CC.samplingMode, !1);
        oC.wrapU = CC.wrapU, oC.wrapV = CC.wrapV, oC.uOffset = CC.uOffset, oC.vOffset = CC.vOffset, oC.uScale = CC.uScale, oC.vScale = CC.vScale, oC.uAng = CC.uAng, oC.vAng = CC.vAng, oC.wAng = CC.wAng, oC.coordinatesIndex = CC.coordinatesIndex, oC.level = CC.level, oC.anisotropicFilteringLevel = CC.anisotropicFilteringLevel, oC._texture.isReady = !1, CC.wrapU = QC.h.CLAMP_ADDRESSMODE, CC.wrapV = QC.h.CLAMP_ADDRESSMODE;
        const qC = new FC("pass", 1, null, bC ? QC.h.BILINEAR_SAMPLINGMODE : QC.h.NEAREST_SAMPLINGMODE, fC, !1, 0);
        return qC.externalTextureSamplerBinding = !0, qC.onEffectCreatedObservable.addOnce((zC => {
          zC.executeWhenCompiled((() => {
            qC.onApply = function(zC) {
              zC.setTexture("textureSampler", CC)
            };
            const zC = oC.renderTarget;
            zC && (nC.postProcessManager.directRender([qC], zC), fC.unBindFramebuffer(zC), oC.disposeFramebufferObjects(), qC.dispose(), oC.getInternalTexture().isReady = !0)
          }))
        })), oC
      },
      ApplyPostProcess: MC,
      ToHalfFloat: NC.k,
      FromHalfFloat: NC.e,
      GetTextureDataAsync: gC
    }
  },
  41618: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => gC
    });
    var QC = ZC(39811),
      wC = ZC(39925),
      bC = ZC(36987),
      nC = ZC(36963),
      fC = ZC(39666),
      oC = ZC(39818),
      qC = ZC(39842),
      FC = ZC(37002),
      WC = ZC(39721),
      NC = ZC(39747),
      MC = ZC(41622);
    let gC = (() => {
        var CC;
        let zC, fC, WC, gC, SC, PC, GC, RC, AC, xC, JC, IC, iC, vC, eC, hC, KC = [],
          YC = [],
          dC = [],
          mC = [],
          HC = [],
          EC = [],
          lC = [],
          XC = [],
          cC = [],
          uC = [],
          rC = [],
          sC = [],
          TC = [],
          aC = [],
          tC = [],
          DC = [],
          jC = [],
          yC = [],
          LC = [],
          UC = [],
          BC = [],
          OC = [],
          kC = [],
          VC = [],
          Cz = [],
          zz = [],
          Zz = [],
          Qz = [],
          wz = [];
        return CC = class {
          static get ForceGLSL() {
            return MC.e.ForceGLSL
          }
          static set ForceGLSL(CC) {
            MC.e.ForceGLSL = CC
          }
          static RegisterShaderCodeProcessing(CC, zC) {
            MC.e.RegisterShaderCodeProcessing(CC, zC)
          }
          get name() {
            return this._effectWrapper.name
          }
          set name(CC) {
            this._effectWrapper.name = CC
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode
          }
          set alphaMode(CC) {
            this._effectWrapper.alphaMode = CC
          }
          get samples() {
            return this._samples
          }
          set samples(CC) {
            this._samples = Math.min(CC, this._engine.getCaps().maxMSAASamples), this._textures.forEach((CC => {
              CC.setSamples(this._samples)
            }))
          }
          get shaderLanguage() {
            return this._shaderLanguage
          }
          getEffectName() {
            return this._fragmentUrl
          }
          set onActivate(CC) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), CC && (this._onActivateObserver = this.onActivateObservable.add(CC))
          }
          set onSizeChanged(CC) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(CC)
          }
          set onApply(CC) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(CC)
          }
          set onBeforeRender(CC) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(CC)
          }
          set onAfterRender(CC) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(CC)
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd]
          }
          set inputTexture(CC) {
            this._forcedOutputTexture = CC
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty())
          }
          getCamera() {
            return this.zV
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.L_(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(zC, ZC, fC, oC, qC, FC) {
            let WC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              NC = arguments.length > 7 ? arguments[7] : void 0,
              gC = arguments.length > 8 ? arguments[8] : void 0,
              SC = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              PC = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              GC = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              RC = arguments.length > 12 ? arguments[12] : void 0,
              AC = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              xC = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              JC = arguments.length > 15 ? arguments[15] : void 0,
              IC = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, QC.n)(this, KC), null), this.uniqueId = (0, QC.n)(this, YC, void 0), this.width = ((0, QC.n)(this, dC), (0, QC.n)(this, mC, -1)), this.height = ((0, QC.n)(this, HC), (0, QC.n)(this, EC, -1)), this.nodeMaterialSource = ((0, QC.n)(this, lC), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, QC.n)(this, XC, void 0), this.clearColor = ((0, QC.n)(this, cC), (0, QC.n)(this, uC, void 0)), this.autoClear = ((0, QC.n)(this, rC), (0, QC.n)(this, sC, !0)), this.forceAutoClearInAlphaMode = ((0, QC.n)(this, TC), (0, QC.n)(this, aC, !1)), this.alphaConstants = ((0, QC.n)(this, tC), (0, QC.n)(this, DC, void 0)), this.animations = ((0, QC.n)(this, jC), []), this.enablePixelPerfectMode = (0, QC.n)(this, yC, !1), this.forceFullscreenViewport = ((0, QC.n)(this, LC), (0, QC.n)(this, UC, !0)), this.inspectableCustomProperties = (0, QC.n)(this, BC), this.scaleMode = (0, QC.n)(this, OC, 1), this.alwaysForcePOT = ((0, QC.n)(this, kC), (0, QC.n)(this, VC, !1)), this._samples = ((0, QC.n)(this, Cz), (0, QC.n)(this, zz, 1)), this.adaptScaleToCurrentViewport = ((0, QC.n)(this, Zz), (0, QC.n)(this, Qz, !1)), this.doNotSerialize = ((0, QC.n)(this, wz), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new wC.i(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new nC.n(1, 1), this._texelSize = nC.n.Zero(), this.onActivateObservable = new bC.d, this.onSizeChangedObservable = new bC.d, this.onApplyObservable = new bC.d, this.onBeforeRenderObservable = new bC.d, this.onAfterRenderObservable = new bC.d, this.Tm = new bC.d, pC();
            let iC, vC = 1,
              eC = null;
            if (fC && !Array.isArray(fC)) {
              const CC = fC;
              fC = CC.uniforms ?? null, oC = CC.samplers ?? null, vC = CC.size ?? 1, FC = CC.camera ?? null, WC = CC.samplingMode ?? 1, NC = CC.engine, gC = CC.reusable, SC = Array.isArray(CC.defines) ? CC.defines.join("\n") : CC.defines ?? null, PC = CC.textureType ?? 0, GC = CC.vertexUrl ?? "postprocess", RC = CC.indexParameters, AC = CC.blockCompilation ?? !1, xC = CC.textureFormat ?? 5, JC = CC.shaderLanguage ?? 0, eC = CC.uniformBuffers ?? null, IC = CC.extraInitializations, iC = CC.effectWrapper
            } else qC && (vC = "number" === typeof qC ? qC : {
              width: qC.width,
              height: qC.height
            });
            if (this._useExistingThinPostProcess = !!iC, this._effectWrapper = iC ?? new MC.e({
                name: zC,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: ZC,
                engine: NC || FC?.Km().mg(),
                uniforms: fC,
                samplers: oC,
                uniformBuffers: eC,
                defines: SC,
                vertexUrl: GC,
                indexParameters: RC,
                blockCompilation: !0,
                shaderLanguage: JC,
                extraInitializations: void 0
              }), this.name = zC, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != FC ? (this.zV = FC, this._scene = FC.Km(), FC.attachPostProcess(this), this._engine = this._scene.mg(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : NC && (this._engine = NC, this._engine.postProcesses.push(this)), this._options = vC, this.renderTargetSamplingMode = WC || 1, this._reusable = gC || !1, this._textureType = PC, this._textureFormat = xC, this._shaderLanguage = JC || 0, this._samplers = oC || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = ZC, this._vertexUrl = GC, this._parameters = fC || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = eC || [], this._indexParameters = RC, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const zC = [];
              this._gatherImports(this._engine.isWebGPU && !CC.ForceGLSL, zC), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(AC, SC, IC, zC)
            }
          }
          _gatherImports() {
            let CC = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? CC.push(Promise.all([ZC.e(364).then((() => ZC(61047)))])) : CC.push(Promise.all([ZC.e(353).then((() => ZC(60938)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          mg() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(CC) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = CC, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new wC.i(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              QC = arguments.length > 3 ? arguments[3] : void 0,
              wC = arguments.length > 4 ? arguments[4] : void 0,
              bC = arguments.length > 5 ? arguments[5] : void 0,
              nC = arguments.length > 6 ? arguments[6] : void 0,
              fC = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(CC, zC, ZC, QC, wC, bC, nC, fC), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(CC, zC) {
            let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let wC = 0; wC < this._textureCache.length; wC++)
              if (this._textureCache[wC].texture.width === CC.width && this._textureCache[wC].texture.height === CC.height && this._textureCache[wC].postProcessChannel === ZC && this._textureCache[wC].texture._generateDepthBuffer === zC.generateDepthBuffer && this._textureCache[wC].texture.samples === zC.samples) return this._textureCache[wC].texture;
            const QC = this._engine.createRenderTargetTexture(CC, zC);
            return this._textureCache.push({
              texture: QC,
              postProcessChannel: ZC,
              lastUsedRenderId: -1
            }), QC
          }
          _flushTextureCache() {
            const CC = this._renderId;
            for (let zC = this._textureCache.length - 1; zC >= 0; zC--)
              if (CC - this._textureCache[zC].lastUsedRenderId > 100) {
                let CC = !1;
                for (let ZC = 0; ZC < this._textures.length; ZC++)
                  if (this._textures.data[ZC] === this._textureCache[zC].texture) {
                    CC = !0;
                    break
                  } CC || (this._textureCache[zC].texture.dispose(), this._textureCache.splice(zC, 1))
              }
          }
          resize(CC, zC) {
            let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = CC, this.height = zC;
            let bC = null;
            if (ZC)
              for (let oC = 0; oC < ZC._postProcesses.length; oC++)
                if (null !== ZC._postProcesses[oC]) {
                  bC = ZC._postProcesses[oC];
                  break
                } const nC = {
                width: this.width,
                height: this.height
              },
              fC = {
                generateMipMaps: QC,
                generateDepthBuffer: wC || bC === this,
                generateStencilBuffer: (wC || bC === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(nC, fC, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(nC, fC, 1)), this._texelSize.L_(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let CC;
            if (this._shareOutputWithPostProcess) CC = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) CC = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let zC;
              CC = this.inputTexture;
              for (let ZC = 0; ZC < this._textureCache.length; ZC++)
                if (this._textureCache[ZC].texture === CC) {
                  zC = this._textureCache[ZC];
                  break
                } zC && (zC.lastUsedRenderId = this._renderId)
            }
            return CC
          }
          activate(CC) {
            let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              ZC = arguments.length > 2 ? arguments[2] : void 0;
            const QC = null === CC || void 0 !== CC.cameraRigMode ? CC || this.zV : null,
              wC = QC?.Km() ?? CC,
              bC = wC.mg(),
              nC = bC.getCaps().maxTextureSize,
              fC = (zC ? zC.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              oC = (zC ? zC.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let qC = this._options.width || fC,
              FC = this._options.height || oC;
            const WC = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let MC = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const CC = bC.currentViewport;
                CC && (qC *= CC.width, FC *= CC.height)
              }(WC || this.alwaysForcePOT) && (this._options.width || (qC = bC.needPOTTextures ? (0, NC.e)(qC, nC, this.scaleMode) : qC), this._options.height || (FC = bC.needPOTTextures ? (0, NC.e)(FC, nC, this.scaleMode) : FC)), this.width === qC && this.height === FC && (MC = this._getTarget()) || this.resize(qC, FC, QC, WC, ZC), this._textures.forEach((CC => {
                CC.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(CC, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return MC || (MC = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.L_(fC / qC, oC / FC), this._engine.bindFramebuffer(MC, 0, fC, oC, this.forceFullscreenViewport)) : (this._scaleRatio.L_(1, 1), this._engine.bindFramebuffer(MC, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(QC), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : wC.clearColor, wC._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), MC
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
            let CC;
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.mg().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), CC = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", CC?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
          }
          _disposeTextureCache() {
            for (let CC = this._textureCache.length - 1; CC >= 0; CC--) this._textureCache[CC].texture.dispose();
            this._textureCache.length = 0
          }
          setPrePassRenderer(CC) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = CC.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
          }
          dispose(CC) {
            let zC;
            if (CC = CC || this.zV, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (zC = this._parentContainer.postProcesses.indexOf(this), zC > -1 && this._parentContainer.postProcesses.splice(zC, 1), this._parentContainer = null), zC = this._engine.postProcesses.indexOf(this), -1 !== zC && this._engine.postProcesses.splice(zC, 1), this.Tm.notifyObservers(), CC) {
              if (CC.detachPostProcess(this), zC = CC._postProcesses.indexOf(this), 0 === zC && CC._postProcesses.length > 0) {
                const CC = this.zV._getFirstPostProcess();
                CC && CC.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const CC = qC.d.Serialize(this),
              zC = this.getCamera() || this._scene && this._scene.activeCamera;
            return CC.customType = "BABYLON." + this.getClassName(), CC.cameraId = zC ? zC.id : null, CC.reusable = this._reusable, CC.textureType = this._textureType, CC.fragmentUrl = this._fragmentUrl, CC.parameters = this._parameters, CC.samplers = this._samplers, CC.uniformBuffers = this._uniformBuffers, CC.options = this._options, CC.defines = this._postProcessDefines, CC.textureFormat = this._textureFormat, CC.vertexUrl = this._vertexUrl, CC.indexParameters = this._indexParameters, CC
          }
          clone() {
            const zC = this.serialize();
            zC._engine = this._engine, zC.cameraId = null;
            const ZC = CC.Parse(zC, this._scene, "");
            return ZC ? (ZC.onActivateObservable = this.onActivateObservable.clone(), ZC.onSizeChangedObservable = this.onSizeChangedObservable.clone(), ZC.onApplyObservable = this.onApplyObservable.clone(), ZC.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), ZC.onAfterRenderObservable = this.onAfterRenderObservable.clone(), ZC._prePassEffectConfiguration = this._prePassEffectConfiguration, ZC) : null
          }
          static Parse(CC, zC, ZC) {
            const QC = (0, FC.c)(CC.customType);
            if (!QC || !QC._Parse) return null;
            const wC = zC ? zC.getCameraById(CC.cameraId) : null;
            return QC._Parse(CC, wC, zC, ZC)
          }
          static _Parse(zC, ZC, QC, wC) {
            return qC.d.Parse((() => new CC(zC.name, zC.fragmentUrl, zC.parameters, zC.samplers, zC.options, ZC, zC.renderTargetSamplingMode, zC._engine, zC.reusable, zC.defines, zC.textureType, zC.vertexUrl, zC.indexParameters, !1, zC.textureFormat)), zC, QC, wC)
          }
        }, (() => {
          const ZC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zC = [(0, oC.M)()], fC = [(0, oC.M)()], WC = [(0, oC.M)()], gC = [(0, oC.M)()], SC = [(0, oC.M)()], PC = [(0, oC.q)()], GC = [(0, oC.M)()], RC = [(0, oC.M)()], AC = [(0, oC.M)()], xC = [(0, oC.M)()], JC = [(0, oC.M)()], IC = [(0, oC.M)()], iC = [(0, oC.M)()], vC = [(0, oC.M)()], eC = [(0, oC.M)("samples")], hC = [(0, oC.M)()], (0, QC.j)(CC, null, fC, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: CC => "name" in CC,
              get: CC => CC.name
            },
            metadata: ZC
          }, null, KC), (0, QC.j)(CC, null, AC, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: CC => "alphaMode" in CC,
              get: CC => CC.alphaMode
            },
            metadata: ZC
          }, null, KC), (0, QC.j)(null, null, zC, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: CC => "uniqueId" in CC,
              get: CC => CC.uniqueId,
              set: (CC, zC) => {
                CC.uniqueId = zC
              }
            },
            metadata: ZC
          }, YC, dC), (0, QC.j)(null, null, WC, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: CC => "width" in CC,
              get: CC => CC.width,
              set: (CC, zC) => {
                CC.width = zC
              }
            },
            metadata: ZC
          }, mC, HC), (0, QC.j)(null, null, gC, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: CC => "height" in CC,
              get: CC => CC.height,
              set: (CC, zC) => {
                CC.height = zC
              }
            },
            metadata: ZC
          }, EC, lC), (0, QC.j)(null, null, SC, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: CC => "renderTargetSamplingMode" in CC,
              get: CC => CC.renderTargetSamplingMode,
              set: (CC, zC) => {
                CC.renderTargetSamplingMode = zC
              }
            },
            metadata: ZC
          }, XC, cC), (0, QC.j)(null, null, PC, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: CC => "clearColor" in CC,
              get: CC => CC.clearColor,
              set: (CC, zC) => {
                CC.clearColor = zC
              }
            },
            metadata: ZC
          }, uC, rC), (0, QC.j)(null, null, GC, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: CC => "autoClear" in CC,
              get: CC => CC.autoClear,
              set: (CC, zC) => {
                CC.autoClear = zC
              }
            },
            metadata: ZC
          }, sC, TC), (0, QC.j)(null, null, RC, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: CC => "forceAutoClearInAlphaMode" in CC,
              get: CC => CC.forceAutoClearInAlphaMode,
              set: (CC, zC) => {
                CC.forceAutoClearInAlphaMode = zC
              }
            },
            metadata: ZC
          }, aC, tC), (0, QC.j)(null, null, xC, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: CC => "alphaConstants" in CC,
              get: CC => CC.alphaConstants,
              set: (CC, zC) => {
                CC.alphaConstants = zC
              }
            },
            metadata: ZC
          }, DC, jC), (0, QC.j)(null, null, JC, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: CC => "enablePixelPerfectMode" in CC,
              get: CC => CC.enablePixelPerfectMode,
              set: (CC, zC) => {
                CC.enablePixelPerfectMode = zC
              }
            },
            metadata: ZC
          }, yC, LC), (0, QC.j)(null, null, IC, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: CC => "forceFullscreenViewport" in CC,
              get: CC => CC.forceFullscreenViewport,
              set: (CC, zC) => {
                CC.forceFullscreenViewport = zC
              }
            },
            metadata: ZC
          }, UC, BC), (0, QC.j)(null, null, iC, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: CC => "scaleMode" in CC,
              get: CC => CC.scaleMode,
              set: (CC, zC) => {
                CC.scaleMode = zC
              }
            },
            metadata: ZC
          }, OC, kC), (0, QC.j)(null, null, vC, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: CC => "alwaysForcePOT" in CC,
              get: CC => CC.alwaysForcePOT,
              set: (CC, zC) => {
                CC.alwaysForcePOT = zC
              }
            },
            metadata: ZC
          }, VC, Cz), (0, QC.j)(null, null, eC, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: CC => "_samples" in CC,
              get: CC => CC._samples,
              set: (CC, zC) => {
                CC._samples = zC
              }
            },
            metadata: ZC
          }, zz, Zz), (0, QC.j)(null, null, hC, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: CC => "adaptScaleToCurrentViewport" in CC,
              get: CC => CC.adaptScaleToCurrentViewport,
              set: (CC, zC) => {
                CC.adaptScaleToCurrentViewport = zC
              }
            },
            metadata: ZC
          }, Qz, wz), ZC && Object.defineProperty(CC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ZC
          })
        })(), CC
      })(),
      SC = !1;

    function pC() {
      SC || (SC = !0, WC.b.prototype.setTextureFromPostProcess = function(CC, zC, ZC) {
        let QC = null;
        zC && (zC._forcedOutputTexture ? QC = zC._forcedOutputTexture : zC._textures.data[zC._currentRenderTextureInd] && (QC = zC._textures.data[zC._currentRenderTextureInd])), this._bindTexture(CC, QC?.texture ?? null, ZC)
      }, WC.b.prototype.setTextureFromPostProcessOutput = function(CC, zC, ZC) {
        this._bindTexture(CC, zC?._outputTexture?.texture ?? null, ZC)
      }, fC.b.prototype.setTextureFromPostProcess = function(CC, zC) {
        this._engine.setTextureFromPostProcess(this._samplers[CC], zC, CC)
      }, fC.b.prototype.setTextureFromPostProcessOutput = function(CC, zC) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[CC], zC, CC)
      }, (0, FC.d)("BABYLON.PostProcess", gC))
    }
  },
  41640: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => nC,
      g: () => bC
    });
    var QC = ZC(41622),
      wC = ZC(36985);
    class bC extends QC.e {
      _gatherImports(CC, zC) {
        CC ? (this._webGPUReady = !0, zC.push(Promise.all([ZC.e(371).then((() => ZC(61101)))]))) : zC.push(Promise.all([ZC.e(372).then((() => ZC(61109)))])), super._gatherImports(CC, zC)
      }
      constructor(CC) {
        let zC = arguments.length > 2 ? arguments[2] : void 0;
        const ZC = {
          name: CC,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || wC.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: bC.FragmentUrl,
          ...zC
        };
        ZC.engine || (ZC.engine = wC.c.LastCreatedEngine), super(ZC)
      }
    }
    bC.FragmentUrl = "pass";
    class nC extends QC.e {
      _gatherImports(CC, zC) {
        CC ? (this._webGPUReady = !0, zC.push(Promise.all([ZC.e(373).then((() => ZC(61111)))]))) : zC.push(Promise.all([ZC.e(374).then((() => ZC(61118)))])), super._gatherImports(CC, zC)
      }
      constructor(CC) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: CC,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || wC.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: nC.FragmentUrl,
          defines: "#define POSITIVEX"
        }), this._face = 0
      }
      get face() {
        return this._face
      }
      set face(CC) {
        if (!(CC < 0 || CC > 5)) switch (this._face = CC, this._face) {
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
    nC.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);