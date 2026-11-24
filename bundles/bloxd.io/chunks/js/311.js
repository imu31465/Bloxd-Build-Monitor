export const id = 311;
export const ids = [311];
export const modules = {
  41834: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => jm
    });
    var hm = fm(37203),
      Am = fm(37185),
      am = fm(40585),
      xm = fm(40256),
      wm = fm(40052),
      Dm = fm(38766),
      im = fm(40235),
      Rm = fm(40264),
      pm = fm(37197),
      Em = fm(40008),
      om = fm(40220),
      Om = fm(40303);
    class Ym {
      get renderList() {
        return this._renderList
      }
      set renderList(mm) {
        this._renderList !== mm && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), mm && (this._unObserveRenderList = (0, pm.h)(mm, this._renderListHasChanged)), this._renderList = mm)
      }
      get disableImageProcessing() {
        return this._disableImageProcessing
      }
      set disableImageProcessing(mm) {
        mm !== this._disableImageProcessing && (this._disableImageProcessing = mm, this._scene.markAllMaterialsAsDirty(64))
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(mm) {
        this._disableDepthPrePass = mm, this._renderingManager.disableDepthPrePass = mm
      }
      get name() {
        return this._name
      }
      set name(mm) {
        if (this._name !== mm) {
          if (this._name = mm, this._sceneUBOs)
            for (let mm = 0; mm < this._sceneUBOs.length; ++mm) this._sceneUBOs[mm].name = `Scene ubo #${mm} for ${this.name}`;
          if (this._scene)
            for (let mm = 0; mm < this._renderPassIds.length; ++mm) {
              const Tm = this._renderPassIds[mm];
              this._engine._renderPassNames[Tm] = `${this._name}#${mm}`
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
      setMaterialForRendering(mm, Tm) {
        let fm;
        fm = Array.isArray(mm) ? mm : [mm];
        for (let hm = 0; hm < fm.length; ++hm)
          for (let mm = 0; mm < this.options.numPasses; ++mm) {
            let Am = fm[hm];
            fm[hm].pG && (Am = fm[hm].mAm), Am.setMaterialForRenderPass(this._renderPassIds[mm], void 0 !== Tm ? Array.isArray(Tm) ? Tm[mm] : Tm : void 0)
          }
      }
      _freezeActiveMeshes(mm) {
        this._freezeActiveMeshesCancel = (0, Em.f)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, mm)
            for (let mm = 0; mm < this._activeMeshes.length; mm++) this._activeMeshes.data[mm]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((mm, Tm) => {
          this._freezeActiveMeshesCancel = null, Tm ? (Dm.b.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), mm && Dm.b.Error(mm)) : (Dm.b.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), mm && (Dm.b.Error(mm), mm.stack && Dm.b.Error(mm.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let mm = 0; mm < this._activeMeshes.length; mm++) this._activeMeshes.data[mm]._unFreeze();
        this._isFrozen = !1
      }
      constructor(mm, Tm, fm) {
        this._unObserveRenderList = null, this._renderListHasChanged = (mm, Tm) => {
          const fm = this._renderList ? this._renderList.length : 0;
          if (0 === Tm && fm > 0 || 0 === fm)
            for (const hm of this._scene.meshes) hm._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new hm.c, this.onAfterRenderObservable = new hm.c, this.onBeforeRenderingManagerRenderObservable = new hm.c, this.onAfterRenderingManagerRenderObservable = new hm.c, this.onInitRenderingObservable = new hm.c, this.onFinishRenderingObservable = new hm.c, this.onFastPathRenderObservable = new hm.c, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new om.f(256), this._activeBoundingBoxes = new om.f(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = mm, this._scene = Tm, this._engine = this._scene.dO(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...fm
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new Rm.b(Tm), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const mm of this._scene.lights) mm.getTypeID() === Om.e.LIGHTTYPEID_CLUSTERED_CONTAINER && mm.isSupported && mm._updateBatches(this.activeCamera).render()
        })), this._scene.addObjectRenderer(this)
      }
      _releaseRenderPassId() {
        for (let mm = 0; mm < this.options.numPasses; ++mm) this._engine.releaseRenderPassId(this._renderPassIds[mm]);
        this._renderPassIds.length = 0
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let mm = 0; mm < this.options.numPasses; ++mm) this._renderPassIds[mm] = this._engine.createRenderPassId(`${this.name}#${mm}`)
      }
      _createSceneUBO(mm, Tm) {
        const fm = this._scene.dO(),
          hm = new im.e(fm, void 0, Tm, mm, void 0, !1);
        return hm.addUniform("viewProjection", 16), Tm && hm.addUniform("viewProjectionR", 16), hm.addUniform("view", 16), hm.addUniform("projection", 16), hm.addUniform("vEyePosition", 4), hm.addUniform("inverseProjection", 16), hm
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const mm = this._engine._currentRenderTarget,
          Tm = !(!mm || !mm.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const mm = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${mm} for ${this.name}`, Tm)), this._sceneUBOIsMultiview.push(Tm)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== Tm && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, Tm), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = Tm);
        const fm = this._sceneUBOs[this._currentSceneUBOIndex++];
        return fm.unbindEffect(), fm
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1
      }
      get refreshRate() {
        return this._refreshRate
      }
      set refreshRate(mm) {
        this._refreshRate = mm, this.resetRefreshCounter()
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1))
      }
      isReadyForRendering(mm, Tm) {
        this.prepareRenderList(), this.initRender(mm, Tm);
        const fm = this._checkReadiness();
        return this.finishRender(), fm
      }
      prepareRenderList() {
        const mm = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let Tm = 0; Tm < this._waitingRenderList.length; Tm++) {
              const fm = this._waitingRenderList[Tm],
                hm = mm.getMeshById(fm);
              hm && this.renderList.push(hm)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const mm = this._scene.meshes;
          for (let Tm = 0; Tm < mm.length; Tm++) {
            const fm = mm[Tm];
            this.renderListPredicate(fm) && this.renderList.push(fm)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(mm, Tm) {
        const fm = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), fm && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(fm.getViewMatrix(), fm.getProjectionMatrix(!0)), this._scene._activeCamera = fm, this._engine.setViewport(fm.rigParent ? fm.rigParent.viewport : fm.viewport, mm, Tm)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const mm = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (mm.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), mm._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== mm.activeCamera && mm.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), mm.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const fm = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[mm], this.onBeforeRenderObservable.notifyObservers(mm);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(mm);
        else {
          const Tm = this._prepareRenderingManager(mm),
            fm = this._scene.getOutlineRenderer?.(),
            hm = fm?.enabled;
          fm && (fm.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(mm), this._renderingManager.render(this.customRenderFunction, Tm, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(mm), fm && (fm.enabled = hm)
        }
        Tm || this.onAfterRenderObservable.notifyObservers(mm), this._engine.currentRenderPassId = fm
      }
      _checkReadiness() {
        const mm = this._scene,
          Tm = this._engine.currentRenderPassId;
        let fm = !0;
        mm.getViewMatrix() || mm.updateTransformMatrix();
        const hm = this.options.numPasses;
        for (let Am = 0; Am < hm && fm; Am++) {
          const Tm = this.renderList ? this.renderList : mm.frameGraph ? mm.meshes : mm.getActiveMeshes().data,
            am = this.renderList || mm.frameGraph ? Tm.length : mm.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[Am], this.onBeforeRenderObservable.notifyObservers(Am);
          let xm = null,
            wm = am;
          this.getCustomRenderList && (xm = this.getCustomRenderList(Am, Tm, am), xm && (wm = xm.length)), xm || (xm = Tm), this.options.doNotChangeAspectRatio || mm.updateTransformMatrix(!0);
          for (let mm = 0; mm < wm && fm; ++mm) {
            const Tm = xm[mm];
            if (!Tm.isEnabled() || Tm.isBlocked || !Tm.isVisible || !Tm.jK) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(Tm, this.refreshRate, !0)) {
                fm = !1;
                continue
              }
            } else if (!Tm.isReady(!0)) {
              fm = !1;
              continue
            }
            let hm = Tm._edgesRenderer,
              Am = Tm.hasThinInstances;
            if (Tm.pG) {
              const mm = Tm.mAm;
              mm.edgesShareWithInstances && mm._edgesRenderer?.isEnabled && (hm = mm._edgesRenderer, Am = !0)
            } else Tm.Fhm && Tm.edgesShareWithInstances && (Am = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && hm?.isEnabled && (hm.isReady(Am) || (fm = !1))
          }
          if (this.renderParticles && mm.particlesEnabled) {
            const Tm = this.particleSystemList || mm.VK;
            for (const mm of Tm) mm.isReady() || (fm = !1)
          }
          if (this.renderSprites && mm.spritesEnabled) {
            const Tm = this.spriteManagerList || mm.spriteManagers;
            if (Tm)
              for (const hm of Tm) mm.activeCamera && 0 === (hm.layerMask & mm.activeCamera.layerMask) || hm.isReady && !hm.isReady() && (fm = !1)
          }
          this.onAfterRenderObservable.notifyObservers(Am), hm > 1 && (mm.incrementRenderId(), mm.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = Tm, fm
      }
      _prepareRenderingManager() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const fm = this._scene;
        let hm, Am, am = null;
        const xm = this.renderList ? this.renderList : fm.frameGraph ? fm.meshes : fm.getActiveMeshes().data,
          wm = this.renderList || fm.frameGraph ? xm.length : fm.getActiveMeshes().length;
        if (this.getCustomRenderList && (am = this.getCustomRenderList(mm, xm, wm)), am) hm = am.length, Am = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !Tm && !this._engine.isWebGPU) return xm;
          this._defaultRenderListPrepared = !0, am = xm, hm = wm, Am = !this.renderList || this.forceLayerMaskCheck
        }
        const Dm = fm.activeCamera,
          im = this.cameraForLOD ?? Dm,
          Rm = fm.getBoundingBoxRenderer?.();
        if (fm._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && Rm) {
            Rm.reset();
            for (let mm = 0; mm < this._activeBoundingBoxes.length; mm++) {
              const Tm = this._activeBoundingBoxes.data[mm];
              Rm.renderList.push(Tm)
            }
          }
          return am
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), Rm && Rm.reset(), this.renderMeshes) {
          const mm = fm.getRenderId(),
            Tm = fm.getFrameId();
          for (let xm = 0; xm < hm; xm++) {
            const hm = am[xm];
            if (hm && !hm.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(hm, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!hm.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let am, xm;
              if (im) {
                const mm = hm._internalAbstractMeshDataInfo._currentLOD.get(im);
                mm && mm[1] === Tm ? am = mm[0] : (am = fm.customLODSelector ? fm.customLODSelector(hm, im) : hm.getLOD(im), mm ? (mm[0] = am, mm[1] = Tm) : hm._internalAbstractMeshDataInfo._currentLOD.set(im, [am, Tm]))
              } else am = hm;
              if (!am) continue;
              if (am !== hm && 0 !== am.billboardMode && am.computeWorldMatrix(), am._preActivateForIntermediateRendering(mm), xm = !(!Am || !Dm) && 0 === (hm.layerMask & Dm.layerMask), hm.isEnabled() && hm.isVisible && hm.jK && !xm) {
                if (this._activeMeshes.push(hm), am._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, am !== hm && am._activate(mm, !0), this.enableBoundingBoxRendering && Rm && Rm._preActiveMesh(hm), hm._activate(mm, !0) && hm.jK.length) {
                  hm.pG ? hm._internalAbstractMeshDataInfo._actAsRegularMesh && (am = hm) : am._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, am._internalAbstractMeshDataInfo._isActiveIntermediate = !0, fm._prepareSkeleton(am);
                  for (let mm = 0; mm < am.jK.length; mm++) {
                    const Tm = am.jK[mm];
                    this.enableBoundingBoxRendering && Rm && Rm._evaluateSubMesh(hm, Tm), this._renderingManager.dispatch(Tm, am)
                  }
                }
                hm._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && Rm && Tm)
          for (let pm = 0; pm < Rm.renderList.length; pm++) {
            const mm = Rm.renderList.data[pm];
            this._activeBoundingBoxes.push(mm)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const mm = this.particleSystemList || fm.VK;
          for (let Tm = 0; Tm < mm.length; Tm++) {
            const fm = mm[Tm],
              hm = fm.emitter;
            fm.isStarted() && hm && (!hm.position || hm.isEnabled()) && this._renderingManager.dispatchParticles(fm)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return am
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(mm, Tm, fm, hm)
      }
      setRenderingAutoClearDepthStencil(mm, Tm) {
        let fm = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          hm = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(mm, Tm, fm, hm), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const mm = new Ym(this.name, this._scene, this.options);
        return this.renderList && (mm.renderList = this.renderList.slice(0)), mm
      }
      dispose() {
        const mm = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          Tm = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let fm = 0; fm < Tm; fm++) {
          const Tm = mm[fm];
          Tm && void 0 !== Tm.getMaterialForRenderPass(this.renderPassId) && Tm.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const fm of this._sceneUBOs) fm.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === Ym.REFRESHRATE_RENDER_ONCE && (this.refreshRate = Ym.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    Ym.REFRESHRATE_RENDER_ONCE = 0, Ym.REFRESHRATE_RENDER_ONEVERYFRAME = 1, Ym.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var qm = fm(39993);
    class jm extends am.f {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate
      }
      set renderListPredicate(mm) {
        this._objectRenderer.renderListPredicate = mm
      }
      get renderList() {
        return this._objectRenderer.renderList
      }
      set renderList(mm) {
        this._objectRenderer.renderList = mm
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList
      }
      set particleSystemList(mm) {
        this._objectRenderer.particleSystemList = mm
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList
      }
      set getCustomRenderList(mm) {
        this._objectRenderer.getCustomRenderList = mm
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles
      }
      set renderParticles(mm) {
        this._objectRenderer.renderParticles = mm
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites
      }
      set renderSprites(mm) {
        this._objectRenderer.renderSprites = mm
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering
      }
      set enableBoundingBoxRendering(mm) {
        this._objectRenderer.enableBoundingBoxRendering = mm
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering
      }
      set enableOutlineRendering(mm) {
        this._objectRenderer.enableOutlineRendering = mm
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck
      }
      set forceLayerMaskCheck(mm) {
        this._objectRenderer.forceLayerMaskCheck = mm
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera
      }
      set activeCamera(mm) {
        this._objectRenderer.activeCamera = mm
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD
      }
      set cameraForLOD(mm) {
        this._objectRenderer.cameraForLOD = mm
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing
      }
      set disableImageProcessing(mm) {
        this._objectRenderer.disableImageProcessing = mm
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction
      }
      set customIsReadyFunction(mm) {
        this._objectRenderer.customIsReadyFunction = mm
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction
      }
      set customRenderFunction(mm) {
        this._objectRenderer.customRenderFunction = mm
      }
      get postProcesses() {
        return this._postProcesses
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled
      }
      set onAfterUnbind(mm) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(mm)
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable
      }
      set onBeforeRender(mm) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(mm)
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable
      }
      set onAfterRender(mm) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(mm)
      }
      set onClear(mm) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(mm)
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList
      }
      set _waitingRenderList(mm) {
        this._objectRenderer._waitingRenderList = mm
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
      setMaterialForRendering(mm, Tm) {
        this._objectRenderer.setMaterialForRendering(mm, Tm)
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
      set boundingBoxSize(mm) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(mm)) return;
        this._boundingBoxSize = mm;
        const Tm = this.wG();
        Tm && Tm.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(mm, Tm, fm) {
        let xm, wm, im = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Rm = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          pm = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Em = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          om = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : am.f.TRILINEAR_SAMPLINGMODE,
          Om = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          qm = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          jm = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          Vm = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          Im = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          Km = arguments.length > 13 ? arguments[13] : void 0,
          Qm = arguments.length > 14 ? arguments[14] : void 0,
          nm = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          Jm = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          cm = !0,
          zm = !1;
        if ("object" === typeof im) {
          const mm = im;
          im = !!mm.generateMipMaps, Rm = mm.doNotChangeAspectRatio ?? !0, pm = mm.type ?? 0, Em = !!mm.isCube, om = mm.samplingMode ?? am.f.TRILINEAR_SAMPLINGMODE, Om = mm.generateDepthBuffer ?? !0, qm = !!mm.generateStencilBuffer, jm = !!mm.isMulti, Vm = mm.format ?? 5, Im = !!mm.delayAllocation, Km = mm.samples, Qm = mm.creationFlags, nm = !!mm.noColorAttachment, Jm = !!mm.useSRGBBuffer, xm = mm.colorAttachment, cm = mm.gammaSpace ?? cm, wm = mm.existingObjectRenderer, zm = !!mm.enableClusteredLights
        }
        if (super(null, fm, !im, void 0, om, void 0, void 0, void 0, void 0, Vm), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new hm.c, this.onAfterUnbindObservable = new hm.c, this.onClearObservable = new hm.c, this.onResizeObservable = new hm.c, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = Am.p.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(fm = this.wG())) return;
        const Zm = this.wG().dO();
        this._gammaSpace = cm, this._coordinatesMode = am.f.PROJECTION_MODE, this.name = mm, this.isRenderTarget = !0, this._initialSizeParameter = Tm, this._dontDisposeObjectRenderer = !!wm, this._processSizeParameter(Tm), this._objectRenderer = wm ?? new Ym(mm, fm, {
          numPasses: Em ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: Rm,
          enableClusteredLights: zm
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const mm = this._scene;
          if (!this._disableEngineStages)
            for (const Tm of mm._beforeRenderTargetClearStage) Tm.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(Zm) : this.skipInitialClear || Zm.clear(this.clearColor ?? mm.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || mm.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const Tm of mm._beforeRenderTargetDrawStage) Tm.action(this, this._currentFaceIndex, this._currentLayer);
          Zm._debugPushGroup && Zm._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (Zm._debugPopGroup && Zm._debugPopGroup(), !this._disableEngineStages)
            for (const Tm of this._scene._afterRenderTargetDrawStage) Tm.action(this, this._currentFaceIndex, this._currentLayer);
          const mm = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const Tm of this._scene._afterRenderTargetPostProcessStage) Tm.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = mm), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), Zm) : Dm.b.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(Zm) : this.skipInitialClear || Zm.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = Zm.onResizeObservable.add((() => {})), this._generateMipMaps = !!im, this._doNotChangeAspectRatio = Rm, jm || (this._renderTargetOptions = {
          generateMipMaps: im,
          type: pm,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: Om,
          generateStencilBuffer: qm,
          samples: Km,
          creationFlags: Qm,
          noColorAttachment: nm,
          useSRGBBuffer: Jm,
          colorAttachment: xm,
          label: this.name
        }, this.samplingMode === am.f.NEAREST_SAMPLINGMODE && (this.wrapU = am.f.CLAMP_ADDRESSMODE, this.wrapV = am.f.CLAMP_ADDRESSMODE), Im || (Em ? (this._renderTarget = fm.dO().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = am.f.INVCUBIC_MODE, this._textureMatrix = Am.e.Identity()) : this._renderTarget = fm.dO().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== Km && (this.samples = Km)))
      }
      createDepthStencilTexture() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          am = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(mm, Tm, fm, hm, Am, am)
      }
      _processSizeParameter(mm) {
        if (mm.ratio) {
          this._sizeRatio = mm.ratio;
          const Tm = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(Tm.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(Tm.getRenderHeight(), this._sizeRatio)
          }
        } else this._size = mm
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples
      }
      set samples(mm) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(mm))
      }
      addPostProcess(mm) {
        if (!this._postProcessManager) {
          const mm = this.wG();
          if (!mm) return;
          this._postProcessManager = new xm.c(mm), this._postProcesses = new Array
        }
        this._postProcesses.push(mm), this._postProcesses[0].autoClear = !1
      }
      clearPostProcesses() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (mm)
            for (const mm of this._postProcesses) mm.dispose();
          this._postProcesses = []
        }
      }
      removePostProcess(mm) {
        if (!this._postProcesses) return;
        const Tm = this._postProcesses.indexOf(mm); - 1 !== Tm && (this._postProcesses.splice(Tm, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter()
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate
      }
      set refreshRate(mm) {
        this._objectRenderer.refreshRate = mm
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
        const mm = this._size.layers;
        if (mm) return mm;
        const Tm = this._size.depth;
        return Tm || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(mm) {
        const Tm = Math.max(1, this.getRenderSize() * mm);
        this.resize(Tm)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(mm) {
        const Tm = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const fm = this.wG();
        fm && (this._processSizeParameter(mm), this._renderTarget = Tm ? fm.dO().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : fm.dO().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(mm, Tm)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => fm(41846))).then((mm => this._dumpTools = mm))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const mm = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), mm
      }
      _render() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const fm = this.wG();
        if (!fm) return;
        void 0 !== this.useCameraPostProcesses && (mm = this.useCameraPostProcesses);
        const hm = fm.dO();
        if (hm._debugPushGroup && hm._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let Am = 0; Am < 6; Am++) this._renderToTarget(Am, mm, Tm), fm.incrementRenderId(), fm.resetCachedMaterial();
          else this._renderToTarget(0, mm, Tm);
        else
          for (let Am = 0; Am < this.getRenderLayers(); Am++) this._renderToTarget(0, mm, Tm, Am), fm.incrementRenderId(), fm.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), hm._debugPopGroup && hm._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(mm, Tm) {
        const fm = mm * Tm,
          hm = (0, wm.p)(fm + 16384 / (128 + fm));
        return Math.min((0, wm.d)(mm), hm)
      }
      _bindFrameBuffer() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const fm = this.wG();
        if (!fm) return;
        const hm = fm.dO();
        this._renderTarget && hm.bindFramebuffer(this._renderTarget, this.isCube ? mm : void 0, void 0, void 0, this.ignoreCameraViewport, 0, Tm)
      }
      _unbindFrameBuffer(mm, Tm) {
        this._renderTarget && mm.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(Tm)
        }))
      }
      _prepareFrame(mm, Tm, fm, hm) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(Tm, fm) : hm && mm.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(Tm, fm)
      }
      _renderToTarget(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Am = this.wG();
        if (!Am) return;
        const am = Am.dO();
        this._currentFaceIndex = mm, this._currentLayer = hm, this._currentUseCameraPostProcess = Tm, this._currentDumpForDebug = fm, this._prepareFrame(Am, mm, hm, Tm), this._objectRenderer.render(mm + hm, !0), this._unbindFrameBuffer(am, mm), this._texture && this.isCube && 5 === mm && am.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(mm, Tm, fm, hm)
      }
      setRenderingAutoClearDepthStencil(mm, Tm) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(mm, Tm)
      }
      clone() {
        const mm = this.getSize(),
          Tm = new jm(this.name, mm, this.wG(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return Tm.hasAlpha = this.hasAlpha, Tm.level = this.level, Tm.coordinatesMode = this.coordinatesMode, this.renderList && (Tm.renderList = this.renderList.slice(0)), Tm
      }
      serialize() {
        if (!this.name) return null;
        const mm = super.serialize();
        if (mm.renderTargetSize = this.getRenderSize(), mm.renderList = [], this.renderList)
          for (let Tm = 0; Tm < this.renderList.length; Tm++) mm.renderList.push(this.renderList[Tm].id);
        return mm
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.wG().dO().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const mm = this.wG();
        if (!mm) return;
        let Tm = mm.customRenderTargets.indexOf(this);
        Tm >= 0 && mm.customRenderTargets.splice(Tm, 1);
        for (const fm of mm.cameras) Tm = fm.customRenderTargets.indexOf(this), Tm >= 0 && fm.customRenderTargets.splice(Tm, 1);
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
    jm.REFRESHRATE_RENDER_ONCE = Ym.REFRESHRATE_RENDER_ONCE, jm.REFRESHRATE_RENDER_ONEVERYFRAME = Ym.REFRESHRATE_RENDER_ONEVERYFRAME, jm.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = Ym.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(jm.prototype, "noPrePassRenderer") || Object.defineProperty(jm.prototype, "noPrePassRenderer", (0, qm.e)("RenderTargetTexture", "noPrePassRenderer"))
  },
  41822: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => im,
      g: () => Rm
    });
    var hm = fm(40251),
      Am = fm(38151),
      am = fm(37203),
      xm = fm(39958),
      wm = fm(40423);
    const Dm = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class im {
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dm;
        this._fullscreenViewport = new Am.b(0, 0, 1, 1);
        const fm = Tm.positions ?? Dm.positions,
          am = Tm.indices ?? Dm.indices;
        this.engine = mm, this._vertexBuffers = {
          [hm.m.PositionKind]: new hm.m(mm, fm, hm.m.PositionKind, !1, !1, 2)
        }, this._indexBuffer = mm.createIndexBuffer(am), this._indexBufferLength = am.length, this._onContextRestoredObserver = mm.UO.add((() => {
          this._indexBuffer = mm.createIndexBuffer(am);
          for (const mm in this._vertexBuffers) {
            this._vertexBuffers[mm]._rebuild()
          }
        }))
      }
      setViewport() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.engine.setViewport(mm)
      }
      bindBuffers(mm) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, mm)
      }
      applyEffectWrapper(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = Tm, this.engine.stencilState.stencilTest = fm, this.engine.enableEffect(mm.drawWrapper), this.bindBuffers(mm.effect), mm.onApplyObservable.notifyObservers({})
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
      _isRenderTargetTexture(mm) {
        return void 0 !== mm.renderTarget
      }
      render(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!mm.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const fm = null === Tm ? null : this._isRenderTargetTexture(Tm) ? Tm.renderTarget : Tm;
        fm && this.engine.bindFramebuffer(fm), this.applyEffectWrapper(mm), this.draw(), fm && this.engine.unBindFramebuffer(fm), this.restoreStates()
      }
      dispose() {
        const mm = this._vertexBuffers[hm.m.PositionKind];
        mm && (mm.dispose(), delete this._vertexBuffers[hm.m.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.UO.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class Rm {
      static RegisterShaderCodeProcessing(mm, Tm) {
        Tm ? Rm._CustomShaderCodeProcessing[mm ?? ""] = Tm : delete Rm._CustomShaderCodeProcessing[mm ?? ""]
      }
      static _GetShaderCodeProcessing(mm) {
        return Rm._CustomShaderCodeProcessing[mm] ?? Rm._CustomShaderCodeProcessing[""]
      }
      get name() {
        return this.options.name
      }
      set name(mm) {
        this.options.name = mm
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
      set effect(mm) {
        this._drawWrapper.effect = mm
      }
      constructor(mm) {
        this.alphaMode = 0, this.onEffectCreatedObservable = new am.c(void 0, !0), this.onApplyObservable = new am.c, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
          ...mm,
          name: mm.name || "effectWrapper",
          engine: mm.engine,
          uniforms: mm.uniforms || mm.uniformNames || [],
          uniformNames: void 0,
          samplers: mm.samplers || mm.samplerNames || [],
          samplerNames: void 0,
          attributeNames: mm.attributeNames || ["position"],
          uniformBuffers: mm.uniformBuffers || [],
          defines: mm.defines || "",
          useShaderStore: mm.useShaderStore || !1,
          vertexUrl: mm.vertexUrl || mm.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: mm.fragmentShader || "pass",
          indexParameters: mm.indexParameters,
          blockCompilation: mm.blockCompilation || !1,
          shaderLanguage: mm.shaderLanguage || 0,
          onCompiled: mm.onCompiled || void 0,
          extraInitializations: mm.extraInitializations || void 0,
          extraInitializationsAsync: mm.extraInitializationsAsync || void 0,
          useAsPostProcess: mm.useAsPostProcess ?? !1,
          allowEmptySourceTexture: mm.allowEmptySourceTexture ?? !1
        }, this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), mm.vertexUrl || mm.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add((() => {
          this.effect.setFloat2("scale", 1, 1)
        }))), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add((() => {
          this.bind()
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.UO.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new wm.b(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const Tm = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, Tm, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          hm = arguments.length > 2 ? arguments[2] : void 0,
          Am = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, Am && this._importPromises.push(...Am);
        const am = this.options.engine.isWebGPU && !Rm.ForceGLSL;
        this._gatherImports(am, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(am && this._webGPUReady ? fm.e(364).then((() => fm(61469))) : fm.e(353).then((() => fm(61328)))), void 0 !== hm && hm(am, this._importPromises), am && this._webGPUReady && (this.options.shaderLanguage = 1), mm || this.updateEffect(Tm)
      }
      updateEffect() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          hm = arguments.length > 3 ? arguments[3] : void 0,
          Am = arguments.length > 4 ? arguments[4] : void 0,
          am = arguments.length > 5 ? arguments[5] : void 0,
          wm = arguments.length > 6 ? arguments[6] : void 0,
          Dm = arguments.length > 7 ? arguments[7] : void 0;
        const im = Rm._GetShaderCodeProcessing(this.name);
        if (im?.defineCustomBindings) {
          const hm = Tm?.slice() ?? [];
          hm.push(...this.options.uniforms);
          const Am = fm?.slice() ?? [];
          Am.push(...this.options.samplers), mm = im.defineCustomBindings(this.name, mm, hm, Am), Tm = hm, fm = Am
        }
        this.options.defines = mm || "";
        const pm = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let Em;
        Em = this.options.extraInitializationsAsync ? async () => {
          await (pm?.()), await this.options.extraInitializationsAsync()
        }: pm, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: wm ?? this._shaderPath.vertex,
          fragment: Dm ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: Tm || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: fm || this.options.samplers,
          defines: null !== mm ? mm : "",
          fallbacks: null,
          onCompiled: Am ?? this.options.onCompiled,
          onError: am ?? null,
          indexParameters: hm || this.options.indexParameters,
          processCodeAfterIncludes: im?.processCodeAfterIncludes ? (mm, Tm) => im.processCodeAfterIncludes(this.name, mm, Tm) : null,
          processFinalCode: im?.processFinalCode ? (mm, Tm) => im.processFinalCode(this.name, mm, Tm) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: Em
        }, this.options.engine) : this._drawWrapper.effect = new xm.e(this._shaderPath, this.options.attributeNames, Tm || this.options.uniforms, fm || this.options.samplerNames, this.options.engine, mm, void 0, Am || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, Em), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !mm && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), Rm._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.dO().UO.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    Rm.ForceGLSL = !1, Rm._CustomShaderCodeProcessing = {}
  },
  41846: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      Dispose: () => Vm,
      DumpData: () => jm,
      DumpDataAsync: () => qm,
      DumpFramebuffer: () => Ym,
      DumpTools: () => Im,
      EncodeImageAsync: () => Om,
      RegisterDumpTools: () => Qm
    });
    var hm = fm(40113),
      Am = fm(41822),
      am = fm(40203),
      xm = fm(37208),
      wm = fm(37201),
      Dm = fm(38766),
      im = fm(40173),
      Rm = fm(40119);
    let pm = null;
    async function Em() {
      return pm || (pm = async function() {
        const mm = wm.c.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        mm instanceof OffscreenCanvas && Dm.b.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: Tm
        } = await Promise.resolve().then((() => fm(39956)));
        if (!Tm.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const hm = new Tm(mm, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        wm.c.Instances.pop(), wm.c.OnEnginesDisposedObservable.add((mm => {
          hm && mm !== hm && !hm.aJ && 0 === wm.c.Instances.length && Vm()
        })), hm.getCaps().parallelShaderCompile = void 0;
        const am = new Am.e(hm),
          {
            passPixelShader: xm
          } = await fm.e(372).then((() => fm(61521))),
          im = new Am.g({
            engine: hm,
            name: xm.name,
            fragmentShader: xm.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: mm,
          dumpEngine: {
            engine: hm,
            renderer: am,
            wrapper: im
          }
        }
      }()), await pm
    }
    let om = (() => {
      var mm;
      let Tm, fm = [];
      return mm = class {
        static async EncodeImageAsync(mm, Tm, fm, hm, Am, xm) {
          const wm = await Em(),
            Dm = wm.dumpEngine;
          Dm.engine.setSize(Tm, fm, !0);
          const im = Dm.engine.createRawTexture(mm, Tm, fm, 5, !1, !Am, 1);
          return Dm.renderer.setViewport(), Dm.renderer.applyEffectWrapper(Dm.wrapper), Dm.wrapper.effect._bindTexture("textureSampler", im), Dm.renderer.draw(), im.dispose(), await new Promise(((mm, Tm) => {
            am.h.ToBlob(wm.canvas, (fm => {
              fm ? mm(fm) : Tm(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), hm, xm)
          }))
        }
      }, (() => {
        const Am = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Tm = [Rm.g], (0, hm.g)(mm, null, Tm, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: mm => "EncodeImageAsync" in mm,
            get: mm => mm.EncodeImageAsync
          },
          metadata: Am
        }, null, fm), Am && Object.defineProperty(mm, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Am
        }), (0, hm.i)(mm, fm)
      })(), mm
    })();
    const Om = om.EncodeImageAsync;
    async function Ym(mm, Tm, fm, hm) {
      let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        am = arguments.length > 5 ? arguments[5] : void 0,
        xm = arguments.length > 6 ? arguments[6] : void 0;
      const wm = await fm.readPixels(0, 0, mm, Tm);
      jm(mm, Tm, new Uint8Array(wm.buffer), hm, Am, am, !0, void 0, xm)
    }
    async function qm(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Am = arguments.length > 4 ? arguments[4] : void 0,
        wm = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Rm = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        pm = arguments.length > 7 ? arguments[7] : void 0;
      if (fm instanceof Float32Array) {
        const mm = new Uint8Array(fm.length);
        let Tm = fm.length;
        for (; Tm--;) {
          const hm = fm[Tm];
          mm[Tm] = Math.round(255 * (0, xm.Clamp)(hm))
        }
        fm = mm
      }
      const Em = await om.EncodeImageAsync(fm, mm, Tm, hm, wm, pm);
      void 0 !== Am && am.h.DownloadBlob(Em, Am), Em.type !== hm && Dm.b.Warn(`DumpData: The requested mimeType '${hm}' is not supported. The result has mimeType '${Em.type}' instead.`);
      const Om = await Em.arrayBuffer();
      return Rm ? Om : `data:${hm};base64,${(0,im.g)(Om)}`
    }

    function jm(mm, Tm, fm, hm) {
      let Am = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== Am || hm || (Am = ""), qm(mm, Tm, fm, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", Am, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((mm => {
        hm && hm(mm)
      }))
    }

    function Vm() {
      pm && (pm?.then((mm => {
        mm.canvas instanceof HTMLCanvasElement && mm.canvas.remove(), mm.dumpEngine && (mm.dumpEngine.engine.dispose(), mm.dumpEngine.renderer.dispose(), mm.dumpEngine.wrapper.dispose())
      })), pm = null)
    }
    const Im = {
      DumpData: jm,
      DumpDataAsync: qm,
      DumpFramebuffer: Ym,
      Dispose: Vm
    };
    let Km = !1;

    function Qm() {
      if (Km) return;
      Km = !0;
      am.h.DumpData = jm, am.h.DumpDataAsync = qm, am.h.DumpFramebuffer = Ym
    }
  },
  41831: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => om,
      g: () => Om,
      i: () => Ym
    });
    var hm = fm(40585),
      Am = fm(41834),
      am = fm(40113),
      xm = fm(41820),
      wm = fm(40129),
      Dm = fm(41839),
      im = fm(40119);
    class Rm extends xm.b {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(mm, Tm) {
        let fm = arguments.length > 4 ? arguments[4] : void 0;
        const hm = {
          size: "number" === typeof Tm ? Tm : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: fm,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...Tm
        };
        super(mm, Dm.h.FragmentUrl, {
          effectWrapper: "number" !== typeof Tm && Tm.effectWrapper ? void 0 : new Dm.h(mm, fm, hm),
          ...hm
        })
      }
      static _Parse(mm, Tm, fm, hm) {
        return wm.d.Parse((() => new Rm(mm.name, mm.options, Tm, mm.renderTargetSamplingMode, mm._engine, mm.reusable)), mm, fm, hm)
      }
    }(() => {
      var mm;
      let Tm, fm = xm.b,
        hm = [];
      mm = class extends fm {
        get face() {
          return this._effectWrapper.face
        }
        set face(mm) {
          this._effectWrapper.face = mm
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(mm, Tm) {
          let fm = arguments.length > 4 ? arguments[4] : void 0;
          const Am = {
            size: "number" === typeof Tm ? Tm : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: fm,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...Tm
          };
          super(mm, Dm.h.FragmentUrl, {
            effectWrapper: "number" !== typeof Tm && Tm.effectWrapper ? void 0 : new Dm.d(mm, fm, Am),
            ...Am
          }), (0, am.i)(this, hm)
        }
        static _Parse(Tm, fm, hm, Am) {
          return wm.d.Parse((() => new mm(Tm.name, Tm.options, fm, Tm.renderTargetSamplingMode, Tm._engine, Tm.reusable)), Tm, hm, Am)
        }
      }, (() => {
        const Am = "function" === typeof Symbol && Symbol.metadata ? Object.create(fm[Symbol.metadata] ?? null) : void 0;
        Tm = [(0, im.J)()], (0, am.g)(mm, null, Tm, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: mm => "face" in mm,
            get: mm => mm.face
          },
          metadata: Am
        }, null, hm), Am && Object.defineProperty(mm, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Am
        })
      })()
    })();
    var pm = fm(37208),
      Em = fm(40186);

    function om(mm, Tm, fm, hm, Am, am, wm, Dm) {
      const im = Tm.dO();
      return Tm.isReady = !1, Am = Am ?? Tm.samplingMode, hm = hm ?? Tm.type, am = am ?? Tm.format, wm = wm ?? Tm.width, Dm = Dm ?? Tm.height, -1 === hm && (hm = 0), new Promise((Rm => {
        const pm = new xm.b("postprocess", mm, null, null, 1, null, Am, im, !1, void 0, hm, void 0, null, !1, am);
        pm.externalTextureSamplerBinding = !0;
        const Em = im.createRenderTargetTexture({
          width: wm,
          height: Dm
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: Am,
          type: hm,
          format: am
        });
        pm.onEffectCreatedObservable.addOnce((mm => {
          mm.executeWhenCompiled((() => {
            pm.onApply = mm => {
              mm._bindTexture("textureSampler", Tm), mm.setFloat2("scale", 1, 1)
            }, fm.postProcessManager.directRender([pm], Em, !0), im.restoreDefaultFramebuffer(), im._releaseTexture(Tm), pm && pm.dispose(), Em._swapAndDie(Tm), Tm.type = hm, Tm.format = 5, Tm.isReady = !0, Rm(Tm)
          }))
        }))
      }))
    }
    async function Om(mm, Tm, am) {
      let wm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Dm = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        im = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Rm = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(mm) {
        if (mm.isReady()) return;
        if (mm.loadingError) throw new Error(mm.errorObject?.message || `Texture ${mm.name} errored while loading.`);
        const Tm = mm.onLoadObservable;
        if (Tm) return await new Promise((mm => Tm.addOnce((() => mm()))));
        const fm = mm._texture?.onLoadedObservable;
        if (fm) return await new Promise((mm => fm.addOnce((() => mm()))));
        throw new Error(`Cannot determine readiness of texture ${mm.name}.`)
      }(mm);
      const Em = mm.getInternalTexture(),
        om = mm.is3D || !!Em?.is3D,
        {
          width: Om,
          height: Ym
        } = mm.getSize(),
        qm = Tm ?? Om,
        jm = am ?? Ym;
      if (im || om || function(mm) {
          switch (mm) {
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
        }(mm.textureFormat) || qm !== Om || jm !== Ym) {
        if (mm.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${im?"RTT":"compression"} is not supported.`);
        return await async function(mm, Tm, am, wm, Dm) {
          let im = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const Rm = mm.wG(),
            pm = Rm.dO(),
            Em = mm.getInternalTexture(),
            om = mm.is3D || !!Em?.is3D;
          let Om;
          if (pm.isWebGPU ? om ? await fm.e(368).then((() => fm(61498))) : mm.isCube ? await fm.e(369).then((() => fm(61505))) : await fm.e(370).then((() => fm(61511))) : om ? await fm.e(365).then((() => fm(61486))) : mm.isCube ? await fm.e(366).then((() => fm(61489))) : await fm.e(367).then((() => fm(61494))), om) Om = new xm.b("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: hm.f.NEAREST_NEAREST_MIPNEAREST,
            engine: pm,
            shaderLanguage: pm.isWebGPU ? 1 : 0
          });
          else if (mm.isCube) {
            const mm = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            Om = new xm.b("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: hm.f.NEAREST_NEAREST_MIPNEAREST,
              engine: pm,
              defines: mm[wm],
              shaderLanguage: pm.isWebGPU ? 1 : 0
            })
          } else Om = new xm.b("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: hm.f.NEAREST_NEAREST_MIPNEAREST,
            engine: pm,
            shaderLanguage: pm.isWebGPU ? 1 : 0
          });
          await new Promise((mm => {
            Om.onEffectCreatedObservable.addOnce((Tm => {
              Tm.executeWhenCompiled((() => {
                mm(0)
              }))
            }))
          }));
          const Ym = new Am.c("temp", {
            width: Tm,
            height: am
          }, Rm, !1);
          Om.onApply = function(Tm) {
            Tm.setTexture("textureSampler", mm), Tm.setFloat("lod", Dm), Tm.setInt("gamma", mm.gammaSpace ? 1 : 0), om && Tm.setFloat("slice", im)
          };
          try {
            if (Ym.renderTarget && Em) {
              const fm = Em.samplingMode;
              0 !== Dm ? mm.updateSamplingMode(hm.f.NEAREST_NEAREST_MIPNEAREST) : mm.updateSamplingMode(hm.f.NEAREST_NEAREST), Rm.postProcessManager.directRender([Om], Ym.renderTarget, !0), mm.updateSamplingMode(fm);
              const Am = await pm.readPixels(0, 0, Tm, am),
                xm = new Uint8Array(Am.buffer, Am.byteOffset, Am.byteLength);
              return pm.unBindFramebuffer(Ym.renderTarget), xm
            }
            throw Error("Render to texture failed.")
          } finally {
            Ym.dispose(), Om.dispose()
          }
        }(mm, qm, jm, wm, Dm, Rm)
      }
      let Vm = await mm.readPixels(wm, Dm);
      if (!Vm) throw new Error(`Failed to read pixels from texture ${mm.name}.`);
      if (Vm instanceof Float32Array) {
        const mm = new Uint8Array(Vm.length);
        let Tm = Vm.length;
        for (; Tm--;) {
          const fm = Vm[Tm];
          mm[Tm] = Math.round(255 * (0, pm.Clamp)(fm))
        }
        Vm = mm
      }
      const Im = qm * jm,
        Km = 4 * Im;
      if (Vm.length !== Km) {
        const mm = 0 === Im ? 0 : Vm.length / Im;
        if (1 === mm || 2 === mm || 3 === mm) {
          const Tm = new Uint8Array(Km);
          for (let fm = 0, hm = 0, Am = 0; fm < Im; fm++, Am += 4) {
            const fm = Vm[hm++];
            if (1 === mm) {
              Tm[Am] = fm, Tm[Am + 1] = fm, Tm[Am + 2] = fm, Tm[Am + 3] = 255;
              continue
            }
            const am = Vm[hm++];
            2 !== mm ? (Tm[Am] = fm, Tm[Am + 1] = am, Tm[Am + 2] = Vm[hm++], Tm[Am + 3] = 255) : (Tm[Am] = fm, Tm[Am + 1] = am, Tm[Am + 2] = 0, Tm[Am + 3] = 255)
          }
          return Tm
        }
      }
      return Vm
    }
    const Ym = {
      CreateResizedCopy: function(mm, Tm, fm) {
        let am = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const xm = mm.wG(),
          wm = xm.dO(),
          Dm = new Am.c("resized" + mm.name, {
            width: Tm,
            height: fm
          }, xm, !mm.noMipmap, !0, mm._texture.type, !1, mm.samplingMode, !1);
        Dm.wrapU = mm.wrapU, Dm.wrapV = mm.wrapV, Dm.uOffset = mm.uOffset, Dm.vOffset = mm.vOffset, Dm.uScale = mm.uScale, Dm.vScale = mm.vScale, Dm.uAng = mm.uAng, Dm.vAng = mm.vAng, Dm.wAng = mm.wAng, Dm.coordinatesIndex = mm.coordinatesIndex, Dm.level = mm.level, Dm.anisotropicFilteringLevel = mm.anisotropicFilteringLevel, Dm._texture.isReady = !1, mm.wrapU = hm.f.CLAMP_ADDRESSMODE, mm.wrapV = hm.f.CLAMP_ADDRESSMODE;
        const im = new Rm("pass", 1, null, am ? hm.f.BILINEAR_SAMPLINGMODE : hm.f.NEAREST_SAMPLINGMODE, wm, !1, 0);
        return im.externalTextureSamplerBinding = !0, im.onEffectCreatedObservable.addOnce((Tm => {
          Tm.executeWhenCompiled((() => {
            im.onApply = function(Tm) {
              Tm.setTexture("textureSampler", mm)
            };
            const Tm = Dm.renderTarget;
            Tm && (xm.postProcessManager.directRender([im], Tm), wm.unBindFramebuffer(Tm), Dm.disposeFramebufferObjects(), im.dispose(), Dm.getInternalTexture().isReady = !0)
          }))
        })), Dm
      },
      ApplyPostProcess: om,
      ToHalfFloat: Em.j,
      FromHalfFloat: Em.d,
      GetTextureDataAsync: Om
    }
  },
  41820: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Om
    });
    var hm = fm(40113),
      Am = fm(40220),
      am = fm(37203),
      xm = fm(37185),
      wm = fm(39958),
      Dm = fm(40119),
      im = fm(40129),
      Rm = fm(37224),
      pm = fm(40014),
      Em = fm(40052),
      om = fm(41822);
    let Om = (() => {
        var mm;
        let Tm, wm, pm, Om, Ym, jm, Vm, Im, Km, Qm, nm, Jm, cm, zm, Zm, km, bm = [],
          Sm = [],
          em = [],
          Nm = [],
          Gm = [],
          Xm = [],
          Pm = [],
          Hm = [],
          ym = [],
          Cm = [],
          rm = [],
          sm = [],
          lm = [],
          Mm = [],
          um = [],
          Bm = [],
          Lm = [],
          tm = [],
          Um = [],
          dm = [],
          gm = [],
          Wm = [],
          Fm = [],
          mT = [],
          TT = [],
          fT = [],
          hT = [],
          AT = [],
          aT = [];
        return mm = class {
          static get ForceGLSL() {
            return om.g.ForceGLSL
          }
          static set ForceGLSL(mm) {
            om.g.ForceGLSL = mm
          }
          static RegisterShaderCodeProcessing(mm, Tm) {
            om.g.RegisterShaderCodeProcessing(mm, Tm)
          }
          get name() {
            return this._effectWrapper.name
          }
          set name(mm) {
            this._effectWrapper.name = mm
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode
          }
          set alphaMode(mm) {
            this._effectWrapper.alphaMode = mm
          }
          get samples() {
            return this._samples
          }
          set samples(mm) {
            this._samples = Math.min(mm, this._engine.getCaps().maxMSAASamples), this._textures.forEach((mm => {
              mm.setSamples(this._samples)
            }))
          }
          get shaderLanguage() {
            return this._shaderLanguage
          }
          getEffectName() {
            return this._fragmentUrl
          }
          set onActivate(mm) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), mm && (this._onActivateObserver = this.onActivateObservable.add(mm))
          }
          set onSizeChanged(mm) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(mm)
          }
          set onApply(mm) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(mm)
          }
          set onBeforeRender(mm) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(mm)
          }
          set onAfterRender(mm) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(mm)
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd]
          }
          set inputTexture(mm) {
            this._forcedOutputTexture = mm
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty())
          }
          getCamera() {
            return this.rW
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.Z8(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(Tm, fm, wm, Dm, im, Rm) {
            let pm = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              Em = arguments.length > 7 ? arguments[7] : void 0,
              Om = arguments.length > 8 ? arguments[8] : void 0,
              Ym = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              jm = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              Vm = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              Im = arguments.length > 12 ? arguments[12] : void 0,
              Km = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              Qm = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              nm = arguments.length > 15 ? arguments[15] : void 0,
              Jm = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, hm.i)(this, bm), null), this.uniqueId = (0, hm.i)(this, Sm, void 0), this.width = ((0, hm.i)(this, em), (0, hm.i)(this, Nm, -1)), this.height = ((0, hm.i)(this, Gm), (0, hm.i)(this, Xm, -1)), this.nodeMaterialSource = ((0, hm.i)(this, Pm), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, hm.i)(this, Hm, void 0), this.clearColor = ((0, hm.i)(this, ym), (0, hm.i)(this, Cm, void 0)), this.autoClear = ((0, hm.i)(this, rm), (0, hm.i)(this, sm, !0)), this.forceAutoClearInAlphaMode = ((0, hm.i)(this, lm), (0, hm.i)(this, Mm, !1)), this.alphaConstants = ((0, hm.i)(this, um), (0, hm.i)(this, Bm, void 0)), this.animations = ((0, hm.i)(this, Lm), []), this.enablePixelPerfectMode = (0, hm.i)(this, tm, !1), this.forceFullscreenViewport = ((0, hm.i)(this, Um), (0, hm.i)(this, dm, !0)), this.inspectableCustomProperties = (0, hm.i)(this, gm), this.scaleMode = (0, hm.i)(this, Wm, 1), this.alwaysForcePOT = ((0, hm.i)(this, Fm), (0, hm.i)(this, mT, !1)), this._samples = ((0, hm.i)(this, TT), (0, hm.i)(this, fT, 1)), this.adaptScaleToCurrentViewport = ((0, hm.i)(this, hT), (0, hm.i)(this, AT, !1)), this.doNotSerialize = ((0, hm.i)(this, aT), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new Am.f(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new xm.l(1, 1), this._texelSize = xm.l.Zero(), this.onActivateObservable = new am.c, this.onSizeChangedObservable = new am.c, this.onApplyObservable = new am.c, this.onBeforeRenderObservable = new am.c, this.onAfterRenderObservable = new am.c, this.iG = new am.c, qm();
            let cm, zm = 1,
              Zm = null;
            if (wm && !Array.isArray(wm)) {
              const mm = wm;
              wm = mm.uniforms ?? null, Dm = mm.samplers ?? null, zm = mm.size ?? 1, Rm = mm.camera ?? null, pm = mm.samplingMode ?? 1, Em = mm.engine, Om = mm.reusable, Ym = Array.isArray(mm.defines) ? mm.defines.join("\n") : mm.defines ?? null, jm = mm.textureType ?? 0, Vm = mm.vertexUrl ?? "postprocess", Im = mm.indexParameters, Km = mm.blockCompilation ?? !1, Qm = mm.textureFormat ?? 5, nm = mm.shaderLanguage ?? 0, Zm = mm.uniformBuffers ?? null, Jm = mm.extraInitializations, cm = mm.effectWrapper
            } else im && (zm = "number" === typeof im ? im : {
              width: im.width,
              height: im.height
            });
            if (this._useExistingThinPostProcess = !!cm, this._effectWrapper = cm ?? new om.g({
                name: Tm,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: fm,
                engine: Em || Rm?.wG().dO(),
                uniforms: wm,
                samplers: Dm,
                uniformBuffers: Zm,
                defines: Ym,
                vertexUrl: Vm,
                indexParameters: Im,
                blockCompilation: !0,
                shaderLanguage: nm,
                extraInitializations: void 0
              }), this.name = Tm, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != Rm ? (this.rW = Rm, this._scene = Rm.wG(), Rm.attachPostProcess(this), this._engine = this._scene.dO(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : Em && (this._engine = Em, this._engine.postProcesses.push(this)), this._options = zm, this.renderTargetSamplingMode = pm || 1, this._reusable = Om || !1, this._textureType = jm, this._textureFormat = Qm, this._shaderLanguage = nm || 0, this._samplers = Dm || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = fm, this._vertexUrl = Vm, this._parameters = wm || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = Zm || [], this._indexParameters = Im, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const Tm = [];
              this._gatherImports(this._engine.isWebGPU && !mm.ForceGLSL, Tm), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(Km, Ym, Jm, Tm)
            }
          }
          _gatherImports() {
            let mm = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? mm.push(Promise.all([fm.e(364).then((() => fm(61469)))])) : mm.push(Promise.all([fm.e(353).then((() => fm(61328)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          dO() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(mm) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = mm, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new Am.f(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              hm = arguments.length > 3 ? arguments[3] : void 0,
              Am = arguments.length > 4 ? arguments[4] : void 0,
              am = arguments.length > 5 ? arguments[5] : void 0,
              xm = arguments.length > 6 ? arguments[6] : void 0,
              wm = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(mm, Tm, fm, hm, Am, am, xm, wm), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(mm, Tm) {
            let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let Am = 0; Am < this._textureCache.length; Am++)
              if (this._textureCache[Am].texture.width === mm.width && this._textureCache[Am].texture.height === mm.height && this._textureCache[Am].postProcessChannel === fm && this._textureCache[Am].texture._generateDepthBuffer === Tm.generateDepthBuffer && this._textureCache[Am].texture.samples === Tm.samples) return this._textureCache[Am].texture;
            const hm = this._engine.createRenderTargetTexture(mm, Tm);
            return this._textureCache.push({
              texture: hm,
              postProcessChannel: fm,
              lastUsedRenderId: -1
            }), hm
          }
          _flushTextureCache() {
            const mm = this._renderId;
            for (let Tm = this._textureCache.length - 1; Tm >= 0; Tm--)
              if (mm - this._textureCache[Tm].lastUsedRenderId > 100) {
                let mm = !1;
                for (let fm = 0; fm < this._textures.length; fm++)
                  if (this._textures.data[fm] === this._textureCache[Tm].texture) {
                    mm = !0;
                    break
                  } mm || (this._textureCache[Tm].texture.dispose(), this._textureCache.splice(Tm, 1))
              }
          }
          resize(mm, Tm) {
            let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Am = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = mm, this.height = Tm;
            let am = null;
            if (fm)
              for (let Dm = 0; Dm < fm._postProcesses.length; Dm++)
                if (null !== fm._postProcesses[Dm]) {
                  am = fm._postProcesses[Dm];
                  break
                } const xm = {
                width: this.width,
                height: this.height
              },
              wm = {
                generateMipMaps: hm,
                generateDepthBuffer: Am || am === this,
                generateStencilBuffer: (Am || am === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(xm, wm, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(xm, wm, 1)), this._texelSize.Z8(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let mm;
            if (this._shareOutputWithPostProcess) mm = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) mm = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let Tm;
              mm = this.inputTexture;
              for (let fm = 0; fm < this._textureCache.length; fm++)
                if (this._textureCache[fm].texture === mm) {
                  Tm = this._textureCache[fm];
                  break
                } Tm && (Tm.lastUsedRenderId = this._renderId)
            }
            return mm
          }
          activate(mm) {
            let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              fm = arguments.length > 2 ? arguments[2] : void 0;
            const hm = null === mm || void 0 !== mm.cameraRigMode ? mm || this.rW : null,
              Am = hm?.wG() ?? mm,
              am = Am.dO(),
              xm = am.getCaps().maxTextureSize,
              wm = (Tm ? Tm.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              Dm = (Tm ? Tm.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let im = this._options.width || wm,
              Rm = this._options.height || Dm;
            const pm = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let om = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const mm = am.currentViewport;
                mm && (im *= mm.width, Rm *= mm.height)
              }(pm || this.alwaysForcePOT) && (this._options.width || (im = am.needPOTTextures ? (0, Em.f)(im, xm, this.scaleMode) : im), this._options.height || (Rm = am.needPOTTextures ? (0, Em.f)(Rm, xm, this.scaleMode) : Rm)), this.width === im && this.height === Rm && (om = this._getTarget()) || this.resize(im, Rm, hm, pm, fm), this._textures.forEach((mm => {
                mm.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(mm, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return om || (om = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.Z8(wm / im, Dm / Rm), this._engine.bindFramebuffer(om, 0, wm, Dm, this.forceFullscreenViewport)) : (this._scaleRatio.Z8(1, 1), this._engine.bindFramebuffer(om, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(hm), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : Am.clearColor, Am._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), om
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
            let mm;
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.dO().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), mm = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", mm?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
          }
          _disposeTextureCache() {
            for (let mm = this._textureCache.length - 1; mm >= 0; mm--) this._textureCache[mm].texture.dispose();
            this._textureCache.length = 0
          }
          setPrePassRenderer(mm) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = mm.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
          }
          dispose(mm) {
            let Tm;
            if (mm = mm || this.rW, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (Tm = this._parentContainer.postProcesses.indexOf(this), Tm > -1 && this._parentContainer.postProcesses.splice(Tm, 1), this._parentContainer = null), Tm = this._engine.postProcesses.indexOf(this), -1 !== Tm && this._engine.postProcesses.splice(Tm, 1), this.iG.notifyObservers(), mm) {
              if (mm.detachPostProcess(this), Tm = mm._postProcesses.indexOf(this), 0 === Tm && mm._postProcesses.length > 0) {
                const mm = this.rW._getFirstPostProcess();
                mm && mm.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const mm = im.d.Serialize(this),
              Tm = this.getCamera() || this._scene && this._scene.activeCamera;
            return mm.customType = "BABYLON." + this.getClassName(), mm.cameraId = Tm ? Tm.id : null, mm.reusable = this._reusable, mm.textureType = this._textureType, mm.fragmentUrl = this._fragmentUrl, mm.parameters = this._parameters, mm.samplers = this._samplers, mm.uniformBuffers = this._uniformBuffers, mm.options = this._options, mm.defines = this._postProcessDefines, mm.textureFormat = this._textureFormat, mm.vertexUrl = this._vertexUrl, mm.indexParameters = this._indexParameters, mm
          }
          clone() {
            const Tm = this.serialize();
            Tm._engine = this._engine, Tm.cameraId = null;
            const fm = mm.Parse(Tm, this._scene, "");
            return fm ? (fm.onActivateObservable = this.onActivateObservable.clone(), fm.onSizeChangedObservable = this.onSizeChangedObservable.clone(), fm.onApplyObservable = this.onApplyObservable.clone(), fm.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), fm.onAfterRenderObservable = this.onAfterRenderObservable.clone(), fm._prePassEffectConfiguration = this._prePassEffectConfiguration, fm) : null
          }
          static Parse(mm, Tm, fm) {
            const hm = (0, Rm.c)(mm.customType);
            if (!hm || !hm._Parse) return null;
            const Am = Tm ? Tm.getCameraById(mm.cameraId) : null;
            return hm._Parse(mm, Am, Tm, fm)
          }
          static _Parse(Tm, fm, hm, Am) {
            return im.d.Parse((() => new mm(Tm.name, Tm.fragmentUrl, Tm.parameters, Tm.samplers, Tm.options, fm, Tm.renderTargetSamplingMode, Tm._engine, Tm.reusable, Tm.defines, Tm.textureType, Tm.vertexUrl, Tm.indexParameters, !1, Tm.textureFormat)), Tm, hm, Am)
          }
        }, (() => {
          const fm = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Tm = [(0, Dm.J)()], wm = [(0, Dm.J)()], pm = [(0, Dm.J)()], Om = [(0, Dm.J)()], Ym = [(0, Dm.J)()], jm = [(0, Dm.o)()], Vm = [(0, Dm.J)()], Im = [(0, Dm.J)()], Km = [(0, Dm.J)()], Qm = [(0, Dm.J)()], nm = [(0, Dm.J)()], Jm = [(0, Dm.J)()], cm = [(0, Dm.J)()], zm = [(0, Dm.J)()], Zm = [(0, Dm.J)("samples")], km = [(0, Dm.J)()], (0, hm.g)(mm, null, wm, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: mm => "name" in mm,
              get: mm => mm.name
            },
            metadata: fm
          }, null, bm), (0, hm.g)(mm, null, Km, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: mm => "alphaMode" in mm,
              get: mm => mm.alphaMode
            },
            metadata: fm
          }, null, bm), (0, hm.g)(null, null, Tm, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: mm => "uniqueId" in mm,
              get: mm => mm.uniqueId,
              set: (mm, Tm) => {
                mm.uniqueId = Tm
              }
            },
            metadata: fm
          }, Sm, em), (0, hm.g)(null, null, pm, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: mm => "width" in mm,
              get: mm => mm.width,
              set: (mm, Tm) => {
                mm.width = Tm
              }
            },
            metadata: fm
          }, Nm, Gm), (0, hm.g)(null, null, Om, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: mm => "height" in mm,
              get: mm => mm.height,
              set: (mm, Tm) => {
                mm.height = Tm
              }
            },
            metadata: fm
          }, Xm, Pm), (0, hm.g)(null, null, Ym, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: mm => "renderTargetSamplingMode" in mm,
              get: mm => mm.renderTargetSamplingMode,
              set: (mm, Tm) => {
                mm.renderTargetSamplingMode = Tm
              }
            },
            metadata: fm
          }, Hm, ym), (0, hm.g)(null, null, jm, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: mm => "clearColor" in mm,
              get: mm => mm.clearColor,
              set: (mm, Tm) => {
                mm.clearColor = Tm
              }
            },
            metadata: fm
          }, Cm, rm), (0, hm.g)(null, null, Vm, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: mm => "autoClear" in mm,
              get: mm => mm.autoClear,
              set: (mm, Tm) => {
                mm.autoClear = Tm
              }
            },
            metadata: fm
          }, sm, lm), (0, hm.g)(null, null, Im, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: mm => "forceAutoClearInAlphaMode" in mm,
              get: mm => mm.forceAutoClearInAlphaMode,
              set: (mm, Tm) => {
                mm.forceAutoClearInAlphaMode = Tm
              }
            },
            metadata: fm
          }, Mm, um), (0, hm.g)(null, null, Qm, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: mm => "alphaConstants" in mm,
              get: mm => mm.alphaConstants,
              set: (mm, Tm) => {
                mm.alphaConstants = Tm
              }
            },
            metadata: fm
          }, Bm, Lm), (0, hm.g)(null, null, nm, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: mm => "enablePixelPerfectMode" in mm,
              get: mm => mm.enablePixelPerfectMode,
              set: (mm, Tm) => {
                mm.enablePixelPerfectMode = Tm
              }
            },
            metadata: fm
          }, tm, Um), (0, hm.g)(null, null, Jm, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: mm => "forceFullscreenViewport" in mm,
              get: mm => mm.forceFullscreenViewport,
              set: (mm, Tm) => {
                mm.forceFullscreenViewport = Tm
              }
            },
            metadata: fm
          }, dm, gm), (0, hm.g)(null, null, cm, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: mm => "scaleMode" in mm,
              get: mm => mm.scaleMode,
              set: (mm, Tm) => {
                mm.scaleMode = Tm
              }
            },
            metadata: fm
          }, Wm, Fm), (0, hm.g)(null, null, zm, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: mm => "alwaysForcePOT" in mm,
              get: mm => mm.alwaysForcePOT,
              set: (mm, Tm) => {
                mm.alwaysForcePOT = Tm
              }
            },
            metadata: fm
          }, mT, TT), (0, hm.g)(null, null, Zm, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: mm => "_samples" in mm,
              get: mm => mm._samples,
              set: (mm, Tm) => {
                mm._samples = Tm
              }
            },
            metadata: fm
          }, fT, hT), (0, hm.g)(null, null, km, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: mm => "adaptScaleToCurrentViewport" in mm,
              get: mm => mm.adaptScaleToCurrentViewport,
              set: (mm, Tm) => {
                mm.adaptScaleToCurrentViewport = Tm
              }
            },
            metadata: fm
          }, AT, aT), fm && Object.defineProperty(mm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fm
          })
        })(), mm
      })(),
      Ym = !1;

    function qm() {
      Ym || (Ym = !0, pm.b.prototype.setTextureFromPostProcess = function(mm, Tm, fm) {
        let hm = null;
        Tm && (Tm._forcedOutputTexture ? hm = Tm._forcedOutputTexture : Tm._textures.data[Tm._currentRenderTextureInd] && (hm = Tm._textures.data[Tm._currentRenderTextureInd])), this._bindTexture(mm, hm?.texture ?? null, fm)
      }, pm.b.prototype.setTextureFromPostProcessOutput = function(mm, Tm, fm) {
        this._bindTexture(mm, Tm?._outputTexture?.texture ?? null, fm)
      }, wm.e.prototype.setTextureFromPostProcess = function(mm, Tm) {
        this._engine.setTextureFromPostProcess(this._samplers[mm], Tm, mm)
      }, wm.e.prototype.setTextureFromPostProcessOutput = function(mm, Tm) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[mm], Tm, mm)
      }, (0, Rm.d)("BABYLON.PostProcess", Om))
    }
  },
  41839: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => xm,
      h: () => am
    });
    var hm = fm(41822),
      Am = fm(37201);
    class am extends hm.g {
      _gatherImports(mm, Tm) {
        mm ? (this._webGPUReady = !0, Tm.push(Promise.all([fm.e(371).then((() => fm(61516)))]))) : Tm.push(Promise.all([fm.e(372).then((() => fm(61521)))])), super._gatherImports(mm, Tm)
      }
      constructor(mm) {
        let Tm = arguments.length > 2 ? arguments[2] : void 0;
        const fm = {
          name: mm,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Am.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: am.FragmentUrl,
          ...Tm
        };
        fm.engine || (fm.engine = Am.c.LastCreatedEngine), super(fm)
      }
    }
    am.FragmentUrl = "pass";
    class xm extends hm.g {
      _gatherImports(mm, Tm) {
        mm ? (this._webGPUReady = !0, Tm.push(Promise.all([fm.e(373).then((() => fm(61529)))]))) : Tm.push(Promise.all([fm.e(374).then((() => fm(61538)))])), super._gatherImports(mm, Tm)
      }
      constructor(mm) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: mm,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Am.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: xm.FragmentUrl,
          defines: "#define POSITIVEX"
        }), this._face = 0
      }
      get face() {
        return this._face
      }
      set face(mm) {
        if (!(mm < 0 || mm > 5)) switch (this._face = mm, this._face) {
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
    xm.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);