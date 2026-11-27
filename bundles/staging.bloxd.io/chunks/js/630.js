export const id = 630;
export const ids = [630];
export const modules = {
  54357: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => zr
    });
    var Zr = Qr(38595),
      Wr = Qr(38560),
      ar = Qr(42310),
      jr = Qr(42002),
      Ir = Qr(41818),
      fr = Qr(40246),
      Er = Qr(41987),
      pr = Qr(42014),
      xr = Qr(38576),
      mr = Qr(41781),
      Nr = Qr(41960),
      Ur = Qr(42044);
    class tr {
      get renderList() {
        return this._renderList
      }
      set renderList(rr) {
        this._renderList !== rr && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), rr && (this._unObserveRenderList = (0, xr.h)(rr, this._renderListHasChanged)), this._renderList = rr)
      }
      get disableImageProcessing() {
        return this._disableImageProcessing
      }
      set disableImageProcessing(rr) {
        rr !== this._disableImageProcessing && (this._disableImageProcessing = rr, this._scene.markAllMaterialsAsDirty(64))
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(rr) {
        this._disableDepthPrePass = rr, this._renderingManager.disableDepthPrePass = rr
      }
      get name() {
        return this._name
      }
      set name(rr) {
        if (this._name !== rr) {
          if (this._name = rr, this._sceneUBOs)
            for (let rr = 0; rr < this._sceneUBOs.length; ++rr) this._sceneUBOs[rr].name = `Scene ubo #${rr} for ${this.name}`;
          if (this._scene)
            for (let rr = 0; rr < this._renderPassIds.length; ++rr) {
              const Sr = this._renderPassIds[rr];
              this._engine._renderPassNames[Sr] = `${this._name}#${rr}`
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
      setMaterialForRendering(rr, Sr) {
        let Qr;
        Qr = Array.isArray(rr) ? rr : [rr];
        for (let Zr = 0; Zr < Qr.length; ++Zr)
          for (let rr = 0; rr < this.options.numPasses; ++rr) {
            let Wr = Qr[Zr];
            Qr[Zr].gC && (Wr = Qr[Zr].Rar), Wr.setMaterialForRenderPass(this._renderPassIds[rr], void 0 !== Sr ? Array.isArray(Sr) ? Sr[rr] : Sr : void 0)
          }
      }
      _freezeActiveMeshes(rr) {
        this._freezeActiveMeshesCancel = (0, mr.f)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, rr)
            for (let rr = 0; rr < this._activeMeshes.length; rr++) this._activeMeshes.data[rr]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((rr, Sr) => {
          this._freezeActiveMeshesCancel = null, Sr ? (fr.c.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), rr && fr.c.Error(rr)) : (fr.c.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), rr && (fr.c.Error(rr), rr.stack && fr.c.Error(rr.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let rr = 0; rr < this._activeMeshes.length; rr++) this._activeMeshes.data[rr]._unFreeze();
        this._isFrozen = !1
      }
      constructor(rr, Sr, Qr) {
        this._unObserveRenderList = null, this._renderListHasChanged = (rr, Sr) => {
          const Qr = this._renderList ? this._renderList.length : 0;
          if (0 === Sr && Qr > 0 || 0 === Qr)
            for (const Zr of this._scene.meshes) Zr._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new Zr.d, this.onAfterRenderObservable = new Zr.d, this.onBeforeRenderingManagerRenderObservable = new Zr.d, this.onAfterRenderingManagerRenderObservable = new Zr.d, this.onInitRenderingObservable = new Zr.d, this.onFinishRenderingObservable = new Zr.d, this.onFastPathRenderObservable = new Zr.d, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new Nr.h(256), this._activeBoundingBoxes = new Nr.h(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = rr, this._scene = Sr, this._engine = this._scene.MU(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...Qr
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new pr.b(Sr), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const rr of this._scene.lights) rr.getTypeID() === Ur.b.LIGHTTYPEID_CLUSTERED_CONTAINER && rr.isSupported && rr._updateBatches(this.activeCamera).render()
        })), this._scene.addObjectRenderer(this)
      }
      _releaseRenderPassId() {
        for (let rr = 0; rr < this.options.numPasses; ++rr) this._engine.releaseRenderPassId(this._renderPassIds[rr]);
        this._renderPassIds.length = 0
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let rr = 0; rr < this.options.numPasses; ++rr) this._renderPassIds[rr] = this._engine.createRenderPassId(`${this.name}#${rr}`)
      }
      _createSceneUBO(rr, Sr) {
        const Qr = this._scene.MU(),
          Zr = new Er.d(Qr, void 0, Sr, rr, void 0, !1);
        return Zr.addUniform("viewProjection", 16), Sr && Zr.addUniform("viewProjectionR", 16), Zr.addUniform("view", 16), Zr.addUniform("projection", 16), Zr.addUniform("vEyePosition", 4), Zr.addUniform("inverseProjection", 16), Zr
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const rr = this._engine._currentRenderTarget,
          Sr = !(!rr || !rr.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const rr = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${rr} for ${this.name}`, Sr)), this._sceneUBOIsMultiview.push(Sr)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== Sr && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, Sr), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = Sr);
        const Qr = this._sceneUBOs[this._currentSceneUBOIndex++];
        return Qr.unbindEffect(), Qr
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1
      }
      get refreshRate() {
        return this._refreshRate
      }
      set refreshRate(rr) {
        this._refreshRate = rr, this.resetRefreshCounter()
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1))
      }
      isReadyForRendering(rr, Sr) {
        this.prepareRenderList(), this.initRender(rr, Sr);
        const Qr = this._checkReadiness();
        return this.finishRender(), Qr
      }
      prepareRenderList() {
        const rr = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let Sr = 0; Sr < this._waitingRenderList.length; Sr++) {
              const Qr = this._waitingRenderList[Sr],
                Zr = rr.getMeshById(Qr);
              Zr && this.renderList.push(Zr)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const rr = this._scene.meshes;
          for (let Sr = 0; Sr < rr.length; Sr++) {
            const Qr = rr[Sr];
            this.renderListPredicate(Qr) && this.renderList.push(Qr)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(rr, Sr) {
        const Qr = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), Qr && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(Qr.getViewMatrix(), Qr.getProjectionMatrix(!0)), this._scene._activeCamera = Qr, this._engine.setViewport(Qr.rigParent ? Qr.rigParent.viewport : Qr.viewport, rr, Sr)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const rr = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (rr.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), rr._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== rr.activeCamera && rr.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), rr.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Qr = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[rr], this.onBeforeRenderObservable.notifyObservers(rr);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(rr);
        else {
          const Sr = this._prepareRenderingManager(rr),
            Qr = this._scene.getOutlineRenderer?.(),
            Zr = Qr?.enabled;
          Qr && (Qr.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(rr), this._renderingManager.render(this.customRenderFunction, Sr, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(rr), Qr && (Qr.enabled = Zr)
        }
        Sr || this.onAfterRenderObservable.notifyObservers(rr), this._engine.currentRenderPassId = Qr
      }
      _checkReadiness() {
        const rr = this._scene,
          Sr = this._engine.currentRenderPassId;
        let Qr = !0;
        rr.getViewMatrix() || rr.updateTransformMatrix();
        const Zr = this.options.numPasses;
        for (let Wr = 0; Wr < Zr && Qr; Wr++) {
          const Sr = this.renderList ? this.renderList : rr.frameGraph ? rr.meshes : rr.getActiveMeshes().data,
            ar = this.renderList || rr.frameGraph ? Sr.length : rr.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[Wr], this.onBeforeRenderObservable.notifyObservers(Wr);
          let jr = null,
            Ir = ar;
          this.getCustomRenderList && (jr = this.getCustomRenderList(Wr, Sr, ar), jr && (Ir = jr.length)), jr || (jr = Sr), this.options.doNotChangeAspectRatio || rr.updateTransformMatrix(!0);
          for (let rr = 0; rr < Ir && Qr; ++rr) {
            const Sr = jr[rr];
            if (!Sr.isEnabled() || Sr.isBlocked || !Sr.isVisible || !Sr.jT) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(Sr, this.refreshRate, !0)) {
                Qr = !1;
                continue
              }
            } else if (!Sr.isReady(!0)) {
              Qr = !1;
              continue
            }
            let Zr = Sr._edgesRenderer,
              Wr = Sr.hasThinInstances;
            if (Sr.gC) {
              const rr = Sr.Rar;
              rr.edgesShareWithInstances && rr._edgesRenderer?.isEnabled && (Zr = rr._edgesRenderer, Wr = !0)
            } else Sr.Har && Sr.edgesShareWithInstances && (Wr = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && Zr?.isEnabled && (Zr.isReady(Wr) || (Qr = !1))
          }
          if (this.renderParticles && rr.particlesEnabled) {
            const Sr = this.particleSystemList || rr.pT;
            for (const rr of Sr) rr.isReady() || (Qr = !1)
          }
          if (this.renderSprites && rr.spritesEnabled) {
            const Sr = this.spriteManagerList || rr.spriteManagers;
            if (Sr)
              for (const Zr of Sr) rr.activeCamera && 0 === (Zr.layerMask & rr.activeCamera.layerMask) || Zr.isReady && !Zr.isReady() && (Qr = !1)
          }
          this.onAfterRenderObservable.notifyObservers(Wr), Zr > 1 && (rr.incrementRenderId(), rr.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = Sr, Qr
      }
      _prepareRenderingManager() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Qr = this._scene;
        let Zr, Wr, ar = null;
        const jr = this.renderList ? this.renderList : Qr.frameGraph ? Qr.meshes : Qr.getActiveMeshes().data,
          Ir = this.renderList || Qr.frameGraph ? jr.length : Qr.getActiveMeshes().length;
        if (this.getCustomRenderList && (ar = this.getCustomRenderList(rr, jr, Ir)), ar) Zr = ar.length, Wr = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !Sr && !this._engine.isWebGPU) return jr;
          this._defaultRenderListPrepared = !0, ar = jr, Zr = Ir, Wr = !this.renderList || this.forceLayerMaskCheck
        }
        const fr = Qr.activeCamera,
          Er = this.cameraForLOD ?? fr,
          pr = Qr.getBoundingBoxRenderer?.();
        if (Qr._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && pr) {
            pr.reset();
            for (let rr = 0; rr < this._activeBoundingBoxes.length; rr++) {
              const Sr = this._activeBoundingBoxes.data[rr];
              pr.renderList.push(Sr)
            }
          }
          return ar
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), pr && pr.reset(), this.renderMeshes) {
          const rr = Qr.getRenderId(),
            Sr = Qr.getFrameId();
          for (let jr = 0; jr < Zr; jr++) {
            const Zr = ar[jr];
            if (Zr && !Zr.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(Zr, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!Zr.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let ar, jr;
              if (Er) {
                const rr = Zr._internalAbstractMeshDataInfo._currentLOD.get(Er);
                rr && rr[1] === Sr ? ar = rr[0] : (ar = Qr.customLODSelector ? Qr.customLODSelector(Zr, Er) : Zr.getLOD(Er), rr ? (rr[0] = ar, rr[1] = Sr) : Zr._internalAbstractMeshDataInfo._currentLOD.set(Er, [ar, Sr]))
              } else ar = Zr;
              if (!ar) continue;
              if (ar !== Zr && 0 !== ar.billboardMode && ar.computeWorldMatrix(), ar._preActivateForIntermediateRendering(rr), jr = !(!Wr || !fr) && 0 === (Zr.layerMask & fr.layerMask), Zr.isEnabled() && Zr.isVisible && Zr.jT && !jr) {
                if (this._activeMeshes.push(Zr), ar._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, ar !== Zr && ar._activate(rr, !0), this.enableBoundingBoxRendering && pr && pr._preActiveMesh(Zr), Zr._activate(rr, !0) && Zr.jT.length) {
                  Zr.gC ? Zr._internalAbstractMeshDataInfo._actAsRegularMesh && (ar = Zr) : ar._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, ar._internalAbstractMeshDataInfo._isActiveIntermediate = !0, Qr._prepareSkeleton(ar);
                  for (let rr = 0; rr < ar.jT.length; rr++) {
                    const Sr = ar.jT[rr];
                    this.enableBoundingBoxRendering && pr && pr._evaluateSubMesh(Zr, Sr), this._renderingManager.dispatch(Sr, ar)
                  }
                }
                Zr._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && pr && Sr)
          for (let xr = 0; xr < pr.renderList.length; xr++) {
            const rr = pr.renderList.data[xr];
            this._activeBoundingBoxes.push(rr)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const rr = this.particleSystemList || Qr.pT;
          for (let Sr = 0; Sr < rr.length; Sr++) {
            const Qr = rr[Sr],
              Zr = Qr.emitter;
            Qr.isStarted() && Zr && (!Zr.position || Zr.isEnabled()) && this._renderingManager.dispatchParticles(Qr)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return ar
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(rr, Sr, Qr, Zr)
      }
      setRenderingAutoClearDepthStencil(rr, Sr) {
        let Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Zr = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(rr, Sr, Qr, Zr), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const rr = new tr(this.name, this._scene, this.options);
        return this.renderList && (rr.renderList = this.renderList.slice(0)), rr
      }
      dispose() {
        const rr = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          Sr = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let Qr = 0; Qr < Sr; Qr++) {
          const Sr = rr[Qr];
          Sr && void 0 !== Sr.getMaterialForRenderPass(this.renderPassId) && Sr.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const Qr of this._sceneUBOs) Qr.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === tr.REFRESHRATE_RENDER_ONCE && (this.refreshRate = tr.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    tr.REFRESHRATE_RENDER_ONCE = 0, tr.REFRESHRATE_RENDER_ONEVERYFRAME = 1, tr.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var hr = Qr(41769);
    class zr extends ar.f {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate
      }
      set renderListPredicate(rr) {
        this._objectRenderer.renderListPredicate = rr
      }
      get renderList() {
        return this._objectRenderer.renderList
      }
      set renderList(rr) {
        this._objectRenderer.renderList = rr
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList
      }
      set particleSystemList(rr) {
        this._objectRenderer.particleSystemList = rr
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList
      }
      set getCustomRenderList(rr) {
        this._objectRenderer.getCustomRenderList = rr
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles
      }
      set renderParticles(rr) {
        this._objectRenderer.renderParticles = rr
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites
      }
      set renderSprites(rr) {
        this._objectRenderer.renderSprites = rr
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering
      }
      set enableBoundingBoxRendering(rr) {
        this._objectRenderer.enableBoundingBoxRendering = rr
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering
      }
      set enableOutlineRendering(rr) {
        this._objectRenderer.enableOutlineRendering = rr
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck
      }
      set forceLayerMaskCheck(rr) {
        this._objectRenderer.forceLayerMaskCheck = rr
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera
      }
      set activeCamera(rr) {
        this._objectRenderer.activeCamera = rr
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD
      }
      set cameraForLOD(rr) {
        this._objectRenderer.cameraForLOD = rr
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing
      }
      set disableImageProcessing(rr) {
        this._objectRenderer.disableImageProcessing = rr
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction
      }
      set customIsReadyFunction(rr) {
        this._objectRenderer.customIsReadyFunction = rr
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction
      }
      set customRenderFunction(rr) {
        this._objectRenderer.customRenderFunction = rr
      }
      get postProcesses() {
        return this._postProcesses
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled
      }
      set onAfterUnbind(rr) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(rr)
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable
      }
      set onBeforeRender(rr) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(rr)
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable
      }
      set onAfterRender(rr) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(rr)
      }
      set onClear(rr) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(rr)
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList
      }
      set _waitingRenderList(rr) {
        this._objectRenderer._waitingRenderList = rr
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
      setMaterialForRendering(rr, Sr) {
        this._objectRenderer.setMaterialForRendering(rr, Sr)
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
      set boundingBoxSize(rr) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(rr)) return;
        this._boundingBoxSize = rr;
        const Sr = this.eC();
        Sr && Sr.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(rr, Sr, Qr) {
        let jr, Ir, Er = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          pr = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          xr = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          mr = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Nr = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : ar.f.TRILINEAR_SAMPLINGMODE,
          Ur = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          hr = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          zr = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          Yr = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          nr = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          er = arguments.length > 13 ? arguments[13] : void 0,
          Kr = arguments.length > 14 ? arguments[14] : void 0,
          yr = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          Br = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          Tr = !0,
          vr = !1;
        if ("object" === typeof Er) {
          const rr = Er;
          Er = !!rr.generateMipMaps, pr = rr.doNotChangeAspectRatio ?? !0, xr = rr.type ?? 0, mr = !!rr.isCube, Nr = rr.samplingMode ?? ar.f.TRILINEAR_SAMPLINGMODE, Ur = rr.generateDepthBuffer ?? !0, hr = !!rr.generateStencilBuffer, zr = !!rr.isMulti, Yr = rr.format ?? 5, nr = !!rr.delayAllocation, er = rr.samples, Kr = rr.creationFlags, yr = !!rr.noColorAttachment, Br = !!rr.useSRGBBuffer, jr = rr.colorAttachment, Tr = rr.gammaSpace ?? Tr, Ir = rr.existingObjectRenderer, vr = !!rr.enableClusteredLights
        }
        if (super(null, Qr, !Er, void 0, Nr, void 0, void 0, void 0, void 0, Yr), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new Zr.d, this.onAfterUnbindObservable = new Zr.d, this.onClearObservable = new Zr.d, this.onResizeObservable = new Zr.d, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = Wr.u.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(Qr = this.eC())) return;
        const Or = this.eC().MU();
        this._gammaSpace = Tr, this._coordinatesMode = ar.f.PROJECTION_MODE, this.name = rr, this.isRenderTarget = !0, this._initialSizeParameter = Sr, this._dontDisposeObjectRenderer = !!Ir, this._processSizeParameter(Sr), this._objectRenderer = Ir ?? new tr(rr, Qr, {
          numPasses: mr ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: pr,
          enableClusteredLights: vr
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const rr = this._scene;
          if (!this._disableEngineStages)
            for (const Sr of rr._beforeRenderTargetClearStage) Sr.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(Or) : this.skipInitialClear || Or.clear(this.clearColor ?? rr.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || rr.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const Sr of rr._beforeRenderTargetDrawStage) Sr.action(this, this._currentFaceIndex, this._currentLayer);
          Or._debugPushGroup && Or._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (Or._debugPopGroup && Or._debugPopGroup(), !this._disableEngineStages)
            for (const Sr of this._scene._afterRenderTargetDrawStage) Sr.action(this, this._currentFaceIndex, this._currentLayer);
          const rr = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const Sr of this._scene._afterRenderTargetPostProcessStage) Sr.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = rr), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), Or) : fr.c.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(Or) : this.skipInitialClear || Or.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = Or.onResizeObservable.add((() => {})), this._generateMipMaps = !!Er, this._doNotChangeAspectRatio = pr, zr || (this._renderTargetOptions = {
          generateMipMaps: Er,
          type: xr,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: Ur,
          generateStencilBuffer: hr,
          samples: er,
          creationFlags: Kr,
          noColorAttachment: yr,
          useSRGBBuffer: Br,
          colorAttachment: jr,
          label: this.name
        }, this.samplingMode === ar.f.NEAREST_SAMPLINGMODE && (this.wrapU = ar.f.CLAMP_ADDRESSMODE, this.wrapV = ar.f.CLAMP_ADDRESSMODE), nr || (mr ? (this._renderTarget = Qr.MU().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = ar.f.INVCUBIC_MODE, this._textureMatrix = Wr.d.Identity()) : this._renderTarget = Qr.MU().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== er && (this.samples = er)))
      }
      createDepthStencilTexture() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          ar = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(rr, Sr, Qr, Zr, Wr, ar)
      }
      _processSizeParameter(rr) {
        if (rr.ratio) {
          this._sizeRatio = rr.ratio;
          const Sr = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(Sr.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(Sr.getRenderHeight(), this._sizeRatio)
          }
        } else this._size = rr
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples
      }
      set samples(rr) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(rr))
      }
      addPostProcess(rr) {
        if (!this._postProcessManager) {
          const rr = this.eC();
          if (!rr) return;
          this._postProcessManager = new jr.c(rr), this._postProcesses = new Array
        }
        this._postProcesses.push(rr), this._postProcesses[0].autoClear = !1
      }
      clearPostProcesses() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (rr)
            for (const rr of this._postProcesses) rr.dispose();
          this._postProcesses = []
        }
      }
      removePostProcess(rr) {
        if (!this._postProcesses) return;
        const Sr = this._postProcesses.indexOf(rr); - 1 !== Sr && (this._postProcesses.splice(Sr, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter()
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate
      }
      set refreshRate(rr) {
        this._objectRenderer.refreshRate = rr
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
        const rr = this._size.layers;
        if (rr) return rr;
        const Sr = this._size.depth;
        return Sr || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(rr) {
        const Sr = Math.max(1, this.getRenderSize() * rr);
        this.resize(Sr)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(rr) {
        const Sr = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const Qr = this.eC();
        Qr && (this._processSizeParameter(rr), this._renderTarget = Sr ? Qr.MU().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : Qr.MU().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(rr, Sr)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => Qr(54362))).then((rr => this._dumpTools = rr))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const rr = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), rr
      }
      _render() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Qr = this.eC();
        if (!Qr) return;
        void 0 !== this.useCameraPostProcesses && (rr = this.useCameraPostProcesses);
        const Zr = Qr.MU();
        if (Zr._debugPushGroup && Zr._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let Wr = 0; Wr < 6; Wr++) this._renderToTarget(Wr, rr, Sr), Qr.incrementRenderId(), Qr.resetCachedMaterial();
          else this._renderToTarget(0, rr, Sr);
        else
          for (let Wr = 0; Wr < this.getRenderLayers(); Wr++) this._renderToTarget(0, rr, Sr, Wr), Qr.incrementRenderId(), Qr.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), Zr._debugPopGroup && Zr._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(rr, Sr) {
        const Qr = rr * Sr,
          Zr = (0, Ir.o)(Qr + 16384 / (128 + Qr));
        return Math.min((0, Ir.d)(rr), Zr)
      }
      _bindFrameBuffer() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Qr = this.eC();
        if (!Qr) return;
        const Zr = Qr.MU();
        this._renderTarget && Zr.bindFramebuffer(this._renderTarget, this.isCube ? rr : void 0, void 0, void 0, this.ignoreCameraViewport, 0, Sr)
      }
      _unbindFrameBuffer(rr, Sr) {
        this._renderTarget && rr.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(Sr)
        }))
      }
      _prepareFrame(rr, Sr, Qr, Zr) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(Sr, Qr) : Zr && rr.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(Sr, Qr)
      }
      _renderToTarget(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Wr = this.eC();
        if (!Wr) return;
        const ar = Wr.MU();
        this._currentFaceIndex = rr, this._currentLayer = Zr, this._currentUseCameraPostProcess = Sr, this._currentDumpForDebug = Qr, this._prepareFrame(Wr, rr, Zr, Sr), this._objectRenderer.render(rr + Zr, !0), this._unbindFrameBuffer(ar, rr), this._texture && this.isCube && 5 === rr && ar.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(rr, Sr, Qr, Zr)
      }
      setRenderingAutoClearDepthStencil(rr, Sr) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(rr, Sr)
      }
      clone() {
        const rr = this.getSize(),
          Sr = new zr(this.name, rr, this.eC(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return Sr.hasAlpha = this.hasAlpha, Sr.level = this.level, Sr.coordinatesMode = this.coordinatesMode, this.renderList && (Sr.renderList = this.renderList.slice(0)), Sr
      }
      serialize() {
        if (!this.name) return null;
        const rr = super.serialize();
        if (rr.renderTargetSize = this.getRenderSize(), rr.renderList = [], this.renderList)
          for (let Sr = 0; Sr < this.renderList.length; Sr++) rr.renderList.push(this.renderList[Sr].id);
        return rr
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.eC().MU().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const rr = this.eC();
        if (!rr) return;
        let Sr = rr.customRenderTargets.indexOf(this);
        Sr >= 0 && rr.customRenderTargets.splice(Sr, 1);
        for (const Qr of rr.cameras) Sr = Qr.customRenderTargets.indexOf(this), Sr >= 0 && Qr.customRenderTargets.splice(Sr, 1);
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
    zr.REFRESHRATE_RENDER_ONCE = tr.REFRESHRATE_RENDER_ONCE, zr.REFRESHRATE_RENDER_ONEVERYFRAME = tr.REFRESHRATE_RENDER_ONEVERYFRAME, zr.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = tr.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(zr.prototype, "noPrePassRenderer") || Object.defineProperty(zr.prototype, "noPrePassRenderer", (0, hr.g)("RenderTargetTexture", "noPrePassRenderer"))
  },
  54337: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Er,
      g: () => pr
    });
    var Zr = Qr(41995),
      Wr = Qr(39607),
      ar = Qr(38595),
      jr = Qr(41741),
      Ir = Qr(42165);
    const fr = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class Er {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fr;
        this._fullscreenViewport = new Wr.d(0, 0, 1, 1);
        const Qr = Sr.positions ?? fr.positions,
          ar = Sr.indices ?? fr.indices;
        this.engine = rr, this._vertexBuffers = {
          [Zr.j.PositionKind]: new Zr.j(rr, Qr, Zr.j.PositionKind, !1, !1, 2)
        }, this._indexBuffer = rr.createIndexBuffer(ar), this._indexBufferLength = ar.length, this._onContextRestoredObserver = rr.CU.add((() => {
          this._indexBuffer = rr.createIndexBuffer(ar);
          for (const rr in this._vertexBuffers) {
            this._vertexBuffers[rr]._rebuild()
          }
        }))
      }
      setViewport() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.engine.setViewport(rr)
      }
      bindBuffers(rr) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, rr)
      }
      applyEffectWrapper(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = Sr, this.engine.stencilState.stencilTest = Qr, this.engine.enableEffect(rr.drawWrapper), this.bindBuffers(rr.effect), rr.onApplyObservable.notifyObservers({})
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
      _isRenderTargetTexture(rr) {
        return void 0 !== rr.renderTarget
      }
      render(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!rr.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const Qr = null === Sr ? null : this._isRenderTargetTexture(Sr) ? Sr.renderTarget : Sr;
        Qr && this.engine.bindFramebuffer(Qr), this.applyEffectWrapper(rr), this.draw(), Qr && this.engine.unBindFramebuffer(Qr), this.restoreStates()
      }
      dispose() {
        const rr = this._vertexBuffers[Zr.j.PositionKind];
        rr && (rr.dispose(), delete this._vertexBuffers[Zr.j.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.CU.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class pr {
      static RegisterShaderCodeProcessing(rr, Sr) {
        Sr ? pr._CustomShaderCodeProcessing[rr ?? ""] = Sr : delete pr._CustomShaderCodeProcessing[rr ?? ""]
      }
      static _GetShaderCodeProcessing(rr) {
        return pr._CustomShaderCodeProcessing[rr] ?? pr._CustomShaderCodeProcessing[""]
      }
      get name() {
        return this.options.name
      }
      set name(rr) {
        this.options.name = rr
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
      set effect(rr) {
        this._drawWrapper.effect = rr
      }
      constructor(rr) {
        this.alphaMode = 0, this.onEffectCreatedObservable = new ar.d(void 0, !0), this.onApplyObservable = new ar.d, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
          ...rr,
          name: rr.name || "effectWrapper",
          engine: rr.engine,
          uniforms: rr.uniforms || rr.uniformNames || [],
          uniformNames: void 0,
          samplers: rr.samplers || rr.samplerNames || [],
          samplerNames: void 0,
          attributeNames: rr.attributeNames || ["position"],
          uniformBuffers: rr.uniformBuffers || [],
          defines: rr.defines || "",
          useShaderStore: rr.useShaderStore || !1,
          vertexUrl: rr.vertexUrl || rr.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: rr.fragmentShader || "pass",
          indexParameters: rr.indexParameters,
          blockCompilation: rr.blockCompilation || !1,
          shaderLanguage: rr.shaderLanguage || 0,
          onCompiled: rr.onCompiled || void 0,
          extraInitializations: rr.extraInitializations || void 0,
          extraInitializationsAsync: rr.extraInitializationsAsync || void 0,
          useAsPostProcess: rr.useAsPostProcess ?? !1,
          allowEmptySourceTexture: rr.allowEmptySourceTexture ?? !1
        }, this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), rr.vertexUrl || rr.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add((() => {
          this.effect.setFloat2("scale", 1, 1)
        }))), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add((() => {
          this.bind()
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.CU.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new Ir.b(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const Sr = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, Sr, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Zr = arguments.length > 2 ? arguments[2] : void 0,
          Wr = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, Wr && this._importPromises.push(...Wr);
        const ar = this.options.engine.isWebGPU && !pr.ForceGLSL;
        this._gatherImports(ar, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(ar && this._webGPUReady ? Qr.e(682).then((() => Qr(64748))) : Qr.e(672).then((() => Qr(64611)))), void 0 !== Zr && Zr(ar, this._importPromises), ar && this._webGPUReady && (this.options.shaderLanguage = 1), rr || this.updateEffect(Sr)
      }
      updateEffect() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Zr = arguments.length > 3 ? arguments[3] : void 0,
          Wr = arguments.length > 4 ? arguments[4] : void 0,
          ar = arguments.length > 5 ? arguments[5] : void 0,
          Ir = arguments.length > 6 ? arguments[6] : void 0,
          fr = arguments.length > 7 ? arguments[7] : void 0;
        const Er = pr._GetShaderCodeProcessing(this.name);
        if (Er?.defineCustomBindings) {
          const Zr = Sr?.slice() ?? [];
          Zr.push(...this.options.uniforms);
          const Wr = Qr?.slice() ?? [];
          Wr.push(...this.options.samplers), rr = Er.defineCustomBindings(this.name, rr, Zr, Wr), Sr = Zr, Qr = Wr
        }
        this.options.defines = rr || "";
        const xr = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let mr;
        mr = this.options.extraInitializationsAsync ? async () => {
          await (xr?.()), await this.options.extraInitializationsAsync()
        }: xr, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: Ir ?? this._shaderPath.vertex,
          fragment: fr ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: Sr || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: Qr || this.options.samplers,
          defines: null !== rr ? rr : "",
          fallbacks: null,
          onCompiled: Wr ?? this.options.onCompiled,
          onError: ar ?? null,
          indexParameters: Zr || this.options.indexParameters,
          processCodeAfterIncludes: Er?.processCodeAfterIncludes ? (rr, Sr) => Er.processCodeAfterIncludes(this.name, rr, Sr) : null,
          processFinalCode: Er?.processFinalCode ? (rr, Sr) => Er.processFinalCode(this.name, rr, Sr) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: mr
        }, this.options.engine) : this._drawWrapper.effect = new jr.b(this._shaderPath, this.options.attributeNames, Sr || this.options.uniforms, Qr || this.options.samplerNames, this.options.engine, rr, void 0, Wr || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, mr), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !rr && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), pr._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.MU().CU.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    pr.ForceGLSL = !1, pr._CustomShaderCodeProcessing = {}
  },
  54362: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      Dispose: () => Yr,
      DumpData: () => zr,
      DumpDataAsync: () => hr,
      DumpFramebuffer: () => tr,
      DumpTools: () => nr,
      EncodeImageAsync: () => Ur,
      RegisterDumpTools: () => Kr
    });
    var Zr = Qr(41872),
      Wr = Qr(54337),
      ar = Qr(41950),
      jr = Qr(38599),
      Ir = Qr(38587),
      fr = Qr(40246),
      Er = Qr(41917),
      pr = Qr(41875);
    let xr = null;
    async function mr() {
      return xr || (xr = async function() {
        const rr = Ir.b.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        rr instanceof OffscreenCanvas && fr.c.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: Sr
        } = await Promise.resolve().then((() => Qr(41737)));
        if (!Sr.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const Zr = new Sr(rr, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        Ir.b.Instances.pop(), Ir.b.OnEnginesDisposedObservable.add((rr => {
          Zr && rr !== Zr && !Zr.Dv && 0 === Ir.b.Instances.length && Yr()
        })), Zr.getCaps().parallelShaderCompile = void 0;
        const ar = new Wr.e(Zr),
          {
            passPixelShader: jr
          } = await Qr.e(690).then((() => Qr(64796))),
          Er = new Wr.g({
            engine: Zr,
            name: jr.name,
            fragmentShader: jr.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: rr,
          dumpEngine: {
            engine: Zr,
            renderer: ar,
            wrapper: Er
          }
        }
      }()), await xr
    }
    let Nr = (() => {
      var rr;
      let Sr, Qr = [];
      return rr = class {
        static async EncodeImageAsync(rr, Sr, Qr, Zr, Wr, jr) {
          const Ir = await mr(),
            fr = Ir.dumpEngine;
          fr.engine.setSize(Sr, Qr, !0);
          const Er = fr.engine.createRawTexture(rr, Sr, Qr, 5, !1, !Wr, 1);
          return fr.renderer.setViewport(), fr.renderer.applyEffectWrapper(fr.wrapper), fr.wrapper.effect._bindTexture("textureSampler", Er), fr.renderer.draw(), Er.dispose(), await new Promise(((rr, Sr) => {
            ar.h.ToBlob(Ir.canvas, (Qr => {
              Qr ? rr(Qr) : Sr(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), Zr, jr)
          }))
        }
      }, (() => {
        const Wr = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Sr = [pr.j], (0, Zr.k)(rr, null, Sr, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: rr => "EncodeImageAsync" in rr,
            get: rr => rr.EncodeImageAsync
          },
          metadata: Wr
        }, null, Qr), Wr && Object.defineProperty(rr, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Wr
        }), (0, Zr.m)(rr, Qr)
      })(), rr
    })();
    const Ur = Nr.EncodeImageAsync;
    async function tr(rr, Sr, Qr, Zr) {
      let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        ar = arguments.length > 5 ? arguments[5] : void 0,
        jr = arguments.length > 6 ? arguments[6] : void 0;
      const Ir = await Qr.readPixels(0, 0, rr, Sr);
      zr(rr, Sr, new Uint8Array(Ir.buffer), Zr, Wr, ar, !0, void 0, jr)
    }
    async function hr(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Wr = arguments.length > 4 ? arguments[4] : void 0,
        Ir = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        pr = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        xr = arguments.length > 7 ? arguments[7] : void 0;
      if (Qr instanceof Float32Array) {
        const rr = new Uint8Array(Qr.length);
        let Sr = Qr.length;
        for (; Sr--;) {
          const Zr = Qr[Sr];
          rr[Sr] = Math.round(255 * (0, jr.Clamp)(Zr))
        }
        Qr = rr
      }
      const mr = await Nr.EncodeImageAsync(Qr, rr, Sr, Zr, Ir, xr);
      void 0 !== Wr && ar.h.DownloadBlob(mr, Wr), mr.type !== Zr && fr.c.Warn(`DumpData: The requested mimeType '${Zr}' is not supported. The result has mimeType '${mr.type}' instead.`);
      const Ur = await mr.arrayBuffer();
      return pr ? Ur : `data:${Zr};base64,${(0,Er.d)(Ur)}`
    }

    function zr(rr, Sr, Qr, Zr) {
      let Wr = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== Wr || Zr || (Wr = ""), hr(rr, Sr, Qr, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", Wr, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((rr => {
        Zr && Zr(rr)
      }))
    }

    function Yr() {
      xr && (xr?.then((rr => {
        rr.canvas instanceof HTMLCanvasElement && rr.canvas.remove(), rr.dumpEngine && (rr.dumpEngine.engine.dispose(), rr.dumpEngine.renderer.dispose(), rr.dumpEngine.wrapper.dispose())
      })), xr = null)
    }
    const nr = {
      DumpData: zr,
      DumpDataAsync: hr,
      DumpFramebuffer: tr,
      Dispose: Yr
    };
    let er = !1;

    function Kr() {
      if (er) return;
      er = !0;
      ar.h.DumpData = zr, ar.h.DumpDataAsync = hr, ar.h.DumpFramebuffer = tr
    }
  },
  54348: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Nr,
      g: () => Ur,
      k: () => tr
    });
    var Zr = Qr(42310),
      Wr = Qr(54357),
      ar = Qr(41872),
      jr = Qr(54330),
      Ir = Qr(41889),
      fr = Qr(54359),
      Er = Qr(41875);
    class pr extends jr.b {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(rr, Sr) {
        let Qr = arguments.length > 4 ? arguments[4] : void 0;
        const Zr = {
          size: "number" === typeof Sr ? Sr : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: Qr,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...Sr
        };
        super(rr, fr.f.FragmentUrl, {
          effectWrapper: "number" !== typeof Sr && Sr.effectWrapper ? void 0 : new fr.f(rr, Qr, Zr),
          ...Zr
        })
      }
      static _Parse(rr, Sr, Qr, Zr) {
        return Ir.e.Parse((() => new pr(rr.name, rr.options, Sr, rr.renderTargetSamplingMode, rr._engine, rr.reusable)), rr, Qr, Zr)
      }
    }(() => {
      var rr;
      let Sr, Qr = jr.b,
        Zr = [];
      rr = class extends Qr {
        get face() {
          return this._effectWrapper.face
        }
        set face(rr) {
          this._effectWrapper.face = rr
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(rr, Sr) {
          let Qr = arguments.length > 4 ? arguments[4] : void 0;
          const Wr = {
            size: "number" === typeof Sr ? Sr : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: Qr,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...Sr
          };
          super(rr, fr.f.FragmentUrl, {
            effectWrapper: "number" !== typeof Sr && Sr.effectWrapper ? void 0 : new fr.d(rr, Qr, Wr),
            ...Wr
          }), (0, ar.m)(this, Zr)
        }
        static _Parse(Sr, Qr, Zr, Wr) {
          return Ir.e.Parse((() => new rr(Sr.name, Sr.options, Qr, Sr.renderTargetSamplingMode, Sr._engine, Sr.reusable)), Sr, Zr, Wr)
        }
      }, (() => {
        const Wr = "function" === typeof Symbol && Symbol.metadata ? Object.create(Qr[Symbol.metadata] ?? null) : void 0;
        Sr = [(0, Er.G)()], (0, ar.k)(rr, null, Sr, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: rr => "face" in rr,
            get: rr => rr.face
          },
          metadata: Wr
        }, null, Zr), Wr && Object.defineProperty(rr, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Wr
        })
      })()
    })();
    var xr = Qr(38599),
      mr = Qr(41922);

    function Nr(rr, Sr, Qr, Zr, Wr, ar, Ir, fr) {
      const Er = Sr.MU();
      return Sr.isReady = !1, Wr = Wr ?? Sr.samplingMode, Zr = Zr ?? Sr.type, ar = ar ?? Sr.format, Ir = Ir ?? Sr.width, fr = fr ?? Sr.height, -1 === Zr && (Zr = 0), new Promise((pr => {
        const xr = new jr.b("postprocess", rr, null, null, 1, null, Wr, Er, !1, void 0, Zr, void 0, null, !1, ar);
        xr.externalTextureSamplerBinding = !0;
        const mr = Er.createRenderTargetTexture({
          width: Ir,
          height: fr
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: Wr,
          type: Zr,
          format: ar
        });
        xr.onEffectCreatedObservable.addOnce((rr => {
          rr.executeWhenCompiled((() => {
            xr.onApply = rr => {
              rr._bindTexture("textureSampler", Sr), rr.setFloat2("scale", 1, 1)
            }, Qr.postProcessManager.directRender([xr], mr, !0), Er.restoreDefaultFramebuffer(), Er._releaseTexture(Sr), xr && xr.dispose(), mr._swapAndDie(Sr), Sr.type = Zr, Sr.format = 5, Sr.isReady = !0, pr(Sr)
          }))
        }))
      }))
    }
    async function Ur(rr, Sr, ar) {
      let Ir = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        fr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Er = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        pr = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(rr) {
        if (rr.isReady()) return;
        if (rr.loadingError) throw new Error(rr.errorObject?.message || `Texture ${rr.name} errored while loading.`);
        const Sr = rr.onLoadObservable;
        if (Sr) return await new Promise((rr => Sr.addOnce((() => rr()))));
        const Qr = rr._texture?.onLoadedObservable;
        if (Qr) return await new Promise((rr => Qr.addOnce((() => rr()))));
        throw new Error(`Cannot determine readiness of texture ${rr.name}.`)
      }(rr);
      const mr = rr.getInternalTexture(),
        Nr = rr.is3D || !!mr?.is3D,
        {
          width: Ur,
          height: tr
        } = rr.getSize(),
        hr = Sr ?? Ur,
        zr = ar ?? tr;
      if (Er || Nr || function(rr) {
          switch (rr) {
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
        }(rr.textureFormat) || hr !== Ur || zr !== tr) {
        if (rr.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${Er?"RTT":"compression"} is not supported.`);
        return await async function(rr, Sr, ar, Ir, fr) {
          let Er = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const pr = rr.eC(),
            xr = pr.MU(),
            mr = rr.getInternalTexture(),
            Nr = rr.is3D || !!mr?.is3D;
          let Ur;
          if (xr.isWebGPU ? Nr ? await Qr.e(686).then((() => Qr(64780))) : rr.isCube ? await Qr.e(687).then((() => Qr(64782))) : await Qr.e(688).then((() => Qr(64784))) : Nr ? await Qr.e(683).then((() => Qr(64761))) : rr.isCube ? await Qr.e(684).then((() => Qr(64770))) : await Qr.e(685).then((() => Qr(64778))), Nr) Ur = new jr.b("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: Zr.f.NEAREST_NEAREST_MIPNEAREST,
            engine: xr,
            shaderLanguage: xr.isWebGPU ? 1 : 0
          });
          else if (rr.isCube) {
            const rr = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            Ur = new jr.b("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: Zr.f.NEAREST_NEAREST_MIPNEAREST,
              engine: xr,
              defines: rr[Ir],
              shaderLanguage: xr.isWebGPU ? 1 : 0
            })
          } else Ur = new jr.b("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: Zr.f.NEAREST_NEAREST_MIPNEAREST,
            engine: xr,
            shaderLanguage: xr.isWebGPU ? 1 : 0
          });
          await new Promise((rr => {
            Ur.onEffectCreatedObservable.addOnce((Sr => {
              Sr.executeWhenCompiled((() => {
                rr(0)
              }))
            }))
          }));
          const tr = new Wr.b("temp", {
            width: Sr,
            height: ar
          }, pr, !1);
          Ur.onApply = function(Sr) {
            Sr.setTexture("textureSampler", rr), Sr.setFloat("lod", fr), Sr.setInt("gamma", rr.gammaSpace ? 1 : 0), Nr && Sr.setFloat("slice", Er)
          };
          try {
            if (tr.renderTarget && mr) {
              const Qr = mr.samplingMode;
              0 !== fr ? rr.updateSamplingMode(Zr.f.NEAREST_NEAREST_MIPNEAREST) : rr.updateSamplingMode(Zr.f.NEAREST_NEAREST), pr.postProcessManager.directRender([Ur], tr.renderTarget, !0), rr.updateSamplingMode(Qr);
              const Wr = await xr.readPixels(0, 0, Sr, ar),
                jr = new Uint8Array(Wr.buffer, Wr.byteOffset, Wr.byteLength);
              return xr.unBindFramebuffer(tr.renderTarget), jr
            }
            throw Error("Render to texture failed.")
          } finally {
            tr.dispose(), Ur.dispose()
          }
        }(rr, hr, zr, Ir, fr, pr)
      }
      let Yr = await rr.readPixels(Ir, fr);
      if (!Yr) throw new Error(`Failed to read pixels from texture ${rr.name}.`);
      if (Yr instanceof Float32Array) {
        const rr = new Uint8Array(Yr.length);
        let Sr = Yr.length;
        for (; Sr--;) {
          const Qr = Yr[Sr];
          rr[Sr] = Math.round(255 * (0, xr.Clamp)(Qr))
        }
        Yr = rr
      }
      const nr = hr * zr,
        er = 4 * nr;
      if (Yr.length !== er) {
        const rr = 0 === nr ? 0 : Yr.length / nr;
        if (1 === rr || 2 === rr || 3 === rr) {
          const Sr = new Uint8Array(er);
          for (let Qr = 0, Zr = 0, Wr = 0; Qr < nr; Qr++, Wr += 4) {
            const Qr = Yr[Zr++];
            if (1 === rr) {
              Sr[Wr] = Qr, Sr[Wr + 1] = Qr, Sr[Wr + 2] = Qr, Sr[Wr + 3] = 255;
              continue
            }
            const ar = Yr[Zr++];
            2 !== rr ? (Sr[Wr] = Qr, Sr[Wr + 1] = ar, Sr[Wr + 2] = Yr[Zr++], Sr[Wr + 3] = 255) : (Sr[Wr] = Qr, Sr[Wr + 1] = ar, Sr[Wr + 2] = 0, Sr[Wr + 3] = 255)
          }
          return Sr
        }
      }
      return Yr
    }
    const tr = {
      CreateResizedCopy: function(rr, Sr, Qr) {
        let ar = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const jr = rr.eC(),
          Ir = jr.MU(),
          fr = new Wr.b("resized" + rr.name, {
            width: Sr,
            height: Qr
          }, jr, !rr.noMipmap, !0, rr._texture.type, !1, rr.samplingMode, !1);
        fr.wrapU = rr.wrapU, fr.wrapV = rr.wrapV, fr.uOffset = rr.uOffset, fr.vOffset = rr.vOffset, fr.uScale = rr.uScale, fr.vScale = rr.vScale, fr.uAng = rr.uAng, fr.vAng = rr.vAng, fr.wAng = rr.wAng, fr.coordinatesIndex = rr.coordinatesIndex, fr.level = rr.level, fr.anisotropicFilteringLevel = rr.anisotropicFilteringLevel, fr._texture.isReady = !1, rr.wrapU = Zr.f.CLAMP_ADDRESSMODE, rr.wrapV = Zr.f.CLAMP_ADDRESSMODE;
        const Er = new pr("pass", 1, null, ar ? Zr.f.BILINEAR_SAMPLINGMODE : Zr.f.NEAREST_SAMPLINGMODE, Ir, !1, 0);
        return Er.externalTextureSamplerBinding = !0, Er.onEffectCreatedObservable.addOnce((Sr => {
          Sr.executeWhenCompiled((() => {
            Er.onApply = function(Sr) {
              Sr.setTexture("textureSampler", rr)
            };
            const Sr = fr.renderTarget;
            Sr && (jr.postProcessManager.directRender([Er], Sr), Ir.unBindFramebuffer(Sr), fr.disposeFramebufferObjects(), Er.dispose(), fr.getInternalTexture().isReady = !0)
          }))
        })), fr
      },
      ApplyPostProcess: Nr,
      ToHalfFloat: mr.g,
      FromHalfFloat: mr.c,
      GetTextureDataAsync: Ur
    }
  },
  54330: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Ur
    });
    var Zr = Qr(41872),
      Wr = Qr(41960),
      ar = Qr(38595),
      jr = Qr(38560),
      Ir = Qr(41741),
      fr = Qr(41875),
      Er = Qr(41889),
      pr = Qr(38609),
      xr = Qr(41784),
      mr = Qr(41818),
      Nr = Qr(54337);
    let Ur = (() => {
        var rr;
        let Sr, Ir, xr, Ur, tr, zr, Yr, nr, er, Kr, yr, Br, Tr, vr, Or, Lr, lr = [],
          Xr = [],
          Pr = [],
          Hr = [],
          qr = [],
          Rr = [],
          gr = [],
          Cr = [],
          Mr = [],
          Gr = [],
          kr = [],
          Ar = [],
          Vr = [],
          ir = [],
          wr = [],
          cr = [],
          Fr = [],
          or = [],
          br = [],
          Jr = [],
          Dr = [],
          dr = [],
          sr = [],
          ur = [],
          rS = [],
          SS = [],
          QS = [],
          ZS = [],
          WS = [];
        return rr = class {
          static get ForceGLSL() {
            return Nr.g.ForceGLSL
          }
          static set ForceGLSL(rr) {
            Nr.g.ForceGLSL = rr
          }
          static RegisterShaderCodeProcessing(rr, Sr) {
            Nr.g.RegisterShaderCodeProcessing(rr, Sr)
          }
          get name() {
            return this._effectWrapper.name
          }
          set name(rr) {
            this._effectWrapper.name = rr
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode
          }
          set alphaMode(rr) {
            this._effectWrapper.alphaMode = rr
          }
          get samples() {
            return this._samples
          }
          set samples(rr) {
            this._samples = Math.min(rr, this._engine.getCaps().maxMSAASamples), this._textures.forEach((rr => {
              rr.setSamples(this._samples)
            }))
          }
          get shaderLanguage() {
            return this._shaderLanguage
          }
          getEffectName() {
            return this._fragmentUrl
          }
          set onActivate(rr) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), rr && (this._onActivateObserver = this.onActivateObservable.add(rr))
          }
          set onSizeChanged(rr) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(rr)
          }
          set onApply(rr) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(rr)
          }
          set onBeforeRender(rr) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(rr)
          }
          set onAfterRender(rr) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(rr)
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd]
          }
          set inputTexture(rr) {
            this._forcedOutputTexture = rr
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty())
          }
          getCamera() {
            return this.Q_
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.Hrr(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(Sr, Qr, Ir, fr, Er, pr) {
            let xr = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              mr = arguments.length > 7 ? arguments[7] : void 0,
              Ur = arguments.length > 8 ? arguments[8] : void 0,
              tr = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              zr = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              Yr = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              nr = arguments.length > 12 ? arguments[12] : void 0,
              er = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              Kr = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              yr = arguments.length > 15 ? arguments[15] : void 0,
              Br = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, Zr.m)(this, lr), null), this.uniqueId = (0, Zr.m)(this, Xr, void 0), this.width = ((0, Zr.m)(this, Pr), (0, Zr.m)(this, Hr, -1)), this.height = ((0, Zr.m)(this, qr), (0, Zr.m)(this, Rr, -1)), this.nodeMaterialSource = ((0, Zr.m)(this, gr), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, Zr.m)(this, Cr, void 0), this.clearColor = ((0, Zr.m)(this, Mr), (0, Zr.m)(this, Gr, void 0)), this.autoClear = ((0, Zr.m)(this, kr), (0, Zr.m)(this, Ar, !0)), this.forceAutoClearInAlphaMode = ((0, Zr.m)(this, Vr), (0, Zr.m)(this, ir, !1)), this.alphaConstants = ((0, Zr.m)(this, wr), (0, Zr.m)(this, cr, void 0)), this.animations = ((0, Zr.m)(this, Fr), []), this.enablePixelPerfectMode = (0, Zr.m)(this, or, !1), this.forceFullscreenViewport = ((0, Zr.m)(this, br), (0, Zr.m)(this, Jr, !0)), this.inspectableCustomProperties = (0, Zr.m)(this, Dr), this.scaleMode = (0, Zr.m)(this, dr, 1), this.alwaysForcePOT = ((0, Zr.m)(this, sr), (0, Zr.m)(this, ur, !1)), this._samples = ((0, Zr.m)(this, rS), (0, Zr.m)(this, SS, 1)), this.adaptScaleToCurrentViewport = ((0, Zr.m)(this, QS), (0, Zr.m)(this, ZS, !1)), this.doNotSerialize = ((0, Zr.m)(this, WS), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new Wr.h(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new jr.q(1, 1), this._texelSize = jr.q.Zero(), this.onActivateObservable = new ar.d, this.onSizeChangedObservable = new ar.d, this.onApplyObservable = new ar.d, this.onBeforeRenderObservable = new ar.d, this.onAfterRenderObservable = new ar.d, this.lC = new ar.d, hr();
            let Tr, vr = 1,
              Or = null;
            if (Ir && !Array.isArray(Ir)) {
              const rr = Ir;
              Ir = rr.uniforms ?? null, fr = rr.samplers ?? null, vr = rr.size ?? 1, pr = rr.camera ?? null, xr = rr.samplingMode ?? 1, mr = rr.engine, Ur = rr.reusable, tr = Array.isArray(rr.defines) ? rr.defines.join("\n") : rr.defines ?? null, zr = rr.textureType ?? 0, Yr = rr.vertexUrl ?? "postprocess", nr = rr.indexParameters, er = rr.blockCompilation ?? !1, Kr = rr.textureFormat ?? 5, yr = rr.shaderLanguage ?? 0, Or = rr.uniformBuffers ?? null, Br = rr.extraInitializations, Tr = rr.effectWrapper
            } else Er && (vr = "number" === typeof Er ? Er : {
              width: Er.width,
              height: Er.height
            });
            if (this._useExistingThinPostProcess = !!Tr, this._effectWrapper = Tr ?? new Nr.g({
                name: Sr,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: Qr,
                engine: mr || pr?.eC().MU(),
                uniforms: Ir,
                samplers: fr,
                uniformBuffers: Or,
                defines: tr,
                vertexUrl: Yr,
                indexParameters: nr,
                blockCompilation: !0,
                shaderLanguage: yr,
                extraInitializations: void 0
              }), this.name = Sr, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != pr ? (this.Q_ = pr, this._scene = pr.eC(), pr.attachPostProcess(this), this._engine = this._scene.MU(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : mr && (this._engine = mr, this._engine.postProcesses.push(this)), this._options = vr, this.renderTargetSamplingMode = xr || 1, this._reusable = Ur || !1, this._textureType = zr, this._textureFormat = Kr, this._shaderLanguage = yr || 0, this._samplers = fr || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = Qr, this._vertexUrl = Yr, this._parameters = Ir || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = Or || [], this._indexParameters = nr, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const Sr = [];
              this._gatherImports(this._engine.isWebGPU && !rr.ForceGLSL, Sr), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(er, tr, Br, Sr)
            }
          }
          _gatherImports() {
            let rr = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? rr.push(Promise.all([Qr.e(682).then((() => Qr(64748)))])) : rr.push(Promise.all([Qr.e(672).then((() => Qr(64611)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          MU() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(rr) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = rr, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new Wr.h(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Zr = arguments.length > 3 ? arguments[3] : void 0,
              Wr = arguments.length > 4 ? arguments[4] : void 0,
              ar = arguments.length > 5 ? arguments[5] : void 0,
              jr = arguments.length > 6 ? arguments[6] : void 0,
              Ir = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(rr, Sr, Qr, Zr, Wr, ar, jr, Ir), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(rr, Sr) {
            let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let Wr = 0; Wr < this._textureCache.length; Wr++)
              if (this._textureCache[Wr].texture.width === rr.width && this._textureCache[Wr].texture.height === rr.height && this._textureCache[Wr].postProcessChannel === Qr && this._textureCache[Wr].texture._generateDepthBuffer === Sr.generateDepthBuffer && this._textureCache[Wr].texture.samples === Sr.samples) return this._textureCache[Wr].texture;
            const Zr = this._engine.createRenderTargetTexture(rr, Sr);
            return this._textureCache.push({
              texture: Zr,
              postProcessChannel: Qr,
              lastUsedRenderId: -1
            }), Zr
          }
          _flushTextureCache() {
            const rr = this._renderId;
            for (let Sr = this._textureCache.length - 1; Sr >= 0; Sr--)
              if (rr - this._textureCache[Sr].lastUsedRenderId > 100) {
                let rr = !1;
                for (let Qr = 0; Qr < this._textures.length; Qr++)
                  if (this._textures.data[Qr] === this._textureCache[Sr].texture) {
                    rr = !0;
                    break
                  } rr || (this._textureCache[Sr].texture.dispose(), this._textureCache.splice(Sr, 1))
              }
          }
          resize(rr, Sr) {
            let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Wr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = rr, this.height = Sr;
            let ar = null;
            if (Qr)
              for (let fr = 0; fr < Qr._postProcesses.length; fr++)
                if (null !== Qr._postProcesses[fr]) {
                  ar = Qr._postProcesses[fr];
                  break
                } const jr = {
                width: this.width,
                height: this.height
              },
              Ir = {
                generateMipMaps: Zr,
                generateDepthBuffer: Wr || ar === this,
                generateStencilBuffer: (Wr || ar === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(jr, Ir, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(jr, Ir, 1)), this._texelSize.Hrr(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let rr;
            if (this._shareOutputWithPostProcess) rr = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) rr = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let Sr;
              rr = this.inputTexture;
              for (let Qr = 0; Qr < this._textureCache.length; Qr++)
                if (this._textureCache[Qr].texture === rr) {
                  Sr = this._textureCache[Qr];
                  break
                } Sr && (Sr.lastUsedRenderId = this._renderId)
            }
            return rr
          }
          activate(rr) {
            let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              Qr = arguments.length > 2 ? arguments[2] : void 0;
            const Zr = null === rr || void 0 !== rr.cameraRigMode ? rr || this.Q_ : null,
              Wr = Zr?.eC() ?? rr,
              ar = Wr.MU(),
              jr = ar.getCaps().maxTextureSize,
              Ir = (Sr ? Sr.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              fr = (Sr ? Sr.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let Er = this._options.width || Ir,
              pr = this._options.height || fr;
            const xr = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let Nr = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const rr = ar.currentViewport;
                rr && (Er *= rr.width, pr *= rr.height)
              }(xr || this.alwaysForcePOT) && (this._options.width || (Er = ar.needPOTTextures ? (0, mr.h)(Er, jr, this.scaleMode) : Er), this._options.height || (pr = ar.needPOTTextures ? (0, mr.h)(pr, jr, this.scaleMode) : pr)), this.width === Er && this.height === pr && (Nr = this._getTarget()) || this.resize(Er, pr, Zr, xr, Qr), this._textures.forEach((rr => {
                rr.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(rr, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return Nr || (Nr = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.Hrr(Ir / Er, fr / pr), this._engine.bindFramebuffer(Nr, 0, Ir, fr, this.forceFullscreenViewport)) : (this._scaleRatio.Hrr(1, 1), this._engine.bindFramebuffer(Nr, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(Zr), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : Wr.clearColor, Wr._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), Nr
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
            let rr;
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.MU().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), rr = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", rr?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
          }
          _disposeTextureCache() {
            for (let rr = this._textureCache.length - 1; rr >= 0; rr--) this._textureCache[rr].texture.dispose();
            this._textureCache.length = 0
          }
          setPrePassRenderer(rr) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = rr.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
          }
          dispose(rr) {
            let Sr;
            if (rr = rr || this.Q_, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (Sr = this._parentContainer.postProcesses.indexOf(this), Sr > -1 && this._parentContainer.postProcesses.splice(Sr, 1), this._parentContainer = null), Sr = this._engine.postProcesses.indexOf(this), -1 !== Sr && this._engine.postProcesses.splice(Sr, 1), this.lC.notifyObservers(), rr) {
              if (rr.detachPostProcess(this), Sr = rr._postProcesses.indexOf(this), 0 === Sr && rr._postProcesses.length > 0) {
                const rr = this.Q_._getFirstPostProcess();
                rr && rr.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const rr = Er.e.Serialize(this),
              Sr = this.getCamera() || this._scene && this._scene.activeCamera;
            return rr.customType = "BABYLON." + this.getClassName(), rr.cameraId = Sr ? Sr.id : null, rr.reusable = this._reusable, rr.textureType = this._textureType, rr.fragmentUrl = this._fragmentUrl, rr.parameters = this._parameters, rr.samplers = this._samplers, rr.uniformBuffers = this._uniformBuffers, rr.options = this._options, rr.defines = this._postProcessDefines, rr.textureFormat = this._textureFormat, rr.vertexUrl = this._vertexUrl, rr.indexParameters = this._indexParameters, rr
          }
          clone() {
            const Sr = this.serialize();
            Sr._engine = this._engine, Sr.cameraId = null;
            const Qr = rr.Parse(Sr, this._scene, "");
            return Qr ? (Qr.onActivateObservable = this.onActivateObservable.clone(), Qr.onSizeChangedObservable = this.onSizeChangedObservable.clone(), Qr.onApplyObservable = this.onApplyObservable.clone(), Qr.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), Qr.onAfterRenderObservable = this.onAfterRenderObservable.clone(), Qr._prePassEffectConfiguration = this._prePassEffectConfiguration, Qr) : null
          }
          static Parse(rr, Sr, Qr) {
            const Zr = (0, pr.d)(rr.customType);
            if (!Zr || !Zr._Parse) return null;
            const Wr = Sr ? Sr.getCameraById(rr.cameraId) : null;
            return Zr._Parse(rr, Wr, Sr, Qr)
          }
          static _Parse(Sr, Qr, Zr, Wr) {
            return Er.e.Parse((() => new rr(Sr.name, Sr.fragmentUrl, Sr.parameters, Sr.samplers, Sr.options, Qr, Sr.renderTargetSamplingMode, Sr._engine, Sr.reusable, Sr.defines, Sr.textureType, Sr.vertexUrl, Sr.indexParameters, !1, Sr.textureFormat)), Sr, Zr, Wr)
          }
        }, (() => {
          const Qr = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Sr = [(0, fr.G)()], Ir = [(0, fr.G)()], xr = [(0, fr.G)()], Ur = [(0, fr.G)()], tr = [(0, fr.G)()], zr = [(0, fr.q)()], Yr = [(0, fr.G)()], nr = [(0, fr.G)()], er = [(0, fr.G)()], Kr = [(0, fr.G)()], yr = [(0, fr.G)()], Br = [(0, fr.G)()], Tr = [(0, fr.G)()], vr = [(0, fr.G)()], Or = [(0, fr.G)("samples")], Lr = [(0, fr.G)()], (0, Zr.k)(rr, null, Ir, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: rr => "name" in rr,
              get: rr => rr.name
            },
            metadata: Qr
          }, null, lr), (0, Zr.k)(rr, null, er, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: rr => "alphaMode" in rr,
              get: rr => rr.alphaMode
            },
            metadata: Qr
          }, null, lr), (0, Zr.k)(null, null, Sr, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: rr => "uniqueId" in rr,
              get: rr => rr.uniqueId,
              set: (rr, Sr) => {
                rr.uniqueId = Sr
              }
            },
            metadata: Qr
          }, Xr, Pr), (0, Zr.k)(null, null, xr, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: rr => "width" in rr,
              get: rr => rr.width,
              set: (rr, Sr) => {
                rr.width = Sr
              }
            },
            metadata: Qr
          }, Hr, qr), (0, Zr.k)(null, null, Ur, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: rr => "height" in rr,
              get: rr => rr.height,
              set: (rr, Sr) => {
                rr.height = Sr
              }
            },
            metadata: Qr
          }, Rr, gr), (0, Zr.k)(null, null, tr, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: rr => "renderTargetSamplingMode" in rr,
              get: rr => rr.renderTargetSamplingMode,
              set: (rr, Sr) => {
                rr.renderTargetSamplingMode = Sr
              }
            },
            metadata: Qr
          }, Cr, Mr), (0, Zr.k)(null, null, zr, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: rr => "clearColor" in rr,
              get: rr => rr.clearColor,
              set: (rr, Sr) => {
                rr.clearColor = Sr
              }
            },
            metadata: Qr
          }, Gr, kr), (0, Zr.k)(null, null, Yr, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: rr => "autoClear" in rr,
              get: rr => rr.autoClear,
              set: (rr, Sr) => {
                rr.autoClear = Sr
              }
            },
            metadata: Qr
          }, Ar, Vr), (0, Zr.k)(null, null, nr, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: rr => "forceAutoClearInAlphaMode" in rr,
              get: rr => rr.forceAutoClearInAlphaMode,
              set: (rr, Sr) => {
                rr.forceAutoClearInAlphaMode = Sr
              }
            },
            metadata: Qr
          }, ir, wr), (0, Zr.k)(null, null, Kr, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: rr => "alphaConstants" in rr,
              get: rr => rr.alphaConstants,
              set: (rr, Sr) => {
                rr.alphaConstants = Sr
              }
            },
            metadata: Qr
          }, cr, Fr), (0, Zr.k)(null, null, yr, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: rr => "enablePixelPerfectMode" in rr,
              get: rr => rr.enablePixelPerfectMode,
              set: (rr, Sr) => {
                rr.enablePixelPerfectMode = Sr
              }
            },
            metadata: Qr
          }, or, br), (0, Zr.k)(null, null, Br, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: rr => "forceFullscreenViewport" in rr,
              get: rr => rr.forceFullscreenViewport,
              set: (rr, Sr) => {
                rr.forceFullscreenViewport = Sr
              }
            },
            metadata: Qr
          }, Jr, Dr), (0, Zr.k)(null, null, Tr, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: rr => "scaleMode" in rr,
              get: rr => rr.scaleMode,
              set: (rr, Sr) => {
                rr.scaleMode = Sr
              }
            },
            metadata: Qr
          }, dr, sr), (0, Zr.k)(null, null, vr, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: rr => "alwaysForcePOT" in rr,
              get: rr => rr.alwaysForcePOT,
              set: (rr, Sr) => {
                rr.alwaysForcePOT = Sr
              }
            },
            metadata: Qr
          }, ur, rS), (0, Zr.k)(null, null, Or, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: rr => "_samples" in rr,
              get: rr => rr._samples,
              set: (rr, Sr) => {
                rr._samples = Sr
              }
            },
            metadata: Qr
          }, SS, QS), (0, Zr.k)(null, null, Lr, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: rr => "adaptScaleToCurrentViewport" in rr,
              get: rr => rr.adaptScaleToCurrentViewport,
              set: (rr, Sr) => {
                rr.adaptScaleToCurrentViewport = Sr
              }
            },
            metadata: Qr
          }, ZS, WS), Qr && Object.defineProperty(rr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Qr
          })
        })(), rr
      })(),
      tr = !1;

    function hr() {
      tr || (tr = !0, xr.e.prototype.setTextureFromPostProcess = function(rr, Sr, Qr) {
        let Zr = null;
        Sr && (Sr._forcedOutputTexture ? Zr = Sr._forcedOutputTexture : Sr._textures.data[Sr._currentRenderTextureInd] && (Zr = Sr._textures.data[Sr._currentRenderTextureInd])), this._bindTexture(rr, Zr?.texture ?? null, Qr)
      }, xr.e.prototype.setTextureFromPostProcessOutput = function(rr, Sr, Qr) {
        this._bindTexture(rr, Sr?._outputTexture?.texture ?? null, Qr)
      }, Ir.b.prototype.setTextureFromPostProcess = function(rr, Sr) {
        this._engine.setTextureFromPostProcess(this._samplers[rr], Sr, rr)
      }, Ir.b.prototype.setTextureFromPostProcessOutput = function(rr, Sr) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[rr], Sr, rr)
      }, (0, pr.e)("BABYLON.PostProcess", Ur))
    }
  },
  54359: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => jr,
      f: () => ar
    });
    var Zr = Qr(54337),
      Wr = Qr(38587);
    class ar extends Zr.g {
      _gatherImports(rr, Sr) {
        rr ? (this._webGPUReady = !0, Sr.push(Promise.all([Qr.e(689).then((() => Qr(64788)))]))) : Sr.push(Promise.all([Qr.e(690).then((() => Qr(64796)))])), super._gatherImports(rr, Sr)
      }
      constructor(rr) {
        let Sr = arguments.length > 2 ? arguments[2] : void 0;
        const Qr = {
          name: rr,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Wr.b.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: ar.FragmentUrl,
          ...Sr
        };
        Qr.engine || (Qr.engine = Wr.b.LastCreatedEngine), super(Qr)
      }
    }
    ar.FragmentUrl = "pass";
    class jr extends Zr.g {
      _gatherImports(rr, Sr) {
        rr ? (this._webGPUReady = !0, Sr.push(Promise.all([Qr.e(691).then((() => Qr(64801)))]))) : Sr.push(Promise.all([Qr.e(692).then((() => Qr(64804)))])), super._gatherImports(rr, Sr)
      }
      constructor(rr) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: rr,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Wr.b.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: jr.FragmentUrl,
          defines: "#define POSITIVEX"
        }), this._face = 0
      }
      get face() {
        return this._face
      }
      set face(rr) {
        if (!(rr < 0 || rr > 5)) switch (this._face = rr, this._face) {
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
    jr.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);