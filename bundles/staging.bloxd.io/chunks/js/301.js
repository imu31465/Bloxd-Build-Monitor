export const id = 301;
export const ids = [301];
export const modules = {
  41237: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => mk
    });
    var Rk = Bk(36781),
      tk = Bk(36758),
      ak = Bk(39895),
      Xk = Bk(39545),
      bk = Bk(39329),
      wk = Bk(38320),
      dk = Bk(39530),
      sk = Bk(39560),
      Vk = Bk(36768),
      Jk = Bk(39302),
      Ak = Bk(39506),
      ek = Bk(39606);
    class yk {
      get renderList() {
        return this._renderList
      }
      set renderList(kk) {
        this._renderList !== kk && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), kk && (this._unObserveRenderList = (0, Vk.j)(kk, this._renderListHasChanged)), this._renderList = kk)
      }
      get disableImageProcessing() {
        return this._disableImageProcessing
      }
      set disableImageProcessing(kk) {
        kk !== this._disableImageProcessing && (this._disableImageProcessing = kk, this._scene.markAllMaterialsAsDirty(64))
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(kk) {
        this._disableDepthPrePass = kk, this._renderingManager.disableDepthPrePass = kk
      }
      get name() {
        return this._name
      }
      set name(kk) {
        if (this._name !== kk) {
          if (this._name = kk, this._sceneUBOs)
            for (let kk = 0; kk < this._sceneUBOs.length; ++kk) this._sceneUBOs[kk].name = `Scene ubo #${kk} for ${this.name}`;
          if (this._scene)
            for (let kk = 0; kk < this._renderPassIds.length; ++kk) {
              const Fk = this._renderPassIds[kk];
              this._engine._renderPassNames[Fk] = `${this._name}#${kk}`
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
      setMaterialForRendering(kk, Fk) {
        let Bk;
        Bk = Array.isArray(kk) ? kk : [kk];
        for (let Rk = 0; Rk < Bk.length; ++Rk)
          for (let kk = 0; kk < this.options.numPasses; ++kk) {
            let tk = Bk[Rk];
            Bk[Rk].mN && (tk = Bk[Rk].rRk), tk.setMaterialForRenderPass(this._renderPassIds[kk], void 0 !== Fk ? Array.isArray(Fk) ? Fk[kk] : Fk : void 0)
          }
      }
      _freezeActiveMeshes(kk) {
        this._freezeActiveMeshesCancel = (0, Jk.g)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, kk)
            for (let kk = 0; kk < this._activeMeshes.length; kk++) this._activeMeshes.data[kk]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((kk, Fk) => {
          this._freezeActiveMeshesCancel = null, Fk ? (wk.b.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), kk && wk.b.Error(kk)) : (wk.b.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), kk && (wk.b.Error(kk), kk.stack && wk.b.Error(kk.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let kk = 0; kk < this._activeMeshes.length; kk++) this._activeMeshes.data[kk]._unFreeze();
        this._isFrozen = !1
      }
      constructor(kk, Fk, Bk) {
        this._unObserveRenderList = null, this._renderListHasChanged = (kk, Fk) => {
          const Bk = this._renderList ? this._renderList.length : 0;
          if (0 === Fk && Bk > 0 || 0 === Bk)
            for (const Rk of this._scene.meshes) Rk._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new Rk.e, this.onAfterRenderObservable = new Rk.e, this.onBeforeRenderingManagerRenderObservable = new Rk.e, this.onAfterRenderingManagerRenderObservable = new Rk.e, this.onInitRenderingObservable = new Rk.e, this.onFinishRenderingObservable = new Rk.e, this.onFastPathRenderObservable = new Rk.e, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new Ak.c(256), this._activeBoundingBoxes = new Ak.c(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = kk, this._scene = Fk, this._engine = this._scene.ne(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...Bk
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new sk.e(Fk), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const kk of this._scene.lights) kk.getTypeID() === ek.e.LIGHTTYPEID_CLUSTERED_CONTAINER && kk.isSupported && kk._updateBatches(this.activeCamera).render()
        })), this._scene.addObjectRenderer(this)
      }
      _releaseRenderPassId() {
        for (let kk = 0; kk < this.options.numPasses; ++kk) this._engine.releaseRenderPassId(this._renderPassIds[kk]);
        this._renderPassIds.length = 0
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let kk = 0; kk < this.options.numPasses; ++kk) this._renderPassIds[kk] = this._engine.createRenderPassId(`${this.name}#${kk}`)
      }
      _createSceneUBO(kk, Fk) {
        const Bk = this._scene.ne(),
          Rk = new dk.e(Bk, void 0, Fk, kk, void 0, !1);
        return Rk.addUniform("viewProjection", 16), Fk && Rk.addUniform("viewProjectionR", 16), Rk.addUniform("view", 16), Rk.addUniform("projection", 16), Rk.addUniform("vEyePosition", 4), Rk.addUniform("inverseProjection", 16), Rk
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const kk = this._engine._currentRenderTarget,
          Fk = !(!kk || !kk.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const kk = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${kk} for ${this.name}`, Fk)), this._sceneUBOIsMultiview.push(Fk)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== Fk && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, Fk), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = Fk);
        const Bk = this._sceneUBOs[this._currentSceneUBOIndex++];
        return Bk.unbindEffect(), Bk
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1
      }
      get refreshRate() {
        return this._refreshRate
      }
      set refreshRate(kk) {
        this._refreshRate = kk, this.resetRefreshCounter()
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1))
      }
      isReadyForRendering(kk, Fk) {
        this.prepareRenderList(), this.initRender(kk, Fk);
        const Bk = this._checkReadiness();
        return this.finishRender(), Bk
      }
      prepareRenderList() {
        const kk = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let Fk = 0; Fk < this._waitingRenderList.length; Fk++) {
              const Bk = this._waitingRenderList[Fk],
                Rk = kk.getMeshById(Bk);
              Rk && this.renderList.push(Rk)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const kk = this._scene.meshes;
          for (let Fk = 0; Fk < kk.length; Fk++) {
            const Bk = kk[Fk];
            this.renderListPredicate(Bk) && this.renderList.push(Bk)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(kk, Fk) {
        const Bk = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), Bk && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(Bk.getViewMatrix(), Bk.getProjectionMatrix(!0)), this._scene._activeCamera = Bk, this._engine.setViewport(Bk.rigParent ? Bk.rigParent.viewport : Bk.viewport, kk, Fk)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const kk = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (kk.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), kk._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== kk.activeCamera && kk.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), kk.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Bk = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[kk], this.onBeforeRenderObservable.notifyObservers(kk);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(kk);
        else {
          const Fk = this._prepareRenderingManager(kk),
            Bk = this._scene.getOutlineRenderer?.(),
            Rk = Bk?.enabled;
          Bk && (Bk.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(kk), this._renderingManager.render(this.customRenderFunction, Fk, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(kk), Bk && (Bk.enabled = Rk)
        }
        Fk || this.onAfterRenderObservable.notifyObservers(kk), this._engine.currentRenderPassId = Bk
      }
      _checkReadiness() {
        const kk = this._scene,
          Fk = this._engine.currentRenderPassId;
        let Bk = !0;
        kk.getViewMatrix() || kk.updateTransformMatrix();
        const Rk = this.options.numPasses;
        for (let tk = 0; tk < Rk && Bk; tk++) {
          const Fk = this.renderList ? this.renderList : kk.frameGraph ? kk.meshes : kk.getActiveMeshes().data,
            ak = this.renderList || kk.frameGraph ? Fk.length : kk.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[tk], this.onBeforeRenderObservable.notifyObservers(tk);
          let Xk = null,
            bk = ak;
          this.getCustomRenderList && (Xk = this.getCustomRenderList(tk, Fk, ak), Xk && (bk = Xk.length)), Xk || (Xk = Fk), this.options.doNotChangeAspectRatio || kk.updateTransformMatrix(!0);
          for (let kk = 0; kk < bk && Bk; ++kk) {
            const Fk = Xk[kk];
            if (!Fk.isEnabled() || Fk.isBlocked || !Fk.isVisible || !Fk.AY) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(Fk, this.refreshRate, !0)) {
                Bk = !1;
                continue
              }
            } else if (!Fk.isReady(!0)) {
              Bk = !1;
              continue
            }
            let Rk = Fk._edgesRenderer,
              tk = Fk.hasThinInstances;
            if (Fk.mN) {
              const kk = Fk.rRk;
              kk.edgesShareWithInstances && kk._edgesRenderer?.isEnabled && (Rk = kk._edgesRenderer, tk = !0)
            } else Fk.GRk && Fk.edgesShareWithInstances && (tk = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && Rk?.isEnabled && (Rk.isReady(tk) || (Bk = !1))
          }
          if (this.renderParticles && kk.particlesEnabled) {
            const Fk = this.particleSystemList || kk.fY;
            for (const kk of Fk) kk.isReady() || (Bk = !1)
          }
          if (this.renderSprites && kk.spritesEnabled) {
            const Fk = this.spriteManagerList || kk.spriteManagers;
            if (Fk)
              for (const Rk of Fk) kk.activeCamera && 0 === (Rk.layerMask & kk.activeCamera.layerMask) || Rk.isReady && !Rk.isReady() && (Bk = !1)
          }
          this.onAfterRenderObservable.notifyObservers(tk), Rk > 1 && (kk.incrementRenderId(), kk.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = Fk, Bk
      }
      _prepareRenderingManager() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Bk = this._scene;
        let Rk, tk, ak = null;
        const Xk = this.renderList ? this.renderList : Bk.frameGraph ? Bk.meshes : Bk.getActiveMeshes().data,
          bk = this.renderList || Bk.frameGraph ? Xk.length : Bk.getActiveMeshes().length;
        if (this.getCustomRenderList && (ak = this.getCustomRenderList(kk, Xk, bk)), ak) Rk = ak.length, tk = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !Fk && !this._engine.isWebGPU) return Xk;
          this._defaultRenderListPrepared = !0, ak = Xk, Rk = bk, tk = !this.renderList || this.forceLayerMaskCheck
        }
        const wk = Bk.activeCamera,
          dk = this.cameraForLOD ?? wk,
          sk = Bk.getBoundingBoxRenderer?.();
        if (Bk._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && sk) {
            sk.reset();
            for (let kk = 0; kk < this._activeBoundingBoxes.length; kk++) {
              const Fk = this._activeBoundingBoxes.data[kk];
              sk.renderList.push(Fk)
            }
          }
          return ak
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), sk && sk.reset(), this.renderMeshes) {
          const kk = Bk.getRenderId(),
            Fk = Bk.getFrameId();
          for (let Xk = 0; Xk < Rk; Xk++) {
            const Rk = ak[Xk];
            if (Rk && !Rk.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(Rk, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!Rk.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let ak, Xk;
              if (dk) {
                const kk = Rk._internalAbstractMeshDataInfo._currentLOD.get(dk);
                kk && kk[1] === Fk ? ak = kk[0] : (ak = Bk.customLODSelector ? Bk.customLODSelector(Rk, dk) : Rk.getLOD(dk), kk ? (kk[0] = ak, kk[1] = Fk) : Rk._internalAbstractMeshDataInfo._currentLOD.set(dk, [ak, Fk]))
              } else ak = Rk;
              if (!ak) continue;
              if (ak !== Rk && 0 !== ak.billboardMode && ak.computeWorldMatrix(), ak._preActivateForIntermediateRendering(kk), Xk = !(!tk || !wk) && 0 === (Rk.layerMask & wk.layerMask), Rk.isEnabled() && Rk.isVisible && Rk.AY && !Xk) {
                if (this._activeMeshes.push(Rk), ak._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, ak !== Rk && ak._activate(kk, !0), this.enableBoundingBoxRendering && sk && sk._preActiveMesh(Rk), Rk._activate(kk, !0) && Rk.AY.length) {
                  Rk.mN ? Rk._internalAbstractMeshDataInfo._actAsRegularMesh && (ak = Rk) : ak._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, ak._internalAbstractMeshDataInfo._isActiveIntermediate = !0, Bk._prepareSkeleton(ak);
                  for (let kk = 0; kk < ak.AY.length; kk++) {
                    const Fk = ak.AY[kk];
                    this.enableBoundingBoxRendering && sk && sk._evaluateSubMesh(Rk, Fk), this._renderingManager.dispatch(Fk, ak)
                  }
                }
                Rk._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && sk && Fk)
          for (let Vk = 0; Vk < sk.renderList.length; Vk++) {
            const kk = sk.renderList.data[Vk];
            this._activeBoundingBoxes.push(kk)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const kk = this.particleSystemList || Bk.fY;
          for (let Fk = 0; Fk < kk.length; Fk++) {
            const Bk = kk[Fk],
              Rk = Bk.emitter;
            Bk.isStarted() && Rk && (!Rk.position || Rk.isEnabled()) && this._renderingManager.dispatchParticles(Bk)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return ak
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(kk, Fk, Bk, Rk)
      }
      setRenderingAutoClearDepthStencil(kk, Fk) {
        let Bk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Rk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(kk, Fk, Bk, Rk), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const kk = new yk(this.name, this._scene, this.options);
        return this.renderList && (kk.renderList = this.renderList.slice(0)), kk
      }
      dispose() {
        const kk = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          Fk = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let Bk = 0; Bk < Fk; Bk++) {
          const Fk = kk[Bk];
          Fk && void 0 !== Fk.getMaterialForRenderPass(this.renderPassId) && Fk.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const Bk of this._sceneUBOs) Bk.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === yk.REFRESHRATE_RENDER_ONCE && (this.refreshRate = yk.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    yk.REFRESHRATE_RENDER_ONCE = 0, yk.REFRESHRATE_RENDER_ONEVERYFRAME = 1, yk.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var fk = Bk(39296);
    class mk extends ak.f {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate
      }
      set renderListPredicate(kk) {
        this._objectRenderer.renderListPredicate = kk
      }
      get renderList() {
        return this._objectRenderer.renderList
      }
      set renderList(kk) {
        this._objectRenderer.renderList = kk
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList
      }
      set particleSystemList(kk) {
        this._objectRenderer.particleSystemList = kk
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList
      }
      set getCustomRenderList(kk) {
        this._objectRenderer.getCustomRenderList = kk
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles
      }
      set renderParticles(kk) {
        this._objectRenderer.renderParticles = kk
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites
      }
      set renderSprites(kk) {
        this._objectRenderer.renderSprites = kk
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering
      }
      set enableBoundingBoxRendering(kk) {
        this._objectRenderer.enableBoundingBoxRendering = kk
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering
      }
      set enableOutlineRendering(kk) {
        this._objectRenderer.enableOutlineRendering = kk
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck
      }
      set forceLayerMaskCheck(kk) {
        this._objectRenderer.forceLayerMaskCheck = kk
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera
      }
      set activeCamera(kk) {
        this._objectRenderer.activeCamera = kk
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD
      }
      set cameraForLOD(kk) {
        this._objectRenderer.cameraForLOD = kk
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing
      }
      set disableImageProcessing(kk) {
        this._objectRenderer.disableImageProcessing = kk
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction
      }
      set customIsReadyFunction(kk) {
        this._objectRenderer.customIsReadyFunction = kk
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction
      }
      set customRenderFunction(kk) {
        this._objectRenderer.customRenderFunction = kk
      }
      get postProcesses() {
        return this._postProcesses
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled
      }
      set onAfterUnbind(kk) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(kk)
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable
      }
      set onBeforeRender(kk) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(kk)
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable
      }
      set onAfterRender(kk) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(kk)
      }
      set onClear(kk) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(kk)
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList
      }
      set _waitingRenderList(kk) {
        this._objectRenderer._waitingRenderList = kk
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
      setMaterialForRendering(kk, Fk) {
        this._objectRenderer.setMaterialForRendering(kk, Fk)
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
      set boundingBoxSize(kk) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(kk)) return;
        this._boundingBoxSize = kk;
        const Fk = this.XN();
        Fk && Fk.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(kk, Fk, Bk) {
        let Xk, bk, dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          sk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Vk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Jk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Ak = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : ak.f.TRILINEAR_SAMPLINGMODE,
          ek = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          fk = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          mk = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          Wk = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          vk = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          ik = arguments.length > 13 ? arguments[13] : void 0,
          Yk = arguments.length > 14 ? arguments[14] : void 0,
          Lk = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          Ok = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          Ek = !0,
          Sk = !1;
        if ("object" === typeof dk) {
          const kk = dk;
          dk = !!kk.generateMipMaps, sk = kk.doNotChangeAspectRatio ?? !0, Vk = kk.type ?? 0, Jk = !!kk.isCube, Ak = kk.samplingMode ?? ak.f.TRILINEAR_SAMPLINGMODE, ek = kk.generateDepthBuffer ?? !0, fk = !!kk.generateStencilBuffer, mk = !!kk.isMulti, Wk = kk.format ?? 5, vk = !!kk.delayAllocation, ik = kk.samples, Yk = kk.creationFlags, Lk = !!kk.noColorAttachment, Ok = !!kk.useSRGBBuffer, Xk = kk.colorAttachment, Ek = kk.gammaSpace ?? Ek, bk = kk.existingObjectRenderer, Sk = !!kk.enableClusteredLights
        }
        if (super(null, Bk, !dk, void 0, Ak, void 0, void 0, void 0, void 0, Wk), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new Rk.e, this.onAfterUnbindObservable = new Rk.e, this.onClearObservable = new Rk.e, this.onResizeObservable = new Rk.e, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = tk.s.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(Bk = this.XN())) return;
        const Nk = this.XN().ne();
        this._gammaSpace = Ek, this._coordinatesMode = ak.f.PROJECTION_MODE, this.name = kk, this.isRenderTarget = !0, this._initialSizeParameter = Fk, this._dontDisposeObjectRenderer = !!bk, this._processSizeParameter(Fk), this._objectRenderer = bk ?? new yk(kk, Bk, {
          numPasses: Jk ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: sk,
          enableClusteredLights: Sk
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const kk = this._scene;
          if (!this._disableEngineStages)
            for (const Fk of kk._beforeRenderTargetClearStage) Fk.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(Nk) : this.skipInitialClear || Nk.clear(this.clearColor ?? kk.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || kk.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const Fk of kk._beforeRenderTargetDrawStage) Fk.action(this, this._currentFaceIndex, this._currentLayer);
          Nk._debugPushGroup && Nk._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (Nk._debugPopGroup && Nk._debugPopGroup(), !this._disableEngineStages)
            for (const Fk of this._scene._afterRenderTargetDrawStage) Fk.action(this, this._currentFaceIndex, this._currentLayer);
          const kk = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const Fk of this._scene._afterRenderTargetPostProcessStage) Fk.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = kk), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), Nk) : wk.b.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(Nk) : this.skipInitialClear || Nk.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = Nk.onResizeObservable.add((() => {})), this._generateMipMaps = !!dk, this._doNotChangeAspectRatio = sk, mk || (this._renderTargetOptions = {
          generateMipMaps: dk,
          type: Vk,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: ek,
          generateStencilBuffer: fk,
          samples: ik,
          creationFlags: Yk,
          noColorAttachment: Lk,
          useSRGBBuffer: Ok,
          colorAttachment: Xk,
          label: this.name
        }, this.samplingMode === ak.f.NEAREST_SAMPLINGMODE && (this.wrapU = ak.f.CLAMP_ADDRESSMODE, this.wrapV = ak.f.CLAMP_ADDRESSMODE), vk || (Jk ? (this._renderTarget = Bk.ne().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = ak.f.INVCUBIC_MODE, this._textureMatrix = tk.c.Identity()) : this._renderTarget = Bk.ne().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== ik && (this.samples = ik)))
      }
      createDepthStencilTexture() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          ak = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(kk, Fk, Bk, Rk, tk, ak)
      }
      _processSizeParameter(kk) {
        if (kk.ratio) {
          this._sizeRatio = kk.ratio;
          const Fk = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(Fk.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(Fk.getRenderHeight(), this._sizeRatio)
          }
        } else this._size = kk
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples
      }
      set samples(kk) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(kk))
      }
      addPostProcess(kk) {
        if (!this._postProcessManager) {
          const kk = this.XN();
          if (!kk) return;
          this._postProcessManager = new Xk.d(kk), this._postProcesses = new Array
        }
        this._postProcesses.push(kk), this._postProcesses[0].autoClear = !1
      }
      clearPostProcesses() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (kk)
            for (const kk of this._postProcesses) kk.dispose();
          this._postProcesses = []
        }
      }
      removePostProcess(kk) {
        if (!this._postProcesses) return;
        const Fk = this._postProcesses.indexOf(kk); - 1 !== Fk && (this._postProcesses.splice(Fk, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter()
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate
      }
      set refreshRate(kk) {
        this._objectRenderer.refreshRate = kk
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
        const kk = this._size.layers;
        if (kk) return kk;
        const Fk = this._size.depth;
        return Fk || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(kk) {
        const Fk = Math.max(1, this.getRenderSize() * kk);
        this.resize(Fk)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(kk) {
        const Fk = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const Bk = this.XN();
        Bk && (this._processSizeParameter(kk), this._renderTarget = Fk ? Bk.ne().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : Bk.ne().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(kk, Fk)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => Bk(41248))).then((kk => this._dumpTools = kk))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const kk = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), kk
      }
      _render() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Bk = this.XN();
        if (!Bk) return;
        void 0 !== this.useCameraPostProcesses && (kk = this.useCameraPostProcesses);
        const Rk = Bk.ne();
        if (Rk._debugPushGroup && Rk._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let tk = 0; tk < 6; tk++) this._renderToTarget(tk, kk, Fk), Bk.incrementRenderId(), Bk.resetCachedMaterial();
          else this._renderToTarget(0, kk, Fk);
        else
          for (let tk = 0; tk < this.getRenderLayers(); tk++) this._renderToTarget(0, kk, Fk, tk), Bk.incrementRenderId(), Bk.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), Rk._debugPopGroup && Rk._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(kk, Fk) {
        const Bk = kk * Fk,
          Rk = (0, bk.k)(Bk + 16384 / (128 + Bk));
        return Math.min((0, bk.c)(kk), Rk)
      }
      _bindFrameBuffer() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Bk = this.XN();
        if (!Bk) return;
        const Rk = Bk.ne();
        this._renderTarget && Rk.bindFramebuffer(this._renderTarget, this.isCube ? kk : void 0, void 0, void 0, this.ignoreCameraViewport, 0, Fk)
      }
      _unbindFrameBuffer(kk, Fk) {
        this._renderTarget && kk.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(Fk)
        }))
      }
      _prepareFrame(kk, Fk, Bk, Rk) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(Fk, Bk) : Rk && kk.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(Fk, Bk)
      }
      _renderToTarget(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const tk = this.XN();
        if (!tk) return;
        const ak = tk.ne();
        this._currentFaceIndex = kk, this._currentLayer = Rk, this._currentUseCameraPostProcess = Fk, this._currentDumpForDebug = Bk, this._prepareFrame(tk, kk, Rk, Fk), this._objectRenderer.render(kk + Rk, !0), this._unbindFrameBuffer(ak, kk), this._texture && this.isCube && 5 === kk && ak.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(kk, Fk, Bk, Rk)
      }
      setRenderingAutoClearDepthStencil(kk, Fk) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(kk, Fk)
      }
      clone() {
        const kk = this.getSize(),
          Fk = new mk(this.name, kk, this.XN(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return Fk.hasAlpha = this.hasAlpha, Fk.level = this.level, Fk.coordinatesMode = this.coordinatesMode, this.renderList && (Fk.renderList = this.renderList.slice(0)), Fk
      }
      serialize() {
        if (!this.name) return null;
        const kk = super.serialize();
        if (kk.renderTargetSize = this.getRenderSize(), kk.renderList = [], this.renderList)
          for (let Fk = 0; Fk < this.renderList.length; Fk++) kk.renderList.push(this.renderList[Fk].id);
        return kk
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.XN().ne().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const kk = this.XN();
        if (!kk) return;
        let Fk = kk.customRenderTargets.indexOf(this);
        Fk >= 0 && kk.customRenderTargets.splice(Fk, 1);
        for (const Bk of kk.cameras) Fk = Bk.customRenderTargets.indexOf(this), Fk >= 0 && Bk.customRenderTargets.splice(Fk, 1);
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
    mk.REFRESHRATE_RENDER_ONCE = yk.REFRESHRATE_RENDER_ONCE, mk.REFRESHRATE_RENDER_ONEVERYFRAME = yk.REFRESHRATE_RENDER_ONEVERYFRAME, mk.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = yk.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(mk.prototype, "noPrePassRenderer") || Object.defineProperty(mk.prototype, "noPrePassRenderer", (0, fk.f)("RenderTargetTexture", "noPrePassRenderer"))
  },
  41218: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => dk,
      g: () => sk
    });
    var Rk = Bk(39541),
      tk = Bk(37759),
      ak = Bk(36781),
      Xk = Bk(39261),
      bk = Bk(39733);
    const wk = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class dk {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wk;
        this._fullscreenViewport = new tk.d(0, 0, 1, 1);
        const Bk = Fk.positions ?? wk.positions,
          ak = Fk.indices ?? wk.indices;
        this.engine = kk, this._vertexBuffers = {
          [Rk.n.PositionKind]: new Rk.n(kk, Bk, Rk.n.PositionKind, !1, !1, 2)
        }, this._indexBuffer = kk.createIndexBuffer(ak), this._indexBufferLength = ak.length, this._onContextRestoredObserver = kk.onContextRestoredObservable.add((() => {
          this._indexBuffer = kk.createIndexBuffer(ak);
          for (const kk in this._vertexBuffers) {
            this._vertexBuffers[kk]._rebuild()
          }
        }))
      }
      setViewport() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.engine.setViewport(kk)
      }
      bindBuffers(kk) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, kk)
      }
      applyEffectWrapper(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = Fk, this.engine.stencilState.stencilTest = Bk, this.engine.enableEffect(kk.drawWrapper), this.bindBuffers(kk.effect), kk.onApplyObservable.notifyObservers({})
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
      _isRenderTargetTexture(kk) {
        return void 0 !== kk.renderTarget
      }
      render(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!kk.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const Bk = null === Fk ? null : this._isRenderTargetTexture(Fk) ? Fk.renderTarget : Fk;
        Bk && this.engine.bindFramebuffer(Bk), this.applyEffectWrapper(kk), this.draw(), Bk && this.engine.unBindFramebuffer(Bk), this.restoreStates()
      }
      dispose() {
        const kk = this._vertexBuffers[Rk.n.PositionKind];
        kk && (kk.dispose(), delete this._vertexBuffers[Rk.n.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class sk {
      static RegisterShaderCodeProcessing(kk, Fk) {
        Fk ? sk._CustomShaderCodeProcessing[kk ?? ""] = Fk : delete sk._CustomShaderCodeProcessing[kk ?? ""]
      }
      static _GetShaderCodeProcessing(kk) {
        return sk._CustomShaderCodeProcessing[kk] ?? sk._CustomShaderCodeProcessing[""]
      }
      get name() {
        return this.options.name
      }
      set name(kk) {
        this.options.name = kk
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
      set effect(kk) {
        this._drawWrapper.effect = kk
      }
      constructor(kk) {
        this.alphaMode = 0, this.onEffectCreatedObservable = new ak.e(void 0, !0), this.onApplyObservable = new ak.e, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
          ...kk,
          name: kk.name || "effectWrapper",
          engine: kk.engine,
          uniforms: kk.uniforms || kk.uniformNames || [],
          uniformNames: void 0,
          samplers: kk.samplers || kk.samplerNames || [],
          samplerNames: void 0,
          attributeNames: kk.attributeNames || ["position"],
          uniformBuffers: kk.uniformBuffers || [],
          defines: kk.defines || "",
          useShaderStore: kk.useShaderStore || !1,
          vertexUrl: kk.vertexUrl || kk.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: kk.fragmentShader || "pass",
          indexParameters: kk.indexParameters,
          blockCompilation: kk.blockCompilation || !1,
          shaderLanguage: kk.shaderLanguage || 0,
          onCompiled: kk.onCompiled || void 0,
          extraInitializations: kk.extraInitializations || void 0,
          extraInitializationsAsync: kk.extraInitializationsAsync || void 0,
          useAsPostProcess: kk.useAsPostProcess ?? !1,
          allowEmptySourceTexture: kk.allowEmptySourceTexture ?? !1
        }, this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), kk.vertexUrl || kk.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add((() => {
          this.effect.setFloat2("scale", 1, 1)
        }))), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add((() => {
          this.bind()
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.onContextRestoredObservable.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new bk.c(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const Fk = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, Fk, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Rk = arguments.length > 2 ? arguments[2] : void 0,
          tk = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, tk && this._importPromises.push(...tk);
        const ak = this.options.engine.isWebGPU && !sk.ForceGLSL;
        this._gatherImports(ak, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(ak && this._webGPUReady ? Bk.e(356).then((() => Bk(61148))) : Bk.e(345).then((() => Bk(60923)))), void 0 !== Rk && Rk(ak, this._importPromises), ak && this._webGPUReady && (this.options.shaderLanguage = 1), kk || this.updateEffect(Fk)
      }
      updateEffect() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Rk = arguments.length > 3 ? arguments[3] : void 0,
          tk = arguments.length > 4 ? arguments[4] : void 0,
          ak = arguments.length > 5 ? arguments[5] : void 0,
          bk = arguments.length > 6 ? arguments[6] : void 0,
          wk = arguments.length > 7 ? arguments[7] : void 0;
        const dk = sk._GetShaderCodeProcessing(this.name);
        if (dk?.defineCustomBindings) {
          const Rk = Fk?.slice() ?? [];
          Rk.push(...this.options.uniforms);
          const tk = Bk?.slice() ?? [];
          tk.push(...this.options.samplers), kk = dk.defineCustomBindings(this.name, kk, Rk, tk), Fk = Rk, Bk = tk
        }
        this.options.defines = kk || "";
        const Vk = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let Jk;
        Jk = this.options.extraInitializationsAsync ? async () => {
          await (Vk?.()), await this.options.extraInitializationsAsync()
        }: Vk, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: bk ?? this._shaderPath.vertex,
          fragment: wk ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: Fk || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: Bk || this.options.samplers,
          defines: null !== kk ? kk : "",
          fallbacks: null,
          onCompiled: tk ?? this.options.onCompiled,
          onError: ak ?? null,
          indexParameters: Rk || this.options.indexParameters,
          processCodeAfterIncludes: dk?.processCodeAfterIncludes ? (kk, Fk) => dk.processCodeAfterIncludes(this.name, kk, Fk) : null,
          processFinalCode: dk?.processFinalCode ? (kk, Fk) => dk.processFinalCode(this.name, kk, Fk) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: Jk
        }, this.options.engine) : this._drawWrapper.effect = new Xk.b(this._shaderPath, this.options.attributeNames, Fk || this.options.uniforms, Bk || this.options.samplerNames, this.options.engine, kk, void 0, tk || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, Jk), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !kk && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), sk._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.ne().onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    sk.ForceGLSL = !1, sk._CustomShaderCodeProcessing = {}
  },
  41248: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      Dispose: () => Wk,
      DumpData: () => mk,
      DumpDataAsync: () => fk,
      DumpFramebuffer: () => yk,
      DumpTools: () => vk,
      EncodeImageAsync: () => ek,
      RegisterDumpTools: () => Yk
    });
    var Rk = Bk(39397),
      tk = Bk(41218),
      ak = Bk(39492),
      Xk = Bk(36790),
      bk = Bk(36772),
      wk = Bk(38320),
      dk = Bk(39461),
      sk = Bk(39404);
    let Vk = null;
    async function Jk() {
      return Vk || (Vk = async function() {
        const kk = bk.c.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        kk instanceof OffscreenCanvas && wk.b.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: Fk
        } = await Promise.resolve().then((() => Bk(39258)));
        if (!Fk.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const Rk = new Fk(kk, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        bk.c.Instances.pop(), bk.c.OnEnginesDisposedObservable.add((kk => {
          Rk && kk !== Rk && !Rk.BBk && 0 === bk.c.Instances.length && Wk()
        })), Rk.getCaps().parallelShaderCompile = void 0;
        const ak = new tk.c(Rk),
          {
            passPixelShader: Xk
          } = await Bk.e(364).then((() => Bk(61212))),
          dk = new tk.g({
            engine: Rk,
            name: Xk.name,
            fragmentShader: Xk.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: kk,
          dumpEngine: {
            engine: Rk,
            renderer: ak,
            wrapper: dk
          }
        }
      }()), await Vk
    }
    let Ak = (() => {
      var kk;
      let Fk, Bk = [];
      return kk = class {
        static async EncodeImageAsync(kk, Fk, Bk, Rk, tk, Xk) {
          const bk = await Jk(),
            wk = bk.dumpEngine;
          wk.engine.setSize(Fk, Bk, !0);
          const dk = wk.engine.createRawTexture(kk, Fk, Bk, 5, !1, !tk, 1);
          return wk.renderer.setViewport(), wk.renderer.applyEffectWrapper(wk.wrapper), wk.wrapper.effect._bindTexture("textureSampler", dk), wk.renderer.draw(), dk.dispose(), await new Promise(((kk, Fk) => {
            ak.h.ToBlob(bk.canvas, (Bk => {
              Bk ? kk(Bk) : Fk(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), Rk, Xk)
          }))
        }
      }, (() => {
        const tk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Fk = [sk.g], (0, Rk.j)(kk, null, Fk, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: kk => "EncodeImageAsync" in kk,
            get: kk => kk.EncodeImageAsync
          },
          metadata: tk
        }, null, Bk), tk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: tk
        }), (0, Rk.l)(kk, Bk)
      })(), kk
    })();
    const ek = Ak.EncodeImageAsync;
    async function yk(kk, Fk, Bk, Rk) {
      let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        ak = arguments.length > 5 ? arguments[5] : void 0,
        Xk = arguments.length > 6 ? arguments[6] : void 0;
      const bk = await Bk.readPixels(0, 0, kk, Fk);
      mk(kk, Fk, new Uint8Array(bk.buffer), Rk, tk, ak, !0, void 0, Xk)
    }
    async function fk(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        tk = arguments.length > 4 ? arguments[4] : void 0,
        bk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        sk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Vk = arguments.length > 7 ? arguments[7] : void 0;
      if (Bk instanceof Float32Array) {
        const kk = new Uint8Array(Bk.length);
        let Fk = Bk.length;
        for (; Fk--;) {
          const Rk = Bk[Fk];
          kk[Fk] = Math.round(255 * (0, Xk.Clamp)(Rk))
        }
        Bk = kk
      }
      const Jk = await Ak.EncodeImageAsync(Bk, kk, Fk, Rk, bk, Vk);
      void 0 !== tk && ak.h.DownloadBlob(Jk, tk), Jk.type !== Rk && wk.b.Warn(`DumpData: The requested mimeType '${Rk}' is not supported. The result has mimeType '${Jk.type}' instead.`);
      const ek = await Jk.arrayBuffer();
      return sk ? ek : `data:${Rk};base64,${(0,dk.f)(ek)}`
    }

    function mk(kk, Fk, Bk, Rk) {
      let tk = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== tk || Rk || (tk = ""), fk(kk, Fk, Bk, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", tk, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((kk => {
        Rk && Rk(kk)
      }))
    }

    function Wk() {
      Vk && (Vk?.then((kk => {
        kk.canvas instanceof HTMLCanvasElement && kk.canvas.remove(), kk.dumpEngine && (kk.dumpEngine.engine.dispose(), kk.dumpEngine.renderer.dispose(), kk.dumpEngine.wrapper.dispose())
      })), Vk = null)
    }
    const vk = {
      DumpData: mk,
      DumpDataAsync: fk,
      DumpFramebuffer: yk,
      Dispose: Wk
    };
    let ik = !1;

    function Yk() {
      if (ik) return;
      ik = !0;
      ak.h.DumpData = mk, ak.h.DumpDataAsync = fk, ak.h.DumpFramebuffer = yk
    }
  },
  41230: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Ak,
      h: () => ek,
      i: () => yk
    });
    var Rk = Bk(39895),
      tk = Bk(41237),
      ak = Bk(39397),
      Xk = Bk(41215),
      bk = Bk(39414),
      wk = Bk(41240),
      dk = Bk(39404);
    class sk extends Xk.b {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(kk, Fk) {
        let Bk = arguments.length > 4 ? arguments[4] : void 0;
        const Rk = {
          size: "number" === typeof Fk ? Fk : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: Bk,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...Fk
        };
        super(kk, wk.f.FragmentUrl, {
          effectWrapper: "number" !== typeof Fk && Fk.effectWrapper ? void 0 : new wk.f(kk, Bk, Rk),
          ...Rk
        })
      }
      static _Parse(kk, Fk, Bk, Rk) {
        return bk.c.Parse((() => new sk(kk.name, kk.options, Fk, kk.renderTargetSamplingMode, kk._engine, kk.reusable)), kk, Bk, Rk)
      }
    }(() => {
      var kk;
      let Fk, Bk = Xk.b,
        Rk = [];
      kk = class extends Bk {
        get face() {
          return this._effectWrapper.face
        }
        set face(kk) {
          this._effectWrapper.face = kk
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(kk, Fk) {
          let Bk = arguments.length > 4 ? arguments[4] : void 0;
          const tk = {
            size: "number" === typeof Fk ? Fk : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: Bk,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...Fk
          };
          super(kk, wk.f.FragmentUrl, {
            effectWrapper: "number" !== typeof Fk && Fk.effectWrapper ? void 0 : new wk.b(kk, Bk, tk),
            ...tk
          }), (0, ak.l)(this, Rk)
        }
        static _Parse(Fk, Bk, Rk, tk) {
          return bk.c.Parse((() => new kk(Fk.name, Fk.options, Bk, Fk.renderTargetSamplingMode, Fk._engine, Fk.reusable)), Fk, Rk, tk)
        }
      }, (() => {
        const tk = "function" === typeof Symbol && Symbol.metadata ? Object.create(Bk[Symbol.metadata] ?? null) : void 0;
        Fk = [(0, dk.M)()], (0, ak.j)(kk, null, Fk, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: kk => "face" in kk,
            get: kk => kk.face
          },
          metadata: tk
        }, null, Rk), tk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: tk
        })
      })()
    })();
    var Vk = Bk(36790),
      Jk = Bk(39465);

    function Ak(kk, Fk, Bk, Rk, tk, ak, bk, wk) {
      const dk = Fk.ne();
      return Fk.isReady = !1, tk = tk ?? Fk.samplingMode, Rk = Rk ?? Fk.type, ak = ak ?? Fk.format, bk = bk ?? Fk.width, wk = wk ?? Fk.height, -1 === Rk && (Rk = 0), new Promise((sk => {
        const Vk = new Xk.b("postprocess", kk, null, null, 1, null, tk, dk, !1, void 0, Rk, void 0, null, !1, ak);
        Vk.externalTextureSamplerBinding = !0;
        const Jk = dk.createRenderTargetTexture({
          width: bk,
          height: wk
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: tk,
          type: Rk,
          format: ak
        });
        Vk.onEffectCreatedObservable.addOnce((kk => {
          kk.executeWhenCompiled((() => {
            Vk.onApply = kk => {
              kk._bindTexture("textureSampler", Fk), kk.setFloat2("scale", 1, 1)
            }, Bk.postProcessManager.directRender([Vk], Jk, !0), dk.restoreDefaultFramebuffer(), dk._releaseTexture(Fk), Vk && Vk.dispose(), Jk._swapAndDie(Fk), Fk.type = Rk, Fk.format = 5, Fk.isReady = !0, sk(Fk)
          }))
        }))
      }))
    }
    async function ek(kk, Fk, ak) {
      let bk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        wk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        dk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        sk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(kk) {
        if (kk.isReady()) return;
        if (kk.loadingError) throw new Error(kk.errorObject?.message || `Texture ${kk.name} errored while loading.`);
        const Fk = kk.onLoadObservable;
        if (Fk) return await new Promise((kk => Fk.addOnce((() => kk()))));
        const Bk = kk._texture?.onLoadedObservable;
        if (Bk) return await new Promise((kk => Bk.addOnce((() => kk()))));
        throw new Error(`Cannot determine readiness of texture ${kk.name}.`)
      }(kk);
      const Jk = kk.getInternalTexture(),
        Ak = kk.is3D || !!Jk?.is3D,
        {
          width: ek,
          height: yk
        } = kk.getSize(),
        fk = Fk ?? ek,
        mk = ak ?? yk;
      if (dk || Ak || function(kk) {
          switch (kk) {
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
        }(kk.textureFormat) || fk !== ek || mk !== yk) {
        if (kk.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${dk?"RTT":"compression"} is not supported.`);
        return await async function(kk, Fk, ak, bk, wk) {
          let dk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const sk = kk.XN(),
            Vk = sk.ne(),
            Jk = kk.getInternalTexture(),
            Ak = kk.is3D || !!Jk?.is3D;
          let ek;
          if (Vk.isWebGPU ? Ak ? await Bk.e(360).then((() => Bk(61187))) : kk.isCube ? await Bk.e(361).then((() => Bk(61190))) : await Bk.e(362).then((() => Bk(61199))) : Ak ? await Bk.e(357).then((() => Bk(61169))) : kk.isCube ? await Bk.e(358).then((() => Bk(61177))) : await Bk.e(359).then((() => Bk(61182))), Ak) ek = new Xk.b("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: Rk.f.NEAREST_NEAREST_MIPNEAREST,
            engine: Vk,
            shaderLanguage: Vk.isWebGPU ? 1 : 0
          });
          else if (kk.isCube) {
            const kk = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            ek = new Xk.b("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: Rk.f.NEAREST_NEAREST_MIPNEAREST,
              engine: Vk,
              defines: kk[bk],
              shaderLanguage: Vk.isWebGPU ? 1 : 0
            })
          } else ek = new Xk.b("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: Rk.f.NEAREST_NEAREST_MIPNEAREST,
            engine: Vk,
            shaderLanguage: Vk.isWebGPU ? 1 : 0
          });
          await new Promise((kk => {
            ek.onEffectCreatedObservable.addOnce((Fk => {
              Fk.executeWhenCompiled((() => {
                kk(0)
              }))
            }))
          }));
          const yk = new tk.d("temp", {
            width: Fk,
            height: ak
          }, sk, !1);
          ek.onApply = function(Fk) {
            Fk.setTexture("textureSampler", kk), Fk.setFloat("lod", wk), Fk.setInt("gamma", kk.gammaSpace ? 1 : 0), Ak && Fk.setFloat("slice", dk)
          };
          try {
            if (yk.renderTarget && Jk) {
              const Bk = Jk.samplingMode;
              0 !== wk ? kk.updateSamplingMode(Rk.f.NEAREST_NEAREST_MIPNEAREST) : kk.updateSamplingMode(Rk.f.NEAREST_NEAREST), sk.postProcessManager.directRender([ek], yk.renderTarget, !0), kk.updateSamplingMode(Bk);
              const tk = await Vk.readPixels(0, 0, Fk, ak),
                Xk = new Uint8Array(tk.buffer, tk.byteOffset, tk.byteLength);
              return Vk.unBindFramebuffer(yk.renderTarget), Xk
            }
            throw Error("Render to texture failed.")
          } finally {
            yk.dispose(), ek.dispose()
          }
        }(kk, fk, mk, bk, wk, sk)
      }
      let Wk = await kk.readPixels(bk, wk);
      if (!Wk) throw new Error(`Failed to read pixels from texture ${kk.name}.`);
      if (Wk instanceof Float32Array) {
        const kk = new Uint8Array(Wk.length);
        let Fk = Wk.length;
        for (; Fk--;) {
          const Bk = Wk[Fk];
          kk[Fk] = Math.round(255 * (0, Vk.Clamp)(Bk))
        }
        Wk = kk
      }
      const vk = fk * mk,
        ik = 4 * vk;
      if (Wk.length !== ik) {
        const kk = 0 === vk ? 0 : Wk.length / vk;
        if (1 === kk || 2 === kk || 3 === kk) {
          const Fk = new Uint8Array(ik);
          for (let Bk = 0, Rk = 0, tk = 0; Bk < vk; Bk++, tk += 4) {
            const Bk = Wk[Rk++];
            if (1 === kk) {
              Fk[tk] = Bk, Fk[tk + 1] = Bk, Fk[tk + 2] = Bk, Fk[tk + 3] = 255;
              continue
            }
            const ak = Wk[Rk++];
            2 !== kk ? (Fk[tk] = Bk, Fk[tk + 1] = ak, Fk[tk + 2] = Wk[Rk++], Fk[tk + 3] = 255) : (Fk[tk] = Bk, Fk[tk + 1] = ak, Fk[tk + 2] = 0, Fk[tk + 3] = 255)
          }
          return Fk
        }
      }
      return Wk
    }
    const yk = {
      CreateResizedCopy: function(kk, Fk, Bk) {
        let ak = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Xk = kk.XN(),
          bk = Xk.ne(),
          wk = new tk.d("resized" + kk.name, {
            width: Fk,
            height: Bk
          }, Xk, !kk.noMipmap, !0, kk._texture.type, !1, kk.samplingMode, !1);
        wk.wrapU = kk.wrapU, wk.wrapV = kk.wrapV, wk.uOffset = kk.uOffset, wk.vOffset = kk.vOffset, wk.uScale = kk.uScale, wk.vScale = kk.vScale, wk.uAng = kk.uAng, wk.vAng = kk.vAng, wk.wAng = kk.wAng, wk.coordinatesIndex = kk.coordinatesIndex, wk.level = kk.level, wk.anisotropicFilteringLevel = kk.anisotropicFilteringLevel, wk._texture.isReady = !1, kk.wrapU = Rk.f.CLAMP_ADDRESSMODE, kk.wrapV = Rk.f.CLAMP_ADDRESSMODE;
        const dk = new sk("pass", 1, null, ak ? Rk.f.BILINEAR_SAMPLINGMODE : Rk.f.NEAREST_SAMPLINGMODE, bk, !1, 0);
        return dk.externalTextureSamplerBinding = !0, dk.onEffectCreatedObservable.addOnce((Fk => {
          Fk.executeWhenCompiled((() => {
            dk.onApply = function(Fk) {
              Fk.setTexture("textureSampler", kk)
            };
            const Fk = wk.renderTarget;
            Fk && (Xk.postProcessManager.directRender([dk], Fk), bk.unBindFramebuffer(Fk), wk.disposeFramebufferObjects(), dk.dispose(), wk.getInternalTexture().isReady = !0)
          }))
        })), wk
      },
      ApplyPostProcess: Ak,
      ToHalfFloat: Jk.h,
      FromHalfFloat: Jk.d,
      GetTextureDataAsync: ek
    }
  },
  41215: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => ek
    });
    var Rk = Bk(39397),
      tk = Bk(39506),
      ak = Bk(36781),
      Xk = Bk(36758),
      bk = Bk(39261),
      wk = Bk(39404),
      dk = Bk(39414),
      sk = Bk(36798),
      Vk = Bk(39305),
      Jk = Bk(39329),
      Ak = Bk(41218);
    let ek = (() => {
        var kk;
        let Fk, bk, Vk, ek, yk, mk, Wk, vk, ik, Yk, Lk, Ok, Ek, Sk, Nk, Hk, uk = [],
          Mk = [],
          gk = [],
          Uk = [],
          ck = [],
          Gk = [],
          Tk = [],
          rk = [],
          Dk = [],
          zk = [],
          Pk = [],
          hk = [],
          qk = [],
          Ck = [],
          Zk = [],
          pk = [],
          Kk = [],
          xk = [],
          jk = [],
          lk = [],
          nk = [],
          Ik = [],
          Qk = [],
          kF = [],
          FF = [],
          BF = [],
          RF = [],
          tF = [],
          aF = [];
        return kk = class {
          static get ForceGLSL() {
            return Ak.g.ForceGLSL
          }
          static set ForceGLSL(kk) {
            Ak.g.ForceGLSL = kk
          }
          static RegisterShaderCodeProcessing(kk, Fk) {
            Ak.g.RegisterShaderCodeProcessing(kk, Fk)
          }
          get name() {
            return this._effectWrapper.name
          }
          set name(kk) {
            this._effectWrapper.name = kk
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode
          }
          set alphaMode(kk) {
            this._effectWrapper.alphaMode = kk
          }
          get samples() {
            return this._samples
          }
          set samples(kk) {
            this._samples = Math.min(kk, this._engine.getCaps().maxMSAASamples), this._textures.forEach((kk => {
              kk.setSamples(this._samples)
            }))
          }
          get shaderLanguage() {
            return this._shaderLanguage
          }
          getEffectName() {
            return this._fragmentUrl
          }
          set onActivate(kk) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), kk && (this._onActivateObserver = this.onActivateObservable.add(kk))
          }
          set onSizeChanged(kk) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(kk)
          }
          set onApply(kk) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(kk)
          }
          set onBeforeRender(kk) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(kk)
          }
          set onAfterRender(kk) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(kk)
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd]
          }
          set inputTexture(kk) {
            this._forcedOutputTexture = kk
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty())
          }
          getCamera() {
            return this.sK
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.E1(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(Fk, Bk, bk, wk, dk, sk) {
            let Vk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              Jk = arguments.length > 7 ? arguments[7] : void 0,
              ek = arguments.length > 8 ? arguments[8] : void 0,
              yk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              mk = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              Wk = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              vk = arguments.length > 12 ? arguments[12] : void 0,
              ik = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              Yk = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              Lk = arguments.length > 15 ? arguments[15] : void 0,
              Ok = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, Rk.l)(this, uk), null), this.uniqueId = (0, Rk.l)(this, Mk, void 0), this.width = ((0, Rk.l)(this, gk), (0, Rk.l)(this, Uk, -1)), this.height = ((0, Rk.l)(this, ck), (0, Rk.l)(this, Gk, -1)), this.nodeMaterialSource = ((0, Rk.l)(this, Tk), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, Rk.l)(this, rk, void 0), this.clearColor = ((0, Rk.l)(this, Dk), (0, Rk.l)(this, zk, void 0)), this.autoClear = ((0, Rk.l)(this, Pk), (0, Rk.l)(this, hk, !0)), this.forceAutoClearInAlphaMode = ((0, Rk.l)(this, qk), (0, Rk.l)(this, Ck, !1)), this.alphaConstants = ((0, Rk.l)(this, Zk), (0, Rk.l)(this, pk, void 0)), this.animations = ((0, Rk.l)(this, Kk), []), this.enablePixelPerfectMode = (0, Rk.l)(this, xk, !1), this.forceFullscreenViewport = ((0, Rk.l)(this, jk), (0, Rk.l)(this, lk, !0)), this.inspectableCustomProperties = (0, Rk.l)(this, nk), this.scaleMode = (0, Rk.l)(this, Ik, 1), this.alwaysForcePOT = ((0, Rk.l)(this, Qk), (0, Rk.l)(this, kF, !1)), this._samples = ((0, Rk.l)(this, FF), (0, Rk.l)(this, BF, 1)), this.adaptScaleToCurrentViewport = ((0, Rk.l)(this, RF), (0, Rk.l)(this, tF, !1)), this.doNotSerialize = ((0, Rk.l)(this, aF), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new tk.c(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new Xk.p(1, 1), this._texelSize = Xk.p.Zero(), this.onActivateObservable = new ak.e, this.onSizeChangedObservable = new ak.e, this.onApplyObservable = new ak.e, this.onBeforeRenderObservable = new ak.e, this.onAfterRenderObservable = new ak.e, this.yN = new ak.e, fk();
            let Ek, Sk = 1,
              Nk = null;
            if (bk && !Array.isArray(bk)) {
              const kk = bk;
              bk = kk.uniforms ?? null, wk = kk.samplers ?? null, Sk = kk.size ?? 1, sk = kk.camera ?? null, Vk = kk.samplingMode ?? 1, Jk = kk.engine, ek = kk.reusable, yk = Array.isArray(kk.defines) ? kk.defines.join("\n") : kk.defines ?? null, mk = kk.textureType ?? 0, Wk = kk.vertexUrl ?? "postprocess", vk = kk.indexParameters, ik = kk.blockCompilation ?? !1, Yk = kk.textureFormat ?? 5, Lk = kk.shaderLanguage ?? 0, Nk = kk.uniformBuffers ?? null, Ok = kk.extraInitializations, Ek = kk.effectWrapper
            } else dk && (Sk = "number" === typeof dk ? dk : {
              width: dk.width,
              height: dk.height
            });
            if (this._useExistingThinPostProcess = !!Ek, this._effectWrapper = Ek ?? new Ak.g({
                name: Fk,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: Bk,
                engine: Jk || sk?.XN().ne(),
                uniforms: bk,
                samplers: wk,
                uniformBuffers: Nk,
                defines: yk,
                vertexUrl: Wk,
                indexParameters: vk,
                blockCompilation: !0,
                shaderLanguage: Lk,
                extraInitializations: void 0
              }), this.name = Fk, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != sk ? (this.sK = sk, this._scene = sk.XN(), sk.attachPostProcess(this), this._engine = this._scene.ne(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : Jk && (this._engine = Jk, this._engine.postProcesses.push(this)), this._options = Sk, this.renderTargetSamplingMode = Vk || 1, this._reusable = ek || !1, this._textureType = mk, this._textureFormat = Yk, this._shaderLanguage = Lk || 0, this._samplers = wk || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = Bk, this._vertexUrl = Wk, this._parameters = bk || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = Nk || [], this._indexParameters = vk, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const Fk = [];
              this._gatherImports(this._engine.isWebGPU && !kk.ForceGLSL, Fk), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(ik, yk, Ok, Fk)
            }
          }
          _gatherImports() {
            let kk = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? kk.push(Promise.all([Bk.e(356).then((() => Bk(61148)))])) : kk.push(Promise.all([Bk.e(345).then((() => Bk(60923)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          ne() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(kk) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = kk, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new tk.c(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Rk = arguments.length > 3 ? arguments[3] : void 0,
              tk = arguments.length > 4 ? arguments[4] : void 0,
              ak = arguments.length > 5 ? arguments[5] : void 0,
              Xk = arguments.length > 6 ? arguments[6] : void 0,
              bk = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(kk, Fk, Bk, Rk, tk, ak, Xk, bk), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(kk, Fk) {
            let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let tk = 0; tk < this._textureCache.length; tk++)
              if (this._textureCache[tk].texture.width === kk.width && this._textureCache[tk].texture.height === kk.height && this._textureCache[tk].postProcessChannel === Bk && this._textureCache[tk].texture._generateDepthBuffer === Fk.generateDepthBuffer && this._textureCache[tk].texture.samples === Fk.samples) return this._textureCache[tk].texture;
            const Rk = this._engine.createRenderTargetTexture(kk, Fk);
            return this._textureCache.push({
              texture: Rk,
              postProcessChannel: Bk,
              lastUsedRenderId: -1
            }), Rk
          }
          _flushTextureCache() {
            const kk = this._renderId;
            for (let Fk = this._textureCache.length - 1; Fk >= 0; Fk--)
              if (kk - this._textureCache[Fk].lastUsedRenderId > 100) {
                let kk = !1;
                for (let Bk = 0; Bk < this._textures.length; Bk++)
                  if (this._textures.data[Bk] === this._textureCache[Fk].texture) {
                    kk = !0;
                    break
                  } kk || (this._textureCache[Fk].texture.dispose(), this._textureCache.splice(Fk, 1))
              }
          }
          resize(kk, Fk) {
            let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = kk, this.height = Fk;
            let ak = null;
            if (Bk)
              for (let wk = 0; wk < Bk._postProcesses.length; wk++)
                if (null !== Bk._postProcesses[wk]) {
                  ak = Bk._postProcesses[wk];
                  break
                } const Xk = {
                width: this.width,
                height: this.height
              },
              bk = {
                generateMipMaps: Rk,
                generateDepthBuffer: tk || ak === this,
                generateStencilBuffer: (tk || ak === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(Xk, bk, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(Xk, bk, 1)), this._texelSize.E1(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let kk;
            if (this._shareOutputWithPostProcess) kk = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) kk = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let Fk;
              kk = this.inputTexture;
              for (let Bk = 0; Bk < this._textureCache.length; Bk++)
                if (this._textureCache[Bk].texture === kk) {
                  Fk = this._textureCache[Bk];
                  break
                } Fk && (Fk.lastUsedRenderId = this._renderId)
            }
            return kk
          }
          activate(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              Bk = arguments.length > 2 ? arguments[2] : void 0;
            const Rk = null === kk || void 0 !== kk.cameraRigMode ? kk || this.sK : null,
              tk = Rk?.XN() ?? kk,
              ak = tk.ne(),
              Xk = ak.getCaps().maxTextureSize,
              bk = (Fk ? Fk.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              wk = (Fk ? Fk.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let dk = this._options.width || bk,
              sk = this._options.height || wk;
            const Vk = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let Ak = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const kk = ak.currentViewport;
                kk && (dk *= kk.width, sk *= kk.height)
              }(Vk || this.alwaysForcePOT) && (this._options.width || (dk = ak.needPOTTextures ? (0, Jk.g)(dk, Xk, this.scaleMode) : dk), this._options.height || (sk = ak.needPOTTextures ? (0, Jk.g)(sk, Xk, this.scaleMode) : sk)), this.width === dk && this.height === sk && (Ak = this._getTarget()) || this.resize(dk, sk, Rk, Vk, Bk), this._textures.forEach((kk => {
                kk.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(kk, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return Ak || (Ak = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.E1(bk / dk, wk / sk), this._engine.bindFramebuffer(Ak, 0, bk, wk, this.forceFullscreenViewport)) : (this._scaleRatio.E1(1, 1), this._engine.bindFramebuffer(Ak, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(Rk), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : tk.clearColor, tk._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), Ak
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
            let kk;
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.ne().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), kk = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", kk?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
          }
          _disposeTextureCache() {
            for (let kk = this._textureCache.length - 1; kk >= 0; kk--) this._textureCache[kk].texture.dispose();
            this._textureCache.length = 0
          }
          setPrePassRenderer(kk) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = kk.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
          }
          dispose(kk) {
            let Fk;
            if (kk = kk || this.sK, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (Fk = this._parentContainer.postProcesses.indexOf(this), Fk > -1 && this._parentContainer.postProcesses.splice(Fk, 1), this._parentContainer = null), Fk = this._engine.postProcesses.indexOf(this), -1 !== Fk && this._engine.postProcesses.splice(Fk, 1), this.yN.notifyObservers(), kk) {
              if (kk.detachPostProcess(this), Fk = kk._postProcesses.indexOf(this), 0 === Fk && kk._postProcesses.length > 0) {
                const kk = this.sK._getFirstPostProcess();
                kk && kk.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const kk = dk.c.Serialize(this),
              Fk = this.getCamera() || this._scene && this._scene.activeCamera;
            return kk.customType = "BABYLON." + this.getClassName(), kk.cameraId = Fk ? Fk.id : null, kk.reusable = this._reusable, kk.textureType = this._textureType, kk.fragmentUrl = this._fragmentUrl, kk.parameters = this._parameters, kk.samplers = this._samplers, kk.uniformBuffers = this._uniformBuffers, kk.options = this._options, kk.defines = this._postProcessDefines, kk.textureFormat = this._textureFormat, kk.vertexUrl = this._vertexUrl, kk.indexParameters = this._indexParameters, kk
          }
          clone() {
            const Fk = this.serialize();
            Fk._engine = this._engine, Fk.cameraId = null;
            const Bk = kk.Parse(Fk, this._scene, "");
            return Bk ? (Bk.onActivateObservable = this.onActivateObservable.clone(), Bk.onSizeChangedObservable = this.onSizeChangedObservable.clone(), Bk.onApplyObservable = this.onApplyObservable.clone(), Bk.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), Bk.onAfterRenderObservable = this.onAfterRenderObservable.clone(), Bk._prePassEffectConfiguration = this._prePassEffectConfiguration, Bk) : null
          }
          static Parse(kk, Fk, Bk) {
            const Rk = (0, sk.c)(kk.customType);
            if (!Rk || !Rk._Parse) return null;
            const tk = Fk ? Fk.getCameraById(kk.cameraId) : null;
            return Rk._Parse(kk, tk, Fk, Bk)
          }
          static _Parse(Fk, Bk, Rk, tk) {
            return dk.c.Parse((() => new kk(Fk.name, Fk.fragmentUrl, Fk.parameters, Fk.samplers, Fk.options, Bk, Fk.renderTargetSamplingMode, Fk._engine, Fk.reusable, Fk.defines, Fk.textureType, Fk.vertexUrl, Fk.indexParameters, !1, Fk.textureFormat)), Fk, Rk, tk)
          }
        }, (() => {
          const Bk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Fk = [(0, wk.M)()], bk = [(0, wk.M)()], Vk = [(0, wk.M)()], ek = [(0, wk.M)()], yk = [(0, wk.M)()], mk = [(0, wk.o)()], Wk = [(0, wk.M)()], vk = [(0, wk.M)()], ik = [(0, wk.M)()], Yk = [(0, wk.M)()], Lk = [(0, wk.M)()], Ok = [(0, wk.M)()], Ek = [(0, wk.M)()], Sk = [(0, wk.M)()], Nk = [(0, wk.M)("samples")], Hk = [(0, wk.M)()], (0, Rk.j)(kk, null, bk, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: kk => "name" in kk,
              get: kk => kk.name
            },
            metadata: Bk
          }, null, uk), (0, Rk.j)(kk, null, ik, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: kk => "alphaMode" in kk,
              get: kk => kk.alphaMode
            },
            metadata: Bk
          }, null, uk), (0, Rk.j)(null, null, Fk, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: kk => "uniqueId" in kk,
              get: kk => kk.uniqueId,
              set: (kk, Fk) => {
                kk.uniqueId = Fk
              }
            },
            metadata: Bk
          }, Mk, gk), (0, Rk.j)(null, null, Vk, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: kk => "width" in kk,
              get: kk => kk.width,
              set: (kk, Fk) => {
                kk.width = Fk
              }
            },
            metadata: Bk
          }, Uk, ck), (0, Rk.j)(null, null, ek, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: kk => "height" in kk,
              get: kk => kk.height,
              set: (kk, Fk) => {
                kk.height = Fk
              }
            },
            metadata: Bk
          }, Gk, Tk), (0, Rk.j)(null, null, yk, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: kk => "renderTargetSamplingMode" in kk,
              get: kk => kk.renderTargetSamplingMode,
              set: (kk, Fk) => {
                kk.renderTargetSamplingMode = Fk
              }
            },
            metadata: Bk
          }, rk, Dk), (0, Rk.j)(null, null, mk, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: kk => "clearColor" in kk,
              get: kk => kk.clearColor,
              set: (kk, Fk) => {
                kk.clearColor = Fk
              }
            },
            metadata: Bk
          }, zk, Pk), (0, Rk.j)(null, null, Wk, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: kk => "autoClear" in kk,
              get: kk => kk.autoClear,
              set: (kk, Fk) => {
                kk.autoClear = Fk
              }
            },
            metadata: Bk
          }, hk, qk), (0, Rk.j)(null, null, vk, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: kk => "forceAutoClearInAlphaMode" in kk,
              get: kk => kk.forceAutoClearInAlphaMode,
              set: (kk, Fk) => {
                kk.forceAutoClearInAlphaMode = Fk
              }
            },
            metadata: Bk
          }, Ck, Zk), (0, Rk.j)(null, null, Yk, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: kk => "alphaConstants" in kk,
              get: kk => kk.alphaConstants,
              set: (kk, Fk) => {
                kk.alphaConstants = Fk
              }
            },
            metadata: Bk
          }, pk, Kk), (0, Rk.j)(null, null, Lk, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: kk => "enablePixelPerfectMode" in kk,
              get: kk => kk.enablePixelPerfectMode,
              set: (kk, Fk) => {
                kk.enablePixelPerfectMode = Fk
              }
            },
            metadata: Bk
          }, xk, jk), (0, Rk.j)(null, null, Ok, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: kk => "forceFullscreenViewport" in kk,
              get: kk => kk.forceFullscreenViewport,
              set: (kk, Fk) => {
                kk.forceFullscreenViewport = Fk
              }
            },
            metadata: Bk
          }, lk, nk), (0, Rk.j)(null, null, Ek, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: kk => "scaleMode" in kk,
              get: kk => kk.scaleMode,
              set: (kk, Fk) => {
                kk.scaleMode = Fk
              }
            },
            metadata: Bk
          }, Ik, Qk), (0, Rk.j)(null, null, Sk, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: kk => "alwaysForcePOT" in kk,
              get: kk => kk.alwaysForcePOT,
              set: (kk, Fk) => {
                kk.alwaysForcePOT = Fk
              }
            },
            metadata: Bk
          }, kF, FF), (0, Rk.j)(null, null, Nk, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: kk => "_samples" in kk,
              get: kk => kk._samples,
              set: (kk, Fk) => {
                kk._samples = Fk
              }
            },
            metadata: Bk
          }, BF, RF), (0, Rk.j)(null, null, Hk, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: kk => "adaptScaleToCurrentViewport" in kk,
              get: kk => kk.adaptScaleToCurrentViewport,
              set: (kk, Fk) => {
                kk.adaptScaleToCurrentViewport = Fk
              }
            },
            metadata: Bk
          }, tF, aF), Bk && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Bk
          })
        })(), kk
      })(),
      yk = !1;

    function fk() {
      yk || (yk = !0, Vk.c.prototype.setTextureFromPostProcess = function(kk, Fk, Bk) {
        let Rk = null;
        Fk && (Fk._forcedOutputTexture ? Rk = Fk._forcedOutputTexture : Fk._textures.data[Fk._currentRenderTextureInd] && (Rk = Fk._textures.data[Fk._currentRenderTextureInd])), this._bindTexture(kk, Rk?.texture ?? null, Bk)
      }, Vk.c.prototype.setTextureFromPostProcessOutput = function(kk, Fk, Bk) {
        this._bindTexture(kk, Fk?._outputTexture?.texture ?? null, Bk)
      }, bk.b.prototype.setTextureFromPostProcess = function(kk, Fk) {
        this._engine.setTextureFromPostProcess(this._samplers[kk], Fk, kk)
      }, bk.b.prototype.setTextureFromPostProcessOutput = function(kk, Fk) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[kk], Fk, kk)
      }, (0, sk.d)("BABYLON.PostProcess", ek))
    }
  },
  41240: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Xk,
      f: () => ak
    });
    var Rk = Bk(41218),
      tk = Bk(36772);
    class ak extends Rk.g {
      _gatherImports(kk, Fk) {
        kk ? (this._webGPUReady = !0, Fk.push(Promise.all([Bk.e(363).then((() => Bk(61204)))]))) : Fk.push(Promise.all([Bk.e(364).then((() => Bk(61212)))])), super._gatherImports(kk, Fk)
      }
      constructor(kk) {
        let Fk = arguments.length > 2 ? arguments[2] : void 0;
        const Bk = {
          name: kk,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || tk.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: ak.FragmentUrl,
          ...Fk
        };
        Bk.engine || (Bk.engine = tk.c.LastCreatedEngine), super(Bk)
      }
    }
    ak.FragmentUrl = "pass";
    class Xk extends Rk.g {
      _gatherImports(kk, Fk) {
        kk ? (this._webGPUReady = !0, Fk.push(Promise.all([Bk.e(365).then((() => Bk(61221)))]))) : Fk.push(Promise.all([Bk.e(366).then((() => Bk(61223)))])), super._gatherImports(kk, Fk)
      }
      constructor(kk) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: kk,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || tk.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: Xk.FragmentUrl,
          defines: "#define POSITIVEX"
        }), this._face = 0
      }
      get face() {
        return this._face
      }
      set face(kk) {
        if (!(kk < 0 || kk > 5)) switch (this._face = kk, this._face) {
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
    Xk.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);