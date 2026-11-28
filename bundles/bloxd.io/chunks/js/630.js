export const id = 630;
export const ids = [630];
export const modules = {
  54235: (dd, Od, md) => {
    md.d(Od, {
      b: () => bd
    });
    var Wd = md(38660),
      Fd = md(38636),
      Rd = md(42412),
      Xd = md(42083),
      Kd = md(41859),
      hd = md(40262),
      vd = md(42065),
      Qd = md(42089),
      td = md(38647),
      od = md(41831),
      Nd = md(42041),
      qd = md(42118);
    class Hd {
      get renderList() {
        return this._renderList
      }
      set renderList(dd) {
        this._renderList !== dd && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), dd && (this._unObserveRenderList = (0, td.i)(dd, this._renderListHasChanged)), this._renderList = dd)
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
              const Od = this._renderPassIds[dd];
              this._engine._renderPassNames[Od] = `${this._name}#${dd}`
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
      setMaterialForRendering(dd, Od) {
        let md;
        md = Array.isArray(dd) ? dd : [dd];
        for (let Wd = 0; Wd < md.length; ++Wd)
          for (let dd = 0; dd < this.options.numPasses; ++dd) {
            let Fd = md[Wd];
            md[Wd].lV && (Fd = md[Wd].ZRd), Fd.setMaterialForRenderPass(this._renderPassIds[dd], void 0 !== Od ? Array.isArray(Od) ? Od[dd] : Od : void 0)
          }
      }
      _freezeActiveMeshes(dd) {
        this._freezeActiveMeshesCancel = (0, od.g)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, dd)
            for (let dd = 0; dd < this._activeMeshes.length; dd++) this._activeMeshes.data[dd]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((dd, Od) => {
          this._freezeActiveMeshesCancel = null, Od ? (hd.c.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), dd && hd.c.Error(dd)) : (hd.c.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), dd && (hd.c.Error(dd), dd.stack && hd.c.Error(dd.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let dd = 0; dd < this._activeMeshes.length; dd++) this._activeMeshes.data[dd]._unFreeze();
        this._isFrozen = !1
      }
      constructor(dd, Od, md) {
        this._unObserveRenderList = null, this._renderListHasChanged = (dd, Od) => {
          const md = this._renderList ? this._renderList.length : 0;
          if (0 === Od && md > 0 || 0 === md)
            for (const Wd of this._scene.meshes) Wd._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new Wd.c, this.onAfterRenderObservable = new Wd.c, this.onBeforeRenderingManagerRenderObservable = new Wd.c, this.onAfterRenderingManagerRenderObservable = new Wd.c, this.onInitRenderingObservable = new Wd.c, this.onFinishRenderingObservable = new Wd.c, this.onFastPathRenderObservable = new Wd.c, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new Nd.e(256), this._activeBoundingBoxes = new Nd.e(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = dd, this._scene = Od, this._engine = this._scene.Iq(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...md
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new Qd.c(Od), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const dd of this._scene.lights) dd.getTypeID() === qd.c.LIGHTTYPEID_CLUSTERED_CONTAINER && dd.isSupported && dd._updateBatches(this.activeCamera).render()
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
      _createSceneUBO(dd, Od) {
        const md = this._scene.Iq(),
          Wd = new vd.c(md, void 0, Od, dd, void 0, !1);
        return Wd.addUniform("viewProjection", 16), Od && Wd.addUniform("viewProjectionR", 16), Wd.addUniform("view", 16), Wd.addUniform("projection", 16), Wd.addUniform("vEyePosition", 4), Wd.addUniform("inverseProjection", 16), Wd
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const dd = this._engine._currentRenderTarget,
          Od = !(!dd || !dd.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const dd = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${dd} for ${this.name}`, Od)), this._sceneUBOIsMultiview.push(Od)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== Od && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, Od), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = Od);
        const md = this._sceneUBOs[this._currentSceneUBOIndex++];
        return md.unbindEffect(), md
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
      isReadyForRendering(dd, Od) {
        this.prepareRenderList(), this.initRender(dd, Od);
        const md = this._checkReadiness();
        return this.finishRender(), md
      }
      prepareRenderList() {
        const dd = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let Od = 0; Od < this._waitingRenderList.length; Od++) {
              const md = this._waitingRenderList[Od],
                Wd = dd.getMeshById(md);
              Wd && this.renderList.push(Wd)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const dd = this._scene.meshes;
          for (let Od = 0; Od < dd.length; Od++) {
            const md = dd[Od];
            this.renderListPredicate(md) && this.renderList.push(md)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(dd, Od) {
        const md = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), md && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(md.getViewMatrix(), md.getProjectionMatrix(!0)), this._scene._activeCamera = md, this._engine.setViewport(md.rigParent ? md.rigParent.viewport : md.viewport, dd, Od)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const dd = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (dd.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), dd._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== dd.activeCamera && dd.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), dd.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const md = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[dd], this.onBeforeRenderObservable.notifyObservers(dd);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(dd);
        else {
          const Od = this._prepareRenderingManager(dd),
            md = this._scene.getOutlineRenderer?.(),
            Wd = md?.enabled;
          md && (md.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(dd), this._renderingManager.render(this.customRenderFunction, Od, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(dd), md && (md.enabled = Wd)
        }
        Od || this.onAfterRenderObservable.notifyObservers(dd), this._engine.currentRenderPassId = md
      }
      _checkReadiness() {
        const dd = this._scene,
          Od = this._engine.currentRenderPassId;
        let md = !0;
        dd.getViewMatrix() || dd.updateTransformMatrix();
        const Wd = this.options.numPasses;
        for (let Fd = 0; Fd < Wd && md; Fd++) {
          const Od = this.renderList ? this.renderList : dd.frameGraph ? dd.meshes : dd.getActiveMeshes().data,
            Rd = this.renderList || dd.frameGraph ? Od.length : dd.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[Fd], this.onBeforeRenderObservable.notifyObservers(Fd);
          let Xd = null,
            Kd = Rd;
          this.getCustomRenderList && (Xd = this.getCustomRenderList(Fd, Od, Rd), Xd && (Kd = Xd.length)), Xd || (Xd = Od), this.options.doNotChangeAspectRatio || dd.updateTransformMatrix(!0);
          for (let dd = 0; dd < Kd && md; ++dd) {
            const Od = Xd[dd];
            if (!Od.isEnabled() || Od.isBlocked || !Od.isVisible || !Od.ZE) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(Od, this.refreshRate, !0)) {
                md = !1;
                continue
              }
            } else if (!Od.isReady(!0)) {
              md = !1;
              continue
            }
            let Wd = Od._edgesRenderer,
              Fd = Od.hasThinInstances;
            if (Od.lV) {
              const dd = Od.ZRd;
              dd.edgesShareWithInstances && dd._edgesRenderer?.isEnabled && (Wd = dd._edgesRenderer, Fd = !0)
            } else Od.CRd && Od.edgesShareWithInstances && (Fd = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && Wd?.isEnabled && (Wd.isReady(Fd) || (md = !1))
          }
          if (this.renderParticles && dd.particlesEnabled) {
            const Od = this.particleSystemList || dd.kE;
            for (const dd of Od) dd.isReady() || (md = !1)
          }
          if (this.renderSprites && dd.spritesEnabled) {
            const Od = this.spriteManagerList || dd.spriteManagers;
            if (Od)
              for (const Wd of Od) dd.activeCamera && 0 === (Wd.layerMask & dd.activeCamera.layerMask) || Wd.isReady && !Wd.isReady() && (md = !1)
          }
          this.onAfterRenderObservable.notifyObservers(Fd), Wd > 1 && (dd.incrementRenderId(), dd.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = Od, md
      }
      _prepareRenderingManager() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const md = this._scene;
        let Wd, Fd, Rd = null;
        const Xd = this.renderList ? this.renderList : md.frameGraph ? md.meshes : md.getActiveMeshes().data,
          Kd = this.renderList || md.frameGraph ? Xd.length : md.getActiveMeshes().length;
        if (this.getCustomRenderList && (Rd = this.getCustomRenderList(dd, Xd, Kd)), Rd) Wd = Rd.length, Fd = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !Od && !this._engine.isWebGPU) return Xd;
          this._defaultRenderListPrepared = !0, Rd = Xd, Wd = Kd, Fd = !this.renderList || this.forceLayerMaskCheck
        }
        const hd = md.activeCamera,
          vd = this.cameraForLOD ?? hd,
          Qd = md.getBoundingBoxRenderer?.();
        if (md._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && Qd) {
            Qd.reset();
            for (let dd = 0; dd < this._activeBoundingBoxes.length; dd++) {
              const Od = this._activeBoundingBoxes.data[dd];
              Qd.renderList.push(Od)
            }
          }
          return Rd
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), Qd && Qd.reset(), this.renderMeshes) {
          const dd = md.getRenderId(),
            Od = md.getFrameId();
          for (let Xd = 0; Xd < Wd; Xd++) {
            const Wd = Rd[Xd];
            if (Wd && !Wd.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(Wd, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!Wd.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let Rd, Xd;
              if (vd) {
                const dd = Wd._internalAbstractMeshDataInfo._currentLOD.get(vd);
                dd && dd[1] === Od ? Rd = dd[0] : (Rd = md.customLODSelector ? md.customLODSelector(Wd, vd) : Wd.getLOD(vd), dd ? (dd[0] = Rd, dd[1] = Od) : Wd._internalAbstractMeshDataInfo._currentLOD.set(vd, [Rd, Od]))
              } else Rd = Wd;
              if (!Rd) continue;
              if (Rd !== Wd && 0 !== Rd.billboardMode && Rd.computeWorldMatrix(), Rd._preActivateForIntermediateRendering(dd), Xd = !(!Fd || !hd) && 0 === (Wd.layerMask & hd.layerMask), Wd.isEnabled() && Wd.isVisible && Wd.ZE && !Xd) {
                if (this._activeMeshes.push(Wd), Rd._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, Rd !== Wd && Rd._activate(dd, !0), this.enableBoundingBoxRendering && Qd && Qd._preActiveMesh(Wd), Wd._activate(dd, !0) && Wd.ZE.length) {
                  Wd.lV ? Wd._internalAbstractMeshDataInfo._actAsRegularMesh && (Rd = Wd) : Rd._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, Rd._internalAbstractMeshDataInfo._isActiveIntermediate = !0, md._prepareSkeleton(Rd);
                  for (let dd = 0; dd < Rd.ZE.length; dd++) {
                    const Od = Rd.ZE[dd];
                    this.enableBoundingBoxRendering && Qd && Qd._evaluateSubMesh(Wd, Od), this._renderingManager.dispatch(Od, Rd)
                  }
                }
                Wd._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && Qd && Od)
          for (let td = 0; td < Qd.renderList.length; td++) {
            const dd = Qd.renderList.data[td];
            this._activeBoundingBoxes.push(dd)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const dd = this.particleSystemList || md.kE;
          for (let Od = 0; Od < dd.length; Od++) {
            const md = dd[Od],
              Wd = md.emitter;
            md.isStarted() && Wd && (!Wd.position || Wd.isEnabled()) && this._renderingManager.dispatchParticles(md)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return Rd
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(dd, Od, md, Wd)
      }
      setRenderingAutoClearDepthStencil(dd, Od) {
        let md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Wd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(dd, Od, md, Wd), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const dd = new Hd(this.name, this._scene, this.options);
        return this.renderList && (dd.renderList = this.renderList.slice(0)), dd
      }
      dispose() {
        const dd = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          Od = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let md = 0; md < Od; md++) {
          const Od = dd[md];
          Od && void 0 !== Od.getMaterialForRenderPass(this.renderPassId) && Od.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const md of this._sceneUBOs) md.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === Hd.REFRESHRATE_RENDER_ONCE && (this.refreshRate = Hd.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    Hd.REFRESHRATE_RENDER_ONCE = 0, Hd.REFRESHRATE_RENDER_ONEVERYFRAME = 1, Hd.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var yd = md(41817);
    class bd extends Rd.f {
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
      setMaterialForRendering(dd, Od) {
        this._objectRenderer.setMaterialForRendering(dd, Od)
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
        const Od = this.zV();
        Od && Od.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(dd, Od, md) {
        let Xd, Kd, vd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Qd = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          td = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          od = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Nd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Rd.f.TRILINEAR_SAMPLINGMODE,
          qd = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          yd = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          bd = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          Td = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          pd = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          Yd = arguments.length > 13 ? arguments[13] : void 0,
          gd = arguments.length > 14 ? arguments[14] : void 0,
          wd = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          Ed = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          Jd = !0,
          Ud = !1;
        if ("object" === typeof vd) {
          const dd = vd;
          vd = !!dd.generateMipMaps, Qd = dd.doNotChangeAspectRatio ?? !0, td = dd.type ?? 0, od = !!dd.isCube, Nd = dd.samplingMode ?? Rd.f.TRILINEAR_SAMPLINGMODE, qd = dd.generateDepthBuffer ?? !0, yd = !!dd.generateStencilBuffer, bd = !!dd.isMulti, Td = dd.format ?? 5, pd = !!dd.delayAllocation, Yd = dd.samples, gd = dd.creationFlags, wd = !!dd.noColorAttachment, Ed = !!dd.useSRGBBuffer, Xd = dd.colorAttachment, Jd = dd.gammaSpace ?? Jd, Kd = dd.existingObjectRenderer, Ud = !!dd.enableClusteredLights
        }
        if (super(null, md, !vd, void 0, Nd, void 0, void 0, void 0, void 0, Td), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new Wd.c, this.onAfterUnbindObservable = new Wd.c, this.onClearObservable = new Wd.c, this.onResizeObservable = new Wd.c, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = Fd.j.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(md = this.zV())) return;
        const xd = this.zV().Iq();
        this._gammaSpace = Jd, this._coordinatesMode = Rd.f.PROJECTION_MODE, this.name = dd, this.isRenderTarget = !0, this._initialSizeParameter = Od, this._dontDisposeObjectRenderer = !!Kd, this._processSizeParameter(Od), this._objectRenderer = Kd ?? new Hd(dd, md, {
          numPasses: od ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: Qd,
          enableClusteredLights: Ud
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const dd = this._scene;
          if (!this._disableEngineStages)
            for (const Od of dd._beforeRenderTargetClearStage) Od.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(xd) : this.skipInitialClear || xd.clear(this.clearColor ?? dd.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || dd.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const Od of dd._beforeRenderTargetDrawStage) Od.action(this, this._currentFaceIndex, this._currentLayer);
          xd._debugPushGroup && xd._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (xd._debugPopGroup && xd._debugPopGroup(), !this._disableEngineStages)
            for (const Od of this._scene._afterRenderTargetDrawStage) Od.action(this, this._currentFaceIndex, this._currentLayer);
          const dd = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const Od of this._scene._afterRenderTargetPostProcessStage) Od.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = dd), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), xd) : hd.c.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(xd) : this.skipInitialClear || xd.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = xd.onResizeObservable.add((() => {})), this._generateMipMaps = !!vd, this._doNotChangeAspectRatio = Qd, bd || (this._renderTargetOptions = {
          generateMipMaps: vd,
          type: td,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: qd,
          generateStencilBuffer: yd,
          samples: Yd,
          creationFlags: gd,
          noColorAttachment: wd,
          useSRGBBuffer: Ed,
          colorAttachment: Xd,
          label: this.name
        }, this.samplingMode === Rd.f.NEAREST_SAMPLINGMODE && (this.wrapU = Rd.f.CLAMP_ADDRESSMODE, this.wrapV = Rd.f.CLAMP_ADDRESSMODE), pd || (od ? (this._renderTarget = md.Iq().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = Rd.f.INVCUBIC_MODE, this._textureMatrix = Fd.d.Identity()) : this._renderTarget = md.Iq().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== Yd && (this.samples = Yd)))
      }
      createDepthStencilTexture() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Rd = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(dd, Od, md, Wd, Fd, Rd)
      }
      _processSizeParameter(dd) {
        if (dd.ratio) {
          this._sizeRatio = dd.ratio;
          const Od = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(Od.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(Od.getRenderHeight(), this._sizeRatio)
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
          const dd = this.zV();
          if (!dd) return;
          this._postProcessManager = new Xd.d(dd), this._postProcesses = new Array
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
        const Od = this._postProcesses.indexOf(dd); - 1 !== Od && (this._postProcesses.splice(Od, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
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
        const Od = this._size.depth;
        return Od || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(dd) {
        const Od = Math.max(1, this.getRenderSize() * dd);
        this.resize(Od)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(dd) {
        const Od = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const md = this.zV();
        md && (this._processSizeParameter(dd), this._renderTarget = Od ? md.Iq().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : md.Iq().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(dd, Od)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => md(54245))).then((dd => this._dumpTools = dd))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const dd = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), dd
      }
      _render() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const md = this.zV();
        if (!md) return;
        void 0 !== this.useCameraPostProcesses && (dd = this.useCameraPostProcesses);
        const Wd = md.Iq();
        if (Wd._debugPushGroup && Wd._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let Fd = 0; Fd < 6; Fd++) this._renderToTarget(Fd, dd, Od), md.incrementRenderId(), md.resetCachedMaterial();
          else this._renderToTarget(0, dd, Od);
        else
          for (let Fd = 0; Fd < this.getRenderLayers(); Fd++) this._renderToTarget(0, dd, Od, Fd), md.incrementRenderId(), md.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), Wd._debugPopGroup && Wd._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(dd, Od) {
        const md = dd * Od,
          Wd = (0, Kd.n)(md + 16384 / (128 + md));
        return Math.min((0, Kd.c)(dd), Wd)
      }
      _bindFrameBuffer() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const md = this.zV();
        if (!md) return;
        const Wd = md.Iq();
        this._renderTarget && Wd.bindFramebuffer(this._renderTarget, this.isCube ? dd : void 0, void 0, void 0, this.ignoreCameraViewport, 0, Od)
      }
      _unbindFrameBuffer(dd, Od) {
        this._renderTarget && dd.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(Od)
        }))
      }
      _prepareFrame(dd, Od, md, Wd) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(Od, md) : Wd && dd.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(Od, md)
      }
      _renderToTarget(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Fd = this.zV();
        if (!Fd) return;
        const Rd = Fd.Iq();
        this._currentFaceIndex = dd, this._currentLayer = Wd, this._currentUseCameraPostProcess = Od, this._currentDumpForDebug = md, this._prepareFrame(Fd, dd, Wd, Od), this._objectRenderer.render(dd + Wd, !0), this._unbindFrameBuffer(Rd, dd), this._texture && this.isCube && 5 === dd && Rd.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(dd, Od, md, Wd)
      }
      setRenderingAutoClearDepthStencil(dd, Od) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(dd, Od)
      }
      clone() {
        const dd = this.getSize(),
          Od = new bd(this.name, dd, this.zV(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return Od.hasAlpha = this.hasAlpha, Od.level = this.level, Od.coordinatesMode = this.coordinatesMode, this.renderList && (Od.renderList = this.renderList.slice(0)), Od
      }
      serialize() {
        if (!this.name) return null;
        const dd = super.serialize();
        if (dd.renderTargetSize = this.getRenderSize(), dd.renderList = [], this.renderList)
          for (let Od = 0; Od < this.renderList.length; Od++) dd.renderList.push(this.renderList[Od].id);
        return dd
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.zV().Iq().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const dd = this.zV();
        if (!dd) return;
        let Od = dd.customRenderTargets.indexOf(this);
        Od >= 0 && dd.customRenderTargets.splice(Od, 1);
        for (const md of dd.cameras) Od = md.customRenderTargets.indexOf(this), Od >= 0 && md.customRenderTargets.splice(Od, 1);
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
    bd.REFRESHRATE_RENDER_ONCE = Hd.REFRESHRATE_RENDER_ONCE, bd.REFRESHRATE_RENDER_ONEVERYFRAME = Hd.REFRESHRATE_RENDER_ONEVERYFRAME, bd.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = Hd.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(bd.prototype, "noPrePassRenderer") || Object.defineProperty(bd.prototype, "noPrePassRenderer", (0, yd.g)("RenderTargetTexture", "noPrePassRenderer"))
  },
  54221: (dd, Od, md) => {
    md.d(Od, {
      d: () => vd,
      g: () => Qd
    });
    var Wd = md(42075),
      Fd = md(39642),
      Rd = md(38660),
      Xd = md(41782),
      Kd = md(42240);
    const hd = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class vd {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hd;
        this._fullscreenViewport = new Fd.b(0, 0, 1, 1);
        const md = Od.positions ?? hd.positions,
          Rd = Od.indices ?? hd.indices;
        this.engine = dd, this._vertexBuffers = {
          [Wd.j.PositionKind]: new Wd.j(dd, md, Wd.j.PositionKind, !1, !1, 2)
        }, this._indexBuffer = dd.createIndexBuffer(Rd), this._indexBufferLength = Rd.length, this._onContextRestoredObserver = dd.eq.add((() => {
          this._indexBuffer = dd.createIndexBuffer(Rd);
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
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = Od, this.engine.stencilState.stencilTest = md, this.engine.enableEffect(dd.drawWrapper), this.bindBuffers(dd.effect), dd.onApplyObservable.notifyObservers({})
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
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!dd.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const md = null === Od ? null : this._isRenderTargetTexture(Od) ? Od.renderTarget : Od;
        md && this.engine.bindFramebuffer(md), this.applyEffectWrapper(dd), this.draw(), md && this.engine.unBindFramebuffer(md), this.restoreStates()
      }
      dispose() {
        const dd = this._vertexBuffers[Wd.j.PositionKind];
        dd && (dd.dispose(), delete this._vertexBuffers[Wd.j.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.eq.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class Qd {
      static RegisterShaderCodeProcessing(dd, Od) {
        Od ? Qd._CustomShaderCodeProcessing[dd ?? ""] = Od : delete Qd._CustomShaderCodeProcessing[dd ?? ""]
      }
      static _GetShaderCodeProcessing(dd) {
        return Qd._CustomShaderCodeProcessing[dd] ?? Qd._CustomShaderCodeProcessing[""]
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
        this.alphaMode = 0, this.onEffectCreatedObservable = new Rd.c(void 0, !0), this.onApplyObservable = new Rd.c, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
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
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.eq.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new Kd.b(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const Od = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, Od, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Wd = arguments.length > 2 ? arguments[2] : void 0,
          Fd = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, Fd && this._importPromises.push(...Fd);
        const Rd = this.options.engine.isWebGPU && !Qd.ForceGLSL;
        this._gatherImports(Rd, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(Rd && this._webGPUReady ? md.e(682).then((() => md(64897))) : md.e(672).then((() => md(64783)))), void 0 !== Wd && Wd(Rd, this._importPromises), Rd && this._webGPUReady && (this.options.shaderLanguage = 1), dd || this.updateEffect(Od)
      }
      updateEffect() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Wd = arguments.length > 3 ? arguments[3] : void 0,
          Fd = arguments.length > 4 ? arguments[4] : void 0,
          Rd = arguments.length > 5 ? arguments[5] : void 0,
          Kd = arguments.length > 6 ? arguments[6] : void 0,
          hd = arguments.length > 7 ? arguments[7] : void 0;
        const vd = Qd._GetShaderCodeProcessing(this.name);
        if (vd?.defineCustomBindings) {
          const Wd = Od?.slice() ?? [];
          Wd.push(...this.options.uniforms);
          const Fd = md?.slice() ?? [];
          Fd.push(...this.options.samplers), dd = vd.defineCustomBindings(this.name, dd, Wd, Fd), Od = Wd, md = Fd
        }
        this.options.defines = dd || "";
        const td = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let od;
        od = this.options.extraInitializationsAsync ? async () => {
          await (td?.()), await this.options.extraInitializationsAsync()
        }: td, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: Kd ?? this._shaderPath.vertex,
          fragment: hd ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: Od || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: md || this.options.samplers,
          defines: null !== dd ? dd : "",
          fallbacks: null,
          onCompiled: Fd ?? this.options.onCompiled,
          onError: Rd ?? null,
          indexParameters: Wd || this.options.indexParameters,
          processCodeAfterIncludes: vd?.processCodeAfterIncludes ? (dd, Od) => vd.processCodeAfterIncludes(this.name, dd, Od) : null,
          processFinalCode: vd?.processFinalCode ? (dd, Od) => vd.processFinalCode(this.name, dd, Od) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: od
        }, this.options.engine) : this._drawWrapper.effect = new Xd.e(this._shaderPath, this.options.attributeNames, Od || this.options.uniforms, md || this.options.samplerNames, this.options.engine, dd, void 0, Fd || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, od), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !dd && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), Qd._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.Iq().eq.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    Qd.ForceGLSL = !1, Qd._CustomShaderCodeProcessing = {}
  },
  54245: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      Dispose: () => Td,
      DumpData: () => bd,
      DumpDataAsync: () => yd,
      DumpFramebuffer: () => Hd,
      DumpTools: () => pd,
      EncodeImageAsync: () => qd,
      RegisterDumpTools: () => gd
    });
    var Wd = md(41922),
      Fd = md(54221),
      Rd = md(42029),
      Xd = md(38663),
      Kd = md(38651),
      hd = md(40262),
      vd = md(41983),
      Qd = md(41931);
    let td = null;
    async function od() {
      return td || (td = async function() {
        const dd = Kd.e.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        dd instanceof OffscreenCanvas && hd.c.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: Od
        } = await Promise.resolve().then((() => md(41777)));
        if (!Od.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const Wd = new Od(dd, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        Kd.e.Instances.pop(), Kd.e.OnEnginesDisposedObservable.add((dd => {
          Wd && dd !== Wd && !Wd.yJ && 0 === Kd.e.Instances.length && Td()
        })), Wd.getCaps().parallelShaderCompile = void 0;
        const Rd = new Fd.d(Wd),
          {
            passPixelShader: Xd
          } = await md.e(690).then((() => md(64946))),
          vd = new Fd.g({
            engine: Wd,
            name: Xd.name,
            fragmentShader: Xd.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: dd,
          dumpEngine: {
            engine: Wd,
            renderer: Rd,
            wrapper: vd
          }
        }
      }()), await td
    }
    let Nd = (() => {
      var dd;
      let Od, md = [];
      return dd = class {
        static async EncodeImageAsync(dd, Od, md, Wd, Fd, Xd) {
          const Kd = await od(),
            hd = Kd.dumpEngine;
          hd.engine.setSize(Od, md, !0);
          const vd = hd.engine.createRawTexture(dd, Od, md, 5, !1, !Fd, 1);
          return hd.renderer.setViewport(), hd.renderer.applyEffectWrapper(hd.wrapper), hd.wrapper.effect._bindTexture("textureSampler", vd), hd.renderer.draw(), vd.dispose(), await new Promise(((dd, Od) => {
            Rd.g.ToBlob(Kd.canvas, (md => {
              md ? dd(md) : Od(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), Wd, Xd)
          }))
        }
      }, (() => {
        const Fd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Od = [Qd.j], (0, Wd.h)(dd, null, Od, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: dd => "EncodeImageAsync" in dd,
            get: dd => dd.EncodeImageAsync
          },
          metadata: Fd
        }, null, md), Fd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Fd
        }), (0, Wd.k)(dd, md)
      })(), dd
    })();
    const qd = Nd.EncodeImageAsync;
    async function Hd(dd, Od, md, Wd) {
      let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Rd = arguments.length > 5 ? arguments[5] : void 0,
        Xd = arguments.length > 6 ? arguments[6] : void 0;
      const Kd = await md.readPixels(0, 0, dd, Od);
      bd(dd, Od, new Uint8Array(Kd.buffer), Wd, Fd, Rd, !0, void 0, Xd)
    }
    async function yd(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Fd = arguments.length > 4 ? arguments[4] : void 0,
        Kd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Qd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        td = arguments.length > 7 ? arguments[7] : void 0;
      if (md instanceof Float32Array) {
        const dd = new Uint8Array(md.length);
        let Od = md.length;
        for (; Od--;) {
          const Wd = md[Od];
          dd[Od] = Math.round(255 * (0, Xd.Clamp)(Wd))
        }
        md = dd
      }
      const od = await Nd.EncodeImageAsync(md, dd, Od, Wd, Kd, td);
      void 0 !== Fd && Rd.g.DownloadBlob(od, Fd), od.type !== Wd && hd.c.Warn(`DumpData: The requested mimeType '${Wd}' is not supported. The result has mimeType '${od.type}' instead.`);
      const qd = await od.arrayBuffer();
      return Qd ? qd : `data:${Wd};base64,${(0,vd.h)(qd)}`
    }

    function bd(dd, Od, md, Wd) {
      let Fd = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== Fd || Wd || (Fd = ""), yd(dd, Od, md, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", Fd, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((dd => {
        Wd && Wd(dd)
      }))
    }

    function Td() {
      td && (td?.then((dd => {
        dd.canvas instanceof HTMLCanvasElement && dd.canvas.remove(), dd.dumpEngine && (dd.dumpEngine.engine.dispose(), dd.dumpEngine.renderer.dispose(), dd.dumpEngine.wrapper.dispose())
      })), td = null)
    }
    const pd = {
      DumpData: bd,
      DumpDataAsync: yd,
      DumpFramebuffer: Hd,
      Dispose: Td
    };
    let Yd = !1;

    function gd() {
      if (Yd) return;
      Yd = !0;
      Rd.g.DumpData = bd, Rd.g.DumpDataAsync = yd, Rd.g.DumpFramebuffer = Hd
    }
  },
  54229: (dd, Od, md) => {
    md.d(Od, {
      e: () => Nd,
      h: () => qd,
      l: () => Hd
    });
    var Wd = md(42412),
      Fd = md(54235),
      Rd = md(41922),
      Xd = md(54217),
      Kd = md(41948),
      hd = md(54237),
      vd = md(41931);
    class Qd extends Xd.c {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(dd, Od) {
        let md = arguments.length > 4 ? arguments[4] : void 0;
        const Wd = {
          size: "number" === typeof Od ? Od : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: md,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...Od
        };
        super(dd, hd.e.FragmentUrl, {
          effectWrapper: "number" !== typeof Od && Od.effectWrapper ? void 0 : new hd.e(dd, md, Wd),
          ...Wd
        })
      }
      static _Parse(dd, Od, md, Wd) {
        return Kd.b.Parse((() => new Qd(dd.name, dd.options, Od, dd.renderTargetSamplingMode, dd._engine, dd.reusable)), dd, md, Wd)
      }
    }(() => {
      var dd;
      let Od, md = Xd.c,
        Wd = [];
      dd = class extends md {
        get face() {
          return this._effectWrapper.face
        }
        set face(dd) {
          this._effectWrapper.face = dd
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(dd, Od) {
          let md = arguments.length > 4 ? arguments[4] : void 0;
          const Fd = {
            size: "number" === typeof Od ? Od : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: md,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...Od
          };
          super(dd, hd.e.FragmentUrl, {
            effectWrapper: "number" !== typeof Od && Od.effectWrapper ? void 0 : new hd.d(dd, md, Fd),
            ...Fd
          }), (0, Rd.k)(this, Wd)
        }
        static _Parse(Od, md, Wd, Fd) {
          return Kd.b.Parse((() => new dd(Od.name, Od.options, md, Od.renderTargetSamplingMode, Od._engine, Od.reusable)), Od, Wd, Fd)
        }
      }, (() => {
        const Fd = "function" === typeof Symbol && Symbol.metadata ? Object.create(md[Symbol.metadata] ?? null) : void 0;
        Od = [(0, vd.E)()], (0, Rd.h)(dd, null, Od, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: dd => "face" in dd,
            get: dd => dd.face
          },
          metadata: Fd
        }, null, Wd), Fd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Fd
        })
      })()
    })();
    var td = md(38663),
      od = md(41997);

    function Nd(dd, Od, md, Wd, Fd, Rd, Kd, hd) {
      const vd = Od.Iq();
      return Od.isReady = !1, Fd = Fd ?? Od.samplingMode, Wd = Wd ?? Od.type, Rd = Rd ?? Od.format, Kd = Kd ?? Od.width, hd = hd ?? Od.height, -1 === Wd && (Wd = 0), new Promise((Qd => {
        const td = new Xd.c("postprocess", dd, null, null, 1, null, Fd, vd, !1, void 0, Wd, void 0, null, !1, Rd);
        td.externalTextureSamplerBinding = !0;
        const od = vd.createRenderTargetTexture({
          width: Kd,
          height: hd
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: Fd,
          type: Wd,
          format: Rd
        });
        td.onEffectCreatedObservable.addOnce((dd => {
          dd.executeWhenCompiled((() => {
            td.onApply = dd => {
              dd._bindTexture("textureSampler", Od), dd.setFloat2("scale", 1, 1)
            }, md.postProcessManager.directRender([td], od, !0), vd.restoreDefaultFramebuffer(), vd._releaseTexture(Od), td && td.dispose(), od._swapAndDie(Od), Od.type = Wd, Od.format = 5, Od.isReady = !0, Qd(Od)
          }))
        }))
      }))
    }
    async function qd(dd, Od, Rd) {
      let Kd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        hd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        vd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Qd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(dd) {
        if (dd.isReady()) return;
        if (dd.loadingError) throw new Error(dd.errorObject?.message || `Texture ${dd.name} errored while loading.`);
        const Od = dd.onLoadObservable;
        if (Od) return await new Promise((dd => Od.addOnce((() => dd()))));
        const md = dd._texture?.onLoadedObservable;
        if (md) return await new Promise((dd => md.addOnce((() => dd()))));
        throw new Error(`Cannot determine readiness of texture ${dd.name}.`)
      }(dd);
      const od = dd.getInternalTexture(),
        Nd = dd.is3D || !!od?.is3D,
        {
          width: qd,
          height: Hd
        } = dd.getSize(),
        yd = Od ?? qd,
        bd = Rd ?? Hd;
      if (vd || Nd || function(dd) {
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
        }(dd.textureFormat) || yd !== qd || bd !== Hd) {
        if (dd.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${vd?"RTT":"compression"} is not supported.`);
        return await async function(dd, Od, Rd, Kd, hd) {
          let vd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const Qd = dd.zV(),
            td = Qd.Iq(),
            od = dd.getInternalTexture(),
            Nd = dd.is3D || !!od?.is3D;
          let qd;
          if (td.isWebGPU ? Nd ? await md.e(686).then((() => md(64923))) : dd.isCube ? await md.e(687).then((() => md(64929))) : await md.e(688).then((() => md(64934))) : Nd ? await md.e(683).then((() => md(64912))) : dd.isCube ? await md.e(684).then((() => md(64917))) : await md.e(685).then((() => md(64921))), Nd) qd = new Xd.c("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: Wd.f.NEAREST_NEAREST_MIPNEAREST,
            engine: td,
            shaderLanguage: td.isWebGPU ? 1 : 0
          });
          else if (dd.isCube) {
            const dd = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            qd = new Xd.c("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: Wd.f.NEAREST_NEAREST_MIPNEAREST,
              engine: td,
              defines: dd[Kd],
              shaderLanguage: td.isWebGPU ? 1 : 0
            })
          } else qd = new Xd.c("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: Wd.f.NEAREST_NEAREST_MIPNEAREST,
            engine: td,
            shaderLanguage: td.isWebGPU ? 1 : 0
          });
          await new Promise((dd => {
            qd.onEffectCreatedObservable.addOnce((Od => {
              Od.executeWhenCompiled((() => {
                dd(0)
              }))
            }))
          }));
          const Hd = new Fd.b("temp", {
            width: Od,
            height: Rd
          }, Qd, !1);
          qd.onApply = function(Od) {
            Od.setTexture("textureSampler", dd), Od.setFloat("lod", hd), Od.setInt("gamma", dd.gammaSpace ? 1 : 0), Nd && Od.setFloat("slice", vd)
          };
          try {
            if (Hd.renderTarget && od) {
              const md = od.samplingMode;
              0 !== hd ? dd.updateSamplingMode(Wd.f.NEAREST_NEAREST_MIPNEAREST) : dd.updateSamplingMode(Wd.f.NEAREST_NEAREST), Qd.postProcessManager.directRender([qd], Hd.renderTarget, !0), dd.updateSamplingMode(md);
              const Fd = await td.readPixels(0, 0, Od, Rd),
                Xd = new Uint8Array(Fd.buffer, Fd.byteOffset, Fd.byteLength);
              return td.unBindFramebuffer(Hd.renderTarget), Xd
            }
            throw Error("Render to texture failed.")
          } finally {
            Hd.dispose(), qd.dispose()
          }
        }(dd, yd, bd, Kd, hd, Qd)
      }
      let Td = await dd.readPixels(Kd, hd);
      if (!Td) throw new Error(`Failed to read pixels from texture ${dd.name}.`);
      if (Td instanceof Float32Array) {
        const dd = new Uint8Array(Td.length);
        let Od = Td.length;
        for (; Od--;) {
          const md = Td[Od];
          dd[Od] = Math.round(255 * (0, td.Clamp)(md))
        }
        Td = dd
      }
      const pd = yd * bd,
        Yd = 4 * pd;
      if (Td.length !== Yd) {
        const dd = 0 === pd ? 0 : Td.length / pd;
        if (1 === dd || 2 === dd || 3 === dd) {
          const Od = new Uint8Array(Yd);
          for (let md = 0, Wd = 0, Fd = 0; md < pd; md++, Fd += 4) {
            const md = Td[Wd++];
            if (1 === dd) {
              Od[Fd] = md, Od[Fd + 1] = md, Od[Fd + 2] = md, Od[Fd + 3] = 255;
              continue
            }
            const Rd = Td[Wd++];
            2 !== dd ? (Od[Fd] = md, Od[Fd + 1] = Rd, Od[Fd + 2] = Td[Wd++], Od[Fd + 3] = 255) : (Od[Fd] = md, Od[Fd + 1] = Rd, Od[Fd + 2] = 0, Od[Fd + 3] = 255)
          }
          return Od
        }
      }
      return Td
    }
    const Hd = {
      CreateResizedCopy: function(dd, Od, md) {
        let Rd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Xd = dd.zV(),
          Kd = Xd.Iq(),
          hd = new Fd.b("resized" + dd.name, {
            width: Od,
            height: md
          }, Xd, !dd.noMipmap, !0, dd._texture.type, !1, dd.samplingMode, !1);
        hd.wrapU = dd.wrapU, hd.wrapV = dd.wrapV, hd.uOffset = dd.uOffset, hd.vOffset = dd.vOffset, hd.uScale = dd.uScale, hd.vScale = dd.vScale, hd.uAng = dd.uAng, hd.vAng = dd.vAng, hd.wAng = dd.wAng, hd.coordinatesIndex = dd.coordinatesIndex, hd.level = dd.level, hd.anisotropicFilteringLevel = dd.anisotropicFilteringLevel, hd._texture.isReady = !1, dd.wrapU = Wd.f.CLAMP_ADDRESSMODE, dd.wrapV = Wd.f.CLAMP_ADDRESSMODE;
        const vd = new Qd("pass", 1, null, Rd ? Wd.f.BILINEAR_SAMPLINGMODE : Wd.f.NEAREST_SAMPLINGMODE, Kd, !1, 0);
        return vd.externalTextureSamplerBinding = !0, vd.onEffectCreatedObservable.addOnce((Od => {
          Od.executeWhenCompiled((() => {
            vd.onApply = function(Od) {
              Od.setTexture("textureSampler", dd)
            };
            const Od = hd.renderTarget;
            Od && (Xd.postProcessManager.directRender([vd], Od), Kd.unBindFramebuffer(Od), hd.disposeFramebufferObjects(), vd.dispose(), hd.getInternalTexture().isReady = !0)
          }))
        })), hd
      },
      ApplyPostProcess: Nd,
      ToHalfFloat: od.g,
      FromHalfFloat: od.b,
      GetTextureDataAsync: qd
    }
  },
  54217: (dd, Od, md) => {
    md.d(Od, {
      c: () => qd
    });
    var Wd = md(41922),
      Fd = md(42041),
      Rd = md(38660),
      Xd = md(38636),
      Kd = md(41782),
      hd = md(41931),
      vd = md(41948),
      Qd = md(38669),
      td = md(41838),
      od = md(41859),
      Nd = md(54221);
    let qd = (() => {
        var dd;
        let Od, Kd, td, qd, Hd, bd, Td, pd, Yd, gd, wd, Ed, Jd, Ud, xd, Bd, Sd = [],
          sd = [],
          ud = [],
          Vd = [],
          Ad = [],
          rd = [],
          Gd = [],
          nd = [],
          Ld = [],
          Pd = [],
          zd = [],
          cd = [],
          jd = [],
          Dd = [],
          ed = [],
          Id = [],
          ld = [],
          Cd = [],
          Zd = [],
          kd = [],
          fd = [],
          Md = [],
          dO = [],
          OO = [],
          mO = [],
          WO = [],
          FO = [],
          RO = [],
          XO = [];
        return dd = class {
          static get ForceGLSL() {
            return Nd.g.ForceGLSL
          }
          static set ForceGLSL(dd) {
            Nd.g.ForceGLSL = dd
          }
          static RegisterShaderCodeProcessing(dd, Od) {
            Nd.g.RegisterShaderCodeProcessing(dd, Od)
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
            return this.f_
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.KOd(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(Od, md, Kd, hd, vd, Qd) {
            let td = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              od = arguments.length > 7 ? arguments[7] : void 0,
              qd = arguments.length > 8 ? arguments[8] : void 0,
              Hd = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              bd = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              Td = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              pd = arguments.length > 12 ? arguments[12] : void 0,
              Yd = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              gd = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              wd = arguments.length > 15 ? arguments[15] : void 0,
              Ed = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, Wd.k)(this, Sd), null), this.uniqueId = (0, Wd.k)(this, sd, void 0), this.width = ((0, Wd.k)(this, ud), (0, Wd.k)(this, Vd, -1)), this.height = ((0, Wd.k)(this, Ad), (0, Wd.k)(this, rd, -1)), this.nodeMaterialSource = ((0, Wd.k)(this, Gd), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, Wd.k)(this, nd, void 0), this.clearColor = ((0, Wd.k)(this, Ld), (0, Wd.k)(this, Pd, void 0)), this.autoClear = ((0, Wd.k)(this, zd), (0, Wd.k)(this, cd, !0)), this.forceAutoClearInAlphaMode = ((0, Wd.k)(this, jd), (0, Wd.k)(this, Dd, !1)), this.alphaConstants = ((0, Wd.k)(this, ed), (0, Wd.k)(this, Id, void 0)), this.animations = ((0, Wd.k)(this, ld), []), this.enablePixelPerfectMode = (0, Wd.k)(this, Cd, !1), this.forceFullscreenViewport = ((0, Wd.k)(this, Zd), (0, Wd.k)(this, kd, !0)), this.inspectableCustomProperties = (0, Wd.k)(this, fd), this.scaleMode = (0, Wd.k)(this, Md, 1), this.alwaysForcePOT = ((0, Wd.k)(this, dO), (0, Wd.k)(this, OO, !1)), this._samples = ((0, Wd.k)(this, mO), (0, Wd.k)(this, WO, 1)), this.adaptScaleToCurrentViewport = ((0, Wd.k)(this, FO), (0, Wd.k)(this, RO, !1)), this.doNotSerialize = ((0, Wd.k)(this, XO), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new Fd.e(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new Xd.i(1, 1), this._texelSize = Xd.i.Zero(), this.onActivateObservable = new Rd.c, this.onSizeChangedObservable = new Rd.c, this.onApplyObservable = new Rd.c, this.onBeforeRenderObservable = new Rd.c, this.onAfterRenderObservable = new Rd.c, this.cV = new Rd.c, yd();
            let Jd, Ud = 1,
              xd = null;
            if (Kd && !Array.isArray(Kd)) {
              const dd = Kd;
              Kd = dd.uniforms ?? null, hd = dd.samplers ?? null, Ud = dd.size ?? 1, Qd = dd.camera ?? null, td = dd.samplingMode ?? 1, od = dd.engine, qd = dd.reusable, Hd = Array.isArray(dd.defines) ? dd.defines.join("\n") : dd.defines ?? null, bd = dd.textureType ?? 0, Td = dd.vertexUrl ?? "postprocess", pd = dd.indexParameters, Yd = dd.blockCompilation ?? !1, gd = dd.textureFormat ?? 5, wd = dd.shaderLanguage ?? 0, xd = dd.uniformBuffers ?? null, Ed = dd.extraInitializations, Jd = dd.effectWrapper
            } else vd && (Ud = "number" === typeof vd ? vd : {
              width: vd.width,
              height: vd.height
            });
            if (this._useExistingThinPostProcess = !!Jd, this._effectWrapper = Jd ?? new Nd.g({
                name: Od,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: md,
                engine: od || Qd?.zV().Iq(),
                uniforms: Kd,
                samplers: hd,
                uniformBuffers: xd,
                defines: Hd,
                vertexUrl: Td,
                indexParameters: pd,
                blockCompilation: !0,
                shaderLanguage: wd,
                extraInitializations: void 0
              }), this.name = Od, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != Qd ? (this.f_ = Qd, this._scene = Qd.zV(), Qd.attachPostProcess(this), this._engine = this._scene.Iq(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : od && (this._engine = od, this._engine.postProcesses.push(this)), this._options = Ud, this.renderTargetSamplingMode = td || 1, this._reusable = qd || !1, this._textureType = bd, this._textureFormat = gd, this._shaderLanguage = wd || 0, this._samplers = hd || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = md, this._vertexUrl = Td, this._parameters = Kd || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = xd || [], this._indexParameters = pd, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const Od = [];
              this._gatherImports(this._engine.isWebGPU && !dd.ForceGLSL, Od), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(Yd, Hd, Ed, Od)
            }
          }
          _gatherImports() {
            let dd = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? dd.push(Promise.all([md.e(682).then((() => md(64897)))])) : dd.push(Promise.all([md.e(672).then((() => md(64783)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          Iq() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(dd) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = dd, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new Fd.e(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Wd = arguments.length > 3 ? arguments[3] : void 0,
              Fd = arguments.length > 4 ? arguments[4] : void 0,
              Rd = arguments.length > 5 ? arguments[5] : void 0,
              Xd = arguments.length > 6 ? arguments[6] : void 0,
              Kd = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(dd, Od, md, Wd, Fd, Rd, Xd, Kd), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(dd, Od) {
            let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let Fd = 0; Fd < this._textureCache.length; Fd++)
              if (this._textureCache[Fd].texture.width === dd.width && this._textureCache[Fd].texture.height === dd.height && this._textureCache[Fd].postProcessChannel === md && this._textureCache[Fd].texture._generateDepthBuffer === Od.generateDepthBuffer && this._textureCache[Fd].texture.samples === Od.samples) return this._textureCache[Fd].texture;
            const Wd = this._engine.createRenderTargetTexture(dd, Od);
            return this._textureCache.push({
              texture: Wd,
              postProcessChannel: md,
              lastUsedRenderId: -1
            }), Wd
          }
          _flushTextureCache() {
            const dd = this._renderId;
            for (let Od = this._textureCache.length - 1; Od >= 0; Od--)
              if (dd - this._textureCache[Od].lastUsedRenderId > 100) {
                let dd = !1;
                for (let md = 0; md < this._textures.length; md++)
                  if (this._textures.data[md] === this._textureCache[Od].texture) {
                    dd = !0;
                    break
                  } dd || (this._textureCache[Od].texture.dispose(), this._textureCache.splice(Od, 1))
              }
          }
          resize(dd, Od) {
            let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Fd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = dd, this.height = Od;
            let Rd = null;
            if (md)
              for (let hd = 0; hd < md._postProcesses.length; hd++)
                if (null !== md._postProcesses[hd]) {
                  Rd = md._postProcesses[hd];
                  break
                } const Xd = {
                width: this.width,
                height: this.height
              },
              Kd = {
                generateMipMaps: Wd,
                generateDepthBuffer: Fd || Rd === this,
                generateStencilBuffer: (Fd || Rd === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(Xd, Kd, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(Xd, Kd, 1)), this._texelSize.KOd(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let dd;
            if (this._shareOutputWithPostProcess) dd = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) dd = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let Od;
              dd = this.inputTexture;
              for (let md = 0; md < this._textureCache.length; md++)
                if (this._textureCache[md].texture === dd) {
                  Od = this._textureCache[md];
                  break
                } Od && (Od.lastUsedRenderId = this._renderId)
            }
            return dd
          }
          activate(dd) {
            let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              md = arguments.length > 2 ? arguments[2] : void 0;
            const Wd = null === dd || void 0 !== dd.cameraRigMode ? dd || this.f_ : null,
              Fd = Wd?.zV() ?? dd,
              Rd = Fd.Iq(),
              Xd = Rd.getCaps().maxTextureSize,
              Kd = (Od ? Od.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              hd = (Od ? Od.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let vd = this._options.width || Kd,
              Qd = this._options.height || hd;
            const td = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let Nd = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const dd = Rd.currentViewport;
                dd && (vd *= dd.width, Qd *= dd.height)
              }(td || this.alwaysForcePOT) && (this._options.width || (vd = Rd.needPOTTextures ? (0, od.f)(vd, Xd, this.scaleMode) : vd), this._options.height || (Qd = Rd.needPOTTextures ? (0, od.f)(Qd, Xd, this.scaleMode) : Qd)), this.width === vd && this.height === Qd && (Nd = this._getTarget()) || this.resize(vd, Qd, Wd, td, md), this._textures.forEach((dd => {
                dd.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(dd, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return Nd || (Nd = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.KOd(Kd / vd, hd / Qd), this._engine.bindFramebuffer(Nd, 0, Kd, hd, this.forceFullscreenViewport)) : (this._scaleRatio.KOd(1, 1), this._engine.bindFramebuffer(Nd, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(Wd), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : Fd.clearColor, Fd._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), Nd
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
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.Iq().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), dd = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", dd?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
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
            let Od;
            if (dd = dd || this.f_, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (Od = this._parentContainer.postProcesses.indexOf(this), Od > -1 && this._parentContainer.postProcesses.splice(Od, 1), this._parentContainer = null), Od = this._engine.postProcesses.indexOf(this), -1 !== Od && this._engine.postProcesses.splice(Od, 1), this.cV.notifyObservers(), dd) {
              if (dd.detachPostProcess(this), Od = dd._postProcesses.indexOf(this), 0 === Od && dd._postProcesses.length > 0) {
                const dd = this.f_._getFirstPostProcess();
                dd && dd.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const dd = vd.b.Serialize(this),
              Od = this.getCamera() || this._scene && this._scene.activeCamera;
            return dd.customType = "BABYLON." + this.getClassName(), dd.cameraId = Od ? Od.id : null, dd.reusable = this._reusable, dd.textureType = this._textureType, dd.fragmentUrl = this._fragmentUrl, dd.parameters = this._parameters, dd.samplers = this._samplers, dd.uniformBuffers = this._uniformBuffers, dd.options = this._options, dd.defines = this._postProcessDefines, dd.textureFormat = this._textureFormat, dd.vertexUrl = this._vertexUrl, dd.indexParameters = this._indexParameters, dd
          }
          clone() {
            const Od = this.serialize();
            Od._engine = this._engine, Od.cameraId = null;
            const md = dd.Parse(Od, this._scene, "");
            return md ? (md.onActivateObservable = this.onActivateObservable.clone(), md.onSizeChangedObservable = this.onSizeChangedObservable.clone(), md.onApplyObservable = this.onApplyObservable.clone(), md.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), md.onAfterRenderObservable = this.onAfterRenderObservable.clone(), md._prePassEffectConfiguration = this._prePassEffectConfiguration, md) : null
          }
          static Parse(dd, Od, md) {
            const Wd = (0, Qd.c)(dd.customType);
            if (!Wd || !Wd._Parse) return null;
            const Fd = Od ? Od.getCameraById(dd.cameraId) : null;
            return Wd._Parse(dd, Fd, Od, md)
          }
          static _Parse(Od, md, Wd, Fd) {
            return vd.b.Parse((() => new dd(Od.name, Od.fragmentUrl, Od.parameters, Od.samplers, Od.options, md, Od.renderTargetSamplingMode, Od._engine, Od.reusable, Od.defines, Od.textureType, Od.vertexUrl, Od.indexParameters, !1, Od.textureFormat)), Od, Wd, Fd)
          }
        }, (() => {
          const md = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Od = [(0, hd.E)()], Kd = [(0, hd.E)()], td = [(0, hd.E)()], qd = [(0, hd.E)()], Hd = [(0, hd.E)()], bd = [(0, hd.n)()], Td = [(0, hd.E)()], pd = [(0, hd.E)()], Yd = [(0, hd.E)()], gd = [(0, hd.E)()], wd = [(0, hd.E)()], Ed = [(0, hd.E)()], Jd = [(0, hd.E)()], Ud = [(0, hd.E)()], xd = [(0, hd.E)("samples")], Bd = [(0, hd.E)()], (0, Wd.h)(dd, null, Kd, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: dd => "name" in dd,
              get: dd => dd.name
            },
            metadata: md
          }, null, Sd), (0, Wd.h)(dd, null, Yd, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: dd => "alphaMode" in dd,
              get: dd => dd.alphaMode
            },
            metadata: md
          }, null, Sd), (0, Wd.h)(null, null, Od, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: dd => "uniqueId" in dd,
              get: dd => dd.uniqueId,
              set: (dd, Od) => {
                dd.uniqueId = Od
              }
            },
            metadata: md
          }, sd, ud), (0, Wd.h)(null, null, td, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: dd => "width" in dd,
              get: dd => dd.width,
              set: (dd, Od) => {
                dd.width = Od
              }
            },
            metadata: md
          }, Vd, Ad), (0, Wd.h)(null, null, qd, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: dd => "height" in dd,
              get: dd => dd.height,
              set: (dd, Od) => {
                dd.height = Od
              }
            },
            metadata: md
          }, rd, Gd), (0, Wd.h)(null, null, Hd, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: dd => "renderTargetSamplingMode" in dd,
              get: dd => dd.renderTargetSamplingMode,
              set: (dd, Od) => {
                dd.renderTargetSamplingMode = Od
              }
            },
            metadata: md
          }, nd, Ld), (0, Wd.h)(null, null, bd, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: dd => "clearColor" in dd,
              get: dd => dd.clearColor,
              set: (dd, Od) => {
                dd.clearColor = Od
              }
            },
            metadata: md
          }, Pd, zd), (0, Wd.h)(null, null, Td, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: dd => "autoClear" in dd,
              get: dd => dd.autoClear,
              set: (dd, Od) => {
                dd.autoClear = Od
              }
            },
            metadata: md
          }, cd, jd), (0, Wd.h)(null, null, pd, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: dd => "forceAutoClearInAlphaMode" in dd,
              get: dd => dd.forceAutoClearInAlphaMode,
              set: (dd, Od) => {
                dd.forceAutoClearInAlphaMode = Od
              }
            },
            metadata: md
          }, Dd, ed), (0, Wd.h)(null, null, gd, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: dd => "alphaConstants" in dd,
              get: dd => dd.alphaConstants,
              set: (dd, Od) => {
                dd.alphaConstants = Od
              }
            },
            metadata: md
          }, Id, ld), (0, Wd.h)(null, null, wd, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: dd => "enablePixelPerfectMode" in dd,
              get: dd => dd.enablePixelPerfectMode,
              set: (dd, Od) => {
                dd.enablePixelPerfectMode = Od
              }
            },
            metadata: md
          }, Cd, Zd), (0, Wd.h)(null, null, Ed, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: dd => "forceFullscreenViewport" in dd,
              get: dd => dd.forceFullscreenViewport,
              set: (dd, Od) => {
                dd.forceFullscreenViewport = Od
              }
            },
            metadata: md
          }, kd, fd), (0, Wd.h)(null, null, Jd, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: dd => "scaleMode" in dd,
              get: dd => dd.scaleMode,
              set: (dd, Od) => {
                dd.scaleMode = Od
              }
            },
            metadata: md
          }, Md, dO), (0, Wd.h)(null, null, Ud, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: dd => "alwaysForcePOT" in dd,
              get: dd => dd.alwaysForcePOT,
              set: (dd, Od) => {
                dd.alwaysForcePOT = Od
              }
            },
            metadata: md
          }, OO, mO), (0, Wd.h)(null, null, xd, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: dd => "_samples" in dd,
              get: dd => dd._samples,
              set: (dd, Od) => {
                dd._samples = Od
              }
            },
            metadata: md
          }, WO, FO), (0, Wd.h)(null, null, Bd, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: dd => "adaptScaleToCurrentViewport" in dd,
              get: dd => dd.adaptScaleToCurrentViewport,
              set: (dd, Od) => {
                dd.adaptScaleToCurrentViewport = Od
              }
            },
            metadata: md
          }, RO, XO), md && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: md
          })
        })(), dd
      })(),
      Hd = !1;

    function yd() {
      Hd || (Hd = !0, td.b.prototype.setTextureFromPostProcess = function(dd, Od, md) {
        let Wd = null;
        Od && (Od._forcedOutputTexture ? Wd = Od._forcedOutputTexture : Od._textures.data[Od._currentRenderTextureInd] && (Wd = Od._textures.data[Od._currentRenderTextureInd])), this._bindTexture(dd, Wd?.texture ?? null, md)
      }, td.b.prototype.setTextureFromPostProcessOutput = function(dd, Od, md) {
        this._bindTexture(dd, Od?._outputTexture?.texture ?? null, md)
      }, Kd.e.prototype.setTextureFromPostProcess = function(dd, Od) {
        this._engine.setTextureFromPostProcess(this._samplers[dd], Od, dd)
      }, Kd.e.prototype.setTextureFromPostProcessOutput = function(dd, Od) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[dd], Od, dd)
      }, (0, Qd.e)("BABYLON.PostProcess", qd))
    }
  },
  54237: (dd, Od, md) => {
    md.d(Od, {
      d: () => Xd,
      e: () => Rd
    });
    var Wd = md(54221),
      Fd = md(38651);
    class Rd extends Wd.g {
      _gatherImports(dd, Od) {
        dd ? (this._webGPUReady = !0, Od.push(Promise.all([md.e(689).then((() => md(64939)))]))) : Od.push(Promise.all([md.e(690).then((() => md(64946)))])), super._gatherImports(dd, Od)
      }
      constructor(dd) {
        let Od = arguments.length > 2 ? arguments[2] : void 0;
        const md = {
          name: dd,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Fd.e.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: Rd.FragmentUrl,
          ...Od
        };
        md.engine || (md.engine = Fd.e.LastCreatedEngine), super(md)
      }
    }
    Rd.FragmentUrl = "pass";
    class Xd extends Wd.g {
      _gatherImports(dd, Od) {
        dd ? (this._webGPUReady = !0, Od.push(Promise.all([md.e(691).then((() => md(64953)))]))) : Od.push(Promise.all([md.e(692).then((() => md(64960)))])), super._gatherImports(dd, Od)
      }
      constructor(dd) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: dd,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Fd.e.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: Xd.FragmentUrl,
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
    Xd.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);