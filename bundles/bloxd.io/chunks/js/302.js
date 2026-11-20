export const id = 302;
export const ids = [302];
export const modules = {
  41380: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => NT
    });
    var lT = cT(36932),
      MT = cT(36892),
      KT = cT(40111),
      OT = cT(39791),
      yT = cT(39549),
      fT = cT(38512),
      xT = cT(39770),
      IT = cT(39799),
      AT = cT(36910),
      CT = cT(39514),
      jT = cT(39741),
      vT = cT(39829);
    class tT {
      get renderList() {
        return this._renderList
      }
      set renderList(TT) {
        this._renderList !== TT && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), TT && (this._unObserveRenderList = (0, AT.g)(TT, this._renderListHasChanged)), this._renderList = TT)
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
              const kT = this._renderPassIds[TT];
              this._engine._renderPassNames[kT] = `${this._name}#${TT}`
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
      setMaterialForRendering(TT, kT) {
        let cT;
        cT = Array.isArray(TT) ? TT : [TT];
        for (let lT = 0; lT < cT.length; ++lT)
          for (let TT = 0; TT < this.options.numPasses; ++TT) {
            let MT = cT[lT];
            cT[lT].aJ && (MT = cT[lT].hlT), MT.setMaterialForRenderPass(this._renderPassIds[TT], void 0 !== kT ? Array.isArray(kT) ? kT[TT] : kT : void 0)
          }
      }
      _freezeActiveMeshes(TT) {
        this._freezeActiveMeshesCancel = (0, CT.g)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, TT)
            for (let TT = 0; TT < this._activeMeshes.length; TT++) this._activeMeshes.data[TT]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((TT, kT) => {
          this._freezeActiveMeshesCancel = null, kT ? (fT.e.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), TT && fT.e.Error(TT)) : (fT.e.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), TT && (fT.e.Error(TT), TT.stack && fT.e.Error(TT.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let TT = 0; TT < this._activeMeshes.length; TT++) this._activeMeshes.data[TT]._unFreeze();
        this._isFrozen = !1
      }
      constructor(TT, kT, cT) {
        this._unObserveRenderList = null, this._renderListHasChanged = (TT, kT) => {
          const cT = this._renderList ? this._renderList.length : 0;
          if (0 === kT && cT > 0 || 0 === cT)
            for (const lT of this._scene.meshes) lT._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new lT.b, this.onAfterRenderObservable = new lT.b, this.onBeforeRenderingManagerRenderObservable = new lT.b, this.onAfterRenderingManagerRenderObservable = new lT.b, this.onInitRenderingObservable = new lT.b, this.onFinishRenderingObservable = new lT.b, this.onFastPathRenderObservable = new lT.b, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new jT.g(256), this._activeBoundingBoxes = new jT.g(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = TT, this._scene = kT, this._engine = this._scene.Dv(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...cT
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new IT.c(kT), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const TT of this._scene.lights) TT.getTypeID() === vT.b.LIGHTTYPEID_CLUSTERED_CONTAINER && TT.isSupported && TT._updateBatches(this.activeCamera).render()
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
      _createSceneUBO(TT, kT) {
        const cT = this._scene.Dv(),
          lT = new xT.b(cT, void 0, kT, TT, void 0, !1);
        return lT.addUniform("viewProjection", 16), kT && lT.addUniform("viewProjectionR", 16), lT.addUniform("view", 16), lT.addUniform("projection", 16), lT.addUniform("vEyePosition", 4), lT.addUniform("inverseProjection", 16), lT
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const TT = this._engine._currentRenderTarget,
          kT = !(!TT || !TT.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const TT = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${TT} for ${this.name}`, kT)), this._sceneUBOIsMultiview.push(kT)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== kT && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, kT), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = kT);
        const cT = this._sceneUBOs[this._currentSceneUBOIndex++];
        return cT.unbindEffect(), cT
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
      isReadyForRendering(TT, kT) {
        this.prepareRenderList(), this.initRender(TT, kT);
        const cT = this._checkReadiness();
        return this.finishRender(), cT
      }
      prepareRenderList() {
        const TT = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let kT = 0; kT < this._waitingRenderList.length; kT++) {
              const cT = this._waitingRenderList[kT],
                lT = TT.getMeshById(cT);
              lT && this.renderList.push(lT)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const TT = this._scene.meshes;
          for (let kT = 0; kT < TT.length; kT++) {
            const cT = TT[kT];
            this.renderListPredicate(cT) && this.renderList.push(cT)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(TT, kT) {
        const cT = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), cT && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(cT.getViewMatrix(), cT.getProjectionMatrix(!0)), this._scene._activeCamera = cT, this._engine.setViewport(cT.rigParent ? cT.rigParent.viewport : cT.viewport, TT, kT)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const TT = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (TT.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), TT._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== TT.activeCamera && TT.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), TT.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cT = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[TT], this.onBeforeRenderObservable.notifyObservers(TT);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(TT);
        else {
          const kT = this._prepareRenderingManager(TT),
            cT = this._scene.getOutlineRenderer?.(),
            lT = cT?.enabled;
          cT && (cT.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(TT), this._renderingManager.render(this.customRenderFunction, kT, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(TT), cT && (cT.enabled = lT)
        }
        kT || this.onAfterRenderObservable.notifyObservers(TT), this._engine.currentRenderPassId = cT
      }
      _checkReadiness() {
        const TT = this._scene,
          kT = this._engine.currentRenderPassId;
        let cT = !0;
        TT.getViewMatrix() || TT.updateTransformMatrix();
        const lT = this.options.numPasses;
        for (let MT = 0; MT < lT && cT; MT++) {
          const kT = this.renderList ? this.renderList : TT.frameGraph ? TT.meshes : TT.getActiveMeshes().data,
            KT = this.renderList || TT.frameGraph ? kT.length : TT.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[MT], this.onBeforeRenderObservable.notifyObservers(MT);
          let OT = null,
            yT = KT;
          this.getCustomRenderList && (OT = this.getCustomRenderList(MT, kT, KT), OT && (yT = OT.length)), OT || (OT = kT), this.options.doNotChangeAspectRatio || TT.updateTransformMatrix(!0);
          for (let TT = 0; TT < yT && cT; ++TT) {
            const kT = OT[TT];
            if (!kT.isEnabled() || kT.isBlocked || !kT.isVisible || !kT.kF) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(kT, this.refreshRate, !0)) {
                cT = !1;
                continue
              }
            } else if (!kT.isReady(!0)) {
              cT = !1;
              continue
            }
            let lT = kT._edgesRenderer,
              MT = kT.hasThinInstances;
            if (kT.aJ) {
              const TT = kT.hlT;
              TT.edgesShareWithInstances && TT._edgesRenderer?.isEnabled && (lT = TT._edgesRenderer, MT = !0)
            } else kT.tlT && kT.edgesShareWithInstances && (MT = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && lT?.isEnabled && (lT.isReady(MT) || (cT = !1))
          }
          if (this.renderParticles && TT.particlesEnabled) {
            const kT = this.particleSystemList || TT.lF;
            for (const TT of kT) TT.isReady() || (cT = !1)
          }
          if (this.renderSprites && TT.spritesEnabled) {
            const kT = this.spriteManagerList || TT.spriteManagers;
            if (kT)
              for (const lT of kT) TT.activeCamera && 0 === (lT.layerMask & TT.activeCamera.layerMask) || lT.isReady && !lT.isReady() && (cT = !1)
          }
          this.onAfterRenderObservable.notifyObservers(MT), lT > 1 && (TT.incrementRenderId(), TT.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = kT, cT
      }
      _prepareRenderingManager() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cT = this._scene;
        let lT, MT, KT = null;
        const OT = this.renderList ? this.renderList : cT.frameGraph ? cT.meshes : cT.getActiveMeshes().data,
          yT = this.renderList || cT.frameGraph ? OT.length : cT.getActiveMeshes().length;
        if (this.getCustomRenderList && (KT = this.getCustomRenderList(TT, OT, yT)), KT) lT = KT.length, MT = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !kT && !this._engine.isWebGPU) return OT;
          this._defaultRenderListPrepared = !0, KT = OT, lT = yT, MT = !this.renderList || this.forceLayerMaskCheck
        }
        const fT = cT.activeCamera,
          xT = this.cameraForLOD ?? fT,
          IT = cT.getBoundingBoxRenderer?.();
        if (cT._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && IT) {
            IT.reset();
            for (let TT = 0; TT < this._activeBoundingBoxes.length; TT++) {
              const kT = this._activeBoundingBoxes.data[TT];
              IT.renderList.push(kT)
            }
          }
          return KT
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), IT && IT.reset(), this.renderMeshes) {
          const TT = cT.getRenderId(),
            kT = cT.getFrameId();
          for (let OT = 0; OT < lT; OT++) {
            const lT = KT[OT];
            if (lT && !lT.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(lT, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!lT.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let KT, OT;
              if (xT) {
                const TT = lT._internalAbstractMeshDataInfo._currentLOD.get(xT);
                TT && TT[1] === kT ? KT = TT[0] : (KT = cT.customLODSelector ? cT.customLODSelector(lT, xT) : lT.getLOD(xT), TT ? (TT[0] = KT, TT[1] = kT) : lT._internalAbstractMeshDataInfo._currentLOD.set(xT, [KT, kT]))
              } else KT = lT;
              if (!KT) continue;
              if (KT !== lT && 0 !== KT.billboardMode && KT.computeWorldMatrix(), KT._preActivateForIntermediateRendering(TT), OT = !(!MT || !fT) && 0 === (lT.layerMask & fT.layerMask), lT.isEnabled() && lT.isVisible && lT.kF && !OT) {
                if (this._activeMeshes.push(lT), KT._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, KT !== lT && KT._activate(TT, !0), this.enableBoundingBoxRendering && IT && IT._preActiveMesh(lT), lT._activate(TT, !0) && lT.kF.length) {
                  lT.aJ ? lT._internalAbstractMeshDataInfo._actAsRegularMesh && (KT = lT) : KT._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, KT._internalAbstractMeshDataInfo._isActiveIntermediate = !0, cT._prepareSkeleton(KT);
                  for (let TT = 0; TT < KT.kF.length; TT++) {
                    const kT = KT.kF[TT];
                    this.enableBoundingBoxRendering && IT && IT._evaluateSubMesh(lT, kT), this._renderingManager.dispatch(kT, KT)
                  }
                }
                lT._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && IT && kT)
          for (let AT = 0; AT < IT.renderList.length; AT++) {
            const TT = IT.renderList.data[AT];
            this._activeBoundingBoxes.push(TT)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const TT = this.particleSystemList || cT.lF;
          for (let kT = 0; kT < TT.length; kT++) {
            const cT = TT[kT],
              lT = cT.emitter;
            cT.isStarted() && lT && (!lT.position || lT.isEnabled()) && this._renderingManager.dispatchParticles(cT)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return KT
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(TT, kT, cT, lT)
      }
      setRenderingAutoClearDepthStencil(TT, kT) {
        let cT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          lT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(TT, kT, cT, lT), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const TT = new tT(this.name, this._scene, this.options);
        return this.renderList && (TT.renderList = this.renderList.slice(0)), TT
      }
      dispose() {
        const TT = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          kT = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let cT = 0; cT < kT; cT++) {
          const kT = TT[cT];
          kT && void 0 !== kT.getMaterialForRenderPass(this.renderPassId) && kT.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const cT of this._sceneUBOs) cT.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === tT.REFRESHRATE_RENDER_ONCE && (this.refreshRate = tT.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    tT.REFRESHRATE_RENDER_ONCE = 0, tT.REFRESHRATE_RENDER_ONEVERYFRAME = 1, tT.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var hT = cT(39500);
    class NT extends KT.f {
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
      setMaterialForRendering(TT, kT) {
        this._objectRenderer.setMaterialForRendering(TT, kT)
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
        const kT = this.NJ();
        kT && kT.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(TT, kT, cT) {
        let OT, yT, xT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          IT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          AT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          CT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          jT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : KT.f.TRILINEAR_SAMPLINGMODE,
          vT = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          hT = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          NT = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          QT = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          ST = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          DT = arguments.length > 13 ? arguments[13] : void 0,
          aT = arguments.length > 14 ? arguments[14] : void 0,
          FT = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          rT = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          PT = !0,
          wT = !1;
        if ("object" === typeof xT) {
          const TT = xT;
          xT = !!TT.generateMipMaps, IT = TT.doNotChangeAspectRatio ?? !0, AT = TT.type ?? 0, CT = !!TT.isCube, jT = TT.samplingMode ?? KT.f.TRILINEAR_SAMPLINGMODE, vT = TT.generateDepthBuffer ?? !0, hT = !!TT.generateStencilBuffer, NT = !!TT.isMulti, QT = TT.format ?? 5, ST = !!TT.delayAllocation, DT = TT.samples, aT = TT.creationFlags, FT = !!TT.noColorAttachment, rT = !!TT.useSRGBBuffer, OT = TT.colorAttachment, PT = TT.gammaSpace ?? PT, yT = TT.existingObjectRenderer, wT = !!TT.enableClusteredLights
        }
        if (super(null, cT, !xT, void 0, jT, void 0, void 0, void 0, void 0, QT), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new lT.b, this.onAfterUnbindObservable = new lT.b, this.onClearObservable = new lT.b, this.onResizeObservable = new lT.b, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = MT.m.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(cT = this.NJ())) return;
        const mT = this.NJ().Dv();
        this._gammaSpace = PT, this._coordinatesMode = KT.f.PROJECTION_MODE, this.name = TT, this.isRenderTarget = !0, this._initialSizeParameter = kT, this._dontDisposeObjectRenderer = !!yT, this._processSizeParameter(kT), this._objectRenderer = yT ?? new tT(TT, cT, {
          numPasses: CT ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: IT,
          enableClusteredLights: wT
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const TT = this._scene;
          if (!this._disableEngineStages)
            for (const kT of TT._beforeRenderTargetClearStage) kT.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(mT) : this.skipInitialClear || mT.clear(this.clearColor ?? TT.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || TT.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const kT of TT._beforeRenderTargetDrawStage) kT.action(this, this._currentFaceIndex, this._currentLayer);
          mT._debugPushGroup && mT._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (mT._debugPopGroup && mT._debugPopGroup(), !this._disableEngineStages)
            for (const kT of this._scene._afterRenderTargetDrawStage) kT.action(this, this._currentFaceIndex, this._currentLayer);
          const TT = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const kT of this._scene._afterRenderTargetPostProcessStage) kT.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = TT), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), mT) : fT.e.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(mT) : this.skipInitialClear || mT.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = mT.onResizeObservable.add((() => {})), this._generateMipMaps = !!xT, this._doNotChangeAspectRatio = IT, NT || (this._renderTargetOptions = {
          generateMipMaps: xT,
          type: AT,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: vT,
          generateStencilBuffer: hT,
          samples: DT,
          creationFlags: aT,
          noColorAttachment: FT,
          useSRGBBuffer: rT,
          colorAttachment: OT,
          label: this.name
        }, this.samplingMode === KT.f.NEAREST_SAMPLINGMODE && (this.wrapU = KT.f.CLAMP_ADDRESSMODE, this.wrapV = KT.f.CLAMP_ADDRESSMODE), ST || (CT ? (this._renderTarget = cT.Dv().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = KT.f.INVCUBIC_MODE, this._textureMatrix = MT.d.Identity()) : this._renderTarget = cT.Dv().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== DT && (this.samples = DT)))
      }
      createDepthStencilTexture() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          KT = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(TT, kT, cT, lT, MT, KT)
      }
      _processSizeParameter(TT) {
        if (TT.ratio) {
          this._sizeRatio = TT.ratio;
          const kT = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(kT.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(kT.getRenderHeight(), this._sizeRatio)
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
          const TT = this.NJ();
          if (!TT) return;
          this._postProcessManager = new OT.b(TT), this._postProcesses = new Array
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
        const kT = this._postProcesses.indexOf(TT); - 1 !== kT && (this._postProcesses.splice(kT, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
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
        const kT = this._size.depth;
        return kT || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(TT) {
        const kT = Math.max(1, this.getRenderSize() * TT);
        this.resize(kT)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(TT) {
        const kT = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const cT = this.NJ();
        cT && (this._processSizeParameter(TT), this._renderTarget = kT ? cT.Dv().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : cT.Dv().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(TT, kT)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => cT(41386))).then((TT => this._dumpTools = TT))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const TT = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), TT
      }
      _render() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cT = this.NJ();
        if (!cT) return;
        void 0 !== this.useCameraPostProcesses && (TT = this.useCameraPostProcesses);
        const lT = cT.Dv();
        if (lT._debugPushGroup && lT._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let MT = 0; MT < 6; MT++) this._renderToTarget(MT, TT, kT), cT.incrementRenderId(), cT.resetCachedMaterial();
          else this._renderToTarget(0, TT, kT);
        else
          for (let MT = 0; MT < this.getRenderLayers(); MT++) this._renderToTarget(0, TT, kT, MT), cT.incrementRenderId(), cT.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), lT._debugPopGroup && lT._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(TT, kT) {
        const cT = TT * kT,
          lT = (0, yT.j)(cT + 16384 / (128 + cT));
        return Math.min((0, yT.b)(TT), lT)
      }
      _bindFrameBuffer() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const cT = this.NJ();
        if (!cT) return;
        const lT = cT.Dv();
        this._renderTarget && lT.bindFramebuffer(this._renderTarget, this.isCube ? TT : void 0, void 0, void 0, this.ignoreCameraViewport, 0, kT)
      }
      _unbindFrameBuffer(TT, kT) {
        this._renderTarget && TT.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(kT)
        }))
      }
      _prepareFrame(TT, kT, cT, lT) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(kT, cT) : lT && TT.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(kT, cT)
      }
      _renderToTarget(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const MT = this.NJ();
        if (!MT) return;
        const KT = MT.Dv();
        this._currentFaceIndex = TT, this._currentLayer = lT, this._currentUseCameraPostProcess = kT, this._currentDumpForDebug = cT, this._prepareFrame(MT, TT, lT, kT), this._objectRenderer.render(TT + lT, !0), this._unbindFrameBuffer(KT, TT), this._texture && this.isCube && 5 === TT && KT.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(TT, kT, cT, lT)
      }
      setRenderingAutoClearDepthStencil(TT, kT) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(TT, kT)
      }
      clone() {
        const TT = this.getSize(),
          kT = new NT(this.name, TT, this.NJ(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return kT.hasAlpha = this.hasAlpha, kT.level = this.level, kT.coordinatesMode = this.coordinatesMode, this.renderList && (kT.renderList = this.renderList.slice(0)), kT
      }
      serialize() {
        if (!this.name) return null;
        const TT = super.serialize();
        if (TT.renderTargetSize = this.getRenderSize(), TT.renderList = [], this.renderList)
          for (let kT = 0; kT < this.renderList.length; kT++) TT.renderList.push(this.renderList[kT].id);
        return TT
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.NJ().Dv().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const TT = this.NJ();
        if (!TT) return;
        let kT = TT.customRenderTargets.indexOf(this);
        kT >= 0 && TT.customRenderTargets.splice(kT, 1);
        for (const cT of TT.cameras) kT = cT.customRenderTargets.indexOf(this), kT >= 0 && cT.customRenderTargets.splice(kT, 1);
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
    NT.REFRESHRATE_RENDER_ONCE = tT.REFRESHRATE_RENDER_ONCE, NT.REFRESHRATE_RENDER_ONEVERYFRAME = tT.REFRESHRATE_RENDER_ONEVERYFRAME, NT.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = tT.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(NT.prototype, "noPrePassRenderer") || Object.defineProperty(NT.prototype, "noPrePassRenderer", (0, hT.d)("RenderTargetTexture", "noPrePassRenderer"))
  },
  41359: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => xT,
      g: () => IT
    });
    var lT = cT(39782),
      MT = cT(37939),
      KT = cT(36932),
      OT = cT(39467),
      yT = cT(39936);
    const fT = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class xT {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fT;
        this._fullscreenViewport = new MT.e(0, 0, 1, 1);
        const cT = kT.positions ?? fT.positions,
          KT = kT.indices ?? fT.indices;
        this.engine = TT, this._vertexBuffers = {
          [lT.l.PositionKind]: new lT.l(TT, cT, lT.l.PositionKind, !1, !1, 2)
        }, this._indexBuffer = TT.createIndexBuffer(KT), this._indexBufferLength = KT.length, this._onContextRestoredObserver = TT.onContextRestoredObservable.add((() => {
          this._indexBuffer = TT.createIndexBuffer(KT);
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
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = kT, this.engine.stencilState.stencilTest = cT, this.engine.enableEffect(TT.drawWrapper), this.bindBuffers(TT.effect), TT.onApplyObservable.notifyObservers({})
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
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!TT.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const cT = null === kT ? null : this._isRenderTargetTexture(kT) ? kT.renderTarget : kT;
        cT && this.engine.bindFramebuffer(cT), this.applyEffectWrapper(TT), this.draw(), cT && this.engine.unBindFramebuffer(cT), this.restoreStates()
      }
      dispose() {
        const TT = this._vertexBuffers[lT.l.PositionKind];
        TT && (TT.dispose(), delete this._vertexBuffers[lT.l.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class IT {
      static RegisterShaderCodeProcessing(TT, kT) {
        kT ? IT._CustomShaderCodeProcessing[TT ?? ""] = kT : delete IT._CustomShaderCodeProcessing[TT ?? ""]
      }
      static _GetShaderCodeProcessing(TT) {
        return IT._CustomShaderCodeProcessing[TT] ?? IT._CustomShaderCodeProcessing[""]
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
        this.alphaMode = 0, this.onEffectCreatedObservable = new KT.b(void 0, !0), this.onApplyObservable = new KT.b, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
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
        }))), this._drawWrapper = new yT.b(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const kT = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, kT, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          lT = arguments.length > 2 ? arguments[2] : void 0,
          MT = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, MT && this._importPromises.push(...MT);
        const KT = this.options.engine.isWebGPU && !IT.ForceGLSL;
        this._gatherImports(KT, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(KT && this._webGPUReady ? cT.e(357).then((() => cT(60780))) : cT.e(346).then((() => cT(60569)))), void 0 !== lT && lT(KT, this._importPromises), KT && this._webGPUReady && (this.options.shaderLanguage = 1), TT || this.updateEffect(kT)
      }
      updateEffect() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          lT = arguments.length > 3 ? arguments[3] : void 0,
          MT = arguments.length > 4 ? arguments[4] : void 0,
          KT = arguments.length > 5 ? arguments[5] : void 0,
          yT = arguments.length > 6 ? arguments[6] : void 0,
          fT = arguments.length > 7 ? arguments[7] : void 0;
        const xT = IT._GetShaderCodeProcessing(this.name);
        if (xT?.defineCustomBindings) {
          const lT = kT?.slice() ?? [];
          lT.push(...this.options.uniforms);
          const MT = cT?.slice() ?? [];
          MT.push(...this.options.samplers), TT = xT.defineCustomBindings(this.name, TT, lT, MT), kT = lT, cT = MT
        }
        this.options.defines = TT || "";
        const AT = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let CT;
        CT = this.options.extraInitializationsAsync ? async () => {
          await (AT?.()), await this.options.extraInitializationsAsync()
        }: AT, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: yT ?? this._shaderPath.vertex,
          fragment: fT ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: kT || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: cT || this.options.samplers,
          defines: null !== TT ? TT : "",
          fallbacks: null,
          onCompiled: MT ?? this.options.onCompiled,
          onError: KT ?? null,
          indexParameters: lT || this.options.indexParameters,
          processCodeAfterIncludes: xT?.processCodeAfterIncludes ? (TT, kT) => xT.processCodeAfterIncludes(this.name, TT, kT) : null,
          processFinalCode: xT?.processFinalCode ? (TT, kT) => xT.processFinalCode(this.name, TT, kT) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: CT
        }, this.options.engine) : this._drawWrapper.effect = new OT.e(this._shaderPath, this.options.attributeNames, kT || this.options.uniforms, cT || this.options.samplerNames, this.options.engine, TT, void 0, MT || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, CT), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !TT && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), IT._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.Dv().onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    IT.ForceGLSL = !1, IT._CustomShaderCodeProcessing = {}
  },
  41386: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      Dispose: () => QT,
      DumpData: () => NT,
      DumpDataAsync: () => hT,
      DumpFramebuffer: () => tT,
      DumpTools: () => ST,
      EncodeImageAsync: () => vT,
      RegisterDumpTools: () => aT
    });
    var lT = cT(39620),
      MT = cT(41359),
      KT = cT(39727),
      OT = cT(36937),
      yT = cT(36925),
      fT = cT(38512),
      xT = cT(39687),
      IT = cT(39624);
    let AT = null;
    async function CT() {
      return AT || (AT = async function() {
        const TT = yT.d.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        TT instanceof OffscreenCanvas && fT.e.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: kT
        } = await Promise.resolve().then((() => cT(39463)));
        if (!kT.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const lT = new kT(TT, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        yT.d.Instances.pop(), yT.d.OnEnginesDisposedObservable.add((TT => {
          lT && TT !== lT && !lT.VkT && 0 === yT.d.Instances.length && QT()
        })), lT.getCaps().parallelShaderCompile = void 0;
        const KT = new MT.c(lT),
          {
            passPixelShader: OT
          } = await cT.e(365).then((() => cT(60844))),
          xT = new MT.g({
            engine: lT,
            name: OT.name,
            fragmentShader: OT.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: TT,
          dumpEngine: {
            engine: lT,
            renderer: KT,
            wrapper: xT
          }
        }
      }()), await AT
    }
    let jT = (() => {
      var TT;
      let kT, cT = [];
      return TT = class {
        static async EncodeImageAsync(TT, kT, cT, lT, MT, OT) {
          const yT = await CT(),
            fT = yT.dumpEngine;
          fT.engine.setSize(kT, cT, !0);
          const xT = fT.engine.createRawTexture(TT, kT, cT, 5, !1, !MT, 1);
          return fT.renderer.setViewport(), fT.renderer.applyEffectWrapper(fT.wrapper), fT.wrapper.effect._bindTexture("textureSampler", xT), fT.renderer.draw(), xT.dispose(), await new Promise(((TT, kT) => {
            KT.h.ToBlob(yT.canvas, (cT => {
              cT ? TT(cT) : kT(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), lT, OT)
          }))
        }
      }, (() => {
        const MT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        kT = [IT.e], (0, lT.e)(TT, null, kT, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: TT => "EncodeImageAsync" in TT,
            get: TT => TT.EncodeImageAsync
          },
          metadata: MT
        }, null, cT), MT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: MT
        }), (0, lT.h)(TT, cT)
      })(), TT
    })();
    const vT = jT.EncodeImageAsync;
    async function tT(TT, kT, cT, lT) {
      let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        KT = arguments.length > 5 ? arguments[5] : void 0,
        OT = arguments.length > 6 ? arguments[6] : void 0;
      const yT = await cT.readPixels(0, 0, TT, kT);
      NT(TT, kT, new Uint8Array(yT.buffer), lT, MT, KT, !0, void 0, OT)
    }
    async function hT(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        MT = arguments.length > 4 ? arguments[4] : void 0,
        yT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        IT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        AT = arguments.length > 7 ? arguments[7] : void 0;
      if (cT instanceof Float32Array) {
        const TT = new Uint8Array(cT.length);
        let kT = cT.length;
        for (; kT--;) {
          const lT = cT[kT];
          TT[kT] = Math.round(255 * (0, OT.Clamp)(lT))
        }
        cT = TT
      }
      const CT = await jT.EncodeImageAsync(cT, TT, kT, lT, yT, AT);
      void 0 !== MT && KT.h.DownloadBlob(CT, MT), CT.type !== lT && fT.e.Warn(`DumpData: The requested mimeType '${lT}' is not supported. The result has mimeType '${CT.type}' instead.`);
      const vT = await CT.arrayBuffer();
      return IT ? vT : `data:${lT};base64,${(0,xT.k)(vT)}`
    }

    function NT(TT, kT, cT, lT) {
      let MT = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== MT || lT || (MT = ""), hT(TT, kT, cT, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", MT, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((TT => {
        lT && lT(TT)
      }))
    }

    function QT() {
      AT && (AT?.then((TT => {
        TT.canvas instanceof HTMLCanvasElement && TT.canvas.remove(), TT.dumpEngine && (TT.dumpEngine.engine.dispose(), TT.dumpEngine.renderer.dispose(), TT.dumpEngine.wrapper.dispose())
      })), AT = null)
    }
    const ST = {
      DumpData: NT,
      DumpDataAsync: hT,
      DumpFramebuffer: tT,
      Dispose: QT
    };
    let DT = !1;

    function aT() {
      if (DT) return;
      DT = !0;
      KT.h.DumpData = NT, KT.h.DumpDataAsync = hT, KT.h.DumpFramebuffer = tT
    }
  },
  41377: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => jT,
      c: () => vT,
      f: () => tT
    });
    var lT = cT(40111),
      MT = cT(41380),
      KT = cT(39620),
      OT = cT(41357),
      yT = cT(39645),
      fT = cT(41382),
      xT = cT(39624);
    class IT extends OT.e {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(TT, kT) {
        let cT = arguments.length > 4 ? arguments[4] : void 0;
        const lT = {
          size: "number" === typeof kT ? kT : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: cT,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...kT
        };
        super(TT, fT.h.FragmentUrl, {
          effectWrapper: "number" !== typeof kT && kT.effectWrapper ? void 0 : new fT.h(TT, cT, lT),
          ...lT
        })
      }
      static _Parse(TT, kT, cT, lT) {
        return yT.d.Parse((() => new IT(TT.name, TT.options, kT, TT.renderTargetSamplingMode, TT._engine, TT.reusable)), TT, cT, lT)
      }
    }(() => {
      var TT;
      let kT, cT = OT.e,
        lT = [];
      TT = class extends cT {
        get face() {
          return this._effectWrapper.face
        }
        set face(TT) {
          this._effectWrapper.face = TT
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(TT, kT) {
          let cT = arguments.length > 4 ? arguments[4] : void 0;
          const MT = {
            size: "number" === typeof kT ? kT : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: cT,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...kT
          };
          super(TT, fT.h.FragmentUrl, {
            effectWrapper: "number" !== typeof kT && kT.effectWrapper ? void 0 : new fT.e(TT, cT, MT),
            ...MT
          }), (0, KT.h)(this, lT)
        }
        static _Parse(kT, cT, lT, MT) {
          return yT.d.Parse((() => new TT(kT.name, kT.options, cT, kT.renderTargetSamplingMode, kT._engine, kT.reusable)), kT, lT, MT)
        }
      }, (() => {
        const MT = "function" === typeof Symbol && Symbol.metadata ? Object.create(cT[Symbol.metadata] ?? null) : void 0;
        kT = [(0, xT.J)()], (0, KT.e)(TT, null, kT, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: TT => "face" in TT,
            get: TT => TT.face
          },
          metadata: MT
        }, null, lT), MT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: MT
        })
      })()
    })();
    var AT = cT(36937),
      CT = cT(39694);

    function jT(TT, kT, cT, lT, MT, KT, yT, fT) {
      const xT = kT.Dv();
      return kT.isReady = !1, MT = MT ?? kT.samplingMode, lT = lT ?? kT.type, KT = KT ?? kT.format, yT = yT ?? kT.width, fT = fT ?? kT.height, -1 === lT && (lT = 0), new Promise((IT => {
        const AT = new OT.e("postprocess", TT, null, null, 1, null, MT, xT, !1, void 0, lT, void 0, null, !1, KT);
        AT.externalTextureSamplerBinding = !0;
        const CT = xT.createRenderTargetTexture({
          width: yT,
          height: fT
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: MT,
          type: lT,
          format: KT
        });
        AT.onEffectCreatedObservable.addOnce((TT => {
          TT.executeWhenCompiled((() => {
            AT.onApply = TT => {
              TT._bindTexture("textureSampler", kT), TT.setFloat2("scale", 1, 1)
            }, cT.postProcessManager.directRender([AT], CT, !0), xT.restoreDefaultFramebuffer(), xT._releaseTexture(kT), AT && AT.dispose(), CT._swapAndDie(kT), kT.type = lT, kT.format = 5, kT.isReady = !0, IT(kT)
          }))
        }))
      }))
    }
    async function vT(TT, kT, KT) {
      let yT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        fT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        xT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        IT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(TT) {
        if (TT.isReady()) return;
        if (TT.loadingError) throw new Error(TT.errorObject?.message || `Texture ${TT.name} errored while loading.`);
        const kT = TT.onLoadObservable;
        if (kT) return await new Promise((TT => kT.addOnce((() => TT()))));
        const cT = TT._texture?.onLoadedObservable;
        if (cT) return await new Promise((TT => cT.addOnce((() => TT()))));
        throw new Error(`Cannot determine readiness of texture ${TT.name}.`)
      }(TT);
      const CT = TT.getInternalTexture(),
        jT = TT.is3D || !!CT?.is3D,
        {
          width: vT,
          height: tT
        } = TT.getSize(),
        hT = kT ?? vT,
        NT = KT ?? tT;
      if (xT || jT || function(TT) {
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
        }(TT.textureFormat) || hT !== vT || NT !== tT) {
        if (TT.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${xT?"RTT":"compression"} is not supported.`);
        return await async function(TT, kT, KT, yT, fT) {
          let xT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const IT = TT.NJ(),
            AT = IT.Dv(),
            CT = TT.getInternalTexture(),
            jT = TT.is3D || !!CT?.is3D;
          let vT;
          if (AT.isWebGPU ? jT ? await cT.e(361).then((() => cT(60821))) : TT.isCube ? await cT.e(362).then((() => cT(60828))) : await cT.e(363).then((() => cT(60830))) : jT ? await cT.e(358).then((() => cT(60800))) : TT.isCube ? await cT.e(359).then((() => cT(60808))) : await cT.e(360).then((() => cT(60816))), jT) vT = new OT.e("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: lT.f.NEAREST_NEAREST_MIPNEAREST,
            engine: AT,
            shaderLanguage: AT.isWebGPU ? 1 : 0
          });
          else if (TT.isCube) {
            const TT = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            vT = new OT.e("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: lT.f.NEAREST_NEAREST_MIPNEAREST,
              engine: AT,
              defines: TT[yT],
              shaderLanguage: AT.isWebGPU ? 1 : 0
            })
          } else vT = new OT.e("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: lT.f.NEAREST_NEAREST_MIPNEAREST,
            engine: AT,
            shaderLanguage: AT.isWebGPU ? 1 : 0
          });
          await new Promise((TT => {
            vT.onEffectCreatedObservable.addOnce((kT => {
              kT.executeWhenCompiled((() => {
                TT(0)
              }))
            }))
          }));
          const tT = new MT.c("temp", {
            width: kT,
            height: KT
          }, IT, !1);
          vT.onApply = function(kT) {
            kT.setTexture("textureSampler", TT), kT.setFloat("lod", fT), kT.setInt("gamma", TT.gammaSpace ? 1 : 0), jT && kT.setFloat("slice", xT)
          };
          try {
            if (tT.renderTarget && CT) {
              const cT = CT.samplingMode;
              0 !== fT ? TT.updateSamplingMode(lT.f.NEAREST_NEAREST_MIPNEAREST) : TT.updateSamplingMode(lT.f.NEAREST_NEAREST), IT.postProcessManager.directRender([vT], tT.renderTarget, !0), TT.updateSamplingMode(cT);
              const MT = await AT.readPixels(0, 0, kT, KT),
                OT = new Uint8Array(MT.buffer, MT.byteOffset, MT.byteLength);
              return AT.unBindFramebuffer(tT.renderTarget), OT
            }
            throw Error("Render to texture failed.")
          } finally {
            tT.dispose(), vT.dispose()
          }
        }(TT, hT, NT, yT, fT, IT)
      }
      let QT = await TT.readPixels(yT, fT);
      if (!QT) throw new Error(`Failed to read pixels from texture ${TT.name}.`);
      if (QT instanceof Float32Array) {
        const TT = new Uint8Array(QT.length);
        let kT = QT.length;
        for (; kT--;) {
          const cT = QT[kT];
          TT[kT] = Math.round(255 * (0, AT.Clamp)(cT))
        }
        QT = TT
      }
      const ST = hT * NT,
        DT = 4 * ST;
      if (QT.length !== DT) {
        const TT = 0 === ST ? 0 : QT.length / ST;
        if (1 === TT || 2 === TT || 3 === TT) {
          const kT = new Uint8Array(DT);
          for (let cT = 0, lT = 0, MT = 0; cT < ST; cT++, MT += 4) {
            const cT = QT[lT++];
            if (1 === TT) {
              kT[MT] = cT, kT[MT + 1] = cT, kT[MT + 2] = cT, kT[MT + 3] = 255;
              continue
            }
            const KT = QT[lT++];
            2 !== TT ? (kT[MT] = cT, kT[MT + 1] = KT, kT[MT + 2] = QT[lT++], kT[MT + 3] = 255) : (kT[MT] = cT, kT[MT + 1] = KT, kT[MT + 2] = 0, kT[MT + 3] = 255)
          }
          return kT
        }
      }
      return QT
    }
    const tT = {
      CreateResizedCopy: function(TT, kT, cT) {
        let KT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const OT = TT.NJ(),
          yT = OT.Dv(),
          fT = new MT.c("resized" + TT.name, {
            width: kT,
            height: cT
          }, OT, !TT.noMipmap, !0, TT._texture.type, !1, TT.samplingMode, !1);
        fT.wrapU = TT.wrapU, fT.wrapV = TT.wrapV, fT.uOffset = TT.uOffset, fT.vOffset = TT.vOffset, fT.uScale = TT.uScale, fT.vScale = TT.vScale, fT.uAng = TT.uAng, fT.vAng = TT.vAng, fT.wAng = TT.wAng, fT.coordinatesIndex = TT.coordinatesIndex, fT.level = TT.level, fT.anisotropicFilteringLevel = TT.anisotropicFilteringLevel, fT._texture.isReady = !1, TT.wrapU = lT.f.CLAMP_ADDRESSMODE, TT.wrapV = lT.f.CLAMP_ADDRESSMODE;
        const xT = new IT("pass", 1, null, KT ? lT.f.BILINEAR_SAMPLINGMODE : lT.f.NEAREST_SAMPLINGMODE, yT, !1, 0);
        return xT.externalTextureSamplerBinding = !0, xT.onEffectCreatedObservable.addOnce((kT => {
          kT.executeWhenCompiled((() => {
            xT.onApply = function(kT) {
              kT.setTexture("textureSampler", TT)
            };
            const kT = fT.renderTarget;
            kT && (OT.postProcessManager.directRender([xT], kT), yT.unBindFramebuffer(kT), fT.disposeFramebufferObjects(), xT.dispose(), fT.getInternalTexture().isReady = !0)
          }))
        })), fT
      },
      ApplyPostProcess: jT,
      ToHalfFloat: CT.i,
      FromHalfFloat: CT.e,
      GetTextureDataAsync: vT
    }
  },
  41357: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => vT
    });
    var lT = cT(39620),
      MT = cT(39741),
      KT = cT(36932),
      OT = cT(36892),
      yT = cT(39467),
      fT = cT(39624),
      xT = cT(39645),
      IT = cT(36949),
      AT = cT(39516),
      CT = cT(39549),
      jT = cT(41359);
    let vT = (() => {
        var TT;
        let kT, yT, AT, vT, tT, NT, QT, ST, DT, aT, FT, rT, PT, wT, mT, bT, zT = [],
          JT = [],
          oT = [],
          HT = [],
          eT = [],
          GT = [],
          VT = [],
          ET = [],
          ZT = [],
          uT = [],
          XT = [],
          dT = [],
          LT = [],
          RT = [],
          gT = [],
          UT = [],
          YT = [],
          BT = [],
          WT = [],
          nT = [],
          pT = [],
          iT = [],
          qT = [],
          sT = [],
          Tk = [],
          kk = [],
          ck = [],
          lk = [],
          Mk = [];
        return TT = class {
          static get ForceGLSL() {
            return jT.g.ForceGLSL
          }
          static set ForceGLSL(TT) {
            jT.g.ForceGLSL = TT
          }
          static RegisterShaderCodeProcessing(TT, kT) {
            jT.g.RegisterShaderCodeProcessing(TT, kT)
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
            return this.FY
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.I5(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(kT, cT, yT, fT, xT, IT) {
            let AT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              CT = arguments.length > 7 ? arguments[7] : void 0,
              vT = arguments.length > 8 ? arguments[8] : void 0,
              tT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              NT = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              QT = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              ST = arguments.length > 12 ? arguments[12] : void 0,
              DT = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              aT = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              FT = arguments.length > 15 ? arguments[15] : void 0,
              rT = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, lT.h)(this, zT), null), this.uniqueId = (0, lT.h)(this, JT, void 0), this.width = ((0, lT.h)(this, oT), (0, lT.h)(this, HT, -1)), this.height = ((0, lT.h)(this, eT), (0, lT.h)(this, GT, -1)), this.nodeMaterialSource = ((0, lT.h)(this, VT), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, lT.h)(this, ET, void 0), this.clearColor = ((0, lT.h)(this, ZT), (0, lT.h)(this, uT, void 0)), this.autoClear = ((0, lT.h)(this, XT), (0, lT.h)(this, dT, !0)), this.forceAutoClearInAlphaMode = ((0, lT.h)(this, LT), (0, lT.h)(this, RT, !1)), this.alphaConstants = ((0, lT.h)(this, gT), (0, lT.h)(this, UT, void 0)), this.animations = ((0, lT.h)(this, YT), []), this.enablePixelPerfectMode = (0, lT.h)(this, BT, !1), this.forceFullscreenViewport = ((0, lT.h)(this, WT), (0, lT.h)(this, nT, !0)), this.inspectableCustomProperties = (0, lT.h)(this, pT), this.scaleMode = (0, lT.h)(this, iT, 1), this.alwaysForcePOT = ((0, lT.h)(this, qT), (0, lT.h)(this, sT, !1)), this._samples = ((0, lT.h)(this, Tk), (0, lT.h)(this, kk, 1)), this.adaptScaleToCurrentViewport = ((0, lT.h)(this, ck), (0, lT.h)(this, lk, !1)), this.doNotSerialize = ((0, lT.h)(this, Mk), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new MT.g(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new OT.i(1, 1), this._texelSize = OT.i.Zero(), this.onActivateObservable = new KT.b, this.onSizeChangedObservable = new KT.b, this.onApplyObservable = new KT.b, this.onBeforeRenderObservable = new KT.b, this.onAfterRenderObservable = new KT.b, this.QJ = new KT.b, hT();
            let PT, wT = 1,
              mT = null;
            if (yT && !Array.isArray(yT)) {
              const TT = yT;
              yT = TT.uniforms ?? null, fT = TT.samplers ?? null, wT = TT.size ?? 1, IT = TT.camera ?? null, AT = TT.samplingMode ?? 1, CT = TT.engine, vT = TT.reusable, tT = Array.isArray(TT.defines) ? TT.defines.join("\n") : TT.defines ?? null, NT = TT.textureType ?? 0, QT = TT.vertexUrl ?? "postprocess", ST = TT.indexParameters, DT = TT.blockCompilation ?? !1, aT = TT.textureFormat ?? 5, FT = TT.shaderLanguage ?? 0, mT = TT.uniformBuffers ?? null, rT = TT.extraInitializations, PT = TT.effectWrapper
            } else xT && (wT = "number" === typeof xT ? xT : {
              width: xT.width,
              height: xT.height
            });
            if (this._useExistingThinPostProcess = !!PT, this._effectWrapper = PT ?? new jT.g({
                name: kT,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: cT,
                engine: CT || IT?.NJ().Dv(),
                uniforms: yT,
                samplers: fT,
                uniformBuffers: mT,
                defines: tT,
                vertexUrl: QT,
                indexParameters: ST,
                blockCompilation: !0,
                shaderLanguage: FT,
                extraInitializations: void 0
              }), this.name = kT, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != IT ? (this.FY = IT, this._scene = IT.NJ(), IT.attachPostProcess(this), this._engine = this._scene.Dv(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : CT && (this._engine = CT, this._engine.postProcesses.push(this)), this._options = wT, this.renderTargetSamplingMode = AT || 1, this._reusable = vT || !1, this._textureType = NT, this._textureFormat = aT, this._shaderLanguage = FT || 0, this._samplers = fT || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = cT, this._vertexUrl = QT, this._parameters = yT || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = mT || [], this._indexParameters = ST, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const kT = [];
              this._gatherImports(this._engine.isWebGPU && !TT.ForceGLSL, kT), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(DT, tT, rT, kT)
            }
          }
          _gatherImports() {
            let TT = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? TT.push(Promise.all([cT.e(357).then((() => cT(60780)))])) : TT.push(Promise.all([cT.e(346).then((() => cT(60569)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          Dv() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(TT) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = TT, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new MT.g(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              lT = arguments.length > 3 ? arguments[3] : void 0,
              MT = arguments.length > 4 ? arguments[4] : void 0,
              KT = arguments.length > 5 ? arguments[5] : void 0,
              OT = arguments.length > 6 ? arguments[6] : void 0,
              yT = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(TT, kT, cT, lT, MT, KT, OT, yT), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(TT, kT) {
            let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let MT = 0; MT < this._textureCache.length; MT++)
              if (this._textureCache[MT].texture.width === TT.width && this._textureCache[MT].texture.height === TT.height && this._textureCache[MT].postProcessChannel === cT && this._textureCache[MT].texture._generateDepthBuffer === kT.generateDepthBuffer && this._textureCache[MT].texture.samples === kT.samples) return this._textureCache[MT].texture;
            const lT = this._engine.createRenderTargetTexture(TT, kT);
            return this._textureCache.push({
              texture: lT,
              postProcessChannel: cT,
              lastUsedRenderId: -1
            }), lT
          }
          _flushTextureCache() {
            const TT = this._renderId;
            for (let kT = this._textureCache.length - 1; kT >= 0; kT--)
              if (TT - this._textureCache[kT].lastUsedRenderId > 100) {
                let TT = !1;
                for (let cT = 0; cT < this._textures.length; cT++)
                  if (this._textures.data[cT] === this._textureCache[kT].texture) {
                    TT = !0;
                    break
                  } TT || (this._textureCache[kT].texture.dispose(), this._textureCache.splice(kT, 1))
              }
          }
          resize(TT, kT) {
            let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              MT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = TT, this.height = kT;
            let KT = null;
            if (cT)
              for (let fT = 0; fT < cT._postProcesses.length; fT++)
                if (null !== cT._postProcesses[fT]) {
                  KT = cT._postProcesses[fT];
                  break
                } const OT = {
                width: this.width,
                height: this.height
              },
              yT = {
                generateMipMaps: lT,
                generateDepthBuffer: MT || KT === this,
                generateStencilBuffer: (MT || KT === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(OT, yT, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(OT, yT, 1)), this._texelSize.I5(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let TT;
            if (this._shareOutputWithPostProcess) TT = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) TT = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let kT;
              TT = this.inputTexture;
              for (let cT = 0; cT < this._textureCache.length; cT++)
                if (this._textureCache[cT].texture === TT) {
                  kT = this._textureCache[cT];
                  break
                } kT && (kT.lastUsedRenderId = this._renderId)
            }
            return TT
          }
          activate(TT) {
            let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              cT = arguments.length > 2 ? arguments[2] : void 0;
            const lT = null === TT || void 0 !== TT.cameraRigMode ? TT || this.FY : null,
              MT = lT?.NJ() ?? TT,
              KT = MT.Dv(),
              OT = KT.getCaps().maxTextureSize,
              yT = (kT ? kT.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              fT = (kT ? kT.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let xT = this._options.width || yT,
              IT = this._options.height || fT;
            const AT = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let jT = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const TT = KT.currentViewport;
                TT && (xT *= TT.width, IT *= TT.height)
              }(AT || this.alwaysForcePOT) && (this._options.width || (xT = KT.needPOTTextures ? (0, CT.c)(xT, OT, this.scaleMode) : xT), this._options.height || (IT = KT.needPOTTextures ? (0, CT.c)(IT, OT, this.scaleMode) : IT)), this.width === xT && this.height === IT && (jT = this._getTarget()) || this.resize(xT, IT, lT, AT, cT), this._textures.forEach((TT => {
                TT.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(TT, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return jT || (jT = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.I5(yT / xT, fT / IT), this._engine.bindFramebuffer(jT, 0, yT, fT, this.forceFullscreenViewport)) : (this._scaleRatio.I5(1, 1), this._engine.bindFramebuffer(jT, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(lT), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : MT.clearColor, MT._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), jT
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
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.Dv().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), TT = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", TT?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
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
            let kT;
            if (TT = TT || this.FY, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (kT = this._parentContainer.postProcesses.indexOf(this), kT > -1 && this._parentContainer.postProcesses.splice(kT, 1), this._parentContainer = null), kT = this._engine.postProcesses.indexOf(this), -1 !== kT && this._engine.postProcesses.splice(kT, 1), this.QJ.notifyObservers(), TT) {
              if (TT.detachPostProcess(this), kT = TT._postProcesses.indexOf(this), 0 === kT && TT._postProcesses.length > 0) {
                const TT = this.FY._getFirstPostProcess();
                TT && TT.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const TT = xT.d.Serialize(this),
              kT = this.getCamera() || this._scene && this._scene.activeCamera;
            return TT.customType = "BABYLON." + this.getClassName(), TT.cameraId = kT ? kT.id : null, TT.reusable = this._reusable, TT.textureType = this._textureType, TT.fragmentUrl = this._fragmentUrl, TT.parameters = this._parameters, TT.samplers = this._samplers, TT.uniformBuffers = this._uniformBuffers, TT.options = this._options, TT.defines = this._postProcessDefines, TT.textureFormat = this._textureFormat, TT.vertexUrl = this._vertexUrl, TT.indexParameters = this._indexParameters, TT
          }
          clone() {
            const kT = this.serialize();
            kT._engine = this._engine, kT.cameraId = null;
            const cT = TT.Parse(kT, this._scene, "");
            return cT ? (cT.onActivateObservable = this.onActivateObservable.clone(), cT.onSizeChangedObservable = this.onSizeChangedObservable.clone(), cT.onApplyObservable = this.onApplyObservable.clone(), cT.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), cT.onAfterRenderObservable = this.onAfterRenderObservable.clone(), cT._prePassEffectConfiguration = this._prePassEffectConfiguration, cT) : null
          }
          static Parse(TT, kT, cT) {
            const lT = (0, IT.e)(TT.customType);
            if (!lT || !lT._Parse) return null;
            const MT = kT ? kT.getCameraById(TT.cameraId) : null;
            return lT._Parse(TT, MT, kT, cT)
          }
          static _Parse(kT, cT, lT, MT) {
            return xT.d.Parse((() => new TT(kT.name, kT.fragmentUrl, kT.parameters, kT.samplers, kT.options, cT, kT.renderTargetSamplingMode, kT._engine, kT.reusable, kT.defines, kT.textureType, kT.vertexUrl, kT.indexParameters, !1, kT.textureFormat)), kT, lT, MT)
          }
        }, (() => {
          const cT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          kT = [(0, fT.J)()], yT = [(0, fT.J)()], AT = [(0, fT.J)()], vT = [(0, fT.J)()], tT = [(0, fT.J)()], NT = [(0, fT.n)()], QT = [(0, fT.J)()], ST = [(0, fT.J)()], DT = [(0, fT.J)()], aT = [(0, fT.J)()], FT = [(0, fT.J)()], rT = [(0, fT.J)()], PT = [(0, fT.J)()], wT = [(0, fT.J)()], mT = [(0, fT.J)("samples")], bT = [(0, fT.J)()], (0, lT.e)(TT, null, yT, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: TT => "name" in TT,
              get: TT => TT.name
            },
            metadata: cT
          }, null, zT), (0, lT.e)(TT, null, DT, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: TT => "alphaMode" in TT,
              get: TT => TT.alphaMode
            },
            metadata: cT
          }, null, zT), (0, lT.e)(null, null, kT, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: TT => "uniqueId" in TT,
              get: TT => TT.uniqueId,
              set: (TT, kT) => {
                TT.uniqueId = kT
              }
            },
            metadata: cT
          }, JT, oT), (0, lT.e)(null, null, AT, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: TT => "width" in TT,
              get: TT => TT.width,
              set: (TT, kT) => {
                TT.width = kT
              }
            },
            metadata: cT
          }, HT, eT), (0, lT.e)(null, null, vT, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: TT => "height" in TT,
              get: TT => TT.height,
              set: (TT, kT) => {
                TT.height = kT
              }
            },
            metadata: cT
          }, GT, VT), (0, lT.e)(null, null, tT, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: TT => "renderTargetSamplingMode" in TT,
              get: TT => TT.renderTargetSamplingMode,
              set: (TT, kT) => {
                TT.renderTargetSamplingMode = kT
              }
            },
            metadata: cT
          }, ET, ZT), (0, lT.e)(null, null, NT, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "clearColor" in TT,
              get: TT => TT.clearColor,
              set: (TT, kT) => {
                TT.clearColor = kT
              }
            },
            metadata: cT
          }, uT, XT), (0, lT.e)(null, null, QT, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: TT => "autoClear" in TT,
              get: TT => TT.autoClear,
              set: (TT, kT) => {
                TT.autoClear = kT
              }
            },
            metadata: cT
          }, dT, LT), (0, lT.e)(null, null, ST, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: TT => "forceAutoClearInAlphaMode" in TT,
              get: TT => TT.forceAutoClearInAlphaMode,
              set: (TT, kT) => {
                TT.forceAutoClearInAlphaMode = kT
              }
            },
            metadata: cT
          }, RT, gT), (0, lT.e)(null, null, aT, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: TT => "alphaConstants" in TT,
              get: TT => TT.alphaConstants,
              set: (TT, kT) => {
                TT.alphaConstants = kT
              }
            },
            metadata: cT
          }, UT, YT), (0, lT.e)(null, null, FT, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: TT => "enablePixelPerfectMode" in TT,
              get: TT => TT.enablePixelPerfectMode,
              set: (TT, kT) => {
                TT.enablePixelPerfectMode = kT
              }
            },
            metadata: cT
          }, BT, WT), (0, lT.e)(null, null, rT, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: TT => "forceFullscreenViewport" in TT,
              get: TT => TT.forceFullscreenViewport,
              set: (TT, kT) => {
                TT.forceFullscreenViewport = kT
              }
            },
            metadata: cT
          }, nT, pT), (0, lT.e)(null, null, PT, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: TT => "scaleMode" in TT,
              get: TT => TT.scaleMode,
              set: (TT, kT) => {
                TT.scaleMode = kT
              }
            },
            metadata: cT
          }, iT, qT), (0, lT.e)(null, null, wT, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: TT => "alwaysForcePOT" in TT,
              get: TT => TT.alwaysForcePOT,
              set: (TT, kT) => {
                TT.alwaysForcePOT = kT
              }
            },
            metadata: cT
          }, sT, Tk), (0, lT.e)(null, null, mT, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: TT => "_samples" in TT,
              get: TT => TT._samples,
              set: (TT, kT) => {
                TT._samples = kT
              }
            },
            metadata: cT
          }, kk, ck), (0, lT.e)(null, null, bT, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: TT => "adaptScaleToCurrentViewport" in TT,
              get: TT => TT.adaptScaleToCurrentViewport,
              set: (TT, kT) => {
                TT.adaptScaleToCurrentViewport = kT
              }
            },
            metadata: cT
          }, lk, Mk), cT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: cT
          })
        })(), TT
      })(),
      tT = !1;

    function hT() {
      tT || (tT = !0, AT.d.prototype.setTextureFromPostProcess = function(TT, kT, cT) {
        let lT = null;
        kT && (kT._forcedOutputTexture ? lT = kT._forcedOutputTexture : kT._textures.data[kT._currentRenderTextureInd] && (lT = kT._textures.data[kT._currentRenderTextureInd])), this._bindTexture(TT, lT?.texture ?? null, cT)
      }, AT.d.prototype.setTextureFromPostProcessOutput = function(TT, kT, cT) {
        this._bindTexture(TT, kT?._outputTexture?.texture ?? null, cT)
      }, yT.e.prototype.setTextureFromPostProcess = function(TT, kT) {
        this._engine.setTextureFromPostProcess(this._samplers[TT], kT, TT)
      }, yT.e.prototype.setTextureFromPostProcessOutput = function(TT, kT) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[TT], kT, TT)
      }, (0, IT.g)("BABYLON.PostProcess", vT))
    }
  },
  41382: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT,
      h: () => KT
    });
    var lT = cT(41359),
      MT = cT(36925);
    class KT extends lT.g {
      _gatherImports(TT, kT) {
        TT ? (this._webGPUReady = !0, kT.push(Promise.all([cT.e(364).then((() => cT(60836)))]))) : kT.push(Promise.all([cT.e(365).then((() => cT(60844)))])), super._gatherImports(TT, kT)
      }
      constructor(TT) {
        let kT = arguments.length > 2 ? arguments[2] : void 0;
        const cT = {
          name: TT,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || MT.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: KT.FragmentUrl,
          ...kT
        };
        cT.engine || (cT.engine = MT.d.LastCreatedEngine), super(cT)
      }
    }
    KT.FragmentUrl = "pass";
    class OT extends lT.g {
      _gatherImports(TT, kT) {
        TT ? (this._webGPUReady = !0, kT.push(Promise.all([cT.e(366).then((() => cT(60846)))]))) : kT.push(Promise.all([cT.e(367).then((() => cT(60850)))])), super._gatherImports(TT, kT)
      }
      constructor(TT) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: TT,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || MT.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: OT.FragmentUrl,
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
    OT.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);