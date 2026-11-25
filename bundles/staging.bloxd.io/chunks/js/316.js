export const id = 316;
export const ids = [316];
export const modules = {
  42277: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => JG
    });
    var wG = ZG(37465),
      SG = ZG(37439),
      LG = ZG(40857),
      yG = ZG(40526),
      kG = ZG(40319),
      UG = ZG(39093),
      YG = ZG(40508),
      VG = ZG(40540),
      pG = ZG(37448),
      fG = ZG(40271),
      QG = ZG(40484),
      KG = ZG(40573);
    class hG {
      get renderList() {
        return this._renderList
      }
      set renderList(GG) {
        this._renderList !== GG && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), GG && (this._unObserveRenderList = (0, pG.h)(GG, this._renderListHasChanged)), this._renderList = GG)
      }
      get disableImageProcessing() {
        return this._disableImageProcessing
      }
      set disableImageProcessing(GG) {
        GG !== this._disableImageProcessing && (this._disableImageProcessing = GG, this._scene.markAllMaterialsAsDirty(64))
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(GG) {
        this._disableDepthPrePass = GG, this._renderingManager.disableDepthPrePass = GG
      }
      get name() {
        return this._name
      }
      set name(GG) {
        if (this._name !== GG) {
          if (this._name = GG, this._sceneUBOs)
            for (let GG = 0; GG < this._sceneUBOs.length; ++GG) this._sceneUBOs[GG].name = `Scene ubo #${GG} for ${this.name}`;
          if (this._scene)
            for (let GG = 0; GG < this._renderPassIds.length; ++GG) {
              const bG = this._renderPassIds[GG];
              this._engine._renderPassNames[bG] = `${this._name}#${GG}`
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
      setMaterialForRendering(GG, bG) {
        let ZG;
        ZG = Array.isArray(GG) ? GG : [GG];
        for (let wG = 0; wG < ZG.length; ++wG)
          for (let GG = 0; GG < this.options.numPasses; ++GG) {
            let SG = ZG[wG];
            ZG[wG].Ul && (SG = ZG[wG].ESG), SG.setMaterialForRenderPass(this._renderPassIds[GG], void 0 !== bG ? Array.isArray(bG) ? bG[GG] : bG : void 0)
          }
      }
      _freezeActiveMeshes(GG) {
        this._freezeActiveMeshesCancel = (0, fG.c)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, GG)
            for (let GG = 0; GG < this._activeMeshes.length; GG++) this._activeMeshes.data[GG]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((GG, bG) => {
          this._freezeActiveMeshesCancel = null, bG ? (UG.c.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), GG && UG.c.Error(GG)) : (UG.c.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), GG && (UG.c.Error(GG), GG.stack && UG.c.Error(GG.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let GG = 0; GG < this._activeMeshes.length; GG++) this._activeMeshes.data[GG]._unFreeze();
        this._isFrozen = !1
      }
      constructor(GG, bG, ZG) {
        this._unObserveRenderList = null, this._renderListHasChanged = (GG, bG) => {
          const ZG = this._renderList ? this._renderList.length : 0;
          if (0 === bG && ZG > 0 || 0 === ZG)
            for (const wG of this._scene.meshes) wG._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new wG.c, this.onAfterRenderObservable = new wG.c, this.onBeforeRenderingManagerRenderObservable = new wG.c, this.onAfterRenderingManagerRenderObservable = new wG.c, this.onInitRenderingObservable = new wG.c, this.onFinishRenderingObservable = new wG.c, this.onFastPathRenderObservable = new wG.c, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new QG.g(256), this._activeBoundingBoxes = new QG.g(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = GG, this._scene = bG, this._engine = this._scene.CK(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...ZG
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new VG.b(bG), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const GG of this._scene.lights) GG.getTypeID() === KG.b.LIGHTTYPEID_CLUSTERED_CONTAINER && GG.isSupported && GG._updateBatches(this.activeCamera).render()
        })), this._scene.addObjectRenderer(this)
      }
      _releaseRenderPassId() {
        for (let GG = 0; GG < this.options.numPasses; ++GG) this._engine.releaseRenderPassId(this._renderPassIds[GG]);
        this._renderPassIds.length = 0
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let GG = 0; GG < this.options.numPasses; ++GG) this._renderPassIds[GG] = this._engine.createRenderPassId(`${this.name}#${GG}`)
      }
      _createSceneUBO(GG, bG) {
        const ZG = this._scene.CK(),
          wG = new YG.d(ZG, void 0, bG, GG, void 0, !1);
        return wG.addUniform("viewProjection", 16), bG && wG.addUniform("viewProjectionR", 16), wG.addUniform("view", 16), wG.addUniform("projection", 16), wG.addUniform("vEyePosition", 4), wG.addUniform("inverseProjection", 16), wG
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const GG = this._engine._currentRenderTarget,
          bG = !(!GG || !GG.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const GG = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${GG} for ${this.name}`, bG)), this._sceneUBOIsMultiview.push(bG)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== bG && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, bG), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = bG);
        const ZG = this._sceneUBOs[this._currentSceneUBOIndex++];
        return ZG.unbindEffect(), ZG
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1
      }
      get refreshRate() {
        return this._refreshRate
      }
      set refreshRate(GG) {
        this._refreshRate = GG, this.resetRefreshCounter()
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1))
      }
      isReadyForRendering(GG, bG) {
        this.prepareRenderList(), this.initRender(GG, bG);
        const ZG = this._checkReadiness();
        return this.finishRender(), ZG
      }
      prepareRenderList() {
        const GG = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let bG = 0; bG < this._waitingRenderList.length; bG++) {
              const ZG = this._waitingRenderList[bG],
                wG = GG.getMeshById(ZG);
              wG && this.renderList.push(wG)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const GG = this._scene.meshes;
          for (let bG = 0; bG < GG.length; bG++) {
            const ZG = GG[bG];
            this.renderListPredicate(ZG) && this.renderList.push(ZG)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(GG, bG) {
        const ZG = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), ZG && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(ZG.getViewMatrix(), ZG.getProjectionMatrix(!0)), this._scene._activeCamera = ZG, this._engine.setViewport(ZG.rigParent ? ZG.rigParent.viewport : ZG.viewport, GG, bG)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const GG = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (GG.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), GG._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== GG.activeCamera && GG.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), GG.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZG = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[GG], this.onBeforeRenderObservable.notifyObservers(GG);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(GG);
        else {
          const bG = this._prepareRenderingManager(GG),
            ZG = this._scene.getOutlineRenderer?.(),
            wG = ZG?.enabled;
          ZG && (ZG.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(GG), this._renderingManager.render(this.customRenderFunction, bG, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(GG), ZG && (ZG.enabled = wG)
        }
        bG || this.onAfterRenderObservable.notifyObservers(GG), this._engine.currentRenderPassId = ZG
      }
      _checkReadiness() {
        const GG = this._scene,
          bG = this._engine.currentRenderPassId;
        let ZG = !0;
        GG.getViewMatrix() || GG.updateTransformMatrix();
        const wG = this.options.numPasses;
        for (let SG = 0; SG < wG && ZG; SG++) {
          const bG = this.renderList ? this.renderList : GG.frameGraph ? GG.meshes : GG.getActiveMeshes().data,
            LG = this.renderList || GG.frameGraph ? bG.length : GG.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[SG], this.onBeforeRenderObservable.notifyObservers(SG);
          let yG = null,
            kG = LG;
          this.getCustomRenderList && (yG = this.getCustomRenderList(SG, bG, LG), yG && (kG = yG.length)), yG || (yG = bG), this.options.doNotChangeAspectRatio || GG.updateTransformMatrix(!0);
          for (let GG = 0; GG < kG && ZG; ++GG) {
            const bG = yG[GG];
            if (!bG.isEnabled() || bG.isBlocked || !bG.isVisible || !bG.aE) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(bG, this.refreshRate, !0)) {
                ZG = !1;
                continue
              }
            } else if (!bG.isReady(!0)) {
              ZG = !1;
              continue
            }
            let wG = bG._edgesRenderer,
              SG = bG.hasThinInstances;
            if (bG.Ul) {
              const GG = bG.ESG;
              GG.edgesShareWithInstances && GG._edgesRenderer?.isEnabled && (wG = GG._edgesRenderer, SG = !0)
            } else bG.zSG && bG.edgesShareWithInstances && (SG = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && wG?.isEnabled && (wG.isReady(SG) || (ZG = !1))
          }
          if (this.renderParticles && GG.particlesEnabled) {
            const bG = this.particleSystemList || GG.lE;
            for (const GG of bG) GG.isReady() || (ZG = !1)
          }
          if (this.renderSprites && GG.spritesEnabled) {
            const bG = this.spriteManagerList || GG.spriteManagers;
            if (bG)
              for (const wG of bG) GG.activeCamera && 0 === (wG.layerMask & GG.activeCamera.layerMask) || wG.isReady && !wG.isReady() && (ZG = !1)
          }
          this.onAfterRenderObservable.notifyObservers(SG), wG > 1 && (GG.incrementRenderId(), GG.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = bG, ZG
      }
      _prepareRenderingManager() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZG = this._scene;
        let wG, SG, LG = null;
        const yG = this.renderList ? this.renderList : ZG.frameGraph ? ZG.meshes : ZG.getActiveMeshes().data,
          kG = this.renderList || ZG.frameGraph ? yG.length : ZG.getActiveMeshes().length;
        if (this.getCustomRenderList && (LG = this.getCustomRenderList(GG, yG, kG)), LG) wG = LG.length, SG = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !bG && !this._engine.isWebGPU) return yG;
          this._defaultRenderListPrepared = !0, LG = yG, wG = kG, SG = !this.renderList || this.forceLayerMaskCheck
        }
        const UG = ZG.activeCamera,
          YG = this.cameraForLOD ?? UG,
          VG = ZG.getBoundingBoxRenderer?.();
        if (ZG._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && VG) {
            VG.reset();
            for (let GG = 0; GG < this._activeBoundingBoxes.length; GG++) {
              const bG = this._activeBoundingBoxes.data[GG];
              VG.renderList.push(bG)
            }
          }
          return LG
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), VG && VG.reset(), this.renderMeshes) {
          const GG = ZG.getRenderId(),
            bG = ZG.getFrameId();
          for (let yG = 0; yG < wG; yG++) {
            const wG = LG[yG];
            if (wG && !wG.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(wG, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!wG.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let LG, yG;
              if (YG) {
                const GG = wG._internalAbstractMeshDataInfo._currentLOD.get(YG);
                GG && GG[1] === bG ? LG = GG[0] : (LG = ZG.customLODSelector ? ZG.customLODSelector(wG, YG) : wG.getLOD(YG), GG ? (GG[0] = LG, GG[1] = bG) : wG._internalAbstractMeshDataInfo._currentLOD.set(YG, [LG, bG]))
              } else LG = wG;
              if (!LG) continue;
              if (LG !== wG && 0 !== LG.billboardMode && LG.computeWorldMatrix(), LG._preActivateForIntermediateRendering(GG), yG = !(!SG || !UG) && 0 === (wG.layerMask & UG.layerMask), wG.isEnabled() && wG.isVisible && wG.aE && !yG) {
                if (this._activeMeshes.push(wG), LG._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, LG !== wG && LG._activate(GG, !0), this.enableBoundingBoxRendering && VG && VG._preActiveMesh(wG), wG._activate(GG, !0) && wG.aE.length) {
                  wG.Ul ? wG._internalAbstractMeshDataInfo._actAsRegularMesh && (LG = wG) : LG._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, LG._internalAbstractMeshDataInfo._isActiveIntermediate = !0, ZG._prepareSkeleton(LG);
                  for (let GG = 0; GG < LG.aE.length; GG++) {
                    const bG = LG.aE[GG];
                    this.enableBoundingBoxRendering && VG && VG._evaluateSubMesh(wG, bG), this._renderingManager.dispatch(bG, LG)
                  }
                }
                wG._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && VG && bG)
          for (let pG = 0; pG < VG.renderList.length; pG++) {
            const GG = VG.renderList.data[pG];
            this._activeBoundingBoxes.push(GG)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const GG = this.particleSystemList || ZG.lE;
          for (let bG = 0; bG < GG.length; bG++) {
            const ZG = GG[bG],
              wG = ZG.emitter;
            ZG.isStarted() && wG && (!wG.position || wG.isEnabled()) && this._renderingManager.dispatchParticles(ZG)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return LG
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(GG, bG, ZG, wG)
      }
      setRenderingAutoClearDepthStencil(GG, bG) {
        let ZG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          wG = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(GG, bG, ZG, wG), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const GG = new hG(this.name, this._scene, this.options);
        return this.renderList && (GG.renderList = this.renderList.slice(0)), GG
      }
      dispose() {
        const GG = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          bG = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let ZG = 0; ZG < bG; ZG++) {
          const bG = GG[ZG];
          bG && void 0 !== bG.getMaterialForRenderPass(this.renderPassId) && bG.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const ZG of this._sceneUBOs) ZG.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === hG.REFRESHRATE_RENDER_ONCE && (this.refreshRate = hG.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    hG.REFRESHRATE_RENDER_ONCE = 0, hG.REFRESHRATE_RENDER_ONEVERYFRAME = 1, hG.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var dG = ZG(40258);
    class JG extends LG.d {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate
      }
      set renderListPredicate(GG) {
        this._objectRenderer.renderListPredicate = GG
      }
      get renderList() {
        return this._objectRenderer.renderList
      }
      set renderList(GG) {
        this._objectRenderer.renderList = GG
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList
      }
      set particleSystemList(GG) {
        this._objectRenderer.particleSystemList = GG
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList
      }
      set getCustomRenderList(GG) {
        this._objectRenderer.getCustomRenderList = GG
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles
      }
      set renderParticles(GG) {
        this._objectRenderer.renderParticles = GG
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites
      }
      set renderSprites(GG) {
        this._objectRenderer.renderSprites = GG
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering
      }
      set enableBoundingBoxRendering(GG) {
        this._objectRenderer.enableBoundingBoxRendering = GG
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering
      }
      set enableOutlineRendering(GG) {
        this._objectRenderer.enableOutlineRendering = GG
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck
      }
      set forceLayerMaskCheck(GG) {
        this._objectRenderer.forceLayerMaskCheck = GG
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera
      }
      set activeCamera(GG) {
        this._objectRenderer.activeCamera = GG
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD
      }
      set cameraForLOD(GG) {
        this._objectRenderer.cameraForLOD = GG
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing
      }
      set disableImageProcessing(GG) {
        this._objectRenderer.disableImageProcessing = GG
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction
      }
      set customIsReadyFunction(GG) {
        this._objectRenderer.customIsReadyFunction = GG
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction
      }
      set customRenderFunction(GG) {
        this._objectRenderer.customRenderFunction = GG
      }
      get postProcesses() {
        return this._postProcesses
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled
      }
      set onAfterUnbind(GG) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(GG)
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable
      }
      set onBeforeRender(GG) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(GG)
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable
      }
      set onAfterRender(GG) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(GG)
      }
      set onClear(GG) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(GG)
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList
      }
      set _waitingRenderList(GG) {
        this._objectRenderer._waitingRenderList = GG
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
      setMaterialForRendering(GG, bG) {
        this._objectRenderer.setMaterialForRendering(GG, bG)
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
      set boundingBoxSize(GG) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(GG)) return;
        this._boundingBoxSize = GG;
        const bG = this.Dv();
        bG && bG.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(GG, bG, ZG) {
        let yG, kG, YG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          VG = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          pG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          fG = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          QG = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : LG.d.TRILINEAR_SAMPLINGMODE,
          KG = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          dG = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          JG = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          rG = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          zG = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          EG = arguments.length > 13 ? arguments[13] : void 0,
          oG = arguments.length > 14 ? arguments[14] : void 0,
          XG = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          uG = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          iG = !0,
          CG = !1;
        if ("object" === typeof YG) {
          const GG = YG;
          YG = !!GG.generateMipMaps, VG = GG.doNotChangeAspectRatio ?? !0, pG = GG.type ?? 0, fG = !!GG.isCube, QG = GG.samplingMode ?? LG.d.TRILINEAR_SAMPLINGMODE, KG = GG.generateDepthBuffer ?? !0, dG = !!GG.generateStencilBuffer, JG = !!GG.isMulti, rG = GG.format ?? 5, zG = !!GG.delayAllocation, EG = GG.samples, oG = GG.creationFlags, XG = !!GG.noColorAttachment, uG = !!GG.useSRGBBuffer, yG = GG.colorAttachment, iG = GG.gammaSpace ?? iG, kG = GG.existingObjectRenderer, CG = !!GG.enableClusteredLights
        }
        if (super(null, ZG, !YG, void 0, QG, void 0, void 0, void 0, void 0, rG), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new wG.c, this.onAfterUnbindObservable = new wG.c, this.onClearObservable = new wG.c, this.onResizeObservable = new wG.c, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = SG.p.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(ZG = this.Dv())) return;
        const WG = this.Dv().CK();
        this._gammaSpace = iG, this._coordinatesMode = LG.d.PROJECTION_MODE, this.name = GG, this.isRenderTarget = !0, this._initialSizeParameter = bG, this._dontDisposeObjectRenderer = !!kG, this._processSizeParameter(bG), this._objectRenderer = kG ?? new hG(GG, ZG, {
          numPasses: fG ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: VG,
          enableClusteredLights: CG
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const GG = this._scene;
          if (!this._disableEngineStages)
            for (const bG of GG._beforeRenderTargetClearStage) bG.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(WG) : this.skipInitialClear || WG.clear(this.clearColor ?? GG.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || GG.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const bG of GG._beforeRenderTargetDrawStage) bG.action(this, this._currentFaceIndex, this._currentLayer);
          WG._debugPushGroup && WG._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (WG._debugPopGroup && WG._debugPopGroup(), !this._disableEngineStages)
            for (const bG of this._scene._afterRenderTargetDrawStage) bG.action(this, this._currentFaceIndex, this._currentLayer);
          const GG = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const bG of this._scene._afterRenderTargetPostProcessStage) bG.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = GG), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), WG) : UG.c.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(WG) : this.skipInitialClear || WG.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = WG.onResizeObservable.add((() => {})), this._generateMipMaps = !!YG, this._doNotChangeAspectRatio = VG, JG || (this._renderTargetOptions = {
          generateMipMaps: YG,
          type: pG,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: KG,
          generateStencilBuffer: dG,
          samples: EG,
          creationFlags: oG,
          noColorAttachment: XG,
          useSRGBBuffer: uG,
          colorAttachment: yG,
          label: this.name
        }, this.samplingMode === LG.d.NEAREST_SAMPLINGMODE && (this.wrapU = LG.d.CLAMP_ADDRESSMODE, this.wrapV = LG.d.CLAMP_ADDRESSMODE), zG || (fG ? (this._renderTarget = ZG.CK().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = LG.d.INVCUBIC_MODE, this._textureMatrix = SG.e.Identity()) : this._renderTarget = ZG.CK().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== EG && (this.samples = EG)))
      }
      createDepthStencilTexture() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          LG = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(GG, bG, ZG, wG, SG, LG)
      }
      _processSizeParameter(GG) {
        if (GG.ratio) {
          this._sizeRatio = GG.ratio;
          const bG = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(bG.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(bG.getRenderHeight(), this._sizeRatio)
          }
        } else this._size = GG
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples
      }
      set samples(GG) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(GG))
      }
      addPostProcess(GG) {
        if (!this._postProcessManager) {
          const GG = this.Dv();
          if (!GG) return;
          this._postProcessManager = new yG.c(GG), this._postProcesses = new Array
        }
        this._postProcesses.push(GG), this._postProcesses[0].autoClear = !1
      }
      clearPostProcesses() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (GG)
            for (const GG of this._postProcesses) GG.dispose();
          this._postProcesses = []
        }
      }
      removePostProcess(GG) {
        if (!this._postProcesses) return;
        const bG = this._postProcesses.indexOf(GG); - 1 !== bG && (this._postProcesses.splice(bG, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter()
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate
      }
      set refreshRate(GG) {
        this._objectRenderer.refreshRate = GG
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
        const GG = this._size.layers;
        if (GG) return GG;
        const bG = this._size.depth;
        return bG || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(GG) {
        const bG = Math.max(1, this.getRenderSize() * GG);
        this.resize(bG)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(GG) {
        const bG = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const ZG = this.Dv();
        ZG && (this._processSizeParameter(GG), this._renderTarget = bG ? ZG.CK().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : ZG.CK().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(GG, bG)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => ZG(42289))).then((GG => this._dumpTools = GG))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const GG = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), GG
      }
      _render() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZG = this.Dv();
        if (!ZG) return;
        void 0 !== this.useCameraPostProcesses && (GG = this.useCameraPostProcesses);
        const wG = ZG.CK();
        if (wG._debugPushGroup && wG._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let SG = 0; SG < 6; SG++) this._renderToTarget(SG, GG, bG), ZG.incrementRenderId(), ZG.resetCachedMaterial();
          else this._renderToTarget(0, GG, bG);
        else
          for (let SG = 0; SG < this.getRenderLayers(); SG++) this._renderToTarget(0, GG, bG, SG), ZG.incrementRenderId(), ZG.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), wG._debugPopGroup && wG._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(GG, bG) {
        const ZG = GG * bG,
          wG = (0, kG.r)(ZG + 16384 / (128 + ZG));
        return Math.min((0, kG.e)(GG), wG)
      }
      _bindFrameBuffer() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZG = this.Dv();
        if (!ZG) return;
        const wG = ZG.CK();
        this._renderTarget && wG.bindFramebuffer(this._renderTarget, this.isCube ? GG : void 0, void 0, void 0, this.ignoreCameraViewport, 0, bG)
      }
      _unbindFrameBuffer(GG, bG) {
        this._renderTarget && GG.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(bG)
        }))
      }
      _prepareFrame(GG, bG, ZG, wG) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(bG, ZG) : wG && GG.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(bG, ZG)
      }
      _renderToTarget(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const SG = this.Dv();
        if (!SG) return;
        const LG = SG.CK();
        this._currentFaceIndex = GG, this._currentLayer = wG, this._currentUseCameraPostProcess = bG, this._currentDumpForDebug = ZG, this._prepareFrame(SG, GG, wG, bG), this._objectRenderer.render(GG + wG, !0), this._unbindFrameBuffer(LG, GG), this._texture && this.isCube && 5 === GG && LG.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(GG, bG, ZG, wG)
      }
      setRenderingAutoClearDepthStencil(GG, bG) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(GG, bG)
      }
      clone() {
        const GG = this.getSize(),
          bG = new JG(this.name, GG, this.Dv(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return bG.hasAlpha = this.hasAlpha, bG.level = this.level, bG.coordinatesMode = this.coordinatesMode, this.renderList && (bG.renderList = this.renderList.slice(0)), bG
      }
      serialize() {
        if (!this.name) return null;
        const GG = super.serialize();
        if (GG.renderTargetSize = this.getRenderSize(), GG.renderList = [], this.renderList)
          for (let bG = 0; bG < this.renderList.length; bG++) GG.renderList.push(this.renderList[bG].id);
        return GG
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.Dv().CK().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const GG = this.Dv();
        if (!GG) return;
        let bG = GG.customRenderTargets.indexOf(this);
        bG >= 0 && GG.customRenderTargets.splice(bG, 1);
        for (const ZG of GG.cameras) bG = ZG.customRenderTargets.indexOf(this), bG >= 0 && ZG.customRenderTargets.splice(bG, 1);
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
    JG.REFRESHRATE_RENDER_ONCE = hG.REFRESHRATE_RENDER_ONCE, JG.REFRESHRATE_RENDER_ONEVERYFRAME = hG.REFRESHRATE_RENDER_ONEVERYFRAME, JG.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = hG.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(JG.prototype, "noPrePassRenderer") || Object.defineProperty(JG.prototype, "noPrePassRenderer", (0, dG.d)("RenderTargetTexture", "noPrePassRenderer"))
  },
  42253: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => YG,
      e: () => VG
    });
    var wG = ZG(40524),
      SG = ZG(38499),
      LG = ZG(37465),
      yG = ZG(40228),
      kG = ZG(40697);
    const UG = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class YG {
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UG;
        this._fullscreenViewport = new SG.d(0, 0, 1, 1);
        const ZG = bG.positions ?? UG.positions,
          LG = bG.indices ?? UG.indices;
        this.engine = GG, this._vertexBuffers = {
          [wG.l.PositionKind]: new wG.l(GG, ZG, wG.l.PositionKind, !1, !1, 2)
        }, this._indexBuffer = GG.createIndexBuffer(LG), this._indexBufferLength = LG.length, this._onContextRestoredObserver = GG.iK.add((() => {
          this._indexBuffer = GG.createIndexBuffer(LG);
          for (const GG in this._vertexBuffers) {
            this._vertexBuffers[GG]._rebuild()
          }
        }))
      }
      setViewport() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.engine.setViewport(GG)
      }
      bindBuffers(GG) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, GG)
      }
      applyEffectWrapper(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = bG, this.engine.stencilState.stencilTest = ZG, this.engine.enableEffect(GG.drawWrapper), this.bindBuffers(GG.effect), GG.onApplyObservable.notifyObservers({})
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
      _isRenderTargetTexture(GG) {
        return void 0 !== GG.renderTarget
      }
      render(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!GG.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const ZG = null === bG ? null : this._isRenderTargetTexture(bG) ? bG.renderTarget : bG;
        ZG && this.engine.bindFramebuffer(ZG), this.applyEffectWrapper(GG), this.draw(), ZG && this.engine.unBindFramebuffer(ZG), this.restoreStates()
      }
      dispose() {
        const GG = this._vertexBuffers[wG.l.PositionKind];
        GG && (GG.dispose(), delete this._vertexBuffers[wG.l.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.iK.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class VG {
      static RegisterShaderCodeProcessing(GG, bG) {
        bG ? VG._CustomShaderCodeProcessing[GG ?? ""] = bG : delete VG._CustomShaderCodeProcessing[GG ?? ""]
      }
      static _GetShaderCodeProcessing(GG) {
        return VG._CustomShaderCodeProcessing[GG] ?? VG._CustomShaderCodeProcessing[""]
      }
      get name() {
        return this.options.name
      }
      set name(GG) {
        this.options.name = GG
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
      set effect(GG) {
        this._drawWrapper.effect = GG
      }
      constructor(GG) {
        this.alphaMode = 0, this.onEffectCreatedObservable = new LG.c(void 0, !0), this.onApplyObservable = new LG.c, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
          ...GG,
          name: GG.name || "effectWrapper",
          engine: GG.engine,
          uniforms: GG.uniforms || GG.uniformNames || [],
          uniformNames: void 0,
          samplers: GG.samplers || GG.samplerNames || [],
          samplerNames: void 0,
          attributeNames: GG.attributeNames || ["position"],
          uniformBuffers: GG.uniformBuffers || [],
          defines: GG.defines || "",
          useShaderStore: GG.useShaderStore || !1,
          vertexUrl: GG.vertexUrl || GG.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: GG.fragmentShader || "pass",
          indexParameters: GG.indexParameters,
          blockCompilation: GG.blockCompilation || !1,
          shaderLanguage: GG.shaderLanguage || 0,
          onCompiled: GG.onCompiled || void 0,
          extraInitializations: GG.extraInitializations || void 0,
          extraInitializationsAsync: GG.extraInitializationsAsync || void 0,
          useAsPostProcess: GG.useAsPostProcess ?? !1,
          allowEmptySourceTexture: GG.allowEmptySourceTexture ?? !1
        }, this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), GG.vertexUrl || GG.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add((() => {
          this.effect.setFloat2("scale", 1, 1)
        }))), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add((() => {
          this.bind()
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.iK.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new kG.c(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const bG = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, bG, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wG = arguments.length > 2 ? arguments[2] : void 0,
          SG = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, SG && this._importPromises.push(...SG);
        const LG = this.options.engine.isWebGPU && !VG.ForceGLSL;
        this._gatherImports(LG, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(LG && this._webGPUReady ? ZG.e(368).then((() => ZG(61951))) : ZG.e(358).then((() => ZG(61824)))), void 0 !== wG && wG(LG, this._importPromises), LG && this._webGPUReady && (this.options.shaderLanguage = 1), GG || this.updateEffect(bG)
      }
      updateEffect() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          wG = arguments.length > 3 ? arguments[3] : void 0,
          SG = arguments.length > 4 ? arguments[4] : void 0,
          LG = arguments.length > 5 ? arguments[5] : void 0,
          kG = arguments.length > 6 ? arguments[6] : void 0,
          UG = arguments.length > 7 ? arguments[7] : void 0;
        const YG = VG._GetShaderCodeProcessing(this.name);
        if (YG?.defineCustomBindings) {
          const wG = bG?.slice() ?? [];
          wG.push(...this.options.uniforms);
          const SG = ZG?.slice() ?? [];
          SG.push(...this.options.samplers), GG = YG.defineCustomBindings(this.name, GG, wG, SG), bG = wG, ZG = SG
        }
        this.options.defines = GG || "";
        const pG = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let fG;
        fG = this.options.extraInitializationsAsync ? async () => {
          await (pG?.()), await this.options.extraInitializationsAsync()
        }: pG, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: kG ?? this._shaderPath.vertex,
          fragment: UG ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: bG || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: ZG || this.options.samplers,
          defines: null !== GG ? GG : "",
          fallbacks: null,
          onCompiled: SG ?? this.options.onCompiled,
          onError: LG ?? null,
          indexParameters: wG || this.options.indexParameters,
          processCodeAfterIncludes: YG?.processCodeAfterIncludes ? (GG, bG) => YG.processCodeAfterIncludes(this.name, GG, bG) : null,
          processFinalCode: YG?.processFinalCode ? (GG, bG) => YG.processFinalCode(this.name, GG, bG) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: fG
        }, this.options.engine) : this._drawWrapper.effect = new yG.d(this._shaderPath, this.options.attributeNames, bG || this.options.uniforms, ZG || this.options.samplerNames, this.options.engine, GG, void 0, SG || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, fG), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !GG && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), VG._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.CK().iK.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    VG.ForceGLSL = !1, VG._CustomShaderCodeProcessing = {}
  },
  42289: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      Dispose: () => rG,
      DumpData: () => JG,
      DumpDataAsync: () => dG,
      DumpFramebuffer: () => hG,
      DumpTools: () => zG,
      EncodeImageAsync: () => KG,
      RegisterDumpTools: () => oG
    });
    var wG = ZG(40393),
      SG = ZG(42253),
      LG = ZG(40477),
      yG = ZG(37471),
      kG = ZG(37463),
      UG = ZG(39093),
      YG = ZG(40443),
      VG = ZG(40398);
    let pG = null;
    async function fG() {
      return pG || (pG = async function() {
        const GG = kG.c.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        GG instanceof OffscreenCanvas && UG.c.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: bG
        } = await Promise.resolve().then((() => ZG(40225)));
        if (!bG.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const wG = new bG(GG, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        kG.c.Instances.pop(), kG.c.OnEnginesDisposedObservable.add((GG => {
          wG && GG !== wG && !wG.Tu && 0 === kG.c.Instances.length && rG()
        })), wG.getCaps().parallelShaderCompile = void 0;
        const LG = new SG.b(wG),
          {
            passPixelShader: yG
          } = await ZG.e(376).then((() => ZG(62011))),
          YG = new SG.e({
            engine: wG,
            name: yG.name,
            fragmentShader: yG.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: GG,
          dumpEngine: {
            engine: wG,
            renderer: LG,
            wrapper: YG
          }
        }
      }()), await pG
    }
    let QG = (() => {
      var GG;
      let bG, ZG = [];
      return GG = class {
        static async EncodeImageAsync(GG, bG, ZG, wG, SG, yG) {
          const kG = await fG(),
            UG = kG.dumpEngine;
          UG.engine.setSize(bG, ZG, !0);
          const YG = UG.engine.createRawTexture(GG, bG, ZG, 5, !1, !SG, 1);
          return UG.renderer.setViewport(), UG.renderer.applyEffectWrapper(UG.wrapper), UG.wrapper.effect._bindTexture("textureSampler", YG), UG.renderer.draw(), YG.dispose(), await new Promise(((GG, bG) => {
            LG.f.ToBlob(kG.canvas, (ZG => {
              ZG ? GG(ZG) : bG(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), wG, yG)
          }))
        }
      }, (() => {
        const SG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        bG = [VG.g], (0, wG.k)(GG, null, bG, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: GG => "EncodeImageAsync" in GG,
            get: GG => GG.EncodeImageAsync
          },
          metadata: SG
        }, null, ZG), SG && Object.defineProperty(GG, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: SG
        }), (0, wG.n)(GG, ZG)
      })(), GG
    })();
    const KG = QG.EncodeImageAsync;
    async function hG(GG, bG, ZG, wG) {
      let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        LG = arguments.length > 5 ? arguments[5] : void 0,
        yG = arguments.length > 6 ? arguments[6] : void 0;
      const kG = await ZG.readPixels(0, 0, GG, bG);
      JG(GG, bG, new Uint8Array(kG.buffer), wG, SG, LG, !0, void 0, yG)
    }
    async function dG(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        SG = arguments.length > 4 ? arguments[4] : void 0,
        kG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        VG = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        pG = arguments.length > 7 ? arguments[7] : void 0;
      if (ZG instanceof Float32Array) {
        const GG = new Uint8Array(ZG.length);
        let bG = ZG.length;
        for (; bG--;) {
          const wG = ZG[bG];
          GG[bG] = Math.round(255 * (0, yG.Clamp)(wG))
        }
        ZG = GG
      }
      const fG = await QG.EncodeImageAsync(ZG, GG, bG, wG, kG, pG);
      void 0 !== SG && LG.f.DownloadBlob(fG, SG), fG.type !== wG && UG.c.Warn(`DumpData: The requested mimeType '${wG}' is not supported. The result has mimeType '${fG.type}' instead.`);
      const KG = await fG.arrayBuffer();
      return VG ? KG : `data:${wG};base64,${(0,YG.e)(KG)}`
    }

    function JG(GG, bG, ZG, wG) {
      let SG = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== SG || wG || (SG = ""), dG(GG, bG, ZG, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", SG, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((GG => {
        wG && wG(GG)
      }))
    }

    function rG() {
      pG && (pG?.then((GG => {
        GG.canvas instanceof HTMLCanvasElement && GG.canvas.remove(), GG.dumpEngine && (GG.dumpEngine.engine.dispose(), GG.dumpEngine.renderer.dispose(), GG.dumpEngine.wrapper.dispose())
      })), pG = null)
    }
    const zG = {
      DumpData: JG,
      DumpDataAsync: dG,
      DumpFramebuffer: hG,
      Dispose: rG
    };
    let EG = !1;

    function oG() {
      if (EG) return;
      EG = !0;
      LG.f.DumpData = JG, LG.f.DumpDataAsync = dG, LG.f.DumpFramebuffer = hG
    }
  },
  42268: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => QG,
      f: () => KG,
      h: () => hG
    });
    var wG = ZG(40857),
      SG = ZG(42277),
      LG = ZG(40393),
      yG = ZG(42248),
      kG = ZG(40416),
      UG = ZG(42286),
      YG = ZG(40398);
    class VG extends yG.e {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(GG, bG) {
        let ZG = arguments.length > 4 ? arguments[4] : void 0;
        const wG = {
          size: "number" === typeof bG ? bG : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: ZG,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...bG
        };
        super(GG, UG.g.FragmentUrl, {
          effectWrapper: "number" !== typeof bG && bG.effectWrapper ? void 0 : new UG.g(GG, ZG, wG),
          ...wG
        })
      }
      static _Parse(GG, bG, ZG, wG) {
        return kG.b.Parse((() => new VG(GG.name, GG.options, bG, GG.renderTargetSamplingMode, GG._engine, GG.reusable)), GG, ZG, wG)
      }
    }(() => {
      var GG;
      let bG, ZG = yG.e,
        wG = [];
      GG = class extends ZG {
        get face() {
          return this._effectWrapper.face
        }
        set face(GG) {
          this._effectWrapper.face = GG
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(GG, bG) {
          let ZG = arguments.length > 4 ? arguments[4] : void 0;
          const SG = {
            size: "number" === typeof bG ? bG : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: ZG,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...bG
          };
          super(GG, UG.g.FragmentUrl, {
            effectWrapper: "number" !== typeof bG && bG.effectWrapper ? void 0 : new UG.d(GG, ZG, SG),
            ...SG
          }), (0, LG.n)(this, wG)
        }
        static _Parse(bG, ZG, wG, SG) {
          return kG.b.Parse((() => new GG(bG.name, bG.options, ZG, bG.renderTargetSamplingMode, bG._engine, bG.reusable)), bG, wG, SG)
        }
      }, (() => {
        const SG = "function" === typeof Symbol && Symbol.metadata ? Object.create(ZG[Symbol.metadata] ?? null) : void 0;
        bG = [(0, YG.Q)()], (0, LG.k)(GG, null, bG, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: GG => "face" in GG,
            get: GG => GG.face
          },
          metadata: SG
        }, null, wG), SG && Object.defineProperty(GG, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: SG
        })
      })()
    })();
    var pG = ZG(37471),
      fG = ZG(40451);

    function QG(GG, bG, ZG, wG, SG, LG, kG, UG) {
      const YG = bG.CK();
      return bG.isReady = !1, SG = SG ?? bG.samplingMode, wG = wG ?? bG.type, LG = LG ?? bG.format, kG = kG ?? bG.width, UG = UG ?? bG.height, -1 === wG && (wG = 0), new Promise((VG => {
        const pG = new yG.e("postprocess", GG, null, null, 1, null, SG, YG, !1, void 0, wG, void 0, null, !1, LG);
        pG.externalTextureSamplerBinding = !0;
        const fG = YG.createRenderTargetTexture({
          width: kG,
          height: UG
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: SG,
          type: wG,
          format: LG
        });
        pG.onEffectCreatedObservable.addOnce((GG => {
          GG.executeWhenCompiled((() => {
            pG.onApply = GG => {
              GG._bindTexture("textureSampler", bG), GG.setFloat2("scale", 1, 1)
            }, ZG.postProcessManager.directRender([pG], fG, !0), YG.restoreDefaultFramebuffer(), YG._releaseTexture(bG), pG && pG.dispose(), fG._swapAndDie(bG), bG.type = wG, bG.format = 5, bG.isReady = !0, VG(bG)
          }))
        }))
      }))
    }
    async function KG(GG, bG, LG) {
      let kG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        UG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        YG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        VG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(GG) {
        if (GG.isReady()) return;
        if (GG.loadingError) throw new Error(GG.errorObject?.message || `Texture ${GG.name} errored while loading.`);
        const bG = GG.onLoadObservable;
        if (bG) return await new Promise((GG => bG.addOnce((() => GG()))));
        const ZG = GG._texture?.onLoadedObservable;
        if (ZG) return await new Promise((GG => ZG.addOnce((() => GG()))));
        throw new Error(`Cannot determine readiness of texture ${GG.name}.`)
      }(GG);
      const fG = GG.getInternalTexture(),
        QG = GG.is3D || !!fG?.is3D,
        {
          width: KG,
          height: hG
        } = GG.getSize(),
        dG = bG ?? KG,
        JG = LG ?? hG;
      if (YG || QG || function(GG) {
          switch (GG) {
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
        }(GG.textureFormat) || dG !== KG || JG !== hG) {
        if (GG.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${YG?"RTT":"compression"} is not supported.`);
        return await async function(GG, bG, LG, kG, UG) {
          let YG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const VG = GG.Dv(),
            pG = VG.CK(),
            fG = GG.getInternalTexture(),
            QG = GG.is3D || !!fG?.is3D;
          let KG;
          if (pG.isWebGPU ? QG ? await ZG.e(372).then((() => ZG(61986))) : GG.isCube ? await ZG.e(373).then((() => ZG(61995))) : await ZG.e(374).then((() => ZG(61997))) : QG ? await ZG.e(369).then((() => ZG(61967))) : GG.isCube ? await ZG.e(370).then((() => ZG(61970))) : await ZG.e(371).then((() => ZG(61977))), QG) KG = new yG.e("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: wG.d.NEAREST_NEAREST_MIPNEAREST,
            engine: pG,
            shaderLanguage: pG.isWebGPU ? 1 : 0
          });
          else if (GG.isCube) {
            const GG = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            KG = new yG.e("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: wG.d.NEAREST_NEAREST_MIPNEAREST,
              engine: pG,
              defines: GG[kG],
              shaderLanguage: pG.isWebGPU ? 1 : 0
            })
          } else KG = new yG.e("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: wG.d.NEAREST_NEAREST_MIPNEAREST,
            engine: pG,
            shaderLanguage: pG.isWebGPU ? 1 : 0
          });
          await new Promise((GG => {
            KG.onEffectCreatedObservable.addOnce((bG => {
              bG.executeWhenCompiled((() => {
                GG(0)
              }))
            }))
          }));
          const hG = new SG.b("temp", {
            width: bG,
            height: LG
          }, VG, !1);
          KG.onApply = function(bG) {
            bG.setTexture("textureSampler", GG), bG.setFloat("lod", UG), bG.setInt("gamma", GG.gammaSpace ? 1 : 0), QG && bG.setFloat("slice", YG)
          };
          try {
            if (hG.renderTarget && fG) {
              const ZG = fG.samplingMode;
              0 !== UG ? GG.updateSamplingMode(wG.d.NEAREST_NEAREST_MIPNEAREST) : GG.updateSamplingMode(wG.d.NEAREST_NEAREST), VG.postProcessManager.directRender([KG], hG.renderTarget, !0), GG.updateSamplingMode(ZG);
              const SG = await pG.readPixels(0, 0, bG, LG),
                yG = new Uint8Array(SG.buffer, SG.byteOffset, SG.byteLength);
              return pG.unBindFramebuffer(hG.renderTarget), yG
            }
            throw Error("Render to texture failed.")
          } finally {
            hG.dispose(), KG.dispose()
          }
        }(GG, dG, JG, kG, UG, VG)
      }
      let rG = await GG.readPixels(kG, UG);
      if (!rG) throw new Error(`Failed to read pixels from texture ${GG.name}.`);
      if (rG instanceof Float32Array) {
        const GG = new Uint8Array(rG.length);
        let bG = rG.length;
        for (; bG--;) {
          const ZG = rG[bG];
          GG[bG] = Math.round(255 * (0, pG.Clamp)(ZG))
        }
        rG = GG
      }
      const zG = dG * JG,
        EG = 4 * zG;
      if (rG.length !== EG) {
        const GG = 0 === zG ? 0 : rG.length / zG;
        if (1 === GG || 2 === GG || 3 === GG) {
          const bG = new Uint8Array(EG);
          for (let ZG = 0, wG = 0, SG = 0; ZG < zG; ZG++, SG += 4) {
            const ZG = rG[wG++];
            if (1 === GG) {
              bG[SG] = ZG, bG[SG + 1] = ZG, bG[SG + 2] = ZG, bG[SG + 3] = 255;
              continue
            }
            const LG = rG[wG++];
            2 !== GG ? (bG[SG] = ZG, bG[SG + 1] = LG, bG[SG + 2] = rG[wG++], bG[SG + 3] = 255) : (bG[SG] = ZG, bG[SG + 1] = LG, bG[SG + 2] = 0, bG[SG + 3] = 255)
          }
          return bG
        }
      }
      return rG
    }
    const hG = {
      CreateResizedCopy: function(GG, bG, ZG) {
        let LG = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const yG = GG.Dv(),
          kG = yG.CK(),
          UG = new SG.b("resized" + GG.name, {
            width: bG,
            height: ZG
          }, yG, !GG.noMipmap, !0, GG._texture.type, !1, GG.samplingMode, !1);
        UG.wrapU = GG.wrapU, UG.wrapV = GG.wrapV, UG.uOffset = GG.uOffset, UG.vOffset = GG.vOffset, UG.uScale = GG.uScale, UG.vScale = GG.vScale, UG.uAng = GG.uAng, UG.vAng = GG.vAng, UG.wAng = GG.wAng, UG.coordinatesIndex = GG.coordinatesIndex, UG.level = GG.level, UG.anisotropicFilteringLevel = GG.anisotropicFilteringLevel, UG._texture.isReady = !1, GG.wrapU = wG.d.CLAMP_ADDRESSMODE, GG.wrapV = wG.d.CLAMP_ADDRESSMODE;
        const YG = new VG("pass", 1, null, LG ? wG.d.BILINEAR_SAMPLINGMODE : wG.d.NEAREST_SAMPLINGMODE, kG, !1, 0);
        return YG.externalTextureSamplerBinding = !0, YG.onEffectCreatedObservable.addOnce((bG => {
          bG.executeWhenCompiled((() => {
            YG.onApply = function(bG) {
              bG.setTexture("textureSampler", GG)
            };
            const bG = UG.renderTarget;
            bG && (yG.postProcessManager.directRender([YG], bG), kG.unBindFramebuffer(bG), UG.disposeFramebufferObjects(), YG.dispose(), UG.getInternalTexture().isReady = !0)
          }))
        })), UG
      },
      ApplyPostProcess: QG,
      ToHalfFloat: fG.h,
      FromHalfFloat: fG.c,
      GetTextureDataAsync: KG
    }
  },
  42248: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => KG
    });
    var wG = ZG(40393),
      SG = ZG(40484),
      LG = ZG(37465),
      yG = ZG(37439),
      kG = ZG(40228),
      UG = ZG(40398),
      YG = ZG(40416),
      VG = ZG(37484),
      pG = ZG(40280),
      fG = ZG(40319),
      QG = ZG(42253);
    let KG = (() => {
        var GG;
        let bG, kG, pG, KG, hG, JG, rG, zG, EG, oG, XG, uG, iG, CG, WG, mG, IG = [],
          FG = [],
          vG = [],
          aG = [],
          cG = [],
          lG = [],
          jG = [],
          PG = [],
          MG = [],
          AG = [],
          sG = [],
          qG = [],
          nG = [],
          gG = [],
          eG = [],
          RG = [],
          TG = [],
          HG = [],
          tG = [],
          DG = [],
          NG = [],
          OG = [],
          xG = [],
          BG = [],
          Gb = [],
          bb = [],
          Zb = [],
          wb = [],
          Sb = [];
        return GG = class {
          static get ForceGLSL() {
            return QG.e.ForceGLSL
          }
          static set ForceGLSL(GG) {
            QG.e.ForceGLSL = GG
          }
          static RegisterShaderCodeProcessing(GG, bG) {
            QG.e.RegisterShaderCodeProcessing(GG, bG)
          }
          get name() {
            return this._effectWrapper.name
          }
          set name(GG) {
            this._effectWrapper.name = GG
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode
          }
          set alphaMode(GG) {
            this._effectWrapper.alphaMode = GG
          }
          get samples() {
            return this._samples
          }
          set samples(GG) {
            this._samples = Math.min(GG, this._engine.getCaps().maxMSAASamples), this._textures.forEach((GG => {
              GG.setSamples(this._samples)
            }))
          }
          get shaderLanguage() {
            return this._shaderLanguage
          }
          getEffectName() {
            return this._fragmentUrl
          }
          set onActivate(GG) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), GG && (this._onActivateObserver = this.onActivateObservable.add(GG))
          }
          set onSizeChanged(GG) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(GG)
          }
          set onApply(GG) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(GG)
          }
          set onBeforeRender(GG) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(GG)
          }
          set onAfterRender(GG) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(GG)
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd]
          }
          set inputTexture(GG) {
            this._forcedOutputTexture = GG
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty())
          }
          getCamera() {
            return this.B3
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.fGG(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(bG, ZG, kG, UG, YG, VG) {
            let pG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              fG = arguments.length > 7 ? arguments[7] : void 0,
              KG = arguments.length > 8 ? arguments[8] : void 0,
              hG = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              JG = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              rG = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              zG = arguments.length > 12 ? arguments[12] : void 0,
              EG = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              oG = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              XG = arguments.length > 15 ? arguments[15] : void 0,
              uG = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, wG.n)(this, IG), null), this.uniqueId = (0, wG.n)(this, FG, void 0), this.width = ((0, wG.n)(this, vG), (0, wG.n)(this, aG, -1)), this.height = ((0, wG.n)(this, cG), (0, wG.n)(this, lG, -1)), this.nodeMaterialSource = ((0, wG.n)(this, jG), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, wG.n)(this, PG, void 0), this.clearColor = ((0, wG.n)(this, MG), (0, wG.n)(this, AG, void 0)), this.autoClear = ((0, wG.n)(this, sG), (0, wG.n)(this, qG, !0)), this.forceAutoClearInAlphaMode = ((0, wG.n)(this, nG), (0, wG.n)(this, gG, !1)), this.alphaConstants = ((0, wG.n)(this, eG), (0, wG.n)(this, RG, void 0)), this.animations = ((0, wG.n)(this, TG), []), this.enablePixelPerfectMode = (0, wG.n)(this, HG, !1), this.forceFullscreenViewport = ((0, wG.n)(this, tG), (0, wG.n)(this, DG, !0)), this.inspectableCustomProperties = (0, wG.n)(this, NG), this.scaleMode = (0, wG.n)(this, OG, 1), this.alwaysForcePOT = ((0, wG.n)(this, xG), (0, wG.n)(this, BG, !1)), this._samples = ((0, wG.n)(this, Gb), (0, wG.n)(this, bb, 1)), this.adaptScaleToCurrentViewport = ((0, wG.n)(this, Zb), (0, wG.n)(this, wb, !1)), this.doNotSerialize = ((0, wG.n)(this, Sb), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new SG.g(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new yG.m(1, 1), this._texelSize = yG.m.Zero(), this.onActivateObservable = new LG.c, this.onSizeChangedObservable = new LG.c, this.onApplyObservable = new LG.c, this.onBeforeRenderObservable = new LG.c, this.onAfterRenderObservable = new LG.c, this.Gl = new LG.c, dG();
            let iG, CG = 1,
              WG = null;
            if (kG && !Array.isArray(kG)) {
              const GG = kG;
              kG = GG.uniforms ?? null, UG = GG.samplers ?? null, CG = GG.size ?? 1, VG = GG.camera ?? null, pG = GG.samplingMode ?? 1, fG = GG.engine, KG = GG.reusable, hG = Array.isArray(GG.defines) ? GG.defines.join("\n") : GG.defines ?? null, JG = GG.textureType ?? 0, rG = GG.vertexUrl ?? "postprocess", zG = GG.indexParameters, EG = GG.blockCompilation ?? !1, oG = GG.textureFormat ?? 5, XG = GG.shaderLanguage ?? 0, WG = GG.uniformBuffers ?? null, uG = GG.extraInitializations, iG = GG.effectWrapper
            } else YG && (CG = "number" === typeof YG ? YG : {
              width: YG.width,
              height: YG.height
            });
            if (this._useExistingThinPostProcess = !!iG, this._effectWrapper = iG ?? new QG.e({
                name: bG,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: ZG,
                engine: fG || VG?.Dv().CK(),
                uniforms: kG,
                samplers: UG,
                uniformBuffers: WG,
                defines: hG,
                vertexUrl: rG,
                indexParameters: zG,
                blockCompilation: !0,
                shaderLanguage: XG,
                extraInitializations: void 0
              }), this.name = bG, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != VG ? (this.B3 = VG, this._scene = VG.Dv(), VG.attachPostProcess(this), this._engine = this._scene.CK(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : fG && (this._engine = fG, this._engine.postProcesses.push(this)), this._options = CG, this.renderTargetSamplingMode = pG || 1, this._reusable = KG || !1, this._textureType = JG, this._textureFormat = oG, this._shaderLanguage = XG || 0, this._samplers = UG || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = ZG, this._vertexUrl = rG, this._parameters = kG || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = WG || [], this._indexParameters = zG, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const bG = [];
              this._gatherImports(this._engine.isWebGPU && !GG.ForceGLSL, bG), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(EG, hG, uG, bG)
            }
          }
          _gatherImports() {
            let GG = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? GG.push(Promise.all([ZG.e(368).then((() => ZG(61951)))])) : GG.push(Promise.all([ZG.e(358).then((() => ZG(61824)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          CK() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(GG) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = GG, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new SG.g(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              wG = arguments.length > 3 ? arguments[3] : void 0,
              SG = arguments.length > 4 ? arguments[4] : void 0,
              LG = arguments.length > 5 ? arguments[5] : void 0,
              yG = arguments.length > 6 ? arguments[6] : void 0,
              kG = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(GG, bG, ZG, wG, SG, LG, yG, kG), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(GG, bG) {
            let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let SG = 0; SG < this._textureCache.length; SG++)
              if (this._textureCache[SG].texture.width === GG.width && this._textureCache[SG].texture.height === GG.height && this._textureCache[SG].postProcessChannel === ZG && this._textureCache[SG].texture._generateDepthBuffer === bG.generateDepthBuffer && this._textureCache[SG].texture.samples === bG.samples) return this._textureCache[SG].texture;
            const wG = this._engine.createRenderTargetTexture(GG, bG);
            return this._textureCache.push({
              texture: wG,
              postProcessChannel: ZG,
              lastUsedRenderId: -1
            }), wG
          }
          _flushTextureCache() {
            const GG = this._renderId;
            for (let bG = this._textureCache.length - 1; bG >= 0; bG--)
              if (GG - this._textureCache[bG].lastUsedRenderId > 100) {
                let GG = !1;
                for (let ZG = 0; ZG < this._textures.length; ZG++)
                  if (this._textures.data[ZG] === this._textureCache[bG].texture) {
                    GG = !0;
                    break
                  } GG || (this._textureCache[bG].texture.dispose(), this._textureCache.splice(bG, 1))
              }
          }
          resize(GG, bG) {
            let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              SG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = GG, this.height = bG;
            let LG = null;
            if (ZG)
              for (let UG = 0; UG < ZG._postProcesses.length; UG++)
                if (null !== ZG._postProcesses[UG]) {
                  LG = ZG._postProcesses[UG];
                  break
                } const yG = {
                width: this.width,
                height: this.height
              },
              kG = {
                generateMipMaps: wG,
                generateDepthBuffer: SG || LG === this,
                generateStencilBuffer: (SG || LG === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(yG, kG, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(yG, kG, 1)), this._texelSize.fGG(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let GG;
            if (this._shareOutputWithPostProcess) GG = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) GG = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let bG;
              GG = this.inputTexture;
              for (let ZG = 0; ZG < this._textureCache.length; ZG++)
                if (this._textureCache[ZG].texture === GG) {
                  bG = this._textureCache[ZG];
                  break
                } bG && (bG.lastUsedRenderId = this._renderId)
            }
            return GG
          }
          activate(GG) {
            let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              ZG = arguments.length > 2 ? arguments[2] : void 0;
            const wG = null === GG || void 0 !== GG.cameraRigMode ? GG || this.B3 : null,
              SG = wG?.Dv() ?? GG,
              LG = SG.CK(),
              yG = LG.getCaps().maxTextureSize,
              kG = (bG ? bG.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              UG = (bG ? bG.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let YG = this._options.width || kG,
              VG = this._options.height || UG;
            const pG = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let QG = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const GG = LG.currentViewport;
                GG && (YG *= GG.width, VG *= GG.height)
              }(pG || this.alwaysForcePOT) && (this._options.width || (YG = LG.needPOTTextures ? (0, fG.h)(YG, yG, this.scaleMode) : YG), this._options.height || (VG = LG.needPOTTextures ? (0, fG.h)(VG, yG, this.scaleMode) : VG)), this.width === YG && this.height === VG && (QG = this._getTarget()) || this.resize(YG, VG, wG, pG, ZG), this._textures.forEach((GG => {
                GG.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(GG, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return QG || (QG = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.fGG(kG / YG, UG / VG), this._engine.bindFramebuffer(QG, 0, kG, UG, this.forceFullscreenViewport)) : (this._scaleRatio.fGG(1, 1), this._engine.bindFramebuffer(QG, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(wG), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : SG.clearColor, SG._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), QG
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
            let GG;
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.CK().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), GG = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", GG?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
          }
          _disposeTextureCache() {
            for (let GG = this._textureCache.length - 1; GG >= 0; GG--) this._textureCache[GG].texture.dispose();
            this._textureCache.length = 0
          }
          setPrePassRenderer(GG) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = GG.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
          }
          dispose(GG) {
            let bG;
            if (GG = GG || this.B3, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (bG = this._parentContainer.postProcesses.indexOf(this), bG > -1 && this._parentContainer.postProcesses.splice(bG, 1), this._parentContainer = null), bG = this._engine.postProcesses.indexOf(this), -1 !== bG && this._engine.postProcesses.splice(bG, 1), this.Gl.notifyObservers(), GG) {
              if (GG.detachPostProcess(this), bG = GG._postProcesses.indexOf(this), 0 === bG && GG._postProcesses.length > 0) {
                const GG = this.B3._getFirstPostProcess();
                GG && GG.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const GG = YG.b.Serialize(this),
              bG = this.getCamera() || this._scene && this._scene.activeCamera;
            return GG.customType = "BABYLON." + this.getClassName(), GG.cameraId = bG ? bG.id : null, GG.reusable = this._reusable, GG.textureType = this._textureType, GG.fragmentUrl = this._fragmentUrl, GG.parameters = this._parameters, GG.samplers = this._samplers, GG.uniformBuffers = this._uniformBuffers, GG.options = this._options, GG.defines = this._postProcessDefines, GG.textureFormat = this._textureFormat, GG.vertexUrl = this._vertexUrl, GG.indexParameters = this._indexParameters, GG
          }
          clone() {
            const bG = this.serialize();
            bG._engine = this._engine, bG.cameraId = null;
            const ZG = GG.Parse(bG, this._scene, "");
            return ZG ? (ZG.onActivateObservable = this.onActivateObservable.clone(), ZG.onSizeChangedObservable = this.onSizeChangedObservable.clone(), ZG.onApplyObservable = this.onApplyObservable.clone(), ZG.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), ZG.onAfterRenderObservable = this.onAfterRenderObservable.clone(), ZG._prePassEffectConfiguration = this._prePassEffectConfiguration, ZG) : null
          }
          static Parse(GG, bG, ZG) {
            const wG = (0, VG.e)(GG.customType);
            if (!wG || !wG._Parse) return null;
            const SG = bG ? bG.getCameraById(GG.cameraId) : null;
            return wG._Parse(GG, SG, bG, ZG)
          }
          static _Parse(bG, ZG, wG, SG) {
            return YG.b.Parse((() => new GG(bG.name, bG.fragmentUrl, bG.parameters, bG.samplers, bG.options, ZG, bG.renderTargetSamplingMode, bG._engine, bG.reusable, bG.defines, bG.textureType, bG.vertexUrl, bG.indexParameters, !1, bG.textureFormat)), bG, wG, SG)
          }
        }, (() => {
          const ZG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          bG = [(0, UG.Q)()], kG = [(0, UG.Q)()], pG = [(0, UG.Q)()], KG = [(0, UG.Q)()], hG = [(0, UG.Q)()], JG = [(0, UG.q)()], rG = [(0, UG.Q)()], zG = [(0, UG.Q)()], EG = [(0, UG.Q)()], oG = [(0, UG.Q)()], XG = [(0, UG.Q)()], uG = [(0, UG.Q)()], iG = [(0, UG.Q)()], CG = [(0, UG.Q)()], WG = [(0, UG.Q)("samples")], mG = [(0, UG.Q)()], (0, wG.k)(GG, null, kG, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: GG => "name" in GG,
              get: GG => GG.name
            },
            metadata: ZG
          }, null, IG), (0, wG.k)(GG, null, EG, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: GG => "alphaMode" in GG,
              get: GG => GG.alphaMode
            },
            metadata: ZG
          }, null, IG), (0, wG.k)(null, null, bG, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: GG => "uniqueId" in GG,
              get: GG => GG.uniqueId,
              set: (GG, bG) => {
                GG.uniqueId = bG
              }
            },
            metadata: ZG
          }, FG, vG), (0, wG.k)(null, null, pG, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: GG => "width" in GG,
              get: GG => GG.width,
              set: (GG, bG) => {
                GG.width = bG
              }
            },
            metadata: ZG
          }, aG, cG), (0, wG.k)(null, null, KG, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: GG => "height" in GG,
              get: GG => GG.height,
              set: (GG, bG) => {
                GG.height = bG
              }
            },
            metadata: ZG
          }, lG, jG), (0, wG.k)(null, null, hG, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: GG => "renderTargetSamplingMode" in GG,
              get: GG => GG.renderTargetSamplingMode,
              set: (GG, bG) => {
                GG.renderTargetSamplingMode = bG
              }
            },
            metadata: ZG
          }, PG, MG), (0, wG.k)(null, null, JG, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: GG => "clearColor" in GG,
              get: GG => GG.clearColor,
              set: (GG, bG) => {
                GG.clearColor = bG
              }
            },
            metadata: ZG
          }, AG, sG), (0, wG.k)(null, null, rG, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: GG => "autoClear" in GG,
              get: GG => GG.autoClear,
              set: (GG, bG) => {
                GG.autoClear = bG
              }
            },
            metadata: ZG
          }, qG, nG), (0, wG.k)(null, null, zG, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: GG => "forceAutoClearInAlphaMode" in GG,
              get: GG => GG.forceAutoClearInAlphaMode,
              set: (GG, bG) => {
                GG.forceAutoClearInAlphaMode = bG
              }
            },
            metadata: ZG
          }, gG, eG), (0, wG.k)(null, null, oG, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: GG => "alphaConstants" in GG,
              get: GG => GG.alphaConstants,
              set: (GG, bG) => {
                GG.alphaConstants = bG
              }
            },
            metadata: ZG
          }, RG, TG), (0, wG.k)(null, null, XG, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: GG => "enablePixelPerfectMode" in GG,
              get: GG => GG.enablePixelPerfectMode,
              set: (GG, bG) => {
                GG.enablePixelPerfectMode = bG
              }
            },
            metadata: ZG
          }, HG, tG), (0, wG.k)(null, null, uG, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: GG => "forceFullscreenViewport" in GG,
              get: GG => GG.forceFullscreenViewport,
              set: (GG, bG) => {
                GG.forceFullscreenViewport = bG
              }
            },
            metadata: ZG
          }, DG, NG), (0, wG.k)(null, null, iG, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: GG => "scaleMode" in GG,
              get: GG => GG.scaleMode,
              set: (GG, bG) => {
                GG.scaleMode = bG
              }
            },
            metadata: ZG
          }, OG, xG), (0, wG.k)(null, null, CG, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: GG => "alwaysForcePOT" in GG,
              get: GG => GG.alwaysForcePOT,
              set: (GG, bG) => {
                GG.alwaysForcePOT = bG
              }
            },
            metadata: ZG
          }, BG, Gb), (0, wG.k)(null, null, WG, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: GG => "_samples" in GG,
              get: GG => GG._samples,
              set: (GG, bG) => {
                GG._samples = bG
              }
            },
            metadata: ZG
          }, bb, Zb), (0, wG.k)(null, null, mG, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: GG => "adaptScaleToCurrentViewport" in GG,
              get: GG => GG.adaptScaleToCurrentViewport,
              set: (GG, bG) => {
                GG.adaptScaleToCurrentViewport = bG
              }
            },
            metadata: ZG
          }, wb, Sb), ZG && Object.defineProperty(GG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ZG
          })
        })(), GG
      })(),
      hG = !1;

    function dG() {
      hG || (hG = !0, pG.c.prototype.setTextureFromPostProcess = function(GG, bG, ZG) {
        let wG = null;
        bG && (bG._forcedOutputTexture ? wG = bG._forcedOutputTexture : bG._textures.data[bG._currentRenderTextureInd] && (wG = bG._textures.data[bG._currentRenderTextureInd])), this._bindTexture(GG, wG?.texture ?? null, ZG)
      }, pG.c.prototype.setTextureFromPostProcessOutput = function(GG, bG, ZG) {
        this._bindTexture(GG, bG?._outputTexture?.texture ?? null, ZG)
      }, kG.d.prototype.setTextureFromPostProcess = function(GG, bG) {
        this._engine.setTextureFromPostProcess(this._samplers[GG], bG, GG)
      }, kG.d.prototype.setTextureFromPostProcessOutput = function(GG, bG) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[GG], bG, GG)
      }, (0, VG.i)("BABYLON.PostProcess", KG))
    }
  },
  42286: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG,
      g: () => LG
    });
    var wG = ZG(42253),
      SG = ZG(37463);
    class LG extends wG.e {
      _gatherImports(GG, bG) {
        GG ? (this._webGPUReady = !0, bG.push(Promise.all([ZG.e(375).then((() => ZG(62004)))]))) : bG.push(Promise.all([ZG.e(376).then((() => ZG(62011)))])), super._gatherImports(GG, bG)
      }
      constructor(GG) {
        let bG = arguments.length > 2 ? arguments[2] : void 0;
        const ZG = {
          name: GG,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || SG.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: LG.FragmentUrl,
          ...bG
        };
        ZG.engine || (ZG.engine = SG.c.LastCreatedEngine), super(ZG)
      }
    }
    LG.FragmentUrl = "pass";
    class yG extends wG.e {
      _gatherImports(GG, bG) {
        GG ? (this._webGPUReady = !0, bG.push(Promise.all([ZG.e(377).then((() => ZG(62017)))]))) : bG.push(Promise.all([ZG.e(378).then((() => ZG(62025)))])), super._gatherImports(GG, bG)
      }
      constructor(GG) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: GG,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || SG.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: yG.FragmentUrl,
          defines: "#define POSITIVEX"
        }), this._face = 0
      }
      get face() {
        return this._face
      }
      set face(GG) {
        if (!(GG < 0 || GG > 5)) switch (this._face = GG, this._face) {
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
    yG.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);