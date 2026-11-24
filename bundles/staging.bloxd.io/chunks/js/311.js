export const id = 311;
export const ids = [311];
export const modules = {
  41815: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Jk
    });
    var Xk = Ik(37187),
      Tk = Ik(37153),
      ik = Ik(40489),
      yk = Ik(40149),
      lk = Ik(39923),
      ak = Ik(38674),
      qk = Ik(40134),
      Lk = Ik(40157),
      tk = Ik(37166),
      Zk = Ik(39878),
      jk = Ik(40107),
      ek = Ik(40195);
    class wk {
      get renderList() {
        return this._renderList
      }
      set renderList(kk) {
        this._renderList !== kk && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), kk && (this._unObserveRenderList = (0, tk.f)(kk, this._renderListHasChanged)), this._renderList = kk)
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
        let Ik;
        Ik = Array.isArray(kk) ? kk : [kk];
        for (let Xk = 0; Xk < Ik.length; ++Xk)
          for (let kk = 0; kk < this.options.numPasses; ++kk) {
            let Tk = Ik[Xk];
            Ik[Xk].rG && (Tk = Ik[Xk].DXk), Tk.setMaterialForRenderPass(this._renderPassIds[kk], void 0 !== Fk ? Array.isArray(Fk) ? Fk[kk] : Fk : void 0)
          }
      }
      _freezeActiveMeshes(kk) {
        this._freezeActiveMeshesCancel = (0, Zk.h)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, kk)
            for (let kk = 0; kk < this._activeMeshes.length; kk++) this._activeMeshes.data[kk]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((kk, Fk) => {
          this._freezeActiveMeshesCancel = null, Fk ? (ak.e.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), kk && ak.e.Error(kk)) : (ak.e.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), kk && (ak.e.Error(kk), kk.stack && ak.e.Error(kk.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let kk = 0; kk < this._activeMeshes.length; kk++) this._activeMeshes.data[kk]._unFreeze();
        this._isFrozen = !1
      }
      constructor(kk, Fk, Ik) {
        this._unObserveRenderList = null, this._renderListHasChanged = (kk, Fk) => {
          const Ik = this._renderList ? this._renderList.length : 0;
          if (0 === Fk && Ik > 0 || 0 === Ik)
            for (const Xk of this._scene.meshes) Xk._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new Xk.e, this.onAfterRenderObservable = new Xk.e, this.onBeforeRenderingManagerRenderObservable = new Xk.e, this.onAfterRenderingManagerRenderObservable = new Xk.e, this.onInitRenderingObservable = new Xk.e, this.onFinishRenderingObservable = new Xk.e, this.onFastPathRenderObservable = new Xk.e, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new jk.f(256), this._activeBoundingBoxes = new jk.f(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = kk, this._scene = Fk, this._engine = this._scene.Oe(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...Ik
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new Lk.e(Fk), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const kk of this._scene.lights) kk.getTypeID() === ek.b.LIGHTTYPEID_CLUSTERED_CONTAINER && kk.isSupported && kk._updateBatches(this.activeCamera).render()
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
        const Ik = this._scene.Oe(),
          Xk = new qk.c(Ik, void 0, Fk, kk, void 0, !1);
        return Xk.addUniform("viewProjection", 16), Fk && Xk.addUniform("viewProjectionR", 16), Xk.addUniform("view", 16), Xk.addUniform("projection", 16), Xk.addUniform("vEyePosition", 4), Xk.addUniform("inverseProjection", 16), Xk
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const kk = this._engine._currentRenderTarget,
          Fk = !(!kk || !kk.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const kk = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${kk} for ${this.name}`, Fk)), this._sceneUBOIsMultiview.push(Fk)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== Fk && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, Fk), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = Fk);
        const Ik = this._sceneUBOs[this._currentSceneUBOIndex++];
        return Ik.unbindEffect(), Ik
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
        const Ik = this._checkReadiness();
        return this.finishRender(), Ik
      }
      prepareRenderList() {
        const kk = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let Fk = 0; Fk < this._waitingRenderList.length; Fk++) {
              const Ik = this._waitingRenderList[Fk],
                Xk = kk.getMeshById(Ik);
              Xk && this.renderList.push(Xk)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const kk = this._scene.meshes;
          for (let Fk = 0; Fk < kk.length; Fk++) {
            const Ik = kk[Fk];
            this.renderListPredicate(Ik) && this.renderList.push(Ik)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(kk, Fk) {
        const Ik = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), Ik && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(Ik.getViewMatrix(), Ik.getProjectionMatrix(!0)), this._scene._activeCamera = Ik, this._engine.setViewport(Ik.rigParent ? Ik.rigParent.viewport : Ik.viewport, kk, Fk)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const kk = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (kk.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), kk._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== kk.activeCamera && kk.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), kk.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Ik = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[kk], this.onBeforeRenderObservable.notifyObservers(kk);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(kk);
        else {
          const Fk = this._prepareRenderingManager(kk),
            Ik = this._scene.getOutlineRenderer?.(),
            Xk = Ik?.enabled;
          Ik && (Ik.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(kk), this._renderingManager.render(this.customRenderFunction, Fk, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(kk), Ik && (Ik.enabled = Xk)
        }
        Fk || this.onAfterRenderObservable.notifyObservers(kk), this._engine.currentRenderPassId = Ik
      }
      _checkReadiness() {
        const kk = this._scene,
          Fk = this._engine.currentRenderPassId;
        let Ik = !0;
        kk.getViewMatrix() || kk.updateTransformMatrix();
        const Xk = this.options.numPasses;
        for (let Tk = 0; Tk < Xk && Ik; Tk++) {
          const Fk = this.renderList ? this.renderList : kk.frameGraph ? kk.meshes : kk.getActiveMeshes().data,
            ik = this.renderList || kk.frameGraph ? Fk.length : kk.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[Tk], this.onBeforeRenderObservable.notifyObservers(Tk);
          let yk = null,
            lk = ik;
          this.getCustomRenderList && (yk = this.getCustomRenderList(Tk, Fk, ik), yk && (lk = yk.length)), yk || (yk = Fk), this.options.doNotChangeAspectRatio || kk.updateTransformMatrix(!0);
          for (let kk = 0; kk < lk && Ik; ++kk) {
            const Fk = yk[kk];
            if (!Fk.isEnabled() || Fk.isBlocked || !Fk.isVisible || !Fk.lK) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(Fk, this.refreshRate, !0)) {
                Ik = !1;
                continue
              }
            } else if (!Fk.isReady(!0)) {
              Ik = !1;
              continue
            }
            let Xk = Fk._edgesRenderer,
              Tk = Fk.hasThinInstances;
            if (Fk.rG) {
              const kk = Fk.DXk;
              kk.edgesShareWithInstances && kk._edgesRenderer?.isEnabled && (Xk = kk._edgesRenderer, Tk = !0)
            } else Fk.rXk && Fk.edgesShareWithInstances && (Tk = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && Xk?.isEnabled && (Xk.isReady(Tk) || (Ik = !1))
          }
          if (this.renderParticles && kk.particlesEnabled) {
            const Fk = this.particleSystemList || kk.jK;
            for (const kk of Fk) kk.isReady() || (Ik = !1)
          }
          if (this.renderSprites && kk.spritesEnabled) {
            const Fk = this.spriteManagerList || kk.spriteManagers;
            if (Fk)
              for (const Xk of Fk) kk.activeCamera && 0 === (Xk.layerMask & kk.activeCamera.layerMask) || Xk.isReady && !Xk.isReady() && (Ik = !1)
          }
          this.onAfterRenderObservable.notifyObservers(Tk), Xk > 1 && (kk.incrementRenderId(), kk.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = Fk, Ik
      }
      _prepareRenderingManager() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Ik = this._scene;
        let Xk, Tk, ik = null;
        const yk = this.renderList ? this.renderList : Ik.frameGraph ? Ik.meshes : Ik.getActiveMeshes().data,
          lk = this.renderList || Ik.frameGraph ? yk.length : Ik.getActiveMeshes().length;
        if (this.getCustomRenderList && (ik = this.getCustomRenderList(kk, yk, lk)), ik) Xk = ik.length, Tk = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !Fk && !this._engine.isWebGPU) return yk;
          this._defaultRenderListPrepared = !0, ik = yk, Xk = lk, Tk = !this.renderList || this.forceLayerMaskCheck
        }
        const ak = Ik.activeCamera,
          qk = this.cameraForLOD ?? ak,
          Lk = Ik.getBoundingBoxRenderer?.();
        if (Ik._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && Lk) {
            Lk.reset();
            for (let kk = 0; kk < this._activeBoundingBoxes.length; kk++) {
              const Fk = this._activeBoundingBoxes.data[kk];
              Lk.renderList.push(Fk)
            }
          }
          return ik
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), Lk && Lk.reset(), this.renderMeshes) {
          const kk = Ik.getRenderId(),
            Fk = Ik.getFrameId();
          for (let yk = 0; yk < Xk; yk++) {
            const Xk = ik[yk];
            if (Xk && !Xk.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(Xk, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!Xk.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let ik, yk;
              if (qk) {
                const kk = Xk._internalAbstractMeshDataInfo._currentLOD.get(qk);
                kk && kk[1] === Fk ? ik = kk[0] : (ik = Ik.customLODSelector ? Ik.customLODSelector(Xk, qk) : Xk.getLOD(qk), kk ? (kk[0] = ik, kk[1] = Fk) : Xk._internalAbstractMeshDataInfo._currentLOD.set(qk, [ik, Fk]))
              } else ik = Xk;
              if (!ik) continue;
              if (ik !== Xk && 0 !== ik.billboardMode && ik.computeWorldMatrix(), ik._preActivateForIntermediateRendering(kk), yk = !(!Tk || !ak) && 0 === (Xk.layerMask & ak.layerMask), Xk.isEnabled() && Xk.isVisible && Xk.lK && !yk) {
                if (this._activeMeshes.push(Xk), ik._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, ik !== Xk && ik._activate(kk, !0), this.enableBoundingBoxRendering && Lk && Lk._preActiveMesh(Xk), Xk._activate(kk, !0) && Xk.lK.length) {
                  Xk.rG ? Xk._internalAbstractMeshDataInfo._actAsRegularMesh && (ik = Xk) : ik._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, ik._internalAbstractMeshDataInfo._isActiveIntermediate = !0, Ik._prepareSkeleton(ik);
                  for (let kk = 0; kk < ik.lK.length; kk++) {
                    const Fk = ik.lK[kk];
                    this.enableBoundingBoxRendering && Lk && Lk._evaluateSubMesh(Xk, Fk), this._renderingManager.dispatch(Fk, ik)
                  }
                }
                Xk._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && Lk && Fk)
          for (let tk = 0; tk < Lk.renderList.length; tk++) {
            const kk = Lk.renderList.data[tk];
            this._activeBoundingBoxes.push(kk)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const kk = this.particleSystemList || Ik.jK;
          for (let Fk = 0; Fk < kk.length; Fk++) {
            const Ik = kk[Fk],
              Xk = Ik.emitter;
            Ik.isStarted() && Xk && (!Xk.position || Xk.isEnabled()) && this._renderingManager.dispatchParticles(Ik)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return ik
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(kk, Fk, Ik, Xk)
      }
      setRenderingAutoClearDepthStencil(kk, Fk) {
        let Ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Xk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(kk, Fk, Ik, Xk), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const kk = new wk(this.name, this._scene, this.options);
        return this.renderList && (kk.renderList = this.renderList.slice(0)), kk
      }
      dispose() {
        const kk = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          Fk = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let Ik = 0; Ik < Fk; Ik++) {
          const Fk = kk[Ik];
          Fk && void 0 !== Fk.getMaterialForRenderPass(this.renderPassId) && Fk.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const Ik of this._sceneUBOs) Ik.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === wk.REFRESHRATE_RENDER_ONCE && (this.refreshRate = wk.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    wk.REFRESHRATE_RENDER_ONCE = 0, wk.REFRESHRATE_RENDER_ONEVERYFRAME = 1, wk.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var Hk = Ik(39863);
    class Jk extends ik.g {
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
        const Fk = this.mG();
        Fk && Fk.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(kk, Fk, Ik) {
        let yk, lk, qk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Lk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          tk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Zk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          jk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : ik.g.TRILINEAR_SAMPLINGMODE,
          ek = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          Hk = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          Jk = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          xk = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          Pk = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          Kk = arguments.length > 13 ? arguments[13] : void 0,
          Qk = arguments.length > 14 ? arguments[14] : void 0,
          sk = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          Vk = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          zk = !0,
          Sk = !1;
        if ("object" === typeof qk) {
          const kk = qk;
          qk = !!kk.generateMipMaps, Lk = kk.doNotChangeAspectRatio ?? !0, tk = kk.type ?? 0, Zk = !!kk.isCube, jk = kk.samplingMode ?? ik.g.TRILINEAR_SAMPLINGMODE, ek = kk.generateDepthBuffer ?? !0, Hk = !!kk.generateStencilBuffer, Jk = !!kk.isMulti, xk = kk.format ?? 5, Pk = !!kk.delayAllocation, Kk = kk.samples, Qk = kk.creationFlags, sk = !!kk.noColorAttachment, Vk = !!kk.useSRGBBuffer, yk = kk.colorAttachment, zk = kk.gammaSpace ?? zk, lk = kk.existingObjectRenderer, Sk = !!kk.enableClusteredLights
        }
        if (super(null, Ik, !qk, void 0, jk, void 0, void 0, void 0, void 0, xk), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new Xk.e, this.onAfterUnbindObservable = new Xk.e, this.onClearObservable = new Xk.e, this.onResizeObservable = new Xk.e, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = Tk.t.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(Ik = this.mG())) return;
        const vk = this.mG().Oe();
        this._gammaSpace = zk, this._coordinatesMode = ik.g.PROJECTION_MODE, this.name = kk, this.isRenderTarget = !0, this._initialSizeParameter = Fk, this._dontDisposeObjectRenderer = !!lk, this._processSizeParameter(Fk), this._objectRenderer = lk ?? new wk(kk, Ik, {
          numPasses: Zk ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: Lk,
          enableClusteredLights: Sk
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const kk = this._scene;
          if (!this._disableEngineStages)
            for (const Fk of kk._beforeRenderTargetClearStage) Fk.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(vk) : this.skipInitialClear || vk.clear(this.clearColor ?? kk.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || kk.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const Fk of kk._beforeRenderTargetDrawStage) Fk.action(this, this._currentFaceIndex, this._currentLayer);
          vk._debugPushGroup && vk._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (vk._debugPopGroup && vk._debugPopGroup(), !this._disableEngineStages)
            for (const Fk of this._scene._afterRenderTargetDrawStage) Fk.action(this, this._currentFaceIndex, this._currentLayer);
          const kk = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const Fk of this._scene._afterRenderTargetPostProcessStage) Fk.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = kk), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), vk) : ak.e.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(vk) : this.skipInitialClear || vk.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = vk.onResizeObservable.add((() => {})), this._generateMipMaps = !!qk, this._doNotChangeAspectRatio = Lk, Jk || (this._renderTargetOptions = {
          generateMipMaps: qk,
          type: tk,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: ek,
          generateStencilBuffer: Hk,
          samples: Kk,
          creationFlags: Qk,
          noColorAttachment: sk,
          useSRGBBuffer: Vk,
          colorAttachment: yk,
          label: this.name
        }, this.samplingMode === ik.g.NEAREST_SAMPLINGMODE && (this.wrapU = ik.g.CLAMP_ADDRESSMODE, this.wrapV = ik.g.CLAMP_ADDRESSMODE), Pk || (Zk ? (this._renderTarget = Ik.Oe().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = ik.g.INVCUBIC_MODE, this._textureMatrix = Tk.c.Identity()) : this._renderTarget = Ik.Oe().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== Kk && (this.samples = Kk)))
      }
      createDepthStencilTexture() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          ik = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(kk, Fk, Ik, Xk, Tk, ik)
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
          const kk = this.mG();
          if (!kk) return;
          this._postProcessManager = new yk.e(kk), this._postProcesses = new Array
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
        const Ik = this.mG();
        Ik && (this._processSizeParameter(kk), this._renderTarget = Fk ? Ik.Oe().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : Ik.Oe().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(kk, Fk)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => Ik(41826))).then((kk => this._dumpTools = kk))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const kk = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), kk
      }
      _render() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Ik = this.mG();
        if (!Ik) return;
        void 0 !== this.useCameraPostProcesses && (kk = this.useCameraPostProcesses);
        const Xk = Ik.Oe();
        if (Xk._debugPushGroup && Xk._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let Tk = 0; Tk < 6; Tk++) this._renderToTarget(Tk, kk, Fk), Ik.incrementRenderId(), Ik.resetCachedMaterial();
          else this._renderToTarget(0, kk, Fk);
        else
          for (let Tk = 0; Tk < this.getRenderLayers(); Tk++) this._renderToTarget(0, kk, Fk, Tk), Ik.incrementRenderId(), Ik.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), Xk._debugPopGroup && Xk._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(kk, Fk) {
        const Ik = kk * Fk,
          Xk = (0, lk.o)(Ik + 16384 / (128 + Ik));
        return Math.min((0, lk.d)(kk), Xk)
      }
      _bindFrameBuffer() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Ik = this.mG();
        if (!Ik) return;
        const Xk = Ik.Oe();
        this._renderTarget && Xk.bindFramebuffer(this._renderTarget, this.isCube ? kk : void 0, void 0, void 0, this.ignoreCameraViewport, 0, Fk)
      }
      _unbindFrameBuffer(kk, Fk) {
        this._renderTarget && kk.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(Fk)
        }))
      }
      _prepareFrame(kk, Fk, Ik, Xk) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(Fk, Ik) : Xk && kk.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(Fk, Ik)
      }
      _renderToTarget(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Tk = this.mG();
        if (!Tk) return;
        const ik = Tk.Oe();
        this._currentFaceIndex = kk, this._currentLayer = Xk, this._currentUseCameraPostProcess = Fk, this._currentDumpForDebug = Ik, this._prepareFrame(Tk, kk, Xk, Fk), this._objectRenderer.render(kk + Xk, !0), this._unbindFrameBuffer(ik, kk), this._texture && this.isCube && 5 === kk && ik.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(kk, Fk, Ik, Xk)
      }
      setRenderingAutoClearDepthStencil(kk, Fk) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(kk, Fk)
      }
      clone() {
        const kk = this.getSize(),
          Fk = new Jk(this.name, kk, this.mG(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
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
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.mG().Oe().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const kk = this.mG();
        if (!kk) return;
        let Fk = kk.customRenderTargets.indexOf(this);
        Fk >= 0 && kk.customRenderTargets.splice(Fk, 1);
        for (const Ik of kk.cameras) Fk = Ik.customRenderTargets.indexOf(this), Fk >= 0 && Ik.customRenderTargets.splice(Fk, 1);
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
    Jk.REFRESHRATE_RENDER_ONCE = wk.REFRESHRATE_RENDER_ONCE, Jk.REFRESHRATE_RENDER_ONEVERYFRAME = wk.REFRESHRATE_RENDER_ONEVERYFRAME, Jk.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = wk.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(Jk.prototype, "noPrePassRenderer") || Object.defineProperty(Jk.prototype, "noPrePassRenderer", (0, Hk.g)("RenderTargetTexture", "noPrePassRenderer"))
  },
  41797: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => qk,
      e: () => Lk
    });
    var Xk = Ik(40141),
      Tk = Ik(38099),
      ik = Ik(37187),
      yk = Ik(39830),
      lk = Ik(40324);
    const ak = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class qk {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ak;
        this._fullscreenViewport = new Tk.c(0, 0, 1, 1);
        const Ik = Fk.positions ?? ak.positions,
          ik = Fk.indices ?? ak.indices;
        this.engine = kk, this._vertexBuffers = {
          [Xk.l.PositionKind]: new Xk.l(kk, Ik, Xk.l.PositionKind, !1, !1, 2)
        }, this._indexBuffer = kk.createIndexBuffer(ik), this._indexBufferLength = ik.length, this._onContextRestoredObserver = kk.Ee.add((() => {
          this._indexBuffer = kk.createIndexBuffer(ik);
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
          Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = Fk, this.engine.stencilState.stencilTest = Ik, this.engine.enableEffect(kk.drawWrapper), this.bindBuffers(kk.effect), kk.onApplyObservable.notifyObservers({})
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
        const Ik = null === Fk ? null : this._isRenderTargetTexture(Fk) ? Fk.renderTarget : Fk;
        Ik && this.engine.bindFramebuffer(Ik), this.applyEffectWrapper(kk), this.draw(), Ik && this.engine.unBindFramebuffer(Ik), this.restoreStates()
      }
      dispose() {
        const kk = this._vertexBuffers[Xk.l.PositionKind];
        kk && (kk.dispose(), delete this._vertexBuffers[Xk.l.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.Ee.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class Lk {
      static RegisterShaderCodeProcessing(kk, Fk) {
        Fk ? Lk._CustomShaderCodeProcessing[kk ?? ""] = Fk : delete Lk._CustomShaderCodeProcessing[kk ?? ""]
      }
      static _GetShaderCodeProcessing(kk) {
        return Lk._CustomShaderCodeProcessing[kk] ?? Lk._CustomShaderCodeProcessing[""]
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
        this.alphaMode = 0, this.onEffectCreatedObservable = new ik.e(void 0, !0), this.onApplyObservable = new ik.e, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
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
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.Ee.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new lk.e(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const Fk = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, Fk, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Xk = arguments.length > 2 ? arguments[2] : void 0,
          Tk = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, Tk && this._importPromises.push(...Tk);
        const ik = this.options.engine.isWebGPU && !Lk.ForceGLSL;
        this._gatherImports(ik, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(ik && this._webGPUReady ? Ik.e(364).then((() => Ik(61395))) : Ik.e(353).then((() => Ik(61285)))), void 0 !== Xk && Xk(ik, this._importPromises), ik && this._webGPUReady && (this.options.shaderLanguage = 1), kk || this.updateEffect(Fk)
      }
      updateEffect() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Xk = arguments.length > 3 ? arguments[3] : void 0,
          Tk = arguments.length > 4 ? arguments[4] : void 0,
          ik = arguments.length > 5 ? arguments[5] : void 0,
          lk = arguments.length > 6 ? arguments[6] : void 0,
          ak = arguments.length > 7 ? arguments[7] : void 0;
        const qk = Lk._GetShaderCodeProcessing(this.name);
        if (qk?.defineCustomBindings) {
          const Xk = Fk?.slice() ?? [];
          Xk.push(...this.options.uniforms);
          const Tk = Ik?.slice() ?? [];
          Tk.push(...this.options.samplers), kk = qk.defineCustomBindings(this.name, kk, Xk, Tk), Fk = Xk, Ik = Tk
        }
        this.options.defines = kk || "";
        const tk = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let Zk;
        Zk = this.options.extraInitializationsAsync ? async () => {
          await (tk?.()), await this.options.extraInitializationsAsync()
        }: tk, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: lk ?? this._shaderPath.vertex,
          fragment: ak ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: Fk || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: Ik || this.options.samplers,
          defines: null !== kk ? kk : "",
          fallbacks: null,
          onCompiled: Tk ?? this.options.onCompiled,
          onError: ik ?? null,
          indexParameters: Xk || this.options.indexParameters,
          processCodeAfterIncludes: qk?.processCodeAfterIncludes ? (kk, Fk) => qk.processCodeAfterIncludes(this.name, kk, Fk) : null,
          processFinalCode: qk?.processFinalCode ? (kk, Fk) => qk.processFinalCode(this.name, kk, Fk) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: Zk
        }, this.options.engine) : this._drawWrapper.effect = new yk.d(this._shaderPath, this.options.attributeNames, Fk || this.options.uniforms, Ik || this.options.samplerNames, this.options.engine, kk, void 0, Tk || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, Zk), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !kk && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), Lk._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.Oe().Ee.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    Lk.ForceGLSL = !1, Lk._CustomShaderCodeProcessing = {}
  },
  41826: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      Dispose: () => xk,
      DumpData: () => Jk,
      DumpDataAsync: () => Hk,
      DumpFramebuffer: () => wk,
      DumpTools: () => Pk,
      EncodeImageAsync: () => ek,
      RegisterDumpTools: () => Qk
    });
    var Xk = Ik(40003),
      Tk = Ik(41797),
      ik = Ik(40097),
      yk = Ik(37189),
      lk = Ik(37178),
      ak = Ik(38674),
      qk = Ik(40048),
      Lk = Ik(40011);
    let tk = null;
    async function Zk() {
      return tk || (tk = async function() {
        const kk = lk.e.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        kk instanceof OffscreenCanvas && ak.e.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: Fk
        } = await Promise.resolve().then((() => Ik(39825)));
        if (!Fk.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const Xk = new Fk(kk, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        lk.e.Instances.pop(), lk.e.OnEnginesDisposedObservable.add((kk => {
          Xk && kk !== Xk && !Xk.Hs && 0 === lk.e.Instances.length && xk()
        })), Xk.getCaps().parallelShaderCompile = void 0;
        const ik = new Tk.b(Xk),
          {
            passPixelShader: yk
          } = await Ik.e(372).then((() => Ik(61445))),
          qk = new Tk.e({
            engine: Xk,
            name: yk.name,
            fragmentShader: yk.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: kk,
          dumpEngine: {
            engine: Xk,
            renderer: ik,
            wrapper: qk
          }
        }
      }()), await tk
    }
    let jk = (() => {
      var kk;
      let Fk, Ik = [];
      return kk = class {
        static async EncodeImageAsync(kk, Fk, Ik, Xk, Tk, yk) {
          const lk = await Zk(),
            ak = lk.dumpEngine;
          ak.engine.setSize(Fk, Ik, !0);
          const qk = ak.engine.createRawTexture(kk, Fk, Ik, 5, !1, !Tk, 1);
          return ak.renderer.setViewport(), ak.renderer.applyEffectWrapper(ak.wrapper), ak.wrapper.effect._bindTexture("textureSampler", qk), ak.renderer.draw(), qk.dispose(), await new Promise(((kk, Fk) => {
            ik.h.ToBlob(lk.canvas, (Ik => {
              Ik ? kk(Ik) : Fk(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), Xk, yk)
          }))
        }
      }, (() => {
        const Tk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Fk = [Lk.h], (0, Xk.j)(kk, null, Fk, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: kk => "EncodeImageAsync" in kk,
            get: kk => kk.EncodeImageAsync
          },
          metadata: Tk
        }, null, Ik), Tk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Tk
        }), (0, Xk.n)(kk, Ik)
      })(), kk
    })();
    const ek = jk.EncodeImageAsync;
    async function wk(kk, Fk, Ik, Xk) {
      let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        ik = arguments.length > 5 ? arguments[5] : void 0,
        yk = arguments.length > 6 ? arguments[6] : void 0;
      const lk = await Ik.readPixels(0, 0, kk, Fk);
      Jk(kk, Fk, new Uint8Array(lk.buffer), Xk, Tk, ik, !0, void 0, yk)
    }
    async function Hk(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Tk = arguments.length > 4 ? arguments[4] : void 0,
        lk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Lk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        tk = arguments.length > 7 ? arguments[7] : void 0;
      if (Ik instanceof Float32Array) {
        const kk = new Uint8Array(Ik.length);
        let Fk = Ik.length;
        for (; Fk--;) {
          const Xk = Ik[Fk];
          kk[Fk] = Math.round(255 * (0, yk.Clamp)(Xk))
        }
        Ik = kk
      }
      const Zk = await jk.EncodeImageAsync(Ik, kk, Fk, Xk, lk, tk);
      void 0 !== Tk && ik.h.DownloadBlob(Zk, Tk), Zk.type !== Xk && ak.e.Warn(`DumpData: The requested mimeType '${Xk}' is not supported. The result has mimeType '${Zk.type}' instead.`);
      const ek = await Zk.arrayBuffer();
      return Lk ? ek : `data:${Xk};base64,${(0,qk.i)(ek)}`
    }

    function Jk(kk, Fk, Ik, Xk) {
      let Tk = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== Tk || Xk || (Tk = ""), Hk(kk, Fk, Ik, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", Tk, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((kk => {
        Xk && Xk(kk)
      }))
    }

    function xk() {
      tk && (tk?.then((kk => {
        kk.canvas instanceof HTMLCanvasElement && kk.canvas.remove(), kk.dumpEngine && (kk.dumpEngine.engine.dispose(), kk.dumpEngine.renderer.dispose(), kk.dumpEngine.wrapper.dispose())
      })), tk = null)
    }
    const Pk = {
      DumpData: Jk,
      DumpDataAsync: Hk,
      DumpFramebuffer: wk,
      Dispose: xk
    };
    let Kk = !1;

    function Qk() {
      if (Kk) return;
      Kk = !0;
      ik.h.DumpData = Jk, ik.h.DumpDataAsync = Hk, ik.h.DumpFramebuffer = wk
    }
  },
  41809: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => jk,
      f: () => ek,
      j: () => wk
    });
    var Xk = Ik(40489),
      Tk = Ik(41815),
      ik = Ik(40003),
      yk = Ik(41795),
      lk = Ik(40021),
      ak = Ik(41822),
      qk = Ik(40011);
    class Lk extends yk.e {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(kk, Fk) {
        let Ik = arguments.length > 4 ? arguments[4] : void 0;
        const Xk = {
          size: "number" === typeof Fk ? Fk : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: Ik,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...Fk
        };
        super(kk, ak.g.FragmentUrl, {
          effectWrapper: "number" !== typeof Fk && Fk.effectWrapper ? void 0 : new ak.g(kk, Ik, Xk),
          ...Xk
        })
      }
      static _Parse(kk, Fk, Ik, Xk) {
        return lk.b.Parse((() => new Lk(kk.name, kk.options, Fk, kk.renderTargetSamplingMode, kk._engine, kk.reusable)), kk, Ik, Xk)
      }
    }(() => {
      var kk;
      let Fk, Ik = yk.e,
        Xk = [];
      kk = class extends Ik {
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
          let Ik = arguments.length > 4 ? arguments[4] : void 0;
          const Tk = {
            size: "number" === typeof Fk ? Fk : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: Ik,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...Fk
          };
          super(kk, ak.g.FragmentUrl, {
            effectWrapper: "number" !== typeof Fk && Fk.effectWrapper ? void 0 : new ak.d(kk, Ik, Tk),
            ...Tk
          }), (0, ik.n)(this, Xk)
        }
        static _Parse(Fk, Ik, Xk, Tk) {
          return lk.b.Parse((() => new kk(Fk.name, Fk.options, Ik, Fk.renderTargetSamplingMode, Fk._engine, Fk.reusable)), Fk, Xk, Tk)
        }
      }, (() => {
        const Tk = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ik[Symbol.metadata] ?? null) : void 0;
        Fk = [(0, qk.J)()], (0, ik.j)(kk, null, Fk, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: kk => "face" in kk,
            get: kk => kk.face
          },
          metadata: Tk
        }, null, Xk), Tk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Tk
        })
      })()
    })();
    var tk = Ik(37189),
      Zk = Ik(40064);

    function jk(kk, Fk, Ik, Xk, Tk, ik, lk, ak) {
      const qk = Fk.Oe();
      return Fk.isReady = !1, Tk = Tk ?? Fk.samplingMode, Xk = Xk ?? Fk.type, ik = ik ?? Fk.format, lk = lk ?? Fk.width, ak = ak ?? Fk.height, -1 === Xk && (Xk = 0), new Promise((Lk => {
        const tk = new yk.e("postprocess", kk, null, null, 1, null, Tk, qk, !1, void 0, Xk, void 0, null, !1, ik);
        tk.externalTextureSamplerBinding = !0;
        const Zk = qk.createRenderTargetTexture({
          width: lk,
          height: ak
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: Tk,
          type: Xk,
          format: ik
        });
        tk.onEffectCreatedObservable.addOnce((kk => {
          kk.executeWhenCompiled((() => {
            tk.onApply = kk => {
              kk._bindTexture("textureSampler", Fk), kk.setFloat2("scale", 1, 1)
            }, Ik.postProcessManager.directRender([tk], Zk, !0), qk.restoreDefaultFramebuffer(), qk._releaseTexture(Fk), tk && tk.dispose(), Zk._swapAndDie(Fk), Fk.type = Xk, Fk.format = 5, Fk.isReady = !0, Lk(Fk)
          }))
        }))
      }))
    }
    async function ek(kk, Fk, ik) {
      let lk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        ak = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        qk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Lk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(kk) {
        if (kk.isReady()) return;
        if (kk.loadingError) throw new Error(kk.errorObject?.message || `Texture ${kk.name} errored while loading.`);
        const Fk = kk.onLoadObservable;
        if (Fk) return await new Promise((kk => Fk.addOnce((() => kk()))));
        const Ik = kk._texture?.onLoadedObservable;
        if (Ik) return await new Promise((kk => Ik.addOnce((() => kk()))));
        throw new Error(`Cannot determine readiness of texture ${kk.name}.`)
      }(kk);
      const Zk = kk.getInternalTexture(),
        jk = kk.is3D || !!Zk?.is3D,
        {
          width: ek,
          height: wk
        } = kk.getSize(),
        Hk = Fk ?? ek,
        Jk = ik ?? wk;
      if (qk || jk || function(kk) {
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
        }(kk.textureFormat) || Hk !== ek || Jk !== wk) {
        if (kk.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${qk?"RTT":"compression"} is not supported.`);
        return await async function(kk, Fk, ik, lk, ak) {
          let qk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const Lk = kk.mG(),
            tk = Lk.Oe(),
            Zk = kk.getInternalTexture(),
            jk = kk.is3D || !!Zk?.is3D;
          let ek;
          if (tk.isWebGPU ? jk ? await Ik.e(368).then((() => Ik(61423))) : kk.isCube ? await Ik.e(369).then((() => Ik(61427))) : await Ik.e(370).then((() => Ik(61435))) : jk ? await Ik.e(365).then((() => Ik(61408))) : kk.isCube ? await Ik.e(366).then((() => Ik(61410))) : await Ik.e(367).then((() => Ik(61418))), jk) ek = new yk.e("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: Xk.g.NEAREST_NEAREST_MIPNEAREST,
            engine: tk,
            shaderLanguage: tk.isWebGPU ? 1 : 0
          });
          else if (kk.isCube) {
            const kk = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            ek = new yk.e("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: Xk.g.NEAREST_NEAREST_MIPNEAREST,
              engine: tk,
              defines: kk[lk],
              shaderLanguage: tk.isWebGPU ? 1 : 0
            })
          } else ek = new yk.e("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: Xk.g.NEAREST_NEAREST_MIPNEAREST,
            engine: tk,
            shaderLanguage: tk.isWebGPU ? 1 : 0
          });
          await new Promise((kk => {
            ek.onEffectCreatedObservable.addOnce((Fk => {
              Fk.executeWhenCompiled((() => {
                kk(0)
              }))
            }))
          }));
          const wk = new Tk.c("temp", {
            width: Fk,
            height: ik
          }, Lk, !1);
          ek.onApply = function(Fk) {
            Fk.setTexture("textureSampler", kk), Fk.setFloat("lod", ak), Fk.setInt("gamma", kk.gammaSpace ? 1 : 0), jk && Fk.setFloat("slice", qk)
          };
          try {
            if (wk.renderTarget && Zk) {
              const Ik = Zk.samplingMode;
              0 !== ak ? kk.updateSamplingMode(Xk.g.NEAREST_NEAREST_MIPNEAREST) : kk.updateSamplingMode(Xk.g.NEAREST_NEAREST), Lk.postProcessManager.directRender([ek], wk.renderTarget, !0), kk.updateSamplingMode(Ik);
              const Tk = await tk.readPixels(0, 0, Fk, ik),
                yk = new Uint8Array(Tk.buffer, Tk.byteOffset, Tk.byteLength);
              return tk.unBindFramebuffer(wk.renderTarget), yk
            }
            throw Error("Render to texture failed.")
          } finally {
            wk.dispose(), ek.dispose()
          }
        }(kk, Hk, Jk, lk, ak, Lk)
      }
      let xk = await kk.readPixels(lk, ak);
      if (!xk) throw new Error(`Failed to read pixels from texture ${kk.name}.`);
      if (xk instanceof Float32Array) {
        const kk = new Uint8Array(xk.length);
        let Fk = xk.length;
        for (; Fk--;) {
          const Ik = xk[Fk];
          kk[Fk] = Math.round(255 * (0, tk.Clamp)(Ik))
        }
        xk = kk
      }
      const Pk = Hk * Jk,
        Kk = 4 * Pk;
      if (xk.length !== Kk) {
        const kk = 0 === Pk ? 0 : xk.length / Pk;
        if (1 === kk || 2 === kk || 3 === kk) {
          const Fk = new Uint8Array(Kk);
          for (let Ik = 0, Xk = 0, Tk = 0; Ik < Pk; Ik++, Tk += 4) {
            const Ik = xk[Xk++];
            if (1 === kk) {
              Fk[Tk] = Ik, Fk[Tk + 1] = Ik, Fk[Tk + 2] = Ik, Fk[Tk + 3] = 255;
              continue
            }
            const ik = xk[Xk++];
            2 !== kk ? (Fk[Tk] = Ik, Fk[Tk + 1] = ik, Fk[Tk + 2] = xk[Xk++], Fk[Tk + 3] = 255) : (Fk[Tk] = Ik, Fk[Tk + 1] = ik, Fk[Tk + 2] = 0, Fk[Tk + 3] = 255)
          }
          return Fk
        }
      }
      return xk
    }
    const wk = {
      CreateResizedCopy: function(kk, Fk, Ik) {
        let ik = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const yk = kk.mG(),
          lk = yk.Oe(),
          ak = new Tk.c("resized" + kk.name, {
            width: Fk,
            height: Ik
          }, yk, !kk.noMipmap, !0, kk._texture.type, !1, kk.samplingMode, !1);
        ak.wrapU = kk.wrapU, ak.wrapV = kk.wrapV, ak.uOffset = kk.uOffset, ak.vOffset = kk.vOffset, ak.uScale = kk.uScale, ak.vScale = kk.vScale, ak.uAng = kk.uAng, ak.vAng = kk.vAng, ak.wAng = kk.wAng, ak.coordinatesIndex = kk.coordinatesIndex, ak.level = kk.level, ak.anisotropicFilteringLevel = kk.anisotropicFilteringLevel, ak._texture.isReady = !1, kk.wrapU = Xk.g.CLAMP_ADDRESSMODE, kk.wrapV = Xk.g.CLAMP_ADDRESSMODE;
        const qk = new Lk("pass", 1, null, ik ? Xk.g.BILINEAR_SAMPLINGMODE : Xk.g.NEAREST_SAMPLINGMODE, lk, !1, 0);
        return qk.externalTextureSamplerBinding = !0, qk.onEffectCreatedObservable.addOnce((Fk => {
          Fk.executeWhenCompiled((() => {
            qk.onApply = function(Fk) {
              Fk.setTexture("textureSampler", kk)
            };
            const Fk = ak.renderTarget;
            Fk && (yk.postProcessManager.directRender([qk], Fk), lk.unBindFramebuffer(Fk), ak.disposeFramebufferObjects(), qk.dispose(), ak.getInternalTexture().isReady = !0)
          }))
        })), ak
      },
      ApplyPostProcess: jk,
      ToHalfFloat: Zk.i,
      FromHalfFloat: Zk.c,
      GetTextureDataAsync: ek
    }
  },
  41795: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => ek
    });
    var Xk = Ik(40003),
      Tk = Ik(40107),
      ik = Ik(37187),
      yk = Ik(37153),
      lk = Ik(39830),
      ak = Ik(40011),
      qk = Ik(40021),
      Lk = Ik(37201),
      tk = Ik(39885),
      Zk = Ik(39923),
      jk = Ik(41797);
    let ek = (() => {
        var kk;
        let Fk, lk, tk, ek, wk, Jk, xk, Pk, Kk, Qk, sk, Vk, zk, Sk, vk, Ek, Ok = [],
          nk = [],
          Gk = [],
          pk = [],
          uk = [],
          bk = [],
          Rk = [],
          Uk = [],
          Ck = [],
          Nk = [],
          ck = [],
          Wk = [],
          fk = [],
          Bk = [],
          dk = [],
          Yk = [],
          Ak = [],
          gk = [],
          mk = [],
          hk = [],
          rk = [],
          Dk = [],
          Mk = [],
          kF = [],
          FF = [],
          IF = [],
          XF = [],
          TF = [],
          iF = [];
        return kk = class {
          static get ForceGLSL() {
            return jk.e.ForceGLSL
          }
          static set ForceGLSL(kk) {
            jk.e.ForceGLSL = kk
          }
          static RegisterShaderCodeProcessing(kk, Fk) {
            jk.e.RegisterShaderCodeProcessing(kk, Fk)
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
            return this.zD
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.t5(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(Fk, Ik, lk, ak, qk, Lk) {
            let tk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              Zk = arguments.length > 7 ? arguments[7] : void 0,
              ek = arguments.length > 8 ? arguments[8] : void 0,
              wk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              Jk = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              xk = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              Pk = arguments.length > 12 ? arguments[12] : void 0,
              Kk = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              Qk = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              sk = arguments.length > 15 ? arguments[15] : void 0,
              Vk = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, Xk.n)(this, Ok), null), this.uniqueId = (0, Xk.n)(this, nk, void 0), this.width = ((0, Xk.n)(this, Gk), (0, Xk.n)(this, pk, -1)), this.height = ((0, Xk.n)(this, uk), (0, Xk.n)(this, bk, -1)), this.nodeMaterialSource = ((0, Xk.n)(this, Rk), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, Xk.n)(this, Uk, void 0), this.clearColor = ((0, Xk.n)(this, Ck), (0, Xk.n)(this, Nk, void 0)), this.autoClear = ((0, Xk.n)(this, ck), (0, Xk.n)(this, Wk, !0)), this.forceAutoClearInAlphaMode = ((0, Xk.n)(this, fk), (0, Xk.n)(this, Bk, !1)), this.alphaConstants = ((0, Xk.n)(this, dk), (0, Xk.n)(this, Yk, void 0)), this.animations = ((0, Xk.n)(this, Ak), []), this.enablePixelPerfectMode = (0, Xk.n)(this, gk, !1), this.forceFullscreenViewport = ((0, Xk.n)(this, mk), (0, Xk.n)(this, hk, !0)), this.inspectableCustomProperties = (0, Xk.n)(this, rk), this.scaleMode = (0, Xk.n)(this, Dk, 1), this.alwaysForcePOT = ((0, Xk.n)(this, Mk), (0, Xk.n)(this, kF, !1)), this._samples = ((0, Xk.n)(this, FF), (0, Xk.n)(this, IF, 1)), this.adaptScaleToCurrentViewport = ((0, Xk.n)(this, XF), (0, Xk.n)(this, TF, !1)), this.doNotSerialize = ((0, Xk.n)(this, iF), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new Tk.f(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new yk.p(1, 1), this._texelSize = yk.p.Zero(), this.onActivateObservable = new ik.e, this.onSizeChangedObservable = new ik.e, this.onApplyObservable = new ik.e, this.onBeforeRenderObservable = new ik.e, this.onAfterRenderObservable = new ik.e, this.hG = new ik.e, Hk();
            let zk, Sk = 1,
              vk = null;
            if (lk && !Array.isArray(lk)) {
              const kk = lk;
              lk = kk.uniforms ?? null, ak = kk.samplers ?? null, Sk = kk.size ?? 1, Lk = kk.camera ?? null, tk = kk.samplingMode ?? 1, Zk = kk.engine, ek = kk.reusable, wk = Array.isArray(kk.defines) ? kk.defines.join("\n") : kk.defines ?? null, Jk = kk.textureType ?? 0, xk = kk.vertexUrl ?? "postprocess", Pk = kk.indexParameters, Kk = kk.blockCompilation ?? !1, Qk = kk.textureFormat ?? 5, sk = kk.shaderLanguage ?? 0, vk = kk.uniformBuffers ?? null, Vk = kk.extraInitializations, zk = kk.effectWrapper
            } else qk && (Sk = "number" === typeof qk ? qk : {
              width: qk.width,
              height: qk.height
            });
            if (this._useExistingThinPostProcess = !!zk, this._effectWrapper = zk ?? new jk.e({
                name: Fk,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: Ik,
                engine: Zk || Lk?.mG().Oe(),
                uniforms: lk,
                samplers: ak,
                uniformBuffers: vk,
                defines: wk,
                vertexUrl: xk,
                indexParameters: Pk,
                blockCompilation: !0,
                shaderLanguage: sk,
                extraInitializations: void 0
              }), this.name = Fk, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != Lk ? (this.zD = Lk, this._scene = Lk.mG(), Lk.attachPostProcess(this), this._engine = this._scene.Oe(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : Zk && (this._engine = Zk, this._engine.postProcesses.push(this)), this._options = Sk, this.renderTargetSamplingMode = tk || 1, this._reusable = ek || !1, this._textureType = Jk, this._textureFormat = Qk, this._shaderLanguage = sk || 0, this._samplers = ak || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = Ik, this._vertexUrl = xk, this._parameters = lk || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = vk || [], this._indexParameters = Pk, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const Fk = [];
              this._gatherImports(this._engine.isWebGPU && !kk.ForceGLSL, Fk), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(Kk, wk, Vk, Fk)
            }
          }
          _gatherImports() {
            let kk = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? kk.push(Promise.all([Ik.e(364).then((() => Ik(61395)))])) : kk.push(Promise.all([Ik.e(353).then((() => Ik(61285)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          Oe() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(kk) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = kk, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new Tk.f(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Xk = arguments.length > 3 ? arguments[3] : void 0,
              Tk = arguments.length > 4 ? arguments[4] : void 0,
              ik = arguments.length > 5 ? arguments[5] : void 0,
              yk = arguments.length > 6 ? arguments[6] : void 0,
              lk = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(kk, Fk, Ik, Xk, Tk, ik, yk, lk), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(kk, Fk) {
            let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let Tk = 0; Tk < this._textureCache.length; Tk++)
              if (this._textureCache[Tk].texture.width === kk.width && this._textureCache[Tk].texture.height === kk.height && this._textureCache[Tk].postProcessChannel === Ik && this._textureCache[Tk].texture._generateDepthBuffer === Fk.generateDepthBuffer && this._textureCache[Tk].texture.samples === Fk.samples) return this._textureCache[Tk].texture;
            const Xk = this._engine.createRenderTargetTexture(kk, Fk);
            return this._textureCache.push({
              texture: Xk,
              postProcessChannel: Ik,
              lastUsedRenderId: -1
            }), Xk
          }
          _flushTextureCache() {
            const kk = this._renderId;
            for (let Fk = this._textureCache.length - 1; Fk >= 0; Fk--)
              if (kk - this._textureCache[Fk].lastUsedRenderId > 100) {
                let kk = !1;
                for (let Ik = 0; Ik < this._textures.length; Ik++)
                  if (this._textures.data[Ik] === this._textureCache[Fk].texture) {
                    kk = !0;
                    break
                  } kk || (this._textureCache[Fk].texture.dispose(), this._textureCache.splice(Fk, 1))
              }
          }
          resize(kk, Fk) {
            let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = kk, this.height = Fk;
            let ik = null;
            if (Ik)
              for (let ak = 0; ak < Ik._postProcesses.length; ak++)
                if (null !== Ik._postProcesses[ak]) {
                  ik = Ik._postProcesses[ak];
                  break
                } const yk = {
                width: this.width,
                height: this.height
              },
              lk = {
                generateMipMaps: Xk,
                generateDepthBuffer: Tk || ik === this,
                generateStencilBuffer: (Tk || ik === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(yk, lk, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(yk, lk, 1)), this._texelSize.t5(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let kk;
            if (this._shareOutputWithPostProcess) kk = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) kk = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let Fk;
              kk = this.inputTexture;
              for (let Ik = 0; Ik < this._textureCache.length; Ik++)
                if (this._textureCache[Ik].texture === kk) {
                  Fk = this._textureCache[Ik];
                  break
                } Fk && (Fk.lastUsedRenderId = this._renderId)
            }
            return kk
          }
          activate(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              Ik = arguments.length > 2 ? arguments[2] : void 0;
            const Xk = null === kk || void 0 !== kk.cameraRigMode ? kk || this.zD : null,
              Tk = Xk?.mG() ?? kk,
              ik = Tk.Oe(),
              yk = ik.getCaps().maxTextureSize,
              lk = (Fk ? Fk.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              ak = (Fk ? Fk.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let qk = this._options.width || lk,
              Lk = this._options.height || ak;
            const tk = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let jk = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const kk = ik.currentViewport;
                kk && (qk *= kk.width, Lk *= kk.height)
              }(tk || this.alwaysForcePOT) && (this._options.width || (qk = ik.needPOTTextures ? (0, Zk.g)(qk, yk, this.scaleMode) : qk), this._options.height || (Lk = ik.needPOTTextures ? (0, Zk.g)(Lk, yk, this.scaleMode) : Lk)), this.width === qk && this.height === Lk && (jk = this._getTarget()) || this.resize(qk, Lk, Xk, tk, Ik), this._textures.forEach((kk => {
                kk.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(kk, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return jk || (jk = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.t5(lk / qk, ak / Lk), this._engine.bindFramebuffer(jk, 0, lk, ak, this.forceFullscreenViewport)) : (this._scaleRatio.t5(1, 1), this._engine.bindFramebuffer(jk, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(Xk), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : Tk.clearColor, Tk._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), jk
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
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.Oe().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), kk = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", kk?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
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
            if (kk = kk || this.zD, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (Fk = this._parentContainer.postProcesses.indexOf(this), Fk > -1 && this._parentContainer.postProcesses.splice(Fk, 1), this._parentContainer = null), Fk = this._engine.postProcesses.indexOf(this), -1 !== Fk && this._engine.postProcesses.splice(Fk, 1), this.hG.notifyObservers(), kk) {
              if (kk.detachPostProcess(this), Fk = kk._postProcesses.indexOf(this), 0 === Fk && kk._postProcesses.length > 0) {
                const kk = this.zD._getFirstPostProcess();
                kk && kk.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const kk = qk.b.Serialize(this),
              Fk = this.getCamera() || this._scene && this._scene.activeCamera;
            return kk.customType = "BABYLON." + this.getClassName(), kk.cameraId = Fk ? Fk.id : null, kk.reusable = this._reusable, kk.textureType = this._textureType, kk.fragmentUrl = this._fragmentUrl, kk.parameters = this._parameters, kk.samplers = this._samplers, kk.uniformBuffers = this._uniformBuffers, kk.options = this._options, kk.defines = this._postProcessDefines, kk.textureFormat = this._textureFormat, kk.vertexUrl = this._vertexUrl, kk.indexParameters = this._indexParameters, kk
          }
          clone() {
            const Fk = this.serialize();
            Fk._engine = this._engine, Fk.cameraId = null;
            const Ik = kk.Parse(Fk, this._scene, "");
            return Ik ? (Ik.onActivateObservable = this.onActivateObservable.clone(), Ik.onSizeChangedObservable = this.onSizeChangedObservable.clone(), Ik.onApplyObservable = this.onApplyObservable.clone(), Ik.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), Ik.onAfterRenderObservable = this.onAfterRenderObservable.clone(), Ik._prePassEffectConfiguration = this._prePassEffectConfiguration, Ik) : null
          }
          static Parse(kk, Fk, Ik) {
            const Xk = (0, Lk.b)(kk.customType);
            if (!Xk || !Xk._Parse) return null;
            const Tk = Fk ? Fk.getCameraById(kk.cameraId) : null;
            return Xk._Parse(kk, Tk, Fk, Ik)
          }
          static _Parse(Fk, Ik, Xk, Tk) {
            return qk.b.Parse((() => new kk(Fk.name, Fk.fragmentUrl, Fk.parameters, Fk.samplers, Fk.options, Ik, Fk.renderTargetSamplingMode, Fk._engine, Fk.reusable, Fk.defines, Fk.textureType, Fk.vertexUrl, Fk.indexParameters, !1, Fk.textureFormat)), Fk, Xk, Tk)
          }
        }, (() => {
          const Ik = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Fk = [(0, ak.J)()], lk = [(0, ak.J)()], tk = [(0, ak.J)()], ek = [(0, ak.J)()], wk = [(0, ak.J)()], Jk = [(0, ak.r)()], xk = [(0, ak.J)()], Pk = [(0, ak.J)()], Kk = [(0, ak.J)()], Qk = [(0, ak.J)()], sk = [(0, ak.J)()], Vk = [(0, ak.J)()], zk = [(0, ak.J)()], Sk = [(0, ak.J)()], vk = [(0, ak.J)("samples")], Ek = [(0, ak.J)()], (0, Xk.j)(kk, null, lk, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: kk => "name" in kk,
              get: kk => kk.name
            },
            metadata: Ik
          }, null, Ok), (0, Xk.j)(kk, null, Kk, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: kk => "alphaMode" in kk,
              get: kk => kk.alphaMode
            },
            metadata: Ik
          }, null, Ok), (0, Xk.j)(null, null, Fk, {
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
            metadata: Ik
          }, nk, Gk), (0, Xk.j)(null, null, tk, {
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
            metadata: Ik
          }, pk, uk), (0, Xk.j)(null, null, ek, {
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
            metadata: Ik
          }, bk, Rk), (0, Xk.j)(null, null, wk, {
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
            metadata: Ik
          }, Uk, Ck), (0, Xk.j)(null, null, Jk, {
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
            metadata: Ik
          }, Nk, ck), (0, Xk.j)(null, null, xk, {
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
            metadata: Ik
          }, Wk, fk), (0, Xk.j)(null, null, Pk, {
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
            metadata: Ik
          }, Bk, dk), (0, Xk.j)(null, null, Qk, {
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
            metadata: Ik
          }, Yk, Ak), (0, Xk.j)(null, null, sk, {
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
            metadata: Ik
          }, gk, mk), (0, Xk.j)(null, null, Vk, {
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
            metadata: Ik
          }, hk, rk), (0, Xk.j)(null, null, zk, {
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
            metadata: Ik
          }, Dk, Mk), (0, Xk.j)(null, null, Sk, {
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
            metadata: Ik
          }, kF, FF), (0, Xk.j)(null, null, vk, {
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
            metadata: Ik
          }, IF, XF), (0, Xk.j)(null, null, Ek, {
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
            metadata: Ik
          }, TF, iF), Ik && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ik
          })
        })(), kk
      })(),
      wk = !1;

    function Hk() {
      wk || (wk = !0, tk.c.prototype.setTextureFromPostProcess = function(kk, Fk, Ik) {
        let Xk = null;
        Fk && (Fk._forcedOutputTexture ? Xk = Fk._forcedOutputTexture : Fk._textures.data[Fk._currentRenderTextureInd] && (Xk = Fk._textures.data[Fk._currentRenderTextureInd])), this._bindTexture(kk, Xk?.texture ?? null, Ik)
      }, tk.c.prototype.setTextureFromPostProcessOutput = function(kk, Fk, Ik) {
        this._bindTexture(kk, Fk?._outputTexture?.texture ?? null, Ik)
      }, lk.d.prototype.setTextureFromPostProcess = function(kk, Fk) {
        this._engine.setTextureFromPostProcess(this._samplers[kk], Fk, kk)
      }, lk.d.prototype.setTextureFromPostProcessOutput = function(kk, Fk) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[kk], Fk, kk)
      }, (0, Lk.f)("BABYLON.PostProcess", ek))
    }
  },
  41822: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => yk,
      g: () => ik
    });
    var Xk = Ik(41797),
      Tk = Ik(37178);
    class ik extends Xk.e {
      _gatherImports(kk, Fk) {
        kk ? (this._webGPUReady = !0, Fk.push(Promise.all([Ik.e(371).then((() => Ik(61438)))]))) : Fk.push(Promise.all([Ik.e(372).then((() => Ik(61445)))])), super._gatherImports(kk, Fk)
      }
      constructor(kk) {
        let Fk = arguments.length > 2 ? arguments[2] : void 0;
        const Ik = {
          name: kk,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Tk.e.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: ik.FragmentUrl,
          ...Fk
        };
        Ik.engine || (Ik.engine = Tk.e.LastCreatedEngine), super(Ik)
      }
    }
    ik.FragmentUrl = "pass";
    class yk extends Xk.e {
      _gatherImports(kk, Fk) {
        kk ? (this._webGPUReady = !0, Fk.push(Promise.all([Ik.e(373).then((() => Ik(61449)))]))) : Fk.push(Promise.all([Ik.e(374).then((() => Ik(61452)))])), super._gatherImports(kk, Fk)
      }
      constructor(kk) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: kk,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Tk.e.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: yk.FragmentUrl,
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
    yk.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);