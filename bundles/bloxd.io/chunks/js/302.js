export const id = 302;
export const ids = [302];
export const modules = {
  41267: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ab
    });
    var Bb = hb(36753),
      Ob = hb(36727),
      Gb = hb(39932),
      Ub = hb(39612),
      Lb = hb(39387),
      Yb = hb(38302),
      Sb = hb(39598),
      ab = hb(39625),
      Hb = hb(36736),
      wb = hb(39343),
      Zb = hb(39573),
      Xb = hb(39659);
    class pb {
      get renderList() {
        return this._renderList
      }
      set renderList(bb) {
        this._renderList !== bb && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), bb && (this._unObserveRenderList = (0, Hb.k)(bb, this._renderListHasChanged)), this._renderList = bb)
      }
      get disableImageProcessing() {
        return this._disableImageProcessing
      }
      set disableImageProcessing(bb) {
        bb !== this._disableImageProcessing && (this._disableImageProcessing = bb, this._scene.markAllMaterialsAsDirty(64))
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(bb) {
        this._disableDepthPrePass = bb, this._renderingManager.disableDepthPrePass = bb
      }
      get name() {
        return this._name
      }
      set name(bb) {
        if (this._name !== bb) {
          if (this._name = bb, this._sceneUBOs)
            for (let bb = 0; bb < this._sceneUBOs.length; ++bb) this._sceneUBOs[bb].name = `Scene ubo #${bb} for ${this.name}`;
          if (this._scene)
            for (let bb = 0; bb < this._renderPassIds.length; ++bb) {
              const ub = this._renderPassIds[bb];
              this._engine._renderPassNames[ub] = `${this._name}#${bb}`
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
      setMaterialForRendering(bb, ub) {
        let hb;
        hb = Array.isArray(bb) ? bb : [bb];
        for (let Bb = 0; Bb < hb.length; ++Bb)
          for (let bb = 0; bb < this.options.numPasses; ++bb) {
            let Ob = hb[Bb];
            hb[Bb].pN && (Ob = hb[Bb].LOb), Ob.setMaterialForRenderPass(this._renderPassIds[bb], void 0 !== ub ? Array.isArray(ub) ? ub[bb] : ub : void 0)
          }
      }
      _freezeActiveMeshes(bb) {
        this._freezeActiveMeshesCancel = (0, wb.g)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, bb)
            for (let bb = 0; bb < this._activeMeshes.length; bb++) this._activeMeshes.data[bb]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((bb, ub) => {
          this._freezeActiveMeshesCancel = null, ub ? (Yb.b.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), bb && Yb.b.Error(bb)) : (Yb.b.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), bb && (Yb.b.Error(bb), bb.stack && Yb.b.Error(bb.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let bb = 0; bb < this._activeMeshes.length; bb++) this._activeMeshes.data[bb]._unFreeze();
        this._isFrozen = !1
      }
      constructor(bb, ub, hb) {
        this._unObserveRenderList = null, this._renderListHasChanged = (bb, ub) => {
          const hb = this._renderList ? this._renderList.length : 0;
          if (0 === ub && hb > 0 || 0 === hb)
            for (const Bb of this._scene.meshes) Bb._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new Bb.e, this.onAfterRenderObservable = new Bb.e, this.onBeforeRenderingManagerRenderObservable = new Bb.e, this.onAfterRenderingManagerRenderObservable = new Bb.e, this.onInitRenderingObservable = new Bb.e, this.onFinishRenderingObservable = new Bb.e, this.onFastPathRenderObservable = new Bb.e, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new Zb.h(256), this._activeBoundingBoxes = new Zb.h(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = bb, this._scene = ub, this._engine = this._scene.UX(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...hb
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new ab.c(ub), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const bb of this._scene.lights) bb.getTypeID() === Xb.d.LIGHTTYPEID_CLUSTERED_CONTAINER && bb.isSupported && bb._updateBatches(this.activeCamera).render()
        })), this._scene.addObjectRenderer(this)
      }
      _releaseRenderPassId() {
        for (let bb = 0; bb < this.options.numPasses; ++bb) this._engine.releaseRenderPassId(this._renderPassIds[bb]);
        this._renderPassIds.length = 0
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let bb = 0; bb < this.options.numPasses; ++bb) this._renderPassIds[bb] = this._engine.createRenderPassId(`${this.name}#${bb}`)
      }
      _createSceneUBO(bb, ub) {
        const hb = this._scene.UX(),
          Bb = new Sb.c(hb, void 0, ub, bb, void 0, !1);
        return Bb.addUniform("viewProjection", 16), ub && Bb.addUniform("viewProjectionR", 16), Bb.addUniform("view", 16), Bb.addUniform("projection", 16), Bb.addUniform("vEyePosition", 4), Bb.addUniform("inverseProjection", 16), Bb
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const bb = this._engine._currentRenderTarget,
          ub = !(!bb || !bb.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const bb = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${bb} for ${this.name}`, ub)), this._sceneUBOIsMultiview.push(ub)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== ub && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, ub), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = ub);
        const hb = this._sceneUBOs[this._currentSceneUBOIndex++];
        return hb.unbindEffect(), hb
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1
      }
      get refreshRate() {
        return this._refreshRate
      }
      set refreshRate(bb) {
        this._refreshRate = bb, this.resetRefreshCounter()
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1))
      }
      isReadyForRendering(bb, ub) {
        this.prepareRenderList(), this.initRender(bb, ub);
        const hb = this._checkReadiness();
        return this.finishRender(), hb
      }
      prepareRenderList() {
        const bb = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let ub = 0; ub < this._waitingRenderList.length; ub++) {
              const hb = this._waitingRenderList[ub],
                Bb = bb.getMeshById(hb);
              Bb && this.renderList.push(Bb)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const bb = this._scene.meshes;
          for (let ub = 0; ub < bb.length; ub++) {
            const hb = bb[ub];
            this.renderListPredicate(hb) && this.renderList.push(hb)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(bb, ub) {
        const hb = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), hb && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(hb.getViewMatrix(), hb.getProjectionMatrix(!0)), this._scene._activeCamera = hb, this._engine.setViewport(hb.rigParent ? hb.rigParent.viewport : hb.viewport, bb, ub)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const bb = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (bb.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), bb._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== bb.activeCamera && bb.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), bb.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const hb = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[bb], this.onBeforeRenderObservable.notifyObservers(bb);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(bb);
        else {
          const ub = this._prepareRenderingManager(bb),
            hb = this._scene.getOutlineRenderer?.(),
            Bb = hb?.enabled;
          hb && (hb.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(bb), this._renderingManager.render(this.customRenderFunction, ub, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(bb), hb && (hb.enabled = Bb)
        }
        ub || this.onAfterRenderObservable.notifyObservers(bb), this._engine.currentRenderPassId = hb
      }
      _checkReadiness() {
        const bb = this._scene,
          ub = this._engine.currentRenderPassId;
        let hb = !0;
        bb.getViewMatrix() || bb.updateTransformMatrix();
        const Bb = this.options.numPasses;
        for (let Ob = 0; Ob < Bb && hb; Ob++) {
          const ub = this.renderList ? this.renderList : bb.frameGraph ? bb.meshes : bb.getActiveMeshes().data,
            Gb = this.renderList || bb.frameGraph ? ub.length : bb.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[Ob], this.onBeforeRenderObservable.notifyObservers(Ob);
          let Ub = null,
            Lb = Gb;
          this.getCustomRenderList && (Ub = this.getCustomRenderList(Ob, ub, Gb), Ub && (Lb = Ub.length)), Ub || (Ub = ub), this.options.doNotChangeAspectRatio || bb.updateTransformMatrix(!0);
          for (let bb = 0; bb < Lb && hb; ++bb) {
            const ub = Ub[bb];
            if (!ub.isEnabled() || ub.isBlocked || !ub.isVisible || !ub.FW) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(ub, this.refreshRate, !0)) {
                hb = !1;
                continue
              }
            } else if (!ub.isReady(!0)) {
              hb = !1;
              continue
            }
            let Bb = ub._edgesRenderer,
              Ob = ub.hasThinInstances;
            if (ub.pN) {
              const bb = ub.LOb;
              bb.edgesShareWithInstances && bb._edgesRenderer?.isEnabled && (Bb = bb._edgesRenderer, Ob = !0)
            } else ub.UOb && ub.edgesShareWithInstances && (Ob = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && Bb?.isEnabled && (Bb.isReady(Ob) || (hb = !1))
          }
          if (this.renderParticles && bb.particlesEnabled) {
            const ub = this.particleSystemList || bb.fW;
            for (const bb of ub) bb.isReady() || (hb = !1)
          }
          if (this.renderSprites && bb.spritesEnabled) {
            const ub = this.spriteManagerList || bb.spriteManagers;
            if (ub)
              for (const Bb of ub) bb.activeCamera && 0 === (Bb.layerMask & bb.activeCamera.layerMask) || Bb.isReady && !Bb.isReady() && (hb = !1)
          }
          this.onAfterRenderObservable.notifyObservers(Ob), Bb > 1 && (bb.incrementRenderId(), bb.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = ub, hb
      }
      _prepareRenderingManager() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const hb = this._scene;
        let Bb, Ob, Gb = null;
        const Ub = this.renderList ? this.renderList : hb.frameGraph ? hb.meshes : hb.getActiveMeshes().data,
          Lb = this.renderList || hb.frameGraph ? Ub.length : hb.getActiveMeshes().length;
        if (this.getCustomRenderList && (Gb = this.getCustomRenderList(bb, Ub, Lb)), Gb) Bb = Gb.length, Ob = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !ub && !this._engine.isWebGPU) return Ub;
          this._defaultRenderListPrepared = !0, Gb = Ub, Bb = Lb, Ob = !this.renderList || this.forceLayerMaskCheck
        }
        const Yb = hb.activeCamera,
          Sb = this.cameraForLOD ?? Yb,
          ab = hb.getBoundingBoxRenderer?.();
        if (hb._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && ab) {
            ab.reset();
            for (let bb = 0; bb < this._activeBoundingBoxes.length; bb++) {
              const ub = this._activeBoundingBoxes.data[bb];
              ab.renderList.push(ub)
            }
          }
          return Gb
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), ab && ab.reset(), this.renderMeshes) {
          const bb = hb.getRenderId(),
            ub = hb.getFrameId();
          for (let Ub = 0; Ub < Bb; Ub++) {
            const Bb = Gb[Ub];
            if (Bb && !Bb.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(Bb, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!Bb.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let Gb, Ub;
              if (Sb) {
                const bb = Bb._internalAbstractMeshDataInfo._currentLOD.get(Sb);
                bb && bb[1] === ub ? Gb = bb[0] : (Gb = hb.customLODSelector ? hb.customLODSelector(Bb, Sb) : Bb.getLOD(Sb), bb ? (bb[0] = Gb, bb[1] = ub) : Bb._internalAbstractMeshDataInfo._currentLOD.set(Sb, [Gb, ub]))
              } else Gb = Bb;
              if (!Gb) continue;
              if (Gb !== Bb && 0 !== Gb.billboardMode && Gb.computeWorldMatrix(), Gb._preActivateForIntermediateRendering(bb), Ub = !(!Ob || !Yb) && 0 === (Bb.layerMask & Yb.layerMask), Bb.isEnabled() && Bb.isVisible && Bb.FW && !Ub) {
                if (this._activeMeshes.push(Bb), Gb._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, Gb !== Bb && Gb._activate(bb, !0), this.enableBoundingBoxRendering && ab && ab._preActiveMesh(Bb), Bb._activate(bb, !0) && Bb.FW.length) {
                  Bb.pN ? Bb._internalAbstractMeshDataInfo._actAsRegularMesh && (Gb = Bb) : Gb._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, Gb._internalAbstractMeshDataInfo._isActiveIntermediate = !0, hb._prepareSkeleton(Gb);
                  for (let bb = 0; bb < Gb.FW.length; bb++) {
                    const ub = Gb.FW[bb];
                    this.enableBoundingBoxRendering && ab && ab._evaluateSubMesh(Bb, ub), this._renderingManager.dispatch(ub, Gb)
                  }
                }
                Bb._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && ab && ub)
          for (let Hb = 0; Hb < ab.renderList.length; Hb++) {
            const bb = ab.renderList.data[Hb];
            this._activeBoundingBoxes.push(bb)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const bb = this.particleSystemList || hb.fW;
          for (let ub = 0; ub < bb.length; ub++) {
            const hb = bb[ub],
              Bb = hb.emitter;
            hb.isStarted() && Bb && (!Bb.position || Bb.isEnabled()) && this._renderingManager.dispatchParticles(hb)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return Gb
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(bb, ub, hb, Bb)
      }
      setRenderingAutoClearDepthStencil(bb, ub) {
        let hb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Bb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(bb, ub, hb, Bb), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const bb = new pb(this.name, this._scene, this.options);
        return this.renderList && (bb.renderList = this.renderList.slice(0)), bb
      }
      dispose() {
        const bb = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          ub = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let hb = 0; hb < ub; hb++) {
          const ub = bb[hb];
          ub && void 0 !== ub.getMaterialForRenderPass(this.renderPassId) && ub.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const hb of this._sceneUBOs) hb.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === pb.REFRESHRATE_RENDER_ONCE && (this.refreshRate = pb.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    pb.REFRESHRATE_RENDER_ONCE = 0, pb.REFRESHRATE_RENDER_ONEVERYFRAME = 1, pb.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var ob = hb(39333);
    class Ab extends Gb.f {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate
      }
      set renderListPredicate(bb) {
        this._objectRenderer.renderListPredicate = bb
      }
      get renderList() {
        return this._objectRenderer.renderList
      }
      set renderList(bb) {
        this._objectRenderer.renderList = bb
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList
      }
      set particleSystemList(bb) {
        this._objectRenderer.particleSystemList = bb
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList
      }
      set getCustomRenderList(bb) {
        this._objectRenderer.getCustomRenderList = bb
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles
      }
      set renderParticles(bb) {
        this._objectRenderer.renderParticles = bb
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites
      }
      set renderSprites(bb) {
        this._objectRenderer.renderSprites = bb
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering
      }
      set enableBoundingBoxRendering(bb) {
        this._objectRenderer.enableBoundingBoxRendering = bb
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering
      }
      set enableOutlineRendering(bb) {
        this._objectRenderer.enableOutlineRendering = bb
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck
      }
      set forceLayerMaskCheck(bb) {
        this._objectRenderer.forceLayerMaskCheck = bb
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera
      }
      set activeCamera(bb) {
        this._objectRenderer.activeCamera = bb
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD
      }
      set cameraForLOD(bb) {
        this._objectRenderer.cameraForLOD = bb
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing
      }
      set disableImageProcessing(bb) {
        this._objectRenderer.disableImageProcessing = bb
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction
      }
      set customIsReadyFunction(bb) {
        this._objectRenderer.customIsReadyFunction = bb
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction
      }
      set customRenderFunction(bb) {
        this._objectRenderer.customRenderFunction = bb
      }
      get postProcesses() {
        return this._postProcesses
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled
      }
      set onAfterUnbind(bb) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(bb)
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable
      }
      set onBeforeRender(bb) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(bb)
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable
      }
      set onAfterRender(bb) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(bb)
      }
      set onClear(bb) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(bb)
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList
      }
      set _waitingRenderList(bb) {
        this._objectRenderer._waitingRenderList = bb
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
      setMaterialForRendering(bb, ub) {
        this._objectRenderer.setMaterialForRendering(bb, ub)
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
      set boundingBoxSize(bb) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(bb)) return;
        this._boundingBoxSize = bb;
        const ub = this.ZN();
        ub && ub.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(bb, ub, hb) {
        let Ub, Lb, Sb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          ab = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Hb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          wb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Zb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Gb.f.TRILINEAR_SAMPLINGMODE,
          Xb = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          ob = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          Ab = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          lb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          Kb = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          Wb = arguments.length > 13 ? arguments[13] : void 0,
          Cb = arguments.length > 14 ? arguments[14] : void 0,
          db = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          rb = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          jb = !0,
          nb = !1;
        if ("object" === typeof Sb) {
          const bb = Sb;
          Sb = !!bb.generateMipMaps, ab = bb.doNotChangeAspectRatio ?? !0, Hb = bb.type ?? 0, wb = !!bb.isCube, Zb = bb.samplingMode ?? Gb.f.TRILINEAR_SAMPLINGMODE, Xb = bb.generateDepthBuffer ?? !0, ob = !!bb.generateStencilBuffer, Ab = !!bb.isMulti, lb = bb.format ?? 5, Kb = !!bb.delayAllocation, Wb = bb.samples, Cb = bb.creationFlags, db = !!bb.noColorAttachment, rb = !!bb.useSRGBBuffer, Ub = bb.colorAttachment, jb = bb.gammaSpace ?? jb, Lb = bb.existingObjectRenderer, nb = !!bb.enableClusteredLights
        }
        if (super(null, hb, !Sb, void 0, Zb, void 0, void 0, void 0, void 0, lb), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new Bb.e, this.onAfterUnbindObservable = new Bb.e, this.onClearObservable = new Bb.e, this.onResizeObservable = new Bb.e, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = Ob.q.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(hb = this.ZN())) return;
        const Db = this.ZN().UX();
        this._gammaSpace = jb, this._coordinatesMode = Gb.f.PROJECTION_MODE, this.name = bb, this.isRenderTarget = !0, this._initialSizeParameter = ub, this._dontDisposeObjectRenderer = !!Lb, this._processSizeParameter(ub), this._objectRenderer = Lb ?? new pb(bb, hb, {
          numPasses: wb ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: ab,
          enableClusteredLights: nb
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const bb = this._scene;
          if (!this._disableEngineStages)
            for (const ub of bb._beforeRenderTargetClearStage) ub.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(Db) : this.skipInitialClear || Db.clear(this.clearColor ?? bb.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || bb.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const ub of bb._beforeRenderTargetDrawStage) ub.action(this, this._currentFaceIndex, this._currentLayer);
          Db._debugPushGroup && Db._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (Db._debugPopGroup && Db._debugPopGroup(), !this._disableEngineStages)
            for (const ub of this._scene._afterRenderTargetDrawStage) ub.action(this, this._currentFaceIndex, this._currentLayer);
          const bb = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const ub of this._scene._afterRenderTargetPostProcessStage) ub.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = bb), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), Db) : Yb.b.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(Db) : this.skipInitialClear || Db.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = Db.onResizeObservable.add((() => {})), this._generateMipMaps = !!Sb, this._doNotChangeAspectRatio = ab, Ab || (this._renderTargetOptions = {
          generateMipMaps: Sb,
          type: Hb,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: Xb,
          generateStencilBuffer: ob,
          samples: Wb,
          creationFlags: Cb,
          noColorAttachment: db,
          useSRGBBuffer: rb,
          colorAttachment: Ub,
          label: this.name
        }, this.samplingMode === Gb.f.NEAREST_SAMPLINGMODE && (this.wrapU = Gb.f.CLAMP_ADDRESSMODE, this.wrapV = Gb.f.CLAMP_ADDRESSMODE), Kb || (wb ? (this._renderTarget = hb.UX().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = Gb.f.INVCUBIC_MODE, this._textureMatrix = Ob.d.Identity()) : this._renderTarget = hb.UX().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== Wb && (this.samples = Wb)))
      }
      createDepthStencilTexture() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Gb = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(bb, ub, hb, Bb, Ob, Gb)
      }
      _processSizeParameter(bb) {
        if (bb.ratio) {
          this._sizeRatio = bb.ratio;
          const ub = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(ub.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(ub.getRenderHeight(), this._sizeRatio)
          }
        } else this._size = bb
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples
      }
      set samples(bb) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(bb))
      }
      addPostProcess(bb) {
        if (!this._postProcessManager) {
          const bb = this.ZN();
          if (!bb) return;
          this._postProcessManager = new Ub.c(bb), this._postProcesses = new Array
        }
        this._postProcesses.push(bb), this._postProcesses[0].autoClear = !1
      }
      clearPostProcesses() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (bb)
            for (const bb of this._postProcesses) bb.dispose();
          this._postProcesses = []
        }
      }
      removePostProcess(bb) {
        if (!this._postProcesses) return;
        const ub = this._postProcesses.indexOf(bb); - 1 !== ub && (this._postProcesses.splice(ub, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter()
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate
      }
      set refreshRate(bb) {
        this._objectRenderer.refreshRate = bb
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
        const bb = this._size.layers;
        if (bb) return bb;
        const ub = this._size.depth;
        return ub || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(bb) {
        const ub = Math.max(1, this.getRenderSize() * bb);
        this.resize(ub)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(bb) {
        const ub = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const hb = this.ZN();
        hb && (this._processSizeParameter(bb), this._renderTarget = ub ? hb.UX().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : hb.UX().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(bb, ub)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => hb(41277))).then((bb => this._dumpTools = bb))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const bb = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), bb
      }
      _render() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const hb = this.ZN();
        if (!hb) return;
        void 0 !== this.useCameraPostProcesses && (bb = this.useCameraPostProcesses);
        const Bb = hb.UX();
        if (Bb._debugPushGroup && Bb._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let Ob = 0; Ob < 6; Ob++) this._renderToTarget(Ob, bb, ub), hb.incrementRenderId(), hb.resetCachedMaterial();
          else this._renderToTarget(0, bb, ub);
        else
          for (let Ob = 0; Ob < this.getRenderLayers(); Ob++) this._renderToTarget(0, bb, ub, Ob), hb.incrementRenderId(), hb.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), Bb._debugPopGroup && Bb._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(bb, ub) {
        const hb = bb * ub,
          Bb = (0, Lb.q)(hb + 16384 / (128 + hb));
        return Math.min((0, Lb.e)(bb), Bb)
      }
      _bindFrameBuffer() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const hb = this.ZN();
        if (!hb) return;
        const Bb = hb.UX();
        this._renderTarget && Bb.bindFramebuffer(this._renderTarget, this.isCube ? bb : void 0, void 0, void 0, this.ignoreCameraViewport, 0, ub)
      }
      _unbindFrameBuffer(bb, ub) {
        this._renderTarget && bb.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(ub)
        }))
      }
      _prepareFrame(bb, ub, hb, Bb) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(ub, hb) : Bb && bb.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(ub, hb)
      }
      _renderToTarget(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Ob = this.ZN();
        if (!Ob) return;
        const Gb = Ob.UX();
        this._currentFaceIndex = bb, this._currentLayer = Bb, this._currentUseCameraPostProcess = ub, this._currentDumpForDebug = hb, this._prepareFrame(Ob, bb, Bb, ub), this._objectRenderer.render(bb + Bb, !0), this._unbindFrameBuffer(Gb, bb), this._texture && this.isCube && 5 === bb && Gb.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(bb, ub, hb, Bb)
      }
      setRenderingAutoClearDepthStencil(bb, ub) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(bb, ub)
      }
      clone() {
        const bb = this.getSize(),
          ub = new Ab(this.name, bb, this.ZN(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return ub.hasAlpha = this.hasAlpha, ub.level = this.level, ub.coordinatesMode = this.coordinatesMode, this.renderList && (ub.renderList = this.renderList.slice(0)), ub
      }
      serialize() {
        if (!this.name) return null;
        const bb = super.serialize();
        if (bb.renderTargetSize = this.getRenderSize(), bb.renderList = [], this.renderList)
          for (let ub = 0; ub < this.renderList.length; ub++) bb.renderList.push(this.renderList[ub].id);
        return bb
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.ZN().UX().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const bb = this.ZN();
        if (!bb) return;
        let ub = bb.customRenderTargets.indexOf(this);
        ub >= 0 && bb.customRenderTargets.splice(ub, 1);
        for (const hb of bb.cameras) ub = hb.customRenderTargets.indexOf(this), ub >= 0 && hb.customRenderTargets.splice(ub, 1);
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
    Ab.REFRESHRATE_RENDER_ONCE = pb.REFRESHRATE_RENDER_ONCE, Ab.REFRESHRATE_RENDER_ONEVERYFRAME = pb.REFRESHRATE_RENDER_ONEVERYFRAME, Ab.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = pb.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(Ab.prototype, "noPrePassRenderer") || Object.defineProperty(Ab.prototype, "noPrePassRenderer", (0, ob.f)("RenderTargetTexture", "noPrePassRenderer"))
  },
  41255: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Sb,
      f: () => ab
    });
    var Bb = hb(39609),
      Ob = hb(37699),
      Gb = hb(36753),
      Ub = hb(39302),
      Lb = hb(39765);
    const Yb = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class Sb {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yb;
        this._fullscreenViewport = new Ob.e(0, 0, 1, 1);
        const hb = ub.positions ?? Yb.positions,
          Gb = ub.indices ?? Yb.indices;
        this.engine = bb, this._vertexBuffers = {
          [Bb.i.PositionKind]: new Bb.i(bb, hb, Bb.i.PositionKind, !1, !1, 2)
        }, this._indexBuffer = bb.createIndexBuffer(Gb), this._indexBufferLength = Gb.length, this._onContextRestoredObserver = bb.onContextRestoredObservable.add((() => {
          this._indexBuffer = bb.createIndexBuffer(Gb);
          for (const bb in this._vertexBuffers) {
            this._vertexBuffers[bb]._rebuild()
          }
        }))
      }
      setViewport() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.engine.setViewport(bb)
      }
      bindBuffers(bb) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, bb)
      }
      applyEffectWrapper(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = ub, this.engine.stencilState.stencilTest = hb, this.engine.enableEffect(bb.drawWrapper), this.bindBuffers(bb.effect), bb.onApplyObservable.notifyObservers({})
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
      _isRenderTargetTexture(bb) {
        return void 0 !== bb.renderTarget
      }
      render(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!bb.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const hb = null === ub ? null : this._isRenderTargetTexture(ub) ? ub.renderTarget : ub;
        hb && this.engine.bindFramebuffer(hb), this.applyEffectWrapper(bb), this.draw(), hb && this.engine.unBindFramebuffer(hb), this.restoreStates()
      }
      dispose() {
        const bb = this._vertexBuffers[Bb.i.PositionKind];
        bb && (bb.dispose(), delete this._vertexBuffers[Bb.i.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class ab {
      static RegisterShaderCodeProcessing(bb, ub) {
        ub ? ab._CustomShaderCodeProcessing[bb ?? ""] = ub : delete ab._CustomShaderCodeProcessing[bb ?? ""]
      }
      static _GetShaderCodeProcessing(bb) {
        return ab._CustomShaderCodeProcessing[bb] ?? ab._CustomShaderCodeProcessing[""]
      }
      get name() {
        return this.options.name
      }
      set name(bb) {
        this.options.name = bb
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
      set effect(bb) {
        this._drawWrapper.effect = bb
      }
      constructor(bb) {
        this.alphaMode = 0, this.onEffectCreatedObservable = new Gb.e(void 0, !0), this.onApplyObservable = new Gb.e, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
          ...bb,
          name: bb.name || "effectWrapper",
          engine: bb.engine,
          uniforms: bb.uniforms || bb.uniformNames || [],
          uniformNames: void 0,
          samplers: bb.samplers || bb.samplerNames || [],
          samplerNames: void 0,
          attributeNames: bb.attributeNames || ["position"],
          uniformBuffers: bb.uniformBuffers || [],
          defines: bb.defines || "",
          useShaderStore: bb.useShaderStore || !1,
          vertexUrl: bb.vertexUrl || bb.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: bb.fragmentShader || "pass",
          indexParameters: bb.indexParameters,
          blockCompilation: bb.blockCompilation || !1,
          shaderLanguage: bb.shaderLanguage || 0,
          onCompiled: bb.onCompiled || void 0,
          extraInitializations: bb.extraInitializations || void 0,
          extraInitializationsAsync: bb.extraInitializationsAsync || void 0,
          useAsPostProcess: bb.useAsPostProcess ?? !1,
          allowEmptySourceTexture: bb.allowEmptySourceTexture ?? !1
        }, this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), bb.vertexUrl || bb.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add((() => {
          this.effect.setFloat2("scale", 1, 1)
        }))), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add((() => {
          this.bind()
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.onContextRestoredObservable.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new Lb.d(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const ub = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, ub, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Bb = arguments.length > 2 ? arguments[2] : void 0,
          Ob = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, Ob && this._importPromises.push(...Ob);
        const Gb = this.options.engine.isWebGPU && !ab.ForceGLSL;
        this._gatherImports(Gb, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(Gb && this._webGPUReady ? hb.e(357).then((() => hb(60837))) : hb.e(346).then((() => hb(60605)))), void 0 !== Bb && Bb(Gb, this._importPromises), Gb && this._webGPUReady && (this.options.shaderLanguage = 1), bb || this.updateEffect(ub)
      }
      updateEffect() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Bb = arguments.length > 3 ? arguments[3] : void 0,
          Ob = arguments.length > 4 ? arguments[4] : void 0,
          Gb = arguments.length > 5 ? arguments[5] : void 0,
          Lb = arguments.length > 6 ? arguments[6] : void 0,
          Yb = arguments.length > 7 ? arguments[7] : void 0;
        const Sb = ab._GetShaderCodeProcessing(this.name);
        if (Sb?.defineCustomBindings) {
          const Bb = ub?.slice() ?? [];
          Bb.push(...this.options.uniforms);
          const Ob = hb?.slice() ?? [];
          Ob.push(...this.options.samplers), bb = Sb.defineCustomBindings(this.name, bb, Bb, Ob), ub = Bb, hb = Ob
        }
        this.options.defines = bb || "";
        const Hb = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let wb;
        wb = this.options.extraInitializationsAsync ? async () => {
          await (Hb?.()), await this.options.extraInitializationsAsync()
        }: Hb, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: Lb ?? this._shaderPath.vertex,
          fragment: Yb ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: ub || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: hb || this.options.samplers,
          defines: null !== bb ? bb : "",
          fallbacks: null,
          onCompiled: Ob ?? this.options.onCompiled,
          onError: Gb ?? null,
          indexParameters: Bb || this.options.indexParameters,
          processCodeAfterIncludes: Sb?.processCodeAfterIncludes ? (bb, ub) => Sb.processCodeAfterIncludes(this.name, bb, ub) : null,
          processFinalCode: Sb?.processFinalCode ? (bb, ub) => Sb.processFinalCode(this.name, bb, ub) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: wb
        }, this.options.engine) : this._drawWrapper.effect = new Ub.c(this._shaderPath, this.options.attributeNames, ub || this.options.uniforms, hb || this.options.samplerNames, this.options.engine, bb, void 0, Ob || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, wb), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !bb && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), ab._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.UX().onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    ab.ForceGLSL = !1, ab._CustomShaderCodeProcessing = {}
  },
  41277: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      Dispose: () => lb,
      DumpData: () => Ab,
      DumpDataAsync: () => ob,
      DumpFramebuffer: () => pb,
      DumpTools: () => Kb,
      EncodeImageAsync: () => Xb,
      RegisterDumpTools: () => Cb
    });
    var Bb = hb(39463),
      Ob = hb(41255),
      Gb = hb(39559),
      Ub = hb(36757),
      Lb = hb(36748),
      Yb = hb(38302),
      Sb = hb(39530),
      ab = hb(39467);
    let Hb = null;
    async function wb() {
      return Hb || (Hb = async function() {
        const bb = Lb.b.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        bb instanceof OffscreenCanvas && Yb.b.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: ub
        } = await Promise.resolve().then((() => hb(39296)));
        if (!ub.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const Bb = new ub(bb, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        Lb.b.Instances.pop(), Lb.b.OnEnginesDisposedObservable.add((bb => {
          Bb && bb !== Bb && !Bb.tC && 0 === Lb.b.Instances.length && lb()
        })), Bb.getCaps().parallelShaderCompile = void 0;
        const Gb = new Ob.e(Bb),
          {
            passPixelShader: Ub
          } = await hb.e(365).then((() => hb(60896))),
          Sb = new Ob.f({
            engine: Bb,
            name: Ub.name,
            fragmentShader: Ub.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: bb,
          dumpEngine: {
            engine: Bb,
            renderer: Gb,
            wrapper: Sb
          }
        }
      }()), await Hb
    }
    let Zb = (() => {
      var bb;
      let ub, hb = [];
      return bb = class {
        static async EncodeImageAsync(bb, ub, hb, Bb, Ob, Ub) {
          const Lb = await wb(),
            Yb = Lb.dumpEngine;
          Yb.engine.setSize(ub, hb, !0);
          const Sb = Yb.engine.createRawTexture(bb, ub, hb, 5, !1, !Ob, 1);
          return Yb.renderer.setViewport(), Yb.renderer.applyEffectWrapper(Yb.wrapper), Yb.wrapper.effect._bindTexture("textureSampler", Sb), Yb.renderer.draw(), Sb.dispose(), await new Promise(((bb, ub) => {
            Gb.k.ToBlob(Lb.canvas, (hb => {
              hb ? bb(hb) : ub(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), Bb, Ub)
          }))
        }
      }, (() => {
        const Ob = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ub = [ab.k], (0, Bb.h)(bb, null, ub, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: bb => "EncodeImageAsync" in bb,
            get: bb => bb.EncodeImageAsync
          },
          metadata: Ob
        }, null, hb), Ob && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ob
        }), (0, Bb.k)(bb, hb)
      })(), bb
    })();
    const Xb = Zb.EncodeImageAsync;
    async function pb(bb, ub, hb, Bb) {
      let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Gb = arguments.length > 5 ? arguments[5] : void 0,
        Ub = arguments.length > 6 ? arguments[6] : void 0;
      const Lb = await hb.readPixels(0, 0, bb, ub);
      Ab(bb, ub, new Uint8Array(Lb.buffer), Bb, Ob, Gb, !0, void 0, Ub)
    }
    async function ob(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Ob = arguments.length > 4 ? arguments[4] : void 0,
        Lb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        ab = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Hb = arguments.length > 7 ? arguments[7] : void 0;
      if (hb instanceof Float32Array) {
        const bb = new Uint8Array(hb.length);
        let ub = hb.length;
        for (; ub--;) {
          const Bb = hb[ub];
          bb[ub] = Math.round(255 * (0, Ub.Clamp)(Bb))
        }
        hb = bb
      }
      const wb = await Zb.EncodeImageAsync(hb, bb, ub, Bb, Lb, Hb);
      void 0 !== Ob && Gb.k.DownloadBlob(wb, Ob), wb.type !== Bb && Yb.b.Warn(`DumpData: The requested mimeType '${Bb}' is not supported. The result has mimeType '${wb.type}' instead.`);
      const Xb = await wb.arrayBuffer();
      return ab ? Xb : `data:${Bb};base64,${(0,Sb.i)(Xb)}`
    }

    function Ab(bb, ub, hb, Bb) {
      let Ob = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== Ob || Bb || (Ob = ""), ob(bb, ub, hb, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", Ob, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((bb => {
        Bb && Bb(bb)
      }))
    }

    function lb() {
      Hb && (Hb?.then((bb => {
        bb.canvas instanceof HTMLCanvasElement && bb.canvas.remove(), bb.dumpEngine && (bb.dumpEngine.engine.dispose(), bb.dumpEngine.renderer.dispose(), bb.dumpEngine.wrapper.dispose())
      })), Hb = null)
    }
    const Kb = {
      DumpData: Ab,
      DumpDataAsync: ob,
      DumpFramebuffer: pb,
      Dispose: lb
    };
    let Wb = !1;

    function Cb() {
      if (Wb) return;
      Wb = !0;
      Gb.k.DumpData = Ab, Gb.k.DumpDataAsync = ob, Gb.k.DumpFramebuffer = pb
    }
  },
  41260: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Zb,
      e: () => Xb,
      g: () => pb
    });
    var Bb = hb(39932),
      Ob = hb(41267),
      Gb = hb(39463),
      Ub = hb(41248),
      Lb = hb(39488),
      Yb = hb(41271),
      Sb = hb(39467);
    class ab extends Ub.c {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(bb, ub) {
        let hb = arguments.length > 4 ? arguments[4] : void 0;
        const Bb = {
          size: "number" === typeof ub ? ub : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: hb,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...ub
        };
        super(bb, Yb.h.FragmentUrl, {
          effectWrapper: "number" !== typeof ub && ub.effectWrapper ? void 0 : new Yb.h(bb, hb, Bb),
          ...Bb
        })
      }
      static _Parse(bb, ub, hb, Bb) {
        return Lb.c.Parse((() => new ab(bb.name, bb.options, ub, bb.renderTargetSamplingMode, bb._engine, bb.reusable)), bb, hb, Bb)
      }
    }(() => {
      var bb;
      let ub, hb = Ub.c,
        Bb = [];
      bb = class extends hb {
        get face() {
          return this._effectWrapper.face
        }
        set face(bb) {
          this._effectWrapper.face = bb
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(bb, ub) {
          let hb = arguments.length > 4 ? arguments[4] : void 0;
          const Ob = {
            size: "number" === typeof ub ? ub : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: hb,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...ub
          };
          super(bb, Yb.h.FragmentUrl, {
            effectWrapper: "number" !== typeof ub && ub.effectWrapper ? void 0 : new Yb.d(bb, hb, Ob),
            ...Ob
          }), (0, Gb.k)(this, Bb)
        }
        static _Parse(ub, hb, Bb, Ob) {
          return Lb.c.Parse((() => new bb(ub.name, ub.options, hb, ub.renderTargetSamplingMode, ub._engine, ub.reusable)), ub, Bb, Ob)
        }
      }, (() => {
        const Ob = "function" === typeof Symbol && Symbol.metadata ? Object.create(hb[Symbol.metadata] ?? null) : void 0;
        ub = [(0, Sb.K)()], (0, Gb.h)(bb, null, ub, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: bb => "face" in bb,
            get: bb => bb.face
          },
          metadata: Ob
        }, null, Bb), Ob && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ob
        })
      })()
    })();
    var Hb = hb(36757),
      wb = hb(39536);

    function Zb(bb, ub, hb, Bb, Ob, Gb, Lb, Yb) {
      const Sb = ub.UX();
      return ub.isReady = !1, Ob = Ob ?? ub.samplingMode, Bb = Bb ?? ub.type, Gb = Gb ?? ub.format, Lb = Lb ?? ub.width, Yb = Yb ?? ub.height, -1 === Bb && (Bb = 0), new Promise((ab => {
        const Hb = new Ub.c("postprocess", bb, null, null, 1, null, Ob, Sb, !1, void 0, Bb, void 0, null, !1, Gb);
        Hb.externalTextureSamplerBinding = !0;
        const wb = Sb.createRenderTargetTexture({
          width: Lb,
          height: Yb
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: Ob,
          type: Bb,
          format: Gb
        });
        Hb.onEffectCreatedObservable.addOnce((bb => {
          bb.executeWhenCompiled((() => {
            Hb.onApply = bb => {
              bb._bindTexture("textureSampler", ub), bb.setFloat2("scale", 1, 1)
            }, hb.postProcessManager.directRender([Hb], wb, !0), Sb.restoreDefaultFramebuffer(), Sb._releaseTexture(ub), Hb && Hb.dispose(), wb._swapAndDie(ub), ub.type = Bb, ub.format = 5, ub.isReady = !0, ab(ub)
          }))
        }))
      }))
    }
    async function Xb(bb, ub, Gb) {
      let Lb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Yb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Sb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        ab = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(bb) {
        if (bb.isReady()) return;
        if (bb.loadingError) throw new Error(bb.errorObject?.message || `Texture ${bb.name} errored while loading.`);
        const ub = bb.onLoadObservable;
        if (ub) return await new Promise((bb => ub.addOnce((() => bb()))));
        const hb = bb._texture?.onLoadedObservable;
        if (hb) return await new Promise((bb => hb.addOnce((() => bb()))));
        throw new Error(`Cannot determine readiness of texture ${bb.name}.`)
      }(bb);
      const wb = bb.getInternalTexture(),
        Zb = bb.is3D || !!wb?.is3D,
        {
          width: Xb,
          height: pb
        } = bb.getSize(),
        ob = ub ?? Xb,
        Ab = Gb ?? pb;
      if (Sb || Zb || function(bb) {
          switch (bb) {
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
        }(bb.textureFormat) || ob !== Xb || Ab !== pb) {
        if (bb.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${Sb?"RTT":"compression"} is not supported.`);
        return await async function(bb, ub, Gb, Lb, Yb) {
          let Sb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const ab = bb.ZN(),
            Hb = ab.UX(),
            wb = bb.getInternalTexture(),
            Zb = bb.is3D || !!wb?.is3D;
          let Xb;
          if (Hb.isWebGPU ? Zb ? await hb.e(361).then((() => hb(60871))) : bb.isCube ? await hb.e(362).then((() => hb(60878))) : await hb.e(363).then((() => hb(60887))) : Zb ? await hb.e(358).then((() => hb(60857))) : bb.isCube ? await hb.e(359).then((() => hb(60860))) : await hb.e(360).then((() => hb(60869))), Zb) Xb = new Ub.c("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: Bb.f.NEAREST_NEAREST_MIPNEAREST,
            engine: Hb,
            shaderLanguage: Hb.isWebGPU ? 1 : 0
          });
          else if (bb.isCube) {
            const bb = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            Xb = new Ub.c("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: Bb.f.NEAREST_NEAREST_MIPNEAREST,
              engine: Hb,
              defines: bb[Lb],
              shaderLanguage: Hb.isWebGPU ? 1 : 0
            })
          } else Xb = new Ub.c("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: Bb.f.NEAREST_NEAREST_MIPNEAREST,
            engine: Hb,
            shaderLanguage: Hb.isWebGPU ? 1 : 0
          });
          await new Promise((bb => {
            Xb.onEffectCreatedObservable.addOnce((ub => {
              ub.executeWhenCompiled((() => {
                bb(0)
              }))
            }))
          }));
          const pb = new Ob.d("temp", {
            width: ub,
            height: Gb
          }, ab, !1);
          Xb.onApply = function(ub) {
            ub.setTexture("textureSampler", bb), ub.setFloat("lod", Yb), ub.setInt("gamma", bb.gammaSpace ? 1 : 0), Zb && ub.setFloat("slice", Sb)
          };
          try {
            if (pb.renderTarget && wb) {
              const hb = wb.samplingMode;
              0 !== Yb ? bb.updateSamplingMode(Bb.f.NEAREST_NEAREST_MIPNEAREST) : bb.updateSamplingMode(Bb.f.NEAREST_NEAREST), ab.postProcessManager.directRender([Xb], pb.renderTarget, !0), bb.updateSamplingMode(hb);
              const Ob = await Hb.readPixels(0, 0, ub, Gb),
                Ub = new Uint8Array(Ob.buffer, Ob.byteOffset, Ob.byteLength);
              return Hb.unBindFramebuffer(pb.renderTarget), Ub
            }
            throw Error("Render to texture failed.")
          } finally {
            pb.dispose(), Xb.dispose()
          }
        }(bb, ob, Ab, Lb, Yb, ab)
      }
      let lb = await bb.readPixels(Lb, Yb);
      if (!lb) throw new Error(`Failed to read pixels from texture ${bb.name}.`);
      if (lb instanceof Float32Array) {
        const bb = new Uint8Array(lb.length);
        let ub = lb.length;
        for (; ub--;) {
          const hb = lb[ub];
          bb[ub] = Math.round(255 * (0, Hb.Clamp)(hb))
        }
        lb = bb
      }
      const Kb = ob * Ab,
        Wb = 4 * Kb;
      if (lb.length !== Wb) {
        const bb = 0 === Kb ? 0 : lb.length / Kb;
        if (1 === bb || 2 === bb || 3 === bb) {
          const ub = new Uint8Array(Wb);
          for (let hb = 0, Bb = 0, Ob = 0; hb < Kb; hb++, Ob += 4) {
            const hb = lb[Bb++];
            if (1 === bb) {
              ub[Ob] = hb, ub[Ob + 1] = hb, ub[Ob + 2] = hb, ub[Ob + 3] = 255;
              continue
            }
            const Gb = lb[Bb++];
            2 !== bb ? (ub[Ob] = hb, ub[Ob + 1] = Gb, ub[Ob + 2] = lb[Bb++], ub[Ob + 3] = 255) : (ub[Ob] = hb, ub[Ob + 1] = Gb, ub[Ob + 2] = 0, ub[Ob + 3] = 255)
          }
          return ub
        }
      }
      return lb
    }
    const pb = {
      CreateResizedCopy: function(bb, ub, hb) {
        let Gb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Ub = bb.ZN(),
          Lb = Ub.UX(),
          Yb = new Ob.d("resized" + bb.name, {
            width: ub,
            height: hb
          }, Ub, !bb.noMipmap, !0, bb._texture.type, !1, bb.samplingMode, !1);
        Yb.wrapU = bb.wrapU, Yb.wrapV = bb.wrapV, Yb.uOffset = bb.uOffset, Yb.vOffset = bb.vOffset, Yb.uScale = bb.uScale, Yb.vScale = bb.vScale, Yb.uAng = bb.uAng, Yb.vAng = bb.vAng, Yb.wAng = bb.wAng, Yb.coordinatesIndex = bb.coordinatesIndex, Yb.level = bb.level, Yb.anisotropicFilteringLevel = bb.anisotropicFilteringLevel, Yb._texture.isReady = !1, bb.wrapU = Bb.f.CLAMP_ADDRESSMODE, bb.wrapV = Bb.f.CLAMP_ADDRESSMODE;
        const Sb = new ab("pass", 1, null, Gb ? Bb.f.BILINEAR_SAMPLINGMODE : Bb.f.NEAREST_SAMPLINGMODE, Lb, !1, 0);
        return Sb.externalTextureSamplerBinding = !0, Sb.onEffectCreatedObservable.addOnce((ub => {
          ub.executeWhenCompiled((() => {
            Sb.onApply = function(ub) {
              ub.setTexture("textureSampler", bb)
            };
            const ub = Yb.renderTarget;
            ub && (Ub.postProcessManager.directRender([Sb], ub), Lb.unBindFramebuffer(ub), Yb.disposeFramebufferObjects(), Sb.dispose(), Yb.getInternalTexture().isReady = !0)
          }))
        })), Yb
      },
      ApplyPostProcess: Zb,
      ToHalfFloat: wb.i,
      FromHalfFloat: wb.b,
      GetTextureDataAsync: Xb
    }
  },
  41248: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Xb
    });
    var Bb = hb(39463),
      Ob = hb(39573),
      Gb = hb(36753),
      Ub = hb(36727),
      Lb = hb(39302),
      Yb = hb(39467),
      Sb = hb(39488),
      ab = hb(36762),
      Hb = hb(39350),
      wb = hb(39387),
      Zb = hb(41255);
    let Xb = (() => {
        var bb;
        let ub, Lb, Hb, Xb, pb, Ab, lb, Kb, Wb, Cb, db, rb, jb, nb, Db, xb, zb = [],
          gb = [],
          ib = [],
          vb = [],
          tb = [],
          Jb = [],
          eb = [],
          Nb = [],
          sb = [],
          Mb = [],
          mb = [],
          Ib = [],
          Pb = [],
          qb = [],
          Eb = [],
          yb = [],
          Vb = [],
          Fb = [],
          fb = [],
          kb = [],
          Tb = [],
          cb = [],
          Qb = [],
          Rb = [],
          bu = [],
          uu = [],
          hu = [],
          Bu = [],
          Ou = [];
        return bb = class {
          static get ForceGLSL() {
            return Zb.f.ForceGLSL
          }
          static set ForceGLSL(bb) {
            Zb.f.ForceGLSL = bb
          }
          static RegisterShaderCodeProcessing(bb, ub) {
            Zb.f.RegisterShaderCodeProcessing(bb, ub)
          }
          get name() {
            return this._effectWrapper.name
          }
          set name(bb) {
            this._effectWrapper.name = bb
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode
          }
          set alphaMode(bb) {
            this._effectWrapper.alphaMode = bb
          }
          get samples() {
            return this._samples
          }
          set samples(bb) {
            this._samples = Math.min(bb, this._engine.getCaps().maxMSAASamples), this._textures.forEach((bb => {
              bb.setSamples(this._samples)
            }))
          }
          get shaderLanguage() {
            return this._shaderLanguage
          }
          getEffectName() {
            return this._fragmentUrl
          }
          set onActivate(bb) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), bb && (this._onActivateObserver = this.onActivateObservable.add(bb))
          }
          set onSizeChanged(bb) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(bb)
          }
          set onApply(bb) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(bb)
          }
          set onBeforeRender(bb) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(bb)
          }
          set onAfterRender(bb) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(bb)
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd]
          }
          set inputTexture(bb) {
            this._forcedOutputTexture = bb
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty())
          }
          getCamera() {
            return this.lT
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.M_(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(ub, hb, Lb, Yb, Sb, ab) {
            let Hb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              wb = arguments.length > 7 ? arguments[7] : void 0,
              Xb = arguments.length > 8 ? arguments[8] : void 0,
              pb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              Ab = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              lb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              Kb = arguments.length > 12 ? arguments[12] : void 0,
              Wb = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              Cb = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              db = arguments.length > 15 ? arguments[15] : void 0,
              rb = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, Bb.k)(this, zb), null), this.uniqueId = (0, Bb.k)(this, gb, void 0), this.width = ((0, Bb.k)(this, ib), (0, Bb.k)(this, vb, -1)), this.height = ((0, Bb.k)(this, tb), (0, Bb.k)(this, Jb, -1)), this.nodeMaterialSource = ((0, Bb.k)(this, eb), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, Bb.k)(this, Nb, void 0), this.clearColor = ((0, Bb.k)(this, sb), (0, Bb.k)(this, Mb, void 0)), this.autoClear = ((0, Bb.k)(this, mb), (0, Bb.k)(this, Ib, !0)), this.forceAutoClearInAlphaMode = ((0, Bb.k)(this, Pb), (0, Bb.k)(this, qb, !1)), this.alphaConstants = ((0, Bb.k)(this, Eb), (0, Bb.k)(this, yb, void 0)), this.animations = ((0, Bb.k)(this, Vb), []), this.enablePixelPerfectMode = (0, Bb.k)(this, Fb, !1), this.forceFullscreenViewport = ((0, Bb.k)(this, fb), (0, Bb.k)(this, kb, !0)), this.inspectableCustomProperties = (0, Bb.k)(this, Tb), this.scaleMode = (0, Bb.k)(this, cb, 1), this.alwaysForcePOT = ((0, Bb.k)(this, Qb), (0, Bb.k)(this, Rb, !1)), this._samples = ((0, Bb.k)(this, bu), (0, Bb.k)(this, uu, 1)), this.adaptScaleToCurrentViewport = ((0, Bb.k)(this, hu), (0, Bb.k)(this, Bu, !1)), this.doNotSerialize = ((0, Bb.k)(this, Ou), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new Ob.h(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new Ub.m(1, 1), this._texelSize = Ub.m.Zero(), this.onActivateObservable = new Gb.e, this.onSizeChangedObservable = new Gb.e, this.onApplyObservable = new Gb.e, this.onBeforeRenderObservable = new Gb.e, this.onAfterRenderObservable = new Gb.e, this.XN = new Gb.e, ob();
            let jb, nb = 1,
              Db = null;
            if (Lb && !Array.isArray(Lb)) {
              const bb = Lb;
              Lb = bb.uniforms ?? null, Yb = bb.samplers ?? null, nb = bb.size ?? 1, ab = bb.camera ?? null, Hb = bb.samplingMode ?? 1, wb = bb.engine, Xb = bb.reusable, pb = Array.isArray(bb.defines) ? bb.defines.join("\n") : bb.defines ?? null, Ab = bb.textureType ?? 0, lb = bb.vertexUrl ?? "postprocess", Kb = bb.indexParameters, Wb = bb.blockCompilation ?? !1, Cb = bb.textureFormat ?? 5, db = bb.shaderLanguage ?? 0, Db = bb.uniformBuffers ?? null, rb = bb.extraInitializations, jb = bb.effectWrapper
            } else Sb && (nb = "number" === typeof Sb ? Sb : {
              width: Sb.width,
              height: Sb.height
            });
            if (this._useExistingThinPostProcess = !!jb, this._effectWrapper = jb ?? new Zb.f({
                name: ub,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: hb,
                engine: wb || ab?.ZN().UX(),
                uniforms: Lb,
                samplers: Yb,
                uniformBuffers: Db,
                defines: pb,
                vertexUrl: lb,
                indexParameters: Kb,
                blockCompilation: !0,
                shaderLanguage: db,
                extraInitializations: void 0
              }), this.name = ub, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != ab ? (this.lT = ab, this._scene = ab.ZN(), ab.attachPostProcess(this), this._engine = this._scene.UX(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : wb && (this._engine = wb, this._engine.postProcesses.push(this)), this._options = nb, this.renderTargetSamplingMode = Hb || 1, this._reusable = Xb || !1, this._textureType = Ab, this._textureFormat = Cb, this._shaderLanguage = db || 0, this._samplers = Yb || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = hb, this._vertexUrl = lb, this._parameters = Lb || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = Db || [], this._indexParameters = Kb, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const ub = [];
              this._gatherImports(this._engine.isWebGPU && !bb.ForceGLSL, ub), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(Wb, pb, rb, ub)
            }
          }
          _gatherImports() {
            let bb = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? bb.push(Promise.all([hb.e(357).then((() => hb(60837)))])) : bb.push(Promise.all([hb.e(346).then((() => hb(60605)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          UX() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(bb) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = bb, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new Ob.h(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Bb = arguments.length > 3 ? arguments[3] : void 0,
              Ob = arguments.length > 4 ? arguments[4] : void 0,
              Gb = arguments.length > 5 ? arguments[5] : void 0,
              Ub = arguments.length > 6 ? arguments[6] : void 0,
              Lb = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(bb, ub, hb, Bb, Ob, Gb, Ub, Lb), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(bb, ub) {
            let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let Ob = 0; Ob < this._textureCache.length; Ob++)
              if (this._textureCache[Ob].texture.width === bb.width && this._textureCache[Ob].texture.height === bb.height && this._textureCache[Ob].postProcessChannel === hb && this._textureCache[Ob].texture._generateDepthBuffer === ub.generateDepthBuffer && this._textureCache[Ob].texture.samples === ub.samples) return this._textureCache[Ob].texture;
            const Bb = this._engine.createRenderTargetTexture(bb, ub);
            return this._textureCache.push({
              texture: Bb,
              postProcessChannel: hb,
              lastUsedRenderId: -1
            }), Bb
          }
          _flushTextureCache() {
            const bb = this._renderId;
            for (let ub = this._textureCache.length - 1; ub >= 0; ub--)
              if (bb - this._textureCache[ub].lastUsedRenderId > 100) {
                let bb = !1;
                for (let hb = 0; hb < this._textures.length; hb++)
                  if (this._textures.data[hb] === this._textureCache[ub].texture) {
                    bb = !0;
                    break
                  } bb || (this._textureCache[ub].texture.dispose(), this._textureCache.splice(ub, 1))
              }
          }
          resize(bb, ub) {
            let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Ob = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = bb, this.height = ub;
            let Gb = null;
            if (hb)
              for (let Yb = 0; Yb < hb._postProcesses.length; Yb++)
                if (null !== hb._postProcesses[Yb]) {
                  Gb = hb._postProcesses[Yb];
                  break
                } const Ub = {
                width: this.width,
                height: this.height
              },
              Lb = {
                generateMipMaps: Bb,
                generateDepthBuffer: Ob || Gb === this,
                generateStencilBuffer: (Ob || Gb === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(Ub, Lb, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(Ub, Lb, 1)), this._texelSize.M_(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let bb;
            if (this._shareOutputWithPostProcess) bb = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) bb = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let ub;
              bb = this.inputTexture;
              for (let hb = 0; hb < this._textureCache.length; hb++)
                if (this._textureCache[hb].texture === bb) {
                  ub = this._textureCache[hb];
                  break
                } ub && (ub.lastUsedRenderId = this._renderId)
            }
            return bb
          }
          activate(bb) {
            let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              hb = arguments.length > 2 ? arguments[2] : void 0;
            const Bb = null === bb || void 0 !== bb.cameraRigMode ? bb || this.lT : null,
              Ob = Bb?.ZN() ?? bb,
              Gb = Ob.UX(),
              Ub = Gb.getCaps().maxTextureSize,
              Lb = (ub ? ub.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              Yb = (ub ? ub.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let Sb = this._options.width || Lb,
              ab = this._options.height || Yb;
            const Hb = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let Zb = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const bb = Gb.currentViewport;
                bb && (Sb *= bb.width, ab *= bb.height)
              }(Hb || this.alwaysForcePOT) && (this._options.width || (Sb = Gb.needPOTTextures ? (0, wb.i)(Sb, Ub, this.scaleMode) : Sb), this._options.height || (ab = Gb.needPOTTextures ? (0, wb.i)(ab, Ub, this.scaleMode) : ab)), this.width === Sb && this.height === ab && (Zb = this._getTarget()) || this.resize(Sb, ab, Bb, Hb, hb), this._textures.forEach((bb => {
                bb.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(bb, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return Zb || (Zb = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.M_(Lb / Sb, Yb / ab), this._engine.bindFramebuffer(Zb, 0, Lb, Yb, this.forceFullscreenViewport)) : (this._scaleRatio.M_(1, 1), this._engine.bindFramebuffer(Zb, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(Bb), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : Ob.clearColor, Ob._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), Zb
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
            let bb;
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.UX().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), bb = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", bb?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
          }
          _disposeTextureCache() {
            for (let bb = this._textureCache.length - 1; bb >= 0; bb--) this._textureCache[bb].texture.dispose();
            this._textureCache.length = 0
          }
          setPrePassRenderer(bb) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = bb.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
          }
          dispose(bb) {
            let ub;
            if (bb = bb || this.lT, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (ub = this._parentContainer.postProcesses.indexOf(this), ub > -1 && this._parentContainer.postProcesses.splice(ub, 1), this._parentContainer = null), ub = this._engine.postProcesses.indexOf(this), -1 !== ub && this._engine.postProcesses.splice(ub, 1), this.XN.notifyObservers(), bb) {
              if (bb.detachPostProcess(this), ub = bb._postProcesses.indexOf(this), 0 === ub && bb._postProcesses.length > 0) {
                const bb = this.lT._getFirstPostProcess();
                bb && bb.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const bb = Sb.c.Serialize(this),
              ub = this.getCamera() || this._scene && this._scene.activeCamera;
            return bb.customType = "BABYLON." + this.getClassName(), bb.cameraId = ub ? ub.id : null, bb.reusable = this._reusable, bb.textureType = this._textureType, bb.fragmentUrl = this._fragmentUrl, bb.parameters = this._parameters, bb.samplers = this._samplers, bb.uniformBuffers = this._uniformBuffers, bb.options = this._options, bb.defines = this._postProcessDefines, bb.textureFormat = this._textureFormat, bb.vertexUrl = this._vertexUrl, bb.indexParameters = this._indexParameters, bb
          }
          clone() {
            const ub = this.serialize();
            ub._engine = this._engine, ub.cameraId = null;
            const hb = bb.Parse(ub, this._scene, "");
            return hb ? (hb.onActivateObservable = this.onActivateObservable.clone(), hb.onSizeChangedObservable = this.onSizeChangedObservable.clone(), hb.onApplyObservable = this.onApplyObservable.clone(), hb.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), hb.onAfterRenderObservable = this.onAfterRenderObservable.clone(), hb._prePassEffectConfiguration = this._prePassEffectConfiguration, hb) : null
          }
          static Parse(bb, ub, hb) {
            const Bb = (0, ab.d)(bb.customType);
            if (!Bb || !Bb._Parse) return null;
            const Ob = ub ? ub.getCameraById(bb.cameraId) : null;
            return Bb._Parse(bb, Ob, ub, hb)
          }
          static _Parse(ub, hb, Bb, Ob) {
            return Sb.c.Parse((() => new bb(ub.name, ub.fragmentUrl, ub.parameters, ub.samplers, ub.options, hb, ub.renderTargetSamplingMode, ub._engine, ub.reusable, ub.defines, ub.textureType, ub.vertexUrl, ub.indexParameters, !1, ub.textureFormat)), ub, Bb, Ob)
          }
        }, (() => {
          const hb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ub = [(0, Yb.K)()], Lb = [(0, Yb.K)()], Hb = [(0, Yb.K)()], Xb = [(0, Yb.K)()], pb = [(0, Yb.K)()], Ab = [(0, Yb.t)()], lb = [(0, Yb.K)()], Kb = [(0, Yb.K)()], Wb = [(0, Yb.K)()], Cb = [(0, Yb.K)()], db = [(0, Yb.K)()], rb = [(0, Yb.K)()], jb = [(0, Yb.K)()], nb = [(0, Yb.K)()], Db = [(0, Yb.K)("samples")], xb = [(0, Yb.K)()], (0, Bb.h)(bb, null, Lb, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: bb => "name" in bb,
              get: bb => bb.name
            },
            metadata: hb
          }, null, zb), (0, Bb.h)(bb, null, Wb, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: bb => "alphaMode" in bb,
              get: bb => bb.alphaMode
            },
            metadata: hb
          }, null, zb), (0, Bb.h)(null, null, ub, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: bb => "uniqueId" in bb,
              get: bb => bb.uniqueId,
              set: (bb, ub) => {
                bb.uniqueId = ub
              }
            },
            metadata: hb
          }, gb, ib), (0, Bb.h)(null, null, Hb, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: bb => "width" in bb,
              get: bb => bb.width,
              set: (bb, ub) => {
                bb.width = ub
              }
            },
            metadata: hb
          }, vb, tb), (0, Bb.h)(null, null, Xb, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: bb => "height" in bb,
              get: bb => bb.height,
              set: (bb, ub) => {
                bb.height = ub
              }
            },
            metadata: hb
          }, Jb, eb), (0, Bb.h)(null, null, pb, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: bb => "renderTargetSamplingMode" in bb,
              get: bb => bb.renderTargetSamplingMode,
              set: (bb, ub) => {
                bb.renderTargetSamplingMode = ub
              }
            },
            metadata: hb
          }, Nb, sb), (0, Bb.h)(null, null, Ab, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "clearColor" in bb,
              get: bb => bb.clearColor,
              set: (bb, ub) => {
                bb.clearColor = ub
              }
            },
            metadata: hb
          }, Mb, mb), (0, Bb.h)(null, null, lb, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: bb => "autoClear" in bb,
              get: bb => bb.autoClear,
              set: (bb, ub) => {
                bb.autoClear = ub
              }
            },
            metadata: hb
          }, Ib, Pb), (0, Bb.h)(null, null, Kb, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: bb => "forceAutoClearInAlphaMode" in bb,
              get: bb => bb.forceAutoClearInAlphaMode,
              set: (bb, ub) => {
                bb.forceAutoClearInAlphaMode = ub
              }
            },
            metadata: hb
          }, qb, Eb), (0, Bb.h)(null, null, Cb, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: bb => "alphaConstants" in bb,
              get: bb => bb.alphaConstants,
              set: (bb, ub) => {
                bb.alphaConstants = ub
              }
            },
            metadata: hb
          }, yb, Vb), (0, Bb.h)(null, null, db, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: bb => "enablePixelPerfectMode" in bb,
              get: bb => bb.enablePixelPerfectMode,
              set: (bb, ub) => {
                bb.enablePixelPerfectMode = ub
              }
            },
            metadata: hb
          }, Fb, fb), (0, Bb.h)(null, null, rb, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: bb => "forceFullscreenViewport" in bb,
              get: bb => bb.forceFullscreenViewport,
              set: (bb, ub) => {
                bb.forceFullscreenViewport = ub
              }
            },
            metadata: hb
          }, kb, Tb), (0, Bb.h)(null, null, jb, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: bb => "scaleMode" in bb,
              get: bb => bb.scaleMode,
              set: (bb, ub) => {
                bb.scaleMode = ub
              }
            },
            metadata: hb
          }, cb, Qb), (0, Bb.h)(null, null, nb, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: bb => "alwaysForcePOT" in bb,
              get: bb => bb.alwaysForcePOT,
              set: (bb, ub) => {
                bb.alwaysForcePOT = ub
              }
            },
            metadata: hb
          }, Rb, bu), (0, Bb.h)(null, null, Db, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: bb => "_samples" in bb,
              get: bb => bb._samples,
              set: (bb, ub) => {
                bb._samples = ub
              }
            },
            metadata: hb
          }, uu, hu), (0, Bb.h)(null, null, xb, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: bb => "adaptScaleToCurrentViewport" in bb,
              get: bb => bb.adaptScaleToCurrentViewport,
              set: (bb, ub) => {
                bb.adaptScaleToCurrentViewport = ub
              }
            },
            metadata: hb
          }, Bu, Ou), hb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: hb
          })
        })(), bb
      })(),
      pb = !1;

    function ob() {
      pb || (pb = !0, Hb.d.prototype.setTextureFromPostProcess = function(bb, ub, hb) {
        let Bb = null;
        ub && (ub._forcedOutputTexture ? Bb = ub._forcedOutputTexture : ub._textures.data[ub._currentRenderTextureInd] && (Bb = ub._textures.data[ub._currentRenderTextureInd])), this._bindTexture(bb, Bb?.texture ?? null, hb)
      }, Hb.d.prototype.setTextureFromPostProcessOutput = function(bb, ub, hb) {
        this._bindTexture(bb, ub?._outputTexture?.texture ?? null, hb)
      }, Lb.c.prototype.setTextureFromPostProcess = function(bb, ub) {
        this._engine.setTextureFromPostProcess(this._samplers[bb], ub, bb)
      }, Lb.c.prototype.setTextureFromPostProcessOutput = function(bb, ub) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[bb], ub, bb)
      }, (0, ab.f)("BABYLON.PostProcess", Xb))
    }
  },
  41271: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ub,
      h: () => Gb
    });
    var Bb = hb(41255),
      Ob = hb(36748);
    class Gb extends Bb.f {
      _gatherImports(bb, ub) {
        bb ? (this._webGPUReady = !0, ub.push(Promise.all([hb.e(364).then((() => hb(60891)))]))) : ub.push(Promise.all([hb.e(365).then((() => hb(60896)))])), super._gatherImports(bb, ub)
      }
      constructor(bb) {
        let ub = arguments.length > 2 ? arguments[2] : void 0;
        const hb = {
          name: bb,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Ob.b.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: Gb.FragmentUrl,
          ...ub
        };
        hb.engine || (hb.engine = Ob.b.LastCreatedEngine), super(hb)
      }
    }
    Gb.FragmentUrl = "pass";
    class Ub extends Bb.f {
      _gatherImports(bb, ub) {
        bb ? (this._webGPUReady = !0, ub.push(Promise.all([hb.e(366).then((() => hb(60903)))]))) : ub.push(Promise.all([hb.e(367).then((() => hb(60905)))])), super._gatherImports(bb, ub)
      }
      constructor(bb) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: bb,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Ob.b.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: Ub.FragmentUrl,
          defines: "#define POSITIVEX"
        }), this._face = 0
      }
      get face() {
        return this._face
      }
      set face(bb) {
        if (!(bb < 0 || bb > 5)) switch (this._face = bb, this._face) {
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
    Ub.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);