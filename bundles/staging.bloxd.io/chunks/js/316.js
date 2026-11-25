export const id = 316;
export const ids = [316];
export const modules = {
  42085: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Du
    });
    var su = ju(37514),
      Uu = ju(37494),
      Zu = ju(40739),
      Xu = ju(40403),
      lu = ju(40192),
      qu = ju(39032),
      fu = ju(40390),
      Cu = ju(40417),
      bu = ju(37498),
      cu = ju(40164),
      Nu = ju(40366),
      Ou = ju(40450);
    class Yu {
      get renderList() {
        return this._renderList
      }
      set renderList(uu) {
        this._renderList !== uu && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), uu && (this._unObserveRenderList = (0, bu.k)(uu, this._renderListHasChanged)), this._renderList = uu)
      }
      get disableImageProcessing() {
        return this._disableImageProcessing
      }
      set disableImageProcessing(uu) {
        uu !== this._disableImageProcessing && (this._disableImageProcessing = uu, this._scene.markAllMaterialsAsDirty(64))
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(uu) {
        this._disableDepthPrePass = uu, this._renderingManager.disableDepthPrePass = uu
      }
      get name() {
        return this._name
      }
      set name(uu) {
        if (this._name !== uu) {
          if (this._name = uu, this._sceneUBOs)
            for (let uu = 0; uu < this._sceneUBOs.length; ++uu) this._sceneUBOs[uu].name = `Scene ubo #${uu} for ${this.name}`;
          if (this._scene)
            for (let uu = 0; uu < this._renderPassIds.length; ++uu) {
              const Eu = this._renderPassIds[uu];
              this._engine._renderPassNames[Eu] = `${this._name}#${uu}`
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
      setMaterialForRendering(uu, Eu) {
        let ju;
        ju = Array.isArray(uu) ? uu : [uu];
        for (let su = 0; su < ju.length; ++su)
          for (let uu = 0; uu < this.options.numPasses; ++uu) {
            let Uu = ju[su];
            ju[su].JV && (Uu = ju[su].CUu), Uu.setMaterialForRenderPass(this._renderPassIds[uu], void 0 !== Eu ? Array.isArray(Eu) ? Eu[uu] : Eu : void 0)
          }
      }
      _freezeActiveMeshes(uu) {
        this._freezeActiveMeshesCancel = (0, cu.d)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, uu)
            for (let uu = 0; uu < this._activeMeshes.length; uu++) this._activeMeshes.data[uu]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((uu, Eu) => {
          this._freezeActiveMeshesCancel = null, Eu ? (qu.b.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), uu && qu.b.Error(uu)) : (qu.b.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), uu && (qu.b.Error(uu), uu.stack && qu.b.Error(uu.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let uu = 0; uu < this._activeMeshes.length; uu++) this._activeMeshes.data[uu]._unFreeze();
        this._isFrozen = !1
      }
      constructor(uu, Eu, ju) {
        this._unObserveRenderList = null, this._renderListHasChanged = (uu, Eu) => {
          const ju = this._renderList ? this._renderList.length : 0;
          if (0 === Eu && ju > 0 || 0 === ju)
            for (const su of this._scene.meshes) su._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new su.d, this.onAfterRenderObservable = new su.d, this.onBeforeRenderingManagerRenderObservable = new su.d, this.onAfterRenderingManagerRenderObservable = new su.d, this.onInitRenderingObservable = new su.d, this.onFinishRenderingObservable = new su.d, this.onFastPathRenderObservable = new su.d, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new Nu.f(256), this._activeBoundingBoxes = new Nu.f(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = uu, this._scene = Eu, this._engine = this._scene.wO(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...ju
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new Cu.c(Eu), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const uu of this._scene.lights) uu.getTypeID() === Ou.e.LIGHTTYPEID_CLUSTERED_CONTAINER && uu.isSupported && uu._updateBatches(this.activeCamera).render()
        })), this._scene.addObjectRenderer(this)
      }
      _releaseRenderPassId() {
        for (let uu = 0; uu < this.options.numPasses; ++uu) this._engine.releaseRenderPassId(this._renderPassIds[uu]);
        this._renderPassIds.length = 0
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let uu = 0; uu < this.options.numPasses; ++uu) this._renderPassIds[uu] = this._engine.createRenderPassId(`${this.name}#${uu}`)
      }
      _createSceneUBO(uu, Eu) {
        const ju = this._scene.wO(),
          su = new fu.d(ju, void 0, Eu, uu, void 0, !1);
        return su.addUniform("viewProjection", 16), Eu && su.addUniform("viewProjectionR", 16), su.addUniform("view", 16), su.addUniform("projection", 16), su.addUniform("vEyePosition", 4), su.addUniform("inverseProjection", 16), su
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const uu = this._engine._currentRenderTarget,
          Eu = !(!uu || !uu.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const uu = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${uu} for ${this.name}`, Eu)), this._sceneUBOIsMultiview.push(Eu)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== Eu && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, Eu), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = Eu);
        const ju = this._sceneUBOs[this._currentSceneUBOIndex++];
        return ju.unbindEffect(), ju
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1
      }
      get refreshRate() {
        return this._refreshRate
      }
      set refreshRate(uu) {
        this._refreshRate = uu, this.resetRefreshCounter()
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1))
      }
      isReadyForRendering(uu, Eu) {
        this.prepareRenderList(), this.initRender(uu, Eu);
        const ju = this._checkReadiness();
        return this.finishRender(), ju
      }
      prepareRenderList() {
        const uu = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let Eu = 0; Eu < this._waitingRenderList.length; Eu++) {
              const ju = this._waitingRenderList[Eu],
                su = uu.getMeshById(ju);
              su && this.renderList.push(su)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const uu = this._scene.meshes;
          for (let Eu = 0; Eu < uu.length; Eu++) {
            const ju = uu[Eu];
            this.renderListPredicate(ju) && this.renderList.push(ju)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(uu, Eu) {
        const ju = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), ju && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(ju.getViewMatrix(), ju.getProjectionMatrix(!0)), this._scene._activeCamera = ju, this._engine.setViewport(ju.rigParent ? ju.rigParent.viewport : ju.viewport, uu, Eu)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const uu = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (uu.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), uu._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== uu.activeCamera && uu.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), uu.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ju = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[uu], this.onBeforeRenderObservable.notifyObservers(uu);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(uu);
        else {
          const Eu = this._prepareRenderingManager(uu),
            ju = this._scene.getOutlineRenderer?.(),
            su = ju?.enabled;
          ju && (ju.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(uu), this._renderingManager.render(this.customRenderFunction, Eu, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(uu), ju && (ju.enabled = su)
        }
        Eu || this.onAfterRenderObservable.notifyObservers(uu), this._engine.currentRenderPassId = ju
      }
      _checkReadiness() {
        const uu = this._scene,
          Eu = this._engine.currentRenderPassId;
        let ju = !0;
        uu.getViewMatrix() || uu.updateTransformMatrix();
        const su = this.options.numPasses;
        for (let Uu = 0; Uu < su && ju; Uu++) {
          const Eu = this.renderList ? this.renderList : uu.frameGraph ? uu.meshes : uu.getActiveMeshes().data,
            Zu = this.renderList || uu.frameGraph ? Eu.length : uu.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[Uu], this.onBeforeRenderObservable.notifyObservers(Uu);
          let Xu = null,
            lu = Zu;
          this.getCustomRenderList && (Xu = this.getCustomRenderList(Uu, Eu, Zu), Xu && (lu = Xu.length)), Xu || (Xu = Eu), this.options.doNotChangeAspectRatio || uu.updateTransformMatrix(!0);
          for (let uu = 0; uu < lu && ju; ++uu) {
            const Eu = Xu[uu];
            if (!Eu.isEnabled() || Eu.isBlocked || !Eu.isVisible || !Eu.iG) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(Eu, this.refreshRate, !0)) {
                ju = !1;
                continue
              }
            } else if (!Eu.isReady(!0)) {
              ju = !1;
              continue
            }
            let su = Eu._edgesRenderer,
              Uu = Eu.hasThinInstances;
            if (Eu.JV) {
              const uu = Eu.CUu;
              uu.edgesShareWithInstances && uu._edgesRenderer?.isEnabled && (su = uu._edgesRenderer, Uu = !0)
            } else Eu.fUu && Eu.edgesShareWithInstances && (Uu = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && su?.isEnabled && (su.isReady(Uu) || (ju = !1))
          }
          if (this.renderParticles && uu.particlesEnabled) {
            const Eu = this.particleSystemList || uu.WG;
            for (const uu of Eu) uu.isReady() || (ju = !1)
          }
          if (this.renderSprites && uu.spritesEnabled) {
            const Eu = this.spriteManagerList || uu.spriteManagers;
            if (Eu)
              for (const su of Eu) uu.activeCamera && 0 === (su.layerMask & uu.activeCamera.layerMask) || su.isReady && !su.isReady() && (ju = !1)
          }
          this.onAfterRenderObservable.notifyObservers(Uu), su > 1 && (uu.incrementRenderId(), uu.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = Eu, ju
      }
      _prepareRenderingManager() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ju = this._scene;
        let su, Uu, Zu = null;
        const Xu = this.renderList ? this.renderList : ju.frameGraph ? ju.meshes : ju.getActiveMeshes().data,
          lu = this.renderList || ju.frameGraph ? Xu.length : ju.getActiveMeshes().length;
        if (this.getCustomRenderList && (Zu = this.getCustomRenderList(uu, Xu, lu)), Zu) su = Zu.length, Uu = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !Eu && !this._engine.isWebGPU) return Xu;
          this._defaultRenderListPrepared = !0, Zu = Xu, su = lu, Uu = !this.renderList || this.forceLayerMaskCheck
        }
        const qu = ju.activeCamera,
          fu = this.cameraForLOD ?? qu,
          Cu = ju.getBoundingBoxRenderer?.();
        if (ju._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && Cu) {
            Cu.reset();
            for (let uu = 0; uu < this._activeBoundingBoxes.length; uu++) {
              const Eu = this._activeBoundingBoxes.data[uu];
              Cu.renderList.push(Eu)
            }
          }
          return Zu
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), Cu && Cu.reset(), this.renderMeshes) {
          const uu = ju.getRenderId(),
            Eu = ju.getFrameId();
          for (let Xu = 0; Xu < su; Xu++) {
            const su = Zu[Xu];
            if (su && !su.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(su, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!su.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let Zu, Xu;
              if (fu) {
                const uu = su._internalAbstractMeshDataInfo._currentLOD.get(fu);
                uu && uu[1] === Eu ? Zu = uu[0] : (Zu = ju.customLODSelector ? ju.customLODSelector(su, fu) : su.getLOD(fu), uu ? (uu[0] = Zu, uu[1] = Eu) : su._internalAbstractMeshDataInfo._currentLOD.set(fu, [Zu, Eu]))
              } else Zu = su;
              if (!Zu) continue;
              if (Zu !== su && 0 !== Zu.billboardMode && Zu.computeWorldMatrix(), Zu._preActivateForIntermediateRendering(uu), Xu = !(!Uu || !qu) && 0 === (su.layerMask & qu.layerMask), su.isEnabled() && su.isVisible && su.iG && !Xu) {
                if (this._activeMeshes.push(su), Zu._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, Zu !== su && Zu._activate(uu, !0), this.enableBoundingBoxRendering && Cu && Cu._preActiveMesh(su), su._activate(uu, !0) && su.iG.length) {
                  su.JV ? su._internalAbstractMeshDataInfo._actAsRegularMesh && (Zu = su) : Zu._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, Zu._internalAbstractMeshDataInfo._isActiveIntermediate = !0, ju._prepareSkeleton(Zu);
                  for (let uu = 0; uu < Zu.iG.length; uu++) {
                    const Eu = Zu.iG[uu];
                    this.enableBoundingBoxRendering && Cu && Cu._evaluateSubMesh(su, Eu), this._renderingManager.dispatch(Eu, Zu)
                  }
                }
                su._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && Cu && Eu)
          for (let bu = 0; bu < Cu.renderList.length; bu++) {
            const uu = Cu.renderList.data[bu];
            this._activeBoundingBoxes.push(uu)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const uu = this.particleSystemList || ju.WG;
          for (let Eu = 0; Eu < uu.length; Eu++) {
            const ju = uu[Eu],
              su = ju.emitter;
            ju.isStarted() && su && (!su.position || su.isEnabled()) && this._renderingManager.dispatchParticles(ju)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return Zu
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(uu, Eu, ju, su)
      }
      setRenderingAutoClearDepthStencil(uu, Eu) {
        let ju = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          su = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(uu, Eu, ju, su), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const uu = new Yu(this.name, this._scene, this.options);
        return this.renderList && (uu.renderList = this.renderList.slice(0)), uu
      }
      dispose() {
        const uu = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          Eu = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let ju = 0; ju < Eu; ju++) {
          const Eu = uu[ju];
          Eu && void 0 !== Eu.getMaterialForRenderPass(this.renderPassId) && Eu.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const ju of this._sceneUBOs) ju.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === Yu.REFRESHRATE_RENDER_ONCE && (this.refreshRate = Yu.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    Yu.REFRESHRATE_RENDER_ONCE = 0, Yu.REFRESHRATE_RENDER_ONEVERYFRAME = 1, Yu.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var hu = ju(40153);
    class Du extends Zu.g {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate
      }
      set renderListPredicate(uu) {
        this._objectRenderer.renderListPredicate = uu
      }
      get renderList() {
        return this._objectRenderer.renderList
      }
      set renderList(uu) {
        this._objectRenderer.renderList = uu
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList
      }
      set particleSystemList(uu) {
        this._objectRenderer.particleSystemList = uu
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList
      }
      set getCustomRenderList(uu) {
        this._objectRenderer.getCustomRenderList = uu
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles
      }
      set renderParticles(uu) {
        this._objectRenderer.renderParticles = uu
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites
      }
      set renderSprites(uu) {
        this._objectRenderer.renderSprites = uu
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering
      }
      set enableBoundingBoxRendering(uu) {
        this._objectRenderer.enableBoundingBoxRendering = uu
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering
      }
      set enableOutlineRendering(uu) {
        this._objectRenderer.enableOutlineRendering = uu
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck
      }
      set forceLayerMaskCheck(uu) {
        this._objectRenderer.forceLayerMaskCheck = uu
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera
      }
      set activeCamera(uu) {
        this._objectRenderer.activeCamera = uu
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD
      }
      set cameraForLOD(uu) {
        this._objectRenderer.cameraForLOD = uu
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing
      }
      set disableImageProcessing(uu) {
        this._objectRenderer.disableImageProcessing = uu
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction
      }
      set customIsReadyFunction(uu) {
        this._objectRenderer.customIsReadyFunction = uu
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction
      }
      set customRenderFunction(uu) {
        this._objectRenderer.customRenderFunction = uu
      }
      get postProcesses() {
        return this._postProcesses
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled
      }
      set onAfterUnbind(uu) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(uu)
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable
      }
      set onBeforeRender(uu) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(uu)
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable
      }
      set onAfterRender(uu) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(uu)
      }
      set onClear(uu) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(uu)
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList
      }
      set _waitingRenderList(uu) {
        this._objectRenderer._waitingRenderList = uu
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
      setMaterialForRendering(uu, Eu) {
        this._objectRenderer.setMaterialForRendering(uu, Eu)
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
      set boundingBoxSize(uu) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(uu)) return;
        this._boundingBoxSize = uu;
        const Eu = this.hV();
        Eu && Eu.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(uu, Eu, ju) {
        let Xu, lu, fu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Cu = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          bu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          cu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Nu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Zu.g.TRILINEAR_SAMPLINGMODE,
          Ou = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          hu = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          Du = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          gu = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          Mu = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          eu = arguments.length > 13 ? arguments[13] : void 0,
          Gu = arguments.length > 14 ? arguments[14] : void 0,
          pu = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          wu = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          Ju = !0,
          du = !1;
        if ("object" === typeof fu) {
          const uu = fu;
          fu = !!uu.generateMipMaps, Cu = uu.doNotChangeAspectRatio ?? !0, bu = uu.type ?? 0, cu = !!uu.isCube, Nu = uu.samplingMode ?? Zu.g.TRILINEAR_SAMPLINGMODE, Ou = uu.generateDepthBuffer ?? !0, hu = !!uu.generateStencilBuffer, Du = !!uu.isMulti, gu = uu.format ?? 5, Mu = !!uu.delayAllocation, eu = uu.samples, Gu = uu.creationFlags, pu = !!uu.noColorAttachment, wu = !!uu.useSRGBBuffer, Xu = uu.colorAttachment, Ju = uu.gammaSpace ?? Ju, lu = uu.existingObjectRenderer, du = !!uu.enableClusteredLights
        }
        if (super(null, ju, !fu, void 0, Nu, void 0, void 0, void 0, void 0, gu), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new su.d, this.onAfterUnbindObservable = new su.d, this.onClearObservable = new su.d, this.onResizeObservable = new su.d, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = Uu.t.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(ju = this.hV())) return;
        const au = this.hV().wO();
        this._gammaSpace = Ju, this._coordinatesMode = Zu.g.PROJECTION_MODE, this.name = uu, this.isRenderTarget = !0, this._initialSizeParameter = Eu, this._dontDisposeObjectRenderer = !!lu, this._processSizeParameter(Eu), this._objectRenderer = lu ?? new Yu(uu, ju, {
          numPasses: cu ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: Cu,
          enableClusteredLights: du
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const uu = this._scene;
          if (!this._disableEngineStages)
            for (const Eu of uu._beforeRenderTargetClearStage) Eu.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(au) : this.skipInitialClear || au.clear(this.clearColor ?? uu.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || uu.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const Eu of uu._beforeRenderTargetDrawStage) Eu.action(this, this._currentFaceIndex, this._currentLayer);
          au._debugPushGroup && au._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (au._debugPopGroup && au._debugPopGroup(), !this._disableEngineStages)
            for (const Eu of this._scene._afterRenderTargetDrawStage) Eu.action(this, this._currentFaceIndex, this._currentLayer);
          const uu = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const Eu of this._scene._afterRenderTargetPostProcessStage) Eu.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = uu), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), au) : qu.b.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(au) : this.skipInitialClear || au.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = au.onResizeObservable.add((() => {})), this._generateMipMaps = !!fu, this._doNotChangeAspectRatio = Cu, Du || (this._renderTargetOptions = {
          generateMipMaps: fu,
          type: bu,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: Ou,
          generateStencilBuffer: hu,
          samples: eu,
          creationFlags: Gu,
          noColorAttachment: pu,
          useSRGBBuffer: wu,
          colorAttachment: Xu,
          label: this.name
        }, this.samplingMode === Zu.g.NEAREST_SAMPLINGMODE && (this.wrapU = Zu.g.CLAMP_ADDRESSMODE, this.wrapV = Zu.g.CLAMP_ADDRESSMODE), Mu || (cu ? (this._renderTarget = ju.wO().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = Zu.g.INVCUBIC_MODE, this._textureMatrix = Uu.e.Identity()) : this._renderTarget = ju.wO().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== eu && (this.samples = eu)))
      }
      createDepthStencilTexture() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Zu = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(uu, Eu, ju, su, Uu, Zu)
      }
      _processSizeParameter(uu) {
        if (uu.ratio) {
          this._sizeRatio = uu.ratio;
          const Eu = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(Eu.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(Eu.getRenderHeight(), this._sizeRatio)
          }
        } else this._size = uu
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples
      }
      set samples(uu) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(uu))
      }
      addPostProcess(uu) {
        if (!this._postProcessManager) {
          const uu = this.hV();
          if (!uu) return;
          this._postProcessManager = new Xu.c(uu), this._postProcesses = new Array
        }
        this._postProcesses.push(uu), this._postProcesses[0].autoClear = !1
      }
      clearPostProcesses() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (uu)
            for (const uu of this._postProcesses) uu.dispose();
          this._postProcesses = []
        }
      }
      removePostProcess(uu) {
        if (!this._postProcesses) return;
        const Eu = this._postProcesses.indexOf(uu); - 1 !== Eu && (this._postProcesses.splice(Eu, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter()
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate
      }
      set refreshRate(uu) {
        this._objectRenderer.refreshRate = uu
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
        const uu = this._size.layers;
        if (uu) return uu;
        const Eu = this._size.depth;
        return Eu || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(uu) {
        const Eu = Math.max(1, this.getRenderSize() * uu);
        this.resize(Eu)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(uu) {
        const Eu = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const ju = this.hV();
        ju && (this._processSizeParameter(uu), this._renderTarget = Eu ? ju.wO().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : ju.wO().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(uu, Eu)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => ju(42102))).then((uu => this._dumpTools = uu))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const uu = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), uu
      }
      _render() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ju = this.hV();
        if (!ju) return;
        void 0 !== this.useCameraPostProcesses && (uu = this.useCameraPostProcesses);
        const su = ju.wO();
        if (su._debugPushGroup && su._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let Uu = 0; Uu < 6; Uu++) this._renderToTarget(Uu, uu, Eu), ju.incrementRenderId(), ju.resetCachedMaterial();
          else this._renderToTarget(0, uu, Eu);
        else
          for (let Uu = 0; Uu < this.getRenderLayers(); Uu++) this._renderToTarget(0, uu, Eu, Uu), ju.incrementRenderId(), ju.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), su._debugPopGroup && su._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(uu, Eu) {
        const ju = uu * Eu,
          su = (0, lu.r)(ju + 16384 / (128 + ju));
        return Math.min((0, lu.e)(uu), su)
      }
      _bindFrameBuffer() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ju = this.hV();
        if (!ju) return;
        const su = ju.wO();
        this._renderTarget && su.bindFramebuffer(this._renderTarget, this.isCube ? uu : void 0, void 0, void 0, this.ignoreCameraViewport, 0, Eu)
      }
      _unbindFrameBuffer(uu, Eu) {
        this._renderTarget && uu.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(Eu)
        }))
      }
      _prepareFrame(uu, Eu, ju, su) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(Eu, ju) : su && uu.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(Eu, ju)
      }
      _renderToTarget(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Uu = this.hV();
        if (!Uu) return;
        const Zu = Uu.wO();
        this._currentFaceIndex = uu, this._currentLayer = su, this._currentUseCameraPostProcess = Eu, this._currentDumpForDebug = ju, this._prepareFrame(Uu, uu, su, Eu), this._objectRenderer.render(uu + su, !0), this._unbindFrameBuffer(Zu, uu), this._texture && this.isCube && 5 === uu && Zu.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(uu, Eu, ju, su)
      }
      setRenderingAutoClearDepthStencil(uu, Eu) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(uu, Eu)
      }
      clone() {
        const uu = this.getSize(),
          Eu = new Du(this.name, uu, this.hV(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return Eu.hasAlpha = this.hasAlpha, Eu.level = this.level, Eu.coordinatesMode = this.coordinatesMode, this.renderList && (Eu.renderList = this.renderList.slice(0)), Eu
      }
      serialize() {
        if (!this.name) return null;
        const uu = super.serialize();
        if (uu.renderTargetSize = this.getRenderSize(), uu.renderList = [], this.renderList)
          for (let Eu = 0; Eu < this.renderList.length; Eu++) uu.renderList.push(this.renderList[Eu].id);
        return uu
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.hV().wO().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const uu = this.hV();
        if (!uu) return;
        let Eu = uu.customRenderTargets.indexOf(this);
        Eu >= 0 && uu.customRenderTargets.splice(Eu, 1);
        for (const ju of uu.cameras) Eu = ju.customRenderTargets.indexOf(this), Eu >= 0 && ju.customRenderTargets.splice(Eu, 1);
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
    Du.REFRESHRATE_RENDER_ONCE = Yu.REFRESHRATE_RENDER_ONCE, Du.REFRESHRATE_RENDER_ONEVERYFRAME = Yu.REFRESHRATE_RENDER_ONEVERYFRAME, Du.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = Yu.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(Du.prototype, "noPrePassRenderer") || Object.defineProperty(Du.prototype, "noPrePassRenderer", (0, hu.d)("RenderTargetTexture", "noPrePassRenderer"))
  },
  42075: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => fu,
      d: () => Cu
    });
    var su = ju(40399),
      Uu = ju(38458),
      Zu = ju(37514),
      Xu = ju(40121),
      lu = ju(40589);
    const qu = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class fu {
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qu;
        this._fullscreenViewport = new Uu.b(0, 0, 1, 1);
        const ju = Eu.positions ?? qu.positions,
          Zu = Eu.indices ?? qu.indices;
        this.engine = uu, this._vertexBuffers = {
          [su.j.PositionKind]: new su.j(uu, ju, su.j.PositionKind, !1, !1, 2)
        }, this._indexBuffer = uu.createIndexBuffer(Zu), this._indexBufferLength = Zu.length, this._onContextRestoredObserver = uu.pO.add((() => {
          this._indexBuffer = uu.createIndexBuffer(Zu);
          for (const uu in this._vertexBuffers) {
            this._vertexBuffers[uu]._rebuild()
          }
        }))
      }
      setViewport() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.engine.setViewport(uu)
      }
      bindBuffers(uu) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, uu)
      }
      applyEffectWrapper(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = Eu, this.engine.stencilState.stencilTest = ju, this.engine.enableEffect(uu.drawWrapper), this.bindBuffers(uu.effect), uu.onApplyObservable.notifyObservers({})
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
      _isRenderTargetTexture(uu) {
        return void 0 !== uu.renderTarget
      }
      render(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!uu.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const ju = null === Eu ? null : this._isRenderTargetTexture(Eu) ? Eu.renderTarget : Eu;
        ju && this.engine.bindFramebuffer(ju), this.applyEffectWrapper(uu), this.draw(), ju && this.engine.unBindFramebuffer(ju), this.restoreStates()
      }
      dispose() {
        const uu = this._vertexBuffers[su.j.PositionKind];
        uu && (uu.dispose(), delete this._vertexBuffers[su.j.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.pO.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class Cu {
      static RegisterShaderCodeProcessing(uu, Eu) {
        Eu ? Cu._CustomShaderCodeProcessing[uu ?? ""] = Eu : delete Cu._CustomShaderCodeProcessing[uu ?? ""]
      }
      static _GetShaderCodeProcessing(uu) {
        return Cu._CustomShaderCodeProcessing[uu] ?? Cu._CustomShaderCodeProcessing[""]
      }
      get name() {
        return this.options.name
      }
      set name(uu) {
        this.options.name = uu
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
      set effect(uu) {
        this._drawWrapper.effect = uu
      }
      constructor(uu) {
        this.alphaMode = 0, this.onEffectCreatedObservable = new Zu.d(void 0, !0), this.onApplyObservable = new Zu.d, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
          ...uu,
          name: uu.name || "effectWrapper",
          engine: uu.engine,
          uniforms: uu.uniforms || uu.uniformNames || [],
          uniformNames: void 0,
          samplers: uu.samplers || uu.samplerNames || [],
          samplerNames: void 0,
          attributeNames: uu.attributeNames || ["position"],
          uniformBuffers: uu.uniformBuffers || [],
          defines: uu.defines || "",
          useShaderStore: uu.useShaderStore || !1,
          vertexUrl: uu.vertexUrl || uu.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: uu.fragmentShader || "pass",
          indexParameters: uu.indexParameters,
          blockCompilation: uu.blockCompilation || !1,
          shaderLanguage: uu.shaderLanguage || 0,
          onCompiled: uu.onCompiled || void 0,
          extraInitializations: uu.extraInitializations || void 0,
          extraInitializationsAsync: uu.extraInitializationsAsync || void 0,
          useAsPostProcess: uu.useAsPostProcess ?? !1,
          allowEmptySourceTexture: uu.allowEmptySourceTexture ?? !1
        }, this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), uu.vertexUrl || uu.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add((() => {
          this.effect.setFloat2("scale", 1, 1)
        }))), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add((() => {
          this.bind()
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.pO.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new lu.b(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const Eu = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, Eu, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          su = arguments.length > 2 ? arguments[2] : void 0,
          Uu = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, Uu && this._importPromises.push(...Uu);
        const Zu = this.options.engine.isWebGPU && !Cu.ForceGLSL;
        this._gatherImports(Zu, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(Zu && this._webGPUReady ? ju.e(368).then((() => ju(61628))) : ju.e(358).then((() => ju(61501)))), void 0 !== su && su(Zu, this._importPromises), Zu && this._webGPUReady && (this.options.shaderLanguage = 1), uu || this.updateEffect(Eu)
      }
      updateEffect() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          su = arguments.length > 3 ? arguments[3] : void 0,
          Uu = arguments.length > 4 ? arguments[4] : void 0,
          Zu = arguments.length > 5 ? arguments[5] : void 0,
          lu = arguments.length > 6 ? arguments[6] : void 0,
          qu = arguments.length > 7 ? arguments[7] : void 0;
        const fu = Cu._GetShaderCodeProcessing(this.name);
        if (fu?.defineCustomBindings) {
          const su = Eu?.slice() ?? [];
          su.push(...this.options.uniforms);
          const Uu = ju?.slice() ?? [];
          Uu.push(...this.options.samplers), uu = fu.defineCustomBindings(this.name, uu, su, Uu), Eu = su, ju = Uu
        }
        this.options.defines = uu || "";
        const bu = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let cu;
        cu = this.options.extraInitializationsAsync ? async () => {
          await (bu?.()), await this.options.extraInitializationsAsync()
        }: bu, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: lu ?? this._shaderPath.vertex,
          fragment: qu ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: Eu || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: ju || this.options.samplers,
          defines: null !== uu ? uu : "",
          fallbacks: null,
          onCompiled: Uu ?? this.options.onCompiled,
          onError: Zu ?? null,
          indexParameters: su || this.options.indexParameters,
          processCodeAfterIncludes: fu?.processCodeAfterIncludes ? (uu, Eu) => fu.processCodeAfterIncludes(this.name, uu, Eu) : null,
          processFinalCode: fu?.processFinalCode ? (uu, Eu) => fu.processFinalCode(this.name, uu, Eu) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: cu
        }, this.options.engine) : this._drawWrapper.effect = new Xu.b(this._shaderPath, this.options.attributeNames, Eu || this.options.uniforms, ju || this.options.samplerNames, this.options.engine, uu, void 0, Uu || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, cu), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !uu && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), Cu._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.wO().pO.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    Cu.ForceGLSL = !1, Cu._CustomShaderCodeProcessing = {}
  },
  42102: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      Dispose: () => gu,
      DumpData: () => Du,
      DumpDataAsync: () => hu,
      DumpFramebuffer: () => Yu,
      DumpTools: () => Mu,
      EncodeImageAsync: () => Ou,
      RegisterDumpTools: () => Gu
    });
    var su = ju(40255),
      Uu = ju(42075),
      Zu = ju(40356),
      Xu = ju(37519),
      lu = ju(37506),
      qu = ju(39032),
      fu = ju(40312),
      Cu = ju(40258);
    let bu = null;
    async function cu() {
      return bu || (bu = async function() {
        const uu = lu.b.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        uu instanceof OffscreenCanvas && qu.b.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: Eu
        } = await Promise.resolve().then((() => ju(40118)));
        if (!Eu.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const su = new Eu(uu, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        lu.b.Instances.pop(), lu.b.OnEnginesDisposedObservable.add((uu => {
          su && uu !== su && !su.Gw && 0 === lu.b.Instances.length && gu()
        })), su.getCaps().parallelShaderCompile = void 0;
        const Zu = new Uu.c(su),
          {
            passPixelShader: Xu
          } = await ju.e(376).then((() => ju(61682))),
          fu = new Uu.d({
            engine: su,
            name: Xu.name,
            fragmentShader: Xu.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: uu,
          dumpEngine: {
            engine: su,
            renderer: Zu,
            wrapper: fu
          }
        }
      }()), await bu
    }
    let Nu = (() => {
      var uu;
      let Eu, ju = [];
      return uu = class {
        static async EncodeImageAsync(uu, Eu, ju, su, Uu, Xu) {
          const lu = await cu(),
            qu = lu.dumpEngine;
          qu.engine.setSize(Eu, ju, !0);
          const fu = qu.engine.createRawTexture(uu, Eu, ju, 5, !1, !Uu, 1);
          return qu.renderer.setViewport(), qu.renderer.applyEffectWrapper(qu.wrapper), qu.wrapper.effect._bindTexture("textureSampler", fu), qu.renderer.draw(), fu.dispose(), await new Promise(((uu, Eu) => {
            Zu.h.ToBlob(lu.canvas, (ju => {
              ju ? uu(ju) : Eu(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), su, Xu)
          }))
        }
      }, (() => {
        const Uu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Eu = [Cu.f], (0, su.e)(uu, null, Eu, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: uu => "EncodeImageAsync" in uu,
            get: uu => uu.EncodeImageAsync
          },
          metadata: Uu
        }, null, ju), Uu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Uu
        }), (0, su.g)(uu, ju)
      })(), uu
    })();
    const Ou = Nu.EncodeImageAsync;
    async function Yu(uu, Eu, ju, su) {
      let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Zu = arguments.length > 5 ? arguments[5] : void 0,
        Xu = arguments.length > 6 ? arguments[6] : void 0;
      const lu = await ju.readPixels(0, 0, uu, Eu);
      Du(uu, Eu, new Uint8Array(lu.buffer), su, Uu, Zu, !0, void 0, Xu)
    }
    async function hu(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Uu = arguments.length > 4 ? arguments[4] : void 0,
        lu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Cu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        bu = arguments.length > 7 ? arguments[7] : void 0;
      if (ju instanceof Float32Array) {
        const uu = new Uint8Array(ju.length);
        let Eu = ju.length;
        for (; Eu--;) {
          const su = ju[Eu];
          uu[Eu] = Math.round(255 * (0, Xu.Clamp)(su))
        }
        ju = uu
      }
      const cu = await Nu.EncodeImageAsync(ju, uu, Eu, su, lu, bu);
      void 0 !== Uu && Zu.h.DownloadBlob(cu, Uu), cu.type !== su && qu.b.Warn(`DumpData: The requested mimeType '${su}' is not supported. The result has mimeType '${cu.type}' instead.`);
      const Ou = await cu.arrayBuffer();
      return Cu ? Ou : `data:${su};base64,${(0,fu.e)(Ou)}`
    }

    function Du(uu, Eu, ju, su) {
      let Uu = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== Uu || su || (Uu = ""), hu(uu, Eu, ju, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", Uu, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((uu => {
        su && su(uu)
      }))
    }

    function gu() {
      bu && (bu?.then((uu => {
        uu.canvas instanceof HTMLCanvasElement && uu.canvas.remove(), uu.dumpEngine && (uu.dumpEngine.engine.dispose(), uu.dumpEngine.renderer.dispose(), uu.dumpEngine.wrapper.dispose())
      })), bu = null)
    }
    const Mu = {
      DumpData: Du,
      DumpDataAsync: hu,
      DumpFramebuffer: Yu,
      Dispose: gu
    };
    let eu = !1;

    function Gu() {
      if (eu) return;
      eu = !0;
      Zu.h.DumpData = Du, Zu.h.DumpDataAsync = hu, Zu.h.DumpFramebuffer = Yu
    }
  },
  42082: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Nu,
      e: () => Ou,
      i: () => Yu
    });
    var su = ju(40739),
      Uu = ju(42085),
      Zu = ju(40255),
      Xu = ju(42068),
      lu = ju(40272),
      qu = ju(42093),
      fu = ju(40258);
    class Cu extends Xu.b {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(uu, Eu) {
        let ju = arguments.length > 4 ? arguments[4] : void 0;
        const su = {
          size: "number" === typeof Eu ? Eu : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: ju,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...Eu
        };
        super(uu, qu.f.FragmentUrl, {
          effectWrapper: "number" !== typeof Eu && Eu.effectWrapper ? void 0 : new qu.f(uu, ju, su),
          ...su
        })
      }
      static _Parse(uu, Eu, ju, su) {
        return lu.e.Parse((() => new Cu(uu.name, uu.options, Eu, uu.renderTargetSamplingMode, uu._engine, uu.reusable)), uu, ju, su)
      }
    }(() => {
      var uu;
      let Eu, ju = Xu.b,
        su = [];
      uu = class extends ju {
        get face() {
          return this._effectWrapper.face
        }
        set face(uu) {
          this._effectWrapper.face = uu
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(uu, Eu) {
          let ju = arguments.length > 4 ? arguments[4] : void 0;
          const Uu = {
            size: "number" === typeof Eu ? Eu : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: ju,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...Eu
          };
          super(uu, qu.f.FragmentUrl, {
            effectWrapper: "number" !== typeof Eu && Eu.effectWrapper ? void 0 : new qu.b(uu, ju, Uu),
            ...Uu
          }), (0, Zu.g)(this, su)
        }
        static _Parse(Eu, ju, su, Uu) {
          return lu.e.Parse((() => new uu(Eu.name, Eu.options, ju, Eu.renderTargetSamplingMode, Eu._engine, Eu.reusable)), Eu, su, Uu)
        }
      }, (() => {
        const Uu = "function" === typeof Symbol && Symbol.metadata ? Object.create(ju[Symbol.metadata] ?? null) : void 0;
        Eu = [(0, fu.E)()], (0, Zu.e)(uu, null, Eu, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: uu => "face" in uu,
            get: uu => uu.face
          },
          metadata: Uu
        }, null, su), Uu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Uu
        })
      })()
    })();
    var bu = ju(37519),
      cu = ju(40326);

    function Nu(uu, Eu, ju, su, Uu, Zu, lu, qu) {
      const fu = Eu.wO();
      return Eu.isReady = !1, Uu = Uu ?? Eu.samplingMode, su = su ?? Eu.type, Zu = Zu ?? Eu.format, lu = lu ?? Eu.width, qu = qu ?? Eu.height, -1 === su && (su = 0), new Promise((Cu => {
        const bu = new Xu.b("postprocess", uu, null, null, 1, null, Uu, fu, !1, void 0, su, void 0, null, !1, Zu);
        bu.externalTextureSamplerBinding = !0;
        const cu = fu.createRenderTargetTexture({
          width: lu,
          height: qu
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: Uu,
          type: su,
          format: Zu
        });
        bu.onEffectCreatedObservable.addOnce((uu => {
          uu.executeWhenCompiled((() => {
            bu.onApply = uu => {
              uu._bindTexture("textureSampler", Eu), uu.setFloat2("scale", 1, 1)
            }, ju.postProcessManager.directRender([bu], cu, !0), fu.restoreDefaultFramebuffer(), fu._releaseTexture(Eu), bu && bu.dispose(), cu._swapAndDie(Eu), Eu.type = su, Eu.format = 5, Eu.isReady = !0, Cu(Eu)
          }))
        }))
      }))
    }
    async function Ou(uu, Eu, Zu) {
      let lu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        qu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        fu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Cu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(uu) {
        if (uu.isReady()) return;
        if (uu.loadingError) throw new Error(uu.errorObject?.message || `Texture ${uu.name} errored while loading.`);
        const Eu = uu.onLoadObservable;
        if (Eu) return await new Promise((uu => Eu.addOnce((() => uu()))));
        const ju = uu._texture?.onLoadedObservable;
        if (ju) return await new Promise((uu => ju.addOnce((() => uu()))));
        throw new Error(`Cannot determine readiness of texture ${uu.name}.`)
      }(uu);
      const cu = uu.getInternalTexture(),
        Nu = uu.is3D || !!cu?.is3D,
        {
          width: Ou,
          height: Yu
        } = uu.getSize(),
        hu = Eu ?? Ou,
        Du = Zu ?? Yu;
      if (fu || Nu || function(uu) {
          switch (uu) {
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
        }(uu.textureFormat) || hu !== Ou || Du !== Yu) {
        if (uu.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${fu?"RTT":"compression"} is not supported.`);
        return await async function(uu, Eu, Zu, lu, qu) {
          let fu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const Cu = uu.hV(),
            bu = Cu.wO(),
            cu = uu.getInternalTexture(),
            Nu = uu.is3D || !!cu?.is3D;
          let Ou;
          if (bu.isWebGPU ? Nu ? await ju.e(372).then((() => ju(61660))) : uu.isCube ? await ju.e(373).then((() => ju(61667))) : await ju.e(374).then((() => ju(61676))) : Nu ? await ju.e(369).then((() => ju(61643))) : uu.isCube ? await ju.e(370).then((() => ju(61648))) : await ju.e(371).then((() => ju(61651))), Nu) Ou = new Xu.b("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: su.g.NEAREST_NEAREST_MIPNEAREST,
            engine: bu,
            shaderLanguage: bu.isWebGPU ? 1 : 0
          });
          else if (uu.isCube) {
            const uu = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            Ou = new Xu.b("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: su.g.NEAREST_NEAREST_MIPNEAREST,
              engine: bu,
              defines: uu[lu],
              shaderLanguage: bu.isWebGPU ? 1 : 0
            })
          } else Ou = new Xu.b("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: su.g.NEAREST_NEAREST_MIPNEAREST,
            engine: bu,
            shaderLanguage: bu.isWebGPU ? 1 : 0
          });
          await new Promise((uu => {
            Ou.onEffectCreatedObservable.addOnce((Eu => {
              Eu.executeWhenCompiled((() => {
                uu(0)
              }))
            }))
          }));
          const Yu = new Uu.b("temp", {
            width: Eu,
            height: Zu
          }, Cu, !1);
          Ou.onApply = function(Eu) {
            Eu.setTexture("textureSampler", uu), Eu.setFloat("lod", qu), Eu.setInt("gamma", uu.gammaSpace ? 1 : 0), Nu && Eu.setFloat("slice", fu)
          };
          try {
            if (Yu.renderTarget && cu) {
              const ju = cu.samplingMode;
              0 !== qu ? uu.updateSamplingMode(su.g.NEAREST_NEAREST_MIPNEAREST) : uu.updateSamplingMode(su.g.NEAREST_NEAREST), Cu.postProcessManager.directRender([Ou], Yu.renderTarget, !0), uu.updateSamplingMode(ju);
              const Uu = await bu.readPixels(0, 0, Eu, Zu),
                Xu = new Uint8Array(Uu.buffer, Uu.byteOffset, Uu.byteLength);
              return bu.unBindFramebuffer(Yu.renderTarget), Xu
            }
            throw Error("Render to texture failed.")
          } finally {
            Yu.dispose(), Ou.dispose()
          }
        }(uu, hu, Du, lu, qu, Cu)
      }
      let gu = await uu.readPixels(lu, qu);
      if (!gu) throw new Error(`Failed to read pixels from texture ${uu.name}.`);
      if (gu instanceof Float32Array) {
        const uu = new Uint8Array(gu.length);
        let Eu = gu.length;
        for (; Eu--;) {
          const ju = gu[Eu];
          uu[Eu] = Math.round(255 * (0, bu.Clamp)(ju))
        }
        gu = uu
      }
      const Mu = hu * Du,
        eu = 4 * Mu;
      if (gu.length !== eu) {
        const uu = 0 === Mu ? 0 : gu.length / Mu;
        if (1 === uu || 2 === uu || 3 === uu) {
          const Eu = new Uint8Array(eu);
          for (let ju = 0, su = 0, Uu = 0; ju < Mu; ju++, Uu += 4) {
            const ju = gu[su++];
            if (1 === uu) {
              Eu[Uu] = ju, Eu[Uu + 1] = ju, Eu[Uu + 2] = ju, Eu[Uu + 3] = 255;
              continue
            }
            const Zu = gu[su++];
            2 !== uu ? (Eu[Uu] = ju, Eu[Uu + 1] = Zu, Eu[Uu + 2] = gu[su++], Eu[Uu + 3] = 255) : (Eu[Uu] = ju, Eu[Uu + 1] = Zu, Eu[Uu + 2] = 0, Eu[Uu + 3] = 255)
          }
          return Eu
        }
      }
      return gu
    }
    const Yu = {
      CreateResizedCopy: function(uu, Eu, ju) {
        let Zu = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Xu = uu.hV(),
          lu = Xu.wO(),
          qu = new Uu.b("resized" + uu.name, {
            width: Eu,
            height: ju
          }, Xu, !uu.noMipmap, !0, uu._texture.type, !1, uu.samplingMode, !1);
        qu.wrapU = uu.wrapU, qu.wrapV = uu.wrapV, qu.uOffset = uu.uOffset, qu.vOffset = uu.vOffset, qu.uScale = uu.uScale, qu.vScale = uu.vScale, qu.uAng = uu.uAng, qu.vAng = uu.vAng, qu.wAng = uu.wAng, qu.coordinatesIndex = uu.coordinatesIndex, qu.level = uu.level, qu.anisotropicFilteringLevel = uu.anisotropicFilteringLevel, qu._texture.isReady = !1, uu.wrapU = su.g.CLAMP_ADDRESSMODE, uu.wrapV = su.g.CLAMP_ADDRESSMODE;
        const fu = new Cu("pass", 1, null, Zu ? su.g.BILINEAR_SAMPLINGMODE : su.g.NEAREST_SAMPLINGMODE, lu, !1, 0);
        return fu.externalTextureSamplerBinding = !0, fu.onEffectCreatedObservable.addOnce((Eu => {
          Eu.executeWhenCompiled((() => {
            fu.onApply = function(Eu) {
              Eu.setTexture("textureSampler", uu)
            };
            const Eu = qu.renderTarget;
            Eu && (Xu.postProcessManager.directRender([fu], Eu), lu.unBindFramebuffer(Eu), qu.disposeFramebufferObjects(), fu.dispose(), qu.getInternalTexture().isReady = !0)
          }))
        })), qu
      },
      ApplyPostProcess: Nu,
      ToHalfFloat: cu.k,
      FromHalfFloat: cu.e,
      GetTextureDataAsync: Ou
    }
  },
  42068: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Ou
    });
    var su = ju(40255),
      Uu = ju(40366),
      Zu = ju(37514),
      Xu = ju(37494),
      lu = ju(40121),
      qu = ju(40258),
      fu = ju(40272),
      Cu = ju(37532),
      bu = ju(40168),
      cu = ju(40192),
      Nu = ju(42075);
    let Ou = (() => {
        var uu;
        let Eu, lu, bu, Ou, Yu, Du, gu, Mu, eu, Gu, pu, wu, Ju, du, au, Pu, ou = [],
          ku = [],
          mu = [],
          vu = [],
          Ku = [],
          Vu = [],
          ru = [],
          Qu = [],
          iu = [],
          Wu = [],
          Su = [],
          Iu = [],
          Fu = [],
          Bu = [],
          Lu = [],
          tu = [],
          xu = [],
          Tu = [],
          Hu = [],
          Au = [],
          nu = [],
          yu = [],
          zu = [],
          Ru = [],
          uE = [],
          EE = [],
          jE = [],
          sE = [],
          UE = [];
        return uu = class {
          static get ForceGLSL() {
            return Nu.d.ForceGLSL
          }
          static set ForceGLSL(uu) {
            Nu.d.ForceGLSL = uu
          }
          static RegisterShaderCodeProcessing(uu, Eu) {
            Nu.d.RegisterShaderCodeProcessing(uu, Eu)
          }
          get name() {
            return this._effectWrapper.name
          }
          set name(uu) {
            this._effectWrapper.name = uu
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode
          }
          set alphaMode(uu) {
            this._effectWrapper.alphaMode = uu
          }
          get samples() {
            return this._samples
          }
          set samples(uu) {
            this._samples = Math.min(uu, this._engine.getCaps().maxMSAASamples), this._textures.forEach((uu => {
              uu.setSamples(this._samples)
            }))
          }
          get shaderLanguage() {
            return this._shaderLanguage
          }
          getEffectName() {
            return this._fragmentUrl
          }
          set onActivate(uu) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), uu && (this._onActivateObserver = this.onActivateObservable.add(uu))
          }
          set onSizeChanged(uu) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(uu)
          }
          set onApply(uu) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(uu)
          }
          set onBeforeRender(uu) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(uu)
          }
          set onAfterRender(uu) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(uu)
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd]
          }
          set inputTexture(uu) {
            this._forcedOutputTexture = uu
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty())
          }
          getCamera() {
            return this.fR
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.T6(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(Eu, ju, lu, qu, fu, Cu) {
            let bu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              cu = arguments.length > 7 ? arguments[7] : void 0,
              Ou = arguments.length > 8 ? arguments[8] : void 0,
              Yu = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              Du = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              gu = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              Mu = arguments.length > 12 ? arguments[12] : void 0,
              eu = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              Gu = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              pu = arguments.length > 15 ? arguments[15] : void 0,
              wu = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, su.g)(this, ou), null), this.uniqueId = (0, su.g)(this, ku, void 0), this.width = ((0, su.g)(this, mu), (0, su.g)(this, vu, -1)), this.height = ((0, su.g)(this, Ku), (0, su.g)(this, Vu, -1)), this.nodeMaterialSource = ((0, su.g)(this, ru), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, su.g)(this, Qu, void 0), this.clearColor = ((0, su.g)(this, iu), (0, su.g)(this, Wu, void 0)), this.autoClear = ((0, su.g)(this, Su), (0, su.g)(this, Iu, !0)), this.forceAutoClearInAlphaMode = ((0, su.g)(this, Fu), (0, su.g)(this, Bu, !1)), this.alphaConstants = ((0, su.g)(this, Lu), (0, su.g)(this, tu, void 0)), this.animations = ((0, su.g)(this, xu), []), this.enablePixelPerfectMode = (0, su.g)(this, Tu, !1), this.forceFullscreenViewport = ((0, su.g)(this, Hu), (0, su.g)(this, Au, !0)), this.inspectableCustomProperties = (0, su.g)(this, nu), this.scaleMode = (0, su.g)(this, yu, 1), this.alwaysForcePOT = ((0, su.g)(this, zu), (0, su.g)(this, Ru, !1)), this._samples = ((0, su.g)(this, uE), (0, su.g)(this, EE, 1)), this.adaptScaleToCurrentViewport = ((0, su.g)(this, jE), (0, su.g)(this, sE, !1)), this.doNotSerialize = ((0, su.g)(this, UE), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new Uu.f(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new Xu.p(1, 1), this._texelSize = Xu.p.Zero(), this.onActivateObservable = new Zu.d, this.onSizeChangedObservable = new Zu.d, this.onApplyObservable = new Zu.d, this.onBeforeRenderObservable = new Zu.d, this.onAfterRenderObservable = new Zu.d, this.wV = new Zu.d, hu();
            let Ju, du = 1,
              au = null;
            if (lu && !Array.isArray(lu)) {
              const uu = lu;
              lu = uu.uniforms ?? null, qu = uu.samplers ?? null, du = uu.size ?? 1, Cu = uu.camera ?? null, bu = uu.samplingMode ?? 1, cu = uu.engine, Ou = uu.reusable, Yu = Array.isArray(uu.defines) ? uu.defines.join("\n") : uu.defines ?? null, Du = uu.textureType ?? 0, gu = uu.vertexUrl ?? "postprocess", Mu = uu.indexParameters, eu = uu.blockCompilation ?? !1, Gu = uu.textureFormat ?? 5, pu = uu.shaderLanguage ?? 0, au = uu.uniformBuffers ?? null, wu = uu.extraInitializations, Ju = uu.effectWrapper
            } else fu && (du = "number" === typeof fu ? fu : {
              width: fu.width,
              height: fu.height
            });
            if (this._useExistingThinPostProcess = !!Ju, this._effectWrapper = Ju ?? new Nu.d({
                name: Eu,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: ju,
                engine: cu || Cu?.hV().wO(),
                uniforms: lu,
                samplers: qu,
                uniformBuffers: au,
                defines: Yu,
                vertexUrl: gu,
                indexParameters: Mu,
                blockCompilation: !0,
                shaderLanguage: pu,
                extraInitializations: void 0
              }), this.name = Eu, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != Cu ? (this.fR = Cu, this._scene = Cu.hV(), Cu.attachPostProcess(this), this._engine = this._scene.wO(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : cu && (this._engine = cu, this._engine.postProcesses.push(this)), this._options = du, this.renderTargetSamplingMode = bu || 1, this._reusable = Ou || !1, this._textureType = Du, this._textureFormat = Gu, this._shaderLanguage = pu || 0, this._samplers = qu || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = ju, this._vertexUrl = gu, this._parameters = lu || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = au || [], this._indexParameters = Mu, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const Eu = [];
              this._gatherImports(this._engine.isWebGPU && !uu.ForceGLSL, Eu), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(eu, Yu, wu, Eu)
            }
          }
          _gatherImports() {
            let uu = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? uu.push(Promise.all([ju.e(368).then((() => ju(61628)))])) : uu.push(Promise.all([ju.e(358).then((() => ju(61501)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          wO() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(uu) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = uu, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new Uu.f(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              su = arguments.length > 3 ? arguments[3] : void 0,
              Uu = arguments.length > 4 ? arguments[4] : void 0,
              Zu = arguments.length > 5 ? arguments[5] : void 0,
              Xu = arguments.length > 6 ? arguments[6] : void 0,
              lu = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(uu, Eu, ju, su, Uu, Zu, Xu, lu), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(uu, Eu) {
            let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let Uu = 0; Uu < this._textureCache.length; Uu++)
              if (this._textureCache[Uu].texture.width === uu.width && this._textureCache[Uu].texture.height === uu.height && this._textureCache[Uu].postProcessChannel === ju && this._textureCache[Uu].texture._generateDepthBuffer === Eu.generateDepthBuffer && this._textureCache[Uu].texture.samples === Eu.samples) return this._textureCache[Uu].texture;
            const su = this._engine.createRenderTargetTexture(uu, Eu);
            return this._textureCache.push({
              texture: su,
              postProcessChannel: ju,
              lastUsedRenderId: -1
            }), su
          }
          _flushTextureCache() {
            const uu = this._renderId;
            for (let Eu = this._textureCache.length - 1; Eu >= 0; Eu--)
              if (uu - this._textureCache[Eu].lastUsedRenderId > 100) {
                let uu = !1;
                for (let ju = 0; ju < this._textures.length; ju++)
                  if (this._textures.data[ju] === this._textureCache[Eu].texture) {
                    uu = !0;
                    break
                  } uu || (this._textureCache[Eu].texture.dispose(), this._textureCache.splice(Eu, 1))
              }
          }
          resize(uu, Eu) {
            let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Uu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = uu, this.height = Eu;
            let Zu = null;
            if (ju)
              for (let qu = 0; qu < ju._postProcesses.length; qu++)
                if (null !== ju._postProcesses[qu]) {
                  Zu = ju._postProcesses[qu];
                  break
                } const Xu = {
                width: this.width,
                height: this.height
              },
              lu = {
                generateMipMaps: su,
                generateDepthBuffer: Uu || Zu === this,
                generateStencilBuffer: (Uu || Zu === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(Xu, lu, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(Xu, lu, 1)), this._texelSize.T6(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let uu;
            if (this._shareOutputWithPostProcess) uu = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) uu = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let Eu;
              uu = this.inputTexture;
              for (let ju = 0; ju < this._textureCache.length; ju++)
                if (this._textureCache[ju].texture === uu) {
                  Eu = this._textureCache[ju];
                  break
                } Eu && (Eu.lastUsedRenderId = this._renderId)
            }
            return uu
          }
          activate(uu) {
            let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              ju = arguments.length > 2 ? arguments[2] : void 0;
            const su = null === uu || void 0 !== uu.cameraRigMode ? uu || this.fR : null,
              Uu = su?.hV() ?? uu,
              Zu = Uu.wO(),
              Xu = Zu.getCaps().maxTextureSize,
              lu = (Eu ? Eu.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              qu = (Eu ? Eu.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let fu = this._options.width || lu,
              Cu = this._options.height || qu;
            const bu = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let Nu = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const uu = Zu.currentViewport;
                uu && (fu *= uu.width, Cu *= uu.height)
              }(bu || this.alwaysForcePOT) && (this._options.width || (fu = Zu.needPOTTextures ? (0, cu.g)(fu, Xu, this.scaleMode) : fu), this._options.height || (Cu = Zu.needPOTTextures ? (0, cu.g)(Cu, Xu, this.scaleMode) : Cu)), this.width === fu && this.height === Cu && (Nu = this._getTarget()) || this.resize(fu, Cu, su, bu, ju), this._textures.forEach((uu => {
                uu.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(uu, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return Nu || (Nu = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.T6(lu / fu, qu / Cu), this._engine.bindFramebuffer(Nu, 0, lu, qu, this.forceFullscreenViewport)) : (this._scaleRatio.T6(1, 1), this._engine.bindFramebuffer(Nu, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(su), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : Uu.clearColor, Uu._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), Nu
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
            let uu;
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.wO().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), uu = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", uu?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
          }
          _disposeTextureCache() {
            for (let uu = this._textureCache.length - 1; uu >= 0; uu--) this._textureCache[uu].texture.dispose();
            this._textureCache.length = 0
          }
          setPrePassRenderer(uu) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = uu.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
          }
          dispose(uu) {
            let Eu;
            if (uu = uu || this.fR, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (Eu = this._parentContainer.postProcesses.indexOf(this), Eu > -1 && this._parentContainer.postProcesses.splice(Eu, 1), this._parentContainer = null), Eu = this._engine.postProcesses.indexOf(this), -1 !== Eu && this._engine.postProcesses.splice(Eu, 1), this.wV.notifyObservers(), uu) {
              if (uu.detachPostProcess(this), Eu = uu._postProcesses.indexOf(this), 0 === Eu && uu._postProcesses.length > 0) {
                const uu = this.fR._getFirstPostProcess();
                uu && uu.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const uu = fu.e.Serialize(this),
              Eu = this.getCamera() || this._scene && this._scene.activeCamera;
            return uu.customType = "BABYLON." + this.getClassName(), uu.cameraId = Eu ? Eu.id : null, uu.reusable = this._reusable, uu.textureType = this._textureType, uu.fragmentUrl = this._fragmentUrl, uu.parameters = this._parameters, uu.samplers = this._samplers, uu.uniformBuffers = this._uniformBuffers, uu.options = this._options, uu.defines = this._postProcessDefines, uu.textureFormat = this._textureFormat, uu.vertexUrl = this._vertexUrl, uu.indexParameters = this._indexParameters, uu
          }
          clone() {
            const Eu = this.serialize();
            Eu._engine = this._engine, Eu.cameraId = null;
            const ju = uu.Parse(Eu, this._scene, "");
            return ju ? (ju.onActivateObservable = this.onActivateObservable.clone(), ju.onSizeChangedObservable = this.onSizeChangedObservable.clone(), ju.onApplyObservable = this.onApplyObservable.clone(), ju.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), ju.onAfterRenderObservable = this.onAfterRenderObservable.clone(), ju._prePassEffectConfiguration = this._prePassEffectConfiguration, ju) : null
          }
          static Parse(uu, Eu, ju) {
            const su = (0, Cu.d)(uu.customType);
            if (!su || !su._Parse) return null;
            const Uu = Eu ? Eu.getCameraById(uu.cameraId) : null;
            return su._Parse(uu, Uu, Eu, ju)
          }
          static _Parse(Eu, ju, su, Uu) {
            return fu.e.Parse((() => new uu(Eu.name, Eu.fragmentUrl, Eu.parameters, Eu.samplers, Eu.options, ju, Eu.renderTargetSamplingMode, Eu._engine, Eu.reusable, Eu.defines, Eu.textureType, Eu.vertexUrl, Eu.indexParameters, !1, Eu.textureFormat)), Eu, su, Uu)
          }
        }, (() => {
          const ju = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Eu = [(0, qu.E)()], lu = [(0, qu.E)()], bu = [(0, qu.E)()], Ou = [(0, qu.E)()], Yu = [(0, qu.E)()], Du = [(0, qu.m)()], gu = [(0, qu.E)()], Mu = [(0, qu.E)()], eu = [(0, qu.E)()], Gu = [(0, qu.E)()], pu = [(0, qu.E)()], wu = [(0, qu.E)()], Ju = [(0, qu.E)()], du = [(0, qu.E)()], au = [(0, qu.E)("samples")], Pu = [(0, qu.E)()], (0, su.e)(uu, null, lu, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: uu => "name" in uu,
              get: uu => uu.name
            },
            metadata: ju
          }, null, ou), (0, su.e)(uu, null, eu, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: uu => "alphaMode" in uu,
              get: uu => uu.alphaMode
            },
            metadata: ju
          }, null, ou), (0, su.e)(null, null, Eu, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: uu => "uniqueId" in uu,
              get: uu => uu.uniqueId,
              set: (uu, Eu) => {
                uu.uniqueId = Eu
              }
            },
            metadata: ju
          }, ku, mu), (0, su.e)(null, null, bu, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: uu => "width" in uu,
              get: uu => uu.width,
              set: (uu, Eu) => {
                uu.width = Eu
              }
            },
            metadata: ju
          }, vu, Ku), (0, su.e)(null, null, Ou, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: uu => "height" in uu,
              get: uu => uu.height,
              set: (uu, Eu) => {
                uu.height = Eu
              }
            },
            metadata: ju
          }, Vu, ru), (0, su.e)(null, null, Yu, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: uu => "renderTargetSamplingMode" in uu,
              get: uu => uu.renderTargetSamplingMode,
              set: (uu, Eu) => {
                uu.renderTargetSamplingMode = Eu
              }
            },
            metadata: ju
          }, Qu, iu), (0, su.e)(null, null, Du, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: uu => "clearColor" in uu,
              get: uu => uu.clearColor,
              set: (uu, Eu) => {
                uu.clearColor = Eu
              }
            },
            metadata: ju
          }, Wu, Su), (0, su.e)(null, null, gu, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: uu => "autoClear" in uu,
              get: uu => uu.autoClear,
              set: (uu, Eu) => {
                uu.autoClear = Eu
              }
            },
            metadata: ju
          }, Iu, Fu), (0, su.e)(null, null, Mu, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: uu => "forceAutoClearInAlphaMode" in uu,
              get: uu => uu.forceAutoClearInAlphaMode,
              set: (uu, Eu) => {
                uu.forceAutoClearInAlphaMode = Eu
              }
            },
            metadata: ju
          }, Bu, Lu), (0, su.e)(null, null, Gu, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: uu => "alphaConstants" in uu,
              get: uu => uu.alphaConstants,
              set: (uu, Eu) => {
                uu.alphaConstants = Eu
              }
            },
            metadata: ju
          }, tu, xu), (0, su.e)(null, null, pu, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: uu => "enablePixelPerfectMode" in uu,
              get: uu => uu.enablePixelPerfectMode,
              set: (uu, Eu) => {
                uu.enablePixelPerfectMode = Eu
              }
            },
            metadata: ju
          }, Tu, Hu), (0, su.e)(null, null, wu, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: uu => "forceFullscreenViewport" in uu,
              get: uu => uu.forceFullscreenViewport,
              set: (uu, Eu) => {
                uu.forceFullscreenViewport = Eu
              }
            },
            metadata: ju
          }, Au, nu), (0, su.e)(null, null, Ju, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: uu => "scaleMode" in uu,
              get: uu => uu.scaleMode,
              set: (uu, Eu) => {
                uu.scaleMode = Eu
              }
            },
            metadata: ju
          }, yu, zu), (0, su.e)(null, null, du, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: uu => "alwaysForcePOT" in uu,
              get: uu => uu.alwaysForcePOT,
              set: (uu, Eu) => {
                uu.alwaysForcePOT = Eu
              }
            },
            metadata: ju
          }, Ru, uE), (0, su.e)(null, null, au, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: uu => "_samples" in uu,
              get: uu => uu._samples,
              set: (uu, Eu) => {
                uu._samples = Eu
              }
            },
            metadata: ju
          }, EE, jE), (0, su.e)(null, null, Pu, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: uu => "adaptScaleToCurrentViewport" in uu,
              get: uu => uu.adaptScaleToCurrentViewport,
              set: (uu, Eu) => {
                uu.adaptScaleToCurrentViewport = Eu
              }
            },
            metadata: ju
          }, sE, UE), ju && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ju
          })
        })(), uu
      })(),
      Yu = !1;

    function hu() {
      Yu || (Yu = !0, bu.d.prototype.setTextureFromPostProcess = function(uu, Eu, ju) {
        let su = null;
        Eu && (Eu._forcedOutputTexture ? su = Eu._forcedOutputTexture : Eu._textures.data[Eu._currentRenderTextureInd] && (su = Eu._textures.data[Eu._currentRenderTextureInd])), this._bindTexture(uu, su?.texture ?? null, ju)
      }, bu.d.prototype.setTextureFromPostProcessOutput = function(uu, Eu, ju) {
        this._bindTexture(uu, Eu?._outputTexture?.texture ?? null, ju)
      }, lu.b.prototype.setTextureFromPostProcess = function(uu, Eu) {
        this._engine.setTextureFromPostProcess(this._samplers[uu], Eu, uu)
      }, lu.b.prototype.setTextureFromPostProcessOutput = function(uu, Eu) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[uu], Eu, uu)
      }, (0, Cu.f)("BABYLON.PostProcess", Ou))
    }
  },
  42093: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu,
      f: () => Zu
    });
    var su = ju(42075),
      Uu = ju(37506);
    class Zu extends su.d {
      _gatherImports(uu, Eu) {
        uu ? (this._webGPUReady = !0, Eu.push(Promise.all([ju.e(375).then((() => ju(61679)))]))) : Eu.push(Promise.all([ju.e(376).then((() => ju(61682)))])), super._gatherImports(uu, Eu)
      }
      constructor(uu) {
        let Eu = arguments.length > 2 ? arguments[2] : void 0;
        const ju = {
          name: uu,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Uu.b.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: Zu.FragmentUrl,
          ...Eu
        };
        ju.engine || (ju.engine = Uu.b.LastCreatedEngine), super(ju)
      }
    }
    Zu.FragmentUrl = "pass";
    class Xu extends su.d {
      _gatherImports(uu, Eu) {
        uu ? (this._webGPUReady = !0, Eu.push(Promise.all([ju.e(377).then((() => ju(61686)))]))) : Eu.push(Promise.all([ju.e(378).then((() => ju(61694)))])), super._gatherImports(uu, Eu)
      }
      constructor(uu) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: uu,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Uu.b.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: Xu.FragmentUrl,
          defines: "#define POSITIVEX"
        }), this._face = 0
      }
      get face() {
        return this._face
      }
      set face(uu) {
        if (!(uu < 0 || uu > 5)) switch (this._face = uu, this._face) {
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
    Xu.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);