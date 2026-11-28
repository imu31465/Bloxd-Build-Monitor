export const id = 630;
export const ids = [630];
export const modules = {
  54051: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Bb
    });
    var eb = Mb(38318),
      Hb = Mb(38285),
      pb = Mb(42152),
      Vb = Mb(41819),
      gb = Mb(41611),
      lb = Mb(39971),
      Lb = Mb(41806),
      Ib = Mb(41827),
      Ob = Mb(38299),
      Ub = Mb(41565),
      tb = Mb(41777),
      Cb = Mb(41858);
    class Eb {
      get renderList() {
        return this._renderList
      }
      set renderList(bb) {
        this._renderList !== bb && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), bb && (this._unObserveRenderList = (0, Ob.h)(bb, this._renderListHasChanged)), this._renderList = bb)
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
              const wb = this._renderPassIds[bb];
              this._engine._renderPassNames[wb] = `${this._name}#${bb}`
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
      setMaterialForRendering(bb, wb) {
        let Mb;
        Mb = Array.isArray(bb) ? bb : [bb];
        for (let eb = 0; eb < Mb.length; ++eb)
          for (let bb = 0; bb < this.options.numPasses; ++bb) {
            let Hb = Mb[eb];
            Mb[eb].QJ && (Hb = Mb[eb].opb), Hb.setMaterialForRenderPass(this._renderPassIds[bb], void 0 !== wb ? Array.isArray(wb) ? wb[bb] : wb : void 0)
          }
      }
      _freezeActiveMeshes(bb) {
        this._freezeActiveMeshesCancel = (0, Ub.e)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, bb)
            for (let bb = 0; bb < this._activeMeshes.length; bb++) this._activeMeshes.data[bb]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((bb, wb) => {
          this._freezeActiveMeshesCancel = null, wb ? (lb.b.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), bb && lb.b.Error(bb)) : (lb.b.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), bb && (lb.b.Error(bb), bb.stack && lb.b.Error(bb.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let bb = 0; bb < this._activeMeshes.length; bb++) this._activeMeshes.data[bb]._unFreeze();
        this._isFrozen = !1
      }
      constructor(bb, wb, Mb) {
        this._unObserveRenderList = null, this._renderListHasChanged = (bb, wb) => {
          const Mb = this._renderList ? this._renderList.length : 0;
          if (0 === wb && Mb > 0 || 0 === Mb)
            for (const eb of this._scene.meshes) eb._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new eb.b, this.onAfterRenderObservable = new eb.b, this.onBeforeRenderingManagerRenderObservable = new eb.b, this.onAfterRenderingManagerRenderObservable = new eb.b, this.onInitRenderingObservable = new eb.b, this.onFinishRenderingObservable = new eb.b, this.onFastPathRenderObservable = new eb.b, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new tb.h(256), this._activeBoundingBoxes = new tb.h(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = bb, this._scene = wb, this._engine = this._scene.DC(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...Mb
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new Ib.e(wb), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const bb of this._scene.lights) bb.getTypeID() === Cb.c.LIGHTTYPEID_CLUSTERED_CONTAINER && bb.isSupported && bb._updateBatches(this.activeCamera).render()
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
      _createSceneUBO(bb, wb) {
        const Mb = this._scene.DC(),
          eb = new Lb.c(Mb, void 0, wb, bb, void 0, !1);
        return eb.addUniform("viewProjection", 16), wb && eb.addUniform("viewProjectionR", 16), eb.addUniform("view", 16), eb.addUniform("projection", 16), eb.addUniform("vEyePosition", 4), eb.addUniform("inverseProjection", 16), eb
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const bb = this._engine._currentRenderTarget,
          wb = !(!bb || !bb.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const bb = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${bb} for ${this.name}`, wb)), this._sceneUBOIsMultiview.push(wb)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== wb && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, wb), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = wb);
        const Mb = this._sceneUBOs[this._currentSceneUBOIndex++];
        return Mb.unbindEffect(), Mb
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
      isReadyForRendering(bb, wb) {
        this.prepareRenderList(), this.initRender(bb, wb);
        const Mb = this._checkReadiness();
        return this.finishRender(), Mb
      }
      prepareRenderList() {
        const bb = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let wb = 0; wb < this._waitingRenderList.length; wb++) {
              const Mb = this._waitingRenderList[wb],
                eb = bb.getMeshById(Mb);
              eb && this.renderList.push(eb)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const bb = this._scene.meshes;
          for (let wb = 0; wb < bb.length; wb++) {
            const Mb = bb[wb];
            this.renderListPredicate(Mb) && this.renderList.push(Mb)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(bb, wb) {
        const Mb = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), Mb && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(Mb.getViewMatrix(), Mb.getProjectionMatrix(!0)), this._scene._activeCamera = Mb, this._engine.setViewport(Mb.rigParent ? Mb.rigParent.viewport : Mb.viewport, bb, wb)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const bb = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (bb.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), bb._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== bb.activeCamera && bb.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), bb.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Mb = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[bb], this.onBeforeRenderObservable.notifyObservers(bb);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(bb);
        else {
          const wb = this._prepareRenderingManager(bb),
            Mb = this._scene.getOutlineRenderer?.(),
            eb = Mb?.enabled;
          Mb && (Mb.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(bb), this._renderingManager.render(this.customRenderFunction, wb, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(bb), Mb && (Mb.enabled = eb)
        }
        wb || this.onAfterRenderObservable.notifyObservers(bb), this._engine.currentRenderPassId = Mb
      }
      _checkReadiness() {
        const bb = this._scene,
          wb = this._engine.currentRenderPassId;
        let Mb = !0;
        bb.getViewMatrix() || bb.updateTransformMatrix();
        const eb = this.options.numPasses;
        for (let Hb = 0; Hb < eb && Mb; Hb++) {
          const wb = this.renderList ? this.renderList : bb.frameGraph ? bb.meshes : bb.getActiveMeshes().data,
            pb = this.renderList || bb.frameGraph ? wb.length : bb.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[Hb], this.onBeforeRenderObservable.notifyObservers(Hb);
          let Vb = null,
            gb = pb;
          this.getCustomRenderList && (Vb = this.getCustomRenderList(Hb, wb, pb), Vb && (gb = Vb.length)), Vb || (Vb = wb), this.options.doNotChangeAspectRatio || bb.updateTransformMatrix(!0);
          for (let bb = 0; bb < gb && Mb; ++bb) {
            const wb = Vb[bb];
            if (!wb.isEnabled() || wb.isBlocked || !wb.isVisible || !wb.oR) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(wb, this.refreshRate, !0)) {
                Mb = !1;
                continue
              }
            } else if (!wb.isReady(!0)) {
              Mb = !1;
              continue
            }
            let eb = wb._edgesRenderer,
              Hb = wb.hasThinInstances;
            if (wb.QJ) {
              const bb = wb.opb;
              bb.edgesShareWithInstances && bb._edgesRenderer?.isEnabled && (eb = bb._edgesRenderer, Hb = !0)
            } else wb.ypb && wb.edgesShareWithInstances && (Hb = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && eb?.isEnabled && (eb.isReady(Hb) || (Mb = !1))
          }
          if (this.renderParticles && bb.particlesEnabled) {
            const wb = this.particleSystemList || bb.kR;
            for (const bb of wb) bb.isReady() || (Mb = !1)
          }
          if (this.renderSprites && bb.spritesEnabled) {
            const wb = this.spriteManagerList || bb.spriteManagers;
            if (wb)
              for (const eb of wb) bb.activeCamera && 0 === (eb.layerMask & bb.activeCamera.layerMask) || eb.isReady && !eb.isReady() && (Mb = !1)
          }
          this.onAfterRenderObservable.notifyObservers(Hb), eb > 1 && (bb.incrementRenderId(), bb.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = wb, Mb
      }
      _prepareRenderingManager() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Mb = this._scene;
        let eb, Hb, pb = null;
        const Vb = this.renderList ? this.renderList : Mb.frameGraph ? Mb.meshes : Mb.getActiveMeshes().data,
          gb = this.renderList || Mb.frameGraph ? Vb.length : Mb.getActiveMeshes().length;
        if (this.getCustomRenderList && (pb = this.getCustomRenderList(bb, Vb, gb)), pb) eb = pb.length, Hb = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !wb && !this._engine.isWebGPU) return Vb;
          this._defaultRenderListPrepared = !0, pb = Vb, eb = gb, Hb = !this.renderList || this.forceLayerMaskCheck
        }
        const lb = Mb.activeCamera,
          Lb = this.cameraForLOD ?? lb,
          Ib = Mb.getBoundingBoxRenderer?.();
        if (Mb._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && Ib) {
            Ib.reset();
            for (let bb = 0; bb < this._activeBoundingBoxes.length; bb++) {
              const wb = this._activeBoundingBoxes.data[bb];
              Ib.renderList.push(wb)
            }
          }
          return pb
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), Ib && Ib.reset(), this.renderMeshes) {
          const bb = Mb.getRenderId(),
            wb = Mb.getFrameId();
          for (let Vb = 0; Vb < eb; Vb++) {
            const eb = pb[Vb];
            if (eb && !eb.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(eb, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!eb.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let pb, Vb;
              if (Lb) {
                const bb = eb._internalAbstractMeshDataInfo._currentLOD.get(Lb);
                bb && bb[1] === wb ? pb = bb[0] : (pb = Mb.customLODSelector ? Mb.customLODSelector(eb, Lb) : eb.getLOD(Lb), bb ? (bb[0] = pb, bb[1] = wb) : eb._internalAbstractMeshDataInfo._currentLOD.set(Lb, [pb, wb]))
              } else pb = eb;
              if (!pb) continue;
              if (pb !== eb && 0 !== pb.billboardMode && pb.computeWorldMatrix(), pb._preActivateForIntermediateRendering(bb), Vb = !(!Hb || !lb) && 0 === (eb.layerMask & lb.layerMask), eb.isEnabled() && eb.isVisible && eb.oR && !Vb) {
                if (this._activeMeshes.push(eb), pb._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, pb !== eb && pb._activate(bb, !0), this.enableBoundingBoxRendering && Ib && Ib._preActiveMesh(eb), eb._activate(bb, !0) && eb.oR.length) {
                  eb.QJ ? eb._internalAbstractMeshDataInfo._actAsRegularMesh && (pb = eb) : pb._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, pb._internalAbstractMeshDataInfo._isActiveIntermediate = !0, Mb._prepareSkeleton(pb);
                  for (let bb = 0; bb < pb.oR.length; bb++) {
                    const wb = pb.oR[bb];
                    this.enableBoundingBoxRendering && Ib && Ib._evaluateSubMesh(eb, wb), this._renderingManager.dispatch(wb, pb)
                  }
                }
                eb._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && Ib && wb)
          for (let Ob = 0; Ob < Ib.renderList.length; Ob++) {
            const bb = Ib.renderList.data[Ob];
            this._activeBoundingBoxes.push(bb)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const bb = this.particleSystemList || Mb.kR;
          for (let wb = 0; wb < bb.length; wb++) {
            const Mb = bb[wb],
              eb = Mb.emitter;
            Mb.isStarted() && eb && (!eb.position || eb.isEnabled()) && this._renderingManager.dispatchParticles(Mb)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return pb
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(bb, wb, Mb, eb)
      }
      setRenderingAutoClearDepthStencil(bb, wb) {
        let Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          eb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(bb, wb, Mb, eb), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const bb = new Eb(this.name, this._scene, this.options);
        return this.renderList && (bb.renderList = this.renderList.slice(0)), bb
      }
      dispose() {
        const bb = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          wb = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let Mb = 0; Mb < wb; Mb++) {
          const wb = bb[Mb];
          wb && void 0 !== wb.getMaterialForRenderPass(this.renderPassId) && wb.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const Mb of this._sceneUBOs) Mb.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === Eb.REFRESHRATE_RENDER_ONCE && (this.refreshRate = Eb.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    Eb.REFRESHRATE_RENDER_ONCE = 0, Eb.REFRESHRATE_RENDER_ONEVERYFRAME = 1, Eb.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var Fb = Mb(41554);
    class Bb extends pb.f {
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
      setMaterialForRendering(bb, wb) {
        this._objectRenderer.setMaterialForRendering(bb, wb)
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
        const wb = this.RJ();
        wb && wb.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(bb, wb, Mb) {
        let Vb, gb, Lb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Ib = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Ob = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Ub = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          tb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : pb.f.TRILINEAR_SAMPLINGMODE,
          Cb = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          Fb = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          Bb = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          sb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          mb = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          hb = arguments.length > 13 ? arguments[13] : void 0,
          zb = arguments.length > 14 ? arguments[14] : void 0,
          Xb = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          xb = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          jb = !0,
          Kb = !1;
        if ("object" === typeof Lb) {
          const bb = Lb;
          Lb = !!bb.generateMipMaps, Ib = bb.doNotChangeAspectRatio ?? !0, Ob = bb.type ?? 0, Ub = !!bb.isCube, tb = bb.samplingMode ?? pb.f.TRILINEAR_SAMPLINGMODE, Cb = bb.generateDepthBuffer ?? !0, Fb = !!bb.generateStencilBuffer, Bb = !!bb.isMulti, sb = bb.format ?? 5, mb = !!bb.delayAllocation, hb = bb.samples, zb = bb.creationFlags, Xb = !!bb.noColorAttachment, xb = !!bb.useSRGBBuffer, Vb = bb.colorAttachment, jb = bb.gammaSpace ?? jb, gb = bb.existingObjectRenderer, Kb = !!bb.enableClusteredLights
        }
        if (super(null, Mb, !Lb, void 0, tb, void 0, void 0, void 0, void 0, sb), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new eb.b, this.onAfterUnbindObservable = new eb.b, this.onClearObservable = new eb.b, this.onResizeObservable = new eb.b, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = Hb.o.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(Mb = this.RJ())) return;
        const rb = this.RJ().DC();
        this._gammaSpace = jb, this._coordinatesMode = pb.f.PROJECTION_MODE, this.name = bb, this.isRenderTarget = !0, this._initialSizeParameter = wb, this._dontDisposeObjectRenderer = !!gb, this._processSizeParameter(wb), this._objectRenderer = gb ?? new Eb(bb, Mb, {
          numPasses: Ub ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: Ib,
          enableClusteredLights: Kb
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const bb = this._scene;
          if (!this._disableEngineStages)
            for (const wb of bb._beforeRenderTargetClearStage) wb.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(rb) : this.skipInitialClear || rb.clear(this.clearColor ?? bb.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || bb.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const wb of bb._beforeRenderTargetDrawStage) wb.action(this, this._currentFaceIndex, this._currentLayer);
          rb._debugPushGroup && rb._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (rb._debugPopGroup && rb._debugPopGroup(), !this._disableEngineStages)
            for (const wb of this._scene._afterRenderTargetDrawStage) wb.action(this, this._currentFaceIndex, this._currentLayer);
          const bb = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const wb of this._scene._afterRenderTargetPostProcessStage) wb.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = bb), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), rb) : lb.b.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(rb) : this.skipInitialClear || rb.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = rb.onResizeObservable.add((() => {})), this._generateMipMaps = !!Lb, this._doNotChangeAspectRatio = Ib, Bb || (this._renderTargetOptions = {
          generateMipMaps: Lb,
          type: Ob,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: Cb,
          generateStencilBuffer: Fb,
          samples: hb,
          creationFlags: zb,
          noColorAttachment: Xb,
          useSRGBBuffer: xb,
          colorAttachment: Vb,
          label: this.name
        }, this.samplingMode === pb.f.NEAREST_SAMPLINGMODE && (this.wrapU = pb.f.CLAMP_ADDRESSMODE, this.wrapV = pb.f.CLAMP_ADDRESSMODE), mb || (Ub ? (this._renderTarget = Mb.DC().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = pb.f.INVCUBIC_MODE, this._textureMatrix = Hb.b.Identity()) : this._renderTarget = Mb.DC().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== hb && (this.samples = hb)))
      }
      createDepthStencilTexture() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          pb = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(bb, wb, Mb, eb, Hb, pb)
      }
      _processSizeParameter(bb) {
        if (bb.ratio) {
          this._sizeRatio = bb.ratio;
          const wb = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(wb.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(wb.getRenderHeight(), this._sizeRatio)
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
          const bb = this.RJ();
          if (!bb) return;
          this._postProcessManager = new Vb.e(bb), this._postProcesses = new Array
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
        const wb = this._postProcesses.indexOf(bb); - 1 !== wb && (this._postProcesses.splice(wb, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
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
        const wb = this._size.depth;
        return wb || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(bb) {
        const wb = Math.max(1, this.getRenderSize() * bb);
        this.resize(wb)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(bb) {
        const wb = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const Mb = this.RJ();
        Mb && (this._processSizeParameter(bb), this._renderTarget = wb ? Mb.DC().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : Mb.DC().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(bb, wb)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => Mb(54062))).then((bb => this._dumpTools = bb))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const bb = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), bb
      }
      _render() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Mb = this.RJ();
        if (!Mb) return;
        void 0 !== this.useCameraPostProcesses && (bb = this.useCameraPostProcesses);
        const eb = Mb.DC();
        if (eb._debugPushGroup && eb._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let Hb = 0; Hb < 6; Hb++) this._renderToTarget(Hb, bb, wb), Mb.incrementRenderId(), Mb.resetCachedMaterial();
          else this._renderToTarget(0, bb, wb);
        else
          for (let Hb = 0; Hb < this.getRenderLayers(); Hb++) this._renderToTarget(0, bb, wb, Hb), Mb.incrementRenderId(), Mb.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), eb._debugPopGroup && eb._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(bb, wb) {
        const Mb = bb * wb,
          eb = (0, gb.l)(Mb + 16384 / (128 + Mb));
        return Math.min((0, gb.b)(bb), eb)
      }
      _bindFrameBuffer() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Mb = this.RJ();
        if (!Mb) return;
        const eb = Mb.DC();
        this._renderTarget && eb.bindFramebuffer(this._renderTarget, this.isCube ? bb : void 0, void 0, void 0, this.ignoreCameraViewport, 0, wb)
      }
      _unbindFrameBuffer(bb, wb) {
        this._renderTarget && bb.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(wb)
        }))
      }
      _prepareFrame(bb, wb, Mb, eb) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(wb, Mb) : eb && bb.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(wb, Mb)
      }
      _renderToTarget(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Hb = this.RJ();
        if (!Hb) return;
        const pb = Hb.DC();
        this._currentFaceIndex = bb, this._currentLayer = eb, this._currentUseCameraPostProcess = wb, this._currentDumpForDebug = Mb, this._prepareFrame(Hb, bb, eb, wb), this._objectRenderer.render(bb + eb, !0), this._unbindFrameBuffer(pb, bb), this._texture && this.isCube && 5 === bb && pb.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(bb, wb, Mb, eb)
      }
      setRenderingAutoClearDepthStencil(bb, wb) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(bb, wb)
      }
      clone() {
        const bb = this.getSize(),
          wb = new Bb(this.name, bb, this.RJ(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return wb.hasAlpha = this.hasAlpha, wb.level = this.level, wb.coordinatesMode = this.coordinatesMode, this.renderList && (wb.renderList = this.renderList.slice(0)), wb
      }
      serialize() {
        if (!this.name) return null;
        const bb = super.serialize();
        if (bb.renderTargetSize = this.getRenderSize(), bb.renderList = [], this.renderList)
          for (let wb = 0; wb < this.renderList.length; wb++) bb.renderList.push(this.renderList[wb].id);
        return bb
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.RJ().DC().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const bb = this.RJ();
        if (!bb) return;
        let wb = bb.customRenderTargets.indexOf(this);
        wb >= 0 && bb.customRenderTargets.splice(wb, 1);
        for (const Mb of bb.cameras) wb = Mb.customRenderTargets.indexOf(this), wb >= 0 && Mb.customRenderTargets.splice(wb, 1);
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
    Bb.REFRESHRATE_RENDER_ONCE = Eb.REFRESHRATE_RENDER_ONCE, Bb.REFRESHRATE_RENDER_ONEVERYFRAME = Eb.REFRESHRATE_RENDER_ONEVERYFRAME, Bb.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = Eb.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(Bb.prototype, "noPrePassRenderer") || Object.defineProperty(Bb.prototype, "noPrePassRenderer", (0, Fb.g)("RenderTargetTexture", "noPrePassRenderer"))
  },
  54027: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Lb,
      f: () => Ib
    });
    var eb = Mb(41816),
      Hb = Mb(39323),
      pb = Mb(38318),
      Vb = Mb(41514),
      gb = Mb(41997);
    const lb = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class Lb {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lb;
        this._fullscreenViewport = new Hb.d(0, 0, 1, 1);
        const Mb = wb.positions ?? lb.positions,
          pb = wb.indices ?? lb.indices;
        this.engine = bb, this._vertexBuffers = {
          [eb.i.PositionKind]: new eb.i(bb, Mb, eb.i.PositionKind, !1, !1, 2)
        }, this._indexBuffer = bb.createIndexBuffer(pb), this._indexBufferLength = pb.length, this._onContextRestoredObserver = bb.RC.add((() => {
          this._indexBuffer = bb.createIndexBuffer(pb);
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
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = wb, this.engine.stencilState.stencilTest = Mb, this.engine.enableEffect(bb.drawWrapper), this.bindBuffers(bb.effect), bb.onApplyObservable.notifyObservers({})
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
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!bb.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const Mb = null === wb ? null : this._isRenderTargetTexture(wb) ? wb.renderTarget : wb;
        Mb && this.engine.bindFramebuffer(Mb), this.applyEffectWrapper(bb), this.draw(), Mb && this.engine.unBindFramebuffer(Mb), this.restoreStates()
      }
      dispose() {
        const bb = this._vertexBuffers[eb.i.PositionKind];
        bb && (bb.dispose(), delete this._vertexBuffers[eb.i.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.RC.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class Ib {
      static RegisterShaderCodeProcessing(bb, wb) {
        wb ? Ib._CustomShaderCodeProcessing[bb ?? ""] = wb : delete Ib._CustomShaderCodeProcessing[bb ?? ""]
      }
      static _GetShaderCodeProcessing(bb) {
        return Ib._CustomShaderCodeProcessing[bb] ?? Ib._CustomShaderCodeProcessing[""]
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
        this.alphaMode = 0, this.onEffectCreatedObservable = new pb.b(void 0, !0), this.onApplyObservable = new pb.b, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
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
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.RC.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new gb.c(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const wb = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, wb, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          eb = arguments.length > 2 ? arguments[2] : void 0,
          Hb = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, Hb && this._importPromises.push(...Hb);
        const pb = this.options.engine.isWebGPU && !Ib.ForceGLSL;
        this._gatherImports(pb, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(pb && this._webGPUReady ? Mb.e(682).then((() => Mb(64535))) : Mb.e(672).then((() => Mb(64421)))), void 0 !== eb && eb(pb, this._importPromises), pb && this._webGPUReady && (this.options.shaderLanguage = 1), bb || this.updateEffect(wb)
      }
      updateEffect() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          eb = arguments.length > 3 ? arguments[3] : void 0,
          Hb = arguments.length > 4 ? arguments[4] : void 0,
          pb = arguments.length > 5 ? arguments[5] : void 0,
          gb = arguments.length > 6 ? arguments[6] : void 0,
          lb = arguments.length > 7 ? arguments[7] : void 0;
        const Lb = Ib._GetShaderCodeProcessing(this.name);
        if (Lb?.defineCustomBindings) {
          const eb = wb?.slice() ?? [];
          eb.push(...this.options.uniforms);
          const Hb = Mb?.slice() ?? [];
          Hb.push(...this.options.samplers), bb = Lb.defineCustomBindings(this.name, bb, eb, Hb), wb = eb, Mb = Hb
        }
        this.options.defines = bb || "";
        const Ob = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let Ub;
        Ub = this.options.extraInitializationsAsync ? async () => {
          await (Ob?.()), await this.options.extraInitializationsAsync()
        }: Ob, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: gb ?? this._shaderPath.vertex,
          fragment: lb ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: wb || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: Mb || this.options.samplers,
          defines: null !== bb ? bb : "",
          fallbacks: null,
          onCompiled: Hb ?? this.options.onCompiled,
          onError: pb ?? null,
          indexParameters: eb || this.options.indexParameters,
          processCodeAfterIncludes: Lb?.processCodeAfterIncludes ? (bb, wb) => Lb.processCodeAfterIncludes(this.name, bb, wb) : null,
          processFinalCode: Lb?.processFinalCode ? (bb, wb) => Lb.processFinalCode(this.name, bb, wb) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: Ub
        }, this.options.engine) : this._drawWrapper.effect = new Vb.b(this._shaderPath, this.options.attributeNames, wb || this.options.uniforms, Mb || this.options.samplerNames, this.options.engine, bb, void 0, Hb || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, Ub), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !bb && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), Ib._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.DC().RC.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    Ib.ForceGLSL = !1, Ib._CustomShaderCodeProcessing = {}
  },
  54062: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      Dispose: () => sb,
      DumpData: () => Bb,
      DumpDataAsync: () => Fb,
      DumpFramebuffer: () => Eb,
      DumpTools: () => mb,
      EncodeImageAsync: () => Cb,
      RegisterDumpTools: () => zb
    });
    var eb = Mb(41675),
      Hb = Mb(54027),
      pb = Mb(41771),
      Vb = Mb(38322),
      gb = Mb(38313),
      lb = Mb(39971),
      Lb = Mb(41734),
      Ib = Mb(41679);
    let Ob = null;
    async function Ub() {
      return Ob || (Ob = async function() {
        const bb = gb.e.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        bb instanceof OffscreenCanvas && lb.b.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: wb
        } = await Promise.resolve().then((() => Mb(41511)));
        if (!wb.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const eb = new wb(bb, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        gb.e.Instances.pop(), gb.e.OnEnginesDisposedObservable.add((bb => {
          eb && bb !== eb && !eb.RD && 0 === gb.e.Instances.length && sb()
        })), eb.getCaps().parallelShaderCompile = void 0;
        const pb = new Hb.b(eb),
          {
            passPixelShader: Vb
          } = await Mb.e(690).then((() => Mb(64585))),
          Lb = new Hb.f({
            engine: eb,
            name: Vb.name,
            fragmentShader: Vb.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: bb,
          dumpEngine: {
            engine: eb,
            renderer: pb,
            wrapper: Lb
          }
        }
      }()), await Ob
    }
    let tb = (() => {
      var bb;
      let wb, Mb = [];
      return bb = class {
        static async EncodeImageAsync(bb, wb, Mb, eb, Hb, Vb) {
          const gb = await Ub(),
            lb = gb.dumpEngine;
          lb.engine.setSize(wb, Mb, !0);
          const Lb = lb.engine.createRawTexture(bb, wb, Mb, 5, !1, !Hb, 1);
          return lb.renderer.setViewport(), lb.renderer.applyEffectWrapper(lb.wrapper), lb.wrapper.effect._bindTexture("textureSampler", Lb), lb.renderer.draw(), Lb.dispose(), await new Promise(((bb, wb) => {
            pb.e.ToBlob(gb.canvas, (Mb => {
              Mb ? bb(Mb) : wb(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), eb, Vb)
          }))
        }
      }, (() => {
        const Hb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        wb = [Ib.f], (0, eb.i)(bb, null, wb, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: bb => "EncodeImageAsync" in bb,
            get: bb => bb.EncodeImageAsync
          },
          metadata: Hb
        }, null, Mb), Hb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Hb
        }), (0, eb.m)(bb, Mb)
      })(), bb
    })();
    const Cb = tb.EncodeImageAsync;
    async function Eb(bb, wb, Mb, eb) {
      let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        pb = arguments.length > 5 ? arguments[5] : void 0,
        Vb = arguments.length > 6 ? arguments[6] : void 0;
      const gb = await Mb.readPixels(0, 0, bb, wb);
      Bb(bb, wb, new Uint8Array(gb.buffer), eb, Hb, pb, !0, void 0, Vb)
    }
    async function Fb(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Hb = arguments.length > 4 ? arguments[4] : void 0,
        gb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Ib = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Ob = arguments.length > 7 ? arguments[7] : void 0;
      if (Mb instanceof Float32Array) {
        const bb = new Uint8Array(Mb.length);
        let wb = Mb.length;
        for (; wb--;) {
          const eb = Mb[wb];
          bb[wb] = Math.round(255 * (0, Vb.Clamp)(eb))
        }
        Mb = bb
      }
      const Ub = await tb.EncodeImageAsync(Mb, bb, wb, eb, gb, Ob);
      void 0 !== Hb && pb.e.DownloadBlob(Ub, Hb), Ub.type !== eb && lb.b.Warn(`DumpData: The requested mimeType '${eb}' is not supported. The result has mimeType '${Ub.type}' instead.`);
      const Cb = await Ub.arrayBuffer();
      return Ib ? Cb : `data:${eb};base64,${(0,Lb.h)(Cb)}`
    }

    function Bb(bb, wb, Mb, eb) {
      let Hb = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== Hb || eb || (Hb = ""), Fb(bb, wb, Mb, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", Hb, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((bb => {
        eb && eb(bb)
      }))
    }

    function sb() {
      Ob && (Ob?.then((bb => {
        bb.canvas instanceof HTMLCanvasElement && bb.canvas.remove(), bb.dumpEngine && (bb.dumpEngine.engine.dispose(), bb.dumpEngine.renderer.dispose(), bb.dumpEngine.wrapper.dispose())
      })), Ob = null)
    }
    const mb = {
      DumpData: Bb,
      DumpDataAsync: Fb,
      DumpFramebuffer: Eb,
      Dispose: sb
    };
    let hb = !1;

    function zb() {
      if (hb) return;
      hb = !0;
      pb.e.DumpData = Bb, pb.e.DumpDataAsync = Fb, pb.e.DumpFramebuffer = Eb
    }
  },
  54042: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => tb,
      d: () => Cb,
      e: () => Eb
    });
    var eb = Mb(42152),
      Hb = Mb(54051),
      pb = Mb(41675),
      Vb = Mb(54022),
      gb = Mb(41697),
      lb = Mb(54058),
      Lb = Mb(41679);
    class Ib extends Vb.e {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(bb, wb) {
        let Mb = arguments.length > 4 ? arguments[4] : void 0;
        const eb = {
          size: "number" === typeof wb ? wb : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: Mb,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...wb
        };
        super(bb, lb.c.FragmentUrl, {
          effectWrapper: "number" !== typeof wb && wb.effectWrapper ? void 0 : new lb.c(bb, Mb, eb),
          ...eb
        })
      }
      static _Parse(bb, wb, Mb, eb) {
        return gb.d.Parse((() => new Ib(bb.name, bb.options, wb, bb.renderTargetSamplingMode, bb._engine, bb.reusable)), bb, Mb, eb)
      }
    }(() => {
      var bb;
      let wb, Mb = Vb.e,
        eb = [];
      bb = class extends Mb {
        get face() {
          return this._effectWrapper.face
        }
        set face(bb) {
          this._effectWrapper.face = bb
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(bb, wb) {
          let Mb = arguments.length > 4 ? arguments[4] : void 0;
          const Hb = {
            size: "number" === typeof wb ? wb : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: Mb,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...wb
          };
          super(bb, lb.c.FragmentUrl, {
            effectWrapper: "number" !== typeof wb && wb.effectWrapper ? void 0 : new lb.b(bb, Mb, Hb),
            ...Hb
          }), (0, pb.m)(this, eb)
        }
        static _Parse(wb, Mb, eb, Hb) {
          return gb.d.Parse((() => new bb(wb.name, wb.options, Mb, wb.renderTargetSamplingMode, wb._engine, wb.reusable)), wb, eb, Hb)
        }
      }, (() => {
        const Hb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Mb[Symbol.metadata] ?? null) : void 0;
        wb = [(0, Lb.E)()], (0, pb.i)(bb, null, wb, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: bb => "face" in bb,
            get: bb => bb.face
          },
          metadata: Hb
        }, null, eb), Hb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Hb
        })
      })()
    })();
    var Ob = Mb(38322),
      Ub = Mb(41742);

    function tb(bb, wb, Mb, eb, Hb, pb, gb, lb) {
      const Lb = wb.DC();
      return wb.isReady = !1, Hb = Hb ?? wb.samplingMode, eb = eb ?? wb.type, pb = pb ?? wb.format, gb = gb ?? wb.width, lb = lb ?? wb.height, -1 === eb && (eb = 0), new Promise((Ib => {
        const Ob = new Vb.e("postprocess", bb, null, null, 1, null, Hb, Lb, !1, void 0, eb, void 0, null, !1, pb);
        Ob.externalTextureSamplerBinding = !0;
        const Ub = Lb.createRenderTargetTexture({
          width: gb,
          height: lb
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: Hb,
          type: eb,
          format: pb
        });
        Ob.onEffectCreatedObservable.addOnce((bb => {
          bb.executeWhenCompiled((() => {
            Ob.onApply = bb => {
              bb._bindTexture("textureSampler", wb), bb.setFloat2("scale", 1, 1)
            }, Mb.postProcessManager.directRender([Ob], Ub, !0), Lb.restoreDefaultFramebuffer(), Lb._releaseTexture(wb), Ob && Ob.dispose(), Ub._swapAndDie(wb), wb.type = eb, wb.format = 5, wb.isReady = !0, Ib(wb)
          }))
        }))
      }))
    }
    async function Cb(bb, wb, pb) {
      let gb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        lb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Lb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Ib = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(bb) {
        if (bb.isReady()) return;
        if (bb.loadingError) throw new Error(bb.errorObject?.message || `Texture ${bb.name} errored while loading.`);
        const wb = bb.onLoadObservable;
        if (wb) return await new Promise((bb => wb.addOnce((() => bb()))));
        const Mb = bb._texture?.onLoadedObservable;
        if (Mb) return await new Promise((bb => Mb.addOnce((() => bb()))));
        throw new Error(`Cannot determine readiness of texture ${bb.name}.`)
      }(bb);
      const Ub = bb.getInternalTexture(),
        tb = bb.is3D || !!Ub?.is3D,
        {
          width: Cb,
          height: Eb
        } = bb.getSize(),
        Fb = wb ?? Cb,
        Bb = pb ?? Eb;
      if (Lb || tb || function(bb) {
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
        }(bb.textureFormat) || Fb !== Cb || Bb !== Eb) {
        if (bb.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${Lb?"RTT":"compression"} is not supported.`);
        return await async function(bb, wb, pb, gb, lb) {
          let Lb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const Ib = bb.RJ(),
            Ob = Ib.DC(),
            Ub = bb.getInternalTexture(),
            tb = bb.is3D || !!Ub?.is3D;
          let Cb;
          if (Ob.isWebGPU ? tb ? await Mb.e(686).then((() => Mb(64568))) : bb.isCube ? await Mb.e(687).then((() => Mb(64573))) : await Mb.e(688).then((() => Mb(64579))) : tb ? await Mb.e(683).then((() => Mb(64552))) : bb.isCube ? await Mb.e(684).then((() => Mb(64560))) : await Mb.e(685).then((() => Mb(64566))), tb) Cb = new Vb.e("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: eb.f.NEAREST_NEAREST_MIPNEAREST,
            engine: Ob,
            shaderLanguage: Ob.isWebGPU ? 1 : 0
          });
          else if (bb.isCube) {
            const bb = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            Cb = new Vb.e("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: eb.f.NEAREST_NEAREST_MIPNEAREST,
              engine: Ob,
              defines: bb[gb],
              shaderLanguage: Ob.isWebGPU ? 1 : 0
            })
          } else Cb = new Vb.e("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: eb.f.NEAREST_NEAREST_MIPNEAREST,
            engine: Ob,
            shaderLanguage: Ob.isWebGPU ? 1 : 0
          });
          await new Promise((bb => {
            Cb.onEffectCreatedObservable.addOnce((wb => {
              wb.executeWhenCompiled((() => {
                bb(0)
              }))
            }))
          }));
          const Eb = new Hb.b("temp", {
            width: wb,
            height: pb
          }, Ib, !1);
          Cb.onApply = function(wb) {
            wb.setTexture("textureSampler", bb), wb.setFloat("lod", lb), wb.setInt("gamma", bb.gammaSpace ? 1 : 0), tb && wb.setFloat("slice", Lb)
          };
          try {
            if (Eb.renderTarget && Ub) {
              const Mb = Ub.samplingMode;
              0 !== lb ? bb.updateSamplingMode(eb.f.NEAREST_NEAREST_MIPNEAREST) : bb.updateSamplingMode(eb.f.NEAREST_NEAREST), Ib.postProcessManager.directRender([Cb], Eb.renderTarget, !0), bb.updateSamplingMode(Mb);
              const Hb = await Ob.readPixels(0, 0, wb, pb),
                Vb = new Uint8Array(Hb.buffer, Hb.byteOffset, Hb.byteLength);
              return Ob.unBindFramebuffer(Eb.renderTarget), Vb
            }
            throw Error("Render to texture failed.")
          } finally {
            Eb.dispose(), Cb.dispose()
          }
        }(bb, Fb, Bb, gb, lb, Ib)
      }
      let sb = await bb.readPixels(gb, lb);
      if (!sb) throw new Error(`Failed to read pixels from texture ${bb.name}.`);
      if (sb instanceof Float32Array) {
        const bb = new Uint8Array(sb.length);
        let wb = sb.length;
        for (; wb--;) {
          const Mb = sb[wb];
          bb[wb] = Math.round(255 * (0, Ob.Clamp)(Mb))
        }
        sb = bb
      }
      const mb = Fb * Bb,
        hb = 4 * mb;
      if (sb.length !== hb) {
        const bb = 0 === mb ? 0 : sb.length / mb;
        if (1 === bb || 2 === bb || 3 === bb) {
          const wb = new Uint8Array(hb);
          for (let Mb = 0, eb = 0, Hb = 0; Mb < mb; Mb++, Hb += 4) {
            const Mb = sb[eb++];
            if (1 === bb) {
              wb[Hb] = Mb, wb[Hb + 1] = Mb, wb[Hb + 2] = Mb, wb[Hb + 3] = 255;
              continue
            }
            const pb = sb[eb++];
            2 !== bb ? (wb[Hb] = Mb, wb[Hb + 1] = pb, wb[Hb + 2] = sb[eb++], wb[Hb + 3] = 255) : (wb[Hb] = Mb, wb[Hb + 1] = pb, wb[Hb + 2] = 0, wb[Hb + 3] = 255)
          }
          return wb
        }
      }
      return sb
    }
    const Eb = {
      CreateResizedCopy: function(bb, wb, Mb) {
        let pb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Vb = bb.RJ(),
          gb = Vb.DC(),
          lb = new Hb.b("resized" + bb.name, {
            width: wb,
            height: Mb
          }, Vb, !bb.noMipmap, !0, bb._texture.type, !1, bb.samplingMode, !1);
        lb.wrapU = bb.wrapU, lb.wrapV = bb.wrapV, lb.uOffset = bb.uOffset, lb.vOffset = bb.vOffset, lb.uScale = bb.uScale, lb.vScale = bb.vScale, lb.uAng = bb.uAng, lb.vAng = bb.vAng, lb.wAng = bb.wAng, lb.coordinatesIndex = bb.coordinatesIndex, lb.level = bb.level, lb.anisotropicFilteringLevel = bb.anisotropicFilteringLevel, lb._texture.isReady = !1, bb.wrapU = eb.f.CLAMP_ADDRESSMODE, bb.wrapV = eb.f.CLAMP_ADDRESSMODE;
        const Lb = new Ib("pass", 1, null, pb ? eb.f.BILINEAR_SAMPLINGMODE : eb.f.NEAREST_SAMPLINGMODE, gb, !1, 0);
        return Lb.externalTextureSamplerBinding = !0, Lb.onEffectCreatedObservable.addOnce((wb => {
          wb.executeWhenCompiled((() => {
            Lb.onApply = function(wb) {
              wb.setTexture("textureSampler", bb)
            };
            const wb = lb.renderTarget;
            wb && (Vb.postProcessManager.directRender([Lb], wb), gb.unBindFramebuffer(wb), lb.disposeFramebufferObjects(), Lb.dispose(), lb.getInternalTexture().isReady = !0)
          }))
        })), lb
      },
      ApplyPostProcess: tb,
      ToHalfFloat: Ub.i,
      FromHalfFloat: Ub.c,
      GetTextureDataAsync: Cb
    }
  },
  54022: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Cb
    });
    var eb = Mb(41675),
      Hb = Mb(41777),
      pb = Mb(38318),
      Vb = Mb(38285),
      gb = Mb(41514),
      lb = Mb(41679),
      Lb = Mb(41697),
      Ib = Mb(38333),
      Ob = Mb(41572),
      Ub = Mb(41611),
      tb = Mb(54027);
    let Cb = (() => {
        var bb;
        let wb, gb, Ob, Cb, Eb, Bb, sb, mb, hb, zb, Xb, xb, jb, Kb, rb, Rb, Db = [],
          cb = [],
          Yb = [],
          Zb = [],
          fb = [],
          Ab = [],
          Wb = [],
          Jb = [],
          Sb = [],
          Nb = [],
          vb = [],
          Qb = [],
          Gb = [],
          qb = [],
          ab = [],
          ib = [],
          ub = [],
          db = [],
          Pb = [],
          nb = [],
          yb = [],
          ob = [],
          Tb = [],
          kb = [],
          bw = [],
          ww = [],
          Mw = [],
          ew = [],
          Hw = [];
        return bb = class {
          static get ForceGLSL() {
            return tb.f.ForceGLSL
          }
          static set ForceGLSL(bb) {
            tb.f.ForceGLSL = bb
          }
          static RegisterShaderCodeProcessing(bb, wb) {
            tb.f.RegisterShaderCodeProcessing(bb, wb)
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
            return this.K8
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.twb(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(wb, Mb, gb, lb, Lb, Ib) {
            let Ob = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              Ub = arguments.length > 7 ? arguments[7] : void 0,
              Cb = arguments.length > 8 ? arguments[8] : void 0,
              Eb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              Bb = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              sb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              mb = arguments.length > 12 ? arguments[12] : void 0,
              hb = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              zb = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              Xb = arguments.length > 15 ? arguments[15] : void 0,
              xb = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, eb.m)(this, Db), null), this.uniqueId = (0, eb.m)(this, cb, void 0), this.width = ((0, eb.m)(this, Yb), (0, eb.m)(this, Zb, -1)), this.height = ((0, eb.m)(this, fb), (0, eb.m)(this, Ab, -1)), this.nodeMaterialSource = ((0, eb.m)(this, Wb), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, eb.m)(this, Jb, void 0), this.clearColor = ((0, eb.m)(this, Sb), (0, eb.m)(this, Nb, void 0)), this.autoClear = ((0, eb.m)(this, vb), (0, eb.m)(this, Qb, !0)), this.forceAutoClearInAlphaMode = ((0, eb.m)(this, Gb), (0, eb.m)(this, qb, !1)), this.alphaConstants = ((0, eb.m)(this, ab), (0, eb.m)(this, ib, void 0)), this.animations = ((0, eb.m)(this, ub), []), this.enablePixelPerfectMode = (0, eb.m)(this, db, !1), this.forceFullscreenViewport = ((0, eb.m)(this, Pb), (0, eb.m)(this, nb, !0)), this.inspectableCustomProperties = (0, eb.m)(this, yb), this.scaleMode = (0, eb.m)(this, ob, 1), this.alwaysForcePOT = ((0, eb.m)(this, Tb), (0, eb.m)(this, kb, !1)), this._samples = ((0, eb.m)(this, bw), (0, eb.m)(this, ww, 1)), this.adaptScaleToCurrentViewport = ((0, eb.m)(this, Mw), (0, eb.m)(this, ew, !1)), this.doNotSerialize = ((0, eb.m)(this, Hw), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new Hb.h(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new Vb.m(1, 1), this._texelSize = Vb.m.Zero(), this.onActivateObservable = new pb.b, this.onSizeChangedObservable = new pb.b, this.onApplyObservable = new pb.b, this.onBeforeRenderObservable = new pb.b, this.onAfterRenderObservable = new pb.b, this.vJ = new pb.b, Fb();
            let jb, Kb = 1,
              rb = null;
            if (gb && !Array.isArray(gb)) {
              const bb = gb;
              gb = bb.uniforms ?? null, lb = bb.samplers ?? null, Kb = bb.size ?? 1, Ib = bb.camera ?? null, Ob = bb.samplingMode ?? 1, Ub = bb.engine, Cb = bb.reusable, Eb = Array.isArray(bb.defines) ? bb.defines.join("\n") : bb.defines ?? null, Bb = bb.textureType ?? 0, sb = bb.vertexUrl ?? "postprocess", mb = bb.indexParameters, hb = bb.blockCompilation ?? !1, zb = bb.textureFormat ?? 5, Xb = bb.shaderLanguage ?? 0, rb = bb.uniformBuffers ?? null, xb = bb.extraInitializations, jb = bb.effectWrapper
            } else Lb && (Kb = "number" === typeof Lb ? Lb : {
              width: Lb.width,
              height: Lb.height
            });
            if (this._useExistingThinPostProcess = !!jb, this._effectWrapper = jb ?? new tb.f({
                name: wb,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: Mb,
                engine: Ub || Ib?.RJ().DC(),
                uniforms: gb,
                samplers: lb,
                uniformBuffers: rb,
                defines: Eb,
                vertexUrl: sb,
                indexParameters: mb,
                blockCompilation: !0,
                shaderLanguage: Xb,
                extraInitializations: void 0
              }), this.name = wb, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != Ib ? (this.K8 = Ib, this._scene = Ib.RJ(), Ib.attachPostProcess(this), this._engine = this._scene.DC(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : Ub && (this._engine = Ub, this._engine.postProcesses.push(this)), this._options = Kb, this.renderTargetSamplingMode = Ob || 1, this._reusable = Cb || !1, this._textureType = Bb, this._textureFormat = zb, this._shaderLanguage = Xb || 0, this._samplers = lb || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = Mb, this._vertexUrl = sb, this._parameters = gb || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = rb || [], this._indexParameters = mb, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const wb = [];
              this._gatherImports(this._engine.isWebGPU && !bb.ForceGLSL, wb), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(hb, Eb, xb, wb)
            }
          }
          _gatherImports() {
            let bb = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? bb.push(Promise.all([Mb.e(682).then((() => Mb(64535)))])) : bb.push(Promise.all([Mb.e(672).then((() => Mb(64421)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          DC() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(bb) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = bb, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new Hb.h(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              eb = arguments.length > 3 ? arguments[3] : void 0,
              Hb = arguments.length > 4 ? arguments[4] : void 0,
              pb = arguments.length > 5 ? arguments[5] : void 0,
              Vb = arguments.length > 6 ? arguments[6] : void 0,
              gb = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(bb, wb, Mb, eb, Hb, pb, Vb, gb), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(bb, wb) {
            let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let Hb = 0; Hb < this._textureCache.length; Hb++)
              if (this._textureCache[Hb].texture.width === bb.width && this._textureCache[Hb].texture.height === bb.height && this._textureCache[Hb].postProcessChannel === Mb && this._textureCache[Hb].texture._generateDepthBuffer === wb.generateDepthBuffer && this._textureCache[Hb].texture.samples === wb.samples) return this._textureCache[Hb].texture;
            const eb = this._engine.createRenderTargetTexture(bb, wb);
            return this._textureCache.push({
              texture: eb,
              postProcessChannel: Mb,
              lastUsedRenderId: -1
            }), eb
          }
          _flushTextureCache() {
            const bb = this._renderId;
            for (let wb = this._textureCache.length - 1; wb >= 0; wb--)
              if (bb - this._textureCache[wb].lastUsedRenderId > 100) {
                let bb = !1;
                for (let Mb = 0; Mb < this._textures.length; Mb++)
                  if (this._textures.data[Mb] === this._textureCache[wb].texture) {
                    bb = !0;
                    break
                  } bb || (this._textureCache[wb].texture.dispose(), this._textureCache.splice(wb, 1))
              }
          }
          resize(bb, wb) {
            let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Hb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = bb, this.height = wb;
            let pb = null;
            if (Mb)
              for (let lb = 0; lb < Mb._postProcesses.length; lb++)
                if (null !== Mb._postProcesses[lb]) {
                  pb = Mb._postProcesses[lb];
                  break
                } const Vb = {
                width: this.width,
                height: this.height
              },
              gb = {
                generateMipMaps: eb,
                generateDepthBuffer: Hb || pb === this,
                generateStencilBuffer: (Hb || pb === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(Vb, gb, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(Vb, gb, 1)), this._texelSize.twb(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let bb;
            if (this._shareOutputWithPostProcess) bb = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) bb = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let wb;
              bb = this.inputTexture;
              for (let Mb = 0; Mb < this._textureCache.length; Mb++)
                if (this._textureCache[Mb].texture === bb) {
                  wb = this._textureCache[Mb];
                  break
                } wb && (wb.lastUsedRenderId = this._renderId)
            }
            return bb
          }
          activate(bb) {
            let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              Mb = arguments.length > 2 ? arguments[2] : void 0;
            const eb = null === bb || void 0 !== bb.cameraRigMode ? bb || this.K8 : null,
              Hb = eb?.RJ() ?? bb,
              pb = Hb.DC(),
              Vb = pb.getCaps().maxTextureSize,
              gb = (wb ? wb.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              lb = (wb ? wb.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let Lb = this._options.width || gb,
              Ib = this._options.height || lb;
            const Ob = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let tb = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const bb = pb.currentViewport;
                bb && (Lb *= bb.width, Ib *= bb.height)
              }(Ob || this.alwaysForcePOT) && (this._options.width || (Lb = pb.needPOTTextures ? (0, Ub.e)(Lb, Vb, this.scaleMode) : Lb), this._options.height || (Ib = pb.needPOTTextures ? (0, Ub.e)(Ib, Vb, this.scaleMode) : Ib)), this.width === Lb && this.height === Ib && (tb = this._getTarget()) || this.resize(Lb, Ib, eb, Ob, Mb), this._textures.forEach((bb => {
                bb.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(bb, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return tb || (tb = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.twb(gb / Lb, lb / Ib), this._engine.bindFramebuffer(tb, 0, gb, lb, this.forceFullscreenViewport)) : (this._scaleRatio.twb(1, 1), this._engine.bindFramebuffer(tb, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(eb), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : Hb.clearColor, Hb._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), tb
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
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.DC().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), bb = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", bb?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
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
            let wb;
            if (bb = bb || this.K8, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (wb = this._parentContainer.postProcesses.indexOf(this), wb > -1 && this._parentContainer.postProcesses.splice(wb, 1), this._parentContainer = null), wb = this._engine.postProcesses.indexOf(this), -1 !== wb && this._engine.postProcesses.splice(wb, 1), this.vJ.notifyObservers(), bb) {
              if (bb.detachPostProcess(this), wb = bb._postProcesses.indexOf(this), 0 === wb && bb._postProcesses.length > 0) {
                const bb = this.K8._getFirstPostProcess();
                bb && bb.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const bb = Lb.d.Serialize(this),
              wb = this.getCamera() || this._scene && this._scene.activeCamera;
            return bb.customType = "BABYLON." + this.getClassName(), bb.cameraId = wb ? wb.id : null, bb.reusable = this._reusable, bb.textureType = this._textureType, bb.fragmentUrl = this._fragmentUrl, bb.parameters = this._parameters, bb.samplers = this._samplers, bb.uniformBuffers = this._uniformBuffers, bb.options = this._options, bb.defines = this._postProcessDefines, bb.textureFormat = this._textureFormat, bb.vertexUrl = this._vertexUrl, bb.indexParameters = this._indexParameters, bb
          }
          clone() {
            const wb = this.serialize();
            wb._engine = this._engine, wb.cameraId = null;
            const Mb = bb.Parse(wb, this._scene, "");
            return Mb ? (Mb.onActivateObservable = this.onActivateObservable.clone(), Mb.onSizeChangedObservable = this.onSizeChangedObservable.clone(), Mb.onApplyObservable = this.onApplyObservable.clone(), Mb.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), Mb.onAfterRenderObservable = this.onAfterRenderObservable.clone(), Mb._prePassEffectConfiguration = this._prePassEffectConfiguration, Mb) : null
          }
          static Parse(bb, wb, Mb) {
            const eb = (0, Ib.c)(bb.customType);
            if (!eb || !eb._Parse) return null;
            const Hb = wb ? wb.getCameraById(bb.cameraId) : null;
            return eb._Parse(bb, Hb, wb, Mb)
          }
          static _Parse(wb, Mb, eb, Hb) {
            return Lb.d.Parse((() => new bb(wb.name, wb.fragmentUrl, wb.parameters, wb.samplers, wb.options, Mb, wb.renderTargetSamplingMode, wb._engine, wb.reusable, wb.defines, wb.textureType, wb.vertexUrl, wb.indexParameters, !1, wb.textureFormat)), wb, eb, Hb)
          }
        }, (() => {
          const Mb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          wb = [(0, lb.E)()], gb = [(0, lb.E)()], Ob = [(0, lb.E)()], Cb = [(0, lb.E)()], Eb = [(0, lb.E)()], Bb = [(0, lb.l)()], sb = [(0, lb.E)()], mb = [(0, lb.E)()], hb = [(0, lb.E)()], zb = [(0, lb.E)()], Xb = [(0, lb.E)()], xb = [(0, lb.E)()], jb = [(0, lb.E)()], Kb = [(0, lb.E)()], rb = [(0, lb.E)("samples")], Rb = [(0, lb.E)()], (0, eb.i)(bb, null, gb, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: bb => "name" in bb,
              get: bb => bb.name
            },
            metadata: Mb
          }, null, Db), (0, eb.i)(bb, null, hb, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: bb => "alphaMode" in bb,
              get: bb => bb.alphaMode
            },
            metadata: Mb
          }, null, Db), (0, eb.i)(null, null, wb, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: bb => "uniqueId" in bb,
              get: bb => bb.uniqueId,
              set: (bb, wb) => {
                bb.uniqueId = wb
              }
            },
            metadata: Mb
          }, cb, Yb), (0, eb.i)(null, null, Ob, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: bb => "width" in bb,
              get: bb => bb.width,
              set: (bb, wb) => {
                bb.width = wb
              }
            },
            metadata: Mb
          }, Zb, fb), (0, eb.i)(null, null, Cb, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: bb => "height" in bb,
              get: bb => bb.height,
              set: (bb, wb) => {
                bb.height = wb
              }
            },
            metadata: Mb
          }, Ab, Wb), (0, eb.i)(null, null, Eb, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: bb => "renderTargetSamplingMode" in bb,
              get: bb => bb.renderTargetSamplingMode,
              set: (bb, wb) => {
                bb.renderTargetSamplingMode = wb
              }
            },
            metadata: Mb
          }, Jb, Sb), (0, eb.i)(null, null, Bb, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "clearColor" in bb,
              get: bb => bb.clearColor,
              set: (bb, wb) => {
                bb.clearColor = wb
              }
            },
            metadata: Mb
          }, Nb, vb), (0, eb.i)(null, null, sb, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: bb => "autoClear" in bb,
              get: bb => bb.autoClear,
              set: (bb, wb) => {
                bb.autoClear = wb
              }
            },
            metadata: Mb
          }, Qb, Gb), (0, eb.i)(null, null, mb, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: bb => "forceAutoClearInAlphaMode" in bb,
              get: bb => bb.forceAutoClearInAlphaMode,
              set: (bb, wb) => {
                bb.forceAutoClearInAlphaMode = wb
              }
            },
            metadata: Mb
          }, qb, ab), (0, eb.i)(null, null, zb, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: bb => "alphaConstants" in bb,
              get: bb => bb.alphaConstants,
              set: (bb, wb) => {
                bb.alphaConstants = wb
              }
            },
            metadata: Mb
          }, ib, ub), (0, eb.i)(null, null, Xb, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: bb => "enablePixelPerfectMode" in bb,
              get: bb => bb.enablePixelPerfectMode,
              set: (bb, wb) => {
                bb.enablePixelPerfectMode = wb
              }
            },
            metadata: Mb
          }, db, Pb), (0, eb.i)(null, null, xb, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: bb => "forceFullscreenViewport" in bb,
              get: bb => bb.forceFullscreenViewport,
              set: (bb, wb) => {
                bb.forceFullscreenViewport = wb
              }
            },
            metadata: Mb
          }, nb, yb), (0, eb.i)(null, null, jb, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: bb => "scaleMode" in bb,
              get: bb => bb.scaleMode,
              set: (bb, wb) => {
                bb.scaleMode = wb
              }
            },
            metadata: Mb
          }, ob, Tb), (0, eb.i)(null, null, Kb, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: bb => "alwaysForcePOT" in bb,
              get: bb => bb.alwaysForcePOT,
              set: (bb, wb) => {
                bb.alwaysForcePOT = wb
              }
            },
            metadata: Mb
          }, kb, bw), (0, eb.i)(null, null, rb, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: bb => "_samples" in bb,
              get: bb => bb._samples,
              set: (bb, wb) => {
                bb._samples = wb
              }
            },
            metadata: Mb
          }, ww, Mw), (0, eb.i)(null, null, Rb, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: bb => "adaptScaleToCurrentViewport" in bb,
              get: bb => bb.adaptScaleToCurrentViewport,
              set: (bb, wb) => {
                bb.adaptScaleToCurrentViewport = wb
              }
            },
            metadata: Mb
          }, ew, Hw), Mb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Mb
          })
        })(), bb
      })(),
      Eb = !1;

    function Fb() {
      Eb || (Eb = !0, Ob.d.prototype.setTextureFromPostProcess = function(bb, wb, Mb) {
        let eb = null;
        wb && (wb._forcedOutputTexture ? eb = wb._forcedOutputTexture : wb._textures.data[wb._currentRenderTextureInd] && (eb = wb._textures.data[wb._currentRenderTextureInd])), this._bindTexture(bb, eb?.texture ?? null, Mb)
      }, Ob.d.prototype.setTextureFromPostProcessOutput = function(bb, wb, Mb) {
        this._bindTexture(bb, wb?._outputTexture?.texture ?? null, Mb)
      }, gb.b.prototype.setTextureFromPostProcess = function(bb, wb) {
        this._engine.setTextureFromPostProcess(this._samplers[bb], wb, bb)
      }, gb.b.prototype.setTextureFromPostProcessOutput = function(bb, wb) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[bb], wb, bb)
      }, (0, Ib.e)("BABYLON.PostProcess", Cb))
    }
  },
  54058: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Vb,
      c: () => pb
    });
    var eb = Mb(54027),
      Hb = Mb(38313);
    class pb extends eb.f {
      _gatherImports(bb, wb) {
        bb ? (this._webGPUReady = !0, wb.push(Promise.all([Mb.e(689).then((() => Mb(64582)))]))) : wb.push(Promise.all([Mb.e(690).then((() => Mb(64585)))])), super._gatherImports(bb, wb)
      }
      constructor(bb) {
        let wb = arguments.length > 2 ? arguments[2] : void 0;
        const Mb = {
          name: bb,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Hb.e.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: pb.FragmentUrl,
          ...wb
        };
        Mb.engine || (Mb.engine = Hb.e.LastCreatedEngine), super(Mb)
      }
    }
    pb.FragmentUrl = "pass";
    class Vb extends eb.f {
      _gatherImports(bb, wb) {
        bb ? (this._webGPUReady = !0, wb.push(Promise.all([Mb.e(691).then((() => Mb(64591)))]))) : wb.push(Promise.all([Mb.e(692).then((() => Mb(64599)))])), super._gatherImports(bb, wb)
      }
      constructor(bb) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: bb,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Hb.e.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: Vb.FragmentUrl,
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
    Vb.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);