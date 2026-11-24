export const id = 316;
export const ids = [316];
export const modules = {
  42076: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Nt
    });
    var Ot = Vt(37367),
      qt = Vt(37336),
      Dt = Vt(40661),
      mt = Vt(40348),
      dt = Vt(40131),
      jt = Vt(38899),
      Ht = Vt(40337),
      Xt = Vt(40357),
      Qt = Vt(37350),
      lt = Vt(40085),
      Et = Vt(40311),
      ft = Vt(40395);
    class wt {
      get renderList() {
        return this._renderList
      }
      set renderList(tt) {
        this._renderList !== tt && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), tt && (this._unObserveRenderList = (0, Qt.e)(tt, this._renderListHasChanged)), this._renderList = tt)
      }
      get disableImageProcessing() {
        return this._disableImageProcessing
      }
      set disableImageProcessing(tt) {
        tt !== this._disableImageProcessing && (this._disableImageProcessing = tt, this._scene.markAllMaterialsAsDirty(64))
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(tt) {
        this._disableDepthPrePass = tt, this._renderingManager.disableDepthPrePass = tt
      }
      get name() {
        return this._name
      }
      set name(tt) {
        if (this._name !== tt) {
          if (this._name = tt, this._sceneUBOs)
            for (let tt = 0; tt < this._sceneUBOs.length; ++tt) this._sceneUBOs[tt].name = `Scene ubo #${tt} for ${this.name}`;
          if (this._scene)
            for (let tt = 0; tt < this._renderPassIds.length; ++tt) {
              const et = this._renderPassIds[tt];
              this._engine._renderPassNames[et] = `${this._name}#${tt}`
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
      setMaterialForRendering(tt, et) {
        let Vt;
        Vt = Array.isArray(tt) ? tt : [tt];
        for (let Ot = 0; Ot < Vt.length; ++Ot)
          for (let tt = 0; tt < this.options.numPasses; ++tt) {
            let qt = Vt[Ot];
            Vt[Ot].pI && (qt = Vt[Ot].Rqt), qt.setMaterialForRenderPass(this._renderPassIds[tt], void 0 !== et ? Array.isArray(et) ? et[tt] : et : void 0)
          }
      }
      _freezeActiveMeshes(tt) {
        this._freezeActiveMeshesCancel = (0, lt.g)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, tt)
            for (let tt = 0; tt < this._activeMeshes.length; tt++) this._activeMeshes.data[tt]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((tt, et) => {
          this._freezeActiveMeshesCancel = null, et ? (jt.d.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), tt && jt.d.Error(tt)) : (jt.d.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), tt && (jt.d.Error(tt), tt.stack && jt.d.Error(tt.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let tt = 0; tt < this._activeMeshes.length; tt++) this._activeMeshes.data[tt]._unFreeze();
        this._isFrozen = !1
      }
      constructor(tt, et, Vt) {
        this._unObserveRenderList = null, this._renderListHasChanged = (tt, et) => {
          const Vt = this._renderList ? this._renderList.length : 0;
          if (0 === et && Vt > 0 || 0 === Vt)
            for (const Ot of this._scene.meshes) Ot._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new Ot.c, this.onAfterRenderObservable = new Ot.c, this.onBeforeRenderingManagerRenderObservable = new Ot.c, this.onAfterRenderingManagerRenderObservable = new Ot.c, this.onInitRenderingObservable = new Ot.c, this.onFinishRenderingObservable = new Ot.c, this.onFastPathRenderObservable = new Ot.c, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new Et.g(256), this._activeBoundingBoxes = new Et.g(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = tt, this._scene = et, this._engine = this._scene.Jf(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...Vt
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new Xt.b(et), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const tt of this._scene.lights) tt.getTypeID() === ft.d.LIGHTTYPEID_CLUSTERED_CONTAINER && tt.isSupported && tt._updateBatches(this.activeCamera).render()
        })), this._scene.addObjectRenderer(this)
      }
      _releaseRenderPassId() {
        for (let tt = 0; tt < this.options.numPasses; ++tt) this._engine.releaseRenderPassId(this._renderPassIds[tt]);
        this._renderPassIds.length = 0
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let tt = 0; tt < this.options.numPasses; ++tt) this._renderPassIds[tt] = this._engine.createRenderPassId(`${this.name}#${tt}`)
      }
      _createSceneUBO(tt, et) {
        const Vt = this._scene.Jf(),
          Ot = new Ht.c(Vt, void 0, et, tt, void 0, !1);
        return Ot.addUniform("viewProjection", 16), et && Ot.addUniform("viewProjectionR", 16), Ot.addUniform("view", 16), Ot.addUniform("projection", 16), Ot.addUniform("vEyePosition", 4), Ot.addUniform("inverseProjection", 16), Ot
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const tt = this._engine._currentRenderTarget,
          et = !(!tt || !tt.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const tt = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${tt} for ${this.name}`, et)), this._sceneUBOIsMultiview.push(et)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== et && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, et), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = et);
        const Vt = this._sceneUBOs[this._currentSceneUBOIndex++];
        return Vt.unbindEffect(), Vt
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1
      }
      get refreshRate() {
        return this._refreshRate
      }
      set refreshRate(tt) {
        this._refreshRate = tt, this.resetRefreshCounter()
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1))
      }
      isReadyForRendering(tt, et) {
        this.prepareRenderList(), this.initRender(tt, et);
        const Vt = this._checkReadiness();
        return this.finishRender(), Vt
      }
      prepareRenderList() {
        const tt = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let et = 0; et < this._waitingRenderList.length; et++) {
              const Vt = this._waitingRenderList[et],
                Ot = tt.getMeshById(Vt);
              Ot && this.renderList.push(Ot)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const tt = this._scene.meshes;
          for (let et = 0; et < tt.length; et++) {
            const Vt = tt[et];
            this.renderListPredicate(Vt) && this.renderList.push(Vt)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(tt, et) {
        const Vt = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), Vt && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(Vt.getViewMatrix(), Vt.getProjectionMatrix(!0)), this._scene._activeCamera = Vt, this._engine.setViewport(Vt.rigParent ? Vt.rigParent.viewport : Vt.viewport, tt, et)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const tt = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (tt.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), tt._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== tt.activeCamera && tt.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), tt.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Vt = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[tt], this.onBeforeRenderObservable.notifyObservers(tt);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(tt);
        else {
          const et = this._prepareRenderingManager(tt),
            Vt = this._scene.getOutlineRenderer?.(),
            Ot = Vt?.enabled;
          Vt && (Vt.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(tt), this._renderingManager.render(this.customRenderFunction, et, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(tt), Vt && (Vt.enabled = Ot)
        }
        et || this.onAfterRenderObservable.notifyObservers(tt), this._engine.currentRenderPassId = Vt
      }
      _checkReadiness() {
        const tt = this._scene,
          et = this._engine.currentRenderPassId;
        let Vt = !0;
        tt.getViewMatrix() || tt.updateTransformMatrix();
        const Ot = this.options.numPasses;
        for (let qt = 0; qt < Ot && Vt; qt++) {
          const et = this.renderList ? this.renderList : tt.frameGraph ? tt.meshes : tt.getActiveMeshes().data,
            Dt = this.renderList || tt.frameGraph ? et.length : tt.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[qt], this.onBeforeRenderObservable.notifyObservers(qt);
          let mt = null,
            dt = Dt;
          this.getCustomRenderList && (mt = this.getCustomRenderList(qt, et, Dt), mt && (dt = mt.length)), mt || (mt = et), this.options.doNotChangeAspectRatio || tt.updateTransformMatrix(!0);
          for (let tt = 0; tt < dt && Vt; ++tt) {
            const et = mt[tt];
            if (!et.isEnabled() || et.isBlocked || !et.isVisible || !et.vJ) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(et, this.refreshRate, !0)) {
                Vt = !1;
                continue
              }
            } else if (!et.isReady(!0)) {
              Vt = !1;
              continue
            }
            let Ot = et._edgesRenderer,
              qt = et.hasThinInstances;
            if (et.pI) {
              const tt = et.Rqt;
              tt.edgesShareWithInstances && tt._edgesRenderer?.isEnabled && (Ot = tt._edgesRenderer, qt = !0)
            } else et.cqt && et.edgesShareWithInstances && (qt = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && Ot?.isEnabled && (Ot.isReady(qt) || (Vt = !1))
          }
          if (this.renderParticles && tt.particlesEnabled) {
            const et = this.particleSystemList || tt.PJ;
            for (const tt of et) tt.isReady() || (Vt = !1)
          }
          if (this.renderSprites && tt.spritesEnabled) {
            const et = this.spriteManagerList || tt.spriteManagers;
            if (et)
              for (const Ot of et) tt.activeCamera && 0 === (Ot.layerMask & tt.activeCamera.layerMask) || Ot.isReady && !Ot.isReady() && (Vt = !1)
          }
          this.onAfterRenderObservable.notifyObservers(qt), Ot > 1 && (tt.incrementRenderId(), tt.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = et, Vt
      }
      _prepareRenderingManager() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Vt = this._scene;
        let Ot, qt, Dt = null;
        const mt = this.renderList ? this.renderList : Vt.frameGraph ? Vt.meshes : Vt.getActiveMeshes().data,
          dt = this.renderList || Vt.frameGraph ? mt.length : Vt.getActiveMeshes().length;
        if (this.getCustomRenderList && (Dt = this.getCustomRenderList(tt, mt, dt)), Dt) Ot = Dt.length, qt = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !et && !this._engine.isWebGPU) return mt;
          this._defaultRenderListPrepared = !0, Dt = mt, Ot = dt, qt = !this.renderList || this.forceLayerMaskCheck
        }
        const jt = Vt.activeCamera,
          Ht = this.cameraForLOD ?? jt,
          Xt = Vt.getBoundingBoxRenderer?.();
        if (Vt._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && Xt) {
            Xt.reset();
            for (let tt = 0; tt < this._activeBoundingBoxes.length; tt++) {
              const et = this._activeBoundingBoxes.data[tt];
              Xt.renderList.push(et)
            }
          }
          return Dt
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), Xt && Xt.reset(), this.renderMeshes) {
          const tt = Vt.getRenderId(),
            et = Vt.getFrameId();
          for (let mt = 0; mt < Ot; mt++) {
            const Ot = Dt[mt];
            if (Ot && !Ot.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(Ot, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!Ot.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let Dt, mt;
              if (Ht) {
                const tt = Ot._internalAbstractMeshDataInfo._currentLOD.get(Ht);
                tt && tt[1] === et ? Dt = tt[0] : (Dt = Vt.customLODSelector ? Vt.customLODSelector(Ot, Ht) : Ot.getLOD(Ht), tt ? (tt[0] = Dt, tt[1] = et) : Ot._internalAbstractMeshDataInfo._currentLOD.set(Ht, [Dt, et]))
              } else Dt = Ot;
              if (!Dt) continue;
              if (Dt !== Ot && 0 !== Dt.billboardMode && Dt.computeWorldMatrix(), Dt._preActivateForIntermediateRendering(tt), mt = !(!qt || !jt) && 0 === (Ot.layerMask & jt.layerMask), Ot.isEnabled() && Ot.isVisible && Ot.vJ && !mt) {
                if (this._activeMeshes.push(Ot), Dt._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, Dt !== Ot && Dt._activate(tt, !0), this.enableBoundingBoxRendering && Xt && Xt._preActiveMesh(Ot), Ot._activate(tt, !0) && Ot.vJ.length) {
                  Ot.pI ? Ot._internalAbstractMeshDataInfo._actAsRegularMesh && (Dt = Ot) : Dt._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, Dt._internalAbstractMeshDataInfo._isActiveIntermediate = !0, Vt._prepareSkeleton(Dt);
                  for (let tt = 0; tt < Dt.vJ.length; tt++) {
                    const et = Dt.vJ[tt];
                    this.enableBoundingBoxRendering && Xt && Xt._evaluateSubMesh(Ot, et), this._renderingManager.dispatch(et, Dt)
                  }
                }
                Ot._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && Xt && et)
          for (let Qt = 0; Qt < Xt.renderList.length; Qt++) {
            const tt = Xt.renderList.data[Qt];
            this._activeBoundingBoxes.push(tt)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const tt = this.particleSystemList || Vt.PJ;
          for (let et = 0; et < tt.length; et++) {
            const Vt = tt[et],
              Ot = Vt.emitter;
            Vt.isStarted() && Ot && (!Ot.position || Ot.isEnabled()) && this._renderingManager.dispatchParticles(Vt)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return Dt
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(tt, et, Vt, Ot)
      }
      setRenderingAutoClearDepthStencil(tt, et) {
        let Vt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Ot = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(tt, et, Vt, Ot), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const tt = new wt(this.name, this._scene, this.options);
        return this.renderList && (tt.renderList = this.renderList.slice(0)), tt
      }
      dispose() {
        const tt = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          et = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let Vt = 0; Vt < et; Vt++) {
          const et = tt[Vt];
          et && void 0 !== et.getMaterialForRenderPass(this.renderPassId) && et.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const Vt of this._sceneUBOs) Vt.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === wt.REFRESHRATE_RENDER_ONCE && (this.refreshRate = wt.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    wt.REFRESHRATE_RENDER_ONCE = 0, wt.REFRESHRATE_RENDER_ONEVERYFRAME = 1, wt.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var yt = Vt(40080);
    class Nt extends Dt.f {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate
      }
      set renderListPredicate(tt) {
        this._objectRenderer.renderListPredicate = tt
      }
      get renderList() {
        return this._objectRenderer.renderList
      }
      set renderList(tt) {
        this._objectRenderer.renderList = tt
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList
      }
      set particleSystemList(tt) {
        this._objectRenderer.particleSystemList = tt
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList
      }
      set getCustomRenderList(tt) {
        this._objectRenderer.getCustomRenderList = tt
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles
      }
      set renderParticles(tt) {
        this._objectRenderer.renderParticles = tt
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites
      }
      set renderSprites(tt) {
        this._objectRenderer.renderSprites = tt
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering
      }
      set enableBoundingBoxRendering(tt) {
        this._objectRenderer.enableBoundingBoxRendering = tt
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering
      }
      set enableOutlineRendering(tt) {
        this._objectRenderer.enableOutlineRendering = tt
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck
      }
      set forceLayerMaskCheck(tt) {
        this._objectRenderer.forceLayerMaskCheck = tt
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera
      }
      set activeCamera(tt) {
        this._objectRenderer.activeCamera = tt
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD
      }
      set cameraForLOD(tt) {
        this._objectRenderer.cameraForLOD = tt
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing
      }
      set disableImageProcessing(tt) {
        this._objectRenderer.disableImageProcessing = tt
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction
      }
      set customIsReadyFunction(tt) {
        this._objectRenderer.customIsReadyFunction = tt
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction
      }
      set customRenderFunction(tt) {
        this._objectRenderer.customRenderFunction = tt
      }
      get postProcesses() {
        return this._postProcesses
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled
      }
      set onAfterUnbind(tt) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(tt)
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable
      }
      set onBeforeRender(tt) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(tt)
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable
      }
      set onAfterRender(tt) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(tt)
      }
      set onClear(tt) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(tt)
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList
      }
      set _waitingRenderList(tt) {
        this._objectRenderer._waitingRenderList = tt
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
      setMaterialForRendering(tt, et) {
        this._objectRenderer.setMaterialForRendering(tt, et)
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
      set boundingBoxSize(tt) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(tt)) return;
        this._boundingBoxSize = tt;
        const et = this.vI();
        et && et.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(tt, et, Vt) {
        let mt, dt, Ht = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Xt = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Qt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          lt = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Et = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Dt.f.TRILINEAR_SAMPLINGMODE,
          ft = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          yt = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          Nt = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          Mt = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          bt = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          Jt = arguments.length > 13 ? arguments[13] : void 0,
          Ct = arguments.length > 14 ? arguments[14] : void 0,
          ut = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          Kt = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          ht = !0,
          vt = !1;
        if ("object" === typeof Ht) {
          const tt = Ht;
          Ht = !!tt.generateMipMaps, Xt = tt.doNotChangeAspectRatio ?? !0, Qt = tt.type ?? 0, lt = !!tt.isCube, Et = tt.samplingMode ?? Dt.f.TRILINEAR_SAMPLINGMODE, ft = tt.generateDepthBuffer ?? !0, yt = !!tt.generateStencilBuffer, Nt = !!tt.isMulti, Mt = tt.format ?? 5, bt = !!tt.delayAllocation, Jt = tt.samples, Ct = tt.creationFlags, ut = !!tt.noColorAttachment, Kt = !!tt.useSRGBBuffer, mt = tt.colorAttachment, ht = tt.gammaSpace ?? ht, dt = tt.existingObjectRenderer, vt = !!tt.enableClusteredLights
        }
        if (super(null, Vt, !Ht, void 0, Et, void 0, void 0, void 0, void 0, Mt), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new Ot.c, this.onAfterUnbindObservable = new Ot.c, this.onClearObservable = new Ot.c, this.onResizeObservable = new Ot.c, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = qt.n.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(Vt = this.vI())) return;
        const Wt = this.vI().Jf();
        this._gammaSpace = ht, this._coordinatesMode = Dt.f.PROJECTION_MODE, this.name = tt, this.isRenderTarget = !0, this._initialSizeParameter = et, this._dontDisposeObjectRenderer = !!dt, this._processSizeParameter(et), this._objectRenderer = dt ?? new wt(tt, Vt, {
          numPasses: lt ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: Xt,
          enableClusteredLights: vt
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const tt = this._scene;
          if (!this._disableEngineStages)
            for (const et of tt._beforeRenderTargetClearStage) et.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(Wt) : this.skipInitialClear || Wt.clear(this.clearColor ?? tt.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || tt.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const et of tt._beforeRenderTargetDrawStage) et.action(this, this._currentFaceIndex, this._currentLayer);
          Wt._debugPushGroup && Wt._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (Wt._debugPopGroup && Wt._debugPopGroup(), !this._disableEngineStages)
            for (const et of this._scene._afterRenderTargetDrawStage) et.action(this, this._currentFaceIndex, this._currentLayer);
          const tt = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const et of this._scene._afterRenderTargetPostProcessStage) et.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = tt), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), Wt) : jt.d.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(Wt) : this.skipInitialClear || Wt.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = Wt.onResizeObservable.add((() => {})), this._generateMipMaps = !!Ht, this._doNotChangeAspectRatio = Xt, Nt || (this._renderTargetOptions = {
          generateMipMaps: Ht,
          type: Qt,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: ft,
          generateStencilBuffer: yt,
          samples: Jt,
          creationFlags: Ct,
          noColorAttachment: ut,
          useSRGBBuffer: Kt,
          colorAttachment: mt,
          label: this.name
        }, this.samplingMode === Dt.f.NEAREST_SAMPLINGMODE && (this.wrapU = Dt.f.CLAMP_ADDRESSMODE, this.wrapV = Dt.f.CLAMP_ADDRESSMODE), bt || (lt ? (this._renderTarget = Vt.Jf().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = Dt.f.INVCUBIC_MODE, this._textureMatrix = qt.c.Identity()) : this._renderTarget = Vt.Jf().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== Jt && (this.samples = Jt)))
      }
      createDepthStencilTexture() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Dt = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(tt, et, Vt, Ot, qt, Dt)
      }
      _processSizeParameter(tt) {
        if (tt.ratio) {
          this._sizeRatio = tt.ratio;
          const et = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(et.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(et.getRenderHeight(), this._sizeRatio)
          }
        } else this._size = tt
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples
      }
      set samples(tt) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(tt))
      }
      addPostProcess(tt) {
        if (!this._postProcessManager) {
          const tt = this.vI();
          if (!tt) return;
          this._postProcessManager = new mt.b(tt), this._postProcesses = new Array
        }
        this._postProcesses.push(tt), this._postProcesses[0].autoClear = !1
      }
      clearPostProcesses() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (tt)
            for (const tt of this._postProcesses) tt.dispose();
          this._postProcesses = []
        }
      }
      removePostProcess(tt) {
        if (!this._postProcesses) return;
        const et = this._postProcesses.indexOf(tt); - 1 !== et && (this._postProcesses.splice(et, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter()
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate
      }
      set refreshRate(tt) {
        this._objectRenderer.refreshRate = tt
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
        const tt = this._size.layers;
        if (tt) return tt;
        const et = this._size.depth;
        return et || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(tt) {
        const et = Math.max(1, this.getRenderSize() * tt);
        this.resize(et)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(tt) {
        const et = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const Vt = this.vI();
        Vt && (this._processSizeParameter(tt), this._renderTarget = et ? Vt.Jf().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : Vt.Jf().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(tt, et)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => Vt(42085))).then((tt => this._dumpTools = tt))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const tt = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), tt
      }
      _render() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Vt = this.vI();
        if (!Vt) return;
        void 0 !== this.useCameraPostProcesses && (tt = this.useCameraPostProcesses);
        const Ot = Vt.Jf();
        if (Ot._debugPushGroup && Ot._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let qt = 0; qt < 6; qt++) this._renderToTarget(qt, tt, et), Vt.incrementRenderId(), Vt.resetCachedMaterial();
          else this._renderToTarget(0, tt, et);
        else
          for (let qt = 0; qt < this.getRenderLayers(); qt++) this._renderToTarget(0, tt, et, qt), Vt.incrementRenderId(), Vt.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), Ot._debugPopGroup && Ot._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(tt, et) {
        const Vt = tt * et,
          Ot = (0, dt.n)(Vt + 16384 / (128 + Vt));
        return Math.min((0, dt.e)(tt), Ot)
      }
      _bindFrameBuffer() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Vt = this.vI();
        if (!Vt) return;
        const Ot = Vt.Jf();
        this._renderTarget && Ot.bindFramebuffer(this._renderTarget, this.isCube ? tt : void 0, void 0, void 0, this.ignoreCameraViewport, 0, et)
      }
      _unbindFrameBuffer(tt, et) {
        this._renderTarget && tt.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(et)
        }))
      }
      _prepareFrame(tt, et, Vt, Ot) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(et, Vt) : Ot && tt.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(et, Vt)
      }
      _renderToTarget(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const qt = this.vI();
        if (!qt) return;
        const Dt = qt.Jf();
        this._currentFaceIndex = tt, this._currentLayer = Ot, this._currentUseCameraPostProcess = et, this._currentDumpForDebug = Vt, this._prepareFrame(qt, tt, Ot, et), this._objectRenderer.render(tt + Ot, !0), this._unbindFrameBuffer(Dt, tt), this._texture && this.isCube && 5 === tt && Dt.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(tt, et, Vt, Ot)
      }
      setRenderingAutoClearDepthStencil(tt, et) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(tt, et)
      }
      clone() {
        const tt = this.getSize(),
          et = new Nt(this.name, tt, this.vI(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return et.hasAlpha = this.hasAlpha, et.level = this.level, et.coordinatesMode = this.coordinatesMode, this.renderList && (et.renderList = this.renderList.slice(0)), et
      }
      serialize() {
        if (!this.name) return null;
        const tt = super.serialize();
        if (tt.renderTargetSize = this.getRenderSize(), tt.renderList = [], this.renderList)
          for (let et = 0; et < this.renderList.length; et++) tt.renderList.push(this.renderList[et].id);
        return tt
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.vI().Jf().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const tt = this.vI();
        if (!tt) return;
        let et = tt.customRenderTargets.indexOf(this);
        et >= 0 && tt.customRenderTargets.splice(et, 1);
        for (const Vt of tt.cameras) et = Vt.customRenderTargets.indexOf(this), et >= 0 && Vt.customRenderTargets.splice(et, 1);
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
    Nt.REFRESHRATE_RENDER_ONCE = wt.REFRESHRATE_RENDER_ONCE, Nt.REFRESHRATE_RENDER_ONEVERYFRAME = wt.REFRESHRATE_RENDER_ONEVERYFRAME, Nt.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = wt.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(Nt.prototype, "noPrePassRenderer") || Object.defineProperty(Nt.prototype, "noPrePassRenderer", (0, yt.c)("RenderTargetTexture", "noPrePassRenderer"))
  },
  42065: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ht,
      d: () => Xt
    });
    var Ot = Vt(40343),
      qt = Vt(38340),
      Dt = Vt(37367),
      mt = Vt(40052),
      dt = Vt(40512);
    const jt = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class Ht {
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jt;
        this._fullscreenViewport = new qt.c(0, 0, 1, 1);
        const Vt = et.positions ?? jt.positions,
          Dt = et.indices ?? jt.indices;
        this.engine = tt, this._vertexBuffers = {
          [Ot.m.PositionKind]: new Ot.m(tt, Vt, Ot.m.PositionKind, !1, !1, 2)
        }, this._indexBuffer = tt.createIndexBuffer(Dt), this._indexBufferLength = Dt.length, this._onContextRestoredObserver = tt.bf.add((() => {
          this._indexBuffer = tt.createIndexBuffer(Dt);
          for (const tt in this._vertexBuffers) {
            this._vertexBuffers[tt]._rebuild()
          }
        }))
      }
      setViewport() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.engine.setViewport(tt)
      }
      bindBuffers(tt) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, tt)
      }
      applyEffectWrapper(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = et, this.engine.stencilState.stencilTest = Vt, this.engine.enableEffect(tt.drawWrapper), this.bindBuffers(tt.effect), tt.onApplyObservable.notifyObservers({})
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
      _isRenderTargetTexture(tt) {
        return void 0 !== tt.renderTarget
      }
      render(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!tt.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const Vt = null === et ? null : this._isRenderTargetTexture(et) ? et.renderTarget : et;
        Vt && this.engine.bindFramebuffer(Vt), this.applyEffectWrapper(tt), this.draw(), Vt && this.engine.unBindFramebuffer(Vt), this.restoreStates()
      }
      dispose() {
        const tt = this._vertexBuffers[Ot.m.PositionKind];
        tt && (tt.dispose(), delete this._vertexBuffers[Ot.m.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.bf.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class Xt {
      static RegisterShaderCodeProcessing(tt, et) {
        et ? Xt._CustomShaderCodeProcessing[tt ?? ""] = et : delete Xt._CustomShaderCodeProcessing[tt ?? ""]
      }
      static _GetShaderCodeProcessing(tt) {
        return Xt._CustomShaderCodeProcessing[tt] ?? Xt._CustomShaderCodeProcessing[""]
      }
      get name() {
        return this.options.name
      }
      set name(tt) {
        this.options.name = tt
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
      set effect(tt) {
        this._drawWrapper.effect = tt
      }
      constructor(tt) {
        this.alphaMode = 0, this.onEffectCreatedObservable = new Dt.c(void 0, !0), this.onApplyObservable = new Dt.c, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
          ...tt,
          name: tt.name || "effectWrapper",
          engine: tt.engine,
          uniforms: tt.uniforms || tt.uniformNames || [],
          uniformNames: void 0,
          samplers: tt.samplers || tt.samplerNames || [],
          samplerNames: void 0,
          attributeNames: tt.attributeNames || ["position"],
          uniformBuffers: tt.uniformBuffers || [],
          defines: tt.defines || "",
          useShaderStore: tt.useShaderStore || !1,
          vertexUrl: tt.vertexUrl || tt.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: tt.fragmentShader || "pass",
          indexParameters: tt.indexParameters,
          blockCompilation: tt.blockCompilation || !1,
          shaderLanguage: tt.shaderLanguage || 0,
          onCompiled: tt.onCompiled || void 0,
          extraInitializations: tt.extraInitializations || void 0,
          extraInitializationsAsync: tt.extraInitializationsAsync || void 0,
          useAsPostProcess: tt.useAsPostProcess ?? !1,
          allowEmptySourceTexture: tt.allowEmptySourceTexture ?? !1
        }, this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), tt.vertexUrl || tt.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add((() => {
          this.effect.setFloat2("scale", 1, 1)
        }))), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add((() => {
          this.bind()
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.bf.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new dt.c(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const et = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, et, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ot = arguments.length > 2 ? arguments[2] : void 0,
          qt = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, qt && this._importPromises.push(...qt);
        const Dt = this.options.engine.isWebGPU && !Xt.ForceGLSL;
        this._gatherImports(Dt, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(Dt && this._webGPUReady ? Vt.e(368).then((() => Vt(61652))) : Vt.e(358).then((() => Vt(61532)))), void 0 !== Ot && Ot(Dt, this._importPromises), Dt && this._webGPUReady && (this.options.shaderLanguage = 1), tt || this.updateEffect(et)
      }
      updateEffect() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ot = arguments.length > 3 ? arguments[3] : void 0,
          qt = arguments.length > 4 ? arguments[4] : void 0,
          Dt = arguments.length > 5 ? arguments[5] : void 0,
          dt = arguments.length > 6 ? arguments[6] : void 0,
          jt = arguments.length > 7 ? arguments[7] : void 0;
        const Ht = Xt._GetShaderCodeProcessing(this.name);
        if (Ht?.defineCustomBindings) {
          const Ot = et?.slice() ?? [];
          Ot.push(...this.options.uniforms);
          const qt = Vt?.slice() ?? [];
          qt.push(...this.options.samplers), tt = Ht.defineCustomBindings(this.name, tt, Ot, qt), et = Ot, Vt = qt
        }
        this.options.defines = tt || "";
        const Qt = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let lt;
        lt = this.options.extraInitializationsAsync ? async () => {
          await (Qt?.()), await this.options.extraInitializationsAsync()
        }: Qt, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: dt ?? this._shaderPath.vertex,
          fragment: jt ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: et || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: Vt || this.options.samplers,
          defines: null !== tt ? tt : "",
          fallbacks: null,
          onCompiled: qt ?? this.options.onCompiled,
          onError: Dt ?? null,
          indexParameters: Ot || this.options.indexParameters,
          processCodeAfterIncludes: Ht?.processCodeAfterIncludes ? (tt, et) => Ht.processCodeAfterIncludes(this.name, tt, et) : null,
          processFinalCode: Ht?.processFinalCode ? (tt, et) => Ht.processFinalCode(this.name, tt, et) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: lt
        }, this.options.engine) : this._drawWrapper.effect = new mt.b(this._shaderPath, this.options.attributeNames, et || this.options.uniforms, Vt || this.options.samplerNames, this.options.engine, tt, void 0, qt || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, lt), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !tt && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), Xt._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.Jf().bf.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    Xt.ForceGLSL = !1, Xt._CustomShaderCodeProcessing = {}
  },
  42085: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      Dispose: () => Mt,
      DumpData: () => Nt,
      DumpDataAsync: () => yt,
      DumpFramebuffer: () => wt,
      DumpTools: () => bt,
      EncodeImageAsync: () => ft,
      RegisterDumpTools: () => Ct
    });
    var Ot = Vt(40211),
      qt = Vt(42065),
      Dt = Vt(40300),
      mt = Vt(37372),
      dt = Vt(37359),
      jt = Vt(38899),
      Ht = Vt(40261),
      Xt = Vt(40213);
    let Qt = null;
    async function lt() {
      return Qt || (Qt = async function() {
        const tt = dt.d.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        tt instanceof OffscreenCanvas && jt.d.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: et
        } = await Promise.resolve().then((() => Vt(40048)));
        if (!et.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const Ot = new et(tt, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        dt.d.Instances.pop(), dt.d.OnEnginesDisposedObservable.add((tt => {
          Ot && tt !== Ot && !Ot.bC && 0 === dt.d.Instances.length && Mt()
        })), Ot.getCaps().parallelShaderCompile = void 0;
        const Dt = new qt.b(Ot),
          {
            passPixelShader: mt
          } = await Vt.e(376).then((() => Vt(61688))),
          Ht = new qt.d({
            engine: Ot,
            name: mt.name,
            fragmentShader: mt.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: tt,
          dumpEngine: {
            engine: Ot,
            renderer: Dt,
            wrapper: Ht
          }
        }
      }()), await Qt
    }
    let Et = (() => {
      var tt;
      let et, Vt = [];
      return tt = class {
        static async EncodeImageAsync(tt, et, Vt, Ot, qt, mt) {
          const dt = await lt(),
            jt = dt.dumpEngine;
          jt.engine.setSize(et, Vt, !0);
          const Ht = jt.engine.createRawTexture(tt, et, Vt, 5, !1, !qt, 1);
          return jt.renderer.setViewport(), jt.renderer.applyEffectWrapper(jt.wrapper), jt.wrapper.effect._bindTexture("textureSampler", Ht), jt.renderer.draw(), Ht.dispose(), await new Promise(((tt, et) => {
            Dt.l.ToBlob(dt.canvas, (Vt => {
              Vt ? tt(Vt) : et(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), Ot, mt)
          }))
        }
      }, (() => {
        const qt = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        et = [Xt.l], (0, Ot.l)(tt, null, et, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: tt => "EncodeImageAsync" in tt,
            get: tt => tt.EncodeImageAsync
          },
          metadata: qt
        }, null, Vt), qt && Object.defineProperty(tt, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: qt
        }), (0, Ot.m)(tt, Vt)
      })(), tt
    })();
    const ft = Et.EncodeImageAsync;
    async function wt(tt, et, Vt, Ot) {
      let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Dt = arguments.length > 5 ? arguments[5] : void 0,
        mt = arguments.length > 6 ? arguments[6] : void 0;
      const dt = await Vt.readPixels(0, 0, tt, et);
      Nt(tt, et, new Uint8Array(dt.buffer), Ot, qt, Dt, !0, void 0, mt)
    }
    async function yt(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        qt = arguments.length > 4 ? arguments[4] : void 0,
        dt = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Xt = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Qt = arguments.length > 7 ? arguments[7] : void 0;
      if (Vt instanceof Float32Array) {
        const tt = new Uint8Array(Vt.length);
        let et = Vt.length;
        for (; et--;) {
          const Ot = Vt[et];
          tt[et] = Math.round(255 * (0, mt.Clamp)(Ot))
        }
        Vt = tt
      }
      const lt = await Et.EncodeImageAsync(Vt, tt, et, Ot, dt, Qt);
      void 0 !== qt && Dt.l.DownloadBlob(lt, qt), lt.type !== Ot && jt.d.Warn(`DumpData: The requested mimeType '${Ot}' is not supported. The result has mimeType '${lt.type}' instead.`);
      const ft = await lt.arrayBuffer();
      return Xt ? ft : `data:${Ot};base64,${(0,Ht.j)(ft)}`
    }

    function Nt(tt, et, Vt, Ot) {
      let qt = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== qt || Ot || (qt = ""), yt(tt, et, Vt, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", qt, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((tt => {
        Ot && Ot(tt)
      }))
    }

    function Mt() {
      Qt && (Qt?.then((tt => {
        tt.canvas instanceof HTMLCanvasElement && tt.canvas.remove(), tt.dumpEngine && (tt.dumpEngine.engine.dispose(), tt.dumpEngine.renderer.dispose(), tt.dumpEngine.wrapper.dispose())
      })), Qt = null)
    }
    const bt = {
      DumpData: Nt,
      DumpDataAsync: yt,
      DumpFramebuffer: wt,
      Dispose: Mt
    };
    let Jt = !1;

    function Ct() {
      if (Jt) return;
      Jt = !0;
      Dt.l.DumpData = Nt, Dt.l.DumpDataAsync = yt, Dt.l.DumpFramebuffer = wt
    }
  },
  42074: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Et,
      i: () => ft,
      m: () => wt
    });
    var Ot = Vt(40661),
      qt = Vt(42076),
      Dt = Vt(40211),
      mt = Vt(42062),
      dt = Vt(40230),
      jt = Vt(42078),
      Ht = Vt(40213);
    class Xt extends mt.d {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(tt, et) {
        let Vt = arguments.length > 4 ? arguments[4] : void 0;
        const Ot = {
          size: "number" === typeof et ? et : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: Vt,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...et
        };
        super(tt, jt.g.FragmentUrl, {
          effectWrapper: "number" !== typeof et && et.effectWrapper ? void 0 : new jt.g(tt, Vt, Ot),
          ...Ot
        })
      }
      static _Parse(tt, et, Vt, Ot) {
        return dt.d.Parse((() => new Xt(tt.name, tt.options, et, tt.renderTargetSamplingMode, tt._engine, tt.reusable)), tt, Vt, Ot)
      }
    }(() => {
      var tt;
      let et, Vt = mt.d,
        Ot = [];
      tt = class extends Vt {
        get face() {
          return this._effectWrapper.face
        }
        set face(tt) {
          this._effectWrapper.face = tt
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(tt, et) {
          let Vt = arguments.length > 4 ? arguments[4] : void 0;
          const qt = {
            size: "number" === typeof et ? et : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: Vt,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...et
          };
          super(tt, jt.g.FragmentUrl, {
            effectWrapper: "number" !== typeof et && et.effectWrapper ? void 0 : new jt.c(tt, Vt, qt),
            ...qt
          }), (0, Dt.m)(this, Ot)
        }
        static _Parse(et, Vt, Ot, qt) {
          return dt.d.Parse((() => new tt(et.name, et.options, Vt, et.renderTargetSamplingMode, et._engine, et.reusable)), et, Ot, qt)
        }
      }, (() => {
        const qt = "function" === typeof Symbol && Symbol.metadata ? Object.create(Vt[Symbol.metadata] ?? null) : void 0;
        et = [(0, Ht.P)()], (0, Dt.l)(tt, null, et, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: tt => "face" in tt,
            get: tt => tt.face
          },
          metadata: qt
        }, null, Ot), qt && Object.defineProperty(tt, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: qt
        })
      })()
    })();
    var Qt = Vt(37372),
      lt = Vt(40272);

    function Et(tt, et, Vt, Ot, qt, Dt, dt, jt) {
      const Ht = et.Jf();
      return et.isReady = !1, qt = qt ?? et.samplingMode, Ot = Ot ?? et.type, Dt = Dt ?? et.format, dt = dt ?? et.width, jt = jt ?? et.height, -1 === Ot && (Ot = 0), new Promise((Xt => {
        const Qt = new mt.d("postprocess", tt, null, null, 1, null, qt, Ht, !1, void 0, Ot, void 0, null, !1, Dt);
        Qt.externalTextureSamplerBinding = !0;
        const lt = Ht.createRenderTargetTexture({
          width: dt,
          height: jt
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: qt,
          type: Ot,
          format: Dt
        });
        Qt.onEffectCreatedObservable.addOnce((tt => {
          tt.executeWhenCompiled((() => {
            Qt.onApply = tt => {
              tt._bindTexture("textureSampler", et), tt.setFloat2("scale", 1, 1)
            }, Vt.postProcessManager.directRender([Qt], lt, !0), Ht.restoreDefaultFramebuffer(), Ht._releaseTexture(et), Qt && Qt.dispose(), lt._swapAndDie(et), et.type = Ot, et.format = 5, et.isReady = !0, Xt(et)
          }))
        }))
      }))
    }
    async function ft(tt, et, Dt) {
      let dt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        jt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Ht = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Xt = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(tt) {
        if (tt.isReady()) return;
        if (tt.loadingError) throw new Error(tt.errorObject?.message || `Texture ${tt.name} errored while loading.`);
        const et = tt.onLoadObservable;
        if (et) return await new Promise((tt => et.addOnce((() => tt()))));
        const Vt = tt._texture?.onLoadedObservable;
        if (Vt) return await new Promise((tt => Vt.addOnce((() => tt()))));
        throw new Error(`Cannot determine readiness of texture ${tt.name}.`)
      }(tt);
      const lt = tt.getInternalTexture(),
        Et = tt.is3D || !!lt?.is3D,
        {
          width: ft,
          height: wt
        } = tt.getSize(),
        yt = et ?? ft,
        Nt = Dt ?? wt;
      if (Ht || Et || function(tt) {
          switch (tt) {
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
        }(tt.textureFormat) || yt !== ft || Nt !== wt) {
        if (tt.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${Ht?"RTT":"compression"} is not supported.`);
        return await async function(tt, et, Dt, dt, jt) {
          let Ht = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const Xt = tt.vI(),
            Qt = Xt.Jf(),
            lt = tt.getInternalTexture(),
            Et = tt.is3D || !!lt?.is3D;
          let ft;
          if (Qt.isWebGPU ? Et ? await Vt.e(372).then((() => Vt(61676))) : tt.isCube ? await Vt.e(373).then((() => Vt(61678))) : await Vt.e(374).then((() => Vt(61680))) : Et ? await Vt.e(369).then((() => Vt(61663))) : tt.isCube ? await Vt.e(370).then((() => Vt(61665))) : await Vt.e(371).then((() => Vt(61673))), Et) ft = new mt.d("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: Ot.f.NEAREST_NEAREST_MIPNEAREST,
            engine: Qt,
            shaderLanguage: Qt.isWebGPU ? 1 : 0
          });
          else if (tt.isCube) {
            const tt = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            ft = new mt.d("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: Ot.f.NEAREST_NEAREST_MIPNEAREST,
              engine: Qt,
              defines: tt[dt],
              shaderLanguage: Qt.isWebGPU ? 1 : 0
            })
          } else ft = new mt.d("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: Ot.f.NEAREST_NEAREST_MIPNEAREST,
            engine: Qt,
            shaderLanguage: Qt.isWebGPU ? 1 : 0
          });
          await new Promise((tt => {
            ft.onEffectCreatedObservable.addOnce((et => {
              et.executeWhenCompiled((() => {
                tt(0)
              }))
            }))
          }));
          const wt = new qt.d("temp", {
            width: et,
            height: Dt
          }, Xt, !1);
          ft.onApply = function(et) {
            et.setTexture("textureSampler", tt), et.setFloat("lod", jt), et.setInt("gamma", tt.gammaSpace ? 1 : 0), Et && et.setFloat("slice", Ht)
          };
          try {
            if (wt.renderTarget && lt) {
              const Vt = lt.samplingMode;
              0 !== jt ? tt.updateSamplingMode(Ot.f.NEAREST_NEAREST_MIPNEAREST) : tt.updateSamplingMode(Ot.f.NEAREST_NEAREST), Xt.postProcessManager.directRender([ft], wt.renderTarget, !0), tt.updateSamplingMode(Vt);
              const qt = await Qt.readPixels(0, 0, et, Dt),
                mt = new Uint8Array(qt.buffer, qt.byteOffset, qt.byteLength);
              return Qt.unBindFramebuffer(wt.renderTarget), mt
            }
            throw Error("Render to texture failed.")
          } finally {
            wt.dispose(), ft.dispose()
          }
        }(tt, yt, Nt, dt, jt, Xt)
      }
      let Mt = await tt.readPixels(dt, jt);
      if (!Mt) throw new Error(`Failed to read pixels from texture ${tt.name}.`);
      if (Mt instanceof Float32Array) {
        const tt = new Uint8Array(Mt.length);
        let et = Mt.length;
        for (; et--;) {
          const Vt = Mt[et];
          tt[et] = Math.round(255 * (0, Qt.Clamp)(Vt))
        }
        Mt = tt
      }
      const bt = yt * Nt,
        Jt = 4 * bt;
      if (Mt.length !== Jt) {
        const tt = 0 === bt ? 0 : Mt.length / bt;
        if (1 === tt || 2 === tt || 3 === tt) {
          const et = new Uint8Array(Jt);
          for (let Vt = 0, Ot = 0, qt = 0; Vt < bt; Vt++, qt += 4) {
            const Vt = Mt[Ot++];
            if (1 === tt) {
              et[qt] = Vt, et[qt + 1] = Vt, et[qt + 2] = Vt, et[qt + 3] = 255;
              continue
            }
            const Dt = Mt[Ot++];
            2 !== tt ? (et[qt] = Vt, et[qt + 1] = Dt, et[qt + 2] = Mt[Ot++], et[qt + 3] = 255) : (et[qt] = Vt, et[qt + 1] = Dt, et[qt + 2] = 0, et[qt + 3] = 255)
          }
          return et
        }
      }
      return Mt
    }
    const wt = {
      CreateResizedCopy: function(tt, et, Vt) {
        let Dt = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const mt = tt.vI(),
          dt = mt.Jf(),
          jt = new qt.d("resized" + tt.name, {
            width: et,
            height: Vt
          }, mt, !tt.noMipmap, !0, tt._texture.type, !1, tt.samplingMode, !1);
        jt.wrapU = tt.wrapU, jt.wrapV = tt.wrapV, jt.uOffset = tt.uOffset, jt.vOffset = tt.vOffset, jt.uScale = tt.uScale, jt.vScale = tt.vScale, jt.uAng = tt.uAng, jt.vAng = tt.vAng, jt.wAng = tt.wAng, jt.coordinatesIndex = tt.coordinatesIndex, jt.level = tt.level, jt.anisotropicFilteringLevel = tt.anisotropicFilteringLevel, jt._texture.isReady = !1, tt.wrapU = Ot.f.CLAMP_ADDRESSMODE, tt.wrapV = Ot.f.CLAMP_ADDRESSMODE;
        const Ht = new Xt("pass", 1, null, Dt ? Ot.f.BILINEAR_SAMPLINGMODE : Ot.f.NEAREST_SAMPLINGMODE, dt, !1, 0);
        return Ht.externalTextureSamplerBinding = !0, Ht.onEffectCreatedObservable.addOnce((et => {
          et.executeWhenCompiled((() => {
            Ht.onApply = function(et) {
              et.setTexture("textureSampler", tt)
            };
            const et = jt.renderTarget;
            et && (mt.postProcessManager.directRender([Ht], et), dt.unBindFramebuffer(et), jt.disposeFramebufferObjects(), Ht.dispose(), jt.getInternalTexture().isReady = !0)
          }))
        })), jt
      },
      ApplyPostProcess: Et,
      ToHalfFloat: lt.k,
      FromHalfFloat: lt.e,
      GetTextureDataAsync: ft
    }
  },
  42062: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => ft
    });
    var Ot = Vt(40211),
      qt = Vt(40311),
      Dt = Vt(37367),
      mt = Vt(37336),
      dt = Vt(40052),
      jt = Vt(40213),
      Ht = Vt(40230),
      Xt = Vt(37390),
      Qt = Vt(40092),
      lt = Vt(40131),
      Et = Vt(42065);
    let ft = (() => {
        var tt;
        let et, dt, Qt, ft, wt, Nt, Mt, bt, Jt, Ct, ut, Kt, ht, vt, Wt, St, ct = [],
          Rt = [],
          It = [],
          Pt = [],
          Zt = [],
          Lt = [],
          Ft = [],
          kt = [],
          Gt = [],
          zt = [],
          ot = [],
          rt = [],
          Ut = [],
          At = [],
          it = [],
          Yt = [],
          Bt = [],
          pt = [],
          xt = [],
          Tt = [],
          gt = [],
          st = [],
          nt = [],
          te = [],
          ee = [],
          Ve = [],
          Oe = [],
          qe = [],
          De = [];
        return tt = class {
          static get ForceGLSL() {
            return Et.d.ForceGLSL
          }
          static set ForceGLSL(tt) {
            Et.d.ForceGLSL = tt
          }
          static RegisterShaderCodeProcessing(tt, et) {
            Et.d.RegisterShaderCodeProcessing(tt, et)
          }
          get name() {
            return this._effectWrapper.name
          }
          set name(tt) {
            this._effectWrapper.name = tt
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode
          }
          set alphaMode(tt) {
            this._effectWrapper.alphaMode = tt
          }
          get samples() {
            return this._samples
          }
          set samples(tt) {
            this._samples = Math.min(tt, this._engine.getCaps().maxMSAASamples), this._textures.forEach((tt => {
              tt.setSamples(this._samples)
            }))
          }
          get shaderLanguage() {
            return this._shaderLanguage
          }
          getEffectName() {
            return this._fragmentUrl
          }
          set onActivate(tt) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), tt && (this._onActivateObserver = this.onActivateObservable.add(tt))
          }
          set onSizeChanged(tt) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(tt)
          }
          set onApply(tt) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(tt)
          }
          set onBeforeRender(tt) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(tt)
          }
          set onAfterRender(tt) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(tt)
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd]
          }
          set inputTexture(tt) {
            this._forcedOutputTexture = tt
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty())
          }
          getCamera() {
            return this.wT
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.W9(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(et, Vt, dt, jt, Ht, Xt) {
            let Qt = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              lt = arguments.length > 7 ? arguments[7] : void 0,
              ft = arguments.length > 8 ? arguments[8] : void 0,
              wt = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              Nt = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              Mt = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              bt = arguments.length > 12 ? arguments[12] : void 0,
              Jt = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              Ct = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              ut = arguments.length > 15 ? arguments[15] : void 0,
              Kt = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, Ot.m)(this, ct), null), this.uniqueId = (0, Ot.m)(this, Rt, void 0), this.width = ((0, Ot.m)(this, It), (0, Ot.m)(this, Pt, -1)), this.height = ((0, Ot.m)(this, Zt), (0, Ot.m)(this, Lt, -1)), this.nodeMaterialSource = ((0, Ot.m)(this, Ft), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, Ot.m)(this, kt, void 0), this.clearColor = ((0, Ot.m)(this, Gt), (0, Ot.m)(this, zt, void 0)), this.autoClear = ((0, Ot.m)(this, ot), (0, Ot.m)(this, rt, !0)), this.forceAutoClearInAlphaMode = ((0, Ot.m)(this, Ut), (0, Ot.m)(this, At, !1)), this.alphaConstants = ((0, Ot.m)(this, it), (0, Ot.m)(this, Yt, void 0)), this.animations = ((0, Ot.m)(this, Bt), []), this.enablePixelPerfectMode = (0, Ot.m)(this, pt, !1), this.forceFullscreenViewport = ((0, Ot.m)(this, xt), (0, Ot.m)(this, Tt, !0)), this.inspectableCustomProperties = (0, Ot.m)(this, gt), this.scaleMode = (0, Ot.m)(this, st, 1), this.alwaysForcePOT = ((0, Ot.m)(this, nt), (0, Ot.m)(this, te, !1)), this._samples = ((0, Ot.m)(this, ee), (0, Ot.m)(this, Ve, 1)), this.adaptScaleToCurrentViewport = ((0, Ot.m)(this, Oe), (0, Ot.m)(this, qe, !1)), this.doNotSerialize = ((0, Ot.m)(this, De), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new qt.g(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new mt.m(1, 1), this._texelSize = mt.m.Zero(), this.onActivateObservable = new Dt.c, this.onSizeChangedObservable = new Dt.c, this.onApplyObservable = new Dt.c, this.onBeforeRenderObservable = new Dt.c, this.onAfterRenderObservable = new Dt.c, this.ZI = new Dt.c, yt();
            let ht, vt = 1,
              Wt = null;
            if (dt && !Array.isArray(dt)) {
              const tt = dt;
              dt = tt.uniforms ?? null, jt = tt.samplers ?? null, vt = tt.size ?? 1, Xt = tt.camera ?? null, Qt = tt.samplingMode ?? 1, lt = tt.engine, ft = tt.reusable, wt = Array.isArray(tt.defines) ? tt.defines.join("\n") : tt.defines ?? null, Nt = tt.textureType ?? 0, Mt = tt.vertexUrl ?? "postprocess", bt = tt.indexParameters, Jt = tt.blockCompilation ?? !1, Ct = tt.textureFormat ?? 5, ut = tt.shaderLanguage ?? 0, Wt = tt.uniformBuffers ?? null, Kt = tt.extraInitializations, ht = tt.effectWrapper
            } else Ht && (vt = "number" === typeof Ht ? Ht : {
              width: Ht.width,
              height: Ht.height
            });
            if (this._useExistingThinPostProcess = !!ht, this._effectWrapper = ht ?? new Et.d({
                name: et,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: Vt,
                engine: lt || Xt?.vI().Jf(),
                uniforms: dt,
                samplers: jt,
                uniformBuffers: Wt,
                defines: wt,
                vertexUrl: Mt,
                indexParameters: bt,
                blockCompilation: !0,
                shaderLanguage: ut,
                extraInitializations: void 0
              }), this.name = et, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != Xt ? (this.wT = Xt, this._scene = Xt.vI(), Xt.attachPostProcess(this), this._engine = this._scene.Jf(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : lt && (this._engine = lt, this._engine.postProcesses.push(this)), this._options = vt, this.renderTargetSamplingMode = Qt || 1, this._reusable = ft || !1, this._textureType = Nt, this._textureFormat = Ct, this._shaderLanguage = ut || 0, this._samplers = jt || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = Vt, this._vertexUrl = Mt, this._parameters = dt || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = Wt || [], this._indexParameters = bt, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const et = [];
              this._gatherImports(this._engine.isWebGPU && !tt.ForceGLSL, et), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(Jt, wt, Kt, et)
            }
          }
          _gatherImports() {
            let tt = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? tt.push(Promise.all([Vt.e(368).then((() => Vt(61652)))])) : tt.push(Promise.all([Vt.e(358).then((() => Vt(61532)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          Jf() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(tt) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = tt, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new qt.g(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Ot = arguments.length > 3 ? arguments[3] : void 0,
              qt = arguments.length > 4 ? arguments[4] : void 0,
              Dt = arguments.length > 5 ? arguments[5] : void 0,
              mt = arguments.length > 6 ? arguments[6] : void 0,
              dt = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(tt, et, Vt, Ot, qt, Dt, mt, dt), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(tt, et) {
            let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let qt = 0; qt < this._textureCache.length; qt++)
              if (this._textureCache[qt].texture.width === tt.width && this._textureCache[qt].texture.height === tt.height && this._textureCache[qt].postProcessChannel === Vt && this._textureCache[qt].texture._generateDepthBuffer === et.generateDepthBuffer && this._textureCache[qt].texture.samples === et.samples) return this._textureCache[qt].texture;
            const Ot = this._engine.createRenderTargetTexture(tt, et);
            return this._textureCache.push({
              texture: Ot,
              postProcessChannel: Vt,
              lastUsedRenderId: -1
            }), Ot
          }
          _flushTextureCache() {
            const tt = this._renderId;
            for (let et = this._textureCache.length - 1; et >= 0; et--)
              if (tt - this._textureCache[et].lastUsedRenderId > 100) {
                let tt = !1;
                for (let Vt = 0; Vt < this._textures.length; Vt++)
                  if (this._textures.data[Vt] === this._textureCache[et].texture) {
                    tt = !0;
                    break
                  } tt || (this._textureCache[et].texture.dispose(), this._textureCache.splice(et, 1))
              }
          }
          resize(tt, et) {
            let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              qt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = tt, this.height = et;
            let Dt = null;
            if (Vt)
              for (let jt = 0; jt < Vt._postProcesses.length; jt++)
                if (null !== Vt._postProcesses[jt]) {
                  Dt = Vt._postProcesses[jt];
                  break
                } const mt = {
                width: this.width,
                height: this.height
              },
              dt = {
                generateMipMaps: Ot,
                generateDepthBuffer: qt || Dt === this,
                generateStencilBuffer: (qt || Dt === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(mt, dt, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(mt, dt, 1)), this._texelSize.W9(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let tt;
            if (this._shareOutputWithPostProcess) tt = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) tt = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let et;
              tt = this.inputTexture;
              for (let Vt = 0; Vt < this._textureCache.length; Vt++)
                if (this._textureCache[Vt].texture === tt) {
                  et = this._textureCache[Vt];
                  break
                } et && (et.lastUsedRenderId = this._renderId)
            }
            return tt
          }
          activate(tt) {
            let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              Vt = arguments.length > 2 ? arguments[2] : void 0;
            const Ot = null === tt || void 0 !== tt.cameraRigMode ? tt || this.wT : null,
              qt = Ot?.vI() ?? tt,
              Dt = qt.Jf(),
              mt = Dt.getCaps().maxTextureSize,
              dt = (et ? et.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              jt = (et ? et.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let Ht = this._options.width || dt,
              Xt = this._options.height || jt;
            const Qt = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let Et = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const tt = Dt.currentViewport;
                tt && (Ht *= tt.width, Xt *= tt.height)
              }(Qt || this.alwaysForcePOT) && (this._options.width || (Ht = Dt.needPOTTextures ? (0, lt.g)(Ht, mt, this.scaleMode) : Ht), this._options.height || (Xt = Dt.needPOTTextures ? (0, lt.g)(Xt, mt, this.scaleMode) : Xt)), this.width === Ht && this.height === Xt && (Et = this._getTarget()) || this.resize(Ht, Xt, Ot, Qt, Vt), this._textures.forEach((tt => {
                tt.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(tt, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return Et || (Et = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.W9(dt / Ht, jt / Xt), this._engine.bindFramebuffer(Et, 0, dt, jt, this.forceFullscreenViewport)) : (this._scaleRatio.W9(1, 1), this._engine.bindFramebuffer(Et, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(Ot), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : qt.clearColor, qt._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), Et
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
            let tt;
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.Jf().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), tt = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", tt?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
          }
          _disposeTextureCache() {
            for (let tt = this._textureCache.length - 1; tt >= 0; tt--) this._textureCache[tt].texture.dispose();
            this._textureCache.length = 0
          }
          setPrePassRenderer(tt) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = tt.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
          }
          dispose(tt) {
            let et;
            if (tt = tt || this.wT, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (et = this._parentContainer.postProcesses.indexOf(this), et > -1 && this._parentContainer.postProcesses.splice(et, 1), this._parentContainer = null), et = this._engine.postProcesses.indexOf(this), -1 !== et && this._engine.postProcesses.splice(et, 1), this.ZI.notifyObservers(), tt) {
              if (tt.detachPostProcess(this), et = tt._postProcesses.indexOf(this), 0 === et && tt._postProcesses.length > 0) {
                const tt = this.wT._getFirstPostProcess();
                tt && tt.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const tt = Ht.d.Serialize(this),
              et = this.getCamera() || this._scene && this._scene.activeCamera;
            return tt.customType = "BABYLON." + this.getClassName(), tt.cameraId = et ? et.id : null, tt.reusable = this._reusable, tt.textureType = this._textureType, tt.fragmentUrl = this._fragmentUrl, tt.parameters = this._parameters, tt.samplers = this._samplers, tt.uniformBuffers = this._uniformBuffers, tt.options = this._options, tt.defines = this._postProcessDefines, tt.textureFormat = this._textureFormat, tt.vertexUrl = this._vertexUrl, tt.indexParameters = this._indexParameters, tt
          }
          clone() {
            const et = this.serialize();
            et._engine = this._engine, et.cameraId = null;
            const Vt = tt.Parse(et, this._scene, "");
            return Vt ? (Vt.onActivateObservable = this.onActivateObservable.clone(), Vt.onSizeChangedObservable = this.onSizeChangedObservable.clone(), Vt.onApplyObservable = this.onApplyObservable.clone(), Vt.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), Vt.onAfterRenderObservable = this.onAfterRenderObservable.clone(), Vt._prePassEffectConfiguration = this._prePassEffectConfiguration, Vt) : null
          }
          static Parse(tt, et, Vt) {
            const Ot = (0, Xt.e)(tt.customType);
            if (!Ot || !Ot._Parse) return null;
            const qt = et ? et.getCameraById(tt.cameraId) : null;
            return Ot._Parse(tt, qt, et, Vt)
          }
          static _Parse(et, Vt, Ot, qt) {
            return Ht.d.Parse((() => new tt(et.name, et.fragmentUrl, et.parameters, et.samplers, et.options, Vt, et.renderTargetSamplingMode, et._engine, et.reusable, et.defines, et.textureType, et.vertexUrl, et.indexParameters, !1, et.textureFormat)), et, Ot, qt)
          }
        }, (() => {
          const Vt = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          et = [(0, jt.P)()], dt = [(0, jt.P)()], Qt = [(0, jt.P)()], ft = [(0, jt.P)()], wt = [(0, jt.P)()], Nt = [(0, jt.x)()], Mt = [(0, jt.P)()], bt = [(0, jt.P)()], Jt = [(0, jt.P)()], Ct = [(0, jt.P)()], ut = [(0, jt.P)()], Kt = [(0, jt.P)()], ht = [(0, jt.P)()], vt = [(0, jt.P)()], Wt = [(0, jt.P)("samples")], St = [(0, jt.P)()], (0, Ot.l)(tt, null, dt, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: tt => "name" in tt,
              get: tt => tt.name
            },
            metadata: Vt
          }, null, ct), (0, Ot.l)(tt, null, Jt, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: tt => "alphaMode" in tt,
              get: tt => tt.alphaMode
            },
            metadata: Vt
          }, null, ct), (0, Ot.l)(null, null, et, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: tt => "uniqueId" in tt,
              get: tt => tt.uniqueId,
              set: (tt, et) => {
                tt.uniqueId = et
              }
            },
            metadata: Vt
          }, Rt, It), (0, Ot.l)(null, null, Qt, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: tt => "width" in tt,
              get: tt => tt.width,
              set: (tt, et) => {
                tt.width = et
              }
            },
            metadata: Vt
          }, Pt, Zt), (0, Ot.l)(null, null, ft, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: tt => "height" in tt,
              get: tt => tt.height,
              set: (tt, et) => {
                tt.height = et
              }
            },
            metadata: Vt
          }, Lt, Ft), (0, Ot.l)(null, null, wt, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: tt => "renderTargetSamplingMode" in tt,
              get: tt => tt.renderTargetSamplingMode,
              set: (tt, et) => {
                tt.renderTargetSamplingMode = et
              }
            },
            metadata: Vt
          }, kt, Gt), (0, Ot.l)(null, null, Nt, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: tt => "clearColor" in tt,
              get: tt => tt.clearColor,
              set: (tt, et) => {
                tt.clearColor = et
              }
            },
            metadata: Vt
          }, zt, ot), (0, Ot.l)(null, null, Mt, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: tt => "autoClear" in tt,
              get: tt => tt.autoClear,
              set: (tt, et) => {
                tt.autoClear = et
              }
            },
            metadata: Vt
          }, rt, Ut), (0, Ot.l)(null, null, bt, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: tt => "forceAutoClearInAlphaMode" in tt,
              get: tt => tt.forceAutoClearInAlphaMode,
              set: (tt, et) => {
                tt.forceAutoClearInAlphaMode = et
              }
            },
            metadata: Vt
          }, At, it), (0, Ot.l)(null, null, Ct, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: tt => "alphaConstants" in tt,
              get: tt => tt.alphaConstants,
              set: (tt, et) => {
                tt.alphaConstants = et
              }
            },
            metadata: Vt
          }, Yt, Bt), (0, Ot.l)(null, null, ut, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: tt => "enablePixelPerfectMode" in tt,
              get: tt => tt.enablePixelPerfectMode,
              set: (tt, et) => {
                tt.enablePixelPerfectMode = et
              }
            },
            metadata: Vt
          }, pt, xt), (0, Ot.l)(null, null, Kt, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: tt => "forceFullscreenViewport" in tt,
              get: tt => tt.forceFullscreenViewport,
              set: (tt, et) => {
                tt.forceFullscreenViewport = et
              }
            },
            metadata: Vt
          }, Tt, gt), (0, Ot.l)(null, null, ht, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: tt => "scaleMode" in tt,
              get: tt => tt.scaleMode,
              set: (tt, et) => {
                tt.scaleMode = et
              }
            },
            metadata: Vt
          }, st, nt), (0, Ot.l)(null, null, vt, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: tt => "alwaysForcePOT" in tt,
              get: tt => tt.alwaysForcePOT,
              set: (tt, et) => {
                tt.alwaysForcePOT = et
              }
            },
            metadata: Vt
          }, te, ee), (0, Ot.l)(null, null, Wt, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: tt => "_samples" in tt,
              get: tt => tt._samples,
              set: (tt, et) => {
                tt._samples = et
              }
            },
            metadata: Vt
          }, Ve, Oe), (0, Ot.l)(null, null, St, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: tt => "adaptScaleToCurrentViewport" in tt,
              get: tt => tt.adaptScaleToCurrentViewport,
              set: (tt, et) => {
                tt.adaptScaleToCurrentViewport = et
              }
            },
            metadata: Vt
          }, qe, De), Vt && Object.defineProperty(tt, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Vt
          })
        })(), tt
      })(),
      wt = !1;

    function yt() {
      wt || (wt = !0, Qt.d.prototype.setTextureFromPostProcess = function(tt, et, Vt) {
        let Ot = null;
        et && (et._forcedOutputTexture ? Ot = et._forcedOutputTexture : et._textures.data[et._currentRenderTextureInd] && (Ot = et._textures.data[et._currentRenderTextureInd])), this._bindTexture(tt, Ot?.texture ?? null, Vt)
      }, Qt.d.prototype.setTextureFromPostProcessOutput = function(tt, et, Vt) {
        this._bindTexture(tt, et?._outputTexture?.texture ?? null, Vt)
      }, dt.b.prototype.setTextureFromPostProcess = function(tt, et) {
        this._engine.setTextureFromPostProcess(this._samplers[tt], et, tt)
      }, dt.b.prototype.setTextureFromPostProcessOutput = function(tt, et) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[tt], et, tt)
      }, (0, Xt.i)("BABYLON.PostProcess", ft))
    }
  },
  42078: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => mt,
      g: () => Dt
    });
    var Ot = Vt(42065),
      qt = Vt(37359);
    class Dt extends Ot.d {
      _gatherImports(tt, et) {
        tt ? (this._webGPUReady = !0, et.push(Promise.all([Vt.e(375).then((() => Vt(61682)))]))) : et.push(Promise.all([Vt.e(376).then((() => Vt(61688)))])), super._gatherImports(tt, et)
      }
      constructor(tt) {
        let et = arguments.length > 2 ? arguments[2] : void 0;
        const Vt = {
          name: tt,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || qt.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: Dt.FragmentUrl,
          ...et
        };
        Vt.engine || (Vt.engine = qt.d.LastCreatedEngine), super(Vt)
      }
    }
    Dt.FragmentUrl = "pass";
    class mt extends Ot.d {
      _gatherImports(tt, et) {
        tt ? (this._webGPUReady = !0, et.push(Promise.all([Vt.e(377).then((() => Vt(61697)))]))) : et.push(Promise.all([Vt.e(378).then((() => Vt(61701)))])), super._gatherImports(tt, et)
      }
      constructor(tt) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: tt,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || qt.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: mt.FragmentUrl,
          defines: "#define POSITIVEX"
        }), this._face = 0
      }
      get face() {
        return this._face
      }
      set face(tt) {
        if (!(tt < 0 || tt > 5)) switch (this._face = tt, this._face) {
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
    mt.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);