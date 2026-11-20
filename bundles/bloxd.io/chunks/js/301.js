export const id = 301;
export const ids = [301];
export const modules = {
  41392: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Wu
    });
    var Eu = yu(36858),
      Ku = yu(36830),
      Qu = yu(40054),
      mu = yu(39711),
      Ju = yu(39496),
      Nu = yu(38448),
      Xu = yu(39693),
      Vu = yu(39721),
      ru = yu(36842),
      Bu = yu(39447),
      xu = yu(39667),
      Su = yu(39764);
    class pu {
      get renderList() {
        return this._renderList
      }
      set renderList(uu) {
        this._renderList !== uu && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), uu && (this._unObserveRenderList = (0, ru.e)(uu, this._renderListHasChanged)), this._renderList = uu)
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
              const Ru = this._renderPassIds[uu];
              this._engine._renderPassNames[Ru] = `${this._name}#${uu}`
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
      setMaterialForRendering(uu, Ru) {
        let yu;
        yu = Array.isArray(uu) ? uu : [uu];
        for (let Eu = 0; Eu < yu.length; ++Eu)
          for (let uu = 0; uu < this.options.numPasses; ++uu) {
            let Ku = yu[Eu];
            yu[Eu].ZD && (Ku = yu[Eu].dKu), Ku.setMaterialForRenderPass(this._renderPassIds[uu], void 0 !== Ru ? Array.isArray(Ru) ? Ru[uu] : Ru : void 0)
          }
      }
      _freezeActiveMeshes(uu) {
        this._freezeActiveMeshesCancel = (0, Bu.f)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, uu)
            for (let uu = 0; uu < this._activeMeshes.length; uu++) this._activeMeshes.data[uu]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((uu, Ru) => {
          this._freezeActiveMeshesCancel = null, Ru ? (Nu.e.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), uu && Nu.e.Error(uu)) : (Nu.e.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), uu && (Nu.e.Error(uu), uu.stack && Nu.e.Error(uu.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let uu = 0; uu < this._activeMeshes.length; uu++) this._activeMeshes.data[uu]._unFreeze();
        this._isFrozen = !1
      }
      constructor(uu, Ru, yu) {
        this._unObserveRenderList = null, this._renderListHasChanged = (uu, Ru) => {
          const yu = this._renderList ? this._renderList.length : 0;
          if (0 === Ru && yu > 0 || 0 === yu)
            for (const Eu of this._scene.meshes) Eu._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new Eu.b, this.onAfterRenderObservable = new Eu.b, this.onBeforeRenderingManagerRenderObservable = new Eu.b, this.onAfterRenderingManagerRenderObservable = new Eu.b, this.onInitRenderingObservable = new Eu.b, this.onFinishRenderingObservable = new Eu.b, this.onFastPathRenderObservable = new Eu.b, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new xu.i(256), this._activeBoundingBoxes = new xu.i(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = uu, this._scene = Ru, this._engine = this._scene.eS(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...yu
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new Vu.b(Ru), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const uu of this._scene.lights) uu.getTypeID() === Su.b.LIGHTTYPEID_CLUSTERED_CONTAINER && uu.isSupported && uu._updateBatches(this.activeCamera).render()
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
      _createSceneUBO(uu, Ru) {
        const yu = this._scene.eS(),
          Eu = new Xu.c(yu, void 0, Ru, uu, void 0, !1);
        return Eu.addUniform("viewProjection", 16), Ru && Eu.addUniform("viewProjectionR", 16), Eu.addUniform("view", 16), Eu.addUniform("projection", 16), Eu.addUniform("vEyePosition", 4), Eu.addUniform("inverseProjection", 16), Eu
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const uu = this._engine._currentRenderTarget,
          Ru = !(!uu || !uu.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const uu = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${uu} for ${this.name}`, Ru)), this._sceneUBOIsMultiview.push(Ru)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== Ru && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, Ru), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = Ru);
        const yu = this._sceneUBOs[this._currentSceneUBOIndex++];
        return yu.unbindEffect(), yu
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
      isReadyForRendering(uu, Ru) {
        this.prepareRenderList(), this.initRender(uu, Ru);
        const yu = this._checkReadiness();
        return this.finishRender(), yu
      }
      prepareRenderList() {
        const uu = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let Ru = 0; Ru < this._waitingRenderList.length; Ru++) {
              const yu = this._waitingRenderList[Ru],
                Eu = uu.getMeshById(yu);
              Eu && this.renderList.push(Eu)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const uu = this._scene.meshes;
          for (let Ru = 0; Ru < uu.length; Ru++) {
            const yu = uu[Ru];
            this.renderListPredicate(yu) && this.renderList.push(yu)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(uu, Ru) {
        const yu = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), yu && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(yu.getViewMatrix(), yu.getProjectionMatrix(!0)), this._scene._activeCamera = yu, this._engine.setViewport(yu.rigParent ? yu.rigParent.viewport : yu.viewport, uu, Ru)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const uu = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (uu.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), uu._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== uu.activeCamera && uu.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), uu.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const yu = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[uu], this.onBeforeRenderObservable.notifyObservers(uu);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(uu);
        else {
          const Ru = this._prepareRenderingManager(uu),
            yu = this._scene.getOutlineRenderer?.(),
            Eu = yu?.enabled;
          yu && (yu.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(uu), this._renderingManager.render(this.customRenderFunction, Ru, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(uu), yu && (yu.enabled = Eu)
        }
        Ru || this.onAfterRenderObservable.notifyObservers(uu), this._engine.currentRenderPassId = yu
      }
      _checkReadiness() {
        const uu = this._scene,
          Ru = this._engine.currentRenderPassId;
        let yu = !0;
        uu.getViewMatrix() || uu.updateTransformMatrix();
        const Eu = this.options.numPasses;
        for (let Ku = 0; Ku < Eu && yu; Ku++) {
          const Ru = this.renderList ? this.renderList : uu.frameGraph ? uu.meshes : uu.getActiveMeshes().data,
            Qu = this.renderList || uu.frameGraph ? Ru.length : uu.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[Ku], this.onBeforeRenderObservable.notifyObservers(Ku);
          let mu = null,
            Ju = Qu;
          this.getCustomRenderList && (mu = this.getCustomRenderList(Ku, Ru, Qu), mu && (Ju = mu.length)), mu || (mu = Ru), this.options.doNotChangeAspectRatio || uu.updateTransformMatrix(!0);
          for (let uu = 0; uu < Ju && yu; ++uu) {
            const Ru = mu[uu];
            if (!Ru.isEnabled() || Ru.isBlocked || !Ru.isVisible || !Ru.mC) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(Ru, this.refreshRate, !0)) {
                yu = !1;
                continue
              }
            } else if (!Ru.isReady(!0)) {
              yu = !1;
              continue
            }
            let Eu = Ru._edgesRenderer,
              Ku = Ru.hasThinInstances;
            if (Ru.ZD) {
              const uu = Ru.dKu;
              uu.edgesShareWithInstances && uu._edgesRenderer?.isEnabled && (Eu = uu._edgesRenderer, Ku = !0)
            } else Ru.HKu && Ru.edgesShareWithInstances && (Ku = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && Eu?.isEnabled && (Eu.isReady(Ku) || (yu = !1))
          }
          if (this.renderParticles && uu.particlesEnabled) {
            const Ru = this.particleSystemList || uu.JC;
            for (const uu of Ru) uu.isReady() || (yu = !1)
          }
          if (this.renderSprites && uu.spritesEnabled) {
            const Ru = this.spriteManagerList || uu.spriteManagers;
            if (Ru)
              for (const Eu of Ru) uu.activeCamera && 0 === (Eu.layerMask & uu.activeCamera.layerMask) || Eu.isReady && !Eu.isReady() && (yu = !1)
          }
          this.onAfterRenderObservable.notifyObservers(Ku), Eu > 1 && (uu.incrementRenderId(), uu.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = Ru, yu
      }
      _prepareRenderingManager() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const yu = this._scene;
        let Eu, Ku, Qu = null;
        const mu = this.renderList ? this.renderList : yu.frameGraph ? yu.meshes : yu.getActiveMeshes().data,
          Ju = this.renderList || yu.frameGraph ? mu.length : yu.getActiveMeshes().length;
        if (this.getCustomRenderList && (Qu = this.getCustomRenderList(uu, mu, Ju)), Qu) Eu = Qu.length, Ku = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !Ru && !this._engine.isWebGPU) return mu;
          this._defaultRenderListPrepared = !0, Qu = mu, Eu = Ju, Ku = !this.renderList || this.forceLayerMaskCheck
        }
        const Nu = yu.activeCamera,
          Xu = this.cameraForLOD ?? Nu,
          Vu = yu.getBoundingBoxRenderer?.();
        if (yu._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && Vu) {
            Vu.reset();
            for (let uu = 0; uu < this._activeBoundingBoxes.length; uu++) {
              const Ru = this._activeBoundingBoxes.data[uu];
              Vu.renderList.push(Ru)
            }
          }
          return Qu
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), Vu && Vu.reset(), this.renderMeshes) {
          const uu = yu.getRenderId(),
            Ru = yu.getFrameId();
          for (let mu = 0; mu < Eu; mu++) {
            const Eu = Qu[mu];
            if (Eu && !Eu.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(Eu, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!Eu.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let Qu, mu;
              if (Xu) {
                const uu = Eu._internalAbstractMeshDataInfo._currentLOD.get(Xu);
                uu && uu[1] === Ru ? Qu = uu[0] : (Qu = yu.customLODSelector ? yu.customLODSelector(Eu, Xu) : Eu.getLOD(Xu), uu ? (uu[0] = Qu, uu[1] = Ru) : Eu._internalAbstractMeshDataInfo._currentLOD.set(Xu, [Qu, Ru]))
              } else Qu = Eu;
              if (!Qu) continue;
              if (Qu !== Eu && 0 !== Qu.billboardMode && Qu.computeWorldMatrix(), Qu._preActivateForIntermediateRendering(uu), mu = !(!Ku || !Nu) && 0 === (Eu.layerMask & Nu.layerMask), Eu.isEnabled() && Eu.isVisible && Eu.mC && !mu) {
                if (this._activeMeshes.push(Eu), Qu._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, Qu !== Eu && Qu._activate(uu, !0), this.enableBoundingBoxRendering && Vu && Vu._preActiveMesh(Eu), Eu._activate(uu, !0) && Eu.mC.length) {
                  Eu.ZD ? Eu._internalAbstractMeshDataInfo._actAsRegularMesh && (Qu = Eu) : Qu._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, Qu._internalAbstractMeshDataInfo._isActiveIntermediate = !0, yu._prepareSkeleton(Qu);
                  for (let uu = 0; uu < Qu.mC.length; uu++) {
                    const Ru = Qu.mC[uu];
                    this.enableBoundingBoxRendering && Vu && Vu._evaluateSubMesh(Eu, Ru), this._renderingManager.dispatch(Ru, Qu)
                  }
                }
                Eu._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && Vu && Ru)
          for (let ru = 0; ru < Vu.renderList.length; ru++) {
            const uu = Vu.renderList.data[ru];
            this._activeBoundingBoxes.push(uu)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const uu = this.particleSystemList || yu.JC;
          for (let Ru = 0; Ru < uu.length; Ru++) {
            const yu = uu[Ru],
              Eu = yu.emitter;
            yu.isStarted() && Eu && (!Eu.position || Eu.isEnabled()) && this._renderingManager.dispatchParticles(yu)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return Qu
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(uu, Ru, yu, Eu)
      }
      setRenderingAutoClearDepthStencil(uu, Ru) {
        let yu = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Eu = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(uu, Ru, yu, Eu), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const uu = new pu(this.name, this._scene, this.options);
        return this.renderList && (uu.renderList = this.renderList.slice(0)), uu
      }
      dispose() {
        const uu = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          Ru = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let yu = 0; yu < Ru; yu++) {
          const Ru = uu[yu];
          Ru && void 0 !== Ru.getMaterialForRenderPass(this.renderPassId) && Ru.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const yu of this._sceneUBOs) yu.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === pu.REFRESHRATE_RENDER_ONCE && (this.refreshRate = pu.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    pu.REFRESHRATE_RENDER_ONCE = 0, pu.REFRESHRATE_RENDER_ONEVERYFRAME = 1, pu.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var Tu = yu(39430);
    class Wu extends Qu.h {
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
      setMaterialForRendering(uu, Ru) {
        this._objectRenderer.setMaterialForRendering(uu, Ru)
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
        const Ru = this.lD();
        Ru && Ru.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(uu, Ru, yu) {
        let mu, Ju, Xu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Vu = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          ru = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Bu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          xu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Qu.h.TRILINEAR_SAMPLINGMODE,
          Su = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          Tu = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          Wu = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          ju = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          Hu = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          du = arguments.length > 13 ? arguments[13] : void 0,
          bu = arguments.length > 14 ? arguments[14] : void 0,
          Cu = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          ku = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          eu = !0,
          Au = !1;
        if ("object" === typeof Xu) {
          const uu = Xu;
          Xu = !!uu.generateMipMaps, Vu = uu.doNotChangeAspectRatio ?? !0, ru = uu.type ?? 0, Bu = !!uu.isCube, xu = uu.samplingMode ?? Qu.h.TRILINEAR_SAMPLINGMODE, Su = uu.generateDepthBuffer ?? !0, Tu = !!uu.generateStencilBuffer, Wu = !!uu.isMulti, ju = uu.format ?? 5, Hu = !!uu.delayAllocation, du = uu.samples, bu = uu.creationFlags, Cu = !!uu.noColorAttachment, ku = !!uu.useSRGBBuffer, mu = uu.colorAttachment, eu = uu.gammaSpace ?? eu, Ju = uu.existingObjectRenderer, Au = !!uu.enableClusteredLights
        }
        if (super(null, yu, !Xu, void 0, xu, void 0, void 0, void 0, void 0, ju), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new Eu.b, this.onAfterUnbindObservable = new Eu.b, this.onClearObservable = new Eu.b, this.onResizeObservable = new Eu.b, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = Ku.p.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(yu = this.lD())) return;
        const Du = this.lD().eS();
        this._gammaSpace = eu, this._coordinatesMode = Qu.h.PROJECTION_MODE, this.name = uu, this.isRenderTarget = !0, this._initialSizeParameter = Ru, this._dontDisposeObjectRenderer = !!Ju, this._processSizeParameter(Ru), this._objectRenderer = Ju ?? new pu(uu, yu, {
          numPasses: Bu ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: Vu,
          enableClusteredLights: Au
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const uu = this._scene;
          if (!this._disableEngineStages)
            for (const Ru of uu._beforeRenderTargetClearStage) Ru.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(Du) : this.skipInitialClear || Du.clear(this.clearColor ?? uu.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || uu.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const Ru of uu._beforeRenderTargetDrawStage) Ru.action(this, this._currentFaceIndex, this._currentLayer);
          Du._debugPushGroup && Du._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (Du._debugPopGroup && Du._debugPopGroup(), !this._disableEngineStages)
            for (const Ru of this._scene._afterRenderTargetDrawStage) Ru.action(this, this._currentFaceIndex, this._currentLayer);
          const uu = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const Ru of this._scene._afterRenderTargetPostProcessStage) Ru.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = uu), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), Du) : Nu.e.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(Du) : this.skipInitialClear || Du.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = Du.onResizeObservable.add((() => {})), this._generateMipMaps = !!Xu, this._doNotChangeAspectRatio = Vu, Wu || (this._renderTargetOptions = {
          generateMipMaps: Xu,
          type: ru,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: Su,
          generateStencilBuffer: Tu,
          samples: du,
          creationFlags: bu,
          noColorAttachment: Cu,
          useSRGBBuffer: ku,
          colorAttachment: mu,
          label: this.name
        }, this.samplingMode === Qu.h.NEAREST_SAMPLINGMODE && (this.wrapU = Qu.h.CLAMP_ADDRESSMODE, this.wrapV = Qu.h.CLAMP_ADDRESSMODE), Hu || (Bu ? (this._renderTarget = yu.eS().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = Qu.h.INVCUBIC_MODE, this._textureMatrix = Ku.d.Identity()) : this._renderTarget = yu.eS().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== du && (this.samples = du)))
      }
      createDepthStencilTexture() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Qu = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(uu, Ru, yu, Eu, Ku, Qu)
      }
      _processSizeParameter(uu) {
        if (uu.ratio) {
          this._sizeRatio = uu.ratio;
          const Ru = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(Ru.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(Ru.getRenderHeight(), this._sizeRatio)
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
          const uu = this.lD();
          if (!uu) return;
          this._postProcessManager = new mu.c(uu), this._postProcesses = new Array
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
        const Ru = this._postProcesses.indexOf(uu); - 1 !== Ru && (this._postProcesses.splice(Ru, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
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
        const Ru = this._size.depth;
        return Ru || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(uu) {
        const Ru = Math.max(1, this.getRenderSize() * uu);
        this.resize(Ru)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(uu) {
        const Ru = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const yu = this.lD();
        yu && (this._processSizeParameter(uu), this._renderTarget = Ru ? yu.eS().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : yu.eS().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(uu, Ru)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => yu(41401))).then((uu => this._dumpTools = uu))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const uu = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), uu
      }
      _render() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const yu = this.lD();
        if (!yu) return;
        void 0 !== this.useCameraPostProcesses && (uu = this.useCameraPostProcesses);
        const Eu = yu.eS();
        if (Eu._debugPushGroup && Eu._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let Ku = 0; Ku < 6; Ku++) this._renderToTarget(Ku, uu, Ru), yu.incrementRenderId(), yu.resetCachedMaterial();
          else this._renderToTarget(0, uu, Ru);
        else
          for (let Ku = 0; Ku < this.getRenderLayers(); Ku++) this._renderToTarget(0, uu, Ru, Ku), yu.incrementRenderId(), yu.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), Eu._debugPopGroup && Eu._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(uu, Ru) {
        const yu = uu * Ru,
          Eu = (0, Ju.m)(yu + 16384 / (128 + yu));
        return Math.min((0, Ju.c)(uu), Eu)
      }
      _bindFrameBuffer() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const yu = this.lD();
        if (!yu) return;
        const Eu = yu.eS();
        this._renderTarget && Eu.bindFramebuffer(this._renderTarget, this.isCube ? uu : void 0, void 0, void 0, this.ignoreCameraViewport, 0, Ru)
      }
      _unbindFrameBuffer(uu, Ru) {
        this._renderTarget && uu.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(Ru)
        }))
      }
      _prepareFrame(uu, Ru, yu, Eu) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(Ru, yu) : Eu && uu.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(Ru, yu)
      }
      _renderToTarget(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Ku = this.lD();
        if (!Ku) return;
        const Qu = Ku.eS();
        this._currentFaceIndex = uu, this._currentLayer = Eu, this._currentUseCameraPostProcess = Ru, this._currentDumpForDebug = yu, this._prepareFrame(Ku, uu, Eu, Ru), this._objectRenderer.render(uu + Eu, !0), this._unbindFrameBuffer(Qu, uu), this._texture && this.isCube && 5 === uu && Qu.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(uu, Ru, yu, Eu)
      }
      setRenderingAutoClearDepthStencil(uu, Ru) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(uu, Ru)
      }
      clone() {
        const uu = this.getSize(),
          Ru = new Wu(this.name, uu, this.lD(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return Ru.hasAlpha = this.hasAlpha, Ru.level = this.level, Ru.coordinatesMode = this.coordinatesMode, this.renderList && (Ru.renderList = this.renderList.slice(0)), Ru
      }
      serialize() {
        if (!this.name) return null;
        const uu = super.serialize();
        if (uu.renderTargetSize = this.getRenderSize(), uu.renderList = [], this.renderList)
          for (let Ru = 0; Ru < this.renderList.length; Ru++) uu.renderList.push(this.renderList[Ru].id);
        return uu
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.lD().eS().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const uu = this.lD();
        if (!uu) return;
        let Ru = uu.customRenderTargets.indexOf(this);
        Ru >= 0 && uu.customRenderTargets.splice(Ru, 1);
        for (const yu of uu.cameras) Ru = yu.customRenderTargets.indexOf(this), Ru >= 0 && yu.customRenderTargets.splice(Ru, 1);
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
    Wu.REFRESHRATE_RENDER_ONCE = pu.REFRESHRATE_RENDER_ONCE, Wu.REFRESHRATE_RENDER_ONEVERYFRAME = pu.REFRESHRATE_RENDER_ONEVERYFRAME, Wu.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = pu.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(Wu.prototype, "noPrePassRenderer") || Object.defineProperty(Wu.prototype, "noPrePassRenderer", (0, Tu.e)("RenderTargetTexture", "noPrePassRenderer"))
  },
  41376: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Xu,
      h: () => Vu
    });
    var Eu = yu(39706),
      Ku = yu(37842),
      Qu = yu(36858),
      mu = yu(39399),
      Ju = yu(39899);
    const Nu = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class Xu {
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Nu;
        this._fullscreenViewport = new Ku.c(0, 0, 1, 1);
        const yu = Ru.positions ?? Nu.positions,
          Qu = Ru.indices ?? Nu.indices;
        this.engine = uu, this._vertexBuffers = {
          [Eu.h.PositionKind]: new Eu.h(uu, yu, Eu.h.PositionKind, !1, !1, 2)
        }, this._indexBuffer = uu.createIndexBuffer(Qu), this._indexBufferLength = Qu.length, this._onContextRestoredObserver = uu.onContextRestoredObservable.add((() => {
          this._indexBuffer = uu.createIndexBuffer(Qu);
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
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = Ru, this.engine.stencilState.stencilTest = yu, this.engine.enableEffect(uu.drawWrapper), this.bindBuffers(uu.effect), uu.onApplyObservable.notifyObservers({})
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
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!uu.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const yu = null === Ru ? null : this._isRenderTargetTexture(Ru) ? Ru.renderTarget : Ru;
        yu && this.engine.bindFramebuffer(yu), this.applyEffectWrapper(uu), this.draw(), yu && this.engine.unBindFramebuffer(yu), this.restoreStates()
      }
      dispose() {
        const uu = this._vertexBuffers[Eu.h.PositionKind];
        uu && (uu.dispose(), delete this._vertexBuffers[Eu.h.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class Vu {
      static RegisterShaderCodeProcessing(uu, Ru) {
        Ru ? Vu._CustomShaderCodeProcessing[uu ?? ""] = Ru : delete Vu._CustomShaderCodeProcessing[uu ?? ""]
      }
      static _GetShaderCodeProcessing(uu) {
        return Vu._CustomShaderCodeProcessing[uu] ?? Vu._CustomShaderCodeProcessing[""]
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
        this.alphaMode = 0, this.onEffectCreatedObservable = new Qu.b(void 0, !0), this.onApplyObservable = new Qu.b, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
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
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.onContextRestoredObservable.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new Ju.b(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const Ru = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, Ru, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Eu = arguments.length > 2 ? arguments[2] : void 0,
          Ku = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, Ku && this._importPromises.push(...Ku);
        const Qu = this.options.engine.isWebGPU && !Vu.ForceGLSL;
        this._gatherImports(Qu, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(Qu && this._webGPUReady ? yu.e(356).then((() => yu(61248))) : yu.e(345).then((() => yu(61006)))), void 0 !== Eu && Eu(Qu, this._importPromises), Qu && this._webGPUReady && (this.options.shaderLanguage = 1), uu || this.updateEffect(Ru)
      }
      updateEffect() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Eu = arguments.length > 3 ? arguments[3] : void 0,
          Ku = arguments.length > 4 ? arguments[4] : void 0,
          Qu = arguments.length > 5 ? arguments[5] : void 0,
          Ju = arguments.length > 6 ? arguments[6] : void 0,
          Nu = arguments.length > 7 ? arguments[7] : void 0;
        const Xu = Vu._GetShaderCodeProcessing(this.name);
        if (Xu?.defineCustomBindings) {
          const Eu = Ru?.slice() ?? [];
          Eu.push(...this.options.uniforms);
          const Ku = yu?.slice() ?? [];
          Ku.push(...this.options.samplers), uu = Xu.defineCustomBindings(this.name, uu, Eu, Ku), Ru = Eu, yu = Ku
        }
        this.options.defines = uu || "";
        const ru = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let Bu;
        Bu = this.options.extraInitializationsAsync ? async () => {
          await (ru?.()), await this.options.extraInitializationsAsync()
        }: ru, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: Ju ?? this._shaderPath.vertex,
          fragment: Nu ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: Ru || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: yu || this.options.samplers,
          defines: null !== uu ? uu : "",
          fallbacks: null,
          onCompiled: Ku ?? this.options.onCompiled,
          onError: Qu ?? null,
          indexParameters: Eu || this.options.indexParameters,
          processCodeAfterIncludes: Xu?.processCodeAfterIncludes ? (uu, Ru) => Xu.processCodeAfterIncludes(this.name, uu, Ru) : null,
          processFinalCode: Xu?.processFinalCode ? (uu, Ru) => Xu.processFinalCode(this.name, uu, Ru) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: Bu
        }, this.options.engine) : this._drawWrapper.effect = new mu.b(this._shaderPath, this.options.attributeNames, Ru || this.options.uniforms, yu || this.options.samplerNames, this.options.engine, uu, void 0, Ku || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, Bu), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !uu && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), Vu._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.eS().onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    Vu.ForceGLSL = !1, Vu._CustomShaderCodeProcessing = {}
  },
  41401: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      Dispose: () => ju,
      DumpData: () => Wu,
      DumpDataAsync: () => Tu,
      DumpFramebuffer: () => pu,
      DumpTools: () => Hu,
      EncodeImageAsync: () => Su,
      RegisterDumpTools: () => bu
    });
    var Eu = yu(39560),
      Ku = yu(41376),
      Qu = yu(39655),
      mu = yu(36865),
      Ju = yu(36851),
      Nu = yu(38448),
      Xu = yu(39621),
      Vu = yu(39566);
    let ru = null;
    async function Bu() {
      return ru || (ru = async function() {
        const uu = Ju.b.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        uu instanceof OffscreenCanvas && Nu.e.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: Ru
        } = await Promise.resolve().then((() => yu(39396)));
        if (!Ru.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const Eu = new Ru(uu, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        Ju.b.Instances.pop(), Ju.b.OnEnginesDisposedObservable.add((uu => {
          Eu && uu !== Eu && !Eu.wyu && 0 === Ju.b.Instances.length && ju()
        })), Eu.getCaps().parallelShaderCompile = void 0;
        const Qu = new Ku.e(Eu),
          {
            passPixelShader: mu
          } = await yu.e(364).then((() => yu(61323))),
          Xu = new Ku.h({
            engine: Eu,
            name: mu.name,
            fragmentShader: mu.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: uu,
          dumpEngine: {
            engine: Eu,
            renderer: Qu,
            wrapper: Xu
          }
        }
      }()), await ru
    }
    let xu = (() => {
      var uu;
      let Ru, yu = [];
      return uu = class {
        static async EncodeImageAsync(uu, Ru, yu, Eu, Ku, mu) {
          const Ju = await Bu(),
            Nu = Ju.dumpEngine;
          Nu.engine.setSize(Ru, yu, !0);
          const Xu = Nu.engine.createRawTexture(uu, Ru, yu, 5, !1, !Ku, 1);
          return Nu.renderer.setViewport(), Nu.renderer.applyEffectWrapper(Nu.wrapper), Nu.wrapper.effect._bindTexture("textureSampler", Xu), Nu.renderer.draw(), Xu.dispose(), await new Promise(((uu, Ru) => {
            Qu.i.ToBlob(Ju.canvas, (yu => {
              yu ? uu(yu) : Ru(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), Eu, mu)
          }))
        }
      }, (() => {
        const Ku = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Ru = [Vu.g], (0, Eu.h)(uu, null, Ru, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: uu => "EncodeImageAsync" in uu,
            get: uu => uu.EncodeImageAsync
          },
          metadata: Ku
        }, null, yu), Ku && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ku
        }), (0, Eu.l)(uu, yu)
      })(), uu
    })();
    const Su = xu.EncodeImageAsync;
    async function pu(uu, Ru, yu, Eu) {
      let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Qu = arguments.length > 5 ? arguments[5] : void 0,
        mu = arguments.length > 6 ? arguments[6] : void 0;
      const Ju = await yu.readPixels(0, 0, uu, Ru);
      Wu(uu, Ru, new Uint8Array(Ju.buffer), Eu, Ku, Qu, !0, void 0, mu)
    }
    async function Tu(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Ku = arguments.length > 4 ? arguments[4] : void 0,
        Ju = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Vu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        ru = arguments.length > 7 ? arguments[7] : void 0;
      if (yu instanceof Float32Array) {
        const uu = new Uint8Array(yu.length);
        let Ru = yu.length;
        for (; Ru--;) {
          const Eu = yu[Ru];
          uu[Ru] = Math.round(255 * (0, mu.Clamp)(Eu))
        }
        yu = uu
      }
      const Bu = await xu.EncodeImageAsync(yu, uu, Ru, Eu, Ju, ru);
      void 0 !== Ku && Qu.i.DownloadBlob(Bu, Ku), Bu.type !== Eu && Nu.e.Warn(`DumpData: The requested mimeType '${Eu}' is not supported. The result has mimeType '${Bu.type}' instead.`);
      const Su = await Bu.arrayBuffer();
      return Vu ? Su : `data:${Eu};base64,${(0,Xu.g)(Su)}`
    }

    function Wu(uu, Ru, yu, Eu) {
      let Ku = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== Ku || Eu || (Ku = ""), Tu(uu, Ru, yu, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", Ku, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((uu => {
        Eu && Eu(uu)
      }))
    }

    function ju() {
      ru && (ru?.then((uu => {
        uu.canvas instanceof HTMLCanvasElement && uu.canvas.remove(), uu.dumpEngine && (uu.dumpEngine.engine.dispose(), uu.dumpEngine.renderer.dispose(), uu.dumpEngine.wrapper.dispose())
      })), ru = null)
    }
    const Hu = {
      DumpData: Wu,
      DumpDataAsync: Tu,
      DumpFramebuffer: pu,
      Dispose: ju
    };
    let du = !1;

    function bu() {
      if (du) return;
      du = !0;
      Qu.i.DumpData = Wu, Qu.i.DumpDataAsync = Tu, Qu.i.DumpFramebuffer = pu
    }
  },
  41384: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => xu,
      g: () => Su,
      h: () => pu
    });
    var Eu = yu(40054),
      Ku = yu(41392),
      Qu = yu(39560),
      mu = yu(41369),
      Ju = yu(39582),
      Nu = yu(41399),
      Xu = yu(39566);
    class Vu extends mu.d {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(uu, Ru) {
        let yu = arguments.length > 4 ? arguments[4] : void 0;
        const Eu = {
          size: "number" === typeof Ru ? Ru : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: yu,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...Ru
        };
        super(uu, Nu.g.FragmentUrl, {
          effectWrapper: "number" !== typeof Ru && Ru.effectWrapper ? void 0 : new Nu.g(uu, yu, Eu),
          ...Eu
        })
      }
      static _Parse(uu, Ru, yu, Eu) {
        return Ju.c.Parse((() => new Vu(uu.name, uu.options, Ru, uu.renderTargetSamplingMode, uu._engine, uu.reusable)), uu, yu, Eu)
      }
    }(() => {
      var uu;
      let Ru, yu = mu.d,
        Eu = [];
      uu = class extends yu {
        get face() {
          return this._effectWrapper.face
        }
        set face(uu) {
          this._effectWrapper.face = uu
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(uu, Ru) {
          let yu = arguments.length > 4 ? arguments[4] : void 0;
          const Ku = {
            size: "number" === typeof Ru ? Ru : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: yu,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...Ru
          };
          super(uu, Nu.g.FragmentUrl, {
            effectWrapper: "number" !== typeof Ru && Ru.effectWrapper ? void 0 : new Nu.c(uu, yu, Ku),
            ...Ku
          }), (0, Qu.l)(this, Eu)
        }
        static _Parse(Ru, yu, Eu, Ku) {
          return Ju.c.Parse((() => new uu(Ru.name, Ru.options, yu, Ru.renderTargetSamplingMode, Ru._engine, Ru.reusable)), Ru, Eu, Ku)
        }
      }, (() => {
        const Ku = "function" === typeof Symbol && Symbol.metadata ? Object.create(yu[Symbol.metadata] ?? null) : void 0;
        Ru = [(0, Xu.K)()], (0, Qu.h)(uu, null, Ru, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: uu => "face" in uu,
            get: uu => uu.face
          },
          metadata: Ku
        }, null, Eu), Ku && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ku
        })
      })()
    })();
    var ru = yu(36865),
      Bu = yu(39633);

    function xu(uu, Ru, yu, Eu, Ku, Qu, Ju, Nu) {
      const Xu = Ru.eS();
      return Ru.isReady = !1, Ku = Ku ?? Ru.samplingMode, Eu = Eu ?? Ru.type, Qu = Qu ?? Ru.format, Ju = Ju ?? Ru.width, Nu = Nu ?? Ru.height, -1 === Eu && (Eu = 0), new Promise((Vu => {
        const ru = new mu.d("postprocess", uu, null, null, 1, null, Ku, Xu, !1, void 0, Eu, void 0, null, !1, Qu);
        ru.externalTextureSamplerBinding = !0;
        const Bu = Xu.createRenderTargetTexture({
          width: Ju,
          height: Nu
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: Ku,
          type: Eu,
          format: Qu
        });
        ru.onEffectCreatedObservable.addOnce((uu => {
          uu.executeWhenCompiled((() => {
            ru.onApply = uu => {
              uu._bindTexture("textureSampler", Ru), uu.setFloat2("scale", 1, 1)
            }, yu.postProcessManager.directRender([ru], Bu, !0), Xu.restoreDefaultFramebuffer(), Xu._releaseTexture(Ru), ru && ru.dispose(), Bu._swapAndDie(Ru), Ru.type = Eu, Ru.format = 5, Ru.isReady = !0, Vu(Ru)
          }))
        }))
      }))
    }
    async function Su(uu, Ru, Qu) {
      let Ju = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Nu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Xu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Vu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(uu) {
        if (uu.isReady()) return;
        if (uu.loadingError) throw new Error(uu.errorObject?.message || `Texture ${uu.name} errored while loading.`);
        const Ru = uu.onLoadObservable;
        if (Ru) return await new Promise((uu => Ru.addOnce((() => uu()))));
        const yu = uu._texture?.onLoadedObservable;
        if (yu) return await new Promise((uu => yu.addOnce((() => uu()))));
        throw new Error(`Cannot determine readiness of texture ${uu.name}.`)
      }(uu);
      const Bu = uu.getInternalTexture(),
        xu = uu.is3D || !!Bu?.is3D,
        {
          width: Su,
          height: pu
        } = uu.getSize(),
        Tu = Ru ?? Su,
        Wu = Qu ?? pu;
      if (Xu || xu || function(uu) {
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
        }(uu.textureFormat) || Tu !== Su || Wu !== pu) {
        if (uu.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${Xu?"RTT":"compression"} is not supported.`);
        return await async function(uu, Ru, Qu, Ju, Nu) {
          let Xu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const Vu = uu.lD(),
            ru = Vu.eS(),
            Bu = uu.getInternalTexture(),
            xu = uu.is3D || !!Bu?.is3D;
          let Su;
          if (ru.isWebGPU ? xu ? await yu.e(360).then((() => yu(61296))) : uu.isCube ? await yu.e(361).then((() => yu(61304))) : await yu.e(362).then((() => yu(61313))) : xu ? await yu.e(357).then((() => yu(61270))) : uu.isCube ? await yu.e(358).then((() => yu(61279))) : await yu.e(359).then((() => yu(61288))), xu) Su = new mu.d("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: Eu.h.NEAREST_NEAREST_MIPNEAREST,
            engine: ru,
            shaderLanguage: ru.isWebGPU ? 1 : 0
          });
          else if (uu.isCube) {
            const uu = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            Su = new mu.d("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: Eu.h.NEAREST_NEAREST_MIPNEAREST,
              engine: ru,
              defines: uu[Ju],
              shaderLanguage: ru.isWebGPU ? 1 : 0
            })
          } else Su = new mu.d("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: Eu.h.NEAREST_NEAREST_MIPNEAREST,
            engine: ru,
            shaderLanguage: ru.isWebGPU ? 1 : 0
          });
          await new Promise((uu => {
            Su.onEffectCreatedObservable.addOnce((Ru => {
              Ru.executeWhenCompiled((() => {
                uu(0)
              }))
            }))
          }));
          const pu = new Ku.e("temp", {
            width: Ru,
            height: Qu
          }, Vu, !1);
          Su.onApply = function(Ru) {
            Ru.setTexture("textureSampler", uu), Ru.setFloat("lod", Nu), Ru.setInt("gamma", uu.gammaSpace ? 1 : 0), xu && Ru.setFloat("slice", Xu)
          };
          try {
            if (pu.renderTarget && Bu) {
              const yu = Bu.samplingMode;
              0 !== Nu ? uu.updateSamplingMode(Eu.h.NEAREST_NEAREST_MIPNEAREST) : uu.updateSamplingMode(Eu.h.NEAREST_NEAREST), Vu.postProcessManager.directRender([Su], pu.renderTarget, !0), uu.updateSamplingMode(yu);
              const Ku = await ru.readPixels(0, 0, Ru, Qu),
                mu = new Uint8Array(Ku.buffer, Ku.byteOffset, Ku.byteLength);
              return ru.unBindFramebuffer(pu.renderTarget), mu
            }
            throw Error("Render to texture failed.")
          } finally {
            pu.dispose(), Su.dispose()
          }
        }(uu, Tu, Wu, Ju, Nu, Vu)
      }
      let ju = await uu.readPixels(Ju, Nu);
      if (!ju) throw new Error(`Failed to read pixels from texture ${uu.name}.`);
      if (ju instanceof Float32Array) {
        const uu = new Uint8Array(ju.length);
        let Ru = ju.length;
        for (; Ru--;) {
          const yu = ju[Ru];
          uu[Ru] = Math.round(255 * (0, ru.Clamp)(yu))
        }
        ju = uu
      }
      const Hu = Tu * Wu,
        du = 4 * Hu;
      if (ju.length !== du) {
        const uu = 0 === Hu ? 0 : ju.length / Hu;
        if (1 === uu || 2 === uu || 3 === uu) {
          const Ru = new Uint8Array(du);
          for (let yu = 0, Eu = 0, Ku = 0; yu < Hu; yu++, Ku += 4) {
            const yu = ju[Eu++];
            if (1 === uu) {
              Ru[Ku] = yu, Ru[Ku + 1] = yu, Ru[Ku + 2] = yu, Ru[Ku + 3] = 255;
              continue
            }
            const Qu = ju[Eu++];
            2 !== uu ? (Ru[Ku] = yu, Ru[Ku + 1] = Qu, Ru[Ku + 2] = ju[Eu++], Ru[Ku + 3] = 255) : (Ru[Ku] = yu, Ru[Ku + 1] = Qu, Ru[Ku + 2] = 0, Ru[Ku + 3] = 255)
          }
          return Ru
        }
      }
      return ju
    }
    const pu = {
      CreateResizedCopy: function(uu, Ru, yu) {
        let Qu = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const mu = uu.lD(),
          Ju = mu.eS(),
          Nu = new Ku.e("resized" + uu.name, {
            width: Ru,
            height: yu
          }, mu, !uu.noMipmap, !0, uu._texture.type, !1, uu.samplingMode, !1);
        Nu.wrapU = uu.wrapU, Nu.wrapV = uu.wrapV, Nu.uOffset = uu.uOffset, Nu.vOffset = uu.vOffset, Nu.uScale = uu.uScale, Nu.vScale = uu.vScale, Nu.uAng = uu.uAng, Nu.vAng = uu.vAng, Nu.wAng = uu.wAng, Nu.coordinatesIndex = uu.coordinatesIndex, Nu.level = uu.level, Nu.anisotropicFilteringLevel = uu.anisotropicFilteringLevel, Nu._texture.isReady = !1, uu.wrapU = Eu.h.CLAMP_ADDRESSMODE, uu.wrapV = Eu.h.CLAMP_ADDRESSMODE;
        const Xu = new Vu("pass", 1, null, Qu ? Eu.h.BILINEAR_SAMPLINGMODE : Eu.h.NEAREST_SAMPLINGMODE, Ju, !1, 0);
        return Xu.externalTextureSamplerBinding = !0, Xu.onEffectCreatedObservable.addOnce((Ru => {
          Ru.executeWhenCompiled((() => {
            Xu.onApply = function(Ru) {
              Ru.setTexture("textureSampler", uu)
            };
            const Ru = Nu.renderTarget;
            Ru && (mu.postProcessManager.directRender([Xu], Ru), Ju.unBindFramebuffer(Ru), Nu.disposeFramebufferObjects(), Xu.dispose(), Nu.getInternalTexture().isReady = !0)
          }))
        })), Nu
      },
      ApplyPostProcess: xu,
      ToHalfFloat: Bu.i,
      FromHalfFloat: Bu.c,
      GetTextureDataAsync: Su
    }
  },
  41369: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Su
    });
    var Eu = yu(39560),
      Ku = yu(39667),
      Qu = yu(36858),
      mu = yu(36830),
      Ju = yu(39399),
      Nu = yu(39566),
      Xu = yu(39582),
      Vu = yu(36871),
      ru = yu(39455),
      Bu = yu(39496),
      xu = yu(41376);
    let Su = (() => {
        var uu;
        let Ru, Ju, ru, Su, pu, Wu, ju, Hu, du, bu, Cu, ku, eu, Au, Du, Mu, Iu = [],
          Gu = [],
          Uu = [],
          nu = [],
          su = [],
          tu = [],
          lu = [],
          gu = [],
          cu = [],
          Lu = [],
          zu = [],
          Fu = [],
          wu = [],
          Zu = [],
          hu = [],
          Pu = [],
          iu = [],
          Yu = [],
          ou = [],
          qu = [],
          Ou = [],
          vu = [],
          au = [],
          fu = [],
          uR = [],
          RR = [],
          yR = [],
          ER = [],
          KR = [];
        return uu = class {
          static get ForceGLSL() {
            return xu.h.ForceGLSL
          }
          static set ForceGLSL(uu) {
            xu.h.ForceGLSL = uu
          }
          static RegisterShaderCodeProcessing(uu, Ru) {
            xu.h.RegisterShaderCodeProcessing(uu, Ru)
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
            return this.Tv
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.muu(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(Ru, yu, Ju, Nu, Xu, Vu) {
            let ru = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              Bu = arguments.length > 7 ? arguments[7] : void 0,
              Su = arguments.length > 8 ? arguments[8] : void 0,
              pu = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              Wu = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              ju = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              Hu = arguments.length > 12 ? arguments[12] : void 0,
              du = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              bu = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              Cu = arguments.length > 15 ? arguments[15] : void 0,
              ku = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, Eu.l)(this, Iu), null), this.uniqueId = (0, Eu.l)(this, Gu, void 0), this.width = ((0, Eu.l)(this, Uu), (0, Eu.l)(this, nu, -1)), this.height = ((0, Eu.l)(this, su), (0, Eu.l)(this, tu, -1)), this.nodeMaterialSource = ((0, Eu.l)(this, lu), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, Eu.l)(this, gu, void 0), this.clearColor = ((0, Eu.l)(this, cu), (0, Eu.l)(this, Lu, void 0)), this.autoClear = ((0, Eu.l)(this, zu), (0, Eu.l)(this, Fu, !0)), this.forceAutoClearInAlphaMode = ((0, Eu.l)(this, wu), (0, Eu.l)(this, Zu, !1)), this.alphaConstants = ((0, Eu.l)(this, hu), (0, Eu.l)(this, Pu, void 0)), this.animations = ((0, Eu.l)(this, iu), []), this.enablePixelPerfectMode = (0, Eu.l)(this, Yu, !1), this.forceFullscreenViewport = ((0, Eu.l)(this, ou), (0, Eu.l)(this, qu, !0)), this.inspectableCustomProperties = (0, Eu.l)(this, Ou), this.scaleMode = (0, Eu.l)(this, vu, 1), this.alwaysForcePOT = ((0, Eu.l)(this, au), (0, Eu.l)(this, fu, !1)), this._samples = ((0, Eu.l)(this, uR), (0, Eu.l)(this, RR, 1)), this.adaptScaleToCurrentViewport = ((0, Eu.l)(this, yR), (0, Eu.l)(this, ER, !1)), this.doNotSerialize = ((0, Eu.l)(this, KR), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new Ku.i(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new mu.n(1, 1), this._texelSize = mu.n.Zero(), this.onActivateObservable = new Qu.b, this.onSizeChangedObservable = new Qu.b, this.onApplyObservable = new Qu.b, this.onBeforeRenderObservable = new Qu.b, this.onAfterRenderObservable = new Qu.b, this.zD = new Qu.b, Tu();
            let eu, Au = 1,
              Du = null;
            if (Ju && !Array.isArray(Ju)) {
              const uu = Ju;
              Ju = uu.uniforms ?? null, Nu = uu.samplers ?? null, Au = uu.size ?? 1, Vu = uu.camera ?? null, ru = uu.samplingMode ?? 1, Bu = uu.engine, Su = uu.reusable, pu = Array.isArray(uu.defines) ? uu.defines.join("\n") : uu.defines ?? null, Wu = uu.textureType ?? 0, ju = uu.vertexUrl ?? "postprocess", Hu = uu.indexParameters, du = uu.blockCompilation ?? !1, bu = uu.textureFormat ?? 5, Cu = uu.shaderLanguage ?? 0, Du = uu.uniformBuffers ?? null, ku = uu.extraInitializations, eu = uu.effectWrapper
            } else Xu && (Au = "number" === typeof Xu ? Xu : {
              width: Xu.width,
              height: Xu.height
            });
            if (this._useExistingThinPostProcess = !!eu, this._effectWrapper = eu ?? new xu.h({
                name: Ru,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: yu,
                engine: Bu || Vu?.lD().eS(),
                uniforms: Ju,
                samplers: Nu,
                uniformBuffers: Du,
                defines: pu,
                vertexUrl: ju,
                indexParameters: Hu,
                blockCompilation: !0,
                shaderLanguage: Cu,
                extraInitializations: void 0
              }), this.name = Ru, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != Vu ? (this.Tv = Vu, this._scene = Vu.lD(), Vu.attachPostProcess(this), this._engine = this._scene.eS(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : Bu && (this._engine = Bu, this._engine.postProcesses.push(this)), this._options = Au, this.renderTargetSamplingMode = ru || 1, this._reusable = Su || !1, this._textureType = Wu, this._textureFormat = bu, this._shaderLanguage = Cu || 0, this._samplers = Nu || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = yu, this._vertexUrl = ju, this._parameters = Ju || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = Du || [], this._indexParameters = Hu, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const Ru = [];
              this._gatherImports(this._engine.isWebGPU && !uu.ForceGLSL, Ru), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(du, pu, ku, Ru)
            }
          }
          _gatherImports() {
            let uu = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? uu.push(Promise.all([yu.e(356).then((() => yu(61248)))])) : uu.push(Promise.all([yu.e(345).then((() => yu(61006)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          eS() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(uu) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = uu, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new Ku.i(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Eu = arguments.length > 3 ? arguments[3] : void 0,
              Ku = arguments.length > 4 ? arguments[4] : void 0,
              Qu = arguments.length > 5 ? arguments[5] : void 0,
              mu = arguments.length > 6 ? arguments[6] : void 0,
              Ju = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(uu, Ru, yu, Eu, Ku, Qu, mu, Ju), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(uu, Ru) {
            let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let Ku = 0; Ku < this._textureCache.length; Ku++)
              if (this._textureCache[Ku].texture.width === uu.width && this._textureCache[Ku].texture.height === uu.height && this._textureCache[Ku].postProcessChannel === yu && this._textureCache[Ku].texture._generateDepthBuffer === Ru.generateDepthBuffer && this._textureCache[Ku].texture.samples === Ru.samples) return this._textureCache[Ku].texture;
            const Eu = this._engine.createRenderTargetTexture(uu, Ru);
            return this._textureCache.push({
              texture: Eu,
              postProcessChannel: yu,
              lastUsedRenderId: -1
            }), Eu
          }
          _flushTextureCache() {
            const uu = this._renderId;
            for (let Ru = this._textureCache.length - 1; Ru >= 0; Ru--)
              if (uu - this._textureCache[Ru].lastUsedRenderId > 100) {
                let uu = !1;
                for (let yu = 0; yu < this._textures.length; yu++)
                  if (this._textures.data[yu] === this._textureCache[Ru].texture) {
                    uu = !0;
                    break
                  } uu || (this._textureCache[Ru].texture.dispose(), this._textureCache.splice(Ru, 1))
              }
          }
          resize(uu, Ru) {
            let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Ku = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = uu, this.height = Ru;
            let Qu = null;
            if (yu)
              for (let Nu = 0; Nu < yu._postProcesses.length; Nu++)
                if (null !== yu._postProcesses[Nu]) {
                  Qu = yu._postProcesses[Nu];
                  break
                } const mu = {
                width: this.width,
                height: this.height
              },
              Ju = {
                generateMipMaps: Eu,
                generateDepthBuffer: Ku || Qu === this,
                generateStencilBuffer: (Ku || Qu === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(mu, Ju, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(mu, Ju, 1)), this._texelSize.muu(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let uu;
            if (this._shareOutputWithPostProcess) uu = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) uu = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let Ru;
              uu = this.inputTexture;
              for (let yu = 0; yu < this._textureCache.length; yu++)
                if (this._textureCache[yu].texture === uu) {
                  Ru = this._textureCache[yu];
                  break
                } Ru && (Ru.lastUsedRenderId = this._renderId)
            }
            return uu
          }
          activate(uu) {
            let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              yu = arguments.length > 2 ? arguments[2] : void 0;
            const Eu = null === uu || void 0 !== uu.cameraRigMode ? uu || this.Tv : null,
              Ku = Eu?.lD() ?? uu,
              Qu = Ku.eS(),
              mu = Qu.getCaps().maxTextureSize,
              Ju = (Ru ? Ru.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              Nu = (Ru ? Ru.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let Xu = this._options.width || Ju,
              Vu = this._options.height || Nu;
            const ru = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let xu = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const uu = Qu.currentViewport;
                uu && (Xu *= uu.width, Vu *= uu.height)
              }(ru || this.alwaysForcePOT) && (this._options.width || (Xu = Qu.needPOTTextures ? (0, Bu.e)(Xu, mu, this.scaleMode) : Xu), this._options.height || (Vu = Qu.needPOTTextures ? (0, Bu.e)(Vu, mu, this.scaleMode) : Vu)), this.width === Xu && this.height === Vu && (xu = this._getTarget()) || this.resize(Xu, Vu, Eu, ru, yu), this._textures.forEach((uu => {
                uu.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(uu, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return xu || (xu = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.muu(Ju / Xu, Nu / Vu), this._engine.bindFramebuffer(xu, 0, Ju, Nu, this.forceFullscreenViewport)) : (this._scaleRatio.muu(1, 1), this._engine.bindFramebuffer(xu, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(Eu), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : Ku.clearColor, Ku._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), xu
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
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.eS().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), uu = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", uu?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
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
            let Ru;
            if (uu = uu || this.Tv, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (Ru = this._parentContainer.postProcesses.indexOf(this), Ru > -1 && this._parentContainer.postProcesses.splice(Ru, 1), this._parentContainer = null), Ru = this._engine.postProcesses.indexOf(this), -1 !== Ru && this._engine.postProcesses.splice(Ru, 1), this.zD.notifyObservers(), uu) {
              if (uu.detachPostProcess(this), Ru = uu._postProcesses.indexOf(this), 0 === Ru && uu._postProcesses.length > 0) {
                const uu = this.Tv._getFirstPostProcess();
                uu && uu.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const uu = Xu.c.Serialize(this),
              Ru = this.getCamera() || this._scene && this._scene.activeCamera;
            return uu.customType = "BABYLON." + this.getClassName(), uu.cameraId = Ru ? Ru.id : null, uu.reusable = this._reusable, uu.textureType = this._textureType, uu.fragmentUrl = this._fragmentUrl, uu.parameters = this._parameters, uu.samplers = this._samplers, uu.uniformBuffers = this._uniformBuffers, uu.options = this._options, uu.defines = this._postProcessDefines, uu.textureFormat = this._textureFormat, uu.vertexUrl = this._vertexUrl, uu.indexParameters = this._indexParameters, uu
          }
          clone() {
            const Ru = this.serialize();
            Ru._engine = this._engine, Ru.cameraId = null;
            const yu = uu.Parse(Ru, this._scene, "");
            return yu ? (yu.onActivateObservable = this.onActivateObservable.clone(), yu.onSizeChangedObservable = this.onSizeChangedObservable.clone(), yu.onApplyObservable = this.onApplyObservable.clone(), yu.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), yu.onAfterRenderObservable = this.onAfterRenderObservable.clone(), yu._prePassEffectConfiguration = this._prePassEffectConfiguration, yu) : null
          }
          static Parse(uu, Ru, yu) {
            const Eu = (0, Vu.b)(uu.customType);
            if (!Eu || !Eu._Parse) return null;
            const Ku = Ru ? Ru.getCameraById(uu.cameraId) : null;
            return Eu._Parse(uu, Ku, Ru, yu)
          }
          static _Parse(Ru, yu, Eu, Ku) {
            return Xu.c.Parse((() => new uu(Ru.name, Ru.fragmentUrl, Ru.parameters, Ru.samplers, Ru.options, yu, Ru.renderTargetSamplingMode, Ru._engine, Ru.reusable, Ru.defines, Ru.textureType, Ru.vertexUrl, Ru.indexParameters, !1, Ru.textureFormat)), Ru, Eu, Ku)
          }
        }, (() => {
          const yu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Ru = [(0, Nu.K)()], Ju = [(0, Nu.K)()], ru = [(0, Nu.K)()], Su = [(0, Nu.K)()], pu = [(0, Nu.K)()], Wu = [(0, Nu.r)()], ju = [(0, Nu.K)()], Hu = [(0, Nu.K)()], du = [(0, Nu.K)()], bu = [(0, Nu.K)()], Cu = [(0, Nu.K)()], ku = [(0, Nu.K)()], eu = [(0, Nu.K)()], Au = [(0, Nu.K)()], Du = [(0, Nu.K)("samples")], Mu = [(0, Nu.K)()], (0, Eu.h)(uu, null, Ju, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: uu => "name" in uu,
              get: uu => uu.name
            },
            metadata: yu
          }, null, Iu), (0, Eu.h)(uu, null, du, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: uu => "alphaMode" in uu,
              get: uu => uu.alphaMode
            },
            metadata: yu
          }, null, Iu), (0, Eu.h)(null, null, Ru, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: uu => "uniqueId" in uu,
              get: uu => uu.uniqueId,
              set: (uu, Ru) => {
                uu.uniqueId = Ru
              }
            },
            metadata: yu
          }, Gu, Uu), (0, Eu.h)(null, null, ru, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: uu => "width" in uu,
              get: uu => uu.width,
              set: (uu, Ru) => {
                uu.width = Ru
              }
            },
            metadata: yu
          }, nu, su), (0, Eu.h)(null, null, Su, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: uu => "height" in uu,
              get: uu => uu.height,
              set: (uu, Ru) => {
                uu.height = Ru
              }
            },
            metadata: yu
          }, tu, lu), (0, Eu.h)(null, null, pu, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: uu => "renderTargetSamplingMode" in uu,
              get: uu => uu.renderTargetSamplingMode,
              set: (uu, Ru) => {
                uu.renderTargetSamplingMode = Ru
              }
            },
            metadata: yu
          }, gu, cu), (0, Eu.h)(null, null, Wu, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: uu => "clearColor" in uu,
              get: uu => uu.clearColor,
              set: (uu, Ru) => {
                uu.clearColor = Ru
              }
            },
            metadata: yu
          }, Lu, zu), (0, Eu.h)(null, null, ju, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: uu => "autoClear" in uu,
              get: uu => uu.autoClear,
              set: (uu, Ru) => {
                uu.autoClear = Ru
              }
            },
            metadata: yu
          }, Fu, wu), (0, Eu.h)(null, null, Hu, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: uu => "forceAutoClearInAlphaMode" in uu,
              get: uu => uu.forceAutoClearInAlphaMode,
              set: (uu, Ru) => {
                uu.forceAutoClearInAlphaMode = Ru
              }
            },
            metadata: yu
          }, Zu, hu), (0, Eu.h)(null, null, bu, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: uu => "alphaConstants" in uu,
              get: uu => uu.alphaConstants,
              set: (uu, Ru) => {
                uu.alphaConstants = Ru
              }
            },
            metadata: yu
          }, Pu, iu), (0, Eu.h)(null, null, Cu, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: uu => "enablePixelPerfectMode" in uu,
              get: uu => uu.enablePixelPerfectMode,
              set: (uu, Ru) => {
                uu.enablePixelPerfectMode = Ru
              }
            },
            metadata: yu
          }, Yu, ou), (0, Eu.h)(null, null, ku, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: uu => "forceFullscreenViewport" in uu,
              get: uu => uu.forceFullscreenViewport,
              set: (uu, Ru) => {
                uu.forceFullscreenViewport = Ru
              }
            },
            metadata: yu
          }, qu, Ou), (0, Eu.h)(null, null, eu, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: uu => "scaleMode" in uu,
              get: uu => uu.scaleMode,
              set: (uu, Ru) => {
                uu.scaleMode = Ru
              }
            },
            metadata: yu
          }, vu, au), (0, Eu.h)(null, null, Au, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: uu => "alwaysForcePOT" in uu,
              get: uu => uu.alwaysForcePOT,
              set: (uu, Ru) => {
                uu.alwaysForcePOT = Ru
              }
            },
            metadata: yu
          }, fu, uR), (0, Eu.h)(null, null, Du, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: uu => "_samples" in uu,
              get: uu => uu._samples,
              set: (uu, Ru) => {
                uu._samples = Ru
              }
            },
            metadata: yu
          }, RR, yR), (0, Eu.h)(null, null, Mu, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: uu => "adaptScaleToCurrentViewport" in uu,
              get: uu => uu.adaptScaleToCurrentViewport,
              set: (uu, Ru) => {
                uu.adaptScaleToCurrentViewport = Ru
              }
            },
            metadata: yu
          }, ER, KR), yu && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: yu
          })
        })(), uu
      })(),
      pu = !1;

    function Tu() {
      pu || (pu = !0, ru.d.prototype.setTextureFromPostProcess = function(uu, Ru, yu) {
        let Eu = null;
        Ru && (Ru._forcedOutputTexture ? Eu = Ru._forcedOutputTexture : Ru._textures.data[Ru._currentRenderTextureInd] && (Eu = Ru._textures.data[Ru._currentRenderTextureInd])), this._bindTexture(uu, Eu?.texture ?? null, yu)
      }, ru.d.prototype.setTextureFromPostProcessOutput = function(uu, Ru, yu) {
        this._bindTexture(uu, Ru?._outputTexture?.texture ?? null, yu)
      }, Ju.b.prototype.setTextureFromPostProcess = function(uu, Ru) {
        this._engine.setTextureFromPostProcess(this._samplers[uu], Ru, uu)
      }, Ju.b.prototype.setTextureFromPostProcessOutput = function(uu, Ru) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[uu], Ru, uu)
      }, (0, Vu.c)("BABYLON.PostProcess", Su))
    }
  },
  41399: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => mu,
      g: () => Qu
    });
    var Eu = yu(41376),
      Ku = yu(36851);
    class Qu extends Eu.h {
      _gatherImports(uu, Ru) {
        uu ? (this._webGPUReady = !0, Ru.push(Promise.all([yu.e(363).then((() => yu(61315)))]))) : Ru.push(Promise.all([yu.e(364).then((() => yu(61323)))])), super._gatherImports(uu, Ru)
      }
      constructor(uu) {
        let Ru = arguments.length > 2 ? arguments[2] : void 0;
        const yu = {
          name: uu,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Ku.b.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: Qu.FragmentUrl,
          ...Ru
        };
        yu.engine || (yu.engine = Ku.b.LastCreatedEngine), super(yu)
      }
    }
    Qu.FragmentUrl = "pass";
    class mu extends Eu.h {
      _gatherImports(uu, Ru) {
        uu ? (this._webGPUReady = !0, Ru.push(Promise.all([yu.e(365).then((() => yu(61326)))]))) : Ru.push(Promise.all([yu.e(366).then((() => yu(61331)))])), super._gatherImports(uu, Ru)
      }
      constructor(uu) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: uu,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Ku.b.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: mu.FragmentUrl,
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
    mu.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);