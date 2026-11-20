export const id = 301;
export const ids = [301];
export const modules = {
  41218: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => eb
    });
    var kb = sb(36683),
      Wb = sb(36656),
      ab = sb(39895),
      Tb = sb(39582),
      Ub = sb(39337),
      Ib = sb(38284),
      Hb = sb(39563),
      fb = sb(39593),
      Mb = sb(36666),
      Xb = sb(39307),
      nb = sb(39536),
      mb = sb(39647);
    class lb {
      get renderList() {
        return this._renderList
      }
      set renderList(bb) {
        this._renderList !== bb && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), bb && (this._unObserveRenderList = (0, Mb.h)(bb, this._renderListHasChanged)), this._renderList = bb)
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
              const cb = this._renderPassIds[bb];
              this._engine._renderPassNames[cb] = `${this._name}#${bb}`
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
      setMaterialForRendering(bb, cb) {
        let sb;
        sb = Array.isArray(bb) ? bb : [bb];
        for (let kb = 0; kb < sb.length; ++kb)
          for (let bb = 0; bb < this.options.numPasses; ++bb) {
            let Wb = sb[kb];
            sb[kb].qY && (Wb = sb[kb].Pkb), Wb.setMaterialForRenderPass(this._renderPassIds[bb], void 0 !== cb ? Array.isArray(cb) ? cb[bb] : cb : void 0)
          }
      }
      _freezeActiveMeshes(bb) {
        this._freezeActiveMeshesCancel = (0, Xb.d)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, bb)
            for (let bb = 0; bb < this._activeMeshes.length; bb++) this._activeMeshes.data[bb]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((bb, cb) => {
          this._freezeActiveMeshesCancel = null, cb ? (Ib.c.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), bb && Ib.c.Error(bb)) : (Ib.c.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), bb && (Ib.c.Error(bb), bb.stack && Ib.c.Error(bb.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let bb = 0; bb < this._activeMeshes.length; bb++) this._activeMeshes.data[bb]._unFreeze();
        this._isFrozen = !1
      }
      constructor(bb, cb, sb) {
        this._unObserveRenderList = null, this._renderListHasChanged = (bb, cb) => {
          const sb = this._renderList ? this._renderList.length : 0;
          if (0 === cb && sb > 0 || 0 === sb)
            for (const kb of this._scene.meshes) kb._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new kb.c, this.onAfterRenderObservable = new kb.c, this.onBeforeRenderingManagerRenderObservable = new kb.c, this.onAfterRenderingManagerRenderObservable = new kb.c, this.onInitRenderingObservable = new kb.c, this.onFinishRenderingObservable = new kb.c, this.onFastPathRenderObservable = new kb.c, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new nb.d(256), this._activeBoundingBoxes = new nb.d(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = bb, this._scene = cb, this._engine = this._scene.Sm(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...sb
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new fb.e(cb), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const bb of this._scene.lights) bb.getTypeID() === mb.b.LIGHTTYPEID_CLUSTERED_CONTAINER && bb.isSupported && bb._updateBatches(this.activeCamera).render()
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
      _createSceneUBO(bb, cb) {
        const sb = this._scene.Sm(),
          kb = new Hb.d(sb, void 0, cb, bb, void 0, !1);
        return kb.addUniform("viewProjection", 16), cb && kb.addUniform("viewProjectionR", 16), kb.addUniform("view", 16), kb.addUniform("projection", 16), kb.addUniform("vEyePosition", 4), kb.addUniform("inverseProjection", 16), kb
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const bb = this._engine._currentRenderTarget,
          cb = !(!bb || !bb.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const bb = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${bb} for ${this.name}`, cb)), this._sceneUBOIsMultiview.push(cb)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== cb && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, cb), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = cb);
        const sb = this._sceneUBOs[this._currentSceneUBOIndex++];
        return sb.unbindEffect(), sb
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
      isReadyForRendering(bb, cb) {
        this.prepareRenderList(), this.initRender(bb, cb);
        const sb = this._checkReadiness();
        return this.finishRender(), sb
      }
      prepareRenderList() {
        const bb = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let cb = 0; cb < this._waitingRenderList.length; cb++) {
              const sb = this._waitingRenderList[cb],
                kb = bb.getMeshById(sb);
              kb && this.renderList.push(kb)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const bb = this._scene.meshes;
          for (let cb = 0; cb < bb.length; cb++) {
            const sb = bb[cb];
            this.renderListPredicate(sb) && this.renderList.push(sb)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(bb, cb) {
        const sb = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), sb && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(sb.getViewMatrix(), sb.getProjectionMatrix(!0)), this._scene._activeCamera = sb, this._engine.setViewport(sb.rigParent ? sb.rigParent.viewport : sb.viewport, bb, cb)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const bb = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (bb.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), bb._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== bb.activeCamera && bb.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), bb.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const sb = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[bb], this.onBeforeRenderObservable.notifyObservers(bb);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(bb);
        else {
          const cb = this._prepareRenderingManager(bb),
            sb = this._scene.getOutlineRenderer?.(),
            kb = sb?.enabled;
          sb && (sb.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(bb), this._renderingManager.render(this.customRenderFunction, cb, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(bb), sb && (sb.enabled = kb)
        }
        cb || this.onAfterRenderObservable.notifyObservers(bb), this._engine.currentRenderPassId = sb
      }
      _checkReadiness() {
        const bb = this._scene,
          cb = this._engine.currentRenderPassId;
        let sb = !0;
        bb.getViewMatrix() || bb.updateTransformMatrix();
        const kb = this.options.numPasses;
        for (let Wb = 0; Wb < kb && sb; Wb++) {
          const cb = this.renderList ? this.renderList : bb.frameGraph ? bb.meshes : bb.getActiveMeshes().data,
            ab = this.renderList || bb.frameGraph ? cb.length : bb.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[Wb], this.onBeforeRenderObservable.notifyObservers(Wb);
          let Tb = null,
            Ub = ab;
          this.getCustomRenderList && (Tb = this.getCustomRenderList(Wb, cb, ab), Tb && (Ub = Tb.length)), Tb || (Tb = cb), this.options.doNotChangeAspectRatio || bb.updateTransformMatrix(!0);
          for (let bb = 0; bb < Ub && sb; ++bb) {
            const cb = Tb[bb];
            if (!cb.isEnabled() || cb.isBlocked || !cb.isVisible || !cb.XV) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(cb, this.refreshRate, !0)) {
                sb = !1;
                continue
              }
            } else if (!cb.isReady(!0)) {
              sb = !1;
              continue
            }
            let kb = cb._edgesRenderer,
              Wb = cb.hasThinInstances;
            if (cb.qY) {
              const bb = cb.Pkb;
              bb.edgesShareWithInstances && bb._edgesRenderer?.isEnabled && (kb = bb._edgesRenderer, Wb = !0)
            } else cb.ykb && cb.edgesShareWithInstances && (Wb = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && kb?.isEnabled && (kb.isReady(Wb) || (sb = !1))
          }
          if (this.renderParticles && bb.particlesEnabled) {
            const cb = this.particleSystemList || bb.mV;
            for (const bb of cb) bb.isReady() || (sb = !1)
          }
          if (this.renderSprites && bb.spritesEnabled) {
            const cb = this.spriteManagerList || bb.spriteManagers;
            if (cb)
              for (const kb of cb) bb.activeCamera && 0 === (kb.layerMask & bb.activeCamera.layerMask) || kb.isReady && !kb.isReady() && (sb = !1)
          }
          this.onAfterRenderObservable.notifyObservers(Wb), kb > 1 && (bb.incrementRenderId(), bb.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = cb, sb
      }
      _prepareRenderingManager() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const sb = this._scene;
        let kb, Wb, ab = null;
        const Tb = this.renderList ? this.renderList : sb.frameGraph ? sb.meshes : sb.getActiveMeshes().data,
          Ub = this.renderList || sb.frameGraph ? Tb.length : sb.getActiveMeshes().length;
        if (this.getCustomRenderList && (ab = this.getCustomRenderList(bb, Tb, Ub)), ab) kb = ab.length, Wb = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !cb && !this._engine.isWebGPU) return Tb;
          this._defaultRenderListPrepared = !0, ab = Tb, kb = Ub, Wb = !this.renderList || this.forceLayerMaskCheck
        }
        const Ib = sb.activeCamera,
          Hb = this.cameraForLOD ?? Ib,
          fb = sb.getBoundingBoxRenderer?.();
        if (sb._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && fb) {
            fb.reset();
            for (let bb = 0; bb < this._activeBoundingBoxes.length; bb++) {
              const cb = this._activeBoundingBoxes.data[bb];
              fb.renderList.push(cb)
            }
          }
          return ab
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), fb && fb.reset(), this.renderMeshes) {
          const bb = sb.getRenderId(),
            cb = sb.getFrameId();
          for (let Tb = 0; Tb < kb; Tb++) {
            const kb = ab[Tb];
            if (kb && !kb.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(kb, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!kb.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let ab, Tb;
              if (Hb) {
                const bb = kb._internalAbstractMeshDataInfo._currentLOD.get(Hb);
                bb && bb[1] === cb ? ab = bb[0] : (ab = sb.customLODSelector ? sb.customLODSelector(kb, Hb) : kb.getLOD(Hb), bb ? (bb[0] = ab, bb[1] = cb) : kb._internalAbstractMeshDataInfo._currentLOD.set(Hb, [ab, cb]))
              } else ab = kb;
              if (!ab) continue;
              if (ab !== kb && 0 !== ab.billboardMode && ab.computeWorldMatrix(), ab._preActivateForIntermediateRendering(bb), Tb = !(!Wb || !Ib) && 0 === (kb.layerMask & Ib.layerMask), kb.isEnabled() && kb.isVisible && kb.XV && !Tb) {
                if (this._activeMeshes.push(kb), ab._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, ab !== kb && ab._activate(bb, !0), this.enableBoundingBoxRendering && fb && fb._preActiveMesh(kb), kb._activate(bb, !0) && kb.XV.length) {
                  kb.qY ? kb._internalAbstractMeshDataInfo._actAsRegularMesh && (ab = kb) : ab._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, ab._internalAbstractMeshDataInfo._isActiveIntermediate = !0, sb._prepareSkeleton(ab);
                  for (let bb = 0; bb < ab.XV.length; bb++) {
                    const cb = ab.XV[bb];
                    this.enableBoundingBoxRendering && fb && fb._evaluateSubMesh(kb, cb), this._renderingManager.dispatch(cb, ab)
                  }
                }
                kb._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && fb && cb)
          for (let Mb = 0; Mb < fb.renderList.length; Mb++) {
            const bb = fb.renderList.data[Mb];
            this._activeBoundingBoxes.push(bb)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const bb = this.particleSystemList || sb.mV;
          for (let cb = 0; cb < bb.length; cb++) {
            const sb = bb[cb],
              kb = sb.emitter;
            sb.isStarted() && kb && (!kb.position || kb.isEnabled()) && this._renderingManager.dispatchParticles(sb)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return ab
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(bb, cb, sb, kb)
      }
      setRenderingAutoClearDepthStencil(bb, cb) {
        let sb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          kb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(bb, cb, sb, kb), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const bb = new lb(this.name, this._scene, this.options);
        return this.renderList && (bb.renderList = this.renderList.slice(0)), bb
      }
      dispose() {
        const bb = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          cb = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let sb = 0; sb < cb; sb++) {
          const cb = bb[sb];
          cb && void 0 !== cb.getMaterialForRenderPass(this.renderPassId) && cb.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const sb of this._sceneUBOs) sb.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === lb.REFRESHRATE_RENDER_ONCE && (this.refreshRate = lb.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    lb.REFRESHRATE_RENDER_ONCE = 0, lb.REFRESHRATE_RENDER_ONEVERYFRAME = 1, lb.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var Qb = sb(39296);
    class eb extends ab.e {
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
      setMaterialForRendering(bb, cb) {
        this._objectRenderer.setMaterialForRendering(bb, cb)
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
        const cb = this.EY();
        cb && cb.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(bb, cb, sb) {
        let Tb, Ub, Hb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          fb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Mb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Xb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          nb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : ab.e.TRILINEAR_SAMPLINGMODE,
          mb = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          Qb = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          eb = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          Cb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          Nb = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          Vb = arguments.length > 13 ? arguments[13] : void 0,
          Lb = arguments.length > 14 ? arguments[14] : void 0,
          ub = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          Yb = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          hb = !0,
          Jb = !1;
        if ("object" === typeof Hb) {
          const bb = Hb;
          Hb = !!bb.generateMipMaps, fb = bb.doNotChangeAspectRatio ?? !0, Mb = bb.type ?? 0, Xb = !!bb.isCube, nb = bb.samplingMode ?? ab.e.TRILINEAR_SAMPLINGMODE, mb = bb.generateDepthBuffer ?? !0, Qb = !!bb.generateStencilBuffer, eb = !!bb.isMulti, Cb = bb.format ?? 5, Nb = !!bb.delayAllocation, Vb = bb.samples, Lb = bb.creationFlags, ub = !!bb.noColorAttachment, Yb = !!bb.useSRGBBuffer, Tb = bb.colorAttachment, hb = bb.gammaSpace ?? hb, Ub = bb.existingObjectRenderer, Jb = !!bb.enableClusteredLights
        }
        if (super(null, sb, !Hb, void 0, nb, void 0, void 0, void 0, void 0, Cb), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new kb.c, this.onAfterUnbindObservable = new kb.c, this.onClearObservable = new kb.c, this.onResizeObservable = new kb.c, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = Wb.p.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(sb = this.EY())) return;
        const gb = this.EY().Sm();
        this._gammaSpace = hb, this._coordinatesMode = ab.e.PROJECTION_MODE, this.name = bb, this.isRenderTarget = !0, this._initialSizeParameter = cb, this._dontDisposeObjectRenderer = !!Ub, this._processSizeParameter(cb), this._objectRenderer = Ub ?? new lb(bb, sb, {
          numPasses: Xb ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: fb,
          enableClusteredLights: Jb
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const bb = this._scene;
          if (!this._disableEngineStages)
            for (const cb of bb._beforeRenderTargetClearStage) cb.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(gb) : this.skipInitialClear || gb.clear(this.clearColor ?? bb.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || bb.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const cb of bb._beforeRenderTargetDrawStage) cb.action(this, this._currentFaceIndex, this._currentLayer);
          gb._debugPushGroup && gb._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (gb._debugPopGroup && gb._debugPopGroup(), !this._disableEngineStages)
            for (const cb of this._scene._afterRenderTargetDrawStage) cb.action(this, this._currentFaceIndex, this._currentLayer);
          const bb = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const cb of this._scene._afterRenderTargetPostProcessStage) cb.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = bb), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), gb) : Ib.c.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(gb) : this.skipInitialClear || gb.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = gb.onResizeObservable.add((() => {})), this._generateMipMaps = !!Hb, this._doNotChangeAspectRatio = fb, eb || (this._renderTargetOptions = {
          generateMipMaps: Hb,
          type: Mb,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: mb,
          generateStencilBuffer: Qb,
          samples: Vb,
          creationFlags: Lb,
          noColorAttachment: ub,
          useSRGBBuffer: Yb,
          colorAttachment: Tb,
          label: this.name
        }, this.samplingMode === ab.e.NEAREST_SAMPLINGMODE && (this.wrapU = ab.e.CLAMP_ADDRESSMODE, this.wrapV = ab.e.CLAMP_ADDRESSMODE), Nb || (Xb ? (this._renderTarget = sb.Sm().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = ab.e.INVCUBIC_MODE, this._textureMatrix = Wb.e.Identity()) : this._renderTarget = sb.Sm().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== Vb && (this.samples = Vb)))
      }
      createDepthStencilTexture() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          ab = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(bb, cb, sb, kb, Wb, ab)
      }
      _processSizeParameter(bb) {
        if (bb.ratio) {
          this._sizeRatio = bb.ratio;
          const cb = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(cb.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(cb.getRenderHeight(), this._sizeRatio)
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
          const bb = this.EY();
          if (!bb) return;
          this._postProcessManager = new Tb.e(bb), this._postProcesses = new Array
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
        const cb = this._postProcesses.indexOf(bb); - 1 !== cb && (this._postProcesses.splice(cb, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
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
        const cb = this._size.depth;
        return cb || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(bb) {
        const cb = Math.max(1, this.getRenderSize() * bb);
        this.resize(cb)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(bb) {
        const cb = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const sb = this.EY();
        sb && (this._processSizeParameter(bb), this._renderTarget = cb ? sb.Sm().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : sb.Sm().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(bb, cb)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => sb(41232))).then((bb => this._dumpTools = bb))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const bb = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), bb
      }
      _render() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const sb = this.EY();
        if (!sb) return;
        void 0 !== this.useCameraPostProcesses && (bb = this.useCameraPostProcesses);
        const kb = sb.Sm();
        if (kb._debugPushGroup && kb._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let Wb = 0; Wb < 6; Wb++) this._renderToTarget(Wb, bb, cb), sb.incrementRenderId(), sb.resetCachedMaterial();
          else this._renderToTarget(0, bb, cb);
        else
          for (let Wb = 0; Wb < this.getRenderLayers(); Wb++) this._renderToTarget(0, bb, cb, Wb), sb.incrementRenderId(), sb.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), kb._debugPopGroup && kb._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(bb, cb) {
        const sb = bb * cb,
          kb = (0, Ub.o)(sb + 16384 / (128 + sb));
        return Math.min((0, Ub.c)(bb), kb)
      }
      _bindFrameBuffer() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const sb = this.EY();
        if (!sb) return;
        const kb = sb.Sm();
        this._renderTarget && kb.bindFramebuffer(this._renderTarget, this.isCube ? bb : void 0, void 0, void 0, this.ignoreCameraViewport, 0, cb)
      }
      _unbindFrameBuffer(bb, cb) {
        this._renderTarget && bb.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(cb)
        }))
      }
      _prepareFrame(bb, cb, sb, kb) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(cb, sb) : kb && bb.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(cb, sb)
      }
      _renderToTarget(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Wb = this.EY();
        if (!Wb) return;
        const ab = Wb.Sm();
        this._currentFaceIndex = bb, this._currentLayer = kb, this._currentUseCameraPostProcess = cb, this._currentDumpForDebug = sb, this._prepareFrame(Wb, bb, kb, cb), this._objectRenderer.render(bb + kb, !0), this._unbindFrameBuffer(ab, bb), this._texture && this.isCube && 5 === bb && ab.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(bb, cb, sb, kb)
      }
      setRenderingAutoClearDepthStencil(bb, cb) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(bb, cb)
      }
      clone() {
        const bb = this.getSize(),
          cb = new eb(this.name, bb, this.EY(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return cb.hasAlpha = this.hasAlpha, cb.level = this.level, cb.coordinatesMode = this.coordinatesMode, this.renderList && (cb.renderList = this.renderList.slice(0)), cb
      }
      serialize() {
        if (!this.name) return null;
        const bb = super.serialize();
        if (bb.renderTargetSize = this.getRenderSize(), bb.renderList = [], this.renderList)
          for (let cb = 0; cb < this.renderList.length; cb++) bb.renderList.push(this.renderList[cb].id);
        return bb
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.EY().Sm().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const bb = this.EY();
        if (!bb) return;
        let cb = bb.customRenderTargets.indexOf(this);
        cb >= 0 && bb.customRenderTargets.splice(cb, 1);
        for (const sb of bb.cameras) cb = sb.customRenderTargets.indexOf(this), cb >= 0 && sb.customRenderTargets.splice(cb, 1);
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
    eb.REFRESHRATE_RENDER_ONCE = lb.REFRESHRATE_RENDER_ONCE, eb.REFRESHRATE_RENDER_ONEVERYFRAME = lb.REFRESHRATE_RENDER_ONEVERYFRAME, eb.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = lb.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(eb.prototype, "noPrePassRenderer") || Object.defineProperty(eb.prototype, "noPrePassRenderer", (0, Qb.d)("RenderTargetTexture", "noPrePassRenderer"))
  },
  41194: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Hb,
      e: () => fb
    });
    var kb = sb(39576),
      Wb = sb(37700),
      ab = sb(36683),
      Tb = sb(39258),
      Ub = sb(39755);
    const Ib = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class Hb {
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ib;
        this._fullscreenViewport = new Wb.b(0, 0, 1, 1);
        const sb = cb.positions ?? Ib.positions,
          ab = cb.indices ?? Ib.indices;
        this.engine = bb, this._vertexBuffers = {
          [kb.l.PositionKind]: new kb.l(bb, sb, kb.l.PositionKind, !1, !1, 2)
        }, this._indexBuffer = bb.createIndexBuffer(ab), this._indexBufferLength = ab.length, this._onContextRestoredObserver = bb.onContextRestoredObservable.add((() => {
          this._indexBuffer = bb.createIndexBuffer(ab);
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
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = cb, this.engine.stencilState.stencilTest = sb, this.engine.enableEffect(bb.drawWrapper), this.bindBuffers(bb.effect), bb.onApplyObservable.notifyObservers({})
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
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!bb.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const sb = null === cb ? null : this._isRenderTargetTexture(cb) ? cb.renderTarget : cb;
        sb && this.engine.bindFramebuffer(sb), this.applyEffectWrapper(bb), this.draw(), sb && this.engine.unBindFramebuffer(sb), this.restoreStates()
      }
      dispose() {
        const bb = this._vertexBuffers[kb.l.PositionKind];
        bb && (bb.dispose(), delete this._vertexBuffers[kb.l.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class fb {
      static RegisterShaderCodeProcessing(bb, cb) {
        cb ? fb._CustomShaderCodeProcessing[bb ?? ""] = cb : delete fb._CustomShaderCodeProcessing[bb ?? ""]
      }
      static _GetShaderCodeProcessing(bb) {
        return fb._CustomShaderCodeProcessing[bb] ?? fb._CustomShaderCodeProcessing[""]
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
        this.alphaMode = 0, this.onEffectCreatedObservable = new ab.c(void 0, !0), this.onApplyObservable = new ab.c, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
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
        }))), this._drawWrapper = new Ub.b(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const cb = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, cb, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          kb = arguments.length > 2 ? arguments[2] : void 0,
          Wb = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, Wb && this._importPromises.push(...Wb);
        const ab = this.options.engine.isWebGPU && !fb.ForceGLSL;
        this._gatherImports(ab, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(ab && this._webGPUReady ? sb.e(356).then((() => sb(60810))) : sb.e(345).then((() => sb(60585)))), void 0 !== kb && kb(ab, this._importPromises), ab && this._webGPUReady && (this.options.shaderLanguage = 1), bb || this.updateEffect(cb)
      }
      updateEffect() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          kb = arguments.length > 3 ? arguments[3] : void 0,
          Wb = arguments.length > 4 ? arguments[4] : void 0,
          ab = arguments.length > 5 ? arguments[5] : void 0,
          Ub = arguments.length > 6 ? arguments[6] : void 0,
          Ib = arguments.length > 7 ? arguments[7] : void 0;
        const Hb = fb._GetShaderCodeProcessing(this.name);
        if (Hb?.defineCustomBindings) {
          const kb = cb?.slice() ?? [];
          kb.push(...this.options.uniforms);
          const Wb = sb?.slice() ?? [];
          Wb.push(...this.options.samplers), bb = Hb.defineCustomBindings(this.name, bb, kb, Wb), cb = kb, sb = Wb
        }
        this.options.defines = bb || "";
        const Mb = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let Xb;
        Xb = this.options.extraInitializationsAsync ? async () => {
          await (Mb?.()), await this.options.extraInitializationsAsync()
        }: Mb, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: Ub ?? this._shaderPath.vertex,
          fragment: Ib ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: cb || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: sb || this.options.samplers,
          defines: null !== bb ? bb : "",
          fallbacks: null,
          onCompiled: Wb ?? this.options.onCompiled,
          onError: ab ?? null,
          indexParameters: kb || this.options.indexParameters,
          processCodeAfterIncludes: Hb?.processCodeAfterIncludes ? (bb, cb) => Hb.processCodeAfterIncludes(this.name, bb, cb) : null,
          processFinalCode: Hb?.processFinalCode ? (bb, cb) => Hb.processFinalCode(this.name, bb, cb) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: Xb
        }, this.options.engine) : this._drawWrapper.effect = new Tb.c(this._shaderPath, this.options.attributeNames, cb || this.options.uniforms, sb || this.options.samplerNames, this.options.engine, bb, void 0, Wb || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, Xb), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !bb && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), fb._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.Sm().onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    fb.ForceGLSL = !1, fb._CustomShaderCodeProcessing = {}
  },
  41232: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      Dispose: () => Cb,
      DumpData: () => eb,
      DumpDataAsync: () => Qb,
      DumpFramebuffer: () => lb,
      DumpTools: () => Nb,
      EncodeImageAsync: () => mb,
      RegisterDumpTools: () => Lb
    });
    var kb = sb(39414),
      Wb = sb(41194),
      ab = sb(39531),
      Tb = sb(36688),
      Ub = sb(36677),
      Ib = sb(38284),
      Hb = sb(39487),
      fb = sb(39418);
    let Mb = null;
    async function Xb() {
      return Mb || (Mb = async function() {
        const bb = Ub.d.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        bb instanceof OffscreenCanvas && Ib.c.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: cb
        } = await Promise.resolve().then((() => sb(39251)));
        if (!cb.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const kb = new cb(bb, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        Ub.d.Instances.pop(), Ub.d.OnEnginesDisposedObservable.add((bb => {
          kb && bb !== kb && !kb.Scb && 0 === Ub.d.Instances.length && Cb()
        })), kb.getCaps().parallelShaderCompile = void 0;
        const ab = new Wb.d(kb),
          {
            passPixelShader: Tb
          } = await sb.e(364).then((() => sb(60880))),
          Hb = new Wb.e({
            engine: kb,
            name: Tb.name,
            fragmentShader: Tb.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: bb,
          dumpEngine: {
            engine: kb,
            renderer: ab,
            wrapper: Hb
          }
        }
      }()), await Mb
    }
    let nb = (() => {
      var bb;
      let cb, sb = [];
      return bb = class {
        static async EncodeImageAsync(bb, cb, sb, kb, Wb, Tb) {
          const Ub = await Xb(),
            Ib = Ub.dumpEngine;
          Ib.engine.setSize(cb, sb, !0);
          const Hb = Ib.engine.createRawTexture(bb, cb, sb, 5, !1, !Wb, 1);
          return Ib.renderer.setViewport(), Ib.renderer.applyEffectWrapper(Ib.wrapper), Ib.wrapper.effect._bindTexture("textureSampler", Hb), Ib.renderer.draw(), Hb.dispose(), await new Promise(((bb, cb) => {
            ab.g.ToBlob(Ub.canvas, (sb => {
              sb ? bb(sb) : cb(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), kb, Tb)
          }))
        }
      }, (() => {
        const Wb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        cb = [fb.h], (0, kb.j)(bb, null, cb, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: bb => "EncodeImageAsync" in bb,
            get: bb => bb.EncodeImageAsync
          },
          metadata: Wb
        }, null, sb), Wb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Wb
        }), (0, kb.m)(bb, sb)
      })(), bb
    })();
    const mb = nb.EncodeImageAsync;
    async function lb(bb, cb, sb, kb) {
      let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        ab = arguments.length > 5 ? arguments[5] : void 0,
        Tb = arguments.length > 6 ? arguments[6] : void 0;
      const Ub = await sb.readPixels(0, 0, bb, cb);
      eb(bb, cb, new Uint8Array(Ub.buffer), kb, Wb, ab, !0, void 0, Tb)
    }
    async function Qb(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Wb = arguments.length > 4 ? arguments[4] : void 0,
        Ub = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        fb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Mb = arguments.length > 7 ? arguments[7] : void 0;
      if (sb instanceof Float32Array) {
        const bb = new Uint8Array(sb.length);
        let cb = sb.length;
        for (; cb--;) {
          const kb = sb[cb];
          bb[cb] = Math.round(255 * (0, Tb.Clamp)(kb))
        }
        sb = bb
      }
      const Xb = await nb.EncodeImageAsync(sb, bb, cb, kb, Ub, Mb);
      void 0 !== Wb && ab.g.DownloadBlob(Xb, Wb), Xb.type !== kb && Ib.c.Warn(`DumpData: The requested mimeType '${kb}' is not supported. The result has mimeType '${Xb.type}' instead.`);
      const mb = await Xb.arrayBuffer();
      return fb ? mb : `data:${kb};base64,${(0,Hb.k)(mb)}`
    }

    function eb(bb, cb, sb, kb) {
      let Wb = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== Wb || kb || (Wb = ""), Qb(bb, cb, sb, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", Wb, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((bb => {
        kb && kb(bb)
      }))
    }

    function Cb() {
      Mb && (Mb?.then((bb => {
        bb.canvas instanceof HTMLCanvasElement && bb.canvas.remove(), bb.dumpEngine && (bb.dumpEngine.engine.dispose(), bb.dumpEngine.renderer.dispose(), bb.dumpEngine.wrapper.dispose())
      })), Mb = null)
    }
    const Nb = {
      DumpData: eb,
      DumpDataAsync: Qb,
      DumpFramebuffer: lb,
      Dispose: Cb
    };
    let Vb = !1;

    function Lb() {
      if (Vb) return;
      Vb = !0;
      ab.g.DumpData = eb, ab.g.DumpDataAsync = Qb, ab.g.DumpFramebuffer = lb
    }
  },
  41209: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => nb,
      e: () => mb,
      g: () => lb
    });
    var kb = sb(39895),
      Wb = sb(41218),
      ab = sb(39414),
      Tb = sb(41190),
      Ub = sb(39441),
      Ib = sb(41227),
      Hb = sb(39418);
    class fb extends Tb.c {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(bb, cb) {
        let sb = arguments.length > 4 ? arguments[4] : void 0;
        const kb = {
          size: "number" === typeof cb ? cb : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: sb,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...cb
        };
        super(bb, Ib.d.FragmentUrl, {
          effectWrapper: "number" !== typeof cb && cb.effectWrapper ? void 0 : new Ib.d(bb, sb, kb),
          ...kb
        })
      }
      static _Parse(bb, cb, sb, kb) {
        return Ub.d.Parse((() => new fb(bb.name, bb.options, cb, bb.renderTargetSamplingMode, bb._engine, bb.reusable)), bb, sb, kb)
      }
    }(() => {
      var bb;
      let cb, sb = Tb.c,
        kb = [];
      bb = class extends sb {
        get face() {
          return this._effectWrapper.face
        }
        set face(bb) {
          this._effectWrapper.face = bb
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(bb, cb) {
          let sb = arguments.length > 4 ? arguments[4] : void 0;
          const Wb = {
            size: "number" === typeof cb ? cb : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: sb,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...cb
          };
          super(bb, Ib.d.FragmentUrl, {
            effectWrapper: "number" !== typeof cb && cb.effectWrapper ? void 0 : new Ib.b(bb, sb, Wb),
            ...Wb
          }), (0, ab.m)(this, kb)
        }
        static _Parse(cb, sb, kb, Wb) {
          return Ub.d.Parse((() => new bb(cb.name, cb.options, sb, cb.renderTargetSamplingMode, cb._engine, cb.reusable)), cb, kb, Wb)
        }
      }, (() => {
        const Wb = "function" === typeof Symbol && Symbol.metadata ? Object.create(sb[Symbol.metadata] ?? null) : void 0;
        cb = [(0, Hb.E)()], (0, ab.j)(bb, null, cb, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: bb => "face" in bb,
            get: bb => bb.face
          },
          metadata: Wb
        }, null, kb), Wb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Wb
        })
      })()
    })();
    var Mb = sb(36688),
      Xb = sb(39503);

    function nb(bb, cb, sb, kb, Wb, ab, Ub, Ib) {
      const Hb = cb.Sm();
      return cb.isReady = !1, Wb = Wb ?? cb.samplingMode, kb = kb ?? cb.type, ab = ab ?? cb.format, Ub = Ub ?? cb.width, Ib = Ib ?? cb.height, -1 === kb && (kb = 0), new Promise((fb => {
        const Mb = new Tb.c("postprocess", bb, null, null, 1, null, Wb, Hb, !1, void 0, kb, void 0, null, !1, ab);
        Mb.externalTextureSamplerBinding = !0;
        const Xb = Hb.createRenderTargetTexture({
          width: Ub,
          height: Ib
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: Wb,
          type: kb,
          format: ab
        });
        Mb.onEffectCreatedObservable.addOnce((bb => {
          bb.executeWhenCompiled((() => {
            Mb.onApply = bb => {
              bb._bindTexture("textureSampler", cb), bb.setFloat2("scale", 1, 1)
            }, sb.postProcessManager.directRender([Mb], Xb, !0), Hb.restoreDefaultFramebuffer(), Hb._releaseTexture(cb), Mb && Mb.dispose(), Xb._swapAndDie(cb), cb.type = kb, cb.format = 5, cb.isReady = !0, fb(cb)
          }))
        }))
      }))
    }
    async function mb(bb, cb, ab) {
      let Ub = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Ib = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Hb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        fb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(bb) {
        if (bb.isReady()) return;
        if (bb.loadingError) throw new Error(bb.errorObject?.message || `Texture ${bb.name} errored while loading.`);
        const cb = bb.onLoadObservable;
        if (cb) return await new Promise((bb => cb.addOnce((() => bb()))));
        const sb = bb._texture?.onLoadedObservable;
        if (sb) return await new Promise((bb => sb.addOnce((() => bb()))));
        throw new Error(`Cannot determine readiness of texture ${bb.name}.`)
      }(bb);
      const Xb = bb.getInternalTexture(),
        nb = bb.is3D || !!Xb?.is3D,
        {
          width: mb,
          height: lb
        } = bb.getSize(),
        Qb = cb ?? mb,
        eb = ab ?? lb;
      if (Hb || nb || function(bb) {
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
        }(bb.textureFormat) || Qb !== mb || eb !== lb) {
        if (bb.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${Hb?"RTT":"compression"} is not supported.`);
        return await async function(bb, cb, ab, Ub, Ib) {
          let Hb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const fb = bb.EY(),
            Mb = fb.Sm(),
            Xb = bb.getInternalTexture(),
            nb = bb.is3D || !!Xb?.is3D;
          let mb;
          if (Mb.isWebGPU ? nb ? await sb.e(360).then((() => sb(60851))) : bb.isCube ? await sb.e(361).then((() => sb(60858))) : await sb.e(362).then((() => sb(60867))) : nb ? await sb.e(357).then((() => sb(60833))) : bb.isCube ? await sb.e(358).then((() => sb(60839))) : await sb.e(359).then((() => sb(60847))), nb) mb = new Tb.c("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: kb.e.NEAREST_NEAREST_MIPNEAREST,
            engine: Mb,
            shaderLanguage: Mb.isWebGPU ? 1 : 0
          });
          else if (bb.isCube) {
            const bb = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            mb = new Tb.c("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: kb.e.NEAREST_NEAREST_MIPNEAREST,
              engine: Mb,
              defines: bb[Ub],
              shaderLanguage: Mb.isWebGPU ? 1 : 0
            })
          } else mb = new Tb.c("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: kb.e.NEAREST_NEAREST_MIPNEAREST,
            engine: Mb,
            shaderLanguage: Mb.isWebGPU ? 1 : 0
          });
          await new Promise((bb => {
            mb.onEffectCreatedObservable.addOnce((cb => {
              cb.executeWhenCompiled((() => {
                bb(0)
              }))
            }))
          }));
          const lb = new Wb.d("temp", {
            width: cb,
            height: ab
          }, fb, !1);
          mb.onApply = function(cb) {
            cb.setTexture("textureSampler", bb), cb.setFloat("lod", Ib), cb.setInt("gamma", bb.gammaSpace ? 1 : 0), nb && cb.setFloat("slice", Hb)
          };
          try {
            if (lb.renderTarget && Xb) {
              const sb = Xb.samplingMode;
              0 !== Ib ? bb.updateSamplingMode(kb.e.NEAREST_NEAREST_MIPNEAREST) : bb.updateSamplingMode(kb.e.NEAREST_NEAREST), fb.postProcessManager.directRender([mb], lb.renderTarget, !0), bb.updateSamplingMode(sb);
              const Wb = await Mb.readPixels(0, 0, cb, ab),
                Tb = new Uint8Array(Wb.buffer, Wb.byteOffset, Wb.byteLength);
              return Mb.unBindFramebuffer(lb.renderTarget), Tb
            }
            throw Error("Render to texture failed.")
          } finally {
            lb.dispose(), mb.dispose()
          }
        }(bb, Qb, eb, Ub, Ib, fb)
      }
      let Cb = await bb.readPixels(Ub, Ib);
      if (!Cb) throw new Error(`Failed to read pixels from texture ${bb.name}.`);
      if (Cb instanceof Float32Array) {
        const bb = new Uint8Array(Cb.length);
        let cb = Cb.length;
        for (; cb--;) {
          const sb = Cb[cb];
          bb[cb] = Math.round(255 * (0, Mb.Clamp)(sb))
        }
        Cb = bb
      }
      const Nb = Qb * eb,
        Vb = 4 * Nb;
      if (Cb.length !== Vb) {
        const bb = 0 === Nb ? 0 : Cb.length / Nb;
        if (1 === bb || 2 === bb || 3 === bb) {
          const cb = new Uint8Array(Vb);
          for (let sb = 0, kb = 0, Wb = 0; sb < Nb; sb++, Wb += 4) {
            const sb = Cb[kb++];
            if (1 === bb) {
              cb[Wb] = sb, cb[Wb + 1] = sb, cb[Wb + 2] = sb, cb[Wb + 3] = 255;
              continue
            }
            const ab = Cb[kb++];
            2 !== bb ? (cb[Wb] = sb, cb[Wb + 1] = ab, cb[Wb + 2] = Cb[kb++], cb[Wb + 3] = 255) : (cb[Wb] = sb, cb[Wb + 1] = ab, cb[Wb + 2] = 0, cb[Wb + 3] = 255)
          }
          return cb
        }
      }
      return Cb
    }
    const lb = {
      CreateResizedCopy: function(bb, cb, sb) {
        let ab = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Tb = bb.EY(),
          Ub = Tb.Sm(),
          Ib = new Wb.d("resized" + bb.name, {
            width: cb,
            height: sb
          }, Tb, !bb.noMipmap, !0, bb._texture.type, !1, bb.samplingMode, !1);
        Ib.wrapU = bb.wrapU, Ib.wrapV = bb.wrapV, Ib.uOffset = bb.uOffset, Ib.vOffset = bb.vOffset, Ib.uScale = bb.uScale, Ib.vScale = bb.vScale, Ib.uAng = bb.uAng, Ib.vAng = bb.vAng, Ib.wAng = bb.wAng, Ib.coordinatesIndex = bb.coordinatesIndex, Ib.level = bb.level, Ib.anisotropicFilteringLevel = bb.anisotropicFilteringLevel, Ib._texture.isReady = !1, bb.wrapU = kb.e.CLAMP_ADDRESSMODE, bb.wrapV = kb.e.CLAMP_ADDRESSMODE;
        const Hb = new fb("pass", 1, null, ab ? kb.e.BILINEAR_SAMPLINGMODE : kb.e.NEAREST_SAMPLINGMODE, Ub, !1, 0);
        return Hb.externalTextureSamplerBinding = !0, Hb.onEffectCreatedObservable.addOnce((cb => {
          cb.executeWhenCompiled((() => {
            Hb.onApply = function(cb) {
              cb.setTexture("textureSampler", bb)
            };
            const cb = Ib.renderTarget;
            cb && (Tb.postProcessManager.directRender([Hb], cb), Ub.unBindFramebuffer(cb), Ib.disposeFramebufferObjects(), Hb.dispose(), Ib.getInternalTexture().isReady = !0)
          }))
        })), Ib
      },
      ApplyPostProcess: nb,
      ToHalfFloat: Xb.f,
      FromHalfFloat: Xb.d,
      GetTextureDataAsync: mb
    }
  },
  41190: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => mb
    });
    var kb = sb(39414),
      Wb = sb(39536),
      ab = sb(36683),
      Tb = sb(36656),
      Ub = sb(39258),
      Ib = sb(39418),
      Hb = sb(39441),
      fb = sb(36698),
      Mb = sb(39311),
      Xb = sb(39337),
      nb = sb(41194);
    let mb = (() => {
        var bb;
        let cb, Ub, Mb, mb, lb, eb, Cb, Nb, Vb, Lb, ub, Yb, hb, Jb, gb, Bb, tb = [],
          yb = [],
          Pb = [],
          Db = [],
          Eb = [],
          ib = [],
          Ob = [],
          Gb = [],
          Kb = [],
          Zb = [],
          zb = [],
          qb = [],
          db = [],
          Ab = [],
          wb = [],
          rb = [],
          ob = [],
          Sb = [],
          Rb = [],
          vb = [],
          Fb = [],
          xb = [],
          jb = [],
          pb = [],
          bc = [],
          cc = [],
          sc = [],
          kc = [],
          Wc = [];
        return bb = class {
          static get ForceGLSL() {
            return nb.e.ForceGLSL
          }
          static set ForceGLSL(bb) {
            nb.e.ForceGLSL = bb
          }
          static RegisterShaderCodeProcessing(bb, cb) {
            nb.e.RegisterShaderCodeProcessing(bb, cb)
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
            return this.Xw
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.I5(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(cb, sb, Ub, Ib, Hb, fb) {
            let Mb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              Xb = arguments.length > 7 ? arguments[7] : void 0,
              mb = arguments.length > 8 ? arguments[8] : void 0,
              lb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              eb = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              Cb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              Nb = arguments.length > 12 ? arguments[12] : void 0,
              Vb = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              Lb = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              ub = arguments.length > 15 ? arguments[15] : void 0,
              Yb = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, kb.m)(this, tb), null), this.uniqueId = (0, kb.m)(this, yb, void 0), this.width = ((0, kb.m)(this, Pb), (0, kb.m)(this, Db, -1)), this.height = ((0, kb.m)(this, Eb), (0, kb.m)(this, ib, -1)), this.nodeMaterialSource = ((0, kb.m)(this, Ob), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, kb.m)(this, Gb, void 0), this.clearColor = ((0, kb.m)(this, Kb), (0, kb.m)(this, Zb, void 0)), this.autoClear = ((0, kb.m)(this, zb), (0, kb.m)(this, qb, !0)), this.forceAutoClearInAlphaMode = ((0, kb.m)(this, db), (0, kb.m)(this, Ab, !1)), this.alphaConstants = ((0, kb.m)(this, wb), (0, kb.m)(this, rb, void 0)), this.animations = ((0, kb.m)(this, ob), []), this.enablePixelPerfectMode = (0, kb.m)(this, Sb, !1), this.forceFullscreenViewport = ((0, kb.m)(this, Rb), (0, kb.m)(this, vb, !0)), this.inspectableCustomProperties = (0, kb.m)(this, Fb), this.scaleMode = (0, kb.m)(this, xb, 1), this.alwaysForcePOT = ((0, kb.m)(this, jb), (0, kb.m)(this, pb, !1)), this._samples = ((0, kb.m)(this, bc), (0, kb.m)(this, cc, 1)), this.adaptScaleToCurrentViewport = ((0, kb.m)(this, sc), (0, kb.m)(this, kc, !1)), this.doNotSerialize = ((0, kb.m)(this, Wc), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new Wb.d(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new Tb.n(1, 1), this._texelSize = Tb.n.Zero(), this.onActivateObservable = new ab.c, this.onSizeChangedObservable = new ab.c, this.onApplyObservable = new ab.c, this.onBeforeRenderObservable = new ab.c, this.onAfterRenderObservable = new ab.c, this.ZY = new ab.c, Qb();
            let hb, Jb = 1,
              gb = null;
            if (Ub && !Array.isArray(Ub)) {
              const bb = Ub;
              Ub = bb.uniforms ?? null, Ib = bb.samplers ?? null, Jb = bb.size ?? 1, fb = bb.camera ?? null, Mb = bb.samplingMode ?? 1, Xb = bb.engine, mb = bb.reusable, lb = Array.isArray(bb.defines) ? bb.defines.join("\n") : bb.defines ?? null, eb = bb.textureType ?? 0, Cb = bb.vertexUrl ?? "postprocess", Nb = bb.indexParameters, Vb = bb.blockCompilation ?? !1, Lb = bb.textureFormat ?? 5, ub = bb.shaderLanguage ?? 0, gb = bb.uniformBuffers ?? null, Yb = bb.extraInitializations, hb = bb.effectWrapper
            } else Hb && (Jb = "number" === typeof Hb ? Hb : {
              width: Hb.width,
              height: Hb.height
            });
            if (this._useExistingThinPostProcess = !!hb, this._effectWrapper = hb ?? new nb.e({
                name: cb,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: sb,
                engine: Xb || fb?.EY().Sm(),
                uniforms: Ub,
                samplers: Ib,
                uniformBuffers: gb,
                defines: lb,
                vertexUrl: Cb,
                indexParameters: Nb,
                blockCompilation: !0,
                shaderLanguage: ub,
                extraInitializations: void 0
              }), this.name = cb, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != fb ? (this.Xw = fb, this._scene = fb.EY(), fb.attachPostProcess(this), this._engine = this._scene.Sm(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : Xb && (this._engine = Xb, this._engine.postProcesses.push(this)), this._options = Jb, this.renderTargetSamplingMode = Mb || 1, this._reusable = mb || !1, this._textureType = eb, this._textureFormat = Lb, this._shaderLanguage = ub || 0, this._samplers = Ib || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = sb, this._vertexUrl = Cb, this._parameters = Ub || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = gb || [], this._indexParameters = Nb, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const cb = [];
              this._gatherImports(this._engine.isWebGPU && !bb.ForceGLSL, cb), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(Vb, lb, Yb, cb)
            }
          }
          _gatherImports() {
            let bb = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? bb.push(Promise.all([sb.e(356).then((() => sb(60810)))])) : bb.push(Promise.all([sb.e(345).then((() => sb(60585)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          Sm() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(bb) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = bb, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new Wb.d(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              kb = arguments.length > 3 ? arguments[3] : void 0,
              Wb = arguments.length > 4 ? arguments[4] : void 0,
              ab = arguments.length > 5 ? arguments[5] : void 0,
              Tb = arguments.length > 6 ? arguments[6] : void 0,
              Ub = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(bb, cb, sb, kb, Wb, ab, Tb, Ub), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(bb, cb) {
            let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let Wb = 0; Wb < this._textureCache.length; Wb++)
              if (this._textureCache[Wb].texture.width === bb.width && this._textureCache[Wb].texture.height === bb.height && this._textureCache[Wb].postProcessChannel === sb && this._textureCache[Wb].texture._generateDepthBuffer === cb.generateDepthBuffer && this._textureCache[Wb].texture.samples === cb.samples) return this._textureCache[Wb].texture;
            const kb = this._engine.createRenderTargetTexture(bb, cb);
            return this._textureCache.push({
              texture: kb,
              postProcessChannel: sb,
              lastUsedRenderId: -1
            }), kb
          }
          _flushTextureCache() {
            const bb = this._renderId;
            for (let cb = this._textureCache.length - 1; cb >= 0; cb--)
              if (bb - this._textureCache[cb].lastUsedRenderId > 100) {
                let bb = !1;
                for (let sb = 0; sb < this._textures.length; sb++)
                  if (this._textures.data[sb] === this._textureCache[cb].texture) {
                    bb = !0;
                    break
                  } bb || (this._textureCache[cb].texture.dispose(), this._textureCache.splice(cb, 1))
              }
          }
          resize(bb, cb) {
            let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Wb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = bb, this.height = cb;
            let ab = null;
            if (sb)
              for (let Ib = 0; Ib < sb._postProcesses.length; Ib++)
                if (null !== sb._postProcesses[Ib]) {
                  ab = sb._postProcesses[Ib];
                  break
                } const Tb = {
                width: this.width,
                height: this.height
              },
              Ub = {
                generateMipMaps: kb,
                generateDepthBuffer: Wb || ab === this,
                generateStencilBuffer: (Wb || ab === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(Tb, Ub, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(Tb, Ub, 1)), this._texelSize.I5(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let bb;
            if (this._shareOutputWithPostProcess) bb = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) bb = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let cb;
              bb = this.inputTexture;
              for (let sb = 0; sb < this._textureCache.length; sb++)
                if (this._textureCache[sb].texture === bb) {
                  cb = this._textureCache[sb];
                  break
                } cb && (cb.lastUsedRenderId = this._renderId)
            }
            return bb
          }
          activate(bb) {
            let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              sb = arguments.length > 2 ? arguments[2] : void 0;
            const kb = null === bb || void 0 !== bb.cameraRigMode ? bb || this.Xw : null,
              Wb = kb?.EY() ?? bb,
              ab = Wb.Sm(),
              Tb = ab.getCaps().maxTextureSize,
              Ub = (cb ? cb.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              Ib = (cb ? cb.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let Hb = this._options.width || Ub,
              fb = this._options.height || Ib;
            const Mb = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let nb = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const bb = ab.currentViewport;
                bb && (Hb *= bb.width, fb *= bb.height)
              }(Mb || this.alwaysForcePOT) && (this._options.width || (Hb = ab.needPOTTextures ? (0, Xb.f)(Hb, Tb, this.scaleMode) : Hb), this._options.height || (fb = ab.needPOTTextures ? (0, Xb.f)(fb, Tb, this.scaleMode) : fb)), this.width === Hb && this.height === fb && (nb = this._getTarget()) || this.resize(Hb, fb, kb, Mb, sb), this._textures.forEach((bb => {
                bb.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(bb, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return nb || (nb = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.I5(Ub / Hb, Ib / fb), this._engine.bindFramebuffer(nb, 0, Ub, Ib, this.forceFullscreenViewport)) : (this._scaleRatio.I5(1, 1), this._engine.bindFramebuffer(nb, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(kb), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : Wb.clearColor, Wb._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), nb
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
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.Sm().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), bb = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", bb?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
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
            let cb;
            if (bb = bb || this.Xw, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (cb = this._parentContainer.postProcesses.indexOf(this), cb > -1 && this._parentContainer.postProcesses.splice(cb, 1), this._parentContainer = null), cb = this._engine.postProcesses.indexOf(this), -1 !== cb && this._engine.postProcesses.splice(cb, 1), this.ZY.notifyObservers(), bb) {
              if (bb.detachPostProcess(this), cb = bb._postProcesses.indexOf(this), 0 === cb && bb._postProcesses.length > 0) {
                const bb = this.Xw._getFirstPostProcess();
                bb && bb.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const bb = Hb.d.Serialize(this),
              cb = this.getCamera() || this._scene && this._scene.activeCamera;
            return bb.customType = "BABYLON." + this.getClassName(), bb.cameraId = cb ? cb.id : null, bb.reusable = this._reusable, bb.textureType = this._textureType, bb.fragmentUrl = this._fragmentUrl, bb.parameters = this._parameters, bb.samplers = this._samplers, bb.uniformBuffers = this._uniformBuffers, bb.options = this._options, bb.defines = this._postProcessDefines, bb.textureFormat = this._textureFormat, bb.vertexUrl = this._vertexUrl, bb.indexParameters = this._indexParameters, bb
          }
          clone() {
            const cb = this.serialize();
            cb._engine = this._engine, cb.cameraId = null;
            const sb = bb.Parse(cb, this._scene, "");
            return sb ? (sb.onActivateObservable = this.onActivateObservable.clone(), sb.onSizeChangedObservable = this.onSizeChangedObservable.clone(), sb.onApplyObservable = this.onApplyObservable.clone(), sb.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), sb.onAfterRenderObservable = this.onAfterRenderObservable.clone(), sb._prePassEffectConfiguration = this._prePassEffectConfiguration, sb) : null
          }
          static Parse(bb, cb, sb) {
            const kb = (0, fb.e)(bb.customType);
            if (!kb || !kb._Parse) return null;
            const Wb = cb ? cb.getCameraById(bb.cameraId) : null;
            return kb._Parse(bb, Wb, cb, sb)
          }
          static _Parse(cb, sb, kb, Wb) {
            return Hb.d.Parse((() => new bb(cb.name, cb.fragmentUrl, cb.parameters, cb.samplers, cb.options, sb, cb.renderTargetSamplingMode, cb._engine, cb.reusable, cb.defines, cb.textureType, cb.vertexUrl, cb.indexParameters, !1, cb.textureFormat)), cb, kb, Wb)
          }
        }, (() => {
          const sb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cb = [(0, Ib.E)()], Ub = [(0, Ib.E)()], Mb = [(0, Ib.E)()], mb = [(0, Ib.E)()], lb = [(0, Ib.E)()], eb = [(0, Ib.q)()], Cb = [(0, Ib.E)()], Nb = [(0, Ib.E)()], Vb = [(0, Ib.E)()], Lb = [(0, Ib.E)()], ub = [(0, Ib.E)()], Yb = [(0, Ib.E)()], hb = [(0, Ib.E)()], Jb = [(0, Ib.E)()], gb = [(0, Ib.E)("samples")], Bb = [(0, Ib.E)()], (0, kb.j)(bb, null, Ub, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: bb => "name" in bb,
              get: bb => bb.name
            },
            metadata: sb
          }, null, tb), (0, kb.j)(bb, null, Vb, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: bb => "alphaMode" in bb,
              get: bb => bb.alphaMode
            },
            metadata: sb
          }, null, tb), (0, kb.j)(null, null, cb, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: bb => "uniqueId" in bb,
              get: bb => bb.uniqueId,
              set: (bb, cb) => {
                bb.uniqueId = cb
              }
            },
            metadata: sb
          }, yb, Pb), (0, kb.j)(null, null, Mb, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: bb => "width" in bb,
              get: bb => bb.width,
              set: (bb, cb) => {
                bb.width = cb
              }
            },
            metadata: sb
          }, Db, Eb), (0, kb.j)(null, null, mb, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: bb => "height" in bb,
              get: bb => bb.height,
              set: (bb, cb) => {
                bb.height = cb
              }
            },
            metadata: sb
          }, ib, Ob), (0, kb.j)(null, null, lb, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: bb => "renderTargetSamplingMode" in bb,
              get: bb => bb.renderTargetSamplingMode,
              set: (bb, cb) => {
                bb.renderTargetSamplingMode = cb
              }
            },
            metadata: sb
          }, Gb, Kb), (0, kb.j)(null, null, eb, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "clearColor" in bb,
              get: bb => bb.clearColor,
              set: (bb, cb) => {
                bb.clearColor = cb
              }
            },
            metadata: sb
          }, Zb, zb), (0, kb.j)(null, null, Cb, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: bb => "autoClear" in bb,
              get: bb => bb.autoClear,
              set: (bb, cb) => {
                bb.autoClear = cb
              }
            },
            metadata: sb
          }, qb, db), (0, kb.j)(null, null, Nb, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: bb => "forceAutoClearInAlphaMode" in bb,
              get: bb => bb.forceAutoClearInAlphaMode,
              set: (bb, cb) => {
                bb.forceAutoClearInAlphaMode = cb
              }
            },
            metadata: sb
          }, Ab, wb), (0, kb.j)(null, null, Lb, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: bb => "alphaConstants" in bb,
              get: bb => bb.alphaConstants,
              set: (bb, cb) => {
                bb.alphaConstants = cb
              }
            },
            metadata: sb
          }, rb, ob), (0, kb.j)(null, null, ub, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: bb => "enablePixelPerfectMode" in bb,
              get: bb => bb.enablePixelPerfectMode,
              set: (bb, cb) => {
                bb.enablePixelPerfectMode = cb
              }
            },
            metadata: sb
          }, Sb, Rb), (0, kb.j)(null, null, Yb, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: bb => "forceFullscreenViewport" in bb,
              get: bb => bb.forceFullscreenViewport,
              set: (bb, cb) => {
                bb.forceFullscreenViewport = cb
              }
            },
            metadata: sb
          }, vb, Fb), (0, kb.j)(null, null, hb, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: bb => "scaleMode" in bb,
              get: bb => bb.scaleMode,
              set: (bb, cb) => {
                bb.scaleMode = cb
              }
            },
            metadata: sb
          }, xb, jb), (0, kb.j)(null, null, Jb, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: bb => "alwaysForcePOT" in bb,
              get: bb => bb.alwaysForcePOT,
              set: (bb, cb) => {
                bb.alwaysForcePOT = cb
              }
            },
            metadata: sb
          }, pb, bc), (0, kb.j)(null, null, gb, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: bb => "_samples" in bb,
              get: bb => bb._samples,
              set: (bb, cb) => {
                bb._samples = cb
              }
            },
            metadata: sb
          }, cc, sc), (0, kb.j)(null, null, Bb, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: bb => "adaptScaleToCurrentViewport" in bb,
              get: bb => bb.adaptScaleToCurrentViewport,
              set: (bb, cb) => {
                bb.adaptScaleToCurrentViewport = cb
              }
            },
            metadata: sb
          }, kc, Wc), sb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: sb
          })
        })(), bb
      })(),
      lb = !1;

    function Qb() {
      lb || (lb = !0, Mb.b.prototype.setTextureFromPostProcess = function(bb, cb, sb) {
        let kb = null;
        cb && (cb._forcedOutputTexture ? kb = cb._forcedOutputTexture : cb._textures.data[cb._currentRenderTextureInd] && (kb = cb._textures.data[cb._currentRenderTextureInd])), this._bindTexture(bb, kb?.texture ?? null, sb)
      }, Mb.b.prototype.setTextureFromPostProcessOutput = function(bb, cb, sb) {
        this._bindTexture(bb, cb?._outputTexture?.texture ?? null, sb)
      }, Ub.c.prototype.setTextureFromPostProcess = function(bb, cb) {
        this._engine.setTextureFromPostProcess(this._samplers[bb], cb, bb)
      }, Ub.c.prototype.setTextureFromPostProcessOutput = function(bb, cb) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[bb], cb, bb)
      }, (0, fb.h)("BABYLON.PostProcess", mb))
    }
  },
  41227: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Tb,
      d: () => ab
    });
    var kb = sb(41194),
      Wb = sb(36677);
    class ab extends kb.e {
      _gatherImports(bb, cb) {
        bb ? (this._webGPUReady = !0, cb.push(Promise.all([sb.e(363).then((() => sb(60875)))]))) : cb.push(Promise.all([sb.e(364).then((() => sb(60880)))])), super._gatherImports(bb, cb)
      }
      constructor(bb) {
        let cb = arguments.length > 2 ? arguments[2] : void 0;
        const sb = {
          name: bb,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Wb.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: ab.FragmentUrl,
          ...cb
        };
        sb.engine || (sb.engine = Wb.d.LastCreatedEngine), super(sb)
      }
    }
    ab.FragmentUrl = "pass";
    class Tb extends kb.e {
      _gatherImports(bb, cb) {
        bb ? (this._webGPUReady = !0, cb.push(Promise.all([sb.e(365).then((() => sb(60883)))]))) : cb.push(Promise.all([sb.e(366).then((() => sb(60886)))])), super._gatherImports(bb, cb)
      }
      constructor(bb) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: bb,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Wb.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: Tb.FragmentUrl,
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
    Tb.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);