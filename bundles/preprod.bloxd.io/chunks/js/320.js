export const id = 320;
export const ids = [320];
export const modules = {
  42064: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => VQ
    });
    var wQ = XQ(37399),
      qQ = XQ(37370),
      TQ = XQ(40724),
      zQ = XQ(40406),
      sQ = XQ(40206),
      FQ = XQ(38956),
      PQ = XQ(40400),
      gQ = XQ(40422),
      JQ = XQ(37379),
      rQ = XQ(40164),
      IQ = XQ(40371),
      jQ = XQ(40470);
    class BQ {
      get renderList() {
        return this._renderList
      }
      set renderList(QQ) {
        this._renderList !== QQ && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), QQ && (this._unObserveRenderList = (0, JQ.i)(QQ, this._renderListHasChanged)), this._renderList = QQ)
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
              const WQ = this._renderPassIds[QQ];
              this._engine._renderPassNames[WQ] = `${this._name}#${QQ}`
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
      setMaterialForRendering(QQ, WQ) {
        let XQ;
        XQ = Array.isArray(QQ) ? QQ : [QQ];
        for (let wQ = 0; wQ < XQ.length; ++wQ)
          for (let QQ = 0; QQ < this.options.numPasses; ++QQ) {
            let qQ = XQ[wQ];
            XQ[wQ].pE && (qQ = XQ[wQ].bqQ), qQ.setMaterialForRenderPass(this._renderPassIds[QQ], void 0 !== WQ ? Array.isArray(WQ) ? WQ[QQ] : WQ : void 0)
          }
      }
      _freezeActiveMeshes(QQ) {
        this._freezeActiveMeshesCancel = (0, rQ.e)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, QQ)
            for (let QQ = 0; QQ < this._activeMeshes.length; QQ++) this._activeMeshes.data[QQ]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((QQ, WQ) => {
          this._freezeActiveMeshesCancel = null, WQ ? (FQ.b.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), QQ && FQ.b.Error(QQ)) : (FQ.b.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), QQ && (FQ.b.Error(QQ), QQ.stack && FQ.b.Error(QQ.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let QQ = 0; QQ < this._activeMeshes.length; QQ++) this._activeMeshes.data[QQ]._unFreeze();
        this._isFrozen = !1
      }
      constructor(QQ, WQ, XQ) {
        this._unObserveRenderList = null, this._renderListHasChanged = (QQ, WQ) => {
          const XQ = this._renderList ? this._renderList.length : 0;
          if (0 === WQ && XQ > 0 || 0 === XQ)
            for (const wQ of this._scene.meshes) wQ._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new wQ.b, this.onAfterRenderObservable = new wQ.b, this.onBeforeRenderingManagerRenderObservable = new wQ.b, this.onAfterRenderingManagerRenderObservable = new wQ.b, this.onInitRenderingObservable = new wQ.b, this.onFinishRenderingObservable = new wQ.b, this.onFastPathRenderObservable = new wQ.b, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new IQ.e(256), this._activeBoundingBoxes = new IQ.e(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = QQ, this._scene = WQ, this._engine = this._scene.Uj(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...XQ
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new gQ.e(WQ), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const QQ of this._scene.lights) QQ.getTypeID() === jQ.e.LIGHTTYPEID_CLUSTERED_CONTAINER && QQ.isSupported && QQ._updateBatches(this.activeCamera).render()
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
      _createSceneUBO(QQ, WQ) {
        const XQ = this._scene.Uj(),
          wQ = new PQ.c(XQ, void 0, WQ, QQ, void 0, !1);
        return wQ.addUniform("viewProjection", 16), WQ && wQ.addUniform("viewProjectionR", 16), wQ.addUniform("view", 16), wQ.addUniform("projection", 16), wQ.addUniform("vEyePosition", 4), wQ.addUniform("inverseProjection", 16), wQ
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const QQ = this._engine._currentRenderTarget,
          WQ = !(!QQ || !QQ.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const QQ = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${QQ} for ${this.name}`, WQ)), this._sceneUBOIsMultiview.push(WQ)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== WQ && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, WQ), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = WQ);
        const XQ = this._sceneUBOs[this._currentSceneUBOIndex++];
        return XQ.unbindEffect(), XQ
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
      isReadyForRendering(QQ, WQ) {
        this.prepareRenderList(), this.initRender(QQ, WQ);
        const XQ = this._checkReadiness();
        return this.finishRender(), XQ
      }
      prepareRenderList() {
        const QQ = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let WQ = 0; WQ < this._waitingRenderList.length; WQ++) {
              const XQ = this._waitingRenderList[WQ],
                wQ = QQ.getMeshById(XQ);
              wQ && this.renderList.push(wQ)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const QQ = this._scene.meshes;
          for (let WQ = 0; WQ < QQ.length; WQ++) {
            const XQ = QQ[WQ];
            this.renderListPredicate(XQ) && this.renderList.push(XQ)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(QQ, WQ) {
        const XQ = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), XQ && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(XQ.getViewMatrix(), XQ.getProjectionMatrix(!0)), this._scene._activeCamera = XQ, this._engine.setViewport(XQ.rigParent ? XQ.rigParent.viewport : XQ.viewport, QQ, WQ)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const QQ = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (QQ.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), QQ._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== QQ.activeCamera && QQ.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), QQ.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const XQ = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[QQ], this.onBeforeRenderObservable.notifyObservers(QQ);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(QQ);
        else {
          const WQ = this._prepareRenderingManager(QQ),
            XQ = this._scene.getOutlineRenderer?.(),
            wQ = XQ?.enabled;
          XQ && (XQ.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(QQ), this._renderingManager.render(this.customRenderFunction, WQ, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(QQ), XQ && (XQ.enabled = wQ)
        }
        WQ || this.onAfterRenderObservable.notifyObservers(QQ), this._engine.currentRenderPassId = XQ
      }
      _checkReadiness() {
        const QQ = this._scene,
          WQ = this._engine.currentRenderPassId;
        let XQ = !0;
        QQ.getViewMatrix() || QQ.updateTransformMatrix();
        const wQ = this.options.numPasses;
        for (let qQ = 0; qQ < wQ && XQ; qQ++) {
          const WQ = this.renderList ? this.renderList : QQ.frameGraph ? QQ.meshes : QQ.getActiveMeshes().data,
            TQ = this.renderList || QQ.frameGraph ? WQ.length : QQ.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[qQ], this.onBeforeRenderObservable.notifyObservers(qQ);
          let zQ = null,
            sQ = TQ;
          this.getCustomRenderList && (zQ = this.getCustomRenderList(qQ, WQ, TQ), zQ && (sQ = zQ.length)), zQ || (zQ = WQ), this.options.doNotChangeAspectRatio || QQ.updateTransformMatrix(!0);
          for (let QQ = 0; QQ < sQ && XQ; ++QQ) {
            const WQ = zQ[QQ];
            if (!WQ.isEnabled() || WQ.isBlocked || !WQ.isVisible || !WQ.ZD) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(WQ, this.refreshRate, !0)) {
                XQ = !1;
                continue
              }
            } else if (!WQ.isReady(!0)) {
              XQ = !1;
              continue
            }
            let wQ = WQ._edgesRenderer,
              qQ = WQ.hasThinInstances;
            if (WQ.pE) {
              const QQ = WQ.bqQ;
              QQ.edgesShareWithInstances && QQ._edgesRenderer?.isEnabled && (wQ = QQ._edgesRenderer, qQ = !0)
            } else WQ.UqQ && WQ.edgesShareWithInstances && (qQ = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && wQ?.isEnabled && (wQ.isReady(qQ) || (XQ = !1))
          }
          if (this.renderParticles && QQ.particlesEnabled) {
            const WQ = this.particleSystemList || QQ.KD;
            for (const QQ of WQ) QQ.isReady() || (XQ = !1)
          }
          if (this.renderSprites && QQ.spritesEnabled) {
            const WQ = this.spriteManagerList || QQ.spriteManagers;
            if (WQ)
              for (const wQ of WQ) QQ.activeCamera && 0 === (wQ.layerMask & QQ.activeCamera.layerMask) || wQ.isReady && !wQ.isReady() && (XQ = !1)
          }
          this.onAfterRenderObservable.notifyObservers(qQ), wQ > 1 && (QQ.incrementRenderId(), QQ.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = WQ, XQ
      }
      _prepareRenderingManager() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const XQ = this._scene;
        let wQ, qQ, TQ = null;
        const zQ = this.renderList ? this.renderList : XQ.frameGraph ? XQ.meshes : XQ.getActiveMeshes().data,
          sQ = this.renderList || XQ.frameGraph ? zQ.length : XQ.getActiveMeshes().length;
        if (this.getCustomRenderList && (TQ = this.getCustomRenderList(QQ, zQ, sQ)), TQ) wQ = TQ.length, qQ = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !WQ && !this._engine.isWebGPU) return zQ;
          this._defaultRenderListPrepared = !0, TQ = zQ, wQ = sQ, qQ = !this.renderList || this.forceLayerMaskCheck
        }
        const FQ = XQ.activeCamera,
          PQ = this.cameraForLOD ?? FQ,
          gQ = XQ.getBoundingBoxRenderer?.();
        if (XQ._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && gQ) {
            gQ.reset();
            for (let QQ = 0; QQ < this._activeBoundingBoxes.length; QQ++) {
              const WQ = this._activeBoundingBoxes.data[QQ];
              gQ.renderList.push(WQ)
            }
          }
          return TQ
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), gQ && gQ.reset(), this.renderMeshes) {
          const QQ = XQ.getRenderId(),
            WQ = XQ.getFrameId();
          for (let zQ = 0; zQ < wQ; zQ++) {
            const wQ = TQ[zQ];
            if (wQ && !wQ.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(wQ, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!wQ.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let TQ, zQ;
              if (PQ) {
                const QQ = wQ._internalAbstractMeshDataInfo._currentLOD.get(PQ);
                QQ && QQ[1] === WQ ? TQ = QQ[0] : (TQ = XQ.customLODSelector ? XQ.customLODSelector(wQ, PQ) : wQ.getLOD(PQ), QQ ? (QQ[0] = TQ, QQ[1] = WQ) : wQ._internalAbstractMeshDataInfo._currentLOD.set(PQ, [TQ, WQ]))
              } else TQ = wQ;
              if (!TQ) continue;
              if (TQ !== wQ && 0 !== TQ.billboardMode && TQ.computeWorldMatrix(), TQ._preActivateForIntermediateRendering(QQ), zQ = !(!qQ || !FQ) && 0 === (wQ.layerMask & FQ.layerMask), wQ.isEnabled() && wQ.isVisible && wQ.ZD && !zQ) {
                if (this._activeMeshes.push(wQ), TQ._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, TQ !== wQ && TQ._activate(QQ, !0), this.enableBoundingBoxRendering && gQ && gQ._preActiveMesh(wQ), wQ._activate(QQ, !0) && wQ.ZD.length) {
                  wQ.pE ? wQ._internalAbstractMeshDataInfo._actAsRegularMesh && (TQ = wQ) : TQ._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, TQ._internalAbstractMeshDataInfo._isActiveIntermediate = !0, XQ._prepareSkeleton(TQ);
                  for (let QQ = 0; QQ < TQ.ZD.length; QQ++) {
                    const WQ = TQ.ZD[QQ];
                    this.enableBoundingBoxRendering && gQ && gQ._evaluateSubMesh(wQ, WQ), this._renderingManager.dispatch(WQ, TQ)
                  }
                }
                wQ._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && gQ && WQ)
          for (let JQ = 0; JQ < gQ.renderList.length; JQ++) {
            const QQ = gQ.renderList.data[JQ];
            this._activeBoundingBoxes.push(QQ)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const QQ = this.particleSystemList || XQ.KD;
          for (let WQ = 0; WQ < QQ.length; WQ++) {
            const XQ = QQ[WQ],
              wQ = XQ.emitter;
            XQ.isStarted() && wQ && (!wQ.position || wQ.isEnabled()) && this._renderingManager.dispatchParticles(XQ)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return TQ
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(QQ, WQ, XQ, wQ)
      }
      setRenderingAutoClearDepthStencil(QQ, WQ) {
        let XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          wQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(QQ, WQ, XQ, wQ), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const QQ = new BQ(this.name, this._scene, this.options);
        return this.renderList && (QQ.renderList = this.renderList.slice(0)), QQ
      }
      dispose() {
        const QQ = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          WQ = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let XQ = 0; XQ < WQ; XQ++) {
          const WQ = QQ[XQ];
          WQ && void 0 !== WQ.getMaterialForRenderPass(this.renderPassId) && WQ.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const XQ of this._sceneUBOs) XQ.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === BQ.REFRESHRATE_RENDER_ONCE && (this.refreshRate = BQ.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    BQ.REFRESHRATE_RENDER_ONCE = 0, BQ.REFRESHRATE_RENDER_ONEVERYFRAME = 1, BQ.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var yQ = XQ(40153);
    class VQ extends TQ.g {
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
      setMaterialForRendering(QQ, WQ) {
        this._objectRenderer.setMaterialForRendering(QQ, WQ)
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
        const WQ = this.sE();
        WQ && WQ.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(QQ, WQ, XQ) {
        let zQ, sQ, PQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          gQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          JQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          rQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          IQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : TQ.g.TRILINEAR_SAMPLINGMODE,
          jQ = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          yQ = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          VQ = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          DQ = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          pQ = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          GQ = arguments.length > 13 ? arguments[13] : void 0,
          UQ = arguments.length > 14 ? arguments[14] : void 0,
          bQ = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          vQ = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          dQ = !0,
          HQ = !1;
        if ("object" === typeof PQ) {
          const QQ = PQ;
          PQ = !!QQ.generateMipMaps, gQ = QQ.doNotChangeAspectRatio ?? !0, JQ = QQ.type ?? 0, rQ = !!QQ.isCube, IQ = QQ.samplingMode ?? TQ.g.TRILINEAR_SAMPLINGMODE, jQ = QQ.generateDepthBuffer ?? !0, yQ = !!QQ.generateStencilBuffer, VQ = !!QQ.isMulti, DQ = QQ.format ?? 5, pQ = !!QQ.delayAllocation, GQ = QQ.samples, UQ = QQ.creationFlags, bQ = !!QQ.noColorAttachment, vQ = !!QQ.useSRGBBuffer, zQ = QQ.colorAttachment, dQ = QQ.gammaSpace ?? dQ, sQ = QQ.existingObjectRenderer, HQ = !!QQ.enableClusteredLights
        }
        if (super(null, XQ, !PQ, void 0, IQ, void 0, void 0, void 0, void 0, DQ), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new wQ.b, this.onAfterUnbindObservable = new wQ.b, this.onClearObservable = new wQ.b, this.onResizeObservable = new wQ.b, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = qQ.s.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(XQ = this.sE())) return;
        const aQ = this.sE().Uj();
        this._gammaSpace = dQ, this._coordinatesMode = TQ.g.PROJECTION_MODE, this.name = QQ, this.isRenderTarget = !0, this._initialSizeParameter = WQ, this._dontDisposeObjectRenderer = !!sQ, this._processSizeParameter(WQ), this._objectRenderer = sQ ?? new BQ(QQ, XQ, {
          numPasses: rQ ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: gQ,
          enableClusteredLights: HQ
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const QQ = this._scene;
          if (!this._disableEngineStages)
            for (const WQ of QQ._beforeRenderTargetClearStage) WQ.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(aQ) : this.skipInitialClear || aQ.clear(this.clearColor ?? QQ.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || QQ.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const WQ of QQ._beforeRenderTargetDrawStage) WQ.action(this, this._currentFaceIndex, this._currentLayer);
          aQ._debugPushGroup && aQ._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (aQ._debugPopGroup && aQ._debugPopGroup(), !this._disableEngineStages)
            for (const WQ of this._scene._afterRenderTargetDrawStage) WQ.action(this, this._currentFaceIndex, this._currentLayer);
          const QQ = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const WQ of this._scene._afterRenderTargetPostProcessStage) WQ.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = QQ), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), aQ) : FQ.b.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(aQ) : this.skipInitialClear || aQ.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = aQ.onResizeObservable.add((() => {})), this._generateMipMaps = !!PQ, this._doNotChangeAspectRatio = gQ, VQ || (this._renderTargetOptions = {
          generateMipMaps: PQ,
          type: JQ,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: jQ,
          generateStencilBuffer: yQ,
          samples: GQ,
          creationFlags: UQ,
          noColorAttachment: bQ,
          useSRGBBuffer: vQ,
          colorAttachment: zQ,
          label: this.name
        }, this.samplingMode === TQ.g.NEAREST_SAMPLINGMODE && (this.wrapU = TQ.g.CLAMP_ADDRESSMODE, this.wrapV = TQ.g.CLAMP_ADDRESSMODE), pQ || (rQ ? (this._renderTarget = XQ.Uj().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = TQ.g.INVCUBIC_MODE, this._textureMatrix = qQ.e.Identity()) : this._renderTarget = XQ.Uj().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== GQ && (this.samples = GQ)))
      }
      createDepthStencilTexture() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          TQ = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(QQ, WQ, XQ, wQ, qQ, TQ)
      }
      _processSizeParameter(QQ) {
        if (QQ.ratio) {
          this._sizeRatio = QQ.ratio;
          const WQ = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(WQ.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(WQ.getRenderHeight(), this._sizeRatio)
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
          const QQ = this.sE();
          if (!QQ) return;
          this._postProcessManager = new zQ.d(QQ), this._postProcesses = new Array
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
        const WQ = this._postProcesses.indexOf(QQ); - 1 !== WQ && (this._postProcesses.splice(WQ, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
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
        const WQ = this._size.depth;
        return WQ || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(QQ) {
        const WQ = Math.max(1, this.getRenderSize() * QQ);
        this.resize(WQ)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(QQ) {
        const WQ = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const XQ = this.sE();
        XQ && (this._processSizeParameter(QQ), this._renderTarget = WQ ? XQ.Uj().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : XQ.Uj().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(QQ, WQ)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => XQ(42076))).then((QQ => this._dumpTools = QQ))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const QQ = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), QQ
      }
      _render() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const XQ = this.sE();
        if (!XQ) return;
        void 0 !== this.useCameraPostProcesses && (QQ = this.useCameraPostProcesses);
        const wQ = XQ.Uj();
        if (wQ._debugPushGroup && wQ._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let qQ = 0; qQ < 6; qQ++) this._renderToTarget(qQ, QQ, WQ), XQ.incrementRenderId(), XQ.resetCachedMaterial();
          else this._renderToTarget(0, QQ, WQ);
        else
          for (let qQ = 0; qQ < this.getRenderLayers(); qQ++) this._renderToTarget(0, QQ, WQ, qQ), XQ.incrementRenderId(), XQ.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), wQ._debugPopGroup && wQ._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(QQ, WQ) {
        const XQ = QQ * WQ,
          wQ = (0, sQ.q)(XQ + 16384 / (128 + XQ));
        return Math.min((0, sQ.d)(QQ), wQ)
      }
      _bindFrameBuffer() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const XQ = this.sE();
        if (!XQ) return;
        const wQ = XQ.Uj();
        this._renderTarget && wQ.bindFramebuffer(this._renderTarget, this.isCube ? QQ : void 0, void 0, void 0, this.ignoreCameraViewport, 0, WQ)
      }
      _unbindFrameBuffer(QQ, WQ) {
        this._renderTarget && QQ.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(WQ)
        }))
      }
      _prepareFrame(QQ, WQ, XQ, wQ) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(WQ, XQ) : wQ && QQ.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(WQ, XQ)
      }
      _renderToTarget(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const qQ = this.sE();
        if (!qQ) return;
        const TQ = qQ.Uj();
        this._currentFaceIndex = QQ, this._currentLayer = wQ, this._currentUseCameraPostProcess = WQ, this._currentDumpForDebug = XQ, this._prepareFrame(qQ, QQ, wQ, WQ), this._objectRenderer.render(QQ + wQ, !0), this._unbindFrameBuffer(TQ, QQ), this._texture && this.isCube && 5 === QQ && TQ.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(QQ, WQ, XQ, wQ)
      }
      setRenderingAutoClearDepthStencil(QQ, WQ) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(QQ, WQ)
      }
      clone() {
        const QQ = this.getSize(),
          WQ = new VQ(this.name, QQ, this.sE(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return WQ.hasAlpha = this.hasAlpha, WQ.level = this.level, WQ.coordinatesMode = this.coordinatesMode, this.renderList && (WQ.renderList = this.renderList.slice(0)), WQ
      }
      serialize() {
        if (!this.name) return null;
        const QQ = super.serialize();
        if (QQ.renderTargetSize = this.getRenderSize(), QQ.renderList = [], this.renderList)
          for (let WQ = 0; WQ < this.renderList.length; WQ++) QQ.renderList.push(this.renderList[WQ].id);
        return QQ
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.sE().Uj().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const QQ = this.sE();
        if (!QQ) return;
        let WQ = QQ.customRenderTargets.indexOf(this);
        WQ >= 0 && QQ.customRenderTargets.splice(WQ, 1);
        for (const XQ of QQ.cameras) WQ = XQ.customRenderTargets.indexOf(this), WQ >= 0 && XQ.customRenderTargets.splice(WQ, 1);
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
    VQ.REFRESHRATE_RENDER_ONCE = BQ.REFRESHRATE_RENDER_ONCE, VQ.REFRESHRATE_RENDER_ONEVERYFRAME = BQ.REFRESHRATE_RENDER_ONEVERYFRAME, VQ.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = BQ.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(VQ.prototype, "noPrePassRenderer") || Object.defineProperty(VQ.prototype, "noPrePassRenderer", (0, yQ.g)("RenderTargetTexture", "noPrePassRenderer"))
  },
  42050: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => PQ,
      i: () => gQ
    });
    var wQ = XQ(40404),
      qQ = XQ(38377),
      TQ = XQ(37399),
      zQ = XQ(40122),
      sQ = XQ(40578);
    const FQ = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class PQ {
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FQ;
        this._fullscreenViewport = new qQ.e(0, 0, 1, 1);
        const XQ = WQ.positions ?? FQ.positions,
          TQ = WQ.indices ?? FQ.indices;
        this.engine = QQ, this._vertexBuffers = {
          [wQ.l.PositionKind]: new wQ.l(QQ, XQ, wQ.l.PositionKind, !1, !1, 2)
        }, this._indexBuffer = QQ.createIndexBuffer(TQ), this._indexBufferLength = TQ.length, this._onContextRestoredObserver = QQ.Gj.add((() => {
          this._indexBuffer = QQ.createIndexBuffer(TQ);
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
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = WQ, this.engine.stencilState.stencilTest = XQ, this.engine.enableEffect(QQ.drawWrapper), this.bindBuffers(QQ.effect), QQ.onApplyObservable.notifyObservers({})
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
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!QQ.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const XQ = null === WQ ? null : this._isRenderTargetTexture(WQ) ? WQ.renderTarget : WQ;
        XQ && this.engine.bindFramebuffer(XQ), this.applyEffectWrapper(QQ), this.draw(), XQ && this.engine.unBindFramebuffer(XQ), this.restoreStates()
      }
      dispose() {
        const QQ = this._vertexBuffers[wQ.l.PositionKind];
        QQ && (QQ.dispose(), delete this._vertexBuffers[wQ.l.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.Gj.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class gQ {
      static RegisterShaderCodeProcessing(QQ, WQ) {
        WQ ? gQ._CustomShaderCodeProcessing[QQ ?? ""] = WQ : delete gQ._CustomShaderCodeProcessing[QQ ?? ""]
      }
      static _GetShaderCodeProcessing(QQ) {
        return gQ._CustomShaderCodeProcessing[QQ] ?? gQ._CustomShaderCodeProcessing[""]
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
        this.alphaMode = 0, this.onEffectCreatedObservable = new TQ.b(void 0, !0), this.onApplyObservable = new TQ.b, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
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
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.Gj.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new sQ.d(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const WQ = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, WQ, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wQ = arguments.length > 2 ? arguments[2] : void 0,
          qQ = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, qQ && this._importPromises.push(...qQ);
        const TQ = this.options.engine.isWebGPU && !gQ.ForceGLSL;
        this._gatherImports(TQ, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(TQ && this._webGPUReady ? XQ.e(372).then((() => XQ(61666))) : XQ.e(362).then((() => XQ(61542)))), void 0 !== wQ && wQ(TQ, this._importPromises), TQ && this._webGPUReady && (this.options.shaderLanguage = 1), QQ || this.updateEffect(WQ)
      }
      updateEffect() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          wQ = arguments.length > 3 ? arguments[3] : void 0,
          qQ = arguments.length > 4 ? arguments[4] : void 0,
          TQ = arguments.length > 5 ? arguments[5] : void 0,
          sQ = arguments.length > 6 ? arguments[6] : void 0,
          FQ = arguments.length > 7 ? arguments[7] : void 0;
        const PQ = gQ._GetShaderCodeProcessing(this.name);
        if (PQ?.defineCustomBindings) {
          const wQ = WQ?.slice() ?? [];
          wQ.push(...this.options.uniforms);
          const qQ = XQ?.slice() ?? [];
          qQ.push(...this.options.samplers), QQ = PQ.defineCustomBindings(this.name, QQ, wQ, qQ), WQ = wQ, XQ = qQ
        }
        this.options.defines = QQ || "";
        const JQ = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let rQ;
        rQ = this.options.extraInitializationsAsync ? async () => {
          await (JQ?.()), await this.options.extraInitializationsAsync()
        }: JQ, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: sQ ?? this._shaderPath.vertex,
          fragment: FQ ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: WQ || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: XQ || this.options.samplers,
          defines: null !== QQ ? QQ : "",
          fallbacks: null,
          onCompiled: qQ ?? this.options.onCompiled,
          onError: TQ ?? null,
          indexParameters: wQ || this.options.indexParameters,
          processCodeAfterIncludes: PQ?.processCodeAfterIncludes ? (QQ, WQ) => PQ.processCodeAfterIncludes(this.name, QQ, WQ) : null,
          processFinalCode: PQ?.processFinalCode ? (QQ, WQ) => PQ.processFinalCode(this.name, QQ, WQ) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: rQ
        }, this.options.engine) : this._drawWrapper.effect = new zQ.c(this._shaderPath, this.options.attributeNames, WQ || this.options.uniforms, XQ || this.options.samplerNames, this.options.engine, QQ, void 0, qQ || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, rQ), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !QQ && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), gQ._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.Uj().Gj.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    gQ.ForceGLSL = !1, gQ._CustomShaderCodeProcessing = {}
  },
  42076: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      Dispose: () => DQ,
      DumpData: () => VQ,
      DumpDataAsync: () => yQ,
      DumpFramebuffer: () => BQ,
      DumpTools: () => pQ,
      EncodeImageAsync: () => jQ,
      RegisterDumpTools: () => UQ
    });
    var wQ = XQ(40260),
      qQ = XQ(42050),
      TQ = XQ(40357),
      zQ = XQ(37404),
      sQ = XQ(37392),
      FQ = XQ(38956),
      PQ = XQ(40327),
      gQ = XQ(40268);
    let JQ = null;
    async function rQ() {
      return JQ || (JQ = async function() {
        const QQ = sQ.d.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        QQ instanceof OffscreenCanvas && FQ.b.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: WQ
        } = await Promise.resolve().then((() => XQ(40117)));
        if (!WQ.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const wQ = new WQ(QQ, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        sQ.d.Instances.pop(), sQ.d.OnEnginesDisposedObservable.add((QQ => {
          wQ && QQ !== wQ && !wQ.rG && 0 === sQ.d.Instances.length && DQ()
        })), wQ.getCaps().parallelShaderCompile = void 0;
        const TQ = new qQ.e(wQ),
          {
            passPixelShader: zQ
          } = await XQ.e(380).then((() => XQ(61717))),
          PQ = new qQ.i({
            engine: wQ,
            name: zQ.name,
            fragmentShader: zQ.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: QQ,
          dumpEngine: {
            engine: wQ,
            renderer: TQ,
            wrapper: PQ
          }
        }
      }()), await JQ
    }
    let IQ = (() => {
      var QQ;
      let WQ, XQ = [];
      return QQ = class {
        static async EncodeImageAsync(QQ, WQ, XQ, wQ, qQ, zQ) {
          const sQ = await rQ(),
            FQ = sQ.dumpEngine;
          FQ.engine.setSize(WQ, XQ, !0);
          const PQ = FQ.engine.createRawTexture(QQ, WQ, XQ, 5, !1, !qQ, 1);
          return FQ.renderer.setViewport(), FQ.renderer.applyEffectWrapper(FQ.wrapper), FQ.wrapper.effect._bindTexture("textureSampler", PQ), FQ.renderer.draw(), PQ.dispose(), await new Promise(((QQ, WQ) => {
            TQ.g.ToBlob(sQ.canvas, (XQ => {
              XQ ? QQ(XQ) : WQ(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), wQ, zQ)
          }))
        }
      }, (() => {
        const qQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        WQ = [gQ.g], (0, wQ.k)(QQ, null, WQ, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: QQ => "EncodeImageAsync" in QQ,
            get: QQ => QQ.EncodeImageAsync
          },
          metadata: qQ
        }, null, XQ), qQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: qQ
        }), (0, wQ.n)(QQ, XQ)
      })(), QQ
    })();
    const jQ = IQ.EncodeImageAsync;
    async function BQ(QQ, WQ, XQ, wQ) {
      let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        TQ = arguments.length > 5 ? arguments[5] : void 0,
        zQ = arguments.length > 6 ? arguments[6] : void 0;
      const sQ = await XQ.readPixels(0, 0, QQ, WQ);
      VQ(QQ, WQ, new Uint8Array(sQ.buffer), wQ, qQ, TQ, !0, void 0, zQ)
    }
    async function yQ(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        qQ = arguments.length > 4 ? arguments[4] : void 0,
        sQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        gQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        JQ = arguments.length > 7 ? arguments[7] : void 0;
      if (XQ instanceof Float32Array) {
        const QQ = new Uint8Array(XQ.length);
        let WQ = XQ.length;
        for (; WQ--;) {
          const wQ = XQ[WQ];
          QQ[WQ] = Math.round(255 * (0, zQ.Clamp)(wQ))
        }
        XQ = QQ
      }
      const rQ = await IQ.EncodeImageAsync(XQ, QQ, WQ, wQ, sQ, JQ);
      void 0 !== qQ && TQ.g.DownloadBlob(rQ, qQ), rQ.type !== wQ && FQ.b.Warn(`DumpData: The requested mimeType '${wQ}' is not supported. The result has mimeType '${rQ.type}' instead.`);
      const jQ = await rQ.arrayBuffer();
      return gQ ? jQ : `data:${wQ};base64,${(0,PQ.d)(jQ)}`
    }

    function VQ(QQ, WQ, XQ, wQ) {
      let qQ = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== qQ || wQ || (qQ = ""), yQ(QQ, WQ, XQ, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", qQ, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((QQ => {
        wQ && wQ(QQ)
      }))
    }

    function DQ() {
      JQ && (JQ?.then((QQ => {
        QQ.canvas instanceof HTMLCanvasElement && QQ.canvas.remove(), QQ.dumpEngine && (QQ.dumpEngine.engine.dispose(), QQ.dumpEngine.renderer.dispose(), QQ.dumpEngine.wrapper.dispose())
      })), JQ = null)
    }
    const pQ = {
      DumpData: VQ,
      DumpDataAsync: yQ,
      DumpFramebuffer: BQ,
      Dispose: DQ
    };
    let GQ = !1;

    function UQ() {
      if (GQ) return;
      GQ = !0;
      TQ.g.DumpData = VQ, TQ.g.DumpDataAsync = yQ, TQ.g.DumpFramebuffer = BQ
    }
  },
  42062: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => IQ,
      d: () => jQ,
      f: () => BQ
    });
    var wQ = XQ(40724),
      qQ = XQ(42064),
      TQ = XQ(40260),
      zQ = XQ(42041),
      sQ = XQ(40286),
      FQ = XQ(42070),
      PQ = XQ(40268);
    class gQ extends zQ.b {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(QQ, WQ) {
        let XQ = arguments.length > 4 ? arguments[4] : void 0;
        const wQ = {
          size: "number" === typeof WQ ? WQ : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: XQ,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...WQ
        };
        super(QQ, FQ.g.FragmentUrl, {
          effectWrapper: "number" !== typeof WQ && WQ.effectWrapper ? void 0 : new FQ.g(QQ, XQ, wQ),
          ...wQ
        })
      }
      static _Parse(QQ, WQ, XQ, wQ) {
        return sQ.b.Parse((() => new gQ(QQ.name, QQ.options, WQ, QQ.renderTargetSamplingMode, QQ._engine, QQ.reusable)), QQ, XQ, wQ)
      }
    }(() => {
      var QQ;
      let WQ, XQ = zQ.b,
        wQ = [];
      QQ = class extends XQ {
        get face() {
          return this._effectWrapper.face
        }
        set face(QQ) {
          this._effectWrapper.face = QQ
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(QQ, WQ) {
          let XQ = arguments.length > 4 ? arguments[4] : void 0;
          const qQ = {
            size: "number" === typeof WQ ? WQ : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: XQ,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...WQ
          };
          super(QQ, FQ.g.FragmentUrl, {
            effectWrapper: "number" !== typeof WQ && WQ.effectWrapper ? void 0 : new FQ.e(QQ, XQ, qQ),
            ...qQ
          }), (0, TQ.n)(this, wQ)
        }
        static _Parse(WQ, XQ, wQ, qQ) {
          return sQ.b.Parse((() => new QQ(WQ.name, WQ.options, XQ, WQ.renderTargetSamplingMode, WQ._engine, WQ.reusable)), WQ, wQ, qQ)
        }
      }, (() => {
        const qQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(XQ[Symbol.metadata] ?? null) : void 0;
        WQ = [(0, PQ.I)()], (0, TQ.k)(QQ, null, WQ, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: QQ => "face" in QQ,
            get: QQ => QQ.face
          },
          metadata: qQ
        }, null, wQ), qQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: qQ
        })
      })()
    })();
    var JQ = XQ(37404),
      rQ = XQ(40337);

    function IQ(QQ, WQ, XQ, wQ, qQ, TQ, sQ, FQ) {
      const PQ = WQ.Uj();
      return WQ.isReady = !1, qQ = qQ ?? WQ.samplingMode, wQ = wQ ?? WQ.type, TQ = TQ ?? WQ.format, sQ = sQ ?? WQ.width, FQ = FQ ?? WQ.height, -1 === wQ && (wQ = 0), new Promise((gQ => {
        const JQ = new zQ.b("postprocess", QQ, null, null, 1, null, qQ, PQ, !1, void 0, wQ, void 0, null, !1, TQ);
        JQ.externalTextureSamplerBinding = !0;
        const rQ = PQ.createRenderTargetTexture({
          width: sQ,
          height: FQ
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: qQ,
          type: wQ,
          format: TQ
        });
        JQ.onEffectCreatedObservable.addOnce((QQ => {
          QQ.executeWhenCompiled((() => {
            JQ.onApply = QQ => {
              QQ._bindTexture("textureSampler", WQ), QQ.setFloat2("scale", 1, 1)
            }, XQ.postProcessManager.directRender([JQ], rQ, !0), PQ.restoreDefaultFramebuffer(), PQ._releaseTexture(WQ), JQ && JQ.dispose(), rQ._swapAndDie(WQ), WQ.type = wQ, WQ.format = 5, WQ.isReady = !0, gQ(WQ)
          }))
        }))
      }))
    }
    async function jQ(QQ, WQ, TQ) {
      let sQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        FQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        PQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        gQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(QQ) {
        if (QQ.isReady()) return;
        if (QQ.loadingError) throw new Error(QQ.errorObject?.message || `Texture ${QQ.name} errored while loading.`);
        const WQ = QQ.onLoadObservable;
        if (WQ) return await new Promise((QQ => WQ.addOnce((() => QQ()))));
        const XQ = QQ._texture?.onLoadedObservable;
        if (XQ) return await new Promise((QQ => XQ.addOnce((() => QQ()))));
        throw new Error(`Cannot determine readiness of texture ${QQ.name}.`)
      }(QQ);
      const rQ = QQ.getInternalTexture(),
        IQ = QQ.is3D || !!rQ?.is3D,
        {
          width: jQ,
          height: BQ
        } = QQ.getSize(),
        yQ = WQ ?? jQ,
        VQ = TQ ?? BQ;
      if (PQ || IQ || function(QQ) {
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
        }(QQ.textureFormat) || yQ !== jQ || VQ !== BQ) {
        if (QQ.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${PQ?"RTT":"compression"} is not supported.`);
        return await async function(QQ, WQ, TQ, sQ, FQ) {
          let PQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const gQ = QQ.sE(),
            JQ = gQ.Uj(),
            rQ = QQ.getInternalTexture(),
            IQ = QQ.is3D || !!rQ?.is3D;
          let jQ;
          if (JQ.isWebGPU ? IQ ? await XQ.e(376).then((() => XQ(61705))) : QQ.isCube ? await XQ.e(377).then((() => XQ(61707))) : await XQ.e(378).then((() => XQ(61710))) : IQ ? await XQ.e(373).then((() => XQ(61680))) : QQ.isCube ? await XQ.e(374).then((() => XQ(61689))) : await XQ.e(375).then((() => XQ(61698))), IQ) jQ = new zQ.b("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: wQ.g.NEAREST_NEAREST_MIPNEAREST,
            engine: JQ,
            shaderLanguage: JQ.isWebGPU ? 1 : 0
          });
          else if (QQ.isCube) {
            const QQ = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            jQ = new zQ.b("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: wQ.g.NEAREST_NEAREST_MIPNEAREST,
              engine: JQ,
              defines: QQ[sQ],
              shaderLanguage: JQ.isWebGPU ? 1 : 0
            })
          } else jQ = new zQ.b("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: wQ.g.NEAREST_NEAREST_MIPNEAREST,
            engine: JQ,
            shaderLanguage: JQ.isWebGPU ? 1 : 0
          });
          await new Promise((QQ => {
            jQ.onEffectCreatedObservable.addOnce((WQ => {
              WQ.executeWhenCompiled((() => {
                QQ(0)
              }))
            }))
          }));
          const BQ = new qQ.c("temp", {
            width: WQ,
            height: TQ
          }, gQ, !1);
          jQ.onApply = function(WQ) {
            WQ.setTexture("textureSampler", QQ), WQ.setFloat("lod", FQ), WQ.setInt("gamma", QQ.gammaSpace ? 1 : 0), IQ && WQ.setFloat("slice", PQ)
          };
          try {
            if (BQ.renderTarget && rQ) {
              const XQ = rQ.samplingMode;
              0 !== FQ ? QQ.updateSamplingMode(wQ.g.NEAREST_NEAREST_MIPNEAREST) : QQ.updateSamplingMode(wQ.g.NEAREST_NEAREST), gQ.postProcessManager.directRender([jQ], BQ.renderTarget, !0), QQ.updateSamplingMode(XQ);
              const qQ = await JQ.readPixels(0, 0, WQ, TQ),
                zQ = new Uint8Array(qQ.buffer, qQ.byteOffset, qQ.byteLength);
              return JQ.unBindFramebuffer(BQ.renderTarget), zQ
            }
            throw Error("Render to texture failed.")
          } finally {
            BQ.dispose(), jQ.dispose()
          }
        }(QQ, yQ, VQ, sQ, FQ, gQ)
      }
      let DQ = await QQ.readPixels(sQ, FQ);
      if (!DQ) throw new Error(`Failed to read pixels from texture ${QQ.name}.`);
      if (DQ instanceof Float32Array) {
        const QQ = new Uint8Array(DQ.length);
        let WQ = DQ.length;
        for (; WQ--;) {
          const XQ = DQ[WQ];
          QQ[WQ] = Math.round(255 * (0, JQ.Clamp)(XQ))
        }
        DQ = QQ
      }
      const pQ = yQ * VQ,
        GQ = 4 * pQ;
      if (DQ.length !== GQ) {
        const QQ = 0 === pQ ? 0 : DQ.length / pQ;
        if (1 === QQ || 2 === QQ || 3 === QQ) {
          const WQ = new Uint8Array(GQ);
          for (let XQ = 0, wQ = 0, qQ = 0; XQ < pQ; XQ++, qQ += 4) {
            const XQ = DQ[wQ++];
            if (1 === QQ) {
              WQ[qQ] = XQ, WQ[qQ + 1] = XQ, WQ[qQ + 2] = XQ, WQ[qQ + 3] = 255;
              continue
            }
            const TQ = DQ[wQ++];
            2 !== QQ ? (WQ[qQ] = XQ, WQ[qQ + 1] = TQ, WQ[qQ + 2] = DQ[wQ++], WQ[qQ + 3] = 255) : (WQ[qQ] = XQ, WQ[qQ + 1] = TQ, WQ[qQ + 2] = 0, WQ[qQ + 3] = 255)
          }
          return WQ
        }
      }
      return DQ
    }
    const BQ = {
      CreateResizedCopy: function(QQ, WQ, XQ) {
        let TQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const zQ = QQ.sE(),
          sQ = zQ.Uj(),
          FQ = new qQ.c("resized" + QQ.name, {
            width: WQ,
            height: XQ
          }, zQ, !QQ.noMipmap, !0, QQ._texture.type, !1, QQ.samplingMode, !1);
        FQ.wrapU = QQ.wrapU, FQ.wrapV = QQ.wrapV, FQ.uOffset = QQ.uOffset, FQ.vOffset = QQ.vOffset, FQ.uScale = QQ.uScale, FQ.vScale = QQ.vScale, FQ.uAng = QQ.uAng, FQ.vAng = QQ.vAng, FQ.wAng = QQ.wAng, FQ.coordinatesIndex = QQ.coordinatesIndex, FQ.level = QQ.level, FQ.anisotropicFilteringLevel = QQ.anisotropicFilteringLevel, FQ._texture.isReady = !1, QQ.wrapU = wQ.g.CLAMP_ADDRESSMODE, QQ.wrapV = wQ.g.CLAMP_ADDRESSMODE;
        const PQ = new gQ("pass", 1, null, TQ ? wQ.g.BILINEAR_SAMPLINGMODE : wQ.g.NEAREST_SAMPLINGMODE, sQ, !1, 0);
        return PQ.externalTextureSamplerBinding = !0, PQ.onEffectCreatedObservable.addOnce((WQ => {
          WQ.executeWhenCompiled((() => {
            PQ.onApply = function(WQ) {
              WQ.setTexture("textureSampler", QQ)
            };
            const WQ = FQ.renderTarget;
            WQ && (zQ.postProcessManager.directRender([PQ], WQ), sQ.unBindFramebuffer(WQ), FQ.disposeFramebufferObjects(), PQ.dispose(), FQ.getInternalTexture().isReady = !0)
          }))
        })), FQ
      },
      ApplyPostProcess: IQ,
      ToHalfFloat: rQ.i,
      FromHalfFloat: rQ.d,
      GetTextureDataAsync: jQ
    }
  },
  42041: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => jQ
    });
    var wQ = XQ(40260),
      qQ = XQ(40371),
      TQ = XQ(37399),
      zQ = XQ(37370),
      sQ = XQ(40122),
      FQ = XQ(40268),
      PQ = XQ(40286),
      gQ = XQ(37418),
      JQ = XQ(40170),
      rQ = XQ(40206),
      IQ = XQ(42050);
    let jQ = (() => {
        var QQ;
        let WQ, sQ, JQ, jQ, BQ, VQ, DQ, pQ, GQ, UQ, bQ, vQ, dQ, HQ, aQ, lQ, hQ = [],
          iQ = [],
          cQ = [],
          AQ = [],
          RQ = [],
          EQ = [],
          CQ = [],
          uQ = [],
          LQ = [],
          kQ = [],
          fQ = [],
          SQ = [],
          tQ = [],
          oQ = [],
          eQ = [],
          nQ = [],
          xQ = [],
          YQ = [],
          NQ = [],
          ZQ = [],
          OQ = [],
          KQ = [],
          mQ = [],
          MQ = [],
          QW = [],
          WW = [],
          XW = [],
          wW = [],
          qW = [];
        return QQ = class {
          static get ForceGLSL() {
            return IQ.i.ForceGLSL
          }
          static set ForceGLSL(QQ) {
            IQ.i.ForceGLSL = QQ
          }
          static RegisterShaderCodeProcessing(QQ, WQ) {
            IQ.i.RegisterShaderCodeProcessing(QQ, WQ)
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
            return this.XM
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.XQQ(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(WQ, XQ, sQ, FQ, PQ, gQ) {
            let JQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              rQ = arguments.length > 7 ? arguments[7] : void 0,
              jQ = arguments.length > 8 ? arguments[8] : void 0,
              BQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              VQ = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              DQ = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              pQ = arguments.length > 12 ? arguments[12] : void 0,
              GQ = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              UQ = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              bQ = arguments.length > 15 ? arguments[15] : void 0,
              vQ = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, wQ.n)(this, hQ), null), this.uniqueId = (0, wQ.n)(this, iQ, void 0), this.width = ((0, wQ.n)(this, cQ), (0, wQ.n)(this, AQ, -1)), this.height = ((0, wQ.n)(this, RQ), (0, wQ.n)(this, EQ, -1)), this.nodeMaterialSource = ((0, wQ.n)(this, CQ), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, wQ.n)(this, uQ, void 0), this.clearColor = ((0, wQ.n)(this, LQ), (0, wQ.n)(this, kQ, void 0)), this.autoClear = ((0, wQ.n)(this, fQ), (0, wQ.n)(this, SQ, !0)), this.forceAutoClearInAlphaMode = ((0, wQ.n)(this, tQ), (0, wQ.n)(this, oQ, !1)), this.alphaConstants = ((0, wQ.n)(this, eQ), (0, wQ.n)(this, nQ, void 0)), this.animations = ((0, wQ.n)(this, xQ), []), this.enablePixelPerfectMode = (0, wQ.n)(this, YQ, !1), this.forceFullscreenViewport = ((0, wQ.n)(this, NQ), (0, wQ.n)(this, ZQ, !0)), this.inspectableCustomProperties = (0, wQ.n)(this, OQ), this.scaleMode = (0, wQ.n)(this, KQ, 1), this.alwaysForcePOT = ((0, wQ.n)(this, mQ), (0, wQ.n)(this, MQ, !1)), this._samples = ((0, wQ.n)(this, QW), (0, wQ.n)(this, WW, 1)), this.adaptScaleToCurrentViewport = ((0, wQ.n)(this, XW), (0, wQ.n)(this, wW, !1)), this.doNotSerialize = ((0, wQ.n)(this, qW), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new qQ.e(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new zQ.q(1, 1), this._texelSize = zQ.q.Zero(), this.onActivateObservable = new TQ.b, this.onSizeChangedObservable = new TQ.b, this.onApplyObservable = new TQ.b, this.onBeforeRenderObservable = new TQ.b, this.onAfterRenderObservable = new TQ.b, this.yE = new TQ.b, yQ();
            let dQ, HQ = 1,
              aQ = null;
            if (sQ && !Array.isArray(sQ)) {
              const QQ = sQ;
              sQ = QQ.uniforms ?? null, FQ = QQ.samplers ?? null, HQ = QQ.size ?? 1, gQ = QQ.camera ?? null, JQ = QQ.samplingMode ?? 1, rQ = QQ.engine, jQ = QQ.reusable, BQ = Array.isArray(QQ.defines) ? QQ.defines.join("\n") : QQ.defines ?? null, VQ = QQ.textureType ?? 0, DQ = QQ.vertexUrl ?? "postprocess", pQ = QQ.indexParameters, GQ = QQ.blockCompilation ?? !1, UQ = QQ.textureFormat ?? 5, bQ = QQ.shaderLanguage ?? 0, aQ = QQ.uniformBuffers ?? null, vQ = QQ.extraInitializations, dQ = QQ.effectWrapper
            } else PQ && (HQ = "number" === typeof PQ ? PQ : {
              width: PQ.width,
              height: PQ.height
            });
            if (this._useExistingThinPostProcess = !!dQ, this._effectWrapper = dQ ?? new IQ.i({
                name: WQ,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: XQ,
                engine: rQ || gQ?.sE().Uj(),
                uniforms: sQ,
                samplers: FQ,
                uniformBuffers: aQ,
                defines: BQ,
                vertexUrl: DQ,
                indexParameters: pQ,
                blockCompilation: !0,
                shaderLanguage: bQ,
                extraInitializations: void 0
              }), this.name = WQ, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != gQ ? (this.XM = gQ, this._scene = gQ.sE(), gQ.attachPostProcess(this), this._engine = this._scene.Uj(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : rQ && (this._engine = rQ, this._engine.postProcesses.push(this)), this._options = HQ, this.renderTargetSamplingMode = JQ || 1, this._reusable = jQ || !1, this._textureType = VQ, this._textureFormat = UQ, this._shaderLanguage = bQ || 0, this._samplers = FQ || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = XQ, this._vertexUrl = DQ, this._parameters = sQ || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = aQ || [], this._indexParameters = pQ, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const WQ = [];
              this._gatherImports(this._engine.isWebGPU && !QQ.ForceGLSL, WQ), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(GQ, BQ, vQ, WQ)
            }
          }
          _gatherImports() {
            let QQ = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? QQ.push(Promise.all([XQ.e(372).then((() => XQ(61666)))])) : QQ.push(Promise.all([XQ.e(362).then((() => XQ(61542)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          Uj() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(QQ) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = QQ, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new qQ.e(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              wQ = arguments.length > 3 ? arguments[3] : void 0,
              qQ = arguments.length > 4 ? arguments[4] : void 0,
              TQ = arguments.length > 5 ? arguments[5] : void 0,
              zQ = arguments.length > 6 ? arguments[6] : void 0,
              sQ = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(QQ, WQ) {
            let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let qQ = 0; qQ < this._textureCache.length; qQ++)
              if (this._textureCache[qQ].texture.width === QQ.width && this._textureCache[qQ].texture.height === QQ.height && this._textureCache[qQ].postProcessChannel === XQ && this._textureCache[qQ].texture._generateDepthBuffer === WQ.generateDepthBuffer && this._textureCache[qQ].texture.samples === WQ.samples) return this._textureCache[qQ].texture;
            const wQ = this._engine.createRenderTargetTexture(QQ, WQ);
            return this._textureCache.push({
              texture: wQ,
              postProcessChannel: XQ,
              lastUsedRenderId: -1
            }), wQ
          }
          _flushTextureCache() {
            const QQ = this._renderId;
            for (let WQ = this._textureCache.length - 1; WQ >= 0; WQ--)
              if (QQ - this._textureCache[WQ].lastUsedRenderId > 100) {
                let QQ = !1;
                for (let XQ = 0; XQ < this._textures.length; XQ++)
                  if (this._textures.data[XQ] === this._textureCache[WQ].texture) {
                    QQ = !0;
                    break
                  } QQ || (this._textureCache[WQ].texture.dispose(), this._textureCache.splice(WQ, 1))
              }
          }
          resize(QQ, WQ) {
            let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = QQ, this.height = WQ;
            let TQ = null;
            if (XQ)
              for (let FQ = 0; FQ < XQ._postProcesses.length; FQ++)
                if (null !== XQ._postProcesses[FQ]) {
                  TQ = XQ._postProcesses[FQ];
                  break
                } const zQ = {
                width: this.width,
                height: this.height
              },
              sQ = {
                generateMipMaps: wQ,
                generateDepthBuffer: qQ || TQ === this,
                generateStencilBuffer: (qQ || TQ === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(zQ, sQ, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(zQ, sQ, 1)), this._texelSize.XQQ(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let QQ;
            if (this._shareOutputWithPostProcess) QQ = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) QQ = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let WQ;
              QQ = this.inputTexture;
              for (let XQ = 0; XQ < this._textureCache.length; XQ++)
                if (this._textureCache[XQ].texture === QQ) {
                  WQ = this._textureCache[XQ];
                  break
                } WQ && (WQ.lastUsedRenderId = this._renderId)
            }
            return QQ
          }
          activate(QQ) {
            let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              XQ = arguments.length > 2 ? arguments[2] : void 0;
            const wQ = null === QQ || void 0 !== QQ.cameraRigMode ? QQ || this.XM : null,
              qQ = wQ?.sE() ?? QQ,
              TQ = qQ.Uj(),
              zQ = TQ.getCaps().maxTextureSize,
              sQ = (WQ ? WQ.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              FQ = (WQ ? WQ.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let PQ = this._options.width || sQ,
              gQ = this._options.height || FQ;
            const JQ = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let IQ = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const QQ = TQ.currentViewport;
                QQ && (PQ *= QQ.width, gQ *= QQ.height)
              }(JQ || this.alwaysForcePOT) && (this._options.width || (PQ = TQ.needPOTTextures ? (0, rQ.h)(PQ, zQ, this.scaleMode) : PQ), this._options.height || (gQ = TQ.needPOTTextures ? (0, rQ.h)(gQ, zQ, this.scaleMode) : gQ)), this.width === PQ && this.height === gQ && (IQ = this._getTarget()) || this.resize(PQ, gQ, wQ, JQ, XQ), this._textures.forEach((QQ => {
                QQ.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(QQ, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return IQ || (IQ = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.XQQ(sQ / PQ, FQ / gQ), this._engine.bindFramebuffer(IQ, 0, sQ, FQ, this.forceFullscreenViewport)) : (this._scaleRatio.XQQ(1, 1), this._engine.bindFramebuffer(IQ, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(wQ), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : qQ.clearColor, qQ._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), IQ
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
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.Uj().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), QQ = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", QQ?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
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
            let WQ;
            if (QQ = QQ || this.XM, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (WQ = this._parentContainer.postProcesses.indexOf(this), WQ > -1 && this._parentContainer.postProcesses.splice(WQ, 1), this._parentContainer = null), WQ = this._engine.postProcesses.indexOf(this), -1 !== WQ && this._engine.postProcesses.splice(WQ, 1), this.yE.notifyObservers(), QQ) {
              if (QQ.detachPostProcess(this), WQ = QQ._postProcesses.indexOf(this), 0 === WQ && QQ._postProcesses.length > 0) {
                const QQ = this.XM._getFirstPostProcess();
                QQ && QQ.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const QQ = PQ.b.Serialize(this),
              WQ = this.getCamera() || this._scene && this._scene.activeCamera;
            return QQ.customType = "BABYLON." + this.getClassName(), QQ.cameraId = WQ ? WQ.id : null, QQ.reusable = this._reusable, QQ.textureType = this._textureType, QQ.fragmentUrl = this._fragmentUrl, QQ.parameters = this._parameters, QQ.samplers = this._samplers, QQ.uniformBuffers = this._uniformBuffers, QQ.options = this._options, QQ.defines = this._postProcessDefines, QQ.textureFormat = this._textureFormat, QQ.vertexUrl = this._vertexUrl, QQ.indexParameters = this._indexParameters, QQ
          }
          clone() {
            const WQ = this.serialize();
            WQ._engine = this._engine, WQ.cameraId = null;
            const XQ = QQ.Parse(WQ, this._scene, "");
            return XQ ? (XQ.onActivateObservable = this.onActivateObservable.clone(), XQ.onSizeChangedObservable = this.onSizeChangedObservable.clone(), XQ.onApplyObservable = this.onApplyObservable.clone(), XQ.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), XQ.onAfterRenderObservable = this.onAfterRenderObservable.clone(), XQ._prePassEffectConfiguration = this._prePassEffectConfiguration, XQ) : null
          }
          static Parse(QQ, WQ, XQ) {
            const wQ = (0, gQ.b)(QQ.customType);
            if (!wQ || !wQ._Parse) return null;
            const qQ = WQ ? WQ.getCameraById(QQ.cameraId) : null;
            return wQ._Parse(QQ, qQ, WQ, XQ)
          }
          static _Parse(WQ, XQ, wQ, qQ) {
            return PQ.b.Parse((() => new QQ(WQ.name, WQ.fragmentUrl, WQ.parameters, WQ.samplers, WQ.options, XQ, WQ.renderTargetSamplingMode, WQ._engine, WQ.reusable, WQ.defines, WQ.textureType, WQ.vertexUrl, WQ.indexParameters, !1, WQ.textureFormat)), WQ, wQ, qQ)
          }
        }, (() => {
          const XQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          WQ = [(0, FQ.I)()], sQ = [(0, FQ.I)()], JQ = [(0, FQ.I)()], jQ = [(0, FQ.I)()], BQ = [(0, FQ.I)()], VQ = [(0, FQ.p)()], DQ = [(0, FQ.I)()], pQ = [(0, FQ.I)()], GQ = [(0, FQ.I)()], UQ = [(0, FQ.I)()], bQ = [(0, FQ.I)()], vQ = [(0, FQ.I)()], dQ = [(0, FQ.I)()], HQ = [(0, FQ.I)()], aQ = [(0, FQ.I)("samples")], lQ = [(0, FQ.I)()], (0, wQ.k)(QQ, null, sQ, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: QQ => "name" in QQ,
              get: QQ => QQ.name
            },
            metadata: XQ
          }, null, hQ), (0, wQ.k)(QQ, null, GQ, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: QQ => "alphaMode" in QQ,
              get: QQ => QQ.alphaMode
            },
            metadata: XQ
          }, null, hQ), (0, wQ.k)(null, null, WQ, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: QQ => "uniqueId" in QQ,
              get: QQ => QQ.uniqueId,
              set: (QQ, WQ) => {
                QQ.uniqueId = WQ
              }
            },
            metadata: XQ
          }, iQ, cQ), (0, wQ.k)(null, null, JQ, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: QQ => "width" in QQ,
              get: QQ => QQ.width,
              set: (QQ, WQ) => {
                QQ.width = WQ
              }
            },
            metadata: XQ
          }, AQ, RQ), (0, wQ.k)(null, null, jQ, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: QQ => "height" in QQ,
              get: QQ => QQ.height,
              set: (QQ, WQ) => {
                QQ.height = WQ
              }
            },
            metadata: XQ
          }, EQ, CQ), (0, wQ.k)(null, null, BQ, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: QQ => "renderTargetSamplingMode" in QQ,
              get: QQ => QQ.renderTargetSamplingMode,
              set: (QQ, WQ) => {
                QQ.renderTargetSamplingMode = WQ
              }
            },
            metadata: XQ
          }, uQ, LQ), (0, wQ.k)(null, null, VQ, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "clearColor" in QQ,
              get: QQ => QQ.clearColor,
              set: (QQ, WQ) => {
                QQ.clearColor = WQ
              }
            },
            metadata: XQ
          }, kQ, fQ), (0, wQ.k)(null, null, DQ, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: QQ => "autoClear" in QQ,
              get: QQ => QQ.autoClear,
              set: (QQ, WQ) => {
                QQ.autoClear = WQ
              }
            },
            metadata: XQ
          }, SQ, tQ), (0, wQ.k)(null, null, pQ, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: QQ => "forceAutoClearInAlphaMode" in QQ,
              get: QQ => QQ.forceAutoClearInAlphaMode,
              set: (QQ, WQ) => {
                QQ.forceAutoClearInAlphaMode = WQ
              }
            },
            metadata: XQ
          }, oQ, eQ), (0, wQ.k)(null, null, UQ, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: QQ => "alphaConstants" in QQ,
              get: QQ => QQ.alphaConstants,
              set: (QQ, WQ) => {
                QQ.alphaConstants = WQ
              }
            },
            metadata: XQ
          }, nQ, xQ), (0, wQ.k)(null, null, bQ, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: QQ => "enablePixelPerfectMode" in QQ,
              get: QQ => QQ.enablePixelPerfectMode,
              set: (QQ, WQ) => {
                QQ.enablePixelPerfectMode = WQ
              }
            },
            metadata: XQ
          }, YQ, NQ), (0, wQ.k)(null, null, vQ, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: QQ => "forceFullscreenViewport" in QQ,
              get: QQ => QQ.forceFullscreenViewport,
              set: (QQ, WQ) => {
                QQ.forceFullscreenViewport = WQ
              }
            },
            metadata: XQ
          }, ZQ, OQ), (0, wQ.k)(null, null, dQ, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: QQ => "scaleMode" in QQ,
              get: QQ => QQ.scaleMode,
              set: (QQ, WQ) => {
                QQ.scaleMode = WQ
              }
            },
            metadata: XQ
          }, KQ, mQ), (0, wQ.k)(null, null, HQ, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: QQ => "alwaysForcePOT" in QQ,
              get: QQ => QQ.alwaysForcePOT,
              set: (QQ, WQ) => {
                QQ.alwaysForcePOT = WQ
              }
            },
            metadata: XQ
          }, MQ, QW), (0, wQ.k)(null, null, aQ, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_samples" in QQ,
              get: QQ => QQ._samples,
              set: (QQ, WQ) => {
                QQ._samples = WQ
              }
            },
            metadata: XQ
          }, WW, XW), (0, wQ.k)(null, null, lQ, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: QQ => "adaptScaleToCurrentViewport" in QQ,
              get: QQ => QQ.adaptScaleToCurrentViewport,
              set: (QQ, WQ) => {
                QQ.adaptScaleToCurrentViewport = WQ
              }
            },
            metadata: XQ
          }, wW, qW), XQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: XQ
          })
        })(), QQ
      })(),
      BQ = !1;

    function yQ() {
      BQ || (BQ = !0, JQ.d.prototype.setTextureFromPostProcess = function(QQ, WQ, XQ) {
        let wQ = null;
        WQ && (WQ._forcedOutputTexture ? wQ = WQ._forcedOutputTexture : WQ._textures.data[WQ._currentRenderTextureInd] && (wQ = WQ._textures.data[WQ._currentRenderTextureInd])), this._bindTexture(QQ, wQ?.texture ?? null, XQ)
      }, JQ.d.prototype.setTextureFromPostProcessOutput = function(QQ, WQ, XQ) {
        this._bindTexture(QQ, WQ?._outputTexture?.texture ?? null, XQ)
      }, sQ.c.prototype.setTextureFromPostProcess = function(QQ, WQ) {
        this._engine.setTextureFromPostProcess(this._samplers[QQ], WQ, QQ)
      }, sQ.c.prototype.setTextureFromPostProcessOutput = function(QQ, WQ) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[QQ], WQ, QQ)
      }, (0, gQ.d)("BABYLON.PostProcess", jQ))
    }
  },
  42070: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => zQ,
      g: () => TQ
    });
    var wQ = XQ(42050),
      qQ = XQ(37392);
    class TQ extends wQ.i {
      _gatherImports(QQ, WQ) {
        QQ ? (this._webGPUReady = !0, WQ.push(Promise.all([XQ.e(379).then((() => XQ(61713)))]))) : WQ.push(Promise.all([XQ.e(380).then((() => XQ(61717)))])), super._gatherImports(QQ, WQ)
      }
      constructor(QQ) {
        let WQ = arguments.length > 2 ? arguments[2] : void 0;
        const XQ = {
          name: QQ,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || qQ.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: TQ.FragmentUrl,
          ...WQ
        };
        XQ.engine || (XQ.engine = qQ.d.LastCreatedEngine), super(XQ)
      }
    }
    TQ.FragmentUrl = "pass";
    class zQ extends wQ.i {
      _gatherImports(QQ, WQ) {
        QQ ? (this._webGPUReady = !0, WQ.push(Promise.all([XQ.e(381).then((() => XQ(61726)))]))) : WQ.push(Promise.all([XQ.e(382).then((() => XQ(61733)))])), super._gatherImports(QQ, WQ)
      }
      constructor(QQ) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: QQ,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || qQ.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: zQ.FragmentUrl,
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
    zQ.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);