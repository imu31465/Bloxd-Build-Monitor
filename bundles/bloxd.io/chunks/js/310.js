export const id = 310;
export const ids = [310];
export const modules = {
  41404: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => lk
    });
    var Dk = ik(36726),
      fk = ik(36698),
      Sk = ik(40053),
      bk = ik(39716),
      rk = ik(39501),
      Pk = ik(38272),
      mk = ik(39696),
      Mk = ik(39728),
      Kk = ik(36707),
      xk = ik(39458),
      nk = ik(39672),
      Uk = ik(39769);
    class Hk {
      get renderList() {
        return this._renderList
      }
      set renderList(kk) {
        this._renderList !== kk && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), kk && (this._unObserveRenderList = (0, Kk.h)(kk, this._renderListHasChanged)), this._renderList = kk)
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
              const ek = this._renderPassIds[kk];
              this._engine._renderPassNames[ek] = `${this._name}#${kk}`
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
      setMaterialForRendering(kk, ek) {
        let ik;
        ik = Array.isArray(kk) ? kk : [kk];
        for (let Dk = 0; Dk < ik.length; ++Dk)
          for (let kk = 0; kk < this.options.numPasses; ++kk) {
            let fk = ik[Dk];
            ik[Dk].JF && (fk = ik[Dk].aDk), fk.setMaterialForRenderPass(this._renderPassIds[kk], void 0 !== ek ? Array.isArray(ek) ? ek[kk] : ek : void 0)
          }
      }
      _freezeActiveMeshes(kk) {
        this._freezeActiveMeshesCancel = (0, xk.h)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, kk)
            for (let kk = 0; kk < this._activeMeshes.length; kk++) this._activeMeshes.data[kk]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((kk, ek) => {
          this._freezeActiveMeshesCancel = null, ek ? (Pk.b.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), kk && Pk.b.Error(kk)) : (Pk.b.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), kk && (Pk.b.Error(kk), kk.stack && Pk.b.Error(kk.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let kk = 0; kk < this._activeMeshes.length; kk++) this._activeMeshes.data[kk]._unFreeze();
        this._isFrozen = !1
      }
      constructor(kk, ek, ik) {
        this._unObserveRenderList = null, this._renderListHasChanged = (kk, ek) => {
          const ik = this._renderList ? this._renderList.length : 0;
          if (0 === ek && ik > 0 || 0 === ik)
            for (const Dk of this._scene.meshes) Dk._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new Dk.c, this.onAfterRenderObservable = new Dk.c, this.onBeforeRenderingManagerRenderObservable = new Dk.c, this.onAfterRenderingManagerRenderObservable = new Dk.c, this.onInitRenderingObservable = new Dk.c, this.onFinishRenderingObservable = new Dk.c, this.onFastPathRenderObservable = new Dk.c, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new nk.h(256), this._activeBoundingBoxes = new nk.h(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = kk, this._scene = ek, this._engine = this._scene.JU(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...ik
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new Mk.c(ek), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const kk of this._scene.lights) kk.getTypeID() === Uk.d.LIGHTTYPEID_CLUSTERED_CONTAINER && kk.isSupported && kk._updateBatches(this.activeCamera).render()
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
      _createSceneUBO(kk, ek) {
        const ik = this._scene.JU(),
          Dk = new mk.d(ik, void 0, ek, kk, void 0, !1);
        return Dk.addUniform("viewProjection", 16), ek && Dk.addUniform("viewProjectionR", 16), Dk.addUniform("view", 16), Dk.addUniform("projection", 16), Dk.addUniform("vEyePosition", 4), Dk.addUniform("inverseProjection", 16), Dk
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const kk = this._engine._currentRenderTarget,
          ek = !(!kk || !kk.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const kk = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${kk} for ${this.name}`, ek)), this._sceneUBOIsMultiview.push(ek)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== ek && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, ek), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = ek);
        const ik = this._sceneUBOs[this._currentSceneUBOIndex++];
        return ik.unbindEffect(), ik
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
      isReadyForRendering(kk, ek) {
        this.prepareRenderList(), this.initRender(kk, ek);
        const ik = this._checkReadiness();
        return this.finishRender(), ik
      }
      prepareRenderList() {
        const kk = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let ek = 0; ek < this._waitingRenderList.length; ek++) {
              const ik = this._waitingRenderList[ek],
                Dk = kk.getMeshById(ik);
              Dk && this.renderList.push(Dk)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const kk = this._scene.meshes;
          for (let ek = 0; ek < kk.length; ek++) {
            const ik = kk[ek];
            this.renderListPredicate(ik) && this.renderList.push(ik)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(kk, ek) {
        const ik = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), ik && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(ik.getViewMatrix(), ik.getProjectionMatrix(!0)), this._scene._activeCamera = ik, this._engine.setViewport(ik.rigParent ? ik.rigParent.viewport : ik.viewport, kk, ek)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const kk = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (kk.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), kk._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== kk.activeCamera && kk.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), kk.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ik = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[kk], this.onBeforeRenderObservable.notifyObservers(kk);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(kk);
        else {
          const ek = this._prepareRenderingManager(kk),
            ik = this._scene.getOutlineRenderer?.(),
            Dk = ik?.enabled;
          ik && (ik.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(kk), this._renderingManager.render(this.customRenderFunction, ek, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(kk), ik && (ik.enabled = Dk)
        }
        ek || this.onAfterRenderObservable.notifyObservers(kk), this._engine.currentRenderPassId = ik
      }
      _checkReadiness() {
        const kk = this._scene,
          ek = this._engine.currentRenderPassId;
        let ik = !0;
        kk.getViewMatrix() || kk.updateTransformMatrix();
        const Dk = this.options.numPasses;
        for (let fk = 0; fk < Dk && ik; fk++) {
          const ek = this.renderList ? this.renderList : kk.frameGraph ? kk.meshes : kk.getActiveMeshes().data,
            Sk = this.renderList || kk.frameGraph ? ek.length : kk.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[fk], this.onBeforeRenderObservable.notifyObservers(fk);
          let bk = null,
            rk = Sk;
          this.getCustomRenderList && (bk = this.getCustomRenderList(fk, ek, Sk), bk && (rk = bk.length)), bk || (bk = ek), this.options.doNotChangeAspectRatio || kk.updateTransformMatrix(!0);
          for (let kk = 0; kk < rk && ik; ++kk) {
            const ek = bk[kk];
            if (!ek.isEnabled() || ek.isBlocked || !ek.isVisible || !ek.TY) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(ek, this.refreshRate, !0)) {
                ik = !1;
                continue
              }
            } else if (!ek.isReady(!0)) {
              ik = !1;
              continue
            }
            let Dk = ek._edgesRenderer,
              fk = ek.hasThinInstances;
            if (ek.JF) {
              const kk = ek.aDk;
              kk.edgesShareWithInstances && kk._edgesRenderer?.isEnabled && (Dk = kk._edgesRenderer, fk = !0)
            } else ek.hDk && ek.edgesShareWithInstances && (fk = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && Dk?.isEnabled && (Dk.isReady(fk) || (ik = !1))
          }
          if (this.renderParticles && kk.particlesEnabled) {
            const ek = this.particleSystemList || kk.ZY;
            for (const kk of ek) kk.isReady() || (ik = !1)
          }
          if (this.renderSprites && kk.spritesEnabled) {
            const ek = this.spriteManagerList || kk.spriteManagers;
            if (ek)
              for (const Dk of ek) kk.activeCamera && 0 === (Dk.layerMask & kk.activeCamera.layerMask) || Dk.isReady && !Dk.isReady() && (ik = !1)
          }
          this.onAfterRenderObservable.notifyObservers(fk), Dk > 1 && (kk.incrementRenderId(), kk.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = ek, ik
      }
      _prepareRenderingManager() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ik = this._scene;
        let Dk, fk, Sk = null;
        const bk = this.renderList ? this.renderList : ik.frameGraph ? ik.meshes : ik.getActiveMeshes().data,
          rk = this.renderList || ik.frameGraph ? bk.length : ik.getActiveMeshes().length;
        if (this.getCustomRenderList && (Sk = this.getCustomRenderList(kk, bk, rk)), Sk) Dk = Sk.length, fk = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !ek && !this._engine.isWebGPU) return bk;
          this._defaultRenderListPrepared = !0, Sk = bk, Dk = rk, fk = !this.renderList || this.forceLayerMaskCheck
        }
        const Pk = ik.activeCamera,
          mk = this.cameraForLOD ?? Pk,
          Mk = ik.getBoundingBoxRenderer?.();
        if (ik._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && Mk) {
            Mk.reset();
            for (let kk = 0; kk < this._activeBoundingBoxes.length; kk++) {
              const ek = this._activeBoundingBoxes.data[kk];
              Mk.renderList.push(ek)
            }
          }
          return Sk
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), Mk && Mk.reset(), this.renderMeshes) {
          const kk = ik.getRenderId(),
            ek = ik.getFrameId();
          for (let bk = 0; bk < Dk; bk++) {
            const Dk = Sk[bk];
            if (Dk && !Dk.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(Dk, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!Dk.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let Sk, bk;
              if (mk) {
                const kk = Dk._internalAbstractMeshDataInfo._currentLOD.get(mk);
                kk && kk[1] === ek ? Sk = kk[0] : (Sk = ik.customLODSelector ? ik.customLODSelector(Dk, mk) : Dk.getLOD(mk), kk ? (kk[0] = Sk, kk[1] = ek) : Dk._internalAbstractMeshDataInfo._currentLOD.set(mk, [Sk, ek]))
              } else Sk = Dk;
              if (!Sk) continue;
              if (Sk !== Dk && 0 !== Sk.billboardMode && Sk.computeWorldMatrix(), Sk._preActivateForIntermediateRendering(kk), bk = !(!fk || !Pk) && 0 === (Dk.layerMask & Pk.layerMask), Dk.isEnabled() && Dk.isVisible && Dk.TY && !bk) {
                if (this._activeMeshes.push(Dk), Sk._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, Sk !== Dk && Sk._activate(kk, !0), this.enableBoundingBoxRendering && Mk && Mk._preActiveMesh(Dk), Dk._activate(kk, !0) && Dk.TY.length) {
                  Dk.JF ? Dk._internalAbstractMeshDataInfo._actAsRegularMesh && (Sk = Dk) : Sk._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, Sk._internalAbstractMeshDataInfo._isActiveIntermediate = !0, ik._prepareSkeleton(Sk);
                  for (let kk = 0; kk < Sk.TY.length; kk++) {
                    const ek = Sk.TY[kk];
                    this.enableBoundingBoxRendering && Mk && Mk._evaluateSubMesh(Dk, ek), this._renderingManager.dispatch(ek, Sk)
                  }
                }
                Dk._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && Mk && ek)
          for (let Kk = 0; Kk < Mk.renderList.length; Kk++) {
            const kk = Mk.renderList.data[Kk];
            this._activeBoundingBoxes.push(kk)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const kk = this.particleSystemList || ik.ZY;
          for (let ek = 0; ek < kk.length; ek++) {
            const ik = kk[ek],
              Dk = ik.emitter;
            ik.isStarted() && Dk && (!Dk.position || Dk.isEnabled()) && this._renderingManager.dispatchParticles(ik)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return Sk
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(kk, ek, ik, Dk)
      }
      setRenderingAutoClearDepthStencil(kk, ek) {
        let ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Dk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(kk, ek, ik, Dk), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const kk = new Hk(this.name, this._scene, this.options);
        return this.renderList && (kk.renderList = this.renderList.slice(0)), kk
      }
      dispose() {
        const kk = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          ek = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let ik = 0; ik < ek; ik++) {
          const ek = kk[ik];
          ek && void 0 !== ek.getMaterialForRenderPass(this.renderPassId) && ek.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const ik of this._sceneUBOs) ik.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === Hk.REFRESHRATE_RENDER_ONCE && (this.refreshRate = Hk.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    Hk.REFRESHRATE_RENDER_ONCE = 0, Hk.REFRESHRATE_RENDER_ONEVERYFRAME = 1, Hk.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var wk = ik(39447);
    class lk extends Sk.f {
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
      setMaterialForRendering(kk, ek) {
        this._objectRenderer.setMaterialForRendering(kk, ek)
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
        const ek = this.XF();
        ek && ek.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(kk, ek, ik) {
        let bk, rk, mk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Mk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Kk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          xk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          nk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Sk.f.TRILINEAR_SAMPLINGMODE,
          Uk = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          wk = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          lk = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          pk = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          yk = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          Yk = arguments.length > 13 ? arguments[13] : void 0,
          Lk = arguments.length > 14 ? arguments[14] : void 0,
          Ck = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          Ak = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          jk = !0,
          sk = !1;
        if ("object" === typeof mk) {
          const kk = mk;
          mk = !!kk.generateMipMaps, Mk = kk.doNotChangeAspectRatio ?? !0, Kk = kk.type ?? 0, xk = !!kk.isCube, nk = kk.samplingMode ?? Sk.f.TRILINEAR_SAMPLINGMODE, Uk = kk.generateDepthBuffer ?? !0, wk = !!kk.generateStencilBuffer, lk = !!kk.isMulti, pk = kk.format ?? 5, yk = !!kk.delayAllocation, Yk = kk.samples, Lk = kk.creationFlags, Ck = !!kk.noColorAttachment, Ak = !!kk.useSRGBBuffer, bk = kk.colorAttachment, jk = kk.gammaSpace ?? jk, rk = kk.existingObjectRenderer, sk = !!kk.enableClusteredLights
        }
        if (super(null, ik, !mk, void 0, nk, void 0, void 0, void 0, void 0, pk), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new Dk.c, this.onAfterUnbindObservable = new Dk.c, this.onClearObservable = new Dk.c, this.onResizeObservable = new Dk.c, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = fk.o.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(ik = this.XF())) return;
        const dk = this.XF().JU();
        this._gammaSpace = jk, this._coordinatesMode = Sk.f.PROJECTION_MODE, this.name = kk, this.isRenderTarget = !0, this._initialSizeParameter = ek, this._dontDisposeObjectRenderer = !!rk, this._processSizeParameter(ek), this._objectRenderer = rk ?? new Hk(kk, ik, {
          numPasses: xk ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: Mk,
          enableClusteredLights: sk
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const kk = this._scene;
          if (!this._disableEngineStages)
            for (const ek of kk._beforeRenderTargetClearStage) ek.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(dk) : this.skipInitialClear || dk.clear(this.clearColor ?? kk.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || kk.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const ek of kk._beforeRenderTargetDrawStage) ek.action(this, this._currentFaceIndex, this._currentLayer);
          dk._debugPushGroup && dk._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (dk._debugPopGroup && dk._debugPopGroup(), !this._disableEngineStages)
            for (const ek of this._scene._afterRenderTargetDrawStage) ek.action(this, this._currentFaceIndex, this._currentLayer);
          const kk = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const ek of this._scene._afterRenderTargetPostProcessStage) ek.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = kk), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), dk) : Pk.b.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(dk) : this.skipInitialClear || dk.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = dk.onResizeObservable.add((() => {})), this._generateMipMaps = !!mk, this._doNotChangeAspectRatio = Mk, lk || (this._renderTargetOptions = {
          generateMipMaps: mk,
          type: Kk,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: Uk,
          generateStencilBuffer: wk,
          samples: Yk,
          creationFlags: Lk,
          noColorAttachment: Ck,
          useSRGBBuffer: Ak,
          colorAttachment: bk,
          label: this.name
        }, this.samplingMode === Sk.f.NEAREST_SAMPLINGMODE && (this.wrapU = Sk.f.CLAMP_ADDRESSMODE, this.wrapV = Sk.f.CLAMP_ADDRESSMODE), yk || (xk ? (this._renderTarget = ik.JU().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = Sk.f.INVCUBIC_MODE, this._textureMatrix = fk.b.Identity()) : this._renderTarget = ik.JU().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== Yk && (this.samples = Yk)))
      }
      createDepthStencilTexture() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Sk = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(kk, ek, ik, Dk, fk, Sk)
      }
      _processSizeParameter(kk) {
        if (kk.ratio) {
          this._sizeRatio = kk.ratio;
          const ek = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(ek.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(ek.getRenderHeight(), this._sizeRatio)
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
          const kk = this.XF();
          if (!kk) return;
          this._postProcessManager = new bk.d(kk), this._postProcesses = new Array
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
        const ek = this._postProcesses.indexOf(kk); - 1 !== ek && (this._postProcesses.splice(ek, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
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
        const ek = this._size.depth;
        return ek || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(kk) {
        const ek = Math.max(1, this.getRenderSize() * kk);
        this.resize(ek)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(kk) {
        const ek = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const ik = this.XF();
        ik && (this._processSizeParameter(kk), this._renderTarget = ek ? ik.JU().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : ik.JU().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(kk, ek)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => ik(41413))).then((kk => this._dumpTools = kk))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const kk = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), kk
      }
      _render() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ik = this.XF();
        if (!ik) return;
        void 0 !== this.useCameraPostProcesses && (kk = this.useCameraPostProcesses);
        const Dk = ik.JU();
        if (Dk._debugPushGroup && Dk._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let fk = 0; fk < 6; fk++) this._renderToTarget(fk, kk, ek), ik.incrementRenderId(), ik.resetCachedMaterial();
          else this._renderToTarget(0, kk, ek);
        else
          for (let fk = 0; fk < this.getRenderLayers(); fk++) this._renderToTarget(0, kk, ek, fk), ik.incrementRenderId(), ik.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), Dk._debugPopGroup && Dk._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(kk, ek) {
        const ik = kk * ek,
          Dk = (0, rk.p)(ik + 16384 / (128 + ik));
        return Math.min((0, rk.d)(kk), Dk)
      }
      _bindFrameBuffer() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ik = this.XF();
        if (!ik) return;
        const Dk = ik.JU();
        this._renderTarget && Dk.bindFramebuffer(this._renderTarget, this.isCube ? kk : void 0, void 0, void 0, this.ignoreCameraViewport, 0, ek)
      }
      _unbindFrameBuffer(kk, ek) {
        this._renderTarget && kk.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(ek)
        }))
      }
      _prepareFrame(kk, ek, ik, Dk) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(ek, ik) : Dk && kk.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(ek, ik)
      }
      _renderToTarget(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const fk = this.XF();
        if (!fk) return;
        const Sk = fk.JU();
        this._currentFaceIndex = kk, this._currentLayer = Dk, this._currentUseCameraPostProcess = ek, this._currentDumpForDebug = ik, this._prepareFrame(fk, kk, Dk, ek), this._objectRenderer.render(kk + Dk, !0), this._unbindFrameBuffer(Sk, kk), this._texture && this.isCube && 5 === kk && Sk.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(kk, ek, ik, Dk)
      }
      setRenderingAutoClearDepthStencil(kk, ek) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(kk, ek)
      }
      clone() {
        const kk = this.getSize(),
          ek = new lk(this.name, kk, this.XF(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return ek.hasAlpha = this.hasAlpha, ek.level = this.level, ek.coordinatesMode = this.coordinatesMode, this.renderList && (ek.renderList = this.renderList.slice(0)), ek
      }
      serialize() {
        if (!this.name) return null;
        const kk = super.serialize();
        if (kk.renderTargetSize = this.getRenderSize(), kk.renderList = [], this.renderList)
          for (let ek = 0; ek < this.renderList.length; ek++) kk.renderList.push(this.renderList[ek].id);
        return kk
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.XF().JU().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const kk = this.XF();
        if (!kk) return;
        let ek = kk.customRenderTargets.indexOf(this);
        ek >= 0 && kk.customRenderTargets.splice(ek, 1);
        for (const ik of kk.cameras) ek = ik.customRenderTargets.indexOf(this), ek >= 0 && ik.customRenderTargets.splice(ek, 1);
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
    lk.REFRESHRATE_RENDER_ONCE = Hk.REFRESHRATE_RENDER_ONCE, lk.REFRESHRATE_RENDER_ONEVERYFRAME = Hk.REFRESHRATE_RENDER_ONEVERYFRAME, lk.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = Hk.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(lk.prototype, "noPrePassRenderer") || Object.defineProperty(lk.prototype, "noPrePassRenderer", (0, wk.h)("RenderTargetTexture", "noPrePassRenderer"))
  },
  41384: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => mk,
      f: () => Mk
    });
    var Dk = ik(39708),
      fk = ik(37679),
      Sk = ik(36726),
      bk = ik(39403),
      rk = ik(39906);
    const Pk = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class mk {
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Pk;
        this._fullscreenViewport = new fk.b(0, 0, 1, 1);
        const ik = ek.positions ?? Pk.positions,
          Sk = ek.indices ?? Pk.indices;
        this.engine = kk, this._vertexBuffers = {
          [Dk.e.PositionKind]: new Dk.e(kk, ik, Dk.e.PositionKind, !1, !1, 2)
        }, this._indexBuffer = kk.createIndexBuffer(Sk), this._indexBufferLength = Sk.length, this._onContextRestoredObserver = kk.RU.add((() => {
          this._indexBuffer = kk.createIndexBuffer(Sk);
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
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = ek, this.engine.stencilState.stencilTest = ik, this.engine.enableEffect(kk.drawWrapper), this.bindBuffers(kk.effect), kk.onApplyObservable.notifyObservers({})
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
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!kk.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const ik = null === ek ? null : this._isRenderTargetTexture(ek) ? ek.renderTarget : ek;
        ik && this.engine.bindFramebuffer(ik), this.applyEffectWrapper(kk), this.draw(), ik && this.engine.unBindFramebuffer(ik), this.restoreStates()
      }
      dispose() {
        const kk = this._vertexBuffers[Dk.e.PositionKind];
        kk && (kk.dispose(), delete this._vertexBuffers[Dk.e.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.RU.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class Mk {
      static RegisterShaderCodeProcessing(kk, ek) {
        ek ? Mk._CustomShaderCodeProcessing[kk ?? ""] = ek : delete Mk._CustomShaderCodeProcessing[kk ?? ""]
      }
      static _GetShaderCodeProcessing(kk) {
        return Mk._CustomShaderCodeProcessing[kk] ?? Mk._CustomShaderCodeProcessing[""]
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
        this.alphaMode = 0, this.onEffectCreatedObservable = new Sk.c(void 0, !0), this.onApplyObservable = new Sk.c, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
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
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.RU.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new rk.e(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const ek = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, ek, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Dk = arguments.length > 2 ? arguments[2] : void 0,
          fk = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, fk && this._importPromises.push(...fk);
        const Sk = this.options.engine.isWebGPU && !Mk.ForceGLSL;
        this._gatherImports(Sk, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(Sk && this._webGPUReady ? ik.e(363).then((() => ik(60802))) : ik.e(352).then((() => ik(60674)))), void 0 !== Dk && Dk(Sk, this._importPromises), Sk && this._webGPUReady && (this.options.shaderLanguage = 1), kk || this.updateEffect(ek)
      }
      updateEffect() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Dk = arguments.length > 3 ? arguments[3] : void 0,
          fk = arguments.length > 4 ? arguments[4] : void 0,
          Sk = arguments.length > 5 ? arguments[5] : void 0,
          rk = arguments.length > 6 ? arguments[6] : void 0,
          Pk = arguments.length > 7 ? arguments[7] : void 0;
        const mk = Mk._GetShaderCodeProcessing(this.name);
        if (mk?.defineCustomBindings) {
          const Dk = ek?.slice() ?? [];
          Dk.push(...this.options.uniforms);
          const fk = ik?.slice() ?? [];
          fk.push(...this.options.samplers), kk = mk.defineCustomBindings(this.name, kk, Dk, fk), ek = Dk, ik = fk
        }
        this.options.defines = kk || "";
        const Kk = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let xk;
        xk = this.options.extraInitializationsAsync ? async () => {
          await (Kk?.()), await this.options.extraInitializationsAsync()
        }: Kk, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: rk ?? this._shaderPath.vertex,
          fragment: Pk ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: ek || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: ik || this.options.samplers,
          defines: null !== kk ? kk : "",
          fallbacks: null,
          onCompiled: fk ?? this.options.onCompiled,
          onError: Sk ?? null,
          indexParameters: Dk || this.options.indexParameters,
          processCodeAfterIncludes: mk?.processCodeAfterIncludes ? (kk, ek) => mk.processCodeAfterIncludes(this.name, kk, ek) : null,
          processFinalCode: mk?.processFinalCode ? (kk, ek) => mk.processFinalCode(this.name, kk, ek) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: xk
        }, this.options.engine) : this._drawWrapper.effect = new bk.e(this._shaderPath, this.options.attributeNames, ek || this.options.uniforms, ik || this.options.samplerNames, this.options.engine, kk, void 0, fk || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, xk), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !kk && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), Mk._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.JU().RU.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    Mk.ForceGLSL = !1, Mk._CustomShaderCodeProcessing = {}
  },
  41413: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      Dispose: () => pk,
      DumpData: () => lk,
      DumpDataAsync: () => wk,
      DumpFramebuffer: () => Hk,
      DumpTools: () => yk,
      EncodeImageAsync: () => Uk,
      RegisterDumpTools: () => Lk
    });
    var Dk = ik(39566),
      fk = ik(41384),
      Sk = ik(39662),
      bk = ik(36729),
      rk = ik(36722),
      Pk = ik(38272),
      mk = ik(39620),
      Mk = ik(39570);
    let Kk = null;
    async function xk() {
      return Kk || (Kk = async function() {
        const kk = rk.e.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        kk instanceof OffscreenCanvas && Pk.b.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: ek
        } = await Promise.resolve().then((() => ik(39398)));
        if (!ek.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const Dk = new ek(kk, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        rk.e.Instances.pop(), rk.e.OnEnginesDisposedObservable.add((kk => {
          Dk && kk !== Dk && !Dk.RL && 0 === rk.e.Instances.length && pk()
        })), Dk.getCaps().parallelShaderCompile = void 0;
        const Sk = new fk.d(Dk),
          {
            passPixelShader: bk
          } = await ik.e(371).then((() => ik(60851))),
          mk = new fk.f({
            engine: Dk,
            name: bk.name,
            fragmentShader: bk.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: kk,
          dumpEngine: {
            engine: Dk,
            renderer: Sk,
            wrapper: mk
          }
        }
      }()), await Kk
    }
    let nk = (() => {
      var kk;
      let ek, ik = [];
      return kk = class {
        static async EncodeImageAsync(kk, ek, ik, Dk, fk, bk) {
          const rk = await xk(),
            Pk = rk.dumpEngine;
          Pk.engine.setSize(ek, ik, !0);
          const mk = Pk.engine.createRawTexture(kk, ek, ik, 5, !1, !fk, 1);
          return Pk.renderer.setViewport(), Pk.renderer.applyEffectWrapper(Pk.wrapper), Pk.wrapper.effect._bindTexture("textureSampler", mk), Pk.renderer.draw(), mk.dispose(), await new Promise(((kk, ek) => {
            Sk.i.ToBlob(rk.canvas, (ik => {
              ik ? kk(ik) : ek(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), Dk, bk)
          }))
        }
      }, (() => {
        const fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ek = [Mk.i], (0, Dk.d)(kk, null, ek, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: kk => "EncodeImageAsync" in kk,
            get: kk => kk.EncodeImageAsync
          },
          metadata: fk
        }, null, ik), fk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: fk
        }), (0, Dk.e)(kk, ik)
      })(), kk
    })();
    const Uk = nk.EncodeImageAsync;
    async function Hk(kk, ek, ik, Dk) {
      let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Sk = arguments.length > 5 ? arguments[5] : void 0,
        bk = arguments.length > 6 ? arguments[6] : void 0;
      const rk = await ik.readPixels(0, 0, kk, ek);
      lk(kk, ek, new Uint8Array(rk.buffer), Dk, fk, Sk, !0, void 0, bk)
    }
    async function wk(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        fk = arguments.length > 4 ? arguments[4] : void 0,
        rk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Mk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Kk = arguments.length > 7 ? arguments[7] : void 0;
      if (ik instanceof Float32Array) {
        const kk = new Uint8Array(ik.length);
        let ek = ik.length;
        for (; ek--;) {
          const Dk = ik[ek];
          kk[ek] = Math.round(255 * (0, bk.Clamp)(Dk))
        }
        ik = kk
      }
      const xk = await nk.EncodeImageAsync(ik, kk, ek, Dk, rk, Kk);
      void 0 !== fk && Sk.i.DownloadBlob(xk, fk), xk.type !== Dk && Pk.b.Warn(`DumpData: The requested mimeType '${Dk}' is not supported. The result has mimeType '${xk.type}' instead.`);
      const Uk = await xk.arrayBuffer();
      return Mk ? Uk : `data:${Dk};base64,${(0,mk.i)(Uk)}`
    }

    function lk(kk, ek, ik, Dk) {
      let fk = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== fk || Dk || (fk = ""), wk(kk, ek, ik, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", fk, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((kk => {
        Dk && Dk(kk)
      }))
    }

    function pk() {
      Kk && (Kk?.then((kk => {
        kk.canvas instanceof HTMLCanvasElement && kk.canvas.remove(), kk.dumpEngine && (kk.dumpEngine.engine.dispose(), kk.dumpEngine.renderer.dispose(), kk.dumpEngine.wrapper.dispose())
      })), Kk = null)
    }
    const yk = {
      DumpData: lk,
      DumpDataAsync: wk,
      DumpFramebuffer: Hk,
      Dispose: pk
    };
    let Yk = !1;

    function Lk() {
      if (Yk) return;
      Yk = !0;
      Sk.i.DumpData = lk, Sk.i.DumpDataAsync = wk, Sk.i.DumpFramebuffer = Hk
    }
  },
  41397: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => nk,
      e: () => Uk,
      g: () => Hk
    });
    var Dk = ik(40053),
      fk = ik(41404),
      Sk = ik(39566),
      bk = ik(41376),
      rk = ik(39585),
      Pk = ik(41407),
      mk = ik(39570);
    class Mk extends bk.c {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(kk, ek) {
        let ik = arguments.length > 4 ? arguments[4] : void 0;
        const Dk = {
          size: "number" === typeof ek ? ek : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: ik,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...ek
        };
        super(kk, Pk.h.FragmentUrl, {
          effectWrapper: "number" !== typeof ek && ek.effectWrapper ? void 0 : new Pk.h(kk, ik, Dk),
          ...Dk
        })
      }
      static _Parse(kk, ek, ik, Dk) {
        return rk.b.Parse((() => new Mk(kk.name, kk.options, ek, kk.renderTargetSamplingMode, kk._engine, kk.reusable)), kk, ik, Dk)
      }
    }(() => {
      var kk;
      let ek, ik = bk.c,
        Dk = [];
      kk = class extends ik {
        get face() {
          return this._effectWrapper.face
        }
        set face(kk) {
          this._effectWrapper.face = kk
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(kk, ek) {
          let ik = arguments.length > 4 ? arguments[4] : void 0;
          const fk = {
            size: "number" === typeof ek ? ek : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: ik,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...ek
          };
          super(kk, Pk.h.FragmentUrl, {
            effectWrapper: "number" !== typeof ek && ek.effectWrapper ? void 0 : new Pk.d(kk, ik, fk),
            ...fk
          }), (0, Sk.e)(this, Dk)
        }
        static _Parse(ek, ik, Dk, fk) {
          return rk.b.Parse((() => new kk(ek.name, ek.options, ik, ek.renderTargetSamplingMode, ek._engine, ek.reusable)), ek, Dk, fk)
        }
      }, (() => {
        const fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(ik[Symbol.metadata] ?? null) : void 0;
        ek = [(0, mk.I)()], (0, Sk.d)(kk, null, ek, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: kk => "face" in kk,
            get: kk => kk.face
          },
          metadata: fk
        }, null, Dk), fk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: fk
        })
      })()
    })();
    var Kk = ik(36729),
      xk = ik(39628);

    function nk(kk, ek, ik, Dk, fk, Sk, rk, Pk) {
      const mk = ek.JU();
      return ek.isReady = !1, fk = fk ?? ek.samplingMode, Dk = Dk ?? ek.type, Sk = Sk ?? ek.format, rk = rk ?? ek.width, Pk = Pk ?? ek.height, -1 === Dk && (Dk = 0), new Promise((Mk => {
        const Kk = new bk.c("postprocess", kk, null, null, 1, null, fk, mk, !1, void 0, Dk, void 0, null, !1, Sk);
        Kk.externalTextureSamplerBinding = !0;
        const xk = mk.createRenderTargetTexture({
          width: rk,
          height: Pk
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: fk,
          type: Dk,
          format: Sk
        });
        Kk.onEffectCreatedObservable.addOnce((kk => {
          kk.executeWhenCompiled((() => {
            Kk.onApply = kk => {
              kk._bindTexture("textureSampler", ek), kk.setFloat2("scale", 1, 1)
            }, ik.postProcessManager.directRender([Kk], xk, !0), mk.restoreDefaultFramebuffer(), mk._releaseTexture(ek), Kk && Kk.dispose(), xk._swapAndDie(ek), ek.type = Dk, ek.format = 5, ek.isReady = !0, Mk(ek)
          }))
        }))
      }))
    }
    async function Uk(kk, ek, Sk) {
      let rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Pk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        mk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Mk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(kk) {
        if (kk.isReady()) return;
        if (kk.loadingError) throw new Error(kk.errorObject?.message || `Texture ${kk.name} errored while loading.`);
        const ek = kk.onLoadObservable;
        if (ek) return await new Promise((kk => ek.addOnce((() => kk()))));
        const ik = kk._texture?.onLoadedObservable;
        if (ik) return await new Promise((kk => ik.addOnce((() => kk()))));
        throw new Error(`Cannot determine readiness of texture ${kk.name}.`)
      }(kk);
      const xk = kk.getInternalTexture(),
        nk = kk.is3D || !!xk?.is3D,
        {
          width: Uk,
          height: Hk
        } = kk.getSize(),
        wk = ek ?? Uk,
        lk = Sk ?? Hk;
      if (mk || nk || function(kk) {
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
        }(kk.textureFormat) || wk !== Uk || lk !== Hk) {
        if (kk.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${mk?"RTT":"compression"} is not supported.`);
        return await async function(kk, ek, Sk, rk, Pk) {
          let mk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const Mk = kk.XF(),
            Kk = Mk.JU(),
            xk = kk.getInternalTexture(),
            nk = kk.is3D || !!xk?.is3D;
          let Uk;
          if (Kk.isWebGPU ? nk ? await ik.e(367).then((() => ik(60829))) : kk.isCube ? await ik.e(368).then((() => ik(60834))) : await ik.e(369).then((() => ik(60840))) : nk ? await ik.e(364).then((() => ik(60820))) : kk.isCube ? await ik.e(365).then((() => ik(60824))) : await ik.e(366).then((() => ik(60827))), nk) Uk = new bk.c("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: Dk.f.NEAREST_NEAREST_MIPNEAREST,
            engine: Kk,
            shaderLanguage: Kk.isWebGPU ? 1 : 0
          });
          else if (kk.isCube) {
            const kk = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            Uk = new bk.c("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: Dk.f.NEAREST_NEAREST_MIPNEAREST,
              engine: Kk,
              defines: kk[rk],
              shaderLanguage: Kk.isWebGPU ? 1 : 0
            })
          } else Uk = new bk.c("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: Dk.f.NEAREST_NEAREST_MIPNEAREST,
            engine: Kk,
            shaderLanguage: Kk.isWebGPU ? 1 : 0
          });
          await new Promise((kk => {
            Uk.onEffectCreatedObservable.addOnce((ek => {
              ek.executeWhenCompiled((() => {
                kk(0)
              }))
            }))
          }));
          const Hk = new fk.c("temp", {
            width: ek,
            height: Sk
          }, Mk, !1);
          Uk.onApply = function(ek) {
            ek.setTexture("textureSampler", kk), ek.setFloat("lod", Pk), ek.setInt("gamma", kk.gammaSpace ? 1 : 0), nk && ek.setFloat("slice", mk)
          };
          try {
            if (Hk.renderTarget && xk) {
              const ik = xk.samplingMode;
              0 !== Pk ? kk.updateSamplingMode(Dk.f.NEAREST_NEAREST_MIPNEAREST) : kk.updateSamplingMode(Dk.f.NEAREST_NEAREST), Mk.postProcessManager.directRender([Uk], Hk.renderTarget, !0), kk.updateSamplingMode(ik);
              const fk = await Kk.readPixels(0, 0, ek, Sk),
                bk = new Uint8Array(fk.buffer, fk.byteOffset, fk.byteLength);
              return Kk.unBindFramebuffer(Hk.renderTarget), bk
            }
            throw Error("Render to texture failed.")
          } finally {
            Hk.dispose(), Uk.dispose()
          }
        }(kk, wk, lk, rk, Pk, Mk)
      }
      let pk = await kk.readPixels(rk, Pk);
      if (!pk) throw new Error(`Failed to read pixels from texture ${kk.name}.`);
      if (pk instanceof Float32Array) {
        const kk = new Uint8Array(pk.length);
        let ek = pk.length;
        for (; ek--;) {
          const ik = pk[ek];
          kk[ek] = Math.round(255 * (0, Kk.Clamp)(ik))
        }
        pk = kk
      }
      const yk = wk * lk,
        Yk = 4 * yk;
      if (pk.length !== Yk) {
        const kk = 0 === yk ? 0 : pk.length / yk;
        if (1 === kk || 2 === kk || 3 === kk) {
          const ek = new Uint8Array(Yk);
          for (let ik = 0, Dk = 0, fk = 0; ik < yk; ik++, fk += 4) {
            const ik = pk[Dk++];
            if (1 === kk) {
              ek[fk] = ik, ek[fk + 1] = ik, ek[fk + 2] = ik, ek[fk + 3] = 255;
              continue
            }
            const Sk = pk[Dk++];
            2 !== kk ? (ek[fk] = ik, ek[fk + 1] = Sk, ek[fk + 2] = pk[Dk++], ek[fk + 3] = 255) : (ek[fk] = ik, ek[fk + 1] = Sk, ek[fk + 2] = 0, ek[fk + 3] = 255)
          }
          return ek
        }
      }
      return pk
    }
    const Hk = {
      CreateResizedCopy: function(kk, ek, ik) {
        let Sk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const bk = kk.XF(),
          rk = bk.JU(),
          Pk = new fk.c("resized" + kk.name, {
            width: ek,
            height: ik
          }, bk, !kk.noMipmap, !0, kk._texture.type, !1, kk.samplingMode, !1);
        Pk.wrapU = kk.wrapU, Pk.wrapV = kk.wrapV, Pk.uOffset = kk.uOffset, Pk.vOffset = kk.vOffset, Pk.uScale = kk.uScale, Pk.vScale = kk.vScale, Pk.uAng = kk.uAng, Pk.vAng = kk.vAng, Pk.wAng = kk.wAng, Pk.coordinatesIndex = kk.coordinatesIndex, Pk.level = kk.level, Pk.anisotropicFilteringLevel = kk.anisotropicFilteringLevel, Pk._texture.isReady = !1, kk.wrapU = Dk.f.CLAMP_ADDRESSMODE, kk.wrapV = Dk.f.CLAMP_ADDRESSMODE;
        const mk = new Mk("pass", 1, null, Sk ? Dk.f.BILINEAR_SAMPLINGMODE : Dk.f.NEAREST_SAMPLINGMODE, rk, !1, 0);
        return mk.externalTextureSamplerBinding = !0, mk.onEffectCreatedObservable.addOnce((ek => {
          ek.executeWhenCompiled((() => {
            mk.onApply = function(ek) {
              ek.setTexture("textureSampler", kk)
            };
            const ek = Pk.renderTarget;
            ek && (bk.postProcessManager.directRender([mk], ek), rk.unBindFramebuffer(ek), Pk.disposeFramebufferObjects(), mk.dispose(), Pk.getInternalTexture().isReady = !0)
          }))
        })), Pk
      },
      ApplyPostProcess: nk,
      ToHalfFloat: xk.i,
      FromHalfFloat: xk.e,
      GetTextureDataAsync: Uk
    }
  },
  41376: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Uk
    });
    var Dk = ik(39566),
      fk = ik(39672),
      Sk = ik(36726),
      bk = ik(36698),
      rk = ik(39403),
      Pk = ik(39570),
      mk = ik(39585),
      Mk = ik(36734),
      Kk = ik(39467),
      xk = ik(39501),
      nk = ik(41384);
    let Uk = (() => {
        var kk;
        let ek, rk, Kk, Uk, Hk, lk, pk, yk, Yk, Lk, Ck, Ak, jk, sk, dk, Vk, Fk = [],
          uk = [],
          qk = [],
          Ik = [],
          zk = [],
          Qk = [],
          vk = [],
          Ek = [],
          hk = [],
          ak = [],
          Wk = [],
          tk = [],
          Xk = [],
          Bk = [],
          ck = [],
          Tk = [],
          Zk = [],
          Ok = [],
          gk = [],
          Gk = [],
          Nk = [],
          Rk = [],
          Jk = [],
          ke = [],
          ee = [],
          ie = [],
          De = [],
          fe = [],
          Se = [];
        return kk = class {
          static get ForceGLSL() {
            return nk.f.ForceGLSL
          }
          static set ForceGLSL(kk) {
            nk.f.ForceGLSL = kk
          }
          static RegisterShaderCodeProcessing(kk, ek) {
            nk.f.RegisterShaderCodeProcessing(kk, ek)
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
            return this.bR
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.Z6(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(ek, ik, rk, Pk, mk, Mk) {
            let Kk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              xk = arguments.length > 7 ? arguments[7] : void 0,
              Uk = arguments.length > 8 ? arguments[8] : void 0,
              Hk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              lk = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              pk = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              yk = arguments.length > 12 ? arguments[12] : void 0,
              Yk = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              Lk = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              Ck = arguments.length > 15 ? arguments[15] : void 0,
              Ak = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, Dk.e)(this, Fk), null), this.uniqueId = (0, Dk.e)(this, uk, void 0), this.width = ((0, Dk.e)(this, qk), (0, Dk.e)(this, Ik, -1)), this.height = ((0, Dk.e)(this, zk), (0, Dk.e)(this, Qk, -1)), this.nodeMaterialSource = ((0, Dk.e)(this, vk), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, Dk.e)(this, Ek, void 0), this.clearColor = ((0, Dk.e)(this, hk), (0, Dk.e)(this, ak, void 0)), this.autoClear = ((0, Dk.e)(this, Wk), (0, Dk.e)(this, tk, !0)), this.forceAutoClearInAlphaMode = ((0, Dk.e)(this, Xk), (0, Dk.e)(this, Bk, !1)), this.alphaConstants = ((0, Dk.e)(this, ck), (0, Dk.e)(this, Tk, void 0)), this.animations = ((0, Dk.e)(this, Zk), []), this.enablePixelPerfectMode = (0, Dk.e)(this, Ok, !1), this.forceFullscreenViewport = ((0, Dk.e)(this, gk), (0, Dk.e)(this, Gk, !0)), this.inspectableCustomProperties = (0, Dk.e)(this, Nk), this.scaleMode = (0, Dk.e)(this, Rk, 1), this.alwaysForcePOT = ((0, Dk.e)(this, Jk), (0, Dk.e)(this, ke, !1)), this._samples = ((0, Dk.e)(this, ee), (0, Dk.e)(this, ie, 1)), this.adaptScaleToCurrentViewport = ((0, Dk.e)(this, De), (0, Dk.e)(this, fe, !1)), this.doNotSerialize = ((0, Dk.e)(this, Se), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new fk.h(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new bk.l(1, 1), this._texelSize = bk.l.Zero(), this.onActivateObservable = new Sk.c, this.onSizeChangedObservable = new Sk.c, this.onApplyObservable = new Sk.c, this.onBeforeRenderObservable = new Sk.c, this.onAfterRenderObservable = new Sk.c, this.ZF = new Sk.c, wk();
            let jk, sk = 1,
              dk = null;
            if (rk && !Array.isArray(rk)) {
              const kk = rk;
              rk = kk.uniforms ?? null, Pk = kk.samplers ?? null, sk = kk.size ?? 1, Mk = kk.camera ?? null, Kk = kk.samplingMode ?? 1, xk = kk.engine, Uk = kk.reusable, Hk = Array.isArray(kk.defines) ? kk.defines.join("\n") : kk.defines ?? null, lk = kk.textureType ?? 0, pk = kk.vertexUrl ?? "postprocess", yk = kk.indexParameters, Yk = kk.blockCompilation ?? !1, Lk = kk.textureFormat ?? 5, Ck = kk.shaderLanguage ?? 0, dk = kk.uniformBuffers ?? null, Ak = kk.extraInitializations, jk = kk.effectWrapper
            } else mk && (sk = "number" === typeof mk ? mk : {
              width: mk.width,
              height: mk.height
            });
            if (this._useExistingThinPostProcess = !!jk, this._effectWrapper = jk ?? new nk.f({
                name: ek,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: ik,
                engine: xk || Mk?.XF().JU(),
                uniforms: rk,
                samplers: Pk,
                uniformBuffers: dk,
                defines: Hk,
                vertexUrl: pk,
                indexParameters: yk,
                blockCompilation: !0,
                shaderLanguage: Ck,
                extraInitializations: void 0
              }), this.name = ek, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != Mk ? (this.bR = Mk, this._scene = Mk.XF(), Mk.attachPostProcess(this), this._engine = this._scene.JU(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : xk && (this._engine = xk, this._engine.postProcesses.push(this)), this._options = sk, this.renderTargetSamplingMode = Kk || 1, this._reusable = Uk || !1, this._textureType = lk, this._textureFormat = Lk, this._shaderLanguage = Ck || 0, this._samplers = Pk || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = ik, this._vertexUrl = pk, this._parameters = rk || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = dk || [], this._indexParameters = yk, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const ek = [];
              this._gatherImports(this._engine.isWebGPU && !kk.ForceGLSL, ek), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(Yk, Hk, Ak, ek)
            }
          }
          _gatherImports() {
            let kk = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? kk.push(Promise.all([ik.e(363).then((() => ik(60802)))])) : kk.push(Promise.all([ik.e(352).then((() => ik(60674)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          JU() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(kk) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = kk, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new fk.h(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Dk = arguments.length > 3 ? arguments[3] : void 0,
              fk = arguments.length > 4 ? arguments[4] : void 0,
              Sk = arguments.length > 5 ? arguments[5] : void 0,
              bk = arguments.length > 6 ? arguments[6] : void 0,
              rk = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(kk, ek, ik, Dk, fk, Sk, bk, rk), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(kk, ek) {
            let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let fk = 0; fk < this._textureCache.length; fk++)
              if (this._textureCache[fk].texture.width === kk.width && this._textureCache[fk].texture.height === kk.height && this._textureCache[fk].postProcessChannel === ik && this._textureCache[fk].texture._generateDepthBuffer === ek.generateDepthBuffer && this._textureCache[fk].texture.samples === ek.samples) return this._textureCache[fk].texture;
            const Dk = this._engine.createRenderTargetTexture(kk, ek);
            return this._textureCache.push({
              texture: Dk,
              postProcessChannel: ik,
              lastUsedRenderId: -1
            }), Dk
          }
          _flushTextureCache() {
            const kk = this._renderId;
            for (let ek = this._textureCache.length - 1; ek >= 0; ek--)
              if (kk - this._textureCache[ek].lastUsedRenderId > 100) {
                let kk = !1;
                for (let ik = 0; ik < this._textures.length; ik++)
                  if (this._textures.data[ik] === this._textureCache[ek].texture) {
                    kk = !0;
                    break
                  } kk || (this._textureCache[ek].texture.dispose(), this._textureCache.splice(ek, 1))
              }
          }
          resize(kk, ek) {
            let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              fk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = kk, this.height = ek;
            let Sk = null;
            if (ik)
              for (let Pk = 0; Pk < ik._postProcesses.length; Pk++)
                if (null !== ik._postProcesses[Pk]) {
                  Sk = ik._postProcesses[Pk];
                  break
                } const bk = {
                width: this.width,
                height: this.height
              },
              rk = {
                generateMipMaps: Dk,
                generateDepthBuffer: fk || Sk === this,
                generateStencilBuffer: (fk || Sk === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(bk, rk, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(bk, rk, 1)), this._texelSize.Z6(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let kk;
            if (this._shareOutputWithPostProcess) kk = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) kk = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let ek;
              kk = this.inputTexture;
              for (let ik = 0; ik < this._textureCache.length; ik++)
                if (this._textureCache[ik].texture === kk) {
                  ek = this._textureCache[ik];
                  break
                } ek && (ek.lastUsedRenderId = this._renderId)
            }
            return kk
          }
          activate(kk) {
            let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              ik = arguments.length > 2 ? arguments[2] : void 0;
            const Dk = null === kk || void 0 !== kk.cameraRigMode ? kk || this.bR : null,
              fk = Dk?.XF() ?? kk,
              Sk = fk.JU(),
              bk = Sk.getCaps().maxTextureSize,
              rk = (ek ? ek.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              Pk = (ek ? ek.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let mk = this._options.width || rk,
              Mk = this._options.height || Pk;
            const Kk = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let nk = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const kk = Sk.currentViewport;
                kk && (mk *= kk.width, Mk *= kk.height)
              }(Kk || this.alwaysForcePOT) && (this._options.width || (mk = Sk.needPOTTextures ? (0, xk.g)(mk, bk, this.scaleMode) : mk), this._options.height || (Mk = Sk.needPOTTextures ? (0, xk.g)(Mk, bk, this.scaleMode) : Mk)), this.width === mk && this.height === Mk && (nk = this._getTarget()) || this.resize(mk, Mk, Dk, Kk, ik), this._textures.forEach((kk => {
                kk.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(kk, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return nk || (nk = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.Z6(rk / mk, Pk / Mk), this._engine.bindFramebuffer(nk, 0, rk, Pk, this.forceFullscreenViewport)) : (this._scaleRatio.Z6(1, 1), this._engine.bindFramebuffer(nk, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(Dk), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : fk.clearColor, fk._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), nk
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
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.JU().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), kk = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", kk?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
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
            let ek;
            if (kk = kk || this.bR, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (ek = this._parentContainer.postProcesses.indexOf(this), ek > -1 && this._parentContainer.postProcesses.splice(ek, 1), this._parentContainer = null), ek = this._engine.postProcesses.indexOf(this), -1 !== ek && this._engine.postProcesses.splice(ek, 1), this.ZF.notifyObservers(), kk) {
              if (kk.detachPostProcess(this), ek = kk._postProcesses.indexOf(this), 0 === ek && kk._postProcesses.length > 0) {
                const kk = this.bR._getFirstPostProcess();
                kk && kk.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const kk = mk.b.Serialize(this),
              ek = this.getCamera() || this._scene && this._scene.activeCamera;
            return kk.customType = "BABYLON." + this.getClassName(), kk.cameraId = ek ? ek.id : null, kk.reusable = this._reusable, kk.textureType = this._textureType, kk.fragmentUrl = this._fragmentUrl, kk.parameters = this._parameters, kk.samplers = this._samplers, kk.uniformBuffers = this._uniformBuffers, kk.options = this._options, kk.defines = this._postProcessDefines, kk.textureFormat = this._textureFormat, kk.vertexUrl = this._vertexUrl, kk.indexParameters = this._indexParameters, kk
          }
          clone() {
            const ek = this.serialize();
            ek._engine = this._engine, ek.cameraId = null;
            const ik = kk.Parse(ek, this._scene, "");
            return ik ? (ik.onActivateObservable = this.onActivateObservable.clone(), ik.onSizeChangedObservable = this.onSizeChangedObservable.clone(), ik.onApplyObservable = this.onApplyObservable.clone(), ik.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), ik.onAfterRenderObservable = this.onAfterRenderObservable.clone(), ik._prePassEffectConfiguration = this._prePassEffectConfiguration, ik) : null
          }
          static Parse(kk, ek, ik) {
            const Dk = (0, Mk.d)(kk.customType);
            if (!Dk || !Dk._Parse) return null;
            const fk = ek ? ek.getCameraById(kk.cameraId) : null;
            return Dk._Parse(kk, fk, ek, ik)
          }
          static _Parse(ek, ik, Dk, fk) {
            return mk.b.Parse((() => new kk(ek.name, ek.fragmentUrl, ek.parameters, ek.samplers, ek.options, ik, ek.renderTargetSamplingMode, ek._engine, ek.reusable, ek.defines, ek.textureType, ek.vertexUrl, ek.indexParameters, !1, ek.textureFormat)), ek, Dk, fk)
          }
        }, (() => {
          const ik = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ek = [(0, Pk.I)()], rk = [(0, Pk.I)()], Kk = [(0, Pk.I)()], Uk = [(0, Pk.I)()], Hk = [(0, Pk.I)()], lk = [(0, Pk.m)()], pk = [(0, Pk.I)()], yk = [(0, Pk.I)()], Yk = [(0, Pk.I)()], Lk = [(0, Pk.I)()], Ck = [(0, Pk.I)()], Ak = [(0, Pk.I)()], jk = [(0, Pk.I)()], sk = [(0, Pk.I)()], dk = [(0, Pk.I)("samples")], Vk = [(0, Pk.I)()], (0, Dk.d)(kk, null, rk, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: kk => "name" in kk,
              get: kk => kk.name
            },
            metadata: ik
          }, null, Fk), (0, Dk.d)(kk, null, Yk, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: kk => "alphaMode" in kk,
              get: kk => kk.alphaMode
            },
            metadata: ik
          }, null, Fk), (0, Dk.d)(null, null, ek, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: kk => "uniqueId" in kk,
              get: kk => kk.uniqueId,
              set: (kk, ek) => {
                kk.uniqueId = ek
              }
            },
            metadata: ik
          }, uk, qk), (0, Dk.d)(null, null, Kk, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: kk => "width" in kk,
              get: kk => kk.width,
              set: (kk, ek) => {
                kk.width = ek
              }
            },
            metadata: ik
          }, Ik, zk), (0, Dk.d)(null, null, Uk, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: kk => "height" in kk,
              get: kk => kk.height,
              set: (kk, ek) => {
                kk.height = ek
              }
            },
            metadata: ik
          }, Qk, vk), (0, Dk.d)(null, null, Hk, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: kk => "renderTargetSamplingMode" in kk,
              get: kk => kk.renderTargetSamplingMode,
              set: (kk, ek) => {
                kk.renderTargetSamplingMode = ek
              }
            },
            metadata: ik
          }, Ek, hk), (0, Dk.d)(null, null, lk, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: kk => "clearColor" in kk,
              get: kk => kk.clearColor,
              set: (kk, ek) => {
                kk.clearColor = ek
              }
            },
            metadata: ik
          }, ak, Wk), (0, Dk.d)(null, null, pk, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: kk => "autoClear" in kk,
              get: kk => kk.autoClear,
              set: (kk, ek) => {
                kk.autoClear = ek
              }
            },
            metadata: ik
          }, tk, Xk), (0, Dk.d)(null, null, yk, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: kk => "forceAutoClearInAlphaMode" in kk,
              get: kk => kk.forceAutoClearInAlphaMode,
              set: (kk, ek) => {
                kk.forceAutoClearInAlphaMode = ek
              }
            },
            metadata: ik
          }, Bk, ck), (0, Dk.d)(null, null, Lk, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: kk => "alphaConstants" in kk,
              get: kk => kk.alphaConstants,
              set: (kk, ek) => {
                kk.alphaConstants = ek
              }
            },
            metadata: ik
          }, Tk, Zk), (0, Dk.d)(null, null, Ck, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: kk => "enablePixelPerfectMode" in kk,
              get: kk => kk.enablePixelPerfectMode,
              set: (kk, ek) => {
                kk.enablePixelPerfectMode = ek
              }
            },
            metadata: ik
          }, Ok, gk), (0, Dk.d)(null, null, Ak, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: kk => "forceFullscreenViewport" in kk,
              get: kk => kk.forceFullscreenViewport,
              set: (kk, ek) => {
                kk.forceFullscreenViewport = ek
              }
            },
            metadata: ik
          }, Gk, Nk), (0, Dk.d)(null, null, jk, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: kk => "scaleMode" in kk,
              get: kk => kk.scaleMode,
              set: (kk, ek) => {
                kk.scaleMode = ek
              }
            },
            metadata: ik
          }, Rk, Jk), (0, Dk.d)(null, null, sk, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: kk => "alwaysForcePOT" in kk,
              get: kk => kk.alwaysForcePOT,
              set: (kk, ek) => {
                kk.alwaysForcePOT = ek
              }
            },
            metadata: ik
          }, ke, ee), (0, Dk.d)(null, null, dk, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: kk => "_samples" in kk,
              get: kk => kk._samples,
              set: (kk, ek) => {
                kk._samples = ek
              }
            },
            metadata: ik
          }, ie, De), (0, Dk.d)(null, null, Vk, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: kk => "adaptScaleToCurrentViewport" in kk,
              get: kk => kk.adaptScaleToCurrentViewport,
              set: (kk, ek) => {
                kk.adaptScaleToCurrentViewport = ek
              }
            },
            metadata: ik
          }, fe, Se), ik && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ik
          })
        })(), kk
      })(),
      Hk = !1;

    function wk() {
      Hk || (Hk = !0, Kk.c.prototype.setTextureFromPostProcess = function(kk, ek, ik) {
        let Dk = null;
        ek && (ek._forcedOutputTexture ? Dk = ek._forcedOutputTexture : ek._textures.data[ek._currentRenderTextureInd] && (Dk = ek._textures.data[ek._currentRenderTextureInd])), this._bindTexture(kk, Dk?.texture ?? null, ik)
      }, Kk.c.prototype.setTextureFromPostProcessOutput = function(kk, ek, ik) {
        this._bindTexture(kk, ek?._outputTexture?.texture ?? null, ik)
      }, rk.e.prototype.setTextureFromPostProcess = function(kk, ek) {
        this._engine.setTextureFromPostProcess(this._samplers[kk], ek, kk)
      }, rk.e.prototype.setTextureFromPostProcessOutput = function(kk, ek) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[kk], ek, kk)
      }, (0, Mk.h)("BABYLON.PostProcess", Uk))
    }
  },
  41407: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => bk,
      h: () => Sk
    });
    var Dk = ik(41384),
      fk = ik(36722);
    class Sk extends Dk.f {
      _gatherImports(kk, ek) {
        kk ? (this._webGPUReady = !0, ek.push(Promise.all([ik.e(370).then((() => ik(60846)))]))) : ek.push(Promise.all([ik.e(371).then((() => ik(60851)))])), super._gatherImports(kk, ek)
      }
      constructor(kk) {
        let ek = arguments.length > 2 ? arguments[2] : void 0;
        const ik = {
          name: kk,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || fk.e.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: Sk.FragmentUrl,
          ...ek
        };
        ik.engine || (ik.engine = fk.e.LastCreatedEngine), super(ik)
      }
    }
    Sk.FragmentUrl = "pass";
    class bk extends Dk.f {
      _gatherImports(kk, ek) {
        kk ? (this._webGPUReady = !0, ek.push(Promise.all([ik.e(372).then((() => ik(60857)))]))) : ek.push(Promise.all([ik.e(373).then((() => ik(60861)))])), super._gatherImports(kk, ek)
      }
      constructor(kk) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: kk,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || fk.e.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: bk.FragmentUrl,
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
    bk.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);