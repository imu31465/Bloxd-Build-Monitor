export const id = 301;
export const ids = [301];
export const modules = {
  40635: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => rT
    });
    var iT = IT(36149),
      zT = IT(36118),
      kT = IT(39270),
      WT = IT(38931),
      XT = IT(38698),
      BT = IT(37660),
      FT = IT(38911),
      ST = IT(38941),
      DT = IT(36134),
      LT = IT(38653),
      xT = IT(38897),
      cT = IT(38976);
    class KT {
      get renderList() {
        return this._renderList
      }
      set renderList(TT) {
        this._renderList !== TT && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), TT && (this._unObserveRenderList = (0, DT.j)(TT, this._renderListHasChanged)), this._renderList = TT)
      }
      get disableImageProcessing() {
        return this._disableImageProcessing
      }
      set disableImageProcessing(TT) {
        TT !== this._disableImageProcessing && (this._disableImageProcessing = TT, this._scene.markAllMaterialsAsDirty(64))
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(TT) {
        this._disableDepthPrePass = TT, this._renderingManager.disableDepthPrePass = TT
      }
      get name() {
        return this._name
      }
      set name(TT) {
        if (this._name !== TT) {
          if (this._name = TT, this._sceneUBOs)
            for (let TT = 0; TT < this._sceneUBOs.length; ++TT) this._sceneUBOs[TT].name = `Scene ubo #${TT} for ${this.name}`;
          if (this._scene)
            for (let TT = 0; TT < this._renderPassIds.length; ++TT) {
              const oT = this._renderPassIds[TT];
              this._engine._renderPassNames[oT] = `${this._name}#${TT}`
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
      setMaterialForRendering(TT, oT) {
        let IT;
        IT = Array.isArray(TT) ? TT : [TT];
        for (let iT = 0; iT < IT.length; ++iT)
          for (let TT = 0; TT < this.options.numPasses; ++TT) {
            let zT = IT[iT];
            IT[iT].yC && (zT = IT[iT].HiT), zT.setMaterialForRenderPass(this._renderPassIds[TT], void 0 !== oT ? Array.isArray(oT) ? oT[TT] : oT : void 0)
          }
      }
      _freezeActiveMeshes(TT) {
        this._freezeActiveMeshesCancel = (0, LT.e)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, TT)
            for (let TT = 0; TT < this._activeMeshes.length; TT++) this._activeMeshes.data[TT]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((TT, oT) => {
          this._freezeActiveMeshesCancel = null, oT ? (BT.d.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), TT && BT.d.Error(TT)) : (BT.d.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), TT && (BT.d.Error(TT), TT.stack && BT.d.Error(TT.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let TT = 0; TT < this._activeMeshes.length; TT++) this._activeMeshes.data[TT]._unFreeze();
        this._isFrozen = !1
      }
      constructor(TT, oT, IT) {
        this._unObserveRenderList = null, this._renderListHasChanged = (TT, oT) => {
          const IT = this._renderList ? this._renderList.length : 0;
          if (0 === oT && IT > 0 || 0 === IT)
            for (const iT of this._scene.meshes) iT._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new iT.d, this.onAfterRenderObservable = new iT.d, this.onBeforeRenderingManagerRenderObservable = new iT.d, this.onAfterRenderingManagerRenderObservable = new iT.d, this.onInitRenderingObservable = new iT.d, this.onFinishRenderingObservable = new iT.d, this.onFastPathRenderObservable = new iT.d, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new xT.f(256), this._activeBoundingBoxes = new xT.f(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = TT, this._scene = oT, this._engine = this._scene.Zc(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...IT
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new ST.d(oT), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const TT of this._scene.lights) TT.getTypeID() === cT.c.LIGHTTYPEID_CLUSTERED_CONTAINER && TT.isSupported && TT._updateBatches(this.activeCamera).render()
        })), this._scene.addObjectRenderer(this)
      }
      _releaseRenderPassId() {
        for (let TT = 0; TT < this.options.numPasses; ++TT) this._engine.releaseRenderPassId(this._renderPassIds[TT]);
        this._renderPassIds.length = 0
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let TT = 0; TT < this.options.numPasses; ++TT) this._renderPassIds[TT] = this._engine.createRenderPassId(`${this.name}#${TT}`)
      }
      _createSceneUBO(TT, oT) {
        const IT = this._scene.Zc(),
          iT = new FT.e(IT, void 0, oT, TT, void 0, !1);
        return iT.addUniform("viewProjection", 16), oT && iT.addUniform("viewProjectionR", 16), iT.addUniform("view", 16), iT.addUniform("projection", 16), iT.addUniform("vEyePosition", 4), iT.addUniform("inverseProjection", 16), iT
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const TT = this._engine._currentRenderTarget,
          oT = !(!TT || !TT.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const TT = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${TT} for ${this.name}`, oT)), this._sceneUBOIsMultiview.push(oT)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== oT && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, oT), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = oT);
        const IT = this._sceneUBOs[this._currentSceneUBOIndex++];
        return IT.unbindEffect(), IT
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1
      }
      get refreshRate() {
        return this._refreshRate
      }
      set refreshRate(TT) {
        this._refreshRate = TT, this.resetRefreshCounter()
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1))
      }
      isReadyForRendering(TT, oT) {
        this.prepareRenderList(), this.initRender(TT, oT);
        const IT = this._checkReadiness();
        return this.finishRender(), IT
      }
      prepareRenderList() {
        const TT = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let oT = 0; oT < this._waitingRenderList.length; oT++) {
              const IT = this._waitingRenderList[oT],
                iT = TT.getMeshById(IT);
              iT && this.renderList.push(iT)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const TT = this._scene.meshes;
          for (let oT = 0; oT < TT.length; oT++) {
            const IT = TT[oT];
            this.renderListPredicate(IT) && this.renderList.push(IT)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(TT, oT) {
        const IT = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), IT && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(IT.getViewMatrix(), IT.getProjectionMatrix(!0)), this._scene._activeCamera = IT, this._engine.setViewport(IT.rigParent ? IT.rigParent.viewport : IT.viewport, TT, oT)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const TT = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (TT.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), TT._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== TT.activeCamera && TT.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), TT.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const IT = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[TT], this.onBeforeRenderObservable.notifyObservers(TT);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(TT);
        else {
          const oT = this._prepareRenderingManager(TT),
            IT = this._scene.getOutlineRenderer?.(),
            iT = IT?.enabled;
          IT && (IT.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(TT), this._renderingManager.render(this.customRenderFunction, oT, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(TT), IT && (IT.enabled = iT)
        }
        oT || this.onAfterRenderObservable.notifyObservers(TT), this._engine.currentRenderPassId = IT
      }
      _checkReadiness() {
        const TT = this._scene,
          oT = this._engine.currentRenderPassId;
        let IT = !0;
        TT.getViewMatrix() || TT.updateTransformMatrix();
        const iT = this.options.numPasses;
        for (let zT = 0; zT < iT && IT; zT++) {
          const oT = this.renderList ? this.renderList : TT.frameGraph ? TT.meshes : TT.getActiveMeshes().data,
            kT = this.renderList || TT.frameGraph ? oT.length : TT.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[zT], this.onBeforeRenderObservable.notifyObservers(zT);
          let WT = null,
            XT = kT;
          this.getCustomRenderList && (WT = this.getCustomRenderList(zT, oT, kT), WT && (XT = WT.length)), WT || (WT = oT), this.options.doNotChangeAspectRatio || TT.updateTransformMatrix(!0);
          for (let TT = 0; TT < XT && IT; ++TT) {
            const oT = WT[TT];
            if (!oT.isEnabled() || oT.isBlocked || !oT.isVisible || !oT.pR) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(oT, this.refreshRate, !0)) {
                IT = !1;
                continue
              }
            } else if (!oT.isReady(!0)) {
              IT = !1;
              continue
            }
            let iT = oT._edgesRenderer,
              zT = oT.hasThinInstances;
            if (oT.yC) {
              const TT = oT.HiT;
              TT.edgesShareWithInstances && TT._edgesRenderer?.isEnabled && (iT = TT._edgesRenderer, zT = !0)
            } else oT.OiT && oT.edgesShareWithInstances && (zT = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && iT?.isEnabled && (iT.isReady(zT) || (IT = !1))
          }
          if (this.renderParticles && TT.particlesEnabled) {
            const oT = this.particleSystemList || TT.bR;
            for (const TT of oT) TT.isReady() || (IT = !1)
          }
          if (this.renderSprites && TT.spritesEnabled) {
            const oT = this.spriteManagerList || TT.spriteManagers;
            if (oT)
              for (const iT of oT) TT.activeCamera && 0 === (iT.layerMask & TT.activeCamera.layerMask) || iT.isReady && !iT.isReady() && (IT = !1)
          }
          this.onAfterRenderObservable.notifyObservers(zT), iT > 1 && (TT.incrementRenderId(), TT.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = oT, IT
      }
      _prepareRenderingManager() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const IT = this._scene;
        let iT, zT, kT = null;
        const WT = this.renderList ? this.renderList : IT.frameGraph ? IT.meshes : IT.getActiveMeshes().data,
          XT = this.renderList || IT.frameGraph ? WT.length : IT.getActiveMeshes().length;
        if (this.getCustomRenderList && (kT = this.getCustomRenderList(TT, WT, XT)), kT) iT = kT.length, zT = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !oT && !this._engine.isWebGPU) return WT;
          this._defaultRenderListPrepared = !0, kT = WT, iT = XT, zT = !this.renderList || this.forceLayerMaskCheck
        }
        const BT = IT.activeCamera,
          FT = this.cameraForLOD ?? BT,
          ST = IT.getBoundingBoxRenderer?.();
        if (IT._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && ST) {
            ST.reset();
            for (let TT = 0; TT < this._activeBoundingBoxes.length; TT++) {
              const oT = this._activeBoundingBoxes.data[TT];
              ST.renderList.push(oT)
            }
          }
          return kT
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), ST && ST.reset(), this.renderMeshes) {
          const TT = IT.getRenderId(),
            oT = IT.getFrameId();
          for (let WT = 0; WT < iT; WT++) {
            const iT = kT[WT];
            if (iT && !iT.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(iT, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!iT.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let kT, WT;
              if (FT) {
                const TT = iT._internalAbstractMeshDataInfo._currentLOD.get(FT);
                TT && TT[1] === oT ? kT = TT[0] : (kT = IT.customLODSelector ? IT.customLODSelector(iT, FT) : iT.getLOD(FT), TT ? (TT[0] = kT, TT[1] = oT) : iT._internalAbstractMeshDataInfo._currentLOD.set(FT, [kT, oT]))
              } else kT = iT;
              if (!kT) continue;
              if (kT !== iT && 0 !== kT.billboardMode && kT.computeWorldMatrix(), kT._preActivateForIntermediateRendering(TT), WT = !(!zT || !BT) && 0 === (iT.layerMask & BT.layerMask), iT.isEnabled() && iT.isVisible && iT.pR && !WT) {
                if (this._activeMeshes.push(iT), kT._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, kT !== iT && kT._activate(TT, !0), this.enableBoundingBoxRendering && ST && ST._preActiveMesh(iT), iT._activate(TT, !0) && iT.pR.length) {
                  iT.yC ? iT._internalAbstractMeshDataInfo._actAsRegularMesh && (kT = iT) : kT._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, kT._internalAbstractMeshDataInfo._isActiveIntermediate = !0, IT._prepareSkeleton(kT);
                  for (let TT = 0; TT < kT.pR.length; TT++) {
                    const oT = kT.pR[TT];
                    this.enableBoundingBoxRendering && ST && ST._evaluateSubMesh(iT, oT), this._renderingManager.dispatch(oT, kT)
                  }
                }
                iT._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && ST && oT)
          for (let DT = 0; DT < ST.renderList.length; DT++) {
            const TT = ST.renderList.data[DT];
            this._activeBoundingBoxes.push(TT)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const TT = this.particleSystemList || IT.bR;
          for (let oT = 0; oT < TT.length; oT++) {
            const IT = TT[oT],
              iT = IT.emitter;
            IT.isStarted() && iT && (!iT.position || iT.isEnabled()) && this._renderingManager.dispatchParticles(IT)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return kT
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(TT, oT, IT, iT)
      }
      setRenderingAutoClearDepthStencil(TT, oT) {
        let IT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          iT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(TT, oT, IT, iT), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const TT = new KT(this.name, this._scene, this.options);
        return this.renderList && (TT.renderList = this.renderList.slice(0)), TT
      }
      dispose() {
        const TT = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          oT = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let IT = 0; IT < oT; IT++) {
          const oT = TT[IT];
          oT && void 0 !== oT.getMaterialForRenderPass(this.renderPassId) && oT.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const IT of this._sceneUBOs) IT.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === KT.REFRESHRATE_RENDER_ONCE && (this.refreshRate = KT.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    KT.REFRESHRATE_RENDER_ONCE = 0, KT.REFRESHRATE_RENDER_ONEVERYFRAME = 1, KT.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var MT = IT(38643);
    class rT extends kT.g {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate
      }
      set renderListPredicate(TT) {
        this._objectRenderer.renderListPredicate = TT
      }
      get renderList() {
        return this._objectRenderer.renderList
      }
      set renderList(TT) {
        this._objectRenderer.renderList = TT
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList
      }
      set particleSystemList(TT) {
        this._objectRenderer.particleSystemList = TT
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList
      }
      set getCustomRenderList(TT) {
        this._objectRenderer.getCustomRenderList = TT
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles
      }
      set renderParticles(TT) {
        this._objectRenderer.renderParticles = TT
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites
      }
      set renderSprites(TT) {
        this._objectRenderer.renderSprites = TT
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering
      }
      set enableBoundingBoxRendering(TT) {
        this._objectRenderer.enableBoundingBoxRendering = TT
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering
      }
      set enableOutlineRendering(TT) {
        this._objectRenderer.enableOutlineRendering = TT
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck
      }
      set forceLayerMaskCheck(TT) {
        this._objectRenderer.forceLayerMaskCheck = TT
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera
      }
      set activeCamera(TT) {
        this._objectRenderer.activeCamera = TT
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD
      }
      set cameraForLOD(TT) {
        this._objectRenderer.cameraForLOD = TT
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing
      }
      set disableImageProcessing(TT) {
        this._objectRenderer.disableImageProcessing = TT
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction
      }
      set customIsReadyFunction(TT) {
        this._objectRenderer.customIsReadyFunction = TT
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction
      }
      set customRenderFunction(TT) {
        this._objectRenderer.customRenderFunction = TT
      }
      get postProcesses() {
        return this._postProcesses
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled
      }
      set onAfterUnbind(TT) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(TT)
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable
      }
      set onBeforeRender(TT) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(TT)
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable
      }
      set onAfterRender(TT) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(TT)
      }
      set onClear(TT) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(TT)
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList
      }
      set _waitingRenderList(TT) {
        this._objectRenderer._waitingRenderList = TT
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
      setMaterialForRendering(TT, oT) {
        this._objectRenderer.setMaterialForRendering(TT, oT)
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
      set boundingBoxSize(TT) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(TT)) return;
        this._boundingBoxSize = TT;
        const oT = this.pC();
        oT && oT.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(TT, oT, IT) {
        let WT, XT, FT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          ST = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          DT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          LT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          xT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : kT.g.TRILINEAR_SAMPLINGMODE,
          cT = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          MT = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          rT = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          AT = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          gT = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          hT = arguments.length > 13 ? arguments[13] : void 0,
          wT = arguments.length > 14 ? arguments[14] : void 0,
          mT = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          eT = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          RT = !0,
          uT = !1;
        if ("object" === typeof FT) {
          const TT = FT;
          FT = !!TT.generateMipMaps, ST = TT.doNotChangeAspectRatio ?? !0, DT = TT.type ?? 0, LT = !!TT.isCube, xT = TT.samplingMode ?? kT.g.TRILINEAR_SAMPLINGMODE, cT = TT.generateDepthBuffer ?? !0, MT = !!TT.generateStencilBuffer, rT = !!TT.isMulti, AT = TT.format ?? 5, gT = !!TT.delayAllocation, hT = TT.samples, wT = TT.creationFlags, mT = !!TT.noColorAttachment, eT = !!TT.useSRGBBuffer, WT = TT.colorAttachment, RT = TT.gammaSpace ?? RT, XT = TT.existingObjectRenderer, uT = !!TT.enableClusteredLights
        }
        if (super(null, IT, !FT, void 0, xT, void 0, void 0, void 0, void 0, AT), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new iT.d, this.onAfterUnbindObservable = new iT.d, this.onClearObservable = new iT.d, this.onResizeObservable = new iT.d, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = zT.m.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(IT = this.pC())) return;
        const vT = this.pC().Zc();
        this._gammaSpace = RT, this._coordinatesMode = kT.g.PROJECTION_MODE, this.name = TT, this.isRenderTarget = !0, this._initialSizeParameter = oT, this._dontDisposeObjectRenderer = !!XT, this._processSizeParameter(oT), this._objectRenderer = XT ?? new KT(TT, IT, {
          numPasses: LT ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: ST,
          enableClusteredLights: uT
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const TT = this._scene;
          if (!this._disableEngineStages)
            for (const oT of TT._beforeRenderTargetClearStage) oT.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(vT) : this.skipInitialClear || vT.clear(this.clearColor ?? TT.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || TT.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const oT of TT._beforeRenderTargetDrawStage) oT.action(this, this._currentFaceIndex, this._currentLayer);
          vT._debugPushGroup && vT._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (vT._debugPopGroup && vT._debugPopGroup(), !this._disableEngineStages)
            for (const oT of this._scene._afterRenderTargetDrawStage) oT.action(this, this._currentFaceIndex, this._currentLayer);
          const TT = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const oT of this._scene._afterRenderTargetPostProcessStage) oT.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = TT), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), vT) : BT.d.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(vT) : this.skipInitialClear || vT.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = vT.onResizeObservable.add((() => {})), this._generateMipMaps = !!FT, this._doNotChangeAspectRatio = ST, rT || (this._renderTargetOptions = {
          generateMipMaps: FT,
          type: DT,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: cT,
          generateStencilBuffer: MT,
          samples: hT,
          creationFlags: wT,
          noColorAttachment: mT,
          useSRGBBuffer: eT,
          colorAttachment: WT,
          label: this.name
        }, this.samplingMode === kT.g.NEAREST_SAMPLINGMODE && (this.wrapU = kT.g.CLAMP_ADDRESSMODE, this.wrapV = kT.g.CLAMP_ADDRESSMODE), gT || (LT ? (this._renderTarget = IT.Zc().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = kT.g.INVCUBIC_MODE, this._textureMatrix = zT.b.Identity()) : this._renderTarget = IT.Zc().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== hT && (this.samples = hT)))
      }
      createDepthStencilTexture() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          kT = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(TT, oT, IT, iT, zT, kT)
      }
      _processSizeParameter(TT) {
        if (TT.ratio) {
          this._sizeRatio = TT.ratio;
          const oT = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(oT.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(oT.getRenderHeight(), this._sizeRatio)
          }
        } else this._size = TT
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples
      }
      set samples(TT) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(TT))
      }
      addPostProcess(TT) {
        if (!this._postProcessManager) {
          const TT = this.pC();
          if (!TT) return;
          this._postProcessManager = new WT.d(TT), this._postProcesses = new Array
        }
        this._postProcesses.push(TT), this._postProcesses[0].autoClear = !1
      }
      clearPostProcesses() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (TT)
            for (const TT of this._postProcesses) TT.dispose();
          this._postProcesses = []
        }
      }
      removePostProcess(TT) {
        if (!this._postProcesses) return;
        const oT = this._postProcesses.indexOf(TT); - 1 !== oT && (this._postProcesses.splice(oT, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter()
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate
      }
      set refreshRate(TT) {
        this._objectRenderer.refreshRate = TT
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
        const TT = this._size.layers;
        if (TT) return TT;
        const oT = this._size.depth;
        return oT || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(TT) {
        const oT = Math.max(1, this.getRenderSize() * TT);
        this.resize(oT)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(TT) {
        const oT = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const IT = this.pC();
        IT && (this._processSizeParameter(TT), this._renderTarget = oT ? IT.Zc().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : IT.Zc().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(TT, oT)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => IT(40639))).then((TT => this._dumpTools = TT))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const TT = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), TT
      }
      _render() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const IT = this.pC();
        if (!IT) return;
        void 0 !== this.useCameraPostProcesses && (TT = this.useCameraPostProcesses);
        const iT = IT.Zc();
        if (iT._debugPushGroup && iT._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let zT = 0; zT < 6; zT++) this._renderToTarget(zT, TT, oT), IT.incrementRenderId(), IT.resetCachedMaterial();
          else this._renderToTarget(0, TT, oT);
        else
          for (let zT = 0; zT < this.getRenderLayers(); zT++) this._renderToTarget(0, TT, oT, zT), IT.incrementRenderId(), IT.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), iT._debugPopGroup && iT._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(TT, oT) {
        const IT = TT * oT,
          iT = (0, XT.m)(IT + 16384 / (128 + IT));
        return Math.min((0, XT.d)(TT), iT)
      }
      _bindFrameBuffer() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const IT = this.pC();
        if (!IT) return;
        const iT = IT.Zc();
        this._renderTarget && iT.bindFramebuffer(this._renderTarget, this.isCube ? TT : void 0, void 0, void 0, this.ignoreCameraViewport, 0, oT)
      }
      _unbindFrameBuffer(TT, oT) {
        this._renderTarget && TT.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(oT)
        }))
      }
      _prepareFrame(TT, oT, IT, iT) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(oT, IT) : iT && TT.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(oT, IT)
      }
      _renderToTarget(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const zT = this.pC();
        if (!zT) return;
        const kT = zT.Zc();
        this._currentFaceIndex = TT, this._currentLayer = iT, this._currentUseCameraPostProcess = oT, this._currentDumpForDebug = IT, this._prepareFrame(zT, TT, iT, oT), this._objectRenderer.render(TT + iT, !0), this._unbindFrameBuffer(kT, TT), this._texture && this.isCube && 5 === TT && kT.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(TT, oT, IT, iT)
      }
      setRenderingAutoClearDepthStencil(TT, oT) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(TT, oT)
      }
      clone() {
        const TT = this.getSize(),
          oT = new rT(this.name, TT, this.pC(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return oT.hasAlpha = this.hasAlpha, oT.level = this.level, oT.coordinatesMode = this.coordinatesMode, this.renderList && (oT.renderList = this.renderList.slice(0)), oT
      }
      serialize() {
        if (!this.name) return null;
        const TT = super.serialize();
        if (TT.renderTargetSize = this.getRenderSize(), TT.renderList = [], this.renderList)
          for (let oT = 0; oT < this.renderList.length; oT++) TT.renderList.push(this.renderList[oT].id);
        return TT
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.pC().Zc().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const TT = this.pC();
        if (!TT) return;
        let oT = TT.customRenderTargets.indexOf(this);
        oT >= 0 && TT.customRenderTargets.splice(oT, 1);
        for (const IT of TT.cameras) oT = IT.customRenderTargets.indexOf(this), oT >= 0 && IT.customRenderTargets.splice(oT, 1);
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
    rT.REFRESHRATE_RENDER_ONCE = KT.REFRESHRATE_RENDER_ONCE, rT.REFRESHRATE_RENDER_ONEVERYFRAME = KT.REFRESHRATE_RENDER_ONEVERYFRAME, rT.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = KT.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(rT.prototype, "noPrePassRenderer") || Object.defineProperty(rT.prototype, "noPrePassRenderer", (0, MT.f)("RenderTargetTexture", "noPrePassRenderer"))
  },
  40626: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => FT,
      d: () => ST
    });
    var iT = IT(38923),
      zT = IT(37105),
      kT = IT(36149),
      WT = IT(38609),
      XT = IT(39105);
    const BT = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class FT {
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BT;
        this._fullscreenViewport = new zT.b(0, 0, 1, 1);
        const IT = oT.positions ?? BT.positions,
          kT = oT.indices ?? BT.indices;
        this.engine = TT, this._vertexBuffers = {
          [iT.i.PositionKind]: new iT.i(TT, IT, iT.i.PositionKind, !1, !1, 2)
        }, this._indexBuffer = TT.createIndexBuffer(kT), this._indexBufferLength = kT.length, this._onContextRestoredObserver = TT.onContextRestoredObservable.add((() => {
          this._indexBuffer = TT.createIndexBuffer(kT);
          for (const TT in this._vertexBuffers) {
            this._vertexBuffers[TT]._rebuild()
          }
        }))
      }
      setViewport() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.engine.setViewport(TT)
      }
      bindBuffers(TT) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, TT)
      }
      applyEffectWrapper(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = oT, this.engine.stencilState.stencilTest = IT, this.engine.enableEffect(TT.drawWrapper), this.bindBuffers(TT.effect), TT.onApplyObservable.notifyObservers({})
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
      _isRenderTargetTexture(TT) {
        return void 0 !== TT.renderTarget
      }
      render(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!TT.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const IT = null === oT ? null : this._isRenderTargetTexture(oT) ? oT.renderTarget : oT;
        IT && this.engine.bindFramebuffer(IT), this.applyEffectWrapper(TT), this.draw(), IT && this.engine.unBindFramebuffer(IT), this.restoreStates()
      }
      dispose() {
        const TT = this._vertexBuffers[iT.i.PositionKind];
        TT && (TT.dispose(), delete this._vertexBuffers[iT.i.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class ST {
      static RegisterShaderCodeProcessing(TT, oT) {
        oT ? ST._CustomShaderCodeProcessing[TT ?? ""] = oT : delete ST._CustomShaderCodeProcessing[TT ?? ""]
      }
      static _GetShaderCodeProcessing(TT) {
        return ST._CustomShaderCodeProcessing[TT] ?? ST._CustomShaderCodeProcessing[""]
      }
      get name() {
        return this.options.name
      }
      set name(TT) {
        this.options.name = TT
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
      set effect(TT) {
        this._drawWrapper.effect = TT
      }
      constructor(TT) {
        this.alphaMode = 0, this.onEffectCreatedObservable = new kT.d(void 0, !0), this.onApplyObservable = new kT.d, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
          ...TT,
          name: TT.name || "effectWrapper",
          engine: TT.engine,
          uniforms: TT.uniforms || TT.uniformNames || [],
          uniformNames: void 0,
          samplers: TT.samplers || TT.samplerNames || [],
          samplerNames: void 0,
          attributeNames: TT.attributeNames || ["position"],
          uniformBuffers: TT.uniformBuffers || [],
          defines: TT.defines || "",
          useShaderStore: TT.useShaderStore || !1,
          vertexUrl: TT.vertexUrl || TT.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: TT.fragmentShader || "pass",
          indexParameters: TT.indexParameters,
          blockCompilation: TT.blockCompilation || !1,
          shaderLanguage: TT.shaderLanguage || 0,
          onCompiled: TT.onCompiled || void 0,
          extraInitializations: TT.extraInitializations || void 0,
          extraInitializationsAsync: TT.extraInitializationsAsync || void 0,
          useAsPostProcess: TT.useAsPostProcess ?? !1,
          allowEmptySourceTexture: TT.allowEmptySourceTexture ?? !1
        }, this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), TT.vertexUrl || TT.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add((() => {
          this.effect.setFloat2("scale", 1, 1)
        }))), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add((() => {
          this.bind()
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.onContextRestoredObservable.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new XT.c(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const oT = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, oT, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          iT = arguments.length > 2 ? arguments[2] : void 0,
          zT = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, zT && this._importPromises.push(...zT);
        const kT = this.options.engine.isWebGPU && !ST.ForceGLSL;
        this._gatherImports(kT, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(kT && this._webGPUReady ? IT.e(356).then((() => IT(60255))) : IT.e(345).then((() => IT(60015)))), void 0 !== iT && iT(kT, this._importPromises), kT && this._webGPUReady && (this.options.shaderLanguage = 1), TT || this.updateEffect(oT)
      }
      updateEffect() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          iT = arguments.length > 3 ? arguments[3] : void 0,
          zT = arguments.length > 4 ? arguments[4] : void 0,
          kT = arguments.length > 5 ? arguments[5] : void 0,
          XT = arguments.length > 6 ? arguments[6] : void 0,
          BT = arguments.length > 7 ? arguments[7] : void 0;
        const FT = ST._GetShaderCodeProcessing(this.name);
        if (FT?.defineCustomBindings) {
          const iT = oT?.slice() ?? [];
          iT.push(...this.options.uniforms);
          const zT = IT?.slice() ?? [];
          zT.push(...this.options.samplers), TT = FT.defineCustomBindings(this.name, TT, iT, zT), oT = iT, IT = zT
        }
        this.options.defines = TT || "";
        const DT = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let LT;
        LT = this.options.extraInitializationsAsync ? async () => {
          await (DT?.()), await this.options.extraInitializationsAsync()
        }: DT, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: XT ?? this._shaderPath.vertex,
          fragment: BT ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: oT || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: IT || this.options.samplers,
          defines: null !== TT ? TT : "",
          fallbacks: null,
          onCompiled: zT ?? this.options.onCompiled,
          onError: kT ?? null,
          indexParameters: iT || this.options.indexParameters,
          processCodeAfterIncludes: FT?.processCodeAfterIncludes ? (TT, oT) => FT.processCodeAfterIncludes(this.name, TT, oT) : null,
          processFinalCode: FT?.processFinalCode ? (TT, oT) => FT.processFinalCode(this.name, TT, oT) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: LT
        }, this.options.engine) : this._drawWrapper.effect = new WT.c(this._shaderPath, this.options.attributeNames, oT || this.options.uniforms, IT || this.options.samplerNames, this.options.engine, TT, void 0, zT || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, LT), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !TT && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), ST._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.Zc().onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    ST.ForceGLSL = !1, ST._CustomShaderCodeProcessing = {}
  },
  40639: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      Dispose: () => AT,
      DumpData: () => rT,
      DumpDataAsync: () => MT,
      DumpFramebuffer: () => KT,
      DumpTools: () => gT,
      EncodeImageAsync: () => cT,
      RegisterDumpTools: () => wT
    });
    var iT = IT(38764),
      zT = IT(40626),
      kT = IT(38886),
      WT = IT(36156),
      XT = IT(36146),
      BT = IT(37660),
      FT = IT(38845),
      ST = IT(38773);
    let DT = null;
    async function LT() {
      return DT || (DT = async function() {
        const TT = XT.d.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        TT instanceof OffscreenCanvas && BT.d.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: oT
        } = await Promise.resolve().then((() => IT(38607)));
        if (!oT.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const iT = new oT(TT, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        XT.d.Instances.pop(), XT.d.OnEnginesDisposedObservable.add((TT => {
          iT && TT !== iT && !iT.IIT && 0 === XT.d.Instances.length && AT()
        })), iT.getCaps().parallelShaderCompile = void 0;
        const kT = new zT.c(iT),
          {
            passPixelShader: WT
          } = await IT.e(364).then((() => IT(60316))),
          FT = new zT.d({
            engine: iT,
            name: WT.name,
            fragmentShader: WT.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: TT,
          dumpEngine: {
            engine: iT,
            renderer: kT,
            wrapper: FT
          }
        }
      }()), await DT
    }
    let xT = (() => {
      var TT;
      let oT, IT = [];
      return TT = class {
        static async EncodeImageAsync(TT, oT, IT, iT, zT, WT) {
          const XT = await LT(),
            BT = XT.dumpEngine;
          BT.engine.setSize(oT, IT, !0);
          const FT = BT.engine.createRawTexture(TT, oT, IT, 5, !1, !zT, 1);
          return BT.renderer.setViewport(), BT.renderer.applyEffectWrapper(BT.wrapper), BT.wrapper.effect._bindTexture("textureSampler", FT), BT.renderer.draw(), FT.dispose(), await new Promise(((TT, oT) => {
            kT.i.ToBlob(XT.canvas, (IT => {
              IT ? TT(IT) : oT(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), iT, WT)
          }))
        }
      }, (() => {
        const zT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        oT = [ST.l], (0, iT.h)(TT, null, oT, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: TT => "EncodeImageAsync" in TT,
            get: TT => TT.EncodeImageAsync
          },
          metadata: zT
        }, null, IT), zT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zT
        }), (0, iT.j)(TT, IT)
      })(), TT
    })();
    const cT = xT.EncodeImageAsync;
    async function KT(TT, oT, IT, iT) {
      let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        kT = arguments.length > 5 ? arguments[5] : void 0,
        WT = arguments.length > 6 ? arguments[6] : void 0;
      const XT = await IT.readPixels(0, 0, TT, oT);
      rT(TT, oT, new Uint8Array(XT.buffer), iT, zT, kT, !0, void 0, WT)
    }
    async function MT(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        zT = arguments.length > 4 ? arguments[4] : void 0,
        XT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        ST = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        DT = arguments.length > 7 ? arguments[7] : void 0;
      if (IT instanceof Float32Array) {
        const TT = new Uint8Array(IT.length);
        let oT = IT.length;
        for (; oT--;) {
          const iT = IT[oT];
          TT[oT] = Math.round(255 * (0, WT.Clamp)(iT))
        }
        IT = TT
      }
      const LT = await xT.EncodeImageAsync(IT, TT, oT, iT, XT, DT);
      void 0 !== zT && kT.i.DownloadBlob(LT, zT), LT.type !== iT && BT.d.Warn(`DumpData: The requested mimeType '${iT}' is not supported. The result has mimeType '${LT.type}' instead.`);
      const cT = await LT.arrayBuffer();
      return ST ? cT : `data:${iT};base64,${(0,FT.f)(cT)}`
    }

    function rT(TT, oT, IT, iT) {
      let zT = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== zT || iT || (zT = ""), MT(TT, oT, IT, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", zT, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((TT => {
        iT && iT(TT)
      }))
    }

    function AT() {
      DT && (DT?.then((TT => {
        TT.canvas instanceof HTMLCanvasElement && TT.canvas.remove(), TT.dumpEngine && (TT.dumpEngine.engine.dispose(), TT.dumpEngine.renderer.dispose(), TT.dumpEngine.wrapper.dispose())
      })), DT = null)
    }
    const gT = {
      DumpData: rT,
      DumpDataAsync: MT,
      DumpFramebuffer: KT,
      Dispose: AT
    };
    let hT = !1;

    function wT() {
      if (hT) return;
      hT = !0;
      kT.i.DumpData = rT, kT.i.DumpDataAsync = MT, kT.i.DumpFramebuffer = KT
    }
  },
  40631: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => xT,
      d: () => cT,
      h: () => KT
    });
    var iT = IT(39270),
      zT = IT(40635),
      kT = IT(38764),
      WT = IT(40618),
      XT = IT(38799),
      BT = IT(40637),
      FT = IT(38773);
    class ST extends WT.e {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(TT, oT) {
        let IT = arguments.length > 4 ? arguments[4] : void 0;
        const iT = {
          size: "number" === typeof oT ? oT : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: IT,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...oT
        };
        super(TT, BT.e.FragmentUrl, {
          effectWrapper: "number" !== typeof oT && oT.effectWrapper ? void 0 : new BT.e(TT, IT, iT),
          ...iT
        })
      }
      static _Parse(TT, oT, IT, iT) {
        return XT.c.Parse((() => new ST(TT.name, TT.options, oT, TT.renderTargetSamplingMode, TT._engine, TT.reusable)), TT, IT, iT)
      }
    }(() => {
      var TT;
      let oT, IT = WT.e,
        iT = [];
      TT = class extends IT {
        get face() {
          return this._effectWrapper.face
        }
        set face(TT) {
          this._effectWrapper.face = TT
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(TT, oT) {
          let IT = arguments.length > 4 ? arguments[4] : void 0;
          const zT = {
            size: "number" === typeof oT ? oT : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: IT,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...oT
          };
          super(TT, BT.e.FragmentUrl, {
            effectWrapper: "number" !== typeof oT && oT.effectWrapper ? void 0 : new BT.d(TT, IT, zT),
            ...zT
          }), (0, kT.j)(this, iT)
        }
        static _Parse(oT, IT, iT, zT) {
          return XT.c.Parse((() => new TT(oT.name, oT.options, IT, oT.renderTargetSamplingMode, oT._engine, oT.reusable)), oT, iT, zT)
        }
      }, (() => {
        const zT = "function" === typeof Symbol && Symbol.metadata ? Object.create(IT[Symbol.metadata] ?? null) : void 0;
        oT = [(0, FT.P)()], (0, kT.h)(TT, null, oT, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: TT => "face" in TT,
            get: TT => TT.face
          },
          metadata: zT
        }, null, iT), zT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zT
        })
      })()
    })();
    var DT = IT(36156),
      LT = IT(38853);

    function xT(TT, oT, IT, iT, zT, kT, XT, BT) {
      const FT = oT.Zc();
      return oT.isReady = !1, zT = zT ?? oT.samplingMode, iT = iT ?? oT.type, kT = kT ?? oT.format, XT = XT ?? oT.width, BT = BT ?? oT.height, -1 === iT && (iT = 0), new Promise((ST => {
        const DT = new WT.e("postprocess", TT, null, null, 1, null, zT, FT, !1, void 0, iT, void 0, null, !1, kT);
        DT.externalTextureSamplerBinding = !0;
        const LT = FT.createRenderTargetTexture({
          width: XT,
          height: BT
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: zT,
          type: iT,
          format: kT
        });
        DT.onEffectCreatedObservable.addOnce((TT => {
          TT.executeWhenCompiled((() => {
            DT.onApply = TT => {
              TT._bindTexture("textureSampler", oT), TT.setFloat2("scale", 1, 1)
            }, IT.postProcessManager.directRender([DT], LT, !0), FT.restoreDefaultFramebuffer(), FT._releaseTexture(oT), DT && DT.dispose(), LT._swapAndDie(oT), oT.type = iT, oT.format = 5, oT.isReady = !0, ST(oT)
          }))
        }))
      }))
    }
    async function cT(TT, oT, kT) {
      let XT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        BT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        FT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        ST = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(TT) {
        if (TT.isReady()) return;
        if (TT.loadingError) throw new Error(TT.errorObject?.message || `Texture ${TT.name} errored while loading.`);
        const oT = TT.onLoadObservable;
        if (oT) return await new Promise((TT => oT.addOnce((() => TT()))));
        const IT = TT._texture?.onLoadedObservable;
        if (IT) return await new Promise((TT => IT.addOnce((() => TT()))));
        throw new Error(`Cannot determine readiness of texture ${TT.name}.`)
      }(TT);
      const LT = TT.getInternalTexture(),
        xT = TT.is3D || !!LT?.is3D,
        {
          width: cT,
          height: KT
        } = TT.getSize(),
        MT = oT ?? cT,
        rT = kT ?? KT;
      if (FT || xT || function(TT) {
          switch (TT) {
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
        }(TT.textureFormat) || MT !== cT || rT !== KT) {
        if (TT.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${FT?"RTT":"compression"} is not supported.`);
        return await async function(TT, oT, kT, XT, BT) {
          let FT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const ST = TT.pC(),
            DT = ST.Zc(),
            LT = TT.getInternalTexture(),
            xT = TT.is3D || !!LT?.is3D;
          let cT;
          if (DT.isWebGPU ? xT ? await IT.e(360).then((() => IT(60299))) : TT.isCube ? await IT.e(361).then((() => IT(60302))) : await IT.e(362).then((() => IT(60310))) : xT ? await IT.e(357).then((() => IT(60276))) : TT.isCube ? await IT.e(358).then((() => IT(60283))) : await IT.e(359).then((() => IT(60291))), xT) cT = new WT.e("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: iT.g.NEAREST_NEAREST_MIPNEAREST,
            engine: DT,
            shaderLanguage: DT.isWebGPU ? 1 : 0
          });
          else if (TT.isCube) {
            const TT = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            cT = new WT.e("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: iT.g.NEAREST_NEAREST_MIPNEAREST,
              engine: DT,
              defines: TT[XT],
              shaderLanguage: DT.isWebGPU ? 1 : 0
            })
          } else cT = new WT.e("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: iT.g.NEAREST_NEAREST_MIPNEAREST,
            engine: DT,
            shaderLanguage: DT.isWebGPU ? 1 : 0
          });
          await new Promise((TT => {
            cT.onEffectCreatedObservable.addOnce((oT => {
              oT.executeWhenCompiled((() => {
                TT(0)
              }))
            }))
          }));
          const KT = new zT.c("temp", {
            width: oT,
            height: kT
          }, ST, !1);
          cT.onApply = function(oT) {
            oT.setTexture("textureSampler", TT), oT.setFloat("lod", BT), oT.setInt("gamma", TT.gammaSpace ? 1 : 0), xT && oT.setFloat("slice", FT)
          };
          try {
            if (KT.renderTarget && LT) {
              const IT = LT.samplingMode;
              0 !== BT ? TT.updateSamplingMode(iT.g.NEAREST_NEAREST_MIPNEAREST) : TT.updateSamplingMode(iT.g.NEAREST_NEAREST), ST.postProcessManager.directRender([cT], KT.renderTarget, !0), TT.updateSamplingMode(IT);
              const zT = await DT.readPixels(0, 0, oT, kT),
                WT = new Uint8Array(zT.buffer, zT.byteOffset, zT.byteLength);
              return DT.unBindFramebuffer(KT.renderTarget), WT
            }
            throw Error("Render to texture failed.")
          } finally {
            KT.dispose(), cT.dispose()
          }
        }(TT, MT, rT, XT, BT, ST)
      }
      let AT = await TT.readPixels(XT, BT);
      if (!AT) throw new Error(`Failed to read pixels from texture ${TT.name}.`);
      if (AT instanceof Float32Array) {
        const TT = new Uint8Array(AT.length);
        let oT = AT.length;
        for (; oT--;) {
          const IT = AT[oT];
          TT[oT] = Math.round(255 * (0, DT.Clamp)(IT))
        }
        AT = TT
      }
      const gT = MT * rT,
        hT = 4 * gT;
      if (AT.length !== hT) {
        const TT = 0 === gT ? 0 : AT.length / gT;
        if (1 === TT || 2 === TT || 3 === TT) {
          const oT = new Uint8Array(hT);
          for (let IT = 0, iT = 0, zT = 0; IT < gT; IT++, zT += 4) {
            const IT = AT[iT++];
            if (1 === TT) {
              oT[zT] = IT, oT[zT + 1] = IT, oT[zT + 2] = IT, oT[zT + 3] = 255;
              continue
            }
            const kT = AT[iT++];
            2 !== TT ? (oT[zT] = IT, oT[zT + 1] = kT, oT[zT + 2] = AT[iT++], oT[zT + 3] = 255) : (oT[zT] = IT, oT[zT + 1] = kT, oT[zT + 2] = 0, oT[zT + 3] = 255)
          }
          return oT
        }
      }
      return AT
    }
    const KT = {
      CreateResizedCopy: function(TT, oT, IT) {
        let kT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const WT = TT.pC(),
          XT = WT.Zc(),
          BT = new zT.c("resized" + TT.name, {
            width: oT,
            height: IT
          }, WT, !TT.noMipmap, !0, TT._texture.type, !1, TT.samplingMode, !1);
        BT.wrapU = TT.wrapU, BT.wrapV = TT.wrapV, BT.uOffset = TT.uOffset, BT.vOffset = TT.vOffset, BT.uScale = TT.uScale, BT.vScale = TT.vScale, BT.uAng = TT.uAng, BT.vAng = TT.vAng, BT.wAng = TT.wAng, BT.coordinatesIndex = TT.coordinatesIndex, BT.level = TT.level, BT.anisotropicFilteringLevel = TT.anisotropicFilteringLevel, BT._texture.isReady = !1, TT.wrapU = iT.g.CLAMP_ADDRESSMODE, TT.wrapV = iT.g.CLAMP_ADDRESSMODE;
        const FT = new ST("pass", 1, null, kT ? iT.g.BILINEAR_SAMPLINGMODE : iT.g.NEAREST_SAMPLINGMODE, XT, !1, 0);
        return FT.externalTextureSamplerBinding = !0, FT.onEffectCreatedObservable.addOnce((oT => {
          oT.executeWhenCompiled((() => {
            FT.onApply = function(oT) {
              oT.setTexture("textureSampler", TT)
            };
            const oT = BT.renderTarget;
            oT && (WT.postProcessManager.directRender([FT], oT), XT.unBindFramebuffer(oT), BT.disposeFramebufferObjects(), FT.dispose(), BT.getInternalTexture().isReady = !0)
          }))
        })), BT
      },
      ApplyPostProcess: xT,
      ToHalfFloat: LT.i,
      FromHalfFloat: LT.b,
      GetTextureDataAsync: cT
    }
  },
  40618: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => cT
    });
    var iT = IT(38764),
      zT = IT(38897),
      kT = IT(36149),
      WT = IT(36118),
      XT = IT(38609),
      BT = IT(38773),
      FT = IT(38799),
      ST = IT(36166),
      DT = IT(38659),
      LT = IT(38698),
      xT = IT(40626);
    let cT = (() => {
        var TT;
        let oT, XT, DT, cT, KT, rT, AT, gT, hT, wT, mT, eT, RT, uT, vT, ET, fT = [],
          CT = [],
          jT = [],
          JT = [],
          UT = [],
          aT = [],
          YT = [],
          QT = [],
          OT = [],
          HT = [],
          nT = [],
          qT = [],
          ZT = [],
          lT = [],
          sT = [],
          tT = [],
          GT = [],
          pT = [],
          bT = [],
          yT = [],
          NT = [],
          PT = [],
          dT = [],
          VT = [],
          To = [],
          oo = [],
          Io = [],
          io = [],
          zo = [];
        return TT = class {
          static get ForceGLSL() {
            return xT.d.ForceGLSL
          }
          static set ForceGLSL(TT) {
            xT.d.ForceGLSL = TT
          }
          static RegisterShaderCodeProcessing(TT, oT) {
            xT.d.RegisterShaderCodeProcessing(TT, oT)
          }
          get name() {
            return this._effectWrapper.name
          }
          set name(TT) {
            this._effectWrapper.name = TT
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode
          }
          set alphaMode(TT) {
            this._effectWrapper.alphaMode = TT
          }
          get samples() {
            return this._samples
          }
          set samples(TT) {
            this._samples = Math.min(TT, this._engine.getCaps().maxMSAASamples), this._textures.forEach((TT => {
              TT.setSamples(this._samples)
            }))
          }
          get shaderLanguage() {
            return this._shaderLanguage
          }
          getEffectName() {
            return this._fragmentUrl
          }
          set onActivate(TT) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), TT && (this._onActivateObserver = this.onActivateObservable.add(TT))
          }
          set onSizeChanged(TT) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(TT)
          }
          set onApply(TT) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(TT)
          }
          set onBeforeRender(TT) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(TT)
          }
          set onAfterRender(TT) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(TT)
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd]
          }
          set inputTexture(TT) {
            this._forcedOutputTexture = TT
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty())
          }
          getCamera() {
            return this.Gy
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.S_(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(oT, IT, XT, BT, FT, ST) {
            let DT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              LT = arguments.length > 7 ? arguments[7] : void 0,
              cT = arguments.length > 8 ? arguments[8] : void 0,
              KT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              rT = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              AT = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              gT = arguments.length > 12 ? arguments[12] : void 0,
              hT = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              wT = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              mT = arguments.length > 15 ? arguments[15] : void 0,
              eT = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, iT.j)(this, fT), null), this.uniqueId = (0, iT.j)(this, CT, void 0), this.width = ((0, iT.j)(this, jT), (0, iT.j)(this, JT, -1)), this.height = ((0, iT.j)(this, UT), (0, iT.j)(this, aT, -1)), this.nodeMaterialSource = ((0, iT.j)(this, YT), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, iT.j)(this, QT, void 0), this.clearColor = ((0, iT.j)(this, OT), (0, iT.j)(this, HT, void 0)), this.autoClear = ((0, iT.j)(this, nT), (0, iT.j)(this, qT, !0)), this.forceAutoClearInAlphaMode = ((0, iT.j)(this, ZT), (0, iT.j)(this, lT, !1)), this.alphaConstants = ((0, iT.j)(this, sT), (0, iT.j)(this, tT, void 0)), this.animations = ((0, iT.j)(this, GT), []), this.enablePixelPerfectMode = (0, iT.j)(this, pT, !1), this.forceFullscreenViewport = ((0, iT.j)(this, bT), (0, iT.j)(this, yT, !0)), this.inspectableCustomProperties = (0, iT.j)(this, NT), this.scaleMode = (0, iT.j)(this, PT, 1), this.alwaysForcePOT = ((0, iT.j)(this, dT), (0, iT.j)(this, VT, !1)), this._samples = ((0, iT.j)(this, To), (0, iT.j)(this, oo, 1)), this.adaptScaleToCurrentViewport = ((0, iT.j)(this, Io), (0, iT.j)(this, io, !1)), this.doNotSerialize = ((0, iT.j)(this, zo), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new zT.f(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new WT.j(1, 1), this._texelSize = WT.j.Zero(), this.onActivateObservable = new kT.d, this.onSizeChangedObservable = new kT.d, this.onApplyObservable = new kT.d, this.onBeforeRenderObservable = new kT.d, this.onAfterRenderObservable = new kT.d, this.bC = new kT.d, MT();
            let RT, uT = 1,
              vT = null;
            if (XT && !Array.isArray(XT)) {
              const TT = XT;
              XT = TT.uniforms ?? null, BT = TT.samplers ?? null, uT = TT.size ?? 1, ST = TT.camera ?? null, DT = TT.samplingMode ?? 1, LT = TT.engine, cT = TT.reusable, KT = Array.isArray(TT.defines) ? TT.defines.join("\n") : TT.defines ?? null, rT = TT.textureType ?? 0, AT = TT.vertexUrl ?? "postprocess", gT = TT.indexParameters, hT = TT.blockCompilation ?? !1, wT = TT.textureFormat ?? 5, mT = TT.shaderLanguage ?? 0, vT = TT.uniformBuffers ?? null, eT = TT.extraInitializations, RT = TT.effectWrapper
            } else FT && (uT = "number" === typeof FT ? FT : {
              width: FT.width,
              height: FT.height
            });
            if (this._useExistingThinPostProcess = !!RT, this._effectWrapper = RT ?? new xT.d({
                name: oT,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: IT,
                engine: LT || ST?.pC().Zc(),
                uniforms: XT,
                samplers: BT,
                uniformBuffers: vT,
                defines: KT,
                vertexUrl: AT,
                indexParameters: gT,
                blockCompilation: !0,
                shaderLanguage: mT,
                extraInitializations: void 0
              }), this.name = oT, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != ST ? (this.Gy = ST, this._scene = ST.pC(), ST.attachPostProcess(this), this._engine = this._scene.Zc(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : LT && (this._engine = LT, this._engine.postProcesses.push(this)), this._options = uT, this.renderTargetSamplingMode = DT || 1, this._reusable = cT || !1, this._textureType = rT, this._textureFormat = wT, this._shaderLanguage = mT || 0, this._samplers = BT || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = IT, this._vertexUrl = AT, this._parameters = XT || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = vT || [], this._indexParameters = gT, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const oT = [];
              this._gatherImports(this._engine.isWebGPU && !TT.ForceGLSL, oT), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(hT, KT, eT, oT)
            }
          }
          _gatherImports() {
            let TT = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? TT.push(Promise.all([IT.e(356).then((() => IT(60255)))])) : TT.push(Promise.all([IT.e(345).then((() => IT(60015)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          Zc() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(TT) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = TT, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new zT.f(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              iT = arguments.length > 3 ? arguments[3] : void 0,
              zT = arguments.length > 4 ? arguments[4] : void 0,
              kT = arguments.length > 5 ? arguments[5] : void 0,
              WT = arguments.length > 6 ? arguments[6] : void 0,
              XT = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(TT, oT, IT, iT, zT, kT, WT, XT), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(TT, oT) {
            let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let zT = 0; zT < this._textureCache.length; zT++)
              if (this._textureCache[zT].texture.width === TT.width && this._textureCache[zT].texture.height === TT.height && this._textureCache[zT].postProcessChannel === IT && this._textureCache[zT].texture._generateDepthBuffer === oT.generateDepthBuffer && this._textureCache[zT].texture.samples === oT.samples) return this._textureCache[zT].texture;
            const iT = this._engine.createRenderTargetTexture(TT, oT);
            return this._textureCache.push({
              texture: iT,
              postProcessChannel: IT,
              lastUsedRenderId: -1
            }), iT
          }
          _flushTextureCache() {
            const TT = this._renderId;
            for (let oT = this._textureCache.length - 1; oT >= 0; oT--)
              if (TT - this._textureCache[oT].lastUsedRenderId > 100) {
                let TT = !1;
                for (let IT = 0; IT < this._textures.length; IT++)
                  if (this._textures.data[IT] === this._textureCache[oT].texture) {
                    TT = !0;
                    break
                  } TT || (this._textureCache[oT].texture.dispose(), this._textureCache.splice(oT, 1))
              }
          }
          resize(TT, oT) {
            let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = TT, this.height = oT;
            let kT = null;
            if (IT)
              for (let BT = 0; BT < IT._postProcesses.length; BT++)
                if (null !== IT._postProcesses[BT]) {
                  kT = IT._postProcesses[BT];
                  break
                } const WT = {
                width: this.width,
                height: this.height
              },
              XT = {
                generateMipMaps: iT,
                generateDepthBuffer: zT || kT === this,
                generateStencilBuffer: (zT || kT === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(WT, XT, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(WT, XT, 1)), this._texelSize.S_(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let TT;
            if (this._shareOutputWithPostProcess) TT = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) TT = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let oT;
              TT = this.inputTexture;
              for (let IT = 0; IT < this._textureCache.length; IT++)
                if (this._textureCache[IT].texture === TT) {
                  oT = this._textureCache[IT];
                  break
                } oT && (oT.lastUsedRenderId = this._renderId)
            }
            return TT
          }
          activate(TT) {
            let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              IT = arguments.length > 2 ? arguments[2] : void 0;
            const iT = null === TT || void 0 !== TT.cameraRigMode ? TT || this.Gy : null,
              zT = iT?.pC() ?? TT,
              kT = zT.Zc(),
              WT = kT.getCaps().maxTextureSize,
              XT = (oT ? oT.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              BT = (oT ? oT.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let FT = this._options.width || XT,
              ST = this._options.height || BT;
            const DT = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let xT = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const TT = kT.currentViewport;
                TT && (FT *= TT.width, ST *= TT.height)
              }(DT || this.alwaysForcePOT) && (this._options.width || (FT = kT.needPOTTextures ? (0, LT.e)(FT, WT, this.scaleMode) : FT), this._options.height || (ST = kT.needPOTTextures ? (0, LT.e)(ST, WT, this.scaleMode) : ST)), this.width === FT && this.height === ST && (xT = this._getTarget()) || this.resize(FT, ST, iT, DT, IT), this._textures.forEach((TT => {
                TT.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(TT, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return xT || (xT = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.S_(XT / FT, BT / ST), this._engine.bindFramebuffer(xT, 0, XT, BT, this.forceFullscreenViewport)) : (this._scaleRatio.S_(1, 1), this._engine.bindFramebuffer(xT, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(iT), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : zT.clearColor, zT._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), xT
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
            let TT;
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.Zc().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), TT = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", TT?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
          }
          _disposeTextureCache() {
            for (let TT = this._textureCache.length - 1; TT >= 0; TT--) this._textureCache[TT].texture.dispose();
            this._textureCache.length = 0
          }
          setPrePassRenderer(TT) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = TT.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
          }
          dispose(TT) {
            let oT;
            if (TT = TT || this.Gy, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (oT = this._parentContainer.postProcesses.indexOf(this), oT > -1 && this._parentContainer.postProcesses.splice(oT, 1), this._parentContainer = null), oT = this._engine.postProcesses.indexOf(this), -1 !== oT && this._engine.postProcesses.splice(oT, 1), this.bC.notifyObservers(), TT) {
              if (TT.detachPostProcess(this), oT = TT._postProcesses.indexOf(this), 0 === oT && TT._postProcesses.length > 0) {
                const TT = this.Gy._getFirstPostProcess();
                TT && TT.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const TT = FT.c.Serialize(this),
              oT = this.getCamera() || this._scene && this._scene.activeCamera;
            return TT.customType = "BABYLON." + this.getClassName(), TT.cameraId = oT ? oT.id : null, TT.reusable = this._reusable, TT.textureType = this._textureType, TT.fragmentUrl = this._fragmentUrl, TT.parameters = this._parameters, TT.samplers = this._samplers, TT.uniformBuffers = this._uniformBuffers, TT.options = this._options, TT.defines = this._postProcessDefines, TT.textureFormat = this._textureFormat, TT.vertexUrl = this._vertexUrl, TT.indexParameters = this._indexParameters, TT
          }
          clone() {
            const oT = this.serialize();
            oT._engine = this._engine, oT.cameraId = null;
            const IT = TT.Parse(oT, this._scene, "");
            return IT ? (IT.onActivateObservable = this.onActivateObservable.clone(), IT.onSizeChangedObservable = this.onSizeChangedObservable.clone(), IT.onApplyObservable = this.onApplyObservable.clone(), IT.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), IT.onAfterRenderObservable = this.onAfterRenderObservable.clone(), IT._prePassEffectConfiguration = this._prePassEffectConfiguration, IT) : null
          }
          static Parse(TT, oT, IT) {
            const iT = (0, ST.d)(TT.customType);
            if (!iT || !iT._Parse) return null;
            const zT = oT ? oT.getCameraById(TT.cameraId) : null;
            return iT._Parse(TT, zT, oT, IT)
          }
          static _Parse(oT, IT, iT, zT) {
            return FT.c.Parse((() => new TT(oT.name, oT.fragmentUrl, oT.parameters, oT.samplers, oT.options, IT, oT.renderTargetSamplingMode, oT._engine, oT.reusable, oT.defines, oT.textureType, oT.vertexUrl, oT.indexParameters, !1, oT.textureFormat)), oT, iT, zT)
          }
        }, (() => {
          const IT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          oT = [(0, BT.P)()], XT = [(0, BT.P)()], DT = [(0, BT.P)()], cT = [(0, BT.P)()], KT = [(0, BT.P)()], rT = [(0, BT.u)()], AT = [(0, BT.P)()], gT = [(0, BT.P)()], hT = [(0, BT.P)()], wT = [(0, BT.P)()], mT = [(0, BT.P)()], eT = [(0, BT.P)()], RT = [(0, BT.P)()], uT = [(0, BT.P)()], vT = [(0, BT.P)("samples")], ET = [(0, BT.P)()], (0, iT.h)(TT, null, XT, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: TT => "name" in TT,
              get: TT => TT.name
            },
            metadata: IT
          }, null, fT), (0, iT.h)(TT, null, hT, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: TT => "alphaMode" in TT,
              get: TT => TT.alphaMode
            },
            metadata: IT
          }, null, fT), (0, iT.h)(null, null, oT, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: TT => "uniqueId" in TT,
              get: TT => TT.uniqueId,
              set: (TT, oT) => {
                TT.uniqueId = oT
              }
            },
            metadata: IT
          }, CT, jT), (0, iT.h)(null, null, DT, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: TT => "width" in TT,
              get: TT => TT.width,
              set: (TT, oT) => {
                TT.width = oT
              }
            },
            metadata: IT
          }, JT, UT), (0, iT.h)(null, null, cT, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: TT => "height" in TT,
              get: TT => TT.height,
              set: (TT, oT) => {
                TT.height = oT
              }
            },
            metadata: IT
          }, aT, YT), (0, iT.h)(null, null, KT, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: TT => "renderTargetSamplingMode" in TT,
              get: TT => TT.renderTargetSamplingMode,
              set: (TT, oT) => {
                TT.renderTargetSamplingMode = oT
              }
            },
            metadata: IT
          }, QT, OT), (0, iT.h)(null, null, rT, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "clearColor" in TT,
              get: TT => TT.clearColor,
              set: (TT, oT) => {
                TT.clearColor = oT
              }
            },
            metadata: IT
          }, HT, nT), (0, iT.h)(null, null, AT, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: TT => "autoClear" in TT,
              get: TT => TT.autoClear,
              set: (TT, oT) => {
                TT.autoClear = oT
              }
            },
            metadata: IT
          }, qT, ZT), (0, iT.h)(null, null, gT, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: TT => "forceAutoClearInAlphaMode" in TT,
              get: TT => TT.forceAutoClearInAlphaMode,
              set: (TT, oT) => {
                TT.forceAutoClearInAlphaMode = oT
              }
            },
            metadata: IT
          }, lT, sT), (0, iT.h)(null, null, wT, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: TT => "alphaConstants" in TT,
              get: TT => TT.alphaConstants,
              set: (TT, oT) => {
                TT.alphaConstants = oT
              }
            },
            metadata: IT
          }, tT, GT), (0, iT.h)(null, null, mT, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: TT => "enablePixelPerfectMode" in TT,
              get: TT => TT.enablePixelPerfectMode,
              set: (TT, oT) => {
                TT.enablePixelPerfectMode = oT
              }
            },
            metadata: IT
          }, pT, bT), (0, iT.h)(null, null, eT, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: TT => "forceFullscreenViewport" in TT,
              get: TT => TT.forceFullscreenViewport,
              set: (TT, oT) => {
                TT.forceFullscreenViewport = oT
              }
            },
            metadata: IT
          }, yT, NT), (0, iT.h)(null, null, RT, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: TT => "scaleMode" in TT,
              get: TT => TT.scaleMode,
              set: (TT, oT) => {
                TT.scaleMode = oT
              }
            },
            metadata: IT
          }, PT, dT), (0, iT.h)(null, null, uT, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: TT => "alwaysForcePOT" in TT,
              get: TT => TT.alwaysForcePOT,
              set: (TT, oT) => {
                TT.alwaysForcePOT = oT
              }
            },
            metadata: IT
          }, VT, To), (0, iT.h)(null, null, vT, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: TT => "_samples" in TT,
              get: TT => TT._samples,
              set: (TT, oT) => {
                TT._samples = oT
              }
            },
            metadata: IT
          }, oo, Io), (0, iT.h)(null, null, ET, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: TT => "adaptScaleToCurrentViewport" in TT,
              get: TT => TT.adaptScaleToCurrentViewport,
              set: (TT, oT) => {
                TT.adaptScaleToCurrentViewport = oT
              }
            },
            metadata: IT
          }, io, zo), IT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IT
          })
        })(), TT
      })(),
      KT = !1;

    function MT() {
      KT || (KT = !0, DT.b.prototype.setTextureFromPostProcess = function(TT, oT, IT) {
        let iT = null;
        oT && (oT._forcedOutputTexture ? iT = oT._forcedOutputTexture : oT._textures.data[oT._currentRenderTextureInd] && (iT = oT._textures.data[oT._currentRenderTextureInd])), this._bindTexture(TT, iT?.texture ?? null, IT)
      }, DT.b.prototype.setTextureFromPostProcessOutput = function(TT, oT, IT) {
        this._bindTexture(TT, oT?._outputTexture?.texture ?? null, IT)
      }, XT.c.prototype.setTextureFromPostProcess = function(TT, oT) {
        this._engine.setTextureFromPostProcess(this._samplers[TT], oT, TT)
      }, XT.c.prototype.setTextureFromPostProcessOutput = function(TT, oT) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[TT], oT, TT)
      }, (0, ST.h)("BABYLON.PostProcess", cT))
    }
  },
  40637: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => WT,
      e: () => kT
    });
    var iT = IT(40626),
      zT = IT(36146);
    class kT extends iT.d {
      _gatherImports(TT, oT) {
        TT ? (this._webGPUReady = !0, oT.push(Promise.all([IT.e(363).then((() => IT(60313)))]))) : oT.push(Promise.all([IT.e(364).then((() => IT(60316)))])), super._gatherImports(TT, oT)
      }
      constructor(TT) {
        let oT = arguments.length > 2 ? arguments[2] : void 0;
        const IT = {
          name: TT,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || zT.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: kT.FragmentUrl,
          ...oT
        };
        IT.engine || (IT.engine = zT.d.LastCreatedEngine), super(IT)
      }
    }
    kT.FragmentUrl = "pass";
    class WT extends iT.d {
      _gatherImports(TT, oT) {
        TT ? (this._webGPUReady = !0, oT.push(Promise.all([IT.e(365).then((() => IT(60323)))]))) : oT.push(Promise.all([IT.e(366).then((() => IT(60330)))])), super._gatherImports(TT, oT)
      }
      constructor(TT) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: TT,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || zT.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: WT.FragmentUrl,
          defines: "#define POSITIVEX"
        }), this._face = 0
      }
      get face() {
        return this._face
      }
      set face(TT) {
        if (!(TT < 0 || TT > 5)) switch (this._face = TT, this._face) {
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
    WT.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);