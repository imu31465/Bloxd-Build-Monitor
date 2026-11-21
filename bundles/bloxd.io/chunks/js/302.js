export const id = 302;
export const ids = [302];
export const modules = {
  41773: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Rd
    });
    var pd = kd(37280),
      Nd = kd(37251),
      Wd = kd(40471),
      Pd = kd(40124),
      Zd = kd(39902),
      gd = kd(38812),
      Cd = kd(40101),
      Kd = kd(40131),
      od = kd(37267),
      ld = kd(39866),
      Qd = kd(40080),
      Ld = kd(40186);
    class Od {
      get renderList() {
        return this._renderList
      }
      set renderList(dd) {
        this._renderList !== dd && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), dd && (this._unObserveRenderList = (0, od.h)(dd, this._renderListHasChanged)), this._renderList = dd)
      }
      get disableImageProcessing() {
        return this._disableImageProcessing
      }
      set disableImageProcessing(dd) {
        dd !== this._disableImageProcessing && (this._disableImageProcessing = dd, this._scene.markAllMaterialsAsDirty(64))
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(dd) {
        this._disableDepthPrePass = dd, this._renderingManager.disableDepthPrePass = dd
      }
      get name() {
        return this._name
      }
      set name(dd) {
        if (this._name !== dd) {
          if (this._name = dd, this._sceneUBOs)
            for (let dd = 0; dd < this._sceneUBOs.length; ++dd) this._sceneUBOs[dd].name = `Scene ubo #${dd} for ${this.name}`;
          if (this._scene)
            for (let dd = 0; dd < this._renderPassIds.length; ++dd) {
              const Jd = this._renderPassIds[dd];
              this._engine._renderPassNames[Jd] = `${this._name}#${dd}`
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
      setMaterialForRendering(dd, Jd) {
        let kd;
        kd = Array.isArray(dd) ? dd : [dd];
        for (let pd = 0; pd < kd.length; ++pd)
          for (let dd = 0; dd < this.options.numPasses; ++dd) {
            let Nd = kd[pd];
            kd[pd].Km && (Nd = kd[pd].RNd), Nd.setMaterialForRenderPass(this._renderPassIds[dd], void 0 !== Jd ? Array.isArray(Jd) ? Jd[dd] : Jd : void 0)
          }
      }
      _freezeActiveMeshes(dd) {
        this._freezeActiveMeshesCancel = (0, ld.f)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, dd)
            for (let dd = 0; dd < this._activeMeshes.length; dd++) this._activeMeshes.data[dd]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((dd, Jd) => {
          this._freezeActiveMeshesCancel = null, Jd ? (gd.c.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), dd && gd.c.Error(dd)) : (gd.c.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), dd && (gd.c.Error(dd), dd.stack && gd.c.Error(dd.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let dd = 0; dd < this._activeMeshes.length; dd++) this._activeMeshes.data[dd]._unFreeze();
        this._isFrozen = !1
      }
      constructor(dd, Jd, kd) {
        this._unObserveRenderList = null, this._renderListHasChanged = (dd, Jd) => {
          const kd = this._renderList ? this._renderList.length : 0;
          if (0 === Jd && kd > 0 || 0 === kd)
            for (const pd of this._scene.meshes) pd._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new pd.e, this.onAfterRenderObservable = new pd.e, this.onBeforeRenderingManagerRenderObservable = new pd.e, this.onAfterRenderingManagerRenderObservable = new pd.e, this.onInitRenderingObservable = new pd.e, this.onFinishRenderingObservable = new pd.e, this.onFastPathRenderObservable = new pd.e, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new Qd.h(256), this._activeBoundingBoxes = new Qd.h(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = dd, this._scene = Jd, this._engine = this._scene.eL(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...kd
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new Kd.b(Jd), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const dd of this._scene.lights) dd.getTypeID() === Ld.d.LIGHTTYPEID_CLUSTERED_CONTAINER && dd.isSupported && dd._updateBatches(this.activeCamera).render()
        })), this._scene.addObjectRenderer(this)
      }
      _releaseRenderPassId() {
        for (let dd = 0; dd < this.options.numPasses; ++dd) this._engine.releaseRenderPassId(this._renderPassIds[dd]);
        this._renderPassIds.length = 0
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let dd = 0; dd < this.options.numPasses; ++dd) this._renderPassIds[dd] = this._engine.createRenderPassId(`${this.name}#${dd}`)
      }
      _createSceneUBO(dd, Jd) {
        const kd = this._scene.eL(),
          pd = new Cd.e(kd, void 0, Jd, dd, void 0, !1);
        return pd.addUniform("viewProjection", 16), Jd && pd.addUniform("viewProjectionR", 16), pd.addUniform("view", 16), pd.addUniform("projection", 16), pd.addUniform("vEyePosition", 4), pd.addUniform("inverseProjection", 16), pd
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const dd = this._engine._currentRenderTarget,
          Jd = !(!dd || !dd.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const dd = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${dd} for ${this.name}`, Jd)), this._sceneUBOIsMultiview.push(Jd)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== Jd && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, Jd), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = Jd);
        const kd = this._sceneUBOs[this._currentSceneUBOIndex++];
        return kd.unbindEffect(), kd
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1
      }
      get refreshRate() {
        return this._refreshRate
      }
      set refreshRate(dd) {
        this._refreshRate = dd, this.resetRefreshCounter()
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1))
      }
      isReadyForRendering(dd, Jd) {
        this.prepareRenderList(), this.initRender(dd, Jd);
        const kd = this._checkReadiness();
        return this.finishRender(), kd
      }
      prepareRenderList() {
        const dd = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let Jd = 0; Jd < this._waitingRenderList.length; Jd++) {
              const kd = this._waitingRenderList[Jd],
                pd = dd.getMeshById(kd);
              pd && this.renderList.push(pd)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const dd = this._scene.meshes;
          for (let Jd = 0; Jd < dd.length; Jd++) {
            const kd = dd[Jd];
            this.renderListPredicate(kd) && this.renderList.push(kd)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(dd, Jd) {
        const kd = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), kd && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(kd.getViewMatrix(), kd.getProjectionMatrix(!0)), this._scene._activeCamera = kd, this._engine.setViewport(kd.rigParent ? kd.rigParent.viewport : kd.viewport, dd, Jd)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const dd = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (dd.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), dd._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== dd.activeCamera && dd.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), dd.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const kd = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[dd], this.onBeforeRenderObservable.notifyObservers(dd);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(dd);
        else {
          const Jd = this._prepareRenderingManager(dd),
            kd = this._scene.getOutlineRenderer?.(),
            pd = kd?.enabled;
          kd && (kd.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(dd), this._renderingManager.render(this.customRenderFunction, Jd, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(dd), kd && (kd.enabled = pd)
        }
        Jd || this.onAfterRenderObservable.notifyObservers(dd), this._engine.currentRenderPassId = kd
      }
      _checkReadiness() {
        const dd = this._scene,
          Jd = this._engine.currentRenderPassId;
        let kd = !0;
        dd.getViewMatrix() || dd.updateTransformMatrix();
        const pd = this.options.numPasses;
        for (let Nd = 0; Nd < pd && kd; Nd++) {
          const Jd = this.renderList ? this.renderList : dd.frameGraph ? dd.meshes : dd.getActiveMeshes().data,
            Wd = this.renderList || dd.frameGraph ? Jd.length : dd.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[Nd], this.onBeforeRenderObservable.notifyObservers(Nd);
          let Pd = null,
            Zd = Wd;
          this.getCustomRenderList && (Pd = this.getCustomRenderList(Nd, Jd, Wd), Pd && (Zd = Pd.length)), Pd || (Pd = Jd), this.options.doNotChangeAspectRatio || dd.updateTransformMatrix(!0);
          for (let dd = 0; dd < Zd && kd; ++dd) {
            const Jd = Pd[dd];
            if (!Jd.isEnabled() || Jd.isBlocked || !Jd.isVisible || !Jd.rG) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(Jd, this.refreshRate, !0)) {
                kd = !1;
                continue
              }
            } else if (!Jd.isReady(!0)) {
              kd = !1;
              continue
            }
            let pd = Jd._edgesRenderer,
              Nd = Jd.hasThinInstances;
            if (Jd.Km) {
              const dd = Jd.RNd;
              dd.edgesShareWithInstances && dd._edgesRenderer?.isEnabled && (pd = dd._edgesRenderer, Nd = !0)
            } else Jd.eNd && Jd.edgesShareWithInstances && (Nd = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && pd?.isEnabled && (pd.isReady(Nd) || (kd = !1))
          }
          if (this.renderParticles && dd.particlesEnabled) {
            const Jd = this.particleSystemList || dd.Qv;
            for (const dd of Jd) dd.isReady() || (kd = !1)
          }
          if (this.renderSprites && dd.spritesEnabled) {
            const Jd = this.spriteManagerList || dd.spriteManagers;
            if (Jd)
              for (const pd of Jd) dd.activeCamera && 0 === (pd.layerMask & dd.activeCamera.layerMask) || pd.isReady && !pd.isReady() && (kd = !1)
          }
          this.onAfterRenderObservable.notifyObservers(Nd), pd > 1 && (dd.incrementRenderId(), dd.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = Jd, kd
      }
      _prepareRenderingManager() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const kd = this._scene;
        let pd, Nd, Wd = null;
        const Pd = this.renderList ? this.renderList : kd.frameGraph ? kd.meshes : kd.getActiveMeshes().data,
          Zd = this.renderList || kd.frameGraph ? Pd.length : kd.getActiveMeshes().length;
        if (this.getCustomRenderList && (Wd = this.getCustomRenderList(dd, Pd, Zd)), Wd) pd = Wd.length, Nd = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !Jd && !this._engine.isWebGPU) return Pd;
          this._defaultRenderListPrepared = !0, Wd = Pd, pd = Zd, Nd = !this.renderList || this.forceLayerMaskCheck
        }
        const gd = kd.activeCamera,
          Cd = this.cameraForLOD ?? gd,
          Kd = kd.getBoundingBoxRenderer?.();
        if (kd._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && Kd) {
            Kd.reset();
            for (let dd = 0; dd < this._activeBoundingBoxes.length; dd++) {
              const Jd = this._activeBoundingBoxes.data[dd];
              Kd.renderList.push(Jd)
            }
          }
          return Wd
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), Kd && Kd.reset(), this.renderMeshes) {
          const dd = kd.getRenderId(),
            Jd = kd.getFrameId();
          for (let Pd = 0; Pd < pd; Pd++) {
            const pd = Wd[Pd];
            if (pd && !pd.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(pd, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!pd.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let Wd, Pd;
              if (Cd) {
                const dd = pd._internalAbstractMeshDataInfo._currentLOD.get(Cd);
                dd && dd[1] === Jd ? Wd = dd[0] : (Wd = kd.customLODSelector ? kd.customLODSelector(pd, Cd) : pd.getLOD(Cd), dd ? (dd[0] = Wd, dd[1] = Jd) : pd._internalAbstractMeshDataInfo._currentLOD.set(Cd, [Wd, Jd]))
              } else Wd = pd;
              if (!Wd) continue;
              if (Wd !== pd && 0 !== Wd.billboardMode && Wd.computeWorldMatrix(), Wd._preActivateForIntermediateRendering(dd), Pd = !(!Nd || !gd) && 0 === (pd.layerMask & gd.layerMask), pd.isEnabled() && pd.isVisible && pd.rG && !Pd) {
                if (this._activeMeshes.push(pd), Wd._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, Wd !== pd && Wd._activate(dd, !0), this.enableBoundingBoxRendering && Kd && Kd._preActiveMesh(pd), pd._activate(dd, !0) && pd.rG.length) {
                  pd.Km ? pd._internalAbstractMeshDataInfo._actAsRegularMesh && (Wd = pd) : Wd._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, Wd._internalAbstractMeshDataInfo._isActiveIntermediate = !0, kd._prepareSkeleton(Wd);
                  for (let dd = 0; dd < Wd.rG.length; dd++) {
                    const Jd = Wd.rG[dd];
                    this.enableBoundingBoxRendering && Kd && Kd._evaluateSubMesh(pd, Jd), this._renderingManager.dispatch(Jd, Wd)
                  }
                }
                pd._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && Kd && Jd)
          for (let od = 0; od < Kd.renderList.length; od++) {
            const dd = Kd.renderList.data[od];
            this._activeBoundingBoxes.push(dd)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const dd = this.particleSystemList || kd.Qv;
          for (let Jd = 0; Jd < dd.length; Jd++) {
            const kd = dd[Jd],
              pd = kd.emitter;
            kd.isStarted() && pd && (!pd.position || pd.isEnabled()) && this._renderingManager.dispatchParticles(kd)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return Wd
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(dd, Jd, kd, pd)
      }
      setRenderingAutoClearDepthStencil(dd, Jd) {
        let kd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          pd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(dd, Jd, kd, pd), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const dd = new Od(this.name, this._scene, this.options);
        return this.renderList && (dd.renderList = this.renderList.slice(0)), dd
      }
      dispose() {
        const dd = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          Jd = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let kd = 0; kd < Jd; kd++) {
          const Jd = dd[kd];
          Jd && void 0 !== Jd.getMaterialForRenderPass(this.renderPassId) && Jd.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const kd of this._sceneUBOs) kd.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === Od.REFRESHRATE_RENDER_ONCE && (this.refreshRate = Od.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    Od.REFRESHRATE_RENDER_ONCE = 0, Od.REFRESHRATE_RENDER_ONEVERYFRAME = 1, Od.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var ed = kd(39860);
    class Rd extends Wd.c {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate
      }
      set renderListPredicate(dd) {
        this._objectRenderer.renderListPredicate = dd
      }
      get renderList() {
        return this._objectRenderer.renderList
      }
      set renderList(dd) {
        this._objectRenderer.renderList = dd
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList
      }
      set particleSystemList(dd) {
        this._objectRenderer.particleSystemList = dd
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList
      }
      set getCustomRenderList(dd) {
        this._objectRenderer.getCustomRenderList = dd
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles
      }
      set renderParticles(dd) {
        this._objectRenderer.renderParticles = dd
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites
      }
      set renderSprites(dd) {
        this._objectRenderer.renderSprites = dd
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering
      }
      set enableBoundingBoxRendering(dd) {
        this._objectRenderer.enableBoundingBoxRendering = dd
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering
      }
      set enableOutlineRendering(dd) {
        this._objectRenderer.enableOutlineRendering = dd
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck
      }
      set forceLayerMaskCheck(dd) {
        this._objectRenderer.forceLayerMaskCheck = dd
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera
      }
      set activeCamera(dd) {
        this._objectRenderer.activeCamera = dd
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD
      }
      set cameraForLOD(dd) {
        this._objectRenderer.cameraForLOD = dd
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing
      }
      set disableImageProcessing(dd) {
        this._objectRenderer.disableImageProcessing = dd
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction
      }
      set customIsReadyFunction(dd) {
        this._objectRenderer.customIsReadyFunction = dd
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction
      }
      set customRenderFunction(dd) {
        this._objectRenderer.customRenderFunction = dd
      }
      get postProcesses() {
        return this._postProcesses
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled
      }
      set onAfterUnbind(dd) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(dd)
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable
      }
      set onBeforeRender(dd) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(dd)
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable
      }
      set onAfterRender(dd) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(dd)
      }
      set onClear(dd) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(dd)
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList
      }
      set _waitingRenderList(dd) {
        this._objectRenderer._waitingRenderList = dd
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
      setMaterialForRendering(dd, Jd) {
        this._objectRenderer.setMaterialForRendering(dd, Jd)
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
      set boundingBoxSize(dd) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(dd)) return;
        this._boundingBoxSize = dd;
        const Jd = this.Wm();
        Jd && Jd.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(dd, Jd, kd) {
        let Pd, Zd, Cd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Kd = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          od = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          ld = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Qd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Wd.c.TRILINEAR_SAMPLINGMODE,
          Ld = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          ed = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          Rd = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          Id = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          Gd = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          vd = arguments.length > 13 ? arguments[13] : void 0,
          xd = arguments.length > 14 ? arguments[14] : void 0,
          qd = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          Bd = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          sd = !0,
          ad = !1;
        if ("object" === typeof Cd) {
          const dd = Cd;
          Cd = !!dd.generateMipMaps, Kd = dd.doNotChangeAspectRatio ?? !0, od = dd.type ?? 0, ld = !!dd.isCube, Qd = dd.samplingMode ?? Wd.c.TRILINEAR_SAMPLINGMODE, Ld = dd.generateDepthBuffer ?? !0, ed = !!dd.generateStencilBuffer, Rd = !!dd.isMulti, Id = dd.format ?? 5, Gd = !!dd.delayAllocation, vd = dd.samples, xd = dd.creationFlags, qd = !!dd.noColorAttachment, Bd = !!dd.useSRGBBuffer, Pd = dd.colorAttachment, sd = dd.gammaSpace ?? sd, Zd = dd.existingObjectRenderer, ad = !!dd.enableClusteredLights
        }
        if (super(null, kd, !Cd, void 0, Qd, void 0, void 0, void 0, void 0, Id), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new pd.e, this.onAfterUnbindObservable = new pd.e, this.onClearObservable = new pd.e, this.onResizeObservable = new pd.e, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = Nd.n.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(kd = this.Wm())) return;
        const Md = this.Wm().eL();
        this._gammaSpace = sd, this._coordinatesMode = Wd.c.PROJECTION_MODE, this.name = dd, this.isRenderTarget = !0, this._initialSizeParameter = Jd, this._dontDisposeObjectRenderer = !!Zd, this._processSizeParameter(Jd), this._objectRenderer = Zd ?? new Od(dd, kd, {
          numPasses: ld ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: Kd,
          enableClusteredLights: ad
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const dd = this._scene;
          if (!this._disableEngineStages)
            for (const Jd of dd._beforeRenderTargetClearStage) Jd.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(Md) : this.skipInitialClear || Md.clear(this.clearColor ?? dd.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || dd.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const Jd of dd._beforeRenderTargetDrawStage) Jd.action(this, this._currentFaceIndex, this._currentLayer);
          Md._debugPushGroup && Md._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (Md._debugPopGroup && Md._debugPopGroup(), !this._disableEngineStages)
            for (const Jd of this._scene._afterRenderTargetDrawStage) Jd.action(this, this._currentFaceIndex, this._currentLayer);
          const dd = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const Jd of this._scene._afterRenderTargetPostProcessStage) Jd.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = dd), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), Md) : gd.c.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(Md) : this.skipInitialClear || Md.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = Md.onResizeObservable.add((() => {})), this._generateMipMaps = !!Cd, this._doNotChangeAspectRatio = Kd, Rd || (this._renderTargetOptions = {
          generateMipMaps: Cd,
          type: od,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: Ld,
          generateStencilBuffer: ed,
          samples: vd,
          creationFlags: xd,
          noColorAttachment: qd,
          useSRGBBuffer: Bd,
          colorAttachment: Pd,
          label: this.name
        }, this.samplingMode === Wd.c.NEAREST_SAMPLINGMODE && (this.wrapU = Wd.c.CLAMP_ADDRESSMODE, this.wrapV = Wd.c.CLAMP_ADDRESSMODE), Gd || (ld ? (this._renderTarget = kd.eL().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = Wd.c.INVCUBIC_MODE, this._textureMatrix = Nd.b.Identity()) : this._renderTarget = kd.eL().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== vd && (this.samples = vd)))
      }
      createDepthStencilTexture() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Wd = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(dd, Jd, kd, pd, Nd, Wd)
      }
      _processSizeParameter(dd) {
        if (dd.ratio) {
          this._sizeRatio = dd.ratio;
          const Jd = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(Jd.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(Jd.getRenderHeight(), this._sizeRatio)
          }
        } else this._size = dd
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples
      }
      set samples(dd) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(dd))
      }
      addPostProcess(dd) {
        if (!this._postProcessManager) {
          const dd = this.Wm();
          if (!dd) return;
          this._postProcessManager = new Pd.d(dd), this._postProcesses = new Array
        }
        this._postProcesses.push(dd), this._postProcesses[0].autoClear = !1
      }
      clearPostProcesses() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (dd)
            for (const dd of this._postProcesses) dd.dispose();
          this._postProcesses = []
        }
      }
      removePostProcess(dd) {
        if (!this._postProcesses) return;
        const Jd = this._postProcesses.indexOf(dd); - 1 !== Jd && (this._postProcesses.splice(Jd, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter()
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate
      }
      set refreshRate(dd) {
        this._objectRenderer.refreshRate = dd
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
        const dd = this._size.layers;
        if (dd) return dd;
        const Jd = this._size.depth;
        return Jd || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(dd) {
        const Jd = Math.max(1, this.getRenderSize() * dd);
        this.resize(Jd)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(dd) {
        const Jd = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const kd = this.Wm();
        kd && (this._processSizeParameter(dd), this._renderTarget = Jd ? kd.eL().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : kd.eL().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(dd, Jd)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => kd(41784))).then((dd => this._dumpTools = dd))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const dd = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), dd
      }
      _render() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const kd = this.Wm();
        if (!kd) return;
        void 0 !== this.useCameraPostProcesses && (dd = this.useCameraPostProcesses);
        const pd = kd.eL();
        if (pd._debugPushGroup && pd._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let Nd = 0; Nd < 6; Nd++) this._renderToTarget(Nd, dd, Jd), kd.incrementRenderId(), kd.resetCachedMaterial();
          else this._renderToTarget(0, dd, Jd);
        else
          for (let Nd = 0; Nd < this.getRenderLayers(); Nd++) this._renderToTarget(0, dd, Jd, Nd), kd.incrementRenderId(), kd.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), pd._debugPopGroup && pd._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(dd, Jd) {
        const kd = dd * Jd,
          pd = (0, Zd.m)(kd + 16384 / (128 + kd));
        return Math.min((0, Zd.b)(dd), pd)
      }
      _bindFrameBuffer() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const kd = this.Wm();
        if (!kd) return;
        const pd = kd.eL();
        this._renderTarget && pd.bindFramebuffer(this._renderTarget, this.isCube ? dd : void 0, void 0, void 0, this.ignoreCameraViewport, 0, Jd)
      }
      _unbindFrameBuffer(dd, Jd) {
        this._renderTarget && dd.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(Jd)
        }))
      }
      _prepareFrame(dd, Jd, kd, pd) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(Jd, kd) : pd && dd.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(Jd, kd)
      }
      _renderToTarget(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Nd = this.Wm();
        if (!Nd) return;
        const Wd = Nd.eL();
        this._currentFaceIndex = dd, this._currentLayer = pd, this._currentUseCameraPostProcess = Jd, this._currentDumpForDebug = kd, this._prepareFrame(Nd, dd, pd, Jd), this._objectRenderer.render(dd + pd, !0), this._unbindFrameBuffer(Wd, dd), this._texture && this.isCube && 5 === dd && Wd.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(dd, Jd, kd, pd)
      }
      setRenderingAutoClearDepthStencil(dd, Jd) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(dd, Jd)
      }
      clone() {
        const dd = this.getSize(),
          Jd = new Rd(this.name, dd, this.Wm(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return Jd.hasAlpha = this.hasAlpha, Jd.level = this.level, Jd.coordinatesMode = this.coordinatesMode, this.renderList && (Jd.renderList = this.renderList.slice(0)), Jd
      }
      serialize() {
        if (!this.name) return null;
        const dd = super.serialize();
        if (dd.renderTargetSize = this.getRenderSize(), dd.renderList = [], this.renderList)
          for (let Jd = 0; Jd < this.renderList.length; Jd++) dd.renderList.push(this.renderList[Jd].id);
        return dd
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.Wm().eL().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const dd = this.Wm();
        if (!dd) return;
        let Jd = dd.customRenderTargets.indexOf(this);
        Jd >= 0 && dd.customRenderTargets.splice(Jd, 1);
        for (const kd of dd.cameras) Jd = kd.customRenderTargets.indexOf(this), Jd >= 0 && kd.customRenderTargets.splice(Jd, 1);
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
    Rd.REFRESHRATE_RENDER_ONCE = Od.REFRESHRATE_RENDER_ONCE, Rd.REFRESHRATE_RENDER_ONEVERYFRAME = Od.REFRESHRATE_RENDER_ONEVERYFRAME, Rd.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = Od.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(Rd.prototype, "noPrePassRenderer") || Object.defineProperty(Rd.prototype, "noPrePassRenderer", (0, ed.g)("RenderTargetTexture", "noPrePassRenderer"))
  },
  41761: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Cd,
      f: () => Kd
    });
    var pd = kd(40115),
      Nd = kd(38281),
      Wd = kd(37280),
      Pd = kd(39822),
      Zd = kd(40304);
    const gd = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class Cd {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gd;
        this._fullscreenViewport = new Nd.b(0, 0, 1, 1);
        const kd = Jd.positions ?? gd.positions,
          Wd = Jd.indices ?? gd.indices;
        this.engine = dd, this._vertexBuffers = {
          [pd.j.PositionKind]: new pd.j(dd, kd, pd.j.PositionKind, !1, !1, 2)
        }, this._indexBuffer = dd.createIndexBuffer(Wd), this._indexBufferLength = Wd.length, this._onContextRestoredObserver = dd.onContextRestoredObservable.add((() => {
          this._indexBuffer = dd.createIndexBuffer(Wd);
          for (const dd in this._vertexBuffers) {
            this._vertexBuffers[dd]._rebuild()
          }
        }))
      }
      setViewport() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.engine.setViewport(dd)
      }
      bindBuffers(dd) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, dd)
      }
      applyEffectWrapper(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = Jd, this.engine.stencilState.stencilTest = kd, this.engine.enableEffect(dd.drawWrapper), this.bindBuffers(dd.effect), dd.onApplyObservable.notifyObservers({})
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
      _isRenderTargetTexture(dd) {
        return void 0 !== dd.renderTarget
      }
      render(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!dd.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const kd = null === Jd ? null : this._isRenderTargetTexture(Jd) ? Jd.renderTarget : Jd;
        kd && this.engine.bindFramebuffer(kd), this.applyEffectWrapper(dd), this.draw(), kd && this.engine.unBindFramebuffer(kd), this.restoreStates()
      }
      dispose() {
        const dd = this._vertexBuffers[pd.j.PositionKind];
        dd && (dd.dispose(), delete this._vertexBuffers[pd.j.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class Kd {
      static RegisterShaderCodeProcessing(dd, Jd) {
        Jd ? Kd._CustomShaderCodeProcessing[dd ?? ""] = Jd : delete Kd._CustomShaderCodeProcessing[dd ?? ""]
      }
      static _GetShaderCodeProcessing(dd) {
        return Kd._CustomShaderCodeProcessing[dd] ?? Kd._CustomShaderCodeProcessing[""]
      }
      get name() {
        return this.options.name
      }
      set name(dd) {
        this.options.name = dd
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
      set effect(dd) {
        this._drawWrapper.effect = dd
      }
      constructor(dd) {
        this.alphaMode = 0, this.onEffectCreatedObservable = new Wd.e(void 0, !0), this.onApplyObservable = new Wd.e, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
          ...dd,
          name: dd.name || "effectWrapper",
          engine: dd.engine,
          uniforms: dd.uniforms || dd.uniformNames || [],
          uniformNames: void 0,
          samplers: dd.samplers || dd.samplerNames || [],
          samplerNames: void 0,
          attributeNames: dd.attributeNames || ["position"],
          uniformBuffers: dd.uniformBuffers || [],
          defines: dd.defines || "",
          useShaderStore: dd.useShaderStore || !1,
          vertexUrl: dd.vertexUrl || dd.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: dd.fragmentShader || "pass",
          indexParameters: dd.indexParameters,
          blockCompilation: dd.blockCompilation || !1,
          shaderLanguage: dd.shaderLanguage || 0,
          onCompiled: dd.onCompiled || void 0,
          extraInitializations: dd.extraInitializations || void 0,
          extraInitializationsAsync: dd.extraInitializationsAsync || void 0,
          useAsPostProcess: dd.useAsPostProcess ?? !1,
          allowEmptySourceTexture: dd.allowEmptySourceTexture ?? !1
        }, this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), dd.vertexUrl || dd.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add((() => {
          this.effect.setFloat2("scale", 1, 1)
        }))), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add((() => {
          this.bind()
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.onContextRestoredObservable.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new Zd.d(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const Jd = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, Jd, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          pd = arguments.length > 2 ? arguments[2] : void 0,
          Nd = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, Nd && this._importPromises.push(...Nd);
        const Wd = this.options.engine.isWebGPU && !Kd.ForceGLSL;
        this._gatherImports(Wd, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(Wd && this._webGPUReady ? kd.e(357).then((() => kd(61119))) : kd.e(346).then((() => kd(60885)))), void 0 !== pd && pd(Wd, this._importPromises), Wd && this._webGPUReady && (this.options.shaderLanguage = 1), dd || this.updateEffect(Jd)
      }
      updateEffect() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          pd = arguments.length > 3 ? arguments[3] : void 0,
          Nd = arguments.length > 4 ? arguments[4] : void 0,
          Wd = arguments.length > 5 ? arguments[5] : void 0,
          Zd = arguments.length > 6 ? arguments[6] : void 0,
          gd = arguments.length > 7 ? arguments[7] : void 0;
        const Cd = Kd._GetShaderCodeProcessing(this.name);
        if (Cd?.defineCustomBindings) {
          const pd = Jd?.slice() ?? [];
          pd.push(...this.options.uniforms);
          const Nd = kd?.slice() ?? [];
          Nd.push(...this.options.samplers), dd = Cd.defineCustomBindings(this.name, dd, pd, Nd), Jd = pd, kd = Nd
        }
        this.options.defines = dd || "";
        const od = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let ld;
        ld = this.options.extraInitializationsAsync ? async () => {
          await (od?.()), await this.options.extraInitializationsAsync()
        }: od, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: Zd ?? this._shaderPath.vertex,
          fragment: gd ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: Jd || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: kd || this.options.samplers,
          defines: null !== dd ? dd : "",
          fallbacks: null,
          onCompiled: Nd ?? this.options.onCompiled,
          onError: Wd ?? null,
          indexParameters: pd || this.options.indexParameters,
          processCodeAfterIncludes: Cd?.processCodeAfterIncludes ? (dd, Jd) => Cd.processCodeAfterIncludes(this.name, dd, Jd) : null,
          processFinalCode: Cd?.processFinalCode ? (dd, Jd) => Cd.processFinalCode(this.name, dd, Jd) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: ld
        }, this.options.engine) : this._drawWrapper.effect = new Pd.b(this._shaderPath, this.options.attributeNames, Jd || this.options.uniforms, kd || this.options.samplerNames, this.options.engine, dd, void 0, Nd || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, ld), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !dd && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), Kd._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.eL().onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    Kd.ForceGLSL = !1, Kd._CustomShaderCodeProcessing = {}
  },
  41784: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      Dispose: () => Id,
      DumpData: () => Rd,
      DumpDataAsync: () => ed,
      DumpFramebuffer: () => Od,
      DumpTools: () => Gd,
      EncodeImageAsync: () => Ld,
      RegisterDumpTools: () => xd
    });
    var pd = kd(39964),
      Nd = kd(41761),
      Wd = kd(40066),
      Pd = kd(37289),
      Zd = kd(37277),
      gd = kd(38812),
      Cd = kd(40023),
      Kd = kd(39966);
    let od = null;
    async function ld() {
      return od || (od = async function() {
        const dd = Zd.d.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        dd instanceof OffscreenCanvas && gd.c.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: Jd
        } = await Promise.resolve().then((() => kd(39813)));
        if (!Jd.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const pd = new Jd(dd, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        Zd.d.Instances.pop(), Zd.d.OnEnginesDisposedObservable.add((dd => {
          pd && dd !== pd && !pd.lq && 0 === Zd.d.Instances.length && Id()
        })), pd.getCaps().parallelShaderCompile = void 0;
        const Wd = new Nd.b(pd),
          {
            passPixelShader: Pd
          } = await kd.e(365).then((() => kd(61182))),
          Cd = new Nd.f({
            engine: pd,
            name: Pd.name,
            fragmentShader: Pd.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: dd,
          dumpEngine: {
            engine: pd,
            renderer: Wd,
            wrapper: Cd
          }
        }
      }()), await od
    }
    let Qd = (() => {
      var dd;
      let Jd, kd = [];
      return dd = class {
        static async EncodeImageAsync(dd, Jd, kd, pd, Nd, Pd) {
          const Zd = await ld(),
            gd = Zd.dumpEngine;
          gd.engine.setSize(Jd, kd, !0);
          const Cd = gd.engine.createRawTexture(dd, Jd, kd, 5, !1, !Nd, 1);
          return gd.renderer.setViewport(), gd.renderer.applyEffectWrapper(gd.wrapper), gd.wrapper.effect._bindTexture("textureSampler", Cd), gd.renderer.draw(), Cd.dispose(), await new Promise(((dd, Jd) => {
            Wd.h.ToBlob(Zd.canvas, (kd => {
              kd ? dd(kd) : Jd(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), pd, Pd)
          }))
        }
      }, (() => {
        const Nd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Jd = [Kd.h], (0, pd.h)(dd, null, Jd, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: dd => "EncodeImageAsync" in dd,
            get: dd => dd.EncodeImageAsync
          },
          metadata: Nd
        }, null, kd), Nd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Nd
        }), (0, pd.i)(dd, kd)
      })(), dd
    })();
    const Ld = Qd.EncodeImageAsync;
    async function Od(dd, Jd, kd, pd) {
      let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Wd = arguments.length > 5 ? arguments[5] : void 0,
        Pd = arguments.length > 6 ? arguments[6] : void 0;
      const Zd = await kd.readPixels(0, 0, dd, Jd);
      Rd(dd, Jd, new Uint8Array(Zd.buffer), pd, Nd, Wd, !0, void 0, Pd)
    }
    async function ed(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Nd = arguments.length > 4 ? arguments[4] : void 0,
        Zd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Kd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        od = arguments.length > 7 ? arguments[7] : void 0;
      if (kd instanceof Float32Array) {
        const dd = new Uint8Array(kd.length);
        let Jd = kd.length;
        for (; Jd--;) {
          const pd = kd[Jd];
          dd[Jd] = Math.round(255 * (0, Pd.Clamp)(pd))
        }
        kd = dd
      }
      const ld = await Qd.EncodeImageAsync(kd, dd, Jd, pd, Zd, od);
      void 0 !== Nd && Wd.h.DownloadBlob(ld, Nd), ld.type !== pd && gd.c.Warn(`DumpData: The requested mimeType '${pd}' is not supported. The result has mimeType '${ld.type}' instead.`);
      const Ld = await ld.arrayBuffer();
      return Kd ? Ld : `data:${pd};base64,${(0,Cd.j)(Ld)}`
    }

    function Rd(dd, Jd, kd, pd) {
      let Nd = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== Nd || pd || (Nd = ""), ed(dd, Jd, kd, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", Nd, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((dd => {
        pd && pd(dd)
      }))
    }

    function Id() {
      od && (od?.then((dd => {
        dd.canvas instanceof HTMLCanvasElement && dd.canvas.remove(), dd.dumpEngine && (dd.dumpEngine.engine.dispose(), dd.dumpEngine.renderer.dispose(), dd.dumpEngine.wrapper.dispose())
      })), od = null)
    }
    const Gd = {
      DumpData: Rd,
      DumpDataAsync: ed,
      DumpFramebuffer: Od,
      Dispose: Id
    };
    let vd = !1;

    function xd() {
      if (vd) return;
      vd = !0;
      Wd.h.DumpData = Rd, Wd.h.DumpDataAsync = ed, Wd.h.DumpFramebuffer = Od
    }
  },
  41767: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Qd,
      f: () => Ld,
      g: () => Od
    });
    var pd = kd(40471),
      Nd = kd(41773),
      Wd = kd(39964),
      Pd = kd(41752),
      Zd = kd(39983),
      gd = kd(41782),
      Cd = kd(39966);
    class Kd extends Pd.e {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(dd, Jd) {
        let kd = arguments.length > 4 ? arguments[4] : void 0;
        const pd = {
          size: "number" === typeof Jd ? Jd : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: kd,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...Jd
        };
        super(dd, gd.e.FragmentUrl, {
          effectWrapper: "number" !== typeof Jd && Jd.effectWrapper ? void 0 : new gd.e(dd, kd, pd),
          ...pd
        })
      }
      static _Parse(dd, Jd, kd, pd) {
        return Zd.c.Parse((() => new Kd(dd.name, dd.options, Jd, dd.renderTargetSamplingMode, dd._engine, dd.reusable)), dd, kd, pd)
      }
    }(() => {
      var dd;
      let Jd, kd = Pd.e,
        pd = [];
      dd = class extends kd {
        get face() {
          return this._effectWrapper.face
        }
        set face(dd) {
          this._effectWrapper.face = dd
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(dd, Jd) {
          let kd = arguments.length > 4 ? arguments[4] : void 0;
          const Nd = {
            size: "number" === typeof Jd ? Jd : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: kd,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...Jd
          };
          super(dd, gd.e.FragmentUrl, {
            effectWrapper: "number" !== typeof Jd && Jd.effectWrapper ? void 0 : new gd.d(dd, kd, Nd),
            ...Nd
          }), (0, Wd.i)(this, pd)
        }
        static _Parse(Jd, kd, pd, Nd) {
          return Zd.c.Parse((() => new dd(Jd.name, Jd.options, kd, Jd.renderTargetSamplingMode, Jd._engine, Jd.reusable)), Jd, pd, Nd)
        }
      }, (() => {
        const Nd = "function" === typeof Symbol && Symbol.metadata ? Object.create(kd[Symbol.metadata] ?? null) : void 0;
        Jd = [(0, Cd.H)()], (0, Wd.h)(dd, null, Jd, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: dd => "face" in dd,
            get: dd => dd.face
          },
          metadata: Nd
        }, null, pd), Nd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Nd
        })
      })()
    })();
    var od = kd(37289),
      ld = kd(40037);

    function Qd(dd, Jd, kd, pd, Nd, Wd, Zd, gd) {
      const Cd = Jd.eL();
      return Jd.isReady = !1, Nd = Nd ?? Jd.samplingMode, pd = pd ?? Jd.type, Wd = Wd ?? Jd.format, Zd = Zd ?? Jd.width, gd = gd ?? Jd.height, -1 === pd && (pd = 0), new Promise((Kd => {
        const od = new Pd.e("postprocess", dd, null, null, 1, null, Nd, Cd, !1, void 0, pd, void 0, null, !1, Wd);
        od.externalTextureSamplerBinding = !0;
        const ld = Cd.createRenderTargetTexture({
          width: Zd,
          height: gd
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: Nd,
          type: pd,
          format: Wd
        });
        od.onEffectCreatedObservable.addOnce((dd => {
          dd.executeWhenCompiled((() => {
            od.onApply = dd => {
              dd._bindTexture("textureSampler", Jd), dd.setFloat2("scale", 1, 1)
            }, kd.postProcessManager.directRender([od], ld, !0), Cd.restoreDefaultFramebuffer(), Cd._releaseTexture(Jd), od && od.dispose(), ld._swapAndDie(Jd), Jd.type = pd, Jd.format = 5, Jd.isReady = !0, Kd(Jd)
          }))
        }))
      }))
    }
    async function Ld(dd, Jd, Wd) {
      let Zd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        gd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Cd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Kd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(dd) {
        if (dd.isReady()) return;
        if (dd.loadingError) throw new Error(dd.errorObject?.message || `Texture ${dd.name} errored while loading.`);
        const Jd = dd.onLoadObservable;
        if (Jd) return await new Promise((dd => Jd.addOnce((() => dd()))));
        const kd = dd._texture?.onLoadedObservable;
        if (kd) return await new Promise((dd => kd.addOnce((() => dd()))));
        throw new Error(`Cannot determine readiness of texture ${dd.name}.`)
      }(dd);
      const ld = dd.getInternalTexture(),
        Qd = dd.is3D || !!ld?.is3D,
        {
          width: Ld,
          height: Od
        } = dd.getSize(),
        ed = Jd ?? Ld,
        Rd = Wd ?? Od;
      if (Cd || Qd || function(dd) {
          switch (dd) {
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
        }(dd.textureFormat) || ed !== Ld || Rd !== Od) {
        if (dd.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${Cd?"RTT":"compression"} is not supported.`);
        return await async function(dd, Jd, Wd, Zd, gd) {
          let Cd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const Kd = dd.Wm(),
            od = Kd.eL(),
            ld = dd.getInternalTexture(),
            Qd = dd.is3D || !!ld?.is3D;
          let Ld;
          if (od.isWebGPU ? Qd ? await kd.e(361).then((() => kd(61160))) : dd.isCube ? await kd.e(362).then((() => kd(61165))) : await kd.e(363).then((() => kd(61169))) : Qd ? await kd.e(358).then((() => kd(61140))) : dd.isCube ? await kd.e(359).then((() => kd(61148))) : await kd.e(360).then((() => kd(61152))), Qd) Ld = new Pd.e("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: pd.c.NEAREST_NEAREST_MIPNEAREST,
            engine: od,
            shaderLanguage: od.isWebGPU ? 1 : 0
          });
          else if (dd.isCube) {
            const dd = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            Ld = new Pd.e("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: pd.c.NEAREST_NEAREST_MIPNEAREST,
              engine: od,
              defines: dd[Zd],
              shaderLanguage: od.isWebGPU ? 1 : 0
            })
          } else Ld = new Pd.e("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: pd.c.NEAREST_NEAREST_MIPNEAREST,
            engine: od,
            shaderLanguage: od.isWebGPU ? 1 : 0
          });
          await new Promise((dd => {
            Ld.onEffectCreatedObservable.addOnce((Jd => {
              Jd.executeWhenCompiled((() => {
                dd(0)
              }))
            }))
          }));
          const Od = new Nd.c("temp", {
            width: Jd,
            height: Wd
          }, Kd, !1);
          Ld.onApply = function(Jd) {
            Jd.setTexture("textureSampler", dd), Jd.setFloat("lod", gd), Jd.setInt("gamma", dd.gammaSpace ? 1 : 0), Qd && Jd.setFloat("slice", Cd)
          };
          try {
            if (Od.renderTarget && ld) {
              const kd = ld.samplingMode;
              0 !== gd ? dd.updateSamplingMode(pd.c.NEAREST_NEAREST_MIPNEAREST) : dd.updateSamplingMode(pd.c.NEAREST_NEAREST), Kd.postProcessManager.directRender([Ld], Od.renderTarget, !0), dd.updateSamplingMode(kd);
              const Nd = await od.readPixels(0, 0, Jd, Wd),
                Pd = new Uint8Array(Nd.buffer, Nd.byteOffset, Nd.byteLength);
              return od.unBindFramebuffer(Od.renderTarget), Pd
            }
            throw Error("Render to texture failed.")
          } finally {
            Od.dispose(), Ld.dispose()
          }
        }(dd, ed, Rd, Zd, gd, Kd)
      }
      let Id = await dd.readPixels(Zd, gd);
      if (!Id) throw new Error(`Failed to read pixels from texture ${dd.name}.`);
      if (Id instanceof Float32Array) {
        const dd = new Uint8Array(Id.length);
        let Jd = Id.length;
        for (; Jd--;) {
          const kd = Id[Jd];
          dd[Jd] = Math.round(255 * (0, od.Clamp)(kd))
        }
        Id = dd
      }
      const Gd = ed * Rd,
        vd = 4 * Gd;
      if (Id.length !== vd) {
        const dd = 0 === Gd ? 0 : Id.length / Gd;
        if (1 === dd || 2 === dd || 3 === dd) {
          const Jd = new Uint8Array(vd);
          for (let kd = 0, pd = 0, Nd = 0; kd < Gd; kd++, Nd += 4) {
            const kd = Id[pd++];
            if (1 === dd) {
              Jd[Nd] = kd, Jd[Nd + 1] = kd, Jd[Nd + 2] = kd, Jd[Nd + 3] = 255;
              continue
            }
            const Wd = Id[pd++];
            2 !== dd ? (Jd[Nd] = kd, Jd[Nd + 1] = Wd, Jd[Nd + 2] = Id[pd++], Jd[Nd + 3] = 255) : (Jd[Nd] = kd, Jd[Nd + 1] = Wd, Jd[Nd + 2] = 0, Jd[Nd + 3] = 255)
          }
          return Jd
        }
      }
      return Id
    }
    const Od = {
      CreateResizedCopy: function(dd, Jd, kd) {
        let Wd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Pd = dd.Wm(),
          Zd = Pd.eL(),
          gd = new Nd.c("resized" + dd.name, {
            width: Jd,
            height: kd
          }, Pd, !dd.noMipmap, !0, dd._texture.type, !1, dd.samplingMode, !1);
        gd.wrapU = dd.wrapU, gd.wrapV = dd.wrapV, gd.uOffset = dd.uOffset, gd.vOffset = dd.vOffset, gd.uScale = dd.uScale, gd.vScale = dd.vScale, gd.uAng = dd.uAng, gd.vAng = dd.vAng, gd.wAng = dd.wAng, gd.coordinatesIndex = dd.coordinatesIndex, gd.level = dd.level, gd.anisotropicFilteringLevel = dd.anisotropicFilteringLevel, gd._texture.isReady = !1, dd.wrapU = pd.c.CLAMP_ADDRESSMODE, dd.wrapV = pd.c.CLAMP_ADDRESSMODE;
        const Cd = new Kd("pass", 1, null, Wd ? pd.c.BILINEAR_SAMPLINGMODE : pd.c.NEAREST_SAMPLINGMODE, Zd, !1, 0);
        return Cd.externalTextureSamplerBinding = !0, Cd.onEffectCreatedObservable.addOnce((Jd => {
          Jd.executeWhenCompiled((() => {
            Cd.onApply = function(Jd) {
              Jd.setTexture("textureSampler", dd)
            };
            const Jd = gd.renderTarget;
            Jd && (Pd.postProcessManager.directRender([Cd], Jd), Zd.unBindFramebuffer(Jd), gd.disposeFramebufferObjects(), Cd.dispose(), gd.getInternalTexture().isReady = !0)
          }))
        })), gd
      },
      ApplyPostProcess: Qd,
      ToHalfFloat: ld.l,
      FromHalfFloat: ld.e,
      GetTextureDataAsync: Ld
    }
  },
  41752: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Ld
    });
    var pd = kd(39964),
      Nd = kd(40080),
      Wd = kd(37280),
      Pd = kd(37251),
      Zd = kd(39822),
      gd = kd(39966),
      Cd = kd(39983),
      Kd = kd(37303),
      od = kd(39874),
      ld = kd(39902),
      Qd = kd(41761);
    let Ld = (() => {
        var dd;
        let Jd, Zd, od, Ld, Od, Rd, Id, Gd, vd, xd, qd, Bd, sd, ad, Md, Fd, Yd = [],
          md = [],
          bd = [],
          Sd = [],
          jd = [],
          Xd = [],
          fd = [],
          nd = [],
          Ud = [],
          yd = [],
          Dd = [],
          Td = [],
          Ed = [],
          cd = [],
          hd = [],
          rd = [],
          ud = [],
          td = [],
          Vd = [],
          zd = [],
          Hd = [],
          wd = [],
          Ad = [],
          dJ = [],
          JJ = [],
          kJ = [],
          pJ = [],
          NJ = [],
          WJ = [];
        return dd = class {
          static get ForceGLSL() {
            return Qd.f.ForceGLSL
          }
          static set ForceGLSL(dd) {
            Qd.f.ForceGLSL = dd
          }
          static RegisterShaderCodeProcessing(dd, Jd) {
            Qd.f.RegisterShaderCodeProcessing(dd, Jd)
          }
          get name() {
            return this._effectWrapper.name
          }
          set name(dd) {
            this._effectWrapper.name = dd
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode
          }
          set alphaMode(dd) {
            this._effectWrapper.alphaMode = dd
          }
          get samples() {
            return this._samples
          }
          set samples(dd) {
            this._samples = Math.min(dd, this._engine.getCaps().maxMSAASamples), this._textures.forEach((dd => {
              dd.setSamples(this._samples)
            }))
          }
          get shaderLanguage() {
            return this._shaderLanguage
          }
          getEffectName() {
            return this._fragmentUrl
          }
          set onActivate(dd) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), dd && (this._onActivateObserver = this.onActivateObservable.add(dd))
          }
          set onSizeChanged(dd) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(dd)
          }
          set onApply(dd) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(dd)
          }
          set onBeforeRender(dd) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(dd)
          }
          set onAfterRender(dd) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(dd)
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd]
          }
          set inputTexture(dd) {
            this._forcedOutputTexture = dd
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty())
          }
          getCamera() {
            return this.JA
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.kdd(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(Jd, kd, Zd, gd, Cd, Kd) {
            let od = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              ld = arguments.length > 7 ? arguments[7] : void 0,
              Ld = arguments.length > 8 ? arguments[8] : void 0,
              Od = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              Rd = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              Id = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              Gd = arguments.length > 12 ? arguments[12] : void 0,
              vd = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              xd = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              qd = arguments.length > 15 ? arguments[15] : void 0,
              Bd = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, pd.i)(this, Yd), null), this.uniqueId = (0, pd.i)(this, md, void 0), this.width = ((0, pd.i)(this, bd), (0, pd.i)(this, Sd, -1)), this.height = ((0, pd.i)(this, jd), (0, pd.i)(this, Xd, -1)), this.nodeMaterialSource = ((0, pd.i)(this, fd), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, pd.i)(this, nd, void 0), this.clearColor = ((0, pd.i)(this, Ud), (0, pd.i)(this, yd, void 0)), this.autoClear = ((0, pd.i)(this, Dd), (0, pd.i)(this, Td, !0)), this.forceAutoClearInAlphaMode = ((0, pd.i)(this, Ed), (0, pd.i)(this, cd, !1)), this.alphaConstants = ((0, pd.i)(this, hd), (0, pd.i)(this, rd, void 0)), this.animations = ((0, pd.i)(this, ud), []), this.enablePixelPerfectMode = (0, pd.i)(this, td, !1), this.forceFullscreenViewport = ((0, pd.i)(this, Vd), (0, pd.i)(this, zd, !0)), this.inspectableCustomProperties = (0, pd.i)(this, Hd), this.scaleMode = (0, pd.i)(this, wd, 1), this.alwaysForcePOT = ((0, pd.i)(this, Ad), (0, pd.i)(this, dJ, !1)), this._samples = ((0, pd.i)(this, JJ), (0, pd.i)(this, kJ, 1)), this.adaptScaleToCurrentViewport = ((0, pd.i)(this, pJ), (0, pd.i)(this, NJ, !1)), this.doNotSerialize = ((0, pd.i)(this, WJ), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new Nd.h(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new Pd.k(1, 1), this._texelSize = Pd.k.Zero(), this.onActivateObservable = new Wd.e, this.onSizeChangedObservable = new Wd.e, this.onApplyObservable = new Wd.e, this.onBeforeRenderObservable = new Wd.e, this.onAfterRenderObservable = new Wd.e, this.Zm = new Wd.e, ed();
            let sd, ad = 1,
              Md = null;
            if (Zd && !Array.isArray(Zd)) {
              const dd = Zd;
              Zd = dd.uniforms ?? null, gd = dd.samplers ?? null, ad = dd.size ?? 1, Kd = dd.camera ?? null, od = dd.samplingMode ?? 1, ld = dd.engine, Ld = dd.reusable, Od = Array.isArray(dd.defines) ? dd.defines.join("\n") : dd.defines ?? null, Rd = dd.textureType ?? 0, Id = dd.vertexUrl ?? "postprocess", Gd = dd.indexParameters, vd = dd.blockCompilation ?? !1, xd = dd.textureFormat ?? 5, qd = dd.shaderLanguage ?? 0, Md = dd.uniformBuffers ?? null, Bd = dd.extraInitializations, sd = dd.effectWrapper
            } else Cd && (ad = "number" === typeof Cd ? Cd : {
              width: Cd.width,
              height: Cd.height
            });
            if (this._useExistingThinPostProcess = !!sd, this._effectWrapper = sd ?? new Qd.f({
                name: Jd,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: kd,
                engine: ld || Kd?.Wm().eL(),
                uniforms: Zd,
                samplers: gd,
                uniformBuffers: Md,
                defines: Od,
                vertexUrl: Id,
                indexParameters: Gd,
                blockCompilation: !0,
                shaderLanguage: qd,
                extraInitializations: void 0
              }), this.name = Jd, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != Kd ? (this.JA = Kd, this._scene = Kd.Wm(), Kd.attachPostProcess(this), this._engine = this._scene.eL(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : ld && (this._engine = ld, this._engine.postProcesses.push(this)), this._options = ad, this.renderTargetSamplingMode = od || 1, this._reusable = Ld || !1, this._textureType = Rd, this._textureFormat = xd, this._shaderLanguage = qd || 0, this._samplers = gd || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = kd, this._vertexUrl = Id, this._parameters = Zd || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = Md || [], this._indexParameters = Gd, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const Jd = [];
              this._gatherImports(this._engine.isWebGPU && !dd.ForceGLSL, Jd), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(vd, Od, Bd, Jd)
            }
          }
          _gatherImports() {
            let dd = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? dd.push(Promise.all([kd.e(357).then((() => kd(61119)))])) : dd.push(Promise.all([kd.e(346).then((() => kd(60885)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          eL() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(dd) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = dd, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new Nd.h(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              pd = arguments.length > 3 ? arguments[3] : void 0,
              Nd = arguments.length > 4 ? arguments[4] : void 0,
              Wd = arguments.length > 5 ? arguments[5] : void 0,
              Pd = arguments.length > 6 ? arguments[6] : void 0,
              Zd = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(dd, Jd, kd, pd, Nd, Wd, Pd, Zd), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(dd, Jd) {
            let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let Nd = 0; Nd < this._textureCache.length; Nd++)
              if (this._textureCache[Nd].texture.width === dd.width && this._textureCache[Nd].texture.height === dd.height && this._textureCache[Nd].postProcessChannel === kd && this._textureCache[Nd].texture._generateDepthBuffer === Jd.generateDepthBuffer && this._textureCache[Nd].texture.samples === Jd.samples) return this._textureCache[Nd].texture;
            const pd = this._engine.createRenderTargetTexture(dd, Jd);
            return this._textureCache.push({
              texture: pd,
              postProcessChannel: kd,
              lastUsedRenderId: -1
            }), pd
          }
          _flushTextureCache() {
            const dd = this._renderId;
            for (let Jd = this._textureCache.length - 1; Jd >= 0; Jd--)
              if (dd - this._textureCache[Jd].lastUsedRenderId > 100) {
                let dd = !1;
                for (let kd = 0; kd < this._textures.length; kd++)
                  if (this._textures.data[kd] === this._textureCache[Jd].texture) {
                    dd = !0;
                    break
                  } dd || (this._textureCache[Jd].texture.dispose(), this._textureCache.splice(Jd, 1))
              }
          }
          resize(dd, Jd) {
            let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Nd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = dd, this.height = Jd;
            let Wd = null;
            if (kd)
              for (let gd = 0; gd < kd._postProcesses.length; gd++)
                if (null !== kd._postProcesses[gd]) {
                  Wd = kd._postProcesses[gd];
                  break
                } const Pd = {
                width: this.width,
                height: this.height
              },
              Zd = {
                generateMipMaps: pd,
                generateDepthBuffer: Nd || Wd === this,
                generateStencilBuffer: (Nd || Wd === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(Pd, Zd, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(Pd, Zd, 1)), this._texelSize.kdd(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let dd;
            if (this._shareOutputWithPostProcess) dd = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) dd = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let Jd;
              dd = this.inputTexture;
              for (let kd = 0; kd < this._textureCache.length; kd++)
                if (this._textureCache[kd].texture === dd) {
                  Jd = this._textureCache[kd];
                  break
                } Jd && (Jd.lastUsedRenderId = this._renderId)
            }
            return dd
          }
          activate(dd) {
            let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              kd = arguments.length > 2 ? arguments[2] : void 0;
            const pd = null === dd || void 0 !== dd.cameraRigMode ? dd || this.JA : null,
              Nd = pd?.Wm() ?? dd,
              Wd = Nd.eL(),
              Pd = Wd.getCaps().maxTextureSize,
              Zd = (Jd ? Jd.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              gd = (Jd ? Jd.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let Cd = this._options.width || Zd,
              Kd = this._options.height || gd;
            const od = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let Qd = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const dd = Wd.currentViewport;
                dd && (Cd *= dd.width, Kd *= dd.height)
              }(od || this.alwaysForcePOT) && (this._options.width || (Cd = Wd.needPOTTextures ? (0, ld.e)(Cd, Pd, this.scaleMode) : Cd), this._options.height || (Kd = Wd.needPOTTextures ? (0, ld.e)(Kd, Pd, this.scaleMode) : Kd)), this.width === Cd && this.height === Kd && (Qd = this._getTarget()) || this.resize(Cd, Kd, pd, od, kd), this._textures.forEach((dd => {
                dd.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(dd, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return Qd || (Qd = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.kdd(Zd / Cd, gd / Kd), this._engine.bindFramebuffer(Qd, 0, Zd, gd, this.forceFullscreenViewport)) : (this._scaleRatio.kdd(1, 1), this._engine.bindFramebuffer(Qd, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(pd), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : Nd.clearColor, Nd._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), Qd
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
            let dd;
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.eL().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), dd = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", dd?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
          }
          _disposeTextureCache() {
            for (let dd = this._textureCache.length - 1; dd >= 0; dd--) this._textureCache[dd].texture.dispose();
            this._textureCache.length = 0
          }
          setPrePassRenderer(dd) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = dd.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
          }
          dispose(dd) {
            let Jd;
            if (dd = dd || this.JA, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (Jd = this._parentContainer.postProcesses.indexOf(this), Jd > -1 && this._parentContainer.postProcesses.splice(Jd, 1), this._parentContainer = null), Jd = this._engine.postProcesses.indexOf(this), -1 !== Jd && this._engine.postProcesses.splice(Jd, 1), this.Zm.notifyObservers(), dd) {
              if (dd.detachPostProcess(this), Jd = dd._postProcesses.indexOf(this), 0 === Jd && dd._postProcesses.length > 0) {
                const dd = this.JA._getFirstPostProcess();
                dd && dd.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const dd = Cd.c.Serialize(this),
              Jd = this.getCamera() || this._scene && this._scene.activeCamera;
            return dd.customType = "BABYLON." + this.getClassName(), dd.cameraId = Jd ? Jd.id : null, dd.reusable = this._reusable, dd.textureType = this._textureType, dd.fragmentUrl = this._fragmentUrl, dd.parameters = this._parameters, dd.samplers = this._samplers, dd.uniformBuffers = this._uniformBuffers, dd.options = this._options, dd.defines = this._postProcessDefines, dd.textureFormat = this._textureFormat, dd.vertexUrl = this._vertexUrl, dd.indexParameters = this._indexParameters, dd
          }
          clone() {
            const Jd = this.serialize();
            Jd._engine = this._engine, Jd.cameraId = null;
            const kd = dd.Parse(Jd, this._scene, "");
            return kd ? (kd.onActivateObservable = this.onActivateObservable.clone(), kd.onSizeChangedObservable = this.onSizeChangedObservable.clone(), kd.onApplyObservable = this.onApplyObservable.clone(), kd.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), kd.onAfterRenderObservable = this.onAfterRenderObservable.clone(), kd._prePassEffectConfiguration = this._prePassEffectConfiguration, kd) : null
          }
          static Parse(dd, Jd, kd) {
            const pd = (0, Kd.e)(dd.customType);
            if (!pd || !pd._Parse) return null;
            const Nd = Jd ? Jd.getCameraById(dd.cameraId) : null;
            return pd._Parse(dd, Nd, Jd, kd)
          }
          static _Parse(Jd, kd, pd, Nd) {
            return Cd.c.Parse((() => new dd(Jd.name, Jd.fragmentUrl, Jd.parameters, Jd.samplers, Jd.options, kd, Jd.renderTargetSamplingMode, Jd._engine, Jd.reusable, Jd.defines, Jd.textureType, Jd.vertexUrl, Jd.indexParameters, !1, Jd.textureFormat)), Jd, pd, Nd)
          }
        }, (() => {
          const kd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Jd = [(0, gd.H)()], Zd = [(0, gd.H)()], od = [(0, gd.H)()], Ld = [(0, gd.H)()], Od = [(0, gd.H)()], Rd = [(0, gd.q)()], Id = [(0, gd.H)()], Gd = [(0, gd.H)()], vd = [(0, gd.H)()], xd = [(0, gd.H)()], qd = [(0, gd.H)()], Bd = [(0, gd.H)()], sd = [(0, gd.H)()], ad = [(0, gd.H)()], Md = [(0, gd.H)("samples")], Fd = [(0, gd.H)()], (0, pd.h)(dd, null, Zd, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: dd => "name" in dd,
              get: dd => dd.name
            },
            metadata: kd
          }, null, Yd), (0, pd.h)(dd, null, vd, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: dd => "alphaMode" in dd,
              get: dd => dd.alphaMode
            },
            metadata: kd
          }, null, Yd), (0, pd.h)(null, null, Jd, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: dd => "uniqueId" in dd,
              get: dd => dd.uniqueId,
              set: (dd, Jd) => {
                dd.uniqueId = Jd
              }
            },
            metadata: kd
          }, md, bd), (0, pd.h)(null, null, od, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: dd => "width" in dd,
              get: dd => dd.width,
              set: (dd, Jd) => {
                dd.width = Jd
              }
            },
            metadata: kd
          }, Sd, jd), (0, pd.h)(null, null, Ld, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: dd => "height" in dd,
              get: dd => dd.height,
              set: (dd, Jd) => {
                dd.height = Jd
              }
            },
            metadata: kd
          }, Xd, fd), (0, pd.h)(null, null, Od, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: dd => "renderTargetSamplingMode" in dd,
              get: dd => dd.renderTargetSamplingMode,
              set: (dd, Jd) => {
                dd.renderTargetSamplingMode = Jd
              }
            },
            metadata: kd
          }, nd, Ud), (0, pd.h)(null, null, Rd, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: dd => "clearColor" in dd,
              get: dd => dd.clearColor,
              set: (dd, Jd) => {
                dd.clearColor = Jd
              }
            },
            metadata: kd
          }, yd, Dd), (0, pd.h)(null, null, Id, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: dd => "autoClear" in dd,
              get: dd => dd.autoClear,
              set: (dd, Jd) => {
                dd.autoClear = Jd
              }
            },
            metadata: kd
          }, Td, Ed), (0, pd.h)(null, null, Gd, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: dd => "forceAutoClearInAlphaMode" in dd,
              get: dd => dd.forceAutoClearInAlphaMode,
              set: (dd, Jd) => {
                dd.forceAutoClearInAlphaMode = Jd
              }
            },
            metadata: kd
          }, cd, hd), (0, pd.h)(null, null, xd, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: dd => "alphaConstants" in dd,
              get: dd => dd.alphaConstants,
              set: (dd, Jd) => {
                dd.alphaConstants = Jd
              }
            },
            metadata: kd
          }, rd, ud), (0, pd.h)(null, null, qd, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: dd => "enablePixelPerfectMode" in dd,
              get: dd => dd.enablePixelPerfectMode,
              set: (dd, Jd) => {
                dd.enablePixelPerfectMode = Jd
              }
            },
            metadata: kd
          }, td, Vd), (0, pd.h)(null, null, Bd, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: dd => "forceFullscreenViewport" in dd,
              get: dd => dd.forceFullscreenViewport,
              set: (dd, Jd) => {
                dd.forceFullscreenViewport = Jd
              }
            },
            metadata: kd
          }, zd, Hd), (0, pd.h)(null, null, sd, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: dd => "scaleMode" in dd,
              get: dd => dd.scaleMode,
              set: (dd, Jd) => {
                dd.scaleMode = Jd
              }
            },
            metadata: kd
          }, wd, Ad), (0, pd.h)(null, null, ad, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: dd => "alwaysForcePOT" in dd,
              get: dd => dd.alwaysForcePOT,
              set: (dd, Jd) => {
                dd.alwaysForcePOT = Jd
              }
            },
            metadata: kd
          }, dJ, JJ), (0, pd.h)(null, null, Md, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: dd => "_samples" in dd,
              get: dd => dd._samples,
              set: (dd, Jd) => {
                dd._samples = Jd
              }
            },
            metadata: kd
          }, kJ, pJ), (0, pd.h)(null, null, Fd, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: dd => "adaptScaleToCurrentViewport" in dd,
              get: dd => dd.adaptScaleToCurrentViewport,
              set: (dd, Jd) => {
                dd.adaptScaleToCurrentViewport = Jd
              }
            },
            metadata: kd
          }, NJ, WJ), kd && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: kd
          })
        })(), dd
      })(),
      Od = !1;

    function ed() {
      Od || (Od = !0, od.b.prototype.setTextureFromPostProcess = function(dd, Jd, kd) {
        let pd = null;
        Jd && (Jd._forcedOutputTexture ? pd = Jd._forcedOutputTexture : Jd._textures.data[Jd._currentRenderTextureInd] && (pd = Jd._textures.data[Jd._currentRenderTextureInd])), this._bindTexture(dd, pd?.texture ?? null, kd)
      }, od.b.prototype.setTextureFromPostProcessOutput = function(dd, Jd, kd) {
        this._bindTexture(dd, Jd?._outputTexture?.texture ?? null, kd)
      }, Zd.b.prototype.setTextureFromPostProcess = function(dd, Jd) {
        this._engine.setTextureFromPostProcess(this._samplers[dd], Jd, dd)
      }, Zd.b.prototype.setTextureFromPostProcessOutput = function(dd, Jd) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[dd], Jd, dd)
      }, (0, Kd.h)("BABYLON.PostProcess", Ld))
    }
  },
  41782: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Pd,
      e: () => Wd
    });
    var pd = kd(41761),
      Nd = kd(37277);
    class Wd extends pd.f {
      _gatherImports(dd, Jd) {
        dd ? (this._webGPUReady = !0, Jd.push(Promise.all([kd.e(364).then((() => kd(61174)))]))) : Jd.push(Promise.all([kd.e(365).then((() => kd(61182)))])), super._gatherImports(dd, Jd)
      }
      constructor(dd) {
        let Jd = arguments.length > 2 ? arguments[2] : void 0;
        const kd = {
          name: dd,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Nd.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: Wd.FragmentUrl,
          ...Jd
        };
        kd.engine || (kd.engine = Nd.d.LastCreatedEngine), super(kd)
      }
    }
    Wd.FragmentUrl = "pass";
    class Pd extends pd.f {
      _gatherImports(dd, Jd) {
        dd ? (this._webGPUReady = !0, Jd.push(Promise.all([kd.e(366).then((() => kd(61189)))]))) : Jd.push(Promise.all([kd.e(367).then((() => kd(61192)))])), super._gatherImports(dd, Jd)
      }
      constructor(dd) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: dd,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Nd.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: Pd.FragmentUrl,
          defines: "#define POSITIVEX"
        }), this._face = 0
      }
      get face() {
        return this._face
      }
      set face(dd) {
        if (!(dd < 0 || dd > 5)) switch (this._face = dd, this._face) {
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
    Pd.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);